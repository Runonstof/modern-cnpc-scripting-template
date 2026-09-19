var API$1 = Java.type('noppes.npcs.api.NpcAPI').Instance();
API$1.getIWorld('minecraft:overworld');

var API = Java.type('noppes.npcs.api.NpcAPI').Instance();
var WALK_SPEED = 4;
var SHOOT_RANGE = 16;
var HOLD_MIN = 8;
var SUMMON_TIMER = 1;
var CHARGE_TIMER = 2;
var SUMMON_INTERVAL_TICKS = 100;
var CHARGE_INTERVAL_TICKS = 400;
var MINION_COUNT = 2;
var MINION_RADIUS = 2;
var CLONE_TAB = 0;
var CLONE_NAME = 'Witch Minion';
function distanceTo(a, b) {
  var dx = a.getX() - b.getX();
  var dy = a.getY() - b.getY();
  var dz = a.getZ() - b.getZ();
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
function getCombatTarget(npc) {
  if (!npc.isAttacking()) {
    return null;
  }
  var target = npc.getAttackTarget();
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
  var world = npc.getWorld();
  var kept = [];
  var uuids = getMinionUuids(npc);
  for (var i = 0; i < uuids.length; i++) {
    var minion = world.getEntity(uuids[i]);
    if (minion && minion.isAlive()) {
      kept.push(uuids[i]);
    }
  }
  setMinionUuids(npc, kept);
  return kept;
}
function retargetMinions(npc, target) {
  var world = npc.getWorld();
  var uuids = pruneMinions(npc);
  for (var i = 0; i < uuids.length; i++) {
    var minion = world.getEntity(uuids[i]);
    if (minion && minion.setAttackTarget) {
      minion.setAttackTarget(target);
    }
  }
}
function spawnMinions(npc, target) {
  var world = npc.getWorld();
  var clones = API.getClones();
  var uuids = pruneMinions(npc);
  var cx = npc.getX();
  var cy = npc.getY();
  var cz = npc.getZ();
  var faction = npc.getFaction();
  for (var i = 0; i < MINION_COUNT; i++) {
    var angle = Math.PI * 2 * i / MINION_COUNT + Math.random();
    var x = cx + Math.cos(angle) * MINION_RADIUS;
    var z = cz + Math.sin(angle) * MINION_RADIUS;
    var minion = clones.spawn(x, cy, z, CLONE_TAB, CLONE_NAME, world);
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
  var world = npc.getWorld();
  var uuids = getMinionUuids(npc);
  for (var i = 0; i < uuids.length; i++) {
    var minion = world.getEntity(uuids[i]);
    if (minion && minion.despawn) {
      minion.despawn();
    }
  }
  setMinionUuids(npc, []);
}
function applyWitchCombat(npc) {
  var world = npc.getWorld();
  var inv = npc.getInventory();
  if (!inv.getProjectile() || inv.getProjectile().isEmpty()) {
    inv.setProjectile(world.createItem('minecraft:splash_potion', 1));
  }
  if (!inv.getRightHand() || inv.getRightHand().isEmpty()) {
    inv.setRightHand(world.createItem('minecraft:blaze_rod', 1));
  }
  var stats = npc.getStats();
  stats.setAggroRange(20);
  stats.getMelee().setStrength(0);
  stats.getMelee().setRange(0);
  var ranged = stats.getRanged();
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
  var ai = npc.getAi();
  ai.setRetaliateType(0);
  ai.setReturnsHome(true);
  ai.setStopOnInteract(false);
  ai.setAttackLOS(true);
  ai.setWalkingSpeed(WALK_SPEED);
  npc.updateClient();
}
function holdDistance(npc, target) {
  var dist = distanceTo(npc, target);
  var range = npc.getStats().getRanged().getRange() || SHOOT_RANGE;
  if (dist < HOLD_MIN) {
    var dx = npc.getX() - target.getX();
    var dz = npc.getZ() - target.getZ();
    var len = Math.sqrt(dx * dx + dz * dz) || 1;
    npc.getAi().setWalkingSpeed(WALK_SPEED);
    npc.navigateTo(npc.getX() + dx / len * 6, npc.getY(), npc.getZ() + dz / len * 6, 1);
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
  var start = npc.getTempdata().get('chargeStart');
  if (start == null) {
    return 0;
  }
  var elapsed = npc.getWorld().getTotalTime() - start;
  if (elapsed < 0) {
    return 0;
  }
  return Math.min(1, elapsed / CHARGE_INTERVAL_TICKS);
}
function drawChargeSwirl(npc, progress) {
  var world = npc.getWorld();
  var age = world.getTotalTime();
  if (age % 2 !== 0) {
    return;
  }
  var cx = npc.getX();
  var cy = npc.getY() + 1;
  var cz = npc.getZ();
  var radius = 2.1 - progress * 1.2;
  var spin = age * (0.1 + progress * 0.32);
  var arms = progress > 0.55 ? 3 : 2;
  var particle = progress > 0.75 ? 'flame' : 'witch';
  var count = progress > 0.85 ? 2 : 1;
  for (var i = 0; i < arms; i++) {
    var angle = spin + Math.PI * 2 * i / arms;
    var x = cx + Math.cos(angle) * radius;
    var z = cz + Math.sin(angle) * radius;
    var y = cy + Math.sin(spin * 1.6 + i) * (0.25 + progress * 0.55);
    world.spawnParticle(particle, x, y, z, 0, 0.02, 0, 0.01, count);
  }
  if (progress > 0.9) {
    world.spawnParticle('witch', cx, cy + 0.2, cz, 0.35, 0.55, 0.35, 0.02, 3);
  }
}
function chargedAttack(npc, target) {
  var world = npc.getWorld();
  var cx = npc.getX();
  var cy = npc.getY() + 1;
  var cz = npc.getZ();
  world.spawnParticle('flame', cx, cy, cz, 0.45, 0.7, 0.45, 0.08, 16);
  world.spawnParticle('witch', cx, cy, cz, 0.5, 0.6, 0.5, 0.1, 12);
  npc.swingMainhand();
  var bolt = world.createItem('minecraft:fire_charge', 1);
  for (var i = 0; i < 3; i++) {
    var proj = npc.shootItem(target, bolt, 95);
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
  var timers = npc.getTimers();
  if (timers.has(SUMMON_TIMER)) {
    timers.stop(SUMMON_TIMER);
  }
  if (timers.has(CHARGE_TIMER)) {
    timers.stop(CHARGE_TIMER);
  }
  npc.getTempdata().remove('chargeStart');
}
function init(e) {
  applyWitchCombat(e.npc);
  e.npc.getTempdata().put('minionUuids', e.npc.getTempdata().get('minionUuids') || []);
}
function tick(e) {
  var npc = e.npc;
  var target = getCombatTarget(npc);
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
function target(e) {
  if (!getCombatTarget(e.npc)) {
    return;
  }
  startCombatTimers(e.npc);
}
function targetLost(e) {
  stopCombatTimers(e.npc);
  e.npc.getAi().setWalkingSpeed(WALK_SPEED);
}
function timer(e) {
  var npc = e.npc;
  var combatTarget = getCombatTarget(npc);
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
function died(e) {
  despawnMinions(e.npc);
}

