# net.minecraft.client.gui.inventory

- [CreativeCrafting](#creativecrafting)
- [GuiBeacon](#guibeacon)
- [GuiBrewingStand](#guibrewingstand)
- [GuiChest](#guichest)
- [GuiContainer](#guicontainer)
- [GuiContainerCreative](#guicontainercreative)
- [GuiContainerCreative.ContainerCreative](#guicontainercreative.containercreative)
- [GuiCrafting](#guicrafting)
- [GuiDispenser](#guidispenser)
- [GuiEditCommandBlockMinecart](#guieditcommandblockminecart)
- [GuiEditSign](#guieditsign)
- [GuiEditStructure](#guieditstructure)
- [GuiFurnace](#guifurnace)
- [GuiInventory](#guiinventory)
- [GuiScreenHorseInventory](#guiscreenhorseinventory)
- [GuiShulkerBox](#guishulkerbox)
## CreativeCrafting

*class* `net.minecraft.client.gui.inventory.CreativeCrafting`

All Implemented Interfaces: IContainerListener

### Methods
- `public void sendAllContents(Container containerToSend,  NonNullList<ItemStack> itemsList)`
- `public void sendSlotContents(Container containerToSend,  int slotInd,  ItemStack stack)`
- `public void sendWindowProperty(Container containerIn,  int varToUpdate,  int newValue)`
- `public void sendAllWindowProperties(Container containerIn,  IInventory inventory)`

## GuiBeacon

*class* `net.minecraft.client.gui.inventory.GuiBeacon`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.inventory.GuiContainer`: `dragSplitting`, `dragSplittingSlots`, `guiLeft`, `guiTop`, `INVENTORY_BACKGROUND`, `inventorySlots`, `xSize`, `ySize`
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void updateScreen()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `protected void drawGuiContainerForegroundLayer(int mouseX,  int mouseY)`
- `protected void drawGuiContainerBackgroundLayer(float partialTicks,  int mouseX,  int mouseY)`

### Inherited methods
- from `net.minecraft.client.gui.inventory.GuiContainer`: `checkHotbarKeys`, `doesGuiPauseGame`, `getGuiLeft`, `getGuiTop`, `getSlotUnderMouse`, `getXSize`, `getYSize`, `handleMouseClick`, `hasClickedOutside`, `isPointInRegion`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `renderHoveredToolTip`
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiBrewingStand

*class* `net.minecraft.client.gui.inventory.GuiBrewingStand`

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

## GuiChest

*class* `net.minecraft.client.gui.inventory.GuiChest`

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

## GuiContainer

*class* `net.minecraft.client.gui.inventory.GuiContainer`

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `public static final ResourceLocation INVENTORY_BACKGROUND`
- `protected int xSize`
- `protected int ySize`
- `public Container inventorySlots`
- `protected int guiLeft`
- `protected int guiTop`
- `protected final java.util.Set<Slot> dragSplittingSlots`
- `protected boolean dragSplitting`

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `protected void renderHoveredToolTip(int p_191948_1_,  int p_191948_2_)`
- `protected void drawGuiContainerForegroundLayer(int mouseX,  int mouseY)`
- `protected abstract void drawGuiContainerBackgroundLayer(float partialTicks,  int mouseX,  int mouseY)`
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected boolean hasClickedOutside(int p_193983_1_,  int p_193983_2_,  int p_193983_3_,  int p_193983_4_)`
- `protected void mouseClickMove(int mouseX,  int mouseY,  int clickedMouseButton,  long timeSinceLastClick)`
- `protected void mouseReleased(int mouseX,  int mouseY,  int state)`
- `protected boolean isPointInRegion(int rectX,  int rectY,  int rectWidth,  int rectHeight,  int pointX,  int pointY)`
- `protected void handleMouseClick(Slot slotIn,  int slotId,  int mouseButton,  ClickType type)`
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected boolean checkHotbarKeys(int keyCode)`
- `public void onGuiClosed()`
- `public boolean doesGuiPauseGame()`
- `public void updateScreen()`
- `public Slot getSlotUnderMouse()`
  Returns the slot that is currently displayed under the mouse.
- `public int getGuiLeft()`
- `public int getGuiTop()`
- `public int getXSize()`
- `public int getYSize()`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `actionPerformed`, `addButton`, `confirmClicked`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiContainerCreative

*class* `net.minecraft.client.gui.inventory.GuiContainerCreative`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.renderer.InventoryEffectRenderer`: `hasActivePotionEffects`
- from `net.minecraft.client.gui.inventory.GuiContainer`: `dragSplitting`, `dragSplittingSlots`, `guiLeft`, `guiTop`, `INVENTORY_BACKGROUND`, `inventorySlots`, `xSize`, `ySize`
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void updateScreen()`
- `protected void handleMouseClick(Slot slotIn,  int slotId,  int mouseButton,  ClickType type)`
- `protected void updateActivePotionEffects()`
- `public void initGui()`
- `public void onGuiClosed()`
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void drawGuiContainerForegroundLayer(int mouseX,  int mouseY)`
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseReleased(int mouseX,  int mouseY,  int state)`
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `protected void renderToolTip(ItemStack stack,  int x,  int y)`
- `protected void drawGuiContainerBackgroundLayer(float partialTicks,  int mouseX,  int mouseY)`
- `protected boolean isMouseOverTab(CreativeTabs tab,  int mouseX,  int mouseY)`
- `protected boolean renderCreativeInventoryHoveringText(CreativeTabs tab,  int mouseX,  int mouseY)`
- `protected void drawTab(CreativeTabs tab)`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public int getSelectedTabIndex()`
- `public static void handleHotbarSnapshots(Minecraft p_192044_0_,  int p_192044_1_,  boolean p_192044_2_,  boolean p_192044_3_)`

### Inherited methods
- from `net.minecraft.client.gui.inventory.GuiContainer`: `checkHotbarKeys`, `doesGuiPauseGame`, `getGuiLeft`, `getGuiTop`, `getSlotUnderMouse`, `getXSize`, `getYSize`, `hasClickedOutside`, `isPointInRegion`, `mouseClickMove`, `renderHoveredToolTip`
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `onResize`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiContainerCreative.ContainerCreative

*class* `net.minecraft.client.gui.inventory.GuiContainerCreative.ContainerCreative`

Enclosing class: GuiContainerCreative

### Fields
- `public NonNullList<ItemStack> itemList`

### Inherited fields
- from `net.minecraft.inventory.Container`: `inventoryItemStacks`, `inventorySlots`, `listeners`, `windowId`

### Methods
- `public boolean canInteractWith(EntityPlayer playerIn)`
- `public void scrollTo(float pos)`
- `public boolean canScroll()`
- `public ItemStack transferStackInSlot(EntityPlayer playerIn,  int index)`
- `public boolean canMergeSlot(ItemStack stack,  Slot slotIn)`
- `public boolean canDragIntoSlot(Slot slotIn)`

### Inherited methods
- from `net.minecraft.inventory.Container`: `addListener`, `addSlotToContainer`, `calcRedstone`, `calcRedstoneFromInventory`, `canAddItemToSlot`, `clearContainer`, `computeStackSize`, `detectAndSendChanges`, `enchantItem`, `extractDragMode`, `getCanCraft`, `getDragEvent`, `getInventory`, `getNextTransactionID`, `getQuickcraftMask`, `getSlot`, `getSlotFromInventory`, `isValidDragMode`, `mergeItemStack`, `onContainerClosed`, `onCraftMatrixChanged`, `putStackInSlot`, `removeListener`, `resetDrag`, `setAll`, `setCanCraft`, `slotChangedCraftingGrid`, `slotClick`, `updateProgressBar`

## GuiCrafting

*class* `net.minecraft.client.gui.inventory.GuiCrafting`

All Implemented Interfaces: GuiYesNoCallback, IRecipeShownListener

### Inherited fields
- from `net.minecraft.client.gui.inventory.GuiContainer`: `dragSplitting`, `dragSplittingSlots`, `guiLeft`, `guiTop`, `INVENTORY_BACKGROUND`, `inventorySlots`, `xSize`, `ySize`
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void updateScreen()`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `protected void drawGuiContainerForegroundLayer(int mouseX,  int mouseY)`
- `protected void drawGuiContainerBackgroundLayer(float partialTicks,  int mouseX,  int mouseY)`
- `protected boolean isPointInRegion(int rectX,  int rectY,  int rectWidth,  int rectHeight,  int pointX,  int pointY)`
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected boolean hasClickedOutside(int p_193983_1_,  int p_193983_2_,  int p_193983_3_,  int p_193983_4_)`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void handleMouseClick(Slot slotIn,  int slotId,  int mouseButton,  ClickType type)`
- `public void recipesUpdated()`
- `public void onGuiClosed()`
- `public GuiRecipeBook func_194310_f()`

### Inherited methods
- from `net.minecraft.client.gui.inventory.GuiContainer`: `checkHotbarKeys`, `doesGuiPauseGame`, `getGuiLeft`, `getGuiTop`, `getSlotUnderMouse`, `getXSize`, `getYSize`, `mouseClickMove`, `mouseReleased`, `renderHoveredToolTip`
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiDispenser

*class* `net.minecraft.client.gui.inventory.GuiDispenser`

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `public IInventory dispenserInventory`

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

## GuiEditCommandBlockMinecart

*class* `net.minecraft.client.gui.inventory.GuiEditCommandBlockMinecart`

All Implemented Interfaces: GuiYesNoCallback, ITabCompleter

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
- `public void setCompletions(java.lang.String... newCompletions)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `mouseReleased`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiEditSign

*class* `net.minecraft.client.gui.inventory.GuiEditSign`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void onGuiClosed()`
- `public void updateScreen()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiEditStructure

*class* `net.minecraft.client.gui.inventory.GuiEditStructure`

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `public static final int[] LEGAL_KEY_CODES`

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
- `public boolean doesGuiPauseGame()`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `mouseReleased`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiFurnace

*class* `net.minecraft.client.gui.inventory.GuiFurnace`

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

## GuiInventory

*class* `net.minecraft.client.gui.inventory.GuiInventory`

All Implemented Interfaces: GuiYesNoCallback, IRecipeShownListener

### Inherited fields
- from `net.minecraft.client.renderer.InventoryEffectRenderer`: `hasActivePotionEffects`
- from `net.minecraft.client.gui.inventory.GuiContainer`: `dragSplitting`, `dragSplittingSlots`, `guiLeft`, `guiTop`, `INVENTORY_BACKGROUND`, `inventorySlots`, `xSize`, `ySize`
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void updateScreen()`
- `public void initGui()`
- `protected void drawGuiContainerForegroundLayer(int mouseX,  int mouseY)`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `protected void drawGuiContainerBackgroundLayer(float partialTicks,  int mouseX,  int mouseY)`
- `public static void drawEntityOnScreen(int posX,  int posY,  int scale,  float mouseX,  float mouseY,  EntityLivingBase ent)`
- `protected boolean isPointInRegion(int rectX,  int rectY,  int rectWidth,  int rectHeight,  int pointX,  int pointY)`
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void mouseReleased(int mouseX,  int mouseY,  int state)`
- `protected boolean hasClickedOutside(int p_193983_1_,  int p_193983_2_,  int p_193983_3_,  int p_193983_4_)`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void handleMouseClick(Slot slotIn,  int slotId,  int mouseButton,  ClickType type)`
- `public void recipesUpdated()`
- `public void onGuiClosed()`
- `public GuiRecipeBook func_194310_f()`

### Inherited methods
- from `net.minecraft.client.renderer.InventoryEffectRenderer`: `updateActivePotionEffects`
- from `net.minecraft.client.gui.inventory.GuiContainer`: `checkHotbarKeys`, `doesGuiPauseGame`, `getGuiLeft`, `getGuiTop`, `getSlotUnderMouse`, `getXSize`, `getYSize`, `mouseClickMove`, `renderHoveredToolTip`
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiScreenHorseInventory

*class* `net.minecraft.client.gui.inventory.GuiScreenHorseInventory`

All Implemented Interfaces: GuiYesNoCallback

### Inherited fields
- from `net.minecraft.client.gui.inventory.GuiContainer`: `dragSplitting`, `dragSplittingSlots`, `guiLeft`, `guiTop`, `INVENTORY_BACKGROUND`, `inventorySlots`, `xSize`, `ySize`
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `protected void drawGuiContainerForegroundLayer(int mouseX,  int mouseY)`
- `protected void drawGuiContainerBackgroundLayer(float partialTicks,  int mouseX,  int mouseY)`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.inventory.GuiContainer`: `checkHotbarKeys`, `doesGuiPauseGame`, `getGuiLeft`, `getGuiTop`, `getSlotUnderMouse`, `getXSize`, `getYSize`, `handleMouseClick`, `hasClickedOutside`, `initGui`, `isPointInRegion`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `renderHoveredToolTip`, `updateScreen`
- from `net.minecraft.client.gui.GuiScreen`: `actionPerformed`, `addButton`, `confirmClicked`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiShulkerBox

*class* `net.minecraft.client.gui.inventory.GuiShulkerBox`

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
