# com.mojang.realmsclient.gui.screens

- [Class RealmsLongConfirmationScreen.Type](#class-realmslongconfirmationscreen.type)
- [RealmsBackupInfoScreen](#realmsbackupinfoscreen)
- [RealmsBackupInfoScreen.BackupInfoList](#realmsbackupinfoscreen.backupinfolist)
- [RealmsBackupInfoScreen.BackupInfoListEntry](#realmsbackupinfoscreen.backupinfolistentry)
- [RealmsBackupScreen](#realmsbackupscreen)
- [RealmsBackupScreen.BackupObjectSelectionList](#realmsbackupscreen.backupobjectselectionlist)
- [RealmsBackupScreen.Entry](#realmsbackupscreen.entry)
- [RealmsBrokenWorldScreen](#realmsbrokenworldscreen)
- [RealmsClientOutdatedScreen](#realmsclientoutdatedscreen)
- [RealmsConfigureWorldScreen](#realmsconfigureworldscreen)
- [RealmsConfirmScreen](#realmsconfirmscreen)
- [RealmsCreateRealmScreen](#realmscreaterealmscreen)
- [RealmsDownloadLatestWorldScreen](#realmsdownloadlatestworldscreen)
- [RealmsDownloadLatestWorldScreen.DownloadStatus](#realmsdownloadlatestworldscreen.downloadstatus)
- [RealmsGenericErrorScreen](#realmsgenericerrorscreen)
- [RealmsGenericErrorScreen.ErrorMessage](#realmsgenericerrorscreen.errormessage)
- [RealmsInviteScreen](#realmsinvitescreen)
- [RealmsLongConfirmationScreen](#realmslongconfirmationscreen)
- [RealmsLongRunningMcoTaskScreen](#realmslongrunningmcotaskscreen)
- [RealmsLongRunningMcoTickTaskScreen](#realmslongrunningmcoticktaskscreen)
- [RealmsNotificationsScreen](#realmsnotificationsscreen)
- [RealmsNotificationsScreen.DataFetcherConfiguration](#realmsnotificationsscreen.datafetcherconfiguration)
- [RealmsParentalConsentScreen](#realmsparentalconsentscreen)
- [RealmsPendingInvitesScreen](#realmspendinginvitesscreen)
- [RealmsPendingInvitesScreen.Entry](#realmspendinginvitesscreen.entry)
- [RealmsPendingInvitesScreen.Entry.AcceptRowButton](#realmspendinginvitesscreen.entry.acceptrowbutton)
- [RealmsPendingInvitesScreen.Entry.RejectRowButton](#realmspendinginvitesscreen.entry.rejectrowbutton)
- [RealmsPendingInvitesScreen.PendingInvitationSelectionList](#realmspendinginvitesscreen.pendinginvitationselectionlist)
- [RealmsPlayerScreen](#realmsplayerscreen)
- [RealmsPlayerScreen.Entry](#realmsplayerscreen.entry)
- [RealmsPlayerScreen.InvitedObjectSelectionList](#realmsplayerscreen.invitedobjectselectionlist)
- [RealmsPopupScreen](#realmspopupscreen)
- [RealmsResetNormalWorldScreen](#realmsresetnormalworldscreen)
- [RealmsResetWorldScreen](#realmsresetworldscreen)
- [RealmsResetWorldScreen.FrameButton](#realmsresetworldscreen.framebutton)
- [RealmsSelectFileToUploadScreen](#realmsselectfiletouploadscreen)
- [RealmsSelectFileToUploadScreen.Entry](#realmsselectfiletouploadscreen.entry)
- [RealmsSelectFileToUploadScreen.WorldSelectionList](#realmsselectfiletouploadscreen.worldselectionlist)
- [RealmsSelectWorldTemplateScreen](#realmsselectworldtemplatescreen)
- [RealmsSelectWorldTemplateScreen.Entry](#realmsselectworldtemplatescreen.entry)
- [RealmsSelectWorldTemplateScreen.WorldTemplateObjectSelectionList](#realmsselectworldtemplatescreen.worldtemplateobjectselectionlist)
- [RealmsSettingsScreen](#realmssettingsscreen)
- [RealmsSlotOptionsScreen](#realmsslotoptionsscreen)
- [RealmsSlotOptionsScreen.SettingsSlider](#realmsslotoptionsscreen.settingsslider)
- [RealmsSubscriptionInfoScreen](#realmssubscriptioninfoscreen)
- [RealmsTermsScreen](#realmstermsscreen)
- [RealmsUploadScreen](#realmsuploadscreen)
- [UploadResult](#uploadresult)
- [UploadResult.Builder](#uploadresult.builder)
## Class RealmsLongConfirmationScreen.Type

*enum* `com.mojang.realmsclient.gui.screens.Class RealmsLongConfirmationScreen.Type`

Enclosing class: RealmsLongConfirmationScreen

### Fields
- `public final int colorCode`
- `public final Component text`

### Methods
- `public static RealmsLongConfirmationScreen.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RealmsLongConfirmationScreen.Type valueOf(String name)`
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

## RealmsBackupInfoScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsBackupInfoScreen`

### Fields
- `private static final Component TITLE`
- `private static final Component UNKNOWN`
- `private final Screen lastScreen`
- `final Backup backup`
- `final HeaderAndFooterLayout layout`
- `private RealmsBackupInfoScreen.BackupInfoList backupInfoList`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `protected void repositionElements()`
- `public void onClose()`
- `Component checkForSpecificMetadata(String p_88068_,  String p_88069_)`
- `private Component gameDifficultyMetadata(String p_88074_)`
- `private Component gameModeMetadata(String p_88076_)`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `render`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsBackupInfoScreen.BackupInfoList

*class* `com.mojang.realmsclient.gui.screens.RealmsBackupInfoScreen.BackupInfoList`

Enclosing class: RealmsBackupInfoScreen

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getRowWidth`, `getScrollAmount`, `getScrollbarPosition`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `replaceEntries`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `setSelected`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsBackupInfoScreen.BackupInfoListEntry

*class* `com.mojang.realmsclient.gui.screens.RealmsBackupInfoScreen.BackupInfoListEntry`

Enclosing class: RealmsBackupInfoScreen

### Fields
- `private static final Component TEMPLATE_NAME`
- `private static final Component GAME_DIFFICULTY`
- `private static final Component NAME`
- `private static final Component GAME_SERVER_VERSION`
- `private static final Component UPLOADED`
- `private static final Component ENABLED_PACK`
- `private static final Component DESCRIPTION`
- `private static final Component GAME_MODE`
- `private static final Component SEED`
- `private static final Component WORLD_TYPE`
- `private static final Component UNDEFINED`
- `private final String key`
- `private final String value`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_282911_,  int p_281482_,  int p_283643_,  int p_282795_,  int p_283291_,  int p_282540_,  int p_282181_,  int p_283535_,  boolean p_281916_,  float p_282116_)`
- `private Component translateKey(String p_287652_)`
- `public Component getNarration()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseClicked`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsBackupScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsBackupScreen`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `static final Component RESTORE_TOOLTIP`
- `static final Component HAS_CHANGES_TOOLTIP`
- `private static final Component TITLE`
- `private static final Component NO_BACKUPS_LABEL`
- `private final RealmsConfigureWorldScreen lastScreen`
- `List<Backup> backups`
- `RealmsBackupScreen.BackupObjectSelectionList backupObjectSelectionList`
- `int selectedBackup`
- `private final int slotId`
- `private Button downloadButton`
- `private Button restoreButton`
- `private Button changesButton`
- `Boolean noBackups`
- `final RealmsServer serverData`
- `private static final String UPLOADED_KEY` (= "uploaded")

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `void updateButtonStates()`
- `private boolean shouldChangesButtonBeVisible()`
- `private boolean shouldRestoreButtonBeVisible()`
- `public boolean keyPressed(int p_88133_,  int p_88134_,  int p_88135_)`
- `void restoreClicked(int p_88167_)`
- `private void downloadClicked()`
- `private void downloadWorldData()`
- `private void restore()`
- `public void render(GuiGraphics p_283405_,  int p_282020_,  int p_282404_,  float p_281280_)`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsBackupScreen.BackupObjectSelectionList

*class* `com.mojang.realmsclient.gui.screens.RealmsBackupScreen.BackupObjectSelectionList`

Enclosing class: RealmsBackupScreen

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void addEntry(Backup p_88235_)`
- `public int getRowWidth()`
- `public int getMaxPosition()`
- `public int getScrollbarPosition()`
- `public void selectItem(int p_88225_)`
- `public void selectInviteListItem(int p_88242_)`
- `public void setSelected(@Nullable  RealmsBackupScreen.Entry p_88237_)`

### Inherited methods
- from `net.minecraft.realms.RealmsObjectSelectionList`: `addEntry`, `clear`, `getItemCount`, `getRowLeft`, `getRowTop`, `replaceEntries`, `setSelectedItem`
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getLeft`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowRight`, `getScrollAmount`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsBackupScreen.Entry

*class* `com.mojang.realmsclient.gui.screens.RealmsBackupScreen.Entry`

Enclosing class: RealmsBackupScreen

### Fields
- `private static final int Y_PADDING` (= 2)
- `private static final int X_PADDING` (= 7)
- `private static final WidgetSprites CHANGES_BUTTON_SPRITES`
- `private static final WidgetSprites RESTORE_BUTTON_SPRITES`
- `private final Backup backup`
- `private final List<AbstractWidget> children`
- `@Nullable private ImageButton restoreButton`
- `@Nullable private ImageButton changesButton`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private void populateChangeList(Backup p_279365_)`
- `private void addToChangeList(String p_279195_)`
- `private void addChangesButton()`
- `private void addRestoreButton()`
- `public boolean mouseClicked(double p_279279_,  double p_279118_,  int p_279445_)`
- `public void render(GuiGraphics p_281408_,  int p_281974_,  int p_282495_,  int p_282463_,  int p_281562_,  int p_282782_,  int p_281638_,  int p_283190_,  boolean p_283105_,  float p_282066_)`
- `private String getMediumDatePresentation(Date p_88276_)`
- `public Component getNarration()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsBrokenWorldScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsBrokenWorldScreen`

### Fields
- `private static final ResourceLocation SLOT_FRAME_SPRITE`
- `private static final org.slf4j.Logger LOGGER`
- `private static final int DEFAULT_BUTTON_WIDTH` (= 80)
- `private final Screen lastScreen`
- `@Nullable private RealmsServer serverData`
- `private final long serverId`
- `private final Component[] message`
- `private int leftX`
- `private final List<Integer> slotsThatHasBeenDownloaded`
- `private int animTick`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `public Component getNarrationMessage()`
- `private void addButtons()`
- `public void tick()`
- `public void render(GuiGraphics p_282934_,  int p_88317_,  int p_88318_,  float p_88319_)`
- `private int getFramePositionX(int p_88302_)`
- `private void fetchServerData(long p_88314_)`
- `public void doSwitchOrReset()`
- `private void downloadWorld(int p_88336_)`
- `public void onClose()`
- `private boolean isMinigame()`
- `private void drawSlotFrame(GuiGraphics p_281929_,  int p_283393_,  int p_281553_,  int p_283523_,  int p_282823_,  boolean p_283032_,  String p_283498_,  int p_283330_,  long p_283588_,  @Nullable  String p_282484_,  boolean p_282283_)`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsClientOutdatedScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsClientOutdatedScreen`

### Fields
- `private static final Component INCOMPATIBLE_TITLE`
- `private static final Component[] INCOMPATIBLE_MESSAGES_SNAPSHOT`
- `private static final Component[] INCOMPATIBLE_MESSAGES`
- `private final Screen lastScreen`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `public void render(GuiGraphics p_283142_,  int p_88374_,  int p_88375_,  float p_88376_)`
- `private Component[] getMessages()`
- `public boolean keyPressed(int p_88369_,  int p_88370_,  int p_88371_)`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsConfigureWorldScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsConfigureWorldScreen`

### Fields
- `private static final ResourceLocation EXPIRED_SPRITE`
- `private static final ResourceLocation EXPIRES_SOON_SPRITE`
- `private static final ResourceLocation OPEN_SPRITE`
- `private static final ResourceLocation CLOSED_SPRITE`
- `private static final org.slf4j.Logger LOGGER`
- `private static final Component WORLD_LIST_TITLE`
- `private static final Component TITLE`
- `private static final Component SERVER_EXPIRED_TOOLTIP`
- `private static final Component SERVER_EXPIRING_SOON_TOOLTIP`
- `private static final Component SERVER_EXPIRING_IN_DAY_TOOLTIP`
- `private static final Component SERVER_OPEN_TOOLTIP`
- `private static final Component SERVER_CLOSED_TOOLTIP`
- `private static final int DEFAULT_BUTTON_WIDTH` (= 80)
- `private static final int DEFAULT_BUTTON_OFFSET` (= 5)
- `@Nullable private Component toolTip`
- `private final RealmsMainScreen lastScreen`
- `@Nullable private RealmsServer serverData`
- `private final long serverId`
- `private int leftX`
- `private int rightX`
- `private Button playersButton`
- `private Button settingsButton`
- `private Button subscriptionButton`
- `private Button optionsButton`
- `private Button backupButton`
- `private Button resetWorldButton`
- `private Button switchMinigameButton`
- `private boolean stateChanged`
- `private int clicks`
- `private final List<RealmsWorldSlotButton> slotButtonList`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `private RealmsWorldSlotButton addSlotButton(int p_167386_)`
- `private int leftButton(int p_88464_)`
- `private int centerButton(int p_88466_,  int p_88467_)`
- `public void tick()`
- `public void render(GuiGraphics p_282982_,  int p_281739_,  int p_283097_,  float p_282528_)`
- `private int frame(int p_88488_)`
- `public boolean keyPressed(int p_88417_,  int p_88418_,  int p_88419_)`
- `private void backButtonClicked()`
- `private void fetchServerData(long p_88427_)`
- `private void disableButtons()`
- `private void joinRealm(RealmsServer p_88439_)`
- `private void switchToMinigame()`
- `private void switchToFullSlot(int p_88421_,  RealmsServer p_88422_)`
- `private void switchToEmptySlot(int p_88469_,  RealmsServer p_88470_)`
- `private void drawServerStatus(GuiGraphics p_281709_,  int p_88491_,  int p_88492_,  int p_88493_,  int p_88494_)`
- `private void drawRealmStatus(GuiGraphics p_298677_,  int p_297798_,  int p_301226_,  int p_298804_,  int p_297961_,  ResourceLocation p_299441_,  Supplier<Component> p_300912_)`
- `private boolean isMinigame()`
- `private void hideRegularButtons()`
- `private void hide(Button p_88451_)`
- `private void show(Button p_88485_)`
- `private void hideMinigameButtons()`
- `public void saveSlotSettings(RealmsWorldOptions p_88445_)`
- `public void saveSettings(String p_88455_,  String p_88456_)`
- `public void openTheWorld(boolean p_88460_,  Screen p_88461_)`
- `public void closeTheWorld(Screen p_88453_)`
- `public void stateChanged()`
- `private void templateSelectionCallback(@Nullable  WorldTemplate p_167395_)`
- `public RealmsConfigureWorldScreen getNewScreen()`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsConfirmScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsConfirmScreen`

### Fields
- `protected it.unimi.dsi.fastutil.booleans.BooleanConsumer callback`
- `private final Component title1`
- `private final Component title2`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `public void render(GuiGraphics p_282610_,  int p_282200_,  int p_283480_,  float p_281259_)`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsCreateRealmScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsCreateRealmScreen`

### Fields
- `private static final Component NAME_LABEL`
- `private static final Component DESCRIPTION_LABEL`
- `private static final int BUTTON_SPACING` (= 10)
- `private static final int CONTENT_WIDTH` (= 210)
- `private final RealmsServer server`
- `private final RealmsMainScreen lastScreen`
- `private final HeaderAndFooterLayout layout`
- `private EditBox nameBox`
- `private EditBox descriptionBox`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `protected void repositionElements()`
- `private void createWorld()`
- `public void onClose()`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `render`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsDownloadLatestWorldScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsDownloadLatestWorldScreen`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final ReentrantLock DOWNLOAD_LOCK`
- `private static final int BAR_WIDTH` (= 200)
- `private static final int BAR_TOP` (= 80)
- `private static final int BAR_BOTTOM` (= 95)
- `private static final int BAR_BORDER` (= 1)
- `private final Screen lastScreen`
- `private final WorldDownload worldDownload`
- `private final Component downloadTitle`
- `private final com.google.common.util.concurrent.RateLimiter narrationRateLimiter`
- `private Button cancelButton`
- `private final String worldName`
- `private final RealmsDownloadLatestWorldScreen.DownloadStatus downloadStatus`
- `@Nullable private volatile Component errorMessage`
- `private volatile Component status`
- `@Nullable private volatile String progress`
- `private volatile boolean cancelled`
- `private volatile boolean showDots`
- `private volatile boolean finished`
- `private volatile boolean extracting`
- `@Nullable private Long previousWrittenBytes`
- `@Nullable private Long previousTimeSnapshot`
- `private long bytesPersSecond`
- `private int animTick`
- `private static final String[] DOTS`
- `private int dotIndex`
- `private boolean checked`
- `private final it.unimi.dsi.fastutil.booleans.BooleanConsumer callback`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `private void checkDownloadSize()`
- `private long getContentLength(String p_88647_)`
- `public void tick()`
- `private Component createProgressNarrationMessage()`
- `public boolean keyPressed(int p_88630_,  int p_88631_,  int p_88632_)`
- `private void backButtonClicked()`
- `public void render(GuiGraphics p_282124_,  int p_88635_,  int p_88636_,  float p_88637_)`
- `private void drawDots(GuiGraphics p_281948_)`
- `private void drawProgressBar(GuiGraphics p_281556_)`
- `private void drawDownloadSpeed(GuiGraphics p_282236_)`
- `private void drawDownloadSpeed0(GuiGraphics p_283338_,  long p_281931_)`
- `private void downloadSave()`
- `private void downloadCancelled()`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsDownloadLatestWorldScreen.DownloadStatus

*class* `com.mojang.realmsclient.gui.screens.RealmsDownloadLatestWorldScreen.DownloadStatus`

Enclosing class: RealmsDownloadLatestWorldScreen

### Fields
- `public volatile long bytesWritten`
- `public volatile long totalBytes`

## RealmsGenericErrorScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsGenericErrorScreen`

### Fields
- `private final Screen nextScreen`
- `private final RealmsGenericErrorScreen.ErrorMessage lines`
- `private MultiLineLabel line2Split`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private static RealmsGenericErrorScreen.ErrorMessage errorMessage(RealmsServiceException p_288965_)`
- `private static RealmsGenericErrorScreen.ErrorMessage errorMessage(Component p_289003_)`
- `private static RealmsGenericErrorScreen.ErrorMessage errorMessage(Component p_289010_,  Component p_289015_)`
- `public void init()`
- `public Component getNarrationMessage()`
- `public boolean keyPressed(int key,  int scanCode,  int modifiers)`
- `public void render(GuiGraphics p_283497_,  int p_88680_,  int p_88681_,  float p_88682_)`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsGenericErrorScreen.ErrorMessage

*record* `com.mojang.realmsclient.gui.screens.RealmsGenericErrorScreen.ErrorMessage`

Enclosing class: RealmsGenericErrorScreen

### Fields
- `private final Component title`
  The field for the title record component.
- `private final Component detail`
  The field for the detail record component.

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
- `public Component title()`
  Returns the value of the title record component.
  - returns: the value of the title record component
- `public Component detail()`
  Returns the value of the detail record component.
  - returns: the value of the detail record component

## RealmsInviteScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsInviteScreen`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Component NAME_LABEL`
- `private static final Component INVITING_PLAYER_TEXT`
- `private static final Component NO_SUCH_PLAYER_ERROR_TEXT`
- `private EditBox profileName`
- `private Button inviteButton`
- `private final RealmsServer serverData`
- `private final RealmsConfigureWorldScreen configureScreen`
- `private final Screen lastScreen`
- `@Nullable private Component message`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `private void onInvite()`
- `private void showMessage(Component p_289685_)`
- `public boolean keyPressed(int p_88707_,  int p_88708_,  int p_88709_)`
- `public void render(GuiGraphics p_282206_,  int p_283415_,  int p_282016_,  float p_283011_)`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsLongConfirmationScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsLongConfirmationScreen`

### Fields
- `static final Component WARNING`
- `static final Component INFO`
- `private final RealmsLongConfirmationScreen.Type type`
- `private final Component line2`
- `private final Component line3`
- `protected final it.unimi.dsi.fastutil.booleans.BooleanConsumer callback`
- `private final boolean yesNoQuestion`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `public Component getNarrationMessage()`
- `public boolean keyPressed(int p_88737_,  int p_88738_,  int p_88739_)`
- `public void render(GuiGraphics p_282797_,  int p_88742_,  int p_88743_,  float p_88744_)`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsLongRunningMcoTaskScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsLongRunningMcoTaskScreen`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final RepeatedNarrator REPEATED_NARRATOR`
- `private LongRunningTask task`
- `private final Screen lastScreen`
- `private volatile Component title`
- `private final LinearLayout layout`
- `@Nullable private LoadingDotsWidget loadingDotsWidget`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void tick()`
- `public boolean keyPressed(int p_88781_,  int p_88782_,  int p_88783_)`
- `public void init()`
- `protected void repositionElements()`
- `protected void cancel()`
- `public void setTitle(Component p_88797_)`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `render`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsLongRunningMcoTickTaskScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsLongRunningMcoTickTaskScreen`

### Fields
- `private final LongRunningTask task`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void tick()`
- `protected void cancel()`

### Inherited methods
- from `com.mojang.realmsclient.gui.screens.RealmsLongRunningMcoTaskScreen`: `init`, `keyPressed`, `repositionElements`, `setTitle`
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `render`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsNotificationsScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsNotificationsScreen`

### Fields
- `private static final ResourceLocation UNSEEN_NOTIFICATION_SPRITE`
- `private static final ResourceLocation NEWS_SPRITE`
- `private static final ResourceLocation INVITE_SPRITE`
- `private static final ResourceLocation TRIAL_AVAILABLE_SPRITE`
- `private final CompletableFuture<Boolean> validClient`
- `@Nullable private DataFetcher.Subscription realmsDataSubscription`
- `@Nullable private RealmsNotificationsScreen.DataFetcherConfiguration currentConfiguration`
- `private volatile int numberOfPendingInvites`
- `private static boolean trialAvailable`
- `private static boolean hasUnreadNews`
- `private static boolean hasUnseenNotifications`
- `private final RealmsNotificationsScreen.DataFetcherConfiguration showAll`
- `private final RealmsNotificationsScreen.DataFetcherConfiguration onlyNotifications`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `public void added()`
- `@Nullable private RealmsNotificationsScreen.DataFetcherConfiguration getConfiguration()`
- `public void tick()`
- `private boolean getRealmsNotificationsEnabled()`
- `private boolean inTitleScreen()`
- `public void render(GuiGraphics p_282587_,  int p_282992_,  int p_283028_,  float p_281605_)`
- `public void renderBackground(GuiGraphics p_300621_,  int p_300416_,  int p_300236_,  float p_299573_)`
- `private void drawIcons(GuiGraphics p_282966_)`
- `void addNewsAndInvitesSubscriptions(RealmsDataFetcher p_275490_,  DataFetcher.Subscription p_275623_)`
- `void addNotificationsSubscriptions(RealmsDataFetcher p_275619_,  DataFetcher.Subscription p_275628_)`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsNotificationsScreen.DataFetcherConfiguration

*interface* `com.mojang.realmsclient.gui.screens.RealmsNotificationsScreen.DataFetcherConfiguration`

Enclosing class: RealmsNotificationsScreen

### Methods
- `DataFetcher.Subscription initDataFetcher(RealmsDataFetcher p_275608_)`
- `boolean showOldNotifications()`

## RealmsParentalConsentScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsParentalConsentScreen`

### Fields
- `private static final Component MESSAGE`
- `private final Screen nextScreen`
- `private MultiLineLabel messageLines`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `public Component getNarrationMessage()`
- `public void render(GuiGraphics p_282593_,  int p_282889_,  int p_283522_,  float p_281349_)`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsPendingInvitesScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsPendingInvitesScreen`

### Fields
- `static final ResourceLocation ACCEPT_HIGHLIGHTED_SPRITE`
- `static final ResourceLocation ACCEPT_SPRITE`
- `static final ResourceLocation REJECT_HIGHLIGHTED_SPRITE`
- `static final ResourceLocation REJECT_SPRITE`
- `private static final org.slf4j.Logger LOGGER`
- `private static final Component NO_PENDING_INVITES_TEXT`
- `static final Component ACCEPT_INVITE`
- `static final Component REJECT_INVITE`
- `private final Screen lastScreen`
- `private final CompletableFuture<List<PendingInvite>> pendingInvites`
- `@Nullable Component toolTip`
- `RealmsPendingInvitesScreen.PendingInvitationSelectionList pendingInvitationSelectionList`
- `int selectedInvite`
- `private Button acceptButton`
- `private Button rejectButton`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `public void onClose()`
- `void handleInvitation(int p_297271_,  boolean p_297359_)`
- `public void render(GuiGraphics p_282787_,  int p_88900_,  int p_88901_,  float p_88902_)`
- `void updateButtonStates()`
- `private boolean shouldAcceptAndRejectButtonBeVisible(int p_88963_)`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsPendingInvitesScreen.Entry

*class* `com.mojang.realmsclient.gui.screens.RealmsPendingInvitesScreen.Entry`

Enclosing class: RealmsPendingInvitesScreen

### Fields
- `private static final int TEXT_LEFT` (= 38)
- `final PendingInvite pendingInvite`
- `private final List<RowButton> rowButtons`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_281445_,  int p_281806_,  int p_283610_,  int p_282909_,  int p_281705_,  int p_281977_,  int p_282983_,  int p_281655_,  boolean p_282274_,  float p_282862_)`
- `public boolean mouseClicked(double p_88998_,  double p_88999_,  int p_89000_)`
- `private void renderPendingInvitationItem(GuiGraphics p_281764_,  PendingInvite p_282748_,  int p_282810_,  int p_282994_,  int p_283639_,  int p_283659_)`
- `public Component getNarration()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsPendingInvitesScreen.Entry.AcceptRowButton

*class* `com.mojang.realmsclient.gui.screens.RealmsPendingInvitesScreen.Entry.AcceptRowButton`

Enclosing class: RealmsPendingInvitesScreen.Entry

### Inherited fields
- from `com.mojang.realmsclient.gui.RowButton`: `height`, `width`, `xOffset`, `yOffset`

### Methods
- `protected void draw(GuiGraphics p_282151_,  int p_283695_,  int p_282436_,  boolean p_282168_)`
- `public void onClick(int p_89029_)`

### Inherited methods
- from `com.mojang.realmsclient.gui.RowButton`: `drawButtonsInRow`, `drawForRowAt`, `getBottom`, `getRight`, `rowButtonMouseClicked`

## RealmsPendingInvitesScreen.Entry.RejectRowButton

*class* `com.mojang.realmsclient.gui.screens.RealmsPendingInvitesScreen.Entry.RejectRowButton`

Enclosing class: RealmsPendingInvitesScreen.Entry

### Inherited fields
- from `com.mojang.realmsclient.gui.RowButton`: `height`, `width`, `xOffset`, `yOffset`

### Methods
- `protected void draw(GuiGraphics p_282457_,  int p_281421_,  int p_281260_,  boolean p_281476_)`
- `public void onClick(int p_89039_)`

### Inherited methods
- from `com.mojang.realmsclient.gui.RowButton`: `drawButtonsInRow`, `drawForRowAt`, `getBottom`, `getRight`, `rowButtonMouseClicked`

## RealmsPendingInvitesScreen.PendingInvitationSelectionList

*class* `com.mojang.realmsclient.gui.screens.RealmsPendingInvitesScreen.PendingInvitationSelectionList`

Enclosing class: RealmsPendingInvitesScreen

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void removeAtIndex(int p_89058_)`
- `public int getMaxPosition()`
- `public int getRowWidth()`
- `public void selectItem(int p_89049_)`
- `public void selectInviteListItem(int p_89061_)`
- `public void setSelected(@Nullable  RealmsPendingInvitesScreen.Entry p_89053_)`

### Inherited methods
- from `net.minecraft.realms.RealmsObjectSelectionList`: `addEntry`, `clear`, `getItemCount`, `getRowLeft`, `getRowTop`, `getScrollbarPosition`, `replaceEntries`, `setSelectedItem`
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getLeft`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowRight`, `getScrollAmount`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsPlayerScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsPlayerScreen`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final ResourceLocation OPTIONS_BACKGROUND`
- `private static final Component QUESTION_TITLE`
- `static final Component NORMAL_USER_TOOLTIP`
- `static final Component OP_TOOLTIP`
- `static final Component REMOVE_ENTRY_TOOLTIP`
- `private static final int NO_ENTRY_SELECTED` (= -1)
- `private final RealmsConfigureWorldScreen lastScreen`
- `final RealmsServer serverData`
- `RealmsPlayerScreen.InvitedObjectSelectionList invitedObjectSelectionList`
- `int column1X`
- `int columnWidth`
- `private Button removeButton`
- `private Button opdeopButton`
- `int playerIndex`
- `private boolean stateChanged`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `void updateButtonStates()`
- `private boolean shouldRemoveAndOpdeopButtonBeVisible(int p_89191_)`
- `public boolean keyPressed(int p_89094_,  int p_89095_,  int p_89096_)`
- `private void backButtonClicked()`
- `void op(int p_89193_)`
- `void deop(int p_89195_)`
- `private void updateOps(Ops p_89108_)`
- `void uninvite(int p_89197_)`
- `public void render(GuiGraphics p_281762_,  int p_282648_,  int p_282676_,  float p_281822_)`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsPlayerScreen.Entry

*class* `com.mojang.realmsclient.gui.screens.RealmsPlayerScreen.Entry`

Enclosing class: RealmsPlayerScreen

### Fields
- `private static final int X_OFFSET` (= 3)
- `private static final int Y_PADDING` (= 1)
- `private static final int BUTTON_WIDTH` (= 8)
- `private static final int BUTTON_HEIGHT` (= 7)
- `private static final WidgetSprites REMOVE_BUTTON_SPRITES`
- `private static final WidgetSprites MAKE_OP_BUTTON_SPRITES`
- `private static final WidgetSprites REMOVE_OP_BUTTON_SPRITES`
- `private final PlayerInfo playerInfo`
- `private final List<AbstractWidget> children`
- `private final ImageButton removeButton`
- `private final ImageButton makeOpButton`
- `private final ImageButton removeOpButton`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void updateButtons()`
- `public boolean mouseClicked(double p_279264_,  double p_279493_,  int p_279168_)`
- `public void render(GuiGraphics p_282985_,  int p_281343_,  int p_283042_,  int p_282863_,  int p_281381_,  int p_282692_,  int p_283240_,  int p_282706_,  boolean p_283067_,  float p_282230_)`
- `public Component getNarration()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsPlayerScreen.InvitedObjectSelectionList

*class* `com.mojang.realmsclient.gui.screens.RealmsPlayerScreen.InvitedObjectSelectionList`

Enclosing class: RealmsPlayerScreen

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void updateButtons()`
- `public void addEntry(PlayerInfo p_89244_)`
- `public int getRowWidth()`
- `public void selectItem(int p_89234_)`
- `public void selectInviteListItem(int p_89251_)`
- `public void setSelected(@Nullable  RealmsPlayerScreen.Entry p_89246_)`
- `public int getScrollbarPosition()`
- `public int getMaxPosition()`

### Inherited methods
- from `net.minecraft.realms.RealmsObjectSelectionList`: `addEntry`, `clear`, `getItemCount`, `getRowLeft`, `getRowTop`, `replaceEntries`, `setSelectedItem`
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getLeft`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowRight`, `getScrollAmount`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsPopupScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsPopupScreen`

### Fields
- `private static final Component POPUP_TEXT`
- `private static final Component CLOSE_TEXT`
- `private static final ResourceLocation BACKGROUND_SPRITE`
- `private static final ResourceLocation TRIAL_AVAILABLE_SPRITE`
- `private static final WidgetSprites CROSS_BUTTON_SPRITES`
- `private static final int BG_TEXTURE_WIDTH` (= 236)
- `private static final int BG_TEXTURE_HEIGHT` (= 34)
- `private static final int BG_BORDER_SIZE` (= 6)
- `private static final int IMAGE_WIDTH` (= 195)
- `private static final int IMAGE_HEIGHT` (= 152)
- `private static final int BUTTON_SPACING` (= 4)
- `private static final int PADDING` (= 10)
- `private static final int WIDTH` (= 320)
- `private static final int HEIGHT` (= 172)
- `private static final int TEXT_WIDTH` (= 100)
- `private static final int BUTTON_WIDTH` (= 99)
- `private static final int CAROUSEL_SWITCH_INTERVAL` (= 100)
- `private static List<ResourceLocation> carouselImages`
- `private final Screen backgroundScreen`
- `private final boolean trialAvailable`
- `@Nullable private Button createTrialButton`
- `private int carouselIndex`
- `private int carouselTick`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public static void updateCarouselImages(ResourceManager p_300048_)`
- `protected void init()`
- `public void tick()`
- `public void render(GuiGraphics p_299956_,  int p_297292_,  int p_300990_,  float p_300510_)`
- `public static void renderDiamond(GuiGraphics p_299842_,  Button p_300723_)`
- `public void renderBackground(GuiGraphics p_297997_,  int p_300562_,  int p_297822_,  float p_297261_)`
- `private int left()`
- `private int top()`
- `private int right()`
- `private int bottom()`
- `public void onClose()`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsResetNormalWorldScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsResetNormalWorldScreen`

### Fields
- `private static final Component SEED_LABEL`
- `public static final Component TITLE`
- `private static final int BUTTON_SPACING` (= 10)
- `private static final int CONTENT_WIDTH` (= 210)
- `private final HeaderAndFooterLayout layout`
- `private final Consumer<WorldGenerationInfo> callback`
- `private EditBox seedEdit`
- `private LevelType levelType`
- `private boolean generateStructures`
- `private final Component buttonTitle`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `private WorldGenerationInfo createWorldGenerationInfo()`
- `protected void repositionElements()`
- `public void onClose()`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `render`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsResetWorldScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsResetWorldScreen`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `static final ResourceLocation SLOT_FRAME_SPRITE`
- `private static final Component CREATE_REALM_TITLE`
- `private static final Component CREATE_REALM_SUBTITLE`
- `private static final Component CREATE_WORLD_TITLE`
- `private static final Component CREATE_WORLD_SUBTITLE`
- `private static final Component RESET_WORLD_TITLE`
- `private static final Component RESET_WORLD_SUBTITLE`
- `public static final Component CREATE_WORLD_RESET_TASK_TITLE`
- `private static final Component RESET_WORLD_RESET_TASK_TITLE`
- `private static final Component WORLD_TEMPLATES_TITLE`
- `private static final Component ADVENTURES_TITLE`
- `private static final Component EXPERIENCES_TITLE`
- `private static final Component INSPIRATION_TITLE`
- `private final Screen lastScreen`
- `private final RealmsServer serverData`
- `private final Component subtitle`
- `private final int subtitleColor`
- `private final Component resetTaskTitle`
- `private static final ResourceLocation UPLOAD_LOCATION`
- `private static final ResourceLocation ADVENTURE_MAP_LOCATION`
- `private static final ResourceLocation SURVIVAL_SPAWN_LOCATION`
- `private static final ResourceLocation NEW_WORLD_LOCATION`
- `private static final ResourceLocation EXPERIENCE_LOCATION`
- `private static final ResourceLocation INSPIRATION_LOCATION`
- `WorldTemplatePaginatedList templates`
- `WorldTemplatePaginatedList adventuremaps`
- `WorldTemplatePaginatedList experiences`
- `WorldTemplatePaginatedList inspirations`
- `public final int slot`
- `private final Runnable resetWorldRunnable`
- `private final HeaderAndFooterLayout layout`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public static RealmsResetWorldScreen forNewRealm(Screen p_300926_,  RealmsServer p_297918_,  Runnable p_299910_)`
- `public static RealmsResetWorldScreen forEmptySlot(Screen p_298871_,  int p_300158_,  RealmsServer p_300454_,  Runnable p_298350_)`
- `public static RealmsResetWorldScreen forResetSlot(Screen p_298755_,  RealmsServer p_299132_,  Runnable p_300942_)`
- `public void init()`
- `public Component getNarrationMessage()`
- `public void onClose()`
- `private int frame(int p_89393_)`
- `private void startTask(LongRunningTask p_167458_)`
- `public void switchSlot(Runnable p_89383_)`
- `private void templateSelectionCallback(@Nullable  WorldTemplate p_167454_)`
- `private void generationSelectionCallback(@Nullable  WorldGenerationInfo p_167456_)`
- `private void resetWorld(Runnable p_167465_)`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `render`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsResetWorldScreen.FrameButton

*class* `com.mojang.realmsclient.gui.screens.RealmsResetWorldScreen.FrameButton`

Enclosing class: RealmsResetWorldScreen

### Fields
- `private static final int WIDTH` (= 60)
- `private static final int HEIGHT` (= 72)
- `private static final int IMAGE_SIZE` (= 56)
- `private final ResourceLocation image`

### Inherited fields
- from `net.minecraft.client.gui.components.Button`: `createNarration`, `DEFAULT_HEIGHT`, `DEFAULT_NARRATION`, `DEFAULT_WIDTH`, `onPress`, `SMALL_WIDTH`
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void renderWidget(GuiGraphics p_282595_,  int p_282741_,  int p_283560_,  float p_281923_)`

### Inherited methods
- from `net.minecraft.client.gui.components.Button`: `builder`, `createNarrationMessage`, `onPress`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`, `renderString`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## RealmsSelectFileToUploadScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsSelectFileToUploadScreen`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final Component TITLE`
- `private static final Component UNABLE_TO_LOAD_WORLD`
- `static final Component WORLD_TEXT`
- `static final Component HARDCORE_TEXT`
- `static final Component CHEATS_TEXT`
- `private static final DateFormat DATE_FORMAT`
- `private final RealmsResetWorldScreen lastScreen`
- `private final long worldId`
- `private final int slotId`
- `Button uploadButton`
- `List<LevelSummary> levelList`
- `int selectedWorld`
- `RealmsSelectFileToUploadScreen.WorldSelectionList worldSelectionList`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private void loadLevelList()  throws Exception`
  - throws: Exception
- `public void init()`
- `public Component getNarrationMessage()`
- `private void upload()`
- `public void render(GuiGraphics p_281244_,  int p_282772_,  int p_281746_,  float p_281757_)`
- `public boolean keyPressed(int p_89506_,  int p_89507_,  int p_89508_)`
- `static Component gameModeName(LevelSummary p_89535_)`
- `static String formatLastPlayed(LevelSummary p_89539_)`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsSelectFileToUploadScreen.Entry

*class* `com.mojang.realmsclient.gui.screens.RealmsSelectFileToUploadScreen.Entry`

Enclosing class: RealmsSelectFileToUploadScreen

### Fields
- `private final LevelSummary levelSummary`
- `private final String name`
- `private final Component id`
- `private final Component info`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_282307_,  int p_281918_,  int p_281770_,  int p_282954_,  int p_281599_,  int p_281852_,  int p_283452_,  int p_282531_,  boolean p_283120_,  float p_282082_)`
- `public boolean mouseClicked(double p_89562_,  double p_89563_,  int p_89564_)`
- `protected void renderItem(GuiGraphics p_282872_,  int p_283187_,  int p_283611_,  int p_282173_)`
- `public Component getNarration()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsSelectFileToUploadScreen.WorldSelectionList

*class* `com.mojang.realmsclient.gui.screens.RealmsSelectFileToUploadScreen.WorldSelectionList`

Enclosing class: RealmsSelectFileToUploadScreen

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void addEntry(LevelSummary p_89588_)`
- `public int getMaxPosition()`
- `public void setSelected(@Nullable  RealmsSelectFileToUploadScreen.Entry p_89592_)`

### Inherited methods
- from `net.minecraft.realms.RealmsObjectSelectionList`: `addEntry`, `clear`, `getItemCount`, `getRowLeft`, `getRowTop`, `getRowWidth`, `getScrollbarPosition`, `replaceEntries`, `selectItem`, `setSelectedItem`
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getLeft`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowRight`, `getScrollAmount`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsSelectWorldTemplateScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsSelectWorldTemplateScreen`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `static final ResourceLocation SLOT_FRAME_SPRITE`
- `private static final Component SELECT_BUTTON_NAME`
- `private static final Component TRAILER_BUTTON_NAME`
- `private static final Component PUBLISHER_BUTTON_NAME`
- `private static final int BUTTON_WIDTH` (= 100)
- `private static final int BUTTON_SPACING` (= 10)
- `private final HeaderAndFooterLayout layout`
- `final Consumer<WorldTemplate> callback`
- `RealmsSelectWorldTemplateScreen.WorldTemplateObjectSelectionList worldTemplateObjectSelectionList`
- `private final RealmsServer.WorldType worldType`
- `private Button selectButton`
- `private Button trailerButton`
- `private Button publisherButton`
- `@Nullable WorldTemplate selectedTemplate`
- `@Nullable String currentLink`
- `@Nullable private Component[] warning`
- `@Nullable List<TextRenderingUtils.Line> noTemplatesMessage`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void setWarning(Component... p_89683_)`
- `public void init()`
- `protected void repositionElements()`
- `public Component getNarrationMessage()`
- `void updateButtonStates()`
- `public void onClose()`
- `private void selectTemplate()`
- `private void onTrailer()`
- `private void onPublish()`
- `private void fetchTemplatesAsync(WorldTemplatePaginatedList p_89654_)`
- `com.mojang.datafixers.util.Either<WorldTemplatePaginatedList,Exception> fetchTemplates(WorldTemplatePaginatedList p_89656_,  RealmsClient p_89657_)`
- `public void render(GuiGraphics p_282162_,  int p_89640_,  int p_89641_,  float p_89642_)`
- `private void renderMultilineMessage(GuiGraphics p_282398_,  int p_282163_,  int p_282021_,  List<TextRenderingUtils.Line> p_282203_)`
- `int getHeaderHeight()`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsSelectWorldTemplateScreen.Entry

*class* `com.mojang.realmsclient.gui.screens.RealmsSelectWorldTemplateScreen.Entry`

Enclosing class: RealmsSelectWorldTemplateScreen

### Fields
- `private static final WidgetSprites WEBSITE_LINK_SPRITES`
- `private static final WidgetSprites TRAILER_LINK_SPRITES`
- `private static final Component PUBLISHER_LINK_TOOLTIP`
- `private static final Component TRAILER_LINK_TOOLTIP`
- `public final WorldTemplate template`
- `private long lastClickTime`
- `@Nullable private ImageButton websiteButton`
- `@Nullable private ImageButton trailerButton`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public boolean mouseClicked(double p_299958_,  double p_298696_,  int p_299792_)`
- `public void render(GuiGraphics p_281796_,  int p_282160_,  int p_281759_,  int p_282961_,  int p_281497_,  int p_282427_,  int p_283550_,  int p_282955_,  boolean p_282866_,  float p_281452_)`
- `public Component getNarration()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsSelectWorldTemplateScreen.WorldTemplateObjectSelectionList

*class* `com.mojang.realmsclient.gui.screens.RealmsSelectWorldTemplateScreen.WorldTemplateObjectSelectionList`

Enclosing class: RealmsSelectWorldTemplateScreen

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void addEntry(WorldTemplate p_89805_)`
- `public boolean mouseClicked(double p_89797_,  double p_89798_,  int p_89799_)`
- `public void setSelected(@Nullable  RealmsSelectWorldTemplateScreen.Entry p_89807_)`
- `public int getMaxPosition()`
- `public int getRowWidth()`
- `public boolean isEmpty()`
- `public List<WorldTemplate> getTemplates()`

### Inherited methods
- from `net.minecraft.realms.RealmsObjectSelectionList`: `addEntry`, `clear`, `getItemCount`, `getRowLeft`, `getRowTop`, `getScrollbarPosition`, `replaceEntries`, `selectItem`, `setSelectedItem`
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getLeft`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowRight`, `getScrollAmount`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsSettingsScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsSettingsScreen`

### Fields
- `private static final int COMPONENT_WIDTH` (= 212)
- `private static final Component NAME_LABEL`
- `private static final Component DESCRIPTION_LABEL`
- `private final RealmsConfigureWorldScreen configureWorldScreen`
- `private final RealmsServer serverData`
- `private Button doneButton`
- `private EditBox descEdit`
- `private EditBox nameEdit`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void tick()`
- `public void init()`
- `public boolean keyPressed(int p_89833_,  int p_89834_,  int p_89835_)`
- `public void render(GuiGraphics p_283580_,  int p_281307_,  int p_282074_,  float p_282669_)`
- `public void save()`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsSlotOptionsScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsSlotOptionsScreen`

### Fields
- `private static final int DEFAULT_DIFFICULTY` (= 2)
- `public static final List<Difficulty> DIFFICULTIES`
- `private static final int DEFAULT_GAME_MODE` (= 0)
- `public static final List<GameType> GAME_MODES`
- `private static final Component NAME_LABEL`
- `static final Component SPAWN_PROTECTION_TEXT`
- `private static final Component SPAWN_WARNING_TITLE`
- `private EditBox nameEdit`
- `protected final RealmsConfigureWorldScreen parent`
- `private int column1X`
- `private int columnWidth`
- `private final RealmsWorldOptions options`
- `private final RealmsServer.WorldType worldType`
- `private Difficulty difficulty`
- `private GameType gameMode`
- `private final String defaultSlotName`
- `private String worldName`
- `private boolean pvp`
- `private boolean spawnNPCs`
- `private boolean spawnAnimals`
- `private boolean spawnMonsters`
- `int spawnProtection`
- `private boolean commandBlocks`
- `private boolean forceGameMode`
- `RealmsSlotOptionsScreen.SettingsSlider spawnProtectionButton`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public boolean keyPressed(int p_89891_,  int p_89892_,  int p_89893_)`
- `private static <T> T findByIndex(List<T> p_167525_,  int p_167526_,  int p_167527_)`
- `private static <T> int findIndex(List<T> p_167529_,  T p_167530_,  int p_167531_)`
- `public void init()`
- `private CycleButton.OnValueChange<Boolean> confirmDangerousOption(Component p_231324_,  Consumer<Boolean> p_231325_)`
- `public Component getNarrationMessage()`
- `public void render(GuiGraphics p_283210_,  int p_283172_,  int p_281531_,  float p_283191_)`
- `private void setWorldName(String p_231314_)`
- `private void saveSettings()`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsSlotOptionsScreen.SettingsSlider

*class* `com.mojang.realmsclient.gui.screens.RealmsSlotOptionsScreen.SettingsSlider`

Enclosing class: RealmsSlotOptionsScreen

### Fields
- `private final double minValue`
- `private final double maxValue`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSliderButton`: `TEXT_MARGIN`, `value`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void applyValue()`
- `protected void updateMessage()`
- `public void onClick(double p_89954_,  double p_89955_)`
- `public void onRelease(double p_89957_,  double p_89958_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractSliderButton`: `createNarrationMessage`, `getHandleSprite`, `getSprite`, `keyPressed`, `onDrag`, `playDownSound`, `renderWidget`, `setFocused`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## RealmsSubscriptionInfoScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsSubscriptionInfoScreen`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `private static final Component SUBSCRIPTION_TITLE`
- `private static final Component SUBSCRIPTION_START_LABEL`
- `private static final Component TIME_LEFT_LABEL`
- `private static final Component DAYS_LEFT_LABEL`
- `private static final Component SUBSCRIPTION_EXPIRED_TEXT`
- `private static final Component SUBSCRIPTION_LESS_THAN_A_DAY_TEXT`
- `private static final Component UNKNOWN`
- `private static final Component RECURRING_INFO`
- `private final Screen lastScreen`
- `final RealmsServer serverData`
- `final Screen mainScreen`
- `private Component daysLeft`
- `private Component startDate`
- `@Nullable private Subscription.SubscriptionType type`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `public Component getNarrationMessage()`
- `private void deleteRealm(boolean p_90012_)`
- `private void getSubscription(long p_89990_)`
- `private static Component localPresentation(long p_182539_)`
- `public boolean keyPressed(int p_89986_,  int p_89987_,  int p_89988_)`
- `public void render(GuiGraphics p_282831_,  int p_281266_,  int p_281799_,  float p_282330_)`
- `private Component daysLeftPresentation(int p_89984_)`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsTermsScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsTermsScreen`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Component TITLE`
- `private static final Component TERMS_STATIC_TEXT`
- `private static final Component TERMS_LINK_TEXT`
- `private final Screen lastScreen`
- `private final RealmsServer realmsServer`
- `private boolean onLink`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `public boolean keyPressed(int p_90041_,  int p_90042_,  int p_90043_)`
- `private void agreedToTos()`
- `public boolean mouseClicked(double p_90037_,  double p_90038_,  int p_90039_)`
- `public Component getNarrationMessage()`
- `public void render(GuiGraphics p_281619_,  int p_283526_,  int p_282002_,  float p_282536_)`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RealmsUploadScreen

*class* `com.mojang.realmsclient.gui.screens.RealmsUploadScreen`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final ReentrantLock UPLOAD_LOCK`
- `private static final int BAR_WIDTH` (= 200)
- `private static final int BAR_TOP` (= 80)
- `private static final int BAR_BOTTOM` (= 95)
- `private static final int BAR_BORDER` (= 1)
- `private static final String[] DOTS`
- `private static final Component VERIFYING_TEXT`
- `private final RealmsResetWorldScreen lastScreen`
- `private final LevelSummary selectedLevel`
- `private final long worldId`
- `private final int slotId`
- `private final UploadStatus uploadStatus`
- `private final com.google.common.util.concurrent.RateLimiter narrationRateLimiter`
- `@Nullable private volatile Component[] errorMessage`
- `private volatile Component status`
- `private volatile String progress`
- `private volatile boolean cancelled`
- `private volatile boolean uploadFinished`
- `private volatile boolean showDots`
- `private volatile boolean uploadStarted`
- `private Button backButton`
- `private Button cancelButton`
- `private int tickCount`
- `@Nullable private Long previousWrittenBytes`
- `@Nullable private Long previousTimeSnapshot`
- `private long bytesPersSecond`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `COLOR_BRIGHT_YELLOW`, `COLOR_DARK_GRAY`, `COLOR_GREEN`, `COLOR_INFO`, `COLOR_LINK`, `COLOR_LINK_HOVER`, `COLOR_MEDIUM_GRAY`, `COLOR_RED_FADE`, `COLOR_YELLOW`, `EXPIRATION_NOTIFICATION_DAYS`, `SIZE_LIMIT`, `SKIN_FACE_SIZE`, `TITLE_HEIGHT`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `private void onBack()`
- `private void onCancel()`
- `public boolean keyPressed(int p_90089_,  int p_90090_,  int p_90091_)`
- `public void render(GuiGraphics p_282140_,  int p_90097_,  int p_90098_,  float p_90099_)`
- `private void drawDots(GuiGraphics p_283121_)`
- `private void drawProgressBar(GuiGraphics p_282575_)`
- `private void drawUploadSpeed(GuiGraphics p_281884_)`
- `private void drawUploadSpeed0(GuiGraphics p_282279_,  long p_282827_)`
- `public void tick()`
- `private Component createProgressNarrationMessage()`
- `private void upload()`
- `private void setErrorMessage(Component... p_90113_)`
- `private void uploadCancelled()`
- `private boolean verify(File p_90106_)`
- `private File tarGzipArchive(File p_90120_)  throws IOException`
  - throws: IOException
- `private void addFileToTarGz(org.apache.commons.compress.archivers.tar.TarArchiveOutputStream p_90108_,  String p_90109_,  String p_90110_,  boolean p_90111_)  throws IOException`
  - throws: IOException

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `addLabel`, `createLabelNarration`, `row`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## UploadResult

*class* `com.mojang.realmsclient.gui.screens.UploadResult`

### Fields
- `public final int statusCode`
- `@Nullable public final String errorMessage`

## UploadResult.Builder

*class* `com.mojang.realmsclient.gui.screens.UploadResult.Builder`

Enclosing class: UploadResult

### Fields
- `private int statusCode`
- `private String errorMessage`

### Methods
- `public UploadResult.Builder withStatusCode(int p_90147_)`
- `public UploadResult.Builder withErrorMessage(@Nullable  String p_90149_)`
- `public UploadResult build()`
