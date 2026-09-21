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

const ORBIT_COUNT = 20;
const ORBIT_RADIUS = 1.75;
const TICKS_PER_SEC = 20;
const ORBIT_SPEED = 0.18 * TICKS_PER_SEC;
const TILT = (32 * Math.PI) / 180;
const BLOCK_SCALE = 0.35;
const THROW_SCALE = 0.8;
const ORBIT_TAG = 'pickup_staff_orbit';
const SHOT_TAG = 'pickup_staff_shot';
const START_KEY = 'pickupOrbitStart';
const SLOTS_KEY = 'pickupOrbitSlots';
const JOIN_KEY = 'pickupJoining';
const CAST_KEY = 'pickupCasts';
const JOB_VER = 1;
const ORBIT_PERIOD_MS = 20;
const JOIN_SEC = 0.7;
const THROW_SPEED = 14;
const GRAVITY = 8;
const REACH = 32;

const FORBIDDEN = {
  'minecraft:air': true,
  'minecraft:cave_air': true,
  'minecraft:void_air': true,
  'minecraft:bedrock': true,
  'minecraft:barrier': true,
  'minecraft:command_block': true,
  'minecraft:chain_command_block': true,
  'minecraft:repeating_command_block': true,
  'minecraft:structure_block': true,
  'minecraft:structure_void': true,
  'minecraft:jigsaw': true,
  'minecraft:end_portal': true,
  'minecraft:end_gateway': true,
  'minecraft:nether_portal': true,
  'minecraft:end_portal_frame': true,
};

function threadName(uuid) {
  return 'pickup-staff-' + uuid;
}

function jobId(player) {
  return 'pickup-staff:' + JOB_VER + ':' + player.getUUID();
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

function getJoining(player) {
  return player.getTempdata().get(JOIN_KEY) || [];
}

function setJoining(player, list) {
  player.getTempdata().put(JOIN_KEY, list);
}

function getCasts(player) {
  return player.getTempdata().get(CAST_KEY) || [];
}

function setCasts(player, list) {
  player.getTempdata().put(CAST_KEY, list);
}

export function isPickupStaff(item) {
  if (!item || item.isEmpty()) {
    return false;
  }
  try {
    const nbt = item.getNbt();
    return !!(nbt && nbt.has('PickupStaff') && nbt.getBoolean('PickupStaff'));
  } catch (err) {
    return false;
  }
}

export function holdingStaff(player) {
  return isPickupStaff(player.getMainhandItem());
}

function nbtEscape(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function jsList(value) {
  if (!value) {
    return [];
  }
  try {
    return Java.from(value);
  } catch (err) {
    return value;
  }
}

function readBlockProps(block) {
  const props = {};
  const names = jsList(block.getProperties());
  for (let i = 0; i < names.length; i++) {
    const key = String(names[i]);
    try {
      props[key] = block.getProperty(key);
    } catch (err) {}
  }
  return props;
}

function propertiesNbt(props) {
  const keys = Object.keys(props || {});
  if (!keys.length) {
    return '';
  }
  const parts = [];
  for (let i = 0; i < keys.length; i++) {
    parts.push(keys[i] + ':"' + nbtEscape(String(props[keys[i]])) + '"');
  }
  return ',Properties:{' + parts.join(',') + '}';
}

function spawnOrbitBlock(world, x, y, z, player, blockName, props) {
  const ent = world.createEntity('minecraft:block_display');
  const extra = API.stringToNbt(
    '{block_state:{Name:"' +
      nbtEscape(blockName) +
      '"' +
      propertiesNbt(props) +
      '},interpolation_duration:0,' +
      'transformation:{translation:[0f,0f,0f],left_rotation:[0f,0f,0f,1f],' +
      'right_rotation:[0f,0f,0f,1f],scale:[1f,1f,1f]}}'
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

function play(player, sound, volume, pitch) {
  player.playSound(sound, volume, pitch);
}

function syncOrbitSlots(player) {
  const world = player.getWorld();
  const slots = getSlots(player).slice();
  while (slots.length < ORBIT_COUNT) {
    slots.push(null);
  }
  for (let i = 0; i < slots.length; i++) {
    if (!slots[i] || !slots[i].uuid) {
      continue;
    }
    const ent = world.getEntity(slots[i].uuid);
    if (!ent || !ent.isAlive()) {
      slots[i] = null;
    }
  }
  setSlots(player, slots);
  return slots;
}

function reservedSlots(player) {
  const taken = {};
  const slots = getSlots(player);
  for (let i = 0; i < slots.length; i++) {
    if (slots[i]) {
      taken[i] = true;
    }
  }
  const joining = getJoining(player);
  for (let i = 0; i < joining.length; i++) {
    taken[joining[i].slot] = true;
  }
  return taken;
}

function firstEmptySlot(player) {
  const taken = reservedSlots(player);
  for (let i = 0; i < ORBIT_COUNT; i++) {
    if (!taken[i]) {
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
  const world = player.getWorld();

  for (let i = 0; i < slots.length; i++) {
    if (!slots[i]) {
      continue;
    }
    const ent = world.getEntity(slots[i].uuid);
    if (!ent || !ent.isAlive()) {
      continue;
    }
    const pose = orbitWorldOffset(player, i, time);
    applyDisplayPose(ent, pose.x, pose.y, pose.z, pose.scale);
    if (Math.abs(ent.getX() - cx) > 0.001 || Math.abs(ent.getY() - cy) > 0.001 || Math.abs(ent.getZ() - cz) > 0.001) {
      ent.setPosition(cx, cy, cz);
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
  const slot = slots[best];
  const from = orbitWorldOffset(player, best, time);
  slots[best] = null;
  setSlots(player, slots);
  return { uuid: slot.uuid, from: from, blockName: slot.blockName, props: slot.props };
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

function isSolid(world, x, y, z) {
  const block = world.getBlock(Math.floor(x), Math.floor(y), Math.floor(z));
  return block && !block.isAir();
}

function canBreak(block) {
  if (!block || block.isAir()) {
    return false;
  }
  const name = String(block.getName());
  if (FORBIDDEN[name] || FORBIDDEN[name.replace(/^minecraft:/, '')]) {
    return false;
  }
  if (typeof block.isContainer === 'function' && block.isContainer()) {
    return false;
  }
  return true;
}

function lookedBlock(e) {
  const hit = e.player.rayTraceBlock(REACH, false, true);
  if (hit && typeof hit.getName === 'function') {
    return hit;
  }
  if (e.type === 2 && e.target && typeof e.target.getName === 'function') {
    return e.target;
  }
  return null;
}

function placeCaptured(world, blockName, props, x, y, z) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const iz = Math.floor(z);
  const offsets = [
    [0, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [1, 0, 0],
    [-1, 0, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];
  for (let i = 0; i < offsets.length; i++) {
    const bx = ix + offsets[i][0];
    const by = iy + offsets[i][1];
    const bz = iz + offsets[i][2];
    const cell = world.getBlock(bx, by, bz);
    if (!cell || !cell.isAir()) {
      continue;
    }
    const placed = cell.setBlock(blockName);
    const keys = Object.keys(props || {});
    for (let k = 0; k < keys.length; k++) {
      try {
        placed.setProperty(keys[k], props[keys[k]]);
      } catch (err) {}
    }
    return true;
  }
  return false;
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

function finishShot(player, cast, ent, x, y, z, victim) {
  const world = player.getWorld();
  if (victim && typeof victim.damage === 'function') {
    victim.damage(4);
  }
  placeCaptured(world, cast.blockName, cast.props, x, y, z);
  world.spawnParticle('cloud', x, y, z, 0.2, 0.2, 0.2, 0.04, 10);
  play(player, 'minecraft:block.stone.place', 0.8, 1);
  if (ent && ent.isAlive()) {
    ent.despawn();
  }
}

function updateJoining(player) {
  const world = player.getWorld();
  const joining = getJoining(player);
  const kept = [];
  const now = System.nanoTime();
  for (let i = 0; i < joining.length; i++) {
    const join = joining[i];
    const ent = world.getEntity(join.uuid);
    if (!ent || !ent.isAlive()) {
      continue;
    }
    const p = easeInOut((now - join.start) / 1e9 / JOIN_SEC);
    const dest = orbitWorldOffset(player, join.slot, nowSec(player));
    applyDisplayPose(
      ent,
      lerp(join.fromX, dest.x, p),
      lerp(join.fromY, dest.y, p),
      lerp(join.fromZ, dest.z, p),
      lerp(join.fromScale, dest.scale, p)
    );
    ent.setPosition(player.getX(), player.getY(), player.getZ());
    if ((now - join.start) / 1e9 < JOIN_SEC) {
      kept.push(join);
      continue;
    }
    const slots = syncOrbitSlots(player);
    slots[join.slot] = { uuid: join.uuid, blockName: join.blockName, props: join.props };
    setSlots(player, slots);
  }
  setJoining(player, kept);
}

function updateCasts(player) {
  const world = player.getWorld();
  const casts = getCasts(player);
  const kept = [];
  const now = System.nanoTime();
  for (let i = 0; i < casts.length; i++) {
    const cast = casts[i];
    const ent = world.getEntity(cast.uuid);
    if (!ent || !ent.isAlive()) {
      continue;
    }
    const dt = Math.min(0.08, (now - (cast.last || now)) / 1e9);
    cast.last = now;
    const spin = ((now - cast.flyStart) / 1e9) * Math.PI * 4;
    cast.vy -= GRAVITY * dt;
    const nx = cast.x + cast.vx * dt;
    const ny = cast.y + cast.vy * dt;
    const nz = cast.z + cast.vz * dt;
    const victim = hitLiving(world, player, nx, ny, nz);
    if (isSolid(world, nx, ny, nz) || victim || (now - cast.flyStart) / 1e9 > 4) {
      finishShot(player, cast, ent, isSolid(world, nx, ny, nz) ? cast.x : nx, isSolid(world, nx, ny, nz) ? cast.y : ny, isSolid(world, nx, ny, nz) ? cast.z : nz, victim);
      continue;
    }
    cast.x = nx;
    cast.y = ny;
    cast.z = nz;
    applyDisplayPose(ent, -cast.scale / 2, -cast.scale / 2, -cast.scale / 2, cast.scale, 2, spin);
    ent.setPosition(cast.x, cast.y, cast.z);
    kept.push(cast);
  }
  setCasts(player, kept);
}

function tickPlayer(player) {
  if (!player.getTempdata().get(START_KEY)) {
    player.getTempdata().put(START_KEY, System.nanoTime());
  }
  updateJoining(player);
  updateCasts(player);
  updateOrbit(player);
}

export function ensureStaffLoop(player) {
  subscribe(player.getWorld(), jobId(player), player, ORBIT_PERIOD_MS, tickPlayer);
}

export function stopStaffLoop(player) {
  unsubscribe(player.getWorld(), jobId(player));
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
  setJoining(player, []);
  setCasts(player, []);
}

export function pickupLookedBlock(e) {
  if (typeof e.setCanceled === 'function') {
    e.setCanceled(true);
  }
  if (!isPickupStaff(e.item) || !e.player) {
    return;
  }
  const data = e.item.getTempdata();
  const now = e.player.getWorld().getTotalTime();
  if (data.get('pickupTick') === now) {
    return;
  }
  data.put('pickupTick', now);

  const player = e.player;
  const slot = firstEmptySlot(player);
  if (slot < 0) {
    return;
  }
  const block = lookedBlock(e);
  if (!canBreak(block)) {
    return;
  }

  const blockName = String(block.getName());
  const props = readBlockProps(block);
  const bx = block.getX() + 0.5;
  const by = block.getY() + 0.5;
  const bz = block.getZ() + 0.5;
  const startScale = 1;
  const fromX = bx - player.getX() - startScale / 2;
  const fromY = by - player.getY() - startScale / 2;
  const fromZ = bz - player.getZ() - startScale / 2;

  const uuid = spawnOrbitBlock(player.getWorld(), player.getX(), player.getY(), player.getZ(), player, blockName, props);
  const ent = player.getWorld().getEntity(uuid);
  if (ent) {
    applyDisplayPose(ent, fromX, fromY, fromZ, startScale, 0);
    ent.setPosition(player.getX(), player.getY(), player.getZ());
  }
  block.remove();

  const joining = getJoining(player);
  joining.push({
    uuid: uuid,
    slot: slot,
    start: System.nanoTime(),
    fromX: fromX,
    fromY: fromY,
    fromZ: fromZ,
    fromScale: startScale,
    blockName: blockName,
    props: props,
  });
  setJoining(player, joining);
  play(player, 'minecraft:entity.item.pickup', 0.7, 1.15);
  ensureStaffLoop(player);
}

export function throwOrbitBlock(e) {
  if (typeof e.setCanceled === 'function') {
    e.setCanceled(true);
  }
  if (!isPickupStaff(e.item) || !e.player) {
    return;
  }
  const data = e.item.getTempdata();
  const now = e.player.getWorld().getTotalTime();
  if (data.get('throwTick') === now) {
    return;
  }
  data.put('throwTick', now);

  const player = e.player;
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

  const scale = THROW_SCALE;
  const wx = player.getX() + taken.from.x + taken.from.scale / 2;
  const wy = player.getY() + taken.from.y + taken.from.scale / 2;
  const wz = player.getZ() + taken.from.z + taken.from.scale / 2;
  const dir = lookDir(player);
  applyDisplayPose(ent, -scale / 2, -scale / 2, -scale / 2, scale, 0);
  ent.setPosition(wx, wy, wz);

  const casts = getCasts(player);
  casts.push({
    uuid: taken.uuid,
    blockName: taken.blockName,
    props: taken.props,
    flyStart: System.nanoTime(),
    last: System.nanoTime(),
    x: wx,
    y: wy,
    z: wz,
    vx: dir.x * THROW_SPEED,
    vy: dir.y * THROW_SPEED + 0.8,
    vz: dir.z * THROW_SPEED,
    scale: scale,
  });
  setCasts(player, casts);
  play(player, 'minecraft:entity.snowball.throw', 0.9, 0.7);
  ensureStaffLoop(player);
}
