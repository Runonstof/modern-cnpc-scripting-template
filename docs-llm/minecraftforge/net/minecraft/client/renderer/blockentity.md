# net.minecraft.client.renderer.blockentity

- [BannerRenderer](#bannerrenderer)
- [BeaconRenderer](#beaconrenderer)
- [BedRenderer](#bedrenderer)
- [BellRenderer](#bellrenderer)
- [BlockEntityRenderDispatcher](#blockentityrenderdispatcher)
- [BlockEntityRenderer](#blockentityrenderer)
- [BlockEntityRendererProvider](#blockentityrendererprovider)
- [BlockEntityRendererProvider.Context](#blockentityrendererprovider.context)
- [BlockEntityRenderers](#blockentityrenderers)
- [BrightnessCombiner](#brightnesscombiner)
- [BrushableBlockRenderer](#brushableblockrenderer)
- [CampfireRenderer](#campfirerenderer)
- [ChestRenderer](#chestrenderer)
- [ConduitRenderer](#conduitrenderer)
- [DecoratedPotRenderer](#decoratedpotrenderer)
- [EnchantTableRenderer](#enchanttablerenderer)
- [HangingSignRenderer](#hangingsignrenderer)
- [HangingSignRenderer.HangingSignModel](#hangingsignrenderer.hangingsignmodel)
- [LecternRenderer](#lecternrenderer)
- [PistonHeadRenderer](#pistonheadrenderer)
- [ShulkerBoxRenderer](#shulkerboxrenderer)
- [SignRenderer](#signrenderer)
- [SignRenderer.SignModel](#signrenderer.signmodel)
- [SkullBlockRenderer](#skullblockrenderer)
- [SpawnerRenderer](#spawnerrenderer)
- [StructureBlockRenderer](#structureblockrenderer)
- [TheEndGatewayRenderer](#theendgatewayrenderer)
- [TheEndPortalRenderer](#theendportalrenderer)
## BannerRenderer

*class* `net.minecraft.client.renderer.blockentity.BannerRenderer`

### Fields
- `private static final int BANNER_WIDTH` (= 20)
- `private static final int BANNER_HEIGHT` (= 40)
- `private static final int MAX_PATTERNS` (= 16)
- `public static final String FLAG` (= "flag")
- `private static final String POLE` (= "pole")
- `private static final String BAR` (= "bar")
- `private final ModelPart flag`
- `private final ModelPart pole`
- `private final ModelPart bar`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void render(BannerBlockEntity p_112052_,  float p_112053_,  PoseStack p_112054_,  MultiBufferSource p_112055_,  int p_112056_,  int p_112057_)`
- `public static void renderPatterns(PoseStack p_112066_,  MultiBufferSource p_112067_,  int p_112068_,  int p_112069_,  ModelPart p_112070_,  Material p_112071_,  boolean p_112072_,  List<com.mojang.datafixers.util.Pair<Holder<BannerPattern>,DyeColor>> p_112073_)`
- `public static void renderPatterns(PoseStack p_112075_,  MultiBufferSource p_112076_,  int p_112077_,  int p_112078_,  ModelPart p_112079_,  Material p_112080_,  boolean p_112081_,  List<com.mojang.datafixers.util.Pair<Holder<BannerPattern>,DyeColor>> p_112082_,  boolean p_112083_)`

### Inherited methods
- from `net.minecraft.client.renderer.blockentity.BlockEntityRenderer`: `getViewDistance`, `shouldRender`, `shouldRenderOffScreen`

## BeaconRenderer

*class* `net.minecraft.client.renderer.blockentity.BeaconRenderer`

### Fields
- `public static final ResourceLocation BEAM_LOCATION`
- `public static final int MAX_RENDER_Y` (= 1024)

### Methods
- `public void render(BeaconBlockEntity p_112140_,  float p_112141_,  PoseStack p_112142_,  MultiBufferSource p_112143_,  int p_112144_,  int p_112145_)`
- `private static void renderBeaconBeam(PoseStack p_112177_,  MultiBufferSource p_112178_,  float p_112179_,  long p_112180_,  int p_112181_,  int p_112182_,  float[] p_112183_)`
- `public static void renderBeaconBeam(PoseStack p_112185_,  MultiBufferSource p_112186_,  ResourceLocation p_112187_,  float p_112188_,  float p_112189_,  long p_112190_,  int p_112191_,  int p_112192_,  float[] p_112193_,  float p_112194_,  float p_112195_)`
- `private static void renderPart(PoseStack p_112156_,  VertexConsumer p_112157_,  float p_112158_,  float p_112159_,  float p_112160_,  float p_112161_,  int p_112162_,  int p_112163_,  float p_112164_,  float p_112165_,  float p_112166_,  float p_112167_,  float p_112168_,  float p_112169_,  float p_112170_,  float p_112171_,  float p_112172_,  float p_112173_,  float p_112174_,  float p_112175_)`
- `private static void renderQuad(org.joml.Matrix4f p_253960_,  org.joml.Matrix3f p_254005_,  VertexConsumer p_112122_,  float p_112123_,  float p_112124_,  float p_112125_,  float p_112126_,  int p_112127_,  int p_112128_,  float p_112129_,  float p_112130_,  float p_112131_,  float p_112132_,  float p_112133_,  float p_112134_,  float p_112135_,  float p_112136_)`
- `private static void addVertex(org.joml.Matrix4f p_253955_,  org.joml.Matrix3f p_253713_,  VertexConsumer p_253894_,  float p_253871_,  float p_253841_,  float p_254568_,  float p_254361_,  int p_254357_,  float p_254451_,  float p_254240_,  float p_254117_,  float p_253698_)`
- `public boolean shouldRenderOffScreen(BeaconBlockEntity p_112138_)`
- `public int getViewDistance()`
- `public boolean shouldRender(BeaconBlockEntity p_173531_,  Vec3 p_173532_)`

## BedRenderer

*class* `net.minecraft.client.renderer.blockentity.BedRenderer`

### Fields
- `private final ModelPart headRoot`
- `private final ModelPart footRoot`

### Methods
- `public static LayerDefinition createHeadLayer()`
- `public static LayerDefinition createFootLayer()`
- `public void render(BedBlockEntity p_112205_,  float p_112206_,  PoseStack p_112207_,  MultiBufferSource p_112208_,  int p_112209_,  int p_112210_)`
- `private void renderPiece(PoseStack p_173542_,  MultiBufferSource p_173543_,  ModelPart p_173544_,  Direction p_173545_,  Material p_173546_,  int p_173547_,  int p_173548_,  boolean p_173549_)`

### Inherited methods
- from `net.minecraft.client.renderer.blockentity.BlockEntityRenderer`: `getViewDistance`, `shouldRender`, `shouldRenderOffScreen`

## BellRenderer

*class* `net.minecraft.client.renderer.blockentity.BellRenderer`

### Fields
- `public static final Material BELL_RESOURCE_LOCATION`
- `private static final String BELL_BODY` (= "bell_body")
- `private final ModelPart bellBody`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void render(BellBlockEntity p_112233_,  float p_112234_,  PoseStack p_112235_,  MultiBufferSource p_112236_,  int p_112237_,  int p_112238_)`

### Inherited methods
- from `net.minecraft.client.renderer.blockentity.BlockEntityRenderer`: `getViewDistance`, `shouldRender`, `shouldRenderOffScreen`

## BlockEntityRenderDispatcher

*class* `net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher`

### Fields
- `private Map<BlockEntityType<?>,BlockEntityRenderer<?>> renderers`
- `public final Font font`
- `private final EntityModelSet entityModelSet`
- `public Level level`
- `public Camera camera`
- `public HitResult cameraHitResult`
- `private final Supplier<BlockRenderDispatcher> blockRenderDispatcher`
- `private final Supplier<ItemRenderer> itemRenderer`
- `private final Supplier<EntityRenderDispatcher> entityRenderer`

### Methods
- `@Nullable public <E extends BlockEntity> BlockEntityRenderer<E> getRenderer(E p_112266_)`
- `public void prepare(Level p_173565_,  Camera p_173566_,  HitResult p_173567_)`
- `public <E extends BlockEntity> void render(E p_112268_,  float p_112269_,  PoseStack p_112270_,  MultiBufferSource p_112271_)`
- `private static <T extends BlockEntity> void setupAndRender(BlockEntityRenderer<T> p_112285_,  T p_112286_,  float p_112287_,  PoseStack p_112288_,  MultiBufferSource p_112289_)`
- `public <E extends BlockEntity> boolean renderItem(E p_112273_,  PoseStack p_112274_,  MultiBufferSource p_112275_,  int p_112276_,  int p_112277_)`
- `private static void tryRender(BlockEntity p_112279_,  Runnable p_112280_)`
- `public void setLevel(@Nullable  Level p_112258_)`
- `public void onResourceManagerReload(ResourceManager p_173563_)`

### Inherited methods
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`
- from `net.minecraft.server.packs.resources.ResourceManagerReloadListener`: `reload`

## BlockEntityRenderer

*interface* `net.minecraft.client.renderer.blockentity.BlockEntityRenderer`

### Methods
- `void render(T p_112307_,  float p_112308_,  PoseStack p_112309_,  MultiBufferSource p_112310_,  int p_112311_,  int p_112312_)`
- `default boolean shouldRenderOffScreen(T p_112306_)`
- `default int getViewDistance()`
- `default boolean shouldRender(T p_173568_,  Vec3 p_173569_)`

## BlockEntityRendererProvider

*interface* `net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider`

### Methods
- `BlockEntityRenderer<T> create(BlockEntityRendererProvider.Context p_173571_)`

## BlockEntityRendererProvider.Context

*class* `net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider.Context`

Enclosing interface: BlockEntityRendererProvider<T extends BlockEntity>

### Fields
- `private final BlockEntityRenderDispatcher blockEntityRenderDispatcher`
- `private final BlockRenderDispatcher blockRenderDispatcher`
- `private final ItemRenderer itemRenderer`
- `private final EntityRenderDispatcher entityRenderer`
- `private final EntityModelSet modelSet`
- `private final Font font`

### Methods
- `public BlockEntityRenderDispatcher getBlockEntityRenderDispatcher()`
- `public BlockRenderDispatcher getBlockRenderDispatcher()`
- `public EntityRenderDispatcher getEntityRenderer()`
- `public ItemRenderer getItemRenderer()`
- `public EntityModelSet getModelSet()`
- `public ModelPart bakeLayer(ModelLayerLocation p_173583_)`
- `public Font getFont()`

## BlockEntityRenderers

*class* `net.minecraft.client.renderer.blockentity.BlockEntityRenderers`

### Fields
- `private static final Map<BlockEntityType<?>,BlockEntityRendererProvider<?>> PROVIDERS`

### Methods
- `public static <T extends BlockEntity> void register(BlockEntityType<? extends T> p_173591_,  BlockEntityRendererProvider<T> p_173592_)`
- `public static Map<BlockEntityType<?>,BlockEntityRenderer<?>> createEntityRenderers(BlockEntityRendererProvider.Context p_173599_)`

## BrightnessCombiner

*class* `net.minecraft.client.renderer.blockentity.BrightnessCombiner`

### Methods
- `public it.unimi.dsi.fastutil.ints.Int2IntFunction acceptDouble(S p_112320_,  S p_112321_)`
- `public it.unimi.dsi.fastutil.ints.Int2IntFunction acceptSingle(S p_112318_)`
- `public it.unimi.dsi.fastutil.ints.Int2IntFunction acceptNone()`

## BrushableBlockRenderer

*class* `net.minecraft.client.renderer.blockentity.BrushableBlockRenderer`

### Fields
- `private final ItemRenderer itemRenderer`

### Methods
- `public void render(BrushableBlockEntity p_277712_,  float p_277981_,  PoseStack p_277490_,  MultiBufferSource p_278015_,  int p_277463_,  int p_277346_)`
- `private float[] translations(Direction p_278030_,  int p_277997_)`

### Inherited methods
- from `net.minecraft.client.renderer.blockentity.BlockEntityRenderer`: `getViewDistance`, `shouldRender`, `shouldRenderOffScreen`

## CampfireRenderer

*class* `net.minecraft.client.renderer.blockentity.CampfireRenderer`

### Fields
- `private static final float SIZE` (= 0.375f)
- `private final ItemRenderer itemRenderer`

### Methods
- `public void render(CampfireBlockEntity p_112344_,  float p_112345_,  PoseStack p_112346_,  MultiBufferSource p_112347_,  int p_112348_,  int p_112349_)`

### Inherited methods
- from `net.minecraft.client.renderer.blockentity.BlockEntityRenderer`: `getViewDistance`, `shouldRender`, `shouldRenderOffScreen`

## ChestRenderer

*class* `net.minecraft.client.renderer.blockentity.ChestRenderer`

### Fields
- `private static final String BOTTOM` (= "bottom")
- `private static final String LID` (= "lid")
- `private static final String LOCK` (= "lock")
- `private final ModelPart lid`
- `private final ModelPart bottom`
- `private final ModelPart lock`
- `private final ModelPart doubleLeftLid`
- `private final ModelPart doubleLeftBottom`
- `private final ModelPart doubleLeftLock`
- `private final ModelPart doubleRightLid`
- `private final ModelPart doubleRightBottom`
- `private final ModelPart doubleRightLock`
- `private boolean xmasTextures`

### Methods
- `public static LayerDefinition createSingleBodyLayer()`
- `public static LayerDefinition createDoubleBodyRightLayer()`
- `public static LayerDefinition createDoubleBodyLeftLayer()`
- `public void render(T p_112363_,  float p_112364_,  PoseStack p_112365_,  MultiBufferSource p_112366_,  int p_112367_,  int p_112368_)`
- `private void render(PoseStack p_112370_,  VertexConsumer p_112371_,  ModelPart p_112372_,  ModelPart p_112373_,  ModelPart p_112374_,  float p_112375_,  int p_112376_,  int p_112377_)`
- `protected Material getMaterial(T blockEntity,  ChestType chestType)`

### Inherited methods
- from `net.minecraft.client.renderer.blockentity.BlockEntityRenderer`: `getViewDistance`, `shouldRender`, `shouldRenderOffScreen`

## ConduitRenderer

*class* `net.minecraft.client.renderer.blockentity.ConduitRenderer`

### Fields
- `public static final Material SHELL_TEXTURE`
- `public static final Material ACTIVE_SHELL_TEXTURE`
- `public static final Material WIND_TEXTURE`
- `public static final Material VERTICAL_WIND_TEXTURE`
- `public static final Material OPEN_EYE_TEXTURE`
- `public static final Material CLOSED_EYE_TEXTURE`
- `private final ModelPart eye`
- `private final ModelPart wind`
- `private final ModelPart shell`
- `private final ModelPart cage`
- `private final BlockEntityRenderDispatcher renderer`

### Methods
- `public static LayerDefinition createEyeLayer()`
- `public static LayerDefinition createWindLayer()`
- `public static LayerDefinition createShellLayer()`
- `public static LayerDefinition createCageLayer()`
- `public void render(ConduitBlockEntity p_112399_,  float p_112400_,  PoseStack p_112401_,  MultiBufferSource p_112402_,  int p_112403_,  int p_112404_)`

### Inherited methods
- from `net.minecraft.client.renderer.blockentity.BlockEntityRenderer`: `getViewDistance`, `shouldRender`, `shouldRenderOffScreen`

## DecoratedPotRenderer

*class* `net.minecraft.client.renderer.blockentity.DecoratedPotRenderer`

### Fields
- `private static final String NECK` (= "neck")
- `private static final String FRONT` (= "front")
- `private static final String BACK` (= "back")
- `private static final String LEFT` (= "left")
- `private static final String RIGHT` (= "right")
- `private static final String TOP` (= "top")
- `private static final String BOTTOM` (= "bottom")
- `private final ModelPart neck`
- `private final ModelPart frontSide`
- `private final ModelPart backSide`
- `private final ModelPart leftSide`
- `private final ModelPart rightSide`
- `private final ModelPart top`
- `private final ModelPart bottom`
- `private final Material baseMaterial`

### Methods
- `public static LayerDefinition createBaseLayer()`
- `public static LayerDefinition createSidesLayer()`
- `@Nullable private static Material getMaterial(Item p_272698_)`
- `public void render(DecoratedPotBlockEntity p_273776_,  float p_273103_,  PoseStack p_273455_,  MultiBufferSource p_273010_,  int p_273407_,  int p_273059_)`
- `private void renderSide(ModelPart p_273495_,  PoseStack p_272899_,  MultiBufferSource p_273582_,  int p_273242_,  int p_273108_,  @Nullable  Material p_273173_)`

### Inherited methods
- from `net.minecraft.client.renderer.blockentity.BlockEntityRenderer`: `getViewDistance`, `shouldRender`, `shouldRenderOffScreen`

## EnchantTableRenderer

*class* `net.minecraft.client.renderer.blockentity.EnchantTableRenderer`

### Fields
- `public static final Material BOOK_LOCATION`
- `private final BookModel bookModel`

### Methods
- `public void render(EnchantmentTableBlockEntity p_112418_,  float p_112419_,  PoseStack p_112420_,  MultiBufferSource p_112421_,  int p_112422_,  int p_112423_)`

### Inherited methods
- from `net.minecraft.client.renderer.blockentity.BlockEntityRenderer`: `getViewDistance`, `shouldRender`, `shouldRenderOffScreen`

## HangingSignRenderer

*class* `net.minecraft.client.renderer.blockentity.HangingSignRenderer`

### Fields
- `private static final String PLANK` (= "plank")
- `private static final String V_CHAINS` (= "vChains")
- `private static final String NORMAL_CHAINS` (= "normalChains")
- `private static final String CHAIN_L_1` (= "chainL1")
- `private static final String CHAIN_L_2` (= "chainL2")
- `private static final String CHAIN_R_1` (= "chainR1")
- `private static final String CHAIN_R_2` (= "chainR2")
- `private static final String BOARD` (= "board")
- `private static final float MODEL_RENDER_SCALE` (= 1.0f)
- `private static final float TEXT_RENDER_SCALE` (= 0.8999999761581421f)
- `private static final Vec3 TEXT_OFFSET`
- `private final Map<WoodType,HangingSignRenderer.HangingSignModel> hangingSignModels`

### Methods
- `public float getSignModelRenderScale()`
- `public float getSignTextRenderScale()`
- `public void render(SignBlockEntity p_249482_,  float p_249273_,  PoseStack p_250062_,  MultiBufferSource p_250878_,  int p_249035_,  int p_252030_)`
- `void translateSign(PoseStack p_277807_,  float p_277917_,  BlockState p_277638_)`
- `void renderSignModel(PoseStack p_251159_,  int p_249874_,  int p_249794_,  Model p_248746_,  VertexConsumer p_249165_)`
- `Material getSignMaterial(WoodType p_251791_)`
- `Vec3 getTextOffset()`
- `public static LayerDefinition createHangingSignLayer()`

### Inherited methods
- from `net.minecraft.client.renderer.blockentity.SignRenderer`: `createSignLayer`, `createSignModel`, `getDarkColor`, `isOutlineVisible`, `renderSign`, `renderSignText`, `renderSignWithText`
- from `net.minecraft.client.renderer.blockentity.BlockEntityRenderer`: `getViewDistance`, `shouldRender`, `shouldRenderOffScreen`

## HangingSignRenderer.HangingSignModel

*class* `net.minecraft.client.renderer.blockentity.HangingSignRenderer.HangingSignModel`

Enclosing class: HangingSignRenderer

### Fields
- `public final ModelPart root`
- `public final ModelPart plank`
- `public final ModelPart vChains`
- `public final ModelPart normalChains`

### Inherited fields
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public void evaluateVisibleParts(BlockState p_250268_)`
- `public void renderToBuffer(PoseStack p_251590_,  VertexConsumer p_249470_,  int p_250912_,  int p_251773_,  float p_248839_,  float p_249626_,  float p_251131_,  float p_249679_)`

### Inherited methods
- from `net.minecraft.client.model.Model`: `renderType`

## LecternRenderer

*class* `net.minecraft.client.renderer.blockentity.LecternRenderer`

### Fields
- `private final BookModel bookModel`

### Methods
- `public void render(LecternBlockEntity p_112435_,  float p_112436_,  PoseStack p_112437_,  MultiBufferSource p_112438_,  int p_112439_,  int p_112440_)`

### Inherited methods
- from `net.minecraft.client.renderer.blockentity.BlockEntityRenderer`: `getViewDistance`, `shouldRender`, `shouldRenderOffScreen`

## PistonHeadRenderer

*class* `net.minecraft.client.renderer.blockentity.PistonHeadRenderer`

### Fields
- `private BlockRenderDispatcher blockRenderer`

### Methods
- `public void render(PistonMovingBlockEntity p_112452_,  float p_112453_,  PoseStack p_112454_,  MultiBufferSource p_112455_,  int p_112456_,  int p_112457_)`
- `private void renderBlock(BlockPos p_112459_,  BlockState p_112460_,  PoseStack p_112461_,  MultiBufferSource p_112462_,  Level p_112463_,  boolean p_112464_,  int p_112465_)`
- `public int getViewDistance()`

### Inherited methods
- from `net.minecraft.client.renderer.blockentity.BlockEntityRenderer`: `shouldRender`, `shouldRenderOffScreen`

## ShulkerBoxRenderer

*class* `net.minecraft.client.renderer.blockentity.ShulkerBoxRenderer`

### Fields
- `private final ShulkerModel<?> model`

### Methods
- `public void render(ShulkerBoxBlockEntity p_112478_,  float p_112479_,  PoseStack p_112480_,  MultiBufferSource p_112481_,  int p_112482_,  int p_112483_)`

### Inherited methods
- from `net.minecraft.client.renderer.blockentity.BlockEntityRenderer`: `getViewDistance`, `shouldRender`, `shouldRenderOffScreen`

## SignRenderer

*class* `net.minecraft.client.renderer.blockentity.SignRenderer`

### Fields
- `private static final String STICK` (= "stick")
- `private static final int BLACK_TEXT_OUTLINE_COLOR` (= -988212)
- `private static final int OUTLINE_RENDER_DISTANCE`
- `private static final float RENDER_SCALE` (= 0.6666666865348816f)
- `private static final Vec3 TEXT_OFFSET`
- `private final Map<WoodType,SignRenderer.SignModel> signModels`
- `private final Font font`

### Methods
- `public void render(SignBlockEntity p_112497_,  float p_112498_,  PoseStack p_112499_,  MultiBufferSource p_112500_,  int p_112501_,  int p_112502_)`
- `public float getSignModelRenderScale()`
- `public float getSignTextRenderScale()`
- `void renderSignWithText(SignBlockEntity p_279389_,  PoseStack p_279331_,  MultiBufferSource p_279303_,  int p_279396_,  int p_279203_,  BlockState p_279391_,  SignBlock p_279224_,  WoodType p_279162_,  Model p_279444_)`
- `void translateSign(PoseStack p_278074_,  float p_277875_,  BlockState p_277559_)`
- `void renderSign(PoseStack p_279104_,  MultiBufferSource p_279408_,  int p_279494_,  int p_279344_,  WoodType p_279170_,  Model p_279159_)`
- `void renderSignModel(PoseStack p_250252_,  int p_249399_,  int p_249042_,  Model p_250082_,  VertexConsumer p_251093_)`
- `Material getSignMaterial(WoodType p_251961_)`
- `void renderSignText(BlockPos p_279403_,  SignText p_279361_,  PoseStack p_279234_,  MultiBufferSource p_279338_,  int p_279300_,  int p_279179_,  int p_279357_,  boolean p_279325_)`
- `private void translateSignText(PoseStack p_279133_,  boolean p_279134_,  Vec3 p_279280_)`
- `Vec3 getTextOffset()`
- `static boolean isOutlineVisible(BlockPos p_277741_,  int p_278022_)`
- `public static int getDarkColor(SignText p_277914_)`
- `public static SignRenderer.SignModel createSignModel(EntityModelSet p_173647_,  WoodType p_173648_)`
- `public static LayerDefinition createSignLayer()`

### Inherited methods
- from `net.minecraft.client.renderer.blockentity.BlockEntityRenderer`: `getViewDistance`, `shouldRender`, `shouldRenderOffScreen`

## SignRenderer.SignModel

*class* `net.minecraft.client.renderer.blockentity.SignRenderer.SignModel`

Enclosing class: SignRenderer

### Fields
- `public final ModelPart root`
- `public final ModelPart stick`

### Inherited fields
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public void renderToBuffer(PoseStack p_112510_,  VertexConsumer p_112511_,  int p_112512_,  int p_112513_,  float p_112514_,  float p_112515_,  float p_112516_,  float p_112517_)`

### Inherited methods
- from `net.minecraft.client.model.Model`: `renderType`

## SkullBlockRenderer

*class* `net.minecraft.client.renderer.blockentity.SkullBlockRenderer`

### Fields
- `private final Map<SkullBlock.Type,SkullModelBase> modelByType`
- `public static final Map<SkullBlock.Type,ResourceLocation> SKIN_BY_TYPE`

### Methods
- `public static Map<SkullBlock.Type,SkullModelBase> createSkullRenderers(EntityModelSet p_173662_)`
- `public void render(SkullBlockEntity p_112534_,  float p_112535_,  PoseStack p_112536_,  MultiBufferSource p_112537_,  int p_112538_,  int p_112539_)`
- `public static void renderSkull(@Nullable  Direction p_173664_,  float p_173665_,  float p_173666_,  PoseStack p_173667_,  MultiBufferSource p_173668_,  int p_173669_,  SkullModelBase p_173670_,  RenderType p_173671_)`
- `public static RenderType getRenderType(SkullBlock.Type p_112524_,  @Nullable  com.mojang.authlib.GameProfile p_112525_)`

### Inherited methods
- from `net.minecraft.client.renderer.blockentity.BlockEntityRenderer`: `getViewDistance`, `shouldRender`, `shouldRenderOffScreen`

## SpawnerRenderer

*class* `net.minecraft.client.renderer.blockentity.SpawnerRenderer`

### Fields
- `private final EntityRenderDispatcher entityRenderer`

### Methods
- `public void render(SpawnerBlockEntity p_112563_,  float p_112564_,  PoseStack p_112565_,  MultiBufferSource p_112566_,  int p_112567_,  int p_112568_)`

### Inherited methods
- from `net.minecraft.client.renderer.blockentity.BlockEntityRenderer`: `getViewDistance`, `shouldRender`, `shouldRenderOffScreen`

## StructureBlockRenderer

*class* `net.minecraft.client.renderer.blockentity.StructureBlockRenderer`

### Methods
- `public void render(StructureBlockEntity p_112583_,  float p_112584_,  PoseStack p_112585_,  MultiBufferSource p_112586_,  int p_112587_,  int p_112588_)`
- `private void renderInvisibleBlocks(StructureBlockEntity p_173677_,  VertexConsumer p_173678_,  BlockPos p_173679_,  PoseStack p_173680_)`
- `public boolean shouldRenderOffScreen(StructureBlockEntity p_112581_)`
- `public int getViewDistance()`

### Inherited methods
- from `net.minecraft.client.renderer.blockentity.BlockEntityRenderer`: `shouldRender`

## TheEndGatewayRenderer

*class* `net.minecraft.client.renderer.blockentity.TheEndGatewayRenderer`

### Fields
- `private static final ResourceLocation BEAM_LOCATION`

### Inherited fields
- from `net.minecraft.client.renderer.blockentity.TheEndPortalRenderer`: `END_PORTAL_LOCATION`, `END_SKY_LOCATION`

### Methods
- `public void render(TheEndGatewayBlockEntity p_112613_,  float p_112614_,  PoseStack p_112615_,  MultiBufferSource p_112616_,  int p_112617_,  int p_112618_)`
- `protected float getOffsetUp()`
- `protected float getOffsetDown()`
- `protected RenderType renderType()`
- `public int getViewDistance()`

### Inherited methods
- from `net.minecraft.client.renderer.blockentity.BlockEntityRenderer`: `shouldRender`, `shouldRenderOffScreen`

## TheEndPortalRenderer

*class* `net.minecraft.client.renderer.blockentity.TheEndPortalRenderer`

### Fields
- `public static final ResourceLocation END_SKY_LOCATION`
- `public static final ResourceLocation END_PORTAL_LOCATION`

### Methods
- `public void render(T p_112650_,  float p_112651_,  PoseStack p_112652_,  MultiBufferSource p_112653_,  int p_112654_,  int p_112655_)`
- `private void renderCube(T p_173691_,  org.joml.Matrix4f p_254024_,  VertexConsumer p_173693_)`
- `private void renderFace(T p_253949_,  org.joml.Matrix4f p_254247_,  VertexConsumer p_254390_,  float p_254147_,  float p_253639_,  float p_254107_,  float p_254109_,  float p_254021_,  float p_254458_,  float p_254086_,  float p_254310_,  Direction p_253619_)`
- `protected float getOffsetUp()`
- `protected float getOffsetDown()`
- `protected RenderType renderType()`

### Inherited methods
- from `net.minecraft.client.renderer.blockentity.BlockEntityRenderer`: `getViewDistance`, `shouldRender`, `shouldRenderOffScreen`
