# net.minecraftforge.fluids.capability.wrappers

- [BlockWrapper](#blockwrapper)
- [BlockWrapper.LiquidContainerBlockWrapper](#blockwrapper.liquidcontainerblockwrapper)
- [BucketPickupHandlerWrapper](#bucketpickuphandlerwrapper)
- [FluidBlockWrapper](#fluidblockwrapper)
- [FluidBucketWrapper](#fluidbucketwrapper)
## BlockWrapper

*class* `net.minecraftforge.fluids.capability.wrappers.BlockWrapper`

Wrapper around any block, only accounts for fluid placement, otherwise the block acts a void.
 If the block in question inherits from the Forge implementations,
 consider using FluidBlockWrapper.

### Fields
- `protected final BlockState state`
- `protected final Level world`
- `protected final BlockPos blockPos`

### Inherited fields
- from `net.minecraftforge.fluids.capability.templates.VoidFluidHandler`: `INSTANCE`

### Methods
- `public int fill(FluidStack resource,  IFluidHandler.FluidAction action)`
  Description copied from interface: IFluidHandler
  Fills fluid into internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be filled.
  - param: action - If SIMULATE, fill will only be simulated.
  - returns: Amount of resource that was (or would have been, if simulated) filled.

### Inherited methods
- from `net.minecraftforge.fluids.capability.templates.VoidFluidHandler`: `drain`, `drain`, `getFluidInTank`, `getTankCapacity`, `getTanks`, `isFluidValid`

## BlockWrapper.LiquidContainerBlockWrapper

*class* `net.minecraftforge.fluids.capability.wrappers.BlockWrapper.LiquidContainerBlockWrapper`

Enclosing class: BlockWrapper

### Fields
- `protected final LiquidBlockContainer liquidContainer`
- `protected final Level world`
- `protected final BlockPos blockPos`

### Inherited fields
- from `net.minecraftforge.fluids.capability.templates.VoidFluidHandler`: `INSTANCE`

### Methods
- `public int fill(FluidStack resource,  IFluidHandler.FluidAction action)`
  Description copied from interface: IFluidHandler
  Fills fluid into internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be filled.
  - param: action - If SIMULATE, fill will only be simulated.
  - returns: Amount of resource that was (or would have been, if simulated) filled.

### Inherited methods
- from `net.minecraftforge.fluids.capability.templates.VoidFluidHandler`: `drain`, `drain`, `getFluidInTank`, `getTankCapacity`, `getTanks`, `isFluidValid`

## BucketPickupHandlerWrapper

*class* `net.minecraftforge.fluids.capability.wrappers.BucketPickupHandlerWrapper`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `protected final BucketPickup bucketPickupHandler`
- `protected final Level world`
- `protected final BlockPos blockPos`

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

## FluidBlockWrapper

*class* `net.minecraftforge.fluids.capability.wrappers.FluidBlockWrapper`

### Fields
- `protected final IFluidBlock fluidBlock`
- `protected final Level world`
- `protected final BlockPos blockPos`

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

## FluidBucketWrapper

*class* `net.minecraftforge.fluids.capability.wrappers.FluidBucketWrapper`

Wrapper for vanilla and forge buckets.
 Swaps between empty bucket and filled bucket of the correct type.

### Fields
- `private final LazyOptional<IFluidHandlerItem> holder`
- `@NotNull protected @NotNull ItemStack container`

### Methods
- `@NotNull public @NotNull ItemStack getContainer()`
  Description copied from interface: IFluidHandlerItem
  Get the container currently acted on by this fluid handler.
   The ItemStack may be different from its initial state, in the case of fluid containers that have different items
   for their filled and empty states.
   May be an empty item if the container was drained and is consumable.
- `public boolean canFillFluidType(FluidStack fluid)`
- `@NotNull public @NotNull FluidStack getFluid()`
- `protected void setFluid(@NotNull  @NotNull FluidStack fluidStack)`
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
