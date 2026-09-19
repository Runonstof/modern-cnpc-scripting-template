# net.minecraft.client.renderer.block

- [BlockModelShaper](#blockmodelshaper)
- [BlockRenderDispatcher](#blockrenderdispatcher)
- [Class ModelBlockRenderer.AdjacencyInfo](#class-modelblockrenderer.adjacencyinfo)
- [Class ModelBlockRenderer.AmbientVertexRemap](#class-modelblockrenderer.ambientvertexremap)
- [Class ModelBlockRenderer.SizeInfo](#class-modelblockrenderer.sizeinfo)
- [LiquidBlockRenderer](#liquidblockrenderer)
- [ModelBlockRenderer](#modelblockrenderer)
- [ModelBlockRenderer.AmbientOcclusionFace](#modelblockrenderer.ambientocclusionface)
- [ModelBlockRenderer.Cache](#modelblockrenderer.cache)
## BlockModelShaper

*class* `net.minecraft.client.renderer.block.BlockModelShaper`

### Fields
- `private Map<BlockState,BakedModel> modelByStateCache`
- `private final ModelManager modelManager`

### Methods
- `@Deprecated public TextureAtlasSprite getParticleIcon(BlockState p_110883_)` (deprecated)
- `public TextureAtlasSprite getTexture(BlockState p_110883_,  Level level,  BlockPos pos)`
- `public BakedModel getBlockModel(BlockState p_110894_)`
- `public ModelManager getModelManager()`
- `public void replaceCache(Map<BlockState,BakedModel> p_248582_)`
- `public static ModelResourceLocation stateToModelLocation(BlockState p_110896_)`
- `public static ModelResourceLocation stateToModelLocation(ResourceLocation p_110890_,  BlockState p_110891_)`
- `public static String statePropertiesToString(Map<Property<?>,Comparable<?>> p_110888_)`
- `private static <T extends Comparable<T>> String getValue(Property<T> p_110885_,  Comparable<?> p_110886_)`

## BlockRenderDispatcher

*class* `net.minecraft.client.renderer.block.BlockRenderDispatcher`

### Fields
- `private final BlockModelShaper blockModelShaper`
- `private final ModelBlockRenderer modelRenderer`
- `private final BlockEntityWithoutLevelRenderer blockEntityRenderer`
- `private final LiquidBlockRenderer liquidBlockRenderer`
- `private final RandomSource random`
- `private final BlockColors blockColors`

### Methods
- `public BlockModelShaper getBlockModelShaper()`
- `@Deprecated public void renderBreakingTexture(BlockState p_110919_,  BlockPos p_110920_,  BlockAndTintGetter p_110921_,  PoseStack p_110922_,  VertexConsumer p_110923_)` (deprecated)
- `public void renderBreakingTexture(BlockState p_110919_,  BlockPos p_110920_,  BlockAndTintGetter p_110921_,  PoseStack p_110922_,  VertexConsumer p_110923_,  ModelData modelData)`
- `@Deprecated public void renderBatched(BlockState p_234356_,  BlockPos p_234357_,  BlockAndTintGetter p_234358_,  PoseStack p_234359_,  VertexConsumer p_234360_,  boolean p_234361_,  RandomSource p_234362_)` (deprecated)
- `public void renderBatched(BlockState p_234356_,  BlockPos p_234357_,  BlockAndTintGetter p_234358_,  PoseStack p_234359_,  VertexConsumer p_234360_,  boolean p_234361_,  RandomSource p_234362_,  ModelData modelData,  RenderType renderType)`
- `public void renderLiquid(BlockPos p_234364_,  BlockAndTintGetter p_234365_,  VertexConsumer p_234366_,  BlockState p_234367_,  FluidState p_234368_)`
- `public ModelBlockRenderer getModelRenderer()`
- `public BakedModel getBlockModel(BlockState p_110911_)`
- `@Deprecated public void renderSingleBlock(BlockState p_110913_,  PoseStack p_110914_,  MultiBufferSource p_110915_,  int p_110916_,  int p_110917_)` (deprecated)
- `public void renderSingleBlock(BlockState p_110913_,  PoseStack p_110914_,  MultiBufferSource p_110915_,  int p_110916_,  int p_110917_,  ModelData modelData,  RenderType renderType)`
- `public void onResourceManagerReload(ResourceManager p_110909_)`

### Inherited methods
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`
- from `net.minecraft.server.packs.resources.ResourceManagerReloadListener`: `reload`

## Class ModelBlockRenderer.AdjacencyInfo

*enum* `net.minecraft.client.renderer.block.Class ModelBlockRenderer.AdjacencyInfo`

Enclosing class: ModelBlockRenderer

### Fields
- `final Direction[] corners`
- `final boolean doNonCubicWeight`
- `final ModelBlockRenderer.SizeInfo[] vert0Weights`
- `final ModelBlockRenderer.SizeInfo[] vert1Weights`
- `final ModelBlockRenderer.SizeInfo[] vert2Weights`
- `final ModelBlockRenderer.SizeInfo[] vert3Weights`
- `private static final ModelBlockRenderer.AdjacencyInfo[] BY_FACING`

### Methods
- `public static ModelBlockRenderer.AdjacencyInfo[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ModelBlockRenderer.AdjacencyInfo valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static ModelBlockRenderer.AdjacencyInfo fromFacing(Direction p_111132_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ModelBlockRenderer.AmbientVertexRemap

*enum* `net.minecraft.client.renderer.block.Class ModelBlockRenderer.AmbientVertexRemap`

Enclosing class: ModelBlockRenderer

### Fields
- `final int vert0`
- `final int vert1`
- `final int vert2`
- `final int vert3`
- `private static final ModelBlockRenderer.AmbientVertexRemap[] BY_FACING`

### Methods
- `public static ModelBlockRenderer.AmbientVertexRemap[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ModelBlockRenderer.AmbientVertexRemap valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static ModelBlockRenderer.AmbientVertexRemap fromFacing(Direction p_111202_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ModelBlockRenderer.SizeInfo

*enum* `net.minecraft.client.renderer.block.Class ModelBlockRenderer.SizeInfo`

Enclosing class: ModelBlockRenderer

### Fields
- `final int shape`

### Methods
- `public static ModelBlockRenderer.SizeInfo[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ModelBlockRenderer.SizeInfo valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## LiquidBlockRenderer

*class* `net.minecraft.client.renderer.block.LiquidBlockRenderer`

### Fields
- `private static final float MAX_FLUID_HEIGHT` (= 0.8888888955116272f)
- `private final TextureAtlasSprite[] lavaIcons`
- `private final TextureAtlasSprite[] waterIcons`
- `private TextureAtlasSprite waterOverlay`

### Methods
- `protected void setupSprites()`
- `private static boolean isNeighborSameFluid(FluidState p_203186_,  FluidState p_203187_)`
- `private static boolean isFaceOccludedByState(BlockGetter p_110979_,  Direction p_110980_,  float p_110981_,  BlockPos p_110982_,  BlockState p_110983_)`
- `private static boolean isFaceOccludedByNeighbor(BlockGetter p_203180_,  BlockPos p_203181_,  Direction p_203182_,  float p_203183_,  BlockState p_203184_)`
- `private static boolean isFaceOccludedBySelf(BlockGetter p_110960_,  BlockPos p_110961_,  BlockState p_110962_,  Direction p_110963_)`
- `public static boolean shouldRenderFace(BlockAndTintGetter p_203167_,  BlockPos p_203168_,  FluidState p_203169_,  BlockState p_203170_,  Direction p_203171_,  FluidState p_203172_)`
- `public void tesselate(BlockAndTintGetter p_234370_,  BlockPos p_234371_,  VertexConsumer p_234372_,  BlockState p_234373_,  FluidState p_234374_)`
- `private float calculateAverageHeight(BlockAndTintGetter p_203150_,  Fluid p_203151_,  float p_203152_,  float p_203153_,  float p_203154_,  BlockPos p_203155_)`
- `private void addWeightedHeight(float[] p_203189_,  float p_203190_)`
- `private float getHeight(BlockAndTintGetter p_203157_,  Fluid p_203158_,  BlockPos p_203159_)`
- `private float getHeight(BlockAndTintGetter p_203161_,  Fluid p_203162_,  BlockPos p_203163_,  BlockState p_203164_,  FluidState p_203165_)`
- `private void vertex(VertexConsumer p_110985_,  double p_110986_,  double p_110987_,  double p_110988_,  float p_110989_,  float p_110990_,  float p_110991_,  float alpha,  float p_110992_,  float p_110993_,  int p_110994_)`
- `private int getLightColor(BlockAndTintGetter p_110946_,  BlockPos p_110947_)`

## ModelBlockRenderer

*class* `net.minecraft.client.renderer.block.ModelBlockRenderer`

### Fields
- `private static final int FACE_CUBIC` (= 0)
- `private static final int FACE_PARTIAL` (= 1)
- `static final Direction[] DIRECTIONS`
- `private final BlockColors blockColors`
- `private static final int CACHE_SIZE` (= 100)
- `static final ThreadLocal<ModelBlockRenderer.Cache> CACHE`

### Methods
- `@Deprecated public void tesselateBlock(BlockAndTintGetter p_234380_,  BakedModel p_234381_,  BlockState p_234382_,  BlockPos p_234383_,  PoseStack p_234384_,  VertexConsumer p_234385_,  boolean p_234386_,  RandomSource p_234387_,  long p_234388_,  int p_234389_)` (deprecated)
- `public void tesselateBlock(BlockAndTintGetter p_234380_,  BakedModel p_234381_,  BlockState p_234382_,  BlockPos p_234383_,  PoseStack p_234384_,  VertexConsumer p_234385_,  boolean p_234386_,  RandomSource p_234387_,  long p_234388_,  int p_234389_,  ModelData modelData,  RenderType renderType)`
- `@Deprecated public void tesselateWithAO(BlockAndTintGetter p_234391_,  BakedModel p_234392_,  BlockState p_234393_,  BlockPos p_234394_,  PoseStack p_234395_,  VertexConsumer p_234396_,  boolean p_234397_,  RandomSource p_234398_,  long p_234399_,  int p_234400_)` (deprecated)
- `public void tesselateWithAO(BlockAndTintGetter p_111079_,  BakedModel p_111080_,  BlockState p_111081_,  BlockPos p_111082_,  PoseStack p_111083_,  VertexConsumer p_111084_,  boolean p_111085_,  RandomSource p_111086_,  long p_111087_,  int p_111088_,  ModelData modelData,  RenderType renderType)`
- `@Deprecated public void tesselateWithoutAO(BlockAndTintGetter p_234402_,  BakedModel p_234403_,  BlockState p_234404_,  BlockPos p_234405_,  PoseStack p_234406_,  VertexConsumer p_234407_,  boolean p_234408_,  RandomSource p_234409_,  long p_234410_,  int p_234411_)` (deprecated)
- `public void tesselateWithoutAO(BlockAndTintGetter p_111091_,  BakedModel p_111092_,  BlockState p_111093_,  BlockPos p_111094_,  PoseStack p_111095_,  VertexConsumer p_111096_,  boolean p_111097_,  RandomSource p_111098_,  long p_111099_,  int p_111100_,  ModelData modelData,  RenderType renderType)`
- `private void renderModelFaceAO(BlockAndTintGetter p_111013_,  BlockState p_111014_,  BlockPos p_111015_,  PoseStack p_111016_,  VertexConsumer p_111017_,  List<BakedQuad> p_111018_,  float[] p_111019_,  BitSet p_111020_,  ModelBlockRenderer.AmbientOcclusionFace p_111021_,  int p_111022_)`
- `private void putQuadData(BlockAndTintGetter p_111024_,  BlockState p_111025_,  BlockPos p_111026_,  VertexConsumer p_111027_,  PoseStack.Pose p_111028_,  BakedQuad p_111029_,  float p_111030_,  float p_111031_,  float p_111032_,  float p_111033_,  int p_111034_,  int p_111035_,  int p_111036_,  int p_111037_,  int p_111038_)`
- `private void calculateShape(BlockAndTintGetter p_111040_,  BlockState p_111041_,  BlockPos p_111042_,  int[] p_111043_,  Direction p_111044_,  @Nullable  float[] p_111045_,  BitSet p_111046_)`
- `private void renderModelFaceFlat(BlockAndTintGetter p_111002_,  BlockState p_111003_,  BlockPos p_111004_,  int p_111005_,  int p_111006_,  boolean p_111007_,  PoseStack p_111008_,  VertexConsumer p_111009_,  List<BakedQuad> p_111010_,  BitSet p_111011_)`
- `@Deprecated public void renderModel(PoseStack.Pose p_111068_,  VertexConsumer p_111069_,  @Nullable  BlockState p_111070_,  BakedModel p_111071_,  float p_111072_,  float p_111073_,  float p_111074_,  int p_111075_,  int p_111076_)` (deprecated)
- `public void renderModel(PoseStack.Pose p_111068_,  VertexConsumer p_111069_,  @Nullable  BlockState p_111070_,  BakedModel p_111071_,  float p_111072_,  float p_111073_,  float p_111074_,  int p_111075_,  int p_111076_,  ModelData modelData,  RenderType renderType)`
- `private static void renderQuadList(PoseStack.Pose p_111059_,  VertexConsumer p_111060_,  float p_111061_,  float p_111062_,  float p_111063_,  List<BakedQuad> p_111064_,  int p_111065_,  int p_111066_)`
- `public static void enableCaching()`
- `public static void clearCache()`

## ModelBlockRenderer.AmbientOcclusionFace

*class* `net.minecraft.client.renderer.block.ModelBlockRenderer.AmbientOcclusionFace`

Enclosing class: ModelBlockRenderer

### Fields
- `final float[] brightness`
- `final int[] lightmap`

### Methods
- `public void calculate(BlockAndTintGetter p_111168_,  BlockState p_111169_,  BlockPos p_111170_,  Direction p_111171_,  float[] p_111172_,  BitSet p_111173_,  boolean p_111174_)`
- `private int blend(int p_111154_,  int p_111155_,  int p_111156_,  int p_111157_)`
- `private int blend(int p_111159_,  int p_111160_,  int p_111161_,  int p_111162_,  float p_111163_,  float p_111164_,  float p_111165_,  float p_111166_)`

## ModelBlockRenderer.Cache

*class* `net.minecraft.client.renderer.block.ModelBlockRenderer.Cache`

Enclosing class: ModelBlockRenderer

### Fields
- `private boolean enabled`
- `private final it.unimi.dsi.fastutil.longs.Long2IntLinkedOpenHashMap colorCache`
- `private final it.unimi.dsi.fastutil.longs.Long2FloatLinkedOpenHashMap brightnessCache`

### Methods
- `public void enable()`
- `public void disable()`
- `public int getLightColor(BlockState p_111222_,  BlockAndTintGetter p_111223_,  BlockPos p_111224_)`
- `public float getShadeBrightness(BlockState p_111227_,  BlockAndTintGetter p_111228_,  BlockPos p_111229_)`
