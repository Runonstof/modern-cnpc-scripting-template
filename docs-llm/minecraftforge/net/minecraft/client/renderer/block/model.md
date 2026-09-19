# net.minecraft.client.renderer.block.model

- [BakedQuad](#bakedquad)
- [BlockElement](#blockelement)
- [BlockElement.Deserializer](#blockelement.deserializer)
- [BlockElementFace](#blockelementface)
- [BlockElementFace.Deserializer](#blockelementface.deserializer)
- [BlockElementRotation](#blockelementrotation)
- [BlockFaceUV](#blockfaceuv)
- [BlockFaceUV.Deserializer](#blockfaceuv.deserializer)
- [BlockModel](#blockmodel)
- [BlockModel.Deserializer](#blockmodel.deserializer)
- [BlockModel.LoopException](#blockmodel.loopexception)
- [BlockModelDefinition](#blockmodeldefinition)
- [BlockModelDefinition.Context](#blockmodeldefinition.context)
- [BlockModelDefinition.Deserializer](#blockmodeldefinition.deserializer)
- [BlockModelDefinition.MissingVariantException](#blockmodeldefinition.missingvariantexception)
- [Class BlockModel.GuiLight](#class-blockmodel.guilight)
- [Class ItemModelGenerator.SpanFacing](#class-itemmodelgenerator.spanfacing)
- [FaceBakery](#facebakery)
- [ItemModelGenerator](#itemmodelgenerator)
- [ItemModelGenerator.Span](#itemmodelgenerator.span)
- [ItemOverride](#itemoverride)
- [ItemOverride.Deserializer](#itemoverride.deserializer)
- [ItemOverride.Predicate](#itemoverride.predicate)
- [ItemOverrides](#itemoverrides)
- [ItemOverrides.BakedOverride](#itemoverrides.bakedoverride)
- [ItemOverrides.PropertyMatcher](#itemoverrides.propertymatcher)
- [ItemTransform](#itemtransform)
- [ItemTransform.Deserializer](#itemtransform.deserializer)
- [ItemTransforms](#itemtransforms)
- [ItemTransforms.Deserializer](#itemtransforms.deserializer)
- [MultiVariant](#multivariant)
- [MultiVariant.Deserializer](#multivariant.deserializer)
- [Variant](#variant)
- [Variant.Deserializer](#variant.deserializer)
## BakedQuad

*class* `net.minecraft.client.renderer.block.model.BakedQuad`

### Fields
- `protected final int[] vertices`
- `protected final int tintIndex`
- `protected final Direction direction`
- `protected final TextureAtlasSprite sprite`
- `private final boolean shade`
- `private final boolean hasAmbientOcclusion`

### Methods
- `public TextureAtlasSprite getSprite()`
- `public int[] getVertices()`
- `public boolean isTinted()`
- `public int getTintIndex()`
- `public Direction getDirection()`
- `public boolean isShade()`
- `public boolean hasAmbientOcclusion()`

## BlockElement

*class* `net.minecraft.client.renderer.block.model.BlockElement`

### Fields
- `private static final boolean DEFAULT_RESCALE` (= false)
- `private static final float MIN_EXTENT` (= -16.0f)
- `private static final float MAX_EXTENT` (= 32.0f)
- `public final org.joml.Vector3f from`
- `public final org.joml.Vector3f to`
- `public final Map<Direction,BlockElementFace> faces`
- `public final BlockElementRotation rotation`
- `public final boolean shade`
- `private ForgeFaceData faceData`

### Methods
- `private void fillUvs()`
- `public float[] uvsByFace(Direction p_111321_)`
- `public ForgeFaceData getFaceData()`
- `public void setFaceData(ForgeFaceData faceData)`

## BlockElement.Deserializer

*class* `net.minecraft.client.renderer.block.model.BlockElement.Deserializer`

Enclosing class: BlockElement

### Fields
- `private static final boolean DEFAULT_SHADE` (= true)

### Methods
- `public BlockElement deserialize(com.google.gson.JsonElement p_111329_,  Type p_111330_,  com.google.gson.JsonDeserializationContext p_111331_)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException
- `@Nullable private BlockElementRotation getRotation(com.google.gson.JsonObject p_111333_)`
- `private float getAngle(com.google.gson.JsonObject p_111343_)`
- `private Direction.Axis getAxis(com.google.gson.JsonObject p_111345_)`
- `private Map<Direction,BlockElementFace> getFaces(com.google.gson.JsonDeserializationContext p_111326_,  com.google.gson.JsonObject p_111327_)`
- `private Map<Direction,BlockElementFace> filterNullFromFaces(com.google.gson.JsonDeserializationContext p_111340_,  com.google.gson.JsonObject p_111341_)`
- `private Direction getFacing(String p_111338_)`
- `private org.joml.Vector3f getTo(com.google.gson.JsonObject p_111353_)`
- `private org.joml.Vector3f getFrom(com.google.gson.JsonObject p_111347_)`
- `private org.joml.Vector3f getVector3f(com.google.gson.JsonObject p_111335_,  String p_111336_)`

## BlockElementFace

*class* `net.minecraft.client.renderer.block.model.BlockElementFace`

### Fields
- `public static final int NO_TINT` (= -1)
- `public final Direction cullForDirection`
- `public final int tintIndex`
- `public final String texture`
- `public final BlockFaceUV uv`
- `@Nullable private final ForgeFaceData faceData`
- `@Nullable BlockElement parent`

### Methods
- `public ForgeFaceData getFaceData()`

## BlockElementFace.Deserializer

*class* `net.minecraft.client.renderer.block.model.BlockElementFace.Deserializer`

Enclosing class: BlockElementFace

### Fields
- `private static final int DEFAULT_TINT_INDEX` (= -1)

### Methods
- `public BlockElementFace deserialize(com.google.gson.JsonElement p_111365_,  Type p_111366_,  com.google.gson.JsonDeserializationContext p_111367_)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException
- `protected int getTintIndex(com.google.gson.JsonObject p_111369_)`
- `private String getTexture(com.google.gson.JsonObject p_111371_)`
- `@Nullable private Direction getCullFacing(com.google.gson.JsonObject p_111373_)`

## BlockElementRotation

*record* `net.minecraft.client.renderer.block.model.BlockElementRotation`

### Fields
- `private final org.joml.Vector3f origin`
  The field for the origin record component.
- `private final Direction.Axis axis`
  The field for the axis record component.
- `private final float angle`
  The field for the angle record component.
- `private final boolean rescale`
  The field for the rescale record component.

### Methods
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
- `public org.joml.Vector3f origin()`
  Returns the value of the origin record component.
  - returns: the value of the origin record component
- `public Direction.Axis axis()`
  Returns the value of the axis record component.
  - returns: the value of the axis record component
- `public float angle()`
  Returns the value of the angle record component.
  - returns: the value of the angle record component
- `public boolean rescale()`
  Returns the value of the rescale record component.
  - returns: the value of the rescale record component

## BlockFaceUV

*class* `net.minecraft.client.renderer.block.model.BlockFaceUV`

### Fields
- `public float[] uvs`
- `public final int rotation`

### Methods
- `public float getU(int p_111393_)`
- `public float getV(int p_111397_)`
- `private int getShiftedIndex(int p_111401_)`
- `public int getReverseIndex(int p_111399_)`
- `public void setMissingUv(float[] p_111395_)`

## BlockFaceUV.Deserializer

*class* `net.minecraft.client.renderer.block.model.BlockFaceUV.Deserializer`

Enclosing class: BlockFaceUV

### Fields
- `private static final int DEFAULT_ROTATION` (= 0)

### Methods
- `public BlockFaceUV deserialize(com.google.gson.JsonElement p_111404_,  Type p_111405_,  com.google.gson.JsonDeserializationContext p_111406_)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException
- `protected int getRotation(com.google.gson.JsonObject p_111408_)`
- `@Nullable private float[] getUVs(com.google.gson.JsonObject p_111410_)`

## BlockModel

*class* `net.minecraft.client.renderer.block.model.BlockModel`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final FaceBakery FACE_BAKERY`
- `static final com.google.gson.Gson GSON`
- `private static final char REFERENCE_CHAR` (= '#')
- `public static final String PARTICLE_TEXTURE_REFERENCE` (= "particle")
- `private static final boolean DEFAULT_AMBIENT_OCCLUSION` (= true)
- `private final List<BlockElement> elements`
- `@Nullable private final BlockModel.GuiLight guiLight`
- `@Nullable public final Boolean hasAmbientOcclusion`
- `private final ItemTransforms transforms`
- `private final List<ItemOverride> overrides`
- `public String name`
- `public final Map<String,com.mojang.datafixers.util.Either<Material,String>> textureMap`
- `@Nullable public BlockModel parent`
- `@Nullable protected ResourceLocation parentLocation`
- `public final BlockGeometryBakingContext customData`

### Methods
- `public static BlockModel fromStream(Reader p_111462_)`
- `public static BlockModel fromString(String p_111464_)`
- `@Deprecated public List<BlockElement> getElements()` (deprecated)
- `@Nullable public ResourceLocation getParentLocation()`
- `public boolean hasAmbientOcclusion()`
- `public BlockModel.GuiLight getGuiLight()`
- `public boolean isResolved()`
- `public List<ItemOverride> getOverrides()`
- `private ItemOverrides getItemOverrides(ModelBaker p_250138_,  BlockModel p_251800_)`
- `public ItemOverrides getOverrides(ModelBaker p_250138_,  BlockModel p_251800_,  Function<Material,TextureAtlasSprite> spriteGetter)`
- `public Collection<ResourceLocation> getDependencies()`
- `public void resolveParents(Function<ResourceLocation,UnbakedModel> p_249059_)`
- `@Deprecated public BakedModel bake(ModelBaker p_252120_,  Function<Material,TextureAtlasSprite> p_250023_,  ModelState p_251130_,  ResourceLocation p_252208_)` (deprecated)
- `public BakedModel bake(ModelBaker p_249720_,  BlockModel p_111451_,  Function<Material,TextureAtlasSprite> p_111452_,  ModelState p_111453_,  ResourceLocation p_111454_,  boolean p_111455_)`
- `private BakedModel bakeVanilla(ModelBaker p_249720_,  BlockModel p_111451_,  Function<Material,TextureAtlasSprite> p_111452_,  ModelState p_111453_,  ResourceLocation p_111454_,  boolean p_111455_,  RenderTypeGroup renderTypes)`
- `public static BakedQuad bakeFace(BlockElement p_111438_,  BlockElementFace p_111439_,  TextureAtlasSprite p_111440_,  Direction p_111441_,  ModelState p_111442_,  ResourceLocation p_111443_)`
- `public boolean hasTexture(String p_111478_)`
- `public Material getMaterial(String p_111481_)`
- `private com.mojang.datafixers.util.Either<Material,String> findTextureEntry(String p_111486_)`
- `static boolean isTextureReference(String p_111489_)`
- `public BlockModel getRootModel()`
- `public ItemTransforms getTransforms()`
- `private ItemTransform getTransform(ItemDisplayContext p_270662_)`
- `public String toString()`

## BlockModel.Deserializer

*class* `net.minecraft.client.renderer.block.model.BlockModel.Deserializer`

Enclosing class: BlockModel

### Methods
- `public BlockModel deserialize(com.google.gson.JsonElement p_111498_,  Type p_111499_,  com.google.gson.JsonDeserializationContext p_111500_)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException
- `protected List<ItemOverride> getOverrides(com.google.gson.JsonDeserializationContext p_111495_,  com.google.gson.JsonObject p_111496_)`
- `private Map<String,com.mojang.datafixers.util.Either<Material,String>> getTextureMap(com.google.gson.JsonObject p_111510_)`
- `private static com.mojang.datafixers.util.Either<Material,String> parseTextureLocationOrReference(ResourceLocation p_111504_,  String p_111505_)`
- `private String getParentName(com.google.gson.JsonObject p_111512_)`
- `@Nullable protected Boolean getAmbientOcclusion(com.google.gson.JsonObject p_273052_)`
- `protected List<BlockElement> getElements(com.google.gson.JsonDeserializationContext p_111507_,  com.google.gson.JsonObject p_111508_)`

## BlockModel.LoopException

*class* `net.minecraft.client.renderer.block.model.BlockModel.LoopException`

Enclosing class: BlockModel

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## BlockModelDefinition

*class* `net.minecraft.client.renderer.block.model.BlockModelDefinition`

### Fields
- `private final Map<String,MultiVariant> variants`
- `private MultiPart multiPart`

### Methods
- `public static BlockModelDefinition fromStream(BlockModelDefinition.Context p_111541_,  Reader p_111542_)`
- `public static BlockModelDefinition fromJsonElement(BlockModelDefinition.Context p_249700_,  com.google.gson.JsonElement p_250730_)`
- `public boolean hasVariant(String p_173426_)`
- `public MultiVariant getVariant(String p_173429_)`
- `public boolean equals(Object p_111546_)`
- `public int hashCode()`
- `public Map<String,MultiVariant> getVariants()`
- `public Set<MultiVariant> getMultiVariants()`
- `public boolean isMultiPart()`
- `public MultiPart getMultiPart()`

## BlockModelDefinition.Context

*class* `net.minecraft.client.renderer.block.model.BlockModelDefinition.Context`

Enclosing class: BlockModelDefinition

### Fields
- `protected final com.google.gson.Gson gson`
- `private StateDefinition<Block,BlockState> definition`

### Methods
- `public StateDefinition<Block,BlockState> getDefinition()`
- `public void setDefinition(StateDefinition<Block,BlockState> p_111553_)`

## BlockModelDefinition.Deserializer

*class* `net.minecraft.client.renderer.block.model.BlockModelDefinition.Deserializer`

Enclosing class: BlockModelDefinition

### Methods
- `public BlockModelDefinition deserialize(com.google.gson.JsonElement p_111559_,  Type p_111560_,  com.google.gson.JsonDeserializationContext p_111561_)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException
- `protected Map<String,MultiVariant> getVariants(com.google.gson.JsonDeserializationContext p_111556_,  com.google.gson.JsonObject p_111557_)`
- `@Nullable protected MultiPart getMultiPart(com.google.gson.JsonDeserializationContext p_111563_,  com.google.gson.JsonObject p_111564_)`

## BlockModelDefinition.MissingVariantException

*class* `net.minecraft.client.renderer.block.model.BlockModelDefinition.MissingVariantException`

Enclosing class: BlockModelDefinition

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## Class BlockModel.GuiLight

*enum* `net.minecraft.client.renderer.block.model.Class BlockModel.GuiLight`

Enclosing class: BlockModel

### Fields
- `private final String name`

### Methods
- `public static BlockModel.GuiLight[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static BlockModel.GuiLight valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static BlockModel.GuiLight getByName(String p_111528_)`
- `public boolean lightLikeBlock()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ItemModelGenerator.SpanFacing

*enum* `net.minecraft.client.renderer.block.model.Class ItemModelGenerator.SpanFacing`

Enclosing class: ItemModelGenerator

### Fields
- `private final Direction direction`
- `private final int xOffset`
- `private final int yOffset`

### Methods
- `public static ItemModelGenerator.SpanFacing[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ItemModelGenerator.SpanFacing valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public Direction getDirection()`
- `public int getXOffset()`
- `public int getYOffset()`
- `boolean isHorizontal()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## FaceBakery

*class* `net.minecraft.client.renderer.block.model.FaceBakery`

### Fields
- `public static final int VERTEX_INT_SIZE` (= 8)
- `private static final float RESCALE_22_5`
- `private static final float RESCALE_45`
- `public static final int VERTEX_COUNT` (= 4)
- `private static final int COLOR_INDEX` (= 3)
- `public static final int UV_INDEX` (= 4)

### Methods
- `public BakedQuad bakeQuad(org.joml.Vector3f p_253895_,  org.joml.Vector3f p_253976_,  BlockElementFace p_111603_,  TextureAtlasSprite p_111604_,  Direction p_111605_,  ModelState p_111606_,  @Nullable  BlockElementRotation p_111607_,  boolean p_111608_,  ResourceLocation p_111609_)`
- `public static BlockFaceUV recomputeUVs(BlockFaceUV p_111582_,  Direction p_111583_,  Transformation p_111584_,  ResourceLocation p_111585_)`
- `private int[] makeVertices(BlockFaceUV p_111574_,  TextureAtlasSprite p_111575_,  Direction p_111576_,  float[] p_111577_,  Transformation p_111578_,  @Nullable  BlockElementRotation p_111579_,  boolean p_111580_)`
- `private float[] setupShape(org.joml.Vector3f p_254153_,  org.joml.Vector3f p_253934_)`
- `private void bakeVertex(int[] p_111621_,  int p_111622_,  Direction p_111623_,  BlockFaceUV p_111624_,  float[] p_111625_,  TextureAtlasSprite p_111626_,  Transformation p_111627_,  @Nullable  BlockElementRotation p_111628_,  boolean p_111629_)`
- `private void fillVertex(int[] p_111615_,  int p_111616_,  org.joml.Vector3f p_254291_,  TextureAtlasSprite p_111618_,  BlockFaceUV p_111619_)`
- `private void applyElementRotation(org.joml.Vector3f p_254412_,  @Nullable  BlockElementRotation p_254150_)`
- `public void applyModelRotation(org.joml.Vector3f p_254561_,  Transformation p_253793_)`
- `private void rotateVertexBy(org.joml.Vector3f p_253804_,  org.joml.Vector3f p_253835_,  org.joml.Matrix4f p_253730_,  org.joml.Vector3f p_254056_)`
- `public static Direction calculateFacing(int[] p_111613_)`
- `private void recalculateWinding(int[] p_111631_,  Direction p_111632_)`

## ItemModelGenerator

*class* `net.minecraft.client.renderer.block.model.ItemModelGenerator`

### Fields
- `public static final List<String> LAYERS`
- `private static final float MIN_Z` (= 7.5f)
- `private static final float MAX_Z` (= 8.5f)

### Methods
- `public BlockModel generateBlockModel(Function<Material,TextureAtlasSprite> p_111671_,  BlockModel p_111672_)`
- `public List<BlockElement> processFrames(int p_111639_,  String p_111640_,  SpriteContents p_251768_)`
- `private List<BlockElement> createSideElements(SpriteContents p_248810_,  String p_111663_,  int p_111664_)`
- `private List<ItemModelGenerator.Span> getSpans(SpriteContents p_250338_)`
- `private void checkTransition(ItemModelGenerator.SpanFacing p_251572_,  List<ItemModelGenerator.Span> p_248882_,  SpriteContents p_249847_,  int p_250616_,  int p_251416_,  int p_249664_,  int p_250174_,  int p_250897_,  boolean p_248773_)`
- `private void createOrExpandSpan(List<ItemModelGenerator.Span> p_111666_,  ItemModelGenerator.SpanFacing p_111667_,  int p_111668_,  int p_111669_)`
- `private boolean isTransparent(SpriteContents p_249650_,  int p_250692_,  int p_251914_,  int p_252343_,  int p_250258_,  int p_248997_)`

## ItemModelGenerator.Span

*class* `net.minecraft.client.renderer.block.model.ItemModelGenerator.Span`

Enclosing class: ItemModelGenerator

### Fields
- `private final ItemModelGenerator.SpanFacing facing`
- `private int min`
- `private int max`
- `private final int anchor`

### Methods
- `public void expand(int p_111685_)`
- `public ItemModelGenerator.SpanFacing getFacing()`
- `public int getMin()`
- `public int getMax()`
- `public int getAnchor()`

## ItemOverride

*class* `net.minecraft.client.renderer.block.model.ItemOverride`

### Fields
- `private final ResourceLocation model`
- `private final List<ItemOverride.Predicate> predicates`

### Methods
- `public ResourceLocation getModel()`
- `public Stream<ItemOverride.Predicate> getPredicates()`

## ItemOverride.Deserializer

*class* `net.minecraft.client.renderer.block.model.ItemOverride.Deserializer`

Enclosing class: ItemOverride

### Methods
- `public ItemOverride deserialize(com.google.gson.JsonElement p_111725_,  Type p_111726_,  com.google.gson.JsonDeserializationContext p_111727_)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException
- `protected List<ItemOverride.Predicate> getPredicates(com.google.gson.JsonObject p_173451_)`

## ItemOverride.Predicate

*class* `net.minecraft.client.renderer.block.model.ItemOverride.Predicate`

Enclosing class: ItemOverride

### Fields
- `private final ResourceLocation property`
- `private final float value`

### Methods
- `public ResourceLocation getProperty()`
- `public float getValue()`

## ItemOverrides

*class* `net.minecraft.client.renderer.block.model.ItemOverrides`

### Fields
- `public static final ItemOverrides EMPTY`
- `public static final float NO_OVERRIDE` (= -1f/0f)
- `private final ItemOverrides.BakedOverride[] overrides`
- `private final ResourceLocation[] properties`

### Methods
- `@Nullable private BakedModel bakeModel(ModelBaker p_249483_,  UnbakedModel p_251965_,  ItemOverride p_250816_,  Function<Material,TextureAtlasSprite> spriteGetter)`
- `@Nullable public BakedModel resolve(BakedModel p_173465_,  ItemStack p_173466_,  @Nullable  ClientLevel p_173467_,  @Nullable  LivingEntity p_173468_,  int p_173469_)`
- `public com.google.common.collect.ImmutableList<ItemOverrides.BakedOverride> getOverrides()`

## ItemOverrides.BakedOverride

*class* `net.minecraft.client.renderer.block.model.ItemOverrides.BakedOverride`

Enclosing class: ItemOverrides

### Fields
- `private final ItemOverrides.PropertyMatcher[] matchers`
- `@Nullable final BakedModel model`

### Methods
- `boolean test(float[] p_173486_)`

## ItemOverrides.PropertyMatcher

*class* `net.minecraft.client.renderer.block.model.ItemOverrides.PropertyMatcher`

Enclosing class: ItemOverrides

### Fields
- `public final int index`
- `public final float value`

## ItemTransform

*class* `net.minecraft.client.renderer.block.model.ItemTransform`

### Fields
- `public static final ItemTransform NO_TRANSFORM`
- `public final org.joml.Vector3f rotation`
- `public final org.joml.Vector3f translation`
- `public final org.joml.Vector3f scale`
- `public final org.joml.Vector3f rightRotation`

### Methods
- `public void apply(boolean p_111764_,  PoseStack p_111765_)`
- `public boolean equals(Object p_111767_)`
- `public int hashCode()`

## ItemTransform.Deserializer

*class* `net.minecraft.client.renderer.block.model.ItemTransform.Deserializer`

Enclosing class: ItemTransform

### Fields
- `public static final org.joml.Vector3f DEFAULT_ROTATION`
- `public static final org.joml.Vector3f DEFAULT_TRANSLATION`
- `public static final org.joml.Vector3f DEFAULT_SCALE`
- `public static final float MAX_TRANSLATION` (= 5.0f)
- `public static final float MAX_SCALE` (= 4.0f)

### Methods
- `public ItemTransform deserialize(com.google.gson.JsonElement p_111775_,  Type p_111776_,  com.google.gson.JsonDeserializationContext p_111777_)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException
- `private org.joml.Vector3f getVector3f(com.google.gson.JsonObject p_111779_,  String p_111780_,  org.joml.Vector3f p_253777_)`

## ItemTransforms

*class* `net.minecraft.client.renderer.block.model.ItemTransforms`

### Fields
- `public static final ItemTransforms NO_TRANSFORMS`
- `public final ItemTransform thirdPersonLeftHand`
- `public final ItemTransform thirdPersonRightHand`
- `public final ItemTransform firstPersonLeftHand`
- `public final ItemTransform firstPersonRightHand`
- `public final ItemTransform head`
- `public final ItemTransform gui`
- `public final ItemTransform ground`
- `public final ItemTransform fixed`
- `public final com.google.common.collect.ImmutableMap<ItemDisplayContext,ItemTransform> moddedTransforms`

### Methods
- `public ItemTransform getTransform(ItemDisplayContext p_270619_)`
- `public boolean hasTransform(ItemDisplayContext p_270365_)`

## ItemTransforms.Deserializer

*class* `net.minecraft.client.renderer.block.model.ItemTransforms.Deserializer`

Enclosing class: ItemTransforms

### Methods
- `public ItemTransforms deserialize(com.google.gson.JsonElement p_111820_,  Type p_111821_,  com.google.gson.JsonDeserializationContext p_111822_)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException
- `private ItemTransform getTransform(com.google.gson.JsonDeserializationContext p_270385_,  com.google.gson.JsonObject p_270436_,  ItemDisplayContext p_270100_)`

## MultiVariant

*class* `net.minecraft.client.renderer.block.model.MultiVariant`

### Fields
- `private final List<Variant> variants`

### Methods
- `public List<Variant> getVariants()`
- `public boolean equals(Object p_111862_)`
- `public int hashCode()`
- `public Collection<ResourceLocation> getDependencies()`
- `public void resolveParents(Function<ResourceLocation,UnbakedModel> p_249314_)`
- `@Nullable public BakedModel bake(ModelBaker p_249016_,  Function<Material,TextureAtlasSprite> p_111851_,  ModelState p_111852_,  ResourceLocation p_111853_)`

## MultiVariant.Deserializer

*class* `net.minecraft.client.renderer.block.model.MultiVariant.Deserializer`

Enclosing class: MultiVariant

### Methods
- `public MultiVariant deserialize(com.google.gson.JsonElement p_111867_,  Type p_111868_,  com.google.gson.JsonDeserializationContext p_111869_)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException

## Variant

*class* `net.minecraft.client.renderer.block.model.Variant`

### Fields
- `private final ResourceLocation modelLocation`
- `private final Transformation rotation`
- `private final boolean uvLock`
- `private final int weight`

### Methods
- `public ResourceLocation getModelLocation()`
- `public Transformation getRotation()`
- `public boolean isUvLocked()`
- `public int getWeight()`
- `public String toString()`
- `public boolean equals(Object p_111888_)`
- `public int hashCode()`

## Variant.Deserializer

*class* `net.minecraft.client.renderer.block.model.Variant.Deserializer`

Enclosing class: Variant

### Fields
- `static final boolean DEFAULT_UVLOCK` (= false)
- `static final int DEFAULT_WEIGHT` (= 1)
- `static final int DEFAULT_X_ROTATION` (= 0)
- `static final int DEFAULT_Y_ROTATION` (= 0)

### Methods
- `public Variant deserialize(com.google.gson.JsonElement p_111893_,  Type p_111894_,  com.google.gson.JsonDeserializationContext p_111895_)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException
- `private boolean getUvLock(com.google.gson.JsonObject p_111903_)`
- `protected BlockModelRotation getBlockRotation(com.google.gson.JsonObject p_111897_)`
- `protected ResourceLocation getModel(com.google.gson.JsonObject p_111899_)`
- `protected int getWeight(com.google.gson.JsonObject p_111901_)`
