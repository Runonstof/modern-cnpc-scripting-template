# com.mojang.realmsclient.gui

- [Class RealmsWorldSlotButton.Action](#class-realmsworldslotbutton.action)
- [RealmsDataFetcher](#realmsdatafetcher)
- [RealmsNewsManager](#realmsnewsmanager)
- [RealmsServerList](#realmsserverlist)
- [RealmsWorldSlotButton](#realmsworldslotbutton)
- [RealmsWorldSlotButton.State](#realmsworldslotbutton.state)
- [RowButton](#rowbutton)
## Class RealmsWorldSlotButton.Action

*enum* `com.mojang.realmsclient.gui.Class RealmsWorldSlotButton.Action`

Enclosing class: RealmsWorldSlotButton

### Methods
- `public static RealmsWorldSlotButton.Action[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RealmsWorldSlotButton.Action valueOf(String name)`
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

## RealmsDataFetcher

*class* `com.mojang.realmsclient.gui.RealmsDataFetcher`

### Fields
- `public final DataFetcher dataFetcher`
- `public final DataFetcher.Task<List<RealmsNotification>> notificationsTask`
- `public final DataFetcher.Task<List<RealmsServer>> serverListUpdateTask`
- `public final DataFetcher.Task<Integer> pendingInvitesTask`
- `public final DataFetcher.Task<Boolean> trialAvailabilityTask`
- `public final DataFetcher.Task<RealmsNews> newsTask`
- `public final RealmsNewsManager newsManager`

## RealmsNewsManager

*class* `com.mojang.realmsclient.gui.RealmsNewsManager`

### Fields
- `private final RealmsPersistence newsLocalStorage`
- `private boolean hasUnreadNews`
- `private String newsLink`

### Methods
- `public boolean hasUnreadNews()`
- `public String newsLink()`
- `public void updateUnreadNews(RealmsNews p_239191_)`
- `private RealmsPersistence.RealmsPersistenceData updateNewsStorage(RealmsNews p_240153_)`

## RealmsServerList

*class* `com.mojang.realmsclient.gui.RealmsServerList`

### Fields
- `private final Minecraft minecraft`
- `private final Set<RealmsServer> removedServers`
- `private List<RealmsServer> servers`

### Methods
- `public void updateServersList(List<RealmsServer> p_239869_)`
- `public void removeItem(RealmsServer p_240077_)`
- `public Iterator<RealmsServer> iterator()`
- `public boolean isEmpty()`

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `spliterator`

## RealmsWorldSlotButton

*class* `com.mojang.realmsclient.gui.RealmsWorldSlotButton`

### Fields
- `private static final ResourceLocation SLOT_FRAME_SPRITE`
- `private static final ResourceLocation CHECKMARK_SPRITE`
- `public static final ResourceLocation EMPTY_SLOT_LOCATION`
- `public static final ResourceLocation DEFAULT_WORLD_SLOT_1`
- `public static final ResourceLocation DEFAULT_WORLD_SLOT_2`
- `public static final ResourceLocation DEFAULT_WORLD_SLOT_3`
- `private static final Component SLOT_ACTIVE_TOOLTIP`
- `private static final Component SWITCH_TO_MINIGAME_SLOT_TOOLTIP`
- `private static final Component SWITCH_TO_WORLD_SLOT_TOOLTIP`
- `private static final Component MINIGAME`
- `private final Supplier<RealmsServer> serverDataProvider`
- `private final Consumer<Component> toolTipSetter`
- `private final int slotIndex`
- `@Nullable private RealmsWorldSlotButton.State state`

### Inherited fields
- from `net.minecraft.client.gui.components.Button`: `createNarration`, `DEFAULT_HEIGHT`, `DEFAULT_NARRATION`, `DEFAULT_WIDTH`, `onPress`, `SMALL_WIDTH`
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `@Nullable public RealmsWorldSlotButton.State getState()`
- `public void tick()`
- `private static RealmsWorldSlotButton.Action getAction(RealmsServer p_87960_,  boolean p_87961_,  boolean p_87962_)`
- `private com.mojang.datafixers.util.Pair<Component,Component> getTooltipAndNarration(RealmsServer p_87954_,  String p_87955_,  boolean p_87956_,  boolean p_87957_,  RealmsWorldSlotButton.Action p_87958_)`
- `public void renderWidget(GuiGraphics p_282947_,  int p_87965_,  int p_87966_,  float p_87967_)`
- `private void drawSlotFrame(GuiGraphics p_282493_,  int p_282407_,  int p_283212_,  int p_283646_,  int p_283633_,  boolean p_282019_,  String p_283553_,  int p_283521_,  long p_281546_,  @Nullable  String p_283361_,  boolean p_283516_,  boolean p_281611_,  RealmsWorldSlotButton.Action p_281804_,  @Nullable  Component p_282910_)`
- `private void renderCheckMark(GuiGraphics p_281366_,  int p_281849_,  int p_283407_)`

### Inherited methods
- from `net.minecraft.client.gui.components.Button`: `builder`, `createNarrationMessage`, `onPress`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`, `renderString`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## RealmsWorldSlotButton.State

*class* `com.mojang.realmsclient.gui.RealmsWorldSlotButton.State`

Enclosing class: RealmsWorldSlotButton

### Fields
- `final boolean isCurrentlyActiveSlot`
- `final String slotName`
- `final long imageId`
- `@Nullable final String image`
- `public final boolean empty`
- `public final boolean minigame`
- `public final RealmsWorldSlotButton.Action action`
- `@Nullable final Component actionPrompt`

## RowButton

*class* `com.mojang.realmsclient.gui.RowButton`

### Fields
- `public final int width`
- `public final int height`
- `public final int xOffset`
- `public final int yOffset`

### Methods
- `public void drawForRowAt(GuiGraphics p_281584_,  int p_88020_,  int p_88021_,  int p_88022_,  int p_88023_)`
- `protected abstract void draw(GuiGraphics p_281291_,  int p_88025_,  int p_88026_,  boolean p_88027_)`
- `public int getRight()`
- `public int getBottom()`
- `public abstract void onClick(int p_88017_)`
- `public static void drawButtonsInRow(GuiGraphics p_281401_,  List<RowButton> p_283164_,  RealmsObjectSelectionList<?> p_282348_,  int p_282527_,  int p_281326_,  int p_281575_,  int p_282538_)`
- `public static void rowButtonMouseClicked(RealmsObjectSelectionList<?> p_88037_,  ObjectSelectionList.Entry<?> p_88038_,  List<RowButton> p_88039_,  int p_88040_,  double p_88041_,  double p_88042_)`
