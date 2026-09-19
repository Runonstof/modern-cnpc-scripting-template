# net.minecraft.client.network

- [LanServerDetector](#lanserverdetector)
- [LanServerDetector.LanServerList](#lanserverdetector.lanserverlist)
- [LanServerDetector.ThreadLanServerFind](#lanserverdetector.threadlanserverfind)
- [LanServerInfo](#lanserverinfo)
- [NetHandlerHandshakeMemory](#nethandlerhandshakememory)
- [NetHandlerLoginClient](#nethandlerloginclient)
- [NetHandlerPlayClient](#nethandlerplayclient)
- [NetworkPlayerInfo](#networkplayerinfo)
- [ServerPinger](#serverpinger)
## LanServerDetector

*class* `net.minecraft.client.network.LanServerDetector`

## LanServerDetector.LanServerList

*class* `net.minecraft.client.network.LanServerDetector.LanServerList`

Enclosing class: LanServerDetector

### Methods
- `public boolean getWasUpdated()`
- `public void setWasNotUpdated()`
- `public java.util.List<LanServerInfo> getLanServers()`
- `public void addServer(java.lang.String pingResponse,  java.net.InetAddress ipAddress)`

## LanServerDetector.ThreadLanServerFind

*class* `net.minecraft.client.network.LanServerDetector.ThreadLanServerFind`

All Implemented Interfaces: java.lang.Runnable

Enclosing class: LanServerDetector

### Inherited fields
- from `java.lang.Thread`: `MAX_PRIORITY`, `MIN_PRIORITY`, `NORM_PRIORITY`

### Methods
- `public void run()`

### Inherited methods
- from `java.lang.Thread`: `activeCount`, `checkAccess`, `clone`, `countStackFrames`, `currentThread`, `destroy`, `dumpStack`, `enumerate`, `getAllStackTraces`, `getContextClassLoader`, `getDefaultUncaughtExceptionHandler`, `getId`, `getName`, `getPriority`, `getStackTrace`, `getState`, `getThreadGroup`, `getUncaughtExceptionHandler`, `holdsLock`, `interrupt`, `interrupted`, `isAlive`, `isDaemon`, `isInterrupted`, `join`, `join`, `join`, `resume`, `setContextClassLoader`, `setDaemon`, `setDefaultUncaughtExceptionHandler`, `setName`, `setPriority`, `setUncaughtExceptionHandler`, `sleep`, `sleep`, `start`, `stop`, `stop`, `suspend`, `toString`, `yield`

## LanServerInfo

*class* `net.minecraft.client.network.LanServerInfo`

### Methods
- `public java.lang.String getServerMotd()`
- `public java.lang.String getServerIpPort()`
- `public void updateLastSeen()`

## NetHandlerHandshakeMemory

*class* `net.minecraft.client.network.NetHandlerHandshakeMemory`

All Implemented Interfaces: INetHandlerHandshakeServer, INetHandler

### Methods
- `public void processHandshake(C00Handshake packetIn)`
- `public void onDisconnect(ITextComponent reason)`

## NetHandlerLoginClient

*class* `net.minecraft.client.network.NetHandlerLoginClient`

All Implemented Interfaces: INetHandler, INetHandlerLoginClient

### Methods
- `public void handleEncryptionRequest(SPacketEncryptionRequest packetIn)`
- `public void handleLoginSuccess(SPacketLoginSuccess packetIn)`
- `public void onDisconnect(ITextComponent reason)`
- `public void handleDisconnect(SPacketDisconnect packetIn)`
- `public void handleEnableCompression(SPacketEnableCompression packetIn)`

## NetHandlerPlayClient

*class* `net.minecraft.client.network.NetHandlerPlayClient`

All Implemented Interfaces: INetHandler, INetHandlerPlayClient

### Fields
- `public int currentServerMaxPlayers`

### Methods
- `public void cleanup()`
- `public void handleJoinGame(SPacketJoinGame packetIn)`
- `public void handleSpawnObject(SPacketSpawnObject packetIn)`
- `public void handleSpawnExperienceOrb(SPacketSpawnExperienceOrb packetIn)`
- `public void handleSpawnGlobalEntity(SPacketSpawnGlobalEntity packetIn)`
- `public void handleSpawnPainting(SPacketSpawnPainting packetIn)`
- `public void handleEntityVelocity(SPacketEntityVelocity packetIn)`
- `public void handleEntityMetadata(SPacketEntityMetadata packetIn)`
- `public void handleSpawnPlayer(SPacketSpawnPlayer packetIn)`
- `public void handleEntityTeleport(SPacketEntityTeleport packetIn)`
- `public void handleHeldItemChange(SPacketHeldItemChange packetIn)`
- `public void handleEntityMovement(SPacketEntity packetIn)`
- `public void handleEntityHeadLook(SPacketEntityHeadLook packetIn)`
- `public void handleDestroyEntities(SPacketDestroyEntities packetIn)`
- `public void handlePlayerPosLook(SPacketPlayerPosLook packetIn)`
- `public void handleMultiBlockChange(SPacketMultiBlockChange packetIn)`
- `public void handleChunkData(SPacketChunkData packetIn)`
- `public void processChunkUnload(SPacketUnloadChunk packetIn)`
- `public void handleBlockChange(SPacketBlockChange packetIn)`
- `public void handleDisconnect(SPacketDisconnect packetIn)`
- `public void onDisconnect(ITextComponent reason)`
- `public void sendPacket(Packet<?> packetIn)`
- `public void handleCollectItem(SPacketCollectItem packetIn)`
- `public void handleChat(SPacketChat packetIn)`
- `public void handleAnimation(SPacketAnimation packetIn)`
- `public void handleUseBed(SPacketUseBed packetIn)`
- `public void handleSpawnMob(SPacketSpawnMob packetIn)`
- `public void handleTimeUpdate(SPacketTimeUpdate packetIn)`
- `public void handleSpawnPosition(SPacketSpawnPosition packetIn)`
- `public void handleSetPassengers(SPacketSetPassengers packetIn)`
- `public void handleEntityAttach(SPacketEntityAttach packetIn)`
- `public void handleEntityStatus(SPacketEntityStatus packetIn)`
- `public void handleUpdateHealth(SPacketUpdateHealth packetIn)`
- `public void handleSetExperience(SPacketSetExperience packetIn)`
- `public void handleRespawn(SPacketRespawn packetIn)`
- `public void handleExplosion(SPacketExplosion packetIn)`
- `public void handleOpenWindow(SPacketOpenWindow packetIn)`
- `public void handleSetSlot(SPacketSetSlot packetIn)`
- `public void handleConfirmTransaction(SPacketConfirmTransaction packetIn)`
- `public void handleWindowItems(SPacketWindowItems packetIn)`
- `public void handleSignEditorOpen(SPacketSignEditorOpen packetIn)`
- `public void handleUpdateTileEntity(SPacketUpdateTileEntity packetIn)`
- `public void handleWindowProperty(SPacketWindowProperty packetIn)`
- `public void handleEntityEquipment(SPacketEntityEquipment packetIn)`
- `public void handleCloseWindow(SPacketCloseWindow packetIn)`
- `public void handleBlockAction(SPacketBlockAction packetIn)`
- `public void handleBlockBreakAnim(SPacketBlockBreakAnim packetIn)`
- `public void handleChangeGameState(SPacketChangeGameState packetIn)`
- `public void handleMaps(SPacketMaps packetIn)`
- `public void handleEffect(SPacketEffect packetIn)`
- `public void handleAdvancementInfo(SPacketAdvancementInfo packetIn)`
- `public void handleSelectAdvancementsTab(SPacketSelectAdvancementsTab packetIn)`
- `public void handleStatistics(SPacketStatistics packetIn)`
- `public void handleRecipeBook(SPacketRecipeBook packetIn)`
- `public void handleEntityEffect(SPacketEntityEffect packetIn)`
- `public void handleCombatEvent(SPacketCombatEvent packetIn)`
- `public void handleServerDifficulty(SPacketServerDifficulty packetIn)`
- `public void handleCamera(SPacketCamera packetIn)`
- `public void handleWorldBorder(SPacketWorldBorder packetIn)`
- `public void handleTitle(SPacketTitle packetIn)`
- `public void handlePlayerListHeaderFooter(SPacketPlayerListHeaderFooter packetIn)`
- `public void handleRemoveEntityEffect(SPacketRemoveEntityEffect packetIn)`
- `public void handlePlayerListItem(SPacketPlayerListItem packetIn)`
- `public void handleKeepAlive(SPacketKeepAlive packetIn)`
- `public void handlePlayerAbilities(SPacketPlayerAbilities packetIn)`
- `public void handleTabComplete(SPacketTabComplete packetIn)`
- `public void handleSoundEffect(SPacketSoundEffect packetIn)`
- `public void handleCustomSound(SPacketCustomSound packetIn)`
- `public void handleResourcePack(SPacketResourcePackSend packetIn)`
- `public void handleUpdateBossInfo(SPacketUpdateBossInfo packetIn)`
- `public void handleCooldown(SPacketCooldown packetIn)`
- `public void handleMoveVehicle(SPacketMoveVehicle packetIn)`
- `public void handleCustomPayload(SPacketCustomPayload packetIn)`
- `public void handleScoreboardObjective(SPacketScoreboardObjective packetIn)`
- `public void handleUpdateScore(SPacketUpdateScore packetIn)`
- `public void handleDisplayObjective(SPacketDisplayObjective packetIn)`
- `public void handleTeams(SPacketTeams packetIn)`
- `public void handleParticles(SPacketParticles packetIn)`
- `public void handleEntityProperties(SPacketEntityProperties packetIn)`
- `public void func_194307_a(SPacketPlaceGhostRecipe p_194307_1_)`
- `public NetworkManager getNetworkManager()`
- `public java.util.Collection<NetworkPlayerInfo> getPlayerInfoMap()`
- `public NetworkPlayerInfo getPlayerInfo(java.util.UUID uniqueId)`
- `public NetworkPlayerInfo getPlayerInfo(java.lang.String name)`
- `public GameProfile getGameProfile()`
- `public ClientAdvancementManager getAdvancementManager()`

## NetworkPlayerInfo

*class* `net.minecraft.client.network.NetworkPlayerInfo`

### Methods
- `public GameProfile getGameProfile()`
- `public GameType getGameType()`
- `protected void setGameType(GameType gameMode)`
- `public int getResponseTime()`
- `protected void setResponseTime(int latency)`
- `public boolean hasLocationSkin()`
- `public java.lang.String getSkinType()`
- `public ResourceLocation getLocationSkin()`
- `public ResourceLocation getLocationCape()`
- `public ResourceLocation getLocationElytra()`
- `public ScorePlayerTeam getPlayerTeam()`
- `protected void loadPlayerTextures()`
- `public void setDisplayName(ITextComponent displayNameIn)`
- `public ITextComponent getDisplayName()`
- `public int getLastHealth()`
- `public void setLastHealth(int p_178836_1_)`
- `public int getDisplayHealth()`
- `public void setDisplayHealth(int p_178857_1_)`
- `public long getLastHealthTime()`
- `public void setLastHealthTime(long p_178846_1_)`
- `public long getHealthBlinkTime()`
- `public void setHealthBlinkTime(long p_178844_1_)`
- `public long getRenderVisibilityId()`
- `public void setRenderVisibilityId(long p_178843_1_)`

## ServerPinger

*class* `net.minecraft.client.network.ServerPinger`

### Methods
- `public void ping(ServerData server)  throws java.net.UnknownHostException`
  - throws: java.net.UnknownHostException
- `public void pingPendingNetworks()`
- `public void clearPendingNetworks()`
