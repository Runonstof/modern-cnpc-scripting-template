# net.minecraft.server

- [Bootstrap](#bootstrap)
- [ChainedJsonException](#chainedjsonexception)
- [ChainedJsonException.Entry](#chainedjsonexception.entry)
- [Class RegistryLayer](#class-registrylayer)
- [Class ServerScoreboard.Method](#class-serverscoreboard.method)
- [ConsoleInput](#consoleinput)
- [DebugLoggedPrintStream](#debugloggedprintstream)
- [Eula](#eula)
- [LoggedPrintStream](#loggedprintstream)
- [Main](#main)
- [MinecraftServer](#minecraftserver)
- [MinecraftServer.ReloadableResources](#minecraftserver.reloadableresources)
- [MinecraftServer.ServerResourcePackInfo](#minecraftserver.serverresourcepackinfo)
- [MinecraftServer.TimeProfiler](#minecraftserver.timeprofiler)
- [PlayerAdvancements](#playeradvancements)
- [PlayerAdvancements.Data](#playeradvancements.data)
- [ReloadableServerResources](#reloadableserverresources)
- [RunningOnDifferentThreadException](#runningondifferentthreadexception)
- [ServerAdvancementManager](#serveradvancementmanager)
- [ServerFunctionLibrary](#serverfunctionlibrary)
- [ServerFunctionManager](#serverfunctionmanager)
- [ServerFunctionManager.ExecutionContext](#serverfunctionmanager.executioncontext)
- [ServerFunctionManager.ExecutionContext.AbortingReturnValueConsumer](#serverfunctionmanager.executioncontext.abortingreturnvalueconsumer)
- [ServerFunctionManager.QueuedCommand](#serverfunctionmanager.queuedcommand)
- [ServerFunctionManager.TraceCallbacks](#serverfunctionmanager.tracecallbacks)
- [ServerInfo](#serverinfo)
- [ServerInterface](#serverinterface)
- [ServerScoreboard](#serverscoreboard)
- [Services](#services)
- [TickTask](#ticktask)
- [WorldLoader](#worldloader)
- [WorldLoader.DataLoadContext](#worldloader.dataloadcontext)
- [WorldLoader.DataLoadOutput](#worldloader.dataloadoutput)
- [WorldLoader.InitConfig](#worldloader.initconfig)
- [WorldLoader.PackConfig](#worldloader.packconfig)
- [WorldLoader.ResultFactory](#worldloader.resultfactory)
- [WorldLoader.WorldDataSupplier](#worldloader.worlddatasupplier)
- [WorldStem](#worldstem)
## Bootstrap

*class* `net.minecraft.server.Bootstrap`

### Fields
- `public static final PrintStream STDOUT`
- `private static volatile boolean isBootstrapped`
- `private static final org.slf4j.Logger LOGGER`
- `public static final AtomicLong bootstrapDuration`

### Methods
- `public static void bootStrap()`
- `private static <T> void checkTranslations(Iterable<T> p_135872_,  Function<T,String> p_135873_,  Set<String> p_135874_)`
- `private static void checkGameruleTranslations(Set<String> p_135878_)`
- `public static Set<String> getMissingTranslations()`
- `public static void checkBootstrapCalled(Supplier<String> p_179913_)`
- `private static RuntimeException createBootstrapException(Supplier<String> p_179917_)`
- `public static void validate()`
- `private static void wrapStreams()`
- `public static void realStdoutPrintln(String p_135876_)`

## ChainedJsonException

*class* `net.minecraft.server.ChainedJsonException`

### Fields
- `private final List<ChainedJsonException.Entry> entries`
- `private final String message`

### Methods
- `public void prependJsonKey(String p_135909_)`
- `public void setFilenameAndFlush(String p_135911_)`
- `public String getMessage()`
- `public static ChainedJsonException forException(Exception p_135907_)`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ChainedJsonException.Entry

*class* `net.minecraft.server.ChainedJsonException.Entry`

Enclosing class: ChainedJsonException

### Fields
- `@Nullable String filename`
- `private final List<String> jsonKeys`

### Methods
- `void addJsonKey(String p_135919_)`
- `@Nullable public String getFilename()`
- `public String getJsonKeys()`
- `public String toString()`

## Class RegistryLayer

*enum* `net.minecraft.server.Class RegistryLayer`

### Fields
- `private static final List<RegistryLayer> VALUES`
- `private static final RegistryAccess.Frozen STATIC_ACCESS`

### Methods
- `public static RegistryLayer[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RegistryLayer valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static LayeredRegistryAccess<RegistryLayer> createRegistryAccess()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ServerScoreboard.Method

*enum* `net.minecraft.server.Class ServerScoreboard.Method`

Enclosing class: ServerScoreboard

### Methods
- `public static ServerScoreboard.Method[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ServerScoreboard.Method valueOf(String name)`
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

## ConsoleInput

*class* `net.minecraft.server.ConsoleInput`

### Fields
- `public final String msg`
- `public final CommandSourceStack source`

## DebugLoggedPrintStream

*class* `net.minecraft.server.DebugLoggedPrintStream`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Inherited fields
- from `net.minecraft.server.LoggedPrintStream`: `name`
- from `java.io.FilterOutputStream`: `out`

### Methods
- `protected void logLine(String p_135937_)`

### Inherited methods
- from `net.minecraft.server.LoggedPrintStream`: `println`, `println`
- from `java.io.PrintStream`: `append`, `append`, `append`, `checkError`, `clearError`, `close`, `flush`, `format`, `format`, `print`, `print`, `print`, `print`, `print`, `print`, `print`, `print`, `print`, `printf`, `printf`, `println`, `println`, `println`, `println`, `println`, `println`, `println`, `println`, `setError`, `write`, `write`, `write`, `writeBytes`
- from `java.io.OutputStream`: `nullOutputStream`

## Eula

*class* `net.minecraft.server.Eula`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Path file`
- `private final boolean agreed`

### Methods
- `private boolean readFile()`
- `public boolean hasAgreedToEULA()`
- `private void saveDefaults()`

## LoggedPrintStream

*class* `net.minecraft.server.LoggedPrintStream`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `protected final String name`

### Inherited fields
- from `java.io.FilterOutputStream`: `out`

### Methods
- `public void println(@Nullable  String p_135957_)`
- `public void println(Object p_135955_)`
- `protected void logLine(@Nullable  String p_135953_)`

### Inherited methods
- from `java.io.PrintStream`: `append`, `append`, `append`, `checkError`, `clearError`, `close`, `flush`, `format`, `format`, `print`, `print`, `print`, `print`, `print`, `print`, `print`, `print`, `print`, `printf`, `printf`, `println`, `println`, `println`, `println`, `println`, `println`, `println`, `println`, `setError`, `write`, `write`, `write`, `writeBytes`
- from `java.io.OutputStream`: `nullOutputStream`

## Main

*class* `net.minecraft.server.Main`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Methods
- `public static void main(String[] p_129699_)`
- `private static void writePidFile(Path p_270192_)`
- `private static WorldLoader.InitConfig loadOrCreateConfig(DedicatedServerProperties p_248563_,  LevelStorageSource.LevelStorageAccess p_251359_,  boolean p_249093_,  PackRepository p_251069_)`
- `private static void forceUpgrade(LevelStorageSource.LevelStorageAccess p_195489_,  com.mojang.datafixers.DataFixer p_195490_,  boolean p_195491_,  BooleanSupplier p_195492_,  Registry<LevelStem> p_250443_)`

## MinecraftServer

*class* `net.minecraft.server.MinecraftServer`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final String VANILLA_BRAND` (= "vanilla")
- `private static final float AVERAGE_TICK_TIME_SMOOTHING` (= 0.800000011920929f)
- `private static final int TICK_STATS_SPAN` (= 100)
- `public static final int MS_PER_TICK` (= 50)
- `private static final int OVERLOADED_THRESHOLD` (= 2000)
- `private static final int OVERLOADED_WARNING_INTERVAL` (= 15000)
- `private static final long STATUS_EXPIRE_TIME_NS` (= 5000000000L)
- `private static final int MAX_STATUS_PLAYER_SAMPLE` (= 12)
- `public static final int START_CHUNK_RADIUS` (= 11)
- `private static final int START_TICKING_CHUNK_COUNT` (= 441)
- `private static final int AUTOSAVE_INTERVAL` (= 6000)
- `private static final int MAX_TICK_LATENCY` (= 3)
- `public static final int ABSOLUTE_MAX_WORLD_SIZE` (= 29999984)
- `public static final LevelSettings DEMO_SETTINGS`
- `private static final long DELAYED_TASKS_TICK_EXTENSION` (= 50L)
- `public static final com.mojang.authlib.GameProfile ANONYMOUS_PLAYER_PROFILE`
- `protected final LevelStorageSource.LevelStorageAccess storageSource`
- `protected final PlayerDataStorage playerDataStorage`
- `private final List<Runnable> tickables`
- `private MetricsRecorder metricsRecorder`
- `private ProfilerFiller profiler`
- `private Consumer<ProfileResults> onMetricsRecordingStopped`
- `private Consumer<Path> onMetricsRecordingFinished`
- `private boolean willStartRecordingMetrics`
- `@Nullable private MinecraftServer.TimeProfiler debugCommandProfiler`
- `private boolean debugCommandProfilerDelayStart`
- `private final ServerConnectionListener connection`
- `private final ChunkProgressListenerFactory progressListenerFactory`
- `@Nullable private ServerStatus status`
- `@Nullable private ServerStatus.Favicon statusIcon`
- `private final RandomSource random`
- `private final com.mojang.datafixers.DataFixer fixerUpper`
- `private String localIp`
- `private int port`
- `private final LayeredRegistryAccess<RegistryLayer> registries`
- `private final Map<ResourceKey<Level>,ServerLevel> levels`
- `private PlayerList playerList`
- `private volatile boolean running`
- `private boolean stopped`
- `private int tickCount`
- `protected final Proxy proxy`
- `private boolean onlineMode`
- `private boolean preventProxyConnections`
- `private boolean pvp`
- `private boolean allowFlight`
- `@Nullable private String motd`
- `private int playerIdleTimeout`
- `public final long[] tickTimes`
- `@Nullable private KeyPair keyPair`
- `@Nullable private com.mojang.authlib.GameProfile singleplayerProfile`
- `private boolean isDemo`
- `private volatile boolean isReady`
- `private long lastOverloadWarning`
- `protected final Services services`
- `private long lastServerStatus`
- `private final Thread serverThread`
- `protected long nextTickTime`
- `private long delayedTasksMaxNextTickTime`
- `private boolean mayHaveDelayedTasks`
- `private final PackRepository packRepository`
- `private final ServerScoreboard scoreboard`
- `@Nullable private CommandStorage commandStorage`
- `private final CustomBossEvents customBossEvents`
- `private final ServerFunctionManager functionManager`
- `private boolean enforceWhitelist`
- `private float averageTickTime`
- `private final Executor executor`
- `@Nullable private String serverId`
- `private MinecraftServer.ReloadableResources resources`
- `private final StructureTemplateManager structureTemplateManager`
- `protected final WorldData worldData`
- `private volatile boolean isSaving`
- `private static final com.google.gson.Gson GSON`
- `private String cachedServerStatus`
- `private Map<ResourceKey<Level>,long[]> perWorldTickTimes`
- `private int worldArrayMarker`
- `private int worldArrayLast`
- `private ServerLevel[] worldArray`

### Inherited fields
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `public static <S extends MinecraftServer> S spin(Function<Thread,S> p_129873_)`
- `private void readScoreboard(DimensionDataStorage p_129842_)`
- `protected abstract boolean initServer()  throws IOException`
  - throws: IOException
- `protected void loadLevel()`
- `protected void forceDifficulty()`
- `protected void createLevels(ChunkProgressListener p_129816_)`
- `private static void setInitialSpawn(ServerLevel p_177897_,  ServerLevelData p_177898_,  boolean p_177899_,  boolean p_177900_)`
- `private void setupDebugLevel(WorldData p_129848_)`
- `private void prepareLevels(ChunkProgressListener p_129941_)`
- `public GameType getDefaultGameType()`
- `public boolean isHardcore()`
- `public abstract int getOperatorUserPermissionLevel()`
- `public abstract int getFunctionCompilationLevel()`
- `public abstract boolean shouldRconBroadcast()`
- `public boolean saveAllChunks(boolean p_129886_,  boolean p_129887_,  boolean p_129888_)`
- `public boolean saveEverything(boolean p_195515_,  boolean p_195516_,  boolean p_195517_)`
- `public void close()`
- `public void stopServer()`
- `public String getLocalIp()`
- `public void setLocalIp(String p_129914_)`
- `public boolean isRunning()`
- `public void halt(boolean p_129884_)`
- `protected void runServer()`
- `private static CrashReport constructOrExtractCrashReport(Throwable p_206569_)`
- `private boolean haveTime()`
- `protected void waitUntilNextTick()`
- `protected TickTask wrapRunnable(Runnable p_129852_)`
- `protected boolean shouldRun(TickTask p_129883_)`
- `public boolean pollTask()`
- `private boolean pollTaskInternal()`
- `public void doRunTask(TickTask p_129957_)`
- `private Optional<ServerStatus.Favicon> loadStatusIcon()`
- `public Optional<Path> getWorldScreenshotFile()`
- `public File getServerDirectory()`
- `public void onServerCrash(CrashReport p_129874_)`
- `public void onServerExit()`
- `public void tickServer(BooleanSupplier p_129871_)`
- `private void resetStatusCache(ServerStatus status)`
- `public String getStatusJson()`
- `protected void logTickTime(long p_298126_)`
- `private ServerStatus buildServerStatus()`
- `private ServerStatus.Players buildPlayerStatus()`
- `public void tickChildren(BooleanSupplier p_129954_)`
- `private void synchronizeTime(ServerLevel p_276371_)`
- `public void forceTimeSynchronization()`
- `public boolean isNetherEnabled()`
- `public void addTickable(Runnable p_129947_)`
- `protected void setId(String p_129949_)`
- `public boolean isShutdown()`
- `public File getFile(String p_129972_)`
- `public final ServerLevel overworld()`
- `@Nullable public ServerLevel getLevel(ResourceKey<Level> p_129881_)`
- `public Set<ResourceKey<Level>> levelKeys()`
- `public Iterable<ServerLevel> getAllLevels()`
- `public String getServerVersion()`
- `public int getPlayerCount()`
- `public int getMaxPlayers()`
- `public String[] getPlayerNames()`
- `public String getServerModName()`
- `public SystemReport fillSystemReport(SystemReport p_177936_)`
- `public abstract SystemReport fillServerSystemReport(SystemReport p_177901_)`
- `public ModCheck getModdedStatus()`
- `public void sendSystemMessage(Component p_236736_)`
- `public KeyPair getKeyPair()`
- `public int getPort()`
- `public void setPort(int p_129802_)`
- `@Nullable public com.mojang.authlib.GameProfile getSingleplayerProfile()`
- `public void setSingleplayerProfile(@Nullable  com.mojang.authlib.GameProfile p_236741_)`
- `public boolean isSingleplayer()`
- `protected void initializeKeyPair()`
- `public void setDifficulty(Difficulty p_129828_,  boolean p_129829_)`
- `public int getScaledTrackingDistance(int p_129935_)`
- `private void updateMobSpawningFlags()`
- `public void setDifficultyLocked(boolean p_129959_)`
- `private void sendDifficultyUpdate(ServerPlayer p_129939_)`
- `public boolean isSpawningMonsters()`
- `public boolean isDemo()`
- `public void setDemo(boolean p_129976_)`
- `public Optional<MinecraftServer.ServerResourcePackInfo> getServerResourcePack()`
- `public boolean isResourcePackRequired()`
- `public abstract boolean isDedicatedServer()`
- `public abstract int getRateLimitPacketsPerSecond()`
- `public boolean usesAuthentication()`
- `public void setUsesAuthentication(boolean p_129986_)`
- `public boolean getPreventProxyConnections()`
- `public void setPreventProxyConnections(boolean p_129994_)`
- `public boolean isSpawningAnimals()`
- `public boolean areNpcsEnabled()`
- `public abstract boolean isEpollEnabled()`
- `public boolean isPvpAllowed()`
- `public void setPvpAllowed(boolean p_129998_)`
- `public boolean isFlightAllowed()`
- `public void setFlightAllowed(boolean p_130000_)`
- `public abstract boolean isCommandBlockEnabled()`
- `public String getMotd()`
- `public void setMotd(String p_129990_)`
- `public boolean isStopped()`
- `public PlayerList getPlayerList()`
- `public void setPlayerList(PlayerList p_129824_)`
- `public abstract boolean isPublished()`
- `public void setDefaultGameType(GameType p_129832_)`
- `public ServerConnectionListener getConnection()`
- `public boolean isReady()`
- `public boolean hasGui()`
- `public boolean publishServer(@Nullable  GameType p_129833_,  boolean p_129834_,  int p_129835_)`
- `public int getTickCount()`
- `public int getSpawnProtectionRadius()`
- `public boolean isUnderSpawnProtection(ServerLevel p_129811_,  BlockPos p_129812_,  Player p_129813_)`
- `public boolean repliesToStatus()`
- `public boolean hidesOnlinePlayers()`
- `public Proxy getProxy()`
- `public int getPlayerIdleTimeout()`
- `public void setPlayerIdleTimeout(int p_129978_)`
- `public com.mojang.authlib.minecraft.MinecraftSessionService getSessionService()`
- `@Nullable public SignatureValidator getProfileKeySignatureValidator()`
- `public com.mojang.authlib.GameProfileRepository getProfileRepository()`
- `@Nullable public GameProfileCache getProfileCache()`
- `@Nullable public ServerStatus getStatus()`
- `public void invalidateStatus()`
- `public int getAbsoluteMaxWorldSize()`
- `public boolean scheduleExecutables()`
- `public void executeIfPossible(Runnable p_202482_)`
- `public Thread getRunningThread()`
- `public int getCompressionThreshold()`
- `public boolean enforceSecureProfile()`
- `public long getNextTickTime()`
- `public com.mojang.datafixers.DataFixer getFixerUpper()`
- `public int getSpawnRadius(@Nullable  ServerLevel p_129804_)`
- `public ServerAdvancementManager getAdvancements()`
- `public ServerFunctionManager getFunctions()`
- `public CompletableFuture<Void> reloadResources(Collection<String> p_129862_)`
- `public static WorldDataConfiguration configurePackRepository(PackRepository p_248681_,  DataPackConfig p_248920_,  boolean p_249869_,  FeatureFlagSet p_251243_)`
- `private static DataPackConfig getSelectedPacks(PackRepository p_129818_)`
- `public void kickUnlistedPlayers(CommandSourceStack p_129850_)`
- `public PackRepository getPackRepository()`
- `public Commands getCommands()`
- `public CommandSourceStack createCommandSourceStack()`
- `public boolean acceptsSuccess()`
- `public boolean acceptsFailure()`
- `public abstract boolean shouldInformAdmins()`
- `public RecipeManager getRecipeManager()`
- `public ServerScoreboard getScoreboard()`
- `public CommandStorage getCommandStorage()`
- `public LootDataManager getLootData()`
- `public GameRules getGameRules()`
- `public CustomBossEvents getCustomBossEvents()`
- `public boolean isEnforceWhitelist()`
- `public void setEnforceWhitelist(boolean p_130005_)`
- `public float getAverageTickTime()`
- `public int getProfilePermissions(com.mojang.authlib.GameProfile p_129945_)`
- `public ProfilerFiller getProfiler()`
- `public abstract boolean isSingleplayerOwner(com.mojang.authlib.GameProfile p_129840_)`
- `@Nullable public long[] getTickTime(ResourceKey<Level> dim)`
- `@Deprecated public Map<ResourceKey<Level>,ServerLevel> forgeGetWorldMap()` (deprecated)
- `@Deprecated public void markWorldsDirty()` (deprecated)
- `private ServerLevel[] getWorldArray()`
- `public void dumpServerProperties(Path p_177911_)  throws IOException`
  - throws: IOException
- `private void saveDebugReport(Path p_129860_)`
- `private void dumpMiscStats(Path p_129951_)  throws IOException`
  - throws: IOException
- `private void dumpGameRules(Path p_129984_)  throws IOException`
  - throws: IOException
- `private void dumpClasspath(Path p_129992_)  throws IOException`
  - throws: IOException
- `private void dumpThreads(Path p_129996_)  throws IOException`
  - throws: IOException
- `private void dumpNativeModules(Path p_195522_)  throws IOException`
  - throws: IOException
- `private void startMetricsRecordingTick()`
- `private void endMetricsRecordingTick()`
- `public boolean isRecordingMetrics()`
- `public void startRecordingMetrics(Consumer<ProfileResults> p_177924_,  Consumer<Path> p_177925_)`
- `public void stopRecordingMetrics()`
- `public void finishRecordingMetrics()`
- `public void cancelRecordingMetrics()`
- `public Path getWorldPath(LevelResource p_129844_)`
- `public boolean forceSynchronousWrites()`
- `public StructureTemplateManager getStructureManager()`
- `public WorldData getWorldData()`
- `public MinecraftServer.ReloadableResources getServerResources()`
- `public RegistryAccess.Frozen registryAccess()`
- `public LayeredRegistryAccess<RegistryLayer> registries()`
- `public TextFilter createTextFilterForPlayer(ServerPlayer p_129814_)`
- `public ServerPlayerGameMode createGameModeForPlayer(ServerPlayer p_177934_)`
- `@Nullable public GameType getForcedGameType()`
- `public ResourceManager getResourceManager()`
- `public boolean isCurrentlySaving()`
- `public boolean isTimeProfilerRunning()`
- `public void startTimeProfiler()`
- `public ProfileResults stopTimeProfiler()`
- `public int getMaxChainedNeighborUpdates()`
- `public void logChatMessage(Component p_241503_,  ChatType.Bound p_241402_,  @Nullable  String p_241481_)`
- `public ChatDecorator getChatDecorator()`
- `public boolean logIPs()`

### Inherited methods
- from `net.minecraft.util.thread.ReentrantBlockableEventLoop`: `runningTask`
- from `net.minecraft.util.thread.BlockableEventLoop`: `dropAllTasks`, `execute`, `executeBlocking`, `getPendingTasksCount`, `isSameThread`, `managedBlock`, `name`, `profiledMetrics`, `runAllTasks`, `submit`, `submit`, `submitAsync`, `tell`, `waitForTasks`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraft.util.thread.ProcessorHandle`: `ask`, `askEither`

## MinecraftServer.ReloadableResources

*record* `net.minecraft.server.MinecraftServer.ReloadableResources`

Enclosing class: MinecraftServer

### Fields
- `private final CloseableResourceManager resourceManager`
  The field for the resourceManager record component.
- `private final ReloadableServerResources managers`
  The field for the managers record component.

### Methods
- `public void close()`
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
- `public CloseableResourceManager resourceManager()`
  Returns the value of the resourceManager record component.
  - returns: the value of the resourceManager record component
- `public ReloadableServerResources managers()`
  Returns the value of the managers record component.
  - returns: the value of the managers record component

## MinecraftServer.ServerResourcePackInfo

*record* `net.minecraft.server.MinecraftServer.ServerResourcePackInfo`

Enclosing class: MinecraftServer

### Fields
- `private final String url`
  The field for the url record component.
- `private final String hash`
  The field for the hash record component.
- `private final boolean isRequired`
  The field for the isRequired record component.
- `@Nullable private final Component prompt`
  The field for the prompt record component.

### Methods
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
- `public String url()`
  Returns the value of the url record component.
  - returns: the value of the url record component
- `public String hash()`
  Returns the value of the hash record component.
  - returns: the value of the hash record component
- `public boolean isRequired()`
  Returns the value of the isRequired record component.
  - returns: the value of the isRequired record component
- `@Nullable public Component prompt()`
  Returns the value of the prompt record component.
  - returns: the value of the prompt record component

## MinecraftServer.TimeProfiler

*class* `net.minecraft.server.MinecraftServer.TimeProfiler`

Enclosing class: MinecraftServer

### Fields
- `final long startNanos`
- `final int startTick`

### Methods
- `ProfileResults stop(long p_177961_,  int p_177962_)`

## PlayerAdvancements

*class* `net.minecraft.server.PlayerAdvancements`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final com.google.gson.Gson GSON`
- `private final PlayerList playerList`
- `private final Path playerSavePath`
- `private AdvancementTree tree`
- `private final Map<AdvancementHolder,AdvancementProgress> progress`
- `private final Set<AdvancementHolder> visible`
- `private final Set<AdvancementHolder> progressChanged`
- `private final Set<AdvancementNode> rootsToUpdate`
- `private ServerPlayer player`
- `@Nullable private AdvancementHolder lastSelectedTab`
- `private boolean isFirstPacket`
- `private final com.mojang.serialization.Codec<PlayerAdvancements.Data> codec`

### Methods
- `public void setPlayer(ServerPlayer p_135980_)`
- `public void stopListening()`
- `public void reload(ServerAdvancementManager p_135982_)`
- `private void registerListeners(ServerAdvancementManager p_135995_)`
- `private void checkForAutomaticTriggers(ServerAdvancementManager p_136003_)`
- `private void load(ServerAdvancementManager p_136007_)`
- `public void save()`
- `private void applyFrom(ServerAdvancementManager p_299201_,  PlayerAdvancements.Data p_300341_)`
- `private PlayerAdvancements.Data asData()`
- `public boolean award(AdvancementHolder p_298135_,  String p_135990_)`
- `public boolean revoke(AdvancementHolder p_297905_,  String p_136000_)`
- `private void markForVisibilityUpdate(AdvancementHolder p_298258_)`
- `private void registerListeners(AdvancementHolder p_299071_)`
- `private <T extends CriterionTriggerInstance> void registerListener(AdvancementHolder p_297859_,  String p_300029_,  Criterion<T> p_298869_)`
- `private void unregisterListeners(AdvancementHolder p_298363_)`
- `private <T extends CriterionTriggerInstance> void removeListener(AdvancementHolder p_301071_,  String p_298445_,  Criterion<T> p_297428_)`
- `public void flushDirty(ServerPlayer p_135993_)`
- `public void setSelectedTab(@Nullable  AdvancementHolder p_300452_)`
- `public AdvancementProgress getOrStartProgress(AdvancementHolder p_299379_)`
- `private void startProgress(AdvancementHolder p_299830_,  AdvancementProgress p_135987_)`
- `private void updateTreeVisibility(AdvancementNode p_298387_,  Set<AdvancementHolder> p_265206_,  Set<ResourceLocation> p_265593_)`

## PlayerAdvancements.Data

*record* `net.minecraft.server.PlayerAdvancements.Data`

Enclosing class: PlayerAdvancements

### Fields
- `private final Map<ResourceLocation,AdvancementProgress> map`
  The field for the map record component.
- `public static final com.mojang.serialization.Codec<PlayerAdvancements.Data> CODEC`

### Methods
- `public void forEach(BiConsumer<ResourceLocation,AdvancementProgress> p_298170_)`
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
- `public Map<ResourceLocation,AdvancementProgress> map()`
  Returns the value of the map record component.
  - returns: the value of the map record component

## ReloadableServerResources

*class* `net.minecraft.server.ReloadableServerResources`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final CompletableFuture<Unit> DATA_RELOAD_INITIAL_TASK`
- `private final CommandBuildContext.Configurable commandBuildContext`
- `private final Commands commands`
- `private final RecipeManager recipes`
- `private final TagManager tagManager`
- `private final LootDataManager lootData`
- `private final ServerAdvancementManager advancements`
- `private final ServerFunctionLibrary functionLibrary`
- `private final ICondition.IContext context`

### Methods
- `public ServerFunctionLibrary getFunctionLibrary()`
- `public LootDataManager getLootData()`
- `public RecipeManager getRecipeManager()`
- `public Commands getCommands()`
- `public ServerAdvancementManager getAdvancements()`
- `public List<PreparableReloadListener> listeners()`
- `public static CompletableFuture<ReloadableServerResources> loadResources(ResourceManager p_248588_,  RegistryAccess.Frozen p_251163_,  FeatureFlagSet p_250212_,  Commands.CommandSelection p_249301_,  int p_251126_,  Executor p_249136_,  Executor p_249601_)`
- `public void updateRegistryTags(RegistryAccess p_206869_)`
- `private static <T> void updateRegistryTags(RegistryAccess p_206871_,  TagManager.LoadResult<T> p_206872_)`
- `public ICondition.IContext getConditionContext()`
  Exposes the current condition context for usage in other reload listeners.
  
   This is not useful outside the reloading stage.
  - returns: The condition context for the currently active reload.

## RunningOnDifferentThreadException

*class* `net.minecraft.server.RunningOnDifferentThreadException`

### Fields
- `public static final RunningOnDifferentThreadException RUNNING_ON_DIFFERENT_THREAD`

### Methods
- `public Throwable fillInStackTrace()`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ServerAdvancementManager

*class* `net.minecraft.server.ServerAdvancementManager`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final com.google.gson.Gson GSON`
- `private Map<ResourceLocation,AdvancementHolder> advancements`
- `private AdvancementTree tree`
- `private final LootDataManager lootData`
- `private final ICondition.IContext context`

### Methods
- `protected void apply(Map<ResourceLocation,com.google.gson.JsonElement> p_136034_,  ResourceManager p_136035_,  ProfilerFiller p_136036_)`
- `@Nullable public AdvancementHolder get(ResourceLocation p_299615_)`
- `public AdvancementTree tree()`
- `public Collection<AdvancementHolder> getAllAdvancements()`

### Inherited methods
- from `net.minecraft.server.packs.resources.SimpleJsonResourceReloadListener`: `getPreparedPath`, `prepare`, `scanDirectory`
- from `net.minecraft.server.packs.resources.SimplePreparableReloadListener`: `reload`
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## ServerFunctionLibrary

*class* `net.minecraft.server.ServerFunctionLibrary`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final FileToIdConverter LISTER`
- `private volatile Map<ResourceLocation,CommandFunction> functions`
- `private final TagLoader<CommandFunction> tagsLoader`
- `private volatile Map<ResourceLocation,Collection<CommandFunction>> tags`
- `private final int functionCompilationLevel`
- `private final com.mojang.brigadier.CommandDispatcher<CommandSourceStack> dispatcher`

### Methods
- `public Optional<CommandFunction> getFunction(ResourceLocation p_136090_)`
- `public Map<ResourceLocation,CommandFunction> getFunctions()`
- `public Collection<CommandFunction> getTag(ResourceLocation p_214328_)`
- `public Iterable<ResourceLocation> getAvailableTags()`
- `public CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier p_136057_,  ResourceManager p_136058_,  ProfilerFiller p_136059_,  ProfilerFiller p_136060_,  Executor p_136061_,  Executor p_136062_)`
- `private static List<String> readLines(Resource p_214317_)`

### Inherited methods
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## ServerFunctionManager

*class* `net.minecraft.server.ServerFunctionManager`

### Fields
- `private static final Component NO_RECURSIVE_TRACES`
- `private static final ResourceLocation TICK_FUNCTION_TAG`
- `private static final ResourceLocation LOAD_FUNCTION_TAG`
- `final MinecraftServer server`
- `@Nullable private ServerFunctionManager.ExecutionContext context`
- `private List<CommandFunction> ticking`
- `private boolean postReload`
- `private ServerFunctionLibrary library`

### Methods
- `public int getCommandLimit()`
- `public com.mojang.brigadier.CommandDispatcher<CommandSourceStack> getDispatcher()`
- `public void tick()`
- `private void executeTagFunctions(Collection<CommandFunction> p_136116_,  ResourceLocation p_136117_)`
- `public int execute(CommandFunction p_136113_,  CommandSourceStack p_136114_)`
- `public int execute(CommandFunction p_179961_,  CommandSourceStack p_179962_,  @Nullable  ServerFunctionManager.TraceCallbacks p_179963_,  @Nullable  CompoundTag p_300204_)  throws FunctionInstantiationException`
  - throws: FunctionInstantiationException
- `public void replaceLibrary(ServerFunctionLibrary p_136121_)`
- `private void postReload(ServerFunctionLibrary p_136126_)`
- `public CommandSourceStack getGameLoopSender()`
- `public Optional<CommandFunction> get(ResourceLocation p_136119_)`
- `public Collection<CommandFunction> getTag(ResourceLocation p_214332_)`
- `public Iterable<ResourceLocation> getFunctionNames()`
- `public Iterable<ResourceLocation> getTagNames()`

## ServerFunctionManager.ExecutionContext

*class* `net.minecraft.server.ServerFunctionManager.ExecutionContext`

Enclosing class: ServerFunctionManager

### Fields
- `private int depth`
- `@Nullable private final ServerFunctionManager.TraceCallbacks tracer`
- `private final Deque<ServerFunctionManager.QueuedCommand> commandQueue`
- `private final List<ServerFunctionManager.QueuedCommand> nestedCalls`
- `boolean abortCurrentDepth`

### Methods
- `void delayFunctionCall(CommandFunction p_179973_,  CommandSourceStack p_179974_)`
- `private CommandSourceStack wrapSender(CommandSourceStack p_282848_)`
- `int runTopCommand(CommandFunction p_179978_,  CommandSourceStack p_179979_)`
- `public void reportError(String p_179976_)`

## ServerFunctionManager.ExecutionContext.AbortingReturnValueConsumer

*class* `net.minecraft.server.ServerFunctionManager.ExecutionContext.AbortingReturnValueConsumer`

Enclosing class: ServerFunctionManager.ExecutionContext

### Fields
- `private final IntConsumer wrapped`

### Methods
- `public void accept(int p_281286_)`

### Inherited methods
- from `java.util.function.IntConsumer`: `andThen`

## ServerFunctionManager.QueuedCommand

*class* `net.minecraft.server.ServerFunctionManager.QueuedCommand`

Enclosing class: ServerFunctionManager

### Fields
- `private final CommandSourceStack sender`
- `final int depth`
- `private final CommandFunction.Entry entry`

### Methods
- `public void execute(ServerFunctionManager p_179986_,  Deque<ServerFunctionManager.QueuedCommand> p_179987_,  int p_179988_,  @Nullable  ServerFunctionManager.TraceCallbacks p_179989_)`
- `public String toString()`

## ServerFunctionManager.TraceCallbacks

*interface* `net.minecraft.server.ServerFunctionManager.TraceCallbacks`

Enclosing class: ServerFunctionManager

### Methods
- `void onCommand(int p_179990_,  String p_179991_)`
- `void onReturn(int p_179992_,  String p_179993_,  int p_179994_)`
- `void onError(int p_179998_,  String p_179999_)`
- `void onCall(int p_179995_,  ResourceLocation p_179996_,  int p_179997_)`

## ServerInfo

*interface* `net.minecraft.server.ServerInfo`

### Methods
- `String getMotd()`
- `String getServerVersion()`
- `int getPlayerCount()`
- `int getMaxPlayers()`

## ServerInterface

*interface* `net.minecraft.server.ServerInterface`

All Superinterfaces: ServerInfo

### Methods
- `DedicatedServerProperties getProperties()`
- `String getServerIp()`
- `int getServerPort()`
- `String getServerName()`
- `String[] getPlayerNames()`
- `String getLevelIdName()`
- `String getPluginNames()`
- `String runCommand(String p_136143_)`

### Inherited methods
- from `net.minecraft.server.ServerInfo`: `getMaxPlayers`, `getMotd`, `getPlayerCount`, `getServerVersion`

## ServerScoreboard

*class* `net.minecraft.server.ServerScoreboard`

### Fields
- `private final MinecraftServer server`
- `private final Set<Objective> trackedObjectives`
- `private final List<Runnable> dirtyListeners`

### Methods
- `public void onScoreChanged(Score p_136206_)`
- `public void onPlayerRemoved(String p_136210_)`
- `public void onPlayerScoreRemoved(String p_136212_,  Objective p_136213_)`
- `public void setDisplayObjective(DisplaySlot p_297629_,  @Nullable  Objective p_136200_)`
- `public boolean addPlayerToTeam(String p_136215_,  PlayerTeam p_136216_)`
- `public void removePlayerFromTeam(String p_136223_,  PlayerTeam p_136224_)`
- `public void onObjectiveAdded(Objective p_136202_)`
- `public void onObjectiveChanged(Objective p_136219_)`
- `public void onObjectiveRemoved(Objective p_136226_)`
- `public void onTeamAdded(PlayerTeam p_136204_)`
- `public void onTeamChanged(PlayerTeam p_136221_)`
- `public void onTeamRemoved(PlayerTeam p_136228_)`
- `public void addDirtyListener(Runnable p_136208_)`
- `protected void setDirty()`
- `public List<Packet<?>> getStartTrackingPackets(Objective p_136230_)`
- `public void startTrackingObjective(Objective p_136232_)`
- `public List<Packet<?>> getStopTrackingPackets(Objective p_136234_)`
- `public void stopTrackingObjective(Objective p_136236_)`
- `public int getObjectiveDisplaySlotCount(Objective p_136238_)`
- `public SavedData.Factory<ScoreboardSaveData> dataFactory()`
- `private ScoreboardSaveData createData()`
- `private ScoreboardSaveData createData(CompoundTag p_180014_)`

### Inherited methods
- from `net.minecraft.world.scores.Scoreboard`: `addObjective`, `addPlayerTeam`, `entityRemoved`, `forAllObjectives`, `getDisplayObjective`, `getObjective`, `getObjectiveNames`, `getObjectives`, `getOrCreatePlayerScore`, `getPlayerScores`, `getPlayerScores`, `getPlayersTeam`, `getPlayerTeam`, `getPlayerTeams`, `getTeamNames`, `getTrackedPlayers`, `hasPlayerScore`, `loadPlayerScores`, `removeObjective`, `removePlayerFromTeam`, `removePlayerTeam`, `resetPlayerScore`, `savePlayerScores`

## Services

*record* `net.minecraft.server.Services`

### Fields
- `private final com.mojang.authlib.minecraft.MinecraftSessionService sessionService`
  The field for the sessionService record component.
- `private final com.mojang.authlib.yggdrasil.ServicesKeySet servicesKeySet`
  The field for the servicesKeySet record component.
- `private final com.mojang.authlib.GameProfileRepository profileRepository`
  The field for the profileRepository record component.
- `private final GameProfileCache profileCache`
  The field for the profileCache record component.
- `private static final String USERID_CACHE_FILE` (= "usercache.json")

### Methods
- `public static Services create(com.mojang.authlib.yggdrasil.YggdrasilAuthenticationService p_214345_,  File p_214346_)`
- `@Nullable public SignatureValidator profileKeySignatureValidator()`
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
- `public com.mojang.authlib.minecraft.MinecraftSessionService sessionService()`
  Returns the value of the sessionService record component.
  - returns: the value of the sessionService record component
- `public com.mojang.authlib.yggdrasil.ServicesKeySet servicesKeySet()`
  Returns the value of the servicesKeySet record component.
  - returns: the value of the servicesKeySet record component
- `public com.mojang.authlib.GameProfileRepository profileRepository()`
  Returns the value of the profileRepository record component.
  - returns: the value of the profileRepository record component
- `public GameProfileCache profileCache()`
  Returns the value of the profileCache record component.
  - returns: the value of the profileCache record component

## TickTask

*class* `net.minecraft.server.TickTask`

### Fields
- `private final int tick`
- `private final Runnable runnable`

### Methods
- `public int getTick()`
- `public void run()`

## WorldLoader

*class* `net.minecraft.server.WorldLoader`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Methods
- `public static <D, R> CompletableFuture<R> load(WorldLoader.InitConfig p_214363_,  WorldLoader.WorldDataSupplier<D> p_214364_,  WorldLoader.ResultFactory<D,R> p_214365_,  Executor p_214366_,  Executor p_214367_)`
- `private static RegistryAccess.Frozen loadLayer(ResourceManager p_251529_,  LayeredRegistryAccess<RegistryLayer> p_250737_,  RegistryLayer p_250790_,  List<RegistryDataLoader.RegistryData<?>> p_249516_)`
- `private static LayeredRegistryAccess<RegistryLayer> loadAndReplaceLayer(ResourceManager p_249913_,  LayeredRegistryAccess<RegistryLayer> p_252077_,  RegistryLayer p_250346_,  List<RegistryDataLoader.RegistryData<?>> p_250589_)`

## WorldLoader.DataLoadContext

*record* `net.minecraft.server.WorldLoader.DataLoadContext`

Enclosing class: WorldLoader

### Fields
- `private final ResourceManager resources`
  The field for the resources record component.
- `private final WorldDataConfiguration dataConfiguration`
  The field for the dataConfiguration record component.
- `private final RegistryAccess.Frozen datapackWorldgen`
  The field for the datapackWorldgen record component.
- `private final RegistryAccess.Frozen datapackDimensions`
  The field for the datapackDimensions record component.

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
- `public ResourceManager resources()`
  Returns the value of the resources record component.
  - returns: the value of the resources record component
- `public WorldDataConfiguration dataConfiguration()`
  Returns the value of the dataConfiguration record component.
  - returns: the value of the dataConfiguration record component
- `public RegistryAccess.Frozen datapackWorldgen()`
  Returns the value of the datapackWorldgen record component.
  - returns: the value of the datapackWorldgen record component
- `public RegistryAccess.Frozen datapackDimensions()`
  Returns the value of the datapackDimensions record component.
  - returns: the value of the datapackDimensions record component

## WorldLoader.DataLoadOutput

*record* `net.minecraft.server.WorldLoader.DataLoadOutput`

Enclosing class: WorldLoader

### Fields
- `private final D cookie`
  The field for the cookie record component.
- `private final RegistryAccess.Frozen finalDimensions`
  The field for the finalDimensions record component.

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
- `public D cookie()`
  Returns the value of the cookie record component.
  - returns: the value of the cookie record component
- `public RegistryAccess.Frozen finalDimensions()`
  Returns the value of the finalDimensions record component.
  - returns: the value of the finalDimensions record component

## WorldLoader.InitConfig

*record* `net.minecraft.server.WorldLoader.InitConfig`

Enclosing class: WorldLoader

### Fields
- `private final WorldLoader.PackConfig packConfig`
  The field for the packConfig record component.
- `private final Commands.CommandSelection commandSelection`
  The field for the commandSelection record component.
- `private final int functionCompilationLevel`
  The field for the functionCompilationLevel record component.

### Methods
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
- `public WorldLoader.PackConfig packConfig()`
  Returns the value of the packConfig record component.
  - returns: the value of the packConfig record component
- `public Commands.CommandSelection commandSelection()`
  Returns the value of the commandSelection record component.
  - returns: the value of the commandSelection record component
- `public int functionCompilationLevel()`
  Returns the value of the functionCompilationLevel record component.
  - returns: the value of the functionCompilationLevel record component

## WorldLoader.PackConfig

*record* `net.minecraft.server.WorldLoader.PackConfig`

Enclosing class: WorldLoader

### Fields
- `private final PackRepository packRepository`
  The field for the packRepository record component.
- `private final WorldDataConfiguration initialDataConfig`
  The field for the initialDataConfig record component.
- `private final boolean safeMode`
  The field for the safeMode record component.
- `private final boolean initMode`
  The field for the initMode record component.

### Methods
- `public com.mojang.datafixers.util.Pair<WorldDataConfiguration,CloseableResourceManager> createResourceManager()`
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
- `public PackRepository packRepository()`
  Returns the value of the packRepository record component.
  - returns: the value of the packRepository record component
- `public WorldDataConfiguration initialDataConfig()`
  Returns the value of the initialDataConfig record component.
  - returns: the value of the initialDataConfig record component
- `public boolean safeMode()`
  Returns the value of the safeMode record component.
  - returns: the value of the safeMode record component
- `public boolean initMode()`
  Returns the value of the initMode record component.
  - returns: the value of the initMode record component

## WorldLoader.ResultFactory

*interface* `net.minecraft.server.WorldLoader.ResultFactory`

Enclosing class: WorldLoader

### Methods
- `R create(CloseableResourceManager p_214408_,  ReloadableServerResources p_214409_,  LayeredRegistryAccess<RegistryLayer> p_248844_,  D p_214411_)`

## WorldLoader.WorldDataSupplier

*interface* `net.minecraft.server.WorldLoader.WorldDataSupplier`

Enclosing class: WorldLoader

### Methods
- `WorldLoader.DataLoadOutput<D> get(WorldLoader.DataLoadContext p_251042_)`

## WorldStem

*record* `net.minecraft.server.WorldStem`

### Fields
- `private final CloseableResourceManager resourceManager`
  The field for the resourceManager record component.
- `private final ReloadableServerResources dataPackResources`
  The field for the dataPackResources record component.
- `private final LayeredRegistryAccess<RegistryLayer> registries`
  The field for the registries record component.
- `private final WorldData worldData`
  The field for the worldData record component.

### Methods
- `public void close()`
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
- `public CloseableResourceManager resourceManager()`
  Returns the value of the resourceManager record component.
  - returns: the value of the resourceManager record component
- `public ReloadableServerResources dataPackResources()`
  Returns the value of the dataPackResources record component.
  - returns: the value of the dataPackResources record component
- `public LayeredRegistryAccess<RegistryLayer> registries()`
  Returns the value of the registries record component.
  - returns: the value of the registries record component
- `public WorldData worldData()`
  Returns the value of the worldData record component.
  - returns: the value of the worldData record component
