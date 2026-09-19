# net.minecraftforge.server.command

- [ChunkGenWorker](#chunkgenworker)
- [CommandDimensions](#commanddimensions)
- [CommandSetDimension](#commandsetdimension)
- [CommandTreeBase](#commandtreebase)
- [CommandTreeHelp](#commandtreehelp)
- [CommandTreeHelp.HelpSubCommand](#commandtreehelp.helpsubcommand)
- [ForgeCommand](#forgecommand)
- [TextComponentHelper](#textcomponenthelper)
## ChunkGenWorker

*class* `net.minecraftforge.server.command.ChunkGenWorker`

All Implemented Interfaces: WorldWorkerManager.IWorker

### Fields
- `protected final BlockPos start`
- `protected final int total`

### Methods
- `protected java.util.Queue<BlockPos> buildQueue()`
- `@Deprecated public TextComponentTranslation getStartMessage()` (deprecated)
  Deprecated.
- `public TextComponentBase getStartMessage(ICommandSender sender)`
- `public boolean hasWork()`
- `public boolean doWork()`
  Description copied from interface: WorldWorkerManager.IWorker
  Perform a task, returning true from this will have the manager call this function again this tick if there is time left.
   Returning false will skip calling this worker until next tick.

### Inherited methods
- from `net.minecraftforge.common.WorldWorkerManager.IWorker`: `work`

## CommandDimensions

*class* `net.minecraftforge.server.command.CommandDimensions`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public int getRequiredPermissionLevel()`
- `public boolean checkPermission(MinecraftServer server,  ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `getTabCompletions`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandSetDimension

*class* `net.minecraftforge.server.command.CommandSetDimension`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public java.util.List<java.lang.String> getAliases()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `public int getRequiredPermissionLevel()`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandTreeBase

*class* `net.minecraftforge.server.command.CommandTreeBase`

Base class for commands that has subcommands.

 E.g. /team settings set [value]
 settings is subcommand of team and set is subcommand of settings

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public void addSubcommand(ICommand command)`
- `public java.util.Collection<ICommand> getSubCommands()`
- `public ICommand getSubCommand(java.lang.String command)`
- `public java.util.Map<java.lang.String,ICommand> getCommandMap()`
- `public java.util.List<ICommand> getSortedCommandList()`
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos pos)`
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getRequiredPermissionLevel`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`
- from `net.minecraft.command.ICommand`: `getName`, `getUsage`

## CommandTreeHelp

*class* `net.minecraftforge.server.command.CommandTreeHelp`

Add help for parent and all its children.
 Must be added to parent after all other commands.

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getName()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException

### Inherited methods
- from `net.minecraftforge.server.command.CommandTreeBase`: `addSubcommand`, `getCommandMap`, `getSortedCommandList`, `getSubCommand`, `getSubCommands`, `getTabCompletions`, `isUsernameIndex`
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandTreeHelp.HelpSubCommand

*class* `net.minecraftforge.server.command.CommandTreeHelp.HelpSubCommand`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

Enclosing class: CommandTreeHelp

### Methods
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getName()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public boolean checkPermission(MinecraftServer server,  ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `getTabCompletions`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## ForgeCommand

*class* `net.minecraftforge.server.command.ForgeCommand`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public void addSubcommand(ICommand command)`
- `public int getRequiredPermissionLevel()`
- `public boolean checkPermission(MinecraftServer server,  ICommandSender sender)`
- `public java.lang.String getUsage(ICommandSender icommandsender)`

### Inherited methods
- from `net.minecraftforge.server.command.CommandTreeBase`: `execute`, `getCommandMap`, `getSortedCommandList`, `getSubCommand`, `getSubCommands`, `getTabCompletions`, `isUsernameIndex`
- from `net.minecraft.command.CommandBase`: `buildString`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## TextComponentHelper

*class* `net.minecraftforge.server.command.TextComponentHelper`

### Methods
- `public static TextComponentBase createComponentTranslation(ICommandSender sender,  java.lang.String translation,  java.lang.Object... args)`
  Detects when sending to a vanilla client and falls back to sending english,
   since they don't have the lang data necessary to translate on the client.
