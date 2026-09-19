# net.minecraft.client.gui.screens.debug

- [Class GameModeSwitcherScreen.GameModeIcon](#class-gamemodeswitcherscreen.gamemodeicon)
- [GameModeSwitcherScreen](#gamemodeswitcherscreen)
- [GameModeSwitcherScreen.GameModeSlot](#gamemodeswitcherscreen.gamemodeslot)
## Class GameModeSwitcherScreen.GameModeIcon

*enum* `net.minecraft.client.gui.screens.debug.Class GameModeSwitcherScreen.GameModeIcon`

Enclosing class: GameModeSwitcherScreen

### Fields
- `protected static final GameModeSwitcherScreen.GameModeIcon[] VALUES`
- `private static final int ICON_AREA`
- `protected static final int ICON_TOP_LEFT`
- `final Component name`
- `final String command`
- `final ItemStack renderStack`

### Methods
- `public static GameModeSwitcherScreen.GameModeIcon[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static GameModeSwitcherScreen.GameModeIcon valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `void drawIcon(GuiGraphics p_282609_,  int p_283301_,  int p_281692_)`
- `Component getName()`
- `String getCommand()`
- `GameModeSwitcherScreen.GameModeIcon getNext()`
- `static GameModeSwitcherScreen.GameModeIcon getFromGameType(GameType p_283307_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## GameModeSwitcherScreen

*class* `net.minecraft.client.gui.screens.debug.GameModeSwitcherScreen`

### Fields
- `static final ResourceLocation SLOT_SPRITE`
- `static final ResourceLocation SELECTION_SPRITE`
- `private static final ResourceLocation GAMEMODE_SWITCHER_LOCATION`
- `private static final int SPRITE_SHEET_WIDTH` (= 128)
- `private static final int SPRITE_SHEET_HEIGHT` (= 128)
- `private static final int SLOT_AREA` (= 26)
- `private static final int SLOT_PADDING` (= 5)
- `private static final int SLOT_AREA_PADDED` (= 31)
- `private static final int HELP_TIPS_OFFSET_Y` (= 5)
- `private static final int ALL_SLOTS_WIDTH`
- `private static final Component SELECT_KEY`
- `private final GameModeSwitcherScreen.GameModeIcon previousHovered`
- `private GameModeSwitcherScreen.GameModeIcon currentlyHovered`
- `private int firstMouseX`
- `private int firstMouseY`
- `private boolean setFirstMousePos`
- `private final List<GameModeSwitcherScreen.GameModeSlot> slots`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private GameType getDefaultSelected()`
- `protected void init()`
- `public void render(GuiGraphics p_281834_,  int p_283223_,  int p_282178_,  float p_281339_)`
- `public void renderBackground(GuiGraphics p_300820_,  int p_297775_,  int p_300982_,  float p_298921_)`
- `private void switchToHoveredGameMode()`
- `private static void switchToHoveredGameMode(Minecraft p_281340_,  GameModeSwitcherScreen.GameModeIcon p_281358_)`
- `private boolean checkToClose()`
- `public boolean keyPressed(int p_97553_,  int p_97554_,  int p_97555_)`
- `public boolean isPauseScreen()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## GameModeSwitcherScreen.GameModeSlot

*class* `net.minecraft.client.gui.screens.debug.GameModeSwitcherScreen.GameModeSlot`

Enclosing class: GameModeSwitcherScreen

### Fields
- `final GameModeSwitcherScreen.GameModeIcon icon`
- `private boolean isSelected`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void renderWidget(GuiGraphics p_281380_,  int p_283094_,  int p_283558_,  float p_282631_)`
- `public void updateWidgetNarration(NarrationElementOutput p_259120_)`
- `public boolean isHoveredOrFocused()`
- `public void setSelected(boolean p_97644_)`
- `private void drawSlot(GuiGraphics p_281786_)`
- `private void drawSelection(GuiGraphics p_281820_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onClick`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyPressed`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`
