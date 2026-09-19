# noppes.npcs.api

- [CommandNoppesBase](#commandnoppesbase)
- [CommandNoppesBase.SubCommand](#commandnoppesbase.subcommand)
- [CustomNPCsException](#customnpcsexception)
- [IContainer](#icontainer)
- [IContainerCustomChest](#icontainercustomchest)
- [IDamageSource](#idamagesource)
- [IDimension](#idimension)
- [INbt](#inbt)
- [IPos](#ipos)
- [IRayTrace](#iraytrace)
- [IScoreboard](#iscoreboard)
- [IScoreboardObjective](#iscoreboardobjective)
- [IScoreboardScore](#iscoreboardscore)
- [IScoreboardTeam](#iscoreboardteam)
- [ITimers](#itimers)
- [IWorld](#iworld)
- [NpcAPI](#npcapi)
## CommandNoppesBase

*class* `noppes.npcs.api.CommandNoppesBase`

All Implemented Interfaces: java.lang.Comparable<net.minecraft.command.ICommand>, net.minecraft.command.ICommand

### Fields
- `public java.util.Map<java.lang.String,​java.lang.reflect.Method> subcommands`

### Methods
- `public void execute​(net.minecraft.server.MinecraftServer server, net.minecraft.command.ICommandSender sender, java.lang.String[] args)  throws net.minecraft.command.CommandException`
  - throws: net.minecraft.command.CommandException
- `public java.lang.String getUsage​(net.minecraft.command.ICommandSender sender)`
- `public abstract java.lang.String getDescription()`
- `public java.lang.String getUsage()`
  - returns: Should return a string in the format of [arg4] where <> is a required parameter and [] optional
- `public boolean runSubCommands()`
- `public void executeSub​(net.minecraft.server.MinecraftServer server, net.minecraft.command.ICommandSender sender, java.lang.String command, java.lang.String[] args)  throws net.minecraft.command.CommandException`
  - throws: net.minecraft.command.CommandException
- `public void canRun​(net.minecraft.server.MinecraftServer server, net.minecraft.command.ICommandSender sender, java.lang.String usage, java.lang.String[] args)  throws net.minecraft.command.CommandException`
  - throws: net.minecraft.command.CommandException
- `public int getRequiredPermissionLevel()`

### Inherited methods
- from `net.minecraft.command.CommandBase`: `buildString`, `checkPermission`, `compareTo`, `convertArgToBlockState`, `convertArgToBlockStatePredicate`, `doesStringStartWith`, `entityToNBT`, `getAliases`, `getBlockByText`, `getChatComponentFromNthArg`, `getChatComponentFromNthArg`, `getCommandSenderAsPlayer`, `getEntity`, `getEntity`, `getEntityList`, `getEntityName`, `getItemByText`, `getListOfStringsMatchingLastWord`, `getListOfStringsMatchingLastWord`, `getPlayer`, `getPlayerName`, `getPlayers`, `getTabCompletionCoordinate`, `getTabCompletionCoordinateXZ`, `getTabCompletions`, `isUsernameIndex`, `join`, `joinNiceString`, `joinNiceStringFromCollection`, `notifyCommandListener`, `notifyCommandListener`, `parseBlockPos`, `parseBoolean`, `parseCoordinate`, `parseCoordinate`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseDouble`, `parseInt`, `parseInt`, `parseInt`, `parseLong`, `parseLong`, `setCommandListener`
- from `net.minecraft.command.ICommand`: `getName`

## CommandNoppesBase.SubCommand

*annotation* `noppes.npcs.api.CommandNoppesBase.SubCommand`

Enclosing class: CommandNoppesBase

## CustomNPCsException

*class* `noppes.npcs.api.CustomNPCsException`

All Implemented Interfaces: java.io.Serializable

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## IContainer

*interface* `noppes.npcs.api.IContainer`

### Methods
- `int getSize()`
- `IItemStack getSlot​(int slot)`
- `void setSlot​(int slot, IItemStack item)`
- `net.minecraft.inventory.IInventory getMCInventory()`
  Expert users only
  - returns: Returns minecrafts container
- `net.minecraft.inventory.Container getMCContainer()`
  Expert users only
  - returns: Returns minecrafts container
- `int count​(IItemStack item, boolean ignoreDamage, boolean ignoreNBT)`
  - param: item -
  - param: ignoreDamage - Whether to ignore the item_damage value when comparing
  - param: ignoreNBT - Whether to ignore NBT when comparing
- `IItemStack[] getItems()`

## IContainerCustomChest

*interface* `noppes.npcs.api.IContainerCustomChest`

All Superinterfaces: IContainer

### Methods
- `void setName​(java.lang.String name)`
- `java.lang.String getName()`

### Inherited methods
- from `noppes.npcs.api.IContainer`: `count`, `getItems`, `getMCContainer`, `getMCInventory`, `getSize`, `getSlot`, `setSlot`

## IDamageSource

*interface* `noppes.npcs.api.IDamageSource`

### Methods
- `java.lang.String getType()`
- `boolean isUnblockable()`
- `boolean isProjectile()`
- `IEntity getTrueSource()`
- `IEntity getImmediateSource()`
- `net.minecraft.util.DamageSource getMCDamageSource()`

## IDimension

*interface* `noppes.npcs.api.IDimension`

### Methods
- `int getId()`
- `java.lang.String getName()`
- `java.lang.String getSuffix()`

## INbt

*interface* `noppes.npcs.api.INbt`

### Methods
- `void remove​(java.lang.String key)`
- `boolean has​(java.lang.String key)`
- `boolean getBoolean​(java.lang.String key)`
- `void setBoolean​(java.lang.String key, boolean value)`
- `short getShort​(java.lang.String key)`
- `void setShort​(java.lang.String key, short value)`
- `int getInteger​(java.lang.String key)`
- `void setInteger​(java.lang.String key, int value)`
- `byte getByte​(java.lang.String key)`
- `void setByte​(java.lang.String key, byte value)`
- `long getLong​(java.lang.String key)`
- `void setLong​(java.lang.String key, long value)`
- `double getDouble​(java.lang.String key)`
- `void setDouble​(java.lang.String key, double value)`
- `float getFloat​(java.lang.String key)`
- `void setFloat​(java.lang.String key, float value)`
- `java.lang.String getString​(java.lang.String key)`
- `void setString​(java.lang.String key, java.lang.String value)`
- `byte[] getByteArray​(java.lang.String key)`
- `void setByteArray​(java.lang.String key, byte[] value)`
- `int[] getIntegerArray​(java.lang.String key)`
- `void setIntegerArray​(java.lang.String key, int[] value)`
- `java.lang.Object[] getList​(java.lang.String key, int type)`
  - param: key -
  - param: type - The Type of the list 3:Integer, 5:Float, 6:Double, 8:String, 10:INbt, 11:Integer[]
- `int getListType​(java.lang.String key)`
  - param: key -
  - returns: 3:Integer, 5:Float, 6:Double, 8:String, 10:INbt, 11:Integer[]
- `void setList​(java.lang.String key, java.lang.Object[] value)`
- `INbt getCompound​(java.lang.String key)`
- `void setCompound​(java.lang.String key, INbt value)`
- `java.lang.String[] getKeys()`
- `int getType​(java.lang.String key)`
  - param: key -
  - returns: 1:Byte, 2:Short 3:Integer, 4:Long, 5:Float, 6:Double, 7:Byte[], 8:String, 9:List, 10:INbt, 11:Integer[]
- `net.minecraft.nbt.NBTTagCompound getMCNBT()`
- `java.lang.String toJsonString()`
- `boolean isEqual​(INbt nbt)`
  Compares if two nbt tags are the same/contain the same data
- `void clear()`
  Clears all tags
- `void merge​(INbt nbt)`
  Merges two nbt tabs, note that nbt tags will be overwritten if they have the same keys

## IPos

*interface* `noppes.npcs.api.IPos`

All the methods in IPos create a new IPos object

### Methods
- `int getX()`
- `int getY()`
- `int getZ()`
- `IPos up()`
- `IPos up​(int n)`
- `IPos down()`
- `IPos down​(int n)`
- `IPos north()`
- `IPos north​(int n)`
- `IPos east()`
- `IPos east​(int n)`
- `IPos south()`
- `IPos south​(int n)`
- `IPos west()`
- `IPos west​(int n)`
- `IPos add​(int x, int y, int z)`
- `IPos add​(IPos pos)`
- `IPos subtract​(int x, int y, int z)`
- `IPos subtract​(IPos pos)`
- `double[] normalize()`
- `net.minecraft.util.math.BlockPos getMCBlockPos()`
- `IPos offset​(int direction)`
  - param: direction - SideType
- `IPos offset​(int direction, int n)`
  - param: direction - SideType
  - param: n - how many positions
- `double distanceTo​(IPos pos)`

## IRayTrace

*interface* `noppes.npcs.api.IRayTrace`

### Methods
- `IPos getPos()`
- `IBlock getBlock()`
- `int getSideHit()`

## IScoreboard

*interface* `noppes.npcs.api.IScoreboard`

### Methods
- `IScoreboardObjective[] getObjectives()`
- `IScoreboardObjective getObjective​(java.lang.String name)`
  - returns: Returns null if the objective is not found
- `boolean hasObjective​(java.lang.String objective)`
- `void removeObjective​(java.lang.String objective)`
- `IScoreboardObjective addObjective​(java.lang.String objective, java.lang.String criteria)`
  - param: objective - Scoreboard objective name (1-16 chars)
  - param: criteria - The criteria see http://minecraft.gamepedia.com/Scoreboard#Objectives
  - returns: Returns the created ScoreboardObjective
- `void setPlayerScore​(java.lang.String player, java.lang.String objective, int score, java.lang.String datatag)`
  - param: datatag - Can be left empty
- `int getPlayerScore​(java.lang.String player, java.lang.String objective, java.lang.String datatag)`
  - param: datatag - Can be left empty
- `boolean hasPlayerObjective​(java.lang.String player, java.lang.String objective, java.lang.String datatag)`
  - param: datatag - Can be left empty
- `void deletePlayerScore​(java.lang.String player, java.lang.String objective, java.lang.String datatag)`
  - param: datatag - Can be left empty
- `IScoreboardTeam[] getTeams()`
- `boolean hasTeam​(java.lang.String name)`
- `IScoreboardTeam addTeam​(java.lang.String name)`
- `IScoreboardTeam getTeam​(java.lang.String name)`
- `void removeTeam​(java.lang.String name)`
- `IScoreboardTeam getPlayerTeam​(java.lang.String player)`
  - param: player - the player whos team you want to get
  - returns: The players team
- `void removePlayerTeam​(java.lang.String player)`
  - param: player - The players who should be removed from his team
- `java.lang.String[] getPlayerList()`

## IScoreboardObjective

*interface* `noppes.npcs.api.IScoreboardObjective`

### Methods
- `java.lang.String getName()`
- `java.lang.String getDisplayName()`
- `void setDisplayName​(java.lang.String name)`
  - param: name - Name used for display (1-32 chars)
- `java.lang.String getCriteria()`
- `boolean isReadyOnly()`
  - returns: Return whether or not the objective value can be changed. E.g. player health can't be changed
- `IScoreboardScore[] getScores()`
- `IScoreboardScore getScore​(java.lang.String player)`
- `boolean hasScore​(java.lang.String player)`
- `IScoreboardScore createScore​(java.lang.String player)`
- `void removeScore​(java.lang.String player)`

## IScoreboardScore

*interface* `noppes.npcs.api.IScoreboardScore`

### Methods
- `int getValue()`
- `void setValue​(int val)`
- `java.lang.String getPlayerName()`

## IScoreboardTeam

*interface* `noppes.npcs.api.IScoreboardTeam`

### Methods
- `java.lang.String getName()`
- `java.lang.String getDisplayName()`
- `void setDisplayName​(java.lang.String name)`
  - param: name - Name used as display (1-32 chars)
- `void addPlayer​(java.lang.String player)`
- `boolean hasPlayer​(java.lang.String player)`
- `void removePlayer​(java.lang.String player)`
- `java.lang.String[] getPlayers()`
- `void clearPlayers()`
- `boolean getFriendlyFire()`
- `void setFriendlyFire​(boolean bo)`
- `void setColor​(java.lang.String color)`
  - param: color - Valid color values are "black", "dark_blue", "dark_green", "dark_aqua", "dark_red", "dark_purple", "gold", "gray", "dark_gray", "blue", "green", "aqua", "red", "light_purple", "yellow", and "white". Or "reset" if you want default
- `java.lang.String getColor()`
  - returns: Returns color string. Returns null if no color was set
- `void setSeeInvisibleTeamPlayers​(boolean bo)`
- `boolean getSeeInvisibleTeamPlayers()`

## ITimers

*interface* `noppes.npcs.api.ITimers`

### Methods
- `void start​(int id, int ticks, boolean repeat)`
  Used for timer events, will throw an error if a timer with the id is already started
  - param: id - The timers id
  - param: ticks - After how many ticks the timer triggers
  - param: repeat - Whether it resets the timer when done or deletes it
- `void forceStart​(int id, int ticks, boolean repeat)`
  Used for timer events, wont throw an error if an timer with this id already exists and will overwrite it with this new one
  - param: id - The timers id
  - param: ticks - After how many ticks the timer triggers
  - param: repeat - Whether it resets the timer when done or deletes it
- `boolean has​(int id)`
  - returns: Returns true if a timer with this id is already active
- `boolean stop​(int id)`
  - returns: Returns false if there was no timer with the giver id
- `void reset​(int id)`
  Resets the timer back to 0
- `void clear()`

## IWorld

*interface* `noppes.npcs.api.IWorld`

### Methods
- `IEntity[] getNearbyEntities​(int x, int y, int z, int range, int type)` (deprecated)
- `IEntity[] getNearbyEntities​(IPos pos, int range, int type)`
- `IEntity getClosestEntity​(int x, int y, int z, int range, int type)` (deprecated)
- `IEntity getClosestEntity​(IPos pos, int range, int type)`
- `IEntity[] getAllEntities​(int type)`
  This gets all currently loaded entities in a world
  - param: type - EntityType}
  - returns: An array of all entities
- `long getTime()`
  - returns: The world time
- `void setTime​(long time)`
- `long getTotalTime()`
  - returns: The total world time (doesn't change with the /time set command
- `IBlock getBlock​(int x, int y, int z)`
  - returns: The block at the given position. Returns null if there isn't a block
- `void setBlock​(int x, int y, int z, java.lang.String name, int meta)`
- `void removeBlock​(int x, int y, int z)`
- `float getLightValue​(int x, int y, int z)`
  - returns: Returns a value between 0 and 1
- `IPlayer getPlayer​(java.lang.String name)`
  - param: name - The name of the player to be returned
  - returns: The Player with name. Null is returned when the player isnt found
- `boolean isDay()`
- `boolean isRaining()`
- `IDimension getDimension()`
- `void setRaining​(boolean bo)`
- `void thunderStrike​(double x, double y, double z)`
- `void playSoundAt​(IPos pos, java.lang.String sound, float volume, float pitch)`
  Sound will be played in a 16 block range
  - param: pos - Pos at which to play
  - param: sound - Sound resource name
  - param: volume - default 1
  - param: pitch - default 1
- `void spawnParticle​(java.lang.String particle, double x, double y, double z, double dx, double dy, double dz, double speed, int count)`
  Sends a packet from the server to the client everytime its called. Probably should not use this too much.
  - param: particle - Particle name. Particle name list: http://minecraft.gamepedia.com/Particles
  - param: x - The x position
  - param: y - The y position
  - param: z - The z position
  - param: dx - Usually used for the x motion
  - param: dy - Usually used for the y motion
  - param: dz - Usually used for the z motion
  - param: speed - Speed of the particles, usually between 0 and 1
  - param: count - Particle count
- `void broadcast​(java.lang.String message)`
- `IScoreboard getScoreboard()`
- `IData getTempdata()`
  Stores any type of data, but will be gone on restart
   Temp data is the same cross dimension
- `IData getStoreddata()`
  Stored data persists through world restart. Unlike tempdata only Strings and Numbers can be saved.
   Stored data is the same cross dimension
- `IItemStack createItem​(java.lang.String name, int damage, int size)`
- `IItemStack createItemFromNbt​(INbt nbt)`
- `void explode​(double x, double y, double z, float range, boolean fire, boolean grief)`
  - param: x - Position x
  - param: y - Position y
  - param: z - Position z
  - param: range - Range of the explosion
  - param: fire - Whether or not the explosion does fire damage
  - param: grief - Whether or not the explosion does damage to blocks
- `IPlayer[] getAllPlayers()`
- `java.lang.String getBiomeName​(int x, int z)`
- `void spawnEntity​(IEntity entity)`
- `@Deprecated IEntity spawnClone​(double x, double y, double z, int tab, java.lang.String name)` (deprecated)
  Depricated, use the API.clones.spawn instead
- `@Deprecated IEntity getClone​(int tab, java.lang.String name)` (deprecated)
  Depricated, use the API.clones.get instead
- `int getRedstonePower​(int x, int y, int z)`
  - returns: value between 0 and 16
- `net.minecraft.world.WorldServer getMCWorld()`
  Expert users only
  - returns: Returns minecrafts world
- `net.minecraft.util.math.BlockPos getMCBlockPos​(int x, int y, int z)`
  Expert users only
  - returns: Returns minecraft BlockPos object
- `IEntity getEntity​(java.lang.String uuid)`
  - param: uuid - entity uuid
  - returns: Returns entity based on uuid
- `IEntity createEntityFromNBT​(INbt nbt)`
- `IEntity createEntity​(java.lang.String id)`
- `IBlock getSpawnPoint()`
- `void setSpawnPoint​(IBlock block)`
- `java.lang.String getName()`

## NpcAPI

*class* `noppes.npcs.api.NpcAPI`

Note this API should only be used Server side not on the client

### Methods
- `public abstract ICustomNpc createNPC​(net.minecraft.world.World world)`
  Doesnt spawn the npc in the world
- `public abstract ICustomNpc spawnNPC​(net.minecraft.world.World world, int x, int y, int z)`
  Creates and spawns an npc
- `public abstract IEntity getIEntity​(net.minecraft.entity.Entity entity)`
- `public abstract IBlock getIBlock​(net.minecraft.world.World world, net.minecraft.util.math.BlockPos pos)`
- `public abstract IContainer getIContainer​(net.minecraft.inventory.IInventory inventory)`
- `public abstract IContainer getIContainer​(net.minecraft.inventory.Container container)`
- `public abstract IItemStack getIItemStack​(net.minecraft.item.ItemStack itemstack)`
- `public abstract IWorld getIWorld​(net.minecraft.world.WorldServer world)`
- `public abstract IWorld getIWorld​(int dimensionId)`
- `public abstract IWorld[] getIWorlds()`
- `public abstract INbt getINbt​(net.minecraft.nbt.NBTTagCompound compound)`
- `public abstract IPos getIPos​(double x, double y, double z)`
- `public abstract IFactionHandler getFactions()`
- `public abstract IRecipeHandler getRecipes()`
- `public abstract IQuestHandler getQuests()`
- `public abstract IDialogHandler getDialogs()`
- `public abstract ICloneHandler getClones()`
- `public abstract IDamageSource getIDamageSource​(net.minecraft.util.DamageSource damagesource)`
- `public abstract INbt stringToNbt​(java.lang.String str)`
- `public abstract IPlayerMail createMail​(java.lang.String sender, java.lang.String subject)`
- `public abstract ICustomGui createCustomGui​(int id, int width, int height, boolean pauseGame)`
- `public abstract INbt getRawPlayerData​(java.lang.String uuid)`
  Get player data even if they are offline
  - param: uuid -
- `public abstract net.minecraftforge.fml.common.eventhandler.EventBus events()`
  Used by modders
  - returns: The event bus where you register CustomNPCEvents
- `public abstract void registerCommand​(CommandNoppesBase command)`
  Use to register your own /noppes subcommand
- `public abstract java.io.File getGlobalDir()`
  - returns: Returns the .minecraft/customnpcs folder or [yourserverfolder]/customnpcs
- `public abstract java.io.File getWorldDir()`
  - returns: Returns the .minecraft/saves/[yourworld]/customnpcs folder or [yourserverfolder]/[yourworld]/customnpcs
- `public static boolean IsAvailable()`
- `public static NpcAPI Instance()`
- `public abstract void registerPermissionNode​(java.lang.String permission, int defaultType)`
  - param: permission - Permission node, best if it's lowercase and contains '.' (e.g. "modid.subgroup.permission_id")
  - param: defaultType - 0:ALL, 1:OP, 2:NONE. This determines who can use the permission by default everybody, only ops or nobody
- `public abstract boolean hasPermissionNode​(java.lang.String permission)`
- `public abstract java.lang.String executeCommand​(IWorld world, java.lang.String command)`
  - param: world - The world in which the command is executed
  - param: command - The Command to execute
- `public abstract java.lang.String getRandomName​(int dictionary, int gender)`
  - param: dictionary - 0:roman, 1:japanese, 2:slavic, 3:welsh, 4:saami, 5:old-norse, 6:ancient-greek, 7:aztec, 8:classic-cnpcs, 9:spanish
  - param: gender - 0:random, 1:male, 2:female
  - returns: Returns a randomly generated name
