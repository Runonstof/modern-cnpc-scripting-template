# net.minecraft.client.multiplayer

- [ChunkProviderClient](#chunkproviderclient)
- [ClientAdvancementManager](#clientadvancementmanager)
- [ClientAdvancementManager.IListener](#clientadvancementmanager.ilistener)
- [GuiConnecting](#guiconnecting)
- [PlayerControllerMP](#playercontrollermp)
- [ServerAddress](#serveraddress)
- [ServerData](#serverdata)
- [ServerData.ServerResourceMode](#serverdata.serverresourcemode)
- [ServerList](#serverlist)
- [ThreadLanServerPing](#threadlanserverping)
- [WorldClient](#worldclient)
## ChunkProviderClient

*class* `net.minecraft.client.multiplayer.ChunkProviderClient`

All Implemented Interfaces: IChunkProvider

### Methods
- `public void unloadChunk(int x,  int z)`
- `public Chunk getLoadedChunk(int x,  int z)`
- `public Chunk loadChunk(int chunkX,  int chunkZ)`
- `public Chunk provideChunk(int x,  int z)`
- `public boolean tick()`
- `public java.lang.String makeString()`
- `public boolean isChunkGeneratedAt(int x,  int z)`

## ClientAdvancementManager

*class* `net.minecraft.client.multiplayer.ClientAdvancementManager`

### Methods
- `public void read(SPacketAdvancementInfo p_192799_1_)`
- `public AdvancementList getAdvancementList()`
- `public void setSelectedTab(Advancement p_194230_1_,  boolean tellServer)`
- `public void setListener(ClientAdvancementManager.IListener p_192798_1_)`

## ClientAdvancementManager.IListener

*interface* `net.minecraft.client.multiplayer.ClientAdvancementManager.IListener`

All Superinterfaces: AdvancementList.Listener

Enclosing class: ClientAdvancementManager

### Methods
- `void onUpdateAdvancementProgress(Advancement p_191933_1_,  AdvancementProgress p_191933_2_)`
- `void setSelectedTab(Advancement p_193982_1_)`

### Inherited methods
- from `net.minecraft.advancements.AdvancementList.Listener`: `advancementsCleared`, `nonRootAdvancementAdded`, `nonRootAdvancementRemoved`, `rootAdvancementAdded`, `rootAdvancementRemoved`

## GuiConnecting

*class* `net.minecraft.client.multiplayer.GuiConnecting`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void updateScreen()`
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void initGui()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## PlayerControllerMP

*class* `net.minecraft.client.multiplayer.PlayerControllerMP`

### Methods
- `public static void clickBlockCreative(Minecraft mcIn,  PlayerControllerMP playerController,  BlockPos pos,  EnumFacing facing)`
- `public void setPlayerCapabilities(EntityPlayer player)`
- `public boolean isSpectator()`
- `public void setGameType(GameType type)`
- `public void flipPlayer(EntityPlayer playerIn)`
- `public boolean shouldDrawHUD()`
- `public boolean onPlayerDestroyBlock(BlockPos pos)`
- `public boolean clickBlock(BlockPos loc,  EnumFacing face)`
- `public void resetBlockRemoving()`
- `public boolean onPlayerDamageBlock(BlockPos posBlock,  EnumFacing directionFacing)`
- `public float getBlockReachDistance()`
- `public void updateController()`
- `public EnumActionResult processRightClickBlock(EntityPlayerSP player,  WorldClient worldIn,  BlockPos pos,  EnumFacing direction,  Vec3d vec,  EnumHand hand)`
- `public EnumActionResult processRightClick(EntityPlayer player,  World worldIn,  EnumHand hand)`
- `public EntityPlayerSP createPlayer(World p_192830_1_,  StatisticsManager p_192830_2_,  RecipeBook p_192830_3_)`
- `public void attackEntity(EntityPlayer playerIn,  Entity targetEntity)`
- `public EnumActionResult interactWithEntity(EntityPlayer player,  Entity target,  EnumHand hand)`
- `public EnumActionResult interactWithEntity(EntityPlayer player,  Entity target,  RayTraceResult ray,  EnumHand hand)`
- `public ItemStack windowClick(int windowId,  int slotId,  int mouseButton,  ClickType type,  EntityPlayer player)`
- `public void func_194338_a(int p_194338_1_,  IRecipe p_194338_2_,  boolean p_194338_3_,  EntityPlayer p_194338_4_)`
- `public void sendEnchantPacket(int windowID,  int button)`
- `public void sendSlotPacket(ItemStack itemStackIn,  int slotId)`
- `public void sendPacketDropItem(ItemStack itemStackIn)`
- `public void onStoppedUsingItem(EntityPlayer playerIn)`
- `public boolean gameIsSurvivalOrAdventure()`
- `public boolean isNotCreative()`
- `public boolean isInCreativeMode()`
- `public boolean extendedReach()`
- `public boolean isRidingHorse()`
- `public boolean isSpectatorMode()`
- `public GameType getCurrentGameType()`
- `public boolean getIsHittingBlock()`
- `public void pickItem(int index)`

## ServerAddress

*class* `net.minecraft.client.multiplayer.ServerAddress`

### Methods
- `public java.lang.String getIP()`
- `public int getPort()`
- `public static ServerAddress fromString(java.lang.String addrString)`

## ServerData

*class* `net.minecraft.client.multiplayer.ServerData`

### Fields
- `public java.lang.String serverName`
- `public java.lang.String serverIP`
- `public java.lang.String populationInfo`
- `public java.lang.String serverMOTD`
- `public long pingToServer`
- `public int version`
- `public java.lang.String gameVersion`
- `public boolean pinged`
- `public java.lang.String playerList`

### Methods
- `public NBTTagCompound getNBTCompound()`
- `public ServerData.ServerResourceMode getResourceMode()`
- `public void setResourceMode(ServerData.ServerResourceMode mode)`
- `public static ServerData getServerDataFromNBTCompound(NBTTagCompound nbtCompound)`
- `public java.lang.String getBase64EncodedIconData()`
- `public void setBase64EncodedIconData(java.lang.String icon)`
- `public boolean isOnLAN()`
- `public void copyFrom(ServerData serverDataIn)`

## ServerData.ServerResourceMode

*enum* `net.minecraft.client.multiplayer.ServerData.ServerResourceMode`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ServerData.ServerResourceMode>

Enclosing class: ServerData

### Fields
- `public static final ServerData.ServerResourceMode ENABLED`
- `public static final ServerData.ServerResourceMode DISABLED`
- `public static final ServerData.ServerResourceMode PROMPT`

### Methods
- `public static ServerData.ServerResourceMode[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ServerData.ServerResourceMode c : ServerData.ServerResourceMode.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ServerData.ServerResourceMode valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public ITextComponent getMotd()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ServerList

*class* `net.minecraft.client.multiplayer.ServerList`

### Methods
- `public void loadServerList()`
- `public void saveServerList()`
- `public ServerData getServerData(int index)`
- `public void removeServerData(int index)`
- `public void addServerData(ServerData server)`
- `public int countServers()`
- `public void swapServers(int pos1,  int pos2)`
- `public void set(int index,  ServerData server)`
- `public static void saveSingleServer(ServerData server)`

## ThreadLanServerPing

*class* `net.minecraft.client.multiplayer.ThreadLanServerPing`

All Implemented Interfaces: java.lang.Runnable

### Inherited fields
- from `java.lang.Thread`: `MAX_PRIORITY`, `MIN_PRIORITY`, `NORM_PRIORITY`

### Methods
- `public void run()`
- `public void interrupt()`
- `public static java.lang.String getPingResponse(java.lang.String p_77525_0_,  java.lang.String p_77525_1_)`
- `public static java.lang.String getMotdFromPingResponse(java.lang.String p_77524_0_)`
- `public static java.lang.String getAdFromPingResponse(java.lang.String p_77523_0_)`

### Inherited methods
- from `java.lang.Thread`: `activeCount`, `checkAccess`, `clone`, `countStackFrames`, `currentThread`, `destroy`, `dumpStack`, `enumerate`, `getAllStackTraces`, `getContextClassLoader`, `getDefaultUncaughtExceptionHandler`, `getId`, `getName`, `getPriority`, `getStackTrace`, `getState`, `getThreadGroup`, `getUncaughtExceptionHandler`, `holdsLock`, `interrupted`, `isAlive`, `isDaemon`, `isInterrupted`, `join`, `join`, `join`, `resume`, `setContextClassLoader`, `setDaemon`, `setDefaultUncaughtExceptionHandler`, `setName`, `setPriority`, `setUncaughtExceptionHandler`, `sleep`, `sleep`, `start`, `stop`, `stop`, `suspend`, `toString`, `yield`

## WorldClient

*class* `net.minecraft.client.multiplayer.WorldClient`

All Implemented Interfaces: IBlockAccess, ICapabilityProvider

### Fields
- `protected java.util.Set<ChunkPos> visibleChunks`

### Inherited fields
- from `net.minecraft.world.World`: `advancementManager`, `captureBlockSnapshots`, `capturedBlockSnapshots`, `chunkProvider`, `DIST_HASH_MAGIC`, `entitiesById`, `eventListeners`, `findingSpawnPoint`, `functionManager`, `isRemote`, `loadedEntityList`, `loadedTileEntityList`, `lootTable`, `mapStorage`, `MAX_ENTITY_RADIUS`, `pathListener`, `perWorldStorage`, `playerEntities`, `prevRainingStrength`, `prevThunderingStrength`, `profiler`, `provider`, `rainingStrength`, `rand`, `restoringBlockSnapshots`, `saveHandler`, `scheduledUpdatesAreImmediate`, `spawnHostileMobs`, `spawnPeacefulMobs`, `thunderingStrength`, `tickableTileEntities`, `unloadedEntityList`, `updateLCG`, `villageCollection`, `weatherEffects`, `worldInfo`, `worldScoreboard`

### Methods
- `public void tick()`
- `public void invalidateBlockReceiveRegion(int x1,  int y1,  int z1,  int x2,  int y2,  int z2)`
- `protected IChunkProvider createChunkProvider()`
- `protected boolean isChunkLoaded(int x,  int z,  boolean allowEmpty)`
- `protected void refreshVisibleChunks()`
- `protected void updateBlocks()`
- `public void doPreChunk(int chunkX,  int chunkZ,  boolean loadChunk)`
- `public boolean spawnEntity(Entity entityIn)`
- `public void removeEntity(Entity entityIn)`
- `public void onEntityAdded(Entity entityIn)`
- `public void onEntityRemoved(Entity entityIn)`
- `public void addEntityToWorld(int entityID,  Entity entityToSpawn)`
- `public Entity getEntityByID(int id)`
- `public Entity removeEntityFromWorld(int entityID)`
- `@Deprecated public boolean invalidateRegionAndSetBlock(BlockPos pos,  IBlockState state)` (deprecated)
  Deprecated.
- `public void sendQuittingDisconnectingPacket()`
- `protected void updateWeather()`
- `protected void playMoodSoundAndCheckLight(int p_147467_1_,  int p_147467_2_,  Chunk chunkIn)`
- `public void doVoidFogParticles(int posX,  int posY,  int posZ)`
- `public void showBarrierParticles(int x,  int y,  int z,  int offset,  java.util.Random random,  boolean holdingBarrier,  BlockPos.MutableBlockPos pos)`
- `public void removeAllEntities()`
- `public CrashReportCategory addWorldInfoToCrashReport(CrashReport report)`
- `public void playSound(EntityPlayer player,  double x,  double y,  double z,  SoundEvent soundIn,  SoundCategory category,  float volume,  float pitch)`
- `public void playSound(BlockPos pos,  SoundEvent soundIn,  SoundCategory category,  float volume,  float pitch,  boolean distanceDelay)`
- `public void playSound(double x,  double y,  double z,  SoundEvent soundIn,  SoundCategory category,  float volume,  float pitch,  boolean distanceDelay)`
- `public void makeFireworks(double x,  double y,  double z,  double motionX,  double motionY,  double motionZ,  NBTTagCompound compound)`
- `public void sendPacketToServer(Packet<?> packetIn)`
- `public void setWorldScoreboard(Scoreboard scoreboardIn)`
- `public void setWorldTime(long time)`
- `public ChunkProviderClient getChunkProvider()`

### Inherited methods
- from `net.minecraft.world.World`: `addBlockEvent`, `addEventListener`, `addTileEntities`, `addTileEntity`, `addWeatherEffect`, `calculateInitialSkylight`, `calculateInitialWeather`, `calculateInitialWeatherBody`, `calculateSkylightSubtracted`, `canBlockFreeze`, `canBlockFreezeBody`, `canBlockFreezeNoWater`, `canBlockFreezeWater`, `canBlockSeeSky`, `canMineBlockBody`, `canSeeSky`, `canSnowAt`, `canSnowAtBody`, `checkBlockCollision`, `checkLight`, `checkLightFor`, `checkNoEntityCollision`, `checkNoEntityCollision`, `checkSessionLock`, `collidesWithAnyBlock`, `containsAnyLiquid`, `countEntities`, `countEntities`, `createExplosion`, `destroyBlock`, `extinguishFire`, `findNearestEntityWithinAABB`, `findNearestStructure`, `getActualHeight`, `getBiome`, `getBiomeForCoordsBody`, `getBiomeProvider`, `getBlockDensity`, `getBlockLightOpacity`, `getBlockState`, `getCapability`, `getCelestialAngle`, `getCelestialAngleRadians`, `getChunkFromBlockCoords`, `getChunkFromChunkCoords`, `getChunksLowestHorizon`, `getClosestPlayer`, `getClosestPlayer`, `getClosestPlayerToEntity`, `getCloudColorBody`, `getCloudColour`, `getCollisionBoxes`, `getCombinedLight`, `getCurrentDate`, `getCurrentMoonPhaseFactor`, `getCurrentMoonPhaseFactorBody`, `getDebugLoadedEntities`, `getDifficulty`, `getDifficultyForLocation`, `getEntities`, `getEntitiesInAABBexcluding`, `getEntitiesWithinAABB`, `getEntitiesWithinAABB`, `getEntitiesWithinAABBExcludingEntity`, `getFogColor`, `getGameRules`, `getGroundAboveSeaLevel`, `getHeight`, `getHeight`, `getHeight`, `getHorizon`, `getLastLightningBolt`, `getLight`, `getLight`, `getLightBrightness`, `getLightFor`, `getLightFromNeighbors`, `getLightFromNeighborsFor`, `getLoadedEntityList`, `getLootTableManager`, `getMapStorage`, `getMinecraftServer`, `getMoonPhase`, `getNearestAttackablePlayer`, `getNearestAttackablePlayer`, `getNearestAttackablePlayer`, `getNearestPlayerNotCreative`, `getPendingBlockUpdates`, `getPendingBlockUpdates`, `getPersistentChunkIterable`, `getPersistentChunks`, `getPerWorldStorage`, `getPlayerEntityByName`, `getPlayerEntityByUUID`, `getPlayers`, `getPrecipitationHeight`, `getProviderName`, `getRainStrength`, `getRedstonePower`, `getSaveHandler`, `getScoreboard`, `getSeaLevel`, `getSeed`, `getSkyColor`, `getSkyColorBody`, `getSkylightSubtracted`, `getSpawnPoint`, `getStarBrightness`, `getStarBrightnessBody`, `getStrongPower`, `getStrongPower`, `getSunBrightness`, `getSunBrightnessBody`, `getSunBrightnessFactor`, `getThunderStrength`, `getTileEntity`, `getTopSolidOrLiquidBlock`, `getTotalWorldTime`, `getUniqueDataId`, `getVillageCollection`, `getWorldBorder`, `getWorldInfo`, `getWorldTime`, `getWorldType`, `handleMaterialAcceleration`, `hasCapability`, `immediateBlockTick`, `init`, `initCapabilities`, `initialize`, `isAirBlock`, `isAnyPlayerWithinRangeAt`, `isAreaLoaded`, `isAreaLoaded`, `isAreaLoaded`, `isAreaLoaded`, `isAreaLoaded`, `isAreaLoaded`, `isBlockFullCube`, `isBlockIndirectlyGettingPowered`, `isBlockinHighHumidity`, `isBlockLoaded`, `isBlockLoaded`, `isBlockModifiable`, `isBlockNormalCube`, `isBlockPowered`, `isBlockTickPending`, `isChunkGeneratedAt`, `isDaytime`, `isFlammableWithin`, `isInsideWorldBorder`, `isMaterialInBB`, `isOutsideBuildHeight`, `isRaining`, `isRainingAt`, `isSidePowered`, `isSideSolid`, `isSideSolid`, `isSpawnChunk`, `isThundering`, `isUpdateScheduled`, `isValid`, `joinEntityInSurroundings`, `loadData`, `loadEntities`, `markAndNotifyBlock`, `markBlockRangeForRenderUpdate`, `markBlockRangeForRenderUpdate`, `markBlocksDirtyVertical`, `markChunkDirty`, `markTileEntitiesInChunkForRemoval`, `markTileEntityForRemoval`, `mayPlace`, `neighborChanged`, `newExplosion`, `notifyBlockUpdate`, `notifyLightSet`, `notifyNeighborsOfStateChange`, `notifyNeighborsOfStateExcept`, `notifyNeighborsRespectDebug`, `observedNeighborChanged`, `playBroadcastSound`, `playEvent`, `playEvent`, `playRecord`, `playSound`, `rayTraceBlocks`, `rayTraceBlocks`, `rayTraceBlocks`, `removeEntityDangerously`, `removeEventListener`, `removeTileEntity`, `scheduleBlockUpdate`, `scheduleUpdate`, `sendBlockBreakProgress`, `setAllowedSpawnTypes`, `setBlockState`, `setBlockState`, `setBlockToAir`, `setData`, `setEntityState`, `setInitialSpawnLocation`, `setLastLightningBolt`, `setLightFor`, `setRainStrength`, `setRandomSeed`, `setSeaLevel`, `setSkylightSubtracted`, `setSpawnPoint`, `setThunderStrength`, `setTileEntity`, `setTotalWorldTime`, `spawnAlwaysVisibleParticle`, `spawnParticle`, `spawnParticle`, `tickPlayers`, `tickUpdates`, `unloadEntities`, `updateAllPlayersSleepingFlag`, `updateBlockTick`, `updateComparatorOutputLevel`, `updateEntities`, `updateEntity`, `updateEntityWithOptionalForce`, `updateObservingBlocksAt`, `updateWeatherBody`
