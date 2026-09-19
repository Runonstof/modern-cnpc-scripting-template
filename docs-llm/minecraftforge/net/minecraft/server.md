# net.minecraft.server

- [DebugLoggingPrintStream](#debugloggingprintstream)
- [MinecraftServer](#minecraftserver)
- [ServerEula](#servereula)
## DebugLoggingPrintStream

*class* `net.minecraft.server.DebugLoggingPrintStream`

All Implemented Interfaces: java.io.Closeable, java.io.Flushable, java.lang.Appendable, java.lang.AutoCloseable

### Inherited fields
- from `net.minecraft.util.LoggingPrintStream`: `domain`, `LOGGER`
- from `java.io.FilterOutputStream`: `out`

### Methods
- `protected void logString(java.lang.String string)`

### Inherited methods
- from `net.minecraft.util.LoggingPrintStream`: `println`, `println`
- from `java.io.PrintStream`: `append`, `append`, `append`, `checkError`, `clearError`, `close`, `flush`, `format`, `format`, `print`, `print`, `print`, `print`, `print`, `print`, `print`, `print`, `print`, `printf`, `printf`, `println`, `println`, `println`, `println`, `println`, `println`, `println`, `println`, `setError`, `write`, `write`
- from `java.io.FilterOutputStream`: `write`

## MinecraftServer

*class* `net.minecraft.server.MinecraftServer`

All Implemented Interfaces: java.lang.Runnable, ICommandSender, ISnooperInfo, IThreadListener

### Fields
- `public static final java.io.File USER_CACHE_FILE`
- `public final ICommandManager commandManager`
- `public final Profiler profiler`
- `public WorldServer[] worlds`
- `protected final java.net.Proxy serverProxy`
- `public java.lang.String currentTask`
- `public int percentDone`
- `public final long[] tickTimeArray`
- `public java.util.Hashtable<java.lang.Integer,long[]> worldTickTimes`
- `public final java.util.Queue<java.util.concurrent.FutureTask<?>> futureTaskQueue`
- `protected long currentTime`

### Methods
- `public ServerCommandManager createCommandManager()`
- `public abstract boolean init()  throws java.io.IOException`
  - throws: java.io.IOException
- `public void convertMapIfNeeded(java.lang.String worldNameIn)`
- `protected void setUserMessage(java.lang.String message)`
- `public java.lang.String getUserMessage()`
- `public void loadAllWorlds(java.lang.String saveName,  java.lang.String worldNameIn,  long seed,  WorldType type,  java.lang.String generatorOptions)`
- `public void initialWorldChunkLoad()`
- `public void setResourcePackFromWorld(java.lang.String worldNameIn,  ISaveHandler saveHandlerIn)`
- `public abstract boolean canStructuresSpawn()`
- `public abstract GameType getGameType()`
- `public abstract EnumDifficulty getDifficulty()`
- `public abstract boolean isHardcore()`
- `public abstract int getOpPermissionLevel()`
- `public abstract boolean shouldBroadcastRconToOps()`
- `public abstract boolean shouldBroadcastConsoleToOps()`
- `protected void outputPercentRemaining(java.lang.String message,  int percent)`
- `protected void clearCurrentTask()`
- `public void saveAllWorlds(boolean isSilent)`
- `public void stopServer()`
- `public boolean isServerRunning()`
- `public void initiateShutdown()`
- `public void run()`
- `public void applyServerIconToResponse(ServerStatusResponse response)`
- `public boolean isWorldIconSet()`
- `public java.io.File getWorldIconFile()`
- `public java.io.File getDataDirectory()`
- `public void finalTick(CrashReport report)`
- `public void systemExitNow()`
- `public void tick()`
- `public void updateTimeLightAndEntities()`
- `public boolean getAllowNether()`
- `public void startServerThread()`
- `public java.io.File getFile(java.lang.String fileName)`
- `public void logWarning(java.lang.String msg)`
- `public WorldServer getWorld(int dimension)`
- `public java.lang.String getMinecraftVersion()`
- `public int getCurrentPlayerCount()`
- `public int getMaxPlayers()`
- `public java.lang.String[] getOnlinePlayerNames()`
- `public GameProfile[] getOnlinePlayerProfiles()`
- `public java.lang.String getServerModName()`
- `public CrashReport addServerInfoToCrashReport(CrashReport report)`
- `public java.util.List<java.lang.String> getTabCompletions(ICommandSender sender,  java.lang.String input,  BlockPos pos,  boolean hasTargetBlock)`
- `public boolean isAnvilFileSet()`
- `public java.lang.String getName()`
- `public void sendMessage(ITextComponent component)`
- `public boolean canUseCommand(int permLevel,  java.lang.String commandName)`
- `public ICommandManager getCommandManager()`
- `public java.security.KeyPair getKeyPair()`
- `public java.lang.String getServerOwner()`
- `public void setServerOwner(java.lang.String owner)`
- `public boolean isSinglePlayer()`
- `public java.lang.String getFolderName()`
- `public void setFolderName(java.lang.String name)`
- `public void setWorldName(java.lang.String worldNameIn)`
- `public java.lang.String getWorldName()`
- `public void setKeyPair(java.security.KeyPair keyPair)`
- `public void setDifficultyForAllWorlds(EnumDifficulty difficulty)`
- `public boolean allowSpawnMonsters()`
- `public boolean isDemo()`
- `public void setDemo(boolean demo)`
- `public void canCreateBonusChest(boolean enable)`
- `public ISaveFormat getActiveAnvilConverter()`
- `public java.lang.String getResourcePackUrl()`
- `public java.lang.String getResourcePackHash()`
- `public void setResourcePack(java.lang.String url,  java.lang.String hash)`
- `public void addServerStatsToSnooper(Snooper playerSnooper)`
- `public void addServerTypeToSnooper(Snooper playerSnooper)`
- `public boolean isSnooperEnabled()`
- `public abstract boolean isDedicatedServer()`
- `public boolean isServerInOnlineMode()`
- `public void setOnlineMode(boolean online)`
- `public boolean getPreventProxyConnections()`
- `public boolean getCanSpawnAnimals()`
- `public void setCanSpawnAnimals(boolean spawnAnimals)`
- `public boolean getCanSpawnNPCs()`
- `public abstract boolean shouldUseNativeTransport()`
- `public void setCanSpawnNPCs(boolean spawnNpcs)`
- `public boolean isPVPEnabled()`
- `public void setAllowPvp(boolean allowPvp)`
- `public boolean isFlightAllowed()`
- `public void setAllowFlight(boolean allow)`
- `public abstract boolean isCommandBlockEnabled()`
- `public java.lang.String getMOTD()`
- `public void setMOTD(java.lang.String motdIn)`
- `public int getBuildLimit()`
- `public void setBuildLimit(int maxBuildHeight)`
- `public boolean isServerStopped()`
- `public PlayerList getPlayerList()`
- `public void setPlayerList(PlayerList list)`
- `public void setGameType(GameType gameMode)`
- `public NetworkSystem getNetworkSystem()`
- `public boolean serverIsInRunLoop()`
- `public boolean getGuiEnabled()`
- `public abstract java.lang.String shareToLAN(GameType type,  boolean allowCheats)`
- `public int getTickCounter()`
- `public void enableProfiling()`
- `public Snooper getPlayerUsageSnooper()`
- `public World getEntityWorld()`
- `public boolean isBlockProtected(World worldIn,  BlockPos pos,  EntityPlayer playerIn)`
- `public boolean getForceGamemode()`
- `public java.net.Proxy getServerProxy()`
- `public static long getCurrentTimeMillis()`
- `public int getMaxPlayerIdleMinutes()`
- `public void setPlayerIdleTimeout(int idleTimeout)`
- `public MinecraftSessionService getMinecraftSessionService()`
- `public GameProfileRepository getGameProfileRepository()`
- `public PlayerProfileCache getPlayerProfileCache()`
- `public ServerStatusResponse getServerStatusResponse()`
- `public void refreshStatusNextTick()`
- `public Entity getEntityFromUuid(java.util.UUID uuid)`
- `public boolean sendCommandFeedback()`
- `public MinecraftServer getServer()`
- `public int getMaxWorldSize()`
- `public <V> <any> callFromMainThread(java.util.concurrent.Callable<V> callable)`
- `public <any> addScheduledTask(java.lang.Runnable runnableToSchedule)`
- `public boolean isCallingFromMinecraftThread()`
- `public int getNetworkCompressionThreshold()`
- `public int getSpawnRadius(WorldServer worldIn)`
- `public AdvancementManager getAdvancementManager()`
- `public FunctionManager getFunctionManager()`
- `public void reload()`
- `public java.lang.String getServerHostname()`
- `public void setHostname(java.lang.String host)`
- `public void registerTickable(ITickable tickable)`
- `public static void main(java.lang.String[] p_main_0_)`
- `public void logInfo(java.lang.String msg)`
- `public boolean isDebuggingEnabled()`
- `public void logSevere(java.lang.String msg)`
- `public void logDebug(java.lang.String msg)`
- `public int getServerPort()`
- `public void setServerPort(int port)`
- `public void setPreventProxyConnections(boolean p_190517_1_)`
- `public int getSpawnProtectionSize()`
- `public void setForceGamemode(boolean force)`
- `public long getCurrentTime()`
- `public java.lang.Thread getServerThread()`
- `public DataFixer getDataFixer()`

### Inherited methods
- from `net.minecraft.command.ICommandSender`: `getCommandSenderEntity`, `getDisplayName`, `getPosition`, `getPositionVector`, `setCommandStat`

## ServerEula

*class* `net.minecraft.server.ServerEula`

### Methods
- `public boolean hasAcceptedEULA()`
- `public void createEULAFile()`
