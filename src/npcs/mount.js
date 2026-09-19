import { subscribe, unsubscribe, stopThreadsNamed } from '~/lib/fast-tick';

const Vec3 = Java.type('net.minecraft.world.phys.Vec3');
const MoverType = Java.type('net.minecraft.world.entity.MoverType');

const FLY_SPEED = 8;
const FLOAT_DOWN_SPEED = 1.2;
const FLY_PERIOD_MS = 20;
const MOUNT_MODEL = 'minecraft:wolf';
const MOUNT_TEXTURE = 'minecraft:textures/entity/wolf/wolf.png';
const MOUNT_SIZE = 5;
const MODEL_SCALE = 1;
const SCALE_KEYS = [
  'HeadConfig',
  'BodyConfig',
  'ArmsConfig',
  'Arms2Config',
  'LegsConfig',
  'Legs2Config',
];

function scaleModelConfig(config, scale) {
  config.setFloat('ScaleX', scale);
  config.setFloat('ScaleY', scale);
  config.setFloat('ScaleZ', scale);
}

function writeAppearanceNbt(npc) {
  const nbt = npc.getEntityNbt();
  nbt.putString('Texture', MOUNT_TEXTURE);
  nbt.setInteger('Size', MOUNT_SIZE);
  nbt.setBoolean('UsingSkinUrl', false);
  nbt.putString('SkinUrl', '');
  if (nbt.has('NpcModelData')) {
    const modelData = nbt.getCompound('NpcModelData');
    modelData.putString('EntityName', MOUNT_MODEL);
    modelData.putString('CustomSkinUrl', '');
    for (let i = 0; i < SCALE_KEYS.length; i++) {
      const key = SCALE_KEYS[i];
      if (modelData.has(key)) {
        scaleModelConfig(modelData.getCompound(key), MODEL_SCALE);
      }
    }
    nbt.setCompound('NpcModelData', modelData);
  }
  npc.setEntityNbt(nbt);
}

function configureDragon(npc) {
  const display = npc.getDisplay();
  display.setName('Wolf');
  display.setTitle('');
  display.setSkinUrl('');
  display.setSkinTexture(MOUNT_TEXTURE);
  display.setModel(MOUNT_MODEL);
  display.setSize(MOUNT_SIZE);
  display.setShowName(0);
  display.setHasLivingAnimation(true);
  display.setVisible(0);
  display.setHitboxState(0);
  for (let part = 0; part < 6; part++) {
    display.setModelScale(part, MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);
  }
  writeAppearanceNbt(npc);
  display.setModel(MOUNT_MODEL);

  const stats = npc.getStats();
  stats.setMaxHealth(80);
  npc.setHealth(80);
  stats.setRespawnType(3);
  stats.setImmune(1, true);
  stats.setImmune(4, true);
  stats.getMelee().setStrength(0);
  stats.getMelee().setRange(0);

  const ai = npc.getAi();
  ai.setMovingType(0);
  ai.setNavigationType(1);
  ai.setStandingType(1);
  ai.setReturnsHome(false);
  ai.setRetaliateType(3);
  ai.setStopOnInteract(false);
  ai.setWalkingSpeed(0);
  ai.setMountControl(false);
  ai.setAttackLOS(false);

  setNoGravity(npc, true);
  npc.updateClient();
}

function setNoGravity(entity, value) {
  const mc = entity.getMCEntity();
  // m_20242_ = net.minecraft.world.entity.Entity#setNoGravity
  mc.m_20242_(value);
}

function moveColliding(npc, dx, dy, dz) {
  const mc = npc.getMCEntity();
  // f_19794_ = net.minecraft.world.entity.Entity#noPhysics
  mc.f_19794_ = false;
  // m_6478_ = net.minecraft.world.entity.Entity#move
  // SELF = net.minecraft.world.entity.MoverType#SELF
  mc.m_6478_(MoverType.SELF, new Vec3(dx, dy, dz));
}

function getRider(npc) {
  const riders = npc.getRiders();
  if (!riders || riders.length === 0) {
    return null;
  }
  return riders[0];
}

function riderLook(npc, rider) {
  const temp = npc.getWorld().getTempdata();
  const uuid = rider.getUUID();
  let yaw = temp.get('mountYaw_' + uuid);
  let pitch = temp.get('mountPitch_' + uuid);
  if (yaw == null || pitch == null) {
    const mc = rider.getMCEntity();
    // m_146908_ = net.minecraft.world.entity.Entity#getYRot
    yaw = mc.m_146908_();
    // m_146909_ = net.minecraft.world.entity.Entity#getXRot
    pitch = mc.m_146909_();
  }
  if (yaw == null) {
    yaw = rider.getRotation();
  }
  if (pitch == null) {
    pitch = rider.getPitch();
  }
  return { yaw: yaw, pitch: pitch };
}

function lookDirection(yawDeg, pitchDeg) {
  const yaw = (yawDeg * Math.PI) / 180;
  const pitch = (pitchDeg * Math.PI) / 180;
  const cosPitch = Math.cos(pitch);
  return {
    x: -Math.sin(yaw) * cosPitch,
    y: -Math.sin(pitch),
    z: Math.cos(yaw) * cosPitch,
  };
}

function forwardInput(npc, rider) {
  const held = npc.getWorld().getTempdata().get('mountW_' + rider.getUUID());
  if (held) {
    return 1;
  }
  let input = 0;
  if (rider.getMoveForward) {
    input = rider.getMoveForward();
  }
  if (Math.abs(input) < 0.01 && npc.getMoveForward) {
    input = npc.getMoveForward();
  }
  return input;
}

function flyJobId(npc) {
  return 'mount-fly:' + npc.getUUID();
}

function stopMountLoop(npc) {
  const uuid = npc.getUUID();
  unsubscribe(npc.getWorld(), flyJobId(npc));
  stopThreadsNamed('mount-fly-' + uuid);
}

function landY(npc) {
  const world = npc.getWorld();
  const x = npc.getBlockX();
  const z = npc.getBlockZ();
  let y = Math.floor(npc.getY());
  const minY = -64;
  while (y >= minY) {
    const block = world.getBlock(x, y, z);
    if (block && !block.isAir()) {
      return y + 1;
    }
    y--;
  }
  return minY;
}

function floatToGround(npc, dt) {
  const target = landY(npc);
  const y = npc.getY();
  if (y <= target + 0.05) {
    npc.setMotionX(0);
    npc.setMotionY(0);
    npc.setMotionZ(0);
    if (y < target) {
      npc.setY(target);
    }
    return;
  }
  const step = Math.min(y - target, FLOAT_DOWN_SPEED * dt);
  npc.setMotionX(0);
  npc.setMotionY(0);
  npc.setMotionZ(0);
  moveColliding(npc, 0, -step, 0);
}

function updateFlight(npc, dt) {
  setNoGravity(npc, true);
  const rider = getRider(npc);
  if (!rider) {
    floatToGround(npc, dt);
    return;
  }

  const input = forwardInput(npc, rider);
  if (input <= 0.05) {
    npc.setMotionX(0);
    npc.setMotionY(0);
    npc.setMotionZ(0);
    return;
  }

  const look = riderLook(npc, rider);
  const dir = lookDirection(look.yaw, look.pitch);
  const speed = FLY_SPEED * Math.min(1, input);
  const step = speed * dt;
  npc.setRotation(look.yaw);
  npc.setPitch(look.pitch);
  npc.setMotionX(0);
  npc.setMotionY(0);
  npc.setMotionZ(0);
  moveColliding(npc, dir.x * step, dir.y * step, dir.z * step);
}

export function init(e) {
  stopMountLoop(e.npc);
  configureDragon(e.npc);
  subscribe(e.npc.getWorld(), flyJobId(e.npc), e.npc, FLY_PERIOD_MS, updateFlight);
}

export function interact(e) {
  const npc = e.npc;
  const player = e.player;
  const rider = getRider(npc);
  if (rider && rider.getUUID() === player.getUUID()) {
    player.setMount(null);
  } else {
    npc.addRider(player);
    setNoGravity(npc, true);
  }
  e.setCanceled(true);
}

export function died(e) {
  stopMountLoop(e.npc);
}
