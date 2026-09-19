# com.mojang.realmsclient.dto

- [Backup](#backup)
- [BackupList](#backuplist)
- [Class RealmsServer.State](#class-realmsserver.state)
- [Class RealmsServer.WorldType](#class-realmsserver.worldtype)
- [Class Subscription.SubscriptionType](#class-subscription.subscriptiontype)
- [Class WorldTemplate.WorldTemplateType](#class-worldtemplate.worldtemplatetype)
- [GuardedSerializer](#guardedserializer)
- [Ops](#ops)
- [PendingInvite](#pendinginvite)
- [PendingInvitesList](#pendinginviteslist)
- [PingResult](#pingresult)
- [PlayerInfo](#playerinfo)
- [RealmsDescriptionDto](#realmsdescriptiondto)
- [RealmsNews](#realmsnews)
- [RealmsNotification](#realmsnotification)
- [RealmsNotification.VisitUrl](#realmsnotification.visiturl)
- [RealmsServer](#realmsserver)
- [RealmsServer.McoServerComparator](#realmsserver.mcoservercomparator)
- [RealmsServerAddress](#realmsserveraddress)
- [RealmsServerList](#realmsserverlist)
- [RealmsServerPing](#realmsserverping)
- [RealmsServerPlayerList](#realmsserverplayerlist)
- [RealmsServerPlayerLists](#realmsserverplayerlists)
- [RealmsText](#realmstext)
- [RealmsWorldOptions](#realmsworldoptions)
- [RealmsWorldResetDto](#realmsworldresetdto)
- [ReflectionBasedSerialization](#reflectionbasedserialization)
- [RegionPingResult](#regionpingresult)
- [ServerActivity](#serveractivity)
- [ServerActivityList](#serveractivitylist)
- [Subscription](#subscription)
- [UploadInfo](#uploadinfo)
- [ValueObject](#valueobject)
- [WorldDownload](#worlddownload)
- [WorldTemplate](#worldtemplate)
- [WorldTemplatePaginatedList](#worldtemplatepaginatedlist)
## Backup

*class* `com.mojang.realmsclient.dto.Backup`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public String backupId`
- `public Date lastModifiedDate`
- `public long size`
- `private boolean uploadedVersion`
- `public Map<String,String> metadata`
- `public Map<String,String> changeList`

### Methods
- `public static Backup parse(com.google.gson.JsonElement p_87400_)`
- `public boolean isUploadedVersion()`
- `public void setUploadedVersion(boolean p_87404_)`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## BackupList

*class* `com.mojang.realmsclient.dto.BackupList`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public List<Backup> backups`

### Methods
- `public static BackupList parse(String p_87410_)`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## Class RealmsServer.State

*enum* `com.mojang.realmsclient.dto.Class RealmsServer.State`

Enclosing class: RealmsServer

### Methods
- `public static RealmsServer.State[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RealmsServer.State valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class RealmsServer.WorldType

*enum* `com.mojang.realmsclient.dto.Class RealmsServer.WorldType`

Enclosing class: RealmsServer

### Methods
- `public static RealmsServer.WorldType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RealmsServer.WorldType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Subscription.SubscriptionType

*enum* `com.mojang.realmsclient.dto.Class Subscription.SubscriptionType`

Enclosing class: Subscription

### Methods
- `public static Subscription.SubscriptionType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Subscription.SubscriptionType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class WorldTemplate.WorldTemplateType

*enum* `com.mojang.realmsclient.dto.Class WorldTemplate.WorldTemplateType`

Enclosing class: WorldTemplate

### Methods
- `public static WorldTemplate.WorldTemplateType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static WorldTemplate.WorldTemplateType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## GuardedSerializer

*class* `com.mojang.realmsclient.dto.GuardedSerializer`

### Fields
- `private final com.google.gson.Gson gson`

### Methods
- `public String toJson(ReflectionBasedSerialization p_87414_)`
- `public String toJson(com.google.gson.JsonElement p_275638_)`
- `@Nullable public <T extends ReflectionBasedSerialization> T fromJson(String p_87416_,  Class<T> p_87417_)`

## Ops

*class* `com.mojang.realmsclient.dto.Ops`

### Fields
- `public Set<String> ops`

### Methods
- `public static Ops parse(String p_87421_)`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## PendingInvite

*class* `com.mojang.realmsclient.dto.PendingInvite`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public String invitationId`
- `public String worldName`
- `public String worldOwnerName`
- `public UUID worldOwnerUuid`
- `public Date date`

### Methods
- `public static PendingInvite parse(com.google.gson.JsonObject p_87431_)`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## PendingInvitesList

*class* `com.mojang.realmsclient.dto.PendingInvitesList`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public List<PendingInvite> pendingInvites`

### Methods
- `public static PendingInvitesList parse(String p_87437_)`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## PingResult

*class* `com.mojang.realmsclient.dto.PingResult`

### Fields
- `@SerializedName("pingResults") public List<RegionPingResult> pingResults`
- `@SerializedName("worldIds") public List<Long> worldIds`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## PlayerInfo

*class* `com.mojang.realmsclient.dto.PlayerInfo`

### Fields
- `@SerializedName("name") private String name`
- `@SerializedName("uuid") private UUID uuid`
- `@SerializedName("operator") private boolean operator`
- `@SerializedName("accepted") private boolean accepted`
- `@SerializedName("online") private boolean online`

### Methods
- `public String getName()`
- `public void setName(String p_87449_)`
- `public UUID getUuid()`
- `public void setUuid(UUID p_300492_)`
- `public boolean isOperator()`
- `public void setOperator(boolean p_87451_)`
- `public boolean getAccepted()`
- `public void setAccepted(boolean p_87456_)`
- `public boolean getOnline()`
- `public void setOnline(boolean p_87459_)`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## RealmsDescriptionDto

*class* `com.mojang.realmsclient.dto.RealmsDescriptionDto`

### Fields
- `@SerializedName("name") public String name`
- `@SerializedName("description") public String description`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## RealmsNews

*class* `com.mojang.realmsclient.dto.RealmsNews`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public String newsLink`

### Methods
- `public static RealmsNews parse(String p_87472_)`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## RealmsNotification

*class* `com.mojang.realmsclient.dto.RealmsNotification`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final String NOTIFICATION_UUID` (= "notificationUuid")
- `private static final String DISMISSABLE` (= "dismissable")
- `private static final String SEEN` (= "seen")
- `private static final String TYPE` (= "type")
- `private static final String VISIT_URL` (= "visitUrl")
- `final UUID uuid`
- `final boolean dismissable`
- `final boolean seen`
- `final String type`

### Methods
- `public boolean seen()`
- `public boolean dismissable()`
- `public UUID uuid()`
- `public static List<RealmsNotification> parseList(String p_275464_)`
- `private static RealmsNotification parse(com.google.gson.JsonObject p_275549_)`

## RealmsNotification.VisitUrl

*class* `com.mojang.realmsclient.dto.RealmsNotification.VisitUrl`

Enclosing class: RealmsNotification

### Fields
- `private static final String URL` (= "url")
- `private static final String BUTTON_TEXT` (= "buttonText")
- `private static final String MESSAGE` (= "message")
- `private final String url`
- `private final RealmsText buttonText`
- `private final RealmsText message`

### Inherited fields
- from `com.mojang.realmsclient.dto.RealmsNotification`: `dismissable`, `seen`, `type`, `uuid`

### Methods
- `public static RealmsNotification.VisitUrl parse(RealmsNotification p_275651_,  com.google.gson.JsonObject p_275278_)`
- `public Component getMessage()`
- `public Button buildOpenLinkButton(Screen p_275412_)`

### Inherited methods
- from `com.mojang.realmsclient.dto.RealmsNotification`: `dismissable`, `parseList`, `seen`, `uuid`

## RealmsServer

*class* `com.mojang.realmsclient.dto.RealmsServer`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public long id`
- `public String remoteSubscriptionId`
- `public String name`
- `public String motd`
- `public RealmsServer.State state`
- `public String owner`
- `public UUID ownerUUID`
- `public List<PlayerInfo> players`
- `public Map<Integer,RealmsWorldOptions> slots`
- `public boolean expired`
- `public boolean expiredTrial`
- `public int daysLeft`
- `public RealmsServer.WorldType worldType`
- `public int activeSlot`
- `public String minigameName`
- `public int minigameId`
- `public String minigameImage`
- `public RealmsServerPing serverPing`

### Methods
- `public String getDescription()`
- `public String getName()`
- `public String getMinigameName()`
- `public void setName(String p_87509_)`
- `public void setDescription(String p_87516_)`
- `public void updateServerPing(RealmsServerPlayerList p_87507_)`
- `public static RealmsServer parse(com.google.gson.JsonObject p_87500_)`
- `private static void sortInvited(RealmsServer p_87505_)`
- `private static List<PlayerInfo> parseInvited(com.google.gson.JsonArray p_87498_)`
- `private static Map<Integer,RealmsWorldOptions> parseSlots(com.google.gson.JsonArray p_87514_)`
- `private static Map<Integer,RealmsWorldOptions> createEmptySlots()`
- `public static RealmsServer parse(String p_87519_)`
- `private static RealmsServer.State getState(String p_87526_)`
- `private static RealmsServer.WorldType getWorldType(String p_87530_)`
- `public int hashCode()`
- `public boolean equals(Object p_87528_)`
- `public RealmsServer clone()`
- `public Map<Integer,RealmsWorldOptions> cloneSlots(Map<Integer,RealmsWorldOptions> p_87511_)`
- `public String getWorldName(int p_87496_)`
- `public ServerData toServerData(String p_87523_)`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## RealmsServer.McoServerComparator

*class* `com.mojang.realmsclient.dto.RealmsServer.McoServerComparator`

Enclosing class: RealmsServer

### Fields
- `private final String refOwner`

### Methods
- `public int compare(RealmsServer p_87536_,  RealmsServer p_87537_)`

### Inherited methods
- from `java.util.Comparator`: `equals`, `reversed`, `thenComparing`, `thenComparing`, `thenComparing`, `thenComparingDouble`, `thenComparingInt`, `thenComparingLong`

## RealmsServerAddress

*class* `com.mojang.realmsclient.dto.RealmsServerAddress`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public String address`
- `public String resourcePackUrl`
- `public String resourcePackHash`

### Methods
- `public static RealmsServerAddress parse(String p_87572_)`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## RealmsServerList

*class* `com.mojang.realmsclient.dto.RealmsServerList`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public List<RealmsServer> servers`

### Methods
- `public static RealmsServerList parse(String p_87578_)`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## RealmsServerPing

*class* `com.mojang.realmsclient.dto.RealmsServerPing`

### Fields
- `public volatile String nrOfPlayers`
- `public volatile String playerList`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## RealmsServerPlayerList

*class* `com.mojang.realmsclient.dto.RealmsServerPlayerList`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public long serverId`
- `public List<UUID> players`

### Methods
- `public static RealmsServerPlayerList parse(com.google.gson.JsonObject p_87591_)`
- `private static List<UUID> parsePlayers(com.google.gson.JsonArray p_87589_)`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## RealmsServerPlayerLists

*class* `com.mojang.realmsclient.dto.RealmsServerPlayerLists`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public List<RealmsServerPlayerList> servers`

### Methods
- `public static RealmsServerPlayerLists parse(String p_87597_)`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## RealmsText

*class* `com.mojang.realmsclient.dto.RealmsText`

### Fields
- `private static final String TRANSLATION_KEY` (= "translationKey")
- `private static final String ARGS` (= "args")
- `private final String translationKey`
- `@Nullable private final Object[] args`

### Methods
- `public Component createComponent(Component p_275681_)`
- `public static RealmsText parse(com.google.gson.JsonObject p_275381_)`

## RealmsWorldOptions

*class* `com.mojang.realmsclient.dto.RealmsWorldOptions`

### Fields
- `public final boolean pvp`
- `public final boolean spawnAnimals`
- `public final boolean spawnMonsters`
- `public final boolean spawnNPCs`
- `public final int spawnProtection`
- `public final boolean commandBlocks`
- `public final boolean forceGameMode`
- `public final int difficulty`
- `public final int gameMode`
- `@Nullable private final String slotName`
- `public long templateId`
- `@Nullable public String templateImage`
- `public boolean empty`
- `private static final boolean DEFAULT_FORCE_GAME_MODE` (= false)
- `private static final boolean DEFAULT_PVP` (= true)
- `private static final boolean DEFAULT_SPAWN_ANIMALS` (= true)
- `private static final boolean DEFAULT_SPAWN_MONSTERS` (= true)
- `private static final boolean DEFAULT_SPAWN_NPCS` (= true)
- `private static final int DEFAULT_SPAWN_PROTECTION` (= 0)
- `private static final boolean DEFAULT_COMMAND_BLOCKS` (= false)
- `private static final int DEFAULT_DIFFICULTY` (= 2)
- `private static final int DEFAULT_GAME_MODE` (= 0)
- `private static final String DEFAULT_SLOT_NAME` (= "")
- `private static final long DEFAULT_TEMPLATE_ID` (= -1L)
- `private static final String DEFAULT_TEMPLATE_IMAGE`

### Methods
- `public static RealmsWorldOptions createDefaults()`
- `public static RealmsWorldOptions createEmptyDefaults()`
- `public void setEmpty(boolean p_87631_)`
- `public static RealmsWorldOptions parse(com.google.gson.JsonObject p_87629_)`
- `public String getSlotName(int p_87627_)`
- `public String getDefaultSlotName(int p_87634_)`
- `public String toJson()`
- `public RealmsWorldOptions clone()`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## RealmsWorldResetDto

*class* `com.mojang.realmsclient.dto.RealmsWorldResetDto`

### Fields
- `@SerializedName("seed") private final String seed`
- `@SerializedName("worldTemplateId") private final long worldTemplateId`
- `@SerializedName("levelType") private final int levelType`
- `@SerializedName("generateStructures") private final boolean generateStructures`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## ReflectionBasedSerialization

*interface* `com.mojang.realmsclient.dto.ReflectionBasedSerialization`

## RegionPingResult

*class* `com.mojang.realmsclient.dto.RegionPingResult`

### Fields
- `@SerializedName("regionName") private final String regionName`
- `@SerializedName("ping") private final int ping`

### Methods
- `public int ping()`
- `public String toString()`

## ServerActivity

*class* `com.mojang.realmsclient.dto.ServerActivity`

### Fields
- `public String profileUuid`
- `public long joinTime`
- `public long leaveTime`

### Methods
- `public static ServerActivity parse(com.google.gson.JsonObject p_167317_)`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## ServerActivityList

*class* `com.mojang.realmsclient.dto.ServerActivityList`

### Fields
- `public long periodInMillis`
- `public List<ServerActivity> serverActivities`

### Methods
- `public static ServerActivityList parse(String p_167322_)`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## Subscription

*class* `com.mojang.realmsclient.dto.Subscription`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public long startDate`
- `public int daysLeft`
- `public Subscription.SubscriptionType type`

### Methods
- `public static Subscription parse(String p_87673_)`
- `private static Subscription.SubscriptionType typeFrom(String p_87675_)`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## UploadInfo

*class* `com.mojang.realmsclient.dto.UploadInfo`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final String DEFAULT_SCHEMA` (= "http://")
- `private static final int DEFAULT_PORT` (= 8080)
- `private static final Pattern URI_SCHEMA_PATTERN`
- `private final boolean worldClosed`
- `@Nullable private final String token`
- `private final URI uploadEndpoint`

### Methods
- `@Nullable public static UploadInfo parse(String p_87701_)`
- `@Nullable public static URI assembleUri(String p_87703_,  int p_87704_)`
- `private static int selectPortOrDefault(int p_87698_,  int p_87699_)`
- `private static String ensureEndpointSchema(String p_87706_,  Matcher p_87707_)`
- `public static String createRequest(@Nullable  String p_87710_)`
- `@Nullable public String getToken()`
- `public URI getUploadEndpoint()`
- `public boolean isWorldClosed()`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## ValueObject

*class* `com.mojang.realmsclient.dto.ValueObject`

### Methods
- `public String toString()`
- `private static String getName(Field p_87714_)`
- `private static boolean isStatic(Field p_87716_)`

## WorldDownload

*class* `com.mojang.realmsclient.dto.WorldDownload`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public String downloadLink`
- `public String resourcePackUrl`
- `public String resourcePackHash`

### Methods
- `public static WorldDownload parse(String p_87725_)`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## WorldTemplate

*class* `com.mojang.realmsclient.dto.WorldTemplate`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public String id`
- `public String name`
- `public String version`
- `public String author`
- `public String link`
- `@Nullable public String image`
- `public String trailer`
- `public String recommendedPlayers`
- `public WorldTemplate.WorldTemplateType type`

### Methods
- `public static WorldTemplate parse(com.google.gson.JsonObject p_87739_)`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`

## WorldTemplatePaginatedList

*class* `com.mojang.realmsclient.dto.WorldTemplatePaginatedList`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public List<WorldTemplate> templates`
- `public int page`
- `public int size`
- `public int total`

### Methods
- `public boolean isLastPage()`
- `public static WorldTemplatePaginatedList parse(String p_87763_)`

### Inherited methods
- from `com.mojang.realmsclient.dto.ValueObject`: `toString`
