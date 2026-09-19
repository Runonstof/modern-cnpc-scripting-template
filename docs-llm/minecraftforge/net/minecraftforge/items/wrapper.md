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
- [RecipeWrapper](#recipewrapper)
- [ShulkerItemStackInvWrapper](#shulkeritemstackinvwrapper)
- [SidedInvWrapper](#sidedinvwrapper)
- [SidedInvWrapper.InsertLimit](#sidedinvwrapper.insertlimit)
## CombinedInvWrapper

*class* `net.minecraftforge.items.wrapper.CombinedInvWrapper`

### Fields
- `protected final IItemHandlerModifiable[] itemHandler`
- `protected final int[] baseIndex`
- `protected final int slotCount`

### Methods
- `protected int getIndexForSlot(int slot)`
- `protected IItemHandlerModifiable getHandlerFromIndex(int index)`
- `protected int getSlotFromIndex(int slot,  int index)`
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

## EmptyHandler

*class* `net.minecraftforge.items.wrapper.EmptyHandler`

### Fields
- `public static final IItemHandler INSTANCE`

### Methods
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
- `public void setStackInSlot(int slot,  @NotNull  @NotNull ItemStack stack)`
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

## EntityArmorInvWrapper

*class* `net.minecraftforge.items.wrapper.EntityArmorInvWrapper`

Exposes the armor inventory of an LivingEntity as an IItemHandler using LivingEntity.getItemBySlot(EquipmentSlot) and
 LivingEntity.setItemSlot(EquipmentSlot, ItemStack).

### Inherited fields
- from `net.minecraftforge.items.wrapper.EntityEquipmentInvWrapper`: `entity`, `slots`

### Inherited methods
- from `net.minecraftforge.items.wrapper.EntityEquipmentInvWrapper`: `create`, `extractItem`, `getSlotLimit`, `getSlots`, `getStackInSlot`, `getStackLimit`, `insertItem`, `isItemValid`, `setStackInSlot`, `validateSlotIndex`

## EntityEquipmentInvWrapper

*class* `net.minecraftforge.items.wrapper.EntityEquipmentInvWrapper`

Exposes the armor or hands inventory of an LivingEntity as an IItemHandler using LivingEntity.getItemBySlot(EquipmentSlot) and
 LivingEntity.setItemSlot(EquipmentSlot, ItemStack).

### Fields
- `protected final LivingEntity entity`
  The entity.
- `protected final List<EquipmentSlot> slots`
  The slots exposed by this wrapper, with EquipmentSlot.getIndex() as the index.

### Methods
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
- `public void setStackInSlot(int slot,  @NotNull  @NotNull ItemStack stack)`
  Description copied from interface: IItemHandlerModifiable
  Overrides the stack in the given slot. This method is used by the
   standard Forge helper methods and classes. It is not intended for
   general use by other mods, and the handler may throw an error if it
   is called unexpectedly.
  - param: slot - Slot to modify
  - param: stack - ItemStack to set slot to (may be empty).
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
- `protected EquipmentSlot validateSlotIndex(int slot)`
- `public static LazyOptional<IItemHandlerModifiable>[] create(LivingEntity entity)`

## EntityHandsInvWrapper

*class* `net.minecraftforge.items.wrapper.EntityHandsInvWrapper`

Exposes the hands inventory of an LivingEntity as an IItemHandler using LivingEntity.getItemBySlot(EquipmentSlot) and
 LivingEntity.setItemSlot(EquipmentSlot, ItemStack).

### Inherited fields
- from `net.minecraftforge.items.wrapper.EntityEquipmentInvWrapper`: `entity`, `slots`

### Inherited methods
- from `net.minecraftforge.items.wrapper.EntityEquipmentInvWrapper`: `create`, `extractItem`, `getSlotLimit`, `getSlots`, `getStackInSlot`, `getStackLimit`, `insertItem`, `isItemValid`, `setStackInSlot`, `validateSlotIndex`

## InvWrapper

*class* `net.minecraftforge.items.wrapper.InvWrapper`

### Fields
- `private final Container inv`

### Methods
- `public boolean equals(Object o)`
- `public int hashCode()`
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
- `public void setStackInSlot(int slot,  @NotNull  @NotNull ItemStack stack)`
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
- `public Container getInv()`

## PlayerArmorInvWrapper

*class* `net.minecraftforge.items.wrapper.PlayerArmorInvWrapper`

### Fields
- `private final Inventory inventoryPlayer`

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
- `public Inventory getInventoryPlayer()`

### Inherited methods
- from `net.minecraftforge.items.wrapper.RangedWrapper`: `extractItem`, `getSlotLimit`, `getSlots`, `getStackInSlot`, `isItemValid`, `setStackInSlot`

## PlayerInvWrapper

*class* `net.minecraftforge.items.wrapper.PlayerInvWrapper`

### Inherited fields
- from `net.minecraftforge.items.wrapper.CombinedInvWrapper`: `baseIndex`, `itemHandler`, `slotCount`

### Inherited methods
- from `net.minecraftforge.items.wrapper.CombinedInvWrapper`: `extractItem`, `getHandlerFromIndex`, `getIndexForSlot`, `getSlotFromIndex`, `getSlotLimit`, `getSlots`, `getStackInSlot`, `insertItem`, `isItemValid`, `setStackInSlot`

## PlayerMainInvWrapper

*class* `net.minecraftforge.items.wrapper.PlayerMainInvWrapper`

Exposes the player inventory WITHOUT the armor inventory as IItemHandler.
 Also takes core of inserting/extracting having the same logic as picking up items.

### Fields
- `private final Inventory inventoryPlayer`

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
- `public Inventory getInventoryPlayer()`

### Inherited methods
- from `net.minecraftforge.items.wrapper.RangedWrapper`: `extractItem`, `getSlotLimit`, `getSlots`, `getStackInSlot`, `isItemValid`, `setStackInSlot`

## PlayerOffhandInvWrapper

*class* `net.minecraftforge.items.wrapper.PlayerOffhandInvWrapper`

### Inherited methods
- from `net.minecraftforge.items.wrapper.RangedWrapper`: `extractItem`, `getSlotLimit`, `getSlots`, `getStackInSlot`, `insertItem`, `isItemValid`, `setStackInSlot`

## RangedWrapper

*class* `net.minecraftforge.items.wrapper.RangedWrapper`

A wrapper that composes another IItemHandlerModifiable, exposing only a range of the composed slots.
 Shifting of slot indices is handled automatically for you.

### Fields
- `private final IItemHandlerModifiable compose`
- `private final int minSlot`
- `private final int maxSlot`

### Methods
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
- `public void setStackInSlot(int slot,  @NotNull  @NotNull ItemStack stack)`
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
- `private boolean checkSlot(int localSlot)`

## RecipeWrapper

*class* `net.minecraftforge.items.wrapper.RecipeWrapper`

### Fields
- `protected final IItemHandlerModifiable inv`

### Inherited fields
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`

### Methods
- `public int getContainerSize()`
  Returns the size of this inventory.
- `public ItemStack getItem(int slot)`
  Returns the stack in this slot. This stack should be a modifiable reference, not a copy of a stack in your inventory.
- `public ItemStack removeItem(int slot,  int count)`
  Attempts to remove n items from the specified slot. Returns the split stack that was removed. Modifies the inventory.
- `public void setItem(int slot,  ItemStack stack)`
  Sets the contents of this slot to the provided stack.
- `public ItemStack removeItemNoUpdate(int index)`
  Removes the stack contained in this slot from the underlying handler, and returns it.
- `public boolean isEmpty()`
- `public boolean canPlaceItem(int slot,  ItemStack stack)`
- `public void clearContent()`
- `public int getMaxStackSize()`
- `public void setChanged()`
- `public boolean stillValid(Player player)`
- `public void startOpen(Player player)`
- `public void stopOpen(Player player)`

### Inherited methods
- from `net.minecraft.world.Container`: `canTakeItem`, `countItem`, `hasAnyMatching`, `hasAnyOf`

## ShulkerItemStackInvWrapper

*class* `net.minecraftforge.items.wrapper.ShulkerItemStackInvWrapper`

### Fields
- `private final ItemStack stack`
- `private final LazyOptional<IItemHandler> holder`
- `private CompoundTag cachedTag`
- `private NonNullList<ItemStack> itemStacksCache`

### Methods
- `@Internal @Nullable public static @Nullable ICapabilityProvider createDefaultProvider(ItemStack itemStack)`
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
- `private void validateSlotIndex(int slot)`
- `public int getSlotLimit(int slot)`
  Description copied from interface: IItemHandler
  Retrieves the maximum stack size allowed to exist in the given slot.
  - param: slot - Slot to query.
  - returns: The maximum stack size allowed in the slot.
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
- `public void setStackInSlot(int slot,  @NotNull  @NotNull ItemStack stack)`
  Description copied from interface: IItemHandlerModifiable
  Overrides the stack in the given slot. This method is used by the
   standard Forge helper methods and classes. It is not intended for
   general use by other mods, and the handler may throw an error if it
   is called unexpectedly.
  - param: slot - Slot to modify
  - param: stack - ItemStack to set slot to (may be empty).
- `private NonNullList<ItemStack> getItemList()`
- `private NonNullList<ItemStack> refreshItemList(CompoundTag rootTag)`
- `private void setItemList(NonNullList<ItemStack> itemStacks)`
- `@NotNull public <T> @NotNull LazyOptional<T> getCapability(@NotNull  @NotNull Capability<T> cap,  @Nullable  @Nullable Direction side)`
  Description copied from interface: ICapabilityProvider
  Retrieves the Optional handler for the capability requested on the specific side.
   The return value CAN be the same for multiple faces.
   Modders are encouraged to cache this value, using the listener capabilities of the Optional to
   be notified if the requested capability get lost.
  - param: cap - The capability to check
  - param: side - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested an optional holding the requested capability.

### Inherited methods
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`

## SidedInvWrapper

*class* `net.minecraftforge.items.wrapper.SidedInvWrapper`

### Fields
- `protected final WorldlyContainer inv`
- `@Nullable protected final @Nullable Direction side`
- `private final IntUnaryOperator slotLimit`
- `private final SidedInvWrapper.InsertLimit newStackInsertLimit`

### Methods
- `public static LazyOptional<IItemHandlerModifiable>[] create(WorldlyContainer inv,  Direction... sides)`
- `public static int getSlot(WorldlyContainer inv,  int slot,  @Nullable  @Nullable Direction side)`
- `public boolean equals(Object o)`
- `public int hashCode()`
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
- `public void setStackInSlot(int slot,  @NotNull  @NotNull ItemStack stack)`
  Description copied from interface: IItemHandlerModifiable
  Overrides the stack in the given slot. This method is used by the
   standard Forge helper methods and classes. It is not intended for
   general use by other mods, and the handler may throw an error if it
   is called unexpectedly.
  - param: slot - Slot to modify
  - param: stack - ItemStack to set slot to (may be empty).
- `private void setInventorySlotContents(int slot,  ItemStack stack)`
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

## SidedInvWrapper.InsertLimit

*interface* `net.minecraftforge.items.wrapper.SidedInvWrapper.InsertLimit`

Enclosing class: SidedInvWrapper

### Methods
- `int limitInsert(int wrapperSlot,  int invSlot,  ItemStack stack)`
