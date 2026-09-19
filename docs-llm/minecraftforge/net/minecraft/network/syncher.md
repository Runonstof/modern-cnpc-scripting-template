# net.minecraft.network.syncher

- [EntityDataAccessor](#entitydataaccessor)
- [EntityDataSerializer](#entitydataserializer)
- [EntityDataSerializer.ForValueType](#entitydataserializer.forvaluetype)
- [EntityDataSerializers](#entitydataserializers)
- [SynchedEntityData](#synchedentitydata)
- [SynchedEntityData.DataItem](#synchedentitydata.dataitem)
- [SynchedEntityData.DataValue](#synchedentitydata.datavalue)
## EntityDataAccessor

*class* `net.minecraft.network.syncher.EntityDataAccessor`

### Fields
- `private final int id`
- `private final EntityDataSerializer<T> serializer`

### Methods
- `public int getId()`
- `public EntityDataSerializer<T> getSerializer()`
- `public boolean equals(Object p_135018_)`
- `public int hashCode()`
- `public String toString()`

## EntityDataSerializer

*interface* `net.minecraft.network.syncher.EntityDataSerializer`

### Methods
- `void write(FriendlyByteBuf p_135025_,  T p_135026_)`
- `T read(FriendlyByteBuf p_135024_)`
- `default EntityDataAccessor<T> createAccessor(int p_135022_)`
- `T copy(T p_135023_)`
- `static <T> EntityDataSerializer<T> simple(FriendlyByteBuf.Writer<T> p_238096_,  FriendlyByteBuf.Reader<T> p_238097_)`
- `static <T> EntityDataSerializer<Optional<T>> optional(FriendlyByteBuf.Writer<T> p_238099_,  FriendlyByteBuf.Reader<T> p_238100_)`
- `static <T extends Enum<T>> EntityDataSerializer<T> simpleEnum(Class<T> p_238091_)`
- `static <T> EntityDataSerializer<T> simpleId(IdMap<T> p_238082_)`

## EntityDataSerializer.ForValueType

*interface* `net.minecraft.network.syncher.EntityDataSerializer.ForValueType`

All Superinterfaces: EntityDataSerializer<T>

Enclosing interface: EntityDataSerializer<T>

### Methods
- `default T copy(T p_238112_)`

### Inherited methods
- from `net.minecraft.network.syncher.EntityDataSerializer`: `createAccessor`, `read`, `write`

## EntityDataSerializers

*class* `net.minecraft.network.syncher.EntityDataSerializers`

### Fields
- `private static final CrudeIncrementalIntIdentityHashBiMap<EntityDataSerializer<?>> SERIALIZERS`
- `public static final EntityDataSerializer<Byte> BYTE`
- `public static final EntityDataSerializer<Integer> INT`
- `public static final EntityDataSerializer<Long> LONG`
- `public static final EntityDataSerializer<Float> FLOAT`
- `public static final EntityDataSerializer<String> STRING`
- `public static final EntityDataSerializer<Component> COMPONENT`
- `public static final EntityDataSerializer<Optional<Component>> OPTIONAL_COMPONENT`
- `public static final EntityDataSerializer<ItemStack> ITEM_STACK`
- `public static final EntityDataSerializer<BlockState> BLOCK_STATE`
- `public static final EntityDataSerializer<Optional<BlockState>> OPTIONAL_BLOCK_STATE`
- `public static final EntityDataSerializer<Boolean> BOOLEAN`
- `public static final EntityDataSerializer<ParticleOptions> PARTICLE`
- `public static final EntityDataSerializer<Rotations> ROTATIONS`
- `public static final EntityDataSerializer<BlockPos> BLOCK_POS`
- `public static final EntityDataSerializer<Optional<BlockPos>> OPTIONAL_BLOCK_POS`
- `public static final EntityDataSerializer<Direction> DIRECTION`
- `public static final EntityDataSerializer<Optional<UUID>> OPTIONAL_UUID`
- `public static final EntityDataSerializer<Optional<GlobalPos>> OPTIONAL_GLOBAL_POS`
- `public static final EntityDataSerializer<CompoundTag> COMPOUND_TAG`
- `public static final EntityDataSerializer<VillagerData> VILLAGER_DATA`
- `public static final EntityDataSerializer<OptionalInt> OPTIONAL_UNSIGNED_INT`
- `public static final EntityDataSerializer<Pose> POSE`
- `public static final EntityDataSerializer<CatVariant> CAT_VARIANT`
- `public static final EntityDataSerializer<FrogVariant> FROG_VARIANT`
- `public static final EntityDataSerializer<Holder<PaintingVariant>> PAINTING_VARIANT`
- `public static final EntityDataSerializer<Sniffer.State> SNIFFER_STATE`
- `public static final EntityDataSerializer<org.joml.Vector3f> VECTOR3`
- `public static final EntityDataSerializer<org.joml.Quaternionf> QUATERNION`

### Methods
- `public static void registerSerializer(EntityDataSerializer<?> p_135051_)`
- `@Nullable public static EntityDataSerializer<?> getSerializer(int p_135049_)`
- `public static int getSerializedId(EntityDataSerializer<?> p_135053_)`

## SynchedEntityData

*class* `net.minecraft.network.syncher.SynchedEntityData`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final it.unimi.dsi.fastutil.objects.Object2IntMap<Class<? extends Entity>> ENTITY_ID_POOL`
- `private static final int MAX_ID_VALUE` (= 254)
- `private final Entity entity`
- `private final it.unimi.dsi.fastutil.ints.Int2ObjectMap<SynchedEntityData.DataItem<?>> itemsById`
- `private final ReadWriteLock lock`
- `private boolean isDirty`

### Methods
- `public static <T> EntityDataAccessor<T> defineId(Class<? extends Entity> p_135354_,  EntityDataSerializer<T> p_135355_)`
- `public <T> void define(EntityDataAccessor<T> p_135373_,  T p_135374_)`
- `private <T> void createDataItem(EntityDataAccessor<T> p_135386_,  T p_135387_)`
- `public <T> boolean hasItem(EntityDataAccessor<T> p_286294_)`
- `private <T> SynchedEntityData.DataItem<T> getItem(EntityDataAccessor<T> p_135380_)`
- `public <T> T get(EntityDataAccessor<T> p_135371_)`
- `public <T> void set(EntityDataAccessor<T> p_135382_,  T p_135383_)`
- `public <T> void set(EntityDataAccessor<T> p_276368_,  T p_276363_,  boolean p_276370_)`
- `public boolean isDirty()`
- `@Nullable public List<SynchedEntityData.DataValue<?>> packDirty()`
- `@Nullable public List<SynchedEntityData.DataValue<?>> getNonDefaultValues()`
- `public void assignValues(List<SynchedEntityData.DataValue<?>> p_135357_)`
- `private <T> void assignValue(SynchedEntityData.DataItem<T> p_135376_,  SynchedEntityData.DataValue<?> p_254484_)`
- `public boolean isEmpty()`

## SynchedEntityData.DataItem

*class* `net.minecraft.network.syncher.SynchedEntityData.DataItem`

Enclosing class: SynchedEntityData

### Fields
- `final EntityDataAccessor<T> accessor`
- `T value`
- `private final T initialValue`
- `private boolean dirty`

### Methods
- `public EntityDataAccessor<T> getAccessor()`
- `public void setValue(T p_135398_)`
- `public T getValue()`
- `public boolean isDirty()`
- `public void setDirty(boolean p_135402_)`
- `public boolean isSetToDefault()`
- `public SynchedEntityData.DataValue<T> value()`

## SynchedEntityData.DataValue

*record* `net.minecraft.network.syncher.SynchedEntityData.DataValue`

Enclosing class: SynchedEntityData

### Fields
- `private final int id`
  The field for the id record component.
- `private final EntityDataSerializer<T> serializer`
  The field for the serializer record component.
- `private final T value`
  The field for the value record component.

### Methods
- `public static <T> SynchedEntityData.DataValue<T> create(EntityDataAccessor<T> p_254543_,  T p_254138_)`
- `public void write(FriendlyByteBuf p_253709_)`
- `public static SynchedEntityData.DataValue<?> read(FriendlyByteBuf p_254314_,  int p_254356_)`
- `private static <T> SynchedEntityData.DataValue<T> read(FriendlyByteBuf p_254224_,  int p_253899_,  EntityDataSerializer<T> p_254222_)`
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
- `public int id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public EntityDataSerializer<T> serializer()`
  Returns the value of the serializer record component.
  - returns: the value of the serializer record component
- `public T value()`
  Returns the value of the value record component.
  - returns: the value of the value record component
