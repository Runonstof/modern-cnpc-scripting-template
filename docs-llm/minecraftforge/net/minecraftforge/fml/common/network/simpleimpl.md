# net.minecraftforge.fml.common.network.simpleimpl

- [IMessage](#imessage)
- [IMessageHandler](#imessagehandler)
- [MessageContext](#messagecontext)
- [SimpleChannelHandlerWrapper](#simplechannelhandlerwrapper)
- [SimpleIndexedCodec](#simpleindexedcodec)
- [SimpleNetworkWrapper](#simplenetworkwrapper)
## IMessage

*interface* `net.minecraftforge.fml.common.network.simpleimpl.IMessage`

Implement this interface for each message you wish to define.

### Methods
- `void fromBytes(ByteBuf buf)`
  Convert from the supplied buffer into your specific message type
  - param: buf -
- `void toBytes(ByteBuf buf)`
  Deconstruct your message into the supplied byte buffer
  - param: buf -

## IMessageHandler

*interface* `net.minecraftforge.fml.common.network.simpleimpl.IMessageHandler`

A message handler based on IMessage. Implement and override onMessage(IMessage, MessageContext) to
 process your packet. Supply the class to SimpleNetworkWrapper.registerMessage(Class, Class, int, net.minecraftforge.fml.relauncher.Side)
 to register both the message type and it's associated handler.

### Methods
- `REPLY onMessage(REQ message,  MessageContext ctx)`
  Called when a message is received of the appropriate type. You can optionally return a reply message, or null if no reply
   is needed.
  - param: message - The message
  - returns: an optional return message

## MessageContext

*class* `net.minecraftforge.fml.common.network.simpleimpl.MessageContext`

Context for the IMessageHandler

### Fields
- `public final INetHandler netHandler`
  The INetHandler for this message. It could be a client or server handler, depending
   on the side received.
- `public final Side side`
  The Side this message has been received on

### Methods
- `public NetHandlerPlayServer getServerHandler()`
- `public NetHandlerPlayClient getClientHandler()`

## SimpleChannelHandlerWrapper

*class* `net.minecraftforge.fml.common.network.simpleimpl.SimpleChannelHandlerWrapper`

### Methods
- `protected void channelRead0(ChannelHandlerContext ctx,  REQ msg)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void exceptionCaught(ChannelHandlerContext ctx,  java.lang.Throwable cause)  throws java.lang.Exception`
  - throws: java.lang.Exception

## SimpleIndexedCodec

*class* `net.minecraftforge.fml.common.network.simpleimpl.SimpleIndexedCodec`

### Inherited fields
- from `net.minecraftforge.fml.common.network.FMLIndexedMessageToMessageCodec`: `INBOUNDPACKETTRACKER`

### Methods
- `public void encodeInto(ChannelHandlerContext ctx,  IMessage msg,  ByteBuf target)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void decodeInto(ChannelHandlerContext ctx,  ByteBuf source,  IMessage msg)`

### Inherited methods
- from `net.minecraftforge.fml.common.network.FMLIndexedMessageToMessageCodec`: `addDiscriminator`, `decode`, `encode`, `exceptionCaught`, `handlerAdded`, `testMessageValidity`

## SimpleNetworkWrapper

*class* `net.minecraftforge.fml.common.network.simpleimpl.SimpleNetworkWrapper`

This class is a simplified netty wrapper for those not wishing to deal with the full power of netty.
 It provides a simple message driven system, based on a discriminator byte over the custom packet channel.
 It assumes that you have a series of unique message types with each having a unique handler. Generally, context should be
 derived at message handling time.

 Usage is simple:
 construct, and store, an instance of this class. It will automatically register and configure your underlying netty channel.

 Then, call registerMessage(Class, Class, int, Side) for each message type you want to exchange
 providing an IMessageHandler implementation class as well as an IMessage implementation class. The side parameter
 to that method indicates which side (server or client) the message processing will occur on. The discriminator byte
 should be unique for this channelName - it is used to discriminate between different types of message that might
 occur on this channel (a simple form of message channel multiplexing, if you will).
 To get a packet suitable for presenting to the rest of minecraft, you can call getPacketFrom(IMessage). The return result
 is suitable for returning from things like TileEntity#getDescriptionPacket() for example.
 Finally, use the sendXXX to send unsolicited messages to various classes of recipients.

 Example

 // Request message
 public Message1 implements IMessage {
 // message structure
 public fromBytes(ByteBuf buf) {
 // build message from byte array
 }
 public toBytes(ByteBuf buf) {
 // put message content into byte array
 }
 }
 // Reply message
 public Message2 implements IMessage {
 // stuff as before
 }
 // Message1Handler expects input of type Message1 and returns type Message2
 public Message1Handler implements IMessageHandler {
 public Message2 onMessage(Message1 message, MessageContext ctx) {
 // do something and generate reply message
 return aMessage2Object;
 }
 }
 // Message2Handler expects input of type Message2 and returns no message (IMessage)
 public Message2Handler implements IMessageHandler {
 public IMessage onMessage(Message2 message, MessageContext ctx) {
 // handle the message 2 response message at the other end
 // no reply for this message - return null
 return null;
 }
 }

 // Code in a FMLPreInitializationEvent or FMLInitializationEvent handler
 SimpleNetworkWrapper wrapper = NetworkRegistry.newSimpleChannel("MYCHANNEL");
 // Message1 is handled by the Message1Handler class, it has discriminator id 1 and it's on the client
 wrapper.registerMessage(Message1Handler.class, Message1.class, 1, Side.CLIENT);
 // Message2 is handled by the Message2Handler class, it has discriminator id 2 and it's on the server
 wrapper.registerMessage(Message2Handler.class, Message2.class, 2, Side.SERVER);

 Note: As of Minecraft 1.8 packets are by default handled on the network thread.
 That means that your IMessageHandler can not interact with most game objects directly.
 Minecraft provides a convenient way to make your code execute on the main thread instead using IThreadListener.addScheduledTask(Runnable).
 The way to obtain an IThreadListener is using either the Minecraft instance (client side) or a WorldServer instance (server side).

### Methods
- `public <REQ extends IMessage,REPLY extends IMessage> void registerMessage(java.lang.Class<? extends IMessageHandler<REQ,REPLY>> messageHandler,  java.lang.Class<REQ> requestMessageType,  int discriminator,  Side side)`
  Register a message and it's associated handler. The message will have the supplied discriminator byte. The message handler will
   be registered on the supplied side (this is the side where you want the message to be processed and acted upon).
  - param: messageHandler - the message handler type
  - param: requestMessageType - the message type
  - param: discriminator - a discriminator byte
  - param: side - the side for the handler
- `public <REQ extends IMessage,REPLY extends IMessage> void registerMessage(IMessageHandler<? super REQ,? extends REPLY> messageHandler,  java.lang.Class<REQ> requestMessageType,  int discriminator,  Side side)`
  Register a message and it's associated handler. The message will have the supplied discriminator byte. The message handler will
   be registered on the supplied side (this is the side where you want the message to be processed and acted upon).
  - param: messageHandler - the message handler instance
  - param: requestMessageType - the message type
  - param: discriminator - a discriminator byte
  - param: side - the side for the handler
- `public Packet<?> getPacketFrom(IMessage message)`
  Construct a minecraft packet from the supplied message. Can be used where minecraft packets are required, such as
   TileEntity#getDescriptionPacket().
  - param: message - The message to translate into packet form
  - returns: A minecraft Packet suitable for use in minecraft APIs
- `public void sendToAll(IMessage message)`
  Send this message to everyone.
   The IMessageHandler for this message type should be on the CLIENT side.
  - param: message - The message to send
- `public void sendTo(IMessage message,  EntityPlayerMP player)`
  Send this message to the specified player.
   The IMessageHandler for this message type should be on the CLIENT side.
  - param: message - The message to send
  - param: player - The player to send it to
- `public void sendToAllAround(IMessage message,  NetworkRegistry.TargetPoint point)`
  Send this message to everyone within a certain range of a point.
   The IMessageHandler for this message type should be on the CLIENT side.
  - param: message - The message to send
  - param: point - The NetworkRegistry.TargetPoint around which to send
- `public void sendToAllTracking(IMessage message,  NetworkRegistry.TargetPoint point)`
  Sends this message to everyone tracking a point.
   The IMessageHandler for this message type should be on the CLIENT side.
   The range field of the NetworkRegistry.TargetPoint is ignored.
  - param: message - The message to send
  - param: point - The tracked NetworkRegistry.TargetPoint around which to send
- `public void sendToAllTracking(IMessage message,  Entity entity)`
  Sends this message to everyone tracking an entity.
   The IMessageHandler for this message type should be on the CLIENT side.
   This is not equivalent to #sendToAllTracking(IMessage, TargetPoint)
   because entities have different tracking distances based on their type.
  - param: message - The message to send
  - param: entity - The tracked entity around which to send
- `public void sendToDimension(IMessage message,  int dimensionId)`
  Send this message to everyone within the supplied dimension.
   The IMessageHandler for this message type should be on the CLIENT side.
  - param: message - The message to send
  - param: dimensionId - The dimension id to target
- `public void sendToServer(IMessage message)`
  Send this message to the server.
   The IMessageHandler for this message type should be on the SERVER side.
  - param: message - The message to send
