import { subscribe, unsubscribe } from '~/lib/fast-tick';

const SPEED = 1;
const DURATION = 6;
const AMPLIFIER = 2;
const RESPAWN_TICKS = 200;
const RANGE = 1.6;
const STEP_MS = 100;

function num(data, key, fallback) {
  const value = data.get(key);
  if (value == null) {
    return fallback;
  }
  const n = Number(value);
  return isNaN(n) ? fallback : n;
}

function crystalOf(npc) {
  const id = npc.getTempdata().get('crystal');
  if (!id) {
    return null;
  }
  const crystal = npc.getWorld().getEntity(String(id));
  if (!crystal || !crystal.isAlive()) {
    return null;
  }
  return crystal;
}

function showCrystal(npc) {
  if (crystalOf(npc)) {
    return;
  }
  const world = npc.getWorld();
  const crystal = world.createEntity('minecraft:end_crystal');
  const nbt = crystal.getEntityNbt();
  nbt.setBoolean('ShowBottom', false);
  nbt.setBoolean('Invulnerable', true);
  crystal.setEntityNbt(nbt);
  crystal.setPosition(npc.getX(), npc.getY(), npc.getZ());
  crystal.spawn();
  npc.getTempdata().put('crystal', crystal.getUUID());
}

function hideCrystal(npc) {
  const crystal = crystalOf(npc);
  if (crystal) {
    crystal.despawn();
  }
  npc.getTempdata().remove('crystal');
}

function stepPad(npc) {
  const data = npc.getTempdata();
  const now = Number(npc.getWorld().getTotalTime());
  const readyAt = num(data, 'readyAt', 0);
  if (now < readyAt) {
    hideCrystal(npc);
    return;
  }
  showCrystal(npc);

  const players = npc.getWorld().getAllPlayers();
  const x = npc.getX();
  const y = npc.getY();
  const z = npc.getZ();
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const dx = x - player.getX();
    const dy = y - player.getY();
    const dz = z - player.getZ();
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

export function init(e) {
  const npc = e.npc;
  const display = npc.getDisplay();
  display.setName('Boost');
  display.setTitle('');
  display.setSize(1);
  display.setShowName(1);
  display.setHasLivingAnimation(false);
  display.setHitboxState(1);
  display.setVisible(1);

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

  const jobId = 'boost-pad:' + npc.getUUID();
  unsubscribe(npc.getWorld(), jobId);
  subscribe(npc.getWorld(), jobId, npc, STEP_MS, stepPad);
}

export function died(e) {
  hideCrystal(e.npc);
  unsubscribe(e.npc.getWorld(), 'boost-pad:' + e.npc.getUUID());
}

export function damaged(e) {
  e.setCanceled(true);
}

export function interact(e) {
  e.setCanceled(true);
}
