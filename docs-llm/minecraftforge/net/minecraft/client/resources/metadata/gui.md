# net.minecraft.client.resources.metadata.gui

- [Class GuiSpriteScaling.Type](#class-guispritescaling.type)
- [GuiMetadataSection](#guimetadatasection)
- [GuiSpriteScaling](#guispritescaling)
- [GuiSpriteScaling.NineSlice](#guispritescaling.nineslice)
- [GuiSpriteScaling.NineSlice.Border](#guispritescaling.nineslice.border)
- [GuiSpriteScaling.Stretch](#guispritescaling.stretch)
- [GuiSpriteScaling.Tile](#guispritescaling.tile)
## Class GuiSpriteScaling.Type

*enum* `net.minecraft.client.resources.metadata.gui.Class GuiSpriteScaling.Type`

Enclosing interface: GuiSpriteScaling

### Fields
- `public static final com.mojang.serialization.Codec<GuiSpriteScaling.Type> CODEC`
- `private final String key`
- `private final com.mojang.serialization.Codec<? extends GuiSpriteScaling> codec`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static GuiSpriteScaling.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static GuiSpriteScaling.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`
- `public com.mojang.serialization.Codec<? extends GuiSpriteScaling> codec()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## GuiMetadataSection

*record* `net.minecraft.client.resources.metadata.gui.GuiMetadataSection`

### Fields
- `private final GuiSpriteScaling scaling`
  The field for the scaling record component.
- `public static final GuiMetadataSection DEFAULT`
- `public static final com.mojang.serialization.Codec<GuiMetadataSection> CODEC`
- `public static final MetadataSectionType<GuiMetadataSection> TYPE`

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
- `public GuiSpriteScaling scaling()`
  Returns the value of the scaling record component.
  - returns: the value of the scaling record component

## GuiSpriteScaling

*interface* `net.minecraft.client.resources.metadata.gui.GuiSpriteScaling`

### Fields
- `static final com.mojang.serialization.Codec<GuiSpriteScaling> CODEC`
- `static final GuiSpriteScaling DEFAULT`

### Methods
- `GuiSpriteScaling.Type type()`

## GuiSpriteScaling.NineSlice

*record* `net.minecraft.client.resources.metadata.gui.GuiSpriteScaling.NineSlice`

Enclosing interface: GuiSpriteScaling

### Fields
- `private final int width`
  The field for the width record component.
- `private final int height`
  The field for the height record component.
- `private final GuiSpriteScaling.NineSlice.Border border`
  The field for the border record component.
- `public static final com.mojang.serialization.Codec<GuiSpriteScaling.NineSlice> CODEC`

### Inherited fields
- from `net.minecraft.client.resources.metadata.gui.GuiSpriteScaling`: `DEFAULT`

### Methods
- `private static com.mojang.serialization.DataResult<GuiSpriteScaling.NineSlice> validate(GuiSpriteScaling.NineSlice p_298579_)`
- `public GuiSpriteScaling.Type type()`
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
- `public int width()`
  Returns the value of the width record component.
  - returns: the value of the width record component
- `public int height()`
  Returns the value of the height record component.
  - returns: the value of the height record component
- `public GuiSpriteScaling.NineSlice.Border border()`
  Returns the value of the border record component.
  - returns: the value of the border record component

## GuiSpriteScaling.NineSlice.Border

*record* `net.minecraft.client.resources.metadata.gui.GuiSpriteScaling.NineSlice.Border`

Enclosing class: GuiSpriteScaling.NineSlice

### Fields
- `private final int left`
  The field for the left record component.
- `private final int top`
  The field for the top record component.
- `private final int right`
  The field for the right record component.
- `private final int bottom`
  The field for the bottom record component.
- `private static final com.mojang.serialization.Codec<GuiSpriteScaling.NineSlice.Border> VALUE_CODEC`
- `private static final com.mojang.serialization.Codec<GuiSpriteScaling.NineSlice.Border> RECORD_CODEC`
- `static final com.mojang.serialization.Codec<GuiSpriteScaling.NineSlice.Border> CODEC`

### Methods
- `private OptionalInt unpackValue()`
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
- `public int left()`
  Returns the value of the left record component.
  - returns: the value of the left record component
- `public int top()`
  Returns the value of the top record component.
  - returns: the value of the top record component
- `public int right()`
  Returns the value of the right record component.
  - returns: the value of the right record component
- `public int bottom()`
  Returns the value of the bottom record component.
  - returns: the value of the bottom record component

## GuiSpriteScaling.Stretch

*record* `net.minecraft.client.resources.metadata.gui.GuiSpriteScaling.Stretch`

Enclosing interface: GuiSpriteScaling

### Fields
- `public static final com.mojang.serialization.Codec<GuiSpriteScaling.Stretch> CODEC`

### Inherited fields
- from `net.minecraft.client.resources.metadata.gui.GuiSpriteScaling`: `DEFAULT`

### Methods
- `public GuiSpriteScaling.Type type()`
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

## GuiSpriteScaling.Tile

*record* `net.minecraft.client.resources.metadata.gui.GuiSpriteScaling.Tile`

Enclosing interface: GuiSpriteScaling

### Fields
- `private final int width`
  The field for the width record component.
- `private final int height`
  The field for the height record component.
- `public static final com.mojang.serialization.Codec<GuiSpriteScaling.Tile> CODEC`

### Inherited fields
- from `net.minecraft.client.resources.metadata.gui.GuiSpriteScaling`: `DEFAULT`

### Methods
- `public GuiSpriteScaling.Type type()`
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
- `public int width()`
  Returns the value of the width record component.
  - returns: the value of the width record component
- `public int height()`
  Returns the value of the height record component.
  - returns: the value of the height record component
