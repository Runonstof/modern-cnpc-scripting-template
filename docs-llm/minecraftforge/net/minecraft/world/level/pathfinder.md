# net.minecraft.world.level.pathfinder

- [AmphibiousNodeEvaluator](#amphibiousnodeevaluator)
- [BinaryHeap](#binaryheap)
- [Class BlockPathTypes](#class-blockpathtypes)
- [Class PathComputationType](#class-pathcomputationtype)
- [FlyNodeEvaluator](#flynodeevaluator)
- [Node](#node)
- [NodeEvaluator](#nodeevaluator)
- [Path](#path)
- [Path.DebugData](#path.debugdata)
- [PathFinder](#pathfinder)
- [SwimNodeEvaluator](#swimnodeevaluator)
- [Target](#target)
- [WalkNodeEvaluator](#walknodeevaluator)
## AmphibiousNodeEvaluator

*class* `net.minecraft.world.level.pathfinder.AmphibiousNodeEvaluator`

### Fields
- `private final boolean prefersShallowSwimming`
- `private float oldWalkableCost`
- `private float oldWaterBorderCost`

### Inherited fields
- from `net.minecraft.world.level.pathfinder.WalkNodeEvaluator`: `SPACE_BETWEEN_WALL_POSTS`
- from `net.minecraft.world.level.pathfinder.NodeEvaluator`: `canFloat`, `canOpenDoors`, `canPassDoors`, `canWalkOverFences`, `entityDepth`, `entityHeight`, `entityWidth`, `level`, `mob`, `nodes`

### Methods
- `public void prepare(PathNavigationRegion p_164671_,  Mob p_164672_)`
- `public void done()`
- `public Node getStart()`
- `public Target getGoal(double p_164662_,  double p_164663_,  double p_164664_)`
- `public int getNeighbors(Node[] p_164676_,  Node p_164677_)`
- `private boolean isVerticalNeighborValid(@Nullable  Node p_230611_,  Node p_230612_)`
- `protected boolean isAmphibious()`
- `public BlockPathTypes getBlockPathType(BlockGetter p_164666_,  int p_164667_,  int p_164668_,  int p_164669_)`

### Inherited methods
- from `net.minecraft.world.level.pathfinder.WalkNodeEvaluator`: `canStartAt`, `checkNeighbourBlocks`, `evaluateBlockPathType`, `findAcceptedNode`, `getBlockPathType`, `getBlockPathType`, `getBlockPathTypeRaw`, `getBlockPathTypes`, `getBlockPathTypeStatic`, `getCachedBlockType`, `getFloorLevel`, `getFloorLevel`, `getStartNode`, `isBurningBlock`, `isDiagonalValid`, `isNeighborValid`
- from `net.minecraft.world.level.pathfinder.NodeEvaluator`: `canFloat`, `canOpenDoors`, `canPassDoors`, `canWalkOverFences`, `getNode`, `getNode`, `getTargetFromNode`, `setCanFloat`, `setCanOpenDoors`, `setCanPassDoors`, `setCanWalkOverFences`

## BinaryHeap

*class* `net.minecraft.world.level.pathfinder.BinaryHeap`

### Fields
- `private Node[] heap`
- `private int size`

### Methods
- `public Node insert(Node p_77085_)`
- `public void clear()`
- `public Node peek()`
- `public Node pop()`
- `public void remove(Node p_164682_)`
- `public void changeCost(Node p_77087_,  float p_77088_)`
- `public int size()`
- `private void upHeap(int p_77083_)`
- `private void downHeap(int p_77090_)`
- `public boolean isEmpty()`
- `public Node[] getHeap()`

## Class BlockPathTypes

*enum* `net.minecraft.world.level.pathfinder.Class BlockPathTypes`

### Fields
- `private final float malus`

### Methods
- `public static BlockPathTypes[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static BlockPathTypes valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public float getMalus()`
- `@Nullable public @Nullable BlockPathTypes getDanger()`
- `public static BlockPathTypes create(String name,  float malus)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraftforge.common.IExtensibleEnum`: `init`

## Class PathComputationType

*enum* `net.minecraft.world.level.pathfinder.Class PathComputationType`

### Methods
- `public static PathComputationType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static PathComputationType valueOf(String name)`
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

## FlyNodeEvaluator

*class* `net.minecraft.world.level.pathfinder.FlyNodeEvaluator`

### Fields
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectMap<BlockPathTypes> pathTypeByPosCache`
- `private static final float SMALL_MOB_INFLATED_START_NODE_BOUNDING_BOX` (= 1.5f)
- `private static final int MAX_START_NODE_CANDIDATES` (= 10)

### Inherited fields
- from `net.minecraft.world.level.pathfinder.WalkNodeEvaluator`: `SPACE_BETWEEN_WALL_POSTS`
- from `net.minecraft.world.level.pathfinder.NodeEvaluator`: `canFloat`, `canOpenDoors`, `canPassDoors`, `canWalkOverFences`, `entityDepth`, `entityHeight`, `entityWidth`, `level`, `mob`, `nodes`

### Methods
- `public void prepare(PathNavigationRegion p_77261_,  Mob p_77262_)`
- `public void done()`
- `public Node getStart()`
- `protected boolean canStartAt(BlockPos p_262645_)`
- `public Target getGoal(double p_77229_,  double p_77230_,  double p_77231_)`
- `public int getNeighbors(Node[] p_77266_,  Node p_77267_)`
- `private boolean hasMalus(@Nullable  Node p_77264_)`
- `private boolean isOpen(@Nullable  Node p_77270_)`
- `@Nullable protected Node findAcceptedNode(int p_262970_,  int p_263018_,  int p_262947_)`
- `private BlockPathTypes getCachedBlockPathType(int p_164694_,  int p_164695_,  int p_164696_)`
- `public BlockPathTypes getBlockPathType(BlockGetter p_265753_,  int p_265243_,  int p_265376_,  int p_265253_,  Mob p_265367_)`
- `public BlockPathTypes getBlockPathType(BlockGetter p_77245_,  int p_77246_,  int p_77247_,  int p_77248_)`
- `private Iterable<BlockPos> iteratePathfindingStartNodeCandidatePositions(Mob p_263108_)`

### Inherited methods
- from `net.minecraft.world.level.pathfinder.WalkNodeEvaluator`: `checkNeighbourBlocks`, `evaluateBlockPathType`, `findAcceptedNode`, `getBlockPathType`, `getBlockPathTypeRaw`, `getBlockPathTypes`, `getBlockPathTypeStatic`, `getCachedBlockType`, `getFloorLevel`, `getFloorLevel`, `getStartNode`, `isAmphibious`, `isBurningBlock`, `isDiagonalValid`, `isNeighborValid`
- from `net.minecraft.world.level.pathfinder.NodeEvaluator`: `canFloat`, `canOpenDoors`, `canPassDoors`, `canWalkOverFences`, `getNode`, `getNode`, `getTargetFromNode`, `setCanFloat`, `setCanOpenDoors`, `setCanPassDoors`, `setCanWalkOverFences`

## Node

*class* `net.minecraft.world.level.pathfinder.Node`

### Fields
- `public final int x`
- `public final int y`
- `public final int z`
- `private final int hash`
- `public int heapIdx`
- `public float g`
- `public float h`
- `public float f`
- `@Nullable public Node cameFrom`
- `public boolean closed`
- `public float walkedDistance`
- `public float costMalus`
- `public BlockPathTypes type`

### Methods
- `public Node cloneAndMove(int p_77290_,  int p_77291_,  int p_77292_)`
- `public static int createHash(int p_77296_,  int p_77297_,  int p_77298_)`
- `public float distanceTo(Node p_77294_)`
- `public float distanceToXZ(Node p_230614_)`
- `public float distanceTo(BlockPos p_164698_)`
- `public float distanceToSqr(Node p_77300_)`
- `public float distanceToSqr(BlockPos p_164703_)`
- `public float distanceManhattan(Node p_77305_)`
- `public float distanceManhattan(BlockPos p_77307_)`
- `public BlockPos asBlockPos()`
- `public Vec3 asVec3()`
- `public boolean equals(Object p_77309_)`
- `public int hashCode()`
- `public boolean inOpenSet()`
- `public String toString()`
- `public void writeToStream(FriendlyByteBuf p_164700_)`
- `public static Node createFromStream(FriendlyByteBuf p_77302_)`
- `protected static void readContents(FriendlyByteBuf p_262984_,  Node p_263009_)`

## NodeEvaluator

*class* `net.minecraft.world.level.pathfinder.NodeEvaluator`

### Fields
- `protected PathNavigationRegion level`
- `protected Mob mob`
- `protected final it.unimi.dsi.fastutil.ints.Int2ObjectMap<Node> nodes`
- `protected int entityWidth`
- `protected int entityHeight`
- `protected int entityDepth`
- `protected boolean canPassDoors`
- `protected boolean canOpenDoors`
- `protected boolean canFloat`
- `protected boolean canWalkOverFences`

### Methods
- `public void prepare(PathNavigationRegion p_77347_,  Mob p_77348_)`
- `public void done()`
- `protected Node getNode(BlockPos p_77350_)`
- `protected Node getNode(int p_77325_,  int p_77326_,  int p_77327_)`
- `public abstract Node getStart()`
- `public abstract Target getGoal(double p_77322_,  double p_77323_,  double p_77324_)`
- `protected Target getTargetFromNode(Node p_230616_)`
- `public abstract int getNeighbors(Node[] p_77353_,  Node p_77354_)`
- `public abstract BlockPathTypes getBlockPathType(BlockGetter p_77337_,  int p_77338_,  int p_77339_,  int p_77340_,  Mob p_77341_)`
- `public abstract BlockPathTypes getBlockPathType(BlockGetter p_77333_,  int p_77334_,  int p_77335_,  int p_77336_)`
- `public void setCanPassDoors(boolean p_77352_)`
- `public void setCanOpenDoors(boolean p_77356_)`
- `public void setCanFloat(boolean p_77359_)`
- `public void setCanWalkOverFences(boolean p_255862_)`
- `public boolean canPassDoors()`
- `public boolean canOpenDoors()`
- `public boolean canFloat()`
- `public boolean canWalkOverFences()`

## Path

*class* `net.minecraft.world.level.pathfinder.Path`

### Fields
- `private final List<Node> nodes`
- `@Nullable private Path.DebugData debugData`
- `private int nextNodeIndex`
- `private final BlockPos target`
- `private final float distToTarget`
- `private final boolean reached`

### Methods
- `public void advance()`
- `public boolean notStarted()`
- `public boolean isDone()`
- `@Nullable public Node getEndNode()`
- `public Node getNode(int p_77376_)`
- `public void truncateNodes(int p_77389_)`
- `public void replaceNode(int p_77378_,  Node p_77379_)`
- `public int getNodeCount()`
- `public int getNextNodeIndex()`
- `public void setNextNodeIndex(int p_77394_)`
- `public Vec3 getEntityPosAtNode(Entity p_77383_,  int p_77384_)`
- `public BlockPos getNodePos(int p_77397_)`
- `public Vec3 getNextEntityPos(Entity p_77381_)`
- `public BlockPos getNextNodePos()`
- `public Node getNextNode()`
- `@Nullable public Node getPreviousNode()`
- `public boolean sameAs(@Nullable  Path p_77386_)`
- `public boolean canReach()`
- `void setDebug(Node[] p_164710_,  Node[] p_164711_,  Set<Target> p_164712_)`
- `@Nullable public Path.DebugData debugData()`
- `public void writeToStream(FriendlyByteBuf p_164705_)`
- `public static Path createFromStream(FriendlyByteBuf p_77391_)`
- `public String toString()`
- `public BlockPos getTarget()`
- `public float getDistToTarget()`
- `static Node[] readNodeArray(FriendlyByteBuf p_300065_)`
- `static void writeNodeArray(FriendlyByteBuf p_300557_,  Node[] p_301136_)`
- `public Path copy()`

## Path.DebugData

*record* `net.minecraft.world.level.pathfinder.Path.DebugData`

Enclosing class: Path

### Fields
- `private final Node[] openSet`
  The field for the openSet record component.
- `private final Node[] closedSet`
  The field for the closedSet record component.
- `private final Set<Target> targetNodes`
  The field for the targetNodes record component.

### Methods
- `public void write(FriendlyByteBuf p_299578_)`
- `public static Path.DebugData read(FriendlyByteBuf p_299429_)`
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
- `public Node[] openSet()`
  Returns the value of the openSet record component.
  - returns: the value of the openSet record component
- `public Node[] closedSet()`
  Returns the value of the closedSet record component.
  - returns: the value of the closedSet record component
- `public Set<Target> targetNodes()`
  Returns the value of the targetNodes record component.
  - returns: the value of the targetNodes record component

## PathFinder

*class* `net.minecraft.world.level.pathfinder.PathFinder`

### Fields
- `private static final float FUDGING` (= 1.5f)
- `private final Node[] neighbors`
- `private final int maxVisitedNodes`
- `private final NodeEvaluator nodeEvaluator`
- `private static final boolean DEBUG` (= false)
- `private final BinaryHeap openSet`

### Methods
- `@Nullable public Path findPath(PathNavigationRegion p_77428_,  Mob p_77429_,  Set<BlockPos> p_77430_,  float p_77431_,  int p_77432_,  float p_77433_)`
- `@Nullable private Path findPath(ProfilerFiller p_164717_,  Node p_164718_,  Map<Target,BlockPos> p_164719_,  float p_164720_,  int p_164721_,  float p_164722_)`
- `protected float distance(Node p_230617_,  Node p_230618_)`
- `private float getBestH(Node p_77445_,  Set<Target> p_77446_)`
- `private Path reconstructPath(Node p_77435_,  BlockPos p_77436_,  boolean p_77437_)`

## SwimNodeEvaluator

*class* `net.minecraft.world.level.pathfinder.SwimNodeEvaluator`

### Fields
- `private final boolean allowBreaching`
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectMap<BlockPathTypes> pathTypesByPosCache`

### Inherited fields
- from `net.minecraft.world.level.pathfinder.NodeEvaluator`: `canFloat`, `canOpenDoors`, `canPassDoors`, `canWalkOverFences`, `entityDepth`, `entityHeight`, `entityWidth`, `level`, `mob`, `nodes`

### Methods
- `public void prepare(PathNavigationRegion p_192959_,  Mob p_192960_)`
- `public void done()`
- `public Node getStart()`
- `public Target getGoal(double p_77459_,  double p_77460_,  double p_77461_)`
- `public int getNeighbors(Node[] p_77483_,  Node p_77484_)`
- `protected boolean isNodeValid(@Nullable  Node p_192962_)`
- `protected boolean isDiagonalNodeValid(@Nullable  Node p_192964_,  @Nullable  Node p_192965_,  @Nullable  Node p_192966_)`
- `@Nullable protected Node findAcceptedNode(int p_263032_,  int p_263066_,  int p_263105_)`
- `protected BlockPathTypes getCachedBlockType(int p_192968_,  int p_192969_,  int p_192970_)`
- `public BlockPathTypes getBlockPathType(BlockGetter p_77467_,  int p_77468_,  int p_77469_,  int p_77470_)`
- `public BlockPathTypes getBlockPathType(BlockGetter p_77472_,  int p_77473_,  int p_77474_,  int p_77475_,  Mob p_77476_)`

### Inherited methods
- from `net.minecraft.world.level.pathfinder.NodeEvaluator`: `canFloat`, `canOpenDoors`, `canPassDoors`, `canWalkOverFences`, `getNode`, `getNode`, `getTargetFromNode`, `setCanFloat`, `setCanOpenDoors`, `setCanPassDoors`, `setCanWalkOverFences`

## Target

*class* `net.minecraft.world.level.pathfinder.Target`

### Fields
- `private float bestHeuristic`
- `private Node bestNode`
- `private boolean reached`

### Inherited fields
- from `net.minecraft.world.level.pathfinder.Node`: `cameFrom`, `closed`, `costMalus`, `f`, `g`, `h`, `heapIdx`, `type`, `walkedDistance`, `x`, `y`, `z`

### Methods
- `public void updateBest(float p_77504_,  Node p_77505_)`
- `public Node getBestNode()`
- `public void setReached()`
- `public boolean isReached()`
- `public static Target createFromStream(FriendlyByteBuf p_77507_)`

### Inherited methods
- from `net.minecraft.world.level.pathfinder.Node`: `asBlockPos`, `asVec3`, `cloneAndMove`, `createHash`, `distanceManhattan`, `distanceManhattan`, `distanceTo`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToXZ`, `equals`, `hashCode`, `inOpenSet`, `readContents`, `toString`, `writeToStream`

## WalkNodeEvaluator

*class* `net.minecraft.world.level.pathfinder.WalkNodeEvaluator`

### Fields
- `public static final double SPACE_BETWEEN_WALL_POSTS` (= 0.5)
- `private static final double DEFAULT_MOB_JUMP_HEIGHT` (= 1.125)
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectMap<BlockPathTypes> pathTypesByPosCache`
- `private final it.unimi.dsi.fastutil.objects.Object2BooleanMap<AABB> collisionCache`

### Inherited fields
- from `net.minecraft.world.level.pathfinder.NodeEvaluator`: `canFloat`, `canOpenDoors`, `canPassDoors`, `canWalkOverFences`, `entityDepth`, `entityHeight`, `entityWidth`, `level`, `mob`, `nodes`

### Methods
- `public void prepare(PathNavigationRegion p_77620_,  Mob p_77621_)`
- `public void done()`
- `public Node getStart()`
- `protected Node getStartNode(BlockPos p_230632_)`
- `protected boolean canStartAt(BlockPos p_262596_)`
- `public Target getGoal(double p_77550_,  double p_77551_,  double p_77552_)`
- `public int getNeighbors(Node[] p_77640_,  Node p_77641_)`
- `protected boolean isNeighborValid(@Nullable  Node p_77627_,  Node p_77628_)`
- `protected boolean isDiagonalValid(Node p_77630_,  @Nullable  Node p_77631_,  @Nullable  Node p_77632_,  @Nullable  Node p_77633_)`
- `private static boolean doesBlockHavePartialCollision(BlockPathTypes p_230626_)`
- `private boolean canReachWithoutCollision(Node p_77625_)`
- `protected double getFloorLevel(BlockPos p_164733_)`
- `public static double getFloorLevel(BlockGetter p_77612_,  BlockPos p_77613_)`
- `protected boolean isAmphibious()`
- `@Nullable protected Node findAcceptedNode(int p_164726_,  int p_164727_,  int p_164728_,  int p_164729_,  double p_164730_,  Direction p_164731_,  BlockPathTypes p_164732_)`
- `private double getMobJumpHeight()`
- `private Node getNodeAndUpdateCostToMax(int p_230620_,  int p_230621_,  int p_230622_,  BlockPathTypes p_230623_,  float p_230624_)`
- `private Node getBlockedNode(int p_230628_,  int p_230629_,  int p_230630_)`
- `private boolean hasCollisions(AABB p_77635_)`
- `public BlockPathTypes getBlockPathType(BlockGetter p_265141_,  int p_265661_,  int p_265757_,  int p_265716_,  Mob p_265398_)`
- `public BlockPathTypes getBlockPathTypes(BlockGetter p_265227_,  int p_265066_,  int p_265537_,  int p_265771_,  EnumSet<BlockPathTypes> p_265263_,  BlockPathTypes p_265458_,  BlockPos p_265515_)`
- `protected BlockPathTypes evaluateBlockPathType(BlockGetter p_265305_,  BlockPos p_265350_,  BlockPathTypes p_265551_)`
- `protected BlockPathTypes getBlockPathType(Mob p_77573_,  BlockPos p_77574_)`
- `protected BlockPathTypes getCachedBlockType(Mob p_77568_,  int p_77569_,  int p_77570_,  int p_77571_)`
- `public BlockPathTypes getBlockPathType(BlockGetter p_77576_,  int p_77577_,  int p_77578_,  int p_77579_)`
- `public static BlockPathTypes getBlockPathTypeStatic(BlockGetter p_77605_,  BlockPos.MutableBlockPos p_77606_)`
- `public static BlockPathTypes checkNeighbourBlocks(BlockGetter p_77608_,  BlockPos.MutableBlockPos p_77609_,  BlockPathTypes p_77610_)`
- `protected static BlockPathTypes getBlockPathTypeRaw(BlockGetter p_77644_,  BlockPos p_77645_)`
- `public static boolean isBurningBlock(BlockState p_77623_)`

### Inherited methods
- from `net.minecraft.world.level.pathfinder.NodeEvaluator`: `canFloat`, `canOpenDoors`, `canPassDoors`, `canWalkOverFences`, `getNode`, `getNode`, `getTargetFromNode`, `setCanFloat`, `setCanOpenDoors`, `setCanPassDoors`, `setCanWalkOverFences`
