# net.minecraft.client.gui.screens.reporting

- [AbstractReportScreen.DiscardReportWarningScreen](#abstractreportscreen.discardreportwarningscreen)
- [AbstractReportScreen>](#abstractreportscreen)
- [ChatReportScreen](#chatreportscreen)
- [ChatSelectionLogFiller](#chatselectionlogfiller)
- [ChatSelectionLogFiller.Output](#chatselectionlogfiller.output)
- [ChatSelectionScreen](#chatselectionscreen)
- [ChatSelectionScreen.ChatSelectionList](#chatselectionscreen.chatselectionlist)
- [ChatSelectionScreen.ChatSelectionList.DividerEntry](#chatselectionscreen.chatselectionlist.dividerentry)
- [ChatSelectionScreen.ChatSelectionList.Entry](#chatselectionscreen.chatselectionlist.entry)
- [ChatSelectionScreen.ChatSelectionList.Heading](#chatselectionscreen.chatselectionlist.heading)
- [ChatSelectionScreen.ChatSelectionList.MessageEntry](#chatselectionscreen.chatselectionlist.messageentry)
- [ChatSelectionScreen.ChatSelectionList.MessageHeadingEntry](#chatselectionscreen.chatselectionlist.messageheadingentry)
- [ChatSelectionScreen.ChatSelectionList.PaddingEntry](#chatselectionscreen.chatselectionlist.paddingentry)
- [NameReportScreen](#namereportscreen)
- [ReportPlayerScreen](#reportplayerscreen)
- [ReportReasonSelectionScreen](#reportreasonselectionscreen)
- [ReportReasonSelectionScreen.ReasonSelectionList](#reportreasonselectionscreen.reasonselectionlist)
- [ReportReasonSelectionScreen.ReasonSelectionList.Entry](#reportreasonselectionscreen.reasonselectionlist.entry)
- [SkinReportScreen](#skinreportscreen)
## AbstractReportScreen.DiscardReportWarningScreen

*class* `net.minecraft.client.gui.screens.reporting.AbstractReportScreen.DiscardReportWarningScreen`

Enclosing class: AbstractReportScreen<B extends Report.Builder<?>>

### Fields
- `private static final int BUTTON_MARGIN` (= 20)
- `private static final Component TITLE`
- `private static final Component MESSAGE`
- `private static final Component RETURN`
- `private static final Component DRAFT`
- `private static final Component DISCARD`

### Inherited fields
- from `net.minecraft.client.gui.screens.multiplayer.WarningScreen`: `stopShowing`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void initButtons(int p_300335_)`
- `public void onClose()`
- `public boolean shouldCloseOnEsc()`
- `protected void renderTitle(GuiGraphics p_299952_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.multiplayer.WarningScreen`: `getLineHeight`, `getNarrationMessage`, `init`, `render`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## AbstractReportScreen>

*class* `net.minecraft.client.gui.screens.reporting.AbstractReportScreen>`

### Fields
- `private static final Component REPORT_SENT_MESSAGE`
- `private static final Component REPORT_SENDING_TITLE`
- `private static final Component REPORT_SENT_TITLE`
- `private static final Component REPORT_ERROR_TITLE`
- `private static final Component REPORT_SEND_GENERIC_ERROR`
- `protected static final Component SEND_REPORT`
- `protected static final Component OBSERVED_WHAT_LABEL`
- `protected static final Component SELECT_REASON`
- `private static final Component DESCRIBE_PLACEHOLDER`
- `protected static final Component MORE_COMMENTS_LABEL`
- `private static final Component MORE_COMMENTS_NARRATION`
- `protected static final int MARGIN`
- `protected static final int SCREEN_WIDTH`
- `protected static final int SPACING`
- `private static final org.slf4j.Logger LOGGER`
- `protected final Screen lastScreen`
- `protected final ReportingContext reportingContext`
- `protected B extends Report.Builder<?> reportBuilder`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected MultiLineEditBox createCommentBox(int p_297252_,  int p_301025_,  Consumer<String> p_298469_)`
- `protected void sendReport()`
- `private void onReportSendSuccess()`
- `private void onReportSendError(Throwable p_297880_)`
- `private void displayReportSendError(Component p_301245_)`
- `void saveDraft()`
- `void clearDraft()`
- `public void onClose()`
- `public void removed()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `render`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ChatReportScreen

*class* `net.minecraft.client.gui.screens.reporting.ChatReportScreen`

### Fields
- `private static final int BUTTON_WIDTH` (= 120)
- `private static final Component TITLE`
- `private static final Component SELECT_CHAT_MESSAGE`
- `private final LinearLayout layout`
- `private MultiLineEditBox commentBox`
- `private Button sendButton`
- `private Button selectMessagesButton`
- `private Button selectReasonButton`

### Inherited fields
- from `net.minecraft.client.gui.screens.reporting.AbstractReportScreen`: `lastScreen`, `MARGIN`, `MORE_COMMENTS_LABEL`, `OBSERVED_WHAT_LABEL`, `reportBuilder`, `reportingContext`, `SCREEN_WIDTH`, `SELECT_REASON`, `SEND_REPORT`, `SPACING`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `protected void repositionElements()`
- `private void onReportChanged()`
- `public boolean mouseReleased(double p_239350_,  double p_239351_,  int p_239352_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.reporting.AbstractReportScreen`: `clearDraft`, `createCommentBox`, `onClose`, `removed`, `saveDraft`, `sendReport`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `render`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ChatSelectionLogFiller

*class* `net.minecraft.client.gui.screens.reporting.ChatSelectionLogFiller`

### Fields
- `private final ChatLog log`
- `private final ChatReportContextBuilder contextBuilder`
- `private final Predicate<LoggedChatMessage.Player> canReport`
- `@Nullable private SignedMessageLink previousLink`
- `private int eventId`
- `private int missedCount`
- `@Nullable private PlayerChatMessage lastMessage`

### Methods
- `public void fillNextPage(int p_239016_,  ChatSelectionLogFiller.Output p_239017_)`
- `private boolean acceptMessage(ChatSelectionLogFiller.Output p_254300_,  LoggedChatMessage.Player p_253803_)`

## ChatSelectionLogFiller.Output

*interface* `net.minecraft.client.gui.screens.reporting.ChatSelectionLogFiller.Output`

Enclosing class: ChatSelectionLogFiller

### Methods
- `void acceptMessage(int p_239762_,  LoggedChatMessage.Player p_251438_)`
- `void acceptDivider(Component p_239557_)`

## ChatSelectionScreen

*class* `net.minecraft.client.gui.screens.reporting.ChatSelectionScreen`

### Fields
- `static final ResourceLocation CHECKMARK_SPRITE`
- `private static final Component TITLE`
- `private static final Component CONTEXT_INFO`
- `@Nullable private final Screen lastScreen`
- `private final ReportingContext reportingContext`
- `private Button confirmSelectedButton`
- `private MultiLineLabel contextInfoLabel`
- `@Nullable private ChatSelectionScreen.ChatSelectionList chatSelectionList`
- `final ChatReport.Builder report`
- `private final Consumer<ChatReport.Builder> onSelected`
- `private ChatSelectionLogFiller chatLogFiller`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `private boolean canReport(LoggedChatMessage p_242240_)`
- `private void extendLog()`
- `void onReachedScrollTop()`
- `void updateConfirmSelectedButton()`
- `public void render(GuiGraphics p_282899_,  int p_239287_,  int p_239288_,  float p_239289_)`
- `public void renderBackground(GuiGraphics p_298958_,  int p_300571_,  int p_300650_,  float p_300786_)`
- `public void onClose()`
- `public Component getNarrationMessage()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ChatSelectionScreen.ChatSelectionList

*class* `net.minecraft.client.gui.screens.reporting.ChatSelectionScreen.ChatSelectionList`

Enclosing class: ChatSelectionScreen

### Fields
- `@Nullable private ChatSelectionScreen.ChatSelectionList.Heading previousHeading`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void setScrollAmount(double p_239021_)`
- `public void acceptMessage(int p_242846_,  LoggedChatMessage.Player p_242909_)`
- `private void updateHeading(LoggedChatMessage.Player p_242229_,  boolean p_240019_)`
- `public void acceptDivider(Component p_239876_)`
- `protected int getScrollbarPosition()`
- `public int getRowWidth()`
- `public int getMaxVisibleEntries()`
- `protected void renderItem(GuiGraphics p_281532_,  int p_239775_,  int p_239776_,  float p_239777_,  int p_239778_,  int p_239779_,  int p_239780_,  int p_239781_,  int p_239782_)`
- `private boolean shouldHighlightEntry(ChatSelectionScreen.ChatSelectionList.Entry p_240327_)`
- `@Nullable protected ChatSelectionScreen.ChatSelectionList.Entry nextEntry(ScreenDirection p_265203_)`
- `public void setSelected(@Nullable  ChatSelectionScreen.ChatSelectionList.Entry p_265249_)`
- `public boolean keyPressed(int p_239322_,  int p_239323_,  int p_239324_)`
- `public int getFooterTop()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getScrollAmount`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderList`, `renderSelection`, `replaceEntries`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ChatSelectionScreen.ChatSelectionList.DividerEntry

*class* `net.minecraft.client.gui.screens.reporting.ChatSelectionScreen.ChatSelectionList.DividerEntry`

Enclosing class: ChatSelectionScreen.ChatSelectionList

### Fields
- `private static final int COLOR` (= -6250336)
- `private final Component text`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_283635_,  int p_239815_,  int p_239816_,  int p_239817_,  int p_239818_,  int p_239819_,  int p_239820_,  int p_239821_,  boolean p_239822_,  float p_239823_)`
- `public Component getNarration()`

### Inherited methods
- from `net.minecraft.client.gui.screens.reporting.ChatSelectionScreen.ChatSelectionList.Entry`: `canReport`, `canSelect`, `isSelected`
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseClicked`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ChatSelectionScreen.ChatSelectionList.Entry

*class* `net.minecraft.client.gui.screens.reporting.ChatSelectionScreen.ChatSelectionList.Entry`

Enclosing class: ChatSelectionScreen.ChatSelectionList

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public Component getNarration()`
- `public boolean isSelected()`
- `public boolean canSelect()`
- `public boolean canReport()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `render`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseClicked`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ChatSelectionScreen.ChatSelectionList.Heading

*record* `net.minecraft.client.gui.screens.reporting.ChatSelectionScreen.ChatSelectionList.Heading`

Enclosing class: ChatSelectionScreen.ChatSelectionList

### Fields
- `private final UUID sender`
  The field for the sender record component.
- `private final ChatSelectionScreen.ChatSelectionList.Entry entry`
  The field for the entry record component.

### Methods
- `public boolean canCombine(ChatSelectionScreen.ChatSelectionList.Heading p_239748_)`
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
- `public UUID sender()`
  Returns the value of the sender record component.
  - returns: the value of the sender record component
- `public ChatSelectionScreen.ChatSelectionList.Entry entry()`
  Returns the value of the entry record component.
  - returns: the value of the entry record component

## ChatSelectionScreen.ChatSelectionList.MessageEntry

*class* `net.minecraft.client.gui.screens.reporting.ChatSelectionScreen.ChatSelectionList.MessageEntry`

Enclosing class: ChatSelectionScreen.ChatSelectionList

### Fields
- `private static final int CHECKMARK_WIDTH` (= 9)
- `private static final int CHECKMARK_HEIGHT` (= 8)
- `private static final int INDENT_AMOUNT` (= 11)
- `private static final int TAG_MARGIN_LEFT` (= 4)
- `private final int chatId`
- `private final FormattedText text`
- `private final Component narration`
- `@Nullable private final List<FormattedCharSequence> hoverText`
- `@Nullable private final GuiMessageTag.Icon tagIcon`
- `@Nullable private final List<FormattedCharSequence> tagHoverText`
- `private final boolean canReport`
- `private final boolean playerMessage`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_281361_,  int p_239596_,  int p_239597_,  int p_239598_,  int p_239599_,  int p_239600_,  int p_239601_,  int p_239602_,  boolean p_239603_,  float p_239604_)`
- `private void renderTag(GuiGraphics p_281776_,  int p_240566_,  int p_240565_,  int p_240581_,  int p_240614_,  int p_240612_)`
- `private void renderSelectedCheckmark(GuiGraphics p_281342_,  int p_281492_,  int p_283046_,  int p_283458_)`
- `private int getMaximumTextWidth()`
- `private int getTextIndent()`
- `public Component getNarration()`
- `public boolean mouseClicked(double p_239729_,  double p_239730_,  int p_239731_)`
- `public boolean keyPressed(int p_239368_,  int p_239369_,  int p_239370_)`
- `public boolean isSelected()`
- `public boolean canSelect()`
- `public boolean canReport()`
- `private boolean toggleReport()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyReleased`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ChatSelectionScreen.ChatSelectionList.MessageHeadingEntry

*class* `net.minecraft.client.gui.screens.reporting.ChatSelectionScreen.ChatSelectionList.MessageHeadingEntry`

Enclosing class: ChatSelectionScreen.ChatSelectionList

### Fields
- `private static final int FACE_SIZE` (= 12)
- `private final Component heading`
- `private final Supplier<PlayerSkin> skin`
- `private final boolean canReport`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_281320_,  int p_283177_,  int p_282422_,  int p_282017_,  int p_282555_,  int p_283255_,  int p_283682_,  int p_281582_,  boolean p_282259_,  float p_283561_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.reporting.ChatSelectionScreen.ChatSelectionList.Entry`: `canReport`, `canSelect`, `getNarration`, `isSelected`
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseClicked`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ChatSelectionScreen.ChatSelectionList.PaddingEntry

*class* `net.minecraft.client.gui.screens.reporting.ChatSelectionScreen.ChatSelectionList.PaddingEntry`

Enclosing class: ChatSelectionScreen.ChatSelectionList

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_282007_,  int p_240110_,  int p_240111_,  int p_240112_,  int p_240113_,  int p_240114_,  int p_240115_,  int p_240116_,  boolean p_240117_,  float p_240118_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.reporting.ChatSelectionScreen.ChatSelectionList.Entry`: `canReport`, `canSelect`, `getNarration`, `isSelected`
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseClicked`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## NameReportScreen

*class* `net.minecraft.client.gui.screens.reporting.NameReportScreen`

### Fields
- `private static final int BUTTON_WIDTH` (= 120)
- `private static final Component TITLE`
- `private final LinearLayout layout`
- `private MultiLineEditBox commentBox`
- `private Button sendButton`

### Inherited fields
- from `net.minecraft.client.gui.screens.reporting.AbstractReportScreen`: `lastScreen`, `MARGIN`, `MORE_COMMENTS_LABEL`, `OBSERVED_WHAT_LABEL`, `reportBuilder`, `reportingContext`, `SCREEN_WIDTH`, `SELECT_REASON`, `SEND_REPORT`, `SPACING`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `protected void repositionElements()`
- `private void onReportChanged()`
- `public boolean mouseReleased(double p_297585_,  double p_300170_,  int p_297299_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.reporting.AbstractReportScreen`: `clearDraft`, `createCommentBox`, `onClose`, `removed`, `saveDraft`, `sendReport`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `render`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ReportPlayerScreen

*class* `net.minecraft.client.gui.screens.reporting.ReportPlayerScreen`

### Fields
- `private static final Component TITLE`
- `private static final Component MESSAGE`
- `private static final Component REPORT_CHAT`
- `private static final Component REPORT_SKIN`
- `private static final Component REPORT_NAME`
- `private static final int SPACING` (= 6)
- `private final Screen lastScreen`
- `private final ReportingContext context`
- `private final PlayerEntry player`
- `private final LinearLayout layout`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public Component getNarrationMessage()`
- `protected void init()`
- `protected void repositionElements()`
- `public void onClose()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `render`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ReportReasonSelectionScreen

*class* `net.minecraft.client.gui.screens.reporting.ReportReasonSelectionScreen`

### Fields
- `private static final Component REASON_TITLE`
- `private static final Component REASON_DESCRIPTION`
- `private static final Component READ_INFO_LABEL`
- `private static final int FOOTER_HEIGHT` (= 95)
- `private static final int BUTTON_WIDTH` (= 150)
- `private static final int BUTTON_HEIGHT` (= 20)
- `private static final int CONTENT_WIDTH` (= 320)
- `private static final int PADDING` (= 4)
- `@Nullable private final Screen lastScreen`
- `@Nullable private ReportReasonSelectionScreen.ReasonSelectionList reasonSelectionList`
- `@Nullable ReportReason currentlySelectedReason`
- `private final Consumer<ReportReason> onSelectedReason`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void render(GuiGraphics p_282815_,  int p_283039_,  int p_283620_,  float p_281336_)`
- `public void renderBackground(GuiGraphics p_298834_,  int p_299010_,  int p_300733_,  float p_298483_)`
- `private int buttonTop()`
- `private int contentLeft()`
- `private int contentRight()`
- `private int descriptionTop()`
- `private int descriptionBottom()`
- `public void onClose()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ReportReasonSelectionScreen.ReasonSelectionList

*class* `net.minecraft.client.gui.screens.reporting.ReportReasonSelectionScreen.ReasonSelectionList`

Enclosing class: ReportReasonSelectionScreen

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `@Nullable public ReportReasonSelectionScreen.ReasonSelectionList.Entry findEntry(ReportReason p_239168_)`
- `public int getRowWidth()`
- `protected int getScrollbarPosition()`
- `public void setSelected(@Nullable  ReportReasonSelectionScreen.ReasonSelectionList.Entry p_240601_)`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getScrollAmount`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `replaceEntries`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ReportReasonSelectionScreen.ReasonSelectionList.Entry

*class* `net.minecraft.client.gui.screens.reporting.ReportReasonSelectionScreen.ReasonSelectionList.Entry`

Enclosing class: ReportReasonSelectionScreen.ReasonSelectionList

### Fields
- `final ReportReason reason`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_281941_,  int p_281450_,  int p_281781_,  int p_283334_,  int p_283073_,  int p_282523_,  int p_282667_,  int p_281567_,  boolean p_282095_,  float p_283305_)`
- `public Component getNarration()`
- `public boolean mouseClicked(double p_240021_,  double p_240022_,  int p_240023_)`
- `public ReportReason getReason()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## SkinReportScreen

*class* `net.minecraft.client.gui.screens.reporting.SkinReportScreen`

### Fields
- `private static final int BUTTON_WIDTH` (= 120)
- `private static final int SKIN_WIDTH` (= 85)
- `private static final int FORM_WIDTH` (= 178)
- `private static final Component TITLE`
- `private final LinearLayout layout`
- `private MultiLineEditBox commentBox`
- `private Button sendButton`
- `private Button selectReasonButton`

### Inherited fields
- from `net.minecraft.client.gui.screens.reporting.AbstractReportScreen`: `lastScreen`, `MARGIN`, `MORE_COMMENTS_LABEL`, `OBSERVED_WHAT_LABEL`, `reportBuilder`, `reportingContext`, `SCREEN_WIDTH`, `SELECT_REASON`, `SEND_REPORT`, `SPACING`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `protected void repositionElements()`
- `private void onReportChanged()`
- `public boolean mouseReleased(double p_298823_,  double p_297602_,  int p_299980_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.reporting.AbstractReportScreen`: `clearDraft`, `createCommentBox`, `onClose`, `removed`, `saveDraft`, `sendReport`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `render`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`
