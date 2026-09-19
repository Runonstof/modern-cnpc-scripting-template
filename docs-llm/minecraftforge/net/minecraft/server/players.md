# net.minecraft.server.players

- [BanListEntry](#banlistentry)
- [GameProfileCache](#gameprofilecache)
- [GameProfileCache.GameProfileInfo](#gameprofilecache.gameprofileinfo)
- [IpBanList](#ipbanlist)
- [IpBanListEntry](#ipbanlistentry)
- [OldUsersConverter](#oldusersconverter)
- [OldUsersConverter.ConversionError](#oldusersconverter.conversionerror)
- [PlayerList](#playerlist)
- [ServerOpList](#serveroplist)
- [ServerOpListEntry](#serveroplistentry)
- [SleepStatus](#sleepstatus)
- [StoredUserEntry](#storeduserentry)
- [StoredUserList>](#storeduserlist)
- [UserBanList](#userbanlist)
- [UserBanListEntry](#userbanlistentry)
- [UserWhiteList](#userwhitelist)
- [UserWhiteListEntry](#userwhitelistentry)
## BanListEntry

*class* `net.minecraft.server.players.BanListEntry`

### Fields
- `public static final SimpleDateFormat DATE_FORMAT`
- `public static final String EXPIRES_NEVER` (= "forever")
- `protected final Date created`
- `protected final String source`
- `@Nullable protected final Date expires`
- `protected final String reason`

### Methods
- `public Date getCreated()`
- `public String getSource()`
- `@Nullable public Date getExpires()`
- `public String getReason()`
- `public abstract Component getDisplayName()`
- `boolean hasExpired()`
- `protected void serialize(com.google.gson.JsonObject p_10959_)`

### Inherited methods
- from `net.minecraft.server.players.StoredUserEntry`: `getUser`

## GameProfileCache

*class* `net.minecraft.server.players.GameProfileCache`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int GAMEPROFILES_MRU_LIMIT` (= 1000)
- `private static final int GAMEPROFILES_EXPIRATION_MONTHS` (= 1)
- `private static boolean usesAuthentication`
- `private final Map<String,GameProfileCache.GameProfileInfo> profilesByName`
- `private final Map<UUID,GameProfileCache.GameProfileInfo> profilesByUUID`
- `private final Map<String,CompletableFuture<Optional<com.mojang.authlib.GameProfile>>> requests`
- `private final com.mojang.authlib.GameProfileRepository profileRepository`
- `private final com.google.gson.Gson gson`
- `private final File file`
- `private final AtomicLong operationCount`
- `@Nullable private Executor executor`

### Methods
- `private void safeAdd(GameProfileCache.GameProfileInfo p_10980_)`
- `private static Optional<com.mojang.authlib.GameProfile> lookupGameProfile(com.mojang.authlib.GameProfileRepository p_10994_,  String p_10995_)`
- `public static void setUsesAuthentication(boolean p_11005_)`
- `private static boolean usesAuthentication()`
- `public void add(com.mojang.authlib.GameProfile p_10992_)`
- `private long getNextOperation()`
- `public Optional<com.mojang.authlib.GameProfile> get(String p_10997_)`
- `public CompletableFuture<Optional<com.mojang.authlib.GameProfile>> getAsync(String p_143968_)`
- `public Optional<com.mojang.authlib.GameProfile> get(UUID p_11003_)`
- `public void setExecutor(Executor p_143975_)`
- `public void clearExecutor()`
- `private static DateFormat createDateFormat()`
- `public List<GameProfileCache.GameProfileInfo> load()`
- `public void save()`
- `private Stream<GameProfileCache.GameProfileInfo> getTopMRUProfiles(int p_10978_)`
- `private static com.google.gson.JsonElement writeGameProfile(GameProfileCache.GameProfileInfo p_10982_,  DateFormat p_10983_)`
- `private static Optional<GameProfileCache.GameProfileInfo> readGameProfile(com.google.gson.JsonElement p_10989_,  DateFormat p_10990_)`

## GameProfileCache.GameProfileInfo

*class* `net.minecraft.server.players.GameProfileCache.GameProfileInfo`

Enclosing class: GameProfileCache

### Fields
- `private final com.mojang.authlib.GameProfile profile`
- `final Date expirationDate`
- `private volatile long lastAccess`

### Methods
- `public com.mojang.authlib.GameProfile getProfile()`
- `public Date getExpirationDate()`
- `public void setLastAccess(long p_11030_)`
- `public long getLastAccess()`

## IpBanList

*class* `net.minecraft.server.players.IpBanList`

### Methods
- `protected StoredUserEntry<String> createEntry(com.google.gson.JsonObject p_11038_)`
- `public boolean isBanned(SocketAddress p_11042_)`
- `public boolean isBanned(String p_11040_)`
- `@Nullable public IpBanListEntry get(SocketAddress p_11044_)`
- `private String getIpFromAddress(SocketAddress p_11046_)`

### Inherited methods
- from `net.minecraft.server.players.StoredUserList`: `add`, `contains`, `get`, `getEntries`, `getFile`, `getKeyForUser`, `getUserList`, `isEmpty`, `load`, `remove`, `remove`, `save`

## IpBanListEntry

*class* `net.minecraft.server.players.IpBanListEntry`

### Inherited fields
- from `net.minecraft.server.players.BanListEntry`: `created`, `DATE_FORMAT`, `expires`, `EXPIRES_NEVER`, `reason`, `source`

### Methods
- `public Component getDisplayName()`
- `private static String createIpInfo(com.google.gson.JsonObject p_11060_)`
- `protected void serialize(com.google.gson.JsonObject p_11058_)`

### Inherited methods
- from `net.minecraft.server.players.BanListEntry`: `getCreated`, `getExpires`, `getReason`, `getSource`, `hasExpired`
- from `net.minecraft.server.players.StoredUserEntry`: `getUser`

## OldUsersConverter

*class* `net.minecraft.server.players.OldUsersConverter`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `public static final File OLD_IPBANLIST`
- `public static final File OLD_USERBANLIST`
- `public static final File OLD_OPLIST`
- `public static final File OLD_WHITELIST`

### Methods
- `static List<String> readOldListFormat(File p_11074_,  Map<String,String[]> p_11075_)  throws IOException`
  - throws: IOException
- `private static void lookupPlayers(MinecraftServer p_11087_,  Collection<String> p_11088_,  com.mojang.authlib.ProfileLookupCallback p_11089_)`
- `public static boolean convertUserBanlist(MinecraftServer p_11082_)`
- `public static boolean convertIpBanlist(MinecraftServer p_11099_)`
- `public static boolean convertOpsList(MinecraftServer p_11103_)`
- `public static boolean convertWhiteList(MinecraftServer p_11105_)`
- `@Nullable public static UUID convertMobOwnerIfNecessary(MinecraftServer p_11084_,  String p_11085_)`
- `public static boolean convertPlayers(DedicatedServer p_11091_)`
- `static void ensureDirectoryExists(File p_11094_)`
- `public static boolean serverReadyAfterUserconversion(MinecraftServer p_11107_)`
- `private static boolean areOldUserlistsRemoved()`
- `private static boolean areOldPlayersConverted(MinecraftServer p_11109_)`
- `private static File getWorldPlayersDirectory(MinecraftServer p_11111_)`
- `private static void renameOldFile(File p_11101_)`
- `static Date parseDate(String p_11096_,  Date p_11097_)`

## OldUsersConverter.ConversionError

*class* `net.minecraft.server.players.OldUsersConverter.ConversionError`

Enclosing class: OldUsersConverter

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## PlayerList

*class* `net.minecraft.server.players.PlayerList`

### Fields
- `public static final File USERBANLIST_FILE`
- `public static final File IPBANLIST_FILE`
- `public static final File OPLIST_FILE`
- `public static final File WHITELIST_FILE`
- `public static final Component CHAT_FILTERED_FULL`
- `public static final Component DUPLICATE_LOGIN_DISCONNECT_MESSAGE`
- `private static final org.slf4j.Logger LOGGER`
- `private static final int SEND_PLAYER_INFO_INTERVAL` (= 600)
- `private static final SimpleDateFormat BAN_DATE_FORMAT`
- `private final MinecraftServer server`
- `private final List<ServerPlayer> players`
- `private final Map<UUID,ServerPlayer> playersByUUID`
- `private final UserBanList bans`
- `private final IpBanList ipBans`
- `private final ServerOpList ops`
- `private final UserWhiteList whitelist`
- `private final Map<UUID,ServerStatsCounter> stats`
- `private final Map<UUID,PlayerAdvancements> advancements`
- `private final PlayerDataStorage playerIo`
- `private boolean doWhiteList`
- `private final LayeredRegistryAccess<RegistryLayer> registries`
- `protected final int maxPlayers`
- `private int viewDistance`
- `private int simulationDistance`
- `private boolean allowCheatsForAllPlayers`
- `private static final boolean ALLOW_LOGOUTIVATOR` (= false)
- `private int sendAllPlayerInfoIn`
- `private final List<ServerPlayer> playersView`

### Methods
- `public void placeNewPlayer(Connection p_11262_,  ServerPlayer p_11263_,  CommonListenerCookie p_297215_)`
- `protected void updateEntireScoreboard(ServerScoreboard p_11274_,  ServerPlayer p_11275_)`
- `public void addWorldborderListener(ServerLevel p_184210_)`
- `@Nullable public CompoundTag load(ServerPlayer p_11225_)`
- `protected void save(ServerPlayer p_11277_)`
- `public void remove(ServerPlayer p_11287_)`
- `@Nullable public Component canPlayerLogin(SocketAddress p_11257_,  com.mojang.authlib.GameProfile p_11258_)`
- `public ServerPlayer getPlayerForLogin(com.mojang.authlib.GameProfile p_215625_,  ClientInformation p_300548_)`
- `public boolean disconnectAllPlayersWithProfile(com.mojang.authlib.GameProfile p_299278_)`
- `public ServerPlayer respawn(ServerPlayer p_11237_,  boolean p_11238_)`
- `public void sendPlayerPermissionLevel(ServerPlayer p_11290_)`
- `public void tick()`
- `public void broadcastAll(Packet<?> p_11269_)`
- `public void broadcastAll(Packet<?> p_11271_,  ResourceKey<Level> p_11272_)`
- `public void broadcastSystemToTeam(Player p_215622_,  Component p_215623_)`
- `public void broadcastSystemToAllExceptTeam(Player p_215650_,  Component p_215651_)`
- `public String[] getPlayerNamesArray()`
- `public UserBanList getBans()`
- `public IpBanList getIpBans()`
- `public void op(com.mojang.authlib.GameProfile p_11254_)`
- `public void deop(com.mojang.authlib.GameProfile p_11281_)`
- `private void sendPlayerPermissionLevel(ServerPlayer p_11227_,  int p_11228_)`
- `public boolean isWhiteListed(com.mojang.authlib.GameProfile p_11294_)`
- `public boolean isOp(com.mojang.authlib.GameProfile p_11304_)`
- `@Nullable public ServerPlayer getPlayerByName(String p_11256_)`
- `public void broadcast(@Nullable  Player p_11242_,  double p_11243_,  double p_11244_,  double p_11245_,  double p_11246_,  ResourceKey<Level> p_11247_,  Packet<?> p_11248_)`
- `public void saveAll()`
- `public UserWhiteList getWhiteList()`
- `public String[] getWhiteListNames()`
- `public ServerOpList getOps()`
- `public String[] getOpNames()`
- `public void reloadWhiteList()`
- `public void sendLevelInfo(ServerPlayer p_11230_,  ServerLevel p_11231_)`
- `public void sendAllPlayerInfo(ServerPlayer p_11293_)`
- `public int getPlayerCount()`
- `public int getMaxPlayers()`
- `public boolean isUsingWhitelist()`
- `public void setUsingWhiteList(boolean p_11276_)`
- `public List<ServerPlayer> getPlayersWithAddress(String p_11283_)`
- `public int getViewDistance()`
- `public int getSimulationDistance()`
- `public MinecraftServer getServer()`
- `@Nullable public CompoundTag getSingleplayerData()`
- `public void setAllowCheatsForAllPlayers(boolean p_11285_)`
- `public void removeAll()`
- `public void broadcastSystemMessage(Component p_240618_,  boolean p_240644_)`
- `public void broadcastSystemMessage(Component p_240526_,  Function<ServerPlayer,Component> p_240594_,  boolean p_240648_)`
- `public void broadcastChatMessage(PlayerChatMessage p_243229_,  CommandSourceStack p_243254_,  ChatType.Bound p_243255_)`
- `public void broadcastChatMessage(PlayerChatMessage p_243264_,  ServerPlayer p_243234_,  ChatType.Bound p_243204_)`
- `private void broadcastChatMessage(PlayerChatMessage p_249952_,  Predicate<ServerPlayer> p_250784_,  @Nullable  ServerPlayer p_249623_,  ChatType.Bound p_250276_)`
- `private boolean verifyChatTrusted(PlayerChatMessage p_251384_)`
- `public ServerStatsCounter getPlayerStats(Player p_11240_)`
- `public PlayerAdvancements getPlayerAdvancements(ServerPlayer p_11297_)`
- `public void setViewDistance(int p_11218_)`
- `public void setSimulationDistance(int p_184212_)`
- `public List<ServerPlayer> getPlayers()`
- `@Nullable public ServerPlayer getPlayer(UUID p_11260_)`
- `public boolean canBypassPlayerLimit(com.mojang.authlib.GameProfile p_11298_)`
- `public void reloadResources()`
- `public boolean isAllowCheatsForAllPlayers()`

## ServerOpList

*class* `net.minecraft.server.players.ServerOpList`

### Methods
- `protected StoredUserEntry<com.mojang.authlib.GameProfile> createEntry(com.google.gson.JsonObject p_11348_)`
- `public String[] getUserList()`
- `public boolean canBypassPlayerLimit(com.mojang.authlib.GameProfile p_11352_)`
- `protected String getKeyForUser(com.mojang.authlib.GameProfile p_11354_)`

### Inherited methods
- from `net.minecraft.server.players.StoredUserList`: `add`, `contains`, `get`, `getEntries`, `getFile`, `isEmpty`, `load`, `remove`, `remove`, `save`

## ServerOpListEntry

*class* `net.minecraft.server.players.ServerOpListEntry`

### Fields
- `private final int level`
- `private final boolean bypassesPlayerLimit`

### Methods
- `public int getLevel()`
- `public boolean getBypassesPlayerLimit()`
- `protected void serialize(com.google.gson.JsonObject p_11365_)`
- `@Nullable private static com.mojang.authlib.GameProfile createGameProfile(com.google.gson.JsonObject p_11368_)`

### Inherited methods
- from `net.minecraft.server.players.StoredUserEntry`: `getUser`, `hasExpired`

## SleepStatus

*class* `net.minecraft.server.players.SleepStatus`

### Fields
- `private int activePlayers`
- `private int sleepingPlayers`

### Methods
- `public boolean areEnoughSleeping(int p_144003_)`
- `public boolean areEnoughDeepSleeping(int p_144005_,  List<ServerPlayer> p_144006_)`
- `public int sleepersNeeded(int p_144011_)`
- `public void removeAllSleepers()`
- `public int amountSleeping()`
- `public boolean update(List<ServerPlayer> p_144008_)`

## StoredUserEntry

*class* `net.minecraft.server.players.StoredUserEntry`

### Fields
- `@Nullable private final T user`

### Methods
- `@Nullable T getUser()`
- `boolean hasExpired()`
- `protected abstract void serialize(com.google.gson.JsonObject p_11372_)`

## StoredUserList>

*class* `net.minecraft.server.players.StoredUserList>`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final com.google.gson.Gson GSON`
- `private final File file`
- `private final Map<String,V extends StoredUserEntry<K>> map`

### Methods
- `public File getFile()`
- `public void add(V p_11382_)`
- `@Nullable public V get(K p_11389_)`
- `public void remove(K p_11394_)`
- `public void remove(StoredUserEntry<K> p_11387_)`
- `public String[] getUserList()`
- `public boolean isEmpty()`
- `protected String getKeyForUser(K p_11384_)`
- `protected boolean contains(K p_11397_)`
- `private void removeExpired()`
- `protected abstract StoredUserEntry<K> createEntry(com.google.gson.JsonObject p_11383_)`
- `public Collection<V> getEntries()`
- `public void save()  throws IOException`
  - throws: IOException
- `public void load()  throws IOException`
  - throws: IOException

## UserBanList

*class* `net.minecraft.server.players.UserBanList`

### Methods
- `protected StoredUserEntry<com.mojang.authlib.GameProfile> createEntry(com.google.gson.JsonObject p_11405_)`
- `public boolean isBanned(com.mojang.authlib.GameProfile p_11407_)`
- `public String[] getUserList()`
- `protected String getKeyForUser(com.mojang.authlib.GameProfile p_11411_)`

### Inherited methods
- from `net.minecraft.server.players.StoredUserList`: `add`, `contains`, `get`, `getEntries`, `getFile`, `isEmpty`, `load`, `remove`, `remove`, `save`

## UserBanListEntry

*class* `net.minecraft.server.players.UserBanListEntry`

### Inherited fields
- from `net.minecraft.server.players.BanListEntry`: `created`, `DATE_FORMAT`, `expires`, `EXPIRES_NEVER`, `reason`, `source`

### Methods
- `protected void serialize(com.google.gson.JsonObject p_11444_)`
- `public Component getDisplayName()`
- `@Nullable private static com.mojang.authlib.GameProfile createGameProfile(com.google.gson.JsonObject p_11446_)`

### Inherited methods
- from `net.minecraft.server.players.BanListEntry`: `getCreated`, `getExpires`, `getReason`, `getSource`, `hasExpired`
- from `net.minecraft.server.players.StoredUserEntry`: `getUser`

## UserWhiteList

*class* `net.minecraft.server.players.UserWhiteList`

### Methods
- `protected StoredUserEntry<com.mojang.authlib.GameProfile> createEntry(com.google.gson.JsonObject p_11452_)`
- `public boolean isWhiteListed(com.mojang.authlib.GameProfile p_11454_)`
- `public String[] getUserList()`
- `protected String getKeyForUser(com.mojang.authlib.GameProfile p_11458_)`

### Inherited methods
- from `net.minecraft.server.players.StoredUserList`: `add`, `contains`, `get`, `getEntries`, `getFile`, `isEmpty`, `load`, `remove`, `remove`, `save`

## UserWhiteListEntry

*class* `net.minecraft.server.players.UserWhiteListEntry`

### Methods
- `protected void serialize(com.google.gson.JsonObject p_11464_)`
- `private static com.mojang.authlib.GameProfile createGameProfile(com.google.gson.JsonObject p_11466_)`

### Inherited methods
- from `net.minecraft.server.players.StoredUserEntry`: `getUser`, `hasExpired`
