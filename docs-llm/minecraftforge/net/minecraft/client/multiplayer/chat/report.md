# net.minecraft.client.multiplayer.chat.report

- [AbuseReportSender](#abusereportsender)
- [AbuseReportSender.SendException](#abusereportsender.sendexception)
- [AbuseReportSender.Services](#abusereportsender.services)
- [ChatReport](#chatreport)
- [ChatReport.Builder](#chatreport.builder)
- [ChatReportContextBuilder](#chatreportcontextbuilder)
- [ChatReportContextBuilder.Collector](#chatreportcontextbuilder.collector)
- [ChatReportContextBuilder.Handler](#chatreportcontextbuilder.handler)
- [Class BanReason](#class-banreason)
- [Class ReportReason](#class-reportreason)
- [Class ReportType](#class-reporttype)
- [NameReport](#namereport)
- [NameReport.Builder](#namereport.builder)
- [Report](#report)
- [Report.Builder](#report.builder)
- [Report.CannotBuildReason](#report.cannotbuildreason)
- [Report.Result](#report.result)
- [ReportEnvironment](#reportenvironment)
- [ReportEnvironment.Server](#reportenvironment.server)
- [ReportEnvironment.Server.Realm](#reportenvironment.server.realm)
- [ReportEnvironment.Server.ThirdParty](#reportenvironment.server.thirdparty)
- [ReportingContext](#reportingcontext)
- [SkinReport](#skinreport)
- [SkinReport.Builder](#skinreport.builder)
## AbuseReportSender

*interface* `net.minecraft.client.multiplayer.chat.report.AbuseReportSender`

### Methods
- `static AbuseReportSender create(ReportEnvironment p_239536_,  com.mojang.authlib.minecraft.UserApiService p_239537_)`
- `CompletableFuture<com.mojang.datafixers.util.Unit> send(UUID p_239838_,  ReportType p_300399_,  com.mojang.authlib.minecraft.report.AbuseReport p_239839_)`
- `boolean isEnabled()`
- `default com.mojang.authlib.minecraft.report.AbuseReportLimits reportLimits()`

## AbuseReportSender.SendException

*class* `net.minecraft.client.multiplayer.chat.report.AbuseReportSender.SendException`

Enclosing interface: AbuseReportSender

### Inherited methods
- from `net.minecraft.network.chat.ThrowingComponent`: `getComponent`
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## AbuseReportSender.Services

*record* `net.minecraft.client.multiplayer.chat.report.AbuseReportSender.Services`

Enclosing interface: AbuseReportSender

### Fields
- `private final ReportEnvironment environment`
  The field for the environment record component.
- `private final com.mojang.authlib.minecraft.UserApiService userApiService`
  The field for the userApiService record component.
- `private static final Component SERVICE_UNAVAILABLE_TEXT`
- `private static final Component HTTP_ERROR_TEXT`
- `private static final Component JSON_ERROR_TEXT`

### Methods
- `public CompletableFuture<com.mojang.datafixers.util.Unit> send(UUID p_239470_,  ReportType p_297714_,  com.mojang.authlib.minecraft.report.AbuseReport p_239471_)`
- `public boolean isEnabled()`
- `private Component getHttpErrorDescription(com.mojang.authlib.exceptions.MinecraftClientHttpException p_239705_)`
- `private Component getErrorDescription(com.mojang.authlib.exceptions.MinecraftClientException p_240068_)`
- `public com.mojang.authlib.minecraft.report.AbuseReportLimits reportLimits()`
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
- `public ReportEnvironment environment()`
  Returns the value of the environment record component.
  - returns: the value of the environment record component
- `public com.mojang.authlib.minecraft.UserApiService userApiService()`
  Returns the value of the userApiService record component.
  - returns: the value of the userApiService record component

## ChatReport

*class* `net.minecraft.client.multiplayer.chat.report.ChatReport`

### Fields
- `final it.unimi.dsi.fastutil.ints.IntSet reportedMessages`

### Inherited fields
- from `net.minecraft.client.multiplayer.chat.report.Report`: `comments`, `createdAt`, `reason`, `reportedProfileId`, `reportId`

### Methods
- `public void toggleReported(int p_300824_,  com.mojang.authlib.minecraft.report.AbuseReportLimits p_301279_)`
- `public ChatReport copy()`
- `public Screen createScreen(Screen p_300210_,  ReportingContext p_298195_)`

### Inherited methods
- from `net.minecraft.client.multiplayer.chat.report.Report`: `isReportedPlayer`

## ChatReport.Builder

*class* `net.minecraft.client.multiplayer.chat.report.ChatReport.Builder`

Enclosing class: ChatReport

### Inherited fields
- from `net.minecraft.client.multiplayer.chat.report.Report.Builder`: `limits`, `report`

### Methods
- `public it.unimi.dsi.fastutil.ints.IntSet reportedMessages()`
- `public void toggleReported(int p_300108_)`
- `public boolean isReported(int p_298529_)`
- `public boolean hasContent()`
- `@Nullable public Report.CannotBuildReason checkBuildable()`
- `public com.mojang.datafixers.util.Either<Report.Result,Report.CannotBuildReason> build(ReportingContext p_298383_)`
- `private com.mojang.authlib.minecraft.report.ReportEvidence buildEvidence(ReportingContext p_297642_)`
- `private com.mojang.authlib.minecraft.report.ReportChatMessage buildReportedChatMessage(LoggedChatMessage.Player p_299286_,  boolean p_299614_)`
- `public ChatReport.Builder copy()`

### Inherited methods
- from `net.minecraft.client.multiplayer.chat.report.Report.Builder`: `comments`, `reason`, `report`, `reportedProfileId`, `setComments`, `setReason`

## ChatReportContextBuilder

*class* `net.minecraft.client.multiplayer.chat.report.ChatReportContextBuilder`

### Fields
- `final int leadingCount`
- `private final List<ChatReportContextBuilder.Collector> activeCollectors`

### Methods
- `public void collectAllContext(ChatLog p_249467_,  it.unimi.dsi.fastutil.ints.IntCollection p_250295_,  ChatReportContextBuilder.Handler p_251946_)`
- `public void trackContext(PlayerChatMessage p_252057_)`
- `public boolean acceptContext(PlayerChatMessage p_250059_)`
- `public boolean isActive()`

## ChatReportContextBuilder.Collector

*class* `net.minecraft.client.multiplayer.chat.report.ChatReportContextBuilder.Collector`

Enclosing class: ChatReportContextBuilder

### Fields
- `private final Set<MessageSignature> lastSeenSignatures`
- `private PlayerChatMessage lastChainMessage`
- `private boolean collectingChain`
- `private int count`

### Methods
- `boolean accept(PlayerChatMessage p_252313_)`
- `boolean isComplete()`

## ChatReportContextBuilder.Handler

*interface* `net.minecraft.client.multiplayer.chat.report.ChatReportContextBuilder.Handler`

Enclosing class: ChatReportContextBuilder

### Methods
- `void accept(int p_248905_,  LoggedChatMessage.Player p_249564_)`

## Class BanReason

*enum* `net.minecraft.client.multiplayer.chat.report.Class BanReason`

### Fields
- `private final Component title`

### Methods
- `public static BanReason[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static BanReason valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public Component title()`
- `@Nullable public static BanReason byId(int p_272793_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ReportReason

*enum* `net.minecraft.client.multiplayer.chat.report.Class ReportReason`

### Fields
- `private final String backendName`
- `private final Component title`
- `private final Component description`

### Methods
- `public static ReportReason[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ReportReason valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String backendName()`
- `public Component title()`
- `public Component description()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ReportType

*enum* `net.minecraft.client.multiplayer.chat.report.Class ReportType`

### Fields
- `private final String backendName`

### Methods
- `public static ReportType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ReportType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String backendName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## NameReport

*class* `net.minecraft.client.multiplayer.chat.report.NameReport`

### Fields
- `private final String reportedName`

### Inherited fields
- from `net.minecraft.client.multiplayer.chat.report.Report`: `comments`, `createdAt`, `reason`, `reportedProfileId`, `reportId`

### Methods
- `public String getReportedName()`
- `public NameReport copy()`
- `public Screen createScreen(Screen p_300004_,  ReportingContext p_297616_)`

### Inherited methods
- from `net.minecraft.client.multiplayer.chat.report.Report`: `isReportedPlayer`

## NameReport.Builder

*class* `net.minecraft.client.multiplayer.chat.report.NameReport.Builder`

Enclosing class: NameReport

### Inherited fields
- from `net.minecraft.client.multiplayer.chat.report.Report.Builder`: `limits`, `report`

### Methods
- `public boolean hasContent()`
- `@Nullable public Report.CannotBuildReason checkBuildable()`
- `public com.mojang.datafixers.util.Either<Report.Result,Report.CannotBuildReason> build(ReportingContext p_299061_)`

### Inherited methods
- from `net.minecraft.client.multiplayer.chat.report.Report.Builder`: `comments`, `reason`, `report`, `reportedProfileId`, `setComments`, `setReason`

## Report

*class* `net.minecraft.client.multiplayer.chat.report.Report`

### Fields
- `protected final UUID reportId`
- `protected final Instant createdAt`
- `protected final UUID reportedProfileId`
- `protected String comments`
- `@Nullable protected ReportReason reason`

### Methods
- `public boolean isReportedPlayer(UUID p_297578_)`
- `public abstract Report copy()`
- `public abstract Screen createScreen(Screen p_299662_,  ReportingContext p_299414_)`

## Report.Builder

*class* `net.minecraft.client.multiplayer.chat.report.Report.Builder`

Enclosing class: Report

### Fields
- `protected final R extends Report report`
- `protected final com.mojang.authlib.minecraft.report.AbuseReportLimits limits`

### Methods
- `public R report()`
- `public UUID reportedProfileId()`
- `public String comments()`
- `public void setComments(String p_298827_)`
- `@Nullable public ReportReason reason()`
- `public void setReason(ReportReason p_298659_)`
- `public abstract boolean hasContent()`
- `@Nullable public abstract Report.CannotBuildReason checkBuildable()`
- `public abstract com.mojang.datafixers.util.Either<Report.Result,Report.CannotBuildReason> build(ReportingContext p_301358_)`

## Report.CannotBuildReason

*record* `net.minecraft.client.multiplayer.chat.report.Report.CannotBuildReason`

Enclosing class: Report

### Fields
- `private final Component message`
  The field for the message record component.
- `public static final Report.CannotBuildReason NO_REASON`
- `public static final Report.CannotBuildReason NO_REPORTED_MESSAGES`
- `public static final Report.CannotBuildReason TOO_MANY_MESSAGES`
- `public static final Report.CannotBuildReason COMMENT_TOO_LONG`

### Methods
- `public Tooltip tooltip()`
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
- `public Component message()`
  Returns the value of the message record component.
  - returns: the value of the message record component

## Report.Result

*record* `net.minecraft.client.multiplayer.chat.report.Report.Result`

Enclosing class: Report

### Fields
- `private final UUID id`
  The field for the id record component.
- `private final ReportType reportType`
  The field for the reportType record component.
- `private final com.mojang.authlib.minecraft.report.AbuseReport report`
  The field for the report record component.

### Methods
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
- `public UUID id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public ReportType reportType()`
  Returns the value of the reportType record component.
  - returns: the value of the reportType record component
- `public com.mojang.authlib.minecraft.report.AbuseReport report()`
  Returns the value of the report record component.
  - returns: the value of the report record component

## ReportEnvironment

*record* `net.minecraft.client.multiplayer.chat.report.ReportEnvironment`

### Fields
- `private final String clientVersion`
  The field for the clientVersion record component.
- `@Nullable private final ReportEnvironment.Server server`
  The field for the server record component.

### Methods
- `public static ReportEnvironment local()`
- `public static ReportEnvironment thirdParty(String p_238999_)`
- `public static ReportEnvironment realm(RealmsServer p_239765_)`
- `public static ReportEnvironment create(@Nullable  ReportEnvironment.Server p_239956_)`
- `public com.mojang.authlib.yggdrasil.request.AbuseReportRequest.ClientInfo clientInfo()`
- `@Nullable public com.mojang.authlib.yggdrasil.request.AbuseReportRequest.ThirdPartyServerInfo thirdPartyServerInfo()`
- `@Nullable public com.mojang.authlib.yggdrasil.request.AbuseReportRequest.RealmInfo realmInfo()`
- `private static String getClientVersion()`
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
- `public String clientVersion()`
  Returns the value of the clientVersion record component.
  - returns: the value of the clientVersion record component
- `@Nullable public ReportEnvironment.Server server()`
  Returns the value of the server record component.
  - returns: the value of the server record component

## ReportEnvironment.Server

*interface* `net.minecraft.client.multiplayer.chat.report.ReportEnvironment.Server`

Enclosing class: ReportEnvironment

## ReportEnvironment.Server.Realm

*record* `net.minecraft.client.multiplayer.chat.report.ReportEnvironment.Server.Realm`

Enclosing interface: ReportEnvironment.Server

### Fields
- `private final long realmId`
  The field for the realmId record component.
- `private final int slotId`
  The field for the slotId record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public long realmId()`
  Returns the value of the realmId record component.
  - returns: the value of the realmId record component
- `public int slotId()`
  Returns the value of the slotId record component.
  - returns: the value of the slotId record component

## ReportEnvironment.Server.ThirdParty

*record* `net.minecraft.client.multiplayer.chat.report.ReportEnvironment.Server.ThirdParty`

Enclosing interface: ReportEnvironment.Server

### Fields
- `private final String ip`
  The field for the ip record component.

### Methods
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
- `public String ip()`
  Returns the value of the ip record component.
  - returns: the value of the ip record component

## ReportingContext

*class* `net.minecraft.client.multiplayer.chat.report.ReportingContext`

### Fields
- `private static final int LOG_CAPACITY` (= 1024)
- `private final AbuseReportSender sender`
- `private final ReportEnvironment environment`
- `private final ChatLog chatLog`
- `@Nullable private Report draftReport`

### Methods
- `public static ReportingContext create(ReportEnvironment p_239686_,  com.mojang.authlib.minecraft.UserApiService p_239687_)`
- `public void draftReportHandled(Minecraft p_261771_,  Screen p_261866_,  Runnable p_262031_,  boolean p_261540_)`
- `public AbuseReportSender sender()`
- `public ChatLog chatLog()`
- `public boolean matches(ReportEnvironment p_239734_)`
- `public void setReportDraft(@Nullable  Report p_299003_)`
- `public boolean hasDraftReport()`
- `public boolean hasDraftReportFor(UUID p_254340_)`

## SkinReport

*class* `net.minecraft.client.multiplayer.chat.report.SkinReport`

### Fields
- `final Supplier<PlayerSkin> skinGetter`

### Inherited fields
- from `net.minecraft.client.multiplayer.chat.report.Report`: `comments`, `createdAt`, `reason`, `reportedProfileId`, `reportId`

### Methods
- `public Supplier<PlayerSkin> getSkinGetter()`
- `public SkinReport copy()`
- `public Screen createScreen(Screen p_297640_,  ReportingContext p_297669_)`

### Inherited methods
- from `net.minecraft.client.multiplayer.chat.report.Report`: `isReportedPlayer`

## SkinReport.Builder

*class* `net.minecraft.client.multiplayer.chat.report.SkinReport.Builder`

Enclosing class: SkinReport

### Inherited fields
- from `net.minecraft.client.multiplayer.chat.report.Report.Builder`: `limits`, `report`

### Methods
- `public boolean hasContent()`
- `@Nullable public Report.CannotBuildReason checkBuildable()`
- `public com.mojang.datafixers.util.Either<Report.Result,Report.CannotBuildReason> build(ReportingContext p_297496_)`

### Inherited methods
- from `net.minecraft.client.multiplayer.chat.report.Report.Builder`: `comments`, `reason`, `report`, `reportedProfileId`, `setComments`, `setReason`
