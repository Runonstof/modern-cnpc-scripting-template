# net.minecraft.client.gui.recipebook

- [GhostRecipe](#ghostrecipe)
- [GhostRecipe.GhostIngredient](#ghostrecipe.ghostingredient)
- [GuiButtonRecipe](#guibuttonrecipe)
- [GuiButtonRecipeTab](#guibuttonrecipetab)
- [GuiRecipeBook](#guirecipebook)
- [GuiRecipeOverlay](#guirecipeoverlay)
- [IRecipeShownListener](#irecipeshownlistener)
- [IRecipeUpdateListener](#irecipeupdatelistener)
- [RecipeBookPage](#recipebookpage)
- [RecipeList](#recipelist)
## GhostRecipe

*class* `net.minecraft.client.gui.recipebook.GhostRecipe`

### Methods
- `public void clear()`
- `public void addIngredient(Ingredient p_194187_1_,  int p_194187_2_,  int p_194187_3_)`
- `public GhostRecipe.GhostIngredient get(int p_192681_1_)`
- `public int size()`
- `public IRecipe getRecipe()`
- `public void setRecipe(IRecipe p_192685_1_)`
- `public void render(Minecraft p_194188_1_,  int p_194188_2_,  int p_194188_3_,  boolean p_194188_4_,  float p_194188_5_)`

## GhostRecipe.GhostIngredient

*class* `net.minecraft.client.gui.recipebook.GhostRecipe.GhostIngredient`

Enclosing class: GhostRecipe

### Methods
- `public int getX()`
- `public int getY()`
- `public ItemStack getItem()`

## GuiButtonRecipe

*class* `net.minecraft.client.gui.recipebook.GuiButtonRecipe`

### Inherited fields
- from `net.minecraft.client.gui.GuiButton`: `BUTTON_TEXTURES`, `displayString`, `enabled`, `height`, `hovered`, `id`, `packedFGColour`, `visible`, `width`, `x`, `y`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void init(RecipeList p_193928_1_,  RecipeBookPage p_193928_2_,  RecipeBook p_193928_3_)`
- `public RecipeList getList()`
- `public void setPosition(int p_191770_1_,  int p_191770_2_)`
- `public void drawButton(Minecraft mc,  int mouseX,  int mouseY,  float partialTicks)`
- `public boolean isOnlyOption()`
- `public IRecipe getRecipe()`
- `public java.util.List<java.lang.String> getToolTipText(GuiScreen p_191772_1_)`
- `public int getButtonWidth()`

### Inherited methods
- from `net.minecraft.client.gui.GuiButton`: `drawButtonForegroundLayer`, `getHoverState`, `isMouseOver`, `mouseDragged`, `mousePressed`, `mouseReleased`, `playPressSound`, `setWidth`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiButtonRecipeTab

*class* `net.minecraft.client.gui.recipebook.GuiButtonRecipeTab`

### Inherited fields
- from `net.minecraft.client.gui.GuiButtonToggle`: `resourceLocation`, `stateTriggered`, `xDiffTex`, `xTexStart`, `yDiffTex`, `yTexStart`
- from `net.minecraft.client.gui.GuiButton`: `BUTTON_TEXTURES`, `displayString`, `enabled`, `height`, `hovered`, `id`, `packedFGColour`, `visible`, `width`, `x`, `y`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void startAnimation(Minecraft p_193918_1_)`
- `public void drawButton(Minecraft mc,  int mouseX,  int mouseY,  float partialTicks)`
- `public CreativeTabs getCategory()`
- `public boolean updateVisibility()`

### Inherited methods
- from `net.minecraft.client.gui.GuiButtonToggle`: `initTextureValues`, `isStateTriggered`, `setPosition`, `setStateTriggered`
- from `net.minecraft.client.gui.GuiButton`: `drawButtonForegroundLayer`, `getButtonWidth`, `getHoverState`, `isMouseOver`, `mouseDragged`, `mousePressed`, `mouseReleased`, `playPressSound`, `setWidth`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiRecipeBook

*class* `net.minecraft.client.gui.recipebook.GuiRecipeBook`

All Implemented Interfaces: IRecipeUpdateListener

### Fields
- `protected static final ResourceLocation RECIPE_BOOK`

### Inherited fields
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void func_194303_a(int p_194303_1_,  int p_194303_2_,  Minecraft p_194303_3_,  boolean p_194303_4_,  InventoryCrafting p_194303_5_)`
- `public void initVisuals(boolean p_193014_1_,  InventoryCrafting p_193014_2_)`
- `public void removed()`
- `public int updateScreenPosition(boolean p_193011_1_,  int p_193011_2_,  int p_193011_3_)`
- `public void toggleVisibility()`
- `public boolean isVisible()`
- `public void slotClicked(Slot slotIn)`
- `public void tick()`
- `public void render(int mouseX,  int mouseY,  float partialTicks)`
- `public void renderTooltip(int p_191876_1_,  int p_191876_2_,  int p_191876_3_,  int p_191876_4_)`
- `public void renderGhostRecipe(int p_191864_1_,  int p_191864_2_,  boolean p_191864_3_,  float p_191864_4_)`
- `public boolean mouseClicked(int p_191862_1_,  int p_191862_2_,  int p_191862_3_)`
- `public boolean hasClickedOutside(int p_193955_1_,  int p_193955_2_,  int p_193955_3_,  int p_193955_4_,  int p_193955_5_,  int p_193955_6_)`
- `public boolean keyPressed(char typedChar,  int keycode)`
- `public void recipesUpdated()`
- `public void recipesShown(java.util.List<IRecipe> recipes)`
- `public void setupGhostRecipe(IRecipe p_193951_1_,  java.util.List<Slot> p_193951_2_)`

### Inherited methods
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiRecipeOverlay

*class* `net.minecraft.client.gui.recipebook.GuiRecipeOverlay`

### Inherited fields
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void init(Minecraft mcIn,  RecipeList recipeListIn,  int p_191845_3_,  int p_191845_4_,  int p_191845_5_,  int p_191845_6_,  float p_191845_7_,  RecipeBook p_191845_8_)`
- `public RecipeList getRecipeList()`
- `public IRecipe getLastRecipeClicked()`
- `public boolean buttonClicked(int p_193968_1_,  int p_193968_2_,  int p_193968_3_)`
- `public void render(int p_191842_1_,  int p_191842_2_,  float p_191842_3_)`
- `public void setVisible(boolean p_192999_1_)`
- `public boolean isVisible()`

### Inherited methods
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## IRecipeShownListener

*interface* `net.minecraft.client.gui.recipebook.IRecipeShownListener`

### Methods
- `void recipesUpdated()`
- `GuiRecipeBook func_194310_f()`

## IRecipeUpdateListener

*interface* `net.minecraft.client.gui.recipebook.IRecipeUpdateListener`

### Methods
- `void recipesShown(java.util.List<IRecipe> recipes)`

## RecipeBookPage

*class* `net.minecraft.client.gui.recipebook.RecipeBookPage`

### Methods
- `public void init(Minecraft p_194194_1_,  int p_194194_2_,  int p_194194_3_)`
- `public void addListener(GuiRecipeBook p_193732_1_)`
- `public void updateLists(java.util.List<RecipeList> p_194192_1_,  boolean p_194192_2_)`
- `public void render(int p_194191_1_,  int p_194191_2_,  int p_194191_3_,  int p_194191_4_,  float p_194191_5_)`
- `public void renderTooltip(int p_193721_1_,  int p_193721_2_)`
- `public IRecipe getLastClickedRecipe()`
- `public RecipeList getLastClickedRecipeList()`
- `public void setInvisible()`
- `public boolean mouseClicked(int p_194196_1_,  int p_194196_2_,  int p_194196_3_,  int p_194196_4_,  int p_194196_5_,  int p_194196_6_,  int p_194196_7_)`
- `public void recipesShown(java.util.List<IRecipe> p_194195_1_)`

## RecipeList

*class* `net.minecraft.client.gui.recipebook.RecipeList`

### Methods
- `public boolean isNotEmpty()`
- `public void updateKnownRecipes(RecipeBook book)`
- `public void canCraft(RecipeItemHelper handler,  int width,  int height,  RecipeBook book)`
- `public boolean isCraftable(IRecipe recipe)`
- `public boolean containsCraftableRecipes()`
- `public boolean containsValidRecipes()`
- `public java.util.List<IRecipe> getRecipes()`
- `public java.util.List<IRecipe> getRecipes(boolean p_194208_1_)`
- `public java.util.List<IRecipe> getDisplayRecipes(boolean onlyCraftable)`
- `public void add(IRecipe recipe)`
- `public boolean hasSingleResultItem()`
