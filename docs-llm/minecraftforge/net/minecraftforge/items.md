# net.minecraftforge.items

- [CapabilityItemHandler](#capabilityitemhandler)
- [IItemHandler](#iitemhandler)
- [IItemHandlerModifiable](#iitemhandlermodifiable)
- [ItemHandlerHelper](#itemhandlerhelper)
- [ItemStackHandler](#itemstackhandler)
- [SlotItemHandler](#slotitemhandler)
- [VanillaDoubleChestItemHandler](#vanilladoublechestitemhandler)
- [VanillaHopperItemHandler](#vanillahopperitemhandler)
- [VanillaInventoryCodeHooks](#vanillainventorycodehooks)
## CapabilityItemHandler

*class* `net.minecraftforge.items.CapabilityItemHandler`

### Fields
- `public static Capability<IItemHandler> ITEM_HANDLER_CAPABILITY`

### Methods
- `public static void register()`

## IItemHandler

*interface* `net.minecraftforge.items.IItemHandler`

### Methods
- `int getSlots()`
  Returns the number of slots available
  - returns: The number of slots available
- `ItemStack getStackInSlot(int slot)`
  Returns the ItemStack in a given slot.
  
   The result's stack size may be greater than the itemstack's max size.
  
   If the result is empty, then the slot is empty.
  
   IMPORTANT: This ItemStack MUST NOT be modified. This method is not for
   altering an inventory's contents. Any implementers who are able to detect
   modification through this method should throw an exception.
  
   SERIOUSLY: DO NOT MODIFY THE RETURNED ITEMSTACK
  - param: slot - Slot to query
  - returns: ItemStack in given slot. Empty Itemstack if the slot is empty.
- `ItemStack insertItem(int slot,  ItemStack stack,  boolean simulate)`
  Inserts an ItemStack into the given slot and return the remainder.
   The ItemStack should not be modified in this function!
  
   Note: This behaviour is subtly different from IFluidHandler.fill(FluidStack, boolean)
  - param: slot - Slot to insert into.
  - param: stack - ItemStack to insert. This must not be modified by the item handler.
  - param: simulate - If true, the insertion is only simulated
  - returns: The remaining ItemStack that was not inserted (if the entire stack is accepted, then return an empty ItemStack).
 May be the same as the input ItemStack if unchanged, otherwise a new ItemStack.
 The returned ItemStack can be safely modified after.
- `ItemStack extractItem(int slot,  int amount,  boolean simulate)`
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
- `default boolean isItemValid(int slot,  ItemStack stack)`
  This function re-implements the vanilla function IInventory.isItemValidForSlot(int, ItemStack).
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
- `void setStackInSlot(int slot,  ItemStack stack)`
  Overrides the stack in the given slot. This method is used by the
   standard Forge helper methods and classes. It is not intended for
   general use by other mods, and the handler may throw an error if it
   is called unexpectedly.
  - param: slot - Slot to modify
  - param: stack - ItemStack to set slot to (may be empty).
  - throws: java.lang.RuntimeException - if the handler is called in a way that the handler
 was not expecting.

### Inherited methods
- from `net.minecraftforge.items.IItemHandler`: `extractItem`, `getSlotLimit`, `getSlots`, `getStackInSlot`, `insertItem`, `isItemValid`

## ItemHandlerHelper

*class* `net.minecraftforge.items.ItemHandlerHelper`

### Methods
- `public static ItemStack insertItem(IItemHandler dest,  ItemStack stack,  boolean simulate)`
- `public static boolean canItemStacksStack(ItemStack a,  ItemStack b)`
- `public static boolean canItemStacksStackRelaxed(ItemStack a,  ItemStack b)`
  A relaxed version of canItemStacksStack that stacks itemstacks with different metadata if they don't have subtypes.
   This usually only applies when players pick up items.
- `public static ItemStack copyStackWithSize(ItemStack itemStack,  int size)`
- `public static ItemStack insertItemStacked(IItemHandler inventory,  ItemStack stack,  boolean simulate)`
  Inserts the ItemStack into the inventory, filling up already present stacks first.
   This is equivalent to the behaviour of a player picking up an item.
   Note: This function stacks items without subtypes with different metadata together.
- `public static void giveItemToPlayer(EntityPlayer player,  ItemStack stack)`
  giveItemToPlayer without preferred slot
- `public static void giveItemToPlayer(EntityPlayer player,  ItemStack stack,  int preferredSlot)`
  Inserts the given itemstack into the players inventory.
   If the inventory can't hold it, the item will be dropped in the world at the players position.
  - param: player - The player to give the item to
  - param: stack - The itemstack to insert
- `public static int calcRedstoneFromInventory(IItemHandler inv)`
  This method uses the standard vanilla algorithm to calculate a comparator output for how "full" the inventory is.
   This method is an adaptation of Container#calcRedstoneFromInventory(IInventory).
  - param: inv - The inventory handler to test.
  - returns: A redstone value in the range [0,15] representing how "full" this inventory is.

## ItemStackHandler

*class* `net.minecraftforge.items.ItemStackHandler`

All Implemented Interfaces: INBTSerializable<NBTTagCompound>, IItemHandler, IItemHandlerModifiable

### Fields
- `protected NonNullList<ItemStack> stacks`

### Methods
- `public void setSize(int size)`
- `public void setStackInSlot(int slot,  ItemStack stack)`
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
- `public ItemStack getStackInSlot(int slot)`
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
- `public ItemStack insertItem(int slot,  ItemStack stack,  boolean simulate)`
  Description copied from interface: IItemHandler
  Inserts an ItemStack into the given slot and return the remainder.
   The ItemStack should not be modified in this function!
  
   Note: This behaviour is subtly different from IFluidHandler.fill(FluidStack, boolean)
  - param: slot - Slot to insert into.
  - param: stack - ItemStack to insert. This must not be modified by the item handler.
  - param: simulate - If true, the insertion is only simulated
  - returns: The remaining ItemStack that was not inserted (if the entire stack is accepted, then return an empty ItemStack).
 May be the same as the input ItemStack if unchanged, otherwise a new ItemStack.
 The returned ItemStack can be safely modified after.
- `public ItemStack extractItem(int slot,  int amount,  boolean simulate)`
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
- `protected int getStackLimit(int slot,  ItemStack stack)`
- `public boolean isItemValid(int slot,  ItemStack stack)`
  Description copied from interface: IItemHandler
  This function re-implements the vanilla function IInventory.isItemValidForSlot(int, ItemStack).
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
- `public NBTTagCompound serializeNBT()`
- `public void deserializeNBT(NBTTagCompound nbt)`
- `protected void validateSlotIndex(int slot)`
- `protected void onLoad()`
- `protected void onContentsChanged(int slot)`

## SlotItemHandler

*class* `net.minecraftforge.items.SlotItemHandler`

### Inherited fields
- from `net.minecraft.inventory.Slot`: `backgroundLocation`, `backgroundMap`, `backgroundName`, `inventory`, `slotNumber`, `xPos`, `yPos`

### Methods
- `public boolean isItemValid(ItemStack stack)`
- `public ItemStack getStack()`
- `public void putStack(ItemStack stack)`
- `public void onSlotChange(ItemStack p_75220_1_,  ItemStack p_75220_2_)`
- `public int getSlotStackLimit()`
- `public int getItemStackLimit(ItemStack stack)`
- `public boolean canTakeStack(EntityPlayer playerIn)`
- `public ItemStack decrStackSize(int amount)`
- `public IItemHandler getItemHandler()`
- `public boolean isSameInventory(Slot other)`
  Description copied from class: Slot
  Checks if the other slot is in the same inventory, by comparing the inventory reference.
  - returns: true if the other slot is in the same inventory

### Inherited methods
- from `net.minecraft.inventory.Slot`: `getBackgroundLocation`, `getBackgroundMap`, `getBackgroundSprite`, `getHasStack`, `getSlotIndex`, `getSlotTexture`, `isEnabled`, `isHere`, `onCrafting`, `onCrafting`, `onSlotChanged`, `onSwapCraft`, `onTake`, `setBackgroundLocation`, `setBackgroundName`

## VanillaDoubleChestItemHandler

*class* `net.minecraftforge.items.VanillaDoubleChestItemHandler`

All Implemented Interfaces: IItemHandler, IItemHandlerModifiable

### Fields
- `public static final VanillaDoubleChestItemHandler NO_ADJACENT_CHESTS_INSTANCE`

### Methods
- `public static VanillaDoubleChestItemHandler get(TileEntityChest chest)`
- `public TileEntityChest getChest(boolean accessingUpper)`
- `public int getSlots()`
  Description copied from interface: IItemHandler
  Returns the number of slots available
  - returns: The number of slots available
- `public ItemStack getStackInSlot(int slot)`
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
- `public void setStackInSlot(int slot,  ItemStack stack)`
  Description copied from interface: IItemHandlerModifiable
  Overrides the stack in the given slot. This method is used by the
   standard Forge helper methods and classes. It is not intended for
   general use by other mods, and the handler may throw an error if it
   is called unexpectedly.
  - param: slot - Slot to modify
  - param: stack - ItemStack to set slot to (may be empty).
- `public ItemStack insertItem(int slot,  ItemStack stack,  boolean simulate)`
  Description copied from interface: IItemHandler
  Inserts an ItemStack into the given slot and return the remainder.
   The ItemStack should not be modified in this function!
  
   Note: This behaviour is subtly different from IFluidHandler.fill(FluidStack, boolean)
  - param: slot - Slot to insert into.
  - param: stack - ItemStack to insert. This must not be modified by the item handler.
  - param: simulate - If true, the insertion is only simulated
  - returns: The remaining ItemStack that was not inserted (if the entire stack is accepted, then return an empty ItemStack).
 May be the same as the input ItemStack if unchanged, otherwise a new ItemStack.
 The returned ItemStack can be safely modified after.
- `public ItemStack extractItem(int slot,  int amount,  boolean simulate)`
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
- `public boolean isItemValid(int slot,  ItemStack stack)`
  Description copied from interface: IItemHandler
  This function re-implements the vanilla function IInventory.isItemValidForSlot(int, ItemStack).
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
- `public boolean equals(java.lang.Object o)`
- `public int hashCode()`
- `public boolean needsRefresh()`

### Inherited methods
- from `java.lang.ref.Reference`: `clear`, `enqueue`, `get`, `isEnqueued`

## VanillaHopperItemHandler

*class* `net.minecraftforge.items.VanillaHopperItemHandler`

All Implemented Interfaces: IItemHandler, IItemHandlerModifiable

### Methods
- `public ItemStack insertItem(int slot,  ItemStack stack,  boolean simulate)`
  Description copied from interface: IItemHandler
  Inserts an ItemStack into the given slot and return the remainder.
   The ItemStack should not be modified in this function!
  
   Note: This behaviour is subtly different from IFluidHandler.fill(FluidStack, boolean)
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
- `public static java.lang.Boolean extractHook(IHopper dest)`
  Copied from TileEntityHopper#captureDroppedItems and added capability support
  - returns: Null if we did nothing {no IItemHandler}, True if we moved an item, False if we moved no items
- `public static boolean dropperInsertHook(World world,  BlockPos pos,  TileEntityDispenser dropper,  int slot,  ItemStack stack)`
  Copied from BlockDropper#dispense and added capability support
- `public static boolean insertHook(TileEntityHopper hopper)`
  Copied from TileEntityHopper#transferItemsOut and added capability support
- `public static <any> getItemHandler(World worldIn,  double x,  double y,  double z,  EnumFacing side)`
