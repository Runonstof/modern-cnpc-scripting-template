# net.minecraft.client.gui.components.events

- [AbstractContainerEventHandler](#abstractcontainereventhandler)
- [ContainerEventHandler](#containereventhandler)
- [GuiEventListener](#guieventlistener)
## AbstractContainerEventHandler

*class* `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`

### Fields
- `@Nullable private GuiEventListener focused`
- `private boolean isDragging`

### Inherited fields
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public final boolean isDragging()`
- `public final void setDragging(boolean p_94681_)`
- `@Nullable public GuiEventListener getFocused()`
- `public void setFocused(@Nullable  GuiEventListener p_94677_)`

### Inherited methods
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `children`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getRectangle`, `isMouseOver`, `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ContainerEventHandler

*interface* `net.minecraft.client.gui.components.events.ContainerEventHandler`

All Superinterfaces: GuiEventListener, TabOrderedElement

### Inherited fields
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `List<? extends GuiEventListener> children()`
- `default Optional<GuiEventListener> getChildAt(double p_94730_,  double p_94731_)`
- `default boolean mouseClicked(double p_94695_,  double p_94696_,  int p_94697_)`
- `default boolean mouseReleased(double p_94722_,  double p_94723_,  int p_94724_)`
- `default boolean mouseDragged(double p_94699_,  double p_94700_,  int p_94701_,  double p_94702_,  double p_94703_)`
- `boolean isDragging()`
- `void setDragging(boolean p_94720_)`
- `default boolean mouseScrolled(double p_94686_,  double p_94687_,  double p_94688_,  double p_299502_)`
- `default boolean keyPressed(int p_94710_,  int p_94711_,  int p_94712_)`
- `default boolean keyReleased(int p_94715_,  int p_94716_,  int p_94717_)`
- `default boolean charTyped(char p_94683_,  int p_94684_)`
- `@Nullable GuiEventListener getFocused()`
- `void setFocused(@Nullable  GuiEventListener p_94713_)`
- `default void setFocused(boolean p_265504_)`
- `default boolean isFocused()`
- `@Nullable default ComponentPath getCurrentFocusPath()`
- `default void magicalSpecialHackyFocus(@Nullable  GuiEventListener p_94726_)`
- `@Nullable default ComponentPath nextFocusPath(FocusNavigationEvent p_265668_)`
- `@Nullable private ComponentPath handleTabNavigation(FocusNavigationEvent.TabNavigation p_265354_)`
- `@Nullable private ComponentPath handleArrowNavigation(FocusNavigationEvent.ArrowNavigation p_265760_)`
- `@Nullable private ComponentPath nextFocusPathInDirection(ScreenRectangle p_265054_,  ScreenDirection p_265167_,  @Nullable  GuiEventListener p_265476_,  FocusNavigationEvent p_265762_)`
- `@Nullable private ComponentPath nextFocusPathVaguelyInDirection(ScreenRectangle p_265390_,  ScreenDirection p_265687_,  @Nullable  GuiEventListener p_265498_,  FocusNavigationEvent p_265048_)`

### Inherited methods
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getRectangle`, `isMouseOver`, `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## GuiEventListener

*interface* `net.minecraft.client.gui.components.events.GuiEventListener`

All Superinterfaces: TabOrderedElement

### Fields
- `static final long DOUBLE_CLICK_THRESHOLD_MS` (= 250L)

### Methods
- `default void mouseMoved(double p_94758_,  double p_94759_)`
- `default boolean mouseClicked(double p_94737_,  double p_94738_,  int p_94739_)`
- `default boolean mouseReleased(double p_94753_,  double p_94754_,  int p_94755_)`
- `default boolean mouseDragged(double p_94740_,  double p_94741_,  int p_94742_,  double p_94743_,  double p_94744_)`
- `default boolean mouseScrolled(double p_94734_,  double p_94735_,  double p_94736_,  double p_299312_)`
- `default boolean keyPressed(int p_94745_,  int p_94746_,  int p_94747_)`
- `default boolean keyReleased(int p_94750_,  int p_94751_,  int p_94752_)`
- `default boolean charTyped(char p_94732_,  int p_94733_)`
- `@Nullable default ComponentPath nextFocusPath(FocusNavigationEvent p_265234_)`
- `default boolean isMouseOver(double p_94748_,  double p_94749_)`
- `void setFocused(boolean p_265728_)`
- `boolean isFocused()`
- `@Nullable default ComponentPath getCurrentFocusPath()`
- `default ScreenRectangle getRectangle()`

### Inherited methods
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`
