# net.minecraft.commands.arguments.blocks

- [BlockInput](#blockinput)
- [BlockPredicateArgument](#blockpredicateargument)
- [BlockPredicateArgument.BlockPredicate](#blockpredicateargument.blockpredicate)
- [BlockPredicateArgument.Result](#blockpredicateargument.result)
- [BlockPredicateArgument.TagPredicate](#blockpredicateargument.tagpredicate)
- [BlockStateArgument](#blockstateargument)
- [BlockStateParser](#blockstateparser)
- [BlockStateParser.BlockResult](#blockstateparser.blockresult)
- [BlockStateParser.TagResult](#blockstateparser.tagresult)
## BlockInput

*class* `net.minecraft.commands.arguments.blocks.BlockInput`

### Fields
- `private final BlockState state`
- `private final Set<Property<?>> properties`
- `@Nullable private final CompoundTag tag`

### Methods
- `public BlockState getState()`
- `public Set<Property<?>> getDefinedProperties()`
- `public boolean test(BlockInWorld p_114675_)`
- `public boolean test(ServerLevel p_173524_,  BlockPos p_173525_)`
- `public boolean place(ServerLevel p_114671_,  BlockPos p_114672_,  int p_114673_)`

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## BlockPredicateArgument

*class* `net.minecraft.commands.arguments.blocks.BlockPredicateArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `private final HolderLookup<Block> blocks`

### Methods
- `public static BlockPredicateArgument blockPredicate(CommandBuildContext p_234628_)`
- `public BlockPredicateArgument.Result parse(com.mojang.brigadier.StringReader p_115572_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static BlockPredicateArgument.Result parse(HolderLookup<Block> p_234634_,  com.mojang.brigadier.StringReader p_234635_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Predicate<BlockInWorld> getBlockPredicate(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_115574_,  String p_115575_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_115587_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_115588_)`
- `public Collection<String> getExamples()`

## BlockPredicateArgument.BlockPredicate

*class* `net.minecraft.commands.arguments.blocks.BlockPredicateArgument.BlockPredicate`

Enclosing class: BlockPredicateArgument

### Fields
- `private final BlockState state`
- `private final Set<Property<?>> properties`
- `@Nullable private final CompoundTag nbt`

### Methods
- `public boolean test(BlockInWorld p_115599_)`
- `public boolean requiresNbt()`

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## BlockPredicateArgument.Result

*interface* `net.minecraft.commands.arguments.blocks.BlockPredicateArgument.Result`

All Superinterfaces: Predicate<BlockInWorld>

Enclosing class: BlockPredicateArgument

### Methods
- `boolean requiresNbt()`

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`, `test`

## BlockPredicateArgument.TagPredicate

*class* `net.minecraft.commands.arguments.blocks.BlockPredicateArgument.TagPredicate`

Enclosing class: BlockPredicateArgument

### Fields
- `private final HolderSet<Block> tag`
- `@Nullable private final CompoundTag nbt`
- `private final Map<String,String> vagueProperties`

### Methods
- `public boolean test(BlockInWorld p_115617_)`
- `public boolean requiresNbt()`

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## BlockStateArgument

*class* `net.minecraft.commands.arguments.blocks.BlockStateArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `private final HolderLookup<Block> blocks`

### Methods
- `public static BlockStateArgument block(CommandBuildContext p_234651_)`
- `public BlockInput parse(com.mojang.brigadier.StringReader p_116122_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static BlockInput getBlock(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_116124_,  String p_116125_)`
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_116128_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_116129_)`
- `public Collection<String> getExamples()`

## BlockStateParser

*class* `net.minecraft.commands.arguments.blocks.BlockStateParser`

### Fields
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NO_TAGS_ALLOWED`
- `public static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_UNKNOWN_BLOCK`
- `public static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_UNKNOWN_PROPERTY`
- `public static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_DUPLICATE_PROPERTY`
- `public static final com.mojang.brigadier.exceptions.Dynamic3CommandExceptionType ERROR_INVALID_VALUE`
- `public static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_EXPECTED_VALUE`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_EXPECTED_END_OF_PROPERTIES`
- `public static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_UNKNOWN_TAG`
- `private static final char SYNTAX_START_PROPERTIES` (= '[')
- `private static final char SYNTAX_START_NBT` (= '{')
- `private static final char SYNTAX_END_PROPERTIES` (= ']')
- `private static final char SYNTAX_EQUALS` (= '=')
- `private static final char SYNTAX_PROPERTY_SEPARATOR` (= ',')
- `private static final char SYNTAX_TAG` (= '#')
- `private static final Function<com.mojang.brigadier.suggestion.SuggestionsBuilder,CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>> SUGGEST_NOTHING`
- `private final HolderLookup<Block> blocks`
- `private final com.mojang.brigadier.StringReader reader`
- `private final boolean forTesting`
- `private final boolean allowNbt`
- `private final Map<Property<?>,Comparable<?>> properties`
- `private final Map<String,String> vagueProperties`
- `private ResourceLocation id`
- `@Nullable private StateDefinition<Block,BlockState> definition`
- `@Nullable private BlockState state`
- `@Nullable private CompoundTag nbt`
- `@Nullable private HolderSet<Block> tag`
- `private Function<com.mojang.brigadier.suggestion.SuggestionsBuilder,CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>> suggestions`

### Methods
- `public static BlockStateParser.BlockResult parseForBlock(HolderLookup<Block> p_251394_,  String p_248677_,  boolean p_250430_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static BlockStateParser.BlockResult parseForBlock(HolderLookup<Block> p_234692_,  com.mojang.brigadier.StringReader p_234693_,  boolean p_234694_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static com.mojang.datafixers.util.Either<BlockStateParser.BlockResult,BlockStateParser.TagResult> parseForTesting(HolderLookup<Block> p_252082_,  String p_251830_,  boolean p_249125_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static com.mojang.datafixers.util.Either<BlockStateParser.BlockResult,BlockStateParser.TagResult> parseForTesting(HolderLookup<Block> p_234717_,  com.mojang.brigadier.StringReader p_234718_,  boolean p_234719_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> fillSuggestions(HolderLookup<Block> p_234696_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_234697_,  boolean p_234698_,  boolean p_234699_)`
- `private void parse()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestPropertyNameOrEnd(com.mojang.brigadier.suggestion.SuggestionsBuilder p_234684_)`
- `private CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestVaguePropertyNameOrEnd(com.mojang.brigadier.suggestion.SuggestionsBuilder p_234715_)`
- `private CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestPropertyName(com.mojang.brigadier.suggestion.SuggestionsBuilder p_234729_)`
- `private CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestVaguePropertyName(com.mojang.brigadier.suggestion.SuggestionsBuilder p_234731_)`
- `private CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestOpenNbt(com.mojang.brigadier.suggestion.SuggestionsBuilder p_234733_)`
- `private boolean hasBlockEntity()`
- `private CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestEquals(com.mojang.brigadier.suggestion.SuggestionsBuilder p_234735_)`
- `private CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestNextPropertyOrEnd(com.mojang.brigadier.suggestion.SuggestionsBuilder p_234737_)`
- `private static <T extends Comparable<T>> com.mojang.brigadier.suggestion.SuggestionsBuilder addSuggestions(com.mojang.brigadier.suggestion.SuggestionsBuilder p_116787_,  Property<T> p_116788_)`
- `private CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestVaguePropertyValue(com.mojang.brigadier.suggestion.SuggestionsBuilder p_234686_,  String p_234687_)`
- `private CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestOpenVaguePropertiesOrNbt(com.mojang.brigadier.suggestion.SuggestionsBuilder p_234739_)`
- `private CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestOpenPropertiesOrNbt(com.mojang.brigadier.suggestion.SuggestionsBuilder p_234741_)`
- `private CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestTag(com.mojang.brigadier.suggestion.SuggestionsBuilder p_234743_)`
- `private CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestItem(com.mojang.brigadier.suggestion.SuggestionsBuilder p_234745_)`
- `private CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestBlockIdOrTag(com.mojang.brigadier.suggestion.SuggestionsBuilder p_234747_)`
- `private void readBlock()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private void readTag()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private void readProperties()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private void readVagueProperties()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private void readNbt()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private <T extends Comparable<T>> void setValue(Property<T> p_116776_,  String p_116777_,  int p_116778_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static String serialize(BlockState p_116770_)`
- `private static <T extends Comparable<T>> void appendProperty(StringBuilder p_116803_,  Property<T> p_116804_,  Comparable<?> p_116805_)`

## BlockStateParser.BlockResult

*record* `net.minecraft.commands.arguments.blocks.BlockStateParser.BlockResult`

Enclosing class: BlockStateParser

### Fields
- `private final BlockState blockState`
  The field for the blockState record component.
- `private final Map<Property<?>,Comparable<?>> properties`
  The field for the properties record component.
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
- `public BlockState blockState()`
  Returns the value of the blockState record component.
  - returns: the value of the blockState record component
- `public Map<Property<?>,Comparable<?>> properties()`
  Returns the value of the properties record component.
  - returns: the value of the properties record component
- `@Nullable public CompoundTag nbt()`
  Returns the value of the nbt record component.
  - returns: the value of the nbt record component

## BlockStateParser.TagResult

*record* `net.minecraft.commands.arguments.blocks.BlockStateParser.TagResult`

Enclosing class: BlockStateParser

### Fields
- `private final HolderSet<Block> tag`
  The field for the tag record component.
- `private final Map<String,String> vagueProperties`
  The field for the vagueProperties record component.
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
- `public HolderSet<Block> tag()`
  Returns the value of the tag record component.
  - returns: the value of the tag record component
- `public Map<String,String> vagueProperties()`
  Returns the value of the vagueProperties record component.
  - returns: the value of the vagueProperties record component
- `@Nullable public CompoundTag nbt()`
  Returns the value of the nbt record component.
  - returns: the value of the nbt record component
