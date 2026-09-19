# net.minecraft.world.level.levelgen.blending

- [Blender](#blender)
- [Blender.BlendingOutput](#blender.blendingoutput)
- [Blender.CellValueGetter](#blender.cellvaluegetter)
- [Blender.DistanceGetter](#blender.distancegetter)
- [BlendingData](#blendingdata)
- [BlendingData.BiomeConsumer](#blendingdata.biomeconsumer)
- [BlendingData.DensityConsumer](#blendingdata.densityconsumer)
- [BlendingData.HeightConsumer](#blendingdata.heightconsumer)
## Blender

*class* `net.minecraft.world.level.levelgen.blending.Blender`

### Fields
- `private static final Blender EMPTY`
- `private static final NormalNoise SHIFT_NOISE`
- `private static final int HEIGHT_BLENDING_RANGE_CELLS`
- `private static final int HEIGHT_BLENDING_RANGE_CHUNKS`
- `private static final int DENSITY_BLENDING_RANGE_CELLS` (= 2)
- `private static final int DENSITY_BLENDING_RANGE_CHUNKS`
- `private static final double OLD_CHUNK_XZ_RADIUS` (= 8.0)
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectOpenHashMap<BlendingData> heightAndBiomeBlendingData`
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectOpenHashMap<BlendingData> densityBlendingData`

### Methods
- `public static Blender empty()`
- `public static Blender of(@Nullable  WorldGenRegion p_190203_)`
- `public Blender.BlendingOutput blendOffsetAndFactor(int p_209719_,  int p_209720_)`
- `private static double heightToOffset(double p_190155_)`
- `public double blendDensity(DensityFunction.FunctionContext p_209721_,  double p_209722_)`
- `private double getBlendingDataValue(int p_190175_,  int p_190176_,  int p_190177_,  Blender.CellValueGetter p_190178_)`
- `private double getBlendingDataValue(Blender.CellValueGetter p_190212_,  int p_190213_,  int p_190214_,  int p_190215_,  int p_190216_,  int p_190217_)`
- `public BiomeResolver getBiomeResolver(BiomeResolver p_190204_)`
- `@Nullable private Holder<Biome> blendBiome(int p_224707_,  int p_224708_,  int p_224709_)`
- `public static void generateBorderTicks(WorldGenRegion p_197032_,  ChunkAccess p_197033_)`
- `private static void generateBorderTick(ChunkAccess p_197041_,  BlockPos p_197042_)`
- `public static void addAroundOldChunksCarvingMaskFilter(WorldGenLevel p_197035_,  ProtoChunk p_197036_)`
- `public static Blender.DistanceGetter makeOldChunkDistanceGetter(@Nullable  BlendingData p_224727_,  Map<Direction8,BlendingData> p_224728_)`
- `private static Blender.DistanceGetter makeOffsetOldChunkDistanceGetter(@Nullable  Direction8 p_224730_,  BlendingData p_224731_)`
- `private static double distanceToCube(double p_197025_,  double p_197026_,  double p_197027_,  double p_197028_,  double p_197029_,  double p_197030_)`

## Blender.BlendingOutput

*record* `net.minecraft.world.level.levelgen.blending.Blender.BlendingOutput`

Enclosing class: Blender

### Fields
- `private final double alpha`
  The field for the alpha record component.
- `private final double blendingOffset`
  The field for the blendingOffset record component.

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
- `public double alpha()`
  Returns the value of the alpha record component.
  - returns: the value of the alpha record component
- `public double blendingOffset()`
  Returns the value of the blendingOffset record component.
  - returns: the value of the blendingOffset record component

## Blender.CellValueGetter

*interface* `net.minecraft.world.level.levelgen.blending.Blender.CellValueGetter`

Enclosing class: Blender

### Methods
- `double get(BlendingData p_190234_,  int p_190235_,  int p_190236_,  int p_190237_)`

## Blender.DistanceGetter

*interface* `net.minecraft.world.level.levelgen.blending.Blender.DistanceGetter`

Enclosing class: Blender

### Methods
- `double getDistance(double p_197062_,  double p_197063_,  double p_197064_)`

## BlendingData

*class* `net.minecraft.world.level.levelgen.blending.BlendingData`

### Fields
- `private static final double BLENDING_DENSITY_FACTOR` (= 0.1)
- `protected static final int CELL_WIDTH` (= 4)
- `protected static final int CELL_HEIGHT` (= 8)
- `protected static final int CELL_RATIO` (= 2)
- `private static final double SOLID_DENSITY` (= 1.0)
- `private static final double AIR_DENSITY` (= -1.0)
- `private static final int CELLS_PER_SECTION_Y` (= 2)
- `private static final int QUARTS_PER_SECTION`
- `private static final int CELL_HORIZONTAL_MAX_INDEX_INSIDE`
- `private static final int CELL_HORIZONTAL_MAX_INDEX_OUTSIDE`
- `private static final int CELL_COLUMN_INSIDE_COUNT`
- `private static final int CELL_COLUMN_OUTSIDE_COUNT`
- `private static final int CELL_COLUMN_COUNT`
- `private final LevelHeightAccessor areaWithOldGeneration`
- `private static final List<Block> SURFACE_BLOCKS`
- `protected static final double NO_VALUE` (= 1.7976931348623157E308)
- `private boolean hasCalculatedData`
- `private final double[] heights`
- `private final List<List<Holder<Biome>>> biomes`
- `private final transient double[][] densities`
- `private static final com.mojang.serialization.Codec<double[]> DOUBLE_ARRAY_CODEC`
- `public static final com.mojang.serialization.Codec<BlendingData> CODEC`

### Methods
- `private static com.mojang.serialization.DataResult<BlendingData> validateArraySize(BlendingData p_190321_)`
- `@Nullable public static BlendingData getOrUpdateBlendingData(WorldGenRegion p_190305_,  int p_190306_,  int p_190307_)`
- `public static Set<Direction8> sideByGenerationAge(WorldGenLevel p_197066_,  int p_197067_,  int p_197068_,  boolean p_197069_)`
- `private void calculateData(ChunkAccess p_190318_,  Set<Direction8> p_190319_)`
- `private void addValuesForColumn(int p_190300_,  ChunkAccess p_190301_,  int p_190302_,  int p_190303_)`
- `private int getHeightAtXZ(ChunkAccess p_190311_,  int p_190312_,  int p_190313_)`
- `private static double read1(ChunkAccess p_198298_,  BlockPos.MutableBlockPos p_198299_)`
- `private static double read7(ChunkAccess p_198301_,  BlockPos.MutableBlockPos p_198302_)`
- `private double[] getDensityColumn(ChunkAccess p_198293_,  int p_198294_,  int p_198295_,  int p_198296_)`
- `private List<Holder<Biome>> getBiomeColumn(ChunkAccess p_224758_,  int p_224759_,  int p_224760_)`
- `private static boolean isGround(ChunkAccess p_190315_,  BlockPos p_190316_)`
- `protected double getHeight(int p_190286_,  int p_190287_,  int p_190288_)`
- `private double getDensity(@Nullable  double[] p_190325_,  int p_190326_)`
- `protected double getDensity(int p_190334_,  int p_190335_,  int p_190336_)`
- `protected void iterateBiomes(int p_224749_,  int p_224750_,  int p_224751_,  BlendingData.BiomeConsumer p_224752_)`
- `protected void iterateHeights(int p_190296_,  int p_190297_,  BlendingData.HeightConsumer p_190298_)`
- `protected void iterateDensities(int p_190290_,  int p_190291_,  int p_190292_,  int p_190293_,  BlendingData.DensityConsumer p_190294_)`
- `private int cellCountPerColumn()`
- `private int quartCountPerColumn()`
- `private int getColumnMinY()`
- `private int getMinY()`
- `private int getCellYIndex(int p_224747_)`
- `private static int getInsideIndex(int p_190331_,  int p_190332_)`
- `private static int getOutsideIndex(int p_190351_,  int p_190352_)`
- `private static int getX(int p_190349_)`
- `private static int getZ(int p_190355_)`
- `private static int zeroIfNegative(int p_190357_)`
- `public LevelHeightAccessor getAreaWithOldGeneration()`

## BlendingData.BiomeConsumer

*interface* `net.minecraft.world.level.levelgen.blending.BlendingData.BiomeConsumer`

Enclosing class: BlendingData

### Methods
- `void consume(int p_204674_,  int p_204675_,  Holder<Biome> p_204676_)`

## BlendingData.DensityConsumer

*interface* `net.minecraft.world.level.levelgen.blending.BlendingData.DensityConsumer`

Enclosing class: BlendingData

### Methods
- `void consume(int p_190362_,  int p_190363_,  int p_190364_,  double p_190365_)`

## BlendingData.HeightConsumer

*interface* `net.minecraft.world.level.levelgen.blending.BlendingData.HeightConsumer`

Enclosing class: BlendingData

### Methods
- `void consume(int p_190367_,  int p_190368_,  double p_190369_)`
