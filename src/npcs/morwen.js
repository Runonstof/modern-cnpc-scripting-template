import { dd } from '~/lib/dump';

dd('hello');

const API = Java.type('noppes.npcs.api.NpcAPI').Instance();

const WALK_SPEED = 4;
const SHOOT_RANGE = 16;
const HOLD_MIN = 8;
const SUMMON_TIMER = 1;
const CHARGE_TIMER = 2;
const SUMMON_INTERVAL_TICKS = 100;
const CHARGE_INTERVAL_TICKS = 400;
const MINION_COUNT = 2;
const MINION_RADIUS = 2;
const CLONE_TAB = 0;
const CLONE_NAME = 'Witch Minion';

function distanceTo(a, b) {
  const dx = a.getX() - b.getX();
  const dy = a.getY() - b.getY();
  const dz = a.getZ() - b.getZ();
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function getCombatTarget(npc) {
  if (!npc.isAttacking()) {
    return null;
  }
  const target = npc.getAttackTarget();
  if (!target || !target.isAlive()) {
    return null;
  }
  return target;
}

function getMinionUuids(npc) {
  return npc.getTempdata().get('minionUuids') || [];
}

function setMinionUuids(npc, uuids) {
  npc.getTempdata().put('minionUuids', uuids);
}

function pruneMinions(npc) {
  const world = npc.getWorld();
  const kept = [];
  const uuids = getMinionUuids(npc);
  for (let i = 0; i < uuids.length; i++) {
    const minion = world.getEntity(uuids[i]);
    if (minion && minion.isAlive()) {
      kept.push(uuids[i]);
    }
  }
  setMinionUuids(npc, kept);
  return kept;
}

function retargetMinions(npc, target) {
  const world = npc.getWorld();
  const uuids = pruneMinions(npc);
  for (let i = 0; i < uuids.length; i++) {
    const minion = world.getEntity(uuids[i]);
    if (minion && minion.setAttackTarget) {
      minion.setAttackTarget(target);
    }
  }
}

function spawnMinions(npc, target) {
  const world = npc.getWorld();
  const clones = API.getClones();
  const uuids = pruneMinions(npc);
  const cx = npc.getX();
  const cy = npc.getY();
  const cz = npc.getZ();
  const faction = npc.getFaction();

  for (let i = 0; i < MINION_COUNT; i++) {
    const angle = (Math.PI * 2 * i) / MINION_COUNT + Math.random();
    const x = cx + Math.cos(angle) * MINION_RADIUS;
    const z = cz + Math.sin(angle) * MINION_RADIUS;
    const minion = clones.spawn(x, cy, z, CLONE_TAB, CLONE_NAME, world);
    if (!minion) {
      continue;
    }
    minion.setPosition(x, cy, z);
    minion.setHome(Math.floor(x), Math.floor(cy), Math.floor(z));
    minion.getDisplay().setModel(minion.getDisplay().getModel() || 'minecraft:skeleton');
    if (faction) {
      minion.setFaction(faction.getId());
    }
    minion.getTempdata().put('witchUuid', npc.getUUID());
    if (minion.setAttackTarget) {
      minion.setAttackTarget(target);
    }
    uuids.push(minion.getUUID());
    world.spawnParticle('smoke', x, cy + 0.4, z, 0.15, 0.25, 0.15, 0.02, 6);
  }
  setMinionUuids(npc, uuids);
}

function despawnMinions(npc) {
  const world = npc.getWorld();
  const uuids = getMinionUuids(npc);
  for (let i = 0; i < uuids.length; i++) {
    const minion = world.getEntity(uuids[i]);
    if (minion && minion.despawn) {
      minion.despawn();
    }
  }
  setMinionUuids(npc, []);
}

function applyWitchCombat(npc) {
  const world = npc.getWorld();
  const inv = npc.getInventory();
  if (!inv.getProjectile() || inv.getProjectile().isEmpty()) {
    inv.setProjectile(world.createItem('minecraft:splash_potion', 1));
  }
  if (!inv.getRightHand() || inv.getRightHand().isEmpty()) {
    inv.setRightHand(world.createItem('minecraft:blaze_rod', 1));
  }

  const stats = npc.getStats();
  stats.setAggroRange(20);
  stats.getMelee().setStrength(0);
  stats.getMelee().setRange(0);
  const ranged = stats.getRanged();
  ranged.setStrength(4);
  ranged.setRange(SHOOT_RANGE);
  ranged.setDelay(30, 45);
  ranged.setSpeed(10);
  ranged.setAccuracy(80);
  ranged.setHasGravity(true);
  ranged.setGlows(false);
  ranged.setHasAimAnimation(true);
  ranged.setMeleeRange(0);
  ranged.setRender3D(true);

  const ai = npc.getAi();
  ai.setRetaliateType(0);
  ai.setReturnsHome(true);
  ai.setStopOnInteract(false);
  ai.setAttackLOS(true);
  ai.setWalkingSpeed(WALK_SPEED);
  npc.updateClient();
}

function holdDistance(npc, target) {
  const dist = distanceTo(npc, target);
  const range = npc.getStats().getRanged().getRange() || SHOOT_RANGE;
  if (dist < HOLD_MIN) {
    const dx = npc.getX() - target.getX();
    const dz = npc.getZ() - target.getZ();
    const len = Math.sqrt(dx * dx + dz * dz) || 1;
    npc.getAi().setWalkingSpeed(WALK_SPEED);
    npc.navigateTo(npc.getX() + (dx / len) * 6, npc.getY(), npc.getZ() + (dz / len) * 6, 1);
    return;
  }
  if (dist <= range) {
    npc.getAi().setWalkingSpeed(0);
    npc.clearNavigation();
    npc.setMoveForward(0);
    return;
  }
  npc.getAi().setWalkingSpeed(WALK_SPEED);
  npc.navigateTo(target.getX(), target.getY(), target.getZ(), 1);
}

function startCharge(npc) {
  npc.getTempdata().put('chargeStart', npc.getWorld().getTotalTime());
  npc.getTimers().forceStart(CHARGE_TIMER, CHARGE_INTERVAL_TICKS, false);
}

function getChargeProgress(npc) {
  const start = npc.getTempdata().get('chargeStart');
  if (start == null) {
    return 0;
  }
  const elapsed = npc.getWorld().getTotalTime() - start;
  if (elapsed < 0) {
    return 0;
  }
  return Math.min(1, elapsed / CHARGE_INTERVAL_TICKS);
}

function drawChargeSwirl(npc, progress) {
  const world = npc.getWorld();
  const age = world.getTotalTime();
  if (age % 2 !== 0) {
    return;
  }
  const cx = npc.getX();
  const cy = npc.getY() + 1;
  const cz = npc.getZ();
  const radius = 2.1 - progress * 1.2;
  const spin = age * (0.1 + progress * 0.32);
  const arms = progress > 0.55 ? 3 : 2;
  const particle = progress > 0.75 ? 'flame' : 'witch';
  const count = progress > 0.85 ? 2 : 1;

  for (let i = 0; i < arms; i++) {
    const angle = spin + (Math.PI * 2 * i) / arms;
    const x = cx + Math.cos(angle) * radius;
    const z = cz + Math.sin(angle) * radius;
    const y = cy + Math.sin(spin * 1.6 + i) * (0.25 + progress * 0.55);
    world.spawnParticle(particle, x, y, z, 0, 0.02, 0, 0.01, count);
  }

  if (progress > 0.9) {
    world.spawnParticle('witch', cx, cy + 0.2, cz, 0.35, 0.55, 0.35, 0.02, 3);
  }
}

function chargedAttack(npc, target) {
  const world = npc.getWorld();
  const cx = npc.getX();
  const cy = npc.getY() + 1;
  const cz = npc.getZ();
  world.spawnParticle('flame', cx, cy, cz, 0.45, 0.7, 0.45, 0.08, 16);
  world.spawnParticle('witch', cx, cy, cz, 0.5, 0.6, 0.5, 0.1, 12);
  npc.swingMainhand();

  const bolt = world.createItem('minecraft:fire_charge', 1);
  for (let i = 0; i < 3; i++) {
    const proj = npc.shootItem(target, bolt, 95);
    if (proj && proj.setHasGravity) {
      proj.setHasGravity(false);
    }
  }
}

function startCombatTimers(npc) {
  if (!npc.getTimers().has(SUMMON_TIMER)) {
    npc.getTimers().forceStart(SUMMON_TIMER, SUMMON_INTERVAL_TICKS, false);
  }
  if (!npc.getTimers().has(CHARGE_TIMER)) {
    startCharge(npc);
  }
}

function stopCombatTimers(npc) {
  const timers = npc.getTimers();
  if (timers.has(SUMMON_TIMER)) {
    timers.stop(SUMMON_TIMER);
  }
  if (timers.has(CHARGE_TIMER)) {
    timers.stop(CHARGE_TIMER);
  }
  npc.getTempdata().remove('chargeStart');
}

export function init(e) {
  applyWitchCombat(e.npc);
  e.npc.getTempdata().put('minionUuids', e.npc.getTempdata().get('minionUuids') || []);
}

export function tick(e) {
  const npc = e.npc;
  const target = getCombatTarget(npc);
  if (!target) {
    npc.getAi().setWalkingSpeed(WALK_SPEED);
    stopCombatTimers(npc);
    return;
  }
  holdDistance(npc, target);
  retargetMinions(npc, target);
  startCombatTimers(npc);
  drawChargeSwirl(npc, getChargeProgress(npc));
}

export function target(e) {
  if (!getCombatTarget(e.npc)) {
    return;
  }
  startCombatTimers(e.npc);
}

export function targetLost(e) {
  stopCombatTimers(e.npc);
  e.npc.getAi().setWalkingSpeed(WALK_SPEED);
}

export function timer(e) {
  const npc = e.npc;
  const combatTarget = getCombatTarget(npc);
  if (!combatTarget) {
    return;
  }
  if (e.id === SUMMON_TIMER) {
    spawnMinions(npc, combatTarget);
    npc.getTimers().forceStart(SUMMON_TIMER, SUMMON_INTERVAL_TICKS, false);
    return;
  }
  if (e.id === CHARGE_TIMER) {
    chargedAttack(npc, combatTarget);
    startCharge(npc);
  }
}

export function died(e) {
  despawnMinions(e.npc);
}
