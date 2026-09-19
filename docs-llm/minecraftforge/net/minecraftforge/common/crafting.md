# net.minecraftforge.common.crafting

- [CompoundIngredient](#compoundingredient)
- [CraftingHelper](#craftinghelper)
- [CraftingHelper.FactoryLoader](#craftinghelper.factoryloader)
- [CraftingHelper.ShapedPrimer](#craftinghelper.shapedprimer)
- [IConditionFactory](#iconditionfactory)
- [IIngredientFactory](#iingredientfactory)
- [IngredientNBT](#ingredientnbt)
- [IRecipeContainer](#irecipecontainer)
- [IRecipeFactory](#irecipefactory)
- [IShapedRecipe](#ishapedrecipe)
- [JsonContext](#jsoncontext)
## CompoundIngredient

*class* `net.minecraftforge.common.crafting.CompoundIngredient`

### Inherited fields
- from `net.minecraft.item.crafting.Ingredient`: `EMPTY`

### Methods
- `public ItemStack[] getMatchingStacks()`
- `public IntList getValidItemStacksPacked()`
- `public boolean apply(ItemStack target)`
- `protected void invalidate()`
- `public boolean isSimple()`
- `public java.util.Collection<Ingredient> getChildren()`

### Inherited methods
- from `net.minecraft.item.crafting.Ingredient`: `fromItem`, `fromItems`, `fromStacks`, `invalidateAll`, `merge`

## CraftingHelper

*class* `net.minecraftforge.common.crafting.CraftingHelper`

### Fields
- `public static final Gson GSON`
- `public static final CraftingHelper.FactoryLoader<IIngredientFactory> INGREDIENTS`
- `public static final CraftingHelper.FactoryLoader<IRecipeFactory> RECIPES`
- `public static final CraftingHelper.FactoryLoader<IConditionFactory> CONDITIONS`

### Methods
- `public static void register(ResourceLocation key,  IConditionFactory factory)`
- `public static void register(ResourceLocation key,  IRecipeFactory factory)`
- `public static void register(ResourceLocation key,  IIngredientFactory factory)`
- `public static Ingredient getIngredient(java.lang.Object obj)`
- `public static Ingredient getIngredient(JsonElement json,  JsonContext context)`
- `public static ItemStack getItemStack(JsonObject json,  JsonContext context)`
- `public static ItemStack getItemStackBasic(JsonObject json,  JsonContext context)`
- `public static CraftingHelper.ShapedPrimer parseShaped(java.lang.Object... recipe)`
- `public static boolean processConditions(JsonObject json,  java.lang.String memberName,  JsonContext context)`
- `public static boolean processConditions(JsonArray conditions,  JsonContext context)`
- `public static java.util.function.BooleanSupplier getCondition(JsonObject json,  JsonContext context)`
- `public static IRecipe getRecipe(JsonObject json,  JsonContext context)`
- `public static void init()`
- `public static void loadRecipes(boolean revertFrozen)`
- `public static void loadFactories(ModContainer mod,  java.lang.String base,  CraftingHelper.FactoryLoader... loaders)`
- `@Deprecated public static boolean findFiles(ModContainer mod,  java.lang.String base,  java.util.function.Function<java.nio.file.Path,java.lang.Boolean> preprocessor,  java.util.function.BiFunction<java.nio.file.Path,java.nio.file.Path,java.lang.Boolean> processor)` (deprecated)
  Deprecated. Use findFiles(ModContainer, String, Function, BiFunction, boolean, boolean) instead.
- `@Deprecated public static boolean findFiles(ModContainer mod,  java.lang.String base,  java.util.function.Function<java.nio.file.Path,java.lang.Boolean> preprocessor,  java.util.function.BiFunction<java.nio.file.Path,java.nio.file.Path,java.lang.Boolean> processor,  boolean defaultUnfoundRoot)` (deprecated)
  Deprecated. Use findFiles(ModContainer, String, Function, BiFunction, boolean, boolean) instead.
- `public static boolean findFiles(ModContainer mod,  java.lang.String base,  java.util.function.Function<java.nio.file.Path,java.lang.Boolean> preprocessor,  java.util.function.BiFunction<java.nio.file.Path,java.nio.file.Path,java.lang.Boolean> processor,  boolean defaultUnfoundRoot,  boolean visitAllFiles)`
- `public static JsonContext loadContext(ResourceLocation path)  throws java.io.IOException`
  - throws: java.io.IOException
- `public static JsonContext loadContext(ResourceLocation path,  ModContainer mod)  throws java.io.IOException`
  - throws: java.io.IOException

## CraftingHelper.FactoryLoader

*class* `net.minecraftforge.common.crafting.CraftingHelper.FactoryLoader`

Enclosing class: CraftingHelper

## CraftingHelper.ShapedPrimer

*class* `net.minecraftforge.common.crafting.CraftingHelper.ShapedPrimer`

Enclosing class: CraftingHelper

### Fields
- `public int height`
- `public int width`
- `public boolean mirrored`
- `public NonNullList<Ingredient> input`

## IConditionFactory

*interface* `net.minecraftforge.common.crafting.IConditionFactory`

### Methods
- `java.util.function.BooleanSupplier parse(JsonContext context,  JsonObject json)`

## IIngredientFactory

*interface* `net.minecraftforge.common.crafting.IIngredientFactory`

### Methods
- `Ingredient parse(JsonContext context,  JsonObject json)`

## IngredientNBT

*class* `net.minecraftforge.common.crafting.IngredientNBT`

### Inherited fields
- from `net.minecraft.item.crafting.Ingredient`: `EMPTY`

### Methods
- `public boolean apply(ItemStack input)`
- `public boolean isSimple()`

### Inherited methods
- from `net.minecraft.item.crafting.Ingredient`: `fromItem`, `fromItems`, `fromStacks`, `getMatchingStacks`, `getValidItemStacksPacked`, `invalidate`, `invalidateAll`, `merge`

## IRecipeContainer

*interface* `net.minecraftforge.common.crafting.IRecipeContainer`

This interface is to be implemented on Container objects.
 For GUIs with recipe books, this allows their containers to have
 recipe completion and ghost recipes in their craft matrices.

### Methods
- `InventoryCraftResult getCraftResult()`
  The crafting result slot of your container, where you take out the crafted item.
   The equivalent for ContainerWorkbench is ContainerWorkbench.craftResult.
   The equivalent for ContainerPlayer is ContainerPlayer.craftResult.
- `InventoryCrafting getCraftMatrix()`
  The crafting matrix of your container, where ingredients go for crafting.
   The equivalent for ContainerWorkbench is ContainerWorkbench.craftMatrix.
   The equivalent for ContainerPlayer is ContainerPlayer.craftMatrix.

## IRecipeFactory

*interface* `net.minecraftforge.common.crafting.IRecipeFactory`

### Methods
- `IRecipe parse(JsonContext context,  JsonObject json)`

## IShapedRecipe

*interface* `net.minecraftforge.common.crafting.IShapedRecipe`

Used to mark a recipe that shape matters so that the recipe
 book and auto crafting picks the correct shape.
 Note: These methods can't be named 'getHeight' or 'getWidth' due to obfusication issues.

All Superinterfaces: IForgeRegistryEntry<IRecipe>, IRecipe

### Methods
- `int getRecipeWidth()`
- `int getRecipeHeight()`

### Inherited methods
- from `net.minecraft.item.crafting.IRecipe`: `canFit`, `getCraftingResult`, `getGroup`, `getIngredients`, `getRecipeOutput`, `getRemainingItems`, `isDynamic`, `matches`
- from `net.minecraftforge.registries.IForgeRegistryEntry`: `getRegistryName`, `getRegistryType`, `setRegistryName`

## JsonContext

*class* `net.minecraftforge.common.crafting.JsonContext`

### Methods
- `public java.lang.String getModId()`
- `public java.lang.String appendModId(java.lang.String data)`
- `public Ingredient getConstant(java.lang.String name)`
