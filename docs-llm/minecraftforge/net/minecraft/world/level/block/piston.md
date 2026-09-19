# net.minecraft.world.level.block.piston

- [MovingPistonBlock](#movingpistonblock)
- [PistonBaseBlock](#pistonbaseblock)
- [PistonHeadBlock](#pistonheadblock)
- [PistonMath](#pistonmath)
- [PistonMovingBlockEntity](#pistonmovingblockentity)
- [PistonStructureResolver](#pistonstructureresolver)
## MovingPistonBlock

*class* `net.minecraft.world.level.block.piston.MovingPistonBlock`

### Fields
- `public static final DirectionProperty FACING`
- `public static final EnumProperty<PistonType> TYPE`

### Inherited fields
- from `net.minecraft.world.level.block.Block`: `BLOCK_STATE_REGISTRY`, `INDESTRUCTIBLE`, `INSTANT`, `stateDefinition`, `UPDATE_ALL`, `UPDATE_ALL_IMMEDIATE`, `UPDATE_CLIENTS`, `UPDATE_IMMEDIATE`, `UPDATE_INVISIBLE`, `UPDATE_KNOWN_SHAPE`, `UPDATE_LIMIT`, `UPDATE_MOVE_BY_PISTON`, `UPDATE_NEIGHBORS`, `UPDATE_NONE`, `UPDATE_SUPPRESS_DROPS`
- from `net.minecraft.world.level.block.state.BlockBehaviour`: `drops`, `dynamicShape`, `explosionResistance`, `friction`, `hasCollision`, `isRandomlyTicking`, `jumpFactor`, `properties`, `requiredFeatures`, `soundType`, `speedFactor`, `UPDATE_SHAPE_ORDER`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `@Nullable public BlockEntity newBlockEntity(BlockPos p_155879_,  BlockState p_155880_)`
- `public static BlockEntity newMovingBlockEntity(BlockPos p_155882_,  BlockState p_155883_,  BlockState p_155884_,  Direction p_155885_,  boolean p_155886_,  boolean p_155887_)`
- `@Nullable public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_155875_,  BlockState p_155876_,  BlockEntityType<T> p_155877_)`
- `public void onRemove(BlockState p_60077_,  Level p_60078_,  BlockPos p_60079_,  BlockState p_60080_,  boolean p_60081_)`
- `public void destroy(LevelAccessor p_60061_,  BlockPos p_60062_,  BlockState p_60063_)`
- `public InteractionResult use(BlockState p_60070_,  Level p_60071_,  BlockPos p_60072_,  Player p_60073_,  InteractionHand p_60074_,  BlockHitResult p_60075_)`
- `public List<ItemStack> getDrops(BlockState p_287650_,  LootParams.Builder p_287754_)`
- `public VoxelShape getShape(BlockState p_60099_,  BlockGetter p_60100_,  BlockPos p_60101_,  CollisionContext p_60102_)`
- `public VoxelShape getCollisionShape(BlockState p_60104_,  BlockGetter p_60105_,  BlockPos p_60106_,  CollisionContext p_60107_)`
- `@Nullable private PistonMovingBlockEntity getBlockEntity(BlockGetter p_60054_,  BlockPos p_60055_)`
- `public ItemStack getCloneItemStack(BlockGetter p_60057_,  BlockPos p_60058_,  BlockState p_60059_)`
- `public BlockState rotate(BlockState p_60086_,  Rotation p_60087_)`
- `public BlockState mirror(BlockState p_60083_,  Mirror p_60084_)`
- `protected void createBlockStateDefinition(StateDefinition.Builder<Block,BlockState> p_60097_)`
- `public boolean isPathfindable(BlockState p_60065_,  BlockGetter p_60066_,  BlockPos p_60067_,  PathComputationType p_60068_)`

### Inherited methods
- from `net.minecraft.world.level.block.BaseEntityBlock`: `createTickerHelper`, `getMenuProvider`, `getRenderShape`, `triggerEvent`
- from `net.minecraft.world.level.block.Block`: `animateTick`, `appendHoverText`, `asBlock`, `asItem`, `box`, `builtInRegistryHolder`, `byItem`, `canSupportCenter`, `canSupportRigidBlock`, `canSustainPlant`, `defaultBlockState`, `dropFromExplosion`, `dropResources`, `dropResources`, `dropResources`, `dropResources`, `fallOn`, `getDescriptionId`, `getDrops`, `getDrops`, `getExplosionResistance`, `getFriction`, `getId`, `getJumpFactor`, `getName`, `getRenderPropertiesInternal`, `getShapeForEachState`, `getSoundType`, `getSpeedFactor`, `getStateDefinition`, `getStateForPlacement`, `handlePrecipitation`, `hasDynamicShape`, `initializeClient`, `isExceptionForConnection`, `isFaceFull`, `isPossibleToRespawnInThis`, `isRandomlyTicking`, `isShapeFullBlock`, `playerDestroy`, `playerWillDestroy`, `popExperience`, `popResource`, `popResourceFromFace`, `propagatesSkylightDown`, `pushEntitiesUp`, `registerDefaultState`, `setPlacedBy`, `shouldRenderFace`, `spawnDestroyParticles`, `stateById`, `stepOn`, `toString`, `tryDropExperience`, `updateEntityAfterFallOn`, `updateFromNeighbourShapes`, `updateOrDestroy`, `updateOrDestroy`, `wasExploded`, `withPropertiesOf`
- from `net.minecraft.world.level.block.state.BlockBehaviour`: `attack`, `canBeReplaced`, `canBeReplaced`, `canSurvive`, `defaultDestroyTime`, `defaultMapColor`, `entityInside`, `getAnalogOutputSignal`, `getBlockSupportShape`, `getDestroyProgress`, `getDirectSignal`, `getFluidState`, `getInteractionShape`, `getLightBlock`, `getLootTable`, `getMaxHorizontalOffset`, `getMaxVerticalOffset`, `getOcclusionShape`, `getSeed`, `getShadeBrightness`, `getSignal`, `getVisualShape`, `hasAnalogOutputSignal`, `isAir`, `isCollisionShapeFullBlock`, `isOcclusionShapeFullBlock`, `isSignalSource`, `neighborChanged`, `onPlace`, `onProjectileHit`, `randomTick`, `requiredFeatures`, `skipRendering`, `spawnAfterBreak`, `tick`, `updateIndirectNeighbourShapes`, `updateShape`, `useShapeForLightOcclusion`
- from `net.minecraft.world.level.block.EntityBlock`: `getListener`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeBlock`: `addLandingEffects`, `addRunningEffects`, `canBeHydrated`, `canConnectRedstone`, `canDropFromExplosion`, `canEntityDestroy`, `canHarvestBlock`, `canStickTo`, `collisionExtendsVertically`, `getAdjacentBlockPathType`, `getAppearance`, `getBeaconColorMultiplier`, `getBedDirection`, `getBlockPathType`, `getCloneItemStack`, `getEnchantPowerBonus`, `getExpDrop`, `getExplosionResistance`, `getFireSpreadSpeed`, `getFlammability`, `getFriction`, `getLightEmission`, `getMapColor`, `getPistonPushReaction`, `getRespawnPosition`, `getSoundType`, `getStateAtViewpoint`, `getToolModifiedState`, `getWeakChanges`, `hidesNeighborFace`, `isBed`, `isBurning`, `isConduitFrame`, `isFertile`, `isFireSource`, `isFlammable`, `isLadder`, `isPortalFrame`, `isScaffolding`, `isSlimeBlock`, `isStickyBlock`, `isValidSpawn`, `makesOpenTrapdoorAboveClimbable`, `onBlockExploded`, `onBlockStateChange`, `onCaughtFire`, `onDestroyedByPlayer`, `onNeighborChange`, `onTreeGrow`, `rotate`, `setBedOccupied`, `shouldCheckWeakPower`, `shouldDisplayFluidOverlay`, `supportsExternalFaceHiding`

## PistonBaseBlock

*class* `net.minecraft.world.level.block.piston.PistonBaseBlock`

### Fields
- `public static final BooleanProperty EXTENDED`
- `public static final int TRIGGER_EXTEND` (= 0)
- `public static final int TRIGGER_CONTRACT` (= 1)
- `public static final int TRIGGER_DROP` (= 2)
- `public static final float PLATFORM_THICKNESS` (= 4.0f)
- `protected static final VoxelShape EAST_AABB`
- `protected static final VoxelShape WEST_AABB`
- `protected static final VoxelShape SOUTH_AABB`
- `protected static final VoxelShape NORTH_AABB`
- `protected static final VoxelShape UP_AABB`
- `protected static final VoxelShape DOWN_AABB`
- `private final boolean isSticky`

### Inherited fields
- from `net.minecraft.world.level.block.DirectionalBlock`: `FACING`
- from `net.minecraft.world.level.block.Block`: `BLOCK_STATE_REGISTRY`, `INDESTRUCTIBLE`, `INSTANT`, `stateDefinition`, `UPDATE_ALL`, `UPDATE_ALL_IMMEDIATE`, `UPDATE_CLIENTS`, `UPDATE_IMMEDIATE`, `UPDATE_INVISIBLE`, `UPDATE_KNOWN_SHAPE`, `UPDATE_LIMIT`, `UPDATE_MOVE_BY_PISTON`, `UPDATE_NEIGHBORS`, `UPDATE_NONE`, `UPDATE_SUPPRESS_DROPS`
- from `net.minecraft.world.level.block.state.BlockBehaviour`: `drops`, `dynamicShape`, `explosionResistance`, `friction`, `hasCollision`, `isRandomlyTicking`, `jumpFactor`, `properties`, `requiredFeatures`, `soundType`, `speedFactor`, `UPDATE_SHAPE_ORDER`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public VoxelShape getShape(BlockState p_60220_,  BlockGetter p_60221_,  BlockPos p_60222_,  CollisionContext p_60223_)`
- `public void setPlacedBy(Level p_60172_,  BlockPos p_60173_,  BlockState p_60174_,  LivingEntity p_60175_,  ItemStack p_60176_)`
- `public void neighborChanged(BlockState p_60198_,  Level p_60199_,  BlockPos p_60200_,  Block p_60201_,  BlockPos p_60202_,  boolean p_60203_)`
- `public void onPlace(BlockState p_60225_,  Level p_60226_,  BlockPos p_60227_,  BlockState p_60228_,  boolean p_60229_)`
- `public BlockState getStateForPlacement(BlockPlaceContext p_60166_)`
- `private void checkIfExtend(Level p_60168_,  BlockPos p_60169_,  BlockState p_60170_)`
- `private boolean getNeighborSignal(SignalGetter p_277378_,  BlockPos p_60179_,  Direction p_60180_)`
- `public boolean triggerEvent(BlockState p_60192_,  Level p_60193_,  BlockPos p_60194_,  int p_60195_,  int p_60196_)`
- `public static boolean isPushable(BlockState p_60205_,  Level p_60206_,  BlockPos p_60207_,  Direction p_60208_,  boolean p_60209_,  Direction p_60210_)`
- `private boolean moveBlocks(Level p_60182_,  BlockPos p_60183_,  Direction p_60184_,  boolean p_60185_)`
- `public BlockState rotate(BlockState p_60215_,  Rotation p_60216_)`
- `public BlockState rotate(BlockState state,  LevelAccessor world,  BlockPos pos,  Rotation direction)`
- `public BlockState mirror(BlockState p_60212_,  Mirror p_60213_)`
- `protected void createBlockStateDefinition(StateDefinition.Builder<Block,BlockState> p_60218_)`
- `public boolean useShapeForLightOcclusion(BlockState p_60231_)`
- `public boolean isPathfindable(BlockState p_60187_,  BlockGetter p_60188_,  BlockPos p_60189_,  PathComputationType p_60190_)`

### Inherited methods
- from `net.minecraft.world.level.block.Block`: `animateTick`, `appendHoverText`, `asBlock`, `asItem`, `box`, `builtInRegistryHolder`, `byItem`, `canSupportCenter`, `canSupportRigidBlock`, `canSustainPlant`, `defaultBlockState`, `destroy`, `dropFromExplosion`, `dropResources`, `dropResources`, `dropResources`, `dropResources`, `fallOn`, `getCloneItemStack`, `getDescriptionId`, `getDrops`, `getDrops`, `getExplosionResistance`, `getFriction`, `getId`, `getJumpFactor`, `getName`, `getRenderPropertiesInternal`, `getShapeForEachState`, `getSoundType`, `getSpeedFactor`, `getStateDefinition`, `handlePrecipitation`, `hasDynamicShape`, `initializeClient`, `isExceptionForConnection`, `isFaceFull`, `isPossibleToRespawnInThis`, `isRandomlyTicking`, `isShapeFullBlock`, `playerDestroy`, `playerWillDestroy`, `popExperience`, `popResource`, `popResourceFromFace`, `propagatesSkylightDown`, `pushEntitiesUp`, `registerDefaultState`, `shouldRenderFace`, `spawnDestroyParticles`, `stateById`, `stepOn`, `toString`, `tryDropExperience`, `updateEntityAfterFallOn`, `updateFromNeighbourShapes`, `updateOrDestroy`, `updateOrDestroy`, `wasExploded`, `withPropertiesOf`
- from `net.minecraft.world.level.block.state.BlockBehaviour`: `attack`, `canBeReplaced`, `canBeReplaced`, `canSurvive`, `defaultDestroyTime`, `defaultMapColor`, `entityInside`, `getAnalogOutputSignal`, `getBlockSupportShape`, `getCollisionShape`, `getDestroyProgress`, `getDirectSignal`, `getDrops`, `getFluidState`, `getInteractionShape`, `getLightBlock`, `getLootTable`, `getMaxHorizontalOffset`, `getMaxVerticalOffset`, `getMenuProvider`, `getOcclusionShape`, `getRenderShape`, `getSeed`, `getShadeBrightness`, `getSignal`, `getVisualShape`, `hasAnalogOutputSignal`, `isAir`, `isCollisionShapeFullBlock`, `isOcclusionShapeFullBlock`, `isSignalSource`, `onProjectileHit`, `onRemove`, `randomTick`, `requiredFeatures`, `skipRendering`, `spawnAfterBreak`, `tick`, `updateIndirectNeighbourShapes`, `updateShape`, `use`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeBlock`: `addLandingEffects`, `addRunningEffects`, `canBeHydrated`, `canConnectRedstone`, `canDropFromExplosion`, `canEntityDestroy`, `canHarvestBlock`, `canStickTo`, `collisionExtendsVertically`, `getAdjacentBlockPathType`, `getAppearance`, `getBeaconColorMultiplier`, `getBedDirection`, `getBlockPathType`, `getCloneItemStack`, `getEnchantPowerBonus`, `getExpDrop`, `getExplosionResistance`, `getFireSpreadSpeed`, `getFlammability`, `getFriction`, `getLightEmission`, `getMapColor`, `getPistonPushReaction`, `getRespawnPosition`, `getSoundType`, `getStateAtViewpoint`, `getToolModifiedState`, `getWeakChanges`, `hidesNeighborFace`, `isBed`, `isBurning`, `isConduitFrame`, `isFertile`, `isFireSource`, `isFlammable`, `isLadder`, `isPortalFrame`, `isScaffolding`, `isSlimeBlock`, `isStickyBlock`, `isValidSpawn`, `makesOpenTrapdoorAboveClimbable`, `onBlockExploded`, `onBlockStateChange`, `onCaughtFire`, `onDestroyedByPlayer`, `onNeighborChange`, `onTreeGrow`, `setBedOccupied`, `shouldCheckWeakPower`, `shouldDisplayFluidOverlay`, `supportsExternalFaceHiding`

## PistonHeadBlock

*class* `net.minecraft.world.level.block.piston.PistonHeadBlock`

### Fields
- `public static final EnumProperty<PistonType> TYPE`
- `public static final BooleanProperty SHORT`
- `public static final float PLATFORM` (= 4.0f)
- `protected static final VoxelShape EAST_AABB`
- `protected static final VoxelShape WEST_AABB`
- `protected static final VoxelShape SOUTH_AABB`
- `protected static final VoxelShape NORTH_AABB`
- `protected static final VoxelShape UP_AABB`
- `protected static final VoxelShape DOWN_AABB`
- `protected static final float AABB_OFFSET` (= 2.0f)
- `protected static final float EDGE_MIN` (= 6.0f)
- `protected static final float EDGE_MAX` (= 10.0f)
- `protected static final VoxelShape UP_ARM_AABB`
- `protected static final VoxelShape DOWN_ARM_AABB`
- `protected static final VoxelShape SOUTH_ARM_AABB`
- `protected static final VoxelShape NORTH_ARM_AABB`
- `protected static final VoxelShape EAST_ARM_AABB`
- `protected static final VoxelShape WEST_ARM_AABB`
- `protected static final VoxelShape SHORT_UP_ARM_AABB`
- `protected static final VoxelShape SHORT_DOWN_ARM_AABB`
- `protected static final VoxelShape SHORT_SOUTH_ARM_AABB`
- `protected static final VoxelShape SHORT_NORTH_ARM_AABB`
- `protected static final VoxelShape SHORT_EAST_ARM_AABB`
- `protected static final VoxelShape SHORT_WEST_ARM_AABB`
- `private static final VoxelShape[] SHAPES_SHORT`
- `private static final VoxelShape[] SHAPES_LONG`

### Inherited fields
- from `net.minecraft.world.level.block.DirectionalBlock`: `FACING`
- from `net.minecraft.world.level.block.Block`: `BLOCK_STATE_REGISTRY`, `INDESTRUCTIBLE`, `INSTANT`, `stateDefinition`, `UPDATE_ALL`, `UPDATE_ALL_IMMEDIATE`, `UPDATE_CLIENTS`, `UPDATE_IMMEDIATE`, `UPDATE_INVISIBLE`, `UPDATE_KNOWN_SHAPE`, `UPDATE_LIMIT`, `UPDATE_MOVE_BY_PISTON`, `UPDATE_NEIGHBORS`, `UPDATE_NONE`, `UPDATE_SUPPRESS_DROPS`
- from `net.minecraft.world.level.block.state.BlockBehaviour`: `drops`, `dynamicShape`, `explosionResistance`, `friction`, `hasCollision`, `isRandomlyTicking`, `jumpFactor`, `properties`, `requiredFeatures`, `soundType`, `speedFactor`, `UPDATE_SHAPE_ORDER`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `private static VoxelShape[] makeShapes(boolean p_60313_)`
- `private static VoxelShape calculateShape(Direction p_60310_,  boolean p_60311_)`
- `public boolean useShapeForLightOcclusion(BlockState p_60325_)`
- `public VoxelShape getShape(BlockState p_60320_,  BlockGetter p_60321_,  BlockPos p_60322_,  CollisionContext p_60323_)`
- `private boolean isFittingBase(BlockState p_60298_,  BlockState p_60299_)`
- `public void playerWillDestroy(Level p_60265_,  BlockPos p_60266_,  BlockState p_60267_,  Player p_60268_)`
- `public void onRemove(BlockState p_60282_,  Level p_60283_,  BlockPos p_60284_,  BlockState p_60285_,  boolean p_60286_)`
- `public BlockState updateShape(BlockState p_60301_,  Direction p_60302_,  BlockState p_60303_,  LevelAccessor p_60304_,  BlockPos p_60305_,  BlockPos p_60306_)`
- `public boolean canSurvive(BlockState p_60288_,  LevelReader p_60289_,  BlockPos p_60290_)`
- `public void neighborChanged(BlockState p_60275_,  Level p_60276_,  BlockPos p_60277_,  Block p_60278_,  BlockPos p_60279_,  boolean p_60280_)`
- `public ItemStack getCloneItemStack(BlockGetter p_60261_,  BlockPos p_60262_,  BlockState p_60263_)`
- `public BlockState rotate(BlockState p_60295_,  Rotation p_60296_)`
- `public BlockState mirror(BlockState p_60292_,  Mirror p_60293_)`
- `protected void createBlockStateDefinition(StateDefinition.Builder<Block,BlockState> p_60308_)`
- `public boolean isPathfindable(BlockState p_60270_,  BlockGetter p_60271_,  BlockPos p_60272_,  PathComputationType p_60273_)`

### Inherited methods
- from `net.minecraft.world.level.block.Block`: `animateTick`, `appendHoverText`, `asBlock`, `asItem`, `box`, `builtInRegistryHolder`, `byItem`, `canSupportCenter`, `canSupportRigidBlock`, `canSustainPlant`, `defaultBlockState`, `destroy`, `dropFromExplosion`, `dropResources`, `dropResources`, `dropResources`, `dropResources`, `fallOn`, `getDescriptionId`, `getDrops`, `getDrops`, `getExplosionResistance`, `getFriction`, `getId`, `getJumpFactor`, `getName`, `getRenderPropertiesInternal`, `getShapeForEachState`, `getSoundType`, `getSpeedFactor`, `getStateDefinition`, `getStateForPlacement`, `handlePrecipitation`, `hasDynamicShape`, `initializeClient`, `isExceptionForConnection`, `isFaceFull`, `isPossibleToRespawnInThis`, `isRandomlyTicking`, `isShapeFullBlock`, `playerDestroy`, `popExperience`, `popResource`, `popResourceFromFace`, `propagatesSkylightDown`, `pushEntitiesUp`, `registerDefaultState`, `setPlacedBy`, `shouldRenderFace`, `spawnDestroyParticles`, `stateById`, `stepOn`, `toString`, `tryDropExperience`, `updateEntityAfterFallOn`, `updateFromNeighbourShapes`, `updateOrDestroy`, `updateOrDestroy`, `wasExploded`, `withPropertiesOf`
- from `net.minecraft.world.level.block.state.BlockBehaviour`: `attack`, `canBeReplaced`, `canBeReplaced`, `defaultDestroyTime`, `defaultMapColor`, `entityInside`, `getAnalogOutputSignal`, `getBlockSupportShape`, `getCollisionShape`, `getDestroyProgress`, `getDirectSignal`, `getDrops`, `getFluidState`, `getInteractionShape`, `getLightBlock`, `getLootTable`, `getMaxHorizontalOffset`, `getMaxVerticalOffset`, `getMenuProvider`, `getOcclusionShape`, `getRenderShape`, `getSeed`, `getShadeBrightness`, `getSignal`, `getVisualShape`, `hasAnalogOutputSignal`, `isAir`, `isCollisionShapeFullBlock`, `isOcclusionShapeFullBlock`, `isSignalSource`, `onPlace`, `onProjectileHit`, `randomTick`, `requiredFeatures`, `skipRendering`, `spawnAfterBreak`, `tick`, `triggerEvent`, `updateIndirectNeighbourShapes`, `use`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeBlock`: `addLandingEffects`, `addRunningEffects`, `canBeHydrated`, `canConnectRedstone`, `canDropFromExplosion`, `canEntityDestroy`, `canHarvestBlock`, `canStickTo`, `collisionExtendsVertically`, `getAdjacentBlockPathType`, `getAppearance`, `getBeaconColorMultiplier`, `getBedDirection`, `getBlockPathType`, `getCloneItemStack`, `getEnchantPowerBonus`, `getExpDrop`, `getExplosionResistance`, `getFireSpreadSpeed`, `getFlammability`, `getFriction`, `getLightEmission`, `getMapColor`, `getPistonPushReaction`, `getRespawnPosition`, `getSoundType`, `getStateAtViewpoint`, `getToolModifiedState`, `getWeakChanges`, `hidesNeighborFace`, `isBed`, `isBurning`, `isConduitFrame`, `isFertile`, `isFireSource`, `isFlammable`, `isLadder`, `isPortalFrame`, `isScaffolding`, `isSlimeBlock`, `isStickyBlock`, `isValidSpawn`, `makesOpenTrapdoorAboveClimbable`, `onBlockExploded`, `onBlockStateChange`, `onCaughtFire`, `onDestroyedByPlayer`, `onNeighborChange`, `onTreeGrow`, `rotate`, `setBedOccupied`, `shouldCheckWeakPower`, `shouldDisplayFluidOverlay`, `supportsExternalFaceHiding`

## PistonMath

*class* `net.minecraft.world.level.block.piston.PistonMath`

### Methods
- `public static AABB getMovementArea(AABB p_60329_,  Direction p_60330_,  double p_60331_)`

## PistonMovingBlockEntity

*class* `net.minecraft.world.level.block.piston.PistonMovingBlockEntity`

### Fields
- `private static final int TICKS_TO_EXTEND` (= 2)
- `private static final double PUSH_OFFSET` (= 0.01)
- `public static final double TICK_MOVEMENT` (= 0.51)
- `private BlockState movedState`
- `private Direction direction`
- `private boolean extending`
- `private boolean isSourcePiston`
- `private static final ThreadLocal<Direction> NOCLIP`
- `private float progress`
- `private float progressO`
- `private long lastTicked`
- `private int deathTicks`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public CompoundTag getUpdateTag()`
- `public boolean isExtending()`
- `public Direction getDirection()`
- `public boolean isSourcePiston()`
- `public float getProgress(float p_60351_)`
- `public float getXOff(float p_60381_)`
- `public float getYOff(float p_60386_)`
- `public float getZOff(float p_60389_)`
- `private float getExtendedProgress(float p_60391_)`
- `private BlockState getCollisionRelatedBlockState()`
- `private static void moveCollidedEntities(Level p_155911_,  BlockPos p_155912_,  float p_155913_,  PistonMovingBlockEntity p_155914_)`
- `private static void moveEntityByPiston(Direction p_60372_,  Entity p_60373_,  double p_60374_,  Direction p_60375_)`
- `private static void moveStuckEntities(Level p_155932_,  BlockPos p_155933_,  float p_155934_,  PistonMovingBlockEntity p_155935_)`
- `private static boolean matchesStickyCritera(AABB p_287782_,  Entity p_287720_,  BlockPos p_287775_)`
- `private boolean isStickyForEntities()`
- `public Direction getMovementDirection()`
- `private static double getMovement(AABB p_60368_,  Direction p_60369_,  AABB p_60370_)`
- `private static AABB moveByPositionAndProgress(BlockPos p_155926_,  AABB p_155927_,  PistonMovingBlockEntity p_155928_)`
- `private static void fixEntityWithinPistonBase(BlockPos p_155921_,  Entity p_155922_,  Direction p_155923_,  double p_155924_)`
- `public BlockState getMovedState()`
- `public void finalTick()`
- `public static void tick(Level p_155916_,  BlockPos p_155917_,  BlockState p_155918_,  PistonMovingBlockEntity p_155919_)`
- `public void load(CompoundTag p_155930_)`
- `protected void saveAdditional(CompoundTag p_187530_)`
- `public VoxelShape getCollisionShape(BlockGetter p_60357_,  BlockPos p_60358_)`
- `public long getLastTicked()`
- `public void setLevel(Level p_250671_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## PistonStructureResolver

*class* `net.minecraft.world.level.block.piston.PistonStructureResolver`

### Fields
- `public static final int MAX_PUSH_DEPTH` (= 12)
- `private final Level level`
- `private final BlockPos pistonPos`
- `private final boolean extending`
- `private final BlockPos startPos`
- `private final Direction pushDirection`
- `private final List<BlockPos> toPush`
- `private final List<BlockPos> toDestroy`
- `private final Direction pistonDirection`

### Methods
- `public boolean resolve()`
- `private boolean addBlockLine(BlockPos p_60434_,  Direction p_60435_)`
- `private void reorderListAtCollision(int p_60424_,  int p_60425_)`
- `private boolean addBranchingBlocks(BlockPos p_60432_)`
- `public Direction getPushDirection()`
- `public List<BlockPos> getToPush()`
- `public List<BlockPos> getToDestroy()`
