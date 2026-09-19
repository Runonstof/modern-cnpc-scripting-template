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
function unsubscribe(world, id) {
  var jobs = getJobs(world);
  var kept = [];
  for (var i = 0; i < jobs.length; i++) {
    if (jobs[i].id !== id) {
      kept.push(jobs[i]);
    }
  }
  setJobs(world, kept);
  if (!kept.length) {
    stopScheduler(world);
  }
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

Java.type('noppes.npcs.api.NpcAPI').Instance();
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
var ORBIT_COUNT = 8;
var ORBIT_RADIUS = 1.75;
var TICKS_PER_SEC = 20;
var ORBIT_SPEED = 0.18 * TICKS_PER_SEC;
var TILT = 32 * Math.PI / 180;
var BLOCK_SCALE = 0.35;
var THROW_SCALE = 0.8;
var ORBIT_TAG = 'magma_staff_orbit';
var SHOT_TAG = 'magma_staff_shot';
var START_KEY = 'staffOrbitStart';
var SLOTS_KEY = 'staffOrbitSlots';
var CAST_KEY = 'staffCast';
var REFILL_KEY = 'staffRefill';
var LEFT_AT = 'staffLeftAt';
var RIGHT_AT = 'staffRightAt';
var REFILL_LOCK = 'staffRefillLock';
var INPUT_VER = 'staffInputV';
var INPUT_VER_NOW = 7;
var JOB_VER = 6;
var ORBIT_PERIOD_MS = 20;
var REFILL_JOIN_SEC = 0.85;
var LIFT_SEC = 2.2;
var THROW_SPEED = 16;
var GRAVITY = 6;
var EXPLODE_RANGE = 2.5;
var LEFT_KEYS = {
  0: true,
  '-100': true
};
var RIGHT_KEYS = {
  '-99': true
};
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
function isMagmaStaff(item) {
  if (!item || item.isEmpty()) {
    return false;
  }
  try {
    var nbt = item.getNbt();
    return !!(nbt && nbt.has('MagmaStaff') && nbt.getBoolean('MagmaStaff'));
  } catch (err) {
    return false;
  }
}
function holdingStaff(player) {
  return isMagmaStaff(player.getMainhandItem());
}
function isLeftKey(key) {
  return !!LEFT_KEYS[key] || !!LEFT_KEYS[String(key)];
}
function isRightKey(key) {
  return !!RIGHT_KEYS[key] || !!RIGHT_KEYS[String(key)];
}
function pulseKey(side) {
  return side === 'left' ? LEFT_AT : RIGHT_AT;
}
function releaseHeld(player, side) {
  player.getTempdata().remove(pulseKey(side));
}
function attackHoldWindowNs(player) {
  var delayTicks = 6;
  try {
    var mc = player.getMCEntity();
    // m_36333_ = net.minecraft.world.entity.player.Player#getCurrentItemAttackStrengthDelay
    delayTicks = mc.m_36333_();
  } catch (err) {}
  return Math.max(0.28, delayTicks / 20 * 1.6) * 1e9;
}
function isHeld(player, side) {
  var last = player.getTempdata().get(pulseKey(side));
  if (!last) {
    return false;
  }
  var window = side === 'left' ? attackHoldWindowNs(player) : 220 * 1e6;
  return System.nanoTime() - last < window;
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
  var last = player.getTempdata().get(RIGHT_AT);
  return !last || System.nanoTime() - last > 500 * 1e6;
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
function overheadPoint(player, scale) {
  return {
    x: 0,
    y: player.getEyeHeight() + 0.95,
    z: 0,
    scale: scale
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
  var world = player.getWorld();
  var slots = getSlots(player).slice();
  while (slots.length < ORBIT_COUNT) {
    slots.push(null);
  }
  for (var i = 0; i < ORBIT_COUNT; i++) {
    if (!slots[i]) {
      continue;
    }
    var ent = world.getEntity(slots[i]);
    if (!ent || !ent.isAlive()) {
      slots[i] = null;
    }
  }
  setSlots(player, slots);
  return slots;
}
function updateOrbit(player) {
  var slots = syncOrbitSlots(player);
  var time = nowSec(player);
  var cx = player.getX();
  var cy = player.getY();
  var cz = player.getZ();
  var center = BLOCK_SCALE / 2;
  var world = player.getWorld();
  for (var i = 0; i < slots.length; i++) {
    if (!slots[i]) {
      continue;
    }
    var ent = world.getEntity(slots[i]);
    if (!ent || !ent.isAlive()) {
      continue;
    }
    var pose = orbitWorldOffset(player, i, time);
    applyDisplayPose(ent, pose.x, pose.y, pose.z, pose.scale);
    if (Math.abs(ent.getX() - cx) > 0.001 || Math.abs(ent.getY() - cy) > 0.001 || Math.abs(ent.getZ() - cz) > 0.001) {
      ent.setPosition(cx, cy, cz);
    }
    if (Math.floor(time * TICKS_PER_SEC) % 16 === i % 4 * 4) {
      world.spawnParticle('lava', cx + pose.x + center, cy + pose.y + center, cz + pose.z + center, 0, 0.02, 0, 0, 1);
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
  var uuid = slots[best];
  var from = orbitWorldOffset(player, best, time);
  slots[best] = null;
  setSlots(player, slots);
  return {
    uuid: uuid,
    from: from
  };
}
function failEntity(player, uuid) {
  var world = player.getWorld();
  var ent = uuid ? world.getEntity(uuid) : null;
  if (ent && ent.isAlive()) {
    puffFail(world, ent.getX(), ent.getY() + 0.4, ent.getZ());
    ent.despawn();
  } else {
    puffFail(world, player.getX(), player.getY() + player.getEyeHeight(), player.getZ());
  }
  play(player, 'minecraft:entity.generic.extinguish_fire', 0.85, 0.65);
}
function cancelRefill(player, wasted) {
  var refill = player.getTempdata().get(REFILL_KEY);
  player.getTempdata().remove(REFILL_KEY);
  if (!refill || !refill.uuid) {
    return;
  }
  if (wasted) {
    failEntity(player, refill.uuid);
  } else {
    var ent = player.getWorld().getEntity(refill.uuid);
    if (ent) {
      ent.despawn();
    }
  }
}
function cancelCast(player, wasted) {
  var cast = player.getTempdata().get(CAST_KEY);
  player.getTempdata().remove(CAST_KEY);
  if (!cast || !cast.uuid || cast.phase === 'fly') {
    return;
  }
  if (wasted) {
    failEntity(player, cast.uuid);
  } else {
    var ent = player.getWorld().getEntity(cast.uuid);
    if (ent) {
      ent.despawn();
    }
  }
}
function updateRefill(player) {
  var refill = player.getTempdata().get(REFILL_KEY);
  if (!refill) {
    return;
  }
  if (!holdingStaff(player)) {
    cancelRefill(player, true);
    player.getTempdata().put(REFILL_LOCK, 1);
    return;
  }
  var world = player.getWorld();
  var ent = world.getEntity(refill.uuid);
  if (!ent || !ent.isAlive()) {
    player.getTempdata().remove(REFILL_KEY);
    return;
  }
  var p = easeInOut((System.nanoTime() - refill.start) / 1e9 / REFILL_JOIN_SEC);
  var dest = orbitWorldOffset(player, refill.slot, nowSec(player));
  applyDisplayPose(ent, lerp(refill.fromX, dest.x, p), lerp(refill.fromY, dest.y, p), lerp(refill.fromZ, dest.z, p), dest.scale);
  ent.setPosition(player.getX(), player.getY(), player.getZ());
  if ((System.nanoTime() - refill.start) / 1e9 < REFILL_JOIN_SEC) {
    return;
  }
  var slots = syncOrbitSlots(player);
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
  player.getTempdata().put(CAST_KEY, {
    uuid: taken.uuid,
    phase: 'lift',
    start: System.nanoTime(),
    last: System.nanoTime(),
    fromX: taken.from.x,
    fromY: taken.from.y,
    fromZ: taken.from.z,
    fromScale: taken.from.scale,
    readySound: false
  });
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
function beginFly(player, cast, ent) {
  var dest = overheadPoint(player, THROW_SCALE);
  var wx = player.getX() + dest.x;
  var wy = player.getY() + dest.y;
  var wz = player.getZ() + dest.z;
  var dir = lookDir(player);
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
  var block = world.getBlock(Math.floor(x), Math.floor(y), Math.floor(z));
  return block && !block.isAir();
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
function burstImpact(world, x, y, z) {
  for (var i = 0; i < 90; i++) {
    var ox = (Math.random() - 0.5) * 2.4;
    var oy = Math.random() * 1.8;
    var oz = (Math.random() - 0.5) * 2.4;
    world.spawnParticle('lava', x + ox, y + oy, z + oz, ox * 0.25, 0.18, oz * 0.25, 0.12, 2);
  }
  for (var _i = 0; _i < 8; _i++) {
    world.spawnParticle('lava', x, y + 0.2, z, 0.15, 0.35, 0.15, 0.2, 12);
  }
}
function impactShot(player, ent, x, y, z) {
  var world = player.getWorld();
  world.explode(x, y, z, EXPLODE_RANGE, false, false);
  burstImpact(world, x, y, z);
  if (ent && ent.isAlive()) {
    ent.despawn();
  }
  player.getTempdata().remove(CAST_KEY);
}
function updateCast(player) {
  var cast = player.getTempdata().get(CAST_KEY);
  if (!cast) {
    if (isHeld(player, 'left') && holdingStaff(player) && !player.getTempdata().get(REFILL_KEY)) {
      startCast(player);
    }
    return;
  }
  var world = player.getWorld();
  var ent = world.getEntity(cast.uuid);
  if (!ent || !ent.isAlive()) {
    player.getTempdata().remove(CAST_KEY);
    return;
  }
  var now = System.nanoTime();
  var dt = Math.min(0.08, (now - (cast.last || now)) / 1e9);
  cast.last = now;
  if (cast.phase === 'lift') {
    if (!isHeld(player, 'left') || !holdingStaff(player)) {
      cancelCast(player, true);
      return;
    }
    var p = easeInOut((now - cast.start) / 1e9 / LIFT_SEC);
    var dest = overheadPoint(player, THROW_SCALE);
    applyDisplayPose(ent, lerp(cast.fromX, dest.x - dest.scale / 2, p), lerp(cast.fromY, dest.y - dest.scale / 2, p), lerp(cast.fromZ, dest.z - dest.scale / 2, p), lerp(cast.fromScale, dest.scale, p));
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
    var _dest = overheadPoint(player, THROW_SCALE);
    var spin = (now - (cast.readyAt || cast.start)) / 1e9 * Math.PI * 2.4;
    applyDisplayPose(ent, _dest.x - _dest.scale / 2, _dest.y - _dest.scale / 2, _dest.z - _dest.scale / 2, _dest.scale, 2, spin);
    ent.setPosition(player.getX(), player.getY(), player.getZ());
    world.spawnParticle('lava', player.getX(), player.getY() + _dest.y + _dest.scale * 0.5, player.getZ(), 0.08, 0.12, 0.08, 0.02, 3);
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
function ensureStaffLoop(player) {
  var world = player.getWorld();
  unsubscribe(world, oldJobId(player));
  subscribe(world, jobId(player), player, ORBIT_PERIOD_MS, tickPlayer);
}
function stopStaffLoop(player) {
  var world = player.getWorld();
  unsubscribe(world, oldJobId(player));
  unsubscribe(world, jobId(player));
  stopThreadsNamed(threadName(player.getUUID()));
}
function despawnStaffEffects(player) {
  var world = player.getWorld();
  var tags = [orbitTag(player), shotTag(player)];
  var nearby = world.getNearbyEntities(player.getPos(), 48, -1);
  for (var i = 0; i < nearby.length; i++) {
    var ent = nearby[i];
    if (!ent || !ent.hasTag) {
      continue;
    }
    for (var t = 0; t < tags.length; t++) {
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
function onStaffKey(player, key, down) {
  if (!down && isLeftKey(key)) {
    releaseHeld(player, 'left');
  }
  if (!down && isRightKey(key)) {
    releaseHeld(player, 'right');
  }
}

function keyPressed(e) {
  onStaffKey(e.player, e.key, true);
}
function keyReleased(e) {
  onStaffKey(e.player, e.key, false);
}
function broken(e) {
  if (!holdingStaff(e.player)) {
    return;
  }
  if (typeof e.setCanceled === 'function') {
    e.setCanceled(true);
  }
}
function attack(e) {
  if (!holdingStaff(e.player)) {
    return;
  }
  if (typeof e.setCanceled === 'function') {
    e.setCanceled(true);
  }
}
function tick(e) {
  if (holdingStaff(e.player)) {
    ensureStaffLoop(e.player);
  }
}
function logout(e) {
  stopStaffLoop(e.player);
  despawnStaffEffects(e.player);
}
function died(e) {
  despawnStaffEffects(e.player);
}

