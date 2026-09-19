# com.mojang.realmsclient.client

- [Class Ping.Region](#class-ping.region)
- [Class RealmsClient.CompatibleVersionResponse](#class-realmsclient.compatibleversionresponse)
- [Class RealmsClient.Environment](#class-realmsclient.environment)
- [FileDownload](#filedownload)
- [FileDownload.DownloadCountingOutputStream](#filedownload.downloadcountingoutputstream)
- [FileDownload.ProgressListener](#filedownload.progresslistener)
- [FileDownload.ResourcePackProgressListener](#filedownload.resourcepackprogresslistener)
- [FileUpload](#fileupload)
- [FileUpload.CustomInputStreamEntity](#fileupload.custominputstreamentity)
- [Ping](#ping)
- [RealmsClient](#realmsclient)
- [RealmsClientConfig](#realmsclientconfig)
- [RealmsError](#realmserror)
- [RealmsError.AuthenticationError](#realmserror.authenticationerror)
- [RealmsError.CustomError](#realmserror.customerror)
- [RealmsError.ErrorWithJsonPayload](#realmserror.errorwithjsonpayload)
- [RealmsError.ErrorWithRawPayload](#realmserror.errorwithrawpayload)
- [Request.Delete](#request.delete)
- [Request.Get](#request.get)
- [Request.Post](#request.post)
- [Request.Put](#request.put)
- [Request>](#request)
- [UploadStatus](#uploadstatus)
## Class Ping.Region

*enum* `com.mojang.realmsclient.client.Class Ping.Region`

Enclosing class: Ping

### Fields
- `final String name`
- `final String endpoint`

### Methods
- `public static Ping.Region[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Ping.Region valueOf(String name)`
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

## Class RealmsClient.CompatibleVersionResponse

*enum* `com.mojang.realmsclient.client.Class RealmsClient.CompatibleVersionResponse`

Enclosing class: RealmsClient

### Methods
- `public static RealmsClient.CompatibleVersionResponse[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RealmsClient.CompatibleVersionResponse valueOf(String name)`
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

## Class RealmsClient.Environment

*enum* `com.mojang.realmsclient.client.Class RealmsClient.Environment`

Enclosing class: RealmsClient

### Fields
- `public final String baseUrl`
- `public final String protocol`

### Methods
- `public static RealmsClient.Environment[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RealmsClient.Environment valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static Optional<RealmsClient.Environment> byName(String p_289688_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## FileDownload

*class* `com.mojang.realmsclient.client.FileDownload`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `volatile boolean cancelled`
- `volatile boolean finished`
- `volatile boolean error`
- `volatile boolean extracting`
- `@Nullable private volatile File tempFile`
- `volatile File resourcePackPath`
- `@Nullable private volatile org.apache.http.client.methods.HttpGet request`
- `@Nullable private Thread currentThread`
- `private final org.apache.http.client.config.RequestConfig requestConfig`
- `private static final String[] INVALID_FILE_NAMES`

### Methods
- `public long contentLength(String p_86990_)`
- `public void download(WorldDownload p_86983_,  String p_86984_,  RealmsDownloadLatestWorldScreen.DownloadStatus p_86985_,  LevelStorageSource p_86986_)`
- `public void cancel()`
- `public boolean isFinished()`
- `public boolean isError()`
- `public boolean isExtracting()`
- `public static String findAvailableFolderName(String p_87002_)`
- `void untarGzipArchive(String p_86992_,  @Nullable  File p_86993_,  LevelStorageSource p_86994_)  throws IOException`
  - throws: IOException
- `private static void deletePlayerTag(File p_86988_)`

## FileDownload.DownloadCountingOutputStream

*class* `com.mojang.realmsclient.client.FileDownload.DownloadCountingOutputStream`

Enclosing class: FileDownload

### Fields
- `@Nullable private ActionListener listener`

### Inherited fields
- from `java.io.FilterOutputStream`: `out`

### Methods
- `public void setListener(ActionListener p_87017_)`
- `protected void afterWrite(int p_87019_)  throws IOException`
  - throws: IOException

### Inherited methods
- from `org.apache.commons.io.output.CountingOutputStream`: `beforeWrite`, `getByteCount`, `getCount`, `resetByteCount`, `resetCount`
- from `org.apache.commons.io.output.ProxyOutputStream`: `close`, `flush`, `handleIOException`, `write`, `write`, `write`
- from `java.io.OutputStream`: `nullOutputStream`

## FileDownload.ProgressListener

*class* `com.mojang.realmsclient.client.FileDownload.ProgressListener`

Enclosing class: FileDownload

### Fields
- `private final String worldName`
- `private final File tempFile`
- `private final LevelStorageSource levelStorageSource`
- `private final RealmsDownloadLatestWorldScreen.DownloadStatus downloadStatus`

### Methods
- `public void actionPerformed(ActionEvent p_87039_)`

## FileDownload.ResourcePackProgressListener

*class* `com.mojang.realmsclient.client.FileDownload.ResourcePackProgressListener`

Enclosing class: FileDownload

### Fields
- `private final File tempFile`
- `private final RealmsDownloadLatestWorldScreen.DownloadStatus downloadStatus`
- `private final WorldDownload worldDownload`

### Methods
- `public void actionPerformed(ActionEvent p_87056_)`

## FileUpload

*class* `com.mojang.realmsclient.client.FileUpload`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int MAX_RETRIES` (= 5)
- `private static final String UPLOAD_PATH` (= "/upload")
- `private final File file`
- `private final long worldId`
- `private final int slotId`
- `private final UploadInfo uploadInfo`
- `private final String sessionId`
- `private final String username`
- `private final String clientVersion`
- `private final UploadStatus uploadStatus`
- `private final AtomicBoolean cancelled`
- `@Nullable private CompletableFuture<UploadResult> uploadTask`
- `private final org.apache.http.client.config.RequestConfig requestConfig`

### Methods
- `public void upload(Consumer<UploadResult> p_87085_)`
- `public void cancel()`
- `private UploadResult requestUpload(int p_87080_)`
- `private void cleanup(org.apache.http.client.methods.HttpPost p_87094_,  @Nullable  org.apache.http.impl.client.CloseableHttpClient p_87095_)`
- `private void setupRequest(org.apache.http.client.methods.HttpPost p_87092_)  throws FileNotFoundException`
  - throws: FileNotFoundException
- `private void handleResponse(org.apache.http.HttpResponse p_87089_,  UploadResult.Builder p_87090_)  throws IOException`
  - throws: IOException
- `private boolean shouldRetry(long p_87082_,  int p_87083_)`
- `private UploadResult retryUploadAfter(long p_87098_,  int p_87099_)  throws InterruptedException`
  - throws: InterruptedException
- `private long getRetryDelaySeconds(org.apache.http.HttpResponse p_87087_)`
- `public boolean isFinished()`

## FileUpload.CustomInputStreamEntity

*class* `com.mojang.realmsclient.client.FileUpload.CustomInputStreamEntity`

Enclosing class: FileUpload

### Fields
- `private final long length`
- `private final InputStream content`
- `private final UploadStatus uploadStatus`

### Inherited fields
- from `org.apache.http.entity.AbstractHttpEntity`: `chunked`, `contentEncoding`, `contentType`, `OUTPUT_BUFFER_SIZE`

### Methods
- `public void writeTo(OutputStream p_87109_)  throws IOException`
  - throws: IOException

### Inherited methods
- from `org.apache.http.entity.InputStreamEntity`: `getContent`, `getContentLength`, `isRepeatable`, `isStreaming`
- from `org.apache.http.entity.AbstractHttpEntity`: `consumeContent`, `getContentEncoding`, `getContentType`, `isChunked`, `setChunked`, `setContentEncoding`, `setContentEncoding`, `setContentType`, `setContentType`, `toString`

## Ping

*class* `com.mojang.realmsclient.client.Ping`

### Methods
- `public static List<RegionPingResult> ping(Ping.Region... p_87131_)`
- `private static int ping(String p_87127_)`
- `private static long now()`
- `public static List<RegionPingResult> pingAllRegions()`

## RealmsClient

*class* `com.mojang.realmsclient.client.RealmsClient`

### Fields
- `public static final RealmsClient.Environment ENVIRONMENT`
- `private static final org.slf4j.Logger LOGGER`
- `private final String sessionId`
- `private final String username`
- `private final Minecraft minecraft`
- `private static final String WORLDS_RESOURCE_PATH` (= "worlds")
- `private static final String INVITES_RESOURCE_PATH` (= "invites")
- `private static final String MCO_RESOURCE_PATH` (= "mco")
- `private static final String SUBSCRIPTION_RESOURCE` (= "subscriptions")
- `private static final String ACTIVITIES_RESOURCE` (= "activities")
- `private static final String OPS_RESOURCE` (= "ops")
- `private static final String REGIONS_RESOURCE` (= "regions/ping/stat")
- `private static final String TRIALS_RESOURCE` (= "trial")
- `private static final String NOTIFICATIONS_RESOURCE` (= "notifications")
- `private static final String PATH_INITIALIZE` (= "/$WORLD_ID/initialize")
- `private static final String PATH_GET_ACTIVTIES` (= "/$WORLD_ID")
- `private static final String PATH_GET_LIVESTATS` (= "/liveplayerlist")
- `private static final String PATH_GET_SUBSCRIPTION` (= "/$WORLD_ID")
- `private static final String PATH_OP` (= "/$WORLD_ID/$PROFILE_UUID")
- `private static final String PATH_PUT_INTO_MINIGAMES_MODE` (= "/minigames/$MINIGAME_ID/$WORLD_ID")
- `private static final String PATH_AVAILABLE` (= "/available")
- `private static final String PATH_TEMPLATES` (= "/templates/$WORLD_TYPE")
- `private static final String PATH_WORLD_JOIN` (= "/v1/$ID/join/pc")
- `private static final String PATH_WORLD_GET` (= "/$ID")
- `private static final String PATH_WORLD_INVITES` (= "/$WORLD_ID")
- `private static final String PATH_WORLD_UNINVITE` (= "/$WORLD_ID/invite/$UUID")
- `private static final String PATH_PENDING_INVITES_COUNT` (= "/count/pending")
- `private static final String PATH_PENDING_INVITES` (= "/pending")
- `private static final String PATH_ACCEPT_INVITE` (= "/accept/$INVITATION_ID")
- `private static final String PATH_REJECT_INVITE` (= "/reject/$INVITATION_ID")
- `private static final String PATH_UNINVITE_MYSELF` (= "/$WORLD_ID")
- `private static final String PATH_WORLD_UPDATE` (= "/$WORLD_ID")
- `private static final String PATH_SLOT` (= "/$WORLD_ID/slot/$SLOT_ID")
- `private static final String PATH_WORLD_OPEN` (= "/$WORLD_ID/open")
- `private static final String PATH_WORLD_CLOSE` (= "/$WORLD_ID/close")
- `private static final String PATH_WORLD_RESET` (= "/$WORLD_ID/reset")
- `private static final String PATH_DELETE_WORLD` (= "/$WORLD_ID")
- `private static final String PATH_WORLD_BACKUPS` (= "/$WORLD_ID/backups")
- `private static final String PATH_WORLD_DOWNLOAD` (= "/$WORLD_ID/slot/$SLOT_ID/download")
- `private static final String PATH_WORLD_UPLOAD` (= "/$WORLD_ID/backups/upload")
- `private static final String PATH_CLIENT_COMPATIBLE` (= "/client/compatible")
- `private static final String PATH_TOS_AGREED` (= "/tos/agreed")
- `private static final String PATH_NEWS` (= "/v1/news")
- `private static final String PATH_MARK_NOTIFICATIONS_SEEN` (= "/seen")
- `private static final String PATH_DISMISS_NOTIFICATIONS` (= "/dismiss")
- `private static final GuardedSerializer GSON`

### Methods
- `public static RealmsClient create()`
- `public static RealmsClient create(Minecraft p_239152_)`
- `public RealmsServerList listWorlds()  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public List<RealmsNotification> getNotifications()  throws RealmsServiceException`
  - throws: RealmsServiceException
- `private static com.google.gson.JsonArray uuidListToJsonArray(List<UUID> p_275393_)`
- `public void notificationsSeen(List<UUID> p_275212_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public void notificationsDismiss(List<UUID> p_275407_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public RealmsServer getOwnWorld(long p_87175_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public ServerActivityList getActivity(long p_167279_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public RealmsServerPlayerLists getLiveStats()  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public RealmsServerAddress join(long p_87208_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public void initializeWorld(long p_87192_,  String p_87193_,  String p_87194_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public boolean hasParentalConsent()  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public RealmsClient.CompatibleVersionResponse clientCompatible()  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public void uninvite(long p_87184_,  UUID p_300114_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public void uninviteMyselfFrom(long p_87223_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public RealmsServer invite(long p_87213_,  String p_87214_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public BackupList backupsFor(long p_87231_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public void update(long p_87216_,  String p_87217_,  String p_87218_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public void updateSlot(long p_87180_,  int p_87181_,  RealmsWorldOptions p_87182_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public boolean switchSlot(long p_87177_,  int p_87178_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public void restoreWorld(long p_87225_,  String p_87226_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public WorldTemplatePaginatedList fetchWorldTemplates(int p_87171_,  int p_87172_,  RealmsServer.WorldType p_87173_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public Boolean putIntoMinigameMode(long p_87233_,  String p_87234_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public Ops op(long p_87239_,  UUID p_297634_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public Ops deop(long p_87245_,  UUID p_298989_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public Boolean open(long p_87237_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public Boolean close(long p_87243_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public Boolean resetWorldWithSeed(long p_167276_,  WorldGenerationInfo p_167277_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public Boolean resetWorldWithTemplate(long p_87251_,  String p_87252_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public Subscription subscriptionFor(long p_87249_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public int pendingInvitesCount()  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public PendingInvitesList pendingInvites()  throws RealmsServiceException`
  - throws: RealmsServiceException
- `private boolean isBlocked(PendingInvite p_87198_)`
- `public void acceptInvitation(String p_87202_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public WorldDownload requestDownloadInfo(long p_87210_,  int p_87211_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `@Nullable public UploadInfo requestUploadInfo(long p_87257_,  @Nullable  String p_87258_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public void rejectInvitation(String p_87220_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public void agreeToTos()  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public RealmsNews getNews()  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public void sendPingResults(PingResult p_87200_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public Boolean trialAvailable()  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public void deleteWorld(long p_87255_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `private String url(String p_87228_)`
- `private String url(String p_87204_,  @Nullable  String p_87205_)`
- `private String execute(Request<?> p_87196_)  throws RealmsServiceException`
  - throws: RealmsServiceException

## RealmsClientConfig

*class* `com.mojang.realmsclient.client.RealmsClientConfig`

### Fields
- `@Nullable private static Proxy proxy`

### Methods
- `@Nullable public static Proxy getProxy()`
- `public static void setProxy(Proxy p_87294_)`

## RealmsError

*interface* `com.mojang.realmsclient.client.RealmsError`

### Fields
- `static final Component NO_MESSAGE`
- `static final org.slf4j.Logger LOGGER`

### Methods
- `int errorCode()`
- `Component errorMessage()`
- `String logMessage()`
- `static RealmsError parse(int p_298954_,  String p_87304_)`

## RealmsError.AuthenticationError

*record* `com.mojang.realmsclient.client.RealmsError.AuthenticationError`

Enclosing interface: RealmsError

### Fields
- `private final String message`
  The field for the message record component.
- `public static final int ERROR_CODE` (= 401)

### Inherited fields
- from `com.mojang.realmsclient.client.RealmsError`: `LOGGER`, `NO_MESSAGE`

### Methods
- `public int errorCode()`
- `public Component errorMessage()`
- `public String logMessage()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public String message()`
  Returns the value of the message record component.
  - returns: the value of the message record component

## RealmsError.CustomError

*record* `com.mojang.realmsclient.client.RealmsError.CustomError`

Enclosing interface: RealmsError

### Fields
- `private final int httpCode`
  The field for the httpCode record component.
- `@Nullable private final Component payload`
  The field for the payload record component.
- `public static final RealmsError.CustomError SERVICE_BUSY`
- `public static final Component RETRY_MESSAGE`

### Inherited fields
- from `com.mojang.realmsclient.client.RealmsError`: `LOGGER`, `NO_MESSAGE`

### Methods
- `public static RealmsError.CustomError unknownCompatibilityResponse(String p_300024_)`
- `public static RealmsError.CustomError connectivityError(RealmsHttpException p_298467_)`
- `public static RealmsError.CustomError retry(int p_297862_)`
- `public static RealmsError.CustomError noPayload(int p_298598_)`
- `public int errorCode()`
- `public Component errorMessage()`
- `public String logMessage()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int httpCode()`
  Returns the value of the httpCode record component.
  - returns: the value of the httpCode record component
- `@Nullable public Component payload()`
  Returns the value of the payload record component.
  - returns: the value of the payload record component

## RealmsError.ErrorWithJsonPayload

*record* `com.mojang.realmsclient.client.RealmsError.ErrorWithJsonPayload`

Enclosing interface: RealmsError

### Fields
- `private final int httpCode`
  The field for the httpCode record component.
- `private final int code`
  The field for the code record component.
- `@Nullable private final String reason`
  The field for the reason record component.
- `@Nullable private final String message`
  The field for the message record component.

### Inherited fields
- from `com.mojang.realmsclient.client.RealmsError`: `LOGGER`, `NO_MESSAGE`

### Methods
- `public int errorCode()`
- `public Component errorMessage()`
- `public String logMessage()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int httpCode()`
  Returns the value of the httpCode record component.
  - returns: the value of the httpCode record component
- `public int code()`
  Returns the value of the code record component.
  - returns: the value of the code record component
- `@Nullable public String reason()`
  Returns the value of the reason record component.
  - returns: the value of the reason record component
- `@Nullable public String message()`
  Returns the value of the message record component.
  - returns: the value of the message record component

## RealmsError.ErrorWithRawPayload

*record* `com.mojang.realmsclient.client.RealmsError.ErrorWithRawPayload`

Enclosing interface: RealmsError

### Fields
- `private final int httpCode`
  The field for the httpCode record component.
- `private final String payload`
  The field for the payload record component.

### Inherited fields
- from `com.mojang.realmsclient.client.RealmsError`: `LOGGER`, `NO_MESSAGE`

### Methods
- `public int errorCode()`
- `public Component errorMessage()`
- `public String logMessage()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int httpCode()`
  Returns the value of the httpCode record component.
  - returns: the value of the httpCode record component
- `public String payload()`
  Returns the value of the payload record component.
  - returns: the value of the payload record component

## Request.Delete

*class* `com.mojang.realmsclient.client.Request.Delete`

Enclosing class: Request<T extends Request<T>>

### Inherited fields
- from `com.mojang.realmsclient.client.Request`: `connection`, `url`

### Methods
- `public Request.Delete doConnect()`

### Inherited methods
- from `com.mojang.realmsclient.client.Request`: `connect`, `cookie`, `cookie`, `delete`, `get`, `get`, `getHeader`, `getHeader`, `getRetryAfterHeader`, `getRetryAfterHeader`, `header`, `post`, `post`, `put`, `put`, `responseCode`, `text`

## Request.Get

*class* `com.mojang.realmsclient.client.Request.Get`

Enclosing class: Request<T extends Request<T>>

### Inherited fields
- from `com.mojang.realmsclient.client.Request`: `connection`, `url`

### Methods
- `public Request.Get doConnect()`

### Inherited methods
- from `com.mojang.realmsclient.client.Request`: `connect`, `cookie`, `cookie`, `delete`, `get`, `get`, `getHeader`, `getHeader`, `getRetryAfterHeader`, `getRetryAfterHeader`, `header`, `post`, `post`, `put`, `put`, `responseCode`, `text`

## Request.Post

*class* `com.mojang.realmsclient.client.Request.Post`

Enclosing class: Request<T extends Request<T>>

### Fields
- `private final String content`

### Inherited fields
- from `com.mojang.realmsclient.client.Request`: `connection`, `url`

### Methods
- `public Request.Post doConnect()`

### Inherited methods
- from `com.mojang.realmsclient.client.Request`: `connect`, `cookie`, `cookie`, `delete`, `get`, `get`, `getHeader`, `getHeader`, `getRetryAfterHeader`, `getRetryAfterHeader`, `header`, `post`, `post`, `put`, `put`, `responseCode`, `text`

## Request.Put

*class* `com.mojang.realmsclient.client.Request.Put`

Enclosing class: Request<T extends Request<T>>

### Fields
- `private final String content`

### Inherited fields
- from `com.mojang.realmsclient.client.Request`: `connection`, `url`

### Methods
- `public Request.Put doConnect()`

### Inherited methods
- from `com.mojang.realmsclient.client.Request`: `connect`, `cookie`, `cookie`, `delete`, `get`, `get`, `getHeader`, `getHeader`, `getRetryAfterHeader`, `getRetryAfterHeader`, `header`, `post`, `post`, `put`, `put`, `responseCode`, `text`

## Request>

*class* `com.mojang.realmsclient.client.Request>`

### Fields
- `protected HttpURLConnection connection`
- `private boolean connected`
- `protected String url`
- `private static final int DEFAULT_READ_TIMEOUT`
- `private static final int DEFAULT_CONNECT_TIMEOUT`

### Methods
- `public void cookie(String p_87323_,  String p_87324_)`
- `public static void cookie(HttpURLConnection p_87336_,  String p_87337_,  String p_87338_)`
- `public T header(String p_167286_,  String p_167287_)`
- `public int getRetryAfterHeader()`
- `public static int getRetryAfterHeader(HttpURLConnection p_87331_)`
- `public int responseCode()`
- `public String text()`
- `private String read(@Nullable  InputStream p_87315_)  throws IOException`
  - throws: IOException
- `private void dispose()`
- `protected T connect()`
- `protected abstract T doConnect()`
- `public static Request<?> get(String p_87317_)`
- `public static Request<?> get(String p_87319_,  int p_87320_,  int p_87321_)`
- `public static Request<?> post(String p_87343_,  String p_87344_)`
- `public static Request<?> post(String p_87326_,  String p_87327_,  int p_87328_,  int p_87329_)`
- `public static Request<?> delete(String p_87341_)`
- `public static Request<?> put(String p_87354_,  String p_87355_)`
- `public static Request<?> put(String p_87346_,  String p_87347_,  int p_87348_,  int p_87349_)`
- `public String getHeader(String p_87352_)`
- `public static String getHeader(HttpURLConnection p_87333_,  String p_87334_)`

## UploadStatus

*class* `com.mojang.realmsclient.client.UploadStatus`

### Fields
- `public volatile long bytesWritten`
- `public volatile long totalBytes`
