# net.minecraft.client.gui.screens

- [AccessibilityOnboardingScreen](#accessibilityonboardingscreen)
- [AccessibilityOptionsScreen](#accessibilityoptionsscreen)
- [AlertScreen](#alertscreen)
- [BackupConfirmScreen](#backupconfirmscreen)
- [BackupConfirmScreen.Listener](#backupconfirmscreen.listener)
- [BanNoticeScreens](#bannoticescreens)
- [ChatOptionsScreen](#chatoptionsscreen)
- [ChatScreen](#chatscreen)
- [ConfirmLinkScreen](#confirmlinkscreen)
- [ConfirmScreen](#confirmscreen)
- [ConnectScreen](#connectscreen)
- [CreateBuffetWorldScreen](#createbuffetworldscreen)
- [CreateBuffetWorldScreen.BiomeList](#createbuffetworldscreen.biomelist)
- [CreateBuffetWorldScreen.BiomeList.Entry](#createbuffetworldscreen.biomelist.entry)
- [CreateFlatWorldScreen](#createflatworldscreen)
- [CreateFlatWorldScreen.DetailsList](#createflatworldscreen.detailslist)
- [CreateFlatWorldScreen.DetailsList.Entry](#createflatworldscreen.detailslist.entry)
- [CreditsAndAttributionScreen](#creditsandattributionscreen)
- [DatapackLoadFailureScreen](#datapackloadfailurescreen)
- [DeathScreen](#deathscreen)
- [DeathScreen.TitleConfirmScreen](#deathscreen.titleconfirmscreen)
- [DemoIntroScreen](#demointroscreen)
- [DirectJoinServerScreen](#directjoinserverscreen)
- [DisconnectedScreen](#disconnectedscreen)
- [EditServerScreen](#editserverscreen)
- [ErrorScreen](#errorscreen)
- [FaviconTexture](#favicontexture)
- [GenericDirtMessageScreen](#genericdirtmessagescreen)
- [GenericWaitingScreen](#genericwaitingscreen)
- [InBedChatScreen](#inbedchatscreen)
- [LanguageSelectScreen](#languageselectscreen)
- [LanguageSelectScreen.LanguageSelectionList](#languageselectscreen.languageselectionlist)
- [LanguageSelectScreen.LanguageSelectionList.Entry](#languageselectscreen.languageselectionlist.entry)
- [LevelLoadingScreen](#levelloadingscreen)
- [LoadingDotsText](#loadingdotstext)
- [LoadingOverlay](#loadingoverlay)
- [LoadingOverlay.LogoTexture](#loadingoverlay.logotexture)
- [MenuScreens](#menuscreens)
- [MenuScreens.ScreenConstructor>](#menuscreens.screenconstructor)
- [MouseSettingsScreen](#mousesettingsscreen)
- [NoticeWithLinkScreen](#noticewithlinkscreen)
- [OnlineOptionsScreen](#onlineoptionsscreen)
- [OptionsScreen](#optionsscreen)
- [OptionsSubScreen](#optionssubscreen)
- [OutOfMemoryScreen](#outofmemoryscreen)
- [Overlay](#overlay)
- [PauseScreen](#pausescreen)
- [PopupScreen](#popupscreen)
- [PopupScreen.ButtonOption](#popupscreen.buttonoption)
- [PresetFlatWorldScreen](#presetflatworldscreen)
- [PresetFlatWorldScreen.PresetsList](#presetflatworldscreen.presetslist)
- [PresetFlatWorldScreen.PresetsList.Entry](#presetflatworldscreen.presetslist.entry)
- [ProgressScreen](#progressscreen)
- [ReceivingLevelScreen](#receivinglevelscreen)
- [Screen](#screen)
- [Screen.DeferredTooltipRendering](#screen.deferredtooltiprendering)
- [Screen.NarratableSearchResult](#screen.narratablesearchresult)
- [ShareToLanScreen](#sharetolanscreen)
- [SimpleOptionsSubScreen](#simpleoptionssubscreen)
- [SkinCustomizationScreen](#skincustomizationscreen)
- [SoundOptionsScreen](#soundoptionsscreen)
- [TitleScreen](#titlescreen)
- [TitleScreen.WarningLabel](#titlescreen.warninglabel)
- [VideoSettingsScreen](#videosettingsscreen)
- [WinScreen](#winscreen)
- [WinScreen.CreditsReader](#winscreen.creditsreader)
## AccessibilityOnboardingScreen

*class* `net.minecraft.client.gui.screens.AccessibilityOnboardingScreen`

### Fields
- `private static final Component ONBOARDING_NARRATOR_MESSAGE`
- `private static final int PADDING` (= 4)
- `private static final int TITLE_PADDING` (= 16)
- `private final PanoramaRenderer panorama`
- `private final LogoRenderer logoRenderer`
- `private final Options options`
- `private final boolean narratorAvailable`
- `private boolean hasNarrated`
- `private float timer`
- `private final Runnable onClose`
- `@Nullable private FocusableTextWidget textWidget`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `private int initTitleYPos()`
- `public void onClose()`
- `private void closeAndSetScreen(Screen p_272914_)`
- `private void close(Runnable p_299263_)`
- `public void render(GuiGraphics p_282353_,  int p_265135_,  int p_265032_,  float p_265387_)`
- `public void renderBackground(GuiGraphics p_298625_,  int p_300539_,  int p_299371_,  float p_299308_)`
- `private void handleInitialNarrationDelay()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## AccessibilityOptionsScreen

*class* `net.minecraft.client.gui.screens.AccessibilityOptionsScreen`

### Inherited fields
- from `net.minecraft.client.gui.screens.SimpleOptionsSubScreen`: `list`, `smallOptions`
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `lastScreen`, `options`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private static OptionInstance<?>[] options(Options p_232691_)`
- `protected void init()`
- `protected void createFooter()`

### Inherited methods
- from `net.minecraft.client.gui.screens.SimpleOptionsSubScreen`: `render`, `renderBackground`, `updateNarratorButton`
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `basicListRender`, `onClose`, `removed`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## AlertScreen

*class* `net.minecraft.client.gui.screens.AlertScreen`

### Fields
- `private static final int LABEL_Y` (= 90)
- `private final Component messageText`
- `private MultiLineLabel message`
- `private final Runnable callback`
- `private final Component okButton`
- `private final boolean shouldCloseOnEsc`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public Component getNarrationMessage()`
- `protected void init()`
- `public void render(GuiGraphics p_281989_,  int p_281583_,  int p_282152_,  float p_282198_)`
- `public boolean shouldCloseOnEsc()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## BackupConfirmScreen

*class* `net.minecraft.client.gui.screens.BackupConfirmScreen`

### Fields
- `private final Screen lastScreen`
- `protected final BackupConfirmScreen.Listener listener`
- `private final Component description`
- `private final boolean promptForCacheErase`
- `private MultiLineLabel message`
- `protected int id`
- `private Checkbox eraseCache`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void render(GuiGraphics p_282759_,  int p_282356_,  int p_282725_,  float p_281518_)`
- `public boolean shouldCloseOnEsc()`
- `public boolean keyPressed(int p_95549_,  int p_95550_,  int p_95551_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## BackupConfirmScreen.Listener

*interface* `net.minecraft.client.gui.screens.BackupConfirmScreen.Listener`

Enclosing class: BackupConfirmScreen

### Methods
- `void proceed(boolean p_95566_,  boolean p_95567_)`

## BanNoticeScreens

*class* `net.minecraft.client.gui.screens.BanNoticeScreens`

### Fields
- `private static final Component TEMPORARY_BAN_TITLE`
- `private static final Component PERMANENT_BAN_TITLE`
- `public static final Component NAME_BAN_TITLE`
- `private static final Component SKIN_BAN_TITLE`
- `private static final Component SKIN_BAN_DESCRIPTION`

### Methods
- `public static ConfirmLinkScreen create(it.unimi.dsi.fastutil.booleans.BooleanConsumer p_299994_,  com.mojang.authlib.minecraft.BanDetails p_297408_)`
- `public static ConfirmLinkScreen createSkinBan(Runnable p_300032_)`
- `public static ConfirmLinkScreen createNameBan(String p_300838_,  Runnable p_297249_)`
- `private static Component getBannedTitle(com.mojang.authlib.minecraft.BanDetails p_299452_)`
- `private static Component getBannedScreenText(com.mojang.authlib.minecraft.BanDetails p_299903_)`
- `private static Component getBanReasonText(com.mojang.authlib.minecraft.BanDetails p_298548_)`
- `private static Component getBanStatusText(com.mojang.authlib.minecraft.BanDetails p_298190_)`
- `private static Component getBanDurationText(com.mojang.authlib.minecraft.BanDetails p_300603_)`
- `private static boolean isTemporaryBan(com.mojang.authlib.minecraft.BanDetails p_300637_)`

## ChatOptionsScreen

*class* `net.minecraft.client.gui.screens.ChatOptionsScreen`

### Inherited fields
- from `net.minecraft.client.gui.screens.SimpleOptionsSubScreen`: `list`, `smallOptions`
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `lastScreen`, `options`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Inherited methods
- from `net.minecraft.client.gui.screens.SimpleOptionsSubScreen`: `createFooter`, `init`, `render`, `renderBackground`, `updateNarratorButton`
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `basicListRender`, `onClose`, `removed`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ChatScreen

*class* `net.minecraft.client.gui.screens.ChatScreen`

### Fields
- `public static final double MOUSE_SCROLL_SPEED` (= 7.0)
- `private static final Component USAGE_TEXT`
- `private static final int TOOLTIP_MAX_WIDTH` (= 210)
- `private String historyBuffer`
- `private int historyPos`
- `protected EditBox input`
- `private String initial`
- `CommandSuggestions commandSuggestions`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void resize(Minecraft p_95600_,  int p_95601_,  int p_95602_)`
- `public void removed()`
- `private void onEdited(String p_95611_)`
- `public boolean keyPressed(int p_95591_,  int p_95592_,  int p_95593_)`
- `public boolean mouseScrolled(double p_95581_,  double p_95582_,  double p_95583_,  double p_300876_)`
- `public boolean mouseClicked(double p_95585_,  double p_95586_,  int p_95587_)`
- `protected void insertText(String p_95606_,  boolean p_95607_)`
- `public void moveInHistory(int p_95589_)`
- `public void render(GuiGraphics p_282470_,  int p_282674_,  int p_282014_,  float p_283132_)`
- `public void renderBackground(GuiGraphics p_298203_,  int p_299897_,  int p_297752_,  float p_300216_)`
- `public boolean isPauseScreen()`
- `private void setChatLine(String p_95613_)`
- `protected void updateNarrationState(NarrationElementOutput p_169238_)`
- `@Nullable private Style getComponentStyleAt(double p_232702_,  double p_232703_)`
- `public boolean handleChatInput(String p_242400_,  boolean p_242161_)`
- `public String normalizeChatMessage(String p_232707_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ConfirmLinkScreen

*class* `net.minecraft.client.gui.screens.ConfirmLinkScreen`

### Fields
- `private static final Component COPY_BUTTON_TEXT`
- `private static final Component WARNING_TEXT`
- `private final String url`
- `private final boolean showWarning`

### Inherited fields
- from `net.minecraft.client.gui.screens.ConfirmScreen`: `callback`, `noButton`, `yesButton`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected static MutableComponent confirmMessage(boolean p_239180_,  String p_239181_)`
- `protected static MutableComponent confirmMessage(boolean p_240014_)`
- `protected void addButtons(int p_169243_)`
- `public void copyToClipboard()`
- `public void render(GuiGraphics p_281548_,  int p_281671_,  int p_283205_,  float p_283628_)`
- `public static void confirmLinkNow(String p_275417_,  Screen p_275593_,  boolean p_275446_)`
- `public static Button.OnPress confirmLink(String p_275241_,  Screen p_275326_,  boolean p_275642_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.ConfirmScreen`: `addExitButton`, `getNarrationMessage`, `init`, `keyPressed`, `setDelay`, `shouldCloseOnEsc`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ConfirmScreen

*class* `net.minecraft.client.gui.screens.ConfirmScreen`

### Fields
- `private static final int MARGIN` (= 20)
- `private final Component message`
- `private MultiLineLabel multilineMessage`
- `protected Component yesButton`
- `protected Component noButton`
- `private int delayTicker`
- `protected final it.unimi.dsi.fastutil.booleans.BooleanConsumer callback`
- `private final List<Button> exitButtons`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public Component getNarrationMessage()`
- `protected void init()`
- `protected void addButtons(int p_169252_)`
- `protected void addExitButton(Button p_169254_)`
- `public void render(GuiGraphics p_281588_,  int p_283592_,  int p_283446_,  float p_282443_)`
- `private int titleTop()`
- `private int messageTop()`
- `private int messageHeight()`
- `public void setDelay(int p_95664_)`
- `public void tick()`
- `public boolean shouldCloseOnEsc()`
- `public boolean keyPressed(int p_95666_,  int p_95667_,  int p_95668_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ConnectScreen

*class* `net.minecraft.client.gui.screens.ConnectScreen`

### Fields
- `private static final AtomicInteger UNIQUE_THREAD_ID`
- `static final org.slf4j.Logger LOGGER`
- `private static final long NARRATION_DELAY_MS` (= 2000L)
- `public static final Component ABORT_CONNECTION`
- `public static final Component UNKNOWN_HOST_MESSAGE`
- `@Nullable volatile Connection connection`
- `@Nullable io.netty.channel.ChannelFuture channelFuture`
- `volatile boolean aborted`
- `final Screen parent`
- `private Component status`
- `private long lastNarration`
- `final Component connectFailedTitle`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public static void startConnecting(Screen p_279473_,  Minecraft p_279200_,  ServerAddress p_279150_,  ServerData p_279481_,  boolean p_279117_)`
- `private void connect(Minecraft p_251955_,  ServerAddress p_249536_,  @Nullable  ServerData p_252078_)`
- `private void updateStatus(Component p_95718_)`
- `public void tick()`
- `public boolean shouldCloseOnEsc()`
- `protected void init()`
- `public void render(GuiGraphics p_283201_,  int p_95701_,  int p_95702_,  float p_95703_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## CreateBuffetWorldScreen

*class* `net.minecraft.client.gui.screens.CreateBuffetWorldScreen`

### Fields
- `private static final Component BIOME_SELECT_INFO`
- `private final Screen parent`
- `private final Consumer<Holder<Biome>> applySettings`
- `final Registry<Biome> biomes`
- `private CreateBuffetWorldScreen.BiomeList list`
- `Holder<Biome> biome`
- `private Button doneButton`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void onClose()`
- `protected void init()`
- `void updateButtonValidity()`
- `public void render(GuiGraphics p_281766_,  int p_95757_,  int p_95758_,  float p_95759_)`
- `public void renderBackground(GuiGraphics p_297435_,  int p_300684_,  int p_299984_,  float p_301173_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## CreateBuffetWorldScreen.BiomeList

*class* `net.minecraft.client.gui.screens.CreateBuffetWorldScreen.BiomeList`

Enclosing class: CreateBuffetWorldScreen

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void setSelected(@Nullable  CreateBuffetWorldScreen.BiomeList.Entry p_95785_)`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getRowWidth`, `getScrollAmount`, `getScrollbarPosition`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `replaceEntries`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## CreateBuffetWorldScreen.BiomeList.Entry

*class* `net.minecraft.client.gui.screens.CreateBuffetWorldScreen.BiomeList.Entry`

Enclosing class: CreateBuffetWorldScreen.BiomeList

### Fields
- `final Holder.Reference<Biome> biome`
- `final Component name`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public Component getNarration()`
- `public void render(GuiGraphics p_281315_,  int p_282451_,  int p_283356_,  int p_283563_,  int p_282677_,  int p_283473_,  int p_283681_,  int p_281493_,  boolean p_281302_,  float p_283122_)`
- `public boolean mouseClicked(double p_95798_,  double p_95799_,  int p_95800_)`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## CreateFlatWorldScreen

*class* `net.minecraft.client.gui.screens.CreateFlatWorldScreen`

### Fields
- `static final ResourceLocation SLOT_SPRITE`
- `private static final int SLOT_BG_SIZE` (= 18)
- `private static final int SLOT_STAT_HEIGHT` (= 20)
- `private static final int SLOT_BG_X` (= 1)
- `private static final int SLOT_BG_Y` (= 1)
- `private static final int SLOT_FG_X` (= 2)
- `private static final int SLOT_FG_Y` (= 2)
- `protected final CreateWorldScreen parent`
- `private final Consumer<FlatLevelGeneratorSettings> applySettings`
- `FlatLevelGeneratorSettings generator`
- `private Component columnType`
- `private Component columnHeight`
- `private CreateFlatWorldScreen.DetailsList list`
- `private Button deleteLayerButton`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public FlatLevelGeneratorSettings settings()`
- `public void setConfig(FlatLevelGeneratorSettings p_95826_)`
- `protected void init()`
- `void updateButtonValidity()`
- `private boolean hasValidSelection()`
- `public void onClose()`
- `public void render(GuiGraphics p_282393_,  int p_95829_,  int p_95830_,  float p_95831_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## CreateFlatWorldScreen.DetailsList

*class* `net.minecraft.client.gui.screens.CreateFlatWorldScreen.DetailsList`

Enclosing class: CreateFlatWorldScreen

### Fields
- `private static final ResourceLocation STATS_ICON_LOCATION`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void setSelected(@Nullable  CreateFlatWorldScreen.DetailsList.Entry p_95855_)`
- `protected int getScrollbarPosition()`
- `public void resetRows()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getRowWidth`, `getScrollAmount`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `replaceEntries`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## CreateFlatWorldScreen.DetailsList.Entry

*class* `net.minecraft.client.gui.screens.CreateFlatWorldScreen.DetailsList.Entry`

Enclosing class: CreateFlatWorldScreen.DetailsList

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_281319_,  int p_281943_,  int p_283629_,  int p_283315_,  int p_282974_,  int p_281870_,  int p_283341_,  int p_281639_,  boolean p_282715_,  float p_281937_)`
- `private ItemStack getDisplayItem(BlockState p_169294_)`
- `public Component getNarration()`
- `public boolean mouseClicked(double p_95868_,  double p_95869_,  int p_95870_)`
- `private void blitSlot(GuiGraphics p_281733_,  int p_282373_,  int p_282844_,  ItemStack p_281263_)`
- `private void blitSlotBg(GuiGraphics p_282271_,  int p_281324_,  int p_283171_)`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## CreditsAndAttributionScreen

*class* `net.minecraft.client.gui.screens.CreditsAndAttributionScreen`

### Fields
- `private static final int BUTTON_SPACING` (= 8)
- `private static final int BUTTON_WIDTH` (= 210)
- `private static final Component TITLE`
- `private static final Component CREDITS_BUTTON`
- `private static final Component ATTRIBUTION_BUTTON`
- `private static final Component LICENSES_BUTTON`
- `private final Screen lastScreen`
- `private final HeaderAndFooterLayout layout`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `protected void repositionElements()`
- `private void openCreditsScreen()`
- `public void onClose()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `render`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## DatapackLoadFailureScreen

*class* `net.minecraft.client.gui.screens.DatapackLoadFailureScreen`

### Fields
- `private MultiLineLabel message`
- `private final Runnable callback`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void render(GuiGraphics p_283519_,  int p_282196_,  int p_283357_,  float p_283026_)`
- `public boolean shouldCloseOnEsc()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## DeathScreen

*class* `net.minecraft.client.gui.screens.DeathScreen`

### Fields
- `private static final ResourceLocation DRAFT_REPORT_SPRITE`
- `private int delayTicker`
- `private final Component causeOfDeath`
- `private final boolean hardcore`
- `private Component deathScore`
- `private final List<Button> exitButtons`
- `@Nullable private Button exitToTitleButton`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public boolean shouldCloseOnEsc()`
- `private void handleExitToTitleScreen()`
- `private void exitToTitleScreen()`
- `public void render(GuiGraphics p_283488_,  int p_283551_,  int p_283002_,  float p_281981_)`
- `public void renderBackground(GuiGraphics p_298829_,  int p_300097_,  int p_298737_,  float p_297685_)`
- `@Nullable private Style getClickedComponentStyleAt(int p_95918_)`
- `public boolean mouseClicked(double p_95914_,  double p_95915_,  int p_95916_)`
- `public boolean isPauseScreen()`
- `public void tick()`
- `private void setButtonsActive(boolean p_273413_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## DeathScreen.TitleConfirmScreen

*class* `net.minecraft.client.gui.screens.DeathScreen.TitleConfirmScreen`

Enclosing class: DeathScreen

### Inherited fields
- from `net.minecraft.client.gui.screens.ConfirmScreen`: `callback`, `noButton`, `yesButton`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Inherited methods
- from `net.minecraft.client.gui.screens.ConfirmScreen`: `addButtons`, `addExitButton`, `getNarrationMessage`, `init`, `keyPressed`, `render`, `setDelay`, `shouldCloseOnEsc`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## DemoIntroScreen

*class* `net.minecraft.client.gui.screens.DemoIntroScreen`

### Fields
- `private static final ResourceLocation DEMO_BACKGROUND_LOCATION`
- `private MultiLineLabel movementMessage`
- `private MultiLineLabel durationMessage`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void renderBackground(GuiGraphics p_283391_,  int p_299907_,  int p_301194_,  float p_297228_)`
- `public void render(GuiGraphics p_281247_,  int p_281844_,  int p_283693_,  float p_281842_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## DirectJoinServerScreen

*class* `net.minecraft.client.gui.screens.DirectJoinServerScreen`

### Fields
- `private static final Component ENTER_IP_LABEL`
- `private Button selectButton`
- `private final ServerData serverData`
- `private EditBox ipEdit`
- `private final it.unimi.dsi.fastutil.booleans.BooleanConsumer callback`
- `private final Screen lastScreen`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public boolean keyPressed(int p_95964_,  int p_95965_,  int p_95966_)`
- `protected void init()`
- `public void resize(Minecraft p_95973_,  int p_95974_,  int p_95975_)`
- `private void onSelect()`
- `public void onClose()`
- `public void removed()`
- `private void updateSelectButtonStatus()`
- `public void render(GuiGraphics p_282464_,  int p_95969_,  int p_95970_,  float p_95971_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## DisconnectedScreen

*class* `net.minecraft.client.gui.screens.DisconnectedScreen`

### Fields
- `private static final Component TO_SERVER_LIST`
- `private static final Component TO_TITLE`
- `private final Screen parent`
- `private final Component reason`
- `private final Component buttonText`
- `private final LinearLayout layout`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `protected void repositionElements()`
- `public Component getNarrationMessage()`
- `public boolean shouldCloseOnEsc()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `render`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## EditServerScreen

*class* `net.minecraft.client.gui.screens.EditServerScreen`

### Fields
- `private static final Component NAME_LABEL`
- `private static final Component IP_LABEL`
- `private Button addButton`
- `private final it.unimi.dsi.fastutil.booleans.BooleanConsumer callback`
- `private final ServerData serverData`
- `private EditBox ipEdit`
- `private EditBox nameEdit`
- `private final Screen lastScreen`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void resize(Minecraft p_96026_,  int p_96027_,  int p_96028_)`
- `private void onAdd()`
- `public void onClose()`
- `private void updateAddButtonStatus()`
- `public void render(GuiGraphics p_282351_,  int p_96022_,  int p_96023_,  float p_96024_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ErrorScreen

*class* `net.minecraft.client.gui.screens.ErrorScreen`

### Fields
- `private final Component message`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void render(GuiGraphics p_281469_,  int p_96053_,  int p_96054_,  float p_96055_)`
- `public void renderBackground(GuiGraphics p_297607_,  int p_297440_,  int p_299518_,  float p_300407_)`
- `public boolean shouldCloseOnEsc()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## FaviconTexture

*class* `net.minecraft.client.gui.screens.FaviconTexture`

### Fields
- `private static final ResourceLocation MISSING_LOCATION`
- `private static final int WIDTH` (= 64)
- `private static final int HEIGHT` (= 64)
- `private final TextureManager textureManager`
- `private final ResourceLocation textureLocation`
- `@Nullable private DynamicTexture texture`
- `private boolean closed`

### Methods
- `public static FaviconTexture forWorld(TextureManager p_289550_,  String p_289565_)`
- `public static FaviconTexture forServer(TextureManager p_289553_,  String p_289535_)`
- `public void upload(NativeImage p_289543_)`
- `public void clear()`
- `public ResourceLocation textureLocation()`
- `public void close()`
- `private void checkOpen()`

## GenericDirtMessageScreen

*class* `net.minecraft.client.gui.screens.GenericDirtMessageScreen`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public boolean shouldCloseOnEsc()`
- `public void render(GuiGraphics p_281274_,  int p_283012_,  int p_282072_,  float p_282608_)`
- `public void renderBackground(GuiGraphics p_299347_,  int p_301174_,  int p_298979_,  float p_300319_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## GenericWaitingScreen

*class* `net.minecraft.client.gui.screens.GenericWaitingScreen`

### Fields
- `private static final int TITLE_Y` (= 80)
- `private static final int MESSAGE_Y` (= 120)
- `private static final int MESSAGE_MAX_WIDTH` (= 360)
- `@Nullable private final Component messageText`
- `private final Component buttonLabel`
- `private final Runnable buttonCallback`
- `@Nullable private MultiLineLabel message`
- `private Button button`
- `private int disableButtonTicks`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public static GenericWaitingScreen createWaiting(Component p_240310_,  Component p_240311_,  Runnable p_240312_)`
- `public static GenericWaitingScreen createCompleted(Component p_240291_,  Component p_240292_,  Component p_240293_,  Runnable p_240294_)`
- `protected void init()`
- `public void tick()`
- `public void render(GuiGraphics p_283537_,  int p_239719_,  int p_239720_,  float p_239721_)`
- `public boolean shouldCloseOnEsc()`
- `public void onClose()`
- `public Component getNarrationMessage()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## InBedChatScreen

*class* `net.minecraft.client.gui.screens.InBedChatScreen`

### Fields
- `private Button leaveBedButton`

### Inherited fields
- from `net.minecraft.client.gui.screens.ChatScreen`: `commandSuggestions`, `input`, `MOUSE_SCROLL_SPEED`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void render(GuiGraphics p_281659_,  int p_283403_,  int p_281737_,  float p_282201_)`
- `public void renderBackground(GuiGraphics p_298005_,  int p_300247_,  int p_298725_,  float p_298346_)`
- `public void onClose()`
- `public boolean charTyped(char p_263331_,  int p_263427_)`
- `public boolean keyPressed(int p_96070_,  int p_96071_,  int p_96072_)`
- `private void sendWakeUp()`
- `public void onPlayerWokeUp()`

### Inherited methods
- from `net.minecraft.client.gui.screens.ChatScreen`: `handleChatInput`, `insertText`, `isPauseScreen`, `mouseClicked`, `mouseScrolled`, `moveInHistory`, `normalizeChatMessage`, `removed`, `resize`, `updateNarrationState`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## LanguageSelectScreen

*class* `net.minecraft.client.gui.screens.LanguageSelectScreen`

### Fields
- `private static final Component WARNING_LABEL`
- `private LanguageSelectScreen.LanguageSelectionList packSelectionList`
- `final LanguageManager languageManager`

### Inherited fields
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `lastScreen`, `options`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `void onDone()`
- `public boolean keyPressed(int p_289001_,  int p_288978_,  int p_289021_)`
- `public void render(GuiGraphics p_283397_,  int p_96090_,  int p_96091_,  float p_96092_)`
- `public void renderBackground(GuiGraphics p_299747_,  int p_298705_,  int p_297473_,  float p_297920_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `basicListRender`, `onClose`, `removed`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## LanguageSelectScreen.LanguageSelectionList

*class* `net.minecraft.client.gui.screens.LanguageSelectScreen.LanguageSelectionList`

Enclosing class: LanguageSelectScreen

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

## LanguageSelectScreen.LanguageSelectionList.Entry

*class* `net.minecraft.client.gui.screens.LanguageSelectScreen.LanguageSelectionList.Entry`

Enclosing class: LanguageSelectScreen.LanguageSelectionList

### Fields
- `final String code`
- `private final Component language`
- `private long lastClickTime`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_282025_,  int p_283548_,  int p_282485_,  int p_282109_,  int p_283314_,  int p_283303_,  int p_281337_,  int p_283527_,  boolean p_283295_,  float p_282169_)`
- `public boolean mouseClicked(double p_96122_,  double p_96123_,  int p_96124_)`
- `void select()`
- `public Component getNarration()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## LevelLoadingScreen

*class* `net.minecraft.client.gui.screens.LevelLoadingScreen`

### Fields
- `private static final long NARRATION_DELAY_MS` (= 2000L)
- `private final StoringChunkProgressListener progressListener`
- `private long lastNarration`
- `private boolean done`
- `private static final it.unimi.dsi.fastutil.objects.Object2IntMap<ChunkStatus> COLORS`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public boolean shouldCloseOnEsc()`
- `protected boolean shouldNarrateNavigation()`
- `public void removed()`
- `protected void updateNarratedWidget(NarrationElementOutput p_169312_)`
- `private Component getFormattedProgress()`
- `public void render(GuiGraphics p_283534_,  int p_96146_,  int p_96147_,  float p_96148_)`
- `public static void renderChunks(GuiGraphics p_283467_,  StoringChunkProgressListener p_96151_,  int p_96152_,  int p_96153_,  int p_96154_,  int p_96155_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `tick`, `triggerImmediateNarration`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## LoadingDotsText

*class* `net.minecraft.client.gui.screens.LoadingDotsText`

### Fields
- `private static final String[] FRAMES`
- `private static final long INTERVAL_MS` (= 300L)

### Methods
- `public static String get(long p_232745_)`

## LoadingOverlay

*class* `net.minecraft.client.gui.screens.LoadingOverlay`

### Fields
- `static final ResourceLocation MOJANG_STUDIOS_LOGO_LOCATION`
- `private static final int LOGO_BACKGROUND_COLOR`
- `private static final int LOGO_BACKGROUND_COLOR_DARK`
- `private static final IntSupplier BRAND_BACKGROUND`
- `private static final int LOGO_SCALE` (= 240)
- `private static final float LOGO_QUARTER_FLOAT` (= 60.0f)
- `private static final int LOGO_QUARTER` (= 60)
- `private static final int LOGO_HALF` (= 120)
- `private static final float LOGO_OVERLAP` (= 0.0625f)
- `private static final float SMOOTHING` (= 0.949999988079071f)
- `public static final long FADE_OUT_TIME` (= 1000L)
- `public static final long FADE_IN_TIME` (= 500L)
- `private final Minecraft minecraft`
- `private final ReloadInstance reload`
- `private final Consumer<Optional<Throwable>> onFinish`
- `private final boolean fadeIn`
- `private float currentProgress`
- `private long fadeOutStart`
- `private long fadeInStart`

### Methods
- `public static void registerTextures(Minecraft p_96190_)`
- `private static int replaceAlpha(int p_169325_,  int p_169326_)`
- `public void render(GuiGraphics p_281839_,  int p_282704_,  int p_283650_,  float p_283394_)`
- `private void drawProgressBar(GuiGraphics p_283125_,  int p_96184_,  int p_96185_,  int p_96186_,  int p_96187_,  float p_96188_)`
- `public boolean isPauseScreen()`

## LoadingOverlay.LogoTexture

*class* `net.minecraft.client.gui.screens.LoadingOverlay.LogoTexture`

Enclosing class: LoadingOverlay

### Inherited fields
- from `net.minecraft.client.renderer.texture.SimpleTexture`: `location`
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `blur`, `id`, `mipmap`, `NOT_ASSIGNED`

### Methods
- `protected SimpleTexture.TextureImage getTextureImage(ResourceManager p_96194_)`

### Inherited methods
- from `net.minecraft.client.renderer.texture.SimpleTexture`: `load`
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `bind`, `close`, `getId`, `releaseId`, `reset`, `restoreLastBlurMipmap`, `setBlurMipmap`, `setFilter`

## MenuScreens

*class* `net.minecraft.client.gui.screens.MenuScreens`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Map<MenuType<?>,MenuScreens.ScreenConstructor<?,?>> SCREENS`

### Methods
- `public static <T extends AbstractContainerMenu> void create(@Nullable  MenuType<T> p_96202_,  Minecraft p_96203_,  int p_96204_,  Component p_96205_)`
- `public static <T extends AbstractContainerMenu> Optional<MenuScreens.ScreenConstructor<T,?>> getScreenFactory(@Nullable  MenuType<T> p_96202_,  Minecraft p_96203_,  int p_96204_,  Component p_96205_)`
- `@Nullable private static <T extends AbstractContainerMenu> MenuScreens.ScreenConstructor<T,?> getConstructor(MenuType<T> p_96200_)`
- `public static <M extends AbstractContainerMenu, U extends Screen & MenuAccess<M>> void register(MenuType<? extends M> p_96207_,  MenuScreens.ScreenConstructor<M,U> p_96208_)`
- `public static boolean selfTest()`

## MenuScreens.ScreenConstructor>

*interface* `net.minecraft.client.gui.screens.MenuScreens.ScreenConstructor>`

Enclosing class: MenuScreens

### Methods
- `default void fromPacket(Component p_96210_,  MenuType<T> p_96211_,  Minecraft p_96212_,  int p_96213_)`
- `U create(T p_96215_,  Inventory p_96216_,  Component p_96217_)`

## MouseSettingsScreen

*class* `net.minecraft.client.gui.screens.MouseSettingsScreen`

### Fields
- `private OptionsList list`

### Inherited fields
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `lastScreen`, `options`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private static OptionInstance<?>[] options(Options p_232749_)`
- `protected void init()`
- `public void render(GuiGraphics p_281246_,  int p_282657_,  int p_282507_,  float p_282093_)`
- `public void renderBackground(GuiGraphics p_297259_,  int p_299330_,  int p_297899_,  float p_297632_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `basicListRender`, `onClose`, `removed`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## NoticeWithLinkScreen

*class* `net.minecraft.client.gui.screens.NoticeWithLinkScreen`

### Fields
- `private static final Component SYMLINK_WORLD_TITLE`
- `private static final Component SYMLINK_WORLD_MESSAGE_TEXT`
- `private static final Component SYMLINK_PACK_TITLE`
- `private static final Component SYMLINK_PACK_MESSAGE_TEXT`
- `private final Component message`
- `private final String url`
- `@Nullable private final Screen callbackScreen`
- `private final GridLayout layout`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public static Screen createWorldSymlinkWarningScreen(@Nullable  Screen p_299637_)`
- `public static Screen createPackSymlinkWarningScreen(@Nullable  Screen p_300671_)`
- `protected void init()`
- `protected void repositionElements()`
- `public Component getNarrationMessage()`
- `public void onClose()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `render`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## OnlineOptionsScreen

*class* `net.minecraft.client.gui.screens.OnlineOptionsScreen`

### Fields
- `@Nullable private final OptionInstance<com.mojang.datafixers.util.Unit> difficultyDisplay`

### Inherited fields
- from `net.minecraft.client.gui.screens.SimpleOptionsSubScreen`: `list`, `smallOptions`
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `lastScreen`, `options`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public static OnlineOptionsScreen createOnlineOptionsScreen(Minecraft p_262120_,  Screen p_261548_,  Options p_261609_)`
- `protected void init()`

### Inherited methods
- from `net.minecraft.client.gui.screens.SimpleOptionsSubScreen`: `createFooter`, `render`, `renderBackground`, `updateNarratorButton`
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `basicListRender`, `onClose`, `removed`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## OptionsScreen

*class* `net.minecraft.client.gui.screens.OptionsScreen`

### Fields
- `private static final Component SKIN_CUSTOMIZATION`
- `private static final Component SOUNDS`
- `private static final Component VIDEO`
- `private static final Component CONTROLS`
- `private static final Component LANGUAGE`
- `private static final Component CHAT`
- `private static final Component RESOURCEPACK`
- `private static final Component ACCESSIBILITY`
- `private static final Component TELEMETRY`
- `private static final Component CREDITS_AND_ATTRIBUTION`
- `private static final int COLUMNS` (= 2)
- `private final Screen lastScreen`
- `private final Options options`
- `private CycleButton<Difficulty> difficultyButton`
- `private LockIconButton lockButton`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `private void applyPacks(PackRepository p_275714_)`
- `private LayoutElement createOnlineButton()`
- `public static CycleButton<Difficulty> createDifficultyButton(int p_262051_,  int p_261805_,  String p_261598_,  Minecraft p_261922_)`
- `private void lockCallback(boolean p_96261_)`
- `public void removed()`
- `public void render(GuiGraphics p_283520_,  int p_281826_,  int p_283378_,  float p_281975_)`
- `public void onClose()`
- `private Button openScreenButton(Component p_261565_,  Supplier<Screen> p_262119_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## OptionsSubScreen

*class* `net.minecraft.client.gui.screens.OptionsSubScreen`

### Fields
- `protected final Screen lastScreen`
- `protected final Options options`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void removed()`
- `public void onClose()`
- `protected void basicListRender(GuiGraphics p_282011_,  OptionsList p_281793_,  int p_281640_,  int p_281598_,  float p_281558_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `render`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## OutOfMemoryScreen

*class* `net.minecraft.client.gui.screens.OutOfMemoryScreen`

### Fields
- `private MultiLineLabel message`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public boolean shouldCloseOnEsc()`
- `public void render(GuiGraphics p_283359_,  int p_96296_,  int p_96297_,  float p_96298_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## Overlay

*class* `net.minecraft.client.gui.screens.Overlay`

### Methods
- `public boolean isPauseScreen()`

### Inherited methods
- from `net.minecraft.client.gui.components.Renderable`: `render`

## PauseScreen

*class* `net.minecraft.client.gui.screens.PauseScreen`

### Fields
- `private static final ResourceLocation DRAFT_REPORT_SPRITE`
- `private static final int COLUMNS` (= 2)
- `private static final int MENU_PADDING_TOP` (= 50)
- `private static final int BUTTON_PADDING` (= 4)
- `private static final int BUTTON_WIDTH_FULL` (= 204)
- `private static final int BUTTON_WIDTH_HALF` (= 98)
- `private static final Component RETURN_TO_GAME`
- `private static final Component ADVANCEMENTS`
- `private static final Component STATS`
- `private static final Component SEND_FEEDBACK`
- `private static final Component REPORT_BUGS`
- `private static final Component OPTIONS`
- `private static final Component SHARE_TO_LAN`
- `private static final Component PLAYER_REPORTING`
- `private static final Component RETURN_TO_MENU`
- `private static final Component SAVING_LEVEL`
- `private static final Component GAME`
- `private static final Component PAUSED`
- `private final boolean showPauseMenu`
- `@Nullable private Button disconnectButton`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public boolean showsPauseMenu()`
- `protected void init()`
- `private void createPauseMenu()`
- `private void onDisconnect()`
- `public void tick()`
- `public void render(GuiGraphics p_281899_,  int p_281431_,  int p_283183_,  float p_281435_)`
- `public void renderBackground(GuiGraphics p_299656_,  int p_297892_,  int p_299995_,  float p_300532_)`
- `private Button openScreenButton(Component p_262567_,  Supplier<Screen> p_262581_)`
- `private Button openLinkButton(Component p_262593_,  String p_262659_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## PopupScreen

*class* `net.minecraft.client.gui.screens.PopupScreen`

### Fields
- `private static final int BUTTON_PADDING` (= 20)
- `private static final int BUTTON_MARGIN` (= 5)
- `private static final int BUTTON_HEIGHT` (= 20)
- `private final Component narrationMessage`
- `private final FormattedText message`
- `private final com.google.common.collect.ImmutableList<PopupScreen.ButtonOption> buttonOptions`
- `private MultiLineLabel messageLines`
- `private int contentTop`
- `private int buttonWidth`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public Component getNarrationMessage()`
- `public void init()`
- `public void render(GuiGraphics p_283167_,  int p_96350_,  int p_96351_,  float p_96352_)`
- `public void renderBackground(GuiGraphics p_298251_,  int p_300660_,  int p_298593_,  float p_298936_)`
- `public boolean shouldCloseOnEsc()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## PopupScreen.ButtonOption

*class* `net.minecraft.client.gui.screens.PopupScreen.ButtonOption`

Enclosing class: PopupScreen

### Fields
- `final Component message`
- `final Button.OnPress onPress`

## PresetFlatWorldScreen

*class* `net.minecraft.client.gui.screens.PresetFlatWorldScreen`

### Fields
- `static final ResourceLocation SLOT_SPRITE`
- `static final org.slf4j.Logger LOGGER`
- `private static final int SLOT_BG_SIZE` (= 18)
- `private static final int SLOT_STAT_HEIGHT` (= 20)
- `private static final int SLOT_BG_X` (= 1)
- `private static final int SLOT_BG_Y` (= 1)
- `private static final int SLOT_FG_X` (= 2)
- `private static final int SLOT_FG_Y` (= 2)
- `private static final ResourceKey<Biome> DEFAULT_BIOME`
- `public static final Component UNKNOWN_PRESET`
- `private final CreateFlatWorldScreen parent`
- `private Component shareText`
- `private Component listText`
- `private PresetFlatWorldScreen.PresetsList list`
- `private Button selectButton`
- `EditBox export`
- `FlatLevelGeneratorSettings settings`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `@Nullable private static FlatLayerInfo getLayerInfoFromString(HolderGetter<Block> p_259695_,  String p_259185_,  int p_259723_)`
- `private static List<FlatLayerInfo> getLayersInfoFromString(HolderGetter<Block> p_259080_,  String p_260301_)`
- `public static FlatLevelGeneratorSettings fromString(HolderGetter<Block> p_259084_,  HolderGetter<Biome> p_259583_,  HolderGetter<StructureSet> p_259610_,  HolderGetter<PlacedFeature> p_259243_,  String p_259508_,  FlatLevelGeneratorSettings p_259417_)`
- `static String save(FlatLevelGeneratorSettings p_205394_)`
- `protected void init()`
- `public boolean mouseScrolled(double p_96381_,  double p_96382_,  double p_96383_,  double p_297555_)`
- `public void resize(Minecraft p_96390_,  int p_96391_,  int p_96392_)`
- `public void onClose()`
- `public void render(GuiGraphics p_282713_,  int p_281914_,  int p_283700_,  float p_283598_)`
- `public void updateButtonValidity(boolean p_96450_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## PresetFlatWorldScreen.PresetsList

*class* `net.minecraft.client.gui.screens.PresetFlatWorldScreen.PresetsList`

Enclosing class: PresetFlatWorldScreen

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void setSelected(@Nullable  PresetFlatWorldScreen.PresetsList.Entry p_96472_)`
- `public boolean keyPressed(int p_96466_,  int p_96467_,  int p_96468_)`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getRowWidth`, `getScrollAmount`, `getScrollbarPosition`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `replaceEntries`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## PresetFlatWorldScreen.PresetsList.Entry

*class* `net.minecraft.client.gui.screens.PresetFlatWorldScreen.PresetsList.Entry`

Enclosing class: PresetFlatWorldScreen.PresetsList

### Fields
- `private static final ResourceLocation STATS_ICON_LOCATION`
- `private final FlatLevelGeneratorPreset preset`
- `private final Component name`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_283649_,  int p_281641_,  int p_281959_,  int p_281428_,  int p_282594_,  int p_283493_,  int p_283234_,  int p_283185_,  boolean p_282302_,  float p_282855_)`
- `public boolean mouseClicked(double p_96481_,  double p_96482_,  int p_96483_)`
- `void select()`
- `private void blitSlot(GuiGraphics p_283196_,  int p_282036_,  int p_281683_,  Item p_282242_)`
- `private void blitSlotBg(GuiGraphics p_281359_,  int p_282978_,  int p_283152_)`
- `public Component getNarration()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ProgressScreen

*class* `net.minecraft.client.gui.screens.ProgressScreen`

### Fields
- `@Nullable private Component header`
- `@Nullable private Component stage`
- `private int progress`
- `private boolean stop`
- `private final boolean clearScreenAfterStop`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public boolean shouldCloseOnEsc()`
- `protected boolean shouldNarrateNavigation()`
- `public void progressStartNoAbort(Component p_96520_)`
- `public void progressStart(Component p_96523_)`
- `public void progressStage(Component p_96525_)`
- `public void progressStagePercentage(int p_96513_)`
- `public void stop()`
- `public void render(GuiGraphics p_283582_,  int p_96516_,  int p_96517_,  float p_96518_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ReceivingLevelScreen

*class* `net.minecraft.client.gui.screens.ReceivingLevelScreen`

### Fields
- `private static final Component DOWNLOADING_TERRAIN_TEXT`
- `private static final long CHUNK_LOADING_START_WAIT_LIMIT_MS` (= 30000L)
- `private boolean loadingPacketsReceived`
- `private boolean oneTickSkipped`
- `private final long createdAt`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public boolean shouldCloseOnEsc()`
- `protected boolean shouldNarrateNavigation()`
- `public void render(GuiGraphics p_281489_,  int p_282902_,  int p_283018_,  float p_281251_)`
- `public void renderBackground(GuiGraphics p_298240_,  int p_297552_,  int p_298125_,  float p_297335_)`
- `public void tick()`
- `public void onClose()`
- `public void loadingPacketsReceived()`
- `public boolean isPauseScreen()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## Screen

*class* `net.minecraft.client.gui.screens.Screen`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Set<String> ALLOWED_PROTOCOLS`
- `private static final Component USAGE_NARRATION`
- `public static final ResourceLocation BACKGROUND_LOCATION`
- `protected final Component title`
- `private final List<GuiEventListener> children`
- `private final List<NarratableEntry> narratables`
- `@Nullable protected Minecraft minecraft`
- `private boolean initialized`
- `public int width`
- `public int height`
- `public final List<Renderable> renderables`
- `protected Font font`
- `@Nullable private URI clickedLink`
- `private static final long NARRATE_SUPPRESS_AFTER_INIT_TIME`
- `private static final long NARRATE_DELAY_NARRATOR_ENABLED`
- `private static final long NARRATE_DELAY_MOUSE_MOVE` (= 750L)
- `private static final long NARRATE_DELAY_MOUSE_ACTION` (= 200L)
- `private static final long NARRATE_DELAY_KEYBOARD_ACTION` (= 200L)
- `private final ScreenNarrationCollector narrationState`
- `private long narrationSuppressTime`
- `private long nextNarrationTime`
- `@Nullable private NarratableEntry lastNarratable`
- `@Nullable private Screen.DeferredTooltipRendering deferredTooltipRendering`
- `protected final Executor screenExecutor`

### Inherited fields
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public Component getTitle()`
- `public Component getNarrationMessage()`
- `public final void renderWithTooltip(GuiGraphics p_282345_,  int p_283456_,  int p_283586_,  float p_282339_)`
- `public void render(GuiGraphics p_281549_,  int p_281550_,  int p_282878_,  float p_282465_)`
- `public boolean keyPressed(int p_96552_,  int p_96553_,  int p_96554_)`
- `private FocusNavigationEvent.TabNavigation createTabEvent()`
- `private FocusNavigationEvent.ArrowNavigation createArrowEvent(ScreenDirection p_265049_)`
- `protected void setInitialFocus(GuiEventListener p_265756_)`
- `private void clearFocus()`
- `protected void changeFocus(ComponentPath p_265308_)`
- `public boolean shouldCloseOnEsc()`
- `public void onClose()`
- `protected <T extends GuiEventListener & Renderable & NarratableEntry> T addRenderableWidget(T p_169406_)`
- `protected <T extends Renderable> T addRenderableOnly(T p_254514_)`
- `protected <T extends GuiEventListener & NarratableEntry> T addWidget(T p_96625_)`
- `protected void removeWidget(GuiEventListener p_169412_)`
- `protected void clearWidgets()`
- `public static List<Component> getTooltipFromItem(Minecraft p_281881_,  ItemStack p_282833_)`
- `protected void insertText(String p_96587_,  boolean p_96588_)`
- `public boolean handleComponentClicked(@Nullable  Style p_96592_)`
- `public final void init(Minecraft p_96607_,  int p_96608_,  int p_96609_)`
- `protected void rebuildWidgets()`
- `public List<? extends GuiEventListener> children()`
- `protected void init()`
- `public void tick()`
- `public void removed()`
- `public void added()`
- `public void renderBackground(GuiGraphics p_283688_,  int p_299421_,  int p_298679_,  float p_297268_)`
- `public void renderTransparentBackground(GuiGraphics p_300203_)`
- `public void renderDirtBackground(GuiGraphics p_282281_)`
- `public boolean isPauseScreen()`
- `private void confirmLink(boolean p_96623_)`
- `private void openLink(URI p_96590_)`
- `public static boolean hasControlDown()`
- `public static boolean hasShiftDown()`
- `public static boolean hasAltDown()`
- `public static boolean isCut(int p_96629_)`
- `public static boolean isPaste(int p_96631_)`
- `public static boolean isCopy(int p_96633_)`
- `public static boolean isSelectAll(int p_96635_)`
- `protected void repositionElements()`
- `public void resize(Minecraft p_96575_,  int p_96576_,  int p_96577_)`
- `public static void wrapScreenError(Runnable p_96580_,  String p_96581_,  String p_96582_)`
- `protected boolean isValidCharacterForName(String p_96584_,  char p_96585_,  int p_96586_)`
- `public boolean isMouseOver(double p_96595_,  double p_96596_)`
- `public void onFilesDrop(List<Path> p_96591_)`
- `public Minecraft getMinecraft()`
- `private void scheduleNarration(long p_169381_,  boolean p_169382_)`
- `private void suppressNarration(long p_169379_)`
- `public void afterMouseMove()`
- `public void afterMouseAction()`
- `public void afterKeyboardAction()`
- `private boolean shouldRunNarration()`
- `public void handleDelayedNarration()`
- `public void triggerImmediateNarration(boolean p_169408_)`
- `private void runNarration(boolean p_169410_)`
- `protected boolean shouldNarrateNavigation()`
- `protected void updateNarrationState(NarrationElementOutput p_169396_)`
- `protected void updateNarratedWidget(NarrationElementOutput p_169403_)`
- `protected Component getUsageNarration()`
- `@Nullable public static Screen.NarratableSearchResult findNarratableWidget(List<? extends NarratableEntry> p_169401_,  @Nullable  NarratableEntry p_169402_)`
- `public void narrationEnabled()`
- `public void setTooltipForNextRenderPass(List<FormattedCharSequence> p_259937_)`
- `public void setTooltipForNextRenderPass(List<FormattedCharSequence> p_262939_,  ClientTooltipPositioner p_263078_,  boolean p_263107_)`
- `protected void setTooltipForNextRenderPass(Component p_259986_)`
- `public void setTooltipForNextRenderPass(Tooltip p_262992_,  ClientTooltipPositioner p_262980_,  boolean p_262988_)`
- `protected static void hideWidgets(AbstractWidget... p_202377_)`
- `public ScreenRectangle getRectangle()`
- `@Nullable public Music getBackgroundMusic()`
- `private void addEventWidget(GuiEventListener b)`

### Inherited methods
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## Screen.DeferredTooltipRendering

*record* `net.minecraft.client.gui.screens.Screen.DeferredTooltipRendering`

Enclosing class: Screen

### Fields
- `private final List<FormattedCharSequence> tooltip`
  The field for the tooltip record component.
- `private final ClientTooltipPositioner positioner`
  The field for the positioner record component.

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
- `public List<FormattedCharSequence> tooltip()`
  Returns the value of the tooltip record component.
  - returns: the value of the tooltip record component
- `public ClientTooltipPositioner positioner()`
  Returns the value of the positioner record component.
  - returns: the value of the positioner record component

## Screen.NarratableSearchResult

*class* `net.minecraft.client.gui.screens.Screen.NarratableSearchResult`

Enclosing class: Screen

### Fields
- `public final NarratableEntry entry`
- `public final int index`
- `public final NarratableEntry.NarrationPriority priority`

## ShareToLanScreen

*class* `net.minecraft.client.gui.screens.ShareToLanScreen`

### Fields
- `private static final int PORT_LOWER_BOUND` (= 1024)
- `private static final int PORT_HIGHER_BOUND` (= 65535)
- `private static final Component ALLOW_COMMANDS_LABEL`
- `private static final Component GAME_MODE_LABEL`
- `private static final Component INFO_TEXT`
- `private static final Component PORT_INFO_TEXT`
- `private static final Component PORT_UNAVAILABLE`
- `private static final Component INVALID_PORT`
- `private static final int INVALID_PORT_COLOR` (= 16733525)
- `private final Screen lastScreen`
- `private GameType gameMode`
- `private boolean commands`
- `private int port`
- `@Nullable private EditBox portEdit`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `@Nullable private Component tryParsePort(String p_259426_)`
- `public void render(GuiGraphics p_281738_,  int p_96653_,  int p_96654_,  float p_96655_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## SimpleOptionsSubScreen

*class* `net.minecraft.client.gui.screens.SimpleOptionsSubScreen`

### Fields
- `protected final OptionInstance<?>[] smallOptions`
- `@Nullable private AbstractWidget narratorButton`
- `protected OptionsList list`

### Inherited fields
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `lastScreen`, `options`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `protected void createFooter()`
- `public void render(GuiGraphics p_283632_,  int p_283304_,  int p_283302_,  float p_282245_)`
- `public void renderBackground(GuiGraphics p_300862_,  int p_299548_,  int p_298100_,  float p_298488_)`
- `public void updateNarratorButton()`

### Inherited methods
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `basicListRender`, `onClose`, `removed`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## SkinCustomizationScreen

*class* `net.minecraft.client.gui.screens.SkinCustomizationScreen`

### Inherited fields
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `lastScreen`, `options`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void render(GuiGraphics p_282063_,  int p_283510_,  int p_283109_,  float p_283448_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `basicListRender`, `onClose`, `removed`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## SoundOptionsScreen

*class* `net.minecraft.client.gui.screens.SoundOptionsScreen`

### Fields
- `private OptionsList list`

### Inherited fields
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `lastScreen`, `options`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private static OptionInstance<?>[] buttonOptions(Options p_250217_)`
- `protected void init()`
- `private OptionInstance<?>[] getAllSoundOptionsExceptMaster()`
- `public void render(GuiGraphics p_281823_,  int p_282932_,  int p_281927_,  float p_281292_)`
- `public void renderBackground(GuiGraphics p_298957_,  int p_300979_,  int p_299818_,  float p_299553_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `basicListRender`, `onClose`, `removed`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## TitleScreen

*class* `net.minecraft.client.gui.screens.TitleScreen`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final String DEMO_LEVEL_ID` (= "Demo_World")
- `public static final Component COPYRIGHT_TEXT`
- `public static final CubeMap CUBE_MAP`
- `private static final ResourceLocation PANORAMA_OVERLAY`
- `@Nullable private SplashRenderer splash`
- `private Button resetDemoButton`
- `@Nullable private RealmsNotificationsScreen realmsNotificationsScreen`
- `private final PanoramaRenderer panorama`
- `private final boolean fading`
- `private long fadeInStart`
- `@Nullable private TitleScreen.WarningLabel warningLabel`
- `private final LogoRenderer logoRenderer`
- `private TitleScreenModUpdateIndicator modUpdateNotification`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private boolean realmsNotificationsEnabled()`
- `public void tick()`
- `public static CompletableFuture<Void> preloadResources(TextureManager p_96755_,  Executor p_96756_)`
- `public boolean isPauseScreen()`
- `public boolean shouldCloseOnEsc()`
- `protected void init()`
- `private void createNormalMenuOptions(int p_96764_,  int p_96765_)`
- `@Nullable private Component getMultiplayerDisabledReason()`
- `private void createDemoMenuOptions(int p_96773_,  int p_96774_)`
- `private boolean checkDemoWorldPresence()`
- `private void realmsButtonClicked()`
- `public void render(GuiGraphics p_282860_,  int p_281753_,  int p_283539_,  float p_282628_)`
- `public void renderBackground(GuiGraphics p_301363_,  int p_300303_,  int p_299762_,  float p_300311_)`
- `public boolean mouseClicked(double p_96735_,  double p_96736_,  int p_96737_)`
- `public void removed()`
- `public void added()`
- `private void confirmDemo(boolean p_96778_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## TitleScreen.WarningLabel

*record* `net.minecraft.client.gui.screens.TitleScreen.WarningLabel`

Enclosing class: TitleScreen

### Fields
- `private final Font font`
  The field for the font record component.
- `private final MultiLineLabel label`
  The field for the label record component.
- `private final int x`
  The field for the x record component.
- `private final int y`
  The field for the y record component.

### Methods
- `public void render(GuiGraphics p_281783_,  int p_281383_)`
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
- `public Font font()`
  Returns the value of the font record component.
  - returns: the value of the font record component
- `public MultiLineLabel label()`
  Returns the value of the label record component.
  - returns: the value of the label record component
- `public int x()`
  Returns the value of the x record component.
  - returns: the value of the x record component
- `public int y()`
  Returns the value of the y record component.
  - returns: the value of the y record component

## VideoSettingsScreen

*class* `net.minecraft.client.gui.screens.VideoSettingsScreen`

### Fields
- `private static final Component FABULOUS`
- `private static final Component WARNING_MESSAGE`
- `private static final Component WARNING_TITLE`
- `private static final Component BUTTON_ACCEPT`
- `private static final Component BUTTON_CANCEL`
- `private OptionsList list`
- `private final GpuWarnlistManager gpuWarnlistManager`
- `private final int oldMipmaps`

### Inherited fields
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `lastScreen`, `options`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private static OptionInstance<?>[] options(Options p_232812_)`
- `protected void init()`
- `public void removed()`
- `public boolean mouseClicked(double p_96809_,  double p_96810_,  int p_96811_)`
- `public boolean mouseScrolled(double p_278332_,  double p_278334_,  double p_278285_,  double p_300252_)`
- `public void render(GuiGraphics p_282311_,  int p_283219_,  int p_282352_,  float p_283266_)`
- `public void renderBackground(GuiGraphics p_299806_,  int p_297567_,  int p_299526_,  float p_298680_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.OptionsSubScreen`: `basicListRender`, `onClose`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## WinScreen

*class* `net.minecraft.client.gui.screens.WinScreen`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final ResourceLocation VIGNETTE_LOCATION`
- `private static final Component SECTION_HEADING`
- `private static final String NAME_PREFIX` (= " ")
- `private static final String OBFUSCATE_TOKEN`
- `private static final float SPEEDUP_FACTOR` (= 5.0f)
- `private static final float SPEEDUP_FACTOR_FAST` (= 15.0f)
- `private final boolean poem`
- `private final Runnable onFinished`
- `private float scroll`
- `private List<FormattedCharSequence> lines`
- `private it.unimi.dsi.fastutil.ints.IntSet centeredLines`
- `private int totalScrollLength`
- `private boolean speedupActive`
- `private final it.unimi.dsi.fastutil.ints.IntSet speedupModifiers`
- `private float scrollSpeed`
- `private final float unmodifiedScrollSpeed`
- `private int direction`
- `private final LogoRenderer logoRenderer`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private float calculateScrollSpeed()`
- `public void tick()`
- `public boolean keyPressed(int p_169469_,  int p_169470_,  int p_169471_)`
- `public boolean keyReleased(int p_169476_,  int p_169477_,  int p_169478_)`
- `public void onClose()`
- `private void respawn()`
- `protected void init()`
- `private void wrapCreditsIO(String p_197399_,  WinScreen.CreditsReader p_197400_)`
- `private void addPoemFile(Reader p_232818_)  throws IOException`
  - throws: IOException
- `private void addCreditsFile(Reader p_232820_)`
- `private void addEmptyLine()`
- `private void addPoemLines(String p_181398_)`
- `private void addCreditsLine(Component p_169473_,  boolean p_169474_)`
- `public void render(GuiGraphics p_281907_,  int p_282364_,  int p_282696_,  float p_281316_)`
- `public void renderBackground(GuiGraphics p_282239_,  int p_298581_,  int p_297654_,  float p_300743_)`
- `public void removed()`
- `public Music getBackgroundMusic()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## WinScreen.CreditsReader

*interface* `net.minecraft.client.gui.screens.WinScreen.CreditsReader`

Enclosing class: WinScreen

### Methods
- `void read(Reader p_232822_)  throws IOException`
  - throws: IOException
