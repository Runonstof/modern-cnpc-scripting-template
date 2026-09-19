# net.minecraftforge.event.network

- [ChannelRegistrationChangeEvent](#channelregistrationchangeevent)
- [Class ChannelRegistrationChangeEvent.Type](#class-channelregistrationchangeevent.type)
- [ConnectionStartEvent](#connectionstartevent)
- [CustomPayloadEvent](#custompayloadevent)
- [CustomPayloadEvent.Context](#custompayloadevent.context)
- [GatherLoginConfigurationTasksEvent](#gatherloginconfigurationtasksevent)
## ChannelRegistrationChangeEvent

*class* `net.minecraftforge.event.network.ChannelRegistrationChangeEvent`

Fired when the channel registration (see minecraft custom channel documentation) changes.

 It seems plausible that this will fire multiple times for the same state, depending on what the server is doing.
 It just directly dispatches upon receipt.

### Fields
- `private final Connection source`
- `private final ChannelRegistrationChangeEvent.Type changeType`
- `private final Set<ResourceLocation> channels`

### Methods
- `public ChannelRegistrationChangeEvent.Type getType()`
- `public Connection getSource()`
- `public Set<ResourceLocation> getChannels()`

## Class ChannelRegistrationChangeEvent.Type

*enum* `net.minecraftforge.event.network.Class ChannelRegistrationChangeEvent.Type`

Enclosing class: ChannelRegistrationChangeEvent

### Methods
- `public static ChannelRegistrationChangeEvent.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ChannelRegistrationChangeEvent.Type valueOf(String name)`
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

## ConnectionStartEvent

*class* `net.minecraftforge.event.network.ConnectionStartEvent`

Fired when a network connection is started, either on the server when it receives the
 ClientIntentionPacket or on the client when the channel is first activated. This is
 intended to allow modders to attach things to the channel that can be used in the future.

 As this is a blocking event modders can also do things like load data. Need some example uses.

### Fields
- `private final Connection connection`

### Methods
- `public Connection getConnection()`
- `public boolean isClient()`

## CustomPayloadEvent

*class* `net.minecraftforge.event.network.CustomPayloadEvent`

### Fields
- `private final ResourceLocation channel`
- `private final FriendlyByteBuf payload`
- `private final CustomPayloadEvent.Context source`
- `private final int loginIndex`

### Methods
- `public ResourceLocation getChannel()`
- `public FriendlyByteBuf getPayload()`
- `public int getLoginIndex()`
- `public CustomPayloadEvent.Context getSource()`

## CustomPayloadEvent.Context

*class* `net.minecraftforge.event.network.CustomPayloadEvent.Context`

Context for CustomPayloadEvent

Enclosing class: CustomPayloadEvent

### Fields
- `private final Connection connection`
  The Connection for this message.
- `private final NetworkDirection networkDirection`
  The NetworkDirection this message has been received on.
- `private boolean packetHandled`

### Methods
- `public boolean isClientSide()`
- `public boolean isServerSide()`
- `public NetworkDirection getDirection()`
- `public Connection getConnection()`
- `public <T> io.netty.util.Attribute<T> attr(io.netty.util.AttributeKey<T> key)`
- `public void setPacketHandled(boolean packetHandled)`
- `public boolean getPacketHandled()`
- `public CompletableFuture<Void> enqueueWork(Runnable runnable)`
- `@Nullable public @Nullable ServerPlayer getSender()`
  When available, gets the sender for packets that are sent from a client to the server.

## GatherLoginConfigurationTasksEvent

*class* `net.minecraftforge.event.network.GatherLoginConfigurationTasksEvent`

Gathers tasks that need to be run during the initial login configuration.

### Fields
- `private final Connection connection`
- `private final Consumer<ConfigurationTask> add`

### Methods
- `public Connection getConnection()`
- `public void addTask(ConfigurationTask task)`
