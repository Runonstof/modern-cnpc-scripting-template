# net.minecraftforge.client.model.pipeline

- [BlockInfo](#blockinfo)
- [ForgeBlockModelRenderer](#forgeblockmodelrenderer)
- [IVertexConsumer](#ivertexconsumer)
- [IVertexProducer](#ivertexproducer)
- [LightUtil](#lightutil)
- [LightUtil.ItemConsumer](#lightutil.itemconsumer)
- [QuadGatheringTransformer](#quadgatheringtransformer)
- [TransformerConsumer](#transformerconsumer)
- [TRSRTransformer](#trsrtransformer)
- [UnpackedBakedQuad](#unpackedbakedquad)
- [UnpackedBakedQuad.Builder](#unpackedbakedquad.builder)
- [VertexBufferConsumer](#vertexbufferconsumer)
- [VertexLighterFlat](#vertexlighterflat)
- [VertexLighterSmoothAo](#vertexlightersmoothao)
- [VertexTransformer](#vertextransformer)
## BlockInfo

*class* `net.minecraftforge.client.model.pipeline.BlockInfo`

### Methods
- `public int getColorMultiplier(int tint)`
- `public void updateShift()`
- `public void setWorld(IBlockAccess world)`
- `public void setState(IBlockState state)`
- `public void setBlockPos(BlockPos blockPos)`
- `public void reset()`
- `public void updateLightMatrix()`
- `public void updateFlatLighting()`
- `public IBlockAccess getWorld()`
- `public IBlockState getState()`
- `public BlockPos getBlockPos()`
- `public boolean[][][] getTranslucent()`
- `public float[][][][] getSkyLight()`
- `public float[][][][] getBlockLight()`
- `public float[][][] getAo()`
- `public int[] getPackedLight()`
- `public boolean isFullCube()`
- `public float getShx()`
- `public float getShy()`
- `public float getShz()`
- `public int getCachedTint()`
- `public int getCachedMultiplier()`

## ForgeBlockModelRenderer

*class* `net.minecraftforge.client.model.pipeline.ForgeBlockModelRenderer`

### Methods
- `public boolean renderModelFlat(IBlockAccess world,  IBakedModel model,  IBlockState state,  BlockPos pos,  BufferBuilder buffer,  boolean checkSides,  long rand)`
- `public boolean renderModelSmooth(IBlockAccess world,  IBakedModel model,  IBlockState state,  BlockPos pos,  BufferBuilder buffer,  boolean checkSides,  long rand)`
- `public static boolean render(VertexLighterFlat lighter,  IBlockAccess world,  IBakedModel model,  IBlockState state,  BlockPos pos,  BufferBuilder wr,  boolean checkSides,  long rand)`

### Inherited methods
- from `net.minecraft.client.renderer.BlockModelRenderer`: `renderModel`, `renderModel`, `renderModelBrightness`, `renderModelBrightnessColor`, `renderModelBrightnessColor`

## IVertexConsumer

*interface* `net.minecraftforge.client.model.pipeline.IVertexConsumer`

Assumes that the data length is not less than e.getElementCount().
 Also assumes that element index passed will increment from 0 to format.getElementCount() - 1.
 Normal, Color and UV are assumed to be in 0-1 range.

### Methods
- `VertexFormat getVertexFormat()`
  - returns: the format that should be used for passed data.
- `void setQuadTint(int tint)`
- `void setQuadOrientation(EnumFacing orientation)`
- `void setApplyDiffuseLighting(boolean diffuse)`
- `void setTexture(TextureAtlasSprite texture)`
- `void put(int element,  float... data)`

## IVertexProducer

*interface* `net.minecraftforge.client.model.pipeline.IVertexProducer`

### Methods
- `void pipe(IVertexConsumer consumer)`
  - param: consumer - consumer to receive the vertex data this producer can provide

## LightUtil

*class* `net.minecraftforge.client.model.pipeline.LightUtil`

### Methods
- `public static float diffuseLight(float x,  float y,  float z)`
- `public static float diffuseLight(EnumFacing side)`
- `public static EnumFacing toSide(float x,  float y,  float z)`
- `public static void putBakedQuad(IVertexConsumer consumer,  BakedQuad quad)`
- `public static int[] mapFormats(VertexFormat from,  VertexFormat to)`
- `public static void unpack(int[] from,  float[] to,  VertexFormat formatFrom,  int v,  int e)`
- `public static void pack(float[] from,  int[] to,  VertexFormat formatTo,  int v,  int e)`
- `@Deprecated public static IVertexConsumer getTessellator()` (deprecated)
  Deprecated.
- `@Deprecated public static LightUtil.ItemConsumer getItemConsumer()` (deprecated)
  Deprecated.
- `public static void renderQuadColorSlow(BufferBuilder buffer,  BakedQuad quad,  int auxColor)`
- `public static void renderQuadColor(BufferBuilder buffer,  BakedQuad quad,  int auxColor)`

## LightUtil.ItemConsumer

*class* `net.minecraftforge.client.model.pipeline.LightUtil.ItemConsumer`

All Implemented Interfaces: IVertexConsumer

Enclosing class: LightUtil

### Inherited fields
- from `net.minecraftforge.client.model.pipeline.VertexTransformer`: `parent`

### Methods
- `public void setAuxColor(float... auxColor)`
- `public void put(int element,  float... data)`

### Inherited methods
- from `net.minecraftforge.client.model.pipeline.VertexTransformer`: `getVertexFormat`, `setApplyDiffuseLighting`, `setQuadOrientation`, `setQuadTint`, `setTexture`

## QuadGatheringTransformer

*class* `net.minecraftforge.client.model.pipeline.QuadGatheringTransformer`

All Implemented Interfaces: IVertexConsumer

### Fields
- `protected IVertexConsumer parent`
- `protected VertexFormat format`
- `protected int vertices`
- `protected byte[] dataLength`
- `protected float[][][] quadData`

### Methods
- `public void setParent(IVertexConsumer parent)`
- `public void setVertexFormat(VertexFormat format)`
- `public VertexFormat getVertexFormat()`
  - returns: the format that should be used for passed data.
- `public void put(int element,  float... data)`
- `protected abstract void processQuad()`

### Inherited methods
- from `net.minecraftforge.client.model.pipeline.IVertexConsumer`: `setApplyDiffuseLighting`, `setQuadOrientation`, `setQuadTint`, `setTexture`

## TransformerConsumer

*class* `net.minecraftforge.client.model.pipeline.TransformerConsumer`

All Implemented Interfaces: IVertexConsumer

### Methods
- `public VertexFormat getVertexFormat()`
  - returns: the format that should be used for passed data.
- `public void put(int element,  float... data)`
- `protected abstract float[] transform(int element,  float... data)`

### Inherited methods
- from `net.minecraftforge.client.model.pipeline.IVertexConsumer`: `setApplyDiffuseLighting`, `setQuadOrientation`, `setQuadTint`, `setTexture`

## TRSRTransformer

*class* `net.minecraftforge.client.model.pipeline.TRSRTransformer`

All Implemented Interfaces: IVertexConsumer

### Inherited fields
- from `net.minecraftforge.client.model.pipeline.VertexTransformer`: `parent`

### Methods
- `public void put(int element,  float... data)`

### Inherited methods
- from `net.minecraftforge.client.model.pipeline.VertexTransformer`: `getVertexFormat`, `setApplyDiffuseLighting`, `setQuadOrientation`, `setQuadTint`, `setTexture`

## UnpackedBakedQuad

*class* `net.minecraftforge.client.model.pipeline.UnpackedBakedQuad`

All Implemented Interfaces: IVertexProducer

### Fields
- `protected final float[][][] unpackedData`
- `protected final VertexFormat format`
- `protected boolean packed`

### Inherited fields
- from `net.minecraft.client.renderer.block.model.BakedQuad`: `applyDiffuseLighting`, `face`, `sprite`, `tintIndex`, `vertexData`

### Methods
- `public int[] getVertexData()`
- `public void pipe(IVertexConsumer consumer)`
  - param: consumer - consumer to receive the vertex data this producer can provide

### Inherited methods
- from `net.minecraft.client.renderer.block.model.BakedQuad`: `getFace`, `getFormat`, `getSprite`, `getTintIndex`, `hasTintIndex`, `shouldApplyDiffuseLighting`

## UnpackedBakedQuad.Builder

*class* `net.minecraftforge.client.model.pipeline.UnpackedBakedQuad.Builder`

All Implemented Interfaces: IVertexConsumer

Enclosing class: UnpackedBakedQuad

### Methods
- `public VertexFormat getVertexFormat()`
  - returns: the format that should be used for passed data.
- `public void setContractUVs(boolean value)`
- `public void setQuadTint(int tint)`
- `public void setQuadOrientation(EnumFacing orientation)`
- `public void setTexture(TextureAtlasSprite texture)`
- `public void setApplyDiffuseLighting(boolean diffuse)`
- `public void put(int element,  float... data)`
- `public UnpackedBakedQuad build()`

## VertexBufferConsumer

*class* `net.minecraftforge.client.model.pipeline.VertexBufferConsumer`

Assumes VertexFormatElement is present in the BufferBuilder's vertex format.

All Implemented Interfaces: IVertexConsumer

### Methods
- `public VertexFormat getVertexFormat()`
  - returns: the format that should be used for passed data.
- `public void put(int e,  float... data)`
- `public void setBuffer(BufferBuilder buffer)`
- `public void setOffset(BlockPos offset)`
- `public void setQuadTint(int tint)`
- `public void setQuadOrientation(EnumFacing orientation)`
- `public void setApplyDiffuseLighting(boolean diffuse)`
- `public void setTexture(TextureAtlasSprite texture)`

## VertexLighterFlat

*class* `net.minecraftforge.client.model.pipeline.VertexLighterFlat`

All Implemented Interfaces: IVertexConsumer

### Fields
- `protected static final VertexFormatElement NORMAL_4F`
- `protected final BlockInfo blockInfo`
- `protected int posIndex`
- `protected int normalIndex`
- `protected int colorIndex`
- `protected int lightmapIndex`
- `protected VertexFormat baseFormat`

### Inherited fields
- from `net.minecraftforge.client.model.pipeline.QuadGatheringTransformer`: `dataLength`, `format`, `parent`, `quadData`, `vertices`

### Methods
- `public void setParent(IVertexConsumer parent)`
- `public void setVertexFormat(VertexFormat format)`
- `protected void processQuad()`
- `protected void applyAnaglyph(float[] color)`
- `protected void updateLightmap(float[] normal,  float[] lightmap,  float x,  float y,  float z)`
- `protected void updateColor(float[] normal,  float[] color,  float x,  float y,  float z,  float tint,  int multiplier)`
- `public void setQuadTint(int tint)`
- `public void setQuadOrientation(EnumFacing orientation)`
- `public void setQuadCulled()`
- `public void setTexture(TextureAtlasSprite texture)`
- `public void setApplyDiffuseLighting(boolean diffuse)`
- `public void setWorld(IBlockAccess world)`
- `public void setState(IBlockState state)`
- `public void setBlockPos(BlockPos blockPos)`
- `public void resetBlockInfo()`
- `public void updateBlockInfo()`

### Inherited methods
- from `net.minecraftforge.client.model.pipeline.QuadGatheringTransformer`: `getVertexFormat`, `put`

## VertexLighterSmoothAo

*class* `net.minecraftforge.client.model.pipeline.VertexLighterSmoothAo`

All Implemented Interfaces: IVertexConsumer

### Inherited fields
- from `net.minecraftforge.client.model.pipeline.VertexLighterFlat`: `baseFormat`, `blockInfo`, `colorIndex`, `lightmapIndex`, `NORMAL_4F`, `normalIndex`, `posIndex`
- from `net.minecraftforge.client.model.pipeline.QuadGatheringTransformer`: `dataLength`, `format`, `parent`, `quadData`, `vertices`

### Methods
- `protected void updateLightmap(float[] normal,  float[] lightmap,  float x,  float y,  float z)`
- `protected void updateColor(float[] normal,  float[] color,  float x,  float y,  float z,  float tint,  int multiplier)`
- `protected void calcLightmap(float[] lightmap,  float x,  float y,  float z)`
- `protected float getAo(float x,  float y,  float z)`
- `public void updateBlockInfo()`

### Inherited methods
- from `net.minecraftforge.client.model.pipeline.VertexLighterFlat`: `applyAnaglyph`, `processQuad`, `resetBlockInfo`, `setApplyDiffuseLighting`, `setBlockPos`, `setParent`, `setQuadCulled`, `setQuadOrientation`, `setQuadTint`, `setState`, `setTexture`, `setVertexFormat`, `setWorld`
- from `net.minecraftforge.client.model.pipeline.QuadGatheringTransformer`: `getVertexFormat`, `put`

## VertexTransformer

*class* `net.minecraftforge.client.model.pipeline.VertexTransformer`

All Implemented Interfaces: IVertexConsumer

### Fields
- `protected final IVertexConsumer parent`

### Methods
- `public VertexFormat getVertexFormat()`
  - returns: the format that should be used for passed data.
- `public void setQuadTint(int tint)`
- `public void setTexture(TextureAtlasSprite texture)`
- `public void setQuadOrientation(EnumFacing orientation)`
- `public void setApplyDiffuseLighting(boolean diffuse)`
- `public void put(int element,  float... data)`
