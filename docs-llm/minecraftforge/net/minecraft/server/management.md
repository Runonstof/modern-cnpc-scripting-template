# net.minecraft.server.management

- [DemoPlayerInteractionManager](#demoplayerinteractionmanager)
- [PlayerChunkMap](#playerchunkmap)
- [PlayerChunkMapEntry](#playerchunkmapentry)
- [PlayerInteractionManager](#playerinteractionmanager)
- [PlayerList](#playerlist)
- [PlayerProfileCache](#playerprofilecache)
- [PreYggdrasilConverter](#preyggdrasilconverter)
- [UserList>](#userlist)
- [UserListBans](#userlistbans)
- [UserListBansEntry](#userlistbansentry)
- [UserListEntry](#userlistentry)
- [UserListEntryBan](#userlistentryban)
- [UserListIPBans](#userlistipbans)
- [UserListIPBansEntry](#userlistipbansentry)
- [UserListOps](#userlistops)
- [UserListOpsEntry](#userlistopsentry)
- [UserListWhitelist](#userlistwhitelist)
- [UserListWhitelistEntry](#userlistwhitelistentry)
## DemoPlayerInteractionManager

*class* `net.minecraft.server.management.DemoPlayerInteractionManager`

### Inherited fields
- from `net.minecraft.server.management.PlayerInteractionManager`: `player`, `world`

### Methods
- `public void updateBlockRemoving()`
- `public void onBlockClicked(BlockPos pos,  EnumFacing side)`
- `public void blockRemoving(BlockPos pos)`
- `public boolean tryHarvestBlock(BlockPos pos)`
- `public EnumActionResult processRightClick(EntityPlayer player,  World worldIn,  ItemStack stack,  EnumHand hand)`
- `public EnumActionResult processRightClickBlock(EntityPlayer player,  World worldIn,  ItemStack stack,  EnumHand hand,  BlockPos pos,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`

### Inherited methods
- from `net.minecraft.server.management.PlayerInteractionManager`: `cancelDestroyingBlock`, `getBlockReachDistance`, `getGameType`, `initializeGameType`, `isCreative`, `setBlockReachDistance`, `setGameType`, `setWorld`, `survivalOrAdventure`

## PlayerChunkMap

*class* `net.minecraft.server.management.PlayerChunkMap`

### Methods
- `public WorldServer getWorldServer()`
- `public java.util.Iterator<Chunk> getChunkIterator()`
- `public void tick()`
- `public boolean contains(int chunkX,  int chunkZ)`
- `public PlayerChunkMapEntry getEntry(int x,  int z)`
- `public void markBlockForUpdate(BlockPos pos)`
- `public void addPlayer(EntityPlayerMP player)`
- `public void removePlayer(EntityPlayerMP player)`
- `public void updateMovingPlayer(EntityPlayerMP player)`
- `public boolean isPlayerWatchingChunk(EntityPlayerMP player,  int chunkX,  int chunkZ)`
- `public void setPlayerViewRadius(int radius)`
- `public static int getFurthestViewableBlock(int distance)`
- `public void entryChanged(PlayerChunkMapEntry entry)`
- `public void removeEntry(PlayerChunkMapEntry entry)`

## PlayerChunkMapEntry

*class* `net.minecraft.server.management.PlayerChunkMapEntry`

### Methods
- `public ChunkPos getPos()`
- `public void addPlayer(EntityPlayerMP player)`
- `public void removePlayer(EntityPlayerMP player)`
- `public boolean providePlayerChunk(boolean canGenerate)`
- `public boolean sendToPlayers()`
- `public void sendToPlayer(EntityPlayerMP player)`
- `public void updateChunkInhabitedTime()`
- `public void blockChanged(int x,  int y,  int z)`
- `public void sendPacket(Packet<?> packetIn)`
- `public void update()`
- `public boolean containsPlayer(EntityPlayerMP player)`
- `public boolean hasPlayerMatching(<any> predicate)`
- `public boolean hasPlayerMatchingInRange(double range,  <any> predicate)`
- `public boolean isSentToPlayers()`
- `public Chunk getChunk()`
- `public double getClosestPlayerDistance()`
- `public java.util.List<EntityPlayerMP> getWatchingPlayers()`

## PlayerInteractionManager

*class* `net.minecraft.server.management.PlayerInteractionManager`

### Fields
- `public World world`
- `public EntityPlayerMP player`

### Methods
- `public void setGameType(GameType type)`
- `public GameType getGameType()`
- `public boolean survivalOrAdventure()`
- `public boolean isCreative()`
- `public void initializeGameType(GameType type)`
- `public void updateBlockRemoving()`
- `public void onBlockClicked(BlockPos pos,  EnumFacing side)`
- `public void blockRemoving(BlockPos pos)`
- `public void cancelDestroyingBlock()`
- `public boolean tryHarvestBlock(BlockPos pos)`
- `public EnumActionResult processRightClick(EntityPlayer player,  World worldIn,  ItemStack stack,  EnumHand hand)`
- `public EnumActionResult processRightClickBlock(EntityPlayer player,  World worldIn,  ItemStack stack,  EnumHand hand,  BlockPos pos,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`
- `public void setWorld(WorldServer serverWorld)`
- `@Deprecated public double getBlockReachDistance()` (deprecated)
  Deprecated.
- `@Deprecated public void setBlockReachDistance(double distance)` (deprecated)
  Deprecated.

## PlayerList

*class* `net.minecraft.server.management.PlayerList`

### Fields
- `public static final java.io.File FILE_PLAYERBANS`
- `public static final java.io.File FILE_IPBANS`
- `public static final java.io.File FILE_OPS`
- `public static final java.io.File FILE_WHITELIST`
- `protected int maxPlayers`

### Methods
- `public void initializeConnectionToPlayer(NetworkManager netManager,  EntityPlayerMP playerIn,  NetHandlerPlayServer nethandlerplayserver)`
- `protected void sendScoreboard(ServerScoreboard scoreboardIn,  EntityPlayerMP playerIn)`
- `public void setPlayerManager(WorldServer[] worldServers)`
- `public void preparePlayer(EntityPlayerMP playerIn,  WorldServer worldIn)`
- `public int getEntityViewDistance()`
- `public NBTTagCompound readPlayerDataFromFile(EntityPlayerMP playerIn)`
- `public NBTTagCompound getPlayerNBT(EntityPlayerMP player)`
- `protected void writePlayerData(EntityPlayerMP playerIn)`
- `public void playerLoggedIn(EntityPlayerMP playerIn)`
- `public void serverUpdateMovingPlayer(EntityPlayerMP playerIn)`
- `public void playerLoggedOut(EntityPlayerMP playerIn)`
- `public java.lang.String allowUserToConnect(java.net.SocketAddress address,  GameProfile profile)`
- `public EntityPlayerMP createPlayerForUser(GameProfile profile)`
- `public EntityPlayerMP recreatePlayerEntity(EntityPlayerMP playerIn,  int dimension,  boolean conqueredEnd)`
- `public void updatePermissionLevel(EntityPlayerMP player)`
- `public void changePlayerDimension(EntityPlayerMP player,  int dimensionIn)`
- `public void transferPlayerToDimension(EntityPlayerMP player,  int dimensionIn,  Teleporter teleporter)`
- `public void transferPlayerToDimension(EntityPlayerMP player,  int dimensionIn,  ITeleporter teleporter)`
- `public void transferEntityToWorld(Entity entityIn,  int lastDimension,  WorldServer oldWorldIn,  WorldServer toWorldIn)`
- `public void transferEntityToWorld(Entity entityIn,  int lastDimension,  WorldServer oldWorldIn,  WorldServer toWorldIn,  Teleporter teleporter)`
- `public void transferEntityToWorld(Entity entityIn,  int lastDimension,  WorldServer oldWorldIn,  WorldServer toWorldIn,  ITeleporter teleporter)`
- `public void onTick()`
- `public void sendPacketToAllPlayers(Packet<?> packetIn)`
- `public void sendPacketToAllPlayersInDimension(Packet<?> packetIn,  int dimension)`
- `public void sendMessageToAllTeamMembers(EntityPlayer player,  ITextComponent message)`
- `public void sendMessageToTeamOrAllPlayers(EntityPlayer player,  ITextComponent message)`
- `public java.lang.String getFormattedListOfPlayers(boolean includeUUIDs)`
- `public java.lang.String[] getOnlinePlayerNames()`
- `public GameProfile[] getOnlinePlayerProfiles()`
- `public UserListBans getBannedPlayers()`
- `public UserListIPBans getBannedIPs()`
- `public void addOp(GameProfile profile)`
- `public void removeOp(GameProfile profile)`
- `public boolean canJoin(GameProfile profile)`
- `public boolean canSendCommands(GameProfile profile)`
- `public EntityPlayerMP getPlayerByUsername(java.lang.String username)`
- `public void sendToAllNearExcept(EntityPlayer except,  double x,  double y,  double z,  double radius,  int dimension,  Packet<?> packetIn)`
- `public void saveAllPlayerData()`
- `public void addWhitelistedPlayer(GameProfile profile)`
- `public void removePlayerFromWhitelist(GameProfile profile)`
- `public UserListWhitelist getWhitelistedPlayers()`
- `public java.lang.String[] getWhitelistedPlayerNames()`
- `public UserListOps getOppedPlayers()`
- `public java.lang.String[] getOppedPlayerNames()`
- `public void reloadWhitelist()`
- `public void updateTimeAndWeatherForPlayer(EntityPlayerMP playerIn,  WorldServer worldIn)`
- `public void syncPlayerInventory(EntityPlayerMP playerIn)`
- `public int getCurrentPlayerCount()`
- `public int getMaxPlayers()`
- `public java.lang.String[] getAvailablePlayerDat()`
- `public void setWhiteListEnabled(boolean whitelistEnabled)`
- `public java.util.List<EntityPlayerMP> getPlayersMatchingAddress(java.lang.String address)`
- `public int getViewDistance()`
- `public MinecraftServer getServerInstance()`
- `public NBTTagCompound getHostPlayerData()`
- `public void setGameType(GameType gameModeIn)`
- `public void setCommandsAllowedForAll(boolean p_72387_1_)`
- `public void removeAllPlayers()`
- `public void sendMessage(ITextComponent component,  boolean isSystem)`
- `public void sendMessage(ITextComponent component)`
- `public StatisticsManagerServer getPlayerStatsFile(EntityPlayer playerIn)`
- `public PlayerAdvancements getPlayerAdvancements(EntityPlayerMP p_192054_1_)`
- `public void setViewDistance(int distance)`
- `public java.util.List<EntityPlayerMP> getPlayers()`
- `public EntityPlayerMP getPlayerByUUID(java.util.UUID playerUUID)`
- `public boolean bypassesPlayerLimit(GameProfile profile)`
- `public void reloadResources()`
- `public boolean isWhiteListEnabled()`

## PlayerProfileCache

*class* `net.minecraft.server.management.PlayerProfileCache`

### Fields
- `public static final java.text.SimpleDateFormat DATE_FORMAT`
- `protected final Gson gson`

### Methods
- `public static void setOnlineMode(boolean onlineModeIn)`
- `public void addEntry(GameProfile gameProfile)`
- `public GameProfile getGameProfileForUsername(java.lang.String username)`
- `public java.lang.String[] getUsernames()`
- `public GameProfile getProfileByUUID(java.util.UUID uuid)`
- `public void load()`
- `public void save()`

## PreYggdrasilConverter

*class* `net.minecraft.server.management.PreYggdrasilConverter`

### Fields
- `public static final java.io.File OLD_IPBAN_FILE`
- `public static final java.io.File OLD_PLAYERBAN_FILE`
- `public static final java.io.File OLD_OPS_FILE`
- `public static final java.io.File OLD_WHITELIST_FILE`

### Methods
- `public static java.lang.String convertMobOwnerIfNeeded(MinecraftServer server,  java.lang.String username)`
- `public static boolean convertUserBanlist(MinecraftServer server)  throws java.io.IOException`
  - throws: java.io.IOException
- `public static boolean convertIpBanlist(MinecraftServer server)  throws java.io.IOException`
  - throws: java.io.IOException
- `public static boolean convertOplist(MinecraftServer server)  throws java.io.IOException`
  - throws: java.io.IOException
- `public static boolean convertWhitelist(MinecraftServer server)  throws java.io.IOException`
  - throws: java.io.IOException
- `public static boolean convertSaveFiles(DedicatedServer server,  PropertyManager p_152723_1_)`
- `public static boolean tryConvert(PropertyManager properties)`

## UserList>

*class* `net.minecraft.server.management.UserList>`

### Fields
- `protected static final Logger LOGGER`
- `protected final Gson gson`

### Methods
- `public boolean isLanServer()`
- `public void setLanServer(boolean state)`
- `public void addEntry(V entry)`
- `public V getEntry(K obj)`
- `public void removeEntry(K entry)`
- `public java.io.File getSaveFile()`
- `public java.lang.String[] getKeys()`
- `protected java.lang.String getObjectKey(K obj)`
- `protected boolean hasEntry(K entry)`
- `protected UserListEntry<K> createEntry(JsonObject entryData)`
- `protected java.util.Map<java.lang.String,V> getValues()`
- `public void writeChanges()  throws java.io.IOException`
  - throws: java.io.IOException
- `public boolean isEmpty()`
- `public void readSavedFile()  throws java.io.IOException,  java.io.FileNotFoundException`
  - throws: java.io.IOException
  - throws: java.io.FileNotFoundException

## UserListBans

*class* `net.minecraft.server.management.UserListBans`

### Inherited fields
- from `net.minecraft.server.management.UserList`: `gson`, `LOGGER`

### Methods
- `protected UserListEntry<GameProfile> createEntry(JsonObject entryData)`
- `public boolean isBanned(GameProfile profile)`
- `public java.lang.String[] getKeys()`
- `protected java.lang.String getObjectKey(GameProfile obj)`
- `public GameProfile getBannedProfile(java.lang.String username)`

### Inherited methods
- from `net.minecraft.server.management.UserList`: `addEntry`, `getEntry`, `getSaveFile`, `getValues`, `hasEntry`, `isEmpty`, `isLanServer`, `readSavedFile`, `removeEntry`, `setLanServer`, `writeChanges`

## UserListBansEntry

*class* `net.minecraft.server.management.UserListBansEntry`

### Inherited fields
- from `net.minecraft.server.management.UserListEntryBan`: `banEndDate`, `bannedBy`, `banStartDate`, `DATE_FORMAT`, `reason`

### Methods
- `protected void onSerialization(JsonObject data)`

### Inherited methods
- from `net.minecraft.server.management.UserListEntryBan`: `getBanEndDate`, `getBanReason`

## UserListEntry

*class* `net.minecraft.server.management.UserListEntry`

### Methods
- `protected void onSerialization(JsonObject data)`

## UserListEntryBan

*class* `net.minecraft.server.management.UserListEntryBan`

### Fields
- `public static final java.text.SimpleDateFormat DATE_FORMAT`
- `protected final java.util.Date banStartDate`
- `protected final java.lang.String bannedBy`
- `protected final java.util.Date banEndDate`
- `protected final java.lang.String reason`

### Methods
- `public java.util.Date getBanEndDate()`
- `public java.lang.String getBanReason()`
- `protected void onSerialization(JsonObject data)`

## UserListIPBans

*class* `net.minecraft.server.management.UserListIPBans`

### Inherited fields
- from `net.minecraft.server.management.UserList`: `gson`, `LOGGER`

### Methods
- `protected UserListEntry<java.lang.String> createEntry(JsonObject entryData)`
- `public boolean isBanned(java.net.SocketAddress address)`
- `public UserListIPBansEntry getBanEntry(java.net.SocketAddress address)`

### Inherited methods
- from `net.minecraft.server.management.UserList`: `addEntry`, `getEntry`, `getKeys`, `getObjectKey`, `getSaveFile`, `getValues`, `hasEntry`, `isEmpty`, `isLanServer`, `readSavedFile`, `removeEntry`, `setLanServer`, `writeChanges`

## UserListIPBansEntry

*class* `net.minecraft.server.management.UserListIPBansEntry`

### Inherited fields
- from `net.minecraft.server.management.UserListEntryBan`: `banEndDate`, `bannedBy`, `banStartDate`, `DATE_FORMAT`, `reason`

### Methods
- `protected void onSerialization(JsonObject data)`

### Inherited methods
- from `net.minecraft.server.management.UserListEntryBan`: `getBanEndDate`, `getBanReason`

## UserListOps

*class* `net.minecraft.server.management.UserListOps`

### Inherited fields
- from `net.minecraft.server.management.UserList`: `gson`, `LOGGER`

### Methods
- `protected UserListEntry<GameProfile> createEntry(JsonObject entryData)`
- `public java.lang.String[] getKeys()`
- `public int getPermissionLevel(GameProfile profile)`
- `public boolean bypassesPlayerLimit(GameProfile profile)`
- `protected java.lang.String getObjectKey(GameProfile obj)`
- `public GameProfile getGameProfileFromName(java.lang.String username)`

### Inherited methods
- from `net.minecraft.server.management.UserList`: `addEntry`, `getEntry`, `getSaveFile`, `getValues`, `hasEntry`, `isEmpty`, `isLanServer`, `readSavedFile`, `removeEntry`, `setLanServer`, `writeChanges`

## UserListOpsEntry

*class* `net.minecraft.server.management.UserListOpsEntry`

### Methods
- `public int getPermissionLevel()`
- `public boolean bypassesPlayerLimit()`
- `protected void onSerialization(JsonObject data)`

## UserListWhitelist

*class* `net.minecraft.server.management.UserListWhitelist`

### Inherited fields
- from `net.minecraft.server.management.UserList`: `gson`, `LOGGER`

### Methods
- `protected UserListEntry<GameProfile> createEntry(JsonObject entryData)`
- `public java.lang.String[] getKeys()`
- `public boolean isWhitelisted(GameProfile profile)`
- `protected java.lang.String getObjectKey(GameProfile obj)`
- `public GameProfile getByName(java.lang.String profileName)`

### Inherited methods
- from `net.minecraft.server.management.UserList`: `addEntry`, `getEntry`, `getSaveFile`, `getValues`, `hasEntry`, `isEmpty`, `isLanServer`, `readSavedFile`, `removeEntry`, `setLanServer`, `writeChanges`

## UserListWhitelistEntry

*class* `net.minecraft.server.management.UserListWhitelistEntry`

### Methods
- `protected void onSerialization(JsonObject data)`
