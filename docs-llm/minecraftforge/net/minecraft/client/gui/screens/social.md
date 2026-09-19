# net.minecraft.client.gui.screens.social

- [Class SocialInteractionsScreen.Page](#class-socialinteractionsscreen.page)
- [PlayerEntry](#playerentry)
- [PlayerSocialManager](#playersocialmanager)
- [SocialInteractionsPlayerList](#socialinteractionsplayerlist)
- [SocialInteractionsScreen](#socialinteractionsscreen)
## Class SocialInteractionsScreen.Page

*enum* `net.minecraft.client.gui.screens.social.Class SocialInteractionsScreen.Page`

Enclosing class: SocialInteractionsScreen

### Methods
- `public static SocialInteractionsScreen.Page[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SocialInteractionsScreen.Page valueOf(String name)`
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

## PlayerEntry

*class* `net.minecraft.client.gui.screens.social.PlayerEntry`

### Fields
- `private static final ResourceLocation DRAFT_REPORT_SPRITE`
- `private static final int TOOLTIP_DELAY` (= 10)
- `private static final WidgetSprites REPORT_BUTTON_SPRITES`
- `private static final WidgetSprites MUTE_BUTTON_SPRITES`
- `private static final WidgetSprites UNMUTE_BUTTON_SPRITES`
- `private final Minecraft minecraft`
- `private final List<AbstractWidget> children`
- `private final UUID id`
- `private final String playerName`
- `private final Supplier<PlayerSkin> skinGetter`
- `private boolean isRemoved`
- `private boolean hasRecentMessages`
- `private final boolean reportingEnabled`
- `private final boolean hasDraftReport`
- `private final boolean chatReportable`
- `@Nullable private Button hideButton`
- `@Nullable private Button showButton`
- `@Nullable private Button reportButton`
- `private float tooltipHoverTime`
- `private static final Component HIDDEN`
- `private static final Component BLOCKED`
- `private static final Component OFFLINE`
- `private static final Component HIDDEN_OFFLINE`
- `private static final Component BLOCKED_OFFLINE`
- `private static final Component REPORT_DISABLED_TOOLTIP`
- `private static final Component HIDE_TEXT_TOOLTIP`
- `private static final Component SHOW_TEXT_TOOLTIP`
- `private static final Component REPORT_PLAYER_TOOLTIP`
- `private static final int SKIN_SIZE` (= 24)
- `private static final int PADDING` (= 4)
- `public static final int SKIN_SHADE`
- `private static final int CHAT_TOGGLE_ICON_SIZE` (= 20)
- `public static final int BG_FILL`
- `public static final int BG_FILL_REMOVED`
- `public static final int PLAYERNAME_COLOR`
- `public static final int PLAYER_STATUS_COLOR`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private Tooltip createReportButtonTooltip()`
- `public void render(GuiGraphics p_282434_,  int p_283281_,  int p_281503_,  int p_282112_,  int p_282838_,  int p_282747_,  int p_282231_,  int p_282048_,  boolean p_281660_,  float p_283055_)`
- `public List<? extends GuiEventListener> children()`
- `public List<? extends NarratableEntry> narratables()`
- `public String getPlayerName()`
- `public UUID getPlayerId()`
- `public Supplier<PlayerSkin> getSkinGetter()`
- `public void setRemoved(boolean p_100620_)`
- `public boolean isRemoved()`
- `public void setHasRecentMessages(boolean p_240771_)`
- `public boolean hasRecentMessages()`
- `public boolean isChatReportable()`
- `private void onHiddenOrShown(boolean p_100597_,  Component p_100598_)`
- `private void updateHideAndShowButton(boolean p_262638_)`
- `MutableComponent getEntryNarationMessage(MutableComponent p_100595_)`
- `private Component getStatusComponent()`

### Inherited methods
- from `net.minecraft.client.gui.components.ContainerObjectSelectionList.Entry`: `focusPathAtIndex`, `getFocused`, `isDragging`, `mouseClicked`, `nextFocusPath`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getRectangle`, `isMouseOver`, `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## PlayerSocialManager

*class* `net.minecraft.client.gui.screens.social.PlayerSocialManager`

### Fields
- `private final Minecraft minecraft`
- `private final Set<UUID> hiddenPlayers`
- `private final com.mojang.authlib.minecraft.UserApiService service`
- `private final Map<String,UUID> discoveredNamesToUUID`
- `private boolean onlineMode`
- `private CompletableFuture<?> pendingBlockListRefresh`

### Methods
- `public void hidePlayer(UUID p_100681_)`
- `public void showPlayer(UUID p_100683_)`
- `public boolean shouldHideMessageFrom(UUID p_100685_)`
- `public boolean isHidden(UUID p_100687_)`
- `public void startOnlineMode()`
- `public void stopOnlineMode()`
- `public boolean isBlocked(UUID p_100689_)`
- `public Set<UUID> getHiddenPlayers()`
- `public UUID getDiscoveredUUID(String p_100679_)`
- `public void addPlayer(PlayerInfo p_100677_)`
- `public void removePlayer(UUID p_100691_)`

## SocialInteractionsPlayerList

*class* `net.minecraft.client.gui.screens.social.SocialInteractionsPlayerList`

### Fields
- `private final SocialInteractionsScreen socialInteractionsScreen`
- `private final List<PlayerEntry> players`
- `@Nullable private String filter`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void enableScissor(GuiGraphics p_281892_)`
- `public void updatePlayerList(Collection<UUID> p_240798_,  double p_240792_,  boolean p_240829_)`
- `private void addOnlinePlayers(Collection<UUID> p_240813_,  Map<UUID,PlayerEntry> p_240796_)`
- `private void updatePlayersFromChatLog(Map<UUID,PlayerEntry> p_240780_,  boolean p_240827_)`
- `private static Collection<com.mojang.authlib.GameProfile> collectProfilesFromChatLog(ChatLog p_250748_)`
- `private void sortPlayerEntries()`
- `private void updateFiltersAndScroll(Collection<PlayerEntry> p_240809_,  double p_240830_)`
- `private void updateFilteredPlayers()`
- `public void setFilter(String p_100718_)`
- `public boolean isEmpty()`
- `public void addPlayer(PlayerInfo p_100715_,  SocialInteractionsScreen.Page p_100716_)`
- `public void removePlayer(UUID p_100723_)`

### Inherited methods
- from `net.minecraft.client.gui.components.ContainerObjectSelectionList`: `isSelectedItem`, `narrationPriority`, `nextFocusPath`, `setFocused`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getRowWidth`, `getScrollAmount`, `getScrollbarPosition`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `replaceEntries`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `setSelected`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## SocialInteractionsScreen

*class* `net.minecraft.client.gui.screens.social.SocialInteractionsScreen`

### Fields
- `private static final ResourceLocation BACKGROUND_SPRITE`
- `private static final ResourceLocation SEARCH_SPRITE`
- `private static final Component TAB_ALL`
- `private static final Component TAB_HIDDEN`
- `private static final Component TAB_BLOCKED`
- `private static final Component TAB_ALL_SELECTED`
- `private static final Component TAB_HIDDEN_SELECTED`
- `private static final Component TAB_BLOCKED_SELECTED`
- `private static final Component SEARCH_HINT`
- `static final Component EMPTY_SEARCH`
- `private static final Component EMPTY_HIDDEN`
- `private static final Component EMPTY_BLOCKED`
- `private static final Component BLOCKING_HINT`
- `private static final int BG_BORDER_SIZE` (= 8)
- `private static final int BG_WIDTH` (= 236)
- `private static final int SEARCH_HEIGHT` (= 16)
- `private static final int MARGIN_Y` (= 64)
- `public static final int SEARCH_START` (= 72)
- `public static final int LIST_START` (= 88)
- `private static final int IMAGE_WIDTH` (= 238)
- `private static final int BUTTON_HEIGHT` (= 20)
- `private static final int ITEM_HEIGHT` (= 36)
- `SocialInteractionsPlayerList socialInteractionsPlayerList`
- `EditBox searchBox`
- `private String lastSearch`
- `private SocialInteractionsScreen.Page page`
- `private Button allButton`
- `private Button hiddenButton`
- `private Button blockedButton`
- `private Button blockingHintButton`
- `@Nullable private Component serverLabel`
- `private int playerCount`
- `private boolean initialized`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private int windowHeight()`
- `private int listEnd()`
- `private int marginX()`
- `public Component getNarrationMessage()`
- `protected void init()`
- `private void showPage(SocialInteractionsScreen.Page p_100772_)`
- `public void renderBackground(GuiGraphics p_283202_,  int p_299912_,  int p_301406_,  float p_300377_)`
- `public void render(GuiGraphics p_282516_,  int p_100764_,  int p_100765_,  float p_100766_)`
- `public boolean keyPressed(int p_100757_,  int p_100758_,  int p_100759_)`
- `public boolean isPauseScreen()`
- `private void checkSearchStringUpdate(String p_100789_)`
- `private void updateServerLabel(Minecraft p_100768_)`
- `public void onAddPlayer(PlayerInfo p_100776_)`
- `public void onRemovePlayer(UUID p_100780_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`
