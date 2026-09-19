# net.minecraft.world.level.levelgen.carver

- [CanyonCarverConfiguration](#canyoncarverconfiguration)
- [CanyonCarverConfiguration.CanyonShapeConfiguration](#canyoncarverconfiguration.canyonshapeconfiguration)
- [CanyonWorldCarver](#canyonworldcarver)
- [CarverConfiguration](#carverconfiguration)
- [CarverDebugSettings](#carverdebugsettings)
- [CarvingContext](#carvingcontext)
- [CaveCarverConfiguration](#cavecarverconfiguration)
- [CaveWorldCarver](#caveworldcarver)
- [ConfiguredWorldCarver](#configuredworldcarver)
- [NetherWorldCarver](#netherworldcarver)
- [WorldCarver](#worldcarver)
- [WorldCarver.CarveSkipChecker](#worldcarver.carveskipchecker)
## CanyonCarverConfiguration

*class* `net.minecraft.world.level.levelgen.carver.CanyonCarverConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<CanyonCarverConfiguration> CODEC`
- `public final FloatProvider verticalRotation`
- `public final CanyonCarverConfiguration.CanyonShapeConfiguration shape`

### Inherited fields
- from `net.minecraft.world.level.levelgen.carver.CarverConfiguration`: `debugSettings`, `lavaLevel`, `replaceable`, `y`, `yScale`
- from `net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration`: `probability`
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## CanyonCarverConfiguration.CanyonShapeConfiguration

*class* `net.minecraft.world.level.levelgen.carver.CanyonCarverConfiguration.CanyonShapeConfiguration`

Enclosing class: CanyonCarverConfiguration

### Fields
- `public static final com.mojang.serialization.Codec<CanyonCarverConfiguration.CanyonShapeConfiguration> CODEC`
- `public final FloatProvider distanceFactor`
- `public final FloatProvider thickness`
- `public final int widthSmoothness`
- `public final FloatProvider horizontalRadiusFactor`
- `public final float verticalRadiusDefaultFactor`
- `public final float verticalRadiusCenterFactor`

## CanyonWorldCarver

*class* `net.minecraft.world.level.levelgen.carver.CanyonWorldCarver`

### Inherited fields
- from `net.minecraft.world.level.levelgen.carver.WorldCarver`: `AIR`, `CANYON`, `CAVE`, `CAVE_AIR`, `LAVA`, `liquids`, `NETHER_CAVE`, `WATER`

### Methods
- `public boolean isStartChunk(CanyonCarverConfiguration p_224797_,  RandomSource p_224798_)`
- `public boolean carve(CarvingContext p_224813_,  CanyonCarverConfiguration p_224814_,  ChunkAccess p_224815_,  Function<BlockPos,Holder<Biome>> p_224816_,  RandomSource p_224817_,  Aquifer p_224818_,  ChunkPos p_224819_,  CarvingMask p_224820_)`
- `private void doCarve(CarvingContext p_190594_,  CanyonCarverConfiguration p_190595_,  ChunkAccess p_190596_,  Function<BlockPos,Holder<Biome>> p_190597_,  long p_190598_,  Aquifer p_190599_,  double p_190600_,  double p_190601_,  double p_190602_,  float p_190603_,  float p_190604_,  float p_190605_,  int p_190606_,  int p_190607_,  double p_190608_,  CarvingMask p_190609_)`
- `private float[] initWidthFactors(CarvingContext p_224809_,  CanyonCarverConfiguration p_224810_,  RandomSource p_224811_)`
- `private double updateVerticalRadius(CanyonCarverConfiguration p_224800_,  RandomSource p_224801_,  double p_224802_,  float p_224803_,  float p_224804_)`
- `private boolean shouldSkip(CarvingContext p_159074_,  float[] p_159075_,  double p_159076_,  double p_159077_,  double p_159078_,  int p_159079_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.carver.WorldCarver`: `canReach`, `canReplaceBlock`, `carveBlock`, `carveEllipsoid`, `configured`, `configuredCodec`, `getRange`

## CarverConfiguration

*class* `net.minecraft.world.level.levelgen.carver.CarverConfiguration`

### Fields
- `public static final com.mojang.serialization.MapCodec<CarverConfiguration> CODEC`
- `public final HeightProvider y`
- `public final FloatProvider yScale`
- `public final VerticalAnchor lavaLevel`
- `public final CarverDebugSettings debugSettings`
- `public final HolderSet<Block> replaceable`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration`: `probability`
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## CarverDebugSettings

*class* `net.minecraft.world.level.levelgen.carver.CarverDebugSettings`

### Fields
- `public static final CarverDebugSettings DEFAULT`
- `public static final com.mojang.serialization.Codec<CarverDebugSettings> CODEC`
- `private final boolean debugMode`
- `private final BlockState airState`
- `private final BlockState waterState`
- `private final BlockState lavaState`
- `private final BlockState barrierState`

### Methods
- `public static CarverDebugSettings of(boolean p_159140_,  BlockState p_159141_,  BlockState p_159142_,  BlockState p_159143_,  BlockState p_159144_)`
- `public static CarverDebugSettings of(BlockState p_159130_,  BlockState p_159131_,  BlockState p_159132_,  BlockState p_159133_)`
- `public static CarverDebugSettings of(boolean p_159137_,  BlockState p_159138_)`
- `public boolean isDebugMode()`
- `public BlockState getAirState()`
- `public BlockState getWaterState()`
- `public BlockState getLavaState()`
- `public BlockState getBarrierState()`

## CarvingContext

*class* `net.minecraft.world.level.levelgen.carver.CarvingContext`

### Fields
- `private final RegistryAccess registryAccess`
- `private final NoiseChunk noiseChunk`
- `private final RandomState randomState`
- `private final SurfaceRules.RuleSource surfaceRule`

### Methods
- `@Deprecated public Optional<BlockState> topMaterial(Function<BlockPos,Holder<Biome>> p_190647_,  ChunkAccess p_190648_,  BlockPos p_190649_,  boolean p_190650_)` (deprecated)
- `@Deprecated public RegistryAccess registryAccess()` (deprecated)
- `public RandomState randomState()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.WorldGenerationContext`: `getGenDepth`, `getMinGenY`

## CaveCarverConfiguration

*class* `net.minecraft.world.level.levelgen.carver.CaveCarverConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<CaveCarverConfiguration> CODEC`
- `public final FloatProvider horizontalRadiusMultiplier`
- `public final FloatProvider verticalRadiusMultiplier`
- `final FloatProvider floorLevel`

### Inherited fields
- from `net.minecraft.world.level.levelgen.carver.CarverConfiguration`: `debugSettings`, `lavaLevel`, `replaceable`, `y`, `yScale`
- from `net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration`: `probability`
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## CaveWorldCarver

*class* `net.minecraft.world.level.levelgen.carver.CaveWorldCarver`

### Inherited fields
- from `net.minecraft.world.level.levelgen.carver.WorldCarver`: `AIR`, `CANYON`, `CAVE`, `CAVE_AIR`, `LAVA`, `liquids`, `NETHER_CAVE`, `WATER`

### Methods
- `public boolean isStartChunk(CaveCarverConfiguration p_224894_,  RandomSource p_224895_)`
- `public boolean carve(CarvingContext p_224885_,  CaveCarverConfiguration p_224886_,  ChunkAccess p_224887_,  Function<BlockPos,Holder<Biome>> p_224888_,  RandomSource p_224889_,  Aquifer p_224890_,  ChunkPos p_224891_,  CarvingMask p_224892_)`
- `protected int getCaveBound()`
- `protected float getThickness(RandomSource p_224871_)`
- `protected double getYScale()`
- `protected void createRoom(CarvingContext p_190691_,  CaveCarverConfiguration p_190692_,  ChunkAccess p_190693_,  Function<BlockPos,Holder<Biome>> p_190694_,  Aquifer p_190695_,  double p_190696_,  double p_190697_,  double p_190698_,  float p_190699_,  double p_190700_,  CarvingMask p_190701_,  WorldCarver.CarveSkipChecker p_190702_)`
- `protected void createTunnel(CarvingContext p_190671_,  CaveCarverConfiguration p_190672_,  ChunkAccess p_190673_,  Function<BlockPos,Holder<Biome>> p_190674_,  long p_190675_,  Aquifer p_190676_,  double p_190677_,  double p_190678_,  double p_190679_,  double p_190680_,  double p_190681_,  float p_190682_,  float p_190683_,  float p_190684_,  int p_190685_,  int p_190686_,  double p_190687_,  CarvingMask p_190688_,  WorldCarver.CarveSkipChecker p_190689_)`
- `private static boolean shouldSkip(double p_159196_,  double p_159197_,  double p_159198_,  double p_159199_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.carver.WorldCarver`: `canReach`, `canReplaceBlock`, `carveBlock`, `carveEllipsoid`, `configured`, `configuredCodec`, `getRange`

## ConfiguredWorldCarver

*record* `net.minecraft.world.level.levelgen.carver.ConfiguredWorldCarver`

### Fields
- `private final WorldCarver<WC extends CarverConfiguration> worldCarver`
  The field for the worldCarver record component.
- `private final WC extends CarverConfiguration config`
  The field for the config record component.
- `public static final com.mojang.serialization.Codec<ConfiguredWorldCarver<?>> DIRECT_CODEC`
- `public static final com.mojang.serialization.Codec<Holder<ConfiguredWorldCarver<?>>> CODEC`
- `public static final com.mojang.serialization.Codec<HolderSet<ConfiguredWorldCarver<?>>> LIST_CODEC`

### Methods
- `public boolean isStartChunk(RandomSource p_224897_)`
- `public boolean carve(CarvingContext p_224899_,  ChunkAccess p_224900_,  Function<BlockPos,Holder<Biome>> p_224901_,  RandomSource p_224902_,  Aquifer p_224903_,  ChunkPos p_224904_,  CarvingMask p_224905_)`
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
- `public WorldCarver<WC> worldCarver()`
  Returns the value of the worldCarver record component.
  - returns: the value of the worldCarver record component
- `public WC config()`
  Returns the value of the config record component.
  - returns: the value of the config record component

## NetherWorldCarver

*class* `net.minecraft.world.level.levelgen.carver.NetherWorldCarver`

### Inherited fields
- from `net.minecraft.world.level.levelgen.carver.WorldCarver`: `AIR`, `CANYON`, `CAVE`, `CAVE_AIR`, `LAVA`, `liquids`, `NETHER_CAVE`, `WATER`

### Methods
- `protected int getCaveBound()`
- `protected float getThickness(RandomSource p_224907_)`
- `protected double getYScale()`
- `protected boolean carveBlock(CarvingContext p_190731_,  CaveCarverConfiguration p_190732_,  ChunkAccess p_190733_,  Function<BlockPos,Holder<Biome>> p_190734_,  CarvingMask p_190735_,  BlockPos.MutableBlockPos p_190736_,  BlockPos.MutableBlockPos p_190737_,  Aquifer p_190738_,  org.apache.commons.lang3.mutable.MutableBoolean p_190739_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.carver.CaveWorldCarver`: `carve`, `createRoom`, `createTunnel`, `isStartChunk`
- from `net.minecraft.world.level.levelgen.carver.WorldCarver`: `canReach`, `canReplaceBlock`, `carveEllipsoid`, `configured`, `configuredCodec`, `getRange`

## WorldCarver

*class* `net.minecraft.world.level.levelgen.carver.WorldCarver`

### Fields
- `public static final WorldCarver<CaveCarverConfiguration> CAVE`
- `public static final WorldCarver<CaveCarverConfiguration> NETHER_CAVE`
- `public static final WorldCarver<CanyonCarverConfiguration> CANYON`
- `protected static final BlockState AIR`
- `protected static final BlockState CAVE_AIR`
- `protected static final FluidState WATER`
- `protected static final FluidState LAVA`
- `protected Set<Fluid> liquids`
- `private final com.mojang.serialization.Codec<ConfiguredWorldCarver<C extends CarverConfiguration>> configuredCodec`

### Methods
- `private static <C extends CarverConfiguration, F extends WorldCarver<C>> F register(String p_65066_,  F p_65067_)`
- `public ConfiguredWorldCarver<C> configured(C p_65064_)`
- `public com.mojang.serialization.Codec<ConfiguredWorldCarver<C>> configuredCodec()`
- `public int getRange()`
- `protected boolean carveEllipsoid(CarvingContext p_190754_,  C p_190755_,  ChunkAccess p_190756_,  Function<BlockPos,Holder<Biome>> p_190757_,  Aquifer p_190758_,  double p_190759_,  double p_190760_,  double p_190761_,  double p_190762_,  double p_190763_,  CarvingMask p_190764_,  WorldCarver.CarveSkipChecker p_190765_)`
- `protected boolean carveBlock(CarvingContext p_190744_,  C p_190745_,  ChunkAccess p_190746_,  Function<BlockPos,Holder<Biome>> p_190747_,  CarvingMask p_190748_,  BlockPos.MutableBlockPos p_190749_,  BlockPos.MutableBlockPos p_190750_,  Aquifer p_190751_,  org.apache.commons.lang3.mutable.MutableBoolean p_190752_)`
- `@Nullable private BlockState getCarveState(CarvingContext p_159419_,  C p_159420_,  BlockPos p_159421_,  Aquifer p_159422_)`
- `private static BlockState getDebugState(CarverConfiguration p_159382_,  BlockState p_159383_)`
- `public abstract boolean carve(CarvingContext p_224913_,  C p_224914_,  ChunkAccess p_224915_,  Function<BlockPos,Holder<Biome>> p_224916_,  RandomSource p_224917_,  Aquifer p_224918_,  ChunkPos p_224919_,  CarvingMask p_224920_)`
- `public abstract boolean isStartChunk(C p_224908_,  RandomSource p_224909_)`
- `protected boolean canReplaceBlock(C p_224911_,  BlockState p_224912_)`
- `protected static boolean canReach(ChunkPos p_159368_,  double p_159369_,  double p_159370_,  int p_159371_,  int p_159372_,  float p_159373_)`
- `private static boolean isDebugEnabled(CarverConfiguration p_159424_)`

## WorldCarver.CarveSkipChecker

*interface* `net.minecraft.world.level.levelgen.carver.WorldCarver.CarveSkipChecker`

Enclosing class: WorldCarver<C extends CarverConfiguration>

### Methods
- `boolean shouldSkip(CarvingContext p_159426_,  double p_159427_,  double p_159428_,  double p_159429_,  int p_159430_)`
