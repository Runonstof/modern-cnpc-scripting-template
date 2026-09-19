# net.minecraft.network.protocol.login

- [ClientboundCustomQueryPacket](#clientboundcustomquerypacket)
- [ClientboundGameProfilePacket](#clientboundgameprofilepacket)
- [ClientboundHelloPacket](#clientboundhellopacket)
- [ClientboundLoginCompressionPacket](#clientboundlogincompressionpacket)
- [ClientboundLoginDisconnectPacket](#clientboundlogindisconnectpacket)
- [ClientLoginPacketListener](#clientloginpacketlistener)
- [ServerboundCustomQueryAnswerPacket](#serverboundcustomqueryanswerpacket)
- [ServerboundHelloPacket](#serverboundhellopacket)
- [ServerboundKeyPacket](#serverboundkeypacket)
- [ServerboundLoginAcknowledgedPacket](#serverboundloginacknowledgedpacket)
- [ServerLoginPacketListener](#serverloginpacketlistener)
## ClientboundCustomQueryPacket

*record* `net.minecraft.network.protocol.login.ClientboundCustomQueryPacket`

### Fields
- `private final int transactionId`
  The field for the transactionId record component.
- `private final CustomQueryPayload payload`
  The field for the payload record component.
- `private static final int MAX_PAYLOAD_SIZE` (= 1048576)

### Methods
- `private static CustomQueryPayload readPayload(ResourceLocation p_300079_,  FriendlyByteBuf p_299332_)`
- `private static DiscardedQueryPayload readUnknownPayload(ResourceLocation p_299981_,  FriendlyByteBuf p_297706_)`
- `public void write(FriendlyByteBuf p_134757_)`
- `public void handle(ClientLoginPacketListener p_134754_)`
- `public int getIndex()`
- `public ResourceLocation getName()`
- `@Nullable public @Nullable FriendlyByteBuf getInternalData()`
  Description copied from interface: ICustomPacket
  Returns a unsafe reference to this packet's internal data.
   Any modifications to this buffer will be reflected in the main buffer.
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
- `public int transactionId()`
  Returns the value of the transactionId record component.
  - returns: the value of the transactionId record component
- `public CustomQueryPayload payload()`
  Returns the value of the payload record component.
  - returns: the value of the payload record component

### Inherited methods
- from `net.minecraftforge.network.ICustomPacket`: `getDirection`, `getThis`
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundGameProfilePacket

*class* `net.minecraft.network.protocol.login.ClientboundGameProfilePacket`

### Fields
- `private final com.mojang.authlib.GameProfile gameProfile`

### Methods
- `public void write(FriendlyByteBuf p_134776_)`
- `public void handle(ClientLoginPacketListener p_134773_)`
- `public com.mojang.authlib.GameProfile getGameProfile()`
- `public ConnectionProtocol nextProtocol()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`

## ClientboundHelloPacket

*class* `net.minecraft.network.protocol.login.ClientboundHelloPacket`

### Fields
- `private final String serverId`
- `private final byte[] publicKey`
- `private final byte[] challenge`

### Methods
- `public void write(FriendlyByteBuf p_134793_)`
- `public void handle(ClientLoginPacketListener p_134790_)`
- `public String getServerId()`
- `public PublicKey getPublicKey()  throws CryptException`
  - throws: CryptException
- `public byte[] getChallenge()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundLoginCompressionPacket

*class* `net.minecraft.network.protocol.login.ClientboundLoginCompressionPacket`

### Fields
- `private final int compressionThreshold`

### Methods
- `public void write(FriendlyByteBuf p_134808_)`
- `public void handle(ClientLoginPacketListener p_134805_)`
- `public int getCompressionThreshold()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundLoginDisconnectPacket

*class* `net.minecraft.network.protocol.login.ClientboundLoginDisconnectPacket`

### Fields
- `private final Component reason`

### Methods
- `public void write(FriendlyByteBuf p_134821_)`
- `public void handle(ClientLoginPacketListener p_134818_)`
- `public Component getReason()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientLoginPacketListener

*interface* `net.minecraft.network.protocol.login.ClientLoginPacketListener`

All Superinterfaces: ClientboundPacketListener, PacketListener

### Methods
- `default ConnectionProtocol protocol()`
- `void handleHello(ClientboundHelloPacket p_134742_)`
- `void handleGameProfile(ClientboundGameProfilePacket p_134741_)`
- `void handleDisconnect(ClientboundLoginDisconnectPacket p_134744_)`
- `void handleCompression(ClientboundLoginCompressionPacket p_134743_)`
- `void handleCustomQuery(ClientboundCustomQueryPacket p_134740_)`

### Inherited methods
- from `net.minecraft.network.ClientboundPacketListener`: `flow`
- from `net.minecraft.network.PacketListener`: `isAcceptingMessages`, `onDisconnect`, `shouldHandleMessage`, `shouldPropagateHandlingExceptions`

## ServerboundCustomQueryAnswerPacket

*record* `net.minecraft.network.protocol.login.ServerboundCustomQueryAnswerPacket`

### Fields
- `private final int transactionId`
  The field for the transactionId record component.
- `@Nullable private final CustomQueryAnswerPayload payload`
  The field for the payload record component.
- `private static final int MAX_PAYLOAD_SIZE` (= 1048576)

### Methods
- `public static ServerboundCustomQueryAnswerPacket read(FriendlyByteBuf p_300962_)`
- `private static CustomQueryAnswerPayload readPayload(int p_298211_,  FriendlyByteBuf p_300600_)`
- `private static CustomQueryAnswerPayload readUnknownPayload(FriendlyByteBuf p_299934_)`
- `public void write(FriendlyByteBuf p_299339_)`
- `public void handle(ServerLoginPacketListener p_298492_)`
- `@Nullable public FriendlyByteBuf getInternalData()`
  Description copied from interface: ICustomPacket
  Returns a unsafe reference to this packet's internal data.
   Any modifications to this buffer will be reflected in the main buffer.
- `public ResourceLocation getName()`
- `public int getIndex()`
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
- `public int transactionId()`
  Returns the value of the transactionId record component.
  - returns: the value of the transactionId record component
- `@Nullable public CustomQueryAnswerPayload payload()`
  Returns the value of the payload record component.
  - returns: the value of the payload record component

### Inherited methods
- from `net.minecraftforge.network.ICustomPacket`: `getDirection`, `getThis`
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundHelloPacket

*record* `net.minecraft.network.protocol.login.ServerboundHelloPacket`

### Fields
- `private final String name`
  The field for the name record component.
- `private final UUID profileId`
  The field for the profileId record component.

### Methods
- `public void write(FriendlyByteBuf p_134851_)`
- `public void handle(ServerLoginPacketListener p_134848_)`
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
- `public String name()`
  Returns the value of the name record component.
  - returns: the value of the name record component
- `public UUID profileId()`
  Returns the value of the profileId record component.
  - returns: the value of the profileId record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundKeyPacket

*class* `net.minecraft.network.protocol.login.ServerboundKeyPacket`

### Fields
- `private final byte[] keybytes`
- `private final byte[] encryptedChallenge`

### Methods
- `public void write(FriendlyByteBuf p_134870_)`
- `public void handle(ServerLoginPacketListener p_134866_)`
- `public SecretKey getSecretKey(PrivateKey p_134860_)  throws CryptException`
  - throws: CryptException
- `public boolean isChallengeValid(byte[] p_254210_,  PrivateKey p_253763_)`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundLoginAcknowledgedPacket

*record* `net.minecraft.network.protocol.login.ServerboundLoginAcknowledgedPacket`

### Methods
- `public void write(FriendlyByteBuf p_300127_)`
- `public void handle(ServerLoginPacketListener p_298226_)`
- `public ConnectionProtocol nextProtocol()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`

## ServerLoginPacketListener

*interface* `net.minecraft.network.protocol.login.ServerLoginPacketListener`

All Superinterfaces: PacketListener, ServerboundPacketListener, ServerPacketListener

### Methods
- `default ConnectionProtocol protocol()`
- `void handleHello(ServerboundHelloPacket p_134823_)`
- `void handleKey(ServerboundKeyPacket p_134824_)`
- `void handleCustomQueryPacket(ServerboundCustomQueryAnswerPacket p_298453_)`
- `void handleLoginAcknowledgement(ServerboundLoginAcknowledgedPacket p_301180_)`

### Inherited methods
- from `net.minecraft.network.PacketListener`: `isAcceptingMessages`, `onDisconnect`, `shouldHandleMessage`
- from `net.minecraft.network.ServerboundPacketListener`: `flow`
- from `net.minecraft.network.protocol.game.ServerPacketListener`: `shouldPropagateHandlingExceptions`
