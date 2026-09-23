import { subscribe, unsubscribe } from '~/lib/fast-tick';

const GOAL_EAST = -158;
const GOAL_WEST = -244;
const GOAL_Z0 = 154;
const GOAL_Z1 = 162;
const CENTER_X = -200.5;
const CENTER_Y = 56.05;
const CENTER_Z = 158.5;

const STEP_MS = 50;
const GRAVITY = 0.035;
const REST = 0.62;
const GROUND_REST = 0.28;
const FRICTION = 0.9;
const AIR_DRAG = 0.995;
const RADIUS = 0.62;
const HEIGHT = 1.25;
const MAX_STEP = 0.3;
const STOP = 0.015;
const MAX_SPEED = 1.15;

function num(data, key, fallback) {
  const value = data.get(key);
  if (value == null) {
    return fallback;
  }
  const n = Number(value);
  return isNaN(n) ? fallback : n;
}

function isSolid(world, x, y, z) {
  const block = world.getBlock(x, y, z);
  if (!block || block.isAir()) {
    return false;
  }
  return true;
}

function overlaps(world, x, y, z) {
  const minX = Math.floor(x - RADIUS);
  const maxX = Math.floor(x + RADIUS);
  const minY = Math.floor(y + 0.02);
  const maxY = Math.floor(y + HEIGHT - 0.02);
  const minZ = Math.floor(z - RADIUS);
  const maxZ = Math.floor(z + RADIUS);
  for (let bx = minX; bx <= maxX; bx++) {
    for (let by = minY; by <= maxY; by++) {
      for (let bz = minZ; bz <= maxZ; bz++) {
        if (isSolid(world, bx, by, bz)) {
          return true;
        }
      }
    }
  }
  return false;
}

const WALL = 0.85;
const MOUTH_TOP = 64;

function nudgeOut(world, x, y, z, ax, ay, az) {
  for (let n = 0; n < 10; n++) {
    if (!overlaps(world, x, y, z)) {
      return { x: x, y: y, z: z };
    }
    x += ax;
    y += ay;
    z += az;
  }
  return { x: x, y: y, z: z };
}

function kick(npc, entity) {
  const data = npc.getTempdata();
  const now = npc.getWorld().getTotalTime();
  if (now - num(data, 'kickAt', 0) < 5) {
    return;
  }
  data.put('kickAt', now);

  const dx = npc.getX() - entity.getX();
  const dz = npc.getZ() - entity.getZ();
  const len = Math.sqrt(dx * dx + dz * dz) || 1;
  const yaw = entity.getRotation() * Math.PI / 180;
  const lookX = -Math.sin(yaw);
  const lookZ = Math.cos(yaw);
  const dirX = dx / len * 0.35 + lookX * 0.65;
  const dirZ = dz / len * 0.35 + lookZ * 0.65;
  const dirLen = Math.sqrt(dirX * dirX + dirZ * dirZ) || 1;
  const mx = entity.getMotionX();
  const mz = entity.getMotionZ();
  const rise = Math.max(0, entity.getMotionY());
  const lift = Math.min(1, Math.max(0, (rise - 0.18) / 0.24));
  let power = 0.32 + Math.sqrt(mx * mx + mz * mz) * 1.6;
  if (entity.isSprinting && entity.isSprinting()) {
    power *= 1.35;
  }
  const forward = power * (1 - lift * 0.65);
  let vx = num(data, 'vx', 0) + (dirX / dirLen) * forward;
  let vz = num(data, 'vz', 0) + (dirZ / dirLen) * forward;
  const groundedPop = 0.06 + power * 0.05;
  const jumpPop = 0.22 + power * 0.7;
  let vy = Math.max(num(data, 'vy', 0), groundedPop * (1 - lift) + jumpPop * lift);
  const hSpeed = Math.sqrt(vx * vx + vz * vz);
  if (hSpeed > MAX_SPEED) {
    const scale = MAX_SPEED / hSpeed;
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
  const data = npc.getTempdata();
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
  const world = npc.getWorld();
  const x = npc.getX();
  const y = npc.getY() + 0.6;
  const z = npc.getZ();
  world.spawnParticle('explosion_emitter', x, y, z, 0, 0, 0, 0, 1);
  world.spawnParticle('explosion', x, y, z, 0.8, 0.4, 0.8, 0.08, 12);
  world.spawnParticle('firework', x, y, z, 1.1, 0.9, 1.1, 0.35, 90);
  world.spawnParticle('totem_of_undying', x, y, z, 0.9, 1, 0.9, 0.45, 70);
  world.spawnParticle('flash', x, y, z, 0, 0, 0, 0, 4);
  const pos = npc.getPos();
  world.playSoundAt(pos, 'minecraft:entity.generic.explode', 8, 0.6);
  world.playSoundAt(pos, 'minecraft:entity.firework_rocket.large_blast', 8, 0.5);
  world.playSoundAt(pos, 'minecraft:entity.ender_dragon.growl', 4, 1.5);
  const players = world.getAllPlayers();
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const dx = player.getX() - x;
    const dz = player.getZ() - z;
    const dist = Math.sqrt(dx * dx + dz * dz) || 0.5;
    if (dist > 28) {
      continue;
    }
    const force = 1.6 * (1 - dist / 32);
    player.setMotionX((dx / dist) * force);
    player.setMotionZ((dz / dist) * force);
    player.setMotionY(0.85 + force * 0.35);
  }
}

function score(npc, team) {
  const stored = npc.getWorld().getStoreddata();
  const key = team === 1 ? 'footballScore1' : 'footballScore2';
  const next = num(stored, key, 0) + 1;
  stored.put(key, next);
  const s1 = num(stored, 'footballScore1', 0);
  const s2 = num(stored, 'footballScore2', 0);
  celebrate(npc);
  resetBall(npc, 'Team ' + team + ' scores!  ' + s1 + ' - ' + s2);
}

export function init(e) {
  const npc = e.npc;
  const display = npc.getDisplay();
  display.setName('Ball');
  display.setTitle('');
  display.setModel('minecraft:slime');
  display.setSize(12);
  display.setShowName(1);
  display.setHasLivingAnimation(false);
  display.setTint(0xffffff);
  display.setHitboxState(0);

  const ai = npc.getAi();
  ai.setMovingType(0);
  ai.setRetaliateType(3);
  ai.setReturnsHome(false);
  ai.setStandingType(1);
  ai.setSheltersFrom(2);

  const stats = npc.getStats();
  stats.setMaxHealth(1000);
  npc.setHealth(1000);
  stats.setAggroRange(0);
  stats.setImmune(1, true);
  stats.setResistance(0, 2);
  stats.setResistance(3, 2);
  stats.setRespawnType(3);

  const nbt = npc.getEntityNbt();
  nbt.setBoolean('NoGravity', true);
  npc.setEntityNbt(nbt);

  npc.setHome(Math.floor(CENTER_X), Math.floor(CENTER_Y), Math.floor(CENTER_Z));
  const jobId = 'football-ball:' + npc.getUUID();
  unsubscribe(npc.getWorld(), jobId);
  subscribe(npc.getWorld(), jobId, npc, STEP_MS, stepBall);
  const data = npc.getTempdata();
  if (data.get('vx') == null) {
    data.put('vx', 0);
    data.put('vy', 0);
    data.put('vz', 0);
  }
}

export function collide(e) {
  const entity = e.entity;
  if (!entity || entity.getUUID() === e.npc.getUUID()) {
    return;
  }
  const typeName = String(entity.getTypeName());
  if (typeName.indexOf('player') === -1) {
    return;
  }
  kick(e.npc, entity);
}

export function damaged(e) {
  e.setCanceled(true);
  if (e.source) {
    kick(e.npc, e.source);
  }
}

function kickNearbyPlayers(npc) {
  const players = npc.getWorld().getAllPlayers();
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const dx = npc.getX() - player.getX();
    const dy = npc.getY() - player.getY();
    const dz = npc.getZ() - player.getZ();
    if (dy < -1.5 || dy > 2.2) {
      continue;
    }
    if (dx * dx + dz * dz > 1.8 * 1.8) {
      continue;
    }
    kick(npc, player);
  }
}

export function died(e) {
  unsubscribe(e.npc.getWorld(), 'football-ball:' + e.npc.getUUID());
}

function stepBall(npc) {
  kickNearbyPlayers(npc);
  const world = npc.getWorld();
  const data = npc.getTempdata();
  let vx = num(data, 'vx', 0);
  let vy = num(data, 'vy', 0);
  let vz = num(data, 'vz', 0);

  vy -= GRAVITY;

  const fastest = Math.max(Math.abs(vx), Math.abs(vy), Math.abs(vz));
  const steps = Math.max(1, Math.ceil(fastest / MAX_STEP));
  const sx = vx / steps;
  const sy = vy / steps;
  const sz = vz / steps;

  let x = npc.getX();
  let y = npc.getY();
  let z = npc.getZ();
  let onGround = false;

  for (let i = 0; i < steps; i++) {
    const tryX = x + sx;
    if (overlaps(world, tryX, y, z)) {
      vx = -vx * WALL;
      const freed = nudgeOut(world, x, y, z, sx > 0 ? -0.12 : 0.12, 0, 0);
      x = freed.x;
      y = freed.y;
      z = freed.z;
      break;
    }
    x = tryX;

    const tryZ = z + sz;
    if (overlaps(world, x, y, tryZ)) {
      vz = -vz * WALL;
      const freed = nudgeOut(world, x, y, z, 0, 0, sz > 0 ? -0.12 : 0.12);
      x = freed.x;
      y = freed.y;
      z = freed.z;
      break;
    }
    z = tryZ;

    const tryY = y + sy;
    if (overlaps(world, x, tryY, z)) {
      if (vy < 0) {
        onGround = true;
        vy = Math.abs(vy) < 0.08 ? 0 : -vy * GROUND_REST;
        const freed = nudgeOut(world, x, y, z, 0, 0.08, 0);
        x = freed.x;
        y = freed.y;
        z = freed.z;
      } else {
        vy = -vy * WALL;
        const freed = nudgeOut(world, x, y, z, 0, -0.08, 0);
        x = freed.x;
        y = freed.y;
        z = freed.z;
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
    const throughMouth = y < MOUTH_TOP - 0.15 && z >= GOAL_Z0 && z <= GOAL_Z1;
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
