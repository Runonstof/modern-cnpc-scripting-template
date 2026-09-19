# net.minecraft.world.phys

- [AABB](#aabb)
- [BlockHitResult](#blockhitresult)
- [Class HitResult.Type](#class-hitresult.type)
- [EntityHitResult](#entityhitresult)
- [HitResult](#hitresult)
- [Vec2](#vec2)
- [Vec3](#vec3)
## AABB

*class* `net.minecraft.world.phys.AABB`

### Fields
- `private static final double EPSILON` (= 1.0E-7)
- `public final double minX`
- `public final double minY`
- `public final double minZ`
- `public final double maxX`
- `public final double maxY`
- `public final double maxZ`

### Methods
- `public static AABB of(BoundingBox p_82322_)`
- `public static AABB unitCubeFromLowerCorner(Vec3 p_82334_)`
- `public AABB setMinX(double p_165881_)`
- `public AABB setMinY(double p_165888_)`
- `public AABB setMinZ(double p_165890_)`
- `public AABB setMaxX(double p_165892_)`
- `public AABB setMaxY(double p_165894_)`
- `public AABB setMaxZ(double p_165896_)`
- `public double min(Direction.Axis p_82341_)`
- `public double max(Direction.Axis p_82375_)`
- `public boolean equals(Object p_82398_)`
- `public int hashCode()`
- `public AABB contract(double p_82311_,  double p_82312_,  double p_82313_)`
- `public AABB expandTowards(Vec3 p_82370_)`
- `public AABB expandTowards(double p_82364_,  double p_82365_,  double p_82366_)`
- `public AABB inflate(double p_82378_,  double p_82379_,  double p_82380_)`
- `public AABB inflate(double p_82401_)`
- `public AABB intersect(AABB p_82324_)`
- `public AABB minmax(AABB p_82368_)`
- `public AABB move(double p_82387_,  double p_82388_,  double p_82389_)`
- `public AABB move(BlockPos p_82339_)`
- `public AABB move(Vec3 p_82384_)`
- `public boolean intersects(AABB p_82382_)`
- `public boolean intersects(double p_82315_,  double p_82316_,  double p_82317_,  double p_82318_,  double p_82319_,  double p_82320_)`
- `public boolean intersects(Vec3 p_82336_,  Vec3 p_82337_)`
- `public boolean contains(Vec3 p_82391_)`
- `public boolean contains(double p_82394_,  double p_82395_,  double p_82396_)`
- `public double getSize()`
- `public double getXsize()`
- `public double getYsize()`
- `public double getZsize()`
- `public AABB deflate(double p_165898_,  double p_165899_,  double p_165900_)`
- `public AABB deflate(double p_82407_)`
- `public Optional<Vec3> clip(Vec3 p_82372_,  Vec3 p_82373_)`
- `@Nullable public static BlockHitResult clip(Iterable<AABB> p_82343_,  Vec3 p_82344_,  Vec3 p_82345_,  BlockPos p_82346_)`
- `@Nullable private static Direction getDirection(AABB p_82326_,  Vec3 p_82327_,  double[] p_82328_,  @Nullable  Direction p_82329_,  double p_82330_,  double p_82331_,  double p_82332_)`
- `@Nullable private static Direction clipPoint(double[] p_82348_,  @Nullable  Direction p_82349_,  double p_82350_,  double p_82351_,  double p_82352_,  double p_82353_,  double p_82354_,  double p_82355_,  double p_82356_,  double p_82357_,  Direction p_82358_,  double p_82359_,  double p_82360_,  double p_82361_)`
- `public double distanceToSqr(Vec3 p_273572_)`
- `public String toString()`
- `public boolean hasNaN()`
- `public Vec3 getCenter()`
- `public static AABB ofSize(Vec3 p_165883_,  double p_165884_,  double p_165885_,  double p_165886_)`

## BlockHitResult

*class* `net.minecraft.world.phys.BlockHitResult`

### Fields
- `private final Direction direction`
- `private final BlockPos blockPos`
- `private final boolean miss`
- `private final boolean inside`

### Inherited fields
- from `net.minecraft.world.phys.HitResult`: `location`

### Methods
- `public static BlockHitResult miss(Vec3 p_82427_,  Direction p_82428_,  BlockPos p_82429_)`
- `public BlockHitResult withDirection(Direction p_82433_)`
- `public BlockHitResult withPosition(BlockPos p_82431_)`
- `public BlockPos getBlockPos()`
- `public Direction getDirection()`
- `public HitResult.Type getType()`
- `public boolean isInside()`

### Inherited methods
- from `net.minecraft.world.phys.HitResult`: `distanceTo`, `getLocation`

## Class HitResult.Type

*enum* `net.minecraft.world.phys.Class HitResult.Type`

Enclosing class: HitResult

### Methods
- `public static HitResult.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static HitResult.Type valueOf(String name)`
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

## EntityHitResult

*class* `net.minecraft.world.phys.EntityHitResult`

### Fields
- `private final Entity entity`

### Inherited fields
- from `net.minecraft.world.phys.HitResult`: `location`

### Methods
- `public Entity getEntity()`
- `public HitResult.Type getType()`

### Inherited methods
- from `net.minecraft.world.phys.HitResult`: `distanceTo`, `getLocation`

## HitResult

*class* `net.minecraft.world.phys.HitResult`

### Fields
- `protected final Vec3 location`

### Methods
- `public double distanceTo(Entity p_82449_)`
- `public abstract HitResult.Type getType()`
- `public Vec3 getLocation()`

## Vec2

*class* `net.minecraft.world.phys.Vec2`

### Fields
- `public static final Vec2 ZERO`
- `public static final Vec2 ONE`
- `public static final Vec2 UNIT_X`
- `public static final Vec2 NEG_UNIT_X`
- `public static final Vec2 UNIT_Y`
- `public static final Vec2 NEG_UNIT_Y`
- `public static final Vec2 MAX`
- `public static final Vec2 MIN`
- `public final float x`
- `public final float y`

### Methods
- `public Vec2 scale(float p_165904_)`
- `public float dot(Vec2 p_165906_)`
- `public Vec2 add(Vec2 p_165911_)`
- `public Vec2 add(float p_165909_)`
- `public boolean equals(Vec2 p_82477_)`
- `public Vec2 normalized()`
- `public float length()`
- `public float lengthSquared()`
- `public float distanceToSqr(Vec2 p_165915_)`
- `public Vec2 negated()`

## Vec3

*class* `net.minecraft.world.phys.Vec3`

### Fields
- `public static final com.mojang.serialization.Codec<Vec3> CODEC`
- `public static final Vec3 ZERO`
- `public final double x`
- `public final double y`
- `public final double z`

### Methods
- `public static Vec3 fromRGB24(int p_82502_)`
- `public static Vec3 atLowerCornerOf(Vec3i p_82529_)`
- `public static Vec3 atLowerCornerWithOffset(Vec3i p_272866_,  double p_273680_,  double p_273668_,  double p_273687_)`
- `public static Vec3 atCenterOf(Vec3i p_82513_)`
- `public static Vec3 atBottomCenterOf(Vec3i p_82540_)`
- `public static Vec3 upFromBottomCenterOf(Vec3i p_82515_,  double p_82516_)`
- `public Vec3 vectorTo(Vec3 p_82506_)`
- `public Vec3 normalize()`
- `public double dot(Vec3 p_82527_)`
- `public Vec3 cross(Vec3 p_82538_)`
- `public Vec3 subtract(Vec3 p_82547_)`
- `public Vec3 subtract(double p_82493_,  double p_82494_,  double p_82495_)`
- `public Vec3 add(Vec3 p_82550_)`
- `public Vec3 add(double p_82521_,  double p_82522_,  double p_82523_)`
- `public boolean closerThan(Position p_82510_,  double p_82511_)`
- `public double distanceTo(Vec3 p_82555_)`
- `public double distanceToSqr(Vec3 p_82558_)`
- `public double distanceToSqr(double p_82532_,  double p_82533_,  double p_82534_)`
- `public Vec3 scale(double p_82491_)`
- `public Vec3 reverse()`
- `public Vec3 multiply(Vec3 p_82560_)`
- `public Vec3 multiply(double p_82543_,  double p_82544_,  double p_82545_)`
- `public Vec3 offsetRandom(RandomSource p_272810_,  float p_273473_)`
- `public double length()`
- `public double lengthSqr()`
- `public double horizontalDistance()`
- `public double horizontalDistanceSqr()`
- `public boolean equals(Object p_82552_)`
- `public int hashCode()`
- `public String toString()`
- `public Vec3 lerp(Vec3 p_165922_,  double p_165923_)`
- `public Vec3 xRot(float p_82497_)`
- `public Vec3 yRot(float p_82525_)`
- `public Vec3 zRot(float p_82536_)`
- `public static Vec3 directionFromRotation(Vec2 p_82504_)`
- `public static Vec3 directionFromRotation(float p_82499_,  float p_82500_)`
- `public Vec3 align(EnumSet<Direction.Axis> p_82518_)`
- `public double get(Direction.Axis p_82508_)`
- `public Vec3 with(Direction.Axis p_193104_,  double p_193105_)`
- `public Vec3 relative(Direction p_231076_,  double p_231077_)`
- `public final double x()`
- `public final double y()`
- `public final double z()`
- `public org.joml.Vector3f toVector3f()`
