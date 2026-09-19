var Goal = Java.type('net.minecraft.world.entity.ai.goal.Goal');
var FloatGoal = Java.type('net.minecraft.world.entity.ai.goal.FloatGoal');
var MeleeAttackGoal = Java.type('net.minecraft.world.entity.ai.goal.MeleeAttackGoal');
var AvoidEntityGoal = Java.type('net.minecraft.world.entity.ai.goal.AvoidEntityGoal');
var WaterAvoidingRandomStrollGoal = Java.type('net.minecraft.world.entity.ai.goal.WaterAvoidingRandomStrollGoal');
var LookAtPlayerGoal = Java.type('net.minecraft.world.entity.ai.goal.LookAtPlayerGoal');
var RandomLookAroundGoal = Java.type('net.minecraft.world.entity.ai.goal.RandomLookAroundGoal');
var NearestAttackableTargetGoal = Java.type('net.minecraft.world.entity.ai.goal.target.NearestAttackableTargetGoal');
var HurtByTargetGoal = Java.type('net.minecraft.world.entity.ai.goal.target.HurtByTargetGoal');
var Player = Java.type('net.minecraft.world.entity.player.Player');
var Cat = Java.type('net.minecraft.world.entity.animal.Cat');
var Ocelot = Java.type('net.minecraft.world.entity.animal.Ocelot');
var SoundEvents = Java.type('net.minecraft.sounds.SoundEvents');
var FUSE_TIME = 30;
function applyCreeperCowAi(cowEntity) {
  var cow = cowEntity.getMCEntity();
  // f_21345_ = net.minecraft.world.entity.Mob#goalSelector
  var goals = cow.f_21345_;
  // f_21346_ = net.minecraft.world.entity.Mob#targetSelector
  var targets = cow.f_21346_;
  // m_262460_ = net.minecraft.world.entity.ai.goal.GoalSelector#removeAllGoals
  goals.m_262460_(function () {
    return true;
  });
  targets.m_262460_(function () {
    return true;
  });
  var fuse = 0;
  var SwellGoal = Java.extend(Goal, {
    // m_8036_ = Goal#canUse
    m_8036_: function m_8036_() {
      // m_5448_ = Mob#getTarget
      var living = cow.m_5448_();
      if (fuse > 0) {
        return true;
      }
      if (living == null) {
        return false;
      }
      // m_20270_ = Entity#distanceTo
      return cow.m_20270_(living) < 3;
    },
    // m_8045_ = Goal#canContinueToUse
    m_8045_: function m_8045_() {
      var living = cow.m_5448_();
      if (living == null) {
        return fuse > 0;
      }
      return cow.m_20270_(living) < 7 || fuse > 0;
    },
    // m_183429_ = Goal#requiresUpdateEveryTick
    m_183429_: function m_183429_() {
      return true;
    },
    // m_8056_ = Goal#start
    m_8056_: function m_8056_() {
      fuse = 0;
      // m_5496_ = Entity#playSound
      // f_11837_ = SoundEvents#CREEPER_PRIMED
      cow.m_5496_(SoundEvents.f_11837_, 1, 0.5);
    },
    // m_8041_ = Goal#stop
    m_8041_: function m_8041_() {
      fuse = 0;
    },
    // m_8037_ = Goal#tick
    m_8037_: function m_8037_() {
      var living = cow.m_5448_();
      if (living == null || cow.m_20270_(living) > 7) {
        fuse = 0;
        return;
      }
      fuse += 1;
      if (fuse >= FUSE_TIME) {
        var world = cowEntity.getWorld();
        world.explode(cowEntity.getX(), cowEntity.getY(), cowEntity.getZ(), 3, false, true);
        // m_146870_ = Entity#discard
        cow.m_146870_();
      }
    }
  });
  // m_25352_ = GoalSelector#addGoal
  goals.m_25352_(1, new FloatGoal(cow));
  goals.m_25352_(2, new SwellGoal());
  goals.m_25352_(3, new AvoidEntityGoal(cow, Ocelot.class, 6, 1, 1.2));
  goals.m_25352_(4, new AvoidEntityGoal(cow, Cat.class, 6, 1, 1.2));
  goals.m_25352_(5, new MeleeAttackGoal(cow, 1, false));
  goals.m_25352_(6, new WaterAvoidingRandomStrollGoal(cow, 0.8));
  goals.m_25352_(7, new LookAtPlayerGoal(cow, Player.class, 8));
  goals.m_25352_(8, new RandomLookAroundGoal(cow));
  targets.m_25352_(1, new NearestAttackableTargetGoal(cow, Player.class, true));
  targets.m_25352_(2, new HurtByTargetGoal(cow));
  return cowEntity;
}
function spawnCreeperCow(world, x, y, z) {
  var cow = world.createEntity('minecraft:cow');
  cow.setPosition(x, y, z);
  cow.spawn();
  applyCreeperCowAi(cow);
  return cow;
}

function cancelUse(e) {
  if (typeof e.setCanceled === 'function') {
    e.setCanceled(true);
  }
}
function spawnPos(e) {
  if (e.type === 2 && e.target) {
    return {
      x: e.target.getX() + 0.5,
      y: e.target.getY() + 1,
      z: e.target.getZ() + 0.5
    };
  }
  var player = e.player;
  var yaw = player.getRotation() * Math.PI / 180;
  return {
    x: player.getX() - Math.sin(yaw) * 2,
    y: player.getY(),
    z: player.getZ() + Math.cos(yaw) * 2
  };
}
function interact(e) {
  cancelUse(e);
  if (e.type === 1) {
    return;
  }
  var data = e.item.getTempdata();
  var now = e.player.getWorld().getTotalTime();
  if (data.get('spawnTick') === now) {
    return;
  }
  data.put('spawnTick', now);
  var pos = spawnPos(e);
  spawnCreeperCow(e.player.getWorld(), pos.x, pos.y, pos.z);
}

