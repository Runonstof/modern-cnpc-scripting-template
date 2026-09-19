# net.minecraft.network.protocol.status

- [ClientboundPongResponsePacket](#clientboundpongresponsepacket)
- [ClientboundStatusResponsePacket](#clientboundstatusresponsepacket)
- [ClientStatusPacketListener](#clientstatuspacketlistener)
- [ServerboundPingRequestPacket](#serverboundpingrequestpacket)
- [ServerboundStatusRequestPacket](#serverboundstatusrequestpacket)
- [ServerStatus](#serverstatus)
- [ServerStatus.Favicon](#serverstatus.favicon)
- [ServerStatus.Players](#serverstatus.players)
- [ServerStatus.Version](#serverstatus.version)
- [ServerStatusPacketListener](#serverstatuspacketlistener)
## ClientboundPongResponsePacket

*class* `net.minecraft.network.protocol.status.ClientboundPongResponsePacket`

### Fields
- `private final long time`

### Methods
- `public void write(FriendlyByteBuf p_134884_)`
- `public void handle(ClientPongPacketListener p_298225_)`
- `public long getTime()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundStatusResponsePacket

*record* `net.minecraft.network.protocol.status.ClientboundStatusResponsePacket`

### Fields
- `private final ServerStatus status`
  The field for the status record component.
- `@Nullable private final @Nullable String cachedStatus`
  The field for the cachedStatus record component.

### Methods
- `public void write(FriendlyByteBuf p_134899_)`
- `public void handle(ClientStatusPacketListener p_134896_)`
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
- `public ServerStatus status()`
  Returns the value of the status record component.
  - returns: the value of the status record component
- `@Nullable public @Nullable String cachedStatus()`
  Returns the value of the cachedStatus record component.
  - returns: the value of the cachedStatus record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientStatusPacketListener

*interface* `net.minecraft.network.protocol.status.ClientStatusPacketListener`

All Superinterfaces: ClientboundPacketListener, ClientPongPacketListener, PacketListener

### Methods
- `default ConnectionProtocol protocol()`
- `void handleStatusResponse(ClientboundStatusResponsePacket p_134872_)`

### Inherited methods
- from `net.minecraft.network.ClientboundPacketListener`: `flow`
- from `net.minecraft.network.ClientPongPacketListener`: `handlePongResponse`
- from `net.minecraft.network.PacketListener`: `isAcceptingMessages`, `onDisconnect`, `shouldHandleMessage`, `shouldPropagateHandlingExceptions`

## ServerboundPingRequestPacket

*class* `net.minecraft.network.protocol.status.ServerboundPingRequestPacket`

### Fields
- `private final long time`

### Methods
- `public void write(FriendlyByteBuf p_135000_)`
- `public void handle(ServerPingPacketListener p_300803_)`
- `public long getTime()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundStatusRequestPacket

*class* `net.minecraft.network.protocol.status.ServerboundStatusRequestPacket`

### Methods
- `public void write(FriendlyByteBuf p_135009_)`
- `public void handle(ServerStatusPacketListener p_135007_)`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerStatus

*record* `net.minecraft.network.protocol.status.ServerStatus`

### Fields
- `private final Component description`
  The field for the description record component.
- `private final Optional<ServerStatus.Players> players`
  The field for the players record component.
- `private final Optional<ServerStatus.Version> version`
  The field for the version record component.
- `private final Optional<ServerStatus.Favicon> favicon`
  The field for the favicon record component.
- `private final boolean enforcesSecureChat`
  The field for the enforcesSecureChat record component.
- `private final Optional<ServerStatusPing> forgeData`
  The field for the forgeData record component.
- `public static final com.mojang.serialization.Codec<ServerStatus> CODEC`

### Methods
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
- `public Component description()`
  Returns the value of the description record component.
  - returns: the value of the description record component
- `public Optional<ServerStatus.Players> players()`
  Returns the value of the players record component.
  - returns: the value of the players record component
- `public Optional<ServerStatus.Version> version()`
  Returns the value of the version record component.
  - returns: the value of the version record component
- `public Optional<ServerStatus.Favicon> favicon()`
  Returns the value of the favicon record component.
  - returns: the value of the favicon record component
- `public boolean enforcesSecureChat()`
  Returns the value of the enforcesSecureChat record component.
  - returns: the value of the enforcesSecureChat record component
- `public Optional<ServerStatusPing> forgeData()`
  Returns the value of the forgeData record component.
  - returns: the value of the forgeData record component

## ServerStatus.Favicon

*record* `net.minecraft.network.protocol.status.ServerStatus.Favicon`

Enclosing class: ServerStatus

### Fields
- `private final byte[] iconBytes`
  The field for the iconBytes record component.
- `private static final String PREFIX` (= "data:image/png;base64,")
- `public static final com.mojang.serialization.Codec<ServerStatus.Favicon> CODEC`

### Methods
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
- `public byte[] iconBytes()`
  Returns the value of the iconBytes record component.
  - returns: the value of the iconBytes record component

## ServerStatus.Players

*record* `net.minecraft.network.protocol.status.ServerStatus.Players`

Enclosing class: ServerStatus

### Fields
- `private final int max`
  The field for the max record component.
- `private final int online`
  The field for the online record component.
- `private final List<com.mojang.authlib.GameProfile> sample`
  The field for the sample record component.
- `private static final com.mojang.serialization.Codec<com.mojang.authlib.GameProfile> PROFILE_CODEC`
- `public static final com.mojang.serialization.Codec<ServerStatus.Players> CODEC`

### Methods
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
- `public int max()`
  Returns the value of the max record component.
  - returns: the value of the max record component
- `public int online()`
  Returns the value of the online record component.
  - returns: the value of the online record component
- `public List<com.mojang.authlib.GameProfile> sample()`
  Returns the value of the sample record component.
  - returns: the value of the sample record component

## ServerStatus.Version

*record* `net.minecraft.network.protocol.status.ServerStatus.Version`

Enclosing class: ServerStatus

### Fields
- `private final String name`
  The field for the name record component.
- `private final int protocol`
  The field for the protocol record component.
- `public static final com.mojang.serialization.Codec<ServerStatus.Version> CODEC`

### Methods
- `public static ServerStatus.Version current()`
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
- `public String name()`
  Returns the value of the name record component.
  - returns: the value of the name record component
- `public int protocol()`
  Returns the value of the protocol record component.
  - returns: the value of the protocol record component

## ServerStatusPacketListener

*interface* `net.minecraft.network.protocol.status.ServerStatusPacketListener`

All Superinterfaces: PacketListener, ServerboundPacketListener, ServerPacketListener, ServerPingPacketListener

### Methods
- `default ConnectionProtocol protocol()`
- `void handleStatusRequest(ServerboundStatusRequestPacket p_134987_)`

### Inherited methods
- from `net.minecraft.network.PacketListener`: `isAcceptingMessages`, `onDisconnect`, `shouldHandleMessage`
- from `net.minecraft.network.ServerboundPacketListener`: `flow`
- from `net.minecraft.network.protocol.game.ServerPacketListener`: `shouldPropagateHandlingExceptions`
- from `net.minecraft.network.protocol.game.ServerPingPacketListener`: `handlePingRequest`
