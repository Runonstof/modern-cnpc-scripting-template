# net.minecraft.client.renderer.entity

- [AbstractHorseRenderer>](#abstracthorserenderer)
- [AbstractZombieRenderer>](#abstractzombierenderer)
- [AllayRenderer](#allayrenderer)
- [ArmorStandRenderer](#armorstandrenderer)
- [ArrowRenderer](#arrowrenderer)
- [AxolotlRenderer](#axolotlrenderer)
- [BatRenderer](#batrenderer)
- [BeeRenderer](#beerenderer)
- [BlazeRenderer](#blazerenderer)
- [BoatRenderer](#boatrenderer)
- [CamelRenderer](#camelrenderer)
- [CatRenderer](#catrenderer)
- [CaveSpiderRenderer](#cavespiderrenderer)
- [ChestedHorseRenderer](#chestedhorserenderer)
- [ChickenRenderer](#chickenrenderer)
- [CodRenderer](#codrenderer)
- [CowRenderer](#cowrenderer)
- [CreeperRenderer](#creeperrenderer)
- [DisplayRenderer](#displayrenderer)
- [DisplayRenderer.BlockDisplayRenderer](#displayrenderer.blockdisplayrenderer)
- [DisplayRenderer.ItemDisplayRenderer](#displayrenderer.itemdisplayrenderer)
- [DisplayRenderer.TextDisplayRenderer](#displayrenderer.textdisplayrenderer)
- [DolphinRenderer](#dolphinrenderer)
- [DragonFireballRenderer](#dragonfireballrenderer)
- [DrownedRenderer](#drownedrenderer)
- [ElderGuardianRenderer](#elderguardianrenderer)
- [EndCrystalRenderer](#endcrystalrenderer)
- [EnderDragonRenderer](#enderdragonrenderer)
- [EnderDragonRenderer.DragonModel](#enderdragonrenderer.dragonmodel)
- [EndermanRenderer](#endermanrenderer)
- [EndermiteRenderer](#endermiterenderer)
- [EntityRenderDispatcher](#entityrenderdispatcher)
- [EntityRenderer](#entityrenderer)
- [EntityRendererProvider](#entityrendererprovider)
- [EntityRendererProvider.Context](#entityrendererprovider.context)
- [EntityRenderers](#entityrenderers)
- [EvokerFangsRenderer](#evokerfangsrenderer)
- [EvokerRenderer](#evokerrenderer)
- [ExperienceOrbRenderer](#experienceorbrenderer)
- [FallingBlockRenderer](#fallingblockrenderer)
- [FireworkEntityRenderer](#fireworkentityrenderer)
- [FishingHookRenderer](#fishinghookrenderer)
- [FoxRenderer](#foxrenderer)
- [FrogRenderer](#frogrenderer)
- [GhastRenderer](#ghastrenderer)
- [GiantMobRenderer](#giantmobrenderer)
- [GlowSquidRenderer](#glowsquidrenderer)
- [GoatRenderer](#goatrenderer)
- [GuardianRenderer](#guardianrenderer)
- [HoglinRenderer](#hoglinrenderer)
- [HorseRenderer](#horserenderer)
- [HumanoidMobRenderer>](#humanoidmobrenderer)
- [HuskRenderer](#huskrenderer)
- [IllagerRenderer](#illagerrenderer)
- [IllusionerRenderer](#illusionerrenderer)
- [IronGolemRenderer](#irongolemrenderer)
- [ItemEntityRenderer](#itementityrenderer)
- [ItemFrameRenderer](#itemframerenderer)
- [ItemRenderer](#itemrenderer)
- [LeashKnotRenderer](#leashknotrenderer)
- [LightningBoltRenderer](#lightningboltrenderer)
- [LivingEntityRenderer>](#livingentityrenderer)
- [LlamaRenderer](#llamarenderer)
- [LlamaSpitRenderer](#llamaspitrenderer)
- [MagmaCubeRenderer](#magmacuberenderer)
- [MinecartRenderer](#minecartrenderer)
- [MobRenderer>](#mobrenderer)
- [MushroomCowRenderer](#mushroomcowrenderer)
- [NoopRenderer](#nooprenderer)
- [OcelotRenderer](#ocelotrenderer)
- [PaintingRenderer](#paintingrenderer)
- [PandaRenderer](#pandarenderer)
- [ParrotRenderer](#parrotrenderer)
- [PhantomRenderer](#phantomrenderer)
- [PiglinRenderer](#piglinrenderer)
- [PigRenderer](#pigrenderer)
- [PillagerRenderer](#pillagerrenderer)
- [PolarBearRenderer](#polarbearrenderer)
- [PufferfishRenderer](#pufferfishrenderer)
- [RabbitRenderer](#rabbitrenderer)
- [RavagerRenderer](#ravagerrenderer)
- [RenderLayerParent>](#renderlayerparent)
- [SalmonRenderer](#salmonrenderer)
- [SheepRenderer](#sheeprenderer)
- [ShulkerBulletRenderer](#shulkerbulletrenderer)
- [ShulkerRenderer](#shulkerrenderer)
- [SilverfishRenderer](#silverfishrenderer)
- [SkeletonRenderer](#skeletonrenderer)
- [SlimeRenderer](#slimerenderer)
- [SnifferRenderer](#snifferrenderer)
- [SnowGolemRenderer](#snowgolemrenderer)
- [SpectralArrowRenderer](#spectralarrowrenderer)
- [SpiderRenderer](#spiderrenderer)
- [SquidRenderer](#squidrenderer)
- [StrayRenderer](#strayrenderer)
- [StriderRenderer](#striderrenderer)
- [TadpoleRenderer](#tadpolerenderer)
- [ThrownItemRenderer](#thrownitemrenderer)
- [ThrownTridentRenderer](#throwntridentrenderer)
- [TippableArrowRenderer](#tippablearrowrenderer)
- [TntMinecartRenderer](#tntminecartrenderer)
- [TntRenderer](#tntrenderer)
- [TropicalFishRenderer](#tropicalfishrenderer)
- [TurtleRenderer](#turtlerenderer)
- [UndeadHorseRenderer](#undeadhorserenderer)
- [VexRenderer](#vexrenderer)
- [VillagerRenderer](#villagerrenderer)
- [VindicatorRenderer](#vindicatorrenderer)
- [WanderingTraderRenderer](#wanderingtraderrenderer)
- [WardenRenderer](#wardenrenderer)
- [WitchRenderer](#witchrenderer)
- [WitherBossRenderer](#witherbossrenderer)
- [WitherSkeletonRenderer](#witherskeletonrenderer)
- [WitherSkullRenderer](#witherskullrenderer)
- [WolfRenderer](#wolfrenderer)
- [ZoglinRenderer](#zoglinrenderer)
- [ZombieRenderer](#zombierenderer)
- [ZombieVillagerRenderer](#zombievillagerrenderer)
## AbstractHorseRenderer>

*class* `net.minecraft.client.renderer.entity.AbstractHorseRenderer>`

### Fields
- `private final float scale`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected void scale(T p_113754_,  PoseStack p_113755_,  float p_113756_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `getTextureLocation`, `renderNameTag`
- from `net.minecraft.client.renderer.entity.RenderLayerParent`: `getTextureLocation`

## AbstractZombieRenderer>

*class* `net.minecraft.client.renderer.entity.AbstractZombieRenderer>`

### Fields
- `private static final ResourceLocation ZOMBIE_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Zombie p_113771_)`
- `protected boolean isShaking(T p_113773_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## AllayRenderer

*class* `net.minecraft.client.renderer.entity.AllayRenderer`

### Fields
- `private static final ResourceLocation ALLAY_TEXTURE`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Allay p_234558_)`
- `protected int getBlockLightLevel(Allay p_234560_,  BlockPos p_234561_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## ArmorStandRenderer

*class* `net.minecraft.client.renderer.entity.ArmorStandRenderer`

### Fields
- `public static final ResourceLocation DEFAULT_SKIN_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(ArmorStand p_113798_)`
- `protected void setupRotations(ArmorStand p_113800_,  PoseStack p_113801_,  float p_113802_,  float p_113803_,  float p_113804_)`
- `protected boolean shouldShowName(ArmorStand p_113815_)`
- `@Nullable protected RenderType getRenderType(ArmorStand p_113806_,  boolean p_113807_,  boolean p_113808_,  boolean p_113809_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `render`, `scale`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`

## ArrowRenderer

*class* `net.minecraft.client.renderer.entity.ArrowRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public void render(T p_113839_,  float p_113840_,  float p_113841_,  PoseStack p_113842_,  MultiBufferSource p_113843_,  int p_113844_)`
- `public void vertex(org.joml.Matrix4f p_254392_,  org.joml.Matrix3f p_254011_,  VertexConsumer p_253902_,  int p_254058_,  int p_254338_,  int p_254196_,  float p_254003_,  float p_254165_,  int p_253982_,  int p_254037_,  int p_254038_,  int p_254271_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `getTextureLocation`, `renderNameTag`, `shouldRender`, `shouldShowName`

## AxolotlRenderer

*class* `net.minecraft.client.renderer.entity.AxolotlRenderer`

### Fields
- `private static final Map<Axolotl.Variant,ResourceLocation> TEXTURE_BY_TYPE`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Axolotl p_173925_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## BatRenderer

*class* `net.minecraft.client.renderer.entity.BatRenderer`

### Fields
- `private static final ResourceLocation BAT_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Bat p_113876_)`
- `protected void scale(Bat p_113878_,  PoseStack p_113879_,  float p_113880_)`
- `protected void setupRotations(Bat p_113882_,  PoseStack p_113883_,  float p_113884_,  float p_113885_,  float p_113886_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## BeeRenderer

*class* `net.minecraft.client.renderer.entity.BeeRenderer`

### Fields
- `private static final ResourceLocation ANGRY_BEE_TEXTURE`
- `private static final ResourceLocation ANGRY_NECTAR_BEE_TEXTURE`
- `private static final ResourceLocation BEE_TEXTURE`
- `private static final ResourceLocation NECTAR_BEE_TEXTURE`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Bee p_113897_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## BlazeRenderer

*class* `net.minecraft.client.renderer.entity.BlazeRenderer`

### Fields
- `private static final ResourceLocation BLAZE_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected int getBlockLightLevel(Blaze p_113910_,  BlockPos p_113911_)`
- `public ResourceLocation getTextureLocation(Blaze p_113908_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## BoatRenderer

*class* `net.minecraft.client.renderer.entity.BoatRenderer`

### Fields
- `private final Map<Boat.Type,com.mojang.datafixers.util.Pair<ResourceLocation,ListModel<Boat>>> boatResources`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `private ListModel<Boat> createBoatModel(EntityRendererProvider.Context p_248834_,  Boat.Type p_249317_,  boolean p_250093_)`
- `private static String getTextureLocation(Boat.Type p_234566_,  boolean p_234567_)`
- `public void render(Boat p_113929_,  float p_113930_,  float p_113931_,  PoseStack p_113932_,  MultiBufferSource p_113933_,  int p_113934_)`
- `@Deprecated public ResourceLocation getTextureLocation(Boat p_113927_)` (deprecated)
- `public com.mojang.datafixers.util.Pair<ResourceLocation,ListModel<Boat>> getModelWithLocation(Boat boat)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## CamelRenderer

*class* `net.minecraft.client.renderer.entity.CamelRenderer`

### Fields
- `private static final ResourceLocation CAMEL_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Camel p_249584_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## CatRenderer

*class* `net.minecraft.client.renderer.entity.CatRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Cat p_113950_)`
- `protected void scale(Cat p_113952_,  PoseStack p_113953_,  float p_113954_)`
- `protected void setupRotations(Cat p_113956_,  PoseStack p_113957_,  float p_113958_,  float p_113959_,  float p_113960_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## CaveSpiderRenderer

*class* `net.minecraft.client.renderer.entity.CaveSpiderRenderer`

### Fields
- `private static final ResourceLocation CAVE_SPIDER_LOCATION`
- `private static final float SCALE` (= 0.699999988079071f)

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected void scale(CaveSpider p_113974_,  PoseStack p_113975_,  float p_113976_)`
- `public ResourceLocation getTextureLocation(CaveSpider p_113972_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.SpiderRenderer`: `getFlipDegrees`
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## ChestedHorseRenderer

*class* `net.minecraft.client.renderer.entity.ChestedHorseRenderer`

### Fields
- `private static final Map<EntityType<?>,ResourceLocation> MAP`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(T p_113987_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.AbstractHorseRenderer`: `scale`
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## ChickenRenderer

*class* `net.minecraft.client.renderer.entity.ChickenRenderer`

### Fields
- `private static final ResourceLocation CHICKEN_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Chicken p_113998_)`
- `protected float getBob(Chicken p_114000_,  float p_114001_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## CodRenderer

*class* `net.minecraft.client.renderer.entity.CodRenderer`

### Fields
- `private static final ResourceLocation COD_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Cod p_114015_)`
- `protected void setupRotations(Cod p_114017_,  PoseStack p_114018_,  float p_114019_,  float p_114020_,  float p_114021_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## CowRenderer

*class* `net.minecraft.client.renderer.entity.CowRenderer`

### Fields
- `private static final ResourceLocation COW_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Cow p_114029_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## CreeperRenderer

*class* `net.minecraft.client.renderer.entity.CreeperRenderer`

### Fields
- `private static final ResourceLocation CREEPER_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected void scale(Creeper p_114046_,  PoseStack p_114047_,  float p_114048_)`
- `protected float getWhiteOverlayProgress(Creeper p_114043_,  float p_114044_)`
- `public ResourceLocation getTextureLocation(Creeper p_114041_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## DisplayRenderer

*class* `net.minecraft.client.renderer.entity.DisplayRenderer`

### Fields
- `private final EntityRenderDispatcher entityRenderDispatcher`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(T p_270675_)`
- `public void render(T p_270405_,  float p_270225_,  float p_270279_,  PoseStack p_270728_,  MultiBufferSource p_270209_,  int p_270298_)`
- `private org.joml.Quaternionf calculateOrientation(Display.RenderState p_277846_,  T p_271013_,  float p_298568_,  org.joml.Quaternionf p_298476_)`
- `private static float cameraYrot(Camera p_299213_)`
- `private static float cameraXRot(Camera p_297923_)`
- `private static <T extends Display> float entityYRot(T p_297849_,  float p_297686_)`
- `private static <T extends Display> float entityXRot(T p_298651_,  float p_297691_)`
- `@Nullable protected abstract S getSubState(T p_270246_)`
- `protected abstract void renderInner(T p_277862_,  S p_277363_,  PoseStack p_277686_,  MultiBufferSource p_277429_,  int p_278023_,  float p_277453_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## DisplayRenderer.BlockDisplayRenderer

*class* `net.minecraft.client.renderer.entity.DisplayRenderer.BlockDisplayRenderer`

Enclosing class: DisplayRenderer<T extends Display, S>

### Fields
- `private final BlockRenderDispatcher blockRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `@Nullable protected Display.BlockDisplay.BlockRenderState getSubState(Display.BlockDisplay p_277721_)`
- `public void renderInner(Display.BlockDisplay p_277939_,  Display.BlockDisplay.BlockRenderState p_277885_,  PoseStack p_277831_,  MultiBufferSource p_277554_,  int p_278071_,  float p_277847_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.DisplayRenderer`: `getTextureLocation`, `render`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## DisplayRenderer.ItemDisplayRenderer

*class* `net.minecraft.client.renderer.entity.DisplayRenderer.ItemDisplayRenderer`

Enclosing class: DisplayRenderer<T extends Display, S>

### Fields
- `private final ItemRenderer itemRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `@Nullable protected Display.ItemDisplay.ItemRenderState getSubState(Display.ItemDisplay p_277464_)`
- `public void renderInner(Display.ItemDisplay p_277863_,  Display.ItemDisplay.ItemRenderState p_277481_,  PoseStack p_277889_,  MultiBufferSource p_277509_,  int p_277861_,  float p_277670_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.DisplayRenderer`: `getTextureLocation`, `render`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## DisplayRenderer.TextDisplayRenderer

*class* `net.minecraft.client.renderer.entity.DisplayRenderer.TextDisplayRenderer`

Enclosing class: DisplayRenderer<T extends Display, S>

### Fields
- `private final Font font`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `private Display.TextDisplay.CachedInfo splitLines(Component p_270823_,  int p_270893_)`
- `@Nullable protected Display.TextDisplay.TextRenderState getSubState(Display.TextDisplay p_277947_)`
- `public void renderInner(Display.TextDisplay p_277522_,  Display.TextDisplay.TextRenderState p_277620_,  PoseStack p_277536_,  MultiBufferSource p_277845_,  int p_278046_,  float p_277769_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.DisplayRenderer`: `getTextureLocation`, `render`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## DolphinRenderer

*class* `net.minecraft.client.renderer.entity.DolphinRenderer`

### Fields
- `private static final ResourceLocation DOLPHIN_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Dolphin p_114059_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## DragonFireballRenderer

*class* `net.minecraft.client.renderer.entity.DragonFireballRenderer`

### Fields
- `private static final ResourceLocation TEXTURE_LOCATION`
- `private static final RenderType RENDER_TYPE`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected int getBlockLightLevel(DragonFireball p_114087_,  BlockPos p_114088_)`
- `public void render(DragonFireball p_114080_,  float p_114081_,  float p_114082_,  PoseStack p_114083_,  MultiBufferSource p_114084_,  int p_114085_)`
- `private static void vertex(VertexConsumer p_254095_,  org.joml.Matrix4f p_254477_,  org.joml.Matrix3f p_253948_,  int p_253829_,  float p_253995_,  int p_254031_,  int p_253641_,  int p_254243_)`
- `public ResourceLocation getTextureLocation(DragonFireball p_114078_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## DrownedRenderer

*class* `net.minecraft.client.renderer.entity.DrownedRenderer`

### Fields
- `private static final ResourceLocation DROWNED_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Zombie p_114115_)`
- `protected void setupRotations(Drowned p_114109_,  PoseStack p_114110_,  float p_114111_,  float p_114112_,  float p_114113_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.AbstractZombieRenderer`: `isShaking`
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `scale`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## ElderGuardianRenderer

*class* `net.minecraft.client.renderer.entity.ElderGuardianRenderer`

### Fields
- `public static final ResourceLocation GUARDIAN_ELDER_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected void scale(Guardian p_114129_,  PoseStack p_114130_,  float p_114131_)`
- `public ResourceLocation getTextureLocation(Guardian p_114127_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.GuardianRenderer`: `render`, `shouldRender`
- from `net.minecraft.client.renderer.entity.MobRenderer`: `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## EndCrystalRenderer

*class* `net.minecraft.client.renderer.entity.EndCrystalRenderer`

### Fields
- `private static final ResourceLocation END_CRYSTAL_LOCATION`
- `private static final RenderType RENDER_TYPE`
- `private static final float SIN_45`
- `private static final String GLASS` (= "glass")
- `private static final String BASE` (= "base")
- `private final ModelPart cube`
- `private final ModelPart glass`
- `private final ModelPart base`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void render(EndCrystal p_114162_,  float p_114163_,  float p_114164_,  PoseStack p_114165_,  MultiBufferSource p_114166_,  int p_114167_)`
- `public static float getY(EndCrystal p_114159_,  float p_114160_)`
- `public ResourceLocation getTextureLocation(EndCrystal p_114157_)`
- `public boolean shouldRender(EndCrystal p_114169_,  Frustum p_114170_,  double p_114171_,  double p_114172_,  double p_114173_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldShowName`

## EnderDragonRenderer

*class* `net.minecraft.client.renderer.entity.EnderDragonRenderer`

### Fields
- `public static final ResourceLocation CRYSTAL_BEAM_LOCATION`
- `private static final ResourceLocation DRAGON_EXPLODING_LOCATION`
- `private static final ResourceLocation DRAGON_LOCATION`
- `private static final ResourceLocation DRAGON_EYES_LOCATION`
- `private static final RenderType RENDER_TYPE`
- `private static final RenderType DECAL`
- `private static final RenderType EYES`
- `private static final RenderType BEAM`
- `private static final float HALF_SQRT_3`
- `private final EnderDragonRenderer.DragonModel model`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public void render(EnderDragon p_114208_,  float p_114209_,  float p_114210_,  PoseStack p_114211_,  MultiBufferSource p_114212_,  int p_114213_)`
- `private static void vertex01(VertexConsumer p_254498_,  org.joml.Matrix4f p_253891_,  int p_254278_)`
- `private static void vertex2(VertexConsumer p_253956_,  org.joml.Matrix4f p_254053_,  float p_253704_,  float p_253701_)`
- `private static void vertex3(VertexConsumer p_253850_,  org.joml.Matrix4f p_254379_,  float p_253729_,  float p_254030_)`
- `private static void vertex4(VertexConsumer p_254184_,  org.joml.Matrix4f p_254082_,  float p_253649_,  float p_253694_)`
- `public static void renderCrystalBeams(float p_114188_,  float p_114189_,  float p_114190_,  float p_114191_,  int p_114192_,  PoseStack p_114193_,  MultiBufferSource p_114194_,  int p_114195_)`
- `public ResourceLocation getTextureLocation(EnderDragon p_114206_)`
- `public static LayerDefinition createBodyLayer()`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## EnderDragonRenderer.DragonModel

*class* `net.minecraft.client.renderer.entity.EnderDragonRenderer.DragonModel`

Enclosing class: EnderDragonRenderer

### Fields
- `private final ModelPart head`
- `private final ModelPart neck`
- `private final ModelPart jaw`
- `private final ModelPart body`
- `private final ModelPart leftWing`
- `private final ModelPart leftWingTip`
- `private final ModelPart leftFrontLeg`
- `private final ModelPart leftFrontLegTip`
- `private final ModelPart leftFrontFoot`
- `private final ModelPart leftRearLeg`
- `private final ModelPart leftRearLegTip`
- `private final ModelPart leftRearFoot`
- `private final ModelPart rightWing`
- `private final ModelPart rightWingTip`
- `private final ModelPart rightFrontLeg`
- `private final ModelPart rightFrontLegTip`
- `private final ModelPart rightFrontFoot`
- `private final ModelPart rightRearLeg`
- `private final ModelPart rightRearLegTip`
- `private final ModelPart rightRearFoot`
- `@Nullable private EnderDragon entity`
- `private float a`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public void prepareMobModel(EnderDragon p_114269_,  float p_114270_,  float p_114271_,  float p_114272_)`
- `public void setupAnim(EnderDragon p_114274_,  float p_114275_,  float p_114276_,  float p_114277_,  float p_114278_,  float p_114279_)`
- `public void renderToBuffer(PoseStack p_114281_,  VertexConsumer p_114282_,  int p_114283_,  int p_114284_,  float p_114285_,  float p_114286_,  float p_114287_,  float p_114288_)`
- `private void renderSide(PoseStack p_173978_,  VertexConsumer p_173979_,  int p_173980_,  int p_173981_,  float p_173982_,  ModelPart p_173983_,  ModelPart p_173984_,  ModelPart p_173985_,  ModelPart p_173986_,  ModelPart p_173987_,  ModelPart p_173988_,  ModelPart p_173989_,  float p_173990_)`

### Inherited methods
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## EndermanRenderer

*class* `net.minecraft.client.renderer.entity.EndermanRenderer`

### Fields
- `private static final ResourceLocation ENDERMAN_LOCATION`
- `private final RandomSource random`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public void render(EnderMan p_114339_,  float p_114340_,  float p_114341_,  PoseStack p_114342_,  MultiBufferSource p_114343_,  int p_114344_)`
- `public Vec3 getRenderOffset(EnderMan p_114336_,  float p_114337_)`
- `public ResourceLocation getTextureLocation(EnderMan p_114334_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getSkyLightLevel`, `renderNameTag`

## EndermiteRenderer

*class* `net.minecraft.client.renderer.entity.EndermiteRenderer`

### Fields
- `private static final ResourceLocation ENDERMITE_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected float getFlipDegrees(Endermite p_114352_)`
- `public ResourceLocation getTextureLocation(Endermite p_114354_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## EntityRenderDispatcher

*class* `net.minecraft.client.renderer.entity.EntityRenderDispatcher`

### Fields
- `private static final RenderType SHADOW_RENDER_TYPE`
- `private static final float MAX_SHADOW_RADIUS` (= 32.0f)
- `private static final float SHADOW_POWER_FALLOFF_Y` (= 0.5f)
- `public Map<EntityType<?>,EntityRenderer<?>> renderers`
- `private Map<PlayerSkin.Model,EntityRenderer<? extends Player>> playerRenderers`
- `public final TextureManager textureManager`
- `private Level level`
- `public Camera camera`
- `private org.joml.Quaternionf cameraOrientation`
- `public Entity crosshairPickEntity`
- `private final ItemRenderer itemRenderer`
- `private final BlockRenderDispatcher blockRenderDispatcher`
- `private final ItemInHandRenderer itemInHandRenderer`
- `private final Font font`
- `public final Options options`
- `private final EntityModelSet entityModels`
- `private boolean shouldRenderShadow`
- `private boolean renderHitBoxes`

### Methods
- `public <E extends Entity> int getPackedLightCoords(E p_114395_,  float p_114396_)`
- `public <T extends Entity> EntityRenderer<? super T> getRenderer(T p_114383_)`
- `public void prepare(Level p_114409_,  Camera p_114410_,  Entity p_114411_)`
- `public void overrideCameraOrientation(org.joml.Quaternionf p_254264_)`
- `public void setRenderShadow(boolean p_114469_)`
- `public void setRenderHitBoxes(boolean p_114474_)`
- `public boolean shouldRenderHitBoxes()`
- `public <E extends Entity> boolean shouldRender(E p_114398_,  Frustum p_114399_,  double p_114400_,  double p_114401_,  double p_114402_)`
- `public <E extends Entity> void render(E p_114385_,  double p_114386_,  double p_114387_,  double p_114388_,  float p_114389_,  float p_114390_,  PoseStack p_114391_,  MultiBufferSource p_114392_,  int p_114393_)`
- `private static void renderHitbox(PoseStack p_114442_,  VertexConsumer p_114443_,  Entity p_114444_,  float p_114445_)`
- `private void renderFlame(PoseStack p_114454_,  MultiBufferSource p_114455_,  Entity p_114456_)`
- `private static void fireVertex(PoseStack.Pose p_114415_,  VertexConsumer p_114416_,  float p_114417_,  float p_114418_,  float p_114419_,  float p_114420_,  float p_114421_)`
- `private static void renderShadow(PoseStack p_114458_,  MultiBufferSource p_114459_,  Entity p_114460_,  float p_114461_,  float p_114462_,  LevelReader p_114463_,  float p_114464_)`
- `private static void renderBlockShadow(PoseStack.Pose p_277956_,  VertexConsumer p_277533_,  ChunkAccess p_277501_,  LevelReader p_277622_,  BlockPos p_277911_,  double p_277682_,  double p_278099_,  double p_277806_,  float p_277844_,  float p_277496_)`
- `private static void shadowVertex(PoseStack.Pose p_114423_,  VertexConsumer p_114424_,  float p_114425_,  float p_114426_,  float p_114427_,  float p_114428_,  float p_114429_,  float p_114430_)`
- `public void setLevel(@Nullable  Level p_114407_)`
- `public double distanceToSqr(Entity p_114472_)`
- `public double distanceToSqr(double p_114379_,  double p_114380_,  double p_114381_)`
- `public org.joml.Quaternionf cameraOrientation()`
- `public ItemInHandRenderer getItemInHandRenderer()`
- `public Map<PlayerSkin.Model,EntityRenderer<? extends Player>> getSkinMap()`
- `public void onResourceManagerReload(ResourceManager p_174004_)`

### Inherited methods
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`
- from `net.minecraft.server.packs.resources.ResourceManagerReloadListener`: `reload`

## EntityRenderer

*class* `net.minecraft.client.renderer.entity.EntityRenderer`

### Fields
- `protected static final float NAMETAG_SCALE` (= 0.02500000037252903f)
- `protected final EntityRenderDispatcher entityRenderDispatcher`
- `private final Font font`
- `protected float shadowRadius`
- `protected float shadowStrength`

### Methods
- `public final int getPackedLightCoords(T p_114506_,  float p_114507_)`
- `protected int getSkyLightLevel(T p_114509_,  BlockPos p_114510_)`
- `protected int getBlockLightLevel(T p_114496_,  BlockPos p_114497_)`
- `public boolean shouldRender(T p_114491_,  Frustum p_114492_,  double p_114493_,  double p_114494_,  double p_114495_)`
- `public Vec3 getRenderOffset(T p_114483_,  float p_114484_)`
- `public void render(T p_114485_,  float p_114486_,  float p_114487_,  PoseStack p_114488_,  MultiBufferSource p_114489_,  int p_114490_)`
- `protected boolean shouldShowName(T p_114504_)`
- `public abstract ResourceLocation getTextureLocation(T p_114482_)`
- `public Font getFont()`
- `protected void renderNameTag(T p_114498_,  Component p_114499_,  PoseStack p_114500_,  MultiBufferSource p_114501_,  int p_114502_)`

## EntityRendererProvider

*interface* `net.minecraft.client.renderer.entity.EntityRendererProvider`

### Methods
- `EntityRenderer<T> create(EntityRendererProvider.Context p_174010_)`

## EntityRendererProvider.Context

*class* `net.minecraft.client.renderer.entity.EntityRendererProvider.Context`

Enclosing interface: EntityRendererProvider<T extends Entity>

### Fields
- `private final EntityRenderDispatcher entityRenderDispatcher`
- `private final ItemRenderer itemRenderer`
- `private final BlockRenderDispatcher blockRenderDispatcher`
- `private final ItemInHandRenderer itemInHandRenderer`
- `private final ResourceManager resourceManager`
- `private final EntityModelSet modelSet`
- `private final Font font`

### Methods
- `public EntityRenderDispatcher getEntityRenderDispatcher()`
- `public ItemRenderer getItemRenderer()`
- `public BlockRenderDispatcher getBlockRenderDispatcher()`
- `public ItemInHandRenderer getItemInHandRenderer()`
- `public ResourceManager getResourceManager()`
- `public EntityModelSet getModelSet()`
- `public ModelManager getModelManager()`
- `public ModelPart bakeLayer(ModelLayerLocation p_174024_)`
- `public Font getFont()`

## EntityRenderers

*class* `net.minecraft.client.renderer.entity.EntityRenderers`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Map<EntityType<?>,EntityRendererProvider<?>> PROVIDERS`
- `private static final Map<PlayerSkin.Model,EntityRendererProvider<AbstractClientPlayer>> PLAYER_PROVIDERS`

### Methods
- `public static <T extends Entity> void register(EntityType<? extends T> p_174037_,  EntityRendererProvider<T> p_174038_)`
- `public static Map<EntityType<?>,EntityRenderer<?>> createEntityRenderers(EntityRendererProvider.Context p_174050_)`
- `public static Map<PlayerSkin.Model,EntityRenderer<? extends Player>> createPlayerRenderers(EntityRendererProvider.Context p_174052_)`
- `public static boolean validateRegistrations()`

## EvokerFangsRenderer

*class* `net.minecraft.client.renderer.entity.EvokerFangsRenderer`

### Fields
- `private static final ResourceLocation TEXTURE_LOCATION`
- `private final EvokerFangsModel<EvokerFangs> model`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public void render(EvokerFangs p_114528_,  float p_114529_,  float p_114530_,  PoseStack p_114531_,  MultiBufferSource p_114532_,  int p_114533_)`
- `public ResourceLocation getTextureLocation(EvokerFangs p_114526_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## EvokerRenderer

*class* `net.minecraft.client.renderer.entity.EvokerRenderer`

### Fields
- `private static final ResourceLocation EVOKER_ILLAGER`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(T p_114541_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.IllagerRenderer`: `scale`
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## ExperienceOrbRenderer

*class* `net.minecraft.client.renderer.entity.ExperienceOrbRenderer`

### Fields
- `private static final ResourceLocation EXPERIENCE_ORB_LOCATION`
- `private static final RenderType RENDER_TYPE`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected int getBlockLightLevel(ExperienceOrb p_114606_,  BlockPos p_114607_)`
- `public void render(ExperienceOrb p_114599_,  float p_114600_,  float p_114601_,  PoseStack p_114602_,  MultiBufferSource p_114603_,  int p_114604_)`
- `private static void vertex(VertexConsumer p_254515_,  org.joml.Matrix4f p_253946_,  org.joml.Matrix3f p_253754_,  float p_253952_,  float p_254066_,  int p_254283_,  int p_254566_,  int p_253882_,  float p_254434_,  float p_254223_,  int p_254372_)`
- `public ResourceLocation getTextureLocation(ExperienceOrb p_114597_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## FallingBlockRenderer

*class* `net.minecraft.client.renderer.entity.FallingBlockRenderer`

### Fields
- `private final BlockRenderDispatcher dispatcher`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public void render(FallingBlockEntity p_114634_,  float p_114635_,  float p_114636_,  PoseStack p_114637_,  MultiBufferSource p_114638_,  int p_114639_)`
- `public ResourceLocation getTextureLocation(FallingBlockEntity p_114632_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## FireworkEntityRenderer

*class* `net.minecraft.client.renderer.entity.FireworkEntityRenderer`

### Fields
- `private final ItemRenderer itemRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public void render(FireworkRocketEntity p_114656_,  float p_114657_,  float p_114658_,  PoseStack p_114659_,  MultiBufferSource p_114660_,  int p_114661_)`
- `public ResourceLocation getTextureLocation(FireworkRocketEntity p_114654_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## FishingHookRenderer

*class* `net.minecraft.client.renderer.entity.FishingHookRenderer`

### Fields
- `private static final ResourceLocation TEXTURE_LOCATION`
- `private static final RenderType RENDER_TYPE`
- `private static final double VIEW_BOBBING_SCALE` (= 960.0)

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public void render(FishingHook p_114705_,  float p_114706_,  float p_114707_,  PoseStack p_114708_,  MultiBufferSource p_114709_,  int p_114710_)`
- `private static float fraction(int p_114691_,  int p_114692_)`
- `private static void vertex(VertexConsumer p_254464_,  org.joml.Matrix4f p_254085_,  org.joml.Matrix3f p_253962_,  int p_254296_,  float p_253632_,  int p_254132_,  int p_254171_,  int p_254026_)`
- `private static void stringVertex(float p_174119_,  float p_174120_,  float p_174121_,  VertexConsumer p_174122_,  PoseStack.Pose p_174123_,  float p_174124_,  float p_174125_)`
- `public ResourceLocation getTextureLocation(FishingHook p_114703_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## FoxRenderer

*class* `net.minecraft.client.renderer.entity.FoxRenderer`

### Fields
- `private static final ResourceLocation RED_FOX_TEXTURE`
- `private static final ResourceLocation RED_FOX_SLEEP_TEXTURE`
- `private static final ResourceLocation SNOW_FOX_TEXTURE`
- `private static final ResourceLocation SNOW_FOX_SLEEP_TEXTURE`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected void setupRotations(Fox p_114738_,  PoseStack p_114739_,  float p_114740_,  float p_114741_,  float p_114742_)`
- `public ResourceLocation getTextureLocation(Fox p_114736_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## FrogRenderer

*class* `net.minecraft.client.renderer.entity.FrogRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Frog p_234623_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## GhastRenderer

*class* `net.minecraft.client.renderer.entity.GhastRenderer`

### Fields
- `private static final ResourceLocation GHAST_LOCATION`
- `private static final ResourceLocation GHAST_SHOOTING_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Ghast p_114755_)`
- `protected void scale(Ghast p_114757_,  PoseStack p_114758_,  float p_114759_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## GiantMobRenderer

*class* `net.minecraft.client.renderer.entity.GiantMobRenderer`

### Fields
- `private static final ResourceLocation ZOMBIE_LOCATION`
- `private final float scale`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected void scale(Giant p_114775_,  PoseStack p_114776_,  float p_114777_)`
- `public ResourceLocation getTextureLocation(Giant p_114773_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## GlowSquidRenderer

*class* `net.minecraft.client.renderer.entity.GlowSquidRenderer`

### Fields
- `private static final ResourceLocation GLOW_SQUID_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(GlowSquid p_174144_)`
- `protected int getBlockLightLevel(GlowSquid p_174146_,  BlockPos p_174147_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.SquidRenderer`: `getBob`, `setupRotations`
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## GoatRenderer

*class* `net.minecraft.client.renderer.entity.GoatRenderer`

### Fields
- `private static final ResourceLocation GOAT_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Goat p_174157_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## GuardianRenderer

*class* `net.minecraft.client.renderer.entity.GuardianRenderer`

### Fields
- `private static final ResourceLocation GUARDIAN_LOCATION`
- `private static final ResourceLocation GUARDIAN_BEAM_LOCATION`
- `private static final RenderType BEAM_RENDER_TYPE`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public boolean shouldRender(Guardian p_114836_,  Frustum p_114837_,  double p_114838_,  double p_114839_,  double p_114840_)`
- `private Vec3 getPosition(LivingEntity p_114803_,  double p_114804_,  float p_114805_)`
- `public void render(Guardian p_114829_,  float p_114830_,  float p_114831_,  PoseStack p_114832_,  MultiBufferSource p_114833_,  int p_114834_)`
- `private static void vertex(VertexConsumer p_253637_,  org.joml.Matrix4f p_253920_,  org.joml.Matrix3f p_253881_,  float p_253994_,  float p_254492_,  float p_254474_,  int p_254080_,  int p_253655_,  int p_254133_,  float p_254233_,  float p_253939_)`
- `public ResourceLocation getTextureLocation(Guardian p_114827_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## HoglinRenderer

*class* `net.minecraft.client.renderer.entity.HoglinRenderer`

### Fields
- `private static final ResourceLocation HOGLIN_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Hoglin p_114862_)`
- `protected boolean isShaking(Hoglin p_114864_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## HorseRenderer

*class* `net.minecraft.client.renderer.entity.HorseRenderer`

### Fields
- `private static final Map<Variant,ResourceLocation> LOCATION_BY_VARIANT`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Horse p_114872_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.AbstractHorseRenderer`: `scale`
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## HumanoidMobRenderer>

*class* `net.minecraft.client.renderer.entity.HumanoidMobRenderer>`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `getTextureLocation`, `renderNameTag`
- from `net.minecraft.client.renderer.entity.RenderLayerParent`: `getTextureLocation`

## HuskRenderer

*class* `net.minecraft.client.renderer.entity.HuskRenderer`

### Fields
- `private static final ResourceLocation HUSK_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected void scale(Zombie p_114907_,  PoseStack p_114908_,  float p_114909_)`
- `public ResourceLocation getTextureLocation(Zombie p_114905_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.AbstractZombieRenderer`: `isShaking`
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## IllagerRenderer

*class* `net.minecraft.client.renderer.entity.IllagerRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected void scale(T p_114919_,  PoseStack p_114920_,  float p_114921_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `getTextureLocation`, `renderNameTag`
- from `net.minecraft.client.renderer.entity.RenderLayerParent`: `getTextureLocation`

## IllusionerRenderer

*class* `net.minecraft.client.renderer.entity.IllusionerRenderer`

### Fields
- `private static final ResourceLocation ILLUSIONER`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Illusioner p_114950_)`
- `public void render(Illusioner p_114952_,  float p_114953_,  float p_114954_,  PoseStack p_114955_,  MultiBufferSource p_114956_,  int p_114957_)`
- `protected boolean isBodyVisible(Illusioner p_114959_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.IllagerRenderer`: `scale`
- from `net.minecraft.client.renderer.entity.MobRenderer`: `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## IronGolemRenderer

*class* `net.minecraft.client.renderer.entity.IronGolemRenderer`

### Fields
- `private static final ResourceLocation GOLEM_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(IronGolem p_115012_)`
- `protected void setupRotations(IronGolem p_115014_,  PoseStack p_115015_,  float p_115016_,  float p_115017_,  float p_115018_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## ItemEntityRenderer

*class* `net.minecraft.client.renderer.entity.ItemEntityRenderer`

### Fields
- `private static final float ITEM_BUNDLE_OFFSET_SCALE` (= 0.15000000596046448f)
- `private static final int ITEM_COUNT_FOR_5_BUNDLE` (= 48)
- `private static final int ITEM_COUNT_FOR_4_BUNDLE` (= 32)
- `private static final int ITEM_COUNT_FOR_3_BUNDLE` (= 16)
- `private static final int ITEM_COUNT_FOR_2_BUNDLE` (= 1)
- `private static final float FLAT_ITEM_BUNDLE_OFFSET_X` (= 0.0f)
- `private static final float FLAT_ITEM_BUNDLE_OFFSET_Y` (= 0.0f)
- `private static final float FLAT_ITEM_BUNDLE_OFFSET_Z` (= 0.09375f)
- `private final ItemRenderer itemRenderer`
- `private final RandomSource random`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected int getRenderAmount(ItemStack p_115043_)`
- `public void render(ItemEntity p_115036_,  float p_115037_,  float p_115038_,  PoseStack p_115039_,  MultiBufferSource p_115040_,  int p_115041_)`
- `public ResourceLocation getTextureLocation(ItemEntity p_115034_)`
- `public boolean shouldSpreadItems()`
  - returns: If items should spread out when rendered in 3D
- `public boolean shouldBob()`
  - returns: If items should have a bob effect

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## ItemFrameRenderer

*class* `net.minecraft.client.renderer.entity.ItemFrameRenderer`

### Fields
- `private static final ModelResourceLocation FRAME_LOCATION`
- `private static final ModelResourceLocation MAP_FRAME_LOCATION`
- `private static final ModelResourceLocation GLOW_FRAME_LOCATION`
- `private static final ModelResourceLocation GLOW_MAP_FRAME_LOCATION`
- `public static final int GLOW_FRAME_BRIGHTNESS` (= 5)
- `public static final int BRIGHT_MAP_LIGHT_ADJUSTMENT` (= 30)
- `private final ItemRenderer itemRenderer`
- `private final BlockRenderDispatcher blockRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected int getBlockLightLevel(T p_174216_,  BlockPos p_174217_)`
- `public void render(T p_115076_,  float p_115077_,  float p_115078_,  PoseStack p_115079_,  MultiBufferSource p_115080_,  int p_115081_)`
- `private int getLightVal(T p_174209_,  int p_174210_,  int p_174211_)`
- `private ModelResourceLocation getFrameModelResourceLoc(T p_174213_,  ItemStack p_174214_)`
- `public Vec3 getRenderOffset(T p_115073_,  float p_115074_)`
- `public ResourceLocation getTextureLocation(T p_115071_)`
- `protected boolean shouldShowName(T p_115091_)`
- `protected void renderNameTag(T p_115083_,  Component p_115084_,  PoseStack p_115085_,  MultiBufferSource p_115086_,  int p_115087_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getFont`, `getPackedLightCoords`, `getSkyLightLevel`, `shouldRender`

## ItemRenderer

*class* `net.minecraft.client.renderer.entity.ItemRenderer`

### Fields
- `public static final ResourceLocation ENCHANTED_GLINT_ENTITY`
- `public static final ResourceLocation ENCHANTED_GLINT_ITEM`
- `private static final Set<Item> IGNORED`
- `public static final int GUI_SLOT_CENTER_X` (= 8)
- `public static final int GUI_SLOT_CENTER_Y` (= 8)
- `public static final int ITEM_COUNT_BLIT_OFFSET` (= 200)
- `public static final float COMPASS_FOIL_UI_SCALE` (= 0.5f)
- `public static final float COMPASS_FOIL_FIRST_PERSON_SCALE` (= 0.75f)
- `public static final float COMPASS_FOIL_TEXTURE_SCALE` (= 0.0078125f)
- `private static final ModelResourceLocation TRIDENT_MODEL`
- `public static final ModelResourceLocation TRIDENT_IN_HAND_MODEL`
- `private static final ModelResourceLocation SPYGLASS_MODEL`
- `public static final ModelResourceLocation SPYGLASS_IN_HAND_MODEL`
- `private final Minecraft minecraft`
- `private final ItemModelShaper itemModelShaper`
- `private final TextureManager textureManager`
- `private final ItemColors itemColors`
- `private final BlockEntityWithoutLevelRenderer blockEntityRenderer`

### Methods
- `public ItemModelShaper getItemModelShaper()`
- `public void renderModelLists(BakedModel p_115190_,  ItemStack p_115191_,  int p_115192_,  int p_115193_,  PoseStack p_115194_,  VertexConsumer p_115195_)`
- `public void render(ItemStack p_115144_,  ItemDisplayContext p_270188_,  boolean p_115146_,  PoseStack p_115147_,  MultiBufferSource p_115148_,  int p_115149_,  int p_115150_,  BakedModel p_115151_)`
- `private static boolean hasAnimatedTexture(ItemStack p_286353_)`
- `public static VertexConsumer getArmorFoilBuffer(MultiBufferSource p_115185_,  RenderType p_115186_,  boolean p_115187_,  boolean p_115188_)`
- `public static VertexConsumer getCompassFoilBuffer(MultiBufferSource p_115181_,  RenderType p_115182_,  PoseStack.Pose p_115183_)`
- `public static VertexConsumer getCompassFoilBufferDirect(MultiBufferSource p_115208_,  RenderType p_115209_,  PoseStack.Pose p_115210_)`
- `public static VertexConsumer getFoilBuffer(MultiBufferSource p_115212_,  RenderType p_115213_,  boolean p_115214_,  boolean p_115215_)`
- `public static VertexConsumer getFoilBufferDirect(MultiBufferSource p_115223_,  RenderType p_115224_,  boolean p_115225_,  boolean p_115226_)`
- `public void renderQuadList(PoseStack p_115163_,  VertexConsumer p_115164_,  List<BakedQuad> p_115165_,  ItemStack p_115166_,  int p_115167_,  int p_115168_)`
- `public BakedModel getModel(ItemStack p_174265_,  @Nullable  Level p_174266_,  @Nullable  LivingEntity p_174267_,  int p_174268_)`
- `public void renderStatic(ItemStack p_270761_,  ItemDisplayContext p_270648_,  int p_270410_,  int p_270894_,  PoseStack p_270430_,  MultiBufferSource p_270457_,  @Nullable  Level p_270149_,  int p_270509_)`
- `public void renderStatic(@Nullable  LivingEntity p_270101_,  ItemStack p_270637_,  ItemDisplayContext p_270437_,  boolean p_270434_,  PoseStack p_270230_,  MultiBufferSource p_270411_,  @Nullable  Level p_270641_,  int p_270595_,  int p_270927_,  int p_270845_)`
- `public void onResourceManagerReload(ResourceManager p_115105_)`
- `public BlockEntityWithoutLevelRenderer getBlockEntityRenderer()`

### Inherited methods
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`
- from `net.minecraft.server.packs.resources.ResourceManagerReloadListener`: `reload`

## LeashKnotRenderer

*class* `net.minecraft.client.renderer.entity.LeashKnotRenderer`

### Fields
- `private static final ResourceLocation KNOT_LOCATION`
- `private final LeashKnotModel<LeashFenceKnotEntity> model`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public void render(LeashFenceKnotEntity p_115246_,  float p_115247_,  float p_115248_,  PoseStack p_115249_,  MultiBufferSource p_115250_,  int p_115251_)`
- `public ResourceLocation getTextureLocation(LeashFenceKnotEntity p_115244_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## LightningBoltRenderer

*class* `net.minecraft.client.renderer.entity.LightningBoltRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public void render(LightningBolt p_115266_,  float p_115267_,  float p_115268_,  PoseStack p_115269_,  MultiBufferSource p_115270_,  int p_115271_)`
- `private static void quad(org.joml.Matrix4f p_253966_,  VertexConsumer p_115274_,  float p_115275_,  float p_115276_,  int p_115277_,  float p_115278_,  float p_115279_,  float p_115280_,  float p_115281_,  float p_115282_,  float p_115283_,  float p_115284_,  boolean p_115285_,  boolean p_115286_,  boolean p_115287_,  boolean p_115288_)`
- `public ResourceLocation getTextureLocation(LightningBolt p_115264_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## LivingEntityRenderer>

*class* `net.minecraft.client.renderer.entity.LivingEntityRenderer>`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final float EYE_BED_OFFSET`
- `protected M extends EntityModel<T> model`
- `protected final List<RenderLayer<T extends LivingEntity,M extends EntityModel<T>>> layers`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public final boolean addLayer(RenderLayer<T,M> p_115327_)`
- `public M getModel()`
- `public void render(T p_115308_,  float p_115309_,  float p_115310_,  PoseStack p_115311_,  MultiBufferSource p_115312_,  int p_115313_)`
- `@Nullable protected RenderType getRenderType(T p_115322_,  boolean p_115323_,  boolean p_115324_,  boolean p_115325_)`
- `public static int getOverlayCoords(LivingEntity p_115339_,  float p_115340_)`
- `protected boolean isBodyVisible(T p_115341_)`
- `private static float sleepDirectionToRotation(Direction p_115329_)`
- `protected boolean isShaking(T p_115304_)`
- `protected void setupRotations(T p_115317_,  PoseStack p_115318_,  float p_115319_,  float p_115320_,  float p_115321_)`
- `protected float getAttackAnim(T p_115343_,  float p_115344_)`
- `protected float getBob(T p_115305_,  float p_115306_)`
- `protected float getFlipDegrees(T p_115337_)`
- `protected float getWhiteOverlayProgress(T p_115334_,  float p_115335_)`
- `protected void scale(T p_115314_,  PoseStack p_115315_,  float p_115316_)`
- `protected boolean shouldShowName(T p_115333_)`
- `public static boolean isEntityUpsideDown(LivingEntity p_194454_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `getTextureLocation`, `renderNameTag`, `shouldRender`
- from `net.minecraft.client.renderer.entity.RenderLayerParent`: `getTextureLocation`

## LlamaRenderer

*class* `net.minecraft.client.renderer.entity.LlamaRenderer`

### Fields
- `private static final ResourceLocation CREAMY`
- `private static final ResourceLocation WHITE`
- `private static final ResourceLocation BROWN`
- `private static final ResourceLocation GRAY`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Llama p_115355_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## LlamaSpitRenderer

*class* `net.minecraft.client.renderer.entity.LlamaSpitRenderer`

### Fields
- `private static final ResourceLocation LLAMA_SPIT_LOCATION`
- `private final LlamaSpitModel<LlamaSpit> model`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public void render(LlamaSpit p_115373_,  float p_115374_,  float p_115375_,  PoseStack p_115376_,  MultiBufferSource p_115377_,  int p_115378_)`
- `public ResourceLocation getTextureLocation(LlamaSpit p_115371_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## MagmaCubeRenderer

*class* `net.minecraft.client.renderer.entity.MagmaCubeRenderer`

### Fields
- `private static final ResourceLocation MAGMACUBE_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected int getBlockLightLevel(MagmaCube p_115399_,  BlockPos p_115400_)`
- `public ResourceLocation getTextureLocation(MagmaCube p_115393_)`
- `public void render(MagmaCube p_265315_,  float p_265620_,  float p_265669_,  PoseStack p_265647_,  MultiBufferSource p_265147_,  int p_265465_)`
- `protected void scale(MagmaCube p_115395_,  PoseStack p_115396_,  float p_115397_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## MinecartRenderer

*class* `net.minecraft.client.renderer.entity.MinecartRenderer`

### Fields
- `private static final ResourceLocation MINECART_LOCATION`
- `protected final EntityModel<T extends AbstractMinecart> model`
- `private final BlockRenderDispatcher blockRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public void render(T p_115418_,  float p_115419_,  float p_115420_,  PoseStack p_115421_,  MultiBufferSource p_115422_,  int p_115423_)`
- `public ResourceLocation getTextureLocation(T p_115416_)`
- `protected void renderMinecartContents(T p_115424_,  float p_115425_,  BlockState p_115426_,  PoseStack p_115427_,  MultiBufferSource p_115428_,  int p_115429_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## MobRenderer>

*class* `net.minecraft.client.renderer.entity.MobRenderer>`

### Fields
- `public static final int LEASH_RENDER_STEPS`

### Inherited fields
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected boolean shouldShowName(T p_115506_)`
- `public boolean shouldRender(T p_115468_,  Frustum p_115469_,  double p_115470_,  double p_115471_,  double p_115472_)`
- `public void render(T p_115455_,  float p_115456_,  float p_115457_,  PoseStack p_115458_,  MultiBufferSource p_115459_,  int p_115460_)`
- `private <E extends Entity> void renderLeash(T p_115462_,  float p_115463_,  PoseStack p_115464_,  MultiBufferSource p_115465_,  E p_115466_)`
- `private static void addVertexPair(VertexConsumer p_174308_,  org.joml.Matrix4f p_254405_,  float p_174310_,  float p_174311_,  float p_174312_,  int p_174313_,  int p_174314_,  int p_174315_,  int p_174316_,  float p_174317_,  float p_174318_,  float p_174319_,  float p_174320_,  int p_174321_,  boolean p_174322_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `getTextureLocation`, `renderNameTag`
- from `net.minecraft.client.renderer.entity.RenderLayerParent`: `getTextureLocation`

## MushroomCowRenderer

*class* `net.minecraft.client.renderer.entity.MushroomCowRenderer`

### Fields
- `private static final Map<MushroomCow.MushroomType,ResourceLocation> TEXTURES`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(MushroomCow p_115514_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## NoopRenderer

*class* `net.minecraft.client.renderer.entity.NoopRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(T p_174328_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `render`, `renderNameTag`, `shouldRender`, `shouldShowName`

## OcelotRenderer

*class* `net.minecraft.client.renderer.entity.OcelotRenderer`

### Fields
- `private static final ResourceLocation CAT_OCELOT_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Ocelot p_115524_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## PaintingRenderer

*class* `net.minecraft.client.renderer.entity.PaintingRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public void render(Painting p_115552_,  float p_115553_,  float p_115554_,  PoseStack p_115555_,  MultiBufferSource p_115556_,  int p_115557_)`
- `public ResourceLocation getTextureLocation(Painting p_115550_)`
- `private void renderPainting(PoseStack p_115559_,  VertexConsumer p_115560_,  Painting p_115561_,  int p_115562_,  int p_115563_,  TextureAtlasSprite p_115564_,  TextureAtlasSprite p_115565_)`
- `private void vertex(org.joml.Matrix4f p_253885_,  org.joml.Matrix3f p_253799_,  VertexConsumer p_254114_,  float p_254164_,  float p_254459_,  float p_254183_,  float p_253615_,  float p_254448_,  int p_253660_,  int p_254342_,  int p_253757_,  int p_254101_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## PandaRenderer

*class* `net.minecraft.client.renderer.entity.PandaRenderer`

### Fields
- `private static final Map<Panda.Gene,ResourceLocation> TEXTURES`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Panda p_115639_)`
- `protected void setupRotations(Panda p_115641_,  PoseStack p_115642_,  float p_115643_,  float p_115644_,  float p_115645_)`
- `private float getAngle(float p_115625_,  float p_115626_,  int p_115627_,  float p_115628_,  float p_115629_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## ParrotRenderer

*class* `net.minecraft.client.renderer.entity.ParrotRenderer`

### Fields
- `private static final ResourceLocation RED_BLUE`
- `private static final ResourceLocation BLUE`
- `private static final ResourceLocation GREEN`
- `private static final ResourceLocation YELLOW_BLUE`
- `private static final ResourceLocation GREY`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Parrot p_115658_)`
- `public static ResourceLocation getVariantTexture(Parrot.Variant p_262577_)`
- `public float getBob(Parrot p_115660_,  float p_115661_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## PhantomRenderer

*class* `net.minecraft.client.renderer.entity.PhantomRenderer`

### Fields
- `private static final ResourceLocation PHANTOM_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Phantom p_115679_)`
- `protected void scale(Phantom p_115681_,  PoseStack p_115682_,  float p_115683_)`
- `protected void setupRotations(Phantom p_115685_,  PoseStack p_115686_,  float p_115687_,  float p_115688_,  float p_115689_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## PiglinRenderer

*class* `net.minecraft.client.renderer.entity.PiglinRenderer`

### Fields
- `private static final Map<EntityType<?>,ResourceLocation> TEXTURES`
- `private static final float PIGLIN_CUSTOM_HEAD_SCALE` (= 1.001953125f)

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `private static PiglinModel<Mob> createModel(EntityModelSet p_174350_,  ModelLayerLocation p_174351_,  boolean p_174352_)`
- `public ResourceLocation getTextureLocation(Mob p_115708_)`
- `protected boolean isShaking(Mob p_115712_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## PigRenderer

*class* `net.minecraft.client.renderer.entity.PigRenderer`

### Fields
- `private static final ResourceLocation PIG_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Pig p_115697_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## PillagerRenderer

*class* `net.minecraft.client.renderer.entity.PillagerRenderer`

### Fields
- `private static final ResourceLocation PILLAGER`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Pillager p_115720_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.IllagerRenderer`: `scale`
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## PolarBearRenderer

*class* `net.minecraft.client.renderer.entity.PolarBearRenderer`

### Fields
- `private static final ResourceLocation BEAR_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(PolarBear p_115732_)`
- `protected void scale(PolarBear p_115734_,  PoseStack p_115735_,  float p_115736_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## PufferfishRenderer

*class* `net.minecraft.client.renderer.entity.PufferfishRenderer`

### Fields
- `private static final ResourceLocation PUFFER_LOCATION`
- `private int puffStateO`
- `private final EntityModel<Pufferfish> small`
- `private final EntityModel<Pufferfish> mid`
- `private final EntityModel<Pufferfish> big`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Pufferfish p_115775_)`
- `public void render(Pufferfish p_115777_,  float p_115778_,  float p_115779_,  PoseStack p_115780_,  MultiBufferSource p_115781_,  int p_115782_)`
- `protected void setupRotations(Pufferfish p_115784_,  PoseStack p_115785_,  float p_115786_,  float p_115787_,  float p_115788_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## RabbitRenderer

*class* `net.minecraft.client.renderer.entity.RabbitRenderer`

### Fields
- `private static final ResourceLocation RABBIT_BROWN_LOCATION`
- `private static final ResourceLocation RABBIT_WHITE_LOCATION`
- `private static final ResourceLocation RABBIT_BLACK_LOCATION`
- `private static final ResourceLocation RABBIT_GOLD_LOCATION`
- `private static final ResourceLocation RABBIT_SALT_LOCATION`
- `private static final ResourceLocation RABBIT_WHITE_SPLOTCHED_LOCATION`
- `private static final ResourceLocation RABBIT_TOAST_LOCATION`
- `private static final ResourceLocation RABBIT_EVIL_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Rabbit p_115803_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## RavagerRenderer

*class* `net.minecraft.client.renderer.entity.RavagerRenderer`

### Fields
- `private static final ResourceLocation TEXTURE_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Ravager p_115811_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## RenderLayerParent>

*interface* `net.minecraft.client.renderer.entity.RenderLayerParent>`

### Methods
- `M getModel()`
- `ResourceLocation getTextureLocation(T p_115812_)`

## SalmonRenderer

*class* `net.minecraft.client.renderer.entity.SalmonRenderer`

### Fields
- `private static final ResourceLocation SALMON_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Salmon p_115826_)`
- `protected void setupRotations(Salmon p_115828_,  PoseStack p_115829_,  float p_115830_,  float p_115831_,  float p_115832_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## SheepRenderer

*class* `net.minecraft.client.renderer.entity.SheepRenderer`

### Fields
- `private static final ResourceLocation SHEEP_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Sheep p_115840_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## ShulkerBulletRenderer

*class* `net.minecraft.client.renderer.entity.ShulkerBulletRenderer`

### Fields
- `private static final ResourceLocation TEXTURE_LOCATION`
- `private static final RenderType RENDER_TYPE`
- `private final ShulkerBulletModel<ShulkerBullet> model`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected int getBlockLightLevel(ShulkerBullet p_115869_,  BlockPos p_115870_)`
- `public void render(ShulkerBullet p_115862_,  float p_115863_,  float p_115864_,  PoseStack p_115865_,  MultiBufferSource p_115866_,  int p_115867_)`
- `public ResourceLocation getTextureLocation(ShulkerBullet p_115860_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## ShulkerRenderer

*class* `net.minecraft.client.renderer.entity.ShulkerRenderer`

### Fields
- `private static final ResourceLocation DEFAULT_TEXTURE_LOCATION`
- `private static final ResourceLocation[] TEXTURE_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public Vec3 getRenderOffset(Shulker p_115904_,  float p_115905_)`
- `public boolean shouldRender(Shulker p_115913_,  Frustum p_115914_,  double p_115915_,  double p_115916_,  double p_115917_)`
- `public ResourceLocation getTextureLocation(Shulker p_115902_)`
- `public static ResourceLocation getTextureLocation(@Nullable  DyeColor p_174376_)`
- `protected void setupRotations(Shulker p_115907_,  PoseStack p_115908_,  float p_115909_,  float p_115910_,  float p_115911_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getSkyLightLevel`, `renderNameTag`

## SilverfishRenderer

*class* `net.minecraft.client.renderer.entity.SilverfishRenderer`

### Fields
- `private static final ResourceLocation SILVERFISH_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected float getFlipDegrees(Silverfish p_115927_)`
- `public ResourceLocation getTextureLocation(Silverfish p_115929_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## SkeletonRenderer

*class* `net.minecraft.client.renderer.entity.SkeletonRenderer`

### Fields
- `private static final ResourceLocation SKELETON_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(AbstractSkeleton p_115941_)`
- `protected boolean isShaking(AbstractSkeleton p_174389_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## SlimeRenderer

*class* `net.minecraft.client.renderer.entity.SlimeRenderer`

### Fields
- `private static final ResourceLocation SLIME_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public void render(Slime p_115976_,  float p_115977_,  float p_115978_,  PoseStack p_115979_,  MultiBufferSource p_115980_,  int p_115981_)`
- `protected void scale(Slime p_115983_,  PoseStack p_115984_,  float p_115985_)`
- `public ResourceLocation getTextureLocation(Slime p_115974_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## SnifferRenderer

*class* `net.minecraft.client.renderer.entity.SnifferRenderer`

### Fields
- `private static final ResourceLocation SNIFFER_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Sniffer p_273552_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## SnowGolemRenderer

*class* `net.minecraft.client.renderer.entity.SnowGolemRenderer`

### Fields
- `private static final ResourceLocation SNOW_GOLEM_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(SnowGolem p_115993_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## SpectralArrowRenderer

*class* `net.minecraft.client.renderer.entity.SpectralArrowRenderer`

### Fields
- `public static final ResourceLocation SPECTRAL_ARROW_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(SpectralArrow p_116001_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.ArrowRenderer`: `render`, `vertex`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## SpiderRenderer

*class* `net.minecraft.client.renderer.entity.SpiderRenderer`

### Fields
- `private static final ResourceLocation SPIDER_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected float getFlipDegrees(T p_116011_)`
- `public ResourceLocation getTextureLocation(T p_116009_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## SquidRenderer

*class* `net.minecraft.client.renderer.entity.SquidRenderer`

### Fields
- `private static final ResourceLocation SQUID_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(T p_116030_)`
- `protected void setupRotations(T p_116035_,  PoseStack p_116036_,  float p_116037_,  float p_116038_,  float p_116039_)`
- `protected float getBob(T p_116032_,  float p_116033_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## StrayRenderer

*class* `net.minecraft.client.renderer.entity.StrayRenderer`

### Fields
- `private static final ResourceLocation STRAY_SKELETON_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(AbstractSkeleton p_116049_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.SkeletonRenderer`: `isShaking`
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## StriderRenderer

*class* `net.minecraft.client.renderer.entity.StriderRenderer`

### Fields
- `private static final ResourceLocation STRIDER_LOCATION`
- `private static final ResourceLocation COLD_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Strider p_116064_)`
- `protected void scale(Strider p_116066_,  PoseStack p_116067_,  float p_116068_)`
- `protected boolean isShaking(Strider p_116070_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## TadpoleRenderer

*class* `net.minecraft.client.renderer.entity.TadpoleRenderer`

### Fields
- `private static final ResourceLocation TADPOLE_TEXTURE`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Tadpole p_234659_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## ThrownItemRenderer

*class* `net.minecraft.client.renderer.entity.ThrownItemRenderer`

### Fields
- `private static final float MIN_CAMERA_DISTANCE_SQUARED` (= 12.25f)
- `private final ItemRenderer itemRenderer`
- `private final float scale`
- `private final boolean fullBright`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected int getBlockLightLevel(T p_116092_,  BlockPos p_116093_)`
- `public void render(T p_116085_,  float p_116086_,  float p_116087_,  PoseStack p_116088_,  MultiBufferSource p_116089_,  int p_116090_)`
- `public ResourceLocation getTextureLocation(Entity p_116083_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## ThrownTridentRenderer

*class* `net.minecraft.client.renderer.entity.ThrownTridentRenderer`

### Fields
- `public static final ResourceLocation TRIDENT_LOCATION`
- `private final TridentModel model`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public void render(ThrownTrident p_116111_,  float p_116112_,  float p_116113_,  PoseStack p_116114_,  MultiBufferSource p_116115_,  int p_116116_)`
- `public ResourceLocation getTextureLocation(ThrownTrident p_116109_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## TippableArrowRenderer

*class* `net.minecraft.client.renderer.entity.TippableArrowRenderer`

### Fields
- `public static final ResourceLocation NORMAL_ARROW_LOCATION`
- `public static final ResourceLocation TIPPED_ARROW_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Arrow p_116140_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.ArrowRenderer`: `render`, `vertex`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## TntMinecartRenderer

*class* `net.minecraft.client.renderer.entity.TntMinecartRenderer`

### Fields
- `private final BlockRenderDispatcher blockRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MinecartRenderer`: `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected void renderMinecartContents(MinecartTNT p_116151_,  float p_116152_,  BlockState p_116153_,  PoseStack p_116154_,  MultiBufferSource p_116155_,  int p_116156_)`
- `public static void renderWhiteSolidBlock(BlockRenderDispatcher p_234662_,  BlockState p_234663_,  PoseStack p_234664_,  MultiBufferSource p_234665_,  int p_234666_,  boolean p_234667_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MinecartRenderer`: `getTextureLocation`, `render`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## TntRenderer

*class* `net.minecraft.client.renderer.entity.TntRenderer`

### Fields
- `private final BlockRenderDispatcher blockRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public void render(PrimedTnt p_116177_,  float p_116178_,  float p_116179_,  PoseStack p_116180_,  MultiBufferSource p_116181_,  int p_116182_)`
- `public ResourceLocation getTextureLocation(PrimedTnt p_116175_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## TropicalFishRenderer

*class* `net.minecraft.client.renderer.entity.TropicalFishRenderer`

### Fields
- `private final ColorableHierarchicalModel<TropicalFish> modelA`
- `private final ColorableHierarchicalModel<TropicalFish> modelB`
- `private static final ResourceLocation MODEL_A_TEXTURE`
- `private static final ResourceLocation MODEL_B_TEXTURE`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(TropicalFish p_116217_)`
- `public void render(TropicalFish p_116219_,  float p_116220_,  float p_116221_,  PoseStack p_116222_,  MultiBufferSource p_116223_,  int p_116224_)`
- `protected void setupRotations(TropicalFish p_116226_,  PoseStack p_116227_,  float p_116228_,  float p_116229_,  float p_116230_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## TurtleRenderer

*class* `net.minecraft.client.renderer.entity.TurtleRenderer`

### Fields
- `private static final ResourceLocation TURTLE_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public void render(Turtle p_116261_,  float p_116262_,  float p_116263_,  PoseStack p_116264_,  MultiBufferSource p_116265_,  int p_116266_)`
- `public ResourceLocation getTextureLocation(Turtle p_116259_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## UndeadHorseRenderer

*class* `net.minecraft.client.renderer.entity.UndeadHorseRenderer`

### Fields
- `private static final Map<EntityType<?>,ResourceLocation> MAP`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(AbstractHorse p_116274_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.AbstractHorseRenderer`: `scale`
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## VexRenderer

*class* `net.minecraft.client.renderer.entity.VexRenderer`

### Fields
- `private static final ResourceLocation VEX_LOCATION`
- `private static final ResourceLocation VEX_CHARGING_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected int getBlockLightLevel(Vex p_116298_,  BlockPos p_116299_)`
- `public ResourceLocation getTextureLocation(Vex p_116292_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## VillagerRenderer

*class* `net.minecraft.client.renderer.entity.VillagerRenderer`

### Fields
- `private static final ResourceLocation VILLAGER_BASE_SKIN`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Villager p_116312_)`
- `protected void scale(Villager p_116314_,  PoseStack p_116315_,  float p_116316_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## VindicatorRenderer

*class* `net.minecraft.client.renderer.entity.VindicatorRenderer`

### Fields
- `private static final ResourceLocation VINDICATOR`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Vindicator p_116324_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.IllagerRenderer`: `scale`
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## WanderingTraderRenderer

*class* `net.minecraft.client.renderer.entity.WanderingTraderRenderer`

### Fields
- `private static final ResourceLocation VILLAGER_BASE_SKIN`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(WanderingTrader p_116373_)`
- `protected void scale(WanderingTrader p_116375_,  PoseStack p_116376_,  float p_116377_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## WardenRenderer

*class* `net.minecraft.client.renderer.entity.WardenRenderer`

### Fields
- `private static final ResourceLocation TEXTURE`
- `private static final ResourceLocation BIOLUMINESCENT_LAYER_TEXTURE`
- `private static final ResourceLocation HEART_TEXTURE`
- `private static final ResourceLocation PULSATING_SPOTS_TEXTURE_1`
- `private static final ResourceLocation PULSATING_SPOTS_TEXTURE_2`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Warden p_234791_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## WitchRenderer

*class* `net.minecraft.client.renderer.entity.WitchRenderer`

### Fields
- `private static final ResourceLocation WITCH_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public void render(Witch p_116412_,  float p_116413_,  float p_116414_,  PoseStack p_116415_,  MultiBufferSource p_116416_,  int p_116417_)`
- `public ResourceLocation getTextureLocation(Witch p_116410_)`
- `protected void scale(Witch p_116419_,  PoseStack p_116420_,  float p_116421_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## WitherBossRenderer

*class* `net.minecraft.client.renderer.entity.WitherBossRenderer`

### Fields
- `private static final ResourceLocation WITHER_INVULNERABLE_LOCATION`
- `private static final ResourceLocation WITHER_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected int getBlockLightLevel(WitherBoss p_116443_,  BlockPos p_116444_)`
- `public ResourceLocation getTextureLocation(WitherBoss p_116437_)`
- `protected void scale(WitherBoss p_116439_,  PoseStack p_116440_,  float p_116441_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## WitherSkeletonRenderer

*class* `net.minecraft.client.renderer.entity.WitherSkeletonRenderer`

### Fields
- `private static final ResourceLocation WITHER_SKELETON_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(AbstractSkeleton p_116458_)`
- `protected void scale(AbstractSkeleton p_116460_,  PoseStack p_116461_,  float p_116462_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.SkeletonRenderer`: `isShaking`
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## WitherSkullRenderer

*class* `net.minecraft.client.renderer.entity.WitherSkullRenderer`

### Fields
- `private static final ResourceLocation WITHER_INVULNERABLE_LOCATION`
- `private static final ResourceLocation WITHER_LOCATION`
- `private final SkullModel model`

### Inherited fields
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public static LayerDefinition createSkullLayer()`
- `protected int getBlockLightLevel(WitherSkull p_116491_,  BlockPos p_116492_)`
- `public void render(WitherSkull p_116484_,  float p_116485_,  float p_116486_,  PoseStack p_116487_,  MultiBufferSource p_116488_,  int p_116489_)`
- `public ResourceLocation getTextureLocation(WitherSkull p_116482_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`, `shouldRender`, `shouldShowName`

## WolfRenderer

*class* `net.minecraft.client.renderer.entity.WolfRenderer`

### Fields
- `private static final ResourceLocation WOLF_LOCATION`
- `private static final ResourceLocation WOLF_TAME_LOCATION`
- `private static final ResourceLocation WOLF_ANGRY_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `protected float getBob(Wolf p_116528_,  float p_116529_)`
- `public void render(Wolf p_116531_,  float p_116532_,  float p_116533_,  PoseStack p_116534_,  MultiBufferSource p_116535_,  int p_116536_)`
- `public ResourceLocation getTextureLocation(Wolf p_116526_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## ZoglinRenderer

*class* `net.minecraft.client.renderer.entity.ZoglinRenderer`

### Fields
- `private static final ResourceLocation ZOGLIN_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(Zoglin p_116544_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## ZombieRenderer

*class* `net.minecraft.client.renderer.entity.ZombieRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Inherited methods
- from `net.minecraft.client.renderer.entity.AbstractZombieRenderer`: `getTextureLocation`, `isShaking`
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`

## ZombieVillagerRenderer

*class* `net.minecraft.client.renderer.entity.ZombieVillagerRenderer`

### Fields
- `private static final ResourceLocation ZOMBIE_VILLAGER_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.entity.MobRenderer`: `LEASH_RENDER_STEPS`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public ResourceLocation getTextureLocation(ZombieVillager p_116559_)`
- `protected boolean isShaking(ZombieVillager p_116561_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.MobRenderer`: `render`, `shouldRender`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `scale`, `setupRotations`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getRenderOffset`, `getSkyLightLevel`, `renderNameTag`
