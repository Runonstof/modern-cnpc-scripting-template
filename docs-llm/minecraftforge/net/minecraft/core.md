# net.minecraft.core

- [BlockMath](#blockmath)
- [BlockPos](#blockpos)
- [BlockPos.MutableBlockPos](#blockpos.mutableblockpos)
- [Class AxisCycle](#class-axiscycle)
- [Class Direction](#class-direction)
- [Class Direction.Axis](#class-direction.axis)
- [Class Direction.AxisDirection](#class-direction.axisdirection)
- [Class Direction.Plane](#class-direction.plane)
- [Class Direction8](#class-direction8)
- [Class FrontAndTop](#class-frontandtop)
- [Class Holder.Kind](#class-holder.kind)
- [Class Holder.Reference.Type](#class-holder.reference.type)
- [Cursor3D](#cursor3d)
- [DefaultedMappedRegistry](#defaultedmappedregistry)
- [DefaultedRegistry](#defaultedregistry)
- [GlobalPos](#globalpos)
- [Holder](#holder)
- [Holder.Direct](#holder.direct)
- [Holder.Reference](#holder.reference)
- [HolderGetter](#holdergetter)
- [HolderGetter.Provider](#holdergetter.provider)
- [HolderLookup](#holderlookup)
- [HolderLookup.Delegate](#holderlookup.delegate)
- [HolderLookup.Provider](#holderlookup.provider)
- [HolderLookup.RegistryLookup](#holderlookup.registrylookup)
- [HolderLookup.RegistryLookup.Delegate](#holderlookup.registrylookup.delegate)
- [HolderOwner](#holderowner)
- [HolderSet](#holderset)
- [HolderSet.Direct](#holderset.direct)
- [HolderSet.ListBacked](#holderset.listbacked)
- [HolderSet.Named](#holderset.named)
- [IdMap](#idmap)
- [IdMapper](#idmapper)
- [LayeredRegistryAccess](#layeredregistryaccess)
- [MappedRegistry](#mappedregistry)
- [NonNullList](#nonnulllist)
- [Position](#position)
- [QuartPos](#quartpos)
- [Registry](#registry)
- [RegistryAccess](#registryaccess)
- [RegistryAccess.Frozen](#registryaccess.frozen)
- [RegistryAccess.ImmutableRegistryAccess](#registryaccess.immutableregistryaccess)
- [RegistryAccess.RegistryEntry](#registryaccess.registryentry)
- [RegistryCodecs](#registrycodecs)
- [RegistryCodecs.RegistryEntry](#registrycodecs.registryentry)
- [RegistrySetBuilder](#registrysetbuilder)
- [RegistrySetBuilder.BuildState](#registrysetbuilder.buildstate)
- [RegistrySetBuilder.CompositeOwner](#registrysetbuilder.compositeowner)
- [RegistrySetBuilder.EmptyTagLookup](#registrysetbuilder.emptytaglookup)
- [RegistrySetBuilder.RegisteredValue](#registrysetbuilder.registeredvalue)
- [RegistrySetBuilder.RegistryBootstrap](#registrysetbuilder.registrybootstrap)
- [RegistrySetBuilder.RegistryContents](#registrysetbuilder.registrycontents)
- [RegistrySetBuilder.RegistryStub](#registrysetbuilder.registrystub)
- [RegistrySetBuilder.UniversalLookup](#registrysetbuilder.universallookup)
- [RegistrySetBuilder.ValueAndHolder](#registrysetbuilder.valueandholder)
- [RegistrySynchronization](#registrysynchronization)
- [RegistrySynchronization.NetworkedRegistryData](#registrysynchronization.networkedregistrydata)
- [Rotations](#rotations)
- [SectionPos](#sectionpos)
- [UUIDUtil](#uuidutil)
- [Vec3i](#vec3i)
- [WritableRegistry](#writableregistry)
## BlockMath

*class* `net.minecraft.core.BlockMath`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final Map<Direction,Transformation> VANILLA_UV_TRANSFORM_LOCAL_TO_GLOBAL`
- `public static final Map<Direction,Transformation> VANILLA_UV_TRANSFORM_GLOBAL_TO_LOCAL`

### Methods
- `public static Transformation blockCenterToCorner(Transformation p_121843_)`
- `public static Transformation blockCornerToCenter(Transformation p_175260_)`
- `public static Transformation getUVLockTransform(Transformation p_121845_,  Direction p_121846_,  Supplier<String> p_121847_)`

## BlockPos

*class* `net.minecraft.core.BlockPos`

### Fields
- `public static final com.mojang.serialization.Codec<BlockPos> CODEC`
- `private static final org.slf4j.Logger LOGGER`
- `public static final BlockPos ZERO`
- `private static final int PACKED_X_LENGTH`
- `private static final int PACKED_Z_LENGTH`
- `public static final int PACKED_Y_LENGTH`
- `private static final long PACKED_X_MASK`
- `private static final long PACKED_Y_MASK`
- `private static final long PACKED_Z_MASK`
- `private static final int Y_OFFSET` (= 0)
- `private static final int Z_OFFSET`
- `private static final int X_OFFSET`

### Methods
- `public static long offset(long p_121916_,  Direction p_121917_)`
- `public static long offset(long p_121911_,  int p_121912_,  int p_121913_,  int p_121914_)`
- `public static int getX(long p_121984_)`
- `public static int getY(long p_122009_)`
- `public static int getZ(long p_122016_)`
- `public static BlockPos of(long p_122023_)`
- `public static BlockPos containing(double p_275310_,  double p_275414_,  double p_275737_)`
- `public static BlockPos containing(Position p_275443_)`
- `public long asLong()`
- `public static long asLong(int p_121883_,  int p_121884_,  int p_121885_)`
- `public static long getFlatIndex(long p_122028_)`
- `public BlockPos offset(int p_121973_,  int p_121974_,  int p_121975_)`
- `public Vec3 getCenter()`
- `public BlockPos offset(Vec3i p_121956_)`
- `public BlockPos subtract(Vec3i p_121997_)`
- `public BlockPos multiply(int p_175263_)`
- `public BlockPos above()`
- `public BlockPos above(int p_121972_)`
- `public BlockPos below()`
- `public BlockPos below(int p_122000_)`
- `public BlockPos north()`
- `public BlockPos north(int p_122014_)`
- `public BlockPos south()`
- `public BlockPos south(int p_122021_)`
- `public BlockPos west()`
- `public BlockPos west(int p_122026_)`
- `public BlockPos east()`
- `public BlockPos east(int p_122031_)`
- `public BlockPos relative(Direction p_121946_)`
- `public BlockPos relative(Direction p_121948_,  int p_121949_)`
- `public BlockPos relative(Direction.Axis p_121943_,  int p_121944_)`
- `public BlockPos rotate(Rotation p_121918_)`
- `public BlockPos cross(Vec3i p_122011_)`
- `public BlockPos atY(int p_175289_)`
- `public BlockPos immutable()`
- `public BlockPos.MutableBlockPos mutable()`
- `public static Iterable<BlockPos> randomInCube(RandomSource p_235651_,  int p_235652_,  BlockPos p_235653_,  int p_235654_)`
- `@Deprecated public static Stream<BlockPos> squareOutSouthEast(BlockPos p_284978_)` (deprecated)
- `public static Iterable<BlockPos> randomBetweenClosed(RandomSource p_235642_,  int p_235643_,  int p_235644_,  int p_235645_,  int p_235646_,  int p_235647_,  int p_235648_,  int p_235649_)`
- `public static Iterable<BlockPos> withinManhattan(BlockPos p_121926_,  int p_121927_,  int p_121928_,  int p_121929_)`
- `public static Optional<BlockPos> findClosestMatch(BlockPos p_121931_,  int p_121932_,  int p_121933_,  Predicate<BlockPos> p_121934_)`
- `public static Stream<BlockPos> withinManhattanStream(BlockPos p_121986_,  int p_121987_,  int p_121988_,  int p_121989_)`
- `public static Iterable<BlockPos> betweenClosed(BlockPos p_121941_,  BlockPos p_121942_)`
- `public static Stream<BlockPos> betweenClosedStream(BlockPos p_121991_,  BlockPos p_121992_)`
- `public static Stream<BlockPos> betweenClosedStream(BoundingBox p_121920_)`
- `public static Stream<BlockPos> betweenClosedStream(AABB p_121922_)`
- `public static Stream<BlockPos> betweenClosedStream(int p_121887_,  int p_121888_,  int p_121889_,  int p_121890_,  int p_121891_,  int p_121892_)`
- `public static Iterable<BlockPos> betweenClosed(int p_121977_,  int p_121978_,  int p_121979_,  int p_121980_,  int p_121981_,  int p_121982_)`
- `public static Iterable<BlockPos.MutableBlockPos> spiralAround(BlockPos p_121936_,  int p_121937_,  Direction p_121938_,  Direction p_121939_)`
- `public static int breadthFirstTraversal(BlockPos p_278078_,  int p_277385_,  int p_277666_,  BiConsumer<BlockPos,Consumer<BlockPos>> p_277755_,  Predicate<BlockPos> p_278094_)`

### Inherited methods
- from `net.minecraft.core.Vec3i`: `closerThan`, `closerToCenterThan`, `compareTo`, `distManhattan`, `distSqr`, `distToCenterSqr`, `distToCenterSqr`, `distToLowCornerSqr`, `equals`, `get`, `getX`, `getY`, `getZ`, `hashCode`, `offsetCodec`, `setX`, `setY`, `setZ`, `toShortString`, `toString`

## BlockPos.MutableBlockPos

*class* `net.minecraft.core.BlockPos.MutableBlockPos`

Enclosing class: BlockPos

### Inherited fields
- from `net.minecraft.core.BlockPos`: `CODEC`, `PACKED_Y_LENGTH`, `ZERO`

### Methods
- `public BlockPos offset(int p_122163_,  int p_122164_,  int p_122165_)`
- `public BlockPos multiply(int p_175305_)`
- `public BlockPos relative(Direction p_122152_,  int p_122153_)`
- `public BlockPos relative(Direction.Axis p_122145_,  int p_122146_)`
- `public BlockPos rotate(Rotation p_122138_)`
- `public BlockPos.MutableBlockPos set(int p_122179_,  int p_122180_,  int p_122181_)`
- `public BlockPos.MutableBlockPos set(double p_122170_,  double p_122171_,  double p_122172_)`
- `public BlockPos.MutableBlockPos set(Vec3i p_122191_)`
- `public BlockPos.MutableBlockPos set(long p_122189_)`
- `public BlockPos.MutableBlockPos set(AxisCycle p_122140_,  int p_122141_,  int p_122142_,  int p_122143_)`
- `public BlockPos.MutableBlockPos setWithOffset(Vec3i p_122160_,  Direction p_122161_)`
- `public BlockPos.MutableBlockPos setWithOffset(Vec3i p_122155_,  int p_122156_,  int p_122157_,  int p_122158_)`
- `public BlockPos.MutableBlockPos setWithOffset(Vec3i p_175307_,  Vec3i p_175308_)`
- `public BlockPos.MutableBlockPos move(Direction p_122174_)`
- `public BlockPos.MutableBlockPos move(Direction p_122176_,  int p_122177_)`
- `public BlockPos.MutableBlockPos move(int p_122185_,  int p_122186_,  int p_122187_)`
- `public BlockPos.MutableBlockPos move(Vec3i p_122194_)`
- `public BlockPos.MutableBlockPos clamp(Direction.Axis p_122148_,  int p_122149_,  int p_122150_)`
- `public BlockPos.MutableBlockPos setX(int p_175341_)`
- `public BlockPos.MutableBlockPos setY(int p_175343_)`
- `public BlockPos.MutableBlockPos setZ(int p_175345_)`
- `public BlockPos immutable()`

### Inherited methods
- from `net.minecraft.core.BlockPos`: `above`, `above`, `asLong`, `asLong`, `atY`, `below`, `below`, `betweenClosed`, `betweenClosed`, `betweenClosedStream`, `betweenClosedStream`, `betweenClosedStream`, `betweenClosedStream`, `breadthFirstTraversal`, `containing`, `containing`, `cross`, `east`, `east`, `findClosestMatch`, `getCenter`, `getFlatIndex`, `getX`, `getY`, `getZ`, `mutable`, `north`, `north`, `of`, `offset`, `offset`, `offset`, `randomBetweenClosed`, `randomInCube`, `relative`, `south`, `south`, `spiralAround`, `squareOutSouthEast`, `subtract`, `west`, `west`, `withinManhattan`, `withinManhattanStream`
- from `net.minecraft.core.Vec3i`: `closerThan`, `closerToCenterThan`, `compareTo`, `distManhattan`, `distSqr`, `distToCenterSqr`, `distToCenterSqr`, `distToLowCornerSqr`, `equals`, `get`, `getX`, `getY`, `getZ`, `hashCode`, `offsetCodec`, `toShortString`, `toString`

## Class AxisCycle

*enum* `net.minecraft.core.Class AxisCycle`

### Fields
- `public static final Direction.Axis[] AXIS_VALUES`
- `public static final AxisCycle[] VALUES`

### Methods
- `public static AxisCycle[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static AxisCycle valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public abstract int cycle(int p_121794_,  int p_121795_,  int p_121796_,  Direction.Axis p_121797_)`
- `public abstract double cycle(double p_175236_,  double p_175237_,  double p_175238_,  Direction.Axis p_175239_)`
- `public abstract Direction.Axis cycle(Direction.Axis p_121798_)`
- `public abstract AxisCycle inverse()`
- `public static AxisCycle between(Direction.Axis p_121800_,  Direction.Axis p_121801_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Direction

*enum* `net.minecraft.core.Class Direction`

### Fields
- `public static final StringRepresentable.EnumCodec<Direction> CODEC`
- `public static final com.mojang.serialization.Codec<Direction> VERTICAL_CODEC`
- `private final int data3d`
- `private final int oppositeIndex`
- `private final int data2d`
- `private final String name`
- `private final Direction.Axis axis`
- `private final Direction.AxisDirection axisDirection`
- `private final Vec3i normal`
- `private static final Direction[] VALUES`
- `private static final Direction[] BY_3D_DATA`
- `private static final Direction[] BY_2D_DATA`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static Direction[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Direction valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static Direction[] orderedByNearest(Entity p_122383_)`
- `private static Direction[] makeDirectionArray(Direction p_122399_,  Direction p_122400_,  Direction p_122401_)`
- `public static Direction rotate(org.joml.Matrix4f p_254393_,  Direction p_254252_)`
- `public static Collection<Direction> allShuffled(RandomSource p_235668_)`
- `public static Stream<Direction> stream()`
- `public org.joml.Quaternionf getRotation()`
- `public int get3DDataValue()`
- `public int get2DDataValue()`
- `public Direction.AxisDirection getAxisDirection()`
- `public static Direction getFacingAxis(Entity p_175358_,  Direction.Axis p_175359_)`
- `public Direction getOpposite()`
- `public Direction getClockWise(Direction.Axis p_175363_)`
- `public Direction getCounterClockWise(Direction.Axis p_175365_)`
- `public Direction getClockWise()`
- `private Direction getClockWiseX()`
- `private Direction getCounterClockWiseX()`
- `private Direction getClockWiseZ()`
- `private Direction getCounterClockWiseZ()`
- `public Direction getCounterClockWise()`
- `public int getStepX()`
- `public int getStepY()`
- `public int getStepZ()`
- `public org.joml.Vector3f step()`
- `public String getName()`
- `public Direction.Axis getAxis()`
- `@Nullable public static Direction byName(@Nullable  String p_122403_)`
- `public static Direction from3DDataValue(int p_122377_)`
- `public static Direction from2DDataValue(int p_122408_)`
- `@Nullable public static Direction fromDelta(int p_278323_,  int p_278296_,  int p_278347_)`
- `public static Direction fromYRot(double p_122365_)`
- `public static Direction fromAxisAndDirection(Direction.Axis p_122388_,  Direction.AxisDirection p_122389_)`
- `public float toYRot()`
- `public static Direction getRandom(RandomSource p_235673_)`
- `public static Direction getNearest(double p_122367_,  double p_122368_,  double p_122369_)`
- `public static Direction getNearest(float p_122373_,  float p_122374_,  float p_122375_)`
- `public String toString()`
- `public String getSerializedName()`
- `private static com.mojang.serialization.DataResult<Direction> verifyVertical(Direction p_194529_)`
- `public static Direction get(Direction.AxisDirection p_122391_,  Direction.Axis p_122392_)`
- `public Vec3i getNormal()`
- `public boolean isFacingAngle(float p_122371_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## Class Direction.Axis

*enum* `net.minecraft.core.Class Direction.Axis`

Enclosing class: Direction

### Fields
- `public static final Direction.Axis[] VALUES`
- `public static final StringRepresentable.EnumCodec<Direction.Axis> CODEC`
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static Direction.Axis[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Direction.Axis valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `@Nullable public static Direction.Axis byName(String p_122474_)`
- `public String getName()`
- `public boolean isVertical()`
- `public boolean isHorizontal()`
- `public String toString()`
- `public static Direction.Axis getRandom(RandomSource p_235689_)`
- `public boolean test(@Nullable  Direction p_122472_)`
- `public Direction.Plane getPlane()`
- `public String getSerializedName()`
- `public abstract int choose(int p_122466_,  int p_122467_,  int p_122468_)`
- `public abstract double choose(double p_122463_,  double p_122464_,  double p_122465_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## Class Direction.AxisDirection

*enum* `net.minecraft.core.Class Direction.AxisDirection`

Enclosing class: Direction

### Fields
- `private final int step`
- `private final String name`

### Methods
- `public static Direction.AxisDirection[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Direction.AxisDirection valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getStep()`
- `public String getName()`
- `public String toString()`
- `public Direction.AxisDirection opposite()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## Class Direction.Plane

*enum* `net.minecraft.core.Class Direction.Plane`

Enclosing class: Direction

### Fields
- `private final Direction[] faces`
- `private final Direction.Axis[] axis`

### Methods
- `public static Direction.Plane[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Direction.Plane valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public Direction getRandomDirection(RandomSource p_235691_)`
- `public Direction.Axis getRandomAxis(RandomSource p_235693_)`
- `public boolean test(@Nullable  Direction p_122559_)`
- `public Iterator<Direction> iterator()`
- `public Stream<Direction> stream()`
- `public List<Direction> shuffledCopy(RandomSource p_235695_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `java.lang.Iterable`: `forEach`, `spliterator`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## Class Direction8

*enum* `net.minecraft.core.Class Direction8`

### Fields
- `private final Set<Direction> directions`
- `private final Vec3i step`

### Methods
- `public static Direction8[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Direction8 valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public Set<Direction> getDirections()`
- `public int getStepX()`
- `public int getStepZ()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class FrontAndTop

*enum* `net.minecraft.core.Class FrontAndTop`

### Fields
- `private static final it.unimi.dsi.fastutil.ints.Int2ObjectMap<FrontAndTop> LOOKUP_TOP_FRONT`
- `private final String name`
- `private final Direction top`
- `private final Direction front`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static FrontAndTop[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static FrontAndTop valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `private static int lookupKey(Direction p_122627_,  Direction p_122628_)`
- `public String getSerializedName()`
- `public static FrontAndTop fromFrontAndTop(Direction p_122623_,  Direction p_122624_)`
- `public Direction front()`
- `public Direction top()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Holder.Kind

*enum* `net.minecraft.core.Class Holder.Kind`

Enclosing interface: Holder<T>

### Methods
- `public static Holder.Kind[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Holder.Kind valueOf(String name)`
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

## Class Holder.Reference.Type

*enum* `net.minecraft.core.Class Holder.Reference.Type`

Enclosing class: Holder.Reference<T>

### Methods
- `public static Holder.Reference.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Holder.Reference.Type valueOf(String name)`
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

## Cursor3D

*class* `net.minecraft.core.Cursor3D`

### Fields
- `public static final int TYPE_INSIDE` (= 0)
- `public static final int TYPE_FACE` (= 1)
- `public static final int TYPE_EDGE` (= 2)
- `public static final int TYPE_CORNER` (= 3)
- `private final int originX`
- `private final int originY`
- `private final int originZ`
- `private final int width`
- `private final int height`
- `private final int depth`
- `private final int end`
- `private int index`
- `private int x`
- `private int y`
- `private int z`

### Methods
- `public boolean advance()`
- `public int nextX()`
- `public int nextY()`
- `public int nextZ()`
- `public int getNextType()`

## DefaultedMappedRegistry

*class* `net.minecraft.core.DefaultedMappedRegistry`

### Fields
- `private final ResourceLocation defaultKey`
- `private Holder.Reference<T> defaultValue`

### Inherited fields
- from `net.minecraft.core.MappedRegistry`: `key`, `unregisteredIntrusiveHolders`
- from `net.minecraft.core.IdMap`: `DEFAULT`

### Methods
- `public Holder.Reference<T> registerMapping(int p_259787_,  ResourceKey<T> p_259677_,  T p_259430_,  com.mojang.serialization.Lifecycle p_259516_)`
- `public int getId(@Nullable  T p_260033_)`
- `@Nonnull public ResourceLocation getKey(T p_259233_)`
- `@Nonnull public T get(@Nullable  ResourceLocation p_260004_)`
- `public Optional<T> getOptional(@Nullable  ResourceLocation p_260078_)`
- `@Nonnull public T byId(int p_259534_)`
- `public Optional<Holder.Reference<T>> getRandom(RandomSource p_260255_)`
- `public ResourceLocation getDefaultKey()`

### Inherited methods
- from `net.minecraft.core.MappedRegistry`: `asLookup`, `bindTags`, `containsKey`, `containsKey`, `createIntrusiveHolder`, `createRegistrationLookup`, `entrySet`, `freeze`, `get`, `getHolder`, `getHolder`, `getKnownRegistries`, `getOrCreateHolderOrThrow`, `getOrCreateTag`, `getResourceKey`, `getTag`, `getTagNames`, `getTags`, `holderOwner`, `holders`, `isEmpty`, `iterator`, `key`, `keySet`, `lifecycle`, `markKnown`, `register`, `registryKeySet`, `registryLifecycle`, `resetTags`, `size`, `toString`, `unfreeze`, `wrapAsHolder`
- from `net.minecraft.core.IdMap`: `byIdOrThrow`, `size`
- from `java.lang.Iterable`: `forEach`, `iterator`, `spliterator`
- from `net.minecraft.core.Registry`: `asHolderIdMap`, `asLookup`, `asTagAddingLookup`, `bindTags`, `byNameCodec`, `containsKey`, `containsKey`, `createIntrusiveHolder`, `entrySet`, `freeze`, `get`, `getHolder`, `getHolder`, `getHolderOrThrow`, `getOptional`, `getOrCreateTag`, `getOrThrow`, `getResourceKey`, `getTag`, `getTagNames`, `getTagOrEmpty`, `getTags`, `holderByNameCodec`, `holderOwner`, `holders`, `key`, `keys`, `keySet`, `lifecycle`, `registryKeySet`, `registryLifecycle`, `resetTags`, `stream`, `wrapAsHolder`

## DefaultedRegistry

*interface* `net.minecraft.core.DefaultedRegistry`

All Superinterfaces: IdMap<T>, Iterable<T>, com.mojang.serialization.Keyable, Registry<T>

### Inherited fields
- from `net.minecraft.core.IdMap`: `DEFAULT`

### Methods
- `@Nonnull ResourceLocation getKey(T p_122330_)`
- `@Nonnull T get(@Nullable  ResourceLocation p_122328_)`
- `@Nonnull T byId(int p_122317_)`
- `ResourceLocation getDefaultKey()`

### Inherited methods
- from `net.minecraft.core.IdMap`: `byIdOrThrow`, `size`
- from `java.lang.Iterable`: `forEach`, `iterator`, `spliterator`
- from `net.minecraft.core.Registry`: `asHolderIdMap`, `asLookup`, `asTagAddingLookup`, `bindTags`, `byNameCodec`, `containsKey`, `containsKey`, `createIntrusiveHolder`, `entrySet`, `freeze`, `get`, `getHolder`, `getHolder`, `getHolderOrThrow`, `getId`, `getOptional`, `getOptional`, `getOrCreateTag`, `getOrThrow`, `getRandom`, `getResourceKey`, `getTag`, `getTagNames`, `getTagOrEmpty`, `getTags`, `holderByNameCodec`, `holderOwner`, `holders`, `key`, `keys`, `keySet`, `lifecycle`, `registryKeySet`, `registryLifecycle`, `resetTags`, `stream`, `wrapAsHolder`

## GlobalPos

*class* `net.minecraft.core.GlobalPos`

### Fields
- `public static final com.mojang.serialization.Codec<GlobalPos> CODEC`
- `private final ResourceKey<Level> dimension`
- `private final BlockPos pos`

### Methods
- `public static GlobalPos of(ResourceKey<Level> p_122644_,  BlockPos p_122645_)`
- `public ResourceKey<Level> dimension()`
- `public BlockPos pos()`
- `public boolean equals(Object p_122648_)`
- `public int hashCode()`
- `public String toString()`

## Holder

*interface* `net.minecraft.core.Holder`

All Superinterfaces: IReverseTag<T>, Supplier<T>

### Methods
- `default boolean containsTag(TagKey<T> key)`
- `default Stream<TagKey<T>> getTagKeys()`
- `default T get()`
- `T value()`
- `boolean isBound()`
- `boolean is(ResourceLocation p_205713_)`
- `boolean is(ResourceKey<T> p_205712_)`
- `boolean is(Predicate<ResourceKey<T>> p_205711_)`
- `boolean is(TagKey<T> p_205705_)`
- `Stream<TagKey<T>> tags()`
- `com.mojang.datafixers.util.Either<ResourceKey<T>,T> unwrap()`
- `Optional<ResourceKey<T>> unwrapKey()`
- `Holder.Kind kind()`
- `boolean canSerializeIn(HolderOwner<T> p_255833_)`
- `static <T> Holder<T> direct(T p_205710_)`

### Inherited methods
- from `net.minecraftforge.registries.tags.IReverseTag`: `containsTag`

## Holder.Direct

*record* `net.minecraft.core.Holder.Direct`

Enclosing interface: Holder<T>

### Fields
- `private final T value`
  The field for the value record component.

### Methods
- `public boolean isBound()`
- `public boolean is(ResourceLocation p_205727_)`
- `public boolean is(ResourceKey<T> p_205725_)`
- `public boolean is(TagKey<T> p_205719_)`
- `public boolean is(Predicate<ResourceKey<T>> p_205723_)`
- `public com.mojang.datafixers.util.Either<ResourceKey<T>,T> unwrap()`
- `public Optional<ResourceKey<T>> unwrapKey()`
- `public Holder.Kind kind()`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public boolean canSerializeIn(HolderOwner<T> p_256328_)`
- `public Stream<TagKey<T>> tags()`
- `public T value()`
  Returns the value of the value record component.
  - returns: the value of the value record component
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.

### Inherited methods
- from `net.minecraft.core.Holder`: `containsTag`, `get`, `getTagKeys`
- from `net.minecraftforge.registries.tags.IReverseTag`: `containsTag`

## Holder.Reference

*class* `net.minecraft.core.Holder.Reference`

Enclosing interface: Holder<T>

### Fields
- `private final HolderOwner<T> owner`
- `private Set<TagKey<T>> tags`
- `private final Holder.Reference.Type type`
- `@Nullable private ResourceKey<T> key`
- `@Nullable private T value`

### Methods
- `public static <T> Holder.Reference<T> createStandAlone(HolderOwner<T> p_255955_,  ResourceKey<T> p_255958_)`
- `@Deprecated public static <T> Holder.Reference<T> createIntrusive(HolderOwner<T> p_256106_,  @Nullable  T p_255948_)` (deprecated)
- `public ResourceKey<T> key()`
- `public T value()`
- `public boolean is(ResourceLocation p_205779_)`
- `public boolean is(ResourceKey<T> p_205774_)`
- `public boolean is(TagKey<T> p_205760_)`
- `public boolean is(Predicate<ResourceKey<T>> p_205772_)`
- `public boolean canSerializeIn(HolderOwner<T> p_256521_)`
- `public com.mojang.datafixers.util.Either<ResourceKey<T>,T> unwrap()`
- `public Optional<ResourceKey<T>> unwrapKey()`
- `public Holder.Kind kind()`
- `public boolean isBound()`
- `public void bindKey(ResourceKey<T> p_251943_)`
- `public void bindValue(T p_249418_)`
- `public void bindTags(Collection<TagKey<T>> p_205770_)`
- `public Stream<TagKey<T>> tags()`
- `public Holder.Reference.Type getType()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.core.Holder`: `containsTag`, `get`, `getTagKeys`
- from `net.minecraftforge.registries.tags.IReverseTag`: `containsTag`

## HolderGetter

*interface* `net.minecraft.core.HolderGetter`

### Methods
- `Optional<Holder.Reference<T>> get(ResourceKey<T> p_255645_)`
- `default Holder.Reference<T> getOrThrow(ResourceKey<T> p_255990_)`
- `Optional<HolderSet.Named<T>> get(TagKey<T> p_256283_)`
- `default HolderSet.Named<T> getOrThrow(TagKey<T> p_256125_)`

## HolderGetter.Provider

*interface* `net.minecraft.core.HolderGetter.Provider`

Enclosing interface: HolderGetter<T>

### Methods
- `<T> Optional<HolderGetter<T>> lookup(ResourceKey<? extends Registry<? extends T>> p_256648_)`
- `default <T> HolderGetter<T> lookupOrThrow(ResourceKey<? extends Registry<? extends T>> p_255881_)`

## HolderLookup

*interface* `net.minecraft.core.HolderLookup`

All Superinterfaces: HolderGetter<T>

### Methods
- `Stream<Holder.Reference<T>> listElements()`
- `default Stream<ResourceKey<T>> listElementIds()`
- `Stream<HolderSet.Named<T>> listTags()`
- `default Stream<TagKey<T>> listTagIds()`
- `default HolderLookup<T> filterElements(Predicate<T> p_256028_)`

### Inherited methods
- from `net.minecraft.core.HolderGetter`: `get`, `get`, `getOrThrow`, `getOrThrow`

## HolderLookup.Delegate

*class* `net.minecraft.core.HolderLookup.Delegate`

Enclosing interface: HolderLookup<T>

### Fields
- `protected final HolderLookup<T> parent`

### Methods
- `public Optional<Holder.Reference<T>> get(ResourceKey<T> p_256195_)`
- `public Stream<Holder.Reference<T>> listElements()`
- `public Optional<HolderSet.Named<T>> get(TagKey<T> p_256388_)`
- `public Stream<HolderSet.Named<T>> listTags()`

### Inherited methods
- from `net.minecraft.core.HolderGetter`: `getOrThrow`, `getOrThrow`
- from `net.minecraft.core.HolderLookup`: `filterElements`, `listElementIds`, `listTagIds`

## HolderLookup.Provider

*interface* `net.minecraft.core.HolderLookup.Provider`

Enclosing interface: HolderLookup<T>

### Methods
- `<T> Optional<HolderLookup.RegistryLookup<T>> lookup(ResourceKey<? extends Registry<? extends T>> p_256285_)`
- `default <T> HolderLookup.RegistryLookup<T> lookupOrThrow(ResourceKey<? extends Registry<? extends T>> p_255957_)`
- `default HolderGetter.Provider asGetterLookup()`
- `static HolderLookup.Provider create(Stream<HolderLookup.RegistryLookup<?>> p_256054_)`

## HolderLookup.RegistryLookup

*interface* `net.minecraft.core.HolderLookup.RegistryLookup`

All Superinterfaces: HolderGetter<T>, HolderLookup<T>, HolderOwner<T>

Enclosing interface: HolderLookup<T>

### Methods
- `ResourceKey<? extends Registry<? extends T>> key()`
- `com.mojang.serialization.Lifecycle registryLifecycle()`
- `default HolderLookup<T> filterFeatures(FeatureFlagSet p_249397_)`

### Inherited methods
- from `net.minecraft.core.HolderGetter`: `get`, `get`, `getOrThrow`, `getOrThrow`
- from `net.minecraft.core.HolderLookup`: `filterElements`, `listElementIds`, `listElements`, `listTagIds`, `listTags`
- from `net.minecraft.core.HolderOwner`: `canSerializeIn`

## HolderLookup.RegistryLookup.Delegate

*class* `net.minecraft.core.HolderLookup.RegistryLookup.Delegate`

Enclosing interface: HolderLookup.RegistryLookup<T>

### Methods
- `protected abstract HolderLookup.RegistryLookup<T> parent()`
- `public ResourceKey<? extends Registry<? extends T>> key()`
- `public com.mojang.serialization.Lifecycle registryLifecycle()`
- `public Optional<Holder.Reference<T>> get(ResourceKey<T> p_255619_)`
- `public Stream<Holder.Reference<T>> listElements()`
- `public Optional<HolderSet.Named<T>> get(TagKey<T> p_256245_)`
- `public Stream<HolderSet.Named<T>> listTags()`

### Inherited methods
- from `net.minecraft.core.HolderGetter`: `getOrThrow`, `getOrThrow`
- from `net.minecraft.core.HolderLookup`: `filterElements`, `listElementIds`, `listTagIds`
- from `net.minecraft.core.HolderLookup.RegistryLookup`: `filterFeatures`
- from `net.minecraft.core.HolderOwner`: `canSerializeIn`

## HolderOwner

*interface* `net.minecraft.core.HolderOwner`

### Methods
- `default boolean canSerializeIn(HolderOwner<T> p_255875_)`

## HolderSet

*interface* `net.minecraft.core.HolderSet`

All Superinterfaces: IForgeHolderSet<T>, Iterable<Holder<T>>

### Methods
- `Stream<Holder<T>> stream()`
- `int size()`
- `com.mojang.datafixers.util.Either<TagKey<T>,List<Holder<T>>> unwrap()`
- `Optional<Holder<T>> getRandomElement(RandomSource p_235712_)`
- `Holder<T> get(int p_205798_)`
- `boolean contains(Holder<T> p_205799_)`
- `boolean canSerializeIn(HolderOwner<T> p_255749_)`
- `Optional<TagKey<T>> unwrapKey()`
- `@Deprecated @VisibleForTesting static <T> HolderSet.Named<T> emptyNamed(HolderOwner<T> p_255858_,  TagKey<T> p_256459_)` (deprecated)
- `@SafeVarargs static <T> HolderSet.Direct<T> direct(Holder<T>... p_205810_)`
- `static <T> HolderSet.Direct<T> direct(List<? extends Holder<T>> p_205801_)`
- `@SafeVarargs static <E, T> HolderSet.Direct<T> direct(Function<E,Holder<T>> p_205807_,  E... p_205808_)`
- `static <E, T> HolderSet.Direct<T> direct(Function<E,Holder<T>> p_205804_,  Collection<E> p_298882_)`

### Inherited methods
- from `net.minecraftforge.common.extensions.IForgeHolderSet`: `addInvalidationListener`, `serializationType`
- from `java.lang.Iterable`: `forEach`, `iterator`, `spliterator`

## HolderSet.Direct

*class* `net.minecraft.core.HolderSet.Direct`

Enclosing interface: HolderSet<T>

### Fields
- `private final List<Holder<T>> contents`
- `@Nullable private Set<Holder<T>> contentsSet`

### Methods
- `protected List<Holder<T>> contents()`
- `public com.mojang.datafixers.util.Either<TagKey<T>,List<Holder<T>>> unwrap()`
- `public Optional<TagKey<T>> unwrapKey()`
- `public boolean contains(Holder<T> p_205816_)`
- `public String toString()`

### Inherited methods
- from `net.minecraft.core.HolderSet.ListBacked`: `canSerializeIn`, `get`, `getRandomElement`, `iterator`, `size`, `spliterator`, `stream`
- from `net.minecraftforge.common.extensions.IForgeHolderSet`: `addInvalidationListener`, `serializationType`
- from `java.lang.Iterable`: `forEach`

## HolderSet.ListBacked

*class* `net.minecraft.core.HolderSet.ListBacked`

Enclosing interface: HolderSet<T>

### Methods
- `protected abstract List<Holder<T>> contents()`
- `public int size()`
- `public Spliterator<Holder<T>> spliterator()`
- `public Iterator<Holder<T>> iterator()`
- `public Stream<Holder<T>> stream()`
- `public Optional<Holder<T>> getRandomElement(RandomSource p_235714_)`
- `public Holder<T> get(int p_205823_)`
- `public boolean canSerializeIn(HolderOwner<T> p_255876_)`

### Inherited methods
- from `net.minecraft.core.HolderSet`: `contains`, `unwrap`, `unwrapKey`
- from `net.minecraftforge.common.extensions.IForgeHolderSet`: `addInvalidationListener`, `serializationType`
- from `java.lang.Iterable`: `forEach`

## HolderSet.Named

*class* `net.minecraft.core.HolderSet.Named`

Enclosing interface: HolderSet<T>

### Fields
- `private final HolderOwner<T> owner`
- `private final TagKey<T> key`
- `private List<Holder<T>> contents`
- `private List<Runnable> invalidationCallbacks`

### Methods
- `public void bind(List<Holder<T>> p_205836_)`
- `public TagKey<T> key()`
- `protected List<Holder<T>> contents()`
- `public com.mojang.datafixers.util.Either<TagKey<T>,List<Holder<T>>> unwrap()`
- `public Optional<TagKey<T>> unwrapKey()`
- `public boolean contains(Holder<T> p_205834_)`
- `public String toString()`
- `public boolean canSerializeIn(HolderOwner<T> p_256542_)`
- `public void addInvalidationListener(Runnable runnable)`
  Description copied from interface: IForgeHolderSet
  Adds a callback to run when this holderset's contents invalidate (i.e. because tags were rebound).
  
   The intended usage and use case is with composite holdersets that need to cache sets/list based on other
   holdersets, which may be mutable (because they are tag-based or themselves composite holdersets).
   Composite holdersets should use this to add callbacks to each of their component holdersets when constructed.
  - param: runnable - Runnable to invoke when this component holderset's contents are no longer valid.
 This runnable should only clear caches and allow them to be lazily reevaluated later,
 as not all tag holdersets may have been rebound when this is called.
 This runnable should also invalidate all of the caller's listeners.

### Inherited methods
- from `net.minecraft.core.HolderSet.ListBacked`: `get`, `getRandomElement`, `iterator`, `size`, `spliterator`, `stream`
- from `net.minecraftforge.common.extensions.IForgeHolderSet`: `serializationType`
- from `java.lang.Iterable`: `forEach`

## IdMap

*interface* `net.minecraft.core.IdMap`

All Superinterfaces: Iterable<T>

### Fields
- `static final int DEFAULT` (= -1)

### Methods
- `int getId(T p_122652_)`
- `@Nullable T byId(int p_122651_)`
- `default T byIdOrThrow(int p_200958_)`
- `int size()`

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `iterator`, `spliterator`

## IdMapper

*class* `net.minecraft.core.IdMapper`

### Fields
- `protected int nextId`
- `protected final it.unimi.dsi.fastutil.objects.Object2IntMap<T> tToId`
- `protected final List<T> idToT`

### Inherited fields
- from `net.minecraft.core.IdMap`: `DEFAULT`

### Methods
- `public void addMapping(T p_122665_,  int p_122666_)`
- `public void add(T p_122668_)`
- `public int getId(T p_122663_)`
- `@Nullable public final T byId(int p_122661_)`
- `public Iterator<T> iterator()`
- `public boolean contains(int p_175381_)`
- `public int size()`

### Inherited methods
- from `net.minecraft.core.IdMap`: `byIdOrThrow`
- from `java.lang.Iterable`: `forEach`, `spliterator`

## LayeredRegistryAccess

*class* `net.minecraft.core.LayeredRegistryAccess`

### Fields
- `private final List<T> keys`
- `private final List<RegistryAccess.Frozen> values`
- `private final RegistryAccess.Frozen composite`

### Methods
- `private int getLayerIndexOrThrow(T p_250144_)`
- `public RegistryAccess.Frozen getLayer(T p_250826_)`
- `public RegistryAccess.Frozen getAccessForLoading(T p_251335_)`
- `public RegistryAccess.Frozen getAccessFrom(T p_250766_)`
- `private RegistryAccess.Frozen getCompositeAccessForLayers(int p_251526_,  int p_251999_)`
- `public LayeredRegistryAccess<T> replaceFrom(T p_252104_,  RegistryAccess.Frozen... p_250492_)`
- `public LayeredRegistryAccess<T> replaceFrom(T p_249539_,  List<RegistryAccess.Frozen> p_250124_)`
- `public RegistryAccess.Frozen compositeAccess()`
- `private static Map<ResourceKey<? extends Registry<?>>,Registry<?>> collectRegistries(Stream<? extends RegistryAccess> p_248595_)`

## MappedRegistry

*class* `net.minecraft.core.MappedRegistry`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `final ResourceKey<? extends Registry<T>> key`
- `private final it.unimi.dsi.fastutil.objects.ObjectList<Holder.Reference<T>> byId`
- `private final it.unimi.dsi.fastutil.objects.Object2IntMap<T> toId`
- `private final Map<ResourceLocation,Holder.Reference<T>> byLocation`
- `private final Map<ResourceKey<T>,Holder.Reference<T>> byKey`
- `private final Map<T,Holder.Reference<T>> byValue`
- `private final Map<T,com.mojang.serialization.Lifecycle> lifecycles`
- `private com.mojang.serialization.Lifecycle registryLifecycle`
- `private volatile Map<TagKey<T>,HolderSet.Named<T>> tags`
- `private boolean frozen`
- `@Nullable protected Map<T,Holder.Reference<T>> unregisteredIntrusiveHolders`
- `@Nullable private List<Holder.Reference<T>> holdersInOrder`
- `private int nextId`
- `private final HolderLookup.RegistryLookup<T> lookup`
- `private static final Set<ResourceLocation> KNOWN`

### Inherited fields
- from `net.minecraft.core.IdMap`: `DEFAULT`

### Methods
- `public ResourceKey<? extends Registry<T>> key()`
- `public String toString()`
- `private List<Holder.Reference<T>> holdersInOrder()`
- `private void validateWrite()`
- `private void validateWrite(ResourceKey<T> p_205922_)`
- `public static Set<ResourceLocation> getKnownRegistries()`
- `protected final void markKnown()`
- `public Holder.Reference<T> registerMapping(int p_256563_,  ResourceKey<T> p_256594_,  T p_256374_,  com.mojang.serialization.Lifecycle p_256469_)`
- `public Holder.Reference<T> register(ResourceKey<T> p_256252_,  T p_256591_,  com.mojang.serialization.Lifecycle p_256255_)`
- `@Nullable public ResourceLocation getKey(T p_122746_)`
- `public Optional<ResourceKey<T>> getResourceKey(T p_122755_)`
- `public int getId(@Nullable  T p_122706_)`
- `@Nullable public T get(@Nullable  ResourceKey<T> p_122714_)`
- `@Nullable public T byId(int p_122684_)`
- `public Optional<Holder.Reference<T>> getHolder(int p_205907_)`
- `public Optional<Holder.Reference<T>> getHolder(ResourceKey<T> p_205905_)`
- `public Holder<T> wrapAsHolder(T p_263356_)`
- `Holder.Reference<T> getOrCreateHolderOrThrow(ResourceKey<T> p_248831_)`
- `public int size()`
- `public com.mojang.serialization.Lifecycle lifecycle(T p_122764_)`
- `public com.mojang.serialization.Lifecycle registryLifecycle()`
- `public Iterator<T> iterator()`
- `@Nullable public T get(@Nullable  ResourceLocation p_122739_)`
- `@Nullable private static <T> T getValueFromNullable(@Nullable  Holder.Reference<T> p_205866_)`
- `public Set<ResourceLocation> keySet()`
- `public Set<ResourceKey<T>> registryKeySet()`
- `public Set<Map.Entry<ResourceKey<T>,T>> entrySet()`
- `public Stream<Holder.Reference<T>> holders()`
- `public Stream<com.mojang.datafixers.util.Pair<TagKey<T>,HolderSet.Named<T>>> getTags()`
- `public HolderSet.Named<T> getOrCreateTag(TagKey<T> p_205895_)`
- `private HolderSet.Named<T> createTag(TagKey<T> p_211068_)`
- `public Stream<TagKey<T>> getTagNames()`
- `public boolean isEmpty()`
- `public Optional<Holder.Reference<T>> getRandom(RandomSource p_235716_)`
- `public boolean containsKey(ResourceLocation p_122761_)`
- `public boolean containsKey(ResourceKey<T> p_175392_)`
- `@Deprecated public void unfreeze()` (deprecated)
- `public Registry<T> freeze()`
- `public Holder.Reference<T> createIntrusiveHolder(T p_205915_)`
- `public Optional<HolderSet.Named<T>> getTag(TagKey<T> p_205909_)`
- `public void bindTags(Map<TagKey<T>,List<Holder<T>>> p_205875_)`
- `public void resetTags()`
- `public HolderGetter<T> createRegistrationLookup()`
- `public HolderOwner<T> holderOwner()`
- `public HolderLookup.RegistryLookup<T> asLookup()`

### Inherited methods
- from `net.minecraft.core.IdMap`: `byIdOrThrow`
- from `java.lang.Iterable`: `forEach`, `spliterator`
- from `net.minecraft.core.Registry`: `asHolderIdMap`, `asTagAddingLookup`, `byNameCodec`, `getHolderOrThrow`, `getOptional`, `getOptional`, `getOrThrow`, `getTagOrEmpty`, `holderByNameCodec`, `keys`, `stream`

## NonNullList

*class* `net.minecraft.core.NonNullList`

### Fields
- `private final List<E> list`
- `@Nullable private final E defaultValue`

### Inherited fields
- from `java.util.AbstractList`: `modCount`

### Methods
- `public static <E> NonNullList<E> create()`
- `public static <E> NonNullList<E> createWithCapacity(int p_182648_)`
- `public static <E> NonNullList<E> withSize(int p_122781_,  E p_122782_)`
- `@SafeVarargs public static <E> NonNullList<E> of(E p_122784_,  E... p_122785_)`
- `@Nonnull public E get(int p_122791_)`
- `public E set(int p_122795_,  E p_122796_)`
- `public void add(int p_122787_,  E p_122788_)`
- `public E remove(int p_122793_)`
- `public int size()`
- `public void clear()`

### Inherited methods
- from `java.util.AbstractList`: `add`, `addAll`, `equals`, `hashCode`, `indexOf`, `iterator`, `lastIndexOf`, `listIterator`, `listIterator`, `removeRange`, `subList`
- from `java.util.AbstractCollection`: `addAll`, `contains`, `containsAll`, `isEmpty`, `remove`, `removeAll`, `retainAll`, `toArray`, `toArray`, `toString`
- from `java.util.Collection`: `parallelStream`, `removeIf`, `stream`, `toArray`
- from `java.lang.Iterable`: `forEach`
- from `java.util.List`: `addAll`, `contains`, `containsAll`, `isEmpty`, `remove`, `removeAll`, `replaceAll`, `retainAll`, `sort`, `spliterator`, `toArray`, `toArray`

## Position

*interface* `net.minecraft.core.Position`

### Methods
- `double x()`
- `double y()`
- `double z()`

## QuartPos

*class* `net.minecraft.core.QuartPos`

### Fields
- `public static final int BITS` (= 2)
- `public static final int SIZE` (= 4)
- `public static final int MASK` (= 3)
- `private static final int SECTION_TO_QUARTS_BITS` (= 2)

### Methods
- `public static int fromBlock(int p_175401_)`
- `public static int quartLocal(int p_198377_)`
- `public static int toBlock(int p_175403_)`
- `public static int fromSection(int p_175405_)`
- `public static int toSection(int p_175407_)`

## Registry

*interface* `net.minecraft.core.Registry`

All Superinterfaces: IdMap<T>, Iterable<T>, com.mojang.serialization.Keyable

### Inherited fields
- from `net.minecraft.core.IdMap`: `DEFAULT`

### Methods
- `ResourceKey<? extends Registry<T>> key()`
- `default com.mojang.serialization.Codec<T> byNameCodec()`
- `default com.mojang.serialization.Codec<Holder<T>> holderByNameCodec()`
- `default <U> Stream<U> keys(com.mojang.serialization.DynamicOps<U> p_123030_)`
- `@Nullable ResourceLocation getKey(T p_123006_)`
- `Optional<ResourceKey<T>> getResourceKey(T p_123008_)`
- `int getId(@Nullable  T p_122977_)`
- `@Nullable T get(@Nullable  ResourceKey<T> p_122980_)`
- `@Nullable T get(@Nullable  ResourceLocation p_123002_)`
- `com.mojang.serialization.Lifecycle lifecycle(T p_123012_)`
- `com.mojang.serialization.Lifecycle registryLifecycle()`
- `default Optional<T> getOptional(@Nullable  ResourceLocation p_123007_)`
- `default Optional<T> getOptional(@Nullable  ResourceKey<T> p_123010_)`
- `default T getOrThrow(ResourceKey<T> p_123014_)`
- `Set<ResourceLocation> keySet()`
- `Set<Map.Entry<ResourceKey<T>,T>> entrySet()`
- `Set<ResourceKey<T>> registryKeySet()`
- `Optional<Holder.Reference<T>> getRandom(RandomSource p_235781_)`
- `default Stream<T> stream()`
- `boolean containsKey(ResourceLocation p_123011_)`
- `boolean containsKey(ResourceKey<T> p_175475_)`
- `static <T> T register(Registry<? super T> p_122962_,  String p_122963_,  T p_122964_)`
- `static <V, T extends V> T register(Registry<V> p_122966_,  ResourceLocation p_122967_,  T p_122968_)`
- `static <V, T extends V> T register(Registry<V> p_194580_,  ResourceKey<V> p_194581_,  T p_194582_)`
- `static <T> Holder.Reference<T> registerForHolder(Registry<T> p_263347_,  ResourceKey<T> p_263355_,  T p_263428_)`
- `static <T> Holder.Reference<T> registerForHolder(Registry<T> p_263351_,  ResourceLocation p_263363_,  T p_263423_)`
- `Registry<T> freeze()`
- `Holder.Reference<T> createIntrusiveHolder(T p_206068_)`
- `Optional<Holder.Reference<T>> getHolder(int p_206051_)`
- `Optional<Holder.Reference<T>> getHolder(ResourceKey<T> p_206050_)`
- `Holder<T> wrapAsHolder(T p_263382_)`
- `default Holder.Reference<T> getHolderOrThrow(ResourceKey<T> p_249087_)`
- `Stream<Holder.Reference<T>> holders()`
- `Optional<HolderSet.Named<T>> getTag(TagKey<T> p_206052_)`
- `default Iterable<Holder<T>> getTagOrEmpty(TagKey<T> p_206059_)`
- `HolderSet.Named<T> getOrCreateTag(TagKey<T> p_206045_)`
- `Stream<com.mojang.datafixers.util.Pair<TagKey<T>,HolderSet.Named<T>>> getTags()`
- `Stream<TagKey<T>> getTagNames()`
- `void resetTags()`
- `void bindTags(Map<TagKey<T>,List<Holder<T>>> p_205997_)`
- `default IdMap<Holder<T>> asHolderIdMap()`
- `HolderOwner<T> holderOwner()`
- `HolderLookup.RegistryLookup<T> asLookup()`
- `default HolderLookup.RegistryLookup<T> asTagAddingLookup()`

### Inherited methods
- from `net.minecraft.core.IdMap`: `byId`, `byIdOrThrow`, `size`
- from `java.lang.Iterable`: `forEach`, `iterator`, `spliterator`

## RegistryAccess

*interface* `net.minecraft.core.RegistryAccess`

All Superinterfaces: HolderLookup.Provider

### Fields
- `static final org.slf4j.Logger LOGGER`
- `static final RegistryAccess.Frozen EMPTY`

### Methods
- `<E> Optional<Registry<E>> registry(ResourceKey<? extends Registry<? extends E>> p_123085_)`
- `default <T> Optional<HolderLookup.RegistryLookup<T>> lookup(ResourceKey<? extends Registry<? extends T>> p_256275_)`
- `default <E> Registry<E> registryOrThrow(ResourceKey<? extends Registry<? extends E>> p_175516_)`
- `Stream<RegistryAccess.RegistryEntry<?>> registries()`
- `static RegistryAccess.Frozen fromRegistryOfRegistries(Registry<? extends Registry<?>> p_206166_)`
- `default RegistryAccess.Frozen freeze()`
- `default com.mojang.serialization.Lifecycle allRegistriesLifecycle()`

### Inherited methods
- from `net.minecraft.core.HolderLookup.Provider`: `asGetterLookup`, `lookupOrThrow`

## RegistryAccess.Frozen

*interface* `net.minecraft.core.RegistryAccess.Frozen`

All Superinterfaces: HolderLookup.Provider, RegistryAccess

Enclosing interface: RegistryAccess

### Inherited fields
- from `net.minecraft.core.RegistryAccess`: `EMPTY`, `LOGGER`

### Inherited methods
- from `net.minecraft.core.HolderLookup.Provider`: `asGetterLookup`, `lookupOrThrow`
- from `net.minecraft.core.RegistryAccess`: `allRegistriesLifecycle`, `freeze`, `lookup`, `registries`, `registry`, `registryOrThrow`

## RegistryAccess.ImmutableRegistryAccess

*class* `net.minecraft.core.RegistryAccess.ImmutableRegistryAccess`

Enclosing interface: RegistryAccess

### Fields
- `private final Map<? extends ResourceKey<? extends Registry<?>>,? extends Registry<?>> registries`

### Inherited fields
- from `net.minecraft.core.RegistryAccess`: `EMPTY`, `LOGGER`

### Methods
- `public <E> Optional<Registry<E>> registry(ResourceKey<? extends Registry<? extends E>> p_206229_)`
- `public Stream<RegistryAccess.RegistryEntry<?>> registries()`

### Inherited methods
- from `net.minecraft.core.HolderLookup.Provider`: `asGetterLookup`, `lookupOrThrow`
- from `net.minecraft.core.RegistryAccess`: `allRegistriesLifecycle`, `freeze`, `lookup`, `registryOrThrow`

## RegistryAccess.RegistryEntry

*record* `net.minecraft.core.RegistryAccess.RegistryEntry`

Enclosing interface: RegistryAccess

### Fields
- `private final ResourceKey<? extends Registry<T>> key`
  The field for the key record component.
- `private final Registry<T> value`
  The field for the value record component.

### Methods
- `private static <T, R extends Registry<? extends T>> RegistryAccess.RegistryEntry<T> fromMapEntry(Map.Entry<? extends ResourceKey<? extends Registry<?>>,R> p_206242_)`
- `private static <T> RegistryAccess.RegistryEntry<T> fromUntyped(ResourceKey<? extends Registry<?>> p_206244_,  Registry<?> p_206245_)`
- `private RegistryAccess.RegistryEntry<T> freeze()`
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
- `public ResourceKey<? extends Registry<T>> key()`
  Returns the value of the key record component.
  - returns: the value of the key record component
- `public Registry<T> value()`
  Returns the value of the value record component.
  - returns: the value of the value record component

## RegistryCodecs

*class* `net.minecraft.core.RegistryCodecs`

### Methods
- `private static <T> com.mojang.serialization.MapCodec<RegistryCodecs.RegistryEntry<T>> withNameAndId(ResourceKey<? extends Registry<T>> p_206304_,  com.mojang.serialization.MapCodec<T> p_206305_)`
- `public static <T> com.mojang.serialization.Codec<Registry<T>> networkCodec(ResourceKey<? extends Registry<T>> p_206292_,  com.mojang.serialization.Lifecycle p_206293_,  com.mojang.serialization.Codec<T> p_206294_)`
- `public static <E> com.mojang.serialization.Codec<Registry<E>> fullCodec(ResourceKey<? extends Registry<E>> p_248884_,  com.mojang.serialization.Lifecycle p_251810_,  com.mojang.serialization.Codec<E> p_250169_)`
- `public static <E> com.mojang.serialization.Codec<HolderSet<E>> homogeneousList(ResourceKey<? extends Registry<E>> p_206280_,  com.mojang.serialization.Codec<E> p_206281_)`
- `public static <E> com.mojang.serialization.Codec<HolderSet<E>> homogeneousList(ResourceKey<? extends Registry<E>> p_206288_,  com.mojang.serialization.Codec<E> p_206289_,  boolean p_206290_)`
- `public static <E> com.mojang.serialization.Codec<HolderSet<E>> homogeneousList(ResourceKey<? extends Registry<E>> p_206278_)`
- `public static <E> com.mojang.serialization.Codec<HolderSet<E>> homogeneousList(ResourceKey<? extends Registry<E>> p_206311_,  boolean p_206312_)`

## RegistryCodecs.RegistryEntry

*record* `net.minecraft.core.RegistryCodecs.RegistryEntry`

Enclosing class: RegistryCodecs

### Fields
- `private final ResourceKey<T> key`
  The field for the key record component.
- `private final int id`
  The field for the id record component.
- `private final T value`
  The field for the value record component.

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
- `public ResourceKey<T> key()`
  Returns the value of the key record component.
  - returns: the value of the key record component
- `public int id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public T value()`
  Returns the value of the value record component.
  - returns: the value of the value record component

## RegistrySetBuilder

*class* `net.minecraft.core.RegistrySetBuilder`

### Fields
- `private final List<RegistrySetBuilder.RegistryStub<?>> entries`

### Methods
- `static <T> HolderGetter<T> wrapContextLookup(HolderLookup.RegistryLookup<T> p_255625_)`
- `public <T> RegistrySetBuilder add(ResourceKey<? extends Registry<T>> p_256446_,  com.mojang.serialization.Lifecycle p_256394_,  RegistrySetBuilder.RegistryBootstrap<T> p_256638_)`
- `public <T> RegistrySetBuilder add(ResourceKey<? extends Registry<T>> p_256261_,  RegistrySetBuilder.RegistryBootstrap<T> p_256010_)`
- `public List<? extends ResourceKey<? extends Registry<?>>> getEntryKeys()`
- `private RegistrySetBuilder.BuildState createState(RegistryAccess p_256400_)`
- `public HolderLookup.Provider build(RegistryAccess p_256112_)`
- `public HolderLookup.Provider buildPatch(RegistryAccess p_255676_,  HolderLookup.Provider p_255900_)`

## RegistrySetBuilder.BuildState

*record* `net.minecraft.core.RegistrySetBuilder.BuildState`

Enclosing class: RegistrySetBuilder

### Fields
- `private final RegistrySetBuilder.CompositeOwner owner`
  The field for the owner record component.
- `private final RegistrySetBuilder.UniversalLookup lookup`
  The field for the lookup record component.
- `private final Map<ResourceLocation,HolderGetter<?>> registries`
  The field for the registries record component.
- `private final Map<ResourceKey<?>,RegistrySetBuilder.RegisteredValue<?>> registeredValues`
  The field for the registeredValues record component.
- `private final List<RuntimeException> errors`
  The field for the errors record component.

### Methods
- `public static RegistrySetBuilder.BuildState create(RegistryAccess p_255995_,  Stream<ResourceKey<? extends Registry<?>>> p_256495_)`
- `public <T> BootstapContext<T> bootstapContext()`
- `public void reportRemainingUnreferencedValues()`
- `public void throwOnError()`
- `public void addOwner(HolderOwner<?> p_256407_)`
- `public void fillMissingHolders(HolderLookup.Provider p_255679_)`
- `public Stream<RegistrySetBuilder.RegistryContents<?>> collectReferencedRegistries()`
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
- `public RegistrySetBuilder.CompositeOwner owner()`
  Returns the value of the owner record component.
  - returns: the value of the owner record component
- `public RegistrySetBuilder.UniversalLookup lookup()`
  Returns the value of the lookup record component.
  - returns: the value of the lookup record component
- `public Map<ResourceLocation,HolderGetter<?>> registries()`
  Returns the value of the registries record component.
  - returns: the value of the registries record component
- `public Map<ResourceKey<?>,RegistrySetBuilder.RegisteredValue<?>> registeredValues()`
  Returns the value of the registeredValues record component.
  - returns: the value of the registeredValues record component
- `public List<RuntimeException> errors()`
  Returns the value of the errors record component.
  - returns: the value of the errors record component

## RegistrySetBuilder.CompositeOwner

*class* `net.minecraft.core.RegistrySetBuilder.CompositeOwner`

Enclosing class: RegistrySetBuilder

### Fields
- `private final Set<HolderOwner<?>> owners`

### Methods
- `public boolean canSerializeIn(HolderOwner<Object> p_256333_)`
- `public void add(HolderOwner<?> p_256361_)`

## RegistrySetBuilder.EmptyTagLookup

*class* `net.minecraft.core.RegistrySetBuilder.EmptyTagLookup`

Enclosing class: RegistrySetBuilder

### Fields
- `protected final HolderOwner<T> owner`

### Methods
- `public Optional<HolderSet.Named<T>> get(TagKey<T> p_256664_)`

### Inherited methods
- from `net.minecraft.core.HolderGetter`: `get`, `getOrThrow`, `getOrThrow`

## RegistrySetBuilder.RegisteredValue

*record* `net.minecraft.core.RegistrySetBuilder.RegisteredValue`

Enclosing class: RegistrySetBuilder

### Fields
- `private final T value`
  The field for the value record component.
- `private final com.mojang.serialization.Lifecycle lifecycle`
  The field for the lifecycle record component.

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
- `public T value()`
  Returns the value of the value record component.
  - returns: the value of the value record component
- `public com.mojang.serialization.Lifecycle lifecycle()`
  Returns the value of the lifecycle record component.
  - returns: the value of the lifecycle record component

## RegistrySetBuilder.RegistryBootstrap

*interface* `net.minecraft.core.RegistrySetBuilder.RegistryBootstrap`

Enclosing class: RegistrySetBuilder

### Methods
- `void run(BootstapContext<T> p_255783_)`

## RegistrySetBuilder.RegistryContents

*record* `net.minecraft.core.RegistrySetBuilder.RegistryContents`

Enclosing class: RegistrySetBuilder

### Fields
- `private final ResourceKey<? extends Registry<? extends T>> key`
  The field for the key record component.
- `private final com.mojang.serialization.Lifecycle lifecycle`
  The field for the lifecycle record component.
- `private final Map<ResourceKey<T>,RegistrySetBuilder.ValueAndHolder<T>> values`
  The field for the values record component.

### Methods
- `public HolderLookup.RegistryLookup<T> buildAsLookup()`
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
- `public ResourceKey<? extends Registry<? extends T>> key()`
  Returns the value of the key record component.
  - returns: the value of the key record component
- `public com.mojang.serialization.Lifecycle lifecycle()`
  Returns the value of the lifecycle record component.
  - returns: the value of the lifecycle record component
- `public Map<ResourceKey<T>,RegistrySetBuilder.ValueAndHolder<T>> values()`
  Returns the value of the values record component.
  - returns: the value of the values record component

## RegistrySetBuilder.RegistryStub

*record* `net.minecraft.core.RegistrySetBuilder.RegistryStub`

Enclosing class: RegistrySetBuilder

### Fields
- `private final ResourceKey<? extends Registry<T>> key`
  The field for the key record component.
- `private final com.mojang.serialization.Lifecycle lifecycle`
  The field for the lifecycle record component.
- `private final RegistrySetBuilder.RegistryBootstrap<T> bootstrap`
  The field for the bootstrap record component.

### Methods
- `void apply(RegistrySetBuilder.BuildState p_256272_)`
- `public RegistrySetBuilder.RegistryContents<T> collectChanges(RegistrySetBuilder.BuildState p_256416_)`
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
- `public ResourceKey<? extends Registry<T>> key()`
  Returns the value of the key record component.
  - returns: the value of the key record component
- `public com.mojang.serialization.Lifecycle lifecycle()`
  Returns the value of the lifecycle record component.
  - returns: the value of the lifecycle record component
- `public RegistrySetBuilder.RegistryBootstrap<T> bootstrap()`
  Returns the value of the bootstrap record component.
  - returns: the value of the bootstrap record component

## RegistrySetBuilder.UniversalLookup

*class* `net.minecraft.core.RegistrySetBuilder.UniversalLookup`

Enclosing class: RegistrySetBuilder

### Fields
- `final Map<ResourceKey<Object>,Holder.Reference<Object>> holders`

### Inherited fields
- from `net.minecraft.core.RegistrySetBuilder.EmptyTagLookup`: `owner`

### Methods
- `public Optional<Holder.Reference<Object>> get(ResourceKey<Object> p_256303_)`
- `<T> Holder.Reference<T> getOrCreate(ResourceKey<T> p_256298_)`

### Inherited methods
- from `net.minecraft.core.RegistrySetBuilder.EmptyTagLookup`: `get`
- from `net.minecraft.core.HolderGetter`: `getOrThrow`, `getOrThrow`

## RegistrySetBuilder.ValueAndHolder

*record* `net.minecraft.core.RegistrySetBuilder.ValueAndHolder`

Enclosing class: RegistrySetBuilder

### Fields
- `private final RegistrySetBuilder.RegisteredValue<T> value`
  The field for the value record component.
- `private final Optional<Holder.Reference<T>> holder`
  The field for the holder record component.

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
- `public RegistrySetBuilder.RegisteredValue<T> value()`
  Returns the value of the value record component.
  - returns: the value of the value record component
- `public Optional<Holder.Reference<T>> holder()`
  Returns the value of the holder record component.
  - returns: the value of the holder record component

## RegistrySynchronization

*class* `net.minecraft.core.RegistrySynchronization`

### Fields
- `private static final Map<ResourceKey<? extends Registry<?>>,RegistrySynchronization.NetworkedRegistryData<?>> NETWORKABLE_REGISTRIES`
- `public static final com.mojang.serialization.Codec<RegistryAccess> NETWORK_CODEC`

### Methods
- `private static <E> void put(com.google.common.collect.ImmutableMap.Builder<ResourceKey<? extends Registry<?>>,RegistrySynchronization.NetworkedRegistryData<?>> p_251643_,  ResourceKey<? extends Registry<E>> p_249195_,  com.mojang.serialization.Codec<E> p_249212_)`
- `private static Stream<RegistryAccess.RegistryEntry<?>> ownedNetworkableRegistries(RegistryAccess p_251842_)`
- `private static <E> com.mojang.serialization.DataResult<? extends com.mojang.serialization.Codec<E>> getNetworkCodec(ResourceKey<? extends Registry<E>> p_252190_)`
- `private static <E> com.mojang.serialization.Codec<RegistryAccess> makeNetworkCodec()`
- `private static <K extends ResourceKey<? extends Registry<?>>, V extends Registry<?>> com.mojang.serialization.Codec<RegistryAccess> captureMap(com.mojang.serialization.codecs.UnboundedMapCodec<K,V> p_249934_)`
- `public static Stream<RegistryAccess.RegistryEntry<?>> networkedRegistries(LayeredRegistryAccess<RegistryLayer> p_259290_)`
- `public static Stream<RegistryAccess.RegistryEntry<?>> networkSafeRegistries(LayeredRegistryAccess<RegistryLayer> p_249066_)`

## RegistrySynchronization.NetworkedRegistryData

*record* `net.minecraft.core.RegistrySynchronization.NetworkedRegistryData`

Enclosing class: RegistrySynchronization

### Fields
- `private final ResourceKey<? extends Registry<E>> key`
  The field for the key record component.
- `private final com.mojang.serialization.Codec<E> networkCodec`
  The field for the networkCodec record component.

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
- `public ResourceKey<? extends Registry<E>> key()`
  Returns the value of the key record component.
  - returns: the value of the key record component
- `public com.mojang.serialization.Codec<E> networkCodec()`
  Returns the value of the networkCodec record component.
  - returns: the value of the networkCodec record component

## Rotations

*class* `net.minecraft.core.Rotations`

### Fields
- `protected final float x`
- `protected final float y`
- `protected final float z`

### Methods
- `public ListTag save()`
- `public boolean equals(Object p_123160_)`
- `public float getX()`
- `public float getY()`
- `public float getZ()`
- `public float getWrappedX()`
- `public float getWrappedY()`
- `public float getWrappedZ()`

## SectionPos

*class* `net.minecraft.core.SectionPos`

### Fields
- `public static final int SECTION_BITS` (= 4)
- `public static final int SECTION_SIZE` (= 16)
- `public static final int SECTION_MASK` (= 15)
- `public static final int SECTION_HALF_SIZE` (= 8)
- `public static final int SECTION_MAX_INDEX` (= 15)
- `private static final int PACKED_X_LENGTH` (= 22)
- `private static final int PACKED_Y_LENGTH` (= 20)
- `private static final int PACKED_Z_LENGTH` (= 22)
- `private static final long PACKED_X_MASK` (= 4194303L)
- `private static final long PACKED_Y_MASK` (= 1048575L)
- `private static final long PACKED_Z_MASK` (= 4194303L)
- `private static final int Y_OFFSET` (= 0)
- `private static final int Z_OFFSET` (= 20)
- `private static final int X_OFFSET` (= 42)
- `private static final int RELATIVE_X_SHIFT` (= 8)
- `private static final int RELATIVE_Y_SHIFT` (= 0)
- `private static final int RELATIVE_Z_SHIFT` (= 4)

### Inherited fields
- from `net.minecraft.core.Vec3i`: `CODEC`, `ZERO`

### Methods
- `public static SectionPos of(int p_123174_,  int p_123175_,  int p_123176_)`
- `public static SectionPos of(BlockPos p_123200_)`
- `public static SectionPos of(ChunkPos p_123197_,  int p_123198_)`
- `public static SectionPos of(EntityAccess p_235862_)`
- `public static SectionPos of(Position p_235864_)`
- `public static SectionPos of(long p_123185_)`
- `public static SectionPos bottomOf(ChunkAccess p_175563_)`
- `public static long offset(long p_123192_,  Direction p_123193_)`
- `public static long offset(long p_123187_,  int p_123188_,  int p_123189_,  int p_123190_)`
- `public static int posToSectionCoord(double p_175553_)`
- `public static int blockToSectionCoord(int p_123172_)`
- `public static int blockToSectionCoord(double p_235866_)`
- `public static int sectionRelative(int p_123208_)`
- `public static short sectionRelativePos(BlockPos p_123219_)`
- `public static int sectionRelativeX(short p_123205_)`
- `public static int sectionRelativeY(short p_123221_)`
- `public static int sectionRelativeZ(short p_123228_)`
- `public int relativeToBlockX(short p_123233_)`
- `public int relativeToBlockY(short p_123238_)`
- `public int relativeToBlockZ(short p_123243_)`
- `public BlockPos relativeToBlockPos(short p_123246_)`
- `public static int sectionToBlockCoord(int p_123224_)`
- `public static int sectionToBlockCoord(int p_175555_,  int p_175556_)`
- `public static int x(long p_123214_)`
- `public static int y(long p_123226_)`
- `public static int z(long p_123231_)`
- `public int x()`
- `public int y()`
- `public int z()`
- `public int minBlockX()`
- `public int minBlockY()`
- `public int minBlockZ()`
- `public int maxBlockX()`
- `public int maxBlockY()`
- `public int maxBlockZ()`
- `public static long blockToSection(long p_123236_)`
- `public static long getZeroNode(int p_285381_,  int p_285068_)`
- `public static long getZeroNode(long p_123241_)`
- `public BlockPos origin()`
- `public BlockPos center()`
- `public ChunkPos chunk()`
- `public static long asLong(BlockPos p_175569_)`
- `public static long asLong(int p_123210_,  int p_123211_,  int p_123212_)`
- `public long asLong()`
- `public SectionPos offset(int p_175571_,  int p_175572_,  int p_175573_)`
- `public Stream<BlockPos> blocksInside()`
- `public static Stream<SectionPos> cube(SectionPos p_123202_,  int p_123203_)`
- `public static Stream<SectionPos> aroundChunk(ChunkPos p_175558_,  int p_175559_,  int p_175560_,  int p_175561_)`
- `public static Stream<SectionPos> betweenClosedStream(int p_123178_,  int p_123179_,  int p_123180_,  int p_123181_,  int p_123182_,  int p_123183_)`
- `public static void aroundAndAtBlockPos(BlockPos p_194643_,  it.unimi.dsi.fastutil.longs.LongConsumer p_194644_)`
- `public static void aroundAndAtBlockPos(long p_194640_,  it.unimi.dsi.fastutil.longs.LongConsumer p_194641_)`
- `public static void aroundAndAtBlockPos(int p_194635_,  int p_194636_,  int p_194637_,  it.unimi.dsi.fastutil.longs.LongConsumer p_194638_)`

### Inherited methods
- from `net.minecraft.core.Vec3i`: `above`, `above`, `below`, `below`, `closerThan`, `closerToCenterThan`, `compareTo`, `cross`, `distManhattan`, `distSqr`, `distToCenterSqr`, `distToCenterSqr`, `distToLowCornerSqr`, `east`, `east`, `equals`, `get`, `getX`, `getY`, `getZ`, `hashCode`, `multiply`, `north`, `north`, `offset`, `offsetCodec`, `relative`, `relative`, `relative`, `setX`, `setY`, `setZ`, `south`, `south`, `subtract`, `toShortString`, `toString`, `west`, `west`

## UUIDUtil

*class* `net.minecraft.core.UUIDUtil`

### Fields
- `public static final com.mojang.serialization.Codec<UUID> CODEC`
- `public static final com.mojang.serialization.Codec<UUID> STRING_CODEC`
- `public static com.mojang.serialization.Codec<UUID> AUTHLIB_CODEC`
- `public static final int UUID_BYTES` (= 16)
- `private static final String UUID_PREFIX_OFFLINE_PLAYER` (= "OfflinePlayer:")

### Methods
- `public static UUID uuidFromIntArray(int[] p_235886_)`
- `public static int[] uuidToIntArray(UUID p_235882_)`
- `private static int[] leastMostToIntArray(long p_235873_,  long p_235874_)`
- `public static byte[] uuidToByteArray(UUID p_241285_)`
- `public static UUID readUUID(com.mojang.serialization.Dynamic<?> p_235878_)`
- `public static UUID createOfflinePlayerUUID(String p_235880_)`

## Vec3i

*class* `net.minecraft.core.Vec3i`

### Fields
- `public static final com.mojang.serialization.Codec<Vec3i> CODEC`
- `public static final Vec3i ZERO`
- `private int x`
- `private int y`
- `private int z`

### Methods
- `public static com.mojang.serialization.Codec<Vec3i> offsetCodec(int p_194651_)`
- `public boolean equals(Object p_123327_)`
- `public int hashCode()`
- `public int compareTo(Vec3i p_123330_)`
- `public int getX()`
- `public int getY()`
- `public int getZ()`
- `protected Vec3i setX(int p_175605_)`
- `protected Vec3i setY(int p_175604_)`
- `protected Vec3i setZ(int p_175603_)`
- `public Vec3i offset(int p_175593_,  int p_175594_,  int p_175595_)`
- `public Vec3i offset(Vec3i p_175597_)`
- `public Vec3i subtract(Vec3i p_175596_)`
- `public Vec3i multiply(int p_175602_)`
- `public Vec3i above()`
- `public Vec3i above(int p_123336_)`
- `public Vec3i below()`
- `public Vec3i below(int p_123335_)`
- `public Vec3i north()`
- `public Vec3i north(int p_175601_)`
- `public Vec3i south()`
- `public Vec3i south(int p_175600_)`
- `public Vec3i west()`
- `public Vec3i west(int p_175599_)`
- `public Vec3i east()`
- `public Vec3i east(int p_175598_)`
- `public Vec3i relative(Direction p_175592_)`
- `public Vec3i relative(Direction p_123321_,  int p_123322_)`
- `public Vec3i relative(Direction.Axis p_175590_,  int p_175591_)`
- `public Vec3i cross(Vec3i p_123325_)`
- `public boolean closerThan(Vec3i p_123315_,  double p_123316_)`
- `public boolean closerToCenterThan(Position p_203196_,  double p_203197_)`
- `public double distSqr(Vec3i p_123332_)`
- `public double distToCenterSqr(Position p_203194_)`
- `public double distToCenterSqr(double p_203199_,  double p_203200_,  double p_203201_)`
- `public double distToLowCornerSqr(double p_203203_,  double p_203204_,  double p_203205_)`
- `public int distManhattan(Vec3i p_123334_)`
- `public int get(Direction.Axis p_123305_)`
- `public String toString()`
- `public String toShortString()`

## WritableRegistry

*interface* `net.minecraft.core.WritableRegistry`

All Superinterfaces: IdMap<T>, Iterable<T>, com.mojang.serialization.Keyable, Registry<T>

### Inherited fields
- from `net.minecraft.core.IdMap`: `DEFAULT`

### Methods
- `Holder.Reference<T> register(ResourceKey<T> p_256320_,  T p_255978_,  com.mojang.serialization.Lifecycle p_256625_)`
- `boolean isEmpty()`
- `HolderGetter<T> createRegistrationLookup()`

### Inherited methods
- from `net.minecraft.core.IdMap`: `byId`, `byIdOrThrow`, `size`
- from `java.lang.Iterable`: `forEach`, `iterator`, `spliterator`
- from `net.minecraft.core.Registry`: `asHolderIdMap`, `asLookup`, `asTagAddingLookup`, `bindTags`, `byNameCodec`, `containsKey`, `containsKey`, `createIntrusiveHolder`, `entrySet`, `freeze`, `get`, `get`, `getHolder`, `getHolder`, `getHolderOrThrow`, `getId`, `getKey`, `getOptional`, `getOptional`, `getOrCreateTag`, `getOrThrow`, `getRandom`, `getResourceKey`, `getTag`, `getTagNames`, `getTagOrEmpty`, `getTags`, `holderByNameCodec`, `holderOwner`, `holders`, `key`, `keys`, `keySet`, `lifecycle`, `registryKeySet`, `registryLifecycle`, `resetTags`, `stream`, `wrapAsHolder`
