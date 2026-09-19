# net.minecraft.data.recipes

- [Class RecipeCategory](#class-recipecategory)
- [CraftingRecipeBuilder](#craftingrecipebuilder)
- [CraftingRecipeBuilder.CraftingResult](#craftingrecipebuilder.craftingresult)
- [FinishedRecipe](#finishedrecipe)
- [FinishedRecipe.AdvancementData](#finishedrecipe.advancementdata)
- [RecipeBuilder](#recipebuilder)
- [RecipeOutput](#recipeoutput)
- [RecipeProvider](#recipeprovider)
- [ShapedRecipeBuilder](#shapedrecipebuilder)
- [ShapedRecipeBuilder.Result](#shapedrecipebuilder.result)
- [ShapelessRecipeBuilder](#shapelessrecipebuilder)
- [ShapelessRecipeBuilder.Result](#shapelessrecipebuilder.result)
- [SimpleCookingRecipeBuilder](#simplecookingrecipebuilder)
- [SimpleCookingRecipeBuilder.Result](#simplecookingrecipebuilder.result)
- [SingleItemRecipeBuilder](#singleitemrecipebuilder)
- [SingleItemRecipeBuilder.Result](#singleitemrecipebuilder.result)
- [SmithingTransformRecipeBuilder](#smithingtransformrecipebuilder)
- [SmithingTransformRecipeBuilder.Result](#smithingtransformrecipebuilder.result)
- [SmithingTrimRecipeBuilder](#smithingtrimrecipebuilder)
- [SmithingTrimRecipeBuilder.Result](#smithingtrimrecipebuilder.result)
- [SpecialRecipeBuilder](#specialrecipebuilder)
## Class RecipeCategory

*enum* `net.minecraft.data.recipes.Class RecipeCategory`

### Fields
- `private final String recipeFolderName`

### Methods
- `public static RecipeCategory[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RecipeCategory valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getFolderName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## CraftingRecipeBuilder

*class* `net.minecraft.data.recipes.CraftingRecipeBuilder`

### Methods
- `protected static CraftingBookCategory determineBookCategory(RecipeCategory p_250736_)`

## CraftingRecipeBuilder.CraftingResult

*class* `net.minecraft.data.recipes.CraftingRecipeBuilder.CraftingResult`

Enclosing class: CraftingRecipeBuilder

### Fields
- `private final CraftingBookCategory category`
- `private ICondition condition`

### Methods
- `public <R extends CraftingRecipeBuilder.CraftingResult> R withCondition(ICondition condition)`
- `public void serializeRecipeData(com.google.gson.JsonObject p_250456_)`

### Inherited methods
- from `net.minecraft.data.recipes.FinishedRecipe`: `advancement`, `advancementData`, `id`, `serializeRecipe`, `type`

## FinishedRecipe

*interface* `net.minecraft.data.recipes.FinishedRecipe`

### Methods
- `void serializeRecipeData(com.google.gson.JsonObject p_125967_)`
- `default com.google.gson.JsonObject serializeRecipe()`
- `ResourceLocation id()`
- `RecipeSerializer<?> type()`
- `@Nullable AdvancementHolder advancement()`
- `@Nullable default FinishedRecipe.AdvancementData advancementData()`

## FinishedRecipe.AdvancementData

*record* `net.minecraft.data.recipes.FinishedRecipe.AdvancementData`

Enclosing interface: FinishedRecipe

### Fields
- `private final ResourceLocation id`
  The field for the id record component.
- `private final com.google.gson.JsonObject data`
  The field for the data record component.

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
- `public ResourceLocation id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public com.google.gson.JsonObject data()`
  Returns the value of the data record component.
  - returns: the value of the data record component

## RecipeBuilder

*interface* `net.minecraft.data.recipes.RecipeBuilder`

### Fields
- `static final ResourceLocation ROOT_RECIPE_ADVANCEMENT`

### Methods
- `RecipeBuilder unlockedBy(String p_176496_,  Criterion<?> p_297505_)`
- `RecipeBuilder group(@Nullable  String p_176495_)`
- `Item getResult()`
- `void save(RecipeOutput p_298791_,  ResourceLocation p_176504_)`
- `default void save(RecipeOutput p_298540_)`
- `default void save(RecipeOutput p_300884_,  String p_176502_)`
- `static ResourceLocation getDefaultRecipeId(ItemLike p_176494_)`

## RecipeOutput

*interface* `net.minecraft.data.recipes.RecipeOutput`

### Methods
- `void accept(FinishedRecipe p_301214_)`
- `Advancement.Builder advancement()`

## RecipeProvider

*class* `net.minecraft.data.recipes.RecipeProvider`

### Fields
- `protected final PackOutput.PathProvider recipePathProvider`
- `protected final PackOutput.PathProvider advancementPathProvider`
- `private static final Map<BlockFamily.Variant,BiFunction<ItemLike,ItemLike,RecipeBuilder>> SHAPE_BUILDERS`

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`, `LOGGER`

### Methods
- `public CompletableFuture<?> run(CachedOutput p_254020_)`
- `@Nullable protected CompletableFuture<?> saveAdvancement(CachedOutput output,  ResourceLocation advancementId,  com.google.gson.JsonObject advancementJson,  FinishedRecipe finishedRecipe)`
  Called every time a recipe is saved to also save the advancement JSON if it exists.
  - returns: A completable future that saves the advancement to disk, or null to cancel saving the advancement.
- `protected CompletableFuture<?> buildAdvancement(CachedOutput p_253674_,  AdvancementHolder p_297687_)`
- `protected abstract void buildRecipes(RecipeOutput p_297267_)`
- `protected static void generateForEnabledBlockFamilies(RecipeOutput p_300618_,  FeatureFlagSet p_251836_)`
- `protected static void oneToOneConversionRecipe(RecipeOutput p_299023_,  ItemLike p_176553_,  ItemLike p_176554_,  @Nullable  String p_176555_)`
- `protected static void oneToOneConversionRecipe(RecipeOutput p_301230_,  ItemLike p_176558_,  ItemLike p_176559_,  @Nullable  String p_176560_,  int p_176561_)`
- `protected static void oreSmelting(RecipeOutput p_300202_,  List<ItemLike> p_250172_,  RecipeCategory p_250588_,  ItemLike p_251868_,  float p_250789_,  int p_252144_,  String p_251687_)`
- `protected static void oreBlasting(RecipeOutput p_298528_,  List<ItemLike> p_251504_,  RecipeCategory p_248846_,  ItemLike p_249735_,  float p_248783_,  int p_250303_,  String p_251984_)`
- `private static void oreCooking(RecipeOutput p_297621_,  RecipeSerializer<? extends AbstractCookingRecipe> p_251817_,  List<ItemLike> p_249619_,  RecipeCategory p_251154_,  ItemLike p_250066_,  float p_251871_,  int p_251316_,  String p_251450_,  String p_249236_)`
- `protected static void netheriteSmithing(RecipeOutput p_298409_,  Item p_250046_,  RecipeCategory p_248986_,  Item p_250389_)`
- `protected static void trimSmithing(RecipeOutput p_297574_,  Item p_285461_,  ResourceLocation p_285044_)`
- `protected static void twoByTwoPacker(RecipeOutput p_297675_,  RecipeCategory p_250881_,  ItemLike p_252184_,  ItemLike p_249710_)`
- `protected static void threeByThreePacker(RecipeOutput p_298075_,  RecipeCategory p_259247_,  ItemLike p_259376_,  ItemLike p_259717_,  String p_260308_)`
- `protected static void threeByThreePacker(RecipeOutput p_299853_,  RecipeCategory p_259186_,  ItemLike p_259360_,  ItemLike p_259263_)`
- `protected static void planksFromLog(RecipeOutput p_298877_,  ItemLike p_259052_,  TagKey<Item> p_259045_,  int p_259471_)`
- `protected static void planksFromLogs(RecipeOutput p_298139_,  ItemLike p_259193_,  TagKey<Item> p_259818_,  int p_259807_)`
- `protected static void woodFromLogs(RecipeOutput p_298359_,  ItemLike p_126004_,  ItemLike p_126005_)`
- `protected static void woodenBoat(RecipeOutput p_300366_,  ItemLike p_126023_,  ItemLike p_126024_)`
- `protected static void chestBoat(RecipeOutput p_300411_,  ItemLike p_236373_,  ItemLike p_236374_)`
- `protected static RecipeBuilder buttonBuilder(ItemLike p_176659_,  Ingredient p_176660_)`
- `protected static RecipeBuilder doorBuilder(ItemLike p_176671_,  Ingredient p_176672_)`
- `protected static RecipeBuilder fenceBuilder(ItemLike p_176679_,  Ingredient p_176680_)`
- `protected static RecipeBuilder fenceGateBuilder(ItemLike p_176685_,  Ingredient p_176686_)`
- `protected static void pressurePlate(RecipeOutput p_299733_,  ItemLike p_176692_,  ItemLike p_176693_)`
- `protected static RecipeBuilder pressurePlateBuilder(RecipeCategory p_251447_,  ItemLike p_251989_,  Ingredient p_249211_)`
- `protected static void slab(RecipeOutput p_300089_,  RecipeCategory p_251848_,  ItemLike p_249368_,  ItemLike p_252133_)`
- `protected static RecipeBuilder slabBuilder(RecipeCategory p_251707_,  ItemLike p_251284_,  Ingredient p_248824_)`
- `protected static RecipeBuilder stairBuilder(ItemLike p_176711_,  Ingredient p_176712_)`
- `protected static RecipeBuilder trapdoorBuilder(ItemLike p_176721_,  Ingredient p_176722_)`
- `protected static RecipeBuilder signBuilder(ItemLike p_176727_,  Ingredient p_176728_)`
- `protected static void hangingSign(RecipeOutput p_300811_,  ItemLike p_252355_,  ItemLike p_250437_)`
- `protected static void colorBlockWithDye(RecipeOutput p_297350_,  List<Item> p_289675_,  List<Item> p_289672_,  String p_289641_)`
- `protected static void carpet(RecipeOutput p_298709_,  ItemLike p_176718_,  ItemLike p_176719_)`
- `protected static void bedFromPlanksAndWool(RecipeOutput p_300515_,  ItemLike p_126075_,  ItemLike p_126076_)`
- `protected static void banner(RecipeOutput p_300693_,  ItemLike p_126083_,  ItemLike p_126084_)`
- `protected static void stainedGlassFromGlassAndDye(RecipeOutput p_297360_,  ItemLike p_126087_,  ItemLike p_126088_)`
- `protected static void stainedGlassPaneFromStainedGlass(RecipeOutput p_300949_,  ItemLike p_126091_,  ItemLike p_126092_)`
- `protected static void stainedGlassPaneFromGlassPaneAndDye(RecipeOutput p_298776_,  ItemLike p_126095_,  ItemLike p_126096_)`
- `protected static void coloredTerracottaFromTerracottaAndDye(RecipeOutput p_297522_,  ItemLike p_126099_,  ItemLike p_126100_)`
- `protected static void concretePowder(RecipeOutput p_300890_,  ItemLike p_126103_,  ItemLike p_126104_)`
- `protected static void candle(RecipeOutput p_299296_,  ItemLike p_176544_,  ItemLike p_176545_)`
- `protected static void wall(RecipeOutput p_298550_,  RecipeCategory p_251148_,  ItemLike p_250499_,  ItemLike p_249970_)`
- `protected static RecipeBuilder wallBuilder(RecipeCategory p_249083_,  ItemLike p_250754_,  Ingredient p_250311_)`
- `protected static void polished(RecipeOutput p_300055_,  RecipeCategory p_248719_,  ItemLike p_250032_,  ItemLike p_250021_)`
- `protected static RecipeBuilder polishedBuilder(RecipeCategory p_249131_,  ItemLike p_251242_,  Ingredient p_251412_)`
- `protected static void cut(RecipeOutput p_297773_,  RecipeCategory p_252306_,  ItemLike p_249686_,  ItemLike p_251100_)`
- `protected static ShapedRecipeBuilder cutBuilder(RecipeCategory p_250895_,  ItemLike p_251147_,  Ingredient p_251563_)`
- `protected static void chiseled(RecipeOutput p_301222_,  RecipeCategory p_251604_,  ItemLike p_251049_,  ItemLike p_252267_)`
- `protected static void mosaicBuilder(RecipeOutput p_298750_,  RecipeCategory p_248788_,  ItemLike p_251925_,  ItemLike p_252242_)`
- `protected static ShapedRecipeBuilder chiseledBuilder(RecipeCategory p_251755_,  ItemLike p_249782_,  Ingredient p_250087_)`
- `protected static void stonecutterResultFromBase(RecipeOutput p_299266_,  RecipeCategory p_250609_,  ItemLike p_251254_,  ItemLike p_249666_)`
- `protected static void stonecutterResultFromBase(RecipeOutput p_300991_,  RecipeCategory p_248911_,  ItemLike p_251265_,  ItemLike p_250033_,  int p_301035_)`
- `private static void smeltingResultFromBase(RecipeOutput p_298757_,  ItemLike p_176741_,  ItemLike p_176742_)`
- `protected static void nineBlockStorageRecipes(RecipeOutput p_298715_,  RecipeCategory p_251203_,  ItemLike p_251689_,  RecipeCategory p_251376_,  ItemLike p_248771_)`
- `protected static void nineBlockStorageRecipesWithCustomPacking(RecipeOutput p_300453_,  RecipeCategory p_250885_,  ItemLike p_251651_,  RecipeCategory p_250874_,  ItemLike p_248576_,  String p_250171_,  String p_249386_)`
- `protected static void nineBlockStorageRecipesRecipesWithCustomUnpacking(RecipeOutput p_298590_,  RecipeCategory p_248979_,  ItemLike p_249101_,  RecipeCategory p_252036_,  ItemLike p_250886_,  String p_248768_,  String p_250847_)`
- `private static void nineBlockStorageRecipes(RecipeOutput p_298159_,  RecipeCategory p_250083_,  ItemLike p_250042_,  RecipeCategory p_248977_,  ItemLike p_251911_,  String p_250475_,  @Nullable  String p_248641_,  String p_252237_,  @Nullable  String p_250414_)`
- `protected static void copySmithingTemplate(RecipeOutput p_299385_,  ItemLike p_267133_,  TagKey<Item> p_298808_)`
- `protected static void copySmithingTemplate(RecipeOutput p_300831_,  ItemLike p_266974_,  ItemLike p_298586_)`
- `protected static void cookRecipes(RecipeOutput p_298337_,  String p_126008_,  RecipeSerializer<? extends AbstractCookingRecipe> p_250529_,  int p_126010_)`
- `private static void simpleCookingRecipe(RecipeOutput p_301359_,  String p_249709_,  RecipeSerializer<? extends AbstractCookingRecipe> p_251876_,  int p_249258_,  ItemLike p_250669_,  ItemLike p_250224_,  float p_252138_)`
- `protected static void waxRecipes(RecipeOutput p_298400_)`
- `protected static void generateRecipes(RecipeOutput p_299904_,  BlockFamily p_176582_)`
- `protected static Block getBaseBlock(BlockFamily p_176524_,  BlockFamily.Variant p_176525_)`
- `private static Criterion<EnterBlockTrigger.TriggerInstance> insideOf(Block p_125980_)`
- `private static Criterion<InventoryChangeTrigger.TriggerInstance> has(MinMaxBounds.Ints p_176521_,  ItemLike p_176522_)`
- `protected static Criterion<InventoryChangeTrigger.TriggerInstance> has(ItemLike p_298497_)`
- `protected static Criterion<InventoryChangeTrigger.TriggerInstance> has(TagKey<Item> p_299059_)`
- `private static Criterion<InventoryChangeTrigger.TriggerInstance> inventoryTrigger(ItemPredicate.Builder... p_299527_)`
- `private static Criterion<InventoryChangeTrigger.TriggerInstance> inventoryTrigger(ItemPredicate... p_297226_)`
- `protected static String getHasName(ItemLike p_176603_)`
- `protected static String getItemName(ItemLike p_176633_)`
- `protected static String getSimpleRecipeName(ItemLike p_176645_)`
- `protected static String getConversionRecipeName(ItemLike p_176518_,  ItemLike p_176519_)`
- `protected static String getSmeltingRecipeName(ItemLike p_176657_)`
- `protected static String getBlastingRecipeName(ItemLike p_176669_)`
- `public final String getName()`

## ShapedRecipeBuilder

*class* `net.minecraft.data.recipes.ShapedRecipeBuilder`

### Fields
- `private final RecipeCategory category`
- `private final Item result`
- `private final int count`
- `private final List<String> rows`
- `private final Map<Character,Ingredient> key`
- `private final Map<String,Criterion<?>> criteria`
- `@Nullable private String group`
- `private boolean showNotification`
- `@Nullable private ICondition condition`

### Inherited fields
- from `net.minecraft.data.recipes.RecipeBuilder`: `ROOT_RECIPE_ADVANCEMENT`

### Methods
- `public static ShapedRecipeBuilder shaped(RecipeCategory p_250853_,  ItemLike p_249747_)`
- `public static ShapedRecipeBuilder shaped(RecipeCategory p_251325_,  ItemLike p_250636_,  int p_249081_)`
- `public ShapedRecipeBuilder define(Character p_206417_,  TagKey<Item> p_206418_)`
- `public ShapedRecipeBuilder define(Character p_126128_,  ItemLike p_126129_)`
- `public ShapedRecipeBuilder define(Character p_126125_,  Ingredient p_126126_)`
- `public ShapedRecipeBuilder pattern(String p_126131_)`
- `public ShapedRecipeBuilder unlockedBy(String p_176751_,  Criterion<?> p_300780_)`
- `public ShapedRecipeBuilder group(@Nullable  String p_126146_)`
- `public ShapedRecipeBuilder showNotification(boolean p_273326_)`
- `public Item getResult()`
- `public void save(RecipeOutput p_298334_,  ResourceLocation p_126142_)`
- `public ShapedRecipeBuilder condition(ICondition condition)`
- `private void ensureValid(ResourceLocation p_126144_)`

### Inherited methods
- from `net.minecraft.data.recipes.CraftingRecipeBuilder`: `determineBookCategory`
- from `net.minecraft.data.recipes.RecipeBuilder`: `save`, `save`

## ShapedRecipeBuilder.Result

*class* `net.minecraft.data.recipes.ShapedRecipeBuilder.Result`

Enclosing class: ShapedRecipeBuilder

### Fields
- `private final ResourceLocation id`
- `private final Item result`
- `private final int count`
- `private final String group`
- `private final List<String> pattern`
- `private final Map<Character,Ingredient> key`
- `private final AdvancementHolder advancement`
- `private final boolean showNotification`

### Methods
- `public void serializeRecipeData(com.google.gson.JsonObject p_126167_)`
- `public RecipeSerializer<?> type()`
- `public ResourceLocation id()`
- `public AdvancementHolder advancement()`

### Inherited methods
- from `net.minecraft.data.recipes.CraftingRecipeBuilder.CraftingResult`: `withCondition`
- from `net.minecraft.data.recipes.FinishedRecipe`: `advancementData`, `serializeRecipe`

## ShapelessRecipeBuilder

*class* `net.minecraft.data.recipes.ShapelessRecipeBuilder`

### Fields
- `private final RecipeCategory category`
- `private final Item result`
- `private final int count`
- `private final List<Ingredient> ingredients`
- `private final Map<String,Criterion<?>> criteria`
- `@Nullable private String group`
- `@Nullable private ICondition condition`

### Inherited fields
- from `net.minecraft.data.recipes.RecipeBuilder`: `ROOT_RECIPE_ADVANCEMENT`

### Methods
- `public static ShapelessRecipeBuilder shapeless(RecipeCategory p_250714_,  ItemLike p_249659_)`
- `public static ShapelessRecipeBuilder shapeless(RecipeCategory p_252339_,  ItemLike p_250836_,  int p_249928_)`
- `public ShapelessRecipeBuilder requires(TagKey<Item> p_206420_)`
- `public ShapelessRecipeBuilder requires(ItemLike p_126210_)`
- `public ShapelessRecipeBuilder requires(ItemLike p_126212_,  int p_126213_)`
- `public ShapelessRecipeBuilder requires(Ingredient p_126185_)`
- `public ShapelessRecipeBuilder requires(Ingredient p_126187_,  int p_126188_)`
- `public ShapelessRecipeBuilder unlockedBy(String p_176781_,  Criterion<?> p_300919_)`
- `public ShapelessRecipeBuilder group(@Nullable  String p_126195_)`
- `public Item getResult()`
- `public void save(RecipeOutput p_300117_,  ResourceLocation p_126206_)`
- `public ShapelessRecipeBuilder condition(ICondition condition)`
- `private void ensureValid(ResourceLocation p_126208_)`

### Inherited methods
- from `net.minecraft.data.recipes.CraftingRecipeBuilder`: `determineBookCategory`
- from `net.minecraft.data.recipes.RecipeBuilder`: `save`, `save`

## ShapelessRecipeBuilder.Result

*class* `net.minecraft.data.recipes.ShapelessRecipeBuilder.Result`

Enclosing class: ShapelessRecipeBuilder

### Fields
- `private final ResourceLocation id`
- `private final Item result`
- `private final int count`
- `private final String group`
- `private final List<Ingredient> ingredients`
- `private final AdvancementHolder advancement`

### Methods
- `public void serializeRecipeData(com.google.gson.JsonObject p_126230_)`
- `public RecipeSerializer<?> type()`
- `public ResourceLocation id()`
- `public AdvancementHolder advancement()`

### Inherited methods
- from `net.minecraft.data.recipes.CraftingRecipeBuilder.CraftingResult`: `withCondition`
- from `net.minecraft.data.recipes.FinishedRecipe`: `advancementData`, `serializeRecipe`

## SimpleCookingRecipeBuilder

*class* `net.minecraft.data.recipes.SimpleCookingRecipeBuilder`

### Fields
- `private final RecipeCategory category`
- `private final CookingBookCategory bookCategory`
- `private final Item result`
- `private final Ingredient ingredient`
- `private final float experience`
- `private final int cookingTime`
- `private final Map<String,Criterion<?>> criteria`
- `@Nullable private String group`
- `private final RecipeSerializer<? extends AbstractCookingRecipe> serializer`
- `@Nullable private ICondition condition`

### Inherited fields
- from `net.minecraft.data.recipes.RecipeBuilder`: `ROOT_RECIPE_ADVANCEMENT`

### Methods
- `public static SimpleCookingRecipeBuilder generic(Ingredient p_250999_,  RecipeCategory p_248815_,  ItemLike p_249766_,  float p_251320_,  int p_248693_,  RecipeSerializer<? extends AbstractCookingRecipe> p_250921_)`
- `public static SimpleCookingRecipeBuilder campfireCooking(Ingredient p_249393_,  RecipeCategory p_249372_,  ItemLike p_251516_,  float p_252321_,  int p_251916_)`
- `public static SimpleCookingRecipeBuilder blasting(Ingredient p_252115_,  RecipeCategory p_249421_,  ItemLike p_251247_,  float p_250383_,  int p_250476_)`
- `public static SimpleCookingRecipeBuilder smelting(Ingredient p_249223_,  RecipeCategory p_251240_,  ItemLike p_249551_,  float p_249452_,  int p_250496_)`
- `public static SimpleCookingRecipeBuilder smoking(Ingredient p_248930_,  RecipeCategory p_250319_,  ItemLike p_250377_,  float p_252329_,  int p_250482_)`
- `public SimpleCookingRecipeBuilder unlockedBy(String p_176792_,  Criterion<?> p_297700_)`
- `public SimpleCookingRecipeBuilder group(@Nullable  String p_176795_)`
- `public Item getResult()`
- `public void save(RecipeOutput p_299448_,  ResourceLocation p_126264_)`
- `public SimpleCookingRecipeBuilder condition(ICondition condition)`
- `private static CookingBookCategory determineSmeltingRecipeCategory(ItemLike p_251938_)`
- `private static CookingBookCategory determineBlastingRecipeCategory(ItemLike p_249047_)`
- `private static CookingBookCategory determineRecipeCategory(RecipeSerializer<? extends AbstractCookingRecipe> p_251261_,  ItemLike p_249582_)`
- `private void ensureValid(ResourceLocation p_126266_)`

### Inherited methods
- from `net.minecraft.data.recipes.RecipeBuilder`: `save`, `save`

## SimpleCookingRecipeBuilder.Result

*record* `net.minecraft.data.recipes.SimpleCookingRecipeBuilder.Result`

Enclosing class: SimpleCookingRecipeBuilder

### Fields
- `private final ResourceLocation id`
  The field for the id record component.
- `private final String group`
  The field for the group record component.
- `private final CookingBookCategory category`
  The field for the category record component.
- `private final Ingredient ingredient`
  The field for the ingredient record component.
- `private final Item result`
  The field for the result record component.
- `private final float experience`
  The field for the experience record component.
- `private final int cookingTime`
  The field for the cookingTime record component.
- `private final AdvancementHolder advancement`
  The field for the advancement record component.
- `private final RecipeSerializer<? extends AbstractCookingRecipe> type`
  The field for the type record component.
- `private final ICondition condition`
  The field for the condition record component.

### Methods
- `public void serializeRecipeData(com.google.gson.JsonObject p_126297_)`
- `public ResourceLocation id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public AdvancementHolder advancement()`
  Returns the value of the advancement record component.
  - returns: the value of the advancement record component
- `public RecipeSerializer<? extends AbstractCookingRecipe> type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
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
- `public String group()`
  Returns the value of the group record component.
  - returns: the value of the group record component
- `public CookingBookCategory category()`
  Returns the value of the category record component.
  - returns: the value of the category record component
- `public Ingredient ingredient()`
  Returns the value of the ingredient record component.
  - returns: the value of the ingredient record component
- `public Item result()`
  Returns the value of the result record component.
  - returns: the value of the result record component
- `public float experience()`
  Returns the value of the experience record component.
  - returns: the value of the experience record component
- `public int cookingTime()`
  Returns the value of the cookingTime record component.
  - returns: the value of the cookingTime record component
- `public ICondition condition()`
  Returns the value of the condition record component.
  - returns: the value of the condition record component

### Inherited methods
- from `net.minecraft.data.recipes.FinishedRecipe`: `advancementData`, `serializeRecipe`

## SingleItemRecipeBuilder

*class* `net.minecraft.data.recipes.SingleItemRecipeBuilder`

### Fields
- `private final RecipeCategory category`
- `private final Item result`
- `private final Ingredient ingredient`
- `private final int count`
- `private final Map<String,Criterion<?>> criteria`
- `@Nullable private String group`
- `private final RecipeSerializer<?> type`
- `@Nullable private ICondition condition`

### Inherited fields
- from `net.minecraft.data.recipes.RecipeBuilder`: `ROOT_RECIPE_ADVANCEMENT`

### Methods
- `public static SingleItemRecipeBuilder stonecutting(Ingredient p_248596_,  RecipeCategory p_250503_,  ItemLike p_250269_)`
- `public static SingleItemRecipeBuilder stonecutting(Ingredient p_251375_,  RecipeCategory p_248984_,  ItemLike p_250105_,  int p_249506_)`
- `public SingleItemRecipeBuilder unlockedBy(String p_176810_,  Criterion<?> p_298188_)`
- `public SingleItemRecipeBuilder group(@Nullable  String p_176808_)`
- `public Item getResult()`
- `public void save(RecipeOutput p_298439_,  ResourceLocation p_126328_)`
- `public SingleItemRecipeBuilder condition(ICondition condition)`
- `private void ensureValid(ResourceLocation p_126330_)`

### Inherited methods
- from `net.minecraft.data.recipes.RecipeBuilder`: `save`, `save`

## SingleItemRecipeBuilder.Result

*record* `net.minecraft.data.recipes.SingleItemRecipeBuilder.Result`

Enclosing class: SingleItemRecipeBuilder

### Fields
- `private final ResourceLocation id`
  The field for the id record component.
- `private final RecipeSerializer<?> type`
  The field for the type record component.
- `private final String group`
  The field for the group record component.
- `private final Ingredient ingredient`
  The field for the ingredient record component.
- `private final Item result`
  The field for the result record component.
- `private final int count`
  The field for the count record component.
- `private final AdvancementHolder advancement`
  The field for the advancement record component.
- `private final ICondition condition`
  The field for the condition record component.

### Methods
- `public void serializeRecipeData(com.google.gson.JsonObject p_126349_)`
- `public ResourceLocation id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public RecipeSerializer<?> type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public AdvancementHolder advancement()`
  Returns the value of the advancement record component.
  - returns: the value of the advancement record component
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
- `public String group()`
  Returns the value of the group record component.
  - returns: the value of the group record component
- `public Ingredient ingredient()`
  Returns the value of the ingredient record component.
  - returns: the value of the ingredient record component
- `public Item result()`
  Returns the value of the result record component.
  - returns: the value of the result record component
- `public int count()`
  Returns the value of the count record component.
  - returns: the value of the count record component
- `public ICondition condition()`
  Returns the value of the condition record component.
  - returns: the value of the condition record component

### Inherited methods
- from `net.minecraft.data.recipes.FinishedRecipe`: `advancementData`, `serializeRecipe`

## SmithingTransformRecipeBuilder

*class* `net.minecraft.data.recipes.SmithingTransformRecipeBuilder`

### Fields
- `private final Ingredient template`
- `private final Ingredient base`
- `private final Ingredient addition`
- `private final RecipeCategory category`
- `private final Item result`
- `private final Map<String,Criterion<?>> criteria`
- `private final RecipeSerializer<?> type`

### Methods
- `public static SmithingTransformRecipeBuilder smithing(Ingredient p_267071_,  Ingredient p_266959_,  Ingredient p_266803_,  RecipeCategory p_266757_,  Item p_267256_)`
- `public SmithingTransformRecipeBuilder unlocks(String p_266919_,  Criterion<?> p_297342_)`
- `public void save(RecipeOutput p_300964_,  String p_267035_)`
- `public void save(RecipeOutput p_301024_,  ResourceLocation p_267287_)`
- `private void ensureValid(ResourceLocation p_267259_)`

## SmithingTransformRecipeBuilder.Result

*record* `net.minecraft.data.recipes.SmithingTransformRecipeBuilder.Result`

Enclosing class: SmithingTransformRecipeBuilder

### Fields
- `private final ResourceLocation id`
  The field for the id record component.
- `private final RecipeSerializer<?> type`
  The field for the type record component.
- `private final Ingredient template`
  The field for the template record component.
- `private final Ingredient base`
  The field for the base record component.
- `private final Ingredient addition`
  The field for the addition record component.
- `private final Item result`
  The field for the result record component.
- `private final AdvancementHolder advancement`
  The field for the advancement record component.

### Methods
- `public void serializeRecipeData(com.google.gson.JsonObject p_266713_)`
- `public ResourceLocation id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public RecipeSerializer<?> type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public AdvancementHolder advancement()`
  Returns the value of the advancement record component.
  - returns: the value of the advancement record component
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
- `public Ingredient template()`
  Returns the value of the template record component.
  - returns: the value of the template record component
- `public Ingredient base()`
  Returns the value of the base record component.
  - returns: the value of the base record component
- `public Ingredient addition()`
  Returns the value of the addition record component.
  - returns: the value of the addition record component
- `public Item result()`
  Returns the value of the result record component.
  - returns: the value of the result record component

### Inherited methods
- from `net.minecraft.data.recipes.FinishedRecipe`: `advancementData`, `serializeRecipe`

## SmithingTrimRecipeBuilder

*class* `net.minecraft.data.recipes.SmithingTrimRecipeBuilder`

### Fields
- `private final RecipeCategory category`
- `private final Ingredient template`
- `private final Ingredient base`
- `private final Ingredient addition`
- `private final Map<String,Criterion<?>> criteria`
- `private final RecipeSerializer<?> type`

### Methods
- `public static SmithingTrimRecipeBuilder smithingTrim(Ingredient p_266812_,  Ingredient p_266843_,  Ingredient p_267309_,  RecipeCategory p_267269_)`
- `public SmithingTrimRecipeBuilder unlocks(String p_266882_,  Criterion<?> p_297910_)`
- `public void save(RecipeOutput p_301392_,  ResourceLocation p_266718_)`
- `private void ensureValid(ResourceLocation p_267040_)`

## SmithingTrimRecipeBuilder.Result

*record* `net.minecraft.data.recipes.SmithingTrimRecipeBuilder.Result`

Enclosing class: SmithingTrimRecipeBuilder

### Fields
- `private final ResourceLocation id`
  The field for the id record component.
- `private final RecipeSerializer<?> type`
  The field for the type record component.
- `private final Ingredient template`
  The field for the template record component.
- `private final Ingredient base`
  The field for the base record component.
- `private final Ingredient addition`
  The field for the addition record component.
- `private final AdvancementHolder advancement`
  The field for the advancement record component.

### Methods
- `public void serializeRecipeData(com.google.gson.JsonObject p_267008_)`
- `public ResourceLocation id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public RecipeSerializer<?> type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public AdvancementHolder advancement()`
  Returns the value of the advancement record component.
  - returns: the value of the advancement record component
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
- `public Ingredient template()`
  Returns the value of the template record component.
  - returns: the value of the template record component
- `public Ingredient base()`
  Returns the value of the base record component.
  - returns: the value of the base record component
- `public Ingredient addition()`
  Returns the value of the addition record component.
  - returns: the value of the addition record component

### Inherited methods
- from `net.minecraft.data.recipes.FinishedRecipe`: `advancementData`, `serializeRecipe`

## SpecialRecipeBuilder

*class* `net.minecraft.data.recipes.SpecialRecipeBuilder`

### Fields
- `final RecipeSerializer<?> serializer`

### Methods
- `public static SpecialRecipeBuilder special(RecipeSerializer<? extends CraftingRecipe> p_249458_)`
- `public void save(RecipeOutput p_301326_,  String p_299862_)`
- `public void save(RecipeOutput p_301231_,  ResourceLocation p_297560_)`

### Inherited methods
- from `net.minecraft.data.recipes.CraftingRecipeBuilder`: `determineBookCategory`
