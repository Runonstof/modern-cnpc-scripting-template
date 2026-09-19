# net.minecraftforge.items

- [IItemHandler](#iitemhandler)
- [IItemHandlerModifiable](#iitemhandlermodifiable)
- [ItemHandlerHelper](#itemhandlerhelper)
- [ItemStackHandler](#itemstackhandler)
- [SlotItemHandler](#slotitemhandler)
- [VanillaHopperItemHandler](#vanillahopperitemhandler)
- [VanillaInventoryCodeHooks](#vanillainventorycodehooks)
## IItemHandler

*interface* `net.minecraftforge.items.IItemHandler`

### Methods
- `int getSlots()`
  Returns the number of slots available
  - returns: The number of slots available
- `@NotNull @NotNull ItemStack getStackInSlot(int slot)`
  Returns the ItemStack in a given slot.
  
   The result's stack size may be greater than the itemstack's max size.
  
   If the result is empty, then the slot is empty.
  
   IMPORTANT: This ItemStack MUST NOT be modified. This method is not for
   altering an inventory's contents. Any implementers who are able to detect
   modification through this method should throw an exception.
  
   SERIOUSLY: DO NOT MODIFY THE RETURNED ITEMSTACK
  - param: slot - Slot to query
  - returns: ItemStack in given slot. Empty Itemstack if the slot is empty.
- `@NotNull @NotNull ItemStack insertItem(int slot,  @NotNull  @NotNull ItemStack stack,  boolean simulate)`
  Inserts an ItemStack into the given slot and return the remainder.
   The ItemStack should not be modified in this function!
  
   Note: This behaviour is subtly different from IFluidHandler.fill(FluidStack, IFluidHandler.FluidAction)
  - param: slot - Slot to insert into.
  - param: stack - ItemStack to insert. This must not be modified by the item handler.
  - param: simulate - If true, the insertion is only simulated
  - returns: The remaining ItemStack that was not inserted (if the entire stack is accepted, then return an empty ItemStack).
 May be the same as the input ItemStack if unchanged, otherwise a new ItemStack.
 The returned ItemStack can be safely modified after.
- `@NotNull @NotNull ItemStack extractItem(int slot,  int amount,  boolean simulate)`
  Extracts an ItemStack from the given slot.
  
   The returned value must be empty if nothing is extracted,
   otherwise its stack size must be less than or equal to amount and ItemStack.getMaxStackSize().
  - param: slot - Slot to extract from.
  - param: amount - Amount to extract (may be greater than the current stack's max limit)
  - param: simulate - If true, the extraction is only simulated
  - returns: ItemStack extracted from the slot, must be empty if nothing can be extracted.
 The returned ItemStack can be safely modified after, so item handlers should return a new or copied stack.
- `int getSlotLimit(int slot)`
  Retrieves the maximum stack size allowed to exist in the given slot.
  - param: slot - Slot to query.
  - returns: The maximum stack size allowed in the slot.
- `boolean isItemValid(int slot,  @NotNull  @NotNull ItemStack stack)`
  This function re-implements the vanilla function Container.canPlaceItem(int, ItemStack).
   It should be used instead of simulated insertions in cases where the contents and state of the inventory are
   irrelevant, mainly for the purpose of automation and logic (for instance, testing if a minecart can wait
   to deposit its items into a full inventory, or if the items in the minecart can never be placed into the
   inventory and should move on).
  
   isItemValid is false when insertion of the item is never valid.
   When isItemValid is true, no assumptions can be made and insertion must be simulated case-by-case.
   The actual items in the inventory, its fullness, or any other state are not considered by isItemValid.
  - param: slot - Slot to query for validity
  - param: stack - Stack to test with for validity
  - returns: true if the slot can insert the ItemStack, not considering the current state of the inventory.
 false if the slot can never insert the ItemStack in any situation.

## IItemHandlerModifiable

*interface* `net.minecraftforge.items.IItemHandlerModifiable`

All Superinterfaces: IItemHandler

### Methods
- `void setStackInSlot(int slot,  @NotNull  @NotNull ItemStack stack)`
  Overrides the stack in the given slot. This method is used by the
   standard Forge helper methods and classes. It is not intended for
   general use by other mods, and the handler may throw an error if it
   is called unexpectedly.
  - param: slot - Slot to modify
  - param: stack - ItemStack to set slot to (may be empty).
  - throws: RuntimeException - if the handler is called in a way that the handler
 was not expecting.

### Inherited methods
- from `net.minecraftforge.items.IItemHandler`: `extractItem`, `getSlotLimit`, `getSlots`, `getStackInSlot`, `insertItem`, `isItemValid`

## ItemHandlerHelper

*class* `net.minecraftforge.items.ItemHandlerHelper`

### Methods
- `@NotNull public static @NotNull ItemStack insertItem(IItemHandler dest,  @NotNull  @NotNull ItemStack stack,  boolean simulate)`
- `public static boolean canItemStacksStack(@NotNull  @NotNull ItemStack a,  @NotNull  @NotNull ItemStack b)`
- `public static boolean canItemStacksStackRelaxed(@NotNull  @NotNull ItemStack a,  @NotNull  @NotNull ItemStack b)`
  A relaxed version of canItemStacksStack that stacks itemstacks with different metadata if they don't have subtypes.
   This usually only applies when players pick up items.
- `@NotNull public static @NotNull ItemStack copyStackWithSize(@NotNull  @NotNull ItemStack itemStack,  int size)`
- `@NotNull public static @NotNull ItemStack insertItemStacked(IItemHandler inventory,  @NotNull  @NotNull ItemStack stack,  boolean simulate)`
  Inserts the ItemStack into the inventory, filling up already present stacks first.
   This is equivalent to the behaviour of a player picking up an item.
   Note: This function stacks items without subtypes with different metadata together.
- `public static void giveItemToPlayer(Player player,  @NotNull  @NotNull ItemStack stack)`
  giveItemToPlayer without preferred slot
- `public static void giveItemToPlayer(Player player,  @NotNull  @NotNull ItemStack stack,  int preferredSlot)`
  Inserts the given itemstack into the players inventory.
   If the inventory can't hold it, the item will be dropped in the world at the players position.
  - param: player - The player to give the item to
  - param: stack - The itemstack to insert
- `public static int calcRedstoneFromInventory(@Nullable  @Nullable IItemHandler inv)`
  This method uses the standard vanilla algorithm to calculate a comparator output for how "full" the inventory is.
   This method is an adaptation of Container#calcRedstoneFromInventory(IInventory).
  - param: inv - The inventory handler to test.
  - returns: A redstone value in the range [0,15] representing how "full" this inventory is.

## ItemStackHandler

*class* `net.minecraftforge.items.ItemStackHandler`

### Fields
- `protected NonNullList<ItemStack> stacks`

### Methods
- `public void setSize(int size)`
- `public void setStackInSlot(int slot,  @NotNull  @NotNull ItemStack stack)`
  Description copied from interface: IItemHandlerModifiable
  Overrides the stack in the given slot. This method is used by the
   standard Forge helper methods and classes. It is not intended for
   general use by other mods, and the handler may throw an error if it
   is called unexpectedly.
  - param: slot - Slot to modify
  - param: stack - ItemStack to set slot to (may be empty).
- `public int getSlots()`
  Description copied from interface: IItemHandler
  Returns the number of slots available
  - returns: The number of slots available
- `@NotNull public @NotNull ItemStack getStackInSlot(int slot)`
  Description copied from interface: IItemHandler
  Returns the ItemStack in a given slot.
  
   The result's stack size may be greater than the itemstack's max size.
  
   If the result is empty, then the slot is empty.
  
   IMPORTANT: This ItemStack MUST NOT be modified. This method is not for
   altering an inventory's contents. Any implementers who are able to detect
   modification through this method should throw an exception.
  
   SERIOUSLY: DO NOT MODIFY THE RETURNED ITEMSTACK
  - param: slot - Slot to query
  - returns: ItemStack in given slot. Empty Itemstack if the slot is empty.
- `@NotNull public @NotNull ItemStack insertItem(int slot,  @NotNull  @NotNull ItemStack stack,  boolean simulate)`
  Description copied from interface: IItemHandler
  Inserts an ItemStack into the given slot and return the remainder.
   The ItemStack should not be modified in this function!
  
   Note: This behaviour is subtly different from IFluidHandler.fill(FluidStack, IFluidHandler.FluidAction)
  - param: slot - Slot to insert into.
  - param: stack - ItemStack to insert. This must not be modified by the item handler.
  - param: simulate - If true, the insertion is only simulated
  - returns: The remaining ItemStack that was not inserted (if the entire stack is accepted, then return an empty ItemStack).
 May be the same as the input ItemStack if unchanged, otherwise a new ItemStack.
 The returned ItemStack can be safely modified after.
- `@NotNull public @NotNull ItemStack extractItem(int slot,  int amount,  boolean simulate)`
  Description copied from interface: IItemHandler
  Extracts an ItemStack from the given slot.
  
   The returned value must be empty if nothing is extracted,
   otherwise its stack size must be less than or equal to amount and ItemStack.getMaxStackSize().
  - param: slot - Slot to extract from.
  - param: amount - Amount to extract (may be greater than the current stack's max limit)
  - param: simulate - If true, the extraction is only simulated
  - returns: ItemStack extracted from the slot, must be empty if nothing can be extracted.
 The returned ItemStack can be safely modified after, so item handlers should return a new or copied stack.
- `public int getSlotLimit(int slot)`
  Description copied from interface: IItemHandler
  Retrieves the maximum stack size allowed to exist in the given slot.
  - param: slot - Slot to query.
  - returns: The maximum stack size allowed in the slot.
- `protected int getStackLimit(int slot,  @NotNull  @NotNull ItemStack stack)`
- `public boolean isItemValid(int slot,  @NotNull  @NotNull ItemStack stack)`
  Description copied from interface: IItemHandler
  This function re-implements the vanilla function Container.canPlaceItem(int, ItemStack).
   It should be used instead of simulated insertions in cases where the contents and state of the inventory are
   irrelevant, mainly for the purpose of automation and logic (for instance, testing if a minecart can wait
   to deposit its items into a full inventory, or if the items in the minecart can never be placed into the
   inventory and should move on).
  
   isItemValid is false when insertion of the item is never valid.
   When isItemValid is true, no assumptions can be made and insertion must be simulated case-by-case.
   The actual items in the inventory, its fullness, or any other state are not considered by isItemValid.
  - param: slot - Slot to query for validity
  - param: stack - Stack to test with for validity
  - returns: true if the slot can insert the ItemStack, not considering the current state of the inventory.
 false if the slot can never insert the ItemStack in any situation.
- `public CompoundTag serializeNBT()`
- `public void deserializeNBT(CompoundTag nbt)`
- `protected void validateSlotIndex(int slot)`
- `protected void onLoad()`
- `protected void onContentsChanged(int slot)`

## SlotItemHandler

*class* `net.minecraftforge.items.SlotItemHandler`

### Fields
- `private static Container emptyInventory`
- `private final IItemHandler itemHandler`
- `private final int index`

### Inherited fields
- from `net.minecraft.world.inventory.Slot`: `container`, `x`, `y`

### Methods
- `public boolean mayPlace(@NotNull  @NotNull ItemStack stack)`
- `@NotNull public @NotNull ItemStack getItem()`
- `public void set(@NotNull  @NotNull ItemStack stack)`
- `public void initialize(ItemStack stack)`
- `public void onQuickCraft(@NotNull  @NotNull ItemStack oldStackIn,  @NotNull  @NotNull ItemStack newStackIn)`
- `public int getMaxStackSize()`
- `public int getMaxStackSize(@NotNull  @NotNull ItemStack stack)`
- `public boolean mayPickup(Player playerIn)`
- `@NotNull public @NotNull ItemStack remove(int amount)`
- `public IItemHandler getItemHandler()`

### Inherited methods
- from `net.minecraft.world.inventory.Slot`: `allowModification`, `checkTakeAchievements`, `getContainerSlot`, `getNoItemIcon`, `getSlotIndex`, `hasItem`, `isActive`, `isHighlightable`, `isSameInventory`, `onQuickCraft`, `onSwapCraft`, `onTake`, `safeInsert`, `safeInsert`, `safeTake`, `setBackground`, `setByPlayer`, `setByPlayer`, `setChanged`, `tryRemove`

## VanillaHopperItemHandler

*class* `net.minecraftforge.items.VanillaHopperItemHandler`

### Fields
- `private final HopperBlockEntity hopper`

### Methods
- `@NotNull public @NotNull ItemStack insertItem(int slot,  @NotNull  @NotNull ItemStack stack,  boolean simulate)`
  Description copied from interface: IItemHandler
  Inserts an ItemStack into the given slot and return the remainder.
   The ItemStack should not be modified in this function!
  
   Note: This behaviour is subtly different from IFluidHandler.fill(FluidStack, IFluidHandler.FluidAction)
  - param: slot - Slot to insert into.
  - param: stack - ItemStack to insert. This must not be modified by the item handler.
  - param: simulate - If true, the insertion is only simulated
  - returns: The remaining ItemStack that was not inserted (if the entire stack is accepted, then return an empty ItemStack).
 May be the same as the input ItemStack if unchanged, otherwise a new ItemStack.
 The returned ItemStack can be safely modified after.

### Inherited methods
- from `net.minecraftforge.items.wrapper.InvWrapper`: `equals`, `extractItem`, `getInv`, `getSlotLimit`, `getSlots`, `getStackInSlot`, `hashCode`, `isItemValid`, `setStackInSlot`

## VanillaInventoryCodeHooks

*class* `net.minecraftforge.items.VanillaInventoryCodeHooks`

### Methods
- `@Nullable public static @Nullable Boolean extractHook(Level level,  Hopper dest)`
  Copied from TileEntityHopper#captureDroppedItems and added capability support
  - returns: Null if we did nothing {no IItemHandler}, True if we moved an item, False if we moved no items
- `public static boolean dropperInsertHook(Level level,  BlockPos pos,  DispenserBlockEntity dropper,  int slot,  @NotNull  @NotNull ItemStack stack)`
  Copied from BlockDropper#dispense and added capability support
- `public static boolean insertHook(HopperBlockEntity hopper)`
  Copied from TileEntityHopper#transferItemsOut and added capability support
- `private static ItemStack putStackInInventoryAllSlots(BlockEntity source,  Object destination,  IItemHandler destInventory,  ItemStack stack)`
- `private static ItemStack insertStack(BlockEntity source,  Object destination,  IItemHandler destInventory,  ItemStack stack,  int slot)`
  Copied from TileEntityHopper#insertStack and added capability support
- `private static Optional<org.apache.commons.lang3.tuple.Pair<IItemHandler,Object>> getItemHandler(Level level,  Hopper hopper,  Direction hopperFacing)`
- `private static boolean isFull(IItemHandler itemHandler)`
- `private static boolean isEmpty(IItemHandler itemHandler)`
- `public static Optional<org.apache.commons.lang3.tuple.Pair<IItemHandler,Object>> getItemHandler(Level worldIn,  double x,  double y,  double z,  Direction side)`
