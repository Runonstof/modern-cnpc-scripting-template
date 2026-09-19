# net.minecraft.client.multiplayer.chat

- [ChatListener](#chatlistener)
- [ChatListener.Message](#chatlistener.message)
- [ChatLog](#chatlog)
- [Class ChatTrustLevel](#class-chattrustlevel)
- [Class LoggedChatEvent.Type](#class-loggedchatevent.type)
- [LoggedChatEvent](#loggedchatevent)
- [LoggedChatMessage](#loggedchatmessage)
- [LoggedChatMessage.Player](#loggedchatmessage.player)
- [LoggedChatMessage.System](#loggedchatmessage.system)
## ChatListener

*class* `net.minecraft.client.multiplayer.chat.ChatListener`

### Fields
- `private static final Component CHAT_VALIDATION_ERROR`
- `private final Minecraft minecraft`
- `private final Deque<ChatListener.Message> delayedMessageQueue`
- `private long messageDelay`
- `private long previousMessageTime`

### Methods
- `public void tick()`
- `public void setMessageDelay(double p_240785_)`
- `public void acceptNextDelayedMessage()`
- `public long queueSize()`
- `public void clearQueue()`
- `public boolean removeFromDelayedMessageQueue(MessageSignature p_241445_)`
- `private boolean willDelayMessages()`
- `private void handleMessage(@Nullable  MessageSignature p_249408_,  BooleanSupplier p_250870_)`
- `public void handlePlayerChatMessage(PlayerChatMessage p_251553_,  com.mojang.authlib.GameProfile p_250022_,  ChatType.Bound p_252158_)`
- `public void handleChatMessageError(UUID p_299386_,  ChatType.Bound p_299443_)`
- `public void handleDisguisedChatMessage(Component p_250375_,  ChatType.Bound p_251256_)`
- `private boolean showMessageToPlayer(ChatType.Bound p_251766_,  PlayerChatMessage p_249430_,  Component p_249231_,  com.mojang.authlib.GameProfile p_249177_,  boolean p_251638_,  Instant p_249665_)`
- `private void narrateChatMessage(ChatType.Bound p_241352_,  Component p_243262_)`
- `private ChatTrustLevel evaluateTrustLevel(PlayerChatMessage p_251246_,  Component p_250576_,  Instant p_249995_)`
- `private void logPlayerMessage(PlayerChatMessage p_252155_,  ChatType.Bound p_249730_,  com.mojang.authlib.GameProfile p_248589_,  ChatTrustLevel p_248881_)`
- `private void logSystemMessage(Component p_240609_,  Instant p_240541_)`
- `public void handleSystemMessage(Component p_240522_,  boolean p_240642_)`
- `private UUID guessChatUUID(Component p_240595_)`
- `private boolean isSenderLocalPlayer(UUID p_241343_)`

## ChatListener.Message

*record* `net.minecraft.client.multiplayer.chat.ChatListener.Message`

Enclosing class: ChatListener

### Fields
- `@Nullable private final MessageSignature signature`
  The field for the signature record component.
- `private final BooleanSupplier handler`
  The field for the handler record component.

### Methods
- `public boolean accept()`
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
- `@Nullable public MessageSignature signature()`
  Returns the value of the signature record component.
  - returns: the value of the signature record component
- `public BooleanSupplier handler()`
  Returns the value of the handler record component.
  - returns: the value of the handler record component

## ChatLog

*class* `net.minecraft.client.multiplayer.chat.ChatLog`

### Fields
- `private final LoggedChatEvent[] buffer`
- `private int nextId`

### Methods
- `public static com.mojang.serialization.Codec<ChatLog> codec(int p_253922_)`
- `private List<LoggedChatEvent> loggedChatEvents()`
- `public void push(LoggedChatEvent p_242319_)`
- `@Nullable public LoggedChatEvent lookup(int p_239050_)`
- `private int index(int p_249044_)`
- `public int start()`
- `public int end()`
- `private int size()`

## Class ChatTrustLevel

*enum* `net.minecraft.client.multiplayer.chat.Class ChatTrustLevel`

### Fields
- `public static final com.mojang.serialization.Codec<ChatTrustLevel> CODEC`
- `private final String serializedName`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static ChatTrustLevel[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ChatTrustLevel valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static ChatTrustLevel evaluate(PlayerChatMessage p_248663_,  Component p_248544_,  Instant p_252024_)`
- `private static boolean isModified(PlayerChatMessage p_252093_,  Component p_250811_)`
- `private static boolean containsModifiedStyle(Component p_251011_)`
- `private static boolean isModifiedStyle(Style p_251347_)`
- `public boolean isNotSecure()`
- `@Nullable public GuiMessageTag createTag(PlayerChatMessage p_240632_)`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class LoggedChatEvent.Type

*enum* `net.minecraft.client.multiplayer.chat.Class LoggedChatEvent.Type`

Enclosing interface: LoggedChatEvent

### Fields
- `private final String serializedName`
- `private final Supplier<com.mojang.serialization.Codec<? extends LoggedChatEvent>> codec`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static LoggedChatEvent.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static LoggedChatEvent.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `private com.mojang.serialization.Codec<? extends LoggedChatEvent> codec()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## LoggedChatEvent

*interface* `net.minecraft.client.multiplayer.chat.LoggedChatEvent`

### Fields
- `static final com.mojang.serialization.Codec<LoggedChatEvent> CODEC`

### Methods
- `LoggedChatEvent.Type type()`

## LoggedChatMessage

*interface* `net.minecraft.client.multiplayer.chat.LoggedChatMessage`

All Superinterfaces: LoggedChatEvent

### Inherited fields
- from `net.minecraft.client.multiplayer.chat.LoggedChatEvent`: `CODEC`

### Methods
- `static LoggedChatMessage.Player player(com.mojang.authlib.GameProfile p_261832_,  PlayerChatMessage p_261491_,  ChatTrustLevel p_262141_)`
- `static LoggedChatMessage.System system(Component p_242325_,  Instant p_242334_)`
- `Component toContentComponent()`
- `default Component toNarrationComponent()`
- `boolean canReport(UUID p_242315_)`

### Inherited methods
- from `net.minecraft.client.multiplayer.chat.LoggedChatEvent`: `type`

## LoggedChatMessage.Player

*record* `net.minecraft.client.multiplayer.chat.LoggedChatMessage.Player`

Enclosing interface: LoggedChatMessage

### Fields
- `private final com.mojang.authlib.GameProfile profile`
  The field for the profile record component.
- `private final PlayerChatMessage message`
  The field for the message record component.
- `private final ChatTrustLevel trustLevel`
  The field for the trustLevel record component.
- `public static final com.mojang.serialization.Codec<LoggedChatMessage.Player> CODEC`
- `private static final DateTimeFormatter TIME_FORMATTER`

### Methods
- `public Component toContentComponent()`
- `public Component toNarrationComponent()`
- `public Component toHeadingComponent()`
- `private Component getTimeComponent()`
- `public boolean canReport(UUID p_242210_)`
- `public UUID profileId()`
- `public LoggedChatEvent.Type type()`
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
- `public com.mojang.authlib.GameProfile profile()`
  Returns the value of the profile record component.
  - returns: the value of the profile record component
- `public PlayerChatMessage message()`
  Returns the value of the message record component.
  - returns: the value of the message record component
- `public ChatTrustLevel trustLevel()`
  Returns the value of the trustLevel record component.
  - returns: the value of the trustLevel record component

## LoggedChatMessage.System

*record* `net.minecraft.client.multiplayer.chat.LoggedChatMessage.System`

Enclosing interface: LoggedChatMessage

### Fields
- `private final Component message`
  The field for the message record component.
- `private final Instant timeStamp`
  The field for the timeStamp record component.
- `public static final com.mojang.serialization.Codec<LoggedChatMessage.System> CODEC`

### Methods
- `public Component toContentComponent()`
- `public boolean canReport(UUID p_242173_)`
- `public LoggedChatEvent.Type type()`
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
- `public Instant timeStamp()`
  Returns the value of the timeStamp record component.
  - returns: the value of the timeStamp record component

### Inherited methods
- from `net.minecraft.client.multiplayer.chat.LoggedChatMessage`: `toNarrationComponent`
