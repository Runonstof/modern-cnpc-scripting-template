# net.minecraft.network.protocol.configuration

- [ClientboundFinishConfigurationPacket](#clientboundfinishconfigurationpacket)
- [ClientboundRegistryDataPacket](#clientboundregistrydatapacket)
- [ClientboundUpdateEnabledFeaturesPacket](#clientboundupdateenabledfeaturespacket)
- [ClientConfigurationPacketListener](#clientconfigurationpacketlistener)
- [ServerboundFinishConfigurationPacket](#serverboundfinishconfigurationpacket)
- [ServerConfigurationPacketListener](#serverconfigurationpacketlistener)
## ClientboundFinishConfigurationPacket

*record* `net.minecraft.network.protocol.configuration.ClientboundFinishConfigurationPacket`

### Methods
- `public void write(FriendlyByteBuf p_298420_)`
- `public void handle(ClientConfigurationPacketListener p_299479_)`
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

## ClientboundRegistryDataPacket

*record* `net.minecraft.network.protocol.configuration.ClientboundRegistryDataPacket`

### Fields
- `private final RegistryAccess.Frozen registryHolder`
  The field for the registryHolder record component.
- `private static final RegistryOps<Tag> BUILTIN_CONTEXT_OPS`

### Methods
- `public void write(FriendlyByteBuf p_297355_)`
- `public void handle(ClientConfigurationPacketListener p_298179_)`
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
- `public RegistryAccess.Frozen registryHolder()`
  Returns the value of the registryHolder record component.
  - returns: the value of the registryHolder record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundUpdateEnabledFeaturesPacket

*record* `net.minecraft.network.protocol.configuration.ClientboundUpdateEnabledFeaturesPacket`

### Fields
- `private final Set<ResourceLocation> features`
  The field for the features record component.

### Methods
- `public void write(FriendlyByteBuf p_297257_)`
- `public void handle(ClientConfigurationPacketListener p_301161_)`
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
- `public Set<ResourceLocation> features()`
  Returns the value of the features record component.
  - returns: the value of the features record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientConfigurationPacketListener

*interface* `net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener`

All Superinterfaces: ClientboundPacketListener, ClientCommonPacketListener, PacketListener

### Methods
- `default ConnectionProtocol protocol()`
- `void handleConfigurationFinished(ClientboundFinishConfigurationPacket p_301141_)`
- `void handleRegistryData(ClientboundRegistryDataPacket p_298669_)`
- `void handleEnabledFeatures(ClientboundUpdateEnabledFeaturesPacket p_298844_)`

### Inherited methods
- from `net.minecraft.network.ClientboundPacketListener`: `flow`
- from `net.minecraft.network.protocol.common.ClientCommonPacketListener`: `handleCustomPayload`, `handleDisconnect`, `handleKeepAlive`, `handlePing`, `handleResourcePack`, `handleUpdateTags`
- from `net.minecraft.network.PacketListener`: `isAcceptingMessages`, `onDisconnect`, `shouldHandleMessage`, `shouldPropagateHandlingExceptions`

## ServerboundFinishConfigurationPacket

*record* `net.minecraft.network.protocol.configuration.ServerboundFinishConfigurationPacket`

### Methods
- `public void write(FriendlyByteBuf p_300295_)`
- `public void handle(ServerConfigurationPacketListener p_299852_)`
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

## ServerConfigurationPacketListener

*interface* `net.minecraft.network.protocol.configuration.ServerConfigurationPacketListener`

All Superinterfaces: PacketListener, ServerboundPacketListener, ServerCommonPacketListener, ServerPacketListener

### Methods
- `default ConnectionProtocol protocol()`
- `void handleConfigurationFinished(ServerboundFinishConfigurationPacket p_299896_)`

### Inherited methods
- from `net.minecraft.network.PacketListener`: `isAcceptingMessages`, `onDisconnect`, `shouldHandleMessage`
- from `net.minecraft.network.ServerboundPacketListener`: `flow`
- from `net.minecraft.network.protocol.common.ServerCommonPacketListener`: `handleClientInformation`, `handleCustomPayload`, `handleKeepAlive`, `handlePong`, `handleResourcePackResponse`
- from `net.minecraft.network.protocol.game.ServerPacketListener`: `shouldPropagateHandlingExceptions`
