# net.minecraft.client.gui.screens.achievement

- [StatsScreen](#statsscreen)
- [StatsScreen.GeneralStatisticsList](#statsscreen.generalstatisticslist)
- [StatsScreen.GeneralStatisticsList.Entry](#statsscreen.generalstatisticslist.entry)
- [StatsScreen.ItemStatisticsList](#statsscreen.itemstatisticslist)
- [StatsScreen.ItemStatisticsList.ItemRow](#statsscreen.itemstatisticslist.itemrow)
- [StatsScreen.ItemStatisticsList.ItemRowComparator](#statsscreen.itemstatisticslist.itemrowcomparator)
- [StatsScreen.MobsStatisticsList](#statsscreen.mobsstatisticslist)
- [StatsScreen.MobsStatisticsList.MobRow](#statsscreen.mobsstatisticslist.mobrow)
- [StatsUpdateListener](#statsupdatelistener)
## StatsScreen

*class* `net.minecraft.client.gui.screens.achievement.StatsScreen`

### Fields
- `static final ResourceLocation SLOT_SPRITE`
- `static final ResourceLocation HEADER_SPRITE`
- `static final ResourceLocation SORT_UP_SPRITE`
- `static final ResourceLocation SORT_DOWN_SPRITE`
- `private static final Component PENDING_TEXT`
- `static final Component NO_VALUE_DISPLAY`
- `protected final Screen lastScreen`
- `private StatsScreen.GeneralStatisticsList statsList`
- `StatsScreen.ItemStatisticsList itemStatsList`
- `private StatsScreen.MobsStatisticsList mobsStatsList`
- `final StatsCounter stats`
- `@Nullable private ObjectSelectionList<?> activeList`
- `private boolean isLoading`
- `private static final int SLOT_BG_SIZE` (= 18)
- `private static final int SLOT_STAT_HEIGHT` (= 20)
- `private static final int SLOT_BG_X` (= 1)
- `private static final int SLOT_BG_Y` (= 1)
- `private static final int SLOT_FG_X` (= 2)
- `private static final int SLOT_FG_Y` (= 2)
- `private static final int SLOT_LEFT_INSERT` (= 40)
- `private static final int SLOT_TEXT_OFFSET` (= 5)
- `private static final int SORT_NONE` (= 0)
- `private static final int SORT_DOWN` (= -1)
- `private static final int SORT_UP` (= 1)

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`
- from `net.minecraft.client.gui.screens.achievement.StatsUpdateListener`: `LOADING_SYMBOLS`

### Methods
- `protected void init()`
- `public void initLists()`
- `public void initButtons()`
- `public void render(GuiGraphics p_281866_,  int p_96914_,  int p_96915_,  float p_96916_)`
- `public void renderBackground(GuiGraphics p_299638_,  int p_297645_,  int p_299202_,  float p_301378_)`
- `public void onStatsUpdated()`
- `public boolean isPauseScreen()`
- `@Nullable public ObjectSelectionList<?> getActiveList()`
- `public void setActiveList(@Nullable  ObjectSelectionList<?> p_96925_)`
- `static String getTranslationKey(Stat<ResourceLocation> p_96947_)`
- `int getColumnX(int p_96909_)`
- `void blitSlot(GuiGraphics p_282402_,  int p_283228_,  int p_283232_,  Item p_282368_)`
- `void blitSlotIcon(GuiGraphics p_281402_,  int p_283145_,  int p_283100_,  ResourceLocation p_299088_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## StatsScreen.GeneralStatisticsList

*class* `net.minecraft.client.gui.screens.achievement.StatsScreen.GeneralStatisticsList`

Enclosing class: StatsScreen

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getRowWidth`, `getScrollAmount`, `getScrollbarPosition`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `replaceEntries`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `setSelected`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## StatsScreen.GeneralStatisticsList.Entry

*class* `net.minecraft.client.gui.screens.achievement.StatsScreen.GeneralStatisticsList.Entry`

Enclosing class: StatsScreen.GeneralStatisticsList

### Fields
- `private final Stat<ResourceLocation> stat`
- `private final Component statDisplay`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private String getValueText()`
- `public void render(GuiGraphics p_283043_,  int p_97012_,  int p_97013_,  int p_97014_,  int p_97015_,  int p_97016_,  int p_97017_,  int p_97018_,  boolean p_97019_,  float p_97020_)`
- `public Component getNarration()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseClicked`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## StatsScreen.ItemStatisticsList

*class* `net.minecraft.client.gui.screens.achievement.StatsScreen.ItemStatisticsList`

Enclosing class: StatsScreen

### Fields
- `protected final List<StatType<Block>> blockColumns`
- `protected final List<StatType<Item>> itemColumns`
- `private final ResourceLocation[] iconSprites`
- `protected int headerPressed`
- `protected final Comparator<StatsScreen.ItemStatisticsList.ItemRow> itemStatSorter`
- `@Nullable protected StatType<?> sortColumn`
- `protected int sortOrder`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void renderHeader(GuiGraphics p_282214_,  int p_97050_,  int p_97051_)`
- `public int getRowWidth()`
- `protected int getScrollbarPosition()`
- `protected void clickedHeader(int p_97036_,  int p_97037_)`
- `private StatType<?> getColumn(int p_97034_)`
- `private int getColumnIndex(StatType<?> p_97059_)`
- `protected void renderDecorations(GuiGraphics p_283203_,  int p_97046_,  int p_97047_)`
- `protected Component getString(Item p_97041_)`
- `protected void sortByColumn(StatType<?> p_97039_)`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getScrollAmount`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderItem`, `renderList`, `renderSelection`, `replaceEntries`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `setSelected`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## StatsScreen.ItemStatisticsList.ItemRow

*class* `net.minecraft.client.gui.screens.achievement.StatsScreen.ItemStatisticsList.ItemRow`

Enclosing class: StatsScreen.ItemStatisticsList

### Fields
- `private final Item item`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public Item getItem()`
- `public void render(GuiGraphics p_283614_,  int p_97082_,  int p_97083_,  int p_97084_,  int p_97085_,  int p_97086_,  int p_97087_,  int p_97088_,  boolean p_97089_,  float p_97090_)`
- `protected void renderStat(GuiGraphics p_282544_,  @Nullable  Stat<?> p_97093_,  int p_97094_,  int p_97095_,  boolean p_97096_)`
- `public Component getNarration()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseClicked`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## StatsScreen.ItemStatisticsList.ItemRowComparator

*class* `net.minecraft.client.gui.screens.achievement.StatsScreen.ItemStatisticsList.ItemRowComparator`

Enclosing class: StatsScreen.ItemStatisticsList

### Methods
- `public int compare(StatsScreen.ItemStatisticsList.ItemRow p_169524_,  StatsScreen.ItemStatisticsList.ItemRow p_169525_)`

### Inherited methods
- from `java.util.Comparator`: `equals`, `reversed`, `thenComparing`, `thenComparing`, `thenComparing`, `thenComparingDouble`, `thenComparingInt`, `thenComparingLong`

## StatsScreen.MobsStatisticsList

*class* `net.minecraft.client.gui.screens.achievement.StatsScreen.MobsStatisticsList`

Enclosing class: StatsScreen

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getRowWidth`, `getScrollAmount`, `getScrollbarPosition`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `replaceEntries`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `setSelected`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## StatsScreen.MobsStatisticsList.MobRow

*class* `net.minecraft.client.gui.screens.achievement.StatsScreen.MobsStatisticsList.MobRow`

Enclosing class: StatsScreen.MobsStatisticsList

### Fields
- `private final Component mobName`
- `private final Component kills`
- `private final boolean hasKills`
- `private final Component killedBy`
- `private final boolean wasKilledBy`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_283265_,  int p_97115_,  int p_97116_,  int p_97117_,  int p_97118_,  int p_97119_,  int p_97120_,  int p_97121_,  boolean p_97122_,  float p_97123_)`
- `public Component getNarration()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseClicked`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## StatsUpdateListener

*interface* `net.minecraft.client.gui.screens.achievement.StatsUpdateListener`

### Fields
- `static final String[] LOADING_SYMBOLS`

### Methods
- `void onStatsUpdated()`
