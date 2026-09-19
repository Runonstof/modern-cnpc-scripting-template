# net.minecraft.nbt

- [ByteArrayTag](#bytearraytag)
- [ByteTag](#bytetag)
- [ByteTag.Cache](#bytetag.cache)
- [Class StreamTagVisitor.EntryResult](#class-streamtagvisitor.entryresult)
- [Class StreamTagVisitor.ValueResult](#class-streamtagvisitor.valueresult)
- [CollectionTag](#collectiontag)
- [CompoundTag](#compoundtag)
- [DoubleTag](#doubletag)
- [EndTag](#endtag)
- [FloatTag](#floattag)
- [IntArrayTag](#intarraytag)
- [IntTag](#inttag)
- [IntTag.Cache](#inttag.cache)
- [ListTag](#listtag)
- [LongArrayTag](#longarraytag)
- [LongTag](#longtag)
- [LongTag.Cache](#longtag.cache)
- [NbtAccounter](#nbtaccounter)
- [NbtAccounterException](#nbtaccounterexception)
- [NbtIo](#nbtio)
- [NbtOps](#nbtops)
- [NbtOps.ByteListCollector](#nbtops.bytelistcollector)
- [NbtOps.HeterogenousListCollector](#nbtops.heterogenouslistcollector)
- [NbtOps.HomogenousListCollector](#nbtops.homogenouslistcollector)
- [NbtOps.InitialListCollector](#nbtops.initiallistcollector)
- [NbtOps.IntListCollector](#nbtops.intlistcollector)
- [NbtOps.ListCollector](#nbtops.listcollector)
- [NbtOps.LongListCollector](#nbtops.longlistcollector)
- [NbtOps.NbtRecordBuilder](#nbtops.nbtrecordbuilder)
- [NbtUtils](#nbtutils)
- [NumericTag](#numerictag)
- [ShortTag](#shorttag)
- [ShortTag.Cache](#shorttag.cache)
- [SnbtPrinterTagVisitor](#snbtprintertagvisitor)
- [StreamTagVisitor](#streamtagvisitor)
- [StringTag](#stringtag)
- [StringTagVisitor](#stringtagvisitor)
- [Tag](#tag)
- [TagParser](#tagparser)
- [TagType](#tagtype)
- [TagType.StaticSize](#tagtype.staticsize)
- [TagType.VariableSize](#tagtype.variablesize)
- [TagTypes](#tagtypes)
- [TagVisitor](#tagvisitor)
- [TextComponentTagVisitor](#textcomponenttagvisitor)
## ByteArrayTag

*class* `net.minecraft.nbt.ByteArrayTag`

### Fields
- `private static final int SELF_SIZE_IN_BYTES` (= 24)
- `public static final TagType<ByteArrayTag> TYPE`
- `private byte[] data`

### Inherited fields
- from `java.util.AbstractList`: `modCount`
- from `net.minecraft.nbt.Tag`: `ARRAY_HEADER`, `MAX_DEPTH`, `OBJECT_HEADER`, `OBJECT_REFERENCE`, `STRING_SIZE`, `TAG_ANY_NUMERIC`, `TAG_BYTE`, `TAG_BYTE_ARRAY`, `TAG_COMPOUND`, `TAG_DOUBLE`, `TAG_END`, `TAG_FLOAT`, `TAG_INT`, `TAG_INT_ARRAY`, `TAG_LIST`, `TAG_LONG`, `TAG_LONG_ARRAY`, `TAG_SHORT`, `TAG_STRING`

### Methods
- `private static byte[] toArray(List<Byte> p_128207_)`
- `public void write(DataOutput p_128202_)  throws IOException`
  - throws: IOException
- `public int sizeInBytes()`
- `public byte getId()`
- `public TagType<ByteArrayTag> getType()`
- `public String toString()`
- `public Tag copy()`
- `public boolean equals(Object p_128233_)`
- `public int hashCode()`
- `public void accept(TagVisitor p_177839_)`
- `public byte[] getAsByteArray()`
- `public int size()`
- `public ByteTag get(int p_128194_)`
- `public ByteTag set(int p_128196_,  ByteTag p_128197_)`
- `public void add(int p_128215_,  ByteTag p_128216_)`
- `public boolean setTag(int p_128199_,  Tag p_128200_)`
- `public boolean addTag(int p_128218_,  Tag p_128219_)`
- `public ByteTag remove(int p_128213_)`
- `public byte getElementType()`
- `public void clear()`
- `public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197429_)`

### Inherited methods
- from `java.util.AbstractList`: `add`, `addAll`, `indexOf`, `iterator`, `lastIndexOf`, `listIterator`, `listIterator`, `removeRange`, `subList`
- from `java.util.AbstractCollection`: `addAll`, `contains`, `containsAll`, `isEmpty`, `remove`, `removeAll`, `retainAll`, `toArray`, `toArray`
- from `java.util.Collection`: `parallelStream`, `removeIf`, `stream`, `toArray`
- from `java.lang.Iterable`: `forEach`
- from `java.util.List`: `addAll`, `contains`, `containsAll`, `isEmpty`, `remove`, `removeAll`, `replaceAll`, `retainAll`, `sort`, `spliterator`, `toArray`, `toArray`
- from `net.minecraft.nbt.Tag`: `acceptAsRoot`, `getAsString`

## ByteTag

*class* `net.minecraft.nbt.ByteTag`

### Fields
- `private static final int SELF_SIZE_IN_BYTES` (= 9)
- `public static final TagType<ByteTag> TYPE`
- `public static final ByteTag ZERO`
- `public static final ByteTag ONE`
- `private final byte data`

### Inherited fields
- from `net.minecraft.nbt.Tag`: `ARRAY_HEADER`, `MAX_DEPTH`, `OBJECT_HEADER`, `OBJECT_REFERENCE`, `STRING_SIZE`, `TAG_ANY_NUMERIC`, `TAG_BYTE`, `TAG_BYTE_ARRAY`, `TAG_COMPOUND`, `TAG_DOUBLE`, `TAG_END`, `TAG_FLOAT`, `TAG_INT`, `TAG_INT_ARRAY`, `TAG_LIST`, `TAG_LONG`, `TAG_LONG_ARRAY`, `TAG_SHORT`, `TAG_STRING`

### Methods
- `public static ByteTag valueOf(byte p_128267_)`
- `public static ByteTag valueOf(boolean p_128274_)`
- `public void write(DataOutput p_128269_)  throws IOException`
  - throws: IOException
- `public int sizeInBytes()`
- `public byte getId()`
- `public TagType<ByteTag> getType()`
- `public ByteTag copy()`
- `public boolean equals(Object p_128280_)`
- `public int hashCode()`
- `public void accept(TagVisitor p_177842_)`
- `public long getAsLong()`
- `public int getAsInt()`
- `public short getAsShort()`
- `public byte getAsByte()`
- `public double getAsDouble()`
- `public float getAsFloat()`
- `public Number getAsNumber()`
- `public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197436_)`

### Inherited methods
- from `net.minecraft.nbt.NumericTag`: `toString`
- from `net.minecraft.nbt.Tag`: `acceptAsRoot`, `getAsString`

## ByteTag.Cache

*class* `net.minecraft.nbt.ByteTag.Cache`

Enclosing class: ByteTag

### Fields
- `static final ByteTag[] cache`

## Class StreamTagVisitor.EntryResult

*enum* `net.minecraft.nbt.Class StreamTagVisitor.EntryResult`

Enclosing interface: StreamTagVisitor

### Methods
- `public static StreamTagVisitor.EntryResult[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static StreamTagVisitor.EntryResult valueOf(String name)`
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

## Class StreamTagVisitor.ValueResult

*enum* `net.minecraft.nbt.Class StreamTagVisitor.ValueResult`

Enclosing interface: StreamTagVisitor

### Methods
- `public static StreamTagVisitor.ValueResult[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static StreamTagVisitor.ValueResult valueOf(String name)`
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

## CollectionTag

*class* `net.minecraft.nbt.CollectionTag`

### Inherited fields
- from `java.util.AbstractList`: `modCount`
- from `net.minecraft.nbt.Tag`: `ARRAY_HEADER`, `MAX_DEPTH`, `OBJECT_HEADER`, `OBJECT_REFERENCE`, `STRING_SIZE`, `TAG_ANY_NUMERIC`, `TAG_BYTE`, `TAG_BYTE_ARRAY`, `TAG_COMPOUND`, `TAG_DOUBLE`, `TAG_END`, `TAG_FLOAT`, `TAG_INT`, `TAG_INT_ARRAY`, `TAG_LIST`, `TAG_LONG`, `TAG_LONG_ARRAY`, `TAG_SHORT`, `TAG_STRING`

### Methods
- `public abstract T set(int p_128318_,  T p_128319_)`
- `public abstract void add(int p_128315_,  T p_128316_)`
- `public abstract T remove(int p_128313_)`
- `public abstract boolean setTag(int p_128305_,  Tag p_128306_)`
- `public abstract boolean addTag(int p_128310_,  Tag p_128311_)`
- `public abstract byte getElementType()`

### Inherited methods
- from `java.util.AbstractList`: `add`, `addAll`, `clear`, `equals`, `get`, `hashCode`, `indexOf`, `iterator`, `lastIndexOf`, `listIterator`, `listIterator`, `removeRange`, `subList`
- from `java.util.AbstractCollection`: `addAll`, `contains`, `containsAll`, `isEmpty`, `remove`, `removeAll`, `retainAll`, `size`, `toArray`, `toArray`, `toString`
- from `java.util.Collection`: `parallelStream`, `removeIf`, `stream`, `toArray`
- from `java.lang.Iterable`: `forEach`
- from `java.util.List`: `addAll`, `contains`, `containsAll`, `isEmpty`, `remove`, `removeAll`, `replaceAll`, `retainAll`, `size`, `sort`, `spliterator`, `toArray`, `toArray`
- from `net.minecraft.nbt.Tag`: `accept`, `accept`, `acceptAsRoot`, `copy`, `getAsString`, `getId`, `getType`, `sizeInBytes`, `toString`, `write`

## CompoundTag

*class* `net.minecraft.nbt.CompoundTag`

### Fields
- `public static final com.mojang.serialization.Codec<CompoundTag> CODEC`
- `private static final int SELF_SIZE_IN_BYTES` (= 48)
- `private static final int MAP_ENTRY_SIZE_IN_BYTES` (= 32)
- `public static final TagType<CompoundTag> TYPE`
- `private final Map<String,Tag> tags`

### Inherited fields
- from `net.minecraft.nbt.Tag`: `ARRAY_HEADER`, `MAX_DEPTH`, `OBJECT_HEADER`, `OBJECT_REFERENCE`, `STRING_SIZE`, `TAG_ANY_NUMERIC`, `TAG_BYTE`, `TAG_BYTE_ARRAY`, `TAG_COMPOUND`, `TAG_DOUBLE`, `TAG_END`, `TAG_FLOAT`, `TAG_INT`, `TAG_INT_ARRAY`, `TAG_LIST`, `TAG_LONG`, `TAG_LONG_ARRAY`, `TAG_SHORT`, `TAG_STRING`

### Methods
- `public static INBTBuilder.Builder builder()`
- `public void write(DataOutput p_128341_)  throws IOException`
  - throws: IOException
- `public int sizeInBytes()`
- `public Set<String> getAllKeys()`
- `public byte getId()`
- `public TagType<CompoundTag> getType()`
- `public int size()`
- `@Nullable public Tag put(String p_128366_,  Tag p_128367_)`
- `public void putByte(String p_128345_,  byte p_128346_)`
- `public void putShort(String p_128377_,  short p_128378_)`
- `public void putInt(String p_128406_,  int p_128407_)`
- `public void putLong(String p_128357_,  long p_128358_)`
- `public void putUUID(String p_128363_,  UUID p_128364_)`
- `public UUID getUUID(String p_128343_)`
- `public boolean hasUUID(String p_128404_)`
- `public void putFloat(String p_128351_,  float p_128352_)`
- `public void putDouble(String p_128348_,  double p_128349_)`
- `public void putString(String p_128360_,  String p_128361_)`
- `public void putByteArray(String p_128383_,  byte[] p_128384_)`
- `public void putByteArray(String p_177854_,  List<Byte> p_177855_)`
- `public void putIntArray(String p_128386_,  int[] p_128387_)`
- `public void putIntArray(String p_128409_,  List<Integer> p_128410_)`
- `public void putLongArray(String p_128389_,  long[] p_128390_)`
- `public void putLongArray(String p_128429_,  List<Long> p_128430_)`
- `public void putBoolean(String p_128380_,  boolean p_128381_)`
- `@Nullable public Tag get(String p_128424_)`
- `public byte getTagType(String p_128436_)`
- `public boolean contains(String p_128442_)`
- `public boolean contains(String p_128426_,  int p_128427_)`
- `public byte getByte(String p_128446_)`
- `public short getShort(String p_128449_)`
- `public int getInt(String p_128452_)`
- `public long getLong(String p_128455_)`
- `public float getFloat(String p_128458_)`
- `public double getDouble(String p_128460_)`
- `public String getString(String p_128462_)`
- `public byte[] getByteArray(String p_128464_)`
- `public int[] getIntArray(String p_128466_)`
- `public long[] getLongArray(String p_128468_)`
- `public CompoundTag getCompound(String p_128470_)`
- `public ListTag getList(String p_128438_,  int p_128439_)`
- `public boolean getBoolean(String p_128472_)`
- `public void remove(String p_128474_)`
- `public String toString()`
- `public boolean isEmpty()`
- `private CrashReport createReport(String p_128373_,  TagType<?> p_128374_,  ClassCastException p_128375_)`
- `public CompoundTag copy()`
- `public boolean equals(Object p_128444_)`
- `public int hashCode()`
- `private static void writeNamedTag(String p_128369_,  Tag p_128370_,  DataOutput p_128371_)  throws IOException`
  - throws: IOException
- `static Tag readNamedTagData(TagType<?> p_128414_,  String p_128415_,  DataInput p_128416_,  NbtAccounter p_128418_)`
- `public CompoundTag merge(CompoundTag p_128392_)`
- `public void accept(TagVisitor p_177857_)`
- `protected Map<String,Tag> entries()`
- `public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197442_)`

### Inherited methods
- from `net.minecraft.nbt.Tag`: `acceptAsRoot`, `getAsString`

## DoubleTag

*class* `net.minecraft.nbt.DoubleTag`

### Fields
- `private static final int SELF_SIZE_IN_BYTES` (= 16)
- `public static final DoubleTag ZERO`
- `public static final TagType<DoubleTag> TYPE`
- `private final double data`

### Inherited fields
- from `net.minecraft.nbt.Tag`: `ARRAY_HEADER`, `MAX_DEPTH`, `OBJECT_HEADER`, `OBJECT_REFERENCE`, `STRING_SIZE`, `TAG_ANY_NUMERIC`, `TAG_BYTE`, `TAG_BYTE_ARRAY`, `TAG_COMPOUND`, `TAG_DOUBLE`, `TAG_END`, `TAG_FLOAT`, `TAG_INT`, `TAG_INT_ARRAY`, `TAG_LIST`, `TAG_LONG`, `TAG_LONG_ARRAY`, `TAG_SHORT`, `TAG_STRING`

### Methods
- `public static DoubleTag valueOf(double p_128501_)`
- `public void write(DataOutput p_128503_)  throws IOException`
  - throws: IOException
- `public int sizeInBytes()`
- `public byte getId()`
- `public TagType<DoubleTag> getType()`
- `public DoubleTag copy()`
- `public boolean equals(Object p_128512_)`
- `public int hashCode()`
- `public void accept(TagVisitor p_177860_)`
- `public long getAsLong()`
- `public int getAsInt()`
- `public short getAsShort()`
- `public byte getAsByte()`
- `public double getAsDouble()`
- `public float getAsFloat()`
- `public Number getAsNumber()`
- `public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197452_)`

### Inherited methods
- from `net.minecraft.nbt.NumericTag`: `toString`
- from `net.minecraft.nbt.Tag`: `acceptAsRoot`, `getAsString`

## EndTag

*class* `net.minecraft.nbt.EndTag`

### Fields
- `private static final int SELF_SIZE_IN_BYTES` (= 8)
- `public static final TagType<EndTag> TYPE`
- `public static final EndTag INSTANCE`

### Inherited fields
- from `net.minecraft.nbt.Tag`: `ARRAY_HEADER`, `MAX_DEPTH`, `OBJECT_HEADER`, `OBJECT_REFERENCE`, `STRING_SIZE`, `TAG_ANY_NUMERIC`, `TAG_BYTE`, `TAG_BYTE_ARRAY`, `TAG_COMPOUND`, `TAG_DOUBLE`, `TAG_END`, `TAG_FLOAT`, `TAG_INT`, `TAG_INT_ARRAY`, `TAG_LIST`, `TAG_LONG`, `TAG_LONG_ARRAY`, `TAG_SHORT`, `TAG_STRING`

### Methods
- `public void write(DataOutput p_128539_)  throws IOException`
  - throws: IOException
- `public int sizeInBytes()`
- `public byte getId()`
- `public TagType<EndTag> getType()`
- `public String toString()`
- `public EndTag copy()`
- `public void accept(TagVisitor p_177863_)`
- `public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197458_)`

### Inherited methods
- from `net.minecraft.nbt.Tag`: `acceptAsRoot`, `getAsString`

## FloatTag

*class* `net.minecraft.nbt.FloatTag`

### Fields
- `private static final int SELF_SIZE_IN_BYTES` (= 12)
- `public static final FloatTag ZERO`
- `public static final TagType<FloatTag> TYPE`
- `private final float data`

### Inherited fields
- from `net.minecraft.nbt.Tag`: `ARRAY_HEADER`, `MAX_DEPTH`, `OBJECT_HEADER`, `OBJECT_REFERENCE`, `STRING_SIZE`, `TAG_ANY_NUMERIC`, `TAG_BYTE`, `TAG_BYTE_ARRAY`, `TAG_COMPOUND`, `TAG_DOUBLE`, `TAG_END`, `TAG_FLOAT`, `TAG_INT`, `TAG_INT_ARRAY`, `TAG_LIST`, `TAG_LONG`, `TAG_LONG_ARRAY`, `TAG_SHORT`, `TAG_STRING`

### Methods
- `public static FloatTag valueOf(float p_128567_)`
- `public void write(DataOutput p_128569_)  throws IOException`
  - throws: IOException
- `public int sizeInBytes()`
- `public byte getId()`
- `public TagType<FloatTag> getType()`
- `public FloatTag copy()`
- `public boolean equals(Object p_128578_)`
- `public int hashCode()`
- `public void accept(TagVisitor p_177866_)`
- `public long getAsLong()`
- `public int getAsInt()`
- `public short getAsShort()`
- `public byte getAsByte()`
- `public double getAsDouble()`
- `public float getAsFloat()`
- `public Number getAsNumber()`
- `public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197468_)`

### Inherited methods
- from `net.minecraft.nbt.NumericTag`: `toString`
- from `net.minecraft.nbt.Tag`: `acceptAsRoot`, `getAsString`

## IntArrayTag

*class* `net.minecraft.nbt.IntArrayTag`

### Fields
- `private static final int SELF_SIZE_IN_BYTES` (= 24)
- `public static final TagType<IntArrayTag> TYPE`
- `private int[] data`

### Inherited fields
- from `java.util.AbstractList`: `modCount`
- from `net.minecraft.nbt.Tag`: `ARRAY_HEADER`, `MAX_DEPTH`, `OBJECT_HEADER`, `OBJECT_REFERENCE`, `STRING_SIZE`, `TAG_ANY_NUMERIC`, `TAG_BYTE`, `TAG_BYTE_ARRAY`, `TAG_COMPOUND`, `TAG_DOUBLE`, `TAG_END`, `TAG_FLOAT`, `TAG_INT`, `TAG_INT_ARRAY`, `TAG_LIST`, `TAG_LONG`, `TAG_LONG_ARRAY`, `TAG_SHORT`, `TAG_STRING`

### Methods
- `private static int[] toArray(List<Integer> p_128621_)`
- `public void write(DataOutput p_128616_)  throws IOException`
  - throws: IOException
- `public int sizeInBytes()`
- `public byte getId()`
- `public TagType<IntArrayTag> getType()`
- `public String toString()`
- `public IntArrayTag copy()`
- `public boolean equals(Object p_128647_)`
- `public int hashCode()`
- `public int[] getAsIntArray()`
- `public void accept(TagVisitor p_177869_)`
- `public int size()`
- `public IntTag get(int p_128608_)`
- `public IntTag set(int p_128610_,  IntTag p_128611_)`
- `public void add(int p_128629_,  IntTag p_128630_)`
- `public boolean setTag(int p_128613_,  Tag p_128614_)`
- `public boolean addTag(int p_128632_,  Tag p_128633_)`
- `public IntTag remove(int p_128627_)`
- `public byte getElementType()`
- `public void clear()`
- `public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197474_)`

### Inherited methods
- from `java.util.AbstractList`: `add`, `addAll`, `indexOf`, `iterator`, `lastIndexOf`, `listIterator`, `listIterator`, `removeRange`, `subList`
- from `java.util.AbstractCollection`: `addAll`, `contains`, `containsAll`, `isEmpty`, `remove`, `removeAll`, `retainAll`, `toArray`, `toArray`
- from `java.util.Collection`: `parallelStream`, `removeIf`, `stream`, `toArray`
- from `java.lang.Iterable`: `forEach`
- from `java.util.List`: `addAll`, `contains`, `containsAll`, `isEmpty`, `remove`, `removeAll`, `replaceAll`, `retainAll`, `sort`, `spliterator`, `toArray`, `toArray`
- from `net.minecraft.nbt.Tag`: `acceptAsRoot`, `getAsString`

## IntTag

*class* `net.minecraft.nbt.IntTag`

### Fields
- `private static final int SELF_SIZE_IN_BYTES` (= 12)
- `public static final TagType<IntTag> TYPE`
- `private final int data`

### Inherited fields
- from `net.minecraft.nbt.Tag`: `ARRAY_HEADER`, `MAX_DEPTH`, `OBJECT_HEADER`, `OBJECT_REFERENCE`, `STRING_SIZE`, `TAG_ANY_NUMERIC`, `TAG_BYTE`, `TAG_BYTE_ARRAY`, `TAG_COMPOUND`, `TAG_DOUBLE`, `TAG_END`, `TAG_FLOAT`, `TAG_INT`, `TAG_INT_ARRAY`, `TAG_LIST`, `TAG_LONG`, `TAG_LONG_ARRAY`, `TAG_SHORT`, `TAG_STRING`

### Methods
- `public static IntTag valueOf(int p_128680_)`
- `public void write(DataOutput p_128682_)  throws IOException`
  - throws: IOException
- `public int sizeInBytes()`
- `public byte getId()`
- `public TagType<IntTag> getType()`
- `public IntTag copy()`
- `public boolean equals(Object p_128691_)`
- `public int hashCode()`
- `public void accept(TagVisitor p_177984_)`
- `public long getAsLong()`
- `public int getAsInt()`
- `public short getAsShort()`
- `public byte getAsByte()`
- `public double getAsDouble()`
- `public float getAsFloat()`
- `public Number getAsNumber()`
- `public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197481_)`

### Inherited methods
- from `net.minecraft.nbt.NumericTag`: `toString`
- from `net.minecraft.nbt.Tag`: `acceptAsRoot`, `getAsString`

## IntTag.Cache

*class* `net.minecraft.nbt.IntTag.Cache`

Enclosing class: IntTag

### Fields
- `private static final int HIGH` (= 1024)
- `private static final int LOW` (= -128)
- `static final IntTag[] cache`

## ListTag

*class* `net.minecraft.nbt.ListTag`

### Fields
- `private static final int SELF_SIZE_IN_BYTES` (= 37)
- `public static final TagType<ListTag> TYPE`
- `private final List<Tag> list`
- `private byte type`

### Inherited fields
- from `java.util.AbstractList`: `modCount`
- from `net.minecraft.nbt.Tag`: `ARRAY_HEADER`, `MAX_DEPTH`, `OBJECT_HEADER`, `OBJECT_REFERENCE`, `STRING_SIZE`, `TAG_ANY_NUMERIC`, `TAG_BYTE`, `TAG_BYTE_ARRAY`, `TAG_COMPOUND`, `TAG_DOUBLE`, `TAG_END`, `TAG_FLOAT`, `TAG_INT`, `TAG_INT_ARRAY`, `TAG_LIST`, `TAG_LONG`, `TAG_LONG_ARRAY`, `TAG_SHORT`, `TAG_STRING`

### Methods
- `public void write(DataOutput p_128734_)  throws IOException`
  - throws: IOException
- `public int sizeInBytes()`
- `public byte getId()`
- `public TagType<ListTag> getType()`
- `public String toString()`
- `private void updateTypeAfterRemove()`
- `public Tag remove(int p_128751_)`
- `public boolean isEmpty()`
- `public CompoundTag getCompound(int p_128729_)`
- `public ListTag getList(int p_128745_)`
- `public short getShort(int p_128758_)`
- `public int getInt(int p_128764_)`
- `public int[] getIntArray(int p_128768_)`
- `public long[] getLongArray(int p_177992_)`
- `public double getDouble(int p_128773_)`
- `public float getFloat(int p_128776_)`
- `public String getString(int p_128779_)`
- `public int size()`
- `public Tag get(int p_128781_)`
- `public Tag set(int p_128760_,  Tag p_128761_)`
- `public void add(int p_128753_,  Tag p_128754_)`
- `public boolean setTag(int p_128731_,  Tag p_128732_)`
- `public boolean addTag(int p_128747_,  Tag p_128748_)`
- `private boolean updateType(Tag p_128739_)`
- `public ListTag copy()`
- `public boolean equals(Object p_128766_)`
- `public int hashCode()`
- `public void accept(TagVisitor p_177990_)`
- `public byte getElementType()`
- `public void clear()`
- `public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197487_)`

### Inherited methods
- from `java.util.AbstractList`: `add`, `addAll`, `indexOf`, `iterator`, `lastIndexOf`, `listIterator`, `listIterator`, `removeRange`, `subList`
- from `java.util.AbstractCollection`: `addAll`, `contains`, `containsAll`, `remove`, `removeAll`, `retainAll`, `toArray`, `toArray`
- from `java.util.Collection`: `parallelStream`, `removeIf`, `stream`, `toArray`
- from `java.lang.Iterable`: `forEach`
- from `java.util.List`: `addAll`, `contains`, `containsAll`, `remove`, `removeAll`, `replaceAll`, `retainAll`, `sort`, `spliterator`, `toArray`, `toArray`
- from `net.minecraft.nbt.Tag`: `acceptAsRoot`, `getAsString`

## LongArrayTag

*class* `net.minecraft.nbt.LongArrayTag`

### Fields
- `private static final int SELF_SIZE_IN_BYTES` (= 24)
- `public static final TagType<LongArrayTag> TYPE`
- `private long[] data`

### Inherited fields
- from `java.util.AbstractList`: `modCount`
- from `net.minecraft.nbt.Tag`: `ARRAY_HEADER`, `MAX_DEPTH`, `OBJECT_HEADER`, `OBJECT_REFERENCE`, `STRING_SIZE`, `TAG_ANY_NUMERIC`, `TAG_BYTE`, `TAG_BYTE_ARRAY`, `TAG_COMPOUND`, `TAG_DOUBLE`, `TAG_END`, `TAG_FLOAT`, `TAG_INT`, `TAG_INT_ARRAY`, `TAG_LIST`, `TAG_LONG`, `TAG_LONG_ARRAY`, `TAG_SHORT`, `TAG_STRING`

### Methods
- `private static long[] toArray(List<Long> p_128824_)`
- `public void write(DataOutput p_128819_)  throws IOException`
  - throws: IOException
- `public int sizeInBytes()`
- `public byte getId()`
- `public TagType<LongArrayTag> getType()`
- `public String toString()`
- `public LongArrayTag copy()`
- `public boolean equals(Object p_128850_)`
- `public int hashCode()`
- `public void accept(TagVisitor p_177995_)`
- `public long[] getAsLongArray()`
- `public int size()`
- `public LongTag get(int p_128811_)`
- `public LongTag set(int p_128813_,  LongTag p_128814_)`
- `public void add(int p_128832_,  LongTag p_128833_)`
- `public boolean setTag(int p_128816_,  Tag p_128817_)`
- `public boolean addTag(int p_128835_,  Tag p_128836_)`
- `public LongTag remove(int p_128830_)`
- `public byte getElementType()`
- `public void clear()`
- `public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197497_)`

### Inherited methods
- from `java.util.AbstractList`: `add`, `addAll`, `indexOf`, `iterator`, `lastIndexOf`, `listIterator`, `listIterator`, `removeRange`, `subList`
- from `java.util.AbstractCollection`: `addAll`, `contains`, `containsAll`, `isEmpty`, `remove`, `removeAll`, `retainAll`, `toArray`, `toArray`
- from `java.util.Collection`: `parallelStream`, `removeIf`, `stream`, `toArray`
- from `java.lang.Iterable`: `forEach`
- from `java.util.List`: `addAll`, `contains`, `containsAll`, `isEmpty`, `remove`, `removeAll`, `replaceAll`, `retainAll`, `sort`, `spliterator`, `toArray`, `toArray`
- from `net.minecraft.nbt.Tag`: `acceptAsRoot`, `getAsString`

## LongTag

*class* `net.minecraft.nbt.LongTag`

### Fields
- `private static final int SELF_SIZE_IN_BYTES` (= 16)
- `public static final TagType<LongTag> TYPE`
- `private final long data`

### Inherited fields
- from `net.minecraft.nbt.Tag`: `ARRAY_HEADER`, `MAX_DEPTH`, `OBJECT_HEADER`, `OBJECT_REFERENCE`, `STRING_SIZE`, `TAG_ANY_NUMERIC`, `TAG_BYTE`, `TAG_BYTE_ARRAY`, `TAG_COMPOUND`, `TAG_DOUBLE`, `TAG_END`, `TAG_FLOAT`, `TAG_INT`, `TAG_INT_ARRAY`, `TAG_LIST`, `TAG_LONG`, `TAG_LONG_ARRAY`, `TAG_SHORT`, `TAG_STRING`

### Methods
- `public static LongTag valueOf(long p_128883_)`
- `public void write(DataOutput p_128885_)  throws IOException`
  - throws: IOException
- `public int sizeInBytes()`
- `public byte getId()`
- `public TagType<LongTag> getType()`
- `public LongTag copy()`
- `public boolean equals(Object p_128894_)`
- `public int hashCode()`
- `public void accept(TagVisitor p_177998_)`
- `public long getAsLong()`
- `public int getAsInt()`
- `public short getAsShort()`
- `public byte getAsByte()`
- `public double getAsDouble()`
- `public float getAsFloat()`
- `public Number getAsNumber()`
- `public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197504_)`

### Inherited methods
- from `net.minecraft.nbt.NumericTag`: `toString`
- from `net.minecraft.nbt.Tag`: `acceptAsRoot`, `getAsString`

## LongTag.Cache

*class* `net.minecraft.nbt.LongTag.Cache`

Enclosing class: LongTag

### Fields
- `private static final int HIGH` (= 1024)
- `private static final int LOW` (= -128)
- `static final LongTag[] cache`

## NbtAccounter

*class* `net.minecraft.nbt.NbtAccounter`

### Fields
- `private static final int MAX_STACK_DEPTH` (= 512)
- `private final long quota`
- `private long usage`
- `private final int maxDepth`
- `private int depth`

### Methods
- `public static NbtAccounter create(long p_301706_)`
- `public static NbtAccounter unlimitedHeap()`
- `public void accountBytes(long p_301856_,  long p_301857_)`
- `public void accountBytes(long p_263515_)`
- `public void pushDepth()`
- `public void popDepth()`
- `public String readUTF(String data)`
- `public long getUsage()`
- `public int getDepth()`

## NbtAccounterException

*class* `net.minecraft.nbt.NbtAccounterException`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## NbtIo

*class* `net.minecraft.nbt.NbtIo`

### Methods
- `public static CompoundTag readCompressed(File p_128938_)  throws IOException`
  - throws: IOException
- `private static DataInputStream createDecompressorStream(InputStream p_202494_)  throws IOException`
  - throws: IOException
- `public static CompoundTag readCompressed(InputStream p_128940_)  throws IOException`
  - throws: IOException
- `public static void parseCompressed(File p_202488_,  StreamTagVisitor p_202489_,  NbtAccounter p_301727_)  throws IOException`
  - throws: IOException
- `public static void parseCompressed(InputStream p_202491_,  StreamTagVisitor p_202492_,  NbtAccounter p_301762_)  throws IOException`
  - throws: IOException
- `public static void writeCompressed(CompoundTag p_128945_,  File p_128946_)  throws IOException`
  - throws: IOException
- `public static void writeCompressed(CompoundTag p_128948_,  OutputStream p_128949_)  throws IOException`
  - throws: IOException
- `public static void write(CompoundTag p_128956_,  File p_128957_)  throws IOException`
  - throws: IOException
- `@Nullable public static CompoundTag read(File p_128954_)  throws IOException`
  - throws: IOException
- `public static CompoundTag read(DataInput p_128929_)  throws IOException`
  - throws: IOException
- `public static CompoundTag read(DataInput p_128935_,  NbtAccounter p_128936_)  throws IOException`
  - throws: IOException
- `public static void write(CompoundTag p_128942_,  DataOutput p_128943_)  throws IOException`
  - throws: IOException
- `public static void parse(DataInput p_197510_,  StreamTagVisitor p_197511_,  NbtAccounter p_301755_)  throws IOException`
  - throws: IOException
- `public static Tag readAnyTag(DataInput p_301023_,  NbtAccounter p_299704_)  throws IOException`
  - throws: IOException
- `public static void writeAnyTag(Tag p_300328_,  DataOutput p_297970_)  throws IOException`
  - throws: IOException
- `public static void writeUnnamedTag(Tag p_128951_,  DataOutput p_128952_)  throws IOException`
  - throws: IOException
- `private static Tag readUnnamedTag(DataInput p_128931_,  NbtAccounter p_128933_)  throws IOException`
  - throws: IOException
- `private static Tag readTagSafe(DataInput p_299672_,  NbtAccounter p_299171_,  byte p_300451_)`

## NbtOps

*class* `net.minecraft.nbt.NbtOps`

### Fields
- `public static final NbtOps INSTANCE`
- `private static final String WRAPPER_MARKER` (= "")

### Methods
- `public Tag empty()`
- `public <U> U convertTo(com.mojang.serialization.DynamicOps<U> p_128980_,  Tag p_128981_)`
- `public com.mojang.serialization.DataResult<Number> getNumberValue(Tag p_129030_)`
- `public Tag createNumeric(Number p_128983_)`
- `public Tag createByte(byte p_128963_)`
- `public Tag createShort(short p_129048_)`
- `public Tag createInt(int p_128976_)`
- `public Tag createLong(long p_128978_)`
- `public Tag createFloat(float p_128974_)`
- `public Tag createDouble(double p_128972_)`
- `public Tag createBoolean(boolean p_129050_)`
- `public com.mojang.serialization.DataResult<String> getStringValue(Tag p_129061_)`
- `public Tag createString(String p_128985_)`
- `public com.mojang.serialization.DataResult<Tag> mergeToList(Tag p_129041_,  Tag p_129042_)`
- `public com.mojang.serialization.DataResult<Tag> mergeToList(Tag p_129038_,  List<Tag> p_129039_)`
- `public com.mojang.serialization.DataResult<Tag> mergeToMap(Tag p_129044_,  Tag p_129045_,  Tag p_129046_)`
- `public com.mojang.serialization.DataResult<Tag> mergeToMap(Tag p_129032_,  com.mojang.serialization.MapLike<Tag> p_129033_)`
- `public com.mojang.serialization.DataResult<Stream<com.mojang.datafixers.util.Pair<Tag,Tag>>> getMapValues(Tag p_129070_)`
- `public com.mojang.serialization.DataResult<Consumer<BiConsumer<Tag,Tag>>> getMapEntries(Tag p_129103_)`
- `public com.mojang.serialization.DataResult<com.mojang.serialization.MapLike<Tag>> getMap(Tag p_129105_)`
- `public Tag createMap(Stream<com.mojang.datafixers.util.Pair<Tag,Tag>> p_129004_)`
- `private static Tag tryUnwrap(CompoundTag p_251041_)`
- `public com.mojang.serialization.DataResult<Stream<Tag>> getStream(Tag p_129108_)`
- `public com.mojang.serialization.DataResult<Consumer<Consumer<Tag>>> getList(Tag p_129110_)`
- `public com.mojang.serialization.DataResult<ByteBuffer> getByteBuffer(Tag p_129132_)`
- `public Tag createByteList(ByteBuffer p_128990_)`
- `public com.mojang.serialization.DataResult<IntStream> getIntStream(Tag p_129134_)`
- `public Tag createIntList(IntStream p_129000_)`
- `public com.mojang.serialization.DataResult<LongStream> getLongStream(Tag p_129136_)`
- `public Tag createLongList(LongStream p_129002_)`
- `public Tag createList(Stream<Tag> p_129052_)`
- `public Tag remove(Tag p_129035_,  String p_129036_)`
- `public String toString()`
- `public com.mojang.serialization.RecordBuilder<Tag> mapBuilder()`
- `private static Optional<NbtOps.ListCollector> createCollector(Tag p_249503_)`

### Inherited methods
- from `com.mojang.serialization.DynamicOps`: `compressMaps`, `convertList`, `convertMap`, `createMap`, `emptyList`, `emptyMap`, `get`, `getBooleanValue`, `getGeneric`, `getNumberValue`, `listBuilder`, `mergeToMap`, `mergeToPrimitive`, `set`, `update`, `updateGeneric`, `withDecoder`, `withEncoder`, `withParser`

## NbtOps.ByteListCollector

*class* `net.minecraft.nbt.NbtOps.ByteListCollector`

Enclosing class: NbtOps

### Fields
- `private final it.unimi.dsi.fastutil.bytes.ByteArrayList values`

### Methods
- `public NbtOps.ListCollector accept(Tag p_250723_)`
- `public Tag result()`

### Inherited methods
- from `net.minecraft.nbt.NbtOps.ListCollector`: `acceptAll`, `acceptAll`

## NbtOps.HeterogenousListCollector

*class* `net.minecraft.nbt.NbtOps.HeterogenousListCollector`

Enclosing class: NbtOps

### Fields
- `private final ListTag result`

### Methods
- `private static boolean isWrapper(CompoundTag p_252073_)`
- `private static Tag wrapIfNeeded(Tag p_252042_)`
- `private static CompoundTag wrapElement(Tag p_251263_)`
- `public NbtOps.ListCollector accept(Tag p_249045_)`
- `public Tag result()`

### Inherited methods
- from `net.minecraft.nbt.NbtOps.ListCollector`: `acceptAll`, `acceptAll`

## NbtOps.HomogenousListCollector

*class* `net.minecraft.nbt.NbtOps.HomogenousListCollector`

Enclosing class: NbtOps

### Fields
- `private final ListTag result`

### Methods
- `public NbtOps.ListCollector accept(Tag p_248727_)`
- `public Tag result()`

### Inherited methods
- from `net.minecraft.nbt.NbtOps.ListCollector`: `acceptAll`, `acceptAll`

## NbtOps.InitialListCollector

*class* `net.minecraft.nbt.NbtOps.InitialListCollector`

Enclosing class: NbtOps

### Fields
- `public static final NbtOps.InitialListCollector INSTANCE`

### Methods
- `public NbtOps.ListCollector accept(Tag p_251635_)`
- `public Tag result()`

### Inherited methods
- from `net.minecraft.nbt.NbtOps.ListCollector`: `acceptAll`, `acceptAll`

## NbtOps.IntListCollector

*class* `net.minecraft.nbt.NbtOps.IntListCollector`

Enclosing class: NbtOps

### Fields
- `private final it.unimi.dsi.fastutil.ints.IntArrayList values`

### Methods
- `public NbtOps.ListCollector accept(Tag p_251372_)`
- `public Tag result()`

### Inherited methods
- from `net.minecraft.nbt.NbtOps.ListCollector`: `acceptAll`, `acceptAll`

## NbtOps.ListCollector

*interface* `net.minecraft.nbt.NbtOps.ListCollector`

Enclosing class: NbtOps

### Methods
- `NbtOps.ListCollector accept(Tag p_249030_)`
- `default NbtOps.ListCollector acceptAll(Iterable<Tag> p_249781_)`
- `default NbtOps.ListCollector acceptAll(Stream<Tag> p_249876_)`
- `Tag result()`

## NbtOps.LongListCollector

*class* `net.minecraft.nbt.NbtOps.LongListCollector`

Enclosing class: NbtOps

### Fields
- `private final it.unimi.dsi.fastutil.longs.LongArrayList values`

### Methods
- `public NbtOps.ListCollector accept(Tag p_252167_)`
- `public Tag result()`

### Inherited methods
- from `net.minecraft.nbt.NbtOps.ListCollector`: `acceptAll`, `acceptAll`

## NbtOps.NbtRecordBuilder

*class* `net.minecraft.nbt.NbtOps.NbtRecordBuilder`

Enclosing class: NbtOps

### Inherited fields
- from `com.mojang.serialization.RecordBuilder.AbstractBuilder`: `builder`

### Methods
- `protected CompoundTag initBuilder()`
- `protected CompoundTag append(String p_129186_,  Tag p_129187_,  CompoundTag p_129188_)`
- `protected com.mojang.serialization.DataResult<Tag> build(CompoundTag p_129190_,  Tag p_129191_)`

### Inherited methods
- from `com.mojang.serialization.RecordBuilder.AbstractStringBuilder`: `add`, `add`, `add`, `add`, `add`
- from `com.mojang.serialization.RecordBuilder.AbstractBuilder`: `build`, `mapError`, `ops`, `setLifecycle`, `withErrorsFrom`
- from `com.mojang.serialization.RecordBuilder`: `add`, `build`

## NbtUtils

*class* `net.minecraft.nbt.NbtUtils`

### Fields
- `private static final Comparator<ListTag> YXZ_LISTTAG_INT_COMPARATOR`
- `private static final Comparator<ListTag> YXZ_LISTTAG_DOUBLE_COMPARATOR`
- `public static final String SNBT_DATA_TAG` (= "data")
- `private static final char PROPERTIES_START` (= '{')
- `private static final char PROPERTIES_END` (= '}')
- `private static final String ELEMENT_SEPARATOR` (= ",")
- `private static final char KEY_VALUE_SEPARATOR` (= ':')
- `private static final com.google.common.base.Splitter COMMA_SPLITTER`
- `private static final com.google.common.base.Splitter COLON_SPLITTER`
- `private static final org.slf4j.Logger LOGGER`
- `private static final int INDENT` (= 2)
- `private static final int NOT_FOUND` (= -1)

### Methods
- `@Nullable public static com.mojang.authlib.GameProfile readGameProfile(CompoundTag p_129229_)`
- `public static CompoundTag writeGameProfile(CompoundTag p_129231_,  com.mojang.authlib.GameProfile p_129232_)`
- `public static boolean compareNbt(@Nullable  Tag p_129236_,  @Nullable  Tag p_129237_,  boolean p_129238_)`
- `public static IntArrayTag createUUID(UUID p_129227_)`
- `public static UUID loadUUID(Tag p_129234_)`
- `public static BlockPos readBlockPos(CompoundTag p_129240_)`
- `public static CompoundTag writeBlockPos(BlockPos p_129225_)`
- `public static BlockState readBlockState(HolderGetter<Block> p_256363_,  CompoundTag p_250775_)`
- `private static <S extends StateHolder<?, S>, T extends Comparable<T>> S setValueHelper(S p_129205_,  Property<T> p_129206_,  String p_129207_,  CompoundTag p_129208_,  CompoundTag p_129209_)`
- `public static CompoundTag writeBlockState(BlockState p_129203_)`
- `public static CompoundTag writeFluidState(FluidState p_178023_)`
- `private static <T extends Comparable<T>> String getName(Property<T> p_129211_,  Comparable<?> p_129212_)`
- `public static String prettyPrint(Tag p_178058_)`
- `public static String prettyPrint(Tag p_178051_,  boolean p_178052_)`
- `public static StringBuilder prettyPrint(StringBuilder p_178027_,  Tag p_178028_,  int p_178029_,  boolean p_178030_)`
- `private static StringBuilder indent(int p_178020_,  StringBuilder p_178021_)`
- `public static Component toPrettyComponent(Tag p_178062_)`
- `public static String structureToSnbt(CompoundTag p_178064_)`
- `public static CompoundTag snbtToStructure(String p_178025_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `static CompoundTag packStructureTemplate(CompoundTag p_178068_)`
- `static CompoundTag unpackStructureTemplate(CompoundTag p_178072_)`
- `static String packBlockState(CompoundTag p_178076_)`
- `static CompoundTag unpackBlockState(String p_178054_)`
- `public static CompoundTag addCurrentDataVersion(CompoundTag p_265050_)`
- `public static CompoundTag addDataVersion(CompoundTag p_265534_,  int p_265686_)`
- `public static int getDataVersion(CompoundTag p_265397_,  int p_265399_)`

## NumericTag

*class* `net.minecraft.nbt.NumericTag`

### Inherited fields
- from `net.minecraft.nbt.Tag`: `ARRAY_HEADER`, `MAX_DEPTH`, `OBJECT_HEADER`, `OBJECT_REFERENCE`, `STRING_SIZE`, `TAG_ANY_NUMERIC`, `TAG_BYTE`, `TAG_BYTE_ARRAY`, `TAG_COMPOUND`, `TAG_DOUBLE`, `TAG_END`, `TAG_FLOAT`, `TAG_INT`, `TAG_INT_ARRAY`, `TAG_LIST`, `TAG_LONG`, `TAG_LONG_ARRAY`, `TAG_SHORT`, `TAG_STRING`

### Methods
- `public abstract long getAsLong()`
- `public abstract int getAsInt()`
- `public abstract short getAsShort()`
- `public abstract byte getAsByte()`
- `public abstract double getAsDouble()`
- `public abstract float getAsFloat()`
- `public abstract Number getAsNumber()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.nbt.Tag`: `accept`, `accept`, `acceptAsRoot`, `copy`, `getAsString`, `getId`, `getType`, `sizeInBytes`, `write`

## ShortTag

*class* `net.minecraft.nbt.ShortTag`

### Fields
- `private static final int SELF_SIZE_IN_BYTES` (= 10)
- `public static final TagType<ShortTag> TYPE`
- `private final short data`

### Inherited fields
- from `net.minecraft.nbt.Tag`: `ARRAY_HEADER`, `MAX_DEPTH`, `OBJECT_HEADER`, `OBJECT_REFERENCE`, `STRING_SIZE`, `TAG_ANY_NUMERIC`, `TAG_BYTE`, `TAG_BYTE_ARRAY`, `TAG_COMPOUND`, `TAG_DOUBLE`, `TAG_END`, `TAG_FLOAT`, `TAG_INT`, `TAG_INT_ARRAY`, `TAG_LIST`, `TAG_LONG`, `TAG_LONG_ARRAY`, `TAG_SHORT`, `TAG_STRING`

### Methods
- `public static ShortTag valueOf(short p_129259_)`
- `public void write(DataOutput p_129254_)  throws IOException`
  - throws: IOException
- `public int sizeInBytes()`
- `public byte getId()`
- `public TagType<ShortTag> getType()`
- `public ShortTag copy()`
- `public boolean equals(Object p_129265_)`
- `public int hashCode()`
- `public void accept(TagVisitor p_178084_)`
- `public long getAsLong()`
- `public int getAsInt()`
- `public short getAsShort()`
- `public byte getAsByte()`
- `public double getAsDouble()`
- `public float getAsFloat()`
- `public Number getAsNumber()`
- `public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197515_)`

### Inherited methods
- from `net.minecraft.nbt.NumericTag`: `toString`
- from `net.minecraft.nbt.Tag`: `acceptAsRoot`, `getAsString`

## ShortTag.Cache

*class* `net.minecraft.nbt.ShortTag.Cache`

Enclosing class: ShortTag

### Fields
- `private static final int HIGH` (= 1024)
- `private static final int LOW` (= -128)
- `static final ShortTag[] cache`

## SnbtPrinterTagVisitor

*class* `net.minecraft.nbt.SnbtPrinterTagVisitor`

### Fields
- `private static final Map<String,List<String>> KEY_ORDER`
- `private static final Set<String> NO_INDENTATION`
- `private static final Pattern SIMPLE_VALUE`
- `private static final String NAME_VALUE_SEPARATOR`
- `private static final String ELEMENT_SEPARATOR`
- `private static final String LIST_OPEN` (= "[")
- `private static final String LIST_CLOSE` (= "]")
- `private static final String LIST_TYPE_SEPARATOR` (= ";")
- `private static final String ELEMENT_SPACING` (= " ")
- `private static final String STRUCT_OPEN` (= "{")
- `private static final String STRUCT_CLOSE` (= "}")
- `private static final String NEWLINE` (= "\n")
- `private final String indentation`
- `private final int depth`
- `private final List<String> path`
- `private String result`

### Methods
- `public String visit(Tag p_178142_)`
- `public void visitString(StringTag p_178140_)`
- `public void visitByte(ByteTag p_178118_)`
- `public void visitShort(ShortTag p_178138_)`
- `public void visitInt(IntTag p_178130_)`
- `public void visitLong(LongTag p_178136_)`
- `public void visitFloat(FloatTag p_178126_)`
- `public void visitDouble(DoubleTag p_178122_)`
- `public void visitByteArray(ByteArrayTag p_178116_)`
- `public void visitIntArray(IntArrayTag p_178128_)`
- `public void visitLongArray(LongArrayTag p_178134_)`
- `public void visitList(ListTag p_178132_)`
- `public void visitCompound(CompoundTag p_178120_)`
- `private void popPath()`
- `private void pushPath(String p_178145_)`
- `protected List<String> getKeys(CompoundTag p_178147_)`
- `public String pathString()`
- `protected static String handleEscapePretty(String p_178112_)`
- `public void visitEnd(EndTag p_178124_)`

## StreamTagVisitor

*interface* `net.minecraft.nbt.StreamTagVisitor`

### Methods
- `StreamTagVisitor.ValueResult visitEnd()`
- `StreamTagVisitor.ValueResult visit(String p_197525_)`
- `StreamTagVisitor.ValueResult visit(byte p_197520_)`
- `StreamTagVisitor.ValueResult visit(short p_197531_)`
- `StreamTagVisitor.ValueResult visit(int p_197523_)`
- `StreamTagVisitor.ValueResult visit(long p_197524_)`
- `StreamTagVisitor.ValueResult visit(float p_197522_)`
- `StreamTagVisitor.ValueResult visit(double p_197521_)`
- `StreamTagVisitor.ValueResult visit(byte[] p_197532_)`
- `StreamTagVisitor.ValueResult visit(int[] p_197533_)`
- `StreamTagVisitor.ValueResult visit(long[] p_197534_)`
- `StreamTagVisitor.ValueResult visitList(TagType<?> p_197527_,  int p_197528_)`
- `StreamTagVisitor.EntryResult visitEntry(TagType<?> p_197526_)`
- `StreamTagVisitor.EntryResult visitEntry(TagType<?> p_197529_,  String p_197530_)`
- `StreamTagVisitor.EntryResult visitElement(TagType<?> p_197536_,  int p_197537_)`
- `StreamTagVisitor.ValueResult visitContainerEnd()`
- `StreamTagVisitor.ValueResult visitRootEntry(TagType<?> p_197535_)`

## StringTag

*class* `net.minecraft.nbt.StringTag`

### Fields
- `private static final int SELF_SIZE_IN_BYTES` (= 36)
- `public static final TagType<StringTag> TYPE`
- `private static final StringTag EMPTY`
- `private static final char DOUBLE_QUOTE` (= '\"')
- `private static final char SINGLE_QUOTE` (= '\'')
- `private static final char ESCAPE` (= '\\')
- `private static final char NOT_SET` (= '\u0000')
- `private final String data`

### Inherited fields
- from `net.minecraft.nbt.Tag`: `ARRAY_HEADER`, `MAX_DEPTH`, `OBJECT_HEADER`, `OBJECT_REFERENCE`, `STRING_SIZE`, `TAG_ANY_NUMERIC`, `TAG_BYTE`, `TAG_BYTE_ARRAY`, `TAG_COMPOUND`, `TAG_DOUBLE`, `TAG_END`, `TAG_FLOAT`, `TAG_INT`, `TAG_INT_ARRAY`, `TAG_LIST`, `TAG_LONG`, `TAG_LONG_ARRAY`, `TAG_SHORT`, `TAG_STRING`

### Methods
- `public static void skipString(DataInput p_197564_)  throws IOException`
  - throws: IOException
- `public static StringTag valueOf(String p_129298_)`
- `public void write(DataOutput p_129296_)  throws IOException`
  - throws: IOException
- `public int sizeInBytes()`
- `public byte getId()`
- `public TagType<StringTag> getType()`
- `public String toString()`
- `public StringTag copy()`
- `public boolean equals(Object p_129308_)`
- `public int hashCode()`
- `public String getAsString()`
- `public void accept(TagVisitor p_178154_)`
- `public static String quoteAndEscape(String p_129304_)`
- `public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197566_)`

### Inherited methods
- from `net.minecraft.nbt.Tag`: `acceptAsRoot`

## StringTagVisitor

*class* `net.minecraft.nbt.StringTagVisitor`

### Fields
- `private static final Pattern SIMPLE_VALUE`
- `private final StringBuilder builder`

### Methods
- `public String visit(Tag p_178188_)`
- `public void visitString(StringTag p_178186_)`
- `public void visitByte(ByteTag p_178164_)`
- `public void visitShort(ShortTag p_178184_)`
- `public void visitInt(IntTag p_178176_)`
- `public void visitLong(LongTag p_178182_)`
- `public void visitFloat(FloatTag p_178172_)`
- `public void visitDouble(DoubleTag p_178168_)`
- `public void visitByteArray(ByteArrayTag p_178162_)`
- `public void visitIntArray(IntArrayTag p_178174_)`
- `public void visitLongArray(LongArrayTag p_178180_)`
- `public void visitList(ListTag p_178178_)`
- `public void visitCompound(CompoundTag p_178166_)`
- `protected static String handleEscape(String p_178160_)`
- `public void visitEnd(EndTag p_178170_)`

## Tag

*interface* `net.minecraft.nbt.Tag`

### Fields
- `static final int OBJECT_HEADER` (= 8)
- `static final int ARRAY_HEADER` (= 12)
- `static final int OBJECT_REFERENCE` (= 4)
- `static final int STRING_SIZE` (= 28)
- `static final byte TAG_END` (= 0x0)
- `static final byte TAG_BYTE` (= 0x1)
- `static final byte TAG_SHORT` (= 0x2)
- `static final byte TAG_INT` (= 0x3)
- `static final byte TAG_LONG` (= 0x4)
- `static final byte TAG_FLOAT` (= 0x5)
- `static final byte TAG_DOUBLE` (= 0x6)
- `static final byte TAG_BYTE_ARRAY` (= 0x7)
- `static final byte TAG_STRING` (= 0x8)
- `static final byte TAG_LIST` (= 0x9)
- `static final byte TAG_COMPOUND` (= 0xa)
- `static final byte TAG_INT_ARRAY` (= 0xb)
- `static final byte TAG_LONG_ARRAY` (= 0xc)
- `static final byte TAG_ANY_NUMERIC` (= 0x63)
- `static final int MAX_DEPTH` (= 512)

### Methods
- `void write(DataOutput p_129329_)  throws IOException`
  - throws: IOException
- `String toString()`
- `byte getId()`
- `TagType<?> getType()`
- `Tag copy()`
- `int sizeInBytes()`
- `default String getAsString()`
- `void accept(TagVisitor p_178208_)`
- `StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197572_)`
- `default void acceptAsRoot(StreamTagVisitor p_197574_)`

## TagParser

*class* `net.minecraft.nbt.TagParser`

### Fields
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_TRAILING_DATA`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_EXPECTED_KEY`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_EXPECTED_VALUE`
- `public static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_INSERT_MIXED_LIST`
- `public static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_INSERT_MIXED_ARRAY`
- `public static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_INVALID_ARRAY`
- `public static final char ELEMENT_SEPARATOR` (= ',')
- `public static final char NAME_VALUE_SEPARATOR` (= ':')
- `private static final char LIST_OPEN` (= '[')
- `private static final char LIST_CLOSE` (= ']')
- `private static final char STRUCT_CLOSE` (= '}')
- `private static final char STRUCT_OPEN` (= '{')
- `private static final Pattern DOUBLE_PATTERN_NOSUFFIX`
- `private static final Pattern DOUBLE_PATTERN`
- `private static final Pattern FLOAT_PATTERN`
- `private static final Pattern BYTE_PATTERN`
- `private static final Pattern LONG_PATTERN`
- `private static final Pattern SHORT_PATTERN`
- `private static final Pattern INT_PATTERN`
- `public static final com.mojang.serialization.Codec<CompoundTag> AS_CODEC`
- `private final com.mojang.brigadier.StringReader reader`

### Methods
- `public static CompoundTag parseTag(String p_129360_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `CompoundTag readSingleStruct()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `protected String readKey()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `protected Tag readTypedValue()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private Tag type(String p_129369_)`
- `public Tag readValue()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `protected Tag readList()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public CompoundTag readStruct()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private Tag readListTag()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private Tag readArrayTag()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private <T extends Number> List<T> readArray(TagType<?> p_129362_,  TagType<?> p_129363_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private boolean hasElementSeparator()`
- `private void expect(char p_129353_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## TagType

*interface* `net.minecraft.nbt.TagType`

### Methods
- `T load(DataInput p_129379_,  NbtAccounter p_129381_) throws IOException`
  - throws: IOException
- `StreamTagVisitor.ValueResult parse(DataInput p_197578_,  StreamTagVisitor p_197579_,  NbtAccounter p_301717_)  throws IOException`
  - throws: IOException
- `default void parseRoot(DataInput p_197581_,  StreamTagVisitor p_197582_,  NbtAccounter p_301739_)  throws IOException`
  - throws: IOException
- `void skip(DataInput p_197575_,  int p_301713_,  NbtAccounter p_301696_)  throws IOException`
  - throws: IOException
- `void skip(DataInput p_197576_,  NbtAccounter p_301718_)  throws IOException`
  - throws: IOException
- `default boolean isValue()`
- `String getName()`
- `String getPrettyName()`
- `static TagType<EndTag> createInvalid(int p_129378_)`

## TagType.StaticSize

*interface* `net.minecraft.nbt.TagType.StaticSize`

All Superinterfaces: TagType<T>

Enclosing interface: TagType<T extends Tag>

### Methods
- `default void skip(DataInput p_197595_,  NbtAccounter p_301707_)  throws IOException`
  - throws: IOException
- `default void skip(DataInput p_197597_,  int p_197598_,  NbtAccounter p_301709_)  throws IOException`
  - throws: IOException
- `int size()`

### Inherited methods
- from `net.minecraft.nbt.TagType`: `getName`, `getPrettyName`, `isValue`, `load`, `parse`, `parseRoot`

## TagType.VariableSize

*interface* `net.minecraft.nbt.TagType.VariableSize`

All Superinterfaces: TagType<T>

Enclosing interface: TagType<T extends Tag>

### Methods
- `default void skip(DataInput p_197600_,  int p_197601_,  NbtAccounter p_301740_)  throws IOException`
  - throws: IOException

### Inherited methods
- from `net.minecraft.nbt.TagType`: `getName`, `getPrettyName`, `isValue`, `load`, `parse`, `parseRoot`, `skip`

## TagTypes

*class* `net.minecraft.nbt.TagTypes`

### Fields
- `private static final TagType<?>[] TYPES`

### Methods
- `public static TagType<?> getType(int p_129398_)`

## TagVisitor

*interface* `net.minecraft.nbt.TagVisitor`

### Methods
- `void visitString(StringTag p_178228_)`
- `void visitByte(ByteTag p_178217_)`
- `void visitShort(ShortTag p_178227_)`
- `void visitInt(IntTag p_178223_)`
- `void visitLong(LongTag p_178226_)`
- `void visitFloat(FloatTag p_178221_)`
- `void visitDouble(DoubleTag p_178219_)`
- `void visitByteArray(ByteArrayTag p_178216_)`
- `void visitIntArray(IntArrayTag p_178222_)`
- `void visitLongArray(LongArrayTag p_178225_)`
- `void visitList(ListTag p_178224_)`
- `void visitCompound(CompoundTag p_178218_)`
- `void visitEnd(EndTag p_178220_)`

## TextComponentTagVisitor

*class* `net.minecraft.nbt.TextComponentTagVisitor`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int INLINE_LIST_THRESHOLD` (= 8)
- `private static final it.unimi.dsi.fastutil.bytes.ByteCollection INLINE_ELEMENT_TYPES`
- `private static final ChatFormatting SYNTAX_HIGHLIGHTING_KEY`
- `private static final ChatFormatting SYNTAX_HIGHLIGHTING_STRING`
- `private static final ChatFormatting SYNTAX_HIGHLIGHTING_NUMBER`
- `private static final ChatFormatting SYNTAX_HIGHLIGHTING_NUMBER_TYPE`
- `private static final Pattern SIMPLE_VALUE`
- `private static final String NAME_VALUE_SEPARATOR`
- `private static final String ELEMENT_SEPARATOR`
- `private static final String LIST_OPEN` (= "[")
- `private static final String LIST_CLOSE` (= "]")
- `private static final String LIST_TYPE_SEPARATOR` (= ";")
- `private static final String ELEMENT_SPACING` (= " ")
- `private static final String STRUCT_OPEN` (= "{")
- `private static final String STRUCT_CLOSE` (= "}")
- `private static final String NEWLINE` (= "\n")
- `private final String indentation`
- `private final int depth`
- `private Component result`

### Methods
- `public Component visit(Tag p_178282_)`
- `public void visitString(StringTag p_178280_)`
- `public void visitByte(ByteTag p_178258_)`
- `public void visitShort(ShortTag p_178278_)`
- `public void visitInt(IntTag p_178270_)`
- `public void visitLong(LongTag p_178276_)`
- `public void visitFloat(FloatTag p_178266_)`
- `public void visitDouble(DoubleTag p_178262_)`
- `public void visitByteArray(ByteArrayTag p_178256_)`
- `public void visitIntArray(IntArrayTag p_178268_)`
- `public void visitLongArray(LongArrayTag p_178274_)`
- `public void visitList(ListTag p_178272_)`
- `public void visitCompound(CompoundTag p_178260_)`
- `protected static Component handleEscapePretty(String p_178254_)`
- `public void visitEnd(EndTag p_178264_)`
