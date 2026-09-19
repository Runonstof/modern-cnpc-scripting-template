# net.minecraft.world.level.levelgen

- [Aquifer](#aquifer)
- [Aquifer.FluidPicker](#aquifer.fluidpicker)
- [Aquifer.FluidStatus](#aquifer.fluidstatus)
- [Aquifer.NoiseBasedAquifer](#aquifer.noisebasedaquifer)
- [Beardifier](#beardifier)
- [Beardifier.Rigid](#beardifier.rigid)
- [BelowZeroRetrogen](#belowzeroretrogen)
- [BitRandomSource](#bitrandomsource)
- [Class DensityFunctions.BeardifierMarker](#class-densityfunctions.beardifiermarker)
- [Class DensityFunctions.BlendAlpha](#class-densityfunctions.blendalpha)
- [Class DensityFunctions.BlendOffset](#class-densityfunctions.blendoffset)
- [Class DensityFunctions.Mapped.Type](#class-densityfunctions.mapped.type)
- [Class DensityFunctions.Marker.Type](#class-densityfunctions.marker.type)
- [Class DensityFunctions.MulOrAdd.Type](#class-densityfunctions.muloradd.type)
- [Class DensityFunctions.TwoArgumentSimpleFunction.Type](#class-densityfunctions.twoargumentsimplefunction.type)
- [Class DensityFunctions.WeirdScaledSampler.RarityValueMapper](#class-densityfunctions.weirdscaledsampler.rarityvaluemapper)
- [Class GenerationStep.Carving](#class-generationstep.carving)
- [Class GenerationStep.Decoration](#class-generationstep.decoration)
- [Class Heightmap.Types](#class-heightmap.types)
- [Class Heightmap.Usage](#class-heightmap.usage)
- [Class OreVeinifier.VeinType](#class-oreveinifier.veintype)
- [Class SurfaceRules.AbovePreliminarySurface](#class-surfacerules.abovepreliminarysurface)
- [Class SurfaceRules.Bandlands](#class-surfacerules.bandlands)
- [Class SurfaceRules.Hole](#class-surfacerules.hole)
- [Class SurfaceRules.Steep](#class-surfacerules.steep)
- [Class SurfaceRules.Temperature](#class-surfacerules.temperature)
- [Class WorldgenRandom.Algorithm](#class-worldgenrandom.algorithm)
- [Column](#column)
- [Column.Line](#column.line)
- [Column.Range](#column.range)
- [Column.Ray](#column.ray)
- [DebugLevelSource](#debuglevelsource)
- [Density](#density)
- [DensityFunction](#densityfunction)
- [DensityFunction.ContextProvider](#densityfunction.contextprovider)
- [DensityFunction.FunctionContext](#densityfunction.functioncontext)
- [DensityFunction.NoiseHolder](#densityfunction.noiseholder)
- [DensityFunction.SimpleFunction](#densityfunction.simplefunction)
- [DensityFunction.SinglePointContext](#densityfunction.singlepointcontext)
- [DensityFunction.Visitor](#densityfunction.visitor)
- [DensityFunctions](#densityfunctions)
- [DensityFunctions.Ap2](#densityfunctions.ap2)
- [DensityFunctions.BeardifierOrMarker](#densityfunctions.beardifierormarker)
- [DensityFunctions.BlendDensity](#densityfunctions.blenddensity)
- [DensityFunctions.Clamp](#densityfunctions.clamp)
- [DensityFunctions.Constant](#densityfunctions.constant)
- [DensityFunctions.EndIslandDensityFunction](#densityfunctions.endislanddensityfunction)
- [DensityFunctions.HolderHolder](#densityfunctions.holderholder)
- [DensityFunctions.Mapped](#densityfunctions.mapped)
- [DensityFunctions.Marker](#densityfunctions.marker)
- [DensityFunctions.MarkerOrMarked](#densityfunctions.markerormarked)
- [DensityFunctions.MulOrAdd](#densityfunctions.muloradd)
- [DensityFunctions.Noise](#densityfunctions.noise)
- [DensityFunctions.PureTransformer](#densityfunctions.puretransformer)
- [DensityFunctions.RangeChoice](#densityfunctions.rangechoice)
- [DensityFunctions.Shift](#densityfunctions.shift)
- [DensityFunctions.ShiftA](#densityfunctions.shifta)
- [DensityFunctions.ShiftB](#densityfunctions.shiftb)
- [DensityFunctions.ShiftedNoise](#densityfunctions.shiftednoise)
- [DensityFunctions.ShiftNoise](#densityfunctions.shiftnoise)
- [DensityFunctions.Spline](#densityfunctions.spline)
- [DensityFunctions.Spline.Coordinate](#densityfunctions.spline.coordinate)
- [DensityFunctions.Spline.Point](#densityfunctions.spline.point)
- [DensityFunctions.TransformerWithContext](#densityfunctions.transformerwithcontext)
- [DensityFunctions.TwoArgumentSimpleFunction](#densityfunctions.twoargumentsimplefunction)
- [DensityFunctions.WeirdScaledSampler](#densityfunctions.weirdscaledsampler)
- [DensityFunctions.YClampedGradient](#densityfunctions.yclampedgradient)
- [FlatLevelSource](#flatlevelsource)
- [GenerationStep](#generationstep)
- [GeodeBlockSettings](#geodeblocksettings)
- [GeodeCrackSettings](#geodecracksettings)
- [GeodeLayerSettings](#geodelayersettings)
- [Heightmap](#heightmap)
- [LegacyRandomSource](#legacyrandomsource)
- [LegacyRandomSource.LegacyPositionalRandomFactory](#legacyrandomsource.legacypositionalrandomfactory)
- [MarsagliaPolarGaussian](#marsagliapolargaussian)
- [NoiseBasedChunkGenerator](#noisebasedchunkgenerator)
- [NoiseChunk](#noisechunk)
- [NoiseChunk.BlendAlpha](#noisechunk.blendalpha)
- [NoiseChunk.BlendOffset](#noisechunk.blendoffset)
- [NoiseChunk.BlockStateFiller](#noisechunk.blockstatefiller)
- [NoiseChunk.Cache2D](#noisechunk.cache2d)
- [NoiseChunk.CacheAllInCell](#noisechunk.cacheallincell)
- [NoiseChunk.CacheOnce](#noisechunk.cacheonce)
- [NoiseChunk.FlatCache](#noisechunk.flatcache)
- [NoiseChunk.NoiseChunkDensityFunction](#noisechunk.noisechunkdensityfunction)
- [NoiseChunk.NoiseInterpolator](#noisechunk.noiseinterpolator)
- [NoiseGeneratorSettings](#noisegeneratorsettings)
- [NoiseRouter](#noiserouter)
- [NoiseRouterData](#noiserouterdata)
- [NoiseRouterData.QuantizedSpaghettiRarity](#noiserouterdata.quantizedspaghettirarity)
- [Noises](#noises)
- [NoiseSettings](#noisesettings)
- [OreVeinifier](#oreveinifier)
- [PatrolSpawner](#patrolspawner)
- [PhantomSpawner](#phantomspawner)
- [PositionalRandomFactory](#positionalrandomfactory)
- [RandomState](#randomstate)
- [RandomSupport](#randomsupport)
- [RandomSupport.Seed128bit](#randomsupport.seed128bit)
- [SingleThreadedRandomSource](#singlethreadedrandomsource)
- [SurfaceRules](#surfacerules)
- [SurfaceRules.BiomeConditionSource](#surfacerules.biomeconditionsource)
- [SurfaceRules.BlockRuleSource](#surfacerules.blockrulesource)
- [SurfaceRules.Condition](#surfacerules.condition)
- [SurfaceRules.ConditionSource](#surfacerules.conditionsource)
- [SurfaceRules.Context](#surfacerules.context)
- [SurfaceRules.Context.AbovePreliminarySurfaceCondition](#surfacerules.context.abovepreliminarysurfacecondition)
- [SurfaceRules.Context.HoleCondition](#surfacerules.context.holecondition)
- [SurfaceRules.Context.SteepMaterialCondition](#surfacerules.context.steepmaterialcondition)
- [SurfaceRules.Context.TemperatureHelperCondition](#surfacerules.context.temperaturehelpercondition)
- [SurfaceRules.LazyCondition](#surfacerules.lazycondition)
- [SurfaceRules.LazyXZCondition](#surfacerules.lazyxzcondition)
- [SurfaceRules.LazyYCondition](#surfacerules.lazyycondition)
- [SurfaceRules.NoiseThresholdConditionSource](#surfacerules.noisethresholdconditionsource)
- [SurfaceRules.NotCondition](#surfacerules.notcondition)
- [SurfaceRules.NotConditionSource](#surfacerules.notconditionsource)
- [SurfaceRules.RuleSource](#surfacerules.rulesource)
- [SurfaceRules.SequenceRule](#surfacerules.sequencerule)
- [SurfaceRules.SequenceRuleSource](#surfacerules.sequencerulesource)
- [SurfaceRules.StateRule](#surfacerules.staterule)
- [SurfaceRules.StoneDepthCheck](#surfacerules.stonedepthcheck)
- [SurfaceRules.SurfaceRule](#surfacerules.surfacerule)
- [SurfaceRules.TestRule](#surfacerules.testrule)
- [SurfaceRules.TestRuleSource](#surfacerules.testrulesource)
- [SurfaceRules.VerticalGradientConditionSource](#surfacerules.verticalgradientconditionsource)
- [SurfaceRules.WaterConditionSource](#surfacerules.waterconditionsource)
- [SurfaceRules.YConditionSource](#surfacerules.yconditionsource)
- [SurfaceSystem](#surfacesystem)
- [ThreadSafeLegacyRandomSource](#threadsafelegacyrandomsource)
- [VerticalAnchor](#verticalanchor)
- [VerticalAnchor.AboveBottom](#verticalanchor.abovebottom)
- [VerticalAnchor.Absolute](#verticalanchor.absolute)
- [VerticalAnchor.BelowTop](#verticalanchor.belowtop)
- [WorldDimensions](#worlddimensions)
- [WorldDimensions.Complete](#worlddimensions.complete)
- [WorldGenerationContext](#worldgenerationcontext)
- [WorldgenRandom](#worldgenrandom)
- [WorldGenSettings](#worldgensettings)
- [WorldOptions](#worldoptions)
- [Xoroshiro128PlusPlus](#xoroshiro128plusplus)
- [XoroshiroRandomSource](#xoroshirorandomsource)
- [XoroshiroRandomSource.XoroshiroPositionalRandomFactory](#xoroshirorandomsource.xoroshiropositionalrandomfactory)
## Aquifer

*interface* `net.minecraft.world.level.levelgen.Aquifer`

### Methods
- `static Aquifer create(NoiseChunk p_223881_,  ChunkPos p_223882_,  NoiseRouter p_223883_,  PositionalRandomFactory p_223884_,  int p_223885_,  int p_223886_,  Aquifer.FluidPicker p_223887_)`
- `static Aquifer createDisabled(Aquifer.FluidPicker p_188375_)`
- `@Nullable BlockState computeSubstance(DensityFunction.FunctionContext p_208158_,  double p_208159_)`
- `boolean shouldScheduleFluidUpdate()`

## Aquifer.FluidPicker

*interface* `net.minecraft.world.level.levelgen.Aquifer.FluidPicker`

Enclosing interface: Aquifer

### Methods
- `Aquifer.FluidStatus computeFluid(int p_188397_,  int p_188398_,  int p_188399_)`

## Aquifer.FluidStatus

*class* `net.minecraft.world.level.levelgen.Aquifer.FluidStatus`

Enclosing interface: Aquifer

### Fields
- `final int fluidLevel`
- `final BlockState fluidType`

### Methods
- `public BlockState at(int p_188406_)`

## Aquifer.NoiseBasedAquifer

*class* `net.minecraft.world.level.levelgen.Aquifer.NoiseBasedAquifer`

Enclosing interface: Aquifer

### Fields
- `private static final int X_RANGE` (= 10)
- `private static final int Y_RANGE` (= 9)
- `private static final int Z_RANGE` (= 10)
- `private static final int X_SEPARATION` (= 6)
- `private static final int Y_SEPARATION` (= 3)
- `private static final int Z_SEPARATION` (= 6)
- `private static final int X_SPACING` (= 16)
- `private static final int Y_SPACING` (= 12)
- `private static final int Z_SPACING` (= 16)
- `private static final int MAX_REASONABLE_DISTANCE_TO_AQUIFER_CENTER` (= 11)
- `private static final double FLOWING_UPDATE_SIMULARITY`
- `private final NoiseChunk noiseChunk`
- `protected final DensityFunction barrierNoise`
- `private final DensityFunction fluidLevelFloodednessNoise`
- `private final DensityFunction fluidLevelSpreadNoise`
- `protected final DensityFunction lavaNoise`
- `private final PositionalRandomFactory positionalRandomFactory`
- `protected final Aquifer.FluidStatus[] aquiferCache`
- `protected final long[] aquiferLocationCache`
- `private final Aquifer.FluidPicker globalFluidPicker`
- `private final DensityFunction erosion`
- `private final DensityFunction depth`
- `protected boolean shouldScheduleFluidUpdate`
- `protected final int minGridX`
- `protected final int minGridY`
- `protected final int minGridZ`
- `protected final int gridSizeX`
- `protected final int gridSizeZ`
- `private static final int[][] SURFACE_SAMPLING_OFFSETS_IN_CHUNKS`

### Methods
- `protected int getIndex(int p_158028_,  int p_158029_,  int p_158030_)`
- `@Nullable public BlockState computeSubstance(DensityFunction.FunctionContext p_208186_,  double p_208187_)`
- `public boolean shouldScheduleFluidUpdate()`
- `protected static double similarity(int p_158025_,  int p_158026_)`
- `private double calculatePressure(DensityFunction.FunctionContext p_208189_,  org.apache.commons.lang3.mutable.MutableDouble p_208190_,  Aquifer.FluidStatus p_208191_,  Aquifer.FluidStatus p_208192_)`
- `protected int gridX(int p_158040_)`
- `protected int gridY(int p_158046_)`
- `protected int gridZ(int p_158048_)`
- `private Aquifer.FluidStatus getAquiferStatus(long p_188446_)`
- `private Aquifer.FluidStatus computeFluid(int p_188448_,  int p_188449_,  int p_188450_)`
- `private int computeSurfaceLevel(int p_223910_,  int p_223911_,  int p_223912_,  Aquifer.FluidStatus p_223913_,  int p_223914_,  boolean p_223915_)`
- `private int computeRandomizedFluidSurfaceLevel(int p_223899_,  int p_223900_,  int p_223901_,  int p_223902_)`
- `private BlockState computeFluidType(int p_223904_,  int p_223905_,  int p_223906_,  Aquifer.FluidStatus p_223907_,  int p_223908_)`

## Beardifier

*class* `net.minecraft.world.level.levelgen.Beardifier`

### Fields
- `public static final int BEARD_KERNEL_RADIUS` (= 12)
- `private static final int BEARD_KERNEL_SIZE` (= 24)
- `private static final float[] BEARD_KERNEL`
- `protected final it.unimi.dsi.fastutil.objects.ObjectListIterator<Beardifier.Rigid> pieceIterator`
- `protected final it.unimi.dsi.fastutil.objects.ObjectListIterator<JigsawJunction> junctionIterator`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`
- from `net.minecraft.world.level.levelgen.DensityFunctions.BeardifierOrMarker`: `CODEC`

### Methods
- `public static Beardifier forStructuresInChunk(StructureManager p_223938_,  ChunkPos p_223939_)`
- `public double compute(DensityFunction.FunctionContext p_208200_)`
- `public double minValue()`
- `public double maxValue()`
- `protected static double getBuryContribution(int p_158084_,  int p_158085_,  int p_158086_)`
- `protected static double getBeardContribution(int p_223926_,  int p_223927_,  int p_223928_,  int p_223929_)`
- `private static boolean isInKernelRange(int p_223920_)`
- `private static double computeBeardContribution(int p_158092_,  int p_158093_,  int p_158094_)`
- `private static double computeBeardContribution(int p_223922_,  double p_223923_,  int p_223924_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunction.SimpleFunction`: `fillArray`, `mapAll`
- from `net.minecraft.world.level.levelgen.DensityFunctions.BeardifierOrMarker`: `codec`

## Beardifier.Rigid

*record* `net.minecraft.world.level.levelgen.Beardifier.Rigid`

Enclosing class: Beardifier

### Fields
- `private final BoundingBox box`
  The field for the box record component.
- `private final TerrainAdjustment terrainAdjustment`
  The field for the terrainAdjustment record component.
- `private final int groundLevelDelta`
  The field for the groundLevelDelta record component.

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
- `public BoundingBox box()`
  Returns the value of the box record component.
  - returns: the value of the box record component
- `public TerrainAdjustment terrainAdjustment()`
  Returns the value of the terrainAdjustment record component.
  - returns: the value of the terrainAdjustment record component
- `public int groundLevelDelta()`
  Returns the value of the groundLevelDelta record component.
  - returns: the value of the groundLevelDelta record component

## BelowZeroRetrogen

*class* `net.minecraft.world.level.levelgen.BelowZeroRetrogen`

### Fields
- `private static final BitSet EMPTY`
- `private static final com.mojang.serialization.Codec<BitSet> BITSET_CODEC`
- `private static final com.mojang.serialization.Codec<ChunkStatus> NON_EMPTY_CHUNK_STATUS`
- `public static final com.mojang.serialization.Codec<BelowZeroRetrogen> CODEC`
- `private static final Set<ResourceKey<Biome>> RETAINED_RETROGEN_BIOMES`
- `public static final LevelHeightAccessor UPGRADE_HEIGHT_ACCESSOR`
- `private final ChunkStatus targetStatus`
- `private final BitSet missingBedrock`

### Methods
- `@Nullable public static BelowZeroRetrogen read(CompoundTag p_188486_)`
- `public static void replaceOldBedrock(ProtoChunk p_188475_)`
- `public void applyBedrockMask(ProtoChunk p_198222_)`
- `public ChunkStatus targetStatus()`
- `public boolean hasBedrockHoles()`
- `public boolean hasBedrockHole(int p_198215_,  int p_198216_)`
- `public static BiomeResolver getBiomeResolver(BiomeResolver p_204532_,  ChunkAccess p_204533_)`

## BitRandomSource

*interface* `net.minecraft.world.level.levelgen.BitRandomSource`

All Superinterfaces: RandomSource

### Fields
- `static final float FLOAT_MULTIPLIER` (= 5.9604644775390625E-8f)
- `static final double DOUBLE_MULTIPLIER` (= 1.1102230246251565E-16)

### Inherited fields
- from `net.minecraft.util.RandomSource`: `GAUSSIAN_SPREAD_FACTOR`

### Methods
- `int next(int p_188498_)`
- `default int nextInt()`
- `default int nextInt(int p_188504_)`
- `default long nextLong()`
- `default boolean nextBoolean()`
- `default float nextFloat()`
- `default double nextDouble()`

### Inherited methods
- from `net.minecraft.util.RandomSource`: `consumeCount`, `fork`, `forkPositional`, `nextGaussian`, `nextInt`, `nextIntBetweenInclusive`, `setSeed`, `triangle`

## Class DensityFunctions.BeardifierMarker

*enum* `net.minecraft.world.level.levelgen.Class DensityFunctions.BeardifierMarker`

Enclosing class: DensityFunctions

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`
- from `net.minecraft.world.level.levelgen.DensityFunctions.BeardifierOrMarker`: `CODEC`

### Methods
- `public static DensityFunctions.BeardifierMarker[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static DensityFunctions.BeardifierMarker valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public double compute(DensityFunction.FunctionContext p_208515_)`
- `public void fillArray(double[] p_208517_,  DensityFunction.ContextProvider p_208518_)`
- `public double minValue()`
- `public double maxValue()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunction.SimpleFunction`: `mapAll`
- from `net.minecraft.world.level.levelgen.DensityFunctions.BeardifierOrMarker`: `codec`

## Class DensityFunctions.BlendAlpha

*enum* `net.minecraft.world.level.levelgen.Class DensityFunctions.BlendAlpha`

Enclosing class: DensityFunctions

### Fields
- `public static final KeyDispatchDataCodec<DensityFunction> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public static DensityFunctions.BlendAlpha[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static DensityFunctions.BlendAlpha valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public double compute(DensityFunction.FunctionContext p_208536_)`
- `public void fillArray(double[] p_208538_,  DensityFunction.ContextProvider p_208539_)`
- `public double minValue()`
- `public double maxValue()`
- `public KeyDispatchDataCodec<? extends DensityFunction> codec()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunction.SimpleFunction`: `mapAll`

## Class DensityFunctions.BlendOffset

*enum* `net.minecraft.world.level.levelgen.Class DensityFunctions.BlendOffset`

Enclosing class: DensityFunctions

### Fields
- `public static final KeyDispatchDataCodec<DensityFunction> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public static DensityFunctions.BlendOffset[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static DensityFunctions.BlendOffset valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public double compute(DensityFunction.FunctionContext p_208573_)`
- `public void fillArray(double[] p_208575_,  DensityFunction.ContextProvider p_208576_)`
- `public double minValue()`
- `public double maxValue()`
- `public KeyDispatchDataCodec<? extends DensityFunction> codec()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunction.SimpleFunction`: `mapAll`

## Class DensityFunctions.Mapped.Type

*enum* `net.minecraft.world.level.levelgen.Class DensityFunctions.Mapped.Type`

Enclosing class: DensityFunctions.Mapped

### Fields
- `private final String name`
- `final KeyDispatchDataCodec<DensityFunctions.Mapped> codec`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static DensityFunctions.Mapped.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static DensityFunctions.Mapped.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class DensityFunctions.Marker.Type

*enum* `net.minecraft.world.level.levelgen.Class DensityFunctions.Marker.Type`

Enclosing class: DensityFunctions.Marker

### Fields
- `private final String name`
- `final KeyDispatchDataCodec<DensityFunctions.MarkerOrMarked> codec`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static DensityFunctions.Marker.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static DensityFunctions.Marker.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class DensityFunctions.MulOrAdd.Type

*enum* `net.minecraft.world.level.levelgen.Class DensityFunctions.MulOrAdd.Type`

Enclosing class: DensityFunctions.MulOrAdd

### Methods
- `public static DensityFunctions.MulOrAdd.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static DensityFunctions.MulOrAdd.Type valueOf(String name)`
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

## Class DensityFunctions.TwoArgumentSimpleFunction.Type

*enum* `net.minecraft.world.level.levelgen.Class DensityFunctions.TwoArgumentSimpleFunction.Type`

Enclosing interface: DensityFunctions.TwoArgumentSimpleFunction

### Fields
- `final KeyDispatchDataCodec<DensityFunctions.TwoArgumentSimpleFunction> codec`
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static DensityFunctions.TwoArgumentSimpleFunction.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static DensityFunctions.TwoArgumentSimpleFunction.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class DensityFunctions.WeirdScaledSampler.RarityValueMapper

*enum* `net.minecraft.world.level.levelgen.Class DensityFunctions.WeirdScaledSampler.RarityValueMapper`

Enclosing class: DensityFunctions.WeirdScaledSampler

### Fields
- `public static final com.mojang.serialization.Codec<DensityFunctions.WeirdScaledSampler.RarityValueMapper> CODEC`
- `private final String name`
- `final it.unimi.dsi.fastutil.doubles.Double2DoubleFunction mapper`
- `final double maxRarity`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static DensityFunctions.WeirdScaledSampler.RarityValueMapper[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static DensityFunctions.WeirdScaledSampler.RarityValueMapper valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class GenerationStep.Carving

*enum* `net.minecraft.world.level.levelgen.Class GenerationStep.Carving`

Enclosing class: GenerationStep

### Fields
- `public static final com.mojang.serialization.Codec<GenerationStep.Carving> CODEC`
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static GenerationStep.Carving[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static GenerationStep.Carving valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getName()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class GenerationStep.Decoration

*enum* `net.minecraft.world.level.levelgen.Class GenerationStep.Decoration`

Enclosing class: GenerationStep

### Fields
- `public static final com.mojang.serialization.Codec<GenerationStep.Decoration> CODEC`
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static GenerationStep.Decoration[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static GenerationStep.Decoration valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getName()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Heightmap.Types

*enum* `net.minecraft.world.level.levelgen.Class Heightmap.Types`

Enclosing class: Heightmap

### Fields
- `public static final com.mojang.serialization.Codec<Heightmap.Types> CODEC`
- `private final String serializationKey`
- `private final Heightmap.Usage usage`
- `private final Predicate<BlockState> isOpaque`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static Heightmap.Types[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Heightmap.Types valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializationKey()`
- `public boolean sendToClient()`
- `public boolean keepAfterWorldgen()`
- `public Predicate<BlockState> isOpaque()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Heightmap.Usage

*enum* `net.minecraft.world.level.levelgen.Class Heightmap.Usage`

Enclosing class: Heightmap

### Methods
- `public static Heightmap.Usage[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Heightmap.Usage valueOf(String name)`
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

## Class OreVeinifier.VeinType

*enum* `net.minecraft.world.level.levelgen.Class OreVeinifier.VeinType`

Enclosing class: OreVeinifier

### Fields
- `final BlockState ore`
- `final BlockState rawOreBlock`
- `final BlockState filler`
- `protected final int minY`
- `protected final int maxY`

### Methods
- `public static OreVeinifier.VeinType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static OreVeinifier.VeinType valueOf(String name)`
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

## Class SurfaceRules.AbovePreliminarySurface

*enum* `net.minecraft.world.level.levelgen.Class SurfaceRules.AbovePreliminarySurface`

Enclosing class: SurfaceRules

### Fields
- `static final KeyDispatchDataCodec<SurfaceRules.AbovePreliminarySurface> CODEC`

### Methods
- `public static SurfaceRules.AbovePreliminarySurface[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SurfaceRules.AbovePreliminarySurface valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()`
- `public SurfaceRules.Condition apply(SurfaceRules.Context p_189437_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `java.util.function.Function`: `andThen`, `compose`

## Class SurfaceRules.Bandlands

*enum* `net.minecraft.world.level.levelgen.Class SurfaceRules.Bandlands`

Enclosing class: SurfaceRules

### Fields
- `static final KeyDispatchDataCodec<SurfaceRules.Bandlands> CODEC`

### Methods
- `public static SurfaceRules.Bandlands[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SurfaceRules.Bandlands valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public KeyDispatchDataCodec<? extends SurfaceRules.RuleSource> codec()`
- `public SurfaceRules.SurfaceRule apply(SurfaceRules.Context p_189482_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `java.util.function.Function`: `andThen`, `compose`

## Class SurfaceRules.Hole

*enum* `net.minecraft.world.level.levelgen.Class SurfaceRules.Hole`

Enclosing class: SurfaceRules

### Fields
- `static final KeyDispatchDataCodec<SurfaceRules.Hole> CODEC`

### Methods
- `public static SurfaceRules.Hole[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SurfaceRules.Hole valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()`
- `public SurfaceRules.Condition apply(SurfaceRules.Context p_189608_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `java.util.function.Function`: `andThen`, `compose`

## Class SurfaceRules.Steep

*enum* `net.minecraft.world.level.levelgen.Class SurfaceRules.Steep`

Enclosing class: SurfaceRules

### Fields
- `static final KeyDispatchDataCodec<SurfaceRules.Steep> CODEC`

### Methods
- `public static SurfaceRules.Steep[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SurfaceRules.Steep valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()`
- `public SurfaceRules.Condition apply(SurfaceRules.Context p_189733_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `java.util.function.Function`: `andThen`, `compose`

## Class SurfaceRules.Temperature

*enum* `net.minecraft.world.level.levelgen.Class SurfaceRules.Temperature`

Enclosing class: SurfaceRules

### Fields
- `static final KeyDispatchDataCodec<SurfaceRules.Temperature> CODEC`

### Methods
- `public static SurfaceRules.Temperature[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SurfaceRules.Temperature valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()`
- `public SurfaceRules.Condition apply(SurfaceRules.Context p_189786_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `java.util.function.Function`: `andThen`, `compose`

## Class WorldgenRandom.Algorithm

*enum* `net.minecraft.world.level.levelgen.Class WorldgenRandom.Algorithm`

Enclosing class: WorldgenRandom

### Fields
- `private final LongFunction<RandomSource> constructor`

### Methods
- `public static WorldgenRandom.Algorithm[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static WorldgenRandom.Algorithm valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public RandomSource newInstance(long p_224688_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Column

*class* `net.minecraft.world.level.levelgen.Column`

### Methods
- `public static Column.Range around(int p_158165_,  int p_158166_)`
- `public static Column.Range inside(int p_158189_,  int p_158190_)`
- `public static Column below(int p_158163_)`
- `public static Column fromHighest(int p_158187_)`
- `public static Column above(int p_158194_)`
- `public static Column fromLowest(int p_158196_)`
- `public static Column line()`
- `public static Column create(OptionalInt p_158184_,  OptionalInt p_158185_)`
- `public abstract OptionalInt getCeiling()`
- `public abstract OptionalInt getFloor()`
- `public abstract OptionalInt getHeight()`
- `public Column withFloor(OptionalInt p_158182_)`
- `public Column withCeiling(OptionalInt p_158192_)`
- `public static Optional<Column> scan(LevelSimulatedReader p_158176_,  BlockPos p_158177_,  int p_158178_,  Predicate<BlockState> p_158179_,  Predicate<BlockState> p_158180_)`
- `private static OptionalInt scanDirection(LevelSimulatedReader p_158168_,  int p_158169_,  Predicate<BlockState> p_158170_,  Predicate<BlockState> p_158171_,  BlockPos.MutableBlockPos p_158172_,  int p_158173_,  Direction p_158174_)`

## Column.Line

*class* `net.minecraft.world.level.levelgen.Column.Line`

Enclosing class: Column

### Fields
- `static final Column.Line INSTANCE`

### Methods
- `public OptionalInt getCeiling()`
- `public OptionalInt getFloor()`
- `public OptionalInt getHeight()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.Column`: `above`, `around`, `below`, `create`, `fromHighest`, `fromLowest`, `inside`, `line`, `scan`, `withCeiling`, `withFloor`

## Column.Range

*class* `net.minecraft.world.level.levelgen.Column.Range`

Enclosing class: Column

### Fields
- `private final int floor`
- `private final int ceiling`

### Methods
- `public OptionalInt getCeiling()`
- `public OptionalInt getFloor()`
- `public OptionalInt getHeight()`
- `public int ceiling()`
- `public int floor()`
- `public int height()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.Column`: `above`, `around`, `below`, `create`, `fromHighest`, `fromLowest`, `inside`, `line`, `scan`, `withCeiling`, `withFloor`

## Column.Ray

*class* `net.minecraft.world.level.levelgen.Column.Ray`

Enclosing class: Column

### Fields
- `private final int edge`
- `private final boolean pointingUp`

### Methods
- `public OptionalInt getCeiling()`
- `public OptionalInt getFloor()`
- `public OptionalInt getHeight()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.Column`: `above`, `around`, `below`, `create`, `fromHighest`, `fromLowest`, `inside`, `line`, `scan`, `withCeiling`, `withFloor`

## DebugLevelSource

*class* `net.minecraft.world.level.levelgen.DebugLevelSource`

### Fields
- `public static final com.mojang.serialization.Codec<DebugLevelSource> CODEC`
- `private static final int BLOCK_MARGIN` (= 2)
- `private static List<BlockState> ALL_BLOCKS`
- `private static int GRID_WIDTH`
- `private static int GRID_HEIGHT`
- `protected static final BlockState AIR`
- `protected static final BlockState BARRIER`
- `public static final int HEIGHT` (= 70)
- `public static final int BARRIER_HEIGHT` (= 60)

### Inherited fields
- from `net.minecraft.world.level.chunk.ChunkGenerator`: `biomeSource`

### Methods
- `protected com.mojang.serialization.Codec<? extends ChunkGenerator> codec()`
- `public void buildSurface(WorldGenRegion p_223978_,  StructureManager p_223979_,  RandomState p_223980_,  ChunkAccess p_223981_)`
- `public void applyBiomeDecoration(WorldGenLevel p_223983_,  ChunkAccess p_223984_,  StructureManager p_223985_)`
- `public CompletableFuture<ChunkAccess> fillFromNoise(Executor p_223991_,  Blender p_223992_,  RandomState p_223993_,  StructureManager p_223994_,  ChunkAccess p_223995_)`
- `public int getBaseHeight(int p_223964_,  int p_223965_,  Heightmap.Types p_223966_,  LevelHeightAccessor p_223967_,  RandomState p_223968_)`
- `public NoiseColumn getBaseColumn(int p_223959_,  int p_223960_,  LevelHeightAccessor p_223961_,  RandomState p_223962_)`
- `public void addDebugScreenInfo(List<String> p_223987_,  RandomState p_223988_,  BlockPos p_223989_)`
- `public static BlockState getBlockStateFor(int p_64149_,  int p_64150_)`
- `public static void initValidStates()`
- `public void applyCarvers(WorldGenRegion p_223970_,  long p_223971_,  RandomState p_223972_,  BiomeManager p_223973_,  StructureManager p_223974_,  ChunkAccess p_223975_,  GenerationStep.Carving p_223976_)`
- `public void spawnOriginalMobs(WorldGenRegion p_188511_)`
- `public int getMinY()`
- `public int getGenDepth()`
- `public int getSeaLevel()`

### Inherited methods
- from `net.minecraft.world.level.chunk.ChunkGenerator`: `createBiomes`, `createReferences`, `createState`, `createStructures`, `findNearestMapStructure`, `getBiomeGenerationSettings`, `getBiomeSource`, `getFirstFreeHeight`, `getFirstOccupiedHeight`, `getMobsAt`, `getSpawnHeight`, `getTypeNameForDataFixer`

## Density

*class* `net.minecraft.world.level.levelgen.Density`

### Fields
- `public static final double SURFACE` (= 0.0)
- `public static final double UNRECOVERABLY_DENSE` (= 64.0)
- `public static final double UNRECOVERABLY_THIN` (= -64.0)

## DensityFunction

*interface* `net.minecraft.world.level.levelgen.DensityFunction`

### Fields
- `static final com.mojang.serialization.Codec<DensityFunction> DIRECT_CODEC`
- `static final com.mojang.serialization.Codec<Holder<DensityFunction>> CODEC`
- `static final com.mojang.serialization.Codec<DensityFunction> HOLDER_HELPER_CODEC`

### Methods
- `double compute(DensityFunction.FunctionContext p_208223_)`
- `void fillArray(double[] p_208227_,  DensityFunction.ContextProvider p_208228_)`
- `DensityFunction mapAll(DensityFunction.Visitor p_208224_)`
- `double minValue()`
- `double maxValue()`
- `KeyDispatchDataCodec<? extends DensityFunction> codec()`
- `default DensityFunction clamp(double p_208221_,  double p_208222_)`
- `default DensityFunction abs()`
- `default DensityFunction square()`
- `default DensityFunction cube()`
- `default DensityFunction halfNegative()`
- `default DensityFunction quarterNegative()`
- `default DensityFunction squeeze()`

## DensityFunction.ContextProvider

*interface* `net.minecraft.world.level.levelgen.DensityFunction.ContextProvider`

Enclosing interface: DensityFunction

### Methods
- `DensityFunction.FunctionContext forIndex(int p_208235_)`
- `void fillAllDirectly(double[] p_208236_,  DensityFunction p_208237_)`

## DensityFunction.FunctionContext

*interface* `net.minecraft.world.level.levelgen.DensityFunction.FunctionContext`

Enclosing interface: DensityFunction

### Methods
- `int blockX()`
- `int blockY()`
- `int blockZ()`
- `default Blender getBlender()`

## DensityFunction.NoiseHolder

*record* `net.minecraft.world.level.levelgen.DensityFunction.NoiseHolder`

Enclosing interface: DensityFunction

### Fields
- `private final Holder<NormalNoise.NoiseParameters> noiseData`
  The field for the noiseData record component.
- `@Nullable private final NormalNoise noise`
  The field for the noise record component.
- `public static final com.mojang.serialization.Codec<DensityFunction.NoiseHolder> CODEC`

### Methods
- `public double getValue(double p_224007_,  double p_224008_,  double p_224009_)`
- `public double maxValue()`
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
- `public Holder<NormalNoise.NoiseParameters> noiseData()`
  Returns the value of the noiseData record component.
  - returns: the value of the noiseData record component
- `@Nullable public NormalNoise noise()`
  Returns the value of the noise record component.
  - returns: the value of the noise record component

## DensityFunction.SimpleFunction

*interface* `net.minecraft.world.level.levelgen.DensityFunction.SimpleFunction`

All Superinterfaces: DensityFunction

Enclosing interface: DensityFunction

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `CODEC`, `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `default void fillArray(double[] p_208241_,  DensityFunction.ContextProvider p_208242_)`
- `default DensityFunction mapAll(DensityFunction.Visitor p_208239_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `codec`, `compute`, `cube`, `halfNegative`, `maxValue`, `minValue`, `quarterNegative`, `square`, `squeeze`

## DensityFunction.SinglePointContext

*record* `net.minecraft.world.level.levelgen.DensityFunction.SinglePointContext`

Enclosing interface: DensityFunction

### Fields
- `private final int blockX`
  The field for the blockX record component.
- `private final int blockY`
  The field for the blockY record component.
- `private final int blockZ`
  The field for the blockZ record component.

### Methods
- `public int blockX()`
  Returns the value of the blockX record component.
  - returns: the value of the blockX record component
- `public int blockY()`
  Returns the value of the blockY record component.
  - returns: the value of the blockY record component
- `public int blockZ()`
  Returns the value of the blockZ record component.
  - returns: the value of the blockZ record component
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

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction.FunctionContext`: `getBlender`

## DensityFunction.Visitor

*interface* `net.minecraft.world.level.levelgen.DensityFunction.Visitor`

Enclosing interface: DensityFunction

### Methods
- `DensityFunction apply(DensityFunction p_224019_)`
- `default DensityFunction.NoiseHolder visitNoise(DensityFunction.NoiseHolder p_224018_)`

## DensityFunctions

*class* `net.minecraft.world.level.levelgen.DensityFunctions`

### Fields
- `private static final com.mojang.serialization.Codec<DensityFunction> CODEC`
- `protected static final double MAX_REASONABLE_NOISE_VALUE` (= 1000000.0)
- `static final com.mojang.serialization.Codec<Double> NOISE_VALUE_CODEC`
- `public static final com.mojang.serialization.Codec<DensityFunction> DIRECT_CODEC`

### Methods
- `public static com.mojang.serialization.Codec<? extends DensityFunction> bootstrap(Registry<com.mojang.serialization.Codec<? extends DensityFunction>> p_208343_)`
- `private static com.mojang.serialization.Codec<? extends DensityFunction> register(Registry<com.mojang.serialization.Codec<? extends DensityFunction>> p_224035_,  String p_224036_,  KeyDispatchDataCodec<? extends DensityFunction> p_224037_)`
- `static <A, O> KeyDispatchDataCodec<O> singleArgumentCodec(com.mojang.serialization.Codec<A> p_224025_,  Function<A,O> p_224026_,  Function<O,A> p_224027_)`
- `static <O> KeyDispatchDataCodec<O> singleFunctionArgumentCodec(Function<DensityFunction,O> p_224043_,  Function<O,DensityFunction> p_224044_)`
- `static <O> KeyDispatchDataCodec<O> doubleFunctionArgumentCodec(BiFunction<DensityFunction,DensityFunction,O> p_224039_,  Function<O,DensityFunction> p_224040_,  Function<O,DensityFunction> p_224041_)`
- `static <O> KeyDispatchDataCodec<O> makeCodec(com.mojang.serialization.MapCodec<O> p_224029_)`
- `public static DensityFunction interpolated(DensityFunction p_208282_)`
- `public static DensityFunction flatCache(DensityFunction p_208362_)`
- `public static DensityFunction cache2d(DensityFunction p_208374_)`
- `public static DensityFunction cacheOnce(DensityFunction p_208381_)`
- `public static DensityFunction cacheAllInCell(DensityFunction p_208388_)`
- `public static DensityFunction mappedNoise(Holder<NormalNoise.NoiseParameters> p_208337_,  @Deprecated  double p_208338_,  double p_208339_,  double p_208340_,  double p_208341_)`
- `public static DensityFunction mappedNoise(Holder<NormalNoise.NoiseParameters> p_208332_,  double p_208333_,  double p_208334_,  double p_208335_)`
- `public static DensityFunction mappedNoise(Holder<NormalNoise.NoiseParameters> p_208328_,  double p_208329_,  double p_208330_)`
- `public static DensityFunction shiftedNoise2d(DensityFunction p_208297_,  DensityFunction p_208298_,  double p_208299_,  Holder<NormalNoise.NoiseParameters> p_208300_)`
- `public static DensityFunction noise(Holder<NormalNoise.NoiseParameters> p_208323_)`
- `public static DensityFunction noise(Holder<NormalNoise.NoiseParameters> p_208369_,  double p_208370_,  double p_208371_)`
- `public static DensityFunction noise(Holder<NormalNoise.NoiseParameters> p_208325_,  double p_208326_)`
- `public static DensityFunction rangeChoice(DensityFunction p_208288_,  double p_208289_,  double p_208290_,  DensityFunction p_208291_,  DensityFunction p_208292_)`
- `public static DensityFunction shiftA(Holder<NormalNoise.NoiseParameters> p_208367_)`
- `public static DensityFunction shiftB(Holder<NormalNoise.NoiseParameters> p_208379_)`
- `public static DensityFunction shift(Holder<NormalNoise.NoiseParameters> p_208386_)`
- `public static DensityFunction blendDensity(DensityFunction p_208390_)`
- `public static DensityFunction endIslands(long p_208272_)`
- `public static DensityFunction weirdScaledSampler(DensityFunction p_208316_,  Holder<NormalNoise.NoiseParameters> p_208317_,  DensityFunctions.WeirdScaledSampler.RarityValueMapper p_208318_)`
- `public static DensityFunction add(DensityFunction p_208294_,  DensityFunction p_208295_)`
- `public static DensityFunction mul(DensityFunction p_208364_,  DensityFunction p_208365_)`
- `public static DensityFunction min(DensityFunction p_208376_,  DensityFunction p_208377_)`
- `public static DensityFunction max(DensityFunction p_208383_,  DensityFunction p_208384_)`
- `public static DensityFunction spline(CubicSpline<DensityFunctions.Spline.Point,DensityFunctions.Spline.Coordinate> p_224021_)`
- `public static DensityFunction zero()`
- `public static DensityFunction constant(double p_208265_)`
- `public static DensityFunction yClampedGradient(int p_208267_,  int p_208268_,  double p_208269_,  double p_208270_)`
- `public static DensityFunction map(DensityFunction p_208313_,  DensityFunctions.Mapped.Type p_208314_)`
- `private static DensityFunction mapFromUnitTo(DensityFunction p_208284_,  double p_208285_,  double p_208286_)`
- `public static DensityFunction blendAlpha()`
- `public static DensityFunction blendOffset()`
- `public static DensityFunction lerp(DensityFunction p_208302_,  DensityFunction p_208303_,  DensityFunction p_208304_)`
- `public static DensityFunction lerp(DensityFunction p_224031_,  double p_224032_,  DensityFunction p_224033_)`

## DensityFunctions.Ap2

*record* `net.minecraft.world.level.levelgen.DensityFunctions.Ap2`

Enclosing class: DensityFunctions

### Fields
- `private final DensityFunctions.TwoArgumentSimpleFunction.Type type`
  The field for the type record component.
- `private final DensityFunction argument1`
  The field for the argument1 record component.
- `private final DensityFunction argument2`
  The field for the argument2 record component.
- `private final double minValue`
  The field for the minValue record component.
- `private final double maxValue`
  The field for the maxValue record component.

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `CODEC`, `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`
- from `net.minecraft.world.level.levelgen.DensityFunctions.TwoArgumentSimpleFunction`: `LOGGER`

### Methods
- `public double compute(DensityFunction.FunctionContext p_208410_)`
- `public void fillArray(double[] p_208414_,  DensityFunction.ContextProvider p_208415_)`
- `public DensityFunction mapAll(DensityFunction.Visitor p_208412_)`
- `public double minValue()`
  Returns the value of the minValue record component.
  - returns: the value of the minValue record component
- `public double maxValue()`
  Returns the value of the maxValue record component.
  - returns: the value of the maxValue record component
- `public DensityFunctions.TwoArgumentSimpleFunction.Type type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public DensityFunction argument1()`
  Returns the value of the argument1 record component.
  - returns: the value of the argument1 record component
- `public DensityFunction argument2()`
  Returns the value of the argument2 record component.
  - returns: the value of the argument2 record component
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

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunctions.TwoArgumentSimpleFunction`: `codec`

## DensityFunctions.BeardifierOrMarker

*interface* `net.minecraft.world.level.levelgen.DensityFunctions.BeardifierOrMarker`

All Superinterfaces: DensityFunction, DensityFunction.SimpleFunction

Enclosing class: DensityFunctions

### Fields
- `static final KeyDispatchDataCodec<DensityFunction> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `default KeyDispatchDataCodec<? extends DensityFunction> codec()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `compute`, `cube`, `halfNegative`, `maxValue`, `minValue`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunction.SimpleFunction`: `fillArray`, `mapAll`

## DensityFunctions.BlendDensity

*record* `net.minecraft.world.level.levelgen.DensityFunctions.BlendDensity`

Enclosing class: DensityFunctions

### Fields
- `private final DensityFunction input`
  The field for the input record component.
- `static final KeyDispatchDataCodec<DensityFunctions.BlendDensity> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public double transform(DensityFunction.FunctionContext p_208553_,  double p_208554_)`
- `public DensityFunction mapAll(DensityFunction.Visitor p_208556_)`
- `public double minValue()`
- `public double maxValue()`
- `public KeyDispatchDataCodec<? extends DensityFunction> codec()`
- `public DensityFunction input()`
  Returns the value of the input record component.
  - returns: the value of the input record component
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

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunctions.TransformerWithContext`: `compute`, `fillArray`

## DensityFunctions.Clamp

*record* `net.minecraft.world.level.levelgen.DensityFunctions.Clamp`

Enclosing class: DensityFunctions

### Fields
- `private final DensityFunction input`
  The field for the input record component.
- `private final double minValue`
  The field for the minValue record component.
- `private final double maxValue`
  The field for the maxValue record component.
- `private static final com.mojang.serialization.MapCodec<DensityFunctions.Clamp> DATA_CODEC`
- `public static final KeyDispatchDataCodec<DensityFunctions.Clamp> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public double transform(double p_208595_)`
- `public DensityFunction mapAll(DensityFunction.Visitor p_208599_)`
- `public KeyDispatchDataCodec<? extends DensityFunction> codec()`
- `public DensityFunction input()`
  Returns the value of the input record component.
  - returns: the value of the input record component
- `public double minValue()`
  Returns the value of the minValue record component.
  - returns: the value of the minValue record component
- `public double maxValue()`
  Returns the value of the maxValue record component.
  - returns: the value of the maxValue record component
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

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunctions.PureTransformer`: `compute`, `fillArray`

## DensityFunctions.Constant

*record* `net.minecraft.world.level.levelgen.DensityFunctions.Constant`

Enclosing class: DensityFunctions

### Fields
- `private final double value`
  The field for the value record component.
- `static final KeyDispatchDataCodec<DensityFunctions.Constant> CODEC`
- `static final DensityFunctions.Constant ZERO`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public double compute(DensityFunction.FunctionContext p_208615_)`
- `public void fillArray(double[] p_208617_,  DensityFunction.ContextProvider p_208618_)`
- `public double minValue()`
- `public double maxValue()`
- `public KeyDispatchDataCodec<? extends DensityFunction> codec()`
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
- `public double value()`
  Returns the value of the value record component.
  - returns: the value of the value record component

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunction.SimpleFunction`: `mapAll`

## DensityFunctions.EndIslandDensityFunction

*class* `net.minecraft.world.level.levelgen.DensityFunctions.EndIslandDensityFunction`

Enclosing class: DensityFunctions

### Fields
- `public static final KeyDispatchDataCodec<DensityFunctions.EndIslandDensityFunction> CODEC`
- `private static final float ISLAND_THRESHOLD` (= -0.8999999761581421f)
- `private final SimplexNoise islandNoise`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `private static float getHeightValue(SimplexNoise p_224063_,  int p_224064_,  int p_224065_)`
- `public double compute(DensityFunction.FunctionContext p_208633_)`
- `public double minValue()`
- `public double maxValue()`
- `public KeyDispatchDataCodec<? extends DensityFunction> codec()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunction.SimpleFunction`: `fillArray`, `mapAll`

## DensityFunctions.HolderHolder

*record* `net.minecraft.world.level.levelgen.DensityFunctions.HolderHolder`

Enclosing class: DensityFunctions

### Fields
- `private final Holder<DensityFunction> function`
  The field for the function record component.

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `CODEC`, `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public double compute(DensityFunction.FunctionContext p_208641_)`
- `public void fillArray(double[] p_208645_,  DensityFunction.ContextProvider p_208646_)`
- `public DensityFunction mapAll(DensityFunction.Visitor p_208643_)`
- `public double minValue()`
- `public double maxValue()`
- `public KeyDispatchDataCodec<? extends DensityFunction> codec()`
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
- `public Holder<DensityFunction> function()`
  Returns the value of the function record component.
  - returns: the value of the function record component

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`

## DensityFunctions.Mapped

*record* `net.minecraft.world.level.levelgen.DensityFunctions.Mapped`

Enclosing class: DensityFunctions

### Fields
- `private final DensityFunctions.Mapped.Type type`
  The field for the type record component.
- `private final DensityFunction input`
  The field for the input record component.
- `private final double minValue`
  The field for the minValue record component.
- `private final double maxValue`
  The field for the maxValue record component.

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `CODEC`, `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public static DensityFunctions.Mapped create(DensityFunctions.Mapped.Type p_208672_,  DensityFunction p_208673_)`
- `private static double transform(DensityFunctions.Mapped.Type p_208669_,  double p_208670_)`
- `public double transform(double p_208665_)`
- `public DensityFunctions.Mapped mapAll(DensityFunction.Visitor p_208677_)`
- `public KeyDispatchDataCodec<? extends DensityFunction> codec()`
- `public DensityFunction input()`
  Returns the value of the input record component.
  - returns: the value of the input record component
- `public double minValue()`
  Returns the value of the minValue record component.
  - returns: the value of the minValue record component
- `public double maxValue()`
  Returns the value of the maxValue record component.
  - returns: the value of the maxValue record component
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
- `public DensityFunctions.Mapped.Type type()`
  Returns the value of the type record component.
  - returns: the value of the type record component

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunctions.PureTransformer`: `compute`, `fillArray`

## DensityFunctions.Marker

*record* `net.minecraft.world.level.levelgen.DensityFunctions.Marker`

Enclosing class: DensityFunctions

### Fields
- `private final DensityFunctions.Marker.Type type`
  The field for the type record component.
- `private final DensityFunction wrapped`
  The field for the wrapped record component.

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `CODEC`, `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public double compute(DensityFunction.FunctionContext p_208712_)`
- `public void fillArray(double[] p_208716_,  DensityFunction.ContextProvider p_208717_)`
- `public double minValue()`
- `public double maxValue()`
- `public DensityFunctions.Marker.Type type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public DensityFunction wrapped()`
  Returns the value of the wrapped record component.
  - returns: the value of the wrapped record component
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

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunctions.MarkerOrMarked`: `codec`, `mapAll`

## DensityFunctions.MarkerOrMarked

*interface* `net.minecraft.world.level.levelgen.DensityFunctions.MarkerOrMarked`

All Superinterfaces: DensityFunction

Enclosing class: DensityFunctions

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `CODEC`, `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `DensityFunctions.Marker.Type type()`
- `DensityFunction wrapped()`
- `default KeyDispatchDataCodec<? extends DensityFunction> codec()`
- `default DensityFunction mapAll(DensityFunction.Visitor p_224070_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `compute`, `cube`, `fillArray`, `halfNegative`, `maxValue`, `minValue`, `quarterNegative`, `square`, `squeeze`

## DensityFunctions.MulOrAdd

*record* `net.minecraft.world.level.levelgen.DensityFunctions.MulOrAdd`

Enclosing class: DensityFunctions

### Fields
- `private final DensityFunctions.MulOrAdd.Type specificType`
  The field for the specificType record component.
- `private final DensityFunction input`
  The field for the input record component.
- `private final double minValue`
  The field for the minValue record component.
- `private final double maxValue`
  The field for the maxValue record component.
- `private final double argument`
  The field for the argument record component.

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `CODEC`, `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`
- from `net.minecraft.world.level.levelgen.DensityFunctions.TwoArgumentSimpleFunction`: `LOGGER`

### Methods
- `public DensityFunctions.TwoArgumentSimpleFunction.Type type()`
- `public DensityFunction argument1()`
- `public DensityFunction argument2()`
- `public double transform(double p_208759_)`
- `public DensityFunction mapAll(DensityFunction.Visitor p_208761_)`
- `public DensityFunction input()`
  Returns the value of the input record component.
  - returns: the value of the input record component
- `public double minValue()`
  Returns the value of the minValue record component.
  - returns: the value of the minValue record component
- `public double maxValue()`
  Returns the value of the maxValue record component.
  - returns: the value of the maxValue record component
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
- `public DensityFunctions.MulOrAdd.Type specificType()`
  Returns the value of the specificType record component.
  - returns: the value of the specificType record component
- `public double argument()`
  Returns the value of the argument record component.
  - returns: the value of the argument record component

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunctions.PureTransformer`: `compute`, `fillArray`
- from `net.minecraft.world.level.levelgen.DensityFunctions.TwoArgumentSimpleFunction`: `codec`

## DensityFunctions.Noise

*record* `net.minecraft.world.level.levelgen.DensityFunctions.Noise`

Enclosing class: DensityFunctions

### Fields
- `private final DensityFunction.NoiseHolder noise`
  The field for the noise record component.
- `private final double xzScale`
  The field for the xzScale record component.
- `private final double yScale`
  The field for the yScale record component.
- `public static final com.mojang.serialization.MapCodec<DensityFunctions.Noise> DATA_CODEC`
- `public static final KeyDispatchDataCodec<DensityFunctions.Noise> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public double compute(DensityFunction.FunctionContext p_208800_)`
- `public void fillArray(double[] p_224079_,  DensityFunction.ContextProvider p_224080_)`
- `public DensityFunction mapAll(DensityFunction.Visitor p_224077_)`
- `public double minValue()`
- `public double maxValue()`
- `public KeyDispatchDataCodec<? extends DensityFunction> codec()`
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
- `public DensityFunction.NoiseHolder noise()`
  Returns the value of the noise record component.
  - returns: the value of the noise record component
- `public double xzScale()`
  Returns the value of the xzScale record component.
  - returns: the value of the xzScale record component
- `public double yScale()`
  Returns the value of the yScale record component.
  - returns: the value of the yScale record component

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`

## DensityFunctions.PureTransformer

*interface* `net.minecraft.world.level.levelgen.DensityFunctions.PureTransformer`

All Superinterfaces: DensityFunction

Enclosing class: DensityFunctions

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `CODEC`, `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `DensityFunction input()`
- `default double compute(DensityFunction.FunctionContext p_208817_)`
- `default void fillArray(double[] p_208819_,  DensityFunction.ContextProvider p_208820_)`
- `double transform(double p_208815_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `codec`, `cube`, `halfNegative`, `mapAll`, `maxValue`, `minValue`, `quarterNegative`, `square`, `squeeze`

## DensityFunctions.RangeChoice

*record* `net.minecraft.world.level.levelgen.DensityFunctions.RangeChoice`

Enclosing class: DensityFunctions

### Fields
- `private final DensityFunction input`
  The field for the input record component.
- `private final double minInclusive`
  The field for the minInclusive record component.
- `private final double maxExclusive`
  The field for the maxExclusive record component.
- `private final DensityFunction whenInRange`
  The field for the whenInRange record component.
- `private final DensityFunction whenOutOfRange`
  The field for the whenOutOfRange record component.
- `public static final com.mojang.serialization.MapCodec<DensityFunctions.RangeChoice> DATA_CODEC`
- `public static final KeyDispatchDataCodec<DensityFunctions.RangeChoice> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public double compute(DensityFunction.FunctionContext p_208839_)`
- `public void fillArray(double[] p_208843_,  DensityFunction.ContextProvider p_208844_)`
- `public DensityFunction mapAll(DensityFunction.Visitor p_208841_)`
- `public double minValue()`
- `public double maxValue()`
- `public KeyDispatchDataCodec<? extends DensityFunction> codec()`
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
- `public DensityFunction input()`
  Returns the value of the input record component.
  - returns: the value of the input record component
- `public double minInclusive()`
  Returns the value of the minInclusive record component.
  - returns: the value of the minInclusive record component
- `public double maxExclusive()`
  Returns the value of the maxExclusive record component.
  - returns: the value of the maxExclusive record component
- `public DensityFunction whenInRange()`
  Returns the value of the whenInRange record component.
  - returns: the value of the whenInRange record component
- `public DensityFunction whenOutOfRange()`
  Returns the value of the whenOutOfRange record component.
  - returns: the value of the whenOutOfRange record component

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`

## DensityFunctions.Shift

*record* `net.minecraft.world.level.levelgen.DensityFunctions.Shift`

Enclosing class: DensityFunctions

### Fields
- `private final DensityFunction.NoiseHolder offsetNoise`
  The field for the offsetNoise record component.
- `static final KeyDispatchDataCodec<DensityFunctions.Shift> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public double compute(DensityFunction.FunctionContext p_208864_)`
- `public DensityFunction mapAll(DensityFunction.Visitor p_224087_)`
- `public KeyDispatchDataCodec<? extends DensityFunction> codec()`
- `public DensityFunction.NoiseHolder offsetNoise()`
  Returns the value of the offsetNoise record component.
  - returns: the value of the offsetNoise record component
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

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunctions.ShiftNoise`: `compute`, `fillArray`, `maxValue`, `minValue`

## DensityFunctions.ShiftA

*record* `net.minecraft.world.level.levelgen.DensityFunctions.ShiftA`

Enclosing class: DensityFunctions

### Fields
- `private final DensityFunction.NoiseHolder offsetNoise`
  The field for the offsetNoise record component.
- `static final KeyDispatchDataCodec<DensityFunctions.ShiftA> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public double compute(DensityFunction.FunctionContext p_208884_)`
- `public DensityFunction mapAll(DensityFunction.Visitor p_224093_)`
- `public KeyDispatchDataCodec<? extends DensityFunction> codec()`
- `public DensityFunction.NoiseHolder offsetNoise()`
  Returns the value of the offsetNoise record component.
  - returns: the value of the offsetNoise record component
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

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunctions.ShiftNoise`: `compute`, `fillArray`, `maxValue`, `minValue`

## DensityFunctions.ShiftB

*record* `net.minecraft.world.level.levelgen.DensityFunctions.ShiftB`

Enclosing class: DensityFunctions

### Fields
- `private final DensityFunction.NoiseHolder offsetNoise`
  The field for the offsetNoise record component.
- `static final KeyDispatchDataCodec<DensityFunctions.ShiftB> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public double compute(DensityFunction.FunctionContext p_208904_)`
- `public DensityFunction mapAll(DensityFunction.Visitor p_224099_)`
- `public KeyDispatchDataCodec<? extends DensityFunction> codec()`
- `public DensityFunction.NoiseHolder offsetNoise()`
  Returns the value of the offsetNoise record component.
  - returns: the value of the offsetNoise record component
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

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunctions.ShiftNoise`: `compute`, `fillArray`, `maxValue`, `minValue`

## DensityFunctions.ShiftedNoise

*record* `net.minecraft.world.level.levelgen.DensityFunctions.ShiftedNoise`

Enclosing class: DensityFunctions

### Fields
- `private final DensityFunction shiftX`
  The field for the shiftX record component.
- `private final DensityFunction shiftY`
  The field for the shiftY record component.
- `private final DensityFunction shiftZ`
  The field for the shiftZ record component.
- `private final double xzScale`
  The field for the xzScale record component.
- `private final double yScale`
  The field for the yScale record component.
- `private final DensityFunction.NoiseHolder noise`
  The field for the noise record component.
- `private static final com.mojang.serialization.MapCodec<DensityFunctions.ShiftedNoise> DATA_CODEC`
- `public static final KeyDispatchDataCodec<DensityFunctions.ShiftedNoise> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public double compute(DensityFunction.FunctionContext p_208945_)`
- `public void fillArray(double[] p_208956_,  DensityFunction.ContextProvider p_208957_)`
- `public DensityFunction mapAll(DensityFunction.Visitor p_208947_)`
- `public double minValue()`
- `public double maxValue()`
- `public KeyDispatchDataCodec<? extends DensityFunction> codec()`
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
- `public DensityFunction shiftX()`
  Returns the value of the shiftX record component.
  - returns: the value of the shiftX record component
- `public DensityFunction shiftY()`
  Returns the value of the shiftY record component.
  - returns: the value of the shiftY record component
- `public DensityFunction shiftZ()`
  Returns the value of the shiftZ record component.
  - returns: the value of the shiftZ record component
- `public double xzScale()`
  Returns the value of the xzScale record component.
  - returns: the value of the xzScale record component
- `public double yScale()`
  Returns the value of the yScale record component.
  - returns: the value of the yScale record component
- `public DensityFunction.NoiseHolder noise()`
  Returns the value of the noise record component.
  - returns: the value of the noise record component

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`

## DensityFunctions.ShiftNoise

*interface* `net.minecraft.world.level.levelgen.DensityFunctions.ShiftNoise`

All Superinterfaces: DensityFunction

Enclosing class: DensityFunctions

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `CODEC`, `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `DensityFunction.NoiseHolder offsetNoise()`
- `default double minValue()`
- `default double maxValue()`
- `default double compute(double p_208918_,  double p_208919_,  double p_208920_)`
- `default void fillArray(double[] p_224103_,  DensityFunction.ContextProvider p_224104_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `codec`, `compute`, `cube`, `halfNegative`, `mapAll`, `quarterNegative`, `square`, `squeeze`

## DensityFunctions.Spline

*record* `net.minecraft.world.level.levelgen.DensityFunctions.Spline`

Enclosing class: DensityFunctions

### Fields
- `private final CubicSpline<DensityFunctions.Spline.Point,DensityFunctions.Spline.Coordinate> spline`
  The field for the spline record component.
- `private static final com.mojang.serialization.Codec<CubicSpline<DensityFunctions.Spline.Point,DensityFunctions.Spline.Coordinate>> SPLINE_CODEC`
- `private static final com.mojang.serialization.MapCodec<DensityFunctions.Spline> DATA_CODEC`
- `public static final KeyDispatchDataCodec<DensityFunctions.Spline> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public double compute(DensityFunction.FunctionContext p_211715_)`
- `public double minValue()`
- `public double maxValue()`
- `public void fillArray(double[] p_211722_,  DensityFunction.ContextProvider p_211723_)`
- `public DensityFunction mapAll(DensityFunction.Visitor p_211717_)`
- `public KeyDispatchDataCodec<? extends DensityFunction> codec()`
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
- `public CubicSpline<DensityFunctions.Spline.Point,DensityFunctions.Spline.Coordinate> spline()`
  Returns the value of the spline record component.
  - returns: the value of the spline record component

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`

## DensityFunctions.Spline.Coordinate

*record* `net.minecraft.world.level.levelgen.DensityFunctions.Spline.Coordinate`

Enclosing class: DensityFunctions.Spline

### Fields
- `private final Holder<DensityFunction> function`
  The field for the function record component.
- `public static final com.mojang.serialization.Codec<DensityFunctions.Spline.Coordinate> CODEC`

### Inherited fields
- from `net.minecraft.util.ToFloatFunction`: `IDENTITY`

### Methods
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public float apply(DensityFunctions.Spline.Point p_224130_)`
- `public float minValue()`
- `public float maxValue()`
- `public DensityFunctions.Spline.Coordinate mapAll(DensityFunction.Visitor p_224128_)`
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public Holder<DensityFunction> function()`
  Returns the value of the function record component.
  - returns: the value of the function record component

### Inherited methods
- from `net.minecraft.util.ToFloatFunction`: `comap`

## DensityFunctions.Spline.Point

*record* `net.minecraft.world.level.levelgen.DensityFunctions.Spline.Point`

Enclosing class: DensityFunctions.Spline

### Fields
- `private final DensityFunction.FunctionContext context`
  The field for the context record component.

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
- `public DensityFunction.FunctionContext context()`
  Returns the value of the context record component.
  - returns: the value of the context record component

## DensityFunctions.TransformerWithContext

*interface* `net.minecraft.world.level.levelgen.DensityFunctions.TransformerWithContext`

All Superinterfaces: DensityFunction

Enclosing class: DensityFunctions

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `CODEC`, `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `DensityFunction input()`
- `default double compute(DensityFunction.FunctionContext p_209065_)`
- `default void fillArray(double[] p_209069_,  DensityFunction.ContextProvider p_209070_)`
- `double transform(DensityFunction.FunctionContext p_209066_,  double p_209067_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `codec`, `cube`, `halfNegative`, `mapAll`, `maxValue`, `minValue`, `quarterNegative`, `square`, `squeeze`

## DensityFunctions.TwoArgumentSimpleFunction

*interface* `net.minecraft.world.level.levelgen.DensityFunctions.TwoArgumentSimpleFunction`

All Superinterfaces: DensityFunction

Enclosing class: DensityFunctions

### Fields
- `static final org.slf4j.Logger LOGGER`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `CODEC`, `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `static DensityFunctions.TwoArgumentSimpleFunction create(DensityFunctions.TwoArgumentSimpleFunction.Type p_209074_,  DensityFunction p_209075_,  DensityFunction p_209076_)`
- `DensityFunctions.TwoArgumentSimpleFunction.Type type()`
- `DensityFunction argument1()`
- `DensityFunction argument2()`
- `default KeyDispatchDataCodec<? extends DensityFunction> codec()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `compute`, `cube`, `fillArray`, `halfNegative`, `mapAll`, `maxValue`, `minValue`, `quarterNegative`, `square`, `squeeze`

## DensityFunctions.WeirdScaledSampler

*record* `net.minecraft.world.level.levelgen.DensityFunctions.WeirdScaledSampler`

Enclosing class: DensityFunctions

### Fields
- `private final DensityFunction input`
  The field for the input record component.
- `private final DensityFunction.NoiseHolder noise`
  The field for the noise record component.
- `private final DensityFunctions.WeirdScaledSampler.RarityValueMapper rarityValueMapper`
  The field for the rarityValueMapper record component.
- `private static final com.mojang.serialization.MapCodec<DensityFunctions.WeirdScaledSampler> DATA_CODEC`
- `public static final KeyDispatchDataCodec<DensityFunctions.WeirdScaledSampler> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public double transform(DensityFunction.FunctionContext p_208440_,  double p_208441_)`
- `public DensityFunction mapAll(DensityFunction.Visitor p_208443_)`
- `public double minValue()`
- `public double maxValue()`
- `public KeyDispatchDataCodec<? extends DensityFunction> codec()`
- `public DensityFunction input()`
  Returns the value of the input record component.
  - returns: the value of the input record component
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
- `public DensityFunction.NoiseHolder noise()`
  Returns the value of the noise record component.
  - returns: the value of the noise record component
- `public DensityFunctions.WeirdScaledSampler.RarityValueMapper rarityValueMapper()`
  Returns the value of the rarityValueMapper record component.
  - returns: the value of the rarityValueMapper record component

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunctions.TransformerWithContext`: `compute`, `fillArray`

## DensityFunctions.YClampedGradient

*record* `net.minecraft.world.level.levelgen.DensityFunctions.YClampedGradient`

Enclosing class: DensityFunctions

### Fields
- `private final int fromY`
  The field for the fromY record component.
- `private final int toY`
  The field for the toY record component.
- `private final double fromValue`
  The field for the fromValue record component.
- `private final double toValue`
  The field for the toValue record component.
- `private static final com.mojang.serialization.MapCodec<DensityFunctions.YClampedGradient> DATA_CODEC`
- `public static final KeyDispatchDataCodec<DensityFunctions.YClampedGradient> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public double compute(DensityFunction.FunctionContext p_208496_)`
- `public double minValue()`
- `public double maxValue()`
- `public KeyDispatchDataCodec<? extends DensityFunction> codec()`
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
- `public int fromY()`
  Returns the value of the fromY record component.
  - returns: the value of the fromY record component
- `public int toY()`
  Returns the value of the toY record component.
  - returns: the value of the toY record component
- `public double fromValue()`
  Returns the value of the fromValue record component.
  - returns: the value of the fromValue record component
- `public double toValue()`
  Returns the value of the toValue record component.
  - returns: the value of the toValue record component

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunction.SimpleFunction`: `fillArray`, `mapAll`

## FlatLevelSource

*class* `net.minecraft.world.level.levelgen.FlatLevelSource`

### Fields
- `public static final com.mojang.serialization.Codec<FlatLevelSource> CODEC`
- `private final FlatLevelGeneratorSettings settings`

### Inherited fields
- from `net.minecraft.world.level.chunk.ChunkGenerator`: `biomeSource`

### Methods
- `public ChunkGeneratorStructureState createState(HolderLookup<StructureSet> p_256602_,  RandomState p_255830_,  long p_256355_)`
- `protected com.mojang.serialization.Codec<? extends ChunkGenerator> codec()`
- `public FlatLevelGeneratorSettings settings()`
- `public void buildSurface(WorldGenRegion p_224174_,  StructureManager p_224175_,  RandomState p_224176_,  ChunkAccess p_224177_)`
- `public int getSpawnHeight(LevelHeightAccessor p_158279_)`
- `public CompletableFuture<ChunkAccess> fillFromNoise(Executor p_224183_,  Blender p_224184_,  RandomState p_224185_,  StructureManager p_224186_,  ChunkAccess p_224187_)`
- `public int getBaseHeight(int p_224160_,  int p_224161_,  Heightmap.Types p_224162_,  LevelHeightAccessor p_224163_,  RandomState p_224164_)`
- `public NoiseColumn getBaseColumn(int p_224155_,  int p_224156_,  LevelHeightAccessor p_224157_,  RandomState p_224158_)`
- `public void addDebugScreenInfo(List<String> p_224179_,  RandomState p_224180_,  BlockPos p_224181_)`
- `public void applyCarvers(WorldGenRegion p_224166_,  long p_224167_,  RandomState p_224168_,  BiomeManager p_224169_,  StructureManager p_224170_,  ChunkAccess p_224171_,  GenerationStep.Carving p_224172_)`
- `public void spawnOriginalMobs(WorldGenRegion p_188545_)`
- `public int getMinY()`
- `public int getGenDepth()`
- `public int getSeaLevel()`

### Inherited methods
- from `net.minecraft.world.level.chunk.ChunkGenerator`: `applyBiomeDecoration`, `createBiomes`, `createReferences`, `createStructures`, `findNearestMapStructure`, `getBiomeGenerationSettings`, `getBiomeSource`, `getFirstFreeHeight`, `getFirstOccupiedHeight`, `getMobsAt`, `getTypeNameForDataFixer`

## GenerationStep

*class* `net.minecraft.world.level.levelgen.GenerationStep`

## GeodeBlockSettings

*class* `net.minecraft.world.level.levelgen.GeodeBlockSettings`

### Fields
- `public final BlockStateProvider fillingProvider`
- `public final BlockStateProvider innerLayerProvider`
- `public final BlockStateProvider alternateInnerLayerProvider`
- `public final BlockStateProvider middleLayerProvider`
- `public final BlockStateProvider outerLayerProvider`
- `public final List<BlockState> innerPlacements`
- `public final TagKey<Block> cannotReplace`
- `public final TagKey<Block> invalidBlocks`
- `public static final com.mojang.serialization.Codec<GeodeBlockSettings> CODEC`

## GeodeCrackSettings

*class* `net.minecraft.world.level.levelgen.GeodeCrackSettings`

### Fields
- `public static final com.mojang.serialization.Codec<GeodeCrackSettings> CODEC`
- `public final double generateCrackChance`
- `public final double baseCrackSize`
- `public final int crackPointOffset`

## GeodeLayerSettings

*class* `net.minecraft.world.level.levelgen.GeodeLayerSettings`

### Fields
- `private static final com.mojang.serialization.Codec<Double> LAYER_RANGE`
- `public static final com.mojang.serialization.Codec<GeodeLayerSettings> CODEC`
- `public final double filling`
- `public final double innerLayer`
- `public final double middleLayer`
- `public final double outerLayer`

## Heightmap

*class* `net.minecraft.world.level.levelgen.Heightmap`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `static final Predicate<BlockState> NOT_AIR`
- `static final Predicate<BlockState> MATERIAL_MOTION_BLOCKING`
- `private final BitStorage data`
- `private final Predicate<BlockState> isOpaque`
- `private final ChunkAccess chunk`

### Methods
- `public static void primeHeightmaps(ChunkAccess p_64257_,  Set<Heightmap.Types> p_64258_)`
- `public boolean update(int p_64250_,  int p_64251_,  int p_64252_,  BlockState p_64253_)`
- `public int getFirstAvailable(int p_64243_,  int p_64244_)`
- `public int getHighestTaken(int p_158369_,  int p_158370_)`
- `private int getFirstAvailable(int p_64241_)`
- `private void setHeight(int p_64246_,  int p_64247_,  int p_64248_)`
- `public void setRawData(ChunkAccess p_158365_,  Heightmap.Types p_158366_,  long[] p_158367_)`
- `public long[] getRawData()`
- `private static int getIndex(int p_64266_,  int p_64267_)`

## LegacyRandomSource

*class* `net.minecraft.world.level.levelgen.LegacyRandomSource`

### Fields
- `private static final int MODULUS_BITS` (= 48)
- `private static final long MODULUS_MASK` (= 281474976710655L)
- `private static final long MULTIPLIER` (= 25214903917L)
- `private static final long INCREMENT` (= 11L)
- `private final AtomicLong seed`
- `private final MarsagliaPolarGaussian gaussianSource`

### Inherited fields
- from `net.minecraft.world.level.levelgen.BitRandomSource`: `DOUBLE_MULTIPLIER`, `FLOAT_MULTIPLIER`
- from `net.minecraft.util.RandomSource`: `GAUSSIAN_SPREAD_FACTOR`

### Methods
- `public RandomSource fork()`
- `public PositionalRandomFactory forkPositional()`
- `public void setSeed(long p_188585_)`
- `public int next(int p_188581_)`
- `public double nextGaussian()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.BitRandomSource`: `nextBoolean`, `nextDouble`, `nextFloat`, `nextInt`, `nextInt`, `nextLong`
- from `net.minecraft.util.RandomSource`: `consumeCount`, `nextInt`, `nextIntBetweenInclusive`, `triangle`

## LegacyRandomSource.LegacyPositionalRandomFactory

*class* `net.minecraft.world.level.levelgen.LegacyRandomSource.LegacyPositionalRandomFactory`

Enclosing class: LegacyRandomSource

### Fields
- `private final long seed`

### Methods
- `public RandomSource at(int p_224198_,  int p_224199_,  int p_224200_)`
- `public RandomSource fromHashOf(String p_224202_)`
- `public void parityConfigString(StringBuilder p_188596_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.PositionalRandomFactory`: `at`, `fromHashOf`

## MarsagliaPolarGaussian

*class* `net.minecraft.world.level.levelgen.MarsagliaPolarGaussian`

### Fields
- `public final RandomSource randomSource`
- `private double nextNextGaussian`
- `private boolean haveNextNextGaussian`

### Methods
- `public void reset()`
- `public double nextGaussian()`

## NoiseBasedChunkGenerator

*class* `net.minecraft.world.level.levelgen.NoiseBasedChunkGenerator`

### Fields
- `public static final com.mojang.serialization.Codec<NoiseBasedChunkGenerator> CODEC`
- `private static final BlockState AIR`
- `private final Holder<NoiseGeneratorSettings> settings`
- `private final Supplier<Aquifer.FluidPicker> globalFluidPicker`

### Inherited fields
- from `net.minecraft.world.level.chunk.ChunkGenerator`: `biomeSource`

### Methods
- `private static Aquifer.FluidPicker createFluidPicker(NoiseGeneratorSettings p_249264_)`
- `public CompletableFuture<ChunkAccess> createBiomes(Executor p_224298_,  RandomState p_224299_,  Blender p_224300_,  StructureManager p_224301_,  ChunkAccess p_224302_)`
- `private void doCreateBiomes(Blender p_224292_,  RandomState p_224293_,  StructureManager p_224294_,  ChunkAccess p_224295_)`
- `private NoiseChunk createNoiseChunk(ChunkAccess p_224257_,  StructureManager p_224258_,  Blender p_224259_,  RandomState p_224260_)`
- `protected com.mojang.serialization.Codec<? extends ChunkGenerator> codec()`
- `public Holder<NoiseGeneratorSettings> generatorSettings()`
- `public boolean stable(ResourceKey<NoiseGeneratorSettings> p_224222_)`
- `public int getBaseHeight(int p_224216_,  int p_224217_,  Heightmap.Types p_224218_,  LevelHeightAccessor p_224219_,  RandomState p_224220_)`
- `public NoiseColumn getBaseColumn(int p_224211_,  int p_224212_,  LevelHeightAccessor p_224213_,  RandomState p_224214_)`
- `public void addDebugScreenInfo(List<String> p_224304_,  RandomState p_224305_,  BlockPos p_224306_)`
- `protected OptionalInt iterateNoiseColumn(LevelHeightAccessor p_224240_,  RandomState p_224241_,  int p_224242_,  int p_224243_,  @Nullable  org.apache.commons.lang3.mutable.MutableObject<NoiseColumn> p_224244_,  @Nullable  Predicate<BlockState> p_224245_)`
- `public void buildSurface(WorldGenRegion p_224232_,  StructureManager p_224233_,  RandomState p_224234_,  ChunkAccess p_224235_)`
- `public void buildSurface(ChunkAccess p_224262_,  WorldGenerationContext p_224263_,  RandomState p_224264_,  StructureManager p_224265_,  BiomeManager p_224266_,  Registry<Biome> p_224267_,  Blender p_224268_)`
- `public void applyCarvers(WorldGenRegion p_224224_,  long p_224225_,  RandomState p_224226_,  BiomeManager p_224227_,  StructureManager p_224228_,  ChunkAccess p_224229_,  GenerationStep.Carving p_224230_)`
- `public CompletableFuture<ChunkAccess> fillFromNoise(Executor p_224312_,  Blender p_224313_,  RandomState p_224314_,  StructureManager p_224315_,  ChunkAccess p_224316_)`
- `private ChunkAccess doFill(Blender p_224285_,  StructureManager p_224286_,  RandomState p_224287_,  ChunkAccess p_224288_,  int p_224289_,  int p_224290_)`
- `private BlockState debugPreliminarySurfaceLevel(NoiseChunk p_198232_,  int p_198233_,  int p_198234_,  int p_198235_,  BlockState p_198236_)`
- `public int getGenDepth()`
- `public int getSeaLevel()`
- `public int getMinY()`
- `public void spawnOriginalMobs(WorldGenRegion p_64379_)`

### Inherited methods
- from `net.minecraft.world.level.chunk.ChunkGenerator`: `applyBiomeDecoration`, `createReferences`, `createState`, `createStructures`, `findNearestMapStructure`, `getBiomeGenerationSettings`, `getBiomeSource`, `getFirstFreeHeight`, `getFirstOccupiedHeight`, `getMobsAt`, `getSpawnHeight`, `getTypeNameForDataFixer`

## NoiseChunk

*class* `net.minecraft.world.level.levelgen.NoiseChunk`

### Fields
- `private final NoiseSettings noiseSettings`
- `final int cellCountXZ`
- `final int cellCountY`
- `final int cellNoiseMinY`
- `private final int firstCellX`
- `private final int firstCellZ`
- `final int firstNoiseX`
- `final int firstNoiseZ`
- `final List<NoiseChunk.NoiseInterpolator> interpolators`
- `final List<NoiseChunk.CacheAllInCell> cellCaches`
- `private final Map<DensityFunction,DensityFunction> wrapped`
- `private final it.unimi.dsi.fastutil.longs.Long2IntMap preliminarySurfaceLevel`
- `private final Aquifer aquifer`
- `private final DensityFunction initialDensityNoJaggedness`
- `private final NoiseChunk.BlockStateFiller blockStateRule`
- `private final Blender blender`
- `private final NoiseChunk.FlatCache blendAlpha`
- `private final NoiseChunk.FlatCache blendOffset`
- `private final DensityFunctions.BeardifierOrMarker beardifier`
- `private long lastBlendingDataPos`
- `private Blender.BlendingOutput lastBlendingOutput`
- `final int noiseSizeXZ`
- `final int cellWidth`
- `final int cellHeight`
- `boolean interpolating`
- `boolean fillingCell`
- `private int cellStartBlockX`
- `int cellStartBlockY`
- `private int cellStartBlockZ`
- `int inCellX`
- `int inCellY`
- `int inCellZ`
- `long interpolationCounter`
- `long arrayInterpolationCounter`
- `int arrayIndex`
- `private final DensityFunction.ContextProvider sliceFillingContextProvider`

### Methods
- `public static NoiseChunk forChunk(ChunkAccess p_224353_,  RandomState p_224354_,  DensityFunctions.BeardifierOrMarker p_224355_,  NoiseGeneratorSettings p_224356_,  Aquifer.FluidPicker p_224357_,  Blender p_224358_)`
- `protected Climate.Sampler cachedClimateSampler(NoiseRouter p_224360_,  List<Climate.ParameterPoint> p_224361_)`
- `@Nullable protected BlockState getInterpolatedState()`
- `public int blockX()`
- `public int blockY()`
- `public int blockZ()`
- `public int preliminarySurfaceLevel(int p_198257_,  int p_198258_)`
- `private int computePreliminarySurfaceLevel(long p_198250_)`
- `public Blender getBlender()`
- `private void fillSlice(boolean p_209221_,  int p_209222_)`
- `public void initializeForFirstCellX()`
- `public void advanceCellX(int p_188750_)`
- `public NoiseChunk forIndex(int p_209240_)`
- `public void fillAllDirectly(double[] p_209224_,  DensityFunction p_209225_)`
- `public void selectCellYZ(int p_188811_,  int p_188812_)`
- `public void updateForY(int p_209192_,  double p_209193_)`
- `public void updateForX(int p_209231_,  double p_209232_)`
- `public void updateForZ(int p_209242_,  double p_209243_)`
- `public void stopInterpolation()`
- `public void swapSlices()`
- `public Aquifer aquifer()`
- `protected int cellWidth()`
- `protected int cellHeight()`
- `Blender.BlendingOutput getOrComputeBlendingOutput(int p_209245_,  int p_209246_)`
- `protected DensityFunction wrap(DensityFunction p_209214_)`
- `private DensityFunction wrapNew(DensityFunction p_209234_)`

## NoiseChunk.BlendAlpha

*class* `net.minecraft.world.level.levelgen.NoiseChunk.BlendAlpha`

Enclosing class: NoiseChunk

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `CODEC`, `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public DensityFunction wrapped()`
- `public DensityFunction mapAll(DensityFunction.Visitor p_224365_)`
- `public double compute(DensityFunction.FunctionContext p_209264_)`
- `public void fillArray(double[] p_209266_,  DensityFunction.ContextProvider p_209267_)`
- `public double minValue()`
- `public double maxValue()`
- `public KeyDispatchDataCodec<? extends DensityFunction> codec()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`

## NoiseChunk.BlendOffset

*class* `net.minecraft.world.level.levelgen.NoiseChunk.BlendOffset`

Enclosing class: NoiseChunk

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `CODEC`, `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public DensityFunction wrapped()`
- `public DensityFunction mapAll(DensityFunction.Visitor p_224368_)`
- `public double compute(DensityFunction.FunctionContext p_209276_)`
- `public void fillArray(double[] p_209278_,  DensityFunction.ContextProvider p_209279_)`
- `public double minValue()`
- `public double maxValue()`
- `public KeyDispatchDataCodec<? extends DensityFunction> codec()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`

## NoiseChunk.BlockStateFiller

*interface* `net.minecraft.world.level.levelgen.NoiseChunk.BlockStateFiller`

Enclosing class: NoiseChunk

### Methods
- `@Nullable BlockState calculate(DensityFunction.FunctionContext p_209283_)`

## NoiseChunk.Cache2D

*class* `net.minecraft.world.level.levelgen.NoiseChunk.Cache2D`

Enclosing class: NoiseChunk

### Fields
- `private final DensityFunction function`
- `private long lastPos2D`
- `private double lastValue`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `CODEC`, `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public double compute(DensityFunction.FunctionContext p_209290_)`
- `public void fillArray(double[] p_209292_,  DensityFunction.ContextProvider p_209293_)`
- `public DensityFunction wrapped()`
- `public DensityFunctions.Marker.Type type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunctions.MarkerOrMarked`: `codec`, `mapAll`
- from `net.minecraft.world.level.levelgen.NoiseChunk.NoiseChunkDensityFunction`: `maxValue`, `minValue`

## NoiseChunk.CacheAllInCell

*class* `net.minecraft.world.level.levelgen.NoiseChunk.CacheAllInCell`

Enclosing class: NoiseChunk

### Fields
- `final DensityFunction noiseFiller`
- `final double[] values`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `CODEC`, `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public double compute(DensityFunction.FunctionContext p_209303_)`
- `public void fillArray(double[] p_209305_,  DensityFunction.ContextProvider p_209306_)`
- `public DensityFunction wrapped()`
- `public DensityFunctions.Marker.Type type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunctions.MarkerOrMarked`: `codec`, `mapAll`
- from `net.minecraft.world.level.levelgen.NoiseChunk.NoiseChunkDensityFunction`: `maxValue`, `minValue`

## NoiseChunk.CacheOnce

*class* `net.minecraft.world.level.levelgen.NoiseChunk.CacheOnce`

Enclosing class: NoiseChunk

### Fields
- `private final DensityFunction function`
- `private long lastCounter`
- `private long lastArrayCounter`
- `private double lastValue`
- `@Nullable private double[] lastArray`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `CODEC`, `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public double compute(DensityFunction.FunctionContext p_209319_)`
- `public void fillArray(double[] p_209321_,  DensityFunction.ContextProvider p_209322_)`
- `public DensityFunction wrapped()`
- `public DensityFunctions.Marker.Type type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunctions.MarkerOrMarked`: `codec`, `mapAll`
- from `net.minecraft.world.level.levelgen.NoiseChunk.NoiseChunkDensityFunction`: `maxValue`, `minValue`

## NoiseChunk.FlatCache

*class* `net.minecraft.world.level.levelgen.NoiseChunk.FlatCache`

Enclosing class: NoiseChunk

### Fields
- `private final DensityFunction noiseFiller`
- `final double[][] values`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `CODEC`, `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public double compute(DensityFunction.FunctionContext p_209333_)`
- `public void fillArray(double[] p_209335_,  DensityFunction.ContextProvider p_209336_)`
- `public DensityFunction wrapped()`
- `public DensityFunctions.Marker.Type type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunctions.MarkerOrMarked`: `codec`, `mapAll`
- from `net.minecraft.world.level.levelgen.NoiseChunk.NoiseChunkDensityFunction`: `maxValue`, `minValue`

## NoiseChunk.NoiseChunkDensityFunction

*interface* `net.minecraft.world.level.levelgen.NoiseChunk.NoiseChunkDensityFunction`

All Superinterfaces: DensityFunction

Enclosing class: NoiseChunk

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `CODEC`, `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `DensityFunction wrapped()`
- `default double minValue()`
- `default double maxValue()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `codec`, `compute`, `cube`, `fillArray`, `halfNegative`, `mapAll`, `quarterNegative`, `square`, `squeeze`

## NoiseChunk.NoiseInterpolator

*class* `net.minecraft.world.level.levelgen.NoiseChunk.NoiseInterpolator`

Enclosing class: NoiseChunk

### Fields
- `double[][] slice0`
- `double[][] slice1`
- `private final DensityFunction noiseFiller`
- `private double noise000`
- `private double noise001`
- `private double noise100`
- `private double noise101`
- `private double noise010`
- `private double noise011`
- `private double noise110`
- `private double noise111`
- `private double valueXZ00`
- `private double valueXZ10`
- `private double valueXZ01`
- `private double valueXZ11`
- `private double valueZ0`
- `private double valueZ1`
- `private double value`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `CODEC`, `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `private double[][] allocateSlice(int p_188855_,  int p_188856_)`
- `void selectCellYZ(int p_188864_,  int p_188865_)`
- `void updateForY(double p_188851_)`
- `void updateForX(double p_188862_)`
- `void updateForZ(double p_188867_)`
- `public double compute(DensityFunction.FunctionContext p_209347_)`
- `public void fillArray(double[] p_209349_,  DensityFunction.ContextProvider p_209350_)`
- `public DensityFunction wrapped()`
- `private void swapSlices()`
- `public DensityFunctions.Marker.Type type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunctions.MarkerOrMarked`: `codec`, `mapAll`
- from `net.minecraft.world.level.levelgen.NoiseChunk.NoiseChunkDensityFunction`: `maxValue`, `minValue`

## NoiseGeneratorSettings

*record* `net.minecraft.world.level.levelgen.NoiseGeneratorSettings`

### Fields
- `private final NoiseSettings noiseSettings`
  The field for the noiseSettings record component.
- `private final BlockState defaultBlock`
  The field for the defaultBlock record component.
- `private final BlockState defaultFluid`
  The field for the defaultFluid record component.
- `private final NoiseRouter noiseRouter`
  The field for the noiseRouter record component.
- `private final SurfaceRules.RuleSource surfaceRule`
  The field for the surfaceRule record component.
- `private final List<Climate.ParameterPoint> spawnTarget`
  The field for the spawnTarget record component.
- `private final int seaLevel`
  The field for the seaLevel record component.
- `private final boolean disableMobGeneration`
  The field for the disableMobGeneration record component.
- `private final boolean aquifersEnabled`
  The field for the aquifersEnabled record component.
- `private final boolean oreVeinsEnabled`
  The field for the oreVeinsEnabled record component.
- `private final boolean useLegacyRandomSource`
  The field for the useLegacyRandomSource record component.
- `public static final com.mojang.serialization.Codec<NoiseGeneratorSettings> DIRECT_CODEC`
- `public static final com.mojang.serialization.Codec<Holder<NoiseGeneratorSettings>> CODEC`
- `public static final ResourceKey<NoiseGeneratorSettings> OVERWORLD`
- `public static final ResourceKey<NoiseGeneratorSettings> LARGE_BIOMES`
- `public static final ResourceKey<NoiseGeneratorSettings> AMPLIFIED`
- `public static final ResourceKey<NoiseGeneratorSettings> NETHER`
- `public static final ResourceKey<NoiseGeneratorSettings> END`
- `public static final ResourceKey<NoiseGeneratorSettings> CAVES`
- `public static final ResourceKey<NoiseGeneratorSettings> FLOATING_ISLANDS`

### Methods
- `public boolean isAquifersEnabled()`
- `public boolean oreVeinsEnabled()`
  Returns the value of the oreVeinsEnabled record component.
  - returns: the value of the oreVeinsEnabled record component
- `public WorldgenRandom.Algorithm getRandomSource()`
- `public static void bootstrap(BootstapContext<NoiseGeneratorSettings> p_256365_)`
- `public static NoiseGeneratorSettings end(BootstapContext<?> p_256478_)`
- `public static NoiseGeneratorSettings nether(BootstapContext<?> p_256180_)`
- `public static NoiseGeneratorSettings overworld(BootstapContext<?> p_256460_,  boolean p_256427_,  boolean p_256318_)`
- `public static NoiseGeneratorSettings caves(BootstapContext<?> p_255690_)`
- `public static NoiseGeneratorSettings floatingIslands(BootstapContext<?> p_255885_)`
- `public static NoiseGeneratorSettings dummy()`
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
- `public NoiseSettings noiseSettings()`
  Returns the value of the noiseSettings record component.
  - returns: the value of the noiseSettings record component
- `public BlockState defaultBlock()`
  Returns the value of the defaultBlock record component.
  - returns: the value of the defaultBlock record component
- `public BlockState defaultFluid()`
  Returns the value of the defaultFluid record component.
  - returns: the value of the defaultFluid record component
- `public NoiseRouter noiseRouter()`
  Returns the value of the noiseRouter record component.
  - returns: the value of the noiseRouter record component
- `public SurfaceRules.RuleSource surfaceRule()`
  Returns the value of the surfaceRule record component.
  - returns: the value of the surfaceRule record component
- `public List<Climate.ParameterPoint> spawnTarget()`
  Returns the value of the spawnTarget record component.
  - returns: the value of the spawnTarget record component
- `public int seaLevel()`
  Returns the value of the seaLevel record component.
  - returns: the value of the seaLevel record component
- `public boolean disableMobGeneration()`
  Returns the value of the disableMobGeneration record component.
  - returns: the value of the disableMobGeneration record component
- `public boolean aquifersEnabled()`
  Returns the value of the aquifersEnabled record component.
  - returns: the value of the aquifersEnabled record component
- `public boolean useLegacyRandomSource()`
  Returns the value of the useLegacyRandomSource record component.
  - returns: the value of the useLegacyRandomSource record component

## NoiseRouter

*record* `net.minecraft.world.level.levelgen.NoiseRouter`

### Fields
- `private final DensityFunction barrierNoise`
  The field for the barrierNoise record component.
- `private final DensityFunction fluidLevelFloodednessNoise`
  The field for the fluidLevelFloodednessNoise record component.
- `private final DensityFunction fluidLevelSpreadNoise`
  The field for the fluidLevelSpreadNoise record component.
- `private final DensityFunction lavaNoise`
  The field for the lavaNoise record component.
- `private final DensityFunction temperature`
  The field for the temperature record component.
- `private final DensityFunction vegetation`
  The field for the vegetation record component.
- `private final DensityFunction continents`
  The field for the continents record component.
- `private final DensityFunction erosion`
  The field for the erosion record component.
- `private final DensityFunction depth`
  The field for the depth record component.
- `private final DensityFunction ridges`
  The field for the ridges record component.
- `private final DensityFunction initialDensityWithoutJaggedness`
  The field for the initialDensityWithoutJaggedness record component.
- `private final DensityFunction finalDensity`
  The field for the finalDensity record component.
- `private final DensityFunction veinToggle`
  The field for the veinToggle record component.
- `private final DensityFunction veinRidged`
  The field for the veinRidged record component.
- `private final DensityFunction veinGap`
  The field for the veinGap record component.
- `public static final com.mojang.serialization.Codec<NoiseRouter> CODEC`

### Methods
- `private static com.mojang.serialization.codecs.RecordCodecBuilder<NoiseRouter,DensityFunction> field(String p_224415_,  Function<NoiseRouter,DensityFunction> p_224416_)`
- `public NoiseRouter mapAll(DensityFunction.Visitor p_224413_)`
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
- `public DensityFunction barrierNoise()`
  Returns the value of the barrierNoise record component.
  - returns: the value of the barrierNoise record component
- `public DensityFunction fluidLevelFloodednessNoise()`
  Returns the value of the fluidLevelFloodednessNoise record component.
  - returns: the value of the fluidLevelFloodednessNoise record component
- `public DensityFunction fluidLevelSpreadNoise()`
  Returns the value of the fluidLevelSpreadNoise record component.
  - returns: the value of the fluidLevelSpreadNoise record component
- `public DensityFunction lavaNoise()`
  Returns the value of the lavaNoise record component.
  - returns: the value of the lavaNoise record component
- `public DensityFunction temperature()`
  Returns the value of the temperature record component.
  - returns: the value of the temperature record component
- `public DensityFunction vegetation()`
  Returns the value of the vegetation record component.
  - returns: the value of the vegetation record component
- `public DensityFunction continents()`
  Returns the value of the continents record component.
  - returns: the value of the continents record component
- `public DensityFunction erosion()`
  Returns the value of the erosion record component.
  - returns: the value of the erosion record component
- `public DensityFunction depth()`
  Returns the value of the depth record component.
  - returns: the value of the depth record component
- `public DensityFunction ridges()`
  Returns the value of the ridges record component.
  - returns: the value of the ridges record component
- `public DensityFunction initialDensityWithoutJaggedness()`
  Returns the value of the initialDensityWithoutJaggedness record component.
  - returns: the value of the initialDensityWithoutJaggedness record component
- `public DensityFunction finalDensity()`
  Returns the value of the finalDensity record component.
  - returns: the value of the finalDensity record component
- `public DensityFunction veinToggle()`
  Returns the value of the veinToggle record component.
  - returns: the value of the veinToggle record component
- `public DensityFunction veinRidged()`
  Returns the value of the veinRidged record component.
  - returns: the value of the veinRidged record component
- `public DensityFunction veinGap()`
  Returns the value of the veinGap record component.
  - returns: the value of the veinGap record component

## NoiseRouterData

*class* `net.minecraft.world.level.levelgen.NoiseRouterData`

### Fields
- `public static final float GLOBAL_OFFSET` (= -0.5037500262260437f)
- `private static final float ORE_THICKNESS` (= 0.07999999821186066f)
- `private static final double VEININESS_FREQUENCY` (= 1.5)
- `private static final double NOODLE_SPACING_AND_STRAIGHTNESS` (= 1.5)
- `private static final double SURFACE_DENSITY_THRESHOLD` (= 1.5625)
- `private static final double CHEESE_NOISE_TARGET` (= -0.703125)
- `public static final int ISLAND_CHUNK_DISTANCE` (= 64)
- `public static final long ISLAND_CHUNK_DISTANCE_SQR` (= 4096L)
- `private static final DensityFunction BLENDING_FACTOR`
- `private static final DensityFunction BLENDING_JAGGEDNESS`
- `private static final ResourceKey<DensityFunction> ZERO`
- `private static final ResourceKey<DensityFunction> Y`
- `private static final ResourceKey<DensityFunction> SHIFT_X`
- `private static final ResourceKey<DensityFunction> SHIFT_Z`
- `private static final ResourceKey<DensityFunction> BASE_3D_NOISE_OVERWORLD`
- `private static final ResourceKey<DensityFunction> BASE_3D_NOISE_NETHER`
- `private static final ResourceKey<DensityFunction> BASE_3D_NOISE_END`
- `public static final ResourceKey<DensityFunction> CONTINENTS`
- `public static final ResourceKey<DensityFunction> EROSION`
- `public static final ResourceKey<DensityFunction> RIDGES`
- `public static final ResourceKey<DensityFunction> RIDGES_FOLDED`
- `public static final ResourceKey<DensityFunction> OFFSET`
- `public static final ResourceKey<DensityFunction> FACTOR`
- `public static final ResourceKey<DensityFunction> JAGGEDNESS`
- `public static final ResourceKey<DensityFunction> DEPTH`
- `private static final ResourceKey<DensityFunction> SLOPED_CHEESE`
- `public static final ResourceKey<DensityFunction> CONTINENTS_LARGE`
- `public static final ResourceKey<DensityFunction> EROSION_LARGE`
- `private static final ResourceKey<DensityFunction> OFFSET_LARGE`
- `private static final ResourceKey<DensityFunction> FACTOR_LARGE`
- `private static final ResourceKey<DensityFunction> JAGGEDNESS_LARGE`
- `private static final ResourceKey<DensityFunction> DEPTH_LARGE`
- `private static final ResourceKey<DensityFunction> SLOPED_CHEESE_LARGE`
- `private static final ResourceKey<DensityFunction> OFFSET_AMPLIFIED`
- `private static final ResourceKey<DensityFunction> FACTOR_AMPLIFIED`
- `private static final ResourceKey<DensityFunction> JAGGEDNESS_AMPLIFIED`
- `private static final ResourceKey<DensityFunction> DEPTH_AMPLIFIED`
- `private static final ResourceKey<DensityFunction> SLOPED_CHEESE_AMPLIFIED`
- `private static final ResourceKey<DensityFunction> SLOPED_CHEESE_END`
- `private static final ResourceKey<DensityFunction> SPAGHETTI_ROUGHNESS_FUNCTION`
- `private static final ResourceKey<DensityFunction> ENTRANCES`
- `private static final ResourceKey<DensityFunction> NOODLE`
- `private static final ResourceKey<DensityFunction> PILLARS`
- `private static final ResourceKey<DensityFunction> SPAGHETTI_2D_THICKNESS_MODULATOR`
- `private static final ResourceKey<DensityFunction> SPAGHETTI_2D`

### Methods
- `private static ResourceKey<DensityFunction> createKey(String p_209537_)`
- `public static Holder<? extends DensityFunction> bootstrap(BootstapContext<DensityFunction> p_256220_)`
- `private static void registerTerrainNoises(BootstapContext<DensityFunction> p_256336_,  HolderGetter<DensityFunction> p_256393_,  DensityFunction p_224476_,  Holder<DensityFunction> p_224477_,  Holder<DensityFunction> p_224478_,  ResourceKey<DensityFunction> p_224479_,  ResourceKey<DensityFunction> p_224480_,  ResourceKey<DensityFunction> p_224481_,  ResourceKey<DensityFunction> p_224482_,  ResourceKey<DensityFunction> p_224483_,  boolean p_224484_)`
- `private static DensityFunction registerAndWrap(BootstapContext<DensityFunction> p_256149_,  ResourceKey<DensityFunction> p_255905_,  DensityFunction p_255856_)`
- `private static DensityFunction getFunction(HolderGetter<DensityFunction> p_256312_,  ResourceKey<DensityFunction> p_256077_)`
- `private static DensityFunction peaksAndValleys(DensityFunction p_224438_)`
- `public static float peaksAndValleys(float p_224436_)`
- `private static DensityFunction spaghettiRoughnessFunction(HolderGetter<NormalNoise.NoiseParameters> p_255763_)`
- `private static DensityFunction entrances(HolderGetter<DensityFunction> p_256511_,  HolderGetter<NormalNoise.NoiseParameters> p_255899_)`
- `private static DensityFunction noodle(HolderGetter<DensityFunction> p_256402_,  HolderGetter<NormalNoise.NoiseParameters> p_255632_)`
- `private static DensityFunction pillars(HolderGetter<NormalNoise.NoiseParameters> p_255985_)`
- `private static DensityFunction spaghetti2D(HolderGetter<DensityFunction> p_256535_,  HolderGetter<NormalNoise.NoiseParameters> p_255650_)`
- `private static DensityFunction underground(HolderGetter<DensityFunction> p_256548_,  HolderGetter<NormalNoise.NoiseParameters> p_256236_,  DensityFunction p_256658_)`
- `private static DensityFunction postProcess(DensityFunction p_224493_)`
- `protected static NoiseRouter overworld(HolderGetter<DensityFunction> p_255681_,  HolderGetter<NormalNoise.NoiseParameters> p_256005_,  boolean p_255649_,  boolean p_255617_)`
- `private static NoiseRouter noNewCaves(HolderGetter<DensityFunction> p_255724_,  HolderGetter<NormalNoise.NoiseParameters> p_255986_,  DensityFunction p_256378_)`
- `private static DensityFunction slideOverworld(boolean p_224490_,  DensityFunction p_224491_)`
- `private static DensityFunction slideNetherLike(HolderGetter<DensityFunction> p_256084_,  int p_255802_,  int p_255834_)`
- `private static DensityFunction slideEndLike(DensityFunction p_224440_,  int p_224441_,  int p_224442_)`
- `protected static NoiseRouter nether(HolderGetter<DensityFunction> p_256256_,  HolderGetter<NormalNoise.NoiseParameters> p_256169_)`
- `protected static NoiseRouter caves(HolderGetter<DensityFunction> p_256088_,  HolderGetter<NormalNoise.NoiseParameters> p_255675_)`
- `protected static NoiseRouter floatingIslands(HolderGetter<DensityFunction> p_256633_,  HolderGetter<NormalNoise.NoiseParameters> p_255902_)`
- `private static DensityFunction slideEnd(DensityFunction p_224506_)`
- `protected static NoiseRouter end(HolderGetter<DensityFunction> p_256079_)`
- `protected static NoiseRouter none()`
- `private static DensityFunction splineWithBlending(DensityFunction p_224454_,  DensityFunction p_224455_)`
- `private static DensityFunction noiseGradientDensity(DensityFunction p_212272_,  DensityFunction p_212273_)`
- `private static DensityFunction yLimitedInterpolatable(DensityFunction p_209472_,  DensityFunction p_209473_,  int p_209474_,  int p_209475_,  int p_209476_)`
- `private static DensityFunction slide(DensityFunction p_224444_,  int p_224445_,  int p_224446_,  int p_224447_,  int p_224448_,  double p_224449_,  int p_224450_,  int p_224451_,  double p_224452_)`

## NoiseRouterData.QuantizedSpaghettiRarity

*class* `net.minecraft.world.level.levelgen.NoiseRouterData.QuantizedSpaghettiRarity`

Enclosing class: NoiseRouterData

### Methods
- `protected static double getSphaghettiRarity2D(double p_209564_)`
- `protected static double getSpaghettiRarity3D(double p_209566_)`

## Noises

*class* `net.minecraft.world.level.levelgen.Noises`

### Fields
- `public static final ResourceKey<NormalNoise.NoiseParameters> TEMPERATURE`
- `public static final ResourceKey<NormalNoise.NoiseParameters> VEGETATION`
- `public static final ResourceKey<NormalNoise.NoiseParameters> CONTINENTALNESS`
- `public static final ResourceKey<NormalNoise.NoiseParameters> EROSION`
- `public static final ResourceKey<NormalNoise.NoiseParameters> TEMPERATURE_LARGE`
- `public static final ResourceKey<NormalNoise.NoiseParameters> VEGETATION_LARGE`
- `public static final ResourceKey<NormalNoise.NoiseParameters> CONTINENTALNESS_LARGE`
- `public static final ResourceKey<NormalNoise.NoiseParameters> EROSION_LARGE`
- `public static final ResourceKey<NormalNoise.NoiseParameters> RIDGE`
- `public static final ResourceKey<NormalNoise.NoiseParameters> SHIFT`
- `public static final ResourceKey<NormalNoise.NoiseParameters> AQUIFER_BARRIER`
- `public static final ResourceKey<NormalNoise.NoiseParameters> AQUIFER_FLUID_LEVEL_FLOODEDNESS`
- `public static final ResourceKey<NormalNoise.NoiseParameters> AQUIFER_LAVA`
- `public static final ResourceKey<NormalNoise.NoiseParameters> AQUIFER_FLUID_LEVEL_SPREAD`
- `public static final ResourceKey<NormalNoise.NoiseParameters> PILLAR`
- `public static final ResourceKey<NormalNoise.NoiseParameters> PILLAR_RARENESS`
- `public static final ResourceKey<NormalNoise.NoiseParameters> PILLAR_THICKNESS`
- `public static final ResourceKey<NormalNoise.NoiseParameters> SPAGHETTI_2D`
- `public static final ResourceKey<NormalNoise.NoiseParameters> SPAGHETTI_2D_ELEVATION`
- `public static final ResourceKey<NormalNoise.NoiseParameters> SPAGHETTI_2D_MODULATOR`
- `public static final ResourceKey<NormalNoise.NoiseParameters> SPAGHETTI_2D_THICKNESS`
- `public static final ResourceKey<NormalNoise.NoiseParameters> SPAGHETTI_3D_1`
- `public static final ResourceKey<NormalNoise.NoiseParameters> SPAGHETTI_3D_2`
- `public static final ResourceKey<NormalNoise.NoiseParameters> SPAGHETTI_3D_RARITY`
- `public static final ResourceKey<NormalNoise.NoiseParameters> SPAGHETTI_3D_THICKNESS`
- `public static final ResourceKey<NormalNoise.NoiseParameters> SPAGHETTI_ROUGHNESS`
- `public static final ResourceKey<NormalNoise.NoiseParameters> SPAGHETTI_ROUGHNESS_MODULATOR`
- `public static final ResourceKey<NormalNoise.NoiseParameters> CAVE_ENTRANCE`
- `public static final ResourceKey<NormalNoise.NoiseParameters> CAVE_LAYER`
- `public static final ResourceKey<NormalNoise.NoiseParameters> CAVE_CHEESE`
- `public static final ResourceKey<NormalNoise.NoiseParameters> ORE_VEININESS`
- `public static final ResourceKey<NormalNoise.NoiseParameters> ORE_VEIN_A`
- `public static final ResourceKey<NormalNoise.NoiseParameters> ORE_VEIN_B`
- `public static final ResourceKey<NormalNoise.NoiseParameters> ORE_GAP`
- `public static final ResourceKey<NormalNoise.NoiseParameters> NOODLE`
- `public static final ResourceKey<NormalNoise.NoiseParameters> NOODLE_THICKNESS`
- `public static final ResourceKey<NormalNoise.NoiseParameters> NOODLE_RIDGE_A`
- `public static final ResourceKey<NormalNoise.NoiseParameters> NOODLE_RIDGE_B`
- `public static final ResourceKey<NormalNoise.NoiseParameters> JAGGED`
- `public static final ResourceKey<NormalNoise.NoiseParameters> SURFACE`
- `public static final ResourceKey<NormalNoise.NoiseParameters> SURFACE_SECONDARY`
- `public static final ResourceKey<NormalNoise.NoiseParameters> CLAY_BANDS_OFFSET`
- `public static final ResourceKey<NormalNoise.NoiseParameters> BADLANDS_PILLAR`
- `public static final ResourceKey<NormalNoise.NoiseParameters> BADLANDS_PILLAR_ROOF`
- `public static final ResourceKey<NormalNoise.NoiseParameters> BADLANDS_SURFACE`
- `public static final ResourceKey<NormalNoise.NoiseParameters> ICEBERG_PILLAR`
- `public static final ResourceKey<NormalNoise.NoiseParameters> ICEBERG_PILLAR_ROOF`
- `public static final ResourceKey<NormalNoise.NoiseParameters> ICEBERG_SURFACE`
- `public static final ResourceKey<NormalNoise.NoiseParameters> SWAMP`
- `public static final ResourceKey<NormalNoise.NoiseParameters> CALCITE`
- `public static final ResourceKey<NormalNoise.NoiseParameters> GRAVEL`
- `public static final ResourceKey<NormalNoise.NoiseParameters> POWDER_SNOW`
- `public static final ResourceKey<NormalNoise.NoiseParameters> PACKED_ICE`
- `public static final ResourceKey<NormalNoise.NoiseParameters> ICE`
- `public static final ResourceKey<NormalNoise.NoiseParameters> SOUL_SAND_LAYER`
- `public static final ResourceKey<NormalNoise.NoiseParameters> GRAVEL_LAYER`
- `public static final ResourceKey<NormalNoise.NoiseParameters> PATCH`
- `public static final ResourceKey<NormalNoise.NoiseParameters> NETHERRACK`
- `public static final ResourceKey<NormalNoise.NoiseParameters> NETHER_WART`
- `public static final ResourceKey<NormalNoise.NoiseParameters> NETHER_STATE_SELECTOR`

### Methods
- `private static ResourceKey<NormalNoise.NoiseParameters> createKey(String p_189310_)`
- `public static NormalNoise instantiate(HolderGetter<NormalNoise.NoiseParameters> p_256362_,  PositionalRandomFactory p_256306_,  ResourceKey<NormalNoise.NoiseParameters> p_256639_)`

## NoiseSettings

*record* `net.minecraft.world.level.levelgen.NoiseSettings`

### Fields
- `private final int minY`
  The field for the minY record component.
- `private final int height`
  The field for the height record component.
- `private final int noiseSizeHorizontal`
  The field for the noiseSizeHorizontal record component.
- `private final int noiseSizeVertical`
  The field for the noiseSizeVertical record component.
- `public static final com.mojang.serialization.Codec<NoiseSettings> CODEC`
- `protected static final NoiseSettings OVERWORLD_NOISE_SETTINGS`
- `protected static final NoiseSettings NETHER_NOISE_SETTINGS`
- `protected static final NoiseSettings END_NOISE_SETTINGS`
- `protected static final NoiseSettings CAVES_NOISE_SETTINGS`
- `protected static final NoiseSettings FLOATING_ISLANDS_NOISE_SETTINGS`

### Methods
- `private static com.mojang.serialization.DataResult<NoiseSettings> guardY(NoiseSettings p_158721_)`
- `public static NoiseSettings create(int p_224526_,  int p_224527_,  int p_224528_,  int p_224529_)`
- `public int getCellHeight()`
- `public int getCellWidth()`
- `public NoiseSettings clampToHeightAccessor(LevelHeightAccessor p_224531_)`
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
- `public int minY()`
  Returns the value of the minY record component.
  - returns: the value of the minY record component
- `public int height()`
  Returns the value of the height record component.
  - returns: the value of the height record component
- `public int noiseSizeHorizontal()`
  Returns the value of the noiseSizeHorizontal record component.
  - returns: the value of the noiseSizeHorizontal record component
- `public int noiseSizeVertical()`
  Returns the value of the noiseSizeVertical record component.
  - returns: the value of the noiseSizeVertical record component

## OreVeinifier

*class* `net.minecraft.world.level.levelgen.OreVeinifier`

### Fields
- `private static final float VEININESS_THRESHOLD` (= 0.4000000059604645f)
- `private static final int EDGE_ROUNDOFF_BEGIN` (= 20)
- `private static final double MAX_EDGE_ROUNDOFF` (= 0.2)
- `private static final float VEIN_SOLIDNESS` (= 0.699999988079071f)
- `private static final float MIN_RICHNESS` (= 0.10000000149011612f)
- `private static final float MAX_RICHNESS` (= 0.30000001192092896f)
- `private static final float MAX_RICHNESS_THRESHOLD` (= 0.6000000238418579f)
- `private static final float CHANCE_OF_RAW_ORE_BLOCK` (= 0.019999999552965164f)
- `private static final float SKIP_ORE_IF_GAP_NOISE_IS_BELOW` (= -0.30000001192092896f)

### Methods
- `protected static NoiseChunk.BlockStateFiller create(DensityFunction p_209668_,  DensityFunction p_209669_,  DensityFunction p_209670_,  PositionalRandomFactory p_209671_)`

## PatrolSpawner

*class* `net.minecraft.world.level.levelgen.PatrolSpawner`

### Fields
- `private int nextTick`

### Methods
- `public int tick(ServerLevel p_64570_,  boolean p_64571_,  boolean p_64572_)`
- `private boolean spawnPatrolMember(ServerLevel p_224533_,  BlockPos p_224534_,  RandomSource p_224535_,  boolean p_224536_)`

## PhantomSpawner

*class* `net.minecraft.world.level.levelgen.PhantomSpawner`

### Fields
- `private int nextTick`

### Methods
- `public int tick(ServerLevel p_64576_,  boolean p_64577_,  boolean p_64578_)`

## PositionalRandomFactory

*interface* `net.minecraft.world.level.levelgen.PositionalRandomFactory`

### Methods
- `default RandomSource at(BlockPos p_224543_)`
- `default RandomSource fromHashOf(ResourceLocation p_224541_)`
- `RandomSource fromHashOf(String p_224544_)`
- `RandomSource at(int p_224537_,  int p_224538_,  int p_224539_)`
- `void parityConfigString(StringBuilder p_189317_)`

## RandomState

*class* `net.minecraft.world.level.levelgen.RandomState`

### Fields
- `final PositionalRandomFactory random`
- `private final HolderGetter<NormalNoise.NoiseParameters> noises`
- `private final NoiseRouter router`
- `private final Climate.Sampler sampler`
- `private final SurfaceSystem surfaceSystem`
- `private final PositionalRandomFactory aquiferRandom`
- `private final PositionalRandomFactory oreRandom`
- `private final Map<ResourceKey<NormalNoise.NoiseParameters>,NormalNoise> noiseIntances`
- `private final Map<ResourceLocation,PositionalRandomFactory> positionalRandoms`

### Methods
- `public static RandomState create(HolderGetter.Provider p_255935_,  ResourceKey<NoiseGeneratorSettings> p_256314_,  long p_256595_)`
- `public static RandomState create(NoiseGeneratorSettings p_255761_,  HolderGetter<NormalNoise.NoiseParameters> p_256649_,  long p_255965_)`
- `public NormalNoise getOrCreateNoise(ResourceKey<NormalNoise.NoiseParameters> p_224561_)`
- `public PositionalRandomFactory getOrCreateRandomFactory(ResourceLocation p_224566_)`
- `public NoiseRouter router()`
- `public Climate.Sampler sampler()`
- `public SurfaceSystem surfaceSystem()`
- `public PositionalRandomFactory aquiferRandom()`
- `public PositionalRandomFactory oreRandom()`

## RandomSupport

*class* `net.minecraft.world.level.levelgen.RandomSupport`

### Fields
- `public static final long GOLDEN_RATIO_64` (= -7046029254386353131L)
- `public static final long SILVER_RATIO_64` (= 7640891576956012809L)
- `private static final com.google.common.hash.HashFunction MD5_128`
- `private static final AtomicLong SEED_UNIQUIFIER`

### Methods
- `public static long mixStafford13(long p_189330_)`
- `public static RandomSupport.Seed128bit upgradeSeedTo128bitUnmixed(long p_289660_)`
- `public static RandomSupport.Seed128bit upgradeSeedTo128bit(long p_189332_)`
- `public static RandomSupport.Seed128bit seedFromHashOf(String p_288994_)`
- `public static long generateUniqueSeed()`

## RandomSupport.Seed128bit

*record* `net.minecraft.world.level.levelgen.RandomSupport.Seed128bit`

Enclosing class: RandomSupport

### Fields
- `private final long seedLo`
  The field for the seedLo record component.
- `private final long seedHi`
  The field for the seedHi record component.

### Methods
- `public RandomSupport.Seed128bit xor(long p_288963_,  long p_288992_)`
- `public RandomSupport.Seed128bit xor(RandomSupport.Seed128bit p_289009_)`
- `public RandomSupport.Seed128bit mixed()`
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
- `public long seedLo()`
  Returns the value of the seedLo record component.
  - returns: the value of the seedLo record component
- `public long seedHi()`
  Returns the value of the seedHi record component.
  - returns: the value of the seedHi record component

## SingleThreadedRandomSource

*class* `net.minecraft.world.level.levelgen.SingleThreadedRandomSource`

### Fields
- `private static final int MODULUS_BITS` (= 48)
- `private static final long MODULUS_MASK` (= 281474976710655L)
- `private static final long MULTIPLIER` (= 25214903917L)
- `private static final long INCREMENT` (= 11L)
- `private long seed`
- `private final MarsagliaPolarGaussian gaussianSource`

### Inherited fields
- from `net.minecraft.world.level.levelgen.BitRandomSource`: `DOUBLE_MULTIPLIER`, `FLOAT_MULTIPLIER`
- from `net.minecraft.util.RandomSource`: `GAUSSIAN_SPREAD_FACTOR`

### Methods
- `public RandomSource fork()`
- `public PositionalRandomFactory forkPositional()`
- `public void setSeed(long p_189360_)`
- `public int next(int p_189356_)`
- `public double nextGaussian()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.BitRandomSource`: `nextBoolean`, `nextDouble`, `nextFloat`, `nextInt`, `nextInt`, `nextLong`
- from `net.minecraft.util.RandomSource`: `consumeCount`, `nextInt`, `nextIntBetweenInclusive`, `triangle`

## SurfaceRules

*class* `net.minecraft.world.level.levelgen.SurfaceRules`

### Fields
- `public static final SurfaceRules.ConditionSource ON_FLOOR`
- `public static final SurfaceRules.ConditionSource UNDER_FLOOR`
- `public static final SurfaceRules.ConditionSource DEEP_UNDER_FLOOR`
- `public static final SurfaceRules.ConditionSource VERY_DEEP_UNDER_FLOOR`
- `public static final SurfaceRules.ConditionSource ON_CEILING`
- `public static final SurfaceRules.ConditionSource UNDER_CEILING`

### Methods
- `public static SurfaceRules.ConditionSource stoneDepthCheck(int p_202177_,  boolean p_202178_,  CaveSurface p_202179_)`
- `public static SurfaceRules.ConditionSource stoneDepthCheck(int p_202172_,  boolean p_202173_,  int p_202174_,  CaveSurface p_202175_)`
- `public static SurfaceRules.ConditionSource not(SurfaceRules.ConditionSource p_189393_)`
- `public static SurfaceRules.ConditionSource yBlockCheck(VerticalAnchor p_189401_,  int p_189402_)`
- `public static SurfaceRules.ConditionSource yStartCheck(VerticalAnchor p_189423_,  int p_189424_)`
- `public static SurfaceRules.ConditionSource waterBlockCheck(int p_189383_,  int p_189384_)`
- `public static SurfaceRules.ConditionSource waterStartCheck(int p_189420_,  int p_189421_)`
- `@SafeVarargs public static SurfaceRules.ConditionSource isBiome(ResourceKey<Biome>... p_189417_)`
- `private static SurfaceRules.BiomeConditionSource isBiome(List<ResourceKey<Biome>> p_189408_)`
- `public static SurfaceRules.ConditionSource noiseCondition(ResourceKey<NormalNoise.NoiseParameters> p_189410_,  double p_189411_)`
- `public static SurfaceRules.ConditionSource noiseCondition(ResourceKey<NormalNoise.NoiseParameters> p_189413_,  double p_189414_,  double p_189415_)`
- `public static SurfaceRules.ConditionSource verticalGradient(String p_189404_,  VerticalAnchor p_189405_,  VerticalAnchor p_189406_)`
- `public static SurfaceRules.ConditionSource steep()`
- `public static SurfaceRules.ConditionSource hole()`
- `public static SurfaceRules.ConditionSource abovePreliminarySurface()`
- `public static SurfaceRules.ConditionSource temperature()`
- `public static SurfaceRules.RuleSource ifTrue(SurfaceRules.ConditionSource p_189395_,  SurfaceRules.RuleSource p_189396_)`
- `public static SurfaceRules.RuleSource sequence(SurfaceRules.RuleSource... p_198273_)`
- `public static SurfaceRules.RuleSource state(BlockState p_189391_)`
- `public static SurfaceRules.RuleSource bandlands()`
- `static <A> com.mojang.serialization.Codec<? extends A> register(Registry<com.mojang.serialization.Codec<? extends A>> p_224604_,  String p_224605_,  KeyDispatchDataCodec<? extends A> p_224606_)`

## SurfaceRules.BiomeConditionSource

*class* `net.minecraft.world.level.levelgen.SurfaceRules.BiomeConditionSource`

Enclosing class: SurfaceRules

### Fields
- `static final KeyDispatchDataCodec<SurfaceRules.BiomeConditionSource> CODEC`
- `private final List<ResourceKey<Biome>> biomes`
- `final Predicate<ResourceKey<Biome>> biomeNameTest`

### Methods
- `public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()`
- `public SurfaceRules.Condition apply(SurfaceRules.Context p_189496_)`
- `public boolean equals(Object p_209694_)`
- `public int hashCode()`
- `public String toString()`

### Inherited methods
- from `java.util.function.Function`: `andThen`, `compose`

## SurfaceRules.BlockRuleSource

*record* `net.minecraft.world.level.levelgen.SurfaceRules.BlockRuleSource`

Enclosing class: SurfaceRules

### Fields
- `private final BlockState resultState`
  The field for the resultState record component.
- `private final SurfaceRules.StateRule rule`
  The field for the rule record component.
- `static final KeyDispatchDataCodec<SurfaceRules.BlockRuleSource> CODEC`

### Methods
- `public KeyDispatchDataCodec<? extends SurfaceRules.RuleSource> codec()`
- `public SurfaceRules.SurfaceRule apply(SurfaceRules.Context p_189523_)`
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
- `public BlockState resultState()`
  Returns the value of the resultState record component.
  - returns: the value of the resultState record component
- `public SurfaceRules.StateRule rule()`
  Returns the value of the rule record component.
  - returns: the value of the rule record component

### Inherited methods
- from `java.util.function.Function`: `andThen`, `compose`

## SurfaceRules.Condition

*interface* `net.minecraft.world.level.levelgen.SurfaceRules.Condition`

Enclosing class: SurfaceRules

### Methods
- `boolean test()`

## SurfaceRules.ConditionSource

*interface* `net.minecraft.world.level.levelgen.SurfaceRules.ConditionSource`

All Superinterfaces: Function<SurfaceRules.Context, SurfaceRules.Condition>

Enclosing class: SurfaceRules

### Fields
- `static final com.mojang.serialization.Codec<SurfaceRules.ConditionSource> CODEC`

### Methods
- `static com.mojang.serialization.Codec<? extends SurfaceRules.ConditionSource> bootstrap(Registry<com.mojang.serialization.Codec<? extends SurfaceRules.ConditionSource>> p_204625_)`
- `KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()`

### Inherited methods
- from `java.util.function.Function`: `andThen`, `apply`, `compose`

## SurfaceRules.Context

*class* `net.minecraft.world.level.levelgen.SurfaceRules.Context`

Enclosing class: SurfaceRules

### Fields
- `private static final int HOW_FAR_BELOW_PRELIMINARY_SURFACE_LEVEL_TO_BUILD_SURFACE` (= 8)
- `private static final int SURFACE_CELL_BITS` (= 4)
- `private static final int SURFACE_CELL_SIZE` (= 16)
- `private static final int SURFACE_CELL_MASK` (= 15)
- `final SurfaceSystem system`
- `final SurfaceRules.Condition temperature`
- `final SurfaceRules.Condition steep`
- `final SurfaceRules.Condition hole`
- `final SurfaceRules.Condition abovePreliminarySurface`
- `final RandomState randomState`
- `final ChunkAccess chunk`
- `private final NoiseChunk noiseChunk`
- `private final Function<BlockPos,Holder<Biome>> biomeGetter`
- `final WorldGenerationContext context`
- `private long lastPreliminarySurfaceCellOrigin`
- `private final int[] preliminarySurfaceCache`
- `long lastUpdateXZ`
- `int blockX`
- `int blockZ`
- `int surfaceDepth`
- `private long lastSurfaceDepth2Update`
- `private double surfaceSecondary`
- `private long lastMinSurfaceLevelUpdate`
- `private int minSurfaceLevel`
- `long lastUpdateY`
- `final BlockPos.MutableBlockPos pos`
- `Supplier<Holder<Biome>> biome`
- `int blockY`
- `int waterHeight`
- `int stoneDepthBelow`
- `int stoneDepthAbove`

### Methods
- `protected void updateXZ(int p_189570_,  int p_189571_)`
- `protected void updateY(int p_189577_,  int p_189578_,  int p_189579_,  int p_189580_,  int p_189581_,  int p_189582_)`
- `protected double getSurfaceSecondary()`
- `private static int blockCoordToSurfaceCell(int p_198281_)`
- `private static int surfaceCellToBlockCoord(int p_198283_)`
- `protected int getMinSurfaceLevel()`

## SurfaceRules.Context.AbovePreliminarySurfaceCondition

*class* `net.minecraft.world.level.levelgen.SurfaceRules.Context.AbovePreliminarySurfaceCondition`

Enclosing class: SurfaceRules.Context

### Methods
- `public boolean test()`

## SurfaceRules.Context.HoleCondition

*class* `net.minecraft.world.level.levelgen.SurfaceRules.Context.HoleCondition`

Enclosing class: SurfaceRules.Context

### Inherited fields
- from `net.minecraft.world.level.levelgen.SurfaceRules.LazyCondition`: `context`, `result`

### Methods
- `protected boolean compute()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.SurfaceRules.LazyXZCondition`: `getContextLastUpdate`
- from `net.minecraft.world.level.levelgen.SurfaceRules.LazyCondition`: `test`

## SurfaceRules.Context.SteepMaterialCondition

*class* `net.minecraft.world.level.levelgen.SurfaceRules.Context.SteepMaterialCondition`

Enclosing class: SurfaceRules.Context

### Inherited fields
- from `net.minecraft.world.level.levelgen.SurfaceRules.LazyCondition`: `context`, `result`

### Methods
- `protected boolean compute()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.SurfaceRules.LazyXZCondition`: `getContextLastUpdate`
- from `net.minecraft.world.level.levelgen.SurfaceRules.LazyCondition`: `test`

## SurfaceRules.Context.TemperatureHelperCondition

*class* `net.minecraft.world.level.levelgen.SurfaceRules.Context.TemperatureHelperCondition`

Enclosing class: SurfaceRules.Context

### Inherited fields
- from `net.minecraft.world.level.levelgen.SurfaceRules.LazyCondition`: `context`, `result`

### Methods
- `protected boolean compute()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.SurfaceRules.LazyYCondition`: `getContextLastUpdate`
- from `net.minecraft.world.level.levelgen.SurfaceRules.LazyCondition`: `test`

## SurfaceRules.LazyCondition

*class* `net.minecraft.world.level.levelgen.SurfaceRules.LazyCondition`

Enclosing class: SurfaceRules

### Fields
- `protected final SurfaceRules.Context context`
- `private long lastUpdate`
- `@Nullable Boolean result`

### Methods
- `public boolean test()`
- `protected abstract long getContextLastUpdate()`
- `protected abstract boolean compute()`

## SurfaceRules.LazyXZCondition

*class* `net.minecraft.world.level.levelgen.SurfaceRules.LazyXZCondition`

Enclosing class: SurfaceRules

### Inherited fields
- from `net.minecraft.world.level.levelgen.SurfaceRules.LazyCondition`: `context`, `result`

### Methods
- `protected long getContextLastUpdate()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.SurfaceRules.LazyCondition`: `compute`, `test`

## SurfaceRules.LazyYCondition

*class* `net.minecraft.world.level.levelgen.SurfaceRules.LazyYCondition`

Enclosing class: SurfaceRules

### Inherited fields
- from `net.minecraft.world.level.levelgen.SurfaceRules.LazyCondition`: `context`, `result`

### Methods
- `protected long getContextLastUpdate()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.SurfaceRules.LazyCondition`: `compute`, `test`

## SurfaceRules.NoiseThresholdConditionSource

*record* `net.minecraft.world.level.levelgen.SurfaceRules.NoiseThresholdConditionSource`

Enclosing class: SurfaceRules

### Fields
- `private final ResourceKey<NormalNoise.NoiseParameters> noise`
  The field for the noise record component.
- `private final double minThreshold`
  The field for the minThreshold record component.
- `private final double maxThreshold`
  The field for the maxThreshold record component.
- `static final KeyDispatchDataCodec<SurfaceRules.NoiseThresholdConditionSource> CODEC`

### Methods
- `public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()`
- `public SurfaceRules.Condition apply(SurfaceRules.Context p_189640_)`
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
- `public ResourceKey<NormalNoise.NoiseParameters> noise()`
  Returns the value of the noise record component.
  - returns: the value of the noise record component
- `public double minThreshold()`
  Returns the value of the minThreshold record component.
  - returns: the value of the minThreshold record component
- `public double maxThreshold()`
  Returns the value of the maxThreshold record component.
  - returns: the value of the maxThreshold record component

### Inherited methods
- from `java.util.function.Function`: `andThen`, `compose`

## SurfaceRules.NotCondition

*record* `net.minecraft.world.level.levelgen.SurfaceRules.NotCondition`

Enclosing class: SurfaceRules

### Fields
- `private final SurfaceRules.Condition target`
  The field for the target record component.

### Methods
- `public boolean test()`
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
- `public SurfaceRules.Condition target()`
  Returns the value of the target record component.
  - returns: the value of the target record component

## SurfaceRules.NotConditionSource

*record* `net.minecraft.world.level.levelgen.SurfaceRules.NotConditionSource`

Enclosing class: SurfaceRules

### Fields
- `private final SurfaceRules.ConditionSource target`
  The field for the target record component.
- `static final KeyDispatchDataCodec<SurfaceRules.NotConditionSource> CODEC`

### Methods
- `public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()`
- `public SurfaceRules.Condition apply(SurfaceRules.Context p_189674_)`
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
- `public SurfaceRules.ConditionSource target()`
  Returns the value of the target record component.
  - returns: the value of the target record component

### Inherited methods
- from `java.util.function.Function`: `andThen`, `compose`

## SurfaceRules.RuleSource

*interface* `net.minecraft.world.level.levelgen.SurfaceRules.RuleSource`

All Superinterfaces: Function<SurfaceRules.Context, SurfaceRules.SurfaceRule>

Enclosing class: SurfaceRules

### Fields
- `static final com.mojang.serialization.Codec<SurfaceRules.RuleSource> CODEC`

### Methods
- `static com.mojang.serialization.Codec<? extends SurfaceRules.RuleSource> bootstrap(Registry<com.mojang.serialization.Codec<? extends SurfaceRules.RuleSource>> p_204631_)`
- `KeyDispatchDataCodec<? extends SurfaceRules.RuleSource> codec()`

### Inherited methods
- from `java.util.function.Function`: `andThen`, `apply`, `compose`

## SurfaceRules.SequenceRule

*record* `net.minecraft.world.level.levelgen.SurfaceRules.SequenceRule`

Enclosing class: SurfaceRules

### Fields
- `private final List<SurfaceRules.SurfaceRule> rules`
  The field for the rules record component.

### Methods
- `@Nullable public BlockState tryApply(int p_189694_,  int p_189695_,  int p_189696_)`
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
- `public List<SurfaceRules.SurfaceRule> rules()`
  Returns the value of the rules record component.
  - returns: the value of the rules record component

## SurfaceRules.SequenceRuleSource

*record* `net.minecraft.world.level.levelgen.SurfaceRules.SequenceRuleSource`

Enclosing class: SurfaceRules

### Fields
- `private final List<SurfaceRules.RuleSource> sequence`
  The field for the sequence record component.
- `static final KeyDispatchDataCodec<SurfaceRules.SequenceRuleSource> CODEC`

### Methods
- `public KeyDispatchDataCodec<? extends SurfaceRules.RuleSource> codec()`
- `public SurfaceRules.SurfaceRule apply(SurfaceRules.Context p_189704_)`
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
- `public List<SurfaceRules.RuleSource> sequence()`
  Returns the value of the sequence record component.
  - returns: the value of the sequence record component

### Inherited methods
- from `java.util.function.Function`: `andThen`, `compose`

## SurfaceRules.StateRule

*record* `net.minecraft.world.level.levelgen.SurfaceRules.StateRule`

Enclosing class: SurfaceRules

### Fields
- `private final BlockState state`
  The field for the state record component.

### Methods
- `public BlockState tryApply(int p_189721_,  int p_189722_,  int p_189723_)`
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
- `public BlockState state()`
  Returns the value of the state record component.
  - returns: the value of the state record component

## SurfaceRules.StoneDepthCheck

*record* `net.minecraft.world.level.levelgen.SurfaceRules.StoneDepthCheck`

Enclosing class: SurfaceRules

### Fields
- `private final int offset`
  The field for the offset record component.
- `private final boolean addSurfaceDepth`
  The field for the addSurfaceDepth record component.
- `private final int secondaryDepthRange`
  The field for the secondaryDepthRange record component.
- `private final CaveSurface surfaceType`
  The field for the surfaceType record component.
- `static final KeyDispatchDataCodec<SurfaceRules.StoneDepthCheck> CODEC`

### Methods
- `public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()`
- `public SurfaceRules.Condition apply(SurfaceRules.Context p_189755_)`
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
- `public int offset()`
  Returns the value of the offset record component.
  - returns: the value of the offset record component
- `public boolean addSurfaceDepth()`
  Returns the value of the addSurfaceDepth record component.
  - returns: the value of the addSurfaceDepth record component
- `public int secondaryDepthRange()`
  Returns the value of the secondaryDepthRange record component.
  - returns: the value of the secondaryDepthRange record component
- `public CaveSurface surfaceType()`
  Returns the value of the surfaceType record component.
  - returns: the value of the surfaceType record component

### Inherited methods
- from `java.util.function.Function`: `andThen`, `compose`

## SurfaceRules.SurfaceRule

*interface* `net.minecraft.world.level.levelgen.SurfaceRules.SurfaceRule`

Enclosing class: SurfaceRules

### Methods
- `@Nullable BlockState tryApply(int p_189774_,  int p_189775_,  int p_189776_)`

## SurfaceRules.TestRule

*record* `net.minecraft.world.level.levelgen.SurfaceRules.TestRule`

Enclosing class: SurfaceRules

### Fields
- `private final SurfaceRules.Condition condition`
  The field for the condition record component.
- `private final SurfaceRules.SurfaceRule followup`
  The field for the followup record component.

### Methods
- `@Nullable public BlockState tryApply(int p_189805_,  int p_189806_,  int p_189807_)`
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
- `public SurfaceRules.Condition condition()`
  Returns the value of the condition record component.
  - returns: the value of the condition record component
- `public SurfaceRules.SurfaceRule followup()`
  Returns the value of the followup record component.
  - returns: the value of the followup record component

## SurfaceRules.TestRuleSource

*record* `net.minecraft.world.level.levelgen.SurfaceRules.TestRuleSource`

Enclosing class: SurfaceRules

### Fields
- `private final SurfaceRules.ConditionSource ifTrue`
  The field for the ifTrue record component.
- `private final SurfaceRules.RuleSource thenRun`
  The field for the thenRun record component.
- `static final KeyDispatchDataCodec<SurfaceRules.TestRuleSource> CODEC`

### Methods
- `public KeyDispatchDataCodec<? extends SurfaceRules.RuleSource> codec()`
- `public SurfaceRules.SurfaceRule apply(SurfaceRules.Context p_189819_)`
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
- `public SurfaceRules.ConditionSource ifTrue()`
  Returns the value of the ifTrue record component.
  - returns: the value of the ifTrue record component
- `public SurfaceRules.RuleSource thenRun()`
  Returns the value of the thenRun record component.
  - returns: the value of the thenRun record component

### Inherited methods
- from `java.util.function.Function`: `andThen`, `compose`

## SurfaceRules.VerticalGradientConditionSource

*record* `net.minecraft.world.level.levelgen.SurfaceRules.VerticalGradientConditionSource`

Enclosing class: SurfaceRules

### Fields
- `private final ResourceLocation randomName`
  The field for the randomName record component.
- `private final VerticalAnchor trueAtAndBelow`
  The field for the trueAtAndBelow record component.
- `private final VerticalAnchor falseAtAndAbove`
  The field for the falseAtAndAbove record component.
- `static final KeyDispatchDataCodec<SurfaceRules.VerticalGradientConditionSource> CODEC`

### Methods
- `public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()`
- `public SurfaceRules.Condition apply(SurfaceRules.Context p_189841_)`
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
- `public ResourceLocation randomName()`
  Returns the value of the randomName record component.
  - returns: the value of the randomName record component
- `public VerticalAnchor trueAtAndBelow()`
  Returns the value of the trueAtAndBelow record component.
  - returns: the value of the trueAtAndBelow record component
- `public VerticalAnchor falseAtAndAbove()`
  Returns the value of the falseAtAndAbove record component.
  - returns: the value of the falseAtAndAbove record component

### Inherited methods
- from `java.util.function.Function`: `andThen`, `compose`

## SurfaceRules.WaterConditionSource

*record* `net.minecraft.world.level.levelgen.SurfaceRules.WaterConditionSource`

Enclosing class: SurfaceRules

### Fields
- `private final int offset`
  The field for the offset record component.
- `private final int surfaceDepthMultiplier`
  The field for the surfaceDepthMultiplier record component.
- `private final boolean addStoneDepth`
  The field for the addStoneDepth record component.
- `static final KeyDispatchDataCodec<SurfaceRules.WaterConditionSource> CODEC`

### Methods
- `public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()`
- `public SurfaceRules.Condition apply(SurfaceRules.Context p_189876_)`
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
- `public int offset()`
  Returns the value of the offset record component.
  - returns: the value of the offset record component
- `public int surfaceDepthMultiplier()`
  Returns the value of the surfaceDepthMultiplier record component.
  - returns: the value of the surfaceDepthMultiplier record component
- `public boolean addStoneDepth()`
  Returns the value of the addStoneDepth record component.
  - returns: the value of the addStoneDepth record component

### Inherited methods
- from `java.util.function.Function`: `andThen`, `compose`

## SurfaceRules.YConditionSource

*record* `net.minecraft.world.level.levelgen.SurfaceRules.YConditionSource`

Enclosing class: SurfaceRules

### Fields
- `private final VerticalAnchor anchor`
  The field for the anchor record component.
- `private final int surfaceDepthMultiplier`
  The field for the surfaceDepthMultiplier record component.
- `private final boolean addStoneDepth`
  The field for the addStoneDepth record component.
- `static final KeyDispatchDataCodec<SurfaceRules.YConditionSource> CODEC`

### Methods
- `public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()`
- `public SurfaceRules.Condition apply(SurfaceRules.Context p_189457_)`
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
- `public VerticalAnchor anchor()`
  Returns the value of the anchor record component.
  - returns: the value of the anchor record component
- `public int surfaceDepthMultiplier()`
  Returns the value of the surfaceDepthMultiplier record component.
  - returns: the value of the surfaceDepthMultiplier record component
- `public boolean addStoneDepth()`
  Returns the value of the addStoneDepth record component.
  - returns: the value of the addStoneDepth record component

### Inherited methods
- from `java.util.function.Function`: `andThen`, `compose`

## SurfaceSystem

*class* `net.minecraft.world.level.levelgen.SurfaceSystem`

### Fields
- `private static final BlockState WHITE_TERRACOTTA`
- `private static final BlockState ORANGE_TERRACOTTA`
- `private static final BlockState TERRACOTTA`
- `private static final BlockState YELLOW_TERRACOTTA`
- `private static final BlockState BROWN_TERRACOTTA`
- `private static final BlockState RED_TERRACOTTA`
- `private static final BlockState LIGHT_GRAY_TERRACOTTA`
- `private static final BlockState PACKED_ICE`
- `private static final BlockState SNOW_BLOCK`
- `private final BlockState defaultBlock`
- `private final int seaLevel`
- `private final BlockState[] clayBands`
- `private final NormalNoise clayBandsOffsetNoise`
- `private final NormalNoise badlandsPillarNoise`
- `private final NormalNoise badlandsPillarRoofNoise`
- `private final NormalNoise badlandsSurfaceNoise`
- `private final NormalNoise icebergPillarNoise`
- `private final NormalNoise icebergPillarRoofNoise`
- `private final NormalNoise icebergSurfaceNoise`
- `private final PositionalRandomFactory noiseRandom`
- `private final NormalNoise surfaceNoise`
- `private final NormalNoise surfaceSecondaryNoise`

### Methods
- `public void buildSurface(RandomState p_224649_,  BiomeManager p_224650_,  Registry<Biome> p_224651_,  boolean p_224652_,  WorldGenerationContext p_224653_,  ChunkAccess p_224654_,  NoiseChunk p_224655_,  SurfaceRules.RuleSource p_224656_)`
- `protected int getSurfaceDepth(int p_189928_,  int p_189929_)`
- `protected double getSurfaceSecondary(int p_202190_,  int p_202191_)`
- `private boolean isStone(BlockState p_189953_)`
- `@Deprecated public Optional<BlockState> topMaterial(SurfaceRules.RuleSource p_189972_,  CarvingContext p_189973_,  Function<BlockPos,Holder<Biome>> p_189974_,  ChunkAccess p_189975_,  NoiseChunk p_189976_,  BlockPos p_189977_,  boolean p_189978_)` (deprecated)
- `private void erodedBadlandsExtension(BlockColumn p_189955_,  int p_189956_,  int p_189957_,  int p_189958_,  LevelHeightAccessor p_189959_)`
- `private void frozenOceanExtension(int p_189935_,  Biome p_189936_,  BlockColumn p_189937_,  BlockPos.MutableBlockPos p_189938_,  int p_189939_,  int p_189940_,  int p_189941_)`
- `private static BlockState[] generateBands(RandomSource p_224642_)`
- `private static void makeBands(RandomSource p_224644_,  BlockState[] p_224645_,  int p_224646_,  BlockState p_224647_)`
- `protected BlockState getBand(int p_189931_,  int p_189932_,  int p_189933_)`

## ThreadSafeLegacyRandomSource

*class* `net.minecraft.world.level.levelgen.ThreadSafeLegacyRandomSource`

### Fields
- `private static final int MODULUS_BITS` (= 48, deprecated)
- `private static final long MODULUS_MASK` (= 281474976710655L, deprecated)
- `private static final long MULTIPLIER` (= 25214903917L, deprecated)
- `private static final long INCREMENT` (= 11L, deprecated)
- `private final AtomicLong seed` (deprecated)
- `private final MarsagliaPolarGaussian gaussianSource` (deprecated)

### Inherited fields
- from `net.minecraft.world.level.levelgen.BitRandomSource`: `DOUBLE_MULTIPLIER`, `FLOAT_MULTIPLIER`
- from `net.minecraft.util.RandomSource`: `GAUSSIAN_SPREAD_FACTOR`

### Methods
- `public RandomSource fork()` (deprecated)
- `public PositionalRandomFactory forkPositional()` (deprecated)
- `public void setSeed(long p_224666_)` (deprecated)
- `public int next(int p_224668_)` (deprecated)
- `public double nextGaussian()` (deprecated)

### Inherited methods
- from `net.minecraft.world.level.levelgen.BitRandomSource`: `nextBoolean`, `nextDouble`, `nextFloat`, `nextInt`, `nextInt`, `nextLong`
- from `net.minecraft.util.RandomSource`: `consumeCount`, `nextInt`, `nextIntBetweenInclusive`, `triangle`

## VerticalAnchor

*interface* `net.minecraft.world.level.levelgen.VerticalAnchor`

### Fields
- `static final com.mojang.serialization.Codec<VerticalAnchor> CODEC`
- `static final VerticalAnchor BOTTOM`
- `static final VerticalAnchor TOP`

### Methods
- `static VerticalAnchor absolute(int p_158923_)`
- `static VerticalAnchor aboveBottom(int p_158931_)`
- `static VerticalAnchor belowTop(int p_158936_)`
- `static VerticalAnchor bottom()`
- `static VerticalAnchor top()`
- `private static VerticalAnchor merge(com.mojang.datafixers.util.Either<VerticalAnchor.Absolute,com.mojang.datafixers.util.Either<VerticalAnchor.AboveBottom,VerticalAnchor.BelowTop>> p_158925_)`
- `private static com.mojang.datafixers.util.Either<VerticalAnchor.Absolute,com.mojang.datafixers.util.Either<VerticalAnchor.AboveBottom,VerticalAnchor.BelowTop>> split(VerticalAnchor p_158927_)`
- `int resolveY(WorldGenerationContext p_158928_)`

## VerticalAnchor.AboveBottom

*record* `net.minecraft.world.level.levelgen.VerticalAnchor.AboveBottom`

Enclosing interface: VerticalAnchor

### Fields
- `private final int offset`
  The field for the offset record component.
- `public static final com.mojang.serialization.Codec<VerticalAnchor.AboveBottom> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.VerticalAnchor`: `BOTTOM`, `TOP`

### Methods
- `public int resolveY(WorldGenerationContext p_158942_)`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int offset()`
  Returns the value of the offset record component.
  - returns: the value of the offset record component

## VerticalAnchor.Absolute

*record* `net.minecraft.world.level.levelgen.VerticalAnchor.Absolute`

Enclosing interface: VerticalAnchor

### Fields
- `private final int y`
  The field for the y record component.
- `public static final com.mojang.serialization.Codec<VerticalAnchor.Absolute> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.VerticalAnchor`: `BOTTOM`, `TOP`

### Methods
- `public int resolveY(WorldGenerationContext p_158949_)`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int y()`
  Returns the value of the y record component.
  - returns: the value of the y record component

## VerticalAnchor.BelowTop

*record* `net.minecraft.world.level.levelgen.VerticalAnchor.BelowTop`

Enclosing interface: VerticalAnchor

### Fields
- `private final int offset`
  The field for the offset record component.
- `public static final com.mojang.serialization.Codec<VerticalAnchor.BelowTop> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.VerticalAnchor`: `BOTTOM`, `TOP`

### Methods
- `public int resolveY(WorldGenerationContext p_158956_)`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int offset()`
  Returns the value of the offset record component.
  - returns: the value of the offset record component

## WorldDimensions

*record* `net.minecraft.world.level.levelgen.WorldDimensions`

### Fields
- `private final Registry<LevelStem> dimensions`
  The field for the dimensions record component.
- `public static final com.mojang.serialization.MapCodec<WorldDimensions> CODEC`
- `private static final Set<ResourceKey<LevelStem>> BUILTIN_ORDER`
- `private static final int VANILLA_DIMENSION_COUNT`

### Methods
- `public static Stream<ResourceKey<LevelStem>> keysInOrder(Stream<ResourceKey<LevelStem>> p_251309_)`
- `public WorldDimensions replaceOverworldGenerator(RegistryAccess p_251390_,  ChunkGenerator p_248755_)`
- `public static Registry<LevelStem> withOverworld(Registry<DimensionType> p_248853_,  Registry<LevelStem> p_251908_,  ChunkGenerator p_251737_)`
- `public static Registry<LevelStem> withOverworld(Registry<LevelStem> p_248907_,  Holder<DimensionType> p_251895_,  ChunkGenerator p_250220_)`
- `public ChunkGenerator overworld()`
- `public Optional<LevelStem> get(ResourceKey<LevelStem> p_250824_)`
- `public com.google.common.collect.ImmutableSet<ResourceKey<Level>> levels()`
- `public boolean isDebug()`
- `private static PrimaryLevelData.SpecialWorldProperty specialWorldProperty(Registry<LevelStem> p_251549_)`
- `static com.mojang.serialization.Lifecycle checkStability(ResourceKey<LevelStem> p_250764_,  LevelStem p_248865_)`
- `private static boolean isVanillaLike(ResourceKey<LevelStem> p_250556_,  LevelStem p_250034_)`
- `private static boolean isStableOverworld(LevelStem p_250762_)`
- `private static boolean isStableNether(LevelStem p_250497_)`
- `private static boolean isStableEnd(LevelStem p_250720_)`
- `public WorldDimensions.Complete bake(Registry<LevelStem> p_248787_)`
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
- `public Registry<LevelStem> dimensions()`
  Returns the value of the dimensions record component.
  - returns: the value of the dimensions record component

## WorldDimensions.Complete

*record* `net.minecraft.world.level.levelgen.WorldDimensions.Complete`

Enclosing class: WorldDimensions

### Fields
- `private final Registry<LevelStem> dimensions`
  The field for the dimensions record component.
- `private final PrimaryLevelData.SpecialWorldProperty specialWorldProperty`
  The field for the specialWorldProperty record component.

### Methods
- `public com.mojang.serialization.Lifecycle lifecycle()`
- `public RegistryAccess.Frozen dimensionsRegistryAccess()`
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
- `public Registry<LevelStem> dimensions()`
  Returns the value of the dimensions record component.
  - returns: the value of the dimensions record component
- `public PrimaryLevelData.SpecialWorldProperty specialWorldProperty()`
  Returns the value of the specialWorldProperty record component.
  - returns: the value of the specialWorldProperty record component

## WorldGenerationContext

*class* `net.minecraft.world.level.levelgen.WorldGenerationContext`

### Fields
- `private final int minY`
- `private final int height`

### Methods
- `public int getMinGenY()`
- `public int getGenDepth()`

## WorldgenRandom

*class* `net.minecraft.world.level.levelgen.WorldgenRandom`

### Fields
- `private final RandomSource randomSource`
- `private int count`

### Inherited fields
- from `net.minecraft.world.level.levelgen.BitRandomSource`: `DOUBLE_MULTIPLIER`, `FLOAT_MULTIPLIER`
- from `net.minecraft.util.RandomSource`: `GAUSSIAN_SPREAD_FACTOR`

### Methods
- `public int getCount()`
- `public RandomSource fork()`
- `public PositionalRandomFactory forkPositional()`
- `public int next(int p_64708_)`
- `public void setSeed(long p_190073_)`
- `public long setDecorationSeed(long p_64691_,  int p_64692_,  int p_64693_)`
- `public void setFeatureSeed(long p_190065_,  int p_190066_,  int p_190067_)`
- `public void setLargeFeatureSeed(long p_190069_,  int p_190070_,  int p_190071_)`
- `public void setLargeFeatureWithSalt(long p_190059_,  int p_190060_,  int p_190061_,  int p_190062_)`
- `public static RandomSource seedSlimeChunk(int p_224682_,  int p_224683_,  long p_224684_,  long p_224685_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.LegacyRandomSource`: `nextGaussian`
- from `net.minecraft.world.level.levelgen.BitRandomSource`: `nextBoolean`, `nextDouble`, `nextFloat`, `nextInt`, `nextInt`, `nextLong`
- from `net.minecraft.util.RandomSource`: `consumeCount`, `nextInt`, `nextIntBetweenInclusive`, `triangle`

## WorldGenSettings

*record* `net.minecraft.world.level.levelgen.WorldGenSettings`

### Fields
- `private final WorldOptions options`
  The field for the options record component.
- `private final WorldDimensions dimensions`
  The field for the dimensions record component.
- `public static final com.mojang.serialization.Codec<WorldGenSettings> CODEC`

### Methods
- `public static <T> com.mojang.serialization.DataResult<T> encode(com.mojang.serialization.DynamicOps<T> p_250104_,  WorldOptions p_250578_,  WorldDimensions p_249244_)`
- `public static <T> com.mojang.serialization.DataResult<T> encode(com.mojang.serialization.DynamicOps<T> p_250917_,  WorldOptions p_250366_,  RegistryAccess p_251515_)`
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
- `public WorldOptions options()`
  Returns the value of the options record component.
  - returns: the value of the options record component
- `public WorldDimensions dimensions()`
  Returns the value of the dimensions record component.
  - returns: the value of the dimensions record component

## WorldOptions

*class* `net.minecraft.world.level.levelgen.WorldOptions`

### Fields
- `public static final com.mojang.serialization.MapCodec<WorldOptions> CODEC`
- `public static final WorldOptions DEMO_OPTIONS`
- `private final long seed`
- `private final boolean generateStructures`
- `private final boolean generateBonusChest`
- `private final Optional<String> legacyCustomOptions`

### Methods
- `public static WorldOptions defaultWithRandomSeed()`
- `public long seed()`
- `public boolean generateStructures()`
- `public boolean generateBonusChest()`
- `public boolean isOldCustomizedWorld()`
- `public WorldOptions withBonusChest(boolean p_251744_)`
- `public WorldOptions withStructures(boolean p_251426_)`
- `public WorldOptions withSeed(OptionalLong p_261572_)`
- `public static OptionalLong parseSeed(String p_262144_)`
- `public static long randomSeed()`

## Xoroshiro128PlusPlus

*class* `net.minecraft.world.level.levelgen.Xoroshiro128PlusPlus`

### Fields
- `private long seedLo`
- `private long seedHi`
- `public static final com.mojang.serialization.Codec<Xoroshiro128PlusPlus> CODEC`

### Methods
- `public long nextLong()`

## XoroshiroRandomSource

*class* `net.minecraft.world.level.levelgen.XoroshiroRandomSource`

### Fields
- `private static final float FLOAT_UNIT` (= 5.9604644775390625E-8f)
- `private static final double DOUBLE_UNIT` (= 1.1102230246251565E-16)
- `public static final com.mojang.serialization.Codec<XoroshiroRandomSource> CODEC`
- `private Xoroshiro128PlusPlus randomNumberGenerator`
- `private final MarsagliaPolarGaussian gaussianSource`

### Inherited fields
- from `net.minecraft.util.RandomSource`: `GAUSSIAN_SPREAD_FACTOR`

### Methods
- `public RandomSource fork()`
- `public PositionalRandomFactory forkPositional()`
- `public void setSeed(long p_190121_)`
- `public int nextInt()`
- `public int nextInt(int p_190118_)`
- `public long nextLong()`
- `public boolean nextBoolean()`
- `public float nextFloat()`
- `public double nextDouble()`
- `public double nextGaussian()`
- `public void consumeCount(int p_190111_)`
- `private long nextBits(int p_190108_)`

### Inherited methods
- from `net.minecraft.util.RandomSource`: `nextInt`, `nextIntBetweenInclusive`, `triangle`

## XoroshiroRandomSource.XoroshiroPositionalRandomFactory

*class* `net.minecraft.world.level.levelgen.XoroshiroRandomSource.XoroshiroPositionalRandomFactory`

Enclosing class: XoroshiroRandomSource

### Fields
- `private final long seedLo`
- `private final long seedHi`

### Methods
- `public RandomSource at(int p_224691_,  int p_224692_,  int p_224693_)`
- `public RandomSource fromHashOf(String p_224695_)`
- `public void parityConfigString(StringBuilder p_190136_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.PositionalRandomFactory`: `at`, `fromHashOf`
