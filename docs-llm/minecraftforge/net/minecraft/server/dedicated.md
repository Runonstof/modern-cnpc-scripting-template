# net.minecraft.server.dedicated

- [DedicatedPlayerList](#dedicatedplayerlist)
- [DedicatedServer](#dedicatedserver)
- [DedicatedServerProperties](#dedicatedserverproperties)
- [DedicatedServerProperties.WorldDimensionData](#dedicatedserverproperties.worlddimensiondata)
- [DedicatedServerSettings](#dedicatedserversettings)
- [ServerWatchdog](#serverwatchdog)
- [Settings.MutableValue](#settings.mutablevalue)
- [Settings>](#settings)
## DedicatedPlayerList

*class* `net.minecraft.server.dedicated.DedicatedPlayerList`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Inherited fields
- from `net.minecraft.server.players.PlayerList`: `CHAT_FILTERED_FULL`, `DUPLICATE_LOGIN_DISCONNECT_MESSAGE`, `IPBANLIST_FILE`, `maxPlayers`, `OPLIST_FILE`, `USERBANLIST_FILE`, `WHITELIST_FILE`

### Methods
- `public void setUsingWhiteList(boolean p_139584_)`
- `public void op(com.mojang.authlib.GameProfile p_139582_)`
- `public void deop(com.mojang.authlib.GameProfile p_139587_)`
- `public void reloadWhiteList()`
- `private void saveIpBanList()`
- `private void saveUserBanList()`
- `private void loadIpBanList()`
- `private void loadUserBanList()`
- `private void loadOps()`
- `private void saveOps()`
- `private void loadWhiteList()`
- `private void saveWhiteList()`
- `public boolean isWhiteListed(com.mojang.authlib.GameProfile p_139590_)`
- `public DedicatedServer getServer()`
- `public boolean canBypassPlayerLimit(com.mojang.authlib.GameProfile p_139592_)`

### Inherited methods
- from `net.minecraft.server.players.PlayerList`: `addWorldborderListener`, `broadcast`, `broadcastAll`, `broadcastAll`, `broadcastChatMessage`, `broadcastChatMessage`, `broadcastSystemMessage`, `broadcastSystemMessage`, `broadcastSystemToAllExceptTeam`, `broadcastSystemToTeam`, `canPlayerLogin`, `disconnectAllPlayersWithProfile`, `getBans`, `getIpBans`, `getMaxPlayers`, `getOpNames`, `getOps`, `getPlayer`, `getPlayerAdvancements`, `getPlayerByName`, `getPlayerCount`, `getPlayerForLogin`, `getPlayerNamesArray`, `getPlayers`, `getPlayerStats`, `getPlayersWithAddress`, `getSimulationDistance`, `getSingleplayerData`, `getViewDistance`, `getWhiteList`, `getWhiteListNames`, `isAllowCheatsForAllPlayers`, `isOp`, `isUsingWhitelist`, `load`, `placeNewPlayer`, `reloadResources`, `remove`, `removeAll`, `respawn`, `save`, `saveAll`, `sendAllPlayerInfo`, `sendLevelInfo`, `sendPlayerPermissionLevel`, `setAllowCheatsForAllPlayers`, `setSimulationDistance`, `setViewDistance`, `tick`, `updateEntireScoreboard`

## DedicatedServer

*class* `net.minecraft.server.dedicated.DedicatedServer`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `private static final int CONVERSION_RETRY_DELAY_MS` (= 5000)
- `private static final int CONVERSION_RETRIES` (= 2)
- `public final List<ConsoleInput> consoleInput`
- `@Nullable private QueryThreadGs4 queryThreadGs4`
- `private final RconConsoleSource rconConsoleSource`
- `@Nullable private RconThread rconThread`
- `private final DedicatedServerSettings settings`
- `@Nullable private MinecraftServerGui gui`
- `@Nullable private final TextFilterClient textFilterClient`
- `@Nullable private LanServerPinger dediLanPinger`

### Inherited fields
- from `net.minecraft.server.MinecraftServer`: `ABSOLUTE_MAX_WORLD_SIZE`, `ANONYMOUS_PLAYER_PROFILE`, `DEMO_SETTINGS`, `MS_PER_TICK`, `nextTickTime`, `playerDataStorage`, `proxy`, `services`, `START_CHUNK_RADIUS`, `storageSource`, `tickTimes`, `VANILLA_BRAND`, `worldData`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `public boolean initServer()  throws IOException`
  - throws: IOException
- `public boolean isSpawningAnimals()`
- `public boolean isSpawningMonsters()`
- `public boolean areNpcsEnabled()`
- `public DedicatedServerProperties getProperties()`
- `public void forceDifficulty()`
- `public boolean isHardcore()`
- `public SystemReport fillServerSystemReport(SystemReport p_142870_)`
- `public void dumpServerProperties(Path p_142872_)  throws IOException`
  - throws: IOException
- `public void onServerExit()`
- `public void tickChildren(BooleanSupplier p_139661_)`
- `public boolean isNetherEnabled()`
- `public void handleConsoleInput(String p_139646_,  CommandSourceStack p_139647_)`
- `public void handleConsoleInputs()`
- `public boolean isDedicatedServer()`
- `public int getRateLimitPacketsPerSecond()`
- `public boolean isEpollEnabled()`
- `public DedicatedPlayerList getPlayerList()`
- `public boolean isPublished()`
- `public String getServerIp()`
- `public int getServerPort()`
- `public String getServerName()`
- `public void showGui()`
- `public boolean hasGui()`
- `public boolean isCommandBlockEnabled()`
- `public int getSpawnProtectionRadius()`
- `public boolean isUnderSpawnProtection(ServerLevel p_139630_,  BlockPos p_139631_,  Player p_139632_)`
- `public boolean repliesToStatus()`
- `public boolean hidesOnlinePlayers()`
- `public int getOperatorUserPermissionLevel()`
- `public int getFunctionCompilationLevel()`
- `public void setPlayerIdleTimeout(int p_139676_)`
- `public boolean shouldRconBroadcast()`
- `public boolean shouldInformAdmins()`
- `public int getAbsoluteMaxWorldSize()`
- `public int getCompressionThreshold()`
- `public boolean enforceSecureProfile()`
- `public boolean logIPs()`
- `protected boolean convertOldUsers()`
- `private void waitForRetry()`
- `public long getMaxTickLength()`
- `public int getMaxChainedNeighborUpdates()`
- `public String getPluginNames()`
- `public String runCommand(String p_139644_)`
- `public void storeUsingWhiteList(boolean p_139689_)`
- `public void stopServer()`
- `public boolean isSingleplayerOwner(com.mojang.authlib.GameProfile p_139642_)`
- `public int getScaledTrackingDistance(int p_139659_)`
- `public String getLevelIdName()`
- `public boolean forceSynchronousWrites()`
- `public TextFilter createTextFilterForPlayer(ServerPlayer p_139634_)`
- `@Nullable public GameType getForcedGameType()`
- `public Optional<MinecraftServer.ServerResourcePackInfo> getServerResourcePack()`

### Inherited methods
- from `net.minecraft.server.MinecraftServer`: `acceptsFailure`, `acceptsSuccess`, `addTickable`, `cancelRecordingMetrics`, `close`, `configurePackRepository`, `createCommandSourceStack`, `createGameModeForPlayer`, `createLevels`, `doRunTask`, `executeIfPossible`, `fillSystemReport`, `finishRecordingMetrics`, `forceTimeSynchronization`, `forgeGetWorldMap`, `getAdvancements`, `getAllLevels`, `getAverageTickTime`, `getChatDecorator`, `getCommands`, `getCommandStorage`, `getConnection`, `getCustomBossEvents`, `getDefaultGameType`, `getFile`, `getFixerUpper`, `getFunctions`, `getGameRules`, `getKeyPair`, `getLevel`, `getLocalIp`, `getLootData`, `getMaxPlayers`, `getModdedStatus`, `getMotd`, `getNextTickTime`, `getPackRepository`, `getPlayerCount`, `getPlayerIdleTimeout`, `getPlayerNames`, `getPort`, `getPreventProxyConnections`, `getProfileCache`, `getProfileKeySignatureValidator`, `getProfilePermissions`, `getProfiler`, `getProfileRepository`, `getProxy`, `getRecipeManager`, `getResourceManager`, `getRunningThread`, `getScoreboard`, `getServerDirectory`, `getServerModName`, `getServerResources`, `getServerVersion`, `getSessionService`, `getSingleplayerProfile`, `getSpawnRadius`, `getStatus`, `getStatusJson`, `getStructureManager`, `getTickCount`, `getTickTime`, `getWorldData`, `getWorldPath`, `getWorldScreenshotFile`, `halt`, `initializeKeyPair`, `invalidateStatus`, `isCurrentlySaving`, `isDemo`, `isEnforceWhitelist`, `isFlightAllowed`, `isPvpAllowed`, `isReady`, `isRecordingMetrics`, `isResourcePackRequired`, `isRunning`, `isShutdown`, `isSingleplayer`, `isStopped`, `isTimeProfilerRunning`, `kickUnlistedPlayers`, `levelKeys`, `loadLevel`, `logChatMessage`, `logTickTime`, `markWorldsDirty`, `onServerCrash`, `overworld`, `pollTask`, `publishServer`, `registries`, `registryAccess`, `reloadResources`, `runServer`, `saveAllChunks`, `saveEverything`, `scheduleExecutables`, `sendSystemMessage`, `setDefaultGameType`, `setDemo`, `setDifficulty`, `setDifficultyLocked`, `setEnforceWhitelist`, `setFlightAllowed`, `setId`, `setLocalIp`, `setMotd`, `setPlayerList`, `setPort`, `setPreventProxyConnections`, `setPvpAllowed`, `setSingleplayerProfile`, `setUsesAuthentication`, `shouldRun`, `spin`, `startRecordingMetrics`, `startTimeProfiler`, `stopRecordingMetrics`, `stopTimeProfiler`, `tickServer`, `usesAuthentication`, `waitUntilNextTick`, `wrapRunnable`
- from `net.minecraft.util.thread.ReentrantBlockableEventLoop`: `runningTask`
- from `net.minecraft.util.thread.BlockableEventLoop`: `dropAllTasks`, `execute`, `executeBlocking`, `getPendingTasksCount`, `isSameThread`, `managedBlock`, `name`, `profiledMetrics`, `runAllTasks`, `submit`, `submit`, `submitAsync`, `tell`, `waitForTasks`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraft.util.thread.ProcessorHandle`: `ask`, `askEither`
- from `net.minecraft.server.ServerInfo`: `getMaxPlayers`, `getMotd`, `getPlayerCount`, `getServerVersion`
- from `net.minecraft.server.ServerInterface`: `getPlayerNames`

## DedicatedServerProperties

*class* `net.minecraft.server.dedicated.DedicatedServerProperties`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `private static final Pattern SHA1`
- `private static final com.google.common.base.Splitter COMMA_SPLITTER`
- `public final boolean onlineMode`
- `public final boolean preventProxyConnections`
- `public final String serverIp`
- `public final boolean spawnAnimals`
- `public final boolean spawnNpcs`
- `public final boolean pvp`
- `public final boolean allowFlight`
- `public final String motd`
- `public final boolean forceGameMode`
- `public final boolean enforceWhitelist`
- `public final Difficulty difficulty`
- `public final GameType gamemode`
- `public final String levelName`
- `public final int serverPort`
- `@Nullable public final Boolean announcePlayerAchievements`
- `public final boolean enableQuery`
- `public final int queryPort`
- `public final boolean enableRcon`
- `public final int rconPort`
- `public final String rconPassword`
- `public final boolean hardcore`
- `public final boolean allowNether`
- `public final boolean spawnMonsters`
- `public final boolean useNativeTransport`
- `public final boolean enableCommandBlock`
- `public final int spawnProtection`
- `public final int opPermissionLevel`
- `public final int functionPermissionLevel`
- `public final long maxTickTime`
- `public final int maxChainedNeighborUpdates`
- `public final int rateLimitPacketsPerSecond`
- `public final int viewDistance`
- `public final int simulationDistance`
- `public final int maxPlayers`
- `public final int networkCompressionThreshold`
- `public final boolean broadcastRconToOps`
- `public final boolean broadcastConsoleToOps`
- `public final int maxWorldSize`
- `public final boolean syncChunkWrites`
- `public final boolean enableJmxMonitoring`
- `public final boolean enableStatus`
- `public final boolean hideOnlinePlayers`
- `public final int entityBroadcastRangePercentage`
- `public final String textFilteringConfig`
- `public final Optional<MinecraftServer.ServerResourcePackInfo> serverResourcePackInfo`
- `public final DataPackConfig initialDataPackConfiguration`
- `public final Settings<DedicatedServerProperties>.MutableValue<Integer> playerIdleTimeout`
- `public final Settings<DedicatedServerProperties>.MutableValue<Boolean> whiteList`
- `public final boolean enforceSecureProfile`
- `public final boolean logIPs`
- `private final DedicatedServerProperties.WorldDimensionData worldDimensionData`
- `public final WorldOptions worldOptions`

### Inherited fields
- from `net.minecraft.server.dedicated.Settings`: `properties`

### Methods
- `public static DedicatedServerProperties fromFile(Path p_180930_)`
- `protected DedicatedServerProperties reload(RegistryAccess p_139761_,  Properties p_139762_)`
- `@Nullable private static Component parseResourcePackPrompt(String p_214815_)`
- `private static Optional<MinecraftServer.ServerResourcePackInfo> getServerPackInfo(String p_214809_,  String p_214810_,  @Nullable  String p_214811_,  boolean p_214812_,  String p_214813_)`
- `private static DataPackConfig getDatapackConfig(String p_251757_,  String p_249979_)`
- `private static FeatureFlagSet getFeatures(String p_251025_)`
- `public WorldDimensions createDimensions(RegistryAccess p_250466_)`

### Inherited methods
- from `net.minecraft.server.dedicated.Settings`: `cloneProperties`, `dispatchNumberOrString`, `get`, `get`, `get`, `get`, `get`, `get`, `get`, `get`, `getLegacy`, `getLegacyBoolean`, `getLegacyString`, `getMutable`, `getMutable`, `getMutable`, `getMutable`, `loadFromFile`, `store`

## DedicatedServerProperties.WorldDimensionData

*record* `net.minecraft.server.dedicated.DedicatedServerProperties.WorldDimensionData`

Enclosing class: DedicatedServerProperties

### Fields
- `private final com.google.gson.JsonObject generatorSettings`
  The field for the generatorSettings record component.
- `private final String levelType`
  The field for the levelType record component.
- `private static final Map<String,ResourceKey<WorldPreset>> LEGACY_PRESET_NAMES`

### Methods
- `public WorldDimensions create(RegistryAccess p_248812_)`
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
- `public com.google.gson.JsonObject generatorSettings()`
  Returns the value of the generatorSettings record component.
  - returns: the value of the generatorSettings record component
- `public String levelType()`
  Returns the value of the levelType record component.
  - returns: the value of the levelType record component

## DedicatedServerSettings

*class* `net.minecraft.server.dedicated.DedicatedServerSettings`

### Fields
- `private final Path source`
- `private DedicatedServerProperties properties`

### Methods
- `public DedicatedServerProperties getProperties()`
- `public void forceSave()`
- `public DedicatedServerSettings update(UnaryOperator<DedicatedServerProperties> p_139779_)`

## ServerWatchdog

*class* `net.minecraft.server.dedicated.ServerWatchdog`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final long MAX_SHUTDOWN_TIME` (= 10000L)
- `private static final int SHUTDOWN_STATUS` (= 1)
- `private final DedicatedServer server`
- `private final long maxTickTime`

### Methods
- `public void run()`
- `private void exit()`

## Settings.MutableValue

*class* `net.minecraft.server.dedicated.Settings.MutableValue`

Enclosing class: Settings<T extends Settings<T>>

### Fields
- `private final String key`
- `private final V value`
- `private final Function<V,String> serializer`

### Methods
- `public V get()`
- `public T update(RegistryAccess p_139896_,  V p_139897_)`

## Settings>

*class* `net.minecraft.server.dedicated.Settings>`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `protected final Properties properties`

### Methods
- `public static Properties loadFromFile(Path p_139840_)`
- `public void store(Path p_139877_)`
- `private static <V extends Number> Function<String,V> wrapNumberDeserializer(Function<String,V> p_139842_)`
- `protected static <V> Function<String,V> dispatchNumberOrString(IntFunction<V> p_139851_,  Function<String,V> p_139852_)`
- `@Nullable private String getStringRaw(String p_139879_)`
- `@Nullable protected <V> V getLegacy(String p_139815_,  Function<String,V> p_139816_)`
- `protected <V> V get(String p_139822_,  Function<String,V> p_139823_,  Function<V,String> p_139824_,  V p_139825_)`
- `protected <V> Settings<T>.MutableValue<V> getMutable(String p_139869_,  Function<String,V> p_139870_,  Function<V,String> p_139871_,  V p_139872_)`
- `protected <V> V get(String p_139827_,  Function<String,V> p_139828_,  UnaryOperator<V> p_139829_,  Function<V,String> p_139830_,  V p_139831_)`
- `protected <V> V get(String p_139818_,  Function<String,V> p_139819_,  V p_139820_)`
- `protected <V> Settings<T>.MutableValue<V> getMutable(String p_139865_,  Function<String,V> p_139866_,  V p_139867_)`
- `protected String get(String p_139812_,  String p_139813_)`
- `@Nullable protected String getLegacyString(String p_139804_)`
- `protected int get(String p_139806_,  int p_139807_)`
- `protected Settings<T>.MutableValue<Integer> getMutable(String p_139862_,  int p_139863_)`
- `protected int get(String p_139833_,  UnaryOperator<Integer> p_139834_,  int p_139835_)`
- `protected long get(String p_139809_,  long p_139810_)`
- `protected boolean get(String p_139837_,  boolean p_139838_)`
- `protected Settings<T>.MutableValue<Boolean> getMutable(String p_139874_,  boolean p_139875_)`
- `@Nullable protected Boolean getLegacyBoolean(String p_139860_)`
- `protected Properties cloneProperties()`
- `protected abstract T reload(RegistryAccess p_139857_,  Properties p_139858_)`
