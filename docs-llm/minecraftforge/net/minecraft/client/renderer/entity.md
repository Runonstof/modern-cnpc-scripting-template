# net.minecraft.client.renderer.entity

- [Render](#render)
- [RenderAbstractHorse](#renderabstracthorse)
- [RenderAreaEffectCloud](#renderareaeffectcloud)
- [RenderArmorStand](#renderarmorstand)
- [RenderArrow](#renderarrow)
- [RenderBat](#renderbat)
- [RenderBiped](#renderbiped)
- [RenderBlaze](#renderblaze)
- [RenderBoat](#renderboat)
- [RenderCaveSpider](#rendercavespider)
- [RenderChicken](#renderchicken)
- [RenderCow](#rendercow)
- [RenderCreeper](#rendercreeper)
- [RenderDragon](#renderdragon)
- [RenderDragonFireball](#renderdragonfireball)
- [RenderElderGuardian](#renderelderguardian)
- [RenderEnderCrystal](#renderendercrystal)
- [RenderEnderman](#renderenderman)
- [RenderEndermite](#renderendermite)
- [RenderEntity](#renderentity)
- [RenderEntityItem](#renderentityitem)
- [RenderEvoker](#renderevoker)
- [RenderEvokerFangs](#renderevokerfangs)
- [RenderFallingBlock](#renderfallingblock)
- [RenderFireball](#renderfireball)
- [RenderFish](#renderfish)
- [RenderGhast](#renderghast)
- [RenderGiantZombie](#rendergiantzombie)
- [RenderGuardian](#renderguardian)
- [RenderHorse](#renderhorse)
- [RenderHusk](#renderhusk)
- [RenderIllusionIllager](#renderillusionillager)
- [RenderIronGolem](#renderirongolem)
- [RenderItemFrame](#renderitemframe)
- [RenderLeashKnot](#renderleashknot)
- [RenderLightningBolt](#renderlightningbolt)
- [RenderLiving](#renderliving)
- [RenderLivingBase](#renderlivingbase)
- [RenderLlama](#renderllama)
- [RenderLlamaSpit](#renderllamaspit)
- [RenderMagmaCube](#rendermagmacube)
- [RenderManager](#rendermanager)
- [RenderMinecart](#renderminecart)
- [RenderMinecartMobSpawner](#renderminecartmobspawner)
- [RenderMooshroom](#rendermooshroom)
- [RenderOcelot](#renderocelot)
- [RenderPainting](#renderpainting)
- [RenderParrot](#renderparrot)
- [RenderPig](#renderpig)
- [RenderPigZombie](#renderpigzombie)
- [RenderPlayer](#renderplayer)
- [RenderPolarBear](#renderpolarbear)
- [RenderPotion](#renderpotion)
- [RenderRabbit](#renderrabbit)
- [RenderSheep](#rendersheep)
- [RenderShulker](#rendershulker)
- [RenderShulkerBullet](#rendershulkerbullet)
- [RenderSilverfish](#rendersilverfish)
- [RenderSkeleton](#renderskeleton)
- [RenderSlime](#renderslime)
- [RenderSnowball](#rendersnowball)
- [RenderSnowMan](#rendersnowman)
- [RenderSpectralArrow](#renderspectralarrow)
- [RenderSpider](#renderspider)
- [RenderSquid](#rendersquid)
- [RenderStray](#renderstray)
- [RenderTippedArrow](#rendertippedarrow)
- [RenderTntMinecart](#rendertntminecart)
- [RenderTNTPrimed](#rendertntprimed)
- [RenderVex](#rendervex)
- [RenderVillager](#rendervillager)
- [RenderVindicator](#rendervindicator)
- [RenderWitch](#renderwitch)
- [RenderWither](#renderwither)
- [RenderWitherSkeleton](#renderwitherskeleton)
- [RenderWitherSkull](#renderwitherskull)
- [RenderWolf](#renderwolf)
- [RenderXPOrb](#renderxporb)
- [RenderZombie](#renderzombie)
- [RenderZombieVillager](#renderzombievillager)
## Render

*class* `net.minecraft.client.renderer.entity.Render`

### Fields
- `protected final RenderManager renderManager`
- `protected float shadowSize`
- `protected float shadowOpaque`
- `protected boolean renderOutlines`

### Methods
- `public void setRenderOutlines(boolean renderOutlinesIn)`
- `public boolean shouldRender(T livingEntity,  ICamera camera,  double camX,  double camY,  double camZ)`
- `public void doRender(T entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected int getTeamColor(T entityIn)`
- `protected void renderName(T entity,  double x,  double y,  double z)`
- `protected boolean canRenderName(T entity)`
- `protected void renderEntityName(T entityIn,  double x,  double y,  double z,  java.lang.String name,  double distanceSq)`
- `protected abstract ResourceLocation getEntityTexture(T entity)`
- `protected boolean bindEntityTexture(T entity)`
- `public void bindTexture(ResourceLocation location)`
- `public static void renderOffsetAABB(AxisAlignedBB boundingBox,  double x,  double y,  double z)`
- `public void doRenderShadowAndFire(Entity entityIn,  double x,  double y,  double z,  float yaw,  float partialTicks)`
- `public FontRenderer getFontRendererFromRenderManager()`
- `protected void renderLivingLabel(T entityIn,  java.lang.String str,  double x,  double y,  double z,  int maxDistance)`
- `public RenderManager getRenderManager()`
- `public boolean isMultipass()`
- `public void renderMultipass(T p_188300_1_,  double p_188300_2_,  double p_188300_4_,  double p_188300_6_,  float p_188300_8_,  float p_188300_9_)`

## RenderAbstractHorse

*class* `net.minecraft.client.renderer.entity.RenderAbstractHorse`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected void preRenderCallback(AbstractHorse entitylivingbaseIn,  float partialTickTime)`
- `protected ResourceLocation getEntityTexture(AbstractHorse entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderAreaEffectCloud

*class* `net.minecraft.client.renderer.entity.RenderAreaEffectCloud`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityAreaEffectCloud entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRender`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderArmorStand

*class* `net.minecraft.client.renderer.entity.RenderArmorStand`

### Fields
- `public static final ResourceLocation TEXTURE_ARMOR_STAND`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityArmorStand entity)`
- `public ModelArmorStand getMainModel()`
- `protected void applyRotations(EntityArmorStand entityLiving,  float p_77043_2_,  float rotationYaw,  float partialTicks)`
- `protected boolean canRenderName(EntityArmorStand entity)`
- `public void doRender(EntityArmorStand entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `getColorMultiplier`, `getDeathMaxRotation`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderArrow

*class* `net.minecraft.client.renderer.entity.RenderArrow`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(T entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getEntityTexture`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderBat

*class* `net.minecraft.client.renderer.entity.RenderBat`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityBat entity)`
- `protected void preRenderCallback(EntityBat entitylivingbaseIn,  float partialTickTime)`
- `protected void applyRotations(EntityBat entityLiving,  float p_77043_2_,  float rotationYaw,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderBiped

*class* `net.minecraft.client.renderer.entity.RenderBiped`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(T entity)`
- `public void transformHeldFull3DItemLayer()`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderBlaze

*class* `net.minecraft.client.renderer.entity.RenderBlaze`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityBlaze entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderBoat

*class* `net.minecraft.client.renderer.entity.RenderBoat`

### Fields
- `protected ModelBase modelBoat`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(EntityBoat entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `public void setupRotation(EntityBoat p_188311_1_,  float p_188311_2_,  float p_188311_3_)`
- `public void setupTranslation(double p_188309_1_,  double p_188309_3_,  double p_188309_5_)`
- `protected ResourceLocation getEntityTexture(EntityBoat entity)`
- `public boolean isMultipass()`
- `public void renderMultipass(EntityBoat p_188300_1_,  double p_188300_2_,  double p_188300_4_,  double p_188300_6_,  float p_188300_8_,  float p_188300_9_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `renderEntityName`, `renderLivingLabel`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderCaveSpider

*class* `net.minecraft.client.renderer.entity.RenderCaveSpider`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected void preRenderCallback(EntityCaveSpider entitylivingbaseIn,  float partialTickTime)`
- `protected ResourceLocation getEntityTexture(EntityCaveSpider entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderSpider`: `getDeathMaxRotation`
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderChicken

*class* `net.minecraft.client.renderer.entity.RenderChicken`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityChicken entity)`
- `protected float handleRotationFloat(EntityChicken livingBase,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderCow

*class* `net.minecraft.client.renderer.entity.RenderCow`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityCow entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderCreeper

*class* `net.minecraft.client.renderer.entity.RenderCreeper`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected void preRenderCallback(EntityCreeper entitylivingbaseIn,  float partialTickTime)`
- `protected int getColorMultiplier(EntityCreeper entitylivingbaseIn,  float lightBrightness,  float partialTickTime)`
- `protected ResourceLocation getEntityTexture(EntityCreeper entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderDragon

*class* `net.minecraft.client.renderer.entity.RenderDragon`

### Fields
- `public static final ResourceLocation ENDERCRYSTAL_BEAM_TEXTURES`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected void applyRotations(EntityDragon entityLiving,  float p_77043_2_,  float rotationYaw,  float partialTicks)`
- `protected void renderModel(EntityDragon entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor)`
- `public void doRender(EntityDragon entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `public static void renderCrystalBeams(double p_188325_0_,  double p_188325_2_,  double p_188325_4_,  float p_188325_6_,  double p_188325_7_,  double p_188325_9_,  double p_188325_11_,  int p_188325_13_,  double p_188325_14_,  double p_188325_16_,  double p_188325_18_)`
- `protected ResourceLocation getEntityTexture(EntityDragon entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderDragonFireball

*class* `net.minecraft.client.renderer.entity.RenderDragonFireball`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(EntityDragonFireball entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityDragonFireball entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderElderGuardian

*class* `net.minecraft.client.renderer.entity.RenderElderGuardian`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected void preRenderCallback(EntityGuardian entitylivingbaseIn,  float partialTickTime)`
- `protected ResourceLocation getEntityTexture(EntityGuardian entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderGuardian`: `doRender`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `renderLeash`, `setLightmap`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderEnderCrystal

*class* `net.minecraft.client.renderer.entity.RenderEnderCrystal`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(EntityEnderCrystal entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityEnderCrystal entity)`
- `public boolean shouldRender(EntityEnderCrystal livingEntity,  ICamera camera,  double camX,  double camY,  double camZ)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`

## RenderEnderman

*class* `net.minecraft.client.renderer.entity.RenderEnderman`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public ModelEnderman getMainModel()`
- `public void doRender(EntityEnderman entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityEnderman entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderEndermite

*class* `net.minecraft.client.renderer.entity.RenderEndermite`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected float getDeathMaxRotation(EntityEndermite entityLivingBaseIn)`
- `protected ResourceLocation getEntityTexture(EntityEndermite entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderEntity

*class* `net.minecraft.client.renderer.entity.RenderEntity`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(Entity entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(Entity entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderEntityItem

*class* `net.minecraft.client.renderer.entity.RenderEntityItem`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected int getModelCount(ItemStack stack)`
- `public void doRender(EntityItem entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityItem entity)`
- `public boolean shouldSpreadItems()`
  Items should spread out when rendered in 3d?
- `public boolean shouldBob()`
  Items should have a bob effect

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderEvoker

*class* `net.minecraft.client.renderer.entity.RenderEvoker`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityMob entity)`
- `protected void preRenderCallback(EntityMob entitylivingbaseIn,  float partialTickTime)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderEvokerFangs

*class* `net.minecraft.client.renderer.entity.RenderEvokerFangs`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(EntityEvokerFangs entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityEvokerFangs entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderFallingBlock

*class* `net.minecraft.client.renderer.entity.RenderFallingBlock`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(EntityFallingBlock entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityFallingBlock entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderFireball

*class* `net.minecraft.client.renderer.entity.RenderFireball`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(EntityFireball entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityFireball entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderFish

*class* `net.minecraft.client.renderer.entity.RenderFish`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(EntityFishHook entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityFishHook entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderGhast

*class* `net.minecraft.client.renderer.entity.RenderGhast`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityGhast entity)`
- `protected void preRenderCallback(EntityGhast entitylivingbaseIn,  float partialTickTime)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderGiantZombie

*class* `net.minecraft.client.renderer.entity.RenderGiantZombie`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void transformHeldFull3DItemLayer()`
- `protected void preRenderCallback(EntityGiantZombie entitylivingbaseIn,  float partialTickTime)`
- `protected ResourceLocation getEntityTexture(EntityGiantZombie entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderGuardian

*class* `net.minecraft.client.renderer.entity.RenderGuardian`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public boolean shouldRender(EntityGuardian livingEntity,  ICamera camera,  double camX,  double camY,  double camZ)`
- `public void doRender(EntityGuardian entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityGuardian entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `renderLeash`, `setLightmap`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderHorse

*class* `net.minecraft.client.renderer.entity.RenderHorse`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityHorse entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderHusk

*class* `net.minecraft.client.renderer.entity.RenderHusk`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected void preRenderCallback(EntityZombie entitylivingbaseIn,  float partialTickTime)`
- `protected ResourceLocation getEntityTexture(EntityZombie entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderBiped`: `transformHeldFull3DItemLayer`
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderIllusionIllager

*class* `net.minecraft.client.renderer.entity.RenderIllusionIllager`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityMob entity)`
- `protected void preRenderCallback(EntityMob entitylivingbaseIn,  float partialTickTime)`
- `public void doRender(EntityMob entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `public void renderName(EntityMob entity,  double x,  double y,  double z)`
- `protected boolean isVisible(EntityMob p_193115_1_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderIronGolem

*class* `net.minecraft.client.renderer.entity.RenderIronGolem`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityIronGolem entity)`
- `protected void applyRotations(EntityIronGolem entityLiving,  float p_77043_2_,  float rotationYaw,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderItemFrame

*class* `net.minecraft.client.renderer.entity.RenderItemFrame`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(EntityItemFrame entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityItemFrame entity)`
- `protected void renderName(EntityItemFrame entity,  double x,  double y,  double z)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderLeashKnot

*class* `net.minecraft.client.renderer.entity.RenderLeashKnot`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(EntityLeashKnot entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityLeashKnot entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderLightningBolt

*class* `net.minecraft.client.renderer.entity.RenderLightningBolt`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(EntityLightningBolt entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityLightningBolt entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderLiving

*class* `net.minecraft.client.renderer.entity.RenderLiving`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected boolean canRenderName(T entity)`
- `public boolean shouldRender(T livingEntity,  ICamera camera,  double camX,  double camY,  double camZ)`
- `public void doRender(T entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `public void setLightmap(T entityLivingIn)`
- `protected void renderLeash(T entityLivingIn,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getEntityTexture`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderLivingBase

*class* `net.minecraft.client.renderer.entity.RenderLivingBase`

### Fields
- `protected ModelBase mainModel`
- `protected java.nio.FloatBuffer brightnessBuffer`
- `protected java.util.List<LayerRenderer<T extends EntityLivingBase>> layerRenderers`
- `protected boolean renderMarker`
- `public static float NAME_TAG_RANGE`
- `public static float NAME_TAG_RANGE_SNEAK`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public <V extends EntityLivingBase,U extends LayerRenderer<V>> boolean addLayer(U layer)`
- `public ModelBase getMainModel()`
- `protected float interpolateRotation(float prevYawOffset,  float yawOffset,  float partialTicks)`
- `public void transformHeldFull3DItemLayer()`
- `public void doRender(T entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `public float prepareScale(T entitylivingbaseIn,  float partialTicks)`
- `protected boolean setScoreTeamColor(T entityLivingBaseIn)`
- `protected void unsetScoreTeamColor()`
- `protected void renderModel(T entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor)`
- `protected boolean isVisible(T p_193115_1_)`
- `protected boolean setDoRenderBrightness(T entityLivingBaseIn,  float partialTicks)`
- `protected boolean setBrightness(T entitylivingbaseIn,  float partialTicks,  boolean combineTextures)`
- `protected void unsetBrightness()`
- `protected void renderLivingAt(T entityLivingBaseIn,  double x,  double y,  double z)`
- `protected void applyRotations(T entityLiving,  float p_77043_2_,  float rotationYaw,  float partialTicks)`
- `protected float getSwingProgress(T livingBase,  float partialTickTime)`
- `protected float handleRotationFloat(T livingBase,  float partialTicks)`
- `protected void renderLayers(T entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleIn)`
- `protected float getDeathMaxRotation(T entityLivingBaseIn)`
- `protected int getColorMultiplier(T entitylivingbaseIn,  float lightBrightness,  float partialTickTime)`
- `protected void preRenderCallback(T entitylivingbaseIn,  float partialTickTime)`
- `public void renderName(T entity,  double x,  double y,  double z)`
- `protected boolean canRenderName(T entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getEntityTexture`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderLlama

*class* `net.minecraft.client.renderer.entity.RenderLlama`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityLlama entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderLlamaSpit

*class* `net.minecraft.client.renderer.entity.RenderLlamaSpit`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(EntityLlamaSpit entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityLlamaSpit entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderMagmaCube

*class* `net.minecraft.client.renderer.entity.RenderMagmaCube`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityMagmaCube entity)`
- `protected void preRenderCallback(EntityMagmaCube entitylivingbaseIn,  float partialTickTime)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderManager

*class* `net.minecraft.client.renderer.entity.RenderManager`

### Fields
- `public final java.util.Map<java.lang.Class<? extends Entity>,Render<? extends Entity>> entityRenderMap`
- `public TextureManager renderEngine`
- `public World world`
- `public Entity renderViewEntity`
- `public Entity pointedEntity`
- `public float playerViewY`
- `public float playerViewX`
- `public GameSettings options`
- `public double viewerPosX`
- `public double viewerPosY`
- `public double viewerPosZ`

### Methods
- `public java.util.Map<java.lang.String,RenderPlayer> getSkinMap()`
- `public void setRenderPosition(double renderPosXIn,  double renderPosYIn,  double renderPosZIn)`
- `public <T extends Entity> Render<T> getEntityClassRenderObject(java.lang.Class<? extends Entity> entityClass)`
- `public <T extends Entity> Render<T> getEntityRenderObject(Entity entityIn)`
- `public void cacheActiveRenderInfo(World worldIn,  FontRenderer textRendererIn,  Entity livingPlayerIn,  Entity pointedEntityIn,  GameSettings optionsIn,  float partialTicks)`
- `public void setPlayerViewY(float playerViewYIn)`
- `public boolean isRenderShadow()`
- `public void setRenderShadow(boolean renderShadowIn)`
- `public void setDebugBoundingBox(boolean debugBoundingBoxIn)`
- `public boolean isDebugBoundingBox()`
- `public boolean isRenderMultipass(Entity p_188390_1_)`
- `public boolean shouldRender(Entity entityIn,  ICamera camera,  double camX,  double camY,  double camZ)`
- `public void renderEntityStatic(Entity entityIn,  float partialTicks,  boolean p_188388_3_)`
- `public void renderEntity(Entity entityIn,  double x,  double y,  double z,  float yaw,  float partialTicks,  boolean p_188391_10_)`
- `public void renderMultipass(Entity p_188389_1_,  float p_188389_2_)`
- `public void setWorld(World worldIn)`
- `public double getDistanceToCamera(double x,  double y,  double z)`
- `public FontRenderer getFontRenderer()`
- `public void setRenderOutlines(boolean renderOutlinesIn)`

## RenderMinecart

*class* `net.minecraft.client.renderer.entity.RenderMinecart`

### Fields
- `protected ModelBase modelMinecart`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(T entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(T entity)`
- `protected void renderCartContents(T p_188319_1_,  float partialTicks,  IBlockState p_188319_3_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderMinecartMobSpawner

*class* `net.minecraft.client.renderer.entity.RenderMinecartMobSpawner`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderMinecart`: `modelMinecart`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderMinecart`: `doRender`, `getEntityTexture`, `renderCartContents`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderMooshroom

*class* `net.minecraft.client.renderer.entity.RenderMooshroom`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public ModelCow getMainModel()`
- `protected ResourceLocation getEntityTexture(EntityMooshroom entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderOcelot

*class* `net.minecraft.client.renderer.entity.RenderOcelot`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityOcelot entity)`
- `protected void preRenderCallback(EntityOcelot entitylivingbaseIn,  float partialTickTime)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderPainting

*class* `net.minecraft.client.renderer.entity.RenderPainting`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(EntityPainting entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityPainting entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderParrot

*class* `net.minecraft.client.renderer.entity.RenderParrot`

### Fields
- `public static final ResourceLocation[] PARROT_TEXTURES`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityParrot entity)`
- `public float handleRotationFloat(EntityParrot livingBase,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderPig

*class* `net.minecraft.client.renderer.entity.RenderPig`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityPig entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderPigZombie

*class* `net.minecraft.client.renderer.entity.RenderPigZombie`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityPigZombie entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderBiped`: `transformHeldFull3DItemLayer`
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderPlayer

*class* `net.minecraft.client.renderer.entity.RenderPlayer`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public ModelPlayer getMainModel()`
- `public void doRender(AbstractClientPlayer entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `public ResourceLocation getEntityTexture(AbstractClientPlayer entity)`
- `public void transformHeldFull3DItemLayer()`
- `protected void preRenderCallback(AbstractClientPlayer entitylivingbaseIn,  float partialTickTime)`
- `protected void renderEntityName(AbstractClientPlayer entityIn,  double x,  double y,  double z,  java.lang.String name,  double distanceSq)`
- `public void renderRightArm(AbstractClientPlayer clientPlayer)`
- `public void renderLeftArm(AbstractClientPlayer clientPlayer)`
- `protected void renderLivingAt(AbstractClientPlayer entityLivingBaseIn,  double x,  double y,  double z)`
- `protected void applyRotations(AbstractClientPlayer entityLiving,  float p_77043_2_,  float rotationYaw,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `canRenderName`, `getColorMultiplier`, `getDeathMaxRotation`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderPolarBear

*class* `net.minecraft.client.renderer.entity.RenderPolarBear`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityPolarBear entity)`
- `public void doRender(EntityPolarBear entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected void preRenderCallback(EntityPolarBear entitylivingbaseIn,  float partialTickTime)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderPotion

*class* `net.minecraft.client.renderer.entity.RenderPotion`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderSnowball`: `item`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public ItemStack getStackToRender(EntityPotion entityIn)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderSnowball`: `doRender`, `getEntityTexture`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderRabbit

*class* `net.minecraft.client.renderer.entity.RenderRabbit`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityRabbit entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderSheep

*class* `net.minecraft.client.renderer.entity.RenderSheep`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntitySheep entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderShulker

*class* `net.minecraft.client.renderer.entity.RenderShulker`

### Fields
- `public static final ResourceLocation[] SHULKER_ENDERGOLEM_TEXTURE`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public ModelShulker getMainModel()`
- `public void doRender(EntityShulker entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `public boolean shouldRender(EntityShulker livingEntity,  ICamera camera,  double camX,  double camY,  double camZ)`
- `protected ResourceLocation getEntityTexture(EntityShulker entity)`
- `protected void applyRotations(EntityShulker entityLiving,  float p_77043_2_,  float rotationYaw,  float partialTicks)`
- `protected void preRenderCallback(EntityShulker entitylivingbaseIn,  float partialTickTime)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `renderLeash`, `setLightmap`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `getColorMultiplier`, `getDeathMaxRotation`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderShulkerBullet

*class* `net.minecraft.client.renderer.entity.RenderShulkerBullet`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(EntityShulkerBullet entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityShulkerBullet entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderSilverfish

*class* `net.minecraft.client.renderer.entity.RenderSilverfish`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected float getDeathMaxRotation(EntitySilverfish entityLivingBaseIn)`
- `protected ResourceLocation getEntityTexture(EntitySilverfish entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderSkeleton

*class* `net.minecraft.client.renderer.entity.RenderSkeleton`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void transformHeldFull3DItemLayer()`
- `protected ResourceLocation getEntityTexture(AbstractSkeleton entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderSlime

*class* `net.minecraft.client.renderer.entity.RenderSlime`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(EntitySlime entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected void preRenderCallback(EntitySlime entitylivingbaseIn,  float partialTickTime)`
- `protected ResourceLocation getEntityTexture(EntitySlime entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderSnowball

*class* `net.minecraft.client.renderer.entity.RenderSnowball`

### Fields
- `protected final Item item`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(T entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `public ItemStack getStackToRender(T entityIn)`
- `protected ResourceLocation getEntityTexture(Entity entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderSnowMan

*class* `net.minecraft.client.renderer.entity.RenderSnowMan`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntitySnowman entity)`
- `public ModelSnowMan getMainModel()`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderSpectralArrow

*class* `net.minecraft.client.renderer.entity.RenderSpectralArrow`

### Fields
- `public static final ResourceLocation RES_SPECTRAL_ARROW`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntitySpectralArrow entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderArrow`: `doRender`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderSpider

*class* `net.minecraft.client.renderer.entity.RenderSpider`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected float getDeathMaxRotation(T entityLivingBaseIn)`
- `protected ResourceLocation getEntityTexture(T entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderSquid

*class* `net.minecraft.client.renderer.entity.RenderSquid`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntitySquid entity)`
- `protected void applyRotations(EntitySquid entityLiving,  float p_77043_2_,  float rotationYaw,  float partialTicks)`
- `protected float handleRotationFloat(EntitySquid livingBase,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderStray

*class* `net.minecraft.client.renderer.entity.RenderStray`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(AbstractSkeleton entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderSkeleton`: `transformHeldFull3DItemLayer`
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderTippedArrow

*class* `net.minecraft.client.renderer.entity.RenderTippedArrow`

### Fields
- `public static final ResourceLocation RES_ARROW`
- `public static final ResourceLocation RES_TIPPED_ARROW`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityTippedArrow entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderArrow`: `doRender`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderTntMinecart

*class* `net.minecraft.client.renderer.entity.RenderTntMinecart`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderMinecart`: `modelMinecart`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected void renderCartContents(EntityMinecartTNT p_188319_1_,  float partialTicks,  IBlockState p_188319_3_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderMinecart`: `doRender`, `getEntityTexture`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderTNTPrimed

*class* `net.minecraft.client.renderer.entity.RenderTNTPrimed`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(EntityTNTPrimed entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityTNTPrimed entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderVex

*class* `net.minecraft.client.renderer.entity.RenderVex`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityVex entity)`
- `public void doRender(EntityVex entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected void preRenderCallback(EntityVex entitylivingbaseIn,  float partialTickTime)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderBiped`: `transformHeldFull3DItemLayer`
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderVillager

*class* `net.minecraft.client.renderer.entity.RenderVillager`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public ModelVillager getMainModel()`
- `protected ResourceLocation getEntityTexture(EntityVillager entity)`
- `protected void preRenderCallback(EntityVillager entitylivingbaseIn,  float partialTickTime)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderVindicator

*class* `net.minecraft.client.renderer.entity.RenderVindicator`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(EntityMob entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityMob entity)`
- `protected void preRenderCallback(EntityMob entitylivingbaseIn,  float partialTickTime)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderWitch

*class* `net.minecraft.client.renderer.entity.RenderWitch`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public ModelWitch getMainModel()`
- `public void doRender(EntityWitch entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityWitch entity)`
- `public void transformHeldFull3DItemLayer()`
- `protected void preRenderCallback(EntityWitch entitylivingbaseIn,  float partialTickTime)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderWither

*class* `net.minecraft.client.renderer.entity.RenderWither`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityWither entity)`
- `protected void preRenderCallback(EntityWither entitylivingbaseIn,  float partialTickTime)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderWitherSkeleton

*class* `net.minecraft.client.renderer.entity.RenderWitherSkeleton`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(AbstractSkeleton entity)`
- `protected void preRenderCallback(AbstractSkeleton entitylivingbaseIn,  float partialTickTime)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderSkeleton`: `transformHeldFull3DItemLayer`
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderWitherSkull

*class* `net.minecraft.client.renderer.entity.RenderWitherSkull`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(EntityWitherSkull entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityWitherSkull entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderWolf

*class* `net.minecraft.client.renderer.entity.RenderWolf`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected float handleRotationFloat(EntityWolf livingBase,  float partialTicks)`
- `public void doRender(EntityWolf entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityWolf entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `transformHeldFull3DItemLayer`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderXPOrb

*class* `net.minecraft.client.renderer.entity.RenderXPOrb`

### Inherited fields
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `public void doRender(EntityXPOrb entity,  double x,  double y,  double z,  float entityYaw,  float partialTicks)`
- `protected ResourceLocation getEntityTexture(EntityXPOrb entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `canRenderName`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderName`, `renderOffsetAABB`, `setRenderOutlines`, `shouldRender`

## RenderZombie

*class* `net.minecraft.client.renderer.entity.RenderZombie`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityZombie entity)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderBiped`: `transformHeldFull3DItemLayer`
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `applyRotations`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`

## RenderZombieVillager

*class* `net.minecraft.client.renderer.entity.RenderZombieVillager`

### Inherited fields
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `brightnessBuffer`, `layerRenderers`, `mainModel`, `NAME_TAG_RANGE`, `NAME_TAG_RANGE_SNEAK`, `renderMarker`
- from `net.minecraft.client.renderer.entity.Render`: `renderManager`, `renderOutlines`, `shadowOpaque`, `shadowSize`

### Methods
- `protected ResourceLocation getEntityTexture(EntityZombieVillager entity)`
- `protected void applyRotations(EntityZombieVillager entityLiving,  float p_77043_2_,  float rotationYaw,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.RenderBiped`: `transformHeldFull3DItemLayer`
- from `net.minecraft.client.renderer.entity.RenderLiving`: `canRenderName`, `doRender`, `renderLeash`, `setLightmap`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLivingBase`: `addLayer`, `getColorMultiplier`, `getDeathMaxRotation`, `getMainModel`, `getSwingProgress`, `handleRotationFloat`, `interpolateRotation`, `isVisible`, `prepareScale`, `preRenderCallback`, `renderLayers`, `renderLivingAt`, `renderModel`, `renderName`, `setBrightness`, `setDoRenderBrightness`, `setScoreTeamColor`, `unsetBrightness`, `unsetScoreTeamColor`
- from `net.minecraft.client.renderer.entity.Render`: `bindEntityTexture`, `bindTexture`, `doRenderShadowAndFire`, `getFontRendererFromRenderManager`, `getRenderManager`, `getTeamColor`, `isMultipass`, `renderEntityName`, `renderLivingLabel`, `renderMultipass`, `renderOffsetAABB`, `setRenderOutlines`
