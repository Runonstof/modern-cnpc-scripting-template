# net.minecraftforge.common.property

- [ExtendedBlockState](#extendedblockstate)
- [ExtendedBlockState.ExtendedStateImplementation](#extendedblockstate.extendedstateimplementation)
- [IExtendedBlockState](#iextendedblockstate)
- [IUnlistedProperty](#iunlistedproperty)
- [Properties](#properties)
- [Properties.PropertyAdapter>](#properties.propertyadapter)
- [PropertyFloat](#propertyfloat)
## ExtendedBlockState

*class* `net.minecraftforge.common.property.ExtendedBlockState`

### Methods
- `public java.util.Collection<IUnlistedProperty<?>> getUnlistedProperties()`
- `protected BlockStateContainer.StateImplementation createState(Block block,  <any> properties,  <any> unlistedProperties)`

### Inherited methods
- from `net.minecraft.block.state.BlockStateContainer`: `getBaseState`, `getBlock`, `getProperties`, `getProperty`, `getValidStates`, `toString`, `validateProperty`

## ExtendedBlockState.ExtendedStateImplementation

*class* `net.minecraftforge.common.property.ExtendedBlockState.ExtendedStateImplementation`

All Implemented Interfaces: IBlockBehaviors, IBlockProperties, IBlockState, IExtendedBlockState

Enclosing class: ExtendedBlockState

### Inherited fields
- from `net.minecraft.block.state.BlockStateContainer.StateImplementation`: `propertyValueTable`

### Methods
- `public <T extends java.lang.Comparable<T>,V extends T> IBlockState withProperty(IProperty<T> property,  V value)`
- `public <V> IExtendedBlockState withProperty(IUnlistedProperty<V> property,  V value)`
- `public java.util.Collection<IUnlistedProperty<?>> getUnlistedNames()`
- `public <V> V getValue(IUnlistedProperty<V> property)`
- `public <any> getUnlistedProperties()`
- `public IBlockState getClean()`

### Inherited methods
- from `net.minecraft.block.state.BlockStateContainer.StateImplementation`: `addCollisionBoxToList`, `buildPropertyValueTable`, `canEntitySpawn`, `canProvidePower`, `causesSuffocation`, `collisionRayTrace`, `doesSideBlockChestOpening`, `doesSideBlockRendering`, `equals`, `getActualState`, `getAmbientOcclusionLightValue`, `getBlock`, `getBlockFaceShape`, `getBlockHardness`, `getBoundingBox`, `getCollisionBoundingBox`, `getComparatorInputOverride`, `getLightOpacity`, `getLightOpacity`, `getLightValue`, `getLightValue`, `getMapColor`, `getMaterial`, `getMobilityFlag`, `getOffset`, `getPackedLightmapCoords`, `getPlayerRelativeBlockHardness`, `getProperties`, `getPropertyKeys`, `getPropertyValueTable`, `getRenderType`, `getSelectedBoundingBox`, `getStrongPower`, `getValue`, `getWeakPower`, `hasComparatorInputOverride`, `hasCustomBreakingProgress`, `hashCode`, `isBlockNormalCube`, `isFullBlock`, `isFullCube`, `isNormalCube`, `isOpaqueCube`, `isSideSolid`, `isTopSolid`, `isTranslucent`, `neighborChanged`, `onBlockEventReceived`, `shouldSideBeRendered`, `useNeighborBrightness`, `withMirror`, `withRotation`
- from `net.minecraft.block.state.BlockStateBase`: `cycleProperty`, `cyclePropertyValue`, `toString`
- from `net.minecraft.block.state.IBlockState`: `cycleProperty`, `getBlock`, `getProperties`, `getPropertyKeys`, `getValue`
- from `net.minecraft.block.state.IBlockBehaviors`: `neighborChanged`, `onBlockEventReceived`
- from `net.minecraft.block.state.IBlockProperties`: `addCollisionBoxToList`, `canEntitySpawn`, `canProvidePower`, `causesSuffocation`, `collisionRayTrace`, `doesSideBlockChestOpening`, `doesSideBlockRendering`, `getActualState`, `getAmbientOcclusionLightValue`, `getBlockFaceShape`, `getBlockHardness`, `getBoundingBox`, `getCollisionBoundingBox`, `getComparatorInputOverride`, `getLightOpacity`, `getLightOpacity`, `getLightValue`, `getLightValue`, `getMapColor`, `getMaterial`, `getMobilityFlag`, `getOffset`, `getPackedLightmapCoords`, `getPlayerRelativeBlockHardness`, `getRenderType`, `getSelectedBoundingBox`, `getStrongPower`, `getWeakPower`, `hasComparatorInputOverride`, `hasCustomBreakingProgress`, `isBlockNormalCube`, `isFullBlock`, `isFullCube`, `isNormalCube`, `isOpaqueCube`, `isSideSolid`, `isTopSolid`, `isTranslucent`, `shouldSideBeRendered`, `useNeighborBrightness`, `withMirror`, `withRotation`

## IExtendedBlockState

*interface* `net.minecraftforge.common.property.IExtendedBlockState`

All Superinterfaces: IBlockBehaviors, IBlockProperties, IBlockState

### Methods
- `java.util.Collection<IUnlistedProperty<?>> getUnlistedNames()`
- `<V> V getValue(IUnlistedProperty<V> property)`
- `<V> IExtendedBlockState withProperty(IUnlistedProperty<V> property,  V value)`
- `<any> getUnlistedProperties()`
- `IBlockState getClean()`

### Inherited methods
- from `net.minecraft.block.state.IBlockState`: `cycleProperty`, `getBlock`, `getProperties`, `getPropertyKeys`, `getValue`, `withProperty`
- from `net.minecraft.block.state.IBlockBehaviors`: `neighborChanged`, `onBlockEventReceived`
- from `net.minecraft.block.state.IBlockProperties`: `addCollisionBoxToList`, `canEntitySpawn`, `canProvidePower`, `causesSuffocation`, `collisionRayTrace`, `doesSideBlockChestOpening`, `doesSideBlockRendering`, `getActualState`, `getAmbientOcclusionLightValue`, `getBlockFaceShape`, `getBlockHardness`, `getBoundingBox`, `getCollisionBoundingBox`, `getComparatorInputOverride`, `getLightOpacity`, `getLightOpacity`, `getLightValue`, `getLightValue`, `getMapColor`, `getMaterial`, `getMobilityFlag`, `getOffset`, `getPackedLightmapCoords`, `getPlayerRelativeBlockHardness`, `getRenderType`, `getSelectedBoundingBox`, `getStrongPower`, `getWeakPower`, `hasComparatorInputOverride`, `hasCustomBreakingProgress`, `isBlockNormalCube`, `isFullBlock`, `isFullCube`, `isNormalCube`, `isOpaqueCube`, `isSideSolid`, `isTopSolid`, `isTranslucent`, `shouldSideBeRendered`, `useNeighborBrightness`, `withMirror`, `withRotation`

## IUnlistedProperty

*interface* `net.minecraftforge.common.property.IUnlistedProperty`

### Methods
- `java.lang.String getName()`
- `boolean isValid(V value)`
- `java.lang.Class<V> getType()`
- `java.lang.String valueToString(V value)`

## Properties

*class* `net.minecraftforge.common.property.Properties`

### Fields
- `public static final PropertyBool StaticProperty`
  Property indicating if the model should be rendered in the static renderer or in the TESR. AnimationTESR sets it to false.
- `public static final IUnlistedProperty<IModelState> AnimationProperty`
  Property holding the IModelState used for animating the model in the TESR.

### Methods
- `public static <V extends java.lang.Comparable<V>> IUnlistedProperty<V> toUnlisted(IProperty<V> property)`

## Properties.PropertyAdapter>

*class* `net.minecraftforge.common.property.Properties.PropertyAdapter>`

All Implemented Interfaces: IUnlistedProperty<V>

Enclosing class: Properties

### Methods
- `public java.lang.String getName()`
- `public boolean isValid(V value)`
- `public java.lang.Class<V> getType()`
- `public java.lang.String valueToString(V value)`

## PropertyFloat

*class* `net.minecraftforge.common.property.PropertyFloat`

All Implemented Interfaces: IUnlistedProperty<java.lang.Float>

### Methods
- `public java.lang.String getName()`
- `public boolean isValid(java.lang.Float value)`
- `public java.lang.Class<java.lang.Float> getType()`
- `public java.lang.String valueToString(java.lang.Float value)`
