# net.minecraft.client.util

- [ISearchTree](#isearchtree)
- [ITooltipFlag](#itooltipflag)
- [ITooltipFlag.TooltipFlags](#itooltipflag.tooltipflags)
- [JsonBlendingMode](#jsonblendingmode)
- [JsonException](#jsonexception)
- [JsonException.Entry](#jsonexception.entry)
- [RecipeBookClient](#recipebookclient)
- [RecipeItemHelper](#recipeitemhelper)
- [SearchTree](#searchtree)
- [SearchTreeManager](#searchtreemanager)
- [SearchTreeManager.Key](#searchtreemanager.key)
- [SuffixArray](#suffixarray)
## ISearchTree

*interface* `net.minecraft.client.util.ISearchTree`

### Methods
- `java.util.List<T> search(java.lang.String searchText)`

## ITooltipFlag

*interface* `net.minecraft.client.util.ITooltipFlag`

### Methods
- `boolean isAdvanced()`

## ITooltipFlag.TooltipFlags

*enum* `net.minecraft.client.util.ITooltipFlag.TooltipFlags`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ITooltipFlag.TooltipFlags>, ITooltipFlag

Enclosing interface: ITooltipFlag

### Fields
- `public static final ITooltipFlag.TooltipFlags NORMAL`
- `public static final ITooltipFlag.TooltipFlags ADVANCED`

### Methods
- `public static ITooltipFlag.TooltipFlags[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ITooltipFlag.TooltipFlags c : ITooltipFlag.TooltipFlags.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ITooltipFlag.TooltipFlags valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public boolean isAdvanced()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## JsonBlendingMode

*class* `net.minecraft.client.util.JsonBlendingMode`

### Methods
- `public void apply()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public boolean isOpaque()`
- `public static JsonBlendingMode parseBlendNode(JsonObject json)`

## JsonException

*class* `net.minecraft.client.util.JsonException`

All Implemented Interfaces: java.io.Serializable

### Methods
- `public void prependJsonKey(java.lang.String key)`
- `public void setFilenameAndFlush(java.lang.String filenameIn)`
- `public java.lang.String getMessage()`
- `public static JsonException forException(java.lang.Exception exception)`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## JsonException.Entry

*class* `net.minecraft.client.util.JsonException.Entry`

Enclosing class: JsonException

### Methods
- `public java.lang.String getJsonKeys()`
- `public java.lang.String toString()`

## RecipeBookClient

*class* `net.minecraft.client.util.RecipeBookClient`

### Fields
- `public static final java.util.Map<CreativeTabs,java.util.List<RecipeList>> RECIPES_BY_TAB`
- `public static final java.util.List<RecipeList> ALL_RECIPES`

### Inherited fields
- from `net.minecraft.stats.RecipeBook`: `isFilteringCraftable`, `isGuiOpen`, `newRecipes`, `recipes`

### Methods
- `public static void rebuildTable()`

### Inherited methods
- from `net.minecraft.stats.RecipeBook`: `copyFrom`, `getRecipeId`, `isFilteringCraftable`, `isGuiOpen`, `isNew`, `isUnlocked`, `lock`, `markNew`, `markSeen`, `setFilteringCraftable`, `setGuiOpen`, `unlock`

## RecipeItemHelper

*class* `net.minecraft.client.util.RecipeItemHelper`

### Fields
- `public final Int2IntMap itemToCount`

### Methods
- `public void accountStack(ItemStack stack)`
- `public void accountStack(ItemStack stack,  int forceCount)`
- `public static int pack(ItemStack stack)`
- `public boolean containsItem(int p_194120_1_)`
- `public int tryTake(int p_194122_1_,  int maximum)`
- `public boolean canCraft(IRecipe recipe,  IntList p_194116_2_)`
- `public boolean canCraft(IRecipe recipe,  IntList p_194118_2_,  int p_194118_3_)`
- `public int getBiggestCraftableStack(IRecipe recipe,  IntList p_194114_2_)`
- `public int getBiggestCraftableStack(IRecipe recipe,  int p_194121_2_,  IntList p_194121_3_)`
- `public static ItemStack unpack(int p_194115_0_)`
- `public void clear()`

## SearchTree

*class* `net.minecraft.client.util.SearchTree`

All Implemented Interfaces: ISearchTree<T>

### Fields
- `protected SuffixArray<T> byId`
- `protected SuffixArray<T> byName`

### Methods
- `public void recalculate()`
- `public void add(T element)`
- `public java.util.List<T> search(java.lang.String searchText)`

## SearchTreeManager

*class* `net.minecraft.client.util.SearchTreeManager`

All Implemented Interfaces: IResourceManagerReloadListener

### Fields
- `public static final SearchTreeManager.Key<ItemStack> ITEMS`
- `public static final SearchTreeManager.Key<RecipeList> RECIPES`

### Methods
- `public void onResourceManagerReload(IResourceManager resourceManager)`
- `public <T> void register(SearchTreeManager.Key<T> key,  SearchTree<T> searchTreeIn)`
- `public <T> ISearchTree<T> get(SearchTreeManager.Key<T> key)`

## SearchTreeManager.Key

*class* `net.minecraft.client.util.SearchTreeManager.Key`

Enclosing class: SearchTreeManager

## SuffixArray

*class* `net.minecraft.client.util.SuffixArray`

### Fields
- `protected final java.util.List<T> list`

### Methods
- `public void add(T p_194057_1_,  java.lang.String p_194057_2_)`
- `public void generate()`
- `public java.util.List<T> search(java.lang.String p_194055_1_)`
