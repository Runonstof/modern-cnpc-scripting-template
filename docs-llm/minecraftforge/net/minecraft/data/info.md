# net.minecraft.data.info

- [BiomeParametersDumpReport](#biomeparametersdumpreport)
- [BlockListReport](#blocklistreport)
- [CommandsReport](#commandsreport)
- [RegistryDumpReport](#registrydumpreport)
## BiomeParametersDumpReport

*class* `net.minecraft.data.info.BiomeParametersDumpReport`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Path topPath`
- `private final CompletableFuture<HolderLookup.Provider> registries`
- `private static final com.mojang.serialization.MapCodec<ResourceKey<Biome>> ENTRY_CODEC`
- `private static final com.mojang.serialization.Codec<Climate.ParameterList<ResourceKey<Biome>>> CODEC`

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`

### Methods
- `public CompletableFuture<?> run(CachedOutput p_254091_)`
- `private static <E> CompletableFuture<?> dumpValue(Path p_254407_,  CachedOutput p_254093_,  com.mojang.serialization.DynamicOps<com.google.gson.JsonElement> p_253788_,  com.mojang.serialization.Encoder<E> p_254276_,  E p_254073_)`
- `private Path createPath(ResourceLocation p_236179_)`
- `public final String getName()`

## BlockListReport

*class* `net.minecraft.data.info.BlockListReport`

### Fields
- `private final PackOutput output`

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`, `LOGGER`

### Methods
- `public CompletableFuture<?> run(CachedOutput p_236197_)`
- `public final String getName()`

## CommandsReport

*class* `net.minecraft.data.info.CommandsReport`

### Fields
- `private final PackOutput output`
- `private final CompletableFuture<HolderLookup.Provider> registries`

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`, `LOGGER`

### Methods
- `public CompletableFuture<?> run(CachedOutput p_253721_)`
- `public final String getName()`

## RegistryDumpReport

*class* `net.minecraft.data.info.RegistryDumpReport`

### Fields
- `private final PackOutput output`

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`, `LOGGER`

### Methods
- `public CompletableFuture<?> run(CachedOutput p_253743_)`
- `private static <T> com.google.gson.JsonElement dumpRegistry(Registry<T> p_124059_)`
- `public final String getName()`
