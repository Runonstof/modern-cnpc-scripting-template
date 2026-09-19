# net.minecraft.network

- [EnumConnectionState](#enumconnectionstate)
- [EnumPacketDirection](#enumpacketdirection)
- [INetHandler](#inethandler)
- [LegacyPingHandler](#legacypinghandler)
- [NetHandlerPlayServer](#nethandlerplayserver)
- [NettyCompressionDecoder](#nettycompressiondecoder)
- [NettyCompressionEncoder](#nettycompressionencoder)
- [NettyEncryptingDecoder](#nettyencryptingdecoder)
- [NettyEncryptingEncoder](#nettyencryptingencoder)
- [NettyEncryptionTranslator](#nettyencryptiontranslator)
- [NettyPacketDecoder](#nettypacketdecoder)
- [NettyPacketEncoder](#nettypacketencoder)
- [NettyVarint21FrameDecoder](#nettyvarint21framedecoder)
- [NettyVarint21FrameEncoder](#nettyvarint21frameencoder)
- [NetworkManager](#networkmanager)
- [NetworkSystem](#networksystem)
- [Packet](#packet)
- [PacketBuffer](#packetbuffer)
- [PacketThreadUtil](#packetthreadutil)
- [ServerStatusResponse](#serverstatusresponse)
- [ServerStatusResponse.Players](#serverstatusresponse.players)
- [ServerStatusResponse.Players.Serializer](#serverstatusresponse.players.serializer)
- [ServerStatusResponse.Serializer](#serverstatusresponse.serializer)
- [ServerStatusResponse.Version](#serverstatusresponse.version)
- [ServerStatusResponse.Version.Serializer](#serverstatusresponse.version.serializer)
- [ThreadQuickExitException](#threadquickexitexception)
## EnumConnectionState

*enum* `net.minecraft.network.EnumConnectionState`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumConnectionState>

### Fields
- `public static final EnumConnectionState HANDSHAKING`
- `public static final EnumConnectionState PLAY`
- `public static final EnumConnectionState STATUS`
- `public static final EnumConnectionState LOGIN`

### Methods
- `public static EnumConnectionState[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumConnectionState c : EnumConnectionState.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumConnectionState valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `protected EnumConnectionState registerPacket(EnumPacketDirection direction,  java.lang.Class<? extends Packet<?>> packetClass)`
- `public java.lang.Integer getPacketId(EnumPacketDirection direction,  Packet<?> packetIn)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public Packet<?> getPacket(EnumPacketDirection direction,  int packetId)  throws java.lang.InstantiationException,  java.lang.IllegalAccessException`
  - throws: java.lang.InstantiationException
  - throws: java.lang.IllegalAccessException
- `public int getId()`
- `public static EnumConnectionState getById(int stateId)`
- `public static EnumConnectionState getFromPacket(Packet<?> packetIn)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## EnumPacketDirection

*enum* `net.minecraft.network.EnumPacketDirection`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumPacketDirection>

### Fields
- `public static final EnumPacketDirection SERVERBOUND`
- `public static final EnumPacketDirection CLIENTBOUND`

### Methods
- `public static EnumPacketDirection[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumPacketDirection c : EnumPacketDirection.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumPacketDirection valueOf(java.lang.String name)`
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

## INetHandler

*interface* `net.minecraft.network.INetHandler`

### Methods
- `void onDisconnect(ITextComponent reason)`

## LegacyPingHandler

*class* `net.minecraft.network.LegacyPingHandler`

### Methods
- `public void channelRead(ChannelHandlerContext p_channelRead_1_,  java.lang.Object p_channelRead_2_)  throws java.lang.Exception`
  - throws: java.lang.Exception

## NetHandlerPlayServer

*class* `net.minecraft.network.NetHandlerPlayServer`

All Implemented Interfaces: INetHandler, INetHandlerPlayServer, ITickable

### Fields
- `public final NetworkManager netManager`
- `public EntityPlayerMP player`

### Methods
- `public void update()`
- `public NetworkManager getNetworkManager()`
- `public void disconnect(ITextComponent textComponent)`
- `public void processInput(CPacketInput packetIn)`
- `public void processVehicleMove(CPacketVehicleMove packetIn)`
- `public void processConfirmTeleport(CPacketConfirmTeleport packetIn)`
- `public void handleRecipeBookUpdate(CPacketRecipeInfo p_191984_1_)`
- `public void handleSeenAdvancements(CPacketSeenAdvancements p_194027_1_)`
- `public void processPlayer(CPacketPlayer packetIn)`
- `public void setPlayerLocation(double x,  double y,  double z,  float yaw,  float pitch)`
- `public void setPlayerLocation(double x,  double y,  double z,  float yaw,  float pitch,  java.util.Set<SPacketPlayerPosLook.EnumFlags> relativeSet)`
- `public void processPlayerDigging(CPacketPlayerDigging packetIn)`
- `public void processTryUseItemOnBlock(CPacketPlayerTryUseItemOnBlock packetIn)`
- `public void processTryUseItem(CPacketPlayerTryUseItem packetIn)`
- `public void handleSpectate(CPacketSpectate packetIn)`
- `public void handleResourcePackStatus(CPacketResourcePackStatus packetIn)`
- `public void processSteerBoat(CPacketSteerBoat packetIn)`
- `public void onDisconnect(ITextComponent reason)`
- `public void sendPacket(Packet<?> packetIn)`
- `public void processHeldItemChange(CPacketHeldItemChange packetIn)`
- `public void processChatMessage(CPacketChatMessage packetIn)`
- `public void handleAnimation(CPacketAnimation packetIn)`
- `public void processEntityAction(CPacketEntityAction packetIn)`
- `public void processUseEntity(CPacketUseEntity packetIn)`
- `public void processClientStatus(CPacketClientStatus packetIn)`
- `public void processCloseWindow(CPacketCloseWindow packetIn)`
- `public void processClickWindow(CPacketClickWindow packetIn)`
- `public void func_194308_a(CPacketPlaceRecipe p_194308_1_)`
- `public void processEnchantItem(CPacketEnchantItem packetIn)`
- `public void processCreativeInventoryAction(CPacketCreativeInventoryAction packetIn)`
- `public void processConfirmTransaction(CPacketConfirmTransaction packetIn)`
- `public void processUpdateSign(CPacketUpdateSign packetIn)`
- `public void processKeepAlive(CPacketKeepAlive packetIn)`
- `public void processPlayerAbilities(CPacketPlayerAbilities packetIn)`
- `public void processTabComplete(CPacketTabComplete packetIn)`
- `public void processClientSettings(CPacketClientSettings packetIn)`
- `public void processCustomPayload(CPacketCustomPayload packetIn)`

## NettyCompressionDecoder

*class* `net.minecraft.network.NettyCompressionDecoder`

### Methods
- `protected void decode(ChannelHandlerContext p_decode_1_,  ByteBuf p_decode_2_,  java.util.List<java.lang.Object> p_decode_3_)  throws java.util.zip.DataFormatException,  java.lang.Exception`
  - throws: java.util.zip.DataFormatException
  - throws: java.lang.Exception
- `public void setCompressionThreshold(int thresholdIn)`

## NettyCompressionEncoder

*class* `net.minecraft.network.NettyCompressionEncoder`

### Methods
- `protected void encode(ChannelHandlerContext p_encode_1_,  ByteBuf p_encode_2_,  ByteBuf p_encode_3_)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void setCompressionThreshold(int thresholdIn)`

## NettyEncryptingDecoder

*class* `net.minecraft.network.NettyEncryptingDecoder`

### Methods
- `protected void decode(ChannelHandlerContext p_decode_1_,  ByteBuf p_decode_2_,  java.util.List<java.lang.Object> p_decode_3_)  throws javax.crypto.ShortBufferException,  java.lang.Exception`
  - throws: javax.crypto.ShortBufferException
  - throws: java.lang.Exception

## NettyEncryptingEncoder

*class* `net.minecraft.network.NettyEncryptingEncoder`

### Methods
- `protected void encode(ChannelHandlerContext p_encode_1_,  ByteBuf p_encode_2_,  ByteBuf p_encode_3_)  throws javax.crypto.ShortBufferException,  java.lang.Exception`
  - throws: javax.crypto.ShortBufferException
  - throws: java.lang.Exception

## NettyEncryptionTranslator

*class* `net.minecraft.network.NettyEncryptionTranslator`

### Methods
- `protected ByteBuf decipher(ChannelHandlerContext ctx,  ByteBuf buffer)  throws javax.crypto.ShortBufferException`
  - throws: javax.crypto.ShortBufferException
- `protected void cipher(ByteBuf in,  ByteBuf out)  throws javax.crypto.ShortBufferException`
  - throws: javax.crypto.ShortBufferException

## NettyPacketDecoder

*class* `net.minecraft.network.NettyPacketDecoder`

### Methods
- `protected void decode(ChannelHandlerContext p_decode_1_,  ByteBuf p_decode_2_,  java.util.List<java.lang.Object> p_decode_3_)  throws java.io.IOException,  java.lang.InstantiationException,  java.lang.IllegalAccessException,  java.lang.Exception`
  - throws: java.io.IOException
  - throws: java.lang.InstantiationException
  - throws: java.lang.IllegalAccessException
  - throws: java.lang.Exception

## NettyPacketEncoder

*class* `net.minecraft.network.NettyPacketEncoder`

### Methods
- `protected void encode(ChannelHandlerContext p_encode_1_,  Packet<?> p_encode_2_,  ByteBuf p_encode_3_)  throws java.io.IOException,  java.lang.Exception`
  - throws: java.io.IOException
  - throws: java.lang.Exception

## NettyVarint21FrameDecoder

*class* `net.minecraft.network.NettyVarint21FrameDecoder`

### Methods
- `protected void decode(ChannelHandlerContext p_decode_1_,  ByteBuf p_decode_2_,  java.util.List<java.lang.Object> p_decode_3_)  throws java.lang.Exception`
  - throws: java.lang.Exception

## NettyVarint21FrameEncoder

*class* `net.minecraft.network.NettyVarint21FrameEncoder`

### Methods
- `protected void encode(ChannelHandlerContext p_encode_1_,  ByteBuf p_encode_2_,  ByteBuf p_encode_3_)  throws java.lang.Exception`
  - throws: java.lang.Exception

## NetworkManager

*class* `net.minecraft.network.NetworkManager`

### Fields
- `public static final Marker NETWORK_MARKER`
- `public static final Marker NETWORK_PACKETS_MARKER`
- `public static final <any> PROTOCOL_ATTRIBUTE_KEY`
- `public static final LazyLoadBase<NioEventLoopGroup> CLIENT_NIO_EVENTLOOP`
- `public static final LazyLoadBase<EpollEventLoopGroup> CLIENT_EPOLL_EVENTLOOP`
- `public static final LazyLoadBase<LocalEventLoopGroup> CLIENT_LOCAL_EVENTLOOP`

### Methods
- `public EnumPacketDirection getDirection()`
- `public void channelActive(ChannelHandlerContext p_channelActive_1_)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void setConnectionState(EnumConnectionState newState)`
- `public void channelInactive(ChannelHandlerContext p_channelInactive_1_)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void exceptionCaught(ChannelHandlerContext p_exceptionCaught_1_,  java.lang.Throwable p_exceptionCaught_2_)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `protected void channelRead0(ChannelHandlerContext p_channelRead0_1_,  Packet<?> p_channelRead0_2_)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void setNetHandler(INetHandler handler)`
- `public void sendPacket(Packet<?> packetIn)`
- `public void sendPacket(Packet<?> packetIn,  <any> listener,  <any>... listeners)`
- `public void processReceivedPackets()`
- `public java.net.SocketAddress getRemoteAddress()`
- `public void closeChannel(ITextComponent message)`
- `public boolean isLocalChannel()`
- `public static NetworkManager createNetworkManagerAndConnect(java.net.InetAddress address,  int serverPort,  boolean useNativeTransport)`
- `public static NetworkManager provideLocalClient(java.net.SocketAddress address)`
- `public void enableEncryption(javax.crypto.SecretKey key)`
- `public boolean isEncrypted()`
- `public boolean isChannelOpen()`
- `public boolean hasNoChannel()`
- `public INetHandler getNetHandler()`
- `public ITextComponent getExitMessage()`
- `public void disableAutoRead()`
- `public void setCompressionThreshold(int threshold)`
- `public void checkDisconnected()`
- `public Channel channel()`

## NetworkSystem

*class* `net.minecraft.network.NetworkSystem`

### Fields
- `public static final LazyLoadBase<NioEventLoopGroup> SERVER_NIO_EVENTLOOP`
- `public static final LazyLoadBase<EpollEventLoopGroup> SERVER_EPOLL_EVENTLOOP`
- `public static final LazyLoadBase<LocalEventLoopGroup> SERVER_LOCAL_EVENTLOOP`
- `public volatile boolean isAlive`

### Methods
- `public void addLanEndpoint(java.net.InetAddress address,  int port)  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.net.SocketAddress addLocalEndpoint()`
- `public void terminateEndpoints()`
- `public void networkTick()`
- `public MinecraftServer getServer()`

## Packet

*interface* `net.minecraft.network.Packet`

### Methods
- `void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `void processPacket(T handler)`

## PacketBuffer

*class* `net.minecraft.network.PacketBuffer`

### Methods
- `public static int getVarIntSize(int input)`
- `public PacketBuffer writeByteArray(byte[] array)`
- `public byte[] readByteArray()`
- `public byte[] readByteArray(int maxLength)`
- `public PacketBuffer writeVarIntArray(int[] array)`
- `public int[] readVarIntArray()`
- `public int[] readVarIntArray(int maxLength)`
- `public PacketBuffer writeLongArray(long[] array)`
- `public long[] readLongArray(long[] array)`
- `public long[] readLongArray(long[] array,  int maxLength)`
- `public BlockPos readBlockPos()`
- `public PacketBuffer writeBlockPos(BlockPos pos)`
- `public ITextComponent readTextComponent()  throws java.io.IOException`
  - throws: java.io.IOException
- `public PacketBuffer writeTextComponent(ITextComponent component)`
- `public <T extends java.lang.Enum<T>> T readEnumValue(java.lang.Class<T> enumClass)`
- `public PacketBuffer writeEnumValue(java.lang.Enum<?> value)`
- `public int readVarInt()`
- `public long readVarLong()`
- `public PacketBuffer writeUniqueId(java.util.UUID uuid)`
- `public java.util.UUID readUniqueId()`
- `public PacketBuffer writeVarInt(int input)`
- `public PacketBuffer writeVarLong(long value)`
- `public PacketBuffer writeCompoundTag(NBTTagCompound nbt)`
- `public NBTTagCompound readCompoundTag()  throws java.io.IOException`
  - throws: java.io.IOException
- `public PacketBuffer writeItemStack(ItemStack stack)`
- `public ItemStack readItemStack()  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.lang.String readString(int maxLength)`
- `public PacketBuffer writeString(java.lang.String string)`
- `public ResourceLocation readResourceLocation()`
- `public PacketBuffer writeResourceLocation(ResourceLocation resourceLocationIn)`
- `public java.util.Date readTime()`
- `public PacketBuffer writeTime(java.util.Date time)`
- `public int capacity()`
- `public ByteBuf capacity(int p_capacity_1_)`
- `public int maxCapacity()`
- `public ByteBufAllocator alloc()`
- `public java.nio.ByteOrder order()`
- `public ByteBuf order(java.nio.ByteOrder p_order_1_)`
- `public ByteBuf unwrap()`
- `public boolean isDirect()`
- `public boolean isReadOnly()`
- `public ByteBuf asReadOnly()`
- `public int readerIndex()`
- `public ByteBuf readerIndex(int p_readerIndex_1_)`
- `public int writerIndex()`
- `public ByteBuf writerIndex(int p_writerIndex_1_)`
- `public ByteBuf setIndex(int p_setIndex_1_,  int p_setIndex_2_)`
- `public int readableBytes()`
- `public int writableBytes()`
- `public int maxWritableBytes()`
- `public boolean isReadable()`
- `public boolean isReadable(int p_isReadable_1_)`
- `public boolean isWritable()`
- `public boolean isWritable(int p_isWritable_1_)`
- `public ByteBuf clear()`
- `public ByteBuf markReaderIndex()`
- `public ByteBuf resetReaderIndex()`
- `public ByteBuf markWriterIndex()`
- `public ByteBuf resetWriterIndex()`
- `public ByteBuf discardReadBytes()`
- `public ByteBuf discardSomeReadBytes()`
- `public ByteBuf ensureWritable(int p_ensureWritable_1_)`
- `public int ensureWritable(int p_ensureWritable_1_,  boolean p_ensureWritable_2_)`
- `public boolean getBoolean(int p_getBoolean_1_)`
- `public byte getByte(int p_getByte_1_)`
- `public short getUnsignedByte(int p_getUnsignedByte_1_)`
- `public short getShort(int p_getShort_1_)`
- `public short getShortLE(int p_getShortLE_1_)`
- `public int getUnsignedShort(int p_getUnsignedShort_1_)`
- `public int getUnsignedShortLE(int p_getUnsignedShortLE_1_)`
- `public int getMedium(int p_getMedium_1_)`
- `public int getMediumLE(int p_getMediumLE_1_)`
- `public int getUnsignedMedium(int p_getUnsignedMedium_1_)`
- `public int getUnsignedMediumLE(int p_getUnsignedMediumLE_1_)`
- `public int getInt(int p_getInt_1_)`
- `public int getIntLE(int p_getIntLE_1_)`
- `public long getUnsignedInt(int p_getUnsignedInt_1_)`
- `public long getUnsignedIntLE(int p_getUnsignedIntLE_1_)`
- `public long getLong(int p_getLong_1_)`
- `public long getLongLE(int p_getLongLE_1_)`
- `public char getChar(int p_getChar_1_)`
- `public float getFloat(int p_getFloat_1_)`
- `public double getDouble(int p_getDouble_1_)`
- `public ByteBuf getBytes(int p_getBytes_1_,  ByteBuf p_getBytes_2_)`
- `public ByteBuf getBytes(int p_getBytes_1_,  ByteBuf p_getBytes_2_,  int p_getBytes_3_)`
- `public ByteBuf getBytes(int p_getBytes_1_,  ByteBuf p_getBytes_2_,  int p_getBytes_3_,  int p_getBytes_4_)`
- `public ByteBuf getBytes(int p_getBytes_1_,  byte[] p_getBytes_2_)`
- `public ByteBuf getBytes(int p_getBytes_1_,  byte[] p_getBytes_2_,  int p_getBytes_3_,  int p_getBytes_4_)`
- `public ByteBuf getBytes(int p_getBytes_1_,  java.nio.ByteBuffer p_getBytes_2_)`
- `public ByteBuf getBytes(int p_getBytes_1_,  java.io.OutputStream p_getBytes_2_,  int p_getBytes_3_)  throws java.io.IOException`
  - throws: java.io.IOException
- `public int getBytes(int p_getBytes_1_,  java.nio.channels.FileChannel p_getBytes_2_,  long p_getBytes_3_,  int p_getBytes_5_)  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.lang.CharSequence getCharSequence(int p_getCharSequence_1_,  int p_getCharSequence_2_,  java.nio.charset.Charset p_getCharSequence_3_)`
- `public ByteBuf setBoolean(int p_setBoolean_1_,  boolean p_setBoolean_2_)`
- `public ByteBuf setByte(int p_setByte_1_,  int p_setByte_2_)`
- `public ByteBuf setShort(int p_setShort_1_,  int p_setShort_2_)`
- `public ByteBuf setShortLE(int p_setShortLE_1_,  int p_setShortLE_2_)`
- `public ByteBuf setMedium(int p_setMedium_1_,  int p_setMedium_2_)`
- `public ByteBuf setMediumLE(int p_setMediumLE_1_,  int p_setMediumLE_2_)`
- `public ByteBuf setInt(int p_setInt_1_,  int p_setInt_2_)`
- `public ByteBuf setIntLE(int p_setIntLE_1_,  int p_setIntLE_2_)`
- `public ByteBuf setLong(int p_setLong_1_,  long p_setLong_2_)`
- `public ByteBuf setLongLE(int p_setLongLE_1_,  long p_setLongLE_2_)`
- `public ByteBuf setChar(int p_setChar_1_,  int p_setChar_2_)`
- `public ByteBuf setFloat(int p_setFloat_1_,  float p_setFloat_2_)`
- `public ByteBuf setDouble(int p_setDouble_1_,  double p_setDouble_2_)`
- `public ByteBuf setBytes(int p_setBytes_1_,  ByteBuf p_setBytes_2_)`
- `public ByteBuf setBytes(int p_setBytes_1_,  ByteBuf p_setBytes_2_,  int p_setBytes_3_)`
- `public ByteBuf setBytes(int p_setBytes_1_,  ByteBuf p_setBytes_2_,  int p_setBytes_3_,  int p_setBytes_4_)`
- `public ByteBuf setBytes(int p_setBytes_1_,  byte[] p_setBytes_2_)`
- `public ByteBuf setBytes(int p_setBytes_1_,  byte[] p_setBytes_2_,  int p_setBytes_3_,  int p_setBytes_4_)`
- `public ByteBuf setBytes(int p_setBytes_1_,  java.nio.ByteBuffer p_setBytes_2_)`
- `public int setBytes(int p_setBytes_1_,  java.nio.channels.FileChannel p_setBytes_2_,  long p_setBytes_3_,  int p_setBytes_5_)  throws java.io.IOException`
  - throws: java.io.IOException
- `public ByteBuf setZero(int p_setZero_1_,  int p_setZero_2_)`
- `public int setCharSequence(int p_setCharSequence_1_,  java.lang.CharSequence p_setCharSequence_2_,  java.nio.charset.Charset p_setCharSequence_3_)`
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
- `public ByteBuf readBytes(int p_readBytes_1_)`
- `public ByteBuf readSlice(int p_readSlice_1_)`
- `public ByteBuf readRetainedSlice(int p_readRetainedSlice_1_)`
- `public ByteBuf readBytes(ByteBuf p_readBytes_1_)`
- `public ByteBuf readBytes(ByteBuf p_readBytes_1_,  int p_readBytes_2_)`
- `public ByteBuf readBytes(ByteBuf p_readBytes_1_,  int p_readBytes_2_,  int p_readBytes_3_)`
- `public ByteBuf readBytes(byte[] p_readBytes_1_)`
- `public ByteBuf readBytes(byte[] p_readBytes_1_,  int p_readBytes_2_,  int p_readBytes_3_)`
- `public ByteBuf readBytes(java.nio.ByteBuffer p_readBytes_1_)`
- `public ByteBuf readBytes(java.io.OutputStream p_readBytes_1_,  int p_readBytes_2_)  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.lang.CharSequence readCharSequence(int p_readCharSequence_1_,  java.nio.charset.Charset p_readCharSequence_2_)`
- `public int readBytes(java.nio.channels.FileChannel p_readBytes_1_,  long p_readBytes_2_,  int p_readBytes_4_)  throws java.io.IOException`
  - throws: java.io.IOException
- `public ByteBuf skipBytes(int p_skipBytes_1_)`
- `public ByteBuf writeBoolean(boolean p_writeBoolean_1_)`
- `public ByteBuf writeByte(int p_writeByte_1_)`
- `public ByteBuf writeShort(int p_writeShort_1_)`
- `public ByteBuf writeShortLE(int p_writeShortLE_1_)`
- `public ByteBuf writeMedium(int p_writeMedium_1_)`
- `public ByteBuf writeMediumLE(int p_writeMediumLE_1_)`
- `public ByteBuf writeInt(int p_writeInt_1_)`
- `public ByteBuf writeIntLE(int p_writeIntLE_1_)`
- `public ByteBuf writeLong(long p_writeLong_1_)`
- `public ByteBuf writeLongLE(long p_writeLongLE_1_)`
- `public ByteBuf writeChar(int p_writeChar_1_)`
- `public ByteBuf writeFloat(float p_writeFloat_1_)`
- `public ByteBuf writeDouble(double p_writeDouble_1_)`
- `public ByteBuf writeBytes(ByteBuf p_writeBytes_1_)`
- `public ByteBuf writeBytes(ByteBuf p_writeBytes_1_,  int p_writeBytes_2_)`
- `public ByteBuf writeBytes(ByteBuf p_writeBytes_1_,  int p_writeBytes_2_,  int p_writeBytes_3_)`
- `public ByteBuf writeBytes(byte[] p_writeBytes_1_)`
- `public ByteBuf writeBytes(byte[] p_writeBytes_1_,  int p_writeBytes_2_,  int p_writeBytes_3_)`
- `public ByteBuf writeBytes(java.nio.ByteBuffer p_writeBytes_1_)`
- `public int writeBytes(java.nio.channels.FileChannel p_writeBytes_1_,  long p_writeBytes_2_,  int p_writeBytes_4_)  throws java.io.IOException`
  - throws: java.io.IOException
- `public ByteBuf writeZero(int p_writeZero_1_)`
- `public int writeCharSequence(java.lang.CharSequence p_writeCharSequence_1_,  java.nio.charset.Charset p_writeCharSequence_2_)`
- `public int indexOf(int p_indexOf_1_,  int p_indexOf_2_,  byte p_indexOf_3_)`
- `public int bytesBefore(byte p_bytesBefore_1_)`
- `public int bytesBefore(int p_bytesBefore_1_,  byte p_bytesBefore_2_)`
- `public int bytesBefore(int p_bytesBefore_1_,  int p_bytesBefore_2_,  byte p_bytesBefore_3_)`
- `public int forEachByte(ByteProcessor p_forEachByte_1_)`
- `public int forEachByte(int p_forEachByte_1_,  int p_forEachByte_2_,  ByteProcessor p_forEachByte_3_)`
- `public int forEachByteDesc(ByteProcessor p_forEachByteDesc_1_)`
- `public int forEachByteDesc(int p_forEachByteDesc_1_,  int p_forEachByteDesc_2_,  ByteProcessor p_forEachByteDesc_3_)`
- `public ByteBuf copy()`
- `public ByteBuf copy(int p_copy_1_,  int p_copy_2_)`
- `public ByteBuf slice()`
- `public ByteBuf retainedSlice()`
- `public ByteBuf slice(int p_slice_1_,  int p_slice_2_)`
- `public ByteBuf retainedSlice(int p_retainedSlice_1_,  int p_retainedSlice_2_)`
- `public ByteBuf duplicate()`
- `public ByteBuf retainedDuplicate()`
- `public int nioBufferCount()`
- `public java.nio.ByteBuffer nioBuffer()`
- `public java.nio.ByteBuffer nioBuffer(int p_nioBuffer_1_,  int p_nioBuffer_2_)`
- `public java.nio.ByteBuffer internalNioBuffer(int p_internalNioBuffer_1_,  int p_internalNioBuffer_2_)`
- `public java.nio.ByteBuffer[] nioBuffers()`
- `public java.nio.ByteBuffer[] nioBuffers(int p_nioBuffers_1_,  int p_nioBuffers_2_)`
- `public boolean hasArray()`
- `public byte[] array()`
- `public int arrayOffset()`
- `public boolean hasMemoryAddress()`
- `public long memoryAddress()`
- `public java.lang.String toString(java.nio.charset.Charset p_toString_1_)`
- `public java.lang.String toString(int p_toString_1_,  int p_toString_2_,  java.nio.charset.Charset p_toString_3_)`
- `public int hashCode()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int compareTo(ByteBuf p_compareTo_1_)`
- `public java.lang.String toString()`
- `public ByteBuf retain(int p_retain_1_)`
- `public ByteBuf retain()`
- `public ByteBuf touch()`
- `public ByteBuf touch(java.lang.Object p_touch_1_)`
- `public int refCnt()`
- `public boolean release()`
- `public boolean release(int p_release_1_)`

## PacketThreadUtil

*class* `net.minecraft.network.PacketThreadUtil`

### Methods
- `public static <T extends INetHandler> void checkThreadAndEnqueue(Packet<T> packetIn,  T processor,  IThreadListener scheduler)  throws ThreadQuickExitException`
  - throws: ThreadQuickExitException

## ServerStatusResponse

*class* `net.minecraft.network.ServerStatusResponse`

### Methods
- `public ITextComponent getServerDescription()`
- `public void setServerDescription(ITextComponent descriptionIn)`
- `public ServerStatusResponse.Players getPlayers()`
- `public void setPlayers(ServerStatusResponse.Players playersIn)`
- `public ServerStatusResponse.Version getVersion()`
- `public void setVersion(ServerStatusResponse.Version versionIn)`
- `public void setFavicon(java.lang.String faviconBlob)`
- `public java.lang.String getFavicon()`
- `public java.lang.String getJson()`
  Returns this object as a Json string.
   Converting to JSON if a cached version is not available.
  
   Also to prevent potentially large memory allocations on the server
   this is moved from the S00PacketServerInfo writePacket function
  
   As this method is called from the network threads thread safety is important!
- `public void invalidateJson()`
  Invalidates the cached json, causing the next call to getJson to rebuild it.
   This is needed externally because PlayerCountData.setPlayer's is public.

## ServerStatusResponse.Players

*class* `net.minecraft.network.ServerStatusResponse.Players`

Enclosing class: ServerStatusResponse

### Methods
- `public int getMaxPlayers()`
- `public int getOnlinePlayerCount()`
- `public GameProfile[] getPlayers()`
- `public void setPlayers(GameProfile[] playersIn)`

## ServerStatusResponse.Players.Serializer

*class* `net.minecraft.network.ServerStatusResponse.Players.Serializer`

Enclosing class: ServerStatusResponse.Players

### Methods
- `public ServerStatusResponse.Players deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `public JsonElement serialize(ServerStatusResponse.Players p_serialize_1_,  java.lang.reflect.Type p_serialize_2_,  JsonSerializationContext p_serialize_3_)`

## ServerStatusResponse.Serializer

*class* `net.minecraft.network.ServerStatusResponse.Serializer`

Enclosing class: ServerStatusResponse

### Methods
- `public ServerStatusResponse deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `public JsonElement serialize(ServerStatusResponse p_serialize_1_,  java.lang.reflect.Type p_serialize_2_,  JsonSerializationContext p_serialize_3_)`

## ServerStatusResponse.Version

*class* `net.minecraft.network.ServerStatusResponse.Version`

Enclosing class: ServerStatusResponse

### Methods
- `public java.lang.String getName()`
- `public int getProtocol()`

## ServerStatusResponse.Version.Serializer

*class* `net.minecraft.network.ServerStatusResponse.Version.Serializer`

Enclosing class: ServerStatusResponse.Version

### Methods
- `public ServerStatusResponse.Version deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `public JsonElement serialize(ServerStatusResponse.Version p_serialize_1_,  java.lang.reflect.Type p_serialize_2_,  JsonSerializationContext p_serialize_3_)`

## ThreadQuickExitException

*class* `net.minecraft.network.ThreadQuickExitException`

All Implemented Interfaces: java.io.Serializable

### Fields
- `public static final ThreadQuickExitException INSTANCE`

### Methods
- `public java.lang.Throwable fillInStackTrace()`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`
