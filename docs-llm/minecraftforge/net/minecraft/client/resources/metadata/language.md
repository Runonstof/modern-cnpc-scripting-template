# net.minecraft.client.resources.metadata.language

- [LanguageMetadataSection](#languagemetadatasection)
## LanguageMetadataSection

*record* `net.minecraft.client.resources.metadata.language.LanguageMetadataSection`

### Fields
- `private final Map<String,LanguageInfo> languages`
  The field for the languages record component.
- `public static final com.mojang.serialization.Codec<String> LANGUAGE_CODE_CODEC`
- `public static final com.mojang.serialization.Codec<LanguageMetadataSection> CODEC`
- `public static final MetadataSectionType<LanguageMetadataSection> TYPE`

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
- `public Map<String,LanguageInfo> languages()`
  Returns the value of the languages record component.
  - returns: the value of the languages record component
