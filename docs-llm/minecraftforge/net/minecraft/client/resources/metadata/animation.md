# net.minecraft.client.resources.metadata.animation

- [AnimationFrame](#animationframe)
- [AnimationMetadataSection](#animationmetadatasection)
- [AnimationMetadataSection.FrameOutput](#animationmetadatasection.frameoutput)
- [AnimationMetadataSectionSerializer](#animationmetadatasectionserializer)
- [Class VillagerMetaDataSection.Hat](#class-villagermetadatasection.hat)
- [FrameSize](#framesize)
- [VillagerMetaDataSection](#villagermetadatasection)
- [VillagerMetadataSectionSerializer](#villagermetadatasectionserializer)
## AnimationFrame

*class* `net.minecraft.client.resources.metadata.animation.AnimationFrame`

### Fields
- `public static final int UNKNOWN_FRAME_TIME` (= -1)
- `private final int index`
- `private final int time`

### Methods
- `public int getTime(int p_174857_)`
- `public int getIndex()`

## AnimationMetadataSection

*class* `net.minecraft.client.resources.metadata.animation.AnimationMetadataSection`

### Fields
- `public static final AnimationMetadataSectionSerializer SERIALIZER`
- `public static final String SECTION_NAME` (= "animation")
- `public static final int DEFAULT_FRAME_TIME` (= 1)
- `public static final int UNKNOWN_SIZE` (= -1)
- `public static final AnimationMetadataSection EMPTY`
- `private final List<AnimationFrame> frames`
- `private final int frameWidth`
- `private final int frameHeight`
- `private final int defaultFrameTime`
- `private final boolean interpolatedFrames`

### Methods
- `public FrameSize calculateFrameSize(int p_249859_,  int p_250148_)`
- `public int getDefaultFrameTime()`
- `public boolean isInterpolatedFrames()`
- `public void forEachFrame(AnimationMetadataSection.FrameOutput p_174862_)`

## AnimationMetadataSection.FrameOutput

*interface* `net.minecraft.client.resources.metadata.animation.AnimationMetadataSection.FrameOutput`

Enclosing class: AnimationMetadataSection

### Methods
- `void accept(int p_174864_,  int p_174865_)`

## AnimationMetadataSectionSerializer

*class* `net.minecraft.client.resources.metadata.animation.AnimationMetadataSectionSerializer`

### Methods
- `public AnimationMetadataSection fromJson(com.google.gson.JsonObject p_119064_)`
- `@Nullable private AnimationFrame getFrame(int p_119059_,  com.google.gson.JsonElement p_119060_)`
- `public String getMetadataSectionName()`

## Class VillagerMetaDataSection.Hat

*enum* `net.minecraft.client.resources.metadata.animation.Class VillagerMetaDataSection.Hat`

Enclosing class: VillagerMetaDataSection

### Fields
- `private static final Map<String,VillagerMetaDataSection.Hat> BY_NAME`
- `private final String name`

### Methods
- `public static VillagerMetaDataSection.Hat[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static VillagerMetaDataSection.Hat valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getName()`
- `public static VillagerMetaDataSection.Hat getByName(String p_119086_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## FrameSize

*record* `net.minecraft.client.resources.metadata.animation.FrameSize`

### Fields
- `private final int width`
  The field for the width record component.
- `private final int height`
  The field for the height record component.

### Methods
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

## VillagerMetaDataSection

*class* `net.minecraft.client.resources.metadata.animation.VillagerMetaDataSection`

### Fields
- `public static final VillagerMetadataSectionSerializer SERIALIZER`
- `public static final String SECTION_NAME` (= "villager")
- `private final VillagerMetaDataSection.Hat hat`

### Methods
- `public VillagerMetaDataSection.Hat getHat()`

## VillagerMetadataSectionSerializer

*class* `net.minecraft.client.resources.metadata.animation.VillagerMetadataSectionSerializer`

### Methods
- `public VillagerMetaDataSection fromJson(com.google.gson.JsonObject p_119095_)`
- `public String getMetadataSectionName()`
