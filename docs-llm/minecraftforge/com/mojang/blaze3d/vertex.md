# com.mojang.blaze3d.vertex

- [BufferBuilder](#bufferbuilder)
- [BufferBuilder.DrawState](#bufferbuilder.drawstate)
- [BufferBuilder.RenderedBuffer](#bufferbuilder.renderedbuffer)
- [BufferBuilder.SortState](#bufferbuilder.sortstate)
- [BufferUploader](#bufferuploader)
- [BufferVertexConsumer](#buffervertexconsumer)
- [Class VertexBuffer.Usage](#class-vertexbuffer.usage)
- [Class VertexFormat.IndexType](#class-vertexformat.indextype)
- [Class VertexFormat.Mode](#class-vertexformat.mode)
- [Class VertexFormatElement.Type](#class-vertexformatelement.type)
- [Class VertexFormatElement.Usage](#class-vertexformatelement.usage)
- [DefaultedVertexConsumer](#defaultedvertexconsumer)
- [DefaultVertexFormat](#defaultvertexformat)
- [PoseStack](#posestack)
- [PoseStack.Pose](#posestack.pose)
- [SheetedDecalTextureGenerator](#sheeteddecaltexturegenerator)
- [Tesselator](#tesselator)
- [VertexBuffer](#vertexbuffer)
- [VertexConsumer](#vertexconsumer)
- [VertexFormat](#vertexformat)
- [VertexFormatElement](#vertexformatelement)
- [VertexFormatElement.Usage.ClearState](#vertexformatelement.usage.clearstate)
- [VertexFormatElement.Usage.SetupState](#vertexformatelement.usage.setupstate)
- [VertexMultiConsumer](#vertexmulticonsumer)
- [VertexMultiConsumer.Double](#vertexmulticonsumer.double)
- [VertexMultiConsumer.Multiple](#vertexmulticonsumer.multiple)
- [VertexSorting](#vertexsorting)
- [VertexSorting.DistanceFunction](#vertexsorting.distancefunction)
## BufferBuilder

*class* `com.mojang.blaze3d.vertex.BufferBuilder`

### Fields
- `private static final int GROWTH_SIZE` (= 2097152)
- `private static final org.slf4j.Logger LOGGER`
- `private ByteBuffer buffer`
- `private int renderedBufferCount`
- `private int renderedBufferPointer`
- `private int nextElementByte`
- `private int vertices`
- `@Nullable private VertexFormatElement currentElement`
- `private int elementIndex`
- `private VertexFormat format`
- `private VertexFormat.Mode mode`
- `private boolean fastFormat`
- `private boolean fullFormat`
- `private boolean building`
- `@Nullable private org.joml.Vector3f[] sortingPoints`
- `@Nullable private VertexSorting sorting`
- `private boolean indexOnly`

### Inherited fields
- from `com.mojang.blaze3d.vertex.DefaultedVertexConsumer`: `defaultA`, `defaultB`, `defaultColorSet`, `defaultG`, `defaultR`

### Methods
- `private void ensureVertexCapacity()`
- `private void ensureCapacity(int p_85723_)`
- `private static int roundUp(int p_85726_)`
- `public void setQuadSorting(VertexSorting p_277454_)`
- `public BufferBuilder.SortState getSortState()`
- `public void restoreSortState(BufferBuilder.SortState p_166776_)`
- `public void begin(VertexFormat.Mode p_166780_,  VertexFormat p_166781_)`
- `private void switchFormat(VertexFormat p_85705_)`
- `private it.unimi.dsi.fastutil.ints.IntConsumer intConsumer(int p_231159_,  VertexFormat.IndexType p_231160_)`
- `private org.joml.Vector3f[] makeQuadSortingPoints()`
- `private void putSortedQuadIndices(VertexFormat.IndexType p_166787_)`
- `public boolean isCurrentBatchEmpty()`
- `@Nullable public BufferBuilder.RenderedBuffer endOrDiscardIfEmpty()`
- `public BufferBuilder.RenderedBuffer end()`
- `private void ensureDrawing()`
- `private BufferBuilder.RenderedBuffer storeRenderedBuffer()`
- `private void reset()`
- `public void putByte(int p_85686_,  byte p_85687_)`
- `public void putShort(int p_85700_,  short p_85701_)`
- `public void putFloat(int p_85689_,  float p_85690_)`
- `public void endVertex()`
- `public void nextElement()`
- `public VertexConsumer color(int p_85692_,  int p_85693_,  int p_85694_,  int p_85695_)`
- `public void vertex(float p_85671_,  float p_85672_,  float p_85673_,  float p_85674_,  float p_85675_,  float p_85676_,  float p_85677_,  float p_85678_,  float p_85679_,  int p_85680_,  int p_85681_,  float p_85682_,  float p_85683_,  float p_85684_)`
- `void releaseRenderedBuffer()`
- `public void clear()`
- `public void discard()`
- `public VertexFormatElement currentElement()`
- `public boolean building()`
- `ByteBuffer bufferSlice(int p_231170_,  int p_231171_)`
- `public void putBulkData(ByteBuffer buffer)`

### Inherited methods
- from `com.mojang.blaze3d.vertex.DefaultedVertexConsumer`: `defaultColor`, `unsetDefaultColor`
- from `com.mojang.blaze3d.vertex.BufferVertexConsumer`: `normal`, `overlayCoords`, `uv`, `uv2`, `uvShort`, `vertex`
- from `net.minecraftforge.client.extensions.IForgeVertexConsumer`: `applyBakedLighting`, `applyBakedNormals`, `misc`, `putBulkData`
- from `com.mojang.blaze3d.vertex.VertexConsumer`: `color`, `color`, `defaultColor`, `normal`, `overlayCoords`, `putBulkData`, `putBulkData`, `putBulkData`, `unsetDefaultColor`, `uv2`, `vertex`

## BufferBuilder.DrawState

*record* `com.mojang.blaze3d.vertex.BufferBuilder.DrawState`

Enclosing class: BufferBuilder

### Fields
- `private final VertexFormat format`
  The field for the format record component.
- `private final int vertexCount`
  The field for the vertexCount record component.
- `private final int indexCount`
  The field for the indexCount record component.
- `private final VertexFormat.Mode mode`
  The field for the mode record component.
- `private final VertexFormat.IndexType indexType`
  The field for the indexType record component.
- `private final boolean indexOnly`
  The field for the indexOnly record component.
- `private final boolean sequentialIndex`
  The field for the sequentialIndex record component.

### Methods
- `public int vertexBufferSize()`
- `public int vertexBufferStart()`
- `public int vertexBufferEnd()`
- `public int indexBufferStart()`
- `public int indexBufferEnd()`
- `private int indexBufferSize()`
- `public int bufferSize()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public VertexFormat format()`
  Returns the value of the format record component.
  - returns: the value of the format record component
- `public int vertexCount()`
  Returns the value of the vertexCount record component.
  - returns: the value of the vertexCount record component
- `public int indexCount()`
  Returns the value of the indexCount record component.
  - returns: the value of the indexCount record component
- `public VertexFormat.Mode mode()`
  Returns the value of the mode record component.
  - returns: the value of the mode record component
- `public VertexFormat.IndexType indexType()`
  Returns the value of the indexType record component.
  - returns: the value of the indexType record component
- `public boolean indexOnly()`
  Returns the value of the indexOnly record component.
  - returns: the value of the indexOnly record component
- `public boolean sequentialIndex()`
  Returns the value of the sequentialIndex record component.
  - returns: the value of the sequentialIndex record component

## BufferBuilder.RenderedBuffer

*class* `com.mojang.blaze3d.vertex.BufferBuilder.RenderedBuffer`

Enclosing class: BufferBuilder

### Fields
- `private final int pointer`
- `private final BufferBuilder.DrawState drawState`
- `private boolean released`

### Methods
- `public ByteBuffer vertexBuffer()`
- `public ByteBuffer indexBuffer()`
- `public BufferBuilder.DrawState drawState()`
- `public boolean isEmpty()`
- `public void release()`

## BufferBuilder.SortState

*class* `com.mojang.blaze3d.vertex.BufferBuilder.SortState`

Enclosing class: BufferBuilder

### Fields
- `final VertexFormat.Mode mode`
- `final int vertices`
- `@Nullable final org.joml.Vector3f[] sortingPoints`
- `@Nullable final VertexSorting sorting`

## BufferUploader

*class* `com.mojang.blaze3d.vertex.BufferUploader`

### Fields
- `@Nullable private static VertexBuffer lastImmediateBuffer`

### Methods
- `public static void reset()`
- `public static void invalidate()`
- `public static void drawWithShader(BufferBuilder.RenderedBuffer p_231203_)`
- `private static void _drawWithShader(BufferBuilder.RenderedBuffer p_231212_)`
- `public static void draw(BufferBuilder.RenderedBuffer p_231210_)`
- `@Nullable private static VertexBuffer upload(BufferBuilder.RenderedBuffer p_231214_)`
- `private static VertexBuffer bindImmediateBuffer(VertexFormat p_231207_)`
- `private static void bindImmediateBuffer(VertexBuffer p_231205_)`

## BufferVertexConsumer

*interface* `com.mojang.blaze3d.vertex.BufferVertexConsumer`

All Superinterfaces: IForgeVertexConsumer, VertexConsumer

### Methods
- `VertexFormatElement currentElement()`
- `void nextElement()`
- `void putByte(int p_85779_,  byte p_85780_)`
- `void putShort(int p_85791_,  short p_85792_)`
- `void putFloat(int p_85781_,  float p_85782_)`
- `default VertexConsumer vertex(double p_85771_,  double p_85772_,  double p_85773_)`
- `default VertexConsumer color(int p_85787_,  int p_85788_,  int p_85789_,  int p_85790_)`
- `default VertexConsumer uv(float p_85777_,  float p_85778_)`
- `default VertexConsumer overlayCoords(int p_85784_,  int p_85785_)`
- `default VertexConsumer uv2(int p_85802_,  int p_85803_)`
- `default VertexConsumer uvShort(short p_85794_,  short p_85795_,  int p_85796_)`
- `default VertexConsumer normal(float p_85798_,  float p_85799_,  float p_85800_)`
- `static byte normalIntValue(float p_85775_)`

### Inherited methods
- from `net.minecraftforge.client.extensions.IForgeVertexConsumer`: `applyBakedLighting`, `applyBakedNormals`, `misc`, `putBulkData`
- from `com.mojang.blaze3d.vertex.VertexConsumer`: `color`, `color`, `defaultColor`, `endVertex`, `normal`, `overlayCoords`, `putBulkData`, `putBulkData`, `putBulkData`, `unsetDefaultColor`, `uv2`, `vertex`, `vertex`

## Class VertexBuffer.Usage

*enum* `com.mojang.blaze3d.vertex.Class VertexBuffer.Usage`

Enclosing class: VertexBuffer

### Fields
- `final int id`

### Methods
- `public static VertexBuffer.Usage[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static VertexBuffer.Usage valueOf(String name)`
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

## Class VertexFormat.IndexType

*enum* `com.mojang.blaze3d.vertex.Class VertexFormat.IndexType`

Enclosing class: VertexFormat

### Fields
- `public final int asGLType`
- `public final int bytes`

### Methods
- `public static VertexFormat.IndexType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static VertexFormat.IndexType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static VertexFormat.IndexType least(int p_166934_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class VertexFormat.Mode

*enum* `com.mojang.blaze3d.vertex.Class VertexFormat.Mode`

Enclosing class: VertexFormat

### Fields
- `public final int asGLMode`
- `public final int primitiveLength`
- `public final int primitiveStride`
- `public final boolean connectedPrimitives`

### Methods
- `public static VertexFormat.Mode[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static VertexFormat.Mode valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int indexCount(int p_166959_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class VertexFormatElement.Type

*enum* `com.mojang.blaze3d.vertex.Class VertexFormatElement.Type`

Enclosing class: VertexFormatElement

### Fields
- `private final int size`
- `private final String name`
- `private final int glType`

### Methods
- `public static VertexFormatElement.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static VertexFormatElement.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getSize()`
- `public String getName()`
- `public int getGlType()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class VertexFormatElement.Usage

*enum* `com.mojang.blaze3d.vertex.Class VertexFormatElement.Usage`

Enclosing class: VertexFormatElement

### Fields
- `private final String name`
- `private final VertexFormatElement.Usage.SetupState setupState`
- `private final VertexFormatElement.Usage.ClearState clearState`

### Methods
- `public static VertexFormatElement.Usage[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static VertexFormatElement.Usage valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `void setupBufferState(int p_166982_,  int p_166983_,  int p_166984_,  long p_166985_,  int p_166986_,  int p_166987_)`
- `public void clearBufferState(int p_166979_,  int p_166980_)`
- `public String getName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## DefaultedVertexConsumer

*class* `com.mojang.blaze3d.vertex.DefaultedVertexConsumer`

### Fields
- `protected boolean defaultColorSet`
- `protected int defaultR`
- `protected int defaultG`
- `protected int defaultB`
- `protected int defaultA`

### Methods
- `public void defaultColor(int p_85830_,  int p_85831_,  int p_85832_,  int p_85833_)`
- `public void unsetDefaultColor()`

### Inherited methods
- from `net.minecraftforge.client.extensions.IForgeVertexConsumer`: `applyBakedLighting`, `applyBakedNormals`, `misc`, `putBulkData`
- from `com.mojang.blaze3d.vertex.VertexConsumer`: `color`, `color`, `color`, `endVertex`, `normal`, `normal`, `overlayCoords`, `overlayCoords`, `putBulkData`, `putBulkData`, `putBulkData`, `uv`, `uv2`, `uv2`, `vertex`, `vertex`, `vertex`

## DefaultVertexFormat

*class* `com.mojang.blaze3d.vertex.DefaultVertexFormat`

### Fields
- `public static final VertexFormatElement ELEMENT_POSITION`
- `public static final VertexFormatElement ELEMENT_COLOR`
- `public static final VertexFormatElement ELEMENT_UV0`
- `public static final VertexFormatElement ELEMENT_UV1`
- `public static final VertexFormatElement ELEMENT_UV2`
- `public static final VertexFormatElement ELEMENT_NORMAL`
- `public static final VertexFormatElement ELEMENT_PADDING`
- `public static final VertexFormatElement ELEMENT_UV`
- `public static final VertexFormat BLIT_SCREEN`
- `public static final VertexFormat BLOCK`
- `public static final VertexFormat NEW_ENTITY`
- `public static final VertexFormat PARTICLE`
- `public static final VertexFormat POSITION`
- `public static final VertexFormat POSITION_COLOR`
- `public static final VertexFormat POSITION_COLOR_NORMAL`
- `public static final VertexFormat POSITION_COLOR_LIGHTMAP`
- `public static final VertexFormat POSITION_TEX`
- `public static final VertexFormat POSITION_COLOR_TEX`
- `public static final VertexFormat POSITION_TEX_COLOR`
- `public static final VertexFormat POSITION_COLOR_TEX_LIGHTMAP`
- `public static final VertexFormat POSITION_TEX_LIGHTMAP_COLOR`
- `public static final VertexFormat POSITION_TEX_COLOR_NORMAL`

## PoseStack

*class* `com.mojang.blaze3d.vertex.PoseStack`

### Fields
- `private final Deque<PoseStack.Pose> poseStack`

### Methods
- `public void translate(double p_85838_,  double p_85839_,  double p_85840_)`
- `public void translate(float p_254202_,  float p_253782_,  float p_254238_)`
- `public void scale(float p_85842_,  float p_85843_,  float p_85844_)`
- `public void mulPose(org.joml.Quaternionf p_254385_)`
- `public void rotateAround(org.joml.Quaternionf p_272904_,  float p_273581_,  float p_272655_,  float p_273275_)`
- `public void pushPose()`
- `public void popPose()`
- `public PoseStack.Pose last()`
- `public boolean clear()`
- `public void setIdentity()`
- `public void mulPoseMatrix(org.joml.Matrix4f p_254128_)`

### Inherited methods
- from `net.minecraftforge.client.extensions.IForgePoseStack`: `pushTransformation`

## PoseStack.Pose

*class* `com.mojang.blaze3d.vertex.PoseStack.Pose`

Enclosing class: PoseStack

### Fields
- `final org.joml.Matrix4f pose`
- `final org.joml.Matrix3f normal`

### Methods
- `public org.joml.Matrix4f pose()`
- `public org.joml.Matrix3f normal()`

## SheetedDecalTextureGenerator

*class* `com.mojang.blaze3d.vertex.SheetedDecalTextureGenerator`

### Fields
- `private final VertexConsumer delegate`
- `private final org.joml.Matrix4f cameraInversePose`
- `private final org.joml.Matrix3f normalInversePose`
- `private final float textureScale`
- `private float x`
- `private float y`
- `private float z`
- `private int overlayU`
- `private int overlayV`
- `private int lightCoords`
- `private float nx`
- `private float ny`
- `private float nz`

### Inherited fields
- from `com.mojang.blaze3d.vertex.DefaultedVertexConsumer`: `defaultA`, `defaultB`, `defaultColorSet`, `defaultG`, `defaultR`

### Methods
- `private void resetState()`
- `public void endVertex()`
- `public VertexConsumer vertex(double p_85885_,  double p_85886_,  double p_85887_)`
- `public VertexConsumer color(int p_85895_,  int p_85896_,  int p_85897_,  int p_85898_)`
- `public VertexConsumer uv(float p_85889_,  float p_85890_)`
- `public VertexConsumer overlayCoords(int p_85892_,  int p_85893_)`
- `public VertexConsumer uv2(int p_85904_,  int p_85905_)`
- `public VertexConsumer normal(float p_85900_,  float p_85901_,  float p_85902_)`

### Inherited methods
- from `com.mojang.blaze3d.vertex.DefaultedVertexConsumer`: `defaultColor`, `unsetDefaultColor`
- from `net.minecraftforge.client.extensions.IForgeVertexConsumer`: `applyBakedLighting`, `applyBakedNormals`, `misc`, `putBulkData`
- from `com.mojang.blaze3d.vertex.VertexConsumer`: `color`, `color`, `normal`, `overlayCoords`, `putBulkData`, `putBulkData`, `putBulkData`, `uv2`, `vertex`, `vertex`

## Tesselator

*class* `com.mojang.blaze3d.vertex.Tesselator`

### Fields
- `private static final int MAX_MEMORY_USE` (= 8388608)
- `private static final int MAX_FLOATS` (= 2097152)
- `private final BufferBuilder builder`
- `private static final Tesselator INSTANCE`

### Methods
- `public static Tesselator getInstance()`
- `public void end()`
- `public BufferBuilder getBuilder()`

## VertexBuffer

*class* `com.mojang.blaze3d.vertex.VertexBuffer`

### Fields
- `private final VertexBuffer.Usage usage`
- `private int vertexBufferId`
- `private int indexBufferId`
- `private int arrayObjectId`
- `@Nullable private VertexFormat format`
- `@Nullable private RenderSystem.AutoStorageIndexBuffer sequentialIndices`
- `private VertexFormat.IndexType indexType`
- `private int indexCount`
- `private VertexFormat.Mode mode`

### Methods
- `public void upload(BufferBuilder.RenderedBuffer p_231222_)`
- `private VertexFormat uploadVertexBuffer(BufferBuilder.DrawState p_231219_,  ByteBuffer p_231220_)`
- `@Nullable private RenderSystem.AutoStorageIndexBuffer uploadIndexBuffer(BufferBuilder.DrawState p_231224_,  ByteBuffer p_231225_)`
- `public void bind()`
- `public static void unbind()`
- `public void draw()`
- `private VertexFormat.IndexType getIndexType()`
- `public void drawWithShader(org.joml.Matrix4f p_254480_,  org.joml.Matrix4f p_254555_,  ShaderInstance p_253993_)`
- `private void _drawWithShader(org.joml.Matrix4f p_253705_,  org.joml.Matrix4f p_253737_,  ShaderInstance p_166879_)`
- `public void close()`
- `public VertexFormat getFormat()`
- `public boolean isInvalid()`

## VertexConsumer

*interface* `com.mojang.blaze3d.vertex.VertexConsumer`

All Superinterfaces: IForgeVertexConsumer

### Methods
- `VertexConsumer vertex(double p_85945_,  double p_85946_,  double p_85947_)`
- `VertexConsumer color(int p_85973_,  int p_85974_,  int p_85975_,  int p_85976_)`
- `VertexConsumer uv(float p_85948_,  float p_85949_)`
- `VertexConsumer overlayCoords(int p_85971_,  int p_85972_)`
- `VertexConsumer uv2(int p_86010_,  int p_86011_)`
- `VertexConsumer normal(float p_86005_,  float p_86006_,  float p_86007_)`
- `void endVertex()`
- `default void vertex(float p_85955_,  float p_85956_,  float p_85957_,  float p_85958_,  float p_85959_,  float p_85960_,  float p_85961_,  float p_85962_,  float p_85963_,  int p_85964_,  int p_85965_,  float p_85966_,  float p_85967_,  float p_85968_)`
- `void defaultColor(int p_166901_,  int p_166902_,  int p_166903_,  int p_166904_)`
- `void unsetDefaultColor()`
- `default VertexConsumer color(float p_85951_,  float p_85952_,  float p_85953_,  float p_85954_)`
- `default VertexConsumer color(int p_193480_)`
- `default VertexConsumer uv2(int p_85970_)`
- `default VertexConsumer overlayCoords(int p_86009_)`
- `default void putBulkData(PoseStack.Pose p_85988_,  BakedQuad p_85989_,  float p_85990_,  float p_85991_,  float p_85992_,  int p_85993_,  int p_85994_)`
- `default void putBulkData(PoseStack.Pose p_85996_,  BakedQuad p_85997_,  float[] p_85998_,  float p_85999_,  float p_86000_,  float p_86001_,  int[] p_86002_,  int p_86003_,  boolean p_86004_)`
- `default void putBulkData(PoseStack.Pose p_85996_,  BakedQuad p_85997_,  float[] p_85998_,  float p_85999_,  float p_86000_,  float p_86001_,  float alpha,  int[] p_86002_,  int p_86003_,  boolean p_86004_)`
- `default VertexConsumer vertex(org.joml.Matrix4f p_254075_,  float p_254519_,  float p_253869_,  float p_253980_)`
- `default VertexConsumer normal(org.joml.Matrix3f p_253747_,  float p_254430_,  float p_253877_,  float p_254167_)`

### Inherited methods
- from `net.minecraftforge.client.extensions.IForgeVertexConsumer`: `applyBakedLighting`, `applyBakedNormals`, `misc`, `putBulkData`

## VertexFormat

*class* `com.mojang.blaze3d.vertex.VertexFormat`

### Fields
- `private final com.google.common.collect.ImmutableList<VertexFormatElement> elements`
- `private final com.google.common.collect.ImmutableMap<String,VertexFormatElement> elementMapping`
- `private final it.unimi.dsi.fastutil.ints.IntList offsets`
- `private final int vertexSize`
- `@Nullable private VertexBuffer immediateDrawVertexBuffer`

### Methods
- `public String toString()`
- `public int getIntegerSize()`
- `public int getVertexSize()`
- `public com.google.common.collect.ImmutableList<VertexFormatElement> getElements()`
- `public com.google.common.collect.ImmutableList<String> getElementAttributeNames()`
- `public boolean equals(Object p_86026_)`
- `public int hashCode()`
- `public void setupBufferState()`
- `private void _setupBufferState()`
- `public void clearBufferState()`
- `private void _clearBufferState()`
- `public VertexBuffer getImmediateDrawVertexBuffer()`
- `public com.google.common.collect.ImmutableMap<String,VertexFormatElement> getElementMapping()`
- `public int getOffset(int index)`
- `public boolean hasPosition()`
- `public boolean hasNormal()`
- `public boolean hasColor()`
- `public boolean hasUV(int which)`

## VertexFormatElement

*class* `com.mojang.blaze3d.vertex.VertexFormatElement`

### Fields
- `private final VertexFormatElement.Type type`
- `private final VertexFormatElement.Usage usage`
- `private final int index`
- `private final int count`
- `private final int byteSize`

### Methods
- `private boolean supportsUsage(int p_86043_,  VertexFormatElement.Usage p_86044_)`
- `public final VertexFormatElement.Type getType()`
- `public final VertexFormatElement.Usage getUsage()`
- `public final int getCount()`
- `public final int getIndex()`
- `public String toString()`
- `public final int getByteSize()`
- `public final boolean isPosition()`
- `public boolean equals(Object p_86053_)`
- `public int hashCode()`
- `public void setupBufferState(int p_166966_,  long p_166967_,  int p_166968_)`
- `public void clearBufferState(int p_166964_)`
- `public int getElementCount()`

## VertexFormatElement.Usage.ClearState

*interface* `com.mojang.blaze3d.vertex.VertexFormatElement.Usage.ClearState`

Enclosing class: VertexFormatElement.Usage

### Methods
- `void clearBufferState(int p_167050_,  int p_167051_)`

## VertexFormatElement.Usage.SetupState

*interface* `com.mojang.blaze3d.vertex.VertexFormatElement.Usage.SetupState`

Enclosing class: VertexFormatElement.Usage

### Methods
- `void setupBufferState(int p_167053_,  int p_167054_,  int p_167055_,  long p_167056_,  int p_167057_,  int p_167058_)`

## VertexMultiConsumer

*class* `com.mojang.blaze3d.vertex.VertexMultiConsumer`

### Methods
- `public static VertexConsumer create()`
- `public static VertexConsumer create(VertexConsumer p_167062_)`
- `public static VertexConsumer create(VertexConsumer p_86169_,  VertexConsumer p_86170_)`
- `public static VertexConsumer create(VertexConsumer... p_167064_)`

## VertexMultiConsumer.Double

*class* `com.mojang.blaze3d.vertex.VertexMultiConsumer.Double`

Enclosing class: VertexMultiConsumer

### Fields
- `private final VertexConsumer first`
- `private final VertexConsumer second`

### Methods
- `public VertexConsumer vertex(double p_86177_,  double p_86178_,  double p_86179_)`
- `public VertexConsumer color(int p_86202_,  int p_86203_,  int p_86204_,  int p_86205_)`
- `public VertexConsumer uv(float p_86181_,  float p_86182_)`
- `public VertexConsumer overlayCoords(int p_86199_,  int p_86200_)`
- `public VertexConsumer uv2(int p_86211_,  int p_86212_)`
- `public VertexConsumer normal(float p_86207_,  float p_86208_,  float p_86209_)`
- `public void vertex(float p_86184_,  float p_86185_,  float p_86186_,  float p_86187_,  float p_86188_,  float p_86189_,  float p_86190_,  float p_86191_,  float p_86192_,  int p_86193_,  int p_86194_,  float p_86195_,  float p_86196_,  float p_86197_)`
- `public void endVertex()`
- `public void defaultColor(int p_167066_,  int p_167067_,  int p_167068_,  int p_167069_)`
- `public void unsetDefaultColor()`

### Inherited methods
- from `net.minecraftforge.client.extensions.IForgeVertexConsumer`: `applyBakedLighting`, `applyBakedNormals`, `misc`, `putBulkData`
- from `com.mojang.blaze3d.vertex.VertexConsumer`: `color`, `color`, `normal`, `overlayCoords`, `putBulkData`, `putBulkData`, `putBulkData`, `uv2`, `vertex`

## VertexMultiConsumer.Multiple

*class* `com.mojang.blaze3d.vertex.VertexMultiConsumer.Multiple`

Enclosing class: VertexMultiConsumer

### Fields
- `private final VertexConsumer[] delegates`

### Methods
- `private void forEach(Consumer<VertexConsumer> p_167145_)`
- `public VertexConsumer vertex(double p_167075_,  double p_167076_,  double p_167077_)`
- `public VertexConsumer color(int p_167130_,  int p_167131_,  int p_167132_,  int p_167133_)`
- `public VertexConsumer uv(float p_167084_,  float p_167085_)`
- `public VertexConsumer overlayCoords(int p_167127_,  int p_167128_)`
- `public VertexConsumer uv2(int p_167151_,  int p_167152_)`
- `public VertexConsumer normal(float p_167147_,  float p_167148_,  float p_167149_)`
- `public void vertex(float p_167087_,  float p_167088_,  float p_167089_,  float p_167090_,  float p_167091_,  float p_167092_,  float p_167093_,  float p_167094_,  float p_167095_,  int p_167096_,  int p_167097_,  float p_167098_,  float p_167099_,  float p_167100_)`
- `public void endVertex()`
- `public void defaultColor(int p_167154_,  int p_167155_,  int p_167156_,  int p_167157_)`
- `public void unsetDefaultColor()`

### Inherited methods
- from `net.minecraftforge.client.extensions.IForgeVertexConsumer`: `applyBakedLighting`, `applyBakedNormals`, `misc`, `putBulkData`
- from `com.mojang.blaze3d.vertex.VertexConsumer`: `color`, `color`, `normal`, `overlayCoords`, `putBulkData`, `putBulkData`, `putBulkData`, `uv2`, `vertex`

## VertexSorting

*interface* `com.mojang.blaze3d.vertex.VertexSorting`

### Fields
- `static final VertexSorting DISTANCE_TO_ORIGIN`
- `static final VertexSorting ORTHOGRAPHIC_Z`

### Methods
- `static VertexSorting byDistance(float p_277642_,  float p_277654_,  float p_278092_)`
- `static VertexSorting byDistance(org.joml.Vector3f p_277725_)`
- `static VertexSorting byDistance(VertexSorting.DistanceFunction p_277530_)`
- `int[] sort(org.joml.Vector3f[] p_277527_)`

## VertexSorting.DistanceFunction

*interface* `com.mojang.blaze3d.vertex.VertexSorting.DistanceFunction`

Enclosing interface: VertexSorting

### Methods
- `float apply(org.joml.Vector3f p_277761_)`
