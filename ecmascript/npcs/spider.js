var WallClimberNavigation = Java.type('net.minecraft.world.entity.ai.navigation.WallClimberNavigation');
var Mob = Java.type('net.minecraft.world.entity.Mob');
var Vec3 = Java.type('net.minecraft.world.phys.Vec3');
var MoverType = Java.type('net.minecraft.world.entity.MoverType');
var SPIDER_MODEL = 'minecraft:spider';
var SPIDER_TEXTURE = 'minecraft:textures/entity/spider/spider.png';
var SPIDER_SIZE = 5;
var CLIMB_SPEED = 0.2;
var PRESS_SPEED = 0.12;
function writeAppearanceNbt(npc) {
  var nbt = npc.getEntityNbt();
  nbt.putString('Texture', SPIDER_TEXTURE);
  nbt.setInteger('Size', SPIDER_SIZE);
  nbt.setBoolean('UsingSkinUrl', false);
  nbt.putString('SkinUrl', '');
  if (nbt.has('NpcModelData')) {
    var modelData = nbt.getCompound('NpcModelData');
    modelData.putString('EntityName', SPIDER_MODEL);
    modelData.putString('CustomSkinUrl', '');
    nbt.setCompound('NpcModelData', modelData);
  }
  npc.setEntityNbt(nbt);
}
function configureSpider(npc) {
  var display = npc.getDisplay();
  display.setName('Spider');
  display.setTitle('');
  display.setSkinUrl('');
  display.setSkinTexture(SPIDER_TEXTURE);
  display.setModel(SPIDER_MODEL);
  display.setSize(SPIDER_SIZE);
  display.setShowName(0);
  display.setHasLivingAnimation(true);
  display.setVisible(0);
  display.setHitboxState(0);
  writeAppearanceNbt(npc);
  display.setModel(SPIDER_MODEL);
  var stats = npc.getStats();
  stats.setRespawnType(3);
  stats.getMelee().setStrength(4);
  stats.getMelee().setRange(2);
  var ai = npc.getAi();
  ai.setMovingType(1);
  ai.setNavigationType(0);
  ai.setWanderingRange(16);
  ai.setWalkingSpeed(4);
  ai.setReturnsHome(false);
  ai.setLeapAtTarget(true);
  ai.setCanSwim(true);
  ai.setAvoidsWater(false);
  npc.updateClient();
}
function setMobNavigation(mc, nav) {
  try {
    // f_21344_ = net.minecraft.world.entity.Mob#navigation
    mc.f_21344_ = nav;
    return;
  } catch (err) {}
  var field = Mob.class.getDeclaredField('f_21344_');
  field.setAccessible(true);
  field.set(mc, nav);
}
function ensureWallClimbNav(mc) {
  // m_21573_ = net.minecraft.world.entity.Mob#getNavigation
  var current = mc.m_21573_();
  if (current instanceof WallClimberNavigation) {
    return;
  }
  // m_9236_ = net.minecraft.world.entity.Entity#level
  var nav = new WallClimberNavigation(mc, mc.m_9236_());
  setMobNavigation(mc, nav);
}
function horizontalToward(npc, target) {
  if (!target || !target.isAlive()) {
    return {
      x: 0,
      z: 0
    };
  }
  var dx = target.getX() - npc.getX();
  var dz = target.getZ() - npc.getZ();
  var len = Math.sqrt(dx * dx + dz * dz);
  if (len < 0.001) {
    return {
      x: 0,
      z: 0
    };
  }
  return {
    x: dx / len * PRESS_SPEED,
    z: dz / len * PRESS_SPEED
  };
}
function applyWallClimb(npc) {
  var mc = npc.getMCEntity();
  ensureWallClimbNav(mc);
  var target = npc.getAttackTarget();
  if (target && target.isAlive()) {
    // m_21566_ = net.minecraft.world.entity.Mob#getMoveControl
    // m_6849_ = net.minecraft.world.entity.ai.control.MoveControl#setWantedPosition
    mc.m_21566_().m_6849_(target.getX(), target.getY(), target.getZ(), 1.2);
  }
  // f_19862_ = net.minecraft.world.entity.Entity#horizontalCollision
  if (!mc.f_19862_) {
    // m_20242_ = net.minecraft.world.entity.Entity#setNoGravity
    mc.m_20242_(false);
    return;
  }
  var press = horizontalToward(npc, target);
  // m_20242_ = net.minecraft.world.entity.Entity#setNoGravity
  mc.m_20242_(true);
  // m_20334_ = net.minecraft.world.entity.Entity#setDeltaMovement
  mc.m_20334_(press.x, CLIMB_SPEED, press.z);
  npc.setMotionX(press.x);
  npc.setMotionY(CLIMB_SPEED);
  npc.setMotionZ(press.z);
  // m_6478_ = net.minecraft.world.entity.Entity#move
  // SELF = net.minecraft.world.entity.MoverType#SELF
  mc.m_6478_(MoverType.SELF, new Vec3(press.x, CLIMB_SPEED, press.z));
  // f_19789_ = net.minecraft.world.entity.Entity#fallDistance
  mc.f_19789_ = 0;
}
function init(e) {
  configureSpider(e.npc);
  applyWallClimb(e.npc);
}
function tick(e) {
  applyWallClimb(e.npc);
}

