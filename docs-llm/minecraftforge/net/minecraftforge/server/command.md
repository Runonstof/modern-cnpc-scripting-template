# net.minecraftforge.server.command

- [ChunkGenWorker](#chunkgenworker)
- [ConfigCommand](#configcommand)
- [ConfigCommand.ShowFile](#configcommand.showfile)
- [DimensionsCommand](#dimensionscommand)
- [EntityCommand](#entitycommand)
- [EntityCommand.EntityListCommand](#entitycommand.entitylistcommand)
- [EnumArgument.Info.Template](#enumargument.info.template)
- [EnumArgument.Info>](#enumargument.info)
- [EnumArgument>](#enumargument)
- [ForgeCommand](#forgecommand)
- [GenerateCommand](#generatecommand)
- [ModIdArgument](#modidargument)
- [ModListCommand](#modlistcommand)
- [TagsCommand](#tagscommand)
- [TextComponentHelper](#textcomponenthelper)
- [TPSCommand](#tpscommand)
- [TrackCommand](#trackcommand)
- [TrackCommand.ResetTrackingCommand](#trackcommand.resettrackingcommand)
- [TrackCommand.StartTrackingCommand](#trackcommand.starttrackingcommand)
- [TrackCommand.TrackResults](#trackcommand.trackresults)
- [TrackCommand.TrackResultsBlockEntity](#trackcommand.trackresultsblockentity)
- [TrackCommand.TrackResultsEntity](#trackcommand.trackresultsentity)
## ChunkGenWorker

*class* `net.minecraftforge.server.command.ChunkGenWorker`

### Fields
- `private final CommandSourceStack listener`
- `protected final BlockPos start`
- `protected final int total`
- `private final ServerLevel dim`
- `private final Queue<BlockPos> queue`
- `private final int notificationFrequency`
- `private int lastNotification`
- `private long lastNotifcationTime`
- `private int genned`
- `private Boolean keepingLoaded`

### Methods
- `protected Queue<BlockPos> buildQueue()`
- `public MutableComponent getStartMessage(CommandSourceStack sender)`
- `public boolean hasWork()`
- `public boolean doWork()`
  Description copied from interface: WorldWorkerManager.IWorker
  Perform a task, returning true from this will have the manager call this function again this tick if there is time left.
   Returning false will skip calling this worker until next tick.

## ConfigCommand

*class* `net.minecraftforge.server.command.ConfigCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> dispatcher)`

## ConfigCommand.ShowFile

*class* `net.minecraftforge.server.command.ConfigCommand.ShowFile`

Enclosing class: ConfigCommand

### Methods
- `static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> register()`
- `private static int showFile(com.mojang.brigadier.context.CommandContext<CommandSourceStack> context)`

## DimensionsCommand

*class* `net.minecraftforge.server.command.DimensionsCommand`

### Methods
- `static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> register()`

## EntityCommand

*class* `net.minecraftforge.server.command.EntityCommand`

### Methods
- `static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> register()`

## EntityCommand.EntityListCommand

*class* `net.minecraftforge.server.command.EntityCommand.EntityListCommand`

Enclosing class: EntityCommand

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType INVALID_FILTER`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType INVALID_DIMENSION`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType NO_ENTITIES`

### Methods
- `static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> register()`
- `private static int execute(CommandSourceStack sender,  String filter,  ResourceKey<Level> dim)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## EnumArgument.Info.Template

*class* `net.minecraftforge.server.command.EnumArgument.Info.Template`

Enclosing class: EnumArgument.Info<T extends Enum<T>>

### Fields
- `final Class<T extends Enum<T>> enumClass`

### Methods
- `public EnumArgument<T> instantiate(CommandBuildContext p_223435_)`
- `public ArgumentTypeInfo<EnumArgument<T>,?> type()`

## EnumArgument.Info>

*class* `net.minecraftforge.server.command.EnumArgument.Info>`

Enclosing class: EnumArgument<T extends Enum<T>>

### Methods
- `public void serializeToNetwork(EnumArgument.Info<T>.Template template,  FriendlyByteBuf buffer)`
- `public EnumArgument.Info<T>.Template deserializeFromNetwork(FriendlyByteBuf buffer)`
- `public void serializeToJson(EnumArgument.Info<T>.Template template,  com.google.gson.JsonObject json)`
- `public EnumArgument.Info<T>.Template unpack(EnumArgument<T> argument)`

## EnumArgument>

*class* `net.minecraftforge.server.command.EnumArgument>`

### Fields
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType INVALID_ENUM`
- `private final Class<T extends Enum<T>> enumClass`

### Methods
- `public static <R extends Enum<R>> EnumArgument<R> enumArgument(Class<R> enumClass)`
- `public T parse(com.mojang.brigadier.StringReader reader)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> context,  com.mojang.brigadier.suggestion.SuggestionsBuilder builder)`
- `public Collection<String> getExamples()`

## ForgeCommand

*class* `net.minecraftforge.server.command.ForgeCommand`

## GenerateCommand

*class* `net.minecraftforge.server.command.GenerateCommand`

### Methods
- `static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> register()`
- `private static int getInt(com.mojang.brigadier.context.CommandContext<CommandSourceStack> ctx,  String name)`
- `private static int execute(CommandSourceStack source,  BlockPos pos,  int count,  ServerLevel dim,  int interval)  throws CommandRuntimeException`
  - throws: CommandRuntimeException

## ModIdArgument

*class* `net.minecraftforge.server.command.ModIdArgument`

### Fields
- `private static final List<String> EXAMPLES`

### Methods
- `public static ModIdArgument modIdArgument()`
- `public String parse(com.mojang.brigadier.StringReader reader)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> context,  com.mojang.brigadier.suggestion.SuggestionsBuilder builder)`
- `public Collection<String> getExamples()`

## ModListCommand

*class* `net.minecraftforge.server.command.ModListCommand`

### Methods
- `static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> register()`

## TagsCommand

*class* `net.minecraftforge.server.command.TagsCommand`

The /forge tags command for listing a registry's tags, getting the elements of tags, and querying the tags of a
 registry object.

 Each command is paginated, showing 8L entries at a time. When there are more than 0 entries,
 the text indicating the amount of entries is highlighted and can be clicked to copy the list of all entries (across
 all pages) to the clipboard. (This is reflected by the use of green text in brackets, mimicking the clickable
 coordinates in the /locate command's message)

 The command has three subcommands:

 /forge tags &lt;registry> list [page] - Lists all available tags in the given registry.
 /forge tags &lt;registry> get &lt;tag> [page] - Gets all elements of the given tag in the given registry.
 /forge tags &lt;registry> query &lt;element> [page] - Queries for all tags in the given registry which
 contain the given registry object.

### Fields
- `private static final long PAGE_SIZE` (= 8L)
- `private static final ResourceKey<Registry<Registry<?>>> ROOT_REGISTRY_KEY`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType UNKNOWN_REGISTRY`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType UNKNOWN_TAG`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType UNKNOWN_ELEMENT`

### Methods
- `public static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> register()`
- `private static int listTags(com.mojang.brigadier.context.CommandContext<CommandSourceStack> ctx,  int page)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int listTagElements(com.mojang.brigadier.context.CommandContext<CommandSourceStack> ctx,  int page)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int queryElementTags(com.mojang.brigadier.context.CommandContext<CommandSourceStack> ctx,  int page)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static MutableComponent createMessage(MutableComponent header,  String containsText,  String copyHoverText,  long count,  long currentPage,  ChatFormatting elementColor,  Supplier<Stream<String>> names)`
- `private static CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestRegistries(com.mojang.brigadier.context.CommandContext<CommandSourceStack> ctx,  com.mojang.brigadier.suggestion.SuggestionsBuilder builder)`
- `private static com.mojang.brigadier.suggestion.SuggestionProvider<CommandSourceStack> suggestFromRegistry(Function<Registry<?>,Iterable<ResourceLocation>> namesFunction)`
- `private static <T> Optional<ResourceKey<T>> getResourceKey(com.mojang.brigadier.context.CommandContext<CommandSourceStack> ctx,  String name,  ResourceKey<Registry<T>> registryKey)`
- `private static <O> O cast(Object input)`

## TextComponentHelper

*class* `net.minecraftforge.server.command.TextComponentHelper`

### Methods
- `public static MutableComponent createComponentTranslation(CommandSource source,  String translation,  Object... args)`
  Detects when sending to a vanilla client and falls back to sending english,
   since they don't have the lang data necessary to translate on the client.
- `private static boolean isVanillaClient(CommandSource sender)`

## TPSCommand

*class* `net.minecraftforge.server.command.TPSCommand`

### Fields
- `private static final DecimalFormat TIME_FORMATTER`
- `private static final long[] UNLOADED`

### Methods
- `static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> register()`
- `private static int sendTime(CommandSourceStack cs,  ServerLevel dim)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static long mean(long[] values)`

## TrackCommand

*class* `net.minecraftforge.server.command.TrackCommand`

### Fields
- `private static final DecimalFormat TIME_FORMAT`

### Methods
- `static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> register()`

## TrackCommand.ResetTrackingCommand

*class* `net.minecraftforge.server.command.TrackCommand.ResetTrackingCommand`

Enclosing class: TrackCommand

### Methods
- `static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> register()`

## TrackCommand.StartTrackingCommand

*class* `net.minecraftforge.server.command.TrackCommand.StartTrackingCommand`

Enclosing class: TrackCommand

### Methods
- `static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> register()`

## TrackCommand.TrackResults

*class* `net.minecraftforge.server.command.TrackCommand.TrackResults`

Enclosing class: TrackCommand

### Methods
- `private static <T> List<ForgeTimings<T>> getSortedTimings(TimeTracker<T> tracker)`
  Returns the time objects recorded by the time tracker sorted by average time
  - returns: A list of time objects
- `private static <T> int execute(CommandSourceStack source,  TimeTracker<T> tracker,  Function<ForgeTimings<T>,Component> toString)  throws CommandRuntimeException`
  - throws: CommandRuntimeException

## TrackCommand.TrackResultsBlockEntity

*class* `net.minecraftforge.server.command.TrackCommand.TrackResultsBlockEntity`

Enclosing class: TrackCommand

### Methods
- `static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> register()`

## TrackCommand.TrackResultsEntity

*class* `net.minecraftforge.server.command.TrackCommand.TrackResultsEntity`

Enclosing class: TrackCommand

### Methods
- `static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> register()`
