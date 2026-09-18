# noppes.npcs.api.gui

- [IAssetsSelector](#iassetsselector)
- [IButton](#ibutton)
- [IButtonList](#ibuttonlist)
- [IComponentsScrollableWrapper](#icomponentsscrollablewrapper)
- [IComponentsWrapper](#icomponentswrapper)
- [ICustomGui](#icustomgui)
- [ICustomGuiComponent](#icustomguicomponent)
- [IEntityDisplay](#ientitydisplay)
- [IItemSlot](#iitemslot)
- [ILabel](#ilabel)
- [IScroll](#iscroll)
- [ISlider](#islider)
- [ITextArea](#itextarea)
- [ITextField](#itextfield)
- [ITexturedButton](#itexturedbutton)
- [ITexturedRect](#itexturedrect)
## IAssetsSelector

*interface* `noppes.npcs.api.gui.IAssetsSelector`

All Superinterfaces: ICustomGuiComponent

### Methods
- `String getSelected()`
- `IAssetsSelector setSelected(String selected)`
- `String getRoot()`
  Default: textures
  - returns: returns root
- `IAssetsSelector setRoot(String root)`
- `String getFileType()`
  Default: png
  - returns: png, ogg, json, or whatever you want to filter
- `IAssetsSelector setFileType(String type)`
  - param: type - png, ogg, json, or whatever you want to filter
- `IAssetsSelector setOnChange(GuiComponentUpdate<IAssetsSelector> onChange)`
- `IAssetsSelector setOnPress(GuiComponentClicked<IAssetsSelector> onChange)`
  Called when an asset is double-clicked

### Inherited methods
- from `noppes.npcs.api.gui.ICustomGuiComponent`: `getEnabled`, `getHeight`, `getHoverText`, `getID`, `getPosX`, `getPosY`, `getType`, `getUniqueID`, `getVisible`, `getWidth`, `hasHoverText`, `setEnabled`, `setHoverText`, `setHoverText`, `setID`, `setPos`, `setSize`, `setVisible`

## IButton

*interface* `noppes.npcs.api.gui.IButton`

All Superinterfaces: ICustomGuiComponent

### Methods
- `String getLabel()`
- `IButton setLabel(String label)`
- `ITexturedRect getTextureRect()`
- `void setTextureRect(ITexturedRect rect)`
- `@Deprecated String getTexture()` (deprecated)
  use ITexturedRect
- `@Deprecated boolean hasTexture()` (deprecated)
  use ITexturedRect
- `@Deprecated IButton setTexture(String texture)` (deprecated)
  use ITexturedRect
- `@Deprecated int getTextureX()` (deprecated)
  use ITexturedRect
- `@Deprecated int getTextureY()` (deprecated)
  use ITexturedRect
- `@Deprecated IButton setTextureOffset(int textureX,  int textureY)` (deprecated)
  use ITexturedRect
- `int getTextureHoverOffset()`
- `IButton setTextureHoverOffset(int height)`
- `IItemStack getDisplayItem()`
- `IButton setDisplayItem(IItemStack item)`
- `IButton setOnPress(GuiComponentClicked<IButton> onPress)`

### Inherited methods
- from `noppes.npcs.api.gui.ICustomGuiComponent`: `getEnabled`, `getHeight`, `getHoverText`, `getID`, `getPosX`, `getPosY`, `getType`, `getUniqueID`, `getVisible`, `getWidth`, `hasHoverText`, `setEnabled`, `setHoverText`, `setHoverText`, `setID`, `setPos`, `setSize`, `setVisible`

## IButtonList

*interface* `noppes.npcs.api.gui.IButtonList`

All Superinterfaces: IButton, ICustomGuiComponent

### Methods
- `IButtonList setValues(String... values)`
- `String[] getValues()`
- `IButtonList setSelected(int selected)`
- `int getSelected()`
- `ITexturedRect getLeftTexture()`
- `ITexturedRect getRightTexture()`

### Inherited methods
- from `noppes.npcs.api.gui.IButton`: `getDisplayItem`, `getLabel`, `getTexture`, `getTextureHoverOffset`, `getTextureRect`, `getTextureX`, `getTextureY`, `hasTexture`, `setDisplayItem`, `setLabel`, `setOnPress`, `setTexture`, `setTextureHoverOffset`, `setTextureOffset`, `setTextureRect`
- from `noppes.npcs.api.gui.ICustomGuiComponent`: `getEnabled`, `getHeight`, `getHoverText`, `getID`, `getPosX`, `getPosY`, `getType`, `getUniqueID`, `getVisible`, `getWidth`, `hasHoverText`, `setEnabled`, `setHoverText`, `setHoverText`, `setID`, `setPos`, `setSize`, `setVisible`

## IComponentsScrollableWrapper

*interface* `noppes.npcs.api.gui.IComponentsScrollableWrapper`

All Superinterfaces: IComponentsWrapper

### Methods
- `IComponentsScrollableWrapper init(int x,  int y,  int width,  int height)`

### Inherited methods
- from `noppes.npcs.api.gui.IComponentsWrapper`: `addAssetsSelector`, `addButton`, `addButton`, `addButtonList`, `addComponent`, `addEntityDisplay`, `addItemSlot`, `addItemSlot`, `addLabel`, `addLabel`, `addScroll`, `addSlider`, `addTextArea`, `addTextField`, `addTexturedButton`, `addTexturedButton`, `addTexturedRect`, `addTexturedRect`, `getComponent`, `getComponents`, `getPlayerSlots`, `getSlots`, `removeComponent`, `removeItemSlot`, `showPlayerInventory`, `showPlayerInventory`

## IComponentsWrapper

*interface* `noppes.npcs.api.gui.IComponentsWrapper`

### Methods
- `IButton addButton(int id,  String label,  int x,  int y)`
  Add a regular, Minecraft style button to this GUI. Uses default width and height.
  - param: id - - Unique ID for identifying this button.
  - param: label - - String to display on this button.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
- `IButton addButton(int id,  String label,  int x,  int y,  int width,  int height)`
  Add a regular, Minecraft style button to this GUI, with a defined width and height.
  - param: id - - Unique ID for identifying this button.
  - param: label - - String to display on this button.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: width - - Width of this button.
  - param: height - - Height of this button.
- `IButtonList addButtonList(int id,  int x,  int y,  int width,  int height)`
  Add a button which can cycle through values.
  - param: id - - Unique ID for identifying this button.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: width - - Width of this button.
  - param: height - - Height of this button.
- `IButton addTexturedButton(int id,  String label,  int x,  int y,  int width,  int height,  String texture)`
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
- `IButton addTexturedButton(int id,  String label,  int x,  int y,  int width,  int height,  String texture,  int textureX,  int textureY)`
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
- `ILabel addLabel(int id,  String label,  int x,  int y,  int width,  int height)`
  Add a Label to the GUI.
  - param: id - - Unique ID for identifying this label.
  - param: label - - String to display.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: width - - Width of this label. (Does Not Change the font size.)
  - param: height - - Height of this label. (Does Not Change the font size.)
- `ILabel addLabel(int id,  String label,  int x,  int y,  int width,  int height,  int color)`
  Add a Label to the GUI.
  - param: id - - Unique ID for identifying this label.
  - param: label - - String to display.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: width - - Width of this label. (Does Not Change the font size.)
  - param: height - - Height of this label. (Does Not Change the font size.)
  - param: color - - Color to be applied;
- `ITextField addTextField(int id,  int x,  int y,  int width,  int height)`
  Add a Text Field input to the GUI, that the player can type into.
  - param: id - - Unique ID for identifying this label.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: width - - Width of this Text Field.
  - param: height - - Height of this Text Field.
- `ITextArea addTextArea(int id,  int x,  int y,  int width,  int height)`
  Add a Text Field input to the GUI, that the player can type into.
  - param: id - - Unique ID for identifying this label.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: width - - Width of this Text Field.
  - param: height - - Height of this Text Field.
- `IScroll addScroll(int id,  int x,  int y,  int width,  int height,  String[] list)`
  Add a Scroll List to the GUI, for the player to select from.
  - param: id - - Unique ID for identifying this scroll.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: width - - Width of the Scroll List.
  - param: height - - Height of the Scroll List.
  - param: list - - List of String options for the player to choose from.
- `ISlider addSlider(int id,  int x,  int y,  int width,  int height,  String format)`
  Add a Scroll List to the GUI, for the player to select from.
  - param: id - - Unique ID for identifying this scroll.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: width - - Width of the Scroll List.
  - param: height - - Height of the Scroll List.
  - param: format - - String format for display
- `IEntityDisplay addEntityDisplay(int id,  int x,  int y,  IEntity entity)`
  Add an entity display
  - param: id - - Unique ID for identifying this component.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: entity - - Entity for display
- `IAssetsSelector addAssetsSelector(int id,  int x,  int y,  int width,  int height)`
  Add a Scroll List to the GUI, for the player to select from.
  - param: id - - Unique ID for identifying this component.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: width - - Width of the component.
  - param: height - - Height of the component.
- `ITexturedRect addTexturedRect(int id,  String texture,  int x,  int y,  int width,  int height)`
  Add a texture to be drawn within the GUI.
  - param: id - - Unique ID for identifying this texture.
  - param: texture - - Resource Location of the texture to use. (For Example: "minecraft:textures/gui/widgets.png")
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: width - - Width of the texture.
  - param: height - - Height of the texture.
- `ITexturedRect addTexturedRect(int id,  String texture,  int x,  int y,  int width,  int height,  int textureX,  int textureY)`
  Add a texture to be drawn within the GUI.
  - param: id - - Unique ID for identifying this texture.
  - param: texture - - Resource Location of the texture to use. (For Example: "minecraft:textures/gui/widgets.png")
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: width - - Width of the texture.
  - param: height - - Height of the texture.
  - param: textureX - - X offset of the desired texture within the defined texture file. Should refer to the Top-Left of the desired texture.
  - param: textureY - - Y offset of the desired texture within the defined texture file. Should refer to the Top-Left of the desired texture.
- `List<ICustomGuiComponent> getComponents()`
- `ICustomGuiComponent getComponent(int id)`
  Get a component from this GUI by it's ID.
  - param: id - - Component ID to match.
  - returns: First ICustomGuiComponent with a matching ID, otherwise null.
- `void addComponent(ICustomGuiComponent button)`
- `void removeComponent(int id)`
  Remove component from this GUI by it's ID.
  - param: id - - Component ID to match.
- `List<IItemSlot> getSlots()`
- `List<IItemSlot> getPlayerSlots()`
- `IItemSlot addItemSlot(int x,  int y)`
  Add an Item Slot to the GUI.
   CAUTION: Handling Item Storage can be complicated. Once the GUI closes, any items in it will be lost unless you handle storing/saving this information yourself.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
- `IItemSlot addItemSlot(int x,  int y,  IItemStack stack)`
  Add an Item Slot to the GUI with an IItemStack already in it.
   CAUTION: Handling Item Storage can be complicated. Once the GUI closes, any items in it will be lost unless you handle storing/saving this information yourself.
  - param: x - - X Position, relative to the Left side of the GUI window.
  - param: y - - Y Position, relative to the Top of the GUI window.
  - param: stack - - IItemStack to be in this slot upon opening the GUI.
- `void removeItemSlot(IItemSlot slot)`
- `@Deprecated void showPlayerInventory(int x,  int y)` (deprecated)
- `IItemSlot[] showPlayerInventory(int x,  int y,  boolean full)`
  Add a display of the Player's Inventory to the GUI.
   A Player's inventory is around 162 Wide, and 58 Tall. Take this into consideration when placing this.
  - param: x - - X Position of the Top-Left corner, relative to the Left side of the GUI window.
  - param: y - - Y Position of the Top-Left corner, relative to the Top of the GUI window.
  - param: full - - Show the full inventory or just the hotbar

## ICustomGui

*interface* `noppes.npcs.api.gui.ICustomGui`

All Superinterfaces: IComponentsWrapper

### Methods
- `int getID()`
- `int getWidth()`
- `int getHeight()`
- `void setSize(int width,  int height)`
- `void setDoesPauseGame(boolean pauseGame)`
- `void setBackgroundTexture(String resourceLocation)`
- `void update()`
  Update the player's CustomGUI with this one.
- `void update(ICustomGuiComponent component)`
  Updates a single component of a gui, instead of the whole gui
- `IComponentsScrollableWrapper getScrollingPanel()`
- `void openSubGui(ICustomGui gui)`
- `ICustomGui getSubGui()`
- `boolean hasSubGui()`
- `ICustomGui closeSubGui()`
- `void close()`
  If this is a subgui it closes the subgui
- `ICustomGui getParentGui()`
- `ICustomGui getRootGui()`
- `ICustomGui getActiveGui()`
- `IPlayer getPlayer()`

### Inherited methods
- from `noppes.npcs.api.gui.IComponentsWrapper`: `addAssetsSelector`, `addButton`, `addButton`, `addButtonList`, `addComponent`, `addEntityDisplay`, `addItemSlot`, `addItemSlot`, `addLabel`, `addLabel`, `addScroll`, `addSlider`, `addTextArea`, `addTextField`, `addTexturedButton`, `addTexturedButton`, `addTexturedRect`, `addTexturedRect`, `getComponent`, `getComponents`, `getPlayerSlots`, `getSlots`, `removeComponent`, `removeItemSlot`, `showPlayerInventory`, `showPlayerInventory`

## ICustomGuiComponent

*interface* `noppes.npcs.api.gui.ICustomGuiComponent`

### Methods
- `int getID()`
- `ICustomGuiComponent setID(int id)`
- `UUID getUniqueID()`
- `int getPosX()`
- `int getPosY()`
- `ICustomGuiComponent setPos(int x,  int y)`
- `int getWidth()`
- `int getHeight()`
- `ICustomGuiComponent setSize(int width,  int height)`
- `boolean hasHoverText()`
- `String[] getHoverText()`
- `ICustomGuiComponent setHoverText(String text)`
- `ICustomGuiComponent setHoverText(String[] text)`
- `boolean getEnabled()`
- `ICustomGuiComponent setEnabled(boolean bo)`
- `boolean getVisible()`
- `ICustomGuiComponent setVisible(boolean bo)`
- `int getType()`

## IEntityDisplay

*interface* `noppes.npcs.api.gui.IEntityDisplay`

All Superinterfaces: ICustomGuiComponent

### Methods
- `IEntity getEntity()`
- `IEntityDisplay setEntity(IEntity entity)`
- `int getRotation()`
- `IEntityDisplay setRotation(int rot)`
- `float getScale()`
- `IEntityDisplay setScale(float scale)`
- `boolean getBackground()`
- `IEntityDisplay setBackground(boolean bo)`

### Inherited methods
- from `noppes.npcs.api.gui.ICustomGuiComponent`: `getEnabled`, `getHeight`, `getHoverText`, `getID`, `getPosX`, `getPosY`, `getType`, `getUniqueID`, `getVisible`, `getWidth`, `hasHoverText`, `setEnabled`, `setHoverText`, `setHoverText`, `setID`, `setPos`, `setSize`, `setVisible`

## IItemSlot

*interface* `noppes.npcs.api.gui.IItemSlot`

All Superinterfaces: ICustomGuiComponent

### Methods
- `boolean hasStack()`
- `IItemStack getStack()`
- `IItemSlot setStack(IItemStack itemStack)`
- `int getGuiType()`
  This is purely for the visual slot, default is 1
  - returns: GuiType 0:None, 1:Normal, 2:Sword, 3:Arrow, 4:Shield, 5:Head, 6:Body, 7:Legs, 8:Feet
- `IItemSlot setGuiType(int type)`
  This is purely for the visual slot, default is 1
  - param: type - GuiType 0:None, 1:Normal, 2:Sword, 3:Arrow, 4:Shield, 5:Head, 6:Body, 7:Legs, 8:Feet
- `boolean isPlayerSlot()`
- `IItemSlot setOnUpdate(GuiItemSlotUpdate onUpdate)`
- `net.minecraft.world.inventory.Slot getMCSlot()`

### Inherited methods
- from `noppes.npcs.api.gui.ICustomGuiComponent`: `getEnabled`, `getHeight`, `getHoverText`, `getID`, `getPosX`, `getPosY`, `getType`, `getUniqueID`, `getVisible`, `getWidth`, `hasHoverText`, `setEnabled`, `setHoverText`, `setHoverText`, `setID`, `setPos`, `setSize`, `setVisible`

## ILabel

*interface* `noppes.npcs.api.gui.ILabel`

All Superinterfaces: ICustomGuiComponent

### Methods
- `String getText()`
- `ILabel setText(String label)`
- `int getColor()`
- `ILabel setColor(int color)`
- `float getScale()`
- `ILabel setScale(float scale)`
- `boolean getCentered()`
- `ILabel setCentered(boolean bo)`

### Inherited methods
- from `noppes.npcs.api.gui.ICustomGuiComponent`: `getEnabled`, `getHeight`, `getHoverText`, `getID`, `getPosX`, `getPosY`, `getType`, `getUniqueID`, `getVisible`, `getWidth`, `hasHoverText`, `setEnabled`, `setHoverText`, `setHoverText`, `setID`, `setPos`, `setSize`, `setVisible`

## IScroll

*interface* `noppes.npcs.api.gui.IScroll`

All Superinterfaces: ICustomGuiComponent

### Methods
- `String[] getList()`
- `IScroll setList(String[] list)`
- `@Deprecated int getDefaultSelection()` (deprecated)
- `@Deprecated IScroll setDefaultSelection(int defaultSelection)` (deprecated)
- `int[] getSelection()`
- `IScroll setSelection(int... selection)`
- `String[] getSelectionList()`
- `IScroll setSelectionList(String... list)`
- `boolean isMultiSelect()`
- `IScroll setMultiSelect(boolean multiSelect)`
- `IScroll setOnClick(GuiComponentClicked<IScroll> onClick)`
- `IScroll setOnDoubleClick(GuiComponentClicked<IScroll> onDoubleClick)`
- `boolean getHasSearch()`
- `IScroll setHasSearch(boolean bo)`

### Inherited methods
- from `noppes.npcs.api.gui.ICustomGuiComponent`: `getEnabled`, `getHeight`, `getHoverText`, `getID`, `getPosX`, `getPosY`, `getType`, `getUniqueID`, `getVisible`, `getWidth`, `hasHoverText`, `setEnabled`, `setHoverText`, `setHoverText`, `setID`, `setPos`, `setSize`, `setVisible`

## ISlider

*interface* `noppes.npcs.api.gui.ISlider`

All Superinterfaces: ICustomGuiComponent

### Methods
- `float getValue()`
- `ISlider setValue(float value)`
- `String getFormat()`
- `ISlider setFormat(String format)`
- `float getMin()`
- `ISlider setMin(float min)`
- `float getMax()`
- `ISlider setMax(float max)`
- `int getDecimals()`
- `ISlider setDecimals(int i)`
- `ISlider setOnChange(GuiComponentUpdate<ISlider> onChange)`

### Inherited methods
- from `noppes.npcs.api.gui.ICustomGuiComponent`: `getEnabled`, `getHeight`, `getHoverText`, `getID`, `getPosX`, `getPosY`, `getType`, `getUniqueID`, `getVisible`, `getWidth`, `hasHoverText`, `setEnabled`, `setHoverText`, `setHoverText`, `setID`, `setPos`, `setSize`, `setVisible`

## ITextArea

*interface* `noppes.npcs.api.gui.ITextArea`

All Superinterfaces: ICustomGuiComponent, ITextField

### Methods
- `void setCodeTheme(boolean bo)`
- `boolean getCodeTheme()`

### Inherited methods
- from `noppes.npcs.api.gui.ICustomGuiComponent`: `getEnabled`, `getHeight`, `getHoverText`, `getID`, `getPosX`, `getPosY`, `getType`, `getUniqueID`, `getVisible`, `getWidth`, `hasHoverText`, `setEnabled`, `setHoverText`, `setHoverText`, `setID`, `setPos`, `setSize`, `setVisible`
- from `noppes.npcs.api.gui.ITextField`: `getCharacterType`, `getColor`, `getFloat`, `getFocused`, `getInteger`, `getText`, `setCharacterType`, `setColor`, `setFloat`, `setFocused`, `setInteger`, `setMinMax`, `setOnChange`, `setOnFocusLost`, `setText`

## ITextField

*interface* `noppes.npcs.api.gui.ITextField`

All Superinterfaces: ICustomGuiComponent

### Methods
- `String getText()`
- `ITextField setText(String text)`
- `int getColor()`
- `ITextField setColor(int color)`
- `ITextField setOnChange(GuiComponentUpdate<ITextField> onChange)`
- `ITextField setOnFocusLost(GuiComponentUpdate<ITextField> onChange)`
- `ITextField setFocused(boolean bo)`
- `boolean getFocused()`
- `ITextField setCharacterType(int type)`
  - param: type - 0:string, 1:int, 2:hex, 3:float
- `int getCharacterType()`
  - returns: 0:string, 1:int, 2:hex, 3:float
- `int getInteger()`
  - returns: Incase CharacterType is 1 or 2 it will convert text to an integer
- `ITextField setInteger(int i)`
  - param: i - Incase CharacterType is 1 or 2 set the text as the integer, if its CharacterType 2 it will convert to Hex
- `float getFloat()`
- `ITextField setFloat(float f)`
- `ITextField setMinMax(int min,  int max)`
  Incase CharacterType is 1 or 2, you can set the min and max value

### Inherited methods
- from `noppes.npcs.api.gui.ICustomGuiComponent`: `getEnabled`, `getHeight`, `getHoverText`, `getID`, `getPosX`, `getPosY`, `getType`, `getUniqueID`, `getVisible`, `getWidth`, `hasHoverText`, `setEnabled`, `setHoverText`, `setHoverText`, `setID`, `setPos`, `setSize`, `setVisible`

## ITexturedButton

*interface* `noppes.npcs.api.gui.ITexturedButton`

All Superinterfaces: IButton, ICustomGuiComponent

### Methods
- `String getTexture()`
  use ITexturedRect
- `ITexturedButton setTexture(String texture)`
  use ITexturedRect
- `int getTextureX()`
  use ITexturedRect
- `int getTextureY()`
  use ITexturedRect
- `ITexturedButton setTextureOffset(int textureX,  int textureY)`
  use ITexturedRect

### Inherited methods
- from `noppes.npcs.api.gui.IButton`: `getDisplayItem`, `getLabel`, `getTextureHoverOffset`, `getTextureRect`, `hasTexture`, `setDisplayItem`, `setLabel`, `setOnPress`, `setTextureHoverOffset`, `setTextureRect`
- from `noppes.npcs.api.gui.ICustomGuiComponent`: `getEnabled`, `getHeight`, `getHoverText`, `getID`, `getPosX`, `getPosY`, `getType`, `getUniqueID`, `getVisible`, `getWidth`, `hasHoverText`, `setEnabled`, `setHoverText`, `setHoverText`, `setID`, `setPos`, `setSize`, `setVisible`

## ITexturedRect

*interface* `noppes.npcs.api.gui.ITexturedRect`

All Superinterfaces: ICustomGuiComponent

### Methods
- `String getTexture()`
- `ITexturedRect setTexture(String texture)`
- `float getScale()`
- `ITexturedRect setScale(float scale)`
- `int getTextureX()`
- `int getTextureY()`
- `ITexturedRect setTextureOffset(int offsetX,  int offsetY)`
- `ITexturedRect setRepeatingTexture(int width,  int height,  int borderSize)`

### Inherited methods
- from `noppes.npcs.api.gui.ICustomGuiComponent`: `getEnabled`, `getHeight`, `getHoverText`, `getID`, `getPosX`, `getPosY`, `getType`, `getUniqueID`, `getVisible`, `getWidth`, `hasHoverText`, `setEnabled`, `setHoverText`, `setHoverText`, `setID`, `setPos`, `setSize`, `setVisible`
