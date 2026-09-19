# net.minecraft.world.phys.shapes

- [ArrayVoxelShape](#arrayvoxelshape)
- [BitSetDiscreteVoxelShape](#bitsetdiscretevoxelshape)
- [BooleanOp](#booleanop)
- [CollisionContext](#collisioncontext)
- [CubePointRange](#cubepointrange)
- [CubeVoxelShape](#cubevoxelshape)
- [DiscreteCubeMerger](#discretecubemerger)
- [DiscreteVoxelShape](#discretevoxelshape)
- [DiscreteVoxelShape.IntFaceConsumer](#discretevoxelshape.intfaceconsumer)
- [DiscreteVoxelShape.IntLineConsumer](#discretevoxelshape.intlineconsumer)
- [EntityCollisionContext](#entitycollisioncontext)
- [IdenticalMerger](#identicalmerger)
- [IndexMerger](#indexmerger)
- [IndexMerger.IndexConsumer](#indexmerger.indexconsumer)
- [IndirectMerger](#indirectmerger)
- [NonOverlappingMerger](#nonoverlappingmerger)
- [OffsetDoubleList](#offsetdoublelist)
- [Shapes](#shapes)
- [Shapes.DoubleLineConsumer](#shapes.doublelineconsumer)
- [SliceShape](#sliceshape)
- [SubShape](#subshape)
- [VoxelShape](#voxelshape)
## ArrayVoxelShape

*class* `net.minecraft.world.phys.shapes.ArrayVoxelShape`

### Fields
- `private final it.unimi.dsi.fastutil.doubles.DoubleList xs`
- `private final it.unimi.dsi.fastutil.doubles.DoubleList ys`
- `private final it.unimi.dsi.fastutil.doubles.DoubleList zs`

### Inherited fields
- from `net.minecraft.world.phys.shapes.VoxelShape`: `shape`

### Methods
- `protected it.unimi.dsi.fastutil.doubles.DoubleList getCoords(Direction.Axis p_82577_)`

### Inherited methods
- from `net.minecraft.world.phys.shapes.VoxelShape`: `bounds`, `clip`, `closestPointTo`, `collide`, `collideX`, `findIndex`, `forAllBoxes`, `forAllEdges`, `get`, `getFaceShape`, `isEmpty`, `max`, `max`, `min`, `min`, `move`, `optimize`, `singleEncompassing`, `toAabbs`, `toString`

## BitSetDiscreteVoxelShape

*class* `net.minecraft.world.phys.shapes.BitSetDiscreteVoxelShape`

### Fields
- `private final BitSet storage`
- `private int xMin`
- `private int yMin`
- `private int zMin`
- `private int xMax`
- `private int yMax`
- `private int zMax`

### Inherited fields
- from `net.minecraft.world.phys.shapes.DiscreteVoxelShape`: `xSize`, `ySize`, `zSize`

### Methods
- `public static BitSetDiscreteVoxelShape withFilledBounds(int p_165933_,  int p_165934_,  int p_165935_,  int p_165936_,  int p_165937_,  int p_165938_,  int p_165939_,  int p_165940_,  int p_165941_)`
- `protected int getIndex(int p_82605_,  int p_82606_,  int p_82607_)`
- `public boolean isFull(int p_82676_,  int p_82677_,  int p_82678_)`
- `private void fillUpdateBounds(int p_165943_,  int p_165944_,  int p_165945_,  boolean p_165946_)`
- `public void fill(int p_165987_,  int p_165988_,  int p_165989_)`
- `public boolean isEmpty()`
- `public int firstFull(Direction.Axis p_82674_)`
- `public int lastFull(Direction.Axis p_82680_)`
- `static BitSetDiscreteVoxelShape join(DiscreteVoxelShape p_82642_,  DiscreteVoxelShape p_82643_,  IndexMerger p_82644_,  IndexMerger p_82645_,  IndexMerger p_82646_,  BooleanOp p_82647_)`
- `protected static void forAllBoxes(DiscreteVoxelShape p_165964_,  DiscreteVoxelShape.IntLineConsumer p_165965_,  boolean p_165966_)`
- `private boolean isZStripFull(int p_82609_,  int p_82610_,  int p_82611_,  int p_82612_)`
- `private boolean isXZRectangleFull(int p_165927_,  int p_165928_,  int p_165929_,  int p_165930_,  int p_165931_)`
- `private void clearZStrip(int p_165982_,  int p_165983_,  int p_165984_,  int p_165985_)`

### Inherited methods
- from `net.minecraft.world.phys.shapes.DiscreteVoxelShape`: `firstFull`, `forAllBoxes`, `forAllEdges`, `forAllFaces`, `getSize`, `getXSize`, `getYSize`, `getZSize`, `isFull`, `isFullWide`, `isFullWide`, `lastFull`

## BooleanOp

*interface* `net.minecraft.world.phys.shapes.BooleanOp`

### Fields
- `static final BooleanOp FALSE`
- `static final BooleanOp NOT_OR`
- `static final BooleanOp ONLY_SECOND`
- `static final BooleanOp NOT_FIRST`
- `static final BooleanOp ONLY_FIRST`
- `static final BooleanOp NOT_SECOND`
- `static final BooleanOp NOT_SAME`
- `static final BooleanOp NOT_AND`
- `static final BooleanOp AND`
- `static final BooleanOp SAME`
- `static final BooleanOp SECOND`
- `static final BooleanOp CAUSES`
- `static final BooleanOp FIRST`
- `static final BooleanOp CAUSED_BY`
- `static final BooleanOp OR`
- `static final BooleanOp TRUE`

### Methods
- `boolean apply(boolean p_82702_,  boolean p_82703_)`

## CollisionContext

*interface* `net.minecraft.world.phys.shapes.CollisionContext`

### Methods
- `static CollisionContext empty()`
- `static CollisionContext of(Entity p_82751_)`
- `boolean isDescending()`
- `boolean isAbove(VoxelShape p_82755_,  BlockPos p_82756_,  boolean p_82757_)`
- `boolean isHoldingItem(Item p_82752_)`
- `boolean canStandOnFluid(FluidState p_205110_,  FluidState p_205111_)`

## CubePointRange

*class* `net.minecraft.world.phys.shapes.CubePointRange`

### Fields
- `private final int parts`

### Methods
- `public double getDouble(int p_82762_)`
- `public int size()`

### Inherited methods
- from `it.unimi.dsi.fastutil.doubles.AbstractDoubleList`: `add`, `add`, `addAll`, `addAll`, `addAll`, `addAll`, `addElements`, `addElements`, `clear`, `compareTo`, `contains`, `ensureIndex`, `ensureRestrictedIndex`, `equals`, `forEach`, `getElements`, `hashCode`, `indexOf`, `iterator`, `lastIndexOf`, `listIterator`, `listIterator`, `peekDouble`, `popDouble`, `push`, `rem`, `removeDouble`, `removeElements`, `replaceAll`, `set`, `setElements`, `size`, `subList`, `toArray`, `toDoubleArray`, `topDouble`, `toString`
- from `it.unimi.dsi.fastutil.doubles.AbstractDoubleCollection`: `add`, `contains`, `containsAll`, `containsAll`, `forEach`, `remove`, `removeAll`, `removeAll`, `removeIf`, `retainAll`, `retainAll`, `toDoubleArray`
- from `java.util.AbstractCollection`: `isEmpty`, `toArray`, `toArray`
- from `java.util.Collection`: `toArray`
- from `it.unimi.dsi.fastutil.doubles.DoubleCollection`: `containsAll`, `doubleIterator`, `doubleParallelStream`, `doubleSpliterator`, `doubleStream`, `parallelStream`, `removeAll`, `removeIf`, `removeIf`, `removeIf`, `retainAll`, `spliterator`, `stream`, `toDoubleArray`
- from `it.unimi.dsi.fastutil.doubles.DoubleIterable`: `forEach`, `forEach`
- from `it.unimi.dsi.fastutil.doubles.DoubleList`: `add`, `add`, `addAll`, `addAll`, `contains`, `get`, `indexOf`, `lastIndexOf`, `remove`, `remove`, `replaceAll`, `replaceAll`, `set`, `setElements`, `setElements`, `sort`, `sort`, `spliterator`, `unstableSort`, `unstableSort`
- from `it.unimi.dsi.fastutil.doubles.DoubleStack`: `peek`, `pop`, `push`, `top`
- from `java.util.List`: `containsAll`, `isEmpty`, `removeAll`, `retainAll`, `toArray`, `toArray`
- from `it.unimi.dsi.fastutil.Stack`: `isEmpty`

## CubeVoxelShape

*class* `net.minecraft.world.phys.shapes.CubeVoxelShape`

### Inherited fields
- from `net.minecraft.world.phys.shapes.VoxelShape`: `shape`

### Methods
- `protected it.unimi.dsi.fastutil.doubles.DoubleList getCoords(Direction.Axis p_82767_)`
- `protected int findIndex(Direction.Axis p_82769_,  double p_82770_)`

### Inherited methods
- from `net.minecraft.world.phys.shapes.VoxelShape`: `bounds`, `clip`, `closestPointTo`, `collide`, `collideX`, `forAllBoxes`, `forAllEdges`, `get`, `getFaceShape`, `isEmpty`, `max`, `max`, `min`, `min`, `move`, `optimize`, `singleEncompassing`, `toAabbs`, `toString`

## DiscreteCubeMerger

*class* `net.minecraft.world.phys.shapes.DiscreteCubeMerger`

### Fields
- `private final CubePointRange result`
- `private final int firstDiv`
- `private final int secondDiv`

### Methods
- `public boolean forMergedIndexes(IndexMerger.IndexConsumer p_82780_)`
- `public int size()`
- `public it.unimi.dsi.fastutil.doubles.DoubleList getList()`

## DiscreteVoxelShape

*class* `net.minecraft.world.phys.shapes.DiscreteVoxelShape`

### Fields
- `private static final Direction.Axis[] AXIS_VALUES`
- `protected final int xSize`
- `protected final int ySize`
- `protected final int zSize`

### Methods
- `public boolean isFullWide(AxisCycle p_82823_,  int p_82824_,  int p_82825_,  int p_82826_)`
- `public boolean isFullWide(int p_82847_,  int p_82848_,  int p_82849_)`
- `public boolean isFull(AxisCycle p_82836_,  int p_82837_,  int p_82838_,  int p_82839_)`
- `public abstract boolean isFull(int p_82829_,  int p_82830_,  int p_82831_)`
- `public abstract void fill(int p_165998_,  int p_165999_,  int p_166000_)`
- `public boolean isEmpty()`
- `public abstract int firstFull(Direction.Axis p_82827_)`
- `public abstract int lastFull(Direction.Axis p_82840_)`
- `public int firstFull(Direction.Axis p_165995_,  int p_165996_,  int p_165997_)`
- `public int lastFull(Direction.Axis p_82842_,  int p_82843_,  int p_82844_)`
- `public int getSize(Direction.Axis p_82851_)`
- `public int getXSize()`
- `public int getYSize()`
- `public int getZSize()`
- `public void forAllEdges(DiscreteVoxelShape.IntLineConsumer p_82820_,  boolean p_82821_)`
- `private void forAllAxisEdges(DiscreteVoxelShape.IntLineConsumer p_82816_,  AxisCycle p_82817_,  boolean p_82818_)`
- `public void forAllBoxes(DiscreteVoxelShape.IntLineConsumer p_82833_,  boolean p_82834_)`
- `public void forAllFaces(DiscreteVoxelShape.IntFaceConsumer p_82811_)`
- `private void forAllAxisFaces(DiscreteVoxelShape.IntFaceConsumer p_82813_,  AxisCycle p_82814_)`

## DiscreteVoxelShape.IntFaceConsumer

*interface* `net.minecraft.world.phys.shapes.DiscreteVoxelShape.IntFaceConsumer`

Enclosing class: DiscreteVoxelShape

### Methods
- `void consume(Direction p_82854_,  int p_82855_,  int p_82856_,  int p_82857_)`

## DiscreteVoxelShape.IntLineConsumer

*interface* `net.minecraft.world.phys.shapes.DiscreteVoxelShape.IntLineConsumer`

Enclosing class: DiscreteVoxelShape

### Methods
- `void consume(int p_82859_,  int p_82860_,  int p_82861_,  int p_82862_,  int p_82863_,  int p_82864_)`

## EntityCollisionContext

*class* `net.minecraft.world.phys.shapes.EntityCollisionContext`

### Fields
- `protected static final CollisionContext EMPTY`
- `private final boolean descending`
- `private final double entityBottom`
- `private final ItemStack heldItem`
- `private final Predicate<FluidState> canStandOnFluid`
- `@Nullable private final Entity entity`

### Methods
- `public boolean isHoldingItem(Item p_82879_)`
- `public boolean canStandOnFluid(FluidState p_205115_,  FluidState p_205116_)`
- `public boolean isDescending()`
- `public boolean isAbove(VoxelShape p_82886_,  BlockPos p_82887_,  boolean p_82888_)`
- `@Nullable public Entity getEntity()`

## IdenticalMerger

*class* `net.minecraft.world.phys.shapes.IdenticalMerger`

### Fields
- `private final it.unimi.dsi.fastutil.doubles.DoubleList coords`

### Methods
- `public boolean forMergedIndexes(IndexMerger.IndexConsumer p_82906_)`
- `public int size()`
- `public it.unimi.dsi.fastutil.doubles.DoubleList getList()`

## IndexMerger

*interface* `net.minecraft.world.phys.shapes.IndexMerger`

### Methods
- `it.unimi.dsi.fastutil.doubles.DoubleList getList()`
- `boolean forMergedIndexes(IndexMerger.IndexConsumer p_82907_)`
- `int size()`

## IndexMerger.IndexConsumer

*interface* `net.minecraft.world.phys.shapes.IndexMerger.IndexConsumer`

Enclosing interface: IndexMerger

### Methods
- `boolean merge(int p_82909_,  int p_82910_,  int p_82911_)`

## IndirectMerger

*class* `net.minecraft.world.phys.shapes.IndirectMerger`

### Fields
- `private static final it.unimi.dsi.fastutil.doubles.DoubleList EMPTY`
- `private final double[] result`
- `private final int[] firstIndices`
- `private final int[] secondIndices`
- `private final int resultLength`

### Methods
- `public boolean forMergedIndexes(IndexMerger.IndexConsumer p_83007_)`
- `public int size()`
- `public it.unimi.dsi.fastutil.doubles.DoubleList getList()`

## NonOverlappingMerger

*class* `net.minecraft.world.phys.shapes.NonOverlappingMerger`

### Fields
- `private final it.unimi.dsi.fastutil.doubles.DoubleList lower`
- `private final it.unimi.dsi.fastutil.doubles.DoubleList upper`
- `private final boolean swap`

### Methods
- `public int size()`
- `public boolean forMergedIndexes(IndexMerger.IndexConsumer p_83017_)`
- `private boolean forNonSwappedIndexes(IndexMerger.IndexConsumer p_83024_)`
- `public double getDouble(int p_83026_)`
- `public it.unimi.dsi.fastutil.doubles.DoubleList getList()`

### Inherited methods
- from `it.unimi.dsi.fastutil.doubles.AbstractDoubleList`: `add`, `add`, `addAll`, `addAll`, `addAll`, `addAll`, `addElements`, `addElements`, `clear`, `compareTo`, `contains`, `ensureIndex`, `ensureRestrictedIndex`, `equals`, `forEach`, `getElements`, `hashCode`, `indexOf`, `iterator`, `lastIndexOf`, `listIterator`, `listIterator`, `peekDouble`, `popDouble`, `push`, `rem`, `removeDouble`, `removeElements`, `replaceAll`, `set`, `setElements`, `size`, `subList`, `toArray`, `toDoubleArray`, `topDouble`, `toString`
- from `it.unimi.dsi.fastutil.doubles.AbstractDoubleCollection`: `add`, `contains`, `containsAll`, `containsAll`, `forEach`, `remove`, `removeAll`, `removeAll`, `removeIf`, `retainAll`, `retainAll`, `toDoubleArray`
- from `java.util.AbstractCollection`: `isEmpty`, `toArray`, `toArray`
- from `java.util.Collection`: `toArray`
- from `it.unimi.dsi.fastutil.doubles.DoubleCollection`: `containsAll`, `doubleIterator`, `doubleParallelStream`, `doubleSpliterator`, `doubleStream`, `parallelStream`, `removeAll`, `removeIf`, `removeIf`, `removeIf`, `retainAll`, `spliterator`, `stream`, `toDoubleArray`
- from `it.unimi.dsi.fastutil.doubles.DoubleIterable`: `forEach`, `forEach`
- from `it.unimi.dsi.fastutil.doubles.DoubleList`: `add`, `add`, `addAll`, `addAll`, `contains`, `get`, `indexOf`, `lastIndexOf`, `remove`, `remove`, `replaceAll`, `replaceAll`, `set`, `setElements`, `setElements`, `sort`, `sort`, `spliterator`, `unstableSort`, `unstableSort`
- from `it.unimi.dsi.fastutil.doubles.DoubleStack`: `peek`, `pop`, `push`, `top`
- from `java.util.List`: `containsAll`, `isEmpty`, `removeAll`, `retainAll`, `toArray`, `toArray`
- from `it.unimi.dsi.fastutil.Stack`: `isEmpty`

## OffsetDoubleList

*class* `net.minecraft.world.phys.shapes.OffsetDoubleList`

### Fields
- `private final it.unimi.dsi.fastutil.doubles.DoubleList delegate`
- `private final double offset`

### Methods
- `public double getDouble(int p_83034_)`
- `public int size()`

### Inherited methods
- from `it.unimi.dsi.fastutil.doubles.AbstractDoubleList`: `add`, `add`, `addAll`, `addAll`, `addAll`, `addAll`, `addElements`, `addElements`, `clear`, `compareTo`, `contains`, `ensureIndex`, `ensureRestrictedIndex`, `equals`, `forEach`, `getElements`, `hashCode`, `indexOf`, `iterator`, `lastIndexOf`, `listIterator`, `listIterator`, `peekDouble`, `popDouble`, `push`, `rem`, `removeDouble`, `removeElements`, `replaceAll`, `set`, `setElements`, `size`, `subList`, `toArray`, `toDoubleArray`, `topDouble`, `toString`
- from `it.unimi.dsi.fastutil.doubles.AbstractDoubleCollection`: `add`, `contains`, `containsAll`, `containsAll`, `forEach`, `remove`, `removeAll`, `removeAll`, `removeIf`, `retainAll`, `retainAll`, `toDoubleArray`
- from `java.util.AbstractCollection`: `isEmpty`, `toArray`, `toArray`
- from `java.util.Collection`: `toArray`
- from `it.unimi.dsi.fastutil.doubles.DoubleCollection`: `containsAll`, `doubleIterator`, `doubleParallelStream`, `doubleSpliterator`, `doubleStream`, `parallelStream`, `removeAll`, `removeIf`, `removeIf`, `removeIf`, `retainAll`, `spliterator`, `stream`, `toDoubleArray`
- from `it.unimi.dsi.fastutil.doubles.DoubleIterable`: `forEach`, `forEach`
- from `it.unimi.dsi.fastutil.doubles.DoubleList`: `add`, `add`, `addAll`, `addAll`, `contains`, `get`, `indexOf`, `lastIndexOf`, `remove`, `remove`, `replaceAll`, `replaceAll`, `set`, `setElements`, `setElements`, `sort`, `sort`, `spliterator`, `unstableSort`, `unstableSort`
- from `it.unimi.dsi.fastutil.doubles.DoubleStack`: `peek`, `pop`, `push`, `top`
- from `java.util.List`: `containsAll`, `isEmpty`, `removeAll`, `retainAll`, `toArray`, `toArray`
- from `it.unimi.dsi.fastutil.Stack`: `isEmpty`

## Shapes

*class* `net.minecraft.world.phys.shapes.Shapes`

### Fields
- `public static final double EPSILON` (= 1.0E-7)
- `public static final double BIG_EPSILON` (= 1.0E-6)
- `private static final VoxelShape BLOCK`
- `public static final VoxelShape INFINITY`
- `private static final VoxelShape EMPTY`

### Methods
- `public static VoxelShape empty()`
- `public static VoxelShape block()`
- `public static VoxelShape box(double p_83049_,  double p_83050_,  double p_83051_,  double p_83052_,  double p_83053_,  double p_83054_)`
- `public static VoxelShape create(double p_166050_,  double p_166051_,  double p_166052_,  double p_166053_,  double p_166054_,  double p_166055_)`
- `public static VoxelShape create(AABB p_83065_)`
- `protected static int findBits(double p_83042_,  double p_83043_)`
- `protected static long lcm(int p_83056_,  int p_83057_)`
- `public static VoxelShape or(VoxelShape p_83111_,  VoxelShape p_83112_)`
- `public static VoxelShape or(VoxelShape p_83125_,  VoxelShape... p_83126_)`
- `public static VoxelShape join(VoxelShape p_83114_,  VoxelShape p_83115_,  BooleanOp p_83116_)`
- `public static VoxelShape joinUnoptimized(VoxelShape p_83149_,  VoxelShape p_83150_,  BooleanOp p_83151_)`
- `public static boolean joinIsNotEmpty(VoxelShape p_83158_,  VoxelShape p_83159_,  BooleanOp p_83160_)`
- `private static boolean joinIsNotEmpty(IndexMerger p_83104_,  IndexMerger p_83105_,  IndexMerger p_83106_,  DiscreteVoxelShape p_83107_,  DiscreteVoxelShape p_83108_,  BooleanOp p_83109_)`
- `public static double collide(Direction.Axis p_193136_,  AABB p_193137_,  Iterable<VoxelShape> p_193138_,  double p_193139_)`
- `public static boolean blockOccudes(VoxelShape p_83118_,  VoxelShape p_83119_,  Direction p_83120_)`
- `public static VoxelShape getFaceShape(VoxelShape p_83122_,  Direction p_83123_)`
- `public static boolean mergedFaceOccludes(VoxelShape p_83153_,  VoxelShape p_83154_,  Direction p_83155_)`
- `public static boolean faceShapeOccludes(VoxelShape p_83146_,  VoxelShape p_83147_)`
- `protected static IndexMerger createIndexMerger(int p_83059_,  it.unimi.dsi.fastutil.doubles.DoubleList p_83060_,  it.unimi.dsi.fastutil.doubles.DoubleList p_83061_,  boolean p_83062_,  boolean p_83063_)`

## Shapes.DoubleLineConsumer

*interface* `net.minecraft.world.phys.shapes.Shapes.DoubleLineConsumer`

Enclosing class: Shapes

### Methods
- `void consume(double p_83162_,  double p_83163_,  double p_83164_,  double p_83165_,  double p_83166_,  double p_83167_)`

## SliceShape

*class* `net.minecraft.world.phys.shapes.SliceShape`

### Fields
- `private final VoxelShape delegate`
- `private final Direction.Axis axis`
- `private static final it.unimi.dsi.fastutil.doubles.DoubleList SLICE_COORDS`

### Inherited fields
- from `net.minecraft.world.phys.shapes.VoxelShape`: `shape`

### Methods
- `private static DiscreteVoxelShape makeSlice(DiscreteVoxelShape p_83177_,  Direction.Axis p_83178_,  int p_83179_)`
- `protected it.unimi.dsi.fastutil.doubles.DoubleList getCoords(Direction.Axis p_83181_)`

### Inherited methods
- from `net.minecraft.world.phys.shapes.VoxelShape`: `bounds`, `clip`, `closestPointTo`, `collide`, `collideX`, `findIndex`, `forAllBoxes`, `forAllEdges`, `get`, `getFaceShape`, `isEmpty`, `max`, `max`, `min`, `min`, `move`, `optimize`, `singleEncompassing`, `toAabbs`, `toString`

## SubShape

*class* `net.minecraft.world.phys.shapes.SubShape`

### Fields
- `private final DiscreteVoxelShape parent`
- `private final int startX`
- `private final int startY`
- `private final int startZ`
- `private final int endX`
- `private final int endY`
- `private final int endZ`

### Inherited fields
- from `net.minecraft.world.phys.shapes.DiscreteVoxelShape`: `xSize`, `ySize`, `zSize`

### Methods
- `public boolean isFull(int p_83206_,  int p_83207_,  int p_83208_)`
- `public void fill(int p_166060_,  int p_166061_,  int p_166062_)`
- `public int firstFull(Direction.Axis p_83204_)`
- `public int lastFull(Direction.Axis p_83210_)`
- `private int clampToShape(Direction.Axis p_166057_,  int p_166058_)`

### Inherited methods
- from `net.minecraft.world.phys.shapes.DiscreteVoxelShape`: `firstFull`, `forAllBoxes`, `forAllEdges`, `forAllFaces`, `getSize`, `getXSize`, `getYSize`, `getZSize`, `isEmpty`, `isFull`, `isFullWide`, `isFullWide`, `lastFull`

## VoxelShape

*class* `net.minecraft.world.phys.shapes.VoxelShape`

### Fields
- `protected final DiscreteVoxelShape shape`
- `@Nullable private VoxelShape[] faces`

### Methods
- `public double min(Direction.Axis p_83289_)`
- `public double max(Direction.Axis p_83298_)`
- `public AABB bounds()`
- `public VoxelShape singleEncompassing()`
- `protected double get(Direction.Axis p_83257_,  int p_83258_)`
- `protected abstract it.unimi.dsi.fastutil.doubles.DoubleList getCoords(Direction.Axis p_83249_)`
- `public boolean isEmpty()`
- `public VoxelShape move(double p_83217_,  double p_83218_,  double p_83219_)`
- `public VoxelShape optimize()`
- `public void forAllEdges(Shapes.DoubleLineConsumer p_83225_)`
- `public void forAllBoxes(Shapes.DoubleLineConsumer p_83287_)`
- `public List<AABB> toAabbs()`
- `public double min(Direction.Axis p_166079_,  double p_166080_,  double p_166081_)`
- `public double max(Direction.Axis p_83291_,  double p_83292_,  double p_83293_)`
- `protected int findIndex(Direction.Axis p_83250_,  double p_83251_)`
- `@Nullable public BlockHitResult clip(Vec3 p_83221_,  Vec3 p_83222_,  BlockPos p_83223_)`
- `public Optional<Vec3> closestPointTo(Vec3 p_166068_)`
- `public VoxelShape getFaceShape(Direction p_83264_)`
- `private VoxelShape calculateFace(Direction p_83295_)`
- `public double collide(Direction.Axis p_83260_,  AABB p_83261_,  double p_83262_)`
- `protected double collideX(AxisCycle p_83246_,  AABB p_83247_,  double p_83248_)`
- `public String toString()`
