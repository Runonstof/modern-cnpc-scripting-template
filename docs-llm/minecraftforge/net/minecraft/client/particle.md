# net.minecraft.client.particle

- [Barrier](#barrier)
- [Barrier.Factory](#barrier.factory)
- [IParticleFactory](#iparticlefactory)
- [Particle](#particle)
- [ParticleBlockDust](#particleblockdust)
- [ParticleBlockDust.Factory](#particleblockdust.factory)
- [ParticleBreaking](#particlebreaking)
- [ParticleBreaking.Factory](#particlebreaking.factory)
- [ParticleBreaking.SlimeFactory](#particlebreaking.slimefactory)
- [ParticleBreaking.SnowballFactory](#particlebreaking.snowballfactory)
- [ParticleBubble](#particlebubble)
- [ParticleBubble.Factory](#particlebubble.factory)
- [ParticleCloud](#particlecloud)
- [ParticleCloud.Factory](#particlecloud.factory)
- [ParticleCrit](#particlecrit)
- [ParticleCrit.DamageIndicatorFactory](#particlecrit.damageindicatorfactory)
- [ParticleCrit.Factory](#particlecrit.factory)
- [ParticleCrit.MagicFactory](#particlecrit.magicfactory)
- [ParticleDigging](#particledigging)
- [ParticleDigging.Factory](#particledigging.factory)
- [ParticleDragonBreath](#particledragonbreath)
- [ParticleDragonBreath.Factory](#particledragonbreath.factory)
- [ParticleDrip](#particledrip)
- [ParticleDrip.LavaFactory](#particledrip.lavafactory)
- [ParticleDrip.WaterFactory](#particledrip.waterfactory)
- [ParticleEmitter](#particleemitter)
- [ParticleEnchantmentTable](#particleenchantmenttable)
- [ParticleEnchantmentTable.EnchantmentTable](#particleenchantmenttable.enchantmenttable)
- [ParticleEndRod](#particleendrod)
- [ParticleEndRod.Factory](#particleendrod.factory)
- [ParticleExplosion](#particleexplosion)
- [ParticleExplosion.Factory](#particleexplosion.factory)
- [ParticleExplosionHuge](#particleexplosionhuge)
- [ParticleExplosionHuge.Factory](#particleexplosionhuge.factory)
- [ParticleExplosionLarge](#particleexplosionlarge)
- [ParticleExplosionLarge.Factory](#particleexplosionlarge.factory)
- [ParticleFallingDust](#particlefallingdust)
- [ParticleFallingDust.Factory](#particlefallingdust.factory)
- [ParticleFirework](#particlefirework)
- [ParticleFirework.Factory](#particlefirework.factory)
- [ParticleFirework.Overlay](#particlefirework.overlay)
- [ParticleFirework.Spark](#particlefirework.spark)
- [ParticleFirework.Starter](#particlefirework.starter)
- [ParticleFlame](#particleflame)
- [ParticleFlame.Factory](#particleflame.factory)
- [ParticleFootStep](#particlefootstep)
- [ParticleFootStep.Factory](#particlefootstep.factory)
- [ParticleHeart](#particleheart)
- [ParticleHeart.AngryVillagerFactory](#particleheart.angryvillagerfactory)
- [ParticleHeart.Factory](#particleheart.factory)
- [ParticleItemPickup](#particleitempickup)
- [ParticleLava](#particlelava)
- [ParticleLava.Factory](#particlelava.factory)
- [ParticleManager](#particlemanager)
- [ParticleMobAppearance](#particlemobappearance)
- [ParticleMobAppearance.Factory](#particlemobappearance.factory)
- [ParticleNote](#particlenote)
- [ParticleNote.Factory](#particlenote.factory)
- [ParticlePortal](#particleportal)
- [ParticlePortal.Factory](#particleportal.factory)
- [ParticleRain](#particlerain)
- [ParticleRain.Factory](#particlerain.factory)
- [ParticleRedstone](#particleredstone)
- [ParticleRedstone.Factory](#particleredstone.factory)
- [ParticleSimpleAnimated](#particlesimpleanimated)
- [ParticleSmokeLarge](#particlesmokelarge)
- [ParticleSmokeLarge.Factory](#particlesmokelarge.factory)
- [ParticleSmokeNormal](#particlesmokenormal)
- [ParticleSmokeNormal.Factory](#particlesmokenormal.factory)
- [ParticleSnowShovel](#particlesnowshovel)
- [ParticleSnowShovel.Factory](#particlesnowshovel.factory)
- [ParticleSpell](#particlespell)
- [ParticleSpell.AmbientMobFactory](#particlespell.ambientmobfactory)
- [ParticleSpell.Factory](#particlespell.factory)
- [ParticleSpell.InstantFactory](#particlespell.instantfactory)
- [ParticleSpell.MobFactory](#particlespell.mobfactory)
- [ParticleSpell.WitchFactory](#particlespell.witchfactory)
- [ParticleSpit](#particlespit)
- [ParticleSpit.Factory](#particlespit.factory)
- [ParticleSplash](#particlesplash)
- [ParticleSplash.Factory](#particlesplash.factory)
- [ParticleSuspend](#particlesuspend)
- [ParticleSuspend.Factory](#particlesuspend.factory)
- [ParticleSuspendedTown](#particlesuspendedtown)
- [ParticleSuspendedTown.Factory](#particlesuspendedtown.factory)
- [ParticleSuspendedTown.HappyVillagerFactory](#particlesuspendedtown.happyvillagerfactory)
- [ParticleSweepAttack](#particlesweepattack)
- [ParticleSweepAttack.Factory](#particlesweepattack.factory)
- [ParticleTotem](#particletotem)
- [ParticleTotem.Factory](#particletotem.factory)
- [ParticleWaterWake](#particlewaterwake)
- [ParticleWaterWake.Factory](#particlewaterwake.factory)
## Barrier

*class* `net.minecraft.client.particle.Barrier`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public int getFXLayer()`
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `onUpdate`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## Barrier.Factory

*class* `net.minecraft.client.particle.Barrier.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: Barrier

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## IParticleFactory

*interface* `net.minecraft.client.particle.IParticleFactory`

### Methods
- `Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## Particle

*class* `net.minecraft.client.particle.Particle`

### Fields
- `protected World world`
- `protected double prevPosX`
- `protected double prevPosY`
- `protected double prevPosZ`
- `protected double posX`
- `protected double posY`
- `protected double posZ`
- `protected double motionX`
- `protected double motionY`
- `protected double motionZ`
- `protected boolean onGround`
- `protected boolean canCollide`
- `protected boolean isExpired`
- `protected float width`
- `protected float height`
- `protected java.util.Random rand`
- `protected int particleTextureIndexX`
- `protected int particleTextureIndexY`
- `protected float particleTextureJitterX`
- `protected float particleTextureJitterY`
- `protected int particleAge`
- `protected int particleMaxAge`
- `protected float particleScale`
- `protected float particleGravity`
- `protected float particleRed`
- `protected float particleGreen`
- `protected float particleBlue`
- `protected float particleAlpha`
- `protected TextureAtlasSprite particleTexture`
- `protected float particleAngle`
- `protected float prevParticleAngle`
- `public static double interpPosX`
- `public static double interpPosY`
- `public static double interpPosZ`
- `public static Vec3d cameraViewDir`

### Methods
- `public Particle multiplyVelocity(float multiplier)`
- `public Particle multipleParticleScaleBy(float scale)`
- `public void setRBGColorF(float particleRedIn,  float particleGreenIn,  float particleBlueIn)`
- `public void setAlphaF(float alpha)`
- `public boolean shouldDisableDepth()`
- `public float getRedColorF()`
- `public float getGreenColorF()`
- `public float getBlueColorF()`
- `public void setMaxAge(int p_187114_1_)`
- `public void onUpdate()`
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public int getFXLayer()`
- `public void setParticleTexture(TextureAtlasSprite texture)`
- `public void setParticleTextureIndex(int particleTextureIndex)`
- `public void nextTextureIndexX()`
- `public java.lang.String toString()`
- `public void setExpired()`
- `protected void setSize(float p_187115_1_,  float p_187115_2_)`
- `public void setPosition(double p_187109_1_,  double p_187109_3_,  double p_187109_5_)`
- `public void move(double x,  double y,  double z)`
- `protected void resetPositionToBB()`
- `public int getBrightnessForRender(float p_189214_1_)`
- `public boolean isAlive()`
- `public AxisAlignedBB getBoundingBox()`
- `public void setBoundingBox(AxisAlignedBB bb)`

## ParticleBlockDust

*class* `net.minecraft.client.particle.ParticleBlockDust`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Inherited methods
- from `net.minecraft.client.particle.ParticleDigging`: `getBrightnessForRender`, `getFXLayer`, `init`, `multiplyColor`, `renderParticle`, `setBlockPos`
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `onUpdate`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleBlockDust.Factory

*class* `net.minecraft.client.particle.ParticleBlockDust.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleBlockDust

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleBreaking

*class* `net.minecraft.client.particle.ParticleBreaking`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public int getFXLayer()`
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `onUpdate`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleBreaking.Factory

*class* `net.minecraft.client.particle.ParticleBreaking.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleBreaking

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleBreaking.SlimeFactory

*class* `net.minecraft.client.particle.ParticleBreaking.SlimeFactory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleBreaking

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleBreaking.SnowballFactory

*class* `net.minecraft.client.particle.ParticleBreaking.SnowballFactory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleBreaking

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleBubble

*class* `net.minecraft.client.particle.ParticleBubble`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `renderParticle`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleBubble.Factory

*class* `net.minecraft.client.particle.ParticleBubble.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleBubble

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleCloud

*class* `net.minecraft.client.particle.ParticleCloud`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleCloud.Factory

*class* `net.minecraft.client.particle.ParticleCloud.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleCloud

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleCrit

*class* `net.minecraft.client.particle.ParticleCrit`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleCrit.DamageIndicatorFactory

*class* `net.minecraft.client.particle.ParticleCrit.DamageIndicatorFactory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleCrit

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleCrit.Factory

*class* `net.minecraft.client.particle.ParticleCrit.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleCrit

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleCrit.MagicFactory

*class* `net.minecraft.client.particle.ParticleCrit.MagicFactory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleCrit

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleDigging

*class* `net.minecraft.client.particle.ParticleDigging`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public ParticleDigging setBlockPos(BlockPos pos)`
- `public ParticleDigging init()`
- `protected void multiplyColor(BlockPos p_187154_1_)`
- `public int getFXLayer()`
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public int getBrightnessForRender(float p_189214_1_)`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `onUpdate`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleDigging.Factory

*class* `net.minecraft.client.particle.ParticleDigging.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleDigging

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleDragonBreath

*class* `net.minecraft.client.particle.ParticleDragonBreath`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void onUpdate()`
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleDragonBreath.Factory

*class* `net.minecraft.client.particle.ParticleDragonBreath.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleDragonBreath

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleDrip

*class* `net.minecraft.client.particle.ParticleDrip`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public int getBrightnessForRender(float p_189214_1_)`
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `renderParticle`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleDrip.LavaFactory

*class* `net.minecraft.client.particle.ParticleDrip.LavaFactory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleDrip

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleDrip.WaterFactory

*class* `net.minecraft.client.particle.ParticleDrip.WaterFactory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleDrip

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleEmitter

*class* `net.minecraft.client.particle.ParticleEmitter`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public void onUpdate()`
- `public int getFXLayer()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleEnchantmentTable

*class* `net.minecraft.client.particle.ParticleEnchantmentTable`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void move(double x,  double y,  double z)`
- `public int getBrightnessForRender(float p_189214_1_)`
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `renderParticle`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleEnchantmentTable.EnchantmentTable

*class* `net.minecraft.client.particle.ParticleEnchantmentTable.EnchantmentTable`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleEnchantmentTable

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleEndRod

*class* `net.minecraft.client.particle.ParticleEndRod`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void move(double x,  double y,  double z)`

### Inherited methods
- from `net.minecraft.client.particle.ParticleSimpleAnimated`: `getBrightnessForRender`, `onUpdate`, `setBaseAirFriction`, `setColor`, `setColorFade`, `shouldDisableDepth`
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `renderParticle`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `toString`

## ParticleEndRod.Factory

*class* `net.minecraft.client.particle.ParticleEndRod.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleEndRod

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleExplosion

*class* `net.minecraft.client.particle.ParticleExplosion`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `renderParticle`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleExplosion.Factory

*class* `net.minecraft.client.particle.ParticleExplosion.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleExplosion

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleExplosionHuge

*class* `net.minecraft.client.particle.ParticleExplosionHuge`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public void onUpdate()`
- `public int getFXLayer()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleExplosionHuge.Factory

*class* `net.minecraft.client.particle.ParticleExplosionHuge.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleExplosionHuge

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleExplosionLarge

*class* `net.minecraft.client.particle.ParticleExplosionLarge`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public int getBrightnessForRender(float p_189214_1_)`
- `public void onUpdate()`
- `public int getFXLayer()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleExplosionLarge.Factory

*class* `net.minecraft.client.particle.ParticleExplosionLarge.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleExplosionLarge

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleFallingDust

*class* `net.minecraft.client.particle.ParticleFallingDust`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleFallingDust.Factory

*class* `net.minecraft.client.particle.ParticleFallingDust.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleFallingDust

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleFirework

*class* `net.minecraft.client.particle.ParticleFirework`

## ParticleFirework.Factory

*class* `net.minecraft.client.particle.ParticleFirework.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleFirework

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleFirework.Overlay

*class* `net.minecraft.client.particle.ParticleFirework.Overlay`

Enclosing class: ParticleFirework

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `onUpdate`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleFirework.Spark

*class* `net.minecraft.client.particle.ParticleFirework.Spark`

Enclosing class: ParticleFirework

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void setTrail(boolean trailIn)`
- `public void setTwinkle(boolean twinkleIn)`
- `public boolean shouldDisableDepth()`
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.ParticleSimpleAnimated`: `getBrightnessForRender`, `setBaseAirFriction`, `setColor`, `setColorFade`
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `toString`

## ParticleFirework.Starter

*class* `net.minecraft.client.particle.ParticleFirework.Starter`

Enclosing class: ParticleFirework

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public void onUpdate()`
- `public int getFXLayer()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleFlame

*class* `net.minecraft.client.particle.ParticleFlame`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void move(double x,  double y,  double z)`
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public int getBrightnessForRender(float p_189214_1_)`
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleFlame.Factory

*class* `net.minecraft.client.particle.ParticleFlame.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleFlame

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleFootStep

*class* `net.minecraft.client.particle.ParticleFootStep`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public void onUpdate()`
- `public int getFXLayer()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleFootStep.Factory

*class* `net.minecraft.client.particle.ParticleFootStep.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleFootStep

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleHeart

*class* `net.minecraft.client.particle.ParticleHeart`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleHeart.AngryVillagerFactory

*class* `net.minecraft.client.particle.ParticleHeart.AngryVillagerFactory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleHeart

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleHeart.Factory

*class* `net.minecraft.client.particle.ParticleHeart.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleHeart

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleItemPickup

*class* `net.minecraft.client.particle.ParticleItemPickup`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public void onUpdate()`
- `public int getFXLayer()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleLava

*class* `net.minecraft.client.particle.ParticleLava`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public int getBrightnessForRender(float p_189214_1_)`
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleLava.Factory

*class* `net.minecraft.client.particle.ParticleLava.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleLava

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleManager

*class* `net.minecraft.client.particle.ParticleManager`

### Fields
- `protected World world`

### Methods
- `public void registerParticle(int id,  IParticleFactory particleFactory)`
- `public void emitParticleAtEntity(Entity entityIn,  EnumParticleTypes particleTypes)`
- `public void emitParticleAtEntity(Entity p_191271_1_,  EnumParticleTypes p_191271_2_,  int p_191271_3_)`
- `public Particle spawnEffectParticle(int particleId,  double xCoord,  double yCoord,  double zCoord,  double xSpeed,  double ySpeed,  double zSpeed,  int... parameters)`
- `public void addEffect(Particle effect)`
- `public void updateEffects()`
- `public void renderParticles(Entity entityIn,  float partialTicks)`
- `public void renderLitParticles(Entity entityIn,  float partialTick)`
- `public void clearEffects(World worldIn)`
- `public void addBlockDestroyEffects(BlockPos pos,  IBlockState state)`
- `public void addBlockHitEffects(BlockPos pos,  EnumFacing side)`
- `public java.lang.String getStatistics()`
- `public void addBlockHitEffects(BlockPos pos,  RayTraceResult target)`

## ParticleMobAppearance

*class* `net.minecraft.client.particle.ParticleMobAppearance`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public int getFXLayer()`
- `public void onUpdate()`
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleMobAppearance.Factory

*class* `net.minecraft.client.particle.ParticleMobAppearance.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleMobAppearance

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleNote

*class* `net.minecraft.client.particle.ParticleNote`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleNote.Factory

*class* `net.minecraft.client.particle.ParticleNote.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleNote

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticlePortal

*class* `net.minecraft.client.particle.ParticlePortal`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void move(double x,  double y,  double z)`
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public int getBrightnessForRender(float p_189214_1_)`
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticlePortal.Factory

*class* `net.minecraft.client.particle.ParticlePortal.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticlePortal

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleRain

*class* `net.minecraft.client.particle.ParticleRain`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `renderParticle`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleRain.Factory

*class* `net.minecraft.client.particle.ParticleRain.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleRain

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleRedstone

*class* `net.minecraft.client.particle.ParticleRedstone`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleRedstone.Factory

*class* `net.minecraft.client.particle.ParticleRedstone.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleRedstone

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleSimpleAnimated

*class* `net.minecraft.client.particle.ParticleSimpleAnimated`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void setColor(int p_187146_1_)`
- `public void setColorFade(int rgb)`
- `public boolean shouldDisableDepth()`
- `public void onUpdate()`
- `public int getBrightnessForRender(float p_189214_1_)`
- `protected void setBaseAirFriction(float p_191238_1_)`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `renderParticle`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `toString`

## ParticleSmokeLarge

*class* `net.minecraft.client.particle.ParticleSmokeLarge`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Inherited methods
- from `net.minecraft.client.particle.ParticleSmokeNormal`: `onUpdate`, `renderParticle`
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleSmokeLarge.Factory

*class* `net.minecraft.client.particle.ParticleSmokeLarge.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleSmokeLarge

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleSmokeNormal

*class* `net.minecraft.client.particle.ParticleSmokeNormal`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleSmokeNormal.Factory

*class* `net.minecraft.client.particle.ParticleSmokeNormal.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleSmokeNormal

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleSnowShovel

*class* `net.minecraft.client.particle.ParticleSnowShovel`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleSnowShovel.Factory

*class* `net.minecraft.client.particle.ParticleSnowShovel.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleSnowShovel

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleSpell

*class* `net.minecraft.client.particle.ParticleSpell`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public boolean shouldDisableDepth()`
- `public void onUpdate()`
- `public void setBaseSpellTextureIndex(int baseSpellTextureIndexIn)`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `renderParticle`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `toString`

## ParticleSpell.AmbientMobFactory

*class* `net.minecraft.client.particle.ParticleSpell.AmbientMobFactory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleSpell

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleSpell.Factory

*class* `net.minecraft.client.particle.ParticleSpell.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleSpell

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleSpell.InstantFactory

*class* `net.minecraft.client.particle.ParticleSpell.InstantFactory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleSpell

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleSpell.MobFactory

*class* `net.minecraft.client.particle.ParticleSpell.MobFactory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleSpell

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleSpell.WitchFactory

*class* `net.minecraft.client.particle.ParticleSpell.WitchFactory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleSpell

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleSpit

*class* `net.minecraft.client.particle.ParticleSpit`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `renderParticle`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleSpit.Factory

*class* `net.minecraft.client.particle.ParticleSpit.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleSpit

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleSplash

*class* `net.minecraft.client.particle.ParticleSplash`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Inherited methods
- from `net.minecraft.client.particle.ParticleRain`: `onUpdate`
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `renderParticle`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleSplash.Factory

*class* `net.minecraft.client.particle.ParticleSplash.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleSplash

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleSuspend

*class* `net.minecraft.client.particle.ParticleSuspend`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `renderParticle`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleSuspend.Factory

*class* `net.minecraft.client.particle.ParticleSuspend.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleSuspend

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleSuspendedTown

*class* `net.minecraft.client.particle.ParticleSuspendedTown`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void move(double x,  double y,  double z)`
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `renderParticle`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleSuspendedTown.Factory

*class* `net.minecraft.client.particle.ParticleSuspendedTown.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleSuspendedTown

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleSuspendedTown.HappyVillagerFactory

*class* `net.minecraft.client.particle.ParticleSuspendedTown.HappyVillagerFactory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleSuspendedTown

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleSweepAttack

*class* `net.minecraft.client.particle.ParticleSweepAttack`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void renderParticle(BufferBuilder buffer,  Entity entityIn,  float partialTicks,  float rotationX,  float rotationZ,  float rotationYZ,  float rotationXY,  float rotationXZ)`
- `public int getBrightnessForRender(float p_189214_1_)`
- `public void onUpdate()`
- `public int getFXLayer()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleSweepAttack.Factory

*class* `net.minecraft.client.particle.ParticleSweepAttack.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleSweepAttack

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleTotem

*class* `net.minecraft.client.particle.ParticleTotem`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Inherited methods
- from `net.minecraft.client.particle.ParticleSimpleAnimated`: `getBrightnessForRender`, `onUpdate`, `setBaseAirFriction`, `setColor`, `setColorFade`, `shouldDisableDepth`
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `renderParticle`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `toString`

## ParticleTotem.Factory

*class* `net.minecraft.client.particle.ParticleTotem.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleTotem

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`

## ParticleWaterWake

*class* `net.minecraft.client.particle.ParticleWaterWake`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `cameraViewDir`, `canCollide`, `height`, `interpPosX`, `interpPosY`, `interpPosZ`, `isExpired`, `motionX`, `motionY`, `motionZ`, `onGround`, `particleAge`, `particleAlpha`, `particleAngle`, `particleBlue`, `particleGravity`, `particleGreen`, `particleMaxAge`, `particleRed`, `particleScale`, `particleTexture`, `particleTextureIndexX`, `particleTextureIndexY`, `particleTextureJitterX`, `particleTextureJitterY`, `posX`, `posY`, `posZ`, `prevParticleAngle`, `prevPosX`, `prevPosY`, `prevPosZ`, `rand`, `width`, `world`

### Methods
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBlueColorF`, `getBoundingBox`, `getBrightnessForRender`, `getFXLayer`, `getGreenColorF`, `getRedColorF`, `isAlive`, `move`, `multipleParticleScaleBy`, `multiplyVelocity`, `nextTextureIndexX`, `renderParticle`, `resetPositionToBB`, `setAlphaF`, `setBoundingBox`, `setExpired`, `setMaxAge`, `setParticleTexture`, `setParticleTextureIndex`, `setPosition`, `setRBGColorF`, `setSize`, `shouldDisableDepth`, `toString`

## ParticleWaterWake.Factory

*class* `net.minecraft.client.particle.ParticleWaterWake.Factory`

All Implemented Interfaces: IParticleFactory

Enclosing class: ParticleWaterWake

### Methods
- `public Particle createParticle(int particleID,  World worldIn,  double xCoordIn,  double yCoordIn,  double zCoordIn,  double xSpeedIn,  double ySpeedIn,  double zSpeedIn,  int... p_178902_15_)`
