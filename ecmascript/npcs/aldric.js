var API = Java.type('noppes.npcs.api.NpcAPI').Instance();
var Display = Java.type('net.minecraft.world.entity.Display');
var Integer = Java.type('java.lang.Integer');
var Thread = Java.type('java.lang.Thread');
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
var ORBIT_COUNT = 8;
var ORBIT_RADIUS = 1.75;
var TICKS_PER_SEC = 20;
var ORBIT_SPEED = 0.18 * TICKS_PER_SEC;
var TILT_MAX = 20 * Math.PI / 180;
var TILT_SPEED = Math.PI * 2 / 110 * TICKS_PER_SEC;
var TILT_AXIS_SPEED = Math.PI * 2 / 180 * TICKS_PER_SEC;
var BLOCK_SCALE = 0.35;
var ORBIT_TAG = 'aldric_orbit';
var ORBIT_TIMER = 10;
var THREAD_KEY = 'orbitThread';
var GEN_KEY = 'orbitGen';
var START_KEY = 'orbitStartNanos';
var THREAD_SLEEP_MS = 20;
function threadName(uuid) {
  return 'aldric-orbit-' + uuid;
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
function spawnOrbitBlock(world, x, y, z, npc) {
  var ent = world.createEntity('minecraft:block_display');
  var extra = API.stringToNbt('{block_state:{Name:"minecraft:magma_block"},interpolation_duration:2,' + 'transformation:{translation:[0f,0f,0f],left_rotation:[0f,0f,0f,1f],' + 'right_rotation:[0f,0f,0f,1f],scale:[' + BLOCK_SCALE + 'f,' + BLOCK_SCALE + 'f,' + BLOCK_SCALE + 'f]}}');
  var nbt = ent.getEntityNbt();
  nbt.merge(extra);
  ent.setEntityNbt(nbt);
  ent.setPosition(x, y, z);
  ent.addTag(ORBIT_TAG);
  ent.addTag(orbitTag(npc));
  ent.spawn();
  return ent.getUUID();
}
function despawnOrbit(npc) {
  var world = npc.getWorld();
  var tag = orbitTag(npc);
  var nearby = world.getNearbyEntities(npc.getPos(), 12, -1);
  for (var i = 0; i < nearby.length; i++) {
    var ent = nearby[i];
    if (ent && ent.hasTag && ent.hasTag(tag)) {
      ent.despawn();
    }
  }
  var uuids = npc.getTempdata().get('orbitUuids') || [];
  for (var _i = 0; _i < uuids.length; _i++) {
    var _ent = world.getEntity(uuids[_i]);
    if (_ent) {
      _ent.despawn();
    }
  }
  npc.getTempdata().put('orbitUuids', []);
}
function getOrbitEntities(npc) {
  var world = npc.getWorld();
  var uuids = npc.getTempdata().get('orbitUuids') || [];
  var kept = [];
  for (var i = 0; i < uuids.length; i++) {
    var ent = world.getEntity(uuids[i]);
    if (ent && ent.isAlive()) {
      kept.push(ent);
    }
  }
  while (kept.length < ORBIT_COUNT) {
    var uuid = spawnOrbitBlock(world, npc.getX(), npc.getY(), npc.getZ(), npc);
    var _ent2 = world.getEntity(uuid);
    if (_ent2) {
      kept.push(_ent2);
    } else {
      break;
    }
  }
  while (kept.length > ORBIT_COUNT) {
    var extra = kept.pop();
    extra.despawn();
  }
  var next = [];
  for (var _i2 = 0; _i2 < kept.length; _i2++) {
    next.push(kept[_i2].getUUID());
  }
  npc.getTempdata().put('orbitUuids', next);
  return kept;
}
function applyOrbitPose(ent, tx, ty, tz) {
  var mc = ent.getMCEntity();
  // m_20088_ = net.minecraft.world.entity.Entity#getEntityData
  var data = mc.m_20088_();
  // m_135381_ = net.minecraft.network.syncher.SynchedEntityData#set
  data.m_135381_(TRANSLATION_ID, new Vector3f(tx, ty, tz));
  data.m_135381_(INTERP_DURATION_ID, Integer.valueOf(2));
  // m_276349_ = net.minecraft.network.syncher.SynchedEntityData#set (force)
  data.m_276349_(INTERP_START_ID, Integer.valueOf(0), true);
}
function updateOrbit(npc) {
  var blocks = getOrbitEntities(npc);
  var startNanos = npc.getTempdata().get(START_KEY) || System.nanoTime();
  var time = (System.nanoTime() - startNanos) / 1e9;
  var spin = time * ORBIT_SPEED;
  var cx = npc.getX();
  var cy = npc.getY();
  var cz = npc.getZ();
  var center = BLOCK_SCALE / 2;
  var eyeY = npc.getEyeHeight() - center;
  var world = npc.getWorld();
  for (var i = 0; i < blocks.length; i++) {
    var angle = spin + Math.PI * 2 * i / ORBIT_COUNT;
    var point = tiltedOrbitPoint(angle, time);
    var tx = point.x - center;
    var ty = eyeY + point.y;
    var tz = point.z - center;
    var ent = blocks[i];
    applyOrbitPose(ent, tx, ty, tz);
    if (Math.abs(ent.getX() - cx) > 0.001 || Math.abs(ent.getY() - cy) > 0.001 || Math.abs(ent.getZ() - cz) > 0.001) {
      ent.setPosition(cx, cy, cz);
    }
    if (Math.floor(time * TICKS_PER_SEC) % 16 === i % 4 * 4) {
      world.spawnParticle('lava', cx + tx + center, cy + ty + center, cz + tz + center, 0, 0.02, 0, 0, 1);
    }
  }
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
  var name = threadName(uuid);
  var threads = Java.from(Thread.getAllStackTraces().keySet().toArray());
  for (var i = 0; i < threads.length; i++) {
    var thread = threads[i];
    if (thread && thread.getName() === name && thread !== Thread.currentThread()) {
      interruptThread(thread);
    }
  }
}
function stopOrbitThread(npc) {
  var stored = npc.getTempdata().get(THREAD_KEY);
  interruptThread(stored);
  npc.getTempdata().remove(THREAD_KEY);
  stopNamedOrbitThreads(npc.getUUID());
}
function getServer(world) {
  var level = world.getMCLevel();
  // m_7654_ = net.minecraft.server.level.ServerLevel#getServer
  return level.m_7654_();
}
function startOrbitThread(npc) {
  stopOrbitThread(npc);
  if (npc.getTimers().has(ORBIT_TIMER)) {
    npc.getTimers().stop(ORBIT_TIMER);
  }
  var uuid = npc.getUUID();
  var world = npc.getWorld();
  var server = getServer(world);
  var gen = (npc.getTempdata().get(GEN_KEY) || 0) + 1;
  npc.getTempdata().put(GEN_KEY, gen);
  npc.getTempdata().put(START_KEY, System.nanoTime());
  world.getTempdata().remove('orbitThreadError');
  var Runnable = Java.type('java.lang.Runnable');
  var thread = new Thread(new Runnable({
    run: function run() {
      try {
        while (!Thread.currentThread().isInterrupted()) {
          if (!server) {
            break;
          }
          server.execute(function () {
            var current = world.getEntity(uuid);
            if (!current || !current.isAlive() || current.getTempdata().get(GEN_KEY) !== gen) {
              return;
            }
            updateOrbit(current);
          });
          Thread.sleep(THREAD_SLEEP_MS);
        }
      } catch (err) {
        if (String(err).indexOf('InterruptedException') === -1) {
          world.getTempdata().put('orbitThreadError', String(err));
        }
      }
    }
  }));
  thread.setName(threadName(uuid));
  thread.setDaemon(true);
  npc.getTempdata().put(THREAD_KEY, thread);
  thread.start();
}
function init(e) {
  stopOrbitThread(e.npc);
  despawnOrbit(e.npc);
  e.npc.getTempdata().put('orbitUuids', []);
  startOrbitThread(e.npc);
}
function died(e) {
  stopOrbitThread(e.npc);
  if (e.npc.getTimers().has(ORBIT_TIMER)) {
    e.npc.getTimers().stop(ORBIT_TIMER);
  }
  despawnOrbit(e.npc);
}

