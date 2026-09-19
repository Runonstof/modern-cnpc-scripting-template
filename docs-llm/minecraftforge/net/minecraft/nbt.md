# net.minecraft.nbt

- [CompressedStreamTools](#compressedstreamtools)
- [JsonToNBT](#jsontonbt)
- [NBTBase](#nbtbase)
- [NBTException](#nbtexception)
- [NBTPrimitive](#nbtprimitive)
- [NBTSizeTracker](#nbtsizetracker)
- [NBTTagByte](#nbttagbyte)
- [NBTTagByteArray](#nbttagbytearray)
- [NBTTagCompound](#nbttagcompound)
- [NBTTagDouble](#nbttagdouble)
- [NBTTagEnd](#nbttagend)
- [NBTTagFloat](#nbttagfloat)
- [NBTTagInt](#nbttagint)
- [NBTTagIntArray](#nbttagintarray)
- [NBTTagList](#nbttaglist)
- [NBTTagLong](#nbttaglong)
- [NBTTagLongArray](#nbttaglongarray)
- [NBTTagShort](#nbttagshort)
- [NBTTagString](#nbttagstring)
- [NBTUtil](#nbtutil)
## CompressedStreamTools

*class* `net.minecraft.nbt.CompressedStreamTools`

### Methods
- `public static NBTTagCompound readCompressed(java.io.InputStream is)  throws java.io.IOException`
  - throws: java.io.IOException
- `public static void writeCompressed(NBTTagCompound compound,  java.io.OutputStream outputStream)  throws java.io.IOException`
  - throws: java.io.IOException
- `public static void safeWrite(NBTTagCompound compound,  java.io.File fileIn)  throws java.io.IOException`
  - throws: java.io.IOException
- `public static NBTTagCompound read(java.io.DataInputStream inputStream)  throws java.io.IOException`
  - throws: java.io.IOException
- `public static NBTTagCompound read(java.io.DataInput input,  NBTSizeTracker accounter)  throws java.io.IOException`
  - throws: java.io.IOException
- `public static void write(NBTTagCompound compound,  java.io.DataOutput output)  throws java.io.IOException`
  - throws: java.io.IOException
- `public static void write(NBTTagCompound compound,  java.io.File fileIn)  throws java.io.IOException`
  - throws: java.io.IOException
- `public static NBTTagCompound read(java.io.File fileIn)  throws java.io.IOException`
  - throws: java.io.IOException

## JsonToNBT

*class* `net.minecraft.nbt.JsonToNBT`

### Methods
- `public static NBTTagCompound getTagFromJson(java.lang.String jsonString)  throws NBTException`
  - throws: NBTException
- `protected java.lang.String readKey()  throws NBTException`
  - throws: NBTException
- `protected NBTBase readTypedValue()  throws NBTException`
  - throws: NBTException
- `protected NBTBase readValue()  throws NBTException`
  - throws: NBTException
- `protected NBTBase readList()  throws NBTException`
  - throws: NBTException
- `protected NBTTagCompound readStruct()  throws NBTException`
  - throws: NBTException
- `protected boolean isAllowedInKey(char charIn)`

## NBTBase

*class* `net.minecraft.nbt.NBTBase`

### Fields
- `public static final java.lang.String[] NBT_TYPES`

### Methods
- `public abstract java.lang.String toString()`
- `public abstract byte getId()`
- `protected static NBTBase createNewByType(byte id)`
- `public static java.lang.String getTagTypeName(int p_193581_0_)`
- `public abstract NBTBase copy()`
- `public boolean hasNoTags()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `protected java.lang.String getString()`

## NBTException

*class* `net.minecraft.nbt.NBTException`

All Implemented Interfaces: java.io.Serializable

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## NBTPrimitive

*class* `net.minecraft.nbt.NBTPrimitive`

### Inherited fields
- from `net.minecraft.nbt.NBTBase`: `NBT_TYPES`

### Methods
- `public abstract long getLong()`
- `public abstract int getInt()`
- `public abstract short getShort()`
- `public abstract byte getByte()`
- `public abstract double getDouble()`
- `public abstract float getFloat()`

### Inherited methods
- from `net.minecraft.nbt.NBTBase`: `copy`, `createNewByType`, `equals`, `getId`, `getString`, `getTagTypeName`, `hashCode`, `hasNoTags`, `toString`

## NBTSizeTracker

*class* `net.minecraft.nbt.NBTSizeTracker`

### Fields
- `public static final NBTSizeTracker INFINITE`

### Methods
- `public void read(long bits)`
- `public static void readUTF(NBTSizeTracker tracker,  java.lang.String data)`

## NBTTagByte

*class* `net.minecraft.nbt.NBTTagByte`

### Inherited fields
- from `net.minecraft.nbt.NBTBase`: `NBT_TYPES`

### Methods
- `public byte getId()`
- `public java.lang.String toString()`
- `public NBTTagByte copy()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public long getLong()`
- `public int getInt()`
- `public short getShort()`
- `public byte getByte()`
- `public double getDouble()`
- `public float getFloat()`

### Inherited methods
- from `net.minecraft.nbt.NBTBase`: `createNewByType`, `getString`, `getTagTypeName`, `hasNoTags`

## NBTTagByteArray

*class* `net.minecraft.nbt.NBTTagByteArray`

### Inherited fields
- from `net.minecraft.nbt.NBTBase`: `NBT_TYPES`

### Methods
- `public byte getId()`
- `public java.lang.String toString()`
- `public NBTBase copy()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public byte[] getByteArray()`

### Inherited methods
- from `net.minecraft.nbt.NBTBase`: `createNewByType`, `getString`, `getTagTypeName`, `hasNoTags`

## NBTTagCompound

*class* `net.minecraft.nbt.NBTTagCompound`

### Inherited fields
- from `net.minecraft.nbt.NBTBase`: `NBT_TYPES`

### Methods
- `public java.util.Set<java.lang.String> getKeySet()`
- `public byte getId()`
- `public int getSize()`
- `public void setTag(java.lang.String key,  NBTBase value)`
- `public void setByte(java.lang.String key,  byte value)`
- `public void setShort(java.lang.String key,  short value)`
- `public void setInteger(java.lang.String key,  int value)`
- `public void setLong(java.lang.String key,  long value)`
- `public void setUniqueId(java.lang.String key,  java.util.UUID value)`
- `public java.util.UUID getUniqueId(java.lang.String key)`
- `public boolean hasUniqueId(java.lang.String key)`
- `public void setFloat(java.lang.String key,  float value)`
- `public void setDouble(java.lang.String key,  double value)`
- `public void setString(java.lang.String key,  java.lang.String value)`
- `public void setByteArray(java.lang.String key,  byte[] value)`
- `public void setIntArray(java.lang.String key,  int[] value)`
- `public void setBoolean(java.lang.String key,  boolean value)`
- `public NBTBase getTag(java.lang.String key)`
- `public byte getTagId(java.lang.String key)`
- `public boolean hasKey(java.lang.String key)`
- `public boolean hasKey(java.lang.String key,  int type)`
- `public byte getByte(java.lang.String key)`
- `public short getShort(java.lang.String key)`
- `public int getInteger(java.lang.String key)`
- `public long getLong(java.lang.String key)`
- `public float getFloat(java.lang.String key)`
- `public double getDouble(java.lang.String key)`
- `public java.lang.String getString(java.lang.String key)`
- `public byte[] getByteArray(java.lang.String key)`
- `public int[] getIntArray(java.lang.String key)`
- `public NBTTagCompound getCompoundTag(java.lang.String key)`
- `public NBTTagList getTagList(java.lang.String key,  int type)`
- `public boolean getBoolean(java.lang.String key)`
- `public void removeTag(java.lang.String key)`
- `public java.lang.String toString()`
- `public boolean hasNoTags()`
- `public NBTTagCompound copy()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public void merge(NBTTagCompound other)`
- `protected static java.lang.String handleEscape(java.lang.String p_193582_0_)`

### Inherited methods
- from `net.minecraft.nbt.NBTBase`: `createNewByType`, `getString`, `getTagTypeName`

## NBTTagDouble

*class* `net.minecraft.nbt.NBTTagDouble`

### Inherited fields
- from `net.minecraft.nbt.NBTBase`: `NBT_TYPES`

### Methods
- `public byte getId()`
- `public java.lang.String toString()`
- `public NBTTagDouble copy()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public long getLong()`
- `public int getInt()`
- `public short getShort()`
- `public byte getByte()`
- `public double getDouble()`
- `public float getFloat()`

### Inherited methods
- from `net.minecraft.nbt.NBTBase`: `createNewByType`, `getString`, `getTagTypeName`, `hasNoTags`

## NBTTagEnd

*class* `net.minecraft.nbt.NBTTagEnd`

### Inherited fields
- from `net.minecraft.nbt.NBTBase`: `NBT_TYPES`

### Methods
- `public byte getId()`
- `public java.lang.String toString()`
- `public NBTTagEnd copy()`

### Inherited methods
- from `net.minecraft.nbt.NBTBase`: `createNewByType`, `equals`, `getString`, `getTagTypeName`, `hashCode`, `hasNoTags`

## NBTTagFloat

*class* `net.minecraft.nbt.NBTTagFloat`

### Inherited fields
- from `net.minecraft.nbt.NBTBase`: `NBT_TYPES`

### Methods
- `public byte getId()`
- `public java.lang.String toString()`
- `public NBTTagFloat copy()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public long getLong()`
- `public int getInt()`
- `public short getShort()`
- `public byte getByte()`
- `public double getDouble()`
- `public float getFloat()`

### Inherited methods
- from `net.minecraft.nbt.NBTBase`: `createNewByType`, `getString`, `getTagTypeName`, `hasNoTags`

## NBTTagInt

*class* `net.minecraft.nbt.NBTTagInt`

### Inherited fields
- from `net.minecraft.nbt.NBTBase`: `NBT_TYPES`

### Methods
- `public byte getId()`
- `public java.lang.String toString()`
- `public NBTTagInt copy()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public long getLong()`
- `public int getInt()`
- `public short getShort()`
- `public byte getByte()`
- `public double getDouble()`
- `public float getFloat()`

### Inherited methods
- from `net.minecraft.nbt.NBTBase`: `createNewByType`, `getString`, `getTagTypeName`, `hasNoTags`

## NBTTagIntArray

*class* `net.minecraft.nbt.NBTTagIntArray`

### Inherited fields
- from `net.minecraft.nbt.NBTBase`: `NBT_TYPES`

### Methods
- `public byte getId()`
- `public java.lang.String toString()`
- `public NBTTagIntArray copy()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public int[] getIntArray()`

### Inherited methods
- from `net.minecraft.nbt.NBTBase`: `createNewByType`, `getString`, `getTagTypeName`, `hasNoTags`

## NBTTagList

*class* `net.minecraft.nbt.NBTTagList`

All Implemented Interfaces: java.lang.Iterable<NBTBase>

### Inherited fields
- from `net.minecraft.nbt.NBTBase`: `NBT_TYPES`

### Methods
- `public byte getId()`
- `public java.lang.String toString()`
- `public void appendTag(NBTBase nbt)`
- `public void set(int idx,  NBTBase nbt)`
- `public NBTBase removeTag(int i)`
- `public boolean hasNoTags()`
- `public NBTTagCompound getCompoundTagAt(int i)`
- `public int getIntAt(int p_186858_1_)`
- `public int[] getIntArrayAt(int i)`
- `public double getDoubleAt(int i)`
- `public float getFloatAt(int i)`
- `public java.lang.String getStringTagAt(int i)`
- `public NBTBase get(int idx)`
- `public int tagCount()`
- `public NBTTagList copy()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public int getTagType()`
- `public java.util.Iterator<NBTBase> iterator()`

### Inherited methods
- from `net.minecraft.nbt.NBTBase`: `createNewByType`, `getString`, `getTagTypeName`
- from `java.lang.Iterable`: `forEach`, `spliterator`

## NBTTagLong

*class* `net.minecraft.nbt.NBTTagLong`

### Inherited fields
- from `net.minecraft.nbt.NBTBase`: `NBT_TYPES`

### Methods
- `public byte getId()`
- `public java.lang.String toString()`
- `public NBTTagLong copy()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public long getLong()`
- `public int getInt()`
- `public short getShort()`
- `public byte getByte()`
- `public double getDouble()`
- `public float getFloat()`

### Inherited methods
- from `net.minecraft.nbt.NBTBase`: `createNewByType`, `getString`, `getTagTypeName`, `hasNoTags`

## NBTTagLongArray

*class* `net.minecraft.nbt.NBTTagLongArray`

### Inherited fields
- from `net.minecraft.nbt.NBTBase`: `NBT_TYPES`

### Methods
- `public byte getId()`
- `public java.lang.String toString()`
- `public NBTTagLongArray copy()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`

### Inherited methods
- from `net.minecraft.nbt.NBTBase`: `createNewByType`, `getString`, `getTagTypeName`, `hasNoTags`

## NBTTagShort

*class* `net.minecraft.nbt.NBTTagShort`

### Inherited fields
- from `net.minecraft.nbt.NBTBase`: `NBT_TYPES`

### Methods
- `public byte getId()`
- `public java.lang.String toString()`
- `public NBTTagShort copy()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public long getLong()`
- `public int getInt()`
- `public short getShort()`
- `public byte getByte()`
- `public double getDouble()`
- `public float getFloat()`

### Inherited methods
- from `net.minecraft.nbt.NBTBase`: `createNewByType`, `getString`, `getTagTypeName`, `hasNoTags`

## NBTTagString

*class* `net.minecraft.nbt.NBTTagString`

### Inherited fields
- from `net.minecraft.nbt.NBTBase`: `NBT_TYPES`

### Methods
- `public byte getId()`
- `public java.lang.String toString()`
- `public NBTTagString copy()`
- `public boolean hasNoTags()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public java.lang.String getString()`
- `public static java.lang.String quoteAndEscape(java.lang.String p_193588_0_)`

### Inherited methods
- from `net.minecraft.nbt.NBTBase`: `createNewByType`, `getTagTypeName`

## NBTUtil

*class* `net.minecraft.nbt.NBTUtil`

### Methods
- `public static GameProfile readGameProfileFromNBT(NBTTagCompound compound)`
- `public static NBTTagCompound writeGameProfile(NBTTagCompound tagCompound,  GameProfile profile)`
- `public static boolean areNBTEquals(NBTBase nbt1,  NBTBase nbt2,  boolean compareTagList)`
- `public static NBTTagCompound createUUIDTag(java.util.UUID uuid)`
- `public static java.util.UUID getUUIDFromTag(NBTTagCompound tag)`
- `public static BlockPos getPosFromTag(NBTTagCompound tag)`
- `public static NBTTagCompound createPosTag(BlockPos pos)`
- `public static IBlockState readBlockState(NBTTagCompound tag)`
- `public static NBTTagCompound writeBlockState(NBTTagCompound tag,  IBlockState state)`
