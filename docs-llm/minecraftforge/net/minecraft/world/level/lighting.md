# net.minecraft.world.level.lighting

- [BlockLightEngine](#blocklightengine)
- [BlockLightSectionStorage](#blocklightsectionstorage)
- [BlockLightSectionStorage.BlockDataLayerStorageMap](#blocklightsectionstorage.blockdatalayerstoragemap)
- [ChunkSkyLightSources](#chunkskylightsources)
- [Class LayerLightEventListener.DummyLightLayerEventListener](#class-layerlighteventlistener.dummylightlayereventlistener)
- [Class LayerLightSectionStorage.SectionType](#class-layerlightsectionstorage.sectiontype)
- [DataLayerStorageMap>](#datalayerstoragemap)
- [DynamicGraphMinFixedPoint](#dynamicgraphminfixedpoint)
- [LayerLightEventListener](#layerlighteventlistener)
- [LayerLightSectionStorage.SectionState](#layerlightsectionstorage.sectionstate)
- [LayerLightSectionStorage>](#layerlightsectionstorage)
- [LeveledPriorityQueue](#leveledpriorityqueue)
- [LevelLightEngine](#levellightengine)
- [LightEngine,S extends LayerLightSectionStorage>](#lightengine-s-extends-layerlightsectionstorage)
- [LightEngine.QueueEntry](#lightengine.queueentry)
- [LightEventListener](#lighteventlistener)
- [SkyLightEngine](#skylightengine)
- [SkyLightSectionStorage](#skylightsectionstorage)
- [SkyLightSectionStorage.SkyDataLayerStorageMap](#skylightsectionstorage.skydatalayerstoragemap)
- [SpatialLongSet](#spatiallongset)
- [SpatialLongSet.InternalMap](#spatiallongset.internalmap)
## BlockLightEngine

*class* `net.minecraft.world.level.lighting.BlockLightEngine`

### Fields
- `private final BlockPos.MutableBlockPos mutablePos`

### Inherited fields
- from `net.minecraft.world.level.lighting.LightEngine`: `chunkSource`, `MAX_LEVEL`, `MIN_OPACITY`, `PROPAGATION_DIRECTIONS`, `PULL_LIGHT_IN_ENTRY`, `storage`

### Methods
- `protected void checkNode(long p_285169_)`
- `protected void propagateIncrease(long p_285500_,  long p_285410_,  int p_285492_)`
- `protected void propagateDecrease(long p_285435_,  long p_285230_)`
- `private int getEmission(long p_285243_,  BlockState p_284973_)`
- `public void propagateLightSources(ChunkPos p_285274_)`

### Inherited methods
- from `net.minecraft.world.level.lighting.LightEngine`: `checkBlock`, `enqueueDecrease`, `enqueueIncrease`, `getChunk`, `getDataLayerData`, `getDebugData`, `getDebugSectionType`, `getLightBlockInto`, `getLightValue`, `getOcclusionShape`, `getOcclusionShape`, `getOpacity`, `getState`, `hasDifferentLightProperties`, `hasLightWork`, `isEmptyShape`, `queueSectionData`, `retainData`, `runLightUpdates`, `setLightEnabled`, `shapeOccludes`, `updateSectionStatus`
- from `net.minecraft.world.level.lighting.LightEventListener`: `updateSectionStatus`

## BlockLightSectionStorage

*class* `net.minecraft.world.level.lighting.BlockLightSectionStorage`

### Inherited fields
- from `net.minecraft.world.level.lighting.LayerLightSectionStorage`: `changedSections`, `chunkSource`, `hasInconsistencies`, `queuedSections`, `sectionsAffectedByLightUpdates`, `sectionStates`, `updatingSectionData`, `visibleSectionData`

### Methods
- `protected int getLightValue(long p_75513_)`

### Inherited methods
- from `net.minecraft.world.level.lighting.LayerLightSectionStorage`: `createDataLayer`, `getDataLayer`, `getDataLayer`, `getDataLayerData`, `getDataLayerToWrite`, `getDebugSectionType`, `getStoredLevel`, `hasInconsistencies`, `lightOnInSection`, `markNewInconsistencies`, `markSectionAndNeighborsAsAffected`, `onNodeAdded`, `onNodeRemoved`, `putSectionState`, `queueSectionData`, `retainData`, `setLightEnabled`, `setStoredLevel`, `storingLightForSection`, `swapSectionMap`, `updateSectionStatus`

## BlockLightSectionStorage.BlockDataLayerStorageMap

*class* `net.minecraft.world.level.lighting.BlockLightSectionStorage.BlockDataLayerStorageMap`

Enclosing class: BlockLightSectionStorage

### Inherited fields
- from `net.minecraft.world.level.lighting.DataLayerStorageMap`: `map`

### Methods
- `public BlockLightSectionStorage.BlockDataLayerStorageMap copy()`

### Inherited methods
- from `net.minecraft.world.level.lighting.DataLayerStorageMap`: `clearCache`, `copyDataLayer`, `disableCache`, `getLayer`, `hasLayer`, `removeLayer`, `setLayer`

## ChunkSkyLightSources

*class* `net.minecraft.world.level.lighting.ChunkSkyLightSources`

### Fields
- `private static final int SIZE` (= 16)
- `public static final int NEGATIVE_INFINITY` (= -2147483648)
- `private final int minY`
- `private final BitStorage heightmap`
- `private final BlockPos.MutableBlockPos mutablePos1`
- `private final BlockPos.MutableBlockPos mutablePos2`

### Methods
- `public void fillFrom(ChunkAccess p_285152_)`
- `private int findLowestSourceY(ChunkAccess p_285214_,  int p_285171_,  int p_285021_,  int p_285226_)`
- `public boolean update(BlockGetter p_285514_,  int p_284999_,  int p_285358_,  int p_284944_)`
- `private boolean updateEdge(BlockGetter p_285066_,  int p_285184_,  int p_285101_,  BlockPos p_285446_,  BlockState p_285185_,  BlockPos p_285103_,  BlockState p_285009_)`
- `private int findLowestSourceBelow(BlockGetter p_285279_,  BlockPos p_285119_,  BlockState p_285096_)`
- `private static boolean isEdgeOccluded(BlockGetter p_285329_,  BlockPos p_285258_,  BlockState p_285219_,  BlockPos p_285288_,  BlockState p_285512_)`
- `public int getLowestSourceY(int p_285247_,  int p_285082_)`
- `public int getHighestLowestSourceY()`
- `private void fill(int p_285311_)`
- `private void set(int p_285323_,  int p_285220_)`
- `private int get(int p_284951_)`
- `private int extendSourcesBelowWorld(int p_284953_)`
- `private static int index(int p_284980_,  int p_285277_)`

## Class LayerLightEventListener.DummyLightLayerEventListener

*enum* `net.minecraft.world.level.lighting.Class LayerLightEventListener.DummyLightLayerEventListener`

Enclosing interface: LayerLightEventListener

### Methods
- `public static LayerLightEventListener.DummyLightLayerEventListener[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static LayerLightEventListener.DummyLightLayerEventListener valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `@Nullable public DataLayer getDataLayerData(SectionPos p_75718_)`
- `public int getLightValue(BlockPos p_75723_)`
- `public void checkBlock(BlockPos p_164434_)`
- `public boolean hasLightWork()`
- `public int runLightUpdates()`
- `public void updateSectionStatus(SectionPos p_75720_,  boolean p_75721_)`
- `public void setLightEnabled(ChunkPos p_164431_,  boolean p_164432_)`
- `public void propagateLightSources(ChunkPos p_285209_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraft.world.level.lighting.LightEventListener`: `updateSectionStatus`

## Class LayerLightSectionStorage.SectionType

*enum* `net.minecraft.world.level.lighting.Class LayerLightSectionStorage.SectionType`

Enclosing class: LayerLightSectionStorage<M extends DataLayerStorageMap<M>>

### Fields
- `private final String display`

### Methods
- `public static LayerLightSectionStorage.SectionType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static LayerLightSectionStorage.SectionType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String display()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## DataLayerStorageMap>

*class* `net.minecraft.world.level.lighting.DataLayerStorageMap>`

### Fields
- `private static final int CACHE_SIZE`
- `private final long[] lastSectionKeys`
- `private final DataLayer[] lastSections`
- `private boolean cacheEnabled`
- `protected final it.unimi.dsi.fastutil.longs.Long2ObjectOpenHashMap<DataLayer> map`

### Methods
- `public abstract M copy()`
- `public DataLayer copyDataLayer(long p_281841_)`
- `public boolean hasLayer(long p_75530_)`
- `@Nullable public DataLayer getLayer(long p_75533_)`
- `@Nullable public DataLayer removeLayer(long p_75536_)`
- `public void setLayer(long p_75527_,  DataLayer p_75528_)`
- `public void clearCache()`
- `public void disableCache()`

## DynamicGraphMinFixedPoint

*class* `net.minecraft.world.level.lighting.DynamicGraphMinFixedPoint`

### Fields
- `public static final long SOURCE` (= 9223372036854775807L)
- `private static final int NO_COMPUTED_LEVEL` (= 255)
- `protected final int levelCount`
- `private final LeveledPriorityQueue priorityQueue`
- `private final it.unimi.dsi.fastutil.longs.Long2ByteMap computedLevels`
- `private volatile boolean hasWork`

### Methods
- `protected void removeFromQueue(long p_75601_)`
- `public void removeIf(LongPredicate p_75582_)`
- `private int calculatePriority(int p_278256_,  int p_278328_)`
- `protected void checkNode(long p_75602_)`
- `protected void checkEdge(long p_75577_,  long p_75578_,  int p_75579_,  boolean p_75580_)`
- `private void checkEdge(long p_75570_,  long p_75571_,  int p_75572_,  int p_75573_,  int p_75574_,  boolean p_75575_)`
- `protected final void checkNeighbor(long p_75594_,  long p_75595_,  int p_75596_,  boolean p_75597_)`
- `protected final boolean hasWork()`
- `protected final int runUpdates(int p_75589_)`
- `public int getQueueSize()`
- `protected boolean isSource(long p_75551_)`
- `protected abstract int getComputedLevel(long p_75566_,  long p_75567_,  int p_75568_)`
- `protected abstract void checkNeighborsAfterUpdate(long p_75563_,  int p_75564_,  boolean p_75565_)`
- `protected abstract int getLevel(long p_75599_)`
- `protected abstract void setLevel(long p_75552_,  int p_75553_)`
- `protected abstract int computeLevelFromNeighbor(long p_75590_,  long p_75591_,  int p_75592_)`

## LayerLightEventListener

*interface* `net.minecraft.world.level.lighting.LayerLightEventListener`

All Superinterfaces: LightEventListener

### Methods
- `@Nullable DataLayer getDataLayerData(SectionPos p_75709_)`
- `int getLightValue(BlockPos p_75710_)`

### Inherited methods
- from `net.minecraft.world.level.lighting.LightEventListener`: `checkBlock`, `hasLightWork`, `propagateLightSources`, `runLightUpdates`, `setLightEnabled`, `updateSectionStatus`, `updateSectionStatus`

## LayerLightSectionStorage.SectionState

*class* `net.minecraft.world.level.lighting.LayerLightSectionStorage.SectionState`

Enclosing class: LayerLightSectionStorage<M extends DataLayerStorageMap<M>>

### Fields
- `public static final byte EMPTY` (= 0x0)
- `private static final int MIN_NEIGHBORS` (= 0)
- `private static final int MAX_NEIGHBORS` (= 26)
- `private static final byte HAS_DATA_BIT` (= 0x20)
- `private static final byte NEIGHBOR_COUNT_BITS` (= 0x1f)

### Methods
- `public static byte hasData(byte p_284954_,  boolean p_285420_)`
- `public static byte neighborCount(byte p_285516_,  int p_285426_)`
- `public static boolean hasData(byte p_285105_)`
- `public static int neighborCount(byte p_285437_)`
- `public static LayerLightSectionStorage.SectionType type(byte p_285064_)`

## LayerLightSectionStorage>

*class* `net.minecraft.world.level.lighting.LayerLightSectionStorage>`

### Fields
- `private final LightLayer layer`
- `protected final LightChunkGetter chunkSource`
- `protected final it.unimi.dsi.fastutil.longs.Long2ByteMap sectionStates`
- `private final it.unimi.dsi.fastutil.longs.LongSet columnsWithSources`
- `protected volatile M extends DataLayerStorageMap<M> visibleSectionData`
- `protected final M extends DataLayerStorageMap<M> updatingSectionData`
- `protected final it.unimi.dsi.fastutil.longs.LongSet changedSections`
- `protected final it.unimi.dsi.fastutil.longs.LongSet sectionsAffectedByLightUpdates`
- `protected final it.unimi.dsi.fastutil.longs.Long2ObjectMap<DataLayer> queuedSections`
- `private final it.unimi.dsi.fastutil.longs.LongSet columnsToRetainQueuedDataFor`
- `private final it.unimi.dsi.fastutil.longs.LongSet toRemove`
- `protected volatile boolean hasInconsistencies`

### Methods
- `protected boolean storingLightForSection(long p_75792_)`
- `@Nullable protected DataLayer getDataLayer(long p_75759_,  boolean p_75760_)`
- `@Nullable protected DataLayer getDataLayer(M p_75762_,  long p_75763_)`
- `@Nullable protected DataLayer getDataLayerToWrite(long p_285278_)`
- `@Nullable public DataLayer getDataLayerData(long p_75794_)`
- `protected abstract int getLightValue(long p_75786_)`
- `protected int getStoredLevel(long p_75796_)`
- `protected void setStoredLevel(long p_75773_,  int p_75774_)`
- `protected void markSectionAndNeighborsAsAffected(long p_281610_)`
- `protected DataLayer createDataLayer(long p_75797_)`
- `protected boolean hasInconsistencies()`
- `protected void markNewInconsistencies(LightEngine<M,?> p_285081_)`
- `protected void onNodeAdded(long p_75798_)`
- `protected void onNodeRemoved(long p_75799_)`
- `protected void setLightEnabled(long p_285065_,  boolean p_284938_)`
- `protected boolean lightOnInSection(long p_285433_)`
- `public void retainData(long p_75783_,  boolean p_75784_)`
- `protected void queueSectionData(long p_285403_,  @Nullable  DataLayer p_285498_)`
- `protected void updateSectionStatus(long p_75788_,  boolean p_75789_)`
- `protected void putSectionState(long p_285451_,  byte p_285078_)`
- `private void initializeSection(long p_285124_)`
- `private void removeSection(long p_285477_)`
- `protected void swapSectionMap()`
- `public LayerLightSectionStorage.SectionType getDebugSectionType(long p_285114_)`

## LeveledPriorityQueue

*class* `net.minecraft.world.level.lighting.LeveledPriorityQueue`

### Fields
- `private final int levelCount`
- `private final it.unimi.dsi.fastutil.longs.LongLinkedOpenHashSet[] queues`
- `private int firstQueuedLevel`

### Methods
- `public long removeFirstLong()`
- `public boolean isEmpty()`
- `public void dequeue(long p_278232_,  int p_278338_,  int p_278345_)`
- `public void enqueue(long p_278311_,  int p_278335_)`
- `private void checkFirstQueuedLevel(int p_278303_)`

## LevelLightEngine

*class* `net.minecraft.world.level.lighting.LevelLightEngine`

### Fields
- `public static final int LIGHT_SECTION_PADDING` (= 1)
- `protected final LevelHeightAccessor levelHeightAccessor`
- `@Nullable private final LightEngine<?,?> blockEngine`
- `@Nullable private final LightEngine<?,?> skyEngine`

### Methods
- `public void checkBlock(BlockPos p_75823_)`
- `public boolean hasLightWork()`
- `public int runLightUpdates()`
- `public void updateSectionStatus(SectionPos p_75827_,  boolean p_75828_)`
- `public void setLightEnabled(ChunkPos p_285439_,  boolean p_285012_)`
- `public void propagateLightSources(ChunkPos p_284998_)`
- `public LayerLightEventListener getLayerListener(LightLayer p_75815_)`
- `public String getDebugData(LightLayer p_75817_,  SectionPos p_75818_)`
- `public LayerLightSectionStorage.SectionType getDebugSectionType(LightLayer p_285008_,  SectionPos p_285336_)`
- `public void queueSectionData(LightLayer p_285328_,  SectionPos p_284962_,  @Nullable  DataLayer p_285035_)`
- `public void retainData(ChunkPos p_75829_,  boolean p_75830_)`
- `public int getRawBrightness(BlockPos p_75832_,  int p_75833_)`
- `public boolean lightOnInSection(SectionPos p_285319_)`
- `public int getLightSectionCount()`
- `public int getMinLightSection()`
- `public int getMaxLightSection()`

### Inherited methods
- from `net.minecraft.world.level.lighting.LightEventListener`: `updateSectionStatus`

## LightEngine,S extends LayerLightSectionStorage>

*class* `net.minecraft.world.level.lighting.LightEngine,S extends LayerLightSectionStorage>`

### Fields
- `public static final int MAX_LEVEL`
- `protected static final int MIN_OPACITY`
- `protected static final long PULL_LIGHT_IN_ENTRY`
- `private static final int MIN_QUEUE_SIZE`
- `protected static final Direction[] PROPAGATION_DIRECTIONS`
- `protected final LightChunkGetter chunkSource`
- `protected final S extends LayerLightSectionStorage<M> storage`
- `private final it.unimi.dsi.fastutil.longs.LongOpenHashSet blockNodesToCheck`
- `private final it.unimi.dsi.fastutil.longs.LongArrayFIFOQueue decreaseQueue`
- `private final it.unimi.dsi.fastutil.longs.LongArrayFIFOQueue increaseQueue`
- `private final BlockPos.MutableBlockPos mutablePos`
- `private static final int CACHE_SIZE`
- `private final long[] lastChunkPos`
- `private final LightChunk[] lastChunk`

### Methods
- `public static boolean hasDifferentLightProperties(BlockGetter p_285159_,  BlockPos p_284985_,  BlockState p_285110_,  BlockState p_285372_)`
- `public static int getLightBlockInto(BlockGetter p_285330_,  BlockState p_285453_,  BlockPos p_285187_,  BlockState p_285318_,  BlockPos p_285240_,  Direction p_285196_,  int p_285248_)`
- `public static VoxelShape getOcclusionShape(BlockGetter p_285472_,  BlockPos p_285229_,  BlockState p_285020_,  Direction p_285455_)`
- `protected static boolean isEmptyShape(BlockState p_285133_)`
- `protected BlockState getState(BlockPos p_285338_)`
- `protected int getOpacity(BlockState p_285084_,  BlockPos p_285057_)`
- `protected boolean shapeOccludes(long p_285115_,  BlockState p_285154_,  long p_284957_,  BlockState p_285155_,  Direction p_285327_)`
- `protected VoxelShape getOcclusionShape(BlockState p_285136_,  long p_285517_,  Direction p_285376_)`
- `@Nullable protected LightChunk getChunk(int p_284967_,  int p_285447_)`
- `private void clearChunkCache()`
- `public void checkBlock(BlockPos p_285352_)`
- `public void queueSectionData(long p_285221_,  @Nullable  DataLayer p_285427_)`
- `public void retainData(ChunkPos p_285314_,  boolean p_284937_)`
- `public void updateSectionStatus(SectionPos p_285167_,  boolean p_284934_)`
- `public void setLightEnabled(ChunkPos p_285116_,  boolean p_285522_)`
- `public int runLightUpdates()`
- `private int propagateIncreases()`
- `private int propagateDecreases()`
- `protected void enqueueDecrease(long p_285228_,  long p_285464_)`
- `protected void enqueueIncrease(long p_285223_,  long p_285022_)`
- `public boolean hasLightWork()`
- `@Nullable public DataLayer getDataLayerData(SectionPos p_285093_)`
- `public int getLightValue(BlockPos p_285149_)`
- `public String getDebugData(long p_285363_)`
- `public LayerLightSectionStorage.SectionType getDebugSectionType(long p_285320_)`
- `protected abstract void checkNode(long p_285507_)`
- `protected abstract void propagateIncrease(long p_285325_,  long p_285026_,  int p_285197_)`
- `protected abstract void propagateDecrease(long p_284941_,  long p_285213_)`

### Inherited methods
- from `net.minecraft.world.level.lighting.LightEventListener`: `propagateLightSources`, `updateSectionStatus`

## LightEngine.QueueEntry

*class* `net.minecraft.world.level.lighting.LightEngine.QueueEntry`

Enclosing class: LightEngine<M extends DataLayerStorageMap<M>, S extends LayerLightSectionStorage<M>>

### Fields
- `private static final int FROM_LEVEL_BITS` (= 4)
- `private static final int DIRECTION_BITS` (= 6)
- `private static final long LEVEL_MASK` (= 15L)
- `private static final long DIRECTIONS_MASK` (= 1008L)
- `private static final long FLAG_FROM_EMPTY_SHAPE` (= 1024L)
- `private static final long FLAG_INCREASE_FROM_EMISSION` (= 2048L)

### Methods
- `public static long decreaseSkipOneDirection(int p_285429_,  Direction p_285207_)`
- `public static long decreaseAllDirections(int p_285144_)`
- `public static long increaseLightFromEmission(int p_285199_,  boolean p_284986_)`
- `public static long increaseSkipOneDirection(int p_285091_,  boolean p_285186_,  Direction p_285382_)`
- `public static long increaseOnlyOneDirection(int p_285025_,  boolean p_285384_,  Direction p_285072_)`
- `public static long increaseSkySourceInDirections(boolean p_285487_,  boolean p_285390_,  boolean p_285476_,  boolean p_285505_,  boolean p_285127_)`
- `public static int getFromLevel(long p_285483_)`
- `public static boolean isFromEmptyShape(long p_285436_)`
- `public static boolean isIncreaseFromEmission(long p_285348_)`
- `public static boolean shouldPropagateInDirection(long p_285347_,  Direction p_285291_)`
- `private static long withLevel(long p_285234_,  int p_285042_)`
- `private static long withDirection(long p_285295_,  Direction p_285016_)`
- `private static long withoutDirection(long p_285366_,  Direction p_285489_)`

## LightEventListener

*interface* `net.minecraft.world.level.lighting.LightEventListener`

### Methods
- `void checkBlock(BlockPos p_164454_)`
- `boolean hasLightWork()`
- `int runLightUpdates()`
- `default void updateSectionStatus(BlockPos p_75835_,  boolean p_75836_)`
- `void updateSectionStatus(SectionPos p_75837_,  boolean p_75838_)`
- `void setLightEnabled(ChunkPos p_164452_,  boolean p_164453_)`
- `void propagateLightSources(ChunkPos p_285263_)`

## SkyLightEngine

*class* `net.minecraft.world.level.lighting.SkyLightEngine`

### Fields
- `private static final long REMOVE_TOP_SKY_SOURCE_ENTRY`
- `private static final long REMOVE_SKY_SOURCE_ENTRY`
- `private static final long ADD_SKY_SOURCE_ENTRY`
- `private final BlockPos.MutableBlockPos mutablePos`
- `private final ChunkSkyLightSources emptyChunkSources`

### Inherited fields
- from `net.minecraft.world.level.lighting.LightEngine`: `chunkSource`, `MAX_LEVEL`, `MIN_OPACITY`, `PROPAGATION_DIRECTIONS`, `PULL_LIGHT_IN_ENTRY`, `storage`

### Methods
- `private static boolean isSourceLevel(int p_285004_)`
- `private int getLowestSourceY(int p_285058_,  int p_285191_,  int p_285111_)`
- `@Nullable private ChunkSkyLightSources getChunkSources(int p_285270_,  int p_285307_)`
- `protected void checkNode(long p_75859_)`
- `private void updateSourcesInColumn(int p_285053_,  int p_285140_,  int p_285337_)`
- `private void removeSourcesBelow(int p_285475_,  int p_285138_,  int p_285130_,  int p_285112_)`
- `private void addSourcesAbove(int p_285241_,  int p_285212_,  int p_284972_,  int p_285134_)`
- `protected void propagateIncrease(long p_285341_,  long p_285204_,  int p_285003_)`
- `protected void propagateDecrease(long p_285015_,  long p_285395_)`
- `private int countEmptySectionsBelowIfAtBorder(long p_285356_)`
- `private void propagateFromEmptySections(long p_284965_,  Direction p_285308_,  int p_284977_,  boolean p_285001_,  int p_285052_)`
- `private static boolean crossedSectionEdge(Direction p_285014_,  int p_284991_,  int p_285468_)`
- `public void setLightEnabled(ChunkPos p_285459_,  boolean p_285013_)`
- `public void propagateLightSources(ChunkPos p_285333_)`

### Inherited methods
- from `net.minecraft.world.level.lighting.LightEngine`: `checkBlock`, `enqueueDecrease`, `enqueueIncrease`, `getChunk`, `getDataLayerData`, `getDebugData`, `getDebugSectionType`, `getLightBlockInto`, `getLightValue`, `getOcclusionShape`, `getOcclusionShape`, `getOpacity`, `getState`, `hasDifferentLightProperties`, `hasLightWork`, `isEmptyShape`, `queueSectionData`, `retainData`, `runLightUpdates`, `shapeOccludes`, `updateSectionStatus`
- from `net.minecraft.world.level.lighting.LightEventListener`: `updateSectionStatus`

## SkyLightSectionStorage

*class* `net.minecraft.world.level.lighting.SkyLightSectionStorage`

### Inherited fields
- from `net.minecraft.world.level.lighting.LayerLightSectionStorage`: `changedSections`, `chunkSource`, `hasInconsistencies`, `queuedSections`, `sectionsAffectedByLightUpdates`, `sectionStates`, `updatingSectionData`, `visibleSectionData`

### Methods
- `protected int getLightValue(long p_75880_)`
- `protected int getLightValue(long p_164458_,  boolean p_164459_)`
- `protected void onNodeAdded(long p_75885_)`
- `protected void onNodeRemoved(long p_75887_)`
- `protected DataLayer createDataLayer(long p_75883_)`
- `private static DataLayer repeatFirstLayer(DataLayer p_182513_)`
- `protected boolean hasLightDataAtOrBelow(int p_278270_)`
- `protected boolean isAboveData(long p_75891_)`
- `protected int getTopSectionY(long p_285094_)`
- `protected int getBottomSectionY()`

### Inherited methods
- from `net.minecraft.world.level.lighting.LayerLightSectionStorage`: `getDataLayer`, `getDataLayer`, `getDataLayerData`, `getDataLayerToWrite`, `getDebugSectionType`, `getStoredLevel`, `hasInconsistencies`, `lightOnInSection`, `markNewInconsistencies`, `markSectionAndNeighborsAsAffected`, `putSectionState`, `queueSectionData`, `retainData`, `setLightEnabled`, `setStoredLevel`, `storingLightForSection`, `swapSectionMap`, `updateSectionStatus`

## SkyLightSectionStorage.SkyDataLayerStorageMap

*class* `net.minecraft.world.level.lighting.SkyLightSectionStorage.SkyDataLayerStorageMap`

Enclosing class: SkyLightSectionStorage

### Fields
- `int currentLowestY`
- `final it.unimi.dsi.fastutil.longs.Long2IntOpenHashMap topSections`

### Inherited fields
- from `net.minecraft.world.level.lighting.DataLayerStorageMap`: `map`

### Methods
- `public SkyLightSectionStorage.SkyDataLayerStorageMap copy()`

### Inherited methods
- from `net.minecraft.world.level.lighting.DataLayerStorageMap`: `clearCache`, `copyDataLayer`, `disableCache`, `getLayer`, `hasLayer`, `removeLayer`, `setLayer`

## SpatialLongSet

*class* `net.minecraft.world.level.lighting.SpatialLongSet`

### Fields
- `private final SpatialLongSet.InternalMap map`

### Inherited fields
- from `it.unimi.dsi.fastutil.longs.LongLinkedOpenHashSet`: `containsNull`, `f`, `first`, `key`, `last`, `link`, `mask`, `maxFill`, `minN`, `n`, `size`
- from `it.unimi.dsi.fastutil.Hash`: `DEFAULT_GROWTH_FACTOR`, `DEFAULT_INITIAL_SIZE`, `DEFAULT_LOAD_FACTOR`, `FAST_LOAD_FACTOR`, `FREE`, `OCCUPIED`, `PRIMES`, `REMOVED`, `VERY_FAST_LOAD_FACTOR`

### Methods
- `public boolean add(long p_164465_)`
- `public boolean rem(long p_164468_)`
- `public long removeFirstLong()`
- `public int size()`
- `public boolean isEmpty()`

### Inherited methods
- from `it.unimi.dsi.fastutil.longs.LongLinkedOpenHashSet`: `addAll`, `addAll`, `addAndMoveToFirst`, `addAndMoveToLast`, `clear`, `clone`, `comparator`, `contains`, `ensureCapacity`, `firstLong`, `fixPointers`, `fixPointers`, `forEach`, `hashCode`, `headSet`, `iterator`, `iterator`, `lastLong`, `of`, `of`, `of`, `of`, `of`, `rehash`, `remove`, `removeLastLong`, `shiftKeys`, `spliterator`, `subSet`, `tailSet`, `toSet`, `toSetWithExpectedSize`, `trim`, `trim`
- from `it.unimi.dsi.fastutil.longs.AbstractLongSet`: `equals`
- from `it.unimi.dsi.fastutil.longs.AbstractLongCollection`: `add`, `contains`, `containsAll`, `containsAll`, `forEach`, `remove`, `removeAll`, `removeAll`, `removeIf`, `retainAll`, `retainAll`, `toArray`, `toLongArray`, `toLongArray`, `toString`
- from `java.util.AbstractCollection`: `toArray`, `toArray`
- from `java.util.Collection`: `toArray`
- from `it.unimi.dsi.fastutil.longs.LongCollection`: `containsAll`, `longIterator`, `longParallelStream`, `longSpliterator`, `longStream`, `parallelStream`, `removeAll`, `removeIf`, `removeIf`, `removeIf`, `retainAll`, `stream`, `toArray`, `toLongArray`, `toLongArray`
- from `it.unimi.dsi.fastutil.longs.LongIterable`: `forEach`, `forEach`
- from `it.unimi.dsi.fastutil.longs.LongSet`: `add`, `contains`, `remove`
- from `it.unimi.dsi.fastutil.longs.LongSortedSet`: `first`, `headSet`, `last`, `subSet`, `tailSet`
- from `java.util.Set`: `add`, `contains`, `containsAll`, `equals`, `remove`, `removeAll`, `retainAll`, `toArray`, `toArray`

## SpatialLongSet.InternalMap

*class* `net.minecraft.world.level.lighting.SpatialLongSet.InternalMap`

Enclosing class: SpatialLongSet

### Fields
- `private static final int X_BITS`
- `private static final int Z_BITS`
- `private static final int Y_BITS`
- `private static final int Y_OFFSET` (= 0)
- `private static final int Z_OFFSET`
- `private static final int X_OFFSET`
- `private static final long OUTER_MASK`
- `private int lastPos`
- `private long lastOuterKey`
- `private final int minSize`

### Inherited fields
- from `it.unimi.dsi.fastutil.longs.Long2LongLinkedOpenHashMap`: `containsNullKey`, `entries`, `f`, `first`, `key`, `keys`, `last`, `link`, `mask`, `maxFill`, `minN`, `n`, `size`, `value`, `values`
- from `it.unimi.dsi.fastutil.longs.AbstractLong2LongFunction`: `defRetValue`
- from `it.unimi.dsi.fastutil.Hash`: `DEFAULT_GROWTH_FACTOR`, `DEFAULT_INITIAL_SIZE`, `DEFAULT_LOAD_FACTOR`, `FAST_LOAD_FACTOR`, `FREE`, `OCCUPIED`, `PRIMES`, `REMOVED`, `VERY_FAST_LOAD_FACTOR`

### Methods
- `static long getOuterKey(long p_164490_)`
- `static int getInnerKey(long p_164498_)`
- `static long getFullKey(long p_164492_,  int p_164493_)`
- `public boolean addBit(long p_164500_)`
- `private boolean replaceBit(int p_164487_,  long p_164488_)`
- `public boolean removeBit(long p_164502_)`
- `private boolean removeFromNullEntry(long p_164504_)`
- `private boolean removeFromEntry(int p_164495_,  long p_164496_)`
- `public long removeFirstBit()`
- `protected void rehash(int p_164506_)`

### Inherited methods
- from `it.unimi.dsi.fastutil.longs.Long2LongLinkedOpenHashMap`: `addTo`, `clear`, `clone`, `comparator`, `compute`, `computeIfAbsent`, `computeIfAbsent`, `computeIfAbsentNullable`, `computeIfPresent`, `containsKey`, `containsValue`, `ensureCapacity`, `firstLongKey`, `fixPointers`, `fixPointers`, `get`, `getAndMoveToFirst`, `getAndMoveToLast`, `getOrDefault`, `hashCode`, `headMap`, `isEmpty`, `keySet`, `lastLongKey`, `long2LongEntrySet`, `merge`, `put`, `putAll`, `putAndMoveToFirst`, `putAndMoveToLast`, `putIfAbsent`, `remove`, `remove`, `removeFirstLong`, `removeLastLong`, `replace`, `replace`, `shiftKeys`, `size`, `subMap`, `tailMap`, `trim`, `trim`, `values`
- from `it.unimi.dsi.fastutil.longs.AbstractLong2LongMap`: `equals`, `mergeLong`, `toString`
- from `it.unimi.dsi.fastutil.longs.AbstractLong2LongFunction`: `defaultReturnValue`, `defaultReturnValue`
- from `it.unimi.dsi.fastutil.Function`: `apply`
- from `it.unimi.dsi.fastutil.longs.Long2LongFunction`: `andThen`, `andThenByte`, `andThenChar`, `andThenDouble`, `andThenFloat`, `andThenInt`, `andThenLong`, `andThenObject`, `andThenReference`, `andThenShort`, `applyAsLong`, `compose`, `composeByte`, `composeChar`, `composeDouble`, `composeFloat`, `composeInt`, `composeLong`, `composeObject`, `composeReference`, `composeShort`
- from `it.unimi.dsi.fastutil.longs.Long2LongMap`: `compute`, `computeIfAbsent`, `computeIfAbsentPartial`, `computeIfPresent`, `containsKey`, `containsValue`, `defaultReturnValue`, `defaultReturnValue`, `forEach`, `get`, `getOrDefault`, `merge`, `mergeLong`, `mergeLong`, `put`, `putIfAbsent`, `remove`, `remove`, `replace`, `replace`
- from `it.unimi.dsi.fastutil.longs.Long2LongSortedMap`: `entrySet`, `firstKey`, `headMap`, `lastKey`, `subMap`, `tailMap`
- from `java.util.function.LongUnaryOperator`: `andThen`, `compose`
- from `java.util.Map`: `containsKey`, `equals`, `get`, `getOrDefault`, `put`, `remove`, `replaceAll`
