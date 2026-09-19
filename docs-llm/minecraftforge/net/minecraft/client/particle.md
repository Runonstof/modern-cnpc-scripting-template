# net.minecraft.client.particle

- [AshParticle](#ashparticle)
- [AshParticle.Provider](#ashparticle.provider)
- [AttackSweepParticle](#attacksweepparticle)
- [AttackSweepParticle.Provider](#attacksweepparticle.provider)
- [BaseAshSmokeParticle](#baseashsmokeparticle)
- [BlockMarker](#blockmarker)
- [BlockMarker.Provider](#blockmarker.provider)
- [BreakingItemParticle](#breakingitemparticle)
- [BreakingItemParticle.Provider](#breakingitemparticle.provider)
- [BreakingItemParticle.SlimeProvider](#breakingitemparticle.slimeprovider)
- [BreakingItemParticle.SnowballProvider](#breakingitemparticle.snowballprovider)
- [BubbleColumnUpParticle](#bubblecolumnupparticle)
- [BubbleColumnUpParticle.Provider](#bubblecolumnupparticle.provider)
- [BubbleParticle](#bubbleparticle)
- [BubbleParticle.Provider](#bubbleparticle.provider)
- [BubblePopParticle](#bubblepopparticle)
- [BubblePopParticle.Provider](#bubblepopparticle.provider)
- [CampfireSmokeParticle](#campfiresmokeparticle)
- [CampfireSmokeParticle.CosyProvider](#campfiresmokeparticle.cosyprovider)
- [CampfireSmokeParticle.SignalProvider](#campfiresmokeparticle.signalprovider)
- [CherryParticle](#cherryparticle)
- [CritParticle](#critparticle)
- [CritParticle.DamageIndicatorProvider](#critparticle.damageindicatorprovider)
- [CritParticle.MagicProvider](#critparticle.magicprovider)
- [CritParticle.Provider](#critparticle.provider)
- [DragonBreathParticle](#dragonbreathparticle)
- [DragonBreathParticle.Provider](#dragonbreathparticle.provider)
- [DripParticle](#dripparticle)
- [DripParticle.CoolingDripHangParticle](#dripparticle.coolingdriphangparticle)
- [DripParticle.DripHangParticle](#dripparticle.driphangparticle)
- [DripParticle.DripLandParticle](#dripparticle.driplandparticle)
- [DripParticle.DripstoneFallAndLandParticle](#dripparticle.dripstonefallandlandparticle)
- [DripParticle.FallAndLandParticle](#dripparticle.fallandlandparticle)
- [DripParticle.FallingParticle](#dripparticle.fallingparticle)
- [DripParticle.HoneyFallAndLandParticle](#dripparticle.honeyfallandlandparticle)
- [DustColorTransitionParticle](#dustcolortransitionparticle)
- [DustColorTransitionParticle.Provider](#dustcolortransitionparticle.provider)
- [DustParticle](#dustparticle)
- [DustParticle.Provider](#dustparticle.provider)
- [DustParticleBase](#dustparticlebase)
- [EnchantmentTableParticle](#enchantmenttableparticle)
- [EnchantmentTableParticle.NautilusProvider](#enchantmenttableparticle.nautilusprovider)
- [EnchantmentTableParticle.Provider](#enchantmenttableparticle.provider)
- [EndRodParticle](#endrodparticle)
- [EndRodParticle.Provider](#endrodparticle.provider)
- [ExplodeParticle](#explodeparticle)
- [ExplodeParticle.Provider](#explodeparticle.provider)
- [FallingDustParticle](#fallingdustparticle)
- [FallingDustParticle.Provider](#fallingdustparticle.provider)
- [FireworkParticles](#fireworkparticles)
- [FireworkParticles.FlashProvider](#fireworkparticles.flashprovider)
- [FireworkParticles.OverlayParticle](#fireworkparticles.overlayparticle)
- [FireworkParticles.SparkParticle](#fireworkparticles.sparkparticle)
- [FireworkParticles.SparkProvider](#fireworkparticles.sparkprovider)
- [FireworkParticles.Starter](#fireworkparticles.starter)
- [FlameParticle](#flameparticle)
- [FlameParticle.Provider](#flameparticle.provider)
- [FlameParticle.SmallFlameProvider](#flameparticle.smallflameprovider)
- [GlowParticle](#glowparticle)
- [GlowParticle.ElectricSparkProvider](#glowparticle.electricsparkprovider)
- [GlowParticle.GlowSquidProvider](#glowparticle.glowsquidprovider)
- [GlowParticle.ScrapeProvider](#glowparticle.scrapeprovider)
- [GlowParticle.WaxOffProvider](#glowparticle.waxoffprovider)
- [GlowParticle.WaxOnProvider](#glowparticle.waxonprovider)
- [HeartParticle](#heartparticle)
- [HeartParticle.AngryVillagerProvider](#heartparticle.angryvillagerprovider)
- [HeartParticle.Provider](#heartparticle.provider)
- [HugeExplosionParticle](#hugeexplosionparticle)
- [HugeExplosionParticle.Provider](#hugeexplosionparticle.provider)
- [HugeExplosionSeedParticle](#hugeexplosionseedparticle)
- [HugeExplosionSeedParticle.Provider](#hugeexplosionseedparticle.provider)
- [ItemPickupParticle](#itempickupparticle)
- [LargeSmokeParticle](#largesmokeparticle)
- [LargeSmokeParticle.Provider](#largesmokeparticle.provider)
- [LavaParticle](#lavaparticle)
- [LavaParticle.Provider](#lavaparticle.provider)
- [MobAppearanceParticle](#mobappearanceparticle)
- [MobAppearanceParticle.Provider](#mobappearanceparticle.provider)
- [NoRenderParticle](#norenderparticle)
- [NoteParticle](#noteparticle)
- [NoteParticle.Provider](#noteparticle.provider)
- [Particle](#particle)
- [ParticleDescription](#particledescription)
- [ParticleEngine](#particleengine)
- [ParticleEngine.MutableSpriteSet](#particleengine.mutablespriteset)
- [ParticleEngine.SpriteParticleRegistration](#particleengine.spriteparticleregistration)
- [ParticleProvider](#particleprovider)
- [ParticleProvider.Sprite](#particleprovider.sprite)
- [ParticleRenderType](#particlerendertype)
- [PlayerCloudParticle](#playercloudparticle)
- [PlayerCloudParticle.Provider](#playercloudparticle.provider)
- [PlayerCloudParticle.SneezeProvider](#playercloudparticle.sneezeprovider)
- [PortalParticle](#portalparticle)
- [PortalParticle.Provider](#portalparticle.provider)
- [ReversePortalParticle](#reverseportalparticle)
- [ReversePortalParticle.ReversePortalProvider](#reverseportalparticle.reverseportalprovider)
- [RisingParticle](#risingparticle)
- [SculkChargeParticle](#sculkchargeparticle)
- [SculkChargeParticle.Provider](#sculkchargeparticle.provider)
- [SculkChargePopParticle](#sculkchargepopparticle)
- [SculkChargePopParticle.Provider](#sculkchargepopparticle.provider)
- [ShriekParticle](#shriekparticle)
- [ShriekParticle.Provider](#shriekparticle.provider)
- [SimpleAnimatedParticle](#simpleanimatedparticle)
- [SingleQuadParticle](#singlequadparticle)
- [SmokeParticle](#smokeparticle)
- [SmokeParticle.Provider](#smokeparticle.provider)
- [SnowflakeParticle](#snowflakeparticle)
- [SnowflakeParticle.Provider](#snowflakeparticle.provider)
- [SonicBoomParticle](#sonicboomparticle)
- [SonicBoomParticle.Provider](#sonicboomparticle.provider)
- [SoulParticle](#soulparticle)
- [SoulParticle.EmissiveProvider](#soulparticle.emissiveprovider)
- [SoulParticle.Provider](#soulparticle.provider)
- [SpellParticle](#spellparticle)
- [SpellParticle.AmbientMobProvider](#spellparticle.ambientmobprovider)
- [SpellParticle.InstantProvider](#spellparticle.instantprovider)
- [SpellParticle.MobProvider](#spellparticle.mobprovider)
- [SpellParticle.Provider](#spellparticle.provider)
- [SpellParticle.WitchProvider](#spellparticle.witchprovider)
- [SpitParticle](#spitparticle)
- [SpitParticle.Provider](#spitparticle.provider)
- [SplashParticle](#splashparticle)
- [SplashParticle.Provider](#splashparticle.provider)
- [SpriteSet](#spriteset)
- [SquidInkParticle](#squidinkparticle)
- [SquidInkParticle.GlowInkProvider](#squidinkparticle.glowinkprovider)
- [SquidInkParticle.Provider](#squidinkparticle.provider)
- [SuspendedParticle](#suspendedparticle)
- [SuspendedParticle.CrimsonSporeProvider](#suspendedparticle.crimsonsporeprovider)
- [SuspendedParticle.SporeBlossomAirProvider](#suspendedparticle.sporeblossomairprovider)
- [SuspendedParticle.UnderwaterProvider](#suspendedparticle.underwaterprovider)
- [SuspendedParticle.WarpedSporeProvider](#suspendedparticle.warpedsporeprovider)
- [SuspendedTownParticle](#suspendedtownparticle)
- [SuspendedTownParticle.ComposterFillProvider](#suspendedtownparticle.composterfillprovider)
- [SuspendedTownParticle.DolphinSpeedProvider](#suspendedtownparticle.dolphinspeedprovider)
- [SuspendedTownParticle.EggCrackProvider](#suspendedtownparticle.eggcrackprovider)
- [SuspendedTownParticle.HappyVillagerProvider](#suspendedtownparticle.happyvillagerprovider)
- [SuspendedTownParticle.Provider](#suspendedtownparticle.provider)
- [TerrainParticle](#terrainparticle)
- [TerrainParticle.Provider](#terrainparticle.provider)
- [TextureSheetParticle](#texturesheetparticle)
- [TotemParticle](#totemparticle)
- [TotemParticle.Provider](#totemparticle.provider)
- [TrackingEmitter](#trackingemitter)
- [VibrationSignalParticle](#vibrationsignalparticle)
- [VibrationSignalParticle.Provider](#vibrationsignalparticle.provider)
- [WakeParticle](#wakeparticle)
- [WakeParticle.Provider](#wakeparticle.provider)
- [WaterCurrentDownParticle](#watercurrentdownparticle)
- [WaterCurrentDownParticle.Provider](#watercurrentdownparticle.provider)
- [WaterDropParticle](#waterdropparticle)
- [WaterDropParticle.Provider](#waterdropparticle.provider)
- [WhiteAshParticle](#whiteashparticle)
- [WhiteAshParticle.Provider](#whiteashparticle.provider)
## AshParticle

*class* `net.minecraft.client.particle.AshParticle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Inherited methods
- from `net.minecraft.client.particle.BaseAshSmokeParticle`: `getQuadSize`, `getRenderType`, `tick`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## AshParticle.Provider

*class* `net.minecraft.client.particle.AshParticle.Provider`

Enclosing class: AshParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_105536_,  ClientLevel p_105537_,  double p_105538_,  double p_105539_,  double p_105540_,  double p_105541_,  double p_105542_,  double p_105543_)`

## AttackSweepParticle

*class* `net.minecraft.client.particle.AttackSweepParticle`

### Fields
- `private final SpriteSet sprites`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public int getLightColor(float p_105562_)`
- `public void tick()`
- `public ParticleRenderType getRenderType()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## AttackSweepParticle.Provider

*class* `net.minecraft.client.particle.AttackSweepParticle.Provider`

Enclosing class: AttackSweepParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_105577_,  ClientLevel p_105578_,  double p_105579_,  double p_105580_,  double p_105581_,  double p_105582_,  double p_105583_,  double p_105584_)`

## BaseAshSmokeParticle

*class* `net.minecraft.client.particle.BaseAshSmokeParticle`

### Fields
- `private final SpriteSet sprites`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public float getQuadSize(float p_105642_)`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## BlockMarker

*class* `net.minecraft.client.particle.BlockMarker`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public float getQuadSize(float p_194274_)`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `tick`, `toString`

## BlockMarker.Provider

*class* `net.minecraft.client.particle.BlockMarker.Provider`

Enclosing class: BlockMarker

### Methods
- `public Particle createParticle(BlockParticleOption p_194277_,  ClientLevel p_194278_,  double p_194279_,  double p_194280_,  double p_194281_,  double p_194282_,  double p_194283_,  double p_194284_)`

## BreakingItemParticle

*class* `net.minecraft.client.particle.BreakingItemParticle`

### Fields
- `private final float uo`
- `private final float vo`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `protected float getU0()`
- `protected float getU1()`
- `protected float getV0()`
- `protected float getV1()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `tick`, `toString`

## BreakingItemParticle.Provider

*class* `net.minecraft.client.particle.BreakingItemParticle.Provider`

Enclosing class: BreakingItemParticle

### Methods
- `public Particle createParticle(ItemParticleOption p_105677_,  ClientLevel p_105678_,  double p_105679_,  double p_105680_,  double p_105681_,  double p_105682_,  double p_105683_,  double p_105684_)`

## BreakingItemParticle.SlimeProvider

*class* `net.minecraft.client.particle.BreakingItemParticle.SlimeProvider`

Enclosing class: BreakingItemParticle

### Methods
- `public Particle createParticle(SimpleParticleType p_105705_,  ClientLevel p_105706_,  double p_105707_,  double p_105708_,  double p_105709_,  double p_105710_,  double p_105711_,  double p_105712_)`

## BreakingItemParticle.SnowballProvider

*class* `net.minecraft.client.particle.BreakingItemParticle.SnowballProvider`

Enclosing class: BreakingItemParticle

### Methods
- `public Particle createParticle(SimpleParticleType p_105724_,  ClientLevel p_105725_,  double p_105726_,  double p_105727_,  double p_105728_,  double p_105729_,  double p_105730_,  double p_105731_)`

## BubbleColumnUpParticle

*class* `net.minecraft.client.particle.BubbleColumnUpParticle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public void tick()`
- `public ParticleRenderType getRenderType()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## BubbleColumnUpParticle.Provider

*class* `net.minecraft.client.particle.BubbleColumnUpParticle.Provider`

Enclosing class: BubbleColumnUpParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_105764_,  ClientLevel p_105765_,  double p_105766_,  double p_105767_,  double p_105768_,  double p_105769_,  double p_105770_,  double p_105771_)`

## BubbleParticle

*class* `net.minecraft.client.particle.BubbleParticle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public void tick()`
- `public ParticleRenderType getRenderType()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## BubbleParticle.Provider

*class* `net.minecraft.client.particle.BubbleParticle.Provider`

Enclosing class: BubbleParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_105804_,  ClientLevel p_105805_,  double p_105806_,  double p_105807_,  double p_105808_,  double p_105809_,  double p_105810_,  double p_105811_)`

## BubblePopParticle

*class* `net.minecraft.client.particle.BubblePopParticle`

### Fields
- `private final SpriteSet sprites`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public void tick()`
- `public ParticleRenderType getRenderType()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## BubblePopParticle.Provider

*class* `net.minecraft.client.particle.BubblePopParticle.Provider`

Enclosing class: BubblePopParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_105847_,  ClientLevel p_105848_,  double p_105849_,  double p_105850_,  double p_105851_,  double p_105852_,  double p_105853_,  double p_105854_)`

## CampfireSmokeParticle

*class* `net.minecraft.client.particle.CampfireSmokeParticle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public void tick()`
- `public ParticleRenderType getRenderType()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## CampfireSmokeParticle.CosyProvider

*class* `net.minecraft.client.particle.CampfireSmokeParticle.CosyProvider`

Enclosing class: CampfireSmokeParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_105889_,  ClientLevel p_105890_,  double p_105891_,  double p_105892_,  double p_105893_,  double p_105894_,  double p_105895_,  double p_105896_)`

## CampfireSmokeParticle.SignalProvider

*class* `net.minecraft.client.particle.CampfireSmokeParticle.SignalProvider`

Enclosing class: CampfireSmokeParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_105910_,  ClientLevel p_105911_,  double p_105912_,  double p_105913_,  double p_105914_,  double p_105915_,  double p_105916_,  double p_105917_)`

## CherryParticle

*class* `net.minecraft.client.particle.CherryParticle`

### Fields
- `private static final float ACCELERATION_SCALE` (= 0.0024999999441206455f)
- `private static final int INITIAL_LIFETIME` (= 300)
- `private static final int CURVE_ENDPOINT_TIME` (= 300)
- `private static final float FALL_ACC` (= 0.25f)
- `private static final float WIND_BIG` (= 2.0f)
- `private float rotSpeed`
- `private final float particleRandom`
- `private final float spinAcceleration`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## CritParticle

*class* `net.minecraft.client.particle.CritParticle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public float getQuadSize(float p_105938_)`
- `public void tick()`
- `public ParticleRenderType getRenderType()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## CritParticle.DamageIndicatorProvider

*class* `net.minecraft.client.particle.CritParticle.DamageIndicatorProvider`

Enclosing class: CritParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_105952_,  ClientLevel p_105953_,  double p_105954_,  double p_105955_,  double p_105956_,  double p_105957_,  double p_105958_,  double p_105959_)`

## CritParticle.MagicProvider

*class* `net.minecraft.client.particle.CritParticle.MagicProvider`

Enclosing class: CritParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_105973_,  ClientLevel p_105974_,  double p_105975_,  double p_105976_,  double p_105977_,  double p_105978_,  double p_105979_,  double p_105980_)`

## CritParticle.Provider

*class* `net.minecraft.client.particle.CritParticle.Provider`

Enclosing class: CritParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_105994_,  ClientLevel p_105995_,  double p_105996_,  double p_105997_,  double p_105998_,  double p_105999_,  double p_106000_,  double p_106001_)`

## DragonBreathParticle

*class* `net.minecraft.client.particle.DragonBreathParticle`

### Fields
- `private static final int COLOR_MIN` (= 11993298)
- `private static final int COLOR_MAX` (= 14614777)
- `private static final float COLOR_MIN_RED` (= 0.7176470756530762f)
- `private static final float COLOR_MIN_GREEN` (= 0.0f)
- `private static final float COLOR_MIN_BLUE` (= 0.8235294222831726f)
- `private static final float COLOR_MAX_RED` (= 0.8745098114013672f)
- `private static final float COLOR_MAX_GREEN` (= 0.0f)
- `private static final float COLOR_MAX_BLUE` (= 0.9764705896377563f)
- `private boolean hasHitGround`
- `private final SpriteSet sprites`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public void tick()`
- `public ParticleRenderType getRenderType()`
- `public float getQuadSize(float p_106026_)`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## DragonBreathParticle.Provider

*class* `net.minecraft.client.particle.DragonBreathParticle.Provider`

Enclosing class: DragonBreathParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_106040_,  ClientLevel p_106041_,  double p_106042_,  double p_106043_,  double p_106044_,  double p_106045_,  double p_106046_,  double p_106047_)`

## DripParticle

*class* `net.minecraft.client.particle.DripParticle`

### Fields
- `private final Fluid type`
- `protected boolean isGlowing`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `protected Fluid getType()`
- `public ParticleRenderType getRenderType()`
- `public int getLightColor(float p_106065_)`
- `public void tick()`
- `protected void preMoveUpdate()`
- `protected void postMoveUpdate()`
- `public static TextureSheetParticle createWaterHangParticle(SimpleParticleType p_272626_,  ClientLevel p_273102_,  double p_273456_,  double p_272984_,  double p_273398_,  double p_272880_,  double p_273725_,  double p_273051_)`
- `public static TextureSheetParticle createWaterFallParticle(SimpleParticleType p_273627_,  ClientLevel p_273486_,  double p_273309_,  double p_273125_,  double p_272992_,  double p_273177_,  double p_273537_,  double p_272846_)`
- `public static TextureSheetParticle createLavaHangParticle(SimpleParticleType p_273228_,  ClientLevel p_273622_,  double p_273666_,  double p_273570_,  double p_273214_,  double p_273664_,  double p_273595_,  double p_272690_)`
- `public static TextureSheetParticle createLavaFallParticle(SimpleParticleType p_273238_,  ClientLevel p_273752_,  double p_272651_,  double p_273625_,  double p_273136_,  double p_273204_,  double p_272797_,  double p_273362_)`
- `public static TextureSheetParticle createLavaLandParticle(SimpleParticleType p_273607_,  ClientLevel p_272692_,  double p_273544_,  double p_272768_,  double p_272726_,  double p_273719_,  double p_272833_,  double p_272949_)`
- `public static TextureSheetParticle createHoneyHangParticle(SimpleParticleType p_273557_,  ClientLevel p_273367_,  double p_272749_,  double p_272697_,  double p_272849_,  double p_273144_,  double p_273170_,  double p_272932_)`
- `public static TextureSheetParticle createHoneyFallParticle(SimpleParticleType p_273140_,  ClientLevel p_273042_,  double p_272969_,  double p_273737_,  double p_273454_,  double p_273211_,  double p_273723_,  double p_273474_)`
- `public static TextureSheetParticle createHoneyLandParticle(SimpleParticleType p_273477_,  ClientLevel p_273770_,  double p_272822_,  double p_273147_,  double p_272597_,  double p_273614_,  double p_273085_,  double p_273097_)`
- `public static TextureSheetParticle createDripstoneWaterHangParticle(SimpleParticleType p_273781_,  ClientLevel p_272876_,  double p_273499_,  double p_273028_,  double p_273663_,  double p_273004_,  double p_272801_,  double p_272665_)`
- `public static TextureSheetParticle createDripstoneWaterFallParticle(SimpleParticleType p_272684_,  ClientLevel p_273226_,  double p_273142_,  double p_273070_,  double p_273153_,  double p_273735_,  double p_273317_,  double p_273234_)`
- `public static TextureSheetParticle createDripstoneLavaHangParticle(SimpleParticleType p_273453_,  ClientLevel p_273616_,  double p_272691_,  double p_272725_,  double p_273259_,  double p_273634_,  double p_273065_,  double p_273428_)`
- `public static TextureSheetParticle createDripstoneLavaFallParticle(SimpleParticleType p_272890_,  ClientLevel p_273172_,  double p_272954_,  double p_272803_,  double p_273427_,  double p_273081_,  double p_273047_,  double p_272960_)`
- `public static TextureSheetParticle createNectarFallParticle(SimpleParticleType p_273349_,  ClientLevel p_272672_,  double p_272820_,  double p_273386_,  double p_272886_,  double p_272935_,  double p_273715_,  double p_273202_)`
- `public static TextureSheetParticle createSporeBlossomFallParticle(SimpleParticleType p_273654_,  ClientLevel p_272678_,  double p_272637_,  double p_273253_,  double p_273293_,  double p_273363_,  double p_273132_,  double p_273215_)`
- `public static TextureSheetParticle createObsidianTearHangParticle(SimpleParticleType p_273120_,  ClientLevel p_272664_,  double p_272879_,  double p_272592_,  double p_272967_,  double p_272834_,  double p_273440_,  double p_272888_)`
- `public static TextureSheetParticle createObsidianTearFallParticle(SimpleParticleType p_272859_,  ClientLevel p_273478_,  double p_273621_,  double p_273279_,  double p_273227_,  double p_273061_,  double p_273257_,  double p_273164_)`
- `public static TextureSheetParticle createObsidianTearLandParticle(SimpleParticleType p_272836_,  ClientLevel p_273162_,  double p_273543_,  double p_273247_,  double p_272921_,  double p_273397_,  double p_273472_,  double p_273488_)`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## DripParticle.CoolingDripHangParticle

*class* `net.minecraft.client.particle.DripParticle.CoolingDripHangParticle`

Enclosing class: DripParticle

### Inherited fields
- from `net.minecraft.client.particle.DripParticle`: `isGlowing`
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `protected void preMoveUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.DripParticle.DripHangParticle`: `postMoveUpdate`
- from `net.minecraft.client.particle.DripParticle`: `createDripstoneLavaFallParticle`, `createDripstoneLavaHangParticle`, `createDripstoneWaterFallParticle`, `createDripstoneWaterHangParticle`, `createHoneyFallParticle`, `createHoneyHangParticle`, `createHoneyLandParticle`, `createLavaFallParticle`, `createLavaHangParticle`, `createLavaLandParticle`, `createNectarFallParticle`, `createObsidianTearFallParticle`, `createObsidianTearHangParticle`, `createObsidianTearLandParticle`, `createSporeBlossomFallParticle`, `createWaterFallParticle`, `createWaterHangParticle`, `getLightColor`, `getRenderType`, `getType`, `tick`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## DripParticle.DripHangParticle

*class* `net.minecraft.client.particle.DripParticle.DripHangParticle`

Enclosing class: DripParticle

### Fields
- `private final ParticleOptions fallingParticle`

### Inherited fields
- from `net.minecraft.client.particle.DripParticle`: `isGlowing`
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `protected void preMoveUpdate()`
- `protected void postMoveUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.DripParticle`: `createDripstoneLavaFallParticle`, `createDripstoneLavaHangParticle`, `createDripstoneWaterFallParticle`, `createDripstoneWaterHangParticle`, `createHoneyFallParticle`, `createHoneyHangParticle`, `createHoneyLandParticle`, `createLavaFallParticle`, `createLavaHangParticle`, `createLavaLandParticle`, `createNectarFallParticle`, `createObsidianTearFallParticle`, `createObsidianTearHangParticle`, `createObsidianTearLandParticle`, `createSporeBlossomFallParticle`, `createWaterFallParticle`, `createWaterHangParticle`, `getLightColor`, `getRenderType`, `getType`, `tick`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## DripParticle.DripLandParticle

*class* `net.minecraft.client.particle.DripParticle.DripLandParticle`

Enclosing class: DripParticle

### Inherited fields
- from `net.minecraft.client.particle.DripParticle`: `isGlowing`
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Inherited methods
- from `net.minecraft.client.particle.DripParticle`: `createDripstoneLavaFallParticle`, `createDripstoneLavaHangParticle`, `createDripstoneWaterFallParticle`, `createDripstoneWaterHangParticle`, `createHoneyFallParticle`, `createHoneyHangParticle`, `createHoneyLandParticle`, `createLavaFallParticle`, `createLavaHangParticle`, `createLavaLandParticle`, `createNectarFallParticle`, `createObsidianTearFallParticle`, `createObsidianTearHangParticle`, `createObsidianTearLandParticle`, `createSporeBlossomFallParticle`, `createWaterFallParticle`, `createWaterHangParticle`, `getLightColor`, `getRenderType`, `getType`, `postMoveUpdate`, `preMoveUpdate`, `tick`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## DripParticle.DripstoneFallAndLandParticle

*class* `net.minecraft.client.particle.DripParticle.DripstoneFallAndLandParticle`

Enclosing class: DripParticle

### Inherited fields
- from `net.minecraft.client.particle.DripParticle.FallAndLandParticle`: `landParticle`
- from `net.minecraft.client.particle.DripParticle`: `isGlowing`
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `protected void postMoveUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.DripParticle`: `createDripstoneLavaFallParticle`, `createDripstoneLavaHangParticle`, `createDripstoneWaterFallParticle`, `createDripstoneWaterHangParticle`, `createHoneyFallParticle`, `createHoneyHangParticle`, `createHoneyLandParticle`, `createLavaFallParticle`, `createLavaHangParticle`, `createLavaLandParticle`, `createNectarFallParticle`, `createObsidianTearFallParticle`, `createObsidianTearHangParticle`, `createObsidianTearLandParticle`, `createSporeBlossomFallParticle`, `createWaterFallParticle`, `createWaterHangParticle`, `getLightColor`, `getRenderType`, `getType`, `preMoveUpdate`, `tick`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## DripParticle.FallAndLandParticle

*class* `net.minecraft.client.particle.DripParticle.FallAndLandParticle`

Enclosing class: DripParticle

### Fields
- `protected final ParticleOptions landParticle`

### Inherited fields
- from `net.minecraft.client.particle.DripParticle`: `isGlowing`
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `protected void postMoveUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.DripParticle`: `createDripstoneLavaFallParticle`, `createDripstoneLavaHangParticle`, `createDripstoneWaterFallParticle`, `createDripstoneWaterHangParticle`, `createHoneyFallParticle`, `createHoneyHangParticle`, `createHoneyLandParticle`, `createLavaFallParticle`, `createLavaHangParticle`, `createLavaLandParticle`, `createNectarFallParticle`, `createObsidianTearFallParticle`, `createObsidianTearHangParticle`, `createObsidianTearLandParticle`, `createSporeBlossomFallParticle`, `createWaterFallParticle`, `createWaterHangParticle`, `getLightColor`, `getRenderType`, `getType`, `preMoveUpdate`, `tick`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## DripParticle.FallingParticle

*class* `net.minecraft.client.particle.DripParticle.FallingParticle`

Enclosing class: DripParticle

### Inherited fields
- from `net.minecraft.client.particle.DripParticle`: `isGlowing`
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `protected void postMoveUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.DripParticle`: `createDripstoneLavaFallParticle`, `createDripstoneLavaHangParticle`, `createDripstoneWaterFallParticle`, `createDripstoneWaterHangParticle`, `createHoneyFallParticle`, `createHoneyHangParticle`, `createHoneyLandParticle`, `createLavaFallParticle`, `createLavaHangParticle`, `createLavaLandParticle`, `createNectarFallParticle`, `createObsidianTearFallParticle`, `createObsidianTearHangParticle`, `createObsidianTearLandParticle`, `createSporeBlossomFallParticle`, `createWaterFallParticle`, `createWaterHangParticle`, `getLightColor`, `getRenderType`, `getType`, `preMoveUpdate`, `tick`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## DripParticle.HoneyFallAndLandParticle

*class* `net.minecraft.client.particle.DripParticle.HoneyFallAndLandParticle`

Enclosing class: DripParticle

### Inherited fields
- from `net.minecraft.client.particle.DripParticle.FallAndLandParticle`: `landParticle`
- from `net.minecraft.client.particle.DripParticle`: `isGlowing`
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `protected void postMoveUpdate()`

### Inherited methods
- from `net.minecraft.client.particle.DripParticle`: `createDripstoneLavaFallParticle`, `createDripstoneLavaHangParticle`, `createDripstoneWaterFallParticle`, `createDripstoneWaterHangParticle`, `createHoneyFallParticle`, `createHoneyHangParticle`, `createHoneyLandParticle`, `createLavaFallParticle`, `createLavaHangParticle`, `createLavaLandParticle`, `createNectarFallParticle`, `createObsidianTearFallParticle`, `createObsidianTearHangParticle`, `createObsidianTearLandParticle`, `createSporeBlossomFallParticle`, `createWaterFallParticle`, `createWaterHangParticle`, `getLightColor`, `getRenderType`, `getType`, `preMoveUpdate`, `tick`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## DustColorTransitionParticle

*class* `net.minecraft.client.particle.DustColorTransitionParticle`

### Fields
- `private final org.joml.Vector3f fromColor`
- `private final org.joml.Vector3f toColor`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `private org.joml.Vector3f randomizeColor(org.joml.Vector3f p_254318_,  float p_254472_)`
- `private void lerpColors(float p_172070_)`
- `public void render(VertexConsumer p_172063_,  Camera p_172064_,  float p_172065_)`

### Inherited methods
- from `net.minecraft.client.particle.DustParticleBase`: `getQuadSize`, `getRenderType`, `randomizeColor`, `tick`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## DustColorTransitionParticle.Provider

*class* `net.minecraft.client.particle.DustColorTransitionParticle.Provider`

Enclosing class: DustColorTransitionParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(DustColorTransitionOptions p_172075_,  ClientLevel p_172076_,  double p_172077_,  double p_172078_,  double p_172079_,  double p_172080_,  double p_172081_,  double p_172082_)`

## DustParticle

*class* `net.minecraft.client.particle.DustParticle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Inherited methods
- from `net.minecraft.client.particle.DustParticleBase`: `getQuadSize`, `getRenderType`, `randomizeColor`, `tick`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## DustParticle.Provider

*class* `net.minecraft.client.particle.DustParticle.Provider`

Enclosing class: DustParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(DustParticleOptions p_106443_,  ClientLevel p_106444_,  double p_106445_,  double p_106446_,  double p_106447_,  double p_106448_,  double p_106449_,  double p_106450_)`

## DustParticleBase

*class* `net.minecraft.client.particle.DustParticleBase`

### Fields
- `private final SpriteSet sprites`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `protected float randomizeColor(float p_172105_,  float p_172106_)`
- `public ParticleRenderType getRenderType()`
- `public float getQuadSize(float p_172109_)`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## EnchantmentTableParticle

*class* `net.minecraft.client.particle.EnchantmentTableParticle`

### Fields
- `private final double xStart`
- `private final double yStart`
- `private final double zStart`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public void move(double p_106482_,  double p_106483_,  double p_106484_)`
- `public int getLightColor(float p_106486_)`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## EnchantmentTableParticle.NautilusProvider

*class* `net.minecraft.client.particle.EnchantmentTableParticle.NautilusProvider`

Enclosing class: EnchantmentTableParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_106501_,  ClientLevel p_106502_,  double p_106503_,  double p_106504_,  double p_106505_,  double p_106506_,  double p_106507_,  double p_106508_)`

## EnchantmentTableParticle.Provider

*class* `net.minecraft.client.particle.EnchantmentTableParticle.Provider`

Enclosing class: EnchantmentTableParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_106522_,  ClientLevel p_106523_,  double p_106524_,  double p_106525_,  double p_106526_,  double p_106527_,  double p_106528_,  double p_106529_)`

## EndRodParticle

*class* `net.minecraft.client.particle.EndRodParticle`

### Inherited fields
- from `net.minecraft.client.particle.SimpleAnimatedParticle`: `sprites`
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public void move(double p_106550_,  double p_106551_,  double p_106552_)`

### Inherited methods
- from `net.minecraft.client.particle.SimpleAnimatedParticle`: `getLightColor`, `getRenderType`, `setColor`, `setFadeColor`, `tick`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## EndRodParticle.Provider

*class* `net.minecraft.client.particle.EndRodParticle.Provider`

Enclosing class: EndRodParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_106566_,  ClientLevel p_106567_,  double p_106568_,  double p_106569_,  double p_106570_,  double p_106571_,  double p_106572_,  double p_106573_)`

## ExplodeParticle

*class* `net.minecraft.client.particle.ExplodeParticle`

### Fields
- `private final SpriteSet sprites`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## ExplodeParticle.Provider

*class* `net.minecraft.client.particle.ExplodeParticle.Provider`

Enclosing class: ExplodeParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_106599_,  ClientLevel p_106600_,  double p_106601_,  double p_106602_,  double p_106603_,  double p_106604_,  double p_106605_,  double p_106606_)`

## FallingDustParticle

*class* `net.minecraft.client.particle.FallingDustParticle`

### Fields
- `private final float rotSpeed`
- `private final SpriteSet sprites`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public float getQuadSize(float p_106631_)`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## FallingDustParticle.Provider

*class* `net.minecraft.client.particle.FallingDustParticle.Provider`

Enclosing class: FallingDustParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `@Nullable public Particle createParticle(BlockParticleOption p_106636_,  ClientLevel p_106637_,  double p_106638_,  double p_106639_,  double p_106640_,  double p_106641_,  double p_106642_,  double p_106643_)`

## FireworkParticles

*class* `net.minecraft.client.particle.FireworkParticles`

## FireworkParticles.FlashProvider

*class* `net.minecraft.client.particle.FireworkParticles.FlashProvider`

Enclosing class: FireworkParticles

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_106668_,  ClientLevel p_106669_,  double p_106670_,  double p_106671_,  double p_106672_,  double p_106673_,  double p_106674_,  double p_106675_)`

## FireworkParticles.OverlayParticle

*class* `net.minecraft.client.particle.FireworkParticles.OverlayParticle`

Enclosing class: FireworkParticles

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public void render(VertexConsumer p_106688_,  Camera p_106689_,  float p_106690_)`
- `public float getQuadSize(float p_106693_)`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `tick`, `toString`

## FireworkParticles.SparkParticle

*class* `net.minecraft.client.particle.FireworkParticles.SparkParticle`

Enclosing class: FireworkParticles

### Fields
- `private boolean trail`
- `private boolean flicker`
- `private final ParticleEngine engine`
- `private float fadeR`
- `private float fadeG`
- `private float fadeB`
- `private boolean hasFade`

### Inherited fields
- from `net.minecraft.client.particle.SimpleAnimatedParticle`: `sprites`
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public void setTrail(boolean p_106728_)`
- `public void setFlicker(boolean p_106730_)`
- `public void render(VertexConsumer p_106724_,  Camera p_106725_,  float p_106726_)`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.SimpleAnimatedParticle`: `getLightColor`, `getRenderType`, `setColor`, `setFadeColor`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## FireworkParticles.SparkProvider

*class* `net.minecraft.client.particle.FireworkParticles.SparkProvider`

Enclosing class: FireworkParticles

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_106744_,  ClientLevel p_106745_,  double p_106746_,  double p_106747_,  double p_106748_,  double p_106749_,  double p_106750_,  double p_106751_)`

## FireworkParticles.Starter

*class* `net.minecraft.client.particle.FireworkParticles.Starter`

Enclosing class: FireworkParticles

### Fields
- `private int life`
- `private final ParticleEngine engine`
- `private ListTag explosions`
- `private boolean twinkleDelay`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public void tick()`
- `private boolean isFarAwayFromCamera()`
- `public void createParticle(double p_106768_,  double p_106769_,  double p_106770_,  double p_106771_,  double p_106772_,  double p_106773_,  int[] p_106774_,  int[] p_106775_,  boolean p_106776_,  boolean p_106777_)`
- `public void createParticleBall(double p_106779_,  int p_106780_,  int[] p_106781_,  int[] p_106782_,  boolean p_106783_,  boolean p_106784_)`
- `public void createParticleShape(double p_106786_,  double[][] p_106787_,  int[] p_106788_,  int[] p_106789_,  boolean p_106790_,  boolean p_106791_,  boolean p_106792_)`
- `public void createParticleBurst(int[] p_106794_,  int[] p_106795_,  boolean p_106796_,  boolean p_106797_)`

### Inherited methods
- from `net.minecraft.client.particle.NoRenderParticle`: `getRenderType`, `render`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `scale`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## FlameParticle

*class* `net.minecraft.client.particle.FlameParticle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public void move(double p_106817_,  double p_106818_,  double p_106819_)`
- `public float getQuadSize(float p_106824_)`
- `public int getLightColor(float p_106821_)`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `tick`, `toString`

## FlameParticle.Provider

*class* `net.minecraft.client.particle.FlameParticle.Provider`

Enclosing class: FlameParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_106838_,  ClientLevel p_106839_,  double p_106840_,  double p_106841_,  double p_106842_,  double p_106843_,  double p_106844_,  double p_106845_)`

## FlameParticle.SmallFlameProvider

*class* `net.minecraft.client.particle.FlameParticle.SmallFlameProvider`

Enclosing class: FlameParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_172124_,  ClientLevel p_172125_,  double p_172126_,  double p_172127_,  double p_172128_,  double p_172129_,  double p_172130_,  double p_172131_)`

## GlowParticle

*class* `net.minecraft.client.particle.GlowParticle`

### Fields
- `static final RandomSource RANDOM`
- `private final SpriteSet sprites`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public int getLightColor(float p_172146_)`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## GlowParticle.ElectricSparkProvider

*class* `net.minecraft.client.particle.GlowParticle.ElectricSparkProvider`

Enclosing class: GlowParticle

### Fields
- `private final double SPEED_FACTOR` (= 0.25)
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_172162_,  ClientLevel p_172163_,  double p_172164_,  double p_172165_,  double p_172166_,  double p_172167_,  double p_172168_,  double p_172169_)`

## GlowParticle.GlowSquidProvider

*class* `net.minecraft.client.particle.GlowParticle.GlowSquidProvider`

Enclosing class: GlowParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_172183_,  ClientLevel p_172184_,  double p_172185_,  double p_172186_,  double p_172187_,  double p_172188_,  double p_172189_,  double p_172190_)`

## GlowParticle.ScrapeProvider

*class* `net.minecraft.client.particle.GlowParticle.ScrapeProvider`

Enclosing class: GlowParticle

### Fields
- `private final double SPEED_FACTOR` (= 0.01)
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_172205_,  ClientLevel p_172206_,  double p_172207_,  double p_172208_,  double p_172209_,  double p_172210_,  double p_172211_,  double p_172212_)`

## GlowParticle.WaxOffProvider

*class* `net.minecraft.client.particle.GlowParticle.WaxOffProvider`

Enclosing class: GlowParticle

### Fields
- `private final double SPEED_FACTOR` (= 0.01)
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_172227_,  ClientLevel p_172228_,  double p_172229_,  double p_172230_,  double p_172231_,  double p_172232_,  double p_172233_,  double p_172234_)`

## GlowParticle.WaxOnProvider

*class* `net.minecraft.client.particle.GlowParticle.WaxOnProvider`

Enclosing class: GlowParticle

### Fields
- `private final double SPEED_FACTOR` (= 0.01)
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_172249_,  ClientLevel p_172250_,  double p_172251_,  double p_172252_,  double p_172253_,  double p_172254_,  double p_172255_,  double p_172256_)`

## HeartParticle

*class* `net.minecraft.client.particle.HeartParticle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public float getQuadSize(float p_106860_)`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `tick`, `toString`

## HeartParticle.AngryVillagerProvider

*class* `net.minecraft.client.particle.HeartParticle.AngryVillagerProvider`

Enclosing class: HeartParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_106874_,  ClientLevel p_106875_,  double p_106876_,  double p_106877_,  double p_106878_,  double p_106879_,  double p_106880_,  double p_106881_)`

## HeartParticle.Provider

*class* `net.minecraft.client.particle.HeartParticle.Provider`

Enclosing class: HeartParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_106895_,  ClientLevel p_106896_,  double p_106897_,  double p_106898_,  double p_106899_,  double p_106900_,  double p_106901_,  double p_106902_)`

## HugeExplosionParticle

*class* `net.minecraft.client.particle.HugeExplosionParticle`

### Fields
- `private final SpriteSet sprites`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public int getLightColor(float p_106921_)`
- `public void tick()`
- `public ParticleRenderType getRenderType()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## HugeExplosionParticle.Provider

*class* `net.minecraft.client.particle.HugeExplosionParticle.Provider`

Enclosing class: HugeExplosionParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_106936_,  ClientLevel p_106937_,  double p_106938_,  double p_106939_,  double p_106940_,  double p_106941_,  double p_106942_,  double p_106943_)`

## HugeExplosionSeedParticle

*class* `net.minecraft.client.particle.HugeExplosionSeedParticle`

### Fields
- `private int life`
- `private final int lifeTime` (= 8)

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.NoRenderParticle`: `getRenderType`, `render`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `scale`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## HugeExplosionSeedParticle.Provider

*class* `net.minecraft.client.particle.HugeExplosionSeedParticle.Provider`

Enclosing class: HugeExplosionSeedParticle

### Methods
- `public Particle createParticle(SimpleParticleType p_106969_,  ClientLevel p_106970_,  double p_106971_,  double p_106972_,  double p_106973_,  double p_106974_,  double p_106975_,  double p_106976_)`

## ItemPickupParticle

*class* `net.minecraft.client.particle.ItemPickupParticle`

### Fields
- `private static final int LIFE_TIME` (= 3)
- `private final RenderBuffers renderBuffers`
- `private final Entity itemEntity`
- `private final Entity target`
- `private int life`
- `private final EntityRenderDispatcher entityRenderDispatcher`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `private Entity getSafeCopy(Entity p_107037_)`
- `public ParticleRenderType getRenderType()`
- `public void render(VertexConsumer p_107039_,  Camera p_107040_,  float p_107041_)`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `scale`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## LargeSmokeParticle

*class* `net.minecraft.client.particle.LargeSmokeParticle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Inherited methods
- from `net.minecraft.client.particle.BaseAshSmokeParticle`: `getQuadSize`, `getRenderType`, `tick`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## LargeSmokeParticle.Provider

*class* `net.minecraft.client.particle.LargeSmokeParticle.Provider`

Enclosing class: LargeSmokeParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_107065_,  ClientLevel p_107066_,  double p_107067_,  double p_107068_,  double p_107069_,  double p_107070_,  double p_107071_,  double p_107072_)`

## LavaParticle

*class* `net.minecraft.client.particle.LavaParticle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public int getLightColor(float p_107086_)`
- `public float getQuadSize(float p_107089_)`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## LavaParticle.Provider

*class* `net.minecraft.client.particle.LavaParticle.Provider`

Enclosing class: LavaParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_107103_,  ClientLevel p_107104_,  double p_107105_,  double p_107106_,  double p_107107_,  double p_107108_,  double p_107109_,  double p_107110_)`

## MobAppearanceParticle

*class* `net.minecraft.client.particle.MobAppearanceParticle`

### Fields
- `private final Model model`
- `private final RenderType renderType`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public void render(VertexConsumer p_107125_,  Camera p_107126_,  float p_107127_)`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `scale`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `tick`, `toString`

## MobAppearanceParticle.Provider

*class* `net.minecraft.client.particle.MobAppearanceParticle.Provider`

Enclosing class: MobAppearanceParticle

### Methods
- `public Particle createParticle(SimpleParticleType p_107140_,  ClientLevel p_107141_,  double p_107142_,  double p_107143_,  double p_107144_,  double p_107145_,  double p_107146_,  double p_107147_)`

## NoRenderParticle

*class* `net.minecraft.client.particle.NoRenderParticle`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public final void render(VertexConsumer p_107162_,  Camera p_107163_,  float p_107164_)`
- `public ParticleRenderType getRenderType()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `scale`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `tick`, `toString`

## NoteParticle

*class* `net.minecraft.client.particle.NoteParticle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public float getQuadSize(float p_107182_)`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `tick`, `toString`

## NoteParticle.Provider

*class* `net.minecraft.client.particle.NoteParticle.Provider`

Enclosing class: NoteParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_107196_,  ClientLevel p_107197_,  double p_107198_,  double p_107199_,  double p_107200_,  double p_107201_,  double p_107202_,  double p_107203_)`

## Particle

*class* `net.minecraft.client.particle.Particle`

### Fields
- `private static final AABB INITIAL_AABB`
- `private static final double MAXIMUM_COLLISION_VELOCITY_SQUARED`
- `protected final ClientLevel level`
- `protected double xo`
- `protected double yo`
- `protected double zo`
- `protected double x`
- `protected double y`
- `protected double z`
- `protected double xd`
- `protected double yd`
- `protected double zd`
- `private AABB bb`
- `protected boolean onGround`
- `protected boolean hasPhysics`
- `private boolean stoppedByCollision`
- `protected boolean removed`
- `protected float bbWidth`
- `protected float bbHeight`
- `protected final RandomSource random`
- `protected int age`
- `protected int lifetime`
- `protected float gravity`
- `protected float rCol`
- `protected float gCol`
- `protected float bCol`
- `protected float alpha`
- `protected float roll`
- `protected float oRoll`
- `protected float friction`
- `protected boolean speedUpWhenYMotionIsBlocked`

### Methods
- `public Particle setPower(float p_107269_)`
- `public void setParticleSpeed(double p_172261_,  double p_172262_,  double p_172263_)`
- `public Particle scale(float p_107270_)`
- `public void setColor(float p_107254_,  float p_107255_,  float p_107256_)`
- `protected void setAlpha(float p_107272_)`
- `public void setLifetime(int p_107258_)`
- `public int getLifetime()`
- `public void tick()`
- `public abstract void render(VertexConsumer p_107261_,  Camera p_107262_,  float p_107263_)`
- `public abstract ParticleRenderType getRenderType()`
- `public String toString()`
- `public void remove()`
- `protected void setSize(float p_107251_,  float p_107252_)`
- `public void setPos(double p_107265_,  double p_107266_,  double p_107267_)`
- `public void move(double p_107246_,  double p_107247_,  double p_107248_)`
- `protected void setLocationFromBoundingbox()`
- `protected int getLightColor(float p_107249_)`
- `public boolean isAlive()`
- `public AABB getBoundingBox()`
- `public void setBoundingBox(AABB p_107260_)`
- `public Optional<ParticleGroup> getParticleGroup()`
- `public boolean shouldCull()`
  Forge added method that controls if a particle should be culled to it's bounding box.
   Default behaviour is culling enabled
- `public Vec3 getPos()`

## ParticleDescription

*class* `net.minecraft.client.particle.ParticleDescription`

### Fields
- `private final List<ResourceLocation> textures`

### Methods
- `public List<ResourceLocation> getTextures()`
- `public static ParticleDescription fromJson(com.google.gson.JsonObject p_107286_)`

## ParticleEngine

*class* `net.minecraft.client.particle.ParticleEngine`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final FileToIdConverter PARTICLE_LISTER`
- `private static final ResourceLocation PARTICLES_ATLAS_INFO`
- `private static final int MAX_PARTICLES_PER_LAYER` (= 16384)
- `private static final List<ParticleRenderType> RENDER_ORDER`
- `protected ClientLevel level`
- `private final Map<ParticleRenderType,Queue<Particle>> particles`
- `private final Queue<TrackingEmitter> trackingEmitters`
- `private final TextureManager textureManager`
- `private final RandomSource random`
- `private final Map<ResourceLocation,ParticleProvider<?>> providers`
- `private final Queue<Particle> particlesToAdd`
- `private final Map<ResourceLocation,ParticleEngine.MutableSpriteSet> spriteSets`
- `private final TextureAtlas textureAtlas`
- `private final it.unimi.dsi.fastutil.objects.Object2IntOpenHashMap<ParticleGroup> trackedParticleCounts`

### Methods
- `private void registerProviders()`
- `@Deprecated public <T extends ParticleOptions> void register(ParticleType<T> p_107382_,  ParticleProvider<T> p_107383_)` (deprecated)
- `@Deprecated public <T extends ParticleOptions> void register(ParticleType<T> p_273423_,  ParticleProvider.Sprite<T> p_273134_)` (deprecated)
- `@Deprecated public <T extends ParticleOptions> void register(ParticleType<T> p_107379_,  ParticleEngine.SpriteParticleRegistration<T> p_107380_)` (deprecated)
- `public CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier p_107305_,  ResourceManager p_107306_,  ProfilerFiller p_107307_,  ProfilerFiller p_107308_,  Executor p_107309_,  Executor p_107310_)`
- `public void close()`
- `private Optional<List<ResourceLocation>> loadParticleDescription(ResourceLocation p_250648_,  Resource p_248793_)`
- `public void createTrackingEmitter(Entity p_107330_,  ParticleOptions p_107331_)`
- `public void createTrackingEmitter(Entity p_107333_,  ParticleOptions p_107334_,  int p_107335_)`
- `@Nullable public Particle createParticle(ParticleOptions p_107371_,  double p_107372_,  double p_107373_,  double p_107374_,  double p_107375_,  double p_107376_,  double p_107377_)`
- `@Nullable private <T extends ParticleOptions> Particle makeParticle(T p_107396_,  double p_107397_,  double p_107398_,  double p_107399_,  double p_107400_,  double p_107401_,  double p_107402_)`
- `public void add(Particle p_107345_)`
- `public void tick()`
- `private void tickParticleList(Collection<Particle> p_107385_)`
- `private void updateCount(ParticleGroup p_172282_,  int p_172283_)`
- `private void tickParticle(Particle p_107394_)`
- `@Deprecated public void render(PoseStack p_107337_,  MultiBufferSource.BufferSource p_107338_,  LightTexture p_107339_,  Camera p_107340_,  float p_107341_)` (deprecated)
- `public void render(PoseStack p_107337_,  MultiBufferSource.BufferSource p_107338_,  LightTexture p_107339_,  Camera p_107340_,  float p_107341_,  @Nullable  Frustum clippingHelper)`
- `public void setLevel(@Nullable  ClientLevel p_107343_)`
- `public void destroy(BlockPos p_107356_,  BlockState p_107357_)`
- `public void crack(BlockPos p_107368_,  Direction p_107369_)`
- `public String countParticles()`
- `public void addBlockHitEffects(BlockPos pos,  BlockHitResult target)`
- `private boolean hasSpaceInParticleLimit(ParticleGroup p_172280_)`
- `private void clearParticles()`

### Inherited methods
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## ParticleEngine.MutableSpriteSet

*class* `net.minecraft.client.particle.ParticleEngine.MutableSpriteSet`

Enclosing class: ParticleEngine

### Fields
- `private List<TextureAtlasSprite> sprites`

### Methods
- `public TextureAtlasSprite get(int p_107413_,  int p_107414_)`
- `public TextureAtlasSprite get(RandomSource p_233889_)`
- `public void rebind(List<TextureAtlasSprite> p_107416_)`

## ParticleEngine.SpriteParticleRegistration

*interface* `net.minecraft.client.particle.ParticleEngine.SpriteParticleRegistration`

Enclosing class: ParticleEngine

### Methods
- `ParticleProvider<T> create(SpriteSet p_107420_)`

## ParticleProvider

*interface* `net.minecraft.client.particle.ParticleProvider`

### Methods
- `@Nullable Particle createParticle(T p_107421_,  ClientLevel p_107422_,  double p_107423_,  double p_107424_,  double p_107425_,  double p_107426_,  double p_107427_,  double p_107428_)`

## ParticleProvider.Sprite

*interface* `net.minecraft.client.particle.ParticleProvider.Sprite`

Enclosing interface: ParticleProvider<T extends ParticleOptions>

### Methods
- `@Nullable TextureSheetParticle createParticle(T p_273550_,  ClientLevel p_273071_,  double p_273160_,  double p_273576_,  double p_272710_,  double p_273652_,  double p_273457_,  double p_272840_)`

## ParticleRenderType

*interface* `net.minecraft.client.particle.ParticleRenderType`

### Fields
- `static final ParticleRenderType TERRAIN_SHEET`
- `static final ParticleRenderType PARTICLE_SHEET_OPAQUE`
- `static final ParticleRenderType PARTICLE_SHEET_TRANSLUCENT`
- `static final ParticleRenderType PARTICLE_SHEET_LIT`
- `static final ParticleRenderType CUSTOM`
- `static final ParticleRenderType NO_RENDER`

### Methods
- `void begin(BufferBuilder p_107436_,  TextureManager p_107437_)`
- `void end(Tesselator p_107438_)`

## PlayerCloudParticle

*class* `net.minecraft.client.particle.PlayerCloudParticle`

### Fields
- `private final SpriteSet sprites`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public float getQuadSize(float p_107504_)`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## PlayerCloudParticle.Provider

*class* `net.minecraft.client.particle.PlayerCloudParticle.Provider`

Enclosing class: PlayerCloudParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_107518_,  ClientLevel p_107519_,  double p_107520_,  double p_107521_,  double p_107522_,  double p_107523_,  double p_107524_,  double p_107525_)`

## PlayerCloudParticle.SneezeProvider

*class* `net.minecraft.client.particle.PlayerCloudParticle.SneezeProvider`

Enclosing class: PlayerCloudParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_107539_,  ClientLevel p_107540_,  double p_107541_,  double p_107542_,  double p_107543_,  double p_107544_,  double p_107545_,  double p_107546_)`

## PortalParticle

*class* `net.minecraft.client.particle.PortalParticle`

### Fields
- `private final double xStart`
- `private final double yStart`
- `private final double zStart`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public void move(double p_107560_,  double p_107561_,  double p_107562_)`
- `public float getQuadSize(float p_107567_)`
- `public int getLightColor(float p_107564_)`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## PortalParticle.Provider

*class* `net.minecraft.client.particle.PortalParticle.Provider`

Enclosing class: PortalParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_107581_,  ClientLevel p_107582_,  double p_107583_,  double p_107584_,  double p_107585_,  double p_107586_,  double p_107587_,  double p_107588_)`

## ReversePortalParticle

*class* `net.minecraft.client.particle.ReversePortalParticle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public float getQuadSize(float p_107608_)`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.PortalParticle`: `getLightColor`, `getRenderType`, `move`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## ReversePortalParticle.ReversePortalProvider

*class* `net.minecraft.client.particle.ReversePortalParticle.ReversePortalProvider`

Enclosing class: ReversePortalParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_107622_,  ClientLevel p_107623_,  double p_107624_,  double p_107625_,  double p_107626_,  double p_107627_,  double p_107628_,  double p_107629_)`

## RisingParticle

*class* `net.minecraft.client.particle.RisingParticle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `getRenderType`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `tick`, `toString`

## SculkChargeParticle

*class* `net.minecraft.client.particle.SculkChargeParticle`

### Fields
- `private final SpriteSet sprites`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public int getLightColor(float p_233902_)`
- `public ParticleRenderType getRenderType()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## SculkChargeParticle.Provider

*record* `net.minecraft.client.particle.SculkChargeParticle.Provider`

Enclosing class: SculkChargeParticle

### Fields
- `private final SpriteSet sprite`
  The field for the sprite record component.

### Methods
- `public Particle createParticle(SculkChargeParticleOptions p_233918_,  ClientLevel p_233919_,  double p_233920_,  double p_233921_,  double p_233922_,  double p_233923_,  double p_233924_,  double p_233925_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public SpriteSet sprite()`
  Returns the value of the sprite record component.
  - returns: the value of the sprite record component

## SculkChargePopParticle

*class* `net.minecraft.client.particle.SculkChargePopParticle`

### Fields
- `private final SpriteSet sprites`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public int getLightColor(float p_233942_)`
- `public ParticleRenderType getRenderType()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## SculkChargePopParticle.Provider

*record* `net.minecraft.client.particle.SculkChargePopParticle.Provider`

Enclosing class: SculkChargePopParticle

### Fields
- `private final SpriteSet sprite`
  The field for the sprite record component.

### Methods
- `public Particle createParticle(SimpleParticleType p_233958_,  ClientLevel p_233959_,  double p_233960_,  double p_233961_,  double p_233962_,  double p_233963_,  double p_233964_,  double p_233965_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public SpriteSet sprite()`
  Returns the value of the sprite record component.
  - returns: the value of the sprite record component

## ShriekParticle

*class* `net.minecraft.client.particle.ShriekParticle`

### Fields
- `private static final org.joml.Vector3f ROTATION_VECTOR`
- `private static final org.joml.Vector3f TRANSFORM_VECTOR`
- `private static final float MAGICAL_X_ROT` (= 1.0471999645233154f)
- `private int delay`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public float getQuadSize(float p_234003_)`
- `public void render(VertexConsumer p_233985_,  Camera p_233986_,  float p_233987_)`
- `private void renderRotatedParticle(VertexConsumer p_233989_,  Camera p_233990_,  float p_233991_,  Consumer<org.joml.Quaternionf> p_233992_)`
- `private void makeCornerVertex(VertexConsumer p_254493_,  org.joml.Vector3f p_253752_,  float p_254250_,  float p_254047_,  int p_253814_)`
- `public int getLightColor(float p_233983_)`
- `public ParticleRenderType getRenderType()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## ShriekParticle.Provider

*class* `net.minecraft.client.particle.ShriekParticle.Provider`

Enclosing class: ShriekParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(ShriekParticleOption p_234019_,  ClientLevel p_234020_,  double p_234021_,  double p_234022_,  double p_234023_,  double p_234024_,  double p_234025_,  double p_234026_)`

## SimpleAnimatedParticle

*class* `net.minecraft.client.particle.SimpleAnimatedParticle`

### Fields
- `protected final SpriteSet sprites`
- `private float fadeR`
- `private float fadeG`
- `private float fadeB`
- `private boolean hasFade`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public void setColor(int p_107658_)`
- `public void setFadeColor(int p_107660_)`
- `public ParticleRenderType getRenderType()`
- `public void tick()`
- `public int getLightColor(float p_107655_)`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## SingleQuadParticle

*class* `net.minecraft.client.particle.SingleQuadParticle`

### Fields
- `protected float quadSize`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public void render(VertexConsumer p_107678_,  Camera p_107679_,  float p_107680_)`
- `public float getQuadSize(float p_107681_)`
- `public Particle scale(float p_107683_)`
- `protected abstract float getU0()`
- `protected abstract float getU1()`
- `protected abstract float getV0()`
- `protected abstract float getV1()`

### Inherited methods
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `getRenderType`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `tick`, `toString`

## SmokeParticle

*class* `net.minecraft.client.particle.SmokeParticle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Inherited methods
- from `net.minecraft.client.particle.BaseAshSmokeParticle`: `getQuadSize`, `getRenderType`, `tick`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## SmokeParticle.Provider

*class* `net.minecraft.client.particle.SmokeParticle.Provider`

Enclosing class: SmokeParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_107707_,  ClientLevel p_107708_,  double p_107709_,  double p_107710_,  double p_107711_,  double p_107712_,  double p_107713_,  double p_107714_)`

## SnowflakeParticle

*class* `net.minecraft.client.particle.SnowflakeParticle`

### Fields
- `private final SpriteSet sprites`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## SnowflakeParticle.Provider

*class* `net.minecraft.client.particle.SnowflakeParticle.Provider`

Enclosing class: SnowflakeParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_172315_,  ClientLevel p_172316_,  double p_172317_,  double p_172318_,  double p_172319_,  double p_172320_,  double p_172321_,  double p_172322_)`

## SonicBoomParticle

*class* `net.minecraft.client.particle.SonicBoomParticle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Inherited methods
- from `net.minecraft.client.particle.HugeExplosionParticle`: `getLightColor`, `getRenderType`, `tick`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## SonicBoomParticle.Provider

*class* `net.minecraft.client.particle.SonicBoomParticle.Provider`

Enclosing class: SonicBoomParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_234047_,  ClientLevel p_234048_,  double p_234049_,  double p_234050_,  double p_234051_,  double p_234052_,  double p_234053_,  double p_234054_)`

## SoulParticle

*class* `net.minecraft.client.particle.SoulParticle`

### Fields
- `private final SpriteSet sprites`
- `protected boolean isGlowing`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public int getLightColor(float p_234080_)`
- `public ParticleRenderType getRenderType()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## SoulParticle.EmissiveProvider

*class* `net.minecraft.client.particle.SoulParticle.EmissiveProvider`

Enclosing class: SoulParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_234094_,  ClientLevel p_234095_,  double p_234096_,  double p_234097_,  double p_234098_,  double p_234099_,  double p_234100_,  double p_234101_)`

## SoulParticle.Provider

*class* `net.minecraft.client.particle.SoulParticle.Provider`

Enclosing class: SoulParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_107750_,  ClientLevel p_107751_,  double p_107752_,  double p_107753_,  double p_107754_,  double p_107755_,  double p_107756_,  double p_107757_)`

## SpellParticle

*class* `net.minecraft.client.particle.SpellParticle`

### Fields
- `private static final RandomSource RANDOM`
- `private final SpriteSet sprites`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public void tick()`
- `private boolean isCloseToScopingPlayer()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## SpellParticle.AmbientMobProvider

*class* `net.minecraft.client.particle.SpellParticle.AmbientMobProvider`

Enclosing class: SpellParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_107795_,  ClientLevel p_107796_,  double p_107797_,  double p_107798_,  double p_107799_,  double p_107800_,  double p_107801_,  double p_107802_)`

## SpellParticle.InstantProvider

*class* `net.minecraft.client.particle.SpellParticle.InstantProvider`

Enclosing class: SpellParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_107816_,  ClientLevel p_107817_,  double p_107818_,  double p_107819_,  double p_107820_,  double p_107821_,  double p_107822_,  double p_107823_)`

## SpellParticle.MobProvider

*class* `net.minecraft.client.particle.SpellParticle.MobProvider`

Enclosing class: SpellParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_107837_,  ClientLevel p_107838_,  double p_107839_,  double p_107840_,  double p_107841_,  double p_107842_,  double p_107843_,  double p_107844_)`

## SpellParticle.Provider

*class* `net.minecraft.client.particle.SpellParticle.Provider`

Enclosing class: SpellParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_107858_,  ClientLevel p_107859_,  double p_107860_,  double p_107861_,  double p_107862_,  double p_107863_,  double p_107864_,  double p_107865_)`

## SpellParticle.WitchProvider

*class* `net.minecraft.client.particle.SpellParticle.WitchProvider`

Enclosing class: SpellParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_107879_,  ClientLevel p_107880_,  double p_107881_,  double p_107882_,  double p_107883_,  double p_107884_,  double p_107885_,  double p_107886_)`

## SpitParticle

*class* `net.minecraft.client.particle.SpitParticle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Inherited methods
- from `net.minecraft.client.particle.ExplodeParticle`: `getRenderType`, `tick`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## SpitParticle.Provider

*class* `net.minecraft.client.particle.SpitParticle.Provider`

Enclosing class: SpitParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_107920_,  ClientLevel p_107921_,  double p_107922_,  double p_107923_,  double p_107924_,  double p_107925_,  double p_107926_,  double p_107927_)`

## SplashParticle

*class* `net.minecraft.client.particle.SplashParticle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Inherited methods
- from `net.minecraft.client.particle.WaterDropParticle`: `getRenderType`, `tick`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## SplashParticle.Provider

*class* `net.minecraft.client.particle.SplashParticle.Provider`

Enclosing class: SplashParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_107958_,  ClientLevel p_107959_,  double p_107960_,  double p_107961_,  double p_107962_,  double p_107963_,  double p_107964_,  double p_107965_)`

## SpriteSet

*interface* `net.minecraft.client.particle.SpriteSet`

### Methods
- `TextureAtlasSprite get(int p_107966_,  int p_107967_)`
- `TextureAtlasSprite get(RandomSource p_234102_)`

## SquidInkParticle

*class* `net.minecraft.client.particle.SquidInkParticle`

### Inherited fields
- from `net.minecraft.client.particle.SimpleAnimatedParticle`: `sprites`
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.SimpleAnimatedParticle`: `getLightColor`, `getRenderType`, `setColor`, `setFadeColor`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## SquidInkParticle.GlowInkProvider

*class* `net.minecraft.client.particle.SquidInkParticle.GlowInkProvider`

Enclosing class: SquidInkParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_172347_,  ClientLevel p_172348_,  double p_172349_,  double p_172350_,  double p_172351_,  double p_172352_,  double p_172353_,  double p_172354_)`

## SquidInkParticle.Provider

*class* `net.minecraft.client.particle.SquidInkParticle.Provider`

Enclosing class: SquidInkParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_108002_,  ClientLevel p_108003_,  double p_108004_,  double p_108005_,  double p_108006_,  double p_108007_,  double p_108008_,  double p_108009_)`

## SuspendedParticle

*class* `net.minecraft.client.particle.SuspendedParticle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `tick`, `toString`

## SuspendedParticle.CrimsonSporeProvider

*class* `net.minecraft.client.particle.SuspendedParticle.CrimsonSporeProvider`

Enclosing class: SuspendedParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_108053_,  ClientLevel p_108054_,  double p_108055_,  double p_108056_,  double p_108057_,  double p_108058_,  double p_108059_,  double p_108060_)`

## SuspendedParticle.SporeBlossomAirProvider

*class* `net.minecraft.client.particle.SuspendedParticle.SporeBlossomAirProvider`

Enclosing class: SuspendedParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_172430_,  ClientLevel p_172431_,  double p_172432_,  double p_172433_,  double p_172434_,  double p_172435_,  double p_172436_,  double p_172437_)`

## SuspendedParticle.UnderwaterProvider

*class* `net.minecraft.client.particle.SuspendedParticle.UnderwaterProvider`

Enclosing class: SuspendedParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_108074_,  ClientLevel p_108075_,  double p_108076_,  double p_108077_,  double p_108078_,  double p_108079_,  double p_108080_,  double p_108081_)`

## SuspendedParticle.WarpedSporeProvider

*class* `net.minecraft.client.particle.SuspendedParticle.WarpedSporeProvider`

Enclosing class: SuspendedParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_108095_,  ClientLevel p_108096_,  double p_108097_,  double p_108098_,  double p_108099_,  double p_108100_,  double p_108101_,  double p_108102_)`

## SuspendedTownParticle

*class* `net.minecraft.client.particle.SuspendedTownParticle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public void move(double p_108122_,  double p_108123_,  double p_108124_)`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## SuspendedTownParticle.ComposterFillProvider

*class* `net.minecraft.client.particle.SuspendedTownParticle.ComposterFillProvider`

Enclosing class: SuspendedTownParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_108139_,  ClientLevel p_108140_,  double p_108141_,  double p_108142_,  double p_108143_,  double p_108144_,  double p_108145_,  double p_108146_)`

## SuspendedTownParticle.DolphinSpeedProvider

*class* `net.minecraft.client.particle.SuspendedTownParticle.DolphinSpeedProvider`

Enclosing class: SuspendedTownParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_108160_,  ClientLevel p_108161_,  double p_108162_,  double p_108163_,  double p_108164_,  double p_108165_,  double p_108166_,  double p_108167_)`

## SuspendedTownParticle.EggCrackProvider

*class* `net.minecraft.client.particle.SuspendedTownParticle.EggCrackProvider`

Enclosing class: SuspendedTownParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_277584_,  ClientLevel p_277587_,  double p_277722_,  double p_277508_,  double p_277797_,  double p_277537_,  double p_277578_,  double p_277397_)`

## SuspendedTownParticle.HappyVillagerProvider

*class* `net.minecraft.client.particle.SuspendedTownParticle.HappyVillagerProvider`

Enclosing class: SuspendedTownParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_108181_,  ClientLevel p_108182_,  double p_108183_,  double p_108184_,  double p_108185_,  double p_108186_,  double p_108187_,  double p_108188_)`

## SuspendedTownParticle.Provider

*class* `net.minecraft.client.particle.SuspendedTownParticle.Provider`

Enclosing class: SuspendedTownParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_108202_,  ClientLevel p_108203_,  double p_108204_,  double p_108205_,  double p_108206_,  double p_108207_,  double p_108208_,  double p_108209_)`

## TerrainParticle

*class* `net.minecraft.client.particle.TerrainParticle`

### Fields
- `private final BlockPos pos`
- `private final float uo`
- `private final float vo`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `protected float getU0()`
- `protected float getU1()`
- `protected float getV0()`
- `protected float getV1()`
- `public int getLightColor(float p_108291_)`
- `public Particle updateSprite(BlockState state,  BlockPos pos)`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `tick`, `toString`

## TerrainParticle.Provider

*class* `net.minecraft.client.particle.TerrainParticle.Provider`

Enclosing class: TerrainParticle

### Methods
- `public Particle createParticle(BlockParticleOption p_108304_,  ClientLevel p_108305_,  double p_108306_,  double p_108307_,  double p_108308_,  double p_108309_,  double p_108310_,  double p_108311_)`

## TextureSheetParticle

*class* `net.minecraft.client.particle.TextureSheetParticle`

### Fields
- `protected TextureAtlasSprite sprite`

### Inherited fields
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `protected void setSprite(TextureAtlasSprite p_108338_)`
- `protected float getU0()`
- `protected float getU1()`
- `protected float getV0()`
- `protected float getV1()`
- `public void pickSprite(SpriteSet p_108336_)`
- `public void setSpriteFromAge(SpriteSet p_108340_)`

### Inherited methods
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `getRenderType`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `tick`, `toString`

## TotemParticle

*class* `net.minecraft.client.particle.TotemParticle`

### Inherited fields
- from `net.minecraft.client.particle.SimpleAnimatedParticle`: `sprites`
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Inherited methods
- from `net.minecraft.client.particle.SimpleAnimatedParticle`: `getLightColor`, `getRenderType`, `setColor`, `setFadeColor`, `tick`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## TotemParticle.Provider

*class* `net.minecraft.client.particle.TotemParticle.Provider`

Enclosing class: TotemParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_108377_,  ClientLevel p_108378_,  double p_108379_,  double p_108380_,  double p_108381_,  double p_108382_,  double p_108383_,  double p_108384_)`

## TrackingEmitter

*class* `net.minecraft.client.particle.TrackingEmitter`

### Fields
- `private final Entity entity`
- `private int life`
- `private final int lifeTime`
- `private final ParticleOptions particleType`

### Inherited fields
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.NoRenderParticle`: `getRenderType`, `render`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `scale`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## VibrationSignalParticle

*class* `net.minecraft.client.particle.VibrationSignalParticle`

### Fields
- `private final PositionSource target`
- `private float rot`
- `private float rotO`
- `private float pitch`
- `private float pitchO`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public void render(VertexConsumer p_172475_,  Camera p_172476_,  float p_172477_)`
- `private void renderSignal(VertexConsumer p_172479_,  Camera p_172480_,  float p_172481_,  Consumer<org.joml.Quaternionf> p_172482_)`
- `public int getLightColor(float p_172469_)`
- `public ParticleRenderType getRenderType()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## VibrationSignalParticle.Provider

*class* `net.minecraft.client.particle.VibrationSignalParticle.Provider`

Enclosing class: VibrationSignalParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(VibrationParticleOption p_172501_,  ClientLevel p_172502_,  double p_172503_,  double p_172504_,  double p_172505_,  double p_172506_,  double p_172507_,  double p_172508_)`

## WakeParticle

*class* `net.minecraft.client.particle.WakeParticle`

### Fields
- `private final SpriteSet sprites`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## WakeParticle.Provider

*class* `net.minecraft.client.particle.WakeParticle.Provider`

Enclosing class: WakeParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_108440_,  ClientLevel p_108441_,  double p_108442_,  double p_108443_,  double p_108444_,  double p_108445_,  double p_108446_,  double p_108447_)`

## WaterCurrentDownParticle

*class* `net.minecraft.client.particle.WaterCurrentDownParticle`

### Fields
- `private float angle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## WaterCurrentDownParticle.Provider

*class* `net.minecraft.client.particle.WaterCurrentDownParticle.Provider`

Enclosing class: WaterCurrentDownParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_108475_,  ClientLevel p_108476_,  double p_108477_,  double p_108478_,  double p_108479_,  double p_108480_,  double p_108481_,  double p_108482_)`

## WaterDropParticle

*class* `net.minecraft.client.particle.WaterDropParticle`

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Methods
- `public ParticleRenderType getRenderType()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `getQuadSize`, `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## WaterDropParticle.Provider

*class* `net.minecraft.client.particle.WaterDropParticle.Provider`

Enclosing class: WaterDropParticle

### Fields
- `private final SpriteSet sprite`

### Methods
- `public Particle createParticle(SimpleParticleType p_108503_,  ClientLevel p_108504_,  double p_108505_,  double p_108506_,  double p_108507_,  double p_108508_,  double p_108509_,  double p_108510_)`

## WhiteAshParticle

*class* `net.minecraft.client.particle.WhiteAshParticle`

### Fields
- `private static final int COLOR_RGB24` (= 12235202)

### Inherited fields
- from `net.minecraft.client.particle.TextureSheetParticle`: `sprite`
- from `net.minecraft.client.particle.SingleQuadParticle`: `quadSize`
- from `net.minecraft.client.particle.Particle`: `age`, `alpha`, `bbHeight`, `bbWidth`, `bCol`, `friction`, `gCol`, `gravity`, `hasPhysics`, `level`, `lifetime`, `onGround`, `oRoll`, `random`, `rCol`, `removed`, `roll`, `speedUpWhenYMotionIsBlocked`, `x`, `xd`, `xo`, `y`, `yd`, `yo`, `z`, `zd`, `zo`

### Inherited methods
- from `net.minecraft.client.particle.BaseAshSmokeParticle`: `getQuadSize`, `getRenderType`, `tick`
- from `net.minecraft.client.particle.TextureSheetParticle`: `getU0`, `getU1`, `getV0`, `getV1`, `pickSprite`, `setSprite`, `setSpriteFromAge`
- from `net.minecraft.client.particle.SingleQuadParticle`: `render`, `scale`
- from `net.minecraft.client.particle.Particle`: `getBoundingBox`, `getLifetime`, `getLightColor`, `getParticleGroup`, `getPos`, `isAlive`, `move`, `remove`, `setAlpha`, `setBoundingBox`, `setColor`, `setLifetime`, `setLocationFromBoundingbox`, `setParticleSpeed`, `setPos`, `setPower`, `setSize`, `shouldCull`, `toString`

## WhiteAshParticle.Provider

*class* `net.minecraft.client.particle.WhiteAshParticle.Provider`

Enclosing class: WhiteAshParticle

### Fields
- `private final SpriteSet sprites`

### Methods
- `public Particle createParticle(SimpleParticleType p_108534_,  ClientLevel p_108535_,  double p_108536_,  double p_108537_,  double p_108538_,  double p_108539_,  double p_108540_,  double p_108541_)`
