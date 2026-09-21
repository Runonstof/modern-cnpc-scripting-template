// ==UserScript==
// @namespace          runonstof
// @name               Orbital Destructor
// @version            1.0.0
// @description        Orbiting elemental blocks that prime overhead and slam into targets. Tune damage, ammo, speeds and range from a creative sneak GUI. Does not change NPC appearance.
// @author             Runonstof
// @license            MIT
// @minecraft          1.20.1
// @match              https://customnpcs.com
// @scripttype         npc
// @category           Combat
// @category           Magic
// @category           NPCs
// ==/UserScript==

const API = Java.type('noppes.npcs.api.NpcAPI').Instance();
const Display = Java.type('net.minecraft.world.entity.Display');
const Integer = Java.type('java.lang.Integer');
const Vector3f = Java.type('org.joml.Vector3f');
const System = Java.type('java.lang.System');
const Thread = Java.type('java.lang.Thread');
const Runnable = Java.type('java.lang.Runnable');

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

const TICKS_PER_SEC = 20;
const ORBIT_RADIUS = 1.75;
const TILT_MAX = (20 * Math.PI) / 180;
const TILT_SPEED = ((Math.PI * 2) / 110) * TICKS_PER_SEC;
const TILT_AXIS_SPEED = ((Math.PI * 2) / 180) * TICKS_PER_SEC;
const BLOCK_SCALE = 0.35;
const THROW_SCALE = 0.8;
const ORBIT_TAG = 'orbital_destructor_orbit';
const SHOT_TAG = 'orbital_destructor_shot';
const START_KEY = 'odOrbitStartNanos';
const SLOTS_KEY = 'odOrbitSlots';
const CAST_KEY = 'odMagmaCast';
const ELEMENT_KEY = 'odOrbitElement';
const REFILL_KEY = 'odOrbitRefill';
const PAUSE_KEY = 'odOrbitPause';
const ORBIT_PERIOD_MS = 20;
const PAUSE_AFTER_NS = 100 * 1e6;
const HOLD_SEC = 0.5;
const REFILL_JOIN_SEC = 0.8;
const ELEMENT_MAGMA = 'magma';
const ELEMENT_ICE = 'ice';
const GRAVITY = 6;
const CAST_COOLDOWN_SEC = 1.25;
const WALK_SPEED = 4;
const GAMEMODE_CREATIVE = 1;
const GUI_ID = 917402;
const ID_SAVE = 200;
const ID_CANCEL = 201;
const ID_STATUS = 2;
const ID_DAMAGE = 110;
const ID_THROW = 111;
const ID_AMMO = 112;
const ID_PRIME = 113;
const ID_RING = 114;
const ID_RANGE = 115;
const COLOR_OK = 0xffffff;
const COLOR_BAD = 0xff5555;

const DEFAULTS = {
  damage: 8,
  throwSpeed: 16,
  ammo: 8,
  primeSpeed: 1,
  ringSpeed: 1,
  range: 22,
};

const SETTINGS = [
  { key: 'damage', id: ID_DAMAGE, label: 'Damage', min: 0, max: 80 },
  { key: 'throwSpeed', id: ID_THROW, label: 'Throw speed', min: 1, max: 64 },
  { key: 'ammo', id: ID_AMMO, label: 'Max ammo', min: 1, max: 24, integer: true },
  { key: 'primeSpeed', id: ID_PRIME, label: 'Prime speed', min: 0.15, max: 8 },
  { key: 'ringSpeed', id: ID_RING, label: 'Ring speed', min: 0.05, max: 8 },
  { key: 'range', id: ID_RANGE, label: 'Attack range', min: 4, max: 64 },
];

const CFG_KEYS = {
  damage: 'od_damage',
  throwSpeed: 'od_throwSpeed',
  ammo: 'od_ammo',
  primeSpeed: 'od_primeSpeed',
  ringSpeed: 'od_ringSpeed',
  range: 'od_range',
};

const THREAD_NAME = 'orbital-destructor-tick';
const JOBS_KEY = 'orbitalDestructorJobs';
const THREAD_KEY = 'orbitalDestructorThread';
const BUSY_KEY = 'orbitalDestructorBusy';
const ERROR_KEY = 'orbitalDestructorError';

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function readNumber(stored, key, fallback) {
  if (!stored.has(key)) {
    return fallback;
  }
  const raw = Number(stored.get(key));
  return isNaN(raw) ? fallback : raw;
}

function getCfg(npc) {
  const stored = npc.getStoreddata();
  const cfg = {};
  for (let i = 0; i < SETTINGS.length; i++) {
    const spec = SETTINGS[i];
    let value = clamp(readNumber(stored, CFG_KEYS[spec.key], DEFAULTS[spec.key]), spec.min, spec.max);
    if (spec.integer) {
      value = Math.round(value);
    }
    cfg[spec.key] = value;
  }
  return cfg;
}

function saveCfg(npc, cfg) {
  const stored = npc.getStoreddata();
  stored.put(CFG_KEYS.damage, cfg.damage);
  stored.put(CFG_KEYS.throwSpeed, cfg.throwSpeed);
  stored.put(CFG_KEYS.ammo, cfg.ammo);
  stored.put(CFG_KEYS.primeSpeed, cfg.primeSpeed);
  stored.put(CFG_KEYS.ringSpeed, cfg.ringSpeed);
  stored.put(CFG_KEYS.range, cfg.range);
}

function liftSec(cfg) {
  return 4 / cfg.primeSpeed;
}

function orbitSpeed(cfg) {
  return 0.18 * TICKS_PER_SEC * cfg.ringSpeed;
}

function minRange(cfg) {
  return Math.max(3, Math.min(cfg.range * 0.7, cfg.range - 2));
}

function explodeSize(cfg) {
  return clamp(cfg.damage / 3.2, 0.8, 8);
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
}

function fillEmptyOrbit(npc) {
  const world = npc.getWorld();
  const cfg = getCfg(npc);
  let slots = getSlots(npc).slice();
  while (slots.length < cfg.ammo) {
    slots.push(null);
  }
  if (slots.length > cfg.ammo) {
    for (let extra = cfg.ammo; extra < slots.length; extra++) {
      if (!slots[extra]) {
        continue;
      }
      const old = world.getEntity(slots[extra]);
      if (old) {
        old.despawn();
      }
    }
    slots = slots.slice(0, cfg.ammo);
  }
  for (let i = 0; i < cfg.ammo; i++) {
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
  const cfg = getCfg(npc);
  if (adopted.length) {
    const next = [];
    for (let i = 0; i < cfg.ammo; i++) {
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
  const cfg = getCfg(npc);
  const slots = getSlots(npc).slice();
  while (slots.length < cfg.ammo) {
    slots.push(null);
  }
  if (slots.length > cfg.ammo) {
    for (let extra = cfg.ammo; extra < slots.length; extra++) {
      if (!slots[extra]) {
        continue;
      }
      const old = world.getEntity(slots[extra]);
      if (old) {
        old.despawn();
      }
    }
    slots.length = cfg.ammo;
  }
  for (let i = 0; i < cfg.ammo; i++) {
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

function orbitWorldOffset(npc, slot, time, cfg) {
  const count = cfg.ammo || 1;
  const spin = time * orbitSpeed(cfg);
  const angle = spin + (Math.PI * 2 * slot) / count;
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
  const cfg = getCfg(npc);
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
    const pose = orbitWorldOffset(npc, i, time, cfg);
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
  const target = npc.getAttackTarget();
  if (!target || !target.isAlive()) {
    return null;
  }
  return target;
}

function applyCombat(npc) {
  const cfg = getCfg(npc);
  const inv = npc.getInventory();
  inv.setProjectile(npc.getWorld().createItem('minecraft:air', 1));

  const stats = npc.getStats();
  stats.setAggroRange(Math.max(16, Math.round(cfg.range)));
  stats.getMelee().setStrength(0);
  stats.getMelee().setRange(0);
  stats.getMelee().setDelay(40);
  const ranged = stats.getRanged();
  ranged.setStrength(0);
  ranged.setRange(Math.round(cfg.range));
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
  ai.setLeapAtTarget(false);
  ai.setStopOnInteract(false);
  ai.setAttackLOS(true);
  ai.setWalkingSpeed(WALK_SPEED);
}

function yawToward(from, to) {
  const dx = to.getX() - from.getX();
  const dz = to.getZ() - from.getZ();
  return (Math.atan2(-dx, dz) * 180) / Math.PI;
}

function holdOrChase(npc, target) {
  const cfg = getCfg(npc);
  const dist = distanceTo(npc, target);
  npc.setRotation(yawToward(npc, target));
  if (npc.getTempdata().get('duelNoDamage')) {
    const ai = npc.getAi();
    ai.setReturnsHome(false);
    ai.setLeapAtTarget(false);
    ai.setRetaliateType(3);
  }
  if (dist < minRange(cfg)) {
    npc.getAi().setWalkingSpeed(WALK_SPEED);
    npc.clearNavigation();
    npc.setMoveForward(-1);
    const dx = npc.getX() - target.getX();
    const dz = npc.getZ() - target.getZ();
    const len = Math.sqrt(dx * dx + dz * dz) || 1;
    npc.setMotionX((dx / len) * 0.25);
    npc.setMotionZ((dz / len) * 0.25);
    return;
  }
  if (dist <= cfg.range) {
    npc.getAi().setWalkingSpeed(0);
    npc.clearNavigation();
    npc.setMoveForward(0);
    npc.setMotionX(0);
    npc.setMotionZ(0);
    return;
  }
  npc.getAi().setWalkingSpeed(WALK_SPEED);
  npc.navigateTo(target.getX(), target.getY(), target.getZ(), 1);
}

function takeOrbitAmmo(npc) {
  const cfg = getCfg(npc);
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
    const pose = orbitWorldOffset(npc, i, time, cfg);
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
  const from = orbitWorldOffset(npc, best, time, cfg);
  slots[best] = null;
  setSlots(npc, slots);
  return { uuid: uuid, from: from };
}

function finishRefill(npc) {
  npc.getTempdata().remove(REFILL_KEY);
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
  const cfg = getCfg(npc);
  const world = npc.getWorld();
  if (!refill.joining) {
    if (refill.nextSlot >= cfg.ammo) {
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
  const dest = orbitWorldOffset(npc, refill.joining.slot, nowSec(npc), cfg);
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
  if (refill.nextSlot >= cfg.ammo) {
    finishRefill(npc);
    return;
  }
  beginJoin(npc, refill);
  npc.getTempdata().put(REFILL_KEY, refill);
}

function startCast(npc, target) {
  const cfg = getCfg(npc);
  if (!target || !target.isAlive()) {
    return false;
  }
  if (npc.getTempdata().get(CAST_KEY) || npc.getTempdata().get(REFILL_KEY)) {
    return false;
  }
  const last = npc.getTempdata().get('odCastReadyAt') || 0;
  if (System.nanoTime() < last) {
    return false;
  }
  if (distanceTo(npc, target) > cfg.range + 1) {
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

function applyImpactDamage(world, npc, x, y, z, cfg) {
  const radius = explodeSize(cfg) + 1.2;
  const nearby = world.getNearbyEntities(Math.floor(x), Math.floor(y), Math.floor(z), Math.ceil(radius) + 1, 5);
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
    if (dx * dx + dy * dy + dz * dz <= radius * radius) {
      ent.damage(cfg.damage);
    }
  }
}

function impactShot(npc, ent, x, y, z, element) {
  const cfg = getCfg(npc);
  const world = npc.getWorld();
  world.explode(x, y, z, explodeSize(cfg), false, false);
  applyImpactDamage(world, npc, x, y, z, cfg);
  burstImpact(world, x, y, z, element || getElement(npc));
  if (ent && ent.isAlive()) {
    ent.despawn();
  }
  npc.getTempdata().remove(CAST_KEY);
  npc.getTempdata().put('odCastReadyAt', System.nanoTime() + CAST_COOLDOWN_SEC * 1e9);
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
    return;
  }
  const cfg = getCfg(npc);
  const world = npc.getWorld();
  const ent = world.getEntity(cast.uuid);
  if (!ent || !ent.isAlive()) {
    npc.getTempdata().remove(CAST_KEY);
    return;
  }

  const target = world.getEntity(cast.targetUuid);
  const now = System.nanoTime();
  const dt = Math.min(0.08, (now - (cast.last || now)) / 1e9);
  cast.last = now;

  if (cast.phase === 'lift') {
    const p = easeInOut((now - cast.start) / 1e9 / liftSec(cfg));
    const dest = overheadPoint(npc, THROW_SCALE);
    const tx = lerp(cast.fromX, dest.x - dest.scale / 2, p);
    const ty = lerp(cast.fromY, dest.y - dest.scale / 2, p);
    const tz = lerp(cast.fromZ, dest.z - dest.scale / 2, p);
    const scale = lerp(cast.fromScale, dest.scale, p);
    applyDisplayPose(ent, tx, ty, tz, scale);
    ent.setPosition(npc.getX(), npc.getY(), npc.getZ());
    if ((now - cast.start) / 1e9 >= liftSec(cfg)) {
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
      cast.vx = (dx / len) * cfg.throwSpeed;
      cast.vy = (dy / len) * cfg.throwSpeed + 1.4;
      cast.vz = (dz / len) * cfg.throwSpeed;
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
  const cfg = getCfg(npc);
  if (!target) {
    return;
  }
  if (distanceTo(npc, target) > cfg.range) {
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

function threadsNamed(name) {
  const found = [];
  const threads = Java.from(Thread.getAllStackTraces().keySet().toArray());
  for (let i = 0; i < threads.length; i++) {
    const thread = threads[i];
    if (thread && thread.getName() === name && thread !== Thread.currentThread()) {
      found.push(thread);
    }
  }
  return found;
}

function stopThreadsNamed(name) {
  const threads = threadsNamed(name);
  for (let i = 0; i < threads.length; i++) {
    interruptThread(threads[i]);
  }
}

function getJobs(world) {
  return world.getTempdata().get(JOBS_KEY) || [];
}

function setJobs(world, jobs) {
  world.getTempdata().put(JOBS_KEY, jobs);
}

function getServer(world) {
  const level = world.getMCLevel();
  // m_7654_ = net.minecraft.server.level.ServerLevel#getServer
  return level.m_7654_();
}

function isThreadAlive(thread) {
  return !!(thread && thread.isAlive && thread.isAlive());
}

function resolveJobEntity(world, job) {
  if (job.entity && job.entity.isAlive && job.entity.isAlive()) {
    return job.entity;
  }
  if (job.uuid) {
    const found = world.getEntity(job.uuid);
    if (found && found.isAlive()) {
      return found;
    }
  }
  return null;
}

function runDueJobs(world, dt) {
  const jobs = getJobs(world);
  const kept = [];
  const now = System.nanoTime();
  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    const entity = resolveJobEntity(world, job);
    if (!entity || !entity.isAlive()) {
      if (job.seenAlive) {
        continue;
      }
      kept.push(job);
      continue;
    }
    job.entity = entity;
    job.seenAlive = true;
    const periodNs = (job.periodMs || ORBIT_PERIOD_MS) * 1e6;
    if (job.lastRun && now - job.lastRun < periodNs) {
      kept.push(job);
      continue;
    }
    job.lastRun = now;
    try {
      job.onTick(entity, dt);
    } catch (err) {
      world.getTempdata().put(ERROR_KEY, job.id + ': ' + String(err));
    }
    kept.push(job);
  }
  setJobs(world, kept);
  if (!kept.length) {
    stopScheduler(world);
  }
}

function startScheduler(world) {
  const server = getServer(world);
  const thread = new Thread(
    new Runnable({
      run: function () {
        try {
          let lastNanos = System.nanoTime();
          while (!Thread.currentThread().isInterrupted()) {
            if (!server) {
              break;
            }
            const now = System.nanoTime();
            const dt = Math.max(0.001, Math.min(0.05, (now - lastNanos) / 1e9));
            lastNanos = now;
            const busy = world.getTempdata().get(BUSY_KEY);
            if (!busy || now - busy > 250 * 1e6) {
              world.getTempdata().put(BUSY_KEY, now);
              server.execute(function () {
                try {
                  runDueJobs(world, dt);
                } finally {
                  world.getTempdata().remove(BUSY_KEY);
                }
              });
            }
            Thread.sleep(ORBIT_PERIOD_MS);
          }
        } catch (err) {
          if (String(err).indexOf('InterruptedException') === -1) {
            world.getTempdata().put(ERROR_KEY, String(err));
          }
        }
      },
    })
  );
  thread.setName(THREAD_NAME);
  thread.setDaemon(true);
  world.getTempdata().put(THREAD_KEY, thread);
  thread.start();
}

function stopScheduler(world) {
  const stored = world.getTempdata().get(THREAD_KEY);
  interruptThread(stored);
  world.getTempdata().remove(THREAD_KEY);
  stopThreadsNamed(THREAD_NAME);
}

function ensureScheduler(world) {
  const living = threadsNamed(THREAD_NAME);
  if (living.length > 1) {
    for (let i = 1; i < living.length; i++) {
      interruptThread(living[i]);
    }
  }
  if (living.length >= 1 && living[0].isAlive()) {
    world.getTempdata().put(THREAD_KEY, living[0]);
    return;
  }
  const stored = world.getTempdata().get(THREAD_KEY);
  if (isThreadAlive(stored)) {
    return;
  }
  stopScheduler(world);
  startScheduler(world);
}

function unsubscribe(world, id) {
  const jobs = getJobs(world);
  const kept = [];
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].id !== id) {
      kept.push(jobs[i]);
    }
  }
  setJobs(world, kept);
  if (!kept.length) {
    stopScheduler(world);
  }
}

function subscribe(world, id, entity, periodMs, onTick) {
  const uuid = entity.getUUID();
  const jobs = getJobs(world);
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].id === id) {
      jobs[i].uuid = uuid;
      jobs[i].entity = entity;
      jobs[i].periodMs = periodMs || ORBIT_PERIOD_MS;
      jobs[i].onTick = onTick;
      setJobs(world, jobs);
      ensureScheduler(world);
      return;
    }
  }
  jobs.push({
    id: id,
    uuid: uuid,
    entity: entity,
    periodMs: periodMs || ORBIT_PERIOD_MS,
    lastRun: 0,
    onTick: onTick,
  });
  setJobs(world, jobs);
  ensureScheduler(world);
}

function orbitJobId(npc) {
  return 'orbital-destructor:' + npc.getUUID();
}

function stopOrbitLoop(npc) {
  unsubscribe(npc.getWorld(), orbitJobId(npc));
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
  const ready = npc.getTempdata().get('odCastReadyAt');
  if (ready) {
    npc.getTempdata().put('odCastReadyAt', ready + delta);
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

function updateOrbitLoop(npc) {
  const server = getServer(npc.getWorld());
  if (!server) {
    return;
  }
  const tick = serverTickCount(server);
  const now = System.nanoTime();
  const pause = npc.getTempdata().get(PAUSE_KEY) || {
    lastTick: -1,
    lastTickNanos: now,
    pausedSince: 0,
  };
  if (tick !== pause.lastTick) {
    pause.lastTick = tick;
    pause.lastTickNanos = now;
  }
  if (now - pause.lastTickNanos > PAUSE_AFTER_NS) {
    if (!pause.pausedSince) {
      pause.pausedSince = now;
    }
    npc.getTempdata().put(PAUSE_KEY, pause);
    return;
  }
  if (pause.pausedSince) {
    shiftPausedClocks(npc, now - pause.pausedSince);
    pause.pausedSince = 0;
  }
  npc.getTempdata().put(PAUSE_KEY, pause);
  tryStartCast(npc);
  updateCast(npc);
  updateRefill(npc);
  updateOrbit(npc);
}

function startOrbitLoop(npc) {
  stopOrbitLoop(npc);
  npc.getTempdata().put(START_KEY, System.nanoTime());
  npc.getTempdata().remove(PAUSE_KEY);
  subscribe(npc.getWorld(), orbitJobId(npc), npc, ORBIT_PERIOD_MS, updateOrbitLoop);
}

function resetAmmo(npc) {
  despawnTagged(npc);
  fillEmptyOrbit(npc);
}

function fieldText(gui, id) {
  const field = gui.getComponent(id);
  if (!field || typeof field.getText !== 'function') {
    return '';
  }
  return String(field.getText() || '')
    .replace(/[\r\n]+/g, '')
    .replace(/^\s+|\s+$/g, '');
}

function parseSetting(text, spec) {
  if (!text.length) {
    return { ok: false, error: spec.label + ' is required' };
  }
  const n = Number(text);
  if (!isFinite(n)) {
    return { ok: false, error: spec.label + ' must be a number' };
  }
  if (spec.integer && n !== Math.round(n)) {
    return { ok: false, error: spec.label + ' must be a whole number' };
  }
  if (n < spec.min || n > spec.max) {
    return { ok: false, error: spec.label + ' must be ' + spec.min + '–' + spec.max };
  }
  return { ok: true, value: spec.integer ? Math.round(n) : n };
}

function setFieldColor(gui, id, color) {
  const field = gui.getComponent(id);
  if (field && typeof field.setColor === 'function') {
    field.setColor(color);
    if (typeof gui.update === 'function') {
      gui.update(field);
    }
  }
}

function setStatus(gui, text, color) {
  const label = gui.getComponent(ID_STATUS);
  if (!label) {
    return;
  }
  if (typeof label.setText === 'function') {
    label.setText(text || ' ');
  }
  if (typeof label.setColor === 'function') {
    label.setColor(color || COLOR_BAD);
  }
  if (typeof gui.update === 'function') {
    gui.update(label);
  }
}

function addSetting(gui, id, label, y, value) {
  gui.addLabel(id - 100, label, 10, y, 120, 12, COLOR_OK);
  const field = gui.addTextArea(id, 140, y - 2, 96, 16);
  field.setText(String(value));
}

function openSettings(player, npc) {
  const cfg = getCfg(npc);
  const gui = API.createCustomGui(GUI_ID, 256, 196, false, player);
  gui.setDoesPauseGame(false);
  gui.addLabel(1, 'Orbital Destructor', 10, 8, 236, 14, 0xffcc66);
  addSetting(gui, ID_DAMAGE, 'Damage', 28, cfg.damage);
  addSetting(gui, ID_THROW, 'Throw speed', 48, cfg.throwSpeed);
  addSetting(gui, ID_AMMO, 'Max ammo', 68, cfg.ammo);
  addSetting(gui, ID_PRIME, 'Prime speed', 88, cfg.primeSpeed);
  addSetting(gui, ID_RING, 'Ring speed', 108, cfg.ringSpeed);
  addSetting(gui, ID_RANGE, 'Attack range', 128, cfg.range);
  gui.addLabel(ID_STATUS, ' ', 10, 146, 236, 12, COLOR_BAD);
  gui.addButton(ID_SAVE, 'Save', 10, 166, 110, 20);
  gui.addButton(ID_CANCEL, 'Cancel', 136, 166, 110, 20);
  player.getTempdata().put('odSettingsNpc', npc.getUUID());
  player.showCustomGui(gui);
}

function resolveSettingsNpc(e) {
  if (e.npc && e.npc.isAlive && e.npc.isAlive()) {
    return e.npc;
  }
  const uuid = e.player.getTempdata().get('odSettingsNpc');
  if (!uuid) {
    return null;
  }
  return e.player.getWorld().getEntity(uuid);
}

function applySettingsFromGui(e) {
  const npc = resolveSettingsNpc(e);
  if (!npc || !npc.isAlive()) {
    return;
  }
  const cfg = {};
  const errors = [];
  for (let i = 0; i < SETTINGS.length; i++) {
    const spec = SETTINGS[i];
    const parsed = parseSetting(fieldText(e.gui, spec.id), spec);
    setFieldColor(e.gui, spec.id, parsed.ok ? COLOR_OK : COLOR_BAD);
    if (parsed.ok) {
      cfg[spec.key] = parsed.value;
    } else {
      errors.push(parsed.error);
    }
  }
  if (errors.length) {
    setStatus(e.gui, errors[0], COLOR_BAD);
    return;
  }
  saveCfg(npc, cfg);
  applyCombat(npc);
  resetAmmo(npc);
  e.player.message('§6Orbital Destructor §7settings saved. Ammo refilled.');
  e.player.closeGui();
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
  const nearby = npc.getWorld().getNearbyEntities(npc.getPos(), getCfg(npc).range + 16, 7);
  for (let i = 0; i < nearby.length; i++) {
    const ent = nearby[i];
    if (!ent || !ent.despawn) {
      continue;
    }
    if (ent.hasTag && (ent.hasTag(ORBIT_TAG) || ent.hasTag(SHOT_TAG))) {
      continue;
    }
    ent.despawn();
  }
}

export function init(e) {
  stopOrbitLoop(e.npc);
  applyCombat(e.npc);
  if (!e.npc.getTempdata().has(ELEMENT_KEY)) {
    setElement(e.npc, ELEMENT_MAGMA);
  }
  recoverOrbit(e.npc);
  startOrbitLoop(e.npc);
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

export function damaged(e) {
  if (!e.npc.getTempdata().get('duelNoDamage')) {
    return;
  }
  e.damage = 0;
  try {
    e.setCanceled(true);
  } catch (err) {}
}

export function interact(e) {
  if (!e.player || e.player.getGamemode() !== GAMEMODE_CREATIVE || !e.player.isSneaking()) {
    return;
  }
  try {
    e.setCanceled(true);
  } catch (err) {}
  openSettings(e.player, e.npc);
}

export function customGuiButton(e) {
  if (!e.gui || e.gui.getID() !== GUI_ID) {
    return;
  }
  if (e.buttonId === ID_CANCEL) {
    e.player.closeGui();
    return;
  }
  if (e.buttonId === ID_SAVE) {
    applySettingsFromGui(e);
  }
}

export function died(e) {
  stopOrbitLoop(e.npc);
  despawnTagged(e.npc);
}
