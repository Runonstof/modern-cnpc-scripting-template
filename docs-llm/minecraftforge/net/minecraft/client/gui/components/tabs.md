# net.minecraft.client.gui.components.tabs

- [GridLayoutTab](#gridlayouttab)
- [Tab](#tab)
- [TabManager](#tabmanager)
- [TabNavigationBar](#tabnavigationbar)
- [TabNavigationBar.Builder](#tabnavigationbar.builder)
## GridLayoutTab

*class* `net.minecraft.client.gui.components.tabs.GridLayoutTab`

### Fields
- `private final Component title`
- `protected final GridLayout layout`

### Methods
- `public Component getTabTitle()`
- `public void visitChildren(Consumer<AbstractWidget> p_268098_)`
- `public void doLayout(ScreenRectangle p_268281_)`

## Tab

*interface* `net.minecraft.client.gui.components.tabs.Tab`

### Methods
- `Component getTabTitle()`
- `void visitChildren(Consumer<AbstractWidget> p_268213_)`
- `void doLayout(ScreenRectangle p_268081_)`

## TabManager

*class* `net.minecraft.client.gui.components.tabs.TabManager`

### Fields
- `private final Consumer<AbstractWidget> addWidget`
- `private final Consumer<AbstractWidget> removeWidget`
- `@Nullable private Tab currentTab`
- `@Nullable private ScreenRectangle tabArea`

### Methods
- `public void setTabArea(ScreenRectangle p_268042_)`
- `public void setCurrentTab(Tab p_276109_,  boolean p_276120_)`
- `@Nullable public Tab getCurrentTab()`

## TabNavigationBar

*class* `net.minecraft.client.gui.components.tabs.TabNavigationBar`

### Fields
- `private static final int NO_TAB` (= -1)
- `private static final int MAX_WIDTH` (= 400)
- `private static final int HEIGHT` (= 24)
- `private static final int MARGIN` (= 14)
- `private static final Component USAGE_NARRATION`
- `private final GridLayout layout`
- `private int width`
- `private final TabManager tabManager`
- `private final com.google.common.collect.ImmutableList<Tab> tabs`
- `private final com.google.common.collect.ImmutableList<TabButton> tabButtons`

### Inherited fields
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public static TabNavigationBar.Builder builder(TabManager p_268126_,  int p_268070_)`
- `public void setWidth(int p_268094_)`
- `public void setFocused(boolean p_275488_)`
- `public void setFocused(@Nullable  GuiEventListener p_275675_)`
- `@Nullable public ComponentPath nextFocusPath(FocusNavigationEvent p_275418_)`
- `public List<? extends GuiEventListener> children()`
- `public NarratableEntry.NarrationPriority narrationPriority()`
- `public void updateNarration(NarrationElementOutput p_275583_)`
- `protected void narrateListElementPosition(NarrationElementOutput p_275386_,  TabButton p_275397_)`
- `public void render(GuiGraphics p_281720_,  int p_282085_,  int p_281687_,  float p_283048_)`
- `public ScreenRectangle getRectangle()`
- `public void arrangeElements()`
- `public void selectTab(int p_276107_,  boolean p_276125_)`
- `public boolean keyPressed(int p_270495_)`
- `private int getNextTabIndex(int p_270508_)`
- `private int currentTabIndex()`
- `@Nullable private TabButton currentTabButton()`

### Inherited methods
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `isMouseOver`, `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## TabNavigationBar.Builder

*class* `net.minecraft.client.gui.components.tabs.TabNavigationBar.Builder`

Enclosing class: TabNavigationBar

### Fields
- `private final int width`
- `private final TabManager tabManager`
- `private final List<Tab> tabs`

### Methods
- `public TabNavigationBar.Builder addTabs(Tab... p_268144_)`
- `public TabNavigationBar build()`
