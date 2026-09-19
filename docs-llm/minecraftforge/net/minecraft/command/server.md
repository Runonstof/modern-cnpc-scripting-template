# net.minecraft.command.server

- [CommandBanIp](#commandbanip)
- [CommandBanPlayer](#commandbanplayer)
- [CommandBroadcast](#commandbroadcast)
- [CommandDeOp](#commanddeop)
- [CommandEmote](#commandemote)
- [CommandListBans](#commandlistbans)
- [CommandListPlayers](#commandlistplayers)
- [CommandMessage](#commandmessage)
- [CommandMessageRaw](#commandmessageraw)
- [CommandOp](#commandop)
- [CommandPardonIp](#commandpardonip)
- [CommandPardonPlayer](#commandpardonplayer)
- [CommandPublishLocalServer](#commandpublishlocalserver)
- [CommandSaveAll](#commandsaveall)
- [CommandSaveOff](#commandsaveoff)
- [CommandSaveOn](#commandsaveon)
- [CommandScoreboard](#commandscoreboard)
- [CommandSetBlock](#commandsetblock)
- [CommandSetDefaultSpawnpoint](#commandsetdefaultspawnpoint)
- [CommandStop](#commandstop)
- [CommandSummon](#commandsummon)
- [CommandTeleport](#commandteleport)
- [CommandTestFor](#commandtestfor)
- [CommandTestForBlock](#commandtestforblock)
- [CommandWhitelist](#commandwhitelist)
## CommandBanIp

*class* `net.minecraft.command.server.CommandBanIp`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Fields
- `public static final java.util.regex.Pattern IP_PATTERN`

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public boolean checkPermission(MinecraftServer server,  ICommandSender sender)`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `protected void banIp(MinecraftServer server,  ICommandSender sender,  java.lang.String ipAddress,  java.lang.String banReason)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandBanPlayer

*class* `net.minecraft.command.server.CommandBanPlayer`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public boolean checkPermission(MinecraftServer server,  ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandBroadcast

*class* `net.minecraft.command.server.CommandBroadcast`

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

## CommandDeOp

*class* `net.minecraft.command.server.CommandDeOp`

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

## CommandEmote

*class* `net.minecraft.command.server.CommandEmote`

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

## CommandListBans

*class* `net.minecraft.command.server.CommandListBans`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public boolean checkPermission(MinecraftServer server,  ICommandSender sender)`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandListPlayers

*class* `net.minecraft.command.server.CommandListPlayers`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `getTabCompletions`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandMessage

*class* `net.minecraft.command.server.CommandMessage`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.util.List<java.lang.String> getAliases()`
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandMessageRaw

*class* `net.minecraft.command.server.CommandMessageRaw`

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

## CommandOp

*class* `net.minecraft.command.server.CommandOp`

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

## CommandPardonIp

*class* `net.minecraft.command.server.CommandPardonIp`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public boolean checkPermission(MinecraftServer server,  ICommandSender sender)`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandPardonPlayer

*class* `net.minecraft.command.server.CommandPardonPlayer`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public boolean checkPermission(MinecraftServer server,  ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandPublishLocalServer

*class* `net.minecraft.command.server.CommandPublishLocalServer`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getRequiredPermissionLevel`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `getTabCompletions`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandSaveAll

*class* `net.minecraft.command.server.CommandSaveAll`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getRequiredPermissionLevel`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandSaveOff

*class* `net.minecraft.command.server.CommandSaveOff`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getRequiredPermissionLevel`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `getTabCompletions`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandSaveOn

*class* `net.minecraft.command.server.CommandSaveOn`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getRequiredPermissionLevel`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `getTabCompletions`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandScoreboard

*class* `net.minecraft.command.server.CommandScoreboard`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public int getRequiredPermissionLevel()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException
- `protected Scoreboard getScoreboard(MinecraftServer server)`
- `protected ScoreObjective convertToObjective(java.lang.String name,  boolean forWrite,  MinecraftServer server)  throws CommandException`
  - throws: CommandException
- `protected ScorePlayerTeam convertToTeam(java.lang.String name,  MinecraftServer server)  throws CommandException`
  - throws: CommandException
- `protected void addObjective(ICommandSender sender,  java.lang.String[] commandArgs,  int argStartIndex,  MinecraftServer server)  throws CommandException`
  - throws: CommandException
- `protected void addTeam(ICommandSender sender,  java.lang.String[] args,  int startIndex,  MinecraftServer server)  throws CommandException`
  - throws: CommandException
- `protected void setTeamOption(ICommandSender sender,  java.lang.String[] args,  int startIndex,  MinecraftServer server)  throws CommandException`
  - throws: CommandException
- `protected void removeTeam(ICommandSender sender,  java.lang.String[] args,  int startIndex,  MinecraftServer server)  throws CommandException`
  - throws: CommandException
- `protected void listTeams(ICommandSender sender,  java.lang.String[] args,  int startIndex,  MinecraftServer server)  throws CommandException`
  - throws: CommandException
- `protected void joinTeam(ICommandSender sender,  java.lang.String[] args,  int startIndex,  MinecraftServer server)  throws CommandException`
  - throws: CommandException
- `protected void leaveTeam(ICommandSender sender,  java.lang.String[] args,  int startIndex,  MinecraftServer server)  throws CommandException`
  - throws: CommandException
- `protected void emptyTeam(ICommandSender sender,  java.lang.String[] args,  int startIndex,  MinecraftServer server)  throws CommandException`
  - throws: CommandException
- `protected void removeObjective(ICommandSender sender,  java.lang.String name,  MinecraftServer server)  throws CommandException`
  - throws: CommandException
- `protected void listObjectives(ICommandSender sender,  MinecraftServer server)  throws CommandException`
  - throws: CommandException
- `protected void setDisplayObjective(ICommandSender sender,  java.lang.String[] args,  int startIndex,  MinecraftServer server)  throws CommandException`
  - throws: CommandException
- `protected void listPlayers(ICommandSender sender,  java.lang.String[] args,  int startIndex,  MinecraftServer server)  throws CommandException`
  - throws: CommandException
- `protected void addPlayerScore(ICommandSender sender,  java.lang.String[] args,  int startIndex,  MinecraftServer server)  throws CommandException`
  - throws: CommandException
- `protected void resetPlayerScore(ICommandSender sender,  java.lang.String[] args,  int startIndex,  MinecraftServer server)  throws CommandException`
  - throws: CommandException
- `protected void enablePlayerTrigger(ICommandSender sender,  java.lang.String[] args,  int startIndex,  MinecraftServer server)  throws CommandException`
  - throws: CommandException
- `protected void testPlayerScore(ICommandSender sender,  java.lang.String[] args,  int startIndex,  MinecraftServer server)  throws CommandException`
  - throws: CommandException
- `protected void applyPlayerOperation(ICommandSender sender,  java.lang.String[] args,  int startIndex,  MinecraftServer server)  throws CommandException`
  - throws: CommandException
- `protected void applyPlayerTag(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  int startIndex)  throws CommandException`
  - throws: CommandException
- `public java.util.List<java.lang.String> getTabCompletions(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args,  BlockPos targetPos)`
- `protected java.util.List<java.lang.String> getObjectiveNames(boolean writableOnly,  MinecraftServer server)`
- `protected java.util.List<java.lang.String> getTriggerNames(MinecraftServer server)`
- `public boolean isUsernameIndex(java.lang.String[] args,  int index)`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandSetBlock

*class* `net.minecraft.command.server.CommandSetBlock`

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

## CommandSetDefaultSpawnpoint

*class* `net.minecraft.command.server.CommandSetDefaultSpawnpoint`

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

## CommandStop

*class* `net.minecraft.command.server.CommandStop`

All Implemented Interfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `public java.lang.String getName()`
- `public java.lang.String getUsage(ICommandSender sender)`
- `public void execute(MinecraftServer server,  ICommandSender sender,  java.lang.String[] args)  throws CommandException`
  - throws: CommandException

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getRequiredPermissionLevel`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `getTabCompletions`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`, `toSyntaxException`

## CommandSummon

*class* `net.minecraft.command.server.CommandSummon`

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

## CommandTeleport

*class* `net.minecraft.command.server.CommandTeleport`

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

## CommandTestFor

*class* `net.minecraft.command.server.CommandTestFor`

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

## CommandTestForBlock

*class* `net.minecraft.command.server.CommandTestForBlock`

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

## CommandWhitelist

*class* `net.minecraft.command.server.CommandWhitelist`

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
