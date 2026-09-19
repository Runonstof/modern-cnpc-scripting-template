# net.minecraft.commands.arguments

- [AngleArgument](#angleargument)
- [AngleArgument.SingleAngle](#angleargument.singleangle)
- [ArgumentSignatures](#argumentsignatures)
- [ArgumentSignatures.Entry](#argumentsignatures.entry)
- [ArgumentSignatures.Signer](#argumentsignatures.signer)
- [Class EntityAnchorArgument.Anchor](#class-entityanchorargument.anchor)
- [ColorArgument](#colorargument)
- [ComponentArgument](#componentargument)
- [CompoundTagArgument](#compoundtagargument)
- [DimensionArgument](#dimensionargument)
- [EntityAnchorArgument](#entityanchorargument)
- [EntityArgument](#entityargument)
- [EntityArgument.Info](#entityargument.info)
- [EntityArgument.Info.Template](#entityargument.info.template)
- [GameModeArgument](#gamemodeargument)
- [GameProfileArgument](#gameprofileargument)
- [GameProfileArgument.Result](#gameprofileargument.result)
- [GameProfileArgument.SelectorResult](#gameprofileargument.selectorresult)
- [HeightmapTypeArgument](#heightmaptypeargument)
- [MessageArgument](#messageargument)
- [MessageArgument.Message](#messageargument.message)
- [MessageArgument.Part](#messageargument.part)
- [NbtPathArgument](#nbtpathargument)
- [NbtPathArgument.AllElementsNode](#nbtpathargument.allelementsnode)
- [NbtPathArgument.CompoundChildNode](#nbtpathargument.compoundchildnode)
- [NbtPathArgument.IndexedElementNode](#nbtpathargument.indexedelementnode)
- [NbtPathArgument.MatchElementNode](#nbtpathargument.matchelementnode)
- [NbtPathArgument.MatchObjectNode](#nbtpathargument.matchobjectnode)
- [NbtPathArgument.MatchRootObjectNode](#nbtpathargument.matchrootobjectnode)
- [NbtPathArgument.NbtPath](#nbtpathargument.nbtpath)
- [NbtPathArgument.Node](#nbtpathargument.node)
- [NbtTagArgument](#nbttagargument)
- [ObjectiveArgument](#objectiveargument)
- [ObjectiveCriteriaArgument](#objectivecriteriaargument)
- [OperationArgument](#operationargument)
- [OperationArgument.Operation](#operationargument.operation)
- [OperationArgument.SimpleOperation](#operationargument.simpleoperation)
- [ParticleArgument](#particleargument)
- [RangeArgument.Floats](#rangeargument.floats)
- [RangeArgument.Ints](#rangeargument.ints)
- [RangeArgument>](#rangeargument)
- [ResourceArgument](#resourceargument)
- [ResourceArgument.Info](#resourceargument.info)
- [ResourceArgument.Info.Template](#resourceargument.info.template)
- [ResourceKeyArgument](#resourcekeyargument)
- [ResourceKeyArgument.Info](#resourcekeyargument.info)
- [ResourceKeyArgument.Info.Template](#resourcekeyargument.info.template)
- [ResourceLocationArgument](#resourcelocationargument)
- [ResourceOrTagArgument](#resourceortagargument)
- [ResourceOrTagArgument.Info](#resourceortagargument.info)
- [ResourceOrTagArgument.Info.Template](#resourceortagargument.info.template)
- [ResourceOrTagArgument.ResourceResult](#resourceortagargument.resourceresult)
- [ResourceOrTagArgument.Result](#resourceortagargument.result)
- [ResourceOrTagArgument.TagResult](#resourceortagargument.tagresult)
- [ResourceOrTagKeyArgument](#resourceortagkeyargument)
- [ResourceOrTagKeyArgument.Info](#resourceortagkeyargument.info)
- [ResourceOrTagKeyArgument.Info.Template](#resourceortagkeyargument.info.template)
- [ResourceOrTagKeyArgument.ResourceResult](#resourceortagkeyargument.resourceresult)
- [ResourceOrTagKeyArgument.Result](#resourceortagkeyargument.result)
- [ResourceOrTagKeyArgument.TagResult](#resourceortagkeyargument.tagresult)
- [ScoreboardSlotArgument](#scoreboardslotargument)
- [ScoreHolderArgument](#scoreholderargument)
- [ScoreHolderArgument.Info](#scoreholderargument.info)
- [ScoreHolderArgument.Info.Template](#scoreholderargument.info.template)
- [ScoreHolderArgument.Result](#scoreholderargument.result)
- [ScoreHolderArgument.SelectorResult](#scoreholderargument.selectorresult)
- [SignedArgument](#signedargument)
- [SlotArgument](#slotargument)
- [StringRepresentableArgument & StringRepresentable>](#stringrepresentableargument-stringrepresentable)
- [TeamArgument](#teamargument)
- [TemplateMirrorArgument](#templatemirrorargument)
- [TemplateRotationArgument](#templaterotationargument)
- [TimeArgument](#timeargument)
- [TimeArgument.Info](#timeargument.info)
- [TimeArgument.Info.Template](#timeargument.info.template)
- [UuidArgument](#uuidargument)
## AngleArgument

*class* `net.minecraft.commands.arguments.AngleArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_COMPLETE`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_INVALID_ANGLE`

### Methods
- `public static AngleArgument angle()`
- `public static float getAngle(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_83811_,  String p_83812_)`
- `public AngleArgument.SingleAngle parse(com.mojang.brigadier.StringReader p_83809_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public Collection<String> getExamples()`

### Inherited methods
- from `com.mojang.brigadier.arguments.ArgumentType`: `listSuggestions`

## AngleArgument.SingleAngle

*class* `net.minecraft.commands.arguments.AngleArgument.SingleAngle`

Enclosing class: AngleArgument

### Fields
- `private final float angle`
- `private final boolean isRelative`

### Methods
- `public float getAngle(CommandSourceStack p_83826_)`

## ArgumentSignatures

*record* `net.minecraft.commands.arguments.ArgumentSignatures`

### Fields
- `private final List<ArgumentSignatures.Entry> entries`
  The field for the entries record component.
- `public static final ArgumentSignatures EMPTY`
- `private static final int MAX_ARGUMENT_COUNT` (= 8)
- `private static final int MAX_ARGUMENT_NAME_LENGTH` (= 16)

### Methods
- `@Nullable public MessageSignature get(String p_241493_)`
- `public void write(FriendlyByteBuf p_231062_)`
- `public static ArgumentSignatures signCommand(SignableCommand<?> p_251621_,  ArgumentSignatures.Signer p_248653_)`
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
- `public List<ArgumentSignatures.Entry> entries()`
  Returns the value of the entries record component.
  - returns: the value of the entries record component

## ArgumentSignatures.Entry

*record* `net.minecraft.commands.arguments.ArgumentSignatures.Entry`

Enclosing class: ArgumentSignatures

### Fields
- `private final String name`
  The field for the name record component.
- `private final MessageSignature signature`
  The field for the signature record component.

### Methods
- `public void write(FriendlyByteBuf p_241403_)`
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
- `public String name()`
  Returns the value of the name record component.
  - returns: the value of the name record component
- `public MessageSignature signature()`
  Returns the value of the signature record component.
  - returns: the value of the signature record component

## ArgumentSignatures.Signer

*interface* `net.minecraft.commands.arguments.ArgumentSignatures.Signer`

Enclosing class: ArgumentSignatures

### Methods
- `@Nullable MessageSignature sign(String p_241389_)`

## Class EntityAnchorArgument.Anchor

*enum* `net.minecraft.commands.arguments.Class EntityAnchorArgument.Anchor`

Enclosing class: EntityAnchorArgument

### Fields
- `static final Map<String,EntityAnchorArgument.Anchor> BY_NAME`
- `private final String name`
- `private final BiFunction<Vec3,Entity,Vec3> transform`

### Methods
- `public static EntityAnchorArgument.Anchor[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static EntityAnchorArgument.Anchor valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `@Nullable public static EntityAnchorArgument.Anchor getByName(String p_90385_)`
- `public Vec3 apply(Entity p_90378_)`
- `public Vec3 apply(CommandSourceStack p_90380_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ColorArgument

*class* `net.minecraft.commands.arguments.ColorArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `public static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_INVALID_VALUE`

### Methods
- `public static ColorArgument color()`
- `public static ChatFormatting getColor(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_85467_,  String p_85468_)`
- `public ChatFormatting parse(com.mojang.brigadier.StringReader p_85465_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_85473_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_85474_)`
- `public Collection<String> getExamples()`

## ComponentArgument

*class* `net.minecraft.commands.arguments.ComponentArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `public static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_INVALID_JSON`

### Methods
- `public static Component getComponent(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_87118_,  String p_87119_)`
- `public static ComponentArgument textComponent()`
- `public Component parse(com.mojang.brigadier.StringReader p_87116_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public Collection<String> getExamples()`

### Inherited methods
- from `com.mojang.brigadier.arguments.ArgumentType`: `listSuggestions`

## CompoundTagArgument

*class* `net.minecraft.commands.arguments.CompoundTagArgument`

### Fields
- `private static final Collection<String> EXAMPLES`

### Methods
- `public static CompoundTagArgument compoundTag()`
- `public static <S> CompoundTag getCompoundTag(com.mojang.brigadier.context.CommandContext<S> p_87661_,  String p_87662_)`
- `public CompoundTag parse(com.mojang.brigadier.StringReader p_87659_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public Collection<String> getExamples()`

### Inherited methods
- from `com.mojang.brigadier.arguments.ArgumentType`: `listSuggestions`

## DimensionArgument

*class* `net.minecraft.commands.arguments.DimensionArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_INVALID_VALUE`

### Methods
- `public ResourceLocation parse(com.mojang.brigadier.StringReader p_88807_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_88817_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_88818_)`
- `public Collection<String> getExamples()`
- `public static DimensionArgument dimension()`
- `public static ServerLevel getDimension(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_88809_,  String p_88810_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## EntityAnchorArgument

*class* `net.minecraft.commands.arguments.EntityAnchorArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_INVALID`

### Methods
- `public static EntityAnchorArgument.Anchor getAnchor(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_90354_,  String p_90355_)`
- `public static EntityAnchorArgument anchor()`
- `public EntityAnchorArgument.Anchor parse(com.mojang.brigadier.StringReader p_90352_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_90360_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_90361_)`
- `public Collection<String> getExamples()`

## EntityArgument

*class* `net.minecraft.commands.arguments.EntityArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_SINGLE_ENTITY`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_SINGLE_PLAYER`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_ONLY_PLAYERS_ALLOWED`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType NO_ENTITIES_FOUND`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType NO_PLAYERS_FOUND`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_SELECTORS_NOT_ALLOWED`
- `final boolean single`
- `final boolean playersOnly`

### Methods
- `public static EntityArgument entity()`
- `public static Entity getEntity(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_91453_,  String p_91454_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static EntityArgument entities()`
- `public static Collection<? extends Entity> getEntities(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_91462_,  String p_91463_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Collection<? extends Entity> getOptionalEntities(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_91468_,  String p_91469_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Collection<ServerPlayer> getOptionalPlayers(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_91472_,  String p_91473_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static EntityArgument player()`
- `public static ServerPlayer getPlayer(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_91475_,  String p_91476_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static EntityArgument players()`
- `public static Collection<ServerPlayer> getPlayers(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_91478_,  String p_91479_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public EntitySelector parse(com.mojang.brigadier.StringReader p_91451_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_91482_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_91483_)`
- `public Collection<String> getExamples()`

## EntityArgument.Info

*class* `net.minecraft.commands.arguments.EntityArgument.Info`

Enclosing class: EntityArgument

### Fields
- `private static final byte FLAG_SINGLE` (= 0x1)
- `private static final byte FLAG_PLAYERS_ONLY` (= 0x2)

### Methods
- `public void serializeToNetwork(EntityArgument.Info.Template p_231271_,  FriendlyByteBuf p_231272_)`
- `public EntityArgument.Info.Template deserializeFromNetwork(FriendlyByteBuf p_231282_)`
- `public void serializeToJson(EntityArgument.Info.Template p_231268_,  com.google.gson.JsonObject p_231269_)`
- `public EntityArgument.Info.Template unpack(EntityArgument p_231274_)`

## EntityArgument.Info.Template

*class* `net.minecraft.commands.arguments.EntityArgument.Info.Template`

Enclosing class: EntityArgument.Info

### Fields
- `final boolean single`
- `final boolean playersOnly`

### Methods
- `public EntityArgument instantiate(CommandBuildContext p_231294_)`
- `public ArgumentTypeInfo<EntityArgument,?> type()`

## GameModeArgument

*class* `net.minecraft.commands.arguments.GameModeArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `private static final GameType[] VALUES`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_INVALID`

### Methods
- `public GameType parse(com.mojang.brigadier.StringReader p_260111_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_259767_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_259515_)`
- `public Collection<String> getExamples()`
- `public static GameModeArgument gameMode()`
- `public static GameType getGameMode(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_259927_,  String p_260246_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## GameProfileArgument

*class* `net.minecraft.commands.arguments.GameProfileArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_UNKNOWN_PLAYER`

### Methods
- `public static Collection<com.mojang.authlib.GameProfile> getGameProfiles(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_94591_,  String p_94592_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static GameProfileArgument gameProfile()`
- `public GameProfileArgument.Result parse(com.mojang.brigadier.StringReader p_94586_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_94598_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_94599_)`
- `public Collection<String> getExamples()`

## GameProfileArgument.Result

*interface* `net.minecraft.commands.arguments.GameProfileArgument.Result`

Enclosing class: GameProfileArgument

### Methods
- `Collection<com.mojang.authlib.GameProfile> getNames(CommandSourceStack p_94602_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## GameProfileArgument.SelectorResult

*class* `net.minecraft.commands.arguments.GameProfileArgument.SelectorResult`

Enclosing class: GameProfileArgument

### Fields
- `private final EntitySelector selector`

### Methods
- `public Collection<com.mojang.authlib.GameProfile> getNames(CommandSourceStack p_94607_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## HeightmapTypeArgument

*class* `net.minecraft.commands.arguments.HeightmapTypeArgument`

### Fields
- `private static final com.mojang.serialization.Codec<Heightmap.Types> LOWER_CASE_CODEC`

### Methods
- `private static Heightmap.Types[] keptTypes()`
- `public static HeightmapTypeArgument heightmap()`
- `public static Heightmap.Types getHeightmap(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_275445_,  String p_275449_)`
- `protected String convertId(String p_275666_)`

### Inherited methods
- from `net.minecraft.commands.arguments.StringRepresentableArgument`: `getExamples`, `listSuggestions`, `parse`

## MessageArgument

*class* `net.minecraft.commands.arguments.MessageArgument`

### Fields
- `private static final Collection<String> EXAMPLES`

### Methods
- `public static MessageArgument message()`
- `public static Component getMessage(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_96836_,  String p_96837_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static void resolveChatMessage(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_249433_,  String p_248718_,  Consumer<PlayerChatMessage> p_249460_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static void resolveSignedMessage(Consumer<PlayerChatMessage> p_250000_,  CommandSourceStack p_252335_,  PlayerChatMessage p_249420_)`
- `private static void resolveDisguisedMessage(Consumer<PlayerChatMessage> p_249162_,  CommandSourceStack p_248759_,  PlayerChatMessage p_252332_)`
- `private static CompletableFuture<FilteredText> filterPlainText(CommandSourceStack p_252063_,  PlayerChatMessage p_251184_)`
- `public MessageArgument.Message parse(com.mojang.brigadier.StringReader p_96834_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public Collection<String> getExamples()`

### Inherited methods
- from `com.mojang.brigadier.arguments.ArgumentType`: `listSuggestions`

## MessageArgument.Message

*class* `net.minecraft.commands.arguments.MessageArgument.Message`

Enclosing class: MessageArgument

### Fields
- `final String text`
- `private final MessageArgument.Part[] parts`

### Methods
- `public String getText()`
- `public MessageArgument.Part[] getParts()`
- `Component resolveComponent(CommandSourceStack p_232197_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public Component toComponent(CommandSourceStack p_96850_,  boolean p_96851_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static MessageArgument.Message parseText(com.mojang.brigadier.StringReader p_96847_,  boolean p_96848_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## MessageArgument.Part

*class* `net.minecraft.commands.arguments.MessageArgument.Part`

Enclosing class: MessageArgument

### Fields
- `private final int start`
- `private final int end`
- `private final EntitySelector selector`

### Methods
- `public int getStart()`
- `public int getEnd()`
- `public EntitySelector getSelector()`
- `@Nullable public Component toComponent(CommandSourceStack p_96861_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## NbtPathArgument

*class* `net.minecraft.commands.arguments.NbtPathArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_INVALID_NODE`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_DATA_TOO_DEEP`
- `public static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_NOTHING_FOUND`
- `static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_EXPECTED_LIST`
- `static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_INVALID_INDEX`
- `private static final char INDEX_MATCH_START` (= '[')
- `private static final char INDEX_MATCH_END` (= ']')
- `private static final char KEY_MATCH_START` (= '{')
- `private static final char KEY_MATCH_END` (= '}')
- `private static final char QUOTED_KEY_START` (= '\"')
- `private static final char SINGLE_QUOTED_KEY_START` (= '\'')

### Methods
- `public static NbtPathArgument nbtPath()`
- `public static NbtPathArgument.NbtPath getPath(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_99499_,  String p_99500_)`
- `public NbtPathArgument.NbtPath parse(com.mojang.brigadier.StringReader p_99491_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static NbtPathArgument.Node parseNode(com.mojang.brigadier.StringReader p_99496_,  boolean p_99497_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static NbtPathArgument.Node readObjectNode(com.mojang.brigadier.StringReader p_99493_,  String p_99494_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static String readUnquotedName(com.mojang.brigadier.StringReader p_99509_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public Collection<String> getExamples()`
- `private static boolean isAllowedInUnquotedName(char p_99489_)`
- `static Predicate<Tag> createTagPredicate(CompoundTag p_99511_)`

### Inherited methods
- from `com.mojang.brigadier.arguments.ArgumentType`: `listSuggestions`

## NbtPathArgument.AllElementsNode

*class* `net.minecraft.commands.arguments.NbtPathArgument.AllElementsNode`

Enclosing class: NbtPathArgument

### Fields
- `public static final NbtPathArgument.AllElementsNode INSTANCE`

### Methods
- `public void getTag(Tag p_99522_,  List<Tag> p_99523_)`
- `public void getOrCreateTag(Tag p_99528_,  Supplier<Tag> p_99529_,  List<Tag> p_99530_)`
- `public Tag createPreferredParentTag()`
- `public int setTag(Tag p_99525_,  Supplier<Tag> p_99526_)`
- `public int removeTag(Tag p_99520_)`

### Inherited methods
- from `net.minecraft.commands.arguments.NbtPathArgument.Node`: `collect`, `get`, `getOrCreate`

## NbtPathArgument.CompoundChildNode

*class* `net.minecraft.commands.arguments.NbtPathArgument.CompoundChildNode`

Enclosing class: NbtPathArgument

### Fields
- `private final String name`

### Methods
- `public void getTag(Tag p_99538_,  List<Tag> p_99539_)`
- `public void getOrCreateTag(Tag p_99544_,  Supplier<Tag> p_99545_,  List<Tag> p_99546_)`
- `public Tag createPreferredParentTag()`
- `public int setTag(Tag p_99541_,  Supplier<Tag> p_99542_)`
- `public int removeTag(Tag p_99536_)`

### Inherited methods
- from `net.minecraft.commands.arguments.NbtPathArgument.Node`: `collect`, `get`, `getOrCreate`

## NbtPathArgument.IndexedElementNode

*class* `net.minecraft.commands.arguments.NbtPathArgument.IndexedElementNode`

Enclosing class: NbtPathArgument

### Fields
- `private final int index`

### Methods
- `public void getTag(Tag p_99554_,  List<Tag> p_99555_)`
- `public void getOrCreateTag(Tag p_99560_,  Supplier<Tag> p_99561_,  List<Tag> p_99562_)`
- `public Tag createPreferredParentTag()`
- `public int setTag(Tag p_99557_,  Supplier<Tag> p_99558_)`
- `public int removeTag(Tag p_99552_)`

### Inherited methods
- from `net.minecraft.commands.arguments.NbtPathArgument.Node`: `collect`, `get`, `getOrCreate`

## NbtPathArgument.MatchElementNode

*class* `net.minecraft.commands.arguments.NbtPathArgument.MatchElementNode`

Enclosing class: NbtPathArgument

### Fields
- `private final CompoundTag pattern`
- `private final Predicate<Tag> predicate`

### Methods
- `public void getTag(Tag p_99575_,  List<Tag> p_99576_)`
- `public void getOrCreateTag(Tag p_99581_,  Supplier<Tag> p_99582_,  List<Tag> p_99583_)`
- `public Tag createPreferredParentTag()`
- `public int setTag(Tag p_99578_,  Supplier<Tag> p_99579_)`
- `public int removeTag(Tag p_99573_)`

### Inherited methods
- from `net.minecraft.commands.arguments.NbtPathArgument.Node`: `collect`, `get`, `getOrCreate`

## NbtPathArgument.MatchObjectNode

*class* `net.minecraft.commands.arguments.NbtPathArgument.MatchObjectNode`

Enclosing class: NbtPathArgument

### Fields
- `private final String name`
- `private final CompoundTag pattern`
- `private final Predicate<Tag> predicate`

### Methods
- `public void getTag(Tag p_99594_,  List<Tag> p_99595_)`
- `public void getOrCreateTag(Tag p_99600_,  Supplier<Tag> p_99601_,  List<Tag> p_99602_)`
- `public Tag createPreferredParentTag()`
- `public int setTag(Tag p_99597_,  Supplier<Tag> p_99598_)`
- `public int removeTag(Tag p_99592_)`

### Inherited methods
- from `net.minecraft.commands.arguments.NbtPathArgument.Node`: `collect`, `get`, `getOrCreate`

## NbtPathArgument.MatchRootObjectNode

*class* `net.minecraft.commands.arguments.NbtPathArgument.MatchRootObjectNode`

Enclosing class: NbtPathArgument

### Fields
- `private final Predicate<Tag> predicate`

### Methods
- `public void getTag(Tag p_99610_,  List<Tag> p_99611_)`
- `public void getOrCreateTag(Tag p_99616_,  Supplier<Tag> p_99617_,  List<Tag> p_99618_)`
- `public Tag createPreferredParentTag()`
- `public int setTag(Tag p_99613_,  Supplier<Tag> p_99614_)`
- `public int removeTag(Tag p_99608_)`

### Inherited methods
- from `net.minecraft.commands.arguments.NbtPathArgument.Node`: `collect`, `get`, `getOrCreate`

## NbtPathArgument.NbtPath

*class* `net.minecraft.commands.arguments.NbtPathArgument.NbtPath`

Enclosing class: NbtPathArgument

### Fields
- `private final String original`
- `private final it.unimi.dsi.fastutil.objects.Object2IntMap<NbtPathArgument.Node> nodeToOriginalPosition`
- `private final NbtPathArgument.Node[] nodes`

### Methods
- `public List<Tag> get(Tag p_99639_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public int countMatching(Tag p_99644_)`
- `private List<Tag> getOrCreateParents(Tag p_99651_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public List<Tag> getOrCreate(Tag p_99641_,  Supplier<Tag> p_99642_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int apply(List<Tag> p_99636_,  Function<Tag,Integer> p_99637_)`
- `public static boolean isTooDeep(Tag p_263392_,  int p_263386_)`
- `public int set(Tag p_169536_,  Tag p_169537_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private int estimatePathDepth()`
- `public int insert(int p_263397_,  CompoundTag p_263348_,  List<Tag> p_263419_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public int remove(Tag p_99649_)`
- `private com.mojang.brigadier.exceptions.CommandSyntaxException createNotFoundException(NbtPathArgument.Node p_99627_)`
- `public String toString()`

## NbtPathArgument.Node

*interface* `net.minecraft.commands.arguments.NbtPathArgument.Node`

Enclosing class: NbtPathArgument

### Methods
- `void getTag(Tag p_99666_,  List<Tag> p_99667_)`
- `void getOrCreateTag(Tag p_99670_,  Supplier<Tag> p_99671_,  List<Tag> p_99672_)`
- `Tag createPreferredParentTag()`
- `int setTag(Tag p_99668_,  Supplier<Tag> p_99669_)`
- `int removeTag(Tag p_99665_)`
- `default List<Tag> get(List<Tag> p_99654_)`
- `default List<Tag> getOrCreate(List<Tag> p_99659_,  Supplier<Tag> p_99660_)`
- `default List<Tag> collect(List<Tag> p_99656_,  BiConsumer<Tag,List<Tag>> p_99657_)`

## NbtTagArgument

*class* `net.minecraft.commands.arguments.NbtTagArgument`

### Fields
- `private static final Collection<String> EXAMPLES`

### Methods
- `public static NbtTagArgument nbtTag()`
- `public static <S> Tag getNbtTag(com.mojang.brigadier.context.CommandContext<S> p_100663_,  String p_100664_)`
- `public Tag parse(com.mojang.brigadier.StringReader p_100661_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public Collection<String> getExamples()`

### Inherited methods
- from `com.mojang.brigadier.arguments.ArgumentType`: `listSuggestions`

## ObjectiveArgument

*class* `net.minecraft.commands.arguments.ObjectiveArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_OBJECTIVE_NOT_FOUND`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_OBJECTIVE_READ_ONLY`

### Methods
- `public static ObjectiveArgument objective()`
- `public static Objective getObjective(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_101961_,  String p_101962_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Objective getWritableObjective(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_101966_,  String p_101967_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public String parse(com.mojang.brigadier.StringReader p_101959_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_101974_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_101975_)`
- `public Collection<String> getExamples()`

## ObjectiveCriteriaArgument

*class* `net.minecraft.commands.arguments.ObjectiveCriteriaArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `public static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_INVALID_VALUE`

### Methods
- `public static ObjectiveCriteriaArgument criteria()`
- `public static ObjectiveCriteria getCriteria(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_102566_,  String p_102567_)`
- `public ObjectiveCriteria parse(com.mojang.brigadier.StringReader p_102560_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_102572_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_102573_)`
- `public <T> String getName(StatType<T> p_102557_,  Object p_102558_)`
- `public Collection<String> getExamples()`

## OperationArgument

*class* `net.minecraft.commands.arguments.OperationArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_INVALID_OPERATION`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_DIVIDE_BY_ZERO`

### Methods
- `public static OperationArgument operation()`
- `public static OperationArgument.Operation getOperation(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_103276_,  String p_103277_)`
- `public OperationArgument.Operation parse(com.mojang.brigadier.StringReader p_103274_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_103302_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_103303_)`
- `public Collection<String> getExamples()`
- `private static OperationArgument.Operation getOperation(String p_103282_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static OperationArgument.SimpleOperation getSimpleOperation(String p_103287_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## OperationArgument.Operation

*interface* `net.minecraft.commands.arguments.OperationArgument.Operation`

Enclosing class: OperationArgument

### Methods
- `void apply(Score p_103306_,  Score p_103307_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## OperationArgument.SimpleOperation

*interface* `net.minecraft.commands.arguments.OperationArgument.SimpleOperation`

All Superinterfaces: OperationArgument.Operation

Enclosing class: OperationArgument

### Methods
- `int apply(int p_103309_,  int p_103310_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `default void apply(Score p_103312_,  Score p_103313_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## ParticleArgument

*class* `net.minecraft.commands.arguments.ParticleArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `public static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_UNKNOWN_PARTICLE`
- `private final HolderLookup<ParticleType<?>> particles`

### Methods
- `public static ParticleArgument particle(CommandBuildContext p_251304_)`
- `public static ParticleOptions getParticle(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_103938_,  String p_103939_)`
- `public ParticleOptions parse(com.mojang.brigadier.StringReader p_103933_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public Collection<String> getExamples()`
- `public static ParticleOptions readParticle(com.mojang.brigadier.StringReader p_249275_,  HolderLookup<ParticleType<?>> p_251929_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static ParticleType<?> readParticleType(com.mojang.brigadier.StringReader p_249621_,  HolderLookup<ParticleType<?>> p_248983_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static <T extends ParticleOptions> T readParticle(com.mojang.brigadier.StringReader p_103935_,  ParticleType<T> p_103936_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_103948_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_103949_)`

## RangeArgument.Floats

*class* `net.minecraft.commands.arguments.RangeArgument.Floats`

Enclosing interface: RangeArgument<T extends MinMaxBounds<?>>

### Fields
- `private static final Collection<String> EXAMPLES`

### Methods
- `public static MinMaxBounds.Doubles getRange(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_170805_,  String p_170806_)`
- `public MinMaxBounds.Doubles parse(com.mojang.brigadier.StringReader p_170803_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public Collection<String> getExamples()`

### Inherited methods
- from `com.mojang.brigadier.arguments.ArgumentType`: `listSuggestions`

## RangeArgument.Ints

*class* `net.minecraft.commands.arguments.RangeArgument.Ints`

Enclosing interface: RangeArgument<T extends MinMaxBounds<?>>

### Fields
- `private static final Collection<String> EXAMPLES`

### Methods
- `public static MinMaxBounds.Ints getRange(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_105420_,  String p_105421_)`
- `public MinMaxBounds.Ints parse(com.mojang.brigadier.StringReader p_105418_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public Collection<String> getExamples()`

### Inherited methods
- from `com.mojang.brigadier.arguments.ArgumentType`: `listSuggestions`

## RangeArgument>

*interface* `net.minecraft.commands.arguments.RangeArgument>`

All Superinterfaces: com.mojang.brigadier.arguments.ArgumentType<T>

### Methods
- `static RangeArgument.Ints intRange()`
- `static RangeArgument.Floats floatRange()`

### Inherited methods
- from `com.mojang.brigadier.arguments.ArgumentType`: `getExamples`, `listSuggestions`, `parse`

## ResourceArgument

*class* `net.minecraft.commands.arguments.ResourceArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_NOT_SUMMONABLE_ENTITY`
- `public static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_UNKNOWN_RESOURCE`
- `public static final com.mojang.brigadier.exceptions.Dynamic3CommandExceptionType ERROR_INVALID_RESOURCE_TYPE`
- `final ResourceKey<? extends Registry<T>> registryKey`
- `private final HolderLookup<T> registryLookup`

### Methods
- `public static <T> ResourceArgument<T> resource(CommandBuildContext p_249973_,  ResourceKey<? extends Registry<T>> p_251405_)`
- `public static <T> Holder.Reference<T> getResource(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_251788_,  String p_251996_,  ResourceKey<Registry<T>> p_250077_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Holder.Reference<Attribute> getAttribute(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_248753_,  String p_251157_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Holder.Reference<ConfiguredFeature<?,?>> getConfiguredFeature(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_250819_,  String p_252256_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Holder.Reference<Structure> getStructure(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_250288_,  String p_250856_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Holder.Reference<EntityType<?>> getEntityType(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_251258_,  String p_252322_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Holder.Reference<EntityType<?>> getSummonableEntityType(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_251880_,  String p_250243_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Holder.Reference<MobEffect> getMobEffect(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_250521_,  String p_249927_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Holder.Reference<Enchantment> getEnchantment(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_248656_,  String p_248713_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public Holder.Reference<T> parse(com.mojang.brigadier.StringReader p_250909_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_249391_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_251197_)`
- `public Collection<String> getExamples()`

## ResourceArgument.Info

*class* `net.minecraft.commands.arguments.ResourceArgument.Info`

Enclosing class: ResourceArgument<T>

### Methods
- `public void serializeToNetwork(ResourceArgument.Info<T>.Template p_250470_,  FriendlyByteBuf p_248658_)`
- `public ResourceArgument.Info<T>.Template deserializeFromNetwork(FriendlyByteBuf p_248958_)`
- `public void serializeToJson(ResourceArgument.Info<T>.Template p_251267_,  com.google.gson.JsonObject p_250142_)`
- `public ResourceArgument.Info<T>.Template unpack(ResourceArgument<T> p_250667_)`

## ResourceArgument.Info.Template

*class* `net.minecraft.commands.arguments.ResourceArgument.Info.Template`

Enclosing class: ResourceArgument.Info<T>

### Fields
- `final ResourceKey<? extends Registry<T>> registryKey`

### Methods
- `public ResourceArgument<T> instantiate(CommandBuildContext p_251900_)`
- `public ArgumentTypeInfo<ResourceArgument<T>,?> type()`

## ResourceKeyArgument

*class* `net.minecraft.commands.arguments.ResourceKeyArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_INVALID_FEATURE`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_INVALID_STRUCTURE`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_INVALID_TEMPLATE_POOL`
- `final ResourceKey<? extends Registry<T>> registryKey`

### Methods
- `public static <T> ResourceKeyArgument<T> key(ResourceKey<? extends Registry<T>> p_212387_)`
- `private static <T> ResourceKey<T> getRegistryKey(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_212374_,  String p_212375_,  ResourceKey<Registry<T>> p_212376_,  com.mojang.brigadier.exceptions.DynamicCommandExceptionType p_212377_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static <T> Registry<T> getRegistry(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_212379_,  ResourceKey<? extends Registry<T>> p_212380_)`
- `private static <T> Holder.Reference<T> resolveKey(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_248662_,  String p_252172_,  ResourceKey<Registry<T>> p_249701_,  com.mojang.brigadier.exceptions.DynamicCommandExceptionType p_249790_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Holder.Reference<ConfiguredFeature<?,?>> getConfiguredFeature(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_249310_,  String p_250729_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Holder.Reference<Structure> getStructure(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_248804_,  String p_251331_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Holder.Reference<StructureTemplatePool> getStructureTemplatePool(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_252203_,  String p_250407_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public ResourceKey<T> parse(com.mojang.brigadier.StringReader p_212369_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_212399_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_212400_)`
- `public Collection<String> getExamples()`

## ResourceKeyArgument.Info

*class* `net.minecraft.commands.arguments.ResourceKeyArgument.Info`

Enclosing class: ResourceKeyArgument<T>

### Methods
- `public void serializeToNetwork(ResourceKeyArgument.Info<T>.Template p_233278_,  FriendlyByteBuf p_233279_)`
- `public ResourceKeyArgument.Info<T>.Template deserializeFromNetwork(FriendlyByteBuf p_233289_)`
- `public void serializeToJson(ResourceKeyArgument.Info<T>.Template p_233275_,  com.google.gson.JsonObject p_233276_)`
- `public ResourceKeyArgument.Info<T>.Template unpack(ResourceKeyArgument<T> p_233281_)`

## ResourceKeyArgument.Info.Template

*class* `net.minecraft.commands.arguments.ResourceKeyArgument.Info.Template`

Enclosing class: ResourceKeyArgument.Info<T>

### Fields
- `final ResourceKey<? extends Registry<T>> registryKey`

### Methods
- `public ResourceKeyArgument<T> instantiate(CommandBuildContext p_233299_)`
- `public ArgumentTypeInfo<ResourceKeyArgument<T>,?> type()`

## ResourceLocationArgument

*class* `net.minecraft.commands.arguments.ResourceLocationArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_UNKNOWN_ADVANCEMENT`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_UNKNOWN_RECIPE`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_UNKNOWN_PREDICATE`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_UNKNOWN_ITEM_MODIFIER`

### Methods
- `public static ResourceLocationArgument id()`
- `public static AdvancementHolder getAdvancement(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_106988_,  String p_106989_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static RecipeHolder<?> getRecipe(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_106995_,  String p_106996_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static LootItemCondition getPredicate(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_107002_,  String p_107003_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static LootItemFunction getItemModifier(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_171032_,  String p_171033_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static ResourceLocation getId(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_107012_,  String p_107013_)`
- `public ResourceLocation parse(com.mojang.brigadier.StringReader p_106986_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public Collection<String> getExamples()`

### Inherited methods
- from `com.mojang.brigadier.arguments.ArgumentType`: `listSuggestions`

## ResourceOrTagArgument

*class* `net.minecraft.commands.arguments.ResourceOrTagArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_UNKNOWN_TAG`
- `private static final com.mojang.brigadier.exceptions.Dynamic3CommandExceptionType ERROR_INVALID_TAG_TYPE`
- `private final HolderLookup<T> registryLookup`
- `final ResourceKey<? extends Registry<T>> registryKey`

### Methods
- `public static <T> ResourceOrTagArgument<T> resourceOrTag(CommandBuildContext p_251101_,  ResourceKey<? extends Registry<T>> p_248888_)`
- `public static <T> ResourceOrTagArgument.Result<T> getResourceOrTag(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_249001_,  String p_251520_,  ResourceKey<Registry<T>> p_250370_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public ResourceOrTagArgument.Result<T> parse(com.mojang.brigadier.StringReader p_250860_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_250223_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_252354_)`
- `public Collection<String> getExamples()`

## ResourceOrTagArgument.Info

*class* `net.minecraft.commands.arguments.ResourceOrTagArgument.Info`

Enclosing class: ResourceOrTagArgument<T>

### Methods
- `public void serializeToNetwork(ResourceOrTagArgument.Info<T>.Template p_250419_,  FriendlyByteBuf p_249726_)`
- `public ResourceOrTagArgument.Info<T>.Template deserializeFromNetwork(FriendlyByteBuf p_250205_)`
- `public void serializeToJson(ResourceOrTagArgument.Info<T>.Template p_251957_,  com.google.gson.JsonObject p_249067_)`
- `public ResourceOrTagArgument.Info<T>.Template unpack(ResourceOrTagArgument<T> p_252206_)`

## ResourceOrTagArgument.Info.Template

*class* `net.minecraft.commands.arguments.ResourceOrTagArgument.Info.Template`

Enclosing class: ResourceOrTagArgument.Info<T>

### Fields
- `final ResourceKey<? extends Registry<T>> registryKey`

### Methods
- `public ResourceOrTagArgument<T> instantiate(CommandBuildContext p_251386_)`
- `public ArgumentTypeInfo<ResourceOrTagArgument<T>,?> type()`

## ResourceOrTagArgument.ResourceResult

*record* `net.minecraft.commands.arguments.ResourceOrTagArgument.ResourceResult`

Enclosing class: ResourceOrTagArgument<T>

### Fields
- `private final Holder.Reference<T> value`
  The field for the value record component.

### Methods
- `public com.mojang.datafixers.util.Either<Holder.Reference<T>,HolderSet.Named<T>> unwrap()`
- `public <E> Optional<ResourceOrTagArgument.Result<E>> cast(ResourceKey<? extends Registry<E>> p_250007_)`
- `public boolean test(Holder<T> p_249230_)`
- `public String asPrintable()`
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
- `public Holder.Reference<T> value()`
  Returns the value of the value record component.
  - returns: the value of the value record component

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## ResourceOrTagArgument.Result

*interface* `net.minecraft.commands.arguments.ResourceOrTagArgument.Result`

All Superinterfaces: Predicate<Holder<T>>

Enclosing class: ResourceOrTagArgument<T>

### Methods
- `com.mojang.datafixers.util.Either<Holder.Reference<T>,HolderSet.Named<T>> unwrap()`
- `<E> Optional<ResourceOrTagArgument.Result<E>> cast(ResourceKey<? extends Registry<E>> p_249572_)`
- `String asPrintable()`

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`, `test`

## ResourceOrTagArgument.TagResult

*record* `net.minecraft.commands.arguments.ResourceOrTagArgument.TagResult`

Enclosing class: ResourceOrTagArgument<T>

### Fields
- `private final HolderSet.Named<T> tag`
  The field for the tag record component.

### Methods
- `public com.mojang.datafixers.util.Either<Holder.Reference<T>,HolderSet.Named<T>> unwrap()`
- `public <E> Optional<ResourceOrTagArgument.Result<E>> cast(ResourceKey<? extends Registry<E>> p_250945_)`
- `public boolean test(Holder<T> p_252187_)`
- `public String asPrintable()`
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
- `public HolderSet.Named<T> tag()`
  Returns the value of the tag record component.
  - returns: the value of the tag record component

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## ResourceOrTagKeyArgument

*class* `net.minecraft.commands.arguments.ResourceOrTagKeyArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `final ResourceKey<? extends Registry<T>> registryKey`

### Methods
- `public static <T> ResourceOrTagKeyArgument<T> resourceOrTagKey(ResourceKey<? extends Registry<T>> p_249175_)`
- `public static <T> ResourceOrTagKeyArgument.Result<T> getResourceOrTagKey(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_252162_,  String p_248628_,  ResourceKey<Registry<T>> p_249008_,  com.mojang.brigadier.exceptions.DynamicCommandExceptionType p_251387_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public ResourceOrTagKeyArgument.Result<T> parse(com.mojang.brigadier.StringReader p_250307_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_251659_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_251141_)`
- `public Collection<String> getExamples()`

## ResourceOrTagKeyArgument.Info

*class* `net.minecraft.commands.arguments.ResourceOrTagKeyArgument.Info`

Enclosing class: ResourceOrTagKeyArgument<T>

### Methods
- `public void serializeToNetwork(ResourceOrTagKeyArgument.Info<T>.Template p_252211_,  FriendlyByteBuf p_248784_)`
- `public ResourceOrTagKeyArgument.Info<T>.Template deserializeFromNetwork(FriendlyByteBuf p_250656_)`
- `public void serializeToJson(ResourceOrTagKeyArgument.Info<T>.Template p_250715_,  com.google.gson.JsonObject p_249208_)`
- `public ResourceOrTagKeyArgument.Info<T>.Template unpack(ResourceOrTagKeyArgument<T> p_250422_)`

## ResourceOrTagKeyArgument.Info.Template

*class* `net.minecraft.commands.arguments.ResourceOrTagKeyArgument.Info.Template`

Enclosing class: ResourceOrTagKeyArgument.Info<T>

### Fields
- `final ResourceKey<? extends Registry<T>> registryKey`

### Methods
- `public ResourceOrTagKeyArgument<T> instantiate(CommandBuildContext p_251559_)`
- `public ArgumentTypeInfo<ResourceOrTagKeyArgument<T>,?> type()`

## ResourceOrTagKeyArgument.ResourceResult

*record* `net.minecraft.commands.arguments.ResourceOrTagKeyArgument.ResourceResult`

Enclosing class: ResourceOrTagKeyArgument<T>

### Fields
- `private final ResourceKey<T> key`
  The field for the key record component.

### Methods
- `public com.mojang.datafixers.util.Either<ResourceKey<T>,TagKey<T>> unwrap()`
- `public <E> Optional<ResourceOrTagKeyArgument.Result<E>> cast(ResourceKey<? extends Registry<E>> p_251369_)`
- `public boolean test(Holder<T> p_250257_)`
- `public String asPrintable()`
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
- `public ResourceKey<T> key()`
  Returns the value of the key record component.
  - returns: the value of the key record component

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## ResourceOrTagKeyArgument.Result

*interface* `net.minecraft.commands.arguments.ResourceOrTagKeyArgument.Result`

All Superinterfaces: Predicate<Holder<T>>

Enclosing class: ResourceOrTagKeyArgument<T>

### Methods
- `com.mojang.datafixers.util.Either<ResourceKey<T>,TagKey<T>> unwrap()`
- `<E> Optional<ResourceOrTagKeyArgument.Result<E>> cast(ResourceKey<? extends Registry<E>> p_251612_)`
- `String asPrintable()`

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`, `test`

## ResourceOrTagKeyArgument.TagResult

*record* `net.minecraft.commands.arguments.ResourceOrTagKeyArgument.TagResult`

Enclosing class: ResourceOrTagKeyArgument<T>

### Fields
- `private final TagKey<T> key`
  The field for the key record component.

### Methods
- `public com.mojang.datafixers.util.Either<ResourceKey<T>,TagKey<T>> unwrap()`
- `public <E> Optional<ResourceOrTagKeyArgument.Result<E>> cast(ResourceKey<? extends Registry<E>> p_251833_)`
- `public boolean test(Holder<T> p_252238_)`
- `public String asPrintable()`
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
- `public TagKey<T> key()`
  Returns the value of the key record component.
  - returns: the value of the key record component

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## ScoreboardSlotArgument

*class* `net.minecraft.commands.arguments.ScoreboardSlotArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `public static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_INVALID_VALUE`

### Methods
- `public static ScoreboardSlotArgument displaySlot()`
- `public static DisplaySlot getDisplaySlot(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_109200_,  String p_109201_)`
- `public DisplaySlot parse(com.mojang.brigadier.StringReader p_109198_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_109206_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_109207_)`
- `public Collection<String> getExamples()`

## ScoreHolderArgument

*class* `net.minecraft.commands.arguments.ScoreHolderArgument`

### Fields
- `public static final com.mojang.brigadier.suggestion.SuggestionProvider<CommandSourceStack> SUGGEST_SCORE_HOLDERS`
- `private static final Collection<String> EXAMPLES`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NO_RESULTS`
- `final boolean multiple`

### Methods
- `public static String getName(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_108224_,  String p_108225_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Collection<String> getNames(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_108244_,  String p_108245_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Collection<String> getNamesWithDefaultWildcard(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_108247_,  String p_108248_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Collection<String> getNames(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_108227_,  String p_108228_,  Supplier<Collection<String>> p_108229_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static ScoreHolderArgument scoreHolder()`
- `public static ScoreHolderArgument scoreHolders()`
- `public ScoreHolderArgument.Result parse(com.mojang.brigadier.StringReader p_108219_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public Collection<String> getExamples()`

### Inherited methods
- from `com.mojang.brigadier.arguments.ArgumentType`: `listSuggestions`

## ScoreHolderArgument.Info

*class* `net.minecraft.commands.arguments.ScoreHolderArgument.Info`

Enclosing class: ScoreHolderArgument

### Fields
- `private static final byte FLAG_MULTIPLE` (= 0x1)

### Methods
- `public void serializeToNetwork(ScoreHolderArgument.Info.Template p_233469_,  FriendlyByteBuf p_233470_)`
- `public ScoreHolderArgument.Info.Template deserializeFromNetwork(FriendlyByteBuf p_233480_)`
- `public void serializeToJson(ScoreHolderArgument.Info.Template p_233466_,  com.google.gson.JsonObject p_233467_)`
- `public ScoreHolderArgument.Info.Template unpack(ScoreHolderArgument p_233472_)`

## ScoreHolderArgument.Info.Template

*class* `net.minecraft.commands.arguments.ScoreHolderArgument.Info.Template`

Enclosing class: ScoreHolderArgument.Info

### Fields
- `final boolean multiple`

### Methods
- `public ScoreHolderArgument instantiate(CommandBuildContext p_233490_)`
- `public ArgumentTypeInfo<ScoreHolderArgument,?> type()`

## ScoreHolderArgument.Result

*interface* `net.minecraft.commands.arguments.ScoreHolderArgument.Result`

Enclosing class: ScoreHolderArgument

### Methods
- `Collection<String> getNames(CommandSourceStack p_108252_,  Supplier<Collection<String>> p_108253_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## ScoreHolderArgument.SelectorResult

*class* `net.minecraft.commands.arguments.ScoreHolderArgument.SelectorResult`

Enclosing class: ScoreHolderArgument

### Fields
- `private final EntitySelector selector`

### Methods
- `public Collection<String> getNames(CommandSourceStack p_108258_,  Supplier<Collection<String>> p_108259_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## SignedArgument

*interface* `net.minecraft.commands.arguments.SignedArgument`

All Superinterfaces: com.mojang.brigadier.arguments.ArgumentType<T>

### Inherited methods
- from `com.mojang.brigadier.arguments.ArgumentType`: `getExamples`, `listSuggestions`, `parse`

## SlotArgument

*class* `net.minecraft.commands.arguments.SlotArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_UNKNOWN_SLOT`
- `private static final Map<String,Integer> SLOTS`

### Methods
- `public static SlotArgument slot()`
- `public static int getSlot(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_111280_,  String p_111281_)`
- `public Integer parse(com.mojang.brigadier.StringReader p_111278_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_111288_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_111289_)`
- `public Collection<String> getExamples()`

## StringRepresentableArgument & StringRepresentable>

*class* `net.minecraft.commands.arguments.StringRepresentableArgument & StringRepresentable>`

### Fields
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_INVALID_VALUE`
- `private final com.mojang.serialization.Codec<T extends Enum<T> & StringRepresentable> codec`
- `private final Supplier<T extends Enum<T> & StringRepresentable[]> values`

### Methods
- `public T parse(com.mojang.brigadier.StringReader p_234063_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_234074_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_234075_)`
- `public Collection<String> getExamples()`
- `protected String convertId(String p_275436_)`

## TeamArgument

*class* `net.minecraft.commands.arguments.TeamArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_TEAM_NOT_FOUND`

### Methods
- `public static TeamArgument team()`
- `public static PlayerTeam getTeam(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_112092_,  String p_112093_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public String parse(com.mojang.brigadier.StringReader p_112090_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_112098_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_112099_)`
- `public Collection<String> getExamples()`

## TemplateMirrorArgument

*class* `net.minecraft.commands.arguments.TemplateMirrorArgument`

### Methods
- `public static StringRepresentableArgument<Mirror> templateMirror()`
- `public static Mirror getMirror(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_234345_,  String p_234346_)`

### Inherited methods
- from `net.minecraft.commands.arguments.StringRepresentableArgument`: `convertId`, `getExamples`, `listSuggestions`, `parse`

## TemplateRotationArgument

*class* `net.minecraft.commands.arguments.TemplateRotationArgument`

### Methods
- `public static TemplateRotationArgument templateRotation()`
- `public static Rotation getRotation(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_234416_,  String p_234417_)`

### Inherited methods
- from `net.minecraft.commands.arguments.StringRepresentableArgument`: `convertId`, `getExamples`, `listSuggestions`, `parse`

## TimeArgument

*class* `net.minecraft.commands.arguments.TimeArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_INVALID_UNIT`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_TICK_COUNT_TOO_LOW`
- `private static final it.unimi.dsi.fastutil.objects.Object2IntMap<String> UNITS`
- `final int minimum`

### Methods
- `public static TimeArgument time()`
- `public static TimeArgument time(int p_265722_)`
- `public Integer parse(com.mojang.brigadier.StringReader p_113039_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_113044_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_113045_)`
- `public Collection<String> getExamples()`

## TimeArgument.Info

*class* `net.minecraft.commands.arguments.TimeArgument.Info`

Enclosing class: TimeArgument

### Methods
- `public void serializeToNetwork(TimeArgument.Info.Template p_265434_,  FriendlyByteBuf p_265320_)`
- `public TimeArgument.Info.Template deserializeFromNetwork(FriendlyByteBuf p_265324_)`
- `public void serializeToJson(TimeArgument.Info.Template p_265110_,  com.google.gson.JsonObject p_265629_)`
- `public TimeArgument.Info.Template unpack(TimeArgument p_265544_)`

## TimeArgument.Info.Template

*class* `net.minecraft.commands.arguments.TimeArgument.Info.Template`

Enclosing class: TimeArgument.Info

### Fields
- `final int min`

### Methods
- `public TimeArgument instantiate(CommandBuildContext p_265466_)`
- `public ArgumentTypeInfo<TimeArgument,?> type()`

## UuidArgument

*class* `net.minecraft.commands.arguments.UuidArgument`

### Fields
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_INVALID_UUID`
- `private static final Collection<String> EXAMPLES`
- `private static final Pattern ALLOWED_CHARACTERS`

### Methods
- `public static UUID getUuid(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_113854_,  String p_113855_)`
- `public static UuidArgument uuid()`
- `public UUID parse(com.mojang.brigadier.StringReader p_113852_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public Collection<String> getExamples()`

### Inherited methods
- from `com.mojang.brigadier.arguments.ArgumentType`: `listSuggestions`
