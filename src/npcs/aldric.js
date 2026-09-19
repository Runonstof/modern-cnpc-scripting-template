const API = Java.type('noppes.npcs.api.NpcAPI').Instance();
const Display = Java.type('net.minecraft.world.entity.Display');
const Integer = Java.type('java.lang.Integer');
const Thread = Java.type('java.lang.Thread');
const Vector3f = Java.type('org.joml.Vector3f');
const System = Java.type('java.lang.System');

function displayDataAccessor(seargeName) {
  const field = Display.class.getDeclaredField(seargeName);
  field.setAccessible(true);
  return field.get(null);
}

// f_268449_ = net.minecraft.world.entity.Display#DATA_INTERPOLATION_DURATION_ID
const INTERP_DURATION_ID = displayDataAccessor('f_268449_');
// f_276329_ = net.minecraft.world.entity.Display#DATA_INTERPOLATION_START_DELTA_TICKS_ID
const INTERP_START_ID = displayDataAccessor('f_276329_');
// f_268598_ = net.minecraft.world.entity.Display#DATA_TRANSLATION_ID
const TRANSLATION_ID = displayDataAccessor('f_268598_');
// f_268489_ = net.minecraft.world.entity.Display#DATA_SCALE_ID
const SCALE_ID = displayDataAccessor('f_268489_');

const ORBIT_COUNT = 8;
const ORBIT_RADIUS = 1.75;
const TICKS_PER_SEC = 20;
const ORBIT_SPEED = 0.18 * TICKS_PER_SEC;
const TILT_MAX = (20 * Math.PI) / 180;
const TILT_SPEED = ((Math.PI * 2) / 110) * TICKS_PER_SEC;
const TILT_AXIS_SPEED = ((Math.PI * 2) / 180) * TICKS_PER_SEC;
const BLOCK_SCALE = 0.35;
const THROW_SCALE = 0.8;
const ORBIT_TAG = 'aldric_orbit';
const SHOT_TAG = 'aldric_shot';
const ORBIT_TIMER = 10;
const THREAD_KEY = 'orbitThread';
const GEN_KEY = 'orbitGen';
const START_KEY = 'orbitStartNanos';
const SLOTS_KEY = 'orbitSlots';
const CAST_KEY = 'magmaCast';
const ELEMENT_KEY = 'orbitElement';
const REFILL_KEY = 'orbitRefill';
const THREAD_SLEEP_MS = 20;
const PAUSE_AFTER_NS = 100 * 1e6;
const ATTACK_RANGE = 12;
const LIFT_SEC = 4;
const HOLD_SEC = 0.5;
const REFILL_JOIN_SEC = 0.8;
const ELEMENT_MAGMA = 'magma';
const ELEMENT_ICE = 'ice';
const THROW_SPEED = 16;
const GRAVITY = 6;
const EXPLODE_RANGE = 2.5;
const CAST_COOLDOWN_SEC = 1.25;
const WALK_SPEED = 4;
const PUPPET_REST = 180;
const ARM_LIFT_START = { x: 165, y: 180, z: 190 };

function threadName(uuid) {
  return 'aldric-orbit-' + uuid;
}

function nowSec(npc) {
  const startNanos = npc.getTempdata().get(START_KEY) || System.nanoTime();
  return (System.nanoTime() - startNanos) / 1e9;
}

function distanceTo(a, b) {
  const dx = a.getX() - b.getX();
  const dy = a.getY() - b.getY();
  const dz = a.getZ() - b.getZ();
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function easeInOut(t) {
  return 0.5 - 0.5 * Math.cos(Math.PI * Math.max(0, Math.min(1, t)));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function tiltedOrbitPoint(angle, time) {
  const tilt = TILT_MAX * Math.sin(time * TILT_SPEED);
  const axis = time * TILT_AXIS_SPEED;
  return {
    x: Math.cos(angle) * ORBIT_RADIUS,
    y: Math.sin(angle - axis) * ORBIT_RADIUS * Math.sin(tilt),
    z: Math.sin(angle) * ORBIT_RADIUS,
  };
}

function orbitTag(npc) {
  return ORBIT_TAG + ':' + npc.getUUID();
}

function shotTag(npc) {
  return SHOT_TAG + ':' + npc.getUUID();
}

function getSlots(npc) {
  return npc.getTempdata().get(SLOTS_KEY) || [];
}

function setSlots(npc, slots) {
  npc.getTempdata().put(SLOTS_KEY, slots);
}

function getElement(npc) {
  return npc.getTempdata().get(ELEMENT_KEY) || ELEMENT_MAGMA;
}

function setElement(npc, element) {
  npc.getTempdata().put(ELEMENT_KEY, element);
}

function blockNameFor(element) {
  return element === ELEMENT_ICE ? 'minecraft:blue_ice' : 'minecraft:magma_block';
}

function trailParticle(element) {
  return element === ELEMENT_ICE ? 'snowflake' : 'lava';
}

function spawnOrbitBlock(world, x, y, z, npc, element) {
  const ent = world.createEntity('minecraft:block_display');
  const extra = API.stringToNbt(
    '{block_state:{Name:"' +
      blockNameFor(element || getElement(npc)) +
      '"},interpolation_duration:2,' +
      'transformation:{translation:[0f,0f,0f],left_rotation:[0f,0f,0f,1f],' +
      'right_rotation:[0f,0f,0f,1f],scale:[' +
      BLOCK_SCALE +
      'f,' +
      BLOCK_SCALE +
      'f,' +
      BLOCK_SCALE +
      'f]}}'
  );
  const nbt = ent.getEntityNbt();
  nbt.merge(extra);
  ent.setEntityNbt(nbt);
  ent.setPosition(x, y, z);
  ent.addTag(ORBIT_TAG);
  ent.addTag(orbitTag(npc));
  ent.spawn();
  return ent.getUUID();
}

function despawnTagged(npc) {
  const world = npc.getWorld();
  const tags = [orbitTag(npc), shotTag(npc)];
  const nearby = world.getNearbyEntities(npc.getPos(), 48, -1);
  for (let i = 0; i < nearby.length; i++) {
    const ent = nearby[i];
    if (!ent || !ent.hasTag) {
      continue;
    }
    for (let t = 0; t < tags.length; t++) {
      if (ent.hasTag(tags[t])) {
        ent.despawn();
        break;
      }
    }
  }
  const slots = getSlots(npc);
  for (let i = 0; i < slots.length; i++) {
    if (!slots[i]) {
      continue;
    }
    const ent = world.getEntity(slots[i]);
    if (ent) {
      ent.despawn();
    }
  }
  const cast = npc.getTempdata().get(CAST_KEY);
  if (cast && cast.uuid) {
    const flying = world.getEntity(cast.uuid);
    if (flying) {
      flying.despawn();
    }
  }
  setSlots(npc, []);
  npc.getTempdata().remove(CAST_KEY);
  npc.getTempdata().remove(REFILL_KEY);
  npc.getTempdata().put('orbitUuids', []);
}

function fillEmptyOrbit(npc) {
  const world = npc.getWorld();
  let slots = getSlots(npc).slice();
  while (slots.length < ORBIT_COUNT) {
    slots.push(null);
  }
  for (let i = 0; i < ORBIT_COUNT; i++) {
    const existing = slots[i] ? world.getEntity(slots[i]) : null;
    if (existing && existing.isAlive()) {
      slots[i] = existing.getUUID();
      continue;
    }
    slots[i] = spawnOrbitBlock(world, npc.getX(), npc.getY(), npc.getZ(), npc, getElement(npc));
  }
  setSlots(npc, slots);
  return slots;
}

function recoverOrbit(npc) {
  const slots = syncOrbitSlots(npc);
  if (ammoCount(slots) > 0) {
    return slots;
  }
  const world = npc.getWorld();
  const nearby = world.getNearbyEntities(npc.getPos(), 16, -1);
  const adopted = [];
  for (let i = 0; i < nearby.length; i++) {
    const ent = nearby[i];
    if (!ent || !ent.isAlive() || !ent.hasTag) {
      continue;
    }
    if (!ent.hasTag(orbitTag(npc)) || ent.hasTag(shotTag(npc))) {
      continue;
    }
    adopted.push(ent.getUUID());
  }
  if (adopted.length) {
    const next = [];
    for (let i = 0; i < ORBIT_COUNT; i++) {
      next.push(adopted[i] || null);
    }
    setSlots(npc, next);
    return next;
  }
  if (npc.getTempdata().get(CAST_KEY) || npc.getTempdata().get(REFILL_KEY)) {
    return slots;
  }
  return fillEmptyOrbit(npc);
}

function syncOrbitSlots(npc) {
  const world = npc.getWorld();
  const slots = getSlots(npc).slice();
  while (slots.length < ORBIT_COUNT) {
    slots.push(null);
  }
  for (let i = 0; i < ORBIT_COUNT; i++) {
    if (!slots[i]) {
      continue;
    }
    const ent = world.getEntity(slots[i]);
    if (!ent || !ent.isAlive()) {
      slots[i] = null;
    }
  }
  setSlots(npc, slots);
  return slots;
}

function ammoCount(slots) {
  let n = 0;
  for (let i = 0; i < slots.length; i++) {
    if (slots[i]) {
      n++;
    }
  }
  return n;
}

function applyDisplayPose(ent, tx, ty, tz, scale, interp) {
  const duration = interp === undefined ? 2 : interp;
  const mc = ent.getMCEntity();
  // m_20088_ = net.minecraft.world.entity.Entity#getEntityData
  const data = mc.m_20088_();
  // m_135381_ = net.minecraft.network.syncher.SynchedEntityData#set
  data.m_135381_(TRANSLATION_ID, new Vector3f(tx, ty, tz));
  data.m_135381_(SCALE_ID, new Vector3f(scale, scale, scale));
  data.m_135381_(INTERP_DURATION_ID, Integer.valueOf(duration));
  // m_276349_ = net.minecraft.network.syncher.SynchedEntityData#set (force)
  data.m_276349_(INTERP_START_ID, Integer.valueOf(0), true);
}

function overheadPoint(npc, scale) {
  return {
    x: 0,
    y: npc.getHeight() + 0.55,
    z: 0,
    scale: scale,
  };
}

function orbitWorldOffset(npc, slot, time) {
  const spin = time * ORBIT_SPEED;
  const angle = spin + (Math.PI * 2 * slot) / ORBIT_COUNT;
  const point = tiltedOrbitPoint(angle, time);
  const center = BLOCK_SCALE / 2;
  const eyeY = npc.getEyeHeight() - center;
  return {
    x: point.x - center,
    y: eyeY + point.y,
    z: point.z - center,
    scale: BLOCK_SCALE,
  };
}

function updateOrbit(npc) {
  const slots = syncOrbitSlots(npc);
  const time = nowSec(npc);
  const cx = npc.getX();
  const cy = npc.getY();
  const cz = npc.getZ();
  const center = BLOCK_SCALE / 2;
  const world = npc.getWorld();

  for (let i = 0; i < slots.length; i++) {
    if (!slots[i]) {
      continue;
    }
    const ent = world.getEntity(slots[i]);
    if (!ent || !ent.isAlive()) {
      continue;
    }
    const pose = orbitWorldOffset(npc, i, time);
    applyDisplayPose(ent, pose.x, pose.y, pose.z, pose.scale);
    if (Math.abs(ent.getX() - cx) > 0.001 || Math.abs(ent.getY() - cy) > 0.001 || Math.abs(ent.getZ() - cz) > 0.001) {
      ent.setPosition(cx, cy, cz);
    }
    if (Math.floor(time * TICKS_PER_SEC) % 16 === (i % 4) * 4) {
      world.spawnParticle(
        trailParticle(getElement(npc)),
        cx + pose.x + center,
        cy + pose.y + center,
        cz + pose.z + center,
        0,
        0.02,
        0,
        0,
        1
      );
    }
  }
}

function getCombatTarget(npc) {
  if (!npc.isAttacking()) {
    return null;
  }
  const target = npc.getAttackTarget();
  if (!target || !target.isAlive()) {
    return null;
  }
  return target;
}

function applyCombat(npc) {
  const inv = npc.getInventory();
  inv.setProjectile(npc.getWorld().createItem('minecraft:air', 1));
  if (!inv.getRightHand() || inv.getRightHand().isEmpty()) {
    inv.setRightHand(npc.getWorld().createItem('minecraft:blaze_rod', 1));
  }

  npc.getDisplay().setHasLivingAnimation(true);

  const stats = npc.getStats();
  stats.setAggroRange(20);
  stats.getMelee().setStrength(0);
  stats.getMelee().setRange(0);
  stats.getMelee().setDelay(40);
  const ranged = stats.getRanged();
  ranged.setStrength(0);
  ranged.setRange(ATTACK_RANGE);
  ranged.setDelay(10000, 10000);
  ranged.setSpeed(10);
  ranged.setAccuracy(90);
  ranged.setHasGravity(false);
  ranged.setGlows(false);
  ranged.setHasAimAnimation(false);
  ranged.setMeleeRange(0);
  ranged.setRender3D(false);
  ranged.setExplodeSize(0);
  ranged.setShotCount(0);
  ranged.setBurst(0);

  const ai = npc.getAi();
  ai.setRetaliateType(0);
  ai.setReturnsHome(true);
  ai.setStopOnInteract(false);
  ai.setAttackLOS(true);
  ai.setWalkingSpeed(WALK_SPEED);
  const nbt = npc.getEntityNbt();
  nbt.setInteger('FactionID', 2);
  nbt.setBoolean('AttackOtherFactions', true);
  npc.setEntityNbt(nbt);
}

function needsFactionReset(npc) {
  const faction = npc.getFaction();
  return !faction || faction.getId() !== 2;
}

function setJobBoolean(job, name, value) {
  const field = job.getClass().getDeclaredField(name);
  field.setAccessible(true);
  field.setBoolean(job, value);
}

function setPartDisabled(part, disabled) {
  const field = part.getClass().getDeclaredField('disabled');
  field.setAccessible(true);
  field.setBoolean(part, disabled);
}

function disableUnusedPuppetParts(job, keepPart) {
  for (let i = 0; i < 12; i++) {
    if (i === keepPart) {
      continue;
    }
    const part = job.getPart(i);
    if (part) {
      part.setRotation(PUPPET_REST, PUPPET_REST, PUPPET_REST);
      setPartDisabled(part, true);
    }
  }
}

function setLeftArmEnabled(npc, enabled) {
  const job = npc.getJob();
  if (!job || job.getType() !== 9 || !job.getPart) {
    return;
  }
  const part = job.getPart(1);
  if (!part) {
    return;
  }
  setPartDisabled(part, !enabled);
  if (!enabled) {
    part.setRotation(PUPPET_REST, PUPPET_REST, PUPPET_REST);
  }
}

function ensurePuppetJob(npc) {
  const nbt = npc.getEntityNbt();
  if (npc.getJob().getType() !== 9) {
    nbt.setInteger('NpcJob', 9);
  }
  nbt.setBoolean('PuppetStanding', true);
  nbt.setBoolean('PuppetAttacking', true);
  nbt.setBoolean('PuppetMoving', true);
  nbt.setBoolean('PuppetAnimate', false);
  nbt.merge(API.stringToNbt('{PuppetStanding:1b,PuppetAttacking:1b,PuppetMoving:1b,PuppetAnimate:0b}'));
  npc.setEntityNbt(nbt);
  const job = npc.getJob();
  if (job && job.setIsAnimated) {
    job.setIsAnimated(false);
  }
  if (job && job.getType() === 9) {
    setJobBoolean(job, 'whileStanding', true);
    setJobBoolean(job, 'whileAttacking', true);
    setJobBoolean(job, 'whileMoving', true);
    disableUnusedPuppetParts(job);
    setLeftArmEnabled(npc, false);
  }
}

function needsPuppetReset(npc) {
  return npc.getJob().getType() !== 9;
}

function setLeftArm(npc, x, y, z) {
  const job = npc.getJob();
  if (!job || job.getType() !== 9 || !job.getPart) {
    return;
  }
  disableUnusedPuppetParts(job, 1);
  const part = job.getPart(1);
  if (!part) {
    return;
  }
  setPartDisabled(part, false);
  const rx = Math.round(x);
  const ry = Math.round(y);
  const rz = Math.round(z);
  if (part.getRotationX() === rx && part.getRotationY() === ry && part.getRotationZ() === rz) {
    return;
  }
  part.setRotation(rx, ry, rz);
  npc.updateClient();
}

function resetLeftArm(npc) {
  setLeftArmEnabled(npc, false);
  npc.updateClient();
}

function setRightArmEnabled(npc, enabled) {
  const job = npc.getJob();
  if (!job || job.getType() !== 9 || !job.getPart) {
    return;
  }
  const part = job.getPart(2);
  if (!part) {
    return;
  }
  setPartDisabled(part, !enabled);
  if (!enabled) {
    part.setRotation(PUPPET_REST, PUPPET_REST, PUPPET_REST);
  }
}

function setRightArm(npc, x, y, z) {
  const job = npc.getJob();
  if (!job || job.getType() !== 9 || !job.getPart) {
    return;
  }
  disableUnusedPuppetParts(job, 2);
  const part = job.getPart(2);
  if (!part) {
    return;
  }
  setPartDisabled(part, false);
  const rx = Math.round(x);
  const ry = Math.round(y);
  const rz = Math.round(z);
  if (part.getRotationX() === rx && part.getRotationY() === ry && part.getRotationZ() === rz) {
    return;
  }
  part.setRotation(rx, ry, rz);
  npc.updateClient();
}

function resetRightArm(npc) {
  setRightArmEnabled(npc, false);
  npc.updateClient();
}

function resetArms(npc) {
  resetLeftArm(npc);
  resetRightArm(npc);
}

function wiggleStaff(npc) {
  const t = System.nanoTime() / 1e9;
  setRightArm(
    npc,
    75 + Math.sin(t * 16) * 22,
    PUPPET_REST + Math.sin(t * 21) * 10,
    PUPPET_REST + 12 + Math.cos(t * 18) * 20
  );
}

function leftArmAim(npc, wx, wy, wz) {
  const yaw = (npc.getRotation() * Math.PI) / 180;
  const lx = wx - npc.getX();
  const ly = wy - (npc.getY() + npc.getEyeHeight() * 0.35);
  const lz = wz - npc.getZ();
  const rx = lx * Math.cos(-yaw) - lz * Math.sin(-yaw);
  const rz = lx * Math.sin(-yaw) + lz * Math.cos(-yaw);
  const horiz = Math.sqrt(rx * rx + rz * rz);
  const pitch = (Math.atan2(ly, horiz) * 180) / Math.PI;
  const sweep = (Math.atan2(rx, rz) * 180) / Math.PI;
  return {
    x: 90 - pitch,
    y: PUPPET_REST + sweep * 0.2,
    z: PUPPET_REST + 10,
  };
}

function pointLeftArmAt(npc, wx, wy, wz) {
  const aim = leftArmAim(npc, wx, wy, wz);
  setLeftArm(npc, aim.x, aim.y, aim.z);
}

function holdOrChase(npc, target) {
  if (distanceTo(npc, target) <= ATTACK_RANGE) {
    npc.getAi().setWalkingSpeed(0);
    npc.clearNavigation();
    npc.setMoveForward(0);
    return;
  }
  npc.getAi().setWalkingSpeed(WALK_SPEED);
  npc.navigateTo(target.getX(), target.getY(), target.getZ(), 1);
}

function takeOrbitAmmo(npc) {
  const slots = syncOrbitSlots(npc);
  const time = nowSec(npc);
  let best = -1;
  let bestDot = -2;
  const yaw = (npc.getRotation() * Math.PI) / 180;
  const fx = -Math.sin(yaw);
  const fz = Math.cos(yaw);
  for (let i = 0; i < slots.length; i++) {
    if (!slots[i]) {
      continue;
    }
    const pose = orbitWorldOffset(npc, i, time);
    const dot = pose.x * fx + pose.z * fz;
    if (dot > bestDot) {
      bestDot = dot;
      best = i;
    }
  }
  if (best < 0) {
    return null;
  }
  const uuid = slots[best];
  const from = orbitWorldOffset(npc, best, time);
  slots[best] = null;
  setSlots(npc, slots);
  return { uuid: uuid, from: from };
}

function finishRefill(npc) {
  npc.getTempdata().remove(REFILL_KEY);
  resetRightArm(npc);
}

function beginJoin(npc, refill) {
  const dest = overheadPoint(npc, BLOCK_SCALE);
  const uuid = spawnOrbitBlock(npc.getWorld(), npc.getX(), npc.getY(), npc.getZ(), npc, getElement(npc));
  refill.joining = {
    uuid: uuid,
    slot: refill.nextSlot,
    start: System.nanoTime(),
    fromX: dest.x - dest.scale / 2,
    fromY: dest.y - dest.scale / 2,
    fromZ: dest.z - dest.scale / 2,
  };
}

function startRefill(npc) {
  if (npc.getTempdata().get(REFILL_KEY) || npc.getTempdata().get(CAST_KEY)) {
    return;
  }
  const next = getElement(npc) === ELEMENT_ICE ? ELEMENT_MAGMA : ELEMENT_ICE;
  setElement(npc, next);
  resetLeftArm(npc);
  const refill = { nextSlot: 0, joining: null };
  beginJoin(npc, refill);
  npc.getTempdata().put(REFILL_KEY, refill);
}

function maybeStartRefill(npc) {
  if (npc.getTempdata().get(CAST_KEY) || npc.getTempdata().get(REFILL_KEY)) {
    return;
  }
  if (ammoCount(syncOrbitSlots(npc)) > 0) {
    return;
  }
  startRefill(npc);
}

function updateRefill(npc) {
  const refill = npc.getTempdata().get(REFILL_KEY);
  if (!refill) {
    return;
  }
  wiggleStaff(npc);
  const world = npc.getWorld();
  if (!refill.joining) {
    if (refill.nextSlot >= ORBIT_COUNT) {
      finishRefill(npc);
      return;
    }
    beginJoin(npc, refill);
    npc.getTempdata().put(REFILL_KEY, refill);
    return;
  }
  const ent = world.getEntity(refill.joining.uuid);
  if (!ent || !ent.isAlive()) {
    refill.joining = null;
    npc.getTempdata().put(REFILL_KEY, refill);
    return;
  }
  const p = easeInOut((System.nanoTime() - refill.joining.start) / 1e9 / REFILL_JOIN_SEC);
  const dest = orbitWorldOffset(npc, refill.joining.slot, nowSec(npc));
  applyDisplayPose(
    ent,
    lerp(refill.joining.fromX, dest.x, p),
    lerp(refill.joining.fromY, dest.y, p),
    lerp(refill.joining.fromZ, dest.z, p),
    dest.scale
  );
  ent.setPosition(npc.getX(), npc.getY(), npc.getZ());
  if ((System.nanoTime() - refill.joining.start) / 1e9 < REFILL_JOIN_SEC) {
    npc.getTempdata().put(REFILL_KEY, refill);
    return;
  }
  const slots = syncOrbitSlots(npc);
  slots[refill.joining.slot] = refill.joining.uuid;
  setSlots(npc, slots);
  refill.nextSlot += 1;
  refill.joining = null;
  if (refill.nextSlot >= ORBIT_COUNT) {
    finishRefill(npc);
    return;
  }
  beginJoin(npc, refill);
  npc.getTempdata().put(REFILL_KEY, refill);
}

function startCast(npc, target) {
  if (!target || !target.isAlive()) {
    return false;
  }
  if (npc.getTempdata().get(CAST_KEY) || npc.getTempdata().get(REFILL_KEY)) {
    return false;
  }
  const last = npc.getTempdata().get('castReadyAt') || 0;
  if (System.nanoTime() < last) {
    return false;
  }
  if (distanceTo(npc, target) > ATTACK_RANGE + 1) {
    return false;
  }
  const taken = takeOrbitAmmo(npc);
  if (!taken) {
    return false;
  }
  const world = npc.getWorld();
  const ent = world.getEntity(taken.uuid);
  if (!ent) {
    return false;
  }
  ent.removeTag(orbitTag(npc));
  ent.addTag(SHOT_TAG);
  ent.addTag(shotTag(npc));
  npc.getTempdata().put(CAST_KEY, {
    uuid: taken.uuid,
    phase: 'lift',
    start: System.nanoTime(),
    fromX: taken.from.x,
    fromY: taken.from.y,
    fromZ: taken.from.z,
    fromScale: taken.from.scale,
    targetUuid: target.getUUID(),
    element: getElement(npc),
    last: System.nanoTime(),
  });
  return true;
}

function burstImpact(world, x, y, z, element) {
  const particle = trailParticle(element);
  for (let i = 0; i < 90; i++) {
    const ox = (Math.random() - 0.5) * 2.4;
    const oy = Math.random() * 1.8;
    const oz = (Math.random() - 0.5) * 2.4;
    world.spawnParticle(particle, x + ox, y + oy, z + oz, ox * 0.25, 0.18, oz * 0.25, 0.12, 2);
  }
  for (let i = 0; i < 8; i++) {
    world.spawnParticle(particle, x, y + 0.2, z, 0.15, 0.35, 0.15, 0.2, 12);
  }
}

function impactShot(npc, ent, x, y, z, element) {
  const world = npc.getWorld();
  world.explode(x, y, z, EXPLODE_RANGE, false, false);
  burstImpact(world, x, y, z, element || getElement(npc));
  if (ent && ent.isAlive()) {
    ent.despawn();
  }
  npc.getTempdata().remove(CAST_KEY);
  npc.getTempdata().put('castReadyAt', System.nanoTime() + CAST_COOLDOWN_SEC * 1e9);
  resetLeftArm(npc);
  maybeStartRefill(npc);
}

function isSolid(world, x, y, z) {
  const block = world.getBlock(Math.floor(x), Math.floor(y), Math.floor(z));
  return block && !block.isAir();
}

function hitLiving(world, npc, x, y, z) {
  const nearby = world.getNearbyEntities(Math.floor(x), Math.floor(y), Math.floor(z), 2, 5);
  for (let i = 0; i < nearby.length; i++) {
    const ent = nearby[i];
    if (!ent || ent.getUUID() === npc.getUUID() || !ent.isAlive()) {
      continue;
    }
    if (ent.hasTag && (ent.hasTag(orbitTag(npc)) || ent.hasTag(shotTag(npc)))) {
      continue;
    }
    const dx = ent.getX() - x;
    const dy = ent.getY() + ent.getHeight() * 0.5 - y;
    const dz = ent.getZ() - z;
    if (dx * dx + dy * dy + dz * dz < 0.85 * 0.85) {
      return ent;
    }
  }
  return null;
}

function updateCast(npc) {
  const cast = npc.getTempdata().get(CAST_KEY);
  if (!cast) {
    resetLeftArm(npc);
    return;
  }
  const world = npc.getWorld();
  const ent = world.getEntity(cast.uuid);
  if (!ent || !ent.isAlive()) {
    npc.getTempdata().remove(CAST_KEY);
    resetLeftArm(npc);
    return;
  }

  const target = world.getEntity(cast.targetUuid);
  const now = System.nanoTime();
  const dt = Math.min(0.08, (now - (cast.last || now)) / 1e9);
  cast.last = now;

  if (cast.phase === 'lift') {
    const p = easeInOut((now - cast.start) / 1e9 / LIFT_SEC);
    const dest = overheadPoint(npc, THROW_SCALE);
    const tx = lerp(cast.fromX, dest.x - dest.scale / 2, p);
    const ty = lerp(cast.fromY, dest.y - dest.scale / 2, p);
    const tz = lerp(cast.fromZ, dest.z - dest.scale / 2, p);
    const scale = lerp(cast.fromScale, dest.scale, p);
    applyDisplayPose(ent, tx, ty, tz, scale);
    ent.setPosition(npc.getX(), npc.getY(), npc.getZ());
    const endAim = leftArmAim(npc, npc.getX() + dest.x, npc.getY() + dest.y, npc.getZ() + dest.z);
    setLeftArm(
      npc,
      lerp(ARM_LIFT_START.x, endAim.x, p),
      lerp(ARM_LIFT_START.y, endAim.y, p),
      lerp(ARM_LIFT_START.z, endAim.z, p)
    );
    if ((now - cast.start) / 1e9 >= LIFT_SEC) {
      cast.phase = 'hold';
      cast.holdStart = now;
      cast.scale = scale;
    }
    npc.getTempdata().put(CAST_KEY, cast);
    return;
  }

  if (cast.phase === 'hold') {
    const dest = overheadPoint(npc, THROW_SCALE);
    const tx = dest.x - dest.scale / 2;
    const ty = dest.y - dest.scale / 2;
    const tz = dest.z - dest.scale / 2;
    applyDisplayPose(ent, tx, ty, tz, dest.scale);
    ent.setPosition(npc.getX(), npc.getY(), npc.getZ());
    pointLeftArmAt(npc, npc.getX() + dest.x, npc.getY() + dest.y, npc.getZ() + dest.z);
    if ((now - (cast.holdStart || now)) / 1e9 >= HOLD_SEC) {
      const wx = npc.getX() + dest.x;
      const wy = npc.getY() + dest.y;
      const wz = npc.getZ() + dest.z;
      let aimX = npc.getX() - Math.sin((npc.getRotation() * Math.PI) / 180) * 8;
      let aimY = wy;
      let aimZ = npc.getZ() + Math.cos((npc.getRotation() * Math.PI) / 180) * 8;
      if (target && target.isAlive()) {
        aimX = target.getX();
        aimY = target.getY() + target.getEyeHeight() * 0.6;
        aimZ = target.getZ();
      }
      let dx = aimX - wx;
      let dy = aimY - wy;
      let dz = aimZ - wz;
      const len = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
      cast.phase = 'fly';
      cast.flyStart = now;
      cast.x = wx;
      cast.y = wy;
      cast.z = wz;
      cast.vx = (dx / len) * THROW_SPEED;
      cast.vy = (dy / len) * THROW_SPEED + 1.4;
      cast.vz = (dz / len) * THROW_SPEED;
      cast.scale = dest.scale;
      applyDisplayPose(ent, -dest.scale / 2, -dest.scale / 2, -dest.scale / 2, dest.scale, 0);
      ent.setPosition(wx, wy, wz);
    }
    npc.getTempdata().put(CAST_KEY, cast);
    return;
  }

  cast.vy -= GRAVITY * dt;
  cast.x += cast.vx * dt;
  cast.y += cast.vy * dt;
  cast.z += cast.vz * dt;
  ent.setPosition(cast.x, cast.y, cast.z);
  pointLeftArmAt(npc, cast.x, cast.y, cast.z);

  if (isSolid(world, cast.x, cast.y, cast.z) || hitLiving(world, npc, cast.x, cast.y, cast.z) || (now - (cast.flyStart || now)) / 1e9 > 4) {
    impactShot(npc, ent, cast.x, cast.y, cast.z, cast.element);
    return;
  }
  if (target && target.isAlive()) {
    const dx = target.getX() - cast.x;
    const dy = target.getY() + target.getHeight() * 0.45 - cast.y;
    const dz = target.getZ() - cast.z;
    if (dx * dx + dy * dy + dz * dz < 0.7 * 0.7) {
      impactShot(npc, ent, cast.x, cast.y, cast.z, cast.element);
      return;
    }
  }
  npc.getTempdata().put(CAST_KEY, cast);
}

function tryStartCast(npc) {
  if (npc.getTempdata().get(REFILL_KEY)) {
    return;
  }
  maybeStartRefill(npc);
  if (npc.getTempdata().get(REFILL_KEY)) {
    return;
  }
  const target = getCombatTarget(npc);
  if (!target) {
    return;
  }
  if (distanceTo(npc, target) > ATTACK_RANGE) {
    return;
  }
  startCast(npc, target);
}

function interruptThread(thread) {
  if (!thread) {
    return;
  }
  try {
    thread.interrupt();
  } catch (err) {}
}

function stopNamedOrbitThreads(uuid) {
  const name = threadName(uuid);
  const threads = Java.from(Thread.getAllStackTraces().keySet().toArray());
  for (let i = 0; i < threads.length; i++) {
    const thread = threads[i];
    if (thread && thread.getName() === name && thread !== Thread.currentThread()) {
      interruptThread(thread);
    }
  }
}

function stopOrbitThread(npc) {
  const stored = npc.getTempdata().get(THREAD_KEY);
  interruptThread(stored);
  npc.getTempdata().remove(THREAD_KEY);
  stopNamedOrbitThreads(npc.getUUID());
}

function getServer(world) {
  const level = world.getMCLevel();
  // m_7654_ = net.minecraft.server.level.ServerLevel#getServer
  return level.m_7654_();
}

function serverTickCount(server) {
  // m_129921_ = net.minecraft.server.MinecraftServer#getTickCount
  return server.m_129921_();
}

function shiftTimer(value, delta) {
  return value ? value + delta : value;
}

function shiftPausedClocks(npc, delta) {
  if (!delta) {
    return;
  }
  const start = npc.getTempdata().get(START_KEY);
  if (start) {
    npc.getTempdata().put(START_KEY, start + delta);
  }
  const ready = npc.getTempdata().get('castReadyAt');
  if (ready) {
    npc.getTempdata().put('castReadyAt', ready + delta);
  }
  const cast = npc.getTempdata().get(CAST_KEY);
  if (cast) {
    cast.start = shiftTimer(cast.start, delta);
    cast.last = shiftTimer(cast.last, delta);
    cast.holdStart = shiftTimer(cast.holdStart, delta);
    cast.flyStart = shiftTimer(cast.flyStart, delta);
    npc.getTempdata().put(CAST_KEY, cast);
  }
  const refill = npc.getTempdata().get(REFILL_KEY);
  if (refill && refill.joining) {
    refill.joining.start = shiftTimer(refill.joining.start, delta);
    npc.getTempdata().put(REFILL_KEY, refill);
  }
}

function startOrbitThread(npc) {
  stopOrbitThread(npc);
  if (npc.getTimers().has(ORBIT_TIMER)) {
    npc.getTimers().stop(ORBIT_TIMER);
  }

  const uuid = npc.getUUID();
  const world = npc.getWorld();
  const server = getServer(world);
  const gen = (npc.getTempdata().get(GEN_KEY) || 0) + 1;
  npc.getTempdata().put(GEN_KEY, gen);
  npc.getTempdata().put(START_KEY, System.nanoTime());
  world.getTempdata().remove('orbitThreadError');

  const Runnable = Java.type('java.lang.Runnable');
  const thread = new Thread(
    new Runnable({
      run: function () {
        try {
          let lastTick = -1;
          let lastTickNanos = System.nanoTime();
          let pausedSince = 0;
          while (!Thread.currentThread().isInterrupted()) {
            if (!server) {
              break;
            }
            const tick = serverTickCount(server);
            const now = System.nanoTime();
            if (tick !== lastTick) {
              lastTick = tick;
              lastTickNanos = now;
            }
            const paused = now - lastTickNanos > PAUSE_AFTER_NS;
            if (paused) {
              if (!pausedSince) {
                pausedSince = now;
              }
              Thread.sleep(THREAD_SLEEP_MS);
              continue;
            }
            if (pausedSince) {
              const pausedFor = now - pausedSince;
              pausedSince = 0;
              server.execute(function () {
                const current = world.getEntity(uuid);
                if (current && current.isAlive() && current.getTempdata().get(GEN_KEY) === gen) {
                  shiftPausedClocks(current, pausedFor);
                }
              });
            }
            server.execute(function () {
              const current = world.getEntity(uuid);
              if (!current || !current.isAlive() || current.getTempdata().get(GEN_KEY) !== gen) {
                return;
              }
              tryStartCast(current);
              updateCast(current);
              updateRefill(current);
              updateOrbit(current);
            });
            Thread.sleep(THREAD_SLEEP_MS);
          }
        } catch (err) {
          if (String(err).indexOf('InterruptedException') === -1) {
            world.getTempdata().put('orbitThreadError', String(err));
          }
        }
      },
    })
  );
  thread.setName(threadName(uuid));
  thread.setDaemon(true);
  npc.getTempdata().put(THREAD_KEY, thread);
  thread.start();
}

function clearVanillaShots(projectiles) {
  if (!projectiles) {
    return;
  }
  const list = projectiles.toArray ? Java.from(projectiles.toArray()) : Java.from(projectiles);
  for (let i = 0; i < list.length; i++) {
    if (list[i] && list[i].despawn) {
      list[i].despawn();
    }
  }
}

function clearNearbyVanillaShots(npc) {
  const nearby = npc.getWorld().getNearbyEntities(npc.getPos(), ATTACK_RANGE + 16, 7);
  for (let i = 0; i < nearby.length; i++) {
    const ent = nearby[i];
    if (!ent || !ent.despawn) {
      continue;
    }
    if (ent.hasTag && (ent.hasTag(orbitTag(npc)) || ent.hasTag(shotTag(npc)))) {
      continue;
    }
    ent.despawn();
  }
}

export function init(e) {
  stopOrbitThread(e.npc);
  applyCombat(e.npc);
  ensurePuppetJob(e.npc);
  if (needsFactionReset(e.npc) || needsPuppetReset(e.npc)) {
    e.npc.reset();
    return;
  }
  e.npc.updateClient();
  e.npc.getTempdata().remove('orbitReplenish');
  if (!e.npc.getTempdata().has(ELEMENT_KEY)) {
    setElement(e.npc, ELEMENT_MAGMA);
  }
  recoverOrbit(e.npc);
  startOrbitThread(e.npc);
}

export function tick(e) {
  clearNearbyVanillaShots(e.npc);
  const target = getCombatTarget(e.npc);
  if (!target) {
    e.npc.getAi().setWalkingSpeed(WALK_SPEED);
    return;
  }
  holdOrChase(e.npc, target);
}

export function targetLost(e) {
  e.npc.getAi().setWalkingSpeed(WALK_SPEED);
}

export function rangedAttack(e) {
  try {
    e.setCanceled(true);
  } catch (err) {}
  clearVanillaShots(e.projectiles);
  clearNearbyVanillaShots(e.npc);
}

export function meleeAttack(e) {
  e.damage = 0;
}

export function died(e) {
  stopOrbitThread(e.npc);
  if (e.npc.getTimers().has(ORBIT_TIMER)) {
    e.npc.getTimers().stop(ORBIT_TIMER);
  }
  despawnTagged(e.npc);
  resetArms(e.npc);
}
