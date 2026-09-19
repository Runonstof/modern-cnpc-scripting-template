# net.minecraft.util.datafix

- [Class DataFixTypes](#class-datafixtypes)
- [DataFixers](#datafixers)
- [PackedBitStorage](#packedbitstorage)
## Class DataFixTypes

*enum* `net.minecraft.util.datafix.Class DataFixTypes`

### Fields
- `public static final Set<com.mojang.datafixers.DSL.TypeReference> TYPES_FOR_LEVEL_LIST`
- `private final com.mojang.datafixers.DSL.TypeReference type`

### Methods
- `public static DataFixTypes[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static DataFixTypes valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `static int currentVersion()`
- `public <A> com.mojang.serialization.Codec<A> wrapCodec(com.mojang.serialization.Codec<A> p_300412_,  com.mojang.datafixers.DataFixer p_297748_,  int p_299395_)`
- `public <T> com.mojang.serialization.Dynamic<T> update(com.mojang.datafixers.DataFixer p_265388_,  com.mojang.serialization.Dynamic<T> p_265179_,  int p_265372_,  int p_265168_)`
- `public <T> com.mojang.serialization.Dynamic<T> updateToCurrentVersion(com.mojang.datafixers.DataFixer p_265085_,  com.mojang.serialization.Dynamic<T> p_265237_,  int p_265099_)`
- `public CompoundTag update(com.mojang.datafixers.DataFixer p_265128_,  CompoundTag p_265422_,  int p_265549_,  int p_265304_)`
- `public CompoundTag updateToCurrentVersion(com.mojang.datafixers.DataFixer p_265583_,  CompoundTag p_265401_,  int p_265111_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## DataFixers

*class* `net.minecraft.util.datafix.DataFixers`

### Fields
- `private static final BiFunction<Integer,com.mojang.datafixers.schemas.Schema,com.mojang.datafixers.schemas.Schema> SAME`
- `private static final BiFunction<Integer,com.mojang.datafixers.schemas.Schema,com.mojang.datafixers.schemas.Schema> SAME_NAMESPACED`
- `private static final com.mojang.datafixers.DataFixer dataFixer`
- `public static final int BLENDING_VERSION` (= 3441)

### Methods
- `public static com.mojang.datafixers.DataFixer getDataFixer()`
- `private static com.mojang.datafixers.DataFixer createFixerUpper(Set<com.mojang.datafixers.DSL.TypeReference> p_275618_)`
- `private static void addFixers(com.mojang.datafixers.DataFixerBuilder p_14514_)`
- `private static UnaryOperator<String> createRenamer(Map<String,String> p_14525_)`
- `private static UnaryOperator<String> createRenamer(String p_14518_,  String p_14519_)`

## PackedBitStorage

*class* `net.minecraft.util.datafix.PackedBitStorage`

### Fields
- `private static final int BIT_TO_LONG_SHIFT` (= 6)
- `private final long[] data`
- `private final int bits`
- `private final long mask`
- `private final int size`

### Methods
- `public void set(int p_14565_,  int p_14566_)`
- `public int get(int p_14563_)`
- `public long[] getRaw()`
- `public int getBits()`
