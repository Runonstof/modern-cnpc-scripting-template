# net.minecraftforge.client.model.generators.loaders

- [CompositeModelBuilder>](#compositemodelbuilder)
- [DynamicFluidContainerModelBuilder>](#dynamicfluidcontainermodelbuilder)
- [ItemLayerModelBuilder>](#itemlayermodelbuilder)
- [ObjModelBuilder>](#objmodelbuilder)
- [SeparateTransformsModelBuilder>](#separatetransformsmodelbuilder)
## CompositeModelBuilder>

*class* `net.minecraftforge.client.model.generators.loaders.CompositeModelBuilder>`

### Fields
- `private final Map<String,T extends ModelBuilder<T>> childModels`
- `private final List<String> itemRenderOrder`

### Inherited fields
- from `net.minecraftforge.client.model.generators.CustomLoaderBuilder`: `existingFileHelper`, `loaderId`, `parent`, `visibility`

### Methods
- `public static <T extends ModelBuilder<T>> CompositeModelBuilder<T> begin(T parent,  ExistingFileHelper existingFileHelper)`
- `public CompositeModelBuilder<T> child(String name,  T modelBuilder)`
- `public CompositeModelBuilder<T> itemRenderOrder(String... names)`
- `public com.google.gson.JsonObject toJson(com.google.gson.JsonObject json)`

### Inherited methods
- from `net.minecraftforge.client.model.generators.CustomLoaderBuilder`: `end`, `visibility`

## DynamicFluidContainerModelBuilder>

*class* `net.minecraftforge.client.model.generators.loaders.DynamicFluidContainerModelBuilder>`

### Fields
- `private ResourceLocation fluid`
- `private Boolean flipGas`
- `private Boolean applyTint`
- `private Boolean coverIsMask`
- `private Boolean applyFluidLuminosity`

### Inherited fields
- from `net.minecraftforge.client.model.generators.CustomLoaderBuilder`: `existingFileHelper`, `loaderId`, `parent`, `visibility`

### Methods
- `public static <T extends ModelBuilder<T>> DynamicFluidContainerModelBuilder<T> begin(T parent,  ExistingFileHelper existingFileHelper)`
- `public DynamicFluidContainerModelBuilder<T> fluid(Fluid fluid)`
- `public DynamicFluidContainerModelBuilder<T> flipGas(boolean flip)`
- `public DynamicFluidContainerModelBuilder<T> applyTint(boolean tint)`
- `public DynamicFluidContainerModelBuilder<T> coverIsMask(boolean coverIsMask)`
- `public DynamicFluidContainerModelBuilder<T> applyFluidLuminosity(boolean applyFluidLuminosity)`
- `public com.google.gson.JsonObject toJson(com.google.gson.JsonObject json)`

### Inherited methods
- from `net.minecraftforge.client.model.generators.CustomLoaderBuilder`: `end`, `visibility`

## ItemLayerModelBuilder>

*class* `net.minecraftforge.client.model.generators.loaders.ItemLayerModelBuilder>`

### Fields
- `private final it.unimi.dsi.fastutil.ints.Int2ObjectMap<ForgeFaceData> faceData`
- `private final Map<ResourceLocation,it.unimi.dsi.fastutil.ints.IntSet> renderTypes`
- `private final it.unimi.dsi.fastutil.ints.IntSet layersWithRenderTypes`

### Inherited fields
- from `net.minecraftforge.client.model.generators.CustomLoaderBuilder`: `existingFileHelper`, `loaderId`, `parent`, `visibility`

### Methods
- `public static <T extends ModelBuilder<T>> ItemLayerModelBuilder<T> begin(T parent,  ExistingFileHelper existingFileHelper)`
- `public ItemLayerModelBuilder<T> emissive(int blockLight,  int skyLight,  int... layers)`
  Marks a set of layers to be rendered emissively.
  - param: blockLight - The block light (0-15)
  - param: skyLight - The sky light (0-15)
  - param: layers - the layers that will render unlit
  - returns: this builder
  - throws: NullPointerException - if layers is null
  - throws: IllegalArgumentException - if layers is empty
  - throws: IllegalArgumentException - if any entry in layers is smaller than 0
- `public ItemLayerModelBuilder<T> color(int color,  int... layers)`
  Marks a set of layers to be rendered with a specific color.
  - param: color - The color, in ARGB.
  - param: layers - the layers that will render with color
  - returns: this builder
  - throws: NullPointerException - if layers is null
  - throws: IllegalArgumentException - if layers is empty
  - throws: IllegalArgumentException - if any entry in layers is smaller than 0
- `public ItemLayerModelBuilder<T> renderType(String renderType,  int... layers)`
  Set the render type for a set of layers.
  - param: renderType - the render type. Must be registered via
 RegisterNamedRenderTypesEvent
  - param: layers - the layers that will use this render type
  - returns: this builder
  - throws: NullPointerException - if renderType is null
  - throws: NullPointerException - if layers is null
  - throws: IllegalArgumentException - if layers is empty
  - throws: IllegalArgumentException - if any entry in layers is smaller than 0
  - throws: IllegalArgumentException - if any entry in layers already has a render type
- `public ItemLayerModelBuilder<T> renderType(ResourceLocation renderType,  int... layers)`
  Set the render type for a set of layers.
  - param: renderType - the render type. Must be registered via
 RegisterNamedRenderTypesEvent
  - param: layers - the layers that will use this render type
  - returns: this builder
  - throws: NullPointerException - if renderType is null
  - throws: NullPointerException - if layers is null
  - throws: IllegalArgumentException - if layers is empty
  - throws: IllegalArgumentException - if any entry in layers is smaller than 0
  - throws: IllegalArgumentException - if any entry in layers already has a render type
- `public com.google.gson.JsonObject toJson(com.google.gson.JsonObject json)`

### Inherited methods
- from `net.minecraftforge.client.model.generators.CustomLoaderBuilder`: `end`, `visibility`

## ObjModelBuilder>

*class* `net.minecraftforge.client.model.generators.loaders.ObjModelBuilder>`

### Fields
- `private ResourceLocation modelLocation`
- `private Boolean automaticCulling`
- `private Boolean shadeQuads`
- `private Boolean flipV`
- `private Boolean emissiveAmbient`
- `private ResourceLocation mtlOverride`

### Inherited fields
- from `net.minecraftforge.client.model.generators.CustomLoaderBuilder`: `existingFileHelper`, `loaderId`, `parent`, `visibility`

### Methods
- `public static <T extends ModelBuilder<T>> ObjModelBuilder<T> begin(T parent,  ExistingFileHelper existingFileHelper)`
- `public ObjModelBuilder<T> modelLocation(ResourceLocation modelLocation)`
- `public ObjModelBuilder<T> automaticCulling(boolean automaticCulling)`
- `public ObjModelBuilder<T> shadeQuads(boolean shadeQuads)`
- `public ObjModelBuilder<T> flipV(boolean flipV)`
- `public ObjModelBuilder<T> emissiveAmbient(boolean ambientEmissive)`
- `public ObjModelBuilder<T> overrideMaterialLibrary(ResourceLocation mtlOverride)`
- `public com.google.gson.JsonObject toJson(com.google.gson.JsonObject json)`

### Inherited methods
- from `net.minecraftforge.client.model.generators.CustomLoaderBuilder`: `end`, `visibility`

## SeparateTransformsModelBuilder>

*class* `net.minecraftforge.client.model.generators.loaders.SeparateTransformsModelBuilder>`

### Fields
- `private T extends ModelBuilder<T> base`
- `private final Map<String,T extends ModelBuilder<T>> childModels`

### Inherited fields
- from `net.minecraftforge.client.model.generators.CustomLoaderBuilder`: `existingFileHelper`, `loaderId`, `parent`, `visibility`

### Methods
- `public static <T extends ModelBuilder<T>> SeparateTransformsModelBuilder<T> begin(T parent,  ExistingFileHelper existingFileHelper)`
- `public SeparateTransformsModelBuilder<T> base(T modelBuilder)`
- `public SeparateTransformsModelBuilder<T> perspective(ItemDisplayContext perspective,  T modelBuilder)`
- `public com.google.gson.JsonObject toJson(com.google.gson.JsonObject json)`

### Inherited methods
- from `net.minecraftforge.client.model.generators.CustomLoaderBuilder`: `end`, `visibility`
