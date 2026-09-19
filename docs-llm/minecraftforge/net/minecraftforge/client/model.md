# net.minecraftforge.client.model

- [BakedModelWrapper](#bakedmodelwrapper)
- [CompositeModel](#compositemodel)
- [CompositeModel.Baked](#compositemodel.baked)
- [CompositeModel.Baked.Builder](#compositemodel.baked.builder)
- [CompositeModel.Data](#compositemodel.data)
- [CompositeModel.Data.Builder](#compositemodel.data.builder)
- [CompositeModel.Loader](#compositemodel.loader)
- [DynamicFluidContainerModel](#dynamicfluidcontainermodel)
- [DynamicFluidContainerModel.Colors](#dynamicfluidcontainermodel.colors)
- [DynamicFluidContainerModel.ContainedFluidOverrideHandler](#dynamicfluidcontainermodel.containedfluidoverridehandler)
- [DynamicFluidContainerModel.Loader](#dynamicfluidcontainermodel.loader)
- [ElementsModel](#elementsmodel)
- [ElementsModel.Loader](#elementsmodel.loader)
- [EmptyModel](#emptymodel)
- [EmptyModel.Baked](#emptymodel.baked)
- [ExtendedBlockModelDeserializer](#extendedblockmodeldeserializer)
- [ForgeFaceData](#forgefacedata)
- [ForgeItemModelShaper](#forgeitemmodelshaper)
- [IDynamicBakedModel](#idynamicbakedmodel)
- [IModelBuilder.Collecting](#imodelbuilder.collecting)
- [IModelBuilder.Simple](#imodelbuilder.simple)
- [IModelBuilder>](#imodelbuilder)
- [IQuadTransformer](#iquadtransformer)
- [ItemLayerModel](#itemlayermodel)
- [ItemLayerModel.Loader](#itemlayermodel.loader)
- [QuadTransformers](#quadtransformers)
- [SeparateTransformsModel](#separatetransformsmodel)
- [SeparateTransformsModel.Baked](#separatetransformsmodel.baked)
- [SeparateTransformsModel.Loader](#separatetransformsmodel.loader)
- [SimpleModelState](#simplemodelstate)
## BakedModelWrapper

*class* `net.minecraftforge.client.model.BakedModelWrapper`

Wrapper for BakedModel which delegates all operations to its parent.

 Useful for creating wrapper baked models which only override certain properties.

### Fields
- `protected final T extends BakedModel originalModel`

### Methods
- `public List<BakedQuad> getQuads(@Nullable  @Nullable BlockState state,  @Nullable  @Nullable Direction side,  RandomSource rand)`
- `public boolean useAmbientOcclusion()`
- `public boolean useAmbientOcclusion(BlockState state)`
- `public boolean useAmbientOcclusion(BlockState state,  RenderType renderType)`
- `public boolean isGui3d()`
- `public boolean usesBlockLight()`
- `public boolean isCustomRenderer()`
- `public TextureAtlasSprite getParticleIcon()`
- `public ItemTransforms getTransforms()`
- `public ItemOverrides getOverrides()`
- `public BakedModel applyTransform(ItemDisplayContext cameraTransformType,  PoseStack poseStack,  boolean applyLeftHandTransform)`
  Description copied from interface: IForgeBakedModel
  Applies a transform for the given ItemTransforms.TransformType and applyLeftHandTransform, and
   returns the model to be rendered.
- `public TextureAtlasSprite getParticleIcon(@NotNull  @NotNull ModelData data)`
- `@NotNull public @NotNull List<BakedQuad> getQuads(@Nullable  @Nullable BlockState state,  @Nullable  @Nullable Direction side,  @NotNull  @NotNull RandomSource rand,  @NotNull  @NotNull ModelData extraData,  @Nullable  @Nullable RenderType renderType)`
  Description copied from interface: IForgeBakedModel
  A null RenderType is used for the breaking overlay as well as non-standard rendering, so models should return all their quads.
- `@NotNull public @NotNull ModelData getModelData(@NotNull  @NotNull BlockAndTintGetter level,  @NotNull  @NotNull BlockPos pos,  @NotNull  @NotNull BlockState state,  @NotNull  @NotNull ModelData modelData)`
- `public ChunkRenderTypeSet getRenderTypes(@NotNull  @NotNull BlockState state,  @NotNull  @NotNull RandomSource rand,  @NotNull  @NotNull ModelData data)`
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
- `public List<BakedModel> getRenderPasses(ItemStack itemStack,  boolean fabulous)`
  Description copied from interface: IForgeBakedModel
  Gets an ordered list of baked models used to render this model as an item.
   Each of those models' render types will be queried via IForgeBakedModel.getRenderTypes(ItemStack, boolean).
  
   By default, returns the model itself.

## CompositeModel

*class* `net.minecraftforge.client.model.CompositeModel`

A model composed of several named children.

 These respect component visibility as specified in IGeometryBakingContext and can additionally be provided
 with an item-specific render ordering, for multi-pass arrangements.

### Fields
- `private final com.google.common.collect.ImmutableMap<String,BlockModel> children`
- `private final com.google.common.collect.ImmutableList<String> itemPasses`

### Methods
- `public BakedModel bake(IGeometryBakingContext context,  ModelBaker baker,  Function<Material,TextureAtlasSprite> spriteGetter,  ModelState modelState,  ItemOverrides overrides,  ResourceLocation modelLocation)`
- `public void resolveParents(Function<ResourceLocation,UnbakedModel> modelGetter,  IGeometryBakingContext context)`
  Description copied from interface: IUnbakedGeometry
  Resolve parents of nested BlockModels which are later used in
   IUnbakedGeometry.bake(IGeometryBakingContext, ModelBaker, Function, ModelState, ItemOverrides, ResourceLocation)
   via BlockModel.resolveParents(Function)
- `public Set<String> getConfigurableComponentNames()`
  Description copied from interface: IUnbakedGeometry
  Returns a set of all the components whose visibility may be configured via IGeometryBakingContext.
  - returns: a set of all the components whose visibility may be configured via IGeometryBakingContext

## CompositeModel.Baked

*class* `net.minecraftforge.client.model.CompositeModel.Baked`

Enclosing class: CompositeModel

### Fields
- `private final boolean isAmbientOcclusion`
- `private final boolean isGui3d`
- `private final boolean isSideLit`
- `private final TextureAtlasSprite particle`
- `private final ItemOverrides overrides`
- `private final ItemTransforms transforms`
- `private final com.google.common.collect.ImmutableMap<String,BakedModel> children`
- `private final com.google.common.collect.ImmutableList<BakedModel> itemPasses`

### Methods
- `@NotNull public @NotNull List<BakedQuad> getQuads(@Nullable  @Nullable BlockState state,  @Nullable  @Nullable Direction side,  @NotNull  @NotNull RandomSource rand,  @NotNull  @NotNull ModelData data,  @Nullable  @Nullable RenderType renderType)`
  Description copied from interface: IForgeBakedModel
  A null RenderType is used for the breaking overlay as well as non-standard rendering, so models should return all their quads.
- `@NotNull public @NotNull ModelData getModelData(@NotNull  @NotNull BlockAndTintGetter level,  @NotNull  @NotNull BlockPos pos,  @NotNull  @NotNull BlockState state,  @NotNull  @NotNull ModelData modelData)`
- `public boolean useAmbientOcclusion()`
- `public boolean isGui3d()`
- `public boolean usesBlockLight()`
- `public boolean isCustomRenderer()`
- `public TextureAtlasSprite getParticleIcon()`
- `public ItemOverrides getOverrides()`
- `public ItemTransforms getTransforms()`
- `public ChunkRenderTypeSet getRenderTypes(@NotNull  @NotNull BlockState state,  @NotNull  @NotNull RandomSource rand,  @NotNull  @NotNull ModelData data)`
  Description copied from interface: IForgeBakedModel
  Gets the set of render types to use when drawing this block in the level.
   Supported types are those returned by RenderType.chunkBufferLayers().
  
   By default, defers query to ItemBlockRenderTypes.
- `public List<BakedModel> getRenderPasses(ItemStack itemStack,  boolean fabulous)`
  Description copied from interface: IForgeBakedModel
  Gets an ordered list of baked models used to render this model as an item.
   Each of those models' render types will be queried via IForgeBakedModel.getRenderTypes(ItemStack, boolean).
  
   By default, returns the model itself.
- `@Nullable public @Nullable BakedModel getPart(String name)`
- `public static CompositeModel.Baked.Builder builder(IGeometryBakingContext owner,  TextureAtlasSprite particle,  ItemOverrides overrides,  ItemTransforms cameraTransforms)`
- `public static CompositeModel.Baked.Builder builder(boolean isAmbientOcclusion,  boolean isGui3d,  boolean isSideLit,  TextureAtlasSprite particle,  ItemOverrides overrides,  ItemTransforms cameraTransforms)`

### Inherited methods
- from `net.minecraftforge.client.model.IDynamicBakedModel`: `getQuads`
- from `net.minecraftforge.client.extensions.IForgeBakedModel`: `applyTransform`, `getParticleIcon`, `getRenderTypes`, `useAmbientOcclusion`, `useAmbientOcclusion`

## CompositeModel.Baked.Builder

*class* `net.minecraftforge.client.model.CompositeModel.Baked.Builder`

Enclosing class: CompositeModel.Baked

### Fields
- `private final boolean isAmbientOcclusion`
- `private final boolean isGui3d`
- `private final boolean isSideLit`
- `private final List<BakedModel> children`
- `private final List<BakedQuad> quads`
- `private final ItemOverrides overrides`
- `private final ItemTransforms transforms`
- `private TextureAtlasSprite particle`
- `private RenderTypeGroup lastRenderTypes`

### Methods
- `public void addLayer(BakedModel model)`
- `private void addLayer(RenderTypeGroup renderTypes,  List<BakedQuad> quads)`
- `private void flushQuads(RenderTypeGroup renderTypes)`
- `public CompositeModel.Baked.Builder setParticle(TextureAtlasSprite particleSprite)`
- `public CompositeModel.Baked.Builder addQuads(RenderTypeGroup renderTypes,  BakedQuad... quadsToAdd)`
- `public CompositeModel.Baked.Builder addQuads(RenderTypeGroup renderTypes,  Collection<BakedQuad> quadsToAdd)`
- `public BakedModel build()`

## CompositeModel.Data

*class* `net.minecraftforge.client.model.CompositeModel.Data`

A model data container which stores data for child components.

Enclosing class: CompositeModel

### Fields
- `public static final ModelProperty<CompositeModel.Data> PROPERTY`
- `private final Map<String,ModelData> partData`

### Methods
- `@Nullable public @Nullable ModelData get(String name)`
- `public static ModelData resolve(ModelData modelData,  String name)`
  Helper to get the data from a ModelData instance.
  - param: modelData - The object to get data from
  - param: name - The name of the part to get data for
  - returns: The data for the part, or the one passed in if not found
- `public static CompositeModel.Data.Builder builder()`

## CompositeModel.Data.Builder

*class* `net.minecraftforge.client.model.CompositeModel.Data.Builder`

Enclosing class: CompositeModel.Data

### Fields
- `private final Map<String,ModelData> partData`

### Methods
- `public CompositeModel.Data.Builder with(String name,  ModelData data)`
- `public CompositeModel.Data build()`

## CompositeModel.Loader

*class* `net.minecraftforge.client.model.CompositeModel.Loader`

Enclosing class: CompositeModel

### Fields
- `public static final CompositeModel.Loader INSTANCE`

### Methods
- `public CompositeModel read(com.google.gson.JsonObject jsonObject,  com.google.gson.JsonDeserializationContext deserializationContext)`
- `private void readChildren(com.google.gson.JsonObject jsonObject,  String name,  com.google.gson.JsonDeserializationContext deserializationContext,  com.google.common.collect.ImmutableMap.Builder<String,BlockModel> children,  List<String> itemPasses)`

## DynamicFluidContainerModel

*class* `net.minecraftforge.client.model.DynamicFluidContainerModel`

A dynamic fluid container model, capable of re-texturing itself at runtime to match the contained fluid.

 Composed of a base layer, a fluid layer (applied with a mask) and a cover layer (optionally applied with a mask).
 The entire model may optionally be flipped if the fluid is gaseous, and the fluid layer may glow if light-emitting.

 Fluid tinting requires registering a separate ItemColor. An implementation is provided in DynamicFluidContainerModel.Colors.

### Fields
- `private static final Transformation FLUID_TRANSFORM`
- `private static final Transformation COVER_TRANSFORM`
- `private final Fluid fluid`
- `private final boolean flipGas`
- `private final boolean coverIsMask`
- `private final boolean applyFluidLuminosity`

### Methods
- `public static RenderTypeGroup getLayerRenderTypes(boolean unlit)`
- `public DynamicFluidContainerModel withFluid(Fluid newFluid)`
  Returns a new ModelDynBucket representing the given fluid, but with the same
   other properties (flipGas, tint, coverIsMask).
- `public BakedModel bake(IGeometryBakingContext context,  ModelBaker baker,  Function<Material,TextureAtlasSprite> spriteGetter,  ModelState modelState,  ItemOverrides overrides,  ResourceLocation modelLocation)`

### Inherited methods
- from `net.minecraftforge.client.model.geometry.IUnbakedGeometry`: `getConfigurableComponentNames`, `resolveParents`

## DynamicFluidContainerModel.Colors

*class* `net.minecraftforge.client.model.DynamicFluidContainerModel.Colors`

Enclosing class: DynamicFluidContainerModel

### Methods
- `public int getColor(@NotNull  @NotNull ItemStack stack,  int tintIndex)`

## DynamicFluidContainerModel.ContainedFluidOverrideHandler

*class* `net.minecraftforge.client.model.DynamicFluidContainerModel.ContainedFluidOverrideHandler`

Enclosing class: DynamicFluidContainerModel

### Fields
- `private final Map<String,BakedModel> cache`
- `private final ItemOverrides nested`
- `private final ModelBaker baker`
- `private final IGeometryBakingContext owner`
- `private final DynamicFluidContainerModel parent`

### Inherited fields
- from `net.minecraft.client.renderer.block.model.ItemOverrides`: `EMPTY`, `NO_OVERRIDE`

### Methods
- `public BakedModel resolve(BakedModel originalModel,  ItemStack stack,  @Nullable  @Nullable ClientLevel level,  @Nullable  @Nullable LivingEntity entity,  int seed)`

### Inherited methods
- from `net.minecraft.client.renderer.block.model.ItemOverrides`: `getOverrides`

## DynamicFluidContainerModel.Loader

*class* `net.minecraftforge.client.model.DynamicFluidContainerModel.Loader`

Enclosing class: DynamicFluidContainerModel

### Fields
- `public static final DynamicFluidContainerModel.Loader INSTANCE`

### Methods
- `public DynamicFluidContainerModel read(com.google.gson.JsonObject jsonObject,  com.google.gson.JsonDeserializationContext deserializationContext)`

## ElementsModel

*class* `net.minecraftforge.client.model.ElementsModel`

A model composed of vanilla block elements.

### Fields
- `private final List<BlockElement> elements`

### Methods
- `protected void addQuads(IGeometryBakingContext context,  IModelBuilder<?> modelBuilder,  ModelBaker baker,  Function<Material,TextureAtlasSprite> spriteGetter,  ModelState modelState,  ResourceLocation modelLocation)`

### Inherited methods
- from `net.minecraftforge.client.model.geometry.SimpleUnbakedGeometry`: `bake`
- from `net.minecraftforge.client.model.geometry.IUnbakedGeometry`: `getConfigurableComponentNames`, `resolveParents`

## ElementsModel.Loader

*class* `net.minecraftforge.client.model.ElementsModel.Loader`

Enclosing class: ElementsModel

### Fields
- `public static final ElementsModel.Loader INSTANCE`

### Methods
- `public ElementsModel read(com.google.gson.JsonObject jsonObject,  com.google.gson.JsonDeserializationContext deserializationContext)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException

## EmptyModel

*class* `net.minecraftforge.client.model.EmptyModel`

A completely empty model with no quads or texture dependencies.

 You can access it as a BakedModel, an IUnbakedGeometry or an IGeometryLoader.

### Fields
- `public static final BakedModel BAKED`
- `public static final EmptyModel INSTANCE`
- `public static final IGeometryLoader<EmptyModel> LOADER`

### Methods
- `protected void addQuads(IGeometryBakingContext owner,  IModelBuilder<?> modelBuilder,  ModelBaker baker,  Function<Material,TextureAtlasSprite> spriteGetter,  ModelState modelTransform,  ResourceLocation modelLocation)`
- `public BakedModel bake(IGeometryBakingContext context,  ModelBaker baker,  Function<Material,TextureAtlasSprite> spriteGetter,  ModelState modelState,  ItemOverrides overrides,  ResourceLocation modelLocation)`

### Inherited methods
- from `net.minecraftforge.client.model.geometry.IUnbakedGeometry`: `getConfigurableComponentNames`, `resolveParents`

## EmptyModel.Baked

*class* `net.minecraftforge.client.model.EmptyModel.Baked`

Enclosing class: EmptyModel

### Fields
- `private static final Material MISSING_TEXTURE`

### Inherited fields
- from `net.minecraft.client.resources.model.SimpleBakedModel`: `blockRenderTypes`, `culledFaces`, `fabulousItemRenderTypes`, `hasAmbientOcclusion`, `isGui3d`, `itemRenderTypes`, `overrides`, `particleIcon`, `transforms`, `unculledFaces`, `usesBlockLight`

### Methods
- `public TextureAtlasSprite getParticleIcon()`

### Inherited methods
- from `net.minecraft.client.resources.model.SimpleBakedModel`: `getOverrides`, `getQuads`, `getRenderTypes`, `getRenderTypes`, `getTransforms`, `isCustomRenderer`, `isGui3d`, `useAmbientOcclusion`, `usesBlockLight`
- from `net.minecraftforge.client.extensions.IForgeBakedModel`: `applyTransform`, `getModelData`, `getParticleIcon`, `getQuads`, `getRenderPasses`, `useAmbientOcclusion`, `useAmbientOcclusion`

## ExtendedBlockModelDeserializer

*class* `net.minecraftforge.client.model.ExtendedBlockModelDeserializer`

A version of BlockModel.Deserializer capable of deserializing models with custom loaders, as well as other
 changes introduced to the spec by Forge.

### Fields
- `public static final com.google.gson.Gson INSTANCE`

### Methods
- `public BlockModel deserialize(com.google.gson.JsonElement element,  Type targetType,  com.google.gson.JsonDeserializationContext deserializationContext)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException
- `@Nullable public static @Nullable IUnbakedGeometry<?> deserializeGeometry(com.google.gson.JsonDeserializationContext deserializationContext,  com.google.gson.JsonObject object)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException

### Inherited methods
- from `net.minecraft.client.renderer.block.model.BlockModel.Deserializer`: `getAmbientOcclusion`, `getElements`, `getOverrides`

## ForgeFaceData

*record* `net.minecraftforge.client.model.ForgeFaceData`

Holds extra data that may be injected into a face.
 Used by ItemLayerModel, BlockElement and BlockElementFace

### Fields
- `private final int color`
  The field for the color record component.
- `private final int blockLight`
  The field for the blockLight record component.
- `private final int skyLight`
  The field for the skyLight record component.
- `private final boolean ambientOcclusion`
  The field for the ambientOcclusion record component.
- `private final boolean calculateNormals`
  The field for the calculateNormals record component.
- `public static final ForgeFaceData DEFAULT`
- `public static final com.mojang.serialization.Codec<Integer> COLOR`
- `public static final com.mojang.serialization.Codec<ForgeFaceData> CODEC`

### Methods
- `@Nullable public static ForgeFaceData read(@Nullable  com.google.gson.JsonElement obj,  @Nullable  ForgeFaceData fallback)  throws com.google.gson.JsonParseException`
  Parses a ForgeFaceData from JSON
  - param: obj - The JsonObject to parse from, weakly-typed to JsonElement to reduce logic complexity.
  - param: fallback - What to return if the first parameter is null.
  - returns: The parsed ForgeFaceData, or the fallback parameter if the first parmeter is null.
  - throws: com.google.gson.JsonParseException
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int color()`
  Returns the value of the color record component.
  - returns: the value of the color record component
- `public int blockLight()`
  Returns the value of the blockLight record component.
  - returns: the value of the blockLight record component
- `public int skyLight()`
  Returns the value of the skyLight record component.
  - returns: the value of the skyLight record component
- `public boolean ambientOcclusion()`
  Returns the value of the ambientOcclusion record component.
  - returns: the value of the ambientOcclusion record component
- `public boolean calculateNormals()`
  Returns the value of the calculateNormals record component.
  - returns: the value of the calculateNormals record component

## ForgeItemModelShaper

*class* `net.minecraftforge.client.model.ForgeItemModelShaper`

Wrapper around ItemModelShaper that cleans up the internal maps to respect ID remapping.

### Fields
- `private final Map<Holder.Reference<Item>,ModelResourceLocation> locations`
- `private final Map<Holder.Reference<Item>,BakedModel> models`

### Inherited fields
- from `net.minecraft.client.renderer.ItemModelShaper`: `shapes`

### Methods
- `@Nullable public @Nullable BakedModel getItemModel(Item item)`
- `public void register(Item item,  ModelResourceLocation location)`
- `public void rebuildCache()`
- `public ModelResourceLocation getLocation(@NotNull  @NotNull ItemStack stack)`

### Inherited methods
- from `net.minecraft.client.renderer.ItemModelShaper`: `getItemModel`, `getModelManager`

## IDynamicBakedModel

*interface* `net.minecraftforge.client.model.IDynamicBakedModel`

Convenience interface with default implementation of IForgeBakedModel.getQuads(BlockState, Direction, RandomSource, ModelData, RenderType).

All Superinterfaces: BakedModel, IForgeBakedModel

### Methods
- `@NotNull default @NotNull List<BakedQuad> getQuads(@Nullable  @Nullable BlockState state,  @Nullable  @Nullable Direction side,  @NotNull  @NotNull RandomSource rand)`
- `@NotNull @NotNull List<BakedQuad> getQuads(@Nullable  @Nullable BlockState state,  @Nullable  @Nullable Direction side,  @NotNull  @NotNull RandomSource rand,  @NotNull  @NotNull ModelData extraData,  @Nullable  @Nullable RenderType renderType)`
  Description copied from interface: IForgeBakedModel
  A null RenderType is used for the breaking overlay as well as non-standard rendering, so models should return all their quads.

### Inherited methods
- from `net.minecraft.client.resources.model.BakedModel`: `getOverrides`, `getParticleIcon`, `getTransforms`, `isCustomRenderer`, `isGui3d`, `useAmbientOcclusion`, `usesBlockLight`
- from `net.minecraftforge.client.extensions.IForgeBakedModel`: `applyTransform`, `getModelData`, `getParticleIcon`, `getRenderPasses`, `getRenderTypes`, `getRenderTypes`, `useAmbientOcclusion`, `useAmbientOcclusion`

## IModelBuilder.Collecting

*class* `net.minecraftforge.client.model.IModelBuilder.Collecting`

Enclosing interface: IModelBuilder<T extends IModelBuilder<T>>

### Fields
- `private final List<BakedQuad> quads`

### Methods
- `public IModelBuilder.Collecting addCulledFace(Direction facing,  BakedQuad quad)`
- `public IModelBuilder.Collecting addUnculledFace(BakedQuad quad)`
- `public BakedModel build()`

## IModelBuilder.Simple

*class* `net.minecraftforge.client.model.IModelBuilder.Simple`

Enclosing interface: IModelBuilder<T extends IModelBuilder<T>>

### Fields
- `private final SimpleBakedModel.Builder builder`
- `private final RenderTypeGroup renderTypes`

### Methods
- `public IModelBuilder.Simple addCulledFace(Direction facing,  BakedQuad quad)`
- `public IModelBuilder.Simple addUnculledFace(BakedQuad quad)`
- `@Deprecated public BakedModel build()` (deprecated)

## IModelBuilder>

*interface* `net.minecraftforge.client.model.IModelBuilder>`

Base interface for any object that collects culled and unculled faces and bakes them into a model.

 Provides a generic base implementation via of(boolean, boolean, boolean, ItemTransforms, ItemOverrides, TextureAtlasSprite, RenderTypeGroup)
 and a quad-collecting alternative via collecting(List).

### Methods
- `static IModelBuilder<?> of(boolean hasAmbientOcclusion,  boolean usesBlockLight,  boolean isGui3d,  ItemTransforms transforms,  ItemOverrides overrides,  TextureAtlasSprite particle,  RenderTypeGroup renderTypes)`
  Creates a new model builder that uses the provided attributes in the final baked model.
- `static IModelBuilder<?> collecting(List<BakedQuad> quads)`
  Creates a new model builder that collects quads to the provided list, returning
   an empty model if you call build().
- `T addCulledFace(Direction facing,  BakedQuad quad)`
- `T addUnculledFace(BakedQuad quad)`
- `BakedModel build()`

## IQuadTransformer

*interface* `net.minecraftforge.client.model.IQuadTransformer`

Transformer for baked quads.

### Fields
- `static final int STRIDE`
- `static final int POSITION`
- `static final int COLOR`
- `static final int UV0`
- `static final int UV1`
- `static final int UV2`
- `static final int NORMAL`

### Methods
- `void processInPlace(BakedQuad quad)`
- `default void processInPlace(List<BakedQuad> quads)`
- `default BakedQuad process(BakedQuad quad)`
- `default List<BakedQuad> process(List<BakedQuad> inputs)`
- `default IQuadTransformer andThen(IQuadTransformer other)`
- `private static BakedQuad copy(BakedQuad quad)`
- `private static int findOffset(VertexFormatElement element)`

## ItemLayerModel

*class* `net.minecraftforge.client.model.ItemLayerModel`

Forge reimplementation of vanilla's ItemModelGenerator, i.e. builtin/generated models with some tweaks:
 - Represented as IUnbakedGeometry so it can be baked as usual instead of being special-cased
 - Not limited to an arbitrary number of layers (5)
 - Support for per-layer render types

### Fields
- `@Nullable private @Nullable com.google.common.collect.ImmutableList<Material> textures`
- `private final it.unimi.dsi.fastutil.ints.Int2ObjectMap<ForgeFaceData> layerData`
- `private final it.unimi.dsi.fastutil.ints.Int2ObjectMap<ResourceLocation> renderTypeNames`

### Methods
- `public BakedModel bake(IGeometryBakingContext context,  ModelBaker baker,  Function<Material,TextureAtlasSprite> spriteGetter,  ModelState modelState,  ItemOverrides overrides,  ResourceLocation modelLocation)`

### Inherited methods
- from `net.minecraftforge.client.model.geometry.IUnbakedGeometry`: `getConfigurableComponentNames`, `resolveParents`

## ItemLayerModel.Loader

*class* `net.minecraftforge.client.model.ItemLayerModel.Loader`

Enclosing class: ItemLayerModel

### Fields
- `public static final ItemLayerModel.Loader INSTANCE`

### Methods
- `public ItemLayerModel read(com.google.gson.JsonObject jsonObject,  com.google.gson.JsonDeserializationContext deserializationContext)`
- `protected void readLayerData(com.google.gson.JsonObject jsonObject,  String name,  it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap<ResourceLocation> renderTypeNames,  it.unimi.dsi.fastutil.ints.Int2ObjectMap<ForgeFaceData> layerData,  boolean logWarning)`

## QuadTransformers

*class* `net.minecraftforge.client.model.QuadTransformers`

A collection of IQuadTransformer implementations.

### Fields
- `private static final IQuadTransformer EMPTY`
- `private static final IQuadTransformer[] EMISSIVE_TRANSFORMERS`

### Methods
- `public static IQuadTransformer empty()`
  Returns a BakedQuad transformer that does nothing.
  - returns: a BakedQuad transformer that does nothing
- `public static IQuadTransformer applying(Transformation transform)`
  Returns a new BakedQuad transformer that applies the specified Transformation.
  - returns: a new BakedQuad transformer that applies the specified Transformation
- `public static IQuadTransformer applyingLightmap(int packedLight)`
  - returns: A new BakedQuad transformer that applies the specified packed light value.
- `public static IQuadTransformer applyingLightmap(int blockLight,  int skyLight)`
  - returns: A new BakedQuad transformer that applies the specified block and sky light values.
- `public static IQuadTransformer settingEmissivity(int emissivity)`
  - returns: A BakedQuad transformer that sets the lightmap to the given emissivity (0-15)
- `public static IQuadTransformer settingMaxEmissivity()`
  - returns: A BakedQuad transformer that sets the lightmap to its max value
- `public static IQuadTransformer applyingColor(int color)`
  - param: color - The color in ARGB format.
  - returns: A BakedQuad transformer that sets the color to the specified value.
- `public static IQuadTransformer applyingColor(int red,  int green,  int blue)`
  This method supplies a default alpha value of 255 (no transparency)
  - param: red - The red value (0-255)
  - param: green - The green value (0-255)
  - param: blue - The blue value (0-255)
  - returns: A BakedQuad transformer that sets the color to the specified value.
- `public static IQuadTransformer applyingColor(int alpha,  int red,  int green,  int blue)`
  - param: alpha - The alpha value (0-255)
  - param: red - The red value (0-255)
  - param: green - The green value (0-255)
  - param: blue - The blue value (0-255)
  - returns: A BakedQuad transformer that sets the color to the specified value.
- `public static int toABGR(int argb)`
  Converts an ARGB color to an ABGR color, as the commonly used color format is not the format colors end up packed into.
   This function doubles as its own inverse.
  - param: color - ARGB color
  - returns: ABGR color

## SeparateTransformsModel

*class* `net.minecraftforge.client.model.SeparateTransformsModel`

A model composed of multiple sub-models which are picked based on the ItemDisplayContext being used.

### Fields
- `private final BlockModel baseModel`
- `private final com.google.common.collect.ImmutableMap<ItemDisplayContext,BlockModel> perspectives`

### Methods
- `public BakedModel bake(IGeometryBakingContext context,  ModelBaker baker,  Function<Material,TextureAtlasSprite> spriteGetter,  ModelState modelState,  ItemOverrides overrides,  ResourceLocation modelLocation)`
- `public void resolveParents(Function<ResourceLocation,UnbakedModel> modelGetter,  IGeometryBakingContext context)`
  Description copied from interface: IUnbakedGeometry
  Resolve parents of nested BlockModels which are later used in
   IUnbakedGeometry.bake(IGeometryBakingContext, ModelBaker, Function, ModelState, ItemOverrides, ResourceLocation)
   via BlockModel.resolveParents(Function)

### Inherited methods
- from `net.minecraftforge.client.model.geometry.IUnbakedGeometry`: `getConfigurableComponentNames`

## SeparateTransformsModel.Baked

*class* `net.minecraftforge.client.model.SeparateTransformsModel.Baked`

Enclosing class: SeparateTransformsModel

### Fields
- `private final boolean isAmbientOcclusion`
- `private final boolean isGui3d`
- `private final boolean isSideLit`
- `private final TextureAtlasSprite particle`
- `private final ItemOverrides overrides`
- `private final BakedModel baseModel`
- `private final com.google.common.collect.ImmutableMap<ItemDisplayContext,BakedModel> perspectives`

### Methods
- `@NotNull public @NotNull List<BakedQuad> getQuads(@Nullable  @Nullable BlockState state,  @Nullable  @Nullable Direction side,  @NotNull  @NotNull RandomSource rand,  @NotNull  @NotNull ModelData data,  @Nullable  @Nullable RenderType renderType)`
  Description copied from interface: IForgeBakedModel
  A null RenderType is used for the breaking overlay as well as non-standard rendering, so models should return all their quads.
- `public boolean useAmbientOcclusion()`
- `public boolean isGui3d()`
- `public boolean usesBlockLight()`
- `public boolean isCustomRenderer()`
- `public TextureAtlasSprite getParticleIcon()`
- `public ItemOverrides getOverrides()`
- `public ItemTransforms getTransforms()`
- `public BakedModel applyTransform(ItemDisplayContext cameraTransformType,  PoseStack poseStack,  boolean applyLeftHandTransform)`
  Description copied from interface: IForgeBakedModel
  Applies a transform for the given ItemTransforms.TransformType and applyLeftHandTransform, and
   returns the model to be rendered.
- `public ChunkRenderTypeSet getRenderTypes(@NotNull  @NotNull BlockState state,  @NotNull  @NotNull RandomSource rand,  @NotNull  @NotNull ModelData data)`
  Description copied from interface: IForgeBakedModel
  Gets the set of render types to use when drawing this block in the level.
   Supported types are those returned by RenderType.chunkBufferLayers().
  
   By default, defers query to ItemBlockRenderTypes.

### Inherited methods
- from `net.minecraftforge.client.model.IDynamicBakedModel`: `getQuads`
- from `net.minecraftforge.client.extensions.IForgeBakedModel`: `getModelData`, `getParticleIcon`, `getRenderPasses`, `getRenderTypes`, `useAmbientOcclusion`, `useAmbientOcclusion`

## SeparateTransformsModel.Loader

*class* `net.minecraftforge.client.model.SeparateTransformsModel.Loader`

Enclosing class: SeparateTransformsModel

### Fields
- `public static final SeparateTransformsModel.Loader INSTANCE`

### Methods
- `public SeparateTransformsModel read(com.google.gson.JsonObject jsonObject,  com.google.gson.JsonDeserializationContext deserializationContext)`

## SimpleModelState

*class* `net.minecraftforge.client.model.SimpleModelState`

Simple implementation of ModelState.

### Fields
- `private final Transformation transformation`
- `private final boolean uvLocked`

### Methods
- `public Transformation getRotation()`
- `public boolean isUvLocked()`
