const API = Java.type('noppes.npcs.api.NpcAPI').Instance();

const WALK_SPEED = 4;
const SHOOT_RANGE = 16;
const SUMMON_TIMER = 1;
const FIRST_SUMMON_TICKS = 20;
const SUMMON_INTERVAL_TICKS = 140;
const MINION_RADIUS = 2;
const MINION_SIZE = 3;

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

function configureMinion(minion, mage, target) {
  const display = minion.getDisplay();
  display.setName('Skeleton');
  display.setTitle('');
  display.setModel('minecraft:skeleton');
  display.setSize(MINION_SIZE);
  display.setShowName(1);
  display.setHasLivingAnimation(true);

  const inv = minion.getInventory();
  inv.setRightHand(minion.getWorld().createItem('minecraft:wooden_sword', 1));

  const stats = minion.getStats();
  stats.setMaxHealth(8);
  minion.setHealth(8);
  stats.setAggroRange(24);
  stats.setRespawnType(3);
  stats.getMelee().setStrength(3);
  stats.getMelee().setRange(2);
  stats.getMelee().setDelay(16);

  const ai = minion.getAi();
  ai.setReturnsHome(false);
  ai.setMovingType(1);
  ai.setWanderingRange(12);
  ai.setWalkingSpeed(5);
  ai.setRetaliateType(0);
  ai.setStopOnInteract(false);
  ai.setLeapAtTarget(true);

  const faction = mage.getFaction();
  if (faction) {
    minion.setFaction(faction.getId());
  }

  minion.addTag('lysara-minion');
  minion.getTempdata().put('mageUuid', mage.getUUID());
  minion.setAttackTarget(target);
  minion.updateClient();
}

function spawnMinions(npc, target) {
  const world = npc.getWorld();
  const uuids = pruneMinions(npc);
  const cx = npc.getX();
  const cy = npc.getY();
  const cz = npc.getZ();

  for (let i = 0; i < 4; i++) {
    const angle = (Math.PI / 2) * i;
    const x = Math.floor(cx + Math.cos(angle) * MINION_RADIUS);
    const z = Math.floor(cz + Math.sin(angle) * MINION_RADIUS);
    const y = Math.floor(cy);
    const minion = API.spawnNPC(world.getMCLevel(), x, y, z);
    minion.setPosition(cx + Math.cos(angle) * MINION_RADIUS, cy, cz + Math.sin(angle) * MINION_RADIUS);
    configureMinion(minion, npc, target);
    uuids.push(minion.getUUID());
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

function applyMageCombat(npc) {
  const inv = npc.getInventory();
  if (!inv.getProjectile() || inv.getProjectile().isEmpty()) {
    inv.setProjectile(npc.getWorld().createItem('minecraft:fire_charge', 1));
  }
  if (!inv.getRightHand() || inv.getRightHand().isEmpty()) {
    inv.setRightHand(npc.getWorld().createItem('minecraft:blaze_rod', 1));
  }

  const stats = npc.getStats();
  stats.setAggroRange(20);
  stats.getMelee().setStrength(0);
  stats.getMelee().setRange(0);
  const ranged = stats.getRanged();
  ranged.setStrength(5);
  ranged.setRange(SHOOT_RANGE);
  ranged.setDelay(20, 30);
  ranged.setSpeed(12);
  ranged.setAccuracy(85);
  ranged.setHasGravity(false);
  ranged.setGlows(true);
  ranged.setParticle(6);
  ranged.setHasAimAnimation(true);
  ranged.setMeleeRange(0);
  ranged.setRender3D(true);

  const ai = npc.getAi();
  ai.setRetaliateType(0);
  ai.setReturnsHome(true);
  ai.setStopOnInteract(true);
  ai.setAttackLOS(true);
  ai.setWalkingSpeed(WALK_SPEED);
  const nbt = npc.getEntityNbt();
  nbt.setInteger('FactionID', 2);
  npc.setEntityNbt(nbt);
  npc.setFaction(2);
  npc.updateClient();
}

function holdOrChase(npc, target) {
  const range = npc.getStats().getRanged().getRange() || SHOOT_RANGE;
  if (distanceTo(npc, target) <= range) {
    npc.getAi().setWalkingSpeed(0);
    npc.clearNavigation();
    npc.setMoveForward(0);
    return;
  }
  npc.getAi().setWalkingSpeed(WALK_SPEED);
  npc.navigateTo(target.getX(), target.getY(), target.getZ(), 1);
}

export function init(e) {
  applyMageCombat(e.npc);
  e.npc.getTempdata().put('minionUuids', e.npc.getTempdata().get('minionUuids') || []);
}

export function tick(e) {
  const npc = e.npc;
  const target = getCombatTarget(npc);
  if (!target) {
    npc.getAi().setWalkingSpeed(WALK_SPEED);
    if (npc.getTimers().has(SUMMON_TIMER)) {
      npc.getTimers().stop(SUMMON_TIMER);
    }
    return;
  }
  holdOrChase(npc, target);
  retargetMinions(npc, target);
  if (!npc.getTimers().has(SUMMON_TIMER)) {
    npc.getTimers().forceStart(SUMMON_TIMER, FIRST_SUMMON_TICKS, false);
  }
}

export function target(e) {
  if (!getCombatTarget(e.npc)) {
    return;
  }
  e.npc.getTimers().forceStart(SUMMON_TIMER, FIRST_SUMMON_TICKS, false);
}

export function targetLost(e) {
  if (e.npc.getTimers().has(SUMMON_TIMER)) {
    e.npc.getTimers().stop(SUMMON_TIMER);
  }
  e.npc.getAi().setWalkingSpeed(WALK_SPEED);
}

export function timer(e) {
  if (e.id !== SUMMON_TIMER) {
    return;
  }
  const npc = e.npc;
  const combatTarget = getCombatTarget(npc);
  if (!combatTarget) {
    return;
  }
  spawnMinions(npc, combatTarget);
  npc.getTimers().forceStart(SUMMON_TIMER, SUMMON_INTERVAL_TICKS, false);
}

export function died(e) {
  despawnMinions(e.npc);
}
