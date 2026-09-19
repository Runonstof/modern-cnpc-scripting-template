# net.minecraft.world.item.crafting

- [AbstractCookingRecipe](#abstractcookingrecipe)
- [ArmorDyeRecipe](#armordyerecipe)
- [BannerDuplicateRecipe](#bannerduplicaterecipe)
- [BlastingRecipe](#blastingrecipe)
- [BookCloningRecipe](#bookcloningrecipe)
- [CampfireCookingRecipe](#campfirecookingrecipe)
- [Class CookingBookCategory](#class-cookingbookcategory)
- [Class CraftingBookCategory](#class-craftingbookcategory)
- [CraftingRecipe](#craftingrecipe)
- [CraftingRecipeCodecs](#craftingrecipecodecs)
- [CustomRecipe](#customrecipe)
- [DecoratedPotRecipe](#decoratedpotrecipe)
- [FireworkRocketRecipe](#fireworkrocketrecipe)
- [FireworkStarFadeRecipe](#fireworkstarfaderecipe)
- [FireworkStarRecipe](#fireworkstarrecipe)
- [Ingredient](#ingredient)
- [Ingredient.ItemValue](#ingredient.itemvalue)
- [Ingredient.TagValue](#ingredient.tagvalue)
- [Ingredient.Value](#ingredient.value)
- [MapCloningRecipe](#mapcloningrecipe)
- [MapExtendingRecipe](#mapextendingrecipe)
- [Recipe](#recipe)
- [RecipeHolder>](#recipeholder)
- [RecipeManager](#recipemanager)
- [RecipeManager.CachedCheck>](#recipemanager.cachedcheck)
- [RecipeSerializer>](#recipeserializer)
- [RecipeType>](#recipetype)
- [RepairItemRecipe](#repairitemrecipe)
- [ShapedRecipe](#shapedrecipe)
- [ShapedRecipe.Serializer](#shapedrecipe.serializer)
- [ShapedRecipe.Serializer.RawShapedRecipe](#shapedrecipe.serializer.rawshapedrecipe)
- [ShapelessRecipe](#shapelessrecipe)
- [ShapelessRecipe.Serializer](#shapelessrecipe.serializer)
- [ShieldDecorationRecipe](#shielddecorationrecipe)
- [ShulkerBoxColoring](#shulkerboxcoloring)
- [SimpleCookingSerializer](#simplecookingserializer)
- [SimpleCookingSerializer.CookieBaker](#simplecookingserializer.cookiebaker)
- [SimpleCraftingRecipeSerializer](#simplecraftingrecipeserializer)
- [SimpleCraftingRecipeSerializer.Factory](#simplecraftingrecipeserializer.factory)
- [SingleItemRecipe](#singleitemrecipe)
- [SingleItemRecipe.Serializer](#singleitemrecipe.serializer)
- [SingleItemRecipe.Serializer.SingleItemMaker](#singleitemrecipe.serializer.singleitemmaker)
- [SmeltingRecipe](#smeltingrecipe)
- [SmithingRecipe](#smithingrecipe)
- [SmithingTransformRecipe](#smithingtransformrecipe)
- [SmithingTransformRecipe.Serializer](#smithingtransformrecipe.serializer)
- [SmithingTrimRecipe](#smithingtrimrecipe)
- [SmithingTrimRecipe.Serializer](#smithingtrimrecipe.serializer)
- [SmokingRecipe](#smokingrecipe)
- [StonecutterRecipe](#stonecutterrecipe)
- [SuspiciousStewRecipe](#suspiciousstewrecipe)
- [TippedArrowRecipe](#tippedarrowrecipe)
## AbstractCookingRecipe

*class* `net.minecraft.world.item.crafting.AbstractCookingRecipe`

### Fields
- `protected final RecipeType<?> type`
- `protected final CookingBookCategory category`
- `protected final String group`
- `protected final Ingredient ingredient`
- `protected final ItemStack result`
- `protected final float experience`
- `protected final int cookingTime`

### Methods
- `public boolean matches(Container p_43748_,  Level p_43749_)`
- `public ItemStack assemble(Container p_43746_,  RegistryAccess p_267063_)`
- `public boolean canCraftInDimensions(int p_43743_,  int p_43744_)`
- `public NonNullList<Ingredient> getIngredients()`
- `public float getExperience()`
- `public ItemStack getResultItem(RegistryAccess p_266851_)`
- `public String getGroup()`
- `public int getCookingTime()`
- `public RecipeType<?> getType()`
- `public CookingBookCategory category()`

### Inherited methods
- from `net.minecraft.world.item.crafting.Recipe`: `getRemainingItems`, `getSerializer`, `getToastSymbol`, `isIncomplete`, `isSpecial`, `showNotification`

## ArmorDyeRecipe

*class* `net.minecraft.world.item.crafting.ArmorDyeRecipe`

### Methods
- `public boolean matches(CraftingContainer p_43769_,  Level p_43770_)`
- `public ItemStack assemble(CraftingContainer p_43767_,  RegistryAccess p_267017_)`
- `public boolean canCraftInDimensions(int p_43759_,  int p_43760_)`
- `public RecipeSerializer<?> getSerializer()`

### Inherited methods
- from `net.minecraft.world.item.crafting.CustomRecipe`: `category`, `getResultItem`, `isSpecial`
- from `net.minecraft.world.item.crafting.CraftingRecipe`: `getType`
- from `net.minecraft.world.item.crafting.Recipe`: `getGroup`, `getIngredients`, `getRemainingItems`, `getToastSymbol`, `isIncomplete`, `showNotification`

## BannerDuplicateRecipe

*class* `net.minecraft.world.item.crafting.BannerDuplicateRecipe`

### Methods
- `public boolean matches(CraftingContainer p_43785_,  Level p_43786_)`
- `public ItemStack assemble(CraftingContainer p_43783_,  RegistryAccess p_267308_)`
- `public NonNullList<ItemStack> getRemainingItems(CraftingContainer p_43791_)`
- `public RecipeSerializer<?> getSerializer()`
- `public boolean canCraftInDimensions(int p_43775_,  int p_43776_)`

### Inherited methods
- from `net.minecraft.world.item.crafting.CustomRecipe`: `category`, `getResultItem`, `isSpecial`
- from `net.minecraft.world.item.crafting.CraftingRecipe`: `getType`
- from `net.minecraft.world.item.crafting.Recipe`: `getGroup`, `getIngredients`, `getToastSymbol`, `isIncomplete`, `showNotification`

## BlastingRecipe

*class* `net.minecraft.world.item.crafting.BlastingRecipe`

### Inherited fields
- from `net.minecraft.world.item.crafting.AbstractCookingRecipe`: `category`, `cookingTime`, `experience`, `group`, `ingredient`, `result`, `type`

### Methods
- `public ItemStack getToastSymbol()`
- `public RecipeSerializer<?> getSerializer()`

### Inherited methods
- from `net.minecraft.world.item.crafting.AbstractCookingRecipe`: `assemble`, `canCraftInDimensions`, `category`, `getCookingTime`, `getExperience`, `getGroup`, `getIngredients`, `getResultItem`, `getType`, `matches`
- from `net.minecraft.world.item.crafting.Recipe`: `getRemainingItems`, `isIncomplete`, `isSpecial`, `showNotification`

## BookCloningRecipe

*class* `net.minecraft.world.item.crafting.BookCloningRecipe`

### Methods
- `public boolean matches(CraftingContainer p_43814_,  Level p_43815_)`
- `public ItemStack assemble(CraftingContainer p_43812_,  RegistryAccess p_267039_)`
- `public NonNullList<ItemStack> getRemainingItems(CraftingContainer p_43820_)`
- `public RecipeSerializer<?> getSerializer()`
- `public boolean canCraftInDimensions(int p_43804_,  int p_43805_)`

### Inherited methods
- from `net.minecraft.world.item.crafting.CustomRecipe`: `category`, `getResultItem`, `isSpecial`
- from `net.minecraft.world.item.crafting.CraftingRecipe`: `getType`
- from `net.minecraft.world.item.crafting.Recipe`: `getGroup`, `getIngredients`, `getToastSymbol`, `isIncomplete`, `showNotification`

## CampfireCookingRecipe

*class* `net.minecraft.world.item.crafting.CampfireCookingRecipe`

### Inherited fields
- from `net.minecraft.world.item.crafting.AbstractCookingRecipe`: `category`, `cookingTime`, `experience`, `group`, `ingredient`, `result`, `type`

### Methods
- `public ItemStack getToastSymbol()`
- `public RecipeSerializer<?> getSerializer()`

### Inherited methods
- from `net.minecraft.world.item.crafting.AbstractCookingRecipe`: `assemble`, `canCraftInDimensions`, `category`, `getCookingTime`, `getExperience`, `getGroup`, `getIngredients`, `getResultItem`, `getType`, `matches`
- from `net.minecraft.world.item.crafting.Recipe`: `getRemainingItems`, `isIncomplete`, `isSpecial`, `showNotification`

## Class CookingBookCategory

*enum* `net.minecraft.world.item.crafting.Class CookingBookCategory`

### Fields
- `public static final StringRepresentable.EnumCodec<CookingBookCategory> CODEC`
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static CookingBookCategory[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static CookingBookCategory valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class CraftingBookCategory

*enum* `net.minecraft.world.item.crafting.Class CraftingBookCategory`

### Fields
- `public static final StringRepresentable.EnumCodec<CraftingBookCategory> CODEC`
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static CraftingBookCategory[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static CraftingBookCategory valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## CraftingRecipe

*interface* `net.minecraft.world.item.crafting.CraftingRecipe`

All Superinterfaces: Recipe<CraftingContainer>

### Methods
- `default RecipeType<?> getType()`
- `CraftingBookCategory category()`

### Inherited methods
- from `net.minecraft.world.item.crafting.Recipe`: `assemble`, `canCraftInDimensions`, `getGroup`, `getIngredients`, `getRemainingItems`, `getResultItem`, `getSerializer`, `getToastSymbol`, `isIncomplete`, `isSpecial`, `matches`, `showNotification`

## CraftingRecipeCodecs

*class* `net.minecraft.world.item.crafting.CraftingRecipeCodecs`

### Fields
- `private static final com.mojang.serialization.Codec<Item> ITEM_NONAIR_CODEC`
- `public static final com.mojang.serialization.Codec<ItemStack> ITEMSTACK_OBJECT_CODEC`
- `static final com.mojang.serialization.Codec<ItemStack> ITEMSTACK_NONAIR_CODEC`

## CustomRecipe

*class* `net.minecraft.world.item.crafting.CustomRecipe`

### Fields
- `private final CraftingBookCategory category`

### Methods
- `public boolean isSpecial()`
- `public ItemStack getResultItem(RegistryAccess p_267025_)`
- `public CraftingBookCategory category()`

### Inherited methods
- from `net.minecraft.world.item.crafting.CraftingRecipe`: `getType`
- from `net.minecraft.world.item.crafting.Recipe`: `assemble`, `canCraftInDimensions`, `getGroup`, `getIngredients`, `getRemainingItems`, `getSerializer`, `getToastSymbol`, `isIncomplete`, `matches`, `showNotification`

## DecoratedPotRecipe

*class* `net.minecraft.world.item.crafting.DecoratedPotRecipe`

### Methods
- `public boolean matches(CraftingContainer p_272882_,  Level p_272812_)`
- `public ItemStack assemble(CraftingContainer p_272861_,  RegistryAccess p_273288_)`
- `public boolean canCraftInDimensions(int p_273734_,  int p_273516_)`
- `public RecipeSerializer<?> getSerializer()`

### Inherited methods
- from `net.minecraft.world.item.crafting.CustomRecipe`: `category`, `getResultItem`, `isSpecial`
- from `net.minecraft.world.item.crafting.CraftingRecipe`: `getType`
- from `net.minecraft.world.item.crafting.Recipe`: `getGroup`, `getIngredients`, `getRemainingItems`, `getToastSymbol`, `isIncomplete`, `showNotification`

## FireworkRocketRecipe

*class* `net.minecraft.world.item.crafting.FireworkRocketRecipe`

### Fields
- `private static final Ingredient PAPER_INGREDIENT`
- `private static final Ingredient GUNPOWDER_INGREDIENT`
- `private static final Ingredient STAR_INGREDIENT`

### Methods
- `public boolean matches(CraftingContainer p_43854_,  Level p_43855_)`
- `public ItemStack assemble(CraftingContainer p_43852_,  RegistryAccess p_266791_)`
- `public boolean canCraftInDimensions(int p_43844_,  int p_43845_)`
- `public ItemStack getResultItem(RegistryAccess p_267261_)`
- `public RecipeSerializer<?> getSerializer()`

### Inherited methods
- from `net.minecraft.world.item.crafting.CustomRecipe`: `category`, `isSpecial`
- from `net.minecraft.world.item.crafting.CraftingRecipe`: `getType`
- from `net.minecraft.world.item.crafting.Recipe`: `getGroup`, `getIngredients`, `getRemainingItems`, `getToastSymbol`, `isIncomplete`, `showNotification`

## FireworkStarFadeRecipe

*class* `net.minecraft.world.item.crafting.FireworkStarFadeRecipe`

### Fields
- `private static final Ingredient STAR_INGREDIENT`

### Methods
- `public boolean matches(CraftingContainer p_43873_,  Level p_43874_)`
- `public ItemStack assemble(CraftingContainer p_43871_,  RegistryAccess p_266682_)`
- `public boolean canCraftInDimensions(int p_43863_,  int p_43864_)`
- `public RecipeSerializer<?> getSerializer()`

### Inherited methods
- from `net.minecraft.world.item.crafting.CustomRecipe`: `category`, `getResultItem`, `isSpecial`
- from `net.minecraft.world.item.crafting.CraftingRecipe`: `getType`
- from `net.minecraft.world.item.crafting.Recipe`: `getGroup`, `getIngredients`, `getRemainingItems`, `getToastSymbol`, `isIncomplete`, `showNotification`

## FireworkStarRecipe

*class* `net.minecraft.world.item.crafting.FireworkStarRecipe`

### Fields
- `private static final Ingredient SHAPE_INGREDIENT`
- `private static final Ingredient TRAIL_INGREDIENT`
- `private static final Ingredient FLICKER_INGREDIENT`
- `private static final Map<Item,FireworkRocketItem.Shape> SHAPE_BY_ITEM`
- `private static final Ingredient GUNPOWDER_INGREDIENT`

### Methods
- `public boolean matches(CraftingContainer p_43895_,  Level p_43896_)`
- `public ItemStack assemble(CraftingContainer p_43893_,  RegistryAccess p_266692_)`
- `public boolean canCraftInDimensions(int p_43885_,  int p_43886_)`
- `public ItemStack getResultItem(RegistryAccess p_266932_)`
- `public RecipeSerializer<?> getSerializer()`

### Inherited methods
- from `net.minecraft.world.item.crafting.CustomRecipe`: `category`, `isSpecial`
- from `net.minecraft.world.item.crafting.CraftingRecipe`: `getType`
- from `net.minecraft.world.item.crafting.Recipe`: `getGroup`, `getIngredients`, `getRemainingItems`, `getToastSymbol`, `isIncomplete`, `showNotification`

## Ingredient

*class* `net.minecraft.world.item.crafting.Ingredient`

### Fields
- `private static final AtomicInteger INVALIDATION_COUNTER`
- `public static final Ingredient EMPTY`
- `private final Ingredient.Value[] values`
- `@Nullable private ItemStack[] itemStacks`
- `@Nullable private it.unimi.dsi.fastutil.ints.IntList stackingIds`
- `public static final com.mojang.serialization.Codec<Ingredient> VANILLA_CODEC`
  The vanilla codec that doesn't support custom Ingredient types.
- `public static final com.mojang.serialization.Codec<Ingredient> CODEC`
- `private static final com.mojang.serialization.Codec<Ingredient> VANILLA_CODEC_NONEMPTY`
- `public static final com.mojang.serialization.Codec<Ingredient> CODEC_NONEMPTY`
- `private int invalidationCounter`
- `private final boolean isVanilla`

### Methods
- `public static void invalidateAll()`
- `public ItemStack[] getItems()`
- `public boolean test(@Nullable  ItemStack p_43914_)`
- `public it.unimi.dsi.fastutil.ints.IntList getStackingIds()`
- `public final void toNetwork(FriendlyByteBuf p_43924_)`
- `public com.google.gson.JsonElement toJson(boolean p_299391_)`
- `public boolean isEmpty()`
- `public boolean equals(Object p_300457_)`
- `public final boolean checkInvalidation()`
- `protected final void markValid()`
- `protected void invalidate()`
- `public boolean isSimple()`
- `public final boolean isVanilla()`
- `public IIngredientSerializer<? extends Ingredient> serializer()`
- `public static Ingredient fromValues(Stream<? extends Ingredient.Value> p_43939_)`
- `public static Ingredient of()`
- `public static Ingredient of(ItemLike... p_43930_)`
- `public static Ingredient of(ItemStack... p_43928_)`
- `public static Ingredient of(Stream<ItemStack> p_43922_)`
- `public static Ingredient of(TagKey<Item> p_204133_)`
- `public static Ingredient fromNetwork(FriendlyByteBuf p_43941_)`
- `private static com.mojang.serialization.Codec<Ingredient> codec(boolean p_298496_)`

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## Ingredient.ItemValue

*record* `net.minecraft.world.item.crafting.Ingredient.ItemValue`

Enclosing class: Ingredient

### Fields
- `private final ItemStack item`
  The field for the item record component.
- `static final com.mojang.serialization.Codec<Ingredient.ItemValue> CODEC`

### Methods
- `public boolean equals(Object p_300135_)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: p_300135_ - the object with which to compare
  - returns: true if this object is the same as the p_300135_ argument; false otherwise.
- `public Collection<ItemStack> getItems()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public ItemStack item()`
  Returns the value of the item record component.
  - returns: the value of the item record component

## Ingredient.TagValue

*record* `net.minecraft.world.item.crafting.Ingredient.TagValue`

Enclosing class: Ingredient

### Fields
- `private final TagKey<Item> tag`
  The field for the tag record component.
- `static final com.mojang.serialization.Codec<Ingredient.TagValue> CODEC`

### Methods
- `public boolean equals(Object p_298268_)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: p_298268_ - the object with which to compare
  - returns: true if this object is the same as the p_298268_ argument; false otherwise.
- `public Collection<ItemStack> getItems()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public TagKey<Item> tag()`
  Returns the value of the tag record component.
  - returns: the value of the tag record component

## Ingredient.Value

*interface* `net.minecraft.world.item.crafting.Ingredient.Value`

Enclosing class: Ingredient

### Fields
- `static final com.mojang.serialization.Codec<Ingredient.Value> CODEC`

### Methods
- `Collection<ItemStack> getItems()`

## MapCloningRecipe

*class* `net.minecraft.world.item.crafting.MapCloningRecipe`

### Methods
- `public boolean matches(CraftingContainer p_43980_,  Level p_43981_)`
- `public ItemStack assemble(CraftingContainer p_43978_,  RegistryAccess p_267299_)`
- `public boolean canCraftInDimensions(int p_43970_,  int p_43971_)`
- `public RecipeSerializer<?> getSerializer()`

### Inherited methods
- from `net.minecraft.world.item.crafting.CustomRecipe`: `category`, `getResultItem`, `isSpecial`
- from `net.minecraft.world.item.crafting.CraftingRecipe`: `getType`
- from `net.minecraft.world.item.crafting.Recipe`: `getGroup`, `getIngredients`, `getRemainingItems`, `getToastSymbol`, `isIncomplete`, `showNotification`

## MapExtendingRecipe

*class* `net.minecraft.world.item.crafting.MapExtendingRecipe`

### Inherited fields
- from `net.minecraft.world.item.crafting.ShapedRecipe`: `category`, `group`, `height`, `MAX_HEIGHT`, `MAX_WIDTH`, `recipeItems`, `result`, `showNotification`, `width`

### Methods
- `public boolean matches(CraftingContainer p_43993_,  Level p_43994_)`
- `public ItemStack assemble(CraftingContainer p_43991_,  RegistryAccess p_266892_)`
- `private static ItemStack findFilledMap(CraftingContainer p_279436_)`
- `public boolean isSpecial()`
- `public RecipeSerializer<?> getSerializer()`

### Inherited methods
- from `net.minecraft.world.item.crafting.ShapedRecipe`: `canCraftInDimensions`, `category`, `getGroup`, `getHeight`, `getIngredients`, `getRecipeHeight`, `getRecipeWidth`, `getResultItem`, `getWidth`, `isIncomplete`, `setCraftingSize`, `showNotification`, `shrink`
- from `net.minecraft.world.item.crafting.CraftingRecipe`: `getType`
- from `net.minecraft.world.item.crafting.Recipe`: `getRemainingItems`, `getToastSymbol`

## Recipe

*interface* `net.minecraft.world.item.crafting.Recipe`

### Methods
- `boolean matches(C p_44002_,  Level p_44003_)`
- `ItemStack assemble(C p_44001_,  RegistryAccess p_267165_)`
- `boolean canCraftInDimensions(int p_43999_,  int p_44000_)`
- `ItemStack getResultItem(RegistryAccess p_267052_)`
- `default NonNullList<ItemStack> getRemainingItems(C p_44004_)`
- `default NonNullList<Ingredient> getIngredients()`
- `default boolean isSpecial()`
- `default boolean showNotification()`
- `default String getGroup()`
- `default ItemStack getToastSymbol()`
- `RecipeSerializer<?> getSerializer()`
- `RecipeType<?> getType()`
- `default boolean isIncomplete()`

## RecipeHolder>

*record* `net.minecraft.world.item.crafting.RecipeHolder>`

### Fields
- `private final ResourceLocation id`
  The field for the id record component.
- `private final T extends Recipe<?> value`
  The field for the value record component.

### Methods
- `public boolean equals(Object p_298053_)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: p_298053_ - the object with which to compare
  - returns: true if this object is the same as the p_298053_ argument; false otherwise.
- `public int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public ResourceLocation id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public T value()`
  Returns the value of the value record component.
  - returns: the value of the value record component

## RecipeManager

*class* `net.minecraft.world.item.crafting.RecipeManager`

### Fields
- `private static final com.google.gson.Gson GSON`
- `private static final org.slf4j.Logger LOGGER`
- `private Map<RecipeType<?>,Map<ResourceLocation,RecipeHolder<?>>> recipes`
- `private Map<ResourceLocation,RecipeHolder<?>> byName`
- `private boolean hasErrors`
- `private final ICondition.IContext context`

### Methods
- `protected void apply(Map<ResourceLocation,com.google.gson.JsonElement> p_44037_,  ResourceManager p_44038_,  ProfilerFiller p_44039_)`
- `public boolean hadErrorsLoading()`
- `public <C extends Container, T extends Recipe<C>> Optional<RecipeHolder<T>> getRecipeFor(RecipeType<T> p_44016_,  C p_44017_,  Level p_44018_)`
- `public <C extends Container, T extends Recipe<C>> Optional<com.mojang.datafixers.util.Pair<ResourceLocation,RecipeHolder<T>>> getRecipeFor(RecipeType<T> p_220249_,  C p_220250_,  Level p_220251_,  @Nullable  ResourceLocation p_220252_)`
- `public <C extends Container, T extends Recipe<C>> List<RecipeHolder<T>> getAllRecipesFor(RecipeType<T> p_44014_)`
- `public <C extends Container, T extends Recipe<C>> List<RecipeHolder<T>> getRecipesFor(RecipeType<T> p_44057_,  C p_44058_,  Level p_44059_)`
- `private <C extends Container, T extends Recipe<C>> Map<ResourceLocation,RecipeHolder<T>> byType(RecipeType<T> p_44055_)`
- `public <C extends Container, T extends Recipe<C>> NonNullList<ItemStack> getRemainingItemsFor(RecipeType<T> p_44070_,  C p_44071_,  Level p_44072_)`
- `public Optional<RecipeHolder<?>> byKey(ResourceLocation p_44044_)`
- `public Collection<RecipeHolder<?>> getRecipes()`
- `public Stream<ResourceLocation> getRecipeIds()`
- `protected static RecipeHolder<?> fromJson(ResourceLocation p_44046_,  com.google.gson.JsonObject p_44047_)`
- `public void replaceRecipes(Iterable<RecipeHolder<?>> p_44025_)`
- `public static <C extends Container, T extends Recipe<C>> RecipeManager.CachedCheck<C,T> createCheck(RecipeType<T> p_220268_)`

### Inherited methods
- from `net.minecraft.server.packs.resources.SimpleJsonResourceReloadListener`: `getPreparedPath`, `prepare`, `scanDirectory`
- from `net.minecraft.server.packs.resources.SimplePreparableReloadListener`: `reload`
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## RecipeManager.CachedCheck>

*interface* `net.minecraft.world.item.crafting.RecipeManager.CachedCheck>`

Enclosing class: RecipeManager

### Methods
- `Optional<RecipeHolder<T>> getRecipeFor(C p_220280_,  Level p_220281_)`

## RecipeSerializer>

*interface* `net.minecraft.world.item.crafting.RecipeSerializer>`

### Fields
- `static final RecipeSerializer<ShapedRecipe> SHAPED_RECIPE`
- `static final RecipeSerializer<ShapelessRecipe> SHAPELESS_RECIPE`
- `static final RecipeSerializer<ArmorDyeRecipe> ARMOR_DYE`
- `static final RecipeSerializer<BookCloningRecipe> BOOK_CLONING`
- `static final RecipeSerializer<MapCloningRecipe> MAP_CLONING`
- `static final RecipeSerializer<MapExtendingRecipe> MAP_EXTENDING`
- `static final RecipeSerializer<FireworkRocketRecipe> FIREWORK_ROCKET`
- `static final RecipeSerializer<FireworkStarRecipe> FIREWORK_STAR`
- `static final RecipeSerializer<FireworkStarFadeRecipe> FIREWORK_STAR_FADE`
- `static final RecipeSerializer<TippedArrowRecipe> TIPPED_ARROW`
- `static final RecipeSerializer<BannerDuplicateRecipe> BANNER_DUPLICATE`
- `static final RecipeSerializer<ShieldDecorationRecipe> SHIELD_DECORATION`
- `static final RecipeSerializer<ShulkerBoxColoring> SHULKER_BOX_COLORING`
- `static final RecipeSerializer<SuspiciousStewRecipe> SUSPICIOUS_STEW`
- `static final RecipeSerializer<RepairItemRecipe> REPAIR_ITEM`
- `static final RecipeSerializer<SmeltingRecipe> SMELTING_RECIPE`
- `static final RecipeSerializer<BlastingRecipe> BLASTING_RECIPE`
- `static final RecipeSerializer<SmokingRecipe> SMOKING_RECIPE`
- `static final RecipeSerializer<CampfireCookingRecipe> CAMPFIRE_COOKING_RECIPE`
- `static final RecipeSerializer<StonecutterRecipe> STONECUTTER`
- `static final RecipeSerializer<SmithingTransformRecipe> SMITHING_TRANSFORM`
- `static final RecipeSerializer<SmithingTrimRecipe> SMITHING_TRIM`
- `static final RecipeSerializer<DecoratedPotRecipe> DECORATED_POT_RECIPE`

### Methods
- `com.mojang.serialization.Codec<T> codec()`
- `@Nullable T fromNetwork(FriendlyByteBuf p_44106_)`
- `void toNetwork(FriendlyByteBuf p_44101_,  T p_44102_)`
- `static <S extends RecipeSerializer<T>, T extends Recipe<?>> S register(String p_44099_,  S p_44100_)`

## RecipeType>

*interface* `net.minecraft.world.item.crafting.RecipeType>`

### Fields
- `static final RecipeType<CraftingRecipe> CRAFTING`
- `static final RecipeType<SmeltingRecipe> SMELTING`
- `static final RecipeType<BlastingRecipe> BLASTING`
- `static final RecipeType<SmokingRecipe> SMOKING`
- `static final RecipeType<CampfireCookingRecipe> CAMPFIRE_COOKING`
- `static final RecipeType<StonecutterRecipe> STONECUTTING`
- `static final RecipeType<SmithingRecipe> SMITHING`

### Methods
- `static <T extends Recipe<?>> RecipeType<T> register(String p_44120_)`
- `static <T extends Recipe<?>> RecipeType<T> simple(ResourceLocation name)`

## RepairItemRecipe

*class* `net.minecraft.world.item.crafting.RepairItemRecipe`

### Methods
- `public boolean matches(CraftingContainer p_44138_,  Level p_44139_)`
- `public ItemStack assemble(CraftingContainer p_44136_,  RegistryAccess p_267094_)`
- `public boolean canCraftInDimensions(int p_44128_,  int p_44129_)`
- `public RecipeSerializer<?> getSerializer()`

### Inherited methods
- from `net.minecraft.world.item.crafting.CustomRecipe`: `category`, `getResultItem`, `isSpecial`
- from `net.minecraft.world.item.crafting.CraftingRecipe`: `getType`
- from `net.minecraft.world.item.crafting.Recipe`: `getGroup`, `getIngredients`, `getRemainingItems`, `getToastSymbol`, `isIncomplete`, `showNotification`

## ShapedRecipe

*class* `net.minecraft.world.item.crafting.ShapedRecipe`

### Fields
- `static int MAX_WIDTH`
- `static int MAX_HEIGHT`
- `final int width`
- `final int height`
- `final NonNullList<Ingredient> recipeItems`
- `final ItemStack result`
- `final String group`
- `final CraftingBookCategory category`
- `final boolean showNotification`

### Methods
- `public static void setCraftingSize(int width,  int height)`
  Expand the max width and height allowed in the deserializer.
   This should be called by modders who add custom crafting tables that are larger than the vanilla 3x3.
  - param: width - your max recipe width
  - param: height - your max recipe height
- `public RecipeSerializer<?> getSerializer()`
- `public String getGroup()`
- `public CraftingBookCategory category()`
- `public ItemStack getResultItem(RegistryAccess p_266881_)`
- `public NonNullList<Ingredient> getIngredients()`
- `public boolean showNotification()`
- `public boolean canCraftInDimensions(int p_44161_,  int p_44162_)`
- `public boolean matches(CraftingContainer p_44176_,  Level p_44177_)`
- `private boolean matches(CraftingContainer p_44171_,  int p_44172_,  int p_44173_,  boolean p_44174_)`
- `public ItemStack assemble(CraftingContainer p_266686_,  RegistryAccess p_266725_)`
- `public int getWidth()`
- `public int getRecipeWidth()`
- `public int getHeight()`
- `public int getRecipeHeight()`
- `static String[] shrink(List<String> p_299210_)`
- `public boolean isIncomplete()`
- `private static int firstNonSpace(String p_44185_)`
- `private static int lastNonSpace(String p_44201_)`

### Inherited methods
- from `net.minecraft.world.item.crafting.CraftingRecipe`: `getType`
- from `net.minecraft.world.item.crafting.Recipe`: `getRemainingItems`, `getToastSymbol`, `isSpecial`

## ShapedRecipe.Serializer

*class* `net.minecraft.world.item.crafting.ShapedRecipe.Serializer`

Enclosing class: ShapedRecipe

### Fields
- `static final com.mojang.serialization.Codec<List<String>> PATTERN_CODEC`
- `static final com.mojang.serialization.Codec<String> SINGLE_CHARACTER_STRING_CODEC`
- `private static final com.mojang.serialization.Codec<ShapedRecipe> CODEC`

### Inherited fields
- from `net.minecraft.world.item.crafting.RecipeSerializer`: `ARMOR_DYE`, `BANNER_DUPLICATE`, `BLASTING_RECIPE`, `BOOK_CLONING`, `CAMPFIRE_COOKING_RECIPE`, `DECORATED_POT_RECIPE`, `FIREWORK_ROCKET`, `FIREWORK_STAR`, `FIREWORK_STAR_FADE`, `MAP_CLONING`, `MAP_EXTENDING`, `REPAIR_ITEM`, `SHAPED_RECIPE`, `SHAPELESS_RECIPE`, `SHIELD_DECORATION`, `SHULKER_BOX_COLORING`, `SMELTING_RECIPE`, `SMITHING_TRANSFORM`, `SMITHING_TRIM`, `SMOKING_RECIPE`, `STONECUTTER`, `SUSPICIOUS_STEW`, `TIPPED_ARROW`

### Methods
- `public com.mojang.serialization.Codec<ShapedRecipe> codec()`
- `public ShapedRecipe fromNetwork(FriendlyByteBuf p_44234_)`
- `public void toNetwork(FriendlyByteBuf p_44227_,  ShapedRecipe p_44228_)`

## ShapedRecipe.Serializer.RawShapedRecipe

*record* `net.minecraft.world.item.crafting.ShapedRecipe.Serializer.RawShapedRecipe`

Enclosing class: ShapedRecipe.Serializer

### Fields
- `private final String group`
  The field for the group record component.
- `private final CraftingBookCategory category`
  The field for the category record component.
- `private final Map<String,Ingredient> key`
  The field for the key record component.
- `private final List<String> pattern`
  The field for the pattern record component.
- `private final ItemStack result`
  The field for the result record component.
- `private final boolean showNotification`
  The field for the showNotification record component.
- `public static final com.mojang.serialization.Codec<ShapedRecipe.Serializer.RawShapedRecipe> CODEC`

### Methods
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
- `public CraftingBookCategory category()`
  Returns the value of the category record component.
  - returns: the value of the category record component
- `public Map<String,Ingredient> key()`
  Returns the value of the key record component.
  - returns: the value of the key record component
- `public List<String> pattern()`
  Returns the value of the pattern record component.
  - returns: the value of the pattern record component
- `public ItemStack result()`
  Returns the value of the result record component.
  - returns: the value of the result record component
- `public boolean showNotification()`
  Returns the value of the showNotification record component.
  - returns: the value of the showNotification record component

## ShapelessRecipe

*class* `net.minecraft.world.item.crafting.ShapelessRecipe`

### Fields
- `final String group`
- `final CraftingBookCategory category`
- `final ItemStack result`
- `final NonNullList<Ingredient> ingredients`
- `private final boolean isSimple`

### Methods
- `public RecipeSerializer<?> getSerializer()`
- `public String getGroup()`
- `public CraftingBookCategory category()`
- `public ItemStack getResultItem(RegistryAccess p_267111_)`
- `public NonNullList<Ingredient> getIngredients()`
- `public boolean matches(CraftingContainer p_44262_,  Level p_44263_)`
- `public ItemStack assemble(CraftingContainer p_44260_,  RegistryAccess p_266797_)`
- `public boolean canCraftInDimensions(int p_44252_,  int p_44253_)`

### Inherited methods
- from `net.minecraft.world.item.crafting.CraftingRecipe`: `getType`
- from `net.minecraft.world.item.crafting.Recipe`: `getRemainingItems`, `getToastSymbol`, `isIncomplete`, `isSpecial`, `showNotification`

## ShapelessRecipe.Serializer

*class* `net.minecraft.world.item.crafting.ShapelessRecipe.Serializer`

Enclosing class: ShapelessRecipe

### Fields
- `private static final com.mojang.serialization.Codec<ShapelessRecipe> CODEC`

### Inherited fields
- from `net.minecraft.world.item.crafting.RecipeSerializer`: `ARMOR_DYE`, `BANNER_DUPLICATE`, `BLASTING_RECIPE`, `BOOK_CLONING`, `CAMPFIRE_COOKING_RECIPE`, `DECORATED_POT_RECIPE`, `FIREWORK_ROCKET`, `FIREWORK_STAR`, `FIREWORK_STAR_FADE`, `MAP_CLONING`, `MAP_EXTENDING`, `REPAIR_ITEM`, `SHAPED_RECIPE`, `SHAPELESS_RECIPE`, `SHIELD_DECORATION`, `SHULKER_BOX_COLORING`, `SMELTING_RECIPE`, `SMITHING_TRANSFORM`, `SMITHING_TRIM`, `SMOKING_RECIPE`, `STONECUTTER`, `SUSPICIOUS_STEW`, `TIPPED_ARROW`

### Methods
- `public com.mojang.serialization.Codec<ShapelessRecipe> codec()`
- `public ShapelessRecipe fromNetwork(FriendlyByteBuf p_44294_)`
- `public void toNetwork(FriendlyByteBuf p_44281_,  ShapelessRecipe p_44282_)`

## ShieldDecorationRecipe

*class* `net.minecraft.world.item.crafting.ShieldDecorationRecipe`

### Methods
- `public boolean matches(CraftingContainer p_44308_,  Level p_44309_)`
- `public ItemStack assemble(CraftingContainer p_44306_,  RegistryAccess p_267112_)`
- `public boolean canCraftInDimensions(int p_44298_,  int p_44299_)`
- `public RecipeSerializer<?> getSerializer()`

### Inherited methods
- from `net.minecraft.world.item.crafting.CustomRecipe`: `category`, `getResultItem`, `isSpecial`
- from `net.minecraft.world.item.crafting.CraftingRecipe`: `getType`
- from `net.minecraft.world.item.crafting.Recipe`: `getGroup`, `getIngredients`, `getRemainingItems`, `getToastSymbol`, `isIncomplete`, `showNotification`

## ShulkerBoxColoring

*class* `net.minecraft.world.item.crafting.ShulkerBoxColoring`

### Methods
- `public boolean matches(CraftingContainer p_44324_,  Level p_44325_)`
- `public ItemStack assemble(CraftingContainer p_44322_,  RegistryAccess p_266985_)`
- `public boolean canCraftInDimensions(int p_44314_,  int p_44315_)`
- `public RecipeSerializer<?> getSerializer()`

### Inherited methods
- from `net.minecraft.world.item.crafting.CustomRecipe`: `category`, `getResultItem`, `isSpecial`
- from `net.minecraft.world.item.crafting.CraftingRecipe`: `getType`
- from `net.minecraft.world.item.crafting.Recipe`: `getGroup`, `getIngredients`, `getRemainingItems`, `getToastSymbol`, `isIncomplete`, `showNotification`

## SimpleCookingSerializer

*class* `net.minecraft.world.item.crafting.SimpleCookingSerializer`

### Fields
- `private final SimpleCookingSerializer.CookieBaker<T extends AbstractCookingRecipe> factory`
- `private final com.mojang.serialization.Codec<T extends AbstractCookingRecipe> codec`

### Inherited fields
- from `net.minecraft.world.item.crafting.RecipeSerializer`: `ARMOR_DYE`, `BANNER_DUPLICATE`, `BLASTING_RECIPE`, `BOOK_CLONING`, `CAMPFIRE_COOKING_RECIPE`, `DECORATED_POT_RECIPE`, `FIREWORK_ROCKET`, `FIREWORK_STAR`, `FIREWORK_STAR_FADE`, `MAP_CLONING`, `MAP_EXTENDING`, `REPAIR_ITEM`, `SHAPED_RECIPE`, `SHAPELESS_RECIPE`, `SHIELD_DECORATION`, `SHULKER_BOX_COLORING`, `SMELTING_RECIPE`, `SMITHING_TRANSFORM`, `SMITHING_TRIM`, `SMOKING_RECIPE`, `STONECUTTER`, `SUSPICIOUS_STEW`, `TIPPED_ARROW`

### Methods
- `public com.mojang.serialization.Codec<T> codec()`
- `public T fromNetwork(FriendlyByteBuf p_44351_)`
- `public void toNetwork(FriendlyByteBuf p_44335_,  T p_44336_)`

## SimpleCookingSerializer.CookieBaker

*interface* `net.minecraft.world.item.crafting.SimpleCookingSerializer.CookieBaker`

Enclosing class: SimpleCookingSerializer<T extends AbstractCookingRecipe>

### Methods
- `T create(String p_44354_,  CookingBookCategory p_249487_,  Ingredient p_44355_,  ItemStack p_44356_,  float p_44357_,  int p_44358_)`

## SimpleCraftingRecipeSerializer

*class* `net.minecraft.world.item.crafting.SimpleCraftingRecipeSerializer`

### Fields
- `private final SimpleCraftingRecipeSerializer.Factory<T extends CraftingRecipe> constructor`
- `private final com.mojang.serialization.Codec<T extends CraftingRecipe> codec`

### Inherited fields
- from `net.minecraft.world.item.crafting.RecipeSerializer`: `ARMOR_DYE`, `BANNER_DUPLICATE`, `BLASTING_RECIPE`, `BOOK_CLONING`, `CAMPFIRE_COOKING_RECIPE`, `DECORATED_POT_RECIPE`, `FIREWORK_ROCKET`, `FIREWORK_STAR`, `FIREWORK_STAR_FADE`, `MAP_CLONING`, `MAP_EXTENDING`, `REPAIR_ITEM`, `SHAPED_RECIPE`, `SHAPELESS_RECIPE`, `SHIELD_DECORATION`, `SHULKER_BOX_COLORING`, `SMELTING_RECIPE`, `SMITHING_TRANSFORM`, `SMITHING_TRIM`, `SMOKING_RECIPE`, `STONECUTTER`, `SUSPICIOUS_STEW`, `TIPPED_ARROW`

### Methods
- `public com.mojang.serialization.Codec<T> codec()`
- `public T fromNetwork(FriendlyByteBuf p_251882_)`
- `public void toNetwork(FriendlyByteBuf p_248968_,  T p_250179_)`

## SimpleCraftingRecipeSerializer.Factory

*interface* `net.minecraft.world.item.crafting.SimpleCraftingRecipeSerializer.Factory`

Enclosing class: SimpleCraftingRecipeSerializer<T extends CraftingRecipe>

### Methods
- `T create(CraftingBookCategory p_249920_)`

## SingleItemRecipe

*class* `net.minecraft.world.item.crafting.SingleItemRecipe`

### Fields
- `protected final Ingredient ingredient`
- `protected final ItemStack result`
- `private final RecipeType<?> type`
- `private final RecipeSerializer<?> serializer`
- `protected final String group`

### Methods
- `public RecipeType<?> getType()`
- `public RecipeSerializer<?> getSerializer()`
- `public String getGroup()`
- `public ItemStack getResultItem(RegistryAccess p_266964_)`
- `public NonNullList<Ingredient> getIngredients()`
- `public boolean canCraftInDimensions(int p_44424_,  int p_44425_)`
- `public ItemStack assemble(Container p_44427_,  RegistryAccess p_266999_)`

### Inherited methods
- from `net.minecraft.world.item.crafting.Recipe`: `getRemainingItems`, `getToastSymbol`, `isIncomplete`, `isSpecial`, `matches`, `showNotification`

## SingleItemRecipe.Serializer

*class* `net.minecraft.world.item.crafting.SingleItemRecipe.Serializer`

Enclosing class: SingleItemRecipe

### Fields
- `private static final com.mojang.serialization.MapCodec<ItemStack> RESULT_CODEC`
- `final SingleItemRecipe.Serializer.SingleItemMaker<T extends SingleItemRecipe> factory`
- `private final com.mojang.serialization.Codec<T extends SingleItemRecipe> codec`

### Inherited fields
- from `net.minecraft.world.item.crafting.RecipeSerializer`: `ARMOR_DYE`, `BANNER_DUPLICATE`, `BLASTING_RECIPE`, `BOOK_CLONING`, `CAMPFIRE_COOKING_RECIPE`, `DECORATED_POT_RECIPE`, `FIREWORK_ROCKET`, `FIREWORK_STAR`, `FIREWORK_STAR_FADE`, `MAP_CLONING`, `MAP_EXTENDING`, `REPAIR_ITEM`, `SHAPED_RECIPE`, `SHAPELESS_RECIPE`, `SHIELD_DECORATION`, `SHULKER_BOX_COLORING`, `SMELTING_RECIPE`, `SMITHING_TRANSFORM`, `SMITHING_TRIM`, `SMOKING_RECIPE`, `STONECUTTER`, `SUSPICIOUS_STEW`, `TIPPED_ARROW`

### Methods
- `public com.mojang.serialization.Codec<T> codec()`
- `public T fromNetwork(FriendlyByteBuf p_44447_)`
- `public void toNetwork(FriendlyByteBuf p_44440_,  T p_44441_)`

## SingleItemRecipe.Serializer.SingleItemMaker

*interface* `net.minecraft.world.item.crafting.SingleItemRecipe.Serializer.SingleItemMaker`

Enclosing class: SingleItemRecipe.Serializer<T extends SingleItemRecipe>

### Methods
- `T create(String p_44456_,  Ingredient p_44457_,  ItemStack p_301771_)`

## SmeltingRecipe

*class* `net.minecraft.world.item.crafting.SmeltingRecipe`

### Inherited fields
- from `net.minecraft.world.item.crafting.AbstractCookingRecipe`: `category`, `cookingTime`, `experience`, `group`, `ingredient`, `result`, `type`

### Methods
- `public ItemStack getToastSymbol()`
- `public RecipeSerializer<?> getSerializer()`

### Inherited methods
- from `net.minecraft.world.item.crafting.AbstractCookingRecipe`: `assemble`, `canCraftInDimensions`, `category`, `getCookingTime`, `getExperience`, `getGroup`, `getIngredients`, `getResultItem`, `getType`, `matches`
- from `net.minecraft.world.item.crafting.Recipe`: `getRemainingItems`, `isIncomplete`, `isSpecial`, `showNotification`

## SmithingRecipe

*interface* `net.minecraft.world.item.crafting.SmithingRecipe`

All Superinterfaces: Recipe<Container>

### Methods
- `default RecipeType<?> getType()`
- `default boolean canCraftInDimensions(int p_266835_,  int p_266829_)`
- `default ItemStack getToastSymbol()`
- `boolean isTemplateIngredient(ItemStack p_266982_)`
- `boolean isBaseIngredient(ItemStack p_266962_)`
- `boolean isAdditionIngredient(ItemStack p_267132_)`

### Inherited methods
- from `net.minecraft.world.item.crafting.Recipe`: `assemble`, `getGroup`, `getIngredients`, `getRemainingItems`, `getResultItem`, `getSerializer`, `isIncomplete`, `isSpecial`, `matches`, `showNotification`

## SmithingTransformRecipe

*class* `net.minecraft.world.item.crafting.SmithingTransformRecipe`

### Fields
- `final Ingredient template`
- `final Ingredient base`
- `final Ingredient addition`
- `final ItemStack result`

### Methods
- `public boolean matches(Container p_266855_,  Level p_266781_)`
- `public ItemStack assemble(Container p_267036_,  RegistryAccess p_266699_)`
- `public ItemStack getResultItem(RegistryAccess p_267209_)`
- `public boolean isTemplateIngredient(ItemStack p_267113_)`
- `public boolean isBaseIngredient(ItemStack p_267276_)`
- `public boolean isAdditionIngredient(ItemStack p_267260_)`
- `public RecipeSerializer<?> getSerializer()`
- `public boolean isIncomplete()`

### Inherited methods
- from `net.minecraft.world.item.crafting.Recipe`: `getGroup`, `getIngredients`, `getRemainingItems`, `isSpecial`, `showNotification`
- from `net.minecraft.world.item.crafting.SmithingRecipe`: `canCraftInDimensions`, `getToastSymbol`, `getType`

## SmithingTransformRecipe.Serializer

*class* `net.minecraft.world.item.crafting.SmithingTransformRecipe.Serializer`

Enclosing class: SmithingTransformRecipe

### Fields
- `private static final com.mojang.serialization.Codec<SmithingTransformRecipe> CODEC`

### Inherited fields
- from `net.minecraft.world.item.crafting.RecipeSerializer`: `ARMOR_DYE`, `BANNER_DUPLICATE`, `BLASTING_RECIPE`, `BOOK_CLONING`, `CAMPFIRE_COOKING_RECIPE`, `DECORATED_POT_RECIPE`, `FIREWORK_ROCKET`, `FIREWORK_STAR`, `FIREWORK_STAR_FADE`, `MAP_CLONING`, `MAP_EXTENDING`, `REPAIR_ITEM`, `SHAPED_RECIPE`, `SHAPELESS_RECIPE`, `SHIELD_DECORATION`, `SHULKER_BOX_COLORING`, `SMELTING_RECIPE`, `SMITHING_TRANSFORM`, `SMITHING_TRIM`, `SMOKING_RECIPE`, `STONECUTTER`, `SUSPICIOUS_STEW`, `TIPPED_ARROW`

### Methods
- `public com.mojang.serialization.Codec<SmithingTransformRecipe> codec()`
- `public SmithingTransformRecipe fromNetwork(FriendlyByteBuf p_267316_)`
- `public void toNetwork(FriendlyByteBuf p_266746_,  SmithingTransformRecipe p_266927_)`

## SmithingTrimRecipe

*class* `net.minecraft.world.item.crafting.SmithingTrimRecipe`

### Fields
- `final Ingredient template`
- `final Ingredient base`
- `final Ingredient addition`

### Methods
- `public boolean matches(Container p_267224_,  Level p_266798_)`
- `public ItemStack assemble(Container p_267320_,  RegistryAccess p_267280_)`
- `public ItemStack getResultItem(RegistryAccess p_266948_)`
- `public boolean isTemplateIngredient(ItemStack p_266762_)`
- `public boolean isBaseIngredient(ItemStack p_266795_)`
- `public boolean isAdditionIngredient(ItemStack p_266922_)`
- `public RecipeSerializer<?> getSerializer()`
- `public boolean isIncomplete()`

### Inherited methods
- from `net.minecraft.world.item.crafting.Recipe`: `getGroup`, `getIngredients`, `getRemainingItems`, `isSpecial`, `showNotification`
- from `net.minecraft.world.item.crafting.SmithingRecipe`: `canCraftInDimensions`, `getToastSymbol`, `getType`

## SmithingTrimRecipe.Serializer

*class* `net.minecraft.world.item.crafting.SmithingTrimRecipe.Serializer`

Enclosing class: SmithingTrimRecipe

### Fields
- `private static final com.mojang.serialization.Codec<SmithingTrimRecipe> CODEC`

### Inherited fields
- from `net.minecraft.world.item.crafting.RecipeSerializer`: `ARMOR_DYE`, `BANNER_DUPLICATE`, `BLASTING_RECIPE`, `BOOK_CLONING`, `CAMPFIRE_COOKING_RECIPE`, `DECORATED_POT_RECIPE`, `FIREWORK_ROCKET`, `FIREWORK_STAR`, `FIREWORK_STAR_FADE`, `MAP_CLONING`, `MAP_EXTENDING`, `REPAIR_ITEM`, `SHAPED_RECIPE`, `SHAPELESS_RECIPE`, `SHIELD_DECORATION`, `SHULKER_BOX_COLORING`, `SMELTING_RECIPE`, `SMITHING_TRANSFORM`, `SMITHING_TRIM`, `SMOKING_RECIPE`, `STONECUTTER`, `SUSPICIOUS_STEW`, `TIPPED_ARROW`

### Methods
- `public com.mojang.serialization.Codec<SmithingTrimRecipe> codec()`
- `public SmithingTrimRecipe fromNetwork(FriendlyByteBuf p_266888_)`
- `public void toNetwork(FriendlyByteBuf p_266901_,  SmithingTrimRecipe p_266893_)`

## SmokingRecipe

*class* `net.minecraft.world.item.crafting.SmokingRecipe`

### Inherited fields
- from `net.minecraft.world.item.crafting.AbstractCookingRecipe`: `category`, `cookingTime`, `experience`, `group`, `ingredient`, `result`, `type`

### Methods
- `public ItemStack getToastSymbol()`
- `public RecipeSerializer<?> getSerializer()`

### Inherited methods
- from `net.minecraft.world.item.crafting.AbstractCookingRecipe`: `assemble`, `canCraftInDimensions`, `category`, `getCookingTime`, `getExperience`, `getGroup`, `getIngredients`, `getResultItem`, `getType`, `matches`
- from `net.minecraft.world.item.crafting.Recipe`: `getRemainingItems`, `isIncomplete`, `isSpecial`, `showNotification`

## StonecutterRecipe

*class* `net.minecraft.world.item.crafting.StonecutterRecipe`

### Inherited fields
- from `net.minecraft.world.item.crafting.SingleItemRecipe`: `group`, `ingredient`, `result`

### Methods
- `public boolean matches(Container p_44483_,  Level p_44484_)`
- `public ItemStack getToastSymbol()`

### Inherited methods
- from `net.minecraft.world.item.crafting.SingleItemRecipe`: `assemble`, `canCraftInDimensions`, `getGroup`, `getIngredients`, `getResultItem`, `getSerializer`, `getType`
- from `net.minecraft.world.item.crafting.Recipe`: `getRemainingItems`, `isIncomplete`, `isSpecial`, `showNotification`

## SuspiciousStewRecipe

*class* `net.minecraft.world.item.crafting.SuspiciousStewRecipe`

### Methods
- `public boolean matches(CraftingContainer p_44499_,  Level p_44500_)`
- `public ItemStack assemble(CraftingContainer p_44497_,  RegistryAccess p_266871_)`
- `public boolean canCraftInDimensions(int p_44489_,  int p_44490_)`
- `public RecipeSerializer<?> getSerializer()`

### Inherited methods
- from `net.minecraft.world.item.crafting.CustomRecipe`: `category`, `getResultItem`, `isSpecial`
- from `net.minecraft.world.item.crafting.CraftingRecipe`: `getType`
- from `net.minecraft.world.item.crafting.Recipe`: `getGroup`, `getIngredients`, `getRemainingItems`, `getToastSymbol`, `isIncomplete`, `showNotification`

## TippedArrowRecipe

*class* `net.minecraft.world.item.crafting.TippedArrowRecipe`

### Methods
- `public boolean matches(CraftingContainer p_44515_,  Level p_44516_)`
- `public ItemStack assemble(CraftingContainer p_44513_,  RegistryAccess p_267186_)`
- `public boolean canCraftInDimensions(int p_44505_,  int p_44506_)`
- `public RecipeSerializer<?> getSerializer()`

### Inherited methods
- from `net.minecraft.world.item.crafting.CustomRecipe`: `category`, `getResultItem`, `isSpecial`
- from `net.minecraft.world.item.crafting.CraftingRecipe`: `getType`
- from `net.minecraft.world.item.crafting.Recipe`: `getGroup`, `getIngredients`, `getRemainingItems`, `getToastSymbol`, `isIncomplete`, `showNotification`
