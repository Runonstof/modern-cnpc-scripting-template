# net.minecraft.server.packs.metadata

- [MetadataSectionSerializer](#metadatasectionserializer)
- [MetadataSectionType](#metadatasectiontype)
## MetadataSectionSerializer

*interface* `net.minecraft.server.packs.metadata.MetadataSectionSerializer`

### Methods
- `String getMetadataSectionName()`
- `T fromJson(com.google.gson.JsonObject p_10365_)`

## MetadataSectionType

*interface* `net.minecraft.server.packs.metadata.MetadataSectionType`

All Superinterfaces: MetadataSectionSerializer<T>

### Methods
- `com.google.gson.JsonObject toJson(T p_249140_)`
- `static <T> MetadataSectionType<T> fromCodec(String p_249716_,  com.mojang.serialization.Codec<T> p_249525_)`

### Inherited methods
- from `net.minecraft.server.packs.metadata.MetadataSectionSerializer`: `fromJson`, `getMetadataSectionName`
