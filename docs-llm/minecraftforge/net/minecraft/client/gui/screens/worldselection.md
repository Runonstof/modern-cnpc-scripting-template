# net.minecraft.client.gui.screens.worldselection

- [Class WorldCreationUiState.SelectedGameMode](#class-worldcreationuistate.selectedgamemode)
- [ConfirmExperimentalFeaturesScreen](#confirmexperimentalfeaturesscreen)
- [ConfirmExperimentalFeaturesScreen.DetailsScreen](#confirmexperimentalfeaturesscreen.detailsscreen)
- [ConfirmExperimentalFeaturesScreen.DetailsScreen.PackList](#confirmexperimentalfeaturesscreen.detailsscreen.packlist)
- [ConfirmExperimentalFeaturesScreen.DetailsScreen.PackListEntry](#confirmexperimentalfeaturesscreen.detailsscreen.packlistentry)
- [CreateWorldScreen](#createworldscreen)
- [CreateWorldScreen.DataPackReloadCookie](#createworldscreen.datapackreloadcookie)
- [CreateWorldScreen.GameTab](#createworldscreen.gametab)
- [CreateWorldScreen.MoreTab](#createworldscreen.moretab)
- [CreateWorldScreen.WorldTab](#createworldscreen.worldtab)
- [EditGameRulesScreen](#editgamerulesscreen)
- [EditGameRulesScreen.BooleanRuleEntry](#editgamerulesscreen.booleanruleentry)
- [EditGameRulesScreen.CategoryRuleEntry](#editgamerulesscreen.categoryruleentry)
- [EditGameRulesScreen.EntryFactory>](#editgamerulesscreen.entryfactory)
- [EditGameRulesScreen.GameRuleEntry](#editgamerulesscreen.gameruleentry)
- [EditGameRulesScreen.IntegerRuleEntry](#editgamerulesscreen.integerruleentry)
- [EditGameRulesScreen.RuleEntry](#editgamerulesscreen.ruleentry)
- [EditGameRulesScreen.RuleList](#editgamerulesscreen.rulelist)
- [EditWorldScreen](#editworldscreen)
- [ExperimentsScreen](#experimentsscreen)
- [OptimizeWorldScreen](#optimizeworldscreen)
- [PresetEditor](#preseteditor)
- [SelectWorldScreen](#selectworldscreen)
- [SwitchGrid](#switchgrid)
- [SwitchGrid.Builder](#switchgrid.builder)
- [SwitchGrid.InfoUnderneathSettings](#switchgrid.infounderneathsettings)
- [SwitchGrid.LabeledSwitch](#switchgrid.labeledswitch)
- [SwitchGrid.SwitchBuilder](#switchgrid.switchbuilder)
- [WorldCreationContext](#worldcreationcontext)
- [WorldCreationContext.DimensionsUpdater](#worldcreationcontext.dimensionsupdater)
- [WorldCreationContext.OptionsModifier](#worldcreationcontext.optionsmodifier)
- [WorldCreationUiState](#worldcreationuistate)
- [WorldCreationUiState.WorldTypeEntry](#worldcreationuistate.worldtypeentry)
- [WorldOpenFlows](#worldopenflows)
- [WorldSelectionList](#worldselectionlist)
- [WorldSelectionList.Entry](#worldselectionlist.entry)
- [WorldSelectionList.LoadingHeader](#worldselectionlist.loadingheader)
- [WorldSelectionList.WorldListEntry](#worldselectionlist.worldlistentry)
## Class WorldCreationUiState.SelectedGameMode

*enum* `net.minecraft.client.gui.screens.worldselection.Class WorldCreationUiState.SelectedGameMode`

Enclosing class: WorldCreationUiState

### Fields
- `public final GameType gameType`
- `public final Component displayName`
- `private final Component info`

### Methods
- `public static WorldCreationUiState.SelectedGameMode[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static WorldCreationUiState.SelectedGameMode valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public Component getInfo()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ConfirmExperimentalFeaturesScreen

*class* `net.minecraft.client.gui.screens.worldselection.ConfirmExperimentalFeaturesScreen`

### Fields
- `private static final Component TITLE`
- `private static final Component MESSAGE`
- `private static final Component DETAILS_BUTTON`
- `private static final int COLUMN_SPACING` (= 10)
- `private static final int DETAILS_BUTTON_WIDTH` (= 100)
- `private final it.unimi.dsi.fastutil.booleans.BooleanConsumer callback`
- `final Collection<Pack> enabledPacks`
- `private final GridLayout layout`

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

## ConfirmExperimentalFeaturesScreen.DetailsScreen

*class* `net.minecraft.client.gui.screens.worldselection.ConfirmExperimentalFeaturesScreen.DetailsScreen`

Enclosing class: ConfirmExperimentalFeaturesScreen

### Fields
- `private ConfirmExperimentalFeaturesScreen.DetailsScreen.PackList packList`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void onClose()`
- `protected void init()`
- `public void render(GuiGraphics p_281368_,  int p_281413_,  int p_281557_,  float p_282492_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ConfirmExperimentalFeaturesScreen.DetailsScreen.PackList

*class* `net.minecraft.client.gui.screens.worldselection.ConfirmExperimentalFeaturesScreen.DetailsScreen.PackList`

Enclosing class: ConfirmExperimentalFeaturesScreen.DetailsScreen

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public int getRowWidth()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getScrollAmount`, `getScrollbarPosition`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `render`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `replaceEntries`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `setSelected`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ConfirmExperimentalFeaturesScreen.DetailsScreen.PackListEntry

*class* `net.minecraft.client.gui.screens.worldselection.ConfirmExperimentalFeaturesScreen.DetailsScreen.PackListEntry`

Enclosing class: ConfirmExperimentalFeaturesScreen.DetailsScreen

### Fields
- `private final Component packId`
- `private final Component message`
- `private final MultiLineLabel splitMessage`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_282199_,  int p_282727_,  int p_283089_,  int p_283116_,  int p_281268_,  int p_283038_,  int p_283070_,  int p_282448_,  boolean p_281417_,  float p_283226_)`
- `public Component getNarration()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseClicked`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## CreateWorldScreen

*class* `net.minecraft.client.gui.screens.worldselection.CreateWorldScreen`

### Fields
- `private static final int GROUP_BOTTOM` (= 1)
- `private static final int TAB_COLUMN_WIDTH` (= 210)
- `private static final int FOOTER_HEIGHT` (= 36)
- `private static final org.slf4j.Logger LOGGER`
- `private static final String TEMP_WORLD_PREFIX` (= "mcworld-")
- `static final Component GAME_MODEL_LABEL`
- `static final Component NAME_LABEL`
- `static final Component EXPERIMENTS_LABEL`
- `static final Component ALLOW_CHEATS_INFO`
- `private static final Component PREPARING_WORLD_DATA`
- `private static final int HORIZONTAL_BUTTON_SPACING` (= 10)
- `private static final int VERTICAL_BUTTON_SPACING` (= 8)
- `public static final ResourceLocation HEADER_SEPERATOR`
- `public static final ResourceLocation FOOTER_SEPERATOR`
- `public static final ResourceLocation LIGHT_DIRT_BACKGROUND`
- `final WorldCreationUiState uiState`
- `private final TabManager tabManager`
- `private boolean recreated`
- `private final DirectoryValidator packValidator`
- `@Nullable private final Screen lastScreen`
- `@Nullable private Path tempDataPackDir`
- `@Nullable private PackRepository tempDataPackRepository`
- `@Nullable private GridLayout bottomButtons`
- `@Nullable private TabNavigationBar tabNavigationBar`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public static void openFresh(Minecraft p_232897_,  @Nullable  Screen p_232898_)`
- `public static CreateWorldScreen createFromExisting(Minecraft p_276017_,  @Nullable  Screen p_276029_,  LevelSettings p_276055_,  WorldCreationContext p_276028_,  @Nullable  Path p_276040_)`
- `public WorldCreationUiState getUiState()`
- `protected void init()`
- `public void repositionElements()`
- `private static void queueLoadScreen(Minecraft p_232900_,  Component p_232901_)`
- `private void onCreate()`
- `private void createNewWorld(PrimaryLevelData.SpecialWorldProperty p_250577_,  LayeredRegistryAccess<RegistryLayer> p_249152_,  com.mojang.serialization.Lifecycle p_249994_)`
- `private LevelSettings createLevelSettings(boolean p_205448_)`
- `public boolean keyPressed(int p_100875_,  int p_100876_,  int p_100877_)`
- `public void onClose()`
- `public void popScreen()`
- `public void render(GuiGraphics p_282137_,  int p_283640_,  int p_281243_,  float p_282743_)`
- `public void renderDirtBackground(GuiGraphics p_281950_)`
- `protected <T extends GuiEventListener & NarratableEntry> T addWidget(T p_100948_)`
- `protected <T extends GuiEventListener & Renderable & NarratableEntry> T addRenderableWidget(T p_170199_)`
- `@Nullable private Path getTempDataPackDir()`
- `void openExperimentsScreen(WorldDataConfiguration p_270214_)`
- `void openDataPackSelectionScreen(WorldDataConfiguration p_268186_)`
- `private void tryApplyNewDataPacks(PackRepository p_270299_,  boolean p_270896_,  Consumer<WorldDataConfiguration> p_270760_)`
- `private void applyNewPackConfig(PackRepository p_270272_,  WorldDataConfiguration p_270573_,  Consumer<WorldDataConfiguration> p_270552_)`
- `private static WorldLoader.InitConfig createDefaultLoadConfig(PackRepository p_251829_,  WorldDataConfiguration p_251555_)`
- `private void removeTempDataPackDir()`
- `private static void copyBetweenDirs(Path p_100913_,  Path p_100914_,  Path p_100915_)`
- `private Optional<LevelStorageSource.LevelStorageAccess> createNewWorldDirectory()`
- `@Nullable public static Path createTempDataPackDirFromExistingWorld(Path p_100907_,  Minecraft p_100908_)`
- `@Nullable private com.mojang.datafixers.util.Pair<Path,PackRepository> getDataPackSelectionSettings(WorldDataConfiguration p_268328_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderTransparentBackground`, `renderWithTooltip`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## CreateWorldScreen.DataPackReloadCookie

*record* `net.minecraft.client.gui.screens.worldselection.CreateWorldScreen.DataPackReloadCookie`

Enclosing class: CreateWorldScreen

### Fields
- `private final WorldGenSettings worldGenSettings`
  The field for the worldGenSettings record component.
- `private final WorldDataConfiguration dataConfiguration`
  The field for the dataConfiguration record component.

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
- `public WorldGenSettings worldGenSettings()`
  Returns the value of the worldGenSettings record component.
  - returns: the value of the worldGenSettings record component
- `public WorldDataConfiguration dataConfiguration()`
  Returns the value of the dataConfiguration record component.
  - returns: the value of the dataConfiguration record component

## CreateWorldScreen.GameTab

*class* `net.minecraft.client.gui.screens.worldselection.CreateWorldScreen.GameTab`

Enclosing class: CreateWorldScreen

### Fields
- `private static final Component TITLE`
- `private static final Component ALLOW_CHEATS`
- `private final EditBox nameEdit`

### Inherited fields
- from `net.minecraft.client.gui.components.tabs.GridLayoutTab`: `layout`

### Inherited methods
- from `net.minecraft.client.gui.components.tabs.GridLayoutTab`: `doLayout`, `getTabTitle`, `visitChildren`

## CreateWorldScreen.MoreTab

*class* `net.minecraft.client.gui.screens.worldselection.CreateWorldScreen.MoreTab`

Enclosing class: CreateWorldScreen

### Fields
- `private static final Component TITLE`
- `private static final Component GAME_RULES_LABEL`
- `private static final Component DATA_PACKS_LABEL`

### Inherited fields
- from `net.minecraft.client.gui.components.tabs.GridLayoutTab`: `layout`

### Methods
- `private void openGameRulesScreen()`

### Inherited methods
- from `net.minecraft.client.gui.components.tabs.GridLayoutTab`: `doLayout`, `getTabTitle`, `visitChildren`

## CreateWorldScreen.WorldTab

*class* `net.minecraft.client.gui.screens.worldselection.CreateWorldScreen.WorldTab`

Enclosing class: CreateWorldScreen

### Fields
- `private static final Component TITLE`
- `private static final Component AMPLIFIED_HELP_TEXT`
- `private static final Component GENERATE_STRUCTURES`
- `private static final Component GENERATE_STRUCTURES_INFO`
- `private static final Component BONUS_CHEST`
- `private static final Component SEED_LABEL`
- `static final Component SEED_EMPTY_HINT`
- `private static final int WORLD_TAB_WIDTH` (= 310)
- `private final EditBox seedEdit`
- `private final Button customizeTypeButton`

### Inherited fields
- from `net.minecraft.client.gui.components.tabs.GridLayoutTab`: `layout`

### Methods
- `private void openPresetEditor()`
- `private CycleButton.ValueListSupplier<WorldCreationUiState.WorldTypeEntry> createWorldTypeValueSupplier()`
- `private static MutableComponent createTypeButtonNarration(CycleButton<WorldCreationUiState.WorldTypeEntry> p_268292_)`

### Inherited methods
- from `net.minecraft.client.gui.components.tabs.GridLayoutTab`: `doLayout`, `getTabTitle`, `visitChildren`

## EditGameRulesScreen

*class* `net.minecraft.client.gui.screens.worldselection.EditGameRulesScreen`

### Fields
- `private final Consumer<Optional<GameRules>> exitCallback`
- `private EditGameRulesScreen.RuleList rules`
- `private final Set<EditGameRulesScreen.RuleEntry> invalidEntries`
- `private Button doneButton`
- `@Nullable private List<FormattedCharSequence> tooltip`
- `private final GameRules gameRules`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void onClose()`
- `public void render(GuiGraphics p_282252_,  int p_281351_,  int p_282537_,  float p_281589_)`
- `private void updateDoneButton()`
- `void markInvalid(EditGameRulesScreen.RuleEntry p_101061_)`
- `void clearInvalid(EditGameRulesScreen.RuleEntry p_101075_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## EditGameRulesScreen.BooleanRuleEntry

*class* `net.minecraft.client.gui.screens.worldselection.EditGameRulesScreen.BooleanRuleEntry`

Enclosing class: EditGameRulesScreen

### Fields
- `private final CycleButton<Boolean> checkbox`

### Inherited fields
- from `net.minecraft.client.gui.screens.worldselection.EditGameRulesScreen.GameRuleEntry`: `children`
- from `net.minecraft.client.gui.screens.worldselection.EditGameRulesScreen.RuleEntry`: `tooltip`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_281587_,  int p_281471_,  int p_281257_,  int p_282541_,  int p_282993_,  int p_283543_,  int p_281322_,  int p_282930_,  boolean p_283227_,  float p_283364_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.worldselection.EditGameRulesScreen.GameRuleEntry`: `children`, `narratables`, `renderLabel`
- from `net.minecraft.client.gui.components.ContainerObjectSelectionList.Entry`: `focusPathAtIndex`, `getFocused`, `isDragging`, `mouseClicked`, `nextFocusPath`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getRectangle`, `isMouseOver`, `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## EditGameRulesScreen.CategoryRuleEntry

*class* `net.minecraft.client.gui.screens.worldselection.EditGameRulesScreen.CategoryRuleEntry`

Enclosing class: EditGameRulesScreen

### Fields
- `final Component label`

### Inherited fields
- from `net.minecraft.client.gui.screens.worldselection.EditGameRulesScreen.RuleEntry`: `tooltip`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_283335_,  int p_283214_,  int p_283476_,  int p_281365_,  int p_281817_,  int p_283006_,  int p_282893_,  int p_282500_,  boolean p_283421_,  float p_282445_)`
- `public List<? extends GuiEventListener> children()`
- `public List<? extends NarratableEntry> narratables()`

### Inherited methods
- from `net.minecraft.client.gui.components.ContainerObjectSelectionList.Entry`: `focusPathAtIndex`, `getFocused`, `isDragging`, `mouseClicked`, `nextFocusPath`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getRectangle`, `isMouseOver`, `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## EditGameRulesScreen.EntryFactory>

*interface* `net.minecraft.client.gui.screens.worldselection.EditGameRulesScreen.EntryFactory>`

Enclosing class: EditGameRulesScreen

### Methods
- `EditGameRulesScreen.RuleEntry create(Component p_101155_,  List<FormattedCharSequence> p_101156_,  String p_101157_,  T p_101158_)`

## EditGameRulesScreen.GameRuleEntry

*class* `net.minecraft.client.gui.screens.worldselection.EditGameRulesScreen.GameRuleEntry`

Enclosing class: EditGameRulesScreen

### Fields
- `private final List<FormattedCharSequence> label`
- `protected final List<AbstractWidget> children`

### Inherited fields
- from `net.minecraft.client.gui.screens.worldselection.EditGameRulesScreen.RuleEntry`: `tooltip`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public List<? extends GuiEventListener> children()`
- `public List<? extends NarratableEntry> narratables()`
- `protected void renderLabel(GuiGraphics p_282711_,  int p_281539_,  int p_281414_)`

### Inherited methods
- from `net.minecraft.client.gui.components.ContainerObjectSelectionList.Entry`: `focusPathAtIndex`, `getFocused`, `isDragging`, `mouseClicked`, `nextFocusPath`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `render`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getRectangle`, `isMouseOver`, `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## EditGameRulesScreen.IntegerRuleEntry

*class* `net.minecraft.client.gui.screens.worldselection.EditGameRulesScreen.IntegerRuleEntry`

Enclosing class: EditGameRulesScreen

### Fields
- `private final EditBox input`

### Inherited fields
- from `net.minecraft.client.gui.screens.worldselection.EditGameRulesScreen.GameRuleEntry`: `children`
- from `net.minecraft.client.gui.screens.worldselection.EditGameRulesScreen.RuleEntry`: `tooltip`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_281756_,  int p_281882_,  int p_281876_,  int p_283136_,  int p_283044_,  int p_282526_,  int p_282433_,  int p_281816_,  boolean p_282227_,  float p_281751_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.worldselection.EditGameRulesScreen.GameRuleEntry`: `children`, `narratables`, `renderLabel`
- from `net.minecraft.client.gui.components.ContainerObjectSelectionList.Entry`: `focusPathAtIndex`, `getFocused`, `isDragging`, `mouseClicked`, `nextFocusPath`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getRectangle`, `isMouseOver`, `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## EditGameRulesScreen.RuleEntry

*class* `net.minecraft.client.gui.screens.worldselection.EditGameRulesScreen.RuleEntry`

Enclosing class: EditGameRulesScreen

### Fields
- `@Nullable final List<FormattedCharSequence> tooltip`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Inherited methods
- from `net.minecraft.client.gui.components.ContainerObjectSelectionList.Entry`: `focusPathAtIndex`, `getFocused`, `isDragging`, `mouseClicked`, `narratables`, `nextFocusPath`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `render`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `children`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getRectangle`, `isMouseOver`, `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## EditGameRulesScreen.RuleList

*class* `net.minecraft.client.gui.screens.worldselection.EditGameRulesScreen.RuleList`

Enclosing class: EditGameRulesScreen

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_283604_,  int p_281425_,  int p_282248_,  float p_281463_)`

### Inherited methods
- from `net.minecraft.client.gui.components.ContainerObjectSelectionList`: `isSelectedItem`, `narrationPriority`, `nextFocusPath`, `setFocused`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `centerScrollOn`, `children`, `clearEntries`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getRowWidth`, `getScrollAmount`, `getScrollbarPosition`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `replaceEntries`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `setSelected`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyPressed`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## EditWorldScreen

*class* `net.minecraft.client.gui.screens.worldselection.EditWorldScreen`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Component NAME_LABEL`
- `private Button renameButton`
- `private final it.unimi.dsi.fastutil.booleans.BooleanConsumer callback`
- `private EditBox nameEdit`
- `private final LevelStorageSource.LevelStorageAccess levelAccess`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void resize(Minecraft p_101269_,  int p_101270_,  int p_101271_)`
- `public void onClose()`
- `private void onRename()`
- `public static void makeBackupAndShowToast(LevelStorageSource p_101261_,  String p_101262_)`
- `public static boolean makeBackupAndShowToast(LevelStorageSource.LevelStorageAccess p_101259_)`
- `public void render(GuiGraphics p_281742_,  int p_101265_,  int p_101266_,  float p_101267_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ExperimentsScreen

*class* `net.minecraft.client.gui.screens.worldselection.ExperimentsScreen`

### Fields
- `private static final int MAIN_CONTENT_WIDTH` (= 310)
- `private final HeaderAndFooterLayout layout`
- `private final Screen parent`
- `private final PackRepository packRepository`
- `private final Consumer<PackRepository> output`
- `private final it.unimi.dsi.fastutil.objects.Object2BooleanMap<Pack> packs`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `private static Component getHumanReadableTitle(Pack p_270861_)`
- `public void onClose()`
- `private void onDone()`
- `protected void repositionElements()`
- `public void renderBackground(GuiGraphics p_297235_,  int p_298951_,  int p_298046_,  float p_297474_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `render`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## OptimizeWorldScreen

*class* `net.minecraft.client.gui.screens.worldselection.OptimizeWorldScreen`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final it.unimi.dsi.fastutil.objects.Object2IntMap<ResourceKey<Level>> DIMENSION_COLORS`
- `private final it.unimi.dsi.fastutil.booleans.BooleanConsumer callback`
- `private final WorldUpgrader upgrader`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `@Nullable public static OptimizeWorldScreen create(Minecraft p_101316_,  it.unimi.dsi.fastutil.booleans.BooleanConsumer p_101317_,  com.mojang.datafixers.DataFixer p_101318_,  LevelStorageSource.LevelStorageAccess p_101319_,  boolean p_101320_)`
- `protected void init()`
- `public void tick()`
- `public void onClose()`
- `public void removed()`
- `public void render(GuiGraphics p_281829_,  int p_101312_,  int p_101313_,  float p_101314_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `keyPressed`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## PresetEditor

*interface* `net.minecraft.client.gui.screens.worldselection.PresetEditor`

### Fields
- `@Deprecated static final Map<Optional<ResourceKey<WorldPreset>>,PresetEditor> EDITORS` (deprecated)

### Methods
- `Screen createEditScreen(CreateWorldScreen p_232977_,  WorldCreationContext p_232978_)`
- `private static WorldCreationContext.DimensionsUpdater flatWorldConfigurator(FlatLevelGeneratorSettings p_250871_)`
- `private static WorldCreationContext.DimensionsUpdater fixedBiomeConfigurator(Holder<Biome> p_248835_)`

## SelectWorldScreen

*class* `net.minecraft.client.gui.screens.worldselection.SelectWorldScreen`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final WorldOptions TEST_OPTIONS`
- `protected final Screen lastScreen`
- `private Button deleteButton`
- `private Button selectButton`
- `private Button renameButton`
- `private Button copyButton`
- `protected EditBox searchBox`
- `private WorldSelectionList list`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public boolean keyPressed(int p_101347_,  int p_101348_,  int p_101349_)`
- `public void onClose()`
- `public boolean charTyped(char p_101340_,  int p_101341_)`
- `public void render(GuiGraphics p_282382_,  int p_281534_,  int p_281859_,  float p_283289_)`
- `public void updateButtonStatus(boolean p_276122_,  boolean p_276113_)`
- `public void removed()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## SwitchGrid

*class* `net.minecraft.client.gui.screens.worldselection.SwitchGrid`

### Fields
- `private static final int DEFAULT_SWITCH_BUTTON_WIDTH` (= 44)
- `private final List<SwitchGrid.LabeledSwitch> switches`

### Methods
- `public void refreshStates()`
- `public static SwitchGrid.Builder builder(int p_268344_)`

## SwitchGrid.Builder

*class* `net.minecraft.client.gui.screens.worldselection.SwitchGrid.Builder`

Enclosing class: SwitchGrid

### Fields
- `final int width`
- `private final List<SwitchGrid.SwitchBuilder> switchBuilders`
- `int paddingLeft`
- `int rowSpacing`
- `int rowCount`
- `Optional<SwitchGrid.InfoUnderneathSettings> infoUnderneath`

### Methods
- `void increaseRow()`
- `public SwitchGrid.SwitchBuilder addSwitch(Component p_268004_,  BooleanSupplier p_268017_,  Consumer<Boolean> p_268320_)`
- `public SwitchGrid.Builder withPaddingLeft(int p_267998_)`
- `public SwitchGrid.Builder withRowSpacing(int p_270750_)`
- `public SwitchGrid build(Consumer<LayoutElement> p_268301_)`
- `public SwitchGrid.Builder withInfoUnderneath(int p_270730_,  boolean p_270594_)`

## SwitchGrid.InfoUnderneathSettings

*record* `net.minecraft.client.gui.screens.worldselection.SwitchGrid.InfoUnderneathSettings`

Enclosing class: SwitchGrid

### Fields
- `private final int maxInfoRows`
  The field for the maxInfoRows record component.
- `private final boolean alwaysMaxHeight`
  The field for the alwaysMaxHeight record component.

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
- `public int maxInfoRows()`
  Returns the value of the maxInfoRows record component.
  - returns: the value of the maxInfoRows record component
- `public boolean alwaysMaxHeight()`
  Returns the value of the alwaysMaxHeight record component.
  - returns: the value of the alwaysMaxHeight record component

## SwitchGrid.LabeledSwitch

*record* `net.minecraft.client.gui.screens.worldselection.SwitchGrid.LabeledSwitch`

Enclosing class: SwitchGrid

### Fields
- `private final CycleButton<Boolean> button`
  The field for the button record component.
- `private final BooleanSupplier stateSupplier`
  The field for the stateSupplier record component.
- `@Nullable private final BooleanSupplier isActiveCondition`
  The field for the isActiveCondition record component.

### Methods
- `public void refreshState()`
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
- `public CycleButton<Boolean> button()`
  Returns the value of the button record component.
  - returns: the value of the button record component
- `public BooleanSupplier stateSupplier()`
  Returns the value of the stateSupplier record component.
  - returns: the value of the stateSupplier record component
- `@Nullable public BooleanSupplier isActiveCondition()`
  Returns the value of the isActiveCondition record component.
  - returns: the value of the isActiveCondition record component

## SwitchGrid.SwitchBuilder

*class* `net.minecraft.client.gui.screens.worldselection.SwitchGrid.SwitchBuilder`

Enclosing class: SwitchGrid

### Fields
- `private final Component label`
- `private final BooleanSupplier stateSupplier`
- `private final Consumer<Boolean> onClicked`
- `@Nullable private Component info`
- `@Nullable private BooleanSupplier isActiveCondition`
- `private final int buttonWidth`

### Methods
- `public SwitchGrid.SwitchBuilder withIsActiveCondition(BooleanSupplier p_267966_)`
- `public SwitchGrid.SwitchBuilder withInfo(Component p_268240_)`
- `SwitchGrid.LabeledSwitch build(SwitchGrid.Builder p_270513_,  GridLayout p_271004_,  int p_270506_)`

## WorldCreationContext

*record* `net.minecraft.client.gui.screens.worldselection.WorldCreationContext`

### Fields
- `private final WorldOptions options`
  The field for the options record component.
- `private final Registry<LevelStem> datapackDimensions`
  The field for the datapackDimensions record component.
- `private final WorldDimensions selectedDimensions`
  The field for the selectedDimensions record component.
- `private final LayeredRegistryAccess<RegistryLayer> worldgenRegistries`
  The field for the worldgenRegistries record component.
- `private final ReloadableServerResources dataPackResources`
  The field for the dataPackResources record component.
- `private final WorldDataConfiguration dataConfiguration`
  The field for the dataConfiguration record component.

### Methods
- `public WorldCreationContext withSettings(WorldOptions p_249492_,  WorldDimensions p_250298_)`
- `public WorldCreationContext withOptions(WorldCreationContext.OptionsModifier p_252288_)`
- `public WorldCreationContext withDimensions(WorldCreationContext.DimensionsUpdater p_250676_)`
- `public WorldCreationContext withDataConfiguration(WorldDataConfiguration dataConfiguration)`
- `public RegistryAccess.Frozen worldgenLoadContext()`
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
- `public WorldOptions options()`
  Returns the value of the options record component.
  - returns: the value of the options record component
- `public Registry<LevelStem> datapackDimensions()`
  Returns the value of the datapackDimensions record component.
  - returns: the value of the datapackDimensions record component
- `public WorldDimensions selectedDimensions()`
  Returns the value of the selectedDimensions record component.
  - returns: the value of the selectedDimensions record component
- `public LayeredRegistryAccess<RegistryLayer> worldgenRegistries()`
  Returns the value of the worldgenRegistries record component.
  - returns: the value of the worldgenRegistries record component
- `public ReloadableServerResources dataPackResources()`
  Returns the value of the dataPackResources record component.
  - returns: the value of the dataPackResources record component
- `public WorldDataConfiguration dataConfiguration()`
  Returns the value of the dataConfiguration record component.
  - returns: the value of the dataConfiguration record component

## WorldCreationContext.DimensionsUpdater

*interface* `net.minecraft.client.gui.screens.worldselection.WorldCreationContext.DimensionsUpdater`

All Superinterfaces: BiFunction<RegistryAccess.Frozen, WorldDimensions, WorldDimensions>

Enclosing class: WorldCreationContext

### Inherited methods
- from `java.util.function.BiFunction`: `andThen`, `apply`

## WorldCreationContext.OptionsModifier

*interface* `net.minecraft.client.gui.screens.worldselection.WorldCreationContext.OptionsModifier`

All Superinterfaces: Function<WorldOptions, WorldOptions>, UnaryOperator<WorldOptions>

Enclosing class: WorldCreationContext

### Inherited methods
- from `java.util.function.Function`: `andThen`, `apply`, `compose`

## WorldCreationUiState

*class* `net.minecraft.client.gui.screens.worldselection.WorldCreationUiState`

### Fields
- `private static final Component DEFAULT_WORLD_NAME`
- `private final List<Consumer<WorldCreationUiState>> listeners`
- `private String name`
- `private WorldCreationUiState.SelectedGameMode gameMode`
- `private Difficulty difficulty`
- `@Nullable private Boolean allowCheats`
- `private String seed`
- `private boolean generateStructures`
- `private boolean bonusChest`
- `private final Path savesFolder`
- `private String targetFolder`
- `private WorldCreationContext settings`
- `private WorldCreationUiState.WorldTypeEntry worldType`
- `private final List<WorldCreationUiState.WorldTypeEntry> normalPresetList`
- `private final List<WorldCreationUiState.WorldTypeEntry> altPresetList`
- `private GameRules gameRules`

### Methods
- `public void addListener(Consumer<WorldCreationUiState> p_267938_)`
- `public void onChanged()`
- `public void setName(String p_268167_)`
- `private String findResultFolder(String p_276032_)`
- `public String getName()`
- `public String getTargetFolder()`
- `public void setGameMode(WorldCreationUiState.SelectedGameMode p_268231_)`
- `public WorldCreationUiState.SelectedGameMode getGameMode()`
- `public void setDifficulty(Difficulty p_268032_)`
- `public Difficulty getDifficulty()`
- `public boolean isHardcore()`
- `public void setAllowCheats(boolean p_267969_)`
- `public boolean isAllowCheats()`
- `public void setSeed(String p_268100_)`
- `public String getSeed()`
- `public void setGenerateStructures(boolean p_268090_)`
- `public boolean isGenerateStructures()`
- `public void setBonusChest(boolean p_268236_)`
- `public boolean isBonusChest()`
- `public void setSettings(WorldCreationContext p_268313_)`
- `public WorldCreationContext getSettings()`
- `public void updateDimensions(WorldCreationContext.DimensionsUpdater p_268314_)`
- `protected boolean tryUpdateDataConfiguration(WorldDataConfiguration p_268016_)`
- `public boolean isDebug()`
- `public void setWorldType(WorldCreationUiState.WorldTypeEntry p_268117_)`
- `public WorldCreationUiState.WorldTypeEntry getWorldType()`
- `@Nullable public PresetEditor getPresetEditor()`
- `public List<WorldCreationUiState.WorldTypeEntry> getNormalPresetList()`
- `public List<WorldCreationUiState.WorldTypeEntry> getAltPresetList()`
- `private void updatePresetLists()`
- `private static Optional<Holder<WorldPreset>> findPreset(WorldCreationContext p_268025_,  Optional<ResourceKey<WorldPreset>> p_268184_)`
- `private static Optional<List<WorldCreationUiState.WorldTypeEntry>> getNonEmptyList(Registry<WorldPreset> p_268296_,  TagKey<WorldPreset> p_268097_)`
- `public void setGameRules(GameRules p_268203_)`
- `public GameRules getGameRules()`

## WorldCreationUiState.WorldTypeEntry

*record* `net.minecraft.client.gui.screens.worldselection.WorldCreationUiState.WorldTypeEntry`

Enclosing class: WorldCreationUiState

### Fields
- `@Nullable private final Holder<WorldPreset> preset`
  The field for the preset record component.
- `private static final Component CUSTOM_WORLD_DESCRIPTION`

### Methods
- `public Component describePreset()`
- `public boolean isAmplified()`
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
- `@Nullable public Holder<WorldPreset> preset()`
  Returns the value of the preset record component.
  - returns: the value of the preset record component

## WorldOpenFlows

*class* `net.minecraft.client.gui.screens.worldselection.WorldOpenFlows`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Minecraft minecraft`
- `private final LevelStorageSource levelSource`

### Methods
- `public void loadLevel(Screen p_233134_,  String p_233135_)`
- `public void createFreshLevel(String p_233158_,  LevelSettings p_233159_,  WorldOptions p_249243_,  Function<RegistryAccess,WorldDimensions> p_249252_)`
- `@Nullable private LevelStorageSource.LevelStorageAccess createWorldAccess(String p_233156_)`
- `public void createLevelFromExistingSettings(LevelStorageSource.LevelStorageAccess p_250919_,  ReloadableServerResources p_248897_,  LayeredRegistryAccess<RegistryLayer> p_250801_,  WorldData p_251654_)`
- `private WorldStem loadWorldStem(LevelStorageSource.LevelStorageAccess p_233123_,  boolean p_233124_,  PackRepository p_233125_)  throws Exception`
  - throws: Exception
- `public com.mojang.datafixers.util.Pair<LevelSettings,WorldCreationContext> recreateWorldData(LevelStorageSource.LevelStorageAccess p_249540_)  throws Exception`
  - throws: Exception
- `private WorldLoader.PackConfig getPackConfigFromLevelData(LevelStorageSource.LevelStorageAccess p_249986_,  boolean p_248615_,  PackRepository p_249167_)`
- `public WorldStem loadWorldStem(LevelStorageSource.LevelStorageAccess p_233120_,  boolean p_233121_)  throws Exception`
  - throws: Exception
- `private <D, R> R loadWorldDataBlocking(WorldLoader.PackConfig p_250997_,  WorldLoader.WorldDataSupplier<D> p_251759_,  WorldLoader.ResultFactory<D,R> p_249635_)  throws Exception`
  - throws: Exception
- `private void doLoadLevel(Screen p_233146_,  String p_233147_,  boolean p_233148_,  boolean p_233149_)`
- `private void doLoadLevel(Screen p_233146_,  String p_233147_,  boolean p_233148_,  boolean p_233149_,  boolean confirmExperimentalWarning)`
- `private CompletableFuture<Boolean> promptBundledPackLoadFailure()`
- `private static void safeCloseAccess(LevelStorageSource.LevelStorageAccess p_233117_,  String p_233118_)`
- `private void askForBackup(Screen p_233141_,  String p_233142_,  boolean p_233143_,  Runnable p_233144_)`
- `public static void confirmWorldCreation(Minecraft p_270593_,  CreateWorldScreen p_270733_,  com.mojang.serialization.Lifecycle p_270539_,  Runnable p_270158_,  boolean p_270709_)`

## WorldSelectionList

*class* `net.minecraft.client.gui.screens.worldselection.WorldSelectionList`

### Fields
- `static final ResourceLocation ERROR_HIGHLIGHTED_SPRITE`
- `static final ResourceLocation ERROR_SPRITE`
- `static final ResourceLocation MARKED_JOIN_HIGHLIGHTED_SPRITE`
- `static final ResourceLocation MARKED_JOIN_SPRITE`
- `static final ResourceLocation WARNING_HIGHLIGHTED_SPRITE`
- `static final ResourceLocation WARNING_SPRITE`
- `static final ResourceLocation JOIN_HIGHLIGHTED_SPRITE`
- `static final ResourceLocation JOIN_SPRITE`
- `static final org.slf4j.Logger LOGGER`
- `static final DateFormat DATE_FORMAT`
- `private static final ResourceLocation ICON_MISSING`
- `private static final ResourceLocation FORGE_EXPERIMENTAL_WARNING_ICON`
- `static final Component FROM_NEWER_TOOLTIP_1`
- `static final Component FROM_NEWER_TOOLTIP_2`
- `static final Component SNAPSHOT_TOOLTIP_1`
- `static final Component SNAPSHOT_TOOLTIP_2`
- `static final Component WORLD_LOCKED_TOOLTIP`
- `static final Component WORLD_REQUIRES_CONVERSION`
- `static final Component WORLD_EXPERIMENTAL`
- `private final SelectWorldScreen screen`
- `private CompletableFuture<List<LevelSummary>> pendingLevels`
- `@Nullable private List<LevelSummary> currentlyDisplayedLevels`
- `private String filter`
- `private final WorldSelectionList.LoadingHeader loadingHeader`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `centerListVertically`, `headerHeight`, `height`, `itemHeight`, `minecraft`, `SCROLLBAR_WIDTH`, `width`, `x0`, `x1`, `y0`, `y1`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void clearEntries()`
- `@Nullable private List<LevelSummary> pollLevelsIgnoreErrors()`
- `void reloadWorldList()`
- `public boolean keyPressed(int p_289017_,  int p_288966_,  int p_289020_)`
- `public void render(GuiGraphics p_283323_,  int p_282039_,  int p_283339_,  float p_281472_)`
- `private void handleNewLevels(@Nullable  List<LevelSummary> p_239665_)`
- `public void updateFilter(String p_239901_)`
- `private CompletableFuture<List<LevelSummary>> loadLevels()`
- `private void fillLevels(String p_233199_,  List<LevelSummary> p_233200_)`
- `private boolean filterAccepts(String p_233196_,  LevelSummary p_233197_)`
- `private void fillLoadingLevels()`
- `private void notifyListUpdated()`
- `private void handleLevelLoadFailure(Component p_233212_)`
- `protected int getScrollbarPosition()`
- `public int getRowWidth()`
- `public void setSelected(@Nullable  WorldSelectionList.Entry p_233190_)`
- `public Optional<WorldSelectionList.WorldListEntry> getSelectedOpt()`
- `public SelectWorldScreen getScreen()`
- `public void updateNarration(NarrationElementOutput p_233188_)`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList`: `nextFocusPath`
- from `net.minecraft.client.gui.components.AbstractSelectionList`: `addEntry`, `addEntryToTop`, `centerScrollOn`, `children`, `clickedHeader`, `enableScissor`, `ensureVisible`, `getBottom`, `getEntry`, `getEntryAtPosition`, `getFirstElement`, `getFocused`, `getHeight`, `getHovered`, `getItemCount`, `getLeft`, `getMaxPosition`, `getMaxScroll`, `getRectangle`, `getRight`, `getRowBottom`, `getRowLeft`, `getRowRight`, `getRowTop`, `getScrollAmount`, `getScrollBottom`, `getSelected`, `getTop`, `getWidth`, `isMouseOver`, `isSelectedItem`, `isValidMouseClick`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `narrateListElementPosition`, `narrationPriority`, `nextEntry`, `nextEntry`, `nextEntry`, `remove`, `removeEntry`, `removeEntryFromTop`, `renderDecorations`, `renderHeader`, `renderItem`, `renderList`, `renderSelection`, `replaceEntries`, `setFocused`, `setLeftPos`, `setRenderBackground`, `setRenderHeader`, `setScrollAmount`, `updateScrollingState`, `updateSize`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `isDragging`, `setDragging`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## WorldSelectionList.Entry

*class* `net.minecraft.client.gui.screens.worldselection.WorldSelectionList.Entry`

Enclosing class: WorldSelectionList

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public abstract boolean isSelectable()`
- `public void close()`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `getNarration`, `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `render`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseClicked`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## WorldSelectionList.LoadingHeader

*class* `net.minecraft.client.gui.screens.worldselection.WorldSelectionList.LoadingHeader`

Enclosing class: WorldSelectionList

### Fields
- `private static final Component LOADING_LABEL`
- `private final Minecraft minecraft`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_282319_,  int p_283207_,  int p_281352_,  int p_283332_,  int p_282400_,  int p_282912_,  int p_282760_,  int p_281344_,  boolean p_283655_,  float p_283696_)`
- `public Component getNarration()`
- `public boolean isSelectable()`

### Inherited methods
- from `net.minecraft.client.gui.screens.worldselection.WorldSelectionList.Entry`: `close`
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseClicked`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## WorldSelectionList.WorldListEntry

*class* `net.minecraft.client.gui.screens.worldselection.WorldSelectionList.WorldListEntry`

Enclosing class: WorldSelectionList

### Fields
- `private static final int ICON_WIDTH` (= 32)
- `private static final int ICON_HEIGHT` (= 32)
- `private final Minecraft minecraft`
- `private final SelectWorldScreen screen`
- `private final LevelSummary summary`
- `private final FaviconTexture icon`
- `@Nullable private Path iconFile`
- `private long lastClickTime`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `list`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private void validateIconFile()`
- `public Component getNarration()`
- `public void render(GuiGraphics p_281612_,  int p_281353_,  int p_283181_,  int p_282820_,  int p_282420_,  int p_281855_,  int p_283204_,  int p_283025_,  boolean p_283396_,  float p_282938_)`
- `public boolean mouseClicked(double p_101706_,  double p_101707_,  int p_101708_)`
- `public void joinWorld()`
- `public void deleteWorld()`
- `public void doDeleteWorld()`
- `public void editWorld()`
- `public void recreateWorld()`
- `private void loadWorld()`
- `private void queueLoadScreen()`
- `private void loadIcon()`
- `public void close()`
- `public String getLevelName()`
- `public boolean isSelectable()`
- `private void renderExperimentalWarning(GuiGraphics guiGraphics,  int mouseX,  int mouseY,  int top,  int left)`

### Inherited methods
- from `net.minecraft.client.gui.components.ObjectSelectionList.Entry`: `updateNarration`
- from `net.minecraft.client.gui.components.AbstractSelectionList.Entry`: `isFocused`, `isMouseOver`, `renderBack`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`
