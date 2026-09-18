var PotionEffectType = Java.type('noppes.npcs.api.constants.PotionEffectType');
var EntitiesType = Java.type('noppes.npcs.api.constants.EntitiesType');
var AnimationType = Java.type('noppes.npcs.api.constants.AnimationType');
var CAST_WINDUP = 8;
var CAST_COOLDOWN = 10;
var PREFERRED_RANGE = 12;
var MIN_RANGE = 11;
var MAX_CAST_RANGE = 20;
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
      spell: 0
    };
    npc.getTempdata().put('vaelithCombat', data);
  }
  return data;
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
function keepRange(npc, target) {
  var dist = distance(npc, target);
  var dx = npc.getX() - target.getX();
  var dz = npc.getZ() - target.getZ();
  var len = Math.sqrt(dx * dx + dz * dz) || 1;
  if (dist < MIN_RANGE) {
    npc.navigateTo(npc.getX() + dx / len * 8, npc.getY(), npc.getZ() + dz / len * 8, 1.35);
  } else if (dist > MAX_CAST_RANGE) {
    npc.navigateTo(target.getX() + dx / len * PREFERRED_RANGE, target.getY(), target.getZ() + dz / len * PREFERRED_RANGE, 1.1);
  } else {
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
function castNext(npc, target) {
  var combat = getCombat(npc);
  var spell = combat.spell % 3;
  combat.spell += 1;
  if (spell === 0) {
    firebolt(npc, target);
  } else if (spell === 1) {
    frostNova(npc, target);
  } else {
    arcaneStorm(npc, target);
  }
}
function windupParticles(npc, target) {
  var world = npc.getWorld();
  burst(world, npc.getX(), npc.getY() + 1.3, npc.getZ(), 'minecraft:enchant', 6, 0.04);
  burst(world, npc.getX(), npc.getY() + 1.5, npc.getZ(), 'minecraft:witch', 4, 0.03);
  beam(world, npc.getX(), npc.getY() + 1.5, npc.getZ(), target.getX(), target.getY() + 1.2, target.getZ(), 'minecraft:end_rod', 6);
}
function init(e) {
  var npc = e.npc;
  npc.getTempdata().remove('vaelithCombat');
  var melee = npc.getStats().getMelee();
  melee.setStrength(0);
  melee.setDelay(100);
  melee.setRange(PREFERRED_RANGE);
  var ranged = npc.getStats().getRanged();
  ranged.setStrength(0);
  ranged.setRange(PREFERRED_RANGE);
  ranged.setMeleeRange(0);
  ranged.setDelay(200, 200);
  npc.getInventory().setProjectile(npc.getWorld().createItem('minecraft:ender_eye', 1));
  npc.getStats().setAggroRange(24);
  npc.getAi().setLeapAtTarget(false);
  npc.getAi().setStandingType(2);
  npc.getAi().setWalkingSpeed(5);
  npc.getAi().setAnimation(AnimationType.NONE);
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
    startCastPose(npc);
    windupParticles(npc, target);
    if (combat.windup === 0) {
      castNext(npc, target);
      combat.cd = CAST_COOLDOWN;
      npc.getAi().setAnimation(AnimationType.NONE);
    }
    return;
  }
  combat.cd = (combat.cd || 0) + 1;
  if (combat.cd < CAST_COOLDOWN) {
    return;
  }
  combat.cd = 0;
  combat.windup = CAST_WINDUP;
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

