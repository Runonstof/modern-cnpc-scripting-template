# net.minecraft.server.dedicated

- [DedicatedPlayerList](#dedicatedplayerlist)
- [DedicatedServer](#dedicatedserver)
- [PendingCommand](#pendingcommand)
- [PropertyManager](#propertymanager)
- [ServerHangWatchdog](#serverhangwatchdog)
## DedicatedPlayerList

*class* `net.minecraft.server.dedicated.DedicatedPlayerList`

### Inherited fields
- from `net.minecraft.server.management.PlayerList`: `FILE_IPBANS`, `FILE_OPS`, `FILE_PLAYERBANS`, `FILE_WHITELIST`, `maxPlayers`

### Methods
- `public void setWhiteListEnabled(boolean whitelistEnabled)`
- `public void addOp(GameProfile profile)`
- `public void removeOp(GameProfile profile)`
- `public void removePlayerFromWhitelist(GameProfile profile)`
- `public void addWhitelistedPlayer(GameProfile profile)`
- `public void reloadWhitelist()`
- `public boolean canJoin(GameProfile profile)`
- `public DedicatedServer getServerInstance()`
- `public boolean bypassesPlayerLimit(GameProfile profile)`

### Inherited methods
- from `net.minecraft.server.management.PlayerList`: `allowUserToConnect`, `canSendCommands`, `changePlayerDimension`, `createPlayerForUser`, `getAvailablePlayerDat`, `getBannedIPs`, `getBannedPlayers`, `getCurrentPlayerCount`, `getEntityViewDistance`, `getFormattedListOfPlayers`, `getHostPlayerData`, `getMaxPlayers`, `getOnlinePlayerNames`, `getOnlinePlayerProfiles`, `getOppedPlayerNames`, `getOppedPlayers`, `getPlayerAdvancements`, `getPlayerByUsername`, `getPlayerByUUID`, `getPlayerNBT`, `getPlayers`, `getPlayersMatchingAddress`, `getPlayerStatsFile`, `getViewDistance`, `getWhitelistedPlayerNames`, `getWhitelistedPlayers`, `initializeConnectionToPlayer`, `isWhiteListEnabled`, `onTick`, `playerLoggedIn`, `playerLoggedOut`, `preparePlayer`, `readPlayerDataFromFile`, `recreatePlayerEntity`, `reloadResources`, `removeAllPlayers`, `saveAllPlayerData`, `sendMessage`, `sendMessage`, `sendMessageToAllTeamMembers`, `sendMessageToTeamOrAllPlayers`, `sendPacketToAllPlayers`, `sendPacketToAllPlayersInDimension`, `sendScoreboard`, `sendToAllNearExcept`, `serverUpdateMovingPlayer`, `setCommandsAllowedForAll`, `setGameType`, `setPlayerManager`, `setViewDistance`, `syncPlayerInventory`, `transferEntityToWorld`, `transferEntityToWorld`, `transferEntityToWorld`, `transferPlayerToDimension`, `transferPlayerToDimension`, `updatePermissionLevel`, `updateTimeAndWeatherForPlayer`, `writePlayerData`

## DedicatedServer

*class* `net.minecraft.server.dedicated.DedicatedServer`

All Implemented Interfaces: java.lang.Runnable, ICommandSender, IServer, ISnooperInfo, IThreadListener

### Fields
- `public final java.util.List<PendingCommand> pendingCommandList`
- `public static boolean allowPlayerLogins`

### Inherited fields
- from `net.minecraft.server.MinecraftServer`: `commandManager`, `currentTask`, `currentTime`, `futureTaskQueue`, `percentDone`, `profiler`, `serverProxy`, `tickTimeArray`, `USER_CACHE_FILE`, `worlds`, `worldTickTimes`

### Methods
- `public boolean init()  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.lang.String loadResourcePackSHA()`
- `public void setGameType(GameType gameMode)`
- `public boolean canStructuresSpawn()`
- `public GameType getGameType()`
- `public EnumDifficulty getDifficulty()`
- `public boolean isHardcore()`
- `public CrashReport addServerInfoToCrashReport(CrashReport report)`
- `public void systemExitNow()`
- `public void updateTimeLightAndEntities()`
- `public boolean getAllowNether()`
- `public boolean allowSpawnMonsters()`
- `public void addServerStatsToSnooper(Snooper playerSnooper)`
- `public boolean isSnooperEnabled()`
- `public void addPendingCommand(java.lang.String input,  ICommandSender sender)`
- `public void executePendingCommands()`
- `public boolean isDedicatedServer()`
- `public boolean shouldUseNativeTransport()`
- `public DedicatedPlayerList getPlayerList()`
- `public int getIntProperty(java.lang.String key,  int defaultValue)`
- `public java.lang.String getStringProperty(java.lang.String key,  java.lang.String defaultValue)`
- `public boolean getBooleanProperty(java.lang.String key,  boolean defaultValue)`
- `public void setProperty(java.lang.String key,  java.lang.Object value)`
- `public void saveProperties()`
- `public java.lang.String getSettingsFilename()`
- `public java.lang.String getHostname()`
- `public int getPort()`
- `public java.lang.String getMotd()`
- `public void setGuiEnabled()`
- `public boolean getGuiEnabled()`
- `public java.lang.String shareToLAN(GameType type,  boolean allowCheats)`
- `public boolean isCommandBlockEnabled()`
- `public int getSpawnProtectionSize()`
- `public boolean isBlockProtected(World worldIn,  BlockPos pos,  EntityPlayer playerIn)`
- `public int getOpPermissionLevel()`
- `public void setPlayerIdleTimeout(int idleTimeout)`
- `public boolean shouldBroadcastRconToOps()`
- `public boolean shouldBroadcastConsoleToOps()`
- `public int getMaxWorldSize()`
- `public int getNetworkCompressionThreshold()`
- `public void sendMessage(ITextComponent message)`
- `protected boolean convertFiles()  throws java.io.IOException`
  - throws: java.io.IOException
- `public long getMaxTickTime()`
- `public java.lang.String getPlugins()`
- `public java.lang.String handleRConCommand(java.lang.String command)`

### Inherited methods
- from `net.minecraft.server.MinecraftServer`: `addScheduledTask`, `addServerTypeToSnooper`, `applyServerIconToResponse`, `callFromMainThread`, `canCreateBonusChest`, `canUseCommand`, `clearCurrentTask`, `convertMapIfNeeded`, `createCommandManager`, `enableProfiling`, `finalTick`, `getActiveAnvilConverter`, `getAdvancementManager`, `getBuildLimit`, `getCanSpawnAnimals`, `getCanSpawnNPCs`, `getCommandManager`, `getCurrentPlayerCount`, `getCurrentTime`, `getCurrentTimeMillis`, `getDataDirectory`, `getDataFixer`, `getEntityFromUuid`, `getEntityWorld`, `getFile`, `getFolderName`, `getForceGamemode`, `getFunctionManager`, `getGameProfileRepository`, `getKeyPair`, `getMaxPlayerIdleMinutes`, `getMaxPlayers`, `getMinecraftSessionService`, `getMinecraftVersion`, `getMOTD`, `getName`, `getNetworkSystem`, `getOnlinePlayerNames`, `getOnlinePlayerProfiles`, `getPlayerProfileCache`, `getPlayerUsageSnooper`, `getPreventProxyConnections`, `getResourcePackHash`, `getResourcePackUrl`, `getServer`, `getServerHostname`, `getServerModName`, `getServerOwner`, `getServerPort`, `getServerProxy`, `getServerStatusResponse`, `getServerThread`, `getSpawnRadius`, `getTabCompletions`, `getTickCounter`, `getUserMessage`, `getWorld`, `getWorldIconFile`, `getWorldName`, `initialWorldChunkLoad`, `initiateShutdown`, `isAnvilFileSet`, `isCallingFromMinecraftThread`, `isDebuggingEnabled`, `isDemo`, `isFlightAllowed`, `isPVPEnabled`, `isServerInOnlineMode`, `isServerRunning`, `isServerStopped`, `isSinglePlayer`, `isWorldIconSet`, `loadAllWorlds`, `logDebug`, `logInfo`, `logSevere`, `logWarning`, `main`, `outputPercentRemaining`, `refreshStatusNextTick`, `registerTickable`, `reload`, `run`, `saveAllWorlds`, `sendCommandFeedback`, `serverIsInRunLoop`, `setAllowFlight`, `setAllowPvp`, `setBuildLimit`, `setCanSpawnAnimals`, `setCanSpawnNPCs`, `setDemo`, `setDifficultyForAllWorlds`, `setFolderName`, `setForceGamemode`, `setHostname`, `setKeyPair`, `setMOTD`, `setOnlineMode`, `setPlayerList`, `setPreventProxyConnections`, `setResourcePack`, `setResourcePackFromWorld`, `setServerOwner`, `setServerPort`, `setUserMessage`, `setWorldName`, `startServerThread`, `stopServer`, `tick`
- from `net.minecraft.network.rcon.IServer`: `getCurrentPlayerCount`, `getFolderName`, `getMaxPlayers`, `getMinecraftVersion`, `getOnlinePlayerNames`, `isDebuggingEnabled`, `logDebug`, `logInfo`, `logSevere`, `logWarning`
- from `net.minecraft.command.ICommandSender`: `getCommandSenderEntity`, `getDisplayName`, `getPosition`, `getPositionVector`, `setCommandStat`

## PendingCommand

*class* `net.minecraft.server.dedicated.PendingCommand`

### Fields
- `public final java.lang.String command`
- `public final ICommandSender sender`

## PropertyManager

*class* `net.minecraft.server.dedicated.PropertyManager`

### Methods
- `public void generateNewProperties()`
- `public void saveProperties()`
- `public java.io.File getPropertiesFile()`
- `public java.lang.String getStringProperty(java.lang.String key,  java.lang.String defaultValue)`
- `public int getIntProperty(java.lang.String key,  int defaultValue)`
- `public long getLongProperty(java.lang.String key,  long defaultValue)`
- `public boolean getBooleanProperty(java.lang.String key,  boolean defaultValue)`
- `public void setProperty(java.lang.String key,  java.lang.Object value)`
- `public boolean hasProperty(java.lang.String key)`
- `public void removeProperty(java.lang.String key)`

## ServerHangWatchdog

*class* `net.minecraft.server.dedicated.ServerHangWatchdog`

All Implemented Interfaces: java.lang.Runnable

### Methods
- `public void run()`
