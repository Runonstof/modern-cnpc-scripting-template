# net.minecraftforge.fml.client

- [CustomModLoadingErrorDisplayException](#custommodloadingerrordisplayexception)
- [DefaultGuiFactory](#defaultguifactory)
- [ExtendedServerListData](#extendedserverlistdata)
- [FMLClientHandler](#fmlclienthandler)
- [FMLConfigGuiFactory](#fmlconfigguifactory)
- [FMLConfigGuiFactory.CustomArrayEntry](#fmlconfigguifactory.customarrayentry)
- [FMLConfigGuiFactory.FMLConfigGuiScreen](#fmlconfigguifactory.fmlconfigguiscreen)
- [FMLFileResourcePack](#fmlfileresourcepack)
- [FMLFolderResourcePack](#fmlfolderresourcepack)
- [GuiAccessDenied](#guiaccessdenied)
- [GuiBackupFailed](#guibackupfailed)
- [GuiConfirmation](#guiconfirmation)
- [GuiCustomModLoadingErrorScreen](#guicustommodloadingerrorscreen)
- [GuiDupesFound](#guidupesfound)
- [GuiErrorBase](#guierrorbase)
- [GuiModList](#guimodlist)
- [GuiModsMissing](#guimodsmissing)
- [GuiModsMissingForServer](#guimodsmissingforserver)
- [GuiMultipleModsErrored](#guimultiplemodserrored)
- [GuiNotification](#guinotification)
- [GuiOldSaveLoadConfirm](#guioldsaveloadconfirm)
- [GuiScrollingList](#guiscrollinglist)
- [GuiSlotModList](#guislotmodlist)
- [GuiSortingProblem](#guisortingproblem)
- [GuiWrongMinecraft](#guiwrongminecraft)
- [IDisplayableError](#idisplayableerror)
- [IModGuiFactory](#imodguifactory)
- [IModGuiFactory.RuntimeOptionCategoryElement](#imodguifactory.runtimeoptioncategoryelement)
- [SplashProgress](#splashprogress)
## CustomModLoadingErrorDisplayException

*class* `net.minecraftforge.fml.client.CustomModLoadingErrorDisplayException`

If a mod throws this exception during loading, it will be called back to render
 the error screen through the methods below. This error will not be cleared, and will
 not allow the game to carry on, but might be useful if your mod wishes to report
 a fatal configuration error in a pretty way.

 Throw this through a proxy. It won't work on the dedicated server environment.

All Implemented Interfaces: java.io.Serializable, IDisplayableError, IFMLHandledException

### Methods
- `public abstract void initGui(GuiErrorScreen errorScreen,  FontRenderer fontRenderer)`
  Called after the GUI is initialized by the parent code. You can do extra stuff here, maybe?
  - param: errorScreen - The error screen we're painting
  - param: fontRenderer - A font renderer for you
- `public abstract void drawScreen(GuiErrorScreen errorScreen,  FontRenderer fontRenderer,  int mouseRelX,  int mouseRelY,  float tickTime)`
  Draw your error to the screen.
  
  Warning: Minecraft is in a deep error state. All it can do is stop.
   Do not try and do anything involving complex user interaction here.
  - param: errorScreen - The error screen to draw to
  - param: fontRenderer - A font renderer for you
  - param: mouseRelX - Mouse X
  - param: mouseRelY - Mouse Y
  - param: tickTime - tick time
- `public void printStackTrace(EnhancedRuntimeException.WrappedPrintStream s)`
- `public final GuiScreen createGui()`

### Inherited methods
- from `net.minecraftforge.fml.common.EnhancedRuntimeException`: `getMessage`, `printStackTrace`, `printStackTrace`
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `setStackTrace`, `toString`

## DefaultGuiFactory

*class* `net.minecraftforge.fml.client.DefaultGuiFactory`

All Implemented Interfaces: IModGuiFactory

### Fields
- `protected java.lang.String modid`
- `protected java.lang.String title`
- `protected Minecraft minecraft`

### Methods
- `public boolean hasConfigGui()`
  Description copied from interface: IModGuiFactory
  If this method returns false, the config button in the mod list will be disabled
  - returns: true if this object provides a config gui screen, false otherwise
- `public void initialize(Minecraft minecraftInstance)`
  Description copied from interface: IModGuiFactory
  Called when instantiated to initialize with the active minecraft instance.
  - param: minecraftInstance - the instance
- `public GuiScreen createConfigGui(GuiScreen parentScreen)`
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
  - param: parentScreen - The screen to which must be returned when closing the
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
- `public static IModGuiFactory forMod(ModContainer mod)`

## ExtendedServerListData

*class* `net.minecraftforge.fml.client.ExtendedServerListData`

### Fields
- `public final java.lang.String type`
- `public final boolean isCompatible`
- `public final java.util.Map<java.lang.String,java.lang.String> modData`
- `public final boolean isBlocked`

## FMLClientHandler

*class* `net.minecraftforge.fml.client.FMLClientHandler`

Handles primary communication from hooked code into the system

 The FML entry point is beginMinecraftLoading(Minecraft, List, IReloadableResourceManager, MetadataSerializer) called from
 Minecraft

 Obfuscated code should focus on this class and other members of the "server"
 (or "client") code

 The actual mod loading is handled at arms length by Loader

 It is expected that a similar class will exist for each target environment:
 Bukkit and Client side.

 It should not be directly modified.

All Implemented Interfaces: IFMLSidedHandler

### Methods
- `public void beginMinecraftLoading(Minecraft minecraft,  java.util.List<IResourcePack> resourcePackList,  IReloadableResourceManager resourceManager,  MetadataSerializer metaSerializer)`
  Called to start the whole game off
  - param: minecraft - The minecraft instance being launched
  - param: resourcePackList - The resource pack list we will populate with mods
  - param: resourceManager - The resource manager
- `public void haltGame(java.lang.String message,  java.lang.Throwable t)`
- `public boolean hasError()`
- `public void finishMinecraftLoading()`
  Called a bit later on during initialization to finish loading mods
   Also initializes key bindings
- `public void extendModList()`
- `public void onInitializationComplete()`
- `public Minecraft getClient()`
  Get the server instance
- `public static FMLClientHandler instance()`
  - returns: the instance
- `public void displayGuiScreen(EntityPlayer player,  GuiScreen gui)`
  - param: player -
  - param: gui -
- `public void addSpecialModEntries(java.util.ArrayList<ModContainer> mods)`
  - param: mods -
- `public java.util.List<java.lang.String> getAdditionalBrandingInformation()`
- `public Side getSide()`
- `public boolean hasOptifine()`
- `public void showGuiScreen(java.lang.Object clientGuiElement)`
- `public void queryUser(StartupQuery query)  throws java.lang.InterruptedException`
  - throws: java.lang.InterruptedException
- `public boolean handleLoadingScreen(ScaledResolution scaledResolution)  throws java.io.IOException`
  - throws: java.io.IOException
- `public WorldClient getWorldClient()`
- `public EntityPlayerSP getClientPlayerEntity()`
- `public void beginServerLoading(MinecraftServer server)`
- `public void finishServerLoading()`
- `public java.io.File getSavesDirectory()`
- `public MinecraftServer getServer()`
- `@Deprecated public void displayMissingMods(java.lang.Object modMissingPacket)` (deprecated)
  Deprecated.
  TODO remove in 1.13
- `public boolean isLoading()`
  If the client is in the midst of loading, we disable saving so that custom settings aren't wiped out
- `public boolean isDisplayCloseRequested()`
- `public boolean shouldServerShouldBeKilledQuietly()`
- `public boolean isGUIOpen(java.lang.Class<? extends GuiScreen> gui)`
  Is this GUI type open?
  - param: gui - The type of GUI to test for
  - returns: if a GUI of this type is open
- `public void addModAsResource(ModContainer container)`
- `public IResourcePack getResourcePackFor(java.lang.String modId)`
- `public java.lang.String getCurrentLanguage()`
- `public void serverStopped()`
- `public INetHandler getClientPlayHandler()`
- `public NetworkManager getClientToServerNetworkManager()`
- `public void handleClientWorldClosing(WorldClient world)`
- `public void startIntegratedServer(java.lang.String id,  java.lang.String name,  WorldSettings settings)`
- `public java.io.File getSavesDir()`
- `public void tryLoadExistingWorld(GuiWorldSelection selectWorldGUI,  WorldSummary comparator)`
- `public void showInGameModOptions(GuiIngameMenu guiIngameMenu)`
- `public IModGuiFactory getGuiFactoryFor(ModContainer selectedMod)`
- `public void setupServerList()`
- `public void captureAdditionalData(ServerStatusResponse serverstatusresponse,  JsonObject jsonobject)`
- `public void bindServerListData(ServerData data,  ServerStatusResponse originalResponse)`
- `public java.lang.String enhanceServerListEntry(ServerListEntryNormal serverListEntry,  ServerData serverEntry,  int x,  int width,  int y,  int relativeMouseX,  int relativeMouseY)`
- `public java.lang.String fixDescription(java.lang.String description)`
- `public void connectToServerAtStartup(java.lang.String host,  int port)`
- `public void connectToServer(GuiScreen guiMultiplayer,  ServerData serverEntry)`
- `public void connectToRealmsServer(java.lang.String host,  int port)`
- `public void setPlayClient(NetHandlerPlayClient netHandlerPlayClient)`
- `public void fireNetRegistrationEvent(EventBus bus,  NetworkManager manager,  java.util.Set<java.lang.String> channelSet,  java.lang.String channel,  Side side)`
- `public boolean shouldAllowPlayerLogins()`
- `public void allowLogins()`
- `public IThreadListener getWorldThread(INetHandler net)`
- `public void trackMissingTexture(ResourceLocation resourceLocation)`
- `public void trackBrokenTexture(ResourceLocation resourceLocation,  java.lang.String error)`
- `public void logMissingTextureErrors()`
- `public void processWindowMessages()`
- `public java.lang.String stripSpecialChars(java.lang.String message)`
- `public void reloadRenderers()`
- `public void fireSidedRegistryEvents()`
- `public CompoundDataFixer getDataFixer()`
- `public boolean isDisplayVSyncForced()`
- `public void resetClientRecipeBook()`
- `public void reloadSearchTrees()`
- `public void reloadCreativeSettings()`
- `public void updateCloudSettings()`
- `public boolean renderClouds(int cloudTicks,  float partialTicks)`
- `public void refreshResources(IResourceType... inclusion)`
- `public void refreshResources(java.util.function.Predicate<IResourceType> resourcePredicate)`
- `public <any> scheduleResourcesRefresh(IResourceType... inclusion)`
- `public <any> scheduleResourcesRefresh(java.util.function.Predicate<IResourceType> resourcePredicate)`

## FMLConfigGuiFactory

*class* `net.minecraftforge.fml.client.FMLConfigGuiFactory`

All Implemented Interfaces: IModGuiFactory

### Methods
- `public boolean hasConfigGui()`
  Description copied from interface: IModGuiFactory
  If this method returns false, the config button in the mod list will be disabled
  - returns: true if this object provides a config gui screen, false otherwise
- `public void initialize(Minecraft minecraftInstance)`
  Description copied from interface: IModGuiFactory
  Called when instantiated to initialize with the active minecraft instance.
  - param: minecraftInstance - the instance
- `public GuiScreen createConfigGui(GuiScreen parentScreen)`
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
  - param: parentScreen - The screen to which must be returned when closing the
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

## FMLConfigGuiFactory.CustomArrayEntry

*class* `net.minecraftforge.fml.client.FMLConfigGuiFactory.CustomArrayEntry`

All Implemented Interfaces: GuiListExtended.IGuiListEntry, GuiEditArrayEntries.IArrayEntry

Enclosing class: FMLConfigGuiFactory

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiEditArrayEntries.StringEntry`: `textFieldValue`
- from `net.minecraftforge.fml.client.config.GuiEditArrayEntries.BaseEntry`: `btnAddNewEntryAbove`, `btnRemoveEntry`, `configElement`, `isValidated`, `isValidValue`, `owningEntryList`, `owningScreen`

### Methods
- `public void drawEntry(int slotIndex,  int x,  int y,  int listWidth,  int slotHeight,  int mouseX,  int mouseY,  boolean isSelected,  float partial)`

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiEditArrayEntries.StringEntry`: `getValue`, `keyTyped`, `mouseClicked`, `updateCursorCounter`
- from `net.minecraftforge.fml.client.config.GuiEditArrayEntries.BaseEntry`: `drawToolTip`, `isValueSavable`, `mousePressed`, `mouseReleased`, `updatePosition`

## FMLConfigGuiFactory.FMLConfigGuiScreen

*class* `net.minecraftforge.fml.client.FMLConfigGuiFactory.FMLConfigGuiScreen`

All Implemented Interfaces: GuiYesNoCallback

Enclosing class: FMLConfigGuiFactory

### Inherited fields
- from `net.minecraftforge.fml.client.config.GuiConfig`: `allRequireMcRestart`, `allRequireWorldRestart`, `btnDefaultAll`, `btnUndoAll`, `checkBoxHoverChecker`, `chkApplyGlobally`, `configElements`, `configID`, `entryList`, `initEntries`, `isWorldRunning`, `modID`, `needsRefresh`, `parentScreen`, `resetHoverChecker`, `title`, `titleLine2`, `undoHoverChecker`
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Inherited methods
- from `net.minecraftforge.fml.client.config.GuiConfig`: `actionPerformed`, `drawScreen`, `drawToolTip`, `getAbridgedConfigPath`, `handleMouseInput`, `initGui`, `keyTyped`, `mouseClicked`, `mouseReleased`, `onGuiClosed`, `updateScreen`
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## FMLFileResourcePack

*class* `net.minecraftforge.fml.client.FMLFileResourcePack`

All Implemented Interfaces: java.io.Closeable, java.lang.AutoCloseable, IResourcePack, FMLContainerHolder

### Inherited fields
- from `net.minecraft.client.resources.FileResourcePack`: `ENTRY_NAME_SPLITTER`
- from `net.minecraft.client.resources.AbstractResourcePack`: `resourcePackFile`

### Methods
- `public java.lang.String getPackName()`
- `protected java.io.InputStream getInputStreamByName(java.lang.String resourceName)  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.awt.image.BufferedImage getPackImage()  throws java.io.IOException`
  - throws: java.io.IOException
- `public ModContainer getFMLContainer()`

### Inherited methods
- from `net.minecraft.client.resources.FileResourcePack`: `close`, `finalize`, `getResourceDomains`, `hasResourceName`
- from `net.minecraft.client.resources.AbstractResourcePack`: `getInputStream`, `getPackMetadata`, `getRelativeName`, `logNameNotLowercase`, `resourceExists`

## FMLFolderResourcePack

*class* `net.minecraftforge.fml.client.FMLFolderResourcePack`

All Implemented Interfaces: IResourcePack, FMLContainerHolder

### Inherited fields
- from `net.minecraft.client.resources.AbstractResourcePack`: `resourcePackFile`

### Methods
- `protected boolean hasResourceName(java.lang.String name)`
- `public java.lang.String getPackName()`
- `protected java.io.InputStream getInputStreamByName(java.lang.String resourceName)  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.awt.image.BufferedImage getPackImage()  throws java.io.IOException`
  - throws: java.io.IOException
- `public ModContainer getFMLContainer()`

### Inherited methods
- from `net.minecraft.client.resources.FolderResourcePack`: `getResourceDomains`, `validatePath`
- from `net.minecraft.client.resources.AbstractResourcePack`: `getInputStream`, `getPackMetadata`, `getRelativeName`, `logNameNotLowercase`, `resourceExists`

## GuiAccessDenied

*class* `net.minecraftforge.fml.client.GuiAccessDenied`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void actionPerformed(GuiButton p_73875_1_)`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiBackupFailed

*class* `net.minecraftforge.fml.client.GuiBackupFailed`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void actionPerformed(GuiButton p_73875_1_)`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiConfirmation

*class* `net.minecraftforge.fml.client.GuiConfirmation`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraftforge.fml.client.GuiNotification`: `query`
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void actionPerformed(GuiButton button)`

### Inherited methods
- from `net.minecraftforge.fml.client.GuiNotification`: `drawScreen`
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiCustomModLoadingErrorScreen

*class* `net.minecraftforge.fml.client.GuiCustomModLoadingErrorScreen`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraftforge.fml.client.GuiErrorBase`: `actionPerformed`
- from `net.minecraft.client.gui.GuiErrorScreen`: `keyTyped`
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiDupesFound

*class* `net.minecraftforge.fml.client.GuiDupesFound`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraftforge.fml.client.GuiErrorBase`: `actionPerformed`, `initGui`
- from `net.minecraft.client.gui.GuiErrorScreen`: `keyTyped`
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiErrorBase

*class* `net.minecraftforge.fml.client.GuiErrorBase`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void actionPerformed(GuiButton button)`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiErrorScreen`: `keyTyped`
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiModList

*class* `net.minecraftforge.fml.client.GuiModList`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void mouseClicked(int x,  int y,  int button)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void keyTyped(char c,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void updateScreen()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public int drawLine(java.lang.String line,  int offset,  int shifty)`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `public void selectModIndex(int index)`
- `public boolean modIndexSelected(int index)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiModsMissing

*class* `net.minecraftforge.fml.client.GuiModsMissing`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraftforge.fml.client.GuiErrorBase`: `actionPerformed`, `initGui`
- from `net.minecraft.client.gui.GuiErrorScreen`: `keyTyped`
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiModsMissingForServer

*class* `net.minecraftforge.fml.client.GuiModsMissingForServer`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void actionPerformed(GuiButton p_73875_1_)`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiMultipleModsErrored

*class* `net.minecraftforge.fml.client.GuiMultipleModsErrored`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public void actionPerformed(GuiButton button)`
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException

### Inherited methods
- from `net.minecraft.client.gui.GuiErrorScreen`: `keyTyped`
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiNotification

*class* `net.minecraftforge.fml.client.GuiNotification`

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `protected final StartupQuery query`

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void actionPerformed(GuiButton button)`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiOldSaveLoadConfirm

*class* `net.minecraftforge.fml.client.GuiOldSaveLoadConfirm`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiYesNo`: `cancelButtonText`, `confirmButtonText`, `messageLine1`, `parentButtonClickedId`, `parentScreen`
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `protected void actionPerformed(GuiButton button)`

### Inherited methods
- from `net.minecraft.client.gui.GuiYesNo`: `initGui`, `setButtonDelay`, `updateScreen`
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`
- from `net.minecraft.client.gui.GuiYesNoCallback`: `confirmClicked`

## GuiScrollingList

*class* `net.minecraftforge.fml.client.GuiScrollingList`

### Fields
- `protected final int listWidth`
- `protected final int listHeight`
- `protected final int screenWidth`
- `protected final int screenHeight`
- `protected final int top`
- `protected final int bottom`
- `protected final int right`
- `protected final int left`
- `protected final int slotHeight`
- `protected int mouseX`
- `protected int mouseY`
- `protected int selectedIndex`
- `protected boolean captureMouse`

### Methods
- `@Deprecated public void func_27258_a(boolean p_27258_1_)` (deprecated)
  Deprecated.
- `@Deprecated protected void func_27259_a(boolean hasFooter,  int footerHeight)` (deprecated)
  Deprecated.
- `protected void setHeaderInfo(boolean hasHeader,  int headerHeight)`
- `protected abstract int getSize()`
- `protected abstract void elementClicked(int index,  boolean doubleClick)`
- `protected abstract boolean isSelected(int index)`
- `protected int getContentHeight()`
- `protected abstract void drawBackground()`
- `protected abstract void drawSlot(int slotIdx,  int entryRight,  int slotTop,  int slotBuffer,  Tessellator tess)`
  Draw anything special on the screen. GL_SCISSOR is enabled for anything that
   is rendered outside of the view box. Do not mess with SCISSOR unless you support this.
- `@Deprecated protected void func_27260_a(int entryRight,  int relativeY,  Tessellator tess)` (deprecated)
  Deprecated.
- `protected void drawHeader(int entryRight,  int relativeY,  Tessellator tess)`
  Draw anything special on the screen. GL_SCISSOR is enabled for anything that
   is rendered outside of the view box. Do not mess with SCISSOR unless you support this.
- `@Deprecated protected void func_27255_a(int x,  int y)` (deprecated)
  Deprecated.
- `protected void clickHeader(int x,  int y)`
- `@Deprecated protected void func_27257_b(int mouseX,  int mouseY)` (deprecated)
  Deprecated.
- `protected void drawScreen(int mouseX,  int mouseY)`
  Draw anything special on the screen. GL_SCISSOR is enabled for anything that
   is rendered outside of the view box. Do not mess with SCISSOR unless you support this.
- `@Deprecated public int func_27256_c(int x,  int y)` (deprecated)
  Deprecated.
- `public void registerScrollButtons(java.util.List<GuiButton> buttons,  int upActionID,  int downActionID)`
- `public void actionPerformed(GuiButton button)`
- `public void handleMouseInput(int mouseX,  int mouseY)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `protected void drawGradientRect(int left,  int top,  int right,  int bottom,  int color1,  int color2)`

## GuiSlotModList

*class* `net.minecraftforge.fml.client.GuiSlotModList`

### Inherited fields
- from `net.minecraftforge.fml.client.GuiScrollingList`: `bottom`, `captureMouse`, `left`, `listHeight`, `listWidth`, `mouseX`, `mouseY`, `right`, `screenHeight`, `screenWidth`, `selectedIndex`, `slotHeight`, `top`

### Methods
- `protected int getSize()`
- `protected void elementClicked(int index,  boolean doubleClick)`
- `protected boolean isSelected(int index)`
- `protected void drawBackground()`
- `protected int getContentHeight()`
- `protected void drawSlot(int idx,  int right,  int top,  int height,  Tessellator tess)`
  Description copied from class: GuiScrollingList
  Draw anything special on the screen. GL_SCISSOR is enabled for anything that
   is rendered outside of the view box. Do not mess with SCISSOR unless you support this.

### Inherited methods
- from `net.minecraftforge.fml.client.GuiScrollingList`: `actionPerformed`, `clickHeader`, `drawGradientRect`, `drawHeader`, `drawScreen`, `drawScreen`, `func_27255_a`, `func_27256_c`, `func_27257_b`, `func_27258_a`, `func_27259_a`, `func_27260_a`, `handleMouseInput`, `registerScrollButtons`, `setHeaderInfo`

## GuiSortingProblem

*class* `net.minecraftforge.fml.client.GuiSortingProblem`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `actionPerformed`, `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiWrongMinecraft

*class* `net.minecraftforge.fml.client.GuiWrongMinecraft`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraftforge.fml.client.GuiErrorBase`: `actionPerformed`, `initGui`
- from `net.minecraft.client.gui.GuiErrorScreen`: `keyTyped`
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## IDisplayableError

*interface* `net.minecraftforge.fml.client.IDisplayableError`

### Methods
- `GuiScreen createGui()`

## IModGuiFactory

*interface* `net.minecraftforge.fml.client.IModGuiFactory`

This is the interface you need to implement if you want to provide a customized config screen.
 DefaultGuiFactory provides a default implementation of this interface and will be used
 if the mod does not specify anything else.

### Methods
- `void initialize(Minecraft minecraftInstance)`
  Called when instantiated to initialize with the active minecraft instance.
  - param: minecraftInstance - the instance
- `boolean hasConfigGui()`
  If this method returns false, the config button in the mod list will be disabled
  - returns: true if this object provides a config gui screen, false otherwise
- `GuiScreen createConfigGui(GuiScreen parentScreen)`
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
  - param: parentScreen - The screen to which must be returned when closing the
 returned screen.
  - returns: A class that will be instantiated on clicks on the config button
 or null if no GUI is desired.
- `java.util.Set<IModGuiFactory.RuntimeOptionCategoryElement> runtimeGuiCategories()`
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

## IModGuiFactory.RuntimeOptionCategoryElement

*class* `net.minecraftforge.fml.client.IModGuiFactory.RuntimeOptionCategoryElement`

Represents an option category and entry in the runtime gui options list.

Enclosing interface: IModGuiFactory

### Fields
- `public final java.lang.String parent`
- `public final java.lang.String child`

## SplashProgress

*class* `net.minecraftforge.fml.client.SplashProgress`

Not a fully fleshed out API, may change in future MC versions.
 However feel free to use and suggest additions.

### Methods
- `public static void start()`
- `public static int getMaxTextureSize()`
- `@Deprecated public static void pause()` (deprecated)
  Deprecated. not a stable API, will break, don't use this yet
  Call before you need to explicitly modify GL context state during loading.
   Resource loading doesn't usually require this call.
   Call resume() when you're done.
- `@Deprecated public static void resume()` (deprecated)
  Deprecated. not a stable API, will break, don't use this yet
- `public static void finish()`
- `public static void drawVanillaScreen(TextureManager renderEngine)  throws LWJGLException`
  - throws: LWJGLException
- `public static void clearVanillaResources(TextureManager renderEngine,  ResourceLocation mojangLogo)`
- `public static void checkGLError(java.lang.String where)`
