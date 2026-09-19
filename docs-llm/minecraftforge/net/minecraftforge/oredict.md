# net.minecraftforge.oredict

- [DyeUtils](#dyeutils)
- [OreDictionary](#oredictionary)
- [OreDictionary.OreRegisterEvent](#oredictionary.oreregisterevent)
- [OreIngredient](#oreingredient)
- [RecipeSorter](#recipesorter)
- [RecipeSorter.Category](#recipesorter.category)
- [ShapedOreRecipe](#shapedorerecipe)
- [ShapelessOreRecipe](#shapelessorerecipe)
## DyeUtils

*class* `net.minecraftforge.oredict.DyeUtils`

Utility class for working with ore dictionary dyes.

### Methods
- `public static boolean isDye(ItemStack stack)`
  Check if an item stack is a dye.
  - param: stack - the item stack
  - returns: whether the stack is a dye
- `public static java.util.OptionalInt metaFromStack(ItemStack stack)`
  Get the dye metadata from the stack, which can be passed into EnumDyeColor.byMetadata(int).
  - param: stack - the item stack
  - returns: an OptionalInt holding the dye metadata for a dye, or an empty OptionalInt otherwise
- `public static int rawMetaFromStack(ItemStack stack)`
  Similar to metaFromStack(ItemStack), except that it returns the raw integer (with a -1 sentinel);
   this follows vanilla conventions.
  - param: stack - the item stack
  - returns: the dye metadata for a dye, or -1 otherwise
- `public static java.util.OptionalInt dyeDamageFromStack(ItemStack stack)`
  Get the dye damage from the stack, which can be passed into EnumDyeColor.byDyeDamage(int).
  - param: stack - the item stack
  - returns: an OptionalInt holding the dye damage for a dye, or an empty OptionalInt otherwise
- `public static int rawDyeDamageFromStack(ItemStack stack)`
  Similar to dyeDamageFromStack(ItemStack), except that it returns the raw integer (with a -1 sentinel);
   this follows vanilla conventions.
  - param: stack - the item stack
  - returns: the dye damage for a dye, or -1 otherwise
- `public static java.util.Optional<EnumDyeColor> colorFromStack(ItemStack stack)`
  Get a dye's color.
  - param: stack - the item stack
  - returns: an Optional holding the dye color if present, or an empty Optional otherwise

## OreDictionary

*class* `net.minecraftforge.oredict.OreDictionary`

### Fields
- `public static final NonNullList<ItemStack> EMPTY_LIST`
- `public static final int WILDCARD_VALUE` (= 32767)
  Minecraft changed from -1 to Short.MAX_VALUE in 1.5 release for the "block wildcard". Use this in case it
   changes again.

### Methods
- `public static int getOreID(java.lang.String name)`
  Gets the integer ID for the specified ore name.
   If the name does not have a ID it assigns it a new one.
  - param: name - The unique name for this ore 'oreIron', 'ingotIron', etc..
  - returns: A number representing the ID for this ore type
- `public static java.lang.String getOreName(int id)`
  Reverse of getOreID, will not create new entries.
  - param: id - The ID to translate to a string
  - returns: The String name, or "Unknown" if not found.
- `public static int[] getOreIDs(ItemStack stack)`
  Gets all the integer ID for the ores that the specified item stack is registered to.
   If the item stack is not linked to any ore, this will return an empty array and no new entry will be created.
  - param: stack - The item stack of the ore.
  - returns: An array of ids that this ore is registered as.
- `public static NonNullList<ItemStack> getOres(java.lang.String name)`
  Retrieves the ArrayList of items that are registered to this ore type.
   Creates the list as empty if it did not exist.
  
   The returned List is unmodifiable, but will be updated if a new ore
   is registered using registerOre
  - param: name - The ore name, directly calls getOreID
  - returns: An arrayList containing ItemStacks registered for this ore
- `public static NonNullList<ItemStack> getOres(java.lang.String name,  boolean alwaysCreateEntry)`
  Retrieves the List of items that are registered to this ore type at this instant.
   If the flag is TRUE, then it will create the list as empty if it did not exist.
  
   This option should be used by modders who are doing blanket scans in postInit.
   It greatly reduces clutter in the OreDictionary is the responsible and proper
   way to use the dictionary in a large number of cases.
  
   The other function above is utilized in OreRecipe and is required for the
   operation of that code.
  - param: name - The ore name, directly calls getOreID if the flag is TRUE
  - param: alwaysCreateEntry - Flag - should a new entry be created if empty
  - returns: An arraylist containing ItemStacks registered for this ore
- `public static boolean doesOreNameExist(java.lang.String name)`
  Returns whether or not an oreName exists in the dictionary.
   This function can be used to safely query the Ore Dictionary without
   adding needless clutter to the underlying map structure.
  
   Please use this when possible and appropriate.
  - param: name - The ore name
  - returns: Whether or not that name is in the Ore Dictionary.
- `public static java.lang.String[] getOreNames()`
  Retrieves a list of all unique ore names that are already registered.
  - returns: All unique ore names that are currently registered.
- `public static boolean containsMatch(boolean strict,  NonNullList<ItemStack> inputs,  ItemStack... targets)`
- `public static boolean itemMatches(ItemStack target,  ItemStack input,  boolean strict)`
- `public static void registerOre(java.lang.String name,  Item ore)`
- `public static void registerOre(java.lang.String name,  Block ore)`
- `public static void registerOre(java.lang.String name,  ItemStack ore)`
- `public static void rebakeMap()`

## OreDictionary.OreRegisterEvent

*class* `net.minecraftforge.oredict.OreDictionary.OreRegisterEvent`

Enclosing class: OreDictionary

### Methods
- `public java.lang.String getName()`
- `public ItemStack getOre()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## OreIngredient

*class* `net.minecraftforge.oredict.OreIngredient`

### Inherited fields
- from `net.minecraft.item.crafting.Ingredient`: `EMPTY`

### Methods
- `public ItemStack[] getMatchingStacks()`
- `public IntList getValidItemStacksPacked()`
- `public boolean apply(ItemStack input)`
- `protected void invalidate()`
- `public boolean isSimple()`

### Inherited methods
- from `net.minecraft.item.crafting.Ingredient`: `fromItem`, `fromItems`, `fromStacks`, `invalidateAll`, `merge`

## RecipeSorter

*class* `net.minecraftforge.oredict.RecipeSorter`

Deprecated.

All Implemented Interfaces: java.util.Comparator<IRecipe>

### Fields
- `public static final RecipeSorter INSTANCE` (deprecated)
  Deprecated.

### Methods
- `public int compare(IRecipe r1,  IRecipe r2)` (deprecated)
  Deprecated.
- `public static void sortCraftManager()` (deprecated)
  Deprecated.
- `public static void register(java.lang.String name,  java.lang.Class<?> recipe,  RecipeSorter.Category category,  java.lang.String dependencies)` (deprecated)
  Deprecated.
- `public static void setCategory(java.lang.Class<?> recipe,  RecipeSorter.Category category)` (deprecated)
  Deprecated.
- `public static RecipeSorter.Category getCategory(IRecipe recipe)` (deprecated)
  Deprecated.
- `public static RecipeSorter.Category getCategory(java.lang.Class<?> recipe)` (deprecated)
  Deprecated.

### Inherited methods
- from `java.util.Comparator`: `comparing`, `comparing`, `comparingDouble`, `comparingInt`, `comparingLong`, `equals`, `naturalOrder`, `nullsFirst`, `nullsLast`, `reversed`, `reverseOrder`, `thenComparing`, `thenComparing`, `thenComparing`, `thenComparingDouble`, `thenComparingInt`, `thenComparingLong`

## RecipeSorter.Category

*enum* `net.minecraftforge.oredict.RecipeSorter.Category`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<RecipeSorter.Category>

Enclosing class: RecipeSorter

### Fields
- `public static final RecipeSorter.Category UNKNOWN`
  Do not use UNKNOWN - it is for recipe types with no clear driver
- `public static final RecipeSorter.Category SHAPELESS`
- `public static final RecipeSorter.Category SHAPED`

### Methods
- `public static RecipeSorter.Category[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (RecipeSorter.Category c : RecipeSorter.Category.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static RecipeSorter.Category valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ShapedOreRecipe

*class* `net.minecraftforge.oredict.ShapedOreRecipe`

All Implemented Interfaces: IRecipe, IShapedRecipe, IForgeRegistryEntry<IRecipe>

### Fields
- `@Deprecated public static final int MAX_CRAFT_GRID_WIDTH` (= 3, deprecated)
  Deprecated.
- `@Deprecated public static final int MAX_CRAFT_GRID_HEIGHT` (= 3, deprecated)
  Deprecated.
- `protected ItemStack output`
- `protected NonNullList<Ingredient> input`
- `protected int width`
- `protected int height`
- `protected boolean mirrored`
- `protected ResourceLocation group`

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ItemStack getCraftingResult(InventoryCrafting var1)`
- `public ItemStack getRecipeOutput()`
- `public boolean matches(InventoryCrafting inv,  World world)`
- `protected boolean checkMatch(InventoryCrafting inv,  int startX,  int startY,  boolean mirror)`
  Based on ShapedRecipes.checkMatch(InventoryCrafting, int, int, boolean)
- `public ShapedOreRecipe setMirrored(boolean mirror)`
- `public NonNullList<Ingredient> getIngredients()`
- `@Deprecated public int getWidth()` (deprecated)
  Deprecated.
- `public int getRecipeWidth()`
- `@Deprecated public int getHeight()` (deprecated)
  Deprecated.
- `public int getRecipeHeight()`
- `public java.lang.String getGroup()`
- `public boolean canFit(int width,  int height)`
- `public static ShapedOreRecipe factory(JsonContext context,  JsonObject json)`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`
- from `net.minecraft.item.crafting.IRecipe`: `getRemainingItems`, `isDynamic`
- from `net.minecraftforge.registries.IForgeRegistryEntry`: `getRegistryName`, `getRegistryType`, `setRegistryName`

## ShapelessOreRecipe

*class* `net.minecraftforge.oredict.ShapelessOreRecipe`

All Implemented Interfaces: IRecipe, IForgeRegistryEntry<IRecipe>

### Fields
- `protected ItemStack output`
- `protected NonNullList<Ingredient> input`
- `protected ResourceLocation group`
- `protected boolean isSimple`

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ItemStack getRecipeOutput()`
- `public ItemStack getCraftingResult(InventoryCrafting var1)`
- `public boolean matches(InventoryCrafting inv,  World world)`
- `public NonNullList<Ingredient> getIngredients()`
- `public java.lang.String getGroup()`
- `public boolean canFit(int width,  int height)`
- `public static ShapelessOreRecipe factory(JsonContext context,  JsonObject json)`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`
- from `net.minecraft.item.crafting.IRecipe`: `getRemainingItems`, `isDynamic`
- from `net.minecraftforge.registries.IForgeRegistryEntry`: `getRegistryName`, `getRegistryType`, `setRegistryName`
