# net.minecraftforge.fluids.capability

- [Class IFluidHandler.FluidAction](#class-ifluidhandler.fluidaction)
- [FluidHandlerBlockEntity](#fluidhandlerblockentity)
- [IFluidHandler](#ifluidhandler)
- [IFluidHandlerItem](#ifluidhandleritem)
- [ItemFluidContainer](#itemfluidcontainer)
## Class IFluidHandler.FluidAction

*enum* `net.minecraftforge.fluids.capability.Class IFluidHandler.FluidAction`

Enclosing interface: IFluidHandler

### Methods
- `public static IFluidHandler.FluidAction[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static IFluidHandler.FluidAction valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public boolean execute()`
- `public boolean simulate()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## FluidHandlerBlockEntity

*class* `net.minecraftforge.fluids.capability.FluidHandlerBlockEntity`

### Fields
- `protected FluidTank tank`
- `private final LazyOptional<IFluidHandler> holder`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public void load(CompoundTag tag)`
- `protected void saveAdditional(CompoundTag tag)`
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
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## IFluidHandler

*interface* `net.minecraftforge.fluids.capability.IFluidHandler`

Implement this interface as a capability which should handle fluids, generally storing them in
 one or more internal IFluidTank objects.

 A reference implementation is provided TileFluidHandler.

### Methods
- `int getTanks()`
  Returns the number of fluid storage units ("tanks") available
  - returns: The number of tanks available
- `@NotNull @NotNull FluidStack getFluidInTank(int tank)`
  Returns the FluidStack in a given tank.
  
   IMPORTANT: This FluidStack MUST NOT be modified. This method is not for
   altering internal contents. Any implementers who are able to detect modification via this method
   should throw an exception. It is ENTIRELY reasonable and likely that the stack returned here will be a copy.
  
   SERIOUSLY: DO NOT MODIFY THE RETURNED FLUIDSTACK
  - param: tank - Tank to query.
  - returns: FluidStack in a given tank. FluidStack.EMPTY if the tank is empty.
- `int getTankCapacity(int tank)`
  Retrieves the maximum fluid amount for a given tank.
  - param: tank - Tank to query.
  - returns: The maximum fluid amount held by the tank.
- `boolean isFluidValid(int tank,  @NotNull  @NotNull FluidStack stack)`
  This function is a way to determine which fluids can exist inside a given handler. General purpose tanks will
   basically always return TRUE for this.
  - param: tank - Tank to query for validity
  - param: stack - Stack to test with for validity
  - returns: TRUE if the tank can hold the FluidStack, not considering current state.
 (Basically, is a given fluid EVER allowed in this tank?) Return FALSE if the answer to that question is 'no.'
- `int fill(FluidStack resource,  IFluidHandler.FluidAction action)`
  Fills fluid into internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be filled.
  - param: action - If SIMULATE, fill will only be simulated.
  - returns: Amount of resource that was (or would have been, if simulated) filled.
- `@NotNull @NotNull FluidStack drain(FluidStack resource,  IFluidHandler.FluidAction action)`
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  - param: resource - FluidStack representing the Fluid and maximum amount of fluid to be drained.
  - param: action - If SIMULATE, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.
- `@NotNull @NotNull FluidStack drain(int maxDrain,  IFluidHandler.FluidAction action)`
  Drains fluid out of internal tanks, distribution is left entirely to the IFluidHandler.
  
   This method is not Fluid-sensitive.
  - param: maxDrain - Maximum amount of fluid to drain.
  - param: action - If SIMULATE, drain will only be simulated.
  - returns: FluidStack representing the Fluid and amount that was (or would have been, if
 simulated) drained.

## IFluidHandlerItem

*interface* `net.minecraftforge.fluids.capability.IFluidHandlerItem`

ItemStacks handled by an IFluidHandler may change, so this class allows
 users of the fluid handler to get the container after it has been used.

All Superinterfaces: IFluidHandler

### Methods
- `@NotNull @NotNull ItemStack getContainer()`
  Get the container currently acted on by this fluid handler.
   The ItemStack may be different from its initial state, in the case of fluid containers that have different items
   for their filled and empty states.
   May be an empty item if the container was drained and is consumable.

### Inherited methods
- from `net.minecraftforge.fluids.capability.IFluidHandler`: `drain`, `drain`, `fill`, `getFluidInTank`, `getTankCapacity`, `getTanks`, `isFluidValid`

## ItemFluidContainer

*class* `net.minecraftforge.fluids.capability.ItemFluidContainer`

A simple fluid container, to replace the functionality of the old FluidContainerRegistry and IFluidContainerItem.
 This fluid container may be set so that is can only completely filled or empty. (binary)
 It may also be set so that it gets consumed when it is drained. (consumable)

### Fields
- `protected final int capacity`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public ICapabilityProvider initCapabilities(@NotNull  @NotNull ItemStack stack,  @Nullable  @Nullable CompoundTag nbt)`
  Description copied from interface: IForgeItem
  Called from ItemStack.setItem, will hold extra data for the life of this
   ItemStack. Can be retrieved from stack.getCapabilities() The NBT can be null
   if this is not called from readNBT or if the item the stack is changing FROM
   is different then this item, or the previous item had no capabilities.
  
   This is called BEFORE the stacks item is set so you can use stack.getItem()
   to see the OLD item. Remember that getItem CAN return null.
  - param: stack - The ItemStack
  - param: nbt - NBT of this item serialized, or null.
  - returns: A holder instance associated with this ItemStack where you can hold
 capabilities for the life of this item.

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`
