# net.minecraft.world.level.chunk

- [BlockColumn](#blockcolumn)
- [BulkSectionAccess](#bulksectionaccess)
- [CarvingMask](#carvingmask)
- [CarvingMask.Mask](#carvingmask.mask)
- [ChunkAccess](#chunkaccess)
- [ChunkAccess.TicksToSave](#chunkaccess.tickstosave)
- [ChunkGenerator](#chunkgenerator)
- [ChunkGenerators](#chunkgenerators)
- [ChunkGeneratorStructureState](#chunkgeneratorstructurestate)
- [ChunkSource](#chunksource)
- [ChunkStatus](#chunkstatus)
- [ChunkStatus.GenerationTask](#chunkstatus.generationtask)
- [ChunkStatus.LoadingTask](#chunkstatus.loadingtask)
- [ChunkStatus.SimpleGenerationTask](#chunkstatus.simplegenerationtask)
- [Class ChunkStatus.ChunkType](#class-chunkstatus.chunktype)
- [Class LevelChunk.EntityCreationType](#class-levelchunk.entitycreationtype)
- [Class UpgradeData.BlockFixers](#class-upgradedata.blockfixers)
- [DataLayer](#datalayer)
- [EmptyLevelChunk](#emptylevelchunk)
- [GlobalPalette](#globalpalette)
- [HashMapPalette](#hashmappalette)
- [ImposterProtoChunk](#imposterprotochunk)
- [LevelChunk](#levelchunk)
- [LevelChunk.BoundTickingBlockEntity](#levelchunk.boundtickingblockentity)
- [LevelChunk.PostLoadProcessor](#levelchunk.postloadprocessor)
- [LevelChunk.RebindableTickingBlockEntityWrapper](#levelchunk.rebindabletickingblockentitywrapper)
- [LevelChunkSection](#levelchunksection)
- [LightChunk](#lightchunk)
- [LightChunkGetter](#lightchunkgetter)
- [LinearPalette](#linearpalette)
- [MissingPaletteEntryException](#missingpaletteentryexception)
- [Palette](#palette)
- [Palette.Factory](#palette.factory)
- [PalettedContainer](#palettedcontainer)
- [PalettedContainer.Configuration](#palettedcontainer.configuration)
- [PalettedContainer.CountConsumer](#palettedcontainer.countconsumer)
- [PalettedContainer.Data](#palettedcontainer.data)
- [PalettedContainer.Strategy](#palettedcontainer.strategy)
- [PalettedContainerRO](#palettedcontainerro)
- [PalettedContainerRO.PackedData](#palettedcontainerro.packeddata)
- [PalettedContainerRO.Unpacker>](#palettedcontainerro.unpacker)
- [PaletteResize](#paletteresize)
- [ProtoChunk](#protochunk)
- [SingleValuePalette](#singlevaluepalette)
- [StructureAccess](#structureaccess)
- [UpgradeData](#upgradedata)
- [UpgradeData.BlockFixer](#upgradedata.blockfixer)
## BlockColumn

*interface* `net.minecraft.world.level.chunk.BlockColumn`

### Methods
- `BlockState getBlock(int p_187573_)`
- `void setBlock(int p_187574_,  BlockState p_187575_)`

## BulkSectionAccess

*class* `net.minecraft.world.level.chunk.BulkSectionAccess`

### Fields
- `private final LevelAccessor level`
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectMap<LevelChunkSection> acquiredSections`
- `@Nullable private LevelChunkSection lastSection`
- `private long lastSectionKey`

### Methods
- `@Nullable public LevelChunkSection getSection(BlockPos p_156105_)`
- `public BlockState getBlockState(BlockPos p_156111_)`
- `public void close()`

## CarvingMask

*class* `net.minecraft.world.level.chunk.CarvingMask`

### Fields
- `private final int minY`
- `private final BitSet mask`
- `private CarvingMask.Mask additionalMask`

### Methods
- `public void setAdditionalMask(CarvingMask.Mask p_196711_)`
- `private int getIndex(int p_187599_,  int p_187600_,  int p_187601_)`
- `public void set(int p_187586_,  int p_187587_,  int p_187588_)`
- `public boolean get(int p_187595_,  int p_187596_,  int p_187597_)`
- `public Stream<BlockPos> stream(ChunkPos p_187590_)`
- `public long[] toArray()`

## CarvingMask.Mask

*interface* `net.minecraft.world.level.chunk.CarvingMask.Mask`

Enclosing class: CarvingMask

### Methods
- `boolean test(int p_196717_,  int p_196718_,  int p_196719_)`

## ChunkAccess

*class* `net.minecraft.world.level.chunk.ChunkAccess`

### Fields
- `public static final int NO_FILLED_SECTION` (= -1)
- `private static final org.slf4j.Logger LOGGER`
- `private static final it.unimi.dsi.fastutil.longs.LongSet EMPTY_REFERENCE_SET`
- `protected final it.unimi.dsi.fastutil.shorts.ShortList[] postProcessing`
- `protected volatile boolean unsaved`
- `private volatile boolean isLightCorrect`
- `protected final ChunkPos chunkPos`
- `private long inhabitedTime`
- `@Nullable @Deprecated private BiomeGenerationSettings carverBiomeSettings` (deprecated)
- `@Nullable protected NoiseChunk noiseChunk`
- `protected final UpgradeData upgradeData`
- `@Nullable protected BlendingData blendingData`
- `protected final Map<Heightmap.Types,Heightmap> heightmaps`
- `protected ChunkSkyLightSources skyLightSources`
- `private final Map<Structure,StructureStart> structureStarts`
- `private final Map<Structure,it.unimi.dsi.fastutil.longs.LongSet> structuresRefences`
- `protected final Map<BlockPos,CompoundTag> pendingBlockEntities`
- `protected final Map<BlockPos,BlockEntity> blockEntities`
- `protected final LevelHeightAccessor levelHeightAccessor`
- `protected final LevelChunkSection[] sections`

### Methods
- `private static void replaceMissingSections(Registry<Biome> p_281389_,  LevelChunkSection[] p_282796_)`
- `public GameEventListenerRegistry getListenerRegistry(int p_251437_)`
- `@Nullable public abstract BlockState setBlockState(BlockPos p_62087_,  BlockState p_62088_,  boolean p_62089_)`
- `public abstract void setBlockEntity(BlockEntity p_156114_)`
- `public abstract void addEntity(Entity p_62078_)`
- `public int getHighestFilledSectionIndex()`
- `@Deprecated(forRemoval=true) public int getHighestSectionPosition()` (deprecated)
- `public Set<BlockPos> getBlockEntitiesPos()`
- `public LevelChunkSection[] getSections()`
- `public LevelChunkSection getSection(int p_187657_)`
- `public Collection<Map.Entry<Heightmap.Types,Heightmap>> getHeightmaps()`
- `public void setHeightmap(Heightmap.Types p_62083_,  long[] p_62084_)`
- `public Heightmap getOrCreateHeightmapUnprimed(Heightmap.Types p_62079_)`
- `public boolean hasPrimedHeightmap(Heightmap.Types p_187659_)`
- `public int getHeight(Heightmap.Types p_62080_,  int p_62081_,  int p_62082_)`
- `public ChunkPos getPos()`
- `@Nullable public StructureStart getStartForStructure(Structure p_223005_)`
- `public void setStartForStructure(Structure p_223010_,  StructureStart p_223011_)`
- `public Map<Structure,StructureStart> getAllStarts()`
- `public void setAllStarts(Map<Structure,StructureStart> p_62090_)`
- `public it.unimi.dsi.fastutil.longs.LongSet getReferencesForStructure(Structure p_223017_)`
- `public void addReferenceForStructure(Structure p_223007_,  long p_223008_)`
- `public Map<Structure,it.unimi.dsi.fastutil.longs.LongSet> getAllReferences()`
- `public void setAllReferences(Map<Structure,it.unimi.dsi.fastutil.longs.LongSet> p_187663_)`
- `public boolean isYSpaceEmpty(int p_62075_,  int p_62076_)`
- `public void setUnsaved(boolean p_62094_)`
- `public boolean isUnsaved()`
- `public abstract ChunkStatus getStatus()`
- `public ChunkStatus getHighestGeneratedStatus()`
- `public abstract void removeBlockEntity(BlockPos p_62101_)`
- `public void markPosForPostprocessing(BlockPos p_62102_)`
- `public it.unimi.dsi.fastutil.shorts.ShortList[] getPostProcessing()`
- `public void addPackedPostProcess(short p_62092_,  int p_62093_)`
- `public void setBlockEntityNbt(CompoundTag p_62091_)`
- `@Nullable public CompoundTag getBlockEntityNbt(BlockPos p_62103_)`
- `@Nullable public abstract CompoundTag getBlockEntityNbtForSaving(BlockPos p_62104_)`
- `public final void findBlockLightSources(BiConsumer<BlockPos,BlockState> p_285269_)`
- `public void findBlocks(Predicate<BlockState> p_285343_,  BiConsumer<BlockPos,BlockState> p_285030_)`
- `public void findBlocks(BiPredicate<BlockState,BlockPos> p_285343_,  BiConsumer<BlockPos,BlockState> p_285030_)`
- `public abstract TickContainerAccess<Block> getBlockTicks()`
- `public abstract TickContainerAccess<Fluid> getFluidTicks()`
- `public abstract ChunkAccess.TicksToSave getTicksForSerialization()`
- `public UpgradeData getUpgradeData()`
- `public boolean isOldNoiseGeneration()`
- `@Nullable public BlendingData getBlendingData()`
- `public void setBlendingData(BlendingData p_187646_)`
- `public long getInhabitedTime()`
- `public void incrementInhabitedTime(long p_187633_)`
- `public void setInhabitedTime(long p_62099_)`
- `public static it.unimi.dsi.fastutil.shorts.ShortList getOrCreateOffsetList(it.unimi.dsi.fastutil.shorts.ShortList[] p_62096_,  int p_62097_)`
- `public boolean isLightCorrect()`
- `public void setLightCorrect(boolean p_62100_)`
- `public int getMinBuildHeight()`
- `public int getHeight()`
- `public NoiseChunk getOrCreateNoiseChunk(Function<ChunkAccess,NoiseChunk> p_223013_)`
- `@Deprecated public BiomeGenerationSettings carverBiome(Supplier<BiomeGenerationSettings> p_223015_)` (deprecated)
- `public Holder<Biome> getNoiseBiome(int p_204347_,  int p_204348_,  int p_204349_)`
- `public void fillBiomesFromNoise(BiomeResolver p_187638_,  Climate.Sampler p_187639_)`
- `public boolean hasAnyStructureReferences()`
- `@Nullable public BelowZeroRetrogen getBelowZeroRetrogen()`
- `public boolean isUpgrading()`
- `public LevelHeightAccessor getHeightAccessorForGeneration()`
- `public void initializeLightSources()`
- `public ChunkSkyLightSources getSkyLightSources()`
- `@Nullable public LevelAccessor getWorldForge()`

### Inherited methods
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockEntity`, `getBlockEntity`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockState`, `getBlockStates`, `getFluidState`, `getLightEmission`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getMaxBuildHeight`, `getMaxSection`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`

## ChunkAccess.TicksToSave

*record* `net.minecraft.world.level.chunk.ChunkAccess.TicksToSave`

Enclosing class: ChunkAccess

### Fields
- `private final SerializableTickContainer<Block> blocks`
  The field for the blocks record component.
- `private final SerializableTickContainer<Fluid> fluids`
  The field for the fluids record component.

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
- `public SerializableTickContainer<Block> blocks()`
  Returns the value of the blocks record component.
  - returns: the value of the blocks record component
- `public SerializableTickContainer<Fluid> fluids()`
  Returns the value of the fluids record component.
  - returns: the value of the fluids record component

## ChunkGenerator

*class* `net.minecraft.world.level.chunk.ChunkGenerator`

### Fields
- `public static final com.mojang.serialization.Codec<ChunkGenerator> CODEC`
- `protected final BiomeSource biomeSource`
- `private final Supplier<List<FeatureSorter.StepFeatureData>> featuresPerStep`
- `private final Function<Holder<Biome>,BiomeGenerationSettings> generationSettingsGetter`

### Methods
- `protected abstract com.mojang.serialization.Codec<? extends ChunkGenerator> codec()`
- `public ChunkGeneratorStructureState createState(HolderLookup<StructureSet> p_256405_,  RandomState p_256101_,  long p_256018_)`
- `public Optional<ResourceKey<com.mojang.serialization.Codec<? extends ChunkGenerator>>> getTypeNameForDataFixer()`
- `public CompletableFuture<ChunkAccess> createBiomes(Executor p_223159_,  RandomState p_223160_,  Blender p_223161_,  StructureManager p_223162_,  ChunkAccess p_223163_)`
- `public abstract void applyCarvers(WorldGenRegion p_223043_,  long p_223044_,  RandomState p_223045_,  BiomeManager p_223046_,  StructureManager p_223047_,  ChunkAccess p_223048_,  GenerationStep.Carving p_223049_)`
- `@Nullable public com.mojang.datafixers.util.Pair<BlockPos,Holder<Structure>> findNearestMapStructure(ServerLevel p_223038_,  HolderSet<Structure> p_223039_,  BlockPos p_223040_,  int p_223041_,  boolean p_223042_)`
- `@Nullable private com.mojang.datafixers.util.Pair<BlockPos,Holder<Structure>> getNearestGeneratedStructure(Set<Holder<Structure>> p_223182_,  ServerLevel p_223183_,  StructureManager p_223184_,  BlockPos p_223185_,  boolean p_223186_,  ConcentricRingsStructurePlacement p_223187_)`
- `@Nullable private static com.mojang.datafixers.util.Pair<BlockPos,Holder<Structure>> getNearestGeneratedStructure(Set<Holder<Structure>> p_223189_,  LevelReader p_223190_,  StructureManager p_223191_,  int p_223192_,  int p_223193_,  int p_223194_,  boolean p_223195_,  long p_223196_,  RandomSpreadStructurePlacement p_223197_)`
- `@Nullable private static com.mojang.datafixers.util.Pair<BlockPos,Holder<Structure>> getStructureGeneratingAt(Set<Holder<Structure>> p_223199_,  LevelReader p_223200_,  StructureManager p_223201_,  boolean p_223202_,  StructurePlacement p_223203_,  ChunkPos p_223204_)`
- `private static boolean tryAddReference(StructureManager p_223060_,  StructureStart p_223061_)`
- `public void applyBiomeDecoration(WorldGenLevel p_223087_,  ChunkAccess p_223088_,  StructureManager p_223089_)`
- `private static BoundingBox getWritableArea(ChunkAccess p_187718_)`
- `public abstract void buildSurface(WorldGenRegion p_223050_,  StructureManager p_223051_,  RandomState p_223052_,  ChunkAccess p_223053_)`
- `public abstract void spawnOriginalMobs(WorldGenRegion p_62167_)`
- `public int getSpawnHeight(LevelHeightAccessor p_156157_)`
- `public BiomeSource getBiomeSource()`
- `public abstract int getGenDepth()`
- `public WeightedRandomList<MobSpawnSettings.SpawnerData> getMobsAt(Holder<Biome> p_223134_,  StructureManager p_223135_,  MobCategory p_223136_,  BlockPos p_223137_)`
- `public void createStructures(RegistryAccess p_255835_,  ChunkGeneratorStructureState p_256505_,  StructureManager p_255934_,  ChunkAccess p_255767_,  StructureTemplateManager p_255832_)`
- `private boolean tryGenerateStructure(StructureSet.StructureSelectionEntry p_223105_,  StructureManager p_223106_,  RegistryAccess p_223107_,  RandomState p_223108_,  StructureTemplateManager p_223109_,  long p_223110_,  ChunkAccess p_223111_,  ChunkPos p_223112_,  SectionPos p_223113_)`
- `private static int fetchReferences(StructureManager p_223055_,  ChunkAccess p_223056_,  SectionPos p_223057_,  Structure p_223058_)`
- `public void createReferences(WorldGenLevel p_223077_,  StructureManager p_223078_,  ChunkAccess p_223079_)`
- `public abstract CompletableFuture<ChunkAccess> fillFromNoise(Executor p_223209_,  Blender p_223210_,  RandomState p_223211_,  StructureManager p_223212_,  ChunkAccess p_223213_)`
- `public abstract int getSeaLevel()`
- `public abstract int getMinY()`
- `public abstract int getBaseHeight(int p_223032_,  int p_223033_,  Heightmap.Types p_223034_,  LevelHeightAccessor p_223035_,  RandomState p_223036_)`
- `public abstract NoiseColumn getBaseColumn(int p_223028_,  int p_223029_,  LevelHeightAccessor p_223030_,  RandomState p_223031_)`
- `public int getFirstFreeHeight(int p_223222_,  int p_223223_,  Heightmap.Types p_223224_,  LevelHeightAccessor p_223225_,  RandomState p_223226_)`
- `public int getFirstOccupiedHeight(int p_223236_,  int p_223237_,  Heightmap.Types p_223238_,  LevelHeightAccessor p_223239_,  RandomState p_223240_)`
- `public abstract void addDebugScreenInfo(List<String> p_223175_,  RandomState p_223176_,  BlockPos p_223177_)`
- `@Deprecated public BiomeGenerationSettings getBiomeGenerationSettings(Holder<Biome> p_223132_)` (deprecated)

## ChunkGenerators

*class* `net.minecraft.world.level.chunk.ChunkGenerators`

### Methods
- `public static com.mojang.serialization.Codec<? extends ChunkGenerator> bootstrap(Registry<com.mojang.serialization.Codec<? extends ChunkGenerator>> p_223243_)`

## ChunkGeneratorStructureState

*class* `net.minecraft.world.level.chunk.ChunkGeneratorStructureState`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final RandomState randomState`
- `private final BiomeSource biomeSource`
- `private final long levelSeed`
- `private final long concentricRingsSeed`
- `private final Map<Structure,List<StructurePlacement>> placementsForStructure`
- `private final Map<ConcentricRingsStructurePlacement,CompletableFuture<List<ChunkPos>>> ringPositions`
- `private boolean hasGeneratedPositions`
- `private final List<Holder<StructureSet>> possibleStructureSets`

### Methods
- `public static ChunkGeneratorStructureState createForFlat(RandomState p_256240_,  long p_256404_,  BiomeSource p_256274_,  Stream<Holder<StructureSet>> p_256348_)`
- `public static ChunkGeneratorStructureState createForNormal(RandomState p_256197_,  long p_255806_,  BiomeSource p_256653_,  HolderLookup<StructureSet> p_256659_)`
- `private static boolean hasBiomesForStructureSet(StructureSet p_255766_,  BiomeSource p_256424_)`
- `public List<Holder<StructureSet>> possibleStructureSets()`
- `private void generatePositions()`
- `private CompletableFuture<List<ChunkPos>> generateRingPositions(Holder<StructureSet> p_255966_,  ConcentricRingsStructurePlacement p_255744_)`
- `public void ensureStructuresGenerated()`
- `@Nullable public List<ChunkPos> getRingPositionsFor(ConcentricRingsStructurePlacement p_256667_)`
- `public List<StructurePlacement> getPlacementsForStructure(Holder<Structure> p_256494_)`
- `public RandomState randomState()`
- `public boolean hasStructureChunkInRange(Holder<StructureSet> p_256489_,  int p_256593_,  int p_256115_,  int p_256619_)`
- `public long getLevelSeed()`

## ChunkSource

*class* `net.minecraft.world.level.chunk.ChunkSource`

### Methods
- `@Nullable public LevelChunk getChunk(int p_62228_,  int p_62229_,  boolean p_62230_)`
- `@Nullable public LevelChunk getChunkNow(int p_62221_,  int p_62222_)`
- `@Nullable public LightChunk getChunkForLighting(int p_62241_,  int p_62242_)`
- `public boolean hasChunk(int p_62238_,  int p_62239_)`
- `@Nullable public abstract ChunkAccess getChunk(int p_62223_,  int p_62224_,  ChunkStatus p_62225_,  boolean p_62226_)`
- `public abstract void tick(BooleanSupplier p_202162_,  boolean p_202163_)`
- `public abstract String gatherStats()`
- `public abstract int getLoadedChunksCount()`
- `public void close()  throws IOException`
  - throws: IOException
- `public abstract LevelLightEngine getLightEngine()`
- `public void setSpawnSettings(boolean p_62236_,  boolean p_62237_)`
- `public void updateChunkForced(ChunkPos p_62233_,  boolean p_62234_)`

### Inherited methods
- from `net.minecraft.world.level.chunk.LightChunkGetter`: `getLevel`, `onLightUpdate`

## ChunkStatus

*class* `net.minecraft.world.level.chunk.ChunkStatus`

### Fields
- `public static final int MAX_STRUCTURE_DISTANCE` (= 8)
- `private static final EnumSet<Heightmap.Types> PRE_FEATURES`
- `public static final EnumSet<Heightmap.Types> POST_FEATURES`
- `private static final ChunkStatus.LoadingTask PASSTHROUGH_LOAD_TASK`
- `public static final ChunkStatus EMPTY`
- `public static final ChunkStatus STRUCTURE_STARTS`
- `public static final ChunkStatus STRUCTURE_REFERENCES`
- `public static final ChunkStatus BIOMES`
- `public static final ChunkStatus NOISE`
- `public static final ChunkStatus SURFACE`
- `public static final ChunkStatus CARVERS`
- `public static final ChunkStatus FEATURES`
- `public static final ChunkStatus INITIALIZE_LIGHT`
- `public static final ChunkStatus LIGHT`
- `public static final ChunkStatus SPAWN`
- `public static final ChunkStatus FULL`
- `private static final List<ChunkStatus> STATUS_BY_RANGE`
- `private static final it.unimi.dsi.fastutil.ints.IntList RANGE_BY_STATUS`
- `private final int index`
- `private final ChunkStatus parent`
- `private final ChunkStatus.GenerationTask generationTask`
- `private final ChunkStatus.LoadingTask loadingTask`
- `private final int range`
- `private final boolean hasLoadDependencies`
- `private final ChunkStatus.ChunkType chunkType`
- `private final EnumSet<Heightmap.Types> heightmapsAfter`

### Methods
- `private static CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>> initializeLight(ThreadedLevelLightEngine p_282288_,  ChunkAccess p_282906_)`
- `private static CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>> lightChunk(ThreadedLevelLightEngine p_285039_,  ChunkAccess p_285316_)`
- `private static ChunkStatus registerSimple(String p_62415_,  @Nullable  ChunkStatus p_62416_,  int p_62417_,  EnumSet<Heightmap.Types> p_62418_,  ChunkStatus.ChunkType p_62419_,  ChunkStatus.SimpleGenerationTask p_62420_)`
- `private static ChunkStatus register(String p_62400_,  @Nullable  ChunkStatus p_62401_,  int p_62402_,  EnumSet<Heightmap.Types> p_62403_,  ChunkStatus.ChunkType p_62404_,  ChunkStatus.GenerationTask p_62405_)`
- `private static ChunkStatus register(String p_282817_,  @Nullable  ChunkStatus p_282644_,  int p_281535_,  boolean p_282329_,  EnumSet<Heightmap.Types> p_281310_,  ChunkStatus.ChunkType p_281968_,  ChunkStatus.GenerationTask p_283654_,  ChunkStatus.LoadingTask p_282175_)`
- `public static List<ChunkStatus> getStatusList()`
- `private static boolean isLighted(ChunkAccess p_285378_)`
- `public static ChunkStatus getStatusAroundFullChunk(int p_156186_)`
- `public static int maxDistance()`
- `public static int getDistance(ChunkStatus p_62371_)`
- `public int getIndex()`
- `public ChunkStatus getParent()`
- `public CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>> generate(Executor p_283276_,  ServerLevel p_281420_,  ChunkGenerator p_281836_,  StructureTemplateManager p_281305_,  ThreadedLevelLightEngine p_282570_,  Function<ChunkAccess,CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>>> p_283114_,  List<ChunkAccess> p_282723_)`
- `public CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>> load(ServerLevel p_223245_,  StructureTemplateManager p_223246_,  ThreadedLevelLightEngine p_223247_,  Function<ChunkAccess,CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>>> p_223248_,  ChunkAccess p_223249_)`
- `public int getRange()`
- `public boolean hasLoadDependencies()`
- `public ChunkStatus.ChunkType getChunkType()`
- `public static ChunkStatus byName(String p_62398_)`
- `public EnumSet<Heightmap.Types> heightmapsAfter()`
- `public boolean isOrAfter(ChunkStatus p_62428_)`
- `public String toString()`

## ChunkStatus.GenerationTask

*interface* `net.minecraft.world.level.chunk.ChunkStatus.GenerationTask`

Enclosing class: ChunkStatus

### Methods
- `CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>> doWork(ChunkStatus p_223371_,  Executor p_223372_,  ServerLevel p_223373_,  ChunkGenerator p_223374_,  StructureTemplateManager p_223375_,  ThreadedLevelLightEngine p_223376_,  Function<ChunkAccess,CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>>> p_223377_,  List<ChunkAccess> p_223378_,  ChunkAccess p_223379_)`

## ChunkStatus.LoadingTask

*interface* `net.minecraft.world.level.chunk.ChunkStatus.LoadingTask`

Enclosing class: ChunkStatus

### Methods
- `CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>> doWork(ChunkStatus p_223382_,  ServerLevel p_223383_,  StructureTemplateManager p_223384_,  ThreadedLevelLightEngine p_223385_,  Function<ChunkAccess,CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>>> p_223386_,  ChunkAccess p_223387_)`

## ChunkStatus.SimpleGenerationTask

*interface* `net.minecraft.world.level.chunk.ChunkStatus.SimpleGenerationTask`

All Superinterfaces: ChunkStatus.GenerationTask

Enclosing class: ChunkStatus

### Methods
- `default CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>> doWork(ChunkStatus p_281382_,  Executor p_283285_,  ServerLevel p_283408_,  ChunkGenerator p_282263_,  StructureTemplateManager p_282374_,  ThreadedLevelLightEngine p_281701_,  Function<ChunkAccess,CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>>> p_282473_,  List<ChunkAccess> p_282316_,  ChunkAccess p_281861_)`
- `void doWork(ChunkStatus p_156323_,  ServerLevel p_156324_,  ChunkGenerator p_156325_,  List<ChunkAccess> p_156326_,  ChunkAccess p_156327_)`

## Class ChunkStatus.ChunkType

*enum* `net.minecraft.world.level.chunk.Class ChunkStatus.ChunkType`

Enclosing class: ChunkStatus

### Methods
- `public static ChunkStatus.ChunkType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ChunkStatus.ChunkType valueOf(String name)`
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

## Class LevelChunk.EntityCreationType

*enum* `net.minecraft.world.level.chunk.Class LevelChunk.EntityCreationType`

Enclosing class: LevelChunk

### Methods
- `public static LevelChunk.EntityCreationType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static LevelChunk.EntityCreationType valueOf(String name)`
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

## Class UpgradeData.BlockFixers

*enum* `net.minecraft.world.level.chunk.Class UpgradeData.BlockFixers`

Enclosing class: UpgradeData

### Fields
- `public static final Direction[] DIRECTIONS`

### Methods
- `public static UpgradeData.BlockFixers[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static UpgradeData.BlockFixers valueOf(String name)`
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
- from `net.minecraft.world.level.chunk.UpgradeData.BlockFixer`: `processChunk`, `updateShape`

## DataLayer

*class* `net.minecraft.world.level.chunk.DataLayer`

### Fields
- `public static final int LAYER_COUNT` (= 16)
- `public static final int LAYER_SIZE` (= 128)
- `public static final int SIZE` (= 2048)
- `private static final int NIBBLE_SIZE` (= 4)
- `@Nullable protected byte[] data`
- `private int defaultValue`

### Methods
- `public int get(int p_62561_,  int p_62562_,  int p_62563_)`
- `public void set(int p_62565_,  int p_62566_,  int p_62567_,  int p_62568_)`
- `private static int getIndex(int p_62572_,  int p_62573_,  int p_62574_)`
- `private int get(int p_62571_)`
- `private void set(int p_62558_,  int p_62559_)`
- `private static int getNibbleIndex(int p_182482_)`
- `private static int getByteIndex(int p_62579_)`
- `public void fill(int p_285142_)`
- `private static byte packFilled(int p_282176_)`
- `public byte[] getData()`
- `public DataLayer copy()`
- `public String toString()`
- `public String layerToString(int p_156342_)`
- `public boolean isDefinitelyHomogenous()`
- `public boolean isDefinitelyFilledWith(int p_281763_)`
- `public boolean isEmpty()`

## EmptyLevelChunk

*class* `net.minecraft.world.level.chunk.EmptyLevelChunk`

### Fields
- `private final Holder<Biome> biome`

### Inherited fields
- from `net.minecraft.world.level.chunk.LevelChunk`: `level`, `LOGGER`
- from `net.minecraft.world.level.chunk.ChunkAccess`: `blendingData`, `blockEntities`, `chunkPos`, `heightmaps`, `levelHeightAccessor`, `NO_FILLED_SECTION`, `noiseChunk`, `pendingBlockEntities`, `postProcessing`, `sections`, `skyLightSources`, `unsaved`, `upgradeData`

### Methods
- `public BlockState getBlockState(BlockPos p_62625_)`
- `@Nullable public BlockState setBlockState(BlockPos p_62605_,  BlockState p_62606_,  boolean p_62607_)`
- `public FluidState getFluidState(BlockPos p_62621_)`
- `public int getLightEmission(BlockPos p_62628_)`
- `@Nullable public BlockEntity getBlockEntity(BlockPos p_62609_,  LevelChunk.EntityCreationType p_62610_)`
- `public void addAndRegisterBlockEntity(BlockEntity p_156346_)`
- `public void setBlockEntity(BlockEntity p_156344_)`
- `public void removeBlockEntity(BlockPos p_62623_)`
- `public boolean isEmpty()`
- `public boolean isYSpaceEmpty(int p_62587_,  int p_62588_)`
- `public FullChunkStatus getFullStatus()`
- `public Holder<Biome> getNoiseBiome(int p_204426_,  int p_204427_,  int p_204428_)`

### Inherited methods
- from `net.minecraft.world.level.chunk.LevelChunk`: `addEntity`, `areCapsCompatible`, `areCapsCompatible`, `clearAllBlockEntities`, `getBlockEntities`, `getBlockEntity`, `getBlockEntityNbtForSaving`, `getBlockTicks`, `getCapability`, `getFluidState`, `getFluidTicks`, `getLevel`, `getListenerRegistry`, `getStatus`, `getTicksForSerialization`, `getWorldForge`, `invalidateCaps`, `isTicking`, `postProcessGeneration`, `readCapsFromNBT`, `registerAllBlockEntitiesAfterLevelLoad`, `registerTickContainerInLevel`, `replaceBiomes`, `replaceWithPacketData`, `reviveCaps`, `runPostLoad`, `setFullStatus`, `setLoaded`, `unpackTicks`, `unregisterTickContainerFromLevel`, `writeCapsToNBT`
- from `net.minecraft.world.level.chunk.ChunkAccess`: `addPackedPostProcess`, `addReferenceForStructure`, `carverBiome`, `fillBiomesFromNoise`, `findBlockLightSources`, `findBlocks`, `findBlocks`, `getAllReferences`, `getAllStarts`, `getBelowZeroRetrogen`, `getBlendingData`, `getBlockEntitiesPos`, `getBlockEntityNbt`, `getHeight`, `getHeight`, `getHeightAccessorForGeneration`, `getHeightmaps`, `getHighestFilledSectionIndex`, `getHighestGeneratedStatus`, `getHighestSectionPosition`, `getInhabitedTime`, `getMinBuildHeight`, `getOrCreateHeightmapUnprimed`, `getOrCreateNoiseChunk`, `getOrCreateOffsetList`, `getPos`, `getPostProcessing`, `getReferencesForStructure`, `getSection`, `getSections`, `getSkyLightSources`, `getStartForStructure`, `getUpgradeData`, `hasAnyStructureReferences`, `hasPrimedHeightmap`, `incrementInhabitedTime`, `initializeLightSources`, `isLightCorrect`, `isOldNoiseGeneration`, `isUnsaved`, `isUpgrading`, `markPosForPostprocessing`, `setAllReferences`, `setAllStarts`, `setBlendingData`, `setBlockEntityNbt`, `setHeightmap`, `setInhabitedTime`, `setLightCorrect`, `setStartForStructure`, `setUnsaved`
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockEntity`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockStates`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getMaxBuildHeight`, `getMaxSection`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`

## GlobalPalette

*class* `net.minecraft.world.level.chunk.GlobalPalette`

### Fields
- `private final IdMap<T> registry`

### Methods
- `public static <A> Palette<A> create(int p_187899_,  IdMap<A> p_187900_,  PaletteResize<A> p_187901_,  List<A> p_187902_)`
- `public int idFor(T p_62648_)`
- `public boolean maybeHas(Predicate<T> p_62650_)`
- `public T valueFor(int p_62646_)`
- `public void read(FriendlyByteBuf p_62654_)`
- `public void write(FriendlyByteBuf p_62656_)`
- `public int getSerializedSize()`
- `public int getSize()`
- `public Palette<T> copy()`

## HashMapPalette

*class* `net.minecraft.world.level.chunk.HashMapPalette`

### Fields
- `private final IdMap<T> registry`
- `private final CrudeIncrementalIntIdentityHashBiMap<T> values`
- `private final PaletteResize<T> resizeHandler`
- `private final int bits`

### Methods
- `public static <A> Palette<A> create(int p_187913_,  IdMap<A> p_187914_,  PaletteResize<A> p_187915_,  List<A> p_187916_)`
- `public int idFor(T p_62673_)`
- `public boolean maybeHas(Predicate<T> p_62675_)`
- `public T valueFor(int p_62671_)`
- `public void read(FriendlyByteBuf p_62679_)`
- `public void write(FriendlyByteBuf p_62684_)`
- `public int getSerializedSize()`
- `public List<T> getEntries()`
- `public int getSize()`
- `public Palette<T> copy()`

## ImposterProtoChunk

*class* `net.minecraft.world.level.chunk.ImposterProtoChunk`

### Fields
- `private final LevelChunk wrapped`
- `private final boolean allowWrites`

### Inherited fields
- from `net.minecraft.world.level.chunk.ChunkAccess`: `blendingData`, `blockEntities`, `chunkPos`, `heightmaps`, `levelHeightAccessor`, `NO_FILLED_SECTION`, `noiseChunk`, `pendingBlockEntities`, `postProcessing`, `sections`, `skyLightSources`, `unsaved`, `upgradeData`

### Methods
- `@Nullable public BlockEntity getBlockEntity(BlockPos p_62744_)`
- `public BlockState getBlockState(BlockPos p_62749_)`
- `public FluidState getFluidState(BlockPos p_62736_)`
- `public int getMaxLightLevel()`
- `public LevelChunkSection getSection(int p_187932_)`
- `@Nullable public BlockState setBlockState(BlockPos p_62722_,  BlockState p_62723_,  boolean p_62724_)`
- `public void setBlockEntity(BlockEntity p_156358_)`
- `public void addEntity(Entity p_62692_)`
- `public void setStatus(ChunkStatus p_62698_)`
- `public LevelChunkSection[] getSections()`
- `public void setHeightmap(Heightmap.Types p_62706_,  long[] p_62707_)`
- `private Heightmap.Types fixType(Heightmap.Types p_62742_)`
- `public Heightmap getOrCreateHeightmapUnprimed(Heightmap.Types p_187928_)`
- `public int getHeight(Heightmap.Types p_62702_,  int p_62703_,  int p_62704_)`
- `public Holder<Biome> getNoiseBiome(int p_204430_,  int p_204431_,  int p_204432_)`
- `public ChunkPos getPos()`
- `@Nullable public StructureStart getStartForStructure(Structure p_223400_)`
- `public void setStartForStructure(Structure p_223405_,  StructureStart p_223406_)`
- `public Map<Structure,StructureStart> getAllStarts()`
- `public void setAllStarts(Map<Structure,StructureStart> p_62726_)`
- `public it.unimi.dsi.fastutil.longs.LongSet getReferencesForStructure(Structure p_223408_)`
- `public void addReferenceForStructure(Structure p_223402_,  long p_223403_)`
- `public Map<Structure,it.unimi.dsi.fastutil.longs.LongSet> getAllReferences()`
- `public void setAllReferences(Map<Structure,it.unimi.dsi.fastutil.longs.LongSet> p_62738_)`
- `public void setUnsaved(boolean p_62730_)`
- `public boolean isUnsaved()`
- `public ChunkStatus getStatus()`
- `public void removeBlockEntity(BlockPos p_62747_)`
- `public void markPosForPostprocessing(BlockPos p_62752_)`
- `public void setBlockEntityNbt(CompoundTag p_62728_)`
- `@Nullable public CompoundTag getBlockEntityNbt(BlockPos p_62757_)`
- `@Nullable public CompoundTag getBlockEntityNbtForSaving(BlockPos p_62760_)`
- `public void findBlocks(Predicate<BlockState> p_285465_,  BiConsumer<BlockPos,BlockState> p_285061_)`
- `public void findBlocks(BiPredicate<BlockState,BlockPos> p_285343_,  BiConsumer<BlockPos,BlockState> p_285030_)`
- `public TickContainerAccess<Block> getBlockTicks()`
- `public TickContainerAccess<Fluid> getFluidTicks()`
- `public ChunkAccess.TicksToSave getTicksForSerialization()`
- `@Nullable public BlendingData getBlendingData()`
- `public void setBlendingData(BlendingData p_187930_)`
- `public CarvingMask getCarvingMask(GenerationStep.Carving p_187926_)`
- `public CarvingMask getOrCreateCarvingMask(GenerationStep.Carving p_187934_)`
- `public LevelChunk getWrapped()`
- `public boolean isLightCorrect()`
- `public void setLightCorrect(boolean p_62740_)`
- `public void fillBiomesFromNoise(BiomeResolver p_187923_,  Climate.Sampler p_187924_)`
- `public void initializeLightSources()`
- `public ChunkSkyLightSources getSkyLightSources()`

### Inherited methods
- from `net.minecraft.world.level.chunk.ProtoChunk`: `addEntity`, `addPackedPostProcess`, `getBelowZeroRetrogen`, `getBlockEntities`, `getBlockEntityNbts`, `getEntities`, `getHeightAccessorForGeneration`, `packOffsetCoordinates`, `setBelowZeroRetrogen`, `setCarvingMask`, `setLightEngine`, `unpackBlockTicks`, `unpackFluidTicks`, `unpackOffsetCoordinates`
- from `net.minecraft.world.level.chunk.ChunkAccess`: `carverBiome`, `findBlockLightSources`, `getBlockEntitiesPos`, `getHeight`, `getHeightmaps`, `getHighestFilledSectionIndex`, `getHighestGeneratedStatus`, `getHighestSectionPosition`, `getInhabitedTime`, `getListenerRegistry`, `getMinBuildHeight`, `getOrCreateNoiseChunk`, `getOrCreateOffsetList`, `getPostProcessing`, `getUpgradeData`, `getWorldForge`, `hasAnyStructureReferences`, `hasPrimedHeightmap`, `incrementInhabitedTime`, `isOldNoiseGeneration`, `isUpgrading`, `isYSpaceEmpty`, `setInhabitedTime`
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockEntity`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockStates`, `getLightEmission`, `isBlockInLine`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getMaxBuildHeight`, `getMaxSection`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`

## LevelChunk

*class* `net.minecraft.world.level.chunk.LevelChunk`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `private static final TickingBlockEntity NULL_TICKER`
- `private final Map<BlockPos,LevelChunk.RebindableTickingBlockEntityWrapper> tickersInLevel`
- `private boolean loaded`
- `final Level level`
- `@Nullable private Supplier<FullChunkStatus> fullStatus`
- `@Nullable private LevelChunk.PostLoadProcessor postLoad`
- `private final it.unimi.dsi.fastutil.ints.Int2ObjectMap<GameEventListenerRegistry> gameEventListenerRegistrySections`
- `private final LevelChunkTicks<Block> blockTicks`
- `private final LevelChunkTicks<Fluid> fluidTicks`
- `private final CapabilityProvider.AsField<LevelChunk> capProvider`

### Inherited fields
- from `net.minecraft.world.level.chunk.ChunkAccess`: `blendingData`, `blockEntities`, `chunkPos`, `heightmaps`, `levelHeightAccessor`, `NO_FILLED_SECTION`, `noiseChunk`, `pendingBlockEntities`, `postProcessing`, `sections`, `skyLightSources`, `unsaved`, `upgradeData`

### Methods
- `public TickContainerAccess<Block> getBlockTicks()`
- `public TickContainerAccess<Fluid> getFluidTicks()`
- `public ChunkAccess.TicksToSave getTicksForSerialization()`
- `public GameEventListenerRegistry getListenerRegistry(int p_251193_)`
- `public BlockState getBlockState(BlockPos p_62923_)`
- `public FluidState getFluidState(BlockPos p_62895_)`
- `public FluidState getFluidState(int p_62815_,  int p_62816_,  int p_62817_)`
- `@Nullable public BlockState setBlockState(BlockPos p_62865_,  BlockState p_62866_,  boolean p_62867_)`
- `@Deprecated public void addEntity(Entity p_62826_)` (deprecated)
- `@Nullable private BlockEntity createBlockEntity(BlockPos p_62935_)`
- `@Nullable public BlockEntity getBlockEntity(BlockPos p_62912_)`
- `@Nullable public BlockEntity getBlockEntity(BlockPos p_62868_,  LevelChunk.EntityCreationType p_62869_)`
- `public void addAndRegisterBlockEntity(BlockEntity p_156391_)`
- `private boolean isInLevel()`
- `boolean isTicking(BlockPos p_156411_)`
- `public void setBlockEntity(BlockEntity p_156374_)`
- `@Nullable public CompoundTag getBlockEntityNbtForSaving(BlockPos p_62932_)`
- `public void removeBlockEntity(BlockPos p_62919_)`
- `private <T extends BlockEntity> void removeGameEventListener(T p_223413_,  ServerLevel p_223414_)`
- `private void removeGameEventListenerRegistry(int p_283355_)`
- `private void removeBlockEntityTicker(BlockPos p_156413_)`
- `public void runPostLoad()`
- `public boolean isEmpty()`
- `public void replaceWithPacketData(FriendlyByteBuf p_187972_,  CompoundTag p_187973_,  Consumer<ClientboundLevelChunkPacketData.BlockEntityTagOutput> p_187974_)`
- `public void replaceBiomes(FriendlyByteBuf p_275574_)`
- `public void setLoaded(boolean p_62914_)`
- `public Level getLevel()`
- `public Map<BlockPos,BlockEntity> getBlockEntities()`
- `public void postProcessGeneration()`
- `@Nullable private BlockEntity promotePendingBlockEntity(BlockPos p_62871_,  CompoundTag p_62872_)`
- `public void unpackTicks(long p_187986_)`
- `public void registerTickContainerInLevel(ServerLevel p_187959_)`
- `public void unregisterTickContainerFromLevel(ServerLevel p_187980_)`
- `public ChunkStatus getStatus()`
- `public FullChunkStatus getFullStatus()`
- `public void setFullStatus(Supplier<FullChunkStatus> p_62880_)`
- `public void clearAllBlockEntities()`
- `public void registerAllBlockEntitiesAfterLevelLoad()`
- `private <T extends BlockEntity> void addGameEventListener(T p_223416_,  ServerLevel p_223417_)`
- `private <T extends BlockEntity> void updateBlockEntityTicker(T p_156407_)`
- `private <T extends BlockEntity> TickingBlockEntity createTicker(T p_156376_,  BlockEntityTicker<T> p_156377_)`
- `@NotNull public <T> LazyOptional<T> getCapability(@NotNull  Capability<T> cap,  @Nullable  Direction side)`
  Description copied from interface: ICapabilityProvider
  Retrieves the Optional handler for the capability requested on the specific side.
   The return value CAN be the same for multiple faces.
   Modders are encouraged to cache this value, using the listener capabilities of the Optional to
   be notified if the requested capability get lost.
  - param: cap - The capability to check
  - param: side - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested an optional holding the requested capability.
- `public boolean areCapsCompatible(CapabilityProvider<LevelChunk> other)`
- `public boolean areCapsCompatible(@Nullable  CapabilityDispatcher other)`
- `public void invalidateCaps()`
- `public void reviveCaps()`
- `@Deprecated @Nullable public final @Nullable CompoundTag writeCapsToNBT()` (deprecated)
  FOR INTERNAL USE ONLY
  
   Only public for use in ChunkSerializer.
- `@Deprecated public final void readCapsFromNBT(CompoundTag tag)` (deprecated)
  FOR INTERNAL USE ONLY
  
   Only public for use in ChunkSerializer.
- `public Level getWorldForge()`

### Inherited methods
- from `net.minecraft.world.level.chunk.ChunkAccess`: `addPackedPostProcess`, `addReferenceForStructure`, `carverBiome`, `fillBiomesFromNoise`, `findBlockLightSources`, `findBlocks`, `findBlocks`, `getAllReferences`, `getAllStarts`, `getBelowZeroRetrogen`, `getBlendingData`, `getBlockEntitiesPos`, `getBlockEntityNbt`, `getHeight`, `getHeight`, `getHeightAccessorForGeneration`, `getHeightmaps`, `getHighestFilledSectionIndex`, `getHighestGeneratedStatus`, `getHighestSectionPosition`, `getInhabitedTime`, `getMinBuildHeight`, `getNoiseBiome`, `getOrCreateHeightmapUnprimed`, `getOrCreateNoiseChunk`, `getOrCreateOffsetList`, `getPos`, `getPostProcessing`, `getReferencesForStructure`, `getSection`, `getSections`, `getSkyLightSources`, `getStartForStructure`, `getUpgradeData`, `hasAnyStructureReferences`, `hasPrimedHeightmap`, `incrementInhabitedTime`, `initializeLightSources`, `isLightCorrect`, `isOldNoiseGeneration`, `isUnsaved`, `isUpgrading`, `isYSpaceEmpty`, `markPosForPostprocessing`, `setAllReferences`, `setAllStarts`, `setBlendingData`, `setBlockEntityNbt`, `setHeightmap`, `setInhabitedTime`, `setLightCorrect`, `setStartForStructure`, `setUnsaved`
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockEntity`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockStates`, `getLightEmission`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getMaxBuildHeight`, `getMaxSection`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`

## LevelChunk.BoundTickingBlockEntity

*class* `net.minecraft.world.level.chunk.LevelChunk.BoundTickingBlockEntity`

Enclosing class: LevelChunk

### Fields
- `private final T extends BlockEntity blockEntity`
- `private final BlockEntityTicker<T extends BlockEntity> ticker`
- `private boolean loggedInvalidBlockState`

### Methods
- `public void tick()`
- `public boolean isRemoved()`
- `public BlockPos getPos()`
- `public String getType()`
- `public String toString()`

## LevelChunk.PostLoadProcessor

*interface* `net.minecraft.world.level.chunk.LevelChunk.PostLoadProcessor`

Enclosing class: LevelChunk

### Methods
- `void run(LevelChunk p_196867_)`

## LevelChunk.RebindableTickingBlockEntityWrapper

*class* `net.minecraft.world.level.chunk.LevelChunk.RebindableTickingBlockEntityWrapper`

Enclosing class: LevelChunk

### Fields
- `private TickingBlockEntity ticker`

### Methods
- `void rebind(TickingBlockEntity p_156450_)`
- `public void tick()`
- `public boolean isRemoved()`
- `public BlockPos getPos()`
- `public String getType()`
- `public String toString()`

## LevelChunkSection

*class* `net.minecraft.world.level.chunk.LevelChunkSection`

### Fields
- `public static final int SECTION_WIDTH` (= 16)
- `public static final int SECTION_HEIGHT` (= 16)
- `public static final int SECTION_SIZE` (= 4096)
- `public static final int BIOME_CONTAINER_BITS` (= 2)
- `private short nonEmptyBlockCount`
- `private short tickingBlockCount`
- `private short tickingFluidCount`
- `private final PalettedContainer<BlockState> states`
- `private PalettedContainerRO<Holder<Biome>> biomes`

### Methods
- `public BlockState getBlockState(int p_62983_,  int p_62984_,  int p_62985_)`
- `public FluidState getFluidState(int p_63008_,  int p_63009_,  int p_63010_)`
- `public void acquire()`
- `public void release()`
- `public BlockState setBlockState(int p_62987_,  int p_62988_,  int p_62989_,  BlockState p_62990_)`
- `public BlockState setBlockState(int p_62992_,  int p_62993_,  int p_62994_,  BlockState p_62995_,  boolean p_62996_)`
- `public boolean hasOnlyAir()`
- `public boolean isRandomlyTicking()`
- `public boolean isRandomlyTickingBlocks()`
- `public boolean isRandomlyTickingFluids()`
- `public void recalcBlockCounts()`
- `public PalettedContainer<BlockState> getStates()`
- `public PalettedContainerRO<Holder<Biome>> getBiomes()`
- `public void read(FriendlyByteBuf p_63005_)`
- `public void readBiomes(FriendlyByteBuf p_275669_)`
- `public void write(FriendlyByteBuf p_63012_)`
- `public int getSerializedSize()`
- `public boolean maybeHas(Predicate<BlockState> p_63003_)`
- `public Holder<Biome> getNoiseBiome(int p_204434_,  int p_204435_,  int p_204436_)`
- `public void fillBiomesFromNoise(BiomeResolver p_282075_,  Climate.Sampler p_283084_,  int p_282310_,  int p_281510_,  int p_283057_)`

## LightChunk

*interface* `net.minecraft.world.level.chunk.LightChunk`

All Superinterfaces: BlockGetter, IForgeBlockGetter, LevelHeightAccessor

### Methods
- `void findBlockLightSources(BiConsumer<BlockPos,BlockState> p_285040_)`
- `ChunkSkyLightSources getSkyLightSources()`

### Inherited methods
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockEntity`, `getBlockEntity`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockState`, `getBlockStates`, `getFluidState`, `getLightEmission`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getHeight`, `getMaxBuildHeight`, `getMaxSection`, `getMinBuildHeight`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`

## LightChunkGetter

*interface* `net.minecraft.world.level.chunk.LightChunkGetter`

### Methods
- `@Nullable LightChunk getChunkForLighting(int p_63023_,  int p_63024_)`
- `default void onLightUpdate(LightLayer p_63021_,  SectionPos p_63022_)`
- `BlockGetter getLevel()`

## LinearPalette

*class* `net.minecraft.world.level.chunk.LinearPalette`

### Fields
- `private final IdMap<T> registry`
- `private final T[] values`
- `private final PaletteResize<T> resizeHandler`
- `private final int bits`
- `private int size`

### Methods
- `public static <A> Palette<A> create(int p_188020_,  IdMap<A> p_188021_,  PaletteResize<A> p_188022_,  List<A> p_188023_)`
- `public int idFor(T p_63040_)`
- `public boolean maybeHas(Predicate<T> p_63042_)`
- `public T valueFor(int p_63038_)`
- `public void read(FriendlyByteBuf p_63046_)`
- `public void write(FriendlyByteBuf p_63049_)`
- `public int getSerializedSize()`
- `public int getSize()`
- `public Palette<T> copy()`

## MissingPaletteEntryException

*class* `net.minecraft.world.level.chunk.MissingPaletteEntryException`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## Palette

*interface* `net.minecraft.world.level.chunk.Palette`

### Methods
- `int idFor(T p_63061_)`
- `boolean maybeHas(Predicate<T> p_63062_)`
- `T valueFor(int p_63060_)`
- `void read(FriendlyByteBuf p_63064_)`
- `void write(FriendlyByteBuf p_63065_)`
- `int getSerializedSize()`
- `int getSize()`
- `Palette<T> copy()`

## Palette.Factory

*interface* `net.minecraft.world.level.chunk.Palette.Factory`

Enclosing interface: Palette<T>

### Methods
- `<A> Palette<A> create(int p_188027_,  IdMap<A> p_188028_,  PaletteResize<A> p_188029_,  List<A> p_188030_)`

## PalettedContainer

*class* `net.minecraft.world.level.chunk.PalettedContainer`

### Fields
- `private static final int MIN_PALETTE_BITS` (= 0)
- `private final PaletteResize<T> dummyPaletteResize`
- `private final IdMap<T> registry`
- `private volatile PalettedContainer.Data<T> data`
- `private final PalettedContainer.Strategy strategy`
- `private final ThreadingDetector threadingDetector`

### Methods
- `public void acquire()`
- `public void release()`
- `public static <T> com.mojang.serialization.Codec<PalettedContainer<T>> codecRW(IdMap<T> p_238372_,  com.mojang.serialization.Codec<T> p_238373_,  PalettedContainer.Strategy p_238374_,  T p_238375_)`
- `public static <T> com.mojang.serialization.Codec<PalettedContainerRO<T>> codecRO(IdMap<T> p_238419_,  com.mojang.serialization.Codec<T> p_238420_,  PalettedContainer.Strategy p_238421_,  T p_238422_)`
- `private static <T, C extends PalettedContainerRO<T>> com.mojang.serialization.Codec<C> codec(IdMap<T> p_238428_,  com.mojang.serialization.Codec<T> p_238429_,  PalettedContainer.Strategy p_238430_,  T p_238431_,  PalettedContainerRO.Unpacker<T,C> p_238432_)`
- `private PalettedContainer.Data<T> createOrReuseData(@Nullable  PalettedContainer.Data<T> p_188052_,  int p_188053_)`
- `public int onResize(int p_63142_,  T p_63143_)`
- `public T getAndSet(int p_63092_,  int p_63093_,  int p_63094_,  T p_63095_)`
- `public T getAndSetUnchecked(int p_63128_,  int p_63129_,  int p_63130_,  T p_63131_)`
- `private T getAndSet(int p_63097_,  T p_63098_)`
- `public void set(int p_156471_,  int p_156472_,  int p_156473_,  T p_156474_)`
- `private void set(int p_63133_,  T p_63134_)`
- `public T get(int p_63088_,  int p_63089_,  int p_63090_)`
- `protected T get(int p_63086_)`
- `public void getAll(Consumer<T> p_196880_)`
- `public void read(FriendlyByteBuf p_63119_)`
- `public void write(FriendlyByteBuf p_63136_)`
- `private static <T> com.mojang.serialization.DataResult<PalettedContainer<T>> unpack(IdMap<T> p_188068_,  PalettedContainer.Strategy p_188069_,  PalettedContainerRO.PackedData<T> p_238258_)`
- `public PalettedContainerRO.PackedData<T> pack(IdMap<T> p_188065_,  PalettedContainer.Strategy p_188066_)`
- `private static <T> void swapPalette(int[] p_198190_,  IntUnaryOperator p_198191_)`
- `public int getSerializedSize()`
- `public boolean maybeHas(Predicate<T> p_63110_)`
- `public PalettedContainer<T> copy()`
- `public PalettedContainer<T> recreate()`
- `public void count(PalettedContainer.CountConsumer<T> p_63100_)`

## PalettedContainer.Configuration

*record* `net.minecraft.world.level.chunk.PalettedContainer.Configuration`

Enclosing class: PalettedContainer<T>

### Fields
- `private final Palette.Factory factory`
  The field for the factory record component.
- `private final int bits`
  The field for the bits record component.

### Methods
- `public PalettedContainer.Data<T> createData(IdMap<T> p_188092_,  PaletteResize<T> p_188093_,  int p_188094_)`
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
- `public Palette.Factory factory()`
  Returns the value of the factory record component.
  - returns: the value of the factory record component
- `public int bits()`
  Returns the value of the bits record component.
  - returns: the value of the bits record component

## PalettedContainer.CountConsumer

*interface* `net.minecraft.world.level.chunk.PalettedContainer.CountConsumer`

Enclosing class: PalettedContainer<T>

### Methods
- `void accept(T p_63145_,  int p_63146_)`

## PalettedContainer.Data

*record* `net.minecraft.world.level.chunk.PalettedContainer.Data`

Enclosing class: PalettedContainer<T>

### Fields
- `private final PalettedContainer.Configuration<T> configuration`
  The field for the configuration record component.
- `private final BitStorage storage`
  The field for the storage record component.
- `private final Palette<T> palette`
  The field for the palette record component.

### Methods
- `public void copyFrom(Palette<T> p_188112_,  BitStorage p_188113_)`
- `public int getSerializedSize()`
- `public void write(FriendlyByteBuf p_188115_)`
- `public PalettedContainer.Data<T> copy()`
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
- `public PalettedContainer.Configuration<T> configuration()`
  Returns the value of the configuration record component.
  - returns: the value of the configuration record component
- `public BitStorage storage()`
  Returns the value of the storage record component.
  - returns: the value of the storage record component
- `public Palette<T> palette()`
  Returns the value of the palette record component.
  - returns: the value of the palette record component

## PalettedContainer.Strategy

*class* `net.minecraft.world.level.chunk.PalettedContainer.Strategy`

Enclosing class: PalettedContainer<T>

### Fields
- `public static final Palette.Factory SINGLE_VALUE_PALETTE_FACTORY`
- `public static final Palette.Factory LINEAR_PALETTE_FACTORY`
- `public static final Palette.Factory HASHMAP_PALETTE_FACTORY`
- `static final Palette.Factory GLOBAL_PALETTE_FACTORY`
- `public static final PalettedContainer.Strategy SECTION_STATES`
- `public static final PalettedContainer.Strategy SECTION_BIOMES`
- `private final int sizeBits`

### Methods
- `public int size()`
- `public int getIndex(int p_188146_,  int p_188147_,  int p_188148_)`
- `public abstract <A> PalettedContainer.Configuration<A> getConfiguration(IdMap<A> p_188149_,  int p_188150_)`
- `<A> int calculateBitsForSerialization(IdMap<A> p_188152_,  int p_188153_)`

## PalettedContainerRO

*interface* `net.minecraft.world.level.chunk.PalettedContainerRO`

### Methods
- `T get(int p_238291_,  int p_238292_,  int p_238293_)`
- `void getAll(Consumer<T> p_238353_)`
- `void write(FriendlyByteBuf p_238417_)`
- `int getSerializedSize()`
- `boolean maybeHas(Predicate<T> p_238437_)`
- `void count(PalettedContainer.CountConsumer<T> p_238355_)`
- `PalettedContainer<T> recreate()`
- `PalettedContainerRO.PackedData<T> pack(IdMap<T> p_238441_,  PalettedContainer.Strategy p_238442_)`

## PalettedContainerRO.PackedData

*record* `net.minecraft.world.level.chunk.PalettedContainerRO.PackedData`

Enclosing interface: PalettedContainerRO<T>

### Fields
- `private final List<T> paletteEntries`
  The field for the paletteEntries record component.
- `private final Optional<LongStream> storage`
  The field for the storage record component.

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
- `public List<T> paletteEntries()`
  Returns the value of the paletteEntries record component.
  - returns: the value of the paletteEntries record component
- `public Optional<LongStream> storage()`
  Returns the value of the storage record component.
  - returns: the value of the storage record component

## PalettedContainerRO.Unpacker>

*interface* `net.minecraft.world.level.chunk.PalettedContainerRO.Unpacker>`

Enclosing interface: PalettedContainerRO<T>

### Methods
- `com.mojang.serialization.DataResult<C> read(IdMap<T> p_238364_,  PalettedContainer.Strategy p_238365_,  PalettedContainerRO.PackedData<T> p_238366_)`

## PaletteResize

*interface* `net.minecraft.world.level.chunk.PaletteResize`

### Methods
- `int onResize(int p_63066_,  T p_63067_)`

## ProtoChunk

*class* `net.minecraft.world.level.chunk.ProtoChunk`

### Fields
- `@Nullable private volatile LevelLightEngine lightEngine`
- `private volatile ChunkStatus status`
- `private final List<CompoundTag> entities`
- `private final Map<GenerationStep.Carving,CarvingMask> carvingMasks`
- `@Nullable private BelowZeroRetrogen belowZeroRetrogen`
- `private final ProtoChunkTicks<Block> blockTicks`
- `private final ProtoChunkTicks<Fluid> fluidTicks`

### Inherited fields
- from `net.minecraft.world.level.chunk.ChunkAccess`: `blendingData`, `blockEntities`, `chunkPos`, `heightmaps`, `levelHeightAccessor`, `NO_FILLED_SECTION`, `noiseChunk`, `pendingBlockEntities`, `postProcessing`, `sections`, `skyLightSources`, `unsaved`, `upgradeData`

### Methods
- `public TickContainerAccess<Block> getBlockTicks()`
- `public TickContainerAccess<Fluid> getFluidTicks()`
- `public ChunkAccess.TicksToSave getTicksForSerialization()`
- `public BlockState getBlockState(BlockPos p_63264_)`
- `public FluidState getFluidState(BlockPos p_63239_)`
- `@Nullable public BlockState setBlockState(BlockPos p_63217_,  BlockState p_63218_,  boolean p_63219_)`
- `public void setBlockEntity(BlockEntity p_156488_)`
- `@Nullable public BlockEntity getBlockEntity(BlockPos p_63257_)`
- `public Map<BlockPos,BlockEntity> getBlockEntities()`
- `public void addEntity(CompoundTag p_63243_)`
- `public void addEntity(Entity p_63183_)`
- `public void setStartForStructure(Structure p_223432_,  StructureStart p_223433_)`
- `public List<CompoundTag> getEntities()`
- `public ChunkStatus getStatus()`
- `public void setStatus(ChunkStatus p_63187_)`
- `public Holder<Biome> getNoiseBiome(int p_204450_,  int p_204451_,  int p_204452_)`
- `public static short packOffsetCoordinates(BlockPos p_63281_)`
- `public static BlockPos unpackOffsetCoordinates(short p_63228_,  int p_63229_,  ChunkPos p_63230_)`
- `public void markPosForPostprocessing(BlockPos p_63266_)`
- `public void addPackedPostProcess(short p_63225_,  int p_63226_)`
- `public Map<BlockPos,CompoundTag> getBlockEntityNbts()`
- `@Nullable public CompoundTag getBlockEntityNbtForSaving(BlockPos p_63275_)`
- `public void removeBlockEntity(BlockPos p_63262_)`
- `@Nullable public CarvingMask getCarvingMask(GenerationStep.Carving p_188185_)`
- `public CarvingMask getOrCreateCarvingMask(GenerationStep.Carving p_188191_)`
- `public void setCarvingMask(GenerationStep.Carving p_188187_,  CarvingMask p_188188_)`
- `public void setLightEngine(LevelLightEngine p_63210_)`
- `public void setBelowZeroRetrogen(@Nullable  BelowZeroRetrogen p_188184_)`
- `@Nullable public BelowZeroRetrogen getBelowZeroRetrogen()`
- `private static <T> LevelChunkTicks<T> unpackTicks(ProtoChunkTicks<T> p_188190_)`
- `public LevelChunkTicks<Block> unpackBlockTicks()`
- `public LevelChunkTicks<Fluid> unpackFluidTicks()`
- `public LevelHeightAccessor getHeightAccessorForGeneration()`

### Inherited methods
- from `net.minecraft.world.level.chunk.ChunkAccess`: `addReferenceForStructure`, `carverBiome`, `fillBiomesFromNoise`, `findBlockLightSources`, `findBlocks`, `findBlocks`, `getAllReferences`, `getAllStarts`, `getBlendingData`, `getBlockEntitiesPos`, `getBlockEntityNbt`, `getHeight`, `getHeight`, `getHeightmaps`, `getHighestFilledSectionIndex`, `getHighestGeneratedStatus`, `getHighestSectionPosition`, `getInhabitedTime`, `getListenerRegistry`, `getMinBuildHeight`, `getOrCreateHeightmapUnprimed`, `getOrCreateNoiseChunk`, `getOrCreateOffsetList`, `getPos`, `getPostProcessing`, `getReferencesForStructure`, `getSection`, `getSections`, `getSkyLightSources`, `getStartForStructure`, `getUpgradeData`, `getWorldForge`, `hasAnyStructureReferences`, `hasPrimedHeightmap`, `incrementInhabitedTime`, `initializeLightSources`, `isLightCorrect`, `isOldNoiseGeneration`, `isUnsaved`, `isUpgrading`, `isYSpaceEmpty`, `setAllReferences`, `setAllStarts`, `setBlendingData`, `setBlockEntityNbt`, `setHeightmap`, `setInhabitedTime`, `setLightCorrect`, `setUnsaved`
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockEntity`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockStates`, `getLightEmission`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getMaxBuildHeight`, `getMaxSection`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`

## SingleValuePalette

*class* `net.minecraft.world.level.chunk.SingleValuePalette`

### Fields
- `private final IdMap<T> registry`
- `@Nullable private T value`
- `private final PaletteResize<T> resizeHandler`

### Methods
- `public static <A> Palette<A> create(int p_188214_,  IdMap<A> p_188215_,  PaletteResize<A> p_188216_,  List<A> p_188217_)`
- `public int idFor(T p_188219_)`
- `public boolean maybeHas(Predicate<T> p_188221_)`
- `public T valueFor(int p_188212_)`
- `public void read(FriendlyByteBuf p_188223_)`
- `public void write(FriendlyByteBuf p_188226_)`
- `public int getSerializedSize()`
- `public int getSize()`
- `public Palette<T> copy()`

## StructureAccess

*interface* `net.minecraft.world.level.chunk.StructureAccess`

### Methods
- `@Nullable StructureStart getStartForStructure(Structure p_223434_)`
- `void setStartForStructure(Structure p_223437_,  StructureStart p_223438_)`
- `it.unimi.dsi.fastutil.longs.LongSet getReferencesForStructure(Structure p_223439_)`
- `void addReferenceForStructure(Structure p_223435_,  long p_223436_)`
- `Map<Structure,it.unimi.dsi.fastutil.longs.LongSet> getAllReferences()`
- `void setAllReferences(Map<Structure,it.unimi.dsi.fastutil.longs.LongSet> p_223440_)`

## UpgradeData

*class* `net.minecraft.world.level.chunk.UpgradeData`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final UpgradeData EMPTY`
- `private static final String TAG_INDICES` (= "Indices")
- `private static final Direction8[] DIRECTIONS`
- `private final EnumSet<Direction8> sides`
- `private final List<SavedTick<Block>> neighborBlockTicks`
- `private final List<SavedTick<Fluid>> neighborFluidTicks`
- `private final int[][] index`
- `static final Map<Block,UpgradeData.BlockFixer> MAP`
- `static final Set<UpgradeData.BlockFixer> CHUNKY_FIXERS`

### Methods
- `private static <T> void loadTicks(CompoundTag p_208133_,  String p_208134_,  Function<String,Optional<T>> p_208135_,  List<SavedTick<T>> p_208136_)`
- `public void upgrade(LevelChunk p_63342_)`
- `private static void upgradeSides(LevelChunk p_63344_,  Direction8 p_63345_)`
- `private static BlockState updateState(BlockState p_63336_,  Direction p_63337_,  LevelAccessor p_63338_,  BlockPos p_63339_,  BlockPos p_63340_)`
- `private void upgradeInside(LevelChunk p_63348_)`
- `public boolean isEmpty()`
- `public CompoundTag write()`

## UpgradeData.BlockFixer

*interface* `net.minecraft.world.level.chunk.UpgradeData.BlockFixer`

Enclosing class: UpgradeData

### Methods
- `BlockState updateShape(BlockState p_63352_,  Direction p_63353_,  BlockState p_63354_,  LevelAccessor p_63355_,  BlockPos p_63356_,  BlockPos p_63357_)`
- `default void processChunk(LevelAccessor p_63351_)`
