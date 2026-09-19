# net.minecraft.data.models

- [BlockModelGenerators](#blockmodelgenerators)
- [BlockModelGenerators.BlockEntityModelGenerator](#blockmodelgenerators.blockentitymodelgenerator)
- [BlockModelGenerators.BlockFamilyProvider](#blockmodelgenerators.blockfamilyprovider)
- [BlockModelGenerators.BlockStateGeneratorSupplier](#blockmodelgenerators.blockstategeneratorsupplier)
- [BlockModelGenerators.BookSlotModelCacheKey](#blockmodelgenerators.bookslotmodelcachekey)
- [BlockModelGenerators.WoodProvider](#blockmodelgenerators.woodprovider)
- [Class BlockModelGenerators.TintState](#class-blockmodelgenerators.tintstate)
- [ItemModelGenerators](#itemmodelgenerators)
- [ItemModelGenerators.TrimModelData](#itemmodelgenerators.trimmodeldata)
- [ModelProvider](#modelprovider)
## BlockModelGenerators

*class* `net.minecraft.data.models.BlockModelGenerators`

### Fields
- `final Consumer<BlockStateGenerator> blockStateOutput`
- `final BiConsumer<ResourceLocation,Supplier<com.google.gson.JsonElement>> modelOutput`
- `private final Consumer<Item> skippedAutoModelsOutput`
- `final List<Block> nonOrientableTrapdoor`
- `final Map<Block,BlockModelGenerators.BlockStateGeneratorSupplier> fullBlockModelCustomGenerators`
- `final Map<Block,TexturedModel> texturedModels`
- `static final Map<BlockFamily.Variant,BiConsumer<BlockModelGenerators.BlockFamilyProvider,Block>> SHAPE_CONSUMERS`
- `public static final List<com.mojang.datafixers.util.Pair<BooleanProperty,Function<ResourceLocation,Variant>>> MULTIFACE_GENERATOR`
- `private static final Map<BlockModelGenerators.BookSlotModelCacheKey,ResourceLocation> CHISELED_BOOKSHELF_SLOT_MODEL_CACHE`

### Methods
- `private static BlockStateGenerator createMirroredCubeGenerator(Block p_176110_,  ResourceLocation p_176111_,  TextureMapping p_176112_,  BiConsumer<ResourceLocation,Supplier<com.google.gson.JsonElement>> p_176113_)`
- `private static BlockStateGenerator createNorthWestMirroredCubeGenerator(Block p_236317_,  ResourceLocation p_236318_,  TextureMapping p_236319_,  BiConsumer<ResourceLocation,Supplier<com.google.gson.JsonElement>> p_236320_)`
- `private static BlockStateGenerator createMirroredColumnGenerator(Block p_176180_,  ResourceLocation p_176181_,  TextureMapping p_176182_,  BiConsumer<ResourceLocation,Supplier<com.google.gson.JsonElement>> p_176183_)`
- `void skipAutoItemBlock(Block p_124525_)`
- `void delegateItemModel(Block p_124798_,  ResourceLocation p_124799_)`
- `private void delegateItemModel(Item p_124520_,  ResourceLocation p_124521_)`
- `void createSimpleFlatItemModel(Item p_124518_)`
- `private void createSimpleFlatItemModel(Block p_124729_)`
- `private void createSimpleFlatItemModel(Block p_124576_,  String p_124577_)`
- `private static PropertyDispatch createHorizontalFacingDispatch()`
- `private static PropertyDispatch createHorizontalFacingDispatchAlt()`
- `private static PropertyDispatch createTorchHorizontalDispatch()`
- `private static PropertyDispatch createFacingDispatch()`
- `private static MultiVariantGenerator createRotatedVariant(Block p_124832_,  ResourceLocation p_124833_)`
- `private static Variant[] createRotatedVariants(ResourceLocation p_124689_)`
- `private static MultiVariantGenerator createRotatedVariant(Block p_124863_,  ResourceLocation p_124864_,  ResourceLocation p_124865_)`
- `private static PropertyDispatch createBooleanModelDispatch(BooleanProperty p_124623_,  ResourceLocation p_124624_,  ResourceLocation p_124625_)`
- `private void createRotatedMirroredVariantBlock(Block p_124787_)`
- `private void createRotatedVariantBlock(Block p_124824_)`
- `private void createBrushableBlock(Block p_277651_)`
- `static BlockStateGenerator createButton(Block p_124885_,  ResourceLocation p_124886_,  ResourceLocation p_124887_)`
- `private static PropertyDispatch.C4<Direction,DoubleBlockHalf,DoorHingeSide,Boolean> configureDoorHalf(PropertyDispatch.C4<Direction,DoubleBlockHalf,DoorHingeSide,Boolean> p_236305_,  DoubleBlockHalf p_236306_,  ResourceLocation p_236307_,  ResourceLocation p_236308_,  ResourceLocation p_236309_,  ResourceLocation p_236310_)`
- `private static BlockStateGenerator createDoor(Block p_236284_,  ResourceLocation p_236285_,  ResourceLocation p_236286_,  ResourceLocation p_236287_,  ResourceLocation p_236288_,  ResourceLocation p_236289_,  ResourceLocation p_236290_,  ResourceLocation p_236291_,  ResourceLocation p_236292_)`
- `static BlockStateGenerator createCustomFence(Block p_248625_,  ResourceLocation p_248654_,  ResourceLocation p_249827_,  ResourceLocation p_248819_,  ResourceLocation p_251062_,  ResourceLocation p_249076_)`
- `static BlockStateGenerator createFence(Block p_124905_,  ResourceLocation p_124906_,  ResourceLocation p_124907_)`
- `static BlockStateGenerator createWall(Block p_124839_,  ResourceLocation p_124840_,  ResourceLocation p_124841_,  ResourceLocation p_124842_)`
- `static BlockStateGenerator createFenceGate(Block p_124810_,  ResourceLocation p_124811_,  ResourceLocation p_124812_,  ResourceLocation p_124813_,  ResourceLocation p_124814_,  boolean p_251730_)`
- `static BlockStateGenerator createStairs(Block p_124867_,  ResourceLocation p_124868_,  ResourceLocation p_124869_,  ResourceLocation p_124870_)`
- `private static BlockStateGenerator createOrientableTrapdoor(Block p_124889_,  ResourceLocation p_124890_,  ResourceLocation p_124891_,  ResourceLocation p_124892_)`
- `private static BlockStateGenerator createTrapdoor(Block p_124909_,  ResourceLocation p_124910_,  ResourceLocation p_124911_,  ResourceLocation p_124912_)`
- `static MultiVariantGenerator createSimpleBlock(Block p_124860_,  ResourceLocation p_124861_)`
- `private static PropertyDispatch createRotatedPillar()`
- `static BlockStateGenerator createPillarBlockUVLocked(Block p_259670_,  TextureMapping p_259852_,  BiConsumer<ResourceLocation,Supplier<com.google.gson.JsonElement>> p_259181_)`
- `static BlockStateGenerator createAxisAlignedPillarBlock(Block p_124882_,  ResourceLocation p_124883_)`
- `private void createAxisAlignedPillarBlockCustomModel(Block p_124902_,  ResourceLocation p_124903_)`
- `public void createAxisAlignedPillarBlock(Block p_124587_,  TexturedModel.Provider p_124588_)`
- `private void createHorizontallyRotatedBlock(Block p_124745_,  TexturedModel.Provider p_124746_)`
- `static BlockStateGenerator createRotatedPillarWithHorizontalVariant(Block p_124925_,  ResourceLocation p_124926_,  ResourceLocation p_124927_)`
- `private void createRotatedPillarWithHorizontalVariant(Block p_124590_,  TexturedModel.Provider p_124591_,  TexturedModel.Provider p_124592_)`
- `private ResourceLocation createSuffixedVariant(Block p_124579_,  String p_124580_,  ModelTemplate p_124581_,  Function<ResourceLocation,TextureMapping> p_124582_)`
- `static BlockStateGenerator createPressurePlate(Block p_124942_,  ResourceLocation p_124943_,  ResourceLocation p_124944_)`
- `static BlockStateGenerator createSlab(Block p_124929_,  ResourceLocation p_124930_,  ResourceLocation p_124931_,  ResourceLocation p_124932_)`
- `public void createTrivialCube(Block p_124852_)`
- `public void createTrivialBlock(Block p_124795_,  TexturedModel.Provider p_124796_)`
- `private void createTrivialBlock(Block p_124568_,  TextureMapping p_124569_,  ModelTemplate p_124570_)`
- `private BlockModelGenerators.BlockFamilyProvider family(Block p_124877_)`
- `public void createHangingSign(Block p_249023_,  Block p_250861_,  Block p_250943_)`
- `void createDoor(Block p_124897_)`
- `void createOrientableTrapdoor(Block p_124917_)`
- `void createTrapdoor(Block p_124937_)`
- `private void createBigDripLeafBlock()`
- `private BlockModelGenerators.WoodProvider woodProvider(Block p_124949_)`
- `private void createNonTemplateModelBlock(Block p_124961_)`
- `private void createNonTemplateModelBlock(Block p_124534_,  Block p_124535_)`
- `private void createCrossBlockWithDefaultItem(Block p_124558_,  BlockModelGenerators.TintState p_124559_)`
- `private void createCrossBlockWithDefaultItem(Block p_124561_,  BlockModelGenerators.TintState p_124562_,  TextureMapping p_124563_)`
- `private void createCrossBlock(Block p_124738_,  BlockModelGenerators.TintState p_124739_)`
- `private void createCrossBlock(Block p_124741_,  BlockModelGenerators.TintState p_124742_,  TextureMapping p_124743_)`
- `private void createCrossBlock(Block p_273533_,  BlockModelGenerators.TintState p_273521_,  Property<Integer> p_273430_,  int... p_273001_)`
- `private void createPlant(Block p_124546_,  Block p_124547_,  BlockModelGenerators.TintState p_124548_)`
- `private void createCoralFans(Block p_124731_,  Block p_124732_)`
- `private void createStems(Block p_124789_,  Block p_124790_)`
- `private void createPitcherPlant()`
- `private void createPitcherCrop()`
- `private void createCoral(Block p_124537_,  Block p_124538_,  Block p_124539_,  Block p_124540_,  Block p_124541_,  Block p_124542_,  Block p_124543_,  Block p_124544_)`
- `private void createDoublePlant(Block p_124792_,  BlockModelGenerators.TintState p_124793_)`
- `private void createSunflower()`
- `private void createTallSeagrass()`
- `private void createSmallDripleaf()`
- `private void createDoubleBlock(Block p_124954_,  ResourceLocation p_124955_,  ResourceLocation p_124956_)`
- `private void createPassiveRail(Block p_124969_)`
- `private void createActiveRail(Block p_124975_)`
- `private BlockModelGenerators.BlockEntityModelGenerator blockEntityModels(ResourceLocation p_124691_,  Block p_124692_)`
- `private BlockModelGenerators.BlockEntityModelGenerator blockEntityModels(Block p_124826_,  Block p_124827_)`
- `private void createAirLikeBlock(Block p_124531_,  Item p_124532_)`
- `private void createAirLikeBlock(Block p_124922_,  ResourceLocation p_124923_)`
- `private void createFullAndCarpetBlocks(Block p_176218_,  Block p_176219_)`
- `private void createFlowerBed(Block p_273441_)`
- `private void createColoredBlockWithRandomRotations(TexturedModel.Provider p_124686_,  Block... p_124687_)`
- `private void createColoredBlockWithStateRotations(TexturedModel.Provider p_124778_,  Block... p_124779_)`
- `private void createGlassBlocks(Block p_124879_,  Block p_124880_)`
- `private void createCommandBlock(Block p_124978_)`
- `private void createAnvil(Block p_124981_)`
- `private List<Variant> createBambooModels(int p_124512_)`
- `private void createBamboo()`
- `private PropertyDispatch createColumnWithFacing()`
- `private void createBarrel()`
- `private static <T extends Comparable<T>> PropertyDispatch createEmptyOrFullDispatch(Property<T> p_124627_,  T p_124628_,  ResourceLocation p_124629_,  ResourceLocation p_124630_)`
- `private void createBeeNest(Block p_124584_,  Function<Block,TextureMapping> p_124585_)`
- `private void createCropBlock(Block p_124554_,  Property<Integer> p_124555_,  int... p_124556_)`
- `private void createBell()`
- `private void createGrindstone()`
- `private void createFurnace(Block p_124857_,  TexturedModel.Provider p_124858_)`
- `private void createCampfires(Block... p_124714_)`
- `private void createAzalea(Block p_176248_)`
- `private void createPottedAzalea(Block p_176250_)`
- `private void createBookshelf()`
- `private void createRedstoneWire()`
- `private void createComparator()`
- `private void createSmoothStoneSlab()`
- `private void createBrewingStand()`
- `private void createMushroomBlock(Block p_124984_)`
- `private void createCakeBlock()`
- `private void createCartographyTable()`
- `private void createSmithingTable()`
- `private void createCraftingTableLike(Block p_124550_,  Block p_124551_,  BiFunction<Block,Block,TextureMapping> p_124552_)`
- `public void createGenericCube(Block p_282830_)`
- `private void createPumpkins()`
- `private void createPumpkinVariant(Block p_124565_,  TextureMapping p_124566_)`
- `private void createCauldrons()`
- `private void createChorusFlower()`
- `private void createDispenserBlock(Block p_124987_)`
- `private void createEndPortalFrame()`
- `private void createChorusPlant()`
- `private void createComposter()`
- `private void createAmethystCluster(Block p_176252_)`
- `private void createAmethystClusters()`
- `private void createPointedDripstone()`
- `private Variant createPointedDripstoneVariant(Direction p_176117_,  DripstoneThickness p_176118_)`
- `private void createNyliumBlock(Block p_124990_)`
- `private void createDaylightDetector()`
- `private void createRotatableColumn(Block p_124993_)`
- `private void createLightningRod()`
- `private void createFarmland()`
- `private List<ResourceLocation> createFloorFireModels(Block p_124996_)`
- `private List<ResourceLocation> createSideFireModels(Block p_124999_)`
- `private List<ResourceLocation> createTopFireModels(Block p_125002_)`
- `private static List<Variant> wrapModels(List<ResourceLocation> p_124683_,  UnaryOperator<Variant> p_124684_)`
- `private void createFire()`
- `private void createSoulFire()`
- `private void createLantern(Block p_125005_)`
- `private void createMuddyMangroveRoots()`
- `private void createMangrovePropagule()`
- `private void createFrostedIce()`
- `private void createGrassBlocks()`
- `private void createGrassLikeBlock(Block p_124600_,  ResourceLocation p_124601_,  Variant p_124602_)`
- `private void createCocoa()`
- `private void createDirtPath()`
- `private void createWeightedPressurePlate(Block p_124919_,  Block p_124920_)`
- `private void createHopper()`
- `private void copyModel(Block p_124939_,  Block p_124940_)`
- `private void createIronBars()`
- `private void createNonTemplateHorizontalBlock(Block p_125008_)`
- `private void createLever()`
- `private void createLilyPad()`
- `private void createFrogspawnBlock()`
- `private void createNetherPortalBlock()`
- `private void createNetherrack()`
- `private void createObserver()`
- `private void createPistons()`
- `private void createPistonVariant(Block p_124604_,  ResourceLocation p_124605_,  TextureMapping p_124606_)`
- `private void createPistonHeads()`
- `private void createSculkSensor()`
- `private void createCalibratedSculkSensor()`
- `private void createSculkShrieker()`
- `private void createScaffolding()`
- `private void createCaveVines()`
- `private void createRedstoneLamp()`
- `private void createNormalTorch(Block p_124951_,  Block p_124952_)`
- `private void createRedstoneTorch()`
- `private void createRepeater()`
- `private void createSeaPickle()`
- `private void createSnowBlocks()`
- `private void createStonecutter()`
- `private void createStructureBlock()`
- `private void createSweetBerryBush()`
- `private void createTripwire()`
- `private void createTripwireHook()`
- `private ResourceLocation createTurtleEggModel(int p_124514_,  String p_124515_,  TextureMapping p_124516_)`
- `private ResourceLocation createTurtleEggModel(Integer p_124677_,  Integer p_124678_)`
- `private void createTurtleEgg()`
- `private void createSnifferEgg()`
- `private void createMultiface(Block p_176086_)`
- `private void createSculkCatalyst()`
- `private void createChiseledBookshelf()`
- `private void addSlotStateAndRotationVariants(MultiPartGenerator p_261951_,  Condition.TerminalCondition p_261482_,  VariantProperties.Rotation p_262169_)`
- `private void addBookSlotModel(MultiPartGenerator p_261839_,  Condition.TerminalCondition p_261634_,  VariantProperties.Rotation p_262044_,  BooleanProperty p_262163_,  ModelTemplate p_261986_,  boolean p_261790_)`
- `private void createMagmaBlock()`
- `private void createShulkerBox(Block p_125011_)`
- `private void createGrowingPlant(Block p_124734_,  Block p_124735_,  BlockModelGenerators.TintState p_124736_)`
- `private void createBedItem(Block p_124963_,  Block p_124964_)`
- `private void createInfestedStone()`
- `private void createInfestedDeepslate()`
- `private void createNetherRoots(Block p_124971_,  Block p_124972_)`
- `private void createRespawnAnchor()`
- `private Variant applyRotation(FrontAndTop p_124636_,  Variant p_124637_)`
- `private void createJigsaw()`
- `private void createPetrifiedOakSlab()`
- `public void run()`
- `private void createLightBlock()`
- `private void createCandleAndCandleCake(Block p_176245_,  Block p_176246_)`

## BlockModelGenerators.BlockEntityModelGenerator

*class* `net.minecraft.data.models.BlockModelGenerators.BlockEntityModelGenerator`

Enclosing class: BlockModelGenerators

### Fields
- `private final ResourceLocation baseModel`

### Methods
- `public BlockModelGenerators.BlockEntityModelGenerator create(Block... p_125026_)`
- `public BlockModelGenerators.BlockEntityModelGenerator createWithoutBlockItem(Block... p_125028_)`
- `public BlockModelGenerators.BlockEntityModelGenerator createWithCustomBlockItemModel(ModelTemplate p_125023_,  Block... p_125024_)`

## BlockModelGenerators.BlockFamilyProvider

*class* `net.minecraft.data.models.BlockModelGenerators.BlockFamilyProvider`

Enclosing class: BlockModelGenerators

### Fields
- `private final TextureMapping mapping`
- `private final Map<ModelTemplate,ResourceLocation> models`
- `@Nullable private BlockFamily family`
- `@Nullable private ResourceLocation fullBlock`

### Methods
- `public BlockModelGenerators.BlockFamilyProvider fullBlock(Block p_125041_,  ModelTemplate p_125042_)`
- `public BlockModelGenerators.BlockFamilyProvider fullBlockCopies(Block... p_176265_)`
- `public BlockModelGenerators.BlockFamilyProvider button(Block p_125036_)`
- `public BlockModelGenerators.BlockFamilyProvider wall(Block p_125046_)`
- `public BlockModelGenerators.BlockFamilyProvider customFence(Block p_250333_)`
- `public BlockModelGenerators.BlockFamilyProvider fence(Block p_125048_)`
- `public BlockModelGenerators.BlockFamilyProvider customFenceGate(Block p_248640_)`
- `public BlockModelGenerators.BlockFamilyProvider fenceGate(Block p_125050_)`
- `public BlockModelGenerators.BlockFamilyProvider pressurePlate(Block p_125052_)`
- `public BlockModelGenerators.BlockFamilyProvider sign(Block p_176270_)`
- `public BlockModelGenerators.BlockFamilyProvider slab(Block p_125054_)`
- `public BlockModelGenerators.BlockFamilyProvider stairs(Block p_125056_)`
- `private BlockModelGenerators.BlockFamilyProvider fullBlockVariant(Block p_176272_)`
- `private BlockModelGenerators.BlockFamilyProvider door(Block p_176274_)`
- `private void trapdoor(Block p_176276_)`
- `private ResourceLocation getOrCreateModel(ModelTemplate p_176262_,  Block p_176263_)`
- `public BlockModelGenerators.BlockFamilyProvider generateFor(BlockFamily p_176260_)`

## BlockModelGenerators.BlockStateGeneratorSupplier

*interface* `net.minecraft.data.models.BlockModelGenerators.BlockStateGeneratorSupplier`

Enclosing class: BlockModelGenerators

### Methods
- `BlockStateGenerator create(Block p_176278_,  ResourceLocation p_176279_,  TextureMapping p_176280_,  BiConsumer<ResourceLocation,Supplier<com.google.gson.JsonElement>> p_176281_)`

## BlockModelGenerators.BookSlotModelCacheKey

*record* `net.minecraft.data.models.BlockModelGenerators.BookSlotModelCacheKey`

Enclosing class: BlockModelGenerators

### Fields
- `private final ModelTemplate template`
  The field for the template record component.
- `private final String modelSuffix`
  The field for the modelSuffix record component.

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
- `public ModelTemplate template()`
  Returns the value of the template record component.
  - returns: the value of the template record component
- `public String modelSuffix()`
  Returns the value of the modelSuffix record component.
  - returns: the value of the modelSuffix record component

## BlockModelGenerators.WoodProvider

*class* `net.minecraft.data.models.BlockModelGenerators.WoodProvider`

Enclosing class: BlockModelGenerators

### Fields
- `private final TextureMapping logMapping`

### Methods
- `public BlockModelGenerators.WoodProvider wood(Block p_125075_)`
- `public BlockModelGenerators.WoodProvider log(Block p_125077_)`
- `public BlockModelGenerators.WoodProvider logWithHorizontal(Block p_125079_)`
- `public BlockModelGenerators.WoodProvider logUVLocked(Block p_259915_)`

## Class BlockModelGenerators.TintState

*enum* `net.minecraft.data.models.Class BlockModelGenerators.TintState`

Enclosing class: BlockModelGenerators

### Methods
- `public static BlockModelGenerators.TintState[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static BlockModelGenerators.TintState valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public ModelTemplate getCross()`
- `public ModelTemplate getCrossPot()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ItemModelGenerators

*class* `net.minecraft.data.models.ItemModelGenerators`

### Fields
- `public static final ResourceLocation TRIM_TYPE_PREDICATE_ID`
- `private static final List<ItemModelGenerators.TrimModelData> GENERATED_TRIM_MODELS`
- `private final BiConsumer<ResourceLocation,Supplier<com.google.gson.JsonElement>> output`

### Methods
- `private void generateFlatItem(Item p_125089_,  ModelTemplate p_125090_)`
- `private void generateFlatItem(Item p_125092_,  String p_125093_,  ModelTemplate p_125094_)`
- `private void generateFlatItem(Item p_125085_,  Item p_125086_,  ModelTemplate p_125087_)`
- `private void generateCompassItem(Item p_236322_)`
- `private void generateClockItem(Item p_236324_)`
- `private void generateLayeredItem(ResourceLocation p_267272_,  ResourceLocation p_266738_,  ResourceLocation p_267328_)`
- `private void generateLayeredItem(ResourceLocation p_268353_,  ResourceLocation p_268162_,  ResourceLocation p_268173_,  ResourceLocation p_268312_)`
- `private ResourceLocation getItemModelForTrimMaterial(ResourceLocation p_266817_,  String p_267030_)`
- `private com.google.gson.JsonObject generateBaseArmorTrimTemplate(ResourceLocation p_266939_,  Map<TextureSlot,ResourceLocation> p_267324_,  ArmorMaterial p_267970_)`
- `private void generateArmorTrims(ArmorItem p_267151_)`
- `public void run()`

## ItemModelGenerators.TrimModelData

*record* `net.minecraft.data.models.ItemModelGenerators.TrimModelData`

Enclosing class: ItemModelGenerators

### Fields
- `private final String name`
  The field for the name record component.
- `private final float itemModelIndex`
  The field for the itemModelIndex record component.
- `private final Map<ArmorMaterial,String> overrideArmorMaterials`
  The field for the overrideArmorMaterials record component.

### Methods
- `public String name(ArmorMaterial p_268105_)`
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
- `public String name()`
  Returns the value of the name record component.
  - returns: the value of the name record component
- `public float itemModelIndex()`
  Returns the value of the itemModelIndex record component.
  - returns: the value of the itemModelIndex record component
- `public Map<ArmorMaterial,String> overrideArmorMaterials()`
  Returns the value of the overrideArmorMaterials record component.
  - returns: the value of the overrideArmorMaterials record component

## ModelProvider

*class* `net.minecraft.data.models.ModelProvider`

### Fields
- `private final PackOutput.PathProvider blockStatePathProvider`
- `private final PackOutput.PathProvider modelPathProvider`

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`, `LOGGER`

### Methods
- `public CompletableFuture<?> run(CachedOutput p_253790_)`
- `private <T> CompletableFuture<?> saveCollection(CachedOutput p_254549_,  Map<T,? extends Supplier<com.google.gson.JsonElement>> p_253779_,  Function<T,Path> p_254013_)`
- `public final String getName()`
