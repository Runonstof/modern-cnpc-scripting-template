# net.minecraft.data.registries

- [RegistriesDatapackGenerator](#registriesdatapackgenerator)
- [VanillaRegistries](#vanillaregistries)
## RegistriesDatapackGenerator

*class* `net.minecraft.data.registries.RegistriesDatapackGenerator`

### Fields
- `private static final org.slf4j.Logger LOGGER` (deprecated)
- `private final PackOutput output` (deprecated)
- `private final CompletableFuture<HolderLookup.Provider> registries` (deprecated)
- `private final Predicate<String> namespacePredicate` (deprecated)

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`

### Methods
- `public CompletableFuture<HolderLookup.Provider> getRegistryProvider()` (deprecated)
  Forge: Call this to get the registry holder lookup provider that includes elements added via DatapackBuiltinEntriesProvider
- `public CompletableFuture<?> run(CachedOutput p_255785_)` (deprecated)
- `private <T> Optional<CompletableFuture<?>> dumpRegistryCap(CachedOutput p_256502_,  HolderLookup.Provider p_256492_,  com.mojang.serialization.DynamicOps<com.google.gson.JsonElement> p_256000_,  RegistryDataLoader.RegistryData<T> p_256449_)` (deprecated)
- `private static <E> CompletableFuture<?> dumpValue(Path p_255678_,  CachedOutput p_256438_,  com.mojang.serialization.DynamicOps<com.google.gson.JsonElement> p_256127_,  com.mojang.serialization.Encoder<E> p_255938_,  E p_256590_)` (deprecated)
- `public String getName()` (deprecated)

## VanillaRegistries

*class* `net.minecraft.data.registries.VanillaRegistries`

### Fields
- `private static final RegistrySetBuilder BUILDER`
- `public static final List<? extends ResourceKey<? extends Registry<?>>> DATAPACK_REGISTRY_KEYS`

### Methods
- `private static void validateThatAllBiomeFeaturesHaveBiomeFilter(HolderLookup.Provider p_256242_)`
- `public static void validateThatAllBiomeFeaturesHaveBiomeFilter(HolderGetter<PlacedFeature> p_272963_,  HolderLookup<Biome> p_273693_)`
- `private static boolean validatePlacedFeature(PlacedFeature p_255656_)`
- `public static HolderLookup.Provider createLookup()`
