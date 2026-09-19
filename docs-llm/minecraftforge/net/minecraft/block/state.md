# net.minecraft.block.state

- [BlockFaceShape](#blockfaceshape)
- [BlockPistonStructureHelper](#blockpistonstructurehelper)
- [BlockStateBase](#blockstatebase)
- [BlockStateContainer](#blockstatecontainer)
- [BlockStateContainer.Builder](#blockstatecontainer.builder)
- [BlockStateContainer.StateImplementation](#blockstatecontainer.stateimplementation)
- [BlockWorldState](#blockworldstate)
- [IBlockBehaviors](#iblockbehaviors)
- [IBlockProperties](#iblockproperties)
- [IBlockState](#iblockstate)
## BlockFaceShape

*enum* `net.minecraft.block.state.BlockFaceShape`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<BlockFaceShape>

### Fields
- `public static final BlockFaceShape SOLID`
- `public static final BlockFaceShape BOWL`
- `public static final BlockFaceShape CENTER_SMALL`
- `public static final BlockFaceShape MIDDLE_POLE_THIN`
- `public static final BlockFaceShape CENTER`
- `public static final BlockFaceShape MIDDLE_POLE`
- `public static final BlockFaceShape CENTER_BIG`
- `public static final BlockFaceShape MIDDLE_POLE_THICK`
- `public static final BlockFaceShape UNDEFINED`

### Methods
- `public static BlockFaceShape[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (BlockFaceShape c : BlockFaceShape.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static BlockFaceShape valueOf(java.lang.String name)`
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

## BlockPistonStructureHelper

*class* `net.minecraft.block.state.BlockPistonStructureHelper`

### Methods
- `public boolean canMove()`
- `public java.util.List<BlockPos> getBlocksToMove()`
- `public java.util.List<BlockPos> getBlocksToDestroy()`

## BlockStateBase

*class* `net.minecraft.block.state.BlockStateBase`

All Implemented Interfaces: IBlockBehaviors, IBlockProperties, IBlockState

### Methods
- `public <T extends java.lang.Comparable<T>> IBlockState cycleProperty(IProperty<T> property)`
- `protected static <T> T cyclePropertyValue(java.util.Collection<T> values,  T currentValue)`
- `public java.lang.String toString()`
- `public <any> getPropertyValueTable()`

### Inherited methods
- from `net.minecraft.block.state.IBlockState`: `getBlock`, `getProperties`, `getPropertyKeys`, `getValue`, `withProperty`
- from `net.minecraft.block.state.IBlockBehaviors`: `neighborChanged`, `onBlockEventReceived`
- from `net.minecraft.block.state.IBlockProperties`: `addCollisionBoxToList`, `canEntitySpawn`, `canProvidePower`, `causesSuffocation`, `collisionRayTrace`, `doesSideBlockChestOpening`, `doesSideBlockRendering`, `getActualState`, `getAmbientOcclusionLightValue`, `getBlockFaceShape`, `getBlockHardness`, `getBoundingBox`, `getCollisionBoundingBox`, `getComparatorInputOverride`, `getLightOpacity`, `getLightOpacity`, `getLightValue`, `getLightValue`, `getMapColor`, `getMaterial`, `getMobilityFlag`, `getOffset`, `getPackedLightmapCoords`, `getPlayerRelativeBlockHardness`, `getRenderType`, `getSelectedBoundingBox`, `getStrongPower`, `getWeakPower`, `hasComparatorInputOverride`, `hasCustomBreakingProgress`, `isBlockNormalCube`, `isFullBlock`, `isFullCube`, `isNormalCube`, `isOpaqueCube`, `isSideSolid`, `isTopSolid`, `isTranslucent`, `shouldSideBeRendered`, `useNeighborBrightness`, `withMirror`, `withRotation`

## BlockStateContainer

*class* `net.minecraft.block.state.BlockStateContainer`

### Methods
- `protected BlockStateContainer.StateImplementation createState(Block block,  <any> properties,  <any> unlistedProperties)`
- `public static <T extends java.lang.Comparable<T>> java.lang.String validateProperty(Block block,  IProperty<T> property)`
- `public <any> getValidStates()`
- `public IBlockState getBaseState()`
- `public Block getBlock()`
- `public java.util.Collection<IProperty<?>> getProperties()`
- `public java.lang.String toString()`
- `public IProperty<?> getProperty(java.lang.String propertyName)`

## BlockStateContainer.Builder

*class* `net.minecraft.block.state.BlockStateContainer.Builder`

Forge added class to make building things easier.
 Will return an instance of BlockStateContainer appropriate for
 the list of properties passed in.

 Example usage:

 protected BlockStateContainer createBlockState()
 {
 return (new BlockStateContainer.Builder(this)).add(FACING).add(SOME_UNLISTED).build();
 }

Enclosing class: BlockStateContainer

### Methods
- `public BlockStateContainer.Builder add(IProperty<?>... props)`
- `public BlockStateContainer.Builder add(IUnlistedProperty<?>... props)`
- `public BlockStateContainer build()`

## BlockStateContainer.StateImplementation

*class* `net.minecraft.block.state.BlockStateContainer.StateImplementation`

All Implemented Interfaces: IBlockBehaviors, IBlockProperties, IBlockState

Enclosing class: BlockStateContainer

### Fields
- `protected <any> propertyValueTable`

### Methods
- `public java.util.Collection<IProperty<?>> getPropertyKeys()`
- `public <T extends java.lang.Comparable<T>> T getValue(IProperty<T> property)`
- `public <T extends java.lang.Comparable<T>,V extends T> IBlockState withProperty(IProperty<T> property,  V value)`
- `public <any> getProperties()`
- `public Block getBlock()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public void buildPropertyValueTable(java.util.Map<java.util.Map<IProperty<?>,java.lang.Comparable<?>>,BlockStateContainer.StateImplementation> map)`
- `public Material getMaterial()`
- `public boolean isFullBlock()`
- `public boolean canEntitySpawn(Entity entityIn)`
- `public int getLightOpacity()`
- `public int getLightValue()`
- `public boolean isTranslucent()`
- `public boolean useNeighborBrightness()`
- `public MapColor getMapColor(IBlockAccess p_185909_1_,  BlockPos p_185909_2_)`
- `public IBlockState withRotation(Rotation rot)`
- `public IBlockState withMirror(Mirror mirrorIn)`
- `public boolean isFullCube()`
- `public boolean hasCustomBreakingProgress()`
- `public EnumBlockRenderType getRenderType()`
- `public int getPackedLightmapCoords(IBlockAccess source,  BlockPos pos)`
- `public float getAmbientOcclusionLightValue()`
- `public boolean isBlockNormalCube()`
- `public boolean isNormalCube()`
- `public boolean canProvidePower()`
- `public int getWeakPower(IBlockAccess blockAccess,  BlockPos pos,  EnumFacing side)`
- `public boolean hasComparatorInputOverride()`
- `public int getComparatorInputOverride(World worldIn,  BlockPos pos)`
- `public float getBlockHardness(World worldIn,  BlockPos pos)`
- `public float getPlayerRelativeBlockHardness(EntityPlayer player,  World worldIn,  BlockPos pos)`
- `public int getStrongPower(IBlockAccess blockAccess,  BlockPos pos,  EnumFacing side)`
- `public EnumPushReaction getMobilityFlag()`
- `public IBlockState getActualState(IBlockAccess blockAccess,  BlockPos pos)`
- `public AxisAlignedBB getSelectedBoundingBox(World worldIn,  BlockPos pos)`
- `public boolean shouldSideBeRendered(IBlockAccess blockAccess,  BlockPos pos,  EnumFacing facing)`
- `public boolean isOpaqueCube()`
- `public AxisAlignedBB getCollisionBoundingBox(IBlockAccess worldIn,  BlockPos pos)`
- `public void addCollisionBoxToList(World worldIn,  BlockPos pos,  AxisAlignedBB entityBox,  java.util.List<AxisAlignedBB> collidingBoxes,  Entity entityIn,  boolean p_185908_6_)`
- `public AxisAlignedBB getBoundingBox(IBlockAccess blockAccess,  BlockPos pos)`
- `public RayTraceResult collisionRayTrace(World worldIn,  BlockPos pos,  Vec3d start,  Vec3d end)`
- `public boolean isTopSolid()`
- `public Vec3d getOffset(IBlockAccess access,  BlockPos pos)`
- `public boolean onBlockEventReceived(World worldIn,  BlockPos pos,  int id,  int param)`
- `public void neighborChanged(World worldIn,  BlockPos pos,  Block blockIn,  BlockPos fromPos)`
- `public boolean causesSuffocation()`
- `public BlockFaceShape getBlockFaceShape(IBlockAccess worldIn,  BlockPos pos,  EnumFacing facing)`
- `public <any> getPropertyValueTable()`
- `public int getLightOpacity(IBlockAccess world,  BlockPos pos)`
- `public int getLightValue(IBlockAccess world,  BlockPos pos)`
- `public boolean isSideSolid(IBlockAccess world,  BlockPos pos,  EnumFacing side)`
- `public boolean doesSideBlockChestOpening(IBlockAccess world,  BlockPos pos,  EnumFacing side)`
- `public boolean doesSideBlockRendering(IBlockAccess world,  BlockPos pos,  EnumFacing side)`

### Inherited methods
- from `net.minecraft.block.state.BlockStateBase`: `cycleProperty`, `cyclePropertyValue`, `toString`

## BlockWorldState

*class* `net.minecraft.block.state.BlockWorldState`

### Methods
- `public IBlockState getBlockState()`
- `public TileEntity getTileEntity()`
- `public BlockPos getPos()`
- `public static <any> hasState(<any> predicatesIn)`

## IBlockBehaviors

*interface* `net.minecraft.block.state.IBlockBehaviors`

### Methods
- `boolean onBlockEventReceived(World worldIn,  BlockPos pos,  int id,  int param)`
- `void neighborChanged(World worldIn,  BlockPos pos,  Block blockIn,  BlockPos fromPos)`

## IBlockProperties

*interface* `net.minecraft.block.state.IBlockProperties`

### Methods
- `Material getMaterial()`
- `boolean isFullBlock()`
- `boolean canEntitySpawn(Entity entityIn)`
- `@Deprecated int getLightOpacity()` (deprecated)
  Deprecated.
- `int getLightOpacity(IBlockAccess world,  BlockPos pos)`
- `@Deprecated int getLightValue()` (deprecated)
  Deprecated.
- `int getLightValue(IBlockAccess world,  BlockPos pos)`
- `boolean isTranslucent()`
- `boolean useNeighborBrightness()`
- `MapColor getMapColor(IBlockAccess p_185909_1_,  BlockPos p_185909_2_)`
- `IBlockState withRotation(Rotation rot)`
- `IBlockState withMirror(Mirror mirrorIn)`
- `boolean isFullCube()`
- `boolean hasCustomBreakingProgress()`
- `EnumBlockRenderType getRenderType()`
- `int getPackedLightmapCoords(IBlockAccess source,  BlockPos pos)`
- `float getAmbientOcclusionLightValue()`
- `boolean isBlockNormalCube()`
- `boolean isNormalCube()`
- `boolean canProvidePower()`
- `int getWeakPower(IBlockAccess blockAccess,  BlockPos pos,  EnumFacing side)`
- `boolean hasComparatorInputOverride()`
- `int getComparatorInputOverride(World worldIn,  BlockPos pos)`
- `float getBlockHardness(World worldIn,  BlockPos pos)`
- `float getPlayerRelativeBlockHardness(EntityPlayer player,  World worldIn,  BlockPos pos)`
- `int getStrongPower(IBlockAccess blockAccess,  BlockPos pos,  EnumFacing side)`
- `EnumPushReaction getMobilityFlag()`
- `IBlockState getActualState(IBlockAccess blockAccess,  BlockPos pos)`
- `AxisAlignedBB getSelectedBoundingBox(World worldIn,  BlockPos pos)`
- `boolean shouldSideBeRendered(IBlockAccess blockAccess,  BlockPos pos,  EnumFacing facing)`
- `boolean isOpaqueCube()`
- `AxisAlignedBB getCollisionBoundingBox(IBlockAccess worldIn,  BlockPos pos)`
- `void addCollisionBoxToList(World worldIn,  BlockPos pos,  AxisAlignedBB entityBox,  java.util.List<AxisAlignedBB> collidingBoxes,  Entity entityIn,  boolean p_185908_6_)`
- `AxisAlignedBB getBoundingBox(IBlockAccess blockAccess,  BlockPos pos)`
- `RayTraceResult collisionRayTrace(World worldIn,  BlockPos pos,  Vec3d start,  Vec3d end)`
- `@Deprecated boolean isTopSolid()` (deprecated)
  Deprecated.
- `boolean doesSideBlockRendering(IBlockAccess world,  BlockPos pos,  EnumFacing side)`
- `boolean isSideSolid(IBlockAccess world,  BlockPos pos,  EnumFacing side)`
- `boolean doesSideBlockChestOpening(IBlockAccess world,  BlockPos pos,  EnumFacing side)`
- `Vec3d getOffset(IBlockAccess access,  BlockPos pos)`
- `boolean causesSuffocation()`
- `BlockFaceShape getBlockFaceShape(IBlockAccess worldIn,  BlockPos pos,  EnumFacing facing)`

## IBlockState

*interface* `net.minecraft.block.state.IBlockState`

All Superinterfaces: IBlockBehaviors, IBlockProperties

### Methods
- `java.util.Collection<IProperty<?>> getPropertyKeys()`
- `<T extends java.lang.Comparable<T>> T getValue(IProperty<T> property)`
- `<T extends java.lang.Comparable<T>,V extends T> IBlockState withProperty(IProperty<T> property,  V value)`
- `<T extends java.lang.Comparable<T>> IBlockState cycleProperty(IProperty<T> property)`
- `<any> getProperties()`
- `Block getBlock()`

### Inherited methods
- from `net.minecraft.block.state.IBlockBehaviors`: `neighborChanged`, `onBlockEventReceived`
- from `net.minecraft.block.state.IBlockProperties`: `addCollisionBoxToList`, `canEntitySpawn`, `canProvidePower`, `causesSuffocation`, `collisionRayTrace`, `doesSideBlockChestOpening`, `doesSideBlockRendering`, `getActualState`, `getAmbientOcclusionLightValue`, `getBlockFaceShape`, `getBlockHardness`, `getBoundingBox`, `getCollisionBoundingBox`, `getComparatorInputOverride`, `getLightOpacity`, `getLightOpacity`, `getLightValue`, `getLightValue`, `getMapColor`, `getMaterial`, `getMobilityFlag`, `getOffset`, `getPackedLightmapCoords`, `getPlayerRelativeBlockHardness`, `getRenderType`, `getSelectedBoundingBox`, `getStrongPower`, `getWeakPower`, `hasComparatorInputOverride`, `hasCustomBreakingProgress`, `isBlockNormalCube`, `isFullBlock`, `isFullCube`, `isNormalCube`, `isOpaqueCube`, `isSideSolid`, `isTopSolid`, `isTranslucent`, `shouldSideBeRendered`, `useNeighborBrightness`, `withMirror`, `withRotation`
