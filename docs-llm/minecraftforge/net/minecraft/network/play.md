# net.minecraft.network.play

- [INetHandlerPlayClient](#inethandlerplayclient)
- [INetHandlerPlayServer](#inethandlerplayserver)
## INetHandlerPlayClient

*interface* `net.minecraft.network.play.INetHandlerPlayClient`

All Superinterfaces: INetHandler

### Methods
- `void handleSpawnObject(SPacketSpawnObject packetIn)`
- `void handleSpawnExperienceOrb(SPacketSpawnExperienceOrb packetIn)`
- `void handleSpawnGlobalEntity(SPacketSpawnGlobalEntity packetIn)`
- `void handleSpawnMob(SPacketSpawnMob packetIn)`
- `void handleScoreboardObjective(SPacketScoreboardObjective packetIn)`
- `void handleSpawnPainting(SPacketSpawnPainting packetIn)`
- `void handleSpawnPlayer(SPacketSpawnPlayer packetIn)`
- `void handleAnimation(SPacketAnimation packetIn)`
- `void handleStatistics(SPacketStatistics packetIn)`
- `void handleRecipeBook(SPacketRecipeBook packetIn)`
- `void handleBlockBreakAnim(SPacketBlockBreakAnim packetIn)`
- `void handleSignEditorOpen(SPacketSignEditorOpen packetIn)`
- `void handleUpdateTileEntity(SPacketUpdateTileEntity packetIn)`
- `void handleBlockAction(SPacketBlockAction packetIn)`
- `void handleBlockChange(SPacketBlockChange packetIn)`
- `void handleChat(SPacketChat packetIn)`
- `void handleTabComplete(SPacketTabComplete packetIn)`
- `void handleMultiBlockChange(SPacketMultiBlockChange packetIn)`
- `void handleMaps(SPacketMaps packetIn)`
- `void handleConfirmTransaction(SPacketConfirmTransaction packetIn)`
- `void handleCloseWindow(SPacketCloseWindow packetIn)`
- `void handleWindowItems(SPacketWindowItems packetIn)`
- `void handleOpenWindow(SPacketOpenWindow packetIn)`
- `void handleWindowProperty(SPacketWindowProperty packetIn)`
- `void handleSetSlot(SPacketSetSlot packetIn)`
- `void handleCustomPayload(SPacketCustomPayload packetIn)`
- `void handleDisconnect(SPacketDisconnect packetIn)`
- `void handleUseBed(SPacketUseBed packetIn)`
- `void handleEntityStatus(SPacketEntityStatus packetIn)`
- `void handleEntityAttach(SPacketEntityAttach packetIn)`
- `void handleSetPassengers(SPacketSetPassengers packetIn)`
- `void handleExplosion(SPacketExplosion packetIn)`
- `void handleChangeGameState(SPacketChangeGameState packetIn)`
- `void handleKeepAlive(SPacketKeepAlive packetIn)`
- `void handleChunkData(SPacketChunkData packetIn)`
- `void processChunkUnload(SPacketUnloadChunk packetIn)`
- `void handleEffect(SPacketEffect packetIn)`
- `void handleJoinGame(SPacketJoinGame packetIn)`
- `void handleEntityMovement(SPacketEntity packetIn)`
- `void handlePlayerPosLook(SPacketPlayerPosLook packetIn)`
- `void handleParticles(SPacketParticles packetIn)`
- `void handlePlayerAbilities(SPacketPlayerAbilities packetIn)`
- `void handlePlayerListItem(SPacketPlayerListItem packetIn)`
- `void handleDestroyEntities(SPacketDestroyEntities packetIn)`
- `void handleRemoveEntityEffect(SPacketRemoveEntityEffect packetIn)`
- `void handleRespawn(SPacketRespawn packetIn)`
- `void handleEntityHeadLook(SPacketEntityHeadLook packetIn)`
- `void handleHeldItemChange(SPacketHeldItemChange packetIn)`
- `void handleDisplayObjective(SPacketDisplayObjective packetIn)`
- `void handleEntityMetadata(SPacketEntityMetadata packetIn)`
- `void handleEntityVelocity(SPacketEntityVelocity packetIn)`
- `void handleEntityEquipment(SPacketEntityEquipment packetIn)`
- `void handleSetExperience(SPacketSetExperience packetIn)`
- `void handleUpdateHealth(SPacketUpdateHealth packetIn)`
- `void handleTeams(SPacketTeams packetIn)`
- `void handleUpdateScore(SPacketUpdateScore packetIn)`
- `void handleSpawnPosition(SPacketSpawnPosition packetIn)`
- `void handleTimeUpdate(SPacketTimeUpdate packetIn)`
- `void handleSoundEffect(SPacketSoundEffect packetIn)`
- `void handleCustomSound(SPacketCustomSound packetIn)`
- `void handleCollectItem(SPacketCollectItem packetIn)`
- `void handleEntityTeleport(SPacketEntityTeleport packetIn)`
- `void handleEntityProperties(SPacketEntityProperties packetIn)`
- `void handleEntityEffect(SPacketEntityEffect packetIn)`
- `void handleCombatEvent(SPacketCombatEvent packetIn)`
- `void handleServerDifficulty(SPacketServerDifficulty packetIn)`
- `void handleCamera(SPacketCamera packetIn)`
- `void handleWorldBorder(SPacketWorldBorder packetIn)`
- `void handleTitle(SPacketTitle packetIn)`
- `void handlePlayerListHeaderFooter(SPacketPlayerListHeaderFooter packetIn)`
- `void handleResourcePack(SPacketResourcePackSend packetIn)`
- `void handleUpdateBossInfo(SPacketUpdateBossInfo packetIn)`
- `void handleCooldown(SPacketCooldown packetIn)`
- `void handleMoveVehicle(SPacketMoveVehicle packetIn)`
- `void handleAdvancementInfo(SPacketAdvancementInfo packetIn)`
- `void handleSelectAdvancementsTab(SPacketSelectAdvancementsTab packetIn)`
- `void func_194307_a(SPacketPlaceGhostRecipe p_194307_1_)`

### Inherited methods
- from `net.minecraft.network.INetHandler`: `onDisconnect`

## INetHandlerPlayServer

*interface* `net.minecraft.network.play.INetHandlerPlayServer`

All Superinterfaces: INetHandler

### Methods
- `void handleAnimation(CPacketAnimation packetIn)`
- `void processChatMessage(CPacketChatMessage packetIn)`
- `void processTabComplete(CPacketTabComplete packetIn)`
- `void processClientStatus(CPacketClientStatus packetIn)`
- `void processClientSettings(CPacketClientSettings packetIn)`
- `void processConfirmTransaction(CPacketConfirmTransaction packetIn)`
- `void processEnchantItem(CPacketEnchantItem packetIn)`
- `void processClickWindow(CPacketClickWindow packetIn)`
- `void func_194308_a(CPacketPlaceRecipe p_194308_1_)`
- `void processCloseWindow(CPacketCloseWindow packetIn)`
- `void processCustomPayload(CPacketCustomPayload packetIn)`
- `void processUseEntity(CPacketUseEntity packetIn)`
- `void processKeepAlive(CPacketKeepAlive packetIn)`
- `void processPlayer(CPacketPlayer packetIn)`
- `void processPlayerAbilities(CPacketPlayerAbilities packetIn)`
- `void processPlayerDigging(CPacketPlayerDigging packetIn)`
- `void processEntityAction(CPacketEntityAction packetIn)`
- `void processInput(CPacketInput packetIn)`
- `void processHeldItemChange(CPacketHeldItemChange packetIn)`
- `void processCreativeInventoryAction(CPacketCreativeInventoryAction packetIn)`
- `void processUpdateSign(CPacketUpdateSign packetIn)`
- `void processTryUseItemOnBlock(CPacketPlayerTryUseItemOnBlock packetIn)`
- `void processTryUseItem(CPacketPlayerTryUseItem packetIn)`
- `void handleSpectate(CPacketSpectate packetIn)`
- `void handleResourcePackStatus(CPacketResourcePackStatus packetIn)`
- `void processSteerBoat(CPacketSteerBoat packetIn)`
- `void processVehicleMove(CPacketVehicleMove packetIn)`
- `void processConfirmTeleport(CPacketConfirmTeleport packetIn)`
- `void handleRecipeBookUpdate(CPacketRecipeInfo p_191984_1_)`
- `void handleSeenAdvancements(CPacketSeenAdvancements p_194027_1_)`

### Inherited methods
- from `net.minecraft.network.INetHandler`: `onDisconnect`
