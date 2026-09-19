# net.minecraft.world.level.biome

- [AmbientAdditionsSettings](#ambientadditionssettings)
- [AmbientMoodSettings](#ambientmoodsettings)
- [AmbientParticleSettings](#ambientparticlesettings)
- [Biome](#biome)
- [Biome.BiomeBuilder](#biome.biomebuilder)
- [Biome.ClimateSettings](#biome.climatesettings)
- [BiomeGenerationSettings](#biomegenerationsettings)
- [BiomeGenerationSettings.Builder](#biomegenerationsettings.builder)
- [BiomeGenerationSettings.PlainBuilder](#biomegenerationsettings.plainbuilder)
- [BiomeManager](#biomemanager)
- [BiomeManager.NoiseBiomeSource](#biomemanager.noisebiomesource)
- [BiomeResolver](#biomeresolver)
- [Biomes](#biomes)
- [BiomeSource](#biomesource)
- [BiomeSources](#biomesources)
- [BiomeSpecialEffects](#biomespecialeffects)
- [BiomeSpecialEffects.Builder](#biomespecialeffects.builder)
- [BiomeSpecialEffects.GrassColorModifier.ColorModifier](#biomespecialeffects.grasscolormodifier.colormodifier)
- [CheckerboardColumnBiomeSource](#checkerboardcolumnbiomesource)
- [Class Biome.Precipitation](#class-biome.precipitation)
- [Class Biome.TemperatureModifier](#class-biome.temperaturemodifier)
- [Class BiomeSpecialEffects.GrassColorModifier](#class-biomespecialeffects.grasscolormodifier)
- [Climate](#climate)
- [Climate.DistanceMetric](#climate.distancemetric)
- [Climate.Parameter](#climate.parameter)
- [Climate.ParameterList](#climate.parameterlist)
- [Climate.ParameterPoint](#climate.parameterpoint)
- [Climate.RTree](#climate.rtree)
- [Climate.RTree.Leaf](#climate.rtree.leaf)
- [Climate.RTree.Node](#climate.rtree.node)
- [Climate.RTree.SubTree](#climate.rtree.subtree)
- [Climate.Sampler](#climate.sampler)
- [Climate.SpawnFinder](#climate.spawnfinder)
- [Climate.SpawnFinder.Result](#climate.spawnfinder.result)
- [Climate.TargetPoint](#climate.targetpoint)
- [FeatureSorter](#featuresorter)
- [FeatureSorter.StepFeatureData](#featuresorter.stepfeaturedata)
- [FixedBiomeSource](#fixedbiomesource)
- [MobSpawnSettings](#mobspawnsettings)
- [MobSpawnSettings.Builder](#mobspawnsettings.builder)
- [MobSpawnSettings.MobSpawnCost](#mobspawnsettings.mobspawncost)
- [MobSpawnSettings.SpawnerData](#mobspawnsettings.spawnerdata)
- [MultiNoiseBiomeSource](#multinoisebiomesource)
- [MultiNoiseBiomeSourceParameterList](#multinoisebiomesourceparameterlist)
- [MultiNoiseBiomeSourceParameterList.Preset](#multinoisebiomesourceparameterlist.preset)
- [MultiNoiseBiomeSourceParameterList.Preset.SourceProvider](#multinoisebiomesourceparameterlist.preset.sourceprovider)
- [MultiNoiseBiomeSourceParameterLists](#multinoisebiomesourceparameterlists)
- [OverworldBiomeBuilder](#overworldbiomebuilder)
- [TheEndBiomeSource](#theendbiomesource)
## AmbientAdditionsSettings

*class* `net.minecraft.world.level.biome.AmbientAdditionsSettings`

### Fields
- `public static final com.mojang.serialization.Codec<AmbientAdditionsSettings> CODEC`
- `private final Holder<SoundEvent> soundEvent`
- `private final double tickChance`

### Methods
- `public Holder<SoundEvent> getSoundEvent()`
- `public double getTickChance()`

## AmbientMoodSettings

*class* `net.minecraft.world.level.biome.AmbientMoodSettings`

### Fields
- `public static final com.mojang.serialization.Codec<AmbientMoodSettings> CODEC`
- `public static final AmbientMoodSettings LEGACY_CAVE_SETTINGS`
- `private final Holder<SoundEvent> soundEvent`
- `private final int tickDelay`
- `private final int blockSearchExtent`
- `private final double soundPositionOffset`

### Methods
- `public Holder<SoundEvent> getSoundEvent()`
- `public int getTickDelay()`
- `public int getBlockSearchExtent()`
- `public double getSoundPositionOffset()`

## AmbientParticleSettings

*class* `net.minecraft.world.level.biome.AmbientParticleSettings`

### Fields
- `public static final com.mojang.serialization.Codec<AmbientParticleSettings> CODEC`
- `private final ParticleOptions options`
- `private final float probability`

### Methods
- `public ParticleOptions getOptions()`
- `public boolean canSpawn(RandomSource p_220528_)`

## Biome

*class* `net.minecraft.world.level.biome.Biome`

### Fields
- `public static final com.mojang.serialization.Codec<Biome> DIRECT_CODEC`
- `public static final com.mojang.serialization.Codec<Biome> NETWORK_CODEC`
- `public static final com.mojang.serialization.Codec<Holder<Biome>> CODEC`
- `public static final com.mojang.serialization.Codec<HolderSet<Biome>> LIST_CODEC`
- `private static final PerlinSimplexNoise TEMPERATURE_NOISE`
- `static final PerlinSimplexNoise FROZEN_TEMPERATURE_NOISE`
- `@Deprecated(forRemoval=true) public static final PerlinSimplexNoise BIOME_INFO_NOISE` (deprecated)
- `private static final int TEMPERATURE_CACHE_SIZE` (= 1024)
- `private final Biome.ClimateSettings climateSettings`
- `private final BiomeGenerationSettings generationSettings`
- `private final MobSpawnSettings mobSettings`
- `private final BiomeSpecialEffects specialEffects`
- `private final ThreadLocal<it.unimi.dsi.fastutil.longs.Long2FloatLinkedOpenHashMap> temperatureCache`
- `private final ModifiableBiomeInfo modifiableBiomeInfo`

### Methods
- `public int getSkyColor()`
- `public MobSpawnSettings getMobSettings()`
- `public boolean hasPrecipitation()`
- `public Biome.Precipitation getPrecipitationAt(BlockPos p_265163_)`
- `private float getHeightAdjustedTemperature(BlockPos p_47529_)`
- `@Deprecated private float getTemperature(BlockPos p_47506_)` (deprecated)
- `public boolean shouldFreeze(LevelReader p_47478_,  BlockPos p_47479_)`
- `public boolean shouldFreeze(LevelReader p_47481_,  BlockPos p_47482_,  boolean p_47483_)`
- `public boolean coldEnoughToSnow(BlockPos p_198905_)`
- `public boolean warmEnoughToRain(BlockPos p_198907_)`
- `public boolean shouldMeltFrozenOceanIcebergSlightly(BlockPos p_198909_)`
- `public boolean shouldSnow(LevelReader p_47520_,  BlockPos p_47521_)`
- `public BiomeGenerationSettings getGenerationSettings()`
- `public int getFogColor()`
- `public int getGrassColor(double p_47465_,  double p_47466_)`
- `private int getGrassColorFromTexture()`
- `public int getFoliageColor()`
- `private int getFoliageColorFromTexture()`
- `public float getBaseTemperature()`
- `public BiomeSpecialEffects getSpecialEffects()`
- `public int getWaterColor()`
- `public int getWaterFogColor()`
- `public Optional<AmbientParticleSettings> getAmbientParticle()`
- `public Optional<Holder<SoundEvent>> getAmbientLoop()`
- `public Optional<AmbientMoodSettings> getAmbientMood()`
- `public Optional<AmbientAdditionsSettings> getAmbientAdditions()`
- `public Optional<Music> getBackgroundMusic()`
- `public ModifiableBiomeInfo modifiableBiomeInfo()`
  Returns Cache of original biome data and biome data modified by biome modifiers.
   Modified biome data is set by server after datapacks and serverconfigs load.
   Climate and effects field reads are coremodded to redirect to this.
  - returns: Cache of original biome data and biome data modified by biome modifiers
- `public Biome.ClimateSettings getModifiedClimateSettings()`
  Returns The biome's climate settings, with modifications if called after modifiers are applied in server init..
  - returns: The biome's climate settings, with modifications if called after modifiers are applied in server init.
- `public BiomeSpecialEffects getModifiedSpecialEffects()`
  Returns The biome's client effects, with modifications if called after modifiers are applied in server init..
  - returns: The biome's client effects, with modifications if called after modifiers are applied in server init.

## Biome.BiomeBuilder

*class* `net.minecraft.world.level.biome.Biome.BiomeBuilder`

Enclosing class: Biome

### Fields
- `private boolean hasPrecipitation`
- `@Nullable private Float temperature`
- `private Biome.TemperatureModifier temperatureModifier`
- `@Nullable private Float downfall`
- `@Nullable private BiomeSpecialEffects specialEffects`
- `@Nullable private MobSpawnSettings mobSpawnSettings`
- `@Nullable private BiomeGenerationSettings generationSettings`

### Methods
- `public Biome.BiomeBuilder hasPrecipitation(boolean p_265480_)`
- `public Biome.BiomeBuilder temperature(float p_47610_)`
- `public Biome.BiomeBuilder downfall(float p_47612_)`
- `public Biome.BiomeBuilder specialEffects(BiomeSpecialEffects p_47604_)`
- `public Biome.BiomeBuilder mobSpawnSettings(MobSpawnSettings p_47606_)`
- `public Biome.BiomeBuilder generationSettings(BiomeGenerationSettings p_47602_)`
- `public Biome.BiomeBuilder temperatureAdjustment(Biome.TemperatureModifier p_47600_)`
- `public Biome build()`
- `public String toString()`

## Biome.ClimateSettings

*record* `net.minecraft.world.level.biome.Biome.ClimateSettings`

Enclosing class: Biome

### Fields
- `private final boolean hasPrecipitation`
  The field for the hasPrecipitation record component.
- `private final float temperature`
  The field for the temperature record component.
- `private final Biome.TemperatureModifier temperatureModifier`
  The field for the temperatureModifier record component.
- `private final float downfall`
  The field for the downfall record component.
- `public static final com.mojang.serialization.MapCodec<Biome.ClimateSettings> CODEC`

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
- `public boolean hasPrecipitation()`
  Returns the value of the hasPrecipitation record component.
  - returns: the value of the hasPrecipitation record component
- `public float temperature()`
  Returns the value of the temperature record component.
  - returns: the value of the temperature record component
- `public Biome.TemperatureModifier temperatureModifier()`
  Returns the value of the temperatureModifier record component.
  - returns: the value of the temperatureModifier record component
- `public float downfall()`
  Returns the value of the downfall record component.
  - returns: the value of the downfall record component

## BiomeGenerationSettings

*class* `net.minecraft.world.level.biome.BiomeGenerationSettings`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final BiomeGenerationSettings EMPTY`
- `public static final com.mojang.serialization.MapCodec<BiomeGenerationSettings> CODEC`
- `private final Map<GenerationStep.Carving,HolderSet<ConfiguredWorldCarver<?>>> carvers`
- `private final Set<GenerationStep.Carving> carversView`
- `private final List<HolderSet<PlacedFeature>> features`
- `private final Supplier<List<ConfiguredFeature<?,?>>> flowerFeatures`
- `private final Supplier<Set<PlacedFeature>> featureSet`

### Methods
- `public Iterable<Holder<ConfiguredWorldCarver<?>>> getCarvers(GenerationStep.Carving p_204188_)`
- `public Set<GenerationStep.Carving> getCarvingStages()`
- `public List<ConfiguredFeature<?,?>> getFlowerFeatures()`
- `public List<HolderSet<PlacedFeature>> features()`
- `public boolean hasFeature(PlacedFeature p_186659_)`

## BiomeGenerationSettings.Builder

*class* `net.minecraft.world.level.biome.BiomeGenerationSettings.Builder`

Enclosing class: BiomeGenerationSettings

### Fields
- `private final HolderGetter<PlacedFeature> placedFeatures`
- `private final HolderGetter<ConfiguredWorldCarver<?>> worldCarvers`

### Inherited fields
- from `net.minecraft.world.level.biome.BiomeGenerationSettings.PlainBuilder`: `carvers`, `features`

### Methods
- `public BiomeGenerationSettings.Builder addFeature(GenerationStep.Decoration p_256059_,  ResourceKey<PlacedFeature> p_256259_)`
- `public BiomeGenerationSettings.Builder addCarver(GenerationStep.Carving p_256471_,  ResourceKey<ConfiguredWorldCarver<?>> p_255733_)`

### Inherited methods
- from `net.minecraft.world.level.biome.BiomeGenerationSettings.PlainBuilder`: `addCarver`, `addFeature`, `addFeature`, `addFeatureStepsUpTo`, `build`

## BiomeGenerationSettings.PlainBuilder

*class* `net.minecraft.world.level.biome.BiomeGenerationSettings.PlainBuilder`

Enclosing class: BiomeGenerationSettings

### Fields
- `protected final Map<GenerationStep.Carving,List<Holder<ConfiguredWorldCarver<?>>>> carvers`
- `protected final List<List<Holder<PlacedFeature>>> features`

### Methods
- `public BiomeGenerationSettings.PlainBuilder addFeature(GenerationStep.Decoration p_256360_,  Holder<PlacedFeature> p_256577_)`
- `public BiomeGenerationSettings.PlainBuilder addFeature(int p_256305_,  Holder<PlacedFeature> p_255636_)`
- `public BiomeGenerationSettings.PlainBuilder addCarver(GenerationStep.Carving p_256091_,  Holder<ConfiguredWorldCarver<?>> p_256082_)`
- `protected void addFeatureStepsUpTo(int p_256411_)`
- `public BiomeGenerationSettings build()`

## BiomeManager

*class* `net.minecraft.world.level.biome.BiomeManager`

### Fields
- `public static final int CHUNK_CENTER_QUART`
- `private static final int ZOOM_BITS` (= 2)
- `private static final int ZOOM` (= 4)
- `private static final int ZOOM_MASK` (= 3)
- `private final BiomeManager.NoiseBiomeSource noiseBiomeSource`
- `private final long biomeZoomSeed`

### Methods
- `public static long obfuscateSeed(long p_47878_)`
- `public BiomeManager withDifferentSource(BiomeManager.NoiseBiomeSource p_186688_)`
- `public Holder<Biome> getBiome(BlockPos p_204215_)`
- `public Holder<Biome> getNoiseBiomeAtPosition(double p_204207_,  double p_204208_,  double p_204209_)`
- `public Holder<Biome> getNoiseBiomeAtPosition(BlockPos p_204217_)`
- `public Holder<Biome> getNoiseBiomeAtQuart(int p_204211_,  int p_204212_,  int p_204213_)`
- `private static double getFiddledDistance(long p_186680_,  int p_186681_,  int p_186682_,  int p_186683_,  double p_186684_,  double p_186685_,  double p_186686_)`
- `private static double getFiddle(long p_186690_)`

## BiomeManager.NoiseBiomeSource

*interface* `net.minecraft.world.level.biome.BiomeManager.NoiseBiomeSource`

Enclosing class: BiomeManager

### Methods
- `Holder<Biome> getNoiseBiome(int p_204218_,  int p_204219_,  int p_204220_)`

## BiomeResolver

*interface* `net.minecraft.world.level.biome.BiomeResolver`

### Methods
- `Holder<Biome> getNoiseBiome(int p_204221_,  int p_204222_,  int p_204223_,  Climate.Sampler p_204224_)`

## Biomes

*class* `net.minecraft.world.level.biome.Biomes`

### Fields
- `public static final ResourceKey<Biome> THE_VOID`
- `public static final ResourceKey<Biome> PLAINS`
- `public static final ResourceKey<Biome> SUNFLOWER_PLAINS`
- `public static final ResourceKey<Biome> SNOWY_PLAINS`
- `public static final ResourceKey<Biome> ICE_SPIKES`
- `public static final ResourceKey<Biome> DESERT`
- `public static final ResourceKey<Biome> SWAMP`
- `public static final ResourceKey<Biome> MANGROVE_SWAMP`
- `public static final ResourceKey<Biome> FOREST`
- `public static final ResourceKey<Biome> FLOWER_FOREST`
- `public static final ResourceKey<Biome> BIRCH_FOREST`
- `public static final ResourceKey<Biome> DARK_FOREST`
- `public static final ResourceKey<Biome> OLD_GROWTH_BIRCH_FOREST`
- `public static final ResourceKey<Biome> OLD_GROWTH_PINE_TAIGA`
- `public static final ResourceKey<Biome> OLD_GROWTH_SPRUCE_TAIGA`
- `public static final ResourceKey<Biome> TAIGA`
- `public static final ResourceKey<Biome> SNOWY_TAIGA`
- `public static final ResourceKey<Biome> SAVANNA`
- `public static final ResourceKey<Biome> SAVANNA_PLATEAU`
- `public static final ResourceKey<Biome> WINDSWEPT_HILLS`
- `public static final ResourceKey<Biome> WINDSWEPT_GRAVELLY_HILLS`
- `public static final ResourceKey<Biome> WINDSWEPT_FOREST`
- `public static final ResourceKey<Biome> WINDSWEPT_SAVANNA`
- `public static final ResourceKey<Biome> JUNGLE`
- `public static final ResourceKey<Biome> SPARSE_JUNGLE`
- `public static final ResourceKey<Biome> BAMBOO_JUNGLE`
- `public static final ResourceKey<Biome> BADLANDS`
- `public static final ResourceKey<Biome> ERODED_BADLANDS`
- `public static final ResourceKey<Biome> WOODED_BADLANDS`
- `public static final ResourceKey<Biome> MEADOW`
- `public static final ResourceKey<Biome> CHERRY_GROVE`
- `public static final ResourceKey<Biome> GROVE`
- `public static final ResourceKey<Biome> SNOWY_SLOPES`
- `public static final ResourceKey<Biome> FROZEN_PEAKS`
- `public static final ResourceKey<Biome> JAGGED_PEAKS`
- `public static final ResourceKey<Biome> STONY_PEAKS`
- `public static final ResourceKey<Biome> RIVER`
- `public static final ResourceKey<Biome> FROZEN_RIVER`
- `public static final ResourceKey<Biome> BEACH`
- `public static final ResourceKey<Biome> SNOWY_BEACH`
- `public static final ResourceKey<Biome> STONY_SHORE`
- `public static final ResourceKey<Biome> WARM_OCEAN`
- `public static final ResourceKey<Biome> LUKEWARM_OCEAN`
- `public static final ResourceKey<Biome> DEEP_LUKEWARM_OCEAN`
- `public static final ResourceKey<Biome> OCEAN`
- `public static final ResourceKey<Biome> DEEP_OCEAN`
- `public static final ResourceKey<Biome> COLD_OCEAN`
- `public static final ResourceKey<Biome> DEEP_COLD_OCEAN`
- `public static final ResourceKey<Biome> FROZEN_OCEAN`
- `public static final ResourceKey<Biome> DEEP_FROZEN_OCEAN`
- `public static final ResourceKey<Biome> MUSHROOM_FIELDS`
- `public static final ResourceKey<Biome> DRIPSTONE_CAVES`
- `public static final ResourceKey<Biome> LUSH_CAVES`
- `public static final ResourceKey<Biome> DEEP_DARK`
- `public static final ResourceKey<Biome> NETHER_WASTES`
- `public static final ResourceKey<Biome> WARPED_FOREST`
- `public static final ResourceKey<Biome> CRIMSON_FOREST`
- `public static final ResourceKey<Biome> SOUL_SAND_VALLEY`
- `public static final ResourceKey<Biome> BASALT_DELTAS`
- `public static final ResourceKey<Biome> THE_END`
- `public static final ResourceKey<Biome> END_HIGHLANDS`
- `public static final ResourceKey<Biome> END_MIDLANDS`
- `public static final ResourceKey<Biome> SMALL_END_ISLANDS`
- `public static final ResourceKey<Biome> END_BARRENS`

### Methods
- `private static ResourceKey<Biome> register(String p_48229_)`

## BiomeSource

*class* `net.minecraft.world.level.biome.BiomeSource`

### Fields
- `public static final com.mojang.serialization.Codec<BiomeSource> CODEC`
- `private final Supplier<Set<Holder<Biome>>> possibleBiomes`

### Methods
- `protected abstract com.mojang.serialization.Codec<? extends BiomeSource> codec()`
- `protected abstract Stream<Holder<Biome>> collectPossibleBiomes()`
- `public Set<Holder<Biome>> possibleBiomes()`
- `public Set<Holder<Biome>> getBiomesWithin(int p_186705_,  int p_186706_,  int p_186707_,  int p_186708_,  Climate.Sampler p_186709_)`
- `@Nullable public com.mojang.datafixers.util.Pair<BlockPos,Holder<Biome>> findBiomeHorizontal(int p_220571_,  int p_220572_,  int p_220573_,  int p_220574_,  Predicate<Holder<Biome>> p_220575_,  RandomSource p_220576_,  Climate.Sampler p_220577_)`
- `@Nullable public com.mojang.datafixers.util.Pair<BlockPos,Holder<Biome>> findClosestBiome3d(BlockPos p_220578_,  int p_220579_,  int p_220580_,  int p_220581_,  Predicate<Holder<Biome>> p_220582_,  Climate.Sampler p_220583_,  LevelReader p_220584_)`
- `@Nullable public com.mojang.datafixers.util.Pair<BlockPos,Holder<Biome>> findBiomeHorizontal(int p_220561_,  int p_220562_,  int p_220563_,  int p_220564_,  int p_220565_,  Predicate<Holder<Biome>> p_220566_,  RandomSource p_220567_,  boolean p_220568_,  Climate.Sampler p_220569_)`
- `public abstract Holder<Biome> getNoiseBiome(int p_204238_,  int p_204239_,  int p_204240_,  Climate.Sampler p_204241_)`
- `public void addDebugInfo(List<String> p_207837_,  BlockPos p_207838_,  Climate.Sampler p_207839_)`

## BiomeSources

*class* `net.minecraft.world.level.biome.BiomeSources`

### Methods
- `public static com.mojang.serialization.Codec<? extends BiomeSource> bootstrap(Registry<com.mojang.serialization.Codec<? extends BiomeSource>> p_220587_)`

## BiomeSpecialEffects

*class* `net.minecraft.world.level.biome.BiomeSpecialEffects`

### Fields
- `public static final com.mojang.serialization.Codec<BiomeSpecialEffects> CODEC`
- `private final int fogColor`
- `private final int waterColor`
- `private final int waterFogColor`
- `private final int skyColor`
- `private final Optional<Integer> foliageColorOverride`
- `private final Optional<Integer> grassColorOverride`
- `private final BiomeSpecialEffects.GrassColorModifier grassColorModifier`
- `private final Optional<AmbientParticleSettings> ambientParticleSettings`
- `private final Optional<Holder<SoundEvent>> ambientLoopSoundEvent`
- `private final Optional<AmbientMoodSettings> ambientMoodSettings`
- `private final Optional<AmbientAdditionsSettings> ambientAdditionsSettings`
- `private final Optional<Music> backgroundMusic`

### Methods
- `public int getFogColor()`
- `public int getWaterColor()`
- `public int getWaterFogColor()`
- `public int getSkyColor()`
- `public Optional<Integer> getFoliageColorOverride()`
- `public Optional<Integer> getGrassColorOverride()`
- `public BiomeSpecialEffects.GrassColorModifier getGrassColorModifier()`
- `public Optional<AmbientParticleSettings> getAmbientParticleSettings()`
- `public Optional<Holder<SoundEvent>> getAmbientLoopSoundEvent()`
- `public Optional<AmbientMoodSettings> getAmbientMoodSettings()`
- `public Optional<AmbientAdditionsSettings> getAmbientAdditionsSettings()`
- `public Optional<Music> getBackgroundMusic()`

## BiomeSpecialEffects.Builder

*class* `net.minecraft.world.level.biome.BiomeSpecialEffects.Builder`

Enclosing class: BiomeSpecialEffects

### Fields
- `protected OptionalInt fogColor`
- `protected OptionalInt waterColor`
- `protected OptionalInt waterFogColor`
- `protected OptionalInt skyColor`
- `protected Optional<Integer> foliageColorOverride`
- `protected Optional<Integer> grassColorOverride`
- `protected BiomeSpecialEffects.GrassColorModifier grassColorModifier`
- `protected Optional<AmbientParticleSettings> ambientParticle`
- `protected Optional<Holder<SoundEvent>> ambientLoopSoundEvent`
- `protected Optional<AmbientMoodSettings> ambientMoodSettings`
- `protected Optional<AmbientAdditionsSettings> ambientAdditionsSettings`
- `protected Optional<Music> backgroundMusic`

### Methods
- `public BiomeSpecialEffects.Builder fogColor(int p_48020_)`
- `public BiomeSpecialEffects.Builder waterColor(int p_48035_)`
- `public BiomeSpecialEffects.Builder waterFogColor(int p_48038_)`
- `public BiomeSpecialEffects.Builder skyColor(int p_48041_)`
- `public BiomeSpecialEffects.Builder foliageColorOverride(int p_48044_)`
- `public BiomeSpecialEffects.Builder grassColorOverride(int p_48046_)`
- `public BiomeSpecialEffects.Builder grassColorModifier(BiomeSpecialEffects.GrassColorModifier p_48032_)`
- `public BiomeSpecialEffects.Builder ambientParticle(AmbientParticleSettings p_48030_)`
- `public BiomeSpecialEffects.Builder ambientLoopSound(Holder<SoundEvent> p_263327_)`
- `public BiomeSpecialEffects.Builder ambientMoodSound(AmbientMoodSettings p_48028_)`
- `public BiomeSpecialEffects.Builder ambientAdditionsSound(AmbientAdditionsSettings p_48026_)`
- `public BiomeSpecialEffects.Builder backgroundMusic(@Nullable  Music p_48022_)`
- `public BiomeSpecialEffects build()`

## BiomeSpecialEffects.GrassColorModifier.ColorModifier

*interface* `net.minecraft.world.level.biome.BiomeSpecialEffects.GrassColorModifier.ColorModifier`

Enclosing class: BiomeSpecialEffects.GrassColorModifier

### Methods
- `int modifyGrassColor(double x,  double z,  int color)`

## CheckerboardColumnBiomeSource

*class* `net.minecraft.world.level.biome.CheckerboardColumnBiomeSource`

### Fields
- `public static final com.mojang.serialization.Codec<CheckerboardColumnBiomeSource> CODEC`
- `private final HolderSet<Biome> allowedBiomes`
- `private final int bitShift`
- `private final int size`

### Methods
- `protected Stream<Holder<Biome>> collectPossibleBiomes()`
- `protected com.mojang.serialization.Codec<? extends BiomeSource> codec()`
- `public Holder<Biome> getNoiseBiome(int p_204248_,  int p_204249_,  int p_204250_,  Climate.Sampler p_204251_)`

### Inherited methods
- from `net.minecraft.world.level.biome.BiomeSource`: `addDebugInfo`, `findBiomeHorizontal`, `findBiomeHorizontal`, `findClosestBiome3d`, `getBiomesWithin`, `possibleBiomes`

## Class Biome.Precipitation

*enum* `net.minecraft.world.level.biome.Class Biome.Precipitation`

Enclosing class: Biome

### Methods
- `public static Biome.Precipitation[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Biome.Precipitation valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Biome.TemperatureModifier

*enum* `net.minecraft.world.level.biome.Class Biome.TemperatureModifier`

Enclosing class: Biome

### Fields
- `private final String name`
- `public static final com.mojang.serialization.Codec<Biome.TemperatureModifier> CODEC`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static Biome.TemperatureModifier[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Biome.TemperatureModifier valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public abstract float modifyTemperature(BlockPos p_47754_,  float p_47755_)`
- `public String getName()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class BiomeSpecialEffects.GrassColorModifier

*enum* `net.minecraft.world.level.biome.Class BiomeSpecialEffects.GrassColorModifier`

Enclosing class: BiomeSpecialEffects

### Fields
- `private final String name`
- `public static final com.mojang.serialization.Codec<BiomeSpecialEffects.GrassColorModifier> CODEC`
- `private static final Map<String,BiomeSpecialEffects.GrassColorModifier> BY_NAME`
- `private BiomeSpecialEffects.GrassColorModifier.ColorModifier delegate`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static BiomeSpecialEffects.GrassColorModifier[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static BiomeSpecialEffects.GrassColorModifier valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int modifyColor(double p_48065_,  double p_48066_,  int p_48067_)`
- `public static BiomeSpecialEffects.GrassColorModifier create(String name,  String id,  BiomeSpecialEffects.GrassColorModifier.ColorModifier delegate)`
- `public void init()`
  Description copied from interface: IExtensibleEnum
  Called by generated factory code to do any post-constructor setup required by
   the enum. Should not be called manually.
- `public static BiomeSpecialEffects.GrassColorModifier byName(String name)`
- `public String getName()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Climate

*class* `net.minecraft.world.level.biome.Climate`

### Fields
- `private static final boolean DEBUG_SLOW_BIOME_SEARCH` (= false)
- `private static final float QUANTIZATION_FACTOR` (= 10000.0f)
- `protected static final int PARAMETER_COUNT` (= 7)

### Methods
- `public static Climate.TargetPoint target(float p_186782_,  float p_186783_,  float p_186784_,  float p_186785_,  float p_186786_,  float p_186787_)`
- `public static Climate.ParameterPoint parameters(float p_186789_,  float p_186790_,  float p_186791_,  float p_186792_,  float p_186793_,  float p_186794_,  float p_186795_)`
- `public static Climate.ParameterPoint parameters(Climate.Parameter p_186799_,  Climate.Parameter p_186800_,  Climate.Parameter p_186801_,  Climate.Parameter p_186802_,  Climate.Parameter p_186803_,  Climate.Parameter p_186804_,  float p_186805_)`
- `public static long quantizeCoord(float p_186780_)`
- `public static float unquantizeCoord(long p_186797_)`
- `public static Climate.Sampler empty()`
- `public static BlockPos findSpawnPosition(List<Climate.ParameterPoint> p_207843_,  Climate.Sampler p_207844_)`

## Climate.DistanceMetric

*interface* `net.minecraft.world.level.biome.Climate.DistanceMetric`

Enclosing class: Climate

### Methods
- `long distance(Climate.RTree.Node<T> p_186810_,  long[] p_186811_)`

## Climate.Parameter

*record* `net.minecraft.world.level.biome.Climate.Parameter`

Enclosing class: Climate

### Fields
- `private final long min`
  The field for the min record component.
- `private final long max`
  The field for the max record component.
- `public static final com.mojang.serialization.Codec<Climate.Parameter> CODEC`

### Methods
- `public static Climate.Parameter point(float p_186821_)`
- `public static Climate.Parameter span(float p_186823_,  float p_186824_)`
- `public static Climate.Parameter span(Climate.Parameter p_186830_,  Climate.Parameter p_186831_)`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public long distance(long p_186826_)`
- `public long distance(Climate.Parameter p_186828_)`
- `public Climate.Parameter span(@Nullable  Climate.Parameter p_186837_)`
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public long min()`
  Returns the value of the min record component.
  - returns: the value of the min record component
- `public long max()`
  Returns the value of the max record component.
  - returns: the value of the max record component

## Climate.ParameterList

*class* `net.minecraft.world.level.biome.Climate.ParameterList`

Enclosing class: Climate

### Fields
- `private final List<com.mojang.datafixers.util.Pair<Climate.ParameterPoint,T>> values`
- `private final Climate.RTree<T> index`

### Methods
- `public static <T> com.mojang.serialization.Codec<Climate.ParameterList<T>> codec(com.mojang.serialization.MapCodec<T> p_275523_)`
- `public List<com.mojang.datafixers.util.Pair<Climate.ParameterPoint,T>> values()`
- `public T findValue(Climate.TargetPoint p_204253_)`
- `public T findValueBruteForce(Climate.TargetPoint p_204255_)`
- `public T findValueIndex(Climate.TargetPoint p_186852_)`
- `protected T findValueIndex(Climate.TargetPoint p_186854_,  Climate.DistanceMetric<T> p_186855_)`

## Climate.ParameterPoint

*record* `net.minecraft.world.level.biome.Climate.ParameterPoint`

Enclosing class: Climate

### Fields
- `private final Climate.Parameter temperature`
  The field for the temperature record component.
- `private final Climate.Parameter humidity`
  The field for the humidity record component.
- `private final Climate.Parameter continentalness`
  The field for the continentalness record component.
- `private final Climate.Parameter erosion`
  The field for the erosion record component.
- `private final Climate.Parameter depth`
  The field for the depth record component.
- `private final Climate.Parameter weirdness`
  The field for the weirdness record component.
- `private final long offset`
  The field for the offset record component.
- `public static final com.mojang.serialization.Codec<Climate.ParameterPoint> CODEC`

### Methods
- `long fitness(Climate.TargetPoint p_186883_)`
- `protected List<Climate.Parameter> parameterSpace()`
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
- `public Climate.Parameter temperature()`
  Returns the value of the temperature record component.
  - returns: the value of the temperature record component
- `public Climate.Parameter humidity()`
  Returns the value of the humidity record component.
  - returns: the value of the humidity record component
- `public Climate.Parameter continentalness()`
  Returns the value of the continentalness record component.
  - returns: the value of the continentalness record component
- `public Climate.Parameter erosion()`
  Returns the value of the erosion record component.
  - returns: the value of the erosion record component
- `public Climate.Parameter depth()`
  Returns the value of the depth record component.
  - returns: the value of the depth record component
- `public Climate.Parameter weirdness()`
  Returns the value of the weirdness record component.
  - returns: the value of the weirdness record component
- `public long offset()`
  Returns the value of the offset record component.
  - returns: the value of the offset record component

## Climate.RTree

*class* `net.minecraft.world.level.biome.Climate.RTree`

Enclosing class: Climate

### Fields
- `private static final int CHILDREN_PER_NODE` (= 6)
- `private final Climate.RTree.Node<T> root`
- `private final ThreadLocal<Climate.RTree.Leaf<T>> lastResult`

### Methods
- `public static <T> Climate.RTree<T> create(List<com.mojang.datafixers.util.Pair<Climate.ParameterPoint,T>> p_186936_)`
- `private static <T> Climate.RTree.Node<T> build(int p_186921_,  List<? extends Climate.RTree.Node<T>> p_186922_)`
- `private static <T> void sort(List<? extends Climate.RTree.Node<T>> p_186938_,  int p_186939_,  int p_186940_,  boolean p_186941_)`
- `private static <T> Comparator<Climate.RTree.Node<T>> comparator(int p_186924_,  boolean p_186925_)`
- `private static <T> List<Climate.RTree.SubTree<T>> bucketize(List<? extends Climate.RTree.Node<T>> p_186945_)`
- `private static long cost(Climate.Parameter[] p_186943_)`
- `static <T> List<Climate.Parameter> buildParameterSpace(List<? extends Climate.RTree.Node<T>> p_186947_)`
- `public T search(Climate.TargetPoint p_186931_,  Climate.DistanceMetric<T> p_186932_)`

## Climate.RTree.Leaf

*class* `net.minecraft.world.level.biome.Climate.RTree.Leaf`

Enclosing class: Climate.RTree<T>

### Fields
- `final T value`

### Inherited fields
- from `net.minecraft.world.level.biome.Climate.RTree.Node`: `parameterSpace`

### Methods
- `protected Climate.RTree.Leaf<T> search(long[] p_186953_,  @Nullable  Climate.RTree.Leaf<T> p_186954_,  Climate.DistanceMetric<T> p_186955_)`

### Inherited methods
- from `net.minecraft.world.level.biome.Climate.RTree.Node`: `distance`, `toString`

## Climate.RTree.Node

*class* `net.minecraft.world.level.biome.Climate.RTree.Node`

Enclosing class: Climate.RTree<T>

### Fields
- `protected final Climate.Parameter[] parameterSpace`

### Methods
- `protected abstract Climate.RTree.Leaf<T> search(long[] p_186961_,  @Nullable  Climate.RTree.Leaf<T> p_186962_,  Climate.DistanceMetric<T> p_186963_)`
- `protected long distance(long[] p_186960_)`
- `public String toString()`

## Climate.RTree.SubTree

*class* `net.minecraft.world.level.biome.Climate.RTree.SubTree`

Enclosing class: Climate.RTree<T>

### Fields
- `final Climate.RTree.Node<T>[] children`

### Inherited fields
- from `net.minecraft.world.level.biome.Climate.RTree.Node`: `parameterSpace`

### Methods
- `protected Climate.RTree.Leaf<T> search(long[] p_186972_,  @Nullable  Climate.RTree.Leaf<T> p_186973_,  Climate.DistanceMetric<T> p_186974_)`

### Inherited methods
- from `net.minecraft.world.level.biome.Climate.RTree.Node`: `distance`, `toString`

## Climate.Sampler

*record* `net.minecraft.world.level.biome.Climate.Sampler`

Enclosing class: Climate

### Fields
- `private final DensityFunction temperature`
  The field for the temperature record component.
- `private final DensityFunction humidity`
  The field for the humidity record component.
- `private final DensityFunction continentalness`
  The field for the continentalness record component.
- `private final DensityFunction erosion`
  The field for the erosion record component.
- `private final DensityFunction depth`
  The field for the depth record component.
- `private final DensityFunction weirdness`
  The field for the weirdness record component.
- `private final List<Climate.ParameterPoint> spawnTarget`
  The field for the spawnTarget record component.

### Methods
- `public Climate.TargetPoint sample(int p_186975_,  int p_186976_,  int p_186977_)`
- `public BlockPos findSpawnPosition()`
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
- `public DensityFunction temperature()`
  Returns the value of the temperature record component.
  - returns: the value of the temperature record component
- `public DensityFunction humidity()`
  Returns the value of the humidity record component.
  - returns: the value of the humidity record component
- `public DensityFunction continentalness()`
  Returns the value of the continentalness record component.
  - returns: the value of the continentalness record component
- `public DensityFunction erosion()`
  Returns the value of the erosion record component.
  - returns: the value of the erosion record component
- `public DensityFunction depth()`
  Returns the value of the depth record component.
  - returns: the value of the depth record component
- `public DensityFunction weirdness()`
  Returns the value of the weirdness record component.
  - returns: the value of the weirdness record component
- `public List<Climate.ParameterPoint> spawnTarget()`
  Returns the value of the spawnTarget record component.
  - returns: the value of the spawnTarget record component

## Climate.SpawnFinder

*class* `net.minecraft.world.level.biome.Climate.SpawnFinder`

Enclosing class: Climate

### Fields
- `Climate.SpawnFinder.Result result`

### Methods
- `private void radialSearch(List<Climate.ParameterPoint> p_207875_,  Climate.Sampler p_207876_,  float p_207877_,  float p_207878_)`
- `private static Climate.SpawnFinder.Result getSpawnPositionAndFitness(List<Climate.ParameterPoint> p_207880_,  Climate.Sampler p_207881_,  int p_207882_,  int p_207883_)`

## Climate.SpawnFinder.Result

*record* `net.minecraft.world.level.biome.Climate.SpawnFinder.Result`

Enclosing class: Climate.SpawnFinder

### Fields
- `private final BlockPos location`
  The field for the location record component.
- `private final long fitness`
  The field for the fitness record component.

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
- `public BlockPos location()`
  Returns the value of the location record component.
  - returns: the value of the location record component
- `public long fitness()`
  Returns the value of the fitness record component.
  - returns: the value of the fitness record component

## Climate.TargetPoint

*record* `net.minecraft.world.level.biome.Climate.TargetPoint`

Enclosing class: Climate

### Fields
- `private final long temperature`
  The field for the temperature record component.
- `private final long humidity`
  The field for the humidity record component.
- `private final long continentalness`
  The field for the continentalness record component.
- `private final long erosion`
  The field for the erosion record component.
- `private final long depth`
  The field for the depth record component.
- `private final long weirdness`
  The field for the weirdness record component.

### Methods
- `protected long[] toParameterArray()`
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
- `public long temperature()`
  Returns the value of the temperature record component.
  - returns: the value of the temperature record component
- `public long humidity()`
  Returns the value of the humidity record component.
  - returns: the value of the humidity record component
- `public long continentalness()`
  Returns the value of the continentalness record component.
  - returns: the value of the continentalness record component
- `public long erosion()`
  Returns the value of the erosion record component.
  - returns: the value of the erosion record component
- `public long depth()`
  Returns the value of the depth record component.
  - returns: the value of the depth record component
- `public long weirdness()`
  Returns the value of the weirdness record component.
  - returns: the value of the weirdness record component

## FeatureSorter

*class* `net.minecraft.world.level.biome.FeatureSorter`

### Methods
- `public static <T> List<FeatureSorter.StepFeatureData> buildFeaturesPerStep(List<T> p_220604_,  Function<T,List<HolderSet<PlacedFeature>>> p_220605_,  boolean p_220606_)`

## FeatureSorter.StepFeatureData

*record* `net.minecraft.world.level.biome.FeatureSorter.StepFeatureData`

Enclosing class: FeatureSorter

### Fields
- `private final List<PlacedFeature> features`
  The field for the features record component.
- `private final ToIntFunction<PlacedFeature> indexMapping`
  The field for the indexMapping record component.

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
- `public List<PlacedFeature> features()`
  Returns the value of the features record component.
  - returns: the value of the features record component
- `public ToIntFunction<PlacedFeature> indexMapping()`
  Returns the value of the indexMapping record component.
  - returns: the value of the indexMapping record component

## FixedBiomeSource

*class* `net.minecraft.world.level.biome.FixedBiomeSource`

### Fields
- `public static final com.mojang.serialization.Codec<FixedBiomeSource> CODEC`
- `private final Holder<Biome> biome`

### Methods
- `protected Stream<Holder<Biome>> collectPossibleBiomes()`
- `protected com.mojang.serialization.Codec<? extends BiomeSource> codec()`
- `public Holder<Biome> getNoiseBiome(int p_204265_,  int p_204266_,  int p_204267_,  Climate.Sampler p_204268_)`
- `public Holder<Biome> getNoiseBiome(int p_204261_,  int p_204262_,  int p_204263_)`
- `@Nullable public com.mojang.datafixers.util.Pair<BlockPos,Holder<Biome>> findBiomeHorizontal(int p_220640_,  int p_220641_,  int p_220642_,  int p_220643_,  int p_220644_,  Predicate<Holder<Biome>> p_220645_,  RandomSource p_220646_,  boolean p_220647_,  Climate.Sampler p_220648_)`
- `@Nullable public com.mojang.datafixers.util.Pair<BlockPos,Holder<Biome>> findClosestBiome3d(BlockPos p_220650_,  int p_220651_,  int p_220652_,  int p_220653_,  Predicate<Holder<Biome>> p_220654_,  Climate.Sampler p_220655_,  LevelReader p_220656_)`
- `public Set<Holder<Biome>> getBiomesWithin(int p_187038_,  int p_187039_,  int p_187040_,  int p_187041_,  Climate.Sampler p_187042_)`

### Inherited methods
- from `net.minecraft.world.level.biome.BiomeSource`: `addDebugInfo`, `findBiomeHorizontal`, `possibleBiomes`

## MobSpawnSettings

*class* `net.minecraft.world.level.biome.MobSpawnSettings`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final float DEFAULT_CREATURE_SPAWN_PROBABILITY` (= 0.10000000149011612f)
- `public static final WeightedRandomList<MobSpawnSettings.SpawnerData> EMPTY_MOB_LIST`
- `public static final MobSpawnSettings EMPTY`
- `public static final com.mojang.serialization.MapCodec<MobSpawnSettings> CODEC`
- `private final float creatureGenerationProbability`
- `private final Map<MobCategory,WeightedRandomList<MobSpawnSettings.SpawnerData>> spawners`
- `private final Map<EntityType<?>,MobSpawnSettings.MobSpawnCost> mobSpawnCosts`
- `private final Set<MobCategory> typesView`
- `private final Set<EntityType<?>> costView`

### Methods
- `public WeightedRandomList<MobSpawnSettings.SpawnerData> getMobs(MobCategory p_151799_)`
- `public Set<MobCategory> getSpawnerTypes()`
- `@Nullable public MobSpawnSettings.MobSpawnCost getMobSpawnCost(EntityType<?> p_48346_)`
- `public Set<EntityType<?>> getEntityTypes()`
- `public float getCreatureProbability()`

## MobSpawnSettings.Builder

*class* `net.minecraft.world.level.biome.MobSpawnSettings.Builder`

Enclosing class: MobSpawnSettings

### Fields
- `protected final Map<MobCategory,List<MobSpawnSettings.SpawnerData>> spawners`
- `protected final Map<EntityType<?>,MobSpawnSettings.MobSpawnCost> mobSpawnCosts`
- `protected float creatureGenerationProbability`

### Methods
- `public MobSpawnSettings.Builder addSpawn(MobCategory p_48377_,  MobSpawnSettings.SpawnerData p_48378_)`
- `public MobSpawnSettings.Builder addMobCharge(EntityType<?> p_48371_,  double p_48372_,  double p_48373_)`
- `public MobSpawnSettings.Builder creatureGenerationProbability(float p_48369_)`
- `public MobSpawnSettings build()`

## MobSpawnSettings.MobSpawnCost

*record* `net.minecraft.world.level.biome.MobSpawnSettings.MobSpawnCost`

Enclosing class: MobSpawnSettings

### Fields
- `private final double energyBudget`
  The field for the energyBudget record component.
- `private final double charge`
  The field for the charge record component.
- `public static final com.mojang.serialization.Codec<MobSpawnSettings.MobSpawnCost> CODEC`

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
- `public double energyBudget()`
  Returns the value of the energyBudget record component.
  - returns: the value of the energyBudget record component
- `public double charge()`
  Returns the value of the charge record component.
  - returns: the value of the charge record component

## MobSpawnSettings.SpawnerData

*class* `net.minecraft.world.level.biome.MobSpawnSettings.SpawnerData`

Enclosing class: MobSpawnSettings

### Fields
- `public static final com.mojang.serialization.Codec<MobSpawnSettings.SpawnerData> CODEC`
- `public final EntityType<?> type`
- `public final int minCount`
- `public final int maxCount`

### Methods
- `public String toString()`

### Inherited methods
- from `net.minecraft.util.random.WeightedEntry.IntrusiveBase`: `getWeight`

## MultiNoiseBiomeSource

*class* `net.minecraft.world.level.biome.MultiNoiseBiomeSource`

### Fields
- `private static final com.mojang.serialization.MapCodec<Holder<Biome>> ENTRY_CODEC`
- `public static final com.mojang.serialization.MapCodec<Climate.ParameterList<Holder<Biome>>> DIRECT_CODEC`
- `private static final com.mojang.serialization.MapCodec<Holder<MultiNoiseBiomeSourceParameterList>> PRESET_CODEC`
- `public static final com.mojang.serialization.Codec<MultiNoiseBiomeSource> CODEC`
- `private final com.mojang.datafixers.util.Either<Climate.ParameterList<Holder<Biome>>,Holder<MultiNoiseBiomeSourceParameterList>> parameters`

### Methods
- `public static MultiNoiseBiomeSource createFromList(Climate.ParameterList<Holder<Biome>> p_275223_)`
- `public static MultiNoiseBiomeSource createFromPreset(Holder<MultiNoiseBiomeSourceParameterList> p_275250_)`
- `private Climate.ParameterList<Holder<Biome>> parameters()`
- `protected Stream<Holder<Biome>> collectPossibleBiomes()`
- `protected com.mojang.serialization.Codec<? extends BiomeSource> codec()`
- `public boolean stable(ResourceKey<MultiNoiseBiomeSourceParameterList> p_275637_)`
- `public Holder<Biome> getNoiseBiome(int p_204272_,  int p_204273_,  int p_204274_,  Climate.Sampler p_204275_)`
- `public Holder<Biome> getNoiseBiome(Climate.TargetPoint p_204270_)`
- `public void addDebugInfo(List<String> p_207895_,  BlockPos p_207896_,  Climate.Sampler p_207897_)`

### Inherited methods
- from `net.minecraft.world.level.biome.BiomeSource`: `findBiomeHorizontal`, `findBiomeHorizontal`, `findClosestBiome3d`, `getBiomesWithin`, `possibleBiomes`

## MultiNoiseBiomeSourceParameterList

*class* `net.minecraft.world.level.biome.MultiNoiseBiomeSourceParameterList`

### Fields
- `public static final com.mojang.serialization.Codec<MultiNoiseBiomeSourceParameterList> DIRECT_CODEC`
- `public static final com.mojang.serialization.Codec<Holder<MultiNoiseBiomeSourceParameterList>> CODEC`
- `private final MultiNoiseBiomeSourceParameterList.Preset preset`
- `private final Climate.ParameterList<Holder<Biome>> parameters`

### Methods
- `public Climate.ParameterList<Holder<Biome>> parameters()`
- `public static Map<MultiNoiseBiomeSourceParameterList.Preset,Climate.ParameterList<ResourceKey<Biome>>> knownPresets()`

## MultiNoiseBiomeSourceParameterList.Preset

*record* `net.minecraft.world.level.biome.MultiNoiseBiomeSourceParameterList.Preset`

Enclosing class: MultiNoiseBiomeSourceParameterList

### Fields
- `private final ResourceLocation id`
  The field for the id record component.
- `private final MultiNoiseBiomeSourceParameterList.Preset.SourceProvider provider`
  The field for the provider record component.
- `public static final MultiNoiseBiomeSourceParameterList.Preset NETHER`
- `public static final MultiNoiseBiomeSourceParameterList.Preset OVERWORLD`
- `static final Map<ResourceLocation,MultiNoiseBiomeSourceParameterList.Preset> BY_NAME`
- `public static final com.mojang.serialization.Codec<MultiNoiseBiomeSourceParameterList.Preset> CODEC`

### Methods
- `static <T> Climate.ParameterList<T> generateOverworldBiomes(Function<ResourceKey<Biome>,T> p_277826_)`
- `public Stream<ResourceKey<Biome>> usedBiomes()`
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
- `public ResourceLocation id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public MultiNoiseBiomeSourceParameterList.Preset.SourceProvider provider()`
  Returns the value of the provider record component.
  - returns: the value of the provider record component

## MultiNoiseBiomeSourceParameterList.Preset.SourceProvider

*interface* `net.minecraft.world.level.biome.MultiNoiseBiomeSourceParameterList.Preset.SourceProvider`

Enclosing class: MultiNoiseBiomeSourceParameterList.Preset

### Methods
- `<T> Climate.ParameterList<T> apply(Function<ResourceKey<Biome>,T> p_275485_)`

## MultiNoiseBiomeSourceParameterLists

*class* `net.minecraft.world.level.biome.MultiNoiseBiomeSourceParameterLists`

### Fields
- `public static final ResourceKey<MultiNoiseBiomeSourceParameterList> NETHER`
- `public static final ResourceKey<MultiNoiseBiomeSourceParameterList> OVERWORLD`

### Methods
- `public static void bootstrap(BootstapContext<MultiNoiseBiomeSourceParameterList> p_275387_)`
- `private static ResourceKey<MultiNoiseBiomeSourceParameterList> register(String p_275281_)`

## OverworldBiomeBuilder

*class* `net.minecraft.world.level.biome.OverworldBiomeBuilder`

### Fields
- `private static final float VALLEY_SIZE` (= 0.05000000074505806f)
- `private static final float LOW_START` (= 0.2666666805744171f)
- `public static final float HIGH_START` (= 0.4000000059604645f)
- `private static final float HIGH_END` (= 0.9333333373069763f)
- `private static final float PEAK_SIZE` (= 0.10000000149011612f)
- `public static final float PEAK_START` (= 0.5666666626930237f)
- `private static final float PEAK_END` (= 0.7666667103767395f)
- `public static final float NEAR_INLAND_START` (= -0.10999999940395355f)
- `public static final float MID_INLAND_START` (= 0.029999999329447746f)
- `public static final float FAR_INLAND_START` (= 0.30000001192092896f)
- `public static final float EROSION_INDEX_1_START` (= -0.7799999713897705f)
- `public static final float EROSION_INDEX_2_START` (= -0.375f)
- `private static final float EROSION_DEEP_DARK_DRYNESS_THRESHOLD` (= -0.22499999403953552f)
- `private static final float DEPTH_DEEP_DARK_DRYNESS_THRESHOLD` (= 0.8999999761581421f)
- `private final Climate.Parameter FULL_RANGE`
- `private final Climate.Parameter[] temperatures`
- `private final Climate.Parameter[] humidities`
- `private final Climate.Parameter[] erosions`
- `private final Climate.Parameter FROZEN_RANGE`
- `private final Climate.Parameter UNFROZEN_RANGE`
- `private final Climate.Parameter mushroomFieldsContinentalness`
- `private final Climate.Parameter deepOceanContinentalness`
- `private final Climate.Parameter oceanContinentalness`
- `private final Climate.Parameter coastContinentalness`
- `private final Climate.Parameter inlandContinentalness`
- `private final Climate.Parameter nearInlandContinentalness`
- `private final Climate.Parameter midInlandContinentalness`
- `private final Climate.Parameter farInlandContinentalness`
- `private final ResourceKey<Biome>[][] OCEANS`
- `private final ResourceKey<Biome>[][] MIDDLE_BIOMES`
- `private final ResourceKey<Biome>[][] MIDDLE_BIOMES_VARIANT`
- `private final ResourceKey<Biome>[][] PLATEAU_BIOMES`
- `private final ResourceKey<Biome>[][] PLATEAU_BIOMES_VARIANT`
- `private final ResourceKey<Biome>[][] SHATTERED_BIOMES`

### Methods
- `public List<Climate.ParameterPoint> spawnTarget()`
- `protected void addBiomes(Consumer<com.mojang.datafixers.util.Pair<Climate.ParameterPoint,ResourceKey<Biome>>> p_187176_)`
- `private void addDebugBiomes(Consumer<com.mojang.datafixers.util.Pair<Climate.ParameterPoint,ResourceKey<Biome>>> p_256276_)`
- `private void addOffCoastBiomes(Consumer<com.mojang.datafixers.util.Pair<Climate.ParameterPoint,ResourceKey<Biome>>> p_187196_)`
- `private void addInlandBiomes(Consumer<com.mojang.datafixers.util.Pair<Climate.ParameterPoint,ResourceKey<Biome>>> p_187216_)`
- `private void addPeaks(Consumer<com.mojang.datafixers.util.Pair<Climate.ParameterPoint,ResourceKey<Biome>>> p_187178_,  Climate.Parameter p_187179_)`
- `private void addHighSlice(Consumer<com.mojang.datafixers.util.Pair<Climate.ParameterPoint,ResourceKey<Biome>>> p_187198_,  Climate.Parameter p_187199_)`
- `private void addMidSlice(Consumer<com.mojang.datafixers.util.Pair<Climate.ParameterPoint,ResourceKey<Biome>>> p_187218_,  Climate.Parameter p_187219_)`
- `private void addLowSlice(Consumer<com.mojang.datafixers.util.Pair<Climate.ParameterPoint,ResourceKey<Biome>>> p_187229_,  Climate.Parameter p_187230_)`
- `private void addValleys(Consumer<com.mojang.datafixers.util.Pair<Climate.ParameterPoint,ResourceKey<Biome>>> p_187238_,  Climate.Parameter p_187239_)`
- `private void addUndergroundBiomes(Consumer<com.mojang.datafixers.util.Pair<Climate.ParameterPoint,ResourceKey<Biome>>> p_187227_)`
- `private ResourceKey<Biome> pickMiddleBiome(int p_187164_,  int p_187165_,  Climate.Parameter p_187166_)`
- `private ResourceKey<Biome> pickMiddleBiomeOrBadlandsIfHot(int p_187192_,  int p_187193_,  Climate.Parameter p_187194_)`
- `private ResourceKey<Biome> pickMiddleBiomeOrBadlandsIfHotOrSlopeIfCold(int p_187212_,  int p_187213_,  Climate.Parameter p_187214_)`
- `private ResourceKey<Biome> maybePickWindsweptSavannaBiome(int p_201991_,  int p_201992_,  Climate.Parameter p_201993_,  ResourceKey<Biome> p_201994_)`
- `private ResourceKey<Biome> pickShatteredCoastBiome(int p_187223_,  int p_187224_,  Climate.Parameter p_187225_)`
- `private ResourceKey<Biome> pickBeachBiome(int p_187161_,  int p_187162_)`
- `private ResourceKey<Biome> pickBadlandsBiome(int p_187173_,  Climate.Parameter p_187174_)`
- `private ResourceKey<Biome> pickPlateauBiome(int p_187234_,  int p_187235_,  Climate.Parameter p_187236_)`
- `private ResourceKey<Biome> pickPeakBiome(int p_187241_,  int p_187242_,  Climate.Parameter p_187243_)`
- `private ResourceKey<Biome> pickSlopeBiome(int p_187245_,  int p_187246_,  Climate.Parameter p_187247_)`
- `private ResourceKey<Biome> pickShatteredBiome(int p_202002_,  int p_202003_,  Climate.Parameter p_202004_)`
- `private void addSurfaceBiome(Consumer<com.mojang.datafixers.util.Pair<Climate.ParameterPoint,ResourceKey<Biome>>> p_187181_,  Climate.Parameter p_187182_,  Climate.Parameter p_187183_,  Climate.Parameter p_187184_,  Climate.Parameter p_187185_,  Climate.Parameter p_187186_,  float p_187187_,  ResourceKey<Biome> p_187188_)`
- `private void addUndergroundBiome(Consumer<com.mojang.datafixers.util.Pair<Climate.ParameterPoint,ResourceKey<Biome>>> p_187201_,  Climate.Parameter p_187202_,  Climate.Parameter p_187203_,  Climate.Parameter p_187204_,  Climate.Parameter p_187205_,  Climate.Parameter p_187206_,  float p_187207_,  ResourceKey<Biome> p_187208_)`
- `private void addBottomBiome(Consumer<com.mojang.datafixers.util.Pair<Climate.ParameterPoint,ResourceKey<Biome>>> p_220669_,  Climate.Parameter p_220670_,  Climate.Parameter p_220671_,  Climate.Parameter p_220672_,  Climate.Parameter p_220673_,  Climate.Parameter p_220674_,  float p_220675_,  ResourceKey<Biome> p_220676_)`
- `public static boolean isDeepDarkRegion(DensityFunction p_252040_,  DensityFunction p_250447_,  DensityFunction.FunctionContext p_249270_)`
- `public static String getDebugStringForPeaksAndValleys(double p_187156_)`
- `public String getDebugStringForContinentalness(double p_187190_)`
- `public String getDebugStringForErosion(double p_187210_)`
- `public String getDebugStringForTemperature(double p_187221_)`
- `public String getDebugStringForHumidity(double p_187232_)`
- `private static String getDebugStringForNoiseValue(double p_187158_,  Climate.Parameter[] p_187159_)`
- `public Climate.Parameter[] getTemperatureThresholds()`
- `public Climate.Parameter[] getHumidityThresholds()`
- `public Climate.Parameter[] getErosionThresholds()`
- `public Climate.Parameter[] getContinentalnessThresholds()`
- `public Climate.Parameter[] getPeaksAndValleysThresholds()`
- `public Climate.Parameter[] getWeirdnessThresholds()`

## TheEndBiomeSource

*class* `net.minecraft.world.level.biome.TheEndBiomeSource`

### Fields
- `public static final com.mojang.serialization.Codec<TheEndBiomeSource> CODEC`
- `private final Holder<Biome> end`
- `private final Holder<Biome> highlands`
- `private final Holder<Biome> midlands`
- `private final Holder<Biome> islands`
- `private final Holder<Biome> barrens`

### Methods
- `public static TheEndBiomeSource create(HolderGetter<Biome> p_256561_)`
- `protected Stream<Holder<Biome>> collectPossibleBiomes()`
- `protected com.mojang.serialization.Codec<? extends BiomeSource> codec()`
- `public Holder<Biome> getNoiseBiome(int p_204292_,  int p_204293_,  int p_204294_,  Climate.Sampler p_204295_)`

### Inherited methods
- from `net.minecraft.world.level.biome.BiomeSource`: `addDebugInfo`, `findBiomeHorizontal`, `findBiomeHorizontal`, `findClosestBiome3d`, `getBiomesWithin`, `possibleBiomes`
