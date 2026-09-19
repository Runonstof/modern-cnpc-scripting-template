# com.mojang.realmsclient

- [Class RealmsAvailability.Type](#class-realmsavailability.type)
- [Class RealmsMainScreen.LayoutState](#class-realmsmainscreen.layoutstate)
- [Class Unit](#class-unit)
- [RealmsAvailability](#realmsavailability)
- [RealmsAvailability.Result](#realmsavailability.result)
- [RealmsMainScreen](#realmsmainscreen)
- [RealmsMainScreen.ButtonEntry](#realmsmainscreen.buttonentry)
- [RealmsMainScreen.CrossButton](#realmsmainscreen.crossbutton)
- [RealmsMainScreen.EmptyEntry](#realmsmainscreen.emptyentry)
- [RealmsMainScreen.Entry](#realmsmainscreen.entry)
- [RealmsMainScreen.NotificationButton](#realmsmainscreen.notificationbutton)
- [RealmsMainScreen.NotificationMessageEntry](#realmsmainscreen.notificationmessageentry)
- [RealmsMainScreen.RealmsCall](#realmsmainscreen.realmscall)
- [RealmsMainScreen.RealmSelectionList](#realmsmainscreen.realmselectionlist)
- [RealmsMainScreen.ServerEntry](#realmsmainscreen.serverentry)
## Class RealmsAvailability.Type

*enum* `com.mojang.realmsclient.Class RealmsAvailability.Type`

Enclosing class: RealmsAvailability

### Methods
- `public static RealmsAvailability.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RealmsAvailability.Type valueOf(String name)`
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

## Class RealmsMainScreen.LayoutState

*enum* `com.mojang.realmsclient.Class RealmsMainScreen.LayoutState`

Enclosing class: RealmsMainScreen

### Methods
- `public static RealmsMainScreen.LayoutState[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RealmsMainScreen.LayoutState valueOf(String name)`
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

## Class Unit

*enum* `com.mojang.realmsclient.Class Unit`

### Fields
- `private static final int BASE_UNIT`

### Methods
- `public static Unit[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Unit valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static Unit getLargest(long p_86941_)`
- `public static double convertTo(long p_86943_,  Unit p_86944_)`
- `public static String humanReadable(long p_86946_)`
- `public static String humanReadable(long p_86948_,  Unit p_86949_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## RealmsAvailability

*class* `com.mojang.realmsclient.RealmsAvailability`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `@Nullable private static CompletableFuture<RealmsAvailability.Result> future`

### Methods
- `public static CompletableFuture<RealmsAvailability.Result> get()`
- `private static boolean shouldRefresh(CompletableFuture<RealmsAvailability.Result> p_299038_)`
- `private static CompletableFuture<RealmsAvailability.Result> check()`

## RealmsAvailability.Result

*record* `com.mojang.realmsclient.RealmsAvailability.Result`

Enclosing class: RealmsAvailability

### Fields
- `private final RealmsAvailability.Type type`
  The field for the type record component.
- `@Nullable private final RealmsServiceException exception`
  The field for the exception record component.

### Methods
- `@Nullable public Screen createErrorScreen(Screen p_299167_)`
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
- `public RealmsAvailability.Type type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `@Nullable public RealmsServiceException exception()`
  Returns the value of the exception record component.
  - returns: the value of the exception record component

## RealmsMainScreen

*class* `com.mojang.realmsclient.RealmsMainScreen`

### Fields
- `static final ResourceLocation INFO_SPRITE`
- `static final ResourceLocation NEW_REALM_SPRITE`
- `static final ResourceLocation EXPIRED_SPRITE`
- `static final ResourceLocation EXPIRES_SOON_SPRITE`
- `static final ResourceLocation OPEN_SPRITE`
- `static final ResourceLocation CLOSED_SPRITE`
- `private static final ResourceLocation INVITE_SPRITE`
- `private static final ResourceLocation NEWS_SPRITE`
- `static final org.slf4j.Logger LOGGER`
- `private static final ResourceLocation LOGO_LOCATION`
- `private static final ResourceLocation NO_REALMS_LOCATION`
- `private static final Component TITLE`
- `private static final Component LOADING_TEXT`
- `static final Component SERVER_UNITIALIZED_TEXT`
- `static final Component SUBSCRIPTION_EXPIRED_TEXT`
- `private static final Component SUBSCRIPTION_RENEW_TEXT`
- `static final Component TRIAL_EXPIRED_TEXT`
- `static final Component SELECT_MINIGAME_PREFIX`
- `private static final Component PLAY_TEXT`
- `private static final Component LEAVE_SERVER_TEXT`
- `private static final Component CONFIGURE_SERVER_TEXT`
- `static final Component SERVER_EXPIRED_TOOLTIP`
- `static final Component SERVER_EXPIRES_SOON_TOOLTIP`
- `static final Component SERVER_EXPIRES_IN_DAY_TOOLTIP`
- `static final Component SERVER_OPEN_TOOLTIP`
- `static final Component SERVER_CLOSED_TOOLTIP`
- `static final Component UNITIALIZED_WORLD_NARRATION`
- `private static final Component NO_REALMS_TEXT`
- `private static final Tooltip NO_PENDING_INVITES`
- `private static final Tooltip PENDING_INVITES`
- `private static final int BUTTON_WIDTH` (= 100)
- `private static final int BUTTON_COLUMNS` (= 3)
- `private static final int BUTTON_SPACING` (= 4)
- `private static final int CONTENT_WIDTH` (= 308)
- `private static final int LOGO_WIDTH` (= 128)
- `private static final int LOGO_HEIGHT` (= 34)
- `private static final int LOGO_TEXTURE_WIDTH` (= 128)
- `private static final int LOGO_TEXTURE_HEIGHT` (= 64)
- `private static final int LOGO_PADDING` (= 5)
- `private static final int HEADER_HEIGHT` (= 44)
- `private static final int FOOTER_PADDING` (= 10)
- `private static final int ENTRY_WIDTH` (= 216)
- `private static final int ITEM_HEIGHT` (= 36)
- `private final CompletableFuture<RealmsAvailability.Result> availability`
- `@Nullable private DataFetcher.Subscription dataSubscription`
- `private final Set<UUID> handledSeenNotifications`
- `private static boolean regionsPinged`
- `private final com.google.common.util.concurrent.RateLimiter inviteNarrationLimiter`
- `private final Screen lastScreen`
- `private Button playButton`
- `private Button backButton`
- `private Button renewButton`
- `private Button configureButton`
- `private Button leaveButton`
- `private RealmsMainScreen.RealmSelectionList realmSelectionList`
- `private RealmsServerList serverList`
- `private volatile boolean trialsAvailable`
- `@Nullable private volatile String newsLink`
- `long lastClickTime`
- `private final List<RealmsNotification> notifications`
- `private Button addRealmButton`
- `private RealmsMainScreen.NotificationButton pendingInvitesButton`
- `private RealmsMainScreen.NotificationButton newsButton`
- `private RealmsMainScreen.LayoutState activeLayoutState`
- `@Nullable private HeaderAndFooterLayout layout`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `protected void repositionElements()`
- `private void updateLayout(RealmsMainScreen.LayoutState p_297284_)`
- `private HeaderAndFooterLayout createLayout(RealmsMainScreen.LayoutState p_299759_)`
- `private Layout createHeader()`
- `private Layout createFooter(RealmsMainScreen.LayoutState p_299205_)`
- `private LinearLayout createNoRealmsContent()`
- `void updateButtonStates()`
- `boolean shouldPlayButtonBeActive(@Nullable  RealmsServer p_86563_)`
- `private boolean shouldRenewButtonBeActive(@Nullable  RealmsServer p_86595_)`
- `private boolean shouldConfigureButtonBeActive(@Nullable  RealmsServer p_86620_)`
- `private boolean shouldLeaveButtonBeActive(@Nullable  RealmsServer p_86645_)`
- `public void tick()`
- `public static void refreshPendingInvites()`
- `public void refreshServerList()`
- `private DataFetcher.Subscription initDataFetcher(RealmsDataFetcher p_238836_)`
- `private static <T> void callRealmsClient(RealmsMainScreen.RealmsCall<T> p_275561_,  Consumer<T> p_275686_)`
- `private void refreshRealmsSelectionList()`
- `private void addEntriesForNotification(RealmsMainScreen.RealmSelectionList p_275392_,  RealmsNotification p_275492_)`
- `private void pingRegions()`
- `private List<Long> getOwnedNonExpiredWorldIds()`
- `private void onRenew(@Nullable  RealmsServer p_193500_)`
- `private void configureClicked(@Nullable  RealmsServer p_86657_)`
- `private void leaveClicked(@Nullable  RealmsServer p_86670_)`
- `@Nullable private RealmsServer getSelectedServer()`
- `private void leaveServer(boolean p_193494_,  RealmsServer p_193495_)`
- `void removeServer(RealmsServer p_86677_)`
- `void dismissNotification(UUID p_275349_)`
- `public void resetScreen()`
- `public Component getNarrationMessage()`
- `public void render(GuiGraphics p_282736_,  int p_283347_,  int p_282480_,  float p_283485_)`
- `private void openTrialAvailablePopup()`
- `public static void play(@Nullable  RealmsServer p_86516_,  Screen p_86517_)`
- `boolean isSelfOwnedServer(RealmsServer p_86684_)`
- `private boolean isSelfOwnedNonExpiredServer(RealmsServer p_86689_)`
- `private void renderEnvironment(GuiGraphics p_298843_,  String p_299597_,  int p_300122_)`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsMainScreen.ButtonEntry

*class* `com.mojang.realmsclient.RealmsMainScreen.ButtonEntry`

Enclosing class: RealmsMainScreen

### Fields
- `private final Button button`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public boolean mouseClicked(double p_275240_,  double p_275616_,  int p_275528_)`
- `public boolean keyPressed(int p_275630_,  int p_275328_,  int p_275519_)`
- `public void render(GuiGraphics p_283542_,  int p_282029_,  int p_281480_,  int p_281377_,  int p_283160_,  int p_281920_,  int p_283267_,  int p_281282_,  boolean p_281269_,  float p_282372_)`
- `public Component getNarration()`

### Inherited methods
- from `com.mojang.realmsclient.RealmsMainScreen.Entry`: `getServer`
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyReleased`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsMainScreen.CrossButton

*class* `com.mojang.realmsclient.RealmsMainScreen.CrossButton`

Enclosing class: RealmsMainScreen

### Fields
- `private static final WidgetSprites SPRITES`

### Inherited fields
- from `net.minecraft.client.gui.components.ImageButton`: `sprites`
- from `net.minecraft.client.gui.components.Button`: `createNarration`, `DEFAULT_HEIGHT`, `DEFAULT_NARRATION`, `DEFAULT_WIDTH`, `onPress`, `SMALL_WIDTH`
- from `net.minecraft.client.gui.components.AbstractButton`: `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Inherited methods
- from `net.minecraft.client.gui.components.ImageButton`: `renderWidget`
- from `net.minecraft.client.gui.components.Button`: `builder`, `createNarrationMessage`, `onPress`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`, `renderString`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## RealmsMainScreen.EmptyEntry

*class* `com.mojang.realmsclient.RealmsMainScreen.EmptyEntry`

Enclosing class: RealmsMainScreen

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_301870_,  int p_301858_,  int p_301868_,  int p_301866_,  int p_301860_,  int p_301859_,  int p_301864_,  int p_301865_,  boolean p_301869_,  float p_301861_)`
- `public Component getNarration()`

### Inherited methods
- from `com.mojang.realmsclient.RealmsMainScreen.Entry`: `getServer`
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseClicked`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsMainScreen.Entry

*class* `com.mojang.realmsclient.RealmsMainScreen.Entry`

Enclosing class: RealmsMainScreen

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `@Nullable public RealmsServer getServer()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `getNarration`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `render`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseClicked`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsMainScreen.NotificationButton

*class* `com.mojang.realmsclient.RealmsMainScreen.NotificationButton`

Enclosing class: RealmsMainScreen

### Fields
- `private static final ResourceLocation[] NOTIFICATION_ICONS`
- `private static final int UNKNOWN_COUNT` (= 2147483647)
- `private static final int SIZE` (= 20)
- `private static final int SPRITE_SIZE` (= 14)
- `private int notificationCount`

### Inherited fields
- from `net.minecraft.client.gui.components.SpriteIconButton`: `sprite`, `spriteHeight`, `spriteWidth`
- from `net.minecraft.client.gui.components.Button`: `createNarration`, `DEFAULT_HEIGHT`, `DEFAULT_NARRATION`, `DEFAULT_WIDTH`, `onPress`, `SMALL_WIDTH`
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `int notificationCount()`
- `public void setNotificationCount(int p_300462_)`
- `public void renderWidget(GuiGraphics p_301337_,  int p_300699_,  int p_300272_,  float p_300587_)`
- `private void drawNotificationCounter(GuiGraphics p_301365_)`

### Inherited methods
- from `net.minecraft.client.gui.components.SpriteIconButton.CenteredIcon`: `renderString`
- from `net.minecraft.client.gui.components.SpriteIconButton`: `builder`
- from `net.minecraft.client.gui.components.Button`: `builder`, `createNarrationMessage`, `onPress`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## RealmsMainScreen.NotificationMessageEntry

*class* `com.mojang.realmsclient.RealmsMainScreen.NotificationMessageEntry`

Enclosing class: RealmsMainScreen

### Fields
- `private static final int SIDE_MARGINS` (= 40)
- `private static final int OUTLINE_COLOR` (= -12303292)
- `private final Component text`
- `private final int frameItemHeight`
- `private final List<AbstractWidget> children`
- `@Nullable private final RealmsMainScreen.CrossButton dismissButton`
- `private final MultiLineTextWidget textWidget`
- `private final GridLayout gridLayout`
- `private final FrameLayout textFrame`
- `private int lastEntryWidth`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public boolean keyPressed(int p_275646_,  int p_275453_,  int p_275621_)`
- `private void updateEntryWidth(int p_275670_)`
- `private void refreshLayout(int p_275267_)`
- `public void renderBack(GuiGraphics p_281374_,  int p_282622_,  int p_283656_,  int p_281830_,  int p_281651_,  int p_283685_,  int p_281784_,  int p_282510_,  boolean p_283146_,  float p_283324_)`
- `public void render(GuiGraphics p_281768_,  int p_275375_,  int p_275358_,  int p_275447_,  int p_275694_,  int p_275477_,  int p_275710_,  int p_275677_,  boolean p_275542_,  float p_275323_)`
- `public boolean mouseClicked(double p_275209_,  double p_275338_,  int p_275560_)`
- `public Component getNarration()`

### Inherited methods
- from `com.mojang.realmsclient.RealmsMainScreen.Entry`: `getServer`
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyReleased`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsMainScreen.RealmsCall

*interface* `com.mojang.realmsclient.RealmsMainScreen.RealmsCall`

Enclosing class: RealmsMainScreen

### Methods
- `T request(RealmsClient p_275639_)  throws RealmsServiceException`
  - throws: RealmsServiceException

## RealmsMainScreen.RealmSelectionList

*class* `com.mojang.realmsclient.RealmsMainScreen.RealmSelectionList`

Enclosing class: RealmsMainScreen

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void setSelected(@Nullable  RealmsMainScreen.Entry p_86849_)`
- `public int getMaxPosition()`
- `public int getRowWidth()`

### Inherited methods
- from `net.minecraft.realms.RealmsObjectSelectionList`: `addEntry`, `clear`, `getItemCount`, `getRowLeft`, `getRowTop`, `getScrollbarPosition`, `replaceEntries`, `selectItem`, `setSelectedItem`
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getLeft`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowRight`, `getScrollAmount`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsMainScreen.ServerEntry

*class* `com.mojang.realmsclient.RealmsMainScreen.ServerEntry`

Enclosing class: RealmsMainScreen

### Fields
- `private static final int SKIN_HEAD_LARGE_WIDTH` (= 36)
- `private final RealmsServer serverData`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_283093_,  int p_281645_,  int p_283047_,  int p_283525_,  int p_282321_,  int p_282391_,  int p_281913_,  int p_282475_,  boolean p_282378_,  float p_282843_)`
- `private void playRealm()`
- `private void createUnitializedRealm()`
- `public boolean mouseClicked(double p_86858_,  double p_86859_,  int p_86860_)`
- `public boolean keyPressed(int p_279120_,  int p_279121_,  int p_279296_)`
- `private void renderStatusLights(RealmsServer p_272798_,  GuiGraphics p_283451_,  int p_273706_,  int p_272591_,  int p_273561_,  int p_273468_,  int p_273073_,  int p_273187_)`
- `private void drawRealmStatus(GuiGraphics p_299970_,  int p_301102_,  int p_298644_,  int p_299797_,  int p_301199_,  ResourceLocation p_297808_,  Supplier<Component> p_299343_)`
- `public Component getNarration()`
- `@Nullable public RealmsServer getServer()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyReleased`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`
