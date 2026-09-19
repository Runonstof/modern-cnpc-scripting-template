# net.minecraftforge.event.furnace

- [FurnaceFuelBurnTimeEvent](#furnacefuelburntimeevent)
## FurnaceFuelBurnTimeEvent

*class* `net.minecraftforge.event.furnace.FurnaceFuelBurnTimeEvent`

FurnaceFuelBurnTimeEvent is fired when determining the fuel value for an ItemStack.

 To set the burn time of your own item, use IForgeItem.getBurnTime(ItemStack, RecipeType) instead.

 This event is fired from ForgeEventFactory.getItemBurnTime(ItemStack, int, RecipeType).

 This event is Cancelable to prevent later handlers from changing the value.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `@NotNull private final @NotNull ItemStack itemStack`
- `@Nullable private final @Nullable RecipeType<?> recipeType`
- `private int burnTime`

### Methods
- `@NotNull public @NotNull ItemStack getItemStack()`
  Get the ItemStack "fuel" in question.
- `@Nullable public @Nullable RecipeType<?> getRecipeType()`
  Get the recipe type for which to obtain the burn time, if known.
- `public void setBurnTime(int burnTime)`
  Set the burn time for the given ItemStack.
   Setting it to 0 will prevent the item from being used as fuel, overriding vanilla's decision.
- `public int getBurnTime()`
  The resulting value of this event, the burn time for the ItemStack.
   A value of 0 will prevent the item from being used as fuel, overriding vanilla's decision.
