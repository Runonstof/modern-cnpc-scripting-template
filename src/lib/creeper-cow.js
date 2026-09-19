const Goal = Java.type('net.minecraft.world.entity.ai.goal.Goal');
const FloatGoal = Java.type('net.minecraft.world.entity.ai.goal.FloatGoal');
const MeleeAttackGoal = Java.type('net.minecraft.world.entity.ai.goal.MeleeAttackGoal');
const AvoidEntityGoal = Java.type('net.minecraft.world.entity.ai.goal.AvoidEntityGoal');
const WaterAvoidingRandomStrollGoal = Java.type(
  'net.minecraft.world.entity.ai.goal.WaterAvoidingRandomStrollGoal'
);
const LookAtPlayerGoal = Java.type('net.minecraft.world.entity.ai.goal.LookAtPlayerGoal');
const RandomLookAroundGoal = Java.type('net.minecraft.world.entity.ai.goal.RandomLookAroundGoal');
const NearestAttackableTargetGoal = Java.type(
  'net.minecraft.world.entity.ai.goal.target.NearestAttackableTargetGoal'
);
const HurtByTargetGoal = Java.type('net.minecraft.world.entity.ai.goal.target.HurtByTargetGoal');
const Player = Java.type('net.minecraft.world.entity.player.Player');
const Cat = Java.type('net.minecraft.world.entity.animal.Cat');
const Ocelot = Java.type('net.minecraft.world.entity.animal.Ocelot');
const SoundEvents = Java.type('net.minecraft.sounds.SoundEvents');

const FUSE_TIME = 30;

export function applyCreeperCowAi(cowEntity) {
  const cow = cowEntity.getMCEntity();
  // f_21345_ = net.minecraft.world.entity.Mob#goalSelector
  const goals = cow.f_21345_;
  // f_21346_ = net.minecraft.world.entity.Mob#targetSelector
  const targets = cow.f_21346_;
  // m_262460_ = net.minecraft.world.entity.ai.goal.GoalSelector#removeAllGoals
  goals.m_262460_(function () {
    return true;
  });
  targets.m_262460_(function () {
    return true;
  });

  let fuse = 0;
  const SwellGoal = Java.extend(Goal, {
    // m_8036_ = Goal#canUse
    m_8036_: function () {
      // m_5448_ = Mob#getTarget
      const living = cow.m_5448_();
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
    m_8045_: function () {
      const living = cow.m_5448_();
      if (living == null) {
        return fuse > 0;
      }
      return cow.m_20270_(living) < 7 || fuse > 0;
    },
    // m_183429_ = Goal#requiresUpdateEveryTick
    m_183429_: function () {
      return true;
    },
    // m_8056_ = Goal#start
    m_8056_: function () {
      fuse = 0;
      // m_5496_ = Entity#playSound
      // f_11837_ = SoundEvents#CREEPER_PRIMED
      cow.m_5496_(SoundEvents.f_11837_, 1, 0.5);
    },
    // m_8041_ = Goal#stop
    m_8041_: function () {
      fuse = 0;
    },
    // m_8037_ = Goal#tick
    m_8037_: function () {
      const living = cow.m_5448_();
      if (living == null || cow.m_20270_(living) > 7) {
        fuse = 0;
        return;
      }
      fuse += 1;
      if (fuse >= FUSE_TIME) {
        const world = cowEntity.getWorld();
        world.explode(cowEntity.getX(), cowEntity.getY(), cowEntity.getZ(), 3, false, true);
        // m_146870_ = Entity#discard
        cow.m_146870_();
      }
    },
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

export function spawnCreeperCow(world, x, y, z) {
  const cow = world.createEntity('minecraft:cow');
  cow.setPosition(x, y, z);
  cow.spawn();
  applyCreeperCowAi(cow);
  return cow;
}
