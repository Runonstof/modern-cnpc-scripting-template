# net.minecraft.client.gui.achievement

- [GuiStats](#guistats)
## GuiStats

*class* `net.minecraft.client.gui.achievement.GuiStats`

All Implemented Interfaces: GuiYesNoCallback, IProgressMeter

### Fields
- `protected GuiScreen parentScreen`
- `protected java.lang.String screenTitle`

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`
- from `net.minecraft.client.gui.IProgressMeter`: `LOADING_STRINGS`

### Methods
- `public void initGui()`
- `public void handleMouseInput()  throws java.io.IOException`
  - throws: java.io.IOException
- `public void initLists()`
- `public void initButtons()`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public void onStatsUpdated()`
- `public boolean doesGuiPauseGame()`

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`
