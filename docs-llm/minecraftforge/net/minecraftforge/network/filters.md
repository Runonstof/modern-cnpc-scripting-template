# net.minecraftforge.network.filters

- [CommandTreeCleaner](#commandtreecleaner)
- [NetworkFilters](#networkfilters)
- [VanillaConnectionNetworkFilter](#vanillaconnectionnetworkfilter)
- [VanillaPacketFilter](#vanillapacketfilter)
## CommandTreeCleaner

*class* `net.minecraftforge.network.filters.CommandTreeCleaner`

### Methods
- `public static <S> com.mojang.brigadier.tree.RootCommandNode<S> cleanArgumentTypes(com.mojang.brigadier.tree.RootCommandNode<S> root,  Predicate<com.mojang.brigadier.arguments.ArgumentType<?>> argumentTypeFilter)`
  Cleans the command tree starting at the given root node from any argument types that do not match the given predicate.
   Any ArgumentCommandNodes that have an unmatched argument type will be stripped from the tree.
  - returns: A new command tree, stripped of any unmatched argument types
- `private static <S> com.mojang.brigadier.tree.CommandNode<S> processCommandNode(com.mojang.brigadier.tree.CommandNode<S> node,  Predicate<com.mojang.brigadier.tree.CommandNode<?>> nodeFilter,  Map<com.mojang.brigadier.tree.CommandNode<S>,com.mojang.brigadier.tree.CommandNode<S>> newNodes)`
- `private static <S> com.mojang.brigadier.tree.CommandNode<S> cloneNode(com.mojang.brigadier.tree.CommandNode<S> node,  Predicate<com.mojang.brigadier.tree.CommandNode<?>> nodeFilter,  Map<com.mojang.brigadier.tree.CommandNode<S>,com.mojang.brigadier.tree.CommandNode<S>> newNodes)`

## NetworkFilters

*class* `net.minecraftforge.network.filters.NetworkFilters`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final Map<String,Function<Connection,VanillaPacketFilter>> instances`

### Methods
- `public static void injectIfNecessary(Connection manager)`

## VanillaConnectionNetworkFilter

*class* `net.minecraftforge.network.filters.VanillaConnectionNetworkFilter`

A filter for impl packets, used to filter/modify parts of vanilla impl messages that
 will cause errors or warnings on vanilla clients, for example entity attributes that are added by Forge or mods.

### Inherited fields
- from `net.minecraftforge.network.filters.VanillaPacketFilter`: `handlers`

### Methods
- `protected boolean isNecessary(Connection connection)`
  Description copied from class: VanillaPacketFilter
  Whether this filter is necessary on the given connection.
- `@NotNull private static @NotNull ClientboundUpdateAttributesPacket filterEntityProperties(ClientboundUpdateAttributesPacket msg)`
  Filter for SEntityPropertiesPacket. Filters out any entity attributes that are not in the "minecraft" namespace.
   A vanilla client would ignore these with an error log.
- `@NotNull private static @NotNull ClientboundCommandsPacket filterCommandList(ClientboundCommandsPacket packet)`
  Filter for SCommandListPacket. Uses CommandTreeCleaner to filter out any ArgumentTypes that are not in the "minecraft" or "brigadier" namespace.
   A vanilla client would fail to deserialize the packet and disconnect with an error message if these were sent.

### Inherited methods
- from `net.minecraftforge.network.filters.VanillaPacketFilter`: `encode`, `handler`, `handler`
- from `io.netty.handler.codec.MessageToMessageEncoder`: `acceptOutboundMessage`, `write`
- from `io.netty.channel.ChannelOutboundHandlerAdapter`: `bind`, `close`, `connect`, `deregister`, `disconnect`, `flush`, `read`
- from `io.netty.channel.ChannelHandlerAdapter`: `ensureNotSharable`, `exceptionCaught`, `handlerAdded`, `handlerRemoved`, `isSharable`
- from `io.netty.channel.ChannelHandler`: `exceptionCaught`, `handlerAdded`, `handlerRemoved`

## VanillaPacketFilter

*class* `net.minecraftforge.network.filters.VanillaPacketFilter`

A filter for vanilla impl packets.

### Fields
- `protected final Map<Class<? extends Packet<?>>,BiConsumer<Packet<?>,List<? super Packet<?>>>> handlers`

### Methods
- `@NotNull protected static <T extends Packet<?>> Map.Entry<Class<? extends Packet<?>>,BiConsumer<Packet<?>,List<? super Packet<?>>>> handler(Class<T> cls,  Function<T,? extends Packet<?>> function)`
  Helper function for building the handler map.
- `@NotNull protected static <T extends Packet<?>> Map.Entry<Class<? extends Packet<?>>,BiConsumer<Packet<?>,List<? super Packet<?>>>> handler(Class<T> cls,  BiConsumer<Packet<?>,List<? super Packet<?>>> consumer)`
  Helper function for building the handler map.
- `protected abstract boolean isNecessary(Connection manager)`
  Whether this filter is necessary on the given connection.
- `protected void encode(io.netty.channel.ChannelHandlerContext ctx,  Packet<?> msg,  List<Object> out)`

### Inherited methods
- from `io.netty.handler.codec.MessageToMessageEncoder`: `acceptOutboundMessage`, `write`
- from `io.netty.channel.ChannelOutboundHandlerAdapter`: `bind`, `close`, `connect`, `deregister`, `disconnect`, `flush`, `read`
- from `io.netty.channel.ChannelHandlerAdapter`: `ensureNotSharable`, `exceptionCaught`, `handlerAdded`, `handlerRemoved`, `isSharable`
- from `io.netty.channel.ChannelHandler`: `exceptionCaught`, `handlerAdded`, `handlerRemoved`
