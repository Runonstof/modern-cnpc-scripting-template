# net.minecraft.world.entity.ai.navigation

- [AmphibiousPathNavigation](#amphibiouspathnavigation)
- [FlyingPathNavigation](#flyingpathnavigation)
- [GroundPathNavigation](#groundpathnavigation)
- [PathNavigation](#pathnavigation)
- [WallClimberNavigation](#wallclimbernavigation)
- [WaterBoundPathNavigation](#waterboundpathnavigation)
## AmphibiousPathNavigation

*class* `net.minecraft.world.entity.ai.navigation.AmphibiousPathNavigation`

### Inherited fields
- from `net.minecraft.world.entity.ai.navigation.PathNavigation`: `hasDelayedRecomputation`, `lastStuckCheck`, `lastStuckCheckPos`, `lastTimeoutCheck`, `level`, `maxDistanceToWaypoint`, `mob`, `nodeEvaluator`, `path`, `speedModifier`, `tick`, `timeLastRecompute`, `timeoutCachedNode`, `timeoutLimit`, `timeoutTimer`

### Methods
- `protected PathFinder createPathFinder(int p_217792_)`
- `protected boolean canUpdatePath()`
- `protected Vec3 getTempMobPos()`
- `protected double getGroundY(Vec3 p_217794_)`
- `protected boolean canMoveDirectly(Vec3 p_217796_,  Vec3 p_217797_)`
- `public boolean isStableDestination(BlockPos p_217799_)`
- `public void setCanFloat(boolean p_217801_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.navigation.PathNavigation`: `canCutCorner`, `canFloat`, `createPath`, `createPath`, `createPath`, `createPath`, `createPath`, `createPath`, `createPath`, `createPath`, `doStuckDetection`, `followThePath`, `getMaxDistanceToWaypoint`, `getNodeEvaluator`, `getPath`, `getTargetPos`, `isClearForMovementBetween`, `isDone`, `isInProgress`, `isStuck`, `moveTo`, `moveTo`, `moveTo`, `recomputePath`, `resetMaxVisitedNodesMultiplier`, `setMaxVisitedNodesMultiplier`, `setSpeedModifier`, `shouldRecomputePath`, `stop`, `tick`, `trimPath`

## FlyingPathNavigation

*class* `net.minecraft.world.entity.ai.navigation.FlyingPathNavigation`

### Inherited fields
- from `net.minecraft.world.entity.ai.navigation.PathNavigation`: `hasDelayedRecomputation`, `lastStuckCheck`, `lastStuckCheckPos`, `lastTimeoutCheck`, `level`, `maxDistanceToWaypoint`, `mob`, `nodeEvaluator`, `path`, `speedModifier`, `tick`, `timeLastRecompute`, `timeoutCachedNode`, `timeoutLimit`, `timeoutTimer`

### Methods
- `protected PathFinder createPathFinder(int p_26428_)`
- `protected boolean canMoveDirectly(Vec3 p_262585_,  Vec3 p_262682_)`
- `protected boolean canUpdatePath()`
- `protected Vec3 getTempMobPos()`
- `public Path createPath(Entity p_26430_,  int p_26431_)`
- `public void tick()`
- `public void setCanOpenDoors(boolean p_26441_)`
- `public boolean canPassDoors()`
- `public void setCanPassDoors(boolean p_26444_)`
- `public boolean canOpenDoors()`
- `public boolean isStableDestination(BlockPos p_26439_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.navigation.PathNavigation`: `canCutCorner`, `canFloat`, `createPath`, `createPath`, `createPath`, `createPath`, `createPath`, `createPath`, `createPath`, `doStuckDetection`, `followThePath`, `getGroundY`, `getMaxDistanceToWaypoint`, `getNodeEvaluator`, `getPath`, `getTargetPos`, `isClearForMovementBetween`, `isDone`, `isInProgress`, `isStuck`, `moveTo`, `moveTo`, `moveTo`, `recomputePath`, `resetMaxVisitedNodesMultiplier`, `setCanFloat`, `setMaxVisitedNodesMultiplier`, `setSpeedModifier`, `shouldRecomputePath`, `stop`, `trimPath`

## GroundPathNavigation

*class* `net.minecraft.world.entity.ai.navigation.GroundPathNavigation`

### Fields
- `private boolean avoidSun`

### Inherited fields
- from `net.minecraft.world.entity.ai.navigation.PathNavigation`: `hasDelayedRecomputation`, `lastStuckCheck`, `lastStuckCheckPos`, `lastTimeoutCheck`, `level`, `maxDistanceToWaypoint`, `mob`, `nodeEvaluator`, `path`, `speedModifier`, `tick`, `timeLastRecompute`, `timeoutCachedNode`, `timeoutLimit`, `timeoutTimer`

### Methods
- `protected PathFinder createPathFinder(int p_26453_)`
- `protected boolean canUpdatePath()`
- `protected Vec3 getTempMobPos()`
- `public Path createPath(BlockPos p_26475_,  int p_26476_)`
- `public Path createPath(Entity p_26465_,  int p_26466_)`
- `private int getSurfaceY()`
- `protected void trimPath()`
- `protected boolean hasValidPathType(BlockPathTypes p_26467_)`
- `public void setCanOpenDoors(boolean p_26478_)`
- `public boolean canPassDoors()`
- `public void setCanPassDoors(boolean p_148215_)`
- `public boolean canOpenDoors()`
- `public void setAvoidSun(boolean p_26491_)`
- `public void setCanWalkOverFences(boolean p_255877_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.navigation.PathNavigation`: `canCutCorner`, `canFloat`, `canMoveDirectly`, `createPath`, `createPath`, `createPath`, `createPath`, `createPath`, `createPath`, `doStuckDetection`, `followThePath`, `getGroundY`, `getMaxDistanceToWaypoint`, `getNodeEvaluator`, `getPath`, `getTargetPos`, `isClearForMovementBetween`, `isDone`, `isInProgress`, `isStableDestination`, `isStuck`, `moveTo`, `moveTo`, `moveTo`, `recomputePath`, `resetMaxVisitedNodesMultiplier`, `setCanFloat`, `setMaxVisitedNodesMultiplier`, `setSpeedModifier`, `shouldRecomputePath`, `stop`, `tick`

## PathNavigation

*class* `net.minecraft.world.entity.ai.navigation.PathNavigation`

### Fields
- `private static final int MAX_TIME_RECOMPUTE` (= 20)
- `private static final int STUCK_CHECK_INTERVAL` (= 100)
- `private static final float STUCK_THRESHOLD_DISTANCE_FACTOR` (= 0.25f)
- `protected final Mob mob`
- `protected final Level level`
- `@Nullable protected Path path`
- `protected double speedModifier`
- `protected int tick`
- `protected int lastStuckCheck`
- `protected Vec3 lastStuckCheckPos`
- `protected Vec3i timeoutCachedNode`
- `protected long timeoutTimer`
- `protected long lastTimeoutCheck`
- `protected double timeoutLimit`
- `protected float maxDistanceToWaypoint`
- `protected boolean hasDelayedRecomputation`
- `protected long timeLastRecompute`
- `protected NodeEvaluator nodeEvaluator`
- `@Nullable private BlockPos targetPos`
- `private int reachRange`
- `private float maxVisitedNodesMultiplier`
- `private final PathFinder pathFinder`
- `private boolean isStuck`

### Methods
- `public void resetMaxVisitedNodesMultiplier()`
- `public void setMaxVisitedNodesMultiplier(float p_26530_)`
- `@Nullable public BlockPos getTargetPos()`
- `protected abstract PathFinder createPathFinder(int p_26531_)`
- `public void setSpeedModifier(double p_26518_)`
- `public void recomputePath()`
- `@Nullable public final Path createPath(double p_26525_,  double p_26526_,  double p_26527_,  int p_26528_)`
- `@Nullable public Path createPath(Stream<BlockPos> p_26557_,  int p_26558_)`
- `@Nullable public Path createPath(Set<BlockPos> p_26549_,  int p_26550_)`
- `@Nullable public Path createPath(BlockPos p_26546_,  int p_26547_)`
- `@Nullable public Path createPath(BlockPos p_148219_,  int p_148220_,  int p_148221_)`
- `@Nullable public Path createPath(Entity p_26534_,  int p_26535_)`
- `@Nullable protected Path createPath(Set<BlockPos> p_26552_,  int p_26553_,  boolean p_26554_,  int p_26555_)`
- `@Nullable protected Path createPath(Set<BlockPos> p_148223_,  int p_148224_,  boolean p_148225_,  int p_148226_,  float p_148227_)`
- `public boolean moveTo(double p_26520_,  double p_26521_,  double p_26522_,  double p_26523_)`
- `public boolean moveTo(Entity p_26532_,  double p_26533_)`
- `public boolean moveTo(@Nullable  Path p_26537_,  double p_26538_)`
- `@Nullable public Path getPath()`
- `public void tick()`
- `protected double getGroundY(Vec3 p_186132_)`
- `protected void followThePath()`
- `private boolean shouldTargetNextNodeInDirection(Vec3 p_26560_)`
- `protected void doStuckDetection(Vec3 p_26539_)`
- `private void timeoutPath()`
- `private void resetStuckTimeout()`
- `public boolean isDone()`
- `public boolean isInProgress()`
- `public void stop()`
- `protected abstract Vec3 getTempMobPos()`
- `protected abstract boolean canUpdatePath()`
- `protected void trimPath()`
- `protected boolean canMoveDirectly(Vec3 p_186133_,  Vec3 p_186134_)`
- `public boolean canCutCorner(BlockPathTypes p_265292_)`
- `protected static boolean isClearForMovementBetween(Mob p_262599_,  Vec3 p_262674_,  Vec3 p_262586_,  boolean p_262676_)`
- `public boolean isStableDestination(BlockPos p_26545_)`
- `public NodeEvaluator getNodeEvaluator()`
- `public void setCanFloat(boolean p_26563_)`
- `public boolean canFloat()`
- `public boolean shouldRecomputePath(BlockPos p_200904_)`
- `public float getMaxDistanceToWaypoint()`
- `public boolean isStuck()`

## WallClimberNavigation

*class* `net.minecraft.world.entity.ai.navigation.WallClimberNavigation`

### Fields
- `@Nullable private BlockPos pathToPosition`

### Inherited fields
- from `net.minecraft.world.entity.ai.navigation.PathNavigation`: `hasDelayedRecomputation`, `lastStuckCheck`, `lastStuckCheckPos`, `lastTimeoutCheck`, `level`, `maxDistanceToWaypoint`, `mob`, `nodeEvaluator`, `path`, `speedModifier`, `tick`, `timeLastRecompute`, `timeoutCachedNode`, `timeoutLimit`, `timeoutTimer`

### Methods
- `public Path createPath(BlockPos p_26589_,  int p_26590_)`
- `public Path createPath(Entity p_26586_,  int p_26587_)`
- `public boolean moveTo(Entity p_26583_,  double p_26584_)`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.navigation.GroundPathNavigation`: `canOpenDoors`, `canPassDoors`, `canUpdatePath`, `createPathFinder`, `getTempMobPos`, `hasValidPathType`, `setAvoidSun`, `setCanOpenDoors`, `setCanPassDoors`, `setCanWalkOverFences`, `trimPath`
- from `net.minecraft.world.entity.ai.navigation.PathNavigation`: `canCutCorner`, `canFloat`, `canMoveDirectly`, `createPath`, `createPath`, `createPath`, `createPath`, `createPath`, `createPath`, `doStuckDetection`, `followThePath`, `getGroundY`, `getMaxDistanceToWaypoint`, `getNodeEvaluator`, `getPath`, `getTargetPos`, `isClearForMovementBetween`, `isDone`, `isInProgress`, `isStableDestination`, `isStuck`, `moveTo`, `moveTo`, `recomputePath`, `resetMaxVisitedNodesMultiplier`, `setCanFloat`, `setMaxVisitedNodesMultiplier`, `setSpeedModifier`, `shouldRecomputePath`, `stop`

## WaterBoundPathNavigation

*class* `net.minecraft.world.entity.ai.navigation.WaterBoundPathNavigation`

### Fields
- `private boolean allowBreaching`

### Inherited fields
- from `net.minecraft.world.entity.ai.navigation.PathNavigation`: `hasDelayedRecomputation`, `lastStuckCheck`, `lastStuckCheckPos`, `lastTimeoutCheck`, `level`, `maxDistanceToWaypoint`, `mob`, `nodeEvaluator`, `path`, `speedModifier`, `tick`, `timeLastRecompute`, `timeoutCachedNode`, `timeoutLimit`, `timeoutTimer`

### Methods
- `protected PathFinder createPathFinder(int p_26598_)`
- `protected boolean canUpdatePath()`
- `protected Vec3 getTempMobPos()`
- `protected double getGroundY(Vec3 p_186136_)`
- `protected boolean canMoveDirectly(Vec3 p_186138_,  Vec3 p_186139_)`
- `public boolean isStableDestination(BlockPos p_26608_)`
- `public void setCanFloat(boolean p_26612_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.navigation.PathNavigation`: `canCutCorner`, `canFloat`, `createPath`, `createPath`, `createPath`, `createPath`, `createPath`, `createPath`, `createPath`, `createPath`, `doStuckDetection`, `followThePath`, `getMaxDistanceToWaypoint`, `getNodeEvaluator`, `getPath`, `getTargetPos`, `isClearForMovementBetween`, `isDone`, `isInProgress`, `isStuck`, `moveTo`, `moveTo`, `moveTo`, `recomputePath`, `resetMaxVisitedNodesMultiplier`, `setMaxVisitedNodesMultiplier`, `setSpeedModifier`, `shouldRecomputePath`, `stop`, `tick`, `trimPath`
