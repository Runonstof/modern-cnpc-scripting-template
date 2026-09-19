# net.minecraft.server.commands

- [AdvancementCommands](#advancementcommands)
- [AttributeCommand](#attributecommand)
- [BanIpCommands](#banipcommands)
- [BanListCommands](#banlistcommands)
- [BanPlayerCommands](#banplayercommands)
- [BossBarCommands](#bossbarcommands)
- [ChaseCommand](#chasecommand)
- [Class AdvancementCommands.Action](#class-advancementcommands.action)
- [Class AdvancementCommands.Mode](#class-advancementcommands.mode)
- [Class CloneCommands.Mode](#class-clonecommands.mode)
- [Class ExperienceCommand.Type](#class-experiencecommand.type)
- [Class FillCommand.Mode](#class-fillcommand.mode)
- [Class SetBlockCommand.Mode](#class-setblockcommand.mode)
- [ClearInventoryCommands](#clearinventorycommands)
- [CloneCommands](#clonecommands)
- [CloneCommands.CloneBlockInfo](#clonecommands.cloneblockinfo)
- [CloneCommands.CommandFunction](#clonecommands.commandfunction)
- [CloneCommands.DimensionAndPosition](#clonecommands.dimensionandposition)
- [DamageCommand](#damagecommand)
- [DataPackCommand](#datapackcommand)
- [DataPackCommand.Inserter](#datapackcommand.inserter)
- [DebugCommand](#debugcommand)
- [DebugCommand.Tracer](#debugcommand.tracer)
- [DebugConfigCommand](#debugconfigcommand)
- [DebugMobSpawningCommand](#debugmobspawningcommand)
- [DebugPathCommand](#debugpathcommand)
- [DefaultGameModeCommands](#defaultgamemodecommands)
- [DeOpCommands](#deopcommands)
- [DifficultyCommand](#difficultycommand)
- [EffectCommands](#effectcommands)
- [EmoteCommands](#emotecommands)
- [EnchantCommand](#enchantcommand)
- [ExecuteCommand](#executecommand)
- [ExecuteCommand.CommandNumericPredicate](#executecommand.commandnumericpredicate)
- [ExecuteCommand.CommandPredicate](#executecommand.commandpredicate)
- [ExperienceCommand](#experiencecommand)
- [FillBiomeCommand](#fillbiomecommand)
- [FillCommand](#fillcommand)
- [ForceLoadCommand](#forceloadcommand)
- [FunctionCommand](#functioncommand)
- [FunctionCommand.FunctionResult](#functioncommand.functionresult)
- [GameModeCommand](#gamemodecommand)
- [GameRuleCommand](#gamerulecommand)
- [GiveCommand](#givecommand)
- [HelpCommand](#helpcommand)
- [ItemCommands](#itemcommands)
- [JfrCommand](#jfrcommand)
- [KickCommand](#kickcommand)
- [KillCommand](#killcommand)
- [ListPlayersCommand](#listplayerscommand)
- [LocateCommand](#locatecommand)
- [LootCommand](#lootcommand)
- [LootCommand.Callback](#lootcommand.callback)
- [LootCommand.DropConsumer](#lootcommand.dropconsumer)
- [LootCommand.TailProvider](#lootcommand.tailprovider)
- [MsgCommand](#msgcommand)
- [OpCommand](#opcommand)
- [PardonCommand](#pardoncommand)
- [PardonIpCommand](#pardonipcommand)
- [ParticleCommand](#particlecommand)
- [PerfCommand](#perfcommand)
- [PlaceCommand](#placecommand)
- [PlaySoundCommand](#playsoundcommand)
- [PublishCommand](#publishcommand)
- [RaidCommand](#raidcommand)
- [RandomCommand](#randomcommand)
- [RecipeCommand](#recipecommand)
- [ReloadCommand](#reloadcommand)
- [ResetChunksCommand](#resetchunkscommand)
- [ReturnCommand](#returncommand)
- [RideCommand](#ridecommand)
- [SaveAllCommand](#saveallcommand)
- [SaveOffCommand](#saveoffcommand)
- [SaveOnCommand](#saveoncommand)
- [SayCommand](#saycommand)
- [ScheduleCommand](#schedulecommand)
- [ScoreboardCommand](#scoreboardcommand)
- [SeedCommand](#seedcommand)
- [SetBlockCommand](#setblockcommand)
- [SetBlockCommand.Filter](#setblockcommand.filter)
- [SetPlayerIdleTimeoutCommand](#setplayeridletimeoutcommand)
- [SetSpawnCommand](#setspawncommand)
- [SetWorldSpawnCommand](#setworldspawncommand)
- [SpawnArmorTrimsCommand](#spawnarmortrimscommand)
- [SpectateCommand](#spectatecommand)
- [SpreadPlayersCommand](#spreadplayerscommand)
- [SpreadPlayersCommand.Position](#spreadplayerscommand.position)
- [StopCommand](#stopcommand)
- [StopSoundCommand](#stopsoundcommand)
- [SummonCommand](#summoncommand)
- [TagCommand](#tagcommand)
- [TeamCommand](#teamcommand)
- [TeamMsgCommand](#teammsgcommand)
- [TeleportCommand](#teleportcommand)
- [TeleportCommand.LookAt](#teleportcommand.lookat)
- [TellRawCommand](#tellrawcommand)
- [TimeCommand](#timecommand)
- [TitleCommand](#titlecommand)
- [TriggerCommand](#triggercommand)
- [WardenSpawnTrackerCommand](#wardenspawntrackercommand)
- [WeatherCommand](#weathercommand)
- [WhitelistCommand](#whitelistcommand)
- [WorldBorderCommand](#worldbordercommand)
## AdvancementCommands

*class* `net.minecraft.server.commands.AdvancementCommands`

### Fields
- `private static final com.mojang.brigadier.suggestion.SuggestionProvider<CommandSourceStack> SUGGEST_ADVANCEMENTS`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_136311_)`
- `private static int perform(CommandSourceStack p_136320_,  Collection<ServerPlayer> p_136321_,  AdvancementCommands.Action p_136322_,  Collection<AdvancementHolder> p_136323_)`
- `private static int performCriterion(CommandSourceStack p_136325_,  Collection<ServerPlayer> p_136326_,  AdvancementCommands.Action p_136327_,  AdvancementHolder p_299259_,  String p_136329_)`
- `private static List<AdvancementHolder> getAdvancements(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_298043_,  AdvancementHolder p_300683_,  AdvancementCommands.Mode p_136335_)`
- `private static void addChildren(AdvancementNode p_300493_,  List<AdvancementHolder> p_136332_)`

## AttributeCommand

*class* `net.minecraft.server.commands.AttributeCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_NOT_LIVING_ENTITY`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_NO_SUCH_ATTRIBUTE`
- `private static final com.mojang.brigadier.exceptions.Dynamic3CommandExceptionType ERROR_NO_SUCH_MODIFIER`
- `private static final com.mojang.brigadier.exceptions.Dynamic3CommandExceptionType ERROR_MODIFIER_ALREADY_PRESENT`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_251026_,  CommandBuildContext p_250936_)`
- `private static AttributeInstance getAttributeInstance(Entity p_252177_,  Holder<Attribute> p_249942_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static LivingEntity getLivingEntity(Entity p_136440_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static LivingEntity getEntityWithAttribute(Entity p_252105_,  Holder<Attribute> p_248921_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int getAttributeValue(CommandSourceStack p_251776_,  Entity p_249647_,  Holder<Attribute> p_250986_,  double p_251395_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int getAttributeBase(CommandSourceStack p_248780_,  Entity p_251083_,  Holder<Attribute> p_250388_,  double p_250194_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int getAttributeModifier(CommandSourceStack p_136464_,  Entity p_136465_,  Holder<Attribute> p_250680_,  UUID p_136467_,  double p_136468_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setAttributeBase(CommandSourceStack p_248556_,  Entity p_248620_,  Holder<Attribute> p_249456_,  double p_252212_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int addModifier(CommandSourceStack p_136470_,  Entity p_136471_,  Holder<Attribute> p_251636_,  UUID p_136473_,  String p_136474_,  double p_136475_,  AttributeModifier.Operation p_136476_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int removeModifier(CommandSourceStack p_136459_,  Entity p_136460_,  Holder<Attribute> p_250830_,  UUID p_136462_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static Component getAttributeDescription(Holder<Attribute> p_250602_)`

## BanIpCommands

*class* `net.minecraft.server.commands.BanIpCommands`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_INVALID_IP`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_ALREADY_BANNED`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_136528_)`
- `private static int banIpOrName(CommandSourceStack p_136534_,  String p_136535_,  @Nullable  Component p_136536_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int banIp(CommandSourceStack p_136540_,  String p_136541_,  @Nullable  Component p_136542_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## BanListCommands

*class* `net.minecraft.server.commands.BanListCommands`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_136544_)`
- `private static int showList(CommandSourceStack p_136550_,  Collection<? extends BanListEntry<?>> p_136551_)`

## BanPlayerCommands

*class* `net.minecraft.server.commands.BanPlayerCommands`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_ALREADY_BANNED`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_136559_)`
- `private static int banPlayers(CommandSourceStack p_136565_,  Collection<com.mojang.authlib.GameProfile> p_136566_,  @Nullable  Component p_136567_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## BossBarCommands

*class* `net.minecraft.server.commands.BossBarCommands`

### Fields
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_ALREADY_EXISTS`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_DOESNT_EXIST`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NO_PLAYER_CHANGE`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NO_NAME_CHANGE`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NO_COLOR_CHANGE`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NO_STYLE_CHANGE`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NO_VALUE_CHANGE`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NO_MAX_CHANGE`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_ALREADY_HIDDEN`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_ALREADY_VISIBLE`
- `public static final com.mojang.brigadier.suggestion.SuggestionProvider<CommandSourceStack> SUGGEST_BOSS_BAR`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_136583_)`
- `private static int getValue(CommandSourceStack p_136596_,  CustomBossEvent p_136597_)`
- `private static int getMax(CommandSourceStack p_136629_,  CustomBossEvent p_136630_)`
- `private static int getVisible(CommandSourceStack p_136640_,  CustomBossEvent p_136641_)`
- `private static int getPlayers(CommandSourceStack p_136645_,  CustomBossEvent p_136646_)`
- `private static int setVisible(CommandSourceStack p_136619_,  CustomBossEvent p_136620_,  boolean p_136621_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setValue(CommandSourceStack p_136599_,  CustomBossEvent p_136600_,  int p_136601_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setMax(CommandSourceStack p_136632_,  CustomBossEvent p_136633_,  int p_136634_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setColor(CommandSourceStack p_136603_,  CustomBossEvent p_136604_,  BossEvent.BossBarColor p_136605_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setStyle(CommandSourceStack p_136607_,  CustomBossEvent p_136608_,  BossEvent.BossBarOverlay p_136609_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setName(CommandSourceStack p_136615_,  CustomBossEvent p_136616_,  Component p_136617_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setPlayers(CommandSourceStack p_136611_,  CustomBossEvent p_136612_,  Collection<ServerPlayer> p_136613_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int listBars(CommandSourceStack p_136590_)`
- `private static int createBar(CommandSourceStack p_136592_,  ResourceLocation p_136593_,  Component p_136594_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int removeBar(CommandSourceStack p_136650_,  CustomBossEvent p_136651_)`
- `public static CustomBossEvent getBossBar(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_136585_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## ChaseCommand

*class* `net.minecraft.server.commands.ChaseCommand`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final String DEFAULT_CONNECT_HOST` (= "localhost")
- `private static final String DEFAULT_BIND_ADDRESS` (= "0.0.0.0")
- `private static final int DEFAULT_PORT` (= 10000)
- `private static final int BROADCAST_INTERVAL_MS` (= 100)
- `public static com.google.common.collect.BiMap<String,ResourceKey<Level>> DIMENSION_NAMES`
- `@Nullable private static ChaseServer chaseServer`
- `@Nullable private static ChaseClient chaseClient`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_196078_)`
- `private static int stop(CommandSourceStack p_196082_)`
- `private static boolean alreadyRunning(CommandSourceStack p_196090_)`
- `private static int lead(CommandSourceStack p_196084_,  String p_196085_,  int p_196086_)`
- `private static int follow(CommandSourceStack p_196092_,  String p_196093_,  int p_196094_)`

## Class AdvancementCommands.Action

*enum* `net.minecraft.server.commands.Class AdvancementCommands.Action`

Enclosing class: AdvancementCommands

### Fields
- `private final String key`

### Methods
- `public static AdvancementCommands.Action[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static AdvancementCommands.Action valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int perform(ServerPlayer p_136380_,  Iterable<AdvancementHolder> p_136381_)`
- `protected abstract boolean perform(ServerPlayer p_136384_,  AdvancementHolder p_298402_)`
- `protected abstract boolean performCriterion(ServerPlayer p_136382_,  AdvancementHolder p_300251_,  String p_298964_)`
- `protected String getKey()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class AdvancementCommands.Mode

*enum* `net.minecraft.server.commands.Class AdvancementCommands.Mode`

Enclosing class: AdvancementCommands

### Fields
- `final boolean parents`
- `final boolean children`

### Methods
- `public static AdvancementCommands.Mode[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static AdvancementCommands.Mode valueOf(String name)`
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

## Class CloneCommands.Mode

*enum* `net.minecraft.server.commands.Class CloneCommands.Mode`

Enclosing class: CloneCommands

### Fields
- `private final boolean canOverlap`

### Methods
- `public static CloneCommands.Mode[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static CloneCommands.Mode valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public boolean canOverlap()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ExperienceCommand.Type

*enum* `net.minecraft.server.commands.Class ExperienceCommand.Type`

Enclosing class: ExperienceCommand

### Fields
- `public final BiConsumer<ServerPlayer,Integer> add`
- `public final BiPredicate<ServerPlayer,Integer> set`
- `public final String name`
- `final ToIntFunction<ServerPlayer> query`

### Methods
- `public static ExperienceCommand.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ExperienceCommand.Type valueOf(String name)`
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

## Class FillCommand.Mode

*enum* `net.minecraft.server.commands.Class FillCommand.Mode`

Enclosing class: FillCommand

### Fields
- `public final SetBlockCommand.Filter filter`

### Methods
- `public static FillCommand.Mode[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static FillCommand.Mode valueOf(String name)`
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

## Class SetBlockCommand.Mode

*enum* `net.minecraft.server.commands.Class SetBlockCommand.Mode`

Enclosing class: SetBlockCommand

### Methods
- `public static SetBlockCommand.Mode[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SetBlockCommand.Mode valueOf(String name)`
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

## ClearInventoryCommands

*class* `net.minecraft.server.commands.ClearInventoryCommands`

### Fields
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_SINGLE`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_MULTIPLE`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_214421_,  CommandBuildContext p_214422_)`
- `private static int clearInventory(CommandSourceStack p_136706_,  Collection<ServerPlayer> p_136707_,  Predicate<ItemStack> p_136708_,  int p_136709_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## CloneCommands

*class* `net.minecraft.server.commands.CloneCommands`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_OVERLAP`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_AREA_TOO_LARGE`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_FAILED`
- `public static final Predicate<BlockInWorld> FILTER_AIR`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_214424_,  CommandBuildContext p_214425_)`
- `private static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> beginEndDestinationAndModeSuffix(CommandBuildContext p_265681_,  CloneCommands.CommandFunction<com.mojang.brigadier.context.CommandContext<CommandSourceStack>,ServerLevel> p_265514_)`
- `private static CloneCommands.DimensionAndPosition getLoadedDimensionAndPosition(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_265513_,  ServerLevel p_265183_,  String p_265511_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> destinationAndModeSuffix(CommandBuildContext p_265238_,  CloneCommands.CommandFunction<com.mojang.brigadier.context.CommandContext<CommandSourceStack>,ServerLevel> p_265621_,  CloneCommands.CommandFunction<com.mojang.brigadier.context.CommandContext<CommandSourceStack>,ServerLevel> p_265296_)`
- `private static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> wrapWithCloneMode(CloneCommands.CommandFunction<com.mojang.brigadier.context.CommandContext<CommandSourceStack>,CloneCommands.DimensionAndPosition> p_265374_,  CloneCommands.CommandFunction<com.mojang.brigadier.context.CommandContext<CommandSourceStack>,CloneCommands.DimensionAndPosition> p_265134_,  CloneCommands.CommandFunction<com.mojang.brigadier.context.CommandContext<CommandSourceStack>,CloneCommands.DimensionAndPosition> p_265546_,  CloneCommands.CommandFunction<com.mojang.brigadier.context.CommandContext<CommandSourceStack>,Predicate<BlockInWorld>> p_265798_,  com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> p_265069_)`
- `private static int clone(CommandSourceStack p_265047_,  CloneCommands.DimensionAndPosition p_265232_,  CloneCommands.DimensionAndPosition p_265188_,  CloneCommands.DimensionAndPosition p_265594_,  Predicate<BlockInWorld> p_265585_,  CloneCommands.Mode p_265530_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## CloneCommands.CloneBlockInfo

*class* `net.minecraft.server.commands.CloneCommands.CloneBlockInfo`

Enclosing class: CloneCommands

### Fields
- `public final BlockPos pos`
- `public final BlockState state`
- `@Nullable public final CompoundTag tag`

## CloneCommands.CommandFunction

*interface* `net.minecraft.server.commands.CloneCommands.CommandFunction`

Enclosing class: CloneCommands

### Methods
- `R apply(T p_265571_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## CloneCommands.DimensionAndPosition

*record* `net.minecraft.server.commands.CloneCommands.DimensionAndPosition`

Enclosing class: CloneCommands

### Fields
- `private final ServerLevel dimension`
  The field for the dimension record component.
- `private final BlockPos position`
  The field for the position record component.

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
- `public ServerLevel dimension()`
  Returns the value of the dimension record component.
  - returns: the value of the dimension record component
- `public BlockPos position()`
  Returns the value of the position record component.
  - returns: the value of the position record component

## DamageCommand

*class* `net.minecraft.server.commands.DamageCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_INVULNERABLE`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_270226_,  CommandBuildContext p_270136_)`
- `private static int damage(CommandSourceStack p_270409_,  Entity p_270496_,  float p_270836_,  DamageSource p_270727_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## DataPackCommand

*class* `net.minecraft.server.commands.DataPackCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_UNKNOWN_PACK`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_PACK_ALREADY_ENABLED`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_PACK_ALREADY_DISABLED`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_PACK_FEATURES_NOT_ENABLED`
- `private static final com.mojang.brigadier.suggestion.SuggestionProvider<CommandSourceStack> SELECTED_PACKS`
- `private static final com.mojang.brigadier.suggestion.SuggestionProvider<CommandSourceStack> UNSELECTED_PACKS`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_136809_)`
- `private static int enablePack(CommandSourceStack p_136829_,  Pack p_136830_,  DataPackCommand.Inserter p_136831_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int disablePack(CommandSourceStack p_136826_,  Pack p_136827_)`
- `private static int listPacks(CommandSourceStack p_136824_)`
- `private static int listAvailablePacks(CommandSourceStack p_136855_)`
- `private static int listEnabledPacks(CommandSourceStack p_136866_)`
- `private static Pack getPack(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_136816_,  String p_136817_,  boolean p_136818_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## DataPackCommand.Inserter

*interface* `net.minecraft.server.commands.DataPackCommand.Inserter`

Enclosing class: DataPackCommand

### Methods
- `void apply(List<Pack> p_136884_,  Pack p_136885_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## DebugCommand

*class* `net.minecraft.server.commands.DebugCommand`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_RUNNING`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_ALREADY_RUNNING`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_136906_)`
- `private static int start(CommandSourceStack p_136910_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int stop(CommandSourceStack p_136916_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int traceFunction(CommandSourceStack p_180066_,  Collection<CommandFunction> p_180067_)`

## DebugCommand.Tracer

*class* `net.minecraft.server.commands.DebugCommand.Tracer`

Enclosing class: DebugCommand

### Fields
- `public static final int INDENT_OFFSET` (= 1)
- `private final PrintWriter output`
- `private int lastIndent`
- `private boolean waitingForResult`

### Inherited fields
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `private void indentAndSave(int p_180082_)`
- `private void printIndent(int p_180098_)`
- `private void newLine()`
- `public void onCommand(int p_180084_,  String p_180085_)`
- `public void onReturn(int p_180087_,  String p_180088_,  int p_180089_)`
- `public void onCall(int p_180091_,  ResourceLocation p_180092_,  int p_180093_)`
- `public void onError(int p_180100_,  String p_180101_)`
- `public void sendSystemMessage(Component p_214427_)`
- `public boolean acceptsSuccess()`
- `public boolean acceptsFailure()`
- `public boolean shouldInformAdmins()`
- `public boolean alwaysAccepts()`

## DebugConfigCommand

*class* `net.minecraft.server.commands.DebugConfigCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_299014_)`
- `private static Iterable<String> getUuidsInConfig(MinecraftServer p_299245_)`
- `private static int config(CommandSourceStack p_297745_,  ServerPlayer p_300074_)`
- `private static int unconfig(CommandSourceStack p_300627_,  UUID p_299392_)`

## DebugMobSpawningCommand

*class* `net.minecraft.server.commands.DebugMobSpawningCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_180111_)`
- `private static int spawnMobs(CommandSourceStack p_180115_,  MobCategory p_180116_,  BlockPos p_180117_)`

## DebugPathCommand

*class* `net.minecraft.server.commands.DebugPathCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_MOB`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NO_PATH`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_COMPLETE`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_180124_)`
- `private static int fillBlocks(CommandSourceStack p_180130_,  BlockPos p_180131_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## DefaultGameModeCommands

*class* `net.minecraft.server.commands.DefaultGameModeCommands`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_136927_)`
- `private static int setMode(CommandSourceStack p_136931_,  GameType p_136932_)`

## DeOpCommands

*class* `net.minecraft.server.commands.DeOpCommands`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_OP`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_136889_)`
- `private static int deopPlayers(CommandSourceStack p_136898_,  Collection<com.mojang.authlib.GameProfile> p_136899_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## DifficultyCommand

*class* `net.minecraft.server.commands.DifficultyCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_ALREADY_DIFFICULT`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_136939_)`
- `public static int setDifficulty(CommandSourceStack p_136945_,  Difficulty p_136946_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## EffectCommands

*class* `net.minecraft.server.commands.EffectCommands`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_GIVE_FAILED`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_CLEAR_EVERYTHING_FAILED`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_CLEAR_SPECIFIC_FAILED`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_136954_,  CommandBuildContext p_251610_)`
- `private static int giveEffect(CommandSourceStack p_250553_,  Collection<? extends Entity> p_250411_,  Holder<MobEffect> p_249495_,  @Nullable  Integer p_249652_,  int p_251498_,  boolean p_249944_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int clearEffects(CommandSourceStack p_136960_,  Collection<? extends Entity> p_136961_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int clearEffect(CommandSourceStack p_250069_,  Collection<? extends Entity> p_248561_,  Holder<MobEffect> p_249198_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## EmoteCommands

*class* `net.minecraft.server.commands.EmoteCommands`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_136986_)`

## EnchantCommand

*class* `net.minecraft.server.commands.EnchantCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_NOT_LIVING_ENTITY`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_NO_ITEM`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_INCOMPATIBLE`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_LEVEL_TOO_HIGH`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOTHING_HAPPENED`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_251241_,  CommandBuildContext p_251038_)`
- `private static int enchant(CommandSourceStack p_249815_,  Collection<? extends Entity> p_248848_,  Holder<Enchantment> p_251252_,  int p_249941_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## ExecuteCommand

*class* `net.minecraft.server.commands.ExecuteCommand`

### Fields
- `private static final int MAX_TEST_AREA` (= 32768)
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_AREA_TOO_LARGE`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_CONDITIONAL_FAILED`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_CONDITIONAL_FAILED_COUNT`
- `private static final BinaryOperator<com.mojang.brigadier.ResultConsumer<CommandSourceStack>> CALLBACK_CHAINER`
- `private static final com.mojang.brigadier.suggestion.SuggestionProvider<CommandSourceStack> SUGGEST_PREDICATE`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_214435_,  CommandBuildContext p_214436_)`
- `private static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> wrapStores(com.mojang.brigadier.tree.LiteralCommandNode<CommandSourceStack> p_137094_,  com.mojang.brigadier.builder.LiteralArgumentBuilder<CommandSourceStack> p_137095_,  boolean p_137096_)`
- `private static CommandSourceStack storeValue(CommandSourceStack p_137108_,  Collection<String> p_137109_,  Objective p_137110_,  boolean p_137111_)`
- `private static CommandSourceStack storeValue(CommandSourceStack p_137113_,  CustomBossEvent p_137114_,  boolean p_137115_,  boolean p_137116_)`
- `private static CommandSourceStack storeData(CommandSourceStack p_137118_,  DataAccessor p_137119_,  NbtPathArgument.NbtPath p_137120_,  IntFunction<Tag> p_137121_,  boolean p_137122_)`
- `private static boolean isChunkLoaded(ServerLevel p_265261_,  BlockPos p_265260_)`
- `private static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> addConditionals(com.mojang.brigadier.tree.CommandNode<CommandSourceStack> p_214438_,  com.mojang.brigadier.builder.LiteralArgumentBuilder<CommandSourceStack> p_214439_,  boolean p_214440_,  CommandBuildContext p_214441_)`
- `private static com.mojang.brigadier.Command<CommandSourceStack> createNumericConditionalHandler(boolean p_137167_,  ExecuteCommand.CommandNumericPredicate p_137168_)`
- `private static int checkMatchingData(DataAccessor p_137146_,  NbtPathArgument.NbtPath p_137147_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static boolean checkScore(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_137065_,  BiPredicate<Integer,Integer> p_137066_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static boolean checkScore(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_137059_,  MinMaxBounds.Ints p_137060_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static boolean checkCustomPredicate(CommandSourceStack p_137105_,  LootItemCondition p_137106_)`
- `private static Collection<CommandSourceStack> expect(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_137071_,  boolean p_137072_,  boolean p_137073_)`
- `private static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> addConditional(com.mojang.brigadier.tree.CommandNode<CommandSourceStack> p_137075_,  com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> p_137076_,  boolean p_137077_,  ExecuteCommand.CommandPredicate p_137078_)`
- `private static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> addIfBlocksConditional(com.mojang.brigadier.tree.CommandNode<CommandSourceStack> p_137080_,  com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> p_137081_,  boolean p_137082_,  boolean p_137083_)`
- `private static int checkIfRegions(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_137068_,  boolean p_137069_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int checkUnlessRegions(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_137194_,  boolean p_137195_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static OptionalInt checkRegions(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_137221_,  boolean p_137222_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static OptionalInt checkRegions(ServerLevel p_137037_,  BlockPos p_137038_,  BlockPos p_137039_,  BlockPos p_137040_,  boolean p_137041_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static com.mojang.brigadier.RedirectModifier<CommandSourceStack> expandOneToOneEntityRelation(Function<Entity,Optional<Entity>> p_265114_)`
- `private static com.mojang.brigadier.RedirectModifier<CommandSourceStack> expandOneToManyEntityRelation(Function<Entity,Stream<Entity>> p_265496_)`
- `private static com.mojang.brigadier.builder.LiteralArgumentBuilder<CommandSourceStack> createRelationOperations(com.mojang.brigadier.tree.CommandNode<CommandSourceStack> p_265189_,  com.mojang.brigadier.builder.LiteralArgumentBuilder<CommandSourceStack> p_265783_)`
- `private static CommandSourceStack spawnEntityAndRedirect(CommandSourceStack p_270320_,  Holder.Reference<EntityType<?>> p_270344_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## ExecuteCommand.CommandNumericPredicate

*interface* `net.minecraft.server.commands.ExecuteCommand.CommandNumericPredicate`

Enclosing class: ExecuteCommand

### Methods
- `int test(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_137301_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## ExecuteCommand.CommandPredicate

*interface* `net.minecraft.server.commands.ExecuteCommand.CommandPredicate`

Enclosing class: ExecuteCommand

### Methods
- `boolean test(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_137303_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## ExperienceCommand

*class* `net.minecraft.server.commands.ExperienceCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_SET_POINTS_INVALID`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_137307_)`
- `private static int queryExperience(CommandSourceStack p_137313_,  ServerPlayer p_137314_,  ExperienceCommand.Type p_137315_)`
- `private static int addExperience(CommandSourceStack p_137317_,  Collection<? extends ServerPlayer> p_137318_,  int p_137319_,  ExperienceCommand.Type p_137320_)`
- `private static int setExperience(CommandSourceStack p_137326_,  Collection<? extends ServerPlayer> p_137327_,  int p_137328_,  ExperienceCommand.Type p_137329_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## FillBiomeCommand

*class* `net.minecraft.server.commands.FillBiomeCommand`

### Fields
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_LOADED`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_VOLUME_TOO_LARGE`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_261867_,  CommandBuildContext p_262155_)`
- `private static int quantize(int p_261998_)`
- `private static BlockPos quantize(BlockPos p_262148_)`
- `private static BiomeResolver makeResolver(org.apache.commons.lang3.mutable.MutableInt p_262615_,  ChunkAccess p_262698_,  BoundingBox p_262622_,  Holder<Biome> p_262705_,  Predicate<Holder<Biome>> p_262695_)`
- `private static int fill(CommandSourceStack p_262664_,  BlockPos p_262651_,  BlockPos p_262678_,  Holder.Reference<Biome> p_262612_,  Predicate<Holder<Biome>> p_262697_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## FillCommand

*class* `net.minecraft.server.commands.FillCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_AREA_TOO_LARGE`
- `static final BlockInput HOLLOW_CORE`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_FAILED`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_214443_,  CommandBuildContext p_214444_)`
- `private static int fillBlocks(CommandSourceStack p_137386_,  BoundingBox p_137387_,  BlockInput p_137388_,  FillCommand.Mode p_137389_,  @Nullable  Predicate<BlockInWorld> p_137390_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## ForceLoadCommand

*class* `net.minecraft.server.commands.ForceLoadCommand`

### Fields
- `private static final int MAX_CHUNK_LIMIT` (= 256)
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_TOO_MANY_CHUNKS`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_NOT_TICKING`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_ALL_ADDED`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NONE_REMOVED`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_137677_)`
- `private static int queryForceLoad(CommandSourceStack p_137683_,  ColumnPos p_137684_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int listForceLoad(CommandSourceStack p_137681_)`
- `private static int removeAll(CommandSourceStack p_137696_)`
- `private static int changeForceLoad(CommandSourceStack p_137686_,  ColumnPos p_137687_,  ColumnPos p_137688_,  boolean p_137689_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## FunctionCommand

*class* `net.minecraft.server.commands.FunctionCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_ARGUMENT_NOT_COMPOUND`
- `public static final com.mojang.brigadier.suggestion.SuggestionProvider<CommandSourceStack> SUGGEST_FUNCTION`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_137715_)`
- `private static CompoundTag getArgumentTag(NbtPathArgument.NbtPath p_298274_,  DataAccessor p_301396_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int runFunction(CommandSourceStack p_137724_,  Collection<CommandFunction> p_137725_,  @Nullable  CompoundTag p_298676_)`
- `public static FunctionCommand.FunctionResult runFunction(CommandSourceStack p_300581_,  CommandFunction p_300106_,  @Nullable  CompoundTag p_300895_)  throws FunctionInstantiationException`
  - throws: FunctionInstantiationException

## FunctionCommand.FunctionResult

*record* `net.minecraft.server.commands.FunctionCommand.FunctionResult`

Enclosing class: FunctionCommand

### Fields
- `private final int value`
  The field for the value record component.
- `private final boolean isReturn`
  The field for the isReturn record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int value()`
  Returns the value of the value record component.
  - returns: the value of the value record component
- `public boolean isReturn()`
  Returns the value of the isReturn record component.
  - returns: the value of the isReturn record component

## GameModeCommand

*class* `net.minecraft.server.commands.GameModeCommand`

### Fields
- `public static final int PERMISSION_LEVEL` (= 2)

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_137730_)`
- `private static void logGamemodeChange(CommandSourceStack p_137738_,  ServerPlayer p_137739_,  GameType p_137740_)`
- `private static int setMode(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_137732_,  Collection<ServerPlayer> p_137733_,  GameType p_137734_)`

## GameRuleCommand

*class* `net.minecraft.server.commands.GameRuleCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_137745_)`
- `static <T extends GameRules.Value<T>> int setRule(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_137755_,  GameRules.Key<T> p_137756_)`
- `static <T extends GameRules.Value<T>> int queryRule(CommandSourceStack p_137758_,  GameRules.Key<T> p_137759_)`

## GiveCommand

*class* `net.minecraft.server.commands.GiveCommand`

### Fields
- `public static final int MAX_ALLOWED_ITEMSTACKS` (= 100)

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_214446_,  CommandBuildContext p_214447_)`
- `private static int giveItem(CommandSourceStack p_137779_,  ItemInput p_137780_,  Collection<ServerPlayer> p_137781_,  int p_137782_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## HelpCommand

*class* `net.minecraft.server.commands.HelpCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_FAILED`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_137788_)`

## ItemCommands

*class* `net.minecraft.server.commands.ItemCommands`

### Fields
- `static final com.mojang.brigadier.exceptions.Dynamic3CommandExceptionType ERROR_TARGET_NOT_A_CONTAINER`
- `private static final com.mojang.brigadier.exceptions.Dynamic3CommandExceptionType ERROR_SOURCE_NOT_A_CONTAINER`
- `static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_TARGET_INAPPLICABLE_SLOT`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_SOURCE_INAPPLICABLE_SLOT`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_TARGET_NO_CHANGES`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_TARGET_NO_CHANGES_KNOWN_ITEM`
- `private static final com.mojang.brigadier.suggestion.SuggestionProvider<CommandSourceStack> SUGGEST_MODIFIER`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_214449_,  CommandBuildContext p_214450_)`
- `private static int modifyBlockItem(CommandSourceStack p_180297_,  BlockPos p_180298_,  int p_180299_,  LootItemFunction p_180300_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int modifyEntityItem(CommandSourceStack p_180337_,  Collection<? extends Entity> p_180338_,  int p_180339_,  LootItemFunction p_180340_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setBlockItem(CommandSourceStack p_180292_,  BlockPos p_180293_,  int p_180294_,  ItemStack p_180295_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static Container getContainer(CommandSourceStack p_180328_,  BlockPos p_180329_,  com.mojang.brigadier.exceptions.Dynamic3CommandExceptionType p_180330_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setEntityItem(CommandSourceStack p_180332_,  Collection<? extends Entity> p_180333_,  int p_180334_,  ItemStack p_180335_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int blockToEntities(CommandSourceStack p_180315_,  BlockPos p_180316_,  int p_180317_,  Collection<? extends Entity> p_180318_,  int p_180319_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int blockToEntities(CommandSourceStack p_180321_,  BlockPos p_180322_,  int p_180323_,  Collection<? extends Entity> p_180324_,  int p_180325_,  LootItemFunction p_180326_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int blockToBlock(CommandSourceStack p_180302_,  BlockPos p_180303_,  int p_180304_,  BlockPos p_180305_,  int p_180306_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int blockToBlock(CommandSourceStack p_180308_,  BlockPos p_180309_,  int p_180310_,  BlockPos p_180311_,  int p_180312_,  LootItemFunction p_180313_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int entityToBlock(CommandSourceStack p_180258_,  Entity p_180259_,  int p_180260_,  BlockPos p_180261_,  int p_180262_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int entityToBlock(CommandSourceStack p_180264_,  Entity p_180265_,  int p_180266_,  BlockPos p_180267_,  int p_180268_,  LootItemFunction p_180269_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int entityToEntities(CommandSourceStack p_180271_,  Entity p_180272_,  int p_180273_,  Collection<? extends Entity> p_180274_,  int p_180275_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int entityToEntities(CommandSourceStack p_180277_,  Entity p_180278_,  int p_180279_,  Collection<? extends Entity> p_180280_,  int p_180281_,  LootItemFunction p_180282_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static ItemStack applyModifier(CommandSourceStack p_180284_,  LootItemFunction p_180285_,  ItemStack p_180286_)`
- `private static ItemStack getEntityItem(Entity p_180246_,  int p_180247_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static ItemStack getBlockItem(CommandSourceStack p_180288_,  BlockPos p_180289_,  int p_180290_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## JfrCommand

*class* `net.minecraft.server.commands.JfrCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType START_FAILED`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType DUMP_FAILED`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_183646_)`
- `private static int startJfr(CommandSourceStack p_183650_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int stopJfr(CommandSourceStack p_183659_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## KickCommand

*class* `net.minecraft.server.commands.KickCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_137796_)`
- `private static int kickPlayers(CommandSourceStack p_137802_,  Collection<ServerPlayer> p_137803_,  Component p_137804_)`

## KillCommand

*class* `net.minecraft.server.commands.KillCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_137808_)`
- `private static int kill(CommandSourceStack p_137814_,  Collection<? extends Entity> p_137815_)`

## ListPlayersCommand

*class* `net.minecraft.server.commands.ListPlayersCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_137821_)`
- `private static int listPlayers(CommandSourceStack p_137825_)`
- `private static int listPlayersWithUuids(CommandSourceStack p_137832_)`
- `private static int format(CommandSourceStack p_137827_,  Function<ServerPlayer,Component> p_137828_)`

## LocateCommand

*class* `net.minecraft.server.commands.LocateCommand`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_STRUCTURE_NOT_FOUND`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_STRUCTURE_INVALID`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_BIOME_NOT_FOUND`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_POI_NOT_FOUND`
- `private static final int MAX_STRUCTURE_SEARCH_RADIUS` (= 100)
- `private static final int MAX_BIOME_SEARCH_RADIUS` (= 6400)
- `private static final int BIOME_SAMPLE_RESOLUTION_HORIZONTAL` (= 32)
- `private static final int BIOME_SAMPLE_RESOLUTION_VERTICAL` (= 64)
- `private static final int POI_SEARCH_RADIUS` (= 256)

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_249870_,  CommandBuildContext p_248936_)`
- `private static Optional<? extends HolderSet.ListBacked<Structure>> getHolders(ResourceOrTagKeyArgument.Result<Structure> p_251212_,  Registry<Structure> p_249691_)`
- `private static int locateStructure(CommandSourceStack p_214472_,  ResourceOrTagKeyArgument.Result<Structure> p_249893_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int locateBiome(CommandSourceStack p_252062_,  ResourceOrTagArgument.Result<Biome> p_249756_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int locatePoi(CommandSourceStack p_252013_,  ResourceOrTagArgument.Result<PoiType> p_249480_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static String getElementName(com.mojang.datafixers.util.Pair<BlockPos,? extends Holder<?>> p_249526_)`
- `public static int showLocateResult(CommandSourceStack p_263098_,  ResourceOrTagArgument.Result<?> p_262956_,  BlockPos p_262917_,  com.mojang.datafixers.util.Pair<BlockPos,? extends Holder<?>> p_263074_,  String p_262937_,  boolean p_263051_,  Duration p_263028_)`
- `public static int showLocateResult(CommandSourceStack p_263019_,  ResourceOrTagKeyArgument.Result<?> p_263031_,  BlockPos p_262989_,  com.mojang.datafixers.util.Pair<BlockPos,? extends Holder<?>> p_262959_,  String p_263045_,  boolean p_262934_,  Duration p_262960_)`
- `private static int showLocateResult(CommandSourceStack p_262983_,  BlockPos p_263016_,  com.mojang.datafixers.util.Pair<BlockPos,? extends Holder<?>> p_262941_,  String p_263083_,  boolean p_263010_,  String p_263048_,  Duration p_263040_)`
- `private static float dist(int p_137854_,  int p_137855_,  int p_137856_,  int p_137857_)`

## LootCommand

*class* `net.minecraft.server.commands.LootCommand`

### Fields
- `public static final com.mojang.brigadier.suggestion.SuggestionProvider<CommandSourceStack> SUGGEST_LOOT_TABLE`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_NO_HELD_ITEMS`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_NO_LOOT_TABLE`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_214516_,  CommandBuildContext p_214517_)`
- `private static <T extends com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack, T>> T addTargets(T p_137903_,  LootCommand.TailProvider p_137904_)`
- `private static Container getContainer(CommandSourceStack p_137951_,  BlockPos p_137952_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int blockDistribute(CommandSourceStack p_137961_,  BlockPos p_137962_,  List<ItemStack> p_137963_,  LootCommand.Callback p_137964_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static boolean distributeToContainer(Container p_137886_,  ItemStack p_137887_)`
- `private static int blockReplace(CommandSourceStack p_137954_,  BlockPos p_137955_,  int p_137956_,  int p_137957_,  List<ItemStack> p_137958_,  LootCommand.Callback p_137959_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static boolean canMergeItems(ItemStack p_137895_,  ItemStack p_137896_)`
- `private static int playerGive(Collection<ServerPlayer> p_137985_,  List<ItemStack> p_137986_,  LootCommand.Callback p_137987_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static void setSlots(Entity p_137889_,  List<ItemStack> p_137890_,  int p_137891_,  int p_137892_,  List<ItemStack> p_137893_)`
- `private static int entityReplace(Collection<? extends Entity> p_137979_,  int p_137980_,  int p_137981_,  List<ItemStack> p_137982_,  LootCommand.Callback p_137983_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int dropInWorld(CommandSourceStack p_137946_,  Vec3 p_137947_,  List<ItemStack> p_137948_,  LootCommand.Callback p_137949_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static void callback(CommandSourceStack p_137966_,  List<ItemStack> p_137967_)`
- `private static void callback(CommandSourceStack p_137969_,  List<ItemStack> p_137970_,  ResourceLocation p_137971_)`
- `private static ItemStack getSourceHandItem(CommandSourceStack p_137939_,  EquipmentSlot p_137940_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int dropBlockLoot(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_137913_,  BlockPos p_137914_,  ItemStack p_137915_,  LootCommand.DropConsumer p_137916_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int dropKillLoot(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_137906_,  Entity p_137907_,  LootCommand.DropConsumer p_137908_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int dropChestLoot(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_137933_,  ResourceLocation p_137934_,  LootCommand.DropConsumer p_137935_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int dropFishingLoot(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_137927_,  ResourceLocation p_137928_,  BlockPos p_137929_,  ItemStack p_137930_,  LootCommand.DropConsumer p_137931_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int drop(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_287721_,  ResourceLocation p_287610_,  LootParams p_287728_,  LootCommand.DropConsumer p_287770_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## LootCommand.Callback

*interface* `net.minecraft.server.commands.LootCommand.Callback`

Enclosing class: LootCommand

### Methods
- `void accept(List<ItemStack> p_138048_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## LootCommand.DropConsumer

*interface* `net.minecraft.server.commands.LootCommand.DropConsumer`

Enclosing class: LootCommand

### Methods
- `int accept(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_138050_,  List<ItemStack> p_138051_,  LootCommand.Callback p_138052_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## LootCommand.TailProvider

*interface* `net.minecraft.server.commands.LootCommand.TailProvider`

Enclosing class: LootCommand

### Methods
- `com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> construct(com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> p_138054_,  LootCommand.DropConsumer p_138055_)`

## MsgCommand

*class* `net.minecraft.server.commands.MsgCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138061_)`
- `private static void sendMessage(CommandSourceStack p_250209_,  Collection<ServerPlayer> p_252344_,  PlayerChatMessage p_249416_)`

## OpCommand

*class* `net.minecraft.server.commands.OpCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_ALREADY_OP`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138080_)`
- `private static int opPlayers(CommandSourceStack p_138089_,  Collection<com.mojang.authlib.GameProfile> p_138090_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## PardonCommand

*class* `net.minecraft.server.commands.PardonCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_BANNED`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138094_)`
- `private static int pardonPlayers(CommandSourceStack p_138103_,  Collection<com.mojang.authlib.GameProfile> p_138104_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## PardonIpCommand

*class* `net.minecraft.server.commands.PardonIpCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_INVALID`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_BANNED`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138109_)`
- `private static int unban(CommandSourceStack p_138118_,  String p_138119_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## ParticleCommand

*class* `net.minecraft.server.commands.ParticleCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_FAILED`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138123_,  CommandBuildContext p_248587_)`
- `private static int sendParticles(CommandSourceStack p_138129_,  ParticleOptions p_138130_,  Vec3 p_138131_,  Vec3 p_138132_,  float p_138133_,  int p_138134_,  boolean p_138135_,  Collection<ServerPlayer> p_138136_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## PerfCommand

*class* `net.minecraft.server.commands.PerfCommand`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_RUNNING`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_ALREADY_RUNNING`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_180438_)`
- `private static int startProfilingDedicatedServer(CommandSourceStack p_180442_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int stopProfilingDedicatedServer(CommandSourceStack p_180457_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static void saveResults(CommandSourceStack p_180447_,  Path p_180448_,  MinecraftServer p_180449_)`
- `private static void whenStopped(CommandSourceStack p_180444_,  ProfileResults p_180445_)`

## PlaceCommand

*class* `net.minecraft.server.commands.PlaceCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_FEATURE_FAILED`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_JIGSAW_FAILED`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_STRUCTURE_FAILED`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_TEMPLATE_INVALID`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_TEMPLATE_FAILED`
- `private static final com.mojang.brigadier.suggestion.SuggestionProvider<CommandSourceStack> SUGGEST_TEMPLATES`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_214548_)`
- `public static int placeFeature(CommandSourceStack p_214576_,  Holder.Reference<ConfiguredFeature<?,?>> p_248822_,  BlockPos p_214578_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static int placeJigsaw(CommandSourceStack p_214570_,  Holder<StructureTemplatePool> p_214571_,  ResourceLocation p_214572_,  int p_214573_,  BlockPos p_214574_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static int placeStructure(CommandSourceStack p_214588_,  Holder.Reference<Structure> p_251799_,  BlockPos p_214590_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static int placeTemplate(CommandSourceStack p_214562_,  ResourceLocation p_214563_,  BlockPos p_214564_,  Rotation p_214565_,  Mirror p_214566_,  float p_214567_,  int p_214568_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static void checkLoaded(ServerLevel p_214544_,  ChunkPos p_214545_,  ChunkPos p_214546_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## PlaySoundCommand

*class* `net.minecraft.server.commands.PlaySoundCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_TOO_FAR`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138157_)`
- `private static com.mojang.brigadier.builder.LiteralArgumentBuilder<CommandSourceStack> source(SoundSource p_138152_)`
- `private static int playSound(CommandSourceStack p_138161_,  Collection<ServerPlayer> p_138162_,  ResourceLocation p_138163_,  SoundSource p_138164_,  Vec3 p_138165_,  float p_138166_,  float p_138167_,  float p_138168_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## PublishCommand

*class* `net.minecraft.server.commands.PublishCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_FAILED`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_ALREADY_PUBLISHED`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138185_)`
- `private static int publish(CommandSourceStack p_260117_,  int p_259411_,  boolean p_260137_,  @Nullable  GameType p_259145_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static MutableComponent getSuccessMessage(int p_259532_)`

## RaidCommand

*class* `net.minecraft.server.commands.RaidCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_180469_)`
- `private static int glow(CommandSourceStack p_180473_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setBadOmenLevel(CommandSourceStack p_180475_,  int p_180476_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int spawnLeader(CommandSourceStack p_180483_)`
- `private static int playSound(CommandSourceStack p_180478_,  @Nullable  Component p_180479_)`
- `private static int start(CommandSourceStack p_180485_,  int p_180486_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int stop(CommandSourceStack p_180490_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int check(CommandSourceStack p_180494_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `@Nullable private static Raid getRaid(ServerPlayer p_180467_)`

## RandomCommand

*class* `net.minecraft.server.commands.RandomCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_RANGE_TOO_LARGE`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_RANGE_TOO_SMALL`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_300897_)`
- `private static com.mojang.brigadier.builder.LiteralArgumentBuilder<CommandSourceStack> drawRandomValueTree(String p_299144_,  boolean p_298789_)`
- `private static CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestRandomSequence(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_297521_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_299165_)`
- `private static int randomSample(CommandSourceStack p_299745_,  MinMaxBounds.Ints p_299529_,  @Nullable  ResourceLocation p_301238_,  boolean p_298006_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int resetSequence(CommandSourceStack p_300119_,  ResourceLocation p_298199_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int resetSequence(CommandSourceStack p_298149_,  ResourceLocation p_299177_,  int p_300974_,  boolean p_298057_,  boolean p_300002_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int resetAllSequences(CommandSourceStack p_299139_)`
- `private static int resetAllSequencesAndSetNewDefaults(CommandSourceStack p_299873_,  int p_300494_,  boolean p_300184_,  boolean p_297446_)`

## RecipeCommand

*class* `net.minecraft.server.commands.RecipeCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_GIVE_FAILED`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_TAKE_FAILED`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138201_)`
- `private static int giveRecipes(CommandSourceStack p_138207_,  Collection<ServerPlayer> p_138208_,  Collection<RecipeHolder<?>> p_138209_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int takeRecipes(CommandSourceStack p_138213_,  Collection<ServerPlayer> p_138214_,  Collection<RecipeHolder<?>> p_138215_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## ReloadCommand

*class* `net.minecraft.server.commands.ReloadCommand`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Methods
- `public static void reloadPacks(Collection<String> p_138236_,  CommandSourceStack p_138237_)`
- `private static Collection<String> discoverNewPacks(PackRepository p_138223_,  WorldData p_138224_,  Collection<String> p_138225_)`
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138227_)`

## ResetChunksCommand

*class* `net.minecraft.server.commands.ResetChunksCommand`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_183667_)`
- `private static int resetChunks(CommandSourceStack p_183685_,  int p_183686_,  boolean p_183687_)`

## ReturnCommand

*class* `net.minecraft.server.commands.ReturnCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_282091_)`
- `private static int setReturn(CommandSourceStack p_281858_,  int p_281623_)`

## RideCommand

*class* `net.minecraft.server.commands.RideCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_NOT_RIDING`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_ALREADY_RIDING`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_MOUNT_FAILED`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_MOUNTING_PLAYER`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_MOUNTING_LOOP`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_WRONG_DIMENSION`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_265201_)`
- `private static int mount(CommandSourceStack p_265285_,  Entity p_265711_,  Entity p_265339_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int dismount(CommandSourceStack p_265724_,  Entity p_265678_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## SaveAllCommand

*class* `net.minecraft.server.commands.SaveAllCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_FAILED`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138272_)`
- `private static int saveAll(CommandSourceStack p_138278_,  boolean p_138279_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## SaveOffCommand

*class* `net.minecraft.server.commands.SaveOffCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_ALREADY_OFF`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138285_)`

## SaveOnCommand

*class* `net.minecraft.server.commands.SaveOnCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_ALREADY_ON`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138293_)`

## SayCommand

*class* `net.minecraft.server.commands.SayCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138410_)`

## ScheduleCommand

*class* `net.minecraft.server.commands.ScheduleCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_SAME_TICK`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_CANT_REMOVE`
- `private static final com.mojang.brigadier.suggestion.SuggestionProvider<CommandSourceStack> SUGGEST_SCHEDULE`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138420_)`
- `private static int schedule(CommandSourceStack p_138429_,  com.mojang.datafixers.util.Pair<ResourceLocation,com.mojang.datafixers.util.Either<CommandFunction,Collection<CommandFunction>>> p_138430_,  int p_138431_,  boolean p_138432_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int remove(CommandSourceStack p_138434_,  String p_138435_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## ScoreboardCommand

*class* `net.minecraft.server.commands.ScoreboardCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_OBJECTIVE_ALREADY_EXISTS`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_DISPLAY_SLOT_ALREADY_EMPTY`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_DISPLAY_SLOT_ALREADY_SET`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_TRIGGER_ALREADY_ENABLED`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_TRIGGER`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_NO_VALUE`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138469_)`
- `private static com.mojang.brigadier.builder.LiteralArgumentBuilder<CommandSourceStack> createRenderTypeModify()`
- `private static CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestTriggers(CommandSourceStack p_138511_,  Collection<String> p_138512_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_138513_)`
- `private static int getScore(CommandSourceStack p_138499_,  String p_138500_,  Objective p_138501_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int performOperation(CommandSourceStack p_138524_,  Collection<String> p_138525_,  Objective p_138526_,  OperationArgument.Operation p_138527_,  Collection<String> p_138528_,  Objective p_138529_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int enableTrigger(CommandSourceStack p_138515_,  Collection<String> p_138516_,  Objective p_138517_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int resetScores(CommandSourceStack p_138508_,  Collection<String> p_138509_)`
- `private static int resetScore(CommandSourceStack p_138541_,  Collection<String> p_138542_,  Objective p_138543_)`
- `private static int setScore(CommandSourceStack p_138519_,  Collection<String> p_138520_,  Objective p_138521_,  int p_138522_)`
- `private static int addScore(CommandSourceStack p_138545_,  Collection<String> p_138546_,  Objective p_138547_,  int p_138548_)`
- `private static int removeScore(CommandSourceStack p_138554_,  Collection<String> p_138555_,  Objective p_138556_,  int p_138557_)`
- `private static int listTrackedPlayers(CommandSourceStack p_138476_)`
- `private static int listTrackedPlayerScores(CommandSourceStack p_138496_,  String p_138497_)`
- `private static int clearDisplaySlot(CommandSourceStack p_138478_,  DisplaySlot p_301105_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setDisplaySlot(CommandSourceStack p_138481_,  DisplaySlot p_300906_,  Objective p_138483_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setDisplayName(CommandSourceStack p_138492_,  Objective p_138493_,  Component p_138494_)`
- `private static int setRenderType(CommandSourceStack p_138488_,  Objective p_138489_,  ObjectiveCriteria.RenderType p_138490_)`
- `private static int removeObjective(CommandSourceStack p_138485_,  Objective p_138486_)`
- `private static int addObjective(CommandSourceStack p_138503_,  String p_138504_,  ObjectiveCriteria p_138505_,  Component p_138506_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int listObjectives(CommandSourceStack p_138539_)`

## SeedCommand

*class* `net.minecraft.server.commands.SeedCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138590_,  boolean p_138591_)`

## SetBlockCommand

*class* `net.minecraft.server.commands.SetBlockCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_FAILED`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_214731_,  CommandBuildContext p_214732_)`
- `private static int setBlock(CommandSourceStack p_138608_,  BlockPos p_138609_,  BlockInput p_138610_,  SetBlockCommand.Mode p_138611_,  @Nullable  Predicate<BlockInWorld> p_138612_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## SetBlockCommand.Filter

*interface* `net.minecraft.server.commands.SetBlockCommand.Filter`

Enclosing class: SetBlockCommand

### Methods
- `@Nullable BlockInput filter(BoundingBox p_138620_,  BlockPos p_138621_,  BlockInput p_138622_,  ServerLevel p_138623_)`

## SetPlayerIdleTimeoutCommand

*class* `net.minecraft.server.commands.SetPlayerIdleTimeoutCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138635_)`
- `private static int setIdleTimeout(CommandSourceStack p_138641_,  int p_138642_)`

## SetSpawnCommand

*class* `net.minecraft.server.commands.SetSpawnCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138644_)`
- `private static int setSpawn(CommandSourceStack p_138650_,  Collection<ServerPlayer> p_138651_,  BlockPos p_138652_,  float p_138653_)`

## SetWorldSpawnCommand

*class* `net.minecraft.server.commands.SetWorldSpawnCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138661_)`
- `private static int setSpawn(CommandSourceStack p_138667_,  BlockPos p_138668_,  float p_138669_)`

## SpawnArmorTrimsCommand

*class* `net.minecraft.server.commands.SpawnArmorTrimsCommand`

### Fields
- `private static final Map<com.mojang.datafixers.util.Pair<ArmorMaterial,EquipmentSlot>,Item> MATERIAL_AND_SLOT_TO_ITEM`
- `private static final List<ResourceKey<TrimPattern>> VANILLA_TRIM_PATTERNS`
- `private static final List<ResourceKey<TrimMaterial>> VANILLA_TRIM_MATERIALS`
- `private static final ToIntFunction<ResourceKey<TrimPattern>> TRIM_PATTERN_ORDER`
- `private static final ToIntFunction<ResourceKey<TrimMaterial>> TRIM_MATERIAL_ORDER`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_266758_)`
- `private static int spawnArmorTrims(CommandSourceStack p_266993_,  Player p_266983_)`

## SpectateCommand

*class* `net.minecraft.server.commands.SpectateCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_SELF`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_NOT_SPECTATOR`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138678_)`
- `private static int spectate(CommandSourceStack p_138684_,  @Nullable  Entity p_138685_,  ServerPlayer p_138686_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## SpreadPlayersCommand

*class* `net.minecraft.server.commands.SpreadPlayersCommand`

### Fields
- `private static final int MAX_ITERATION_COUNT` (= 10000)
- `private static final com.mojang.brigadier.exceptions.Dynamic4CommandExceptionType ERROR_FAILED_TO_SPREAD_TEAMS`
- `private static final com.mojang.brigadier.exceptions.Dynamic4CommandExceptionType ERROR_FAILED_TO_SPREAD_ENTITIES`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_INVALID_MAX_HEIGHT`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138697_)`
- `private static int spreadPlayers(CommandSourceStack p_138703_,  Vec2 p_138704_,  float p_138705_,  float p_138706_,  int p_138707_,  boolean p_138708_,  Collection<? extends Entity> p_138709_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int getNumberOfTeams(Collection<? extends Entity> p_138728_)`
- `private static void spreadPositions(Vec2 p_214741_,  double p_214742_,  ServerLevel p_214743_,  RandomSource p_214744_,  double p_214745_,  double p_214746_,  double p_214747_,  double p_214748_,  int p_214749_,  SpreadPlayersCommand.Position[] p_214750_,  boolean p_214751_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static double setPlayerPositions(Collection<? extends Entity> p_138730_,  ServerLevel p_138731_,  SpreadPlayersCommand.Position[] p_138732_,  int p_138733_,  boolean p_138734_)`
- `private static SpreadPlayersCommand.Position[] createInitialPositions(RandomSource p_214734_,  int p_214735_,  double p_214736_,  double p_214737_,  double p_214738_,  double p_214739_)`

## SpreadPlayersCommand.Position

*class* `net.minecraft.server.commands.SpreadPlayersCommand.Position`

Enclosing class: SpreadPlayersCommand

### Fields
- `double x`
- `double z`

### Methods
- `double dist(SpreadPlayersCommand.Position p_138768_)`
- `void normalize()`
- `double getLength()`
- `public void moveAway(SpreadPlayersCommand.Position p_138777_)`
- `public boolean clamp(double p_138754_,  double p_138755_,  double p_138756_,  double p_138757_)`
- `public int getSpawnY(BlockGetter p_138759_,  int p_138760_)`
- `public boolean isSafe(BlockGetter p_138774_,  int p_138775_)`
- `public void randomize(RandomSource p_214753_,  double p_214754_,  double p_214755_,  double p_214756_,  double p_214757_)`

## StopCommand

*class* `net.minecraft.server.commands.StopCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138786_)`

## StopSoundCommand

*class* `net.minecraft.server.commands.StopSoundCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138795_)`
- `private static int stopSound(CommandSourceStack p_138801_,  Collection<ServerPlayer> p_138802_,  @Nullable  SoundSource p_138803_,  @Nullable  ResourceLocation p_138804_)`

## SummonCommand

*class* `net.minecraft.server.commands.SummonCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_FAILED`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_DUPLICATE_UUID`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType INVALID_POSITION`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_250343_,  CommandBuildContext p_250122_)`
- `public static Entity createEntity(CommandSourceStack p_270582_,  Holder.Reference<EntityType<?>> p_270277_,  Vec3 p_270366_,  CompoundTag p_270197_,  boolean p_270947_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int spawnEntity(CommandSourceStack p_249752_,  Holder.Reference<EntityType<?>> p_251948_,  Vec3 p_251429_,  CompoundTag p_250568_,  boolean p_250229_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## TagCommand

*class* `net.minecraft.server.commands.TagCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_ADD_FAILED`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_REMOVE_FAILED`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138837_)`
- `private static Collection<String> getTags(Collection<? extends Entity> p_138853_)`
- `private static int addTag(CommandSourceStack p_138849_,  Collection<? extends Entity> p_138850_,  String p_138851_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int removeTag(CommandSourceStack p_138857_,  Collection<? extends Entity> p_138858_,  String p_138859_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int listTags(CommandSourceStack p_138846_,  Collection<? extends Entity> p_138847_)`

## TeamCommand

*class* `net.minecraft.server.commands.TeamCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_TEAM_ALREADY_EXISTS`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_TEAM_ALREADY_EMPTY`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_TEAM_ALREADY_NAME`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_TEAM_ALREADY_COLOR`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_TEAM_ALREADY_FRIENDLYFIRE_ENABLED`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_TEAM_ALREADY_FRIENDLYFIRE_DISABLED`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_TEAM_ALREADY_FRIENDLYINVISIBLES_ENABLED`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_TEAM_ALREADY_FRIENDLYINVISIBLES_DISABLED`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_TEAM_NAMETAG_VISIBLITY_UNCHANGED`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_TEAM_DEATH_MESSAGE_VISIBLITY_UNCHANGED`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_TEAM_COLLISION_UNCHANGED`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_138878_)`
- `private static int leaveTeam(CommandSourceStack p_138918_,  Collection<String> p_138919_)`
- `private static int joinTeam(CommandSourceStack p_138895_,  PlayerTeam p_138896_,  Collection<String> p_138897_)`
- `private static int setNametagVisibility(CommandSourceStack p_138891_,  PlayerTeam p_138892_,  Team.Visibility p_138893_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setDeathMessageVisibility(CommandSourceStack p_138930_,  PlayerTeam p_138931_,  Team.Visibility p_138932_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setCollision(CommandSourceStack p_138887_,  PlayerTeam p_138888_,  Team.CollisionRule p_138889_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setFriendlySight(CommandSourceStack p_138907_,  PlayerTeam p_138908_,  boolean p_138909_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setFriendlyFire(CommandSourceStack p_138938_,  PlayerTeam p_138939_,  boolean p_138940_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setDisplayName(CommandSourceStack p_138903_,  PlayerTeam p_138904_,  Component p_138905_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setColor(CommandSourceStack p_138899_,  PlayerTeam p_138900_,  ChatFormatting p_138901_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int emptyTeam(CommandSourceStack p_138884_,  PlayerTeam p_138885_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int deleteTeam(CommandSourceStack p_138927_,  PlayerTeam p_138928_)`
- `private static int createTeam(CommandSourceStack p_138911_,  String p_138912_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int createTeam(CommandSourceStack p_138914_,  String p_138915_,  Component p_138916_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int listMembers(CommandSourceStack p_138944_,  PlayerTeam p_138945_)`
- `private static int listTeams(CommandSourceStack p_138882_)`
- `private static int setPrefix(CommandSourceStack p_138934_,  PlayerTeam p_138935_,  Component p_138936_)`
- `private static int setSuffix(CommandSourceStack p_138947_,  PlayerTeam p_138948_,  Component p_138949_)`

## TeamMsgCommand

*class* `net.minecraft.server.commands.TeamMsgCommand`

### Fields
- `private static final Style SUGGEST_STYLE`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_ON_TEAM`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_139000_)`
- `private static void sendMessage(CommandSourceStack p_248778_,  Entity p_248891_,  PlayerTeam p_250504_,  List<ServerPlayer> p_249706_,  PlayerChatMessage p_249707_)`

## TeleportCommand

*class* `net.minecraft.server.commands.TeleportCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType INVALID_POSITION`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_139009_)`
- `private static int teleportToEntity(CommandSourceStack p_139033_,  Collection<? extends Entity> p_139034_,  Entity p_139035_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int teleportToPos(CommandSourceStack p_139026_,  Collection<? extends Entity> p_139027_,  ServerLevel p_139028_,  Coordinates p_139029_,  @Nullable  Coordinates p_139030_,  @Nullable  TeleportCommand.LookAt p_139031_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static String formatDouble(double p_142776_)`
- `private static void performTeleport(CommandSourceStack p_139015_,  Entity p_139016_,  ServerLevel p_139017_,  double p_139018_,  double p_139019_,  double p_139020_,  Set<RelativeMovement> p_139021_,  float p_139022_,  float p_139023_,  @Nullable  TeleportCommand.LookAt p_139024_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## TeleportCommand.LookAt

*class* `net.minecraft.server.commands.TeleportCommand.LookAt`

Enclosing class: TeleportCommand

### Fields
- `private final Vec3 position`
- `private final Entity entity`
- `private final EntityAnchorArgument.Anchor anchor`

### Methods
- `public void perform(CommandSourceStack p_139061_,  Entity p_139062_)`

## TellRawCommand

*class* `net.minecraft.server.commands.TellRawCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_139064_)`

## TimeCommand

*class* `net.minecraft.server.commands.TimeCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_139072_)`
- `private static int getDayTime(ServerLevel p_139070_)`
- `private static int queryTime(CommandSourceStack p_139088_,  int p_139089_)`
- `public static int setTime(CommandSourceStack p_139078_,  int p_139079_)`
- `public static int addTime(CommandSourceStack p_139083_,  int p_139084_)`

## TitleCommand

*class* `net.minecraft.server.commands.TitleCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_139103_)`
- `private static int clearTitle(CommandSourceStack p_139109_,  Collection<ServerPlayer> p_139110_)`
- `private static int resetTitle(CommandSourceStack p_139125_,  Collection<ServerPlayer> p_139126_)`
- `private static int showTitle(CommandSourceStack p_142781_,  Collection<ServerPlayer> p_142782_,  Component p_142783_,  String p_142784_,  Function<Component,Packet<?>> p_142785_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setTimes(CommandSourceStack p_139112_,  Collection<ServerPlayer> p_139113_,  int p_139114_,  int p_139115_,  int p_139116_)`

## TriggerCommand

*class* `net.minecraft.server.commands.TriggerCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_PRIMED`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_INVALID_OBJECTIVE`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_139142_)`
- `public static CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestObjectives(CommandSourceStack p_139149_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_139150_)`
- `private static int addValue(CommandSourceStack p_139155_,  Score p_139156_,  int p_139157_)`
- `private static int setValue(CommandSourceStack p_139161_,  Score p_139162_,  int p_139163_)`
- `private static int simpleTrigger(CommandSourceStack p_139152_,  Score p_139153_)`
- `private static Score getScore(ServerPlayer p_139139_,  Objective p_139140_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## WardenSpawnTrackerCommand

*class* `net.minecraft.server.commands.WardenSpawnTrackerCommand`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_214774_)`
- `private static int setWarningLevel(CommandSourceStack p_214783_,  Collection<? extends Player> p_214784_,  int p_214785_)`
- `private static int resetTracker(CommandSourceStack p_214780_,  Collection<? extends Player> p_214781_)`

## WeatherCommand

*class* `net.minecraft.server.commands.WeatherCommand`

### Fields
- `private static final int DEFAULT_TIME` (= -1)

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_139167_)`
- `private static int getDuration(CommandSourceStack p_265382_,  int p_265171_,  IntProvider p_265122_)`
- `private static int setClear(CommandSourceStack p_139173_,  int p_139174_)`
- `private static int setRain(CommandSourceStack p_139178_,  int p_139179_)`
- `private static int setThunder(CommandSourceStack p_139183_,  int p_139184_)`

## WhitelistCommand

*class* `net.minecraft.server.commands.WhitelistCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_ALREADY_ENABLED`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_ALREADY_DISABLED`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_ALREADY_WHITELISTED`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_WHITELISTED`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_139202_)`
- `private static int reload(CommandSourceStack p_139209_)`
- `private static int addPlayers(CommandSourceStack p_139211_,  Collection<com.mojang.authlib.GameProfile> p_139212_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int removePlayers(CommandSourceStack p_139221_,  Collection<com.mojang.authlib.GameProfile> p_139222_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int enableWhitelist(CommandSourceStack p_139219_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int disableWhitelist(CommandSourceStack p_139226_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int showList(CommandSourceStack p_139230_)`

## WorldBorderCommand

*class* `net.minecraft.server.commands.WorldBorderCommand`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_SAME_CENTER`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_SAME_SIZE`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_TOO_SMALL`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_TOO_BIG`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_TOO_FAR_OUT`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_SAME_WARNING_TIME`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_SAME_WARNING_DISTANCE`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_SAME_DAMAGE_BUFFER`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_SAME_DAMAGE_AMOUNT`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_139247_)`
- `private static int setDamageBuffer(CommandSourceStack p_139257_,  float p_139258_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setDamageAmount(CommandSourceStack p_139270_,  float p_139271_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setWarningTime(CommandSourceStack p_139260_,  int p_139261_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setWarningDistance(CommandSourceStack p_139273_,  int p_139274_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int getSize(CommandSourceStack p_139251_)`
- `private static int setCenter(CommandSourceStack p_139263_,  Vec2 p_139264_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int setSize(CommandSourceStack p_139253_,  double p_139254_,  long p_139255_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
