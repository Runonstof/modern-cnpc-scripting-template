# net.minecraftforge.fluids.capability.templates

- [EmptyFluidHandler](#emptyfluidhandler)
- [FluidHandlerConcatenate](#fluidhandlerconcatenate)
- [FluidHandlerFluidMap](#fluidhandlerfluidmap)
- [FluidHandlerItemStack](#fluidhandleritemstack)
- [FluidHandlerItemStack.Consumable](#fluidhandleritemstack.consumable)
- [FluidHandlerItemStack.SwapEmpty](#fluidhandleritemstack.swapempty)
- [FluidHandlerItemStackSimple](#fluidhandleritemstacksimple)
- [FluidHandlerItemStackSimple.Consumable](#fluidhandleritemstacksimple.consumable)
- [FluidHandlerItemStackSimple.SwapEmpty](#fluidhandleritemstacksimple.swapempty)
- [VoidFluidHandler](#voidfluidhandler)
## EmptyFluidHandler

*class* `net.minecraftforge.fluids.capability.templates.EmptyFluidHandler`

All Implemented Interfaces: IFluidHandler, IFluidTank

### Fields
- `public static final EmptyFluidHandler INSTANCE`
- `public static final FluidTankInfo EMPTY_TANK_INFO`
- `public static final IFluidTankProperties EMPTY_TANK_PROPERTIES`
- `public static final IFluidTankProperties[] EMPTY_TANK_PROPERTIES_ARRAY`

### Methods
- `public IFluidTankProperties[] getTankProperties()`
  Description copied from interface: IFluidHandler
  Returns an array of objects which represent the internal tanks.
   These objects cannot be used to manipulate the internal tanks.
  - returns: Properties for the relevant internal tanks.
- `public FluidStack getFluid()`
  - returns: FluidStack representing the fluid in the tank, null if the tank is empty.
- `public int getFluidAmount()`
  - returns: Current amount of fluid in the tank.
- `public int getCapacity()`
  - returns: Capacity of this fluid tank.
- `public FluidTankInfo getInfo()`
  Description copied from interface: IFluidTank
  Returns a wrapper object FluidTankInfo containing the capacity of the tank and the
   FluidStack it holds.
  
   Should prevent manipulation of the IFluidTank. See FluidTank.
  - returns: State information for the IFluidTank.
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

## FluidHandlerConcatenate

*class* `net.minecraftforge.fluids.capability.templates.FluidHandlerConcatenate`

FluidHandlerConcatenate is a template class for concatenating multiple handlers into one.
 If each tank is restricted to exactly one type of fluid, then use FluidHandlerFluidMap as it is more efficient.

All Implemented Interfaces: IFluidHandler

### Fields
- `protected final IFluidHandler[] subHandlers`

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

## FluidHandlerFluidMap

*class* `net.minecraftforge.fluids.capability.templates.FluidHandlerFluidMap`

FluidHandlerFluidMap is a template class for concatenating multiple handlers into one,
 where each handler is associated with a different fluid.

All Implemented Interfaces: IFluidHandler

### Fields
- `protected final java.util.Map<Fluid,IFluidHandler> handlers`

### Methods
- `public FluidHandlerFluidMap addHandler(Fluid fluid,  IFluidHandler handler)`
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

## FluidHandlerItemStack

*class* `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStack`

FluidHandlerItemStack is a template capability provider for ItemStacks.
 Data is stored directly in the vanilla NBT, in the same way as the old ItemFluidContainer.

 This class allows an itemStack to contain any partial level of fluid up to its capacity, unlike FluidHandlerItemStackSimple

 Additional examples are provided to enable consumable fluid containers (see FluidHandlerItemStack.Consumable),
 fluid containers with different empty and full items (see FluidHandlerItemStack.SwapEmpty,

All Implemented Interfaces: ICapabilityProvider, IFluidHandler, IFluidHandlerItem

### Fields
- `public static final java.lang.String FLUID_NBT_KEY` (= "Fluid")
- `protected ItemStack container`
- `protected int capacity`

### Methods
- `public ItemStack getContainer()`
  Description copied from interface: IFluidHandlerItem
  Get the container currently acted on by this fluid handler.
   The ItemStack may be different from its initial state, in the case of fluid containers that have different items
   for their filled and empty states.
   May be an empty item if the container was drained and is consumable.
- `public FluidStack getFluid()`
- `protected void setFluid(FluidStack fluid)`
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
- `public boolean canFillFluidType(FluidStack fluid)`
- `public boolean canDrainFluidType(FluidStack fluid)`
- `protected void setContainerToEmpty()`
  Override this method for special handling.
   Can be used to swap out or destroy the container.
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

## FluidHandlerItemStack.Consumable

*class* `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStack.Consumable`

Destroys the container item when it's emptied.

All Implemented Interfaces: ICapabilityProvider, IFluidHandler, IFluidHandlerItem

Enclosing class: FluidHandlerItemStack

### Inherited fields
- from `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStack`: `capacity`, `container`, `FLUID_NBT_KEY`

### Methods
- `protected void setContainerToEmpty()`
  Description copied from class: FluidHandlerItemStack
  Override this method for special handling.
   Can be used to swap out or destroy the container.

### Inherited methods
- from `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStack`: `canDrainFluidType`, `canFillFluidType`, `drain`, `drain`, `fill`, `getCapability`, `getContainer`, `getFluid`, `getTankProperties`, `hasCapability`, `setFluid`

## FluidHandlerItemStack.SwapEmpty

*class* `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStack.SwapEmpty`

Swaps the container item for a different one when it's emptied.

All Implemented Interfaces: ICapabilityProvider, IFluidHandler, IFluidHandlerItem

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
- from `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStack`: `canDrainFluidType`, `canFillFluidType`, `drain`, `drain`, `fill`, `getCapability`, `getContainer`, `getFluid`, `getTankProperties`, `hasCapability`, `setFluid`

## FluidHandlerItemStackSimple

*class* `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStackSimple`

FluidHandlerItemStackSimple is a template capability provider for ItemStacks.
 Data is stored directly in the vanilla NBT, in the same way as the old ItemFluidContainer.

 This implementation only allows item containers to be fully filled or emptied, similar to vanilla buckets.

All Implemented Interfaces: ICapabilityProvider, IFluidHandler, IFluidHandlerItem

### Fields
- `public static final java.lang.String FLUID_NBT_KEY` (= "Fluid")
- `protected ItemStack container`
- `protected int capacity`

### Methods
- `public ItemStack getContainer()`
  Description copied from interface: IFluidHandlerItem
  Get the container currently acted on by this fluid handler.
   The ItemStack may be different from its initial state, in the case of fluid containers that have different items
   for their filled and empty states.
   May be an empty item if the container was drained and is consumable.
- `public FluidStack getFluid()`
- `protected void setFluid(FluidStack fluid)`
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
- `public boolean canFillFluidType(FluidStack fluid)`
- `public boolean canDrainFluidType(FluidStack fluid)`
- `protected void setContainerToEmpty()`
  Override this method for special handling.
   Can be used to swap out the container's item for a different one with "container.setItem".
   Can be used to destroy the container with "container.stackSize--"
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

## FluidHandlerItemStackSimple.Consumable

*class* `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStackSimple.Consumable`

Destroys the container item when it's emptied.

All Implemented Interfaces: ICapabilityProvider, IFluidHandler, IFluidHandlerItem

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
- from `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStackSimple`: `canDrainFluidType`, `canFillFluidType`, `drain`, `drain`, `fill`, `getCapability`, `getContainer`, `getFluid`, `getTankProperties`, `hasCapability`, `setFluid`

## FluidHandlerItemStackSimple.SwapEmpty

*class* `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStackSimple.SwapEmpty`

Swaps the container item for a different one when it's emptied.

All Implemented Interfaces: ICapabilityProvider, IFluidHandler, IFluidHandlerItem

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
- from `net.minecraftforge.fluids.capability.templates.FluidHandlerItemStackSimple`: `canDrainFluidType`, `canFillFluidType`, `drain`, `drain`, `fill`, `getCapability`, `getContainer`, `getFluid`, `getTankProperties`, `hasCapability`, `setFluid`

## VoidFluidHandler

*class* `net.minecraftforge.fluids.capability.templates.VoidFluidHandler`

VoidFluidHandler is a template fluid handler that can be filled indefinitely without ever getting full.
 It does not store fluid that gets filled into it, but "destroys" it upon receiving it.

All Implemented Interfaces: IFluidHandler, IFluidTank

### Fields
- `public static final EmptyFluidHandler INSTANCE`

### Methods
- `public IFluidTankProperties[] getTankProperties()`
  Description copied from interface: IFluidHandler
  Returns an array of objects which represent the internal tanks.
   These objects cannot be used to manipulate the internal tanks.
  - returns: Properties for the relevant internal tanks.
- `public FluidStack getFluid()`
  - returns: FluidStack representing the fluid in the tank, null if the tank is empty.
- `public int getFluidAmount()`
  - returns: Current amount of fluid in the tank.
- `public int getCapacity()`
  - returns: Capacity of this fluid tank.
- `public FluidTankInfo getInfo()`
  Description copied from interface: IFluidTank
  Returns a wrapper object FluidTankInfo containing the capacity of the tank and the
   FluidStack it holds.
  
   Should prevent manipulation of the IFluidTank. See FluidTank.
  - returns: State information for the IFluidTank.
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
