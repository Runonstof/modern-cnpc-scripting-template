# net.minecraft.data.structures

- [NbtToSnbt](#nbttosnbt)
- [SnbtDatafixer](#snbtdatafixer)
- [SnbtToNbt](#snbttonbt)
- [SnbtToNbt.Filter](#snbttonbt.filter)
- [SnbtToNbt.StructureConversionException](#snbttonbt.structureconversionexception)
- [SnbtToNbt.TaskResult](#snbttonbt.taskresult)
- [StructureUpdater](#structureupdater)
## NbtToSnbt

*class* `net.minecraft.data.structures.NbtToSnbt`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Iterable<Path> inputFolders`
- `private final PackOutput output`

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`

### Methods
- `public CompletableFuture<?> run(CachedOutput p_254274_)`
- `public final String getName()`
- `private static String getName(Path p_126436_,  Path p_126437_)`
- `@Nullable public static Path convertStructure(CachedOutput p_236382_,  Path p_236383_,  String p_236384_,  Path p_236385_)`
- `public static void writeSnbt(CachedOutput p_236378_,  Path p_236379_,  String p_236380_)  throws IOException`
  - throws: IOException

## SnbtDatafixer

*class* `net.minecraft.data.structures.SnbtDatafixer`

### Methods
- `public static void main(String[] p_298764_)  throws IOException`
  - throws: IOException
- `private static void updateInDirectory(String p_300080_)  throws IOException`
  - throws: IOException

## SnbtToNbt

*class* `net.minecraft.data.structures.SnbtToNbt`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final PackOutput output`
- `private final Iterable<Path> inputFolders`
- `private final List<SnbtToNbt.Filter> filters`

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`

### Methods
- `public SnbtToNbt addFilter(SnbtToNbt.Filter p_126476_)`
- `private CompoundTag applyFilters(String p_126461_,  CompoundTag p_126462_)`
- `public CompletableFuture<?> run(CachedOutput p_254336_)`
- `public final String getName()`
- `private String getName(Path p_126469_,  Path p_126470_)`
- `private SnbtToNbt.TaskResult readStructure(Path p_126466_,  String p_126467_)`
- `private void storeStructureIfChanged(CachedOutput p_236394_,  SnbtToNbt.TaskResult p_236395_,  Path p_236396_)`

## SnbtToNbt.Filter

*interface* `net.minecraft.data.structures.SnbtToNbt.Filter`

Enclosing class: SnbtToNbt

### Methods
- `CompoundTag apply(String p_126480_,  CompoundTag p_126481_)`

## SnbtToNbt.StructureConversionException

*class* `net.minecraft.data.structures.SnbtToNbt.StructureConversionException`

Enclosing class: SnbtToNbt

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## SnbtToNbt.TaskResult

*record* `net.minecraft.data.structures.SnbtToNbt.TaskResult`

Enclosing class: SnbtToNbt

### Fields
- `private final String name`
  The field for the name record component.
- `private final byte[] payload`
  The field for the payload record component.
- `private final com.google.common.hash.HashCode hash`
  The field for the hash record component.

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
- `public byte[] payload()`
  Returns the value of the payload record component.
  - returns: the value of the payload record component
- `public com.google.common.hash.HashCode hash()`
  Returns the value of the hash record component.
  - returns: the value of the hash record component

## StructureUpdater

*class* `net.minecraft.data.structures.StructureUpdater`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Methods
- `public CompoundTag apply(String p_126503_,  CompoundTag p_126504_)`
- `public static CompoundTag update(String p_176823_,  CompoundTag p_176824_)`
