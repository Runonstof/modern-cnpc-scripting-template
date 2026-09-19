# net.minecraft.realms

- [DisconnectedRealmsScreen](#disconnectedrealmsscreen)
- [RealmsConnect](#realmsconnect)
- [RealmsLabel](#realmslabel)
- [RealmsObjectSelectionList>](#realmsobjectselectionlist)
- [RealmsScreen](#realmsscreen)
- [RepeatedNarrator](#repeatednarrator)
- [RepeatedNarrator.Params](#repeatednarrator.params)
## DisconnectedRealmsScreen

*class* `net.minecraft.realms.DisconnectedRealmsScreen`

### Fields
- `private final Component reason`
- `private MultiLineLabel message`
- `private final Screen parent`
- `private int textHeight`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `public Component getNarrationMessage()`
- `public void onClose()`
- `public void render(GuiGraphics p_282959_,  int p_120658_,  int p_120659_,  float p_120660_)`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsConnect

*class* `net.minecraft.realms.RealmsConnect`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `final Screen onlineScreen`
- `volatile boolean aborted`
- `@Nullable Connection connection`

### Methods
- `public void connect(RealmsServer p_175032_,  ServerAddress p_175033_)`
- `public void abort()`
- `public void tick()`

## RealmsLabel

*class* `net.minecraft.realms.RealmsLabel`

### Fields
- `private final Component text`
- `private final int x`
- `private final int y`
- `private final int color`

### Methods
- `public void render(GuiGraphics p_281597_,  int p_282874_,  int p_281694_,  float p_282363_)`
- `public Component getText()`

## RealmsObjectSelectionList>

*class* `net.minecraft.realms.RealmsObjectSelectionList>`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void setSelectedItem(int p_120768_)`
- `public void selectItem(int p_120750_)`
- `public int getMaxPosition()`
- `public int getScrollbarPosition()`
- `public int getRowWidth()`
- `public void replaceEntries(Collection<E> p_120759_)`
- `public int getItemCount()`
- `public int getRowTop(int p_120766_)`
- `public int getRowLeft()`
- `public int addEntry(E p_120757_)`
- `public void clear()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getLeft`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowRight`, `getScrollAmount`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `setSelected`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsScreen

*class* `net.minecraft.realms.RealmsScreen`

### Fields
- `protected static final int TITLE_HEIGHT` (= 17)
- `protected static final int EXPIRATION_NOTIFICATION_DAYS` (= 7)
- `protected static final long SIZE_LIMIT` (= 5368709120L)
- `protected static final int COLOR_DARK_GRAY` (= 5000268)
- `protected static final int COLOR_MEDIUM_GRAY` (= 7105644)
- `protected static final int COLOR_GREEN` (= 8388479)
- `protected static final int COLOR_RED_FADE` (= 15553363)
- `protected static final int COLOR_YELLOW` (= 13413468)
- `protected static final int COLOR_BRIGHT_YELLOW` (= -256)
- `protected static final int COLOR_LINK` (= 3368635)
- `protected static final int COLOR_LINK_HOVER` (= 7107012)
- `protected static final int COLOR_INFO` (= 8226750)
- `protected static final int SKIN_FACE_SIZE` (= 8)
- `private final List<RealmsLabel> labels`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected static int row(int p_120775_)`
- `protected RealmsLabel addLabel(RealmsLabel p_175074_)`
- `public Component createLabelNarration()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `render`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RepeatedNarrator

*class* `net.minecraft.realms.RepeatedNarrator`

### Fields
- `private final float permitsPerSecond`
- `private final AtomicReference<RepeatedNarrator.Params> params`

### Methods
- `public void narrate(GameNarrator p_240528_,  Component p_240604_)`

## RepeatedNarrator.Params

*class* `net.minecraft.realms.RepeatedNarrator.Params`

Enclosing class: RepeatedNarrator

### Fields
- `final Component narration`
- `final com.google.common.util.concurrent.RateLimiter rateLimiter`
