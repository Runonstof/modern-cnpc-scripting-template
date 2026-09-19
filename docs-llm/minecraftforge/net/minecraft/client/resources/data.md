# net.minecraft.client.resources.data

- [AnimationFrame](#animationframe)
- [AnimationMetadataSection](#animationmetadatasection)
- [AnimationMetadataSectionSerializer](#animationmetadatasectionserializer)
- [BaseMetadataSectionSerializer](#basemetadatasectionserializer)
- [FontMetadataSection](#fontmetadatasection)
- [FontMetadataSectionSerializer](#fontmetadatasectionserializer)
- [IMetadataSection](#imetadatasection)
- [IMetadataSectionSerializer](#imetadatasectionserializer)
- [LanguageMetadataSection](#languagemetadatasection)
- [LanguageMetadataSectionSerializer](#languagemetadatasectionserializer)
- [MetadataSerializer](#metadataserializer)
- [PackMetadataSection](#packmetadatasection)
- [PackMetadataSectionSerializer](#packmetadatasectionserializer)
- [TextureMetadataSection](#texturemetadatasection)
- [TextureMetadataSectionSerializer](#texturemetadatasectionserializer)
## AnimationFrame

*class* `net.minecraft.client.resources.data.AnimationFrame`

### Methods
- `public boolean hasNoTime()`
- `public int getFrameTime()`
- `public int getFrameIndex()`

## AnimationMetadataSection

*class* `net.minecraft.client.resources.data.AnimationMetadataSection`

All Implemented Interfaces: IMetadataSection

### Methods
- `public int getFrameHeight()`
- `public int getFrameWidth()`
- `public int getFrameCount()`
- `public int getFrameTime()`
- `public boolean isInterpolate()`
- `public int getFrameTimeSingle(int frame)`
- `public boolean frameHasTime(int frame)`
- `public int getFrameIndex(int frame)`
- `public java.util.Set<java.lang.Integer> getFrameIndexSet()`

## AnimationMetadataSectionSerializer

*class* `net.minecraft.client.resources.data.AnimationMetadataSectionSerializer`

All Implemented Interfaces: IMetadataSectionSerializer<AnimationMetadataSection>

### Methods
- `public AnimationMetadataSection deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `public JsonElement serialize(AnimationMetadataSection p_serialize_1_,  java.lang.reflect.Type p_serialize_2_,  JsonSerializationContext p_serialize_3_)`
- `public java.lang.String getSectionName()`

## BaseMetadataSectionSerializer

*class* `net.minecraft.client.resources.data.BaseMetadataSectionSerializer`

All Implemented Interfaces: IMetadataSectionSerializer<T>

### Inherited methods
- from `net.minecraft.client.resources.data.IMetadataSectionSerializer`: `getSectionName`

## FontMetadataSection

*class* `net.minecraft.client.resources.data.FontMetadataSection`

All Implemented Interfaces: IMetadataSection

## FontMetadataSectionSerializer

*class* `net.minecraft.client.resources.data.FontMetadataSectionSerializer`

All Implemented Interfaces: IMetadataSectionSerializer<FontMetadataSection>

### Methods
- `public FontMetadataSection deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `public java.lang.String getSectionName()`

## IMetadataSection

*interface* `net.minecraft.client.resources.data.IMetadataSection`

## IMetadataSectionSerializer

*interface* `net.minecraft.client.resources.data.IMetadataSectionSerializer`

### Methods
- `java.lang.String getSectionName()`

## LanguageMetadataSection

*class* `net.minecraft.client.resources.data.LanguageMetadataSection`

All Implemented Interfaces: IMetadataSection

### Methods
- `public java.util.Collection<Language> getLanguages()`

## LanguageMetadataSectionSerializer

*class* `net.minecraft.client.resources.data.LanguageMetadataSectionSerializer`

All Implemented Interfaces: IMetadataSectionSerializer<LanguageMetadataSection>

### Methods
- `public LanguageMetadataSection deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `public java.lang.String getSectionName()`

## MetadataSerializer

*class* `net.minecraft.client.resources.data.MetadataSerializer`

### Methods
- `public <T extends IMetadataSection> void registerMetadataSectionType(IMetadataSectionSerializer<T> metadataSectionSerializer,  java.lang.Class<T> clazz)`
- `public <T extends IMetadataSection> T parseMetadataSection(java.lang.String sectionName,  JsonObject json)`

## PackMetadataSection

*class* `net.minecraft.client.resources.data.PackMetadataSection`

All Implemented Interfaces: IMetadataSection

### Methods
- `public ITextComponent getPackDescription()`
- `public int getPackFormat()`

## PackMetadataSectionSerializer

*class* `net.minecraft.client.resources.data.PackMetadataSectionSerializer`

All Implemented Interfaces: IMetadataSectionSerializer<PackMetadataSection>

### Methods
- `public PackMetadataSection deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `public JsonElement serialize(PackMetadataSection p_serialize_1_,  java.lang.reflect.Type p_serialize_2_,  JsonSerializationContext p_serialize_3_)`
- `public java.lang.String getSectionName()`

## TextureMetadataSection

*class* `net.minecraft.client.resources.data.TextureMetadataSection`

All Implemented Interfaces: IMetadataSection

### Methods
- `public boolean getTextureBlur()`
- `public boolean getTextureClamp()`

## TextureMetadataSectionSerializer

*class* `net.minecraft.client.resources.data.TextureMetadataSectionSerializer`

All Implemented Interfaces: IMetadataSectionSerializer<TextureMetadataSection>

### Methods
- `public TextureMetadataSection deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `public java.lang.String getSectionName()`
