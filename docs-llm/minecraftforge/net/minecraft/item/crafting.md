# net.minecraft.item.crafting

- [CraftingManager](#craftingmanager)
- [FurnaceRecipes](#furnacerecipes)
- [Ingredient](#ingredient)
- [IRecipe](#irecipe)
- [RecipeBookCloning](#recipebookcloning)
- [RecipeFireworks](#recipefireworks)
- [RecipeRepairItem](#reciperepairitem)
- [RecipesArmorDyes](#recipesarmordyes)
- [RecipesBanners](#recipesbanners)
- [RecipesBanners.RecipeAddPattern](#recipesbanners.recipeaddpattern)
- [RecipesBanners.RecipeDuplicatePattern](#recipesbanners.recipeduplicatepattern)
- [RecipesMapCloning](#recipesmapcloning)
- [RecipesMapExtending](#recipesmapextending)
- [RecipeTippedArrow](#recipetippedarrow)
- [ShapedRecipes](#shapedrecipes)
- [ShapelessRecipes](#shapelessrecipes)
- [ShieldRecipes](#shieldrecipes)
- [ShieldRecipes.Decoration](#shieldrecipes.decoration)
- [ShulkerBoxRecipes](#shulkerboxrecipes)
- [ShulkerBoxRecipes.ShulkerBoxColoring](#shulkerboxrecipes.shulkerboxcoloring)
## CraftingManager

*class* `net.minecraft.item.crafting.CraftingManager`

### Fields
- `public static final RegistryNamespaced<ResourceLocation,IRecipe> REGISTRY`

### Methods
- `public static boolean init()`
- `public static ItemStack findMatchingResult(InventoryCrafting craftMatrix,  World worldIn)`
- `public static IRecipe findMatchingRecipe(InventoryCrafting craftMatrix,  World worldIn)`
- `public static NonNullList<ItemStack> getRemainingItems(InventoryCrafting craftMatrix,  World worldIn)`
- `public static IRecipe getRecipe(ResourceLocation name)`
- `@Deprecated public static int getIDForRecipe(IRecipe recipe)` (deprecated)
  Deprecated.
- `@Deprecated public static IRecipe getRecipeById(int id)` (deprecated)
  Deprecated.

## FurnaceRecipes

*class* `net.minecraft.item.crafting.FurnaceRecipes`

### Methods
- `public static FurnaceRecipes instance()`
- `public void addSmeltingRecipeForBlock(Block input,  ItemStack stack,  float experience)`
- `public void addSmelting(Item input,  ItemStack stack,  float experience)`
- `public void addSmeltingRecipe(ItemStack input,  ItemStack stack,  float experience)`
- `public ItemStack getSmeltingResult(ItemStack stack)`
- `public java.util.Map<ItemStack,ItemStack> getSmeltingList()`
- `public float getSmeltingExperience(ItemStack stack)`

## Ingredient

*class* `net.minecraft.item.crafting.Ingredient`

### Fields
- `public static final Ingredient EMPTY`

### Methods
- `public ItemStack[] getMatchingStacks()`
- `public boolean apply(ItemStack p_apply_1_)`
- `public IntList getValidItemStacksPacked()`
- `public static void invalidateAll()`
- `protected void invalidate()`
- `public static Ingredient fromItem(Item p_193367_0_)`
- `public static Ingredient fromItems(Item... items)`
- `public static Ingredient fromStacks(ItemStack... stacks)`
- `public static Ingredient merge(java.util.Collection<Ingredient> parts)`
- `public boolean isSimple()`

## IRecipe

*interface* `net.minecraft.item.crafting.IRecipe`

All Superinterfaces: IForgeRegistryEntry<IRecipe>

### Methods
- `boolean matches(InventoryCrafting inv,  World worldIn)`
- `ItemStack getCraftingResult(InventoryCrafting inv)`
- `boolean canFit(int width,  int height)`
- `ItemStack getRecipeOutput()`
- `default NonNullList<ItemStack> getRemainingItems(InventoryCrafting inv)`
- `default NonNullList<Ingredient> getIngredients()`
- `default boolean isDynamic()`
- `default java.lang.String getGroup()`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry`: `getRegistryName`, `getRegistryType`, `setRegistryName`

## RecipeBookCloning

*class* `net.minecraft.item.crafting.RecipeBookCloning`

All Implemented Interfaces: IRecipe, IForgeRegistryEntry<IRecipe>

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean matches(InventoryCrafting inv,  World worldIn)`
- `public ItemStack getCraftingResult(InventoryCrafting inv)`
- `public ItemStack getRecipeOutput()`
- `public NonNullList<ItemStack> getRemainingItems(InventoryCrafting inv)`
- `public boolean isDynamic()`
- `public boolean canFit(int width,  int height)`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`
- from `net.minecraft.item.crafting.IRecipe`: `getGroup`, `getIngredients`
- from `net.minecraftforge.registries.IForgeRegistryEntry`: `getRegistryName`, `getRegistryType`, `setRegistryName`

## RecipeFireworks

*class* `net.minecraft.item.crafting.RecipeFireworks`

All Implemented Interfaces: IRecipe, IForgeRegistryEntry<IRecipe>

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean matches(InventoryCrafting inv,  World worldIn)`
- `public ItemStack getCraftingResult(InventoryCrafting inv)`
- `public ItemStack getRecipeOutput()`
- `public NonNullList<ItemStack> getRemainingItems(InventoryCrafting inv)`
- `public boolean isDynamic()`
- `public boolean canFit(int width,  int height)`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`
- from `net.minecraft.item.crafting.IRecipe`: `getGroup`, `getIngredients`
- from `net.minecraftforge.registries.IForgeRegistryEntry`: `getRegistryName`, `getRegistryType`, `setRegistryName`

## RecipeRepairItem

*class* `net.minecraft.item.crafting.RecipeRepairItem`

All Implemented Interfaces: IRecipe, IForgeRegistryEntry<IRecipe>

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean matches(InventoryCrafting inv,  World worldIn)`
- `public ItemStack getCraftingResult(InventoryCrafting inv)`
- `public ItemStack getRecipeOutput()`
- `public NonNullList<ItemStack> getRemainingItems(InventoryCrafting inv)`
- `public boolean isDynamic()`
- `public boolean canFit(int width,  int height)`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`
- from `net.minecraft.item.crafting.IRecipe`: `getGroup`, `getIngredients`
- from `net.minecraftforge.registries.IForgeRegistryEntry`: `getRegistryName`, `getRegistryType`, `setRegistryName`

## RecipesArmorDyes

*class* `net.minecraft.item.crafting.RecipesArmorDyes`

All Implemented Interfaces: IRecipe, IForgeRegistryEntry<IRecipe>

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean matches(InventoryCrafting inv,  World worldIn)`
- `public ItemStack getCraftingResult(InventoryCrafting inv)`
- `public ItemStack getRecipeOutput()`
- `public NonNullList<ItemStack> getRemainingItems(InventoryCrafting inv)`
- `public boolean isDynamic()`
- `public boolean canFit(int width,  int height)`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`
- from `net.minecraft.item.crafting.IRecipe`: `getGroup`, `getIngredients`
- from `net.minecraftforge.registries.IForgeRegistryEntry`: `getRegistryName`, `getRegistryType`, `setRegistryName`

## RecipesBanners

*class* `net.minecraft.item.crafting.RecipesBanners`

## RecipesBanners.RecipeAddPattern

*class* `net.minecraft.item.crafting.RecipesBanners.RecipeAddPattern`

All Implemented Interfaces: IRecipe, IForgeRegistryEntry<IRecipe>

Enclosing class: RecipesBanners

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean matches(InventoryCrafting inv,  World worldIn)`
- `public ItemStack getCraftingResult(InventoryCrafting inv)`
- `public ItemStack getRecipeOutput()`
- `public NonNullList<ItemStack> getRemainingItems(InventoryCrafting inv)`
- `public boolean isDynamic()`
- `public boolean canFit(int width,  int height)`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`
- from `net.minecraft.item.crafting.IRecipe`: `getGroup`, `getIngredients`
- from `net.minecraftforge.registries.IForgeRegistryEntry`: `getRegistryName`, `getRegistryType`, `setRegistryName`

## RecipesBanners.RecipeDuplicatePattern

*class* `net.minecraft.item.crafting.RecipesBanners.RecipeDuplicatePattern`

All Implemented Interfaces: IRecipe, IForgeRegistryEntry<IRecipe>

Enclosing class: RecipesBanners

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean matches(InventoryCrafting inv,  World worldIn)`
- `public ItemStack getCraftingResult(InventoryCrafting inv)`
- `public ItemStack getRecipeOutput()`
- `public NonNullList<ItemStack> getRemainingItems(InventoryCrafting inv)`
- `public boolean isDynamic()`
- `public boolean canFit(int width,  int height)`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`
- from `net.minecraft.item.crafting.IRecipe`: `getGroup`, `getIngredients`
- from `net.minecraftforge.registries.IForgeRegistryEntry`: `getRegistryName`, `getRegistryType`, `setRegistryName`

## RecipesMapCloning

*class* `net.minecraft.item.crafting.RecipesMapCloning`

All Implemented Interfaces: IRecipe, IForgeRegistryEntry<IRecipe>

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean matches(InventoryCrafting inv,  World worldIn)`
- `public ItemStack getCraftingResult(InventoryCrafting inv)`
- `public ItemStack getRecipeOutput()`
- `public NonNullList<ItemStack> getRemainingItems(InventoryCrafting inv)`
- `public boolean isDynamic()`
- `public boolean canFit(int width,  int height)`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`
- from `net.minecraft.item.crafting.IRecipe`: `getGroup`, `getIngredients`
- from `net.minecraftforge.registries.IForgeRegistryEntry`: `getRegistryName`, `getRegistryType`, `setRegistryName`

## RecipesMapExtending

*class* `net.minecraft.item.crafting.RecipesMapExtending`

All Implemented Interfaces: IRecipe, IShapedRecipe, IForgeRegistryEntry<IRecipe>

### Inherited fields
- from `net.minecraft.item.crafting.ShapedRecipes`: `recipeHeight`, `recipeItems`, `recipeWidth`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean matches(InventoryCrafting inv,  World worldIn)`
- `public ItemStack getCraftingResult(InventoryCrafting inv)`
- `public boolean isDynamic()`

### Inherited methods
- from `net.minecraft.item.crafting.ShapedRecipes`: `canFit`, `deserialize`, `deserializeIngredient`, `deserializeItem`, `getGroup`, `getHeight`, `getIngredients`, `getRecipeHeight`, `getRecipeOutput`, `getRecipeWidth`, `getRemainingItems`, `getWidth`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`
- from `net.minecraftforge.registries.IForgeRegistryEntry`: `getRegistryName`, `getRegistryType`, `setRegistryName`

## RecipeTippedArrow

*class* `net.minecraft.item.crafting.RecipeTippedArrow`

All Implemented Interfaces: IRecipe, IForgeRegistryEntry<IRecipe>

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean matches(InventoryCrafting inv,  World worldIn)`
- `public ItemStack getCraftingResult(InventoryCrafting inv)`
- `public ItemStack getRecipeOutput()`
- `public NonNullList<ItemStack> getRemainingItems(InventoryCrafting inv)`
- `public boolean isDynamic()`
- `public boolean canFit(int width,  int height)`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`
- from `net.minecraft.item.crafting.IRecipe`: `getGroup`, `getIngredients`
- from `net.minecraftforge.registries.IForgeRegistryEntry`: `getRegistryName`, `getRegistryType`, `setRegistryName`

## ShapedRecipes

*class* `net.minecraft.item.crafting.ShapedRecipes`

All Implemented Interfaces: IRecipe, IShapedRecipe, IForgeRegistryEntry<IRecipe>

### Fields
- `public final int recipeWidth`
- `public final int recipeHeight`
- `public final NonNullList<Ingredient> recipeItems`

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public java.lang.String getGroup()`
- `public ItemStack getRecipeOutput()`
- `public NonNullList<ItemStack> getRemainingItems(InventoryCrafting inv)`
- `public NonNullList<Ingredient> getIngredients()`
- `public boolean canFit(int width,  int height)`
- `public boolean matches(InventoryCrafting inv,  World worldIn)`
- `public ItemStack getCraftingResult(InventoryCrafting inv)`
- `public int getWidth()`
- `public int getHeight()`
- `public static ShapedRecipes deserialize(JsonObject p_193362_0_)`
- `public static Ingredient deserializeIngredient(JsonElement p_193361_0_)`
- `public static ItemStack deserializeItem(JsonObject p_192405_0_,  boolean useCount)`
- `public int getRecipeWidth()`
- `public int getRecipeHeight()`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`
- from `net.minecraft.item.crafting.IRecipe`: `isDynamic`
- from `net.minecraftforge.registries.IForgeRegistryEntry`: `getRegistryName`, `getRegistryType`, `setRegistryName`

## ShapelessRecipes

*class* `net.minecraft.item.crafting.ShapelessRecipes`

All Implemented Interfaces: IRecipe, IForgeRegistryEntry<IRecipe>

### Fields
- `public final NonNullList<Ingredient> recipeItems`

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public java.lang.String getGroup()`
- `public ItemStack getRecipeOutput()`
- `public NonNullList<Ingredient> getIngredients()`
- `public NonNullList<ItemStack> getRemainingItems(InventoryCrafting inv)`
- `public boolean matches(InventoryCrafting inv,  World worldIn)`
- `public ItemStack getCraftingResult(InventoryCrafting inv)`
- `public static ShapelessRecipes deserialize(JsonObject json)`
- `public boolean canFit(int width,  int height)`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`
- from `net.minecraft.item.crafting.IRecipe`: `isDynamic`
- from `net.minecraftforge.registries.IForgeRegistryEntry`: `getRegistryName`, `getRegistryType`, `setRegistryName`

## ShieldRecipes

*class* `net.minecraft.item.crafting.ShieldRecipes`

## ShieldRecipes.Decoration

*class* `net.minecraft.item.crafting.ShieldRecipes.Decoration`

All Implemented Interfaces: IRecipe, IForgeRegistryEntry<IRecipe>

Enclosing class: ShieldRecipes

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean matches(InventoryCrafting inv,  World worldIn)`
- `public ItemStack getCraftingResult(InventoryCrafting inv)`
- `public ItemStack getRecipeOutput()`
- `public NonNullList<ItemStack> getRemainingItems(InventoryCrafting inv)`
- `public boolean isDynamic()`
- `public boolean canFit(int width,  int height)`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`
- from `net.minecraft.item.crafting.IRecipe`: `getGroup`, `getIngredients`
- from `net.minecraftforge.registries.IForgeRegistryEntry`: `getRegistryName`, `getRegistryType`, `setRegistryName`

## ShulkerBoxRecipes

*class* `net.minecraft.item.crafting.ShulkerBoxRecipes`

## ShulkerBoxRecipes.ShulkerBoxColoring

*class* `net.minecraft.item.crafting.ShulkerBoxRecipes.ShulkerBoxColoring`

All Implemented Interfaces: IRecipe, IForgeRegistryEntry<IRecipe>

Enclosing class: ShulkerBoxRecipes

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean matches(InventoryCrafting inv,  World worldIn)`
- `public ItemStack getCraftingResult(InventoryCrafting inv)`
- `public ItemStack getRecipeOutput()`
- `public NonNullList<ItemStack> getRemainingItems(InventoryCrafting inv)`
- `public boolean isDynamic()`
- `public boolean canFit(int width,  int height)`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`
- from `net.minecraft.item.crafting.IRecipe`: `getGroup`, `getIngredients`
- from `net.minecraftforge.registries.IForgeRegistryEntry`: `getRegistryName`, `getRegistryType`, `setRegistryName`
