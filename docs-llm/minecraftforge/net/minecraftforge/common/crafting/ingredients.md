# net.minecraftforge.common.crafting.ingredients

- [AbstractIngredient](#abstractingredient)
- [CompoundIngredient](#compoundingredient)
- [DifferenceIngredient](#differenceingredient)
- [IIngredientBuilder](#iingredientbuilder)
- [IIngredientSerializer](#iingredientserializer)
- [IntersectionIngredient](#intersectioningredient)
- [PartialNBTIngredient](#partialnbtingredient)
- [PartialNBTIngredient.Builder](#partialnbtingredient.builder)
- [StrictNBTIngredient](#strictnbtingredient)
## AbstractIngredient

*class* `net.minecraftforge.common.crafting.ingredients.AbstractIngredient`

Extension of Ingredient which makes most methods custom ingredients need to implement abstract, and removes the static constructors
 Mods are encouraged to extend this class for their custom ingredients

### Inherited fields
- from `net.minecraft.world.item.crafting.Ingredient`: `CODEC`, `CODEC_NONEMPTY`, `EMPTY`, `VANILLA_CODEC`

### Methods
- `public abstract boolean isSimple()`
- `public abstract IIngredientSerializer<? extends Ingredient> serializer()`
- `@Deprecated public static Ingredient fromValues(Stream<? extends Ingredient.Value> values)` (deprecated)
- `@Deprecated public static Ingredient of()` (deprecated)
- `@Deprecated public static Ingredient of(ItemLike... items)` (deprecated)
- `@Deprecated public static Ingredient of(ItemStack... stacks)` (deprecated)
- `@Deprecated public static Ingredient of(Stream<ItemStack> stacks)` (deprecated)
- `@Deprecated public static Ingredient of(TagKey<Item> tag)` (deprecated)
- `@Deprecated public static Ingredient fromNetwork(FriendlyByteBuf buffer)` (deprecated)

### Inherited methods
- from `net.minecraft.world.item.crafting.Ingredient`: `checkInvalidation`, `equals`, `getItems`, `getStackingIds`, `invalidate`, `invalidateAll`, `isEmpty`, `isVanilla`, `markValid`, `test`, `toJson`, `toNetwork`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## CompoundIngredient

*class* `net.minecraftforge.common.crafting.ingredients.CompoundIngredient`

Ingredient that matches if any of the child ingredients match

### Fields
- `private List<Ingredient> children`
- `private ItemStack[] stacks`
- `private it.unimi.dsi.fastutil.ints.IntList itemIds`
- `private final boolean isSimple`
- `public static final com.mojang.serialization.Codec<CompoundIngredient> CODEC`
- `public static final IIngredientSerializer<CompoundIngredient> SERIALIZER`

### Inherited fields
- from `net.minecraft.world.item.crafting.Ingredient`: `CODEC_NONEMPTY`, `EMPTY`, `VANILLA_CODEC`

### Methods
- `public static Ingredient of(Ingredient... children)`
- `@NotNull public @NotNull ItemStack[] getItems()`
- `@NotNull public @NotNull it.unimi.dsi.fastutil.ints.IntList getStackingIds()`
- `public boolean test(@Nullable  @Nullable ItemStack target)`
- `public boolean isSimple()`
- `public boolean isEmpty()`
- `public IIngredientSerializer<? extends Ingredient> serializer()`

### Inherited methods
- from `net.minecraftforge.common.crafting.ingredients.AbstractIngredient`: `fromNetwork`, `fromValues`, `of`, `of`, `of`, `of`, `of`
- from `net.minecraft.world.item.crafting.Ingredient`: `checkInvalidation`, `equals`, `invalidate`, `invalidateAll`, `isVanilla`, `markValid`, `toJson`, `toNetwork`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## DifferenceIngredient

*class* `net.minecraftforge.common.crafting.ingredients.DifferenceIngredient`

Ingredient that matches everything from the first ingredient that is not included in the second ingredient

### Fields
- `private final Ingredient base`
- `private final Ingredient subtracted`
- `private ItemStack[] filteredMatchingStacks`
- `private it.unimi.dsi.fastutil.ints.IntList packedMatchingStacks`
- `public static final com.mojang.serialization.Codec<DifferenceIngredient> CODEC`
- `public static final IIngredientSerializer<DifferenceIngredient> SERIALIZER`

### Inherited fields
- from `net.minecraft.world.item.crafting.Ingredient`: `CODEC_NONEMPTY`, `EMPTY`, `VANILLA_CODEC`

### Methods
- `public static DifferenceIngredient of(Ingredient base,  Ingredient subtracted)`
  Gets the difference from the two ingredients
  - param: base - Ingredient the item must match
  - param: subtracted - Ingredient the item must not match
  - returns: Ingredient that matches anything in base that is not in subtracted
- `public boolean test(@Nullable  @Nullable ItemStack stack)`
- `public ItemStack[] getItems()`
- `public boolean isEmpty()`
- `public boolean isSimple()`
- `protected void invalidate()`
- `public it.unimi.dsi.fastutil.ints.IntList getStackingIds()`
- `public IIngredientSerializer<DifferenceIngredient> serializer()`

### Inherited methods
- from `net.minecraftforge.common.crafting.ingredients.AbstractIngredient`: `fromNetwork`, `fromValues`, `of`, `of`, `of`, `of`, `of`
- from `net.minecraft.world.item.crafting.Ingredient`: `checkInvalidation`, `equals`, `invalidateAll`, `isVanilla`, `markValid`, `toJson`, `toNetwork`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## IIngredientBuilder

*interface* `net.minecraftforge.common.crafting.ingredients.IIngredientBuilder`

### Methods
- `default PartialNBTIngredient.Builder partialNbt()`
- `default Ingredient strictNbt(ItemStack value)`
- `default Ingredient compound(Ingredient... values)`
- `default Ingredient intersection(TagKey... values)`
- `default Ingredient intersection(Ingredient... values)`
- `default Ingredient difference(TagKey<Item> base,  TagKey<Item> subtracted)`
- `default Ingredient difference(Ingredient base,  Ingredient subtracted)`

## IIngredientSerializer

*interface* `net.minecraftforge.common.crafting.ingredients.IIngredientSerializer`

### Fields
- `static final IIngredientSerializer<Ingredient> VANILLA`

### Methods
- `com.mojang.serialization.Codec<? extends T> codec()`
- `void write(FriendlyByteBuf buffer,  T value)`
- `T read(FriendlyByteBuf buffer)`

## IntersectionIngredient

*class* `net.minecraftforge.common.crafting.ingredients.IntersectionIngredient`

Ingredient that matches if all child ingredients match

### Fields
- `private final List<Ingredient> children`
- `private final boolean isSimple`
- `private ItemStack[] intersectedMatchingStacks`
- `private it.unimi.dsi.fastutil.ints.IntList packedMatchingStacks`
- `public static final com.mojang.serialization.Codec<IntersectionIngredient> CODEC`
- `public static final IIngredientSerializer<IntersectionIngredient> SERIALIZER`

### Inherited fields
- from `net.minecraft.world.item.crafting.Ingredient`: `CODEC_NONEMPTY`, `EMPTY`, `VANILLA_CODEC`

### Methods
- `public static Ingredient of(Ingredient... ingredients)`
  Gets an intersection ingredient
  - param: ingredients - List of ingredients to match
  - returns: Ingredient that only matches if all the passed ingredients match
- `public boolean test(@Nullable  @Nullable ItemStack stack)`
- `public ItemStack[] getItems()`
- `public boolean isEmpty()`
- `public boolean isSimple()`
- `protected void invalidate()`
- `public it.unimi.dsi.fastutil.ints.IntList getStackingIds()`
- `public IIngredientSerializer<IntersectionIngredient> serializer()`

### Inherited methods
- from `net.minecraftforge.common.crafting.ingredients.AbstractIngredient`: `fromNetwork`, `fromValues`, `of`, `of`, `of`, `of`, `of`
- from `net.minecraft.world.item.crafting.Ingredient`: `checkInvalidation`, `equals`, `invalidateAll`, `isVanilla`, `markValid`, `toJson`, `toNetwork`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## PartialNBTIngredient

*class* `net.minecraftforge.common.crafting.ingredients.PartialNBTIngredient`

Ingredient that matches the given items, performing a partial NBT match. Use StrictNBTIngredient if you want exact match on NBT

### Fields
- `private final List<Item> items`
- `private final CompoundTag nbt`
- `private final NbtPredicate predicate`
- `public static final com.mojang.serialization.Codec<PartialNBTIngredient> CODEC`
- `public static final IIngredientSerializer<PartialNBTIngredient> SERIALIZER`

### Inherited fields
- from `net.minecraft.world.item.crafting.Ingredient`: `CODEC_NONEMPTY`, `EMPTY`, `VANILLA_CODEC`

### Methods
- `public static PartialNBTIngredient.Builder builder()`
- `public static PartialNBTIngredient of(CompoundTag nbt,  ItemLike... items)`
  Creates a new ingredient matching any item from the list, containing the given NBT
- `public static PartialNBTIngredient of(ItemLike item,  CompoundTag nbt)`
  Creates a new ingredient matching the given item, containing the given NBT
- `public boolean test(@Nullable  @Nullable ItemStack input)`
- `public boolean isSimple()`
- `public IIngredientSerializer<? extends Ingredient> serializer()`

### Inherited methods
- from `net.minecraftforge.common.crafting.ingredients.AbstractIngredient`: `fromNetwork`, `fromValues`, `of`, `of`, `of`, `of`, `of`
- from `net.minecraft.world.item.crafting.Ingredient`: `checkInvalidation`, `equals`, `getItems`, `getStackingIds`, `invalidate`, `invalidateAll`, `isEmpty`, `isVanilla`, `markValid`, `toJson`, `toNetwork`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## PartialNBTIngredient.Builder

*class* `net.minecraftforge.common.crafting.ingredients.PartialNBTIngredient.Builder`

Enclosing class: PartialNBTIngredient

### Fields
- `private List<ItemLike> items`
- `private CompoundTag nbt`

### Methods
- `public PartialNBTIngredient.Builder nbt(CompoundTag value)`
- `public PartialNBTIngredient.Builder item(ItemLike item)`
- `public PartialNBTIngredient.Builder items(ItemLike... values)`
- `public PartialNBTIngredient build()`

## StrictNBTIngredient

*class* `net.minecraftforge.common.crafting.ingredients.StrictNBTIngredient`

Ingredient that matches the given stack, performing an exact NBT match. Use PartialNBTIngredient if you need partial match.

### Fields
- `private final ItemStack stack`
- `public static final com.mojang.serialization.Codec<StrictNBTIngredient> CODEC`
- `public static final IIngredientSerializer<StrictNBTIngredient> SERIALIZER`

### Inherited fields
- from `net.minecraft.world.item.crafting.Ingredient`: `CODEC_NONEMPTY`, `EMPTY`, `VANILLA_CODEC`

### Methods
- `public static StrictNBTIngredient of(ItemStack stack)`
- `public boolean test(@Nullable  @Nullable ItemStack input)`
- `public boolean isSimple()`
- `public IIngredientSerializer<? extends Ingredient> serializer()`

### Inherited methods
- from `net.minecraftforge.common.crafting.ingredients.AbstractIngredient`: `fromNetwork`, `fromValues`, `of`, `of`, `of`, `of`, `of`
- from `net.minecraft.world.item.crafting.Ingredient`: `checkInvalidation`, `equals`, `getItems`, `getStackingIds`, `invalidate`, `invalidateAll`, `isEmpty`, `isVanilla`, `markValid`, `toJson`, `toNetwork`
- from `java.util.function.Predicate`: `and`, `negate`, `or`
