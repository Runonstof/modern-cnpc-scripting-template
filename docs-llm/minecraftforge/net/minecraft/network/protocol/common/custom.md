# net.minecraft.network.protocol.common.custom

- [BeeDebugPayload](#beedebugpayload)
- [BeeDebugPayload.BeeInfo](#beedebugpayload.beeinfo)
- [BrainDebugPayload](#braindebugpayload)
- [BrainDebugPayload.BrainDump](#braindebugpayload.braindump)
- [BrandPayload](#brandpayload)
- [CustomPacketPayload](#custompacketpayload)
- [DiscardedPayload](#discardedpayload)
- [GameEventDebugPayload](#gameeventdebugpayload)
- [GameEventListenerDebugPayload](#gameeventlistenerdebugpayload)
- [GameTestAddMarkerDebugPayload](#gametestaddmarkerdebugpayload)
- [GameTestClearMarkersDebugPayload](#gametestclearmarkersdebugpayload)
- [GoalDebugPayload](#goaldebugpayload)
- [GoalDebugPayload.DebugGoal](#goaldebugpayload.debuggoal)
- [HiveDebugPayload](#hivedebugpayload)
- [HiveDebugPayload.HiveInfo](#hivedebugpayload.hiveinfo)
- [NeighborUpdatesDebugPayload](#neighborupdatesdebugpayload)
- [PathfindingDebugPayload](#pathfindingdebugpayload)
- [PoiAddedDebugPayload](#poiaddeddebugpayload)
- [PoiRemovedDebugPayload](#poiremoveddebugpayload)
- [PoiTicketCountDebugPayload](#poiticketcountdebugpayload)
- [RaidsDebugPayload](#raidsdebugpayload)
- [StructuresDebugPayload](#structuresdebugpayload)
- [StructuresDebugPayload.PieceInfo](#structuresdebugpayload.pieceinfo)
- [VillageSectionsDebugPayload](#villagesectionsdebugpayload)
- [WorldGenAttemptDebugPayload](#worldgenattemptdebugpayload)
## BeeDebugPayload

*record* `net.minecraft.network.protocol.common.custom.BeeDebugPayload`

### Fields
- `private final BeeDebugPayload.BeeInfo beeInfo`
  The field for the beeInfo record component.
- `public static final ResourceLocation ID`

### Methods
- `public void write(FriendlyByteBuf p_300191_)`
- `public ResourceLocation id()`
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
- `public BeeDebugPayload.BeeInfo beeInfo()`
  Returns the value of the beeInfo record component.
  - returns: the value of the beeInfo record component

## BeeDebugPayload.BeeInfo

*record* `net.minecraft.network.protocol.common.custom.BeeDebugPayload.BeeInfo`

Enclosing class: BeeDebugPayload

### Fields
- `private final UUID uuid`
  The field for the uuid record component.
- `private final int id`
  The field for the id record component.
- `private final Vec3 pos`
  The field for the pos record component.
- `@Nullable private final Path path`
  The field for the path record component.
- `@Nullable private final BlockPos hivePos`
  The field for the hivePos record component.
- `@Nullable private final BlockPos flowerPos`
  The field for the flowerPos record component.
- `private final int travelTicks`
  The field for the travelTicks record component.
- `private final Set<String> goals`
  The field for the goals record component.
- `private final List<BlockPos> blacklistedHives`
  The field for the blacklistedHives record component.

### Methods
- `public void write(FriendlyByteBuf p_299671_)`
- `public boolean hasHive(BlockPos p_300739_)`
- `public String generateName()`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public UUID uuid()`
  Returns the value of the uuid record component.
  - returns: the value of the uuid record component
- `public int id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public Vec3 pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component
- `@Nullable public Path path()`
  Returns the value of the path record component.
  - returns: the value of the path record component
- `@Nullable public BlockPos hivePos()`
  Returns the value of the hivePos record component.
  - returns: the value of the hivePos record component
- `@Nullable public BlockPos flowerPos()`
  Returns the value of the flowerPos record component.
  - returns: the value of the flowerPos record component
- `public int travelTicks()`
  Returns the value of the travelTicks record component.
  - returns: the value of the travelTicks record component
- `public Set<String> goals()`
  Returns the value of the goals record component.
  - returns: the value of the goals record component
- `public List<BlockPos> blacklistedHives()`
  Returns the value of the blacklistedHives record component.
  - returns: the value of the blacklistedHives record component

## BrainDebugPayload

*record* `net.minecraft.network.protocol.common.custom.BrainDebugPayload`

### Fields
- `private final BrainDebugPayload.BrainDump brainDump`
  The field for the brainDump record component.
- `public static final ResourceLocation ID`

### Methods
- `public void write(FriendlyByteBuf p_300305_)`
- `public ResourceLocation id()`
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
- `public BrainDebugPayload.BrainDump brainDump()`
  Returns the value of the brainDump record component.
  - returns: the value of the brainDump record component

## BrainDebugPayload.BrainDump

*record* `net.minecraft.network.protocol.common.custom.BrainDebugPayload.BrainDump`

Enclosing class: BrainDebugPayload

### Fields
- `private final UUID uuid`
  The field for the uuid record component.
- `private final int id`
  The field for the id record component.
- `private final String name`
  The field for the name record component.
- `private final String profession`
  The field for the profession record component.
- `private final int xp`
  The field for the xp record component.
- `private final float health`
  The field for the health record component.
- `private final float maxHealth`
  The field for the maxHealth record component.
- `private final Vec3 pos`
  The field for the pos record component.
- `private final String inventory`
  The field for the inventory record component.
- `@Nullable private final Path path`
  The field for the path record component.
- `private final boolean wantsGolem`
  The field for the wantsGolem record component.
- `private final int angerLevel`
  The field for the angerLevel record component.
- `private final List<String> activities`
  The field for the activities record component.
- `private final List<String> behaviors`
  The field for the behaviors record component.
- `private final List<String> memories`
  The field for the memories record component.
- `private final List<String> gossips`
  The field for the gossips record component.
- `private final Set<BlockPos> pois`
  The field for the pois record component.
- `private final Set<BlockPos> potentialPois`
  The field for the potentialPois record component.

### Methods
- `public void write(FriendlyByteBuf p_299431_)`
- `public boolean hasPoi(BlockPos p_301193_)`
- `public boolean hasPotentialPoi(BlockPos p_300342_)`
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
- `public UUID uuid()`
  Returns the value of the uuid record component.
  - returns: the value of the uuid record component
- `public int id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public String name()`
  Returns the value of the name record component.
  - returns: the value of the name record component
- `public String profession()`
  Returns the value of the profession record component.
  - returns: the value of the profession record component
- `public int xp()`
  Returns the value of the xp record component.
  - returns: the value of the xp record component
- `public float health()`
  Returns the value of the health record component.
  - returns: the value of the health record component
- `public float maxHealth()`
  Returns the value of the maxHealth record component.
  - returns: the value of the maxHealth record component
- `public Vec3 pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component
- `public String inventory()`
  Returns the value of the inventory record component.
  - returns: the value of the inventory record component
- `@Nullable public Path path()`
  Returns the value of the path record component.
  - returns: the value of the path record component
- `public boolean wantsGolem()`
  Returns the value of the wantsGolem record component.
  - returns: the value of the wantsGolem record component
- `public int angerLevel()`
  Returns the value of the angerLevel record component.
  - returns: the value of the angerLevel record component
- `public List<String> activities()`
  Returns the value of the activities record component.
  - returns: the value of the activities record component
- `public List<String> behaviors()`
  Returns the value of the behaviors record component.
  - returns: the value of the behaviors record component
- `public List<String> memories()`
  Returns the value of the memories record component.
  - returns: the value of the memories record component
- `public List<String> gossips()`
  Returns the value of the gossips record component.
  - returns: the value of the gossips record component
- `public Set<BlockPos> pois()`
  Returns the value of the pois record component.
  - returns: the value of the pois record component
- `public Set<BlockPos> potentialPois()`
  Returns the value of the potentialPois record component.
  - returns: the value of the potentialPois record component

## BrandPayload

*record* `net.minecraft.network.protocol.common.custom.BrandPayload`

### Fields
- `private final String brand`
  The field for the brand record component.
- `public static final ResourceLocation ID`

### Methods
- `public void write(FriendlyByteBuf p_297362_)`
- `public ResourceLocation id()`
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
- `public String brand()`
  Returns the value of the brand record component.
  - returns: the value of the brand record component

## CustomPacketPayload

*interface* `net.minecraft.network.protocol.common.custom.CustomPacketPayload`

### Methods
- `void write(FriendlyByteBuf p_297598_)`
- `ResourceLocation id()`

## DiscardedPayload

*record* `net.minecraft.network.protocol.common.custom.DiscardedPayload`

### Fields
- `private final ResourceLocation id`
  The field for the id record component.
- `@Nullable private final @Nullable FriendlyByteBuf data`
  The field for the data record component.

### Methods
- `public void write(FriendlyByteBuf p_301050_)`
- `public ResourceLocation id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
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
- `@Nullable public @Nullable FriendlyByteBuf data()`
  Returns the value of the data record component.
  - returns: the value of the data record component

## GameEventDebugPayload

*record* `net.minecraft.network.protocol.common.custom.GameEventDebugPayload`

### Fields
- `private final ResourceKey<GameEvent> type`
  The field for the type record component.
- `private final Vec3 pos`
  The field for the pos record component.
- `public static final ResourceLocation ID`

### Methods
- `public void write(FriendlyByteBuf p_298899_)`
- `public ResourceLocation id()`
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
- `public ResourceKey<GameEvent> type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public Vec3 pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component

## GameEventListenerDebugPayload

*record* `net.minecraft.network.protocol.common.custom.GameEventListenerDebugPayload`

### Fields
- `private final PositionSource listenerPos`
  The field for the listenerPos record component.
- `private final int listenerRange`
  The field for the listenerRange record component.
- `public static final ResourceLocation ID`

### Methods
- `public void write(FriendlyByteBuf p_299971_)`
- `public ResourceLocation id()`
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
- `public PositionSource listenerPos()`
  Returns the value of the listenerPos record component.
  - returns: the value of the listenerPos record component
- `public int listenerRange()`
  Returns the value of the listenerRange record component.
  - returns: the value of the listenerRange record component

## GameTestAddMarkerDebugPayload

*record* `net.minecraft.network.protocol.common.custom.GameTestAddMarkerDebugPayload`

### Fields
- `private final BlockPos pos`
  The field for the pos record component.
- `private final int color`
  The field for the color record component.
- `private final String text`
  The field for the text record component.
- `private final int durationMs`
  The field for the durationMs record component.
- `public static final ResourceLocation ID`

### Methods
- `public void write(FriendlyByteBuf p_300444_)`
- `public ResourceLocation id()`
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
- `public BlockPos pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component
- `public int color()`
  Returns the value of the color record component.
  - returns: the value of the color record component
- `public String text()`
  Returns the value of the text record component.
  - returns: the value of the text record component
- `public int durationMs()`
  Returns the value of the durationMs record component.
  - returns: the value of the durationMs record component

## GameTestClearMarkersDebugPayload

*record* `net.minecraft.network.protocol.common.custom.GameTestClearMarkersDebugPayload`

### Fields
- `public static final ResourceLocation ID`

### Methods
- `public void write(FriendlyByteBuf p_301353_)`
- `public ResourceLocation id()`
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

## GoalDebugPayload

*record* `net.minecraft.network.protocol.common.custom.GoalDebugPayload`

### Fields
- `private final int entityId`
  The field for the entityId record component.
- `private final BlockPos pos`
  The field for the pos record component.
- `private final List<GoalDebugPayload.DebugGoal> goals`
  The field for the goals record component.
- `public static final ResourceLocation ID`

### Methods
- `public void write(FriendlyByteBuf p_297279_)`
- `public ResourceLocation id()`
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
- `public int entityId()`
  Returns the value of the entityId record component.
  - returns: the value of the entityId record component
- `public BlockPos pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component
- `public List<GoalDebugPayload.DebugGoal> goals()`
  Returns the value of the goals record component.
  - returns: the value of the goals record component

## GoalDebugPayload.DebugGoal

*record* `net.minecraft.network.protocol.common.custom.GoalDebugPayload.DebugGoal`

Enclosing class: GoalDebugPayload

### Fields
- `private final int priority`
  The field for the priority record component.
- `private final boolean isRunning`
  The field for the isRunning record component.
- `private final String name`
  The field for the name record component.

### Methods
- `public void write(FriendlyByteBuf p_299193_)`
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
- `public int priority()`
  Returns the value of the priority record component.
  - returns: the value of the priority record component
- `public boolean isRunning()`
  Returns the value of the isRunning record component.
  - returns: the value of the isRunning record component
- `public String name()`
  Returns the value of the name record component.
  - returns: the value of the name record component

## HiveDebugPayload

*record* `net.minecraft.network.protocol.common.custom.HiveDebugPayload`

### Fields
- `private final HiveDebugPayload.HiveInfo hiveInfo`
  The field for the hiveInfo record component.
- `public static final ResourceLocation ID`

### Methods
- `public void write(FriendlyByteBuf p_297901_)`
- `public ResourceLocation id()`
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
- `public HiveDebugPayload.HiveInfo hiveInfo()`
  Returns the value of the hiveInfo record component.
  - returns: the value of the hiveInfo record component

## HiveDebugPayload.HiveInfo

*record* `net.minecraft.network.protocol.common.custom.HiveDebugPayload.HiveInfo`

Enclosing class: HiveDebugPayload

### Fields
- `private final BlockPos pos`
  The field for the pos record component.
- `private final String hiveType`
  The field for the hiveType record component.
- `private final int occupantCount`
  The field for the occupantCount record component.
- `private final int honeyLevel`
  The field for the honeyLevel record component.
- `private final boolean sedated`
  The field for the sedated record component.

### Methods
- `public void write(FriendlyByteBuf p_301145_)`
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
- `public BlockPos pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component
- `public String hiveType()`
  Returns the value of the hiveType record component.
  - returns: the value of the hiveType record component
- `public int occupantCount()`
  Returns the value of the occupantCount record component.
  - returns: the value of the occupantCount record component
- `public int honeyLevel()`
  Returns the value of the honeyLevel record component.
  - returns: the value of the honeyLevel record component
- `public boolean sedated()`
  Returns the value of the sedated record component.
  - returns: the value of the sedated record component

## NeighborUpdatesDebugPayload

*record* `net.minecraft.network.protocol.common.custom.NeighborUpdatesDebugPayload`

### Fields
- `private final long time`
  The field for the time record component.
- `private final BlockPos pos`
  The field for the pos record component.
- `public static final ResourceLocation ID`

### Methods
- `public void write(FriendlyByteBuf p_300822_)`
- `public ResourceLocation id()`
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
- `public long time()`
  Returns the value of the time record component.
  - returns: the value of the time record component
- `public BlockPos pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component

## PathfindingDebugPayload

*record* `net.minecraft.network.protocol.common.custom.PathfindingDebugPayload`

### Fields
- `private final int entityId`
  The field for the entityId record component.
- `private final Path path`
  The field for the path record component.
- `private final float maxNodeDistance`
  The field for the maxNodeDistance record component.
- `public static final ResourceLocation ID`

### Methods
- `public void write(FriendlyByteBuf p_298780_)`
- `public ResourceLocation id()`
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
- `public int entityId()`
  Returns the value of the entityId record component.
  - returns: the value of the entityId record component
- `public Path path()`
  Returns the value of the path record component.
  - returns: the value of the path record component
- `public float maxNodeDistance()`
  Returns the value of the maxNodeDistance record component.
  - returns: the value of the maxNodeDistance record component

## PoiAddedDebugPayload

*record* `net.minecraft.network.protocol.common.custom.PoiAddedDebugPayload`

### Fields
- `private final BlockPos pos`
  The field for the pos record component.
- `private final String type`
  The field for the type record component.
- `private final int freeTicketCount`
  The field for the freeTicketCount record component.
- `public static final ResourceLocation ID`

### Methods
- `public void write(FriendlyByteBuf p_298137_)`
- `public ResourceLocation id()`
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
- `public BlockPos pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component
- `public String type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public int freeTicketCount()`
  Returns the value of the freeTicketCount record component.
  - returns: the value of the freeTicketCount record component

## PoiRemovedDebugPayload

*record* `net.minecraft.network.protocol.common.custom.PoiRemovedDebugPayload`

### Fields
- `private final BlockPos pos`
  The field for the pos record component.
- `public static final ResourceLocation ID`

### Methods
- `public void write(FriendlyByteBuf p_300931_)`
- `public ResourceLocation id()`
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
- `public BlockPos pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component

## PoiTicketCountDebugPayload

*record* `net.minecraft.network.protocol.common.custom.PoiTicketCountDebugPayload`

### Fields
- `private final BlockPos pos`
  The field for the pos record component.
- `private final int freeTicketCount`
  The field for the freeTicketCount record component.
- `public static final ResourceLocation ID`

### Methods
- `public void write(FriendlyByteBuf p_299042_)`
- `public ResourceLocation id()`
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
- `public BlockPos pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component
- `public int freeTicketCount()`
  Returns the value of the freeTicketCount record component.
  - returns: the value of the freeTicketCount record component

## RaidsDebugPayload

*record* `net.minecraft.network.protocol.common.custom.RaidsDebugPayload`

### Fields
- `private final List<BlockPos> raidCenters`
  The field for the raidCenters record component.
- `public static final ResourceLocation ID`

### Methods
- `public void write(FriendlyByteBuf p_298176_)`
- `public ResourceLocation id()`
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
- `public List<BlockPos> raidCenters()`
  Returns the value of the raidCenters record component.
  - returns: the value of the raidCenters record component

## StructuresDebugPayload

*record* `net.minecraft.network.protocol.common.custom.StructuresDebugPayload`

### Fields
- `private final ResourceKey<Level> dimension`
  The field for the dimension record component.
- `private final BoundingBox mainBB`
  The field for the mainBB record component.
- `private final List<StructuresDebugPayload.PieceInfo> pieces`
  The field for the pieces record component.
- `public static final ResourceLocation ID`

### Methods
- `public void write(FriendlyByteBuf p_300362_)`
- `public ResourceLocation id()`
- `static BoundingBox readBoundingBox(FriendlyByteBuf p_297781_)`
- `static void writeBoundingBox(FriendlyByteBuf p_300963_,  BoundingBox p_297295_)`
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
- `public ResourceKey<Level> dimension()`
  Returns the value of the dimension record component.
  - returns: the value of the dimension record component
- `public BoundingBox mainBB()`
  Returns the value of the mainBB record component.
  - returns: the value of the mainBB record component
- `public List<StructuresDebugPayload.PieceInfo> pieces()`
  Returns the value of the pieces record component.
  - returns: the value of the pieces record component

## StructuresDebugPayload.PieceInfo

*record* `net.minecraft.network.protocol.common.custom.StructuresDebugPayload.PieceInfo`

Enclosing class: StructuresDebugPayload

### Fields
- `private final BoundingBox boundingBox`
  The field for the boundingBox record component.
- `private final boolean isStart`
  The field for the isStart record component.

### Methods
- `public void write(FriendlyByteBuf p_298576_)`
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
- `public BoundingBox boundingBox()`
  Returns the value of the boundingBox record component.
  - returns: the value of the boundingBox record component
- `public boolean isStart()`
  Returns the value of the isStart record component.
  - returns: the value of the isStart record component

## VillageSectionsDebugPayload

*record* `net.minecraft.network.protocol.common.custom.VillageSectionsDebugPayload`

### Fields
- `private final Set<SectionPos> villageChunks`
  The field for the villageChunks record component.
- `private final Set<SectionPos> notVillageChunks`
  The field for the notVillageChunks record component.
- `public static final ResourceLocation ID`

### Methods
- `public void write(FriendlyByteBuf p_299408_)`
- `public ResourceLocation id()`
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
- `public Set<SectionPos> villageChunks()`
  Returns the value of the villageChunks record component.
  - returns: the value of the villageChunks record component
- `public Set<SectionPos> notVillageChunks()`
  Returns the value of the notVillageChunks record component.
  - returns: the value of the notVillageChunks record component

## WorldGenAttemptDebugPayload

*record* `net.minecraft.network.protocol.common.custom.WorldGenAttemptDebugPayload`

### Fields
- `private final BlockPos pos`
  The field for the pos record component.
- `private final float scale`
  The field for the scale record component.
- `private final float red`
  The field for the red record component.
- `private final float green`
  The field for the green record component.
- `private final float blue`
  The field for the blue record component.
- `private final float alpha`
  The field for the alpha record component.
- `public static final ResourceLocation ID`

### Methods
- `public void write(FriendlyByteBuf p_301372_)`
- `public ResourceLocation id()`
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
- `public BlockPos pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component
- `public float scale()`
  Returns the value of the scale record component.
  - returns: the value of the scale record component
- `public float red()`
  Returns the value of the red record component.
  - returns: the value of the red record component
- `public float green()`
  Returns the value of the green record component.
  - returns: the value of the green record component
- `public float blue()`
  Returns the value of the blue record component.
  - returns: the value of the blue record component
- `public float alpha()`
  Returns the value of the alpha record component.
  - returns: the value of the alpha record component
