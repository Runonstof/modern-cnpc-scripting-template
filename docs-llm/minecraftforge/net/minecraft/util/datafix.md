# net.minecraft.util.datafix

- [DataFixer](#datafixer)
- [DataFixesManager](#datafixesmanager)
- [FixTypes](#fixtypes)
- [IDataFixer](#idatafixer)
- [IDataWalker](#idatawalker)
- [IFixableData](#ifixabledata)
- [IFixType](#ifixtype)
## DataFixer

*class* `net.minecraft.util.datafix.DataFixer`

All Implemented Interfaces: IDataFixer

### Fields
- `public final int version`

### Methods
- `public NBTTagCompound process(IFixType type,  NBTTagCompound compound)`
- `public NBTTagCompound process(IFixType type,  NBTTagCompound compound,  int versionIn)`
- `public void registerWalker(FixTypes type,  IDataWalker walker)`
- `public void registerVanillaWalker(IFixType type,  IDataWalker walker)`
- `public void registerFix(IFixType type,  IFixableData fixable)`

## DataFixesManager

*class* `net.minecraft.util.datafix.DataFixesManager`

### Methods
- `public static DataFixer createFixer()`
- `public static NBTTagCompound processItemStack(IDataFixer fixer,  NBTTagCompound compound,  int version,  java.lang.String key)`
- `public static NBTTagCompound processInventory(IDataFixer fixer,  NBTTagCompound compound,  int version,  java.lang.String key)`

## FixTypes

*enum* `net.minecraft.util.datafix.FixTypes`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<FixTypes>, IFixType

### Fields
- `public static final FixTypes LEVEL`
- `public static final FixTypes PLAYER`
- `public static final FixTypes CHUNK`
- `public static final FixTypes BLOCK_ENTITY`
- `public static final FixTypes ENTITY`
- `public static final FixTypes ITEM_INSTANCE`
- `public static final FixTypes OPTIONS`
- `public static final FixTypes STRUCTURE`

### Methods
- `public static FixTypes[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (FixTypes c : FixTypes.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static FixTypes valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## IDataFixer

*interface* `net.minecraft.util.datafix.IDataFixer`

### Methods
- `NBTTagCompound process(IFixType type,  NBTTagCompound compound,  int versionIn)`

## IDataWalker

*interface* `net.minecraft.util.datafix.IDataWalker`

### Methods
- `NBTTagCompound process(IDataFixer fixer,  NBTTagCompound compound,  int versionIn)`

## IFixableData

*interface* `net.minecraft.util.datafix.IFixableData`

### Methods
- `int getFixVersion()`
- `NBTTagCompound fixTagCompound(NBTTagCompound compound)`

## IFixType

*interface* `net.minecraft.util.datafix.IFixType`
