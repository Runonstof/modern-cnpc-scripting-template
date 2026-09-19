# net.minecraftforge.network.packets

- [Acknowledge](#acknowledge)
- [ChannelVersions](#channelversions)
- [ConfigData](#configdata)
- [LoginWrapper](#loginwrapper)
- [MismatchData](#mismatchdata)
- [ModVersions](#modversions)
- [ModVersions.Info](#modversions.info)
- [OpenContainer](#opencontainer)
- [RegistryData](#registrydata)
- [RegistryList](#registrylist)
- [SpawnEntity](#spawnentity)
## Acknowledge

*record* `net.minecraftforge.network.packets.Acknowledge`

### Fields
- `private final int token`
  The field for the token record component.

### Methods
- `public void encode(FriendlyByteBuf buf)`
- `public static Acknowledge decode(FriendlyByteBuf buf)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int token()`
  Returns the value of the token record component.
  - returns: the value of the token record component

## ChannelVersions

*record* `net.minecraftforge.network.packets.ChannelVersions`

### Fields
- `private final Map<ResourceLocation,@NotNull Integer> channels`
  The field for the channels record component.

### Methods
- `public static ChannelVersions decode(FriendlyByteBuf buf)`
- `public void encode(FriendlyByteBuf buf)`
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
- `public Map<ResourceLocation,@NotNull Integer> channels()`
  Returns the value of the channels record component.
  - returns: the value of the channels record component

## ConfigData

*record* `net.minecraftforge.network.packets.ConfigData`

### Fields
- `private final String name`
  The field for the name record component.
- `private final byte[] data`
  The field for the data record component.

### Methods
- `public void encode(FriendlyByteBuf buf)`
- `public static ConfigData decode(FriendlyByteBuf buf)`
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
- `public byte[] data()`
  Returns the value of the data record component.
  - returns: the value of the data record component

## LoginWrapper

*record* `net.minecraftforge.network.packets.LoginWrapper`

### Fields
- `private final ResourceLocation channel`
  The field for the channel record component.
- `private final FriendlyByteBuf data`
  The field for the data record component.

### Methods
- `public static LoginWrapper decode(FriendlyByteBuf buf)`
- `public void encode(FriendlyByteBuf buf)`
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
- `public ResourceLocation channel()`
  Returns the value of the channel record component.
  - returns: the value of the channel record component
- `public FriendlyByteBuf data()`
  Returns the value of the data record component.
  - returns: the value of the data record component

## MismatchData

*record* `net.minecraftforge.network.packets.MismatchData`

Notifies the client of a channel mismatch on the server, so a ModMismatchDisconnectedScreen is used to notify the user of the disconnection.
 This packet also sends the data of a channel mismatch (currently, the ids and versions of the mismatched channels) to the client for it to display the correct information in said screen.

### Fields
- `private final Map<ResourceLocation,NetworkContext.NetworkMismatchData.Version> mismatched`
  The field for the mismatched record component.
- `private final Set<ResourceLocation> missing`
  The field for the missing record component.
- `private static final int MAX_LENGTH` (= 256)

### Methods
- `public static MismatchData decode(FriendlyByteBuf buf)`
- `public void encode(FriendlyByteBuf buf)`
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
- `public Map<ResourceLocation,NetworkContext.NetworkMismatchData.Version> mismatched()`
  Returns the value of the mismatched record component.
  - returns: the value of the mismatched record component
- `public Set<ResourceLocation> missing()`
  Returns the value of the missing record component.
  - returns: the value of the missing record component

## ModVersions

*record* `net.minecraftforge.network.packets.ModVersions`

Prefixes S2CModList by sending additional data about the mods installed on the server to the client
 The mod data is stored as follows: [modId -> [modName, modVersion]]

### Fields
- `private final Map<String,ModVersions.Info> mods`
  The field for the mods record component.
- `private static final int MAX_LENGTH` (= 256)

### Methods
- `public static ModVersions create()`
- `public static ModVersions decode(FriendlyByteBuf buf)`
- `public void encode(FriendlyByteBuf output)`
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
- `public Map<String,ModVersions.Info> mods()`
  Returns the value of the mods record component.
  - returns: the value of the mods record component

## ModVersions.Info

*record* `net.minecraftforge.network.packets.ModVersions.Info`

Enclosing class: ModVersions

### Fields
- `private final String name`
  The field for the name record component.
- `private final String version`
  The field for the version record component.

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
- `public String name()`
  Returns the value of the name record component.
  - returns: the value of the name record component
- `public String version()`
  Returns the value of the version record component.
  - returns: the value of the version record component

## OpenContainer

*class* `net.minecraftforge.network.packets.OpenContainer`

### Fields
- `private final int id`
- `private final int windowId`
- `private final Component name`
- `private final FriendlyByteBuf additionalData`

### Methods
- `public static void encode(OpenContainer msg,  FriendlyByteBuf buf)`
- `public static OpenContainer decode(FriendlyByteBuf buf)`
- `public static void handle(OpenContainer msg,  CustomPayloadEvent.Context ctx)`
- `public final MenuType<?> getType()`
- `public int getWindowId()`
- `public Component getName()`
- `public FriendlyByteBuf getAdditionalData()`

## RegistryData

*record* `net.minecraftforge.network.packets.RegistryData`

### Fields
- `private final int token`
  The field for the token record component.
- `private final ResourceLocation name`
  The field for the name record component.
- `private final ForgeRegistry.Snapshot data`
  The field for the data record component.

### Methods
- `public void encode(FriendlyByteBuf buf)`
- `public static RegistryData decode(FriendlyByteBuf buf)`
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
- `public int token()`
  Returns the value of the token record component.
  - returns: the value of the token record component
- `public ResourceLocation name()`
  Returns the value of the name record component.
  - returns: the value of the name record component
- `public ForgeRegistry.Snapshot data()`
  Returns the value of the data record component.
  - returns: the value of the data record component

## RegistryList

*record* `net.minecraftforge.network.packets.RegistryList`

### Fields
- `private final int token`
  The field for the token record component.
- `private final List<ResourceLocation> normal`
  The field for the normal record component.
- `private final List<ResourceKey<? extends Registry<?>>> datapacks`
  The field for the datapacks record component.

### Methods
- `public static RegistryList decode(FriendlyByteBuf buf)`
- `public void encode(FriendlyByteBuf buf)`
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
- `public int token()`
  Returns the value of the token record component.
  - returns: the value of the token record component
- `public List<ResourceLocation> normal()`
  Returns the value of the normal record component.
  - returns: the value of the normal record component
- `public List<ResourceKey<? extends Registry<?>>> datapacks()`
  Returns the value of the datapacks record component.
  - returns: the value of the datapacks record component

## SpawnEntity

*class* `net.minecraftforge.network.packets.SpawnEntity`

Used to spawn a custom entity without the same restrictions as
 ClientboundAddEntityPacket

 To customize how your entity is created clientside (instead of using the default factory provided to the
 EntityType)
 see EntityType.Builder.setCustomClientFactory(java.util.function.BiFunction<net.minecraftforge.network.packets.SpawnEntity, net.minecraft.world.level.Level, T>).

### Fields
- `private final Entity entity`
- `private final int typeId`
- `private final int entityId`
- `private final UUID uuid`
- `private final double posX`
- `private final double posY`
- `private final double posZ`
- `private final byte pitch`
- `private final byte yaw`
- `private final byte headYaw`
- `private final int velX`
- `private final int velY`
- `private final int velZ`
- `private final FriendlyByteBuf buf`

### Methods
- `public static void encode(SpawnEntity msg,  FriendlyByteBuf buf)`
- `public static SpawnEntity decode(FriendlyByteBuf buf)`
- `private static FriendlyByteBuf readSpawnDataPacket(FriendlyByteBuf buf)`
- `public static void handle(SpawnEntity msg,  CustomPayloadEvent.Context ctx)`
- `public Entity getEntity()`
- `public int getTypeId()`
- `public int getEntityId()`
- `public UUID getUuid()`
- `public double getPosX()`
- `public double getPosY()`
- `public double getPosZ()`
- `public byte getPitch()`
- `public byte getYaw()`
- `public byte getHeadYaw()`
- `public int getVelX()`
- `public int getVelY()`
- `public int getVelZ()`
- `public FriendlyByteBuf getAdditionalData()`
