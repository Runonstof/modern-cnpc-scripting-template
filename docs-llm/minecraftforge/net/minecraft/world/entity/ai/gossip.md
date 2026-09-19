# net.minecraft.world.entity.ai.gossip

- [Class GossipType](#class-gossiptype)
- [GossipContainer](#gossipcontainer)
- [GossipContainer.EntityGossips](#gossipcontainer.entitygossips)
- [GossipContainer.GossipEntry](#gossipcontainer.gossipentry)
## Class GossipType

*enum* `net.minecraft.world.entity.ai.gossip.Class GossipType`

### Fields
- `public static final int REPUTATION_CHANGE_PER_EVENT`
- `public static final int REPUTATION_CHANGE_PER_EVERLASTING_MEMORY`
- `public static final int REPUTATION_CHANGE_PER_TRADE`
- `public final String id`
- `public final int weight`
- `public final int max`
- `public final int decayPerDay`
- `public final int decayPerTransfer`
- `public static final com.mojang.serialization.Codec<GossipType> CODEC`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static GossipType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static GossipType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## GossipContainer

*class* `net.minecraft.world.entity.ai.gossip.GossipContainer`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final int DISCARD_THRESHOLD` (= 2)
- `private final Map<UUID,GossipContainer.EntityGossips> gossips`

### Methods
- `public Map<UUID,it.unimi.dsi.fastutil.objects.Object2IntMap<GossipType>> getGossipEntries()`
- `public void decay()`
- `private Stream<GossipContainer.GossipEntry> unpack()`
- `private Collection<GossipContainer.GossipEntry> selectGossipsForTransfer(RandomSource p_217760_,  int p_217761_)`
- `private GossipContainer.EntityGossips getOrCreate(UUID p_26190_)`
- `public void transferFrom(GossipContainer p_217763_,  RandomSource p_217764_,  int p_217765_)`
- `public int getReputation(UUID p_26196_,  Predicate<GossipType> p_26197_)`
- `public long getCountForType(GossipType p_148163_,  DoublePredicate p_148164_)`
- `public void add(UUID p_26192_,  GossipType p_26193_,  int p_26194_)`
- `public void remove(UUID p_148176_,  GossipType p_148177_,  int p_148178_)`
- `public void remove(UUID p_148169_,  GossipType p_148170_)`
- `public void remove(GossipType p_148161_)`
- `public <T> T store(com.mojang.serialization.DynamicOps<T> p_262915_)`
- `public void update(com.mojang.serialization.Dynamic<?> p_26178_)`
- `private static int mergeValuesForTransfer(int p_26159_,  int p_26160_)`
- `private int mergeValuesForAddition(GossipType p_26168_,  int p_26169_,  int p_26170_)`

## GossipContainer.EntityGossips

*class* `net.minecraft.world.entity.ai.gossip.GossipContainer.EntityGossips`

Enclosing class: GossipContainer

### Fields
- `final it.unimi.dsi.fastutil.objects.Object2IntMap<GossipType> entries`

### Methods
- `public int weightedValue(Predicate<GossipType> p_26221_)`
- `public Stream<GossipContainer.GossipEntry> unpack(UUID p_26216_)`
- `public void decay()`
- `public boolean isEmpty()`
- `public void makeSureValueIsntTooLowOrTooHigh(GossipType p_26212_)`
- `public void remove(GossipType p_26227_)`

## GossipContainer.GossipEntry

*record* `net.minecraft.world.entity.ai.gossip.GossipContainer.GossipEntry`

Enclosing class: GossipContainer

### Fields
- `private final UUID target`
  The field for the target record component.
- `private final GossipType type`
  The field for the type record component.
- `private final int value`
  The field for the value record component.
- `public static final com.mojang.serialization.Codec<GossipContainer.GossipEntry> CODEC`
- `public static final com.mojang.serialization.Codec<List<GossipContainer.GossipEntry>> LIST_CODEC`

### Methods
- `public int weightedValue()`
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
- `public UUID target()`
  Returns the value of the target record component.
  - returns: the value of the target record component
- `public GossipType type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public int value()`
  Returns the value of the value record component.
  - returns: the value of the value record component
