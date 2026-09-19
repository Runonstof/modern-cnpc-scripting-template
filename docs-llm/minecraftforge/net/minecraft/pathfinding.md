# net.minecraft.pathfinding

- [FlyingNodeProcessor](#flyingnodeprocessor)
- [NodeProcessor](#nodeprocessor)
- [Path](#path)
- [PathFinder](#pathfinder)
- [PathHeap](#pathheap)
- [PathNavigate](#pathnavigate)
- [PathNavigateClimber](#pathnavigateclimber)
- [PathNavigateFlying](#pathnavigateflying)
- [PathNavigateGround](#pathnavigateground)
- [PathNavigateSwimmer](#pathnavigateswimmer)
- [PathNodeType](#pathnodetype)
- [PathPoint](#pathpoint)
- [PathWorldListener](#pathworldlistener)
- [SwimNodeProcessor](#swimnodeprocessor)
- [WalkNodeProcessor](#walknodeprocessor)
## FlyingNodeProcessor

*class* `net.minecraft.pathfinding.FlyingNodeProcessor`

### Inherited fields
- from `net.minecraft.pathfinding.WalkNodeProcessor`: `avoidsWater`, `currentEntity`
- from `net.minecraft.pathfinding.NodeProcessor`: `blockaccess`, `canEnterDoors`, `canOpenDoors`, `canSwim`, `entity`, `entitySizeX`, `entitySizeY`, `entitySizeZ`, `pointMap`

### Methods
- `public void init(IBlockAccess sourceIn,  EntityLiving mob)`
- `public void postProcess()`
- `public PathPoint getStart()`
- `public PathPoint getPathPointToCoords(double x,  double y,  double z)`
- `public int findPathOptions(PathPoint[] pathOptions,  PathPoint currentPoint,  PathPoint targetPoint,  float maxDistance)`
- `protected PathPoint openPoint(int x,  int y,  int z)`
- `public PathNodeType getPathNodeType(IBlockAccess blockaccessIn,  int x,  int y,  int z,  EntityLiving entitylivingIn,  int xSize,  int ySize,  int zSize,  boolean canBreakDoorsIn,  boolean canEnterDoorsIn)`
- `public PathNodeType getPathNodeType(IBlockAccess blockaccessIn,  int x,  int y,  int z)`

### Inherited methods
- from `net.minecraft.pathfinding.WalkNodeProcessor`: `checkNeighborBlocks`, `getPathNodeType`, `getPathNodeTypeRaw`
- from `net.minecraft.pathfinding.NodeProcessor`: `getCanEnterDoors`, `getCanOpenDoors`, `getCanSwim`, `setCanEnterDoors`, `setCanOpenDoors`, `setCanSwim`

## NodeProcessor

*class* `net.minecraft.pathfinding.NodeProcessor`

### Fields
- `protected IBlockAccess blockaccess`
- `protected EntityLiving entity`
- `protected final IntHashMap<PathPoint> pointMap`
- `protected int entitySizeX`
- `protected int entitySizeY`
- `protected int entitySizeZ`
- `protected boolean canEnterDoors`
- `protected boolean canOpenDoors`
- `protected boolean canSwim`

### Methods
- `public void init(IBlockAccess sourceIn,  EntityLiving mob)`
- `public void postProcess()`
- `protected PathPoint openPoint(int x,  int y,  int z)`
- `public abstract PathPoint getStart()`
- `public abstract PathPoint getPathPointToCoords(double x,  double y,  double z)`
- `public abstract int findPathOptions(PathPoint[] pathOptions,  PathPoint currentPoint,  PathPoint targetPoint,  float maxDistance)`
- `public abstract PathNodeType getPathNodeType(IBlockAccess blockaccessIn,  int x,  int y,  int z,  EntityLiving entitylivingIn,  int xSize,  int ySize,  int zSize,  boolean canBreakDoorsIn,  boolean canEnterDoorsIn)`
- `public abstract PathNodeType getPathNodeType(IBlockAccess blockaccessIn,  int x,  int y,  int z)`
- `public void setCanEnterDoors(boolean canEnterDoorsIn)`
- `public void setCanOpenDoors(boolean canOpenDoorsIn)`
- `public void setCanSwim(boolean canSwimIn)`
- `public boolean getCanEnterDoors()`
- `public boolean getCanOpenDoors()`
- `public boolean getCanSwim()`

## Path

*class* `net.minecraft.pathfinding.Path`

### Methods
- `public void incrementPathIndex()`
- `public boolean isFinished()`
- `public PathPoint getFinalPathPoint()`
- `public PathPoint getPathPointFromIndex(int index)`
- `public void setPoint(int index,  PathPoint point)`
- `public int getCurrentPathLength()`
- `public void setCurrentPathLength(int length)`
- `public int getCurrentPathIndex()`
- `public void setCurrentPathIndex(int currentPathIndexIn)`
- `public Vec3d getVectorFromIndex(Entity entityIn,  int index)`
- `public Vec3d getPosition(Entity entityIn)`
- `public Vec3d getCurrentPos()`
- `public boolean isSamePath(Path pathentityIn)`
- `public PathPoint[] getOpenSet()`
- `public PathPoint[] getClosedSet()`
- `public PathPoint getTarget()`
- `public static Path read(PacketBuffer buf)`

## PathFinder

*class* `net.minecraft.pathfinding.PathFinder`

### Methods
- `public Path findPath(IBlockAccess worldIn,  EntityLiving entitylivingIn,  Entity targetEntity,  float maxDistance)`
- `public Path findPath(IBlockAccess worldIn,  EntityLiving entitylivingIn,  BlockPos targetPos,  float maxDistance)`

## PathHeap

*class* `net.minecraft.pathfinding.PathHeap`

### Methods
- `public PathPoint addPoint(PathPoint point)`
- `public void clearPath()`
- `public PathPoint dequeue()`
- `public void changeDistance(PathPoint point,  float distance)`
- `public boolean isPathEmpty()`

## PathNavigate

*class* `net.minecraft.pathfinding.PathNavigate`

### Fields
- `protected EntityLiving entity`
- `protected World world`
- `protected Path currentPath`
- `protected double speed`
- `protected int totalTicks`
- `protected float maxDistanceToWaypoint`
- `protected boolean tryUpdatePath`
- `protected NodeProcessor nodeProcessor`

### Methods
- `protected abstract PathFinder getPathFinder()`
- `public void setSpeed(double speedIn)`
- `public float getPathSearchRange()`
- `public boolean canUpdatePathOnTimeout()`
- `public void updatePath()`
- `public final Path getPathToXYZ(double x,  double y,  double z)`
- `public Path getPathToPos(BlockPos pos)`
- `public Path getPathToEntityLiving(Entity entityIn)`
- `public boolean tryMoveToXYZ(double x,  double y,  double z,  double speedIn)`
- `public boolean tryMoveToEntityLiving(Entity entityIn,  double speedIn)`
- `public boolean setPath(Path pathentityIn,  double speedIn)`
- `public Path getPath()`
- `public void onUpdateNavigation()`
- `protected void debugPathFinding()`
- `protected void pathFollow()`
- `protected void checkForStuck(Vec3d positionVec3)`
- `public boolean noPath()`
- `public void clearPath()`
- `protected abstract Vec3d getEntityPosition()`
- `protected abstract boolean canNavigate()`
- `protected boolean isInLiquid()`
- `protected void removeSunnyPath()`
- `protected abstract boolean isDirectPathBetweenPoints(Vec3d posVec31,  Vec3d posVec32,  int sizeX,  int sizeY,  int sizeZ)`
- `public boolean canEntityStandOnPos(BlockPos pos)`
- `public NodeProcessor getNodeProcessor()`

## PathNavigateClimber

*class* `net.minecraft.pathfinding.PathNavigateClimber`

### Inherited fields
- from `net.minecraft.pathfinding.PathNavigate`: `currentPath`, `entity`, `maxDistanceToWaypoint`, `nodeProcessor`, `speed`, `totalTicks`, `tryUpdatePath`, `world`

### Methods
- `public Path getPathToPos(BlockPos pos)`
- `public Path getPathToEntityLiving(Entity entityIn)`
- `public boolean tryMoveToEntityLiving(Entity entityIn,  double speedIn)`
- `public void onUpdateNavigation()`

### Inherited methods
- from `net.minecraft.pathfinding.PathNavigateGround`: `canNavigate`, `getCanSwim`, `getEnterDoors`, `getEntityPosition`, `getPathFinder`, `isDirectPathBetweenPoints`, `removeSunnyPath`, `setAvoidSun`, `setBreakDoors`, `setCanSwim`, `setEnterDoors`
- from `net.minecraft.pathfinding.PathNavigate`: `canEntityStandOnPos`, `canUpdatePathOnTimeout`, `checkForStuck`, `clearPath`, `debugPathFinding`, `getNodeProcessor`, `getPath`, `getPathSearchRange`, `getPathToXYZ`, `isInLiquid`, `noPath`, `pathFollow`, `setPath`, `setSpeed`, `tryMoveToXYZ`, `updatePath`

## PathNavigateFlying

*class* `net.minecraft.pathfinding.PathNavigateFlying`

### Inherited fields
- from `net.minecraft.pathfinding.PathNavigate`: `currentPath`, `entity`, `maxDistanceToWaypoint`, `nodeProcessor`, `speed`, `totalTicks`, `tryUpdatePath`, `world`

### Methods
- `protected PathFinder getPathFinder()`
- `protected boolean canNavigate()`
- `protected Vec3d getEntityPosition()`
- `public Path getPathToEntityLiving(Entity entityIn)`
- `public void onUpdateNavigation()`
- `protected boolean isDirectPathBetweenPoints(Vec3d posVec31,  Vec3d posVec32,  int sizeX,  int sizeY,  int sizeZ)`
- `public void setCanOpenDoors(boolean p_192879_1_)`
- `public void setCanEnterDoors(boolean p_192878_1_)`
- `public void setCanFloat(boolean p_192877_1_)`
- `public boolean canFloat()`
- `public boolean canEntityStandOnPos(BlockPos pos)`

### Inherited methods
- from `net.minecraft.pathfinding.PathNavigate`: `canUpdatePathOnTimeout`, `checkForStuck`, `clearPath`, `debugPathFinding`, `getNodeProcessor`, `getPath`, `getPathSearchRange`, `getPathToPos`, `getPathToXYZ`, `isInLiquid`, `noPath`, `pathFollow`, `removeSunnyPath`, `setPath`, `setSpeed`, `tryMoveToEntityLiving`, `tryMoveToXYZ`, `updatePath`

## PathNavigateGround

*class* `net.minecraft.pathfinding.PathNavigateGround`

### Inherited fields
- from `net.minecraft.pathfinding.PathNavigate`: `currentPath`, `entity`, `maxDistanceToWaypoint`, `nodeProcessor`, `speed`, `totalTicks`, `tryUpdatePath`, `world`

### Methods
- `protected PathFinder getPathFinder()`
- `protected boolean canNavigate()`
- `protected Vec3d getEntityPosition()`
- `public Path getPathToPos(BlockPos pos)`
- `public Path getPathToEntityLiving(Entity entityIn)`
- `protected void removeSunnyPath()`
- `protected boolean isDirectPathBetweenPoints(Vec3d posVec31,  Vec3d posVec32,  int sizeX,  int sizeY,  int sizeZ)`
- `public void setBreakDoors(boolean canBreakDoors)`
- `public void setEnterDoors(boolean enterDoors)`
- `public boolean getEnterDoors()`
- `public void setCanSwim(boolean canSwim)`
- `public boolean getCanSwim()`
- `public void setAvoidSun(boolean avoidSun)`

### Inherited methods
- from `net.minecraft.pathfinding.PathNavigate`: `canEntityStandOnPos`, `canUpdatePathOnTimeout`, `checkForStuck`, `clearPath`, `debugPathFinding`, `getNodeProcessor`, `getPath`, `getPathSearchRange`, `getPathToXYZ`, `isInLiquid`, `noPath`, `onUpdateNavigation`, `pathFollow`, `setPath`, `setSpeed`, `tryMoveToEntityLiving`, `tryMoveToXYZ`, `updatePath`

## PathNavigateSwimmer

*class* `net.minecraft.pathfinding.PathNavigateSwimmer`

### Inherited fields
- from `net.minecraft.pathfinding.PathNavigate`: `currentPath`, `entity`, `maxDistanceToWaypoint`, `nodeProcessor`, `speed`, `totalTicks`, `tryUpdatePath`, `world`

### Methods
- `protected PathFinder getPathFinder()`
- `protected boolean canNavigate()`
- `protected Vec3d getEntityPosition()`
- `protected void pathFollow()`
- `protected boolean isDirectPathBetweenPoints(Vec3d posVec31,  Vec3d posVec32,  int sizeX,  int sizeY,  int sizeZ)`
- `public boolean canEntityStandOnPos(BlockPos pos)`

### Inherited methods
- from `net.minecraft.pathfinding.PathNavigate`: `canUpdatePathOnTimeout`, `checkForStuck`, `clearPath`, `debugPathFinding`, `getNodeProcessor`, `getPath`, `getPathSearchRange`, `getPathToEntityLiving`, `getPathToPos`, `getPathToXYZ`, `isInLiquid`, `noPath`, `onUpdateNavigation`, `removeSunnyPath`, `setPath`, `setSpeed`, `tryMoveToEntityLiving`, `tryMoveToXYZ`, `updatePath`

## PathNodeType

*enum* `net.minecraft.pathfinding.PathNodeType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<PathNodeType>

### Fields
- `public static final PathNodeType BLOCKED`
- `public static final PathNodeType OPEN`
- `public static final PathNodeType WALKABLE`
- `public static final PathNodeType TRAPDOOR`
- `public static final PathNodeType FENCE`
- `public static final PathNodeType LAVA`
- `public static final PathNodeType WATER`
- `public static final PathNodeType RAIL`
- `public static final PathNodeType DANGER_FIRE`
- `public static final PathNodeType DAMAGE_FIRE`
- `public static final PathNodeType DANGER_CACTUS`
- `public static final PathNodeType DAMAGE_CACTUS`
- `public static final PathNodeType DANGER_OTHER`
- `public static final PathNodeType DAMAGE_OTHER`
- `public static final PathNodeType DOOR_OPEN`
- `public static final PathNodeType DOOR_WOOD_CLOSED`
- `public static final PathNodeType DOOR_IRON_CLOSED`

### Methods
- `public static PathNodeType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (PathNodeType c : PathNodeType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static PathNodeType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public float getPriority()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## PathPoint

*class* `net.minecraft.pathfinding.PathPoint`

### Fields
- `public final int x`
- `public final int y`
- `public final int z`
- `public int index`
- `public float totalPathDistance`
- `public float distanceToNext`
- `public float distanceToTarget`
- `public PathPoint previous`
- `public boolean visited`
- `public float distanceFromOrigin`
- `public float cost`
- `public float costMalus`
- `public PathNodeType nodeType`

### Methods
- `public PathPoint cloneMove(int x,  int y,  int z)`
- `public static int makeHash(int x,  int y,  int z)`
- `public float distanceTo(PathPoint pathpointIn)`
- `public float distanceToSquared(PathPoint pathpointIn)`
- `public float distanceManhattan(PathPoint p_186281_1_)`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public boolean isAssigned()`
- `public java.lang.String toString()`
- `public static PathPoint createFromBuffer(PacketBuffer buf)`

## PathWorldListener

*class* `net.minecraft.pathfinding.PathWorldListener`

All Implemented Interfaces: IWorldEventListener

### Methods
- `public void notifyBlockUpdate(World worldIn,  BlockPos pos,  IBlockState oldState,  IBlockState newState,  int flags)`
- `protected boolean didBlockChange(World worldIn,  BlockPos pos,  IBlockState oldState,  IBlockState newState)`
- `public void notifyLightSet(BlockPos pos)`
- `public void markBlockRangeForRenderUpdate(int x1,  int y1,  int z1,  int x2,  int y2,  int z2)`
- `public void playSoundToAllNearExcept(EntityPlayer player,  SoundEvent soundIn,  SoundCategory category,  double x,  double y,  double z,  float volume,  float pitch)`
- `public void spawnParticle(int particleID,  boolean ignoreRange,  double xCoord,  double yCoord,  double zCoord,  double xSpeed,  double ySpeed,  double zSpeed,  int... parameters)`
- `public void spawnParticle(int id,  boolean ignoreRange,  boolean p_190570_3_,  double x,  double y,  double z,  double xSpeed,  double ySpeed,  double zSpeed,  int... parameters)`
- `public void onEntityAdded(Entity entityIn)`
- `public void onEntityRemoved(Entity entityIn)`
- `public void playRecord(SoundEvent soundIn,  BlockPos pos)`
- `public void broadcastSound(int soundID,  BlockPos pos,  int data)`
- `public void playEvent(EntityPlayer player,  int type,  BlockPos blockPosIn,  int data)`
- `public void sendBlockBreakProgress(int breakerId,  BlockPos pos,  int progress)`

## SwimNodeProcessor

*class* `net.minecraft.pathfinding.SwimNodeProcessor`

### Inherited fields
- from `net.minecraft.pathfinding.NodeProcessor`: `blockaccess`, `canEnterDoors`, `canOpenDoors`, `canSwim`, `entity`, `entitySizeX`, `entitySizeY`, `entitySizeZ`, `pointMap`

### Methods
- `public PathPoint getStart()`
- `public PathPoint getPathPointToCoords(double x,  double y,  double z)`
- `public int findPathOptions(PathPoint[] pathOptions,  PathPoint currentPoint,  PathPoint targetPoint,  float maxDistance)`
- `public PathNodeType getPathNodeType(IBlockAccess blockaccessIn,  int x,  int y,  int z,  EntityLiving entitylivingIn,  int xSize,  int ySize,  int zSize,  boolean canBreakDoorsIn,  boolean canEnterDoorsIn)`
- `public PathNodeType getPathNodeType(IBlockAccess blockaccessIn,  int x,  int y,  int z)`

### Inherited methods
- from `net.minecraft.pathfinding.NodeProcessor`: `getCanEnterDoors`, `getCanOpenDoors`, `getCanSwim`, `init`, `openPoint`, `postProcess`, `setCanEnterDoors`, `setCanOpenDoors`, `setCanSwim`

## WalkNodeProcessor

*class* `net.minecraft.pathfinding.WalkNodeProcessor`

### Fields
- `protected float avoidsWater`
- `protected EntityLiving currentEntity`

### Inherited fields
- from `net.minecraft.pathfinding.NodeProcessor`: `blockaccess`, `canEnterDoors`, `canOpenDoors`, `canSwim`, `entity`, `entitySizeX`, `entitySizeY`, `entitySizeZ`, `pointMap`

### Methods
- `public void init(IBlockAccess sourceIn,  EntityLiving mob)`
- `public void postProcess()`
- `public PathPoint getStart()`
- `public PathPoint getPathPointToCoords(double x,  double y,  double z)`
- `public int findPathOptions(PathPoint[] pathOptions,  PathPoint currentPoint,  PathPoint targetPoint,  float maxDistance)`
- `public PathNodeType getPathNodeType(IBlockAccess blockaccessIn,  int x,  int y,  int z,  EntityLiving entitylivingIn,  int xSize,  int ySize,  int zSize,  boolean canBreakDoorsIn,  boolean canEnterDoorsIn)`
- `public PathNodeType getPathNodeType(IBlockAccess p_193577_1_,  int x,  int y,  int z,  int xSize,  int ySize,  int zSize,  boolean canOpenDoorsIn,  boolean canEnterDoorsIn,  java.util.EnumSet<PathNodeType> p_193577_10_,  PathNodeType p_193577_11_,  BlockPos p_193577_12_)`
- `public PathNodeType getPathNodeType(IBlockAccess blockaccessIn,  int x,  int y,  int z)`
- `public PathNodeType checkNeighborBlocks(IBlockAccess p_193578_1_,  int p_193578_2_,  int p_193578_3_,  int p_193578_4_,  PathNodeType p_193578_5_)`
- `protected PathNodeType getPathNodeTypeRaw(IBlockAccess p_189553_1_,  int p_189553_2_,  int p_189553_3_,  int p_189553_4_)`

### Inherited methods
- from `net.minecraft.pathfinding.NodeProcessor`: `getCanEnterDoors`, `getCanOpenDoors`, `getCanSwim`, `openPoint`, `setCanEnterDoors`, `setCanOpenDoors`, `setCanSwim`
