var Thread = Java.type('java.lang.Thread');
var System = Java.type('java.lang.System');
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
  var now = System.nanoTime();
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
        var lastNanos = System.nanoTime();
        var _loop = function _loop() {
          if (!server) {
            return 1; // break
          }
          var now = System.nanoTime();
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

var GOAL_EAST = -158;
var GOAL_WEST = -244;
var GOAL_Z0 = 154;
var GOAL_Z1 = 162;
var CENTER_X = -200.5;
var CENTER_Y = 56.05;
var CENTER_Z = 158.5;
var STEP_MS = 50;
var GRAVITY = 0.035;
var GROUND_REST = 0.28;
var FRICTION = 0.9;
var AIR_DRAG = 0.995;
var RADIUS = 0.62;
var HEIGHT = 1.25;
var MAX_STEP = 0.3;
var STOP = 0.015;
var MAX_SPEED = 1.15;
function num(data, key, fallback) {
  var value = data.get(key);
  if (value == null) {
    return fallback;
  }
  var n = Number(value);
  return isNaN(n) ? fallback : n;
}
function isSolid(world, x, y, z) {
  var block = world.getBlock(x, y, z);
  if (!block || block.isAir()) {
    return false;
  }
  return true;
}
function overlaps(world, x, y, z) {
  var minX = Math.floor(x - RADIUS);
  var maxX = Math.floor(x + RADIUS);
  var minY = Math.floor(y + 0.02);
  var maxY = Math.floor(y + HEIGHT - 0.02);
  var minZ = Math.floor(z - RADIUS);
  var maxZ = Math.floor(z + RADIUS);
  for (var bx = minX; bx <= maxX; bx++) {
    for (var by = minY; by <= maxY; by++) {
      for (var bz = minZ; bz <= maxZ; bz++) {
        if (isSolid(world, bx, by, bz)) {
          return true;
        }
      }
    }
  }
  return false;
}
var WALL = 0.85;
var MOUTH_TOP = 64;
function nudgeOut(world, x, y, z, ax, ay, az) {
  for (var n = 0; n < 10; n++) {
    if (!overlaps(world, x, y, z)) {
      return {
        x: x,
        y: y,
        z: z
      };
    }
    x += ax;
    y += ay;
    z += az;
  }
  return {
    x: x,
    y: y,
    z: z
  };
}
function kick(npc, entity) {
  var data = npc.getTempdata();
  var now = npc.getWorld().getTotalTime();
  if (now - num(data, 'kickAt', 0) < 5) {
    return;
  }
  data.put('kickAt', now);
  var dx = npc.getX() - entity.getX();
  var dz = npc.getZ() - entity.getZ();
  var len = Math.sqrt(dx * dx + dz * dz) || 1;
  var yaw = entity.getRotation() * Math.PI / 180;
  var lookX = -Math.sin(yaw);
  var lookZ = Math.cos(yaw);
  var dirX = dx / len * 0.35 + lookX * 0.65;
  var dirZ = dz / len * 0.35 + lookZ * 0.65;
  var dirLen = Math.sqrt(dirX * dirX + dirZ * dirZ) || 1;
  var mx = entity.getMotionX();
  var mz = entity.getMotionZ();
  var rise = Math.max(0, entity.getMotionY());
  var lift = Math.min(1, Math.max(0, (rise - 0.18) / 0.24));
  var power = 0.32 + Math.sqrt(mx * mx + mz * mz) * 1.6;
  if (entity.isSprinting && entity.isSprinting()) {
    power *= 1.35;
  }
  var forward = power * (1 - lift * 0.65);
  var vx = num(data, 'vx', 0) + dirX / dirLen * forward;
  var vz = num(data, 'vz', 0) + dirZ / dirLen * forward;
  var groundedPop = 0.06 + power * 0.05;
  var jumpPop = 0.22 + power * 0.7;
  var vy = Math.max(num(data, 'vy', 0), groundedPop * (1 - lift) + jumpPop * lift);
  var hSpeed = Math.sqrt(vx * vx + vz * vz);
  if (hSpeed > MAX_SPEED) {
    var scale = MAX_SPEED / hSpeed;
    vx *= scale;
    vz *= scale;
  }
  if (vy > 0.65) {
    vy = 0.65;
  }
  data.put('vx', vx);
  data.put('vy', vy);
  data.put('vz', vz);
  npc.getWorld().playSoundAt(npc.getPos(), 'minecraft:entity.player.attack.sweep', 1.2, 1);
}
function resetBall(npc, message) {
  var data = npc.getTempdata();
  data.put('vx', 0);
  data.put('vy', 0);
  data.put('vz', 0);
  npc.setPosition(CENTER_X, CENTER_Y, CENTER_Z);
  npc.setMotionX(0);
  npc.setMotionY(0);
  npc.setMotionZ(0);
  if (message) {
    npc.getWorld().broadcast(message);
  }
}
function celebrate(npc) {
  var world = npc.getWorld();
  var x = npc.getX();
  var y = npc.getY() + 0.6;
  var z = npc.getZ();
  world.spawnParticle('explosion_emitter', x, y, z, 0, 0, 0, 0, 1);
  world.spawnParticle('explosion', x, y, z, 0.8, 0.4, 0.8, 0.08, 12);
  world.spawnParticle('firework', x, y, z, 1.1, 0.9, 1.1, 0.35, 90);
  world.spawnParticle('totem_of_undying', x, y, z, 0.9, 1, 0.9, 0.45, 70);
  world.spawnParticle('flash', x, y, z, 0, 0, 0, 0, 4);
  var pos = npc.getPos();
  world.playSoundAt(pos, 'minecraft:entity.generic.explode', 8, 0.6);
  world.playSoundAt(pos, 'minecraft:entity.firework_rocket.large_blast', 8, 0.5);
  world.playSoundAt(pos, 'minecraft:entity.ender_dragon.growl', 4, 1.5);
  var players = world.getAllPlayers();
  for (var i = 0; i < players.length; i++) {
    var player = players[i];
    var dx = player.getX() - x;
    var dz = player.getZ() - z;
    var dist = Math.sqrt(dx * dx + dz * dz) || 0.5;
    if (dist > 28) {
      continue;
    }
    var force = 1.6 * (1 - dist / 32);
    player.setMotionX(dx / dist * force);
    player.setMotionZ(dz / dist * force);
    player.setMotionY(0.85 + force * 0.35);
  }
}
function score(npc, team) {
  var stored = npc.getWorld().getStoreddata();
  var key = team === 1 ? 'footballScore1' : 'footballScore2';
  var next = num(stored, key, 0) + 1;
  stored.put(key, next);
  var s1 = num(stored, 'footballScore1', 0);
  var s2 = num(stored, 'footballScore2', 0);
  celebrate(npc);
  resetBall(npc, 'Team ' + team + ' scores!  ' + s1 + ' - ' + s2);
}
function init(e) {
  var npc = e.npc;
  var display = npc.getDisplay();
  display.setName('Ball');
  display.setTitle('');
  display.setModel('minecraft:slime');
  display.setSize(12);
  display.setShowName(1);
  display.setHasLivingAnimation(false);
  display.setTint(0xffffff);
  display.setHitboxState(0);
  var ai = npc.getAi();
  ai.setMovingType(0);
  ai.setRetaliateType(3);
  ai.setReturnsHome(false);
  ai.setStandingType(1);
  ai.setSheltersFrom(2);
  var stats = npc.getStats();
  stats.setMaxHealth(1000);
  npc.setHealth(1000);
  stats.setAggroRange(0);
  stats.setImmune(1, true);
  stats.setResistance(0, 2);
  stats.setResistance(3, 2);
  stats.setRespawnType(3);
  var nbt = npc.getEntityNbt();
  nbt.setBoolean('NoGravity', true);
  npc.setEntityNbt(nbt);
  npc.setHome(Math.floor(CENTER_X), Math.floor(CENTER_Y), Math.floor(CENTER_Z));
  var jobId = 'football-ball:' + npc.getUUID();
  unsubscribe(npc.getWorld(), jobId);
  subscribe(npc.getWorld(), jobId, npc, STEP_MS, stepBall);
  var data = npc.getTempdata();
  if (data.get('vx') == null) {
    data.put('vx', 0);
    data.put('vy', 0);
    data.put('vz', 0);
  }
}
function collide(e) {
  var entity = e.entity;
  if (!entity || entity.getUUID() === e.npc.getUUID()) {
    return;
  }
  var typeName = String(entity.getTypeName());
  if (typeName.indexOf('player') === -1) {
    return;
  }
  kick(e.npc, entity);
}
function damaged(e) {
  e.setCanceled(true);
  if (e.source) {
    kick(e.npc, e.source);
  }
}
function kickNearbyPlayers(npc) {
  var players = npc.getWorld().getAllPlayers();
  for (var i = 0; i < players.length; i++) {
    var player = players[i];
    var dx = npc.getX() - player.getX();
    var dy = npc.getY() - player.getY();
    var dz = npc.getZ() - player.getZ();
    if (dy < -1.5 || dy > 2.2) {
      continue;
    }
    if (dx * dx + dz * dz > 1.8 * 1.8) {
      continue;
    }
    kick(npc, player);
  }
}
function died(e) {
  unsubscribe(e.npc.getWorld(), 'football-ball:' + e.npc.getUUID());
}
function stepBall(npc) {
  kickNearbyPlayers(npc);
  var world = npc.getWorld();
  var data = npc.getTempdata();
  var vx = num(data, 'vx', 0);
  var vy = num(data, 'vy', 0);
  var vz = num(data, 'vz', 0);
  vy -= GRAVITY;
  var fastest = Math.max(Math.abs(vx), Math.abs(vy), Math.abs(vz));
  var steps = Math.max(1, Math.ceil(fastest / MAX_STEP));
  var sx = vx / steps;
  var sy = vy / steps;
  var sz = vz / steps;
  var x = npc.getX();
  var y = npc.getY();
  var z = npc.getZ();
  var onGround = false;
  for (var i = 0; i < steps; i++) {
    var tryX = x + sx;
    if (overlaps(world, tryX, y, z)) {
      vx = -vx * WALL;
      var freed = nudgeOut(world, x, y, z, sx > 0 ? -0.12 : 0.12, 0, 0);
      x = freed.x;
      y = freed.y;
      z = freed.z;
      break;
    }
    x = tryX;
    var tryZ = z + sz;
    if (overlaps(world, x, y, tryZ)) {
      vz = -vz * WALL;
      var _freed = nudgeOut(world, x, y, z, 0, 0, sz > 0 ? -0.12 : 0.12);
      x = _freed.x;
      y = _freed.y;
      z = _freed.z;
      break;
    }
    z = tryZ;
    var tryY = y + sy;
    if (overlaps(world, x, tryY, z)) {
      if (vy < 0) {
        onGround = true;
        vy = Math.abs(vy) < 0.08 ? 0 : -vy * GROUND_REST;
        var _freed2 = nudgeOut(world, x, y, z, 0, 0.08, 0);
        x = _freed2.x;
        y = _freed2.y;
        z = _freed2.z;
      } else {
        vy = -vy * WALL;
        var _freed3 = nudgeOut(world, x, y, z, 0, -0.08, 0);
        x = _freed3.x;
        y = _freed3.y;
        z = _freed3.z;
      }
      break;
    }
    y = tryY;
  }
  if (onGround || overlaps(world, x, y - 0.08, z)) {
    vx *= FRICTION;
    vz *= FRICTION;
  } else {
    vx *= AIR_DRAG;
    vz *= AIR_DRAG;
  }
  if (Math.abs(vx) < STOP) vx = 0;
  if (Math.abs(vz) < STOP) vz = 0;
  data.put('vx', vx);
  data.put('vy', vy);
  data.put('vz', vz);
  npc.setPosition(x, y, z);
  npc.setMotionX(0);
  npc.setMotionY(0);
  npc.setMotionZ(0);
  if (x > GOAL_EAST || x < GOAL_WEST) {
    var throughMouth = y < MOUTH_TOP - 0.15 && z >= GOAL_Z0 && z <= GOAL_Z1;
    if (throughMouth && x > GOAL_EAST) {
      score(npc, 1);
      return;
    }
    if (throughMouth && x < GOAL_WEST) {
      score(npc, 2);
      return;
    }
    if (x > GOAL_EAST) {
      x = GOAL_EAST - RADIUS;
      vx = -Math.abs(vx) * WALL;
    } else {
      x = GOAL_WEST + RADIUS;
      vx = Math.abs(vx) * WALL;
    }
    data.put('vx', vx);
    data.put('vy', vy);
    data.put('vz', vz);
    npc.setPosition(x, y, z);
    return;
  }
}

