# net.minecraft.world.level.levelgen.feature.configurations

- [BlockColumnConfiguration](#blockcolumnconfiguration)
- [BlockColumnConfiguration.Layer](#blockcolumnconfiguration.layer)
- [BlockPileConfiguration](#blockpileconfiguration)
- [BlockStateConfiguration](#blockstateconfiguration)
- [ColumnFeatureConfiguration](#columnfeatureconfiguration)
- [CountConfiguration](#countconfiguration)
- [DeltaFeatureConfiguration](#deltafeatureconfiguration)
- [DiskConfiguration](#diskconfiguration)
- [DripstoneClusterConfiguration](#dripstoneclusterconfiguration)
- [EndGatewayConfiguration](#endgatewayconfiguration)
- [FeatureConfiguration](#featureconfiguration)
- [GeodeConfiguration](#geodeconfiguration)
- [HugeMushroomFeatureConfiguration](#hugemushroomfeatureconfiguration)
- [LargeDripstoneConfiguration](#largedripstoneconfiguration)
- [LayerConfiguration](#layerconfiguration)
- [MultifaceGrowthConfiguration](#multifacegrowthconfiguration)
- [NetherForestVegetationConfig](#netherforestvegetationconfig)
- [NoneFeatureConfiguration](#nonefeatureconfiguration)
- [OreConfiguration](#oreconfiguration)
- [OreConfiguration.TargetBlockState](#oreconfiguration.targetblockstate)
- [PointedDripstoneConfiguration](#pointeddripstoneconfiguration)
- [ProbabilityFeatureConfiguration](#probabilityfeatureconfiguration)
- [RandomBooleanFeatureConfiguration](#randombooleanfeatureconfiguration)
- [RandomFeatureConfiguration](#randomfeatureconfiguration)
- [RandomPatchConfiguration](#randompatchconfiguration)
- [ReplaceBlockConfiguration](#replaceblockconfiguration)
- [ReplaceSphereConfiguration](#replacesphereconfiguration)
- [RootSystemConfiguration](#rootsystemconfiguration)
- [SculkPatchConfiguration](#sculkpatchconfiguration)
- [SimpleBlockConfiguration](#simpleblockconfiguration)
- [SimpleRandomFeatureConfiguration](#simplerandomfeatureconfiguration)
- [SpikeConfiguration](#spikeconfiguration)
- [SpringConfiguration](#springconfiguration)
- [TreeConfiguration](#treeconfiguration)
- [TreeConfiguration.TreeConfigurationBuilder](#treeconfiguration.treeconfigurationbuilder)
- [TwistingVinesConfig](#twistingvinesconfig)
- [UnderwaterMagmaConfiguration](#underwatermagmaconfiguration)
- [VegetationPatchConfiguration](#vegetationpatchconfiguration)
## BlockColumnConfiguration

*record* `net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration`

### Fields
- `private final List<BlockColumnConfiguration.Layer> layers`
  The field for the layers record component.
- `private final Direction direction`
  The field for the direction record component.
- `private final BlockPredicate allowedPlacement`
  The field for the allowedPlacement record component.
- `private final boolean prioritizeTip`
  The field for the prioritizeTip record component.
- `public static final com.mojang.serialization.Codec<BlockColumnConfiguration> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Methods
- `public static BlockColumnConfiguration.Layer layer(IntProvider p_191219_,  BlockStateProvider p_191220_)`
- `public static BlockColumnConfiguration simple(IntProvider p_191225_,  BlockStateProvider p_191226_)`
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
- `public List<BlockColumnConfiguration.Layer> layers()`
  Returns the value of the layers record component.
  - returns: the value of the layers record component
- `public Direction direction()`
  Returns the value of the direction record component.
  - returns: the value of the direction record component
- `public BlockPredicate allowedPlacement()`
  Returns the value of the allowedPlacement record component.
  - returns: the value of the allowedPlacement record component
- `public boolean prioritizeTip()`
  Returns the value of the prioritizeTip record component.
  - returns: the value of the prioritizeTip record component

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## BlockColumnConfiguration.Layer

*record* `net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration.Layer`

Enclosing class: BlockColumnConfiguration

### Fields
- `private final IntProvider height`
  The field for the height record component.
- `private final BlockStateProvider state`
  The field for the state record component.
- `public static final com.mojang.serialization.Codec<BlockColumnConfiguration.Layer> CODEC`

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
- `public IntProvider height()`
  Returns the value of the height record component.
  - returns: the value of the height record component
- `public BlockStateProvider state()`
  Returns the value of the state record component.
  - returns: the value of the state record component

## BlockPileConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<BlockPileConfiguration> CODEC`
- `public final BlockStateProvider stateProvider`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## BlockStateConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<BlockStateConfiguration> CODEC`
- `public final BlockState state`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## ColumnFeatureConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<ColumnFeatureConfiguration> CODEC`
- `private final IntProvider reach`
- `private final IntProvider height`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Methods
- `public IntProvider reach()`
- `public IntProvider height()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## CountConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<CountConfiguration> CODEC`
- `private final IntProvider count`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Methods
- `public IntProvider count()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## DeltaFeatureConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<DeltaFeatureConfiguration> CODEC`
- `private final BlockState contents`
- `private final BlockState rim`
- `private final IntProvider size`
- `private final IntProvider rimSize`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Methods
- `public BlockState contents()`
- `public BlockState rim()`
- `public IntProvider size()`
- `public IntProvider rimSize()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## DiskConfiguration

*record* `net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration`

### Fields
- `private final RuleBasedBlockStateProvider stateProvider`
  The field for the stateProvider record component.
- `private final BlockPredicate target`
  The field for the target record component.
- `private final IntProvider radius`
  The field for the radius record component.
- `private final int halfHeight`
  The field for the halfHeight record component.
- `public static final com.mojang.serialization.Codec<DiskConfiguration> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

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
- `public RuleBasedBlockStateProvider stateProvider()`
  Returns the value of the stateProvider record component.
  - returns: the value of the stateProvider record component
- `public BlockPredicate target()`
  Returns the value of the target record component.
  - returns: the value of the target record component
- `public IntProvider radius()`
  Returns the value of the radius record component.
  - returns: the value of the radius record component
- `public int halfHeight()`
  Returns the value of the halfHeight record component.
  - returns: the value of the halfHeight record component

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## DripstoneClusterConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<DripstoneClusterConfiguration> CODEC`
- `public final int floorToCeilingSearchRange`
- `public final IntProvider height`
- `public final IntProvider radius`
- `public final int maxStalagmiteStalactiteHeightDiff`
- `public final int heightDeviation`
- `public final IntProvider dripstoneBlockLayerThickness`
- `public final FloatProvider density`
- `public final FloatProvider wetness`
- `public final float chanceOfDripstoneColumnAtMaxDistanceFromCenter`
- `public final int maxDistanceFromEdgeAffectingChanceOfDripstoneColumn`
- `public final int maxDistanceFromCenterAffectingHeightBias`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## EndGatewayConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<EndGatewayConfiguration> CODEC`
- `private final Optional<BlockPos> exit`
- `private final boolean exact`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Methods
- `public static EndGatewayConfiguration knownExit(BlockPos p_67651_,  boolean p_67652_)`
- `public static EndGatewayConfiguration delayedExitSearch()`
- `public Optional<BlockPos> getExit()`
- `public boolean isExitExact()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## FeatureConfiguration

*interface* `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`

### Fields
- `static final NoneFeatureConfiguration NONE`

### Methods
- `default Stream<ConfiguredFeature<?,?>> getFeatures()`

## GeodeConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<Double> CHANCE_RANGE`
- `public static final com.mojang.serialization.Codec<GeodeConfiguration> CODEC`
- `public final GeodeBlockSettings geodeBlockSettings`
- `public final GeodeLayerSettings geodeLayerSettings`
- `public final GeodeCrackSettings geodeCrackSettings`
- `public final double usePotentialPlacementsChance`
- `public final double useAlternateLayer0Chance`
- `public final boolean placementsRequireLayer0Alternate`
- `public final IntProvider outerWallDistance`
- `public final IntProvider distributionPoints`
- `public final IntProvider pointOffset`
- `public final int minGenOffset`
- `public final int maxGenOffset`
- `public final double noiseMultiplier`
- `public final int invalidBlocksThreshold`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## HugeMushroomFeatureConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<HugeMushroomFeatureConfiguration> CODEC`
- `public final BlockStateProvider capProvider`
- `public final BlockStateProvider stemProvider`
- `public final int foliageRadius`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## LargeDripstoneConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<LargeDripstoneConfiguration> CODEC`
- `public final int floorToCeilingSearchRange`
- `public final IntProvider columnRadius`
- `public final FloatProvider heightScale`
- `public final float maxColumnRadiusToCaveHeightRatio`
- `public final FloatProvider stalactiteBluntness`
- `public final FloatProvider stalagmiteBluntness`
- `public final FloatProvider windSpeed`
- `public final int minRadiusForWind`
- `public final float minBluntnessForWind`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## LayerConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<LayerConfiguration> CODEC`
- `public final int height`
- `public final BlockState state`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## MultifaceGrowthConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<MultifaceGrowthConfiguration> CODEC`
- `public final MultifaceBlock placeBlock`
- `public final int searchRange`
- `public final boolean canPlaceOnFloor`
- `public final boolean canPlaceOnCeiling`
- `public final boolean canPlaceOnWall`
- `public final float chanceOfSpreading`
- `public final HolderSet<Block> canBePlacedOn`
- `private final it.unimi.dsi.fastutil.objects.ObjectArrayList<Direction> validDirections`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Methods
- `private static com.mojang.serialization.DataResult<MultifaceBlock> apply(Block p_225405_)`
- `public List<Direction> getShuffledDirectionsExcept(RandomSource p_225402_,  Direction p_225403_)`
- `public List<Direction> getShuffledDirections(RandomSource p_225400_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## NetherForestVegetationConfig

*class* `net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig`

### Fields
- `public static final com.mojang.serialization.Codec<NetherForestVegetationConfig> CODEC`
- `public final int spreadWidth`
- `public final int spreadHeight`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration`: `stateProvider`
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## NoneFeatureConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<NoneFeatureConfiguration> CODEC`
- `public static final NoneFeatureConfiguration INSTANCE`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## OreConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<OreConfiguration> CODEC`
- `public final List<OreConfiguration.TargetBlockState> targetStates`
- `public final int size`
- `public final float discardChanceOnAirExposure`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Methods
- `public static OreConfiguration.TargetBlockState target(RuleTest p_161022_,  BlockState p_161023_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## OreConfiguration.TargetBlockState

*class* `net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration.TargetBlockState`

Enclosing class: OreConfiguration

### Fields
- `public static final com.mojang.serialization.Codec<OreConfiguration.TargetBlockState> CODEC`
- `public final RuleTest target`
- `public final BlockState state`

## PointedDripstoneConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<PointedDripstoneConfiguration> CODEC`
- `public final float chanceOfTallerDripstone`
- `public final float chanceOfDirectionalSpread`
- `public final float chanceOfSpreadRadius2`
- `public final float chanceOfSpreadRadius3`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## ProbabilityFeatureConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<ProbabilityFeatureConfiguration> CODEC`
- `public final float probability`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## RandomBooleanFeatureConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<RandomBooleanFeatureConfiguration> CODEC`
- `public final Holder<PlacedFeature> featureTrue`
- `public final Holder<PlacedFeature> featureFalse`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Methods
- `public Stream<ConfiguredFeature<?,?>> getFeatures()`

## RandomFeatureConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<RandomFeatureConfiguration> CODEC`
- `public final List<WeightedPlacedFeature> features`
- `public final Holder<PlacedFeature> defaultFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Methods
- `public Stream<ConfiguredFeature<?,?>> getFeatures()`

## RandomPatchConfiguration

*record* `net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration`

### Fields
- `private final int tries`
  The field for the tries record component.
- `private final int xzSpread`
  The field for the xzSpread record component.
- `private final int ySpread`
  The field for the ySpread record component.
- `private final Holder<PlacedFeature> feature`
  The field for the feature record component.
- `public static final com.mojang.serialization.Codec<RandomPatchConfiguration> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

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
- `public int tries()`
  Returns the value of the tries record component.
  - returns: the value of the tries record component
- `public int xzSpread()`
  Returns the value of the xzSpread record component.
  - returns: the value of the xzSpread record component
- `public int ySpread()`
  Returns the value of the ySpread record component.
  - returns: the value of the ySpread record component
- `public Holder<PlacedFeature> feature()`
  Returns the value of the feature record component.
  - returns: the value of the feature record component

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## ReplaceBlockConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<ReplaceBlockConfiguration> CODEC`
- `public final List<OreConfiguration.TargetBlockState> targetStates`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## ReplaceSphereConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<ReplaceSphereConfiguration> CODEC`
- `public final BlockState targetState`
- `public final BlockState replaceState`
- `private final IntProvider radius`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Methods
- `public IntProvider radius()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## RootSystemConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<RootSystemConfiguration> CODEC`
- `public final Holder<PlacedFeature> treeFeature`
- `public final int requiredVerticalSpaceForTree`
- `public final int rootRadius`
- `public final TagKey<Block> rootReplaceable`
- `public final BlockStateProvider rootStateProvider`
- `public final int rootPlacementAttempts`
- `public final int rootColumnMaxHeight`
- `public final int hangingRootRadius`
- `public final int hangingRootsVerticalSpan`
- `public final BlockStateProvider hangingRootStateProvider`
- `public final int hangingRootPlacementAttempts`
- `public final int allowedVerticalWaterForTree`
- `public final BlockPredicate allowedTreePosition`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## SculkPatchConfiguration

*record* `net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration`

### Fields
- `private final int chargeCount`
  The field for the chargeCount record component.
- `private final int amountPerCharge`
  The field for the amountPerCharge record component.
- `private final int spreadAttempts`
  The field for the spreadAttempts record component.
- `private final int growthRounds`
  The field for the growthRounds record component.
- `private final int spreadRounds`
  The field for the spreadRounds record component.
- `private final IntProvider extraRareGrowths`
  The field for the extraRareGrowths record component.
- `private final float catalystChance`
  The field for the catalystChance record component.
- `public static final com.mojang.serialization.Codec<SculkPatchConfiguration> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

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
- `public int chargeCount()`
  Returns the value of the chargeCount record component.
  - returns: the value of the chargeCount record component
- `public int amountPerCharge()`
  Returns the value of the amountPerCharge record component.
  - returns: the value of the amountPerCharge record component
- `public int spreadAttempts()`
  Returns the value of the spreadAttempts record component.
  - returns: the value of the spreadAttempts record component
- `public int growthRounds()`
  Returns the value of the growthRounds record component.
  - returns: the value of the growthRounds record component
- `public int spreadRounds()`
  Returns the value of the spreadRounds record component.
  - returns: the value of the spreadRounds record component
- `public IntProvider extraRareGrowths()`
  Returns the value of the extraRareGrowths record component.
  - returns: the value of the extraRareGrowths record component
- `public float catalystChance()`
  Returns the value of the catalystChance record component.
  - returns: the value of the catalystChance record component

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## SimpleBlockConfiguration

*record* `net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration`

### Fields
- `private final BlockStateProvider toPlace`
  The field for the toPlace record component.
- `public static final com.mojang.serialization.Codec<SimpleBlockConfiguration> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

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
- `public BlockStateProvider toPlace()`
  Returns the value of the toPlace record component.
  - returns: the value of the toPlace record component

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## SimpleRandomFeatureConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<SimpleRandomFeatureConfiguration> CODEC`
- `public final HolderSet<PlacedFeature> features`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Methods
- `public Stream<ConfiguredFeature<?,?>> getFeatures()`

## SpikeConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<SpikeConfiguration> CODEC`
- `private final boolean crystalInvulnerable`
- `private final List<SpikeFeature.EndSpike> spikes`
- `@Nullable private final BlockPos crystalBeamTarget`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Methods
- `public boolean isCrystalInvulnerable()`
- `public List<SpikeFeature.EndSpike> getSpikes()`
- `@Nullable public BlockPos getCrystalBeamTarget()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## SpringConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<SpringConfiguration> CODEC`
- `public final FluidState state`
- `public final boolean requiresBlockBelow`
- `public final int rockCount`
- `public final int holeCount`
- `public final HolderSet<Block> validBlocks`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## TreeConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<TreeConfiguration> CODEC`
- `public final BlockStateProvider trunkProvider`
- `public final BlockStateProvider dirtProvider`
- `public final TrunkPlacer trunkPlacer`
- `public final BlockStateProvider foliageProvider`
- `public final FoliagePlacer foliagePlacer`
- `public final Optional<RootPlacer> rootPlacer`
- `public final FeatureSize minimumSize`
- `public final List<TreeDecorator> decorators`
- `public final boolean ignoreVines`
- `public final boolean forceDirt`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## TreeConfiguration.TreeConfigurationBuilder

*class* `net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration.TreeConfigurationBuilder`

Enclosing class: TreeConfiguration

### Fields
- `public final BlockStateProvider trunkProvider`
- `private final TrunkPlacer trunkPlacer`
- `public final BlockStateProvider foliageProvider`
- `private final FoliagePlacer foliagePlacer`
- `private final Optional<RootPlacer> rootPlacer`
- `private BlockStateProvider dirtProvider`
- `private final FeatureSize minimumSize`
- `private List<TreeDecorator> decorators`
- `private boolean ignoreVines`
- `private boolean forceDirt`

### Methods
- `public TreeConfiguration.TreeConfigurationBuilder dirt(BlockStateProvider p_161261_)`
- `public TreeConfiguration.TreeConfigurationBuilder decorators(List<TreeDecorator> p_68250_)`
- `public TreeConfiguration.TreeConfigurationBuilder ignoreVines()`
- `public TreeConfiguration.TreeConfigurationBuilder forceDirt()`
- `public TreeConfiguration build()`

## TwistingVinesConfig

*record* `net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig`

### Fields
- `private final int spreadWidth`
  The field for the spreadWidth record component.
- `private final int spreadHeight`
  The field for the spreadHeight record component.
- `private final int maxHeight`
  The field for the maxHeight record component.
- `public static final com.mojang.serialization.Codec<TwistingVinesConfig> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

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
- `public int spreadWidth()`
  Returns the value of the spreadWidth record component.
  - returns: the value of the spreadWidth record component
- `public int spreadHeight()`
  Returns the value of the spreadHeight record component.
  - returns: the value of the spreadHeight record component
- `public int maxHeight()`
  Returns the value of the maxHeight record component.
  - returns: the value of the maxHeight record component

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## UnderwaterMagmaConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<UnderwaterMagmaConfiguration> CODEC`
- `public final int floorSearchRange`
- `public final int placementRadiusAroundFloor`
- `public final float placementProbabilityPerValidPosition`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## VegetationPatchConfiguration

*class* `net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<VegetationPatchConfiguration> CODEC`
- `public final TagKey<Block> replaceable`
- `public final BlockStateProvider groundState`
- `public final Holder<PlacedFeature> vegetationFeature`
- `public final CaveSurface surface`
- `public final IntProvider depth`
- `public final float extraBottomBlockChance`
- `public final int verticalRange`
- `public final float vegetationChance`
- `public final IntProvider xzRadius`
- `public final float extraEdgeColumnChance`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`
