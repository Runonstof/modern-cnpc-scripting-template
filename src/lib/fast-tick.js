const Thread = Java.type('java.lang.Thread');
const System = Java.type('java.lang.System');
const Runnable = Java.type('java.lang.Runnable');

const THREAD_NAME = 'npc-fast-tick';
const JOBS_KEY = 'fastTickJobs';
const THREAD_KEY = 'fastTickThread';
const ERROR_KEY = 'fastTickError';
const SLEEP_MS = 20;

function interruptThread(thread) {
  if (!thread) {
    return;
  }
  try {
    thread.interrupt();
  } catch (err) {}
}

export function stopThreadsNamed(name) {
  const threads = Java.from(Thread.getAllStackTraces().keySet().toArray());
  for (let i = 0; i < threads.length; i++) {
    const thread = threads[i];
    if (thread && thread.getName() === name && thread !== Thread.currentThread()) {
      interruptThread(thread);
    }
  }
}

function getJobs(world) {
  return world.getTempdata().get(JOBS_KEY) || [];
}

function setJobs(world, jobs) {
  world.getTempdata().put(JOBS_KEY, jobs);
}

function getServer(world) {
  const level = world.getMCLevel();
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
    const found = world.getEntity(job.uuid);
    if (found && found.isAlive()) {
      return found;
    }
  }
  return null;
}

function runDueJobs(world, dt) {
  const jobs = getJobs(world);
  const kept = [];
  const now = System.nanoTime();
  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    const entity = resolveJobEntity(world, job);
    if (!entity || !entity.isAlive()) {
      if (job.seenAlive) {
        continue;
      }
      kept.push(job);
      continue;
    }
    job.entity = entity;
    job.seenAlive = true;
    const periodNs = (job.periodMs || SLEEP_MS) * 1e6;
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
  const server = getServer(world);
  const thread = new Thread(
    new Runnable({
      run: function () {
        try {
          let lastNanos = System.nanoTime();
          while (!Thread.currentThread().isInterrupted()) {
            if (!server) {
              break;
            }
            const now = System.nanoTime();
            const dt = Math.max(0.001, Math.min(0.05, (now - lastNanos) / 1e9));
            lastNanos = now;
            server.execute(function () {
              runDueJobs(world, dt);
            });
            Thread.sleep(SLEEP_MS);
          }
        } catch (err) {
          if (String(err).indexOf('InterruptedException') === -1) {
            world.getTempdata().put(ERROR_KEY, String(err));
          }
        }
      },
    })
  );
  thread.setName(THREAD_NAME);
  thread.setDaemon(true);
  world.getTempdata().put(THREAD_KEY, thread);
  thread.start();
}

export function stopScheduler(world) {
  const stored = world.getTempdata().get(THREAD_KEY);
  interruptThread(stored);
  world.getTempdata().remove(THREAD_KEY);
  stopThreadsNamed(THREAD_NAME);
}

function ensureScheduler(world) {
  const stored = world.getTempdata().get(THREAD_KEY);
  if (isThreadAlive(stored)) {
    return;
  }
  stopScheduler(world);
  startScheduler(world);
}

export function unsubscribe(world, id) {
  const jobs = getJobs(world);
  const kept = [];
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].id !== id) {
      kept.push(jobs[i]);
    }
  }
  setJobs(world, kept);
  if (!kept.length) {
    stopScheduler(world);
  }
}

export function subscribe(world, id, entityOrUuid, periodMs, onTick) {
  unsubscribe(world, id);
  let entity = null;
  let uuid = entityOrUuid;
  if (entityOrUuid && entityOrUuid.getUUID) {
    entity = entityOrUuid;
    uuid = entityOrUuid.getUUID();
  }
  const jobs = getJobs(world);
  jobs.push({
    id: id,
    uuid: uuid,
    entity: entity,
    periodMs: periodMs || SLEEP_MS,
    lastRun: 0,
    onTick: onTick,
  });
  setJobs(world, jobs);
  ensureScheduler(world);
}
