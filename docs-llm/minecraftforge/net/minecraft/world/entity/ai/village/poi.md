# net.minecraft.world.entity.ai.village.poi

- [Class PoiManager.Occupancy](#class-poimanager.occupancy)
- [PoiManager](#poimanager)
- [PoiManager.DistanceTracker](#poimanager.distancetracker)
- [PoiRecord](#poirecord)
- [PoiSection](#poisection)
- [PoiType](#poitype)
- [PoiTypes](#poitypes)
## Class PoiManager.Occupancy

*enum* `net.minecraft.world.entity.ai.village.poi.Class PoiManager.Occupancy`

Enclosing class: PoiManager

### Fields
- `private final Predicate<? super PoiRecord> test`

### Methods
- `public static PoiManager.Occupancy[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static PoiManager.Occupancy valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public Predicate<? super PoiRecord> getTest()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## PoiManager

*class* `net.minecraft.world.entity.ai.village.poi.PoiManager`

### Fields
- `public static final int MAX_VILLAGE_DISTANCE` (= 6)
- `public static final int VILLAGE_SECTION_SIZE` (= 1)
- `private final PoiManager.DistanceTracker distanceTracker`
- `private final it.unimi.dsi.fastutil.longs.LongSet loadedChunks`

### Inherited fields
- from `net.minecraft.world.level.chunk.storage.SectionStorage`: `levelHeightAccessor`

### Methods
- `public void add(BlockPos p_217920_,  Holder<PoiType> p_217921_)`
- `public void remove(BlockPos p_27080_)`
- `public long getCountInRange(Predicate<Holder<PoiType>> p_27122_,  BlockPos p_27123_,  int p_27124_,  PoiManager.Occupancy p_27125_)`
- `public boolean existsAtPosition(ResourceKey<PoiType> p_217875_,  BlockPos p_217876_)`
- `public Stream<PoiRecord> getInSquare(Predicate<Holder<PoiType>> p_27167_,  BlockPos p_27168_,  int p_27169_,  PoiManager.Occupancy p_27170_)`
- `public Stream<PoiRecord> getInRange(Predicate<Holder<PoiType>> p_27182_,  BlockPos p_27183_,  int p_27184_,  PoiManager.Occupancy p_27185_)`
- `public Stream<PoiRecord> getInChunk(Predicate<Holder<PoiType>> p_27118_,  ChunkPos p_27119_,  PoiManager.Occupancy p_27120_)`
- `public Stream<BlockPos> findAll(Predicate<Holder<PoiType>> p_27139_,  Predicate<BlockPos> p_27140_,  BlockPos p_27141_,  int p_27142_,  PoiManager.Occupancy p_27143_)`
- `public Stream<com.mojang.datafixers.util.Pair<Holder<PoiType>,BlockPos>> findAllWithType(Predicate<Holder<PoiType>> p_217984_,  Predicate<BlockPos> p_217985_,  BlockPos p_217986_,  int p_217987_,  PoiManager.Occupancy p_217988_)`
- `public Stream<com.mojang.datafixers.util.Pair<Holder<PoiType>,BlockPos>> findAllClosestFirstWithType(Predicate<Holder<PoiType>> p_217995_,  Predicate<BlockPos> p_217996_,  BlockPos p_217997_,  int p_217998_,  PoiManager.Occupancy p_217999_)`
- `public Optional<BlockPos> find(Predicate<Holder<PoiType>> p_27187_,  Predicate<BlockPos> p_27188_,  BlockPos p_27189_,  int p_27190_,  PoiManager.Occupancy p_27191_)`
- `public Optional<BlockPos> findClosest(Predicate<Holder<PoiType>> p_27193_,  BlockPos p_27194_,  int p_27195_,  PoiManager.Occupancy p_27196_)`
- `public Optional<com.mojang.datafixers.util.Pair<Holder<PoiType>,BlockPos>> findClosestWithType(Predicate<Holder<PoiType>> p_218003_,  BlockPos p_218004_,  int p_218005_,  PoiManager.Occupancy p_218006_)`
- `public Optional<BlockPos> findClosest(Predicate<Holder<PoiType>> p_148659_,  Predicate<BlockPos> p_148660_,  BlockPos p_148661_,  int p_148662_,  PoiManager.Occupancy p_148663_)`
- `public Optional<BlockPos> take(Predicate<Holder<PoiType>> p_217947_,  BiPredicate<Holder<PoiType>,BlockPos> p_217948_,  BlockPos p_217949_,  int p_217950_)`
- `public Optional<BlockPos> getRandom(Predicate<Holder<PoiType>> p_217952_,  Predicate<BlockPos> p_217953_,  PoiManager.Occupancy p_217954_,  BlockPos p_217955_,  int p_217956_,  RandomSource p_217957_)`
- `public boolean release(BlockPos p_27155_)`
- `public boolean exists(BlockPos p_27092_,  Predicate<Holder<PoiType>> p_27093_)`
- `public Optional<Holder<PoiType>> getType(BlockPos p_27178_)`
- `@Deprecated public int getFreeTickets(BlockPos p_148654_)` (deprecated)
- `public int sectionsToVillage(SectionPos p_27099_)`
- `boolean isVillageCenter(long p_27198_)`
- `public void tick(BooleanSupplier p_27105_)`
- `protected void setDirty(long p_27036_)`
- `protected void onSectionLoad(long p_27145_)`
- `public void checkConsistencyWithBlocks(SectionPos p_281731_,  LevelChunkSection p_281893_)`
- `private static boolean mayHavePoi(LevelChunkSection p_27061_)`
- `private void updateFromSection(LevelChunkSection p_27070_,  SectionPos p_27071_,  BiConsumer<BlockPos,Holder<PoiType>> p_27072_)`
- `public void ensureLoadedAndValid(LevelReader p_27057_,  BlockPos p_27058_,  int p_27059_)`

### Inherited methods
- from `net.minecraft.world.level.chunk.storage.SectionStorage`: `close`, `flush`, `get`, `getOrCreate`, `getOrLoad`, `hasWork`, `outsideStoredRange`

## PoiManager.DistanceTracker

*class* `net.minecraft.world.entity.ai.village.poi.PoiManager.DistanceTracker`

Enclosing class: PoiManager

### Fields
- `private final it.unimi.dsi.fastutil.longs.Long2ByteMap levels`

### Inherited fields
- from `net.minecraft.world.level.lighting.DynamicGraphMinFixedPoint`: `levelCount`, `SOURCE`

### Methods
- `protected int getLevelFromSource(long p_27208_)`
- `protected int getLevel(long p_27210_)`
- `protected void setLevel(long p_27205_,  int p_27206_)`
- `public void runAllUpdates()`

### Inherited methods
- from `net.minecraft.server.level.SectionTracker`: `checkNeighborsAfterUpdate`, `computeLevelFromNeighbor`, `getComputedLevel`, `update`
- from `net.minecraft.world.level.lighting.DynamicGraphMinFixedPoint`: `checkEdge`, `checkNeighbor`, `checkNode`, `getQueueSize`, `hasWork`, `isSource`, `removeFromQueue`, `removeIf`, `runUpdates`

## PoiRecord

*class* `net.minecraft.world.entity.ai.village.poi.PoiRecord`

### Fields
- `private final BlockPos pos`
- `private final Holder<PoiType> poiType`
- `private int freeTickets`
- `private final Runnable setDirty`

### Methods
- `public static com.mojang.serialization.Codec<PoiRecord> codec(Runnable p_27243_)`
- `@Deprecated public int getFreeTickets()` (deprecated)
- `protected boolean acquireTicket()`
- `protected boolean releaseTicket()`
- `public boolean hasSpace()`
- `public boolean isOccupied()`
- `public BlockPos getPos()`
- `public Holder<PoiType> getPoiType()`
- `public boolean equals(Object p_27256_)`
- `public int hashCode()`

## PoiSection

*class* `net.minecraft.world.entity.ai.village.poi.PoiSection`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final it.unimi.dsi.fastutil.shorts.Short2ObjectMap<PoiRecord> records`
- `private final Map<Holder<PoiType>,Set<PoiRecord>> byType`
- `private final Runnable setDirty`
- `private boolean isValid`

### Methods
- `public static com.mojang.serialization.Codec<PoiSection> codec(Runnable p_27296_)`
- `public Stream<PoiRecord> getRecords(Predicate<Holder<PoiType>> p_27305_,  PoiManager.Occupancy p_27306_)`
- `public void add(BlockPos p_218022_,  Holder<PoiType> p_218023_)`
- `private boolean add(PoiRecord p_27274_)`
- `public void remove(BlockPos p_27280_)`
- `@Deprecated public int getFreeTickets(BlockPos p_148683_)` (deprecated)
- `public boolean release(BlockPos p_27318_)`
- `public boolean exists(BlockPos p_27289_,  Predicate<Holder<PoiType>> p_27290_)`
- `public Optional<Holder<PoiType>> getType(BlockPos p_27320_)`
- `private Optional<PoiRecord> getPoiRecord(BlockPos p_148685_)`
- `public void refresh(Consumer<BiConsumer<BlockPos,Holder<PoiType>>> p_27303_)`
- `private void clear()`
- `boolean isValid()`

## PoiType

*record* `net.minecraft.world.entity.ai.village.poi.PoiType`

### Fields
- `private final Set<BlockState> matchingStates`
  The field for the matchingStates record component.
- `private final int maxTickets`
  The field for the maxTickets record component.
- `private final int validRange`
  The field for the validRange record component.
- `public static final Predicate<Holder<PoiType>> NONE`

### Methods
- `public boolean is(BlockState p_148693_)`
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
- `public Set<BlockState> matchingStates()`
  Returns the value of the matchingStates record component.
  - returns: the value of the matchingStates record component
- `public int maxTickets()`
  Returns the value of the maxTickets record component.
  - returns: the value of the maxTickets record component
- `public int validRange()`
  Returns the value of the validRange record component.
  - returns: the value of the validRange record component

## PoiTypes

*class* `net.minecraft.world.entity.ai.village.poi.PoiTypes`

### Fields
- `public static final ResourceKey<PoiType> ARMORER`
- `public static final ResourceKey<PoiType> BUTCHER`
- `public static final ResourceKey<PoiType> CARTOGRAPHER`
- `public static final ResourceKey<PoiType> CLERIC`
- `public static final ResourceKey<PoiType> FARMER`
- `public static final ResourceKey<PoiType> FISHERMAN`
- `public static final ResourceKey<PoiType> FLETCHER`
- `public static final ResourceKey<PoiType> LEATHERWORKER`
- `public static final ResourceKey<PoiType> LIBRARIAN`
- `public static final ResourceKey<PoiType> MASON`
- `public static final ResourceKey<PoiType> SHEPHERD`
- `public static final ResourceKey<PoiType> TOOLSMITH`
- `public static final ResourceKey<PoiType> WEAPONSMITH`
- `public static final ResourceKey<PoiType> HOME`
- `public static final ResourceKey<PoiType> MEETING`
- `public static final ResourceKey<PoiType> BEEHIVE`
- `public static final ResourceKey<PoiType> BEE_NEST`
- `public static final ResourceKey<PoiType> NETHER_PORTAL`
- `public static final ResourceKey<PoiType> LODESTONE`
- `public static final ResourceKey<PoiType> LIGHTNING_ROD`
- `private static final Set<BlockState> BEDS`
- `private static final Set<BlockState> CAULDRONS`
- `private static final Map<BlockState,PoiType> TYPE_BY_STATE`
- `protected static final Set<BlockState> f_218067_`

### Methods
- `private static Set<BlockState> getBlockStates(Block p_218074_)`
- `private static ResourceKey<PoiType> createKey(String p_218091_)`
- `private static PoiType register(Registry<PoiType> p_218085_,  ResourceKey<PoiType> p_218086_,  Set<BlockState> p_218087_,  int p_218088_,  int p_218089_)`
- `private static void registerBlockStates(Holder<PoiType> p_250815_,  Set<BlockState> p_250679_)`
- `public static Optional<Holder<PoiType>> forState(BlockState p_218076_)`
- `public static boolean hasPoi(BlockState p_254440_)`
- `public static PoiType bootstrap(Registry<PoiType> p_218083_)`
