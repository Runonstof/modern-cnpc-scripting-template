# net.minecraftforge.client.model.data

- [ModelData](#modeldata)
- [ModelData.Builder](#modeldata.builder)
- [ModelDataManager](#modeldatamanager)
- [ModelProperty](#modelproperty)
- [MultipartModelData](#multipartmodeldata)
- [MultipartModelData.Builder](#multipartmodeldata.builder)
## ModelData

*class* `net.minecraftforge.client.model.data.ModelData`

A container for data to be passed to BakedModel instances.

 All objects stored in here MUST BE IMMUTABLE OR THREAD-SAFE.
 Properties will be accessed from another thread.

### Fields
- `public static final ModelData EMPTY`
- `private final Map<ModelProperty<?>,Object> properties`

### Methods
- `public Set<ModelProperty<?>> getProperties()`
- `public boolean has(ModelProperty<?> property)`
- `@Nullable public <T> T get(ModelProperty<T> property)`
- `public ModelData.Builder derive()`
- `public static ModelData.Builder builder()`

## ModelData.Builder

*class* `net.minecraftforge.client.model.data.ModelData.Builder`

Enclosing class: ModelData

### Fields
- `private final Map<ModelProperty<?>,Object> properties`

### Methods
- `@Contract("_, _ -> this") public <T> ModelData.Builder with(ModelProperty<T> property,  T value)`
- `@Contract("-> new") public ModelData build()`

## ModelDataManager

*class* `net.minecraftforge.client.model.data.ModelDataManager`

A manager for the lifecycle of all the ModelData instances in a Level.

 Users should not be instantiating or using this themselves unless they know what they're doing.

### Fields
- `private final Level level`
- `private final Map<ChunkPos,Set<BlockPos>> needModelDataRefresh`
- `private final Map<ChunkPos,Map<BlockPos,ModelData>> modelDataCache`

### Methods
- `public void requestRefresh(@NotNull  @NotNull BlockEntity blockEntity)`
- `private void refreshAt(ChunkPos chunk)`
- `@Nullable public @Nullable ModelData getAt(BlockPos pos)`
- `public Map<BlockPos,ModelData> getAt(ChunkPos pos)`
- `public static void onChunkUnload(ChunkEvent.Unload event)`

## ModelProperty

*class* `net.minecraftforge.client.model.data.ModelProperty`

A property to be used in ModelData.

 May optionally validate incoming values.

### Fields
- `private final Predicate<T> predicate`

### Methods
- `public boolean test(T value)`

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## MultipartModelData

*class* `net.minecraftforge.client.model.data.MultipartModelData`

### Fields
- `public static final ModelProperty<MultipartModelData> PROPERTY`
- `private final Map<BakedModel,ModelData> partData`

### Methods
- `@Nullable public @Nullable ModelData get(BakedModel model)`
- `public static ModelData resolve(ModelData modelData,  BakedModel model)`
  Helper to get the data from a ModelData instance.
  - param: modelData - The object to get data from
  - param: model - The model to get data for
  - returns: The data for the part, or the one passed in if not found
- `public static MultipartModelData.Builder builder()`

## MultipartModelData.Builder

*class* `net.minecraftforge.client.model.data.MultipartModelData.Builder`

Enclosing class: MultipartModelData

### Fields
- `private final Map<BakedModel,ModelData> partData`

### Methods
- `public MultipartModelData.Builder with(BakedModel model,  ModelData data)`
- `public MultipartModelData build()`
