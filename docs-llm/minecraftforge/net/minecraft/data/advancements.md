# net.minecraft.data.advancements

- [AdvancementProvider](#advancementprovider)
- [AdvancementSubProvider](#advancementsubprovider)
## AdvancementProvider

*class* `net.minecraft.data.advancements.AdvancementProvider`

### Fields
- `private final PackOutput.PathProvider pathProvider` (deprecated)
- `private final List<AdvancementSubProvider> subProviders` (deprecated)
- `private final CompletableFuture<HolderLookup.Provider> registries` (deprecated)

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`, `LOGGER`

### Methods
- `public CompletableFuture<?> run(CachedOutput p_254268_)` (deprecated)
- `public final String getName()` (deprecated)

## AdvancementSubProvider

*interface* `net.minecraft.data.advancements.AdvancementSubProvider`

### Methods
- `void generate(HolderLookup.Provider p_255901_,  Consumer<AdvancementHolder> p_250888_)`
