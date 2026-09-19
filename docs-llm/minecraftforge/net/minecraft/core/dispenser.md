# net.minecraft.core.dispenser

- [AbstractProjectileDispenseBehavior](#abstractprojectiledispensebehavior)
- [BlockSource](#blocksource)
- [BoatDispenseItemBehavior](#boatdispenseitembehavior)
- [DefaultDispenseItemBehavior](#defaultdispenseitembehavior)
- [DispenseItemBehavior](#dispenseitembehavior)
- [OptionalDispenseItemBehavior](#optionaldispenseitembehavior)
- [ShearsDispenseItemBehavior](#shearsdispenseitembehavior)
- [ShulkerBoxDispenseBehavior](#shulkerboxdispensebehavior)
## AbstractProjectileDispenseBehavior

*class* `net.minecraft.core.dispenser.AbstractProjectileDispenseBehavior`

### Inherited fields
- from `net.minecraft.core.dispenser.DispenseItemBehavior`: `LOGGER`, `NOOP`

### Methods
- `public ItemStack execute(BlockSource p_123366_,  ItemStack p_123367_)`
- `protected void playSound(BlockSource p_123364_)`
- `protected abstract Projectile getProjectile(Level p_123360_,  Position p_123361_,  ItemStack p_123362_)`
- `protected float getUncertainty()`
- `protected float getPower()`

### Inherited methods
- from `net.minecraft.core.dispenser.DefaultDispenseItemBehavior`: `dispense`, `playAnimation`, `spawnItem`

## BlockSource

*record* `net.minecraft.core.dispenser.BlockSource`

### Fields
- `private final ServerLevel level`
  The field for the level record component.
- `private final BlockPos pos`
  The field for the pos record component.
- `private final BlockState state`
  The field for the state record component.
- `private final DispenserBlockEntity blockEntity`
  The field for the blockEntity record component.

### Methods
- `public Vec3 center()`
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
- `public ServerLevel level()`
  Returns the value of the level record component.
  - returns: the value of the level record component
- `public BlockPos pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component
- `public BlockState state()`
  Returns the value of the state record component.
  - returns: the value of the state record component
- `public DispenserBlockEntity blockEntity()`
  Returns the value of the blockEntity record component.
  - returns: the value of the blockEntity record component

## BoatDispenseItemBehavior

*class* `net.minecraft.core.dispenser.BoatDispenseItemBehavior`

### Fields
- `private final DefaultDispenseItemBehavior defaultDispenseItemBehavior`
- `private final Boat.Type type`
- `private final boolean isChestBoat`

### Inherited fields
- from `net.minecraft.core.dispenser.DispenseItemBehavior`: `LOGGER`, `NOOP`

### Methods
- `public ItemStack execute(BlockSource p_123375_,  ItemStack p_123376_)`
- `protected void playSound(BlockSource p_123373_)`

### Inherited methods
- from `net.minecraft.core.dispenser.DefaultDispenseItemBehavior`: `dispense`, `playAnimation`, `spawnItem`

## DefaultDispenseItemBehavior

*class* `net.minecraft.core.dispenser.DefaultDispenseItemBehavior`

### Inherited fields
- from `net.minecraft.core.dispenser.DispenseItemBehavior`: `LOGGER`, `NOOP`

### Methods
- `public final ItemStack dispense(BlockSource p_123391_,  ItemStack p_123392_)`
- `protected ItemStack execute(BlockSource p_301824_,  ItemStack p_123386_)`
- `public static void spawnItem(Level p_123379_,  ItemStack p_123380_,  int p_123381_,  Direction p_123382_,  Position p_123383_)`
- `protected void playSound(BlockSource p_123384_)`
- `protected void playAnimation(BlockSource p_123388_,  Direction p_123389_)`

## DispenseItemBehavior

*interface* `net.minecraft.core.dispenser.DispenseItemBehavior`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `static final DispenseItemBehavior NOOP`

### Methods
- `ItemStack dispense(BlockSource p_123403_,  ItemStack p_123404_)`
- `static void bootStrap()`
- `static Vec3 getEntityPokingOutOfBlockPos(BlockSource p_301823_,  EntityType<?> p_301844_,  Direction p_301805_)`

## OptionalDispenseItemBehavior

*class* `net.minecraft.core.dispenser.OptionalDispenseItemBehavior`

### Fields
- `private boolean success`

### Inherited fields
- from `net.minecraft.core.dispenser.DispenseItemBehavior`: `LOGGER`, `NOOP`

### Methods
- `public boolean isSuccess()`
- `public void setSuccess(boolean p_123574_)`
- `protected void playSound(BlockSource p_123572_)`

### Inherited methods
- from `net.minecraft.core.dispenser.DefaultDispenseItemBehavior`: `dispense`, `execute`, `playAnimation`, `spawnItem`

## ShearsDispenseItemBehavior

*class* `net.minecraft.core.dispenser.ShearsDispenseItemBehavior`

### Inherited fields
- from `net.minecraft.core.dispenser.DispenseItemBehavior`: `LOGGER`, `NOOP`

### Methods
- `protected ItemStack execute(BlockSource p_301806_,  ItemStack p_123581_)`
- `private static boolean tryShearBeehive(ServerLevel p_123577_,  BlockPos p_123578_)`
- `private static boolean tryShearLivingEntity(ServerLevel p_123583_,  BlockPos p_123584_)`

### Inherited methods
- from `net.minecraft.core.dispenser.OptionalDispenseItemBehavior`: `isSuccess`, `playSound`, `setSuccess`
- from `net.minecraft.core.dispenser.DefaultDispenseItemBehavior`: `dispense`, `playAnimation`, `spawnItem`

## ShulkerBoxDispenseBehavior

*class* `net.minecraft.core.dispenser.ShulkerBoxDispenseBehavior`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Inherited fields
- from `net.minecraft.core.dispenser.DispenseItemBehavior`: `NOOP`

### Methods
- `protected ItemStack execute(BlockSource p_123587_,  ItemStack p_123588_)`

### Inherited methods
- from `net.minecraft.core.dispenser.OptionalDispenseItemBehavior`: `isSuccess`, `playSound`, `setSuccess`
- from `net.minecraft.core.dispenser.DefaultDispenseItemBehavior`: `dispense`, `playAnimation`, `spawnItem`
