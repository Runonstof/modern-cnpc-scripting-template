# net.minecraftforge.fluids.capability.templates

- [EmptyFluidHandler](#emptyfluidhandler)
- [FluidHandlerItemStack](#fluidhandleritemstack)
- [FluidHandlerItemStack.Consumable](#fluidhandleritemstack.consumable)
- [FluidHandlerItemStack.SwapEmpty](#fluidhandleritemstack.swapempty)
- [FluidHandlerItemStackSimple](#fluidhandleritemstacksimple)
- [FluidHandlerItemStackSimple.Consumable](#fluidhandleritemstacksimple.consumable)
- [FluidHandlerItemStackSimple.SwapEmpty](#fluidhandleritemstacksimple.swapempty)
- [FluidTank](#fluidtank)
- [VoidFluidHandler](#voidfluidhandler)
## EmptyFluidHandler

*class* `net.minecraftforge.fluids.capability.templates.EmptyFluidHandler`

### Fields
- `public static final EmptyFluidHandler INSTANCE`

### Methods
- `public int getTanks()`
  Description copied from interface: IFluidHandler
  Returns the number of fluid storage units ("tanks") available
  - returns: The number of tanks available
- `@NotNull public @NotNull FluidStack getFluidInTank(int tank)`
  Description copied from interface: IFluidHandler
  Returns the FluidStack in a given tank.
  
   IMPORTANT: This FluidStack MUST NOT be modified. This method is not for
   altering internal contents. Any implementers who are able to detect modification via this method
   should throw an exception. It is ENTIRELY reasonable and likely that the stack returned here will be a copy.
  
   SERIOUSLY: DO NOT MODIFY THE RETURNED FLUIDSTACK
  - param: tank - Tank to query.
  - returns: FluidStack in a given tank. FluidStack.EMPTY if the tank is empty.
- `public int getTankCapacity(int tank)`
  Description copied from interface: IFluidHandler
  Retrieves the maximum fluid amount for a given tank.
  - param: tank - Tank to query.
  - returns: The maximum fluid amount held by the tank.
- `public boolean isFluidValid(int tank,  @NotNull  @NotNull FluidStack stack)`
  Description copied from interface: IFluidHandler
  This function is a way to determine which fluids can exist inside a given handler. General purpose tanks will
   basically always return TRUE for this.
  - param: tank - Tank to query for validity
  - param: stack - Stack to test with for validity
  - returns: TRUE if the tank can hold the FluidStack, not considering current state.
 (Basically, is a given fluid EVER allowed in this tank?) Return FALSE if the answer to that question is 'no.'
- `public int fill(FluidStack resource,  IFluidHandler.FluidAction action)`
  Description copied from interface: IFluidHandler
  Fills fluid into internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be filled.
  - param: action - If SIMULATE, fill will only be simulated.
  - returns: Amount of resource that was (or would have been, if simulated) filled.
- `@NotNull public @NotNull FluidStack drain(FluidStack resource,  IFluidHandler.FluidAction action)`
  Description copied from interface: IFluidHandler
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be drained.
  - param: action - If SIMULATE, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.
- `@NotNull public @NotNull FluidStack drain(int maxDrain,  IFluidHandler.FluidAction action)`
  Description copied from interface: IFluidHandler
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  
   This method is not Fluid-sensitive.
  - param: maxDrain - Maximum amount of fluid to drain.
  - param: action - If SIMULATE, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.

## FluidHandlerItemStack

*class* `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStack`

FluidHandlerItemStack is a template capability provider for ItemStacks.
 Data is stored directly in the vanilla NBT, in the same way as the old ItemFluidContainer.

 This class allows an ItemStack to contain any partial level of fluid up to its capacity, unlike FluidHandlerItemStackSimple

 Additional examples are provided to enable consumable fluid containers (see FluidHandlerItemStack.Consumable),
 fluid containers with different empty and full items (see FluidHandlerItemStack.SwapEmpty,

### Fields
- `public static final String FLUID_NBT_KEY` (= "Fluid")
- `private final LazyOptional<IFluidHandlerItem> holder`
- `@NotNull protected @NotNull ItemStack container`
- `protected int capacity`

### Methods
- `@NotNull public @NotNull ItemStack getContainer()`
  Description copied from interface: IFluidHandlerItem
  Get the container currently acted on by this fluid handler.
   The ItemStack may be different from its initial state, in the case of fluid containers that have different items
   for their filled and empty states.
   May be an empty item if the container was drained and is consumable.
- `@NotNull public @NotNull FluidStack getFluid()`
- `protected void setFluid(FluidStack fluid)`
- `public int getTanks()`
  Description copied from interface: IFluidHandler
  Returns the number of fluid storage units ("tanks") available
  - returns: The number of tanks available
- `@NotNull public @NotNull FluidStack getFluidInTank(int tank)`
  Description copied from interface: IFluidHandler
  Returns the FluidStack in a given tank.
  
   IMPORTANT: This FluidStack MUST NOT be modified. This method is not for
   altering internal contents. Any implementers who are able to detect modification via this method
   should throw an exception. It is ENTIRELY reasonable and likely that the stack returned here will be a copy.
  
   SERIOUSLY: DO NOT MODIFY THE RETURNED FLUIDSTACK
  - param: tank - Tank to query.
  - returns: FluidStack in a given tank. FluidStack.EMPTY if the tank is empty.
- `public int getTankCapacity(int tank)`
  Description copied from interface: IFluidHandler
  Retrieves the maximum fluid amount for a given tank.
  - param: tank - Tank to query.
  - returns: The maximum fluid amount held by the tank.
- `public boolean isFluidValid(int tank,  @NotNull  @NotNull FluidStack stack)`
  Description copied from interface: IFluidHandler
  This function is a way to determine which fluids can exist inside a given handler. General purpose tanks will
   basically always return TRUE for this.
  - param: tank - Tank to query for validity
  - param: stack - Stack to test with for validity
  - returns: TRUE if the tank can hold the FluidStack, not considering current state.
 (Basically, is a given fluid EVER allowed in this tank?) Return FALSE if the answer to that question is 'no.'
- `public int fill(FluidStack resource,  IFluidHandler.FluidAction doFill)`
  Description copied from interface: IFluidHandler
  Fills fluid into internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be filled.
  - param: doFill - If SIMULATE, fill will only be simulated.
  - returns: Amount of resource that was (or would have been, if simulated) filled.
- `@NotNull public @NotNull FluidStack drain(FluidStack resource,  IFluidHandler.FluidAction action)`
  Description copied from interface: IFluidHandler
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be drained.
  - param: action - If SIMULATE, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.
- `@NotNull public @NotNull FluidStack drain(int maxDrain,  IFluidHandler.FluidAction action)`
  Description copied from interface: IFluidHandler
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  
   This method is not Fluid-sensitive.
  - param: maxDrain - Maximum amount of fluid to drain.
  - param: action - If SIMULATE, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.
- `public boolean canFillFluidType(FluidStack fluid)`
- `public boolean canDrainFluidType(FluidStack fluid)`
- `protected void setContainerToEmpty()`
  Override this method for special handling.
   Can be used to swap out or destroy the container.
- `@NotNull public <T> @NotNull LazyOptional<T> getCapability(@NotNull  @NotNull Capability<T> capability,  @Nullable  @Nullable Direction facing)`
  Description copied from interface: ICapabilityProvider
  Retrieves the Optional handler for the capability requested on the specific side.
   The return value CAN be the same for multiple faces.
   Modders are encouraged to cache this value, using the listener capabilities of the Optional to
   be notified if the requested capability get lost.
  - param: capability - The capability to check
  - param: facing - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested an optional holding the requested capability.

### Inherited methods
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`

## FluidHandlerItemStack.Consumable

*class* `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStack.Consumable`

Destroys the container item when it's emptied.

Enclosing class: FluidHandlerItemStack

### Inherited fields
- from `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStack`: `capacity`, `container`, `FLUID_NBT_KEY`

### Methods
- `protected void setContainerToEmpty()`
  Description copied from class: FluidHandlerItemStack
  Override this method for special handling.
   Can be used to swap out or destroy the container.

### Inherited methods
- from `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStack`: `canDrainFluidType`, `canFillFluidType`, `drain`, `drain`, `fill`, `getCapability`, `getContainer`, `getFluid`, `getFluidInTank`, `getTankCapacity`, `getTanks`, `isFluidValid`, `setFluid`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`

## FluidHandlerItemStack.SwapEmpty

*class* `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStack.SwapEmpty`

Swaps the container item for a different one when it's emptied.

Enclosing class: FluidHandlerItemStack

### Fields
- `protected final ItemStack emptyContainer`

### Inherited fields
- from `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStack`: `capacity`, `container`, `FLUID_NBT_KEY`

### Methods
- `protected void setContainerToEmpty()`
  Description copied from class: FluidHandlerItemStack
  Override this method for special handling.
   Can be used to swap out or destroy the container.

### Inherited methods
- from `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStack`: `canDrainFluidType`, `canFillFluidType`, `drain`, `drain`, `fill`, `getCapability`, `getContainer`, `getFluid`, `getFluidInTank`, `getTankCapacity`, `getTanks`, `isFluidValid`, `setFluid`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`

## FluidHandlerItemStackSimple

*class* `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStackSimple`

FluidHandlerItemStackSimple is a template capability provider for ItemStacks.
 Data is stored directly in the vanilla NBT, in the same way as the old ItemFluidContainer.

 This implementation only allows item containers to be fully filled or emptied, similar to vanilla buckets.

### Fields
- `public static final String FLUID_NBT_KEY` (= "Fluid")
- `private final LazyOptional<IFluidHandlerItem> holder`
- `@NotNull protected @NotNull ItemStack container`
- `protected int capacity`

### Methods
- `@NotNull public @NotNull ItemStack getContainer()`
  Description copied from interface: IFluidHandlerItem
  Get the container currently acted on by this fluid handler.
   The ItemStack may be different from its initial state, in the case of fluid containers that have different items
   for their filled and empty states.
   May be an empty item if the container was drained and is consumable.
- `@NotNull public @NotNull FluidStack getFluid()`
- `protected void setFluid(FluidStack fluid)`
- `public int getTanks()`
  Description copied from interface: IFluidHandler
  Returns the number of fluid storage units ("tanks") available
  - returns: The number of tanks available
- `@NotNull public @NotNull FluidStack getFluidInTank(int tank)`
  Description copied from interface: IFluidHandler
  Returns the FluidStack in a given tank.
  
   IMPORTANT: This FluidStack MUST NOT be modified. This method is not for
   altering internal contents. Any implementers who are able to detect modification via this method
   should throw an exception. It is ENTIRELY reasonable and likely that the stack returned here will be a copy.
  
   SERIOUSLY: DO NOT MODIFY THE RETURNED FLUIDSTACK
  - param: tank - Tank to query.
  - returns: FluidStack in a given tank. FluidStack.EMPTY if the tank is empty.
- `public int getTankCapacity(int tank)`
  Description copied from interface: IFluidHandler
  Retrieves the maximum fluid amount for a given tank.
  - param: tank - Tank to query.
  - returns: The maximum fluid amount held by the tank.
- `public boolean isFluidValid(int tank,  @NotNull  @NotNull FluidStack stack)`
  Description copied from interface: IFluidHandler
  This function is a way to determine which fluids can exist inside a given handler. General purpose tanks will
   basically always return TRUE for this.
  - param: tank - Tank to query for validity
  - param: stack - Stack to test with for validity
  - returns: TRUE if the tank can hold the FluidStack, not considering current state.
 (Basically, is a given fluid EVER allowed in this tank?) Return FALSE if the answer to that question is 'no.'
- `public int fill(@NotNull  @NotNull FluidStack resource,  IFluidHandler.FluidAction action)`
  Description copied from interface: IFluidHandler
  Fills fluid into internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be filled.
  - param: action - If SIMULATE, fill will only be simulated.
  - returns: Amount of resource that was (or would have been, if simulated) filled.
- `@NotNull public @NotNull FluidStack drain(FluidStack resource,  IFluidHandler.FluidAction action)`
  Description copied from interface: IFluidHandler
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be drained.
  - param: action - If SIMULATE, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.
- `@NotNull public @NotNull FluidStack drain(int maxDrain,  IFluidHandler.FluidAction action)`
  Description copied from interface: IFluidHandler
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  
   This method is not Fluid-sensitive.
  - param: maxDrain - Maximum amount of fluid to drain.
  - param: action - If SIMULATE, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.
- `public boolean canFillFluidType(FluidStack fluid)`
- `public boolean canDrainFluidType(FluidStack fluid)`
- `protected void setContainerToEmpty()`
  Override this method for special handling.
   Can be used to swap out the container's item for a different one with "container.setItem".
   Can be used to destroy the container with "container.stackSize--"
- `@NotNull public <T> @NotNull LazyOptional<T> getCapability(@NotNull  @NotNull Capability<T> capability,  @Nullable  @Nullable Direction facing)`
  Description copied from interface: ICapabilityProvider
  Retrieves the Optional handler for the capability requested on the specific side.
   The return value CAN be the same for multiple faces.
   Modders are encouraged to cache this value, using the listener capabilities of the Optional to
   be notified if the requested capability get lost.
  - param: capability - The capability to check
  - param: facing - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested an optional holding the requested capability.

### Inherited methods
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`

## FluidHandlerItemStackSimple.Consumable

*class* `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStackSimple.Consumable`

Destroys the container item when it's emptied.

Enclosing class: FluidHandlerItemStackSimple

### Inherited fields
- from `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStackSimple`: `capacity`, `container`, `FLUID_NBT_KEY`

### Methods
- `protected void setContainerToEmpty()`
  Description copied from class: FluidHandlerItemStackSimple
  Override this method for special handling.
   Can be used to swap out the container's item for a different one with "container.setItem".
   Can be used to destroy the container with "container.stackSize--"

### Inherited methods
- from `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStackSimple`: `canDrainFluidType`, `canFillFluidType`, `drain`, `drain`, `fill`, `getCapability`, `getContainer`, `getFluid`, `getFluidInTank`, `getTankCapacity`, `getTanks`, `isFluidValid`, `setFluid`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`

## FluidHandlerItemStackSimple.SwapEmpty

*class* `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStackSimple.SwapEmpty`

Swaps the container item for a different one when it's emptied.

Enclosing class: FluidHandlerItemStackSimple

### Fields
- `protected final ItemStack emptyContainer`

### Inherited fields
- from `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStackSimple`: `capacity`, `container`, `FLUID_NBT_KEY`

### Methods
- `protected void setContainerToEmpty()`
  Description copied from class: FluidHandlerItemStackSimple
  Override this method for special handling.
   Can be used to swap out the container's item for a different one with "container.setItem".
   Can be used to destroy the container with "container.stackSize--"

### Inherited methods
- from `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStackSimple`: `canDrainFluidType`, `canFillFluidType`, `drain`, `drain`, `fill`, `getCapability`, `getContainer`, `getFluid`, `getFluidInTank`, `getTankCapacity`, `getTanks`, `isFluidValid`, `setFluid`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`

## FluidTank

*class* `net.minecraftforge.fluids.capability.templates.FluidTank`

Flexible implementation of a Fluid Storage object. NOT REQUIRED.

### Fields
- `protected Predicate<FluidStack> validator`
- `@NotNull protected @NotNull FluidStack fluid`
- `protected int capacity`

### Methods
- `public FluidTank setCapacity(int capacity)`
- `public FluidTank setValidator(Predicate<FluidStack> validator)`
- `public boolean isFluidValid(FluidStack stack)`
  - param: stack - Fluidstack holding the Fluid to be queried.
  - returns: If the tank can hold the fluid (EVER, not at the time of query).
- `public int getCapacity()`
  - returns: Capacity of this fluid tank.
- `@NotNull public @NotNull FluidStack getFluid()`
  - returns: FluidStack representing the fluid in the tank, null if the tank is empty.
- `public int getFluidAmount()`
  - returns: Current amount of fluid in the tank.
- `public FluidTank readFromNBT(CompoundTag nbt)`
- `public CompoundTag writeToNBT(CompoundTag nbt)`
- `public int getTanks()`
  Description copied from interface: IFluidHandler
  Returns the number of fluid storage units ("tanks") available
  - returns: The number of tanks available
- `@NotNull public @NotNull FluidStack getFluidInTank(int tank)`
  Description copied from interface: IFluidHandler
  Returns the FluidStack in a given tank.
  
   IMPORTANT: This FluidStack MUST NOT be modified. This method is not for
   altering internal contents. Any implementers who are able to detect modification via this method
   should throw an exception. It is ENTIRELY reasonable and likely that the stack returned here will be a copy.
  
   SERIOUSLY: DO NOT MODIFY THE RETURNED FLUIDSTACK
  - param: tank - Tank to query.
  - returns: FluidStack in a given tank. FluidStack.EMPTY if the tank is empty.
- `public int getTankCapacity(int tank)`
  Description copied from interface: IFluidHandler
  Retrieves the maximum fluid amount for a given tank.
  - param: tank - Tank to query.
  - returns: The maximum fluid amount held by the tank.
- `public boolean isFluidValid(int tank,  @NotNull  @NotNull FluidStack stack)`
  Description copied from interface: IFluidHandler
  This function is a way to determine which fluids can exist inside a given handler. General purpose tanks will
   basically always return TRUE for this.
  - param: tank - Tank to query for validity
  - param: stack - Stack to test with for validity
  - returns: TRUE if the tank can hold the FluidStack, not considering current state.
 (Basically, is a given fluid EVER allowed in this tank?) Return FALSE if the answer to that question is 'no.'
- `public int fill(FluidStack resource,  IFluidHandler.FluidAction action)`
  Description copied from interface: IFluidHandler
  Fills fluid into internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be filled.
  - param: action - If SIMULATE, fill will only be simulated.
  - returns: Amount of resource that was (or would have been, if simulated) filled.
- `@NotNull public @NotNull FluidStack drain(FluidStack resource,  IFluidHandler.FluidAction action)`
  Description copied from interface: IFluidHandler
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be drained.
  - param: action - If SIMULATE, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.
- `@NotNull public @NotNull FluidStack drain(int maxDrain,  IFluidHandler.FluidAction action)`
  Description copied from interface: IFluidHandler
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  
   This method is not Fluid-sensitive.
  - param: maxDrain - Maximum amount of fluid to drain.
  - param: action - If SIMULATE, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.
- `protected void onContentsChanged()`
- `public void setFluid(FluidStack stack)`
- `public boolean isEmpty()`
- `public int getSpace()`

## VoidFluidHandler

*class* `net.minecraftforge.fluids.capability.templates.VoidFluidHandler`

VoidFluidHandler is a template fluid handler that can be filled indefinitely without ever getting full.
 It does not store fluid that gets filled into it, but "destroys" it upon receiving it.

### Fields
- `public static final VoidFluidHandler INSTANCE`

### Methods
- `public int getTanks()`
  Description copied from interface: IFluidHandler
  Returns the number of fluid storage units ("tanks") available
  - returns: The number of tanks available
- `@NotNull public @NotNull FluidStack getFluidInTank(int tank)`
  Description copied from interface: IFluidHandler
  Returns the FluidStack in a given tank.
  
   IMPORTANT: This FluidStack MUST NOT be modified. This method is not for
   altering internal contents. Any implementers who are able to detect modification via this method
   should throw an exception. It is ENTIRELY reasonable and likely that the stack returned here will be a copy.
  
   SERIOUSLY: DO NOT MODIFY THE RETURNED FLUIDSTACK
  - param: tank - Tank to query.
  - returns: FluidStack in a given tank. FluidStack.EMPTY if the tank is empty.
- `public int getTankCapacity(int tank)`
  Description copied from interface: IFluidHandler
  Retrieves the maximum fluid amount for a given tank.
  - param: tank - Tank to query.
  - returns: The maximum fluid amount held by the tank.
- `public boolean isFluidValid(int tank,  @NotNull  @NotNull FluidStack stack)`
  Description copied from interface: IFluidHandler
  This function is a way to determine which fluids can exist inside a given handler. General purpose tanks will
   basically always return TRUE for this.
  - param: tank - Tank to query for validity
  - param: stack - Stack to test with for validity
  - returns: TRUE if the tank can hold the FluidStack, not considering current state.
 (Basically, is a given fluid EVER allowed in this tank?) Return FALSE if the answer to that question is 'no.'
- `public int fill(FluidStack resource,  IFluidHandler.FluidAction action)`
  Description copied from interface: IFluidHandler
  Fills fluid into internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be filled.
  - param: action - If SIMULATE, fill will only be simulated.
  - returns: Amount of resource that was (or would have been, if simulated) filled.
- `@NotNull public @NotNull FluidStack drain(FluidStack resource,  IFluidHandler.FluidAction action)`
  Description copied from interface: IFluidHandler
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be drained.
  - param: action - If SIMULATE, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.
- `@NotNull public @NotNull FluidStack drain(int maxDrain,  IFluidHandler.FluidAction action)`
  Description copied from interface: IFluidHandler
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  
   This method is not Fluid-sensitive.
  - param: maxDrain - Maximum amount of fluid to drain.
  - param: action - If SIMULATE, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.
