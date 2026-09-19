# net.minecraft.world.level.levelgen.presets

- [WorldPreset](#worldpreset)
- [WorldPresets](#worldpresets)
- [WorldPresets.Bootstrap](#worldpresets.bootstrap)
## WorldPreset

*class* `net.minecraft.world.level.levelgen.presets.WorldPreset`

### Fields
- `public static final com.mojang.serialization.Codec<WorldPreset> DIRECT_CODEC`
- `public static final com.mojang.serialization.Codec<Holder<WorldPreset>> CODEC`
- `private final Map<ResourceKey<LevelStem>,LevelStem> dimensions`

### Methods
- `private Registry<LevelStem> createRegistry()`
- `public WorldDimensions createWorldDimensions()`
- `public Optional<LevelStem> overworld()`
- `private static com.mojang.serialization.DataResult<WorldPreset> requireOverworld(WorldPreset p_238379_)`

## WorldPresets

*class* `net.minecraft.world.level.levelgen.presets.WorldPresets`

### Fields
- `public static final ResourceKey<WorldPreset> NORMAL`
- `public static final ResourceKey<WorldPreset> FLAT`
- `public static final ResourceKey<WorldPreset> LARGE_BIOMES`
- `public static final ResourceKey<WorldPreset> AMPLIFIED`
- `public static final ResourceKey<WorldPreset> SINGLE_BIOME_SURFACE`
- `public static final ResourceKey<WorldPreset> DEBUG`

### Methods
- `public static void bootstrap(BootstapContext<WorldPreset> p_256172_)`
- `private static ResourceKey<WorldPreset> register(String p_226460_)`
- `public static Optional<ResourceKey<WorldPreset>> fromSettings(Registry<LevelStem> p_249784_)`
- `public static WorldDimensions createNormalWorldDimensions(RegistryAccess p_251732_)`
- `public static LevelStem getNormalOverworld(RegistryAccess p_226464_)`

## WorldPresets.Bootstrap

*class* `net.minecraft.world.level.levelgen.presets.WorldPresets.Bootstrap`

Enclosing class: WorldPresets

### Fields
- `private final BootstapContext<WorldPreset> context`
- `private final HolderGetter<NoiseGeneratorSettings> noiseSettings`
- `private final HolderGetter<Biome> biomes`
- `private final HolderGetter<PlacedFeature> placedFeatures`
- `private final HolderGetter<StructureSet> structureSets`
- `private final HolderGetter<MultiNoiseBiomeSourceParameterList> multiNoiseBiomeSourceParameterLists`
- `private final Holder<DimensionType> overworldDimensionType`
- `private final LevelStem netherStem`
- `private final LevelStem endStem`

### Methods
- `private LevelStem makeOverworld(ChunkGenerator p_226488_)`
- `private LevelStem makeNoiseBasedOverworld(BiomeSource p_226485_,  Holder<NoiseGeneratorSettings> p_226486_)`
- `private WorldPreset createPresetWithCustomOverworld(LevelStem p_226490_)`
- `private void registerCustomOverworldPreset(ResourceKey<WorldPreset> p_256570_,  LevelStem p_256269_)`
- `private void registerOverworlds(BiomeSource p_273133_)`
- `public void bootstrap()`
