# net.minecraft.data.worldgen.biome

- [BiomeData](#biomedata)
- [EndBiomes](#endbiomes)
- [NetherBiomes](#netherbiomes)
- [OverworldBiomes](#overworldbiomes)
## BiomeData

*class* `net.minecraft.data.worldgen.biome.BiomeData`

### Methods
- `public static void bootstrap(BootstapContext<Biome> p_273095_)`

## EndBiomes

*class* `net.minecraft.data.worldgen.biome.EndBiomes`

### Methods
- `private static Biome baseEndBiome(BiomeGenerationSettings.Builder p_194825_)`
- `public static Biome endBarrens(HolderGetter<PlacedFeature> p_256510_,  HolderGetter<ConfiguredWorldCarver<?>> p_256130_)`
- `public static Biome theEnd(HolderGetter<PlacedFeature> p_255623_,  HolderGetter<ConfiguredWorldCarver<?>> p_255991_)`
- `public static Biome endMidlands(HolderGetter<PlacedFeature> p_255719_,  HolderGetter<ConfiguredWorldCarver<?>> p_255751_)`
- `public static Biome endHighlands(HolderGetter<PlacedFeature> p_256650_,  HolderGetter<ConfiguredWorldCarver<?>> p_256540_)`
- `public static Biome smallEndIslands(HolderGetter<PlacedFeature> p_255848_,  HolderGetter<ConfiguredWorldCarver<?>> p_256605_)`

## NetherBiomes

*class* `net.minecraft.data.worldgen.biome.NetherBiomes`

### Methods
- `public static Biome netherWastes(HolderGetter<PlacedFeature> p_255840_,  HolderGetter<ConfiguredWorldCarver<?>> p_255956_)`
- `public static Biome soulSandValley(HolderGetter<PlacedFeature> p_256586_,  HolderGetter<ConfiguredWorldCarver<?>> p_256434_)`
- `public static Biome basaltDeltas(HolderGetter<PlacedFeature> p_255798_,  HolderGetter<ConfiguredWorldCarver<?>> p_256227_)`
- `public static Biome crimsonForest(HolderGetter<PlacedFeature> p_256350_,  HolderGetter<ConfiguredWorldCarver<?>> p_256386_)`
- `public static Biome warpedForest(HolderGetter<PlacedFeature> p_256156_,  HolderGetter<ConfiguredWorldCarver<?>> p_256284_)`

## OverworldBiomes

*class* `net.minecraft.data.worldgen.biome.OverworldBiomes`

### Fields
- `protected static final int NORMAL_WATER_COLOR` (= 4159204)
- `protected static final int NORMAL_WATER_FOG_COLOR` (= 329011)
- `private static final int OVERWORLD_FOG_COLOR` (= 12638463)
- `@Nullable private static final Music NORMAL_MUSIC`

### Methods
- `protected static int calculateSkyColor(float p_194844_)`
- `private static Biome biome(boolean p_265746_,  float p_265800_,  float p_265276_,  MobSpawnSettings.Builder p_265425_,  BiomeGenerationSettings.Builder p_265371_,  @Nullable  Music p_265636_)`
- `private static Biome biome(boolean p_273483_,  float p_272621_,  float p_273588_,  int p_273605_,  int p_272756_,  @Nullable  Integer p_272889_,  @Nullable  Integer p_272657_,  MobSpawnSettings.Builder p_273300_,  BiomeGenerationSettings.Builder p_272700_,  @Nullable  Music p_272996_)`
- `private static void globalOverworldGeneration(BiomeGenerationSettings.Builder p_194870_)`
- `public static Biome oldGrowthTaiga(HolderGetter<PlacedFeature> p_255849_,  HolderGetter<ConfiguredWorldCarver<?>> p_256578_,  boolean p_194877_)`
- `public static Biome sparseJungle(HolderGetter<PlacedFeature> p_255977_,  HolderGetter<ConfiguredWorldCarver<?>> p_256531_)`
- `public static Biome jungle(HolderGetter<PlacedFeature> p_256033_,  HolderGetter<ConfiguredWorldCarver<?>> p_255651_)`
- `public static Biome bambooJungle(HolderGetter<PlacedFeature> p_255817_,  HolderGetter<ConfiguredWorldCarver<?>> p_256096_)`
- `private static Biome baseJungle(HolderGetter<PlacedFeature> p_285208_,  HolderGetter<ConfiguredWorldCarver<?>> p_285276_,  float p_285079_,  boolean p_285393_,  boolean p_285109_,  boolean p_285122_,  MobSpawnSettings.Builder p_285449_,  Music p_285440_)`
- `public static Biome windsweptHills(HolderGetter<PlacedFeature> p_255703_,  HolderGetter<ConfiguredWorldCarver<?>> p_256239_,  boolean p_194887_)`
- `public static Biome desert(HolderGetter<PlacedFeature> p_256064_,  HolderGetter<ConfiguredWorldCarver<?>> p_255852_)`
- `public static Biome plains(HolderGetter<PlacedFeature> p_256382_,  HolderGetter<ConfiguredWorldCarver<?>> p_256173_,  boolean p_194882_,  boolean p_194883_,  boolean p_194884_)`
- `public static Biome mushroomFields(HolderGetter<PlacedFeature> p_255775_,  HolderGetter<ConfiguredWorldCarver<?>> p_256480_)`
- `public static Biome savanna(HolderGetter<PlacedFeature> p_256294_,  HolderGetter<ConfiguredWorldCarver<?>> p_256583_,  boolean p_194879_,  boolean p_194880_)`
- `public static Biome badlands(HolderGetter<PlacedFeature> p_256309_,  HolderGetter<ConfiguredWorldCarver<?>> p_256430_,  boolean p_194897_)`
- `private static Biome baseOcean(MobSpawnSettings.Builder p_194872_,  int p_194873_,  int p_194874_,  BiomeGenerationSettings.Builder p_194875_)`
- `private static BiomeGenerationSettings.Builder baseOceanGeneration(HolderGetter<PlacedFeature> p_256289_,  HolderGetter<ConfiguredWorldCarver<?>> p_256514_)`
- `public static Biome coldOcean(HolderGetter<PlacedFeature> p_256141_,  HolderGetter<ConfiguredWorldCarver<?>> p_255841_,  boolean p_194900_)`
- `public static Biome ocean(HolderGetter<PlacedFeature> p_256265_,  HolderGetter<ConfiguredWorldCarver<?>> p_256537_,  boolean p_255752_)`
- `public static Biome lukeWarmOcean(HolderGetter<PlacedFeature> p_255660_,  HolderGetter<ConfiguredWorldCarver<?>> p_256231_,  boolean p_194906_)`
- `public static Biome warmOcean(HolderGetter<PlacedFeature> p_256477_,  HolderGetter<ConfiguredWorldCarver<?>> p_256024_)`
- `public static Biome frozenOcean(HolderGetter<PlacedFeature> p_256482_,  HolderGetter<ConfiguredWorldCarver<?>> p_256660_,  boolean p_194909_)`
- `public static Biome forest(HolderGetter<PlacedFeature> p_255788_,  HolderGetter<ConfiguredWorldCarver<?>> p_256461_,  boolean p_194892_,  boolean p_194893_,  boolean p_194894_)`
- `public static Biome taiga(HolderGetter<PlacedFeature> p_256177_,  HolderGetter<ConfiguredWorldCarver<?>> p_255727_,  boolean p_194912_)`
- `public static Biome darkForest(HolderGetter<PlacedFeature> p_256140_,  HolderGetter<ConfiguredWorldCarver<?>> p_256223_)`
- `public static Biome swamp(HolderGetter<PlacedFeature> p_256058_,  HolderGetter<ConfiguredWorldCarver<?>> p_256016_)`
- `public static Biome mangroveSwamp(HolderGetter<PlacedFeature> p_256353_,  HolderGetter<ConfiguredWorldCarver<?>> p_256103_)`
- `public static Biome river(HolderGetter<PlacedFeature> p_256613_,  HolderGetter<ConfiguredWorldCarver<?>> p_256581_,  boolean p_194915_)`
- `public static Biome beach(HolderGetter<PlacedFeature> p_256157_,  HolderGetter<ConfiguredWorldCarver<?>> p_255712_,  boolean p_194889_,  boolean p_194890_)`
- `public static Biome theVoid(HolderGetter<PlacedFeature> p_256509_,  HolderGetter<ConfiguredWorldCarver<?>> p_256544_)`
- `public static Biome meadowOrCherryGrove(HolderGetter<PlacedFeature> p_273564_,  HolderGetter<ConfiguredWorldCarver<?>> p_273374_,  boolean p_273710_)`
- `public static Biome frozenPeaks(HolderGetter<PlacedFeature> p_255713_,  HolderGetter<ConfiguredWorldCarver<?>> p_256092_)`
- `public static Biome jaggedPeaks(HolderGetter<PlacedFeature> p_256512_,  HolderGetter<ConfiguredWorldCarver<?>> p_255908_)`
- `public static Biome stonyPeaks(HolderGetter<PlacedFeature> p_256490_,  HolderGetter<ConfiguredWorldCarver<?>> p_255694_)`
- `public static Biome snowySlopes(HolderGetter<PlacedFeature> p_255927_,  HolderGetter<ConfiguredWorldCarver<?>> p_255982_)`
- `public static Biome grove(HolderGetter<PlacedFeature> p_256094_,  HolderGetter<ConfiguredWorldCarver<?>> p_256431_)`
- `public static Biome lushCaves(HolderGetter<PlacedFeature> p_255944_,  HolderGetter<ConfiguredWorldCarver<?>> p_255654_)`
- `public static Biome dripstoneCaves(HolderGetter<PlacedFeature> p_256253_,  HolderGetter<ConfiguredWorldCarver<?>> p_255644_)`
- `public static Biome deepDark(HolderGetter<PlacedFeature> p_256073_,  HolderGetter<ConfiguredWorldCarver<?>> p_256212_)`
