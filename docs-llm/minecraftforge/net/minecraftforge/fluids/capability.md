# net.minecraftforge.fluids.capability

- [CapabilityFluidHandler](#capabilityfluidhandler)
- [FluidTankProperties](#fluidtankproperties)
- [FluidTankPropertiesWrapper](#fluidtankpropertieswrapper)
- [IFluidHandler](#ifluidhandler)
- [IFluidHandlerItem](#ifluidhandleritem)
- [IFluidTankProperties](#ifluidtankproperties)
- [ItemFluidContainer](#itemfluidcontainer)
- [TileFluidHandler](#tilefluidhandler)
## CapabilityFluidHandler

*class* `net.minecraftforge.fluids.capability.CapabilityFluidHandler`

### Fields
- `public static Capability<IFluidHandler> FLUID_HANDLER_CAPABILITY`
- `public static Capability<IFluidHandlerItem> FLUID_HANDLER_ITEM_CAPABILITY`

### Methods
- `public static void register()`

## FluidTankProperties

*class* `net.minecraftforge.fluids.capability.FluidTankProperties`

Basic implementation of IFluidTankProperties.

All Implemented Interfaces: IFluidTankProperties

### Methods
- `public static FluidTankProperties[] convert(FluidTankInfo[] fluidTankInfos)`
- `public FluidStack getContents()`
  - returns: A copy of the fluid contents of this tank. May be null.
 To modify the contents, use IFluidHandler.
- `public int getCapacity()`
  - returns: The maximum amount of fluid this tank can hold, in millibuckets.
- `public boolean canFill()`
  Description copied from interface: IFluidTankProperties
  Returns true if the tank can be filled at any time (even if it is currently full).
   It does not consider the contents or capacity of the tank.
  
   This value is constant. If the tank behavior is more complicated, returns true.
- `public boolean canDrain()`
  Description copied from interface: IFluidTankProperties
  Returns true if the tank can be drained at any time (even if it is currently empty).
   It does not consider the contents or capacity of the tank.
  
   This value is constant. If the tank behavior is more complicated, returns true.
- `public boolean canFillFluidType(FluidStack fluidStack)`
  Description copied from interface: IFluidTankProperties
  Returns true if the tank can be filled with a specific type of fluid.
   Used as a filter for fluid types.
  
   Does not consider the current contents or capacity of the tank,
   only whether it could ever fill with this type of fluid.
   FluidStack is used here because fluid properties can depend on NBT, the amount is ignored.
- `public boolean canDrainFluidType(FluidStack fluidStack)`
  Description copied from interface: IFluidTankProperties
  Returns true if the tank can drain out this a specific of fluid.
   Used as a filter for fluid types.
  
   Does not consider the current contents or capacity of the tank,
   only whether it could ever drain out this type of fluid.
   FluidStack is used here because fluid properties can depend on NBT, the amount is ignored.

## FluidTankPropertiesWrapper

*class* `net.minecraftforge.fluids.capability.FluidTankPropertiesWrapper`

Basic IFluidTankProperties wrapper for FluidTank.

All Implemented Interfaces: IFluidTankProperties

### Fields
- `protected final FluidTank tank`

### Methods
- `public FluidStack getContents()`
  - returns: A copy of the fluid contents of this tank. May be null.
 To modify the contents, use IFluidHandler.
- `public int getCapacity()`
  - returns: The maximum amount of fluid this tank can hold, in millibuckets.
- `public boolean canFill()`
  Description copied from interface: IFluidTankProperties
  Returns true if the tank can be filled at any time (even if it is currently full).
   It does not consider the contents or capacity of the tank.
  
   This value is constant. If the tank behavior is more complicated, returns true.
- `public boolean canDrain()`
  Description copied from interface: IFluidTankProperties
  Returns true if the tank can be drained at any time (even if it is currently empty).
   It does not consider the contents or capacity of the tank.
  
   This value is constant. If the tank behavior is more complicated, returns true.
- `public boolean canFillFluidType(FluidStack fluidStack)`
  Description copied from interface: IFluidTankProperties
  Returns true if the tank can be filled with a specific type of fluid.
   Used as a filter for fluid types.
  
   Does not consider the current contents or capacity of the tank,
   only whether it could ever fill with this type of fluid.
   FluidStack is used here because fluid properties can depend on NBT, the amount is ignored.
- `public boolean canDrainFluidType(FluidStack fluidStack)`
  Description copied from interface: IFluidTankProperties
  Returns true if the tank can drain out this a specific of fluid.
   Used as a filter for fluid types.
  
   Does not consider the current contents or capacity of the tank,
   only whether it could ever drain out this type of fluid.
   FluidStack is used here because fluid properties can depend on NBT, the amount is ignored.

## IFluidHandler

*interface* `net.minecraftforge.fluids.capability.IFluidHandler`

Implement this interface as a capability which should handle fluids, generally storing them in
 one or more internal IFluidTank objects.

 A reference implementation is provided TileFluidHandler.

### Methods
- `IFluidTankProperties[] getTankProperties()`
  Returns an array of objects which represent the internal tanks.
   These objects cannot be used to manipulate the internal tanks.
  - returns: Properties for the relevant internal tanks.
- `int fill(FluidStack resource,  boolean doFill)`
  Fills fluid into internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be filled.
  - param: doFill - If false, fill will only be simulated.
  - returns: Amount of resource that was (or would have been, if simulated) filled.
- `FluidStack drain(FluidStack resource,  boolean doDrain)`
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be drained.
  - param: doDrain - If false, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.
- `FluidStack drain(int maxDrain,  boolean doDrain)`
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  
   This method is not Fluid-sensitive.
  - param: maxDrain - Maximum amount of fluid to drain.
  - param: doDrain - If false, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.

## IFluidHandlerItem

*interface* `net.minecraftforge.fluids.capability.IFluidHandlerItem`

ItemStacks handled by an IFluidHandler may change, so this class allows
 users of the fluid handler to get the container after it has been used.

All Superinterfaces: IFluidHandler

### Methods
- `ItemStack getContainer()`
  Get the container currently acted on by this fluid handler.
   The ItemStack may be different from its initial state, in the case of fluid containers that have different items
   for their filled and empty states.
   May be an empty item if the container was drained and is consumable.

### Inherited methods
- from `net.minecraftforge.fluids.capability.IFluidHandler`: `drain`, `drain`, `fill`, `getTankProperties`

## IFluidTankProperties

*interface* `net.minecraftforge.fluids.capability.IFluidTankProperties`

Simplified Read-only Information about the internals of an IFluidHandler.
 This is useful for displaying information, and as hints for interacting with it.
 These properties are constant and do not depend on the fluid contents (except the contents themselves, of course).

 The information here may not tell the full story of how the tank actually works,
 for real fluid transactions you must use IFluidHandler to simulate, check, and then interact.
 None of the information in these properties is required to successfully interact using a IFluidHandler.

### Methods
- `FluidStack getContents()`
  - returns: A copy of the fluid contents of this tank. May be null.
 To modify the contents, use IFluidHandler.
- `int getCapacity()`
  - returns: The maximum amount of fluid this tank can hold, in millibuckets.
- `boolean canFill()`
  Returns true if the tank can be filled at any time (even if it is currently full).
   It does not consider the contents or capacity of the tank.
  
   This value is constant. If the tank behavior is more complicated, returns true.
- `boolean canDrain()`
  Returns true if the tank can be drained at any time (even if it is currently empty).
   It does not consider the contents or capacity of the tank.
  
   This value is constant. If the tank behavior is more complicated, returns true.
- `boolean canFillFluidType(FluidStack fluidStack)`
  Returns true if the tank can be filled with a specific type of fluid.
   Used as a filter for fluid types.
  
   Does not consider the current contents or capacity of the tank,
   only whether it could ever fill with this type of fluid.
   FluidStack is used here because fluid properties can depend on NBT, the amount is ignored.
- `boolean canDrainFluidType(FluidStack fluidStack)`
  Returns true if the tank can drain out this a specific of fluid.
   Used as a filter for fluid types.
  
   Does not consider the current contents or capacity of the tank,
   only whether it could ever drain out this type of fluid.
   FluidStack is used here because fluid properties can depend on NBT, the amount is ignored.

## ItemFluidContainer

*class* `net.minecraftforge.fluids.capability.ItemFluidContainer`

A simple fluid container, to replace the functionality of the old FluidContainerRegistry and IFluidContainerItem.
 This fluid container may be set so that is can only completely filled or empty. (binary)
 It may also be set so that it gets consumed when it is drained. (consumable)

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Fields
- `protected final int capacity`

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ICapabilityProvider initCapabilities(ItemStack stack,  NBTTagCompound nbt)`
  Description copied from class: Item
  Called from ItemStack.setItem, will hold extra data for the life of this ItemStack.
   Can be retrieved from stack.getCapabilities()
   The NBT can be null if this is not called from readNBT or if the item the stack is
   changing FROM is different then this item, or the previous item had no capabilities.
  
   This is called BEFORE the stacks item is set so you can use stack.getItem() to see the OLD item.
   Remember that getItem CAN return null.
  - param: stack - The ItemStack
  - param: nbt - NBT of this item serialized, or null.
  - returns: A holder instance associated with this ItemStack where you can hold capabilities for the life of this item.

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## TileFluidHandler

*class* `net.minecraftforge.fluids.capability.TileFluidHandler`

All Implemented Interfaces: ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `protected FluidTank tank`

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public void readFromNBT(NBTTagCompound tag)`
- `public NBTTagCompound writeToNBT(NBTTagCompound tag)`
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

### Inherited methods
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getDisplayName`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getUpdatePacket`, `getUpdateTag`, `getWorld`, `handleUpdateTag`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`
