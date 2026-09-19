# net.minecraft.commands.arguments.item

- [FunctionArgument](#functionargument)
- [FunctionArgument.Result](#functionargument.result)
- [ItemArgument](#itemargument)
- [ItemInput](#iteminput)
- [ItemParser](#itemparser)
- [ItemParser.ItemResult](#itemparser.itemresult)
- [ItemParser.TagResult](#itemparser.tagresult)
- [ItemPredicateArgument](#itempredicateargument)
- [ItemPredicateArgument.Result](#itempredicateargument.result)
## FunctionArgument

*class* `net.minecraft.commands.arguments.item.FunctionArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_UNKNOWN_TAG`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_UNKNOWN_FUNCTION`

### Methods
- `public static FunctionArgument functions()`
- `public FunctionArgument.Result parse(com.mojang.brigadier.StringReader p_120909_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `static CommandFunction getFunction(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_120929_,  ResourceLocation p_120930_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `static Collection<CommandFunction> getFunctionTag(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_235274_,  ResourceLocation p_235275_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Collection<CommandFunction> getFunctions(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_120911_,  String p_120912_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static com.mojang.datafixers.util.Pair<ResourceLocation,com.mojang.datafixers.util.Either<CommandFunction,Collection<CommandFunction>>> getFunctionOrTag(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_120921_,  String p_120922_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public Collection<String> getExamples()`

### Inherited methods
- from `com.mojang.brigadier.arguments.ArgumentType`: `listSuggestions`

## FunctionArgument.Result

*interface* `net.minecraft.commands.arguments.item.FunctionArgument.Result`

Enclosing class: FunctionArgument

### Methods
- `Collection<CommandFunction> create(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_120955_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `com.mojang.datafixers.util.Pair<ResourceLocation,com.mojang.datafixers.util.Either<CommandFunction,Collection<CommandFunction>>> unwrap(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_120956_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## ItemArgument

*class* `net.minecraft.commands.arguments.item.ItemArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `private final HolderLookup<Item> items`

### Methods
- `public static ItemArgument item(CommandBuildContext p_235280_)`
- `public ItemInput parse(com.mojang.brigadier.StringReader p_120962_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static <S> ItemInput getItem(com.mojang.brigadier.context.CommandContext<S> p_120964_,  String p_120965_)`
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_120968_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_120969_)`
- `public Collection<String> getExamples()`

## ItemInput

*class* `net.minecraft.commands.arguments.item.ItemInput`

### Fields
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_STACK_TOO_BIG`
- `private final Holder<Item> item`
- `@Nullable private final CompoundTag tag`

### Methods
- `public Item getItem()`
- `public boolean test(ItemStack p_120984_)`
- `public ItemStack createItemStack(int p_120981_,  boolean p_120982_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public String serialize()`
- `private String getItemName()`

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## ItemParser

*class* `net.minecraft.commands.arguments.item.ItemParser`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NO_TAGS_ALLOWED`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_UNKNOWN_ITEM`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_UNKNOWN_TAG`
- `private static final char SYNTAX_START_NBT` (= '{')
- `private static final char SYNTAX_TAG` (= '#')
- `private static final Function<com.mojang.brigadier.suggestion.SuggestionsBuilder,CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>> SUGGEST_NOTHING`
- `private final HolderLookup<Item> items`
- `private final com.mojang.brigadier.StringReader reader`
- `private final boolean allowTags`
- `private com.mojang.datafixers.util.Either<Holder<Item>,HolderSet<Item>> result`
- `@Nullable private CompoundTag nbt`
- `private Function<com.mojang.brigadier.suggestion.SuggestionsBuilder,CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>> suggestions`

### Methods
- `public static ItemParser.ItemResult parseForItem(HolderLookup<Item> p_235306_,  com.mojang.brigadier.StringReader p_235307_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static com.mojang.datafixers.util.Either<ItemParser.ItemResult,ItemParser.TagResult> parseForTesting(HolderLookup<Item> p_235320_,  com.mojang.brigadier.StringReader p_235321_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> fillSuggestions(HolderLookup<Item> p_235309_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_235310_,  boolean p_235311_)`
- `private void readItem()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private void readTag()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private void readNbt()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private void parse()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestOpenNbt(com.mojang.brigadier.suggestion.SuggestionsBuilder p_235298_)`
- `private CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestTag(com.mojang.brigadier.suggestion.SuggestionsBuilder p_235318_)`
- `private CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestItem(com.mojang.brigadier.suggestion.SuggestionsBuilder p_235323_)`
- `private CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestItemIdOrTag(com.mojang.brigadier.suggestion.SuggestionsBuilder p_235326_)`

## ItemParser.ItemResult

*record* `net.minecraft.commands.arguments.item.ItemParser.ItemResult`

Enclosing class: ItemParser

### Fields
- `private final Holder<Item> item`
  The field for the item record component.
- `@Nullable private final CompoundTag nbt`
  The field for the nbt record component.

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
- `public Holder<Item> item()`
  Returns the value of the item record component.
  - returns: the value of the item record component
- `@Nullable public CompoundTag nbt()`
  Returns the value of the nbt record component.
  - returns: the value of the nbt record component

## ItemParser.TagResult

*record* `net.minecraft.commands.arguments.item.ItemParser.TagResult`

Enclosing class: ItemParser

### Fields
- `private final HolderSet<Item> tag`
  The field for the tag record component.
- `@Nullable private final CompoundTag nbt`
  The field for the nbt record component.

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
- `public HolderSet<Item> tag()`
  Returns the value of the tag record component.
  - returns: the value of the tag record component
- `@Nullable public CompoundTag nbt()`
  Returns the value of the nbt record component.
  - returns: the value of the nbt record component

## ItemPredicateArgument

*class* `net.minecraft.commands.arguments.item.ItemPredicateArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `private final HolderLookup<Item> items`

### Methods
- `public static ItemPredicateArgument itemPredicate(CommandBuildContext p_235354_)`
- `public ItemPredicateArgument.Result parse(com.mojang.brigadier.StringReader p_121039_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Predicate<ItemStack> getItemPredicate(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_121041_,  String p_121042_)`
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_121054_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_121055_)`
- `public Collection<String> getExamples()`
- `private static ItemPredicateArgument.Result createResult(Predicate<Holder<Item>> p_235366_,  @Nullable  CompoundTag p_235367_)`

## ItemPredicateArgument.Result

*interface* `net.minecraft.commands.arguments.item.ItemPredicateArgument.Result`

All Superinterfaces: Predicate<ItemStack>

Enclosing class: ItemPredicateArgument

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`, `test`
