# net.minecraftforge.client.model.pipeline

- [QuadBakingVertexConsumer](#quadbakingvertexconsumer)
- [QuadBakingVertexConsumer.Buffered](#quadbakingvertexconsumer.buffered)
- [RemappingVertexPipeline](#remappingvertexpipeline)
- [TransformingVertexPipeline](#transformingvertexpipeline)
- [VertexConsumerWrapper](#vertexconsumerwrapper)
## QuadBakingVertexConsumer

*class* `net.minecraftforge.client.model.pipeline.QuadBakingVertexConsumer`

Vertex consumer that outputs baked quads.

 This consumer accepts data in DefaultVertexFormat.BLOCK and is not picky about
 ordering or missing elements, but will not automatically populate missing data (color will be black, for example).

### Fields
- `private final Map<VertexFormatElement,Integer> ELEMENT_OFFSETS`
- `private static final int QUAD_DATA_SIZE`
- `private final Consumer<BakedQuad> quadConsumer`
- `int vertexIndex`
- `private int[] quadData`
- `private int tintIndex`
- `private Direction direction`
- `private TextureAtlasSprite sprite`
- `private boolean shade`
- `private boolean hasAmbientOcclusion`

### Methods
- `public VertexConsumer vertex(double x,  double y,  double z)`
- `public VertexConsumer normal(float x,  float y,  float z)`
- `public VertexConsumer color(int r,  int g,  int b,  int a)`
- `public VertexConsumer uv(float u,  float v)`
- `public VertexConsumer overlayCoords(int u,  int v)`
- `public VertexConsumer uv2(int u,  int v)`
- `public VertexConsumer misc(VertexFormatElement element,  int... rawData)`
  Description copied from interface: IForgeVertexConsumer
  Consumes an unknown VertexFormatElement as a raw int data array.
  
   If the consumer needs to store the data for later use, it must copy it. There are no guarantees on immutability.
- `public void endVertex()`
- `public void defaultColor(int r,  int g,  int b,  int a)`
- `public void unsetDefaultColor()`
- `public void setTintIndex(int tintIndex)`
- `public void setDirection(Direction direction)`
- `public void setSprite(TextureAtlasSprite sprite)`
- `public void setShade(boolean shade)`
- `public void setHasAmbientOcclusion(boolean hasAmbientOcclusion)`

### Inherited methods
- from `net.minecraftforge.client.extensions.IForgeVertexConsumer`: `applyBakedLighting`, `applyBakedNormals`, `putBulkData`
- from `com.mojang.blaze3d.vertex.VertexConsumer`: `color`, `color`, `normal`, `overlayCoords`, `putBulkData`, `putBulkData`, `putBulkData`, `uv2`, `vertex`, `vertex`

## QuadBakingVertexConsumer.Buffered

*class* `net.minecraftforge.client.model.pipeline.QuadBakingVertexConsumer.Buffered`

Enclosing class: QuadBakingVertexConsumer

### Fields
- `private final BakedQuad[] output`

### Inherited fields
- from `net.minecraftforge.client.model.pipeline.QuadBakingVertexConsumer`: `vertexIndex`

### Methods
- `public BakedQuad getQuad()`

### Inherited methods
- from `net.minecraftforge.client.model.pipeline.QuadBakingVertexConsumer`: `color`, `defaultColor`, `endVertex`, `misc`, `normal`, `overlayCoords`, `setDirection`, `setHasAmbientOcclusion`, `setShade`, `setSprite`, `setTintIndex`, `unsetDefaultColor`, `uv`, `uv2`, `vertex`
- from `net.minecraftforge.client.extensions.IForgeVertexConsumer`: `applyBakedLighting`, `applyBakedNormals`, `putBulkData`
- from `com.mojang.blaze3d.vertex.VertexConsumer`: `color`, `color`, `normal`, `overlayCoords`, `putBulkData`, `putBulkData`, `putBulkData`, `uv2`, `vertex`, `vertex`

## RemappingVertexPipeline

*class* `net.minecraftforge.client.model.pipeline.RemappingVertexPipeline`

Vertex pipeline element that remaps incoming data to another format.

### Fields
- `private static final Set<VertexFormatElement> KNOWN_ELEMENTS`
- `private static final int[] EMPTY_INT_ARRAY`
- `private final VertexConsumer parent`
- `private final VertexFormat targetFormat`
- `private final org.joml.Vector3d position`
- `private final org.joml.Vector3f normal`
- `private final int[] color`
- `private final float[] uv0`
- `private final int[] uv1`
- `private final int[] uv2`
- `private final Map<VertexFormatElement,Integer> miscElementIds`
- `private final int[][] misc`

### Methods
- `public VertexConsumer vertex(double x,  double y,  double z)`
- `public VertexConsumer normal(float x,  float y,  float z)`
- `public VertexConsumer color(int r,  int g,  int b,  int a)`
- `public VertexConsumer uv(float u,  float v)`
- `public VertexConsumer overlayCoords(int u,  int v)`
- `public VertexConsumer uv2(int u,  int v)`
- `public VertexConsumer misc(VertexFormatElement element,  int... values)`
  Description copied from interface: IForgeVertexConsumer
  Consumes an unknown VertexFormatElement as a raw int data array.
  
   If the consumer needs to store the data for later use, it must copy it. There are no guarantees on immutability.
- `public void endVertex()`
- `public void defaultColor(int r,  int g,  int b,  int a)`
- `public void unsetDefaultColor()`

### Inherited methods
- from `net.minecraftforge.client.extensions.IForgeVertexConsumer`: `applyBakedLighting`, `applyBakedNormals`, `putBulkData`
- from `com.mojang.blaze3d.vertex.VertexConsumer`: `color`, `color`, `normal`, `overlayCoords`, `putBulkData`, `putBulkData`, `putBulkData`, `uv2`, `vertex`, `vertex`

## TransformingVertexPipeline

*class* `net.minecraftforge.client.model.pipeline.TransformingVertexPipeline`

Vertex pipeline element that applies a transformation to incoming geometry.

### Fields
- `private final Transformation transformation`

### Inherited fields
- from `net.minecraftforge.client.model.pipeline.VertexConsumerWrapper`: `parent`

### Methods
- `public VertexConsumer vertex(double x,  double y,  double z)`
- `public VertexConsumer normal(float x,  float y,  float z)`

### Inherited methods
- from `net.minecraftforge.client.model.pipeline.VertexConsumerWrapper`: `color`, `defaultColor`, `endVertex`, `misc`, `overlayCoords`, `unsetDefaultColor`, `uv`, `uv2`
- from `net.minecraftforge.client.extensions.IForgeVertexConsumer`: `applyBakedLighting`, `applyBakedNormals`, `putBulkData`
- from `com.mojang.blaze3d.vertex.VertexConsumer`: `color`, `color`, `normal`, `overlayCoords`, `putBulkData`, `putBulkData`, `putBulkData`, `uv2`, `vertex`, `vertex`

## VertexConsumerWrapper

*class* `net.minecraftforge.client.model.pipeline.VertexConsumerWrapper`

Wrapper for VertexConsumer which delegates all operations to its parent.

 Useful for defining custom pipeline elements that only process certain data.

### Fields
- `protected final VertexConsumer parent`

### Methods
- `public VertexConsumer vertex(double x,  double y,  double z)`
- `public VertexConsumer color(int r,  int g,  int b,  int a)`
- `public VertexConsumer uv(float u,  float v)`
- `public VertexConsumer overlayCoords(int u,  int v)`
- `public VertexConsumer uv2(int u,  int v)`
- `public VertexConsumer normal(float x,  float y,  float z)`
- `public VertexConsumer misc(VertexFormatElement element,  int... values)`
  Description copied from interface: IForgeVertexConsumer
  Consumes an unknown VertexFormatElement as a raw int data array.
  
   If the consumer needs to store the data for later use, it must copy it. There are no guarantees on immutability.
- `public void endVertex()`
- `public void defaultColor(int r,  int g,  int b,  int a)`
- `public void unsetDefaultColor()`

### Inherited methods
- from `net.minecraftforge.client.extensions.IForgeVertexConsumer`: `applyBakedLighting`, `applyBakedNormals`, `putBulkData`
- from `com.mojang.blaze3d.vertex.VertexConsumer`: `color`, `color`, `normal`, `overlayCoords`, `putBulkData`, `putBulkData`, `putBulkData`, `uv2`, `vertex`, `vertex`
