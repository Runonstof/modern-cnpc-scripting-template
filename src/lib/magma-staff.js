import { subscribe, unsubscribe, stopThreadsNamed } from '~/lib/fast-tick';

const API = Java.type('noppes.npcs.api.NpcAPI').Instance();
const Display = Java.type('net.minecraft.world.entity.Display');
const Integer = Java.type('java.lang.Integer');
const Vector3f = Java.type('org.joml.Vector3f');
const Quaternionf = Java.type('org.joml.Quaternionf');
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
// f_268693_ = net.minecraft.world.entity.Display#DATA_LEFT_ROTATION_ID
const LEFT_ROTATION_ID = displayDataAccessor('f_268693_');

const ORBIT_COUNT = 8;
const ORBIT_RADIUS = 1.75;
const TICKS_PER_SEC = 20;
const ORBIT_SPEED = 0.18 * TICKS_PER_SEC;
const TILT = (32 * Math.PI) / 180;
const BLOCK_SCALE = 0.35;
const THROW_SCALE = 0.8;
const ORBIT_TAG = 'magma_staff_orbit';
const SHOT_TAG = 'magma_staff_shot';
const START_KEY = 'staffOrbitStart';
const SLOTS_KEY = 'staffOrbitSlots';
const CAST_KEY = 'staffCast';
const REFILL_KEY = 'staffRefill';
const LEFT_AT = 'staffLeftAt';
const RIGHT_AT = 'staffRightAt';
const REFILL_LOCK = 'staffRefillLock';
const INPUT_VER = 'staffInputV';
const INPUT_VER_NOW = 7;
const JOB_VER = 6;
const ORBIT_PERIOD_MS = 20;
const REFILL_JOIN_SEC = 0.85;
const LIFT_SEC = 2.2;
const THROW_SPEED = 16;
const GRAVITY = 6;
const EXPLODE_RANGE = 2.5;

const LEFT_KEYS = { 0: true, '-100': true };
const RIGHT_KEYS = { '-99': true };

function threadName(uuid) {
  return 'magma-staff-' + uuid;
}

function jobId(player) {
  return 'magma-staff:' + JOB_VER + ':' + player.getUUID();
}

function oldJobId(player) {
  return 'magma-staff:' + player.getUUID();
}

function nowSec(player) {
  const startNanos = player.getTempdata().get(START_KEY) || System.nanoTime();
  return (System.nanoTime() - startNanos) / 1e9;
}

function easeInOut(t) {
  return 0.5 - 0.5 * Math.cos(Math.PI * Math.max(0, Math.min(1, t)));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function orbitTag(player) {
  return ORBIT_TAG + ':' + player.getUUID();
}

function shotTag(player) {
  return SHOT_TAG + ':' + player.getUUID();
}

function getSlots(player) {
  return player.getTempdata().get(SLOTS_KEY) || [];
}

function setSlots(player, slots) {
  player.getTempdata().put(SLOTS_KEY, slots);
}

export function isMagmaStaff(item) {
  if (!item || item.isEmpty()) {
    return false;
  }
  try {
    const nbt = item.getNbt();
    return !!(nbt && nbt.has('MagmaStaff') && nbt.getBoolean('MagmaStaff'));
  } catch (err) {
    return false;
  }
}

export function holdingStaff(player) {
  return isMagmaStaff(player.getMainhandItem());
}

export function isLeftKey(key) {
  return !!LEFT_KEYS[key] || !!LEFT_KEYS[String(key)];
}

export function isRightKey(key) {
  return !!RIGHT_KEYS[key] || !!RIGHT_KEYS[String(key)];
}

function pulseKey(side) {
  return side === 'left' ? LEFT_AT : RIGHT_AT;
}

function markHeld(player, side) {
  player.getTempdata().put(pulseKey(side), System.nanoTime());
}

function releaseHeld(player, side) {
  player.getTempdata().remove(pulseKey(side));
}

function attackHoldWindowNs(player) {
  let delayTicks = 6;
  try {
    const mc = player.getMCEntity();
    // m_36333_ = net.minecraft.world.entity.player.Player#getCurrentItemAttackStrengthDelay
    delayTicks = mc.m_36333_();
  } catch (err) {}
  return Math.max(0.28, (delayTicks / 20) * 1.6) * 1e9;
}

function isHeld(player, side) {
  const last = player.getTempdata().get(pulseKey(side));
  if (!last) {
    return false;
  }
  const window = side === 'left' ? attackHoldWindowNs(player) : 220 * 1e6;
  return System.nanoTime() - last < window;
}

function isOwnStaffEntity(player, target) {
  if (!target || !target.hasTag) {
    return false;
  }
  return target.hasTag(orbitTag(player)) || target.hasTag(shotTag(player)) || target.hasTag(ORBIT_TAG) || target.hasTag(SHOT_TAG);
}

function resetRefillInput(player) {
  cancelRefill(player, false);
  player.getTempdata().remove(RIGHT_AT);
  player.getTempdata().remove(REFILL_LOCK);
}

function migrateInput(player) {
  if (player.getTempdata().get(INPUT_VER) === INPUT_VER_NOW) {
    return;
  }
  resetRefillInput(player);
  despawnStaffEffects(player);
  player.getTempdata().put(INPUT_VER, INPUT_VER_NOW);
}

function rightIdle(player) {
  const last = player.getTempdata().get(RIGHT_AT);
  return !last || System.nanoTime() - last > 500 * 1e6;
}

function spawnOrbitBlock(world, x, y, z, player) {
  const ent = world.createEntity('minecraft:block_display');
  const extra = API.stringToNbt(
    '{block_state:{Name:"minecraft:magma_block"},interpolation_duration:2,' +
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
  ent.addTag(orbitTag(player));
  ent.spawn();
  return ent.getUUID();
}

function applyDisplayPose(ent, tx, ty, tz, scale, interp, yawRad) {
  const duration = interp === undefined ? 2 : interp;
  const mc = ent.getMCEntity();
  // m_20088_ = net.minecraft.world.entity.Entity#getEntityData
  const data = mc.m_20088_();
  // m_135381_ = net.minecraft.network.syncher.SynchedEntityData#set
  data.m_135381_(TRANSLATION_ID, new Vector3f(tx, ty, tz));
  data.m_135381_(SCALE_ID, new Vector3f(scale, scale, scale));
  if (yawRad !== undefined) {
    const half = yawRad * 0.5;
    data.m_135381_(LEFT_ROTATION_ID, new Quaternionf(0, Math.sin(half), 0, Math.cos(half)));
  }
  data.m_135381_(INTERP_DURATION_ID, Integer.valueOf(duration));
  // m_276349_ = net.minecraft.network.syncher.SynchedEntityData#set (force)
  data.m_276349_(INTERP_START_ID, Integer.valueOf(0), true);
}

function tiltedLocal(angle) {
  const localX = Math.cos(angle) * ORBIT_RADIUS;
  const localZ = Math.sin(angle) * ORBIT_RADIUS;
  return {
    x: localX,
    y: -localZ * Math.sin(TILT),
    z: localZ * Math.cos(TILT),
  };
}

function orbitWorldOffset(player, slot, time) {
  const spin = time * ORBIT_SPEED;
  const angle = spin + (Math.PI * 2 * slot) / ORBIT_COUNT;
  const local = tiltedLocal(angle);
  const yaw = (player.getRotation() * Math.PI) / 180;
  const cos = Math.cos(yaw);
  const sin = Math.sin(yaw);
  const center = BLOCK_SCALE / 2;
  return {
    x: local.x * cos + local.z * -sin - center,
    y: player.getEyeHeight() - center + local.y,
    z: local.x * sin + local.z * cos - center,
    scale: BLOCK_SCALE,
  };
}

function overheadPoint(player, scale) {
  return {
    x: 0,
    y: player.getEyeHeight() + 0.95,
    z: 0,
    scale: scale,
  };
}

function poseWorld(player, pose) {
  const center = (pose.scale || BLOCK_SCALE) / 2;
  return {
    x: player.getX() + pose.x + center,
    y: player.getY() + pose.y + center,
    z: player.getZ() + pose.z + center,
  };
}

function puffFail(world, x, y, z) {
  world.spawnParticle('cloud', x, y, z, 0.22, 0.18, 0.22, 0.06, 18);
  world.spawnParticle('smoke', x, y, z, 0.16, 0.2, 0.16, 0.05, 10);
  world.spawnParticle('explosion', x, y, z, 0.1, 0.1, 0.1, 0.02, 3);
}

function play(player, sound, volume, pitch) {
  player.playSound(sound, volume, pitch);
}

function syncOrbitSlots(player) {
  const world = player.getWorld();
  const slots = getSlots(player).slice();
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
  setSlots(player, slots);
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

function firstEmptySlot(slots) {
  for (let i = 0; i < slots.length; i++) {
    if (!slots[i]) {
      return i;
    }
  }
  return -1;
}

function updateOrbit(player) {
  const slots = syncOrbitSlots(player);
  const time = nowSec(player);
  const cx = player.getX();
  const cy = player.getY();
  const cz = player.getZ();
  const center = BLOCK_SCALE / 2;
  const world = player.getWorld();

  for (let i = 0; i < slots.length; i++) {
    if (!slots[i]) {
      continue;
    }
    const ent = world.getEntity(slots[i]);
    if (!ent || !ent.isAlive()) {
      continue;
    }
    const pose = orbitWorldOffset(player, i, time);
    applyDisplayPose(ent, pose.x, pose.y, pose.z, pose.scale);
    if (Math.abs(ent.getX() - cx) > 0.001 || Math.abs(ent.getY() - cy) > 0.001 || Math.abs(ent.getZ() - cz) > 0.001) {
      ent.setPosition(cx, cy, cz);
    }
    if (Math.floor(time * TICKS_PER_SEC) % 16 === (i % 4) * 4) {
      world.spawnParticle('lava', cx + pose.x + center, cy + pose.y + center, cz + pose.z + center, 0, 0.02, 0, 0, 1);
    }
  }
}

function takeOrbitAmmo(player) {
  const slots = syncOrbitSlots(player);
  const time = nowSec(player);
  let best = -1;
  let bestDot = -2;
  const yaw = (player.getRotation() * Math.PI) / 180;
  const fx = -Math.sin(yaw);
  const fz = Math.cos(yaw);
  for (let i = 0; i < slots.length; i++) {
    if (!slots[i]) {
      continue;
    }
    const pose = orbitWorldOffset(player, i, time);
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
  const from = orbitWorldOffset(player, best, time);
  slots[best] = null;
  setSlots(player, slots);
  return { uuid: uuid, from: from };
}

function failEntity(player, uuid) {
  const world = player.getWorld();
  const ent = uuid ? world.getEntity(uuid) : null;
  if (ent && ent.isAlive()) {
    puffFail(world, ent.getX(), ent.getY() + 0.4, ent.getZ());
    ent.despawn();
  } else {
    puffFail(world, player.getX(), player.getY() + player.getEyeHeight(), player.getZ());
  }
  play(player, 'minecraft:entity.generic.extinguish_fire', 0.85, 0.65);
}

function cancelRefill(player, wasted) {
  const refill = player.getTempdata().get(REFILL_KEY);
  player.getTempdata().remove(REFILL_KEY);
  if (!refill || !refill.uuid) {
    return;
  }
  if (wasted) {
    failEntity(player, refill.uuid);
  } else {
    const ent = player.getWorld().getEntity(refill.uuid);
    if (ent) {
      ent.despawn();
    }
  }
}

function cancelCast(player, wasted) {
  const cast = player.getTempdata().get(CAST_KEY);
  player.getTempdata().remove(CAST_KEY);
  if (!cast || !cast.uuid || cast.phase === 'fly') {
    return;
  }
  if (wasted) {
    failEntity(player, cast.uuid);
  } else {
    const ent = player.getWorld().getEntity(cast.uuid);
    if (ent) {
      ent.despawn();
    }
  }
}

function startRefill(player) {
  if (player.getTempdata().get(REFILL_KEY) || player.getTempdata().get(CAST_KEY) || player.getTempdata().get(REFILL_LOCK)) {
    return false;
  }
  const slots = syncOrbitSlots(player);
  const slot = firstEmptySlot(slots);
  if (slot < 0) {
    return false;
  }
  const dest = overheadPoint(player, BLOCK_SCALE);
  const uuid = spawnOrbitBlock(player.getWorld(), player.getX(), player.getY(), player.getZ(), player);
  player.getTempdata().put(REFILL_LOCK, 1);
  player.getTempdata().put(REFILL_KEY, {
    uuid: uuid,
    slot: slot,
    start: System.nanoTime(),
    fromX: dest.x - dest.scale / 2,
    fromY: dest.y - dest.scale / 2,
    fromZ: dest.z - dest.scale / 2,
  });
  return true;
}

function updateRefill(player) {
  const refill = player.getTempdata().get(REFILL_KEY);
  if (!refill) {
    return;
  }
  if (!holdingStaff(player)) {
    cancelRefill(player, true);
    player.getTempdata().put(REFILL_LOCK, 1);
    return;
  }
  const world = player.getWorld();
  const ent = world.getEntity(refill.uuid);
  if (!ent || !ent.isAlive()) {
    player.getTempdata().remove(REFILL_KEY);
    return;
  }
  const p = easeInOut((System.nanoTime() - refill.start) / 1e9 / REFILL_JOIN_SEC);
  const dest = orbitWorldOffset(player, refill.slot, nowSec(player));
  applyDisplayPose(ent, lerp(refill.fromX, dest.x, p), lerp(refill.fromY, dest.y, p), lerp(refill.fromZ, dest.z, p), dest.scale);
  ent.setPosition(player.getX(), player.getY(), player.getZ());
  if ((System.nanoTime() - refill.start) / 1e9 < REFILL_JOIN_SEC) {
    return;
  }
  const slots = syncOrbitSlots(player);
  slots[refill.slot] = refill.uuid;
  setSlots(player, slots);
  player.getTempdata().remove(REFILL_KEY);
  player.getTempdata().put(REFILL_LOCK, 1);
  play(player, 'minecraft:item.firecharge.use', 0.55, 1.25);
}

function startCast(player) {
  if (player.getTempdata().get(CAST_KEY) || player.getTempdata().get(REFILL_KEY)) {
    return;
  }
  if (!holdingStaff(player)) {
    return;
  }
  const taken = takeOrbitAmmo(player);
  if (!taken) {
    return;
  }
  const world = player.getWorld();
  const ent = world.getEntity(taken.uuid);
  if (!ent) {
    return;
  }
  ent.removeTag(orbitTag(player));
  ent.addTag(SHOT_TAG);
  ent.addTag(shotTag(player));
  player.getTempdata().put(CAST_KEY, {
    uuid: taken.uuid,
    phase: 'lift',
    start: System.nanoTime(),
    last: System.nanoTime(),
    fromX: taken.from.x,
    fromY: taken.from.y,
    fromZ: taken.from.z,
    fromScale: taken.from.scale,
    readySound: false,
  });
}

function lookDir(player) {
  const yaw = (player.getRotation() * Math.PI) / 180;
  const pitch = (player.getPitch() * Math.PI) / 180;
  const cosP = Math.cos(pitch);
  return {
    x: -Math.sin(yaw) * cosP,
    y: -Math.sin(pitch),
    z: Math.cos(yaw) * cosP,
  };
}

function beginFly(player, cast, ent) {
  const dest = overheadPoint(player, THROW_SCALE);
  const wx = player.getX() + dest.x;
  const wy = player.getY() + dest.y;
  const wz = player.getZ() + dest.z;
  const dir = lookDir(player);
  cast.phase = 'fly';
  cast.flyStart = System.nanoTime();
  cast.x = wx;
  cast.y = wy;
  cast.z = wz;
  cast.vx = dir.x * THROW_SPEED;
  cast.vy = dir.y * THROW_SPEED + 1.4;
  cast.vz = dir.z * THROW_SPEED;
  cast.scale = dest.scale;
  applyDisplayPose(ent, -dest.scale / 2, -dest.scale / 2, -dest.scale / 2, dest.scale, 0);
  ent.setPosition(wx, wy, wz);
  play(player, 'minecraft:entity.blaze.shoot', 0.85, 0.75);
}

function isSolid(world, x, y, z) {
  const block = world.getBlock(Math.floor(x), Math.floor(y), Math.floor(z));
  return block && !block.isAir();
}

function hitLiving(world, player, x, y, z) {
  const nearby = world.getNearbyEntities(Math.floor(x), Math.floor(y), Math.floor(z), 2, 5);
  for (let i = 0; i < nearby.length; i++) {
    const ent = nearby[i];
    if (!ent || ent.getUUID() === player.getUUID() || !ent.isAlive()) {
      continue;
    }
    if (ent.hasTag && (ent.hasTag(orbitTag(player)) || ent.hasTag(shotTag(player)))) {
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

function burstImpact(world, x, y, z) {
  for (let i = 0; i < 90; i++) {
    const ox = (Math.random() - 0.5) * 2.4;
    const oy = Math.random() * 1.8;
    const oz = (Math.random() - 0.5) * 2.4;
    world.spawnParticle('lava', x + ox, y + oy, z + oz, ox * 0.25, 0.18, oz * 0.25, 0.12, 2);
  }
  for (let i = 0; i < 8; i++) {
    world.spawnParticle('lava', x, y + 0.2, z, 0.15, 0.35, 0.15, 0.2, 12);
  }
}

function impactShot(player, ent, x, y, z) {
  const world = player.getWorld();
  world.explode(x, y, z, EXPLODE_RANGE, false, false);
  burstImpact(world, x, y, z);
  if (ent && ent.isAlive()) {
    ent.despawn();
  }
  player.getTempdata().remove(CAST_KEY);
}

function updateCast(player) {
  const cast = player.getTempdata().get(CAST_KEY);
  if (!cast) {
    if (isHeld(player, 'left') && holdingStaff(player) && !player.getTempdata().get(REFILL_KEY)) {
      startCast(player);
    }
    return;
  }
  const world = player.getWorld();
  const ent = world.getEntity(cast.uuid);
  if (!ent || !ent.isAlive()) {
    player.getTempdata().remove(CAST_KEY);
    return;
  }

  const now = System.nanoTime();
  const dt = Math.min(0.08, (now - (cast.last || now)) / 1e9);
  cast.last = now;

  if (cast.phase === 'lift') {
    if (!isHeld(player, 'left') || !holdingStaff(player)) {
      cancelCast(player, true);
      return;
    }
    const p = easeInOut((now - cast.start) / 1e9 / LIFT_SEC);
    const dest = overheadPoint(player, THROW_SCALE);
    applyDisplayPose(
      ent,
      lerp(cast.fromX, dest.x - dest.scale / 2, p),
      lerp(cast.fromY, dest.y - dest.scale / 2, p),
      lerp(cast.fromZ, dest.z - dest.scale / 2, p),
      lerp(cast.fromScale, dest.scale, p)
    );
    ent.setPosition(player.getX(), player.getY(), player.getZ());
    if ((now - cast.start) / 1e9 >= LIFT_SEC) {
      cast.phase = 'ready';
      cast.readyAt = now;
      if (!cast.readySound) {
        play(player, 'minecraft:block.note_block.chime', 0.9, 1.35);
        cast.readySound = true;
      }
    }
    player.getTempdata().put(CAST_KEY, cast);
    return;
  }

  if (cast.phase === 'ready') {
    const dest = overheadPoint(player, THROW_SCALE);
    const spin = ((now - (cast.readyAt || cast.start)) / 1e9) * Math.PI * 2.4;
    applyDisplayPose(ent, dest.x - dest.scale / 2, dest.y - dest.scale / 2, dest.z - dest.scale / 2, dest.scale, 2, spin);
    ent.setPosition(player.getX(), player.getY(), player.getZ());
    world.spawnParticle('lava', player.getX(), player.getY() + dest.y + dest.scale * 0.5, player.getZ(), 0.08, 0.12, 0.08, 0.02, 3);
    if (!isHeld(player, 'left')) {
      beginFly(player, cast, ent);
    }
    player.getTempdata().put(CAST_KEY, cast);
    return;
  }

  cast.vy -= GRAVITY * dt;
  cast.x += cast.vx * dt;
  cast.y += cast.vy * dt;
  cast.z += cast.vz * dt;
  ent.setPosition(cast.x, cast.y, cast.z);
  if (isSolid(world, cast.x, cast.y, cast.z) || hitLiving(world, player, cast.x, cast.y, cast.z) || (now - (cast.flyStart || now)) / 1e9 > 4) {
    impactShot(player, ent, cast.x, cast.y, cast.z);
    return;
  }
  player.getTempdata().put(CAST_KEY, cast);
}

function tickPlayer(player) {
  migrateInput(player);
  if (!player.getTempdata().get(START_KEY)) {
    player.getTempdata().put(START_KEY, System.nanoTime());
  }
  if (rightIdle(player) && !player.getTempdata().get(REFILL_KEY)) {
    player.getTempdata().remove(REFILL_LOCK);
  }
  updateCast(player);
  updateRefill(player);
  updateOrbit(player);
}

export function ensureStaffLoop(player) {
  const world = player.getWorld();
  unsubscribe(world, oldJobId(player));
  subscribe(world, jobId(player), player, ORBIT_PERIOD_MS, tickPlayer);
}

export function stopStaffLoop(player) {
  const world = player.getWorld();
  unsubscribe(world, oldJobId(player));
  unsubscribe(world, jobId(player));
  stopThreadsNamed(threadName(player.getUUID()));
}

export function despawnStaffEffects(player) {
  const world = player.getWorld();
  const tags = [orbitTag(player), shotTag(player)];
  const nearby = world.getNearbyEntities(player.getPos(), 48, -1);
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
  setSlots(player, []);
  player.getTempdata().remove(CAST_KEY);
  player.getTempdata().remove(REFILL_KEY);
}

export function onStaffAttack(e) {
  if (typeof e.setCanceled === 'function') {
    e.setCanceled(true);
  }
  if (!isMagmaStaff(e.item)) {
    return;
  }
  markHeld(e.player, 'left');
  ensureStaffLoop(e.player);
}

export function onStaffInteract(e) {
  if (typeof e.setCanceled === 'function') {
    e.setCanceled(true);
  }
  if (!isMagmaStaff(e.item)) {
    return;
  }
  if (isOwnStaffEntity(e.player, e.target)) {
    return;
  }
  markHeld(e.player, 'right');
  startRefill(e.player);
  ensureStaffLoop(e.player);
}

export function onStaffKey(player, key, down) {
  if (!down && isLeftKey(key)) {
    releaseHeld(player, 'left');
  }
  if (!down && isRightKey(key)) {
    releaseHeld(player, 'right');
  }
}
