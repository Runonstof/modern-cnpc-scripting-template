# net.minecraft.server.level

- [BlockDestructionProgress](#blockdestructionprogress)
- [ChunkHolder](#chunkholder)
- [ChunkHolder.ChunkLoadingFailure](#chunkholder.chunkloadingfailure)
- [ChunkHolder.ChunkSaveDebug](#chunkholder.chunksavedebug)
- [ChunkHolder.LevelChangeListener](#chunkholder.levelchangelistener)
- [ChunkHolder.PlayerProvider](#chunkholder.playerprovider)
- [ChunkLevel](#chunklevel)
- [ChunkMap](#chunkmap)
- [ChunkMap.DistanceManager](#chunkmap.distancemanager)
- [ChunkMap.TrackedEntity](#chunkmap.trackedentity)
- [ChunkTaskPriorityQueue](#chunktaskpriorityqueue)
- [ChunkTaskPriorityQueueSorter](#chunktaskpriorityqueuesorter)
- [ChunkTaskPriorityQueueSorter.Message](#chunktaskpriorityqueuesorter.message)
- [ChunkTaskPriorityQueueSorter.Release](#chunktaskpriorityqueuesorter.release)
- [ChunkTracker](#chunktracker)
- [ChunkTrackingView](#chunktrackingview)
- [ChunkTrackingView.Positioned](#chunktrackingview.positioned)
- [Class FullChunkStatus](#class-fullchunkstatus)
- [Class ThreadedLevelLightEngine.TaskType](#class-threadedlevellightengine.tasktype)
- [ClientInformation](#clientinformation)
- [ColumnPos](#columnpos)
- [DemoMode](#demomode)
- [DistanceManager](#distancemanager)
- [DistanceManager.ChunkTicketTracker](#distancemanager.chunktickettracker)
- [DistanceManager.FixedPlayerDistanceChunkTracker](#distancemanager.fixedplayerdistancechunktracker)
- [DistanceManager.PlayerTicketTracker](#distancemanager.playertickettracker)
- [PlayerMap](#playermap)
- [PlayerRespawnLogic](#playerrespawnlogic)
- [SectionTracker](#sectiontracker)
- [ServerBossEvent](#serverbossevent)
- [ServerChunkCache](#serverchunkcache)
- [ServerChunkCache.ChunkAndHolder](#serverchunkcache.chunkandholder)
- [ServerChunkCache.MainThreadExecutor](#serverchunkcache.mainthreadexecutor)
- [ServerEntity](#serverentity)
- [ServerLevel](#serverlevel)
- [ServerLevel.EntityCallbacks](#serverlevel.entitycallbacks)
- [ServerPlayer](#serverplayer)
- [ServerPlayerGameMode](#serverplayergamemode)
- [ThreadedLevelLightEngine](#threadedlevellightengine)
- [Ticket](#ticket)
- [TicketType](#tickettype)
- [TickingTracker](#tickingtracker)
- [WorldGenRegion](#worldgenregion)
## BlockDestructionProgress

*class* `net.minecraft.server.level.BlockDestructionProgress`

### Fields
- `private final int id`
- `private final BlockPos pos`
- `private int progress`
- `private int updatedRenderTick`

### Methods
- `public int getId()`
- `public BlockPos getPos()`
- `public void setProgress(int p_139982_)`
- `public int getProgress()`
- `public void updateTick(int p_139987_)`
- `public int getUpdatedRenderTick()`
- `public boolean equals(Object p_139993_)`
- `public int hashCode()`
- `public int compareTo(BlockDestructionProgress p_139984_)`

## ChunkHolder

*class* `net.minecraft.server.level.ChunkHolder`

### Fields
- `public static final com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure> UNLOADED_CHUNK`
- `public static final CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>> UNLOADED_CHUNK_FUTURE`
- `public static final com.mojang.datafixers.util.Either<LevelChunk,ChunkHolder.ChunkLoadingFailure> UNLOADED_LEVEL_CHUNK`
- `private static final com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure> NOT_DONE_YET`
- `private static final CompletableFuture<com.mojang.datafixers.util.Either<LevelChunk,ChunkHolder.ChunkLoadingFailure>> UNLOADED_LEVEL_CHUNK_FUTURE`
- `private static final List<ChunkStatus> CHUNK_STATUSES`
- `private final AtomicReferenceArray<CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>>> futures`
- `private final LevelHeightAccessor levelHeightAccessor`
- `private volatile CompletableFuture<com.mojang.datafixers.util.Either<LevelChunk,ChunkHolder.ChunkLoadingFailure>> fullChunkFuture`
- `private volatile CompletableFuture<com.mojang.datafixers.util.Either<LevelChunk,ChunkHolder.ChunkLoadingFailure>> tickingChunkFuture`
- `private volatile CompletableFuture<com.mojang.datafixers.util.Either<LevelChunk,ChunkHolder.ChunkLoadingFailure>> entityTickingChunkFuture`
- `private CompletableFuture<ChunkAccess> chunkToSave`
- `@Nullable private final DebugBuffer<ChunkHolder.ChunkSaveDebug> chunkToSaveHistory`
- `private int oldTicketLevel`
- `private int ticketLevel`
- `private int queueLevel`
- `final ChunkPos pos`
- `private boolean hasChangedSections`
- `private final it.unimi.dsi.fastutil.shorts.ShortSet[] changedBlocksPerSection`
- `private final BitSet blockChangedLightSectionFilter`
- `private final BitSet skyChangedLightSectionFilter`
- `private final LevelLightEngine lightEngine`
- `private final ChunkHolder.LevelChangeListener onLevelChange`
- `private final ChunkHolder.PlayerProvider playerProvider`
- `private boolean wasAccessibleSinceLastSave`
- `LevelChunk currentlyLoading`
- `private CompletableFuture<Void> pendingFullStateConfirmation`
- `private CompletableFuture<?> sendSync`

### Methods
- `public CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>> getFutureIfPresentUnchecked(ChunkStatus p_140048_)`
- `public CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>> getFutureIfPresent(ChunkStatus p_140081_)`
- `public CompletableFuture<com.mojang.datafixers.util.Either<LevelChunk,ChunkHolder.ChunkLoadingFailure>> getTickingChunkFuture()`
- `public CompletableFuture<com.mojang.datafixers.util.Either<LevelChunk,ChunkHolder.ChunkLoadingFailure>> getEntityTickingChunkFuture()`
- `public CompletableFuture<com.mojang.datafixers.util.Either<LevelChunk,ChunkHolder.ChunkLoadingFailure>> getFullChunkFuture()`
- `@Nullable public LevelChunk getTickingChunk()`
- `public CompletableFuture<?> getChunkSendSyncFuture()`
- `@Nullable public LevelChunk getChunkToSend()`
- `@Nullable public LevelChunk getFullChunk()`
- `@Nullable public ChunkStatus getLastAvailableStatus()`
- `@Nullable public ChunkAccess getLastAvailable()`
- `public CompletableFuture<ChunkAccess> getChunkToSave()`
- `public void blockChanged(BlockPos p_140057_)`
- `public void sectionLightChanged(LightLayer p_140037_,  int p_140038_)`
- `public void broadcastChanges(LevelChunk p_140055_)`
- `private void broadcastBlockEntityIfNeeded(List<ServerPlayer> p_288982_,  Level p_289011_,  BlockPos p_288969_,  BlockState p_288973_)`
- `private void broadcastBlockEntity(List<ServerPlayer> p_288988_,  Level p_289005_,  BlockPos p_288981_)`
- `private void broadcast(List<ServerPlayer> p_288998_,  Packet<?> p_289013_)`
- `public CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>> getOrScheduleFuture(ChunkStatus p_140050_,  ChunkMap p_140051_)`
- `protected void addSaveDependency(String p_200417_,  CompletableFuture<?> p_200418_)`
- `private void updateChunkToSave(CompletableFuture<? extends com.mojang.datafixers.util.Either<? extends ChunkAccess,ChunkHolder.ChunkLoadingFailure>> p_143018_,  String p_143019_)`
- `public void addSendDependency(CompletableFuture<?> p_300440_)`
- `public FullChunkStatus getFullStatus()`
- `public ChunkPos getPos()`
- `public int getTicketLevel()`
- `public int getQueueLevel()`
- `private void setQueueLevel(int p_140087_)`
- `public void setTicketLevel(int p_140028_)`
- `private void scheduleFullChunkPromotion(ChunkMap p_142999_,  CompletableFuture<com.mojang.datafixers.util.Either<LevelChunk,ChunkHolder.ChunkLoadingFailure>> p_143000_,  Executor p_143001_,  FullChunkStatus p_287621_)`
- `private void demoteFullChunk(ChunkMap p_287599_,  FullChunkStatus p_287649_)`
- `protected void updateFutures(ChunkMap p_143004_,  Executor p_143005_)`
- `public boolean wasAccessibleSinceLastSave()`
- `public void refreshAccessibility()`
- `public void replaceProtoChunk(ImposterProtoChunk p_140053_)`
- `public List<com.mojang.datafixers.util.Pair<ChunkStatus,CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>>>> getAllFutures()`

## ChunkHolder.ChunkLoadingFailure

*interface* `net.minecraft.server.level.ChunkHolder.ChunkLoadingFailure`

Enclosing class: ChunkHolder

### Fields
- `static final ChunkHolder.ChunkLoadingFailure UNLOADED`

## ChunkHolder.ChunkSaveDebug

*class* `net.minecraft.server.level.ChunkHolder.ChunkSaveDebug`

Enclosing class: ChunkHolder

### Fields
- `private final Thread thread`
- `private final CompletableFuture<?> future`
- `private final String source`

## ChunkHolder.LevelChangeListener

*interface* `net.minecraft.server.level.ChunkHolder.LevelChangeListener`

Enclosing class: ChunkHolder

### Methods
- `void onLevelChange(ChunkPos p_140119_,  IntSupplier p_140120_,  int p_140121_,  IntConsumer p_140122_)`

## ChunkHolder.PlayerProvider

*interface* `net.minecraft.server.level.ChunkHolder.PlayerProvider`

Enclosing class: ChunkHolder

### Methods
- `List<ServerPlayer> getPlayers(ChunkPos p_183717_,  boolean p_183718_)`

## ChunkLevel

*class* `net.minecraft.server.level.ChunkLevel`

### Fields
- `private static final int FULL_CHUNK_LEVEL` (= 33)
- `private static final int BLOCK_TICKING_LEVEL` (= 32)
- `private static final int ENTITY_TICKING_LEVEL` (= 31)
- `public static final int MAX_LEVEL`

### Methods
- `public static ChunkStatus generationStatus(int p_287738_)`
- `public static int byStatus(ChunkStatus p_287771_)`
- `public static FullChunkStatus fullStatus(int p_287750_)`
- `public static int byStatus(FullChunkStatus p_287601_)`
- `public static boolean isEntityTicking(int p_287767_)`
- `public static boolean isBlockTicking(int p_287696_)`
- `public static boolean isLoaded(int p_287635_)`

## ChunkMap

*class* `net.minecraft.server.level.ChunkMap`

### Fields
- `private static final byte CHUNK_TYPE_REPLACEABLE` (= 0xff)
- `private static final byte CHUNK_TYPE_UNKNOWN` (= 0x0)
- `private static final byte CHUNK_TYPE_FULL` (= 0x1)
- `private static final org.slf4j.Logger LOGGER`
- `private static final int CHUNK_SAVED_PER_TICK` (= 200)
- `private static final int CHUNK_SAVED_EAGERLY_PER_TICK` (= 20)
- `private static final int EAGER_CHUNK_SAVE_COOLDOWN_IN_MILLIS` (= 10000)
- `public static final int MIN_VIEW_DISTANCE` (= 2)
- `public static final int MAX_VIEW_DISTANCE` (= 32)
- `public static final int FORCED_TICKET_LEVEL`
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectLinkedOpenHashMap<ChunkHolder> updatingChunkMap`
- `private volatile it.unimi.dsi.fastutil.longs.Long2ObjectLinkedOpenHashMap<ChunkHolder> visibleChunkMap`
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectLinkedOpenHashMap<ChunkHolder> pendingUnloads`
- `private final it.unimi.dsi.fastutil.longs.LongSet entitiesInLevel`
- `final ServerLevel level`
- `private final ThreadedLevelLightEngine lightEngine`
- `private final BlockableEventLoop<Runnable> mainThreadExecutor`
- `private ChunkGenerator generator`
- `private final RandomState randomState`
- `private final ChunkGeneratorStructureState chunkGeneratorState`
- `private final Supplier<DimensionDataStorage> overworldDataStorage`
- `private final PoiManager poiManager`
- `final it.unimi.dsi.fastutil.longs.LongSet toDrop`
- `private boolean modified`
- `private final ChunkTaskPriorityQueueSorter queueSorter`
- `private final ProcessorHandle<ChunkTaskPriorityQueueSorter.Message<Runnable>> worldgenMailbox`
- `private final ProcessorHandle<ChunkTaskPriorityQueueSorter.Message<Runnable>> mainThreadMailbox`
- `private final ChunkProgressListener progressListener`
- `private final ChunkStatusUpdateListener chunkStatusListener`
- `private final ChunkMap.DistanceManager distanceManager`
- `private final AtomicInteger tickingGenerated`
- `private final StructureTemplateManager structureTemplateManager`
- `private final String storageName`
- `private final PlayerMap playerMap`
- `private final it.unimi.dsi.fastutil.ints.Int2ObjectMap<ChunkMap.TrackedEntity> entityMap`
- `private final it.unimi.dsi.fastutil.longs.Long2ByteMap chunkTypeCache`
- `private final it.unimi.dsi.fastutil.longs.Long2LongMap chunkSaveCooldowns`
- `private final Queue<Runnable> unloadQueue`
- `private int serverViewDistance`

### Inherited fields
- from `net.minecraft.world.level.chunk.storage.ChunkStorage`: `fixerUpper`, `LAST_MONOLYTH_STRUCTURE_DATA_VERSION`

### Methods
- `protected ChunkGenerator generator()`
- `protected ChunkGeneratorStructureState generatorState()`
- `protected RandomState randomState()`
- `public void debugReloadGenerator()`
- `private static double euclideanDistanceSquared(ChunkPos p_140227_,  Entity p_140228_)`
- `boolean isChunkTracked(ServerPlayer p_297550_,  int p_301041_,  int p_300379_)`
- `private boolean isChunkOnTrackedBorder(ServerPlayer p_299796_,  int p_300477_,  int p_298067_)`
- `protected ThreadedLevelLightEngine getLightEngine()`
- `@Nullable protected ChunkHolder getUpdatingChunkIfPresent(long p_140175_)`
- `@Nullable protected ChunkHolder getVisibleChunkIfPresent(long p_140328_)`
- `protected IntSupplier getChunkQueueLevel(long p_140372_)`
- `public String getChunkDebugData(ChunkPos p_140205_)`
- `private CompletableFuture<com.mojang.datafixers.util.Either<List<ChunkAccess>,ChunkHolder.ChunkLoadingFailure>> getChunkRangeFuture(ChunkHolder p_281446_,  int p_282030_,  IntFunction<ChunkStatus> p_282923_)`
- `public ReportedException debugFuturesAndCreateReportedException(IllegalStateException p_203752_,  String p_203753_)`
- `public CompletableFuture<com.mojang.datafixers.util.Either<LevelChunk,ChunkHolder.ChunkLoadingFailure>> prepareEntityTickingChunk(ChunkHolder p_281455_)`
- `@Nullable ChunkHolder updateChunkScheduling(long p_140177_,  int p_140178_,  @Nullable  ChunkHolder p_140179_,  int p_140180_)`
- `public void close()  throws IOException`
  - throws: IOException
- `protected void saveAllChunks(boolean p_140319_)`
- `protected void tick(BooleanSupplier p_140281_)`
- `public boolean hasWork()`
- `private void processUnloads(BooleanSupplier p_140354_)`
- `private void scheduleUnload(long p_140182_,  ChunkHolder p_140183_)`
- `protected boolean promoteChunkMap()`
- `public CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>> schedule(ChunkHolder p_140293_,  ChunkStatus p_140294_)`
- `private CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>> scheduleChunkLoad(ChunkPos p_140418_)`
- `private static boolean isChunkDataValid(CompoundTag p_214941_)`
- `private com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure> handleChunkLoadFailure(Throwable p_214902_,  ChunkPos p_214903_)`
- `private ChunkAccess createEmptyChunk(ChunkPos p_214962_)`
- `private void markPositionReplaceable(ChunkPos p_140423_)`
- `private byte markPosition(ChunkPos p_140230_,  ChunkStatus.ChunkType p_140231_)`
- `private CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>> scheduleChunkGeneration(ChunkHolder p_140361_,  ChunkStatus p_140362_)`
- `protected void releaseLightTicket(ChunkPos p_140376_)`
- `private ChunkStatus getDependencyStatus(ChunkStatus p_140263_,  int p_140264_)`
- `private static void postLoadProtoChunk(ServerLevel p_143065_,  List<CompoundTag> p_143066_)`
- `private CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>> protoChunkToFullChunk(ChunkHolder p_140384_)`
- `public CompletableFuture<com.mojang.datafixers.util.Either<LevelChunk,ChunkHolder.ChunkLoadingFailure>> prepareTickingChunk(ChunkHolder p_143054_)`
- `private void onChunkReadyToSend(LevelChunk p_299599_)`
- `public CompletableFuture<com.mojang.datafixers.util.Either<LevelChunk,ChunkHolder.ChunkLoadingFailure>> prepareAccessibleChunk(ChunkHolder p_143110_)`
- `public int getTickingGenerated()`
- `private boolean saveChunkIfNeeded(ChunkHolder p_198875_)`
- `private boolean save(ChunkAccess p_140259_)`
- `private boolean isExistingChunkFull(ChunkPos p_140426_)`
- `protected void setServerViewDistance(int p_300944_)`
- `int getPlayerViewDistance(ServerPlayer p_298592_)`
- `private void markChunkPendingToSend(ServerPlayer p_297974_,  ChunkPos p_298062_)`
- `private static void markChunkPendingToSend(ServerPlayer p_299135_,  LevelChunk p_301128_)`
- `private static void dropChunk(ServerPlayer p_300364_,  ChunkPos p_299541_)`
- `@Nullable public LevelChunk getChunkToSend(long p_299683_)`
- `public int size()`
- `public DistanceManager getDistanceManager()`
- `protected Iterable<ChunkHolder> getChunks()`
- `void dumpChunks(Writer p_140275_)  throws IOException`
  - throws: IOException
- `private static String printFuture(CompletableFuture<com.mojang.datafixers.util.Either<LevelChunk,ChunkHolder.ChunkLoadingFailure>> p_140279_)`
- `private CompletableFuture<Optional<CompoundTag>> readChunk(ChunkPos p_214964_)`
- `private CompoundTag upgradeChunkTag(CompoundTag p_214948_)`
- `boolean anyPlayerCloseEnoughForSpawning(ChunkPos p_183880_)`
- `public List<ServerPlayer> getPlayersCloseForSpawning(ChunkPos p_183889_)`
- `private boolean playerIsCloseEnoughForSpawning(ServerPlayer p_183752_,  ChunkPos p_183753_)`
- `private boolean skipPlayer(ServerPlayer p_140330_)`
- `void updatePlayerStatus(ServerPlayer p_140193_,  boolean p_140194_)`
- `private void updatePlayerPos(ServerPlayer p_140374_)`
- `public void move(ServerPlayer p_140185_)`
- `private void updateChunkTracking(ServerPlayer p_183755_)`
- `private void applyChunkTrackingView(ServerPlayer p_301380_,  ChunkTrackingView p_301057_)`
- `public List<ServerPlayer> getPlayers(ChunkPos p_183801_,  boolean p_183802_)`
- `protected void addEntity(Entity p_140200_)`
- `protected void removeEntity(Entity p_140332_)`
- `protected void tick()`
- `public void broadcast(Entity p_140202_,  Packet<?> p_140203_)`
- `protected void broadcastAndSend(Entity p_140334_,  Packet<?> p_140335_)`
- `public void resendBiomesForChunks(List<ChunkAccess> p_275577_)`
- `protected PoiManager getPoiManager()`
- `public String getStorageName()`
- `void onFullChunkStatusChange(ChunkPos p_287612_,  FullChunkStatus p_287685_)`
- `public void waitForLightBeforeSending(ChunkPos p_297696_,  int p_300649_)`

### Inherited methods
- from `net.minecraft.world.level.chunk.storage.ChunkStorage`: `chunkScanner`, `flushWorker`, `getVersion`, `injectDatafixingContext`, `isOldChunkAround`, `read`, `upgradeChunkTag`, `write`

## ChunkMap.DistanceManager

*class* `net.minecraft.server.level.ChunkMap.DistanceManager`

Enclosing class: ChunkMap

### Inherited fields
- from `net.minecraft.server.level.DistanceManager`: `chunksToUpdateFutures`, `LOGGER`, `mainThreadExecutor`, `PLAYER_TICKET_LEVEL`, `playersPerChunk`, `tickets`, `ticketsToRelease`, `ticketThrottler`, `ticketThrottlerInput`, `ticketThrottlerReleaser`

### Methods
- `protected boolean isChunkToRemove(long p_140462_)`
- `@Nullable protected ChunkHolder getChunk(long p_140469_)`
- `@Nullable protected ChunkHolder updateChunkScheduling(long p_140464_,  int p_140465_,  @Nullable  ChunkHolder p_140466_,  int p_140467_)`

### Inherited methods
- from `net.minecraft.server.level.DistanceManager`: `addPlayer`, `addRegionTicket`, `addRegionTicket`, `addTicket`, `addTicket`, `getDebugStatus`, `getNaturalSpawnChunkCount`, `getTicketDebugString`, `hasPlayersNearby`, `hasTickets`, `inBlockTickingRange`, `inEntityTickingRange`, `purgeStaleTickets`, `removePlayer`, `removeRegionTicket`, `removeRegionTicket`, `removeTicket`, `removeTicket`, `removeTicketsOnClosing`, `runAllUpdates`, `shouldForceTicks`, `tickingTracker`, `updateChunkForced`, `updatePlayerTickets`, `updateSimulationDistance`

## ChunkMap.TrackedEntity

*class* `net.minecraft.server.level.ChunkMap.TrackedEntity`

Enclosing class: ChunkMap

### Fields
- `final ServerEntity serverEntity`
- `final Entity entity`
- `private final int range`
- `SectionPos lastSectionPos`
- `private final Set<ServerPlayerConnection> seenBy`

### Methods
- `public boolean equals(Object p_140506_)`
- `public int hashCode()`
- `public void broadcast(Packet<?> p_140490_)`
- `public void broadcastAndSend(Packet<?> p_140500_)`
- `public void broadcastRemoved()`
- `public void removePlayer(ServerPlayer p_140486_)`
- `public void updatePlayer(ServerPlayer p_140498_)`
- `private int scaledRange(int p_140484_)`
- `private int getEffectiveRange()`
- `public void updatePlayers(List<ServerPlayer> p_140488_)`

## ChunkTaskPriorityQueue

*class* `net.minecraft.server.level.ChunkTaskPriorityQueue`

### Fields
- `public static final int PRIORITY_LEVEL_COUNT`
- `private final List<it.unimi.dsi.fastutil.longs.Long2ObjectLinkedOpenHashMap<List<Optional<T>>>> taskQueue`
- `private volatile int firstQueue`
- `private final String name`
- `private final it.unimi.dsi.fastutil.longs.LongSet acquired`
- `private final int maxTasks`

### Methods
- `protected void resortChunkTasks(int p_140522_,  ChunkPos p_140523_,  int p_140524_)`
- `protected void submit(Optional<T> p_140536_,  long p_140537_,  int p_140538_)`
- `protected void release(long p_140531_,  boolean p_140532_)`
- `private Runnable acquire(long p_140526_)`
- `@Nullable public Stream<com.mojang.datafixers.util.Either<T,Runnable>> pop()`
- `public boolean hasWork()`
- `public String toString()`
- `it.unimi.dsi.fastutil.longs.LongSet getAcquired()`

## ChunkTaskPriorityQueueSorter

*class* `net.minecraft.server.level.ChunkTaskPriorityQueueSorter`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Map<ProcessorHandle<?>,ChunkTaskPriorityQueue<? extends Function<ProcessorHandle<Unit>,?>>> queues`
- `private final Set<ProcessorHandle<?>> sleeping`
- `private final ProcessorMailbox<StrictQueue.IntRunnable> mailbox`

### Methods
- `public boolean hasWork()`
- `public static <T> ChunkTaskPriorityQueueSorter.Message<T> message(Function<ProcessorHandle<Unit>,T> p_143182_,  long p_143183_,  IntSupplier p_143184_)`
- `public static ChunkTaskPriorityQueueSorter.Message<Runnable> message(Runnable p_140625_,  long p_140626_,  IntSupplier p_140627_)`
- `public static ChunkTaskPriorityQueueSorter.Message<Runnable> message(ChunkHolder p_140643_,  Runnable p_140644_)`
- `public static <T> ChunkTaskPriorityQueueSorter.Message<T> message(ChunkHolder p_143157_,  Function<ProcessorHandle<Unit>,T> p_143158_)`
- `public static ChunkTaskPriorityQueueSorter.Release release(Runnable p_140629_,  long p_140630_,  boolean p_140631_)`
- `public <T> ProcessorHandle<ChunkTaskPriorityQueueSorter.Message<T>> getProcessor(ProcessorHandle<T> p_140605_,  boolean p_140606_)`
- `public ProcessorHandle<ChunkTaskPriorityQueueSorter.Release> getReleaseProcessor(ProcessorHandle<Runnable> p_140568_)`
- `public void onLevelChange(ChunkPos p_140616_,  IntSupplier p_140617_,  int p_140618_,  IntConsumer p_140619_)`
- `private <T> void release(ProcessorHandle<T> p_140570_,  long p_140571_,  Runnable p_140572_,  boolean p_140573_)`
- `private <T> void submit(ProcessorHandle<T> p_140590_,  Function<ProcessorHandle<Unit>,T> p_140591_,  long p_140592_,  IntSupplier p_140593_,  boolean p_140594_)`
- `private <T> void pollTask(ChunkTaskPriorityQueue<Function<ProcessorHandle<Unit>,T>> p_140646_,  ProcessorHandle<T> p_140647_)`
- `private <T> ChunkTaskPriorityQueue<Function<ProcessorHandle<Unit>,T>> getQueue(ProcessorHandle<T> p_140653_)`
- `public String getDebugStatus()`
- `public void close()`

## ChunkTaskPriorityQueueSorter.Message

*class* `net.minecraft.server.level.ChunkTaskPriorityQueueSorter.Message`

Enclosing class: ChunkTaskPriorityQueueSorter

### Fields
- `final Function<ProcessorHandle<Unit>,T> task`
- `final long pos`
- `final IntSupplier level`

## ChunkTaskPriorityQueueSorter.Release

*class* `net.minecraft.server.level.ChunkTaskPriorityQueueSorter.Release`

Enclosing class: ChunkTaskPriorityQueueSorter

### Fields
- `final Runnable task`
- `final long pos`
- `final boolean clearQueue`

## ChunkTracker

*class* `net.minecraft.server.level.ChunkTracker`

### Inherited fields
- from `net.minecraft.world.level.lighting.DynamicGraphMinFixedPoint`: `levelCount`, `SOURCE`

### Methods
- `protected boolean isSource(long p_140705_)`
- `protected void checkNeighborsAfterUpdate(long p_140707_,  int p_140708_,  boolean p_140709_)`
- `protected int getComputedLevel(long p_140711_,  long p_140712_,  int p_140713_)`
- `protected int computeLevelFromNeighbor(long p_140720_,  long p_140721_,  int p_140722_)`
- `protected abstract int getLevelFromSource(long p_140714_)`
- `public void update(long p_140716_,  int p_140717_,  boolean p_140718_)`

### Inherited methods
- from `net.minecraft.world.level.lighting.DynamicGraphMinFixedPoint`: `checkEdge`, `checkNeighbor`, `checkNode`, `getLevel`, `getQueueSize`, `hasWork`, `removeFromQueue`, `removeIf`, `runUpdates`, `setLevel`

## ChunkTrackingView

*interface* `net.minecraft.server.level.ChunkTrackingView`

### Fields
- `static final ChunkTrackingView EMPTY`

### Methods
- `static ChunkTrackingView of(ChunkPos p_299839_,  int p_298969_)`
- `static void difference(ChunkTrackingView p_297320_,  ChunkTrackingView p_298920_,  Consumer<ChunkPos> p_300281_,  Consumer<ChunkPos> p_298429_)`
- `default boolean contains(ChunkPos p_298506_)`
- `default boolean contains(int p_298205_,  int p_299033_)`
- `boolean contains(int p_297637_,  int p_299915_,  boolean p_300628_)`
- `void forEach(Consumer<ChunkPos> p_301208_)`
- `default boolean isInViewDistance(int p_299368_,  int p_297466_)`
- `static boolean isInViewDistance(int p_300363_,  int p_300565_,  int p_297699_,  int p_299801_,  int p_300142_)`
- `static boolean isWithinDistance(int p_299483_,  int p_297415_,  int p_300799_,  int p_299157_,  int p_301327_,  boolean p_301271_)`

## ChunkTrackingView.Positioned

*record* `net.minecraft.server.level.ChunkTrackingView.Positioned`

Enclosing interface: ChunkTrackingView

### Fields
- `private final ChunkPos center`
  The field for the center record component.
- `private final int viewDistance`
  The field for the viewDistance record component.

### Inherited fields
- from `net.minecraft.server.level.ChunkTrackingView`: `EMPTY`

### Methods
- `int minX()`
- `int minZ()`
- `int maxX()`
- `int maxZ()`
- `protected boolean squareIntersects(ChunkTrackingView.Positioned p_300776_)`
- `public boolean contains(int p_297345_,  int p_300837_,  boolean p_298477_)`
- `public void forEach(Consumer<ChunkPos> p_299048_)`
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
- `public ChunkPos center()`
  Returns the value of the center record component.
  - returns: the value of the center record component
- `public int viewDistance()`
  Returns the value of the viewDistance record component.
  - returns: the value of the viewDistance record component

### Inherited methods
- from `net.minecraft.server.level.ChunkTrackingView`: `contains`, `contains`, `isInViewDistance`

## Class FullChunkStatus

*enum* `net.minecraft.server.level.Class FullChunkStatus`

### Methods
- `public static FullChunkStatus[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static FullChunkStatus valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public boolean isOrAfter(FullChunkStatus p_287607_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ThreadedLevelLightEngine.TaskType

*enum* `net.minecraft.server.level.Class ThreadedLevelLightEngine.TaskType`

Enclosing class: ThreadedLevelLightEngine

### Methods
- `public static ThreadedLevelLightEngine.TaskType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ThreadedLevelLightEngine.TaskType valueOf(String name)`
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

## ClientInformation

*record* `net.minecraft.server.level.ClientInformation`

### Fields
- `private final String language`
  The field for the language record component.
- `private final int viewDistance`
  The field for the viewDistance record component.
- `private final ChatVisiblity chatVisibility`
  The field for the chatVisibility record component.
- `private final boolean chatColors`
  The field for the chatColors record component.
- `private final int modelCustomisation`
  The field for the modelCustomisation record component.
- `private final HumanoidArm mainHand`
  The field for the mainHand record component.
- `private final boolean textFilteringEnabled`
  The field for the textFilteringEnabled record component.
- `private final boolean allowsListing`
  The field for the allowsListing record component.
- `public static final int MAX_LANGUAGE_LENGTH` (= 16)

### Methods
- `public void write(FriendlyByteBuf p_297289_)`
- `public static ClientInformation createDefault()`
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
- `public String language()`
  Returns the value of the language record component.
  - returns: the value of the language record component
- `public int viewDistance()`
  Returns the value of the viewDistance record component.
  - returns: the value of the viewDistance record component
- `public ChatVisiblity chatVisibility()`
  Returns the value of the chatVisibility record component.
  - returns: the value of the chatVisibility record component
- `public boolean chatColors()`
  Returns the value of the chatColors record component.
  - returns: the value of the chatColors record component
- `public int modelCustomisation()`
  Returns the value of the modelCustomisation record component.
  - returns: the value of the modelCustomisation record component
- `public HumanoidArm mainHand()`
  Returns the value of the mainHand record component.
  - returns: the value of the mainHand record component
- `public boolean textFilteringEnabled()`
  Returns the value of the textFilteringEnabled record component.
  - returns: the value of the textFilteringEnabled record component
- `public boolean allowsListing()`
  Returns the value of the allowsListing record component.
  - returns: the value of the allowsListing record component

## ColumnPos

*record* `net.minecraft.server.level.ColumnPos`

### Fields
- `private final int x`
  The field for the x record component.
- `private final int z`
  The field for the z record component.
- `private static final long COORD_BITS` (= 32L)
- `private static final long COORD_MASK` (= 4294967295L)

### Methods
- `public ChunkPos toChunkPos()`
- `public long toLong()`
- `public static long asLong(int p_143198_,  int p_143199_)`
- `public static int getX(long p_214970_)`
- `public static int getZ(long p_214972_)`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int x()`
  Returns the value of the x record component.
  - returns: the value of the x record component
- `public int z()`
  Returns the value of the z record component.
  - returns: the value of the z record component

## DemoMode

*class* `net.minecraft.server.level.DemoMode`

### Fields
- `public static final int DEMO_DAYS` (= 5)
- `public static final int TOTAL_PLAY_TICKS` (= 120500)
- `private boolean displayedIntro`
- `private boolean demoHasEnded`
- `private int demoEndedReminder`
- `private int gameModeTicks`

### Inherited fields
- from `net.minecraft.server.level.ServerPlayerGameMode`: `level`, `player`

### Methods
- `public void tick()`
- `private void outputDemoReminder()`
- `public void handleBlockBreakAction(BlockPos p_214976_,  ServerboundPlayerActionPacket.Action p_214977_,  Direction p_214978_,  int p_214979_,  int p_214980_)`
- `public InteractionResult useItem(ServerPlayer p_140742_,  Level p_140743_,  ItemStack p_140744_,  InteractionHand p_140745_)`
- `public InteractionResult useItemOn(ServerPlayer p_140747_,  Level p_140748_,  ItemStack p_140749_,  InteractionHand p_140750_,  BlockHitResult p_140751_)`

### Inherited methods
- from `net.minecraft.server.level.ServerPlayerGameMode`: `changeGameModeForPlayer`, `destroyAndAck`, `destroyBlock`, `getGameModeForPlayer`, `getPreviousGameModeForPlayer`, `isCreative`, `isSurvival`, `setGameModeForPlayer`, `setLevel`

## DistanceManager

*class* `net.minecraft.server.level.DistanceManager`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `static final int PLAYER_TICKET_LEVEL`
- `private static final int INITIAL_TICKET_LIST_CAPACITY` (= 4)
- `final it.unimi.dsi.fastutil.longs.Long2ObjectMap<it.unimi.dsi.fastutil.objects.ObjectSet<ServerPlayer>> playersPerChunk`
- `final it.unimi.dsi.fastutil.longs.Long2ObjectOpenHashMap<SortedArraySet<Ticket<?>>> tickets`
- `private final DistanceManager.ChunkTicketTracker ticketTracker`
- `private final DistanceManager.FixedPlayerDistanceChunkTracker naturalSpawnChunkCounter`
- `private final TickingTracker tickingTicketsTracker`
- `private final DistanceManager.PlayerTicketTracker playerTicketManager`
- `final Set<ChunkHolder> chunksToUpdateFutures`
- `final ChunkTaskPriorityQueueSorter ticketThrottler`
- `final ProcessorHandle<ChunkTaskPriorityQueueSorter.Message<Runnable>> ticketThrottlerInput`
- `final ProcessorHandle<ChunkTaskPriorityQueueSorter.Release> ticketThrottlerReleaser`
- `final it.unimi.dsi.fastutil.longs.LongSet ticketsToRelease`
- `final Executor mainThreadExecutor`
- `private long ticketTickCounter`
- `private int simulationDistance`
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectOpenHashMap<SortedArraySet<Ticket<?>>> forcedTickets`

### Methods
- `protected void purgeStaleTickets()`
- `private static int getTicketLevelAt(SortedArraySet<Ticket<?>> p_140798_)`
- `protected abstract boolean isChunkToRemove(long p_140779_)`
- `@Nullable protected abstract ChunkHolder getChunk(long p_140817_)`
- `@Nullable protected abstract ChunkHolder updateChunkScheduling(long p_140780_,  int p_140781_,  @Nullable  ChunkHolder p_140782_,  int p_140783_)`
- `public boolean runAllUpdates(ChunkMap p_140806_)`
- `void addTicket(long p_140785_,  Ticket<?> p_140786_)`
- `void removeTicket(long p_140819_,  Ticket<?> p_140820_)`
- `public <T> void addTicket(TicketType<T> p_140793_,  ChunkPos p_140794_,  int p_140795_,  T p_140796_)`
- `public <T> void removeTicket(TicketType<T> p_140824_,  ChunkPos p_140825_,  int p_140826_,  T p_140827_)`
- `public <T> void addRegionTicket(TicketType<T> p_140841_,  ChunkPos p_140842_,  int p_140843_,  T p_140844_)`
- `public <T> void addRegionTicket(TicketType<T> p_140841_,  ChunkPos p_140842_,  int p_140843_,  T p_140844_,  boolean forceTicks)`
- `public <T> void removeRegionTicket(TicketType<T> p_140850_,  ChunkPos p_140851_,  int p_140852_,  T p_140853_)`
- `public <T> void removeRegionTicket(TicketType<T> p_140850_,  ChunkPos p_140851_,  int p_140852_,  T p_140853_,  boolean forceTicks)`
- `private SortedArraySet<Ticket<?>> getTickets(long p_140858_)`
- `protected void updateChunkForced(ChunkPos p_140800_,  boolean p_140801_)`
- `public void addPlayer(SectionPos p_140803_,  ServerPlayer p_140804_)`
- `public void removePlayer(SectionPos p_140829_,  ServerPlayer p_140830_)`
- `private int getPlayerTicketLevel()`
- `public boolean inEntityTickingRange(long p_183914_)`
- `public boolean inBlockTickingRange(long p_183917_)`
- `protected String getTicketDebugString(long p_140839_)`
- `protected void updatePlayerTickets(int p_140778_)`
- `public void updateSimulationDistance(int p_183912_)`
- `public int getNaturalSpawnChunkCount()`
- `public boolean hasPlayersNearby(long p_140848_)`
- `public String getDebugStatus()`
- `public boolean shouldForceTicks(long chunkPos)`
- `private void dumpTickets(String p_143208_)`
- `TickingTracker tickingTracker()`
- `public void removeTicketsOnClosing()`
- `public boolean hasTickets()`

## DistanceManager.ChunkTicketTracker

*class* `net.minecraft.server.level.DistanceManager.ChunkTicketTracker`

Enclosing class: DistanceManager

### Fields
- `private static final int MAX_LEVEL`

### Inherited fields
- from `net.minecraft.world.level.lighting.DynamicGraphMinFixedPoint`: `levelCount`, `SOURCE`

### Methods
- `protected int getLevelFromSource(long p_140883_)`
- `protected int getLevel(long p_140885_)`
- `protected void setLevel(long p_140880_,  int p_140881_)`
- `public int runDistanceUpdates(int p_140878_)`

### Inherited methods
- from `net.minecraft.server.level.ChunkTracker`: `checkNeighborsAfterUpdate`, `computeLevelFromNeighbor`, `getComputedLevel`, `isSource`, `update`
- from `net.minecraft.world.level.lighting.DynamicGraphMinFixedPoint`: `checkEdge`, `checkNeighbor`, `checkNode`, `getQueueSize`, `hasWork`, `removeFromQueue`, `removeIf`, `runUpdates`

## DistanceManager.FixedPlayerDistanceChunkTracker

*class* `net.minecraft.server.level.DistanceManager.FixedPlayerDistanceChunkTracker`

Enclosing class: DistanceManager

### Fields
- `protected final it.unimi.dsi.fastutil.longs.Long2ByteMap chunks`
- `protected final int maxDistance`

### Inherited fields
- from `net.minecraft.world.level.lighting.DynamicGraphMinFixedPoint`: `levelCount`, `SOURCE`

### Methods
- `protected int getLevel(long p_140901_)`
- `protected void setLevel(long p_140893_,  int p_140894_)`
- `protected void onLevelChange(long p_140895_,  int p_140896_,  int p_140897_)`
- `protected int getLevelFromSource(long p_140899_)`
- `private boolean havePlayer(long p_140903_)`
- `public void runAllUpdates()`
- `private void dumpChunks(String p_143213_)`

### Inherited methods
- from `net.minecraft.server.level.ChunkTracker`: `checkNeighborsAfterUpdate`, `computeLevelFromNeighbor`, `getComputedLevel`, `isSource`, `update`
- from `net.minecraft.world.level.lighting.DynamicGraphMinFixedPoint`: `checkEdge`, `checkNeighbor`, `checkNode`, `getQueueSize`, `hasWork`, `removeFromQueue`, `removeIf`, `runUpdates`

## DistanceManager.PlayerTicketTracker

*class* `net.minecraft.server.level.DistanceManager.PlayerTicketTracker`

Enclosing class: DistanceManager

### Fields
- `private int viewDistance`
- `private final it.unimi.dsi.fastutil.longs.Long2IntMap queueLevels`
- `private final it.unimi.dsi.fastutil.longs.LongSet toUpdate`

### Inherited fields
- from `net.minecraft.server.level.DistanceManager.FixedPlayerDistanceChunkTracker`: `chunks`, `maxDistance`
- from `net.minecraft.world.level.lighting.DynamicGraphMinFixedPoint`: `levelCount`, `SOURCE`

### Methods
- `protected void onLevelChange(long p_140915_,  int p_140916_,  int p_140917_)`
- `public void updateViewDistance(int p_140913_)`
- `private void onLevelChange(long p_140919_,  int p_140920_,  boolean p_140921_,  boolean p_140922_)`
- `public void runAllUpdates()`
- `private boolean haveTicketFor(int p_140933_)`

### Inherited methods
- from `net.minecraft.server.level.DistanceManager.FixedPlayerDistanceChunkTracker`: `getLevel`, `getLevelFromSource`, `setLevel`
- from `net.minecraft.server.level.ChunkTracker`: `checkNeighborsAfterUpdate`, `computeLevelFromNeighbor`, `getComputedLevel`, `isSource`, `update`
- from `net.minecraft.world.level.lighting.DynamicGraphMinFixedPoint`: `checkEdge`, `checkNeighbor`, `checkNode`, `getQueueSize`, `hasWork`, `removeFromQueue`, `removeIf`, `runUpdates`

## PlayerMap

*class* `net.minecraft.server.level.PlayerMap`

### Fields
- `private final it.unimi.dsi.fastutil.objects.Object2BooleanMap<ServerPlayer> players`

### Methods
- `public Set<ServerPlayer> getAllPlayers()`
- `public void addPlayer(ServerPlayer p_8254_,  boolean p_8255_)`
- `public void removePlayer(ServerPlayer p_8251_)`
- `public void ignorePlayer(ServerPlayer p_8257_)`
- `public void unIgnorePlayer(ServerPlayer p_8259_)`
- `public boolean ignoredOrUnknown(ServerPlayer p_8261_)`
- `public boolean ignored(ServerPlayer p_8263_)`

## PlayerRespawnLogic

*class* `net.minecraft.server.level.PlayerRespawnLogic`

### Methods
- `@Nullable protected static BlockPos getOverworldRespawnPos(ServerLevel p_183929_,  int p_183930_,  int p_183931_)`
- `@Nullable public static BlockPos getSpawnPosInChunk(ServerLevel p_183933_,  ChunkPos p_183934_)`

## SectionTracker

*class* `net.minecraft.server.level.SectionTracker`

### Inherited fields
- from `net.minecraft.world.level.lighting.DynamicGraphMinFixedPoint`: `levelCount`, `SOURCE`

### Methods
- `protected void checkNeighborsAfterUpdate(long p_8280_,  int p_8281_,  boolean p_8282_)`
- `protected int getComputedLevel(long p_8284_,  long p_8285_,  int p_8286_)`
- `protected int computeLevelFromNeighbor(long p_8293_,  long p_8294_,  int p_8295_)`
- `protected abstract int getLevelFromSource(long p_8287_)`
- `public void update(long p_8289_,  int p_8290_,  boolean p_8291_)`

### Inherited methods
- from `net.minecraft.world.level.lighting.DynamicGraphMinFixedPoint`: `checkEdge`, `checkNeighbor`, `checkNode`, `getLevel`, `getQueueSize`, `hasWork`, `isSource`, `removeFromQueue`, `removeIf`, `runUpdates`, `setLevel`

## ServerBossEvent

*class* `net.minecraft.server.level.ServerBossEvent`

### Fields
- `private final Set<ServerPlayer> players`
- `private final Set<ServerPlayer> unmodifiablePlayers`
- `private boolean visible`

### Inherited fields
- from `net.minecraft.world.BossEvent`: `color`, `createWorldFog`, `darkenScreen`, `name`, `overlay`, `playBossMusic`, `progress`

### Methods
- `public void setProgress(float p_143223_)`
- `public void setColor(BossEvent.BossBarColor p_8307_)`
- `public void setOverlay(BossEvent.BossBarOverlay p_8309_)`
- `public BossEvent setDarkenScreen(boolean p_8315_)`
- `public BossEvent setPlayBossMusic(boolean p_8318_)`
- `public BossEvent setCreateWorldFog(boolean p_8320_)`
- `public void setName(Component p_8311_)`
- `private void broadcast(Function<BossEvent,ClientboundBossEventPacket> p_143225_)`
- `public void addPlayer(ServerPlayer p_8305_)`
- `public void removePlayer(ServerPlayer p_8316_)`
- `public void removeAllPlayers()`
- `public boolean isVisible()`
- `public void setVisible(boolean p_8322_)`
- `public Collection<ServerPlayer> getPlayers()`

### Inherited methods
- from `net.minecraft.world.BossEvent`: `getColor`, `getId`, `getName`, `getOverlay`, `getProgress`, `shouldCreateWorldFog`, `shouldDarkenScreen`, `shouldPlayBossMusic`

## ServerChunkCache

*class* `net.minecraft.server.level.ServerChunkCache`

### Fields
- `private static final List<ChunkStatus> CHUNK_STATUSES`
- `private final DistanceManager distanceManager`
- `public final ServerLevel level`
- `final Thread mainThread`
- `final ThreadedLevelLightEngine lightEngine`
- `private final ServerChunkCache.MainThreadExecutor mainThreadProcessor`
- `public final ChunkMap chunkMap`
- `private final DimensionDataStorage dataStorage`
- `private long lastInhabitedUpdate`
- `private boolean spawnEnemies`
- `private boolean spawnFriendlies`
- `private static final int CACHE_SIZE` (= 4)
- `private final long[] lastChunkPos`
- `private final ChunkStatus[] lastChunkStatus`
- `private final ChunkAccess[] lastChunk`
- `@Nullable private NaturalSpawner.SpawnState lastSpawnState`

### Methods
- `public ThreadedLevelLightEngine getLightEngine()`
- `@Nullable private ChunkHolder getVisibleChunkIfPresent(long p_8365_)`
- `public int getTickingGenerated()`
- `private void storeInCache(long p_8367_,  ChunkAccess p_8368_,  ChunkStatus p_8369_)`
- `@Nullable public ChunkAccess getChunk(int p_8360_,  int p_8361_,  ChunkStatus p_8362_,  boolean p_8363_)`
- `@Nullable public LevelChunk getChunkNow(int p_8357_,  int p_8358_)`
- `private void clearCache()`
- `public CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>> getChunkFuture(int p_8432_,  int p_8433_,  ChunkStatus p_8434_,  boolean p_8435_)`
- `private CompletableFuture<com.mojang.datafixers.util.Either<ChunkAccess,ChunkHolder.ChunkLoadingFailure>> getChunkFutureMainThread(int p_8457_,  int p_8458_,  ChunkStatus p_8459_,  boolean p_8460_)`
- `private boolean chunkAbsent(@Nullable  ChunkHolder p_8417_,  int p_8418_)`
- `public boolean hasChunk(int p_8429_,  int p_8430_)`
- `@Nullable public LightChunk getChunkForLighting(int p_8454_,  int p_8455_)`
- `public Level getLevel()`
- `public boolean pollTask()`
- `boolean runDistanceManagerUpdates()`
- `public boolean isPositionTicking(long p_143240_)`
- `public void save(boolean p_8420_)`
- `public void close()  throws IOException`
  - throws: IOException
- `public void tick(BooleanSupplier p_201913_,  boolean p_201914_)`
- `private void tickChunks()`
- `private void getFullChunk(long p_8371_,  Consumer<LevelChunk> p_8372_)`
- `public String gatherStats()`
- `public int getPendingTasksCount()`
- `public ChunkGenerator getGenerator()`
- `public ChunkGeneratorStructureState getGeneratorState()`
- `public RandomState randomState()`
- `public int getLoadedChunksCount()`
- `public void blockChanged(BlockPos p_8451_)`
- `public void onLightUpdate(LightLayer p_8403_,  SectionPos p_8404_)`
- `public <T> void addRegionTicket(TicketType<T> p_8388_,  ChunkPos p_8389_,  int p_8390_,  T p_8391_)`
- `public <T> void addRegionTicket(TicketType<T> p_8388_,  ChunkPos p_8389_,  int p_8390_,  T p_8391_,  boolean forceTicks)`
- `public <T> void removeRegionTicket(TicketType<T> p_8439_,  ChunkPos p_8440_,  int p_8441_,  T p_8442_)`
- `public <T> void removeRegionTicket(TicketType<T> p_8439_,  ChunkPos p_8440_,  int p_8441_,  T p_8442_,  boolean forceTicks)`
- `public void updateChunkForced(ChunkPos p_8400_,  boolean p_8401_)`
- `public void move(ServerPlayer p_8386_)`
- `public void removeEntity(Entity p_8444_)`
- `public void addEntity(Entity p_8464_)`
- `public void broadcastAndSend(Entity p_8395_,  Packet<?> p_8396_)`
- `public void broadcast(Entity p_8446_,  Packet<?> p_8447_)`
- `public void setViewDistance(int p_8355_)`
- `public void setSimulationDistance(int p_184027_)`
- `public void setSpawnSettings(boolean p_8425_,  boolean p_8426_)`
- `public String getChunkDebugData(ChunkPos p_8449_)`
- `public DimensionDataStorage getDataStorage()`
- `public PoiManager getPoiManager()`
- `public ChunkScanAccess chunkScanner()`
- `@Nullable public NaturalSpawner.SpawnState getLastSpawnState()`
- `public void removeTicketsOnClosing()`

### Inherited methods
- from `net.minecraft.world.level.chunk.ChunkSource`: `getChunk`

## ServerChunkCache.ChunkAndHolder

*record* `net.minecraft.server.level.ServerChunkCache.ChunkAndHolder`

Enclosing class: ServerChunkCache

### Fields
- `private final LevelChunk chunk`
  The field for the chunk record component.
- `private final ChunkHolder holder`
  The field for the holder record component.

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
- `public LevelChunk chunk()`
  Returns the value of the chunk record component.
  - returns: the value of the chunk record component
- `public ChunkHolder holder()`
  Returns the value of the holder record component.
  - returns: the value of the holder record component

## ServerChunkCache.MainThreadExecutor

*class* `net.minecraft.server.level.ServerChunkCache.MainThreadExecutor`

Enclosing class: ServerChunkCache

### Methods
- `protected Runnable wrapRunnable(Runnable p_8506_)`
- `protected boolean shouldRun(Runnable p_8504_)`
- `protected boolean scheduleExecutables()`
- `protected Thread getRunningThread()`
- `protected void doRunTask(Runnable p_8502_)`
- `public boolean pollTask()`

### Inherited methods
- from `net.minecraft.util.thread.BlockableEventLoop`: `dropAllTasks`, `execute`, `executeBlocking`, `executeIfPossible`, `getPendingTasksCount`, `isSameThread`, `managedBlock`, `name`, `profiledMetrics`, `runAllTasks`, `submit`, `submit`, `submitAsync`, `tell`, `waitForTasks`
- from `net.minecraft.util.thread.ProcessorHandle`: `ask`, `askEither`, `close`

## ServerEntity

*class* `net.minecraft.server.level.ServerEntity`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int TOLERANCE_LEVEL_ROTATION` (= 1)
- `private static final double TOLERANCE_LEVEL_POSITION` (= 7.62939453125E-6)
- `public static final int FORCED_POS_UPDATE_PERIOD` (= 60)
- `private static final int FORCED_TELEPORT_PERIOD` (= 400)
- `private final ServerLevel level`
- `private final Entity entity`
- `private final int updateInterval`
- `private final boolean trackDelta`
- `private final Consumer<Packet<?>> broadcast`
- `private final VecDeltaCodec positionCodec`
- `private int yRotp`
- `private int xRotp`
- `private int yHeadRotp`
- `private Vec3 ap`
- `private int tickCount`
- `private int teleportDelay`
- `private List<Entity> lastPassengers`
- `private boolean wasRiding`
- `private boolean wasOnGround`
- `@Nullable private List<SynchedEntityData.DataValue<?>> trackedDataValues`

### Methods
- `public void sendChanges()`
- `private static Stream<Entity> removedPassengers(List<Entity> p_277592_,  List<Entity> p_277658_)`
- `public void removePairing(ServerPlayer p_8535_)`
- `public void addPairing(ServerPlayer p_8542_)`
- `public void sendPairingData(ServerPlayer p_289562_,  Consumer<Packet<ClientGamePacketListener>> p_289563_)`
- `private void sendDirtyEntityData()`
- `private void broadcastAndSend(Packet<?> p_8539_)`

## ServerLevel

*class* `net.minecraft.server.level.ServerLevel`

### Fields
- `public static final BlockPos END_SPAWN_POINT`
- `public static final IntProvider RAIN_DELAY`
- `public static final IntProvider RAIN_DURATION`
- `private static final IntProvider THUNDER_DELAY`
- `public static final IntProvider THUNDER_DURATION`
- `private static final org.slf4j.Logger LOGGER`
- `private static final int EMPTY_TIME_NO_TICK` (= 300)
- `private static final int MAX_SCHEDULED_TICKS_PER_TICK` (= 65536)
- `final List<ServerPlayer> players`
- `private final ServerChunkCache chunkSource`
- `private final MinecraftServer server`
- `private final ServerLevelData serverLevelData`
- `final EntityTickList entityTickList`
- `private final PersistentEntitySectionManager<Entity> entityManager`
- `private final GameEventDispatcher gameEventDispatcher`
- `public boolean noSave`
- `private final SleepStatus sleepStatus`
- `private int emptyTime`
- `private final PortalForcer portalForcer`
- `private final LevelTicks<Block> blockTicks`
- `private final LevelTicks<Fluid> fluidTicks`
- `final Set<Mob> navigatingMobs`
- `volatile boolean isUpdatingNavigations`
- `protected final Raids raids`
- `private final it.unimi.dsi.fastutil.objects.ObjectLinkedOpenHashSet<BlockEventData> blockEvents`
- `private final List<BlockEventData> blockEventsToReschedule`
- `private boolean handlingTick`
- `private final List<CustomSpawner> customSpawners`
- `@Nullable private EndDragonFight dragonFight`
- `final it.unimi.dsi.fastutil.ints.Int2ObjectMap<PartEntity<?>> dragonParts`
- `private final StructureManager structureManager`
- `private final StructureCheck structureCheck`
- `private final boolean tickTime`
- `private final RandomSequences randomSequences`
- `private LevelCapabilityData capabilityData`

### Inherited fields
- from `net.minecraft.world.level.Level`: `addend`, `blockEntityTickers`, `captureBlockSnapshots`, `capturedBlockSnapshots`, `END`, `isClientSide`, `levelData`, `LONG_PARTICLE_CLIP_RANGE`, `MAX_BRIGHTNESS`, `MAX_ENTITY_SPAWN_Y`, `MAX_LEVEL_SIZE`, `MIN_ENTITY_SPAWN_Y`, `neighborUpdater`, `NETHER`, `oRainLevel`, `oThunderLevel`, `OVERWORLD`, `rainLevel`, `random`, `randValue`, `RESOURCE_KEY_CODEC`, `restoringBlockSnapshots`, `SHORT_PARTICLE_CLIP_RANGE`, `thunderLevel`, `TICKS_PER_DAY`
- from `net.minecraft.world.level.SignalGetter`: `DIRECTIONS`

### Methods
- `@Deprecated public void setDragonFight(@Nullable  EndDragonFight p_287779_)` (deprecated)
- `public void setWeatherParameters(int p_8607_,  int p_8608_,  boolean p_8609_,  boolean p_8610_)`
- `public Holder<Biome> getUncachedNoiseBiome(int p_203775_,  int p_203776_,  int p_203777_)`
- `public StructureManager structureManager()`
- `public void tick(BooleanSupplier p_8794_)`
- `public boolean shouldTickBlocksAt(long p_184059_)`
- `protected void tickTime()`
- `public void setDayTime(long p_8616_)`
- `public void tickCustomSpawners(boolean p_8800_,  boolean p_8801_)`
- `private boolean shouldDiscardEntity(Entity p_143343_)`
- `private void wakeUpAllPlayers()`
- `public void tickChunk(LevelChunk p_8715_,  int p_8716_)`
- `private void tickIceAndSnow(boolean p_298297_,  BlockPos p_300602_)`
- `private Optional<BlockPos> findLightningRod(BlockPos p_143249_)`
- `protected BlockPos findLightningTargetAround(BlockPos p_143289_)`
- `public boolean isHandlingTick()`
- `public boolean canSleepThroughNights()`
- `private void announceSleepStatus()`
- `public void updateSleepingPlayerList()`
- `public ServerScoreboard getScoreboard()`
- `private void advanceWeatherCycle()`
- `private void resetWeatherCycle()`
- `public void resetEmptyTime()`
- `private void tickFluid(BlockPos p_184077_,  Fluid p_184078_)`
- `private void tickBlock(BlockPos p_184113_,  Block p_184114_)`
- `public void tickNonPassenger(Entity p_8648_)`
- `private void tickPassenger(Entity p_8663_,  Entity p_8664_)`
- `public boolean mayInteract(Player p_8696_,  BlockPos p_8697_)`
- `public void save(@Nullable  ProgressListener p_8644_,  boolean p_8645_,  boolean p_8646_)`
- `private void saveLevelData()`
- `public <T extends Entity> List<? extends T> getEntities(EntityTypeTest<Entity,T> p_143281_,  Predicate<? super T> p_143282_)`
- `public <T extends Entity> void getEntities(EntityTypeTest<Entity,T> p_262152_,  Predicate<? super T> p_261808_,  List<? super T> p_261583_)`
- `public <T extends Entity> void getEntities(EntityTypeTest<Entity,T> p_261842_,  Predicate<? super T> p_262091_,  List<? super T> p_261703_,  int p_261907_)`
- `public List<? extends EnderDragon> getDragons()`
- `public List<ServerPlayer> getPlayers(Predicate<? super ServerPlayer> p_8796_)`
- `public List<ServerPlayer> getPlayers(Predicate<? super ServerPlayer> p_261698_,  int p_262035_)`
- `@Nullable public ServerPlayer getRandomPlayer()`
- `public boolean addFreshEntity(Entity p_8837_)`
- `public boolean addWithUUID(Entity p_8848_)`
- `public void addDuringTeleport(Entity p_143335_)`
- `public void addDuringCommandTeleport(ServerPlayer p_8623_)`
- `public void addDuringPortalTeleport(ServerPlayer p_8818_)`
- `public void addNewPlayer(ServerPlayer p_8835_)`
- `public void addRespawnedPlayer(ServerPlayer p_8846_)`
- `private void addPlayer(ServerPlayer p_8854_)`
- `private boolean addEntity(Entity p_8873_)`
- `public boolean tryAddFreshEntityWithPassengers(Entity p_8861_)`
- `public void unload(LevelChunk p_8713_)`
- `public void removePlayerImmediately(ServerPlayer p_143262_,  Entity.RemovalReason p_143263_)`
- `public void destroyBlockProgress(int p_8612_,  BlockPos p_8613_,  int p_8614_)`
- `public void playSeededSound(@Nullable  Player p_263330_,  double p_263393_,  double p_263369_,  double p_263354_,  Holder<SoundEvent> p_263412_,  SoundSource p_263338_,  float p_263352_,  float p_263390_,  long p_263403_)`
- `public void playSeededSound(@Nullable  Player p_263545_,  Entity p_263544_,  Holder<SoundEvent> p_263491_,  SoundSource p_263542_,  float p_263530_,  float p_263520_,  long p_263490_)`
- `public void globalLevelEvent(int p_8811_,  BlockPos p_8812_,  int p_8813_)`
- `public void levelEvent(@Nullable  Player p_8684_,  int p_8685_,  BlockPos p_8686_,  int p_8687_)`
- `public int getLogicalHeight()`
- `public void gameEvent(GameEvent p_215041_,  Vec3 p_215042_,  GameEvent.Context p_215043_)`
- `public void sendBlockUpdated(BlockPos p_8755_,  BlockState p_8756_,  BlockState p_8757_,  int p_8758_)`
- `public void updateNeighborsAt(BlockPos p_215045_,  Block p_215046_)`
- `public void updateNeighborsAtExceptFromFacing(BlockPos p_215052_,  Block p_215053_,  Direction p_215054_)`
- `public void neighborChanged(BlockPos p_215048_,  Block p_215049_,  BlockPos p_215050_)`
- `public void neighborChanged(BlockState p_215035_,  BlockPos p_215036_,  Block p_215037_,  BlockPos p_215038_,  boolean p_215039_)`
- `public void broadcastEntityEvent(Entity p_8650_,  byte p_8651_)`
- `public void broadcastDamageEvent(Entity p_270420_,  DamageSource p_270311_)`
- `public ServerChunkCache getChunkSource()`
- `public Explosion explode(@Nullable  Entity p_256039_,  @Nullable  DamageSource p_255778_,  @Nullable  ExplosionDamageCalculator p_256002_,  double p_256067_,  double p_256370_,  double p_256153_,  float p_256045_,  boolean p_255686_,  Level.ExplosionInteraction p_255827_)`
- `public void blockEvent(BlockPos p_8746_,  Block p_8747_,  int p_8748_,  int p_8749_)`
- `private void runBlockEvents()`
- `private boolean doBlockEvent(BlockEventData p_8699_)`
- `public LevelTicks<Block> getBlockTicks()`
- `public LevelTicks<Fluid> getFluidTicks()`
- `@Nonnull public MinecraftServer getServer()`
- `public PortalForcer getPortalForcer()`
- `public StructureTemplateManager getStructureManager()`
- `public <T extends ParticleOptions> int sendParticles(T p_8768_,  double p_8769_,  double p_8770_,  double p_8771_,  int p_8772_,  double p_8773_,  double p_8774_,  double p_8775_,  double p_8776_)`
- `public <T extends ParticleOptions> boolean sendParticles(ServerPlayer p_8625_,  T p_8626_,  boolean p_8627_,  double p_8628_,  double p_8629_,  double p_8630_,  int p_8631_,  double p_8632_,  double p_8633_,  double p_8634_,  double p_8635_)`
- `private boolean sendParticles(ServerPlayer p_8637_,  boolean p_8638_,  double p_8639_,  double p_8640_,  double p_8641_,  Packet<?> p_8642_)`
- `@Nullable public Entity getEntity(int p_8597_)`
- `@Deprecated @Nullable public Entity getEntityOrPart(int p_143318_)` (deprecated)
- `@Nullable public Entity getEntity(UUID p_8792_)`
- `@Nullable public BlockPos findNearestMapStructure(TagKey<Structure> p_215012_,  BlockPos p_215013_,  int p_215014_,  boolean p_215015_)`
- `@Nullable public com.mojang.datafixers.util.Pair<BlockPos,Holder<Biome>> findClosestBiome3d(Predicate<Holder<Biome>> p_215070_,  BlockPos p_215071_,  int p_215072_,  int p_215073_,  int p_215074_)`
- `public RecipeManager getRecipeManager()`
- `public boolean noSave()`
- `public DimensionDataStorage getDataStorage()`
- `@Nullable public MapItemSavedData getMapData(String p_8785_)`
- `public void setMapData(String p_143305_,  MapItemSavedData p_143306_)`
- `public int getFreeMapId()`
- `public void setDefaultSpawnPos(BlockPos p_8734_,  float p_8735_)`
- `public it.unimi.dsi.fastutil.longs.LongSet getForcedChunks()`
- `public boolean setChunkForced(int p_8603_,  int p_8604_,  boolean p_8605_)`
- `public List<ServerPlayer> players()`
- `public void onBlockStateChange(BlockPos p_8751_,  BlockState p_8752_,  BlockState p_8753_)`
- `public PoiManager getPoiManager()`
- `public boolean isVillage(BlockPos p_8803_)`
- `public boolean isVillage(SectionPos p_8763_)`
- `public boolean isCloseToVillage(BlockPos p_8737_,  int p_8738_)`
- `public int sectionsToVillage(SectionPos p_8829_)`
- `public Raids getRaids()`
- `@Nullable public Raid getRaidAt(BlockPos p_8833_)`
- `public boolean isRaided(BlockPos p_8844_)`
- `public void onReputationEvent(ReputationEventType p_8671_,  Entity p_8672_,  ReputationEventHandler p_8673_)`
- `public void saveDebugReport(Path p_8787_)  throws IOException`
  - throws: IOException
- `private static void dumpEntities(Writer p_8782_,  Iterable<Entity> p_8783_)  throws IOException`
  - throws: IOException
- `private void dumpBlockEntityTickers(Writer p_143300_)  throws IOException`
  - throws: IOException
- `public void clearBlockEvents(BoundingBox p_8723_)`
- `public void blockUpdated(BlockPos p_8743_,  Block p_8744_)`
- `public float getShade(Direction p_8760_,  boolean p_8761_)`
- `public Iterable<Entity> getAllEntities()`
- `public String toString()`
- `public boolean isFlat()`
- `public long getSeed()`
- `@Nullable public EndDragonFight getDragonFight()`
- `public ServerLevel getLevel()`
- `public String getWatchdogStats()`
- `private static <T> String getTypeCount(Iterable<T> p_143302_,  Function<T,String> p_143303_)`
- `public static void makeObsidianPlatform(ServerLevel p_8618_)`
- `protected void initCapabilities()`
- `public LevelEntityGetter<Entity> getEntities()`
- `public void addLegacyChunkEntities(Stream<Entity> p_143312_)`
- `public void addWorldGenChunkEntities(Stream<Entity> p_143328_)`
- `public void startTickingChunk(LevelChunk p_184103_)`
- `public void onStructureStartsAvailable(ChunkAccess p_196558_)`
- `public void close()  throws IOException`
  - throws: IOException
- `public String gatherChunkSourceStats()`
- `public boolean areEntitiesLoaded(long p_143320_)`
- `private boolean isPositionTickingWithEntitiesLoaded(long p_184111_)`
- `public boolean isPositionEntityTicking(BlockPos p_143341_)`
- `public boolean isNaturalSpawningAllowed(BlockPos p_201919_)`
- `public boolean isNaturalSpawningAllowed(ChunkPos p_201917_)`
- `public FeatureFlagSet enabledFeatures()`
- `public RandomSource getRandomSequence(ResourceLocation p_287689_)`
- `public RandomSequences getRandomSequences()`
- `public Collection<PartEntity<?>> getPartEntities()`
  Description copied from interface: IForgeLevel
  All part entities in this world. Used when collecting entities in an AABB to fix parts being
   ignored whose parent entity is in a chunk that does not intersect with the AABB.

### Inherited methods
- from `net.minecraft.world.level.Level`: `addAlwaysVisibleParticle`, `addAlwaysVisibleParticle`, `addBlockEntityTicker`, `addDestroyBlockEffect`, `addFreshBlockEntities`, `addParticle`, `addParticle`, `blockEntityChanged`, `createFireworks`, `damageSources`, `destroyBlock`, `dimension`, `dimensionType`, `dimensionTypeId`, `dimensionTypeRegistration`, `disconnect`, `explode`, `explode`, `explode`, `explode`, `fillReportDetails`, `getBiomeManager`, `getBlockEntity`, `getBlockRandomPos`, `getBlockState`, `getChunk`, `getChunk`, `getChunkAt`, `getChunkForCollisions`, `getCurrentDifficultyAt`, `getDayTime`, `getEntities`, `getEntities`, `getEntities`, `getEntities`, `getFluidState`, `getGameRules`, `getGameTime`, `getHeight`, `getLevelData`, `getLightEngine`, `getMaxEntityRadius`, `getProfiler`, `getProfilerSupplier`, `getRainLevel`, `getRandom`, `getSeaLevel`, `getSharedSpawnAngle`, `getSharedSpawnPos`, `getSkyDarken`, `getSunAngle`, `getThunderLevel`, `getWorldBorder`, `guardEntityTick`, `increaseMaxEntityRadius`, `isClientSide`, `isDay`, `isDebug`, `isFluidAtPosition`, `isInSpawnableBounds`, `isInWorldBounds`, `isLoaded`, `isNight`, `isRaining`, `isRainingAt`, `isStateAtPosition`, `isThundering`, `loadedAndEntityCanStandOn`, `loadedAndEntityCanStandOnFace`, `markAndNotifyBlock`, `neighborShapeChanged`, `nextSubTickCount`, `playLocalSound`, `playLocalSound`, `playSeededSound`, `playSound`, `playSound`, `playSound`, `playSound`, `prepareWeather`, `registryAccess`, `removeBlock`, `removeBlockEntity`, `sendPacketToServer`, `setBlock`, `setBlock`, `setBlockAndUpdate`, `setBlockEntity`, `setBlocksDirty`, `setRainLevel`, `setSkyFlashTime`, `setSpawnSettings`, `setThunderLevel`, `shouldTickBlocksAt`, `shouldTickDeath`, `tickBlockEntities`, `updateNeighbourForOutputSignal`, `updateSkyBrightness`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.world.level.BlockAndTintGetter`: `canSeeSky`, `getBrightness`, `getLightEngine`, `getRawBrightness`
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockEntity`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockState`, `getBlockStates`, `getFluidState`, `getLightEmission`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraft.world.level.CollisionGetter`: `collidesWithSuffocatingBlock`, `findFreePosition`, `findSupportingBlock`, `getBlockCollisions`, `getCollisions`, `getEntityCollisions`, `getWorldBorder`, `isUnobstructed`, `isUnobstructed`, `isUnobstructed`, `noBlockCollision`, `noCollision`, `noCollision`, `noCollision`
- from `net.minecraft.world.level.CommonLevelAccessor`: `getBlockEntity`, `getEntityCollisions`, `getHeightmapPos`, `isUnobstructed`
- from `net.minecraft.world.level.EntityGetter`: `getEntities`, `getEntities`, `getEntities`, `getEntitiesOfClass`, `getEntitiesOfClass`, `getNearbyEntities`, `getNearbyPlayers`, `getNearestEntity`, `getNearestEntity`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getPlayerByUUID`, `hasNearbyAlivePlayer`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.client.extensions.IForgeBlockAndTintGetter`: `getShade`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraft.world.level.LevelAccessor`: `addParticle`, `dayTime`, `gameEvent`, `gameEvent`, `gameEvent`, `getCurrentDifficultyAt`, `getDifficulty`, `getLevelData`, `getRandom`, `hasChunk`, `levelEvent`, `neighborShapeChanged`, `nextSubTickCount`, `playSound`, `playSound`, `scheduleTick`, `scheduleTick`, `scheduleTick`, `scheduleTick`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getMaxBuildHeight`, `getMaxSection`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`
- from `net.minecraft.world.level.LevelReader`: `canSeeSkyFromBelowWater`, `containsAnyLiquid`, `dimensionType`, `getBiome`, `getBiomeManager`, `getBlockStatesIfLoaded`, `getBlockTint`, `getChunk`, `getChunk`, `getChunk`, `getChunk`, `getChunkForCollisions`, `getHeight`, `getHeight`, `getLightLevelDependentMagicValue`, `getMaxLocalRawBrightness`, `getMaxLocalRawBrightness`, `getMinBuildHeight`, `getNoiseBiome`, `getPathfindingCostFromLightLevels`, `getSeaLevel`, `getSkyDarken`, `hasChunkAt`, `hasChunkAt`, `hasChunksAt`, `hasChunksAt`, `hasChunksAt`, `holderLookup`, `isAreaLoaded`, `isClientSide`, `isEmptyBlock`, `isWaterAt`, `registryAccess`
- from `net.minecraft.world.level.LevelSimulatedReader`: `isFluidAtPosition`, `isStateAtPosition`
- from `net.minecraft.world.level.LevelTimeAccess`: `getMoonBrightness`, `getMoonPhase`, `getTimeOfDay`
- from `net.minecraft.world.level.LevelWriter`: `destroyBlock`, `destroyBlock`, `destroyBlock`, `removeBlock`, `setBlock`, `setBlock`
- from `net.minecraft.world.level.ServerLevelAccessor`: `addFreshEntityWithPassengers`
- from `net.minecraft.world.level.SignalGetter`: `getBestNeighborSignal`, `getControlInputSignal`, `getDirectSignal`, `getDirectSignalTo`, `getSignal`, `hasNeighborSignal`, `hasSignal`
- from `net.minecraft.world.level.WorldGenLevel`: `ensureCanWrite`, `setCurrentlyGenerating`

## ServerLevel.EntityCallbacks

*class* `net.minecraft.server.level.ServerLevel.EntityCallbacks`

Enclosing class: ServerLevel

### Methods
- `public void onCreated(Entity p_143355_)`
- `public void onDestroyed(Entity p_143359_)`
- `public void onTickingStart(Entity p_143363_)`
- `public void onTickingEnd(Entity p_143367_)`
- `public void onTrackingStart(Entity p_143371_)`
- `public void onTrackingEnd(Entity p_143375_)`
- `public void onSectionChange(Entity p_215086_)`

## ServerPlayer

*class* `net.minecraft.server.level.ServerPlayer`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int NEUTRAL_MOB_DEATH_NOTIFICATION_RADII_XZ` (= 32)
- `private static final int NEUTRAL_MOB_DEATH_NOTIFICATION_RADII_Y` (= 10)
- `public ServerGamePacketListenerImpl connection`
- `public final MinecraftServer server`
- `public final ServerPlayerGameMode gameMode`
- `private final PlayerAdvancements advancements`
- `private final ServerStatsCounter stats`
- `private float lastRecordedHealthAndAbsorption`
- `private int lastRecordedFoodLevel`
- `private int lastRecordedAirLevel`
- `private int lastRecordedArmor`
- `private int lastRecordedLevel`
- `private int lastRecordedExperience`
- `private float lastSentHealth`
- `private int lastSentFood`
- `private boolean lastFoodSaturationZero`
- `private int lastSentExp`
- `private int spawnInvulnerableTime`
- `private ChatVisiblity chatVisibility`
- `private boolean canChatColor`
- `private long lastActionTime`
- `@Nullable private Entity camera`
- `private boolean isChangingDimension`
- `private boolean seenCredits`
- `private final ServerRecipeBook recipeBook`
- `@Nullable private Vec3 levitationStartPos`
- `private int levitationStartTime`
- `private boolean disconnected`
- `private int requestedViewDistance`
- `private String language`
- `@Nullable private Vec3 startingToFallPosition`
- `@Nullable private Vec3 enteredNetherPosition`
- `@Nullable private Vec3 enteredLavaOnVehiclePosition`
- `private SectionPos lastSectionPos`
- `private ChunkTrackingView chunkTrackingView`
- `private ResourceKey<Level> respawnDimension`
- `@Nullable private BlockPos respawnPosition`
- `private boolean respawnForced`
- `private float respawnAngle`
- `private final TextFilter textFilter`
- `private boolean textFilteringEnabled`
- `private boolean allowsListing`
- `private WardenSpawnTracker wardenSpawnTracker`
- `private final ContainerSynchronizer containerSynchronizer`
- `private final ContainerListener containerListener`
- `@Nullable private RemoteChatSession chatSession`
- `public int containerCounter`
- `public boolean wonGame`
- `private Component tabListHeader`
- `private Component tabListFooter`
- `private boolean hasTabListName`
- `private Component tabListDisplayName`

### Inherited fields
- from `net.minecraft.world.entity.player.Player`: `bob`, `containerMenu`, `CROUCH_BB_HEIGHT`, `DATA_PLAYER_MAIN_HAND`, `DATA_PLAYER_MODE_CUSTOMISATION`, `DATA_SHOULDER_LEFT`, `DATA_SHOULDER_RIGHT`, `DEFAULT_EYE_HEIGHT`, `DEFAULT_MAIN_HAND`, `DEFAULT_MODEL_CUSTOMIZATION`, `defaultFlySpeed`, `enchantmentSeed`, `ENDER_SLOT_OFFSET`, `enderChestInventory`, `experienceLevel`, `experienceProgress`, `fishing`, `foodData`, `hurtDir`, `inventoryMenu`, `jumpTriggerTime`, `MAX_HEALTH`, `MAX_NAME_LENGTH`, `oBob`, `PERSISTED_NBT_TAG`, `SLEEP_DURATION`, `STANDING_DIMENSIONS`, `SWIMMING_BB_HEIGHT`, `SWIMMING_BB_WIDTH`, `takeXpDelay`, `totalExperience`, `WAKE_UP_DURATION`, `wasUnderwater`, `xCloak`, `xCloakO`, `yCloak`, `yCloakO`, `zCloak`, `zCloakO`
- from `net.minecraft.world.entity.LivingEntity`: `animStep`, `animStepO`, `ARMOR_SLOT_OFFSET`, `ARMOR_SLOTS`, `attackAnim`, `attackStrengthTicker`, `autoSpinAttackTicks`, `brain`, `DATA_LIVING_ENTITY_FLAGS`, `dead`, `DEATH_DURATION`, `deathScore`, `deathTime`, `DEFAULT_BASE_GRAVITY`, `EQUIPMENT_SLOT_OFFSET`, `EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT`, `fallFlyTicks`, `HAND_SLOTS`, `hurtDuration`, `hurtTime`, `invulnerableDuration`, `jumping`, `lastHurt`, `lastHurtByPlayer`, `lastHurtByPlayerTime`, `lerpHeadSteps`, `lerpSteps`, `lerpX`, `lerpXRot`, `lerpY`, `lerpYHeadRot`, `lerpYRot`, `lerpZ`, `LIVING_ENTITY_FLAG_IS_USING`, `LIVING_ENTITY_FLAG_OFF_HAND`, `LIVING_ENTITY_FLAG_SPIN_ATTACK`, `MIN_MOVEMENT_DISTANCE`, `noActionTime`, `oAttackAnim`, `oRun`, `PLAYER_HURT_EXPERIENCE_TIME`, `removeArrowTime`, `removeStingerTime`, `rotA`, `rotOffs`, `run`, `SLEEPING_DIMENSIONS`, `SWING_DURATION`, `swinging`, `swingingArm`, `swingTime`, `timeOffs`, `USE_ITEM_INTERVAL`, `useItem`, `useItemRemaining`, `walkAnimation`, `xxa`, `yBodyRot`, `yBodyRotO`, `yHeadRot`, `yHeadRotO`, `yya`, `zza`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `private void fudgeSpawnLocation(ServerLevel p_9202_)`
- `private int getCoprime(int p_9238_)`
- `public void readAdditionalSaveData(CompoundTag p_9131_)`
- `public void addAdditionalSaveData(CompoundTag p_9197_)`
- `public void setExperiencePoints(int p_8986_)`
- `public void setExperienceLevels(int p_9175_)`
- `public void giveExperienceLevels(int p_9200_)`
- `public void onEnchantmentPerformed(ItemStack p_9079_,  int p_9080_)`
- `public void initMenu(AbstractContainerMenu p_143400_)`
- `public void initInventoryMenu()`
- `public void onEnterCombat()`
- `public void onLeaveCombat()`
- `protected void onInsideBlock(BlockState p_9103_)`
- `protected ItemCooldowns createItemCooldowns()`
- `public void tick()`
- `public void doTick()`
- `public void resetFallDistance()`
- `public void trackStartFallingPosition()`
- `public void trackEnteredOrExitedLavaOnVehicle()`
- `private void updateScoreForCriteria(ObjectiveCriteria p_9105_,  int p_9106_)`
- `public void die(DamageSource p_9035_)`
- `private void tellNeutralMobsThatIDied()`
- `public void awardKillScore(Entity p_9050_,  int p_9051_,  DamageSource p_9052_)`
- `private void handleTeamKill(String p_9125_,  String p_9126_,  ObjectiveCriteria[] p_9127_)`
- `public boolean hurt(DamageSource p_9037_,  float p_9038_)`
- `public boolean canHarmPlayer(Player p_9064_)`
- `private boolean isPvpAllowed()`
- `@Nullable protected PortalInfo findDimensionEntryPoint(ServerLevel p_8998_)`
- `@Nullable public Entity changeDimension(ServerLevel p_9180_,  ITeleporter teleporter)`
- `private void createEndPlatform(ServerLevel p_9007_,  BlockPos p_9008_)`
- `protected Optional<BlockUtil.FoundRectangle> getExitPortal(ServerLevel p_184131_,  BlockPos p_184132_,  boolean p_184133_,  WorldBorder p_184134_)`
- `private void triggerDimensionChangeTriggers(ServerLevel p_9210_)`
- `public boolean broadcastToPlayer(ServerPlayer p_9014_)`
- `public void take(Entity p_9047_,  int p_9048_)`
- `public com.mojang.datafixers.util.Either<Player.BedSleepingProblem,Unit> startSleepInBed(BlockPos p_9115_)`
- `public void startSleeping(BlockPos p_9190_)`
- `private boolean bedInRange(BlockPos p_9117_,  Direction p_9118_)`
- `private boolean isReachableBedBlock(BlockPos p_9223_)`
- `private boolean bedBlocked(BlockPos p_9192_,  Direction p_9193_)`
- `public void stopSleepInBed(boolean p_9165_,  boolean p_9166_)`
- `public void dismountTo(double p_143389_,  double p_143390_,  double p_143391_)`
- `public boolean isInvulnerableTo(DamageSource p_9182_)`
- `protected void checkFallDamage(double p_8976_,  boolean p_8977_,  BlockState p_8978_,  BlockPos p_8979_)`
- `protected void onChangedBlock(BlockPos p_9206_)`
- `public void doCheckFallDamage(double p_289676_,  double p_289671_,  double p_289665_,  boolean p_289696_)`
- `public void openTextEdit(SignBlockEntity p_277909_,  boolean p_277495_)`
- `public void nextContainerCounter()`
- `public OptionalInt openMenu(@Nullable  MenuProvider p_9033_)`
- `public void sendMerchantOffers(int p_8988_,  MerchantOffers p_8989_,  int p_8990_,  int p_8991_,  boolean p_8992_,  boolean p_8993_)`
- `public void openHorseInventory(AbstractHorse p_9059_,  Container p_9060_)`
- `public void openItemGui(ItemStack p_9082_,  InteractionHand p_9083_)`
- `public void openCommandBlock(CommandBlockEntity p_9099_)`
- `public void closeContainer()`
- `public void doCloseContainer()`
- `public void setPlayerInput(float p_8981_,  float p_8982_,  boolean p_8983_,  boolean p_8984_)`
- `public void awardStat(Stat<?> p_9026_,  int p_9027_)`
- `public void resetStat(Stat<?> p_9024_)`
- `public int awardRecipes(Collection<RecipeHolder<?>> p_9129_)`
- `public void triggerRecipeCrafted(RecipeHolder<?> p_299743_,  List<ItemStack> p_282336_)`
- `public void awardRecipesByKey(ResourceLocation[] p_9168_)`
- `public int resetRecipes(Collection<RecipeHolder<?>> p_9195_)`
- `public void giveExperiencePoints(int p_9208_)`
- `public void disconnect()`
- `public boolean hasDisconnected()`
- `public void resetSentInfo()`
- `public void displayClientMessage(Component p_9154_,  boolean p_9155_)`
- `protected void completeUsingItem()`
- `public void lookAt(EntityAnchorArgument.Anchor p_9112_,  Vec3 p_9113_)`
- `public void lookAt(EntityAnchorArgument.Anchor p_9108_,  Entity p_9109_,  EntityAnchorArgument.Anchor p_9110_)`
- `public void restoreFrom(ServerPlayer p_9016_,  boolean p_9017_)`
- `protected void onEffectAdded(MobEffectInstance p_143393_,  @Nullable  Entity p_143394_)`
- `protected void onEffectUpdated(MobEffectInstance p_143396_,  boolean p_143397_,  @Nullable  Entity p_143398_)`
- `protected void onEffectRemoved(MobEffectInstance p_9184_)`
- `public void teleportTo(double p_8969_,  double p_8970_,  double p_8971_)`
- `public void teleportRelative(double p_251611_,  double p_248861_,  double p_252266_)`
- `public boolean teleportTo(ServerLevel p_265564_,  double p_265424_,  double p_265680_,  double p_265312_,  Set<RelativeMovement> p_265192_,  float p_265059_,  float p_265266_)`
- `public void moveTo(double p_9171_,  double p_9172_,  double p_9173_)`
- `public void crit(Entity p_9045_)`
- `public void magicCrit(Entity p_9186_)`
- `public void onUpdateAbilities()`
- `public ServerLevel serverLevel()`
- `public boolean setGameMode(GameType p_143404_)`
- `public boolean isSpectator()`
- `public boolean isCreative()`
- `public void sendSystemMessage(Component p_215097_)`
- `public void sendSystemMessage(Component p_240560_,  boolean p_240545_)`
- `public void sendChatMessage(OutgoingChatMessage p_249852_,  boolean p_250110_,  ChatType.Bound p_252108_)`
- `public String getIpAddress()`
- `public void updateOptions(ClientInformation p_297843_)`
- `public ClientInformation clientInformation()`
- `public boolean canChatInColor()`
- `public ChatVisiblity getChatVisibility()`
- `private boolean acceptsSystemMessages(boolean p_240568_)`
- `private boolean acceptsChatMessages()`
- `public int requestedViewDistance()`
- `public void sendServerStatus(ServerStatus p_215110_)`
- `protected int getPermissionLevel()`
- `public void resetLastActionTime()`
- `public ServerStatsCounter getStats()`
- `public ServerRecipeBook getRecipeBook()`
- `protected void updateInvisibilityStatus()`
- `public Entity getCamera()`
- `public void setCamera(@Nullable  Entity p_9214_)`
- `protected void processPortalCooldown()`
- `public void attack(Entity p_9220_)`
- `public long getLastActionTime()`
- `@Nullable public Component getTabListDisplayName()`
- `public void swing(InteractionHand p_9031_)`
- `public boolean isChangingDimension()`
- `public void hasChangedDimension()`
- `public PlayerAdvancements getAdvancements()`
- `public void teleportTo(ServerLevel p_9000_,  double p_9001_,  double p_9002_,  double p_9003_,  float p_9004_,  float p_9005_)`
- `@Nullable public BlockPos getRespawnPosition()`
- `public float getRespawnAngle()`
- `public ResourceKey<Level> getRespawnDimension()`
- `public boolean isRespawnForced()`
- `public void setRespawnPosition(ResourceKey<Level> p_9159_,  @Nullable  BlockPos p_9160_,  float p_9161_,  boolean p_9162_,  boolean p_9163_)`
- `public SectionPos getLastSectionPos()`
- `public void setLastSectionPos(SectionPos p_9120_)`
- `public ChunkTrackingView getChunkTrackingView()`
- `public void setChunkTrackingView(ChunkTrackingView p_300205_)`
- `public void playNotifySound(SoundEvent p_9019_,  SoundSource p_9020_,  float p_9021_,  float p_9022_)`
- `public ItemEntity drop(ItemStack p_9085_,  boolean p_9086_,  boolean p_9087_)`
- `public String getLanguage()`
  Returns the language last reported by the player as their local language.
   Defaults to en_us if the value is unknown.
- `public Component getTabListHeader()`
- `public void setTabListHeader(Component header)`
  Set the tab list header while preserving the footer.
  - param: header - the new header, or Component.empty() to clear
- `public Component getTabListFooter()`
- `public void setTabListFooter(Component footer)`
  Set the tab list footer while preserving the header.
  - param: footer - the new footer, or Component.empty() to clear
- `public void setTabListHeaderFooter(Component header,  Component footer)`
  Set the tab list header and footer at once.
  - param: header - the new header, or Component.empty() to clear
  - param: footer - the new footer, or Component.empty() to clear
- `public void refreshTabListName()`
  Force the name displayed in the tab list to refresh, by firing PlayerEvent.TabListNameFormat.
- `public TextFilter getTextFilter()`
- `public void setServerLevel(ServerLevel p_284971_)`
- `@Nullable private static GameType readPlayerMode(@Nullable  CompoundTag p_143414_,  String p_143415_)`
- `private GameType calculateGameModeForNewPlayer(@Nullable  GameType p_143424_)`
- `public void loadGameTypes(@Nullable  CompoundTag p_143428_)`
- `private void storeGameTypes(CompoundTag p_143431_)`
- `public boolean isTextFilteringEnabled()`
- `public boolean shouldFilterMessageTo(ServerPlayer p_143422_)`
- `public boolean mayInteract(Level p_143406_,  BlockPos p_143407_)`
- `protected void updateUsingItem(ItemStack p_143402_)`
- `public boolean drop(boolean p_182295_)`
- `public boolean allowsListing()`
- `public Optional<WardenSpawnTracker> getWardenSpawnTracker()`
- `public void onItemPickup(ItemEntity p_215095_)`
- `public void setChatSession(RemoteChatSession p_254468_)`
- `@Nullable public RemoteChatSession getChatSession()`
- `public void indicateDamage(double p_270621_,  double p_270478_)`
- `public boolean startRiding(Entity p_277395_,  boolean p_278062_)`
- `public void stopRiding()`
- `public CommonPlayerSpawnInfo createCommonSpawnInfo(ServerLevel p_301182_)`

### Inherited methods
- from `net.minecraft.world.entity.player.Player`: `actuallyHurt`, `addItem`, `aiStep`, `animateHurt`, `awardStat`, `awardStat`, `awardStat`, `blockActionRestricted`, `blockUsingShield`, `canBeHitByProjectile`, `canBeSeenAsEnemy`, `canEat`, `canPlayerFitWithinBlocksAndEntitiesWhen`, `canSprint`, `canTakeItem`, `canUseGameMasterBlocks`, `causeFallDamage`, `causeFoodExhaustion`, `checkMovementStatistics`, `createAttributes`, `defineSynchedData`, `destroyVanishingCursedItems`, `disableShield`, `doAutoAttackOnTouch`, `doesEmitEquipEvent`, `doWaterSplashEffect`, `drop`, `dropEquipment`, `eat`, `findRespawnPositionAndUseSpawnBlock`, `freeAt`, `getAbilities`, `getAbsorptionAmount`, `getArmorSlots`, `getAttackStrengthScale`, `getBlockSpeedFactor`, `getCapability`, `getCooldowns`, `getCurrentItemAttackStrengthDelay`, `getDeathSound`, `getDestroySpeed`, `getDigSpeed`, `getDimensionChangingDelay`, `getDimensions`, `getDismountPoses`, `getDisplayName`, `getEnchantmentSeed`, `getEnderChestInventory`, `getExperienceReward`, `getFallSounds`, `getFireImmuneTicks`, `getFlyingSpeed`, `getFoodData`, `getForcedPose`, `getGameProfile`, `getHandSlots`, `getHurtDir`, `getHurtSound`, `getInventory`, `getItemBySlot`, `getLastDeathLocation`, `getLuck`, `getMainArm`, `getMovementEmission`, `getName`, `getPortalWaitTime`, `getPrefixes`, `getProjectile`, `getRopeHoldPosition`, `getScore`, `getScoreboard`, `getScoreboardName`, `getShoulderEntityLeft`, `getShoulderEntityRight`, `getSleepTimer`, `getSlot`, `getSoundSource`, `getSpeed`, `getStandingEyeHeight`, `getSuffixes`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getXpNeededForNextLevel`, `handleEntityEvent`, `hasContainerOpen`, `hasCorrectToolForDrops`, `hurtArmor`, `hurtCurrentlyUsedShield`, `hurtHelmet`, `increaseScore`, `interactOn`, `internalSetAbsorptionAmount`, `isAffectedByFluids`, `isAlwaysExperienceDropper`, `isAlwaysTicking`, `isHurt`, `isImmobile`, `isLocalPlayer`, `isModelPartShown`, `isPushedByFluid`, `isReducedDebugInfo`, `isScoping`, `isSecondaryUseActive`, `isSleepingLongEnough`, `isStayingOnGroundSurface`, `isSwimming`, `jumpFromGround`, `killedEntity`, `makeStuckInBlock`, `maybeBackOffFromEdge`, `mayBuild`, `mayUseItemAt`, `onSoulSpeedBlock`, `openJigsawBlock`, `openMinecartCommandBlock`, `openStructureBlock`, `playSound`, `playStepSound`, `refreshDisplayName`, `remove`, `removeEntitiesOnShoulder`, `removeVehicle`, `resetAttackStrengthTicker`, `respawn`, `rideTick`, `ridingOffset`, `serverAiStep`, `setEntityOnShoulder`, `setForcedPose`, `setItemSlot`, `setLastDeathLocation`, `setMainArm`, `setReducedDebugInfo`, `setRemainingFireTicks`, `setScore`, `setShoulderEntityLeft`, `setShoulderEntityRight`, `shouldBeSaved`, `shouldRemoveSoulSpeed`, `shouldShowName`, `startAutoSpinAttack`, `startFallFlying`, `stopFallFlying`, `stopSleeping`, `sweepAttack`, `travel`, `tryToStartFallFlying`, `updateIsUnderwater`, `updatePlayerPose`, `updateSwimming`, `updateTutorialInventoryAction`, `wantsToStopRiding`
- from `net.minecraft.world.entity.LivingEntity`: `addEffect`, `addEffect`, `areAllEffectsAmbient`, `attackable`, `baseTick`, `blockedByShield`, `brainProvider`, `broadcastBreakEvent`, `broadcastBreakEvent`, `calculateEntityAnimation`, `calculateFallDamage`, `canAttack`, `canAttack`, `canAttackType`, `canBeAffected`, `canBeSeenByAnyone`, `canBreatheUnderwater`, `canChangeDimensions`, `canDisableShield`, `canFreeze`, `canSpawnSoulSpeedParticle`, `canStandOnFluid`, `checkAutoSpinAttack`, `clearSleepingPos`, `createLivingAttributes`, `createWitherRose`, `curePotionEffects`, `decreaseAirSupply`, `doHurtTarget`, `doPush`, `dropAllDeathLoot`, `dropCustomDeathLoot`, `dropExperience`, `dropFromLootTable`, `equipmentHasChanged`, `forceAddEffect`, `getActiveEffects`, `getActiveEffectsMap`, `getArmorCoverPercentage`, `getArmorValue`, `getArrowCount`, `getAttackAnim`, `getAttribute`, `getAttributeBaseValue`, `getAttributeBaseValue`, `getAttributes`, `getAttributeValue`, `getAttributeValue`, `getBedOrientation`, `getBoundingBoxForCulling`, `getBrain`, `getCombatTracker`, `getDamageAfterArmorAbsorb`, `getDamageAfterMagicAbsorb`, `getDrinkingSound`, `getEatingSound`, `getEffect`, `getEquipmentSlotForItem`, `getEyeHeight`, `getFallFlyingTicks`, `getFluidFallingAdjustedMovement`, `getHealth`, `getHitbox`, `getItemInHand`, `getJumpBoostPower`, `getJumpPower`, `getKillCredit`, `getLastAttacker`, `getLastClimbablePos`, `getLastDamageSource`, `getLastHurtByMob`, `getLastHurtByMobTimestamp`, `getLastHurtMob`, `getLastHurtMobTimestamp`, `getLocalBoundsForPose`, `getLootTable`, `getLootTableSeed`, `getMainHandItem`, `getMaxAbsorption`, `getMaxHealth`, `getMobType`, `getMyRidingOffset`, `getNoActionTime`, `getOffhandItem`, `getPassengerRidingPosition`, `getRandom`, `getRelativePortalPosition`, `getRiddenInput`, `getRiddenSpeed`, `getScale`, `getSleepingPos`, `getSoundVolume`, `getStingerCount`, `getSwimAmount`, `getTicksUsingItem`, `getUsedItemHand`, `getUseItem`, `getUseItemRemainingTicks`, `getViewYRot`, `getVisibilityPercent`, `getVisualRotationYInDegrees`, `getVoicePitch`, `getWaterSlowDown`, `getYHeadRot`, `goDownInWater`, `handleDamageEvent`, `handleRelativeFrictionAndCalculateMovement`, `hasEffect`, `hasItemInSlot`, `hasLineOfSight`, `heal`, `increaseAirSupply`, `invalidateCaps`, `isAffectedByPotions`, `isAlive`, `isAutoSpinAttack`, `isBaby`, `isBlocking`, `isCurrentlyGlowing`, `isDamageSourceBlocked`, `isDeadOrDying`, `isFallFlying`, `isHolding`, `isHolding`, `isInvertedHealAndHarm`, `isInWall`, `isPickable`, `isPushable`, `isSensitiveToWater`, `isSleeping`, `isSuppressingSlidingDownLadder`, `isUsingItem`, `isVisuallySwimming`, `jumpInLiquid`, `kill`, `knockback`, `lerpHeadRotationStep`, `lerpHeadTo`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `makeBrain`, `maxUpStep`, `onBelowWorld`, `onClimbable`, `onEquipItem`, `onSyncedDataUpdated`, `playBlockFallSound`, `playHurtSound`, `push`, `pushEntities`, `randomTeleport`, `recreateFromPacket`, `releaseUsingItem`, `removeAllEffects`, `removeEffect`, `removeEffectNoUpdate`, `removeEffectParticles`, `removeFrost`, `removeSoulSpeed`, `resetForwardDirectionOfRelativePortalPosition`, `reviveCaps`, `sendEffectToPassengers`, `setAbsorptionAmount`, `setArrowCount`, `setDiscardFriction`, `setHealth`, `setItemInHand`, `setJumping`, `setLastHurtByMob`, `setLastHurtByPlayer`, `setLastHurtMob`, `setLivingEntityFlag`, `setNoActionTime`, `setRecordPlayingNearby`, `setSleepingPos`, `setSpeed`, `setSprinting`, `setStingerCount`, `setYBodyRot`, `setYHeadRot`, `shouldDiscardFriction`, `shouldDropExperience`, `shouldDropLoot`, `shouldRiderFaceForward`, `skipDropExperience`, `spawnSoulSpeedParticle`, `startUsingItem`, `stopUsingItem`, `swing`, `tickDeath`, `tickEffects`, `tickHeadTurn`, `tickRidden`, `triggerItemUseEffects`, `tryAddFrost`, `tryAddSoulSpeed`, `updateEffectVisibility`, `updateSwingTime`, `updateWalkAnimation`, `verifyEquippedItem`, `wasExperienceConsumed`, `wouldNotSuffocateAtTargetPose`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `blockPosition`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canCollideWith`, `canControlVehicle`, `canRide`, `canSpawnSprintParticle`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getEncodeId`, `getEntityData`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMotionDirection`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPersistentData`, `getPickRadius`, `getPickResult`, `getPistonPushReaction`, `getPortalCooldown`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRotationVector`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getStringUUID`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYRot`, `getZ`, `getZ`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interact`, `interactAt`, `is`, `isAddedToWorld`, `isAlliedTo`, `isAlliedTo`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `lavaHurt`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `makeBoundingBox`, `markHurt`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `push`, `reapplyPosition`, `refreshDimensions`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `repositionEntityAfterLoad`, `restoreFrom`, `revive`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYRot`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startSeenByPlayer`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getEyeInFluidType`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getFluidTypeHeight`, `getMaxHeightFluidType`, `getParts`, `getPersistentData`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isAddedToWorld`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `onAddedToWorld`, `onRemovedFromWorld`, `revive`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraftforge.common.extensions.IForgeLivingEntity`: `canDrownInFluidType`, `canSwimInFluidType`, `jumpInFluid`, `moveInFluid`, `self`, `sinkInFluid`
- from `net.minecraftforge.common.extensions.IForgePlayer`: `canReach`, `canReach`, `canReach`, `getBlockReach`, `getEntityReach`, `isCloseEnough`
- from `net.minecraftforge.common.extensions.IForgeServerPlayer`: `openMenu`, `openMenu`

## ServerPlayerGameMode

*class* `net.minecraft.server.level.ServerPlayerGameMode`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `protected ServerLevel level`
- `protected final ServerPlayer player`
- `private GameType gameModeForPlayer`
- `@Nullable private GameType previousGameModeForPlayer`
- `private boolean isDestroyingBlock`
- `private int destroyProgressStart`
- `private BlockPos destroyPos`
- `private int gameTicks`
- `private boolean hasDelayedDestroy`
- `private BlockPos delayedDestroyPos`
- `private int delayedTickStart`
- `private int lastSentState`

### Methods
- `public boolean changeGameModeForPlayer(GameType p_143474_)`
- `protected void setGameModeForPlayer(GameType p_9274_,  @Nullable  GameType p_9275_)`
- `public GameType getGameModeForPlayer()`
- `@Nullable public GameType getPreviousGameModeForPlayer()`
- `public boolean isSurvival()`
- `public boolean isCreative()`
- `public void tick()`
- `private float incrementDestroyProgress(BlockState p_9277_,  BlockPos p_9278_,  int p_9279_)`
- `private void debugLogging(BlockPos p_215126_,  boolean p_215127_,  int p_215128_,  String p_215129_)`
- `public void handleBlockBreakAction(BlockPos p_215120_,  ServerboundPlayerActionPacket.Action p_215121_,  Direction p_215122_,  int p_215123_,  int p_215124_)`
- `public void destroyAndAck(BlockPos p_215117_,  int p_215118_,  String p_215119_)`
- `public boolean destroyBlock(BlockPos p_9281_)`
- `private boolean removeBlock(BlockPos p_180235_1_,  boolean canHarvest)`
- `public InteractionResult useItem(ServerPlayer p_9262_,  Level p_9263_,  ItemStack p_9264_,  InteractionHand p_9265_)`
- `public InteractionResult useItemOn(ServerPlayer p_9266_,  Level p_9267_,  ItemStack p_9268_,  InteractionHand p_9269_,  BlockHitResult p_9270_)`
- `public void setLevel(ServerLevel p_9261_)`

## ThreadedLevelLightEngine

*class* `net.minecraft.server.level.ThreadedLevelLightEngine`

### Fields
- `public static final int DEFAULT_BATCH_SIZE` (= 1000)
- `private static final org.slf4j.Logger LOGGER`
- `private final ProcessorMailbox<Runnable> taskMailbox`
- `private final it.unimi.dsi.fastutil.objects.ObjectList<com.mojang.datafixers.util.Pair<ThreadedLevelLightEngine.TaskType,Runnable>> lightTasks`
- `private final ChunkMap chunkMap`
- `private final ProcessorHandle<ChunkTaskPriorityQueueSorter.Message<Runnable>> sorterMailbox`
- `private final int taskPerBatch` (= 1000)
- `private final AtomicBoolean scheduled`

### Inherited fields
- from `net.minecraft.world.level.lighting.LevelLightEngine`: `levelHeightAccessor`, `LIGHT_SECTION_PADDING`

### Methods
- `public void close()`
- `public int runLightUpdates()`
- `public void checkBlock(BlockPos p_9357_)`
- `protected void updateChunkStatus(ChunkPos p_9331_)`
- `public void updateSectionStatus(SectionPos p_9364_,  boolean p_9365_)`
- `public void propagateLightSources(ChunkPos p_285029_)`
- `public void setLightEnabled(ChunkPos p_9336_,  boolean p_9337_)`
- `public void queueSectionData(LightLayer p_285046_,  SectionPos p_285496_,  @Nullable  DataLayer p_285495_)`
- `private void addTask(int p_9313_,  int p_9314_,  ThreadedLevelLightEngine.TaskType p_9315_,  Runnable p_9316_)`
- `private void addTask(int p_9318_,  int p_9319_,  IntSupplier p_9320_,  ThreadedLevelLightEngine.TaskType p_9321_,  Runnable p_9322_)`
- `public void retainData(ChunkPos p_9370_,  boolean p_9371_)`
- `public CompletableFuture<ChunkAccess> initializeLight(ChunkAccess p_285128_,  boolean p_285441_)`
- `public CompletableFuture<ChunkAccess> lightChunk(ChunkAccess p_9354_,  boolean p_9355_)`
- `public void tryScheduleUpdate()`
- `private void runUpdate()`
- `public CompletableFuture<?> waitForPendingTasks(int p_297330_,  int p_298866_)`

### Inherited methods
- from `net.minecraft.world.level.lighting.LevelLightEngine`: `getDebugData`, `getDebugSectionType`, `getLayerListener`, `getLightSectionCount`, `getMaxLightSection`, `getMinLightSection`, `getRawBrightness`, `hasLightWork`, `lightOnInSection`
- from `net.minecraft.world.level.lighting.LightEventListener`: `updateSectionStatus`

## Ticket

*class* `net.minecraft.server.level.Ticket`

### Fields
- `private final TicketType<T> type`
- `private final int ticketLevel`
- `private final T key`
- `private long createdTick`
- `private final boolean forceTicks`

### Methods
- `public int compareTo(Ticket<?> p_9432_)`
- `public boolean equals(Object p_9439_)`
- `public int hashCode()`
- `public String toString()`
- `public TicketType<T> getType()`
- `public int getTicketLevel()`
- `protected void setCreatedTick(long p_9430_)`
- `protected boolean timedOut(long p_9435_)`
- `public boolean isForceTicks()`

## TicketType

*class* `net.minecraft.server.level.TicketType`

### Fields
- `private final String name`
- `private final Comparator<T> comparator`
- `private final long timeout`
- `public static final TicketType<Unit> START`
- `public static final TicketType<Unit> DRAGON`
- `public static final TicketType<ChunkPos> PLAYER`
- `public static final TicketType<ChunkPos> FORCED`
- `public static final TicketType<ChunkPos> LIGHT`
- `public static final TicketType<BlockPos> PORTAL`
- `public static final TicketType<Integer> POST_TELEPORT`
- `public static final TicketType<ChunkPos> UNKNOWN`

### Methods
- `public static <T> TicketType<T> create(String p_9463_,  Comparator<T> p_9464_)`
- `public static <T> TicketType<T> create(String p_9466_,  Comparator<T> p_9467_,  int p_9468_)`
- `public String toString()`
- `public Comparator<T> getComparator()`
- `public long timeout()`

## TickingTracker

*class* `net.minecraft.server.level.TickingTracker`

### Fields
- `public static final int MAX_LEVEL` (= 33)
- `private static final int INITIAL_TICKET_LIST_CAPACITY` (= 4)
- `protected final it.unimi.dsi.fastutil.longs.Long2ByteMap chunks`
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectOpenHashMap<SortedArraySet<Ticket<?>>> tickets`

### Inherited fields
- from `net.minecraft.world.level.lighting.DynamicGraphMinFixedPoint`: `levelCount`, `SOURCE`

### Methods
- `private SortedArraySet<Ticket<?>> getTickets(long p_184178_)`
- `private int getTicketLevelAt(SortedArraySet<Ticket<?>> p_184160_)`
- `public void addTicket(long p_184152_,  Ticket<?> p_184153_)`
- `public void removeTicket(long p_184166_,  Ticket<?> p_184167_)`
- `public <T> void addTicket(TicketType<T> p_184155_,  ChunkPos p_184156_,  int p_184157_,  T p_184158_)`
- `public <T> void removeTicket(TicketType<T> p_184169_,  ChunkPos p_184170_,  int p_184171_,  T p_184172_)`
- `public void replacePlayerTicketsLevel(int p_184147_)`
- `protected int getLevelFromSource(long p_184164_)`
- `public int getLevel(ChunkPos p_184162_)`
- `protected int getLevel(long p_184174_)`
- `protected void setLevel(long p_184149_,  int p_184150_)`
- `public void runAllUpdates()`
- `public String getTicketDebugString(long p_184176_)`

### Inherited methods
- from `net.minecraft.server.level.ChunkTracker`: `checkNeighborsAfterUpdate`, `computeLevelFromNeighbor`, `getComputedLevel`, `isSource`, `update`
- from `net.minecraft.world.level.lighting.DynamicGraphMinFixedPoint`: `checkEdge`, `checkNeighbor`, `checkNode`, `getQueueSize`, `hasWork`, `removeFromQueue`, `removeIf`, `runUpdates`

## WorldGenRegion

*class* `net.minecraft.server.level.WorldGenRegion`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final List<ChunkAccess> cache`
- `private final ChunkAccess center`
- `private final int size`
- `private final ServerLevel level`
- `private final long seed`
- `private final LevelData levelData`
- `private final RandomSource random`
- `private final DimensionType dimensionType`
- `private final WorldGenTickAccess<Block> blockTicks`
- `private final WorldGenTickAccess<Fluid> fluidTicks`
- `private final BiomeManager biomeManager`
- `private final ChunkPos firstPos`
- `private final ChunkPos lastPos`
- `private final StructureManager structureManager`
- `private final ChunkStatus generatingStatus`
- `private final int writeRadiusCutoff`
- `@Nullable private Supplier<String> currentlyGenerating`
- `private final AtomicLong subTickCount`
- `private static final ResourceLocation WORLDGEN_REGION_RANDOM`

### Inherited fields
- from `net.minecraft.world.level.SignalGetter`: `DIRECTIONS`

### Methods
- `public boolean isOldChunkAround(ChunkPos p_215160_,  int p_215161_)`
- `public ChunkPos getCenter()`
- `public void setCurrentlyGenerating(@Nullable  Supplier<String> p_143498_)`
- `public ChunkAccess getChunk(int p_9507_,  int p_9508_)`
- `@Nullable public ChunkAccess getChunk(int p_9514_,  int p_9515_,  ChunkStatus p_9516_,  boolean p_9517_)`
- `public boolean hasChunk(int p_9574_,  int p_9575_)`
- `public BlockState getBlockState(BlockPos p_9587_)`
- `public FluidState getFluidState(BlockPos p_9577_)`
- `@Nullable public Player getNearestPlayer(double p_9501_,  double p_9502_,  double p_9503_,  double p_9504_,  Predicate<Entity> p_9505_)`
- `public int getSkyDarken()`
- `public BiomeManager getBiomeManager()`
- `public Holder<Biome> getUncachedNoiseBiome(int p_203787_,  int p_203788_,  int p_203789_)`
- `public float getShade(Direction p_9555_,  boolean p_9556_)`
- `public LevelLightEngine getLightEngine()`
- `public boolean destroyBlock(BlockPos p_9550_,  boolean p_9551_,  @Nullable  Entity p_9552_,  int p_9553_)`
- `@Nullable public BlockEntity getBlockEntity(BlockPos p_9582_)`
- `public boolean ensureCanWrite(BlockPos p_181031_)`
- `public boolean setBlock(BlockPos p_9539_,  BlockState p_9540_,  int p_9541_,  int p_9542_)`
- `private void markPosForPostprocessing(BlockPos p_9592_)`
- `public boolean addFreshEntity(Entity p_9580_)`
- `public boolean removeBlock(BlockPos p_9547_,  boolean p_9548_)`
- `public WorldBorder getWorldBorder()`
- `public boolean isClientSide()`
- `@Deprecated public ServerLevel getLevel()` (deprecated)
- `public RegistryAccess registryAccess()`
- `public FeatureFlagSet enabledFeatures()`
- `public LevelData getLevelData()`
- `public DifficultyInstance getCurrentDifficultyAt(BlockPos p_9585_)`
- `@Nullable public MinecraftServer getServer()`
- `public ChunkSource getChunkSource()`
- `public long getSeed()`
- `public LevelTickAccess<Block> getBlockTicks()`
- `public LevelTickAccess<Fluid> getFluidTicks()`
- `public int getSeaLevel()`
- `public RandomSource getRandom()`
- `public int getHeight(Heightmap.Types p_9535_,  int p_9536_,  int p_9537_)`
- `public void playSound(@Nullable  Player p_9528_,  BlockPos p_9529_,  SoundEvent p_9530_,  SoundSource p_9531_,  float p_9532_,  float p_9533_)`
- `public void addParticle(ParticleOptions p_9561_,  double p_9562_,  double p_9563_,  double p_9564_,  double p_9565_,  double p_9566_,  double p_9567_)`
- `public void levelEvent(@Nullable  Player p_9523_,  int p_9524_,  BlockPos p_9525_,  int p_9526_)`
- `public void gameEvent(GameEvent p_215163_,  Vec3 p_215164_,  GameEvent.Context p_215165_)`
- `public DimensionType dimensionType()`
- `public boolean isStateAtPosition(BlockPos p_9544_,  Predicate<BlockState> p_9545_)`
- `public boolean isFluidAtPosition(BlockPos p_143500_,  Predicate<FluidState> p_143501_)`
- `public <T extends Entity> List<T> getEntities(EntityTypeTest<Entity,T> p_143494_,  AABB p_143495_,  Predicate<? super T> p_143496_)`
- `public List<Entity> getEntities(@Nullable  Entity p_9519_,  AABB p_9520_,  @Nullable  Predicate<? super Entity> p_9521_)`
- `public List<Player> players()`
- `public int getMinBuildHeight()`
- `public int getHeight()`
- `public long nextSubTickCount()`

### Inherited methods
- from `net.minecraft.world.level.BlockAndTintGetter`: `canSeeSky`, `getBrightness`, `getRawBrightness`
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockStates`, `getLightEmission`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraft.world.level.CollisionGetter`: `collidesWithSuffocatingBlock`, `findFreePosition`, `findSupportingBlock`, `getBlockCollisions`, `getCollisions`, `getEntityCollisions`, `isUnobstructed`, `isUnobstructed`, `isUnobstructed`, `noBlockCollision`, `noCollision`, `noCollision`, `noCollision`
- from `net.minecraft.world.level.CommonLevelAccessor`: `getBlockEntity`, `getEntityCollisions`, `getHeightmapPos`, `isUnobstructed`
- from `net.minecraft.world.level.EntityGetter`: `getEntities`, `getEntitiesOfClass`, `getEntitiesOfClass`, `getNearbyEntities`, `getNearbyPlayers`, `getNearestEntity`, `getNearestEntity`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getPlayerByUUID`, `hasNearbyAlivePlayer`
- from `net.minecraftforge.client.extensions.IForgeBlockAndTintGetter`: `getShade`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraft.world.level.LevelAccessor`: `blockUpdated`, `dayTime`, `gameEvent`, `gameEvent`, `gameEvent`, `getDifficulty`, `levelEvent`, `neighborShapeChanged`, `playSound`, `scheduleTick`, `scheduleTick`, `scheduleTick`, `scheduleTick`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getMaxBuildHeight`, `getMaxSection`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`
- from `net.minecraft.world.level.LevelReader`: `canSeeSkyFromBelowWater`, `containsAnyLiquid`, `getBiome`, `getBlockStatesIfLoaded`, `getBlockTint`, `getChunk`, `getChunk`, `getChunkForCollisions`, `getLightLevelDependentMagicValue`, `getMaxLocalRawBrightness`, `getMaxLocalRawBrightness`, `getNoiseBiome`, `getPathfindingCostFromLightLevels`, `hasChunkAt`, `hasChunkAt`, `hasChunksAt`, `hasChunksAt`, `hasChunksAt`, `holderLookup`, `isAreaLoaded`, `isEmptyBlock`, `isWaterAt`
- from `net.minecraft.world.level.LevelTimeAccess`: `getMoonBrightness`, `getMoonPhase`, `getTimeOfDay`
- from `net.minecraft.world.level.LevelWriter`: `destroyBlock`, `destroyBlock`, `setBlock`
- from `net.minecraft.world.level.ServerLevelAccessor`: `addFreshEntityWithPassengers`
- from `net.minecraft.world.level.SignalGetter`: `getBestNeighborSignal`, `getControlInputSignal`, `getDirectSignal`, `getDirectSignalTo`, `getSignal`, `hasNeighborSignal`, `hasSignal`
