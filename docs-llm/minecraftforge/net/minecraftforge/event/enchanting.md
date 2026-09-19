# net.minecraftforge.event.enchanting

- [EnchantmentLevelSetEvent](#enchantmentlevelsetevent)
## EnchantmentLevelSetEvent

*class* `net.minecraftforge.event.enchanting.EnchantmentLevelSetEvent`

Fired when the enchantment level is set for each of the three potential enchantments in the enchanting table.
 The level is set to the vanilla value and can be modified by this event handler.

 The enchantRow is used to determine which enchantment level is being set, 1, 2, or 3. The power is a number
 from 0-15 and indicates how many bookshelves surround the enchanting table. The itemStack representing the item being
 enchanted is also available.

### Methods
- `public World getWorld()`
  Get the world object
  - returns: the world object
- `public BlockPos getPos()`
  Get the pos of the enchantment table
  - returns: the pos of the enchantment table
- `public int getEnchantRow()`
  Get the row for which the enchantment level is being set
  - returns: the row for which the enchantment level is being set
- `public int getPower()`
  Get the power (# of bookshelves) for the enchanting table
  - returns: the power (# of bookshelves) for the enchanting table
- `public ItemStack getItem()`
  Get the item being enchanted
  - returns: the item being enchanted
- `public int getOriginalLevel()`
  Get the original level of the enchantment for this row (0-30)
  - returns: the original level of the enchantment for this row (0-30)
- `public int getLevel()`
  Get the level of the enchantment for this row (0-30)
  - returns: the level of the enchantment for this row (0-30)
- `public void setLevel(int level)`
  Set the new level of the enchantment (0-30)
  - param: level - the new level of the enchantment (0-30)

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`
