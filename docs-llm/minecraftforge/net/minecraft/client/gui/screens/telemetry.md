# net.minecraft.client.gui.screens.telemetry

- [TelemetryEventWidget](#telemetryeventwidget)
- [TelemetryEventWidget.Content](#telemetryeventwidget.content)
- [TelemetryEventWidget.ContentBuilder](#telemetryeventwidget.contentbuilder)
- [TelemetryInfoScreen](#telemetryinfoscreen)
## TelemetryEventWidget

*class* `net.minecraft.client.gui.screens.telemetry.TelemetryEventWidget`

### Fields
- `private static final int HEADER_HORIZONTAL_PADDING` (= 32)
- `private static final String TELEMETRY_REQUIRED_TRANSLATION_KEY` (= "telemetry.event.required")
- `private static final String TELEMETRY_OPTIONAL_TRANSLATION_KEY` (= "telemetry.event.optional")
- `private static final Component PROPERTY_TITLE`
- `private final Font font`
- `private TelemetryEventWidget.Content content`
- `@Nullable private DoubleConsumer onScrolledListener`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void onOptInChanged(boolean p_261772_)`
- `private TelemetryEventWidget.Content buildContent(boolean p_261628_)`
- `public void setOnScrolledListener(@Nullable  DoubleConsumer p_261686_)`
- `protected void setScrollAmount(double p_261736_)`
- `protected int getInnerHeight()`
- `protected double scrollRate()`
- `protected void renderContents(GuiGraphics p_283081_,  int p_283426_,  int p_282414_,  float p_283358_)`
- `protected void updateWidgetNarration(NarrationElementOutput p_261538_)`
- `private void addEventType(TelemetryEventWidget.ContentBuilder p_261823_,  TelemetryEventType p_262127_)`
- `private void addEventTypeProperties(TelemetryEventType p_262105_,  TelemetryEventWidget.ContentBuilder p_261932_)`
- `private int containerWidth()`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractScrollWidget`: `getMaxScrollAmount`, `innerPadding`, `keyPressed`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `renderBackground`, `renderBorder`, `renderDecorations`, `renderWidget`, `scrollAmount`, `scrollbarVisible`, `scrollbarWidth`, `totalInnerPadding`, `withinContentAreaPoint`, `withinContentAreaTopBottom`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `narrationPriority`, `nextFocusPath`, `onClick`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `isFocused`, `isMouseOver`, `keyReleased`, `mouseMoved`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`
- from `net.minecraft.client.gui.components.Renderable`: `render`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## TelemetryEventWidget.Content

*record* `net.minecraft.client.gui.screens.telemetry.TelemetryEventWidget.Content`

Enclosing class: TelemetryEventWidget

### Fields
- `private final Layout container`
  The field for the container record component.
- `private final Component narration`
  The field for the narration record component.

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
- `public Layout container()`
  Returns the value of the container record component.
  - returns: the value of the container record component
- `public Component narration()`
  Returns the value of the narration record component.
  - returns: the value of the narration record component

## TelemetryEventWidget.ContentBuilder

*class* `net.minecraft.client.gui.screens.telemetry.TelemetryEventWidget.ContentBuilder`

Enclosing class: TelemetryEventWidget

### Fields
- `private final int width`
- `private final LinearLayout layout`
- `private final MutableComponent narration`

### Methods
- `public void addLine(Font p_261503_,  Component p_261550_)`
- `public void addLine(Font p_261894_,  Component p_261816_,  int p_261721_)`
- `public void addHeader(Font p_261496_,  Component p_261670_)`
- `public void addSpacer(int p_261997_)`
- `public TelemetryEventWidget.Content build()`

## TelemetryInfoScreen

*class* `net.minecraft.client.gui.screens.telemetry.TelemetryInfoScreen`

### Fields
- `private static final int PADDING` (= 8)
- `private static final Component TITLE`
- `private static final Component DESCRIPTION`
- `private static final Component BUTTON_PRIVACY_STATEMENT`
- `private static final Component BUTTON_GIVE_FEEDBACK`
- `private static final Component BUTTON_SHOW_DATA`
- `private final Screen lastScreen`
- `private final Options options`
- `private TelemetryEventWidget telemetryEventWidget`
- `private double savedScroll`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public Component getNarrationMessage()`
- `protected void init()`
- `private AbstractWidget createTelemetryButton()`
- `private void openLastScreen(Button p_261672_)`
- `private void openPrivacyStatementLink(Button p_297730_)`
- `private void openFeedbackLink(Button p_261531_)`
- `private void openDataFolder(Button p_261840_)`
- `public void onClose()`
- `public void renderBackground(GuiGraphics p_300267_,  int p_300830_,  int p_300478_,  float p_297280_)`
- `private GridLayout twoButtonContainer(AbstractWidget p_265763_,  AbstractWidget p_265710_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `render`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`
