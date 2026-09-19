# net.minecraft.world.level.levelgen.placement

- [BiomeFilter](#biomefilter)
- [BlockPredicateFilter](#blockpredicatefilter)
- [CarvingMaskPlacement](#carvingmaskplacement)
- [Class CaveSurface](#class-cavesurface)
- [CountOnEveryLayerPlacement](#countoneverylayerplacement)
- [CountPlacement](#countplacement)
- [EnvironmentScanPlacement](#environmentscanplacement)
- [HeightmapPlacement](#heightmapplacement)
- [HeightRangePlacement](#heightrangeplacement)
- [InSquarePlacement](#insquareplacement)
- [NoiseBasedCountPlacement](#noisebasedcountplacement)
- [NoiseThresholdCountPlacement](#noisethresholdcountplacement)
- [PlacedFeature](#placedfeature)
- [PlacementContext](#placementcontext)
- [PlacementFilter](#placementfilter)
- [PlacementModifier](#placementmodifier)
- [PlacementModifierType](#placementmodifiertype)
- [RandomOffsetPlacement](#randomoffsetplacement)
- [RarityFilter](#rarityfilter)
- [RepeatingPlacement](#repeatingplacement)
- [SurfaceRelativeThresholdFilter](#surfacerelativethresholdfilter)
- [SurfaceWaterDepthFilter](#surfacewaterdepthfilter)
## BiomeFilter

*class* `net.minecraft.world.level.levelgen.placement.BiomeFilter`

### Fields
- `private static final BiomeFilter INSTANCE`
- `public static com.mojang.serialization.Codec<BiomeFilter> CODEC`

### Methods
- `public static BiomeFilter biome()`
- `protected boolean shouldPlace(PlacementContext p_226317_,  RandomSource p_226318_,  BlockPos p_226319_)`
- `public PlacementModifierType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.placement.PlacementFilter`: `getPositions`

## BlockPredicateFilter

*class* `net.minecraft.world.level.levelgen.placement.BlockPredicateFilter`

### Fields
- `public static final com.mojang.serialization.Codec<BlockPredicateFilter> CODEC`
- `private final BlockPredicate predicate`

### Methods
- `public static BlockPredicateFilter forPredicate(BlockPredicate p_191577_)`
- `protected boolean shouldPlace(PlacementContext p_226321_,  RandomSource p_226322_,  BlockPos p_226323_)`
- `public PlacementModifierType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.placement.PlacementFilter`: `getPositions`

## CarvingMaskPlacement

*class* `net.minecraft.world.level.levelgen.placement.CarvingMaskPlacement`

### Fields
- `public static final com.mojang.serialization.Codec<CarvingMaskPlacement> CODEC`
- `private final GenerationStep.Carving step`

### Methods
- `public static CarvingMaskPlacement forStep(GenerationStep.Carving p_191591_)`
- `public Stream<BlockPos> getPositions(PlacementContext p_226325_,  RandomSource p_226326_,  BlockPos p_226327_)`
- `public PlacementModifierType<?> type()`

## Class CaveSurface

*enum* `net.minecraft.world.level.levelgen.placement.Class CaveSurface`

### Fields
- `public static final com.mojang.serialization.Codec<CaveSurface> CODEC`
- `private final Direction direction`
- `private final int y`
- `private final String id`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static CaveSurface[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static CaveSurface valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public Direction getDirection()`
- `public int getY()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## CountOnEveryLayerPlacement

*class* `net.minecraft.world.level.levelgen.placement.CountOnEveryLayerPlacement`

### Fields
- `public static final com.mojang.serialization.Codec<CountOnEveryLayerPlacement> CODEC` (deprecated)
- `private final IntProvider count` (deprecated)

### Methods
- `public static CountOnEveryLayerPlacement of(IntProvider p_191607_)` (deprecated)
- `public static CountOnEveryLayerPlacement of(int p_191605_)` (deprecated)
- `public Stream<BlockPos> getPositions(PlacementContext p_226329_,  RandomSource p_226330_,  BlockPos p_226331_)` (deprecated)
- `public PlacementModifierType<?> type()` (deprecated)
- `private static int findOnGroundYPosition(PlacementContext p_191613_,  int p_191614_,  int p_191615_,  int p_191616_,  int p_191617_)` (deprecated)
- `private static boolean isEmpty(BlockState p_191609_)` (deprecated)

## CountPlacement

*class* `net.minecraft.world.level.levelgen.placement.CountPlacement`

### Fields
- `public static final com.mojang.serialization.Codec<CountPlacement> CODEC`
- `private final IntProvider count`

### Methods
- `public static CountPlacement of(IntProvider p_191631_)`
- `public static CountPlacement of(int p_191629_)`
- `protected int count(RandomSource p_226333_,  BlockPos p_226334_)`
- `public PlacementModifierType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.placement.RepeatingPlacement`: `getPositions`

## EnvironmentScanPlacement

*class* `net.minecraft.world.level.levelgen.placement.EnvironmentScanPlacement`

### Fields
- `private final Direction directionOfSearch`
- `private final BlockPredicate targetCondition`
- `private final BlockPredicate allowedSearchCondition`
- `private final int maxSteps`
- `public static final com.mojang.serialization.Codec<EnvironmentScanPlacement> CODEC`

### Methods
- `public static EnvironmentScanPlacement scanningFor(Direction p_191658_,  BlockPredicate p_191659_,  BlockPredicate p_191660_,  int p_191661_)`
- `public static EnvironmentScanPlacement scanningFor(Direction p_191654_,  BlockPredicate p_191655_,  int p_191656_)`
- `public Stream<BlockPos> getPositions(PlacementContext p_226336_,  RandomSource p_226337_,  BlockPos p_226338_)`
- `public PlacementModifierType<?> type()`

## HeightmapPlacement

*class* `net.minecraft.world.level.levelgen.placement.HeightmapPlacement`

### Fields
- `public static final com.mojang.serialization.Codec<HeightmapPlacement> CODEC`
- `private final Heightmap.Types heightmap`

### Methods
- `public static HeightmapPlacement onHeightmap(Heightmap.Types p_191703_)`
- `public Stream<BlockPos> getPositions(PlacementContext p_226344_,  RandomSource p_226345_,  BlockPos p_226346_)`
- `public PlacementModifierType<?> type()`

## HeightRangePlacement

*class* `net.minecraft.world.level.levelgen.placement.HeightRangePlacement`

### Fields
- `public static final com.mojang.serialization.Codec<HeightRangePlacement> CODEC`
- `private final HeightProvider height`

### Methods
- `public static HeightRangePlacement of(HeightProvider p_191684_)`
- `public static HeightRangePlacement uniform(VerticalAnchor p_191681_,  VerticalAnchor p_191682_)`
- `public static HeightRangePlacement triangle(VerticalAnchor p_191693_,  VerticalAnchor p_191694_)`
- `public Stream<BlockPos> getPositions(PlacementContext p_226340_,  RandomSource p_226341_,  BlockPos p_226342_)`
- `public PlacementModifierType<?> type()`

## InSquarePlacement

*class* `net.minecraft.world.level.levelgen.placement.InSquarePlacement`

### Fields
- `private static final InSquarePlacement INSTANCE`
- `public static final com.mojang.serialization.Codec<InSquarePlacement> CODEC`

### Methods
- `public static InSquarePlacement spread()`
- `public Stream<BlockPos> getPositions(PlacementContext p_226348_,  RandomSource p_226349_,  BlockPos p_226350_)`
- `public PlacementModifierType<?> type()`

## NoiseBasedCountPlacement

*class* `net.minecraft.world.level.levelgen.placement.NoiseBasedCountPlacement`

### Fields
- `public static final com.mojang.serialization.Codec<NoiseBasedCountPlacement> CODEC`
- `private final int noiseToCountRatio`
- `private final double noiseFactor`
- `private final double noiseOffset`

### Methods
- `public static NoiseBasedCountPlacement of(int p_191732_,  double p_191733_,  double p_191734_)`
- `protected int count(RandomSource p_226352_,  BlockPos p_226353_)`
- `public PlacementModifierType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.placement.RepeatingPlacement`: `getPositions`

## NoiseThresholdCountPlacement

*class* `net.minecraft.world.level.levelgen.placement.NoiseThresholdCountPlacement`

### Fields
- `public static final com.mojang.serialization.Codec<NoiseThresholdCountPlacement> CODEC`
- `private final double noiseLevel`
- `private final int belowNoise`
- `private final int aboveNoise`

### Methods
- `public static NoiseThresholdCountPlacement of(double p_191757_,  int p_191758_,  int p_191759_)`
- `protected int count(RandomSource p_226355_,  BlockPos p_226356_)`
- `public PlacementModifierType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.placement.RepeatingPlacement`: `getPositions`

## PlacedFeature

*record* `net.minecraft.world.level.levelgen.placement.PlacedFeature`

### Fields
- `private final Holder<ConfiguredFeature<?,?>> feature`
  The field for the feature record component.
- `private final List<PlacementModifier> placement`
  The field for the placement record component.
- `public static final com.mojang.serialization.Codec<PlacedFeature> DIRECT_CODEC`
- `public static final com.mojang.serialization.Codec<Holder<PlacedFeature>> CODEC`
- `public static final com.mojang.serialization.Codec<HolderSet<PlacedFeature>> LIST_CODEC`
- `public static final com.mojang.serialization.Codec<List<HolderSet<PlacedFeature>>> LIST_OF_LISTS_CODEC`

### Methods
- `public boolean place(WorldGenLevel p_226358_,  ChunkGenerator p_226359_,  RandomSource p_226360_,  BlockPos p_226361_)`
- `public boolean placeWithBiomeCheck(WorldGenLevel p_226378_,  ChunkGenerator p_226379_,  RandomSource p_226380_,  BlockPos p_226381_)`
- `private boolean placeWithContext(PlacementContext p_226369_,  RandomSource p_226370_,  BlockPos p_226371_)`
- `public Stream<ConfiguredFeature<?,?>> getFeatures()`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public Holder<ConfiguredFeature<?,?>> feature()`
  Returns the value of the feature record component.
  - returns: the value of the feature record component
- `public List<PlacementModifier> placement()`
  Returns the value of the placement record component.
  - returns: the value of the placement record component

## PlacementContext

*class* `net.minecraft.world.level.levelgen.placement.PlacementContext`

### Fields
- `private final WorldGenLevel level`
- `private final ChunkGenerator generator`
- `private final Optional<PlacedFeature> topFeature`

### Methods
- `public int getHeight(Heightmap.Types p_191825_,  int p_191826_,  int p_191827_)`
- `public CarvingMask getCarvingMask(ChunkPos p_191822_,  GenerationStep.Carving p_191823_)`
- `public BlockState getBlockState(BlockPos p_191829_)`
- `public int getMinBuildHeight()`
- `public WorldGenLevel getLevel()`
- `public Optional<PlacedFeature> topFeature()`
- `public ChunkGenerator generator()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.WorldGenerationContext`: `getGenDepth`, `getMinGenY`

## PlacementFilter

*class* `net.minecraft.world.level.levelgen.placement.PlacementFilter`

### Inherited fields
- from `net.minecraft.world.level.levelgen.placement.PlacementModifier`: `CODEC`

### Methods
- `public final Stream<BlockPos> getPositions(PlacementContext p_226386_,  RandomSource p_226387_,  BlockPos p_226388_)`
- `protected abstract boolean shouldPlace(PlacementContext p_226382_,  RandomSource p_226383_,  BlockPos p_226384_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.placement.PlacementModifier`: `type`

## PlacementModifier

*class* `net.minecraft.world.level.levelgen.placement.PlacementModifier`

### Fields
- `public static final com.mojang.serialization.Codec<PlacementModifier> CODEC`

### Methods
- `public abstract Stream<BlockPos> getPositions(PlacementContext p_226389_,  RandomSource p_226390_,  BlockPos p_226391_)`
- `public abstract PlacementModifierType<?> type()`

## PlacementModifierType

*interface* `net.minecraft.world.level.levelgen.placement.PlacementModifierType`

### Fields
- `static final PlacementModifierType<BlockPredicateFilter> BLOCK_PREDICATE_FILTER`
- `static final PlacementModifierType<RarityFilter> RARITY_FILTER`
- `static final PlacementModifierType<SurfaceRelativeThresholdFilter> SURFACE_RELATIVE_THRESHOLD_FILTER`
- `static final PlacementModifierType<SurfaceWaterDepthFilter> SURFACE_WATER_DEPTH_FILTER`
- `static final PlacementModifierType<BiomeFilter> BIOME_FILTER`
- `static final PlacementModifierType<CountPlacement> COUNT`
- `static final PlacementModifierType<NoiseBasedCountPlacement> NOISE_BASED_COUNT`
- `static final PlacementModifierType<NoiseThresholdCountPlacement> NOISE_THRESHOLD_COUNT`
- `static final PlacementModifierType<CountOnEveryLayerPlacement> COUNT_ON_EVERY_LAYER`
- `static final PlacementModifierType<EnvironmentScanPlacement> ENVIRONMENT_SCAN`
- `static final PlacementModifierType<HeightmapPlacement> HEIGHTMAP`
- `static final PlacementModifierType<HeightRangePlacement> HEIGHT_RANGE`
- `static final PlacementModifierType<InSquarePlacement> IN_SQUARE`
- `static final PlacementModifierType<RandomOffsetPlacement> RANDOM_OFFSET`
- `static final PlacementModifierType<CarvingMaskPlacement> CARVING_MASK_PLACEMENT`

### Methods
- `com.mojang.serialization.Codec<P> codec()`
- `private static <P extends PlacementModifier> PlacementModifierType<P> register(String p_191867_,  com.mojang.serialization.Codec<P> p_191868_)`

## RandomOffsetPlacement

*class* `net.minecraft.world.level.levelgen.placement.RandomOffsetPlacement`

### Fields
- `public static final com.mojang.serialization.Codec<RandomOffsetPlacement> CODEC`
- `private final IntProvider xzSpread`
- `private final IntProvider ySpread`

### Methods
- `public static RandomOffsetPlacement of(IntProvider p_191880_,  IntProvider p_191881_)`
- `public static RandomOffsetPlacement vertical(IntProvider p_191878_)`
- `public static RandomOffsetPlacement horizontal(IntProvider p_191892_)`
- `public Stream<BlockPos> getPositions(PlacementContext p_226393_,  RandomSource p_226394_,  BlockPos p_226395_)`
- `public PlacementModifierType<?> type()`

## RarityFilter

*class* `net.minecraft.world.level.levelgen.placement.RarityFilter`

### Fields
- `public static final com.mojang.serialization.Codec<RarityFilter> CODEC`
- `private final int chance`

### Methods
- `public static RarityFilter onAverageOnceEvery(int p_191901_)`
- `protected boolean shouldPlace(PlacementContext p_226397_,  RandomSource p_226398_,  BlockPos p_226399_)`
- `public PlacementModifierType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.placement.PlacementFilter`: `getPositions`

## RepeatingPlacement

*class* `net.minecraft.world.level.levelgen.placement.RepeatingPlacement`

### Inherited fields
- from `net.minecraft.world.level.levelgen.placement.PlacementModifier`: `CODEC`

### Methods
- `protected abstract int count(RandomSource p_226400_,  BlockPos p_226401_)`
- `public Stream<BlockPos> getPositions(PlacementContext p_226403_,  RandomSource p_226404_,  BlockPos p_226405_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.placement.PlacementModifier`: `type`

## SurfaceRelativeThresholdFilter

*class* `net.minecraft.world.level.levelgen.placement.SurfaceRelativeThresholdFilter`

### Fields
- `public static final com.mojang.serialization.Codec<SurfaceRelativeThresholdFilter> CODEC`
- `private final Heightmap.Types heightmap`
- `private final int minInclusive`
- `private final int maxInclusive`

### Methods
- `public static SurfaceRelativeThresholdFilter of(Heightmap.Types p_191931_,  int p_191932_,  int p_191933_)`
- `protected boolean shouldPlace(PlacementContext p_226407_,  RandomSource p_226408_,  BlockPos p_226409_)`
- `public PlacementModifierType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.placement.PlacementFilter`: `getPositions`

## SurfaceWaterDepthFilter

*class* `net.minecraft.world.level.levelgen.placement.SurfaceWaterDepthFilter`

### Fields
- `public static final com.mojang.serialization.Codec<SurfaceWaterDepthFilter> CODEC`
- `private final int maxWaterDepth`

### Methods
- `public static SurfaceWaterDepthFilter forMaxDepth(int p_191951_)`
- `protected boolean shouldPlace(PlacementContext p_226411_,  RandomSource p_226412_,  BlockPos p_226413_)`
- `public PlacementModifierType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.placement.PlacementFilter`: `getPositions`
