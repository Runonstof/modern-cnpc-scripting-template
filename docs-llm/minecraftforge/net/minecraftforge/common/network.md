# net.minecraftforge.common.network

- [DimensionMessageHandler](#dimensionmessagehandler)
- [FluidIdRegistryMessageHandler](#fluididregistrymessagehandler)
- [ForgeMessage](#forgemessage)
- [ForgeMessage.DimensionRegisterMessage](#forgemessage.dimensionregistermessage)
- [ForgeMessage.FluidIdMapMessage](#forgemessage.fluididmapmessage)
- [ForgeNetworkHandler](#forgenetworkhandler)
- [ForgeRuntimeCodec](#forgeruntimecodec)
- [ServerToClientConnectionEstablishedHandler](#servertoclientconnectionestablishedhandler)
## DimensionMessageHandler

*class* `net.minecraftforge.common.network.DimensionMessageHandler`

### Methods
- `protected void channelRead0(ChannelHandlerContext ctx,  ForgeMessage.DimensionRegisterMessage msg)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void exceptionCaught(ChannelHandlerContext ctx,  java.lang.Throwable cause)  throws java.lang.Exception`
  - throws: java.lang.Exception

## FluidIdRegistryMessageHandler

*class* `net.minecraftforge.common.network.FluidIdRegistryMessageHandler`

### Methods
- `protected void channelRead0(ChannelHandlerContext ctx,  ForgeMessage.FluidIdMapMessage msg)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void exceptionCaught(ChannelHandlerContext ctx,  java.lang.Throwable cause)  throws java.lang.Exception`
  - throws: java.lang.Exception

## ForgeMessage

*class* `net.minecraftforge.common.network.ForgeMessage`

## ForgeMessage.DimensionRegisterMessage

*class* `net.minecraftforge.common.network.ForgeMessage.DimensionRegisterMessage`

Enclosing class: ForgeMessage

## ForgeMessage.FluidIdMapMessage

*class* `net.minecraftforge.common.network.ForgeMessage.FluidIdMapMessage`

Enclosing class: ForgeMessage

## ForgeNetworkHandler

*class* `net.minecraftforge.common.network.ForgeNetworkHandler`

### Methods
- `public static void registerChannel(ForgeModContainer forgeModContainer,  Side side)`

## ForgeRuntimeCodec

*class* `net.minecraftforge.common.network.ForgeRuntimeCodec`

### Inherited fields
- from `net.minecraftforge.fml.common.network.FMLIndexedMessageToMessageCodec`: `INBOUNDPACKETTRACKER`

### Methods
- `public void encodeInto(ChannelHandlerContext ctx,  ForgeMessage msg,  ByteBuf target)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void decodeInto(ChannelHandlerContext ctx,  ByteBuf source,  ForgeMessage msg)`

### Inherited methods
- from `net.minecraftforge.fml.common.network.FMLIndexedMessageToMessageCodec`: `addDiscriminator`, `decode`, `encode`, `exceptionCaught`, `handlerAdded`, `testMessageValidity`

## ServerToClientConnectionEstablishedHandler

*class* `net.minecraftforge.common.network.ServerToClientConnectionEstablishedHandler`

### Methods
- `public void userEventTriggered(ChannelHandlerContext ctx,  java.lang.Object evt)  throws java.lang.Exception`
  - throws: java.lang.Exception
