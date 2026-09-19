# net.minecraftforge.client.model.geometry

- [BlockGeometryBakingContext](#blockgeometrybakingcontext)
- [BlockGeometryBakingContext.VisibilityData](#blockgeometrybakingcontext.visibilitydata)
- [GeometryLoaderManager](#geometryloadermanager)
- [IGeometryBakingContext](#igeometrybakingcontext)
- [IGeometryLoader>](#igeometryloader)
- [IUnbakedGeometry>](#iunbakedgeometry)
- [SimpleUnbakedGeometry>](#simpleunbakedgeometry)
- [StandaloneGeometryBakingContext](#standalonegeometrybakingcontext)
- [StandaloneGeometryBakingContext.Builder](#standalonegeometrybakingcontext.builder)
- [UnbakedGeometryHelper](#unbakedgeometryhelper)
## BlockGeometryBakingContext

*class* `net.minecraftforge.client.model.geometry.BlockGeometryBakingContext`

A geometry baking context that is bound to a BlockModel.

 Users should not be instantiating this themselves.

### Fields
- `public final BlockModel owner`
- `public final BlockGeometryBakingContext.VisibilityData visibilityData`
- `@Nullable private @Nullable IUnbakedGeometry<?> customGeometry`
- `@Nullable private @Nullable Transformation rootTransform`
- `@Nullable private @Nullable ResourceLocation renderTypeHint`
- `private boolean gui3d`

### Methods
- `public String getModelName()`
  Description copied from interface: IGeometryBakingContext
  Returns the name of the model being baked for logging and caching purposes..
  - returns: the name of the model being baked for logging and caching purposes.
- `public boolean hasCustomGeometry()`
- `@Nullable public @Nullable IUnbakedGeometry<?> getCustomGeometry()`
- `public void setCustomGeometry(IUnbakedGeometry<?> geometry)`
- `public boolean isComponentVisible(String part,  boolean fallback)`
  Description copied from interface: IGeometryBakingContext
  Queries the visibility of a component of this model.
  - param: part - The component for which to query visibility
  - param: fallback - The default visibility if an override isn't found
  - returns: The visibility of the component
- `public boolean hasMaterial(String name)`
  Description copied from interface: IGeometryBakingContext
  Checks if a material is present in the model.
  - param: name - The name of the material
  - returns: true if the material is present, false otherwise
- `public Material getMaterial(String name)`
  Description copied from interface: IGeometryBakingContext
  Resolves the final texture name, taking into account texture aliases and replacements.
  - param: name - The name of the material
  - returns: The material, or the missing texture if not found
- `public boolean isGui3d()`
  Description copied from interface: IGeometryBakingContext
  Returns true if this model should render in 3D in a GUI, false otherwise.
  - returns: true if this model should render in 3D in a GUI, false otherwise
- `public boolean useBlockLight()`
  Description copied from interface: IGeometryBakingContext
  Returns true if block lighting should be used for this model, false otherwise.
  - returns: true if block lighting should be used for this model, false otherwise
- `public boolean useAmbientOcclusion()`
  Description copied from interface: IGeometryBakingContext
  Returns true if per-vertex ambient occlusion should be used for this model, false otherwise.
  - returns: true if per-vertex ambient occlusion should be used for this model, false otherwise
- `public ItemTransforms getTransforms()`
  Description copied from interface: IGeometryBakingContext
  Returns the transforms for display in item form..
  - returns: the transforms for display in item form.
- `public Transformation getRootTransform()`
  Description copied from interface: IGeometryBakingContext
  Returns the root transformation to be applied to all variants of this model, regardless of item transforms..
  - returns: the root transformation to be applied to all variants of this model, regardless of item transforms.
- `public void setRootTransform(Transformation rootTransform)`
- `@Nullable public @Nullable ResourceLocation getRenderTypeHint()`
  Description copied from interface: IGeometryBakingContext
  Returns a hint of the render type this model should use. Custom loaders may ignore this..
  - returns: a hint of the render type this model should use. Custom loaders may ignore this.
- `public void setRenderTypeHint(ResourceLocation renderTypeHint)`
- `public void setGui3d(boolean gui3d)`
- `public void copyFrom(BlockGeometryBakingContext other)`
- `public BakedModel bake(ModelBaker baker,  Function<Material,TextureAtlasSprite> bakedTextureGetter,  ModelState modelTransform,  ItemOverrides overrides,  ResourceLocation modelLocation)`

### Inherited methods
- from `net.minecraftforge.client.model.geometry.IGeometryBakingContext`: `getRenderType`

## BlockGeometryBakingContext.VisibilityData

*class* `net.minecraftforge.client.model.geometry.BlockGeometryBakingContext.VisibilityData`

Enclosing class: BlockGeometryBakingContext

### Fields
- `private final Map<String,Boolean> data`

### Methods
- `public boolean hasCustomVisibility(String part)`
- `public boolean isVisible(String part,  boolean fallback)`
- `public void setVisibilityState(String partName,  boolean type)`
- `public void copyFrom(BlockGeometryBakingContext.VisibilityData visibilityData)`

## GeometryLoaderManager

*class* `net.minecraftforge.client.model.geometry.GeometryLoaderManager`

Manager for geometry loaders.

 Provides a lookup.

### Fields
- `private static com.google.common.collect.ImmutableMap<ResourceLocation,IGeometryLoader<?>> LOADERS`
- `private static String LOADER_LIST`

### Methods
- `@Nullable public static @Nullable IGeometryLoader<?> get(ResourceLocation name)`
  Finds the IGeometryLoader for a given name, or null if not found.
- `public static String getLoaderList()`
  Retrieves a comma-separated list of all active loaders, for use in error messages.
- `@Internal public static void init()`

## IGeometryBakingContext

*interface* `net.minecraftforge.client.model.geometry.IGeometryBakingContext`

The context in which a geometry is being baked, providing information such as lighting and
 transforms, and allowing the user to create materials and query
 render types.

### Methods
- `String getModelName()`
  Returns the name of the model being baked for logging and caching purposes..
  - returns: the name of the model being baked for logging and caching purposes.
- `boolean hasMaterial(String name)`
  Checks if a material is present in the model.
  - param: name - The name of the material
  - returns: true if the material is present, false otherwise
- `Material getMaterial(String name)`
  Resolves the final texture name, taking into account texture aliases and replacements.
  - param: name - The name of the material
  - returns: The material, or the missing texture if not found
- `boolean isGui3d()`
  Returns true if this model should render in 3D in a GUI, false otherwise.
  - returns: true if this model should render in 3D in a GUI, false otherwise
- `boolean useBlockLight()`
  Returns true if block lighting should be used for this model, false otherwise.
  - returns: true if block lighting should be used for this model, false otherwise
- `boolean useAmbientOcclusion()`
  Returns true if per-vertex ambient occlusion should be used for this model, false otherwise.
  - returns: true if per-vertex ambient occlusion should be used for this model, false otherwise
- `ItemTransforms getTransforms()`
  Returns the transforms for display in item form..
  - returns: the transforms for display in item form.
- `Transformation getRootTransform()`
  Returns the root transformation to be applied to all variants of this model, regardless of item transforms..
  - returns: the root transformation to be applied to all variants of this model, regardless of item transforms.
- `@Nullable @Nullable ResourceLocation getRenderTypeHint()`
  Returns a hint of the render type this model should use. Custom loaders may ignore this..
  - returns: a hint of the render type this model should use. Custom loaders may ignore this.
- `boolean isComponentVisible(String component,  boolean fallback)`
  Queries the visibility of a component of this model.
  - param: component - The component for which to query visibility
  - param: fallback - The default visibility if an override isn't found
  - returns: The visibility of the component
- `default RenderTypeGroup getRenderType(ResourceLocation name)`
  Returns a RenderTypeGroup with the given name, or the empty group if not found..
  - returns: a RenderTypeGroup with the given name, or the empty group if not found.

## IGeometryLoader>

*interface* `net.minecraftforge.client.model.geometry.IGeometryLoader>`

A loader for custom model geometries.

 If you do any caching, you should implement ResourceManagerReloadListener and register it with
 RegisterClientReloadListenersEvent.

### Methods
- `T read(com.google.gson.JsonObject jsonObject,  com.google.gson.JsonDeserializationContext deserializationContext) throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException

## IUnbakedGeometry>

*interface* `net.minecraftforge.client.model.geometry.IUnbakedGeometry>`

General interface for any model that can be baked, superset of vanilla UnbakedModel.

 Instances of this class ar usually created via IGeometryLoader.

### Methods
- `BakedModel bake(IGeometryBakingContext context,  ModelBaker baker,  Function<Material,TextureAtlasSprite> spriteGetter,  ModelState modelState,  ItemOverrides overrides,  ResourceLocation modelLocation)`
- `default void resolveParents(Function<ResourceLocation,UnbakedModel> modelGetter,  IGeometryBakingContext context)`
  Resolve parents of nested BlockModels which are later used in
   bake(IGeometryBakingContext, ModelBaker, Function, ModelState, ItemOverrides, ResourceLocation)
   via BlockModel.resolveParents(Function)
- `default Set<String> getConfigurableComponentNames()`
  Returns a set of all the components whose visibility may be configured via IGeometryBakingContext.
  - returns: a set of all the components whose visibility may be configured via IGeometryBakingContext

## SimpleUnbakedGeometry>

*class* `net.minecraftforge.client.model.geometry.SimpleUnbakedGeometry>`

Base class for implementations of IUnbakedGeometry which do not wish to handle model creation themselves,
 instead supplying baked quads through a builder.

### Methods
- `public BakedModel bake(IGeometryBakingContext context,  ModelBaker baker,  Function<Material,TextureAtlasSprite> spriteGetter,  ModelState modelState,  ItemOverrides overrides,  ResourceLocation modelLocation)`
- `protected abstract void addQuads(IGeometryBakingContext owner,  IModelBuilder<?> modelBuilder,  ModelBaker baker,  Function<Material,TextureAtlasSprite> spriteGetter,  ModelState modelTransform,  ResourceLocation modelLocation)`

### Inherited methods
- from `net.minecraftforge.client.model.geometry.IUnbakedGeometry`: `getConfigurableComponentNames`, `resolveParents`

## StandaloneGeometryBakingContext

*class* `net.minecraftforge.client.model.geometry.StandaloneGeometryBakingContext`

A geometry baking context that is not bound to block/item model loading.

### Fields
- `public static final ResourceLocation LOCATION`
- `public static final StandaloneGeometryBakingContext INSTANCE`
- `private final ResourceLocation modelName`
- `private final Predicate<String> materialCheck`
- `private final Function<String,Material> materialLookup`
- `private final boolean isGui3d`
- `private final boolean useBlockLight`
- `private final boolean useAmbientOcclusion`
- `private final ItemTransforms transforms`
- `private final Transformation rootTransform`
- `@Nullable private final @Nullable ResourceLocation renderTypeHint`
- `private final BiPredicate<String,Boolean> visibilityTest`

### Methods
- `public static StandaloneGeometryBakingContext create(ResourceLocation modelName)`
- `public static StandaloneGeometryBakingContext create(Map<String,ResourceLocation> textures)`
- `public static StandaloneGeometryBakingContext create(ResourceLocation modelName,  Map<String,ResourceLocation> textures)`
- `public String getModelName()`
  Description copied from interface: IGeometryBakingContext
  Returns the name of the model being baked for logging and caching purposes..
  - returns: the name of the model being baked for logging and caching purposes.
- `public boolean hasMaterial(String name)`
  Description copied from interface: IGeometryBakingContext
  Checks if a material is present in the model.
  - param: name - The name of the material
  - returns: true if the material is present, false otherwise
- `public Material getMaterial(String name)`
  Description copied from interface: IGeometryBakingContext
  Resolves the final texture name, taking into account texture aliases and replacements.
  - param: name - The name of the material
  - returns: The material, or the missing texture if not found
- `public boolean isGui3d()`
  Description copied from interface: IGeometryBakingContext
  Returns true if this model should render in 3D in a GUI, false otherwise.
  - returns: true if this model should render in 3D in a GUI, false otherwise
- `public boolean useBlockLight()`
  Description copied from interface: IGeometryBakingContext
  Returns true if block lighting should be used for this model, false otherwise.
  - returns: true if block lighting should be used for this model, false otherwise
- `public boolean useAmbientOcclusion()`
  Description copied from interface: IGeometryBakingContext
  Returns true if per-vertex ambient occlusion should be used for this model, false otherwise.
  - returns: true if per-vertex ambient occlusion should be used for this model, false otherwise
- `public ItemTransforms getTransforms()`
  Description copied from interface: IGeometryBakingContext
  Returns the transforms for display in item form..
  - returns: the transforms for display in item form.
- `public Transformation getRootTransform()`
  Description copied from interface: IGeometryBakingContext
  Returns the root transformation to be applied to all variants of this model, regardless of item transforms..
  - returns: the root transformation to be applied to all variants of this model, regardless of item transforms.
- `@Nullable public @Nullable ResourceLocation getRenderTypeHint()`
  Description copied from interface: IGeometryBakingContext
  Returns a hint of the render type this model should use. Custom loaders may ignore this..
  - returns: a hint of the render type this model should use. Custom loaders may ignore this.
- `public boolean isComponentVisible(String component,  boolean fallback)`
  Description copied from interface: IGeometryBakingContext
  Queries the visibility of a component of this model.
  - param: component - The component for which to query visibility
  - param: fallback - The default visibility if an override isn't found
  - returns: The visibility of the component
- `public static StandaloneGeometryBakingContext.Builder builder()`
- `public static StandaloneGeometryBakingContext.Builder builder(IGeometryBakingContext parent)`

### Inherited methods
- from `net.minecraftforge.client.model.geometry.IGeometryBakingContext`: `getRenderType`

## StandaloneGeometryBakingContext.Builder

*class* `net.minecraftforge.client.model.geometry.StandaloneGeometryBakingContext.Builder`

Enclosing class: StandaloneGeometryBakingContext

### Fields
- `private static final Material NO_MATERIAL`
- `private Predicate<String> materialCheck`
- `private Function<String,Material> materialLookup`
- `private boolean isGui3d`
- `private boolean useBlockLight`
- `private boolean useAmbientOcclusion`
- `private ItemTransforms transforms`
- `private Transformation rootTransform`
- `@Nullable private @Nullable ResourceLocation renderTypeHint`
- `private BiPredicate<String,Boolean> visibilityTest`

### Methods
- `public StandaloneGeometryBakingContext.Builder withTextures(Map<String,ResourceLocation> textures,  ResourceLocation defaultTexture)`
- `public StandaloneGeometryBakingContext.Builder withTextures(ResourceLocation atlasLocation,  Map<String,ResourceLocation> textures,  ResourceLocation defaultTexture)`
- `public StandaloneGeometryBakingContext.Builder withMaterials(Map<String,Material> materials,  Material defaultMaterial)`
- `public StandaloneGeometryBakingContext.Builder withGui3d(boolean isGui3d)`
- `public StandaloneGeometryBakingContext.Builder withUseBlockLight(boolean useBlockLight)`
- `public StandaloneGeometryBakingContext.Builder withUseAmbientOcclusion(boolean useAmbientOcclusion)`
- `public StandaloneGeometryBakingContext.Builder withTransforms(ItemTransforms transforms)`
- `public StandaloneGeometryBakingContext.Builder withRootTransform(Transformation rootTransform)`
- `public StandaloneGeometryBakingContext.Builder withRenderTypeHint(ResourceLocation renderTypeHint)`
- `public StandaloneGeometryBakingContext.Builder withVisibleComponents(it.unimi.dsi.fastutil.objects.Object2BooleanMap<String> parts)`
- `public StandaloneGeometryBakingContext build(ResourceLocation modelName)`

## UnbakedGeometryHelper

*class* `net.minecraftforge.client.model.geometry.UnbakedGeometryHelper`

Helper for dealing with unbaked models and geometries.

### Fields
- `private static final ItemModelGenerator ITEM_MODEL_GENERATOR`
- `private static final FaceBakery FACE_BAKERY`
- `private static final Pattern FILESYSTEM_PATH_TO_RESLOC`
  Explanation:
   This takes anything that looks like a valid resourcepack texture location, and tries to extract a resourcelocation out of it.
   1. it will ignore anything up to and including an /assets/ folder,
   2. it will take the next path component as a namespace,
   3. it will match but skip the /textures/ part of the path,
   4. it will take the rest of the path up to but excluding the .png extension as the resource path
   It's a best-effort situation, to allow model files exported by modelling software to be used without post-processing.
   Example:
   C:\Something\Or Other\src\main\resources\assets\mymodid\textures\item\my_thing.png
   ........................................--------_______----------_____________----
  
   Result after replacing '\' to '/': mymodid:item/my_thing

### Methods
- `public static Material resolveDirtyMaterial(@Nullable  @Nullable String tex,  IGeometryBakingContext owner)`
  Resolves a material that may have been defined with a filesystem path instead of a proper ResourceLocation.
  
   The target atlas will always be TextureAtlas.LOCATION_BLOCKS.
- `@Internal public static BakedModel bake(BlockModel blockModel,  ModelBaker modelBaker,  BlockModel owner,  Function<Material,TextureAtlasSprite> spriteGetter,  ModelState modelState,  ResourceLocation modelLocation,  boolean guiLight3d)`
  Helper for baking BlockModel instances. Handles baking custom geometries and deferring item model baking.
- `public static List<BlockElement> createUnbakedItemElements(int layerIndex,  SpriteContents spriteContents)`
- `public static List<BlockElement> createUnbakedItemElements(int layerIndex,  SpriteContents spriteContents,  @Nullable  @Nullable ForgeFaceData faceData)`
  Creates a list of block elements in the shape of the specified sprite contents.
   These can later be baked using the same, or another texture.
  
   The Direction.NORTH and Direction.SOUTH faces take up the whole surface.
- `public static List<BlockElement> createUnbakedItemMaskElements(int layerIndex,  SpriteContents spriteContents)`
- `public static List<BlockElement> createUnbakedItemMaskElements(int layerIndex,  SpriteContents spriteContents,  @Nullable  @Nullable ForgeFaceData faceData)`
  Creates a list of block elements in the shape of the specified sprite contents.
   These can later be baked using the same, or another texture.
  
   The Direction.NORTH and Direction.SOUTH faces take up only the pixels the texture uses.
- `public static void bakeElements(IModelBuilder<?> builder,  List<BlockElement> elements,  Function<Material,TextureAtlasSprite> spriteGetter,  ModelState modelState,  ResourceLocation modelLocation)`
  Bakes a list of block elements and feeds the baked quads to a model builder.
- `public static List<BakedQuad> bakeElements(List<BlockElement> elements,  Function<Material,TextureAtlasSprite> spriteGetter,  ModelState modelState,  ResourceLocation modelLocation)`
  Bakes a list of block elements and returns the list of baked quads.
- `public static BakedQuad bakeElementFace(BlockElement element,  BlockElementFace face,  TextureAtlasSprite sprite,  Direction direction,  ModelState state,  ResourceLocation modelLocation)`
  Turns a single BlockElementFace into a BakedQuad.
- `public static IQuadTransformer applyRootTransform(ModelState modelState,  Transformation rootTransform)`
  Create an IQuadTransformer to apply a Transformation that undoes the ModelState
   transform (blockstate transform), applies the given root transform and then re-applies the
   blockstate transform.
  - returns: an IQuadTransformer that applies the root transform to a baked quad that already has the
 transformation of the given ModelState applied to it
- `public static ModelState composeRootTransformIntoModelState(ModelState modelState,  Transformation rootTransform)`
  Returns a ModelState that combines the existing model state and the root transform.
  - returns: a ModelState that combines the existing model state and the root transform
