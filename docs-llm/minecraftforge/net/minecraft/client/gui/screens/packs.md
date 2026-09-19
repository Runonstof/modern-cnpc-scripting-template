# net.minecraft.client.gui.screens.packs

- [PackSelectionModel](#packselectionmodel)
- [PackSelectionModel.Entry](#packselectionmodel.entry)
- [PackSelectionModel.EntryBase](#packselectionmodel.entrybase)
- [PackSelectionModel.SelectedPackEntry](#packselectionmodel.selectedpackentry)
- [PackSelectionModel.UnselectedPackEntry](#packselectionmodel.unselectedpackentry)
- [PackSelectionScreen](#packselectionscreen)
- [PackSelectionScreen.Watcher](#packselectionscreen.watcher)
- [TransferableSelectionList](#transferableselectionlist)
- [TransferableSelectionList.PackEntry](#transferableselectionlist.packentry)
## PackSelectionModel

*class* `net.minecraft.client.gui.screens.packs.PackSelectionModel`

### Fields
- `private final PackRepository repository`
- `final List<Pack> selected`
- `final List<Pack> unselected`
- `final Function<Pack,ResourceLocation> iconGetter`
- `final Runnable onListChanged`
- `private final Consumer<PackRepository> output`

### Methods
- `public Stream<PackSelectionModel.Entry> getUnselected()`
- `public Stream<PackSelectionModel.Entry> getSelected()`
- `void updateRepoSelectedList()`
- `public void commit()`
- `public void findNewPacks()`

## PackSelectionModel.Entry

*interface* `net.minecraft.client.gui.screens.packs.PackSelectionModel.Entry`

Enclosing class: PackSelectionModel

### Methods
- `ResourceLocation getIconTexture()`
- `PackCompatibility getCompatibility()`
- `String getId()`
- `Component getTitle()`
- `Component getDescription()`
- `PackSource getPackSource()`
- `default Component getExtendedDescription()`
- `boolean isFixedPosition()`
- `boolean isRequired()`
- `void select()`
- `void unselect()`
- `void moveUp()`
- `void moveDown()`
- `boolean isSelected()`
- `default boolean canSelect()`
- `default boolean canUnselect()`
- `boolean canMoveUp()`
- `boolean canMoveDown()`
- `default boolean notHidden()`

## PackSelectionModel.EntryBase

*class* `net.minecraft.client.gui.screens.packs.PackSelectionModel.EntryBase`

Enclosing class: PackSelectionModel

### Fields
- `private final Pack pack`

### Methods
- `protected abstract List<Pack> getSelfList()`
- `protected abstract List<Pack> getOtherList()`
- `public ResourceLocation getIconTexture()`
- `public PackCompatibility getCompatibility()`
- `public String getId()`
- `public Component getTitle()`
- `public Component getDescription()`
- `public PackSource getPackSource()`
- `public boolean isFixedPosition()`
- `public boolean isRequired()`
- `protected void toggleSelection()`
- `private void updateHighContrastOptionInstance()`
- `protected void move(int p_99939_)`
- `public boolean canMoveUp()`
- `public void moveUp()`
- `public boolean canMoveDown()`
- `public void moveDown()`
- `public boolean notHidden()`

### Inherited methods
- from `net.minecraft.client.gui.screens.packs.PackSelectionModel.Entry`: `canSelect`, `canUnselect`, `getExtendedDescription`, `isSelected`, `select`, `unselect`

## PackSelectionModel.SelectedPackEntry

*class* `net.minecraft.client.gui.screens.packs.PackSelectionModel.SelectedPackEntry`

Enclosing class: PackSelectionModel

### Methods
- `protected List<Pack> getSelfList()`
- `protected List<Pack> getOtherList()`
- `public boolean isSelected()`
- `public void select()`
- `public void unselect()`

### Inherited methods
- from `net.minecraft.client.gui.screens.packs.PackSelectionModel.EntryBase`: `canMoveDown`, `canMoveUp`, `getCompatibility`, `getDescription`, `getIconTexture`, `getId`, `getPackSource`, `getTitle`, `isFixedPosition`, `isRequired`, `move`, `moveDown`, `moveUp`, `notHidden`, `toggleSelection`
- from `net.minecraft.client.gui.screens.packs.PackSelectionModel.Entry`: `canSelect`, `canUnselect`, `getExtendedDescription`

## PackSelectionModel.UnselectedPackEntry

*class* `net.minecraft.client.gui.screens.packs.PackSelectionModel.UnselectedPackEntry`

Enclosing class: PackSelectionModel

### Methods
- `protected List<Pack> getSelfList()`
- `protected List<Pack> getOtherList()`
- `public boolean isSelected()`
- `public void select()`
- `public void unselect()`

### Inherited methods
- from `net.minecraft.client.gui.screens.packs.PackSelectionModel.EntryBase`: `canMoveDown`, `canMoveUp`, `getCompatibility`, `getDescription`, `getIconTexture`, `getId`, `getPackSource`, `getTitle`, `isFixedPosition`, `isRequired`, `move`, `moveDown`, `moveUp`, `notHidden`, `toggleSelection`
- from `net.minecraft.client.gui.screens.packs.PackSelectionModel.Entry`: `canSelect`, `canUnselect`, `getExtendedDescription`

## PackSelectionScreen

*class* `net.minecraft.client.gui.screens.packs.PackSelectionScreen`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `private static final int LIST_WIDTH` (= 200)
- `private static final Component DRAG_AND_DROP`
- `private static final Component DIRECTORY_BUTTON_TOOLTIP`
- `private static final int RELOAD_COOLDOWN` (= 20)
- `private static final ResourceLocation DEFAULT_ICON`
- `private final PackSelectionModel model`
- `@Nullable private PackSelectionScreen.Watcher watcher`
- `private long ticksToReload`
- `private TransferableSelectionList availablePackList`
- `private TransferableSelectionList selectedPackList`
- `private final Path packDir`
- `private Button doneButton`
- `private final Map<String,ResourceLocation> packIcons`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void onClose()`
- `private void closeWatcher()`
- `protected void init()`
- `public void tick()`
- `private void populateLists()`
- `private void updateList(TransferableSelectionList p_100014_,  Stream<PackSelectionModel.Entry> p_100015_)`
- `public void updateFocus(TransferableSelectionList p_265419_)`
- `public void clearSelected()`
- `private void reload()`
- `public void render(GuiGraphics p_281318_,  int p_99996_,  int p_99997_,  float p_99998_)`
- `public void renderBackground(GuiGraphics p_299682_,  int p_301154_,  int p_300727_,  float p_298616_)`
- `protected static void copyPacks(Minecraft p_100000_,  List<Path> p_100001_,  Path p_100002_)`
- `public void onFilesDrop(List<Path> p_100029_)`
- `private static Stream<String> extractPackNames(Collection<Path> p_300507_)`
- `private ResourceLocation loadPackIcon(TextureManager p_100017_,  Pack p_100018_)`
- `private ResourceLocation getPackIcon(Pack p_99990_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `rebuildWidgets`, `removed`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## PackSelectionScreen.Watcher

*class* `net.minecraft.client.gui.screens.packs.PackSelectionScreen.Watcher`

Enclosing class: PackSelectionScreen

### Fields
- `private final WatchService watcher`
- `private final Path packPath`

### Methods
- `@Nullable public static PackSelectionScreen.Watcher create(Path p_252119_)`
- `private void watchDir(Path p_100050_)  throws IOException`
  - throws: IOException
- `public boolean pollForChanges()  throws IOException`
  - throws: IOException
- `public void close()  throws IOException`
  - throws: IOException

## TransferableSelectionList

*class* `net.minecraft.client.gui.screens.packs.TransferableSelectionList`

### Fields
- `static final ResourceLocation SELECT_HIGHLIGHTED_SPRITE`
- `static final ResourceLocation SELECT_SPRITE`
- `static final ResourceLocation UNSELECT_HIGHLIGHTED_SPRITE`
- `static final ResourceLocation UNSELECT_SPRITE`
- `static final ResourceLocation MOVE_UP_HIGHLIGHTED_SPRITE`
- `static final ResourceLocation MOVE_UP_SPRITE`
- `static final ResourceLocation MOVE_DOWN_HIGHLIGHTED_SPRITE`
- `static final ResourceLocation MOVE_DOWN_SPRITE`
- `static final Component INCOMPATIBLE_TITLE`
- `static final Component INCOMPATIBLE_CONFIRM_TITLE`
- `private final Component title`
- `final PackSelectionScreen screen`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void renderHeader(GuiGraphics p_282135_,  int p_282032_,  int p_283198_)`
- `public int getRowWidth()`
- `protected int getScrollbarPosition()`
- `public boolean keyPressed(int p_265499_,  int p_265510_,  int p_265548_)`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getScrollAmount`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderItem`, `renderList`, `renderSelection`, `replaceEntries`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `setSelected`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## TransferableSelectionList.PackEntry

*class* `net.minecraft.client.gui.screens.packs.TransferableSelectionList.PackEntry`

Enclosing class: TransferableSelectionList

### Fields
- `private static final int MAX_DESCRIPTION_WIDTH_PIXELS` (= 157)
- `private static final int MAX_NAME_WIDTH_PIXELS` (= 157)
- `private static final String TOO_LONG_NAME_SUFFIX` (= "...")
- `private final TransferableSelectionList parent`
- `protected final Minecraft minecraft`
- `private final PackSelectionModel.Entry pack`
- `private final FormattedCharSequence nameDisplayCache`
- `private final MultiLineLabel descriptionDisplayCache`
- `private final FormattedCharSequence incompatibleNameDisplayCache`
- `private final MultiLineLabel incompatibleDescriptionDisplayCache`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private static FormattedCharSequence cacheName(Minecraft p_100105_,  Component p_100106_)`
- `private static MultiLineLabel cacheDescription(Minecraft p_100110_,  Component p_100111_)`
- `public Component getNarration()`
- `public void render(GuiGraphics p_281314_,  int p_283311_,  int p_281984_,  int p_282250_,  int p_281869_,  int p_283138_,  int p_282529_,  int p_282107_,  boolean p_282429_,  float p_282306_)`
- `public String getPackId()`
- `private boolean showHoverOverlay()`
- `public void keyboardSelection()`
- `void keyboardMoveUp()`
- `void keyboardMoveDown()`
- `private boolean handlePackSelection()`
- `public boolean mouseClicked(double p_100090_,  double p_100091_,  int p_100092_)`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`
