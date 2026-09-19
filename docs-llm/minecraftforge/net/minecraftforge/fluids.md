# net.minecraftforge.fluids

- [BlockFluidBase](#blockfluidbase)
- [BlockFluidClassic](#blockfluidclassic)
- [BlockFluidFinite](#blockfluidfinite)
- [DispenseFluidContainer](#dispensefluidcontainer)
- [Fluid](#fluid)
- [FluidActionResult](#fluidactionresult)
- [FluidEvent](#fluidevent)
- [FluidEvent.FluidDrainingEvent](#fluidevent.fluiddrainingevent)
- [FluidEvent.FluidFillingEvent](#fluidevent.fluidfillingevent)
- [FluidEvent.FluidMotionEvent](#fluidevent.fluidmotionevent)
- [FluidEvent.FluidSpilledEvent](#fluidevent.fluidspilledevent)
- [FluidRegistry](#fluidregistry)
- [FluidRegistry.FluidRegisterEvent](#fluidregistry.fluidregisterevent)
- [FluidStack](#fluidstack)
- [FluidTank](#fluidtank)
- [FluidTankInfo](#fluidtankinfo)
- [FluidUtil](#fluidutil)
- [IFluidBlock](#ifluidblock)
- [IFluidTank](#ifluidtank)
- [UniversalBucket](#universalbucket)
## BlockFluidBase

*class* `net.minecraftforge.fluids.BlockFluidBase`

This is a base implementation for Fluid blocks.

 It is highly recommended that you extend this class or one of the Forge-provided child classes.

All Implemented Interfaces: IFluidBlock, IForgeRegistryEntry<Block>

### Fields
- `protected static final java.util.Map<Block,java.lang.Boolean> defaultDisplacements`
- `protected java.util.Map<Block,java.lang.Boolean> displacements`
- `public static final PropertyInteger LEVEL`
- `public static final PropertyFloat[] LEVEL_CORNERS`
- `public static final PropertyFloat FLOW_DIRECTION`
- `public static final net.minecraftforge.fluids.BlockFluidBase.UnlistedPropertyBool[] SIDE_OVERLAYS`
- `public static final <any> FLUID_RENDER_PROPS`
- `protected int quantaPerBlock`
- `protected float quantaPerBlockFloat`
- `protected float quantaFraction`
- `protected int density`
- `protected int densityDir`
- `protected int temperature`
- `protected int tickRate`
- `protected BlockRenderLayer renderLayer`
- `protected int maxScaledLight`
- `protected final java.lang.String fluidName`
- `protected final Fluid definedFluid`
  This is the fluid used in the constructor. Use this reference to configure things
   like icons for your block. It might not be active in the registry, so do
   NOT expose it.

### Inherited fields
- from `net.minecraft.block.Block`: `BLOCK_STATE_IDS`, `blockHardness`, `blockMapColor`, `blockMaterial`, `blockParticleGravity`, `blockResistance`, `blockSoundType`, `blockState`, `capturedDrops`, `captureDrops`, `enableStats`, `FULL_BLOCK_AABB`, `fullBlock`, `harvesters`, `hasTileEntity`, `lightOpacity`, `lightValue`, `needsRandomTick`, `NULL_AABB`, `RANDOM`, `REGISTRY`, `slipperiness`, `translucent`, `useNeighborBrightness`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `protected BlockStateContainer createBlockState()`
- `public int getMetaFromState(IBlockState state)`
- `@Deprecated public IBlockState getStateFromMeta(int meta)` (deprecated)
  Deprecated.
- `public BlockFluidBase setQuantaPerBlock(int quantaPerBlock)`
- `public BlockFluidBase setDensity(int density)`
- `public BlockFluidBase setTemperature(int temperature)`
- `public BlockFluidBase setTickRate(int tickRate)`
- `public BlockFluidBase setRenderLayer(BlockRenderLayer renderLayer)`
- `public BlockFluidBase setMaxScaledLight(int maxScaledLight)`
- `public final int getDensity()`
- `public final int getTemperature()`
- `public boolean canDisplace(IBlockAccess world,  BlockPos pos)`
  Returns true if the block at (pos) is displaceable. Does not displace the block.
- `public boolean displaceIfPossible(World world,  BlockPos pos)`
  Attempt to displace the block at (pos), return true if it was displaced.
- `public abstract int getQuantaValue(IBlockAccess world,  BlockPos pos)`
- `public abstract boolean canCollideCheck(IBlockState state,  boolean fullHit)`
- `public abstract int getMaxRenderHeightMeta()`
- `public void onBlockAdded(World world,  BlockPos pos,  IBlockState state)`
- `public void neighborChanged(IBlockState state,  World world,  BlockPos pos,  Block neighborBlock,  BlockPos neighbourPos)`
- `public boolean requiresUpdates()`
- `public boolean isPassable(IBlockAccess world,  BlockPos pos)`
- `public Item getItemDropped(IBlockState state,  java.util.Random rand,  int fortune)`
- `public int quantityDropped(java.util.Random par1Random)`
- `public int tickRate(World world)`
- `public Vec3d modifyAcceleration(World world,  BlockPos pos,  Entity entity,  Vec3d vec)`
- `public int getLightValue(IBlockState state,  IBlockAccess world,  BlockPos pos)`
  Description copied from class: Block
  Get a light value for this block, taking into account the given state and coordinates, normal ranges are between 0 and 15
  - param: state - Block state
  - param: world - The current world
  - param: pos - Block position in world
  - returns: The light value
- `public boolean isOpaqueCube(IBlockState state)`
- `public boolean isFullCube(IBlockState state)`
- `public int getPackedLightmapCoords(IBlockState state,  IBlockAccess world,  BlockPos pos)`
- `public BlockRenderLayer getBlockLayer()`
- `public BlockFaceShape getBlockFaceShape(IBlockAccess worldIn,  IBlockState state,  BlockPos pos,  EnumFacing face)`
- `public boolean shouldSideBeRendered(IBlockState state,  IBlockAccess world,  BlockPos pos,  EnumFacing side)`
- `public IBlockState getExtendedState(IBlockState oldState,  IBlockAccess world,  BlockPos pos)`
  Description copied from class: Block
  Can return IExtendedBlockState
- `public static int getDensity(IBlockAccess world,  BlockPos pos)`
- `public static int getTemperature(IBlockAccess world,  BlockPos pos)`
- `public static double getFlowDirection(IBlockAccess world,  BlockPos pos)`
- `public final int getQuantaValueBelow(IBlockAccess world,  BlockPos pos,  int belowThis)`
- `public final int getQuantaValueAbove(IBlockAccess world,  BlockPos pos,  int aboveThis)`
- `public final float getQuantaPercentage(IBlockAccess world,  BlockPos pos)`
- `public float getFluidHeightAverage(float... flow)`
- `public float getFluidHeightForRender(IBlockAccess world,  BlockPos pos,  IBlockState up)`
- `public Vec3d getFlowVector(IBlockAccess world,  BlockPos pos)`
- `protected boolean causesDownwardCurrent(IBlockAccess world,  BlockPos pos,  EnumFacing face)`
- `public Fluid getFluid()`
  Description copied from interface: IFluidBlock
  Returns the Fluid associated with this Block.
- `public float getFilledPercentage(World world,  BlockPos pos)`
  Description copied from interface: IFluidBlock
  Returns the amount of a single block is filled. Value between 0 and 1.
   1 meaning the entire 1x1x1 cube is full, 0 meaning completely empty.
  
   If the return value is negative. It will be treated as filling the block
   from the top down instead of bottom up.
- `public float getFilledPercentage(IBlockAccess world,  BlockPos pos)`
- `public AxisAlignedBB getCollisionBoundingBox(IBlockState blockState,  IBlockAccess worldIn,  BlockPos pos)`
- `public Vec3d getFogColor(World world,  BlockPos pos,  IBlockState state,  Entity entity,  Vec3d originalColor,  float partialTicks)`
  Description copied from class: Block
  Use this to change the fog color used when the entity is "inside" a material.
   Vec3d is used here as "r/g/b" 0 - 1 values.
  - param: world - The world.
  - param: pos - The position at the entity viewport.
  - param: state - The state at the entity viewport.
  - param: entity - the entity
  - param: originalColor - The current fog color, You are not expected to use this, Return as the default if applicable.
  - returns: The new fog color.
- `public IBlockState getStateAtViewpoint(IBlockState state,  IBlockAccess world,  BlockPos pos,  Vec3d viewpoint)`
  Description copied from class: Block
  Used to determine the state 'viewed' by an entity (see
   ActiveRenderInfo.getBlockStateAtEntityViewpoint(World, Entity, float)).
   Can be used by fluid blocks to determine if the viewpoint is within the fluid or not.
  - param: state - the state
  - param: world - the world
  - param: pos - the position
  - param: viewpoint - the viewpoint
  - returns: the block state that should be 'seen'
- `public float getBlockLiquidHeight(World world,  BlockPos pos,  IBlockState state,  Material material)`
  Description copied from class: Block
  Called when entities are swimming in the given liquid and returns the relative height (used by EntityBoat)
  - param: world - world that is being tested.
  - param: pos - block thats being tested.
  - param: state - state at world/pos
  - param: material - liquid thats being tested.
  - returns: relative height of the given liquid (material), a value between 0 and 1

### Inherited methods
- from `net.minecraft.block.Block`: `addCollisionBoxToList`, `addCollisionBoxToList`, `addDestroyEffects`, `addHitEffects`, `addInformation`, `addLandingEffects`, `addRunningEffects`, `beginLeavesDecay`, `breakBlock`, `canBeConnectedTo`, `canBeReplacedByLeaves`, `canConnectRedstone`, `canCreatureSpawn`, `canDropFromExplosion`, `canEntityDestroy`, `canEntitySpawn`, `canHarvestBlock`, `canPlaceBlockAt`, `canPlaceBlockOnSide`, `canPlaceTorchOnTop`, `canProvidePower`, `canRenderInLayer`, `canSilkHarvest`, `canSilkHarvest`, `canSpawnInBlock`, `canSustainLeaves`, `canSustainPlant`, `captureDrops`, `causesSuffocation`, `collisionRayTrace`, `createTileEntity`, `damageDropped`, `disableStats`, `doesSideBlockChestOpening`, `doesSideBlockRendering`, `dropBlockAsItem`, `dropBlockAsItemWithChance`, `dropXpOnBlockBreak`, `eventReceived`, `fillWithRain`, `getActualState`, `getAiPathNodeType`, `getAiPathNodeType`, `getAmbientOcclusionLightValue`, `getBeaconColorMultiplier`, `getBedDirection`, `getBedSpawnPosition`, `getBlockById`, `getBlockFromItem`, `getBlockFromName`, `getBlockHardness`, `getBlockState`, `getBoundingBox`, `getComparatorInputOverride`, `getCreativeTabToDisplayOn`, `getDefaultState`, `getDrops`, `getDrops`, `getEnableStats`, `getEnchantPowerBonus`, `getExpDrop`, `getExplosionResistance`, `getExplosionResistance`, `getFireSpreadSpeed`, `getFlammability`, `getHarvestLevel`, `getHarvestTool`, `getIdFromBlock`, `getItem`, `getLightOpacity`, `getLightOpacity`, `getLightValue`, `getLocalizedName`, `getMapColor`, `getMaterial`, `getMobilityFlag`, `getOffset`, `getOffsetType`, `getPickBlock`, `getPlayerRelativeBlockHardness`, `getRenderType`, `getSelectedBoundingBox`, `getSilkTouchDrop`, `getSlipperiness`, `getSoundType`, `getSoundType`, `getStateById`, `getStateForPlacement`, `getStateForPlacement`, `getStateId`, `getStrongPower`, `getSubBlocks`, `getTickRandomly`, `getUnlocalizedName`, `getUseNeighborBrightness`, `getValidRotations`, `getWeakChanges`, `getWeakPower`, `harvestBlock`, `hasComparatorInputOverride`, `hasCustomBreakingProgress`, `hasTileEntity`, `hasTileEntity`, `isAABBInsideLiquid`, `isAABBInsideMaterial`, `isAir`, `isAssociatedBlock`, `isBeaconBase`, `isBed`, `isBedFoot`, `isBlockNormalCube`, `isBurning`, `isCollidable`, `isEntityInsideMaterial`, `isEqualTo`, `isExceptBlockForAttachWithPiston`, `isExceptionBlockForAttaching`, `isFertile`, `isFireSource`, `isFlammable`, `isFoliage`, `isFullBlock`, `isLadder`, `isLeaves`, `isNormalCube`, `isNormalCube`, `isReplaceable`, `isReplaceableOreGen`, `isSideSolid`, `isStickyBlock`, `isToolEffective`, `isTopSolid`, `isTranslucent`, `isWood`, `observedNeighborChange`, `onBlockActivated`, `onBlockClicked`, `onBlockDestroyedByExplosion`, `onBlockDestroyedByPlayer`, `onBlockExploded`, `onBlockHarvested`, `onBlockPlacedBy`, `onEntityCollidedWithBlock`, `onEntityWalk`, `onFallenUpon`, `onLanded`, `onNeighborChange`, `onPlantGrow`, `quantityDropped`, `quantityDroppedWithBonus`, `randomDisplayTick`, `randomTick`, `rayTrace`, `recolorBlock`, `registerBlocks`, `removedByPlayer`, `rotateBlock`, `setBedOccupied`, `setBlockUnbreakable`, `setCreativeTab`, `setDefaultSlipperiness`, `setDefaultState`, `setHardness`, `setHarvestLevel`, `setHarvestLevel`, `setLightLevel`, `setLightOpacity`, `setResistance`, `setSoundType`, `setTickRandomly`, `setUnlocalizedName`, `shouldCheckWeakPower`, `spawnAsEntity`, `toString`, `updateTick`, `withMirror`, `withRotation`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`
- from `net.minecraftforge.fluids.IFluidBlock`: `canDrain`, `drain`, `place`

## BlockFluidClassic

*class* `net.minecraftforge.fluids.BlockFluidClassic`

This is a fluid block implementation which emulates vanilla Minecraft fluid behavior.

 It is highly recommended that you use/extend this class for "classic" fluid blocks.

All Implemented Interfaces: IFluidBlock, IForgeRegistryEntry<Block>

### Fields
- `protected static final java.util.List<EnumFacing> SIDES`
- `protected boolean[] isOptimalFlowDirection`
- `protected int[] flowCost`
- `protected boolean canCreateSources`
- `protected FluidStack stack`

### Inherited fields
- from `net.minecraftforge.fluids.BlockFluidBase`: `defaultDisplacements`, `definedFluid`, `density`, `densityDir`, `displacements`, `FLOW_DIRECTION`, `FLUID_RENDER_PROPS`, `fluidName`, `LEVEL`, `LEVEL_CORNERS`, `maxScaledLight`, `quantaFraction`, `quantaPerBlock`, `quantaPerBlockFloat`, `renderLayer`, `SIDE_OVERLAYS`, `temperature`, `tickRate`
- from `net.minecraft.block.Block`: `BLOCK_STATE_IDS`, `blockHardness`, `blockMapColor`, `blockMaterial`, `blockParticleGravity`, `blockResistance`, `blockSoundType`, `blockState`, `capturedDrops`, `captureDrops`, `enableStats`, `FULL_BLOCK_AABB`, `fullBlock`, `harvesters`, `hasTileEntity`, `lightOpacity`, `lightValue`, `needsRandomTick`, `NULL_AABB`, `RANDOM`, `REGISTRY`, `slipperiness`, `translucent`, `useNeighborBrightness`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public BlockFluidClassic setFluidStack(FluidStack stack)`
- `public BlockFluidClassic setFluidStackAmount(int amount)`
- `public int getQuantaValue(IBlockAccess world,  BlockPos pos)`
- `public boolean canCollideCheck(IBlockState state,  boolean fullHit)`
- `public int getMaxRenderHeightMeta()`
- `public void updateTick(World world,  BlockPos pos,  IBlockState state,  java.util.Random rand)`
- `protected final boolean hasDownhillFlow(IBlockAccess world,  BlockPos pos,  EnumFacing direction)`
- `public boolean isFlowingVertically(IBlockAccess world,  BlockPos pos)`
- `public boolean isSourceBlock(IBlockAccess world,  BlockPos pos)`
- `protected boolean[] getOptimalFlowDirections(World world,  BlockPos pos)`
- `protected int calculateFlowCost(World world,  BlockPos pos,  int recurseDepth,  int side)`
- `protected void flowIntoBlock(World world,  BlockPos pos,  int meta)`
- `protected boolean canFlowInto(IBlockAccess world,  BlockPos pos)`
- `protected int getLargerQuanta(IBlockAccess world,  BlockPos pos,  int compare)`
- `public int place(World world,  BlockPos pos,  FluidStack fluidStack,  boolean doPlace)`
  Description copied from interface: IFluidBlock
  Attempts to place the block at a given position. The placed block's level will correspond
   to the provided fluid amount.
   This method should be called by fluid containers such as buckets, but it is recommended
   to use FluidUtil.
  - param: world - the world to place the block in
  - param: pos - the position to place the block at
  - param: fluidStack - the fluid stack to get the required data from
  - param: doPlace - if false, the placement will only be simulated
  - returns: the amount of fluid extracted from the provided stack to achieve some fluid level
- `public FluidStack drain(World world,  BlockPos pos,  boolean doDrain)`
  Description copied from interface: IFluidBlock
  Attempt to drain the block. This method should be called by devices such as pumps.
  
   NOTE: The block is intended to handle its own state changes.
- `public boolean canDrain(World world,  BlockPos pos)`
  Description copied from interface: IFluidBlock
  Check to see if a block can be drained. This method should be called by devices such as
   pumps.

### Inherited methods
- from `net.minecraftforge.fluids.BlockFluidBase`: `canDisplace`, `causesDownwardCurrent`, `createBlockState`, `displaceIfPossible`, `getBlockFaceShape`, `getBlockLayer`, `getBlockLiquidHeight`, `getCollisionBoundingBox`, `getDensity`, `getDensity`, `getExtendedState`, `getFilledPercentage`, `getFilledPercentage`, `getFlowDirection`, `getFlowVector`, `getFluid`, `getFluidHeightAverage`, `getFluidHeightForRender`, `getFogColor`, `getItemDropped`, `getLightValue`, `getMetaFromState`, `getPackedLightmapCoords`, `getQuantaPercentage`, `getQuantaValueAbove`, `getQuantaValueBelow`, `getStateAtViewpoint`, `getStateFromMeta`, `getTemperature`, `getTemperature`, `isFullCube`, `isOpaqueCube`, `isPassable`, `modifyAcceleration`, `neighborChanged`, `onBlockAdded`, `quantityDropped`, `requiresUpdates`, `setDensity`, `setMaxScaledLight`, `setQuantaPerBlock`, `setRenderLayer`, `setTemperature`, `setTickRate`, `shouldSideBeRendered`, `tickRate`
- from `net.minecraft.block.Block`: `addCollisionBoxToList`, `addCollisionBoxToList`, `addDestroyEffects`, `addHitEffects`, `addInformation`, `addLandingEffects`, `addRunningEffects`, `beginLeavesDecay`, `breakBlock`, `canBeConnectedTo`, `canBeReplacedByLeaves`, `canConnectRedstone`, `canCreatureSpawn`, `canDropFromExplosion`, `canEntityDestroy`, `canEntitySpawn`, `canHarvestBlock`, `canPlaceBlockAt`, `canPlaceBlockOnSide`, `canPlaceTorchOnTop`, `canProvidePower`, `canRenderInLayer`, `canSilkHarvest`, `canSilkHarvest`, `canSpawnInBlock`, `canSustainLeaves`, `canSustainPlant`, `captureDrops`, `causesSuffocation`, `collisionRayTrace`, `createTileEntity`, `damageDropped`, `disableStats`, `doesSideBlockChestOpening`, `doesSideBlockRendering`, `dropBlockAsItem`, `dropBlockAsItemWithChance`, `dropXpOnBlockBreak`, `eventReceived`, `fillWithRain`, `getActualState`, `getAiPathNodeType`, `getAiPathNodeType`, `getAmbientOcclusionLightValue`, `getBeaconColorMultiplier`, `getBedDirection`, `getBedSpawnPosition`, `getBlockById`, `getBlockFromItem`, `getBlockFromName`, `getBlockHardness`, `getBlockState`, `getBoundingBox`, `getComparatorInputOverride`, `getCreativeTabToDisplayOn`, `getDefaultState`, `getDrops`, `getDrops`, `getEnableStats`, `getEnchantPowerBonus`, `getExpDrop`, `getExplosionResistance`, `getExplosionResistance`, `getFireSpreadSpeed`, `getFlammability`, `getHarvestLevel`, `getHarvestTool`, `getIdFromBlock`, `getItem`, `getLightOpacity`, `getLightOpacity`, `getLightValue`, `getLocalizedName`, `getMapColor`, `getMaterial`, `getMobilityFlag`, `getOffset`, `getOffsetType`, `getPickBlock`, `getPlayerRelativeBlockHardness`, `getRenderType`, `getSelectedBoundingBox`, `getSilkTouchDrop`, `getSlipperiness`, `getSoundType`, `getSoundType`, `getStateById`, `getStateForPlacement`, `getStateForPlacement`, `getStateId`, `getStrongPower`, `getSubBlocks`, `getTickRandomly`, `getUnlocalizedName`, `getUseNeighborBrightness`, `getValidRotations`, `getWeakChanges`, `getWeakPower`, `harvestBlock`, `hasComparatorInputOverride`, `hasCustomBreakingProgress`, `hasTileEntity`, `hasTileEntity`, `isAABBInsideLiquid`, `isAABBInsideMaterial`, `isAir`, `isAssociatedBlock`, `isBeaconBase`, `isBed`, `isBedFoot`, `isBlockNormalCube`, `isBurning`, `isCollidable`, `isEntityInsideMaterial`, `isEqualTo`, `isExceptBlockForAttachWithPiston`, `isExceptionBlockForAttaching`, `isFertile`, `isFireSource`, `isFlammable`, `isFoliage`, `isFullBlock`, `isLadder`, `isLeaves`, `isNormalCube`, `isNormalCube`, `isReplaceable`, `isReplaceableOreGen`, `isSideSolid`, `isStickyBlock`, `isToolEffective`, `isTopSolid`, `isTranslucent`, `isWood`, `observedNeighborChange`, `onBlockActivated`, `onBlockClicked`, `onBlockDestroyedByExplosion`, `onBlockDestroyedByPlayer`, `onBlockExploded`, `onBlockHarvested`, `onBlockPlacedBy`, `onEntityCollidedWithBlock`, `onEntityWalk`, `onFallenUpon`, `onLanded`, `onNeighborChange`, `onPlantGrow`, `quantityDropped`, `quantityDroppedWithBonus`, `randomDisplayTick`, `randomTick`, `rayTrace`, `recolorBlock`, `registerBlocks`, `removedByPlayer`, `rotateBlock`, `setBedOccupied`, `setBlockUnbreakable`, `setCreativeTab`, `setDefaultSlipperiness`, `setDefaultState`, `setHardness`, `setHarvestLevel`, `setHarvestLevel`, `setLightLevel`, `setLightOpacity`, `setResistance`, `setSoundType`, `setTickRandomly`, `setUnlocalizedName`, `shouldCheckWeakPower`, `spawnAsEntity`, `toString`, `withMirror`, `withRotation`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BlockFluidFinite

*class* `net.minecraftforge.fluids.BlockFluidFinite`

This is a cellular-automata based finite fluid block implementation.

 It is highly recommended that you use/extend this class for finite fluid blocks.

All Implemented Interfaces: IFluidBlock, IForgeRegistryEntry<Block>

### Inherited fields
- from `net.minecraftforge.fluids.BlockFluidBase`: `defaultDisplacements`, `definedFluid`, `density`, `densityDir`, `displacements`, `FLOW_DIRECTION`, `FLUID_RENDER_PROPS`, `fluidName`, `LEVEL`, `LEVEL_CORNERS`, `maxScaledLight`, `quantaFraction`, `quantaPerBlock`, `quantaPerBlockFloat`, `renderLayer`, `SIDE_OVERLAYS`, `temperature`, `tickRate`
- from `net.minecraft.block.Block`: `BLOCK_STATE_IDS`, `blockHardness`, `blockMapColor`, `blockMaterial`, `blockParticleGravity`, `blockResistance`, `blockSoundType`, `blockState`, `capturedDrops`, `captureDrops`, `enableStats`, `FULL_BLOCK_AABB`, `fullBlock`, `harvesters`, `hasTileEntity`, `lightOpacity`, `lightValue`, `needsRandomTick`, `NULL_AABB`, `RANDOM`, `REGISTRY`, `slipperiness`, `translucent`, `useNeighborBrightness`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getQuantaValue(IBlockAccess world,  BlockPos pos)`
- `public boolean canCollideCheck(IBlockState state,  boolean fullHit)`
- `public int getMaxRenderHeightMeta()`
- `public void updateTick(World world,  BlockPos pos,  IBlockState state,  java.util.Random rand)`
- `public int tryToFlowVerticallyInto(World world,  BlockPos pos,  int amtToInput)`
- `public int place(World world,  BlockPos pos,  FluidStack fluidStack,  boolean doPlace)`
  Description copied from interface: IFluidBlock
  Attempts to place the block at a given position. The placed block's level will correspond
   to the provided fluid amount.
   This method should be called by fluid containers such as buckets, but it is recommended
   to use FluidUtil.
  - param: world - the world to place the block in
  - param: pos - the position to place the block at
  - param: fluidStack - the fluid stack to get the required data from
  - param: doPlace - if false, the placement will only be simulated
  - returns: the amount of fluid extracted from the provided stack to achieve some fluid level
- `public FluidStack drain(World world,  BlockPos pos,  boolean doDrain)`
  Description copied from interface: IFluidBlock
  Attempt to drain the block. This method should be called by devices such as pumps.
  
   NOTE: The block is intended to handle its own state changes.
- `public boolean canDrain(World world,  BlockPos pos)`
  Description copied from interface: IFluidBlock
  Check to see if a block can be drained. This method should be called by devices such as
   pumps.

### Inherited methods
- from `net.minecraftforge.fluids.BlockFluidBase`: `canDisplace`, `causesDownwardCurrent`, `createBlockState`, `displaceIfPossible`, `getBlockFaceShape`, `getBlockLayer`, `getBlockLiquidHeight`, `getCollisionBoundingBox`, `getDensity`, `getDensity`, `getExtendedState`, `getFilledPercentage`, `getFilledPercentage`, `getFlowDirection`, `getFlowVector`, `getFluid`, `getFluidHeightAverage`, `getFluidHeightForRender`, `getFogColor`, `getItemDropped`, `getLightValue`, `getMetaFromState`, `getPackedLightmapCoords`, `getQuantaPercentage`, `getQuantaValueAbove`, `getQuantaValueBelow`, `getStateAtViewpoint`, `getStateFromMeta`, `getTemperature`, `getTemperature`, `isFullCube`, `isOpaqueCube`, `isPassable`, `modifyAcceleration`, `neighborChanged`, `onBlockAdded`, `quantityDropped`, `requiresUpdates`, `setDensity`, `setMaxScaledLight`, `setQuantaPerBlock`, `setRenderLayer`, `setTemperature`, `setTickRate`, `shouldSideBeRendered`, `tickRate`
- from `net.minecraft.block.Block`: `addCollisionBoxToList`, `addCollisionBoxToList`, `addDestroyEffects`, `addHitEffects`, `addInformation`, `addLandingEffects`, `addRunningEffects`, `beginLeavesDecay`, `breakBlock`, `canBeConnectedTo`, `canBeReplacedByLeaves`, `canConnectRedstone`, `canCreatureSpawn`, `canDropFromExplosion`, `canEntityDestroy`, `canEntitySpawn`, `canHarvestBlock`, `canPlaceBlockAt`, `canPlaceBlockOnSide`, `canPlaceTorchOnTop`, `canProvidePower`, `canRenderInLayer`, `canSilkHarvest`, `canSilkHarvest`, `canSpawnInBlock`, `canSustainLeaves`, `canSustainPlant`, `captureDrops`, `causesSuffocation`, `collisionRayTrace`, `createTileEntity`, `damageDropped`, `disableStats`, `doesSideBlockChestOpening`, `doesSideBlockRendering`, `dropBlockAsItem`, `dropBlockAsItemWithChance`, `dropXpOnBlockBreak`, `eventReceived`, `fillWithRain`, `getActualState`, `getAiPathNodeType`, `getAiPathNodeType`, `getAmbientOcclusionLightValue`, `getBeaconColorMultiplier`, `getBedDirection`, `getBedSpawnPosition`, `getBlockById`, `getBlockFromItem`, `getBlockFromName`, `getBlockHardness`, `getBlockState`, `getBoundingBox`, `getComparatorInputOverride`, `getCreativeTabToDisplayOn`, `getDefaultState`, `getDrops`, `getDrops`, `getEnableStats`, `getEnchantPowerBonus`, `getExpDrop`, `getExplosionResistance`, `getExplosionResistance`, `getFireSpreadSpeed`, `getFlammability`, `getHarvestLevel`, `getHarvestTool`, `getIdFromBlock`, `getItem`, `getLightOpacity`, `getLightOpacity`, `getLightValue`, `getLocalizedName`, `getMapColor`, `getMaterial`, `getMobilityFlag`, `getOffset`, `getOffsetType`, `getPickBlock`, `getPlayerRelativeBlockHardness`, `getRenderType`, `getSelectedBoundingBox`, `getSilkTouchDrop`, `getSlipperiness`, `getSoundType`, `getSoundType`, `getStateById`, `getStateForPlacement`, `getStateForPlacement`, `getStateId`, `getStrongPower`, `getSubBlocks`, `getTickRandomly`, `getUnlocalizedName`, `getUseNeighborBrightness`, `getValidRotations`, `getWeakChanges`, `getWeakPower`, `harvestBlock`, `hasComparatorInputOverride`, `hasCustomBreakingProgress`, `hasTileEntity`, `hasTileEntity`, `isAABBInsideLiquid`, `isAABBInsideMaterial`, `isAir`, `isAssociatedBlock`, `isBeaconBase`, `isBed`, `isBedFoot`, `isBlockNormalCube`, `isBurning`, `isCollidable`, `isEntityInsideMaterial`, `isEqualTo`, `isExceptBlockForAttachWithPiston`, `isExceptionBlockForAttaching`, `isFertile`, `isFireSource`, `isFlammable`, `isFoliage`, `isFullBlock`, `isLadder`, `isLeaves`, `isNormalCube`, `isNormalCube`, `isReplaceable`, `isReplaceableOreGen`, `isSideSolid`, `isStickyBlock`, `isToolEffective`, `isTopSolid`, `isTranslucent`, `isWood`, `observedNeighborChange`, `onBlockActivated`, `onBlockClicked`, `onBlockDestroyedByExplosion`, `onBlockDestroyedByPlayer`, `onBlockExploded`, `onBlockHarvested`, `onBlockPlacedBy`, `onEntityCollidedWithBlock`, `onEntityWalk`, `onFallenUpon`, `onLanded`, `onNeighborChange`, `onPlantGrow`, `quantityDropped`, `quantityDroppedWithBonus`, `randomDisplayTick`, `randomTick`, `rayTrace`, `recolorBlock`, `registerBlocks`, `removedByPlayer`, `rotateBlock`, `setBedOccupied`, `setBlockUnbreakable`, `setCreativeTab`, `setDefaultSlipperiness`, `setDefaultState`, `setHardness`, `setHarvestLevel`, `setHarvestLevel`, `setLightLevel`, `setLightOpacity`, `setResistance`, `setSoundType`, `setTickRandomly`, `setUnlocalizedName`, `shouldCheckWeakPower`, `spawnAsEntity`, `toString`, `withMirror`, `withRotation`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## DispenseFluidContainer

*class* `net.minecraftforge.fluids.DispenseFluidContainer`

Fills or drains a fluid container item using a Dispenser.

All Implemented Interfaces: IBehaviorDispenseItem

### Inherited fields
- from `net.minecraft.dispenser.IBehaviorDispenseItem`: `DEFAULT_BEHAVIOR`

### Methods
- `public static DispenseFluidContainer getInstance()`
- `public ItemStack dispenseStack(IBlockSource source,  ItemStack stack)`

### Inherited methods
- from `net.minecraft.dispenser.BehaviorDefaultDispenseItem`: `dispense`, `doDispense`, `playDispenseSound`, `spawnDispenseParticles`

## Fluid

*class* `net.minecraftforge.fluids.Fluid`

Minecraft Forge Fluid Implementation

 This class is a fluid (liquid or gas) equivalent to "Item." It describes the nature of a fluid
 and contains its general properties.

 These properties do not have inherent gameplay mechanics - they are provided so that mods may
 choose to take advantage of them.

 Fluid implementations are not required to actively use these properties, nor are objects
 interfacing with fluids required to make use of them, but it is encouraged.

 The default values can be used as a reference point for mods adding fluids such as oil or heavy
 water.

### Fields
- `public static final int BUCKET_VOLUME` (= 1000)
- `protected final java.lang.String fluidName`
  The unique identification name for this fluid.
- `protected java.lang.String unlocalizedName`
  The unlocalized name of this fluid.
- `protected final ResourceLocation still`
- `protected final ResourceLocation flowing`
- `protected final ResourceLocation overlay`
- `protected int luminosity`
  The light level emitted by this fluid.
  
   Default value is 0, as most fluids do not actively emit light.
- `protected int density`
  Density of the fluid - completely arbitrary; negative density indicates that the fluid is
   lighter than air.
  
   Default value is approximately the real-life density of water in kg/m^3.
- `protected int temperature`
  Temperature of the fluid - completely arbitrary; higher temperature indicates that the fluid is
   hotter than air.
  
   Default value is approximately the real-life room temperature of water in degrees Kelvin.
- `protected int viscosity`
  Viscosity ("thickness") of the fluid - completely arbitrary; negative values are not
   permissible.
  
   Default value is approximately the real-life density of water in m/s^2 (x10^-3).
  
   Higher viscosity means that a fluid flows more slowly, like molasses.
   Lower viscosity means that a fluid flows more quickly, like helium.
- `protected boolean isGaseous`
  This indicates if the fluid is gaseous.
  
   Generally this is associated with negative density fluids.
- `protected EnumRarity rarity`
  The rarity of the fluid.
  
   Used primarily in tool tips.
- `protected Block block`
  If there is a Block implementation of the Fluid, the Block is linked here.
  
   The default value of null should remain for any Fluid without a Block implementation.
- `protected int color`
  Color used by universal bucket and the ModelFluid baked model.
   Note that this int includes the alpha so converting this to RGB with alpha would be
   float r = ((color >> 16) & 0xFF) / 255f; // red
   float g = ((color >> 8) & 0xFF) / 255f; // green
   float b = ((color >> 0) & 0xFF) / 255f; // blue
   float a = ((color >> 24) & 0xFF) / 255f; // alpha

### Methods
- `public Fluid setUnlocalizedName(java.lang.String unlocalizedName)`
- `public Fluid setBlock(Block block)`
- `public Fluid setLuminosity(int luminosity)`
- `public Fluid setDensity(int density)`
- `public Fluid setTemperature(int temperature)`
- `public Fluid setViscosity(int viscosity)`
- `public Fluid setGaseous(boolean isGaseous)`
- `public Fluid setRarity(EnumRarity rarity)`
- `public Fluid setFillSound(SoundEvent fillSound)`
- `public Fluid setEmptySound(SoundEvent emptySound)`
- `public Fluid setColor(java.awt.Color color)`
- `public Fluid setColor(int color)`
- `public final java.lang.String getName()`
- `public final Block getBlock()`
- `public final boolean canBePlacedInWorld()`
- `public final boolean isLighterThanAir()`
- `public boolean doesVaporize(FluidStack fluidStack)`
  Determines if this fluid should vaporize in dimensions where water vaporizes when placed.
   To preserve the intentions of vanilla, fluids that can turn lava into obsidian should vaporize.
   This prevents players from making the nether safe with a single bucket.
   Based on ItemBucket.tryPlaceContainedLiquid(EntityPlayer, World, BlockPos)
  - param: fluidStack - The fluidStack is trying to be placed.
  - returns: true if this fluid should vaporize in dimensions where water vaporizes when placed.
- `public void vaporize(EntityPlayer player,  World worldIn,  BlockPos pos,  FluidStack fluidStack)`
  Called instead of placing the fluid block if WorldProvider.doesWaterVaporize() and doesVaporize(FluidStack) are true.
   Override this to make your explosive liquid blow up instead of the default smoke, etc.
   Based on ItemBucket.tryPlaceContainedLiquid(EntityPlayer, World, BlockPos)
  - param: player - Player who tried to place the fluid. May be null for blocks like dispensers.
  - param: worldIn - World to vaporize the fluid in.
  - param: pos - The position in the world the fluid block was going to be placed.
  - param: fluidStack - The fluidStack that was going to be placed.
- `public java.lang.String getLocalizedName(FluidStack stack)`
  Returns the localized name of this fluid.
- `public java.lang.String getUnlocalizedName(FluidStack stack)`
  A FluidStack sensitive version of getUnlocalizedName
- `public java.lang.String getUnlocalizedName()`
  Returns the unlocalized name of this fluid.
- `public final int getLuminosity()`
- `public final int getDensity()`
- `public final int getTemperature()`
- `public final int getViscosity()`
- `public final boolean isGaseous()`
- `public EnumRarity getRarity()`
- `public int getColor()`
- `public ResourceLocation getStill()`
- `public ResourceLocation getFlowing()`
- `public ResourceLocation getOverlay()`
- `public SoundEvent getFillSound()`
- `public SoundEvent getEmptySound()`
- `public int getLuminosity(FluidStack stack)`
- `public int getDensity(FluidStack stack)`
- `public int getTemperature(FluidStack stack)`
- `public int getViscosity(FluidStack stack)`
- `public boolean isGaseous(FluidStack stack)`
- `public EnumRarity getRarity(FluidStack stack)`
- `public int getColor(FluidStack stack)`
- `public ResourceLocation getStill(FluidStack stack)`
- `public ResourceLocation getFlowing(FluidStack stack)`
- `public SoundEvent getFillSound(FluidStack stack)`
- `public SoundEvent getEmptySound(FluidStack stack)`
- `public int getLuminosity(World world,  BlockPos pos)`
- `public int getDensity(World world,  BlockPos pos)`
- `public int getTemperature(World world,  BlockPos pos)`
- `public int getViscosity(World world,  BlockPos pos)`
- `public boolean isGaseous(World world,  BlockPos pos)`
- `public EnumRarity getRarity(World world,  BlockPos pos)`
- `public int getColor(World world,  BlockPos pos)`
- `public ResourceLocation getStill(World world,  BlockPos pos)`
- `public ResourceLocation getFlowing(World world,  BlockPos pos)`
- `public SoundEvent getFillSound(World world,  BlockPos pos)`
- `public SoundEvent getEmptySound(World world,  BlockPos pos)`

## FluidActionResult

*class* `net.minecraftforge.fluids.FluidActionResult`

Holds the result of a fluid action from FluidUtil.

 Failed actions will always have isSuccess() == false and an empty ItemStack result. See FAILURE.

 Successful actions will always have isSuccess() == true.
 Successful actions may have an empty ItemStack result in some cases,
 for example the action succeeded and the resulting item was consumed.

### Fields
- `public static final FluidActionResult FAILURE`
- `public final boolean success`
- `public final ItemStack result`

### Methods
- `public boolean isSuccess()`
- `public ItemStack getResult()`

## FluidEvent

*class* `net.minecraftforge.fluids.FluidEvent`

### Methods
- `public FluidStack getFluid()`
- `public World getWorld()`
- `public BlockPos getPos()`
- `public static final void fireEvent(FluidEvent event)`
  A handy shortcut for firing the various fluid events.
  - param: event -

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## FluidEvent.FluidDrainingEvent

*class* `net.minecraftforge.fluids.FluidEvent.FluidDrainingEvent`

Mods should fire this event when a fluid is IFluidTank.drain(int, boolean) from their
 tank.

Enclosing class: FluidEvent

### Methods
- `public IFluidTank getTank()`
- `public int getAmount()`

### Inherited methods
- from `net.minecraftforge.fluids.FluidEvent`: `fireEvent`, `getFluid`, `getPos`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## FluidEvent.FluidFillingEvent

*class* `net.minecraftforge.fluids.FluidEvent.FluidFillingEvent`

Mods should fire this event when a fluid is IFluidTank.fill(FluidStack, boolean)
 their tank implementation. FluidTank does.

Enclosing class: FluidEvent

### Methods
- `public IFluidTank getTank()`
- `public int getAmount()`

### Inherited methods
- from `net.minecraftforge.fluids.FluidEvent`: `fireEvent`, `getFluid`, `getPos`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## FluidEvent.FluidMotionEvent

*class* `net.minecraftforge.fluids.FluidEvent.FluidMotionEvent`

Mods should fire this event when they move fluids around.

Enclosing class: FluidEvent

### Inherited methods
- from `net.minecraftforge.fluids.FluidEvent`: `fireEvent`, `getFluid`, `getPos`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## FluidEvent.FluidSpilledEvent

*class* `net.minecraftforge.fluids.FluidEvent.FluidSpilledEvent`

Mods should fire this event when a fluid "spills", for example, if a block containing fluid
 is broken.

Enclosing class: FluidEvent

### Inherited methods
- from `net.minecraftforge.fluids.FluidEvent`: `fireEvent`, `getFluid`, `getPos`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## FluidRegistry

*class* `net.minecraftforge.fluids.FluidRegistry`

Handles Fluid registrations. Fluids MUST be registered in order to function.

### Fields
- `public static final Fluid WATER`
- `public static final Fluid LAVA`

### Methods
- `public static void initFluidIDs(<any> newfluidIDs,  java.util.Set<java.lang.String> defaultNames)`
  Called by Forge to prepare the ID map for server -> client sync.
   Modders, DO NOT call this.
- `public static boolean registerFluid(Fluid fluid)`
  Register a new Fluid. If a fluid with the same name already exists, registration the alternative fluid is tracked
   in case it is the default in another place
  - param: fluid - The fluid to register.
  - returns: True if the fluid was registered as the current default fluid, false if it was only registered as an alternative
- `public static boolean isFluidDefault(Fluid fluid)`
  Is the supplied fluid the current default fluid for it's name
  - param: fluid - the fluid we're testing
  - returns: if the fluid is default
- `public static boolean isFluidRegistered(Fluid fluid)`
  Does the supplied fluid have an entry for it's name (whether or not the fluid itself is default)
  - param: fluid - the fluid we're testing
  - returns: if the fluid's name has a registration entry
- `public static boolean isFluidRegistered(java.lang.String fluidName)`
- `public static Fluid getFluid(java.lang.String fluidName)`
- `public static java.lang.String getFluidName(Fluid fluid)`
- `public static java.lang.String getFluidName(FluidStack stack)`
- `public static FluidStack getFluidStack(java.lang.String fluidName,  int amount)`
- `public static java.util.Map<java.lang.String,Fluid> getRegisteredFluids()`
  Returns a read-only map containing Fluid Names and their associated Fluids.
- `@Deprecated public static java.util.Map<Fluid,java.lang.Integer> getRegisteredFluidIDs()` (deprecated)
  Deprecated.
  Returns a read-only map containing Fluid Names and their associated IDs.
   Modders should never actually use this, use the String names.
- `public static void enableUniversalBucket()`
  Enables the universal bucket in forge.
   Has to be called before pre-initialization.
   Actually just call it statically in your mod class.
- `public static boolean isUniversalBucketEnabled()`
- `public static boolean addBucketForFluid(Fluid fluid)`
  Registers a fluid with the universal bucket.
   This only has an effect if the universal bucket is enabled.
  - param: fluid - The fluid that the bucket shall be able to hold
  - returns: True if the fluid was added successfully, false if it already was registered or couldn't be registered with the bucket.
- `public static java.util.Set<Fluid> getBucketFluids()`
  All fluids registered with the universal bucket
  - returns: A read-only set containing the fluids
- `public static boolean hasBucket(Fluid fluid)`
- `public static Fluid lookupFluidForBlock(Block block)`
- `public static int getMaxID()`
- `public static java.lang.String getDefaultFluidName(Fluid key)`
- `public static java.lang.String getModId(FluidStack fluidStack)`
- `public static void loadFluidDefaults(NBTTagCompound tag)`
- `public static void writeDefaultFluidList(NBTTagCompound forgeData)`
- `public static void validateFluidRegistry()`

## FluidRegistry.FluidRegisterEvent

*class* `net.minecraftforge.fluids.FluidRegistry.FluidRegisterEvent`

Enclosing class: FluidRegistry

### Methods
- `public java.lang.String getFluidName()`
- `public int getFluidID()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## FluidStack

*class* `net.minecraftforge.fluids.FluidStack`

ItemStack substitute for Fluids.

 NOTE: Equality is based on the Fluid, not the amount. Use
 isFluidStackIdentical(FluidStack) to determine if FluidID, Amount and NBT Tag are all
 equal.

### Fields
- `public int amount`
- `public NBTTagCompound tag`

### Methods
- `public static FluidStack loadFluidStackFromNBT(NBTTagCompound nbt)`
  This provides a safe method for retrieving a FluidStack - if the Fluid is invalid, the stack
   will return as null.
- `public NBTTagCompound writeToNBT(NBTTagCompound nbt)`
- `public final Fluid getFluid()`
- `public java.lang.String getLocalizedName()`
- `public java.lang.String getUnlocalizedName()`
- `public FluidStack copy()`
  - returns: A copy of this FluidStack
- `public boolean isFluidEqual(FluidStack other)`
  Determines if the FluidIDs and NBT Tags are equal. This does not check amounts.
  - param: other - The FluidStack for comparison
  - returns: true if the Fluids (IDs and NBT Tags) are the same
- `public static boolean areFluidStackTagsEqual(FluidStack stack1,  FluidStack stack2)`
  Determines if the NBT Tags are equal. Useful if the FluidIDs are known to be equal.
- `public boolean containsFluid(FluidStack other)`
  Determines if the Fluids are equal and this stack is larger.
  - param: other -
  - returns: true if this FluidStack contains the other FluidStack (same fluid and >= amount)
- `public boolean isFluidStackIdentical(FluidStack other)`
  Determines if the FluidIDs, Amounts, and NBT Tags are all equal.
  - param: other - - the FluidStack for comparison
  - returns: true if the two FluidStacks are exactly the same
- `public boolean isFluidEqual(ItemStack other)`
  Determines if the FluidIDs and NBT Tags are equal compared to a registered container
   ItemStack. This does not check amounts.
  - param: other - The ItemStack for comparison
  - returns: true if the Fluids (IDs and NBT Tags) are the same
- `public final int hashCode()`
- `public final boolean equals(java.lang.Object o)`
  Default equality comparison for a FluidStack. Same functionality as isFluidEqual().
  
   This is included for use in data structures.

## FluidTank

*class* `net.minecraftforge.fluids.FluidTank`

Reference implementation of IFluidTank. Use/extend this or implement your own.

All Implemented Interfaces: IFluidHandler, IFluidTank

### Fields
- `protected FluidStack fluid`
- `protected int capacity`
- `protected TileEntity tile`
- `protected boolean canFill`
- `protected boolean canDrain`
- `protected IFluidTankProperties[] tankProperties`

### Methods
- `public FluidTank readFromNBT(NBTTagCompound nbt)`
- `public NBTTagCompound writeToNBT(NBTTagCompound nbt)`
- `public FluidStack getFluid()`
  - returns: FluidStack representing the fluid in the tank, null if the tank is empty.
- `public void setFluid(FluidStack fluid)`
- `public int getFluidAmount()`
  - returns: Current amount of fluid in the tank.
- `public int getCapacity()`
  - returns: Capacity of this fluid tank.
- `public void setCapacity(int capacity)`
- `public void setTileEntity(TileEntity tile)`
- `public FluidTankInfo getInfo()`
  Description copied from interface: IFluidTank
  Returns a wrapper object FluidTankInfo containing the capacity of the tank and the
   FluidStack it holds.
  
   Should prevent manipulation of the IFluidTank. See FluidTank.
  - returns: State information for the IFluidTank.
- `public IFluidTankProperties[] getTankProperties()`
  Description copied from interface: IFluidHandler
  Returns an array of objects which represent the internal tanks.
   These objects cannot be used to manipulate the internal tanks.
  - returns: Properties for the relevant internal tanks.
- `public int fill(FluidStack resource,  boolean doFill)`
  Description copied from interface: IFluidHandler
  Fills fluid into internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack attempting to fill the tank.
  - param: doFill - If false, the fill will only be simulated.
  - returns: Amount of fluid that was accepted by the tank.
- `public int fillInternal(FluidStack resource,  boolean doFill)`
  Use this method to bypass the restrictions from canFillFluidType(FluidStack)
   Meant for use by the owner of the tank when they have set to false.
- `public FluidStack drain(FluidStack resource,  boolean doDrain)`
  Description copied from interface: IFluidHandler
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be drained.
  - param: doDrain - If false, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.
- `public FluidStack drain(int maxDrain,  boolean doDrain)`
  Description copied from interface: IFluidHandler
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  
   This method is not Fluid-sensitive.
  - param: maxDrain - Maximum amount of fluid to be removed from the container.
  - param: doDrain - If false, the drain will only be simulated.
  - returns: Amount of fluid that was removed from the tank.
- `public FluidStack drainInternal(FluidStack resource,  boolean doDrain)`
  Use this method to bypass the restrictions from canDrainFluidType(FluidStack)
   Meant for use by the owner of the tank when they have canDrain() set to false}.
- `public FluidStack drainInternal(int maxDrain,  boolean doDrain)`
  Use this method to bypass the restrictions from canDrainFluidType(FluidStack)
   Meant for use by the owner of the tank when they have canDrain() set to false}.
- `public boolean canFill()`
  Whether this tank can be filled with IFluidHandler
- `public boolean canDrain()`
  Whether this tank can be drained with IFluidHandler
- `public void setCanFill(boolean canFill)`
  Set whether this tank can be filled with IFluidHandler
- `public void setCanDrain(boolean canDrain)`
  Set whether this tank can be drained with IFluidHandler
- `public boolean canFillFluidType(FluidStack fluid)`
  Returns true if the tank can be filled with this type of fluid.
   Used as a filter for fluid types.
   Does not consider the current contents or capacity of the tank,
   only whether it could ever fill with this type of fluid.
- `public boolean canDrainFluidType(FluidStack fluid)`
  Returns true if the tank can drain out this type of fluid.
   Used as a filter for fluid types.
   Does not consider the current contents or capacity of the tank,
   only whether it could ever drain out this type of fluid.
- `protected void onContentsChanged()`

## FluidTankInfo

*class* `net.minecraftforge.fluids.FluidTankInfo`

Wrapper class used to encapsulate information about an IFluidTank.

### Fields
- `public final FluidStack fluid`
- `public final int capacity`

## FluidUtil

*class* `net.minecraftforge.fluids.FluidUtil`

### Methods
- `public static boolean interactWithFluidHandler(EntityPlayer player,  EnumHand hand,  World world,  BlockPos pos,  EnumFacing side)`
  Used to handle the common case of a player holding a fluid item and right-clicking on a fluid handler block.
   First it tries to fill the item from the block,
   if that action fails then it tries to drain the item into the block.
   Automatically updates the item in the player's hand and stashes any extra items created.
  - param: player - The player doing the interaction between the item and fluid handler block.
  - param: hand - The player's hand that is holding an item that should interact with the fluid handler block.
  - param: world - The world that contains the fluid handler block.
  - param: pos - The position of the fluid handler block in the world.
  - param: side - The side of the block to interact with. May be null.
  - returns: true if the interaction succeeded and updated the item held by the player, false otherwise.
- `public static boolean interactWithFluidHandler(EntityPlayer player,  EnumHand hand,  IFluidHandler handler)`
  Used to handle the common case of a player holding a fluid item and right-clicking on a fluid handler.
   First it tries to fill the item from the handler,
   if that action fails then it tries to drain the item into the handler.
   Automatically updates the item in the player's hand and stashes any extra items created.
  - param: player - The player doing the interaction between the item and fluid handler.
  - param: hand - The player's hand that is holding an item that should interact with the fluid handler.
  - param: handler - The fluid handler.
  - returns: true if the interaction succeeded and updated the item held by the player, false otherwise.
- `public static FluidActionResult tryFillContainer(ItemStack container,  IFluidHandler fluidSource,  int maxAmount,  EntityPlayer player,  boolean doFill)`
  Fill a container from the given fluidSource.
  - param: container - The container to be filled. Will not be modified.
 Separate handling must be done to reduce the stack size, stow containers, etc, on success.
 See tryFillContainerAndStow(ItemStack, IFluidHandler, IItemHandler, int, EntityPlayer, boolean).
  - param: fluidSource - The fluid handler to be drained.
  - param: maxAmount - The largest amount of fluid that should be transferred.
  - param: player - The player to make the filling noise. Pass null for no noise.
  - param: doFill - true if the container should actually be filled, false if it should be simulated.
  - returns: a FluidActionResult holding the filled container if successful.
- `public static FluidActionResult tryEmptyContainer(ItemStack container,  IFluidHandler fluidDestination,  int maxAmount,  EntityPlayer player,  boolean doDrain)`
  Takes a filled container and tries to empty it into the given tank.
  - param: container - The filled container. Will not be modified.
 Separate handling must be done to reduce the stack size, stow containers, etc, on success.
 See tryEmptyContainerAndStow(ItemStack, IFluidHandler, IItemHandler, int, EntityPlayer, boolean).
  - param: fluidDestination - The fluid handler to be filled by the container.
  - param: maxAmount - The largest amount of fluid that should be transferred.
  - param: player - Player for making the bucket drained sound. Pass null for no noise.
  - param: doDrain - true if the container should actually be drained, false if it should be simulated.
  - returns: a FluidActionResult holding the empty container if the fluid handler was filled.
 NOTE If the container is consumable, the empty container will be null on success.
- `@Deprecated public static FluidActionResult tryFillContainerAndStow(ItemStack container,  IFluidHandler fluidSource,  IItemHandler inventory,  int maxAmount,  EntityPlayer player)` (deprecated)
  Deprecated. use tryFillContainerAndStow(ItemStack, IFluidHandler, IItemHandler, int, EntityPlayer, boolean)
  Takes an Fluid Container Item and tries to fill it from the given tank.
   If the player is in creative mode, the container will not be modified on success, and no additional items created.
   If the input itemstack has a stacksize > 1 it will stow the filled container in the given inventory.
   If the inventory does not accept it, it will be given to the player or dropped at the players feet.
   If player is null in this case, the action will be aborted.
  - param: container - The Fluid Container ItemStack to fill.
 Will not be modified directly, if modifications are necessary a modified copy is returned in the result.
  - param: fluidSource - The fluid source to fill from
  - param: inventory - An inventory where any additionally created item (filled container if multiple empty are present) are put
  - param: maxAmount - Maximum amount of fluid to take from the tank.
  - param: player - The player that gets the items the inventory can't take.
 Can be null, only used if the inventory cannot take the filled stack.
  - returns: a FluidActionResult holding the result and the resulting container. The resulting container is empty on failure.
- `public static FluidActionResult tryFillContainerAndStow(ItemStack container,  IFluidHandler fluidSource,  IItemHandler inventory,  int maxAmount,  EntityPlayer player,  boolean doFill)`
  Takes an Fluid Container Item and tries to fill it from the given tank.
   If the player is in creative mode, the container will not be modified on success, and no additional items created.
   If the input itemstack has a stacksize > 1 it will stow the filled container in the given inventory.
   If the inventory does not accept it, it will be given to the player or dropped at the players feet.
   If player is null in this case, the action will be aborted.
  - param: container - The Fluid Container ItemStack to fill.
 Will not be modified directly, if modifications are necessary a modified copy is returned in the result.
  - param: fluidSource - The fluid source to fill from
  - param: inventory - An inventory where any additionally created item (filled container if multiple empty are present) are put
  - param: maxAmount - Maximum amount of fluid to take from the tank.
  - param: player - The player that gets the items the inventory can't take.
 Can be null, only used if the inventory cannot take the filled stack.
  - param: doFill - true if the container should actually be filled, false if it should be simulated.
  - returns: a FluidActionResult holding the result and the resulting container. The resulting container is empty on failure.
- `@Deprecated public static FluidActionResult tryEmptyContainerAndStow(ItemStack container,  IFluidHandler fluidDestination,  IItemHandler inventory,  int maxAmount,  EntityPlayer player)` (deprecated)
  Deprecated. use tryEmptyContainerAndStow(ItemStack, IFluidHandler, IItemHandler, int, EntityPlayer, boolean)
  Takes an Fluid Container Item, tries to empty it into the fluid handler, and stows it in the given inventory.
   If the player is in creative mode, the container will not be modified on success, and no additional items created.
   If the input itemstack has a stacksize > 1 it will stow the emptied container in the given inventory.
   If the inventory does not accept the emptied container, it will be given to the player or dropped at the players feet.
   If player is null in this case, the action will be aborted.
  - param: container - The filled Fluid Container Itemstack to empty.
 Will not be modified directly, if modifications are necessary a modified copy is returned in the result.
  - param: fluidDestination - The fluid destination to fill from the fluid container.
  - param: inventory - An inventory where any additionally created item (filled container if multiple empty are present) are put
  - param: maxAmount - Maximum amount of fluid to take from the tank.
  - param: player - The player that gets the items the inventory can't take. Can be null, only used if the inventory cannot take the filled stack.
  - returns: a FluidActionResult holding the result and the resulting container. The resulting container is empty on failure.
- `public static FluidActionResult tryEmptyContainerAndStow(ItemStack container,  IFluidHandler fluidDestination,  IItemHandler inventory,  int maxAmount,  EntityPlayer player,  boolean doDrain)`
  Takes an Fluid Container Item, tries to empty it into the fluid handler, and stows it in the given inventory.
   If the player is in creative mode, the container will not be modified on success, and no additional items created.
   If the input itemstack has a stacksize > 1 it will stow the emptied container in the given inventory.
   If the inventory does not accept the emptied container, it will be given to the player or dropped at the players feet.
   If player is null in this case, the action will be aborted.
  - param: container - The filled Fluid Container Itemstack to empty.
 Will not be modified directly, if modifications are necessary a modified copy is returned in the result.
  - param: fluidDestination - The fluid destination to fill from the fluid container.
  - param: inventory - An inventory where any additionally created item (filled container if multiple empty are present) are put
  - param: maxAmount - Maximum amount of fluid to take from the tank.
  - param: player - The player that gets the items the inventory can't take. Can be null, only used if the inventory cannot take the filled stack.
  - param: doDrain - true if the container should actually be drained, false if it should be simulated.
  - returns: a FluidActionResult holding the result and the resulting container. The resulting container is empty on failure.
- `public static FluidStack tryFluidTransfer(IFluidHandler fluidDestination,  IFluidHandler fluidSource,  int maxAmount,  boolean doTransfer)`
  Fill a destination fluid handler from a source fluid handler with a max amount.
   To specify a fluid to transfer instead of max amount, use tryFluidTransfer(IFluidHandler, IFluidHandler, FluidStack, boolean)
   To transfer as much as possible, use Integer.MAX_VALUE for maxAmount.
  - param: fluidDestination - The fluid handler to be filled.
  - param: fluidSource - The fluid handler to be drained.
  - param: maxAmount - The largest amount of fluid that should be transferred.
  - param: doTransfer - True if the transfer should actually be done, false if it should be simulated.
  - returns: the fluidStack that was transferred from the source to the destination. null on failure.
- `public static FluidStack tryFluidTransfer(IFluidHandler fluidDestination,  IFluidHandler fluidSource,  FluidStack resource,  boolean doTransfer)`
  Fill a destination fluid handler from a source fluid handler using a specific fluid.
   To specify a max amount to transfer instead of specific fluid, use tryFluidTransfer(IFluidHandler, IFluidHandler, int, boolean)
   To transfer as much as possible, use Integer.MAX_VALUE for resource.amount.
  - param: fluidDestination - The fluid handler to be filled.
  - param: fluidSource - The fluid handler to be drained.
  - param: resource - The fluid that should be transferred. Amount represents the maximum amount to transfer.
  - param: doTransfer - True if the transfer should actually be done, false if it should be simulated.
  - returns: the fluidStack that was transferred from the source to the destination. null on failure.
- `public static IFluidHandlerItem getFluidHandler(ItemStack itemStack)`
  Helper method to get an IFluidHandlerItem for an itemStack.
  
   The itemStack passed in here WILL be modified, the IFluidHandlerItem acts on it directly.
   Some IFluidHandlerItem will change the item entirely, always use IFluidHandlerItem.getContainer()
   after using the fluid handler to get the resulting item back.
  
   Note that the itemStack MUST have a stackSize of 1 if you want to fill or drain it.
   You can't fill or drain multiple items at once, if you do then liquid is multiplied or destroyed.
  
   Vanilla buckets will be converted to universal buckets if they are enabled.
  
   Returns null if the itemStack passed in does not have a fluid handler.
- `public static FluidStack getFluidContained(ItemStack container)`
  Helper method to get the fluid contained in an itemStack
- `public static IFluidHandler getFluidHandler(World world,  BlockPos blockPos,  EnumFacing side)`
  Helper method to get an IFluidHandler for at a block position.
  
   Returns null if there is no valid fluid handler.
- `public static FluidActionResult tryPickUpFluid(ItemStack emptyContainer,  EntityPlayer playerIn,  World worldIn,  BlockPos pos,  EnumFacing side)`
  Attempts to pick up a fluid in the world and put it in an empty container item.
  - param: emptyContainer - The empty container to fill.
 Will not be modified directly, if modifications are necessary a modified copy is returned in the result.
  - param: playerIn - The player filling the container. Optional.
  - param: worldIn - The world the fluid is in.
  - param: pos - The position of the fluid in the world.
  - param: side - The side of the fluid that is being drained.
  - returns: a FluidActionResult holding the result and the resulting container.
- `public static FluidActionResult tryPlaceFluid(EntityPlayer player,  World world,  BlockPos pos,  ItemStack container,  FluidStack resource)`
  ItemStack version of tryPlaceFluid(EntityPlayer, World, BlockPos, IFluidHandler, FluidStack).
   Use the returned FluidActionResult to update the container ItemStack.
  - param: player - Player who places the fluid. May be null for blocks like dispensers.
  - param: world - World to place the fluid in
  - param: pos - The position in the world to place the fluid block
  - param: container - The fluid container holding the fluidStack to place
  - param: resource - The fluidStack to place
  - returns: the container's ItemStack with the remaining amount of fluid if the placement was successful, null otherwise
- `public static boolean tryPlaceFluid(EntityPlayer player,  World world,  BlockPos pos,  IFluidHandler fluidSource,  FluidStack resource)`
  Tries to place a fluid resource into the world as a block and drains the fluidSource.
   Makes a fluid emptying or vaporization sound when successful.
   Honors the amount of fluid contained by the used container.
   Checks if water-like fluids should vaporize like in the nether.
  
   Modeled after ItemBucket.tryPlaceContainedLiquid(EntityPlayer, World, BlockPos)
  - param: player - Player who places the fluid. May be null for blocks like dispensers.
  - param: world - World to place the fluid in
  - param: pos - The position in the world to place the fluid block
  - param: fluidSource - The fluid source holding the fluidStack to place
  - param: resource - The fluidStack to place.
  - returns: true if the placement was successful, false otherwise
- `public static void destroyBlockOnFluidPlacement(World world,  BlockPos pos)`
  Destroys a block when a fluid is placed in the same position.
   Modeled after ItemBucket.tryPlaceContainedLiquid(EntityPlayer, World, BlockPos)
  
   This is a helper method for implementing IFluidBlock.place(World, BlockPos, FluidStack, boolean).
  - param: world - the world that the fluid will be placed in
  - param: pos - the location that the fluid will be placed
- `public static ItemStack getFilledBucket(FluidStack fluidStack)`
  - param: fluidStack - contents used to fill the bucket.
 FluidStack is used instead of Fluid to preserve fluid NBT, the amount is ignored.
  - returns: a filled vanilla bucket or filled universal bucket.
 Returns empty itemStack if none of the enabled buckets can hold the fluid.

## IFluidBlock

*interface* `net.minecraftforge.fluids.IFluidBlock`

Implement this interface on Block classes which represent world-placeable Fluids.

 NOTE: Using/extending the reference implementations BlockFluidBase is encouraged.

### Methods
- `Fluid getFluid()`
  Returns the Fluid associated with this Block.
- `int place(World world,  BlockPos pos,  FluidStack fluidStack,  boolean doPlace)`
  Attempts to place the block at a given position. The placed block's level will correspond
   to the provided fluid amount.
   This method should be called by fluid containers such as buckets, but it is recommended
   to use FluidUtil.
  - param: world - the world to place the block in
  - param: pos - the position to place the block at
  - param: fluidStack - the fluid stack to get the required data from
  - param: doPlace - if false, the placement will only be simulated
  - returns: the amount of fluid extracted from the provided stack to achieve some fluid level
- `FluidStack drain(World world,  BlockPos pos,  boolean doDrain)`
  Attempt to drain the block. This method should be called by devices such as pumps.
  
   NOTE: The block is intended to handle its own state changes.
  - param: doDrain - If false, the drain will only be simulated.
- `boolean canDrain(World world,  BlockPos pos)`
  Check to see if a block can be drained. This method should be called by devices such as
   pumps.
- `float getFilledPercentage(World world,  BlockPos pos)`
  Returns the amount of a single block is filled. Value between 0 and 1.
   1 meaning the entire 1x1x1 cube is full, 0 meaning completely empty.
  
   If the return value is negative. It will be treated as filling the block
   from the top down instead of bottom up.

## IFluidTank

*interface* `net.minecraftforge.fluids.IFluidTank`

A tank is the unit of interaction with Fluid inventories.

 A reference implementation can be found at FluidTank.

### Methods
- `FluidStack getFluid()`
  - returns: FluidStack representing the fluid in the tank, null if the tank is empty.
- `int getFluidAmount()`
  - returns: Current amount of fluid in the tank.
- `int getCapacity()`
  - returns: Capacity of this fluid tank.
- `FluidTankInfo getInfo()`
  Returns a wrapper object FluidTankInfo containing the capacity of the tank and the
   FluidStack it holds.
  
   Should prevent manipulation of the IFluidTank. See FluidTank.
  - returns: State information for the IFluidTank.
- `int fill(FluidStack resource,  boolean doFill)`
  - param: resource - FluidStack attempting to fill the tank.
  - param: doFill - If false, the fill will only be simulated.
  - returns: Amount of fluid that was accepted by the tank.
- `FluidStack drain(int maxDrain,  boolean doDrain)`
  - param: maxDrain - Maximum amount of fluid to be removed from the container.
  - param: doDrain - If false, the drain will only be simulated.
  - returns: Amount of fluid that was removed from the tank.

## UniversalBucket

*class* `net.minecraftforge.fluids.UniversalBucket`

A universal bucket that can hold any liquid

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean hasContainerItem(ItemStack stack)`
  Description copied from class: Item
  ItemStack sensitive version of hasContainerItem
  - param: stack - The current item stack
  - returns: True if this item has a 'container'
- `public ItemStack getContainerItem(ItemStack itemStack)`
  Description copied from class: Item
  ItemStack sensitive version of getContainerItem.
   Returns a full ItemStack instance of the result.
  - param: itemStack - The current ItemStack
  - returns: The resulting ItemStack
- `public void getSubItems(CreativeTabs tab,  NonNullList<ItemStack> subItems)`
- `public java.lang.String getItemStackDisplayName(ItemStack stack)`
- `public ActionResult<ItemStack> onItemRightClick(World world,  EntityPlayer player,  EnumHand hand)`
- `public void onFillBucket(FillBucketEvent event)`
- `@Deprecated public static ItemStack getFilledBucket(UniversalBucket item,  Fluid fluid)` (deprecated)
  Deprecated. use the NBT-sensitive version FluidUtil.getFilledBucket(FluidStack)
- `public FluidStack getFluid(ItemStack container)`
- `public int getCapacity()`
- `public ItemStack getEmpty()`
- `public boolean isNbtSensitive()`
- `public java.lang.String getCreatorModId(ItemStack itemStack)`
  Description copied from class: Item
  Called to get the Mod ID of the mod that *created* the ItemStack,
   instead of the real Mod ID that *registered* it.
  
   For example the Forge Universal Bucket creates a subitem for each modded fluid,
   and it returns the modded fluid's Mod ID here.
  
   Mods that register subitems for other mods can override this.
   Informational mods can call it to show the mod that created the item.
  - param: itemStack - the ItemStack to check
  - returns: the Mod ID for the ItemStack, or
 null when there is no specially associated mod and IForgeRegistryEntry.Impl.getRegistryName() would return null.
- `public ICapabilityProvider initCapabilities(ItemStack stack,  NBTTagCompound nbt)`
  Description copied from class: Item
  Called from ItemStack.setItem, will hold extra data for the life of this ItemStack.
   Can be retrieved from stack.getCapabilities()
   The NBT can be null if this is not called from readNBT or if the item the stack is
   changing FROM is different then this item, or the previous item had no capabilities.
  
   This is called BEFORE the stacks item is set so you can use stack.getItem() to see the OLD item.
   Remember that getItem CAN return null.
  - param: stack - The ItemStack
  - param: nbt - NBT of this item serialized, or null.
  - returns: A holder instance associated with this ItemStack where you can hold capabilities for the life of this item.

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`
