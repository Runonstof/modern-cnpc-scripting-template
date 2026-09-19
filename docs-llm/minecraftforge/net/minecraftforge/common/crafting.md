# net.minecraftforge.common.crafting

- [ConditionalAdvancement](#conditionaladvancement)
- [ConditionalAdvancement.Builder](#conditionaladvancement.builder)
- [ConditionalAdvancement.IResult](#conditionaladvancement.iresult)
- [ConditionalAdvancement.Pair](#conditionaladvancement.pair)
- [ConditionalAdvancement.Result](#conditionaladvancement.result)
- [ConditionalRecipe](#conditionalrecipe)
- [ConditionalRecipe.Builder](#conditionalrecipe.builder)
- [ConditionalRecipe.Finished](#conditionalrecipe.finished)
- [ConditionalRecipe.RecipePair](#conditionalrecipe.recipepair)
- [CraftingHelper](#craftinghelper)
- [IRecipeContainer](#irecipecontainer)
- [IShapedRecipe](#ishapedrecipe)
- [SimpleCraftingContainer](#simplecraftingcontainer)
- [SimpleCraftingContainer.Builder](#simplecraftingcontainer.builder)
## ConditionalAdvancement

*class* `net.minecraftforge.common.crafting.ConditionalAdvancement`

A `ConditionalAdvancement` is a single advancment file that contains multiple advancements, each having a condition.
 When loaded it will return the first advancement that the conditions pass.

 This allows for multiple variants of an advancement to share the same name in the registry. Which allows dependents
 to reference it without having to care about the conditions themselves.

 This is most likely useful when you have variants of a recipe based on what mods/resources are installed but want
 to maintain the same 'entry' in the advancement book.

### Methods
- `public static ConditionalAdvancement.Builder builder()`

## ConditionalAdvancement.Builder

*class* `net.minecraftforge.common.crafting.ConditionalAdvancement.Builder`

Enclosing class: ConditionalAdvancement

### Fields
- `private static final ResourceLocation DOESNT_MATTER`
- `private List<ConditionalAdvancement.Pair> advancements`
- `private ICondition condition`

### Methods
- `public ConditionalAdvancement.Builder condition(ICondition value)`
- `public ConditionalAdvancement.Builder advancement(Consumer<Consumer<Advancement.Builder>> callable)`
- `public ConditionalAdvancement.Builder advancement(Advancement.Builder builder)`
- `public ConditionalAdvancement.Builder advancement(FinishedRecipe fromRecipe)`
- `public ConditionalAdvancement.Builder advancement(AdvancementHolder holder)`
- `private ConditionalAdvancement.Builder advancement(Advancement value)`
- `public ConditionalAdvancement.IResult build()`
- `public com.google.gson.JsonObject write()`

## ConditionalAdvancement.IResult

*interface* `net.minecraftforge.common.crafting.ConditionalAdvancement.IResult`

Enclosing class: ConditionalAdvancement

### Methods
- `com.google.gson.JsonObject serializeToJson()`

## ConditionalAdvancement.Pair

*record* `net.minecraftforge.common.crafting.ConditionalAdvancement.Pair`

Enclosing class: ConditionalAdvancement

### Fields
- `private final ICondition condition`
  The field for the condition record component.
- `private final Advancement adv`
  The field for the adv record component.

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
- `public ICondition condition()`
  Returns the value of the condition record component.
  - returns: the value of the condition record component
- `public Advancement adv()`
  Returns the value of the adv record component.
  - returns: the value of the adv record component

## ConditionalAdvancement.Result

*record* `net.minecraftforge.common.crafting.ConditionalAdvancement.Result`

Enclosing class: ConditionalAdvancement

### Fields
- `private final List<ConditionalAdvancement.Pair> advancements`
  The field for the advancements record component.

### Methods
- `public com.google.gson.JsonObject serializeToJson()`
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
- `public List<ConditionalAdvancement.Pair> advancements()`
  Returns the value of the advancements record component.
  - returns: the value of the advancements record component

## ConditionalRecipe

*class* `net.minecraftforge.common.crafting.ConditionalRecipe`

So, A 'ConditionalRecipe' differs from all normal recipes in the fact that in addition to the conditions
 disabling the entire recipe, it has sub-recipes that themselves have conditions.

 And when being deserialized it returns the first entry that passes the conditional check.
 This basically means that you can have muultiple variants all use the same recipe name, and
 only one will ever be loaded.

 This also means that you can wrap ALL recipes in a Conditional even those that don't explicitly
 have support for them in their data gen.

### Fields
- `private static com.mojang.serialization.Codec<Recipe<?>> CODEC`
- `public static final RecipeSerializer<Recipe<?>> SERIALZIER`

### Methods
- `public static ConditionalRecipe.Builder builder()`

## ConditionalRecipe.Builder

*class* `net.minecraftforge.common.crafting.ConditionalRecipe.Builder`

Enclosing class: ConditionalRecipe

### Fields
- `private List<ConditionalRecipe.RecipePair> recipes`
- `private RecipeOutput bouncer`
- `@Nullable private @Nullable ICondition condition`
- `@Nullable private @Nullable ICondition mainCondition`
- `@Nullable private @Nullable ResourceLocation advancementId`

### Methods
- `public ConditionalRecipe.Builder mainCondition(ICondition value)`
- `public ConditionalRecipe.Builder condition(ICondition value)`
- `public ConditionalRecipe.Builder recipe(Consumer<RecipeOutput> callable)`
- `public ConditionalRecipe.Builder recipe(FinishedRecipe recipe)`
- `public ConditionalRecipe.Builder advancement(ResourceLocation id)`
- `public void save(RecipeOutput out,  String namespace,  String path)`
- `public void save(RecipeOutput out,  ResourceLocation id)`

## ConditionalRecipe.Finished

*record* `net.minecraftforge.common.crafting.ConditionalRecipe.Finished`

Enclosing class: ConditionalRecipe

### Fields
- `private final ResourceLocation id`
  The field for the id record component.
- `@Nullable private final @Nullable ICondition mainCondition`
  The field for the mainCondition record component.
- `private final List<ConditionalRecipe.RecipePair> recipes`
  The field for the recipes record component.
- `private final ResourceLocation advId`
  The field for the advId record component.
- `private final com.google.gson.JsonObject advData`
  The field for the advData record component.

### Methods
- `public void serializeRecipeData(com.google.gson.JsonObject json)`
- `public ResourceLocation id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public RecipeSerializer<?> type()`
- `@Nullable public @Nullable AdvancementHolder advancement()`
- `@Nullable public @Nullable FinishedRecipe.AdvancementData advancementData()`
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
- `@Nullable public @Nullable ICondition mainCondition()`
  Returns the value of the mainCondition record component.
  - returns: the value of the mainCondition record component
- `public List<ConditionalRecipe.RecipePair> recipes()`
  Returns the value of the recipes record component.
  - returns: the value of the recipes record component
- `public ResourceLocation advId()`
  Returns the value of the advId record component.
  - returns: the value of the advId record component
- `public com.google.gson.JsonObject advData()`
  Returns the value of the advData record component.
  - returns: the value of the advData record component

### Inherited methods
- from `net.minecraft.data.recipes.FinishedRecipe`: `serializeRecipe`

## ConditionalRecipe.RecipePair

*record* `net.minecraftforge.common.crafting.ConditionalRecipe.RecipePair`

Enclosing class: ConditionalRecipe

### Fields
- `private final ICondition condition`
  The field for the condition record component.
- `private final FinishedRecipe recipe`
  The field for the recipe record component.

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
- `public ICondition condition()`
  Returns the value of the condition record component.
  - returns: the value of the condition record component
- `public FinishedRecipe recipe()`
  Returns the value of the recipe record component.
  - returns: the value of the recipe record component

## CraftingHelper

*class* `net.minecraftforge.common.crafting.CraftingHelper`

### Fields
- `private static com.google.gson.Gson GSON`

### Methods
- `public static ItemStack getItemStack(com.google.gson.JsonObject json,  boolean readNBT)`
- `public static Item getItem(String itemName,  boolean disallowsAirInRecipe)`
- `public static CompoundTag getNBT(com.google.gson.JsonElement element)`
- `public static ItemStack getItemStack(com.google.gson.JsonObject json,  boolean readNBT,  boolean disallowsAirInRecipe)`

## IRecipeContainer

*interface* `net.minecraftforge.common.crafting.IRecipeContainer`

This interface is to be implemented on Container objects.
 For GUIs with recipe books, this allows their containers to have
 recipe completion and ghost recipes in their craft matrices.

### Methods
- `ResultContainer getCraftResult()`
  The crafting result slot of your container, where you take out the crafted item.
   The equivalent for CraftingMenu is CraftingMenu#resultSlots.
   The equivalent for InventoryMenu is InventoryMenu#resultSlots.
- `CraftingContainer getCraftMatrix()`
  The crafting matrix of your container, where ingredients go for crafting.
   The equivalent for CraftingMenu is CraftingMenu#craftSlots.
   The equivalent for InventoryMenu is InventoryMenu#craftSlots.

## IShapedRecipe

*interface* `net.minecraftforge.common.crafting.IShapedRecipe`

Used to mark a recipe that shape matters so that the recipe
 book and auto crafting picks the correct shape.
 Note: These methods can't be named 'getHeight' or 'getWidth' due to obfusication issues.

All Superinterfaces: Recipe<T>

### Methods
- `int getRecipeWidth()`
- `int getRecipeHeight()`

### Inherited methods
- from `net.minecraft.world.item.crafting.Recipe`: `assemble`, `canCraftInDimensions`, `getGroup`, `getIngredients`, `getRemainingItems`, `getResultItem`, `getSerializer`, `getToastSymbol`, `getType`, `isIncomplete`, `isSpecial`, `matches`, `showNotification`

## SimpleCraftingContainer

*class* `net.minecraftforge.common.crafting.SimpleCraftingContainer`

### Fields
- `private final int width`
- `private final int height`
- `private final NonNullList<ItemStack> items`

### Inherited fields
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`

### Methods
- `public static SimpleCraftingContainer.Builder builder()`
- `public int getContainerSize()`
- `public boolean isEmpty()`
- `public ItemStack getItem(int slot)`
- `public ItemStack removeItem(int slot,  int count)`
- `public ItemStack removeItemNoUpdate(int slot)`
- `public void setItem(int slot,  ItemStack stack)`
- `public void setChanged()`
- `public boolean stillValid(Player player)`
- `public void clearContent()`
- `public void fillStackedContents(StackedContents stacked)`
- `public int getWidth()`
- `public int getHeight()`
- `public List<ItemStack> getItems()`

### Inherited methods
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `startOpen`, `stopOpen`

## SimpleCraftingContainer.Builder

*class* `net.minecraftforge.common.crafting.SimpleCraftingContainer.Builder`

Enclosing class: SimpleCraftingContainer

### Fields
- `private final List<String> rows`
- `private final it.unimi.dsi.fastutil.chars.Char2ObjectMap<ItemStack> keys`

### Methods
- `public SimpleCraftingContainer.Builder pattern(String row)`
- `public SimpleCraftingContainer.Builder pattern(String... rows)`
- `public SimpleCraftingContainer.Builder define(char key,  ItemLike item)`
- `public SimpleCraftingContainer.Builder define(char key,  ItemStack stack)`
- `public SimpleCraftingContainer build()`
