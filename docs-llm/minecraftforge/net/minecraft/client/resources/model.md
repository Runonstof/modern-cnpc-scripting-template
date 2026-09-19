# net.minecraft.client.resources.model

- [AtlasSet](#atlasset)
- [AtlasSet.AtlasEntry](#atlasset.atlasentry)
- [AtlasSet.StitchResult](#atlasset.stitchresult)
- [BakedModel](#bakedmodel)
- [BuiltInModel](#builtinmodel)
- [Class BlockModelRotation](#class-blockmodelrotation)
- [Material](#material)
- [ModelBaker](#modelbaker)
- [ModelBakery](#modelbakery)
- [ModelBakery.BakedCacheKey](#modelbakery.bakedcachekey)
- [ModelBakery.BlockStateDefinitionException](#modelbakery.blockstatedefinitionexception)
- [ModelBakery.LoadedJson](#modelbakery.loadedjson)
- [ModelBakery.ModelBakerImpl](#modelbakery.modelbakerimpl)
- [ModelBakery.ModelGroupKey](#modelbakery.modelgroupkey)
- [ModelManager](#modelmanager)
- [ModelManager.ReloadState](#modelmanager.reloadstate)
- [ModelResourceLocation](#modelresourcelocation)
- [ModelState](#modelstate)
- [MultiPartBakedModel](#multipartbakedmodel)
- [MultiPartBakedModel.Builder](#multipartbakedmodel.builder)
- [SimpleBakedModel](#simplebakedmodel)
- [SimpleBakedModel.Builder](#simplebakedmodel.builder)
- [UnbakedModel](#unbakedmodel)
- [WeightedBakedModel](#weightedbakedmodel)
- [WeightedBakedModel.Builder](#weightedbakedmodel.builder)
## AtlasSet

*class* `net.minecraft.client.resources.model.AtlasSet`

### Fields
- `private final Map<ResourceLocation,AtlasSet.AtlasEntry> atlases`

### Methods
- `public TextureAtlas getAtlas(ResourceLocation p_250828_)`
- `public void close()`
- `public Map<ResourceLocation,CompletableFuture<AtlasSet.StitchResult>> scheduleLoad(ResourceManager p_249256_,  int p_251059_,  Executor p_250751_)`

## AtlasSet.AtlasEntry

*record* `net.minecraft.client.resources.model.AtlasSet.AtlasEntry`

Enclosing class: AtlasSet

### Fields
- `private final TextureAtlas atlas`
  The field for the atlas record component.
- `private final ResourceLocation atlasInfoLocation`
  The field for the atlasInfoLocation record component.

### Methods
- `public void close()`
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
- `public TextureAtlas atlas()`
  Returns the value of the atlas record component.
  - returns: the value of the atlas record component
- `public ResourceLocation atlasInfoLocation()`
  Returns the value of the atlasInfoLocation record component.
  - returns: the value of the atlasInfoLocation record component

## AtlasSet.StitchResult

*class* `net.minecraft.client.resources.model.AtlasSet.StitchResult`

Enclosing class: AtlasSet

### Fields
- `private final TextureAtlas atlas`
- `private final SpriteLoader.Preparations preparations`

### Methods
- `@Nullable public TextureAtlasSprite getSprite(ResourceLocation p_249039_)`
- `public TextureAtlasSprite missing()`
- `public CompletableFuture<Void> readyForUpload()`
- `public void upload()`

## BakedModel

*interface* `net.minecraft.client.resources.model.BakedModel`

All Superinterfaces: IForgeBakedModel

### Methods
- `@Deprecated List<BakedQuad> getQuads(@Nullable  BlockState p_235039_,  @Nullable  Direction p_235040_,  RandomSource p_235041_)` (deprecated)
- `boolean useAmbientOcclusion()`
- `boolean isGui3d()`
- `boolean usesBlockLight()`
- `boolean isCustomRenderer()`
- `@Deprecated TextureAtlasSprite getParticleIcon()` (deprecated)
- `@Deprecated default ItemTransforms getTransforms()` (deprecated)
- `ItemOverrides getOverrides()`

### Inherited methods
- from `net.minecraftforge.client.extensions.IForgeBakedModel`: `applyTransform`, `getModelData`, `getParticleIcon`, `getQuads`, `getRenderPasses`, `getRenderTypes`, `getRenderTypes`, `useAmbientOcclusion`, `useAmbientOcclusion`

## BuiltInModel

*class* `net.minecraft.client.resources.model.BuiltInModel`

### Fields
- `private final ItemTransforms itemTransforms`
- `private final ItemOverrides overrides`
- `private final TextureAtlasSprite particleTexture`
- `private final boolean usesBlockLight`

### Methods
- `public List<BakedQuad> getQuads(@Nullable  BlockState p_235043_,  @Nullable  Direction p_235044_,  RandomSource p_235045_)`
- `public boolean useAmbientOcclusion()`
- `public boolean isGui3d()`
- `public boolean usesBlockLight()`
- `public boolean isCustomRenderer()`
- `public TextureAtlasSprite getParticleIcon()`
- `public ItemTransforms getTransforms()`
- `public ItemOverrides getOverrides()`

### Inherited methods
- from `net.minecraftforge.client.extensions.IForgeBakedModel`: `applyTransform`, `getModelData`, `getParticleIcon`, `getQuads`, `getRenderPasses`, `getRenderTypes`, `getRenderTypes`, `useAmbientOcclusion`, `useAmbientOcclusion`

## Class BlockModelRotation

*enum* `net.minecraft.client.resources.model.Class BlockModelRotation`

### Fields
- `private static final int DEGREES`
- `private static final Map<Integer,BlockModelRotation> BY_INDEX`
- `private final Transformation transformation`
- `private final OctahedralGroup actualRotation`
- `private final int index`

### Methods
- `public static BlockModelRotation[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static BlockModelRotation valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `private static int getIndex(int p_119160_,  int p_119161_)`
- `public Transformation getRotation()`
- `public static BlockModelRotation by(int p_119154_,  int p_119155_)`
- `public OctahedralGroup actualRotation()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraft.client.resources.model.ModelState`: `isUvLocked`

## Material

*class* `net.minecraft.client.resources.model.Material`

### Fields
- `public static final Comparator<Material> COMPARATOR`
- `private final ResourceLocation atlasLocation`
- `private final ResourceLocation texture`
- `@Nullable private RenderType renderType`

### Methods
- `public ResourceLocation atlasLocation()`
- `public ResourceLocation texture()`
- `public TextureAtlasSprite sprite()`
- `public RenderType renderType(Function<ResourceLocation,RenderType> p_119202_)`
- `public VertexConsumer buffer(MultiBufferSource p_119195_,  Function<ResourceLocation,RenderType> p_119196_)`
- `public VertexConsumer buffer(MultiBufferSource p_119198_,  Function<ResourceLocation,RenderType> p_119199_,  boolean p_119200_)`
- `public boolean equals(Object p_119206_)`
- `public int hashCode()`
- `public String toString()`

## ModelBaker

*interface* `net.minecraft.client.resources.model.ModelBaker`

All Superinterfaces: IForgeModelBaker

### Methods
- `UnbakedModel getModel(ResourceLocation p_252194_)`
- `@Deprecated @Nullable BakedModel bake(ResourceLocation p_250776_,  ModelState p_251280_)` (deprecated)

### Inherited methods
- from `net.minecraftforge.client.extensions.IForgeModelBaker`: `bake`, `getModelTextureGetter`

## ModelBakery

*class* `net.minecraft.client.resources.model.ModelBakery`

### Fields
- `public static final Material FIRE_0`
- `public static final Material FIRE_1`
- `public static final Material LAVA_FLOW`
- `public static final Material WATER_FLOW`
- `public static final Material WATER_OVERLAY`
- `public static final Material BANNER_BASE`
- `public static final Material SHIELD_BASE`
- `public static final Material NO_PATTERN_SHIELD`
- `public static final int DESTROY_STAGE_COUNT` (= 10)
- `public static final List<ResourceLocation> DESTROY_STAGES`
- `public static final List<ResourceLocation> BREAKING_LOCATIONS`
- `public static final List<RenderType> DESTROY_TYPES`
- `static final int SINGLETON_MODEL_GROUP` (= -1)
- `private static final int INVISIBLE_MODEL_GROUP` (= 0)
- `private static final org.slf4j.Logger LOGGER`
- `private static final String BUILTIN_SLASH` (= "builtin/")
- `private static final String BUILTIN_SLASH_GENERATED` (= "builtin/generated")
- `private static final String BUILTIN_BLOCK_ENTITY` (= "builtin/entity")
- `private static final String MISSING_MODEL_NAME` (= "missing")
- `public static final ModelResourceLocation MISSING_MODEL_LOCATION`
- `public static final FileToIdConverter BLOCKSTATE_LISTER`
- `public static final FileToIdConverter MODEL_LISTER`
- `public static final String MISSING_MODEL_MESH`
- `private static final Map<String,String> BUILTIN_MODELS`
- `private static final com.google.common.base.Splitter COMMA_SPLITTER`
- `private static final com.google.common.base.Splitter EQUAL_SPLITTER`
- `public static final BlockModel GENERATION_MARKER`
- `public static final BlockModel BLOCK_ENTITY_MARKER`
- `private static final StateDefinition<Block,BlockState> ITEM_FRAME_FAKE_DEFINITION`
- `static final ItemModelGenerator ITEM_MODEL_GENERATOR`
- `private static final Map<ResourceLocation,StateDefinition<Block,BlockState>> STATIC_DEFINITIONS`
- `private final BlockColors blockColors`
- `private final Map<ResourceLocation,BlockModel> modelResources`
- `private final Map<ResourceLocation,List<ModelBakery.LoadedJson>> blockStateResources`
- `private final Set<ResourceLocation> loadingStack`
- `private final BlockModelDefinition.Context context`
- `private final Map<ResourceLocation,UnbakedModel> unbakedCache`
- `final Map<ModelBakery.BakedCacheKey,BakedModel> bakedCache`
- `private final Map<ResourceLocation,UnbakedModel> topLevelModels`
- `private final Map<ResourceLocation,BakedModel> bakedTopLevelModels`
- `private int nextModelGroup`
- `private final it.unimi.dsi.fastutil.objects.Object2IntMap<BlockState> modelGroups`

### Methods
- `public void bakeModels(BiFunction<ResourceLocation,Material,TextureAtlasSprite> p_248669_)`
- `private static Predicate<BlockState> predicate(StateDefinition<Block,BlockState> p_119274_,  String p_119275_)`
- `@Nullable static <T extends Comparable<T>> T getValueHelper(Property<T> p_119277_,  String p_119278_)`
- `public UnbakedModel getModel(ResourceLocation p_119342_)`
- `private void loadModel(ResourceLocation p_119363_)  throws Exception`
  - throws: Exception
- `private void cacheAndQueueDependencies(ResourceLocation p_119353_,  UnbakedModel p_119354_)`
- `private void loadTopLevel(ModelResourceLocation p_119307_)`
- `private void registerModelGroup(Iterable<BlockState> p_119311_)`
- `protected BlockModel loadBlockModel(ResourceLocation p_119365_)  throws IOException`
  - throws: IOException
- `public Map<ResourceLocation,BakedModel> getBakedTopLevelModels()`
- `public it.unimi.dsi.fastutil.objects.Object2IntMap<BlockState> getModelGroups()`

## ModelBakery.BakedCacheKey

*record* `net.minecraft.client.resources.model.ModelBakery.BakedCacheKey`

Enclosing class: ModelBakery

### Fields
- `private final ResourceLocation id`
  The field for the id record component.
- `private final Transformation transformation`
  The field for the transformation record component.
- `private final boolean isUvLocked`
  The field for the isUvLocked record component.

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
- `public ResourceLocation id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public Transformation transformation()`
  Returns the value of the transformation record component.
  - returns: the value of the transformation record component
- `public boolean isUvLocked()`
  Returns the value of the isUvLocked record component.
  - returns: the value of the isUvLocked record component

## ModelBakery.BlockStateDefinitionException

*class* `net.minecraft.client.resources.model.ModelBakery.BlockStateDefinitionException`

Enclosing class: ModelBakery

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ModelBakery.LoadedJson

*record* `net.minecraft.client.resources.model.ModelBakery.LoadedJson`

Enclosing class: ModelBakery

### Fields
- `private final String source`
  The field for the source record component.
- `private final com.google.gson.JsonElement data`
  The field for the data record component.

### Methods
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
- `public String source()`
  Returns the value of the source record component.
  - returns: the value of the source record component
- `public com.google.gson.JsonElement data()`
  Returns the value of the data record component.
  - returns: the value of the data record component

## ModelBakery.ModelBakerImpl

*class* `net.minecraft.client.resources.model.ModelBakery.ModelBakerImpl`

Enclosing class: ModelBakery

### Fields
- `private final Function<Material,TextureAtlasSprite> modelTextureGetter`

### Methods
- `public UnbakedModel getModel(ResourceLocation p_248568_)`
- `public Function<Material,TextureAtlasSprite> getModelTextureGetter()`
- `public BakedModel bake(ResourceLocation p_252176_,  ModelState p_249765_)`
- `public BakedModel bake(ResourceLocation p_252176_,  ModelState p_249765_,  Function<Material,TextureAtlasSprite> sprites)`

## ModelBakery.ModelGroupKey

*class* `net.minecraft.client.resources.model.ModelBakery.ModelGroupKey`

Enclosing class: ModelBakery

### Fields
- `private final List<UnbakedModel> models`
- `private final List<Object> coloringValues`

### Methods
- `public boolean equals(Object p_119395_)`
- `public int hashCode()`
- `public static ModelBakery.ModelGroupKey create(BlockState p_119380_,  MultiPart p_119381_,  Collection<Property<?>> p_119382_)`
- `public static ModelBakery.ModelGroupKey create(BlockState p_119384_,  UnbakedModel p_119385_,  Collection<Property<?>> p_119386_)`
- `private static List<Object> getColoringValues(BlockState p_119388_,  Collection<Property<?>> p_119389_)`

## ModelManager

*class* `net.minecraft.client.resources.model.ModelManager`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Map<ResourceLocation,ResourceLocation> VANILLA_ATLASES`
- `private Map<ResourceLocation,BakedModel> bakedRegistry`
- `private final AtlasSet atlases`
- `private final BlockModelShaper blockModelShaper`
- `private final BlockColors blockColors`
- `private int maxMipmapLevels`
- `private BakedModel missingModel`
- `private it.unimi.dsi.fastutil.objects.Object2IntMap<BlockState> modelGroups`
- `private ModelBakery modelBakery`

### Methods
- `public BakedModel getModel(ResourceLocation modelLocation)`
- `public BakedModel getModel(ModelResourceLocation p_119423_)`
- `public BakedModel getMissingModel()`
- `public BlockModelShaper getBlockModelShaper()`
- `public final CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier p_249079_,  ResourceManager p_251134_,  ProfilerFiller p_250336_,  ProfilerFiller p_252324_,  Executor p_250550_,  Executor p_249221_)`
- `private static CompletableFuture<Map<ResourceLocation,BlockModel>> loadBlockModels(ResourceManager p_251361_,  Executor p_252189_)`
- `private static CompletableFuture<Map<ResourceLocation,List<ModelBakery.LoadedJson>>> loadBlockStates(ResourceManager p_252084_,  Executor p_249943_)`
- `private ModelManager.ReloadState loadModels(ProfilerFiller p_252136_,  Map<ResourceLocation,AtlasSet.StitchResult> p_250646_,  ModelBakery p_248945_)`
- `private void apply(ModelManager.ReloadState p_248996_,  ProfilerFiller p_251960_)`
- `public boolean requiresRender(BlockState p_119416_,  BlockState p_119417_)`
- `public TextureAtlas getAtlas(ResourceLocation p_119429_)`
- `public void close()`
- `public void updateMaxMipLevel(int p_119411_)`
- `public ModelBakery getModelBakery()`

### Inherited methods
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## ModelManager.ReloadState

*record* `net.minecraft.client.resources.model.ModelManager.ReloadState`

Enclosing class: ModelManager

### Fields
- `private final ModelBakery modelBakery`
  The field for the modelBakery record component.
- `private final BakedModel missingModel`
  The field for the missingModel record component.
- `private final Map<BlockState,BakedModel> modelCache`
  The field for the modelCache record component.
- `private final Map<ResourceLocation,AtlasSet.StitchResult> atlasPreparations`
  The field for the atlasPreparations record component.
- `private final CompletableFuture<Void> readyForUpload`
  The field for the readyForUpload record component.

### Methods
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
- `public ModelBakery modelBakery()`
  Returns the value of the modelBakery record component.
  - returns: the value of the modelBakery record component
- `public BakedModel missingModel()`
  Returns the value of the missingModel record component.
  - returns: the value of the missingModel record component
- `public Map<BlockState,BakedModel> modelCache()`
  Returns the value of the modelCache record component.
  - returns: the value of the modelCache record component
- `public Map<ResourceLocation,AtlasSet.StitchResult> atlasPreparations()`
  Returns the value of the atlasPreparations record component.
  - returns: the value of the atlasPreparations record component
- `public CompletableFuture<Void> readyForUpload()`
  Returns the value of the readyForUpload record component.
  - returns: the value of the readyForUpload record component

## ModelResourceLocation

*class* `net.minecraft.client.resources.model.ModelResourceLocation`

### Fields
- `static final char VARIANT_SEPARATOR` (= '#')
- `private final String variant`

### Inherited fields
- from `net.minecraft.resources.ResourceLocation`: `CODEC`, `DEFAULT_NAMESPACE`, `NAMESPACE_SEPARATOR`, `REALMS_NAMESPACE`

### Methods
- `public static ModelResourceLocation vanilla(String p_251132_,  String p_248987_)`
- `private static String lowercaseVariant(String p_248567_)`
- `public String getVariant()`
- `public boolean equals(Object p_119450_)`
- `public int hashCode()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.resources.ResourceLocation`: `compareNamespaced`, `compareTo`, `decompose`, `getNamespace`, `getPath`, `isAllowedInResourceLocation`, `isValidNamespace`, `isValidPath`, `isValidResourceLocation`, `of`, `read`, `read`, `toDebugFileName`, `toLanguageKey`, `toLanguageKey`, `toLanguageKey`, `toShortLanguageKey`, `tryBuild`, `tryParse`, `validNamespaceChar`, `validPathChar`, `withPath`, `withPath`, `withPrefix`, `withSuffix`

## ModelState

*interface* `net.minecraft.client.resources.model.ModelState`

### Methods
- `default Transformation getRotation()`
- `default boolean isUvLocked()`

## MultiPartBakedModel

*class* `net.minecraft.client.resources.model.MultiPartBakedModel`

### Fields
- `private final List<org.apache.commons.lang3.tuple.Pair<Predicate<BlockState>,BakedModel>> selectors`
- `protected final boolean hasAmbientOcclusion`
- `protected final boolean isGui3d`
- `protected final boolean usesBlockLight`
- `protected final TextureAtlasSprite particleIcon`
- `protected final ItemTransforms transforms`
- `protected final ItemOverrides overrides`
- `private final Map<BlockState,BitSet> selectorCache`
- `private final BakedModel defaultModel`

### Methods
- `public BitSet getSelectors(@Nullable  BlockState p_235050_)`
- `public List<BakedQuad> getQuads(@Nullable  BlockState p_235050_,  @Nullable  Direction p_235051_,  RandomSource p_235052_,  ModelData modelData,  @Nullable  RenderType renderType)`
  Description copied from interface: IForgeBakedModel
  A null RenderType is used for the breaking overlay as well as non-standard rendering, so models should return all their quads.
- `public boolean useAmbientOcclusion()`
- `public boolean useAmbientOcclusion(BlockState state)`
- `public boolean useAmbientOcclusion(BlockState state,  RenderType renderType)`
- `public boolean isGui3d()`
- `public boolean usesBlockLight()`
- `public boolean isCustomRenderer()`
- `@Deprecated public TextureAtlasSprite getParticleIcon()` (deprecated)
- `public TextureAtlasSprite getParticleIcon(ModelData modelData)`
- `@Deprecated public ItemTransforms getTransforms()` (deprecated)
- `public BakedModel applyTransform(ItemDisplayContext transformType,  PoseStack poseStack,  boolean applyLeftHandTransform)`
  Description copied from interface: IForgeBakedModel
  Applies a transform for the given ItemTransforms.TransformType and applyLeftHandTransform, and
   returns the model to be rendered.
- `public ChunkRenderTypeSet getRenderTypes(@NotNull  @NotNull BlockState state,  @NotNull  @NotNull RandomSource rand,  @NotNull  ModelData data)`
  Description copied from interface: IForgeBakedModel
  Gets the set of render types to use when drawing this block in the level.
   Supported types are those returned by RenderType.chunkBufferLayers().
  
   By default, defers query to ItemBlockRenderTypes.
- `public ItemOverrides getOverrides()`

### Inherited methods
- from `net.minecraftforge.client.model.IDynamicBakedModel`: `getQuads`
- from `net.minecraftforge.client.extensions.IForgeBakedModel`: `getModelData`, `getRenderPasses`, `getRenderTypes`

## MultiPartBakedModel.Builder

*class* `net.minecraft.client.resources.model.MultiPartBakedModel.Builder`

Enclosing class: MultiPartBakedModel

### Fields
- `private final List<org.apache.commons.lang3.tuple.Pair<Predicate<BlockState>,BakedModel>> selectors`

### Methods
- `public void add(Predicate<BlockState> p_119478_,  BakedModel p_119479_)`
- `public BakedModel build()`

## SimpleBakedModel

*class* `net.minecraft.client.resources.model.SimpleBakedModel`

### Fields
- `protected final List<BakedQuad> unculledFaces`
- `protected final Map<Direction,List<BakedQuad>> culledFaces`
- `protected final boolean hasAmbientOcclusion`
- `protected final boolean isGui3d`
- `protected final boolean usesBlockLight`
- `protected final TextureAtlasSprite particleIcon`
- `protected final ItemTransforms transforms`
- `protected final ItemOverrides overrides`
- `protected final ChunkRenderTypeSet blockRenderTypes`
- `protected final List<RenderType> itemRenderTypes`
- `protected final List<RenderType> fabulousItemRenderTypes`

### Methods
- `public List<BakedQuad> getQuads(@Nullable  BlockState p_235054_,  @Nullable  Direction p_235055_,  RandomSource p_235056_)`
- `public boolean useAmbientOcclusion()`
- `public boolean isGui3d()`
- `public boolean usesBlockLight()`
- `public boolean isCustomRenderer()`
- `public TextureAtlasSprite getParticleIcon()`
- `public ItemTransforms getTransforms()`
- `public ItemOverrides getOverrides()`
- `public ChunkRenderTypeSet getRenderTypes(@NotNull  @NotNull BlockState state,  @NotNull  @NotNull RandomSource rand,  @NotNull  ModelData data)`
  Description copied from interface: IForgeBakedModel
  Gets the set of render types to use when drawing this block in the level.
   Supported types are those returned by RenderType.chunkBufferLayers().
  
   By default, defers query to ItemBlockRenderTypes.
- `public List<RenderType> getRenderTypes(ItemStack itemStack,  boolean fabulous)`
  Description copied from interface: IForgeBakedModel
  Gets an ordered list of render types to use when drawing this item.
   All render types using the DefaultVertexFormat.NEW_ENTITY format are supported.
  
   This method will only be called on the models returned by IForgeBakedModel.getRenderPasses(ItemStack, boolean).
  
   By default, defers query to ItemBlockRenderTypes.

### Inherited methods
- from `net.minecraftforge.client.extensions.IForgeBakedModel`: `applyTransform`, `getModelData`, `getParticleIcon`, `getQuads`, `getRenderPasses`, `useAmbientOcclusion`, `useAmbientOcclusion`

## SimpleBakedModel.Builder

*class* `net.minecraft.client.resources.model.SimpleBakedModel.Builder`

Enclosing class: SimpleBakedModel

### Fields
- `private final List<BakedQuad> unculledFaces`
- `private final Map<Direction,List<BakedQuad>> culledFaces`
- `private final ItemOverrides overrides`
- `private final boolean hasAmbientOcclusion`
- `private TextureAtlasSprite particleIcon`
- `private final boolean usesBlockLight`
- `private final boolean isGui3d`
- `private final ItemTransforms transforms`

### Methods
- `public SimpleBakedModel.Builder addCulledFace(Direction p_119531_,  BakedQuad p_119532_)`
- `public SimpleBakedModel.Builder addUnculledFace(BakedQuad p_119527_)`
- `public SimpleBakedModel.Builder particle(TextureAtlasSprite p_119529_)`
- `public SimpleBakedModel.Builder item()`
- `@Deprecated public BakedModel build()` (deprecated)
- `public BakedModel build(RenderTypeGroup renderTypes)`

## UnbakedModel

*interface* `net.minecraft.client.resources.model.UnbakedModel`

### Methods
- `Collection<ResourceLocation> getDependencies()`
- `void resolveParents(Function<ResourceLocation,UnbakedModel> p_119538_)`
- `@Nullable BakedModel bake(ModelBaker p_250133_,  Function<Material,TextureAtlasSprite> p_119535_,  ModelState p_119536_,  ResourceLocation p_119537_)`

## WeightedBakedModel

*class* `net.minecraft.client.resources.model.WeightedBakedModel`

### Fields
- `private final int totalWeight`
- `private final List<WeightedEntry.Wrapper<BakedModel>> list`
- `private final BakedModel wrapped`

### Methods
- `public List<BakedQuad> getQuads(@Nullable  BlockState p_235058_,  @Nullable  Direction p_235059_,  RandomSource p_235060_,  ModelData modelData,  @Nullable  RenderType renderType)`
  Description copied from interface: IForgeBakedModel
  A null RenderType is used for the breaking overlay as well as non-standard rendering, so models should return all their quads.
- `public boolean useAmbientOcclusion()`
- `public boolean useAmbientOcclusion(BlockState state)`
- `public boolean useAmbientOcclusion(BlockState state,  RenderType renderType)`
- `public boolean isGui3d()`
- `public boolean usesBlockLight()`
- `public boolean isCustomRenderer()`
- `public TextureAtlasSprite getParticleIcon()`
- `public TextureAtlasSprite getParticleIcon(ModelData modelData)`
- `public ItemTransforms getTransforms()`
- `public BakedModel applyTransform(ItemDisplayContext transformType,  PoseStack poseStack,  boolean applyLeftHandTransform)`
  Description copied from interface: IForgeBakedModel
  Applies a transform for the given ItemTransforms.TransformType and applyLeftHandTransform, and
   returns the model to be rendered.
- `public ChunkRenderTypeSet getRenderTypes(@NotNull  @NotNull BlockState state,  @NotNull  @NotNull RandomSource rand,  @NotNull  ModelData data)`
  Description copied from interface: IForgeBakedModel
  Gets the set of render types to use when drawing this block in the level.
   Supported types are those returned by RenderType.chunkBufferLayers().
  
   By default, defers query to ItemBlockRenderTypes.
- `public ItemOverrides getOverrides()`

### Inherited methods
- from `net.minecraftforge.client.model.IDynamicBakedModel`: `getQuads`
- from `net.minecraftforge.client.extensions.IForgeBakedModel`: `getModelData`, `getRenderPasses`, `getRenderTypes`

## WeightedBakedModel.Builder

*class* `net.minecraft.client.resources.model.WeightedBakedModel.Builder`

Enclosing class: WeightedBakedModel

### Fields
- `private final List<WeightedEntry.Wrapper<BakedModel>> list`

### Methods
- `public WeightedBakedModel.Builder add(@Nullable  BakedModel p_119560_,  int p_119561_)`
- `@Nullable public BakedModel build()`
