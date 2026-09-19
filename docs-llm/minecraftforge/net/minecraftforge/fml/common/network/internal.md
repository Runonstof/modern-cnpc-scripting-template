# net.minecraftforge.fml.common.network.internal

- [EntitySpawnHandler](#entityspawnhandler)
- [FMLMessage](#fmlmessage)
- [FMLMessage.CompleteHandshake](#fmlmessage.completehandshake)
- [FMLMessage.EntityMessage](#fmlmessage.entitymessage)
- [FMLMessage.EntitySpawnMessage](#fmlmessage.entityspawnmessage)
- [FMLMessage.OpenGui](#fmlmessage.opengui)
- [FMLNetworkHandler](#fmlnetworkhandler)
- [FMLProxyPacket](#fmlproxypacket)
- [FMLRuntimeCodec](#fmlruntimecodec)
- [HandshakeCompletionHandler](#handshakecompletionhandler)
- [NetworkModHolder](#networkmodholder)
- [NetworkModHolder.NetworkChecker](#networkmodholder.networkchecker)
- [OpenGuiHandler](#openguihandler)
## EntitySpawnHandler

*class* `net.minecraftforge.fml.common.network.internal.EntitySpawnHandler`

### Methods
- `protected void channelRead0(ChannelHandlerContext ctx,  FMLMessage.EntityMessage msg)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void exceptionCaught(ChannelHandlerContext ctx,  java.lang.Throwable cause)  throws java.lang.Exception`
  - throws: java.lang.Exception

## FMLMessage

*class* `net.minecraftforge.fml.common.network.internal.FMLMessage`

## FMLMessage.CompleteHandshake

*class* `net.minecraftforge.fml.common.network.internal.FMLMessage.CompleteHandshake`

Enclosing class: FMLMessage

## FMLMessage.EntityMessage

*class* `net.minecraftforge.fml.common.network.internal.FMLMessage.EntityMessage`

Enclosing class: FMLMessage

## FMLMessage.EntitySpawnMessage

*class* `net.minecraftforge.fml.common.network.internal.FMLMessage.EntitySpawnMessage`

Enclosing class: FMLMessage

## FMLMessage.OpenGui

*class* `net.minecraftforge.fml.common.network.internal.FMLMessage.OpenGui`

Enclosing class: FMLMessage

## FMLNetworkHandler

*class* `net.minecraftforge.fml.common.network.internal.FMLNetworkHandler`

### Fields
- `public static final int READ_TIMEOUT`
- `public static final int LOGIN_TIMEOUT`

### Methods
- `public static void fmlServerHandshake(PlayerList scm,  NetworkManager manager,  EntityPlayerMP player)`
- `public static void fmlClientHandshake(NetworkManager networkManager)`
- `public static void openGui(EntityPlayer entityPlayer,  java.lang.Object mod,  int modGuiId,  World world,  int x,  int y,  int z)`
- `public static Packet<?> getEntitySpawningPacket(Entity entity)`
- `public static java.lang.String checkModList(FMLHandshakeMessage.ModList modListPacket,  Side side)`
- `public static java.lang.String checkModList(java.util.Map<java.lang.String,java.lang.String> listData,  Side side)`
  - param: listData - map of modId string to version string, represents the mods available on the given side
  - param: side - the side that listData is coming from, either client or server
  - returns: null if everything is fine, returns a string error message if there are mod rejections
- `public static void registerChannel(FMLContainer container,  Side side)`
- `public static java.util.List<FMLProxyPacket> forwardHandshake(FMLMessage.CompleteHandshake push,  NetworkDispatcher target,  Side side)`
- `public static void enhanceStatusQuery(JsonObject jsonobject)`

## FMLProxyPacket

*class* `net.minecraftforge.fml.common.network.internal.FMLProxyPacket`

All Implemented Interfaces: Packet<INetHandler>

### Fields
- `public static final int MAX_LENGTH` (= 267366480)

### Methods
- `public void readPacketData(PacketBuffer packetbuffer)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer packetbuffer)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandler inethandler)`
- `public java.lang.String channel()`
- `public ByteBuf payload()`
- `public INetHandler handler()`
- `public Packet<INetHandlerPlayServer> toC17Packet()`
- `public java.util.List<Packet<INetHandlerPlayClient>> toS3FPackets()  throws java.io.IOException`
  - throws: java.io.IOException
- `public void setTarget(Side target)`
- `public void setDispatcher(NetworkDispatcher networkDispatcher)`
- `public NetworkManager getOrigin()`
- `public NetworkDispatcher getDispatcher()`
- `public Side getTarget()`
- `public FMLProxyPacket copy()`

## FMLRuntimeCodec

*class* `net.minecraftforge.fml.common.network.internal.FMLRuntimeCodec`

### Inherited fields
- from `net.minecraftforge.fml.common.network.FMLIndexedMessageToMessageCodec`: `INBOUNDPACKETTRACKER`

### Methods
- `public void encodeInto(ChannelHandlerContext ctx,  FMLMessage msg,  ByteBuf target)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void decodeInto(ChannelHandlerContext ctx,  ByteBuf source,  FMLMessage msg)`
- `protected void testMessageValidity(FMLProxyPacket msg)`
  Description copied from class: FMLIndexedMessageToMessageCodec
  Called to verify the message received. This can be used to hard disconnect in case of an unexpected packet,
   say due to a weird protocol mismatch. Use with caution.

### Inherited methods
- from `net.minecraftforge.fml.common.network.FMLIndexedMessageToMessageCodec`: `addDiscriminator`, `decode`, `encode`, `exceptionCaught`, `handlerAdded`

## HandshakeCompletionHandler

*class* `net.minecraftforge.fml.common.network.internal.HandshakeCompletionHandler`

### Methods
- `protected void channelRead0(ChannelHandlerContext ctx,  FMLMessage.CompleteHandshake msg)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void exceptionCaught(ChannelHandlerContext ctx,  java.lang.Throwable cause)  throws java.lang.Exception`
  - throws: java.lang.Exception

## NetworkModHolder

*class* `net.minecraftforge.fml.common.network.internal.NetworkModHolder`

### Methods
- `public boolean acceptVersion(java.lang.String version)`
- `public boolean check(java.util.Map<java.lang.String,java.lang.String> data,  Side side)`
- `public java.lang.String checkCompatible(java.util.Map<java.lang.String,java.lang.String> data,  Side side)`
- `public int getLocalId()`
- `public int getNetworkId()`
- `public ModContainer getContainer()`
- `public void setNetworkId(int value)`
- `public void testVanillaAcceptance()`
- `public boolean acceptsVanilla(Side from)`

## NetworkModHolder.NetworkChecker

*class* `net.minecraftforge.fml.common.network.internal.NetworkModHolder.NetworkChecker`

Validates that the mods versions on the client and server are compatible with mod.

Enclosing class: NetworkModHolder

### Methods
- `@Deprecated public abstract boolean check(java.util.Map<java.lang.String,java.lang.String> remoteVersions,  Side side)` (deprecated)
  Deprecated. use checkCompatible(Map, Side)
- `public java.lang.String checkCompatible(java.util.Map<java.lang.String,java.lang.String> remoteVersions,  Side side)`
  - param: remoteVersions - map of modIds to version strings, represents all the mods on the given side
  - param: side - the side that the remoteVersions are from
  - returns: null if these mod versions are compatible with this mod,
 an error string reason if these mod versions are not compatible with this mod.

## OpenGuiHandler

*class* `net.minecraftforge.fml.common.network.internal.OpenGuiHandler`

### Methods
- `protected void channelRead0(ChannelHandlerContext ctx,  FMLMessage.OpenGui msg)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void exceptionCaught(ChannelHandlerContext ctx,  java.lang.Throwable cause)  throws java.lang.Exception`
  - throws: java.lang.Exception
