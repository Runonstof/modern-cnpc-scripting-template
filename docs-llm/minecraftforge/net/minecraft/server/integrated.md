# net.minecraft.server.integrated

- [IntegratedPlayerList](#integratedplayerlist)
- [IntegratedServer](#integratedserver)
- [IntegratedServerCommandManager](#integratedservercommandmanager)
## IntegratedPlayerList

*class* `net.minecraft.server.integrated.IntegratedPlayerList`

### Inherited fields
- from `net.minecraft.server.management.PlayerList`: `FILE_IPBANS`, `FILE_OPS`, `FILE_PLAYERBANS`, `FILE_WHITELIST`, `maxPlayers`

### Methods
- `protected void writePlayerData(EntityPlayerMP playerIn)`
- `public java.lang.String allowUserToConnect(java.net.SocketAddress address,  GameProfile profile)`
- `public IntegratedServer getServerInstance()`
- `public NBTTagCompound getHostPlayerData()`

### Inherited methods
- from `net.minecraft.server.management.PlayerList`: `addOp`, `addWhitelistedPlayer`, `bypassesPlayerLimit`, `canJoin`, `canSendCommands`, `changePlayerDimension`, `createPlayerForUser`, `getAvailablePlayerDat`, `getBannedIPs`, `getBannedPlayers`, `getCurrentPlayerCount`, `getEntityViewDistance`, `getFormattedListOfPlayers`, `getMaxPlayers`, `getOnlinePlayerNames`, `getOnlinePlayerProfiles`, `getOppedPlayerNames`, `getOppedPlayers`, `getPlayerAdvancements`, `getPlayerByUsername`, `getPlayerByUUID`, `getPlayerNBT`, `getPlayers`, `getPlayersMatchingAddress`, `getPlayerStatsFile`, `getViewDistance`, `getWhitelistedPlayerNames`, `getWhitelistedPlayers`, `initializeConnectionToPlayer`, `isWhiteListEnabled`, `onTick`, `playerLoggedIn`, `playerLoggedOut`, `preparePlayer`, `readPlayerDataFromFile`, `recreatePlayerEntity`, `reloadResources`, `reloadWhitelist`, `removeAllPlayers`, `removeOp`, `removePlayerFromWhitelist`, `saveAllPlayerData`, `sendMessage`, `sendMessage`, `sendMessageToAllTeamMembers`, `sendMessageToTeamOrAllPlayers`, `sendPacketToAllPlayers`, `sendPacketToAllPlayersInDimension`, `sendScoreboard`, `sendToAllNearExcept`, `serverUpdateMovingPlayer`, `setCommandsAllowedForAll`, `setGameType`, `setPlayerManager`, `setViewDistance`, `setWhiteListEnabled`, `syncPlayerInventory`, `transferEntityToWorld`, `transferEntityToWorld`, `transferEntityToWorld`, `transferPlayerToDimension`, `transferPlayerToDimension`, `updatePermissionLevel`, `updateTimeAndWeatherForPlayer`

## IntegratedServer

*class* `net.minecraft.server.integrated.IntegratedServer`

All Implemented Interfaces: java.lang.Runnable, ICommandSender, ISnooperInfo, IThreadListener

### Inherited fields
- from `net.minecraft.server.MinecraftServer`: `commandManager`, `currentTask`, `currentTime`, `futureTaskQueue`, `percentDone`, `profiler`, `serverProxy`, `tickTimeArray`, `USER_CACHE_FILE`, `worlds`, `worldTickTimes`

### Methods
- `public ServerCommandManager createCommandManager()`
- `public void loadAllWorlds(java.lang.String saveName,  java.lang.String worldNameIn,  long seed,  WorldType type,  java.lang.String generatorOptions)`
- `public boolean init()  throws java.io.IOException`
  - throws: java.io.IOException
- `public void tick()`
- `public boolean canStructuresSpawn()`
- `public GameType getGameType()`
- `public EnumDifficulty getDifficulty()`
- `public boolean isHardcore()`
- `public boolean shouldBroadcastRconToOps()`
- `public boolean shouldBroadcastConsoleToOps()`
- `public void saveAllWorlds(boolean isSilent)`
- `public java.io.File getDataDirectory()`
- `public boolean isDedicatedServer()`
- `public boolean shouldUseNativeTransport()`
- `public void finalTick(CrashReport report)`
- `public CrashReport addServerInfoToCrashReport(CrashReport report)`
- `public void setDifficultyForAllWorlds(EnumDifficulty difficulty)`
- `public void addServerStatsToSnooper(Snooper playerSnooper)`
- `public boolean isSnooperEnabled()`
- `public java.lang.String shareToLAN(GameType type,  boolean allowCheats)`
- `public void stopServer()`
- `public void initiateShutdown()`
- `public boolean getPublic()`
- `public void setGameType(GameType gameMode)`
- `public boolean isCommandBlockEnabled()`
- `public int getOpPermissionLevel()`

### Inherited methods
- from `net.minecraft.server.MinecraftServer`: `addScheduledTask`, `addServerTypeToSnooper`, `allowSpawnMonsters`, `applyServerIconToResponse`, `callFromMainThread`, `canCreateBonusChest`, `canUseCommand`, `clearCurrentTask`, `convertMapIfNeeded`, `enableProfiling`, `getActiveAnvilConverter`, `getAdvancementManager`, `getAllowNether`, `getBuildLimit`, `getCanSpawnAnimals`, `getCanSpawnNPCs`, `getCommandManager`, `getCurrentPlayerCount`, `getCurrentTime`, `getCurrentTimeMillis`, `getDataFixer`, `getEntityFromUuid`, `getEntityWorld`, `getFile`, `getFolderName`, `getForceGamemode`, `getFunctionManager`, `getGameProfileRepository`, `getGuiEnabled`, `getKeyPair`, `getMaxPlayerIdleMinutes`, `getMaxPlayers`, `getMaxWorldSize`, `getMinecraftSessionService`, `getMinecraftVersion`, `getMOTD`, `getName`, `getNetworkCompressionThreshold`, `getNetworkSystem`, `getOnlinePlayerNames`, `getOnlinePlayerProfiles`, `getPlayerList`, `getPlayerProfileCache`, `getPlayerUsageSnooper`, `getPreventProxyConnections`, `getResourcePackHash`, `getResourcePackUrl`, `getServer`, `getServerHostname`, `getServerModName`, `getServerOwner`, `getServerPort`, `getServerProxy`, `getServerStatusResponse`, `getServerThread`, `getSpawnProtectionSize`, `getSpawnRadius`, `getTabCompletions`, `getTickCounter`, `getUserMessage`, `getWorld`, `getWorldIconFile`, `getWorldName`, `initialWorldChunkLoad`, `isAnvilFileSet`, `isBlockProtected`, `isCallingFromMinecraftThread`, `isDebuggingEnabled`, `isDemo`, `isFlightAllowed`, `isPVPEnabled`, `isServerInOnlineMode`, `isServerRunning`, `isServerStopped`, `isSinglePlayer`, `isWorldIconSet`, `logDebug`, `logInfo`, `logSevere`, `logWarning`, `main`, `outputPercentRemaining`, `refreshStatusNextTick`, `registerTickable`, `reload`, `run`, `sendCommandFeedback`, `sendMessage`, `serverIsInRunLoop`, `setAllowFlight`, `setAllowPvp`, `setBuildLimit`, `setCanSpawnAnimals`, `setCanSpawnNPCs`, `setDemo`, `setFolderName`, `setForceGamemode`, `setHostname`, `setKeyPair`, `setMOTD`, `setOnlineMode`, `setPlayerIdleTimeout`, `setPlayerList`, `setPreventProxyConnections`, `setResourcePack`, `setResourcePackFromWorld`, `setServerOwner`, `setServerPort`, `setUserMessage`, `setWorldName`, `startServerThread`, `systemExitNow`, `updateTimeLightAndEntities`
- from `net.minecraft.command.ICommandSender`: `getCommandSenderEntity`, `getDisplayName`, `getPosition`, `getPositionVector`, `setCommandStat`

## IntegratedServerCommandManager

*class* `net.minecraft.server.integrated.IntegratedServerCommandManager`

All Implemented Interfaces: ICommandListener, ICommandManager

### Inherited methods
- from `net.minecraft.command.ServerCommandManager`: `getServer`, `notifyListener`
- from `net.minecraft.command.CommandHandler`: `executeCommand`, `getCommands`, `getPossibleCommands`, `getTabCompletions`, `registerCommand`, `tryExecute`
