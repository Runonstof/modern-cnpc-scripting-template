# net.minecraftforge.fluids.capability.wrappers

- [BlockLiquidWrapper](#blockliquidwrapper)
- [BlockWrapper](#blockwrapper)
- [FluidBlockWrapper](#fluidblockwrapper)
- [FluidBucketWrapper](#fluidbucketwrapper)
## BlockLiquidWrapper

*class* `net.minecraftforge.fluids.capability.wrappers.BlockLiquidWrapper`

Wrapper to handle vanilla Water or Lava as an IFluidHandler.
 Methods are modeled after ItemBucket.onItemRightClick(World, EntityPlayer, EnumHand)

All Implemented Interfaces: IFluidHandler

### Fields
- `protected final BlockLiquid blockLiquid`
- `protected final World world`
- `protected final BlockPos blockPos`

### Methods
- `public IFluidTankProperties[] getTankProperties()`
  Description copied from interface: IFluidHandler
  Returns an array of objects which represent the internal tanks.
   These objects cannot be used to manipulate the internal tanks.
  - returns: Properties for the relevant internal tanks.
- `public int fill(FluidStack resource,  boolean doFill)`
  Description copied from interface: IFluidHandler
  Fills fluid into internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be filled.
  - param: doFill - If false, fill will only be simulated.
  - returns: Amount of resource that was (or would have been, if simulated) filled.
- `public FluidStack drain(FluidStack resource,  boolean doDrain)`
  Description copied from interface: IFluidHandler
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be drained.
  - param: doDrain - If false, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.
- `public FluidStack drain(int maxDrain,  boolean doDrain)`
  Description copied from interface: IFluidHandler
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  
   This method is not Fluid-sensitive.
  - param: maxDrain - Maximum amount of fluid to drain.
  - param: doDrain - If false, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.

## BlockWrapper

*class* `net.minecraftforge.fluids.capability.wrappers.BlockWrapper`

Wrapper around any block, only accounts for fluid placement, otherwise the block acts a void.
 If the block in question inherits from the default Vanilla or Forge implementations,
 consider using BlockLiquidWrapper or FluidBlockWrapper respectively.

All Implemented Interfaces: IFluidHandler, IFluidTank

### Fields
- `protected final Block block`
- `protected final World world`
- `protected final BlockPos blockPos`

### Inherited fields
- from `net.minecraftforge.fluids.capability.templates.VoidFluidHandler`: `INSTANCE`

### Methods
- `public int fill(FluidStack resource,  boolean doFill)`
  Description copied from interface: IFluidHandler
  Fills fluid into internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be filled.
  - param: doFill - If false, fill will only be simulated.
  - returns: Amount of resource that was (or would have been, if simulated) filled.

### Inherited methods
- from `net.minecraftforge.fluids.capability.templates.VoidFluidHandler`: `drain`, `drain`, `getCapacity`, `getFluid`, `getFluidAmount`, `getInfo`, `getTankProperties`

## FluidBlockWrapper

*class* `net.minecraftforge.fluids.capability.wrappers.FluidBlockWrapper`

Wrapper to handle IFluidBlock as an IFluidHandler

All Implemented Interfaces: IFluidHandler

### Fields
- `protected final IFluidBlock fluidBlock`
- `protected final World world`
- `protected final BlockPos blockPos`

### Methods
- `public IFluidTankProperties[] getTankProperties()`
  Description copied from interface: IFluidHandler
  Returns an array of objects which represent the internal tanks.
   These objects cannot be used to manipulate the internal tanks.
  - returns: Properties for the relevant internal tanks.
- `public int fill(FluidStack resource,  boolean doFill)`
  Description copied from interface: IFluidHandler
  Fills fluid into internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be filled.
  - param: doFill - If false, fill will only be simulated.
  - returns: Amount of resource that was (or would have been, if simulated) filled.
- `public FluidStack drain(FluidStack resource,  boolean doDrain)`
  Description copied from interface: IFluidHandler
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be drained.
  - param: doDrain - If false, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.
- `public FluidStack drain(int maxDrain,  boolean doDrain)`
  Description copied from interface: IFluidHandler
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  
   This method is not Fluid-sensitive.
  - param: maxDrain - Maximum amount of fluid to drain.
  - param: doDrain - If false, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.

## FluidBucketWrapper

*class* `net.minecraftforge.fluids.capability.wrappers.FluidBucketWrapper`

Wrapper for vanilla and forge buckets.
 Swaps between empty bucket and filled bucket of the correct type.

All Implemented Interfaces: ICapabilityProvider, IFluidHandler, IFluidHandlerItem

### Fields
- `protected ItemStack container`

### Methods
- `public ItemStack getContainer()`
  Description copied from interface: IFluidHandlerItem
  Get the container currently acted on by this fluid handler.
   The ItemStack may be different from its initial state, in the case of fluid containers that have different items
   for their filled and empty states.
   May be an empty item if the container was drained and is consumable.
- `public boolean canFillFluidType(FluidStack fluidStack)`
- `public FluidStack getFluid()`
- `@Deprecated protected void setFluid(Fluid fluid)` (deprecated)
  Deprecated. use the NBT-sensitive version setFluid(FluidStack)
- `protected void setFluid(FluidStack fluidStack)`
- `public IFluidTankProperties[] getTankProperties()`
  Description copied from interface: IFluidHandler
  Returns an array of objects which represent the internal tanks.
   These objects cannot be used to manipulate the internal tanks.
  - returns: Properties for the relevant internal tanks.
- `public int fill(FluidStack resource,  boolean doFill)`
  Description copied from interface: IFluidHandler
  Fills fluid into internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be filled.
  - param: doFill - If false, fill will only be simulated.
  - returns: Amount of resource that was (or would have been, if simulated) filled.
- `public FluidStack drain(FluidStack resource,  boolean doDrain)`
  Description copied from interface: IFluidHandler
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be drained.
  - param: doDrain - If false, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.
- `public FluidStack drain(int maxDrain,  boolean doDrain)`
  Description copied from interface: IFluidHandler
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  
   This method is not Fluid-sensitive.
  - param: maxDrain - Maximum amount of fluid to drain.
  - param: doDrain - If false, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.
- `public boolean hasCapability(Capability<?> capability,  EnumFacing facing)`
  Description copied from interface: ICapabilityProvider
  Determines if this object has support for the capability in question on the specific side.
   The return value of this MIGHT change during runtime if this object gains or loses support
   for a capability. It is not required to call this function before calling
   ICapabilityProvider.getCapability(Capability, EnumFacing).
  
   Basically, this method functions analogously to Map.containsKey(Object).
  
   Example:
   A Pipe getting a cover placed on one side causing it lose the Inventory attachment function for that side.
  
   This is a light weight version of getCapability, intended for metadata uses.
  - param: capability - The capability to check
  - param: facing - The Side to check from:
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: True if this object supports the capability. If true, then ICapabilityProvider.getCapability(Capability, EnumFacing)
 must not return null.
- `public <T> T getCapability(Capability<T> capability,  EnumFacing facing)`
  Description copied from interface: ICapabilityProvider
  Retrieves the handler for the capability requested on the specific side.
  
   The return value CAN be null if the object does not support the capability.
   The return value CAN be the same for multiple faces.
  
   Basically, this method functions analogously to Map.get(Object).
  - param: capability - The capability to check
  - param: facing - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested capability. Must NOT be null when ICapabilityProvider.hasCapability(Capability, EnumFacing)
 would return true.
