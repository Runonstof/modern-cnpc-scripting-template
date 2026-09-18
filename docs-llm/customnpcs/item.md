# noppes.npcs.api.item

- [IItemArmor](#iitemarmor)
- [IItemBlock](#iitemblock)
- [IItemBook](#iitembook)
- [IItemScripted](#iitemscripted)
- [IItemStack](#iitemstack)
## IItemArmor

*interface* `noppes.npcs.api.item.IItemArmor`

All Superinterfaces: IItemStack

### Methods
- `int getArmorSlot()`
- `String getArmorMaterial()`

### Inherited methods
- from `noppes.npcs.api.item.IItemStack`: `addEnchantment`, `compare`, `copy`, `damageItem`, `getAttackDamage`, `getAttribute`, `getDamage`, `getDisplayName`, `getFoodLevel`, `getItemName`, `getItemNbt`, `getLore`, `getMaxDamage`, `getMaxStackSize`, `getMCItemStack`, `getName`, `getNbt`, `getStackSize`, `getStoreddata`, `getTempdata`, `getType`, `hasAttribute`, `hasCustomName`, `hasEnchant`, `hasNbt`, `isBlock`, `isBook`, `isDamageable`, `isEmpty`, `isEnchanted`, `isWearable`, `removeEnchant`, `removeNbt`, `setAttribute`, `setAttribute`, `setCustomName`, `setDamage`, `setLore`, `setStackSize`

## IItemBlock

*interface* `noppes.npcs.api.item.IItemBlock`

All Superinterfaces: IItemStack

### Methods
- `String getBlockName()`

### Inherited methods
- from `noppes.npcs.api.item.IItemStack`: `addEnchantment`, `compare`, `copy`, `damageItem`, `getAttackDamage`, `getAttribute`, `getDamage`, `getDisplayName`, `getFoodLevel`, `getItemName`, `getItemNbt`, `getLore`, `getMaxDamage`, `getMaxStackSize`, `getMCItemStack`, `getName`, `getNbt`, `getStackSize`, `getStoreddata`, `getTempdata`, `getType`, `hasAttribute`, `hasCustomName`, `hasEnchant`, `hasNbt`, `isBlock`, `isBook`, `isDamageable`, `isEmpty`, `isEnchanted`, `isWearable`, `removeEnchant`, `removeNbt`, `setAttribute`, `setAttribute`, `setCustomName`, `setDamage`, `setLore`, `setStackSize`

## IItemBook

*interface* `noppes.npcs.api.item.IItemBook`

All Superinterfaces: IItemStack

### Methods
- `String[] getText()`
  - returns: If the item is a book, returns a string array with book pages
- `void setText(String[] pages)`
  Set the text for multiple pages
- `String getAuthor()`
- `void setAuthor(String author)`
- `String getTitle()`
- `void setTitle(String title)`

### Inherited methods
- from `noppes.npcs.api.item.IItemStack`: `addEnchantment`, `compare`, `copy`, `damageItem`, `getAttackDamage`, `getAttribute`, `getDamage`, `getDisplayName`, `getFoodLevel`, `getItemName`, `getItemNbt`, `getLore`, `getMaxDamage`, `getMaxStackSize`, `getMCItemStack`, `getName`, `getNbt`, `getStackSize`, `getStoreddata`, `getTempdata`, `getType`, `hasAttribute`, `hasCustomName`, `hasEnchant`, `hasNbt`, `isBlock`, `isBook`, `isDamageable`, `isEmpty`, `isEnchanted`, `isWearable`, `removeEnchant`, `removeNbt`, `setAttribute`, `setAttribute`, `setCustomName`, `setDamage`, `setLore`, `setStackSize`

## IItemScripted

*interface* `noppes.npcs.api.item.IItemScripted`

All Superinterfaces: IItemStack

### Methods
- `boolean hasTexture(int damage)`
- `String getTexture(int damage)` (deprecated)
- `String getTexture()`
- `void setTexture(int damage,  String texture)` (deprecated)
- `void setTexture(String texture)`
  - param: texture - Item the scripted item will use as texture
- `void setMaxStackSize(int size)`
- `double getDurabilityValue()`
  - returns: Returns a value between 0 and 1, 0 is an empty durability bar and 1 a full one
- `void setDurabilityValue(float value)`
  - param: value - A value between 0 and 1, 0 is an empty durability bar and 1 a full one
- `boolean getDurabilityShow()`
  - returns: Returns whether the durability is visible or not
- `void setDurabilityShow(boolean bo)`
  - param: bo - Set whether the durability is visible
- `int getDurabilityColor()`
  - returns: Returns the customly set durability color for the bar. If no custom value is set it will return -1
- `void setDurabilityColor(int color)`
  - param: color - Set a custom color hex value for durability bar.
- `int getColor()`
  - returns: Returns the color of the item. -1 for no color
- `void setColor(int color)`
  - param: color - Set a custom color hex value for the item tint. -1 to remove the color

### Inherited methods
- from `noppes.npcs.api.item.IItemStack`: `addEnchantment`, `compare`, `copy`, `damageItem`, `getAttackDamage`, `getAttribute`, `getDamage`, `getDisplayName`, `getFoodLevel`, `getItemName`, `getItemNbt`, `getLore`, `getMaxDamage`, `getMaxStackSize`, `getMCItemStack`, `getName`, `getNbt`, `getStackSize`, `getStoreddata`, `getTempdata`, `getType`, `hasAttribute`, `hasCustomName`, `hasEnchant`, `hasNbt`, `isBlock`, `isBook`, `isDamageable`, `isEmpty`, `isEnchanted`, `isWearable`, `removeEnchant`, `removeNbt`, `setAttribute`, `setAttribute`, `setCustomName`, `setDamage`, `setLore`, `setStackSize`

## IItemStack

*interface* `noppes.npcs.api.item.IItemStack`

### Methods
- `int getStackSize()`
- `void setStackSize(int size)`
  - param: size - The size of the itemstack. A number between 1 and 64
- `int getMaxStackSize()`
- `boolean isDamageable()`
- `int getDamage()`
  - returns: Returns the damage of this item. Only for items that have durability.
- `void setDamage(int value)`
  - param: value - The value to be set as item damage. Only for items that have durability.
- `int getMaxDamage()`
- `double getAttackDamage()`
- `void damageItem(int damage,  IMob living)`
- `void addEnchantment(String id,  int strenght)`
  - param: id - The enchantment id
  - param: strenght - The strenght of the enchantment
- `boolean isEnchanted()`
- `boolean hasEnchant(String id)`
  - param: id - The enchantment id
- `boolean removeEnchant(String id)`
  - param: id - The enchantment id
  - returns: Returns whether something was removed or not
- `boolean isBlock()` (deprecated)
  - returns: Returns whether or not this item is a block
- `boolean isWearable()`
- `boolean hasCustomName()`
  - returns: Return whether or not the item has a custom name
- `void setCustomName(String name)`
  - param: name - The custom name this item will get
- `String getDisplayName()`
  - returns: Return the ingame displayed name. This is either the item name or the custom name if it has one.
- `String getItemName()`
  - returns: Get the items ingame name. Use this incase the item ingame has custom name and you want the original name.
- `String getName()`
  - returns: The minecraft name for this item
- `boolean isBook()` (deprecated)
  - returns: Whether this is a writable book item. If it is check IItemBook for more info
- `IItemStack copy()`
  - returns: A copy of the ItemStack
- `net.minecraft.world.item.ItemStack getMCItemStack()`
  No support is given for this method. Dont use if you dont know what you are doing.
  - returns: Minecraft ItemStack
- `INbt getNbt()`
  - returns: Used to get the extra NBT, which is used by enchantments and customname
- `boolean hasNbt()`
  - returns: Returns false if the nbt of this itemstack is null or empty
- `void removeNbt()`
  Removes the nbt from the itemstack
- `INbt getItemNbt()`
  - returns: The entire item as nbt
- `boolean isEmpty()`
  - returns: Returns true if this itemstack is air or the stacksize is 0
- `int getType()`
- `String[] getLore()`
- `void setLore(String[] lore)`
- `void setAttribute(String name,  double value)` (deprecated)
  - param: name - Attribute name see (https://minecraft.gamepedia.com/Attribute)
  - param: value -
- `void setAttribute(String name,  double value,  int slot)`
  - param: name - Attribute name see (https://minecraft.gamepedia.com/Attribute)
  - param: value -
  - param: slot - Slot in which the attribute is active -1:ALL, 0:MAINHAND, 1:OFFHAND, 2:FEET, 3:LEGS, 4:CHEST, 5:HEAD
- `double getAttribute(String name)`
  - param: name - Attribute name see (https://minecraft.gamepedia.com/Attribute)
  - returns: Returns the value of this attribute
- `boolean hasAttribute(String name)`
  - param: name - Attribute name see (https://minecraft.gamepedia.com/Attribute)
  - returns: Whether or not this item has the attribute
- `IData getTempdata()`
  Temp data stores anything but only untill it's reloaded
- `IData getStoreddata()`
  Stored data persists through world restart. Unlike tempdata only Strings and Numbers can be saved
- `int getFoodLevel()`
  - returns: Returns 0 if the item isnt food and otherwise the amount it restores hunger
- `boolean compare(IItemStack item,  boolean ignoreNBT)`
