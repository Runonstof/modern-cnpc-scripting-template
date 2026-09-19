# net.minecraftforge.items.wrapper

- [CombinedInvWrapper](#combinedinvwrapper)
- [EmptyHandler](#emptyhandler)
- [EntityArmorInvWrapper](#entityarmorinvwrapper)
- [EntityEquipmentInvWrapper](#entityequipmentinvwrapper)
- [EntityHandsInvWrapper](#entityhandsinvwrapper)
- [InvWrapper](#invwrapper)
- [PlayerArmorInvWrapper](#playerarmorinvwrapper)
- [PlayerInvWrapper](#playerinvwrapper)
- [PlayerMainInvWrapper](#playermaininvwrapper)
- [PlayerOffhandInvWrapper](#playeroffhandinvwrapper)
- [RangedWrapper](#rangedwrapper)
- [SidedInvWrapper](#sidedinvwrapper)
## CombinedInvWrapper

*class* `net.minecraftforge.items.wrapper.CombinedInvWrapper`

All Implemented Interfaces: IItemHandler, IItemHandlerModifiable

### Fields
- `protected final IItemHandlerModifiable[] itemHandler`
- `protected final int[] baseIndex`
- `protected final int slotCount`

### Methods
- `protected int getIndexForSlot(int slot)`
- `protected IItemHandlerModifiable getHandlerFromIndex(int index)`
- `protected int getSlotFromIndex(int slot,  int index)`
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

## EmptyHandler

*class* `net.minecraftforge.items.wrapper.EmptyHandler`

All Implemented Interfaces: IItemHandler, IItemHandlerModifiable

### Fields
- `public static final IItemHandler INSTANCE`

### Methods
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
- `public void setStackInSlot(int slot,  ItemStack stack)`
  Description copied from interface: IItemHandlerModifiable
  Overrides the stack in the given slot. This method is used by the
   standard Forge helper methods and classes. It is not intended for
   general use by other mods, and the handler may throw an error if it
   is called unexpectedly.
  - param: slot - Slot to modify
  - param: stack - ItemStack to set slot to (may be empty).
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

## EntityArmorInvWrapper

*class* `net.minecraftforge.items.wrapper.EntityArmorInvWrapper`

Exposes the armor inventory of an EntityLivingBase as an IItemHandler using EntityLivingBase.getItemStackFromSlot(net.minecraft.inventory.EntityEquipmentSlot) and
 EntityLivingBase.setItemStackToSlot(net.minecraft.inventory.EntityEquipmentSlot, net.minecraft.item.ItemStack).

All Implemented Interfaces: IItemHandler, IItemHandlerModifiable

### Inherited fields
- from `net.minecraftforge.items.wrapper.EntityEquipmentInvWrapper`: `entity`, `slots`

### Inherited methods
- from `net.minecraftforge.items.wrapper.EntityEquipmentInvWrapper`: `extractItem`, `getSlotLimit`, `getSlots`, `getStackInSlot`, `getStackLimit`, `insertItem`, `isItemValid`, `setStackInSlot`, `validateSlotIndex`

## EntityEquipmentInvWrapper

*class* `net.minecraftforge.items.wrapper.EntityEquipmentInvWrapper`

Exposes the armor or hands inventory of an EntityLivingBase as an IItemHandler using EntityLivingBase.getItemStackFromSlot(net.minecraft.inventory.EntityEquipmentSlot) and
 EntityLivingBase.setItemStackToSlot(net.minecraft.inventory.EntityEquipmentSlot, net.minecraft.item.ItemStack).

All Implemented Interfaces: IItemHandler, IItemHandlerModifiable

### Fields
- `protected final EntityLivingBase entity`
  The entity.
- `protected final java.util.List<EntityEquipmentSlot> slots`
  The slots exposed by this wrapper, with EntityEquipmentSlot.index as the index.

### Methods
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
- `public void setStackInSlot(int slot,  ItemStack stack)`
  Description copied from interface: IItemHandlerModifiable
  Overrides the stack in the given slot. This method is used by the
   standard Forge helper methods and classes. It is not intended for
   general use by other mods, and the handler may throw an error if it
   is called unexpectedly.
  - param: slot - Slot to modify
  - param: stack - ItemStack to set slot to (may be empty).
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
- `protected EntityEquipmentSlot validateSlotIndex(int slot)`

## EntityHandsInvWrapper

*class* `net.minecraftforge.items.wrapper.EntityHandsInvWrapper`

Exposes the hands inventory of an EntityLivingBase as an IItemHandler using EntityLivingBase.getItemStackFromSlot(net.minecraft.inventory.EntityEquipmentSlot) and
 EntityLivingBase.setItemStackToSlot(net.minecraft.inventory.EntityEquipmentSlot, net.minecraft.item.ItemStack).

All Implemented Interfaces: IItemHandler, IItemHandlerModifiable

### Inherited fields
- from `net.minecraftforge.items.wrapper.EntityEquipmentInvWrapper`: `entity`, `slots`

### Inherited methods
- from `net.minecraftforge.items.wrapper.EntityEquipmentInvWrapper`: `extractItem`, `getSlotLimit`, `getSlots`, `getStackInSlot`, `getStackLimit`, `insertItem`, `isItemValid`, `setStackInSlot`, `validateSlotIndex`

## InvWrapper

*class* `net.minecraftforge.items.wrapper.InvWrapper`

All Implemented Interfaces: IItemHandler, IItemHandlerModifiable

### Methods
- `public boolean equals(java.lang.Object o)`
- `public int hashCode()`
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
- `public void setStackInSlot(int slot,  ItemStack stack)`
  Description copied from interface: IItemHandlerModifiable
  Overrides the stack in the given slot. This method is used by the
   standard Forge helper methods and classes. It is not intended for
   general use by other mods, and the handler may throw an error if it
   is called unexpectedly.
  - param: slot - Slot to modify
  - param: stack - ItemStack to set slot to (may be empty).
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
- `public IInventory getInv()`

## PlayerArmorInvWrapper

*class* `net.minecraftforge.items.wrapper.PlayerArmorInvWrapper`

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
- `public InventoryPlayer getInventoryPlayer()`

### Inherited methods
- from `net.minecraftforge.items.wrapper.RangedWrapper`: `extractItem`, `getSlotLimit`, `getSlots`, `getStackInSlot`, `isItemValid`, `setStackInSlot`

## PlayerInvWrapper

*class* `net.minecraftforge.items.wrapper.PlayerInvWrapper`

All Implemented Interfaces: IItemHandler, IItemHandlerModifiable

### Inherited fields
- from `net.minecraftforge.items.wrapper.CombinedInvWrapper`: `baseIndex`, `itemHandler`, `slotCount`

### Inherited methods
- from `net.minecraftforge.items.wrapper.CombinedInvWrapper`: `extractItem`, `getHandlerFromIndex`, `getIndexForSlot`, `getSlotFromIndex`, `getSlotLimit`, `getSlots`, `getStackInSlot`, `insertItem`, `isItemValid`, `setStackInSlot`

## PlayerMainInvWrapper

*class* `net.minecraftforge.items.wrapper.PlayerMainInvWrapper`

Exposes the player inventory WITHOUT the armor inventory as IItemHandler.
 Also takes core of inserting/extracting having the same logic as picking up items.

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
- `public InventoryPlayer getInventoryPlayer()`

### Inherited methods
- from `net.minecraftforge.items.wrapper.RangedWrapper`: `extractItem`, `getSlotLimit`, `getSlots`, `getStackInSlot`, `isItemValid`, `setStackInSlot`

## PlayerOffhandInvWrapper

*class* `net.minecraftforge.items.wrapper.PlayerOffhandInvWrapper`

All Implemented Interfaces: IItemHandler, IItemHandlerModifiable

### Inherited methods
- from `net.minecraftforge.items.wrapper.RangedWrapper`: `extractItem`, `getSlotLimit`, `getSlots`, `getStackInSlot`, `insertItem`, `isItemValid`, `setStackInSlot`

## RangedWrapper

*class* `net.minecraftforge.items.wrapper.RangedWrapper`

A wrapper that composes another IItemHandlerModifiable, exposing only a range of the composed slots.
 Shifting of slot indices is handled automatically for you.

All Implemented Interfaces: IItemHandler, IItemHandlerModifiable

### Methods
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
- `public void setStackInSlot(int slot,  ItemStack stack)`
  Description copied from interface: IItemHandlerModifiable
  Overrides the stack in the given slot. This method is used by the
   standard Forge helper methods and classes. It is not intended for
   general use by other mods, and the handler may throw an error if it
   is called unexpectedly.
  - param: slot - Slot to modify
  - param: stack - ItemStack to set slot to (may be empty).
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

## SidedInvWrapper

*class* `net.minecraftforge.items.wrapper.SidedInvWrapper`

All Implemented Interfaces: IItemHandler, IItemHandlerModifiable

### Fields
- `protected final ISidedInventory inv`
- `protected final EnumFacing side`

### Methods
- `public static int getSlot(ISidedInventory inv,  int slot,  EnumFacing side)`
- `public boolean equals(java.lang.Object o)`
- `public int hashCode()`
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
- `public void setStackInSlot(int slot,  ItemStack stack)`
  Description copied from interface: IItemHandlerModifiable
  Overrides the stack in the given slot. This method is used by the
   standard Forge helper methods and classes. It is not intended for
   general use by other mods, and the handler may throw an error if it
   is called unexpectedly.
  - param: slot - Slot to modify
  - param: stack - ItemStack to set slot to (may be empty).
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
