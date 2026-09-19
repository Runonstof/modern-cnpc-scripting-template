# net.minecraft.world.level.levelgen.feature.trunkplacers

- [BendingTrunkPlacer](#bendingtrunkplacer)
- [CherryTrunkPlacer](#cherrytrunkplacer)
- [DarkOakTrunkPlacer](#darkoaktrunkplacer)
- [FancyTrunkPlacer](#fancytrunkplacer)
- [FancyTrunkPlacer.FoliageCoords](#fancytrunkplacer.foliagecoords)
- [ForkingTrunkPlacer](#forkingtrunkplacer)
- [GiantTrunkPlacer](#gianttrunkplacer)
- [MegaJungleTrunkPlacer](#megajungletrunkplacer)
- [StraightTrunkPlacer](#straighttrunkplacer)
- [TrunkPlacer](#trunkplacer)
- [TrunkPlacerType](#trunkplacertype)
- [UpwardsBranchingTrunkPlacer](#upwardsbranchingtrunkplacer)
## BendingTrunkPlacer

*class* `net.minecraft.world.level.levelgen.feature.trunkplacers.BendingTrunkPlacer`

### Fields
- `public static final com.mojang.serialization.Codec<BendingTrunkPlacer> CODEC`
- `private final int minHeightForLeaves`
- `private final IntProvider bendLength`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer`: `baseHeight`, `heightRandA`, `heightRandB`, `MAX_HEIGHT`

### Methods
- `protected TrunkPlacerType<?> type()`
- `public List<FoliagePlacer.FoliageAttachment> placeTrunk(LevelSimulatedReader p_226079_,  BiConsumer<BlockPos,BlockState> p_226080_,  RandomSource p_226081_,  int p_226082_,  BlockPos p_226083_,  TreeConfiguration p_226084_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer`: `getTreeHeight`, `isFree`, `placeLog`, `placeLog`, `placeLogIfFree`, `setDirtAt`, `trunkPlacerParts`, `validTreePos`

## CherryTrunkPlacer

*class* `net.minecraft.world.level.levelgen.feature.trunkplacers.CherryTrunkPlacer`

### Fields
- `private static final com.mojang.serialization.Codec<UniformInt> BRANCH_START_CODEC`
- `public static final com.mojang.serialization.Codec<CherryTrunkPlacer> CODEC`
- `private final IntProvider branchCount`
- `private final IntProvider branchHorizontalLength`
- `private final UniformInt branchStartOffsetFromTop`
- `private final UniformInt secondBranchStartOffsetFromTop`
- `private final IntProvider branchEndOffsetFromTop`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer`: `baseHeight`, `heightRandA`, `heightRandB`, `MAX_HEIGHT`

### Methods
- `protected TrunkPlacerType<?> type()`
- `public List<FoliagePlacer.FoliageAttachment> placeTrunk(LevelSimulatedReader p_272827_,  BiConsumer<BlockPos,BlockState> p_272650_,  RandomSource p_272993_,  int p_272990_,  BlockPos p_273471_,  TreeConfiguration p_273355_)`
- `private FoliagePlacer.FoliageAttachment generateBranch(LevelSimulatedReader p_272736_,  BiConsumer<BlockPos,BlockState> p_273092_,  RandomSource p_273449_,  int p_272659_,  BlockPos p_273743_,  TreeConfiguration p_273027_,  Function<BlockState,BlockState> p_273558_,  Direction p_273712_,  int p_272980_,  boolean p_272719_,  BlockPos.MutableBlockPos p_273496_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer`: `getTreeHeight`, `isFree`, `placeLog`, `placeLog`, `placeLogIfFree`, `setDirtAt`, `trunkPlacerParts`, `validTreePos`

## DarkOakTrunkPlacer

*class* `net.minecraft.world.level.levelgen.feature.trunkplacers.DarkOakTrunkPlacer`

### Fields
- `public static final com.mojang.serialization.Codec<DarkOakTrunkPlacer> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer`: `baseHeight`, `heightRandA`, `heightRandB`, `MAX_HEIGHT`

### Methods
- `protected TrunkPlacerType<?> type()`
- `public List<FoliagePlacer.FoliageAttachment> placeTrunk(LevelSimulatedReader p_226086_,  BiConsumer<BlockPos,BlockState> p_226087_,  RandomSource p_226088_,  int p_226089_,  BlockPos p_226090_,  TreeConfiguration p_226091_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer`: `getTreeHeight`, `isFree`, `placeLog`, `placeLog`, `placeLogIfFree`, `setDirtAt`, `trunkPlacerParts`, `validTreePos`

## FancyTrunkPlacer

*class* `net.minecraft.world.level.levelgen.feature.trunkplacers.FancyTrunkPlacer`

### Fields
- `public static final com.mojang.serialization.Codec<FancyTrunkPlacer> CODEC`
- `private static final double TRUNK_HEIGHT_SCALE` (= 0.618)
- `private static final double CLUSTER_DENSITY_MAGIC` (= 1.382)
- `private static final double BRANCH_SLOPE` (= 0.381)
- `private static final double BRANCH_LENGTH_MAGIC` (= 0.328)

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer`: `baseHeight`, `heightRandA`, `heightRandB`, `MAX_HEIGHT`

### Methods
- `protected TrunkPlacerType<?> type()`
- `public List<FoliagePlacer.FoliageAttachment> placeTrunk(LevelSimulatedReader p_226093_,  BiConsumer<BlockPos,BlockState> p_226094_,  RandomSource p_226095_,  int p_226096_,  BlockPos p_226097_,  TreeConfiguration p_226098_)`
- `private boolean makeLimb(LevelSimulatedReader p_226108_,  BiConsumer<BlockPos,BlockState> p_226109_,  RandomSource p_226110_,  BlockPos p_226111_,  BlockPos p_226112_,  boolean p_226113_,  TreeConfiguration p_226114_)`
- `private int getSteps(BlockPos p_70128_)`
- `private Direction.Axis getLogAxis(BlockPos p_70130_,  BlockPos p_70131_)`
- `private boolean trimBranches(int p_70099_,  int p_70100_)`
- `private void makeBranches(LevelSimulatedReader p_226100_,  BiConsumer<BlockPos,BlockState> p_226101_,  RandomSource p_226102_,  int p_226103_,  BlockPos p_226104_,  List<FancyTrunkPlacer.FoliageCoords> p_226105_,  TreeConfiguration p_226106_)`
- `private static float treeShape(int p_70133_,  int p_70134_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer`: `getTreeHeight`, `isFree`, `placeLog`, `placeLog`, `placeLogIfFree`, `setDirtAt`, `trunkPlacerParts`, `validTreePos`

## FancyTrunkPlacer.FoliageCoords

*class* `net.minecraft.world.level.levelgen.feature.trunkplacers.FancyTrunkPlacer.FoliageCoords`

Enclosing class: FancyTrunkPlacer

### Fields
- `final FoliagePlacer.FoliageAttachment attachment`
- `private final int branchBase`

### Methods
- `public int getBranchBase()`

## ForkingTrunkPlacer

*class* `net.minecraft.world.level.levelgen.feature.trunkplacers.ForkingTrunkPlacer`

### Fields
- `public static final com.mojang.serialization.Codec<ForkingTrunkPlacer> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer`: `baseHeight`, `heightRandA`, `heightRandB`, `MAX_HEIGHT`

### Methods
- `protected TrunkPlacerType<?> type()`
- `public List<FoliagePlacer.FoliageAttachment> placeTrunk(LevelSimulatedReader p_226116_,  BiConsumer<BlockPos,BlockState> p_226117_,  RandomSource p_226118_,  int p_226119_,  BlockPos p_226120_,  TreeConfiguration p_226121_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer`: `getTreeHeight`, `isFree`, `placeLog`, `placeLog`, `placeLogIfFree`, `setDirtAt`, `trunkPlacerParts`, `validTreePos`

## GiantTrunkPlacer

*class* `net.minecraft.world.level.levelgen.feature.trunkplacers.GiantTrunkPlacer`

### Fields
- `public static final com.mojang.serialization.Codec<GiantTrunkPlacer> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer`: `baseHeight`, `heightRandA`, `heightRandB`, `MAX_HEIGHT`

### Methods
- `protected TrunkPlacerType<?> type()`
- `public List<FoliagePlacer.FoliageAttachment> placeTrunk(LevelSimulatedReader p_226123_,  BiConsumer<BlockPos,BlockState> p_226124_,  RandomSource p_226125_,  int p_226126_,  BlockPos p_226127_,  TreeConfiguration p_226128_)`
- `private void placeLogIfFreeWithOffset(LevelSimulatedReader p_226130_,  BiConsumer<BlockPos,BlockState> p_226131_,  RandomSource p_226132_,  BlockPos.MutableBlockPos p_226133_,  TreeConfiguration p_226134_,  BlockPos p_226135_,  int p_226136_,  int p_226137_,  int p_226138_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer`: `getTreeHeight`, `isFree`, `placeLog`, `placeLog`, `placeLogIfFree`, `setDirtAt`, `trunkPlacerParts`, `validTreePos`

## MegaJungleTrunkPlacer

*class* `net.minecraft.world.level.levelgen.feature.trunkplacers.MegaJungleTrunkPlacer`

### Fields
- `public static final com.mojang.serialization.Codec<MegaJungleTrunkPlacer> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer`: `baseHeight`, `heightRandA`, `heightRandB`, `MAX_HEIGHT`

### Methods
- `protected TrunkPlacerType<?> type()`
- `public List<FoliagePlacer.FoliageAttachment> placeTrunk(LevelSimulatedReader p_226140_,  BiConsumer<BlockPos,BlockState> p_226141_,  RandomSource p_226142_,  int p_226143_,  BlockPos p_226144_,  TreeConfiguration p_226145_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer`: `getTreeHeight`, `isFree`, `placeLog`, `placeLog`, `placeLogIfFree`, `setDirtAt`, `trunkPlacerParts`, `validTreePos`

## StraightTrunkPlacer

*class* `net.minecraft.world.level.levelgen.feature.trunkplacers.StraightTrunkPlacer`

### Fields
- `public static final com.mojang.serialization.Codec<StraightTrunkPlacer> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer`: `baseHeight`, `heightRandA`, `heightRandB`, `MAX_HEIGHT`

### Methods
- `protected TrunkPlacerType<?> type()`
- `public List<FoliagePlacer.FoliageAttachment> placeTrunk(LevelSimulatedReader p_226147_,  BiConsumer<BlockPos,BlockState> p_226148_,  RandomSource p_226149_,  int p_226150_,  BlockPos p_226151_,  TreeConfiguration p_226152_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer`: `getTreeHeight`, `isFree`, `placeLog`, `placeLog`, `placeLogIfFree`, `setDirtAt`, `trunkPlacerParts`, `validTreePos`

## TrunkPlacer

*class* `net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer`

### Fields
- `public static final com.mojang.serialization.Codec<TrunkPlacer> CODEC`
- `private static final int MAX_BASE_HEIGHT` (= 32)
- `private static final int MAX_RAND` (= 24)
- `public static final int MAX_HEIGHT` (= 80)
- `protected final int baseHeight`
- `protected final int heightRandA`
- `protected final int heightRandB`

### Methods
- `protected static <P extends TrunkPlacer> com.mojang.datafixers.Products.P3<com.mojang.serialization.codecs.RecordCodecBuilder.Mu<P>,Integer,Integer,Integer> trunkPlacerParts(com.mojang.serialization.codecs.RecordCodecBuilder.Instance<P> p_70306_)`
- `protected abstract TrunkPlacerType<?> type()`
- `public abstract List<FoliagePlacer.FoliageAttachment> placeTrunk(LevelSimulatedReader p_226157_,  BiConsumer<BlockPos,BlockState> p_226158_,  RandomSource p_226159_,  int p_226160_,  BlockPos p_226161_,  TreeConfiguration p_226162_)`
- `public int getTreeHeight(RandomSource p_226154_)`
- `private static boolean isDirt(LevelSimulatedReader p_70296_,  BlockPos p_70297_)`
- `protected static void setDirtAt(LevelSimulatedReader p_226170_,  BiConsumer<BlockPos,BlockState> p_226171_,  RandomSource p_226172_,  BlockPos p_226173_,  TreeConfiguration p_226174_)`
- `protected boolean placeLog(LevelSimulatedReader p_226188_,  BiConsumer<BlockPos,BlockState> p_226189_,  RandomSource p_226190_,  BlockPos p_226191_,  TreeConfiguration p_226192_)`
- `protected boolean placeLog(LevelSimulatedReader p_226176_,  BiConsumer<BlockPos,BlockState> p_226177_,  RandomSource p_226178_,  BlockPos p_226179_,  TreeConfiguration p_226180_,  Function<BlockState,BlockState> p_226181_)`
- `protected void placeLogIfFree(LevelSimulatedReader p_226164_,  BiConsumer<BlockPos,BlockState> p_226165_,  RandomSource p_226166_,  BlockPos.MutableBlockPos p_226167_,  TreeConfiguration p_226168_)`
- `protected boolean validTreePos(LevelSimulatedReader p_226155_,  BlockPos p_226156_)`
- `public boolean isFree(LevelSimulatedReader p_226185_,  BlockPos p_226186_)`

## TrunkPlacerType

*class* `net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacerType`

### Fields
- `public static final TrunkPlacerType<StraightTrunkPlacer> STRAIGHT_TRUNK_PLACER`
- `public static final TrunkPlacerType<ForkingTrunkPlacer> FORKING_TRUNK_PLACER`
- `public static final TrunkPlacerType<GiantTrunkPlacer> GIANT_TRUNK_PLACER`
- `public static final TrunkPlacerType<MegaJungleTrunkPlacer> MEGA_JUNGLE_TRUNK_PLACER`
- `public static final TrunkPlacerType<DarkOakTrunkPlacer> DARK_OAK_TRUNK_PLACER`
- `public static final TrunkPlacerType<FancyTrunkPlacer> FANCY_TRUNK_PLACER`
- `public static final TrunkPlacerType<BendingTrunkPlacer> BENDING_TRUNK_PLACER`
- `public static final TrunkPlacerType<UpwardsBranchingTrunkPlacer> UPWARDS_BRANCHING_TRUNK_PLACER`
- `public static final TrunkPlacerType<CherryTrunkPlacer> CHERRY_TRUNK_PLACER`
- `private final com.mojang.serialization.Codec<P extends TrunkPlacer> codec`

### Methods
- `private static <P extends TrunkPlacer> TrunkPlacerType<P> register(String p_70327_,  com.mojang.serialization.Codec<P> p_70328_)`
- `public com.mojang.serialization.Codec<P> codec()`

## UpwardsBranchingTrunkPlacer

*class* `net.minecraft.world.level.levelgen.feature.trunkplacers.UpwardsBranchingTrunkPlacer`

### Fields
- `public static final com.mojang.serialization.Codec<UpwardsBranchingTrunkPlacer> CODEC`
- `private final IntProvider extraBranchSteps`
- `private final float placeBranchPerLogProbability`
- `private final IntProvider extraBranchLength`
- `private final HolderSet<Block> canGrowThrough`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer`: `baseHeight`, `heightRandA`, `heightRandB`, `MAX_HEIGHT`

### Methods
- `protected TrunkPlacerType<?> type()`
- `public List<FoliagePlacer.FoliageAttachment> placeTrunk(LevelSimulatedReader p_226225_,  BiConsumer<BlockPos,BlockState> p_226226_,  RandomSource p_226227_,  int p_226228_,  BlockPos p_226229_,  TreeConfiguration p_226230_)`
- `private void placeBranch(LevelSimulatedReader p_226213_,  BiConsumer<BlockPos,BlockState> p_226214_,  RandomSource p_226215_,  int p_226216_,  TreeConfiguration p_226217_,  List<FoliagePlacer.FoliageAttachment> p_226218_,  BlockPos.MutableBlockPos p_226219_,  int p_226220_,  Direction p_226221_,  int p_226222_,  int p_226223_)`
- `protected boolean validTreePos(LevelSimulatedReader p_226210_,  BlockPos p_226211_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer`: `getTreeHeight`, `isFree`, `placeLog`, `placeLog`, `placeLogIfFree`, `setDirtAt`, `trunkPlacerParts`
