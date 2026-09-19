# net.minecraftforge.event.furnace

- [FurnaceFuelBurnTimeEvent](#furnacefuelburntimeevent)
## FurnaceFuelBurnTimeEvent

*class* `net.minecraftforge.event.furnace.FurnaceFuelBurnTimeEvent`

FurnaceFuelBurnTimeEvent is fired when determining the fuel value for an ItemStack.

 To set the burn time of your own item, use Item.getItemBurnTime(ItemStack) instead.

 This event is fired from ForgeEventFactory.getItemBurnTime(ItemStack).

 This event is Cancelable to prevent later handlers from changing the value.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public ItemStack getItemStack()`
  Get the ItemStack "fuel" in question.
- `public void setBurnTime(int burnTime)`
  Set the burn time for the given ItemStack.
   Setting it to 0 will prevent the item from being used as fuel, overriding vanilla's decision.
   Setting it to -1 will let vanilla decide on the fuel value, this is the default.
- `public int getBurnTime()`
  The resulting value of this event, the burn time for the ItemStack.
   A value of 0 will prevent the item from being used as fuel, overriding vanilla's decision.
   A value of -1 will let vanilla decide on the fuel value, this is the default for Item.getItemBurnTime(ItemStack).

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`
