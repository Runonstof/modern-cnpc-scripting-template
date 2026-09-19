# net.minecraft.network.protocol.common

- [Class ServerboundResourcePackPacket.Action](#class-serverboundresourcepackpacket.action)
- [ClientboundCustomPayloadPacket](#clientboundcustompayloadpacket)
- [ClientboundDisconnectPacket](#clientbounddisconnectpacket)
- [ClientboundKeepAlivePacket](#clientboundkeepalivepacket)
- [ClientboundPingPacket](#clientboundpingpacket)
- [ClientboundResourcePackPacket](#clientboundresourcepackpacket)
- [ClientboundUpdateTagsPacket](#clientboundupdatetagspacket)
- [ClientCommonPacketListener](#clientcommonpacketlistener)
- [ServerboundClientInformationPacket](#serverboundclientinformationpacket)
- [ServerboundCustomPayloadPacket](#serverboundcustompayloadpacket)
- [ServerboundKeepAlivePacket](#serverboundkeepalivepacket)
- [ServerboundPongPacket](#serverboundpongpacket)
- [ServerboundResourcePackPacket](#serverboundresourcepackpacket)
- [ServerCommonPacketListener](#servercommonpacketlistener)
## Class ServerboundResourcePackPacket.Action

*enum* `net.minecraft.network.protocol.common.Class ServerboundResourcePackPacket.Action`

Enclosing class: ServerboundResourcePackPacket

### Methods
- `public static ServerboundResourcePackPacket.Action[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ServerboundResourcePackPacket.Action valueOf(String name)`
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

## ClientboundCustomPayloadPacket

*record* `net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket`

### Fields
- `private final CustomPacketPayload payload`
  The field for the payload record component.
- `private static final int MAX_PAYLOAD_SIZE` (= 1048576)
- `private static final Map<ResourceLocation,FriendlyByteBuf.Reader<? extends CustomPacketPayload>> KNOWN_TYPES`

### Methods
- `private static CustomPacketPayload readPayload(ResourceLocation p_298700_,  FriendlyByteBuf p_298589_)`
- `private static DiscardedPayload readUnknownPayload(ResourceLocation p_299265_,  FriendlyByteBuf p_297545_)`
- `public void write(FriendlyByteBuf p_298655_)`
- `public void handle(ClientCommonPacketListener p_299773_)`
- `@Nullable public @Nullable FriendlyByteBuf getInternalData()`
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
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public CustomPacketPayload payload()`
  Returns the value of the payload record component.
  - returns: the value of the payload record component

### Inherited methods
- from `net.minecraftforge.network.ICustomPacket`: `getDirection`, `getThis`
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundDisconnectPacket

*class* `net.minecraft.network.protocol.common.ClientboundDisconnectPacket`

### Fields
- `private final Component reason`

### Methods
- `public void write(FriendlyByteBuf p_300138_)`
- `public void handle(ClientCommonPacketListener p_297710_)`
- `public Component getReason()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundKeepAlivePacket

*class* `net.minecraft.network.protocol.common.ClientboundKeepAlivePacket`

### Fields
- `private final long id`

### Methods
- `public void write(FriendlyByteBuf p_299560_)`
- `public void handle(ClientCommonPacketListener p_297897_)`
- `public long getId()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundPingPacket

*class* `net.minecraft.network.protocol.common.ClientboundPingPacket`

### Fields
- `private final int id`

### Methods
- `public void write(FriendlyByteBuf p_298056_)`
- `public void handle(ClientCommonPacketListener p_299413_)`
- `public int getId()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundResourcePackPacket

*class* `net.minecraft.network.protocol.common.ClientboundResourcePackPacket`

### Fields
- `public static final int MAX_HASH_LENGTH` (= 40)
- `private final String url`
- `private final String hash`
- `private final boolean required`
- `@Nullable private final Component prompt`

### Methods
- `public void write(FriendlyByteBuf p_300009_)`
- `public void handle(ClientCommonPacketListener p_300088_)`
- `public String getUrl()`
- `public String getHash()`
- `public boolean isRequired()`
- `@Nullable public Component getPrompt()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundUpdateTagsPacket

*class* `net.minecraft.network.protocol.common.ClientboundUpdateTagsPacket`

### Fields
- `private final Map<ResourceKey<? extends Registry<?>>,TagNetworkSerialization.NetworkPayload> tags`

### Methods
- `public void write(FriendlyByteBuf p_299422_)`
- `public void handle(ClientCommonPacketListener p_297999_)`
- `public Map<ResourceKey<? extends Registry<?>>,TagNetworkSerialization.NetworkPayload> getTags()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientCommonPacketListener

*interface* `net.minecraft.network.protocol.common.ClientCommonPacketListener`

All Superinterfaces: ClientboundPacketListener, PacketListener

### Methods
- `void handleKeepAlive(ClientboundKeepAlivePacket p_299456_)`
- `void handlePing(ClientboundPingPacket p_297871_)`
- `void handleCustomPayload(ClientboundCustomPayloadPacket p_299137_)`
- `void handleDisconnect(ClientboundDisconnectPacket p_300983_)`
- `void handleResourcePack(ClientboundResourcePackPacket p_301120_)`
- `void handleUpdateTags(ClientboundUpdateTagsPacket p_297352_)`

### Inherited methods
- from `net.minecraft.network.ClientboundPacketListener`: `flow`
- from `net.minecraft.network.PacketListener`: `isAcceptingMessages`, `onDisconnect`, `protocol`, `shouldHandleMessage`, `shouldPropagateHandlingExceptions`

## ServerboundClientInformationPacket

*record* `net.minecraft.network.protocol.common.ServerboundClientInformationPacket`

### Fields
- `private final ClientInformation information`
  The field for the information record component.

### Methods
- `public void write(FriendlyByteBuf p_298054_)`
- `public void handle(ServerCommonPacketListener p_300686_)`
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
- `public ClientInformation information()`
  Returns the value of the information record component.
  - returns: the value of the information record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundCustomPayloadPacket

*record* `net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket`

### Fields
- `private final CustomPacketPayload payload`
  The field for the payload record component.
- `private static final int MAX_PAYLOAD_SIZE` (= 32767)
- `private static final Map<ResourceLocation,FriendlyByteBuf.Reader<? extends CustomPacketPayload>> KNOWN_TYPES`

### Methods
- `private static CustomPacketPayload readPayload(ResourceLocation p_301116_,  FriendlyByteBuf p_298967_)`
- `private static DiscardedPayload readUnknownPayload(ResourceLocation p_300234_,  FriendlyByteBuf p_299925_)`
- `public void write(FriendlyByteBuf p_299043_)`
- `public void handle(ServerCommonPacketListener p_297991_)`
- `@Nullable public @Nullable FriendlyByteBuf getInternalData()`
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
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public CustomPacketPayload payload()`
  Returns the value of the payload record component.
  - returns: the value of the payload record component

### Inherited methods
- from `net.minecraftforge.network.ICustomPacket`: `getDirection`, `getThis`
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundKeepAlivePacket

*class* `net.minecraft.network.protocol.common.ServerboundKeepAlivePacket`

### Fields
- `private final long id`

### Methods
- `public void handle(ServerCommonPacketListener p_297247_)`
- `public void write(FriendlyByteBuf p_299172_)`
- `public long getId()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundPongPacket

*class* `net.minecraft.network.protocol.common.ServerboundPongPacket`

### Fields
- `private final int id`

### Methods
- `public void write(FriendlyByteBuf p_299986_)`
- `public void handle(ServerCommonPacketListener p_298626_)`
- `public int getId()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundResourcePackPacket

*class* `net.minecraft.network.protocol.common.ServerboundResourcePackPacket`

### Fields
- `private final ServerboundResourcePackPacket.Action action`

### Methods
- `public void write(FriendlyByteBuf p_298279_)`
- `public void handle(ServerCommonPacketListener p_298138_)`
- `public ServerboundResourcePackPacket.Action getAction()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerCommonPacketListener

*interface* `net.minecraft.network.protocol.common.ServerCommonPacketListener`

All Superinterfaces: PacketListener, ServerboundPacketListener, ServerPacketListener

### Methods
- `void handleKeepAlive(ServerboundKeepAlivePacket p_300190_)`
- `void handlePong(ServerboundPongPacket p_297980_)`
- `void handleCustomPayload(ServerboundCustomPayloadPacket p_297952_)`
- `void handleResourcePackResponse(ServerboundResourcePackPacket p_300293_)`
- `void handleClientInformation(ServerboundClientInformationPacket p_301286_)`

### Inherited methods
- from `net.minecraft.network.PacketListener`: `isAcceptingMessages`, `onDisconnect`, `protocol`, `shouldHandleMessage`
- from `net.minecraft.network.ServerboundPacketListener`: `flow`
- from `net.minecraft.network.protocol.game.ServerPacketListener`: `shouldPropagateHandlingExceptions`
