# net.minecraft.network

- [BandwidthDebugMonitor](#bandwidthdebugmonitor)
- [CipherBase](#cipherbase)
- [CipherDecoder](#cipherdecoder)
- [CipherEncoder](#cipherencoder)
- [Class ConnectionProtocol](#class-connectionprotocol)
- [ClientboundPacketListener](#clientboundpacketlistener)
- [ClientPongPacketListener](#clientpongpacketlistener)
- [CompressionDecoder](#compressiondecoder)
- [CompressionEncoder](#compressionencoder)
- [Connection](#connection)
- [ConnectionProtocol.CodecData](#connectionprotocol.codecdata)
- [ConnectionProtocol.PacketSet](#connectionprotocol.packetset)
- [ConnectionProtocol.ProtocolBuilder](#connectionprotocol.protocolbuilder)
- [FriendlyByteBuf](#friendlybytebuf)
- [FriendlyByteBuf.Reader](#friendlybytebuf.reader)
- [FriendlyByteBuf.Writer](#friendlybytebuf.writer)
- [PacketBundlePacker](#packetbundlepacker)
- [PacketBundleUnpacker](#packetbundleunpacker)
- [PacketDecoder](#packetdecoder)
- [PacketEncoder](#packetencoder)
- [PacketFlowValidator](#packetflowvalidator)
- [PacketListener](#packetlistener)
- [PacketSendListener](#packetsendlistener)
- [ProtocolSwapHandler](#protocolswaphandler)
- [RateKickingConnection](#ratekickingconnection)
- [ServerboundPacketListener](#serverboundpacketlistener)
- [SkipPacketException](#skippacketexception)
- [TickablePacketListener](#tickablepacketlistener)
- [Utf8String](#utf8string)
- [VarInt](#varint)
- [Varint21FrameDecoder](#varint21framedecoder)
- [Varint21LengthFieldPrepender](#varint21lengthfieldprepender)
- [VarLong](#varlong)
## BandwidthDebugMonitor

*class* `net.minecraft.network.BandwidthDebugMonitor`

### Fields
- `private final AtomicInteger bytesReceived`
- `private final SampleLogger bandwidthLogger`

### Methods
- `public void onReceive(int p_300834_)`
- `public void tick()`

## CipherBase

*class* `net.minecraft.network.CipherBase`

### Fields
- `private final Cipher cipher`
- `private byte[] heapIn`
- `private byte[] heapOut`

### Methods
- `private byte[] bufToByte(io.netty.buffer.ByteBuf p_129405_)`
- `protected io.netty.buffer.ByteBuf decipher(io.netty.channel.ChannelHandlerContext p_129410_,  io.netty.buffer.ByteBuf p_129411_)  throws ShortBufferException`
  - throws: ShortBufferException
- `protected void encipher(io.netty.buffer.ByteBuf p_129407_,  io.netty.buffer.ByteBuf p_129408_)  throws ShortBufferException`
  - throws: ShortBufferException

## CipherDecoder

*class* `net.minecraft.network.CipherDecoder`

### Fields
- `private final CipherBase cipher`

### Methods
- `protected void decode(io.netty.channel.ChannelHandlerContext p_129416_,  io.netty.buffer.ByteBuf p_129417_,  List<Object> p_129418_)  throws Exception`
  - throws: Exception

### Inherited methods
- from `io.netty.handler.codec.MessageToMessageDecoder`: `acceptInboundMessage`, `channelRead`
- from `io.netty.channel.ChannelInboundHandlerAdapter`: `channelActive`, `channelInactive`, `channelReadComplete`, `channelRegistered`, `channelUnregistered`, `channelWritabilityChanged`, `exceptionCaught`, `userEventTriggered`
- from `io.netty.channel.ChannelHandlerAdapter`: `ensureNotSharable`, `handlerAdded`, `handlerRemoved`, `isSharable`
- from `io.netty.channel.ChannelHandler`: `handlerAdded`, `handlerRemoved`

## CipherEncoder

*class* `net.minecraft.network.CipherEncoder`

### Fields
- `private final CipherBase cipher`

### Methods
- `protected void encode(io.netty.channel.ChannelHandlerContext p_129427_,  io.netty.buffer.ByteBuf p_129428_,  io.netty.buffer.ByteBuf p_129429_)  throws Exception`
  - throws: Exception

### Inherited methods
- from `io.netty.handler.codec.MessageToByteEncoder`: `acceptOutboundMessage`, `allocateBuffer`, `isPreferDirect`, `write`
- from `io.netty.channel.ChannelOutboundHandlerAdapter`: `bind`, `close`, `connect`, `deregister`, `disconnect`, `flush`, `read`
- from `io.netty.channel.ChannelHandlerAdapter`: `ensureNotSharable`, `exceptionCaught`, `handlerAdded`, `handlerRemoved`, `isSharable`
- from `io.netty.channel.ChannelHandler`: `exceptionCaught`, `handlerAdded`, `handlerRemoved`

## Class ConnectionProtocol

*enum* `net.minecraft.network.Class ConnectionProtocol`

### Fields
- `public static final int NOT_REGISTERED`
- `private final String id`
- `private final Map<PacketFlow,ConnectionProtocol.CodecData<?>> flows`

### Methods
- `public static ConnectionProtocol[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ConnectionProtocol valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `private static ConnectionProtocol.ProtocolBuilder protocol()`
- `public it.unimi.dsi.fastutil.ints.Int2ObjectMap<Class<? extends Packet<?>>> getPacketsByIds(PacketFlow p_195621_)`
- `public String id()`
- `public ConnectionProtocol.CodecData<?> codec(PacketFlow p_299620_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ClientboundPacketListener

*interface* `net.minecraft.network.ClientboundPacketListener`

All Superinterfaces: PacketListener

### Methods
- `default PacketFlow flow()`

### Inherited methods
- from `net.minecraft.network.PacketListener`: `isAcceptingMessages`, `onDisconnect`, `protocol`, `shouldHandleMessage`, `shouldPropagateHandlingExceptions`

## ClientPongPacketListener

*interface* `net.minecraft.network.ClientPongPacketListener`

All Superinterfaces: PacketListener

### Methods
- `void handlePongResponse(ClientboundPongResponsePacket p_300835_)`

### Inherited methods
- from `net.minecraft.network.PacketListener`: `flow`, `isAcceptingMessages`, `onDisconnect`, `protocol`, `shouldHandleMessage`, `shouldPropagateHandlingExceptions`

## CompressionDecoder

*class* `net.minecraft.network.CompressionDecoder`

### Fields
- `public static final int MAXIMUM_COMPRESSED_LENGTH` (= 2097152)
- `public static final int MAXIMUM_UNCOMPRESSED_LENGTH` (= 8388608)
- `private final Inflater inflater`
- `private int threshold`
- `private boolean validateDecompressed`

### Inherited fields
- from `io.netty.handler.codec.ByteToMessageDecoder`: `COMPOSITE_CUMULATOR`, `MERGE_CUMULATOR`

### Methods
- `protected void decode(io.netty.channel.ChannelHandlerContext p_129441_,  io.netty.buffer.ByteBuf p_129442_,  List<Object> p_129443_)  throws Exception`
  - throws: Exception
- `private void setupInflaterInput(io.netty.buffer.ByteBuf p_299798_)`
- `private io.netty.buffer.ByteBuf inflate(io.netty.channel.ChannelHandlerContext p_300050_,  int p_298909_)  throws DataFormatException`
  - throws: DataFormatException
- `public void setThreshold(int p_182678_,  boolean p_182679_)`

### Inherited methods
- from `io.netty.handler.codec.ByteToMessageDecoder`: `actualReadableBytes`, `callDecode`, `channelInactive`, `channelRead`, `channelReadComplete`, `decodeLast`, `discardSomeReadBytes`, `handlerRemoved`, `handlerRemoved0`, `internalBuffer`, `isSingleDecode`, `setCumulator`, `setDiscardAfterReads`, `setSingleDecode`, `userEventTriggered`
- from `io.netty.channel.ChannelInboundHandlerAdapter`: `channelActive`, `channelRegistered`, `channelUnregistered`, `channelWritabilityChanged`, `exceptionCaught`
- from `io.netty.channel.ChannelHandlerAdapter`: `ensureNotSharable`, `handlerAdded`, `isSharable`
- from `io.netty.channel.ChannelHandler`: `handlerAdded`

## CompressionEncoder

*class* `net.minecraft.network.CompressionEncoder`

### Fields
- `private final byte[] encodeBuf`
- `private final Deflater deflater`
- `private int threshold`
- `private static final boolean DISABLE_PACKET_DEBUG`
- `private static final org.apache.logging.log4j.Logger LOGGER`

### Methods
- `protected void encode(io.netty.channel.ChannelHandlerContext p_129452_,  io.netty.buffer.ByteBuf p_129453_,  io.netty.buffer.ByteBuf p_129454_)`
- `public int getThreshold()`
- `public void setThreshold(int p_129450_)`

### Inherited methods
- from `io.netty.handler.codec.MessageToByteEncoder`: `acceptOutboundMessage`, `allocateBuffer`, `isPreferDirect`, `write`
- from `io.netty.channel.ChannelOutboundHandlerAdapter`: `bind`, `close`, `connect`, `deregister`, `disconnect`, `flush`, `read`
- from `io.netty.channel.ChannelHandlerAdapter`: `ensureNotSharable`, `exceptionCaught`, `handlerAdded`, `handlerRemoved`, `isSharable`
- from `io.netty.channel.ChannelHandler`: `exceptionCaught`, `handlerAdded`, `handlerRemoved`

## Connection

*class* `net.minecraft.network.Connection`

### Fields
- `private static final float AVERAGE_PACKETS_SMOOTHING` (= 0.75f)
- `private static final org.slf4j.Logger LOGGER`
- `public static final org.slf4j.Marker ROOT_MARKER`
- `public static final org.slf4j.Marker PACKET_MARKER`
- `public static final org.slf4j.Marker PACKET_RECEIVED_MARKER`
- `public static final org.slf4j.Marker PACKET_SENT_MARKER`
- `public static final io.netty.util.AttributeKey<ConnectionProtocol.CodecData<?>> ATTRIBUTE_SERVERBOUND_PROTOCOL`
- `public static final io.netty.util.AttributeKey<ConnectionProtocol.CodecData<?>> ATTRIBUTE_CLIENTBOUND_PROTOCOL`
- `public static final Supplier<io.netty.channel.nio.NioEventLoopGroup> NETWORK_WORKER_GROUP`
- `public static final Supplier<io.netty.channel.epoll.EpollEventLoopGroup> NETWORK_EPOLL_WORKER_GROUP`
- `public static final Supplier<io.netty.channel.DefaultEventLoopGroup> LOCAL_WORKER_GROUP`
- `private final PacketFlow receiving`
- `private final Queue<Consumer<Connection>> pendingActions`
- `private io.netty.channel.Channel channel`
- `private SocketAddress address`
- `@Nullable private volatile PacketListener disconnectListener`
- `@Nullable private volatile PacketListener packetListener`
- `@Nullable private Component disconnectedReason`
- `private boolean encrypted`
- `private boolean disconnectionHandled`
- `private int receivedPackets`
- `private int sentPackets`
- `private float averageReceivedPackets`
- `private float averageSentPackets`
- `private int tickCount`
- `private boolean handlingFault`
- `@Nullable private volatile Component delayedDisconnect`
- `@Nullable BandwidthDebugMonitor bandwidthDebugMonitor`
- `private Consumer<Connection> activationHandler`
- `private final PacketLogger packetLogger`

### Methods
- `public void channelActive(io.netty.channel.ChannelHandlerContext p_129525_)  throws Exception`
  - throws: Exception
- `public static void setInitialProtocolAttributes(io.netty.channel.Channel p_300821_)`
- `public void channelInactive(io.netty.channel.ChannelHandlerContext p_129527_)`
- `public void exceptionCaught(io.netty.channel.ChannelHandlerContext p_129533_,  Throwable p_129534_)`
- `protected void channelRead0(io.netty.channel.ChannelHandlerContext p_129487_,  Packet<?> p_129488_)`
- `private static <T extends PacketListener> void genericsFtw(Packet<T> p_129518_,  PacketListener p_129519_)`
- `public void suspendInboundAfterProtocolChange()`
- `public void resumeInboundAfterProtocolChange()`
- `public void setListener(PacketListener p_129506_)`
- `public void setListenerForServerboundHandshake(PacketListener p_299346_)`
- `public void initiateServerboundStatusConnection(String p_297855_,  int p_297423_,  ClientStatusPacketListener p_300237_)`
- `public void initiateServerboundPlayConnection(String p_300250_,  int p_297906_,  ClientLoginPacketListener p_297708_)`
- `private void initiateServerboundConnection(String p_300730_,  int p_300598_,  PacketListener p_298739_,  ClientIntent p_297789_)`
- `public void setClientboundProtocolAfterHandshake(ClientIntent p_300629_)`
- `public void send(Packet<?> p_129513_)`
- `public void send(Packet<?> p_243248_,  @Nullable  PacketSendListener p_243316_)`
- `public void send(Packet<?> p_298754_,  @Nullable  PacketSendListener p_300685_,  boolean p_298821_)`
- `public void runOnceConnected(Consumer<Connection> p_297681_)`
- `private void sendPacket(Packet<?> p_129521_,  @Nullable  PacketSendListener p_243246_,  boolean p_299777_)`
- `private void doSendPacket(Packet<?> p_243260_,  @Nullable  PacketSendListener p_243290_,  boolean p_299937_)`
- `public void flushChannel()`
- `private void flush()`
- `private static io.netty.util.AttributeKey<ConnectionProtocol.CodecData<?>> getProtocolKey(PacketFlow p_298298_)`
- `private void flushQueue()`
- `public void tick()`
- `protected void tickSecond()`
- `public SocketAddress getRemoteAddress()`
- `public String getLoggableAddress(boolean p_298740_)`
- `public void disconnect(Component p_129508_)`
- `public boolean isMemoryConnection()`
- `public PacketFlow getReceiving()`
- `public PacketFlow getSending()`
- `public static Connection connectToServer(InetSocketAddress p_178301_,  boolean p_178302_,  @Nullable  SampleLogger p_300093_)`
- `public static io.netty.channel.ChannelFuture connect(InetSocketAddress p_290034_,  boolean p_290035_,  Connection p_290031_)`
- `public static void configureSerialization(io.netty.channel.ChannelPipeline p_265436_,  PacketFlow p_265104_,  @Nullable  BandwidthDebugMonitor p_299297_)`
- `public void configurePacketHandler(io.netty.channel.ChannelPipeline p_300754_)`
- `private static void configureInMemoryPacketValidation(io.netty.channel.ChannelPipeline p_299383_,  PacketFlow p_299305_)`
- `public static void configureInMemoryPipeline(io.netty.channel.ChannelPipeline p_298130_,  PacketFlow p_298133_)`
- `public static Connection connectToLocalServer(SocketAddress p_129494_)`
- `public void setEncryptionKey(Cipher p_129496_,  Cipher p_129497_)`
- `public boolean isEncrypted()`
- `public boolean isConnected()`
- `public boolean isConnecting()`
- `@Nullable public PacketListener getPacketListener()`
- `@Nullable public Component getDisconnectedReason()`
- `public void setReadOnly()`
- `public void setupCompression(int p_129485_,  boolean p_182682_)`
- `public void handleDisconnection()`
- `public float getAverageReceivedPackets()`
- `public float getAverageSentPackets()`
- `public io.netty.channel.Channel channel()`
- `public ConnectionProtocol getProtocol()`
- `public void setBandwidthLogger(SampleLogger p_300126_)`

### Inherited methods
- from `io.netty.channel.SimpleChannelInboundHandler`: `acceptInboundMessage`, `channelRead`
- from `io.netty.channel.ChannelInboundHandlerAdapter`: `channelReadComplete`, `channelRegistered`, `channelUnregistered`, `channelWritabilityChanged`, `userEventTriggered`
- from `io.netty.channel.ChannelHandlerAdapter`: `ensureNotSharable`, `handlerAdded`, `handlerRemoved`, `isSharable`
- from `io.netty.channel.ChannelHandler`: `handlerAdded`, `handlerRemoved`

## ConnectionProtocol.CodecData

*class* `net.minecraft.network.ConnectionProtocol.CodecData`

Enclosing class: ConnectionProtocol

### Fields
- `private final ConnectionProtocol protocol`
- `private final PacketFlow flow`
- `private final ConnectionProtocol.PacketSet<T extends PacketListener> packetSet`

### Methods
- `public ConnectionProtocol protocol()`
- `public PacketFlow flow()`
- `public int packetId(Packet<?> p_301367_)`
- `public BundlerInfo bundlerInfo()`
- `it.unimi.dsi.fastutil.ints.Int2ObjectMap<Class<? extends Packet<?>>> packetsByIds()`
- `@Nullable public Packet<?> createPacket(int p_298171_,  FriendlyByteBuf p_299179_)`
- `public boolean isValidPacketType(Packet<?> p_300854_)`

## ConnectionProtocol.PacketSet

*class* `net.minecraft.network.ConnectionProtocol.PacketSet`

Enclosing class: ConnectionProtocol

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `final it.unimi.dsi.fastutil.objects.Object2IntMap<Class<? extends Packet<? super T extends PacketListener>>> classToId`
- `private final List<Function<FriendlyByteBuf,? extends Packet<? super T extends PacketListener>>> idToDeserializer`
- `private BundlerInfo bundlerInfo`
- `private final Set<Class<? extends Packet<T extends PacketListener>>> extraClasses`

### Methods
- `public <P extends Packet<? super T>> ConnectionProtocol.PacketSet<T> addPacket(Class<P> p_178331_,  Function<FriendlyByteBuf,P> p_178332_)`
- `public <P extends BundlePacket<T>> ConnectionProtocol.PacketSet<T> withBundlePacket(Class<P> p_265034_,  Function<Iterable<Packet<T>>,P> p_265591_)`
- `public int getId(Class<?> p_265252_)`
- `public boolean isKnownPacket(Class<?> p_298609_)`
- `@Nullable public Packet<?> createPacket(int p_178328_,  FriendlyByteBuf p_178329_)`
- `public BundlerInfo bundlerInfo()`

## ConnectionProtocol.ProtocolBuilder

*class* `net.minecraft.network.ConnectionProtocol.ProtocolBuilder`

Enclosing class: ConnectionProtocol

### Fields
- `private final Map<PacketFlow,ConnectionProtocol.PacketSet<?>> flows`

### Methods
- `public <T extends PacketListener> ConnectionProtocol.ProtocolBuilder addFlow(PacketFlow p_129626_,  ConnectionProtocol.PacketSet<T> p_129627_)`
- `public Map<PacketFlow,ConnectionProtocol.CodecData<?>> buildCodecs(ConnectionProtocol p_298845_)`

## FriendlyByteBuf

*class* `net.minecraft.network.FriendlyByteBuf`

### Fields
- `public static final int DEFAULT_NBT_QUOTA` (= 2097152)
- `private final io.netty.buffer.ByteBuf source`
- `public static final short MAX_STRING_LENGTH` (= 32767)
- `public static final int MAX_COMPONENT_STRING_LENGTH` (= 262144)
- `private static final int PUBLIC_KEY_SIZE` (= 256)
- `private static final int MAX_PUBLIC_KEY_HEADER_SIZE` (= 256)
- `private static final int MAX_PUBLIC_KEY_LENGTH` (= 512)
- `private static final com.google.gson.Gson GSON`

### Methods
- `@Deprecated public <T> T readWithCodecTrusted(com.mojang.serialization.DynamicOps<Tag> p_300704_,  com.mojang.serialization.Codec<T> p_298353_)` (deprecated)
- `@Deprecated public <T> T readWithCodec(com.mojang.serialization.DynamicOps<Tag> p_266903_,  com.mojang.serialization.Codec<T> p_267107_,  NbtAccounter p_300072_)` (deprecated)
- `@Deprecated public <T> FriendlyByteBuf writeWithCodec(com.mojang.serialization.DynamicOps<Tag> p_266702_,  com.mojang.serialization.Codec<T> p_267245_,  T p_266783_)` (deprecated)
- `public <T> T readJsonWithCodec(com.mojang.serialization.Codec<T> p_273318_)`
- `public <T> void writeJsonWithCodec(com.mojang.serialization.Codec<T> p_273285_,  T p_272770_)`
- `public <T> void writeId(IdMap<T> p_236819_,  T p_236820_)`
- `public <T> void writeId(IdMap<Holder<T>> p_263337_,  Holder<T> p_263384_,  FriendlyByteBuf.Writer<T> p_263358_)`
- `@Nullable public <T> T readById(IdMap<T> p_236817_)`
- `public <T> Holder<T> readById(IdMap<Holder<T>> p_263401_,  FriendlyByteBuf.Reader<T> p_263374_)`
- `public static <T> IntFunction<T> limitValue(IntFunction<T> p_182696_,  int p_182697_)`
- `public <T, C extends Collection<T>> C readCollection(IntFunction<C> p_236839_,  FriendlyByteBuf.Reader<T> p_236840_)`
- `public <T> void writeCollection(Collection<T> p_236829_,  FriendlyByteBuf.Writer<T> p_236830_)`
- `public <T> List<T> readList(FriendlyByteBuf.Reader<T> p_236846_)`
- `public it.unimi.dsi.fastutil.ints.IntList readIntIdList()`
- `public void writeIntIdList(it.unimi.dsi.fastutil.ints.IntList p_178346_)`
- `public <K, V, M extends Map<K, V>> M readMap(IntFunction<M> p_236842_,  FriendlyByteBuf.Reader<K> p_236843_,  FriendlyByteBuf.Reader<V> p_236844_)`
- `public <K, V> Map<K,V> readMap(FriendlyByteBuf.Reader<K> p_236848_,  FriendlyByteBuf.Reader<V> p_236849_)`
- `public <K, V> void writeMap(Map<K,V> p_236832_,  FriendlyByteBuf.Writer<K> p_236833_,  FriendlyByteBuf.Writer<V> p_236834_)`
- `public void readWithCount(Consumer<FriendlyByteBuf> p_178365_)`
- `public <E extends Enum<E>> void writeEnumSet(EnumSet<E> p_250400_,  Class<E> p_250673_)`
- `public <E extends Enum<E>> EnumSet<E> readEnumSet(Class<E> p_251289_)`
- `public <T> void writeOptional(Optional<T> p_236836_,  FriendlyByteBuf.Writer<T> p_236837_)`
- `public <T> Optional<T> readOptional(FriendlyByteBuf.Reader<T> p_236861_)`
- `@Nullable public <T> T readNullable(FriendlyByteBuf.Reader<T> p_236869_)`
- `public <T> void writeNullable(@Nullable  T p_236822_,  FriendlyByteBuf.Writer<T> p_236823_)`
- `public <L, R> void writeEither(com.mojang.datafixers.util.Either<L,R> p_236811_,  FriendlyByteBuf.Writer<L> p_236812_,  FriendlyByteBuf.Writer<R> p_236813_)`
- `public <L, R> com.mojang.datafixers.util.Either<L,R> readEither(FriendlyByteBuf.Reader<L> p_236863_,  FriendlyByteBuf.Reader<R> p_236864_)`
- `public byte[] readByteArray()`
- `public FriendlyByteBuf writeByteArray(byte[] p_130088_)`
- `public byte[] readByteArray(int p_130102_)`
- `public FriendlyByteBuf writeVarIntArray(int[] p_130090_)`
- `public int[] readVarIntArray()`
- `public int[] readVarIntArray(int p_130117_)`
- `public FriendlyByteBuf writeLongArray(long[] p_130092_)`
- `public long[] readLongArray()`
- `public long[] readLongArray(@Nullable  long[] p_130106_)`
- `public long[] readLongArray(@Nullable  long[] p_130094_,  int p_130095_)`
- `public BlockPos readBlockPos()`
- `public FriendlyByteBuf writeBlockPos(BlockPos p_130065_)`
- `public ChunkPos readChunkPos()`
- `public FriendlyByteBuf writeChunkPos(ChunkPos p_178342_)`
- `public SectionPos readSectionPos()`
- `public FriendlyByteBuf writeSectionPos(SectionPos p_178344_)`
- `public GlobalPos readGlobalPos()`
- `public void writeGlobalPos(GlobalPos p_236815_)`
- `public org.joml.Vector3f readVector3f()`
- `public void writeVector3f(org.joml.Vector3f p_270985_)`
- `public org.joml.Quaternionf readQuaternion()`
- `public void writeQuaternion(org.joml.Quaternionf p_270141_)`
- `public Vec3 readVec3()`
- `public void writeVec3(Vec3 p_300768_)`
- `public Component readComponent()`
- `public FriendlyByteBuf writeComponent(Component p_130084_)`
- `public <T extends Enum<T>> T readEnum(Class<T> p_130067_)`
- `public FriendlyByteBuf writeEnum(Enum<?> p_130069_)`
- `public <T> T readById(IntFunction<T> p_300981_)`
- `public <T> FriendlyByteBuf writeById(ToIntFunction<T> p_297872_,  T p_300123_)`
- `public int readVarInt()`
- `public long readVarLong()`
- `public FriendlyByteBuf writeUUID(UUID p_130078_)`
- `public UUID readUUID()`
- `public FriendlyByteBuf writeVarInt(int p_130131_)`
- `public FriendlyByteBuf writeVarLong(long p_130104_)`
- `public FriendlyByteBuf writeNbt(@Nullable  Tag p_300580_)`
- `@Nullable public CompoundTag readNbt()`
- `@Nullable public Tag readNbt(NbtAccounter p_130082_)`
- `public FriendlyByteBuf writeItem(ItemStack p_130056_)`
- `public FriendlyByteBuf writeItemStack(ItemStack p_130056_,  boolean limitedTag)`
  Most ItemStack serialization is Server to Client,and doesn't need to know the FULL tag details.
   One exception is items from the creative menu, which must be sent from Client to Server with their full NBT.
   If you want to send the FULL tag set limitedTag to false
- `public ItemStack readItem()`
- `public String readUtf()`
- `public String readUtf(int p_130137_)`
- `public FriendlyByteBuf writeUtf(String p_130071_)`
- `public FriendlyByteBuf writeUtf(String p_130073_,  int p_130074_)`
- `public ResourceLocation readResourceLocation()`
- `public FriendlyByteBuf writeResourceLocation(ResourceLocation p_130086_)`
- `public <T> ResourceKey<T> readResourceKey(ResourceKey<? extends Registry<T>> p_236802_)`
- `public void writeResourceKey(ResourceKey<?> p_236859_)`
- `public <T> ResourceKey<? extends Registry<T>> readRegistryKey()`
- `public Date readDate()`
- `public FriendlyByteBuf writeDate(Date p_130076_)`
- `public Instant readInstant()`
- `public void writeInstant(Instant p_236827_)`
- `public PublicKey readPublicKey()`
- `public FriendlyByteBuf writePublicKey(PublicKey p_236825_)`
- `public BlockHitResult readBlockHitResult()`
- `public void writeBlockHitResult(BlockHitResult p_130063_)`
- `public BitSet readBitSet()`
- `public void writeBitSet(BitSet p_178351_)`
- `public BitSet readFixedBitSet(int p_249113_)`
- `public void writeFixedBitSet(BitSet p_248698_,  int p_248869_)`
- `public com.mojang.authlib.GameProfile readGameProfile()`
- `public void writeGameProfile(com.mojang.authlib.GameProfile p_236804_)`
- `public com.mojang.authlib.properties.PropertyMap readGameProfileProperties()`
- `public void writeGameProfileProperties(com.mojang.authlib.properties.PropertyMap p_248638_)`
- `public com.mojang.authlib.properties.Property readProperty()`
- `public void writeProperty(com.mojang.authlib.properties.Property p_236806_)`
- `public boolean isContiguous()`
- `public int maxFastWritableBytes()`
- `public int capacity()`
- `public FriendlyByteBuf capacity(int p_300133_)`
- `public int maxCapacity()`
- `public io.netty.buffer.ByteBufAllocator alloc()`
- `public ByteOrder order()`
- `public io.netty.buffer.ByteBuf order(ByteOrder p_130280_)`
- `public io.netty.buffer.ByteBuf unwrap()`
- `public boolean isDirect()`
- `public boolean isReadOnly()`
- `public io.netty.buffer.ByteBuf asReadOnly()`
- `public int readerIndex()`
- `public FriendlyByteBuf readerIndex(int p_300300_)`
- `public int writerIndex()`
- `public FriendlyByteBuf writerIndex(int p_298940_)`
- `public FriendlyByteBuf setIndex(int p_298280_,  int p_301012_)`
- `public int readableBytes()`
- `public int writableBytes()`
- `public int maxWritableBytes()`
- `public boolean isReadable()`
- `public boolean isReadable(int p_130254_)`
- `public boolean isWritable()`
- `public boolean isWritable(int p_130257_)`
- `public FriendlyByteBuf clear()`
- `public FriendlyByteBuf markReaderIndex()`
- `public FriendlyByteBuf resetReaderIndex()`
- `public FriendlyByteBuf markWriterIndex()`
- `public FriendlyByteBuf resetWriterIndex()`
- `public FriendlyByteBuf discardReadBytes()`
- `public FriendlyByteBuf discardSomeReadBytes()`
- `public FriendlyByteBuf ensureWritable(int p_301044_)`
- `public int ensureWritable(int p_130141_,  boolean p_130142_)`
- `public boolean getBoolean(int p_130159_)`
- `public byte getByte(int p_130161_)`
- `public short getUnsignedByte(int p_130225_)`
- `public short getShort(int p_130221_)`
- `public short getShortLE(int p_130223_)`
- `public int getUnsignedShort(int p_130235_)`
- `public int getUnsignedShortLE(int p_130237_)`
- `public int getMedium(int p_130217_)`
- `public int getMediumLE(int p_130219_)`
- `public int getUnsignedMedium(int p_130231_)`
- `public int getUnsignedMediumLE(int p_130233_)`
- `public int getInt(int p_130209_)`
- `public int getIntLE(int p_130211_)`
- `public long getUnsignedInt(int p_130227_)`
- `public long getUnsignedIntLE(int p_130229_)`
- `public long getLong(int p_130213_)`
- `public long getLongLE(int p_130215_)`
- `public char getChar(int p_130199_)`
- `public float getFloat(int p_130207_)`
- `public double getDouble(int p_130205_)`
- `public FriendlyByteBuf getBytes(int p_299985_,  io.netty.buffer.ByteBuf p_298214_)`
- `public FriendlyByteBuf getBytes(int p_300246_,  io.netty.buffer.ByteBuf p_301111_,  int p_300978_)`
- `public FriendlyByteBuf getBytes(int p_300430_,  io.netty.buffer.ByteBuf p_297846_,  int p_300610_,  int p_299363_)`
- `public FriendlyByteBuf getBytes(int p_300928_,  byte[] p_297630_)`
- `public FriendlyByteBuf getBytes(int p_299455_,  byte[] p_300069_,  int p_300847_,  int p_299513_)`
- `public FriendlyByteBuf getBytes(int p_299731_,  ByteBuffer p_299164_)`
- `public FriendlyByteBuf getBytes(int p_298241_,  OutputStream p_301151_,  int p_299913_)  throws IOException`
  - throws: IOException
- `public int getBytes(int p_130187_,  GatheringByteChannel p_130188_,  int p_130189_)  throws IOException`
  - throws: IOException
- `public int getBytes(int p_130182_,  FileChannel p_130183_,  long p_130184_,  int p_130185_)  throws IOException`
  - throws: IOException
- `public CharSequence getCharSequence(int p_130201_,  int p_130202_,  Charset p_130203_)`
- `public FriendlyByteBuf setBoolean(int p_299892_,  boolean p_297333_)`
- `public FriendlyByteBuf setByte(int p_297325_,  int p_300406_)`
- `public FriendlyByteBuf setShort(int p_297216_,  int p_298749_)`
- `public FriendlyByteBuf setShortLE(int p_299646_,  int p_298038_)`
- `public FriendlyByteBuf setMedium(int p_300490_,  int p_299067_)`
- `public FriendlyByteBuf setMediumLE(int p_300630_,  int p_299351_)`
- `public FriendlyByteBuf setInt(int p_299176_,  int p_301413_)`
- `public FriendlyByteBuf setIntLE(int p_300111_,  int p_297978_)`
- `public FriendlyByteBuf setLong(int p_298039_,  long p_298360_)`
- `public FriendlyByteBuf setLongLE(int p_300929_,  long p_299282_)`
- `public FriendlyByteBuf setChar(int p_297413_,  int p_297953_)`
- `public FriendlyByteBuf setFloat(int p_297779_,  float p_297840_)`
- `public FriendlyByteBuf setDouble(int p_301027_,  double p_299551_)`
- `public FriendlyByteBuf setBytes(int p_300769_,  io.netty.buffer.ByteBuf p_301342_)`
- `public FriendlyByteBuf setBytes(int p_300924_,  io.netty.buffer.ByteBuf p_301233_,  int p_299359_)`
- `public FriendlyByteBuf setBytes(int p_299338_,  io.netty.buffer.ByteBuf p_299810_,  int p_301059_,  int p_297827_)`
- `public FriendlyByteBuf setBytes(int p_297553_,  byte[] p_300329_)`
- `public FriendlyByteBuf setBytes(int p_297451_,  byte[] p_300466_,  int p_297825_,  int p_299499_)`
- `public FriendlyByteBuf setBytes(int p_297596_,  ByteBuffer p_299096_)`
- `public int setBytes(int p_130380_,  InputStream p_130381_,  int p_130382_)  throws IOException`
  - throws: IOException
- `public int setBytes(int p_130392_,  ScatteringByteChannel p_130393_,  int p_130394_)  throws IOException`
  - throws: IOException
- `public int setBytes(int p_130387_,  FileChannel p_130388_,  long p_130389_,  int p_130390_)  throws IOException`
  - throws: IOException
- `public FriendlyByteBuf setZero(int p_297586_,  int p_299960_)`
- `public int setCharSequence(int p_130407_,  CharSequence p_130408_,  Charset p_130409_)`
- `public boolean readBoolean()`
- `public byte readByte()`
- `public short readUnsignedByte()`
- `public short readShort()`
- `public short readShortLE()`
- `public int readUnsignedShort()`
- `public int readUnsignedShortLE()`
- `public int readMedium()`
- `public int readMediumLE()`
- `public int readUnsignedMedium()`
- `public int readUnsignedMediumLE()`
- `public int readInt()`
- `public int readIntLE()`
- `public long readUnsignedInt()`
- `public long readUnsignedIntLE()`
- `public long readLong()`
- `public long readLongLE()`
- `public char readChar()`
- `public float readFloat()`
- `public double readDouble()`
- `public io.netty.buffer.ByteBuf readBytes(int p_130287_)`
- `public io.netty.buffer.ByteBuf readSlice(int p_130332_)`
- `public io.netty.buffer.ByteBuf readRetainedSlice(int p_130328_)`
- `public FriendlyByteBuf readBytes(io.netty.buffer.ByteBuf p_300560_)`
- `public FriendlyByteBuf readBytes(io.netty.buffer.ByteBuf p_299224_,  int p_300166_)`
- `public FriendlyByteBuf readBytes(io.netty.buffer.ByteBuf p_301382_,  int p_300030_,  int p_300211_)`
- `public FriendlyByteBuf readBytes(byte[] p_299454_)`
- `public FriendlyByteBuf readBytes(byte[] p_299845_,  int p_297363_,  int p_299384_)`
- `public FriendlyByteBuf readBytes(ByteBuffer p_297688_)`
- `public FriendlyByteBuf readBytes(OutputStream p_300218_,  int p_298001_)  throws IOException`
  - throws: IOException
- `public int readBytes(GatheringByteChannel p_130307_,  int p_130308_)  throws IOException`
  - throws: IOException
- `public CharSequence readCharSequence(int p_130317_,  Charset p_130318_)`
- `public int readBytes(FileChannel p_130303_,  long p_130304_,  int p_130305_)  throws IOException`
  - throws: IOException
- `public FriendlyByteBuf skipBytes(int p_300784_)`
- `public FriendlyByteBuf writeBoolean(boolean p_300653_)`
- `public FriendlyByteBuf writeByte(int p_299498_)`
- `public FriendlyByteBuf writeShort(int p_299519_)`
- `public FriendlyByteBuf writeShortLE(int p_297214_)`
- `public FriendlyByteBuf writeMedium(int p_299802_)`
- `public FriendlyByteBuf writeMediumLE(int p_301291_)`
- `public FriendlyByteBuf writeInt(int p_301066_)`
- `public FriendlyByteBuf writeIntLE(int p_299068_)`
- `public FriendlyByteBuf writeLong(long p_300584_)`
- `public FriendlyByteBuf writeLongLE(long p_298747_)`
- `public FriendlyByteBuf writeChar(int p_300374_)`
- `public FriendlyByteBuf writeFloat(float p_299476_)`
- `public FriendlyByteBuf writeDouble(double p_301246_)`
- `public FriendlyByteBuf writeBytes(io.netty.buffer.ByteBuf p_300943_)`
- `public FriendlyByteBuf writeBytes(io.netty.buffer.ByteBuf p_298105_,  int p_299600_)`
- `public FriendlyByteBuf writeBytes(io.netty.buffer.ByteBuf p_299075_,  int p_301207_,  int p_299710_)`
- `public FriendlyByteBuf writeBytes(byte[] p_299214_)`
- `public FriendlyByteBuf writeBytes(byte[] p_298410_,  int p_297608_,  int p_300690_)`
- `public FriendlyByteBuf writeBytes(ByteBuffer p_300889_)`
- `public int writeBytes(InputStream p_130481_,  int p_130482_)  throws IOException`
  - throws: IOException
- `public int writeBytes(ScatteringByteChannel p_130490_,  int p_130491_)  throws IOException`
  - throws: IOException
- `public int writeBytes(FileChannel p_130486_,  long p_130487_,  int p_130488_)  throws IOException`
  - throws: IOException
- `public FriendlyByteBuf writeZero(int p_298160_)`
- `public int writeCharSequence(CharSequence p_130501_,  Charset p_130502_)`
- `public int indexOf(int p_130244_,  int p_130245_,  byte p_130246_)`
- `public int bytesBefore(byte p_130108_)`
- `public int bytesBefore(int p_130110_,  byte p_130111_)`
- `public int bytesBefore(int p_130113_,  int p_130114_,  byte p_130115_)`
- `public int forEachByte(io.netty.util.ByteProcessor p_130150_)`
- `public int forEachByte(int p_130146_,  int p_130147_,  io.netty.util.ByteProcessor p_130148_)`
- `public int forEachByteDesc(io.netty.util.ByteProcessor p_130156_)`
- `public int forEachByteDesc(int p_130152_,  int p_130153_,  io.netty.util.ByteProcessor p_130154_)`
- `public io.netty.buffer.ByteBuf copy()`
- `public io.netty.buffer.ByteBuf copy(int p_130128_,  int p_130129_)`
- `public io.netty.buffer.ByteBuf slice()`
- `public io.netty.buffer.ByteBuf retainedSlice()`
- `public io.netty.buffer.ByteBuf slice(int p_130450_,  int p_130451_)`
- `public io.netty.buffer.ByteBuf retainedSlice(int p_130359_,  int p_130360_)`
- `public io.netty.buffer.ByteBuf duplicate()`
- `public io.netty.buffer.ByteBuf retainedDuplicate()`
- `public int nioBufferCount()`
- `public ByteBuffer nioBuffer()`
- `public ByteBuffer nioBuffer(int p_130270_,  int p_130271_)`
- `public ByteBuffer internalNioBuffer(int p_130248_,  int p_130249_)`
- `public ByteBuffer[] nioBuffers()`
- `public ByteBuffer[] nioBuffers(int p_130275_,  int p_130276_)`
- `public boolean hasArray()`
- `public byte[] array()`
- `public int arrayOffset()`
- `public boolean hasMemoryAddress()`
- `public long memoryAddress()`
- `public String toString(Charset p_130458_)`
- `public String toString(int p_130454_,  int p_130455_,  Charset p_130456_)`
- `public int hashCode()`
- `public boolean equals(Object p_130144_)`
- `public int compareTo(io.netty.buffer.ByteBuf p_130123_)`
- `public String toString()`
- `public FriendlyByteBuf retain(int p_299349_)`
- `public FriendlyByteBuf retain()`
- `public FriendlyByteBuf touch()`
- `public FriendlyByteBuf touch(Object p_299243_)`
- `public int refCnt()`
- `public boolean release()`
- `public boolean release(int p_130347_)`

### Inherited methods
- from `io.netty.buffer.ByteBuf`: `asByteBuf`, `getDoubleLE`, `getFloatLE`, `readDoubleLE`, `readFloatLE`, `setDoubleLE`, `setFloatLE`, `writeDoubleLE`, `writeFloatLE`
- from `net.minecraftforge.common.extensions.IForgeFriendlyByteBuf`: `readFluidStack`, `readRegistryId`, `readRegistryIdSafe`, `readRegistryIdUnsafe`, `writeFluidStack`, `writeRegistryId`, `writeRegistryIdUnsafe`, `writeRegistryIdUnsafe`

## FriendlyByteBuf.Reader

*interface* `net.minecraft.network.FriendlyByteBuf.Reader`

All Superinterfaces: Function<FriendlyByteBuf, T>

Enclosing class: FriendlyByteBuf

### Methods
- `default FriendlyByteBuf.Reader<Optional<T>> asOptional()`

### Inherited methods
- from `java.util.function.Function`: `andThen`, `apply`, `compose`

## FriendlyByteBuf.Writer

*interface* `net.minecraft.network.FriendlyByteBuf.Writer`

All Superinterfaces: BiConsumer<FriendlyByteBuf, T>

Enclosing class: FriendlyByteBuf

### Methods
- `default FriendlyByteBuf.Writer<Optional<T>> asOptional()`

### Inherited methods
- from `java.util.function.BiConsumer`: `accept`, `andThen`

## PacketBundlePacker

*class* `net.minecraft.network.PacketBundlePacker`

### Fields
- `@Nullable private BundlerInfo.Bundler currentBundler`
- `@Nullable private BundlerInfo infoForCurrentBundler`
- `private final io.netty.util.AttributeKey<? extends BundlerInfo.Provider> bundlerAttributeKey`

### Methods
- `protected void decode(io.netty.channel.ChannelHandlerContext p_265208_,  Packet<?> p_265182_,  List<Object> p_265368_)  throws Exception`
  - throws: Exception

### Inherited methods
- from `io.netty.handler.codec.MessageToMessageDecoder`: `acceptInboundMessage`, `channelRead`
- from `io.netty.channel.ChannelInboundHandlerAdapter`: `channelActive`, `channelInactive`, `channelReadComplete`, `channelRegistered`, `channelUnregistered`, `channelWritabilityChanged`, `exceptionCaught`, `userEventTriggered`
- from `io.netty.channel.ChannelHandlerAdapter`: `ensureNotSharable`, `handlerAdded`, `handlerRemoved`, `isSharable`
- from `io.netty.channel.ChannelHandler`: `handlerAdded`, `handlerRemoved`

## PacketBundleUnpacker

*class* `net.minecraft.network.PacketBundleUnpacker`

### Fields
- `private final io.netty.util.AttributeKey<? extends BundlerInfo.Provider> bundlerAttributeKey`

### Methods
- `protected void encode(io.netty.channel.ChannelHandlerContext p_265691_,  Packet<?> p_265038_,  List<Object> p_265735_)  throws Exception`
  - throws: Exception

### Inherited methods
- from `io.netty.handler.codec.MessageToMessageEncoder`: `acceptOutboundMessage`, `write`
- from `io.netty.channel.ChannelOutboundHandlerAdapter`: `bind`, `close`, `connect`, `deregister`, `disconnect`, `flush`, `read`
- from `io.netty.channel.ChannelHandlerAdapter`: `ensureNotSharable`, `exceptionCaught`, `handlerAdded`, `handlerRemoved`, `isSharable`
- from `io.netty.channel.ChannelHandler`: `exceptionCaught`, `handlerAdded`, `handlerRemoved`

## PacketDecoder

*class* `net.minecraft.network.PacketDecoder`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final io.netty.util.AttributeKey<ConnectionProtocol.CodecData<?>> codecKey`

### Inherited fields
- from `io.netty.handler.codec.ByteToMessageDecoder`: `COMPOSITE_CUMULATOR`, `MERGE_CUMULATOR`

### Methods
- `protected void decode(io.netty.channel.ChannelHandlerContext p_130535_,  io.netty.buffer.ByteBuf p_130536_,  List<Object> p_130537_)  throws Exception`
  - throws: Exception

### Inherited methods
- from `io.netty.handler.codec.ByteToMessageDecoder`: `actualReadableBytes`, `callDecode`, `channelInactive`, `channelRead`, `channelReadComplete`, `decodeLast`, `discardSomeReadBytes`, `handlerRemoved`, `handlerRemoved0`, `internalBuffer`, `isSingleDecode`, `setCumulator`, `setDiscardAfterReads`, `setSingleDecode`, `userEventTriggered`
- from `io.netty.channel.ChannelInboundHandlerAdapter`: `channelActive`, `channelRegistered`, `channelUnregistered`, `channelWritabilityChanged`, `exceptionCaught`
- from `io.netty.channel.ChannelHandlerAdapter`: `ensureNotSharable`, `handlerAdded`, `isSharable`
- from `io.netty.channel.ChannelHandler`: `handlerAdded`

## PacketEncoder

*class* `net.minecraft.network.PacketEncoder`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final io.netty.util.AttributeKey<ConnectionProtocol.CodecData<?>> codecKey`

### Methods
- `protected void encode(io.netty.channel.ChannelHandlerContext p_130545_,  Packet<?> p_130546_,  io.netty.buffer.ByteBuf p_130547_)  throws Exception`
  - throws: Exception

### Inherited methods
- from `io.netty.handler.codec.MessageToByteEncoder`: `acceptOutboundMessage`, `allocateBuffer`, `isPreferDirect`, `write`
- from `io.netty.channel.ChannelOutboundHandlerAdapter`: `bind`, `close`, `connect`, `deregister`, `disconnect`, `flush`, `read`
- from `io.netty.channel.ChannelHandlerAdapter`: `ensureNotSharable`, `exceptionCaught`, `handlerAdded`, `handlerRemoved`, `isSharable`
- from `io.netty.channel.ChannelHandler`: `exceptionCaught`, `handlerAdded`, `handlerRemoved`

## PacketFlowValidator

*class* `net.minecraft.network.PacketFlowValidator`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final io.netty.util.AttributeKey<ConnectionProtocol.CodecData<?>> decoderKey`
- `private final io.netty.util.AttributeKey<ConnectionProtocol.CodecData<?>> encoderKey`

### Methods
- `private static void validatePacket(io.netty.channel.ChannelHandlerContext p_297391_,  Packet<?> p_300731_,  List<Object> p_301049_,  io.netty.util.AttributeKey<ConnectionProtocol.CodecData<?>> p_297339_)`
- `protected void decode(io.netty.channel.ChannelHandlerContext p_298853_,  Packet<?> p_300545_,  List<Object> p_299821_)  throws Exception`
  - throws: Exception
- `protected void encode(io.netty.channel.ChannelHandlerContext p_299696_,  Packet<?> p_298941_,  List<Object> p_300232_)  throws Exception`
  - throws: Exception

### Inherited methods
- from `io.netty.handler.codec.MessageToMessageCodec`: `acceptInboundMessage`, `acceptOutboundMessage`, `channelRead`, `write`
- from `io.netty.channel.ChannelDuplexHandler`: `bind`, `close`, `connect`, `deregister`, `disconnect`, `flush`, `read`
- from `io.netty.channel.ChannelInboundHandlerAdapter`: `channelActive`, `channelInactive`, `channelReadComplete`, `channelRegistered`, `channelUnregistered`, `channelWritabilityChanged`, `exceptionCaught`, `userEventTriggered`
- from `io.netty.channel.ChannelHandlerAdapter`: `ensureNotSharable`, `handlerAdded`, `handlerRemoved`, `isSharable`
- from `io.netty.channel.ChannelHandler`: `handlerAdded`, `handlerRemoved`

## PacketListener

*interface* `net.minecraft.network.PacketListener`

### Methods
- `PacketFlow flow()`
- `ConnectionProtocol protocol()`
- `void onDisconnect(Component p_130552_)`
- `boolean isAcceptingMessages()`
- `default boolean shouldHandleMessage(Packet<?> p_299735_)`
- `default boolean shouldPropagateHandlingExceptions()`

## PacketSendListener

*interface* `net.minecraft.network.PacketSendListener`

### Methods
- `static PacketSendListener thenRun(Runnable p_243267_)`
- `static PacketSendListener exceptionallySend(Supplier<Packet<?>> p_243289_)`
- `default void onSuccess()`
- `@Nullable default Packet<?> onFailure()`

## ProtocolSwapHandler

*interface* `net.minecraft.network.ProtocolSwapHandler`

### Methods
- `static void swapProtocolIfNeeded(io.netty.util.Attribute<ConnectionProtocol.CodecData<?>> p_301205_,  Packet<?> p_301125_)`

## RateKickingConnection

*class* `net.minecraft.network.RateKickingConnection`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Component EXCEED_REASON`
- `private final int rateLimitPacketsPerSecond`

### Inherited fields
- from `net.minecraft.network.Connection`: `ATTRIBUTE_CLIENTBOUND_PROTOCOL`, `ATTRIBUTE_SERVERBOUND_PROTOCOL`, `bandwidthDebugMonitor`, `LOCAL_WORKER_GROUP`, `NETWORK_EPOLL_WORKER_GROUP`, `NETWORK_WORKER_GROUP`, `PACKET_MARKER`, `PACKET_RECEIVED_MARKER`, `PACKET_SENT_MARKER`, `ROOT_MARKER`

### Methods
- `protected void tickSecond()`

### Inherited methods
- from `net.minecraft.network.Connection`: `channel`, `channelActive`, `channelInactive`, `channelRead0`, `configureInMemoryPipeline`, `configurePacketHandler`, `configureSerialization`, `connect`, `connectToLocalServer`, `connectToServer`, `disconnect`, `exceptionCaught`, `flushChannel`, `getAverageReceivedPackets`, `getAverageSentPackets`, `getDisconnectedReason`, `getLoggableAddress`, `getPacketListener`, `getProtocol`, `getReceiving`, `getRemoteAddress`, `getSending`, `handleDisconnection`, `initiateServerboundPlayConnection`, `initiateServerboundStatusConnection`, `isConnected`, `isConnecting`, `isEncrypted`, `isMemoryConnection`, `resumeInboundAfterProtocolChange`, `runOnceConnected`, `send`, `send`, `send`, `setBandwidthLogger`, `setClientboundProtocolAfterHandshake`, `setEncryptionKey`, `setInitialProtocolAttributes`, `setListener`, `setListenerForServerboundHandshake`, `setReadOnly`, `setupCompression`, `suspendInboundAfterProtocolChange`, `tick`
- from `io.netty.channel.SimpleChannelInboundHandler`: `acceptInboundMessage`, `channelRead`
- from `io.netty.channel.ChannelInboundHandlerAdapter`: `channelReadComplete`, `channelRegistered`, `channelUnregistered`, `channelWritabilityChanged`, `userEventTriggered`
- from `io.netty.channel.ChannelHandlerAdapter`: `ensureNotSharable`, `handlerAdded`, `handlerRemoved`, `isSharable`
- from `io.netty.channel.ChannelHandler`: `handlerAdded`, `handlerRemoved`

## ServerboundPacketListener

*interface* `net.minecraft.network.ServerboundPacketListener`

All Superinterfaces: PacketListener

### Methods
- `default PacketFlow flow()`

### Inherited methods
- from `net.minecraft.network.PacketListener`: `isAcceptingMessages`, `onDisconnect`, `protocol`, `shouldHandleMessage`, `shouldPropagateHandlingExceptions`

## SkipPacketException

*class* `net.minecraft.network.SkipPacketException`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## TickablePacketListener

*interface* `net.minecraft.network.TickablePacketListener`

All Superinterfaces: PacketListener

### Methods
- `void tick()`

### Inherited methods
- from `net.minecraft.network.PacketListener`: `flow`, `isAcceptingMessages`, `onDisconnect`, `protocol`, `shouldHandleMessage`, `shouldPropagateHandlingExceptions`

## Utf8String

*class* `net.minecraft.network.Utf8String`

### Methods
- `public static String read(io.netty.buffer.ByteBuf p_300143_,  int p_298419_)`
- `public static void write(io.netty.buffer.ByteBuf p_299969_,  CharSequence p_299580_,  int p_298286_)`

## VarInt

*class* `net.minecraft.network.VarInt`

### Fields
- `private static final int MAX_VARINT_SIZE` (= 5)
- `private static final int DATA_BITS_MASK` (= 127)
- `private static final int CONTINUATION_BIT_MASK` (= 128)
- `private static final int DATA_BITS_PER_BYTE` (= 7)

### Methods
- `public static int getByteSize(int p_298763_)`
- `public static boolean hasContinuationBit(byte p_299197_)`
- `public static int read(io.netty.buffer.ByteBuf p_298603_)`
- `public static io.netty.buffer.ByteBuf write(io.netty.buffer.ByteBuf p_300403_,  int p_297833_)`

## Varint21FrameDecoder

*class* `net.minecraft.network.Varint21FrameDecoder`

### Fields
- `private static final int MAX_VARINT21_BYTES` (= 3)
- `private final io.netty.buffer.ByteBuf helperBuf`
- `@Nullable private final BandwidthDebugMonitor monitor`

### Inherited fields
- from `io.netty.handler.codec.ByteToMessageDecoder`: `COMPOSITE_CUMULATOR`, `MERGE_CUMULATOR`

### Methods
- `protected void handlerRemoved0(io.netty.channel.ChannelHandlerContext p_299287_)`
- `private static boolean copyVarint(io.netty.buffer.ByteBuf p_299967_,  io.netty.buffer.ByteBuf p_298224_)`
- `protected void decode(io.netty.channel.ChannelHandlerContext p_130566_,  io.netty.buffer.ByteBuf p_130567_,  List<Object> p_130568_)`

### Inherited methods
- from `io.netty.handler.codec.ByteToMessageDecoder`: `actualReadableBytes`, `callDecode`, `channelInactive`, `channelRead`, `channelReadComplete`, `decodeLast`, `discardSomeReadBytes`, `handlerRemoved`, `internalBuffer`, `isSingleDecode`, `setCumulator`, `setDiscardAfterReads`, `setSingleDecode`, `userEventTriggered`
- from `io.netty.channel.ChannelInboundHandlerAdapter`: `channelActive`, `channelRegistered`, `channelUnregistered`, `channelWritabilityChanged`, `exceptionCaught`
- from `io.netty.channel.ChannelHandlerAdapter`: `ensureNotSharable`, `handlerAdded`, `isSharable`
- from `io.netty.channel.ChannelHandler`: `handlerAdded`

## Varint21LengthFieldPrepender

*class* `net.minecraft.network.Varint21LengthFieldPrepender`

### Fields
- `public static final int MAX_VARINT21_BYTES` (= 3)

### Methods
- `protected void encode(io.netty.channel.ChannelHandlerContext p_130571_,  io.netty.buffer.ByteBuf p_130572_,  io.netty.buffer.ByteBuf p_130573_)`

### Inherited methods
- from `io.netty.handler.codec.MessageToByteEncoder`: `acceptOutboundMessage`, `allocateBuffer`, `isPreferDirect`, `write`
- from `io.netty.channel.ChannelOutboundHandlerAdapter`: `bind`, `close`, `connect`, `deregister`, `disconnect`, `flush`, `read`
- from `io.netty.channel.ChannelHandlerAdapter`: `ensureNotSharable`, `exceptionCaught`, `handlerAdded`, `handlerRemoved`, `isSharable`
- from `io.netty.channel.ChannelHandler`: `exceptionCaught`, `handlerAdded`, `handlerRemoved`

## VarLong

*class* `net.minecraft.network.VarLong`

### Fields
- `private static final int MAX_VARLONG_SIZE` (= 10)
- `private static final int DATA_BITS_MASK` (= 127)
- `private static final int CONTINUATION_BIT_MASK` (= 128)
- `private static final int DATA_BITS_PER_BYTE` (= 7)

### Methods
- `public static int getByteSize(long p_297916_)`
- `public static boolean hasContinuationBit(byte p_298368_)`
- `public static long read(io.netty.buffer.ByteBuf p_297482_)`
- `public static io.netty.buffer.ByteBuf write(io.netty.buffer.ByteBuf p_301156_,  long p_297622_)`
