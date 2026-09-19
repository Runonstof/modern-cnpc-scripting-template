# net.minecraft.client.gui.screens.advancements

- [AdvancementsScreen](#advancementsscreen)
- [AdvancementTab](#advancementtab)
- [AdvancementTabType.Sprites](#advancementtabtype.sprites)
- [AdvancementWidget](#advancementwidget)
- [Class AdvancementTabType](#class-advancementtabtype)
- [Class AdvancementWidgetType](#class-advancementwidgettype)
## AdvancementsScreen

*class* `net.minecraft.client.gui.screens.advancements.AdvancementsScreen`

### Fields
- `private static final ResourceLocation WINDOW_LOCATION`
- `public static final int WINDOW_WIDTH` (= 252)
- `public static final int WINDOW_HEIGHT` (= 140)
- `private static final int WINDOW_INSIDE_X` (= 9)
- `private static final int WINDOW_INSIDE_Y` (= 18)
- `public static final int WINDOW_INSIDE_WIDTH` (= 234)
- `public static final int WINDOW_INSIDE_HEIGHT` (= 113)
- `private static final int WINDOW_TITLE_X` (= 8)
- `private static final int WINDOW_TITLE_Y` (= 6)
- `public static final int BACKGROUND_TILE_WIDTH` (= 16)
- `public static final int BACKGROUND_TILE_HEIGHT` (= 16)
- `public static final int BACKGROUND_TILE_COUNT_X` (= 14)
- `public static final int BACKGROUND_TILE_COUNT_Y` (= 7)
- `private static final double SCROLL_SPEED` (= 16.0)
- `private static final Component VERY_SAD_LABEL`
- `private static final Component NO_ADVANCEMENTS_LABEL`
- `private static final Component TITLE`
- `private final ClientAdvancements advancements`
- `private final Map<AdvancementHolder,AdvancementTab> tabs`
- `@Nullable private AdvancementTab selectedTab`
- `private boolean isScrolling`
- `private static int tabPage`
- `private static int maxPages`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void removed()`
- `public boolean mouseClicked(double p_97343_,  double p_97344_,  int p_97345_)`
- `public boolean keyPressed(int p_97353_,  int p_97354_,  int p_97355_)`
- `public void render(GuiGraphics p_282589_,  int p_282255_,  int p_283354_,  float p_283123_)`
- `public boolean mouseDragged(double p_97347_,  double p_97348_,  int p_97349_,  double p_97350_,  double p_97351_)`
- `public boolean mouseScrolled(double p_300678_,  double p_297858_,  double p_301134_,  double p_300488_)`
- `private void renderInside(GuiGraphics p_282012_,  int p_97375_,  int p_97376_,  int p_97377_,  int p_97378_)`
- `public void renderWindow(GuiGraphics p_283395_,  int p_281890_,  int p_282532_)`
- `private void renderTooltips(GuiGraphics p_282784_,  int p_283556_,  int p_282458_,  int p_281519_,  int p_283371_)`
- `public void onAddAdvancementRoot(AdvancementNode p_300702_)`
- `public void onRemoveAdvancementRoot(AdvancementNode p_298890_)`
- `public void onAddAdvancementTask(AdvancementNode p_297934_)`
- `public void onRemoveAdvancementTask(AdvancementNode p_301169_)`
- `public void onUpdateAdvancementProgress(AdvancementNode p_300708_,  AdvancementProgress p_97369_)`
- `public void onSelectedTabChanged(@Nullable  AdvancementHolder p_297665_)`
- `public void onAdvancementsCleared()`
- `@Nullable public AdvancementWidget getAdvancementWidget(AdvancementNode p_298026_)`
- `@Nullable private AdvancementTab getTab(AdvancementNode p_300894_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseReleased`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## AdvancementTab

*class* `net.minecraft.client.gui.screens.advancements.AdvancementTab`

### Fields
- `private final Minecraft minecraft`
- `private final AdvancementsScreen screen`
- `private final AdvancementTabType type`
- `private final int index`
- `private final AdvancementNode rootNode`
- `private final DisplayInfo display`
- `private final ItemStack icon`
- `private final Component title`
- `private final AdvancementWidget root`
- `private final Map<AdvancementHolder,AdvancementWidget> widgets`
- `private double scrollX`
- `private double scrollY`
- `private int minX`
- `private int minY`
- `private int maxX`
- `private int maxY`
- `private float fade`
- `private boolean centered`
- `private int page`

### Methods
- `public int getPage()`
- `public AdvancementTabType getType()`
- `public int getIndex()`
- `public AdvancementNode getRootNode()`
- `public Component getTitle()`
- `public DisplayInfo getDisplay()`
- `public void drawTab(GuiGraphics p_282671_,  int p_282721_,  int p_282964_,  boolean p_283052_)`
- `public void drawIcon(GuiGraphics p_282895_,  int p_283419_,  int p_283293_)`
- `public void drawContents(GuiGraphics p_282728_,  int p_282962_,  int p_281511_)`
- `public void drawTooltips(GuiGraphics p_282892_,  int p_283658_,  int p_282602_,  int p_282652_,  int p_283595_)`
- `public boolean isMouseOver(int p_97155_,  int p_97156_,  double p_97157_,  double p_97158_)`
- `@Nullable public static AdvancementTab create(Minecraft p_97171_,  AdvancementsScreen p_97172_,  int p_97173_,  AdvancementNode p_299876_)`
- `public void scroll(double p_97152_,  double p_97153_)`
- `public void addAdvancement(AdvancementNode p_297831_)`
- `private void addWidget(AdvancementWidget p_97176_,  AdvancementHolder p_298201_)`
- `@Nullable public AdvancementWidget getWidget(AdvancementHolder p_300472_)`
- `public AdvancementsScreen getScreen()`

## AdvancementTabType.Sprites

*record* `net.minecraft.client.gui.screens.advancements.AdvancementTabType.Sprites`

Enclosing class: AdvancementTabType

### Fields
- `private final ResourceLocation first`
  The field for the first record component.
- `private final ResourceLocation middle`
  The field for the middle record component.
- `private final ResourceLocation last`
  The field for the last record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public ResourceLocation first()`
  Returns the value of the first record component.
  - returns: the value of the first record component
- `public ResourceLocation middle()`
  Returns the value of the middle record component.
  - returns: the value of the middle record component
- `public ResourceLocation last()`
  Returns the value of the last record component.
  - returns: the value of the last record component

## AdvancementWidget

*class* `net.minecraft.client.gui.screens.advancements.AdvancementWidget`

### Fields
- `private static final ResourceLocation TITLE_BOX_SPRITE`
- `private static final int HEIGHT` (= 26)
- `private static final int BOX_X` (= 0)
- `private static final int BOX_WIDTH` (= 200)
- `private static final int FRAME_WIDTH` (= 26)
- `private static final int ICON_X` (= 8)
- `private static final int ICON_Y` (= 5)
- `private static final int ICON_WIDTH` (= 26)
- `private static final int TITLE_PADDING_LEFT` (= 3)
- `private static final int TITLE_PADDING_RIGHT` (= 5)
- `private static final int TITLE_X` (= 32)
- `private static final int TITLE_Y` (= 9)
- `private static final int TITLE_MAX_WIDTH` (= 163)
- `private static final int[] TEST_SPLIT_OFFSETS`
- `private final AdvancementTab tab`
- `private final AdvancementNode advancementNode`
- `private final DisplayInfo display`
- `private final FormattedCharSequence title`
- `private final int width`
- `private final List<FormattedCharSequence> description`
- `private final Minecraft minecraft`
- `@Nullable private AdvancementWidget parent`
- `private final List<AdvancementWidget> children`
- `@Nullable private AdvancementProgress progress`
- `private final int x`
- `private final int y`

### Methods
- `private static float getMaxWidth(StringSplitter p_97304_,  List<FormattedText> p_97305_)`
- `private List<FormattedText> findOptimalLines(Component p_97309_,  int p_97310_)`
- `@Nullable private AdvancementWidget getFirstVisibleParent(AdvancementNode p_297515_)`
- `public void drawConnectivity(GuiGraphics p_281947_,  int p_97300_,  int p_97301_,  boolean p_97302_)`
- `public void draw(GuiGraphics p_281958_,  int p_281323_,  int p_283679_)`
- `public int getWidth()`
- `public void setProgress(AdvancementProgress p_97265_)`
- `public void addChild(AdvancementWidget p_97307_)`
- `public void drawHover(GuiGraphics p_283068_,  int p_281304_,  int p_281253_,  float p_281848_,  int p_282097_,  int p_281537_)`
- `public boolean isMouseOver(int p_97260_,  int p_97261_,  int p_97262_,  int p_97263_)`
- `public void attachToParent()`
- `public int getY()`
- `public int getX()`

## Class AdvancementTabType

*enum* `net.minecraft.client.gui.screens.advancements.Class AdvancementTabType`

### Fields
- `public static final int MAX_TABS`
- `private final AdvancementTabType.Sprites selectedSprites`
- `private final AdvancementTabType.Sprites unselectedSprites`
- `private final int width`
- `private final int height`
- `private final int max`

### Methods
- `public static AdvancementTabType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static AdvancementTabType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getMax()`
- `public void draw(GuiGraphics p_283216_,  int p_282432_,  int p_283617_,  boolean p_282320_,  int p_281898_)`
- `public void drawIcon(GuiGraphics p_281370_,  int p_283209_,  int p_282807_,  int p_282968_,  ItemStack p_283383_)`
- `public int getX(int p_97212_)`
- `public int getY(int p_97233_)`
- `public boolean isMouseOver(int p_97214_,  int p_97215_,  int p_97216_,  double p_97217_,  double p_97218_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class AdvancementWidgetType

*enum* `net.minecraft.client.gui.screens.advancements.Class AdvancementWidgetType`

### Fields
- `private final ResourceLocation boxSprite`
- `private final ResourceLocation taskFrameSprite`
- `private final ResourceLocation challengeFrameSprite`
- `private final ResourceLocation goalFrameSprite`

### Methods
- `public static AdvancementWidgetType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static AdvancementWidgetType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public ResourceLocation boxSprite()`
- `public ResourceLocation frameSprite(FrameType p_300394_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
