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

var SPEED = 1;
var DURATION = 6;
var AMPLIFIER = 2;
var RESPAWN_TICKS = 200;
var RANGE = 1.6;
var STEP_MS = 100;
function num(data, key, fallback) {
  var value = data.get(key);
  if (value == null) {
    return fallback;
  }
  var n = Number(value);
  return isNaN(n) ? fallback : n;
}
function crystalOf(npc) {
  var id = npc.getTempdata().get('crystal');
  if (!id) {
    return null;
  }
  var crystal = npc.getWorld().getEntity(String(id));
  if (!crystal || !crystal.isAlive()) {
    return null;
  }
  return crystal;
}
function showCrystal(npc) {
  if (crystalOf(npc)) {
    return;
  }
  var world = npc.getWorld();
  var crystal = world.createEntity('minecraft:end_crystal');
  var nbt = crystal.getEntityNbt();
  nbt.setBoolean('ShowBottom', false);
  nbt.setBoolean('Invulnerable', true);
  crystal.setEntityNbt(nbt);
  crystal.setPosition(npc.getX(), npc.getY(), npc.getZ());
  crystal.spawn();
  npc.getTempdata().put('crystal', crystal.getUUID());
}
function hideCrystal(npc) {
  var crystal = crystalOf(npc);
  if (crystal) {
    crystal.despawn();
  }
  npc.getTempdata().remove('crystal');
}
function stepPad(npc) {
  var data = npc.getTempdata();
  var now = Number(npc.getWorld().getTotalTime());
  var readyAt = num(data, 'readyAt', 0);
  if (now < readyAt) {
    hideCrystal(npc);
    return;
  }
  showCrystal(npc);
  var players = npc.getWorld().getAllPlayers();
  var x = npc.getX();
  var y = npc.getY();
  var z = npc.getZ();
  for (var i = 0; i < players.length; i++) {
    var player = players[i];
    var dx = x - player.getX();
    var dy = y - player.getY();
    var dz = z - player.getZ();
    if (dy < -1 || dy > 2.5) {
      continue;
    }
    if (dx * dx + dz * dz > RANGE * RANGE) {
      continue;
    }
    player.addPotionEffect(SPEED, DURATION, AMPLIFIER, false);
    data.put('readyAt', now + RESPAWN_TICKS);
    hideCrystal(npc);
    npc.getWorld().playSoundAt(npc.getPos(), 'minecraft:entity.experience_orb.pickup', 0.8, 1.4);
    return;
  }
}
function init(e) {
  var npc = e.npc;
  var display = npc.getDisplay();
  display.setName('Boost');
  display.setTitle('');
  display.setSize(1);
  display.setShowName(1);
  display.setHasLivingAnimation(false);
  display.setHitboxState(1);
  display.setVisible(1);
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
  var jobId = 'boost-pad:' + npc.getUUID();
  unsubscribe(npc.getWorld(), jobId);
  subscribe(npc.getWorld(), jobId, npc, STEP_MS, stepPad);
}
function died(e) {
  hideCrystal(e.npc);
  unsubscribe(e.npc.getWorld(), 'boost-pad:' + e.npc.getUUID());
}
function damaged(e) {
  e.setCanceled(true);
}
function interact(e) {
  e.setCanceled(true);
}

