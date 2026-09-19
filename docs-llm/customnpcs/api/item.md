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
- `java.lang.String getArmorMaterial()`

### Inherited methods
- from `noppes.npcs.api.item.IItemStack`: `addEnchantment`, `compare`, `copy`, `damageItem`, `getAttackDamage`, `getAttribute`, `getDisplayName`, `getFoodLevel`, `getItemDamage`, `getItemName`, `getItemNbt`, `getLore`, `getMaxItemDamage`, `getMaxStackSize`, `getMCItemStack`, `getName`, `getNbt`, `getStackSize`, `getStoreddata`, `getTempdata`, `getType`, `hasAttribute`, `hasCustomName`, `hasEnchant`, `hasNbt`, `isBlock`, `isBook`, `isEmpty`, `isEnchanted`, `isWearable`, `removeEnchant`, `removeNbt`, `setAttribute`, `setAttribute`, `setCustomName`, `setItemDamage`, `setLore`, `setStackSize`

## IItemBlock

*interface* `noppes.npcs.api.item.IItemBlock`

All Superinterfaces: IItemStack

### Methods
- `java.lang.String getBlockName()`

### Inherited methods
- from `noppes.npcs.api.item.IItemStack`: `addEnchantment`, `compare`, `copy`, `damageItem`, `getAttackDamage`, `getAttribute`, `getDisplayName`, `getFoodLevel`, `getItemDamage`, `getItemName`, `getItemNbt`, `getLore`, `getMaxItemDamage`, `getMaxStackSize`, `getMCItemStack`, `getName`, `getNbt`, `getStackSize`, `getStoreddata`, `getTempdata`, `getType`, `hasAttribute`, `hasCustomName`, `hasEnchant`, `hasNbt`, `isBlock`, `isBook`, `isEmpty`, `isEnchanted`, `isWearable`, `removeEnchant`, `removeNbt`, `setAttribute`, `setAttribute`, `setCustomName`, `setItemDamage`, `setLore`, `setStackSize`

## IItemBook

*interface* `noppes.npcs.api.item.IItemBook`

All Superinterfaces: IItemStack

### Methods
- `java.lang.String[] getText()`
  - returns: If the item is a book, returns a string array with book pages
- `void setText​(java.lang.String[] pages)`
  Set the text for multiple pages
- `java.lang.String getAuthor()`
- `void setAuthor​(java.lang.String author)`
- `java.lang.String getTitle()`
- `void setTitle​(java.lang.String title)`

### Inherited methods
- from `noppes.npcs.api.item.IItemStack`: `addEnchantment`, `compare`, `copy`, `damageItem`, `getAttackDamage`, `getAttribute`, `getDisplayName`, `getFoodLevel`, `getItemDamage`, `getItemName`, `getItemNbt`, `getLore`, `getMaxItemDamage`, `getMaxStackSize`, `getMCItemStack`, `getName`, `getNbt`, `getStackSize`, `getStoreddata`, `getTempdata`, `getType`, `hasAttribute`, `hasCustomName`, `hasEnchant`, `hasNbt`, `isBlock`, `isBook`, `isEmpty`, `isEnchanted`, `isWearable`, `removeEnchant`, `removeNbt`, `setAttribute`, `setAttribute`, `setCustomName`, `setItemDamage`, `setLore`, `setStackSize`

## IItemScripted

*interface* `noppes.npcs.api.item.IItemScripted`

All Superinterfaces: IItemStack

### Methods
- `boolean hasTexture​(int damage)`
- `java.lang.String getTexture​(int damage)`
  - param: damage -
  - returns: Returns the texture associated with this damage value
- `void setTexture​(int damage, java.lang.String texture)`
  All scripted items with the same damage value have the same texture.
   To change the actual texture of the item call setItemDamage afterwards with the same damage value
  - param: damage - The damage value
  - param: texture - Texture you want this damage value to have
- `void setMaxStackSize​(int size)`
- `double getDurabilityValue()`
  - returns: Returns a value between 0 and 1, 0 is an empty durability bar and 1 a full one
- `void setDurabilityValue​(float value)`
  - param: value - A value between 0 and 1, 0 is an empty durability bar and 1 a full one
- `boolean getDurabilityShow()`
  - returns: Returns whether the durability is visible or not
- `void setDurabilityShow​(boolean bo)`
  - param: bo - Set whether the durability is visible
- `int getDurabilityColor()`
  - returns: Returns the customly set durability color for the bar. If no custom value is set it will return -1
- `void setDurabilityColor​(int color)`
  - param: color - Set a custom color hex value for durability bar.
- `int getColor()`
  - returns: Returns the color of the item. -1 for no color
- `void setColor​(int color)`
  - param: color - Set a custom color hex value for the item tint. -1 to remove the color

### Inherited methods
- from `noppes.npcs.api.item.IItemStack`: `addEnchantment`, `compare`, `copy`, `damageItem`, `getAttackDamage`, `getAttribute`, `getDisplayName`, `getFoodLevel`, `getItemDamage`, `getItemName`, `getItemNbt`, `getLore`, `getMaxItemDamage`, `getMaxStackSize`, `getMCItemStack`, `getName`, `getNbt`, `getStackSize`, `getStoreddata`, `getTempdata`, `getType`, `hasAttribute`, `hasCustomName`, `hasEnchant`, `hasNbt`, `isBlock`, `isBook`, `isEmpty`, `isEnchanted`, `isWearable`, `removeEnchant`, `removeNbt`, `setAttribute`, `setAttribute`, `setCustomName`, `setItemDamage`, `setLore`, `setStackSize`

## IItemStack

*interface* `noppes.npcs.api.item.IItemStack`

### Methods
- `int getStackSize()`
- `void setStackSize​(int size)`
  - param: size - The size of the itemstack. A number between 1 and 64
- `int getMaxStackSize()`
- `int getItemDamage()`
  - returns: Returns the item damage of this item. For tools this is the durability for other items the color and more.
- `void setItemDamage​(int value)`
  - param: value - The value to be set as item damage. For tools this is the durability for other items the color and more.
- `int getMaxItemDamage()`
- `double getAttackDamage()`
- `void damageItem​(int damage, IEntityLiving living)`
- `void addEnchantment​(java.lang.String id, int strenght)`
  - param: id - The enchantment id
  - param: strenght - The strenght of the enchantment
- `boolean isEnchanted()`
- `boolean hasEnchant​(java.lang.String id)`
  - param: id - The enchantment id
- `boolean removeEnchant​(java.lang.String id)`
  - param: id - The enchantment id
  - returns: Returns whether something was removed or not
- `boolean isBlock()` (deprecated)
  - returns: Returns whether or not this item is a block
- `boolean isWearable()`
- `boolean hasCustomName()`
  - returns: Return whether or not the item has a custom name
- `void setCustomName​(java.lang.String name)`
  - param: name - The custom name this item will get
- `java.lang.String getDisplayName()`
  - returns: Return the ingame displayed name. This is either the item name or the custom name if it has one.
- `java.lang.String getItemName()`
  - returns: Get the items ingame name. Use this incase the item ingame has custom name and you want the original name.
- `java.lang.String getName()`
  - returns: The minecraft name for this item
- `boolean isBook()` (deprecated)
  - returns: Whether this is a writable book item. If it is check IItemBook for more info
- `IItemStack copy()`
  - returns: A copy of the ItemStack
- `net.minecraft.item.ItemStack getMCItemStack()`
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
- `java.lang.String[] getLore()`
- `void setLore​(java.lang.String[] lore)`
- `void setAttribute​(java.lang.String name, double value)` (deprecated)
  - param: name - Attribute name see (https://minecraft.gamepedia.com/Attribute)
  - param: value -
- `void setAttribute​(java.lang.String name, double value, int slot)`
  - param: name - Attribute name see (https://minecraft.gamepedia.com/Attribute)
  - param: value -
  - param: slot - Slot in which the attribute is active -1:ALL, 0:MAINHAND, 1:OFFHAND, 2:FEET, 3:LEGS, 4:CHEST, 5:HEAD
- `double getAttribute​(java.lang.String name)`
  - param: name - Attribute name see (https://minecraft.gamepedia.com/Attribute)
  - returns: Returns the value of this attribute
- `boolean hasAttribute​(java.lang.String name)`
  - param: name - Attribute name see (https://minecraft.gamepedia.com/Attribute)
  - returns: Whether or not this item has the attribute
- `IData getTempdata()`
  Temp data stores anything but only untill it's reloaded
- `IData getStoreddata()`
  Stored data persists through world restart. Unlike tempdata only Strings and Numbers can be saved
- `int getFoodLevel()`
  - returns: Returns 0 if the item isnt food and otherwise the amount it restores hunger
- `boolean compare​(IItemStack item, boolean ignoreNBT)`
