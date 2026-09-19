# net.minecraft.client.gui.screens.recipebook

- [AbstractFurnaceRecipeBookComponent](#abstractfurnacerecipebookcomponent)
- [BlastingRecipeBookComponent](#blastingrecipebookcomponent)
- [GhostRecipe](#ghostrecipe)
- [GhostRecipe.GhostIngredient](#ghostrecipe.ghostingredient)
- [OverlayRecipeComponent](#overlayrecipecomponent)
- [OverlayRecipeComponent.OverlayRecipeButton](#overlayrecipecomponent.overlayrecipebutton)
- [OverlayRecipeComponent.OverlayRecipeButton.Pos](#overlayrecipecomponent.overlayrecipebutton.pos)
- [OverlayRecipeComponent.OverlaySmeltingRecipeButton](#overlayrecipecomponent.overlaysmeltingrecipebutton)
- [RecipeBookComponent](#recipebookcomponent)
- [RecipeBookPage](#recipebookpage)
- [RecipeBookTabButton](#recipebooktabbutton)
- [RecipeButton](#recipebutton)
- [RecipeCollection](#recipecollection)
- [RecipeShownListener](#recipeshownlistener)
- [RecipeUpdateListener](#recipeupdatelistener)
- [SmeltingRecipeBookComponent](#smeltingrecipebookcomponent)
- [SmokingRecipeBookComponent](#smokingrecipebookcomponent)
## AbstractFurnaceRecipeBookComponent

*class* `net.minecraft.client.gui.screens.recipebook.AbstractFurnaceRecipeBookComponent`

### Fields
- `private static final WidgetSprites FILTER_SPRITES`
- `@Nullable private Ingredient fuels`

### Inherited fields
- from `net.minecraft.client.gui.screens.recipebook.RecipeBookComponent`: `filterButton`, `ghostRecipe`, `IMAGE_HEIGHT`, `IMAGE_WIDTH`, `menu`, `minecraft`, `RECIPE_BOOK_LOCATION`, `RECIPE_BUTTON_SPRITES`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void initFilterButtonTextures()`
- `public void slotClicked(@Nullable  Slot p_100120_)`
- `public void setupGhostRecipe(RecipeHolder<?> p_297434_,  List<Slot> p_100123_)`
- `protected abstract Set<Item> getFuelItems()`

### Inherited methods
- from `net.minecraft.client.gui.screens.recipebook.RecipeBookComponent`: `addItemToSlot`, `charTyped`, `getRecipeFilterName`, `hasClickedOutside`, `init`, `initVisuals`, `isFocused`, `isMouseOver`, `isVisible`, `keyPressed`, `keyReleased`, `mouseClicked`, `narrationPriority`, `recipesShown`, `recipesUpdated`, `render`, `renderGhostRecipe`, `renderTooltip`, `sendUpdateSettings`, `setFocused`, `setVisible`, `tick`, `toggleVisibility`, `updateNarration`, `updateScreenPosition`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getCurrentFocusPath`, `getRectangle`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.recipebook.PlaceRecipe`: `placeRecipe`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## BlastingRecipeBookComponent

*class* `net.minecraft.client.gui.screens.recipebook.BlastingRecipeBookComponent`

### Fields
- `private static final Component FILTER_NAME`

### Inherited fields
- from `net.minecraft.client.gui.screens.recipebook.RecipeBookComponent`: `filterButton`, `ghostRecipe`, `IMAGE_HEIGHT`, `IMAGE_WIDTH`, `menu`, `minecraft`, `RECIPE_BOOK_LOCATION`, `RECIPE_BUTTON_SPRITES`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected Component getRecipeFilterName()`
- `protected Set<Item> getFuelItems()`

### Inherited methods
- from `net.minecraft.client.gui.screens.recipebook.AbstractFurnaceRecipeBookComponent`: `initFilterButtonTextures`, `setupGhostRecipe`, `slotClicked`
- from `net.minecraft.client.gui.screens.recipebook.RecipeBookComponent`: `addItemToSlot`, `charTyped`, `hasClickedOutside`, `init`, `initVisuals`, `isFocused`, `isMouseOver`, `isVisible`, `keyPressed`, `keyReleased`, `mouseClicked`, `narrationPriority`, `recipesShown`, `recipesUpdated`, `render`, `renderGhostRecipe`, `renderTooltip`, `sendUpdateSettings`, `setFocused`, `setVisible`, `tick`, `toggleVisibility`, `updateNarration`, `updateScreenPosition`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getCurrentFocusPath`, `getRectangle`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.recipebook.PlaceRecipe`: `placeRecipe`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## GhostRecipe

*class* `net.minecraft.client.gui.screens.recipebook.GhostRecipe`

### Fields
- `@Nullable private RecipeHolder<?> recipe`
- `private final List<GhostRecipe.GhostIngredient> ingredients`
- `float time`

### Methods
- `public void clear()`
- `public void addIngredient(Ingredient p_100144_,  int p_100145_,  int p_100146_)`
- `public GhostRecipe.GhostIngredient get(int p_100142_)`
- `public int size()`
- `@Nullable public RecipeHolder<?> getRecipe()`
- `public void setRecipe(RecipeHolder<?> p_299927_)`
- `public void render(GuiGraphics p_282081_,  Minecraft p_281341_,  int p_283169_,  int p_282326_,  boolean p_282174_,  float p_282256_)`

## GhostRecipe.GhostIngredient

*class* `net.minecraft.client.gui.screens.recipebook.GhostRecipe.GhostIngredient`

Enclosing class: GhostRecipe

### Fields
- `private final Ingredient ingredient`
- `private final int x`
- `private final int y`

### Methods
- `public int getX()`
- `public int getY()`
- `public ItemStack getItem()`

## OverlayRecipeComponent

*class* `net.minecraft.client.gui.screens.recipebook.OverlayRecipeComponent`

### Fields
- `private static final ResourceLocation OVERLAY_RECIPE_SPRITE`
- `static final ResourceLocation FURNACE_OVERLAY_HIGHLIGHTED_SPRITE`
- `static final ResourceLocation FURNACE_OVERLAY_SPRITE`
- `static final ResourceLocation CRAFTING_OVERLAY_HIGHLIGHTED_SPRITE`
- `static final ResourceLocation CRAFTING_OVERLAY_SPRITE`
- `static final ResourceLocation FURNACE_OVERLAY_DISABLED_HIGHLIGHTED_SPRITE`
- `static final ResourceLocation FURNACE_OVERLAY_DISABLED_SPRITE`
- `static final ResourceLocation CRAFTING_OVERLAY_DISABLED_HIGHLIGHTED_SPRITE`
- `static final ResourceLocation CRAFTING_OVERLAY_DISABLED_SPRITE`
- `private static final int MAX_ROW` (= 4)
- `private static final int MAX_ROW_LARGE` (= 5)
- `private static final float ITEM_RENDER_SCALE` (= 0.375f)
- `public static final int BUTTON_SIZE` (= 25)
- `private final List<OverlayRecipeComponent.OverlayRecipeButton> recipeButtons`
- `private boolean isVisible`
- `private int x`
- `private int y`
- `private Minecraft minecraft`
- `private RecipeCollection collection`
- `@Nullable private RecipeHolder<?> lastRecipeClicked`
- `float time`
- `boolean isFurnaceMenu`

### Inherited fields
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init(Minecraft p_100195_,  RecipeCollection p_100196_,  int p_100197_,  int p_100198_,  int p_100199_,  int p_100200_,  float p_100201_)`
- `public RecipeCollection getRecipeCollection()`
- `@Nullable public RecipeHolder<?> getLastRecipeClicked()`
- `public boolean mouseClicked(double p_100186_,  double p_100187_,  int p_100188_)`
- `public boolean isMouseOver(double p_100208_,  double p_100209_)`
- `public void render(GuiGraphics p_281618_,  int p_282646_,  int p_283687_,  float p_283147_)`
- `public void setVisible(boolean p_100205_)`
- `public boolean isVisible()`
- `public void setFocused(boolean p_265597_)`
- `public boolean isFocused()`

### Inherited methods
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `getRectangle`, `keyPressed`, `keyReleased`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## OverlayRecipeComponent.OverlayRecipeButton

*class* `net.minecraft.client.gui.screens.recipebook.OverlayRecipeComponent.OverlayRecipeButton`

Enclosing class: OverlayRecipeComponent

### Fields
- `final RecipeHolder<?> recipe`
- `private final boolean isCraftable`
- `protected final List<OverlayRecipeComponent.OverlayRecipeButton.Pos> ingredientPos`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void calculateIngredientsPositions(RecipeHolder<?> p_301077_)`
- `public void updateWidgetNarration(NarrationElementOutput p_259646_)`
- `public void addItemToSlot(Iterator<Ingredient> p_100240_,  int p_100241_,  int p_100242_,  int p_100243_,  int p_100244_)`
- `public void renderWidget(GuiGraphics p_283557_,  int p_283483_,  int p_282919_,  float p_282165_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onClick`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyPressed`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`
- from `net.minecraft.recipebook.PlaceRecipe`: `placeRecipe`

## OverlayRecipeComponent.OverlayRecipeButton.Pos

*class* `net.minecraft.client.gui.screens.recipebook.OverlayRecipeComponent.OverlayRecipeButton.Pos`

Enclosing class: OverlayRecipeComponent.OverlayRecipeButton

### Fields
- `public final ItemStack[] ingredients`
- `public final int x`
- `public final int y`

## OverlayRecipeComponent.OverlaySmeltingRecipeButton

*class* `net.minecraft.client.gui.screens.recipebook.OverlayRecipeComponent.OverlaySmeltingRecipeButton`

Enclosing class: OverlayRecipeComponent

### Inherited fields
- from `net.minecraft.client.gui.screens.recipebook.OverlayRecipeComponent.OverlayRecipeButton`: `ingredientPos`, `recipe`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void calculateIngredientsPositions(RecipeHolder<?> p_301296_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.recipebook.OverlayRecipeComponent.OverlayRecipeButton`: `addItemToSlot`, `renderWidget`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onClick`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyPressed`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`
- from `net.minecraft.recipebook.PlaceRecipe`: `placeRecipe`

## RecipeBookComponent

*class* `net.minecraft.client.gui.screens.recipebook.RecipeBookComponent`

### Fields
- `public static final WidgetSprites RECIPE_BUTTON_SPRITES`
- `private static final WidgetSprites FILTER_BUTTON_SPRITES`
- `protected static final ResourceLocation RECIPE_BOOK_LOCATION`
- `private static final Component SEARCH_HINT`
- `public static final int IMAGE_WIDTH` (= 147)
- `public static final int IMAGE_HEIGHT` (= 166)
- `private static final int OFFSET_X_POSITION` (= 86)
- `private static final Component ONLY_CRAFTABLES_TOOLTIP`
- `private static final Component ALL_RECIPES_TOOLTIP`
- `private int xOffset`
- `private int width`
- `private int height`
- `protected final GhostRecipe ghostRecipe`
- `private final List<RecipeBookTabButton> tabButtons`
- `@Nullable private RecipeBookTabButton selectedTab`
- `protected StateSwitchingButton filterButton`
- `protected RecipeBookMenu<?> menu`
- `protected Minecraft minecraft`
- `@Nullable private EditBox searchBox`
- `private String lastSearch`
- `private ClientRecipeBook book`
- `private final RecipeBookPage recipeBookPage`
- `private final StackedContents stackedContents`
- `private int timesInventoryChanged`
- `private boolean ignoreTextInput`
- `private boolean visible`
- `private boolean widthTooNarrow`

### Inherited fields
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init(int p_100310_,  int p_100311_,  Minecraft p_100312_,  boolean p_100313_,  RecipeBookMenu<?> p_100314_)`
- `public void initVisuals()`
- `private void updateFilterButtonTooltip()`
- `protected void initFilterButtonTextures()`
- `public int updateScreenPosition(int p_181402_,  int p_181403_)`
- `public void toggleVisibility()`
- `public boolean isVisible()`
- `private boolean isVisibleAccordingToBookData()`
- `protected void setVisible(boolean p_100370_)`
- `public void slotClicked(@Nullable  Slot p_100315_)`
- `private void updateCollections(boolean p_100383_)`
- `private void updateTabs()`
- `public void tick()`
- `private void updateStackedContents()`
- `public void render(GuiGraphics p_283597_,  int p_282668_,  int p_283506_,  float p_282813_)`
- `public void renderTooltip(GuiGraphics p_281740_,  int p_281520_,  int p_282050_,  int p_282836_,  int p_282758_)`
- `protected Component getRecipeFilterName()`
- `private void renderGhostRecipeTooltip(GuiGraphics p_282776_,  int p_282886_,  int p_281571_,  int p_282948_,  int p_283050_)`
- `public void renderGhostRecipe(GuiGraphics p_283634_,  int p_283327_,  int p_282027_,  boolean p_283495_,  float p_283514_)`
- `public boolean mouseClicked(double p_100294_,  double p_100295_,  int p_100296_)`
- `private boolean toggleFiltering()`
- `public boolean hasClickedOutside(double p_100298_,  double p_100299_,  int p_100300_,  int p_100301_,  int p_100302_,  int p_100303_,  int p_100304_)`
- `public boolean keyPressed(int p_100306_,  int p_100307_,  int p_100308_)`
- `public boolean keyReleased(int p_100356_,  int p_100357_,  int p_100358_)`
- `public boolean charTyped(char p_100291_,  int p_100292_)`
- `public boolean isMouseOver(double p_100353_,  double p_100354_)`
- `public void setFocused(boolean p_265089_)`
- `public boolean isFocused()`
- `private void checkSearchStringUpdate()`
- `private void pirateSpeechForThePeople(String p_100336_)`
- `private boolean isOffsetNextToMainGUI()`
- `public void recipesUpdated()`
- `public void recipesShown(List<RecipeHolder<?>> p_100344_)`
- `public void setupGhostRecipe(RecipeHolder<?> p_299607_,  List<Slot> p_100317_)`
- `public void addItemToSlot(Iterator<Ingredient> p_100338_,  int p_100339_,  int p_100340_,  int p_100341_,  int p_100342_)`
- `protected void sendUpdateSettings()`
- `public NarratableEntry.NarrationPriority narrationPriority()`
- `public void updateNarration(NarrationElementOutput p_170046_)`

### Inherited methods
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getCurrentFocusPath`, `getRectangle`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.recipebook.PlaceRecipe`: `placeRecipe`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## RecipeBookPage

*class* `net.minecraft.client.gui.screens.recipebook.RecipeBookPage`

### Fields
- `public static final int ITEMS_PER_PAGE` (= 20)
- `private static final WidgetSprites PAGE_FORWARD_SPRITES`
- `private static final WidgetSprites PAGE_BACKWARD_SPRITES`
- `private final List<RecipeButton> buttons`
- `@Nullable private RecipeButton hoveredButton`
- `private final OverlayRecipeComponent overlay`
- `private Minecraft minecraft`
- `private final List<RecipeShownListener> showListeners`
- `private List<RecipeCollection> recipeCollections`
- `private StateSwitchingButton forwardButton`
- `private StateSwitchingButton backButton`
- `private int totalPages`
- `private int currentPage`
- `private RecipeBook recipeBook`
- `@Nullable private RecipeHolder<?> lastClickedRecipe`
- `@Nullable private RecipeCollection lastClickedRecipeCollection`

### Methods
- `public void init(Minecraft p_100429_,  int p_100430_,  int p_100431_)`
- `public void addListener(RecipeBookComponent p_100433_)`
- `public void updateCollections(List<RecipeCollection> p_100437_,  boolean p_100438_)`
- `private void updateButtonsForPage()`
- `private void updateArrowButtons()`
- `public void render(GuiGraphics p_281416_,  int p_281888_,  int p_281904_,  int p_282278_,  int p_282424_,  float p_281712_)`
- `public void renderTooltip(GuiGraphics p_283690_,  int p_282626_,  int p_282490_)`
- `@Nullable public RecipeHolder<?> getLastClickedRecipe()`
- `@Nullable public RecipeCollection getLastClickedRecipeCollection()`
- `public void setInvisible()`
- `public boolean mouseClicked(double p_100410_,  double p_100411_,  int p_100412_,  int p_100413_,  int p_100414_,  int p_100415_,  int p_100416_)`
- `public void recipesShown(List<RecipeHolder<?>> p_100435_)`
- `public Minecraft getMinecraft()`
- `public RecipeBook getRecipeBook()`
- `protected void listButtons(Consumer<AbstractWidget> p_170054_)`

## RecipeBookTabButton

*class* `net.minecraft.client.gui.screens.recipebook.RecipeBookTabButton`

### Fields
- `private static final WidgetSprites SPRITES`
- `private final RecipeBookCategories category`
- `private static final float ANIMATION_TIME` (= 15.0f)
- `private float animationTime`

### Inherited fields
- from `net.minecraft.client.gui.components.StateSwitchingButton`: `isStateTriggered`, `sprites`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void startAnimation(Minecraft p_100452_)`
- `public void renderWidget(GuiGraphics p_283195_,  int p_283508_,  int p_281788_,  float p_283269_)`
- `private void renderIcon(GuiGraphics p_281802_,  ItemRenderer p_282499_)`
- `public RecipeBookCategories getCategory()`
- `public boolean updateVisibility(ClientRecipeBook p_100450_)`

### Inherited methods
- from `net.minecraft.client.gui.components.StateSwitchingButton`: `initTextureValues`, `isStateTriggered`, `setStateTriggered`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onClick`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyPressed`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## RecipeButton

*class* `net.minecraft.client.gui.screens.recipebook.RecipeButton`

### Fields
- `private static final ResourceLocation SLOT_MANY_CRAFTABLE_SPRITE`
- `private static final ResourceLocation SLOT_CRAFTABLE_SPRITE`
- `private static final ResourceLocation SLOT_MANY_UNCRAFTABLE_SPRITE`
- `private static final ResourceLocation SLOT_UNCRAFTABLE_SPRITE`
- `private static final float ANIMATION_TIME` (= 15.0f)
- `private static final int BACKGROUND_SIZE` (= 25)
- `public static final int TICKS_TO_SWAP` (= 30)
- `private static final Component MORE_RECIPES_TOOLTIP`
- `private RecipeBookMenu<?> menu`
- `private RecipeBook book`
- `private RecipeCollection collection`
- `private float time`
- `private float animationTime`
- `private int currentIndex`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init(RecipeCollection p_100480_,  RecipeBookPage p_100481_)`
- `public RecipeCollection getCollection()`
- `public void renderWidget(GuiGraphics p_281385_,  int p_282779_,  int p_282744_,  float p_282439_)`
- `private List<RecipeHolder<?>> getOrderedRecipes()`
- `public boolean isOnlyOption()`
- `public RecipeHolder<?> getRecipe()`
- `public List<Component> getTooltipText()`
- `public void updateWidgetNarration(NarrationElementOutput p_170060_)`
- `public int getWidth()`
- `protected boolean isValidClickButton(int p_100473_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onClick`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyPressed`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## RecipeCollection

*class* `net.minecraft.client.gui.screens.recipebook.RecipeCollection`

### Fields
- `private final RegistryAccess registryAccess`
- `private final List<RecipeHolder<?>> recipes`
- `private final boolean singleResultItem`
- `private final Set<RecipeHolder<?>> craftable`
- `private final Set<RecipeHolder<?>> fitsDimensions`
- `private final Set<RecipeHolder<?>> known`

### Methods
- `private static boolean allRecipesHaveSameResult(RegistryAccess p_267210_,  List<RecipeHolder<?>> p_100509_)`
- `public RegistryAccess registryAccess()`
- `public boolean hasKnownRecipes()`
- `public void updateKnownRecipes(RecipeBook p_100500_)`
- `public void canCraft(StackedContents p_100502_,  int p_100503_,  int p_100504_,  RecipeBook p_100505_)`
- `public boolean isCraftable(RecipeHolder<?> p_301083_)`
- `public boolean hasCraftable()`
- `public boolean hasFitting()`
- `public List<RecipeHolder<?>> getRecipes()`
- `public List<RecipeHolder<?>> getRecipes(boolean p_100511_)`
- `public List<RecipeHolder<?>> getDisplayRecipes(boolean p_100514_)`
- `public boolean hasSingleResultItem()`

## RecipeShownListener

*interface* `net.minecraft.client.gui.screens.recipebook.RecipeShownListener`

### Methods
- `void recipesShown(List<RecipeHolder<?>> p_100518_)`

## RecipeUpdateListener

*interface* `net.minecraft.client.gui.screens.recipebook.RecipeUpdateListener`

### Methods
- `void recipesUpdated()`
- `RecipeBookComponent getRecipeBookComponent()`

## SmeltingRecipeBookComponent

*class* `net.minecraft.client.gui.screens.recipebook.SmeltingRecipeBookComponent`

### Fields
- `private static final Component FILTER_NAME`

### Inherited fields
- from `net.minecraft.client.gui.screens.recipebook.RecipeBookComponent`: `filterButton`, `ghostRecipe`, `IMAGE_HEIGHT`, `IMAGE_WIDTH`, `menu`, `minecraft`, `RECIPE_BOOK_LOCATION`, `RECIPE_BUTTON_SPRITES`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected Component getRecipeFilterName()`
- `protected Set<Item> getFuelItems()`

### Inherited methods
- from `net.minecraft.client.gui.screens.recipebook.AbstractFurnaceRecipeBookComponent`: `initFilterButtonTextures`, `setupGhostRecipe`, `slotClicked`
- from `net.minecraft.client.gui.screens.recipebook.RecipeBookComponent`: `addItemToSlot`, `charTyped`, `hasClickedOutside`, `init`, `initVisuals`, `isFocused`, `isMouseOver`, `isVisible`, `keyPressed`, `keyReleased`, `mouseClicked`, `narrationPriority`, `recipesShown`, `recipesUpdated`, `render`, `renderGhostRecipe`, `renderTooltip`, `sendUpdateSettings`, `setFocused`, `setVisible`, `tick`, `toggleVisibility`, `updateNarration`, `updateScreenPosition`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getCurrentFocusPath`, `getRectangle`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.recipebook.PlaceRecipe`: `placeRecipe`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## SmokingRecipeBookComponent

*class* `net.minecraft.client.gui.screens.recipebook.SmokingRecipeBookComponent`

### Fields
- `private static final Component FILTER_NAME`

### Inherited fields
- from `net.minecraft.client.gui.screens.recipebook.RecipeBookComponent`: `filterButton`, `ghostRecipe`, `IMAGE_HEIGHT`, `IMAGE_WIDTH`, `menu`, `minecraft`, `RECIPE_BOOK_LOCATION`, `RECIPE_BUTTON_SPRITES`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected Component getRecipeFilterName()`
- `protected Set<Item> getFuelItems()`

### Inherited methods
- from `net.minecraft.client.gui.screens.recipebook.AbstractFurnaceRecipeBookComponent`: `initFilterButtonTextures`, `setupGhostRecipe`, `slotClicked`
- from `net.minecraft.client.gui.screens.recipebook.RecipeBookComponent`: `addItemToSlot`, `charTyped`, `hasClickedOutside`, `init`, `initVisuals`, `isFocused`, `isMouseOver`, `isVisible`, `keyPressed`, `keyReleased`, `mouseClicked`, `narrationPriority`, `recipesShown`, `recipesUpdated`, `render`, `renderGhostRecipe`, `renderTooltip`, `sendUpdateSettings`, `setFocused`, `setVisible`, `tick`, `toggleVisibility`, `updateNarration`, `updateScreenPosition`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `getCurrentFocusPath`, `getRectangle`, `mouseDragged`, `mouseMoved`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`
- from `net.minecraft.client.gui.narration.NarratableEntry`: `isActive`
- from `net.minecraft.recipebook.PlaceRecipe`: `placeRecipe`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`
