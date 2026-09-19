# net.minecraft.network.protocol.handshake

- [Class ClientIntent](#class-clientintent)
- [ClientIntentionPacket](#clientintentionpacket)
- [ServerHandshakePacketListener](#serverhandshakepacketlistener)
## Class ClientIntent

*enum* `net.minecraft.network.protocol.handshake.Class ClientIntent`

### Fields
- `private static final int STATUS_ID`
- `private static final int LOGIN_ID`

### Methods
- `public static ClientIntent[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ClientIntent valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static ClientIntent byId(int p_297617_)`
- `public int id()`
- `public ConnectionProtocol protocol()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ClientIntentionPacket

*record* `net.minecraft.network.protocol.handshake.ClientIntentionPacket`

### Fields
- `private final int protocolVersion`
  The field for the protocolVersion record component.
- `private final String hostName`
  The field for the hostName record component.
- `private final int port`
  The field for the port record component.
- `private final ClientIntent intention`
  The field for the intention record component.
- `private static final int MAX_HOST_LENGTH` (= 255)

### Methods
- `public void write(FriendlyByteBuf p_134737_)`
- `public void handle(ServerHandshakePacketListener p_134734_)`
- `public ConnectionProtocol nextProtocol()`
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
- `public int protocolVersion()`
  Returns the value of the protocolVersion record component.
  - returns: the value of the protocolVersion record component
- `public String hostName()`
  Returns the value of the hostName record component.
  - returns: the value of the hostName record component
- `public int port()`
  Returns the value of the port record component.
  - returns: the value of the port record component
- `public ClientIntent intention()`
  Returns the value of the intention record component.
  - returns: the value of the intention record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`

## ServerHandshakePacketListener

*interface* `net.minecraft.network.protocol.handshake.ServerHandshakePacketListener`

All Superinterfaces: PacketListener, ServerboundPacketListener, ServerPacketListener

### Methods
- `default ConnectionProtocol protocol()`
- `void handleIntention(ClientIntentionPacket p_134739_)`

### Inherited methods
- from `net.minecraft.network.PacketListener`: `isAcceptingMessages`, `onDisconnect`, `shouldHandleMessage`
- from `net.minecraft.network.ServerboundPacketListener`: `flow`
- from `net.minecraft.network.protocol.game.ServerPacketListener`: `shouldPropagateHandlingExceptions`
