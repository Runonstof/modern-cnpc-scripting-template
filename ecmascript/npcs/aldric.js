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
function getServer$1(world) {
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
  var server = getServer$1(world);
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

var API = Java.type('noppes.npcs.api.NpcAPI').Instance();
var Display = Java.type('net.minecraft.world.entity.Display');
var Integer = Java.type('java.lang.Integer');
var Vector3f = Java.type('org.joml.Vector3f');
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
var ORBIT_COUNT = 8;
var ORBIT_RADIUS = 1.75;
var TICKS_PER_SEC = 20;
var ORBIT_SPEED = 0.18 * TICKS_PER_SEC;
var TILT_MAX = 20 * Math.PI / 180;
var TILT_SPEED = Math.PI * 2 / 110 * TICKS_PER_SEC;
var TILT_AXIS_SPEED = Math.PI * 2 / 180 * TICKS_PER_SEC;
var BLOCK_SCALE = 0.35;
var THROW_SCALE = 0.8;
var ORBIT_TAG = 'aldric_orbit';
var SHOT_TAG = 'aldric_shot';
var ORBIT_TIMER = 10;
var START_KEY = 'orbitStartNanos';
var SLOTS_KEY = 'orbitSlots';
var CAST_KEY = 'magmaCast';
var ELEMENT_KEY = 'orbitElement';
var REFILL_KEY = 'orbitRefill';
var PAUSE_KEY = 'orbitPause';
var ORBIT_PERIOD_MS = 20;
var PAUSE_AFTER_NS = 100 * 1e6;
var ATTACK_RANGE = 22;
var MIN_RANGE = 16;
var LIFT_SEC = 4;
var HOLD_SEC = 0.5;
var REFILL_JOIN_SEC = 0.8;
var ELEMENT_MAGMA = 'magma';
var ELEMENT_ICE = 'ice';
var THROW_SPEED = 16;
var GRAVITY = 6;
var EXPLODE_RANGE = 2.5;
var CAST_COOLDOWN_SEC = 1.25;
var WALK_SPEED = 4;
var PUPPET_REST = 180;
var ARM_LIFT_START = {
  x: 165,
  y: 180,
  z: 190
};
function threadName(uuid) {
  return 'aldric-orbit-' + uuid;
}
function nowSec(npc) {
  var startNanos = npc.getTempdata().get(START_KEY) || System.nanoTime();
  return (System.nanoTime() - startNanos) / 1e9;
}
function distanceTo(a, b) {
  var dx = a.getX() - b.getX();
  var dy = a.getY() - b.getY();
  var dz = a.getZ() - b.getZ();
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
function easeInOut(t) {
  return 0.5 - 0.5 * Math.cos(Math.PI * Math.max(0, Math.min(1, t)));
}
function lerp(a, b, t) {
  return a + (b - a) * t;
}
function tiltedOrbitPoint(angle, time) {
  var tilt = TILT_MAX * Math.sin(time * TILT_SPEED);
  var axis = time * TILT_AXIS_SPEED;
  return {
    x: Math.cos(angle) * ORBIT_RADIUS,
    y: Math.sin(angle - axis) * ORBIT_RADIUS * Math.sin(tilt),
    z: Math.sin(angle) * ORBIT_RADIUS
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
  var ent = world.createEntity('minecraft:block_display');
  var extra = API.stringToNbt('{block_state:{Name:"' + blockNameFor(element || getElement(npc)) + '"},interpolation_duration:2,' + 'transformation:{translation:[0f,0f,0f],left_rotation:[0f,0f,0f,1f],' + 'right_rotation:[0f,0f,0f,1f],scale:[' + BLOCK_SCALE + 'f,' + BLOCK_SCALE + 'f,' + BLOCK_SCALE + 'f]}}');
  var nbt = ent.getEntityNbt();
  nbt.merge(extra);
  ent.setEntityNbt(nbt);
  ent.setPosition(x, y, z);
  ent.addTag(ORBIT_TAG);
  ent.addTag(orbitTag(npc));
  ent.spawn();
  return ent.getUUID();
}
function despawnTagged(npc) {
  var world = npc.getWorld();
  var tags = [orbitTag(npc), shotTag(npc)];
  var nearby = world.getNearbyEntities(npc.getPos(), 48, -1);
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
  var slots = getSlots(npc);
  for (var _i = 0; _i < slots.length; _i++) {
    if (!slots[_i]) {
      continue;
    }
    var _ent = world.getEntity(slots[_i]);
    if (_ent) {
      _ent.despawn();
    }
  }
  var cast = npc.getTempdata().get(CAST_KEY);
  if (cast && cast.uuid) {
    var flying = world.getEntity(cast.uuid);
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
  var world = npc.getWorld();
  var slots = getSlots(npc).slice();
  while (slots.length < ORBIT_COUNT) {
    slots.push(null);
  }
  for (var i = 0; i < ORBIT_COUNT; i++) {
    var existing = slots[i] ? world.getEntity(slots[i]) : null;
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
  var slots = syncOrbitSlots(npc);
  if (ammoCount(slots) > 0) {
    return slots;
  }
  var world = npc.getWorld();
  var nearby = world.getNearbyEntities(npc.getPos(), 16, -1);
  var adopted = [];
  for (var i = 0; i < nearby.length; i++) {
    var ent = nearby[i];
    if (!ent || !ent.isAlive() || !ent.hasTag) {
      continue;
    }
    if (!ent.hasTag(orbitTag(npc)) || ent.hasTag(shotTag(npc))) {
      continue;
    }
    adopted.push(ent.getUUID());
  }
  if (adopted.length) {
    var next = [];
    for (var _i2 = 0; _i2 < ORBIT_COUNT; _i2++) {
      next.push(adopted[_i2] || null);
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
  var world = npc.getWorld();
  var slots = getSlots(npc).slice();
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
  setSlots(npc, slots);
  return slots;
}
function ammoCount(slots) {
  var n = 0;
  for (var i = 0; i < slots.length; i++) {
    if (slots[i]) {
      n++;
    }
  }
  return n;
}
function applyDisplayPose(ent, tx, ty, tz, scale, interp) {
  var duration = interp === undefined ? 2 : interp;
  var mc = ent.getMCEntity();
  // m_20088_ = net.minecraft.world.entity.Entity#getEntityData
  var data = mc.m_20088_();
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
    scale: scale
  };
}
function orbitWorldOffset(npc, slot, time) {
  var spin = time * ORBIT_SPEED;
  var angle = spin + Math.PI * 2 * slot / ORBIT_COUNT;
  var point = tiltedOrbitPoint(angle, time);
  var center = BLOCK_SCALE / 2;
  var eyeY = npc.getEyeHeight() - center;
  return {
    x: point.x - center,
    y: eyeY + point.y,
    z: point.z - center,
    scale: BLOCK_SCALE
  };
}
function updateOrbit(npc) {
  var slots = syncOrbitSlots(npc);
  var time = nowSec(npc);
  var cx = npc.getX();
  var cy = npc.getY();
  var cz = npc.getZ();
  var center = BLOCK_SCALE / 2;
  var world = npc.getWorld();
  for (var i = 0; i < slots.length; i++) {
    if (!slots[i]) {
      continue;
    }
    var ent = world.getEntity(slots[i]);
    if (!ent || !ent.isAlive()) {
      continue;
    }
    var pose = orbitWorldOffset(npc, i, time);
    applyDisplayPose(ent, pose.x, pose.y, pose.z, pose.scale);
    if (Math.abs(ent.getX() - cx) > 0.001 || Math.abs(ent.getY() - cy) > 0.001 || Math.abs(ent.getZ() - cz) > 0.001) {
      ent.setPosition(cx, cy, cz);
    }
    if (Math.floor(time * TICKS_PER_SEC) % 16 === i % 4 * 4) {
      world.spawnParticle(trailParticle(getElement(npc)), cx + pose.x + center, cy + pose.y + center, cz + pose.z + center, 0, 0.02, 0, 0, 1);
    }
  }
}
function getCombatTarget(npc) {
  var target = npc.getAttackTarget();
  if (!target || !target.isAlive()) {
    return null;
  }
  return target;
}
function applyCombat(npc) {
  var inv = npc.getInventory();
  inv.setProjectile(npc.getWorld().createItem('minecraft:air', 1));
  if (!inv.getRightHand() || inv.getRightHand().isEmpty()) {
    inv.setRightHand(npc.getWorld().createItem('minecraft:blaze_rod', 1));
  }
  npc.getDisplay().setHasLivingAnimation(true);
  var stats = npc.getStats();
  stats.setAggroRange(20);
  stats.getMelee().setStrength(0);
  stats.getMelee().setRange(0);
  stats.getMelee().setDelay(40);
  var ranged = stats.getRanged();
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
  var ai = npc.getAi();
  ai.setRetaliateType(0);
  ai.setReturnsHome(false);
  ai.setLeapAtTarget(false);
  ai.setStopOnInteract(false);
  ai.setAttackLOS(true);
  ai.setWalkingSpeed(WALK_SPEED);
  var nbt = npc.getEntityNbt();
  nbt.setBoolean('AttackOtherFactions', true);
  if (!npc.getTempdata().get('duelNoDamage')) {
    nbt.setInteger('FactionID', 2);
  }
  npc.setEntityNbt(nbt);
}
function needsFactionReset(npc) {
  if (npc.getTempdata().get('duelNoDamage')) {
    return false;
  }
  var faction = npc.getFaction();
  return !faction || faction.getId() !== 2;
}
function setJobBoolean(job, name, value) {
  var field = job.getClass().getDeclaredField(name);
  field.setAccessible(true);
  field.setBoolean(job, value);
}
function setPartDisabled(part, disabled) {
  var field = part.getClass().getDeclaredField('disabled');
  field.setAccessible(true);
  field.setBoolean(part, disabled);
}
function disableUnusedPuppetParts(job, keepPart) {
  for (var i = 0; i < 12; i++) {
    if (i === keepPart) {
      continue;
    }
    var part = job.getPart(i);
    if (part) {
      part.setRotation(PUPPET_REST, PUPPET_REST, PUPPET_REST);
      setPartDisabled(part, true);
    }
  }
}
function setLeftArmEnabled(npc, enabled) {
  var job = npc.getJob();
  if (!job || job.getType() !== 9 || !job.getPart) {
    return;
  }
  var part = job.getPart(1);
  if (!part) {
    return;
  }
  setPartDisabled(part, !enabled);
  if (!enabled) {
    part.setRotation(PUPPET_REST, PUPPET_REST, PUPPET_REST);
  }
}
function ensurePuppetJob(npc) {
  var nbt = npc.getEntityNbt();
  if (npc.getJob().getType() !== 9) {
    nbt.setInteger('NpcJob', 9);
  }
  nbt.setBoolean('PuppetStanding', true);
  nbt.setBoolean('PuppetAttacking', true);
  nbt.setBoolean('PuppetMoving', true);
  nbt.setBoolean('PuppetAnimate', false);
  nbt.merge(API.stringToNbt('{PuppetStanding:1b,PuppetAttacking:1b,PuppetMoving:1b,PuppetAnimate:0b}'));
  npc.setEntityNbt(nbt);
  var job = npc.getJob();
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
  var job = npc.getJob();
  if (!job || job.getType() !== 9 || !job.getPart) {
    return;
  }
  disableUnusedPuppetParts(job, 1);
  var part = job.getPart(1);
  if (!part) {
    return;
  }
  setPartDisabled(part, false);
  var rx = Math.round(x);
  var ry = Math.round(y);
  var rz = Math.round(z);
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
  var job = npc.getJob();
  if (!job || job.getType() !== 9 || !job.getPart) {
    return;
  }
  var part = job.getPart(2);
  if (!part) {
    return;
  }
  setPartDisabled(part, !enabled);
  if (!enabled) {
    part.setRotation(PUPPET_REST, PUPPET_REST, PUPPET_REST);
  }
}
function setRightArm(npc, x, y, z) {
  var job = npc.getJob();
  if (!job || job.getType() !== 9 || !job.getPart) {
    return;
  }
  disableUnusedPuppetParts(job, 2);
  var part = job.getPart(2);
  if (!part) {
    return;
  }
  setPartDisabled(part, false);
  var rx = Math.round(x);
  var ry = Math.round(y);
  var rz = Math.round(z);
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
  var t = System.nanoTime() / 1e9;
  setRightArm(npc, 75 + Math.sin(t * 16) * 22, PUPPET_REST + Math.sin(t * 21) * 10, PUPPET_REST + 12 + Math.cos(t * 18) * 20);
}
function leftArmAim(npc, wx, wy, wz) {
  var yaw = npc.getRotation() * Math.PI / 180;
  var lx = wx - npc.getX();
  var ly = wy - (npc.getY() + npc.getEyeHeight() * 0.35);
  var lz = wz - npc.getZ();
  var rx = lx * Math.cos(-yaw) - lz * Math.sin(-yaw);
  var rz = lx * Math.sin(-yaw) + lz * Math.cos(-yaw);
  var horiz = Math.sqrt(rx * rx + rz * rz);
  var pitch = Math.atan2(ly, horiz) * 180 / Math.PI;
  var sweep = Math.atan2(rx, rz) * 180 / Math.PI;
  return {
    x: 90 - pitch,
    y: PUPPET_REST + sweep * 0.2,
    z: PUPPET_REST + 10
  };
}
function pointLeftArmAt(npc, wx, wy, wz) {
  var aim = leftArmAim(npc, wx, wy, wz);
  setLeftArm(npc, aim.x, aim.y, aim.z);
}
function yawToward(from, to) {
  var dx = to.getX() - from.getX();
  var dz = to.getZ() - from.getZ();
  return Math.atan2(-dx, dz) * 180 / Math.PI;
}
function holdOrChase(npc, target) {
  var dist = distanceTo(npc, target);
  npc.setRotation(yawToward(npc, target));
  if (npc.getTempdata().get('duelNoDamage')) {
    var ai = npc.getAi();
    ai.setReturnsHome(false);
    ai.setLeapAtTarget(false);
    ai.setRetaliateType(3);
  }
  if (dist < MIN_RANGE) {
    npc.getAi().setWalkingSpeed(WALK_SPEED);
    npc.clearNavigation();
    npc.setMoveForward(-1);
    var dx = npc.getX() - target.getX();
    var dz = npc.getZ() - target.getZ();
    var len = Math.sqrt(dx * dx + dz * dz) || 1;
    npc.setMotionX(dx / len * 0.25);
    npc.setMotionZ(dz / len * 0.25);
    return;
  }
  if (dist <= ATTACK_RANGE) {
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
  var slots = syncOrbitSlots(npc);
  var time = nowSec(npc);
  var best = -1;
  var bestDot = -2;
  var yaw = npc.getRotation() * Math.PI / 180;
  var fx = -Math.sin(yaw);
  var fz = Math.cos(yaw);
  for (var i = 0; i < slots.length; i++) {
    if (!slots[i]) {
      continue;
    }
    var pose = orbitWorldOffset(npc, i, time);
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
  var from = orbitWorldOffset(npc, best, time);
  slots[best] = null;
  setSlots(npc, slots);
  return {
    uuid: uuid,
    from: from
  };
}
function finishRefill(npc) {
  npc.getTempdata().remove(REFILL_KEY);
  resetRightArm(npc);
}
function beginJoin(npc, refill) {
  var dest = overheadPoint(npc, BLOCK_SCALE);
  var uuid = spawnOrbitBlock(npc.getWorld(), npc.getX(), npc.getY(), npc.getZ(), npc, getElement(npc));
  refill.joining = {
    uuid: uuid,
    slot: refill.nextSlot,
    start: System.nanoTime(),
    fromX: dest.x - dest.scale / 2,
    fromY: dest.y - dest.scale / 2,
    fromZ: dest.z - dest.scale / 2
  };
}
function startRefill(npc) {
  if (npc.getTempdata().get(REFILL_KEY) || npc.getTempdata().get(CAST_KEY)) {
    return;
  }
  var next = getElement(npc) === ELEMENT_ICE ? ELEMENT_MAGMA : ELEMENT_ICE;
  setElement(npc, next);
  resetLeftArm(npc);
  var refill = {
    nextSlot: 0,
    joining: null
  };
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
  var refill = npc.getTempdata().get(REFILL_KEY);
  if (!refill) {
    return;
  }
  wiggleStaff(npc);
  var world = npc.getWorld();
  if (!refill.joining) {
    if (refill.nextSlot >= ORBIT_COUNT) {
      finishRefill(npc);
      return;
    }
    beginJoin(npc, refill);
    npc.getTempdata().put(REFILL_KEY, refill);
    return;
  }
  var ent = world.getEntity(refill.joining.uuid);
  if (!ent || !ent.isAlive()) {
    refill.joining = null;
    npc.getTempdata().put(REFILL_KEY, refill);
    return;
  }
  var p = easeInOut((System.nanoTime() - refill.joining.start) / 1e9 / REFILL_JOIN_SEC);
  var dest = orbitWorldOffset(npc, refill.joining.slot, nowSec(npc));
  applyDisplayPose(ent, lerp(refill.joining.fromX, dest.x, p), lerp(refill.joining.fromY, dest.y, p), lerp(refill.joining.fromZ, dest.z, p), dest.scale);
  ent.setPosition(npc.getX(), npc.getY(), npc.getZ());
  if ((System.nanoTime() - refill.joining.start) / 1e9 < REFILL_JOIN_SEC) {
    npc.getTempdata().put(REFILL_KEY, refill);
    return;
  }
  var slots = syncOrbitSlots(npc);
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
  var last = npc.getTempdata().get('castReadyAt') || 0;
  if (System.nanoTime() < last) {
    return false;
  }
  if (distanceTo(npc, target) > ATTACK_RANGE + 1) {
    return false;
  }
  var taken = takeOrbitAmmo(npc);
  if (!taken) {
    return false;
  }
  var world = npc.getWorld();
  var ent = world.getEntity(taken.uuid);
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
    last: System.nanoTime()
  });
  return true;
}
function burstImpact(world, x, y, z, element) {
  var particle = trailParticle(element);
  for (var i = 0; i < 90; i++) {
    var ox = (Math.random() - 0.5) * 2.4;
    var oy = Math.random() * 1.8;
    var oz = (Math.random() - 0.5) * 2.4;
    world.spawnParticle(particle, x + ox, y + oy, z + oz, ox * 0.25, 0.18, oz * 0.25, 0.12, 2);
  }
  for (var _i3 = 0; _i3 < 8; _i3++) {
    world.spawnParticle(particle, x, y + 0.2, z, 0.15, 0.35, 0.15, 0.2, 12);
  }
}
function impactShot(npc, ent, x, y, z, element) {
  var world = npc.getWorld();
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
  var block = world.getBlock(Math.floor(x), Math.floor(y), Math.floor(z));
  return block && !block.isAir();
}
function hitLiving(world, npc, x, y, z) {
  var nearby = world.getNearbyEntities(Math.floor(x), Math.floor(y), Math.floor(z), 2, 5);
  for (var i = 0; i < nearby.length; i++) {
    var ent = nearby[i];
    if (!ent || ent.getUUID() === npc.getUUID() || !ent.isAlive()) {
      continue;
    }
    if (ent.hasTag && (ent.hasTag(orbitTag(npc)) || ent.hasTag(shotTag(npc)))) {
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
function updateCast(npc) {
  var cast = npc.getTempdata().get(CAST_KEY);
  if (!cast) {
    resetLeftArm(npc);
    return;
  }
  var world = npc.getWorld();
  var ent = world.getEntity(cast.uuid);
  if (!ent || !ent.isAlive()) {
    npc.getTempdata().remove(CAST_KEY);
    resetLeftArm(npc);
    return;
  }
  var target = world.getEntity(cast.targetUuid);
  var now = System.nanoTime();
  var dt = Math.min(0.08, (now - (cast.last || now)) / 1e9);
  cast.last = now;
  if (cast.phase === 'lift') {
    var p = easeInOut((now - cast.start) / 1e9 / LIFT_SEC);
    var dest = overheadPoint(npc, THROW_SCALE);
    var tx = lerp(cast.fromX, dest.x - dest.scale / 2, p);
    var ty = lerp(cast.fromY, dest.y - dest.scale / 2, p);
    var tz = lerp(cast.fromZ, dest.z - dest.scale / 2, p);
    var scale = lerp(cast.fromScale, dest.scale, p);
    applyDisplayPose(ent, tx, ty, tz, scale);
    ent.setPosition(npc.getX(), npc.getY(), npc.getZ());
    var endAim = leftArmAim(npc, npc.getX() + dest.x, npc.getY() + dest.y, npc.getZ() + dest.z);
    setLeftArm(npc, lerp(ARM_LIFT_START.x, endAim.x, p), lerp(ARM_LIFT_START.y, endAim.y, p), lerp(ARM_LIFT_START.z, endAim.z, p));
    if ((now - cast.start) / 1e9 >= LIFT_SEC) {
      cast.phase = 'hold';
      cast.holdStart = now;
      cast.scale = scale;
    }
    npc.getTempdata().put(CAST_KEY, cast);
    return;
  }
  if (cast.phase === 'hold') {
    var _dest = overheadPoint(npc, THROW_SCALE);
    var _tx = _dest.x - _dest.scale / 2;
    var _ty = _dest.y - _dest.scale / 2;
    var _tz = _dest.z - _dest.scale / 2;
    applyDisplayPose(ent, _tx, _ty, _tz, _dest.scale);
    ent.setPosition(npc.getX(), npc.getY(), npc.getZ());
    pointLeftArmAt(npc, npc.getX() + _dest.x, npc.getY() + _dest.y, npc.getZ() + _dest.z);
    if ((now - (cast.holdStart || now)) / 1e9 >= HOLD_SEC) {
      var wx = npc.getX() + _dest.x;
      var wy = npc.getY() + _dest.y;
      var wz = npc.getZ() + _dest.z;
      var aimX = npc.getX() - Math.sin(npc.getRotation() * Math.PI / 180) * 8;
      var aimY = wy;
      var aimZ = npc.getZ() + Math.cos(npc.getRotation() * Math.PI / 180) * 8;
      if (target && target.isAlive()) {
        aimX = target.getX();
        aimY = target.getY() + target.getEyeHeight() * 0.6;
        aimZ = target.getZ();
      }
      var dx = aimX - wx;
      var dy = aimY - wy;
      var dz = aimZ - wz;
      var len = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
      cast.phase = 'fly';
      cast.flyStart = now;
      cast.x = wx;
      cast.y = wy;
      cast.z = wz;
      cast.vx = dx / len * THROW_SPEED;
      cast.vy = dy / len * THROW_SPEED + 1.4;
      cast.vz = dz / len * THROW_SPEED;
      cast.scale = _dest.scale;
      applyDisplayPose(ent, -_dest.scale / 2, -_dest.scale / 2, -_dest.scale / 2, _dest.scale, 0);
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
    var _dx = target.getX() - cast.x;
    var _dy = target.getY() + target.getHeight() * 0.45 - cast.y;
    var _dz = target.getZ() - cast.z;
    if (_dx * _dx + _dy * _dy + _dz * _dz < 0.7 * 0.7) {
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
  var target = getCombatTarget(npc);
  if (!target) {
    return;
  }
  if (distanceTo(npc, target) > ATTACK_RANGE) {
    return;
  }
  startCast(npc, target);
}
function orbitJobId(npc) {
  return 'aldric-orbit:' + npc.getUUID();
}
function stopOrbitLoop(npc) {
  unsubscribe(npc.getWorld(), orbitJobId(npc));
  stopThreadsNamed(threadName(npc.getUUID()));
}
function getServer(world) {
  var level = world.getMCLevel();
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
  var start = npc.getTempdata().get(START_KEY);
  if (start) {
    npc.getTempdata().put(START_KEY, start + delta);
  }
  var ready = npc.getTempdata().get('castReadyAt');
  if (ready) {
    npc.getTempdata().put('castReadyAt', ready + delta);
  }
  var cast = npc.getTempdata().get(CAST_KEY);
  if (cast) {
    cast.start = shiftTimer(cast.start, delta);
    cast.last = shiftTimer(cast.last, delta);
    cast.holdStart = shiftTimer(cast.holdStart, delta);
    cast.flyStart = shiftTimer(cast.flyStart, delta);
    npc.getTempdata().put(CAST_KEY, cast);
  }
  var refill = npc.getTempdata().get(REFILL_KEY);
  if (refill && refill.joining) {
    refill.joining.start = shiftTimer(refill.joining.start, delta);
    npc.getTempdata().put(REFILL_KEY, refill);
  }
}
function updateOrbitLoop(npc) {
  var server = getServer(npc.getWorld());
  if (!server) {
    return;
  }
  var tick = serverTickCount(server);
  var now = System.nanoTime();
  var pause = npc.getTempdata().get(PAUSE_KEY) || {
    lastTick: -1,
    lastTickNanos: now,
    pausedSince: 0
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
  if (npc.getTimers().has(ORBIT_TIMER)) {
    npc.getTimers().stop(ORBIT_TIMER);
  }
  npc.getTempdata().put(START_KEY, System.nanoTime());
  npc.getTempdata().remove(PAUSE_KEY);
  subscribe(npc.getWorld(), orbitJobId(npc), npc, ORBIT_PERIOD_MS, updateOrbitLoop);
}
function clearVanillaShots(projectiles) {
  if (!projectiles) {
    return;
  }
  var list = projectiles.toArray ? Java.from(projectiles.toArray()) : Java.from(projectiles);
  for (var i = 0; i < list.length; i++) {
    if (list[i] && list[i].despawn) {
      list[i].despawn();
    }
  }
}
function clearNearbyVanillaShots(npc) {
  var nearby = npc.getWorld().getNearbyEntities(npc.getPos(), ATTACK_RANGE + 16, 7);
  for (var i = 0; i < nearby.length; i++) {
    var ent = nearby[i];
    if (!ent || !ent.despawn) {
      continue;
    }
    if (ent.hasTag && (ent.hasTag(ORBIT_TAG) || ent.hasTag(SHOT_TAG))) {
      continue;
    }
    ent.despawn();
  }
}
function init(e) {
  stopOrbitLoop(e.npc);
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
  startOrbitLoop(e.npc);
}
function tick(e) {
  clearNearbyVanillaShots(e.npc);
  var target = getCombatTarget(e.npc);
  if (!target) {
    e.npc.getAi().setWalkingSpeed(WALK_SPEED);
    return;
  }
  holdOrChase(e.npc, target);
}
function targetLost(e) {
  e.npc.getAi().setWalkingSpeed(WALK_SPEED);
}
function rangedAttack(e) {
  try {
    e.setCanceled(true);
  } catch (err) {}
  clearVanillaShots(e.projectiles);
  clearNearbyVanillaShots(e.npc);
}
function meleeAttack(e) {
  e.damage = 0;
}
function damaged(e) {
  if (!e.npc.getTempdata().get('duelNoDamage')) {
    return;
  }
  e.damage = 0;
  try {
    e.setCanceled(true);
  } catch (err) {}
}
function died(e) {
  stopOrbitLoop(e.npc);
  if (e.npc.getTimers().has(ORBIT_TIMER)) {
    e.npc.getTimers().stop(ORBIT_TIMER);
  }
  despawnTagged(e.npc);
  resetArms(e.npc);
}

