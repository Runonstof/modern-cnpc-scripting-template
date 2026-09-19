# net.minecraft.util.math

- [AxisAlignedBB](#axisalignedbb)
- [BlockPos](#blockpos)
- [BlockPos.MutableBlockPos](#blockpos.mutableblockpos)
- [BlockPos.PooledMutableBlockPos](#blockpos.pooledmutableblockpos)
- [Cartesian](#cartesian)
- [ChunkPos](#chunkpos)
- [MathHelper](#mathhelper)
- [RayTraceResult](#raytraceresult)
- [RayTraceResult.Type](#raytraceresult.type)
- [Rotations](#rotations)
- [Vec2f](#vec2f)
- [Vec3d](#vec3d)
- [Vec3i](#vec3i)
## AxisAlignedBB

*class* `net.minecraft.util.math.AxisAlignedBB`

### Fields
- `public final double minX`
- `public final double minY`
- `public final double minZ`
- `public final double maxX`
- `public final double maxY`
- `public final double maxZ`

### Methods
- `public AxisAlignedBB setMaxY(double y2)`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public AxisAlignedBB contract(double x,  double y,  double z)`
- `public AxisAlignedBB expand(double x,  double y,  double z)`
- `public AxisAlignedBB grow(double x,  double y,  double z)`
- `public AxisAlignedBB grow(double value)`
- `public AxisAlignedBB intersect(AxisAlignedBB other)`
- `public AxisAlignedBB union(AxisAlignedBB other)`
- `public AxisAlignedBB offset(double x,  double y,  double z)`
- `public AxisAlignedBB offset(BlockPos pos)`
- `public AxisAlignedBB offset(Vec3d vec)`
- `public double calculateXOffset(AxisAlignedBB other,  double offsetX)`
- `public double calculateYOffset(AxisAlignedBB other,  double offsetY)`
- `public double calculateZOffset(AxisAlignedBB other,  double offsetZ)`
- `public boolean intersects(AxisAlignedBB other)`
- `public boolean intersects(double x1,  double y1,  double z1,  double x2,  double y2,  double z2)`
- `public boolean intersects(Vec3d min,  Vec3d max)`
- `public boolean contains(Vec3d vec)`
- `public double getAverageEdgeLength()`
- `public AxisAlignedBB shrink(double value)`
- `public RayTraceResult calculateIntercept(Vec3d vecA,  Vec3d vecB)`
- `public boolean intersectsWithYZ(Vec3d vec)`
- `public boolean intersectsWithXZ(Vec3d vec)`
- `public boolean intersectsWithXY(Vec3d vec)`
- `public java.lang.String toString()`
- `public boolean hasNaN()`
- `public Vec3d getCenter()`

## BlockPos

*class* `net.minecraft.util.math.BlockPos`

All Implemented Interfaces: java.lang.Comparable<Vec3i>

### Fields
- `public static final BlockPos ORIGIN`

### Inherited fields
- from `net.minecraft.util.math.Vec3i`: `NULL_VECTOR`

### Methods
- `public BlockPos add(double x,  double y,  double z)`
- `public BlockPos add(int x,  int y,  int z)`
- `public BlockPos add(Vec3i vec)`
- `public BlockPos subtract(Vec3i vec)`
- `public BlockPos up()`
- `public BlockPos up(int n)`
- `public BlockPos down()`
- `public BlockPos down(int n)`
- `public BlockPos north()`
- `public BlockPos north(int n)`
- `public BlockPos south()`
- `public BlockPos south(int n)`
- `public BlockPos west()`
- `public BlockPos west(int n)`
- `public BlockPos east()`
- `public BlockPos east(int n)`
- `public BlockPos offset(EnumFacing facing)`
- `public BlockPos offset(EnumFacing facing,  int n)`
- `public BlockPos rotate(Rotation rotationIn)`
- `public BlockPos crossProduct(Vec3i vec)`
- `public long toLong()`
- `public static BlockPos fromLong(long serialized)`
- `public static java.lang.Iterable<BlockPos> getAllInBox(BlockPos from,  BlockPos to)`
- `public static java.lang.Iterable<BlockPos> getAllInBox(int x1,  int y1,  int z1,  int x2,  int y2,  int z2)`
- `public BlockPos toImmutable()`
- `public static java.lang.Iterable<BlockPos.MutableBlockPos> getAllInBoxMutable(BlockPos from,  BlockPos to)`
- `public static java.lang.Iterable<BlockPos.MutableBlockPos> getAllInBoxMutable(int x1,  int y1,  int z1,  int x2,  int y2,  int z2)`

### Inherited methods
- from `net.minecraft.util.math.Vec3i`: `compareTo`, `distanceSq`, `distanceSq`, `distanceSqToCenter`, `equals`, `getDistance`, `getX`, `getY`, `getZ`, `hashCode`, `toString`

## BlockPos.MutableBlockPos

*class* `net.minecraft.util.math.BlockPos.MutableBlockPos`

All Implemented Interfaces: java.lang.Comparable<Vec3i>

Enclosing class: BlockPos

### Fields
- `protected int x`
- `protected int y`
- `protected int z`

### Inherited fields
- from `net.minecraft.util.math.BlockPos`: `ORIGIN`
- from `net.minecraft.util.math.Vec3i`: `NULL_VECTOR`

### Methods
- `public BlockPos add(double x,  double y,  double z)`
- `public BlockPos add(int x,  int y,  int z)`
- `public BlockPos offset(EnumFacing facing,  int n)`
- `public BlockPos rotate(Rotation rotationIn)`
- `public int getX()`
- `public int getY()`
- `public int getZ()`
- `public BlockPos.MutableBlockPos setPos(int xIn,  int yIn,  int zIn)`
- `public BlockPos.MutableBlockPos setPos(double xIn,  double yIn,  double zIn)`
- `public BlockPos.MutableBlockPos setPos(Entity entityIn)`
- `public BlockPos.MutableBlockPos setPos(Vec3i vec)`
- `public BlockPos.MutableBlockPos move(EnumFacing facing)`
- `public BlockPos.MutableBlockPos move(EnumFacing facing,  int n)`
- `public void setY(int yIn)`
- `public BlockPos toImmutable()`

### Inherited methods
- from `net.minecraft.util.math.BlockPos`: `add`, `crossProduct`, `down`, `down`, `east`, `east`, `fromLong`, `getAllInBox`, `getAllInBox`, `getAllInBoxMutable`, `getAllInBoxMutable`, `north`, `north`, `offset`, `south`, `south`, `subtract`, `toLong`, `up`, `up`, `west`, `west`
- from `net.minecraft.util.math.Vec3i`: `compareTo`, `distanceSq`, `distanceSq`, `distanceSqToCenter`, `equals`, `getDistance`, `hashCode`, `toString`

## BlockPos.PooledMutableBlockPos

*class* `net.minecraft.util.math.BlockPos.PooledMutableBlockPos`

All Implemented Interfaces: java.lang.Comparable<Vec3i>

Enclosing class: BlockPos

### Inherited fields
- from `net.minecraft.util.math.BlockPos.MutableBlockPos`: `x`, `y`, `z`
- from `net.minecraft.util.math.BlockPos`: `ORIGIN`
- from `net.minecraft.util.math.Vec3i`: `NULL_VECTOR`

### Methods
- `public static BlockPos.PooledMutableBlockPos retain()`
- `public static BlockPos.PooledMutableBlockPos retain(double xIn,  double yIn,  double zIn)`
- `public static BlockPos.PooledMutableBlockPos retain(Vec3i vec)`
- `public static BlockPos.PooledMutableBlockPos retain(int xIn,  int yIn,  int zIn)`
- `public void release()`
- `public BlockPos.PooledMutableBlockPos setPos(int xIn,  int yIn,  int zIn)`
- `public BlockPos.PooledMutableBlockPos setPos(Entity entityIn)`
- `public BlockPos.PooledMutableBlockPos setPos(double xIn,  double yIn,  double zIn)`
- `public BlockPos.PooledMutableBlockPos setPos(Vec3i vec)`
- `public BlockPos.PooledMutableBlockPos move(EnumFacing facing)`
- `public BlockPos.PooledMutableBlockPos move(EnumFacing facing,  int n)`

### Inherited methods
- from `net.minecraft.util.math.BlockPos.MutableBlockPos`: `add`, `add`, `getX`, `getY`, `getZ`, `offset`, `rotate`, `setY`, `toImmutable`
- from `net.minecraft.util.math.BlockPos`: `add`, `crossProduct`, `down`, `down`, `east`, `east`, `fromLong`, `getAllInBox`, `getAllInBox`, `getAllInBoxMutable`, `getAllInBoxMutable`, `north`, `north`, `offset`, `south`, `south`, `subtract`, `toLong`, `up`, `up`, `west`, `west`
- from `net.minecraft.util.math.Vec3i`: `compareTo`, `distanceSq`, `distanceSq`, `distanceSqToCenter`, `equals`, `getDistance`, `hashCode`, `toString`

## Cartesian

*class* `net.minecraft.util.math.Cartesian`

### Methods
- `public static <T> java.lang.Iterable<T[]> cartesianProduct(java.lang.Class<T> clazz,  java.lang.Iterable<? extends java.lang.Iterable<? extends T>> sets)`
- `public static <T> java.lang.Iterable<java.util.List<T>> cartesianProduct(java.lang.Iterable<? extends java.lang.Iterable<? extends T>> sets)`

## ChunkPos

*class* `net.minecraft.util.math.ChunkPos`

### Fields
- `public final int x`
- `public final int z`

### Methods
- `public static long asLong(int x,  int z)`
- `public int hashCode()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public double getDistanceSq(Entity entityIn)`
- `public int getXStart()`
- `public int getZStart()`
- `public int getXEnd()`
- `public int getZEnd()`
- `public BlockPos getBlock(int x,  int y,  int z)`
- `public java.lang.String toString()`

## MathHelper

*class* `net.minecraft.util.math.MathHelper`

### Fields
- `public static final float SQRT_2`

### Methods
- `public static float sin(float value)`
- `public static float cos(float value)`
- `public static float sqrt(float value)`
- `public static float sqrt(double value)`
- `public static int floor(float value)`
- `public static int fastFloor(double value)`
- `public static int floor(double value)`
- `public static long lfloor(double value)`
- `public static int absFloor(double value)`
- `public static float abs(float value)`
- `public static int abs(int value)`
- `public static int ceil(float value)`
- `public static int ceil(double value)`
- `public static int clamp(int num,  int min,  int max)`
- `public static float clamp(float num,  float min,  float max)`
- `public static double clamp(double num,  double min,  double max)`
- `public static double clampedLerp(double lowerBnd,  double upperBnd,  double slide)`
- `public static double absMax(double p_76132_0_,  double p_76132_2_)`
- `public static int intFloorDiv(int p_76137_0_,  int p_76137_1_)`
- `public static int getInt(java.util.Random random,  int minimum,  int maximum)`
- `public static float nextFloat(java.util.Random random,  float minimum,  float maximum)`
- `public static double nextDouble(java.util.Random random,  double minimum,  double maximum)`
- `public static double average(long[] values)`
- `public static boolean epsilonEquals(float p_180185_0_,  float p_180185_1_)`
- `public static int normalizeAngle(int p_180184_0_,  int p_180184_1_)`
- `public static float positiveModulo(float numerator,  float denominator)`
- `public static double positiveModulo(double numerator,  double denominator)`
- `public static float wrapDegrees(float value)`
- `public static double wrapDegrees(double value)`
- `public static int wrapDegrees(int angle)`
- `public static int getInt(java.lang.String value,  int defaultValue)`
- `public static int getInt(java.lang.String value,  int defaultValue,  int max)`
- `public static double getDouble(java.lang.String value,  double defaultValue)`
- `public static double getDouble(java.lang.String value,  double defaultValue,  double max)`
- `public static int smallestEncompassingPowerOfTwo(int value)`
- `public static int log2DeBruijn(int value)`
- `public static int log2(int value)`
- `public static int roundUp(int number,  int interval)`
- `public static long getCoordinateRandom(int x,  int y,  int z)`
- `public static int rgb(float rIn,  float gIn,  float bIn)`
- `public static int rgb(int rIn,  int gIn,  int bIn)`
- `public static int multiplyColor(int p_180188_0_,  int p_180188_1_)`
- `public static double frac(double number)`
- `public static long getPositionRandom(Vec3i pos)`
- `public static java.util.UUID getRandomUUID(java.util.Random rand)`
- `public static java.util.UUID getRandomUUID()`
- `public static double pct(double p_181160_0_,  double p_181160_2_,  double p_181160_4_)`
- `public static double atan2(double p_181159_0_,  double p_181159_2_)`
- `public static double fastInvSqrt(double p_181161_0_)`
- `public static int hsvToRGB(float hue,  float saturation,  float value)`
- `public static int hash(int p_188208_0_)`

## RayTraceResult

*class* `net.minecraft.util.math.RayTraceResult`

### Fields
- `public int subHit`
  Used to determine what sub-segment is hit
- `public java.lang.Object hitInfo`
  Used to add extra hit info
- `public RayTraceResult.Type typeOfHit`
- `public EnumFacing sideHit`
- `public Vec3d hitVec`
- `public Entity entityHit`

### Methods
- `public BlockPos getBlockPos()`
- `public java.lang.String toString()`

## RayTraceResult.Type

*enum* `net.minecraft.util.math.RayTraceResult.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<RayTraceResult.Type>

Enclosing class: RayTraceResult

### Fields
- `public static final RayTraceResult.Type MISS`
- `public static final RayTraceResult.Type BLOCK`
- `public static final RayTraceResult.Type ENTITY`

### Methods
- `public static RayTraceResult.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (RayTraceResult.Type c : RayTraceResult.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static RayTraceResult.Type valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Rotations

*class* `net.minecraft.util.math.Rotations`

### Fields
- `protected final float x`
- `protected final float y`
- `protected final float z`

### Methods
- `public NBTTagList writeToNBT()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public float getX()`
- `public float getY()`
- `public float getZ()`

## Vec2f

*class* `net.minecraft.util.math.Vec2f`

### Fields
- `public static final Vec2f ZERO`
- `public static final Vec2f ONE`
- `public static final Vec2f UNIT_X`
- `public static final Vec2f NEGATIVE_UNIT_X`
- `public static final Vec2f UNIT_Y`
- `public static final Vec2f NEGATIVE_UNIT_Y`
- `public static final Vec2f MAX`
- `public static final Vec2f MIN`
- `public final float x`
- `public final float y`

## Vec3d

*class* `net.minecraft.util.math.Vec3d`

### Fields
- `public static final Vec3d ZERO`
- `public final double x`
- `public final double y`
- `public final double z`

### Methods
- `public Vec3d subtractReverse(Vec3d vec)`
- `public Vec3d normalize()`
- `public double dotProduct(Vec3d vec)`
- `public Vec3d crossProduct(Vec3d vec)`
- `public Vec3d subtract(Vec3d vec)`
- `public Vec3d subtract(double x,  double y,  double z)`
- `public Vec3d add(Vec3d vec)`
- `public Vec3d addVector(double x,  double y,  double z)`
- `public double distanceTo(Vec3d vec)`
- `public double squareDistanceTo(Vec3d vec)`
- `public double squareDistanceTo(double xIn,  double yIn,  double zIn)`
- `public Vec3d scale(double factor)`
- `public double lengthVector()`
- `public double lengthSquared()`
- `public Vec3d getIntermediateWithXValue(Vec3d vec,  double x)`
- `public Vec3d getIntermediateWithYValue(Vec3d vec,  double y)`
- `public Vec3d getIntermediateWithZValue(Vec3d vec,  double z)`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public java.lang.String toString()`
- `public Vec3d rotatePitch(float pitch)`
- `public Vec3d rotateYaw(float yaw)`
- `public static Vec3d fromPitchYawVector(Vec2f p_189984_0_)`
- `public static Vec3d fromPitchYaw(float p_189986_0_,  float p_189986_1_)`

## Vec3i

*class* `net.minecraft.util.math.Vec3i`

All Implemented Interfaces: java.lang.Comparable<Vec3i>

### Fields
- `public static final Vec3i NULL_VECTOR`

### Methods
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public int compareTo(Vec3i p_compareTo_1_)`
- `public int getX()`
- `public int getY()`
- `public int getZ()`
- `public Vec3i crossProduct(Vec3i vec)`
- `public double getDistance(int xIn,  int yIn,  int zIn)`
- `public double distanceSq(double toX,  double toY,  double toZ)`
- `public double distanceSqToCenter(double xIn,  double yIn,  double zIn)`
- `public double distanceSq(Vec3i to)`
- `public java.lang.String toString()`
