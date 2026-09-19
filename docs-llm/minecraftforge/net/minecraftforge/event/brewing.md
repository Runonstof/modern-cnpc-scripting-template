# net.minecraftforge.event.brewing

- [PlayerBrewedPotionEvent](#playerbrewedpotionevent)
- [PotionBrewEvent](#potionbrewevent)
- [PotionBrewEvent.Post](#potionbrewevent.post)
- [PotionBrewEvent.Pre](#potionbrewevent.pre)
## PlayerBrewedPotionEvent

*class* `net.minecraftforge.event.brewing.PlayerBrewedPotionEvent`

This event is called when a player picks up a potion from a brewing stand.

### Fields
- `private final ItemStack stack`

### Methods
- `@NotNull public @NotNull ItemStack getStack()`
  The ItemStack of the potion.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PotionBrewEvent

*class* `net.minecraftforge.event.brewing.PotionBrewEvent`

### Fields
- `private NonNullList<ItemStack> stacks`

### Methods
- `@NotNull public @NotNull ItemStack getItem(int index)`
- `public void setItem(int index,  @NotNull  @NotNull ItemStack stack)`
- `public int getLength()`

## PotionBrewEvent.Post

*class* `net.minecraftforge.event.brewing.PotionBrewEvent.Post`

PotionBrewEvent.Post is fired when a potion is brewed in the brewing stand.

 The event is fired during the BrewingStandBlockEntity#doBrew(Level, BlockPos, NonNullList) method invocation.

 PotionBrewEvent.stacks contains the itemstack array from the TileEntityBrewer holding all items in Brewer.

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: PotionBrewEvent

### Inherited methods
- from `net.minecraftforge.event.brewing.PotionBrewEvent`: `getItem`, `getLength`, `setItem`

## PotionBrewEvent.Pre

*class* `net.minecraftforge.event.brewing.PotionBrewEvent.Pre`

PotionBrewEvent.Pre is fired before vanilla brewing takes place.
 All changes made to the event's array will be made to the TileEntity if the event is canceled.

 The event is fired during the BrewingStandBlockEntity#doBrew(Level, BlockPos, NonNullList) method invocation.

 PotionBrewEvent.stacks contains the itemstack array from the TileEntityBrewer holding all items in Brewer.

 This event is Cancelable.

 If the event is not canceled, the vanilla brewing will take place instead of modded brewing.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

 If this event is canceled, and items have been modified, PotionBrewEvent.Post will automatically be fired.

Enclosing class: PotionBrewEvent

### Inherited methods
- from `net.minecraftforge.event.brewing.PotionBrewEvent`: `getItem`, `getLength`, `setItem`
