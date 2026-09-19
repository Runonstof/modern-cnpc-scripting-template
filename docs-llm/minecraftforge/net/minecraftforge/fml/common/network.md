# net.minecraftforge.fml.common.network

- [ByteBufUtils](#bytebufutils)
- [FMLEmbeddedChannel](#fmlembeddedchannel)
- [FMLEventChannel](#fmleventchannel)
- [FMLIndexedMessageToMessageCodec](#fmlindexedmessagetomessagecodec)
- [FMLNetworkEvent](#fmlnetworkevent)
- [FMLNetworkEvent.ClientConnectedToServerEvent](#fmlnetworkevent.clientconnectedtoserverevent)
- [FMLNetworkEvent.ClientCustomPacketEvent](#fmlnetworkevent.clientcustompacketevent)
- [FMLNetworkEvent.ClientDisconnectionFromServerEvent](#fmlnetworkevent.clientdisconnectionfromserverevent)
- [FMLNetworkEvent.CustomNetworkEvent](#fmlnetworkevent.customnetworkevent)
- [FMLNetworkEvent.CustomPacketEvent](#fmlnetworkevent.custompacketevent)
- [FMLNetworkEvent.CustomPacketRegistrationEvent](#fmlnetworkevent.custompacketregistrationevent)
- [FMLNetworkEvent.ServerConnectionFromClientEvent](#fmlnetworkevent.serverconnectionfromclientevent)
- [FMLNetworkEvent.ServerCustomPacketEvent](#fmlnetworkevent.servercustompacketevent)
- [FMLNetworkEvent.ServerDisconnectionFromClientEvent](#fmlnetworkevent.serverdisconnectionfromclientevent)
- [FMLNetworkException](#fmlnetworkexception)
- [FMLOutboundHandler](#fmloutboundhandler)
- [FMLOutboundHandler.OutboundTarget](#fmloutboundhandler.outboundtarget)
- [IGuiHandler](#iguihandler)
- [NetworkCheckHandler](#networkcheckhandler)
- [NetworkEventFiringHandler](#networkeventfiringhandler)
- [NetworkHandshakeEstablished](#networkhandshakeestablished)
- [NetworkRegistry](#networkregistry)
- [NetworkRegistry.TargetPoint](#networkregistry.targetpoint)
- [PacketLoggingHandler](#packetlogginghandler)
## ByteBufUtils

*class* `net.minecraftforge.fml.common.network.ByteBufUtils`

Utilities for interacting with ByteBuf.

### Methods
- `public static int varIntByteCount(int toCount)`
  The number of bytes to write the supplied int using the 7 bit varint encoding.
  - param: toCount - The number to analyse
  - returns: The number of bytes it will take to write it (maximum of 5)
- `public static int readVarInt(ByteBuf buf,  int maxSize)`
  Read a varint from the supplied buffer.
  - param: buf - The buffer to read from
  - param: maxSize - The maximum length of bytes to read
  - returns: The integer
- `public static int readVarShort(ByteBuf buf)`
  An extended length short. Used by custom payload packets to extend size.
  - param: buf -
- `public static void writeVarShort(ByteBuf buf,  int toWrite)`
- `public static void writeVarInt(ByteBuf to,  int toWrite,  int maxSize)`
  Write an integer to the buffer using variable length encoding. The maxSize constrains
   how many bytes (and therefore the maximum number) that will be written.
  - param: to - The buffer to write to
  - param: toWrite - The integer to write
  - param: maxSize - The maximum number of bytes to use
- `public static java.lang.String readUTF8String(ByteBuf from)`
  Read a UTF8 string from the byte buffer.
   It is encoded as []
  - param: from - The buffer to read from
  - returns: The string
- `public static void writeUTF8String(ByteBuf to,  java.lang.String string)`
  Write a String with UTF8 byte encoding to the buffer.
   It is encoded as []
  - param: to - the buffer to write to
  - param: string - The string to write
- `public static void writeItemStack(ByteBuf to,  ItemStack stack)`
  Write an ItemStack using minecraft compatible encoding.
  - param: to - The buffer to write to
  - param: stack - The itemstack to write
- `public static ItemStack readItemStack(ByteBuf from)`
  Read an ItemStack from the byte buffer provided. It uses the minecraft encoding.
  - param: from - The buffer to read from
  - returns: The itemstack read
- `public static void writeTag(ByteBuf to,  NBTTagCompound tag)`
  Write an NBTTagCompound to the byte buffer. It uses the minecraft encoding.
  - param: to - The buffer to write to
  - param: tag - The tag to write
- `public static NBTTagCompound readTag(ByteBuf from)`
  Read an NBTTagCompound from the byte buffer. It uses the minecraft encoding.
  - param: from - The buffer to read from
  - returns: The read tag
- `public static <T extends IForgeRegistryEntry<T>> void writeRegistryEntry(ByteBuf out,  T entry)`
  Write a registry entry to the stream. The serialized format is not specified and must not be relied upon.
   Do not use this to write to a file, it is used for client-server communication only.
  - param: out - the buffer to write to
  - param: entry - the registry entry
- `public static <T extends IForgeRegistryEntry<T>> T readRegistryEntry(ByteBuf in,  IForgeRegistry<T> registry)`
  Read a registry entry from the stream. The same format as in writeRegistryEntry(ByteBuf, IForgeRegistryEntry) is used.
  - param: in - the buffer to read from
  - param: registry - the registry the entry belongs to
  - returns: the read registry entry
- `public static <T extends IForgeRegistryEntry<T>> void writeRegistryEntries(ByteBuf out,  java.util.Collection<T> entries)`
  Write multiple registry entries from the same registry to the stream. The serialized format may be more compact than using
   writeRegistryEntry(ByteBuf, IForgeRegistryEntry) multiple times.
  - param: out - the buffer to write to
  - param: entries - the entries to write
- `public static <T extends IForgeRegistryEntry<T>> java.util.List<T> readRegistryEntries(ByteBuf in,  IForgeRegistry<T> registry)`
  Read multiple registry entries from the same registries from the stream. The list of entries must have been written by
   writeRegistryEntries(ByteBuf, Collection).
  - param: in - the buffer to read from
  - param: registry - the registry the entries belong to
  - returns: the immutable list of entries
- `public static java.lang.String getContentDump(ByteBuf buffer)`

## FMLEmbeddedChannel

*class* `net.minecraftforge.fml.common.network.FMLEmbeddedChannel`

Utility wrapper around EmbeddedChannel. Provides some convenience methods
 associated with the specific needs of FML network handling.

### Methods
- `public Packet<?> generatePacketFrom(java.lang.Object object)`
  Utility method to generate a regular packet from a custom packet. Basically, it writes the packet through the
   outbound side which should have a message to message codec present (such as FMLIndexedMessageToMessageCodec,
   transforming from mod packets to standard FMLProxyPackets.
  
   This is mostly useful in cases where vanilla expects a packet, such as the TileEntity getDescriptionPacket.
  - param: object - The inbound packet
  - returns: A Packet suitable for passing to vanilla network code.
- `public java.lang.String findChannelHandlerNameForType(java.lang.Class<? extends ChannelHandler> type)`
- `public void cleanAttributes()`

## FMLEventChannel

*class* `net.minecraftforge.fml.common.network.FMLEventChannel`

An event driven network channel, using FMLNetworkEvent.CustomPacketEvent and FMLNetworkEvent.CustomNetworkEvent
 to deliver messages to an event listener. There is one "bus" for each channel, due to the
 impossibility of filtering a bus for specific events.

 This event driven system completely wraps the netty code. Mod code deals with FMLProxyPackets directly. It is not
 possible to enhance the netty pipeline, and I would expect highly unexpected results if it were modified reflectively.
 Use a real ChannelHandler if you want to use netty.

### Methods
- `public void register(java.lang.Object object)`
  Register an event listener with this channel and bus. See SubscribeEvent
  - param: object -
- `public void unregister(java.lang.Object object)`
  Unregister an event listener from the bus.
  - param: object -
- `public void fireUserEvent(java.lang.Object evt,  ChannelHandlerContext ctx)`
- `public void sendToAll(FMLProxyPacket pkt)`
  Send a packet to all on the server
  - param: pkt -
- `public void sendTo(FMLProxyPacket pkt,  EntityPlayerMP player)`
  Send to a specific player
  - param: pkt -
  - param: player -
- `public void sendToAllAround(FMLProxyPacket pkt,  NetworkRegistry.TargetPoint point)`
  Send to all around a point
  - param: pkt -
  - param: point -
- `public void sendToAllTracking(FMLProxyPacket pkt,  NetworkRegistry.TargetPoint point)`
  Send to all tracking the point
   The range field of the NetworkRegistry.TargetPoint is ignored.
  - param: pkt -
  - param: point -
- `public void sendToAllTracking(FMLProxyPacket pkt,  Entity entity)`
  Send to all tracking the entity
   This is not equivalent to sendToAllTracking(FMLProxyPacket, NetworkRegistry.TargetPoint)
   because entities have different tracking distances based on their type.
  - param: pkt -
  - param: entity -
- `public void sendToDimension(FMLProxyPacket pkt,  int dimensionId)`
  Send to all in a dimension
  - param: pkt -
  - param: dimensionId -
- `public void sendToServer(FMLProxyPacket pkt)`
  Send to the server
  - param: pkt -

## FMLIndexedMessageToMessageCodec

*class* `net.minecraftforge.fml.common.network.FMLIndexedMessageToMessageCodec`

### Fields
- `public static final <any> INBOUNDPACKETTRACKER`
  Make this accessible to subclasses

### Methods
- `public void handlerAdded(ChannelHandlerContext ctx)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public FMLIndexedMessageToMessageCodec<A> addDiscriminator(int discriminator,  java.lang.Class<? extends A> type)`
- `public abstract void encodeInto(ChannelHandlerContext ctx,  A msg,  ByteBuf target)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `protected final void encode(ChannelHandlerContext ctx,  A msg,  java.util.List<java.lang.Object> out)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public abstract void decodeInto(ChannelHandlerContext ctx,  ByteBuf source,  A msg)`
- `protected final void decode(ChannelHandlerContext ctx,  FMLProxyPacket msg,  java.util.List<java.lang.Object> out)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `protected void testMessageValidity(FMLProxyPacket msg)`
  Called to verify the message received. This can be used to hard disconnect in case of an unexpected packet,
   say due to a weird protocol mismatch. Use with caution.
  - param: msg -
- `public void exceptionCaught(ChannelHandlerContext ctx,  java.lang.Throwable cause)  throws java.lang.Exception`
  - throws: java.lang.Exception

## FMLNetworkEvent

*class* `net.minecraftforge.fml.common.network.FMLNetworkEvent`

### Methods
- `public java.lang.Class<T> getHandlerType()`
- `public T getHandler()`
- `public NetworkManager getManager()`
- `public java.lang.Class<T> getType()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## FMLNetworkEvent.ClientConnectedToServerEvent

*class* `net.minecraftforge.fml.common.network.FMLNetworkEvent.ClientConnectedToServerEvent`

Fired at the client when a client connects to a server

Enclosing class: FMLNetworkEvent<T extends INetHandler>

### Methods
- `public boolean isLocal()`
- `public java.lang.String getConnectionType()`

### Inherited methods
- from `net.minecraftforge.fml.common.network.FMLNetworkEvent`: `getHandler`, `getHandlerType`, `getManager`, `getType`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## FMLNetworkEvent.ClientCustomPacketEvent

*class* `net.minecraftforge.fml.common.network.FMLNetworkEvent.ClientCustomPacketEvent`

Fired when a custom packet is received on the client for the channel

Enclosing class: FMLNetworkEvent<T extends INetHandler>

### Methods
- `public Side side()`

### Inherited methods
- from `net.minecraftforge.fml.common.network.FMLNetworkEvent.CustomPacketEvent`: `getPacket`, `getReply`, `setReply`
- from `net.minecraftforge.fml.common.network.FMLNetworkEvent`: `getHandler`, `getHandlerType`, `getManager`, `getType`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## FMLNetworkEvent.ClientDisconnectionFromServerEvent

*class* `net.minecraftforge.fml.common.network.FMLNetworkEvent.ClientDisconnectionFromServerEvent`

Fired at the client when the client is disconnected from the server.

Enclosing class: FMLNetworkEvent<T extends INetHandler>

### Inherited methods
- from `net.minecraftforge.fml.common.network.FMLNetworkEvent`: `getHandler`, `getHandlerType`, `getManager`, `getType`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## FMLNetworkEvent.CustomNetworkEvent

*class* `net.minecraftforge.fml.common.network.FMLNetworkEvent.CustomNetworkEvent`

Fired when a custom event, such as NetworkHandshakeEstablished is fired for the channel

Enclosing class: FMLNetworkEvent<T extends INetHandler>

### Methods
- `public java.lang.Object getWrappedEvent()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## FMLNetworkEvent.CustomPacketEvent

*class* `net.minecraftforge.fml.common.network.FMLNetworkEvent.CustomPacketEvent`

Enclosing class: FMLNetworkEvent<T extends INetHandler>

### Methods
- `public abstract Side side()`
- `public FMLProxyPacket getPacket()`
  The packet that generated the event
- `public FMLProxyPacket getReply()`
  Set this packet to reply to the originator
- `public void setReply(FMLProxyPacket reply)`

### Inherited methods
- from `net.minecraftforge.fml.common.network.FMLNetworkEvent`: `getHandler`, `getHandlerType`, `getManager`, `getType`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## FMLNetworkEvent.CustomPacketRegistrationEvent

*class* `net.minecraftforge.fml.common.network.FMLNetworkEvent.CustomPacketRegistrationEvent`

Fired when the REGISTER/UNREGISTER for custom channels is received.

Enclosing class: FMLNetworkEvent<T extends INetHandler>

### Methods
- `public <any> getRegistrations()`
- `public java.lang.String getOperation()`
- `public Side getSide()`

### Inherited methods
- from `net.minecraftforge.fml.common.network.FMLNetworkEvent`: `getHandler`, `getHandlerType`, `getManager`, `getType`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## FMLNetworkEvent.ServerConnectionFromClientEvent

*class* `net.minecraftforge.fml.common.network.FMLNetworkEvent.ServerConnectionFromClientEvent`

Fired at the server when a client connects to the server.

Enclosing class: FMLNetworkEvent<T extends INetHandler>

### Methods
- `public boolean isLocal()`

### Inherited methods
- from `net.minecraftforge.fml.common.network.FMLNetworkEvent`: `getHandler`, `getHandlerType`, `getManager`, `getType`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## FMLNetworkEvent.ServerCustomPacketEvent

*class* `net.minecraftforge.fml.common.network.FMLNetworkEvent.ServerCustomPacketEvent`

Fired when a custom packet is received at the server for the channel

Enclosing class: FMLNetworkEvent<T extends INetHandler>

### Methods
- `public Side side()`

### Inherited methods
- from `net.minecraftforge.fml.common.network.FMLNetworkEvent.CustomPacketEvent`: `getPacket`, `getReply`, `setReply`
- from `net.minecraftforge.fml.common.network.FMLNetworkEvent`: `getHandler`, `getHandlerType`, `getManager`, `getType`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## FMLNetworkEvent.ServerDisconnectionFromClientEvent

*class* `net.minecraftforge.fml.common.network.FMLNetworkEvent.ServerDisconnectionFromClientEvent`

Fired at the server when a client disconnects.

Enclosing class: FMLNetworkEvent<T extends INetHandler>

### Inherited methods
- from `net.minecraftforge.fml.common.network.FMLNetworkEvent`: `getHandler`, `getHandlerType`, `getManager`, `getType`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## FMLNetworkException

*class* `net.minecraftforge.fml.common.network.FMLNetworkException`

All Implemented Interfaces: java.io.Serializable

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## FMLOutboundHandler

*class* `net.minecraftforge.fml.common.network.FMLOutboundHandler`

### Fields
- `public static final <any> FML_MESSAGETARGET`
- `public static final <any> FML_MESSAGETARGETARGS`

### Methods
- `public void write(ChannelHandlerContext ctx,  java.lang.Object msg,  ChannelPromise promise)  throws java.lang.Exception`
  - throws: java.lang.Exception

## FMLOutboundHandler.OutboundTarget

*enum* `net.minecraftforge.fml.common.network.FMLOutboundHandler.OutboundTarget`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<FMLOutboundHandler.OutboundTarget>

Enclosing class: FMLOutboundHandler

### Fields
- `public final <any> allowed`
- `public static final FMLOutboundHandler.OutboundTarget NOWHERE`
  The packet is sent nowhere. It will be on the EmbeddedChannel#outboundMessages() Queue.
- `public static final FMLOutboundHandler.OutboundTarget DISPATCHER`
  The packet is sent to the NetworkDispatcher supplied as an argument.
- `public static final FMLOutboundHandler.OutboundTarget REPLY`
  The packet is sent to the originator of the packet. This requires the inbound packet
   to have it's originator information set.
- `public static final FMLOutboundHandler.OutboundTarget PLAYER`
  The packet is sent to the EntityPlayerMP supplied as an argument.
- `public static final FMLOutboundHandler.OutboundTarget ALL`
  The packet is dispatched to all players connected to the server.
- `public static final FMLOutboundHandler.OutboundTarget DIMENSION`
  The packet is sent to all players in the dimension identified by the integer argument.
- `public static final FMLOutboundHandler.OutboundTarget ALLAROUNDPOINT`
  The packet is sent to all players within range of the NetworkRegistry.TargetPoint argument supplied.
- `public static final FMLOutboundHandler.OutboundTarget TRACKING_POINT`
  The packet is sent to all players that are watching the Chunk containing the supplied NetworkRegistry.TargetPoint.
   The range field of the NetworkRegistry.TargetPoint is ignored.
- `public static final FMLOutboundHandler.OutboundTarget TRACKING_ENTITY`
  The packet is sent to all players tracking the supplied Entity. This is different from TRACKING_POINT because Entities
   can have different tracking distances depending on their type.
- `public static final FMLOutboundHandler.OutboundTarget TOSERVER`
  The packet is sent to the server this client is currently conversing with.

### Methods
- `public static FMLOutboundHandler.OutboundTarget[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (FMLOutboundHandler.OutboundTarget c : FMLOutboundHandler.OutboundTarget.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static FMLOutboundHandler.OutboundTarget valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public abstract void validateArgs(java.lang.Object args)`
- `public abstract java.util.List<NetworkDispatcher> selectNetworks(java.lang.Object args,  ChannelHandlerContext context,  FMLProxyPacket packet)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## IGuiHandler

*interface* `net.minecraftforge.fml.common.network.IGuiHandler`

### Methods
- `java.lang.Object getServerGuiElement(int ID,  EntityPlayer player,  World world,  int x,  int y,  int z)`
  Returns a Server side Container to be displayed to the user.
  - param: ID - The Gui ID Number
  - param: player - The player viewing the Gui
  - param: world - The current world
  - param: x - X Position
  - param: y - Y Position
  - param: z - Z Position
  - returns: A GuiScreen/Container to be displayed to the user, null if none.
- `java.lang.Object getClientGuiElement(int ID,  EntityPlayer player,  World world,  int x,  int y,  int z)`
  Returns a Container to be displayed to the user. On the client side, this
   needs to return a instance of GuiScreen On the server side, this needs to
   return a instance of Container
  - param: ID - The Gui ID Number
  - param: player - The player viewing the Gui
  - param: world - The current world
  - param: x - X Position
  - param: y - Y Position
  - param: z - Z Position
  - returns: A GuiScreen/Container to be displayed to the user, null if none.

## NetworkCheckHandler

*annotation* `net.minecraftforge.fml.common.network.NetworkCheckHandler`

A method annotated with this will be called when a remote network connection is offered.
 The method should have two parameters, of types Map and Side. It should return a boolean
 true indicating that the remote party is acceptable, or false if not.

 When the method is invoked, the map will contain String keys and values listing all mods and their versions present.
 The side represents the side of the remote party. So if you're on the server, it'll be CLIENT, and vice versa.

 This method will be invoked both when querying the status of the remote server, and when connecting to the remote server.

 NOTE: the server will not be setup at any point when this method is called. Do not try and interact with the server
 or the client in any way, except to accept or reject the list of mods.

## NetworkEventFiringHandler

*class* `net.minecraftforge.fml.common.network.NetworkEventFiringHandler`

Use this handler as the only thing in your channel, to receive network events
 whenever your channel receives a message.
 Note: it will not forward on to other handlers.

### Methods
- `protected void channelRead0(ChannelHandlerContext ctx,  FMLProxyPacket msg)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void userEventTriggered(ChannelHandlerContext ctx,  java.lang.Object evt)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void exceptionCaught(ChannelHandlerContext ctx,  java.lang.Throwable cause)  throws java.lang.Exception`
  - throws: java.lang.Exception

## NetworkHandshakeEstablished

*class* `net.minecraftforge.fml.common.network.NetworkHandshakeEstablished`

This message is sent through all channels affected by a currently occurring handshake. It is guaranteed to
 be able to send a custom payload packet, however, interaction with minecraft and world state is NOT assured
 as it is likely this is fired on a netty handler thread, not a world processing thread.

 If you wish to send an outbound message through your channel, bind the FMLOutboundHandler.FML_MESSAGETARGET
 property of your channel to the supplied dispatcher.

### Fields
- `public final NetworkDispatcher dispatcher`
- `public final Side side`
- `public final INetHandler netHandler`

## NetworkRegistry

*enum* `net.minecraftforge.fml.common.network.NetworkRegistry`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<NetworkRegistry>

### Fields
- `public static final <any> FML_CHANNEL`
  Set in the ChannelHandlerContext
- `public static final <any> CHANNEL_SOURCE`
- `public static final <any> MOD_CONTAINER`
- `public static final <any> NET_HANDLER`
- `public static final <any> FML_MARKER`
- `public static final byte FML_PROTOCOL` (= 2)
- `public static final NetworkRegistry INSTANCE`

### Methods
- `public static NetworkRegistry[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (NetworkRegistry c : NetworkRegistry.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static NetworkRegistry valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public java.util.EnumMap<Side,FMLEmbeddedChannel> newChannel(java.lang.String name,  ChannelHandler... handlers)`
  Create a new synchronous message channel pair based on netty.
  
   There are two preconstructed models available:
  
   newSimpleChannel(String) provides SimpleNetworkWrapper, a simple implementation of a netty handler, suitable for those who don't
   wish to dive too deeply into netty.
   newEventDrivenChannel(String) (String)} provides FMLEventChannel an event driven implementation, with lower level
   access to the network data stream, for those with advanced bitbanging needs that don't wish to poke netty too hard.
   Alternatively, simply use the netty features provided here and implement the full power of the netty stack.
  
   There are two channels created : one for each logical side (considered as the source of an outbound message)
   The returned map will contain a value for each logical side, though both will only be working in the
   integrated server case.
  
   The channel expects to read and write using FMLProxyPacket. All operation is synchronous, as the
   asynchronous behaviour occurs at a lower level in netty.
  
   The first handler in the pipeline is special and should not be removed or moved from the head - it transforms
   packets from the outbound of this pipeline into custom packets, based on the current AttributeKey value
   FMLOutboundHandler.FML_MESSAGETARGET and FMLOutboundHandler.FML_MESSAGETARGETARGS set on the channel.
   For the client to server channel (source side : CLIENT) this is fixed as "TOSERVER". For SERVER to CLIENT packets,
   several possible values exist.
  
   Mod Messages should be transformed using a something akin to a MessageToMessageCodec. FML provides
   a utility codec, FMLIndexedMessageToMessageCodec that transforms from FMLProxyPacket to a mod
   message using a message discriminator byte. This is optional, but highly recommended for use.
  
   Note also that the handlers supplied need to be ChannelHandler.Sharable - they are injected into two
   channels.
  - param: name -
  - param: handlers -
- `public SimpleNetworkWrapper newSimpleChannel(java.lang.String name)`
  Construct a new SimpleNetworkWrapper for the channel.
  - param: name - The name of the channel
  - returns: A SimpleNetworkWrapper for handling this channel
- `public FMLEventChannel newEventDrivenChannel(java.lang.String name)`
  Construct a new FMLEventChannel for the channel.
  - param: name - The name of the channel
  - returns: An FMLEventChannel for handling this channel
- `public java.util.EnumMap<Side,FMLEmbeddedChannel> newChannel(ModContainer container,  java.lang.String name,  ChannelHandler... handlers)`
  INTERNAL Create a new channel pair with the specified name and channel handlers.
   This is used internally in forge and FML
  - param: container - The container to associate the channel with
  - param: name - The name for the channel
  - param: handlers - Some ChannelHandler for the channel
  - returns: an EnumMap of the pair of channels. keys are Side. There will always be two entries.
- `public FMLEmbeddedChannel getChannel(java.lang.String name,  Side source)`
- `public void registerGuiHandler(java.lang.Object mod,  IGuiHandler handler)`
  Register an IGuiHandler for the supplied mod object.
  - param: mod - The mod to handle GUIs for
  - param: handler - A handler for creating GUI related objects
- `public Container getRemoteGuiContainer(ModContainer mc,  EntityPlayerMP player,  int modGuiId,  World world,  int x,  int y,  int z)`
  INTERNAL method for accessing the Gui registry
  - param: mc - Mod Container
  - param: player - Player
  - param: modGuiId - guiId
  - param: world - World
  - param: x - X coord
  - param: y - Y coord
  - param: z - Z coord
  - returns: The server side GUI object (An instance of Container)
- `public java.lang.Object getLocalGuiContainer(ModContainer mc,  EntityPlayer player,  int modGuiId,  World world,  int x,  int y,  int z)`
  INTERNAL method for accessing the Gui registry
  - param: mc - Mod Container
  - param: player - Player
  - param: modGuiId - guiId
  - param: world - World
  - param: x - X coord
  - param: y - Y coord
  - param: z - Z coord
  - returns: The client side GUI object (An instance of Gui)
- `public boolean hasChannel(java.lang.String channelName,  Side source)`
  Is there a channel with this name on this side?
  - param: channelName - The name
  - param: source - the side
  - returns: if there's a channel
- `public void register(ModContainer fmlModContainer,  java.lang.Class<?> clazz,  java.lang.String remoteVersionRange,  ASMDataTable asmHarvestedData)`
  INTERNAL method for registering a mod as a network capable thing
  - param: fmlModContainer - The fml mod container
  - param: clazz - a class
  - param: remoteVersionRange - the acceptable remote range
  - param: asmHarvestedData - internal data
- `public boolean isVanillaAccepted(Side from)`
- `public java.util.Collection<java.lang.String> getRequiredMods(Side from)`
- `public java.util.Map<ModContainer,NetworkModHolder> registry()`
- `public java.util.Set<java.lang.String> channelNamesFor(Side side)`
  All the valid channel names for a side
  - param: side - the side
  - returns: the set of channel names
- `public void fireNetworkHandshake(NetworkDispatcher networkDispatcher,  Side origin)`
  INTERNAL fire a handshake to all channels
  - param: networkDispatcher - The dispatcher firing
  - param: origin - which side the dispatcher is on
- `public void cleanAttributes()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## NetworkRegistry.TargetPoint

*class* `net.minecraftforge.fml.common.network.NetworkRegistry.TargetPoint`

Represents a target point for the ALLROUNDPOINT target.

Enclosing class: NetworkRegistry

### Fields
- `public final double x`
- `public final double y`
- `public final double z`
- `public final double range`
- `public final int dimension`

## PacketLoggingHandler

*class* `net.minecraftforge.fml.common.network.PacketLoggingHandler`

### Methods
- `public static void register(NetworkManager manager)`
