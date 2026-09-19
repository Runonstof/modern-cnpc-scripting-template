# net.minecraft.client.gui.components

- [AbstractButton](#abstractbutton)
- [AbstractOptionSliderButton](#abstractoptionsliderbutton)
- [AbstractScrollWidget](#abstractscrollwidget)
- [AbstractSelectionList.Entry>](#abstractselectionlist.entry)
- [AbstractSelectionList.TrackedList](#abstractselectionlist.trackedlist)
- [AbstractSelectionList>](#abstractselectionlist)
- [AbstractSliderButton](#abstractsliderbutton)
- [AbstractStringWidget](#abstractstringwidget)
- [AbstractWidget](#abstractwidget)
- [BossHealthOverlay](#bosshealthoverlay)
- [Button](#button)
- [Button.Builder](#button.builder)
- [Button.CreateNarration](#button.createnarration)
- [Button.OnPress](#button.onpress)
- [ChatComponent](#chatcomponent)
- [ChatComponent.DelayedMessageDeletion](#chatcomponent.delayedmessagedeletion)
- [Checkbox](#checkbox)
- [Class LockIconButton.Icon](#class-lockiconbutton.icon)
- [Class Whence](#class-whence)
- [CommandSuggestions](#commandsuggestions)
- [CommandSuggestions.SuggestionsList](#commandsuggestions.suggestionslist)
- [CommonButtons](#commonbuttons)
- [ComponentRenderUtils](#componentrenderutils)
- [ContainerObjectSelectionList.Entry>](#containerobjectselectionlist.entry)
- [ContainerObjectSelectionList>](#containerobjectselectionlist)
- [CycleButton](#cyclebutton)
- [CycleButton.Builder](#cyclebutton.builder)
- [CycleButton.OnValueChange](#cyclebutton.onvaluechange)
- [CycleButton.ValueListSupplier](#cyclebutton.valuelistsupplier)
- [DebugScreenOverlay](#debugscreenoverlay)
- [DebugScreenOverlay.AllocationRateCalculator](#debugscreenoverlay.allocationratecalculator)
- [EditBox](#editbox)
- [FittingMultiLineTextWidget](#fittingmultilinetextwidget)
- [FocusableTextWidget](#focusabletextwidget)
- [ImageButton](#imagebutton)
- [ImageWidget](#imagewidget)
- [ImageWidget.Sprite](#imagewidget.sprite)
- [ImageWidget.Texture](#imagewidget.texture)
- [LerpingBossEvent](#lerpingbossevent)
- [LoadingDotsWidget](#loadingdotswidget)
- [LockIconButton](#lockiconbutton)
- [LogoRenderer](#logorenderer)
- [MultiLineEditBox](#multilineeditbox)
- [MultiLineLabel](#multilinelabel)
- [MultiLineLabel.TextWithWidth](#multilinelabel.textwithwidth)
- [MultilineTextField](#multilinetextfield)
- [MultilineTextField.StringView](#multilinetextfield.stringview)
- [MultiLineTextWidget](#multilinetextwidget)
- [MultiLineTextWidget.CacheKey](#multilinetextwidget.cachekey)
- [ObjectSelectionList.Entry>](#objectselectionlist.entry)
- [ObjectSelectionList>](#objectselectionlist)
- [OptionsList](#optionslist)
- [OptionsList.Entry](#optionslist.entry)
- [PlainTextButton](#plaintextbutton)
- [PlayerFaceRenderer](#playerfacerenderer)
- [PlayerSkinWidget](#playerskinwidget)
- [PlayerSkinWidget.Model](#playerskinwidget.model)
- [PlayerTabOverlay](#playertaboverlay)
- [PlayerTabOverlay.HealthState](#playertaboverlay.healthstate)
- [Renderable](#renderable)
- [SplashRenderer](#splashrenderer)
- [SpriteIconButton](#spriteiconbutton)
- [SpriteIconButton.Builder](#spriteiconbutton.builder)
- [SpriteIconButton.CenteredIcon](#spriteiconbutton.centeredicon)
- [SpriteIconButton.TextAndIcon](#spriteiconbutton.textandicon)
- [StateSwitchingButton](#stateswitchingbutton)
- [StringWidget](#stringwidget)
- [SubtitleOverlay](#subtitleoverlay)
- [SubtitleOverlay.Subtitle](#subtitleoverlay.subtitle)
- [TabButton](#tabbutton)
- [TabOrderedElement](#taborderedelement)
- [Tooltip](#tooltip)
- [WidgetSprites](#widgetsprites)
## AbstractButton

*class* `net.minecraft.client.gui.components.AbstractButton`

### Fields
- `protected static final int TEXT_MARGIN` (= 2)
- `protected static final WidgetSprites SPRITES`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public abstract void onPress()`
- `protected void renderWidget(GuiGraphics p_281670_,  int p_282682_,  int p_281714_,  float p_282542_)`
- `public void renderString(GuiGraphics p_283366_,  Font p_283054_,  int p_281656_)`
- `public void onClick(double p_93371_,  double p_93372_)`
- `public boolean keyPressed(int p_93374_,  int p_93375_,  int p_93376_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `updateWidgetNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## AbstractOptionSliderButton

*class* `net.minecraft.client.gui.components.AbstractOptionSliderButton`

### Fields
- `protected final Options options`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSliderButton`: `TEXT_MARGIN`, `value`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractSliderButton`: `applyValue`, `createNarrationMessage`, `getHandleSprite`, `getSprite`, `keyPressed`, `onClick`, `onDrag`, `onRelease`, `playDownSound`, `renderWidget`, `setFocused`, `updateMessage`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## AbstractScrollWidget

*class* `net.minecraft.client.gui.components.AbstractScrollWidget`

### Fields
- `private static final WidgetSprites BACKGROUND_SPRITES`
- `private static final ResourceLocation SCROLLER_SPRITE`
- `private static final int INNER_PADDING` (= 4)
- `private static final int SCROLL_BAR_WIDTH` (= 8)
- `private double scrollAmount`
- `private boolean scrolling`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public boolean mouseClicked(double p_240170_,  double p_240171_,  int p_240172_)`
- `public boolean mouseReleased(double p_239063_,  double p_239064_,  int p_239065_)`
- `public boolean mouseDragged(double p_239639_,  double p_239640_,  int p_239641_,  double p_239642_,  double p_239643_)`
- `public boolean mouseScrolled(double p_239308_,  double p_239309_,  double p_239310_,  double p_300047_)`
- `public boolean keyPressed(int p_276060_,  int p_276046_,  int p_276030_)`
- `public void renderWidget(GuiGraphics p_282213_,  int p_282468_,  int p_282209_,  float p_283300_)`
- `private int getScrollBarHeight()`
- `protected void renderDecorations(GuiGraphics p_283178_)`
- `protected int innerPadding()`
- `protected int totalInnerPadding()`
- `protected double scrollAmount()`
- `protected void setScrollAmount(double p_240207_)`
- `protected int getMaxScrollAmount()`
- `private int getContentHeight()`
- `protected void renderBackground(GuiGraphics p_282207_)`
- `protected void renderBorder(GuiGraphics p_289776_,  int p_289792_,  int p_289795_,  int p_289775_,  int p_289762_)`
- `private void renderScrollBar(GuiGraphics p_282305_)`
- `protected boolean withinContentAreaTopBottom(int p_239943_,  int p_239944_)`
- `protected boolean withinContentAreaPoint(double p_239607_,  double p_239608_)`
- `protected boolean scrollbarVisible()`
- `public int scrollbarWidth()`
- `protected abstract int getInnerHeight()`
- `protected abstract double scrollRate()`
- `protected abstract void renderContents(GuiGraphics p_282975_,  int p_239199_,  int p_239200_,  float p_239201_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `narrationPriority`, `nextFocusPath`, `onClick`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `updateWidgetNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `isFocused`, `isMouseOver`, `keyReleased`, `mouseMoved`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`
- from `net.minecraft.client.gui.components.Renderable`: `render`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## AbstractSelectionList.Entry>

*class* `net.minecraft.client.gui.components.AbstractSelectionList.Entry>`

Enclosing class: AbstractSelectionList<E extends AbstractSelectionList.Entry<E>>

### Fields
- `@Deprecated protected AbstractSelectionList<E extends AbstractSelectionList.Entry<E>> list` (deprecated)

### Inherited fields
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void setFocused(boolean p_265302_)`
- `public boolean isFocused()`
- `public abstract void render(GuiGraphics p_283112_,  int p_93524_,  int p_93525_,  int p_93526_,  int p_93527_,  int p_93528_,  int p_93529_,  int p_93530_,  boolean p_93531_,  float p_93532_)`
- `public void renderBack(GuiGraphics p_282673_,  int p_275556_,  int p_275667_,  int p_275713_,  int p_275408_,  int p_275330_,  int p_275603_,  int p_275450_,  boolean p_275434_,  float p_275384_)`
- `public boolean isMouseOver(double p_93537_,  double p_93538_)`

### Inherited methods
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseClicked`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## AbstractSelectionList.TrackedList

*class* `net.minecraft.client.gui.components.AbstractSelectionList.TrackedList`

Enclosing class: AbstractSelectionList<E extends AbstractSelectionList.Entry<E>>

### Fields
- `private final List<E extends AbstractSelectionList.Entry<E>> delegate`

### Inherited fields
- from `java.util.AbstractList`: `modCount`

### Methods
- `public E get(int p_93557_)`
- `public int size()`
- `public E set(int p_93559_,  E p_93560_)`
- `public void add(int p_93567_,  E p_93568_)`
- `public E remove(int p_93565_)`

### Inherited methods
- from `java.util.AbstractList`: `add`, `addAll`, `clear`, `equals`, `hashCode`, `indexOf`, `iterator`, `lastIndexOf`, `listIterator`, `listIterator`, `removeRange`, `subList`
- from `java.util.AbstractCollection`: `addAll`, `contains`, `containsAll`, `isEmpty`, `remove`, `removeAll`, `retainAll`, `toArray`, `toArray`, `toString`
- from `java.util.Collection`: `parallelStream`, `removeIf`, `stream`, `toArray`
- from `java.lang.Iterable`: `forEach`
- from `java.util.List`: `addAll`, `contains`, `containsAll`, `isEmpty`, `remove`, `removeAll`, `replaceAll`, `retainAll`, `sort`, `spliterator`, `toArray`, `toArray`

## AbstractSelectionList>

*class* `net.minecraft.client.gui.components.AbstractSelectionList>`

### Fields
- `protected static final int SCROLLBAR_WIDTH`
- `private static final ResourceLocation SCROLLER_SPRITE`
- `protected final Minecraft minecraft`
- `protected final int itemHeight`
- `private final List<E extends AbstractSelectionList.Entry<E>> children`
- `protected int width`
- `protected int height`
- `protected int y0`
- `protected int y1`
- `protected int x1`
- `protected int x0`
- `protected boolean centerListVertically`
- `private double scrollAmount`
- `private boolean renderHeader`
- `protected int headerHeight`
- `private boolean scrolling`
- `@Nullable private E extends AbstractSelectionList.Entry<E> selected`
- `private boolean renderBackground`
- `@Nullable private E extends AbstractSelectionList.Entry<E> hovered`

### Inherited fields
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void setRenderHeader(boolean p_93474_,  int p_93475_)`
- `public int getRowWidth()`
- `@Nullable public E getSelected()`
- `public void setSelected(@Nullable  E p_93462_)`
- `public E getFirstElement()`
- `public void setRenderBackground(boolean p_93489_)`
- `@Nullable public E getFocused()`
- `public final List<E> children()`
- `protected void clearEntries()`
- `protected void replaceEntries(Collection<E> p_93470_)`
- `protected E getEntry(int p_93501_)`
- `protected int addEntry(E p_93487_)`
- `protected void addEntryToTop(E p_239858_)`
- `protected boolean removeEntryFromTop(E p_239046_)`
- `protected int getItemCount()`
- `protected boolean isSelectedItem(int p_93504_)`
- `@Nullable protected final E getEntryAtPosition(double p_93413_,  double p_93414_)`
- `public void updateSize(int p_93438_,  int p_93439_,  int p_93440_,  int p_93441_)`
- `public void setLeftPos(int p_93508_)`
- `protected int getMaxPosition()`
- `protected void clickedHeader(int p_93431_,  int p_93432_)`
- `protected void renderHeader(GuiGraphics p_282337_,  int p_93444_,  int p_93445_)`
- `protected void renderDecorations(GuiGraphics p_281477_,  int p_93459_,  int p_93460_)`
- `public void render(GuiGraphics p_282708_,  int p_283242_,  int p_282891_,  float p_283683_)`
- `protected void enableScissor(GuiGraphics p_282811_)`
- `protected void centerScrollOn(E p_93495_)`
- `protected void ensureVisible(E p_93499_)`
- `private void scroll(int p_93430_)`
- `public double getScrollAmount()`
- `public void setScrollAmount(double p_93411_)`
- `public int getMaxScroll()`
- `public int getScrollBottom()`
- `protected void updateScrollingState(double p_93482_,  double p_93483_,  int p_93484_)`
- `protected int getScrollbarPosition()`
- `protected boolean isValidMouseClick(int p_299130_)`
- `public boolean mouseClicked(double p_93420_,  double p_93421_,  int p_93422_)`
- `public boolean mouseReleased(double p_93491_,  double p_93492_,  int p_93493_)`
- `public boolean mouseDragged(double p_93424_,  double p_93425_,  int p_93426_,  double p_93427_,  double p_93428_)`
- `public boolean mouseScrolled(double p_93416_,  double p_93417_,  double p_93418_,  double p_298552_)`
- `public void setFocused(@Nullable  GuiEventListener p_265738_)`
- `@Nullable protected E nextEntry(ScreenDirection p_265160_)`
- `@Nullable protected E nextEntry(ScreenDirection p_265210_,  Predicate<E> p_265604_)`
- `@Nullable protected E nextEntry(ScreenDirection p_265159_,  Predicate<E> p_265109_,  @Nullable  E p_265379_)`
- `public boolean isMouseOver(double p_93479_,  double p_93480_)`
- `protected void renderList(GuiGraphics p_282079_,  int p_239229_,  int p_239230_,  float p_239231_)`
- `protected void renderItem(GuiGraphics p_282205_,  int p_238966_,  int p_238967_,  float p_238968_,  int p_238969_,  int p_238970_,  int p_238971_,  int p_238972_,  int p_238973_)`
- `protected void renderSelection(GuiGraphics p_283589_,  int p_240142_,  int p_240143_,  int p_240144_,  int p_240145_,  int p_240146_)`
- `public int getRowLeft()`
- `public int getRowRight()`
- `protected int getRowTop(int p_93512_)`
- `protected int getRowBottom(int p_93486_)`
- `public NarratableEntry.NarrationPriority narrationPriority()`
- `@Nullable protected E remove(int p_93515_)`
- `protected boolean removeEntry(E p_93503_)`
- `@Nullable protected E getHovered()`
- `void bindEntryToSelf(AbstractSelectionList.Entry<E> p_93506_)`
- `protected void narrateListElementPosition(NarrationElementOutput p_168791_,  E p_168792_)`
- `public ScreenRectangle getRectangle()`
- `public int getWidth()`
- `public int getHeight()`
- `public int getTop()`
- `public int getBottom()`
- `public int getLeft()`
- `public int getRight()`

### Inherited methods
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.narration.NarrationSupplier`: `updateNarration`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## AbstractSliderButton

*class* `net.minecraft.client.gui.components.AbstractSliderButton`

### Fields
- `private static final ResourceLocation SLIDER_SPRITE`
- `private static final ResourceLocation HIGHLIGHTED_SPRITE`
- `private static final ResourceLocation SLIDER_HANDLE_SPRITE`
- `private static final ResourceLocation SLIDER_HANDLE_HIGHLIGHTED_SPRITE`
- `protected static final int TEXT_MARGIN` (= 2)
- `private static final int HANDLE_WIDTH` (= 8)
- `private static final int HANDLE_HALF_WIDTH` (= 4)
- `protected double value`
- `private boolean canChangeValue`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected ResourceLocation getSprite()`
- `protected ResourceLocation getHandleSprite()`
- `protected MutableComponent createNarrationMessage()`
- `public void updateWidgetNarration(NarrationElementOutput p_168798_)`
- `public void renderWidget(GuiGraphics p_283427_,  int p_281447_,  int p_282852_,  float p_282409_)`
- `public void onClick(double p_93588_,  double p_93589_)`
- `public void setFocused(boolean p_265705_)`
- `public boolean keyPressed(int p_93596_,  int p_93597_,  int p_93598_)`
- `private void setValueFromMouse(double p_93586_)`
- `private void setValue(double p_93612_)`
- `protected void onDrag(double p_93591_,  double p_93592_,  double p_93593_,  double p_93594_)`
- `public void playDownSound(SoundManager p_93605_)`
- `public void onRelease(double p_93609_,  double p_93610_)`
- `protected abstract void updateMessage()`
- `protected abstract void applyValue()`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## AbstractStringWidget

*class* `net.minecraft.client.gui.components.AbstractStringWidget`

### Fields
- `private final Font font`
- `private int color`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void updateWidgetNarration(NarrationElementOutput p_270859_)`
- `public AbstractStringWidget setColor(int p_270638_)`
- `protected final Font getFont()`
- `protected final int getColor()`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onClick`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `renderWidget`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyPressed`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## AbstractWidget

*class* `net.minecraft.client.gui.components.AbstractWidget`

### Fields
- `private static final double PERIOD_PER_SCROLLED_PIXEL` (= 0.5)
- `private static final double MIN_SCROLL_PERIOD` (= 3.0)
- `protected int width`
- `protected int height`
- `private int x`
- `private int y`
- `private Component message`
- `protected boolean isHovered`
- `public boolean active`
- `public boolean visible`
- `protected float alpha`
- `private int tabOrderGroup`
- `private boolean focused`
- `@Nullable private Tooltip tooltip`
- `private int tooltipMsDelay`
- `private long hoverOrFocusedStartTime`
- `private boolean wasHoveredOrFocused`
- `public static final int UNSET_FG_COLOR` (= -1)
- `protected int packedFGColor`

### Inherited fields
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public int getHeight()`
- `public void render(GuiGraphics p_282421_,  int p_93658_,  int p_93659_,  float p_93660_)`
- `private void updateTooltip()`
- `protected ClientTooltipPositioner createTooltipPositioner()`
- `public void setTooltip(@Nullable  Tooltip p_259796_)`
- `@Nullable public Tooltip getTooltip()`
- `public void setTooltipDelay(int p_259732_)`
- `protected MutableComponent createNarrationMessage()`
- `public static MutableComponent wrapDefaultNarrationMessage(Component p_168800_)`
- `protected abstract void renderWidget(GuiGraphics p_282139_,  int p_268034_,  int p_268009_,  float p_268085_)`
- `protected static void renderScrollingString(GuiGraphics p_281620_,  Font p_282651_,  Component p_281467_,  int p_283621_,  int p_282084_,  int p_283398_,  int p_281938_,  int p_283471_)`
- `protected static void renderScrollingString(GuiGraphics p_298878_,  Font p_301352_,  Component p_297799_,  int p_300294_,  int p_297733_,  int p_298903_,  int p_300338_,  int p_297281_,  int p_299081_)`
- `protected void renderScrollingString(GuiGraphics p_281857_,  Font p_282790_,  int p_282664_,  int p_282944_)`
- `public void onClick(double p_93634_,  double p_93635_)`
- `public void onRelease(double p_93669_,  double p_93670_)`
- `protected void onDrag(double p_93636_,  double p_93637_,  double p_93638_,  double p_93639_)`
- `public boolean mouseClicked(double p_93641_,  double p_93642_,  int p_93643_)`
- `public boolean mouseReleased(double p_93684_,  double p_93685_,  int p_93686_)`
- `protected boolean isValidClickButton(int p_93652_)`
- `public boolean mouseDragged(double p_93645_,  double p_93646_,  int p_93647_,  double p_93648_,  double p_93649_)`
- `protected boolean clicked(double p_93681_,  double p_93682_)`
- `@Nullable public ComponentPath nextFocusPath(FocusNavigationEvent p_265640_)`
- `public boolean isMouseOver(double p_93672_,  double p_93673_)`
- `public void playDownSound(SoundManager p_93665_)`
- `public int getWidth()`
- `public void setWidth(int p_93675_)`
- `public void setHeight(int p_298443_)`
- `public void setAlpha(float p_93651_)`
- `public void setMessage(Component p_93667_)`
- `public Component getMessage()`
- `public boolean isFocused()`
- `public boolean isHovered()`
- `public boolean isHoveredOrFocused()`
- `public boolean isActive()`
- `public void setFocused(boolean p_93693_)`
- `public int getFGColor()`
- `public void setFGColor(int color)`
- `public void clearFGColor()`
- `public NarratableEntry.NarrationPriority narrationPriority()`
- `public final void updateNarration(NarrationElementOutput p_259921_)`
- `protected abstract void updateWidgetNarration(NarrationElementOutput p_259858_)`
- `protected void defaultButtonNarrationText(NarrationElementOutput p_168803_)`
- `public int getX()`
- `public void setX(int p_254495_)`
- `public int getY()`
- `public void setY(int p_253718_)`
- `public void visitWidgets(Consumer<AbstractWidget> p_265566_)`
- `public ScreenRectangle getRectangle()`
- `public int getTabOrderGroup()`
- `public void setTabOrderGroup(int p_268123_)`

### Inherited methods
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyPressed`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## BossHealthOverlay

*class* `net.minecraft.client.gui.components.BossHealthOverlay`

### Fields
- `private static final int BAR_WIDTH` (= 182)
- `private static final int BAR_HEIGHT` (= 5)
- `private static final ResourceLocation[] BAR_BACKGROUND_SPRITES`
- `private static final ResourceLocation[] BAR_PROGRESS_SPRITES`
- `private static final ResourceLocation[] OVERLAY_BACKGROUND_SPRITES`
- `private static final ResourceLocation[] OVERLAY_PROGRESS_SPRITES`
- `private final Minecraft minecraft`
- `final Map<UUID,LerpingBossEvent> events`

### Methods
- `public void render(GuiGraphics p_283175_)`
- `private void drawBar(GuiGraphics p_283672_,  int p_283570_,  int p_283306_,  BossEvent p_283156_)`
- `private void drawBar(GuiGraphics p_281657_,  int p_283675_,  int p_282498_,  BossEvent p_281288_,  int p_283619_,  ResourceLocation[] p_298746_,  ResourceLocation[] p_298698_)`
- `public void update(ClientboundBossEventPacket p_93712_)`
- `public void reset()`
- `public boolean shouldPlayMusic()`
- `public boolean shouldDarkenScreen()`
- `public boolean shouldCreateWorldFog()`

## Button

*class* `net.minecraft.client.gui.components.Button`

### Fields
- `public static final int SMALL_WIDTH` (= 120)
- `public static final int DEFAULT_WIDTH` (= 150)
- `public static final int DEFAULT_HEIGHT` (= 20)
- `protected static final Button.CreateNarration DEFAULT_NARRATION`
- `protected final Button.OnPress onPress`
- `protected final Button.CreateNarration createNarration`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public static Button.Builder builder(Component p_254439_,  Button.OnPress p_254567_)`
- `public void onPress()`
- `protected MutableComponent createNarrationMessage()`
- `public void updateWidgetNarration(NarrationElementOutput p_259196_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`, `renderString`, `renderWidget`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## Button.Builder

*class* `net.minecraft.client.gui.components.Button.Builder`

Enclosing class: Button

### Fields
- `private final Component message`
- `private final Button.OnPress onPress`
- `@Nullable private Tooltip tooltip`
- `private int x`
- `private int y`
- `private int width`
- `private int height`
- `private Button.CreateNarration createNarration`

### Methods
- `public Button.Builder pos(int p_254538_,  int p_254216_)`
- `public Button.Builder width(int p_254259_)`
- `public Button.Builder size(int p_253727_,  int p_254457_)`
- `public Button.Builder bounds(int p_254166_,  int p_253872_,  int p_254522_,  int p_253985_)`
- `public Button.Builder tooltip(@Nullable  Tooltip p_259609_)`
- `public Button.Builder createNarration(Button.CreateNarration p_253638_)`
- `public Button build()`
- `public Button build(Function<Button.Builder,Button> builder)`

## Button.CreateNarration

*interface* `net.minecraft.client.gui.components.Button.CreateNarration`

Enclosing class: Button

### Methods
- `MutableComponent createNarrationMessage(Supplier<MutableComponent> p_253695_)`

## Button.OnPress

*interface* `net.minecraft.client.gui.components.Button.OnPress`

Enclosing class: Button

### Methods
- `void onPress(Button p_93751_)`

## ChatComponent

*class* `net.minecraft.client.gui.components.ChatComponent`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int MAX_CHAT_HISTORY` (= 100)
- `private static final int MESSAGE_NOT_FOUND` (= -1)
- `private static final int MESSAGE_INDENT` (= 4)
- `private static final int MESSAGE_TAG_MARGIN_LEFT` (= 4)
- `private static final int BOTTOM_MARGIN` (= 40)
- `private static final int TIME_BEFORE_MESSAGE_DELETION` (= 60)
- `private static final Component DELETED_CHAT_MESSAGE`
- `private final Minecraft minecraft`
- `private final ArrayListDeque<String> recentChat`
- `private final List<GuiMessage> allMessages`
- `private final List<GuiMessage.Line> trimmedMessages`
- `private int chatScrollbarPos`
- `private boolean newMessageSinceScroll`
- `private final List<ChatComponent.DelayedMessageDeletion> messageDeletionQueue`

### Methods
- `public void tick()`
- `public void render(GuiGraphics p_282077_,  int p_283491_,  int p_282406_,  int p_283111_)`
- `private void drawTagIcon(GuiGraphics p_283206_,  int p_281677_,  int p_281878_,  GuiMessageTag.Icon p_282783_)`
- `private int getTagIconLeft(GuiMessage.Line p_240622_)`
- `private boolean isChatHidden()`
- `private static double getTimeFactor(int p_93776_)`
- `public void clearMessages(boolean p_93796_)`
- `public void addMessage(Component p_93786_)`
- `public void addMessage(Component p_241484_,  @Nullable  MessageSignature p_241323_,  @Nullable  GuiMessageTag p_241297_)`
- `private void logChatMessage(Component p_242919_,  @Nullable  GuiMessageTag p_242840_)`
- `private void addMessage(Component p_240562_,  @Nullable  MessageSignature p_241566_,  int p_240583_,  @Nullable  GuiMessageTag p_240624_,  boolean p_240558_)`
- `private void processMessageDeletionQueue()`
- `public void deleteMessage(MessageSignature p_241324_)`
- `@Nullable private ChatComponent.DelayedMessageDeletion deleteMessageOrDelay(MessageSignature p_251812_)`
- `private GuiMessage createDeletedMarker(GuiMessage p_249789_)`
- `public void rescaleChat()`
- `private void refreshTrimmedMessage()`
- `public ArrayListDeque<String> getRecentChat()`
- `public void addRecentChat(String p_93784_)`
- `public void resetChatScroll()`
- `public void scrollChat(int p_205361_)`
- `public boolean handleChatQueueClicked(double p_93773_,  double p_93774_)`
- `@Nullable public Style getClickedComponentStyleAt(double p_93801_,  double p_93802_)`
- `@Nullable public GuiMessageTag getMessageTagAt(double p_240576_,  double p_240554_)`
- `private boolean hasSelectedMessageTag(double p_240619_,  GuiMessage.Line p_240547_,  GuiMessageTag p_240637_)`
- `private double screenToChatX(double p_240580_)`
- `private double screenToChatY(double p_240548_)`
- `private int getMessageEndIndexAt(double p_249245_,  double p_252282_)`
- `private int getMessageLineIndexAt(double p_249099_,  double p_250008_)`
- `private boolean isChatFocused()`
- `public int getWidth()`
- `public int getHeight()`
- `public double getScale()`
- `public static int getWidth(double p_93799_)`
- `public static int getHeight(double p_93812_)`
- `public static double defaultUnfocusedPct()`
- `public int getLinesPerPage()`
- `private int getLineHeight()`

## ChatComponent.DelayedMessageDeletion

*record* `net.minecraft.client.gui.components.ChatComponent.DelayedMessageDeletion`

Enclosing class: ChatComponent

### Fields
- `private final MessageSignature signature`
  The field for the signature record component.
- `private final int deletableAfter`
  The field for the deletableAfter record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public MessageSignature signature()`
  Returns the value of the signature record component.
  - returns: the value of the signature record component
- `public int deletableAfter()`
  Returns the value of the deletableAfter record component.
  - returns: the value of the deletableAfter record component

## Checkbox

*class* `net.minecraft.client.gui.components.Checkbox`

### Fields
- `private static final ResourceLocation CHECKBOX_SELECTED_HIGHLIGHTED_SPRITE`
- `private static final ResourceLocation CHECKBOX_SELECTED_SPRITE`
- `private static final ResourceLocation CHECKBOX_HIGHLIGHTED_SPRITE`
- `private static final ResourceLocation CHECKBOX_SPRITE`
- `private static final int TEXT_COLOR` (= 14737632)
- `private boolean selected`
- `private final boolean showLabel`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void onPress()`
- `public boolean selected()`
- `public void updateWidgetNarration(NarrationElementOutput p_260253_)`
- `public void renderWidget(GuiGraphics p_283124_,  int p_282925_,  int p_282705_,  float p_282612_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`, `renderString`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## Class LockIconButton.Icon

*enum* `net.minecraft.client.gui.components.Class LockIconButton.Icon`

Enclosing class: LockIconButton

### Fields
- `final ResourceLocation sprite`

### Methods
- `public static LockIconButton.Icon[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static LockIconButton.Icon valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Whence

*enum* `net.minecraft.client.gui.components.Class Whence`

### Methods
- `public static Whence[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Whence valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## CommandSuggestions

*class* `net.minecraft.client.gui.components.CommandSuggestions`

### Fields
- `private static final Pattern WHITESPACE_PATTERN`
- `private static final Style UNPARSED_STYLE`
- `private static final Style LITERAL_STYLE`
- `private static final List<Style> ARGUMENT_STYLES`
- `final Minecraft minecraft`
- `private final Screen screen`
- `final EditBox input`
- `final Font font`
- `private final boolean commandsOnly`
- `private final boolean onlyShowIfCursorPastError`
- `final int lineStartOffset`
- `final int suggestionLineLimit`
- `final boolean anchorToBottom`
- `final int fillColor`
- `private final List<FormattedCharSequence> commandUsage`
- `private int commandUsagePosition`
- `private int commandUsageWidth`
- `@Nullable private com.mojang.brigadier.ParseResults<SharedSuggestionProvider> currentParse`
- `@Nullable private CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> pendingSuggestions`
- `@Nullable private CommandSuggestions.SuggestionsList suggestions`
- `private boolean allowSuggestions`
- `boolean keepSuggestions`
- `private boolean allowHiding`

### Methods
- `public void setAllowSuggestions(boolean p_93923_)`
- `public void setAllowHiding(boolean p_301612_)`
- `public boolean keyPressed(int p_93889_,  int p_93890_,  int p_93891_)`
- `public boolean mouseScrolled(double p_93883_)`
- `public boolean mouseClicked(double p_93885_,  double p_93886_,  int p_93887_)`
- `public void showSuggestions(boolean p_93931_)`
- `public boolean isVisible()`
- `public Component getUsageNarration()`
- `public void hide()`
- `private List<com.mojang.brigadier.suggestion.Suggestion> sortSuggestions(com.mojang.brigadier.suggestion.Suggestions p_93899_)`
- `public void updateCommandInfo()`
- `private static int getLastWordIndex(String p_93913_)`
- `private static FormattedCharSequence getExceptionMessage(com.mojang.brigadier.exceptions.CommandSyntaxException p_93897_)`
- `private void updateUsageInfo()`
- `private boolean fillNodeUsage(ChatFormatting p_289002_)`
- `private FormattedCharSequence formatChat(String p_93915_,  int p_93916_)`
- `@Nullable static String calculateSuggestionSuffix(String p_93928_,  String p_93929_)`
- `private static FormattedCharSequence formatText(com.mojang.brigadier.ParseResults<SharedSuggestionProvider> p_93893_,  String p_93894_,  int p_93895_)`
- `public void render(GuiGraphics p_282650_,  int p_282266_,  int p_281963_)`
- `public boolean renderSuggestions(GuiGraphics p_283503_,  int p_281628_,  int p_282260_)`
- `public void renderUsage(GuiGraphics p_282763_)`
- `public Component getNarrationMessage()`

## CommandSuggestions.SuggestionsList

*class* `net.minecraft.client.gui.components.CommandSuggestions.SuggestionsList`

Enclosing class: CommandSuggestions

### Fields
- `private final Rect2i rect`
- `private final String originalContents`
- `private final List<com.mojang.brigadier.suggestion.Suggestion> suggestionList`
- `private int offset`
- `private int current`
- `private Vec2 lastMouse`
- `boolean tabCycles`
- `private int lastNarratedEntry`

### Methods
- `public void render(GuiGraphics p_282264_,  int p_283591_,  int p_283236_)`
- `public boolean mouseClicked(int p_93976_,  int p_93977_,  int p_93978_)`
- `public boolean mouseScrolled(double p_93972_)`
- `public boolean keyPressed(int p_93989_,  int p_93990_,  int p_93991_)`
- `public void cycle(int p_93974_)`
- `public void select(int p_93987_)`
- `public void useSuggestion()`
- `Component getNarrationMessage()`

## CommonButtons

*class* `net.minecraft.client.gui.components.CommonButtons`

### Methods
- `public static SpriteIconButton language(int p_299277_,  Button.OnPress p_299778_,  boolean p_301098_)`
- `public static SpriteIconButton accessibility(int p_300710_,  Button.OnPress p_298571_,  boolean p_299983_)`

## ComponentRenderUtils

*class* `net.minecraft.client.gui.components.ComponentRenderUtils`

### Fields
- `private static final FormattedCharSequence INDENT`

### Methods
- `private static String stripColor(String p_94000_)`
- `public static List<FormattedCharSequence> wrapComponents(FormattedText p_94006_,  int p_94007_,  Font p_94008_)`

## ContainerObjectSelectionList.Entry>

*class* `net.minecraft.client.gui.components.ContainerObjectSelectionList.Entry>`

Enclosing class: ContainerObjectSelectionList<E extends ContainerObjectSelectionList.Entry<E>>

### Fields
- `@Nullable private GuiEventListener focused`
- `@Nullable private NarratableEntry lastNarratable`
- `private boolean dragging`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public boolean isDragging()`
- `public void setDragging(boolean p_94028_)`
- `public boolean mouseClicked(double p_265453_,  double p_265297_,  int p_265697_)`
- `public void setFocused(@Nullable  GuiEventListener p_94024_)`
- `@Nullable public GuiEventListener getFocused()`
- `@Nullable public ComponentPath focusPathAtIndex(FocusNavigationEvent p_265435_,  int p_265432_)`
- `@Nullable public ComponentPath nextFocusPath(FocusNavigationEvent p_265672_)`
- `public abstract List<? extends NarratableEntry> narratables()`
- `void updateNarration(NarrationElementOutput p_168855_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `render`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `children`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getRectangle`, `isMouseOver`, `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ContainerObjectSelectionList>

*class* `net.minecraft.client.gui.components.ContainerObjectSelectionList>`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `@Nullable public ComponentPath nextFocusPath(FocusNavigationEvent p_265385_)`
- `public void setFocused(@Nullable  GuiEventListener p_265559_)`
- `public NarratableEntry.NarrationPriority narrationPriority()`
- `protected boolean isSelectedItem(int p_94019_)`
- `public void updateNarration(NarrationElementOutput p_168851_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `bindEntryToSelf`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getRowWidth`, `getScrollAmount`, `getScrollbarPosition`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `replaceEntries`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `setSelected`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## CycleButton

*class* `net.minecraft.client.gui.components.CycleButton`

### Fields
- `public static final BooleanSupplier DEFAULT_ALT_LIST_SELECTOR`
- `private static final List<Boolean> BOOLEAN_OPTIONS`
- `private final Component name`
- `private int index`
- `private T value`
- `private final CycleButton.ValueListSupplier<T> values`
- `private final Function<T,Component> valueStringifier`
- `private final Function<CycleButton<T>,MutableComponent> narrationProvider`
- `private final CycleButton.OnValueChange<T> onValueChange`
- `private final boolean displayOnlyValue`
- `private final OptionInstance.TooltipSupplier<T> tooltipSupplier`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private void updateTooltip()`
- `public void onPress()`
- `private void cycleValue(int p_168909_)`
- `private T getCycledValue(int p_168915_)`
- `public boolean mouseScrolled(double p_168885_,  double p_168886_,  double p_168887_,  double p_300536_)`
- `public void setValue(T p_168893_)`
- `private void updateValue(T p_168906_)`
- `private Component createLabelForValue(T p_168911_)`
- `private MutableComponent createFullName(T p_168913_)`
- `public T getValue()`
- `protected MutableComponent createNarrationMessage()`
- `public void updateWidgetNarration(NarrationElementOutput p_168889_)`
- `public MutableComponent createDefaultNarrationMessage()`
- `public static <T> CycleButton.Builder<T> builder(Function<T,Component> p_168895_)`
- `public static CycleButton.Builder<Boolean> booleanBuilder(Component p_168897_,  Component p_168898_)`
- `public static CycleButton.Builder<Boolean> onOffBuilder()`
- `public static CycleButton.Builder<Boolean> onOffBuilder(boolean p_168917_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`, `renderString`, `renderWidget`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## CycleButton.Builder

*class* `net.minecraft.client.gui.components.CycleButton.Builder`

Enclosing class: CycleButton<T>

### Fields
- `private int initialIndex`
- `@Nullable private T initialValue`
- `private final Function<T,Component> valueStringifier`
- `private OptionInstance.TooltipSupplier<T> tooltipSupplier`
- `private Function<CycleButton<T>,MutableComponent> narrationProvider`
- `private CycleButton.ValueListSupplier<T> values`
- `private boolean displayOnlyValue`

### Methods
- `public CycleButton.Builder<T> withValues(Collection<T> p_232503_)`
- `@SafeVarargs public final CycleButton.Builder<T> withValues(T... p_168962_)`
- `public CycleButton.Builder<T> withValues(List<T> p_168953_,  List<T> p_168954_)`
- `public CycleButton.Builder<T> withValues(BooleanSupplier p_168956_,  List<T> p_168957_,  List<T> p_168958_)`
- `public CycleButton.Builder<T> withValues(CycleButton.ValueListSupplier<T> p_232501_)`
- `public CycleButton.Builder<T> withTooltip(OptionInstance.TooltipSupplier<T> p_232499_)`
- `public CycleButton.Builder<T> withInitialValue(T p_168949_)`
- `public CycleButton.Builder<T> withCustomNarration(Function<CycleButton<T>,MutableComponent> p_168960_)`
- `public CycleButton.Builder<T> displayOnlyValue()`
- `public CycleButton<T> create(int p_168931_,  int p_168932_,  int p_168933_,  int p_168934_,  Component p_168935_)`
- `public CycleButton<T> create(int p_168937_,  int p_168938_,  int p_168939_,  int p_168940_,  Component p_168941_,  CycleButton.OnValueChange<T> p_168942_)`

## CycleButton.OnValueChange

*interface* `net.minecraft.client.gui.components.CycleButton.OnValueChange`

Enclosing class: CycleButton<T>

### Methods
- `void onValueChange(CycleButton<T> p_168966_,  T p_168967_)`

## CycleButton.ValueListSupplier

*interface* `net.minecraft.client.gui.components.CycleButton.ValueListSupplier`

Enclosing class: CycleButton<T>

### Methods
- `List<T> getSelectedList()`
- `List<T> getDefaultList()`
- `static <T> CycleButton.ValueListSupplier<T> create(Collection<T> p_232505_)`
- `static <T> CycleButton.ValueListSupplier<T> create(BooleanSupplier p_168971_,  List<T> p_168972_,  List<T> p_168973_)`

## DebugScreenOverlay

*class* `net.minecraft.client.gui.components.DebugScreenOverlay`

### Fields
- `private static final int COLOR_GREY` (= 14737632)
- `private static final int MARGIN_RIGHT` (= 2)
- `private static final int MARGIN_LEFT` (= 2)
- `private static final int MARGIN_TOP` (= 2)
- `private static final Map<Heightmap.Types,String> HEIGHTMAP_NAMES`
- `private final Minecraft minecraft`
- `private final DebugScreenOverlay.AllocationRateCalculator allocationRateCalculator`
- `private final Font font`
- `protected HitResult block`
- `protected HitResult liquid`
- `@Nullable private ChunkPos lastPos`
- `@Nullable private LevelChunk clientChunk`
- `@Nullable private CompletableFuture<LevelChunk> serverChunk`
- `private boolean renderDebug`
- `protected boolean renderProfilerChart`
- `protected boolean renderFpsCharts`
- `protected boolean renderNetworkCharts`
- `private final SampleLogger frameTimeLogger`
- `private final SampleLogger tickTimeLogger`
- `private final SampleLogger pingLogger`
- `private final SampleLogger bandwidthLogger`
- `private final FpsDebugChart fpsChart`
- `private final TpsDebugChart tpsChart`
- `private final PingDebugChart pingChart`
- `private final BandwidthDebugChart bandwidthChart`

### Methods
- `public void clearChunkCache()`
- `protected void update()`
- `protected void drawText(GuiGraphics p_281427_)`
- `protected void drawFPSCharts(GuiGraphics p_281427_)`
- `protected void drawNetworkCharts(GuiGraphics p_281427_)`
- `public void render(GuiGraphics p_281427_)`
- `protected List<String> getOverlayHelp()`
- `protected void drawGameInformation(GuiGraphics p_281525_)`
- `protected void drawSystemInformation(GuiGraphics p_281261_)`
- `protected void renderLines(GuiGraphics p_286519_,  List<String> p_286665_,  boolean p_286644_)`
- `protected List<String> getGameInformation()`
- `private static String printBiome(Holder<Biome> p_205375_)`
- `@Nullable private ServerLevel getServerLevel()`
- `@Nullable private String getServerChunkStats()`
- `private Level getLevel()`
- `@Nullable private LevelChunk getServerChunk()`
- `private LevelChunk getClientChunk()`
- `protected List<String> getSystemInformation()`
- `private String getPropertyValueString(Map.Entry<Property<?>,Comparable<?>> p_94072_)`
- `private static long bytesToMegabytes(long p_94051_)`
- `public boolean showDebugScreen()`
- `public boolean showProfilerChart()`
- `public boolean showNetworkCharts()`
- `public void toggleOverlay()`
- `public void toggleNetworkCharts()`
- `public void toggleFpsCharts()`
- `public void toggleProfilerChart()`
- `public void logFrameDuration(long p_300948_)`
- `public void logTickDuration(long p_298156_)`
- `public SampleLogger getPingLogger()`
- `public SampleLogger getBandwidthLogger()`
- `public void reset()`

## DebugScreenOverlay.AllocationRateCalculator

*class* `net.minecraft.client.gui.components.DebugScreenOverlay.AllocationRateCalculator`

Enclosing class: DebugScreenOverlay

### Fields
- `private static final int UPDATE_INTERVAL_MS` (= 500)
- `private static final List<GarbageCollectorMXBean> GC_MBEANS`
- `private long lastTime`
- `private long lastHeapUsage`
- `private long lastGcCounts`
- `private long lastRate`

### Methods
- `long bytesAllocatedPerSecond(long p_232517_)`
- `private static long gcCounts()`

## EditBox

*class* `net.minecraft.client.gui.components.EditBox`

### Fields
- `private static final WidgetSprites SPRITES`
- `public static final int BACKWARDS` (= -1)
- `public static final int FORWARDS` (= 1)
- `private static final int CURSOR_INSERT_WIDTH` (= 1)
- `private static final int CURSOR_INSERT_COLOR` (= -3092272)
- `private static final String CURSOR_APPEND_CHARACTER` (= "_")
- `public static final int DEFAULT_TEXT_COLOR` (= 14737632)
- `private static final int CURSOR_BLINK_INTERVAL_MS` (= 300)
- `private final Font font`
- `private String value`
- `private int maxLength`
- `private boolean bordered`
- `private boolean canLoseFocus`
- `private boolean isEditable`
- `private int displayPos`
- `private int cursorPos`
- `private int highlightPos`
- `private int textColor`
- `private int textColorUneditable`
- `@Nullable private String suggestion`
- `@Nullable private Consumer<String> responder`
- `private Predicate<String> filter`
- `private BiFunction<String,Integer,FormattedCharSequence> formatter`
- `@Nullable private Component hint`
- `private long focusedTime`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void setResponder(Consumer<String> p_94152_)`
- `public void setFormatter(BiFunction<String,Integer,FormattedCharSequence> p_94150_)`
- `protected MutableComponent createNarrationMessage()`
- `public void setValue(String p_94145_)`
- `public String getValue()`
- `public String getHighlighted()`
- `public void setFilter(Predicate<String> p_94154_)`
- `public void insertText(String p_94165_)`
- `private void onValueChange(String p_94175_)`
- `private void deleteText(int p_94218_)`
- `public void deleteWords(int p_94177_)`
- `public void deleteChars(int p_94181_)`
- `public int getWordPosition(int p_94185_)`
- `private int getWordPosition(int p_94129_,  int p_94130_)`
- `private int getWordPosition(int p_94141_,  int p_94142_,  boolean p_94143_)`
- `public void moveCursor(int p_94189_,  boolean p_297286_)`
- `private int getCursorPos(int p_94221_)`
- `public void moveCursorTo(int p_94193_,  boolean p_300521_)`
- `public void setCursorPosition(int p_94197_)`
- `public void moveCursorToStart(boolean p_299543_)`
- `public void moveCursorToEnd(boolean p_297711_)`
- `public boolean keyPressed(int p_94132_,  int p_94133_,  int p_94134_)`
- `public boolean canConsumeInput()`
- `public boolean charTyped(char p_94122_,  int p_94123_)`
- `public void onClick(double p_279417_,  double p_279437_)`
- `public void playDownSound(SoundManager p_279245_)`
- `public void renderWidget(GuiGraphics p_283252_,  int p_281594_,  int p_282100_,  float p_283101_)`
- `private void renderHighlight(GuiGraphics p_281400_,  int p_265338_,  int p_265693_,  int p_265618_,  int p_265584_)`
- `public void setMaxLength(int p_94200_)`
- `private int getMaxLength()`
- `public int getCursorPosition()`
- `public boolean isBordered()`
- `public void setBordered(boolean p_94183_)`
- `public void setTextColor(int p_94203_)`
- `public void setTextColorUneditable(int p_94206_)`
- `@Nullable public ComponentPath nextFocusPath(FocusNavigationEvent p_265216_)`
- `public boolean isMouseOver(double p_94157_,  double p_94158_)`
- `public void setFocused(boolean p_265520_)`
- `private boolean isEditable()`
- `public void setEditable(boolean p_94187_)`
- `public int getInnerWidth()`
- `public void setHighlightPos(int p_94209_)`
- `private void scrollTo(int p_299591_)`
- `public void setCanLoseFocus(boolean p_94191_)`
- `public boolean isVisible()`
- `public void setVisible(boolean p_94195_)`
- `public void setSuggestion(@Nullable  String p_94168_)`
- `public int getScreenX(int p_94212_)`
- `public void updateWidgetNarration(NarrationElementOutput p_259237_)`
- `public void setHint(Component p_259584_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `onDrag`, `onRelease`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`
- from `net.minecraft.client.gui.components.Renderable`: `render`

## FittingMultiLineTextWidget

*class* `net.minecraft.client.gui.components.FittingMultiLineTextWidget`

### Fields
- `private final Font font`
- `private final MultiLineTextWidget multilineWidget`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public FittingMultiLineTextWidget setColor(int p_289780_)`
- `public void setWidth(int p_289765_)`
- `protected int getInnerHeight()`
- `protected double scrollRate()`
- `protected void renderBackground(GuiGraphics p_289758_)`
- `public void renderWidget(GuiGraphics p_289802_,  int p_289778_,  int p_289798_,  float p_289804_)`
- `public boolean showingScrollBar()`
- `protected void renderContents(GuiGraphics p_289766_,  int p_289790_,  int p_289786_,  float p_289767_)`
- `protected void updateWidgetNarration(NarrationElementOutput p_289784_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractScrollWidget`: `getMaxScrollAmount`, `innerPadding`, `keyPressed`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `renderBorder`, `renderDecorations`, `scrollAmount`, `scrollbarVisible`, `scrollbarWidth`, `setScrollAmount`, `totalInnerPadding`, `withinContentAreaPoint`, `withinContentAreaTopBottom`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `narrationPriority`, `nextFocusPath`, `onClick`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `isFocused`, `isMouseOver`, `keyReleased`, `mouseMoved`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`
- from `net.minecraft.client.gui.components.Renderable`: `render`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## FocusableTextWidget

*class* `net.minecraft.client.gui.components.FocusableTextWidget`

### Fields
- `private static final int BACKGROUND_COLOR` (= 1426063360)
- `private static final int PADDING` (= 4)
- `private final boolean alwaysShowBorder`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void updateWidgetNarration(NarrationElementOutput p_300724_)`
- `public void renderWidget(GuiGraphics p_297672_,  int p_301298_,  int p_300386_,  float p_299545_)`
- `public void playDownSound(SoundManager p_297351_)`

### Inherited methods
- from `net.minecraft.client.gui.components.MultiLineTextWidget`: `getHeight`, `getWidth`, `setCentered`, `setColor`, `setMaxRows`, `setMaxWidth`
- from `net.minecraft.client.gui.components.AbstractStringWidget`: `getColor`, `getFont`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onClick`, `onDrag`, `onRelease`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyPressed`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## ImageButton

*class* `net.minecraft.client.gui.components.ImageButton`

### Fields
- `protected final WidgetSprites sprites`

### Inherited fields
- from `net.minecraft.client.gui.components.Button`: `createNarration`, `DEFAULT_HEIGHT`, `DEFAULT_NARRATION`, `DEFAULT_WIDTH`, `onPress`, `SMALL_WIDTH`
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void renderWidget(GuiGraphics p_283502_,  int p_281473_,  int p_283021_,  float p_282518_)`

### Inherited methods
- from `net.minecraft.client.gui.components.Button`: `builder`, `createNarrationMessage`, `onPress`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`, `renderString`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## ImageWidget

*class* `net.minecraft.client.gui.components.ImageWidget`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public static ImageWidget texture(int p_298293_,  int p_301221_,  ResourceLocation p_299739_,  int p_297694_,  int p_300459_)`
- `public static ImageWidget sprite(int p_299633_,  int p_299377_,  ResourceLocation p_298615_)`
- `protected void updateWidgetNarration(NarrationElementOutput p_275454_)`
- `public void playDownSound(SoundManager p_297959_)`
- `public boolean isActive()`
- `@Nullable public ComponentPath nextFocusPath(FocusNavigationEvent p_298071_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `onClick`, `onDrag`, `onRelease`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `renderWidget`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyPressed`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## ImageWidget.Sprite

*class* `net.minecraft.client.gui.components.ImageWidget.Sprite`

Enclosing class: ImageWidget

### Fields
- `private final ResourceLocation sprite`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void renderWidget(GuiGraphics p_298082_,  int p_297761_,  int p_298881_,  float p_300382_)`

### Inherited methods
- from `net.minecraft.client.gui.components.ImageWidget`: `isActive`, `nextFocusPath`, `playDownSound`, `sprite`, `texture`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `onClick`, `onDrag`, `onRelease`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyPressed`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## ImageWidget.Texture

*class* `net.minecraft.client.gui.components.ImageWidget.Texture`

Enclosing class: ImageWidget

### Fields
- `private final ResourceLocation texture`
- `private final int textureWidth`
- `private final int textureHeight`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void renderWidget(GuiGraphics p_301123_,  int p_301197_,  int p_299250_,  float p_300781_)`

### Inherited methods
- from `net.minecraft.client.gui.components.ImageWidget`: `isActive`, `nextFocusPath`, `playDownSound`, `sprite`, `texture`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `onClick`, `onDrag`, `onRelease`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyPressed`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## LerpingBossEvent

*class* `net.minecraft.client.gui.components.LerpingBossEvent`

### Fields
- `private static final long LERP_MILLISECONDS` (= 100L)
- `protected float targetPercent`
- `protected long setTime`

### Inherited fields
- from `net.minecraft.world.BossEvent`: `color`, `createWorldFog`, `darkenScreen`, `name`, `overlay`, `playBossMusic`, `progress`

### Methods
- `public void setProgress(float p_169030_)`
- `public float getProgress()`

### Inherited methods
- from `net.minecraft.world.BossEvent`: `getColor`, `getId`, `getName`, `getOverlay`, `setColor`, `setCreateWorldFog`, `setDarkenScreen`, `setName`, `setOverlay`, `setPlayBossMusic`, `shouldCreateWorldFog`, `shouldDarkenScreen`, `shouldPlayBossMusic`

## LoadingDotsWidget

*class* `net.minecraft.client.gui.components.LoadingDotsWidget`

### Fields
- `private final Font font`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void renderWidget(GuiGraphics p_300747_,  int p_298491_,  int p_299148_,  float p_300011_)`
- `protected void updateWidgetNarration(NarrationElementOutput p_300971_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onClick`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyPressed`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## LockIconButton

*class* `net.minecraft.client.gui.components.LockIconButton`

### Fields
- `private boolean locked`

### Inherited fields
- from `net.minecraft.client.gui.components.Button`: `createNarration`, `DEFAULT_HEIGHT`, `DEFAULT_NARRATION`, `DEFAULT_WIDTH`, `onPress`, `SMALL_WIDTH`
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected MutableComponent createNarrationMessage()`
- `public boolean isLocked()`
- `public void setLocked(boolean p_94310_)`
- `public void renderWidget(GuiGraphics p_282701_,  int p_282638_,  int p_283565_,  float p_282549_)`

### Inherited methods
- from `net.minecraft.client.gui.components.Button`: `builder`, `onPress`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`, `renderString`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## LogoRenderer

*class* `net.minecraft.client.gui.components.LogoRenderer`

### Fields
- `public static final ResourceLocation MINECRAFT_LOGO`
- `public static final ResourceLocation EASTER_EGG_LOGO`
- `public static final ResourceLocation MINECRAFT_EDITION`
- `public static final int LOGO_WIDTH` (= 256)
- `public static final int LOGO_HEIGHT` (= 44)
- `private static final int LOGO_TEXTURE_WIDTH` (= 256)
- `private static final int LOGO_TEXTURE_HEIGHT` (= 64)
- `private static final int EDITION_WIDTH` (= 128)
- `private static final int EDITION_HEIGHT` (= 14)
- `private static final int EDITION_TEXTURE_WIDTH` (= 128)
- `private static final int EDITION_TEXTURE_HEIGHT` (= 16)
- `public static final int DEFAULT_HEIGHT_OFFSET` (= 30)
- `private static final int EDITION_LOGO_OVERLAP` (= 7)
- `private final boolean showEasterEgg`
- `private final boolean keepLogoThroughFade`

### Methods
- `public void renderLogo(GuiGraphics p_282217_,  int p_283270_,  float p_282051_)`
- `public void renderLogo(GuiGraphics p_281856_,  int p_281512_,  float p_281290_,  int p_282296_)`

## MultiLineEditBox

*class* `net.minecraft.client.gui.components.MultiLineEditBox`

### Fields
- `private static final int CURSOR_INSERT_WIDTH` (= 1)
- `private static final int CURSOR_INSERT_COLOR` (= -3092272)
- `private static final String CURSOR_APPEND_CHARACTER` (= "_")
- `private static final int TEXT_COLOR` (= -2039584)
- `private static final int PLACEHOLDER_TEXT_COLOR` (= -857677600)
- `private static final int CURSOR_BLINK_INTERVAL_MS` (= 300)
- `private final Font font`
- `private final Component placeholder`
- `private final MultilineTextField textField`
- `private long focusedTime`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void setCharacterLimit(int p_239314_)`
- `public void setValueListener(Consumer<String> p_239274_)`
- `public void setValue(String p_240160_)`
- `public String getValue()`
- `public void updateWidgetNarration(NarrationElementOutput p_259393_)`
- `public boolean mouseClicked(double p_239101_,  double p_239102_,  int p_239103_)`
- `public boolean mouseDragged(double p_238978_,  double p_238979_,  int p_238980_,  double p_238981_,  double p_238982_)`
- `public boolean keyPressed(int p_239433_,  int p_239434_,  int p_239435_)`
- `public boolean charTyped(char p_239387_,  int p_239388_)`
- `protected void renderContents(GuiGraphics p_283676_,  int p_281538_,  int p_283033_,  float p_281767_)`
- `protected void renderDecorations(GuiGraphics p_282551_)`
- `public int getInnerHeight()`
- `protected boolean scrollbarVisible()`
- `protected double scrollRate()`
- `private void renderHighlight(GuiGraphics p_282092_,  int p_282814_,  int p_282908_,  int p_281451_,  int p_281765_)`
- `private void scrollToCursor()`
- `private double getDisplayableLineCount()`
- `private void seekCursorScreen(double p_239276_,  double p_239277_)`
- `public void setFocused(boolean p_299784_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractScrollWidget`: `getMaxScrollAmount`, `innerPadding`, `mouseReleased`, `mouseScrolled`, `renderBackground`, `renderBorder`, `renderWidget`, `scrollAmount`, `scrollbarWidth`, `setScrollAmount`, `totalInnerPadding`, `withinContentAreaPoint`, `withinContentAreaTopBottom`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `narrationPriority`, `nextFocusPath`, `onClick`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getCurrentFocusPath`, `getRectangle`, `isFocused`, `isMouseOver`, `keyReleased`, `mouseMoved`, `nextFocusPath`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`
- from `net.minecraft.client.gui.components.Renderable`: `render`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## MultiLineLabel

*interface* `net.minecraft.client.gui.components.MultiLineLabel`

### Fields
- `static final MultiLineLabel EMPTY`

### Methods
- `static MultiLineLabel create(Font p_94342_,  FormattedText p_94343_,  int p_94344_)`
- `static MultiLineLabel create(Font p_94346_,  FormattedText p_94347_,  int p_94348_,  int p_94349_)`
- `static MultiLineLabel create(Font p_94351_,  Component... p_94352_)`
- `static MultiLineLabel create(Font p_169037_,  List<Component> p_169038_)`
- `static MultiLineLabel createFixed(Font p_94362_,  List<MultiLineLabel.TextWithWidth> p_94363_)`
- `int renderCentered(GuiGraphics p_281749_,  int p_94334_,  int p_94335_)`
- `int renderCentered(GuiGraphics p_281785_,  int p_94337_,  int p_94338_,  int p_94339_,  int p_94340_)`
- `int renderLeftAligned(GuiGraphics p_282655_,  int p_94365_,  int p_94366_,  int p_94367_,  int p_94368_)`
- `int renderLeftAlignedNoShadow(GuiGraphics p_281982_,  int p_94354_,  int p_94355_,  int p_94356_,  int p_94357_)`
- `void renderBackgroundCentered(GuiGraphics p_282120_,  int p_210818_,  int p_210819_,  int p_210820_,  int p_210821_,  int p_210822_)`
- `int getLineCount()`
- `int getWidth()`

## MultiLineLabel.TextWithWidth

*class* `net.minecraft.client.gui.components.MultiLineLabel.TextWithWidth`

Enclosing interface: MultiLineLabel

### Fields
- `final FormattedCharSequence text`
- `final int width`

## MultilineTextField

*class* `net.minecraft.client.gui.components.MultilineTextField`

### Fields
- `public static final int NO_CHARACTER_LIMIT` (= 2147483647)
- `private static final int LINE_SEEK_PIXEL_BIAS` (= 2)
- `private final Font font`
- `private final List<MultilineTextField.StringView> displayLines`
- `private String value`
- `private int cursor`
- `private int selectCursor`
- `private boolean selecting`
- `private int characterLimit`
- `private final int width`
- `private Consumer<String> valueListener`
- `private Runnable cursorListener`

### Methods
- `public int characterLimit()`
- `public void setCharacterLimit(int p_240163_)`
- `public boolean hasCharacterLimit()`
- `public void setValueListener(Consumer<String> p_239920_)`
- `public void setCursorListener(Runnable p_239258_)`
- `public void setValue(String p_239678_)`
- `public String value()`
- `public void insertText(String p_240016_)`
- `public void deleteText(int p_239475_)`
- `public int cursor()`
- `public void setSelecting(boolean p_239951_)`
- `public MultilineTextField.StringView getSelected()`
- `public int getLineCount()`
- `public int getLineAtCursor()`
- `public MultilineTextField.StringView getLineView(int p_239145_)`
- `public void seekCursor(Whence p_239798_,  int p_239799_)`
- `public void seekCursorLine(int p_239394_)`
- `public void seekCursorToPoint(double p_239579_,  double p_239580_)`
- `public boolean keyPressed(int p_239712_)`
- `public Iterable<MultilineTextField.StringView> iterateLines()`
- `public boolean hasSelection()`
- `public String getSelectedText()`
- `private MultilineTextField.StringView getCursorLineView()`
- `private MultilineTextField.StringView getCursorLineView(int p_239855_)`
- `public MultilineTextField.StringView getPreviousWord()`
- `public MultilineTextField.StringView getNextWord()`
- `private int getWordEndPosition(int p_240093_)`
- `private void onValueChange()`
- `private void reflowDisplayLines()`
- `private String truncateFullText(String p_239843_)`
- `private String truncateInsertionText(String p_239418_)`

## MultilineTextField.StringView

*record* `net.minecraft.client.gui.components.MultilineTextField.StringView`

Enclosing class: MultilineTextField

### Fields
- `private final int beginIndex`
  The field for the beginIndex record component.
- `private final int endIndex`
  The field for the endIndex record component.
- `static final MultilineTextField.StringView EMPTY`

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int beginIndex()`
  Returns the value of the beginIndex record component.
  - returns: the value of the beginIndex record component
- `public int endIndex()`
  Returns the value of the endIndex record component.
  - returns: the value of the endIndex record component

## MultiLineTextWidget

*class* `net.minecraft.client.gui.components.MultiLineTextWidget`

### Fields
- `private OptionalInt maxWidth`
- `private OptionalInt maxRows`
- `private final SingleKeyCache<MultiLineTextWidget.CacheKey,MultiLineLabel> cache`
- `private boolean centered`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public MultiLineTextWidget setColor(int p_270378_)`
- `public MultiLineTextWidget setMaxWidth(int p_270776_)`
- `public MultiLineTextWidget setMaxRows(int p_270085_)`
- `public MultiLineTextWidget setCentered(boolean p_270493_)`
- `public int getWidth()`
- `public int getHeight()`
- `public void renderWidget(GuiGraphics p_282535_,  int p_261774_,  int p_261640_,  float p_261514_)`
- `private MultiLineTextWidget.CacheKey getFreshCacheKey()`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractStringWidget`: `getColor`, `getFont`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onClick`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyPressed`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## MultiLineTextWidget.CacheKey

*record* `net.minecraft.client.gui.components.MultiLineTextWidget.CacheKey`

Enclosing class: MultiLineTextWidget

### Fields
- `private final Component message`
  The field for the message record component.
- `private final int maxWidth`
  The field for the maxWidth record component.
- `private final OptionalInt maxRows`
  The field for the maxRows record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public Component message()`
  Returns the value of the message record component.
  - returns: the value of the message record component
- `public int maxWidth()`
  Returns the value of the maxWidth record component.
  - returns: the value of the maxWidth record component
- `public OptionalInt maxRows()`
  Returns the value of the maxRows record component.
  - returns: the value of the maxRows record component

## ObjectSelectionList.Entry>

*class* `net.minecraft.client.gui.components.ObjectSelectionList.Entry>`

Enclosing class: ObjectSelectionList<E extends ObjectSelectionList.Entry<E>>

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public abstract Component getNarration()`
- `public void updateNarration(NarrationElementOutput p_169044_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `render`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseClicked`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ObjectSelectionList>

*class* `net.minecraft.client.gui.components.ObjectSelectionList>`

### Fields
- `private static final Component USAGE_NARRATION`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `@Nullable public ComponentPath nextFocusPath(FocusNavigationEvent p_265150_)`
- `public void updateNarration(NarrationElementOutput p_169042_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `bindEntryToSelf`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getRowWidth`, `getScrollAmount`, `getScrollbarPosition`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `replaceEntries`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `setSelected`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## OptionsList

*class* `net.minecraft.client.gui.components.OptionsList`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public int addBig(OptionInstance<?> p_232529_)`
- `public void addSmall(OptionInstance<?> p_232531_,  @Nullable  OptionInstance<?> p_232532_)`
- `public void addSmall(OptionInstance<?>[] p_232534_)`
- `public int getRowWidth()`
- `protected int getScrollbarPosition()`
- `@Nullable public AbstractWidget findOption(OptionInstance<?> p_232536_)`
- `public Optional<AbstractWidget> getMouseOver(double p_94481_,  double p_94482_)`

### Inherited methods
- from `net.minecraft.client.gui.components.ContainerObjectSelectionList`: `isSelectedItem`, `narrationPriority`, `nextFocusPath`, `setFocused`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `bindEntryToSelf`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getScrollAmount`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `replaceEntries`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `setSelected`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## OptionsList.Entry

*class* `net.minecraft.client.gui.components.OptionsList.Entry`

Enclosing class: OptionsList

### Fields
- `final Map<OptionInstance<?>,AbstractWidget> options`
- `final List<AbstractWidget> children`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public static OptionsList.Entry big(Options p_232538_,  int p_232539_,  OptionInstance<?> p_232540_)`
- `public static OptionsList.Entry small(Options p_232542_,  int p_232543_,  OptionInstance<?> p_232544_,  @Nullable  OptionInstance<?> p_232545_)`
- `public void render(GuiGraphics p_281311_,  int p_94497_,  int p_94498_,  int p_94499_,  int p_94500_,  int p_94501_,  int p_94502_,  int p_94503_,  boolean p_94504_,  float p_94505_)`
- `public List<? extends GuiEventListener> children()`
- `public List<? extends NarratableEntry> narratables()`

### Inherited methods
- from `net.minecraft.client.gui.components.ContainerObjectSelectionList.Entry`: `focusPathAtIndex`, `getFocused`, `isDragging`, `mouseClicked`, `nextFocusPath`, `setDragging`, `setFocused`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getRectangle`, `isMouseOver`, `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## PlainTextButton

*class* `net.minecraft.client.gui.components.PlainTextButton`

### Fields
- `private final Font font`
- `private final Component message`
- `private final Component underlinedMessage`

### Inherited fields
- from `net.minecraft.client.gui.components.Button`: `createNarration`, `DEFAULT_HEIGHT`, `DEFAULT_NARRATION`, `DEFAULT_WIDTH`, `onPress`, `SMALL_WIDTH`
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void renderWidget(GuiGraphics p_283309_,  int p_282710_,  int p_282486_,  float p_281727_)`

### Inherited methods
- from `net.minecraft.client.gui.components.Button`: `builder`, `createNarrationMessage`, `onPress`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`, `renderString`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## PlayerFaceRenderer

*class* `net.minecraft.client.gui.components.PlayerFaceRenderer`

### Fields
- `public static final int SKIN_HEAD_U` (= 8)
- `public static final int SKIN_HEAD_V` (= 8)
- `public static final int SKIN_HEAD_WIDTH` (= 8)
- `public static final int SKIN_HEAD_HEIGHT` (= 8)
- `public static final int SKIN_HAT_U` (= 40)
- `public static final int SKIN_HAT_V` (= 8)
- `public static final int SKIN_HAT_WIDTH` (= 8)
- `public static final int SKIN_HAT_HEIGHT` (= 8)
- `public static final int SKIN_TEX_WIDTH` (= 64)
- `public static final int SKIN_TEX_HEIGHT` (= 64)

### Methods
- `public static void draw(GuiGraphics p_298949_,  PlayerSkin p_298692_,  int p_299931_,  int p_299437_,  int p_301021_)`
- `public static void draw(GuiGraphics p_281827_,  ResourceLocation p_281637_,  int p_282126_,  int p_281693_,  int p_281565_)`
- `public static void draw(GuiGraphics p_283244_,  ResourceLocation p_281495_,  int p_282035_,  int p_282441_,  int p_281801_,  boolean p_283149_,  boolean p_283555_)`
- `private static void drawHat(GuiGraphics p_282228_,  ResourceLocation p_282835_,  int p_282585_,  int p_282234_,  int p_282576_,  boolean p_281523_)`

## PlayerSkinWidget

*class* `net.minecraft.client.gui.components.PlayerSkinWidget`

### Fields
- `private static final float MODEL_OFFSET` (= 0.0625f)
- `private static final float MODEL_HEIGHT` (= 2.125f)
- `private static final float Z_OFFSET` (= 100.0f)
- `private static final float ROTATION_SENSITIVITY` (= 2.5f)
- `private static final float DEFAULT_ROTATION_X` (= -5.0f)
- `private static final float DEFAULT_ROTATION_Y` (= 30.0f)
- `private static final float ROTATION_X_LIMIT` (= 50.0f)
- `private final PlayerSkinWidget.Model model`
- `private final Supplier<PlayerSkin> skin`
- `private float rotationX`
- `private float rotationY`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void renderWidget(GuiGraphics p_298610_,  int p_299860_,  int p_299420_,  float p_300463_)`
- `protected void onDrag(double p_301243_,  double p_297441_,  double p_301242_,  double p_297777_)`
- `public void playDownSound(SoundManager p_299795_)`
- `protected void updateWidgetNarration(NarrationElementOutput p_298811_)`
- `public boolean isActive()`
- `@Nullable public ComponentPath nextFocusPath(FocusNavigationEvent p_300388_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `onClick`, `onRelease`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyPressed`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## PlayerSkinWidget.Model

*record* `net.minecraft.client.gui.components.PlayerSkinWidget.Model`

Enclosing class: PlayerSkinWidget

### Fields
- `private final PlayerModel<?> wideModel`
  The field for the wideModel record component.
- `private final PlayerModel<?> slimModel`
  The field for the slimModel record component.

### Methods
- `public static PlayerSkinWidget.Model bake(EntityModelSet p_300414_)`
- `public void render(GuiGraphics p_299673_,  PlayerSkin p_297884_)`
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
- `public PlayerModel<?> wideModel()`
  Returns the value of the wideModel record component.
  - returns: the value of the wideModel record component
- `public PlayerModel<?> slimModel()`
  Returns the value of the slimModel record component.
  - returns: the value of the slimModel record component

## PlayerTabOverlay

*class* `net.minecraft.client.gui.components.PlayerTabOverlay`

### Fields
- `private static final ResourceLocation PING_UNKNOWN_SPRITE`
- `private static final ResourceLocation PING_1_SPRITE`
- `private static final ResourceLocation PING_2_SPRITE`
- `private static final ResourceLocation PING_3_SPRITE`
- `private static final ResourceLocation PING_4_SPRITE`
- `private static final ResourceLocation PING_5_SPRITE`
- `private static final ResourceLocation HEART_CONTAINER_BLINKING_SPRITE`
- `private static final ResourceLocation HEART_CONTAINER_SPRITE`
- `private static final ResourceLocation HEART_FULL_BLINKING_SPRITE`
- `private static final ResourceLocation HEART_HALF_BLINKING_SPRITE`
- `private static final ResourceLocation HEART_ABSORBING_FULL_BLINKING_SPRITE`
- `private static final ResourceLocation HEART_FULL_SPRITE`
- `private static final ResourceLocation HEART_ABSORBING_HALF_BLINKING_SPRITE`
- `private static final ResourceLocation HEART_HALF_SPRITE`
- `private static final Comparator<PlayerInfo> PLAYER_COMPARATOR`
- `public static final int MAX_ROWS_PER_COL` (= 20)
- `private final Minecraft minecraft`
- `private final Gui gui`
- `@Nullable private Component footer`
- `@Nullable private Component header`
- `private boolean visible`
- `private final Map<UUID,PlayerTabOverlay.HealthState> healthStates`

### Methods
- `public Component getNameForDisplay(PlayerInfo p_94550_)`
- `private Component decorateName(PlayerInfo p_94552_,  MutableComponent p_94553_)`
- `public void setVisible(boolean p_94557_)`
- `private List<PlayerInfo> getPlayerInfos()`
- `public void render(GuiGraphics p_281484_,  int p_283602_,  Scoreboard p_282338_,  @Nullable  Objective p_282369_)`
- `protected void renderPingIcon(GuiGraphics p_283286_,  int p_281809_,  int p_282801_,  int p_282223_,  PlayerInfo p_282986_)`
- `private void renderTablistScore(Objective p_283381_,  int p_282557_,  String p_283058_,  int p_283533_,  int p_281254_,  UUID p_283099_,  GuiGraphics p_282280_)`
- `private void renderTablistHearts(int p_282904_,  int p_283173_,  int p_282149_,  UUID p_283348_,  GuiGraphics p_281723_,  int p_281354_)`
- `public void setFooter(@Nullable  Component p_94555_)`
- `public void setHeader(@Nullable  Component p_94559_)`
- `public void reset()`

## PlayerTabOverlay.HealthState

*class* `net.minecraft.client.gui.components.PlayerTabOverlay.HealthState`

Enclosing class: PlayerTabOverlay

### Fields
- `private static final long DISPLAY_UPDATE_DELAY` (= 20L)
- `private static final long DECREASE_BLINK_DURATION` (= 20L)
- `private static final long INCREASE_BLINK_DURATION` (= 10L)
- `private int lastValue`
- `private int displayedValue`
- `private long lastUpdateTick`
- `private long blinkUntilTick`

### Methods
- `public void update(int p_251066_,  long p_251460_)`
- `public int displayedValue()`
- `public boolean isBlinking(long p_251847_)`

## Renderable

*interface* `net.minecraft.client.gui.components.Renderable`

### Methods
- `void render(GuiGraphics p_281245_,  int p_253973_,  int p_254325_,  float p_254004_)`

## SplashRenderer

*class* `net.minecraft.client.gui.components.SplashRenderer`

### Fields
- `public static final SplashRenderer CHRISTMAS`
- `public static final SplashRenderer NEW_YEAR`
- `public static final SplashRenderer HALLOWEEN`
- `private static final int WIDTH_OFFSET` (= 123)
- `private static final int HEIGH_OFFSET` (= 69)
- `private final String splash`

### Methods
- `public void render(GuiGraphics p_282218_,  int p_281824_,  Font p_281962_,  int p_282586_)`

## SpriteIconButton

*class* `net.minecraft.client.gui.components.SpriteIconButton`

### Fields
- `protected final ResourceLocation sprite`
- `protected final int spriteWidth`
- `protected final int spriteHeight`

### Inherited fields
- from `net.minecraft.client.gui.components.Button`: `createNarration`, `DEFAULT_HEIGHT`, `DEFAULT_NARRATION`, `DEFAULT_WIDTH`, `onPress`, `SMALL_WIDTH`
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public static SpriteIconButton.Builder builder(Component p_299964_,  Button.OnPress p_301369_,  boolean p_298501_)`

### Inherited methods
- from `net.minecraft.client.gui.components.Button`: `builder`, `createNarrationMessage`, `onPress`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`, `renderString`, `renderWidget`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## SpriteIconButton.Builder

*class* `net.minecraft.client.gui.components.SpriteIconButton.Builder`

Enclosing class: SpriteIconButton

### Fields
- `private final Component message`
- `private final Button.OnPress onPress`
- `private final boolean iconOnly`
- `private int width`
- `private int height`
- `@Nullable private ResourceLocation sprite`
- `private int spriteWidth`
- `private int spriteHeight`

### Methods
- `public SpriteIconButton.Builder width(int p_298805_)`
- `public SpriteIconButton.Builder size(int p_301312_,  int p_297726_)`
- `public SpriteIconButton.Builder sprite(ResourceLocation p_298738_,  int p_301308_,  int p_297593_)`
- `public SpriteIconButton build()`

## SpriteIconButton.CenteredIcon

*class* `net.minecraft.client.gui.components.SpriteIconButton.CenteredIcon`

Enclosing class: SpriteIconButton

### Inherited fields
- from `net.minecraft.client.gui.components.SpriteIconButton`: `sprite`, `spriteHeight`, `spriteWidth`
- from `net.minecraft.client.gui.components.Button`: `createNarration`, `DEFAULT_HEIGHT`, `DEFAULT_NARRATION`, `DEFAULT_WIDTH`, `onPress`, `SMALL_WIDTH`
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void renderWidget(GuiGraphics p_299781_,  int p_297898_,  int p_300476_,  float p_300735_)`
- `public void renderString(GuiGraphics p_300547_,  Font p_301253_,  int p_299879_)`

### Inherited methods
- from `net.minecraft.client.gui.components.SpriteIconButton`: `builder`
- from `net.minecraft.client.gui.components.Button`: `builder`, `createNarrationMessage`, `onPress`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## SpriteIconButton.TextAndIcon

*class* `net.minecraft.client.gui.components.SpriteIconButton.TextAndIcon`

Enclosing class: SpriteIconButton

### Inherited fields
- from `net.minecraft.client.gui.components.SpriteIconButton`: `sprite`, `spriteHeight`, `spriteWidth`
- from `net.minecraft.client.gui.components.Button`: `createNarration`, `DEFAULT_HEIGHT`, `DEFAULT_NARRATION`, `DEFAULT_WIDTH`, `onPress`, `SMALL_WIDTH`
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void renderWidget(GuiGraphics p_299610_,  int p_301138_,  int p_298092_,  float p_300832_)`
- `public void renderString(GuiGraphics p_297951_,  Font p_300566_,  int p_298347_)`

### Inherited methods
- from `net.minecraft.client.gui.components.SpriteIconButton`: `builder`
- from `net.minecraft.client.gui.components.Button`: `builder`, `createNarrationMessage`, `onPress`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## StateSwitchingButton

*class* `net.minecraft.client.gui.components.StateSwitchingButton`

### Fields
- `@Nullable protected WidgetSprites sprites`
- `protected boolean isStateTriggered`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void initTextureValues(WidgetSprites p_297788_)`
- `public void setStateTriggered(boolean p_94636_)`
- `public boolean isStateTriggered()`
- `public void updateWidgetNarration(NarrationElementOutput p_259073_)`
- `public void renderWidget(GuiGraphics p_283051_,  int p_283010_,  int p_281379_,  float p_283453_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onClick`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyPressed`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## StringWidget

*class* `net.minecraft.client.gui.components.StringWidget`

### Fields
- `private float alignX`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public StringWidget setColor(int p_270680_)`
- `private StringWidget horizontalAlignment(float p_267947_)`
- `public StringWidget alignLeft()`
- `public StringWidget alignCenter()`
- `public StringWidget alignRight()`
- `public void renderWidget(GuiGraphics p_281367_,  int p_268221_,  int p_268001_,  float p_268214_)`
- `private FormattedCharSequence clipText(Component p_301164_,  int p_298237_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractStringWidget`: `getColor`, `getFont`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onClick`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyPressed`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## SubtitleOverlay

*class* `net.minecraft.client.gui.components.SubtitleOverlay`

### Fields
- `private static final long DISPLAY_TIME` (= 3000L)
- `private final Minecraft minecraft`
- `private final List<SubtitleOverlay.Subtitle> subtitles`
- `private boolean isListening`

### Methods
- `public void render(GuiGraphics p_282562_)`
- `public void onPlaySound(SoundInstance p_94645_,  WeighedSoundEvents p_94646_)`

## SubtitleOverlay.Subtitle

*class* `net.minecraft.client.gui.components.SubtitleOverlay.Subtitle`

Enclosing class: SubtitleOverlay

### Fields
- `private final Component text`
- `private long time`
- `private Vec3 location`

### Methods
- `public Component getText()`
- `public long getTime()`
- `public Vec3 getLocation()`
- `public void refresh(Vec3 p_94657_)`

## TabButton

*class* `net.minecraft.client.gui.components.TabButton`

### Fields
- `private static final WidgetSprites SPRITES`
- `private static final int SELECTED_OFFSET` (= 3)
- `private static final int TEXT_MARGIN` (= 1)
- `private static final int UNDERLINE_HEIGHT` (= 1)
- `private static final int UNDERLINE_MARGIN_X` (= 4)
- `private static final int UNDERLINE_MARGIN_BOTTOM` (= 2)
- `private final TabManager tabManager`
- `private final Tab tab`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void renderWidget(GuiGraphics p_283350_,  int p_283437_,  int p_281595_,  float p_282117_)`
- `public void renderString(GuiGraphics p_282917_,  Font p_275208_,  int p_275293_)`
- `private void renderFocusUnderline(GuiGraphics p_282383_,  Font p_275475_,  int p_275367_)`
- `protected void updateWidgetNarration(NarrationElementOutput p_275465_)`
- `public void playDownSound(SoundManager p_276302_)`
- `public Tab tab()`
- `public boolean isSelected()`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onClick`, `onDrag`, `onRelease`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyPressed`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## TabOrderedElement

*interface* `net.minecraft.client.gui.components.TabOrderedElement`

### Methods
- `default int getTabOrderGroup()`

## Tooltip

*class* `net.minecraft.client.gui.components.Tooltip`

### Fields
- `private static final int MAX_WIDTH` (= 170)
- `private final Component message`
- `@Nullable private List<FormattedCharSequence> cachedTooltip`
- `@Nullable private final Component narration`

### Methods
- `public static Tooltip create(Component p_259571_,  @Nullable  Component p_259174_)`
- `public static Tooltip create(Component p_259142_)`
- `public void updateNarration(NarrationElementOutput p_260330_)`
- `public List<FormattedCharSequence> toCharSequence(Minecraft p_260243_)`
- `public static List<FormattedCharSequence> splitTooltip(Minecraft p_259133_,  Component p_260172_)`

## WidgetSprites

*record* `net.minecraft.client.gui.components.WidgetSprites`

### Fields
- `private final ResourceLocation enabled`
  The field for the enabled record component.
- `private final ResourceLocation disabled`
  The field for the disabled record component.
- `private final ResourceLocation enabledFocused`
  The field for the enabledFocused record component.
- `private final ResourceLocation disabledFocused`
  The field for the disabledFocused record component.

### Methods
- `public ResourceLocation get(boolean p_299771_,  boolean p_299716_)`
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
- `public ResourceLocation enabled()`
  Returns the value of the enabled record component.
  - returns: the value of the enabled record component
- `public ResourceLocation disabled()`
  Returns the value of the disabled record component.
  - returns: the value of the disabled record component
- `public ResourceLocation enabledFocused()`
  Returns the value of the enabledFocused record component.
  - returns: the value of the enabledFocused record component
- `public ResourceLocation disabledFocused()`
  Returns the value of the disabledFocused record component.
  - returns: the value of the disabledFocused record component
