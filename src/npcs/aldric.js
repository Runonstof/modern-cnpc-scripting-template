const API = Java.type('noppes.npcs.api.NpcAPI').Instance();
const Display = Java.type('net.minecraft.world.entity.Display');
const Integer = Java.type('java.lang.Integer');
const Thread = Java.type('java.lang.Thread');
const Vector3f = Java.type('org.joml.Vector3f');
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

const ORBIT_COUNT = 8;
const ORBIT_RADIUS = 1.75;
const TICKS_PER_SEC = 20;
const ORBIT_SPEED = 0.18 * TICKS_PER_SEC;
const TILT_MAX = (20 * Math.PI) / 180;
const TILT_SPEED = ((Math.PI * 2) / 110) * TICKS_PER_SEC;
const TILT_AXIS_SPEED = ((Math.PI * 2) / 180) * TICKS_PER_SEC;
const BLOCK_SCALE = 0.35;
const ORBIT_TAG = 'aldric_orbit';
const ORBIT_TIMER = 10;
const THREAD_KEY = 'orbitThread';
const GEN_KEY = 'orbitGen';
const START_KEY = 'orbitStartNanos';
const THREAD_SLEEP_MS = 20;

function threadName(uuid) {
  return 'aldric-orbit-' + uuid;
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

function spawnOrbitBlock(world, x, y, z, npc) {
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
  ent.addTag(orbitTag(npc));
  ent.spawn();
  return ent.getUUID();
}

function despawnOrbit(npc) {
  const world = npc.getWorld();
  const tag = orbitTag(npc);
  const nearby = world.getNearbyEntities(npc.getPos(), 12, -1);
  for (let i = 0; i < nearby.length; i++) {
    const ent = nearby[i];
    if (ent && ent.hasTag && ent.hasTag(tag)) {
      ent.despawn();
    }
  }
  const uuids = npc.getTempdata().get('orbitUuids') || [];
  for (let i = 0; i < uuids.length; i++) {
    const ent = world.getEntity(uuids[i]);
    if (ent) {
      ent.despawn();
    }
  }
  npc.getTempdata().put('orbitUuids', []);
}

function getOrbitEntities(npc) {
  const world = npc.getWorld();
  const uuids = npc.getTempdata().get('orbitUuids') || [];
  const kept = [];
  for (let i = 0; i < uuids.length; i++) {
    const ent = world.getEntity(uuids[i]);
    if (ent && ent.isAlive()) {
      kept.push(ent);
    }
  }
  while (kept.length < ORBIT_COUNT) {
    const uuid = spawnOrbitBlock(world, npc.getX(), npc.getY(), npc.getZ(), npc);
    const ent = world.getEntity(uuid);
    if (ent) {
      kept.push(ent);
    } else {
      break;
    }
  }
  while (kept.length > ORBIT_COUNT) {
    const extra = kept.pop();
    extra.despawn();
  }
  const next = [];
  for (let i = 0; i < kept.length; i++) {
    next.push(kept[i].getUUID());
  }
  npc.getTempdata().put('orbitUuids', next);
  return kept;
}

function applyOrbitPose(ent, tx, ty, tz) {
  const mc = ent.getMCEntity();
  // m_20088_ = net.minecraft.world.entity.Entity#getEntityData
  const data = mc.m_20088_();
  // m_135381_ = net.minecraft.network.syncher.SynchedEntityData#set
  data.m_135381_(TRANSLATION_ID, new Vector3f(tx, ty, tz));
  data.m_135381_(INTERP_DURATION_ID, Integer.valueOf(2));
  // m_276349_ = net.minecraft.network.syncher.SynchedEntityData#set (force)
  data.m_276349_(INTERP_START_ID, Integer.valueOf(0), true);
}

function updateOrbit(npc) {
  const blocks = getOrbitEntities(npc);
  const startNanos = npc.getTempdata().get(START_KEY) || System.nanoTime();
  const time = (System.nanoTime() - startNanos) / 1e9;
  const spin = time * ORBIT_SPEED;
  const cx = npc.getX();
  const cy = npc.getY();
  const cz = npc.getZ();
  const center = BLOCK_SCALE / 2;
  const eyeY = npc.getEyeHeight() - center;
  const world = npc.getWorld();

  for (let i = 0; i < blocks.length; i++) {
    const angle = spin + (Math.PI * 2 * i) / ORBIT_COUNT;
    const point = tiltedOrbitPoint(angle, time);
    const tx = point.x - center;
    const ty = eyeY + point.y;
    const tz = point.z - center;
    const ent = blocks[i];
    applyOrbitPose(ent, tx, ty, tz);
    if (Math.abs(ent.getX() - cx) > 0.001 || Math.abs(ent.getY() - cy) > 0.001 || Math.abs(ent.getZ() - cz) > 0.001) {
      ent.setPosition(cx, cy, cz);
    }
    if (Math.floor(time * TICKS_PER_SEC) % 16 === (i % 4) * 4) {
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
  const name = threadName(uuid);
  const threads = Java.from(Thread.getAllStackTraces().keySet().toArray());
  for (let i = 0; i < threads.length; i++) {
    const thread = threads[i];
    if (thread && thread.getName() === name && thread !== Thread.currentThread()) {
      interruptThread(thread);
    }
  }
}

function stopOrbitThread(npc) {
  const stored = npc.getTempdata().get(THREAD_KEY);
  interruptThread(stored);
  npc.getTempdata().remove(THREAD_KEY);
  stopNamedOrbitThreads(npc.getUUID());
}

function getServer(world) {
  const level = world.getMCLevel();
  // m_7654_ = net.minecraft.server.level.ServerLevel#getServer
  return level.m_7654_();
}

function startOrbitThread(npc) {
  stopOrbitThread(npc);
  if (npc.getTimers().has(ORBIT_TIMER)) {
    npc.getTimers().stop(ORBIT_TIMER);
  }

  const uuid = npc.getUUID();
  const world = npc.getWorld();
  const server = getServer(world);
  const gen = (npc.getTempdata().get(GEN_KEY) || 0) + 1;
  npc.getTempdata().put(GEN_KEY, gen);
  npc.getTempdata().put(START_KEY, System.nanoTime());
  world.getTempdata().remove('orbitThreadError');

  const Runnable = Java.type('java.lang.Runnable');
  const thread = new Thread(
    new Runnable({
      run: function () {
        try {
          while (!Thread.currentThread().isInterrupted()) {
            if (!server) {
              break;
            }
            server.execute(function () {
              const current = world.getEntity(uuid);
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
      },
    })
  );
  thread.setName(threadName(uuid));
  thread.setDaemon(true);
  npc.getTempdata().put(THREAD_KEY, thread);
  thread.start();
}

export function init(e) {
  stopOrbitThread(e.npc);
  despawnOrbit(e.npc);
  e.npc.getTempdata().put('orbitUuids', []);
  startOrbitThread(e.npc);
}

export function died(e) {
  stopOrbitThread(e.npc);
  if (e.npc.getTimers().has(ORBIT_TIMER)) {
    e.npc.getTimers().stop(ORBIT_TIMER);
  }
  despawnOrbit(e.npc);
}
