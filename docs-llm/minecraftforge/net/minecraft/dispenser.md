# net.minecraft.dispenser

- [BehaviorDefaultDispenseItem](#behaviordefaultdispenseitem)
- [BehaviorProjectileDispense](#behaviorprojectiledispense)
- [IBehaviorDispenseItem](#ibehaviordispenseitem)
- [IBlockSource](#iblocksource)
- [ILocatableSource](#ilocatablesource)
- [ILocation](#ilocation)
- [IPosition](#iposition)
- [PositionImpl](#positionimpl)
## BehaviorDefaultDispenseItem

*class* `net.minecraft.dispenser.BehaviorDefaultDispenseItem`

All Implemented Interfaces: IBehaviorDispenseItem

### Inherited fields
- from `net.minecraft.dispenser.IBehaviorDispenseItem`: `DEFAULT_BEHAVIOR`

### Methods
- `public final ItemStack dispense(IBlockSource source,  ItemStack stack)`
- `protected ItemStack dispenseStack(IBlockSource source,  ItemStack stack)`
- `public static void doDispense(World worldIn,  ItemStack stack,  int speed,  EnumFacing facing,  IPosition position)`
- `protected void playDispenseSound(IBlockSource source)`
- `protected void spawnDispenseParticles(IBlockSource source,  EnumFacing facingIn)`

## BehaviorProjectileDispense

*class* `net.minecraft.dispenser.BehaviorProjectileDispense`

All Implemented Interfaces: IBehaviorDispenseItem

### Inherited fields
- from `net.minecraft.dispenser.IBehaviorDispenseItem`: `DEFAULT_BEHAVIOR`

### Methods
- `public ItemStack dispenseStack(IBlockSource source,  ItemStack stack)`
- `protected void playDispenseSound(IBlockSource source)`
- `protected abstract IProjectile getProjectileEntity(World worldIn,  IPosition position,  ItemStack stackIn)`
- `protected float getProjectileInaccuracy()`
- `protected float getProjectileVelocity()`

### Inherited methods
- from `net.minecraft.dispenser.BehaviorDefaultDispenseItem`: `dispense`, `doDispense`, `spawnDispenseParticles`

## IBehaviorDispenseItem

*interface* `net.minecraft.dispenser.IBehaviorDispenseItem`

### Fields
- `static final IBehaviorDispenseItem DEFAULT_BEHAVIOR`

### Methods
- `ItemStack dispense(IBlockSource source,  ItemStack stack)`

## IBlockSource

*interface* `net.minecraft.dispenser.IBlockSource`

All Superinterfaces: ILocatableSource, ILocation, IPosition

### Methods
- `double getX()`
- `double getY()`
- `double getZ()`
- `BlockPos getBlockPos()`
- `IBlockState getBlockState()`
- `<T extends TileEntity> T getBlockTileEntity()`

### Inherited methods
- from `net.minecraft.dispenser.ILocation`: `getWorld`

## ILocatableSource

*interface* `net.minecraft.dispenser.ILocatableSource`

All Superinterfaces: ILocation, IPosition

### Inherited methods
- from `net.minecraft.dispenser.ILocation`: `getWorld`
- from `net.minecraft.dispenser.IPosition`: `getX`, `getY`, `getZ`

## ILocation

*interface* `net.minecraft.dispenser.ILocation`

All Superinterfaces: IPosition

### Methods
- `World getWorld()`

### Inherited methods
- from `net.minecraft.dispenser.IPosition`: `getX`, `getY`, `getZ`

## IPosition

*interface* `net.minecraft.dispenser.IPosition`

### Methods
- `double getX()`
- `double getY()`
- `double getZ()`

## PositionImpl

*class* `net.minecraft.dispenser.PositionImpl`

All Implemented Interfaces: IPosition

### Fields
- `protected final double x`
- `protected final double y`
- `protected final double z`

### Methods
- `public double getX()`
- `public double getY()`
- `public double getZ()`
