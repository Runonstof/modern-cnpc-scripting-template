# noppes.npcs.api.gui

- [IButton](#ibutton)
- [ICustomGui](#icustomgui)
- [ICustomGuiComponent](#icustomguicomponent)
- [IItemSlot](#iitemslot)
- [ILabel](#ilabel)
- [IScroll](#iscroll)
- [ITextField](#itextfield)
- [ITexturedButton](#itexturedbutton)
- [ITexturedRect](#itexturedrect)
## IButton

*interface* `noppes.npcs.api.gui.IButton`

All Superinterfaces: ICustomGuiComponent

### Methods
- `int getWidth()`
- `int getHeight()`
- `IButton setSize​(int width, int height)`
- `java.lang.String getLabel()`
- `IButton setLabel​(java.lang.String label)`
- `java.lang.String getTexture()`
- `boolean hasTexture()`
- `IButton setTexture​(java.lang.String texture)`
- `int getTextureX()`
- `int getTextureY()`
- `IButton setTextureOffset​(int textureX, int textureY)`

### Inherited methods
- from `noppes.npcs.api.gui.ICustomGuiComponent`: `getHoverText`, `getID`, `getPosX`, `getPosY`, `hasHoverText`, `setHoverText`, `setHoverText`, `setID`, `setPos`

## ICustomGui

*interface* `noppes.npcs.api.gui.ICustomGui`

### Methods
- `int getID()`
- `int getWidth()`
- `int getHeight()`
- `java.util.List<ICustomGuiComponent> getComponents()`
- `java.util.List<IItemSlot> getSlots()`
- `void setSize​(int width, int height)`
- `void setDoesPauseGame​(boolean pauseGame)`
- `void setBackgroundTexture​(java.lang.String resourceLocation)`
- `IButton addButton​(int id, java.lang.String label, int x, int y)`
  Add a regular, Minecraft style button to this GUI. Uses default width and height.
  - param: id - - Unique ID for identifying this button.
  - param: label - - String to display on this button.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
- `IButton addButton​(int id, java.lang.String label, int x, int y, int width, int height)`
  Add a regular, Minecraft style button to this GUI, with a defined width and height.
  - param: id - - Unique ID for identifying this button.
  - param: label - - String to display on this button.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: width - - Width of this button.
  - param: height - - Height of this button.
- `IButton addTexturedButton​(int id, java.lang.String label, int x, int y, int width, int height, java.lang.String texture)`
  Add a button with a custom texture to this GUI.
   Hover Texture is taken from directly beneath the base texture.
   For examples, look at Vanilla Minecraft button textures.
  - param: id - - Unique ID for identifying this button.
  - param: label - - String to display on this button.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: width - - Width of this button and texture.
  - param: height - - Height of this button and texture.
  - param: texture - - Resource Location of the texture to use. (For Example: "minecraft:textures/gui/widgets.png")
- `IButton addTexturedButton​(int id, java.lang.String label, int x, int y, int width, int height, java.lang.String texture, int textureX, int textureY)`
  Add a button with a custom texture to this GUI, with a texture offset.
   Hover Texture is taken from directly beneath the base texture.
   For examples, look at Vanilla Minecraft button textures.
  - param: id - - Unique ID for identifying this button.
  - param: label - - String to display on this button.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: width - - Width of this button and texture.
  - param: height - - Height of this button and texture.
  - param: texture - - Resource Location of the texture to use. (For Example: "minecraft:textures/gui/widgets.png")
  - param: textureX - - X offset of the desired texture within the defined texture file. Should refer to the Top-Left of the desired texture.
  - param: textureY - - Y offset of the desired texture within the defined texture file. Should refer to the Top-Left of the desired texture.
- `ILabel addLabel​(int id, java.lang.String label, int x, int y, int width, int height)`
  Add a Label to the GUI.
  - param: id - - Unique ID for identifying this label.
  - param: label - - String to display.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: width - - Width of this label. (Does Not Change the font size.)
  - param: height - - Height of this label. (Does Not Change the font size.)
- `ILabel addLabel​(int id, java.lang.String label, int x, int y, int width, int height, int color)`
  Add a Label to the GUI.
  - param: id - - Unique ID for identifying this label.
  - param: label - - String to display.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: width - - Width of this label. (Does Not Change the font size.)
  - param: height - - Height of this label. (Does Not Change the font size.)
  - param: color - - Color to be applied;
- `ITextField addTextField​(int id, int x, int y, int width, int height)`
  Add a Text Field input to the GUI, that the player can type into.
  - param: id - - Unique ID for identifying this label.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: width - - Width of this Text Field.
  - param: height - - Height of this Text Field.
- `ITexturedRect addTexturedRect​(int id, java.lang.String texture, int x, int y, int width, int height)`
  Add a texture to be drawn within the GUI.
  - param: id - - Unique ID for identifying this texture.
  - param: texture - - Resource Location of the texture to use. (For Example: "minecraft:textures/gui/widgets.png")
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: width - - Width of the texture.
  - param: height - - Height of the texture.
- `ITexturedRect addTexturedRect​(int id, java.lang.String texture, int x, int y, int width, int height, int textureX, int textureY)`
  Add a texture to be drawn within the GUI.
  - param: id - - Unique ID for identifying this texture.
  - param: texture - - Resource Location of the texture to use. (For Example: "minecraft:textures/gui/widgets.png")
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: width - - Width of the texture.
  - param: height - - Height of the texture.
  - param: textureX - - X offset of the desired texture within the defined texture file. Should refer to the Top-Left of the desired texture.
  - param: textureY - - Y offset of the desired texture within the defined texture file. Should refer to the Top-Left of the desired texture.
- `IScroll addScroll​(int id, int x, int y, int width, int height, java.lang.String[] list)`
  Add a Scroll List to the GUI, for the player to select from.
  - param: id - - Unique ID for identifying this scroll.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: width - - Width of the Scroll List.
  - param: height - - Height of the Scroll List.
  - param: list - - List of String options for the player to choose from.
- `IItemSlot addItemSlot​(int x, int y)`
  Add an Item Slot to the GUI.
   CAUTION: Handling Item Storage can be complicated. Once the GUI closes, any items in it will be lost unless you handle storing/saving this information yourself.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
- `IItemSlot addItemSlot​(int x, int y, IItemStack stack)`
  Add an Item Slot to the GUI with an IItemStack already in it.
   CAUTION: Handling Item Storage can be complicated. Once the GUI closes, any items in it will be lost unless you handle storing/saving this information yourself.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: stack - - IItemStack to be in this slot upon opening the GUI.
- `void showPlayerInventory​(int x, int y)`
  Add a display of the Player's Inventory to the GUI.
   A Player's inventory is around 162 Wide, and 58 Tall. Take this into consideration when placing this.
  - param: x - - X Position of the Top-Left corner, relative to the Left side of the GUI window.
  - param: y - - Y Position of the Top-Left corner, relative to the Top of the GUI window.
- `ICustomGuiComponent getComponent​(int id)`
  Get a component from this GUI by it's ID.
  - param: id - - Component ID to match.
  - returns: First ICustomGuiComponent with a matching ID, otherwise null.
- `void removeComponent​(int id)`
  Remove component from this GUI by it's ID.
  - param: id - - Component ID to match.
- `void updateComponent​(ICustomGuiComponent component)`
  Update a given component in this GUI, if a component with a matching ID exists.
  - param: component -
- `void update​(IPlayer player)`
  Update the given player's CustomGUI with this one.
  - param: player - - Player to send this CustomGUI to.

## ICustomGuiComponent

*interface* `noppes.npcs.api.gui.ICustomGuiComponent`

### Methods
- `int getID()`
- `ICustomGuiComponent setID​(int id)`
- `int getPosX()`
- `int getPosY()`
- `ICustomGuiComponent setPos​(int x, int y)`
- `boolean hasHoverText()`
- `java.lang.String[] getHoverText()`
- `ICustomGuiComponent setHoverText​(java.lang.String text)`
- `ICustomGuiComponent setHoverText​(java.lang.String[] text)`

## IItemSlot

*interface* `noppes.npcs.api.gui.IItemSlot`

All Superinterfaces: ICustomGuiComponent

### Methods
- `boolean hasStack()`
- `IItemStack getStack()`
- `IItemSlot setStack​(IItemStack itemStack)`
- `net.minecraft.inventory.Slot getMCSlot()`

### Inherited methods
- from `noppes.npcs.api.gui.ICustomGuiComponent`: `getHoverText`, `getID`, `getPosX`, `getPosY`, `hasHoverText`, `setHoverText`, `setHoverText`, `setID`, `setPos`

## ILabel

*interface* `noppes.npcs.api.gui.ILabel`

All Superinterfaces: ICustomGuiComponent

### Methods
- `java.lang.String getText()`
- `ILabel setText​(java.lang.String label)`
- `int getWidth()`
- `int getHeight()`
- `ILabel setSize​(int width, int height)`
- `int getColor()`
- `ILabel setColor​(int color)`
- `float getScale()`
- `ILabel setScale​(float scale)`

### Inherited methods
- from `noppes.npcs.api.gui.ICustomGuiComponent`: `getHoverText`, `getID`, `getPosX`, `getPosY`, `hasHoverText`, `setHoverText`, `setHoverText`, `setID`, `setPos`

## IScroll

*interface* `noppes.npcs.api.gui.IScroll`

All Superinterfaces: ICustomGuiComponent

### Methods
- `int getWidth()`
- `int getHeight()`
- `IScroll setSize​(int width, int height)`
- `java.lang.String[] getList()`
- `IScroll setList​(java.lang.String[] list)`
- `int getDefaultSelection()`
- `IScroll setDefaultSelection​(int defaultSelection)`
- `boolean isMultiSelect()`
- `IScroll setMultiSelect​(boolean multiSelect)`

### Inherited methods
- from `noppes.npcs.api.gui.ICustomGuiComponent`: `getHoverText`, `getID`, `getPosX`, `getPosY`, `hasHoverText`, `setHoverText`, `setHoverText`, `setID`, `setPos`

## ITextField

*interface* `noppes.npcs.api.gui.ITextField`

All Superinterfaces: ICustomGuiComponent

### Methods
- `int getWidth()`
- `int getHeight()`
- `ITextField setSize​(int width, int height)`
- `java.lang.String getText()`
- `ITextField setText​(java.lang.String defaultText)`

### Inherited methods
- from `noppes.npcs.api.gui.ICustomGuiComponent`: `getHoverText`, `getID`, `getPosX`, `getPosY`, `hasHoverText`, `setHoverText`, `setHoverText`, `setID`, `setPos`

## ITexturedButton

*interface* `noppes.npcs.api.gui.ITexturedButton`

All Superinterfaces: IButton, ICustomGuiComponent

### Methods
- `java.lang.String getTexture()`
- `ITexturedButton setTexture​(java.lang.String texture)`
- `int getTextureX()`
- `int getTextureY()`
- `ITexturedButton setTextureOffset​(int textureX, int textureY)`

### Inherited methods
- from `noppes.npcs.api.gui.IButton`: `getHeight`, `getLabel`, `getWidth`, `hasTexture`, `setLabel`, `setSize`
- from `noppes.npcs.api.gui.ICustomGuiComponent`: `getHoverText`, `getID`, `getPosX`, `getPosY`, `hasHoverText`, `setHoverText`, `setHoverText`, `setID`, `setPos`

## ITexturedRect

*interface* `noppes.npcs.api.gui.ITexturedRect`

All Superinterfaces: ICustomGuiComponent

### Methods
- `java.lang.String getTexture()`
- `ITexturedRect setTexture​(java.lang.String texture)`
- `int getWidth()`
- `int getHeight()`
- `ITexturedRect setSize​(int width, int height)`
- `float getScale()`
- `ITexturedRect setScale​(float scale)`
- `int getTextureX()`
- `int getTextureY()`
- `ITexturedRect setTextureOffset​(int offsetX, int offsetY)`

### Inherited methods
- from `noppes.npcs.api.gui.ICustomGuiComponent`: `getHoverText`, `getID`, `getPosX`, `getPosY`, `hasHoverText`, `setHoverText`, `setHoverText`, `setID`, `setPos`
