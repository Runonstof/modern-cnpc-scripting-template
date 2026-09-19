# net.minecraft.world.level.chunk.storage

- [ChunkScanAccess](#chunkscanaccess)
- [ChunkSerializer](#chunkserializer)
- [ChunkStorage](#chunkstorage)
- [Class IOWorker.Priority](#class-ioworker.priority)
- [EntityStorage](#entitystorage)
- [IOWorker](#ioworker)
- [IOWorker.PendingStore](#ioworker.pendingstore)
- [RegionBitmap](#regionbitmap)
- [RegionFile](#regionfile)
- [RegionFile.ChunkBuffer](#regionfile.chunkbuffer)
- [RegionFile.CommitOp](#regionfile.commitop)
- [RegionFileStorage](#regionfilestorage)
- [RegionFileVersion](#regionfileversion)
- [RegionFileVersion.StreamWrapper](#regionfileversion.streamwrapper)
- [SectionStorage](#sectionstorage)
## ChunkScanAccess

*interface* `net.minecraft.world.level.chunk.storage.ChunkScanAccess`

### Methods
- `CompletableFuture<Void> scanChunk(ChunkPos p_196888_,  StreamTagVisitor p_196889_)`

## ChunkSerializer

*class* `net.minecraft.world.level.chunk.storage.ChunkSerializer`

### Fields
- `private static final com.mojang.serialization.Codec<PalettedContainer<BlockState>> BLOCK_STATE_CODEC`
- `private static final org.slf4j.Logger LOGGER`
- `private static final String TAG_UPGRADE_DATA` (= "UpgradeData")
- `private static final String BLOCK_TICKS_TAG` (= "block_ticks")
- `private static final String FLUID_TICKS_TAG` (= "fluid_ticks")
- `public static final String X_POS_TAG` (= "xPos")
- `public static final String Z_POS_TAG` (= "zPos")
- `public static final String HEIGHTMAPS_TAG` (= "Heightmaps")
- `public static final String IS_LIGHT_ON_TAG` (= "isLightOn")
- `public static final String SECTIONS_TAG` (= "sections")
- `public static final String BLOCK_LIGHT_TAG` (= "BlockLight")
- `public static final String SKY_LIGHT_TAG` (= "SkyLight")

### Methods
- `public static ProtoChunk read(ServerLevel p_188231_,  PoiManager p_188232_,  ChunkPos p_188233_,  CompoundTag p_188234_)`
- `private static void logErrors(ChunkPos p_188240_,  int p_188241_,  String p_188242_)`
- `private static com.mojang.serialization.Codec<PalettedContainerRO<Holder<Biome>>> makeBiomeCodec(Registry<Biome> p_188261_)`
- `public static CompoundTag write(ServerLevel p_63455_,  ChunkAccess p_63456_)`
- `private static void saveTicks(ServerLevel p_188236_,  CompoundTag p_188237_,  ChunkAccess.TicksToSave p_188238_)`
- `public static ChunkStatus.ChunkType getChunkTypeFromTag(@Nullable  CompoundTag p_63486_)`
- `@Nullable private static LevelChunk.PostLoadProcessor postLoadChunk(ServerLevel p_196891_,  CompoundTag p_196892_)`
- `@Nullable private static ListTag getListOfCompoundsOrNull(CompoundTag p_196898_,  String p_196899_)`
- `private static CompoundTag packStructureData(StructurePieceSerializationContext p_188250_,  ChunkPos p_188251_,  Map<Structure,StructureStart> p_188252_,  Map<Structure,it.unimi.dsi.fastutil.longs.LongSet> p_188253_)`
- `private static Map<Structure,StructureStart> unpackStructureStart(StructurePieceSerializationContext p_188255_,  CompoundTag p_188256_,  long p_188257_)`
- `private static Map<Structure,it.unimi.dsi.fastutil.longs.LongSet> unpackStructureReferences(RegistryAccess p_208155_,  ChunkPos p_208156_,  CompoundTag p_208157_)`
- `public static ListTag packOffsets(it.unimi.dsi.fastutil.shorts.ShortList[] p_63491_)`

## ChunkStorage

*class* `net.minecraft.world.level.chunk.storage.ChunkStorage`

### Fields
- `public static final int LAST_MONOLYTH_STRUCTURE_DATA_VERSION` (= 1493)
- `private final IOWorker worker`
- `protected final com.mojang.datafixers.DataFixer fixerUpper`
- `@Nullable private volatile LegacyStructureDataHandler legacyStructureHandler`

### Methods
- `public boolean isOldChunkAround(ChunkPos p_223452_,  int p_223453_)`
- `public CompoundTag upgradeChunkTag(ResourceKey<Level> p_188289_,  Supplier<DimensionDataStorage> p_188290_,  CompoundTag p_188291_,  Optional<ResourceKey<com.mojang.serialization.Codec<? extends ChunkGenerator>>> p_188292_)`
- `private LegacyStructureDataHandler getLegacyStructureHandler(ResourceKey<Level> p_223449_,  Supplier<DimensionDataStorage> p_223450_)`
- `public static void injectDatafixingContext(CompoundTag p_196919_,  ResourceKey<Level> p_196920_,  Optional<ResourceKey<com.mojang.serialization.Codec<? extends ChunkGenerator>>> p_196921_)`
- `public static int getVersion(CompoundTag p_63506_)`
- `public CompletableFuture<Optional<CompoundTag>> read(ChunkPos p_223455_)`
- `public void write(ChunkPos p_63503_,  CompoundTag p_63504_)`
- `public void flushWorker()`
- `public void close()  throws IOException`
  - throws: IOException
- `public ChunkScanAccess chunkScanner()`

## Class IOWorker.Priority

*enum* `net.minecraft.world.level.chunk.storage.Class IOWorker.Priority`

Enclosing class: IOWorker

### Methods
- `public static IOWorker.Priority[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static IOWorker.Priority valueOf(String name)`
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

## EntityStorage

*class* `net.minecraft.world.level.chunk.storage.EntityStorage`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final String ENTITIES_TAG` (= "Entities")
- `private static final String POSITION_TAG` (= "Position")
- `private final ServerLevel level`
- `private final IOWorker worker`
- `private final it.unimi.dsi.fastutil.longs.LongSet emptyChunks`
- `private final ProcessorMailbox<Runnable> entityDeserializerQueue`
- `protected final com.mojang.datafixers.DataFixer fixerUpper`

### Methods
- `public CompletableFuture<ChunkEntities<Entity>> loadEntities(ChunkPos p_156551_)`
- `private static ChunkPos readChunkPos(CompoundTag p_156571_)`
- `private static void writeChunkPos(CompoundTag p_156563_,  ChunkPos p_156564_)`
- `private static ChunkEntities<Entity> emptyChunk(ChunkPos p_156569_)`
- `public void storeEntities(ChunkEntities<Entity> p_156559_)`
- `public void flush(boolean p_182487_)`
- `private CompoundTag upgradeChunkTag(CompoundTag p_156573_)`
- `public void close()  throws IOException`
  - throws: IOException

## IOWorker

*class* `net.minecraft.world.level.chunk.storage.IOWorker`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final AtomicBoolean shutdownRequested`
- `private final ProcessorMailbox<StrictQueue.IntRunnable> mailbox`
- `private final RegionFileStorage storage`
- `private final Map<ChunkPos,IOWorker.PendingStore> pendingWrites`
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectLinkedOpenHashMap<CompletableFuture<BitSet>> regionCacheForBlender`
- `private static final int REGION_CACHE_SIZE` (= 1024)

### Methods
- `public boolean isOldChunkAround(ChunkPos p_223472_,  int p_223473_)`
- `private CompletableFuture<BitSet> getOrCreateOldDataForRegion(int p_223464_,  int p_223465_)`
- `private CompletableFuture<BitSet> createOldDataForRegion(int p_223490_,  int p_223491_)`
- `private boolean isOldChunk(CompoundTag p_223485_)`
- `public CompletableFuture<Void> store(ChunkPos p_63539_,  @Nullable  CompoundTag p_63540_)`
- `public CompletableFuture<Optional<CompoundTag>> loadAsync(ChunkPos p_156588_)`
- `public CompletableFuture<Void> synchronize(boolean p_182499_)`
- `public CompletableFuture<Void> scanChunk(ChunkPos p_196939_,  StreamTagVisitor p_196940_)`
- `private <T> CompletableFuture<T> submitTask(Supplier<com.mojang.datafixers.util.Either<T,Exception>> p_63546_)`
- `private void storePendingChunk()`
- `private void tellStorePending()`
- `private void runStore(ChunkPos p_63536_,  IOWorker.PendingStore p_63537_)`
- `public void close()  throws IOException`
  - throws: IOException

## IOWorker.PendingStore

*class* `net.minecraft.world.level.chunk.storage.IOWorker.PendingStore`

Enclosing class: IOWorker

### Fields
- `@Nullable CompoundTag data`
- `final CompletableFuture<Void> result`

## RegionBitmap

*class* `net.minecraft.world.level.chunk.storage.RegionBitmap`

### Fields
- `private final BitSet used`

### Methods
- `public void force(int p_63613_,  int p_63614_)`
- `public void free(int p_63616_,  int p_63617_)`
- `public int allocate(int p_63611_)`
- `public it.unimi.dsi.fastutil.ints.IntSet getUsed()`

## RegionFile

*class* `net.minecraft.world.level.chunk.storage.RegionFile`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int SECTOR_BYTES` (= 4096)
- `protected static final int SECTOR_INTS` (= 1024)
- `private static final int CHUNK_HEADER_SIZE` (= 5)
- `private static final int HEADER_OFFSET` (= 0)
- `private static final ByteBuffer PADDING_BUFFER`
- `private static final String EXTERNAL_FILE_EXTENSION` (= ".mcc")
- `private static final int EXTERNAL_STREAM_FLAG` (= 128)
- `private static final int EXTERNAL_CHUNK_THRESHOLD` (= 256)
- `private static final int CHUNK_NOT_PRESENT` (= 0)
- `private final FileChannel file`
- `private final Path externalFileDir`
- `final RegionFileVersion version`
- `private final ByteBuffer header`
- `private final IntBuffer offsets`
- `private final IntBuffer timestamps`
- `protected final RegionBitmap usedSectors`

### Methods
- `private Path getExternalChunkPath(ChunkPos p_63685_)`
- `@Nullable public DataInputStream getChunkDataInputStream(ChunkPos p_63646_)  throws IOException`
  - throws: IOException
- `private static int getTimestamp()`
- `private static boolean isExternalStreamChunk(byte p_63639_)`
- `private static byte getExternalChunkVersion(byte p_63670_)`
- `@Nullable private DataInputStream createChunkInputStream(ChunkPos p_63651_,  byte p_63652_,  InputStream p_63653_)  throws IOException`
  - throws: IOException
- `@Nullable private DataInputStream createExternalChunkInputStream(ChunkPos p_63648_,  byte p_63649_)  throws IOException`
  - throws: IOException
- `private static ByteArrayInputStream createStream(ByteBuffer p_63660_,  int p_63661_)`
- `private int packSectorOffset(int p_63643_,  int p_63644_)`
- `private static int getNumSectors(int p_63641_)`
- `private static int getSectorNumber(int p_63672_)`
- `private static int sizeToSectors(int p_63677_)`
- `public boolean doesChunkExist(ChunkPos p_63674_)`
- `public DataOutputStream getChunkDataOutputStream(ChunkPos p_63679_)  throws IOException`
  - throws: IOException
- `public void flush()  throws IOException`
  - throws: IOException
- `public void clear(ChunkPos p_156614_)  throws IOException`
  - throws: IOException
- `protected void write(ChunkPos p_63655_,  ByteBuffer p_63656_)  throws IOException`
  - throws: IOException
- `private ByteBuffer createExternalStub()`
- `private RegionFile.CommitOp writeToExternalFile(Path p_63663_,  ByteBuffer p_63664_)  throws IOException`
  - throws: IOException
- `private void writeHeader()  throws IOException`
  - throws: IOException
- `private int getOffset(ChunkPos p_63687_)`
- `public boolean hasChunk(ChunkPos p_63683_)`
- `private static int getOffsetIndex(ChunkPos p_63689_)`
- `public void close()  throws IOException`
  - throws: IOException
- `private void padToFullSector()  throws IOException`
  - throws: IOException

## RegionFile.ChunkBuffer

*class* `net.minecraft.world.level.chunk.storage.RegionFile.ChunkBuffer`

Enclosing class: RegionFile

### Fields
- `private final ChunkPos pos`

### Inherited fields
- from `java.io.ByteArrayOutputStream`: `buf`, `count`

### Methods
- `public void close()  throws IOException`
  - throws: IOException

### Inherited methods
- from `java.io.ByteArrayOutputStream`: `reset`, `size`, `toByteArray`, `toString`, `toString`, `toString`, `toString`, `write`, `write`, `writeBytes`, `writeTo`
- from `java.io.OutputStream`: `flush`, `nullOutputStream`, `write`

## RegionFile.CommitOp

*interface* `net.minecraft.world.level.chunk.storage.RegionFile.CommitOp`

Enclosing class: RegionFile

### Methods
- `void run()  throws IOException`
  - throws: IOException

## RegionFileStorage

*class* `net.minecraft.world.level.chunk.storage.RegionFileStorage`

### Fields
- `public static final String ANVIL_EXTENSION` (= ".mca")
- `private static final int MAX_CACHE_SIZE` (= 256)
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectLinkedOpenHashMap<RegionFile> regionCache`
- `private final Path folder`
- `private final boolean sync`

### Methods
- `private RegionFile getRegionFile(ChunkPos p_63712_)  throws IOException`
  - throws: IOException
- `@Nullable public CompoundTag read(ChunkPos p_63707_)  throws IOException`
  - throws: IOException
- `public void scanChunk(ChunkPos p_196957_,  StreamTagVisitor p_196958_)  throws IOException`
  - throws: IOException
- `protected void write(ChunkPos p_63709_,  @Nullable  CompoundTag p_63710_)  throws IOException`
  - throws: IOException
- `public void close()  throws IOException`
  - throws: IOException
- `public void flush()  throws IOException`
  - throws: IOException

## RegionFileVersion

*class* `net.minecraft.world.level.chunk.storage.RegionFileVersion`

### Fields
- `private static final it.unimi.dsi.fastutil.ints.Int2ObjectMap<RegionFileVersion> VERSIONS`
- `public static final RegionFileVersion VERSION_GZIP`
- `public static final RegionFileVersion VERSION_DEFLATE`
- `public static final RegionFileVersion VERSION_NONE`
- `private final int id`
- `private final RegionFileVersion.StreamWrapper<InputStream> inputWrapper`
- `private final RegionFileVersion.StreamWrapper<OutputStream> outputWrapper`

### Methods
- `private static RegionFileVersion register(RegionFileVersion p_63759_)`
- `@Nullable public static RegionFileVersion fromId(int p_63757_)`
- `public static boolean isValidVersion(int p_63765_)`
- `public int getId()`
- `public OutputStream wrap(OutputStream p_63763_)  throws IOException`
  - throws: IOException
- `public InputStream wrap(InputStream p_63761_)  throws IOException`
  - throws: IOException

## RegionFileVersion.StreamWrapper

*interface* `net.minecraft.world.level.chunk.storage.RegionFileVersion.StreamWrapper`

Enclosing class: RegionFileVersion

### Methods
- `O wrap(O p_63771_) throws IOException`
  - throws: IOException

## SectionStorage

*class* `net.minecraft.world.level.chunk.storage.SectionStorage`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final String SECTIONS_TAG` (= "Sections")
- `private final IOWorker worker`
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectMap<Optional<R>> storage`
- `private final it.unimi.dsi.fastutil.longs.LongLinkedOpenHashSet dirty`
- `private final Function<Runnable,com.mojang.serialization.Codec<R>> codec`
- `private final Function<Runnable,R> factory`
- `private final com.mojang.datafixers.DataFixer fixerUpper`
- `private final DataFixTypes type`
- `private final RegistryAccess registryAccess`
- `protected final LevelHeightAccessor levelHeightAccessor`

### Methods
- `protected void tick(BooleanSupplier p_63812_)`
- `public boolean hasWork()`
- `@Nullable protected Optional<R> get(long p_63819_)`
- `protected Optional<R> getOrLoad(long p_63824_)`
- `protected boolean outsideStoredRange(long p_156631_)`
- `protected R getOrCreate(long p_63828_)`
- `private void readColumn(ChunkPos p_63815_)`
- `private CompletableFuture<Optional<CompoundTag>> tryRead(ChunkPos p_223533_)`
- `private <T> void readColumn(ChunkPos p_63802_,  com.mojang.serialization.DynamicOps<T> p_63803_,  @Nullable  T p_63804_)`
- `private void writeColumn(ChunkPos p_63826_)`
- `private <T> com.mojang.serialization.Dynamic<T> writeColumn(ChunkPos p_63799_,  com.mojang.serialization.DynamicOps<T> p_63800_)`
- `private static long getKey(ChunkPos p_156628_,  int p_156629_)`
- `protected void onSectionLoad(long p_63813_)`
- `protected void setDirty(long p_63788_)`
- `private static int getVersion(com.mojang.serialization.Dynamic<?> p_63806_)`
- `public void flush(ChunkPos p_63797_)`
- `public void close()  throws IOException`
  - throws: IOException
