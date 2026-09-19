# net.minecraft.client.gui.screens.controls

- [ControlsScreen](#controlsscreen)
- [KeyBindsList](#keybindslist)
- [KeyBindsList.CategoryEntry](#keybindslist.categoryentry)
- [KeyBindsList.Entry](#keybindslist.entry)
- [KeyBindsList.KeyEntry](#keybindslist.keyentry)
- [KeyBindsScreen](#keybindsscreen)
## ControlsScreen

*class* `net.minecraft.client.gui.screens.controls.ControlsScreen`

### Fields
- `private static final int ROW_SPACING` (= 24)

### Inherited fields
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `lastScreen`, `options`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void render(GuiGraphics p_282220_,  int p_281404_,  int p_281386_,  float p_281394_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `basicListRender`, `onClose`, `removed`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## KeyBindsList

*class* `net.minecraft.client.gui.screens.controls.KeyBindsList`

### Fields
- `final KeyBindsScreen keyBindsScreen`
- `int maxNameWidth`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void resetMappingAndUpdateButtons()`
- `public void refreshEntries()`
- `protected int getScrollbarPosition()`
- `public int getRowWidth()`

### Inherited methods
- from `net.minecraft.client.gui.components.ContainerObjectSelectionList`: `isSelectedItem`, `narrationPriority`, `nextFocusPath`, `setFocused`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getScrollAmount`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `replaceEntries`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `setSelected`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## KeyBindsList.CategoryEntry

*class* `net.minecraft.client.gui.screens.controls.KeyBindsList.CategoryEntry`

Enclosing class: KeyBindsList

### Fields
- `final Component name`
- `private final int width`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_281285_,  int p_281396_,  int p_283616_,  int p_281333_,  int p_282287_,  int p_283549_,  int p_283684_,  int p_283258_,  boolean p_281563_,  float p_283186_)`
- `@Nullable public ComponentPath nextFocusPath(FocusNavigationEvent p_265391_)`
- `public List<? extends GuiEventListener> children()`
- `public List<? extends NarratableEntry> narratables()`
- `protected void refreshEntry()`

### Inherited methods
- from `net.minecraft.client.gui.components.ContainerObjectSelectionList.Entry`: `focusPathAtIndex`, `getFocused`, `isDragging`, `mouseClicked`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getRectangle`, `isMouseOver`, `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## KeyBindsList.Entry

*class* `net.minecraft.client.gui.screens.controls.KeyBindsList.Entry`

Enclosing class: KeyBindsList

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `abstract void refreshEntry()`

### Inherited methods
- from `net.minecraft.client.gui.components.ContainerObjectSelectionList.Entry`: `focusPathAtIndex`, `getFocused`, `isDragging`, `mouseClicked`, `narratables`, `nextFocusPath`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `render`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `children`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getRectangle`, `isMouseOver`, `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## KeyBindsList.KeyEntry

*class* `net.minecraft.client.gui.screens.controls.KeyBindsList.KeyEntry`

Enclosing class: KeyBindsList

### Fields
- `private final KeyMapping key`
- `private final Component name`
- `private final Button changeButton`
- `private final Button resetButton`
- `private boolean hasCollision`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_281805_,  int p_281298_,  int p_282357_,  int p_281373_,  int p_283433_,  int p_281932_,  int p_282224_,  int p_282053_,  boolean p_282605_,  float p_281432_)`
- `public List<? extends GuiEventListener> children()`
- `public List<? extends NarratableEntry> narratables()`
- `protected void refreshEntry()`

### Inherited methods
- from `net.minecraft.client.gui.components.ContainerObjectSelectionList.Entry`: `focusPathAtIndex`, `getFocused`, `isDragging`, `mouseClicked`, `nextFocusPath`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getRectangle`, `isMouseOver`, `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## KeyBindsScreen

*class* `net.minecraft.client.gui.screens.controls.KeyBindsScreen`

### Fields
- `@Nullable public KeyMapping selectedKey`
- `public long lastKeySelection`
- `private KeyBindsList keyBindsList`
- `private Button resetButton`

### Inherited fields
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `lastScreen`, `options`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public boolean mouseClicked(double p_193983_,  double p_193984_,  int p_193985_)`
- `public boolean keyPressed(int p_193987_,  int p_193988_,  int p_193989_)`
- `public boolean keyReleased(int keyCode,  int scanCode,  int modifiers)`
- `public void render(GuiGraphics p_282556_,  int p_193992_,  int p_193993_,  float p_193994_)`
- `public void renderBackground(GuiGraphics p_297309_,  int p_299178_,  int p_298961_,  float p_298519_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `basicListRender`, `onClose`, `removed`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`
