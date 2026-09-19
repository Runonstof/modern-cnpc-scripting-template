# net.minecraftforge.client.model

- [Attributes](#attributes)
- [BakedItemModel](#bakeditemmodel)
- [BakedItemModel.BakedGuiItemModel](#bakeditemmodel.bakedguiitemmodel)
- [BakedModelWrapper](#bakedmodelwrapper)
- [BlockStateLoader](#blockstateloader)
- [BlockStateLoader.Marker](#blockstateloader.marker)
- [BlockStateLoader.SubModel](#blockstateloader.submodel)
- [ForgeBlockStateV1](#forgeblockstatev1)
- [ForgeBlockStateV1.Deserializer](#forgeblockstatev1.deserializer)
- [ForgeBlockStateV1.Transforms](#forgeblockstatev1.transforms)
- [ForgeBlockStateV1.TRSRDeserializer](#forgeblockstatev1.trsrdeserializer)
- [ForgeBlockStateV1.Variant](#forgeblockstatev1.variant)
- [ForgeBlockStateV1.Variant.Deserializer](#forgeblockstatev1.variant.deserializer)
- [ICustomModelLoader](#icustommodelloader)
- [IModel](#imodel)
- [ISmartVariant](#ismartvariant)
- [ItemLayerModel](#itemlayermodel)
- [ItemLayerModel.Loader](#itemlayermodel.loader)
- [ItemTextureQuadConverter](#itemtexturequadconverter)
- [MapModelState](#mapmodelstate)
- [MapModelState.Wrapper](#mapmodelstate.wrapper)
- [ModelDynBucket](#modeldynbucket)
- [ModelDynBucket.LoaderDynBucket](#modeldynbucket.loaderdynbucket)
- [ModelFluid](#modelfluid)
- [ModelFluid.FluidLoader](#modelfluid.fluidloader)
- [ModelLoader](#modelloader)
- [ModelLoader.BakedModelCacheKey](#modelloader.bakedmodelcachekey)
- [ModelLoader.VanillaLoader](#modelloader.vanillaloader)
- [ModelLoader.VariantLoader](#modelloader.variantloader)
- [ModelLoader.White](#modelloader.white)
- [ModelLoaderRegistry](#modelloaderregistry)
- [ModelLoaderRegistry.LoaderException](#modelloaderregistry.loaderexception)
- [ModelStateComposition](#modelstatecomposition)
- [MultiLayerModel](#multilayermodel)
- [MultiLayerModel.Loader](#multilayermodel.loader)
- [MultiModel](#multimodel)
- [MultiModelState](#multimodelstate)
- [PerspectiveMapWrapper](#perspectivemapwrapper)
- [SimpleModelFontRenderer](#simplemodelfontrenderer)
- [SimpleModelState](#simplemodelstate)
## Attributes

*class* `net.minecraftforge.client.model.Attributes`

### Fields
- `public static final VertexFormat DEFAULT_BAKED_FORMAT`

### Methods
- `public static boolean moreSpecific(VertexFormat first,  VertexFormat second)`

## BakedItemModel

*class* `net.minecraftforge.client.model.BakedItemModel`

All Implemented Interfaces: IBakedModel

### Fields
- `protected final <any> quads`
- `protected final TextureAtlasSprite particle`
- `protected final <any> transforms`
- `protected final ItemOverrideList overrides`
- `protected final IBakedModel guiModel`

### Methods
- `public boolean isAmbientOcclusion()`
- `public boolean isGui3d()`
- `public boolean isBuiltInRenderer()`
- `public TextureAtlasSprite getParticleTexture()`
- `public ItemOverrideList getOverrides()`
- `public java.util.List<BakedQuad> getQuads(IBlockState state,  EnumFacing side,  long rand)`
- `public <any> handlePerspective(ItemCameraTransforms.TransformType type)`

### Inherited methods
- from `net.minecraft.client.renderer.block.model.IBakedModel`: `getItemCameraTransforms`, `isAmbientOcclusion`

## BakedItemModel.BakedGuiItemModel

*class* `net.minecraftforge.client.model.BakedItemModel.BakedGuiItemModel`

All Implemented Interfaces: IBakedModel

Enclosing class: BakedItemModel

### Inherited fields
- from `net.minecraftforge.client.model.BakedModelWrapper`: `originalModel`

### Methods
- `public java.util.List<BakedQuad> getQuads(IBlockState state,  EnumFacing side,  long rand)`
- `public <any> handlePerspective(ItemCameraTransforms.TransformType type)`

### Inherited methods
- from `net.minecraftforge.client.model.BakedModelWrapper`: `getItemCameraTransforms`, `getOverrides`, `getParticleTexture`, `isAmbientOcclusion`, `isAmbientOcclusion`, `isBuiltInRenderer`, `isGui3d`

## BakedModelWrapper

*class* `net.minecraftforge.client.model.BakedModelWrapper`

All Implemented Interfaces: IBakedModel

### Fields
- `protected final T extends IBakedModel originalModel`

### Methods
- `public java.util.List<BakedQuad> getQuads(IBlockState state,  EnumFacing side,  long rand)`
- `public boolean isAmbientOcclusion()`
- `public boolean isAmbientOcclusion(IBlockState state)`
- `public boolean isGui3d()`
- `public boolean isBuiltInRenderer()`
- `public TextureAtlasSprite getParticleTexture()`
- `public ItemCameraTransforms getItemCameraTransforms()`
- `public ItemOverrideList getOverrides()`
- `public <any> handlePerspective(ItemCameraTransforms.TransformType cameraTransformType)`

## BlockStateLoader

*class* `net.minecraftforge.client.model.BlockStateLoader`

### Methods
- `public static ModelBlockDefinition load(java.io.Reader reader,  ResourceLocation location,  Gson vanillaGSON)`
  Loads a BlockStates json file.
   Will attempt to parse it as a Forge Enhanced version if possible.
   Will fall back to standard loading if marker is not present.
  
   Note: This method is NOT thread safe
  - param: reader - json read
  - param: location - blockstate location
  - param: vanillaGSON - ModelBlockDefinition's GSON reader.
  - returns: Model definition including variants for all known combinations.

## BlockStateLoader.Marker

*class* `net.minecraftforge.client.model.BlockStateLoader.Marker`

Enclosing class: BlockStateLoader

### Fields
- `public int forge_marker`

## BlockStateLoader.SubModel

*class* `net.minecraftforge.client.model.BlockStateLoader.SubModel`

Enclosing class: BlockStateLoader

### Methods
- `public IModelState getState()`
- `public boolean isUVLock()`
- `public <any> getTextures()`
- `public ResourceLocation getModelLocation()`
- `public <any> getCustomData()`

## ForgeBlockStateV1

*class* `net.minecraftforge.client.model.ForgeBlockStateV1`

### Inherited fields
- from `net.minecraftforge.client.model.BlockStateLoader.Marker`: `forge_marker`

## ForgeBlockStateV1.Deserializer

*class* `net.minecraftforge.client.model.ForgeBlockStateV1.Deserializer`

Enclosing class: ForgeBlockStateV1

### Methods
- `public ForgeBlockStateV1 deserialize(JsonElement element,  java.lang.reflect.Type typeOfT,  JsonDeserializationContext context)  throws JsonParseException`
  - throws: JsonParseException

## ForgeBlockStateV1.Transforms

*class* `net.minecraftforge.client.model.ForgeBlockStateV1.Transforms`

Enclosing class: ForgeBlockStateV1

### Methods
- `public static TRSRTransformation convert(float tx,  float ty,  float tz,  float ax,  float ay,  float az,  float s)`
- `public static TRSRTransformation convert(float tx,  float ty,  float tz,  float ax,  float ay,  float az,  float sx,  float sy,  float sz)`
- `public static TRSRTransformation leftify(TRSRTransformation transform)`
- `public static java.util.Optional<IModelState> get(java.lang.String name)`

## ForgeBlockStateV1.TRSRDeserializer

*class* `net.minecraftforge.client.model.ForgeBlockStateV1.TRSRDeserializer`

Enclosing class: ForgeBlockStateV1

### Fields
- `public static final ForgeBlockStateV1.TRSRDeserializer INSTANCE`

### Methods
- `public TRSRTransformation deserialize(JsonElement json,  java.lang.reflect.Type typeOfT,  JsonDeserializationContext context)  throws JsonParseException`
  - throws: JsonParseException
- `public static Matrix4f parseMatrix(JsonElement e)`
- `public static float[] parseFloatArray(JsonElement e,  int length,  java.lang.String prefix)`
- `public static Quat4f parseAxisRotation(JsonElement e)`
- `public static Quat4f parseRotation(JsonElement e)`

## ForgeBlockStateV1.Variant

*class* `net.minecraftforge.client.model.ForgeBlockStateV1.Variant`

Enclosing class: ForgeBlockStateV1

### Fields
- `public static final java.lang.Object SET_VALUE`

### Methods
- `protected BlockStateLoader.SubModel asGenericSubModel()`
- `public <any> getOnlyPartsVariant()`
  Gets a list containing the single variant of each part.
   Will throw an error if this Variant has multiple variants for a submodel.
- `public java.util.Optional<java.lang.Boolean> getSmooth()`
- `public java.util.Optional<java.lang.Boolean> getGui3d()`
- `public ResourceLocation getModel()`
- `public boolean isModelSet()`
- `public java.util.Optional<IModelState> getState()`
- `public java.util.Optional<java.lang.Boolean> getUvLock()`
- `public java.util.Optional<java.lang.Integer> getWeight()`
- `public <any> getTextures()`
- `public <any> getSubmodels()`
- `public <any> getCustomData()`

## ForgeBlockStateV1.Variant.Deserializer

*class* `net.minecraftforge.client.model.ForgeBlockStateV1.Variant.Deserializer`

Enclosing class: ForgeBlockStateV1.Variant

### Fields
- `public java.lang.String simpleSubmodelKey`
  Used once (then set null) for the key to put a simple submodel declaration under in the submodel map.

### Methods
- `protected ResourceLocation getBlockLocation(java.lang.String location)`
- `public ForgeBlockStateV1.Variant deserialize(JsonElement element,  java.lang.reflect.Type typeOfT,  JsonDeserializationContext context)  throws JsonParseException`
  - throws: JsonParseException

## ICustomModelLoader

*interface* `net.minecraftforge.client.model.ICustomModelLoader`

All Superinterfaces: IResourceManagerReloadListener, ISelectiveResourceReloadListener

### Methods
- `void onResourceManagerReload(IResourceManager resourceManager)`
- `default void onResourceManagerReload(IResourceManager resourceManager,  java.util.function.Predicate<IResourceType> resourcePredicate)`
  Description copied from interface: ISelectiveResourceReloadListener
  A version of onResourceManager that selectively chooses IResourceTypes
   to reload.
   When using this, the given predicate should be called to ensure the relevant resources should
   be reloaded at this time.
  - param: resourceManager - the resource manager being reloaded
  - param: resourcePredicate - predicate to test whether any given resource type should be reloaded
- `boolean accepts(ResourceLocation modelLocation)`
- `IModel loadModel(ResourceLocation modelLocation)  throws java.lang.Exception`
  - throws: java.lang.Exception

## IModel

*interface* `net.minecraftforge.client.model.IModel`

### Methods
- `default java.util.Collection<ResourceLocation> getDependencies()`
- `default java.util.Collection<ResourceLocation> getTextures()`
- `IBakedModel bake(IModelState state,  VertexFormat format,  java.util.function.Function<ResourceLocation,TextureAtlasSprite> bakedTextureGetter)`
- `default IModelState getDefaultState()`
- `default java.util.Optional<? extends IClip> getClip(java.lang.String name)`
- `default IModel process(<any> customData)`
  Allows the model to process custom data from the variant definition.
   If unknown data is encountered it should be skipped.
  - returns: a new model, with data applied.
- `default IModel smoothLighting(boolean value)`
- `default IModel gui3d(boolean value)`
- `default IModel uvlock(boolean value)`
- `default IModel retexture(<any> textures)`
  Applies new textures to the model.
   The returned model should be independent of the accessed one,
   as a model should be able to be retextured multiple times producing
   a separate model each time.
  
   The input map MAY map to an empty string "" which should be used
   to indicate the texture was removed. Handling of that is up to
   the model itself. Such as using default, missing texture, or
   removing vertices.
  
   The input should be considered a DIFF of the old textures, not a
   replacement as it may not contain everything.
  - param: textures - New
  - returns: Model with textures applied.
- `default java.util.Optional<ModelBlock> asVanillaModel()`

## ISmartVariant

*interface* `net.minecraftforge.client.model.ISmartVariant`

### Methods
- `IModel process(IModel base)`

## ItemLayerModel

*class* `net.minecraftforge.client.model.ItemLayerModel`

All Implemented Interfaces: IModel

### Fields
- `public static final ItemLayerModel INSTANCE`

### Methods
- `public java.util.Collection<ResourceLocation> getTextures()`
- `public ItemLayerModel retexture(<any> textures)`
  Description copied from interface: IModel
  Applies new textures to the model.
   The returned model should be independent of the accessed one,
   as a model should be able to be retextured multiple times producing
   a separate model each time.
  
   The input map MAY map to an empty string "" which should be used
   to indicate the texture was removed. Handling of that is up to
   the model itself. Such as using default, missing texture, or
   removing vertices.
  
   The input should be considered a DIFF of the old textures, not a
   replacement as it may not contain everything.
  - param: textures - New
  - returns: Model with textures applied.
- `public IBakedModel bake(IModelState state,  VertexFormat format,  java.util.function.Function<ResourceLocation,TextureAtlasSprite> bakedTextureGetter)`
- `public static <any> getQuadsForSprite(int tint,  TextureAtlasSprite sprite,  VertexFormat format,  java.util.Optional<TRSRTransformation> transform)`

### Inherited methods
- from `net.minecraftforge.client.model.IModel`: `asVanillaModel`, `getClip`, `getDefaultState`, `getDependencies`, `gui3d`, `process`, `smoothLighting`, `uvlock`

## ItemLayerModel.Loader

*enum* `net.minecraftforge.client.model.ItemLayerModel.Loader`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ItemLayerModel.Loader>, IResourceManagerReloadListener, ICustomModelLoader, ISelectiveResourceReloadListener

Enclosing class: ItemLayerModel

### Fields
- `public static final ItemLayerModel.Loader INSTANCE`

### Methods
- `public static ItemLayerModel.Loader[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ItemLayerModel.Loader c : ItemLayerModel.Loader.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ItemLayerModel.Loader valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public void onResourceManagerReload(IResourceManager resourceManager)`
- `public boolean accepts(ResourceLocation modelLocation)`
- `public IModel loadModel(ResourceLocation modelLocation)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraftforge.client.model.ICustomModelLoader`: `onResourceManagerReload`

## ItemTextureQuadConverter

*class* `net.minecraftforge.client.model.ItemTextureQuadConverter`

### Methods
- `@Deprecated public static java.util.List<UnpackedBakedQuad> convertTexture(VertexFormat format,  TRSRTransformation transform,  TextureAtlasSprite template,  TextureAtlasSprite sprite,  float z,  EnumFacing facing,  int color)` (deprecated)
  Deprecated. use convertTexture(VertexFormat, TRSRTransformation, TextureAtlasSprite, TextureAtlasSprite, float, EnumFacing, int, int)
- `public static java.util.List<UnpackedBakedQuad> convertTexture(VertexFormat format,  TRSRTransformation transform,  TextureAtlasSprite template,  TextureAtlasSprite sprite,  float z,  EnumFacing facing,  int color,  int tint)`
  Takes a texture and converts it into BakedQuads.
   The conversion is done by scanning the texture horizontally and vertically and creating "strips" of the texture.
   Strips that are of the same size and follow each other are converted into one bigger quad.
  
   The resulting list of quads is the texture represented as a list of horizontal OR vertical quads,
   depending on which creates less quads. If the amount of quads is equal, horizontal is preferred.
  - param: format -
  - param: template - The input texture to convert
  - param: sprite - The texture whose UVs shall be used
  - returns: The generated quads.
- `@Deprecated public static java.util.List<UnpackedBakedQuad> convertTextureHorizontal(VertexFormat format,  TRSRTransformation transform,  TextureAtlasSprite template,  TextureAtlasSprite sprite,  float z,  EnumFacing facing,  int color)` (deprecated)
  Deprecated. use convertTextureHorizontal(VertexFormat, TRSRTransformation, TextureAtlasSprite, TextureAtlasSprite, float, EnumFacing, int, int)
- `public static java.util.List<UnpackedBakedQuad> convertTextureHorizontal(VertexFormat format,  TRSRTransformation transform,  TextureAtlasSprite template,  TextureAtlasSprite sprite,  float z,  EnumFacing facing,  int color,  int tint)`
  Scans a texture and converts it into a list of horizontal strips stacked on top of each other.
   The height of the strips is as big as possible.
- `@Deprecated public static java.util.List<UnpackedBakedQuad> convertTextureVertical(VertexFormat format,  TRSRTransformation transform,  TextureAtlasSprite template,  TextureAtlasSprite sprite,  float z,  EnumFacing facing,  int color)` (deprecated)
  Deprecated. use convertTextureVertical(VertexFormat, TRSRTransformation, TextureAtlasSprite, TextureAtlasSprite, float, EnumFacing, int, int)
- `public static java.util.List<UnpackedBakedQuad> convertTextureVertical(VertexFormat format,  TRSRTransformation transform,  TextureAtlasSprite template,  TextureAtlasSprite sprite,  float z,  EnumFacing facing,  int color,  int tint)`
  Scans a texture and converts it into a list of vertical strips stacked next to each other from left to right.
   The width of the strips is as big as possible.
- `@Deprecated public static UnpackedBakedQuad genQuad(VertexFormat format,  TRSRTransformation transform,  float x1,  float y1,  float x2,  float y2,  float z,  TextureAtlasSprite sprite,  EnumFacing facing,  int color)` (deprecated)
  Deprecated. use genQuad(VertexFormat, TRSRTransformation, float, float, float, float, float, TextureAtlasSprite, EnumFacing, int, int)
- `public static UnpackedBakedQuad genQuad(VertexFormat format,  TRSRTransformation transform,  float x1,  float y1,  float x2,  float y2,  float z,  TextureAtlasSprite sprite,  EnumFacing facing,  int color,  int tint)`
  Generates a Front/Back quad for an itemmodel. Therefore only supports facing NORTH and SOUTH.
   Coordinates are [0,16] to match the usual coordinates used in TextureAtlasSprites

## MapModelState

*class* `net.minecraftforge.client.model.MapModelState`

All Implemented Interfaces: IModelState

### Methods
- `public java.util.Optional<TRSRTransformation> apply(java.util.Optional<? extends IModelPart> part)`
- `public IModelState getState(java.lang.Object obj)`
- `public static MapModelState.Wrapper wrap(java.lang.Object obj)`

## MapModelState.Wrapper

*class* `net.minecraftforge.client.model.MapModelState.Wrapper`

All Implemented Interfaces: IModelPart

Enclosing class: MapModelState

### Methods
- `public int hashCode()`
- `public boolean equals(java.lang.Object obj)`

## ModelDynBucket

*class* `net.minecraftforge.client.model.ModelDynBucket`

All Implemented Interfaces: IModel

### Fields
- `public static final ModelResourceLocation LOCATION`
- `public static final IModel MODEL`

### Methods
- `public java.util.Collection<ResourceLocation> getTextures()`
- `public IBakedModel bake(IModelState state,  VertexFormat format,  java.util.function.Function<ResourceLocation,TextureAtlasSprite> bakedTextureGetter)`
- `public ModelDynBucket process(<any> customData)`
  Sets the fluid in the model.
   "fluid" - Name of the fluid in the fluid registry.
   "flipGas" - If "true" the model will be flipped upside down if the fluid is lighter than air. If "false" it won't.
   "applyTint" - If "true" the model will tint the fluid quads according to the fluid's base color.
  
   If the fluid can't be found, water is used.
  - returns: a new model, with data applied.
- `public ModelDynBucket retexture(<any> textures)`
  Allows to use different textures for the model.
   There are 3 layers:
   base - The empty bucket/container
   fluid - A texture representing the liquid portion. Non-transparent = liquid
   cover - An overlay that's put over the liquid (optional)
  
   If no liquid is given a hardcoded variant for the bucket is used.
  - param: textures - New
  - returns: Model with textures applied.

### Inherited methods
- from `net.minecraftforge.client.model.IModel`: `asVanillaModel`, `getClip`, `getDefaultState`, `getDependencies`, `gui3d`, `smoothLighting`, `uvlock`

## ModelDynBucket.LoaderDynBucket

*enum* `net.minecraftforge.client.model.ModelDynBucket.LoaderDynBucket`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ModelDynBucket.LoaderDynBucket>, IResourceManagerReloadListener, ICustomModelLoader, ISelectiveResourceReloadListener

Enclosing class: ModelDynBucket

### Fields
- `public static final ModelDynBucket.LoaderDynBucket INSTANCE`

### Methods
- `public static ModelDynBucket.LoaderDynBucket[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ModelDynBucket.LoaderDynBucket c : ModelDynBucket.LoaderDynBucket.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ModelDynBucket.LoaderDynBucket valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public boolean accepts(ResourceLocation modelLocation)`
- `public IModel loadModel(ResourceLocation modelLocation)`
- `public void onResourceManagerReload(IResourceManager resourceManager)`
- `public void register(TextureMap map)`
- `protected static IResource getResource(ResourceLocation resourceLocation)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraftforge.client.model.ICustomModelLoader`: `onResourceManagerReload`

## ModelFluid

*class* `net.minecraftforge.client.model.ModelFluid`

All Implemented Interfaces: IModel

### Fields
- `public static final ModelFluid WATER`
- `public static final ModelFluid LAVA`

### Methods
- `public java.util.Collection<ResourceLocation> getTextures()`
- `public IBakedModel bake(IModelState state,  VertexFormat format,  java.util.function.Function<ResourceLocation,TextureAtlasSprite> bakedTextureGetter)`
- `public ModelFluid process(<any> customData)`
  Description copied from interface: IModel
  Allows the model to process custom data from the variant definition.
   If unknown data is encountered it should be skipped.
  - returns: a new model, with data applied.

### Inherited methods
- from `net.minecraftforge.client.model.IModel`: `asVanillaModel`, `getClip`, `getDefaultState`, `getDependencies`, `gui3d`, `retexture`, `smoothLighting`, `uvlock`

## ModelFluid.FluidLoader

*enum* `net.minecraftforge.client.model.ModelFluid.FluidLoader`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ModelFluid.FluidLoader>, IResourceManagerReloadListener, ICustomModelLoader, ISelectiveResourceReloadListener

Enclosing class: ModelFluid

### Fields
- `public static final ModelFluid.FluidLoader INSTANCE`

### Methods
- `public static ModelFluid.FluidLoader[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ModelFluid.FluidLoader c : ModelFluid.FluidLoader.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ModelFluid.FluidLoader valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public void onResourceManagerReload(IResourceManager resourceManager)`
- `public boolean accepts(ResourceLocation modelLocation)`
- `public IModel loadModel(ResourceLocation modelLocation)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraftforge.client.model.ICustomModelLoader`: `onResourceManagerReload`

## ModelLoader

*class* `net.minecraftforge.client.model.ModelLoader`

### Inherited fields
- from `net.minecraft.client.renderer.block.model.ModelBakery`: `bakedRegistry`, `blockModelShapes`, `LOCATIONS_BUILTIN_TEXTURES`, `MODEL_ENTITY`, `MODEL_GENERATED`, `MODEL_MISSING`, `resourceManager`, `sprites`, `textureMap`

### Methods
- `public boolean isLoading()`
- `public IRegistry<ModelResourceLocation,IBakedModel> setupModelRegistry()`
- `protected void loadVariantModels()`
- `protected void loadMultipartVariantModels()`
- `protected void loadBlocks()`
- `protected void registerVariant(ModelBlockDefinition definition,  ModelResourceLocation location)`
- `protected void registerMultipartVariant(ModelBlockDefinition definition,  java.util.Collection<ModelResourceLocation> locations)`
- `protected ModelBlockDefinition getModelBlockDefinition(ResourceLocation location)`
- `protected void loadItemModels()`
- `public static ModelResourceLocation getInventoryVariant(java.lang.String s)`
  Hooked from ModelBakery, allows using MRLs that don't end with "inventory" for items.
- `protected ResourceLocation getModelLocation(ResourceLocation model)`
- `protected IModel getMissingModel()`
- `public void onPostBakeEvent(IRegistry<ModelResourceLocation,IBakedModel> modelRegistry)`
  Internal, do not use.
- `public static void setCustomStateMapper(Block block,  IStateMapper mapper)`
  Adds a custom IBlockState -> model variant logic.
- `public static void onRegisterAllBlocks(BlockModelShapes shapes)`
  Internal, do not use.
- `public static void setCustomModelResourceLocation(Item item,  int metadata,  ModelResourceLocation model)`
  Adds a simple mapping from Item + metadata to the model variant.
   Registers the variant with the ModelBakery too.
- `public static void setCustomMeshDefinition(Item item,  ItemMeshDefinition meshDefinition)`
  Adds generic ItemStack -> model variant logic.
   You still need to manually call ModelBakery.registerItemVariants with all values that meshDefinition can return.
- `public static void setBucketModelDefinition(Item item)`
  Helper method for registering all itemstacks for given item to map to universal bucket model.
- `public static void onRegisterItems(ItemModelMesher mesher)`
  Internal, do not use.
- `public static java.util.function.Function<ResourceLocation,TextureAtlasSprite> defaultTextureGetter()`
  Get the default texture getter the models will be baked with.

### Inherited methods
- from `net.minecraft.client.renderer.block.model.ModelBakery`: `bakeModel`, `getItemLocation`, `getTextureLocations`, `getVariantNames`, `hasItemModel`, `isCustomRenderer`, `loadBlock`, `loadModel`, `loadVariantItemModels`, `loadVariantList`, `makeBakedQuad`, `makeItemModel`, `registerItemVariants`, `registerVariantNames`

## ModelLoader.BakedModelCacheKey

*class* `net.minecraftforge.client.model.ModelLoader.BakedModelCacheKey`

Enclosing class: ModelLoader

### Methods
- `public boolean equals(java.lang.Object o)`
- `public int hashCode()`

## ModelLoader.VanillaLoader

*enum* `net.minecraftforge.client.model.ModelLoader.VanillaLoader`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ModelLoader.VanillaLoader>, IResourceManagerReloadListener, ICustomModelLoader, ISelectiveResourceReloadListener

Enclosing class: ModelLoader

### Fields
- `public static final ModelLoader.VanillaLoader INSTANCE`

### Methods
- `public static ModelLoader.VanillaLoader[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ModelLoader.VanillaLoader c : ModelLoader.VanillaLoader.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ModelLoader.VanillaLoader valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public void onResourceManagerReload(IResourceManager resourceManager)`
- `public boolean accepts(ResourceLocation modelLocation)`
- `public IModel loadModel(ResourceLocation modelLocation)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public java.lang.String toString()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`
- from `net.minecraftforge.client.model.ICustomModelLoader`: `onResourceManagerReload`

## ModelLoader.VariantLoader

*enum* `net.minecraftforge.client.model.ModelLoader.VariantLoader`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ModelLoader.VariantLoader>, IResourceManagerReloadListener, ICustomModelLoader, ISelectiveResourceReloadListener

Enclosing class: ModelLoader

### Fields
- `public static final ModelLoader.VariantLoader INSTANCE`

### Methods
- `public static ModelLoader.VariantLoader[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ModelLoader.VariantLoader c : ModelLoader.VariantLoader.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ModelLoader.VariantLoader valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public void onResourceManagerReload(IResourceManager resourceManager)`
- `public boolean accepts(ResourceLocation modelLocation)`
- `public IModel loadModel(ResourceLocation modelLocation)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public java.lang.String toString()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`
- from `net.minecraftforge.client.model.ICustomModelLoader`: `onResourceManagerReload`

## ModelLoader.White

*class* `net.minecraftforge.client.model.ModelLoader.White`

16x16 pure white sprite.

Enclosing class: ModelLoader

### Fields
- `public static final ResourceLocation LOCATION`
- `public static final ModelLoader.White INSTANCE`

### Inherited fields
- from `net.minecraft.client.renderer.texture.TextureAtlasSprite`: `frameCounter`, `framesTextureData`, `height`, `interpolatedFrameData`, `originX`, `originY`, `rotated`, `tickCounter`, `width`

### Methods
- `public boolean hasCustomLoader(IResourceManager manager,  ResourceLocation location)`
  Description copied from class: TextureAtlasSprite
  The result of this function determines is the below 'load' function is called, and the
   default vanilla loading code is bypassed completely.
  - param: manager - Main resource manager
  - param: location - File resource location
  - returns: True to use your own custom load code and bypass vanilla loading.
- `public boolean load(IResourceManager manager,  ResourceLocation location,  java.util.function.Function<ResourceLocation,TextureAtlasSprite> textureGetter)`
  Description copied from class: TextureAtlasSprite
  Load the specified resource as this sprite's data.
   Returning false from this function will prevent this icon from being stitched onto the master texture.
  - param: manager - Main resource manager
  - param: location - File resource location
  - param: textureGetter - accessor for dependencies. All of them will be loaded before this one
  - returns: False to prevent this Icon from being stitched
- `public void register(TextureMap map)`

### Inherited methods
- from `net.minecraft.client.renderer.texture.TextureAtlasSprite`: `clearFramesTextureData`, `copyFrom`, `generateMipmaps`, `getDependencies`, `getFrameCount`, `getFrameTextureData`, `getIconHeight`, `getIconName`, `getIconWidth`, `getInterpolatedU`, `getInterpolatedV`, `getMaxU`, `getMaxV`, `getMinU`, `getMinV`, `getOriginX`, `getOriginY`, `getUnInterpolatedU`, `getUnInterpolatedV`, `hasAnimationMetadata`, `initSprite`, `loadSprite`, `loadSpriteFrames`, `makeAtlasSprite`, `setFramesTextureData`, `setIconHeight`, `setIconWidth`, `toString`, `updateAnimation`

## ModelLoaderRegistry

*class* `net.minecraftforge.client.model.ModelLoaderRegistry`

### Methods
- `public static void registerLoader(ICustomModelLoader loader)`
- `public static boolean loaded(ResourceLocation location)`
- `public static ResourceLocation getActualLocation(ResourceLocation location)`
- `public static IModel getModel(ResourceLocation location)  throws java.lang.Exception`
  Primary method to get IModel instances.
   ResourceLocation argument will be passed directly to the custom model loaders,
   ModelResourceLocation argument will be loaded through the blockstate system.
  - throws: java.lang.Exception
- `public static IModel getModelOrMissing(ResourceLocation location)`
  Use this if you don't care about the exception and want some model anyway.
- `public static IModel getModelOrLogError(ResourceLocation location,  java.lang.String error)`
  Use this if you want the model, but need to log the error.
- `public static IModel getMissingModel()`
- `public static void clearModelCache(IResourceManager manager)`
- `public static IAnimationStateMachine loadASM(ResourceLocation location,  <any> customParameters)`

## ModelLoaderRegistry.LoaderException

*class* `net.minecraftforge.client.model.ModelLoaderRegistry.LoaderException`

All Implemented Interfaces: java.io.Serializable

Enclosing class: ModelLoaderRegistry

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ModelStateComposition

*class* `net.minecraftforge.client.model.ModelStateComposition`

All Implemented Interfaces: IModelState

### Methods
- `public java.util.Optional<TRSRTransformation> apply(java.util.Optional<? extends IModelPart> part)`
- `public boolean equals(java.lang.Object o)`
- `public int hashCode()`

## MultiLayerModel

*class* `net.minecraftforge.client.model.MultiLayerModel`

All Implemented Interfaces: IModel

### Fields
- `public static final MultiLayerModel INSTANCE`

### Methods
- `public java.util.Collection<ResourceLocation> getDependencies()`
- `public IBakedModel bake(IModelState state,  VertexFormat format,  java.util.function.Function<ResourceLocation,TextureAtlasSprite> bakedTextureGetter)`
- `public MultiLayerModel process(<any> customData)`
  Description copied from interface: IModel
  Allows the model to process custom data from the variant definition.
   If unknown data is encountered it should be skipped.
  - returns: a new model, with data applied.

### Inherited methods
- from `net.minecraftforge.client.model.IModel`: `asVanillaModel`, `getClip`, `getDefaultState`, `getTextures`, `gui3d`, `retexture`, `smoothLighting`, `uvlock`

## MultiLayerModel.Loader

*enum* `net.minecraftforge.client.model.MultiLayerModel.Loader`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<MultiLayerModel.Loader>, IResourceManagerReloadListener, ICustomModelLoader, ISelectiveResourceReloadListener

Enclosing class: MultiLayerModel

### Fields
- `public static final MultiLayerModel.Loader INSTANCE`

### Methods
- `public static MultiLayerModel.Loader[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (MultiLayerModel.Loader c : MultiLayerModel.Loader.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static MultiLayerModel.Loader valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public void onResourceManagerReload(IResourceManager resourceManager)`
- `public boolean accepts(ResourceLocation modelLocation)`
- `public IModel loadModel(ResourceLocation modelLocation)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraftforge.client.model.ICustomModelLoader`: `onResourceManagerReload`

## MultiModel

*class* `net.minecraftforge.client.model.MultiModel`

Deprecated.

All Implemented Interfaces: IModel

### Methods
- `public java.util.Collection<ResourceLocation> getDependencies()` (deprecated)
  Deprecated.
- `public java.util.Collection<ResourceLocation> getTextures()` (deprecated)
  Deprecated.
- `public IBakedModel bake(IModelState state,  VertexFormat format,  java.util.function.Function<ResourceLocation,TextureAtlasSprite> bakedTextureGetter)` (deprecated)
  Deprecated.

### Inherited methods
- from `net.minecraftforge.client.model.IModel`: `asVanillaModel`, `getClip`, `getDefaultState`, `gui3d`, `process`, `retexture`, `smoothLighting`, `uvlock`

## MultiModelState

*class* `net.minecraftforge.client.model.MultiModelState`

All Implemented Interfaces: IModelState

### Methods
- `public static IModelState getPartState(IModelState state,  IModel model,  int index)`
- `public java.util.Optional<TRSRTransformation> apply(java.util.Optional<? extends IModelPart> part)`

## PerspectiveMapWrapper

*class* `net.minecraftforge.client.model.PerspectiveMapWrapper`

All Implemented Interfaces: IBakedModel

### Methods
- `public static <any> getTransforms(IModelState state)`
- `public static <any> getTransforms(ItemCameraTransforms transforms)`
- `public static <any> handlePerspective(IBakedModel model,  <any> transforms,  ItemCameraTransforms.TransformType cameraTransformType)`
- `public static <any> handlePerspective(IBakedModel model,  IModelState state,  ItemCameraTransforms.TransformType cameraTransformType)`
- `public boolean isAmbientOcclusion()`
- `public boolean isAmbientOcclusion(IBlockState state)`
- `public boolean isGui3d()`
- `public boolean isBuiltInRenderer()`
- `public TextureAtlasSprite getParticleTexture()`
- `public ItemCameraTransforms getItemCameraTransforms()`
- `public java.util.List<BakedQuad> getQuads(IBlockState state,  EnumFacing side,  long rand)`
- `public ItemOverrideList getOverrides()`
- `public <any> handlePerspective(ItemCameraTransforms.TransformType cameraTransformType)`

## SimpleModelFontRenderer

*class* `net.minecraftforge.client.model.SimpleModelFontRenderer`

All Implemented Interfaces: IResourceManagerReloadListener

### Inherited fields
- from `net.minecraft.client.gui.FontRenderer`: `charWidth`, `FONT_HEIGHT`, `fontRandom`, `glyphWidth`, `locationFontTexture`, `posX`, `posY`

### Methods
- `public void setSprite(TextureAtlasSprite sprite)`
- `public void setFillBlanks(boolean fillBlanks)`
- `protected float renderDefaultChar(int pos,  boolean italic)`
- `public void onResourceManagerReload(IResourceManager resourceManager)`
- `protected abstract float renderUnicodeChar(char c,  boolean italic)`
- `protected void doDraw(float shift)`
- `protected void setColor(float r,  float g,  float b,  float a)`
- `public void enableAlpha()`
- `protected void bindTexture(ResourceLocation location)`
- `public <any> build()`

### Inherited methods
- from `net.minecraft.client.gui.FontRenderer`: `drawSplitString`, `drawString`, `drawString`, `drawStringWithShadow`, `getBidiFlag`, `getCharWidth`, `getColorCode`, `getFormatFromString`, `getResource`, `getStringWidth`, `getUnicodeFlag`, `getWordWrappedHeight`, `listFormattedStringToWidth`, `setBidiFlag`, `setUnicodeFlag`, `trimStringToWidth`, `trimStringToWidth`

## SimpleModelState

*class* `net.minecraftforge.client.model.SimpleModelState`

All Implemented Interfaces: IModelState

### Methods
- `public java.util.Optional<TRSRTransformation> apply(java.util.Optional<? extends IModelPart> part)`
