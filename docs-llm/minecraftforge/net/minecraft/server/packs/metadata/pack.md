# net.minecraft.server.packs.metadata.pack

- [PackMetadataSection](#packmetadatasection)
## PackMetadataSection

*record* `net.minecraft.server.packs.metadata.pack.PackMetadataSection`

### Fields
- `private final Component description`
  The field for the description record component.
- `private final int packFormat`
  The field for the packFormat record component.
- `private final Optional<InclusiveRange<Integer>> supportedFormats`
  The field for the supportedFormats record component.
- `public static final com.mojang.serialization.Codec<PackMetadataSection> CODEC`
- `public static final MetadataSectionType<PackMetadataSection> TYPE`

### Methods
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
- `public Component description()`
  Returns the value of the description record component.
  - returns: the value of the description record component
- `public int packFormat()`
  Returns the value of the packFormat record component.
  - returns: the value of the packFormat record component
- `public Optional<InclusiveRange<Integer>> supportedFormats()`
  Returns the value of the supportedFormats record component.
  - returns: the value of the supportedFormats record component
