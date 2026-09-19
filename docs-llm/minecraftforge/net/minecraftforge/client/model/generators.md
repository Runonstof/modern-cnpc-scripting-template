# net.minecraftforge.client.model.generators

- [BlockModelBuilder](#blockmodelbuilder)
- [BlockModelProvider](#blockmodelprovider)
- [BlockStateProvider](#blockstateprovider)
- [BlockStateProvider.ConfiguredModelList](#blockstateprovider.configuredmodellist)
- [Class ModelBuilder.FaceRotation](#class-modelbuilder.facerotation)
- [ConfiguredModel](#configuredmodel)
- [ConfiguredModel.Builder](#configuredmodel.builder)
- [CustomLoaderBuilder>](#customloaderbuilder)
- [IGeneratedBlockState](#igeneratedblockstate)
- [ItemModelBuilder](#itemmodelbuilder)
- [ItemModelBuilder.OverrideBuilder](#itemmodelbuilder.overridebuilder)
- [ItemModelProvider](#itemmodelprovider)
- [ModelBuilder.ElementBuilder](#modelbuilder.elementbuilder)
- [ModelBuilder.ElementBuilder.FaceBuilder](#modelbuilder.elementbuilder.facebuilder)
- [ModelBuilder.ElementBuilder.RotationBuilder](#modelbuilder.elementbuilder.rotationbuilder)
- [ModelBuilder.RootTransformsBuilder](#modelbuilder.roottransformsbuilder)
- [ModelBuilder.TransformsBuilder](#modelbuilder.transformsbuilder)
- [ModelBuilder.TransformsBuilder.TransformVecBuilder](#modelbuilder.transformsbuilder.transformvecbuilder)
- [ModelBuilder>](#modelbuilder)
- [ModelFile](#modelfile)
- [ModelFile.ExistingModelFile](#modelfile.existingmodelfile)
- [ModelFile.UncheckedModelFile](#modelfile.uncheckedmodelfile)
- [ModelProvider>](#modelprovider)
- [MultiPartBlockStateBuilder](#multipartblockstatebuilder)
- [MultiPartBlockStateBuilder.PartBuilder](#multipartblockstatebuilder.partbuilder)
- [MultiPartBlockStateBuilder.PartBuilder.ConditionGroup](#multipartblockstatebuilder.partbuilder.conditiongroup)
- [VariantBlockStateBuilder](#variantblockstatebuilder)
- [VariantBlockStateBuilder.PartialBlockstate](#variantblockstatebuilder.partialblockstate)
## BlockModelBuilder

*class* `net.minecraftforge.client.model.generators.BlockModelBuilder`

Builder for block models, does not currently provide any additional
 functionality over ModelBuilder, purely a stub class with a concrete
 generic.

### Inherited fields
- from `net.minecraftforge.client.model.generators.ModelBuilder`: `ambientOcclusion`, `customLoader`, `elements`, `existingFileHelper`, `guiLight`, `parent`, `renderType`, `textures`, `transforms`
- from `net.minecraftforge.client.model.generators.ModelFile`: `location`

### Methods
- `public com.google.gson.JsonObject toJson()`

### Inherited methods
- from `net.minecraftforge.client.model.generators.ModelBuilder`: `ao`, `customLoader`, `element`, `element`, `exists`, `getElementCount`, `guiLight`, `parent`, `renderType`, `renderType`, `rootTransforms`, `texture`, `texture`, `transforms`
- from `net.minecraftforge.client.model.generators.ModelFile`: `assertExistence`, `getLocation`, `getUncheckedLocation`

## BlockModelProvider

*class* `net.minecraftforge.client.model.generators.BlockModelProvider`

Stub class to extend for block model data providers, eliminates some
 boilerplate constructor parameters.

### Inherited fields
- from `net.minecraftforge.client.model.generators.ModelProvider`: `BLOCK_FOLDER`, `existingFileHelper`, `factory`, `folder`, `generatedModels`, `ITEM_FOLDER`, `MODEL`, `MODEL_WITH_EXTENSION`, `modid`, `output`, `TEXTURE`
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`, `LOGGER`

### Methods
- `@NotNull public @NotNull String getName()`

### Inherited methods
- from `net.minecraftforge.client.model.generators.ModelProvider`: `button`, `buttonInventory`, `buttonPressed`, `carpet`, `clear`, `crop`, `cross`, `cube`, `cubeAll`, `cubeBottomTop`, `cubeColumn`, `cubeColumnHorizontal`, `cubeTop`, `doorBottomLeft`, `doorBottomLeftOpen`, `doorBottomRight`, `doorBottomRightOpen`, `doorTopLeft`, `doorTopLeftOpen`, `doorTopRight`, `doorTopRightOpen`, `fenceGate`, `fenceGateOpen`, `fenceGateWall`, `fenceGateWallOpen`, `fenceInventory`, `fencePost`, `fenceSide`, `generateAll`, `getBuilder`, `getExistingFile`, `getPath`, `mcLoc`, `modLoc`, `nested`, `orientable`, `orientableVertical`, `orientableWithBottom`, `paneNoSide`, `paneNoSideAlt`, `panePost`, `paneSide`, `paneSideAlt`, `pressurePlate`, `pressurePlateDown`, `registerModels`, `run`, `sign`, `singleTexture`, `singleTexture`, `slab`, `slabTop`, `stairs`, `stairsInner`, `stairsOuter`, `torch`, `torchWall`, `trapdoorBottom`, `trapdoorOpen`, `trapdoorOrientableBottom`, `trapdoorOrientableOpen`, `trapdoorOrientableTop`, `trapdoorTop`, `wallInventory`, `wallPost`, `wallSide`, `wallSideTall`, `withExistingParent`, `withExistingParent`

## BlockStateProvider

*class* `net.minecraftforge.client.model.generators.BlockStateProvider`

Data provider for blockstate files. Extends BlockModelProvider so that
 blockstates and their referenced models can be provided in tandem.

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final com.google.gson.Gson GSON`
- `@VisibleForTesting protected final Map<Block,IGeneratedBlockState> registeredBlocks`
- `private final PackOutput output`
- `private final String modid`
- `private final BlockModelProvider blockModels`
- `private final ItemModelProvider itemModels`
- `private static final int DEFAULT_ANGLE_OFFSET` (= 180)
- `public static final com.google.common.collect.ImmutableMap<Direction,Property<WallSide>> WALL_PROPS`

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`

### Methods
- `public CompletableFuture<?> run(CachedOutput cache)`
- `protected abstract void registerStatesAndModels()`
- `public VariantBlockStateBuilder getVariantBuilder(Block b)`
- `public MultiPartBlockStateBuilder getMultipartBuilder(Block b)`
- `public BlockModelProvider models()`
- `public ItemModelProvider itemModels()`
- `public ResourceLocation modLoc(String name)`
- `public ResourceLocation mcLoc(String name)`
- `private ResourceLocation key(Block block)`
- `private String name(Block block)`
- `public ResourceLocation blockTexture(Block block)`
- `private ResourceLocation extend(ResourceLocation rl,  String suffix)`
- `public ModelFile cubeAll(Block block)`
- `public void simpleBlock(Block block)`
- `public void simpleBlock(Block block,  Function<ModelFile,ConfiguredModel[]> expander)`
- `public void simpleBlock(Block block,  ModelFile model)`
- `public void simpleBlockItem(Block block,  ModelFile model)`
- `public void simpleBlockWithItem(Block block,  ModelFile model)`
- `public void simpleBlock(Block block,  ConfiguredModel... models)`
- `public void axisBlock(RotatedPillarBlock block)`
- `public void logBlock(RotatedPillarBlock block)`
- `public void axisBlock(RotatedPillarBlock block,  ResourceLocation baseName)`
- `public void axisBlock(RotatedPillarBlock block,  ResourceLocation side,  ResourceLocation end)`
- `public void axisBlockWithRenderType(RotatedPillarBlock block,  String renderType)`
- `public void logBlockWithRenderType(RotatedPillarBlock block,  String renderType)`
- `public void axisBlockWithRenderType(RotatedPillarBlock block,  ResourceLocation baseName,  String renderType)`
- `public void axisBlockWithRenderType(RotatedPillarBlock block,  ResourceLocation side,  ResourceLocation end,  String renderType)`
- `public void axisBlockWithRenderType(RotatedPillarBlock block,  ResourceLocation renderType)`
- `public void logBlockWithRenderType(RotatedPillarBlock block,  ResourceLocation renderType)`
- `public void axisBlockWithRenderType(RotatedPillarBlock block,  ResourceLocation baseName,  ResourceLocation renderType)`
- `public void axisBlockWithRenderType(RotatedPillarBlock block,  ResourceLocation side,  ResourceLocation end,  ResourceLocation renderType)`
- `public void axisBlock(RotatedPillarBlock block,  ModelFile vertical,  ModelFile horizontal)`
- `public void horizontalBlock(Block block,  ResourceLocation side,  ResourceLocation front,  ResourceLocation top)`
- `public void horizontalBlock(Block block,  ModelFile model)`
- `public void horizontalBlock(Block block,  ModelFile model,  int angleOffset)`
- `public void horizontalBlock(Block block,  Function<BlockState,ModelFile> modelFunc)`
- `public void horizontalBlock(Block block,  Function<BlockState,ModelFile> modelFunc,  int angleOffset)`
- `public void horizontalFaceBlock(Block block,  ModelFile model)`
- `public void horizontalFaceBlock(Block block,  ModelFile model,  int angleOffset)`
- `public void horizontalFaceBlock(Block block,  Function<BlockState,ModelFile> modelFunc)`
- `public void horizontalFaceBlock(Block block,  Function<BlockState,ModelFile> modelFunc,  int angleOffset)`
- `public void directionalBlock(Block block,  ModelFile model)`
- `public void directionalBlock(Block block,  ModelFile model,  int angleOffset)`
- `public void directionalBlock(Block block,  Function<BlockState,ModelFile> modelFunc)`
- `public void directionalBlock(Block block,  Function<BlockState,ModelFile> modelFunc,  int angleOffset)`
- `public void stairsBlock(StairBlock block,  ResourceLocation texture)`
- `public void stairsBlock(StairBlock block,  String name,  ResourceLocation texture)`
- `public void stairsBlock(StairBlock block,  ResourceLocation side,  ResourceLocation bottom,  ResourceLocation top)`
- `public void stairsBlock(StairBlock block,  String name,  ResourceLocation side,  ResourceLocation bottom,  ResourceLocation top)`
- `public void stairsBlockWithRenderType(StairBlock block,  ResourceLocation texture,  String renderType)`
- `public void stairsBlockWithRenderType(StairBlock block,  String name,  ResourceLocation texture,  String renderType)`
- `public void stairsBlockWithRenderType(StairBlock block,  ResourceLocation side,  ResourceLocation bottom,  ResourceLocation top,  String renderType)`
- `public void stairsBlockWithRenderType(StairBlock block,  String name,  ResourceLocation side,  ResourceLocation bottom,  ResourceLocation top,  String renderType)`
- `public void stairsBlockWithRenderType(StairBlock block,  ResourceLocation texture,  ResourceLocation renderType)`
- `public void stairsBlockWithRenderType(StairBlock block,  String name,  ResourceLocation texture,  ResourceLocation renderType)`
- `public void stairsBlockWithRenderType(StairBlock block,  ResourceLocation side,  ResourceLocation bottom,  ResourceLocation top,  ResourceLocation renderType)`
- `public void stairsBlockWithRenderType(StairBlock block,  String name,  ResourceLocation side,  ResourceLocation bottom,  ResourceLocation top,  ResourceLocation renderType)`
- `private void stairsBlockInternal(StairBlock block,  String baseName,  ResourceLocation side,  ResourceLocation bottom,  ResourceLocation top)`
- `private void stairsBlockInternalWithRenderType(StairBlock block,  String baseName,  ResourceLocation side,  ResourceLocation bottom,  ResourceLocation top,  ResourceLocation renderType)`
- `public void stairsBlock(StairBlock block,  ModelFile stairs,  ModelFile stairsInner,  ModelFile stairsOuter)`
- `public void slabBlock(SlabBlock block,  ResourceLocation doubleslab,  ResourceLocation texture)`
- `public void slabBlock(SlabBlock block,  ResourceLocation doubleslab,  ResourceLocation side,  ResourceLocation bottom,  ResourceLocation top)`
- `public void slabBlock(SlabBlock block,  ModelFile bottom,  ModelFile top,  ModelFile doubleslab)`
- `public void buttonBlock(ButtonBlock block,  ResourceLocation texture)`
- `public void buttonBlock(ButtonBlock block,  ModelFile button,  ModelFile buttonPressed)`
- `public void pressurePlateBlock(PressurePlateBlock block,  ResourceLocation texture)`
- `public void pressurePlateBlock(PressurePlateBlock block,  ModelFile pressurePlate,  ModelFile pressurePlateDown)`
- `public void signBlock(StandingSignBlock signBlock,  WallSignBlock wallSignBlock,  ResourceLocation texture)`
- `public void signBlock(StandingSignBlock signBlock,  WallSignBlock wallSignBlock,  ModelFile sign)`
- `public void fourWayBlock(CrossCollisionBlock block,  ModelFile post,  ModelFile side)`
- `public void fourWayMultipart(MultiPartBlockStateBuilder builder,  ModelFile side)`
- `public void fenceBlock(FenceBlock block,  ResourceLocation texture)`
- `public void fenceBlock(FenceBlock block,  String name,  ResourceLocation texture)`
- `public void fenceBlockWithRenderType(FenceBlock block,  ResourceLocation texture,  String renderType)`
- `public void fenceBlockWithRenderType(FenceBlock block,  String name,  ResourceLocation texture,  String renderType)`
- `public void fenceBlockWithRenderType(FenceBlock block,  ResourceLocation texture,  ResourceLocation renderType)`
- `public void fenceBlockWithRenderType(FenceBlock block,  String name,  ResourceLocation texture,  ResourceLocation renderType)`
- `public void fenceGateBlock(FenceGateBlock block,  ResourceLocation texture)`
- `public void fenceGateBlock(FenceGateBlock block,  String name,  ResourceLocation texture)`
- `public void fenceGateBlockWithRenderType(FenceGateBlock block,  ResourceLocation texture,  String renderType)`
- `public void fenceGateBlockWithRenderType(FenceGateBlock block,  String name,  ResourceLocation texture,  String renderType)`
- `public void fenceGateBlockWithRenderType(FenceGateBlock block,  ResourceLocation texture,  ResourceLocation renderType)`
- `public void fenceGateBlockWithRenderType(FenceGateBlock block,  String name,  ResourceLocation texture,  ResourceLocation renderType)`
- `private void fenceGateBlockInternal(FenceGateBlock block,  String baseName,  ResourceLocation texture)`
- `private void fenceGateBlockInternalWithRenderType(FenceGateBlock block,  String baseName,  ResourceLocation texture,  ResourceLocation renderType)`
- `public void fenceGateBlock(FenceGateBlock block,  ModelFile gate,  ModelFile gateOpen,  ModelFile gateWall,  ModelFile gateWallOpen)`
- `public void wallBlock(WallBlock block,  ResourceLocation texture)`
- `public void wallBlock(WallBlock block,  String name,  ResourceLocation texture)`
- `public void wallBlockWithRenderType(WallBlock block,  ResourceLocation texture,  String renderType)`
- `public void wallBlockWithRenderType(WallBlock block,  String name,  ResourceLocation texture,  String renderType)`
- `public void wallBlockWithRenderType(WallBlock block,  ResourceLocation texture,  ResourceLocation renderType)`
- `public void wallBlockWithRenderType(WallBlock block,  String name,  ResourceLocation texture,  ResourceLocation renderType)`
- `private void wallBlockInternal(WallBlock block,  String baseName,  ResourceLocation texture)`
- `private void wallBlockInternalWithRenderType(WallBlock block,  String baseName,  ResourceLocation texture,  ResourceLocation renderType)`
- `public void wallBlock(WallBlock block,  ModelFile post,  ModelFile side,  ModelFile sideTall)`
- `private void wallSidePart(MultiPartBlockStateBuilder builder,  ModelFile model,  Map.Entry<Direction,Property<WallSide>> entry,  WallSide height)`
- `public void paneBlock(IronBarsBlock block,  ResourceLocation pane,  ResourceLocation edge)`
- `public void paneBlock(IronBarsBlock block,  String name,  ResourceLocation pane,  ResourceLocation edge)`
- `public void paneBlockWithRenderType(IronBarsBlock block,  ResourceLocation pane,  ResourceLocation edge,  String renderType)`
- `public void paneBlockWithRenderType(IronBarsBlock block,  String name,  ResourceLocation pane,  ResourceLocation edge,  String renderType)`
- `public void paneBlockWithRenderType(IronBarsBlock block,  ResourceLocation pane,  ResourceLocation edge,  ResourceLocation renderType)`
- `public void paneBlockWithRenderType(IronBarsBlock block,  String name,  ResourceLocation pane,  ResourceLocation edge,  ResourceLocation renderType)`
- `private void paneBlockInternal(IronBarsBlock block,  String baseName,  ResourceLocation pane,  ResourceLocation edge)`
- `private void paneBlockInternalWithRenderType(IronBarsBlock block,  String baseName,  ResourceLocation pane,  ResourceLocation edge,  ResourceLocation renderType)`
- `public void paneBlock(IronBarsBlock block,  ModelFile post,  ModelFile side,  ModelFile sideAlt,  ModelFile noSide,  ModelFile noSideAlt)`
- `public void doorBlock(DoorBlock block,  ResourceLocation bottom,  ResourceLocation top)`
- `public void doorBlock(DoorBlock block,  String name,  ResourceLocation bottom,  ResourceLocation top)`
- `public void doorBlockWithRenderType(DoorBlock block,  ResourceLocation bottom,  ResourceLocation top,  String renderType)`
- `public void doorBlockWithRenderType(DoorBlock block,  String name,  ResourceLocation bottom,  ResourceLocation top,  String renderType)`
- `public void doorBlockWithRenderType(DoorBlock block,  ResourceLocation bottom,  ResourceLocation top,  ResourceLocation renderType)`
- `public void doorBlockWithRenderType(DoorBlock block,  String name,  ResourceLocation bottom,  ResourceLocation top,  ResourceLocation renderType)`
- `private void doorBlockInternal(DoorBlock block,  String baseName,  ResourceLocation bottom,  ResourceLocation top)`
- `private void doorBlockInternalWithRenderType(DoorBlock block,  String baseName,  ResourceLocation bottom,  ResourceLocation top,  ResourceLocation renderType)`
- `public void doorBlock(DoorBlock block,  ModelFile bottomLeft,  ModelFile bottomLeftOpen,  ModelFile bottomRight,  ModelFile bottomRightOpen,  ModelFile topLeft,  ModelFile topLeftOpen,  ModelFile topRight,  ModelFile topRightOpen)`
- `public void trapdoorBlock(TrapDoorBlock block,  ResourceLocation texture,  boolean orientable)`
- `public void trapdoorBlock(TrapDoorBlock block,  String name,  ResourceLocation texture,  boolean orientable)`
- `public void trapdoorBlockWithRenderType(TrapDoorBlock block,  ResourceLocation texture,  boolean orientable,  String renderType)`
- `public void trapdoorBlockWithRenderType(TrapDoorBlock block,  String name,  ResourceLocation texture,  boolean orientable,  String renderType)`
- `public void trapdoorBlockWithRenderType(TrapDoorBlock block,  ResourceLocation texture,  boolean orientable,  ResourceLocation renderType)`
- `public void trapdoorBlockWithRenderType(TrapDoorBlock block,  String name,  ResourceLocation texture,  boolean orientable,  ResourceLocation renderType)`
- `private void trapdoorBlockInternal(TrapDoorBlock block,  String baseName,  ResourceLocation texture,  boolean orientable)`
- `private void trapdoorBlockInternalWithRenderType(TrapDoorBlock block,  String baseName,  ResourceLocation texture,  boolean orientable,  ResourceLocation renderType)`
- `public void trapdoorBlock(TrapDoorBlock block,  ModelFile bottom,  ModelFile top,  ModelFile open,  boolean orientable)`
- `private CompletableFuture<?> saveBlockState(CachedOutput cache,  com.google.gson.JsonObject stateJson,  Block owner)`
- `@NotNull public @NotNull String getName()`

## BlockStateProvider.ConfiguredModelList

*class* `net.minecraftforge.client.model.generators.BlockStateProvider.ConfiguredModelList`

Enclosing class: BlockStateProvider

### Fields
- `private final List<ConfiguredModel> models`

### Methods
- `public com.google.gson.JsonElement toJSON()`
- `public BlockStateProvider.ConfiguredModelList append(ConfiguredModel... models)`

## Class ModelBuilder.FaceRotation

*enum* `net.minecraftforge.client.model.generators.Class ModelBuilder.FaceRotation`

Enclosing class: ModelBuilder<T extends ModelBuilder<T>>

### Fields
- `final int rotation`

### Methods
- `public static ModelBuilder.FaceRotation[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ModelBuilder.FaceRotation valueOf(String name)`
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

## ConfiguredModel

*class* `net.minecraftforge.client.model.generators.ConfiguredModel`

Represents a model with blockstate configurations, e.g. rotation, uvlock, and
 random weight.

 Can be manually constructed, created by static factory such as
 allYRotations(ModelFile, int, boolean), or created by builder via
 builder().

### Fields
- `public static final int DEFAULT_WEIGHT` (= 1)
  The default random weight of configured models, used by convenience
   overloads.
- `public final ModelFile model`
- `public final int rotationX`
- `public final int rotationY`
- `public final boolean uvLock`
- `public final int weight`

### Methods
- `private static IntStream validRotations()`
- `public static ConfiguredModel[] allYRotations(ModelFile model,  int x,  boolean uvlock)`
- `public static ConfiguredModel[] allYRotations(ModelFile model,  int x,  boolean uvlock,  int weight)`
- `public static ConfiguredModel[] allRotations(ModelFile model,  boolean uvlock)`
- `public static ConfiguredModel[] allRotations(ModelFile model,  boolean uvlock,  int weight)`
- `static void checkRotation(int rotationX,  int rotationY)`
- `static void checkWeight(int weight)`
- `com.google.gson.JsonObject toJSON(boolean includeWeight)`
- `public static ConfiguredModel.Builder<?> builder()`
  Create a new unowned ConfiguredModel.Builder.
  - returns: the builder
- `static ConfiguredModel.Builder<VariantBlockStateBuilder> builder(VariantBlockStateBuilder outer,  VariantBlockStateBuilder.PartialBlockstate state)`
- `static ConfiguredModel.Builder<MultiPartBlockStateBuilder.PartBuilder> builder(MultiPartBlockStateBuilder outer)`

## ConfiguredModel.Builder

*class* `net.minecraftforge.client.model.generators.ConfiguredModel.Builder`

A builder for ConfiguredModels, which can contain a callback for
 processing the finished result. If no callback is available (e.g. in the case
 of ConfiguredModel.builder()), some methods will not be available.

 Multiple models can be configured at once through the use of
 nextModel().

Enclosing class: ConfiguredModel

### Fields
- `private ModelFile model`
- `@Nullable private final @Nullable Function<ConfiguredModel[],T> callback`
- `private final List<ConfiguredModel> otherModels`
- `private int rotationX`
- `private int rotationY`
- `private boolean uvLock`
- `private int weight`

### Methods
- `public ConfiguredModel.Builder<T> modelFile(ModelFile model)`
  Set the underlying model object for this configured model.
  - param: model - the model
  - returns: this builder
  - throws: NullPointerException - if model is null
- `public ConfiguredModel.Builder<T> rotationX(int value)`
  Set the x-rotation for this model.
  - param: value - the x-rotation value
  - returns: this builder
  - throws: IllegalArgumentException - if value is not a valid x-rotation
 (see BlockModelRotation)
- `public ConfiguredModel.Builder<T> rotationY(int value)`
  Set the y-rotation for this model.
  - param: value - the y-rotation value
  - returns: this builder
  - throws: IllegalArgumentException - if value is not a valid y-rotation
 (see BlockModelRotation)
- `public ConfiguredModel.Builder<T> uvLock(boolean value)`
- `public ConfiguredModel.Builder<T> weight(int value)`
  Set the random weight for this model.
  - param: value - the weight value
  - returns: this builder
  - throws: IllegalArgumentException - if value is less than or equal to
 zero
- `public ConfiguredModel buildLast()`
  Build the most recent model, as if nextModel() was never called.
   Useful for single-model builders.
  - returns: the most recently configured model
- `public ConfiguredModel[] build()`
  Build all configured models and return them as an array.
  - returns: the array of built models.
- `public T addModel()`
  Apply the contained callback and return the owning builder object. What the
   callback does is not defined by this class, but most likely it adds the built
   models to the current variant being configured.
  
   Known callbacks include:
  
   VariantBlockStateBuilder.PartialBlockstate.modelForState()
   MultiPartBlockStateBuilder.part()
  - returns: the owning builder object
  - throws: NullPointerException - if there is no owning builder (and thus no callback)
- `public ConfiguredModel.Builder<T> nextModel()`
  Complete the current model and return a new builder instance with the same
   callback, and storing all previously built models.
  - returns: a new builder for configuring the next model

## CustomLoaderBuilder>

*class* `net.minecraftforge.client.model.generators.CustomLoaderBuilder>`

### Fields
- `protected final ResourceLocation loaderId`
- `protected final T extends ModelBuilder<T> parent`
- `protected final ExistingFileHelper existingFileHelper`
- `protected final Map<String,Boolean> visibility`

### Methods
- `public CustomLoaderBuilder<T> visibility(String partName,  boolean show)`
- `public T end()`
- `public com.google.gson.JsonObject toJson(com.google.gson.JsonObject json)`

## IGeneratedBlockState

*interface* `net.minecraftforge.client.model.generators.IGeneratedBlockState`

### Methods
- `com.google.gson.JsonObject toJson()`

## ItemModelBuilder

*class* `net.minecraftforge.client.model.generators.ItemModelBuilder`

Builder for item models, adds the ability to build overrides via
 override().

### Fields
- `protected List<ItemModelBuilder.OverrideBuilder> overrides`

### Inherited fields
- from `net.minecraftforge.client.model.generators.ModelBuilder`: `ambientOcclusion`, `customLoader`, `elements`, `existingFileHelper`, `guiLight`, `parent`, `renderType`, `textures`, `transforms`
- from `net.minecraftforge.client.model.generators.ModelFile`: `location`

### Methods
- `public ItemModelBuilder.OverrideBuilder override()`
- `public ItemModelBuilder.OverrideBuilder override(int index)`
  Get an existing override builder
  - param: index - the index of the existing override builder
  - returns: the override builder
  - throws: IndexOutOfBoundsException - if index is out of bounds
- `public com.google.gson.JsonObject toJson()`

### Inherited methods
- from `net.minecraftforge.client.model.generators.ModelBuilder`: `ao`, `customLoader`, `element`, `element`, `exists`, `getElementCount`, `guiLight`, `parent`, `renderType`, `renderType`, `rootTransforms`, `texture`, `texture`, `transforms`
- from `net.minecraftforge.client.model.generators.ModelFile`: `assertExistence`, `getLocation`, `getUncheckedLocation`

## ItemModelBuilder.OverrideBuilder

*class* `net.minecraftforge.client.model.generators.ItemModelBuilder.OverrideBuilder`

Enclosing class: ItemModelBuilder

### Fields
- `private ModelFile model`
- `private final Map<ResourceLocation,Float> predicates`

### Methods
- `public ItemModelBuilder.OverrideBuilder model(ModelFile model)`
- `public ItemModelBuilder.OverrideBuilder predicate(ResourceLocation key,  float value)`
- `public ItemModelBuilder end()`
- `com.google.gson.JsonObject toJson()`

## ItemModelProvider

*class* `net.minecraftforge.client.model.generators.ItemModelProvider`

Stub class to extend for item model data providers, eliminates some
 boilerplate constructor parameters.

### Inherited fields
- from `net.minecraftforge.client.model.generators.ModelProvider`: `BLOCK_FOLDER`, `existingFileHelper`, `factory`, `folder`, `generatedModels`, `ITEM_FOLDER`, `MODEL`, `MODEL_WITH_EXTENSION`, `modid`, `output`, `TEXTURE`
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`, `LOGGER`

### Methods
- `public ItemModelBuilder basicItem(Item item)`
- `public ItemModelBuilder basicItem(ResourceLocation item)`
- `@NotNull public @NotNull String getName()`

### Inherited methods
- from `net.minecraftforge.client.model.generators.ModelProvider`: `button`, `buttonInventory`, `buttonPressed`, `carpet`, `clear`, `crop`, `cross`, `cube`, `cubeAll`, `cubeBottomTop`, `cubeColumn`, `cubeColumnHorizontal`, `cubeTop`, `doorBottomLeft`, `doorBottomLeftOpen`, `doorBottomRight`, `doorBottomRightOpen`, `doorTopLeft`, `doorTopLeftOpen`, `doorTopRight`, `doorTopRightOpen`, `fenceGate`, `fenceGateOpen`, `fenceGateWall`, `fenceGateWallOpen`, `fenceInventory`, `fencePost`, `fenceSide`, `generateAll`, `getBuilder`, `getExistingFile`, `getPath`, `mcLoc`, `modLoc`, `nested`, `orientable`, `orientableVertical`, `orientableWithBottom`, `paneNoSide`, `paneNoSideAlt`, `panePost`, `paneSide`, `paneSideAlt`, `pressurePlate`, `pressurePlateDown`, `registerModels`, `run`, `sign`, `singleTexture`, `singleTexture`, `slab`, `slabTop`, `stairs`, `stairsInner`, `stairsOuter`, `torch`, `torchWall`, `trapdoorBottom`, `trapdoorOpen`, `trapdoorOrientableBottom`, `trapdoorOrientableOpen`, `trapdoorOrientableTop`, `trapdoorTop`, `wallInventory`, `wallPost`, `wallSide`, `wallSideTall`, `withExistingParent`, `withExistingParent`

## ModelBuilder.ElementBuilder

*class* `net.minecraftforge.client.model.generators.ModelBuilder.ElementBuilder`

Enclosing class: ModelBuilder<T extends ModelBuilder<T>>

### Fields
- `private org.joml.Vector3f from`
- `private org.joml.Vector3f to`
- `private final Map<Direction,ModelBuilder<T extends ModelBuilder<T>>.ElementBuilder.FaceBuilder> faces`
- `private ModelBuilder<T extends ModelBuilder<T>>.ElementBuilder.RotationBuilder rotation`
- `private boolean shade`
- `private int color`
- `private int blockLight`
- `private int skyLight`
- `private boolean hasAmbientOcclusion`
- `private boolean calculateNormals`

### Methods
- `private void validateCoordinate(float coord,  char name)`
- `private void validatePosition(org.joml.Vector3f pos)`
- `public ModelBuilder<T>.ElementBuilder from(float x,  float y,  float z)`
  Set the "from" position for this element.
  - param: x - x-position for this vector
  - param: y - y-position for this vector
  - param: z - z-position for this vector
  - returns: this builder
  - throws: IllegalArgumentException - if the vector is out of bounds (any
 coordinate not between -16 and 32,
 inclusive)
- `public ModelBuilder<T>.ElementBuilder to(float x,  float y,  float z)`
  Set the "to" position for this element.
  - param: x - x-position for this vector
  - param: y - y-position for this vector
  - param: z - z-position for this vector
  - returns: this builder
  - throws: IllegalArgumentException - if the vector is out of bounds (any
 coordinate not between -16 and 32,
 inclusive)
- `public ModelBuilder<T>.ElementBuilder.FaceBuilder face(Direction dir)`
  Return or create the face builder for the given direction.
  - param: dir - the direction
  - returns: the face builder for the given direction
  - throws: NullPointerException - if dir is null
- `public ModelBuilder<T>.ElementBuilder.RotationBuilder rotation()`
- `public ModelBuilder<T>.ElementBuilder shade(boolean shade)`
- `public ModelBuilder<T>.ElementBuilder allFaces(BiConsumer<Direction,ModelBuilder<T>.ElementBuilder.FaceBuilder> action)`
  Modify all possible faces dynamically using a function, creating new
   faces as necessary.
  - param: action - the function to apply to each direction
  - returns: this builder
  - throws: NullPointerException - if action is null
- `public ModelBuilder<T>.ElementBuilder faces(BiConsumer<Direction,ModelBuilder<T>.ElementBuilder.FaceBuilder> action)`
  Modify all existing faces dynamically using a function.
  - param: action - the function to apply to each direction
  - returns: this builder
  - throws: NullPointerException - if action is null
- `public ModelBuilder<T>.ElementBuilder textureAll(String texture)`
  Texture all possible faces in the current element with the given
   texture, creating new faces where necessary.
  - param: texture - the texture
  - returns: this builder
  - throws: NullPointerException - if texture is null
- `public ModelBuilder<T>.ElementBuilder texture(String texture)`
  Texture all existing faces in the current element with the given
   texture.
  - param: texture - the texture
  - returns: this builder
  - throws: NullPointerException - if texture is null
- `public ModelBuilder<T>.ElementBuilder cube(String texture)`
  Create a typical cube element, creating new faces as needed, applying the
   given texture, and setting the cullface.
  - param: texture - the texture
  - returns: this builder
  - throws: NullPointerException - if texture is null
- `public ModelBuilder<T>.ElementBuilder emissivity(int blockLight,  int skyLight)`
  Set the block and sky light of the element (0-15).
   Traditional "emissivity" values were set both of these to the same value.
  - param: blockLight - the block light
  - param: skyLight - the sky light
  - returns: this builder
- `public ModelBuilder<T>.ElementBuilder color(int color)`
  Sets the color of the element.
  - param: color - the color in ARGB format.
  - returns: this builder
- `public ModelBuilder<T>.ElementBuilder ao(boolean ao)`
  Set the ambient occlusion of the element.
  - param: ao - the ambient occlusion
  - returns: this builder
- `public ModelBuilder<T>.ElementBuilder calculateNormals(boolean calc)`
  Sets whether we should calculate actual normals for the faces of this model or inherit them from facing the
   way vanilla does
  - param: calc - whether to calculate normals
  - returns: this builder
- `private BiConsumer<Direction,ModelBuilder<T>.ElementBuilder.FaceBuilder> addTexture(String texture)`
- `BlockElement build()`
- `public T end()`

## ModelBuilder.ElementBuilder.FaceBuilder

*class* `net.minecraftforge.client.model.generators.ModelBuilder.ElementBuilder.FaceBuilder`

Enclosing class: ModelBuilder.ElementBuilder

### Fields
- `private Direction cullface`
- `private int tintindex`
- `private String texture`
- `private float[] uvs`
- `private ModelBuilder.FaceRotation rotation`
- `private int color`
- `private int blockLight`
- `private int skyLight`
- `private boolean hasAmbientOcclusion`
- `private boolean calculateNormals`

### Methods
- `public ModelBuilder<T>.ElementBuilder.FaceBuilder cullface(@Nullable  @Nullable Direction dir)`
- `public ModelBuilder<T>.ElementBuilder.FaceBuilder tintindex(int index)`
- `public ModelBuilder<T>.ElementBuilder.FaceBuilder texture(String texture)`
  Set the texture for the current face.
  - param: texture - the texture
  - returns: this builder
  - throws: NullPointerException - if texture is null
- `public ModelBuilder<T>.ElementBuilder.FaceBuilder uvs(float u1,  float v1,  float u2,  float v2)`
- `public ModelBuilder<T>.ElementBuilder.FaceBuilder rotation(ModelBuilder.FaceRotation rot)`
  Set the texture rotation for the current face.
  - param: rot - the rotation
  - returns: this builder
  - throws: NullPointerException - if rot is null
- `public ModelBuilder<T>.ElementBuilder.FaceBuilder emissivity(int blockLight,  int skyLight)`
  Set the block and sky light of the face (0-15).
   Traditional "emissivity" values set both of these to the same value.
  - param: blockLight - the block light
  - param: skyLight - the sky light
  - returns: this builder
- `public ModelBuilder<T>.ElementBuilder.FaceBuilder color(int color)`
  Sets the color of the face.
  - param: color - the color in ARGB format.
  - returns: this builder
- `public ModelBuilder<T>.ElementBuilder.FaceBuilder ao(boolean ao)`
  Set the ambient occlusion of the face.
  - param: ao - the ambient occlusion
  - returns: this builder
- `public ModelBuilder<T>.ElementBuilder.FaceBuilder calculateNormals(boolean calc)`
  Sets whether we should calculate actual normals for this face or inherit them from facing the
   way vanilla does
  - param: calc - whether to calculate normals
  - returns: this builder
- `BlockElementFace build()`
- `public ModelBuilder<T>.ElementBuilder end()`

## ModelBuilder.ElementBuilder.RotationBuilder

*class* `net.minecraftforge.client.model.generators.ModelBuilder.ElementBuilder.RotationBuilder`

Enclosing class: ModelBuilder.ElementBuilder

### Fields
- `private org.joml.Vector3f origin`
- `private Direction.Axis axis`
- `private float angle`
- `private boolean rescale`

### Methods
- `public ModelBuilder<T>.ElementBuilder.RotationBuilder origin(float x,  float y,  float z)`
- `public ModelBuilder<T>.ElementBuilder.RotationBuilder axis(Direction.Axis axis)`
  - param: axis - the axis of rotation
  - returns: this builder
  - throws: NullPointerException - if axis is null
- `public ModelBuilder<T>.ElementBuilder.RotationBuilder angle(float angle)`
  - param: angle - the rotation angle
  - returns: this builder
  - throws: IllegalArgumentException - if angle is invalid (not one of 0, +/-22.5, +/-45)
- `public ModelBuilder<T>.ElementBuilder.RotationBuilder rescale(boolean rescale)`
- `BlockElementRotation build()`
- `public ModelBuilder<T>.ElementBuilder end()`

## ModelBuilder.RootTransformsBuilder

*class* `net.minecraftforge.client.model.generators.ModelBuilder.RootTransformsBuilder`

Enclosing class: ModelBuilder<T extends ModelBuilder<T>>

### Fields
- `private static final org.joml.Vector3f ONE`
- `private org.joml.Vector3f translation`
- `private org.joml.Quaternionf leftRotation`
- `private org.joml.Quaternionf rightRotation`
- `private org.joml.Vector3f scale`
- `@Nullable private TransformationHelper.TransformOrigin origin`
- `@Nullable private @Nullable org.joml.Vector3f originVec`

### Methods
- `public ModelBuilder<T>.RootTransformsBuilder translation(org.joml.Vector3f translation)`
  Sets the translation of the root transform.
  - param: translation - the translation
  - returns: this builder
  - throws: NullPointerException - if translation is null
- `public ModelBuilder<T>.RootTransformsBuilder translation(float x,  float y,  float z)`
  Sets the translation of the root transform.
  - param: x - x translation
  - param: y - y translation
  - param: z - z translation
  - returns: this builder
- `public ModelBuilder<T>.RootTransformsBuilder rotation(org.joml.Quaternionf rotation)`
  Sets the left rotation of the root transform.
  - param: rotation - the left rotation
  - returns: this builder
  - throws: NullPointerException - if rotation is null
- `public ModelBuilder<T>.RootTransformsBuilder rotation(float x,  float y,  float z,  boolean isDegrees)`
  Sets the left rotation of the root transform.
  - param: x - x rotation
  - param: y - y rotation
  - param: z - z rotation
  - param: isDegrees - whether the rotation is in degrees or radians
  - returns: this builder
- `public ModelBuilder<T>.RootTransformsBuilder leftRotation(org.joml.Quaternionf leftRotation)`
  Sets the left rotation of the root transform.
  - param: leftRotation - the left rotation
  - returns: this builder
  - throws: NullPointerException - if leftRotation is null
- `public ModelBuilder<T>.RootTransformsBuilder leftRotation(float x,  float y,  float z,  boolean isDegrees)`
  Sets the left rotation of the root transform.
  - param: x - x rotation
  - param: y - y rotation
  - param: z - z rotation
  - param: isDegrees - whether the rotation is in degrees or radians
  - returns: this builder
- `public ModelBuilder<T>.RootTransformsBuilder rightRotation(org.joml.Quaternionf rightRotation)`
  Sets the right rotation of the root transform.
  - param: rightRotation - the right rotation
  - returns: this builder
  - throws: NullPointerException - if rightRotation is null
- `public ModelBuilder<T>.RootTransformsBuilder rightRotation(float x,  float y,  float z,  boolean isDegrees)`
  Sets the right rotation of the root transform.
  - param: x - x rotation
  - param: y - y rotation
  - param: z - z rotation
  - param: isDegrees - whether the rotation is in degrees or radians
  - returns: this builder
- `public ModelBuilder<T>.RootTransformsBuilder postRotation(org.joml.Quaternionf postRotation)`
  Sets the right rotation of the root transform.
  - param: postRotation - the right rotation
  - returns: this builder
  - throws: NullPointerException - if rightRotation is null
- `public ModelBuilder<T>.RootTransformsBuilder postRotation(float x,  float y,  float z,  boolean isDegrees)`
  Sets the right rotation of the root transform.
  - param: x - x rotation
  - param: y - y rotation
  - param: z - z rotation
  - param: isDegrees - whether the rotation is in degrees or radians
  - returns: this builder
- `public ModelBuilder<T>.RootTransformsBuilder scale(float scale)`
  Sets the scale of the root transform.
  - param: scale - the scale
  - returns: this builder
- `public ModelBuilder<T>.RootTransformsBuilder scale(float xScale,  float yScale,  float zScale)`
  Sets the scale of the root transform.
  - param: xScale - x scale
  - param: yScale - y scale
  - param: zScale - z scale
  - returns: this builder
- `public ModelBuilder<T>.RootTransformsBuilder scale(org.joml.Vector3f scale)`
  Sets the scale of the root transform.
  - param: scale - the scale vector
  - returns: this builder
  - throws: NullPointerException - if scale is null
- `public ModelBuilder<T>.RootTransformsBuilder transform(Transformation transformation)`
  Sets the root transform.
  - param: transformation - the transformation to use
  - returns: this builder
  - throws: NullPointerException - if transformation is null
- `public ModelBuilder<T>.RootTransformsBuilder origin(org.joml.Vector3f origin)`
  Sets the origin of the root transform.
  - param: origin - the origin vector
  - returns: this builder
  - throws: NullPointerException - if origin is null
- `public ModelBuilder<T>.RootTransformsBuilder origin(TransformationHelper.TransformOrigin origin)`
  Sets the origin of the root transform.
  - param: origin - the origin name
  - returns: this builder
  - throws: NullPointerException - if origin is null
  - throws: IllegalArgumentException - if origin is not center, corner or opposing-corner
- `public ModelBuilder<T> end()`
  Finish configuring the parent builder
  - returns: the parent block model builder
- `public com.google.gson.JsonObject toJson()`
- `private static com.google.gson.JsonArray writeVec3(org.joml.Vector3f vector)`
- `private static com.google.gson.JsonArray writeQuaternion(org.joml.Quaternionf quaternion)`

## ModelBuilder.TransformsBuilder

*class* `net.minecraftforge.client.model.generators.ModelBuilder.TransformsBuilder`

Enclosing class: ModelBuilder<T extends ModelBuilder<T>>

### Fields
- `private final Map<ItemDisplayContext,ModelBuilder<T extends ModelBuilder<T>>.TransformsBuilder.TransformVecBuilder> transforms`

### Methods
- `public ModelBuilder<T>.TransformsBuilder.TransformVecBuilder transform(ItemDisplayContext type)`
  Begin building a new transform for the given perspective.
  - param: type - the perspective to create or return the builder for
  - returns: the builder for the given perspective
  - throws: NullPointerException - if type is null
- `Map<ItemDisplayContext,ItemTransform> build()`
- `public T end()`

## ModelBuilder.TransformsBuilder.TransformVecBuilder

*class* `net.minecraftforge.client.model.generators.ModelBuilder.TransformsBuilder.TransformVecBuilder`

Enclosing class: ModelBuilder.TransformsBuilder

### Fields
- `private org.joml.Vector3f rotation`
- `private org.joml.Vector3f translation`
- `private org.joml.Vector3f scale`
- `private org.joml.Vector3f rightRotation`

### Methods
- `public ModelBuilder<T>.TransformsBuilder.TransformVecBuilder rotation(float x,  float y,  float z)`
- `public ModelBuilder<T>.TransformsBuilder.TransformVecBuilder leftRotation(float x,  float y,  float z)`
- `public ModelBuilder<T>.TransformsBuilder.TransformVecBuilder translation(float x,  float y,  float z)`
- `public ModelBuilder<T>.TransformsBuilder.TransformVecBuilder scale(float sc)`
- `public ModelBuilder<T>.TransformsBuilder.TransformVecBuilder scale(float x,  float y,  float z)`
- `public ModelBuilder<T>.TransformsBuilder.TransformVecBuilder rightRotation(float x,  float y,  float z)`
- `ItemTransform build()`
- `public ModelBuilder<T>.TransformsBuilder end()`

## ModelBuilder>

*class* `net.minecraftforge.client.model.generators.ModelBuilder>`

General purpose model builder, contains all the commonalities between item
 and block models.

### Fields
- `@Nullable protected @Nullable ModelFile parent`
- `protected final Map<String,String> textures`
- `protected final ModelBuilder<T extends ModelBuilder<T>>.TransformsBuilder transforms`
- `protected final ExistingFileHelper existingFileHelper`
- `protected String renderType`
- `protected boolean ambientOcclusion`
- `protected BlockModel.GuiLight guiLight`
- `protected final List<ModelBuilder<T extends ModelBuilder<T>>.ElementBuilder> elements`
- `protected CustomLoaderBuilder<T extends ModelBuilder<T>> customLoader`
- `private final ModelBuilder<T extends ModelBuilder<T>>.RootTransformsBuilder rootTransforms`

### Inherited fields
- from `net.minecraftforge.client.model.generators.ModelFile`: `location`

### Methods
- `private T self()`
- `protected boolean exists()`
- `public T parent(ModelFile parent)`
  Set the parent model for the current model.
  - param: parent - the parent model
  - returns: this builder
  - throws: NullPointerException - if parent is null
  - throws: IllegalStateException - if parent does not exist
- `public T texture(String key,  String texture)`
  Set the texture for a given dictionary key.
  - param: key - the texture key
  - param: texture - the texture, can be another key e.g. "#all"
  - returns: this builder
  - throws: NullPointerException - if key is null
  - throws: NullPointerException - if texture is null
  - throws: IllegalStateException - if texture is not a key (does not start
 with '#') and does not exist in any
 known resource pack
- `public T texture(String key,  ResourceLocation texture)`
  Set the texture for a given dictionary key.
  - param: key - the texture key
  - param: texture - the texture
  - returns: this builder
  - throws: NullPointerException - if key is null
  - throws: NullPointerException - if texture is null
  - throws: IllegalStateException - if texture is not a key (does not start
 with '#') and does not exist in any
 known resource pack
- `public T renderType(String renderType)`
  Set the render type for this model.
  - param: renderType - the render type. Must be registered via
 RegisterNamedRenderTypesEvent
  - returns: this builder
  - throws: NullPointerException - if renderType is null
- `public T renderType(ResourceLocation renderType)`
  Set the render type for this model.
  - param: renderType - the render type. Must be registered via
 RegisterNamedRenderTypesEvent
  - returns: this builder
  - throws: NullPointerException - if renderType is null
- `public ModelBuilder<T>.TransformsBuilder transforms()`
- `public T ao(boolean ao)`
- `public T guiLight(BlockModel.GuiLight light)`
- `public ModelBuilder<T>.ElementBuilder element()`
- `public ModelBuilder<T>.ElementBuilder element(int index)`
  Get an existing element builder
  - param: index - the index of the existing element builder
  - returns: the element builder
  - throws: IndexOutOfBoundsException - if index is out of bounds
- `public int getElementCount()`
  Returns the number of elements in this model builder.
  - returns: the number of elements in this model builder
- `public <L extends CustomLoaderBuilder<T>> L customLoader(BiFunction<T,ExistingFileHelper,L> customLoaderFactory)`
  Use a custom loader instead of the vanilla elements.
  - param: customLoaderFactory - function that returns the custom loader to set, given this and the existingFileHelper
  - returns: the custom loader builder
- `public ModelBuilder<T>.RootTransformsBuilder rootTransforms()`
- `@VisibleForTesting public com.google.gson.JsonObject toJson()`
- `private String serializeLocOrKey(String tex)`
- `private com.google.gson.JsonArray serializeVector3f(org.joml.Vector3f vec)`
- `private Number serializeFloat(float f)`

### Inherited methods
- from `net.minecraftforge.client.model.generators.ModelFile`: `assertExistence`, `getLocation`, `getUncheckedLocation`

## ModelFile

*class* `net.minecraftforge.client.model.generators.ModelFile`

### Fields
- `protected ResourceLocation location`

### Methods
- `protected abstract boolean exists()`
- `public ResourceLocation getLocation()`
- `public void assertExistence()`
  Assert that this model exists.
  - throws: IllegalStateException - if this model does not exist
- `public ResourceLocation getUncheckedLocation()`

## ModelFile.ExistingModelFile

*class* `net.minecraftforge.client.model.generators.ModelFile.ExistingModelFile`

Enclosing class: ModelFile

### Fields
- `private final ExistingFileHelper existingHelper`

### Inherited fields
- from `net.minecraftforge.client.model.generators.ModelFile`: `location`

### Methods
- `protected boolean exists()`

### Inherited methods
- from `net.minecraftforge.client.model.generators.ModelFile`: `assertExistence`, `getLocation`, `getUncheckedLocation`

## ModelFile.UncheckedModelFile

*class* `net.minecraftforge.client.model.generators.ModelFile.UncheckedModelFile`

Enclosing class: ModelFile

### Inherited fields
- from `net.minecraftforge.client.model.generators.ModelFile`: `location`

### Methods
- `protected boolean exists()`

### Inherited methods
- from `net.minecraftforge.client.model.generators.ModelFile`: `assertExistence`, `getLocation`, `getUncheckedLocation`

## ModelProvider>

*class* `net.minecraftforge.client.model.generators.ModelProvider>`

### Fields
- `public static final String BLOCK_FOLDER`
- `public static final String ITEM_FOLDER`
- `protected static final ExistingFileHelper.ResourceType TEXTURE`
- `protected static final ExistingFileHelper.ResourceType MODEL`
- `protected static final ExistingFileHelper.ResourceType MODEL_WITH_EXTENSION`
- `private static final com.google.gson.Gson GSON`
- `protected final PackOutput output`
- `protected final String modid`
- `protected final String folder`
- `protected final Function<ResourceLocation,T extends ModelBuilder<T>> factory`
- `@VisibleForTesting public final Map<ResourceLocation,T extends ModelBuilder<T>> generatedModels`
- `@VisibleForTesting public final ExistingFileHelper existingFileHelper`

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`, `LOGGER`

### Methods
- `protected abstract void registerModels()`
- `public T getBuilder(String path)`
- `private ResourceLocation extendWithFolder(ResourceLocation rl)`
- `public ResourceLocation modLoc(String name)`
- `public ResourceLocation mcLoc(String name)`
- `public T withExistingParent(String name,  String parent)`
- `public T withExistingParent(String name,  ResourceLocation parent)`
- `public T cube(String name,  ResourceLocation down,  ResourceLocation up,  ResourceLocation north,  ResourceLocation south,  ResourceLocation east,  ResourceLocation west)`
- `private T singleTexture(String name,  String parent,  ResourceLocation texture)`
- `public T singleTexture(String name,  ResourceLocation parent,  ResourceLocation texture)`
- `private T singleTexture(String name,  String parent,  String textureKey,  ResourceLocation texture)`
- `public T singleTexture(String name,  ResourceLocation parent,  String textureKey,  ResourceLocation texture)`
- `public T cubeAll(String name,  ResourceLocation texture)`
- `public T cubeTop(String name,  ResourceLocation side,  ResourceLocation top)`
- `private T sideBottomTop(String name,  String parent,  ResourceLocation side,  ResourceLocation bottom,  ResourceLocation top)`
- `public T cubeBottomTop(String name,  ResourceLocation side,  ResourceLocation bottom,  ResourceLocation top)`
- `public T cubeColumn(String name,  ResourceLocation side,  ResourceLocation end)`
- `public T cubeColumnHorizontal(String name,  ResourceLocation side,  ResourceLocation end)`
- `public T orientableVertical(String name,  ResourceLocation side,  ResourceLocation front)`
- `public T orientableWithBottom(String name,  ResourceLocation side,  ResourceLocation front,  ResourceLocation bottom,  ResourceLocation top)`
- `public T orientable(String name,  ResourceLocation side,  ResourceLocation front,  ResourceLocation top)`
- `public T crop(String name,  ResourceLocation crop)`
- `public T cross(String name,  ResourceLocation cross)`
- `public T stairs(String name,  ResourceLocation side,  ResourceLocation bottom,  ResourceLocation top)`
- `public T stairsOuter(String name,  ResourceLocation side,  ResourceLocation bottom,  ResourceLocation top)`
- `public T stairsInner(String name,  ResourceLocation side,  ResourceLocation bottom,  ResourceLocation top)`
- `public T slab(String name,  ResourceLocation side,  ResourceLocation bottom,  ResourceLocation top)`
- `public T slabTop(String name,  ResourceLocation side,  ResourceLocation bottom,  ResourceLocation top)`
- `public T button(String name,  ResourceLocation texture)`
- `public T buttonPressed(String name,  ResourceLocation texture)`
- `public T buttonInventory(String name,  ResourceLocation texture)`
- `public T pressurePlate(String name,  ResourceLocation texture)`
- `public T pressurePlateDown(String name,  ResourceLocation texture)`
- `public T sign(String name,  ResourceLocation texture)`
- `public T fencePost(String name,  ResourceLocation texture)`
- `public T fenceSide(String name,  ResourceLocation texture)`
- `public T fenceInventory(String name,  ResourceLocation texture)`
- `public T fenceGate(String name,  ResourceLocation texture)`
- `public T fenceGateOpen(String name,  ResourceLocation texture)`
- `public T fenceGateWall(String name,  ResourceLocation texture)`
- `public T fenceGateWallOpen(String name,  ResourceLocation texture)`
- `public T wallPost(String name,  ResourceLocation wall)`
- `public T wallSide(String name,  ResourceLocation wall)`
- `public T wallSideTall(String name,  ResourceLocation wall)`
- `public T wallInventory(String name,  ResourceLocation wall)`
- `private T pane(String name,  String parent,  ResourceLocation pane,  ResourceLocation edge)`
- `public T panePost(String name,  ResourceLocation pane,  ResourceLocation edge)`
- `public T paneSide(String name,  ResourceLocation pane,  ResourceLocation edge)`
- `public T paneSideAlt(String name,  ResourceLocation pane,  ResourceLocation edge)`
- `public T paneNoSide(String name,  ResourceLocation pane)`
- `public T paneNoSideAlt(String name,  ResourceLocation pane)`
- `private T door(String name,  String model,  ResourceLocation bottom,  ResourceLocation top)`
- `public T doorBottomLeft(String name,  ResourceLocation bottom,  ResourceLocation top)`
- `public T doorBottomLeftOpen(String name,  ResourceLocation bottom,  ResourceLocation top)`
- `public T doorBottomRight(String name,  ResourceLocation bottom,  ResourceLocation top)`
- `public T doorBottomRightOpen(String name,  ResourceLocation bottom,  ResourceLocation top)`
- `public T doorTopLeft(String name,  ResourceLocation bottom,  ResourceLocation top)`
- `public T doorTopLeftOpen(String name,  ResourceLocation bottom,  ResourceLocation top)`
- `public T doorTopRight(String name,  ResourceLocation bottom,  ResourceLocation top)`
- `public T doorTopRightOpen(String name,  ResourceLocation bottom,  ResourceLocation top)`
- `public T trapdoorBottom(String name,  ResourceLocation texture)`
- `public T trapdoorTop(String name,  ResourceLocation texture)`
- `public T trapdoorOpen(String name,  ResourceLocation texture)`
- `public T trapdoorOrientableBottom(String name,  ResourceLocation texture)`
- `public T trapdoorOrientableTop(String name,  ResourceLocation texture)`
- `public T trapdoorOrientableOpen(String name,  ResourceLocation texture)`
- `public T torch(String name,  ResourceLocation torch)`
- `public T torchWall(String name,  ResourceLocation torch)`
- `public T carpet(String name,  ResourceLocation wool)`
- `public T nested()`
  Returns a model builder that's not directly saved to disk. Meant for use in custom model loaders..
  - returns: a model builder that's not directly saved to disk. Meant for use in custom model loaders.
- `public ModelFile.ExistingModelFile getExistingFile(ResourceLocation path)`
- `protected void clear()`
- `public CompletableFuture<?> run(CachedOutput cache)`
- `protected CompletableFuture<?> generateAll(CachedOutput cache)`
- `protected Path getPath(T model)`

### Inherited methods
- from `net.minecraft.data.DataProvider`: `getName`

## MultiPartBlockStateBuilder

*class* `net.minecraftforge.client.model.generators.MultiPartBlockStateBuilder`

### Fields
- `private final List<MultiPartBlockStateBuilder.PartBuilder> parts`
- `private final Block owner`

### Methods
- `public ConfiguredModel.Builder<MultiPartBlockStateBuilder.PartBuilder> part()`
  Creates a builder for models to assign to a MultiPartBlockStateBuilder.PartBuilder, which when
   completed via ConfiguredModel.Builder.addModel() will assign the
   resultant set of models to the part and return it for further processing.
  - returns: the model builder
- `MultiPartBlockStateBuilder addPart(MultiPartBlockStateBuilder.PartBuilder part)`
- `public com.google.gson.JsonObject toJson()`
- `private static com.google.gson.JsonObject toJson(List<MultiPartBlockStateBuilder.PartBuilder.ConditionGroup> conditions,  boolean useOr)`
- `private static com.google.gson.JsonObject toJson(com.google.common.collect.Multimap<Property<?>,Comparable<?>> conditions,  boolean useOr)`

## MultiPartBlockStateBuilder.PartBuilder

*class* `net.minecraftforge.client.model.generators.MultiPartBlockStateBuilder.PartBuilder`

Enclosing class: MultiPartBlockStateBuilder

### Fields
- `public BlockStateProvider.ConfiguredModelList models`
- `public boolean useOr`
- `public final com.google.common.collect.Multimap<Property<?>,Comparable<?>> conditions`
- `public final List<MultiPartBlockStateBuilder.PartBuilder.ConditionGroup> nestedConditionGroups`

### Methods
- `public MultiPartBlockStateBuilder.PartBuilder useOr()`
  Makes this part get applied if any of the conditions/condition groups are true, instead of all of them needing to be true.
- `@SafeVarargs public final <T extends Comparable<T>> MultiPartBlockStateBuilder.PartBuilder condition(Property<T> prop,  T... values)`
  Set a condition for this part, which consists of a property and a set of
   valid values. Can be called multiple times for multiple different properties.
  - param: prop - the property
  - param: values - a set of valid values
  - returns: this builder
  - throws: NullPointerException - if prop is null
  - throws: NullPointerException - if values is null
  - throws: IllegalArgumentException - if values is empty
  - throws: IllegalArgumentException - if prop has already been configured
  - throws: IllegalArgumentException - if prop is not applicable to the
 current block's state
  - throws: IllegalStateException - if !nestedConditionGroups.isEmpty()
- `public final MultiPartBlockStateBuilder.PartBuilder.ConditionGroup nestedGroup()`
  Allows having nested groups of conditions if there are not any normal conditions.
  - throws: IllegalStateException - if !conditions.isEmpty()
- `public MultiPartBlockStateBuilder end()`
- `com.google.gson.JsonObject toJson()`
- `public boolean canApplyTo(Block b)`

## MultiPartBlockStateBuilder.PartBuilder.ConditionGroup

*class* `net.minecraftforge.client.model.generators.MultiPartBlockStateBuilder.PartBuilder.ConditionGroup`

Enclosing class: MultiPartBlockStateBuilder.PartBuilder

### Fields
- `public final com.google.common.collect.Multimap<Property<?>,Comparable<?>> conditions`
- `public final List<MultiPartBlockStateBuilder.PartBuilder.ConditionGroup> nestedConditionGroups`
- `private MultiPartBlockStateBuilder.PartBuilder.ConditionGroup parent`
- `public boolean useOr`

### Methods
- `@SafeVarargs public final <T extends Comparable<T>> MultiPartBlockStateBuilder.PartBuilder.ConditionGroup condition(Property<T> prop,  T... values)`
  Set a condition for this part, which consists of a property and a set of
   valid values. Can be called multiple times for multiple different properties.
  - param: prop - the property
  - param: values - a set of valid values
  - returns: this builder
  - throws: NullPointerException - if prop is null
  - throws: NullPointerException - if values is null
  - throws: IllegalArgumentException - if values is empty
  - throws: IllegalArgumentException - if prop has already been configured
  - throws: IllegalArgumentException - if prop is not applicable to the
 current block's state
  - throws: IllegalStateException - if !nestedConditionGroups.isEmpty()
- `public MultiPartBlockStateBuilder.PartBuilder.ConditionGroup nestedGroup()`
  Allows having nested groups of conditions if there are not any normal conditions.
  - throws: IllegalStateException - if !conditions.isEmpty()
- `public MultiPartBlockStateBuilder.PartBuilder.ConditionGroup endNestedGroup()`
  Ends this nested condition group and returns the parent condition group
  - throws: IllegalStateException - If this is not a nested condition group
- `public MultiPartBlockStateBuilder.PartBuilder end()`
  Ends this condition group and returns the part builder
  - throws: IllegalStateException - If this is a nested condition group
- `public MultiPartBlockStateBuilder.PartBuilder.ConditionGroup useOr()`
  Makes this part get applied if any of the conditions/condition groups are true, instead of all of them needing to be true.
- `com.google.gson.JsonObject toJson()`

## VariantBlockStateBuilder

*class* `net.minecraftforge.client.model.generators.VariantBlockStateBuilder`

Builder for variant-type blockstates, i.e. non-multipart blockstates. Should
 not be manually instantiated, instead use
 BlockStateProvider.getVariantBuilder(Block).

 Variants can either be set via
 setModels(PartialBlockstate, ConfiguredModel...) or
 addModels(PartialBlockstate, ConfiguredModel...), where model(s) can
 be assigned directly to partial states, or builder
 style via partialState() and its subsequent methods.

 This class also provides the convenience methods
 forAllStates(Function) and
 forAllStatesExcept(Function, Property...) for cases where the model
 for each variant can be decided dynamically based on the state's property
 values.

### Fields
- `private final Block owner`
- `private final Map<VariantBlockStateBuilder.PartialBlockstate,BlockStateProvider.ConfiguredModelList> models`
- `private final Set<BlockState> coveredStates`

### Methods
- `public Map<VariantBlockStateBuilder.PartialBlockstate,BlockStateProvider.ConfiguredModelList> getModels()`
- `public Block getOwner()`
- `public com.google.gson.JsonObject toJson()`
- `public VariantBlockStateBuilder addModels(VariantBlockStateBuilder.PartialBlockstate state,  ConfiguredModel... models)`
  Assign some models to a given partial state.
  - param: state - The partial state for which to add
 the models
  - param: models - A set of models to add to this state
  - returns: this builder
  - throws: NullPointerException - if state is null
  - throws: IllegalArgumentException - if models is empty
  - throws: IllegalArgumentException - if state's owning block differs from
 the builder's
  - throws: IllegalArgumentException - if state partially matches another
 state which has already been configured
- `public VariantBlockStateBuilder setModels(VariantBlockStateBuilder.PartialBlockstate state,  ConfiguredModel... model)`
  Assign some models to a given partial state,
   throwing an exception if the state has already been configured. Otherwise,
   simply calls addModels(PartialBlockstate, ConfiguredModel...).
  - param: state - The partial state for which to set
 the models
  - param: model - A set of models to assign to this state
  - returns: this builder
  - throws: IllegalArgumentException - if state has already been configured
- `private boolean disjointToAll(VariantBlockStateBuilder.PartialBlockstate newState)`
- `public VariantBlockStateBuilder.PartialBlockstate partialState()`
- `public VariantBlockStateBuilder forAllStates(Function<BlockState,ConfiguredModel[]> mapper)`
- `public VariantBlockStateBuilder forAllStatesExcept(Function<BlockState,ConfiguredModel[]> mapper,  Property<?>... ignored)`

## VariantBlockStateBuilder.PartialBlockstate

*class* `net.minecraftforge.client.model.generators.VariantBlockStateBuilder.PartialBlockstate`

Enclosing class: VariantBlockStateBuilder

### Fields
- `private final Block owner`
- `private final SortedMap<Property<?>,Comparable<?>> setStates`
- `@Nullable private final @Nullable VariantBlockStateBuilder outerBuilder`

### Methods
- `public <T extends Comparable<T>> VariantBlockStateBuilder.PartialBlockstate with(Property<T> prop,  T value)`
- `private void checkValidOwner()`
- `public ConfiguredModel.Builder<VariantBlockStateBuilder> modelForState()`
  Creates a builder for models to assign to this state, which when completed
   via ConfiguredModel.Builder.addModel() will assign the resultant set
   of models to this state.
  - returns: the model builder
- `public VariantBlockStateBuilder.PartialBlockstate addModels(ConfiguredModel... models)`
  Add models to the current state's variant. For use when it is more convenient
   to add multiple sets of models, as a replacement for
   setModels(ConfiguredModel...).
  - param: models - The models to add.
  - returns: this
  - throws: NullPointerException - If the parent builder is null
- `public VariantBlockStateBuilder setModels(ConfiguredModel... models)`
  Set this variant's models, and return the parent builder.
  - param: models - The models to set
  - returns: The parent builder instance
  - throws: NullPointerException - If the parent builder is null
- `public VariantBlockStateBuilder.PartialBlockstate partialState()`
  Complete this state without adding any new models, and return a new partial
   state via the parent builder. For use after calling
   addModels(ConfiguredModel...).
  - returns: A fresh partial state as specified by
 VariantBlockStateBuilder.partialState().
  - throws: NullPointerException - If the parent builder is null
- `public boolean equals(Object o)`
- `public int hashCode()`
- `public Block getOwner()`
- `public SortedMap<Property<?>,Comparable<?>> getSetStates()`
- `public boolean test(BlockState blockState)`
- `public String toString()`
- `public static Comparator<VariantBlockStateBuilder.PartialBlockstate> comparingByProperties()`

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`
