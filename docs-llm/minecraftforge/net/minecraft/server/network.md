# net.minecraft.server.network

- [Class ServerLoginPacketListenerImpl.State](#class-serverloginpacketlistenerimpl.state)
- [CommonListenerCookie](#commonlistenercookie)
- [ConfigurationTask](#configurationtask)
- [ConfigurationTask.Type](#configurationtask.type)
- [FilteredText](#filteredtext)
- [LegacyProtocolUtils](#legacyprotocolutils)
- [LegacyQueryHandler](#legacyqueryhandler)
- [MemoryServerHandshakePacketListenerImpl](#memoryserverhandshakepacketlistenerimpl)
- [PlayerChunkSender](#playerchunksender)
- [ServerCommonPacketListenerImpl](#servercommonpacketlistenerimpl)
- [ServerConfigurationPacketListenerImpl](#serverconfigurationpacketlistenerimpl)
- [ServerConnectionListener](#serverconnectionlistener)
- [ServerConnectionListener.LatencySimulator](#serverconnectionlistener.latencysimulator)
- [ServerConnectionListener.LatencySimulator.DelayedMessage](#serverconnectionlistener.latencysimulator.delayedmessage)
- [ServerGamePacketListenerImpl](#servergamepacketlistenerimpl)
- [ServerGamePacketListenerImpl.EntityInteraction](#servergamepacketlistenerimpl.entityinteraction)
- [ServerHandshakePacketListenerImpl](#serverhandshakepacketlistenerimpl)
- [ServerLoginPacketListenerImpl](#serverloginpacketlistenerimpl)
- [ServerPlayerConnection](#serverplayerconnection)
- [ServerStatusPacketListenerImpl](#serverstatuspacketlistenerimpl)
- [TextFilter](#textfilter)
- [TextFilterClient](#textfilterclient)
- [TextFilterClient.IgnoreStrategy](#textfilterclient.ignorestrategy)
- [TextFilterClient.JoinOrLeaveEncoder](#textfilterclient.joinorleaveencoder)
- [TextFilterClient.MessageEncoder](#textfilterclient.messageencoder)
- [TextFilterClient.PlayerContext](#textfilterclient.playercontext)
- [TextFilterClient.RequestFailedException](#textfilterclient.requestfailedexception)
## Class ServerLoginPacketListenerImpl.State

*enum* `net.minecraft.server.network.Class ServerLoginPacketListenerImpl.State`

Enclosing class: ServerLoginPacketListenerImpl

### Methods
- `public static ServerLoginPacketListenerImpl.State[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ServerLoginPacketListenerImpl.State valueOf(String name)`
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

## CommonListenerCookie

*record* `net.minecraft.server.network.CommonListenerCookie`

### Fields
- `private final com.mojang.authlib.GameProfile gameProfile`
  The field for the gameProfile record component.
- `private final int latency`
  The field for the latency record component.
- `private final ClientInformation clientInformation`
  The field for the clientInformation record component.

### Methods
- `public static CommonListenerCookie createInitial(com.mojang.authlib.GameProfile p_297256_)`
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
- `public com.mojang.authlib.GameProfile gameProfile()`
  Returns the value of the gameProfile record component.
  - returns: the value of the gameProfile record component
- `public int latency()`
  Returns the value of the latency record component.
  - returns: the value of the latency record component
- `public ClientInformation clientInformation()`
  Returns the value of the clientInformation record component.
  - returns: the value of the clientInformation record component

## ConfigurationTask

*interface* `net.minecraft.server.network.ConfigurationTask`

### Methods
- `default void start(ConfigurationTaskContext ctx)`
- `void start(Consumer<Packet<?>> p_299398_)`
- `ConfigurationTask.Type type()`

## ConfigurationTask.Type

*record* `net.minecraft.server.network.ConfigurationTask.Type`

Enclosing interface: ConfigurationTask

### Fields
- `private final String id`
  The field for the id record component.

### Methods
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public String id()`
  Returns the value of the id record component.
  - returns: the value of the id record component

## FilteredText

*record* `net.minecraft.server.network.FilteredText`

### Fields
- `private final String raw`
  The field for the raw record component.
- `private final FilterMask mask`
  The field for the mask record component.
- `public static final FilteredText EMPTY`

### Methods
- `public static FilteredText passThrough(String p_243257_)`
- `public static FilteredText fullyFiltered(String p_243261_)`
- `@Nullable public String filtered()`
- `public String filteredOrEmpty()`
- `public boolean isFiltered()`
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
- `public String raw()`
  Returns the value of the raw record component.
  - returns: the value of the raw record component
- `public FilterMask mask()`
  Returns the value of the mask record component.
  - returns: the value of the mask record component

## LegacyProtocolUtils

*class* `net.minecraft.server.network.LegacyProtocolUtils`

### Fields
- `public static final int CUSTOM_PAYLOAD_PACKET_ID` (= 250)
- `public static final String CUSTOM_PAYLOAD_PACKET_PING_CHANNEL` (= "MC|PingHost")
- `public static final int GET_INFO_PACKET_ID` (= 254)
- `public static final int GET_INFO_PACKET_VERSION_1` (= 1)
- `public static final int DISCONNECT_PACKET_ID` (= 255)
- `public static final int FAKE_PROTOCOL_VERSION` (= 127)

### Methods
- `public static void writeLegacyString(io.netty.buffer.ByteBuf p_301020_,  String p_300839_)`
- `public static String readLegacyString(io.netty.buffer.ByteBuf p_297756_)`

## LegacyQueryHandler

*class* `net.minecraft.server.network.LegacyQueryHandler`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final ServerInfo server`

### Methods
- `public void channelRead(io.netty.channel.ChannelHandlerContext p_9686_,  Object p_9687_)`
- `private static boolean readCustomPayloadPacket(io.netty.buffer.ByteBuf p_297429_)`
- `private static String createVersion0Response(ServerInfo p_300881_)`
- `private static String createVersion1Response(ServerInfo p_297753_)`
- `private static void sendFlushAndClose(io.netty.channel.ChannelHandlerContext p_9681_,  io.netty.buffer.ByteBuf p_9682_)`
- `private static io.netty.buffer.ByteBuf createLegacyDisconnectPacket(io.netty.buffer.ByteBufAllocator p_298175_,  String p_298389_)`

### Inherited methods
- from `io.netty.channel.ChannelInboundHandlerAdapter`: `channelActive`, `channelInactive`, `channelReadComplete`, `channelRegistered`, `channelUnregistered`, `channelWritabilityChanged`, `exceptionCaught`, `userEventTriggered`
- from `io.netty.channel.ChannelHandlerAdapter`: `ensureNotSharable`, `handlerAdded`, `handlerRemoved`, `isSharable`
- from `io.netty.channel.ChannelHandler`: `handlerAdded`, `handlerRemoved`

## MemoryServerHandshakePacketListenerImpl

*class* `net.minecraft.server.network.MemoryServerHandshakePacketListenerImpl`

### Fields
- `private final MinecraftServer server`
- `private final Connection connection`

### Methods
- `public void handleIntention(ClientIntentionPacket p_9697_)`
- `public void onDisconnect(Component p_9695_)`
- `public boolean isAcceptingMessages()`

### Inherited methods
- from `net.minecraft.network.PacketListener`: `shouldHandleMessage`
- from `net.minecraft.network.ServerboundPacketListener`: `flow`
- from `net.minecraft.network.protocol.handshake.ServerHandshakePacketListener`: `protocol`
- from `net.minecraft.network.protocol.game.ServerPacketListener`: `shouldPropagateHandlingExceptions`

## PlayerChunkSender

*class* `net.minecraft.server.network.PlayerChunkSender`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final float MIN_CHUNKS_PER_TICK` (= 0.009999999776482582f)
- `public static final float MAX_CHUNKS_PER_TICK` (= 64.0f)
- `private static final float START_CHUNKS_PER_TICK` (= 9.0f)
- `private static final int MAX_UNACKNOWLEDGED_BATCHES` (= 10)
- `private final it.unimi.dsi.fastutil.longs.LongSet pendingChunks`
- `private final boolean memoryConnection`
- `private float desiredChunksPerTick`
- `private float batchQuota`
- `private int unacknowledgedBatches`
- `private int maxUnacknowledgedBatches`

### Methods
- `public void markChunkPendingToSend(LevelChunk p_298187_)`
- `public void dropChunk(ServerPlayer p_298166_,  ChunkPos p_300687_)`
- `public void sendNextChunks(ServerPlayer p_297274_)`
- `private static void sendChunk(ServerGamePacketListenerImpl p_299748_,  ServerLevel p_298120_,  LevelChunk p_297712_)`
- `private List<LevelChunk> collectChunksToSend(ChunkMap p_298180_,  ChunkPos p_298514_)`
- `public void onChunkBatchReceivedByClient(float p_298238_)`
- `public boolean isPending(long p_299869_)`

## ServerCommonPacketListenerImpl

*class* `net.minecraft.server.network.ServerCommonPacketListenerImpl`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final int LATENCY_CHECK_INTERVAL` (= 15000)
- `private static final Component TIMEOUT_DISCONNECTION_MESSAGE`
- `protected final MinecraftServer server`
- `protected final Connection connection`
- `private long keepAliveTime`
- `private boolean keepAlivePending`
- `private long keepAliveChallenge`
- `private int latency`
- `private volatile boolean suspendFlushingOnServerThread`

### Methods
- `public void onDisconnect(Component p_300550_)`
- `public void handleKeepAlive(ServerboundKeepAlivePacket p_299975_)`
- `public void handlePong(ServerboundPongPacket p_299461_)`
- `public void handleCustomPayload(ServerboundCustomPayloadPacket p_300164_)`
- `public void handleResourcePackResponse(ServerboundResourcePackPacket p_300656_)`
- `protected void keepConnectionAlive()`
- `public void suspendFlushing()`
- `public void resumeFlushing()`
- `public void send(Packet<?> p_300558_)`
- `public void send(Packet<?> p_300325_,  @Nullable  PacketSendListener p_301165_)`
- `public void disconnect(Component p_299122_)`
- `protected boolean isSingleplayerOwner()`
- `protected abstract com.mojang.authlib.GameProfile playerProfile()`
- `public com.mojang.authlib.GameProfile getOwner()`
- `public int latency()`
- `protected CommonListenerCookie createCookie(ClientInformation p_297318_)`
- `public Connection getConnection()`

### Inherited methods
- from `net.minecraft.network.PacketListener`: `isAcceptingMessages`, `protocol`, `shouldHandleMessage`
- from `net.minecraft.network.ServerboundPacketListener`: `flow`
- from `net.minecraft.network.protocol.common.ServerCommonPacketListener`: `handleClientInformation`
- from `net.minecraft.network.protocol.game.ServerPacketListener`: `shouldPropagateHandlingExceptions`

## ServerConfigurationPacketListenerImpl

*class* `net.minecraft.server.network.ServerConfigurationPacketListenerImpl`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Component DISCONNECT_REASON_INVALID_DATA`
- `private static final ConfigurationTask.Type VANILLA_START`
- `private final com.mojang.authlib.GameProfile gameProfile`
- `private final Queue<ConfigurationTask> configurationTasks`
- `@Nullable private ConfigurationTask currentTask`
- `private ClientInformation clientInformation`
- `private final ConfigurationTaskContext taskContext`

### Inherited fields
- from `net.minecraft.server.network.ServerCommonPacketListenerImpl`: `connection`, `LATENCY_CHECK_INTERVAL`, `server`

### Methods
- `protected com.mojang.authlib.GameProfile playerProfile()`
- `public void onDisconnect(Component p_300313_)`
- `public boolean isAcceptingMessages()`
- `private void vanillaStart()`
- `public void startConfiguration()`
- `public void returnToWorld()`
- `private void addOptionalTasks()`
- `public void handleClientInformation(ServerboundClientInformationPacket p_297305_)`
- `public void handleResourcePackResponse(ServerboundResourcePackPacket p_300631_)`
- `public void handleConfigurationFinished(ServerboundFinishConfigurationPacket p_297811_)`
- `public void tick()`
- `private void startNextTask()`
- `public void finishCurrentTask(ConfigurationTask.Type p_297864_)`

### Inherited methods
- from `net.minecraft.server.network.ServerCommonPacketListenerImpl`: `createCookie`, `disconnect`, `getConnection`, `getOwner`, `handleCustomPayload`, `handleKeepAlive`, `handlePong`, `isSingleplayerOwner`, `keepConnectionAlive`, `latency`, `resumeFlushing`, `send`, `send`, `suspendFlushing`
- from `net.minecraft.network.PacketListener`: `shouldHandleMessage`
- from `net.minecraft.network.ServerboundPacketListener`: `flow`
- from `net.minecraft.network.protocol.common.ServerCommonPacketListener`: `handleCustomPayload`, `handleKeepAlive`, `handlePong`
- from `net.minecraft.network.protocol.configuration.ServerConfigurationPacketListener`: `protocol`
- from `net.minecraft.network.protocol.game.ServerPacketListener`: `shouldPropagateHandlingExceptions`

## ServerConnectionListener

*class* `net.minecraft.server.network.ServerConnectionListener`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int READ_TIMEOUT`
- `public static final Supplier<io.netty.channel.nio.NioEventLoopGroup> SERVER_EVENT_GROUP`
- `public static final Supplier<io.netty.channel.epoll.EpollEventLoopGroup> SERVER_EPOLL_EVENT_GROUP`
- `final MinecraftServer server`
- `public volatile boolean running`
- `private final List<io.netty.channel.ChannelFuture> channels`
- `final List<Connection> connections`

### Methods
- `public void startTcpServerListener(@Nullable  InetAddress p_9712_,  int p_9713_)  throws IOException`
  - throws: IOException
- `public SocketAddress startMemoryChannel()`
- `public void stop()`
- `public void tick()`
- `public MinecraftServer getServer()`
- `public List<Connection> getConnections()`

## ServerConnectionListener.LatencySimulator

*class* `net.minecraft.server.network.ServerConnectionListener.LatencySimulator`

Enclosing class: ServerConnectionListener

### Fields
- `private static final io.netty.util.Timer TIMER`
- `private final int delay`
- `private final int jitter`
- `private final List<ServerConnectionListener.LatencySimulator.DelayedMessage> queuedMessages`

### Methods
- `public void channelRead(io.netty.channel.ChannelHandlerContext p_143601_,  Object p_143602_)`
- `private void delayDownstream(io.netty.channel.ChannelHandlerContext p_143596_,  Object p_143597_)`
- `private void onTimeout(io.netty.util.Timeout p_143599_)`

### Inherited methods
- from `io.netty.channel.ChannelInboundHandlerAdapter`: `channelActive`, `channelInactive`, `channelReadComplete`, `channelRegistered`, `channelUnregistered`, `channelWritabilityChanged`, `exceptionCaught`, `userEventTriggered`
- from `io.netty.channel.ChannelHandlerAdapter`: `ensureNotSharable`, `handlerAdded`, `handlerRemoved`, `isSharable`
- from `io.netty.channel.ChannelHandler`: `handlerAdded`, `handlerRemoved`

## ServerConnectionListener.LatencySimulator.DelayedMessage

*class* `net.minecraft.server.network.ServerConnectionListener.LatencySimulator.DelayedMessage`

Enclosing class: ServerConnectionListener.LatencySimulator

### Fields
- `public final io.netty.channel.ChannelHandlerContext ctx`
- `public final Object msg`

## ServerGamePacketListenerImpl

*class* `net.minecraft.server.network.ServerGamePacketListenerImpl`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `@Deprecated public static final double MAX_INTERACTION_DISTANCE` (deprecated)
  Forge: Deprecated in favor of range/reach attributes.
- `private static final int NO_BLOCK_UPDATES_TO_ACK` (= -1)
- `private static final int TRACKED_MESSAGE_DISCONNECT_THRESHOLD` (= 4096)
- `private static final Component CHAT_VALIDATION_FAILED`
- `public ServerPlayer player`
- `public final PlayerChunkSender chunkSender`
- `private int tickCount`
- `private int ackBlockChangesUpTo`
- `private int chatSpamTickCount`
- `private int dropSpamTickCount`
- `private double firstGoodX`
- `private double firstGoodY`
- `private double firstGoodZ`
- `private double lastGoodX`
- `private double lastGoodY`
- `private double lastGoodZ`
- `@Nullable private Entity lastVehicle`
- `private double vehicleFirstGoodX`
- `private double vehicleFirstGoodY`
- `private double vehicleFirstGoodZ`
- `private double vehicleLastGoodX`
- `private double vehicleLastGoodY`
- `private double vehicleLastGoodZ`
- `@Nullable private Vec3 awaitingPositionFromClient`
- `private int awaitingTeleport`
- `private int awaitingTeleportTime`
- `private boolean clientIsFloating`
- `private int aboveGroundTickCount`
- `private boolean clientVehicleIsFloating`
- `private int aboveGroundVehicleTickCount`
- `private int receivedMovePacketCount`
- `private int knownMovePacketCount`
- `private final AtomicReference<Instant> lastChatTimeStamp`
- `@Nullable private RemoteChatSession chatSession`
- `private SignedMessageChain.Decoder signedMessageDecoder`
- `private final LastSeenMessagesValidator lastSeenMessages`
- `private final MessageSignatureCache messageSignatureCache`
- `private final FutureChain chatMessageChain`
- `private boolean waitingForSwitchToConfig`

### Inherited fields
- from `net.minecraft.server.network.ServerCommonPacketListenerImpl`: `connection`, `LATENCY_CHECK_INTERVAL`, `server`

### Methods
- `public void tick()`
- `public void resetPosition()`
- `public boolean isAcceptingMessages()`
- `public boolean shouldHandleMessage(Packet<?> p_298646_)`
- `protected com.mojang.authlib.GameProfile playerProfile()`
- `private <T, R> CompletableFuture<R> filterTextPacket(T p_243240_,  BiFunction<TextFilter,T,CompletableFuture<R>> p_243271_)`
- `private CompletableFuture<FilteredText> filterTextPacket(String p_243213_)`
- `private CompletableFuture<List<FilteredText>> filterTextPacket(List<String> p_243258_)`
- `public void handlePlayerInput(ServerboundPlayerInputPacket p_9893_)`
- `private static boolean containsInvalidValues(double p_143664_,  double p_143665_,  double p_143666_,  float p_143667_,  float p_143668_)`
- `private static double clampHorizontal(double p_143610_)`
- `private static double clampVertical(double p_143654_)`
- `public void handleMoveVehicle(ServerboundMoveVehiclePacket p_9876_)`
- `private boolean noBlocksAround(Entity p_9794_)`
- `public void handleAcceptTeleportPacket(ServerboundAcceptTeleportationPacket p_9835_)`
- `public void handleRecipeBookSeenRecipePacket(ServerboundRecipeBookSeenRecipePacket p_9897_)`
- `public void handleRecipeBookChangeSettingsPacket(ServerboundRecipeBookChangeSettingsPacket p_9895_)`
- `public void handleSeenAdvancements(ServerboundSeenAdvancementsPacket p_9903_)`
- `public void handleCustomCommandSuggestions(ServerboundCommandSuggestionPacket p_9847_)`
- `public void handleSetCommandBlock(ServerboundSetCommandBlockPacket p_9911_)`
- `public void handleSetCommandMinecart(ServerboundSetCommandMinecartPacket p_9913_)`
- `public void handlePickItem(ServerboundPickItemPacket p_9880_)`
- `public void handleRenameItem(ServerboundRenameItemPacket p_9899_)`
- `public void handleSetBeaconPacket(ServerboundSetBeaconPacket p_9907_)`
- `public void handleSetStructureBlock(ServerboundSetStructureBlockPacket p_9919_)`
- `public void handleSetJigsawBlock(ServerboundSetJigsawBlockPacket p_9917_)`
- `public void handleJigsawGenerate(ServerboundJigsawGeneratePacket p_9868_)`
- `public void handleSelectTrade(ServerboundSelectTradePacket p_9905_)`
- `public void handleEditBook(ServerboundEditBookPacket p_9862_)`
- `private void updateBookContents(List<FilteredText> p_9813_,  int p_9814_)`
- `private void signBook(FilteredText p_215209_,  List<FilteredText> p_215210_,  int p_215211_)`
- `private void updateBookPages(List<FilteredText> p_143635_,  UnaryOperator<String> p_143636_,  ItemStack p_143637_)`
- `public void handleEntityTagQuery(ServerboundEntityTagQuery p_9864_)`
- `public void handleBlockEntityTagQuery(ServerboundBlockEntityTagQuery p_9837_)`
- `public void handleMovePlayer(ServerboundMovePlayerPacket p_9874_)`
- `private boolean isPlayerCollidingWithAnythingNew(LevelReader p_289008_,  AABB p_288986_,  double p_288990_,  double p_288991_,  double p_288967_)`
- `public void teleport(double p_9775_,  double p_9776_,  double p_9777_,  float p_9778_,  float p_9779_)`
- `public void teleport(double p_9781_,  double p_9782_,  double p_9783_,  float p_9784_,  float p_9785_,  Set<RelativeMovement> p_9786_)`
- `public void handlePlayerAction(ServerboundPlayerActionPacket p_9889_)`
- `private static boolean wasBlockPlacementAttempt(ServerPlayer p_9791_,  ItemStack p_9792_)`
- `public void handleUseItemOn(ServerboundUseItemOnPacket p_9930_)`
- `public void handleUseItem(ServerboundUseItemPacket p_9932_)`
- `public void handleTeleportToEntityPacket(ServerboundTeleportToEntityPacket p_9928_)`
- `public void handlePaddleBoat(ServerboundPaddleBoatPacket p_9878_)`
- `public void onDisconnect(Component p_9825_)`
- `private void removePlayerFromWorld()`
- `public void ackBlockChangesUpTo(int p_215202_)`
- `public void handleSetCarriedItem(ServerboundSetCarriedItemPacket p_9909_)`
- `public void handleChat(ServerboundChatPacket p_9841_)`
- `public void handleChatCommand(ServerboundChatCommandPacket p_215225_)`
- `private void performChatCommand(ServerboundChatCommandPacket p_251139_,  LastSeenMessages p_250484_)`
- `private void handleMessageDecodeFailure(SignedMessageChain.DecodeException p_252068_)`
- `private Map<String,PlayerChatMessage> collectSignedArguments(ServerboundChatCommandPacket p_249441_,  SignableCommand<?> p_250039_,  LastSeenMessages p_249207_)  throws SignedMessageChain.DecodeException`
  - throws: SignedMessageChain.DecodeException
- `private com.mojang.brigadier.ParseResults<CommandSourceStack> parseCommand(String p_242938_)`
- `private Optional<LastSeenMessages> tryHandleChat(String p_251364_,  Instant p_248959_,  LastSeenMessages.Update p_249613_)`
- `private Optional<LastSeenMessages> unpackAndApplyLastSeen(LastSeenMessages.Update p_249673_)`
- `private boolean updateChatOrder(Instant p_215237_)`
- `private static boolean isChatMessageIllegal(String p_215215_)`
- `private PlayerChatMessage getSignedMessage(ServerboundChatPacket p_251061_,  LastSeenMessages p_250566_)  throws SignedMessageChain.DecodeException`
  - throws: SignedMessageChain.DecodeException
- `private void broadcastChatMessage(PlayerChatMessage p_243277_)`
- `private void detectRateSpam()`
- `public void handleChatAck(ServerboundChatAckPacket p_242387_)`
- `public void handleAnimate(ServerboundSwingPacket p_9926_)`
- `public void handlePlayerCommand(ServerboundPlayerCommandPacket p_9891_)`
- `public void addPendingMessage(PlayerChatMessage p_242439_)`
- `public void sendPlayerChatMessage(PlayerChatMessage p_250321_,  ChatType.Bound p_250910_)`
- `public void sendDisguisedChatMessage(Component p_251804_,  ChatType.Bound p_250040_)`
- `public SocketAddress getRemoteAddress()`
- `public void switchToConfig()`
- `public void handlePingRequest(ServerboundPingRequestPacket p_300935_)`
- `public void handleInteract(ServerboundInteractPacket p_9866_)`
- `public void handleClientCommand(ServerboundClientCommandPacket p_9843_)`
- `public void handleContainerClose(ServerboundContainerClosePacket p_9858_)`
- `public void handleContainerClick(ServerboundContainerClickPacket p_9856_)`
- `public void handlePlaceRecipe(ServerboundPlaceRecipePacket p_9882_)`
- `public void handleContainerButtonClick(ServerboundContainerButtonClickPacket p_9854_)`
- `public void handleSetCreativeModeSlot(ServerboundSetCreativeModeSlotPacket p_9915_)`
- `public void handleSignUpdate(ServerboundSignUpdatePacket p_9921_)`
- `private void updateSignText(ServerboundSignUpdatePacket p_9923_,  List<FilteredText> p_9924_)`
- `public void handlePlayerAbilities(ServerboundPlayerAbilitiesPacket p_9887_)`
- `public void handleClientInformation(ServerboundClientInformationPacket p_298714_)`
- `public void handleChangeDifficulty(ServerboundChangeDifficultyPacket p_9839_)`
- `public void handleLockDifficulty(ServerboundLockDifficultyPacket p_9872_)`
- `public void handleChatSessionUpdate(ServerboundChatSessionUpdatePacket p_253950_)`
- `public void handleConfigurationAcknowledged(ServerboundConfigurationAcknowledgedPacket p_299199_)`
- `public void handleChunkBatchReceived(ServerboundChunkBatchReceivedPacket p_298310_)`
- `private void resetPlayerChatState(RemoteChatSession p_253823_)`
- `public ServerPlayer getPlayer()`

### Inherited methods
- from `net.minecraft.server.network.ServerCommonPacketListenerImpl`: `createCookie`, `disconnect`, `getConnection`, `getOwner`, `handleCustomPayload`, `handleKeepAlive`, `handlePong`, `handleResourcePackResponse`, `isSingleplayerOwner`, `keepConnectionAlive`, `latency`, `resumeFlushing`, `send`, `send`, `suspendFlushing`
- from `net.minecraft.network.ServerboundPacketListener`: `flow`
- from `net.minecraft.network.protocol.common.ServerCommonPacketListener`: `handleCustomPayload`, `handleKeepAlive`, `handlePong`, `handleResourcePackResponse`
- from `net.minecraft.network.protocol.game.ServerGamePacketListener`: `protocol`
- from `net.minecraft.network.protocol.game.ServerPacketListener`: `shouldPropagateHandlingExceptions`
- from `net.minecraft.server.network.ServerPlayerConnection`: `send`

## ServerGamePacketListenerImpl.EntityInteraction

*interface* `net.minecraft.server.network.ServerGamePacketListenerImpl.EntityInteraction`

Enclosing class: ServerGamePacketListenerImpl

### Methods
- `InteractionResult run(ServerPlayer p_143695_,  Entity p_143696_,  InteractionHand p_143697_)`

## ServerHandshakePacketListenerImpl

*class* `net.minecraft.server.network.ServerHandshakePacketListenerImpl`

### Fields
- `private static final Component IGNORE_STATUS_REASON`
- `private final MinecraftServer server`
- `private final Connection connection`

### Methods
- `public void handleIntention(ClientIntentionPacket p_9975_)`
- `public void onDisconnect(Component p_9973_)`
- `public boolean isAcceptingMessages()`

### Inherited methods
- from `net.minecraft.network.PacketListener`: `shouldHandleMessage`
- from `net.minecraft.network.ServerboundPacketListener`: `flow`
- from `net.minecraft.network.protocol.handshake.ServerHandshakePacketListener`: `protocol`
- from `net.minecraft.network.protocol.game.ServerPacketListener`: `shouldPropagateHandlingExceptions`

## ServerLoginPacketListenerImpl

*class* `net.minecraft.server.network.ServerLoginPacketListenerImpl`

### Fields
- `private static final AtomicInteger UNIQUE_THREAD_ID`
- `static final org.slf4j.Logger LOGGER`
- `private static final int MAX_TICKS_BEFORE_LOGIN` (= 600)
- `private static final Component DISCONNECT_UNEXPECTED_QUERY`
- `private final byte[] challenge`
- `final MinecraftServer server`
- `final Connection connection`
- `private volatile ServerLoginPacketListenerImpl.State state`
- `private int tick`
- `@Nullable String requestedUsername`
- `@Nullable private com.mojang.authlib.GameProfile authenticatedProfile`
- `private final String serverId` (= "")

### Methods
- `public void tick()`
- `public boolean isAcceptingMessages()`
- `public void disconnect(Component p_10054_)`
- `private boolean isPlayerAlreadyInWorld(com.mojang.authlib.GameProfile p_298499_)`
- `public void onDisconnect(Component p_10043_)`
- `public String getUserName()`
- `public void handleHello(ServerboundHelloPacket p_10047_)`
- `void startClientVerification(com.mojang.authlib.GameProfile p_301095_)`
- `private void verifyLoginAndFinishConnectionSetup(com.mojang.authlib.GameProfile p_299507_)`
- `private void finishLoginAndWaitForClient(com.mojang.authlib.GameProfile p_300150_)`
- `public static boolean isValidUsername(String p_203793_)`
- `public void handleKey(ServerboundKeyPacket p_10049_)`
- `public void handleCustomQueryPacket(ServerboundCustomQueryAnswerPacket p_297965_)`
- `public void handleLoginAcknowledgement(ServerboundLoginAcknowledgedPacket p_298815_)`
- `@Nullable public com.mojang.authlib.GameProfile getAuthenticatedProfile()`
- `protected static com.mojang.authlib.GameProfile createOfflineProfile(String p_297551_)`

### Inherited methods
- from `net.minecraft.network.PacketListener`: `shouldHandleMessage`
- from `net.minecraft.network.ServerboundPacketListener`: `flow`
- from `net.minecraft.network.protocol.login.ServerLoginPacketListener`: `protocol`
- from `net.minecraft.network.protocol.game.ServerPacketListener`: `shouldPropagateHandlingExceptions`

## ServerPlayerConnection

*interface* `net.minecraft.server.network.ServerPlayerConnection`

### Methods
- `ServerPlayer getPlayer()`
- `void send(Packet<?> p_143702_)`

## ServerStatusPacketListenerImpl

*class* `net.minecraft.server.network.ServerStatusPacketListenerImpl`

### Fields
- `private static final Component DISCONNECT_REASON`
- `private final ServerStatus status`
- `@Nullable private final @Nullable String statusCache`
- `private final Connection connection`
- `private boolean hasRequestedStatus`

### Methods
- `public void onDisconnect(Component p_10091_)`
- `public boolean isAcceptingMessages()`
- `public void handleStatusRequest(ServerboundStatusRequestPacket p_10095_)`
- `public void handlePingRequest(ServerboundPingRequestPacket p_10093_)`

### Inherited methods
- from `net.minecraft.network.PacketListener`: `shouldHandleMessage`
- from `net.minecraft.network.ServerboundPacketListener`: `flow`
- from `net.minecraft.network.protocol.game.ServerPacketListener`: `shouldPropagateHandlingExceptions`
- from `net.minecraft.network.protocol.status.ServerStatusPacketListener`: `protocol`

## TextFilter

*interface* `net.minecraft.server.network.TextFilter`

### Fields
- `static final TextFilter DUMMY`

### Methods
- `void join()`
- `void leave()`
- `CompletableFuture<FilteredText> processStreamMessage(String p_10096_)`
- `CompletableFuture<List<FilteredText>> processMessageBundle(List<String> p_10097_)`

## TextFilterClient

*class* `net.minecraft.server.network.TextFilterClient`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final AtomicInteger WORKER_COUNT`
- `private static final ThreadFactory THREAD_FACTORY`
- `private static final String DEFAULT_ENDPOINT` (= "v1/chat")
- `private final URL chatEndpoint`
- `private final TextFilterClient.MessageEncoder chatEncoder`
- `final URL joinEndpoint`
- `final TextFilterClient.JoinOrLeaveEncoder joinEncoder`
- `final URL leaveEndpoint`
- `final TextFilterClient.JoinOrLeaveEncoder leaveEncoder`
- `private final String authKey`
- `final TextFilterClient.IgnoreStrategy chatIgnoreStrategy`
- `final ExecutorService workerPool`

### Methods
- `private static URL getEndpoint(URI p_212246_,  @Nullable  com.google.gson.JsonObject p_212247_,  String p_212248_,  String p_212249_)  throws MalformedURLException`
  - throws: MalformedURLException
- `private static String getEndpointFromConfig(@Nullable  com.google.gson.JsonObject p_215295_,  String p_215296_,  String p_215297_)`
- `@Nullable public static TextFilterClient createFromConfig(String p_143737_)`
- `void processJoinOrLeave(com.mojang.authlib.GameProfile p_215303_,  URL p_215304_,  TextFilterClient.JoinOrLeaveEncoder p_215305_,  Executor p_215306_)`
- `CompletableFuture<FilteredText> requestMessageProcessing(com.mojang.authlib.GameProfile p_10137_,  String p_10138_,  TextFilterClient.IgnoreStrategy p_10139_,  Executor p_10140_)`
- `private FilterMask parseMask(String p_243283_,  com.google.gson.JsonArray p_243222_,  TextFilterClient.IgnoreStrategy p_243237_)`
- `public void close()`
- `private void drainStream(InputStream p_10146_)  throws IOException`
  - throws: IOException
- `private com.google.gson.JsonObject processRequestResponse(com.google.gson.JsonObject p_10128_,  URL p_10129_)  throws IOException`
  - throws: IOException
- `private void processRequest(com.google.gson.JsonObject p_10152_,  URL p_10153_)  throws IOException`
  - throws: IOException
- `private HttpURLConnection makeRequest(com.google.gson.JsonObject p_10157_,  URL p_10158_)  throws IOException`
  - throws: IOException
- `public TextFilter createContext(com.mojang.authlib.GameProfile p_10135_)`

## TextFilterClient.IgnoreStrategy

*interface* `net.minecraft.server.network.TextFilterClient.IgnoreStrategy`

Enclosing class: TextFilterClient

### Fields
- `static final TextFilterClient.IgnoreStrategy NEVER_IGNORE`
- `static final TextFilterClient.IgnoreStrategy IGNORE_FULLY_FILTERED`

### Methods
- `static TextFilterClient.IgnoreStrategy ignoreOverThreshold(int p_143739_)`
- `static TextFilterClient.IgnoreStrategy select(int p_143745_)`
- `boolean shouldIgnore(String p_10172_,  int p_10173_)`

## TextFilterClient.JoinOrLeaveEncoder

*interface* `net.minecraft.server.network.TextFilterClient.JoinOrLeaveEncoder`

Enclosing class: TextFilterClient

### Methods
- `com.google.gson.JsonObject encode(com.mojang.authlib.GameProfile p_215318_)`

## TextFilterClient.MessageEncoder

*interface* `net.minecraft.server.network.TextFilterClient.MessageEncoder`

Enclosing class: TextFilterClient

### Methods
- `com.google.gson.JsonObject encode(com.mojang.authlib.GameProfile p_215320_,  String p_215321_)`

## TextFilterClient.PlayerContext

*class* `net.minecraft.server.network.TextFilterClient.PlayerContext`

Enclosing class: TextFilterClient

### Fields
- `private final com.mojang.authlib.GameProfile profile`
- `private final Executor streamExecutor`

### Inherited fields
- from `net.minecraft.server.network.TextFilter`: `DUMMY`

### Methods
- `public void join()`
- `public void leave()`
- `public CompletableFuture<List<FilteredText>> processMessageBundle(List<String> p_10190_)`
- `public CompletableFuture<FilteredText> processStreamMessage(String p_10186_)`

## TextFilterClient.RequestFailedException

*class* `net.minecraft.server.network.TextFilterClient.RequestFailedException`

Enclosing class: TextFilterClient

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`
