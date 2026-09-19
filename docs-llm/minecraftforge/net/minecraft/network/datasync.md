# net.minecraft.network.datasync

- [DataParameter](#dataparameter)
- [DataSerializer](#dataserializer)
- [DataSerializers](#dataserializers)
- [EntityDataManager](#entitydatamanager)
- [EntityDataManager.DataEntry](#entitydatamanager.dataentry)
## DataParameter

*class* `net.minecraft.network.datasync.DataParameter`

### Methods
- `public int getId()`
- `public DataSerializer<T> getSerializer()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`

## DataSerializer

*interface* `net.minecraft.network.datasync.DataSerializer`

### Methods
- `void write(PacketBuffer buf,  T value)`
- `T read(PacketBuffer buf) throws java.io.IOException`
  - throws: java.io.IOException
- `DataParameter<T> createKey(int id)`
- `T copyValue(T value)`

## DataSerializers

*class* `net.minecraft.network.datasync.DataSerializers`

### Fields
- `public static final DataSerializer<java.lang.Byte> BYTE`
- `public static final DataSerializer<java.lang.Integer> VARINT`
- `public static final DataSerializer<java.lang.Float> FLOAT`
- `public static final DataSerializer<java.lang.String> STRING`
- `public static final DataSerializer<ITextComponent> TEXT_COMPONENT`
- `public static final DataSerializer<ItemStack> ITEM_STACK`
- `public static final DataSerializer<<any>> OPTIONAL_BLOCK_STATE`
- `public static final DataSerializer<java.lang.Boolean> BOOLEAN`
- `public static final DataSerializer<Rotations> ROTATIONS`
- `public static final DataSerializer<BlockPos> BLOCK_POS`
- `public static final DataSerializer<<any>> OPTIONAL_BLOCK_POS`
- `public static final DataSerializer<EnumFacing> FACING`
- `public static final DataSerializer<<any>> OPTIONAL_UNIQUE_ID`
- `public static final DataSerializer<NBTTagCompound> COMPOUND_TAG`

### Methods
- `@Deprecated public static void registerSerializer(DataSerializer<?> serializer)` (deprecated)
  Deprecated.
- `public static DataSerializer<?> getSerializer(int id)`
- `public static int getSerializerId(DataSerializer<?> serializer)`

## EntityDataManager

*class* `net.minecraft.network.datasync.EntityDataManager`

### Methods
- `public static <T> DataParameter<T> createKey(java.lang.Class<? extends Entity> clazz,  DataSerializer<T> serializer)`
- `public <T> void register(DataParameter<T> key,  T value)`
- `public <T> T get(DataParameter<T> key)`
- `public <T> void set(DataParameter<T> key,  T value)`
- `public <T> void setDirty(DataParameter<T> key)`
- `public boolean isDirty()`
- `public static void writeEntries(java.util.List<EntityDataManager.DataEntry<?>> entriesIn,  PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.util.List<EntityDataManager.DataEntry<?>> getDirty()`
- `public void writeEntries(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.util.List<EntityDataManager.DataEntry<?>> getAll()`
- `public static java.util.List<EntityDataManager.DataEntry<?>> readEntries(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void setEntryValues(java.util.List<EntityDataManager.DataEntry<?>> entriesIn)`
- `protected <T> void setEntryValue(EntityDataManager.DataEntry<T> target,  EntityDataManager.DataEntry<?> source)`
- `public boolean isEmpty()`
- `public void setClean()`

## EntityDataManager.DataEntry

*class* `net.minecraft.network.datasync.EntityDataManager.DataEntry`

Enclosing class: EntityDataManager

### Methods
- `public DataParameter<T> getKey()`
- `public void setValue(T valueIn)`
- `public T getValue()`
- `public boolean isDirty()`
- `public void setDirty(boolean dirtyIn)`
- `public EntityDataManager.DataEntry<T> copy()`
