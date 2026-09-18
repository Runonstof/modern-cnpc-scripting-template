var PotionEffectType = Java.type('noppes.npcs.api.constants.PotionEffectType');
var EntitiesType = Java.type('noppes.npcs.api.constants.EntitiesType');
var AnimationType = Java.type('noppes.npcs.api.constants.AnimationType');
var CAST_WINDUP = 32;
var CAST_COOLDOWN = 40;
var PREFERRED_RANGE = 12;
var MIN_RANGE = 10;
var MAX_CAST_RANGE = 20;
var TACTICAL_NONE = 6;
var FIREBOLT_DAMAGE = 5;
var FROST_DAMAGE = 3;
var STORM_DAMAGE = 7;
var FROST_RADIUS = 5;
function getCombat(npc) {
  var data = npc.getTempdata().get('vaelithCombat');
  if (!data) {
    data = {
      cd: 0,
      windup: 0,
      spell: 0,
      nextSpell: 0,
      charge: 0
    };
    npc.getTempdata().put('vaelithCombat', data);
  }
  return data;
}
function spellTell(spell) {
  if (spell === 1) {
    return {
      main: 'minecraft:snowflake',
      alt: 'minecraft:cloud'
    };
  }
  if (spell === 2) {
    return {
      main: 'minecraft:witch',
      alt: 'minecraft:electric_spark'
    };
  }
  return {
    main: 'minecraft:flame',
    alt: 'minecraft:lava'
  };
}
function burst(world, x, y, z, particle, count, speed) {
  world.spawnParticle(particle, x, y, z, 0.35, 0.6, 0.35, speed, count);
}
function beam(world, ax, ay, az, bx, by, bz, particle, steps) {
  for (var i = 1; i <= steps; i++) {
    var t = i / steps;
    world.spawnParticle(particle, ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t, 0.04, 0.04, 0.04, 0.01, 2);
  }
}
function livingTarget(entity) {
  return entity && entity.isAlive && entity.isAlive() && typeof entity.damage === 'function';
}
function isSelf(npc, entity) {
  return entity && String(entity.getUUID()) === String(npc.getUUID());
}
function distance(a, b) {
  var dx = a.getX() - b.getX();
  var dy = a.getY() - b.getY();
  var dz = a.getZ() - b.getZ();
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
function lookAt(npc, target) {
  var dx = target.getX() - npc.getX();
  var dz = target.getZ() - npc.getZ();
  npc.setRotation(Math.atan2(-dx, dz) * 180 / Math.PI);
}
function applyRangedSpacing(npc) {
  var melee = npc.getStats().getMelee();
  melee.setStrength(0);
  melee.setRange(1);
  melee.setDelay(100);
  var ranged = npc.getStats().getRanged();
  ranged.setStrength(0);
  ranged.setRange(PREFERRED_RANGE);
  ranged.setMeleeRange(0);
  var nbt = npc.getEntityNbt();
  if (nbt.getInteger('TacticalVariant') !== TACTICAL_NONE || nbt.getInteger('AttackRange') !== 1) {
    nbt.setInteger('TacticalVariant', TACTICAL_NONE);
    nbt.setInteger('TacticalRadius', PREFERRED_RANGE);
    nbt.setInteger('AttackRange', 1);
    nbt.setInteger('DistanceToMelee', 1);
    npc.setEntityNbt(nbt);
  }
}
function keepRange(npc, target) {
  applyRangedSpacing(npc);
  var dist = distance(npc, target);
  var dx = npc.getX() - target.getX();
  var dz = npc.getZ() - target.getZ();
  var len = Math.sqrt(dx * dx + dz * dz) || 1;
  npc.setMoveForward(0);
  if (dist < 5) {
    npc.clearNavigation();
    npc.getAi().setWalkingSpeed(0);
    npc.setPosition(target.getX() + dx / len * PREFERRED_RANGE, npc.getY(), target.getZ() + dz / len * PREFERRED_RANGE);
    return distance(npc, target);
  }
  if (dist < MIN_RANGE) {
    npc.getAi().setWalkingSpeed(5);
    npc.setMotionX(dx / len * 0.35);
    npc.setMotionZ(dz / len * 0.35);
    npc.navigateTo(npc.getX() + dx / len * 8, npc.getY(), npc.getZ() + dz / len * 8, 1.4);
  } else if (dist > MAX_CAST_RANGE) {
    npc.getAi().setWalkingSpeed(5);
    npc.navigateTo(target.getX() + dx / len * PREFERRED_RANGE, target.getY(), target.getZ() + dz / len * PREFERRED_RANGE, 1.1);
  } else {
    npc.getAi().setWalkingSpeed(0);
    npc.setMotionX(0);
    npc.setMotionZ(0);
    npc.clearNavigation();
  }
  return dist;
}
function startCastPose(npc) {
  npc.getAi().setAnimation(AnimationType.AIM);
  npc.playAnimation(5);
}
function finishCastPose(npc, animation) {
  npc.getAi().setAnimation(animation);
  npc.swingMainhand();
  npc.playAnimation(0);
}
function firebolt(npc, target) {
  var world = npc.getWorld();
  lookAt(npc, target);
  finishCastPose(npc, AnimationType.AIM);
  world.playSoundAt(npc.getPos(), 'minecraft:entity.blaze.shoot', 1, 1.15);
  beam(world, npc.getX(), npc.getY() + 1.5, npc.getZ(), target.getX(), target.getY() + 1.2, target.getZ(), 'minecraft:flame', 10);
  var shot = npc.shootItem(target, world.createItem('minecraft:fire_charge', 1), 95);
  if (!shot) {
    return;
  }
  shot.setHasGravity(false);
  shot.enableEvents();
  shot.getTempdata().put('vaelithSpell', 'firebolt');
}
function frostNova(npc, target) {
  var world = npc.getWorld();
  lookAt(npc, target);
  finishCastPose(npc, AnimationType.BOW);
  world.playSoundAt(target.getPos(), 'minecraft:entity.player.hurt_freeze', 1, 0.7);
  beam(world, npc.getX(), npc.getY() + 1.4, npc.getZ(), target.getX(), target.getY() + 1, target.getZ(), 'minecraft:snowflake', 12);
  burst(world, target.getX(), target.getY() + 0.2, target.getZ(), 'minecraft:snowflake', 40, 0.12);
  burst(world, target.getX(), target.getY() + 1, target.getZ(), 'minecraft:cloud', 16, 0.04);
  var nearby = world.getNearbyEntities(target.getPos(), FROST_RADIUS, EntitiesType.LIVING);
  for (var i = 0; i < nearby.length; i++) {
    var entity = nearby[i];
    if (!livingTarget(entity) || isSelf(npc, entity)) {
      continue;
    }
    entity.damage(FROST_DAMAGE);
    entity.addPotionEffect(PotionEffectType.SLOWNESS, 4, 1, false);
    burst(world, entity.getX(), entity.getY() + 1, entity.getZ(), 'minecraft:item_snowball', 8, 0.1);
  }
}
function arcaneStorm(npc, target) {
  var world = npc.getWorld();
  lookAt(npc, target);
  finishCastPose(npc, AnimationType.POINT);
  world.playSoundAt(npc.getPos(), 'minecraft:entity.evoker.cast_spell', 1, 0.85);
  world.playSoundAt(target.getPos(), 'minecraft:entity.lightning_bolt.impact', 0.7, 1.4);
  beam(world, npc.getX(), npc.getY() + 1.6, npc.getZ(), target.getX(), target.getY() + 1.4, target.getZ(), 'minecraft:witch', 14);
  burst(world, target.getX(), target.getY() + 1, target.getZ(), 'minecraft:electric_spark', 28, 0.25);
  burst(world, target.getX(), target.getY() + 1.6, target.getZ(), 'minecraft:witch', 18, 0.15);
  if (livingTarget(target)) {
    target.damage(STORM_DAMAGE);
    target.knockback(2, npc.getRotation());
  }
}
function castPrepared(npc, target, spell) {
  if (spell === 1) {
    frostNova(npc, target);
  } else if (spell === 2) {
    arcaneStorm(npc, target);
  } else {
    firebolt(npc, target);
  }
}
function swirlCharge(npc, spell, chargeTick) {
  var world = npc.getWorld();
  var tell = spellTell(spell);
  var t = chargeTick * 0.45;
  var radius = 1.15;
  var height = npc.getY() + 0.35 + chargeTick % 16 * 0.08;
  for (var i = 0; i < 3; i++) {
    var a = t + i * Math.PI * 2 / 3;
    world.spawnParticle(tell.main, npc.getX() + Math.cos(a) * radius, height, npc.getZ() + Math.sin(a) * radius, 0.02, 0.04, 0.02, 0.01, 2);
  }
  world.spawnParticle(tell.alt, npc.getX(), npc.getY() + 1.2, npc.getZ(), 0.2, 0.35, 0.2, 0.02, 3);
}
function init(e) {
  var npc = e.npc;
  npc.getTempdata().remove('vaelithCombat');
  npc.getStats().getMelee().setDelay(100);
  npc.getStats().getRanged().setDelay(200, 200);
  npc.getStats().setAggroRange(24);
  npc.getAi().setLeapAtTarget(false);
  npc.getAi().setStandingType(2);
  npc.getAi().setAnimation(AnimationType.NONE);
  applyRangedSpacing(npc);
}
function tick(e) {
  var npc = e.npc;
  var target = npc.getAttackTarget();
  if (!livingTarget(target)) {
    npc.getAi().setAnimation(AnimationType.NONE);
    return;
  }
  var dist = keepRange(npc, target);
  lookAt(npc, target);
  var combat = getCombat(npc);
  if (dist > MAX_CAST_RANGE) {
    combat.windup = 0;
    return;
  }
  if (combat.windup > 0) {
    combat.windup -= 1;
    combat.charge = (combat.charge || 0) + 1;
    startCastPose(npc);
    swirlCharge(npc, combat.nextSpell, combat.charge);
    if (combat.windup === 0) {
      castPrepared(npc, target, combat.nextSpell);
      combat.spell = combat.nextSpell + 1;
      combat.cd = CAST_COOLDOWN;
      combat.charge = 0;
      npc.getAi().setAnimation(AnimationType.NONE);
    }
    return;
  }
  combat.cd = (combat.cd || 0) + 1;
  if (combat.cd < CAST_COOLDOWN) {
    return;
  }
  combat.cd = 0;
  combat.nextSpell = (combat.spell || 0) % 3;
  combat.windup = CAST_WINDUP;
  combat.charge = 0;
  startCastPose(npc);
}
function meleeAttack(e) {
  e.damage = 0;
  if (typeof e.setCanceled === 'function') {
    e.setCanceled(true);
  }
}
function projectileTick(e) {
  var projectile = e.projectile;
  if (projectile.getTempdata().get('vaelithSpell') !== 'firebolt') {
    return;
  }
  projectile.getWorld().spawnParticle('minecraft:flame', projectile.getX(), projectile.getY(), projectile.getZ(), 0.05, 0.05, 0.05, 0.01, 4);
}
function projectileImpact(e) {
  var projectile = e.projectile;
  if (projectile.getTempdata().get('vaelithSpell') !== 'firebolt') {
    return;
  }
  var world = projectile.getWorld();
  burst(world, projectile.getX(), projectile.getY(), projectile.getZ(), 'minecraft:lava', 8, 0.08);
  world.playSoundAt(projectile.getPos(), 'minecraft:entity.generic.burn', 0.8, 1.2);
  if (e.type === 0 && livingTarget(e.target)) {
    e.target.damage(FIREBOLT_DAMAGE);
    e.target.setBurning(4);
  }
}

