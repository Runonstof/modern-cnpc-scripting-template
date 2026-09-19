# net.minecraft.client.server

- [IntegratedPlayerList](#integratedplayerlist)
- [IntegratedServer](#integratedserver)
- [LanServer](#lanserver)
- [LanServerDetection](#lanserverdetection)
- [LanServerDetection.LanServerDetector](#lanserverdetection.lanserverdetector)
- [LanServerDetection.LanServerList](#lanserverdetection.lanserverlist)
- [LanServerPinger](#lanserverpinger)
## IntegratedPlayerList

*class* `net.minecraft.client.server.IntegratedPlayerList`

### Fields
- `private CompoundTag playerData`

### Inherited fields
- from `net.minecraft.server.players.PlayerList`: `CHAT_FILTERED_FULL`, `DUPLICATE_LOGIN_DISCONNECT_MESSAGE`, `IPBANLIST_FILE`, `maxPlayers`, `OPLIST_FILE`, `USERBANLIST_FILE`, `WHITELIST_FILE`

### Methods
- `protected void save(ServerPlayer p_120011_)`
- `public Component canPlayerLogin(SocketAddress p_120007_,  com.mojang.authlib.GameProfile p_120008_)`
- `public IntegratedServer getServer()`
- `public CompoundTag getSingleplayerData()`

### Inherited methods
- from `net.minecraft.server.players.PlayerList`: `addWorldborderListener`, `broadcast`, `broadcastAll`, `broadcastAll`, `broadcastChatMessage`, `broadcastChatMessage`, `broadcastSystemMessage`, `broadcastSystemMessage`, `broadcastSystemToAllExceptTeam`, `broadcastSystemToTeam`, `canBypassPlayerLimit`, `deop`, `disconnectAllPlayersWithProfile`, `getBans`, `getIpBans`, `getMaxPlayers`, `getOpNames`, `getOps`, `getPlayer`, `getPlayerAdvancements`, `getPlayerByName`, `getPlayerCount`, `getPlayerForLogin`, `getPlayerNamesArray`, `getPlayers`, `getPlayerStats`, `getPlayersWithAddress`, `getSimulationDistance`, `getViewDistance`, `getWhiteList`, `getWhiteListNames`, `isAllowCheatsForAllPlayers`, `isOp`, `isUsingWhitelist`, `isWhiteListed`, `load`, `op`, `placeNewPlayer`, `reloadResources`, `reloadWhiteList`, `remove`, `removeAll`, `respawn`, `saveAll`, `sendAllPlayerInfo`, `sendLevelInfo`, `sendPlayerPermissionLevel`, `setAllowCheatsForAllPlayers`, `setSimulationDistance`, `setUsingWhiteList`, `setViewDistance`, `tick`, `updateEntireScoreboard`

## IntegratedServer

*class* `net.minecraft.client.server.IntegratedServer`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int MIN_SIM_DISTANCE` (= 2)
- `private final Minecraft minecraft`
- `private boolean paused`
- `private int publishedPort`
- `@Nullable private GameType publishedGameType`
- `@Nullable private LanServerPinger lanPinger`
- `@Nullable private UUID uuid`
- `private int previousSimulationDistance`

### Inherited fields
- from `net.minecraft.server.MinecraftServer`: `ABSOLUTE_MAX_WORLD_SIZE`, `ANONYMOUS_PLAYER_PROFILE`, `DEMO_SETTINGS`, `MS_PER_TICK`, `nextTickTime`, `playerDataStorage`, `proxy`, `services`, `START_CHUNK_RADIUS`, `storageSource`, `tickTimes`, `VANILLA_BRAND`, `worldData`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `public boolean initServer()`
- `public void tickServer(BooleanSupplier p_120049_)`
- `public void logTickTime(long p_300146_)`
- `private void tickPaused()`
- `public boolean shouldRconBroadcast()`
- `public boolean shouldInformAdmins()`
- `public File getServerDirectory()`
- `public boolean isDedicatedServer()`
- `public int getRateLimitPacketsPerSecond()`
- `public boolean isEpollEnabled()`
- `public void onServerCrash(CrashReport p_120051_)`
- `public SystemReport fillServerSystemReport(SystemReport p_174970_)`
- `public ModCheck getModdedStatus()`
- `public boolean publishServer(@Nullable  GameType p_120041_,  boolean p_120042_,  int p_120043_)`
- `public void stopServer()`
- `public void halt(boolean p_120053_)`
- `public boolean isPublished()`
- `public int getPort()`
- `public void setDefaultGameType(GameType p_120039_)`
- `public boolean isCommandBlockEnabled()`
- `public int getOperatorUserPermissionLevel()`
- `public int getFunctionCompilationLevel()`
- `public void setUUID(UUID p_120047_)`
- `public boolean isSingleplayerOwner(com.mojang.authlib.GameProfile p_120045_)`
- `public int getScaledTrackingDistance(int p_120056_)`
- `public boolean forceSynchronousWrites()`
- `@Nullable public GameType getForcedGameType()`

### Inherited methods
- from `net.minecraft.server.MinecraftServer`: `acceptsFailure`, `acceptsSuccess`, `addTickable`, `areNpcsEnabled`, `cancelRecordingMetrics`, `close`, `configurePackRepository`, `createCommandSourceStack`, `createGameModeForPlayer`, `createLevels`, `createTextFilterForPlayer`, `doRunTask`, `dumpServerProperties`, `enforceSecureProfile`, `executeIfPossible`, `fillSystemReport`, `finishRecordingMetrics`, `forceDifficulty`, `forceTimeSynchronization`, `forgeGetWorldMap`, `getAbsoluteMaxWorldSize`, `getAdvancements`, `getAllLevels`, `getAverageTickTime`, `getChatDecorator`, `getCommands`, `getCommandStorage`, `getCompressionThreshold`, `getConnection`, `getCustomBossEvents`, `getDefaultGameType`, `getFile`, `getFixerUpper`, `getFunctions`, `getGameRules`, `getKeyPair`, `getLevel`, `getLocalIp`, `getLootData`, `getMaxChainedNeighborUpdates`, `getMaxPlayers`, `getMotd`, `getNextTickTime`, `getPackRepository`, `getPlayerCount`, `getPlayerIdleTimeout`, `getPlayerList`, `getPlayerNames`, `getPreventProxyConnections`, `getProfileCache`, `getProfileKeySignatureValidator`, `getProfilePermissions`, `getProfiler`, `getProfileRepository`, `getProxy`, `getRecipeManager`, `getResourceManager`, `getRunningThread`, `getScoreboard`, `getServerModName`, `getServerResourcePack`, `getServerResources`, `getServerVersion`, `getSessionService`, `getSingleplayerProfile`, `getSpawnProtectionRadius`, `getSpawnRadius`, `getStatus`, `getStatusJson`, `getStructureManager`, `getTickCount`, `getTickTime`, `getWorldData`, `getWorldPath`, `getWorldScreenshotFile`, `hasGui`, `hidesOnlinePlayers`, `initializeKeyPair`, `invalidateStatus`, `isCurrentlySaving`, `isDemo`, `isEnforceWhitelist`, `isFlightAllowed`, `isHardcore`, `isNetherEnabled`, `isPvpAllowed`, `isReady`, `isRecordingMetrics`, `isResourcePackRequired`, `isRunning`, `isShutdown`, `isSingleplayer`, `isSpawningAnimals`, `isSpawningMonsters`, `isStopped`, `isTimeProfilerRunning`, `isUnderSpawnProtection`, `kickUnlistedPlayers`, `levelKeys`, `loadLevel`, `logChatMessage`, `logIPs`, `markWorldsDirty`, `onServerExit`, `overworld`, `pollTask`, `registries`, `registryAccess`, `reloadResources`, `repliesToStatus`, `runServer`, `saveAllChunks`, `saveEverything`, `scheduleExecutables`, `sendSystemMessage`, `setDemo`, `setDifficulty`, `setDifficultyLocked`, `setEnforceWhitelist`, `setFlightAllowed`, `setId`, `setLocalIp`, `setMotd`, `setPlayerIdleTimeout`, `setPlayerList`, `setPort`, `setPreventProxyConnections`, `setPvpAllowed`, `setSingleplayerProfile`, `setUsesAuthentication`, `shouldRun`, `spin`, `startRecordingMetrics`, `startTimeProfiler`, `stopRecordingMetrics`, `stopTimeProfiler`, `tickChildren`, `usesAuthentication`, `waitUntilNextTick`, `wrapRunnable`
- from `net.minecraft.util.thread.ReentrantBlockableEventLoop`: `runningTask`
- from `net.minecraft.util.thread.BlockableEventLoop`: `dropAllTasks`, `execute`, `executeBlocking`, `getPendingTasksCount`, `isSameThread`, `managedBlock`, `name`, `profiledMetrics`, `runAllTasks`, `submit`, `submit`, `submitAsync`, `tell`, `waitForTasks`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraft.util.thread.ProcessorHandle`: `ask`, `askEither`

## LanServer

*class* `net.minecraft.client.server.LanServer`

### Fields
- `private final String motd`
- `private final String address`
- `private long pingTime`

### Methods
- `public String getMotd()`
- `public String getAddress()`
- `public void updatePingTime()`

## LanServerDetection

*class* `net.minecraft.client.server.LanServerDetection`

### Fields
- `static final AtomicInteger UNIQUE_THREAD_ID`
- `static final org.slf4j.Logger LOGGER`

## LanServerDetection.LanServerDetector

*class* `net.minecraft.client.server.LanServerDetection.LanServerDetector`

Enclosing class: LanServerDetection

### Fields
- `private final LanServerDetection.LanServerList serverList`
- `private final InetAddress pingGroup`
- `private final MulticastSocket socket`

### Inherited fields
- from `java.lang.Thread`: `MAX_PRIORITY`, `MIN_PRIORITY`, `NORM_PRIORITY`

### Methods
- `public void run()`

### Inherited methods
- from `java.lang.Thread`: `activeCount`, `checkAccess`, `clone`, `countStackFrames`, `currentThread`, `dumpStack`, `enumerate`, `getAllStackTraces`, `getContextClassLoader`, `getDefaultUncaughtExceptionHandler`, `getId`, `getName`, `getPriority`, `getStackTrace`, `getState`, `getThreadGroup`, `getUncaughtExceptionHandler`, `holdsLock`, `interrupt`, `interrupted`, `isAlive`, `isDaemon`, `isInterrupted`, `join`, `join`, `join`, `onSpinWait`, `resume`, `setContextClassLoader`, `setDaemon`, `setDefaultUncaughtExceptionHandler`, `setName`, `setPriority`, `setUncaughtExceptionHandler`, `sleep`, `sleep`, `start`, `stop`, `suspend`, `toString`, `yield`

## LanServerDetection.LanServerList

*class* `net.minecraft.client.server.LanServerDetection.LanServerList`

Enclosing class: LanServerDetection

### Fields
- `private final List<LanServer> servers`
- `private boolean isDirty`

### Methods
- `@Nullable public List<LanServer> takeDirtyServers()`
- `public void addServer(String p_120097_,  InetAddress p_120098_)`

## LanServerPinger

*class* `net.minecraft.client.server.LanServerPinger`

### Fields
- `private static final AtomicInteger UNIQUE_THREAD_ID`
- `private static final org.slf4j.Logger LOGGER`
- `public static final String MULTICAST_GROUP`
- `public static final int PING_PORT` (= 4445)
- `private static final long PING_INTERVAL` (= 1500L)
- `private final String motd`
- `private final DatagramSocket socket`
- `private boolean isRunning`
- `private final String serverAddress`

### Inherited fields
- from `java.lang.Thread`: `MAX_PRIORITY`, `MIN_PRIORITY`, `NORM_PRIORITY`

### Methods
- `public void run()`
- `public void interrupt()`
- `public static String createPingString(String p_120114_,  String p_120115_)`
- `public static String parseMotd(String p_120112_)`
- `public static String parseAddress(String p_120117_)`

### Inherited methods
- from `java.lang.Thread`: `activeCount`, `checkAccess`, `clone`, `countStackFrames`, `currentThread`, `dumpStack`, `enumerate`, `getAllStackTraces`, `getContextClassLoader`, `getDefaultUncaughtExceptionHandler`, `getId`, `getName`, `getPriority`, `getStackTrace`, `getState`, `getThreadGroup`, `getUncaughtExceptionHandler`, `holdsLock`, `interrupted`, `isAlive`, `isDaemon`, `isInterrupted`, `join`, `join`, `join`, `onSpinWait`, `resume`, `setContextClassLoader`, `setDaemon`, `setDefaultUncaughtExceptionHandler`, `setName`, `setPriority`, `setUncaughtExceptionHandler`, `sleep`, `sleep`, `start`, `stop`, `suspend`, `toString`, `yield`
