# net.minecraft.data.metadata

- [PackMetadataGenerator](#packmetadatagenerator)
## PackMetadataGenerator

*class* `net.minecraft.data.metadata.PackMetadataGenerator`

### Fields
- `private final PackOutput output`
- `private final Map<String,Supplier<com.google.gson.JsonElement>> elements`

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`, `LOGGER`

### Methods
- `public <T> PackMetadataGenerator add(MetadataSectionType<T> p_252067_,  T p_249511_)`
- `public CompletableFuture<?> run(CachedOutput p_254137_)`
- `public final String getName()`
- `public static PackMetadataGenerator forFeaturePack(PackOutput p_256281_,  Component p_255661_)`
- `public static PackMetadataGenerator forFeaturePack(PackOutput p_253903_,  Component p_254497_,  FeatureFlagSet p_253848_)`
