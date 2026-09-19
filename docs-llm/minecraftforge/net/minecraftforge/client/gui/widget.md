# net.minecraftforge.client.gui.widget

- [ExtendedButton](#extendedbutton)
- [ForgeSlider](#forgeslider)
- [ModListWidget](#modlistwidget)
- [ModListWidget.ModEntry](#modlistwidget.modentry)
- [ScrollPanel](#scrollpanel)
- [UnicodeGlyphButton](#unicodeglyphbutton)
## ExtendedButton

*class* `net.minecraftforge.client.gui.widget.ExtendedButton`

This class provides a button that fixes several bugs present in the vanilla GuiButton drawing code.
 The gist of it is that it allows buttons of any size without gaps in the graphics and with the
 borders drawn properly. It also prevents button text from extending out of the sides of the button by
 trimming the end of the string and adding an ellipsis.

 The code that handles drawing the button is in GuiUtils.

### Inherited fields
- from `net.minecraft.client.gui.components.Button`: `createNarration`, `DEFAULT_HEIGHT`, `DEFAULT_NARRATION`, `DEFAULT_WIDTH`, `onPress`, `SMALL_WIDTH`
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void renderWidget(GuiGraphics guiGraphics,  int mouseX,  int mouseY,  float partialTick)`
  Draws this button to the screen.

### Inherited methods
- from `net.minecraft.client.gui.components.Button`: `builder`, `createNarrationMessage`, `onPress`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`, `renderString`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## ForgeSlider

*class* `net.minecraftforge.client.gui.widget.ForgeSlider`

Slider widget implementation which allows inputting values in a certain range with optional step size.

### Fields
- `protected Component prefix`
- `protected Component suffix`
- `protected double minValue`
- `protected double maxValue`
- `protected double stepSize`
  Allows input of discontinuous values with a certain step
- `protected boolean drawString`
- `private final DecimalFormat format`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSliderButton`: `TEXT_MARGIN`, `value`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public double getValue()`
  - returns: Current slider value as a double
- `public long getValueLong()`
  - returns: Current slider value as an long
- `public int getValueInt()`
  - returns: Current slider value as an int
- `public void setValue(double value)`
  - param: value - The new slider value
- `public String getValueString()`
- `public void onClick(double mouseX,  double mouseY)`
- `protected void onDrag(double mouseX,  double mouseY,  double dragX,  double dragY)`
- `public boolean keyPressed(int keyCode,  int scanCode,  int modifiers)`
- `private void setValueFromMouse(double mouseX)`
- `private void setSliderValue(double value)`
  - param: value - Percentage of slider range
- `private double snapToNearest(double value)`
  Snaps the value, so that the displayed value is the nearest multiple of stepSize.
   If stepSize is 0, no snapping occurs.
- `protected void updateMessage()`
- `protected void applyValue()`
- `public void renderWidget(GuiGraphics guiGraphics,  int mouseX,  int mouseY,  float partialTick)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractSliderButton`: `createNarrationMessage`, `getHandleSprite`, `getSprite`, `onRelease`, `playDownSound`, `setFocused`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## ModListWidget

*class* `net.minecraftforge.client.gui.widget.ModListWidget`

### Fields
- `private static final ResourceLocation VERSION_CHECK_ICONS`
- `private final int listWidth`
- `private ModListScreen parent`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private static String stripControlCodes(String value)`
- `protected int getScrollbarPosition()`
- `public int getRowWidth()`
- `public void refreshList()`
- `public void render(GuiGraphics guiGraphics,  int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getScrollAmount`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `replaceEntries`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `setSelected`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ModListWidget.ModEntry

*class* `net.minecraftforge.client.gui.widget.ModListWidget.ModEntry`

Enclosing class: ModListWidget

### Fields
- `private final net.minecraftforge.forgespi.language.IModInfo modInfo`
- `private final ModListScreen parent`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public Component getNarration()`
- `public void render(GuiGraphics guiGraphics,  int entryIdx,  int top,  int left,  int entryWidth,  int entryHeight,  int mouseX,  int mouseY,  boolean isMouseOver,  float partialTick)`
- `public boolean mouseClicked(double p_mouseClicked_1_,  double p_mouseClicked_3_,  int p_mouseClicked_5_)`
- `public net.minecraftforge.forgespi.language.IModInfo getInfo()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ScrollPanel

*class* `net.minecraftforge.client.gui.widget.ScrollPanel`

Abstract scroll panel class.

### Fields
- `private final Minecraft client`
- `protected final int width`
- `protected final int height`
- `protected final int top`
- `protected final int bottom`
- `protected final int right`
- `protected final int left`
- `private boolean scrolling`
- `protected float scrollDistance`
- `protected boolean captureMouse`
- `protected final int border`
- `private final int barWidth`
- `private final int barLeft`
- `private final int bgColorFrom`
- `private final int bgColorTo`
- `private final int barBgColor`
- `private final int barColor`
- `private final int barBorderColor`

### Inherited fields
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected abstract int getContentHeight()`
- `protected void drawBackground(GuiGraphics guiGraphics,  Tesselator tess,  float partialTick)`
  Draws the background of the scroll panel. This runs AFTER Scissors are enabled.
- `protected abstract void drawPanel(GuiGraphics guiGraphics,  int entryRight,  int relativeY,  Tesselator tess,  int mouseX,  int mouseY)`
  Draw anything special on the screen. Scissor (RenderSystem.enableScissor) is enabled
   for anything that is rendered outside the view box. Do not mess with Scissor unless you support this.
- `protected boolean clickPanel(double mouseX,  double mouseY,  int button)`
- `private int getMaxScroll()`
- `private void applyScrollLimits()`
- `public boolean mouseScrolled(double mouseX,  double mouseY,  double deltaX,  double deltaY)`
- `protected int getScrollAmount()`
- `public boolean isMouseOver(double mouseX,  double mouseY)`
- `public boolean mouseClicked(double mouseX,  double mouseY,  int button)`
- `public boolean mouseReleased(double mouseX,  double mouseY,  int button)`
- `private int getBarHeight()`
- `public boolean mouseDragged(double mouseX,  double mouseY,  int button,  double deltaX,  double deltaY)`
- `public void render(GuiGraphics guiGraphics,  int mouseX,  int mouseY,  float partialTick)`
- `protected void drawGradientRect(GuiGraphics guiGraphics,  int left,  int top,  int right,  int bottom,  int color1,  int color2)`
- `public List<? extends GuiEventListener> children()`

### Inherited methods
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getRectangle`, `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`, `narrationPriority`
- from `net.minecraft.client.gui.narration.NarrationSupplier`: `updateNarration`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## UnicodeGlyphButton

*class* `net.minecraftforge.client.gui.widget.UnicodeGlyphButton`

This class provides a button that shows a string glyph at the beginning. The glyph can be scaled using the glyphScale parameter.

### Fields
- `public String glyph`
- `public float glyphScale`

### Inherited fields
- from `net.minecraft.client.gui.components.Button`: `createNarration`, `DEFAULT_HEIGHT`, `DEFAULT_NARRATION`, `DEFAULT_WIDTH`, `onPress`, `SMALL_WIDTH`
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics guiGraphics,  int mouseX,  int mouseY,  float partialTick)`

### Inherited methods
- from `net.minecraftforge.client.gui.widget.ExtendedButton`: `renderWidget`
- from `net.minecraft.client.gui.components.Button`: `builder`, `createNarrationMessage`, `onPress`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`, `renderString`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`
