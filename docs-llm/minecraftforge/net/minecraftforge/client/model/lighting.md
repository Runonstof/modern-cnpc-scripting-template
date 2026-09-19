# net.minecraftforge.client.model.lighting

- [FlatQuadLighter](#flatquadlighter)
- [ForgeModelBlockRenderer](#forgemodelblockrenderer)
- [QuadLighter](#quadlighter)
- [SmoothQuadLighter](#smoothquadlighter)
## FlatQuadLighter

*class* `net.minecraftforge.client.model.lighting.FlatQuadLighter`

Implementation of QuadLighter that lights quads with flat lighting.

### Fields
- `private static final Direction[] SIDES`
- `private static final float MAX_POSITION` (= 0.9900000095367432f)
- `private static final byte MAX_NORMAL` (= 0x7f)
- `private boolean isFullCube`
- `private final int[] packedLight`

### Methods
- `protected void computeLightingAt(BlockAndTintGetter level,  BlockPos pos,  BlockState state)`
- `protected float calculateBrightness(float[] position)`
- `protected int calculateLightmap(float[] position,  byte[] normal)`

### Inherited methods
- from `net.minecraftforge.client.model.lighting.QuadLighter`: `calculateShade`, `getLightColor`, `process`, `reset`, `setup`

## ForgeModelBlockRenderer

*class* `net.minecraftforge.client.model.lighting.ForgeModelBlockRenderer`

Wrapper around ModelBlockRenderer to allow rendering blocks via Forge's lighting pipeline.

### Fields
- `private static final Direction[] SIDES`
- `private final ThreadLocal<QuadLighter> flatLighter`
- `private final ThreadLocal<QuadLighter> smoothLighter`

### Methods
- `public void tesselateWithoutAO(BlockAndTintGetter level,  BakedModel model,  BlockState state,  BlockPos pos,  PoseStack poseStack,  VertexConsumer vertexConsumer,  boolean checkSides,  RandomSource rand,  long seed,  int packedOverlay,  ModelData modelData,  RenderType renderType)`
- `public void tesselateWithAO(BlockAndTintGetter level,  BakedModel model,  BlockState state,  BlockPos pos,  PoseStack poseStack,  VertexConsumer vertexConsumer,  boolean checkSides,  RandomSource rand,  long seed,  int packedOverlay,  ModelData modelData,  RenderType renderType)`
- `public static boolean render(VertexConsumer vertexConsumer,  QuadLighter lighter,  BlockAndTintGetter level,  BakedModel model,  BlockState state,  BlockPos pos,  PoseStack poseStack,  boolean checkSides,  RandomSource rand,  long seed,  int packedOverlay,  ModelData modelData,  RenderType renderType)`

### Inherited methods
- from `net.minecraft.client.renderer.block.ModelBlockRenderer`: `clearCache`, `enableCaching`, `renderModel`, `renderModel`, `tesselateBlock`, `tesselateBlock`, `tesselateWithAO`, `tesselateWithoutAO`

## QuadLighter

*class* `net.minecraftforge.client.model.lighting.QuadLighter`

Base class for all quad lighting providers.

 Contains all the shared elements needed for BakedQuad processing and defers lighting logic to inheritors.

### Fields
- `private static final float[] WHITE`
- `private final BlockColors colors`
- `private int currentHash`
- `private BlockAndTintGetter level`
- `private BlockPos pos`
- `private BlockState state`
- `private int cachedTintIndex`
- `private final float[] cachedTintColor`
- `private final float[] brightness`
- `private final int[] lightmap`
- `private final float[][] positions`
- `private final byte[][] normals`
- `private final int[] packedLightmaps`

### Methods
- `protected abstract void computeLightingAt(BlockAndTintGetter level,  BlockPos pos,  BlockState state)`
- `protected abstract float calculateBrightness(float[] position)`
- `protected abstract int calculateLightmap(float[] position,  byte[] normal)`
- `public final void setup(BlockAndTintGetter level,  BlockPos pos,  BlockState state)`
- `public final void reset()`
- `public final void process(VertexConsumer consumer,  PoseStack.Pose pose,  BakedQuad quad,  int overlay)`
- `private float[] getColorFast(int tintIndex)`
- `public static float calculateShade(float normalX,  float normalY,  float normalZ,  boolean constantAmbientLight)`
- `@Deprecated(since="1.20.1") protected static int getLightColor(BlockAndTintGetter level,  BlockPos pos,  BlockState state)` (deprecated)
  Note: This method is subtly different than LevelRenderer.getLightColor(BlockAndTintGetter, BlockState, BlockPos)
   as it only uses the state for querying if the state has emissive rendering but instead looks up the state at the given position for checking the
   light emission.

## SmoothQuadLighter

*class* `net.minecraftforge.client.model.lighting.SmoothQuadLighter`

Implementation of QuadLighter that lights baked quads using ambient occlusion and
 light interpolation.

### Fields
- `private static final Direction[] SIDES`
- `private final BlockPos.MutableBlockPos pos`
- `private final boolean[][][] t`
- `private final int[][][] s`
- `private final int[][][] b`
- `private final float[][][][] skyLight`
- `private final float[][][][] blockLight`
- `private final float[][][] ao`

### Methods
- `protected void computeLightingAt(BlockAndTintGetter level,  BlockPos origin,  BlockState state)`
- `protected float calculateBrightness(float[] position)`
- `protected int calculateLightmap(float[] position,  byte[] normal)`
- `private float combine(int c,  int s1,  int s2,  int s3,  boolean t0,  boolean t1,  boolean t2,  boolean t3)`
- `protected float calcLightmap(float[][][][] light,  float x,  float y,  float z)`

### Inherited methods
- from `net.minecraftforge.client.model.lighting.QuadLighter`: `calculateShade`, `getLightColor`, `process`, `reset`, `setup`
