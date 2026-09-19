# net.minecraftforge.client.gui

- [ForgeGuiFactory](#forgeguifactory)
- [ForgeGuiFactory.ForgeConfigGui](#forgeguifactory.forgeconfiggui)
- [ForgeGuiFactory.ForgeConfigGui.AddModOverrideEntry](#forgeguifactory.forgeconfiggui.addmodoverrideentry)
- [ForgeGuiFactory.ForgeConfigGui.ChunkLoaderEntry](#forgeguifactory.forgeconfiggui.chunkloaderentry)
- [ForgeGuiFactory.ForgeConfigGui.ClientEntry](#forgeguifactory.forgeconfiggui.cliententry)
- [ForgeGuiFactory.ForgeConfigGui.GeneralEntry](#forgeguifactory.forgeconfiggui.generalentry)
- [ForgeGuiFactory.ForgeConfigGui.ModIDEntry](#forgeguifactory.forgeconfiggui.modidentry)
- [ForgeGuiFactory.ForgeConfigGui.ModOverridesEntry](#forgeguifactory.forgeconfiggui.modoverridesentry)
- [ForgeGuiFactory.ForgeConfigGui.VersionCheckEntry](#forgeguifactory.forgeconfiggui.versioncheckentry)
- [NotificationModUpdateScreen](#notificationmodupdatescreen)
## ForgeGuiFactory

*class* `net.minecraftforge.client.gui.ForgeGuiFactory`

This is the base GuiConfig screen class that all the other Forge-specific config screens will be called from.
 Since Forge has multiple config files I thought I would use that opportunity to show some of the ways
 that the config GUI system can be extended to create custom config GUIs that have additional features
 over the base functionality of just displaying Properties and ConfigCategories.

 The concepts implemented here are:
 - using custom IConfigEntry objects to define child-screens that have specific Properties listed
 - using custom IConfigEntry objects to define a dummy property that can be used to generate new ConfigCategory objects
 - defining the configID string for a GuiConfig object so that the config changed events will be posted when that GuiConfig screen is closed
 (the configID string is optional; if it is not defined the config changed events will be posted when the top-most GuiConfig screen
 is closed, eg when the parent is null or is not an instance of GuiConfig)
 - overriding the IConfigEntry.enabled() method to control the enabled state of one list entry based on the value of another entry
 - overriding the IConfigEntry.onGuiClosed() method to perform custom actions when the screen that owns the entry is closed (in this
 case a new ConfigCategory is added to the Configuration object)

 The config file structure looks like this:
 forge.cfg (general settings all in one category)
 forgeChunkLoading.cfg
 - Forge (category)
 - defaults (category)
 - [optional mod override categories]...

 The GUI structure is this:
 Base Screen
 - General Settings (from forge.cfg)
 - Chunk Loader Settings (from forgeChunkLoading.cfg)
 - Defaults (these elements are listed directly on this screen)
 - Mod Overrides
 - Add New Mod Override
 - Mod1
 - Mod2
 - etc.

 Other things to check out:
 ForgeModContainer.syncConfig()
 ForgeModContainer.onConfigChanged()
 ForgeChunkManager.syncConfigDefaults()
 ForgeChunkManager.loadConfiguration()

All Implemented Interfaces: IModGuiFactory

### Methods
- `public void initialize(Minecraft minecraftInstance)`
  Description copied from interface: IModGuiFactory
  Called when instantiated to initialize with the active minecraft instance.
  - param: minecraftInstance - the instance
- `public boolean hasConfigGui()`
  Description copied from interface: IModGuiFactory
  If this method returns false, the config button in the mod list will be disabled
  - returns: true if this object provides a config gui screen, false otherwise
- `public GuiScreen createConfigGui(GuiScreen parent)`
  Description copied from interface: IModGuiFactory
  Return an initialized GuiScreen. This screen will be displayed
   when the "config" button is pressed in the mod list. It will
   have a single argument constructor - the "parent" screen, the same as all
   Minecraft GUIs. The expected behaviour is that this screen will replace the
   "mod list" screen completely, and will return to the mod list screen through
   the parent link, once the appropriate action is taken from the config screen.
  
   This config GUI is anticipated to provide configuration to the mod in a friendly
   visual way. It should not be abused to set internals such as IDs (they're gonna
   keep disappearing anyway), but rather, interesting behaviours. This config GUI
   is never run when a server game is running, and should be used to configure
   desired behaviours that affect server state. Costs, mod game modes, stuff like that
   can be changed here.
  - param: parent - The screen to which must be returned when closing the
 returned screen.
  - returns: A class that will be instantiated on clicks on the config button
 or null if no GUI is desired.
- `public java.util.Set<IModGuiFactory.RuntimeOptionCategoryElement> runtimeGuiCategories()`
  Description copied from interface: IModGuiFactory
  Return a list of the "runtime" categories this mod wishes to populate with
   GUI elements.
  
   Runtime categories are created on demand and organized in a 'lite' tree format.
   The parent represents the parent node in the tree. There is one special parent
   'Help' that will always list first, and is generally meant to provide Help type
   content for mods. The remaining parents will sort alphabetically, though
   this may change if there is a lot of alphabetic abuse. "AAA" is probably never a valid
   category parent.
  
   Runtime configuration itself falls into two flavours: in-game help, which is
   generally non interactive except for the text it wishes to show, and client-only
   affecting behaviours. This would include things like toggling minimaps, or cheat modes
   or anything NOT affecting the behaviour of the server. Please don't abuse this to
   change the state of the server in any way, this is intended to behave identically
   when the server is local or remote.
  - returns: the set of options this mod wishes to have available, or empty if none

## ForgeGuiFactory.ForgeConfigGui

*class* `net.minecraftforge.client.gui.ForgeGuiFactory.ForgeConfigGui`

All Implemented Interfaces: GuiYesNoCallback

Enclosing class: ForgeGuiFactory

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiConfig`: `allRequireMcRestart`, `allRequireWorldRestart`, `btnDefaultAll`, `btnUndoAll`, `checkBoxHoverChecker`, `chkApplyGlobally`, `configElements`, `configID`, `entryList`, `initEntries`, `isWorldRunning`, `modID`, `needsRefresh`, `parentScreen`, `resetHoverChecker`, `title`, `titleLine2`, `undoHoverChecker`
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiConfig`: `actionPerformed`, `drawScreen`, `drawToolTip`, `getAbridgedConfigPath`, `handleMouseInput`, `initGui`, `keyTyped`, `mouseClicked`, `mouseReleased`, `onGuiClosed`, `updateScreen`
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## ForgeGuiFactory.ForgeConfigGui.AddModOverrideEntry

*class* `net.minecraftforge.client.gui.ForgeGuiFactory.ForgeConfigGui.AddModOverrideEntry`

This custom list entry provides a button that will open to a screen that will allow a user to define a new mod override.

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiConfigEntries.IConfigEntry

Enclosing class: ForgeGuiFactory.ForgeConfigGui

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.CategoryEntry`: `btnSelectCategory`, `childScreen`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `btnDefault`, `btnUndoChanges`, `configElement`, `defaultHoverChecker`, `defaultToolTip`, `drawLabel`, `isValidValue`, `mc`, `name`, `owningEntryList`, `owningScreen`, `toolTip`, `tooltipHoverChecker`, `undoHoverChecker`, `undoToolTip`

### Methods
- `protected GuiScreen buildChildScreen()`
  Description copied from class: GuiConfigEntries.CategoryEntry
  This method is called in the constructor and is used to set the childScreen field.
- `public boolean isChanged()`
  Description copied from interface: GuiConfigEntries.IConfigEntry
  Has the value of this entry changed?
  - returns: true if changes have been made to this entry's value, false otherwise.

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.CategoryEntry`: `drawEntry`, `drawToolTip`, `enabled`, `getCurrentValue`, `getCurrentValues`, `getEntryRightBound`, `getLabelWidth`, `isDefault`, `keyTyped`, `mouseClicked`, `mousePressed`, `mouseReleased`, `saveConfigElement`, `setToDefault`, `undoChanges`, `updateCursorCounter`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `getConfigElement`, `getName`, `onGuiClosed`, `updatePosition`

## ForgeGuiFactory.ForgeConfigGui.ChunkLoaderEntry

*class* `net.minecraftforge.client.gui.ForgeGuiFactory.ForgeConfigGui.ChunkLoaderEntry`

This custom list entry provides the Forge Chunk Manager Config entry on the Minecraft Forge Configuration screen.
 It extends the base Category entry class and defines the IConfigElement objects that will be used to build the child screen.

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiConfigEntries.IConfigEntry

Enclosing class: ForgeGuiFactory.ForgeConfigGui

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.CategoryEntry`: `btnSelectCategory`, `childScreen`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `btnDefault`, `btnUndoChanges`, `configElement`, `defaultHoverChecker`, `defaultToolTip`, `drawLabel`, `isValidValue`, `mc`, `name`, `owningEntryList`, `owningScreen`, `toolTip`, `tooltipHoverChecker`, `undoHoverChecker`, `undoToolTip`

### Methods
- `protected GuiScreen buildChildScreen()`
  Description copied from class: GuiConfigEntries.CategoryEntry
  This method is called in the constructor and is used to set the childScreen field.

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.CategoryEntry`: `drawEntry`, `drawToolTip`, `enabled`, `getCurrentValue`, `getCurrentValues`, `getEntryRightBound`, `getLabelWidth`, `isChanged`, `isDefault`, `keyTyped`, `mouseClicked`, `mousePressed`, `mouseReleased`, `saveConfigElement`, `setToDefault`, `undoChanges`, `updateCursorCounter`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `getConfigElement`, `getName`, `onGuiClosed`, `updatePosition`

## ForgeGuiFactory.ForgeConfigGui.ClientEntry

*class* `net.minecraftforge.client.gui.ForgeGuiFactory.ForgeConfigGui.ClientEntry`

This custom list entry provides the Client only Settings entry on the Minecraft Forge Configuration screen.
 It extends the base Category entry class and defines the IConfigElement objects that will be used to build the child screen.

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiConfigEntries.IConfigEntry

Enclosing class: ForgeGuiFactory.ForgeConfigGui

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.CategoryEntry`: `btnSelectCategory`, `childScreen`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `btnDefault`, `btnUndoChanges`, `configElement`, `defaultHoverChecker`, `defaultToolTip`, `drawLabel`, `isValidValue`, `mc`, `name`, `owningEntryList`, `owningScreen`, `toolTip`, `tooltipHoverChecker`, `undoHoverChecker`, `undoToolTip`

### Methods
- `protected GuiScreen buildChildScreen()`
  Description copied from class: GuiConfigEntries.CategoryEntry
  This method is called in the constructor and is used to set the childScreen field.

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.CategoryEntry`: `drawEntry`, `drawToolTip`, `enabled`, `getCurrentValue`, `getCurrentValues`, `getEntryRightBound`, `getLabelWidth`, `isChanged`, `isDefault`, `keyTyped`, `mouseClicked`, `mousePressed`, `mouseReleased`, `saveConfigElement`, `setToDefault`, `undoChanges`, `updateCursorCounter`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `getConfigElement`, `getName`, `onGuiClosed`, `updatePosition`

## ForgeGuiFactory.ForgeConfigGui.GeneralEntry

*class* `net.minecraftforge.client.gui.ForgeGuiFactory.ForgeConfigGui.GeneralEntry`

This custom list entry provides the General Settings entry on the Minecraft Forge Configuration screen.
 It extends the base Category entry class and defines the IConfigElement objects that will be used to build the child screen.

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiConfigEntries.IConfigEntry

Enclosing class: ForgeGuiFactory.ForgeConfigGui

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.CategoryEntry`: `btnSelectCategory`, `childScreen`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `btnDefault`, `btnUndoChanges`, `configElement`, `defaultHoverChecker`, `defaultToolTip`, `drawLabel`, `isValidValue`, `mc`, `name`, `owningEntryList`, `owningScreen`, `toolTip`, `tooltipHoverChecker`, `undoHoverChecker`, `undoToolTip`

### Methods
- `protected GuiScreen buildChildScreen()`
  Description copied from class: GuiConfigEntries.CategoryEntry
  This method is called in the constructor and is used to set the childScreen field.

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.CategoryEntry`: `drawEntry`, `drawToolTip`, `enabled`, `getCurrentValue`, `getCurrentValues`, `getEntryRightBound`, `getLabelWidth`, `isChanged`, `isDefault`, `keyTyped`, `mouseClicked`, `mousePressed`, `mouseReleased`, `saveConfigElement`, `setToDefault`, `undoChanges`, `updateCursorCounter`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `getConfigElement`, `getName`, `onGuiClosed`, `updatePosition`

## ForgeGuiFactory.ForgeConfigGui.ModIDEntry

*class* `net.minecraftforge.client.gui.ForgeGuiFactory.ForgeConfigGui.ModIDEntry`

This custom list entry provides a Mod ID selector. The control is a button that opens a list of values to select from.
 This entry also overrides onGuiClosed() to run code to save the data to a new ConfigCategory when the user is done.

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiConfigEntries.IConfigEntry

Enclosing class: ForgeGuiFactory.ForgeConfigGui

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.SelectValueEntry`: `beforeValue`, `currentValue`, `selectableValues`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ButtonEntry`: `btnValue`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `btnDefault`, `btnUndoChanges`, `configElement`, `defaultHoverChecker`, `defaultToolTip`, `drawLabel`, `isValidValue`, `mc`, `name`, `owningEntryList`, `owningScreen`, `toolTip`, `tooltipHoverChecker`, `undoHoverChecker`, `undoToolTip`

### Methods
- `public void onGuiClosed()`
  By overriding onGuiClosed() for this entry we can perform additional actions when the user is done such as saving
   a new ConfigCategory object to the Configuration object.

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.SelectValueEntry`: `getCurrentValue`, `getCurrentValues`, `isChanged`, `isDefault`, `saveConfigElement`, `setToDefault`, `setValueFromChildScreen`, `undoChanges`, `updateValueButtonText`, `valueButtonPressed`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ButtonEntry`: `drawEntry`, `keyTyped`, `mouseClicked`, `mousePressed`, `mouseReleased`, `updateCursorCounter`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `drawToolTip`, `enabled`, `getConfigElement`, `getEntryRightBound`, `getLabelWidth`, `getName`, `updatePosition`

## ForgeGuiFactory.ForgeConfigGui.ModOverridesEntry

*class* `net.minecraftforge.client.gui.ForgeGuiFactory.ForgeConfigGui.ModOverridesEntry`

This custom list entry provides the Mod Overrides entry on the Forge Chunk Loading config screen.
 It extends the base Category entry class and defines the IConfigElement objects that will be used to build the child screen.
 In this case it adds the custom entry for adding a new mod override and lists the existing mod overrides.

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiConfigEntries.IConfigEntry

Enclosing class: ForgeGuiFactory.ForgeConfigGui

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.CategoryEntry`: `btnSelectCategory`, `childScreen`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `btnDefault`, `btnUndoChanges`, `configElement`, `defaultHoverChecker`, `defaultToolTip`, `drawLabel`, `isValidValue`, `mc`, `name`, `owningEntryList`, `owningScreen`, `toolTip`, `tooltipHoverChecker`, `undoHoverChecker`, `undoToolTip`

### Methods
- `protected GuiScreen buildChildScreen()`
  This method is called in the constructor and is used to set the childScreen field.
- `public boolean enabled()`
  By overriding the enabled() method and checking the value of the "enabled" entry this entry is enabled/disabled based on the value of
   the other entry.
  - returns: true if this entry's controls should be enabled, false otherwise.
- `public boolean isChanged()`
  Check to see if the child screen's entry list has changed.
  - returns: true if changes have been made to this entry's value, false otherwise.
- `public void undoChanges()`
  Since adding a new entry to the child screen is what constitutes a change here, reset the child
   screen listEntries to the saved list.

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.CategoryEntry`: `drawEntry`, `drawToolTip`, `getCurrentValue`, `getCurrentValues`, `getEntryRightBound`, `getLabelWidth`, `isDefault`, `keyTyped`, `mouseClicked`, `mousePressed`, `mouseReleased`, `saveConfigElement`, `setToDefault`, `updateCursorCounter`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `getConfigElement`, `getName`, `onGuiClosed`, `updatePosition`

## ForgeGuiFactory.ForgeConfigGui.VersionCheckEntry

*class* `net.minecraftforge.client.gui.ForgeGuiFactory.ForgeConfigGui.VersionCheckEntry`

This custom list entry provides the Forge Version Checking Config entry on the Minecraft Forge Configuration screen.
 It extends the base Category entry class and defines the IConfigElement objects that will be used to build the child screen.

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiConfigEntries.IConfigEntry

Enclosing class: ForgeGuiFactory.ForgeConfigGui

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.CategoryEntry`: `btnSelectCategory`, `childScreen`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `btnDefault`, `btnUndoChanges`, `configElement`, `defaultHoverChecker`, `defaultToolTip`, `drawLabel`, `isValidValue`, `mc`, `name`, `owningEntryList`, `owningScreen`, `toolTip`, `tooltipHoverChecker`, `undoHoverChecker`, `undoToolTip`

### Methods
- `protected GuiScreen buildChildScreen()`
  Description copied from class: GuiConfigEntries.CategoryEntry
  This method is called in the constructor and is used to set the childScreen field.

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.CategoryEntry`: `drawEntry`, `drawToolTip`, `enabled`, `getCurrentValue`, `getCurrentValues`, `getEntryRightBound`, `getLabelWidth`, `isChanged`, `isDefault`, `keyTyped`, `mouseClicked`, `mousePressed`, `mouseReleased`, `saveConfigElement`, `setToDefault`, `undoChanges`, `updateCursorCounter`
- from `net.minecraftforge.fml.client.config.GuiConfigEntries.ListEntryBase`: `getConfigElement`, `getName`, `onGuiClosed`, `updatePosition`

## NotificationModUpdateScreen

*class* `net.minecraftforge.client.gui.NotificationModUpdateScreen`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public static NotificationModUpdateScreen init(GuiMainMenu guiMainMenu,  GuiButton modButton)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `actionPerformed`, `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`
