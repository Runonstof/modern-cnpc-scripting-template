# net.minecraftforge.fml.common.network.handshake

- [ChannelRegistrationHandler](#channelregistrationhandler)
- [FMLHandshakeCodec](#fmlhandshakecodec)
- [FMLHandshakeMessage](#fmlhandshakemessage)
- [FMLHandshakeMessage.ClientHello](#fmlhandshakemessage.clienthello)
- [FMLHandshakeMessage.HandshakeAck](#fmlhandshakemessage.handshakeack)
- [FMLHandshakeMessage.HandshakeReset](#fmlhandshakemessage.handshakereset)
- [FMLHandshakeMessage.ModList](#fmlhandshakemessage.modlist)
- [FMLHandshakeMessage.RegistryData](#fmlhandshakemessage.registrydata)
- [FMLHandshakeMessage.ServerHello](#fmlhandshakemessage.serverhello)
- [HandshakeInjector](#handshakeinjector)
- [HandshakeMessageHandler & IHandshakeState>](#handshakemessagehandler-ihandshakestate)
- [IHandshakeState](#ihandshakestate)
- [NetworkDispatcher](#networkdispatcher)
- [NetworkDispatcher.ConnectionType](#networkdispatcher.connectiontype)
## ChannelRegistrationHandler

*class* `net.minecraftforge.fml.common.network.handshake.ChannelRegistrationHandler`

### Methods
- `protected void channelRead0(ChannelHandlerContext ctx,  FMLProxyPacket msg)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void exceptionCaught(ChannelHandlerContext ctx,  java.lang.Throwable cause)  throws java.lang.Exception`
  - throws: java.lang.Exception

## FMLHandshakeCodec

*class* `net.minecraftforge.fml.common.network.handshake.FMLHandshakeCodec`

### Inherited fields
- from `net.minecraftforge.fml.common.network.FMLIndexedMessageToMessageCodec`: `INBOUNDPACKETTRACKER`

### Methods
- `public void encodeInto(ChannelHandlerContext ctx,  FMLHandshakeMessage msg,  ByteBuf target)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void decodeInto(ChannelHandlerContext ctx,  ByteBuf source,  FMLHandshakeMessage msg)`

### Inherited methods
- from `net.minecraftforge.fml.common.network.FMLIndexedMessageToMessageCodec`: `addDiscriminator`, `decode`, `encode`, `exceptionCaught`, `handlerAdded`, `testMessageValidity`

## FMLHandshakeMessage

*class* `net.minecraftforge.fml.common.network.handshake.FMLHandshakeMessage`

### Methods
- `public static FMLProxyPacket makeCustomChannelRegistration(java.util.Set<java.lang.String> channels)`
- `public void fromBytes(ByteBuf buffer)`
- `public void toBytes(ByteBuf buffer)`
- `public java.lang.String toString(java.lang.Class<? extends java.lang.Enum<?>> side)`

## FMLHandshakeMessage.ClientHello

*class* `net.minecraftforge.fml.common.network.handshake.FMLHandshakeMessage.ClientHello`

Enclosing class: FMLHandshakeMessage

### Methods
- `public void toBytes(ByteBuf buffer)`
- `public void fromBytes(ByteBuf buffer)`
- `public byte protocolVersion()`

### Inherited methods
- from `net.minecraftforge.fml.common.network.handshake.FMLHandshakeMessage`: `makeCustomChannelRegistration`, `toString`

## FMLHandshakeMessage.HandshakeAck

*class* `net.minecraftforge.fml.common.network.handshake.FMLHandshakeMessage.HandshakeAck`

Enclosing class: FMLHandshakeMessage

### Methods
- `public void fromBytes(ByteBuf buffer)`
- `public void toBytes(ByteBuf buffer)`
- `public java.lang.String toString(java.lang.Class<? extends java.lang.Enum<?>> side)`

### Inherited methods
- from `net.minecraftforge.fml.common.network.handshake.FMLHandshakeMessage`: `makeCustomChannelRegistration`

## FMLHandshakeMessage.HandshakeReset

*class* `net.minecraftforge.fml.common.network.handshake.FMLHandshakeMessage.HandshakeReset`

Enclosing class: FMLHandshakeMessage

### Inherited methods
- from `net.minecraftforge.fml.common.network.handshake.FMLHandshakeMessage`: `fromBytes`, `makeCustomChannelRegistration`, `toBytes`, `toString`

## FMLHandshakeMessage.ModList

*class* `net.minecraftforge.fml.common.network.handshake.FMLHandshakeMessage.ModList`

Enclosing class: FMLHandshakeMessage

### Methods
- `public void toBytes(ByteBuf buffer)`
- `public void fromBytes(ByteBuf buffer)`
- `public java.lang.String modListAsString()`
- `public int modListSize()`
- `public java.util.Map<java.lang.String,java.lang.String> modList()`
- `public java.lang.String toString(java.lang.Class<? extends java.lang.Enum<?>> side)`

### Inherited methods
- from `net.minecraftforge.fml.common.network.handshake.FMLHandshakeMessage`: `makeCustomChannelRegistration`

## FMLHandshakeMessage.RegistryData

*class* `net.minecraftforge.fml.common.network.handshake.FMLHandshakeMessage.RegistryData`

Enclosing class: FMLHandshakeMessage

### Methods
- `public void fromBytes(ByteBuf buffer)`
- `public void toBytes(ByteBuf buffer)`
- `public java.util.Map<ResourceLocation,java.lang.Integer> getIdMap()`
- `public java.util.Set<ResourceLocation> getDummied()`
- `public java.util.Map<ResourceLocation,java.lang.String> getOverrides()`
- `public ResourceLocation getName()`
- `public boolean hasMore()`
- `public java.lang.String toString(java.lang.Class<? extends java.lang.Enum<?>> side)`

### Inherited methods
- from `net.minecraftforge.fml.common.network.handshake.FMLHandshakeMessage`: `makeCustomChannelRegistration`

## FMLHandshakeMessage.ServerHello

*class* `net.minecraftforge.fml.common.network.handshake.FMLHandshakeMessage.ServerHello`

Enclosing class: FMLHandshakeMessage

### Methods
- `public void toBytes(ByteBuf buffer)`
- `public void fromBytes(ByteBuf buffer)`
- `public byte protocolVersion()`
- `public int overrideDim()`

### Inherited methods
- from `net.minecraftforge.fml.common.network.handshake.FMLHandshakeMessage`: `makeCustomChannelRegistration`, `toString`

## HandshakeInjector

*class* `net.minecraftforge.fml.common.network.handshake.HandshakeInjector`

### Methods
- `public void write(ChannelHandlerContext ctx,  java.lang.Object msg,  ChannelPromise promise)  throws java.lang.Exception`
  - throws: java.lang.Exception

## HandshakeMessageHandler & IHandshakeState>

*class* `net.minecraftforge.fml.common.network.handshake.HandshakeMessageHandler & IHandshakeState>`

### Methods
- `protected void channelRead0(ChannelHandlerContext ctx,  FMLHandshakeMessage msg)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void channelActive(ChannelHandlerContext ctx)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void userEventTriggered(ChannelHandlerContext ctx,  java.lang.Object evt)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void exceptionCaught(ChannelHandlerContext ctx,  java.lang.Throwable cause)  throws java.lang.Exception`
  - throws: java.lang.Exception

## IHandshakeState

*interface* `net.minecraftforge.fml.common.network.handshake.IHandshakeState`

### Methods
- `void accept(ChannelHandlerContext ctx,  FMLHandshakeMessage msg,  java.util.function.Consumer<? super S> cons)`
  Accepts FML handshake message for this state, and if needed - switches to another handshake state
   using the provided consumer.
  
   The consumer allows to set new state before sending any messages to avoid race conditions.

## NetworkDispatcher

*class* `net.minecraftforge.fml.common.network.handshake.NetworkDispatcher`

### Fields
- `public static final <any> FML_DISPATCHER`
- `public static final <any> IS_LOCAL`
- `public static final <any> FML_GAMEDATA_SNAPSHOT`
- `public final NetworkManager manager`

### Methods
- `public static NetworkDispatcher get(NetworkManager manager)`
- `public static NetworkDispatcher allocAndSet(NetworkManager manager)`
- `public static NetworkDispatcher allocAndSet(NetworkManager manager,  PlayerList scm)`
- `public void serverToClientHandshake(EntityPlayerMP player)`
- `protected void setModList(java.util.Map<java.lang.String,java.lang.String> modList)`
- `public void clientToServerHandshake()`
- `protected void channelRead0(ChannelHandlerContext ctx,  Packet<?> msg)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public INetHandler getNetHandler()`
- `public java.util.Map<java.lang.String,java.lang.String> getModList()`
  The mod list returned by this method is in no way reliable because it is provided by the client
  - returns: a map that will contain String keys and values listing all mods and their versions
- `public void userEventTriggered(ChannelHandlerContext ctx,  java.lang.Object evt)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void sendProxy(FMLProxyPacket msg)`
- `public void rejectHandshake(java.lang.String result)`
- `public void bind(ChannelHandlerContext ctx,  java.net.SocketAddress localAddress,  ChannelPromise promise)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void connect(ChannelHandlerContext ctx,  java.net.SocketAddress remoteAddress,  java.net.SocketAddress localAddress,  ChannelPromise promise)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void disconnect(ChannelHandlerContext ctx,  ChannelPromise promise)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void close(ChannelHandlerContext ctx,  ChannelPromise promise)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `@Deprecated public void deregister(ChannelHandlerContext ctx,  ChannelPromise promise)  throws java.lang.Exception` (deprecated)
  Deprecated.
  - throws: java.lang.Exception
- `public void read(ChannelHandlerContext ctx)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void write(ChannelHandlerContext ctx,  java.lang.Object msg,  ChannelPromise promise)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void flush(ChannelHandlerContext ctx)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void completeHandshake(Side target)`
- `public void completeClientHandshake()`
- `public void abortClientHandshake(java.lang.String type)`
- `public void exceptionCaught(ChannelHandlerContext ctx,  java.lang.Throwable cause)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void setOverrideDimension(int overrideDim)`
- `public int getOverrideDimension(SPacketJoinGame packetIn)`
- `public NetworkDispatcher.ConnectionType getConnectionType()`

## NetworkDispatcher.ConnectionType

*enum* `net.minecraftforge.fml.common.network.handshake.NetworkDispatcher.ConnectionType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<NetworkDispatcher.ConnectionType>

Enclosing class: NetworkDispatcher

### Fields
- `public static final NetworkDispatcher.ConnectionType MODDED`
- `public static final NetworkDispatcher.ConnectionType BUKKIT`
- `public static final NetworkDispatcher.ConnectionType VANILLA`

### Methods
- `public static NetworkDispatcher.ConnectionType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (NetworkDispatcher.ConnectionType c : NetworkDispatcher.ConnectionType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static NetworkDispatcher.ConnectionType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
