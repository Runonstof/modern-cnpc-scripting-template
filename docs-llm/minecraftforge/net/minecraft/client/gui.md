# net.minecraft.client.gui

- [BossInfoClient](#bossinfoclient)
- [ChatLine](#chatline)
- [FontRenderer](#fontrenderer)
- [Gui](#gui)
- [GuiBossOverlay](#guibossoverlay)
- [GuiButton](#guibutton)
- [GuiButtonImage](#guibuttonimage)
- [GuiButtonLanguage](#guibuttonlanguage)
- [GuiButtonRealmsProxy](#guibuttonrealmsproxy)
- [GuiButtonToggle](#guibuttontoggle)
- [GuiChat](#guichat)
- [GuiChat.ChatTabCompleter](#guichat.chattabcompleter)
- [GuiClickableScrolledSelectionListProxy](#guiclickablescrolledselectionlistproxy)
- [GuiCommandBlock](#guicommandblock)
- [GuiConfirmOpenLink](#guiconfirmopenlink)
- [GuiControls](#guicontrols)
- [GuiCreateFlatWorld](#guicreateflatworld)
- [GuiCreateWorld](#guicreateworld)
- [GuiCustomizeSkin](#guicustomizeskin)
- [GuiCustomizeWorldScreen](#guicustomizeworldscreen)
- [GuiDisconnected](#guidisconnected)
- [GuiDownloadTerrain](#guidownloadterrain)
- [GuiEnchantment](#guienchantment)
- [GuiErrorScreen](#guierrorscreen)
- [GuiFlatPresets](#guiflatpresets)
- [GuiGameOver](#guigameover)
- [GuiHopper](#guihopper)
- [GuiIngame](#guiingame)
- [GuiIngameMenu](#guiingamemenu)
- [GuiKeyBindingList](#guikeybindinglist)
- [GuiKeyBindingList.CategoryEntry](#guikeybindinglist.categoryentry)
- [GuiKeyBindingList.KeyEntry](#guikeybindinglist.keyentry)
- [GuiLabel](#guilabel)
- [GuiLanguage](#guilanguage)
- [GuiListButton](#guilistbutton)
- [GuiListExtended](#guilistextended)
- [GuiListExtended.IGuiListEntry](#guilistextended.iguilistentry)
- [GuiListWorldSelection](#guilistworldselection)
- [GuiListWorldSelectionEntry](#guilistworldselectionentry)
- [GuiLockIconButton](#guilockiconbutton)
- [GuiMainMenu](#guimainmenu)
- [GuiMemoryErrorScreen](#guimemoryerrorscreen)
- [GuiMerchant](#guimerchant)
- [GuiMultiplayer](#guimultiplayer)
- [GuiNewChat](#guinewchat)
- [GuiOptionButton](#guioptionbutton)
- [GuiOptions](#guioptions)
- [GuiOptionSlider](#guioptionslider)
- [GuiOptionsRowList](#guioptionsrowlist)
- [GuiOptionsRowList.Row](#guioptionsrowlist.row)
- [GuiOverlayDebug](#guioverlaydebug)
- [GuiPageButtonList](#guipagebuttonlist)
- [GuiPageButtonList.EditBoxEntry](#guipagebuttonlist.editboxentry)
- [GuiPageButtonList.GuiButtonEntry](#guipagebuttonlist.guibuttonentry)
- [GuiPageButtonList.GuiEntry](#guipagebuttonlist.guientry)
- [GuiPageButtonList.GuiLabelEntry](#guipagebuttonlist.guilabelentry)
- [GuiPageButtonList.GuiListEntry](#guipagebuttonlist.guilistentry)
- [GuiPageButtonList.GuiResponder](#guipagebuttonlist.guiresponder)
- [GuiPageButtonList.GuiSlideEntry](#guipagebuttonlist.guislideentry)
- [GuiPlayerTabOverlay](#guiplayertaboverlay)
- [GuiRepair](#guirepair)
- [GuiResourcePackAvailable](#guiresourcepackavailable)
- [GuiResourcePackList](#guiresourcepacklist)
- [GuiResourcePackSelected](#guiresourcepackselected)
- [GuiScreen](#guiscreen)
- [GuiScreenAddServer](#guiscreenaddserver)
- [GuiScreenBook](#guiscreenbook)
- [GuiScreenCustomizePresets](#guiscreencustomizepresets)
- [GuiScreenDemo](#guiscreendemo)
- [GuiScreenOptionsSounds](#guiscreenoptionssounds)
- [GuiScreenRealmsProxy](#guiscreenrealmsproxy)
- [GuiScreenResourcePacks](#guiscreenresourcepacks)
- [GuiScreenServerList](#guiscreenserverlist)
- [GuiScreenWorking](#guiscreenworking)
- [GuiShareToLan](#guisharetolan)
- [GuiSimpleScrolledSelectionListProxy](#guisimplescrolledselectionlistproxy)
- [GuiSleepMP](#guisleepmp)
- [GuiSlider](#guislider)
- [GuiSlider.FormatHelper](#guislider.formathelper)
- [GuiSlot](#guislot)
- [GuiSlotRealmsProxy](#guislotrealmsproxy)
- [GuiSnooper](#guisnooper)
- [GuiSpectator](#guispectator)
- [GuiSubtitleOverlay](#guisubtitleoverlay)
- [GuiSubtitleOverlay.Subtitle](#guisubtitleoverlay.subtitle)
- [GuiTextField](#guitextfield)
- [GuiUtilRenderComponents](#guiutilrendercomponents)
- [GuiVideoSettings](#guivideosettings)
- [GuiWinGame](#guiwingame)
- [GuiWorldEdit](#guiworldedit)
- [GuiWorldSelection](#guiworldselection)
- [GuiYesNo](#guiyesno)
- [GuiYesNoCallback](#guiyesnocallback)
- [IProgressMeter](#iprogressmeter)
- [MapItemRenderer](#mapitemrenderer)
- [ScaledResolution](#scaledresolution)
- [ScreenChatOptions](#screenchatoptions)
- [ServerListEntryLanDetected](#serverlistentrylandetected)
- [ServerListEntryLanScan](#serverlistentrylanscan)
- [ServerListEntryNormal](#serverlistentrynormal)
- [ServerSelectionList](#serverselectionlist)
## BossInfoClient

*class* `net.minecraft.client.gui.BossInfoClient`

### Fields
- `protected float rawPercent`
- `protected long percentSetTime`

### Inherited fields
- from `net.minecraft.world.BossInfo`: `color`, `createFog`, `darkenSky`, `name`, `overlay`, `percent`, `playEndBossMusic`

### Methods
- `public void setPercent(float percentIn)`
- `public float getPercent()`
- `public void updateFromPacket(SPacketUpdateBossInfo packetIn)`

### Inherited methods
- from `net.minecraft.world.BossInfo`: `getColor`, `getName`, `getOverlay`, `getUniqueId`, `setColor`, `setCreateFog`, `setDarkenSky`, `setName`, `setOverlay`, `setPlayEndBossMusic`, `shouldCreateFog`, `shouldDarkenSky`, `shouldPlayEndBossMusic`

## ChatLine

*class* `net.minecraft.client.gui.ChatLine`

### Methods
- `public ITextComponent getChatComponent()`
- `public int getUpdatedCounter()`
- `public int getChatLineID()`

## FontRenderer

*class* `net.minecraft.client.gui.FontRenderer`

All Implemented Interfaces: IResourceManagerReloadListener

### Fields
- `protected final int[] charWidth`
- `public int FONT_HEIGHT`
- `public java.util.Random fontRandom`
- `protected final byte[] glyphWidth`
- `protected final ResourceLocation locationFontTexture`
- `protected float posX`
- `protected float posY`

### Methods
- `public void onResourceManagerReload(IResourceManager resourceManager)`
- `protected float renderDefaultChar(int ch,  boolean italic)`
- `protected float renderUnicodeChar(char ch,  boolean italic)`
- `public int drawStringWithShadow(java.lang.String text,  float x,  float y,  int color)`
- `public int drawString(java.lang.String text,  int x,  int y,  int color)`
- `public int drawString(java.lang.String text,  float x,  float y,  int color,  boolean dropShadow)`
- `protected void doDraw(float f)`
- `public int getStringWidth(java.lang.String text)`
- `public int getCharWidth(char character)`
- `public java.lang.String trimStringToWidth(java.lang.String text,  int width)`
- `public java.lang.String trimStringToWidth(java.lang.String text,  int width,  boolean reverse)`
- `public void drawSplitString(java.lang.String str,  int x,  int y,  int wrapWidth,  int textColor)`
- `public int getWordWrappedHeight(java.lang.String str,  int maxLength)`
- `public void setUnicodeFlag(boolean unicodeFlagIn)`
- `public boolean getUnicodeFlag()`
- `public void setBidiFlag(boolean bidiFlagIn)`
- `public java.util.List<java.lang.String> listFormattedStringToWidth(java.lang.String str,  int wrapWidth)`
- `public static java.lang.String getFormatFromString(java.lang.String text)`
- `public boolean getBidiFlag()`
- `protected void setColor(float r,  float g,  float b,  float a)`
- `protected void enableAlpha()`
- `protected void bindTexture(ResourceLocation location)`
- `protected IResource getResource(ResourceLocation location)  throws java.io.IOException`
  - throws: java.io.IOException
- `public int getColorCode(char character)`

## Gui

*class* `net.minecraft.client.gui.Gui`

### Fields
- `public static final ResourceLocation OPTIONS_BACKGROUND`
- `public static final ResourceLocation STAT_ICONS`
- `public static final ResourceLocation ICONS`
- `protected float zLevel`

### Methods
- `protected void drawHorizontalLine(int startX,  int endX,  int y,  int color)`
- `protected void drawVerticalLine(int x,  int startY,  int endY,  int color)`
- `public static void drawRect(int left,  int top,  int right,  int bottom,  int color)`
- `protected void drawGradientRect(int left,  int top,  int right,  int bottom,  int startColor,  int endColor)`
- `public void drawCenteredString(FontRenderer fontRendererIn,  java.lang.String text,  int x,  int y,  int color)`
- `public void drawString(FontRenderer fontRendererIn,  java.lang.String text,  int x,  int y,  int color)`
- `public void drawTexturedModalRect(int x,  int y,  int textureX,  int textureY,  int width,  int height)`
- `public void drawTexturedModalRect(float xCoord,  float yCoord,  int minU,  int minV,  int maxU,  int maxV)`
- `public void drawTexturedModalRect(int xCoord,  int yCoord,  TextureAtlasSprite textureSprite,  int widthIn,  int heightIn)`
- `public static void drawModalRectWithCustomSizedTexture(int x,  int y,  float u,  float v,  int width,  int height,  float textureWidth,  float textureHeight)`
- `public static void drawScaledCustomSizeModalRect(int x,  int y,  float u,  float v,  int uWidth,  int vHeight,  int width,  int height,  float tileWidth,  float tileHeight)`

## GuiBossOverlay

*class* `net.minecraft.client.gui.GuiBossOverlay`

### Inherited fields
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void renderBossHealth()`
- `public void read(SPacketUpdateBossInfo packetIn)`
- `public void clearBossInfos()`
- `public boolean shouldPlayEndBossMusic()`
- `public boolean shouldDarkenSky()`
- `public boolean shouldCreateFog()`

### Inherited methods
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiButton

*class* `net.minecraft.client.gui.GuiButton`

### Fields
- `protected static final ResourceLocation BUTTON_TEXTURES`
- `public int width`
- `public int height`
- `public int x`
- `public int y`
- `public java.lang.String displayString`
- `public int id`
- `public boolean enabled`
- `public boolean visible`
- `protected boolean hovered`
- `public int packedFGColour`

### Inherited fields
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `protected int getHoverState(boolean mouseOver)`
- `public void drawButton(Minecraft mc,  int mouseX,  int mouseY,  float partialTicks)`
- `protected void mouseDragged(Minecraft mc,  int mouseX,  int mouseY)`
- `public void mouseReleased(int mouseX,  int mouseY)`
- `public boolean mousePressed(Minecraft mc,  int mouseX,  int mouseY)`
- `public boolean isMouseOver()`
- `public void drawButtonForegroundLayer(int mouseX,  int mouseY)`
- `public void playPressSound(SoundHandler soundHandlerIn)`
- `public int getButtonWidth()`
- `public void setWidth(int width)`

### Inherited methods
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiButtonImage

*class* `net.minecraft.client.gui.GuiButtonImage`

### Inherited fields
- from `net.minecraft.client.gui.GuiButton`: `BUTTON_TEXTURES`, `displayString`, `enabled`, `height`, `hovered`, `id`, `packedFGColour`, `visible`, `width`, `x`, `y`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void setPosition(int p_191746_1_,  int p_191746_2_)`
- `public void drawButton(Minecraft mc,  int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiButton`: `drawButtonForegroundLayer`, `getButtonWidth`, `getHoverState`, `isMouseOver`, `mouseDragged`, `mousePressed`, `mouseReleased`, `playPressSound`, `setWidth`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiButtonLanguage

*class* `net.minecraft.client.gui.GuiButtonLanguage`

### Inherited fields
- from `net.minecraft.client.gui.GuiButton`: `BUTTON_TEXTURES`, `displayString`, `enabled`, `height`, `hovered`, `id`, `packedFGColour`, `visible`, `width`, `x`, `y`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void drawButton(Minecraft mc,  int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiButton`: `drawButtonForegroundLayer`, `getButtonWidth`, `getHoverState`, `isMouseOver`, `mouseDragged`, `mousePressed`, `mouseReleased`, `playPressSound`, `setWidth`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiButtonRealmsProxy

*class* `net.minecraft.client.gui.GuiButtonRealmsProxy`

### Inherited fields
- from `net.minecraft.client.gui.GuiButton`: `BUTTON_TEXTURES`, `displayString`, `enabled`, `height`, `hovered`, `id`, `packedFGColour`, `visible`, `width`, `x`, `y`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public int getId()`
- `public boolean getEnabled()`
- `public void setEnabled(boolean isEnabled)`
- `public void setText(java.lang.String text)`
- `public int getButtonWidth()`
- `public int getPositionY()`
- `public boolean mousePressed(Minecraft mc,  int mouseX,  int mouseY)`
- `public void mouseReleased(int mouseX,  int mouseY)`
- `public void mouseDragged(Minecraft mc,  int mouseX,  int mouseY)`
- `public RealmsButton getRealmsButton()`
- `public int getHoverState(boolean mouseOver)`
- `public int getYImage(boolean p_154312_1_)`
- `public int getHeight()`

### Inherited methods
- from `net.minecraft.client.gui.GuiButton`: `drawButton`, `drawButtonForegroundLayer`, `isMouseOver`, `playPressSound`, `setWidth`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiButtonToggle

*class* `net.minecraft.client.gui.GuiButtonToggle`

### Fields
- `protected ResourceLocation resourceLocation`
- `protected boolean stateTriggered`
- `protected int xTexStart`
- `protected int yTexStart`
- `protected int xDiffTex`
- `protected int yDiffTex`

### Inherited fields
- from `net.minecraft.client.gui.GuiButton`: `BUTTON_TEXTURES`, `displayString`, `enabled`, `height`, `hovered`, `id`, `packedFGColour`, `visible`, `width`, `x`, `y`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initTextureValues(int xTexStartIn,  int yTexStartIn,  int xDiffTexIn,  int yDiffTexIn,  ResourceLocation resourceLocationIn)`
- `public void setStateTriggered(boolean p_191753_1_)`
- `public boolean isStateTriggered()`
- `public void setPosition(int p_191752_1_,  int p_191752_2_)`
- `public void drawButton(Minecraft mc,  int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiButton`: `drawButtonForegroundLayer`, `getButtonWidth`, `getHoverState`, `isMouseOver`, `mouseDragged`, `mousePressed`, `mouseReleased`, `playPressSound`, `setWidth`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiChat

*class* `net.minecraft.client.gui.GuiChat`

All Implemented Interfaces: GuiYesNoCallback, ITabCompleter

### Fields
- `protected GuiTextField inputField`

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void onGuiClosed()`
- `public void updateScreen()`
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void setText(java.lang.String newChatText,  boolean shouldOverwrite)`
- `public void getSentHistory(int msgPos)`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public boolean doesGuiPauseGame()`
- `public void setCompletions(java.lang.String... newCompletions)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `actionPerformed`, `addButton`, `confirmClicked`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `mouseReleased`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiChat.ChatTabCompleter

*class* `net.minecraft.client.gui.GuiChat.ChatTabCompleter`

Enclosing class: GuiChat

### Inherited fields
- from `net.minecraft.util.TabCompleter`: `completionIdx`, `completions`, `didComplete`, `hasTargetBlock`, `requestedCompletions`, `textField`

### Methods
- `public void complete()`
- `public BlockPos getTargetBlockPos()`

### Inherited methods
- from `net.minecraft.util.TabCompleter`: `resetDidComplete`, `resetRequested`, `setCompletions`

## GuiClickableScrolledSelectionListProxy

*class* `net.minecraft.client.gui.GuiClickableScrolledSelectionListProxy`

### Inherited fields
- from `net.minecraft.client.gui.GuiSlot`: `amountScrolled`, `bottom`, `centerListVertically`, `hasListHeader`, `headerPadding`, `height`, `initialClickY`, `lastClicked`, `left`, `mc`, `mouseX`, `mouseY`, `right`, `scrollMultiplier`, `selectedElement`, `showSelectionBox`, `slotHeight`, `top`, `visible`, `width`

### Methods
- `protected int getSize()`
- `protected void elementClicked(int slotIndex,  boolean isDoubleClick,  int mouseX,  int mouseY)`
- `protected boolean isSelected(int slotIndex)`
- `protected void drawBackground()`
- `protected void drawSlot(int slotIndex,  int xPos,  int yPos,  int heightIn,  int mouseXIn,  int mouseYIn,  float partialTicks)`
- `public int width()`
- `public int mouseY()`
- `public int mouseX()`
- `protected int getContentHeight()`
- `protected int getScrollBarX()`
- `public void handleMouseInput()`
- `public void renderSelected(int p_178043_1_,  int p_178043_2_,  int p_178043_3_,  Tezzelator p_178043_4_)`
- `protected void drawSelectionBox(int insideLeft,  int insideTop,  int mouseXIn,  int mouseYIn,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiSlot`: `actionPerformed`, `bindAmountScrolled`, `clickedHeader`, `drawContainerBackground`, `drawListHeader`, `drawScreen`, `getAmountScrolled`, `getEnabled`, `getListWidth`, `getMaxScroll`, `getSlotHeight`, `getSlotIndexFromScreenCoords`, `isMouseYWithinSlotBounds`, `overlayBackground`, `registerScrollButtons`, `renderDecorations`, `scrollBy`, `setDimensions`, `setEnabled`, `setHasListHeader`, `setShowSelectionBox`, `setSlotXBoundsFromLeft`, `updateItemPos`

## GuiCommandBlock

*class* `net.minecraft.client.gui.GuiCommandBlock`

All Implemented Interfaces: GuiYesNoCallback, ITabCompleter

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void updateScreen()`
- `public void initGui()`
- `public void updateGui()`
- `public void onGuiClosed()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public void setCompletions(java.lang.String... newCompletions)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `mouseReleased`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiConfirmOpenLink

*class* `net.minecraft.client.gui.GuiConfirmOpenLink`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiYesNo`: `cancelButtonText`, `confirmButtonText`, `messageLine1`, `parentButtonClickedId`, `parentScreen`
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void copyLinkToClipboard()`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public void disableSecurityWarning()`

### Inherited methods
- from `net.minecraft.client.gui.GuiYesNo`: `setButtonDelay`, `updateScreen`
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiControls

*class* `net.minecraft.client.gui.GuiControls`

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `protected java.lang.String screenTitle`
- `public KeyBinding buttonId`
- `public long time`

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseReleased(int mouseX,  int mouseY,  int state)`
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiCreateFlatWorld

*class* `net.minecraft.client.gui.GuiCreateFlatWorld`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public java.lang.String getPreset()`
- `public void setPreset(java.lang.String preset)`
- `public void initGui()`
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void onLayersChanged()`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiCreateWorld

*class* `net.minecraft.client.gui.GuiCreateWorld`

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `public java.lang.String chunkProviderSettingsJson`

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void updateScreen()`
- `public void initGui()`
- `public static java.lang.String getUncollidingSaveDirName(ISaveFormat saveLoader,  java.lang.String name)`
- `public void onGuiClosed()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public void recreateFromExistingWorld(WorldInfo original)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `mouseReleased`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiCustomizeSkin

*class* `net.minecraft.client.gui.GuiCustomizeSkin`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiCustomizeWorldScreen

*class* `net.minecraft.client.gui.GuiCustomizeWorldScreen`

All Implemented Interfaces: GuiPageButtonList.GuiResponder, GuiSlider.FormatHelper, GuiYesNoCallback

### Fields
- `protected java.lang.String title`
- `protected java.lang.String subtitle`
- `protected java.lang.String pageTitle`
- `protected java.lang.String[] pageNames`

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.lang.String saveValues()`
- `public void loadValues(java.lang.String p_175324_1_)`
- `public void setEntryValue(int id,  java.lang.String value)`
- `public java.lang.String getText(int id,  java.lang.String name,  float value)`
- `public void setEntryValue(int id,  boolean value)`
- `public void setEntryValue(int id,  float value)`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseReleased(int mouseX,  int mouseY,  int state)`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiDisconnected

*class* `net.minecraft.client.gui.GuiDisconnected`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void initGui()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiDownloadTerrain

*class* `net.minecraft.client.gui.GuiDownloadTerrain`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public boolean doesGuiPauseGame()`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `actionPerformed`, `addButton`, `confirmClicked`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiEnchantment

*class* `net.minecraft.client.gui.GuiEnchantment`

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `public int ticks`
- `public float flip`
- `public float oFlip`
- `public float flipT`
- `public float flipA`
- `public float open`
- `public float oOpen`

### Inherited fields
- from `net.minecraft.client.gui.inventory.GuiContainer`: `dragSplitting`, `dragSplittingSlots`, `guiLeft`, `guiTop`, `INVENTORY_BACKGROUND`, `inventorySlots`, `xSize`, `ySize`
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `protected void drawGuiContainerForegroundLayer(int mouseX,  int mouseY)`
- `public void updateScreen()`
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void drawGuiContainerBackgroundLayer(float partialTicks,  int mouseX,  int mouseY)`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public void tickBook()`

### Inherited methods
- from `net.minecraft.client.gui.inventory.GuiContainer`: `checkHotbarKeys`, `doesGuiPauseGame`, `getGuiLeft`, `getGuiTop`, `getSlotUnderMouse`, `getXSize`, `getYSize`, `handleMouseClick`, `hasClickedOutside`, `initGui`, `isPointInRegion`, `keyTyped`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `renderHoveredToolTip`
- from `net.minecraft.client.gui.GuiScreen`: `actionPerformed`, `addButton`, `confirmClicked`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiErrorScreen

*class* `net.minecraft.client.gui.GuiErrorScreen`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiFlatPresets

*class* `net.minecraft.client.gui.GuiFlatPresets`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `public void onGuiClosed()`
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public void updateScreen()`
- `public void updateButtonValidity()`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `mouseReleased`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiGameOver

*class* `net.minecraft.client.gui.GuiGameOver`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void confirmClicked(boolean result,  int id)`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public ITextComponent getClickedComponentAt(int p_184870_1_)`
- `public boolean doesGuiPauseGame()`
- `public void updateScreen()`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiHopper

*class* `net.minecraft.client.gui.GuiHopper`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.inventory.GuiContainer`: `dragSplitting`, `dragSplittingSlots`, `guiLeft`, `guiTop`, `INVENTORY_BACKGROUND`, `inventorySlots`, `xSize`, `ySize`
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `protected void drawGuiContainerForegroundLayer(int mouseX,  int mouseY)`
- `protected void drawGuiContainerBackgroundLayer(float partialTicks,  int mouseX,  int mouseY)`

### Inherited methods
- from `net.minecraft.client.gui.inventory.GuiContainer`: `checkHotbarKeys`, `doesGuiPauseGame`, `getGuiLeft`, `getGuiTop`, `getSlotUnderMouse`, `getXSize`, `getYSize`, `handleMouseClick`, `hasClickedOutside`, `initGui`, `isPointInRegion`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `renderHoveredToolTip`, `updateScreen`
- from `net.minecraft.client.gui.GuiScreen`: `actionPerformed`, `addButton`, `confirmClicked`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiIngame

*class* `net.minecraft.client.gui.GuiIngame`

### Fields
- `protected static final ResourceLocation VIGNETTE_TEX_PATH`
- `protected static final ResourceLocation WIDGETS_TEX_PATH`
- `protected static final ResourceLocation PUMPKIN_BLUR_TEX_PATH`
- `protected final java.util.Random rand`
- `protected final Minecraft mc`
- `protected final RenderItem itemRenderer`
- `protected final GuiNewChat persistantChatGUI`
- `protected int updateCounter`
- `protected java.lang.String overlayMessage`
- `protected int overlayMessageTime`
- `protected boolean animateOverlayMessageColor`
- `public float prevVignetteBrightness`
- `protected int remainingHighlightTicks`
- `protected ItemStack highlightingItemStack`
- `protected final GuiOverlayDebug overlayDebug`
- `protected final GuiSubtitleOverlay overlaySubtitle`
- `protected final GuiSpectator spectatorGui`
- `protected final GuiPlayerTabOverlay overlayPlayerList`
- `protected final GuiBossOverlay overlayBoss`
- `protected int titlesTimer`
- `protected java.lang.String displayedTitle`
- `protected java.lang.String displayedSubTitle`
- `protected int titleFadeIn`
- `protected int titleDisplayTime`
- `protected int titleFadeOut`
- `protected int playerHealth`
- `protected int lastPlayerHealth`
- `protected long lastSystemTime`
- `protected long healthUpdateCounter`
- `protected final java.util.Map<ChatType,java.util.List<IChatListener>> chatListeners`

### Inherited fields
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void setDefaultTitlesTimes()`
- `public void renderGameOverlay(float partialTicks)`
- `protected void renderAttackIndicator(float p_184045_1_,  ScaledResolution p_184045_2_)`
- `protected void renderPotionEffects(ScaledResolution resolution)`
- `protected void renderHotbar(ScaledResolution sr,  float partialTicks)`
- `public void renderHorseJumpBar(ScaledResolution scaledRes,  int x)`
- `public void renderExpBar(ScaledResolution scaledRes,  int x)`
- `public void renderSelectedItem(ScaledResolution scaledRes)`
- `public void renderDemo(ScaledResolution scaledRes)`
- `protected void renderScoreboard(ScoreObjective objective,  ScaledResolution scaledRes)`
- `protected void renderPlayerStats(ScaledResolution scaledRes)`
- `protected void renderMountHealth(ScaledResolution p_184047_1_)`
- `protected void renderPumpkinOverlay(ScaledResolution scaledRes)`
- `protected void renderVignette(float lightLevel,  ScaledResolution scaledRes)`
- `protected void renderPortal(float timeInPortal,  ScaledResolution scaledRes)`
- `protected void renderHotbarItem(int p_184044_1_,  int p_184044_2_,  float p_184044_3_,  EntityPlayer player,  ItemStack stack)`
- `public void updateTick()`
- `public void setRecordPlayingMessage(java.lang.String recordName)`
- `public void setOverlayMessage(java.lang.String message,  boolean animateColor)`
- `public void displayTitle(java.lang.String title,  java.lang.String subTitle,  int timeFadeIn,  int displayTime,  int timeFadeOut)`
- `public void setOverlayMessage(ITextComponent component,  boolean animateColor)`
- `public void addChatMessage(ChatType chatTypeIn,  ITextComponent message)`
- `public GuiNewChat getChatGUI()`
- `public int getUpdateCounter()`
- `public FontRenderer getFontRenderer()`
- `public GuiSpectator getSpectatorGui()`
- `public GuiPlayerTabOverlay getTabList()`
- `public void resetPlayersOverlayFooterHeader()`
- `public GuiBossOverlay getBossOverlay()`

### Inherited methods
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiIngameMenu

*class* `net.minecraft.client.gui.GuiIngameMenu`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void updateScreen()`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiKeyBindingList

*class* `net.minecraft.client.gui.GuiKeyBindingList`

### Inherited fields
- from `net.minecraft.client.gui.GuiSlot`: `amountScrolled`, `bottom`, `centerListVertically`, `hasListHeader`, `headerPadding`, `height`, `initialClickY`, `lastClicked`, `left`, `mouseX`, `mouseY`, `right`, `scrollMultiplier`, `selectedElement`, `showSelectionBox`, `slotHeight`, `top`, `visible`, `width`

### Methods
- `protected int getSize()`
- `public GuiListExtended.IGuiListEntry getListEntry(int index)`
- `protected int getScrollBarX()`
- `public int getListWidth()`

### Inherited methods
- from `net.minecraft.client.gui.GuiListExtended`: `drawBackground`, `drawSlot`, `elementClicked`, `isSelected`, `mouseClicked`, `mouseReleased`, `updateItemPos`
- from `net.minecraft.client.gui.GuiSlot`: `actionPerformed`, `bindAmountScrolled`, `clickedHeader`, `drawContainerBackground`, `drawListHeader`, `drawScreen`, `drawSelectionBox`, `getAmountScrolled`, `getContentHeight`, `getEnabled`, `getMaxScroll`, `getSlotHeight`, `getSlotIndexFromScreenCoords`, `handleMouseInput`, `isMouseYWithinSlotBounds`, `overlayBackground`, `registerScrollButtons`, `renderDecorations`, `scrollBy`, `setDimensions`, `setEnabled`, `setHasListHeader`, `setShowSelectionBox`, `setSlotXBoundsFromLeft`

## GuiKeyBindingList.CategoryEntry

*class* `net.minecraft.client.gui.GuiKeyBindingList.CategoryEntry`

All Implemented Interfaces: GuiListExtended.IGuiListEntry

Enclosing class: GuiKeyBindingList

### Methods
- `public void drawEntry(int slotIndex,  int x,  int y,  int listWidth,  int slotHeight,  int mouseX,  int mouseY,  boolean isSelected,  float partialTicks)`
- `public boolean mousePressed(int slotIndex,  int mouseX,  int mouseY,  int mouseEvent,  int relativeX,  int relativeY)`
- `public void mouseReleased(int slotIndex,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`
- `public void updatePosition(int slotIndex,  int x,  int y,  float partialTicks)`

## GuiKeyBindingList.KeyEntry

*class* `net.minecraft.client.gui.GuiKeyBindingList.KeyEntry`

All Implemented Interfaces: GuiListExtended.IGuiListEntry

Enclosing class: GuiKeyBindingList

### Methods
- `public void drawEntry(int slotIndex,  int x,  int y,  int listWidth,  int slotHeight,  int mouseX,  int mouseY,  boolean isSelected,  float partialTicks)`
- `public boolean mousePressed(int slotIndex,  int mouseX,  int mouseY,  int mouseEvent,  int relativeX,  int relativeY)`
- `public void mouseReleased(int slotIndex,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`
- `public void updatePosition(int slotIndex,  int x,  int y,  float partialTicks)`

## GuiLabel

*class* `net.minecraft.client.gui.GuiLabel`

### Fields
- `protected int width`
- `protected int height`
- `public int x`
- `public int y`
- `public int id`
- `public boolean visible`

### Inherited fields
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void addLine(java.lang.String p_175202_1_)`
- `public GuiLabel setCentered()`
- `public void drawLabel(Minecraft mc,  int mouseX,  int mouseY)`
- `protected void drawLabelBackground(Minecraft mcIn,  int p_146160_2_,  int p_146160_3_)`

### Inherited methods
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiLanguage

*class* `net.minecraft.client.gui.GuiLanguage`

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `protected GuiScreen parentScreen`

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiListButton

*class* `net.minecraft.client.gui.GuiListButton`

### Inherited fields
- from `net.minecraft.client.gui.GuiButton`: `BUTTON_TEXTURES`, `displayString`, `enabled`, `height`, `hovered`, `id`, `packedFGColour`, `visible`, `width`, `x`, `y`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void setValue(boolean valueIn)`
- `public boolean mousePressed(Minecraft mc,  int mouseX,  int mouseY)`

### Inherited methods
- from `net.minecraft.client.gui.GuiButton`: `drawButton`, `drawButtonForegroundLayer`, `getButtonWidth`, `getHoverState`, `isMouseOver`, `mouseDragged`, `mouseReleased`, `playPressSound`, `setWidth`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiListExtended

*class* `net.minecraft.client.gui.GuiListExtended`

### Inherited fields
- from `net.minecraft.client.gui.GuiSlot`: `amountScrolled`, `bottom`, `centerListVertically`, `hasListHeader`, `headerPadding`, `height`, `initialClickY`, `lastClicked`, `left`, `mc`, `mouseX`, `mouseY`, `right`, `scrollMultiplier`, `selectedElement`, `showSelectionBox`, `slotHeight`, `top`, `visible`, `width`

### Methods
- `protected void elementClicked(int slotIndex,  boolean isDoubleClick,  int mouseX,  int mouseY)`
- `protected boolean isSelected(int slotIndex)`
- `protected void drawBackground()`
- `protected void drawSlot(int slotIndex,  int xPos,  int yPos,  int heightIn,  int mouseXIn,  int mouseYIn,  float partialTicks)`
- `protected void updateItemPos(int entryID,  int insideLeft,  int yPos,  float partialTicks)`
- `public boolean mouseClicked(int mouseX,  int mouseY,  int mouseEvent)`
- `public boolean mouseReleased(int x,  int y,  int mouseEvent)`
- `public abstract GuiListExtended.IGuiListEntry getListEntry(int index)`

### Inherited methods
- from `net.minecraft.client.gui.GuiSlot`: `actionPerformed`, `bindAmountScrolled`, `clickedHeader`, `drawContainerBackground`, `drawListHeader`, `drawScreen`, `drawSelectionBox`, `getAmountScrolled`, `getContentHeight`, `getEnabled`, `getListWidth`, `getMaxScroll`, `getScrollBarX`, `getSize`, `getSlotHeight`, `getSlotIndexFromScreenCoords`, `handleMouseInput`, `isMouseYWithinSlotBounds`, `overlayBackground`, `registerScrollButtons`, `renderDecorations`, `scrollBy`, `setDimensions`, `setEnabled`, `setHasListHeader`, `setShowSelectionBox`, `setSlotXBoundsFromLeft`

## GuiListExtended.IGuiListEntry

*interface* `net.minecraft.client.gui.GuiListExtended.IGuiListEntry`

Enclosing class: GuiListExtended

### Methods
- `void updatePosition(int slotIndex,  int x,  int y,  float partialTicks)`
- `void drawEntry(int slotIndex,  int x,  int y,  int listWidth,  int slotHeight,  int mouseX,  int mouseY,  boolean isSelected,  float partialTicks)`
- `boolean mousePressed(int slotIndex,  int mouseX,  int mouseY,  int mouseEvent,  int relativeX,  int relativeY)`
- `void mouseReleased(int slotIndex,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`

## GuiListWorldSelection

*class* `net.minecraft.client.gui.GuiListWorldSelection`

### Inherited fields
- from `net.minecraft.client.gui.GuiSlot`: `amountScrolled`, `bottom`, `centerListVertically`, `hasListHeader`, `headerPadding`, `height`, `initialClickY`, `lastClicked`, `left`, `mc`, `mouseX`, `mouseY`, `right`, `scrollMultiplier`, `selectedElement`, `showSelectionBox`, `slotHeight`, `top`, `visible`, `width`

### Methods
- `public void refreshList()`
- `public GuiListWorldSelectionEntry getListEntry(int index)`
- `protected int getSize()`
- `protected int getScrollBarX()`
- `public int getListWidth()`
- `public void selectWorld(int idx)`
- `protected boolean isSelected(int slotIndex)`
- `public GuiListWorldSelectionEntry getSelectedWorld()`
- `public GuiWorldSelection getGuiWorldSelection()`

### Inherited methods
- from `net.minecraft.client.gui.GuiListExtended`: `drawBackground`, `drawSlot`, `elementClicked`, `mouseClicked`, `mouseReleased`, `updateItemPos`
- from `net.minecraft.client.gui.GuiSlot`: `actionPerformed`, `bindAmountScrolled`, `clickedHeader`, `drawContainerBackground`, `drawListHeader`, `drawScreen`, `drawSelectionBox`, `getAmountScrolled`, `getContentHeight`, `getEnabled`, `getMaxScroll`, `getSlotHeight`, `getSlotIndexFromScreenCoords`, `handleMouseInput`, `isMouseYWithinSlotBounds`, `overlayBackground`, `registerScrollButtons`, `renderDecorations`, `scrollBy`, `setDimensions`, `setEnabled`, `setHasListHeader`, `setShowSelectionBox`, `setSlotXBoundsFromLeft`

## GuiListWorldSelectionEntry

*class* `net.minecraft.client.gui.GuiListWorldSelectionEntry`

All Implemented Interfaces: GuiListExtended.IGuiListEntry

### Methods
- `public void drawEntry(int slotIndex,  int x,  int y,  int listWidth,  int slotHeight,  int mouseX,  int mouseY,  boolean isSelected,  float partialTicks)`
- `public boolean mousePressed(int slotIndex,  int mouseX,  int mouseY,  int mouseEvent,  int relativeX,  int relativeY)`
- `public void joinWorld()`
- `public void deleteWorld()`
- `public void editWorld()`
- `public void recreateWorld()`
- `public void mouseReleased(int slotIndex,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`
- `public void updatePosition(int slotIndex,  int x,  int y,  float partialTicks)`

## GuiLockIconButton

*class* `net.minecraft.client.gui.GuiLockIconButton`

### Inherited fields
- from `net.minecraft.client.gui.GuiButton`: `BUTTON_TEXTURES`, `displayString`, `enabled`, `height`, `hovered`, `id`, `packedFGColour`, `visible`, `width`, `x`, `y`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public boolean isLocked()`
- `public void setLocked(boolean lockedIn)`
- `public void drawButton(Minecraft mc,  int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiButton`: `drawButtonForegroundLayer`, `getButtonWidth`, `getHoverState`, `isMouseOver`, `mouseDragged`, `mousePressed`, `mouseReleased`, `playPressSound`, `setWidth`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiMainMenu

*class* `net.minecraft.client.gui.GuiMainMenu`

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `public static final java.lang.String MORE_INFO_TEXT`

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void updateScreen()`
- `public boolean doesGuiPauseGame()`
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void initGui()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void confirmClicked(boolean result,  int id)`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void onGuiClosed()`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `mouseReleased`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiMemoryErrorScreen

*class* `net.minecraft.client.gui.GuiMemoryErrorScreen`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiMerchant

*class* `net.minecraft.client.gui.GuiMerchant`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.inventory.GuiContainer`: `dragSplitting`, `dragSplittingSlots`, `guiLeft`, `guiTop`, `INVENTORY_BACKGROUND`, `inventorySlots`, `xSize`, `ySize`
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void drawGuiContainerForegroundLayer(int mouseX,  int mouseY)`
- `public void updateScreen()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void drawGuiContainerBackgroundLayer(float partialTicks,  int mouseX,  int mouseY)`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public IMerchant getMerchant()`

### Inherited methods
- from `net.minecraft.client.gui.inventory.GuiContainer`: `checkHotbarKeys`, `doesGuiPauseGame`, `getGuiLeft`, `getGuiTop`, `getSlotUnderMouse`, `getXSize`, `getYSize`, `handleMouseClick`, `hasClickedOutside`, `isPointInRegion`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `renderHoveredToolTip`
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiMultiplayer

*class* `net.minecraft.client.gui.GuiMultiplayer`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `public void createButtons()`
- `public void updateScreen()`
- `public void onGuiClosed()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void confirmClicked(boolean result,  int id)`
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public void connectToSelected()`
- `public void selectServer(int index)`
- `public ServerPinger getOldServerPinger()`
- `public void setHoveringText(java.lang.String p_146793_1_)`
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseReleased(int mouseX,  int mouseY,  int state)`
- `public ServerList getServerList()`
- `public boolean canMoveUp(ServerListEntryNormal p_175392_1_,  int p_175392_2_)`
- `public boolean canMoveDown(ServerListEntryNormal p_175394_1_,  int p_175394_2_)`
- `public void moveServerUp(ServerListEntryNormal p_175391_1_,  int p_175391_2_,  boolean p_175391_3_)`
- `public void moveServerDown(ServerListEntryNormal p_175393_1_,  int p_175393_2_,  boolean p_175393_3_)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiNewChat

*class* `net.minecraft.client.gui.GuiNewChat`

### Inherited fields
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void drawChat(int updateCounter)`
- `public void clearChatMessages(boolean p_146231_1_)`
- `public void printChatMessage(ITextComponent chatComponent)`
- `public void printChatMessageWithOptionalDeletion(ITextComponent chatComponent,  int chatLineId)`
- `public void refreshChat()`
- `public java.util.List<java.lang.String> getSentMessages()`
- `public void addToSentMessages(java.lang.String message)`
- `public void resetScroll()`
- `public void scroll(int amount)`
- `public ITextComponent getChatComponent(int mouseX,  int mouseY)`
- `public boolean getChatOpen()`
- `public void deleteChatLine(int id)`
- `public int getChatWidth()`
- `public int getChatHeight()`
- `public float getChatScale()`
- `public static int calculateChatboxWidth(float scale)`
- `public static int calculateChatboxHeight(float scale)`
- `public int getLineCount()`

### Inherited methods
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiOptionButton

*class* `net.minecraft.client.gui.GuiOptionButton`

### Inherited fields
- from `net.minecraft.client.gui.GuiButton`: `BUTTON_TEXTURES`, `displayString`, `enabled`, `height`, `hovered`, `id`, `packedFGColour`, `visible`, `width`, `x`, `y`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public GameSettings.Options getOption()`

### Inherited methods
- from `net.minecraft.client.gui.GuiButton`: `drawButton`, `drawButtonForegroundLayer`, `getButtonWidth`, `getHoverState`, `isMouseOver`, `mouseDragged`, `mousePressed`, `mouseReleased`, `playPressSound`, `setWidth`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiOptions

*class* `net.minecraft.client.gui.GuiOptions`

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `protected java.lang.String title`

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public java.lang.String getDifficultyText(EnumDifficulty p_175355_1_)`
- `public void confirmClicked(boolean result,  int id)`
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiOptionSlider

*class* `net.minecraft.client.gui.GuiOptionSlider`

### Fields
- `public boolean dragging`

### Inherited fields
- from `net.minecraft.client.gui.GuiButton`: `BUTTON_TEXTURES`, `displayString`, `enabled`, `height`, `hovered`, `id`, `packedFGColour`, `visible`, `width`, `x`, `y`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `protected int getHoverState(boolean mouseOver)`
- `protected void mouseDragged(Minecraft mc,  int mouseX,  int mouseY)`
- `public boolean mousePressed(Minecraft mc,  int mouseX,  int mouseY)`
- `public void mouseReleased(int mouseX,  int mouseY)`

### Inherited methods
- from `net.minecraft.client.gui.GuiButton`: `drawButton`, `drawButtonForegroundLayer`, `getButtonWidth`, `isMouseOver`, `playPressSound`, `setWidth`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiOptionsRowList

*class* `net.minecraft.client.gui.GuiOptionsRowList`

### Inherited fields
- from `net.minecraft.client.gui.GuiSlot`: `amountScrolled`, `bottom`, `centerListVertically`, `hasListHeader`, `headerPadding`, `height`, `initialClickY`, `lastClicked`, `left`, `mc`, `mouseX`, `mouseY`, `right`, `scrollMultiplier`, `selectedElement`, `showSelectionBox`, `slotHeight`, `top`, `visible`, `width`

### Methods
- `public GuiOptionsRowList.Row getListEntry(int index)`
- `protected int getSize()`
- `public int getListWidth()`
- `protected int getScrollBarX()`

### Inherited methods
- from `net.minecraft.client.gui.GuiListExtended`: `drawBackground`, `drawSlot`, `elementClicked`, `isSelected`, `mouseClicked`, `mouseReleased`, `updateItemPos`
- from `net.minecraft.client.gui.GuiSlot`: `actionPerformed`, `bindAmountScrolled`, `clickedHeader`, `drawContainerBackground`, `drawListHeader`, `drawScreen`, `drawSelectionBox`, `getAmountScrolled`, `getContentHeight`, `getEnabled`, `getMaxScroll`, `getSlotHeight`, `getSlotIndexFromScreenCoords`, `handleMouseInput`, `isMouseYWithinSlotBounds`, `overlayBackground`, `registerScrollButtons`, `renderDecorations`, `scrollBy`, `setDimensions`, `setEnabled`, `setHasListHeader`, `setShowSelectionBox`, `setSlotXBoundsFromLeft`

## GuiOptionsRowList.Row

*class* `net.minecraft.client.gui.GuiOptionsRowList.Row`

All Implemented Interfaces: GuiListExtended.IGuiListEntry

Enclosing class: GuiOptionsRowList

### Methods
- `public void drawEntry(int slotIndex,  int x,  int y,  int listWidth,  int slotHeight,  int mouseX,  int mouseY,  boolean isSelected,  float partialTicks)`
- `public boolean mousePressed(int slotIndex,  int mouseX,  int mouseY,  int mouseEvent,  int relativeX,  int relativeY)`
- `public void mouseReleased(int slotIndex,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`
- `public void updatePosition(int slotIndex,  int x,  int y,  float partialTicks)`

## GuiOverlayDebug

*class* `net.minecraft.client.gui.GuiOverlayDebug`

### Inherited fields
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void renderDebugInfo(ScaledResolution scaledResolutionIn)`
- `protected void renderDebugInfoLeft()`
- `protected void renderDebugInfoRight(ScaledResolution scaledRes)`
- `protected java.util.List<java.lang.String> call()`
- `protected <T extends java.lang.Comparable<T>> java.util.List<java.lang.String> getDebugInfoRight()`
- `public void renderLagometer()`

### Inherited methods
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiPageButtonList

*class* `net.minecraft.client.gui.GuiPageButtonList`

### Inherited fields
- from `net.minecraft.client.gui.GuiSlot`: `amountScrolled`, `bottom`, `centerListVertically`, `hasListHeader`, `headerPadding`, `height`, `initialClickY`, `lastClicked`, `left`, `mc`, `mouseX`, `mouseY`, `right`, `scrollMultiplier`, `selectedElement`, `showSelectionBox`, `slotHeight`, `top`, `visible`, `width`

### Methods
- `public void setPage(int p_181156_1_)`
- `public int getPage()`
- `public int getPageCount()`
- `public Gui getFocusedControl()`
- `public void previousPage()`
- `public void nextPage()`
- `public Gui getComponent(int p_178061_1_)`
- `public void setActive(boolean p_181155_1_)`
- `public boolean mouseClicked(int mouseX,  int mouseY,  int mouseEvent)`
- `public void onKeyPressed(char p_178062_1_,  int p_178062_2_)`
- `public GuiPageButtonList.GuiEntry getListEntry(int index)`
- `public int getSize()`
- `public int getListWidth()`
- `protected int getScrollBarX()`

### Inherited methods
- from `net.minecraft.client.gui.GuiListExtended`: `drawBackground`, `drawSlot`, `elementClicked`, `isSelected`, `mouseReleased`, `updateItemPos`
- from `net.minecraft.client.gui.GuiSlot`: `actionPerformed`, `bindAmountScrolled`, `clickedHeader`, `drawContainerBackground`, `drawListHeader`, `drawScreen`, `drawSelectionBox`, `getAmountScrolled`, `getContentHeight`, `getEnabled`, `getMaxScroll`, `getSlotHeight`, `getSlotIndexFromScreenCoords`, `handleMouseInput`, `isMouseYWithinSlotBounds`, `overlayBackground`, `registerScrollButtons`, `renderDecorations`, `scrollBy`, `setDimensions`, `setEnabled`, `setHasListHeader`, `setShowSelectionBox`, `setSlotXBoundsFromLeft`

## GuiPageButtonList.EditBoxEntry

*class* `net.minecraft.client.gui.GuiPageButtonList.EditBoxEntry`

Enclosing class: GuiPageButtonList

### Methods
- `public <any> getFilter()`

### Inherited methods
- from `net.minecraft.client.gui.GuiPageButtonList.GuiListEntry`: `getCaption`, `getId`, `shouldStartVisible`

## GuiPageButtonList.GuiButtonEntry

*class* `net.minecraft.client.gui.GuiPageButtonList.GuiButtonEntry`

Enclosing class: GuiPageButtonList

### Methods
- `public boolean getInitialValue()`

### Inherited methods
- from `net.minecraft.client.gui.GuiPageButtonList.GuiListEntry`: `getCaption`, `getId`, `shouldStartVisible`

## GuiPageButtonList.GuiEntry

*class* `net.minecraft.client.gui.GuiPageButtonList.GuiEntry`

All Implemented Interfaces: GuiListExtended.IGuiListEntry

Enclosing class: GuiPageButtonList

### Methods
- `public Gui getComponent1()`
- `public Gui getComponent2()`
- `public void drawEntry(int slotIndex,  int x,  int y,  int listWidth,  int slotHeight,  int mouseX,  int mouseY,  boolean isSelected,  float partialTicks)`
- `public void updatePosition(int slotIndex,  int x,  int y,  float partialTicks)`
- `public boolean mousePressed(int slotIndex,  int mouseX,  int mouseY,  int mouseEvent,  int relativeX,  int relativeY)`
- `public void mouseReleased(int slotIndex,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`

## GuiPageButtonList.GuiLabelEntry

*class* `net.minecraft.client.gui.GuiPageButtonList.GuiLabelEntry`

Enclosing class: GuiPageButtonList

### Inherited methods
- from `net.minecraft.client.gui.GuiPageButtonList.GuiListEntry`: `getCaption`, `getId`, `shouldStartVisible`

## GuiPageButtonList.GuiListEntry

*class* `net.minecraft.client.gui.GuiPageButtonList.GuiListEntry`

Enclosing class: GuiPageButtonList

### Methods
- `public int getId()`
- `public java.lang.String getCaption()`
- `public boolean shouldStartVisible()`

## GuiPageButtonList.GuiResponder

*interface* `net.minecraft.client.gui.GuiPageButtonList.GuiResponder`

Enclosing class: GuiPageButtonList

### Methods
- `void setEntryValue(int id,  boolean value)`
- `void setEntryValue(int id,  float value)`
- `void setEntryValue(int id,  java.lang.String value)`

## GuiPageButtonList.GuiSlideEntry

*class* `net.minecraft.client.gui.GuiPageButtonList.GuiSlideEntry`

Enclosing class: GuiPageButtonList

### Methods
- `public GuiSlider.FormatHelper getFormatter()`
- `public float getMinValue()`
- `public float getMaxValue()`
- `public float getInitalValue()`

### Inherited methods
- from `net.minecraft.client.gui.GuiPageButtonList.GuiListEntry`: `getCaption`, `getId`, `shouldStartVisible`

## GuiPlayerTabOverlay

*class* `net.minecraft.client.gui.GuiPlayerTabOverlay`

### Inherited fields
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public java.lang.String getPlayerName(NetworkPlayerInfo networkPlayerInfoIn)`
- `public void updatePlayerList(boolean willBeRendered)`
- `public void renderPlayerlist(int width,  Scoreboard scoreboardIn,  ScoreObjective scoreObjectiveIn)`
- `protected void drawPing(int p_175245_1_,  int p_175245_2_,  int p_175245_3_,  NetworkPlayerInfo networkPlayerInfoIn)`
- `public void setFooter(ITextComponent footerIn)`
- `public void setHeader(ITextComponent headerIn)`
- `public void resetFooterHeader()`

### Inherited methods
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiRepair

*class* `net.minecraft.client.gui.GuiRepair`

All Implemented Interfaces: GuiYesNoCallback, IContainerListener

### Inherited fields
- from `net.minecraft.client.gui.inventory.GuiContainer`: `dragSplitting`, `dragSplittingSlots`, `guiLeft`, `guiTop`, `INVENTORY_BACKGROUND`, `inventorySlots`, `xSize`, `ySize`
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void onGuiClosed()`
- `protected void drawGuiContainerForegroundLayer(int mouseX,  int mouseY)`
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `protected void drawGuiContainerBackgroundLayer(float partialTicks,  int mouseX,  int mouseY)`
- `public void sendAllContents(Container containerToSend,  NonNullList<ItemStack> itemsList)`
- `public void sendSlotContents(Container containerToSend,  int slotInd,  ItemStack stack)`
- `public void sendWindowProperty(Container containerIn,  int varToUpdate,  int newValue)`
- `public void sendAllWindowProperties(Container containerIn,  IInventory inventory)`

### Inherited methods
- from `net.minecraft.client.gui.inventory.GuiContainer`: `checkHotbarKeys`, `doesGuiPauseGame`, `getGuiLeft`, `getGuiTop`, `getSlotUnderMouse`, `getXSize`, `getYSize`, `handleMouseClick`, `hasClickedOutside`, `isPointInRegion`, `mouseClickMove`, `mouseReleased`, `renderHoveredToolTip`, `updateScreen`
- from `net.minecraft.client.gui.GuiScreen`: `actionPerformed`, `addButton`, `confirmClicked`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiResourcePackAvailable

*class* `net.minecraft.client.gui.GuiResourcePackAvailable`

### Inherited fields
- from `net.minecraft.client.gui.GuiResourcePackList`: `mc`, `resourcePackEntries`
- from `net.minecraft.client.gui.GuiSlot`: `amountScrolled`, `bottom`, `centerListVertically`, `hasListHeader`, `headerPadding`, `height`, `initialClickY`, `lastClicked`, `left`, `mouseX`, `mouseY`, `right`, `scrollMultiplier`, `selectedElement`, `showSelectionBox`, `slotHeight`, `top`, `visible`, `width`

### Methods
- `protected java.lang.String getListHeader()`

### Inherited methods
- from `net.minecraft.client.gui.GuiResourcePackList`: `drawListHeader`, `getList`, `getListEntry`, `getListWidth`, `getScrollBarX`, `getSize`
- from `net.minecraft.client.gui.GuiListExtended`: `drawBackground`, `drawSlot`, `elementClicked`, `isSelected`, `mouseClicked`, `mouseReleased`, `updateItemPos`
- from `net.minecraft.client.gui.GuiSlot`: `actionPerformed`, `bindAmountScrolled`, `clickedHeader`, `drawContainerBackground`, `drawScreen`, `drawSelectionBox`, `getAmountScrolled`, `getContentHeight`, `getEnabled`, `getMaxScroll`, `getSlotHeight`, `getSlotIndexFromScreenCoords`, `handleMouseInput`, `isMouseYWithinSlotBounds`, `overlayBackground`, `registerScrollButtons`, `renderDecorations`, `scrollBy`, `setDimensions`, `setEnabled`, `setHasListHeader`, `setShowSelectionBox`, `setSlotXBoundsFromLeft`

## GuiResourcePackList

*class* `net.minecraft.client.gui.GuiResourcePackList`

### Fields
- `protected final Minecraft mc`
- `protected final java.util.List<ResourcePackListEntry> resourcePackEntries`

### Inherited fields
- from `net.minecraft.client.gui.GuiSlot`: `amountScrolled`, `bottom`, `centerListVertically`, `hasListHeader`, `headerPadding`, `height`, `initialClickY`, `lastClicked`, `left`, `mouseX`, `mouseY`, `right`, `scrollMultiplier`, `selectedElement`, `showSelectionBox`, `slotHeight`, `top`, `visible`, `width`

### Methods
- `protected void drawListHeader(int insideLeft,  int insideTop,  Tessellator tessellatorIn)`
- `protected abstract java.lang.String getListHeader()`
- `public java.util.List<ResourcePackListEntry> getList()`
- `protected int getSize()`
- `public ResourcePackListEntry getListEntry(int index)`
- `public int getListWidth()`
- `protected int getScrollBarX()`

### Inherited methods
- from `net.minecraft.client.gui.GuiListExtended`: `drawBackground`, `drawSlot`, `elementClicked`, `isSelected`, `mouseClicked`, `mouseReleased`, `updateItemPos`
- from `net.minecraft.client.gui.GuiSlot`: `actionPerformed`, `bindAmountScrolled`, `clickedHeader`, `drawContainerBackground`, `drawScreen`, `drawSelectionBox`, `getAmountScrolled`, `getContentHeight`, `getEnabled`, `getMaxScroll`, `getSlotHeight`, `getSlotIndexFromScreenCoords`, `handleMouseInput`, `isMouseYWithinSlotBounds`, `overlayBackground`, `registerScrollButtons`, `renderDecorations`, `scrollBy`, `setDimensions`, `setEnabled`, `setHasListHeader`, `setShowSelectionBox`, `setSlotXBoundsFromLeft`

## GuiResourcePackSelected

*class* `net.minecraft.client.gui.GuiResourcePackSelected`

### Inherited fields
- from `net.minecraft.client.gui.GuiResourcePackList`: `mc`, `resourcePackEntries`
- from `net.minecraft.client.gui.GuiSlot`: `amountScrolled`, `bottom`, `centerListVertically`, `hasListHeader`, `headerPadding`, `height`, `initialClickY`, `lastClicked`, `left`, `mouseX`, `mouseY`, `right`, `scrollMultiplier`, `selectedElement`, `showSelectionBox`, `slotHeight`, `top`, `visible`, `width`

### Methods
- `protected java.lang.String getListHeader()`

### Inherited methods
- from `net.minecraft.client.gui.GuiResourcePackList`: `drawListHeader`, `getList`, `getListEntry`, `getListWidth`, `getScrollBarX`, `getSize`
- from `net.minecraft.client.gui.GuiListExtended`: `drawBackground`, `drawSlot`, `elementClicked`, `isSelected`, `mouseClicked`, `mouseReleased`, `updateItemPos`
- from `net.minecraft.client.gui.GuiSlot`: `actionPerformed`, `bindAmountScrolled`, `clickedHeader`, `drawContainerBackground`, `drawScreen`, `drawSelectionBox`, `getAmountScrolled`, `getContentHeight`, `getEnabled`, `getMaxScroll`, `getSlotHeight`, `getSlotIndexFromScreenCoords`, `handleMouseInput`, `isMouseYWithinSlotBounds`, `overlayBackground`, `registerScrollButtons`, `renderDecorations`, `scrollBy`, `setDimensions`, `setEnabled`, `setHasListHeader`, `setShowSelectionBox`, `setSlotXBoundsFromLeft`

## GuiScreen

*class* `net.minecraft.client.gui.GuiScreen`

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `public Minecraft mc`
- `protected RenderItem itemRender`
- `public int width`
- `public int height`
- `protected java.util.List<GuiButton> buttonList`
- `protected java.util.List<GuiLabel> labelList`
- `public boolean allowUserInput`
- `protected FontRenderer fontRenderer`
- `protected GuiButton selectedButton`
- `protected boolean keyHandled`
- `protected boolean mouseHandled`

### Inherited fields
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected <T extends GuiButton> T addButton(T buttonIn)`
- `public static java.lang.String getClipboardString()`
- `public static void setClipboardString(java.lang.String copyText)`
- `protected void renderToolTip(ItemStack stack,  int x,  int y)`
- `public java.util.List<java.lang.String> getItemToolTip(ItemStack p_191927_1_)`
- `public void drawHoveringText(java.lang.String text,  int x,  int y)`
- `public void setFocused(boolean hasFocusedControlIn)`
- `public boolean isFocused()`
- `public void drawHoveringText(java.util.List<java.lang.String> textLines,  int x,  int y)`
- `protected void drawHoveringText(java.util.List<java.lang.String> textLines,  int x,  int y,  FontRenderer font)`
- `protected void handleComponentHover(ITextComponent component,  int x,  int y)`
- `protected void setText(java.lang.String newChatText,  boolean shouldOverwrite)`
- `public boolean handleComponentClick(ITextComponent component)`
- `public void sendChatMessage(java.lang.String msg)`
- `public void sendChatMessage(java.lang.String msg,  boolean addToChat)`
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseReleased(int mouseX,  int mouseY,  int state)`
- `protected void mouseClickMove(int mouseX,  int mouseY,  int clickedMouseButton,  long timeSinceLastClick)`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void setWorldAndResolution(Minecraft mc,  int width,  int height)`
- `public void setGuiSize(int w,  int h)`
- `public void initGui()`
- `public void handleInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `public void handleKeyboardInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `public void updateScreen()`
- `public void onGuiClosed()`
- `public void drawDefaultBackground()`
- `public void drawWorldBackground(int tint)`
- `public void drawBackground(int tint)`
- `public boolean doesGuiPauseGame()`
- `public void confirmClicked(boolean result,  int id)`
- `public static boolean isCtrlKeyDown()`
- `public static boolean isShiftKeyDown()`
- `public static boolean isAltKeyDown()`
- `public static boolean isKeyComboCtrlX(int keyID)`
- `public static boolean isKeyComboCtrlV(int keyID)`
- `public static boolean isKeyComboCtrlC(int keyID)`
- `public static boolean isKeyComboCtrlA(int keyID)`
- `public void onResize(Minecraft mcIn,  int w,  int h)`

### Inherited methods
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiScreenAddServer

*class* `net.minecraft.client.gui.GuiScreenAddServer`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void updateScreen()`
- `public void initGui()`
- `public void onGuiClosed()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `mouseReleased`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiScreenBook

*class* `net.minecraft.client.gui.GuiScreenBook`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void updateScreen()`
- `public void initGui()`
- `public void onGuiClosed()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `public boolean handleComponentClick(ITextComponent component)`
- `public ITextComponent getClickedComponentAt(int p_175385_1_,  int p_175385_2_)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `mouseReleased`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiScreenCustomizePresets

*class* `net.minecraft.client.gui.GuiScreenCustomizePresets`

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `protected java.lang.String title`

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `public void onGuiClosed()`
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public void updateScreen()`
- `public void updateButtonValidity()`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `mouseReleased`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiScreenDemo

*class* `net.minecraft.client.gui.GuiScreenDemo`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawDefaultBackground()`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiScreenOptionsSounds

*class* `net.minecraft.client.gui.GuiScreenOptionsSounds`

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `protected java.lang.String title`

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `protected java.lang.String getDisplayString(SoundCategory category)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiScreenRealmsProxy

*class* `net.minecraft.client.gui.GuiScreenRealmsProxy`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public RealmsScreen getProxy()`
- `public void initGui()`
- `public void drawCenteredString(java.lang.String text,  int x,  int y,  int color)`
- `public void drawString(java.lang.String text,  int x,  int y,  int color,  boolean p_154322_5_)`
- `public void drawTexturedModalRect(int x,  int y,  int textureX,  int textureY,  int width,  int height)`
- `public void drawGradientRect(int left,  int top,  int right,  int bottom,  int startColor,  int endColor)`
- `public void drawDefaultBackground()`
- `public boolean doesGuiPauseGame()`
- `public void drawWorldBackground(int tint)`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public void renderToolTip(ItemStack stack,  int x,  int y)`
- `public void drawHoveringText(java.lang.String text,  int x,  int y)`
- `public void drawHoveringText(java.util.List<java.lang.String> textLines,  int x,  int y)`
- `public void updateScreen()`
- `public int getFontHeight()`
- `public int getStringWidth(java.lang.String text)`
- `public void fontDrawShadow(java.lang.String text,  int x,  int y,  int color)`
- `public java.util.List<java.lang.String> fontSplit(java.lang.String text,  int wrapWidth)`
- `public final void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void buttonsClear()`
- `public void buttonsAdd(RealmsButton button)`
- `public java.util.List<RealmsButton> buttons()`
- `public void buttonsRemove(RealmsButton button)`
- `public void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `public void handleKeyboardInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `public void mouseReleased(int mouseX,  int mouseY,  int state)`
- `public void mouseClickMove(int mouseX,  int mouseY,  int clickedMouseButton,  long timeSinceLastClick)`
- `public void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void confirmClicked(boolean result,  int id)`
- `public void onGuiClosed()`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `drawBackground`, `drawHoveringText`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `onResize`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiScreenResourcePacks

*class* `net.minecraft.client.gui.GuiScreenResourcePacks`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `public boolean hasResourcePackEntry(ResourcePackListEntry resourcePackEntry)`
- `public java.util.List<ResourcePackListEntry> getListContaining(ResourcePackListEntry resourcePackEntry)`
- `public java.util.List<ResourcePackListEntry> getAvailableResourcePacks()`
- `public java.util.List<ResourcePackListEntry> getSelectedResourcePacks()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseReleased(int mouseX,  int mouseY,  int state)`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public void markChanged()`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClickMove`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiScreenServerList

*class* `net.minecraft.client.gui.GuiScreenServerList`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void updateScreen()`
- `public void initGui()`
- `public void onGuiClosed()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `mouseReleased`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiScreenWorking

*class* `net.minecraft.client.gui.GuiScreenWorking`

All Implemented Interfaces: GuiYesNoCallback, IProgressUpdate

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void displaySavingString(java.lang.String message)`
- `public void resetProgressAndMessage(java.lang.String message)`
- `public void displayLoadingString(java.lang.String message)`
- `public void setLoadingProgress(int progress)`
- `public void setDoneWorking()`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `actionPerformed`, `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `initGui`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiShareToLan

*class* `net.minecraft.client.gui.GuiShareToLan`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiSimpleScrolledSelectionListProxy

*class* `net.minecraft.client.gui.GuiSimpleScrolledSelectionListProxy`

### Inherited fields
- from `net.minecraft.client.gui.GuiSlot`: `amountScrolled`, `bottom`, `centerListVertically`, `hasListHeader`, `headerPadding`, `height`, `initialClickY`, `lastClicked`, `left`, `mc`, `mouseX`, `mouseY`, `right`, `scrollMultiplier`, `selectedElement`, `showSelectionBox`, `slotHeight`, `top`, `visible`, `width`

### Methods
- `protected int getSize()`
- `protected void elementClicked(int slotIndex,  boolean isDoubleClick,  int mouseX,  int mouseY)`
- `protected boolean isSelected(int slotIndex)`
- `protected void drawBackground()`
- `protected void drawSlot(int slotIndex,  int xPos,  int yPos,  int heightIn,  int mouseXIn,  int mouseYIn,  float partialTicks)`
- `public int getWidth()`
- `public int getMouseY()`
- `public int getMouseX()`
- `protected int getContentHeight()`
- `protected int getScrollBarX()`
- `public void handleMouseInput()`
- `public void drawScreen(int mouseXIn,  int mouseYIn,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiSlot`: `actionPerformed`, `bindAmountScrolled`, `clickedHeader`, `drawContainerBackground`, `drawListHeader`, `drawSelectionBox`, `getAmountScrolled`, `getEnabled`, `getListWidth`, `getMaxScroll`, `getSlotHeight`, `getSlotIndexFromScreenCoords`, `isMouseYWithinSlotBounds`, `overlayBackground`, `registerScrollButtons`, `renderDecorations`, `scrollBy`, `setDimensions`, `setEnabled`, `setHasListHeader`, `setShowSelectionBox`, `setSlotXBoundsFromLeft`, `updateItemPos`

## GuiSleepMP

*class* `net.minecraft.client.gui.GuiSleepMP`

All Implemented Interfaces: GuiYesNoCallback, ITabCompleter

### Inherited fields
- from `net.minecraft.client.gui.GuiChat`: `inputField`
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException

### Inherited methods
- from `net.minecraft.client.gui.GuiChat`: `doesGuiPauseGame`, `drawScreen`, `getSentHistory`, `handleMouseInput`, `mouseClicked`, `onGuiClosed`, `setCompletions`, `setText`, `updateScreen`
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `mouseReleased`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiSlider

*class* `net.minecraft.client.gui.GuiSlider`

### Fields
- `public boolean isMouseDown`

### Inherited fields
- from `net.minecraft.client.gui.GuiButton`: `BUTTON_TEXTURES`, `displayString`, `enabled`, `height`, `hovered`, `id`, `packedFGColour`, `visible`, `width`, `x`, `y`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public float getSliderValue()`
- `public void setSliderValue(float value,  boolean notifyResponder)`
- `public float getSliderPosition()`
- `protected int getHoverState(boolean mouseOver)`
- `protected void mouseDragged(Minecraft mc,  int mouseX,  int mouseY)`
- `public void setSliderPosition(float position)`
- `public boolean mousePressed(Minecraft mc,  int mouseX,  int mouseY)`
- `public void mouseReleased(int mouseX,  int mouseY)`

### Inherited methods
- from `net.minecraft.client.gui.GuiButton`: `drawButton`, `drawButtonForegroundLayer`, `getButtonWidth`, `isMouseOver`, `playPressSound`, `setWidth`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiSlider.FormatHelper

*interface* `net.minecraft.client.gui.GuiSlider.FormatHelper`

Enclosing class: GuiSlider

### Methods
- `java.lang.String getText(int id,  java.lang.String name,  float value)`

## GuiSlot

*class* `net.minecraft.client.gui.GuiSlot`

### Fields
- `protected final Minecraft mc`
- `public int width`
- `public int height`
- `public int top`
- `public int bottom`
- `public int right`
- `public int left`
- `public final int slotHeight`
- `protected int mouseX`
- `protected int mouseY`
- `protected boolean centerListVertically`
- `protected int initialClickY`
- `protected float scrollMultiplier`
- `protected float amountScrolled`
- `protected int selectedElement`
- `protected long lastClicked`
- `protected boolean visible`
- `protected boolean showSelectionBox`
- `protected boolean hasListHeader`
- `public int headerPadding`

### Methods
- `public void setDimensions(int widthIn,  int heightIn,  int topIn,  int bottomIn)`
- `public void setShowSelectionBox(boolean showSelectionBoxIn)`
- `protected void setHasListHeader(boolean hasListHeaderIn,  int headerPaddingIn)`
- `protected abstract int getSize()`
- `protected abstract void elementClicked(int slotIndex,  boolean isDoubleClick,  int mouseX,  int mouseY)`
- `protected abstract boolean isSelected(int slotIndex)`
- `protected int getContentHeight()`
- `protected abstract void drawBackground()`
- `protected void updateItemPos(int entryID,  int insideLeft,  int yPos,  float partialTicks)`
- `protected abstract void drawSlot(int slotIndex,  int xPos,  int yPos,  int heightIn,  int mouseXIn,  int mouseYIn,  float partialTicks)`
- `protected void drawListHeader(int insideLeft,  int insideTop,  Tessellator tessellatorIn)`
- `protected void clickedHeader(int p_148132_1_,  int p_148132_2_)`
- `protected void renderDecorations(int mouseXIn,  int mouseYIn)`
- `public int getSlotIndexFromScreenCoords(int posX,  int posY)`
- `public void registerScrollButtons(int scrollUpButtonIDIn,  int scrollDownButtonIDIn)`
- `protected void bindAmountScrolled()`
- `public int getMaxScroll()`
- `public int getAmountScrolled()`
- `public boolean isMouseYWithinSlotBounds(int p_148141_1_)`
- `public void scrollBy(int amount)`
- `public void actionPerformed(GuiButton button)`
- `public void drawScreen(int mouseXIn,  int mouseYIn,  float partialTicks)`
- `public void handleMouseInput()`
- `public void setEnabled(boolean enabledIn)`
- `public boolean getEnabled()`
- `public int getListWidth()`
- `protected void drawSelectionBox(int insideLeft,  int insideTop,  int mouseXIn,  int mouseYIn,  float partialTicks)`
- `protected int getScrollBarX()`
- `protected void overlayBackground(int startY,  int endY,  int startAlpha,  int endAlpha)`
- `public void setSlotXBoundsFromLeft(int leftIn)`
- `public int getSlotHeight()`
- `protected void drawContainerBackground(Tessellator tessellator)`

## GuiSlotRealmsProxy

*class* `net.minecraft.client.gui.GuiSlotRealmsProxy`

### Inherited fields
- from `net.minecraft.client.gui.GuiSlot`: `amountScrolled`, `bottom`, `centerListVertically`, `hasListHeader`, `headerPadding`, `height`, `initialClickY`, `lastClicked`, `left`, `mc`, `mouseX`, `mouseY`, `right`, `scrollMultiplier`, `selectedElement`, `showSelectionBox`, `slotHeight`, `top`, `visible`, `width`

### Methods
- `protected int getSize()`
- `protected void elementClicked(int slotIndex,  boolean isDoubleClick,  int mouseX,  int mouseY)`
- `protected boolean isSelected(int slotIndex)`
- `protected void drawBackground()`
- `protected void drawSlot(int slotIndex,  int xPos,  int yPos,  int heightIn,  int mouseXIn,  int mouseYIn,  float partialTicks)`
- `public int getWidth()`
- `public int getMouseY()`
- `public int getMouseX()`
- `protected int getContentHeight()`
- `protected int getScrollBarX()`
- `public void handleMouseInput()`

### Inherited methods
- from `net.minecraft.client.gui.GuiSlot`: `actionPerformed`, `bindAmountScrolled`, `clickedHeader`, `drawContainerBackground`, `drawListHeader`, `drawScreen`, `drawSelectionBox`, `getAmountScrolled`, `getEnabled`, `getListWidth`, `getMaxScroll`, `getSlotHeight`, `getSlotIndexFromScreenCoords`, `isMouseYWithinSlotBounds`, `overlayBackground`, `registerScrollButtons`, `renderDecorations`, `scrollBy`, `setDimensions`, `setEnabled`, `setHasListHeader`, `setShowSelectionBox`, `setSlotXBoundsFromLeft`, `updateItemPos`

## GuiSnooper

*class* `net.minecraft.client.gui.GuiSnooper`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiSpectator

*class* `net.minecraft.client.gui.GuiSpectator`

All Implemented Interfaces: ISpectatorMenuRecipient

### Fields
- `public static final ResourceLocation SPECTATOR_WIDGETS`

### Inherited fields
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void onHotbarSelected(int p_175260_1_)`
- `public void renderTooltip(ScaledResolution p_175264_1_,  float p_175264_2_)`
- `protected void renderPage(ScaledResolution p_175258_1_,  float p_175258_2_,  int p_175258_3_,  float p_175258_4_,  SpectatorDetails p_175258_5_)`
- `public void renderSelectedItem(ScaledResolution p_175263_1_)`
- `public void onSpectatorMenuClosed(SpectatorMenu menu)`
- `public boolean isMenuActive()`
- `public void onMouseScroll(int p_175259_1_)`
- `public void onMiddleClick()`

### Inherited methods
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiSubtitleOverlay

*class* `net.minecraft.client.gui.GuiSubtitleOverlay`

All Implemented Interfaces: ISoundEventListener

### Inherited fields
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void renderSubtitles(ScaledResolution resolution)`
- `public void soundPlay(ISound soundIn,  SoundEventAccessor accessor)`

### Inherited methods
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiSubtitleOverlay.Subtitle

*class* `net.minecraft.client.gui.GuiSubtitleOverlay.Subtitle`

Enclosing class: GuiSubtitleOverlay

### Methods
- `public java.lang.String getString()`
- `public long getStartTime()`
- `public Vec3d getLocation()`
- `public void refresh(Vec3d locationIn)`

## GuiTextField

*class* `net.minecraft.client.gui.GuiTextField`

### Fields
- `public int x`
- `public int y`
- `public int width`
- `public int height`

### Inherited fields
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void setGuiResponder(GuiPageButtonList.GuiResponder guiResponderIn)`
- `public void updateCursorCounter()`
- `public void setText(java.lang.String textIn)`
- `public java.lang.String getText()`
- `public java.lang.String getSelectedText()`
- `public void setValidator(<any> theValidator)`
- `public void writeText(java.lang.String textToWrite)`
- `public void setResponderEntryValue(int idIn,  java.lang.String textIn)`
- `public void deleteWords(int num)`
- `public void deleteFromCursor(int num)`
- `public int getId()`
- `public int getNthWordFromCursor(int numWords)`
- `public int getNthWordFromPos(int n,  int pos)`
- `public int getNthWordFromPosWS(int n,  int pos,  boolean skipWs)`
- `public void moveCursorBy(int num)`
- `public void setCursorPosition(int pos)`
- `public void setCursorPositionZero()`
- `public void setCursorPositionEnd()`
- `public boolean textboxKeyTyped(char typedChar,  int keyCode)`
- `public boolean mouseClicked(int mouseX,  int mouseY,  int mouseButton)`
- `public void drawTextBox()`
- `public void setMaxStringLength(int length)`
- `public int getMaxStringLength()`
- `public int getCursorPosition()`
- `public boolean getEnableBackgroundDrawing()`
- `public void setEnableBackgroundDrawing(boolean enableBackgroundDrawingIn)`
- `public void setTextColor(int color)`
- `public void setDisabledTextColour(int color)`
- `public void setFocused(boolean isFocusedIn)`
- `public boolean isFocused()`
- `public void setEnabled(boolean enabled)`
- `public int getSelectionEnd()`
- `public int getWidth()`
- `public void setSelectionPos(int position)`
- `public void setCanLoseFocus(boolean canLoseFocusIn)`
- `public boolean getVisible()`
- `public void setVisible(boolean isVisible)`

### Inherited methods
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiUtilRenderComponents

*class* `net.minecraft.client.gui.GuiUtilRenderComponents`

### Methods
- `public static java.lang.String removeTextColorsIfConfigured(java.lang.String text,  boolean forceColor)`
- `public static java.util.List<ITextComponent> splitText(ITextComponent textComponent,  int maxTextLenght,  FontRenderer fontRendererIn,  boolean p_178908_3_,  boolean forceTextColor)`

## GuiVideoSettings

*class* `net.minecraft.client.gui.GuiVideoSettings`

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `protected java.lang.String screenTitle`

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseReleased(int mouseX,  int mouseY,  int state)`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public void onGuiClosed()`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiWinGame

*class* `net.minecraft.client.gui.GuiWinGame`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void updateScreen()`
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `public boolean doesGuiPauseGame()`
- `public void initGui()`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `actionPerformed`, `addButton`, `confirmClicked`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiWorldEdit

*class* `net.minecraft.client.gui.GuiWorldEdit`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void updateScreen()`
- `public void initGui()`
- `public void onGuiClosed()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `mouseReleased`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiWorldSelection

*class* `net.minecraft.client.gui.GuiWorldSelection`

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `protected GuiScreen prevScreen`
- `protected java.lang.String title`

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `public void postInit()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseReleased(int mouseX,  int mouseY,  int state)`
- `public void setVersionTooltip(java.lang.String p_184861_1_)`
- `public void selectWorld(GuiListWorldSelectionEntry entry)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClickMove`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiYesNo

*class* `net.minecraft.client.gui.GuiYesNo`

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `protected GuiYesNoCallback parentScreen`
- `protected java.lang.String messageLine1`
- `protected java.lang.String confirmButtonText`
- `protected java.lang.String cancelButtonText`
- `protected int parentButtonClickedId`

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public void setButtonDelay(int ticksUntilEnableIn)`
- `public void updateScreen()`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiYesNoCallback

*interface* `net.minecraft.client.gui.GuiYesNoCallback`

### Methods
- `void confirmClicked(boolean result,  int id)`

## IProgressMeter

*interface* `net.minecraft.client.gui.IProgressMeter`

### Fields
- `static final java.lang.String[] LOADING_STRINGS`

### Methods
- `void onStatsUpdated()`

## MapItemRenderer

*class* `net.minecraft.client.gui.MapItemRenderer`

### Methods
- `public void updateMapTexture(MapData mapdataIn)`
- `public void renderMap(MapData mapdataIn,  boolean noOverlayRendering)`
- `public net.minecraft.client.gui.MapItemRenderer.Instance getMapInstanceIfExists(java.lang.String p_191205_1_)`
- `public void clearLoadedMaps()`
- `public MapData getData(net.minecraft.client.gui.MapItemRenderer.Instance p_191207_1_)`

## ScaledResolution

*class* `net.minecraft.client.gui.ScaledResolution`

### Methods
- `public int getScaledWidth()`
- `public int getScaledHeight()`
- `public double getScaledWidth_double()`
- `public double getScaledHeight_double()`
- `public int getScaleFactor()`

## ScreenChatOptions

*class* `net.minecraft.client.gui.ScreenChatOptions`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public void updateNarratorButton()`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## ServerListEntryLanDetected

*class* `net.minecraft.client.gui.ServerListEntryLanDetected`

All Implemented Interfaces: GuiListExtended.IGuiListEntry

### Fields
- `protected final Minecraft mc`
- `protected final LanServerInfo serverData`

### Methods
- `public void drawEntry(int slotIndex,  int x,  int y,  int listWidth,  int slotHeight,  int mouseX,  int mouseY,  boolean isSelected,  float partialTicks)`
- `public boolean mousePressed(int slotIndex,  int mouseX,  int mouseY,  int mouseEvent,  int relativeX,  int relativeY)`
- `public void updatePosition(int slotIndex,  int x,  int y,  float partialTicks)`
- `public void mouseReleased(int slotIndex,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`
- `public LanServerInfo getServerData()`

## ServerListEntryLanScan

*class* `net.minecraft.client.gui.ServerListEntryLanScan`

All Implemented Interfaces: GuiListExtended.IGuiListEntry

### Methods
- `public void drawEntry(int slotIndex,  int x,  int y,  int listWidth,  int slotHeight,  int mouseX,  int mouseY,  boolean isSelected,  float partialTicks)`
- `public void updatePosition(int slotIndex,  int x,  int y,  float partialTicks)`
- `public boolean mousePressed(int slotIndex,  int mouseX,  int mouseY,  int mouseEvent,  int relativeX,  int relativeY)`
- `public void mouseReleased(int slotIndex,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`

## ServerListEntryNormal

*class* `net.minecraft.client.gui.ServerListEntryNormal`

All Implemented Interfaces: GuiListExtended.IGuiListEntry

### Methods
- `public void drawEntry(int slotIndex,  int x,  int y,  int listWidth,  int slotHeight,  int mouseX,  int mouseY,  boolean isSelected,  float partialTicks)`
- `protected void drawTextureAt(int p_178012_1_,  int p_178012_2_,  ResourceLocation p_178012_3_)`
- `public boolean mousePressed(int slotIndex,  int mouseX,  int mouseY,  int mouseEvent,  int relativeX,  int relativeY)`
- `public void updatePosition(int slotIndex,  int x,  int y,  float partialTicks)`
- `public void mouseReleased(int slotIndex,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`
- `public ServerData getServerData()`

## ServerSelectionList

*class* `net.minecraft.client.gui.ServerSelectionList`

### Inherited fields
- from `net.minecraft.client.gui.GuiSlot`: `amountScrolled`, `bottom`, `centerListVertically`, `hasListHeader`, `headerPadding`, `height`, `initialClickY`, `lastClicked`, `left`, `mc`, `mouseX`, `mouseY`, `right`, `scrollMultiplier`, `selectedElement`, `showSelectionBox`, `slotHeight`, `top`, `visible`, `width`

### Methods
- `public GuiListExtended.IGuiListEntry getListEntry(int index)`
- `protected int getSize()`
- `public void setSelectedSlotIndex(int selectedSlotIndexIn)`
- `protected boolean isSelected(int slotIndex)`
- `public int getSelected()`
- `public void updateOnlineServers(ServerList p_148195_1_)`
- `public void updateNetworkServers(java.util.List<LanServerInfo> p_148194_1_)`
- `protected int getScrollBarX()`
- `public int getListWidth()`

### Inherited methods
- from `net.minecraft.client.gui.GuiListExtended`: `drawBackground`, `drawSlot`, `elementClicked`, `mouseClicked`, `mouseReleased`, `updateItemPos`
- from `net.minecraft.client.gui.GuiSlot`: `actionPerformed`, `bindAmountScrolled`, `clickedHeader`, `drawContainerBackground`, `drawListHeader`, `drawScreen`, `drawSelectionBox`, `getAmountScrolled`, `getContentHeight`, `getEnabled`, `getMaxScroll`, `getSlotHeight`, `getSlotIndexFromScreenCoords`, `handleMouseInput`, `isMouseYWithinSlotBounds`, `overlayBackground`, `registerScrollButtons`, `renderDecorations`, `scrollBy`, `setDimensions`, `setEnabled`, `setHasListHeader`, `setShowSelectionBox`, `setSlotXBoundsFromLeft`
