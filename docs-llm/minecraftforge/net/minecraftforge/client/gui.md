# net.minecraftforge.client.gui

- [Class ModListScreen.SortType](#class-modlistscreen.sorttype)
- [ClientTooltipComponentManager](#clienttooltipcomponentmanager)
- [CreativeTabsScreenPage](#creativetabsscreenpage)
- [LoadingErrorScreen](#loadingerrorscreen)
- [LoadingErrorScreen.LoadingEntryList](#loadingerrorscreen.loadingentrylist)
- [LoadingErrorScreen.LoadingEntryList.LoadingMessageEntry](#loadingerrorscreen.loadingentrylist.loadingmessageentry)
- [ModListScreen](#modlistscreen)
- [ModListScreen.InfoPanel](#modlistscreen.infopanel)
- [ModMismatchDisconnectedScreen](#modmismatchdisconnectedscreen)
- [ModMismatchDisconnectedScreen.MismatchInfoPanel](#modmismatchdisconnectedscreen.mismatchinfopanel)
- [ScreenUtils](#screenutils)
- [TitleScreenModUpdateIndicator](#titlescreenmodupdateindicator)
## Class ModListScreen.SortType

*enum* `net.minecraftforge.client.gui.Class ModListScreen.SortType`

Enclosing class: ModListScreen

### Fields
- `Button button`

### Methods
- `public static ModListScreen.SortType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ModListScreen.SortType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `protected int compare(String name1,  String name2)`
- `public int compare(net.minecraftforge.forgespi.language.IModInfo o1,  net.minecraftforge.forgespi.language.IModInfo o2)`
- `Component getButtonText()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `java.util.Comparator`: `equals`, `reversed`, `thenComparing`, `thenComparing`, `thenComparing`, `thenComparingDouble`, `thenComparingInt`, `thenComparingLong`

## ClientTooltipComponentManager

*class* `net.minecraftforge.client.gui.ClientTooltipComponentManager`

Manager for ClientTooltipComponent factories.

 Provides a lookup.

### Fields
- `private static com.google.common.collect.ImmutableMap<Class<? extends TooltipComponent>,Function<TooltipComponent,ClientTooltipComponent>> FACTORIES`

### Methods
- `@Nullable public static @Nullable ClientTooltipComponent createClientTooltipComponent(TooltipComponent component)`
  Creates a client component for the given argument, or null if unsupported.
- `@Internal public static void init()`

## CreativeTabsScreenPage

*class* `net.minecraftforge.client.gui.CreativeTabsScreenPage`

### Fields
- `private final List<CreativeModeTab> tabs`
- `private final List<CreativeModeTab> topTabs`
- `private final List<CreativeModeTab> bottomTabs`
- `private final List<CreativeModeTab> visibleTabs`

### Methods
- `public List<CreativeModeTab> getVisibleTabs()`
- `public boolean isTop(CreativeModeTab tab)`
- `public int getColumn(CreativeModeTab tab)`
- `public CreativeModeTab getDefaultTab()`

## LoadingErrorScreen

*class* `net.minecraftforge.client.gui.LoadingErrorScreen`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private final Path modsDir`
- `private final Path logFile`
- `private final List<ModLoadingException> modLoadErrors`
- `private final List<ModLoadingWarning> modLoadWarnings`
- `private final Path dumpedLocation`
- `private LoadingErrorScreen.LoadingEntryList entryList`
- `private Component errorHeader`
- `private Component warningHeader`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `public void render(GuiGraphics guiGraphics,  int mouseX,  int mouseY,  float partialTick)`
- `private void drawMultiLineCenteredString(GuiGraphics guiGraphics,  Font fr,  Component str,  int x,  int y)`

### Inherited methods
- from `net.minecraft.client.gui.screens.ErrorScreen`: `renderBackground`, `shouldCloseOnEsc`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## LoadingErrorScreen.LoadingEntryList

*class* `net.minecraftforge.client.gui.LoadingErrorScreen.LoadingEntryList`

Enclosing class: LoadingErrorScreen

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected int getScrollbarPosition()`
- `public int getRowWidth()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getScrollAmount`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `replaceEntries`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `setSelected`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## LoadingErrorScreen.LoadingEntryList.LoadingMessageEntry

*class* `net.minecraftforge.client.gui.LoadingErrorScreen.LoadingEntryList.LoadingMessageEntry`

Enclosing class: LoadingErrorScreen.LoadingEntryList

### Fields
- `private final Component message`
- `private final boolean center`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public Component getNarration()`
- `public void render(GuiGraphics guiGraphics,  int entryIdx,  int top,  int left,  int entryWidth,  int entryHeight,  int mouseX,  int mouseY,  boolean p_194999_5_,  float partialTick)`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseClicked`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ModListScreen

*class* `net.minecraftforge.client.gui.ModListScreen`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final int PADDING` (= 6)
- `private Screen parentScreen`
- `private ModListWidget modList`
- `private ModListScreen.InfoPanel modInfo`
- `private ModListWidget.ModEntry selected`
- `private int listWidth`
- `private List<net.minecraftforge.forgespi.language.IModInfo> mods`
- `private final List<net.minecraftforge.forgespi.language.IModInfo> unsortedMods`
- `private Button configButton`
- `private Button openModsFolderButton`
- `private Button doneButton`
- `private int buttonMargin`
- `private int numButtons`
- `private String lastFilterText`
- `private EditBox search`
- `private boolean sorted`
- `private ModListScreen.SortType sortType`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private static String stripControlCodes(String value)`
- `public void init()`
- `private void displayModConfig()`
- `public void tick()`
- `public <T extends ObjectSelectionList.Entry<T>> void buildModList(Consumer<T> modListViewConsumer,  Function<net.minecraftforge.forgespi.language.IModInfo,T> newEntry)`
- `private void reloadMods()`
- `private void resortMods(ModListScreen.SortType newSort)`
- `public void render(GuiGraphics guiGraphics,  int mouseX,  int mouseY,  float partialTick)`
- `public Minecraft getMinecraftInstance()`
- `public Font getFontRenderer()`
- `public void setSelected(ModListWidget.ModEntry entry)`
- `private void updateCache()`
- `public void resize(Minecraft mc,  int width,  int height)`
- `public void onClose()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ModListScreen.InfoPanel

*class* `net.minecraftforge.client.gui.ModListScreen.InfoPanel`

Enclosing class: ModListScreen

### Fields
- `private ResourceLocation logoPath`
- `private Size2i logoDims`
- `private List<FormattedCharSequence> lines`

### Inherited fields
- from `net.minecraftforge.client.gui.widget.ScrollPanel`: `border`, `bottom`, `captureMouse`, `height`, `left`, `right`, `scrollDistance`, `top`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `void setInfo(List<String> lines,  ResourceLocation logoPath,  Size2i logoDims)`
- `void clearInfo()`
- `private List<FormattedCharSequence> resizeContent(List<String> lines)`
- `public int getContentHeight()`
- `protected int getScrollAmount()`
- `protected void drawPanel(GuiGraphics guiGraphics,  int entryRight,  int relativeY,  Tesselator tess,  int mouseX,  int mouseY)`
  Description copied from class: ScrollPanel
  Draw anything special on the screen. Scissor (RenderSystem.enableScissor) is enabled
   for anything that is rendered outside the view box. Do not mess with Scissor unless you support this.
- `private Style findTextLine(int mouseX,  int mouseY)`
- `public boolean mouseClicked(double mouseX,  double mouseY,  int button)`
- `public NarratableEntry.NarrationPriority narrationPriority()`
- `public void updateNarration(NarrationElementOutput p_169152_)`

### Inherited methods
- from `net.minecraftforge.client.gui.widget.ScrollPanel`: `children`, `clickPanel`, `drawBackground`, `drawGradientRect`, `isMouseOver`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `render`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getRectangle`, `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ModMismatchDisconnectedScreen

*class* `net.minecraftforge.client.gui.ModMismatchDisconnectedScreen`

### Fields
- `private final Component reason`
- `private MultiLineLabel message`
- `private final Screen parent`
- `private int textHeight`
- `private final Path modsDir`
- `private final Path logFile`
- `private final int listHeight`
- `private final NetworkContext.NetworkMismatchData data`
- `private final boolean hasMismatches`
- `private final List<String> allModIds`
- `private final Map<String,String> presentModUrls`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void render(GuiGraphics guiGraphics,  int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ModMismatchDisconnectedScreen.MismatchInfoPanel

*class* `net.minecraftforge.client.gui.ModMismatchDisconnectedScreen.MismatchInfoPanel`

Enclosing class: ModMismatchDisconnectedScreen

### Fields
- `private final List<org.apache.commons.lang3.tuple.Pair<FormattedCharSequence,org.apache.commons.lang3.tuple.Pair<FormattedCharSequence,FormattedCharSequence>>> lineTable`
- `private final int contentSize`
- `private final int nameIndent` (= 10)
- `private final int tableWidth`
- `private final int nameWidth`
- `private final int versionWidth`

### Inherited fields
- from `net.minecraftforge.client.gui.widget.ScrollPanel`: `border`, `bottom`, `captureMouse`, `height`, `left`, `right`, `scrollDistance`, `top`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private List<org.apache.commons.lang3.tuple.Pair<FormattedCharSequence,org.apache.commons.lang3.tuple.Pair<FormattedCharSequence,FormattedCharSequence>>> splitLineToWidth(MutableComponent name,  org.apache.commons.lang3.tuple.Pair<String,String> versions)`
  Splits the raw name and version strings, making them use multiple lines if needed, to fit within the table dimensions.
   The style assigned to the name element is then applied to the entire content row.
  - param: name - The first element of the content row, usually representing a table section header or the name of a mod entry
  - param: versions - The last two elements of the content row, usually representing the mod versions. If either one or both of them are not given, the first element may take up more space within the table.
  - returns: A list of table rows consisting of 3 elements each which consist of the same content as was given by the parameters, but split up to fit within the table dimensions.
- `private MutableComponent toModNameComponent(ResourceLocation id,  String modName,  int color)`
  Adds a style information to the given mod name string. The style assigned to the returned component contains the color of the mod name,
   a hover event containing the given id, and an optional click event, which opens the homepage of mod, if present.
  - param: id - An id that gets displayed in the hover event. Depending on the origin it may only consist of a namespace (the mod id) or a namespace + path (a channel id associated with the mod).
  - param: modName - The name of the mod. It will be rendered as the main text component.
  - param: color - Defines the color of the returned style information. An odd number will result in a yellow, an even one in a gold color. This color variation makes it easier for users to distinguish different mod entries.
  - returns: A component with the mod name as the main text component, and an assigned style which will be used for the whole content row.
- `protected int getContentHeight()`
- `protected void drawPanel(GuiGraphics guiGraphics,  int entryRight,  int relativeY,  Tesselator tess,  int mouseX,  int mouseY)`
  Description copied from class: ScrollPanel
  Draw anything special on the screen. Scissor (RenderSystem.enableScissor) is enabled
   for anything that is rendered outside the view box. Do not mess with Scissor unless you support this.
- `public void render(GuiGraphics guiGraphics,  int mouseX,  int mouseY,  float partialTicks)`
- `public Style getComponentStyleAt(double x,  double y)`
- `public boolean mouseClicked(double mouseX,  double mouseY,  int button)`
- `public NarratableEntry.NarrationPriority narrationPriority()`
- `public void updateNarration(NarrationElementOutput output)`

### Inherited methods
- from `net.minecraftforge.client.gui.widget.ScrollPanel`: `children`, `clickPanel`, `drawBackground`, `drawGradientRect`, `getScrollAmount`, `isMouseOver`, `mouseDragged`, `mouseReleased`, `mouseScrolled`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getRectangle`, `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ScreenUtils

*class* `net.minecraftforge.client.gui.ScreenUtils`

This class provides several methods and constants used by the Config GUI classes.

### Fields
- `public static final int DEFAULT_BACKGROUND_COLOR` (= -267386864, deprecated)
- `public static final int DEFAULT_BORDER_COLOR_START` (= 1347420415, deprecated)
- `public static final int DEFAULT_BORDER_COLOR_END` (= 1344798847, deprecated)
- `public static final String UNDO_CHAR` (= "\u21b6", deprecated)
- `public static final String RESET_CHAR` (= "\u2604", deprecated)
- `public static final String VALID` (= "\u2714", deprecated)
- `public static final String INVALID` (= "\u2715", deprecated)
- `public static int[] TEXT_COLOR_CODES` (deprecated)

### Methods
- `public static int getColorFromFormattingCharacter(char c,  boolean isLighter)` (deprecated)
- `public static void blitWithBorder(GuiGraphics guiGraphics,  int x,  int y,  int u,  int v,  int width,  int height,  int textureWidth,  int textureHeight,  int borderSize,  float zLevel)` (deprecated)
  Draws a textured box of any size (smallest size is borderSize * 2 square) based on a fixed size textured box with continuous borders
   and filler. It is assumed that the desired texture ResourceLocation object has been bound using
   Minecraft.getMinecraft().getTextureManager().bindTexture(resourceLocation).
  - param: guiGraphics - the gui graphics
  - param: x - x axis offset
  - param: y - y axis offset
  - param: u - bound resource location image x offset
  - param: v - bound resource location image y offset
  - param: width - the desired box width
  - param: height - the desired box height
  - param: textureWidth - the width of the box texture in the resource location image
  - param: textureHeight - the height of the box texture in the resource location image
  - param: borderSize - the size of the box's borders
  - param: zLevel - the zLevel to draw at
- `public static void blitWithBorder(GuiGraphics guiGraphics,  ResourceLocation res,  int x,  int y,  int u,  int v,  int width,  int height,  int textureWidth,  int textureHeight,  int borderSize,  float zLevel)` (deprecated)
  Draws a textured box of any size (smallest size is borderSize * 2 square) based on a fixed size textured box with continuous borders
   and filler. The provided ResourceLocation object will be bound using
   Minecraft.getMinecraft().getTextureManager().bindTexture(resourceLocation).
  - param: guiGraphics - the gui graphics
  - param: res - the ResourceLocation object that contains the desired image
  - param: x - x axis offset
  - param: y - y axis offset
  - param: u - bound resource location image x offset
  - param: v - bound resource location image y offset
  - param: width - the desired box width
  - param: height - the desired box height
  - param: textureWidth - the width of the box texture in the resource location image
  - param: textureHeight - the height of the box texture in the resource location image
  - param: borderSize - the size of the box's borders
  - param: zLevel - the zLevel to draw at
- `public static void blitWithBorder(GuiGraphics guiGraphics,  ResourceLocation res,  int x,  int y,  int u,  int v,  int width,  int height,  int textureWidth,  int textureHeight,  int topBorder,  int bottomBorder,  int leftBorder,  int rightBorder,  float zLevel)` (deprecated)
  Draws a textured box of any size (smallest size is borderSize * 2 square) based on a fixed size textured box with continuous borders
   and filler. The provided ResourceLocation object will be bound using
   Minecraft.getMinecraft().getTextureManager().bindTexture(resourceLocation).
  - param: guiGraphics - the gui graphics
  - param: res - the ResourceLocation object that contains the desired image
  - param: x - x axis offset
  - param: y - y axis offset
  - param: u - bound resource location image x offset
  - param: v - bound resource location image y offset
  - param: width - the desired box width
  - param: height - the desired box height
  - param: textureWidth - the width of the box texture in the resource location image
  - param: textureHeight - the height of the box texture in the resource location image
  - param: topBorder - the size of the box's top border
  - param: bottomBorder - the size of the box's bottom border
  - param: leftBorder - the size of the box's left border
  - param: rightBorder - the size of the box's right border
  - param: zLevel - the zLevel to draw at
- `public static void blitWithBorder(GuiGraphics guiGraphics,  int x,  int y,  int u,  int v,  int width,  int height,  int textureWidth,  int textureHeight,  int topBorder,  int bottomBorder,  int leftBorder,  int rightBorder,  float zLevel)` (deprecated)
  Draws a textured box of any size (smallest size is borderSize * 2 square) based on a fixed size textured box with continuous borders
   and filler. It is assumed that the desired texture ResourceLocation object has been bound using
   Minecraft.getMinecraft().getTextureManager().bindTexture(resourceLocation).
  - param: guiGraphics - the gui graphics
  - param: x - x axis offset
  - param: y - y axis offset
  - param: u - bound resource location image x offset
  - param: v - bound resource location image y offset
  - param: width - the desired box width
  - param: height - the desired box height
  - param: textureWidth - the width of the box texture in the resource location image
  - param: textureHeight - the height of the box texture in the resource location image
  - param: topBorder - the size of the box's top border
  - param: bottomBorder - the size of the box's bottom border
  - param: leftBorder - the size of the box's left border
  - param: rightBorder - the size of the box's right border
  - param: zLevel - the zLevel to draw at
- `@Deprecated(forRemoval=true) public static void drawTexturedModalRect(GuiGraphics guiGraphics,  int x,  int y,  int u,  int v,  int width,  int height,  float zLevel)` (deprecated)
- `@Deprecated(forRemoval=true) public static void drawGradientRect(org.joml.Matrix4f mat,  int zLevel,  int left,  int top,  int right,  int bottom,  int startColor,  int endColor)` (deprecated)
- `public static void blitInscribed(GuiGraphics guiGraphics,  ResourceLocation texture,  int x,  int y,  int boundsWidth,  int boundsHeight,  int rectWidth,  int rectHeight)` (deprecated)
- `public static void blitInscribed(GuiGraphics guiGraphics,  ResourceLocation texture,  int x,  int y,  int boundsWidth,  int boundsHeight,  int rectWidth,  int rectHeight,  boolean centerX,  boolean centerY)` (deprecated)

## TitleScreenModUpdateIndicator

*class* `net.minecraftforge.client.gui.TitleScreenModUpdateIndicator`

### Fields
- `private static final ResourceLocation VERSION_CHECK_ICONS`
- `private final Button modButton`
- `private VersionChecker.Status showNotification`
- `private boolean hasCheckedForUpdates`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `public void render(GuiGraphics guiGraphics,  int mouseX,  int mouseY,  float partialTick)`
- `public static TitleScreenModUpdateIndicator init(TitleScreen guiMainMenu,  Button modButton)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`
