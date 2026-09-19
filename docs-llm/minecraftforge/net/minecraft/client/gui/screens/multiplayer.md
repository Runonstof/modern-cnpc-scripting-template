# net.minecraft.client.gui.screens.multiplayer

- [JoinMultiplayerScreen](#joinmultiplayerscreen)
- [Realms32bitWarningScreen](#realms32bitwarningscreen)
- [SafetyScreen](#safetyscreen)
- [ServerReconfigScreen](#serverreconfigscreen)
- [ServerSelectionList](#serverselectionlist)
- [ServerSelectionList.Entry](#serverselectionlist.entry)
- [ServerSelectionList.LANHeader](#serverselectionlist.lanheader)
- [ServerSelectionList.NetworkServerEntry](#serverselectionlist.networkserverentry)
- [ServerSelectionList.OnlineServerEntry](#serverselectionlist.onlineserverentry)
- [WarningScreen](#warningscreen)
## JoinMultiplayerScreen

*class* `net.minecraft.client.gui.screens.multiplayer.JoinMultiplayerScreen`

### Fields
- `public static final int BUTTON_ROW_WIDTH` (= 308)
- `public static final int TOP_ROW_BUTTON_WIDTH` (= 100)
- `public static final int LOWER_ROW_BUTTON_WIDTH` (= 74)
- `public static final int FOOTER_HEIGHT` (= 64)
- `private static final org.slf4j.Logger LOGGER`
- `private final ServerStatusPinger pinger`
- `private final Screen lastScreen`
- `protected ServerSelectionList serverSelectionList`
- `private ServerList servers`
- `private Button editButton`
- `private Button selectButton`
- `private Button deleteButton`
- `@Nullable private List<Component> toolTip`
- `private ServerData editingServer`
- `private LanServerDetection.LanServerList lanServerList`
- `@Nullable private LanServerDetection.LanServerDetector lanServerDetector`
- `private boolean initedOnce`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void tick()`
- `public void removed()`
- `private void refreshServerList()`
- `private void deleteCallback(boolean p_99712_)`
- `private void editServerCallback(boolean p_99717_)`
- `private void addServerCallback(boolean p_99722_)`
- `private void directJoinCallback(boolean p_99726_)`
- `public boolean keyPressed(int p_99690_,  int p_99691_,  int p_99692_)`
- `public void render(GuiGraphics p_281617_,  int p_281629_,  int p_281983_,  float p_283431_)`
- `public void joinSelectedServer()`
- `private void join(ServerData p_99703_)`
- `public void setSelected(ServerSelectionList.Entry p_99701_)`
- `protected void onSelectedChange()`
- `public void onClose()`
- `public ServerStatusPinger getPinger()`
- `public void setToolTip(List<Component> p_99708_)`
- `public ServerList getServers()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## Realms32bitWarningScreen

*class* `net.minecraft.client.gui.screens.multiplayer.Realms32bitWarningScreen`

### Fields
- `private static final Component TITLE`
- `private static final Component CONTENT`
- `private static final Component CHECK`
- `private static final Component NARRATION`
- `private final Screen previous`

### Inherited fields
- from `net.minecraft.client.gui.screens.multiplayer.WarningScreen`: `stopShowing`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void initButtons(int p_210900_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.multiplayer.WarningScreen`: `getLineHeight`, `getNarrationMessage`, `init`, `render`, `renderTitle`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## SafetyScreen

*class* `net.minecraft.client.gui.screens.multiplayer.SafetyScreen`

### Fields
- `private static final Component TITLE`
- `private static final Component CONTENT`
- `private static final Component CHECK`
- `private static final Component NARRATION`
- `private final Screen previous`

### Inherited fields
- from `net.minecraft.client.gui.screens.multiplayer.WarningScreen`: `stopShowing`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void initButtons(int p_210904_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.multiplayer.WarningScreen`: `getLineHeight`, `getNarrationMessage`, `init`, `render`, `renderTitle`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ServerReconfigScreen

*class* `net.minecraft.client.gui.screens.multiplayer.ServerReconfigScreen`

### Fields
- `private static final int DISCONNECT_TIME` (= 600)
- `private final Connection connection`
- `private Button disconnectButton`
- `private int delayTicker`
- `private final LinearLayout layout`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public boolean shouldCloseOnEsc()`
- `protected void init()`
- `protected void repositionElements()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `render`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ServerSelectionList

*class* `net.minecraft.client.gui.screens.multiplayer.ServerSelectionList`

### Fields
- `static final ResourceLocation INCOMPATIBLE_SPRITE`
- `static final ResourceLocation UNREACHABLE_SPRITE`
- `static final ResourceLocation PING_1_SPRITE`
- `static final ResourceLocation PING_2_SPRITE`
- `static final ResourceLocation PING_3_SPRITE`
- `static final ResourceLocation PING_4_SPRITE`
- `static final ResourceLocation PING_5_SPRITE`
- `static final ResourceLocation PINGING_1_SPRITE`
- `static final ResourceLocation PINGING_2_SPRITE`
- `static final ResourceLocation PINGING_3_SPRITE`
- `static final ResourceLocation PINGING_4_SPRITE`
- `static final ResourceLocation PINGING_5_SPRITE`
- `static final ResourceLocation JOIN_HIGHLIGHTED_SPRITE`
- `static final ResourceLocation JOIN_SPRITE`
- `static final ResourceLocation MOVE_UP_HIGHLIGHTED_SPRITE`
- `static final ResourceLocation MOVE_UP_SPRITE`
- `static final ResourceLocation MOVE_DOWN_HIGHLIGHTED_SPRITE`
- `static final ResourceLocation MOVE_DOWN_SPRITE`
- `static final org.slf4j.Logger LOGGER`
- `static final ThreadPoolExecutor THREAD_POOL`
- `private static final ResourceLocation ICON_MISSING`
- `static final Component SCANNING_LABEL`
- `static final Component CANT_RESOLVE_TEXT`
- `static final Component CANT_CONNECT_TEXT`
- `static final Component INCOMPATIBLE_STATUS`
- `static final Component NO_CONNECTION_STATUS`
- `static final Component PINGING_STATUS`
- `static final Component ONLINE_STATUS`
- `private final JoinMultiplayerScreen screen`
- `private final List<ServerSelectionList.OnlineServerEntry> onlineServers`
- `private final ServerSelectionList.Entry lanHeader`
- `private final List<ServerSelectionList.NetworkServerEntry> networkServers`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private void refreshEntries()`
- `public void setSelected(@Nullable  ServerSelectionList.Entry p_99790_)`
- `public boolean keyPressed(int p_99782_,  int p_99783_,  int p_99784_)`
- `public void updateOnlineServers(ServerList p_99798_)`
- `public void updateNetworkServers(List<LanServer> p_99800_)`
- `protected int getScrollbarPosition()`
- `public int getRowWidth()`
- `public void removed()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getScrollAmount`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `replaceEntries`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ServerSelectionList.Entry

*class* `net.minecraft.client.gui.screens.multiplayer.ServerSelectionList.Entry`

Enclosing class: ServerSelectionList

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void close()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `getNarration`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `render`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseClicked`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ServerSelectionList.LANHeader

*class* `net.minecraft.client.gui.screens.multiplayer.ServerSelectionList.LANHeader`

Enclosing class: ServerSelectionList

### Fields
- `private final Minecraft minecraft`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_281475_,  int p_282477_,  int p_282819_,  int p_282001_,  int p_281911_,  int p_283126_,  int p_282303_,  int p_281998_,  boolean p_282625_,  float p_281811_)`
- `public Component getNarration()`

### Inherited methods
- from `net.minecraft.client.gui.screens.multiplayer.ServerSelectionList.Entry`: `close`
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseClicked`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ServerSelectionList.NetworkServerEntry

*class* `net.minecraft.client.gui.screens.multiplayer.ServerSelectionList.NetworkServerEntry`

Enclosing class: ServerSelectionList

### Fields
- `private static final int ICON_WIDTH` (= 32)
- `private static final Component LAN_SERVER_HEADER`
- `private static final Component HIDDEN_ADDRESS_TEXT`
- `private final JoinMultiplayerScreen screen`
- `protected final Minecraft minecraft`
- `protected final LanServer serverData`
- `private long lastClickTime`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_282600_,  int p_282649_,  int p_283641_,  int p_282277_,  int p_283034_,  int p_281533_,  int p_282746_,  int p_281454_,  boolean p_283673_,  float p_282694_)`
- `public boolean mouseClicked(double p_99840_,  double p_99841_,  int p_99842_)`
- `public LanServer getServerData()`
- `public Component getNarration()`
- `public Component getServerNarration()`

### Inherited methods
- from `net.minecraft.client.gui.screens.multiplayer.ServerSelectionList.Entry`: `close`
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ServerSelectionList.OnlineServerEntry

*class* `net.minecraft.client.gui.screens.multiplayer.ServerSelectionList.OnlineServerEntry`

Enclosing class: ServerSelectionList

### Fields
- `private static final int ICON_WIDTH` (= 32)
- `private static final int ICON_HEIGHT` (= 32)
- `private static final int ICON_OVERLAY_X_MOVE_LEFT` (= 32)
- `private final JoinMultiplayerScreen screen`
- `private final Minecraft minecraft`
- `private final ServerData serverData`
- `private final FaviconTexture icon`
- `@Nullable private byte[] lastIconBytes`
- `private long lastClickTime`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_281406_,  int p_281506_,  int p_282921_,  int p_281363_,  int p_283596_,  int p_281630_,  int p_283567_,  int p_282864_,  boolean p_282999_,  float p_281423_)`
- `private boolean pingCompleted()`
- `private boolean isCompatible()`
- `public void updateServerList()`
- `protected void drawIcon(GuiGraphics p_281338_,  int p_283001_,  int p_282834_,  ResourceLocation p_282534_)`
- `private boolean canJoin()`
- `private boolean uploadServerIcon(@Nullable  byte[] p_273176_)`
- `public boolean keyPressed(int p_99875_,  int p_99876_,  int p_99877_)`
- `private void swap(int p_99872_,  int p_99873_)`
- `public boolean mouseClicked(double p_99868_,  double p_99869_,  int p_99870_)`
- `public ServerData getServerData()`
- `public Component getNarration()`
- `public void close()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyReleased`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## WarningScreen

*class* `net.minecraft.client.gui.screens.multiplayer.WarningScreen`

### Fields
- `private final Component content`
- `@Nullable private final Component check`
- `private final Component narration`
- `@Nullable protected Checkbox stopShowing`
- `private MultiLineLabel message`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected abstract void initButtons(int p_210922_)`
- `protected void init()`
- `public Component getNarrationMessage()`
- `public void render(GuiGraphics p_282073_,  int p_283174_,  int p_282617_,  float p_282654_)`
- `protected void renderTitle(GuiGraphics p_281725_)`
- `protected int getLineHeight()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`
