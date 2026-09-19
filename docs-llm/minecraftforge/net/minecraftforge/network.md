# net.minecraftforge.network

- [Channel](#channel)
- [Channel.VersionTest](#channel.versiontest)
- [ChannelBuilder](#channelbuilder)
- [ChannelListManager](#channellistmanager)
- [Class Channel.VersionTest.Status](#class-channel.versiontest.status)
- [Class ConnectionType](#class-connectiontype)
- [Class NetworkDirection](#class-networkdirection)
- [DualStackUtils](#dualstackutils)
- [EventNetworkChannel](#eventnetworkchannel)
- [ForgePacketHandler](#forgepackethandler)
- [IContainerFactory](#icontainerfactory)
- [ICustomPacket>](#icustompacket)
- [NetworkContext](#networkcontext)
- [NetworkContext.NetworkMismatchData](#networkcontext.networkmismatchdata)
- [NetworkContext.NetworkMismatchData.Version](#networkcontext.networkmismatchdata.version)
- [NetworkDirection.Factory>](#networkdirection.factory)
- [NetworkInitialization](#networkinitialization)
- [NetworkInstance](#networkinstance)
- [NetworkRegistry](#networkregistry)
- [PacketDistributor](#packetdistributor)
- [PacketDistributor.PacketTarget](#packetdistributor.packettarget)
- [PacketDistributor.TargetPoint](#packetdistributor.targetpoint)
- [ServerStatusPing](#serverstatusping)
- [ServerStatusPing.ChannelData](#serverstatusping.channeldata)
- [ServerStatusPing.ModInfo](#serverstatusping.modinfo)
- [SimpleChannel](#simplechannel)
- [SimpleChannel.Message](#simplechannel.message)
- [SimpleChannel.MessageBuilder](#simplechannel.messagebuilder)
- [SimpleChannel.MessageBuilder.ToBooleanBiFunction](#simplechannel.messagebuilder.tobooleanbifunction)
- [SimpleChannel.MessageBuilder.ToBooleanTriFunction](#simplechannel.messagebuilder.tobooleantrifunction)
## Channel

*class* `net.minecraftforge.network.Channel`

### Fields
- `protected final NetworkInstance instance`

### Methods
- `public ResourceLocation getName()`
- `public int getProtocolVersion()`
- `public boolean isRemotePresent(Connection connection)`
  Returns true if the channel is present in the given connection.
- `public abstract FriendlyByteBuf toBuffer(MSG message)`
- `Packet<?> toVanillaPacket(Connection connection,  MSG message)`
- `public void send(MSG msg,  Connection connection)`
- `public void send(MSG msg,  PacketDistributor.PacketTarget target)`
  Send a message to the PacketDistributor.PacketTarget from a PacketDistributor instance.
  
   channel.send(message, PacketDistributor.PLAYER.with(()->player))
  - param: target - The curried target from a PacketDistributor
  - param: message - The message to send
- `public void reply(MSG msg,  CustomPayloadEvent.Context context)`

## Channel.VersionTest

*interface* `net.minecraftforge.network.Channel.VersionTest`

Enclosing class: Channel<MSG>

### Fields
- `static final Channel.VersionTest ACCEPT_MISSING`
- `static final Channel.VersionTest ACCEPT_VANILLA`

### Methods
- `static Channel.VersionTest exact(int version)`
- `boolean accepts(Channel.VersionTest.Status status,  int version)`
  Tests is the specified version is compatible with this channel.
   This determines if a we can communicate with a remote end.
  
   The status parameter specifies wither or not the remote knows about
   out channel or not. If the value is MISSING
   or VANILLA then the version parameter is meaningless.
  
   If the status is PRESSENT then the version
   parameter is the version presented by the remote connection.
  - returns: true if we should allow the connection
- `default Channel.VersionTest negate()`
  Returns a instance that represents the logical negation of this
   instance.
- `default Channel.VersionTest and(Channel.VersionTest other)`
  Returns a composed instance that represents a short-circuiting logical
   AND of this instance and another. When evaluating the composed
   instance, if this instance is false, then the other
   instance is not evaluated.
- `default Channel.VersionTest or(Channel.VersionTest other)`
  Returns a composed instance that represents a short-circuiting logical
   OR of this instance and another. When evaluating the composed
   instance, if this instance is true, then the other
   instance is not evaluated.

## ChannelBuilder

*class* `net.minecraftforge.network.ChannelBuilder`

Builder for constructing impl channels using a builder style API.

### Fields
- `private final ResourceLocation name`
- `private int networkProtocolVersion`
- `private Channel.VersionTest clientAcceptedVersions`
- `private Channel.VersionTest serverAcceptedVersions`
- `private Map<io.netty.util.AttributeKey<?>,Function<Connection,?>> attributes`
- `private Consumer<Connection> connectionHandler`

### Methods
- `public static ChannelBuilder named(String channelName)`
  Creates a new channel builder, The name of the channel must be unique.
  - param: channelName - The name of the channel
- `public static ChannelBuilder named(ResourceLocation channelName)`
  Creates a new channel builder, The name of the channel must be unique.
  - param: channelName - The name of the channel
- `public ChannelBuilder networkProtocolVersion(int version)`
  The impl protocol version for this channel. This will be gathered during login and sent to
   the remote partner, where it will be tested with against the relevant predicate.
  
   Defaults to 0
  - throws: IllegalArgumentException - if version is < 0
- `public ChannelBuilder acceptedVersions(Channel.VersionTest test)`
  A predicate run on both sides, with the networkProtocolVersion(int) from
   the server, the channel on the remote side.
  
   Defaults to only accepting current version and requiring it to be present.
  - param: test - A predicate for testing
- `public ChannelBuilder clientAcceptedVersions(Channel.VersionTest test)`
  A predicate run on the client, with the networkProtocolVersion(int) from
   the server, the channel on the remote side.
  
   Defaults to only accepting current version.
  - param: test - A predicate for testing
- `public ChannelBuilder serverAcceptedVersions(Channel.VersionTest test)`
  A predicate run on the server, with the networkProtocolVersion(int) from
   the server, the channel on the remote side.
  
   Defaults to only accepting current version.
  - param: test - A predicate for testing
- `public ChannelBuilder optional()`
  Allows a client to connect to a server that is missing this channel.
   And allows a server to accept a client missing this channel.
  
   This includes vanilla connections.
- `public ChannelBuilder optionalServer()`
  Allows a client to connect to a server that is missing this channel.
- `public ChannelBuilder optionalClient()`
  Tells the server to accept clients that are missing this channel.
- `public <T> ChannelBuilder attribute(io.netty.util.AttributeKey<T> key,  Supplier<T> factory)`
  Registers a AttributeKey to be filled when a new connection is created.
   This is meant as a simple way to attach data on a per-connection bases.
  - param: key - The key to assign
  - param: factory - A factory that creates a new instance of the context data
- `public <T> ChannelBuilder attribute(io.netty.util.AttributeKey<T> key,  Function<Connection,T> factory)`
  Registers a AttributeKey to be filled when a new connection is created.
   This is meant as a simple way to attach data on a per-connection bases.
  - param: key - The key to assign
  - param: factory - A factory that creates a new instance of the context data
- `public ChannelBuilder connectionHandler(Consumer<Connection> handler)`
  Registers a function that will be called when a new connection is established.
   This is meant to allow you to do basic configuration and add context objects.
   This is equivalent to the ConnectionStartEvent
- `private NetworkInstance createNetworkInstance()`
  Create the impl instance
  - returns: the NetworkInstance
- `private Channel.VersionTest getClientAcceptedVersions()`
- `private Channel.VersionTest getServerAcceptedVersions()`
- `public SimpleChannel simpleChannel()`
  Build a new SimpleChannel with this builder's configuration.
  - returns: A new SimpleChannel
- `public EventNetworkChannel eventNetworkChannel()`
  Build a new EventNetworkChannel with this builder's configuration.
  - returns: A new EventNetworkChannel

## ChannelListManager

*class* `net.minecraftforge.network.ChannelListManager`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `static final EventNetworkChannel REGISTER`
- `static final EventNetworkChannel UNREGISTER`

### Methods
- `private static void registerListener(CustomPayloadEvent evt)`
- `private static void unregisterListener(CustomPayloadEvent evt)`
- `public static void addChannels(Connection connection)`
- `public static void addChannels(Connection connection,  ResourceLocation... channels)`
- `public static void addChannels(Connection connection,  Collection<ResourceLocation> channels)`
- `public static void removeChannels(Connection connection,  ResourceLocation... channels)`
- `public static void removeChannels(Connection connection,  Collection<ResourceLocation> channels)`
- `private static void sendChannels(EventNetworkChannel channel,  Connection connection,  Collection<ResourceLocation> channels)`
- `private static void updateFrom(CustomPayloadEvent.Context source,  FriendlyByteBuf buffer,  ChannelRegistrationChangeEvent.Type changeType)`

## Class Channel.VersionTest.Status

*enum* `net.minecraftforge.network.Class Channel.VersionTest.Status`

Enclosing interface: Channel.VersionTest

### Methods
- `public static Channel.VersionTest.Status[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Channel.VersionTest.Status valueOf(String name)`
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

## Class ConnectionType

*enum* `net.minecraftforge.network.Class ConnectionType`

### Methods
- `public static ConnectionType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ConnectionType valueOf(String name)`
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

## Class NetworkDirection

*enum* `net.minecraftforge.network.Class NetworkDirection`

### Fields
- `private final LogicalSide logicalSide`
- `private final Class<? extends Packet> packetClass`
- `private final int otherWay`
- `private final NetworkDirection.Factory factory`
- `private static final it.unimi.dsi.fastutil.objects.Reference2ReferenceArrayMap<Class<? extends Packet>,NetworkDirection> packetLookup`
- `private static final NetworkDirection[] values`

### Methods
- `public static NetworkDirection[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static NetworkDirection valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `private Class<? extends Packet> getPacketClass()`
- `public static <T extends ICustomPacket<?>> NetworkDirection directionFor(Class<T> customPacket)`
- `public NetworkDirection reply()`
- `public LogicalSide getOriginationSide()`
- `public LogicalSide getReceptionSide()`
- `public <T extends Packet<?>> ICustomPacket<T> buildPacket(FriendlyByteBuf data,  ResourceLocation channelName)`
- `private static ServerboundCustomPayloadPacket playServerbound(FriendlyByteBuf data,  Integer index,  ResourceLocation channelName)`
- `private static ClientboundCustomPayloadPacket playClientbound(FriendlyByteBuf data,  Integer index,  ResourceLocation channelName)`
- `private static ServerboundCustomQueryAnswerPacket loginServerbound(FriendlyByteBuf data,  Integer index,  ResourceLocation channelName)`
- `private static ClientboundCustomQueryPacket loginClientbound(FriendlyByteBuf data,  Integer index,  ResourceLocation channelName)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## DualStackUtils

*class* `net.minecraftforge.network.DualStackUtils`

### Fields
- `private static final String INITIAL_PREFER_IPv4_STACK`
- `private static final String INITIAL_PREFER_IPv6_ADDRESSES`
- `private static final org.slf4j.Logger LOGGER`

### Methods
- `@Internal public static void initialise()`
  Called by MinecraftForge to load this class so that the initial network
   property constants are set before any of the other methods in this class are called. This is so we can
   distinguish what Java's read once on JVM start vs what we've set for Netty.
- `public static boolean checkIPv6(String hostAddress)`
  Resolve the address and see if Java and the OS return an IPv6 or IPv4 one, then let Netty know
   accordingly (it doesn't understand the java.net.preferIPv6Addresses=system property).
  - param: hostAddress - The address you want to check
  - returns: true if IPv6, false if IPv4
- `public static boolean checkIPv6(InetAddress inetAddress)`
  Checks if an address is an IPv6 one or an IPv4 one, lets Netty know accordingly and returns the result.
  - param: inetAddress - The address you want to check
  - returns: true if IPv6, false if IPv4
- `private static void debug(boolean shouldLogDebug,  String message)`
- `@Nullable public static InetAddress getLocalAddress()`
  Get the device's local IP address, taking into account scenarios where the client's network adapter
   supports IPv6 and has it enabled but the router's LAN does not.
  - returns: the client's local IP address or null if unable to determine it
- `public static String getMulticastGroup()`
  Used for the "Open to LAN" feature.
  - returns: The multicast group to use for LAN discovery - IPv6 if available, IPv4 otherwise.
- `public static void logInitialPreferences()`
  Logs the initial values of the java.net.preferIPv4Stack and java.net.preferIPv6Addresses system
   properties that Java has read on JVM start. Useful for debugging hostname lookup failures.
- `public static String getAddressString(SocketAddress address)`
  Object.toString() but with IPv6 address compression support

## EventNetworkChannel

*class* `net.minecraftforge.network.EventNetworkChannel`

An event-bus like object on which CustomPayloadEvents are posted.

 These events are fired from the network thread, and so should not interact with most game state by default.
 CustomPayloadEvent.Context.enqueueWork(Runnable) can be used to handle the message on the main server or client
 thread.

### Inherited fields
- from `net.minecraftforge.network.Channel`: `instance`

### Methods
- `public <T extends CustomPayloadEvent> EventNetworkChannel addListener(Consumer<T> eventListener)`
- `public EventNetworkChannel registerObject(Object object)`
- `public void unregisterObject(Object object)`
- `public FriendlyByteBuf toBuffer(FriendlyByteBuf message)`

### Inherited methods
- from `net.minecraftforge.network.Channel`: `getName`, `getProtocolVersion`, `isRemotePresent`, `reply`, `send`, `send`, `toVanillaPacket`

## ForgePacketHandler

*class* `net.minecraftforge.network.ForgePacketHandler`

TODO: Gathered Payloads
 During client to server initiation, on the server, the CustomPayloadEvent.GatherLoginPayloadsEvent is fired,
 which solicits all registered channels at the NetworkRegistry for any
 NetworkRegistry.LoginPayload they wish to supply.

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final org.apache.logging.log4j.Marker MARKER`
- `private Set<ResourceLocation> registriesToReceive`
- `private Map<ResourceLocation,ForgeRegistry.Snapshot> registrySnapshots`
- `private int nextAckId`
- `private it.unimi.dsi.fastutil.ints.Int2ObjectMap<BiConsumer<Acknowledge,CustomPayloadEvent.Context>> pendingAcknowledgments`

### Methods
- `public int expectAck(BiConsumer<Acknowledge,CustomPayloadEvent.Context> consumer)`
- `void handleLoginWrapper(LoginWrapper msg,  CustomPayloadEvent.Context ctx)`
- `void handleClientAck(Acknowledge msg,  CustomPayloadEvent.Context ctx)`
- `void handleModVersions(ModVersions list,  CustomPayloadEvent.Context ctx)`
- `void handleChannelVersions(ChannelVersions list,  CustomPayloadEvent.Context ctx)`
- `void handleModMismatchData(MismatchData data,  CustomPayloadEvent.Context ctx)`
- `void handleRegistryList(RegistryList list,  CustomPayloadEvent.Context ctx)`
- `void handleRegistryData(RegistryData msg,  CustomPayloadEvent.Context ctx)`
- `private boolean handleRegistryLoading(CustomPayloadEvent.Context ctx)`
- `void handleConfigSync(ConfigData msg,  CustomPayloadEvent.Context ctx)`

## IContainerFactory

*interface* `net.minecraftforge.network.IContainerFactory`

All Superinterfaces: MenuType.MenuSupplier<T>

### Methods
- `T create(int windowId,  Inventory inv,  FriendlyByteBuf data)`
- `default T create(int id,  Inventory inv)`

## ICustomPacket>

*interface* `net.minecraftforge.network.ICustomPacket>`

### Methods
- `@Nullable @Nullable FriendlyByteBuf getInternalData()`
  Returns a unsafe reference to this packet's internal data.
   Any modifications to this buffer will be reflected in the main buffer.
- `ResourceLocation getName()`
- `int getIndex()`
- `default NetworkDirection getDirection()`
- `default T getThis()`

## NetworkContext

*class* `net.minecraftforge.network.NetworkContext`

### Fields
- `private static final String MARKER` (= "FORGE")
- `public static final int NET_VERSION` (= 0)
- `private static final io.netty.util.AttributeKey<NetworkContext> CHANNEL_KEY`
- `private final Connection connection`
- `private ConnectionType type`
- `private int netVersion`
- `@Internal Set<ResourceLocation> remoteChannels`
- `private Set<ResourceLocation> remoteChannelsView`
- `@Internal Set<ResourceLocation> sentChannels`
- `@Internal Map<String,ModVersions.Info> modList`
- `private Map<String,ModVersions.Info> modListView`
- `@Internal Map<ResourceLocation,Integer> channelList`
- `@Internal NetworkContext.NetworkMismatchData mismatchData`

### Methods
- `public static NetworkContext get(Connection connection)`
  Gets the associated NetworkContext from the connection, creating a new instance if necessary.
- `public ConnectionType getType()`
- `public int getNetVersion()`
- `public Set<ResourceLocation> getRemoteChannels()`
- `public Map<String,ModVersions.Info> getModList()`
  A list of mods and their verisons reported by the other side of the connection.
   The remote side can and does lie about this, so not rely on it for any anti-cheat system.
- `@Internal public static String enhanceHostName(String hostName)`
  This is a hint that we are a modded client, This is sent in the first packet the client sends to the server.
   Unfortunately we do not have a modder facing value in this packet, so we have a long standing tradition of
   encoding it on the hostName field, which is a UTF string.
   Forge treats this string a null terminated list. With our value being anywhere in the list.
   Our identifier is currently FORGE, Optionally followed by a number indicating the network version.
   If the version is missing, we assume 0.
  
   TODO: Move out of the Intention packet and into a immediately sent Login custom payload? Which should arrive before we get to config stage?
- `@Internal public void processIntention(String hostName)`
- `@Internal public void finishTask(ConfigurationTask.Type task)`
- `@Internal public NetworkContext.NetworkMismatchData getMismatchs()`
- `@Internal void setConnectionType(ConnectionType type)`

## NetworkContext.NetworkMismatchData

*record* `net.minecraftforge.network.NetworkContext.NetworkMismatchData`

Enclosing class: NetworkContext

### Fields
- `private final Map<ResourceLocation,NetworkContext.NetworkMismatchData.Version> mismatched`
  The field for the mismatched record component.
- `private final Set<ResourceLocation> missing`
  The field for the missing record component.
- `private final boolean fromServer`
  The field for the fromServer record component.
- `private final Map<String,ModVersions.Info> mods`
  The field for the mods record component.

### Methods
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
- `public Map<ResourceLocation,NetworkContext.NetworkMismatchData.Version> mismatched()`
  Returns the value of the mismatched record component.
  - returns: the value of the mismatched record component
- `public Set<ResourceLocation> missing()`
  Returns the value of the missing record component.
  - returns: the value of the missing record component
- `public boolean fromServer()`
  Returns the value of the fromServer record component.
  - returns: the value of the fromServer record component
- `public Map<String,ModVersions.Info> mods()`
  Returns the value of the mods record component.
  - returns: the value of the mods record component

## NetworkContext.NetworkMismatchData.Version

*record* `net.minecraftforge.network.NetworkContext.NetworkMismatchData.Version`

Enclosing class: NetworkContext.NetworkMismatchData

### Fields
- `private final String received`
  The field for the received record component.
- `private final String had`
  The field for the had record component.

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
- `public String received()`
  Returns the value of the received record component.
  - returns: the value of the received record component
- `public String had()`
  Returns the value of the had record component.
  - returns: the value of the had record component

## NetworkDirection.Factory>

*interface* `net.minecraftforge.network.NetworkDirection.Factory>`

Enclosing class: NetworkDirection

### Methods
- `ICustomPacket<T> create(FriendlyByteBuf data,  Integer index,  ResourceLocation channelName)`

## NetworkInitialization

*class* `net.minecraftforge.network.NetworkInitialization`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final org.apache.logging.log4j.Marker MARKER`
- `public static final ResourceLocation LOGIN_NAME`
- `public static final ResourceLocation HANDSHAKE_NAME`
- `public static final ResourceLocation PLAY_NAME`
- `public static final io.netty.util.AttributeKey<ForgePacketHandler> CONTEXT`
- `public static SimpleChannel LOGIN`
- `public static SimpleChannel PLAY`

### Methods
- `public static void init()`
- `public static int getVersion()`

## NetworkInstance

*class* `net.minecraftforge.network.NetworkInstance`

This is essentially the shared common class for SimpleChannel and EventNetworkChannel.
 I've now introduced Channel as that common modder facing base class. I am basically using this
 as the internal API and Channel as the public.

### Fields
- `private final net.minecraftforge.eventbus.api.IEventBus networkEventBus`
- `private final ResourceLocation channelName`
- `private final int networkProtocolVersion`
- `final Channel.VersionTest clientAcceptedVersions`
- `final Channel.VersionTest serverAcceptedVersions`
- `final Map<io.netty.util.AttributeKey<?>,Function<Connection,?>> attributes`
- `final Consumer<Connection> channelHandler`
- `final ServerStatusPing.ChannelData pingData`

### Methods
- `private void handleError(net.minecraftforge.eventbus.api.IEventBus iEventBus,  net.minecraftforge.eventbus.api.Event event,  net.minecraftforge.eventbus.api.IEventListener[] iEventListeners,  int i,  Throwable throwable)`
- `public <T extends CustomPayloadEvent> void addListener(Consumer<T> eventListener)`
- `public void registerObject(Object object)`
- `public void unregisterObject(Object object)`
- `public boolean dispatch(CustomPayloadEvent event)`
- `ResourceLocation getChannelName()`
- `int getNetworkProtocolVersion()`
- `void registrationChange(boolean registered)`

## NetworkRegistry

*class* `net.minecraftforge.network.NetworkRegistry`

Tracks channels created by ChannelBuilder. This class is not intended for use by modders.

### Fields
- `static final org.apache.logging.log4j.Logger LOGGER`
- `static final org.apache.logging.log4j.Marker NETREGISTRY`
- `static Map<ResourceLocation,NetworkInstance> instances`
- `static boolean lock`

### Methods
- `public static boolean acceptsVanillaClientConnections()`
- `public static boolean canConnectToVanillaServer()`
- `@Nullable public static @Nullable NetworkInstance findTarget(ResourceLocation resourceLocation)`
- `static Map<ResourceLocation,ServerStatusPing.ChannelData> buildChannelVersionsForListPing()`
- `static List<String> listRejectedVanillaMods(Function<NetworkInstance,Channel.VersionTest> testFunction)`
- `@Nullable public static @Nullable NetworkContext.NetworkMismatchData validateChannels(Map<ResourceLocation,Integer> incoming,  boolean fromClient)`
- `public static boolean checkListPingCompatibilityForClient(Map<ResourceLocation,ServerStatusPing.ChannelData> incoming)`
- `public static void lock()`
- `public static void onConnectionStart(Connection connection)`
- `public static Map<ResourceLocation,Integer> buildChannelVersions()`

## PacketDistributor

*record* `net.minecraftforge.network.PacketDistributor`

Means to distribute packets in various ways

### Fields
- `private final BiFunction<PacketDistributor<T>,T,Consumer<Packet<?>>> functor`
  The field for the functor record component.
- `private final NetworkDirection direction`
  The field for the direction record component.
- `public static final PacketDistributor<ServerPlayer> PLAYER`
  Send to the player specified in the Supplier
  
   with(T) Player
- `public static final PacketDistributor<ResourceKey<Level>> DIMENSION`
  Send to everyone in the dimension specified in the Supplier
  
   with(T) DimensionType
- `public static final PacketDistributor<PacketDistributor.TargetPoint> NEAR`
  Send to everyone near the PacketDistributor.TargetPoint specified in the Supplier
  
   with(T) TargetPoint
- `public static final PacketDistributor<Void> ALL`
  Send to everyone
  
   noArg()
- `public static final PacketDistributor<Void> SERVER`
  Send to the server (CLIENT to SERVER)
  
   noArg()
- `public static final PacketDistributor<Entity> TRACKING_ENTITY`
  Send to all tracking the Entity in the Supplier
  
   with(T) Entity
- `public static final PacketDistributor<Entity> TRACKING_ENTITY_AND_SELF`
  Send to all tracking the Entity and Player in the Supplier
  
   with(T) Entity
- `public static final PacketDistributor<LevelChunk> TRACKING_CHUNK`
  Send to all tracking the Chunk in the Supplier
  
   with(T) Chunk
- `public static final PacketDistributor<List<Connection>> NMLIST`
  Send to the supplied list of NetworkManager instances in the Supplier
  
   with(T) List of NetworkManager

### Methods
- `public PacketDistributor.PacketTarget with(T input)`
  Apply the supplied value to the specific distributor to generate an instance for sending packets to.
  - param: input - The input to apply
  - returns: A curried instance
- `public PacketDistributor.PacketTarget noArg()`
  Apply a no argument value to a distributor to generate an instance for sending packets to.
  - returns: A curried instance
- `private Consumer<Packet<?>> playerConsumer(ServerPlayer player)`
- `private Consumer<Packet<?>> playerListDimConsumer(ResourceKey<Level> dimension)`
- `private Consumer<Packet<?>> playerListAll(Void ignored)`
- `private Consumer<Packet<?>> clientToServer(Void ignored)`
- `private Consumer<Packet<?>> playerListPointConsumer(PacketDistributor.TargetPoint tp)`
- `private Consumer<Packet<?>> trackingEntity(Entity entity)`
- `private Consumer<Packet<?>> trackingEntityAndSelf(Entity entity)`
- `private Consumer<Packet<?>> trackingChunk(LevelChunk chunk)`
- `private Consumer<Packet<?>> networkManagerList(List<Connection> connections)`
- `private MinecraftServer getServer()`
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
- `public BiFunction<PacketDistributor<T>,T,Consumer<Packet<?>>> functor()`
  Returns the value of the functor record component.
  - returns: the value of the functor record component
- `public NetworkDirection direction()`
  Returns the value of the direction record component.
  - returns: the value of the direction record component

## PacketDistributor.PacketTarget

*record* `net.minecraftforge.network.PacketDistributor.PacketTarget`

A Distributor curried with a specific value instance, for actual dispatch

Enclosing class: PacketDistributor<T>

### Fields
- `private final Consumer<Packet<?>> packetConsumer`
  The field for the packetConsumer record component.
- `private final NetworkDirection direction`
  The field for the direction record component.

### Methods
- `public void send(Packet<?> packet)`
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
- `public Consumer<Packet<?>> packetConsumer()`
  Returns the value of the packetConsumer record component.
  - returns: the value of the packetConsumer record component
- `public NetworkDirection direction()`
  Returns the value of the direction record component.
  - returns: the value of the direction record component

## PacketDistributor.TargetPoint

*record* `net.minecraftforge.network.PacketDistributor.TargetPoint`

Enclosing class: PacketDistributor<T>

### Fields
- `@Nullable private final @Nullable ServerPlayer excluded`
  The field for the excluded record component.
- `private final double x`
  The field for the x record component.
- `private final double y`
  The field for the y record component.
- `private final double z`
  The field for the z record component.
- `private final double r2`
  The field for the r2 record component.
- `private final ResourceKey<Level> dim`
  The field for the dim record component.

### Methods
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
- `@Nullable public @Nullable ServerPlayer excluded()`
  Returns the value of the excluded record component.
  - returns: the value of the excluded record component
- `public double x()`
  Returns the value of the x record component.
  - returns: the value of the x record component
- `public double y()`
  Returns the value of the y record component.
  - returns: the value of the y record component
- `public double z()`
  Returns the value of the z record component.
  - returns: the value of the z record component
- `public double r2()`
  Returns the value of the r2 record component.
  - returns: the value of the r2 record component
- `public ResourceKey<Level> dim()`
  Returns the value of the dim record component.
  - returns: the value of the dim record component

## ServerStatusPing

*record* `net.minecraftforge.network.ServerStatusPing`

Represents additional data sent by FML when a server is pinged.
 Previous versions used the following format:

 {
 "fmlNetworkVersion" : FMLNETVERSION,
 "channels": [
 {
 "res": "fml:handshake",
 "version": "1.2.3.4",
 "required": true
 }
 ],
 "mods": [
 {
 "modid": "modid",
 "modmarker": "{@literal <somestring>}"
 }
 ]
 }

 Due to size of the ping packet (32767 UTF-16 code points of JSON data) this could exceed this limit and
 cause issues. To work around this, a truncation mechanism was introduced, to heuristically truncate the size of the
 data, at the expense of making the compatibility info on the server screen inaccurate.

 Modern versions will send binary data, which is encoded in a custom format optimized for UTF-16 code point count.
 See encodeOptimized(ByteBuf) and decodeOptimized(String).
 Essentially 15 bits of binary data are encoded into every UTF-16 code point. The resulting string is then stored in
 the "d" property of the resulting JSON.

 The "channels" and "mods" properties are retained for backwards compatibility,
 but left empty. A client that cannot read the old format would not be able to connect anyways, but the properties
 must exist to not cause exceptions.

 {
 "fmlNetworkVersion": FMLNETVERSION,
 "channels": [],
 "mods": [],
 "d": "&lt;binary data&gt;"
 }

### Fields
- `private final Map<ResourceLocation,ServerStatusPing.ChannelData> channels`
  The field for the channels record component.
- `private final Map<String,String> mods`
  The field for the mods record component.
- `private final int fmlNetworkVer`
  The field for the fmlNetworkVer record component.
- `private final boolean truncated`
  The field for the truncated record component.
- `private static final com.mojang.serialization.Codec<io.netty.buffer.ByteBuf> BYTE_BUF_CODEC`
- `public static final com.mojang.serialization.Codec<ServerStatusPing> CODEC`
- `private static final int VERSION_FLAG_IGNORESERVERONLY` (= 1)

### Methods
- `public boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `private List<Map.Entry<ResourceLocation,ServerStatusPing.ChannelData>> getChannelsForMod(String modId)`
- `private List<Map.Entry<ResourceLocation,ServerStatusPing.ChannelData>> getNonModChannels()`
- `public io.netty.buffer.ByteBuf toBuf()`
- `private static ServerStatusPing deserializeOptimized(int fmlNetworkVersion,  io.netty.buffer.ByteBuf bbuf)`
- `private static String encodeOptimized(io.netty.buffer.ByteBuf buf)`
  Encode given ByteBuf to a String. This is optimized for UTF-16 Code-Point count.
   Supports at most 2^30 bytes in length
- `private static io.netty.buffer.ByteBuf decodeOptimized(String s)`
  Decode binary data encoded by encodeOptimized(io.netty.buffer.ByteBuf)
- `public Map<ResourceLocation,ServerStatusPing.ChannelData> getRemoteChannels()`
- `public Map<String,String> getRemoteModData()`
- `public int getFMLNetworkVersion()`
- `public boolean isTruncated()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public Map<ResourceLocation,ServerStatusPing.ChannelData> channels()`
  Returns the value of the channels record component.
  - returns: the value of the channels record component
- `public Map<String,String> mods()`
  Returns the value of the mods record component.
  - returns: the value of the mods record component
- `public int fmlNetworkVer()`
  Returns the value of the fmlNetworkVer record component.
  - returns: the value of the fmlNetworkVer record component
- `public boolean truncated()`
  Returns the value of the truncated record component.
  - returns: the value of the truncated record component

## ServerStatusPing.ChannelData

*record* `net.minecraftforge.network.ServerStatusPing.ChannelData`

Enclosing class: ServerStatusPing

### Fields
- `private final ResourceLocation res`
  The field for the res record component.
- `private final int version`
  The field for the version record component.
- `private final boolean required`
  The field for the required record component.
- `public static final com.mojang.serialization.Codec<ServerStatusPing.ChannelData> CODEC`

### Methods
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
- `public ResourceLocation res()`
  Returns the value of the res record component.
  - returns: the value of the res record component
- `public int version()`
  Returns the value of the version record component.
  - returns: the value of the version record component
- `public boolean required()`
  Returns the value of the required record component.
  - returns: the value of the required record component

## ServerStatusPing.ModInfo

*record* `net.minecraftforge.network.ServerStatusPing.ModInfo`

Enclosing class: ServerStatusPing

### Fields
- `private final String modId`
  The field for the modId record component.
- `private final String modmarker`
  The field for the modmarker record component.
- `public static final com.mojang.serialization.Codec<ServerStatusPing.ModInfo> CODEC`

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
- `public String modId()`
  Returns the value of the modId record component.
  - returns: the value of the modId record component
- `public String modmarker()`
  Returns the value of the modmarker record component.
  - returns: the value of the modmarker record component

## SimpleChannel

*class* `net.minecraftforge.network.SimpleChannel`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final org.apache.logging.log4j.Marker MARKER`
- `private int lastIndex`
- `private it.unimi.dsi.fastutil.ints.Int2ObjectMap<SimpleChannel.Message<?>> byId`
- `private it.unimi.dsi.fastutil.objects.Object2ObjectMap<Class<?>,SimpleChannel.Message<?>> byType`

### Inherited fields
- from `net.minecraftforge.network.Channel`: `instance`

### Methods
- `public <M> SimpleChannel.MessageBuilder<M> messageBuilder(Class<M> type)`
  Build a new MessageBuilder, using the next available discriminator.
  - param: type - Type of message
- `public <M> SimpleChannel.MessageBuilder<M> messageBuilder(Class<M> type,  int discriminator)`
  Build a new MessageBuilder.
  - param: type - Type of message
  - param: discriminator - Manually configured discriminator, Must be a positive number.
- `public <M> SimpleChannel.MessageBuilder<M> messageBuilder(Class<M> type,  NetworkDirection direction)`
  Build a new MessageBuilder, using the next available discriminator.
  - param: type - Type of message
  - param: direction - a impl direction which will be asserted before any processing of this message occurs. Use to
 enforce strict sided handling to prevent spoofing.
- `public <M> SimpleChannel.MessageBuilder<M> messageBuilder(Class<M> type,  int discriminator,  NetworkDirection direction)`
  Build a new MessageBuilder.
  - param: type - Type of message
  - param: discriminator - Manually configured discriminator, Must be a positive number.
  - param: direction - a impl direction which will be asserted before any processing of this message occurs. Use to
 enforce strict sided handling to prevent spoofing.
- `private int nextIndex()`
- `private void networkEventListener(CustomPayloadEvent event)`
- `private static <MSG> void decodeAndDispatch(FriendlyByteBuf data,  CustomPayloadEvent.Context ctx,  SimpleChannel.Message<MSG> msg)`
- `public FriendlyByteBuf toBuffer(Object message)`

### Inherited methods
- from `net.minecraftforge.network.Channel`: `getName`, `getProtocolVersion`, `isRemotePresent`, `reply`, `send`, `send`, `toVanillaPacket`

## SimpleChannel.Message

*record* `net.minecraftforge.network.SimpleChannel.Message`

Enclosing class: SimpleChannel

### Fields
- `private final int index`
  The field for the index record component.
- `private final Class<MSG> type`
  The field for the type record component.
- `private final Optional<NetworkDirection> direction`
  The field for the direction record component.
- `private final BiConsumer<MSG,FriendlyByteBuf> encoder`
  The field for the encoder record component.
- `private final Function<FriendlyByteBuf,MSG> decoder`
  The field for the decoder record component.
- `private final BiConsumer<MSG,CustomPayloadEvent.Context> consumer`
  The field for the consumer record component.

### Methods
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
- `public int index()`
  Returns the value of the index record component.
  - returns: the value of the index record component
- `public Class<MSG> type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public Optional<NetworkDirection> direction()`
  Returns the value of the direction record component.
  - returns: the value of the direction record component
- `public BiConsumer<MSG,FriendlyByteBuf> encoder()`
  Returns the value of the encoder record component.
  - returns: the value of the encoder record component
- `public Function<FriendlyByteBuf,MSG> decoder()`
  Returns the value of the decoder record component.
  - returns: the value of the decoder record component
- `public BiConsumer<MSG,CustomPayloadEvent.Context> consumer()`
  Returns the value of the consumer record component.
  - returns: the value of the consumer record component

## SimpleChannel.MessageBuilder

*class* `net.minecraftforge.network.SimpleChannel.MessageBuilder`

Enclosing class: SimpleChannel

### Fields
- `private final SimpleChannel channel`
- `private final Class<MSG> type`
- `private final int id`
- `private final Optional<NetworkDirection> direction`
- `private BiConsumer<MSG,FriendlyByteBuf> encoder`
- `private Function<FriendlyByteBuf,MSG> decoder`
- `private BiConsumer<MSG,CustomPayloadEvent.Context> consumer`

### Methods
- `public SimpleChannel.MessageBuilder<MSG> encoder(BiConsumer<MSG,FriendlyByteBuf> encoder)`
  Set the message encoder, which writes this message to a FriendlyByteBuf.
  
   The encoder is called immediately when the
   packet is sent. This means encoding typically occurs on the main server/client thread rather than on the
   network thread.
  
   However, this behaviour should not be relied on, and the encoder should try to be thread-safe and not
   interact with the current game state.
  - param: encoder - The message encoder.
  - returns: This message builder, for chaining.
- `public SimpleChannel.MessageBuilder<MSG> decoder(Function<FriendlyByteBuf,MSG> decoder)`
  Set the message decoder, which reads the message from a FriendlyByteBuf.
  
   The decoder is called when the message is received on the network thread. The decoder should not attempt to
   access or mutate any game state, deferring that until the the
   message is handled.
  - param: decoder - The message decoder.
  - returns: The message builder, for chaining.
- `public SimpleChannel.MessageBuilder<MSG> consumerNetworkThread(BiConsumer<MSG,CustomPayloadEvent.Context> consumer)`
  Set the message consumer, which is called once a message has been decoded. This accepts the decoded message
   object and the message's context.
  
   The consumer is called on the network thread, and so should not interact with most game state by default.
   CustomPayloadEvent.Context.enqueueWork(Runnable) can be used to handle the message on the main server or
   client thread. Alternatively one can use consumerMainThread(BiConsumer) to run the handler on the
   main thread.
  - param: consumer - The message consumer.
  - returns: The message builder, for chaining.
- `public <C> SimpleChannel.MessageBuilder<MSG> consumerNetworkThread(io.netty.util.AttributeKey<C> key,  org.apache.commons.lang3.function.TriConsumer<C,MSG,CustomPayloadEvent.Context> consumer)`
  Set the message consumer, which is called once a message has been decoded. This accepts the decoded message
   object and the message's context. The instance will be retrieved from the associated AttributeKey on the
   channel.
  
   The consumer is called on the network thread, and so should not interact with most game state by default.
   CustomPayloadEvent.Context.enqueueWork(Runnable) can be used to handle the message on the main server or
   client thread. Alternatively one can use #consumerMainThread(TriConsumer) to run the handler on the
   main thread.
  - param: consumer - The message consumer.
  - returns: The message builder, for chaining.
- `public SimpleChannel.MessageBuilder<MSG> consumerNetworkThread(SimpleChannel.MessageBuilder.ToBooleanBiFunction<MSG,CustomPayloadEvent.Context> handler)`
  Function returning a boolean "packet handled" indication, for simpler channel building.
- `public <C> SimpleChannel.MessageBuilder<MSG> consumerNetworkThread(io.netty.util.AttributeKey<C> key,  SimpleChannel.MessageBuilder.ToBooleanTriFunction<C,MSG,CustomPayloadEvent.Context> handler)`
  Function returning a boolean "packet handled" indication, for simpler channel building.
- `public SimpleChannel.MessageBuilder<MSG> consumerMainThread(BiConsumer<MSG,CustomPayloadEvent.Context> consumer)`
  Set the message consumer, which is called once a message has been decoded. This accepts the decoded message
   object and the message's context.
  
   Unlike consumerNetworkThread(BiConsumer), the consumer is called on the main thread, and so can
   interact with most game state by default.
  - param: consumer - The message consumer.
  - returns: The message builder, for chaining.
- `public <C> SimpleChannel.MessageBuilder<MSG> consumerMainThread(io.netty.util.AttributeKey<C> key,  org.apache.commons.lang3.function.TriConsumer<C,MSG,CustomPayloadEvent.Context> consumer)`
  Set the message consumer, which is called once a message has been decoded. This accepts the decoded message
   object and the message's context. The instance will be retrieved from the associated AttributeKey on the
   channel.
  
   Unlike consumerNetworkThread(AttributeKey,TriConsumer), the consumer is called on the main thread,
   and so can interact with most game state by default.
  - param: consumer - The message consumer.
  - returns: The message builder, for chaining.
- `public SimpleChannel add()`
  Finishes building this packet.
  - returns: The attached SimpleChannel to facilitate chaining.

## SimpleChannel.MessageBuilder.ToBooleanBiFunction

*interface* `net.minecraftforge.network.SimpleChannel.MessageBuilder.ToBooleanBiFunction`

Enclosing class: SimpleChannel.MessageBuilder<MSG>

### Methods
- `boolean applyAsBool(T first,  U second)`

## SimpleChannel.MessageBuilder.ToBooleanTriFunction

*interface* `net.minecraftforge.network.SimpleChannel.MessageBuilder.ToBooleanTriFunction`

Enclosing class: SimpleChannel.MessageBuilder<MSG>

### Methods
- `boolean applyAsBool(T first,  U second,  V third)`
