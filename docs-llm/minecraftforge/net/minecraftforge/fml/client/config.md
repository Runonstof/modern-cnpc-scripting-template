# net.minecraftforge.fml.client.config

- [ConfigGuiType](#configguitype)
- [DummyConfigElement](#dummyconfigelement)
- [DummyConfigElement.DummyCategoryElement](#dummyconfigelement.dummycategoryelement)
- [DummyConfigElement.DummyListElement](#dummyconfigelement.dummylistelement)
- [GuiButtonExt](#guibuttonext)
- [GuiCheckBox](#guicheckbox)
- [GuiConfig](#guiconfig)
- [GuiConfigEntries](#guiconfigentries)
- [GuiConfigEntries.ArrayEntry](#guiconfigentries.arrayentry)
- [GuiConfigEntries.BooleanEntry](#guiconfigentries.booleanentry)
- [GuiConfigEntries.ButtonEntry](#guiconfigentries.buttonentry)
- [GuiConfigEntries.CategoryEntry](#guiconfigentries.categoryentry)
- [GuiConfigEntries.ChatColorEntry](#guiconfigentries.chatcolorentry)
- [GuiConfigEntries.CycleValueEntry](#guiconfigentries.cyclevalueentry)
- [GuiConfigEntries.DoubleEntry](#guiconfigentries.doubleentry)
- [GuiConfigEntries.IConfigEntry](#guiconfigentries.iconfigentry)
- [GuiConfigEntries.IntegerEntry](#guiconfigentries.integerentry)
- [GuiConfigEntries.ListEntryBase](#guiconfigentries.listentrybase)
- [GuiConfigEntries.NumberSliderEntry](#guiconfigentries.numbersliderentry)
- [GuiConfigEntries.SelectValueEntry](#guiconfigentries.selectvalueentry)
- [GuiConfigEntries.StringEntry](#guiconfigentries.stringentry)
- [GuiEditArray](#guieditarray)
- [GuiEditArrayEntries](#guieditarrayentries)
- [GuiEditArrayEntries.BaseEntry](#guieditarrayentries.baseentry)
- [GuiEditArrayEntries.BooleanEntry](#guieditarrayentries.booleanentry)
- [GuiEditArrayEntries.DoubleEntry](#guieditarrayentries.doubleentry)
- [GuiEditArrayEntries.IArrayEntry](#guieditarrayentries.iarrayentry)
- [GuiEditArrayEntries.IntegerEntry](#guieditarrayentries.integerentry)
- [GuiEditArrayEntries.StringEntry](#guieditarrayentries.stringentry)
- [GuiMessageDialog](#guimessagedialog)
- [GuiSelectString](#guiselectstring)
- [GuiSelectStringEntries](#guiselectstringentries)
- [GuiSelectStringEntries.EntryComparator](#guiselectstringentries.entrycomparator)
- [GuiSelectStringEntries.IGuiSelectStringListEntry](#guiselectstringentries.iguiselectstringlistentry)
- [GuiSelectStringEntries.ListEntry](#guiselectstringentries.listentry)
- [GuiSlider](#guislider)
- [GuiSlider.ISlider](#guislider.islider)
- [GuiUnicodeGlyphButton](#guiunicodeglyphbutton)
- [GuiUtils](#guiutils)
- [HoverChecker](#hoverchecker)
- [IConfigElement](#iconfigelement)
## ConfigGuiType

*enum* `net.minecraftforge.fml.client.config.ConfigGuiType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ConfigGuiType>

### Fields
- `public static final ConfigGuiType STRING`
- `public static final ConfigGuiType INTEGER`
- `public static final ConfigGuiType BOOLEAN`
- `public static final ConfigGuiType DOUBLE`
- `public static final ConfigGuiType COLOR`
- `public static final ConfigGuiType MOD_ID`
- `public static final ConfigGuiType CONFIG_CATEGORY`

### Methods
- `public static ConfigGuiType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ConfigGuiType c : ConfigGuiType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ConfigGuiType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## DummyConfigElement

*class* `net.minecraftforge.fml.client.config.DummyConfigElement`

This class's main purpose is to provide the necessary objects for a sample Config GUI for FML, although
 there may be practical uses for the objects defined here such as using the DummyCategoryElement object as a
 wrapper for a custom IGuiConfigListEntry object that opens a special screen.

All Implemented Interfaces: IConfigElement

### Fields
- `protected boolean isProperty`
- `protected boolean isList`
- `protected ConfigGuiType type`
- `protected java.lang.String name`
- `protected java.lang.String langKey`
- `protected java.lang.Object value`
- `protected java.lang.Object defaultValue`
- `protected java.lang.Object[] values`
- `protected java.lang.Object[] defaultValues`
- `protected java.lang.String[] validValues`
- `protected java.lang.String[] validValuesDisplay`
- `protected java.util.regex.Pattern validStringPattern`
- `protected java.lang.Object minValue`
- `protected java.lang.Object maxValue`
- `protected boolean requiresWorldRestart`
- `protected boolean requiresMcRestart`
- `protected boolean isListFixedLength`
- `protected int maxListLength`
- `protected java.util.List<IConfigElement> childElements`
- `protected java.lang.Class<? extends GuiConfigEntries.IConfigEntry> configEntryClass`
- `protected java.lang.Class<? extends GuiEditArrayEntries.IArrayEntry> arrayEntryClass`

### Methods
- `public DummyConfigElement setCustomListEntryClass(java.lang.Class<? extends GuiConfigEntries.IConfigEntry> clazz)`
- `public boolean isProperty()`
  Description copied from interface: IConfigElement
  [Property, Category] Is this object a property object?
- `public IConfigElement setConfigEntryClass(java.lang.Class<? extends GuiConfigEntries.IConfigEntry> clazz)`
- `public java.lang.Class<? extends GuiConfigEntries.IConfigEntry> getConfigEntryClass()`
  Description copied from interface: IConfigElement
  This method returns a class that implements GuiConfigEntries.IConfigEntry or null. This class MUST
   provide a constructor with the following parameter types: GuiConfig, GuiConfigEntries, IConfigElement
- `public IConfigElement setArrayEntryClass(java.lang.Class<? extends GuiEditArrayEntries.IArrayEntry> clazz)`
- `public java.lang.Class<? extends GuiEditArrayEntries.IArrayEntry> getArrayEntryClass()`
  Description copied from interface: IConfigElement
  This method returns a class that implements GuiEditArrayEntries.IArrayEntry. This class MUST provide a constructor with the
   following parameter types: GuiEditArray, GuiEditArrayEntries, IConfigElement, Object
- `public java.lang.String getName()`
  Description copied from interface: IConfigElement
  [Property, Category] Gets the name of this object.
- `public java.lang.String getQualifiedName()`
  Description copied from interface: IConfigElement
  [Category] Gets the qualified name of this object. This is typically only used for category objects.
- `public java.lang.String getLanguageKey()`
  Description copied from interface: IConfigElement
  [Property, Category] Gets a language key for localization of config GUI entry names. If the same key is specified with .tooltip
   appended to the end, that key will return a localized tooltip when the mouse hovers over the property label/category button.
- `public java.lang.String getComment()`
  Description copied from interface: IConfigElement
  [Property, Category] Gets the comment for this object. Used for the tooltip if getLanguageKey() + ".tooltip" is not defined in the
   .lang file.
- `public java.util.List<IConfigElement> getChildElements()`
  Description copied from interface: IConfigElement
  [Category] Gets this category's child categories/properties.
- `public ConfigGuiType getType()`
  Description copied from interface: IConfigElement
  [Property, Category] Gets the ConfigGuiType value corresponding to the type of this property object, or CONFIG_CATEGORY if this is a
   category object.
- `public boolean isList()`
  Description copied from interface: IConfigElement
  [Property] Is this property object a list?
- `public boolean isListLengthFixed()`
  Description copied from interface: IConfigElement
  [Property] Does this list property have to remain a fixed length?
- `public int getMaxListLength()`
  Description copied from interface: IConfigElement
  [Property] Gets the max length of this list property, or -1 if the length is unlimited.
- `public boolean isDefault()`
  Description copied from interface: IConfigElement
  [Property] Is this property value equal to the default value?
- `public java.lang.Object getDefault()`
  Description copied from interface: IConfigElement
  [Property] Gets this property's default value. If this element is an array, this method should return a String
   representation of that array using Arrays.toString()
- `public java.lang.Object[] getDefaults()`
  Description copied from interface: IConfigElement
  [Property] Gets this property's default values.
- `public void setToDefault()`
  Description copied from interface: IConfigElement
  [Property] Sets this property's value to the default value.
- `public IConfigElement setRequiresWorldRestart(boolean requiresWorldRestart)`
- `public boolean requiresWorldRestart()`
  Description copied from interface: IConfigElement
  [Property, Category] Whether or not this element is safe to modify while a world is running. For Categories return false if ANY properties
   in the category are modifiable while a world is running, true if all are not.
- `public boolean showInGui()`
  Description copied from interface: IConfigElement
  [Property, Category] Whether or not this element should be allowed to show on config GUIs.
- `public IConfigElement setRequiresMcRestart(boolean requiresMcRestart)`
- `public boolean requiresMcRestart()`
  Description copied from interface: IConfigElement
  [Property, Category] Whether or not this element requires Minecraft to be restarted when changed.
- `public java.lang.String[] getValidValues()`
  Description copied from interface: IConfigElement
  [Property] Gets a String array of valid values for this property. This is generally used for String properties to allow the user to
   select a value from a list of valid values.
- `public java.lang.String[] getValidValuesDisplay()`
  Description copied from interface: IConfigElement
  [Property] Gets a String array of the versions of this property's valid values that will display in the config GUI.
   This is generally used for String properties to allow the user to select a value from a list of valid values.
- `public java.util.regex.Pattern getValidationPattern()`
  Description copied from interface: IConfigElement
  [Property] Gets a Pattern object used in String property input validation.
- `public java.lang.Object get()`
  Description copied from interface: IConfigElement
  [Property] Gets this property value.
- `public java.lang.Object[] getList()`
  Description copied from interface: IConfigElement
  [Property] Gets this property value as a list. Generally you should be sure of whether the property is a list before calling this.
- `public void set(java.lang.Object value)`
  Description copied from interface: IConfigElement
  [Property] Sets this property's value.
- `public void set(java.lang.Object[] aVal)`
  Description copied from interface: IConfigElement
  [Property] Sets this property's value to the specified array.
- `public java.lang.Object getMinValue()`
  Description copied from interface: IConfigElement
  [Property] Gets this property's minimum value.
- `public java.lang.Object getMaxValue()`
  Description copied from interface: IConfigElement
  [Property] Gets this property's maximum value.

### Inherited methods
- from `net.minecraftforge.fml.client.config.IConfigElement`: `hasSlidingControl`

## DummyConfigElement.DummyCategoryElement

*class* `net.minecraftforge.fml.client.config.DummyConfigElement.DummyCategoryElement`

This class provides a Dummy Category IConfigElement. It can be used to define a custom list of GUI entries that will
 appear on the child screen or to specify a custom IGuiConfigListEntry for a special category.

All Implemented Interfaces: IConfigElement

Enclosing class: DummyConfigElement

### Inherited fields
- from `net.minecraftforge.fml.client.config.DummyConfigElement`: `arrayEntryClass`, `childElements`, `configEntryClass`, `defaultValue`, `defaultValues`, `isList`, `isListFixedLength`, `isProperty`, `langKey`, `maxListLength`, `maxValue`, `minValue`, `name`, `requiresMcRestart`, `requiresWorldRestart`, `type`, `validStringPattern`, `validValues`, `validValuesDisplay`, `value`, `values`

### Inherited methods
- from `net.minecraftforge.fml.client.config.DummyConfigElement`: `get`, `getArrayEntryClass`, `getChildElements`, `getComment`, `getConfigEntryClass`, `getDefault`, `getDefaults`, `getLanguageKey`, `getList`, `getMaxListLength`, `getMaxValue`, `getMinValue`, `getName`, `getQualifiedName`, `getType`, `getValidationPattern`, `getValidValues`, `getValidValuesDisplay`, `isDefault`, `isList`, `isListLengthFixed`, `isProperty`, `requiresMcRestart`, `requiresWorldRestart`, `set`, `set`, `setArrayEntryClass`, `setConfigEntryClass`, `setCustomListEntryClass`, `setRequiresMcRestart`, `setRequiresWorldRestart`, `setToDefault`, `showInGui`
- from `net.minecraftforge.fml.client.config.IConfigElement`: `hasSlidingControl`

## DummyConfigElement.DummyListElement

*class* `net.minecraftforge.fml.client.config.DummyConfigElement.DummyListElement`

This class provides a dummy array-type IConfigElement.

All Implemented Interfaces: IConfigElement

Enclosing class: DummyConfigElement

### Inherited fields
- from `net.minecraftforge.fml.client.config.DummyConfigElement`: `arrayEntryClass`, `childElements`, `configEntryClass`, `defaultValue`, `defaultValues`, `isList`, `isListFixedLength`, `isProperty`, `langKey`, `maxListLength`, `maxValue`, `minValue`, `name`, `requiresMcRestart`, `requiresWorldRestart`, `type`, `validStringPattern`, `validValues`, `validValuesDisplay`, `value`, `values`

### Methods
- `public DummyConfigElement.DummyListElement setCustomEditListEntryClass(java.lang.Class<? extends GuiEditArrayEntries.IArrayEntry> clazz)`
- `public java.lang.Object getDefault()`
  Description copied from interface: IConfigElement
  [Property] Gets this property's default value. If this element is an array, this method should return a String
   representation of that array using Arrays.toString()

### Inherited methods
- from `net.minecraftforge.fml.client.config.DummyConfigElement`: `get`, `getArrayEntryClass`, `getChildElements`, `getComment`, `getConfigEntryClass`, `getDefaults`, `getLanguageKey`, `getList`, `getMaxListLength`, `getMaxValue`, `getMinValue`, `getName`, `getQualifiedName`, `getType`, `getValidationPattern`, `getValidValues`, `getValidValuesDisplay`, `isDefault`, `isList`, `isListLengthFixed`, `isProperty`, `requiresMcRestart`, `requiresWorldRestart`, `set`, `set`, `setArrayEntryClass`, `setConfigEntryClass`, `setCustomListEntryClass`, `setRequiresMcRestart`, `setRequiresWorldRestart`, `setToDefault`, `showInGui`
- from `net.minecraftforge.fml.client.config.IConfigElement`: `hasSlidingControl`

## GuiButtonExt

*class* `net.minecraftforge.fml.client.config.GuiButtonExt`

This class provides a button that fixes several bugs present in the vanilla GuiButton drawing code.
 The gist of it is that it allows buttons of any size without gaps in the graphics and with the
 borders drawn properly. It also prevents button text from extending out of the sides of the button by
 trimming the end of the string and adding an ellipsis.

 The code that handles drawing the button is in GuiUtils.

### Inherited fields
- from `net.minecraft.client.gui.GuiButton`: `BUTTON_TEXTURES`, `displayString`, `enabled`, `height`, `hovered`, `id`, `packedFGColour`, `visible`, `width`, `x`, `y`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void drawButton(Minecraft mc,  int mouseX,  int mouseY,  float partial)`
  Draws this button to the screen.

### Inherited methods
- from `net.minecraft.client.gui.GuiButton`: `drawButtonForegroundLayer`, `getButtonWidth`, `getHoverState`, `isMouseOver`, `mouseDragged`, `mousePressed`, `mouseReleased`, `playPressSound`, `setWidth`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiCheckBox

*class* `net.minecraftforge.fml.client.config.GuiCheckBox`

This class provides a checkbox style control.

### Inherited fields
- from `net.minecraft.client.gui.GuiButton`: `BUTTON_TEXTURES`, `displayString`, `enabled`, `height`, `hovered`, `id`, `packedFGColour`, `visible`, `width`, `x`, `y`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void drawButton(Minecraft mc,  int mouseX,  int mouseY,  float partial)`
- `public boolean mousePressed(Minecraft mc,  int mouseX,  int mouseY)`
- `public boolean isChecked()`
- `public void setIsChecked(boolean isChecked)`

### Inherited methods
- from `net.minecraft.client.gui.GuiButton`: `drawButtonForegroundLayer`, `getButtonWidth`, `getHoverState`, `isMouseOver`, `mouseDragged`, `mouseReleased`, `playPressSound`, `setWidth`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiConfig

*class* `net.minecraftforge.fml.client.config.GuiConfig`

This class is the base GuiScreen for all config GUI screens. It can be extended by mods to provide the top-level config screen
 that will be called when the Config button is clicked from the Main Menu Mods list.

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `public final GuiScreen parentScreen`
  A reference to the screen object that created this. Used for navigating between screens.
- `public java.lang.String title`
- `public java.lang.String titleLine2`
- `public final java.util.List<IConfigElement> configElements`
- `public final java.util.List<GuiConfigEntries.IConfigEntry> initEntries`
- `public GuiConfigEntries entryList`
- `protected GuiButtonExt btnDefaultAll`
- `protected GuiButtonExt btnUndoAll`
- `protected GuiCheckBox chkApplyGlobally`
- `public final java.lang.String modID`
- `public final java.lang.String configID`
  When set to a non-null value the OnConfigChanged and PostConfigChanged events will be posted when the Done button is pressed
   if any configElements were changed (includes child screens). If not defined, the events will be posted if the parent gui is null
   or if the parent gui is not an instance of GuiConfig.
- `public final boolean isWorldRunning`
- `public final boolean allRequireWorldRestart`
- `public final boolean allRequireMcRestart`
- `public boolean needsRefresh`
- `protected HoverChecker undoHoverChecker`
- `protected HoverChecker resetHoverChecker`
- `protected HoverChecker checkBoxHoverChecker`

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public static java.lang.String getAbridgedConfigPath(java.lang.String path)`
- `public void initGui()`
- `public void onGuiClosed()`
- `protected void actionPerformed(GuiButton button)`
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseClicked(int x,  int y,  int mouseEvent)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseReleased(int x,  int y,  int mouseEvent)`
- `protected void keyTyped(char eventChar,  int eventKey)`
- `public void updateScreen()`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public void drawToolTip(java.util.List<java.lang.String> stringList,  int x,  int y)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiConfigEntries

*class* `net.minecraftforge.fml.client.config.GuiConfigEntries`

This class implements the scrolling list functionality of the config GUI screens. It also provides all the default control handlers
 for the various property types.

### Fields
- `public final GuiConfig owningScreen`
- `public final Minecraft mc`
- `public java.util.List<GuiConfigEntries.IConfigEntry> listEntries`
- `public int maxLabelTextWidth`
  The max width of the label of all IConfigEntry objects.
- `public int maxEntryRightBound`
  The max x boundary of all IConfigEntry objects.
- `public int labelX`
  The x position where the label should be drawn.
- `public int controlX`
  The x position where the control should be drawn.
- `public int controlWidth`
  The width of the control.
- `public int resetX`
  The minimum x position where the Undo/Default buttons will start
- `public int scrollBarX`
  The x position of the scroll bar.

### Inherited fields
- from `net.minecraft.client.gui.GuiSlot`: `amountScrolled`, `bottom`, `centerListVertically`, `hasListHeader`, `headerPadding`, `height`, `initialClickY`, `lastClicked`, `left`, `mouseX`, `mouseY`, `right`, `scrollMultiplier`, `selectedElement`, `showSelectionBox`, `slotHeight`, `top`, `visible`, `width`

### Methods
- `protected void initGui()`
- `public int getSize()`
- `public GuiConfigEntries.IConfigEntry getListEntry(int index)`
  Gets the IGuiListEntry object for the given index
- `public int getScrollBarX()`
- `public int getListWidth()`
  Gets the width of the list
- `public void keyTyped(char eventChar,  int eventKey)`
  This method is a pass-through for IConfigEntry objects that require keystrokes. Called from the parent GuiConfig screen.
- `public void updateScreen()`
  This method is a pass-through for IConfigEntry objects that contain GuiTextField elements. Called from the parent GuiConfig
   screen.
- `public void mouseClickedPassThru(int mouseX,  int mouseY,  int mouseEvent)`
  This method is a pass-through for IConfigEntry objects that contain GuiTextField elements. Called from the parent GuiConfig
   screen.
- `public void onGuiClosed()`
  This method is a pass-through for IConfigEntry objects that need to perform actions when the containing GUI is closed.
- `public boolean saveConfigElements()`
  Saves all properties on this screen / child screens. This method returns true if any elements were changed that require
   a restart for proper handling.
- `public boolean areAllEntriesDefault(boolean includeChildren)`
  Returns true if all IConfigEntry objects on this screen are set to default. If includeChildren is true sub-category
   objects are checked as well.
- `public void setAllToDefault(boolean includeChildren)`
  Sets all IConfigEntry objects on this screen to default. If includeChildren is true sub-category objects are set as
   well.
- `public boolean hasChangedEntry(boolean includeChildren)`
  Returns true if any IConfigEntry objects on this screen are changed. If includeChildren is true sub-category objects
   are checked as well.
- `public boolean areAnyEntriesEnabled(boolean includeChildren)`
  Returns true if any IConfigEntry objects on this screen are enabled. If includeChildren is true sub-category objects
   are checked as well.
- `public void undoAllChanges(boolean includeChildren)`
  Reverts changes to all IConfigEntry objects on this screen. If includeChildren is true sub-category objects are
   reverted as well.
- `public void drawScreenPost(int mouseX,  int mouseY,  float partialTicks)`
  Calls the drawToolTip() method for all IConfigEntry objects on this screen. This is called from the parent GuiConfig screen
   after drawing all other elements.

### Inherited methods
- from `net.minecraft.client.gui.GuiListExtended`: `drawBackground`, `drawSlot`, `elementClicked`, `isSelected`, `mouseClicked`, `mouseReleased`, `updateItemPos`
- from `net.minecraft.client.gui.GuiSlot`: `actionPerformed`, `bindAmountScrolled`, `clickedHeader`, `drawContainerBackground`, `drawListHeader`, `drawScreen`, `drawSelectionBox`, `getAmountScrolled`, `getContentHeight`, `getEnabled`, `getMaxScroll`, `getSlotHeight`, `getSlotIndexFromScreenCoords`, `handleMouseInput`, `isMouseYWithinSlotBounds`, `overlayBackground`, `registerScrollButtons`, `renderDecorations`, `scrollBy`, `setDimensions`, `setEnabled`, `setHasListHeader`, `setShowSelectionBox`, `setSlotXBoundsFromLeft`

## GuiConfigEntries.ArrayEntry

*class* `net.minecraftforge.fml.client.config.GuiConfigEntries.ArrayEntry`

ArrayEntry

 Provides a GuiButton with the list contents as the displayString. Clicking the button navigates to a screen where the list can be
 edited.

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiConfigEntries.IConfigEntry

Enclosing class: GuiConfigEntries

### Fields
- `protected final java.lang.Object[] beforeValues`
- `protected java.lang.Object[] currentValues`

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ButtonEntry`: `btnValue`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `btnDefault`, `btnUndoChanges`, `configElement`, `defaultHoverChecker`, `defaultToolTip`, `drawLabel`, `isValidValue`, `mc`, `name`, `owningEntryList`, `owningScreen`, `toolTip`, `tooltipHoverChecker`, `undoHoverChecker`, `undoToolTip`

### Methods
- `public void updateValueButtonText()`
  Description copied from class: GuiConfigEntries.ButtonEntry
  Updates the displayString of the value button.
- `public void valueButtonPressed(int slotIndex)`
  Description copied from class: GuiConfigEntries.ButtonEntry
  Called when the value button has been clicked.
- `public void setListFromChildScreen(java.lang.Object[] newList)`
- `public boolean isDefault()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Is this entry's value equal to the default value? Generally true should be returned if this entry is not a property or category
   entry.
  - returns: true if this entry's value is equal to this entry's default value.
- `public void setToDefault()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Sets this entry's value to the default value.
- `public boolean isChanged()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Has the value of this entry changed?
  - returns: true if changes have been made to this entry's value, false otherwise.
- `public void undoChanges()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles reverting any changes that have occurred to this entry.
- `public boolean saveConfigElement()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles saving any changes that have been made to this entry back to the underlying object. It is a good practice to check
   isChanged() before performing the save action. This method should return true if the element has changed AND REQUIRES A RESTART.
- `public java.lang.Object getCurrentValue()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets the current value of this entry.
- `public java.lang.Object[] getCurrentValues()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets the current values of this list entry.

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ButtonEntry`: `drawEntry`, `keyTyped`, `mouseClicked`, `mousePressed`, `mouseReleased`, `updateCursorCounter`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `drawToolTip`, `enabled`, `getConfigElement`, `getEntryRightBound`, `getLabelWidth`, `getName`, `onGuiClosed`, `updatePosition`

## GuiConfigEntries.BooleanEntry

*class* `net.minecraftforge.fml.client.config.GuiConfigEntries.BooleanEntry`

BooleanPropEntry

 Provides a GuiButton that toggles between true and false.

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiConfigEntries.IConfigEntry

Enclosing class: GuiConfigEntries

### Fields
- `protected final boolean beforeValue`
- `protected boolean currentValue`

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ButtonEntry`: `btnValue`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `btnDefault`, `btnUndoChanges`, `configElement`, `defaultHoverChecker`, `defaultToolTip`, `drawLabel`, `isValidValue`, `mc`, `name`, `owningEntryList`, `owningScreen`, `toolTip`, `tooltipHoverChecker`, `undoHoverChecker`, `undoToolTip`

### Methods
- `public void updateValueButtonText()`
  Description copied from class: GuiConfigEntries.ButtonEntry
  Updates the displayString of the value button.
- `public void valueButtonPressed(int slotIndex)`
  Description copied from class: GuiConfigEntries.ButtonEntry
  Called when the value button has been clicked.
- `public boolean isDefault()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Is this entry's value equal to the default value? Generally true should be returned if this entry is not a property or category
   entry.
  - returns: true if this entry's value is equal to this entry's default value.
- `public void setToDefault()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Sets this entry's value to the default value.
- `public boolean isChanged()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Has the value of this entry changed?
  - returns: true if changes have been made to this entry's value, false otherwise.
- `public void undoChanges()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles reverting any changes that have occurred to this entry.
- `public boolean saveConfigElement()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles saving any changes that have been made to this entry back to the underlying object. It is a good practice to check
   isChanged() before performing the save action. This method should return true if the element has changed AND REQUIRES A RESTART.
- `public java.lang.Boolean getCurrentValue()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets the current value of this entry.
- `public java.lang.Boolean[] getCurrentValues()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets the current values of this list entry.

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ButtonEntry`: `drawEntry`, `keyTyped`, `mouseClicked`, `mousePressed`, `mouseReleased`, `updateCursorCounter`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `drawToolTip`, `enabled`, `getConfigElement`, `getEntryRightBound`, `getLabelWidth`, `getName`, `onGuiClosed`, `updatePosition`

## GuiConfigEntries.ButtonEntry

*class* `net.minecraftforge.fml.client.config.GuiConfigEntries.ButtonEntry`

ButtonEntry

 Provides a basic GuiButton entry to be used as a base for other entries that require a button for the value.

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiConfigEntries.IConfigEntry

Enclosing class: GuiConfigEntries

### Fields
- `protected final GuiButtonExt btnValue`

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `btnDefault`, `btnUndoChanges`, `configElement`, `defaultHoverChecker`, `defaultToolTip`, `drawLabel`, `isValidValue`, `mc`, `name`, `owningEntryList`, `owningScreen`, `toolTip`, `tooltipHoverChecker`, `undoHoverChecker`, `undoToolTip`

### Methods
- `public abstract void updateValueButtonText()`
  Updates the displayString of the value button.
- `public abstract void valueButtonPressed(int slotIndex)`
  Called when the value button has been clicked.
- `public void drawEntry(int slotIndex,  int x,  int y,  int listWidth,  int slotHeight,  int mouseX,  int mouseY,  boolean isSelected,  float partial)`
- `public boolean mousePressed(int index,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`
  Returns true if the mouse has been pressed on this control.
- `public void mouseReleased(int index,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`
  Fired when the mouse button is released. Arguments: index, x, y, mouseEvent, relativeX, relativeY
- `public void keyTyped(char eventChar,  int eventKey)`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles user keystrokes for any GuiTextField objects in this entry. Call GuiTextField.textboxKeyTyped(char, int) for any GuiTextField
   objects that should receive the input provided.
- `public void updateCursorCounter()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Call GuiTextField.updateCursorCounter() for any GuiTextField objects in this entry.
- `public void mouseClicked(int x,  int y,  int mouseEvent)`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Call GuiTextField.mouseClicked(int, int, int) for and GuiTextField objects in this entry.

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `drawToolTip`, `enabled`, `getConfigElement`, `getCurrentValue`, `getCurrentValues`, `getEntryRightBound`, `getLabelWidth`, `getName`, `isChanged`, `isDefault`, `onGuiClosed`, `saveConfigElement`, `setToDefault`, `undoChanges`, `updatePosition`

## GuiConfigEntries.CategoryEntry

*class* `net.minecraftforge.fml.client.config.GuiConfigEntries.CategoryEntry`

CategoryEntry

 Provides an entry that consists of a GuiButton for navigating to the child category GuiConfig screen.

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiConfigEntries.IConfigEntry

Enclosing class: GuiConfigEntries

### Fields
- `protected GuiScreen childScreen`
- `protected final GuiButtonExt btnSelectCategory`

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `btnDefault`, `btnUndoChanges`, `configElement`, `defaultHoverChecker`, `defaultToolTip`, `drawLabel`, `isValidValue`, `mc`, `name`, `owningEntryList`, `owningScreen`, `toolTip`, `tooltipHoverChecker`, `undoHoverChecker`, `undoToolTip`

### Methods
- `protected GuiScreen buildChildScreen()`
  This method is called in the constructor and is used to set the childScreen field.
- `public void drawEntry(int slotIndex,  int x,  int y,  int listWidth,  int slotHeight,  int mouseX,  int mouseY,  boolean isSelected,  float partial)`
- `public void drawToolTip(int mouseX,  int mouseY)`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles drawing any tooltips that apply to this entry. This method is called after all other GUI elements have been drawn to the
   screen, so it could also be used to draw any GUI element that needs to be drawn after all entries have had drawEntry() called.
- `public boolean mousePressed(int index,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`
- `public void mouseReleased(int index,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`
- `public boolean isDefault()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Is this entry's value equal to the default value? Generally true should be returned if this entry is not a property or category
   entry.
  - returns: true if this entry's value is equal to this entry's default value.
- `public void setToDefault()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Sets this entry's value to the default value.
- `public void keyTyped(char eventChar,  int eventKey)`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles user keystrokes for any GuiTextField objects in this entry. Call GuiTextField.textboxKeyTyped(char, int) for any GuiTextField
   objects that should receive the input provided.
- `public void updateCursorCounter()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Call GuiTextField.updateCursorCounter() for any GuiTextField objects in this entry.
- `public void mouseClicked(int x,  int y,  int mouseEvent)`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Call GuiTextField.mouseClicked(int, int, int) for and GuiTextField objects in this entry.
- `public boolean saveConfigElement()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles saving any changes that have been made to this entry back to the underlying object. It is a good practice to check
   isChanged() before performing the save action. This method should return true if the element has changed AND REQUIRES A RESTART.
- `public boolean isChanged()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Has the value of this entry changed?
  - returns: true if changes have been made to this entry's value, false otherwise.
- `public void undoChanges()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles reverting any changes that have occurred to this entry.
- `public boolean enabled()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Is this list entry enabled?
  - returns: true if this entry's controls should be enabled, false otherwise.
- `public int getLabelWidth()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets this entry's label width.
- `public int getEntryRightBound()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets this entry's right-hand x boundary. This value is used to control where the scroll bar is placed.
- `public java.lang.String getCurrentValue()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets the current value of this entry.
- `public java.lang.String[] getCurrentValues()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets the current values of this list entry.

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `getConfigElement`, `getName`, `onGuiClosed`, `updatePosition`

## GuiConfigEntries.ChatColorEntry

*class* `net.minecraftforge.fml.client.config.GuiConfigEntries.ChatColorEntry`

ChatColorEntry

 Provides a GuiButton that cycles through the list of chat color codes.

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiConfigEntries.IConfigEntry

Enclosing class: GuiConfigEntries

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.CycleValueEntry`: `beforeIndex`, `currentIndex`, `defaultIndex`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ButtonEntry`: `btnValue`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `btnDefault`, `btnUndoChanges`, `configElement`, `defaultHoverChecker`, `defaultToolTip`, `drawLabel`, `isValidValue`, `mc`, `name`, `owningEntryList`, `owningScreen`, `toolTip`, `tooltipHoverChecker`, `undoHoverChecker`, `undoToolTip`

### Methods
- `public void drawEntry(int slotIndex,  int x,  int y,  int listWidth,  int slotHeight,  int mouseX,  int mouseY,  boolean isSelected,  float partial)`
- `public void updateValueButtonText()`
  Description copied from class: GuiConfigEntries.ButtonEntry
  Updates the displayString of the value button.

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.CycleValueEntry`: `getCurrentValue`, `getCurrentValues`, `getValidValueDisplay`, `isChanged`, `isDefault`, `saveConfigElement`, `setToDefault`, `undoChanges`, `valueButtonPressed`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ButtonEntry`: `keyTyped`, `mouseClicked`, `mousePressed`, `mouseReleased`, `updateCursorCounter`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `drawToolTip`, `enabled`, `getConfigElement`, `getEntryRightBound`, `getLabelWidth`, `getName`, `onGuiClosed`, `updatePosition`

## GuiConfigEntries.CycleValueEntry

*class* `net.minecraftforge.fml.client.config.GuiConfigEntries.CycleValueEntry`

CycleValueEntry

 Provides a GuiButton that cycles through the prop's validValues array. If the current prop value is not a valid value, the first
 entry replaces the current value.

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiConfigEntries.IConfigEntry

Enclosing class: GuiConfigEntries

### Fields
- `protected final int beforeIndex`
- `protected final int defaultIndex`
- `protected int currentIndex`

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ButtonEntry`: `btnValue`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `btnDefault`, `btnUndoChanges`, `configElement`, `defaultHoverChecker`, `defaultToolTip`, `drawLabel`, `isValidValue`, `mc`, `name`, `owningEntryList`, `owningScreen`, `toolTip`, `tooltipHoverChecker`, `undoHoverChecker`, `undoToolTip`

### Methods
- `public void updateValueButtonText()`
  Description copied from class: GuiConfigEntries.ButtonEntry
  Updates the displayString of the value button.
- `protected java.lang.String getValidValueDisplay()`
- `public void valueButtonPressed(int slotIndex)`
  Description copied from class: GuiConfigEntries.ButtonEntry
  Called when the value button has been clicked.
- `public boolean isDefault()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Is this entry's value equal to the default value? Generally true should be returned if this entry is not a property or category
   entry.
  - returns: true if this entry's value is equal to this entry's default value.
- `public void setToDefault()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Sets this entry's value to the default value.
- `public boolean isChanged()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Has the value of this entry changed?
  - returns: true if changes have been made to this entry's value, false otherwise.
- `public void undoChanges()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles reverting any changes that have occurred to this entry.
- `public boolean saveConfigElement()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles saving any changes that have been made to this entry back to the underlying object. It is a good practice to check
   isChanged() before performing the save action. This method should return true if the element has changed AND REQUIRES A RESTART.
- `public java.lang.String getCurrentValue()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets the current value of this entry.
- `public java.lang.String[] getCurrentValues()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets the current values of this list entry.

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ButtonEntry`: `drawEntry`, `keyTyped`, `mouseClicked`, `mousePressed`, `mouseReleased`, `updateCursorCounter`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `drawToolTip`, `enabled`, `getConfigElement`, `getEntryRightBound`, `getLabelWidth`, `getName`, `onGuiClosed`, `updatePosition`

## GuiConfigEntries.DoubleEntry

*class* `net.minecraftforge.fml.client.config.GuiConfigEntries.DoubleEntry`

DoubleEntry

 Provides a GuiTextField for user input. Input is restricted to ensure the value can be parsed using Double.parseDouble().

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiConfigEntries.IConfigEntry

Enclosing class: GuiConfigEntries

### Fields
- `protected final double beforeValue`

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.StringEntry`: `textFieldValue`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `btnDefault`, `btnUndoChanges`, `configElement`, `defaultHoverChecker`, `defaultToolTip`, `drawLabel`, `isValidValue`, `mc`, `name`, `owningEntryList`, `owningScreen`, `toolTip`, `tooltipHoverChecker`, `undoHoverChecker`, `undoToolTip`

### Methods
- `public void keyTyped(char eventChar,  int eventKey)`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles user keystrokes for any GuiTextField objects in this entry. Call GuiTextField.textboxKeyTyped(char, int) for any GuiTextField
   objects that should receive the input provided.
- `public boolean isChanged()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Has the value of this entry changed?
  - returns: true if changes have been made to this entry's value, false otherwise.
- `public void undoChanges()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles reverting any changes that have occurred to this entry.
- `public boolean saveConfigElement()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles saving any changes that have been made to this entry back to the underlying object. It is a good practice to check
   isChanged() before performing the save action. This method should return true if the element has changed AND REQUIRES A RESTART.

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.StringEntry`: `drawEntry`, `getCurrentValue`, `getCurrentValues`, `isDefault`, `mouseClicked`, `setToDefault`, `updateCursorCounter`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `drawToolTip`, `enabled`, `getConfigElement`, `getEntryRightBound`, `getLabelWidth`, `getName`, `mousePressed`, `mouseReleased`, `onGuiClosed`, `updatePosition`

## GuiConfigEntries.IConfigEntry

*interface* `net.minecraftforge.fml.client.config.GuiConfigEntries.IConfigEntry`

Provides an interface for defining GuiConfigEntry.listEntry objects.

All Superinterfaces: GuiListExtended.IGuiListEntry

Enclosing class: GuiConfigEntries

### Methods
- `IConfigElement getConfigElement()`
  Gets the IConfigElement object owned by this entry.
- `java.lang.String getName()`
  Gets the name of the ConfigElement owned by this entry.
- `java.lang.Object getCurrentValue()`
  Gets the current value of this entry.
- `java.lang.Object[] getCurrentValues()`
  Gets the current values of this list entry.
- `boolean enabled()`
  Is this list entry enabled?
  - returns: true if this entry's controls should be enabled, false otherwise.
- `void keyTyped(char eventChar,  int eventKey)`
  Handles user keystrokes for any GuiTextField objects in this entry. Call GuiTextField.textboxKeyTyped(char, int) for any GuiTextField
   objects that should receive the input provided.
- `void updateCursorCounter()`
  Call GuiTextField.updateCursorCounter() for any GuiTextField objects in this entry.
- `void mouseClicked(int x,  int y,  int mouseEvent)`
  Call GuiTextField.mouseClicked(int, int, int) for and GuiTextField objects in this entry.
- `boolean isDefault()`
  Is this entry's value equal to the default value? Generally true should be returned if this entry is not a property or category
   entry.
  - returns: true if this entry's value is equal to this entry's default value.
- `void setToDefault()`
  Sets this entry's value to the default value.
- `void undoChanges()`
  Handles reverting any changes that have occurred to this entry.
- `boolean isChanged()`
  Has the value of this entry changed?
  - returns: true if changes have been made to this entry's value, false otherwise.
- `boolean saveConfigElement()`
  Handles saving any changes that have been made to this entry back to the underlying object. It is a good practice to check
   isChanged() before performing the save action. This method should return true if the element has changed AND REQUIRES A RESTART.
- `void drawToolTip(int mouseX,  int mouseY)`
  Handles drawing any tooltips that apply to this entry. This method is called after all other GUI elements have been drawn to the
   screen, so it could also be used to draw any GUI element that needs to be drawn after all entries have had drawEntry() called.
- `int getLabelWidth()`
  Gets this entry's label width.
- `int getEntryRightBound()`
  Gets this entry's right-hand x boundary. This value is used to control where the scroll bar is placed.
- `void onGuiClosed()`
  This method is called when the parent GUI is closed. Most handlers won't need this; it is provided for special cases.

### Inherited methods
- from `net.minecraft.client.gui.GuiListExtended.IGuiListEntry`: `drawEntry`, `mousePressed`, `mouseReleased`, `updatePosition`

## GuiConfigEntries.IntegerEntry

*class* `net.minecraftforge.fml.client.config.GuiConfigEntries.IntegerEntry`

IntegerEntry

 Provides a GuiTextField for user input. Input is restricted to ensure the value can be parsed using Integer.parseInteger().

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiConfigEntries.IConfigEntry

Enclosing class: GuiConfigEntries

### Fields
- `protected final int beforeValue`

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.StringEntry`: `textFieldValue`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `btnDefault`, `btnUndoChanges`, `configElement`, `defaultHoverChecker`, `defaultToolTip`, `drawLabel`, `isValidValue`, `mc`, `name`, `owningEntryList`, `owningScreen`, `toolTip`, `tooltipHoverChecker`, `undoHoverChecker`, `undoToolTip`

### Methods
- `public void keyTyped(char eventChar,  int eventKey)`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles user keystrokes for any GuiTextField objects in this entry. Call GuiTextField.textboxKeyTyped(char, int) for any GuiTextField
   objects that should receive the input provided.
- `public boolean isChanged()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Has the value of this entry changed?
  - returns: true if changes have been made to this entry's value, false otherwise.
- `public void undoChanges()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles reverting any changes that have occurred to this entry.
- `public boolean saveConfigElement()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles saving any changes that have been made to this entry back to the underlying object. It is a good practice to check
   isChanged() before performing the save action. This method should return true if the element has changed AND REQUIRES A RESTART.

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.StringEntry`: `drawEntry`, `getCurrentValue`, `getCurrentValues`, `isDefault`, `mouseClicked`, `setToDefault`, `updateCursorCounter`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `drawToolTip`, `enabled`, `getConfigElement`, `getEntryRightBound`, `getLabelWidth`, `getName`, `mousePressed`, `mouseReleased`, `onGuiClosed`, `updatePosition`

## GuiConfigEntries.ListEntryBase

*class* `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`

ListEntryBase

 Provides a base entry for others to extend. Handles drawing the prop label (if drawLabel == true) and the Undo/Default buttons.

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiConfigEntries.IConfigEntry

Enclosing class: GuiConfigEntries

### Fields
- `protected final GuiConfig owningScreen`
- `protected final GuiConfigEntries owningEntryList`
- `protected final IConfigElement configElement`
- `protected final Minecraft mc`
- `protected final java.lang.String name`
- `protected final GuiButtonExt btnUndoChanges`
- `protected final GuiButtonExt btnDefault`
- `protected java.util.List<java.lang.String> toolTip`
- `protected java.util.List<java.lang.String> undoToolTip`
- `protected java.util.List<java.lang.String> defaultToolTip`
- `protected boolean isValidValue`
- `protected HoverChecker tooltipHoverChecker`
- `protected HoverChecker undoHoverChecker`
- `protected HoverChecker defaultHoverChecker`
- `protected boolean drawLabel`

### Methods
- `public void drawEntry(int slotIndex,  int x,  int y,  int listWidth,  int slotHeight,  int mouseX,  int mouseY,  boolean isSelected,  float partial)`
- `public void drawToolTip(int mouseX,  int mouseY)`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles drawing any tooltips that apply to this entry. This method is called after all other GUI elements have been drawn to the
   screen, so it could also be used to draw any GUI element that needs to be drawn after all entries have had drawEntry() called.
- `public boolean mousePressed(int index,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`
- `public void mouseReleased(int index,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`
- `public abstract boolean isDefault()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Is this entry's value equal to the default value? Generally true should be returned if this entry is not a property or category
   entry.
  - returns: true if this entry's value is equal to this entry's default value.
- `public abstract void setToDefault()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Sets this entry's value to the default value.
- `public abstract void keyTyped(char eventChar,  int eventKey)`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles user keystrokes for any GuiTextField objects in this entry. Call GuiTextField.textboxKeyTyped(char, int) for any GuiTextField
   objects that should receive the input provided.
- `public abstract void updateCursorCounter()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Call GuiTextField.updateCursorCounter() for any GuiTextField objects in this entry.
- `public abstract void mouseClicked(int x,  int y,  int mouseEvent)`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Call GuiTextField.mouseClicked(int, int, int) for and GuiTextField objects in this entry.
- `public abstract boolean isChanged()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Has the value of this entry changed?
  - returns: true if changes have been made to this entry's value, false otherwise.
- `public abstract void undoChanges()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles reverting any changes that have occurred to this entry.
- `public abstract boolean saveConfigElement()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles saving any changes that have been made to this entry back to the underlying object. It is a good practice to check
   isChanged() before performing the save action. This method should return true if the element has changed AND REQUIRES A RESTART.
- `public void updatePosition(int p_178011_1_,  int p_178011_2_,  int p_178011_3_,  float partial)`
- `public boolean enabled()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Is this list entry enabled?
  - returns: true if this entry's controls should be enabled, false otherwise.
- `public int getLabelWidth()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets this entry's label width.
- `public int getEntryRightBound()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets this entry's right-hand x boundary. This value is used to control where the scroll bar is placed.
- `public IConfigElement getConfigElement()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets the IConfigElement object owned by this entry.
- `public java.lang.String getName()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets the name of the ConfigElement owned by this entry.
- `public abstract java.lang.Object getCurrentValue()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets the current value of this entry.
- `public abstract java.lang.Object[] getCurrentValues()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets the current values of this list entry.
- `public void onGuiClosed()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  This method is called when the parent GUI is closed. Most handlers won't need this; it is provided for special cases.

## GuiConfigEntries.NumberSliderEntry

*class* `net.minecraftforge.fml.client.config.GuiConfigEntries.NumberSliderEntry`

NumberSliderEntry

 Provides a slider for numeric properties.

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiConfigEntries.IConfigEntry

Enclosing class: GuiConfigEntries

### Fields
- `protected final double beforeValue`

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ButtonEntry`: `btnValue`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `btnDefault`, `btnUndoChanges`, `configElement`, `defaultHoverChecker`, `defaultToolTip`, `drawLabel`, `isValidValue`, `mc`, `name`, `owningEntryList`, `owningScreen`, `toolTip`, `tooltipHoverChecker`, `undoHoverChecker`, `undoToolTip`

### Methods
- `public void updateValueButtonText()`
  Description copied from class: GuiConfigEntries.ButtonEntry
  Updates the displayString of the value button.
- `public void valueButtonPressed(int slotIndex)`
  Description copied from class: GuiConfigEntries.ButtonEntry
  Called when the value button has been clicked.
- `public boolean isDefault()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Is this entry's value equal to the default value? Generally true should be returned if this entry is not a property or category
   entry.
  - returns: true if this entry's value is equal to this entry's default value.
- `public void setToDefault()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Sets this entry's value to the default value.
- `public boolean isChanged()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Has the value of this entry changed?
  - returns: true if changes have been made to this entry's value, false otherwise.
- `public void undoChanges()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles reverting any changes that have occurred to this entry.
- `public boolean saveConfigElement()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles saving any changes that have been made to this entry back to the underlying object. It is a good practice to check
   isChanged() before performing the save action. This method should return true if the element has changed AND REQUIRES A RESTART.
- `public java.lang.Object getCurrentValue()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets the current value of this entry.
- `public java.lang.Object[] getCurrentValues()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets the current values of this list entry.

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ButtonEntry`: `drawEntry`, `keyTyped`, `mouseClicked`, `mousePressed`, `mouseReleased`, `updateCursorCounter`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `drawToolTip`, `enabled`, `getConfigElement`, `getEntryRightBound`, `getLabelWidth`, `getName`, `onGuiClosed`, `updatePosition`

## GuiConfigEntries.SelectValueEntry

*class* `net.minecraftforge.fml.client.config.GuiConfigEntries.SelectValueEntry`

SelectValueEntry

 Provides a GuiButton with the current value as the displayString. Accepts a Map of selectable values with the signature where the key is the Object to be selected and the value is the String that will show on the selection list. EG: a map of Mod
 ID values where the key is the Mod ID and the value is the Mod Name.

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiConfigEntries.IConfigEntry

Enclosing class: GuiConfigEntries

### Fields
- `protected final java.lang.String beforeValue`
- `protected java.lang.Object currentValue`
- `protected java.util.Map<java.lang.Object,java.lang.String> selectableValues`

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ButtonEntry`: `btnValue`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `btnDefault`, `btnUndoChanges`, `configElement`, `defaultHoverChecker`, `defaultToolTip`, `drawLabel`, `isValidValue`, `mc`, `name`, `owningEntryList`, `owningScreen`, `toolTip`, `tooltipHoverChecker`, `undoHoverChecker`, `undoToolTip`

### Methods
- `public void updateValueButtonText()`
  Description copied from class: GuiConfigEntries.ButtonEntry
  Updates the displayString of the value button.
- `public void valueButtonPressed(int slotIndex)`
  Description copied from class: GuiConfigEntries.ButtonEntry
  Called when the value button has been clicked.
- `public void setValueFromChildScreen(java.lang.Object newValue)`
- `public boolean isDefault()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Is this entry's value equal to the default value? Generally true should be returned if this entry is not a property or category
   entry.
  - returns: true if this entry's value is equal to this entry's default value.
- `public void setToDefault()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Sets this entry's value to the default value.
- `public boolean isChanged()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Has the value of this entry changed?
  - returns: true if changes have been made to this entry's value, false otherwise.
- `public void undoChanges()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles reverting any changes that have occurred to this entry.
- `public boolean saveConfigElement()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles saving any changes that have been made to this entry back to the underlying object. It is a good practice to check
   isChanged() before performing the save action. This method should return true if the element has changed AND REQUIRES A RESTART.
- `public java.lang.String getCurrentValue()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets the current value of this entry.
- `public java.lang.String[] getCurrentValues()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets the current values of this list entry.

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ButtonEntry`: `drawEntry`, `keyTyped`, `mouseClicked`, `mousePressed`, `mouseReleased`, `updateCursorCounter`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `drawToolTip`, `enabled`, `getConfigElement`, `getEntryRightBound`, `getLabelWidth`, `getName`, `onGuiClosed`, `updatePosition`

## GuiConfigEntries.StringEntry

*class* `net.minecraftforge.fml.client.config.GuiConfigEntries.StringEntry`

StringEntry

 Provides a GuiTextField for user input.

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiConfigEntries.IConfigEntry

Enclosing class: GuiConfigEntries

### Fields
- `protected final GuiTextField textFieldValue`
- `protected final java.lang.String beforeValue`

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `btnDefault`, `btnUndoChanges`, `configElement`, `defaultHoverChecker`, `defaultToolTip`, `drawLabel`, `isValidValue`, `mc`, `name`, `owningEntryList`, `owningScreen`, `toolTip`, `tooltipHoverChecker`, `undoHoverChecker`, `undoToolTip`

### Methods
- `public void drawEntry(int slotIndex,  int x,  int y,  int listWidth,  int slotHeight,  int mouseX,  int mouseY,  boolean isSelected,  float partial)`
- `public void keyTyped(char eventChar,  int eventKey)`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles user keystrokes for any GuiTextField objects in this entry. Call GuiTextField.textboxKeyTyped(char, int) for any GuiTextField
   objects that should receive the input provided.
- `public void updateCursorCounter()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Call GuiTextField.updateCursorCounter() for any GuiTextField objects in this entry.
- `public void mouseClicked(int x,  int y,  int mouseEvent)`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Call GuiTextField.mouseClicked(int, int, int) for and GuiTextField objects in this entry.
- `public boolean isDefault()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Is this entry's value equal to the default value? Generally true should be returned if this entry is not a property or category
   entry.
  - returns: true if this entry's value is equal to this entry's default value.
- `public void setToDefault()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Sets this entry's value to the default value.
- `public boolean isChanged()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Has the value of this entry changed?
  - returns: true if changes have been made to this entry's value, false otherwise.
- `public void undoChanges()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles reverting any changes that have occurred to this entry.
- `public boolean saveConfigElement()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Handles saving any changes that have been made to this entry back to the underlying object. It is a good practice to check
   isChanged() before performing the save action. This method should return true if the element has changed AND REQUIRES A RESTART.
- `public java.lang.Object getCurrentValue()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets the current value of this entry.
- `public java.lang.Object[] getCurrentValues()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Gets the current values of this list entry.

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `drawToolTip`, `enabled`, `getConfigElement`, `getEntryRightBound`, `getLabelWidth`, `getName`, `mousePressed`, `mouseReleased`, `onGuiClosed`, `updatePosition`

## GuiEditArray

*class* `net.minecraftforge.fml.client.config.GuiEditArray`

This class is the base screen used for editing an array-type property. It provides a list of array entries for the user to edit.
 This screen is invoked from a GuiConfig screen by controls that use the EditListPropEntry IGuiConfigListEntry object.

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `protected GuiScreen parentScreen`
- `protected IConfigElement configElement`
- `protected GuiEditArrayEntries entryList`
- `protected GuiButtonExt btnUndoChanges`
- `protected GuiButtonExt btnDefault`
- `protected GuiButtonExt btnDone`
- `protected java.lang.String title`
- `protected java.lang.String titleLine2`
- `protected java.lang.String titleLine3`
- `protected int slotIndex`
- `protected final java.lang.Object[] beforeValues`
- `protected java.lang.Object[] currentValues`
- `protected HoverChecker tooltipHoverChecker`
- `protected java.util.List<java.lang.String> toolTip`
- `protected boolean enabled`

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void actionPerformed(GuiButton button)`
- `protected GuiEditArrayEntries createEditArrayEntries()`
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseClicked(int x,  int y,  int mouseEvent)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseReleased(int x,  int y,  int mouseEvent)`
- `protected void keyTyped(char eventChar,  int eventKey)`
- `public void updateScreen()`
- `public void drawScreen(int par1,  int par2,  float par3)`
- `public void drawToolTip(java.util.List<java.lang.String> stringList,  int x,  int y)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiEditArrayEntries

*class* `net.minecraftforge.fml.client.config.GuiEditArrayEntries`

This class implements the scrolling list functionality of the GuiEditList screen. It also provides all the default controls
 for editing array-type properties.

### Fields
- `protected GuiEditArray owningGui`
- `public IConfigElement configElement`
- `public java.util.List<GuiEditArrayEntries.IArrayEntry> listEntries`
- `public boolean isDefault`
- `public boolean isChanged`
- `public boolean canAddMoreEntries`
- `public final int controlWidth`
- `public final java.lang.Object[] beforeValues`
- `public java.lang.Object[] currentValues`

### Inherited fields
- from `net.minecraft.client.gui.GuiSlot`: `amountScrolled`, `bottom`, `centerListVertically`, `hasListHeader`, `headerPadding`, `height`, `initialClickY`, `lastClicked`, `left`, `mc`, `mouseX`, `mouseY`, `right`, `scrollMultiplier`, `selectedElement`, `showSelectionBox`, `slotHeight`, `top`, `visible`, `width`

### Methods
- `protected int getScrollBarX()`
- `public int getListWidth()`
  Gets the width of the list
- `public GuiEditArrayEntries.IArrayEntry getListEntry(int index)`
- `protected int getSize()`
- `public void addNewEntry(int index)`
- `public void removeEntry(int index)`
- `public boolean isChanged()`
- `public boolean isDefault()`
- `public void recalculateState()`
- `protected void keyTyped(char eventChar,  int eventKey)`
- `protected void updateScreen()`
- `protected void mouseClickedPassThru(int x,  int y,  int mouseEvent)`
- `protected boolean isListSavable()`
- `protected void saveListChanges()`
- `protected void drawScreenPost(int mouseX,  int mouseY,  float f)`
- `public Minecraft getMC()`

### Inherited methods
- from `net.minecraft.client.gui.GuiListExtended`: `drawBackground`, `drawSlot`, `elementClicked`, `isSelected`, `mouseClicked`, `mouseReleased`, `updateItemPos`
- from `net.minecraft.client.gui.GuiSlot`: `actionPerformed`, `bindAmountScrolled`, `clickedHeader`, `drawContainerBackground`, `drawListHeader`, `drawScreen`, `drawSelectionBox`, `getAmountScrolled`, `getContentHeight`, `getEnabled`, `getMaxScroll`, `getSlotHeight`, `getSlotIndexFromScreenCoords`, `handleMouseInput`, `isMouseYWithinSlotBounds`, `overlayBackground`, `registerScrollButtons`, `renderDecorations`, `scrollBy`, `setDimensions`, `setEnabled`, `setHasListHeader`, `setShowSelectionBox`, `setSlotXBoundsFromLeft`

## GuiEditArrayEntries.BaseEntry

*class* `net.minecraftforge.fml.client.config.GuiEditArrayEntries.BaseEntry`

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiEditArrayEntries.IArrayEntry

Enclosing class: GuiEditArrayEntries

### Fields
- `protected final GuiEditArray owningScreen`
- `protected final GuiEditArrayEntries owningEntryList`
- `protected final IConfigElement configElement`
- `protected final GuiButtonExt btnAddNewEntryAbove`
- `protected final GuiButtonExt btnRemoveEntry`
- `protected boolean isValidValue`
- `protected boolean isValidated`

### Methods
- `public void drawEntry(int slotIndex,  int x,  int y,  int listWidth,  int slotHeight,  int mouseX,  int mouseY,  boolean isSelected,  float partial)`
- `public void drawToolTip(int mouseX,  int mouseY)`
- `public boolean mousePressed(int index,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`
- `public void mouseReleased(int index,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`
- `public void keyTyped(char eventChar,  int eventKey)`
- `public void updateCursorCounter()`
- `public void mouseClicked(int x,  int y,  int mouseEvent)`
- `public boolean isValueSavable()`
- `public java.lang.Object getValue()`
- `public void updatePosition(int p_178011_1_,  int p_178011_2_,  int p_178011_3_,  float partial)`

## GuiEditArrayEntries.BooleanEntry

*class* `net.minecraftforge.fml.client.config.GuiEditArrayEntries.BooleanEntry`

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiEditArrayEntries.IArrayEntry

Enclosing class: GuiEditArrayEntries

### Fields
- `protected final GuiButtonExt btnValue`

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiEditArrayEntries.BaseEntry`: `btnAddNewEntryAbove`, `btnRemoveEntry`, `configElement`, `isValidated`, `isValidValue`, `owningEntryList`, `owningScreen`

### Methods
- `public void drawEntry(int slotIndex,  int x,  int y,  int listWidth,  int slotHeight,  int mouseX,  int mouseY,  boolean isSelected,  float partial)`
- `public boolean mousePressed(int index,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`
- `public void mouseReleased(int index,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`
- `public java.lang.Object getValue()`

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiEditArrayEntries.BaseEntry`: `drawToolTip`, `isValueSavable`, `keyTyped`, `mouseClicked`, `updateCursorCounter`, `updatePosition`

## GuiEditArrayEntries.DoubleEntry

*class* `net.minecraftforge.fml.client.config.GuiEditArrayEntries.DoubleEntry`

IGuiListEntry Inner Classes

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiEditArrayEntries.IArrayEntry

Enclosing class: GuiEditArrayEntries

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiEditArrayEntries.StringEntry`: `textFieldValue`
- from `net.minecraftforge.fml.client.config.GuiEditArrayEntries.BaseEntry`: `btnAddNewEntryAbove`, `btnRemoveEntry`, `configElement`, `isValidated`, `isValidValue`, `owningEntryList`, `owningScreen`

### Methods
- `public void keyTyped(char eventChar,  int eventKey)`
- `public java.lang.Double getValue()`

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiEditArrayEntries.StringEntry`: `drawEntry`, `mouseClicked`, `updateCursorCounter`
- from `net.minecraftforge.fml.client.config.GuiEditArrayEntries.BaseEntry`: `drawToolTip`, `isValueSavable`, `mousePressed`, `mouseReleased`, `updatePosition`

## GuiEditArrayEntries.IArrayEntry

*interface* `net.minecraftforge.fml.client.config.GuiEditArrayEntries.IArrayEntry`

All Superinterfaces: GuiListExtended.IGuiListEntry

Enclosing class: GuiEditArrayEntries

### Methods
- `void keyTyped(char eventChar,  int eventKey)`
- `void updateCursorCounter()`
- `void mouseClicked(int x,  int y,  int mouseEvent)`
- `void drawToolTip(int mouseX,  int mouseY)`
- `boolean isValueSavable()`
- `java.lang.Object getValue()`

### Inherited methods
- from `net.minecraft.client.gui.GuiListExtended.IGuiListEntry`: `drawEntry`, `mousePressed`, `mouseReleased`, `updatePosition`

## GuiEditArrayEntries.IntegerEntry

*class* `net.minecraftforge.fml.client.config.GuiEditArrayEntries.IntegerEntry`

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiEditArrayEntries.IArrayEntry

Enclosing class: GuiEditArrayEntries

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiEditArrayEntries.StringEntry`: `textFieldValue`
- from `net.minecraftforge.fml.client.config.GuiEditArrayEntries.BaseEntry`: `btnAddNewEntryAbove`, `btnRemoveEntry`, `configElement`, `isValidated`, `isValidValue`, `owningEntryList`, `owningScreen`

### Methods
- `public void keyTyped(char eventChar,  int eventKey)`
- `public java.lang.Integer getValue()`

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiEditArrayEntries.StringEntry`: `drawEntry`, `mouseClicked`, `updateCursorCounter`
- from `net.minecraftforge.fml.client.config.GuiEditArrayEntries.BaseEntry`: `drawToolTip`, `isValueSavable`, `mousePressed`, `mouseReleased`, `updatePosition`

## GuiEditArrayEntries.StringEntry

*class* `net.minecraftforge.fml.client.config.GuiEditArrayEntries.StringEntry`

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiEditArrayEntries.IArrayEntry

Enclosing class: GuiEditArrayEntries

### Fields
- `protected final GuiTextField textFieldValue`

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiEditArrayEntries.BaseEntry`: `btnAddNewEntryAbove`, `btnRemoveEntry`, `configElement`, `isValidated`, `isValidValue`, `owningEntryList`, `owningScreen`

### Methods
- `public void drawEntry(int slotIndex,  int x,  int y,  int listWidth,  int slotHeight,  int mouseX,  int mouseY,  boolean isSelected,  float partial)`
- `public void keyTyped(char eventChar,  int eventKey)`
- `public void updateCursorCounter()`
- `public void mouseClicked(int x,  int y,  int mouseEvent)`
- `public java.lang.Object getValue()`

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiEditArrayEntries.BaseEntry`: `drawToolTip`, `isValueSavable`, `mousePressed`, `mouseReleased`, `updatePosition`

## GuiMessageDialog

*class* `net.minecraftforge.fml.client.config.GuiMessageDialog`

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `protected java.lang.String buttonText`

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`

### Inherited methods
- from `net.minecraft.client.gui.GuiDisconnected`: `actionPerformed`, `drawScreen`, `keyTyped`
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiSelectString

*class* `net.minecraftforge.fml.client.config.GuiSelectString`

This class provides a screen that allows the user to select a value from a list.

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `protected GuiScreen parentScreen`
- `protected IConfigElement configElement`
- `protected GuiSelectStringEntries entryList`
- `protected GuiButtonExt btnUndoChanges`
- `protected GuiButtonExt btnDefault`
- `protected GuiButtonExt btnDone`
- `protected java.lang.String title`
- `protected java.lang.String titleLine2`
- `protected java.lang.String titleLine3`
- `protected int slotIndex`
- `protected final java.util.Map<java.lang.Object,java.lang.String> selectableValues`
- `public final java.lang.Object beforeValue`
- `public java.lang.Object currentValue`
- `protected HoverChecker tooltipHoverChecker`
- `protected java.util.List<java.lang.String> toolTip`
- `protected boolean enabled`

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void actionPerformed(GuiButton button)`
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseReleased(int x,  int y,  int mouseEvent)`
- `public void drawScreen(int par1,  int par2,  float par3)`
- `public void drawToolTip(java.util.List<java.lang.String> stringList,  int x,  int y)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiSelectStringEntries

*class* `net.minecraftforge.fml.client.config.GuiSelectStringEntries`

This class implements the scrolling list functionality of the GuiSelectString screen.

### Fields
- `public GuiSelectString owningScreen`
- `public Minecraft mc`
- `public IConfigElement configElement`
- `public java.util.List<GuiSelectStringEntries.IGuiSelectStringListEntry> listEntries`
- `public final java.util.Map<java.lang.Object,java.lang.String> selectableValues`
- `public int selectedIndex`
- `public int maxEntryWidth`

### Inherited fields
- from `net.minecraft.client.gui.GuiSlot`: `amountScrolled`, `bottom`, `centerListVertically`, `hasListHeader`, `headerPadding`, `height`, `initialClickY`, `lastClicked`, `left`, `mouseX`, `mouseY`, `right`, `scrollMultiplier`, `selectedElement`, `showSelectionBox`, `slotHeight`, `top`, `visible`, `width`

### Methods
- `protected void elementClicked(int index,  boolean doubleClick,  int mouseX,  int mouseY)`
  The element in the slot that was clicked, boolean for whether it was double clicked or not
- `protected boolean isSelected(int index)`
  Returns true if the element passed in is currently selected
- `protected int getScrollBarX()`
- `public int getListWidth()`
  Gets the width of the list
- `public GuiSelectStringEntries.IGuiSelectStringListEntry getListEntry(int index)`
- `protected int getSize()`
- `public boolean isChanged()`
- `public boolean isDefault()`
- `public void saveChanges()`

### Inherited methods
- from `net.minecraft.client.gui.GuiListExtended`: `drawBackground`, `drawSlot`, `mouseClicked`, `mouseReleased`, `updateItemPos`
- from `net.minecraft.client.gui.GuiSlot`: `actionPerformed`, `bindAmountScrolled`, `clickedHeader`, `drawContainerBackground`, `drawListHeader`, `drawScreen`, `drawSelectionBox`, `getAmountScrolled`, `getContentHeight`, `getEnabled`, `getMaxScroll`, `getSlotHeight`, `getSlotIndexFromScreenCoords`, `handleMouseInput`, `isMouseYWithinSlotBounds`, `overlayBackground`, `registerScrollButtons`, `renderDecorations`, `scrollBy`, `setDimensions`, `setEnabled`, `setHasListHeader`, `setShowSelectionBox`, `setSlotXBoundsFromLeft`

## GuiSelectStringEntries.EntryComparator

*class* `net.minecraftforge.fml.client.config.GuiSelectStringEntries.EntryComparator`

All Implemented Interfaces: java.util.Comparator<java.util.Map.Entry<java.lang.Object, java.lang.String>>

Enclosing class: GuiSelectStringEntries

### Methods
- `public int compare(java.util.Map.Entry<java.lang.Object,java.lang.String> o1,  java.util.Map.Entry<java.lang.Object,java.lang.String> o2)`

### Inherited methods
- from `java.util.Comparator`: `comparing`, `comparing`, `comparingDouble`, `comparingInt`, `comparingLong`, `equals`, `naturalOrder`, `nullsFirst`, `nullsLast`, `reversed`, `reverseOrder`, `thenComparing`, `thenComparing`, `thenComparing`, `thenComparingDouble`, `thenComparingInt`, `thenComparingLong`

## GuiSelectStringEntries.IGuiSelectStringListEntry

*interface* `net.minecraftforge.fml.client.config.GuiSelectStringEntries.IGuiSelectStringListEntry`

All Superinterfaces: GuiListExtended.IGuiListEntry

Enclosing class: GuiSelectStringEntries

### Methods
- `java.lang.Object getValue()`

### Inherited methods
- from `net.minecraft.client.gui.GuiListExtended.IGuiListEntry`: `drawEntry`, `mousePressed`, `mouseReleased`, `updatePosition`

## GuiSelectStringEntries.ListEntry

*class* `net.minecraftforge.fml.client.config.GuiSelectStringEntries.ListEntry`

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiSelectStringEntries.IGuiSelectStringListEntry

Enclosing class: GuiSelectStringEntries

### Fields
- `protected final GuiSelectStringEntries owningList`
- `protected final java.util.Map.Entry<java.lang.Object,java.lang.String> value`

### Methods
- `public void drawEntry(int slotIndex,  int x,  int y,  int listWidth,  int slotHeight,  int mouseX,  int mouseY,  boolean isSelected,  float partial)`
- `public boolean mousePressed(int index,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`
- `public void mouseReleased(int index,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`
- `public java.lang.Object getValue()`
- `public void updatePosition(int slotIndex,  int x,  int y,  float partialTicks)`

## GuiSlider

*class* `net.minecraftforge.fml.client.config.GuiSlider`

This class is blatantly stolen from iChunUtils with permission.

### Fields
- `public double sliderValue`
  The value of this slider control.
- `public java.lang.String dispString`
- `public boolean dragging`
  Is this slider control being dragged.
- `public boolean showDecimal`
- `public double minValue`
- `public double maxValue`
- `public int precision`
- `public GuiSlider.ISlider parent`
- `public java.lang.String suffix`
- `public boolean drawString`

### Inherited fields
- from `net.minecraft.client.gui.GuiButton`: `BUTTON_TEXTURES`, `displayString`, `enabled`, `height`, `hovered`, `id`, `packedFGColour`, `visible`, `width`, `x`, `y`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public int getHoverState(boolean par1)`
  Returns 0 if the button is disabled, 1 if the mouse is NOT hovering over this button and 2 if it IS hovering over
   this button.
- `protected void mouseDragged(Minecraft par1Minecraft,  int par2,  int par3)`
  Fired when the mouse button is dragged. Equivalent of MouseListener.mouseDragged(MouseEvent e).
- `public boolean mousePressed(Minecraft par1Minecraft,  int par2,  int par3)`
  Returns true if the mouse has been pressed on this control. Equivalent of MouseListener.mousePressed(MouseEvent
   e).
- `public void updateSlider()`
- `public void mouseReleased(int par1,  int par2)`
  Fired when the mouse button is released. Equivalent of MouseListener.mouseReleased(MouseEvent e).
- `public int getValueInt()`
- `public double getValue()`
- `public void setValue(double d)`

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiButtonExt`: `drawButton`
- from `net.minecraft.client.gui.GuiButton`: `drawButtonForegroundLayer`, `getButtonWidth`, `isMouseOver`, `playPressSound`, `setWidth`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiSlider.ISlider

*interface* `net.minecraftforge.fml.client.config.GuiSlider.ISlider`

Enclosing class: GuiSlider

### Methods
- `void onChangeSliderValue(GuiSlider slider)`

## GuiUnicodeGlyphButton

*class* `net.minecraftforge.fml.client.config.GuiUnicodeGlyphButton`

This class provides a button that shows a string glyph at the beginning. The glyph can be scaled using the glyphScale parameter.

### Fields
- `public java.lang.String glyph`
- `public float glyphScale`

### Inherited fields
- from `net.minecraft.client.gui.GuiButton`: `BUTTON_TEXTURES`, `displayString`, `enabled`, `height`, `hovered`, `id`, `packedFGColour`, `visible`, `width`, `x`, `y`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void drawButton(Minecraft mc,  int mouseX,  int mouseY,  float partial)`
  Description copied from class: GuiButtonExt
  Draws this button to the screen.

### Inherited methods
- from `net.minecraft.client.gui.GuiButton`: `drawButtonForegroundLayer`, `getButtonWidth`, `getHoverState`, `isMouseOver`, `mouseDragged`, `mousePressed`, `mouseReleased`, `playPressSound`, `setWidth`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiUtils

*class* `net.minecraftforge.fml.client.config.GuiUtils`

This class provides several methods and constants used by the Config GUI classes.

### Fields
- `public static final java.lang.String UNDO_CHAR` (= "\u21b6")
- `public static final java.lang.String RESET_CHAR` (= "\u2604")
- `public static final java.lang.String VALID` (= "\u2714")
- `public static final java.lang.String INVALID` (= "\u2715")
- `public static int[] colorCodes`

### Methods
- `public static int getColorCode(char c,  boolean isLighter)`
- `public static void drawContinuousTexturedBox(int x,  int y,  int u,  int v,  int width,  int height,  int textureWidth,  int textureHeight,  int borderSize,  float zLevel)`
  Draws a textured box of any size (smallest size is borderSize * 2 square) based on a fixed size textured box with continuous borders
   and filler. It is assumed that the desired texture ResourceLocation object has been bound using
   Minecraft.getMinecraft().getTextureManager().bindTexture(resourceLocation).
  - param: x - x axis offset
  - param: y - y axis offset
  - param: u - bound resource location image x offset
  - param: v - bound resource location image y offset
  - param: width - the desired box width
  - param: height - the desired box height
  - param: textureWidth - the width of the box texture in the resource location image
  - param: textureHeight - the height of the box texture in the resource location image
  - param: borderSize - the size of the box's borders
  - param: zLevel - the zLevel to draw at
- `public static void drawContinuousTexturedBox(ResourceLocation res,  int x,  int y,  int u,  int v,  int width,  int height,  int textureWidth,  int textureHeight,  int borderSize,  float zLevel)`
  Draws a textured box of any size (smallest size is borderSize * 2 square) based on a fixed size textured box with continuous borders
   and filler. The provided ResourceLocation object will be bound using
   Minecraft.getMinecraft().getTextureManager().bindTexture(resourceLocation).
  - param: res - the ResourceLocation object that contains the desired image
  - param: x - x axis offset
  - param: y - y axis offset
  - param: u - bound resource location image x offset
  - param: v - bound resource location image y offset
  - param: width - the desired box width
  - param: height - the desired box height
  - param: textureWidth - the width of the box texture in the resource location image
  - param: textureHeight - the height of the box texture in the resource location image
  - param: borderSize - the size of the box's borders
  - param: zLevel - the zLevel to draw at
- `public static void drawContinuousTexturedBox(ResourceLocation res,  int x,  int y,  int u,  int v,  int width,  int height,  int textureWidth,  int textureHeight,  int topBorder,  int bottomBorder,  int leftBorder,  int rightBorder,  float zLevel)`
  Draws a textured box of any size (smallest size is borderSize * 2 square) based on a fixed size textured box with continuous borders
   and filler. The provided ResourceLocation object will be bound using
   Minecraft.getMinecraft().getTextureManager().bindTexture(resourceLocation).
  - param: res - the ResourceLocation object that contains the desired image
  - param: x - x axis offset
  - param: y - y axis offset
  - param: u - bound resource location image x offset
  - param: v - bound resource location image y offset
  - param: width - the desired box width
  - param: height - the desired box height
  - param: textureWidth - the width of the box texture in the resource location image
  - param: textureHeight - the height of the box texture in the resource location image
  - param: topBorder - the size of the box's top border
  - param: bottomBorder - the size of the box's bottom border
  - param: leftBorder - the size of the box's left border
  - param: rightBorder - the size of the box's right border
  - param: zLevel - the zLevel to draw at
- `public static void drawContinuousTexturedBox(int x,  int y,  int u,  int v,  int width,  int height,  int textureWidth,  int textureHeight,  int topBorder,  int bottomBorder,  int leftBorder,  int rightBorder,  float zLevel)`
  Draws a textured box of any size (smallest size is borderSize * 2 square) based on a fixed size textured box with continuous borders
   and filler. It is assumed that the desired texture ResourceLocation object has been bound using
   Minecraft.getMinecraft().getTextureManager().bindTexture(resourceLocation).
  - param: x - x axis offset
  - param: y - y axis offset
  - param: u - bound resource location image x offset
  - param: v - bound resource location image y offset
  - param: width - the desired box width
  - param: height - the desired box height
  - param: textureWidth - the width of the box texture in the resource location image
  - param: textureHeight - the height of the box texture in the resource location image
  - param: topBorder - the size of the box's top border
  - param: bottomBorder - the size of the box's bottom border
  - param: leftBorder - the size of the box's left border
  - param: rightBorder - the size of the box's right border
  - param: zLevel - the zLevel to draw at
- `public static void drawTexturedModalRect(int x,  int y,  int u,  int v,  int width,  int height,  float zLevel)`
- `public static void preItemToolTip(ItemStack stack)`
  Must be called from GuiScreen.renderToolTip before GuiScreen.drawHoveringText is called.
  - param: stack - The stack for which a tooltip is about to be drawn.
- `public static void postItemToolTip()`
  Must be called from GuiScreen.renderToolTip after GuiScreen.drawHoveringText is called.
- `public static void drawHoveringText(java.util.List<java.lang.String> textLines,  int mouseX,  int mouseY,  int screenWidth,  int screenHeight,  int maxTextWidth,  FontRenderer font)`
  Draws a tooltip box on the screen with text in it.
   Automatically positions the box relative to the mouse to match Mojang's implementation.
   Automatically wraps text when there is not enough space on the screen to display the text without wrapping.
   Can have a maximum width set to avoid creating very wide tooltips.
  - param: textLines - the lines of text to be drawn in a hovering tooltip box.
  - param: mouseX - the mouse X position
  - param: mouseY - the mouse Y position
  - param: screenWidth - the available screen width for the tooltip to drawn in
  - param: screenHeight - the available screen height for the tooltip to drawn in
  - param: maxTextWidth - the maximum width of the text in the tooltip box.
 Set to a negative number to have no max width.
  - param: font - the font for drawing the text in the tooltip box
- `public static void drawHoveringText(ItemStack stack,  java.util.List<java.lang.String> textLines,  int mouseX,  int mouseY,  int screenWidth,  int screenHeight,  int maxTextWidth,  FontRenderer font)`
  Use this version if calling from somewhere where ItemStack context is available.
- `public static void drawGradientRect(int zLevel,  int left,  int top,  int right,  int bottom,  int startColor,  int endColor)`

## HoverChecker

*class* `net.minecraftforge.fml.client.config.HoverChecker`

This class implements an easy way to check if the mouse has hovered within a certain region of the screen for a given
 period of time. The region can be defined manually or by supplying a GuiButton object.

### Methods
- `public void updateBounds(int top,  int bottom,  int left,  int right)`
  Call this method if the intended region has changed such as if the region must follow a scrolling list.
   It is not necessary to call this method if a GuiButton defines the hover region.
- `public boolean checkHover(int mouseX,  int mouseY)`
  Checks if the mouse is in the hover region. If the specified time period has elapsed the method returns true.
   The hover timer is reset if the mouse is not within the region.
- `public boolean checkHover(int mouseX,  int mouseY,  boolean canHover)`
  Checks if the mouse is in the hover region. If the specified time period has elapsed the method returns true.
   The hover timer is reset if the mouse is not within the region.
- `public void resetHoverTimer()`
  Manually resets the hover timer.

## IConfigElement

*interface* `net.minecraftforge.fml.client.config.IConfigElement`

This interface provides the information needed by GuiConfig and GuiConfigEntries to display config elements for editing.

### Methods
- `boolean isProperty()`
  [Property, Category] Is this object a property object?
- `java.lang.Class<? extends GuiConfigEntries.IConfigEntry> getConfigEntryClass()`
  This method returns a class that implements GuiConfigEntries.IConfigEntry or null. This class MUST
   provide a constructor with the following parameter types: GuiConfig, GuiConfigEntries, IConfigElement
- `java.lang.Class<? extends GuiEditArrayEntries.IArrayEntry> getArrayEntryClass()`
  This method returns a class that implements GuiEditArrayEntries.IArrayEntry. This class MUST provide a constructor with the
   following parameter types: GuiEditArray, GuiEditArrayEntries, IConfigElement, Object
- `java.lang.String getName()`
  [Property, Category] Gets the name of this object.
- `java.lang.String getQualifiedName()`
  [Category] Gets the qualified name of this object. This is typically only used for category objects.
- `java.lang.String getLanguageKey()`
  [Property, Category] Gets a language key for localization of config GUI entry names. If the same key is specified with .tooltip
   appended to the end, that key will return a localized tooltip when the mouse hovers over the property label/category button.
- `java.lang.String getComment()`
  [Property, Category] Gets the comment for this object. Used for the tooltip if getLanguageKey() + ".tooltip" is not defined in the
   .lang file.
- `java.util.List<IConfigElement> getChildElements()`
  [Category] Gets this category's child categories/properties.
- `ConfigGuiType getType()`
  [Property, Category] Gets the ConfigGuiType value corresponding to the type of this property object, or CONFIG_CATEGORY if this is a
   category object.
- `boolean isList()`
  [Property] Is this property object a list?
- `boolean isListLengthFixed()`
  [Property] Does this list property have to remain a fixed length?
- `int getMaxListLength()`
  [Property] Gets the max length of this list property, or -1 if the length is unlimited.
- `boolean isDefault()`
  [Property] Is this property value equal to the default value?
- `java.lang.Object getDefault()`
  [Property] Gets this property's default value. If this element is an array, this method should return a String
   representation of that array using Arrays.toString()
- `java.lang.Object[] getDefaults()`
  [Property] Gets this property's default values.
- `void setToDefault()`
  [Property] Sets this property's value to the default value.
- `boolean requiresWorldRestart()`
  [Property, Category] Whether or not this element is safe to modify while a world is running. For Categories return false if ANY properties
   in the category are modifiable while a world is running, true if all are not.
- `boolean showInGui()`
  [Property, Category] Whether or not this element should be allowed to show on config GUIs.
- `boolean requiresMcRestart()`
  [Property, Category] Whether or not this element requires Minecraft to be restarted when changed.
- `java.lang.Object get()`
  [Property] Gets this property value.
- `java.lang.Object[] getList()`
  [Property] Gets this property value as a list. Generally you should be sure of whether the property is a list before calling this.
- `void set(java.lang.Object value)`
  [Property] Sets this property's value.
- `void set(java.lang.Object[] aVal)`
  [Property] Sets this property's value to the specified array.
- `java.lang.String[] getValidValues()`
  [Property] Gets a String array of valid values for this property. This is generally used for String properties to allow the user to
   select a value from a list of valid values.
- `default java.lang.String[] getValidValuesDisplay()`
  [Property] Gets a String array of the versions of this property's valid values that will display in the config GUI.
   This is generally used for String properties to allow the user to select a value from a list of valid values.
- `java.lang.Object getMinValue()`
  [Property] Gets this property's minimum value.
- `java.lang.Object getMaxValue()`
  [Property] Gets this property's maximum value.
- `java.util.regex.Pattern getValidationPattern()`
  [Property] Gets a Pattern object used in String property input validation.
- `default boolean hasSlidingControl()`
  - returns: true if this element is going to have a slider attached
