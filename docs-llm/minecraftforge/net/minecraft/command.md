# net.minecraft.command

- [AdvancementCommand](#advancementcommand)
- [CommandBase](#commandbase)
- [CommandBase.CoordinateArg](#commandbase.coordinatearg)
- [CommandBlockData](#commandblockdata)
- [CommandClearInventory](#commandclearinventory)
- [CommandClone](#commandclone)
- [CommandCompare](#commandcompare)
- [CommandDebug](#commanddebug)
- [CommandDefaultGameMode](#commanddefaultgamemode)
- [CommandDifficulty](#commanddifficulty)
- [CommandEffect](#commandeffect)
- [CommandEnchant](#commandenchant)
- [CommandEntityData](#commandentitydata)
- [CommandException](#commandexception)
- [CommandExecuteAt](#commandexecuteat)
- [CommandFill](#commandfill)
- [CommandFunction](#commandfunction)
- [CommandGameMode](#commandgamemode)
- [CommandGameRule](#commandgamerule)
- [CommandGive](#commandgive)
- [CommandHandler](#commandhandler)
- [CommandHelp](#commandhelp)
- [CommandKill](#commandkill)
- [CommandLocate](#commandlocate)
- [CommandNotFoundException](#commandnotfoundexception)
- [CommandParticle](#commandparticle)
- [CommandPlaySound](#commandplaysound)
- [CommandReload](#commandreload)
- [CommandReplaceItem](#commandreplaceitem)
- [CommandResultStats](#commandresultstats)
- [CommandResultStats.Type](#commandresultstats.type)
- [CommandSenderWrapper](#commandsenderwrapper)
- [CommandServerKick](#commandserverkick)
- [CommandSetPlayerTimeout](#commandsetplayertimeout)
- [CommandSetSpawnpoint](#commandsetspawnpoint)
- [CommandShowSeed](#commandshowseed)
- [CommandSpreadPlayers](#commandspreadplayers)
- [CommandStats](#commandstats)
- [CommandStopSound](#commandstopsound)
- [CommandTime](#commandtime)
- [CommandTitle](#commandtitle)
- [CommandToggleDownfall](#commandtoggledownfall)
- [CommandTP](#commandtp)
- [CommandTrigger](#commandtrigger)
- [CommandWeather](#commandweather)
- [CommandWorldBorder](#commandworldborder)
- [CommandXP](#commandxp)
- [EntityNotFoundException](#entitynotfoundexception)
- [EntitySelector](#entityselector)
- [FunctionObject](#functionobject)
- [FunctionObject.CacheableFunction](#functionobject.cacheablefunction)
- [FunctionObject.CommandEntry](#functionobject.commandentry)
- [FunctionObject.Entry](#functionobject.entry)
- [FunctionObject.FunctionEntry](#functionobject.functionentry)
- [ICommand](#icommand)
- [ICommandListener](#icommandlistener)
- [ICommandManager](#icommandmanager)
- [ICommandSender](#icommandsender)
- [InvalidBlockStateException](#invalidblockstateexception)
- [NumberInvalidException](#numberinvalidexception)
- [PlayerNotFoundException](#playernotfoundexception)
- [RecipeCommand](#recipecommand)
- [ServerCommandManager](#servercommandmanager)
- [SyntaxErrorException](#syntaxerrorexception)
- [WrongUsageException](#wrongusageexception)
## AdvancementCommand

*class* `net.minecraft.command.AdvancementCommand`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`
- `public static Advancement findAdvancement(MinecraftServer server,  java.lang.String id)  throws CommandException`
  - throws: CommandException

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandBase

*class* `net.minecraft.command.CommandBase`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `protected static SyntaxErrorException toSyntaxException(JsonParseException e)`
- `public static NBTTagCompound entityToNBT(Entity theEntity)`
- `public int getRequiredPermissionLevel()`
- `public java.util.List<java.lang.String> getAliases()`
- `public boolean checkPermission(MinecraftServer server,  ICommandSender sender)`
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `public static int parseInt(java.lang.String input)  throws NumberInvalidException`
  - throws: NumberInvalidException
- `public static int parseInt(java.lang.String input,  int min)  throws NumberInvalidException`
  - throws: NumberInvalidException
- `public static int parseInt(java.lang.String input,  int min,  int max)  throws NumberInvalidException`
  - throws: NumberInvalidException
- `public static long parseLong(java.lang.String input)  throws NumberInvalidException`
  - throws: NumberInvalidException
- `public static long parseLong(java.lang.String input,  long min,  long max)  throws NumberInvalidException`
  - throws: NumberInvalidException
- `public static BlockPos parseBlockPos(ICommandSender sender,  java.lang.String[] args,  int startIndex,  boolean centerBlock)  throws NumberInvalidException`
  - throws: NumberInvalidException
- `public static double parseDouble(java.lang.String input)  throws NumberInvalidException`
  - throws: NumberInvalidException
- `public static double parseDouble(java.lang.String input,  double min)  throws NumberInvalidException`
  - throws: NumberInvalidException
- `public static double parseDouble(java.lang.String input,  double min,  double max)  throws NumberInvalidException`
  - throws: NumberInvalidException
- `public static boolean parseBoolean(java.lang.String input)  throws CommandException`
  - throws: CommandException
- `public static EntityPlayerMP getCommandSenderAsPlayer(ICommandSender sender)  throws PlayerNotFoundException`
  - throws: PlayerNotFoundException
- `public static java.util.List<EntityPlayerMP> getPlayers(MinecraftServer p_193513_0_,  ICommandSender p_193513_1_,  java.lang.String p_193513_2_)  throws CommandException`
  - throws: CommandException
- `public static EntityPlayerMP getPlayer(MinecraftServer server,  ICommandSender sender,  java.lang.String target)  throws PlayerNotFoundException,  CommandException`
  - throws: PlayerNotFoundException
  - throws: CommandException
- `public static Entity getEntity(MinecraftServer server,  ICommandSender sender,  java.lang.String target)  throws EntityNotFoundException,  CommandException`
  - throws: EntityNotFoundException
  - throws: CommandException
- `public static <T extends Entity> T getEntity(MinecraftServer server,  ICommandSender sender,  java.lang.String target,  java.lang.Class<? extends T> targetClass)  throws EntityNotFoundException,  CommandException`
  - throws: EntityNotFoundException
  - throws: CommandException
- `public static java.util.List<Entity> getEntityList(MinecraftServer server,  ICommandSender sender,  java.lang.String target)  throws EntityNotFoundException,  CommandException`
  - throws: EntityNotFoundException
  - throws: CommandException
- `public static java.lang.String getPlayerName(MinecraftServer server,  ICommandSender sender,  java.lang.String target)  throws PlayerNotFoundException,  CommandException`
  - throws: PlayerNotFoundException
  - throws: CommandException
- `public static java.lang.String getEntityName(MinecraftServer server,  ICommandSender sender,  java.lang.String target)  throws EntityNotFoundException,  CommandException`
  - throws: EntityNotFoundException
  - throws: CommandException
- `public static ITextComponent getChatComponentFromNthArg(ICommandSender sender,  java.lang.String[] args,  int index)  throws CommandException,  PlayerNotFoundException`
  - throws: CommandException
  - throws: PlayerNotFoundException
- `public static ITextComponent getChatComponentFromNthArg(ICommandSender sender,  java.lang.String[] args,  int index,  boolean p_147176_3_)  throws PlayerNotFoundException,  CommandException`
  - throws: PlayerNotFoundException
  - throws: CommandException
- `public static java.lang.String buildString(java.lang.String[] args,  int startPos)`
- `public static CommandBase.CoordinateArg parseCoordinate(double base,  java.lang.String selectorArg,  boolean centerBlock)  throws NumberInvalidException`
  - throws: NumberInvalidException
- `public static CommandBase.CoordinateArg parseCoordinate(double base,  java.lang.String selectorArg,  int min,  int max,  boolean centerBlock)  throws NumberInvalidException`
  - throws: NumberInvalidException
- `public static double parseDouble(double base,  java.lang.String input,  boolean centerBlock)  throws NumberInvalidException`
  - throws: NumberInvalidException
- `public static double parseDouble(double base,  java.lang.String input,  int min,  int max,  boolean centerBlock)  throws NumberInvalidException`
  - throws: NumberInvalidException
- `public static Item getItemByText(ICommandSender sender,  java.lang.String id)  throws NumberInvalidException`
  - throws: NumberInvalidException
- `public static Block getBlockByText(ICommandSender sender,  java.lang.String id)  throws NumberInvalidException`
  - throws: NumberInvalidException
- `public static IBlockState convertArgToBlockState(Block p_190794_0_,  java.lang.String p_190794_1_)  throws NumberInvalidException,  InvalidBlockStateException`
  - throws: NumberInvalidException
  - throws: InvalidBlockStateException
- `public static <any> convertArgToBlockStatePredicate(Block p_190791_0_,  java.lang.String p_190791_1_)  throws InvalidBlockStateException`
  - throws: InvalidBlockStateException
- `public static java.lang.String joinNiceString(java.lang.Object[] elements)`
- `public static ITextComponent join(java.util.List<ITextComponent> components)`
- `public static java.lang.String joinNiceStringFromCollection(java.util.Collection<java.lang.String> strings)`
- `public static java.util.List<java.lang.String> getTabCompletionCoordinate(java.lang.String[] inputArgs,  int index,  BlockPos pos)`
- `public static java.util.List<java.lang.String> getTabCompletionCoordinateXZ(java.lang.String[] inputArgs,  int index,  BlockPos lookedPos)`
- `public static boolean doesStringStartWith(java.lang.String original,  java.lang.String region)`
- `public static java.util.List<java.lang.String> getListOfStringsMatchingLastWord(java.lang.String[] args,  java.lang.String... possibilities)`
- `public static java.util.List<java.lang.String> getListOfStringsMatchingLastWord(java.lang.String[] inputArgs,  java.util.Collection<?> possibleCompletions)`
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`
- `public static void notifyCommandListener(ICommandSender sender,  ICommand command,  java.lang.String translationKey,  java.lang.Object... translationArgs)`
- `public static void notifyCommandListener(ICommandSender sender,  ICommand command,  int flags,  java.lang.String translationKey,  java.lang.Object... translationArgs)`
- `public static void setCommandListener(ICommandListener listener)`
- `public int compareTo(ICommand p_compareTo_1_)`

### Inherited methods
- from `net.minecraft.command.ICommand`: `execute`, `getName`, `getUsage`

## CommandBase.CoordinateArg

*class* `net.minecraft.command.CommandBase.CoordinateArg`

Enclosing class: CommandBase

### Methods
- `public double getResult()`
- `public double getAmount()`
- `public boolean isRelative()`

## CommandBlockData

*class* `net.minecraft.command.CommandBlockData`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandClearInventory

*class* `net.minecraft.command.CommandClearInventory`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public int getRequiredPermissionLevel()`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandClone

*class* `net.minecraft.command.CommandClone`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandCompare

*class* `net.minecraft.command.CommandCompare`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandDebug

*class* `net.minecraft.command.CommandDebug`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandDefaultGameMode

*class* `net.minecraft.command.CommandDefaultGameMode`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `protected void setDefaultGameType(GameType gameType,  MinecraftServer server)`

### Inherited methods
- from `net.minecraft.command.CommandGameMode`: `getGameModeFromCommand`, `getRequiredPermissionLevel`, `getTabCompletions`, `isUsernameIndex`
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandDifficulty

*class* `net.minecraft.command.CommandDifficulty`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `protected EnumDifficulty getDifficultyFromCommand(java.lang.String difficultyString)  throws CommandException,  NumberInvalidException`
  - throws: CommandException
  - throws: NumberInvalidException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandEffect

*class* `net.minecraft.command.CommandEffect`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandEnchant

*class* `net.minecraft.command.CommandEnchant`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandEntityData

*class* `net.minecraft.command.CommandEntityData`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `getTabCompletions`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandException

*class* `net.minecraft.command.CommandException`

All Implemented Interfaces: java.io.Serializable

### Methods
- `public java.lang.Object[] getErrorObjects()`
- `public java.lang.Throwable fillInStackTrace()`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## CommandExecuteAt

*class* `net.minecraft.command.CommandExecuteAt`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandFill

*class* `net.minecraft.command.CommandFill`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandFunction

*class* `net.minecraft.command.CommandFunction`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandGameMode

*class* `net.minecraft.command.CommandGameMode`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `protected GameType getGameModeFromCommand(ICommandSender sender,  java.lang.String gameModeString)  throws CommandException,  NumberInvalidException`
  - throws: CommandException
  - throws: NumberInvalidException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandGameRule

*class* `net.minecraft.command.CommandGameRule`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public static void notifyGameRuleChange(GameRules rules,  java.lang.String p_184898_1_,  MinecraftServer server)`
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandGive

*class* `net.minecraft.command.CommandGive`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandHandler

*class* `net.minecraft.command.CommandHandler`

All Implemented Interfaces: ICommandManager

### Methods
- `public int executeCommand(ICommandSender sender,  java.lang.String rawCommand)`
- `protected boolean tryExecute(ICommandSender sender,  java.lang.String[] args,  ICommand command,  java.lang.String input)`
- `protected abstract MinecraftServer getServer()`
- `public ICommand registerCommand(ICommand command)`
- `public java.util.List<java.lang.String> getTabCompletions(ICommandSender sender,  java.lang.String input,  BlockPos pos)`
- `public java.util.List<ICommand> getPossibleCommands(ICommandSender sender)`
- `public java.util.Map<java.lang.String,ICommand> getCommands()`

## CommandHelp

*class* `net.minecraft.command.CommandHelp`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public java.util.List<java.lang.String> getAliases()`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `protected java.util.List<ICommand> getSortedPossibleCommands(ICommandSender sender,  MinecraftServer server)`
- `protected java.util.Map<java.lang.String,ICommand> getCommandMap(MinecraftServer server)`
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandKill

*class* `net.minecraft.command.CommandKill`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandLocate

*class* `net.minecraft.command.CommandLocate`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandNotFoundException

*class* `net.minecraft.command.CommandNotFoundException`

All Implemented Interfaces: java.io.Serializable

### Methods
- `public java.lang.Throwable fillInStackTrace()`

### Inherited methods
- from `net.minecraft.command.CommandException`: `getErrorObjects`
- from `java.lang.Throwable`: `addSuppressed`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## CommandParticle

*class* `net.minecraft.command.CommandParticle`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandPlaySound

*class* `net.minecraft.command.CommandPlaySound`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandReload

*class* `net.minecraft.command.CommandReload`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `getTabCompletions`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandReplaceItem

*class* `net.minecraft.command.CommandReplaceItem`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandResultStats

*class* `net.minecraft.command.CommandResultStats`

### Methods
- `public void setCommandStatForSender(MinecraftServer server,  ICommandSender sender,  CommandResultStats.Type typeIn,  int p_184932_4_)`
- `public void readStatsFromNBT(NBTTagCompound tagcompound)`
- `public void writeStatsToNBT(NBTTagCompound tagcompound)`
- `public static void setScoreBoardStat(CommandResultStats stats,  CommandResultStats.Type resultType,  java.lang.String entityID,  java.lang.String objectiveName)`
- `public void addAllStats(CommandResultStats resultStatsIn)`

## CommandResultStats.Type

*enum* `net.minecraft.command.CommandResultStats.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<CommandResultStats.Type>

Enclosing class: CommandResultStats

### Fields
- `public static final CommandResultStats.Type SUCCESS_COUNT`
- `public static final CommandResultStats.Type AFFECTED_BLOCKS`
- `public static final CommandResultStats.Type AFFECTED_ENTITIES`
- `public static final CommandResultStats.Type AFFECTED_ITEMS`
- `public static final CommandResultStats.Type QUERY_RESULT`

### Methods
- `public static CommandResultStats.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (CommandResultStats.Type c : CommandResultStats.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static CommandResultStats.Type valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public int getTypeID()`
- `public java.lang.String getTypeName()`
- `public static java.lang.String[] getTypeNames()`
- `public static CommandResultStats.Type getTypeByName(java.lang.String name)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## CommandSenderWrapper

*class* `net.minecraft.command.CommandSenderWrapper`

All Implemented Interfaces: ICommandSender

### Methods
- `public static CommandSenderWrapper create(ICommandSender sender)`
- `public CommandSenderWrapper withEntity(Entity entityIn,  Vec3d p_193997_2_)`
- `public CommandSenderWrapper withPermissionLevel(int level)`
- `public CommandSenderWrapper withSendCommandFeedback(boolean sendCommandFeedbackIn)`
- `public CommandSenderWrapper computePositionVector()`
- `public java.lang.String getName()`
- `public ITextComponent getDisplayName()`
- `public void sendMessage(ITextComponent component)`
- `public boolean canUseCommand(int permLevel,  java.lang.String commandName)`
- `public BlockPos getPosition()`
- `public Vec3d getPositionVector()`
- `public World getEntityWorld()`
- `public Entity getCommandSenderEntity()`
- `public boolean sendCommandFeedback()`
- `public void setCommandStat(CommandResultStats.Type type,  int amount)`
- `public MinecraftServer getServer()`

## CommandServerKick

*class* `net.minecraft.command.CommandServerKick`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandSetPlayerTimeout

*class* `net.minecraft.command.CommandSetPlayerTimeout`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `getTabCompletions`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandSetSpawnpoint

*class* `net.minecraft.command.CommandSetSpawnpoint`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandShowSeed

*class* `net.minecraft.command.CommandShowSeed`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public boolean checkPermission(MinecraftServer server,  ICommandSender sender)`
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `getTabCompletions`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandSpreadPlayers

*class* `net.minecraft.command.CommandSpreadPlayers`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandStats

*class* `net.minecraft.command.CommandStats`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `protected java.util.List<java.lang.String> getObjectiveNames(MinecraftServer server)`
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandStopSound

*class* `net.minecraft.command.CommandStopSound`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandTime

*class* `net.minecraft.command.CommandTime`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `protected void setAllWorldTimes(MinecraftServer server,  int time)`
- `protected void incrementAllWorldTimes(MinecraftServer server,  int amount)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandTitle

*class* `net.minecraft.command.CommandTitle`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandToggleDownfall

*class* `net.minecraft.command.CommandToggleDownfall`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `protected void toggleRainfall(MinecraftServer server)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `getTabCompletions`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandTP

*class* `net.minecraft.command.CommandTP`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandTrigger

*class* `net.minecraft.command.CommandTrigger`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandWeather

*class* `net.minecraft.command.CommandWeather`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandWorldBorder

*class* `net.minecraft.command.CommandWorldBorder`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `protected WorldBorder getWorldBorder(MinecraftServer server)`
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandXP

*class* `net.minecraft.command.CommandXP`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## EntityNotFoundException

*class* `net.minecraft.command.EntityNotFoundException`

All Implemented Interfaces: java.io.Serializable

### Methods
- `public java.lang.Throwable fillInStackTrace()`

### Inherited methods
- from `net.minecraft.command.CommandException`: `getErrorObjects`
- from `java.lang.Throwable`: `addSuppressed`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## EntitySelector

*class* `net.minecraft.command.EntitySelector`

### Methods
- `public static java.lang.String addArgument(java.lang.String argument)`
- `public static EntityPlayerMP matchOnePlayer(ICommandSender sender,  java.lang.String token)  throws CommandException`
  - throws: CommandException
- `public static java.util.List<EntityPlayerMP> getPlayers(ICommandSender sender,  java.lang.String token)  throws CommandException`
  - throws: CommandException
- `public static <T extends Entity> T matchOneEntity(ICommandSender sender,  java.lang.String token,  java.lang.Class<? extends T> targetClass)  throws CommandException`
  - throws: CommandException
- `public static ITextComponent matchEntitiesToTextComponent(ICommandSender sender,  java.lang.String token)  throws CommandException`
  - throws: CommandException
- `public static <T extends Entity> java.util.List<T> matchEntities(ICommandSender sender,  java.lang.String token,  java.lang.Class<? extends T> targetClass)  throws CommandException`
  - throws: CommandException
- `public static <T extends Entity> java.util.List<T> matchEntitiesDefault(ICommandSender sender,  java.lang.String token,  java.lang.Class<? extends T> targetClass)  throws CommandException`
  - throws: CommandException
- `public static java.util.Map<java.lang.String,java.lang.Integer> getScoreMap(java.util.Map<java.lang.String,java.lang.String> params)`
- `public static boolean matchesMultiplePlayers(java.lang.String selectorStr)  throws CommandException`
  - throws: CommandException
- `public static boolean matchesMultiplePlayersDefault(java.lang.String selectorStr)  throws CommandException`
  - throws: CommandException
- `public static boolean isSelector(java.lang.String selectorStr)`
- `public static boolean isSelectorDefault(java.lang.String selectorStr)`

## FunctionObject

*class* `net.minecraft.command.FunctionObject`

### Methods
- `public FunctionObject.Entry[] getEntries()`
- `public static FunctionObject create(FunctionManager functionManagerIn,  java.util.List<java.lang.String> commands)`

## FunctionObject.CacheableFunction

*class* `net.minecraft.command.FunctionObject.CacheableFunction`

Enclosing class: FunctionObject

### Fields
- `public static final FunctionObject.CacheableFunction EMPTY`

### Methods
- `public FunctionObject get(FunctionManager functionManagerIn)`
- `public java.lang.String toString()`

## FunctionObject.CommandEntry

*class* `net.minecraft.command.FunctionObject.CommandEntry`

All Implemented Interfaces: FunctionObject.Entry

Enclosing class: FunctionObject

### Methods
- `public void execute(FunctionManager functionManagerIn,  ICommandSender sender,  java.util.ArrayDeque<FunctionManager.QueuedCommand> commandQueue,  int maxCommandChainLength)`
- `public java.lang.String toString()`

## FunctionObject.Entry

*interface* `net.minecraft.command.FunctionObject.Entry`

Enclosing class: FunctionObject

### Methods
- `void execute(FunctionManager functionManagerIn,  ICommandSender sender,  java.util.ArrayDeque<FunctionManager.QueuedCommand> commandQueue,  int maxCommandChainLength)`

## FunctionObject.FunctionEntry

*class* `net.minecraft.command.FunctionObject.FunctionEntry`

All Implemented Interfaces: FunctionObject.Entry

Enclosing class: FunctionObject

### Methods
- `public void execute(FunctionManager functionManagerIn,  ICommandSender sender,  java.util.ArrayDeque<FunctionManager.QueuedCommand> commandQueue,  int maxCommandChainLength)`
- `public java.lang.String toString()`

## ICommand

*interface* `net.minecraft.command.ICommand`

All Superinterfaces: java.lang.Comparable<ICommand>

### Methods
- `java.lang.String getName()`
- `java.lang.String getUsage(ICommandSender sender)`
- `java.util.List<java.lang.String> getAliases()`
- `void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `boolean checkPermission(MinecraftServer server,  ICommandSender sender)`
- `java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `boolean isUsernameIndex(java.lang.String[] args,  int index)`

### Inherited methods
- from `java.lang.Comparable`: `compareTo`

## ICommandListener

*interface* `net.minecraft.command.ICommandListener`

### Methods
- `void notifyListener(ICommandSender sender,  ICommand command,  int flags,  java.lang.String translationKey,  java.lang.Object... translationArgs)`

## ICommandManager

*interface* `net.minecraft.command.ICommandManager`

### Methods
- `int executeCommand(ICommandSender sender,  java.lang.String rawCommand)`
- `java.util.List<java.lang.String> getTabCompletions(ICommandSender sender,  java.lang.String input,  BlockPos pos)`
- `java.util.List<ICommand> getPossibleCommands(ICommandSender sender)`
- `java.util.Map<java.lang.String,ICommand> getCommands()`

## ICommandSender

*interface* `net.minecraft.command.ICommandSender`

### Methods
- `java.lang.String getName()`
- `default ITextComponent getDisplayName()`
- `default void sendMessage(ITextComponent component)`
- `boolean canUseCommand(int permLevel,  java.lang.String commandName)`
- `default BlockPos getPosition()`
- `default Vec3d getPositionVector()`
- `World getEntityWorld()`
- `default Entity getCommandSenderEntity()`
- `default boolean sendCommandFeedback()`
- `default void setCommandStat(CommandResultStats.Type type,  int amount)`
- `MinecraftServer getServer()`

## InvalidBlockStateException

*class* `net.minecraft.command.InvalidBlockStateException`

All Implemented Interfaces: java.io.Serializable

### Methods
- `public java.lang.Throwable fillInStackTrace()`

### Inherited methods
- from `net.minecraft.command.CommandException`: `getErrorObjects`
- from `java.lang.Throwable`: `addSuppressed`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## NumberInvalidException

*class* `net.minecraft.command.NumberInvalidException`

All Implemented Interfaces: java.io.Serializable

### Methods
- `public java.lang.Throwable fillInStackTrace()`

### Inherited methods
- from `net.minecraft.command.CommandException`: `getErrorObjects`
- from `java.lang.Throwable`: `addSuppressed`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## PlayerNotFoundException

*class* `net.minecraft.command.PlayerNotFoundException`

All Implemented Interfaces: java.io.Serializable

### Methods
- `public java.lang.Throwable fillInStackTrace()`

### Inherited methods
- from `net.minecraft.command.CommandException`: `getErrorObjects`
- from `java.lang.Throwable`: `addSuppressed`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## RecipeCommand

*class* `net.minecraft.command.RecipeCommand`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## ServerCommandManager

*class* `net.minecraft.command.ServerCommandManager`

All Implemented Interfaces: ICommandListener, ICommandManager

### Methods
- `public void notifyListener(ICommandSender sender,  ICommand command,  int flags,  java.lang.String translationKey,  java.lang.Object... translationArgs)`
- `protected MinecraftServer getServer()`

### Inherited methods
- from `net.minecraft.command.CommandHandler`: `executeCommand`, `getCommands`, `getPossibleCommands`, `getTabCompletions`, `registerCommand`, `tryExecute`

## SyntaxErrorException

*class* `net.minecraft.command.SyntaxErrorException`

All Implemented Interfaces: java.io.Serializable

### Methods
- `public java.lang.Throwable fillInStackTrace()`

### Inherited methods
- from `net.minecraft.command.CommandException`: `getErrorObjects`
- from `java.lang.Throwable`: `addSuppressed`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## WrongUsageException

*class* `net.minecraft.command.WrongUsageException`

All Implemented Interfaces: java.io.Serializable

### Methods
- `public java.lang.Throwable fillInStackTrace()`

### Inherited methods
- from `net.minecraft.command.CommandException`: `getErrorObjects`
- from `java.lang.Throwable`: `addSuppressed`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`
