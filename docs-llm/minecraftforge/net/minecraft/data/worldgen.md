# net.minecraft.data.worldgen

- [AncientCityStructurePieces](#ancientcitystructurepieces)
- [AncientCityStructurePools](#ancientcitystructurepools)
- [BastionBridgePools](#bastionbridgepools)
- [BastionHoglinStablePools](#bastionhoglinstablepools)
- [BastionHousingUnitsPools](#bastionhousingunitspools)
- [BastionPieces](#bastionpieces)
- [BastionSharedPools](#bastionsharedpools)
- [BastionTreasureRoomPools](#bastiontreasureroompools)
- [BiomeDefaultFeatures](#biomedefaultfeatures)
- [BootstapContext](#bootstapcontext)
- [Carvers](#carvers)
- [DesertVillagePools](#desertvillagepools)
- [DimensionTypes](#dimensiontypes)
- [NoiseData](#noisedata)
- [PillagerOutpostPools](#pillageroutpostpools)
- [PlainVillagePools](#plainvillagepools)
- [Pools](#pools)
- [ProcessorLists](#processorlists)
- [SavannaVillagePools](#savannavillagepools)
- [SnowyVillagePools](#snowyvillagepools)
- [Structures](#structures)
- [StructureSets](#structuresets)
- [SurfaceRuleData](#surfaceruledata)
- [TaigaVillagePools](#taigavillagepools)
- [TerrainProvider](#terrainprovider)
- [TrailRuinsStructurePools](#trailruinsstructurepools)
- [VillagePools](#villagepools)
## AncientCityStructurePieces

*class* `net.minecraft.data.worldgen.AncientCityStructurePieces`

### Fields
- `public static final ResourceKey<StructureTemplatePool> START`

### Methods
- `public static void bootstrap(BootstapContext<StructureTemplatePool> p_255893_)`

## AncientCityStructurePools

*class* `net.minecraft.data.worldgen.AncientCityStructurePools`

### Methods
- `public static void bootstrap(BootstapContext<StructureTemplatePool> p_255672_)`

## BastionBridgePools

*class* `net.minecraft.data.worldgen.BastionBridgePools`

### Methods
- `public static void bootstrap(BootstapContext<StructureTemplatePool> p_255816_)`

## BastionHoglinStablePools

*class* `net.minecraft.data.worldgen.BastionHoglinStablePools`

### Methods
- `public static void bootstrap(BootstapContext<StructureTemplatePool> p_256582_)`

## BastionHousingUnitsPools

*class* `net.minecraft.data.worldgen.BastionHousingUnitsPools`

### Methods
- `public static void bootstrap(BootstapContext<StructureTemplatePool> p_256423_)`

## BastionPieces

*class* `net.minecraft.data.worldgen.BastionPieces`

### Fields
- `public static final ResourceKey<StructureTemplatePool> START`

### Methods
- `public static void bootstrap(BootstapContext<StructureTemplatePool> p_256429_)`

## BastionSharedPools

*class* `net.minecraft.data.worldgen.BastionSharedPools`

### Methods
- `public static void bootstrap(BootstapContext<StructureTemplatePool> p_255917_)`

## BastionTreasureRoomPools

*class* `net.minecraft.data.worldgen.BastionTreasureRoomPools`

### Methods
- `public static void bootstrap(BootstapContext<StructureTemplatePool> p_255689_)`

## BiomeDefaultFeatures

*class* `net.minecraft.data.worldgen.BiomeDefaultFeatures`

### Methods
- `public static void addDefaultCarversAndLakes(BiomeGenerationSettings.Builder p_194721_)`
- `public static void addDefaultMonsterRoom(BiomeGenerationSettings.Builder p_126807_)`
- `public static void addDefaultUndergroundVariety(BiomeGenerationSettings.Builder p_126811_)`
- `public static void addDripstone(BiomeGenerationSettings.Builder p_176864_)`
- `public static void addSculk(BiomeGenerationSettings.Builder p_236469_)`
- `public static void addDefaultOres(BiomeGenerationSettings.Builder p_126815_)`
- `public static void addDefaultOres(BiomeGenerationSettings.Builder p_194723_,  boolean p_194724_)`
- `public static void addExtraGold(BiomeGenerationSettings.Builder p_126817_)`
- `public static void addExtraEmeralds(BiomeGenerationSettings.Builder p_126819_)`
- `public static void addInfestedStone(BiomeGenerationSettings.Builder p_126821_)`
- `public static void addDefaultSoftDisks(BiomeGenerationSettings.Builder p_126823_)`
- `public static void addSwampClayDisk(BiomeGenerationSettings.Builder p_126825_)`
- `public static void addMangroveSwampDisks(BiomeGenerationSettings.Builder p_236471_)`
- `public static void addMossyStoneBlock(BiomeGenerationSettings.Builder p_126827_)`
- `public static void addFerns(BiomeGenerationSettings.Builder p_126829_)`
- `public static void addRareBerryBushes(BiomeGenerationSettings.Builder p_194736_)`
- `public static void addCommonBerryBushes(BiomeGenerationSettings.Builder p_194738_)`
- `public static void addLightBambooVegetation(BiomeGenerationSettings.Builder p_126835_)`
- `public static void addBambooVegetation(BiomeGenerationSettings.Builder p_126837_)`
- `public static void addTaigaTrees(BiomeGenerationSettings.Builder p_126839_)`
- `public static void addGroveTrees(BiomeGenerationSettings.Builder p_194740_)`
- `public static void addWaterTrees(BiomeGenerationSettings.Builder p_126841_)`
- `public static void addBirchTrees(BiomeGenerationSettings.Builder p_126843_)`
- `public static void addOtherBirchTrees(BiomeGenerationSettings.Builder p_126845_)`
- `public static void addTallBirchTrees(BiomeGenerationSettings.Builder p_126847_)`
- `public static void addSavannaTrees(BiomeGenerationSettings.Builder p_126681_)`
- `public static void addShatteredSavannaTrees(BiomeGenerationSettings.Builder p_126683_)`
- `public static void addLushCavesVegetationFeatures(BiomeGenerationSettings.Builder p_176851_)`
- `public static void addLushCavesSpecialOres(BiomeGenerationSettings.Builder p_176853_)`
- `public static void addMountainTrees(BiomeGenerationSettings.Builder p_126685_)`
- `public static void addMountainForestTrees(BiomeGenerationSettings.Builder p_194717_)`
- `public static void addJungleTrees(BiomeGenerationSettings.Builder p_126689_)`
- `public static void addSparseJungleTrees(BiomeGenerationSettings.Builder p_198928_)`
- `public static void addBadlandsTrees(BiomeGenerationSettings.Builder p_126693_)`
- `public static void addSnowyTrees(BiomeGenerationSettings.Builder p_126695_)`
- `public static void addJungleGrass(BiomeGenerationSettings.Builder p_126697_)`
- `public static void addSavannaGrass(BiomeGenerationSettings.Builder p_126699_)`
- `public static void addShatteredSavannaGrass(BiomeGenerationSettings.Builder p_126701_)`
- `public static void addSavannaExtraGrass(BiomeGenerationSettings.Builder p_126703_)`
- `public static void addBadlandGrass(BiomeGenerationSettings.Builder p_126705_)`
- `public static void addForestFlowers(BiomeGenerationSettings.Builder p_126707_)`
- `public static void addForestGrass(BiomeGenerationSettings.Builder p_126709_)`
- `public static void addSwampVegetation(BiomeGenerationSettings.Builder p_126711_)`
- `public static void addMangroveSwampVegetation(BiomeGenerationSettings.Builder p_236467_)`
- `public static void addMushroomFieldVegetation(BiomeGenerationSettings.Builder p_126713_)`
- `public static void addPlainVegetation(BiomeGenerationSettings.Builder p_126715_)`
- `public static void addDesertVegetation(BiomeGenerationSettings.Builder p_126717_)`
- `public static void addGiantTaigaVegetation(BiomeGenerationSettings.Builder p_126719_)`
- `public static void addDefaultFlowers(BiomeGenerationSettings.Builder p_126721_)`
- `public static void addCherryGroveVegetation(BiomeGenerationSettings.Builder p_273728_)`
- `public static void addMeadowVegetation(BiomeGenerationSettings.Builder p_194719_)`
- `public static void addWarmFlowers(BiomeGenerationSettings.Builder p_126723_)`
- `public static void addDefaultGrass(BiomeGenerationSettings.Builder p_126725_)`
- `public static void addTaigaGrass(BiomeGenerationSettings.Builder p_126727_)`
- `public static void addPlainGrass(BiomeGenerationSettings.Builder p_126729_)`
- `public static void addDefaultMushrooms(BiomeGenerationSettings.Builder p_126731_)`
- `public static void addDefaultExtraVegetation(BiomeGenerationSettings.Builder p_126746_)`
- `public static void addBadlandExtraVegetation(BiomeGenerationSettings.Builder p_126748_)`
- `public static void addJungleMelons(BiomeGenerationSettings.Builder p_198930_)`
- `public static void addSparseJungleMelons(BiomeGenerationSettings.Builder p_198932_)`
- `public static void addJungleVines(BiomeGenerationSettings.Builder p_198934_)`
- `public static void addDesertExtraVegetation(BiomeGenerationSettings.Builder p_126752_)`
- `public static void addSwampExtraVegetation(BiomeGenerationSettings.Builder p_126754_)`
- `public static void addDesertExtraDecoration(BiomeGenerationSettings.Builder p_126756_)`
- `public static void addFossilDecoration(BiomeGenerationSettings.Builder p_126758_)`
- `public static void addColdOceanExtraVegetation(BiomeGenerationSettings.Builder p_126760_)`
- `public static void addDefaultSeagrass(BiomeGenerationSettings.Builder p_126762_)`
- `public static void addLukeWarmKelp(BiomeGenerationSettings.Builder p_126764_)`
- `public static void addDefaultSprings(BiomeGenerationSettings.Builder p_126766_)`
- `public static void addFrozenSprings(BiomeGenerationSettings.Builder p_194732_)`
- `public static void addIcebergs(BiomeGenerationSettings.Builder p_126768_)`
- `public static void addBlueIce(BiomeGenerationSettings.Builder p_126770_)`
- `public static void addSurfaceFreezing(BiomeGenerationSettings.Builder p_126772_)`
- `public static void addNetherDefaultOres(BiomeGenerationSettings.Builder p_126774_)`
- `public static void addAncientDebris(BiomeGenerationSettings.Builder p_126776_)`
- `public static void addDefaultCrystalFormations(BiomeGenerationSettings.Builder p_176858_)`
- `public static void farmAnimals(MobSpawnSettings.Builder p_126735_)`
- `public static void caveSpawns(MobSpawnSettings.Builder p_176860_)`
- `public static void commonSpawns(MobSpawnSettings.Builder p_126789_)`
- `public static void oceanSpawns(MobSpawnSettings.Builder p_126741_,  int p_126742_,  int p_126743_,  int p_126744_)`
- `public static void warmOceanSpawns(MobSpawnSettings.Builder p_126737_,  int p_126738_,  int p_126739_)`
- `public static void plainsSpawns(MobSpawnSettings.Builder p_126793_)`
- `public static void snowySpawns(MobSpawnSettings.Builder p_126797_)`
- `public static void desertSpawns(MobSpawnSettings.Builder p_126801_)`
- `public static void dripstoneCavesSpawns(MobSpawnSettings.Builder p_194734_)`
- `public static void monsters(MobSpawnSettings.Builder p_194726_,  int p_194727_,  int p_194728_,  int p_194729_,  boolean p_194730_)`
- `public static void mooshroomSpawns(MobSpawnSettings.Builder p_126805_)`
- `public static void baseJungleSpawns(MobSpawnSettings.Builder p_126809_)`
- `public static void endSpawns(MobSpawnSettings.Builder p_126813_)`

## BootstapContext

*interface* `net.minecraft.data.worldgen.BootstapContext`

### Methods
- `Holder.Reference<T> register(ResourceKey<T> p_256008_,  T p_256454_,  com.mojang.serialization.Lifecycle p_255725_)`
- `default Holder.Reference<T> register(ResourceKey<T> p_255743_,  T p_256121_)`
- `<S> HolderGetter<S> lookup(ResourceKey<? extends Registry<? extends S>> p_256410_)`
- `default <S> Optional<HolderLookup.RegistryLookup<S>> registryLookup(ResourceKey<? extends Registry<? extends S>> registry)`

## Carvers

*class* `net.minecraft.data.worldgen.Carvers`

### Fields
- `public static final ResourceKey<ConfiguredWorldCarver<?>> CAVE`
- `public static final ResourceKey<ConfiguredWorldCarver<?>> CAVE_EXTRA_UNDERGROUND`
- `public static final ResourceKey<ConfiguredWorldCarver<?>> CANYON`
- `public static final ResourceKey<ConfiguredWorldCarver<?>> NETHER_CAVE`

### Methods
- `private static ResourceKey<ConfiguredWorldCarver<?>> createKey(String p_256085_)`
- `public static void bootstrap(BootstapContext<ConfiguredWorldCarver<?>> p_255626_)`

## DesertVillagePools

*class* `net.minecraft.data.worldgen.DesertVillagePools`

### Fields
- `public static final ResourceKey<StructureTemplatePool> START`
- `private static final ResourceKey<StructureTemplatePool> TERMINATORS_KEY`
- `private static final ResourceKey<StructureTemplatePool> ZOMBIE_TERMINATORS_KEY`

### Methods
- `public static void bootstrap(BootstapContext<StructureTemplatePool> p_255787_)`

## DimensionTypes

*class* `net.minecraft.data.worldgen.DimensionTypes`

### Methods
- `public static void bootstrap(BootstapContext<DimensionType> p_256376_)`

## NoiseData

*class* `net.minecraft.data.worldgen.NoiseData`

### Fields
- `@Deprecated public static final NormalNoise.NoiseParameters DEFAULT_SHIFT` (deprecated)

### Methods
- `public static void bootstrap(BootstapContext<NormalNoise.NoiseParameters> p_256579_)`
- `private static void registerBiomeNoises(BootstapContext<NormalNoise.NoiseParameters> p_256503_,  int p_236479_,  ResourceKey<NormalNoise.NoiseParameters> p_236480_,  ResourceKey<NormalNoise.NoiseParameters> p_236481_,  ResourceKey<NormalNoise.NoiseParameters> p_236482_,  ResourceKey<NormalNoise.NoiseParameters> p_236483_)`
- `private static void register(BootstapContext<NormalNoise.NoiseParameters> p_256150_,  ResourceKey<NormalNoise.NoiseParameters> p_255970_,  int p_256539_,  double p_256566_,  double... p_255998_)`

## PillagerOutpostPools

*class* `net.minecraft.data.worldgen.PillagerOutpostPools`

### Fields
- `public static final ResourceKey<StructureTemplatePool> START`

### Methods
- `public static void bootstrap(BootstapContext<StructureTemplatePool> p_256545_)`

## PlainVillagePools

*class* `net.minecraft.data.worldgen.PlainVillagePools`

### Fields
- `public static final ResourceKey<StructureTemplatePool> START`
- `private static final ResourceKey<StructureTemplatePool> TERMINATORS_KEY`

### Methods
- `public static void bootstrap(BootstapContext<StructureTemplatePool> p_256646_)`

## Pools

*class* `net.minecraft.data.worldgen.Pools`

### Fields
- `public static final ResourceKey<StructureTemplatePool> EMPTY`

### Methods
- `public static ResourceKey<StructureTemplatePool> createKey(String p_256439_)`
- `public static void register(BootstapContext<StructureTemplatePool> p_255823_,  String p_255837_,  StructureTemplatePool p_256161_)`
- `public static void bootstrap(BootstapContext<StructureTemplatePool> p_255897_)`

## ProcessorLists

*class* `net.minecraft.data.worldgen.ProcessorLists`

### Fields
- `private static final ResourceKey<StructureProcessorList> EMPTY`
- `public static final ResourceKey<StructureProcessorList> ZOMBIE_PLAINS`
- `public static final ResourceKey<StructureProcessorList> ZOMBIE_SAVANNA`
- `public static final ResourceKey<StructureProcessorList> ZOMBIE_SNOWY`
- `public static final ResourceKey<StructureProcessorList> ZOMBIE_TAIGA`
- `public static final ResourceKey<StructureProcessorList> ZOMBIE_DESERT`
- `public static final ResourceKey<StructureProcessorList> MOSSIFY_10_PERCENT`
- `public static final ResourceKey<StructureProcessorList> MOSSIFY_20_PERCENT`
- `public static final ResourceKey<StructureProcessorList> MOSSIFY_70_PERCENT`
- `public static final ResourceKey<StructureProcessorList> STREET_PLAINS`
- `public static final ResourceKey<StructureProcessorList> STREET_SAVANNA`
- `public static final ResourceKey<StructureProcessorList> STREET_SNOWY_OR_TAIGA`
- `public static final ResourceKey<StructureProcessorList> FARM_PLAINS`
- `public static final ResourceKey<StructureProcessorList> FARM_SAVANNA`
- `public static final ResourceKey<StructureProcessorList> FARM_SNOWY`
- `public static final ResourceKey<StructureProcessorList> FARM_TAIGA`
- `public static final ResourceKey<StructureProcessorList> FARM_DESERT`
- `public static final ResourceKey<StructureProcessorList> OUTPOST_ROT`
- `public static final ResourceKey<StructureProcessorList> BOTTOM_RAMPART`
- `public static final ResourceKey<StructureProcessorList> TREASURE_ROOMS`
- `public static final ResourceKey<StructureProcessorList> HOUSING`
- `public static final ResourceKey<StructureProcessorList> SIDE_WALL_DEGRADATION`
- `public static final ResourceKey<StructureProcessorList> STABLE_DEGRADATION`
- `public static final ResourceKey<StructureProcessorList> BASTION_GENERIC_DEGRADATION`
- `public static final ResourceKey<StructureProcessorList> RAMPART_DEGRADATION`
- `public static final ResourceKey<StructureProcessorList> ENTRANCE_REPLACEMENT`
- `public static final ResourceKey<StructureProcessorList> BRIDGE`
- `public static final ResourceKey<StructureProcessorList> ROOF`
- `public static final ResourceKey<StructureProcessorList> HIGH_WALL`
- `public static final ResourceKey<StructureProcessorList> HIGH_RAMPART`
- `public static final ResourceKey<StructureProcessorList> FOSSIL_ROT`
- `public static final ResourceKey<StructureProcessorList> FOSSIL_COAL`
- `public static final ResourceKey<StructureProcessorList> FOSSIL_DIAMONDS`
- `public static final ResourceKey<StructureProcessorList> ANCIENT_CITY_START_DEGRADATION`
- `public static final ResourceKey<StructureProcessorList> ANCIENT_CITY_GENERIC_DEGRADATION`
- `public static final ResourceKey<StructureProcessorList> ANCIENT_CITY_WALLS_DEGRADATION`
- `public static final ResourceKey<StructureProcessorList> TRAIL_RUINS_HOUSES_ARCHAEOLOGY`
- `public static final ResourceKey<StructureProcessorList> TRAIL_RUINS_ROADS_ARCHAEOLOGY`
- `public static final ResourceKey<StructureProcessorList> TRAIL_RUINS_TOWER_TOP_ARCHAEOLOGY`

### Methods
- `private static ResourceKey<StructureProcessorList> createKey(String p_256151_)`
- `private static void register(BootstapContext<StructureProcessorList> p_256641_,  ResourceKey<StructureProcessorList> p_256192_,  List<StructureProcessor> p_255805_)`
- `public static void bootstrap(BootstapContext<StructureProcessorList> p_256523_)`
- `private static CappedProcessor trailsArchyLootProcessor(ResourceLocation p_282232_,  int p_281868_)`

## SavannaVillagePools

*class* `net.minecraft.data.worldgen.SavannaVillagePools`

### Fields
- `public static final ResourceKey<StructureTemplatePool> START`
- `private static final ResourceKey<StructureTemplatePool> TERMINATORS_KEY`
- `private static final ResourceKey<StructureTemplatePool> ZOMBIE_TERMINATORS_KEY`

### Methods
- `public static void bootstrap(BootstapContext<StructureTemplatePool> p_256198_)`

## SnowyVillagePools

*class* `net.minecraft.data.worldgen.SnowyVillagePools`

### Fields
- `public static final ResourceKey<StructureTemplatePool> START`
- `private static final ResourceKey<StructureTemplatePool> TERMINATORS_KEY`

### Methods
- `public static void bootstrap(BootstapContext<StructureTemplatePool> p_256549_)`

## Structures

*class* `net.minecraft.data.worldgen.Structures`

### Methods
- `private static Structure.StructureSettings structure(HolderSet<Biome> p_256015_,  Map<MobCategory,StructureSpawnOverride> p_256297_,  GenerationStep.Decoration p_255729_,  TerrainAdjustment p_255865_)`
- `private static Structure.StructureSettings structure(HolderSet<Biome> p_255731_,  GenerationStep.Decoration p_256551_,  TerrainAdjustment p_256463_)`
- `private static Structure.StructureSettings structure(HolderSet<Biome> p_256501_,  TerrainAdjustment p_255704_)`
- `public static void bootstrap(BootstapContext<Structure> p_256072_)`

## StructureSets

*interface* `net.minecraft.data.worldgen.StructureSets`

### Methods
- `static void bootstrap(BootstapContext<StructureSet> p_256148_)`

## SurfaceRuleData

*class* `net.minecraft.data.worldgen.SurfaceRuleData`

### Fields
- `private static final SurfaceRules.RuleSource AIR`
- `private static final SurfaceRules.RuleSource BEDROCK`
- `private static final SurfaceRules.RuleSource WHITE_TERRACOTTA`
- `private static final SurfaceRules.RuleSource ORANGE_TERRACOTTA`
- `private static final SurfaceRules.RuleSource TERRACOTTA`
- `private static final SurfaceRules.RuleSource RED_SAND`
- `private static final SurfaceRules.RuleSource RED_SANDSTONE`
- `private static final SurfaceRules.RuleSource STONE`
- `private static final SurfaceRules.RuleSource DEEPSLATE`
- `private static final SurfaceRules.RuleSource DIRT`
- `private static final SurfaceRules.RuleSource PODZOL`
- `private static final SurfaceRules.RuleSource COARSE_DIRT`
- `private static final SurfaceRules.RuleSource MYCELIUM`
- `private static final SurfaceRules.RuleSource GRASS_BLOCK`
- `private static final SurfaceRules.RuleSource CALCITE`
- `private static final SurfaceRules.RuleSource GRAVEL`
- `private static final SurfaceRules.RuleSource SAND`
- `private static final SurfaceRules.RuleSource SANDSTONE`
- `private static final SurfaceRules.RuleSource PACKED_ICE`
- `private static final SurfaceRules.RuleSource SNOW_BLOCK`
- `private static final SurfaceRules.RuleSource MUD`
- `private static final SurfaceRules.RuleSource POWDER_SNOW`
- `private static final SurfaceRules.RuleSource ICE`
- `private static final SurfaceRules.RuleSource WATER`
- `private static final SurfaceRules.RuleSource LAVA`
- `private static final SurfaceRules.RuleSource NETHERRACK`
- `private static final SurfaceRules.RuleSource SOUL_SAND`
- `private static final SurfaceRules.RuleSource SOUL_SOIL`
- `private static final SurfaceRules.RuleSource BASALT`
- `private static final SurfaceRules.RuleSource BLACKSTONE`
- `private static final SurfaceRules.RuleSource WARPED_WART_BLOCK`
- `private static final SurfaceRules.RuleSource WARPED_NYLIUM`
- `private static final SurfaceRules.RuleSource NETHER_WART_BLOCK`
- `private static final SurfaceRules.RuleSource CRIMSON_NYLIUM`
- `private static final SurfaceRules.RuleSource ENDSTONE`

### Methods
- `private static SurfaceRules.RuleSource makeStateRule(Block p_194811_)`
- `public static SurfaceRules.RuleSource overworld()`
- `public static SurfaceRules.RuleSource overworldLike(boolean p_198381_,  boolean p_198382_,  boolean p_198383_)`
- `public static SurfaceRules.RuleSource nether()`
- `public static SurfaceRules.RuleSource end()`
- `public static SurfaceRules.RuleSource air()`
- `private static SurfaceRules.ConditionSource surfaceNoiseAbove(double p_194809_)`

## TaigaVillagePools

*class* `net.minecraft.data.worldgen.TaigaVillagePools`

### Fields
- `public static final ResourceKey<StructureTemplatePool> START`
- `private static final ResourceKey<StructureTemplatePool> TERMINATORS_KEY`

### Methods
- `public static void bootstrap(BootstapContext<StructureTemplatePool> p_256442_)`

## TerrainProvider

*class* `net.minecraft.data.worldgen.TerrainProvider`

### Fields
- `private static final float DEEP_OCEAN_CONTINENTALNESS` (= -0.5099999904632568f)
- `private static final float OCEAN_CONTINENTALNESS` (= -0.4000000059604645f)
- `private static final float PLAINS_CONTINENTALNESS` (= 0.10000000149011612f)
- `private static final float BEACH_CONTINENTALNESS` (= -0.15000000596046448f)
- `private static final ToFloatFunction<Float> NO_TRANSFORM`
- `private static final ToFloatFunction<Float> AMPLIFIED_OFFSET`
- `private static final ToFloatFunction<Float> AMPLIFIED_FACTOR`
- `private static final ToFloatFunction<Float> AMPLIFIED_JAGGEDNESS`

### Methods
- `public static <C, I extends ToFloatFunction<C>> CubicSpline<C,I> overworldOffset(I p_236636_,  I p_236637_,  I p_236638_,  boolean p_236639_)`
- `public static <C, I extends ToFloatFunction<C>> CubicSpline<C,I> overworldFactor(I p_236630_,  I p_236631_,  I p_236632_,  I p_236633_,  boolean p_236634_)`
- `public static <C, I extends ToFloatFunction<C>> CubicSpline<C,I> overworldJaggedness(I p_236643_,  I p_236644_,  I p_236645_,  I p_236646_,  boolean p_236647_)`
- `private static <C, I extends ToFloatFunction<C>> CubicSpline<C,I> buildErosionJaggednessSpline(I p_236614_,  I p_236615_,  I p_236616_,  float p_236617_,  float p_236618_,  float p_236619_,  float p_236620_,  ToFloatFunction<Float> p_236621_)`
- `private static <C, I extends ToFloatFunction<C>> CubicSpline<C,I> buildRidgeJaggednessSpline(I p_236608_,  I p_236609_,  float p_236610_,  float p_236611_,  ToFloatFunction<Float> p_236612_)`
- `private static <C, I extends ToFloatFunction<C>> CubicSpline<C,I> buildWeirdnessJaggednessSpline(I p_236587_,  float p_236588_,  ToFloatFunction<Float> p_236589_)`
- `private static <C, I extends ToFloatFunction<C>> CubicSpline<C,I> getErosionFactor(I p_236623_,  I p_236624_,  I p_236625_,  float p_236626_,  boolean p_236627_,  ToFloatFunction<Float> p_236628_)`
- `private static float calculateSlope(float p_236573_,  float p_236574_,  float p_236575_,  float p_236576_)`
- `private static <C, I extends ToFloatFunction<C>> CubicSpline<C,I> buildMountainRidgeSplineWithPoints(I p_236591_,  float p_236592_,  boolean p_236593_,  ToFloatFunction<Float> p_236594_)`
- `private static float mountainContinentalness(float p_236569_,  float p_236570_,  float p_236571_)`
- `private static float calculateMountainRidgeZeroContinentalnessPoint(float p_236567_)`
- `public static <C, I extends ToFloatFunction<C>> CubicSpline<C,I> buildErosionOffsetSpline(I p_236596_,  I p_236597_,  float p_236598_,  float p_236599_,  float p_236600_,  float p_236601_,  float p_236602_,  float p_236603_,  boolean p_236604_,  boolean p_236605_,  ToFloatFunction<Float> p_236606_)`
- `private static <C, I extends ToFloatFunction<C>> CubicSpline<C,I> ridgeSpline(I p_236578_,  float p_236579_,  float p_236580_,  float p_236581_,  float p_236582_,  float p_236583_,  float p_236584_,  ToFloatFunction<Float> p_236585_)`

## TrailRuinsStructurePools

*class* `net.minecraft.data.worldgen.TrailRuinsStructurePools`

### Fields
- `public static final ResourceKey<StructureTemplatePool> START`

### Methods
- `public static void bootstrap(BootstapContext<StructureTemplatePool> p_277535_)`

## VillagePools

*class* `net.minecraft.data.worldgen.VillagePools`

### Methods
- `public static void bootstrap(BootstapContext<StructureTemplatePool> p_256339_)`
