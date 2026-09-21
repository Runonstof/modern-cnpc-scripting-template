var Thread = Java.type('java.lang.Thread');
var System$1 = Java.type('java.lang.System');
var Runnable = Java.type('java.lang.Runnable');
var THREAD_NAME = 'npc-fast-tick';
var JOBS_KEY = 'fastTickJobs';
var THREAD_KEY = 'fastTickThread';
var BUSY_KEY = 'fastTickBusy';
var ERROR_KEY = 'fastTickError';
var SLEEP_MS = 20;
function interruptThread(thread) {
  if (!thread) {
    return;
  }
  try {
    thread.interrupt();
  } catch (err) {}
}
function threadsNamed(name) {
  var found = [];
  var threads = Java.from(Thread.getAllStackTraces().keySet().toArray());
  for (var i = 0; i < threads.length; i++) {
    var thread = threads[i];
    if (thread && thread.getName() === name && thread !== Thread.currentThread()) {
      found.push(thread);
    }
  }
  return found;
}
function stopThreadsNamed(name) {
  var threads = threadsNamed(name);
  for (var i = 0; i < threads.length; i++) {
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
  var level = world.getMCLevel();
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
    var found = world.getEntity(job.uuid);
    if (found && found.isAlive()) {
      return found;
    }
  }
  return null;
}
function runDueJobs(world, dt) {
  var jobs = getJobs(world);
  var kept = [];
  var now = System$1.nanoTime();
  for (var i = 0; i < jobs.length; i++) {
    var job = jobs[i];
    var entity = resolveJobEntity(world, job);
    if (!entity || !entity.isAlive()) {
      if (job.seenAlive) {
        continue;
      }
      kept.push(job);
      continue;
    }
    job.entity = entity;
    job.seenAlive = true;
    var periodNs = (job.periodMs || SLEEP_MS) * 1e6;
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
  var server = getServer(world);
  var thread = new Thread(new Runnable({
    run: function run() {
      try {
        var lastNanos = System$1.nanoTime();
        var _loop = function _loop() {
          if (!server) {
            return 1; // break
          }
          var now = System$1.nanoTime();
          var dt = Math.max(0.001, Math.min(0.05, (now - lastNanos) / 1e9));
          lastNanos = now;
          var busy = world.getTempdata().get(BUSY_KEY);
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
          Thread.sleep(SLEEP_MS);
        };
        while (!Thread.currentThread().isInterrupted()) {
          if (_loop()) break;
        }
      } catch (err) {
        if (String(err).indexOf('InterruptedException') === -1) {
          world.getTempdata().put(ERROR_KEY, String(err));
        }
      }
    }
  }));
  thread.setName(THREAD_NAME);
  thread.setDaemon(true);
  world.getTempdata().put(THREAD_KEY, thread);
  thread.start();
}
function stopScheduler(world) {
  var stored = world.getTempdata().get(THREAD_KEY);
  interruptThread(stored);
  world.getTempdata().remove(THREAD_KEY);
  stopThreadsNamed(THREAD_NAME);
}
function ensureScheduler(world) {
  var living = threadsNamed(THREAD_NAME);
  if (living.length > 1) {
    for (var i = 1; i < living.length; i++) {
      interruptThread(living[i]);
    }
  }
  if (living.length >= 1 && living[0].isAlive()) {
    world.getTempdata().put(THREAD_KEY, living[0]);
    return;
  }
  var stored = world.getTempdata().get(THREAD_KEY);
  if (isThreadAlive(stored)) {
    return;
  }
  stopScheduler(world);
  startScheduler(world);
}
function subscribe(world, id, entityOrUuid, periodMs, onTick) {
  var entity = null;
  var uuid = entityOrUuid;
  if (entityOrUuid && entityOrUuid.getUUID) {
    entity = entityOrUuid;
    uuid = entityOrUuid.getUUID();
  }
  var jobs = getJobs(world);
  for (var i = 0; i < jobs.length; i++) {
    if (jobs[i].id === id) {
      jobs[i].uuid = uuid;
      jobs[i].entity = entity;
      jobs[i].periodMs = periodMs || SLEEP_MS;
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
    periodMs: periodMs || SLEEP_MS,
    lastRun: 0,
    onTick: onTick
  });
  setJobs(world, jobs);
  ensureScheduler(world);
}

var API = Java.type('noppes.npcs.api.NpcAPI').Instance();
var Display = Java.type('net.minecraft.world.entity.Display');
var Integer = Java.type('java.lang.Integer');
var Vector3f = Java.type('org.joml.Vector3f');
var Quaternionf = Java.type('org.joml.Quaternionf');
var System = Java.type('java.lang.System');
function displayDataAccessor(seargeName) {
  var field = Display.class.getDeclaredField(seargeName);
  field.setAccessible(true);
  return field.get(null);
}
// f_268449_ = net.minecraft.world.entity.Display#DATA_INTERPOLATION_DURATION_ID
var INTERP_DURATION_ID = displayDataAccessor('f_268449_');
// f_276329_ = net.minecraft.world.entity.Display#DATA_INTERPOLATION_START_DELTA_TICKS_ID
var INTERP_START_ID = displayDataAccessor('f_276329_');
// f_268598_ = net.minecraft.world.entity.Display#DATA_TRANSLATION_ID
var TRANSLATION_ID = displayDataAccessor('f_268598_');
// f_268489_ = net.minecraft.world.entity.Display#DATA_SCALE_ID
var SCALE_ID = displayDataAccessor('f_268489_');
// f_268693_ = net.minecraft.world.entity.Display#DATA_LEFT_ROTATION_ID
var LEFT_ROTATION_ID = displayDataAccessor('f_268693_');
var ORBIT_COUNT = 20;
var ORBIT_RADIUS = 1.75;
var TICKS_PER_SEC = 20;
var ORBIT_SPEED = 0.18 * TICKS_PER_SEC;
var TILT = 32 * Math.PI / 180;
var BLOCK_SCALE = 0.35;
var THROW_SCALE = 0.8;
var ORBIT_TAG = 'pickup_staff_orbit';
var SHOT_TAG = 'pickup_staff_shot';
var START_KEY = 'pickupOrbitStart';
var SLOTS_KEY = 'pickupOrbitSlots';
var JOIN_KEY = 'pickupJoining';
var CAST_KEY = 'pickupCasts';
var JOB_VER = 1;
var ORBIT_PERIOD_MS = 20;
var JOIN_SEC = 0.7;
var THROW_SPEED = 14;
var GRAVITY = 8;
var REACH = 32;
var FORBIDDEN = {
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
  'minecraft:end_portal_frame': true
};
function jobId(player) {
  return 'pickup-staff:' + JOB_VER + ':' + player.getUUID();
}
function nowSec(player) {
  var startNanos = player.getTempdata().get(START_KEY) || System.nanoTime();
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
function isPickupStaff(item) {
  if (!item || item.isEmpty()) {
    return false;
  }
  try {
    var nbt = item.getNbt();
    return !!(nbt && nbt.has('PickupStaff') && nbt.getBoolean('PickupStaff'));
  } catch (err) {
    return false;
  }
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
  var props = {};
  var names = jsList(block.getProperties());
  for (var i = 0; i < names.length; i++) {
    var key = String(names[i]);
    try {
      props[key] = block.getProperty(key);
    } catch (err) {}
  }
  return props;
}
function propertiesNbt(props) {
  var keys = Object.keys(props || {});
  if (!keys.length) {
    return '';
  }
  var parts = [];
  for (var i = 0; i < keys.length; i++) {
    parts.push(keys[i] + ':"' + nbtEscape(String(props[keys[i]])) + '"');
  }
  return ',Properties:{' + parts.join(',') + '}';
}
function spawnOrbitBlock(world, x, y, z, player, blockName, props) {
  var ent = world.createEntity('minecraft:block_display');
  var extra = API.stringToNbt('{block_state:{Name:"' + nbtEscape(blockName) + '"' + propertiesNbt(props) + '},interpolation_duration:0,' + 'transformation:{translation:[0f,0f,0f],left_rotation:[0f,0f,0f,1f],' + 'right_rotation:[0f,0f,0f,1f],scale:[1f,1f,1f]}}');
  var nbt = ent.getEntityNbt();
  nbt.merge(extra);
  ent.setEntityNbt(nbt);
  ent.setPosition(x, y, z);
  ent.addTag(ORBIT_TAG);
  ent.addTag(orbitTag(player));
  ent.spawn();
  return ent.getUUID();
}
function applyDisplayPose(ent, tx, ty, tz, scale, interp, yawRad) {
  var duration = interp === undefined ? 2 : interp;
  var mc = ent.getMCEntity();
  // m_20088_ = net.minecraft.world.entity.Entity#getEntityData
  var data = mc.m_20088_();
  // m_135381_ = net.minecraft.network.syncher.SynchedEntityData#set
  data.m_135381_(TRANSLATION_ID, new Vector3f(tx, ty, tz));
  data.m_135381_(SCALE_ID, new Vector3f(scale, scale, scale));
  if (yawRad !== undefined) {
    var half = yawRad * 0.5;
    data.m_135381_(LEFT_ROTATION_ID, new Quaternionf(0, Math.sin(half), 0, Math.cos(half)));
  }
  data.m_135381_(INTERP_DURATION_ID, Integer.valueOf(duration));
  // m_276349_ = net.minecraft.network.syncher.SynchedEntityData#set (force)
  data.m_276349_(INTERP_START_ID, Integer.valueOf(0), true);
}
function tiltedLocal(angle) {
  var localX = Math.cos(angle) * ORBIT_RADIUS;
  var localZ = Math.sin(angle) * ORBIT_RADIUS;
  return {
    x: localX,
    y: -localZ * Math.sin(TILT),
    z: localZ * Math.cos(TILT)
  };
}
function orbitWorldOffset(player, slot, time) {
  var spin = time * ORBIT_SPEED;
  var angle = spin + Math.PI * 2 * slot / ORBIT_COUNT;
  var local = tiltedLocal(angle);
  var yaw = player.getRotation() * Math.PI / 180;
  var cos = Math.cos(yaw);
  var sin = Math.sin(yaw);
  var center = BLOCK_SCALE / 2;
  return {
    x: local.x * cos + local.z * -sin - center,
    y: player.getEyeHeight() - center + local.y,
    z: local.x * sin + local.z * cos - center,
    scale: BLOCK_SCALE
  };
}
function play(player, sound, volume, pitch) {
  player.playSound(sound, volume, pitch);
}
function syncOrbitSlots(player) {
  var world = player.getWorld();
  var slots = getSlots(player).slice();
  while (slots.length < ORBIT_COUNT) {
    slots.push(null);
  }
  for (var i = 0; i < slots.length; i++) {
    if (!slots[i] || !slots[i].uuid) {
      continue;
    }
    var ent = world.getEntity(slots[i].uuid);
    if (!ent || !ent.isAlive()) {
      slots[i] = null;
    }
  }
  setSlots(player, slots);
  return slots;
}
function reservedSlots(player) {
  var taken = {};
  var slots = getSlots(player);
  for (var i = 0; i < slots.length; i++) {
    if (slots[i]) {
      taken[i] = true;
    }
  }
  var joining = getJoining(player);
  for (var _i = 0; _i < joining.length; _i++) {
    taken[joining[_i].slot] = true;
  }
  return taken;
}
function firstEmptySlot(player) {
  var taken = reservedSlots(player);
  for (var i = 0; i < ORBIT_COUNT; i++) {
    if (!taken[i]) {
      return i;
    }
  }
  return -1;
}
function updateOrbit(player) {
  var slots = syncOrbitSlots(player);
  var time = nowSec(player);
  var cx = player.getX();
  var cy = player.getY();
  var cz = player.getZ();
  var world = player.getWorld();
  for (var i = 0; i < slots.length; i++) {
    if (!slots[i]) {
      continue;
    }
    var ent = world.getEntity(slots[i].uuid);
    if (!ent || !ent.isAlive()) {
      continue;
    }
    var pose = orbitWorldOffset(player, i, time);
    applyDisplayPose(ent, pose.x, pose.y, pose.z, pose.scale);
    if (Math.abs(ent.getX() - cx) > 0.001 || Math.abs(ent.getY() - cy) > 0.001 || Math.abs(ent.getZ() - cz) > 0.001) {
      ent.setPosition(cx, cy, cz);
    }
  }
}
function takeOrbitAmmo(player) {
  var slots = syncOrbitSlots(player);
  var time = nowSec(player);
  var best = -1;
  var bestDot = -2;
  var yaw = player.getRotation() * Math.PI / 180;
  var fx = -Math.sin(yaw);
  var fz = Math.cos(yaw);
  for (var i = 0; i < slots.length; i++) {
    if (!slots[i]) {
      continue;
    }
    var pose = orbitWorldOffset(player, i, time);
    var dot = pose.x * fx + pose.z * fz;
    if (dot > bestDot) {
      bestDot = dot;
      best = i;
    }
  }
  if (best < 0) {
    return null;
  }
  var slot = slots[best];
  var from = orbitWorldOffset(player, best, time);
  slots[best] = null;
  setSlots(player, slots);
  return {
    uuid: slot.uuid,
    from: from,
    blockName: slot.blockName,
    props: slot.props
  };
}
function lookDir(player) {
  var yaw = player.getRotation() * Math.PI / 180;
  var pitch = player.getPitch() * Math.PI / 180;
  var cosP = Math.cos(pitch);
  return {
    x: -Math.sin(yaw) * cosP,
    y: -Math.sin(pitch),
    z: Math.cos(yaw) * cosP
  };
}
function isSolid(world, x, y, z) {
  var block = world.getBlock(Math.floor(x), Math.floor(y), Math.floor(z));
  return block && !block.isAir();
}
function canBreak(block) {
  if (!block || block.isAir()) {
    return false;
  }
  var name = String(block.getName());
  if (FORBIDDEN[name] || FORBIDDEN[name.replace(/^minecraft:/, '')]) {
    return false;
  }
  if (typeof block.isContainer === 'function' && block.isContainer()) {
    return false;
  }
  return true;
}
function lookedBlock(e) {
  var hit = e.player.rayTraceBlock(REACH, false, true);
  if (hit && typeof hit.getName === 'function') {
    return hit;
  }
  if (e.type === 2 && e.target && typeof e.target.getName === 'function') {
    return e.target;
  }
  return null;
}
function placeCaptured(world, blockName, props, x, y, z) {
  var ix = Math.floor(x);
  var iy = Math.floor(y);
  var iz = Math.floor(z);
  var offsets = [[0, 0, 0], [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]];
  for (var i = 0; i < offsets.length; i++) {
    var bx = ix + offsets[i][0];
    var by = iy + offsets[i][1];
    var bz = iz + offsets[i][2];
    var cell = world.getBlock(bx, by, bz);
    if (!cell || !cell.isAir()) {
      continue;
    }
    var placed = cell.setBlock(blockName);
    var keys = Object.keys(props || {});
    for (var k = 0; k < keys.length; k++) {
      try {
        placed.setProperty(keys[k], props[keys[k]]);
      } catch (err) {}
    }
    return true;
  }
  return false;
}
function hitLiving(world, player, x, y, z) {
  var nearby = world.getNearbyEntities(Math.floor(x), Math.floor(y), Math.floor(z), 2, 5);
  for (var i = 0; i < nearby.length; i++) {
    var ent = nearby[i];
    if (!ent || ent.getUUID() === player.getUUID() || !ent.isAlive()) {
      continue;
    }
    if (ent.hasTag && (ent.hasTag(orbitTag(player)) || ent.hasTag(shotTag(player)))) {
      continue;
    }
    var dx = ent.getX() - x;
    var dy = ent.getY() + ent.getHeight() * 0.5 - y;
    var dz = ent.getZ() - z;
    if (dx * dx + dy * dy + dz * dz < 0.85 * 0.85) {
      return ent;
    }
  }
  return null;
}
function finishShot(player, cast, ent, x, y, z, victim) {
  var world = player.getWorld();
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
  var world = player.getWorld();
  var joining = getJoining(player);
  var kept = [];
  var now = System.nanoTime();
  for (var i = 0; i < joining.length; i++) {
    var join = joining[i];
    var ent = world.getEntity(join.uuid);
    if (!ent || !ent.isAlive()) {
      continue;
    }
    var p = easeInOut((now - join.start) / 1e9 / JOIN_SEC);
    var dest = orbitWorldOffset(player, join.slot, nowSec(player));
    applyDisplayPose(ent, lerp(join.fromX, dest.x, p), lerp(join.fromY, dest.y, p), lerp(join.fromZ, dest.z, p), lerp(join.fromScale, dest.scale, p));
    ent.setPosition(player.getX(), player.getY(), player.getZ());
    if ((now - join.start) / 1e9 < JOIN_SEC) {
      kept.push(join);
      continue;
    }
    var slots = syncOrbitSlots(player);
    slots[join.slot] = {
      uuid: join.uuid,
      blockName: join.blockName,
      props: join.props
    };
    setSlots(player, slots);
  }
  setJoining(player, kept);
}
function updateCasts(player) {
  var world = player.getWorld();
  var casts = getCasts(player);
  var kept = [];
  var now = System.nanoTime();
  for (var i = 0; i < casts.length; i++) {
    var cast = casts[i];
    var ent = world.getEntity(cast.uuid);
    if (!ent || !ent.isAlive()) {
      continue;
    }
    var dt = Math.min(0.08, (now - (cast.last || now)) / 1e9);
    cast.last = now;
    var spin = (now - cast.flyStart) / 1e9 * Math.PI * 4;
    cast.vy -= GRAVITY * dt;
    var nx = cast.x + cast.vx * dt;
    var ny = cast.y + cast.vy * dt;
    var nz = cast.z + cast.vz * dt;
    var victim = hitLiving(world, player, nx, ny, nz);
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
function ensureStaffLoop(player) {
  subscribe(player.getWorld(), jobId(player), player, ORBIT_PERIOD_MS, tickPlayer);
}
function pickupLookedBlock(e) {
  if (typeof e.setCanceled === 'function') {
    e.setCanceled(true);
  }
  if (!isPickupStaff(e.item) || !e.player) {
    return;
  }
  var data = e.item.getTempdata();
  var now = e.player.getWorld().getTotalTime();
  if (data.get('pickupTick') === now) {
    return;
  }
  data.put('pickupTick', now);
  var player = e.player;
  var slot = firstEmptySlot(player);
  if (slot < 0) {
    return;
  }
  var block = lookedBlock(e);
  if (!canBreak(block)) {
    return;
  }
  var blockName = String(block.getName());
  var props = readBlockProps(block);
  var bx = block.getX() + 0.5;
  var by = block.getY() + 0.5;
  var bz = block.getZ() + 0.5;
  var startScale = 1;
  var fromX = bx - player.getX() - startScale / 2;
  var fromY = by - player.getY() - startScale / 2;
  var fromZ = bz - player.getZ() - startScale / 2;
  var uuid = spawnOrbitBlock(player.getWorld(), player.getX(), player.getY(), player.getZ(), player, blockName, props);
  var ent = player.getWorld().getEntity(uuid);
  if (ent) {
    applyDisplayPose(ent, fromX, fromY, fromZ, startScale, 0);
    ent.setPosition(player.getX(), player.getY(), player.getZ());
  }
  block.remove();
  var joining = getJoining(player);
  joining.push({
    uuid: uuid,
    slot: slot,
    start: System.nanoTime(),
    fromX: fromX,
    fromY: fromY,
    fromZ: fromZ,
    fromScale: startScale,
    blockName: blockName,
    props: props
  });
  setJoining(player, joining);
  play(player, 'minecraft:entity.item.pickup', 0.7, 1.15);
  ensureStaffLoop(player);
}
function throwOrbitBlock(e) {
  if (typeof e.setCanceled === 'function') {
    e.setCanceled(true);
  }
  if (!isPickupStaff(e.item) || !e.player) {
    return;
  }
  var data = e.item.getTempdata();
  var now = e.player.getWorld().getTotalTime();
  if (data.get('throwTick') === now) {
    return;
  }
  data.put('throwTick', now);
  var player = e.player;
  var taken = takeOrbitAmmo(player);
  if (!taken) {
    return;
  }
  var world = player.getWorld();
  var ent = world.getEntity(taken.uuid);
  if (!ent) {
    return;
  }
  ent.removeTag(orbitTag(player));
  ent.addTag(SHOT_TAG);
  ent.addTag(shotTag(player));
  var scale = THROW_SCALE;
  var wx = player.getX() + taken.from.x + taken.from.scale / 2;
  var wy = player.getY() + taken.from.y + taken.from.scale / 2;
  var wz = player.getZ() + taken.from.z + taken.from.scale / 2;
  var dir = lookDir(player);
  applyDisplayPose(ent, -scale / 2, -scale / 2, -scale / 2, scale, 0);
  ent.setPosition(wx, wy, wz);
  var casts = getCasts(player);
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
    scale: scale
  });
  setCasts(player, casts);
  play(player, 'minecraft:entity.snowball.throw', 0.9, 0.7);
  ensureStaffLoop(player);
}

function styleItem(item) {
  if (!item || typeof item.setTexture !== 'function') {
    return;
  }
  item.setTexture('minecraft:stick');
  item.setMaxStackSize(1);
  item.setCustomName('Block Staff');
  item.setLore(['Right-click to pick up a block', 'Left-click to throw']);
  if (typeof item.setDurabilityShow === 'function') {
    item.setDurabilityShow(false);
  }
}
function init(e) {
  styleItem(e.item);
}
function tick(e) {
  if (!isPickupStaff(e.item) || !e.player) {
    return;
  }
  ensureStaffLoop(e.player);
}
function attack(e) {
  throwOrbitBlock(e);
}
function interact(e) {
  pickupLookedBlock(e);
}

