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

var Vec3 = Java.type('net.minecraft.world.phys.Vec3');
var MoverType = Java.type('net.minecraft.world.entity.MoverType');
var FLY_SPEED = 8;
var FLOAT_DOWN_SPEED = 1.2;
var FLY_PERIOD_MS = 20;
var MOUNT_MODEL = 'minecraft:wolf';
var MOUNT_TEXTURE = 'minecraft:textures/entity/wolf/wolf.png';
var MOUNT_SIZE = 5;
var MODEL_SCALE = 1;
var SCALE_KEYS = ['HeadConfig', 'BodyConfig', 'ArmsConfig', 'Arms2Config', 'LegsConfig', 'Legs2Config'];
function scaleModelConfig(config, scale) {
  config.setFloat('ScaleX', scale);
  config.setFloat('ScaleY', scale);
  config.setFloat('ScaleZ', scale);
}
function writeAppearanceNbt(npc) {
  var nbt = npc.getEntityNbt();
  nbt.putString('Texture', MOUNT_TEXTURE);
  nbt.setInteger('Size', MOUNT_SIZE);
  nbt.setBoolean('UsingSkinUrl', false);
  nbt.putString('SkinUrl', '');
  if (nbt.has('NpcModelData')) {
    var modelData = nbt.getCompound('NpcModelData');
    modelData.putString('EntityName', MOUNT_MODEL);
    modelData.putString('CustomSkinUrl', '');
    for (var i = 0; i < SCALE_KEYS.length; i++) {
      var key = SCALE_KEYS[i];
      if (modelData.has(key)) {
        scaleModelConfig(modelData.getCompound(key), MODEL_SCALE);
      }
    }
    nbt.setCompound('NpcModelData', modelData);
  }
  npc.setEntityNbt(nbt);
}
function configureDragon(npc) {
  var display = npc.getDisplay();
  display.setName('Wolf');
  display.setTitle('');
  display.setSkinUrl('');
  display.setSkinTexture(MOUNT_TEXTURE);
  display.setModel(MOUNT_MODEL);
  display.setSize(MOUNT_SIZE);
  display.setShowName(0);
  display.setHasLivingAnimation(true);
  display.setVisible(0);
  display.setHitboxState(0);
  for (var part = 0; part < 6; part++) {
    display.setModelScale(part, MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);
  }
  writeAppearanceNbt(npc);
  display.setModel(MOUNT_MODEL);
  var stats = npc.getStats();
  stats.setMaxHealth(80);
  npc.setHealth(80);
  stats.setRespawnType(3);
  stats.setImmune(1, true);
  stats.setImmune(4, true);
  stats.getMelee().setStrength(0);
  stats.getMelee().setRange(0);
  var ai = npc.getAi();
  ai.setMovingType(0);
  ai.setNavigationType(1);
  ai.setStandingType(1);
  ai.setReturnsHome(false);
  ai.setRetaliateType(3);
  ai.setStopOnInteract(false);
  ai.setWalkingSpeed(0);
  ai.setMountControl(false);
  ai.setAttackLOS(false);
  setNoGravity(npc, true);
  npc.updateClient();
}
function setNoGravity(entity, value) {
  var mc = entity.getMCEntity();
  // m_20242_ = net.minecraft.world.entity.Entity#setNoGravity
  mc.m_20242_(value);
}
function moveColliding(npc, dx, dy, dz) {
  var mc = npc.getMCEntity();
  // f_19794_ = net.minecraft.world.entity.Entity#noPhysics
  mc.f_19794_ = false;
  // m_6478_ = net.minecraft.world.entity.Entity#move
  // SELF = net.minecraft.world.entity.MoverType#SELF
  mc.m_6478_(MoverType.SELF, new Vec3(dx, dy, dz));
}
function getRider(npc) {
  var riders = npc.getRiders();
  if (!riders || riders.length === 0) {
    return null;
  }
  return riders[0];
}
function riderLook(npc, rider) {
  var temp = npc.getWorld().getTempdata();
  var uuid = rider.getUUID();
  var yaw = temp.get('mountYaw_' + uuid);
  var pitch = temp.get('mountPitch_' + uuid);
  if (yaw == null || pitch == null) {
    var mc = rider.getMCEntity();
    // m_146908_ = net.minecraft.world.entity.Entity#getYRot
    yaw = mc.m_146908_();
    // m_146909_ = net.minecraft.world.entity.Entity#getXRot
    pitch = mc.m_146909_();
  }
  if (yaw == null) {
    yaw = rider.getRotation();
  }
  if (pitch == null) {
    pitch = rider.getPitch();
  }
  return {
    yaw: yaw,
    pitch: pitch
  };
}
function lookDirection(yawDeg, pitchDeg) {
  var yaw = yawDeg * Math.PI / 180;
  var pitch = pitchDeg * Math.PI / 180;
  var cosPitch = Math.cos(pitch);
  return {
    x: -Math.sin(yaw) * cosPitch,
    y: -Math.sin(pitch),
    z: Math.cos(yaw) * cosPitch
  };
}
function forwardInput(npc, rider) {
  var held = npc.getWorld().getTempdata().get('mountW_' + rider.getUUID());
  if (held) {
    return 1;
  }
  var input = 0;
  if (rider.getMoveForward) {
    input = rider.getMoveForward();
  }
  if (Math.abs(input) < 0.01 && npc.getMoveForward) {
    input = npc.getMoveForward();
  }
  return input;
}
function flyJobId(npc) {
  return 'mount-fly:' + npc.getUUID();
}
function stopMountLoop(npc) {
  var uuid = npc.getUUID();
  unsubscribe(npc.getWorld(), flyJobId(npc));
  stopThreadsNamed('mount-fly-' + uuid);
}
function landY(npc) {
  var world = npc.getWorld();
  var x = npc.getBlockX();
  var z = npc.getBlockZ();
  var y = Math.floor(npc.getY());
  var minY = -64;
  while (y >= minY) {
    var block = world.getBlock(x, y, z);
    if (block && !block.isAir()) {
      return y + 1;
    }
    y--;
  }
  return minY;
}
function floatToGround(npc, dt) {
  var target = landY(npc);
  var y = npc.getY();
  if (y <= target + 0.05) {
    npc.setMotionX(0);
    npc.setMotionY(0);
    npc.setMotionZ(0);
    if (y < target) {
      npc.setY(target);
    }
    return;
  }
  var step = Math.min(y - target, FLOAT_DOWN_SPEED * dt);
  npc.setMotionX(0);
  npc.setMotionY(0);
  npc.setMotionZ(0);
  moveColliding(npc, 0, -step, 0);
}
function updateFlight(npc, dt) {
  setNoGravity(npc, true);
  var rider = getRider(npc);
  if (!rider) {
    floatToGround(npc, dt);
    return;
  }
  var input = forwardInput(npc, rider);
  if (input <= 0.05) {
    npc.setMotionX(0);
    npc.setMotionY(0);
    npc.setMotionZ(0);
    return;
  }
  var look = riderLook(npc, rider);
  var dir = lookDirection(look.yaw, look.pitch);
  var speed = FLY_SPEED * Math.min(1, input);
  var step = speed * dt;
  npc.setRotation(look.yaw);
  npc.setPitch(look.pitch);
  npc.setMotionX(0);
  npc.setMotionY(0);
  npc.setMotionZ(0);
  moveColliding(npc, dir.x * step, dir.y * step, dir.z * step);
}
function init(e) {
  stopMountLoop(e.npc);
  configureDragon(e.npc);
  subscribe(e.npc.getWorld(), flyJobId(e.npc), e.npc, FLY_PERIOD_MS, updateFlight);
}
function interact(e) {
  var npc = e.npc;
  var player = e.player;
  var rider = getRider(npc);
  if (rider && rider.getUUID() === player.getUUID()) {
    player.setMount(null);
  } else {
    npc.addRider(player);
    setNoGravity(npc, true);
  }
  e.setCanceled(true);
}
function died(e) {
  stopMountLoop(e.npc);
}

