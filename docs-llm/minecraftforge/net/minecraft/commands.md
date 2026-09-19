# net.minecraft.commands

- [BrigadierExceptions](#brigadierexceptions)
- [Class CommandBuildContext.MissingTagAccessPolicy](#class-commandbuildcontext.missingtagaccesspolicy)
- [Class Commands.CommandSelection](#class-commands.commandselection)
- [Class SharedSuggestionProvider.ElementSuggestionType](#class-sharedsuggestionprovider.elementsuggestiontype)
- [CommandBuildContext](#commandbuildcontext)
- [CommandBuildContext.Configurable](#commandbuildcontext.configurable)
- [CommandFunction](#commandfunction)
- [CommandFunction.CacheableFunction](#commandfunction.cacheablefunction)
- [CommandFunction.CommandEntry](#commandfunction.commandentry)
- [CommandFunction.CommandMacro](#commandfunction.commandmacro)
- [CommandFunction.Entry](#commandfunction.entry)
- [CommandFunction.FunctionEntry](#commandfunction.functionentry)
- [CommandFunction.MacroEntry](#commandfunction.macroentry)
- [CommandRuntimeException](#commandruntimeexception)
- [Commands](#commands)
- [Commands.ParseFunction](#commands.parsefunction)
- [CommandSigningContext](#commandsigningcontext)
- [CommandSigningContext.SignedArguments](#commandsigningcontext.signedarguments)
- [CommandSource](#commandsource)
- [CommandSourceStack](#commandsourcestack)
- [FunctionInstantiationException](#functioninstantiationexception)
- [SharedSuggestionProvider](#sharedsuggestionprovider)
- [SharedSuggestionProvider.TextCoordinates](#sharedsuggestionprovider.textcoordinates)
## BrigadierExceptions

*class* `net.minecraft.commands.BrigadierExceptions`

### Fields
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType DOUBLE_TOO_SMALL`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType DOUBLE_TOO_BIG`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType FLOAT_TOO_SMALL`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType FLOAT_TOO_BIG`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType INTEGER_TOO_SMALL`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType INTEGER_TOO_BIG`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType LONG_TOO_SMALL`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType LONG_TOO_BIG`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType LITERAL_INCORRECT`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType READER_EXPECTED_START_OF_QUOTE`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType READER_EXPECTED_END_OF_QUOTE`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType READER_INVALID_ESCAPE`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType READER_INVALID_BOOL`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType READER_INVALID_INT`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType READER_EXPECTED_INT`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType READER_INVALID_LONG`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType READER_EXPECTED_LONG`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType READER_INVALID_DOUBLE`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType READER_EXPECTED_DOUBLE`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType READER_INVALID_FLOAT`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType READER_EXPECTED_FLOAT`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType READER_EXPECTED_BOOL`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType READER_EXPECTED_SYMBOL`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType DISPATCHER_UNKNOWN_COMMAND`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType DISPATCHER_UNKNOWN_ARGUMENT`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType DISPATCHER_EXPECTED_ARGUMENT_SEPARATOR`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType DISPATCHER_PARSE_EXCEPTION`

### Methods
- `public com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType doubleTooLow()`
- `public com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType doubleTooHigh()`
- `public com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType floatTooLow()`
- `public com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType floatTooHigh()`
- `public com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType integerTooLow()`
- `public com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType integerTooHigh()`
- `public com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType longTooLow()`
- `public com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType longTooHigh()`
- `public com.mojang.brigadier.exceptions.DynamicCommandExceptionType literalIncorrect()`
- `public com.mojang.brigadier.exceptions.SimpleCommandExceptionType readerExpectedStartOfQuote()`
- `public com.mojang.brigadier.exceptions.SimpleCommandExceptionType readerExpectedEndOfQuote()`
- `public com.mojang.brigadier.exceptions.DynamicCommandExceptionType readerInvalidEscape()`
- `public com.mojang.brigadier.exceptions.DynamicCommandExceptionType readerInvalidBool()`
- `public com.mojang.brigadier.exceptions.DynamicCommandExceptionType readerInvalidInt()`
- `public com.mojang.brigadier.exceptions.SimpleCommandExceptionType readerExpectedInt()`
- `public com.mojang.brigadier.exceptions.DynamicCommandExceptionType readerInvalidLong()`
- `public com.mojang.brigadier.exceptions.SimpleCommandExceptionType readerExpectedLong()`
- `public com.mojang.brigadier.exceptions.DynamicCommandExceptionType readerInvalidDouble()`
- `public com.mojang.brigadier.exceptions.SimpleCommandExceptionType readerExpectedDouble()`
- `public com.mojang.brigadier.exceptions.DynamicCommandExceptionType readerInvalidFloat()`
- `public com.mojang.brigadier.exceptions.SimpleCommandExceptionType readerExpectedFloat()`
- `public com.mojang.brigadier.exceptions.SimpleCommandExceptionType readerExpectedBool()`
- `public com.mojang.brigadier.exceptions.DynamicCommandExceptionType readerExpectedSymbol()`
- `public com.mojang.brigadier.exceptions.SimpleCommandExceptionType dispatcherUnknownCommand()`
- `public com.mojang.brigadier.exceptions.SimpleCommandExceptionType dispatcherUnknownArgument()`
- `public com.mojang.brigadier.exceptions.SimpleCommandExceptionType dispatcherExpectedArgumentSeparator()`
- `public com.mojang.brigadier.exceptions.DynamicCommandExceptionType dispatcherParseException()`

## Class CommandBuildContext.MissingTagAccessPolicy

*enum* `net.minecraft.commands.Class CommandBuildContext.MissingTagAccessPolicy`

Enclosing interface: CommandBuildContext

### Methods
- `public static CommandBuildContext.MissingTagAccessPolicy[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static CommandBuildContext.MissingTagAccessPolicy valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Commands.CommandSelection

*enum* `net.minecraft.commands.Class Commands.CommandSelection`

Enclosing class: Commands

### Fields
- `final boolean includeIntegrated`
- `final boolean includeDedicated`

### Methods
- `public static Commands.CommandSelection[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Commands.CommandSelection valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class SharedSuggestionProvider.ElementSuggestionType

*enum* `net.minecraft.commands.Class SharedSuggestionProvider.ElementSuggestionType`

Enclosing interface: SharedSuggestionProvider

### Methods
- `public static SharedSuggestionProvider.ElementSuggestionType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SharedSuggestionProvider.ElementSuggestionType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public boolean shouldSuggestTags()`
- `public boolean shouldSuggestElements()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## CommandBuildContext

*interface* `net.minecraft.commands.CommandBuildContext`

### Methods
- `<T> HolderLookup<T> holderLookup(ResourceKey<? extends Registry<T>> p_227134_)`
- `static CommandBuildContext simple(HolderLookup.Provider p_255702_,  FeatureFlagSet p_255968_)`
- `static CommandBuildContext.Configurable configurable(RegistryAccess p_255925_,  FeatureFlagSet p_255945_)`

## CommandBuildContext.Configurable

*interface* `net.minecraft.commands.CommandBuildContext.Configurable`

All Superinterfaces: CommandBuildContext

Enclosing interface: CommandBuildContext

### Methods
- `void missingTagAccessPolicy(CommandBuildContext.MissingTagAccessPolicy p_256669_)`

### Inherited methods
- from `net.minecraft.commands.CommandBuildContext`: `holderLookup`

## CommandFunction

*class* `net.minecraft.commands.CommandFunction`

### Fields
- `private final CommandFunction.Entry[] entries`
- `final ResourceLocation id`

### Methods
- `public ResourceLocation getId()`
- `public CommandFunction.Entry[] getEntries()`
- `public CommandFunction instantiate(@Nullable  CompoundTag p_300636_,  com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_300698_,  CommandSourceStack p_298553_)  throws FunctionInstantiationException`
  - throws: FunctionInstantiationException
- `private static boolean shouldConcatenateNextLine(CharSequence p_298962_)`
- `public static CommandFunction fromLines(ResourceLocation p_77985_,  com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_77986_,  CommandSourceStack p_77987_,  List<String> p_77988_)`
- `public static CommandFunction.MacroEntry decomposeMacro(String p_301200_,  int p_300045_)`
- `private static boolean isValidVariableName(String p_299170_)`

## CommandFunction.CacheableFunction

*class* `net.minecraft.commands.CommandFunction.CacheableFunction`

Enclosing class: CommandFunction

### Fields
- `public static final CommandFunction.CacheableFunction NONE`
- `@Nullable private final ResourceLocation id`
- `private boolean resolved`
- `private Optional<CommandFunction> function`

### Methods
- `public Optional<CommandFunction> get(ServerFunctionManager p_78003_)`
- `@Nullable public ResourceLocation getId()`

## CommandFunction.CommandEntry

*class* `net.minecraft.commands.CommandFunction.CommandEntry`

Enclosing class: CommandFunction

### Fields
- `private final com.mojang.brigadier.ParseResults<CommandSourceStack> parse`

### Methods
- `public void execute(ServerFunctionManager p_164879_,  CommandSourceStack p_164880_,  Deque<ServerFunctionManager.QueuedCommand> p_164881_,  int p_164882_,  int p_164883_,  @Nullable  ServerFunctionManager.TraceCallbacks p_164884_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private int execute(ServerFunctionManager p_164876_,  CommandSourceStack p_164877_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public String toString()`

## CommandFunction.CommandMacro

*class* `net.minecraft.commands.CommandFunction.CommandMacro`

Enclosing class: CommandFunction

### Fields
- `private static final DecimalFormat DECIMAL_FORMAT`
- `private final List<String> parameters`
- `private static final int MAX_CACHE_ENTRIES` (= 8)
- `private final it.unimi.dsi.fastutil.objects.Object2ObjectLinkedOpenHashMap<List<String>,CommandFunction> cache`

### Inherited fields
- from `net.minecraft.commands.CommandFunction`: `id`

### Methods
- `public CommandFunction instantiate(@Nullable  CompoundTag p_300836_,  com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_297591_,  CommandSourceStack p_298828_)  throws FunctionInstantiationException`
  - throws: FunctionInstantiationException
- `private static String stringify(Tag p_298736_)`
- `private CommandFunction substituteAndParse(List<String> p_300530_,  com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_299533_,  CommandSourceStack p_301159_)  throws FunctionInstantiationException`
  - throws: FunctionInstantiationException

### Inherited methods
- from `net.minecraft.commands.CommandFunction`: `decomposeMacro`, `fromLines`, `getEntries`, `getId`

## CommandFunction.Entry

*interface* `net.minecraft.commands.CommandFunction.Entry`

Enclosing class: CommandFunction

### Methods
- `void execute(ServerFunctionManager p_164885_,  CommandSourceStack p_164886_,  Deque<ServerFunctionManager.QueuedCommand> p_164887_,  int p_164888_,  int p_164889_,  @Nullable  ServerFunctionManager.TraceCallbacks p_164890_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## CommandFunction.FunctionEntry

*class* `net.minecraft.commands.CommandFunction.FunctionEntry`

Enclosing class: CommandFunction

### Fields
- `private final CommandFunction.CacheableFunction function`

### Methods
- `public void execute(ServerFunctionManager p_164902_,  CommandSourceStack p_164903_,  Deque<ServerFunctionManager.QueuedCommand> p_164904_,  int p_164905_,  int p_164906_,  @Nullable  ServerFunctionManager.TraceCallbacks p_164907_)`
- `public String toString()`

## CommandFunction.MacroEntry

*class* `net.minecraft.commands.CommandFunction.MacroEntry`

Enclosing class: CommandFunction

### Fields
- `private final List<String> segments`
- `private final List<String> parameters`

### Methods
- `public List<String> parameters()`
- `public String substitute(List<String> p_300217_)`
- `public void execute(ServerFunctionManager p_299564_,  CommandSourceStack p_298428_,  Deque<ServerFunctionManager.QueuedCommand> p_299632_,  int p_298690_,  int p_299006_,  @Nullable  ServerFunctionManager.TraceCallbacks p_297793_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## CommandRuntimeException

*class* `net.minecraft.commands.CommandRuntimeException`

### Fields
- `private final Component message`

### Methods
- `public Component getComponent()`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## Commands

*class* `net.minecraft.commands.Commands`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final int LEVEL_ALL` (= 0)
- `public static final int LEVEL_MODERATORS` (= 1)
- `public static final int LEVEL_GAMEMASTERS` (= 2)
- `public static final int LEVEL_ADMINS` (= 3)
- `public static final int LEVEL_OWNERS` (= 4)
- `private final com.mojang.brigadier.CommandDispatcher<CommandSourceStack> dispatcher`

### Methods
- `public static <S> com.mojang.brigadier.ParseResults<S> mapSource(com.mojang.brigadier.ParseResults<S> p_242928_,  UnaryOperator<S> p_242890_)`
- `public int performPrefixedCommand(CommandSourceStack p_230958_,  String p_230959_)`
- `public int performCommand(com.mojang.brigadier.ParseResults<CommandSourceStack> p_242844_,  String p_242841_)`
- `public void sendCommands(ServerPlayer p_82096_)`
- `private void fillUsableCommands(com.mojang.brigadier.tree.CommandNode<CommandSourceStack> p_82113_,  com.mojang.brigadier.tree.CommandNode<SharedSuggestionProvider> p_82114_,  CommandSourceStack p_82115_,  Map<com.mojang.brigadier.tree.CommandNode<CommandSourceStack>,com.mojang.brigadier.tree.CommandNode<SharedSuggestionProvider>> p_82116_)`
- `public static com.mojang.brigadier.builder.LiteralArgumentBuilder<CommandSourceStack> literal(String p_82128_)`
- `public static <T> com.mojang.brigadier.builder.RequiredArgumentBuilder<CommandSourceStack,T> argument(String p_82130_,  com.mojang.brigadier.arguments.ArgumentType<T> p_82131_)`
- `public static Predicate<String> createValidator(Commands.ParseFunction p_82121_)`
- `public com.mojang.brigadier.CommandDispatcher<CommandSourceStack> getDispatcher()`
- `@Nullable public static <S> com.mojang.brigadier.exceptions.CommandSyntaxException getParseException(com.mojang.brigadier.ParseResults<S> p_82098_)`
- `public static CommandBuildContext createValidationContext(HolderLookup.Provider p_256243_)`
- `public static void validate()`

## Commands.ParseFunction

*interface* `net.minecraft.commands.Commands.ParseFunction`

Enclosing class: Commands

### Methods
- `void parse(com.mojang.brigadier.StringReader p_82161_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## CommandSigningContext

*interface* `net.minecraft.commands.CommandSigningContext`

### Fields
- `static final CommandSigningContext ANONYMOUS`

### Methods
- `@Nullable PlayerChatMessage getArgument(String p_230580_)`

## CommandSigningContext.SignedArguments

*record* `net.minecraft.commands.CommandSigningContext.SignedArguments`

Enclosing interface: CommandSigningContext

### Fields
- `private final Map<String,PlayerChatMessage> arguments`
  The field for the arguments record component.

### Inherited fields
- from `net.minecraft.commands.CommandSigningContext`: `ANONYMOUS`

### Methods
- `@Nullable public PlayerChatMessage getArgument(String p_242852_)`
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
- `public Map<String,PlayerChatMessage> arguments()`
  Returns the value of the arguments record component.
  - returns: the value of the arguments record component

## CommandSource

*interface* `net.minecraft.commands.CommandSource`

### Fields
- `static final CommandSource NULL`

### Methods
- `void sendSystemMessage(Component p_230797_)`
- `boolean acceptsSuccess()`
- `boolean acceptsFailure()`
- `boolean shouldInformAdmins()`
- `default boolean alwaysAccepts()`

## CommandSourceStack

*class* `net.minecraft.commands.CommandSourceStack`

### Fields
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_PLAYER`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_ENTITY`
- `public final CommandSource source`
- `private final Vec3 worldPosition`
- `private final ServerLevel level`
- `private final int permissionLevel`
- `private final String textName`
- `private final Component displayName`
- `private final MinecraftServer server`
- `private final boolean silent`
- `@Nullable private final Entity entity`
- `@Nullable private final com.mojang.brigadier.ResultConsumer<CommandSourceStack> consumer`
- `private final EntityAnchorArgument.Anchor anchor`
- `private final Vec2 rotation`
- `private final CommandSigningContext signingContext`
- `private final TaskChainer chatMessageChainer`
- `private final IntConsumer returnValueConsumer`

### Methods
- `public CommandSourceStack withSource(CommandSource p_165485_)`
- `public CommandSourceStack withEntity(Entity p_81330_)`
- `public CommandSourceStack withPosition(Vec3 p_81349_)`
- `public CommandSourceStack withRotation(Vec2 p_81347_)`
- `public CommandSourceStack withCallback(com.mojang.brigadier.ResultConsumer<CommandSourceStack> p_81335_)`
- `public CommandSourceStack withCallback(com.mojang.brigadier.ResultConsumer<CommandSourceStack> p_81337_,  BinaryOperator<com.mojang.brigadier.ResultConsumer<CommandSourceStack>> p_81338_)`
- `public CommandSourceStack withSuppressedOutput()`
- `public CommandSourceStack withPermission(int p_81326_)`
- `public CommandSourceStack withMaximumPermission(int p_81359_)`
- `public CommandSourceStack withAnchor(EntityAnchorArgument.Anchor p_81351_)`
- `public CommandSourceStack withLevel(ServerLevel p_81328_)`
- `public CommandSourceStack facing(Entity p_81332_,  EntityAnchorArgument.Anchor p_81333_)`
- `public CommandSourceStack facing(Vec3 p_81365_)`
- `public CommandSourceStack withSigningContext(CommandSigningContext p_230894_,  TaskChainer p_301144_)`
- `public CommandSourceStack withReturnValueConsumer(IntConsumer p_282875_)`
- `public Component getDisplayName()`
- `public String getTextName()`
- `public boolean hasPermission(int p_81370_)`
- `public Vec3 getPosition()`
- `public ServerLevel getLevel()`
- `@Nullable public Entity getEntity()`
- `public Entity getEntityOrException()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public ServerPlayer getPlayerOrException()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `@Nullable public ServerPlayer getPlayer()`
- `public boolean isPlayer()`
- `public Vec2 getRotation()`
- `public MinecraftServer getServer()`
- `public EntityAnchorArgument.Anchor getAnchor()`
- `public CommandSigningContext getSigningContext()`
- `public TaskChainer getChatMessageChainer()`
- `public IntConsumer getReturnValueConsumer()`
- `public boolean shouldFilterMessageTo(ServerPlayer p_243268_)`
- `public void sendChatMessage(OutgoingChatMessage p_251464_,  boolean p_252146_,  ChatType.Bound p_250406_)`
- `public void sendSystemMessage(Component p_243331_)`
- `public void sendSuccess(Supplier<Component> p_288979_,  boolean p_289007_)`
- `private void broadcastToAdmins(Component p_81367_)`
- `public void sendFailure(Component p_81353_)`
- `public void onCommandComplete(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_81343_,  boolean p_81344_,  int p_81345_)`
- `public Collection<String> getOnlinePlayerNames()`
- `public Collection<String> getAllTeams()`
- `public Stream<ResourceLocation> getAvailableSounds()`
- `public Stream<ResourceLocation> getRecipeNames()`
- `public CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> customSuggestion(com.mojang.brigadier.context.CommandContext<?> p_212324_)`
- `public CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestRegistryElements(ResourceKey<? extends Registry<?>> p_212330_,  SharedSuggestionProvider.ElementSuggestionType p_212331_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_212332_,  com.mojang.brigadier.context.CommandContext<?> p_212333_)`
- `public Set<ResourceKey<Level>> levels()`
- `public RegistryAccess registryAccess()`
- `public FeatureFlagSet enabledFeatures()`

### Inherited methods
- from `net.minecraftforge.common.extensions.IForgeCommandSourceStack`: `getAdvancement`, `getRecipeManager`, `getScoreboard`, `getUnsidedLevel`
- from `net.minecraft.commands.SharedSuggestionProvider`: `getAbsoluteCoordinates`, `getCustomTabSugggestions`, `getRelevantCoordinates`, `getSelectedEntities`, `suggestRegistryElements`

## FunctionInstantiationException

*class* `net.minecraft.commands.FunctionInstantiationException`

### Fields
- `private final Component messageComponent`

### Methods
- `public Component messageComponent()`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## SharedSuggestionProvider

*interface* `net.minecraft.commands.SharedSuggestionProvider`

### Methods
- `Collection<String> getOnlinePlayerNames()`
- `default Collection<String> getCustomTabSugggestions()`
- `default Collection<String> getSelectedEntities()`
- `Collection<String> getAllTeams()`
- `Stream<ResourceLocation> getAvailableSounds()`
- `Stream<ResourceLocation> getRecipeNames()`
- `CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> customSuggestion(com.mojang.brigadier.context.CommandContext<?> p_212334_)`
- `default Collection<SharedSuggestionProvider.TextCoordinates> getRelevantCoordinates()`
- `default Collection<SharedSuggestionProvider.TextCoordinates> getAbsoluteCoordinates()`
- `Set<ResourceKey<Level>> levels()`
- `RegistryAccess registryAccess()`
- `FeatureFlagSet enabledFeatures()`
- `default void suggestRegistryElements(Registry<?> p_212336_,  SharedSuggestionProvider.ElementSuggestionType p_212337_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_212338_)`
- `CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestRegistryElements(ResourceKey<? extends Registry<?>> p_212339_,  SharedSuggestionProvider.ElementSuggestionType p_212340_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_212341_,  com.mojang.brigadier.context.CommandContext<?> p_212342_)`
- `boolean hasPermission(int p_82986_)`
- `static <T> void filterResources(Iterable<T> p_82945_,  String p_82946_,  Function<T,ResourceLocation> p_82947_,  Consumer<T> p_82948_)`
- `static <T> void filterResources(Iterable<T> p_82939_,  String p_82940_,  String p_82941_,  Function<T,ResourceLocation> p_82942_,  Consumer<T> p_82943_)`
- `static CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestResource(Iterable<ResourceLocation> p_82930_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_82931_,  String p_82932_)`
- `static CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestResource(Stream<ResourceLocation> p_205107_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_205108_,  String p_205109_)`
- `static CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestResource(Iterable<ResourceLocation> p_82927_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_82928_)`
- `static <T> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestResource(Iterable<T> p_82934_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_82935_,  Function<T,ResourceLocation> p_82936_,  Function<T,com.mojang.brigadier.Message> p_82937_)`
- `static CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestResource(Stream<ResourceLocation> p_82958_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_82959_)`
- `static <T> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestResource(Stream<T> p_82961_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_82962_,  Function<T,ResourceLocation> p_82963_,  Function<T,com.mojang.brigadier.Message> p_82964_)`
- `static CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestCoordinates(String p_82953_,  Collection<SharedSuggestionProvider.TextCoordinates> p_82954_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_82955_,  Predicate<String> p_82956_)`
- `static CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggest2DCoordinates(String p_82977_,  Collection<SharedSuggestionProvider.TextCoordinates> p_82978_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_82979_,  Predicate<String> p_82980_)`
- `static CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggest(Iterable<String> p_82971_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_82972_)`
- `static CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggest(Stream<String> p_82982_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_82983_)`
- `static CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggest(String[] p_82968_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_82969_)`
- `static <T> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggest(Iterable<T> p_165917_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_165918_,  Function<T,String> p_165919_,  Function<T,com.mojang.brigadier.Message> p_165920_)`
- `static boolean matchesSubStr(String p_82950_,  String p_82951_)`

## SharedSuggestionProvider.TextCoordinates

*class* `net.minecraft.commands.SharedSuggestionProvider.TextCoordinates`

Enclosing interface: SharedSuggestionProvider

### Fields
- `public static final SharedSuggestionProvider.TextCoordinates DEFAULT_LOCAL`
- `public static final SharedSuggestionProvider.TextCoordinates DEFAULT_GLOBAL`
- `public final String x`
- `public final String y`
- `public final String z`
