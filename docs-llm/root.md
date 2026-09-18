# noppes.npcs.api

- [CustomNPCsException](#customnpcsexception)
- [IContainer](#icontainer)
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
## CustomNPCsException

*class* `noppes.npcs.api.CustomNPCsException`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## IContainer

*interface* `noppes.npcs.api.IContainer`

### Methods
- `int getSize()`
- `IItemStack getSlot(int slot)`
- `void setSlot(int slot,  IItemStack item)`
- `net.minecraft.world.Container getMCInventory()`
  Expert users only
  - returns: Returns minecrafts container
- `net.minecraft.world.inventory.AbstractContainerMenu getMCContainer()`
  Expert users only
  - returns: Returns minecrafts container
- `int count(IItemStack item,  boolean ignoreDamage,  boolean ignoreNBT)`
  - param: item -
  - param: ignoreDamage - Whether to ignore the item_damage value when comparing
  - param: ignoreNBT - Whether to ignore NBT when comparing
- `IItemStack[] getItems()`

## IDamageSource

*interface* `noppes.npcs.api.IDamageSource`

### Methods
- `String getType()`
- `boolean isUnblockable()`
- `boolean isProjectile()`
- `IEntity getTrueSource()`
- `IEntity getImmediateSource()`
- `net.minecraft.world.damagesource.DamageSource getMCDamageSource()`

## IDimension

*interface* `noppes.npcs.api.IDimension`

### Methods
- `String getId()`

## INbt

*interface* `noppes.npcs.api.INbt`

### Methods
- `void remove(String key)`
- `boolean has(String key)`
- `boolean getBoolean(String key)`
- `void setBoolean(String key,  boolean value)`
- `short getShort(String key)`
- `void setShort(String key,  short value)`
- `int getInteger(String key)`
- `void setInteger(String key,  int value)`
- `byte getByte(String key)`
- `void setByte(String key,  byte value)`
- `long getLong(String key)`
- `void setLong(String key,  long value)`
- `double getDouble(String key)`
- `void setDouble(String key,  double value)`
- `float getFloat(String key)`
- `void setFloat(String key,  float value)`
- `String getString(String key)`
- `void putString(String key,  String value)`
- `byte[] getByteArray(String key)`
- `void setByteArray(String key,  byte[] value)`
- `int[] getIntegerArray(String key)`
- `void setIntegerArray(String key,  int[] value)`
- `Object[] getList(String key,  int type)`
  - param: key -
  - param: type - The Type of the list 3:Integer, 5:Float, 6:Double, 8:String,
 10:INbt, 11:Integer[]
- `int getListType(String key)`
  - param: key -
  - returns: 3:Integer, 5:Float, 6:Double, 8:String, 10:INbt, 11:Integer[]
- `void setList(String key,  Object[] value)`
- `INbt getCompound(String key)`
- `void setCompound(String key,  INbt value)`
- `String[] getKeys()`
- `int getType(String key)`
  - param: key -
  - returns: 1:Byte, 2:Short 3:Integer, 4:Long, 5:Float, 6:Double, 7:Byte[],
 8:String, 9:List, 10:INbt, 11:Integer[]
- `net.minecraft.nbt.CompoundTag getMCNBT()`
- `String toJsonString()`
- `boolean isEqual(INbt nbt)`
  Compares if two nbt tags are the same/contain the same data
- `void clear()`
  Clears all tags
- `boolean isEmpty()`
- `void merge(INbt nbt)`
  Merges two nbt tabs, note that nbt tags will be overwritten if they have the
   same keys
- `void mcSetTag(String key,  net.minecraft.nbt.Tag base)`
- `net.minecraft.nbt.Tag mcGetTag(String key)`

## IPos

*interface* `noppes.npcs.api.IPos`

All the methods in IPos create a new IPos object

### Methods
- `int getX()`
- `int getY()`
- `int getZ()`
- `IPos up()`
- `IPos up(int n)`
- `IPos down()`
- `IPos down(int n)`
- `IPos north()`
- `IPos north(int n)`
- `IPos east()`
- `IPos east(int n)`
- `IPos south()`
- `IPos south(int n)`
- `IPos west()`
- `IPos west(int n)`
- `IPos add(int x,  int y,  int z)`
- `IPos add(IPos pos)`
- `IPos subtract(int x,  int y,  int z)`
- `IPos subtract(IPos pos)`
- `double[] normalize()`
- `net.minecraft.core.BlockPos getMCBlockPos()`
- `IPos offset(int direction)`
  - param: direction - SideType
- `IPos offset(int direction,  int n)`
  - param: direction - SideType
  - param: n - how many positions
- `double distanceTo(IPos pos)`

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
- `IScoreboardObjective getObjective(String name)`
  - returns: Returns null if the objective is not found
- `boolean hasObjective(String objective)`
- `void removeObjective(String objective)`
- `IScoreboardObjective addObjective(String objective,  String criteria)`
  - param: objective - Scoreboard objective name (1-16 chars)
  - param: criteria - The criteria see http://minecraft.gamepedia.com/Scoreboard#Objectives
  - returns: Returns the created ScoreboardObjective
- `void setPlayerScore(String player,  String objective,  int score)`
- `int getPlayerScore(String player,  String objective)`
- `boolean hasPlayerObjective(String player,  String objective)`
- `void deletePlayerScore(String player,  String objective)`
- `IScoreboardTeam[] getTeams()`
- `boolean hasTeam(String name)`
- `IScoreboardTeam addTeam(String name)`
- `IScoreboardTeam getTeam(String name)`
- `void removeTeam(String name)`
- `IScoreboardTeam getPlayerTeam(String player)`
  - param: player - the player whos team you want to get
  - returns: The players team
- `void removePlayerTeam(String player)`
  - param: player - The players who should be removed from his team
- `String[] getPlayerList()`

## IScoreboardObjective

*interface* `noppes.npcs.api.IScoreboardObjective`

### Methods
- `String getName()`
- `String getDisplayName()`
- `void setDisplayName(String name)`
  - param: name - Name used for display (1-32 chars)
- `String getCriteria()`
- `boolean isReadyOnly()`
  - returns: Return whether or not the objective value can be changed. E.g. player health can't be changed
- `IScoreboardScore[] getScores()`
- `IScoreboardScore getScore(String player)`
- `boolean hasScore(String player)`
- `IScoreboardScore createScore(String player)`
- `void removeScore(String player)`

## IScoreboardScore

*interface* `noppes.npcs.api.IScoreboardScore`

### Methods
- `int getValue()`
- `void setValue(int val)`
- `String getPlayerName()`

## IScoreboardTeam

*interface* `noppes.npcs.api.IScoreboardTeam`

### Methods
- `String getName()`
- `String getDisplayName()`
- `void setDisplayName(String name)`
  - param: name - Name used as display (1-32 chars)
- `void addPlayer(String player)`
- `boolean hasPlayer(String player)`
- `void removePlayer(String player)`
- `String[] getPlayers()`
- `void clearPlayers()`
- `boolean getFriendlyFire()`
- `void setFriendlyFire(boolean bo)`
- `void setColor(String color)`
  - param: color - Valid color values are "black", "dark_blue", "dark_green", "dark_aqua", "dark_red", "dark_purple", "gold", "gray", "dark_gray", "blue", "green", "aqua", "red", "light_purple", "yellow", and "white". Or "reset" if you want default
- `String getColor()`
  - returns: Returns color string. Returns null if no color was set
- `void setSeeInvisibleTeamPlayers(boolean bo)`
- `boolean getSeeInvisibleTeamPlayers()`

## ITimers

*interface* `noppes.npcs.api.ITimers`

### Methods
- `void start(int id,  int ticks,  boolean repeat)`
  Used for timer events, will throw an error if a timer with the id is already started
  - param: id - The timers id
  - param: ticks - After how many ticks the timer triggers
  - param: repeat - Whether it resets the timer when done or deletes it
- `void forceStart(int id,  int ticks,  boolean repeat)`
  Used for timer events, wont throw an error if an timer with this id already exists and will overwrite it with this new one
  - param: id - The timers id
  - param: ticks - After how many ticks the timer triggers
  - param: repeat - Whether it resets the timer when done or deletes it
- `boolean has(int id)`
  - returns: Returns true if a timer with this id is already active
- `boolean stop(int id)`
  - returns: Returns false if there was no timer with the giver id
- `void reset(int id)`
  Resets the timer back to 0
- `void clear()`

## IWorld

*interface* `noppes.npcs.api.IWorld`

### Methods
- `IEntity[] getNearbyEntities(int x,  int y,  int z,  int range,  int type)` (deprecated)
- `IEntity[] getNearbyEntities(IPos pos,  int range,  int type)`
- `IEntity getClosestEntity(int x,  int y,  int z,  int range,  int type)` (deprecated)
- `IEntity getClosestEntity(IPos pos,  int range,  int type)`
- `IEntity[] getAllEntities(int type)`
  This gets all currently loaded entities in a world
  - param: type - EntitiesType}
  - returns: An array of all entities
- `long getTime()`
  - returns: The world time
- `void setTime(long time)`
- `long getTotalTime()`
  - returns: The total world time (doesn't change with the /time set command
- `IBlock getBlock(int x,  int y,  int z)` (deprecated)
- `IBlock getBlock(IPos pos)`
  - returns: The block at the given position. Returns null if there isn't a block
- `void setBlock(int x,  int y,  int z,  String name,  int meta)` (deprecated)
- `IBlock setBlock(IPos pos,  String name)`
- `void removeBlock(int x,  int y,  int z)` (deprecated)
- `void removeBlock(IPos pos)`
- `float getLightValue(int x,  int y,  int z)`
  - returns: Returns a value between 0 and 1
- `IPlayer getPlayer(String name)`
  - param: name - The name of the player to be returned
  - returns: The Player with name. Null is returned when the player isnt found
- `boolean isDay()`
- `boolean isRaining()`
- `IDimension getDimension()`
- `void setRaining(boolean bo)`
- `void thunderStrike(double x,  double y,  double z)`
- `void playSoundAt(IPos pos,  String sound,  float volume,  float pitch)`
  Sound will be played in a 16 block range
  - param: pos - Pos at which to play
  - param: sound - Sound resource name
  - param: volume - default 1
  - param: pitch - default 1
- `void spawnParticle(String particle,  double x,  double y,  double z,  double dx,  double dy,  double dz,  double speed,  int count)`
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
- `void broadcast(String message)`
- `IScoreboard getScoreboard()`
- `IData getTempdata()`
  Stores any type of data, but will be gone on restart
   Temp data is the same cross dimension
- `IData getStoreddata()`
  Stored data persists through world restart. Unlike tempdata only Strings and Numbers can be saved.
   Stored data is the same cross dimension
- `IItemStack createItem(String name,  int size)`
- `IItemStack createItemFromNbt(INbt nbt)`
- `void explode(double x,  double y,  double z,  float range,  boolean fire,  boolean grief)`
  - param: x - Position x
  - param: y - Position y
  - param: z - Position z
  - param: range - Range of the explosion
  - param: fire - Whether or not the explosion does fire damage
  - param: grief - Whether or not the explosion does damage to blocks
- `IPlayer[] getAllPlayers()`
- `String getBiomeName(int x,  int z)`
- `void spawnEntity(IEntity entity)`
- `@Deprecated IEntity spawnClone(double x,  double y,  double z,  int tab,  String name)` (deprecated)
  Depricated, use the API.clones.spawn instead
- `@Deprecated IEntity getClone(int tab,  String name)` (deprecated)
  Depricated, use the API.clones.get instead
- `int getRedstonePower(int x,  int y,  int z)`
  - returns: value between 0 and 16
- `net.minecraft.server.level.ServerLevel getMCLevel()`
  Expert users only
  - returns: Returns minecrafts world
- `net.minecraft.core.BlockPos getMCBlockPos(int x,  int y,  int z)`
  Expert users only
  - returns: Returns minecraft BlockPos object
- `IEntity getEntity(String uuid)`
  - param: uuid - entity uuid
  - returns: Returns entity based on uuid
- `IEntity createEntityFromNBT(INbt nbt)`
- `IEntity createEntity(String id)`
- `IBlock getSpawnPoint()`
- `void setSpawnPoint(IBlock block)`
- `String getName()`
- `void trigger(int id,  Object... arguments)`
  Fires trigger event for forge scripts
  - param: id - , Id for the event
  - param: arguments - , arguments you can give with it

## NpcAPI

*class* `noppes.npcs.api.NpcAPI`

Note this API should only be used Server side not on the client

### Methods
- `public abstract ICustomNpc createNPC(net.minecraft.world.level.Level world)`
  Doesnt spawn the npc in the world
- `public abstract ICustomNpc spawnNPC(net.minecraft.world.level.Level level,  int x,  int y,  int z)`
  Creates and spawns an npc
- `public abstract IEntity getIEntity(net.minecraft.world.entity.Entity entity)`
- `public abstract IBlock getIBlock(net.minecraft.world.level.Level level,  net.minecraft.core.BlockPos pos)`
- `public abstract IContainer getIContainer(net.minecraft.world.Container container)`
- `public abstract IContainer getIContainer(net.minecraft.world.inventory.AbstractContainerMenu container)`
- `public abstract IItemStack getIItemStack(net.minecraft.world.item.ItemStack itemstack)`
- `public abstract IWorld getIWorld(net.minecraft.server.level.ServerLevel world)`
- `public abstract IWorld getIWorld(String dimension)`
  - param: dimension - 'minecraft:overworld', 'minecraft:the_nether', 'minecraft:the_end'
- `public abstract IWorld getIWorld(net.minecraft.world.level.dimension.DimensionType dimension)`
- `public abstract IWorld[] getIWorlds()`
- `public abstract INbt getINbt(net.minecraft.nbt.CompoundTag compound)`
- `public abstract IPos getIPos(double x,  double y,  double z)`
- `public abstract IFactionHandler getFactions()`
- `public abstract IRecipeHandler getRecipes()`
- `public abstract IQuestHandler getQuests()`
- `public abstract IDialogHandler getDialogs()`
- `public abstract ICloneHandler getClones()`
- `public abstract IDamageSource getIDamageSource(net.minecraft.world.damagesource.DamageSource damagesource)`
- `public abstract INbt stringToNbt(String str)`
- `public abstract IPlayerMail createMail(String sender,  String subject)`
- `public abstract ICustomGui createCustomGui(int id,  int width,  int height,  boolean pauseGame,  IPlayer player)`
- `public abstract INbt getRawPlayerData(String uuid)`
  Get player data even if they are offline
  - param: uuid -
- `public abstract net.minecraftforge.eventbus.api.IEventBus events()`
  Used by modders
  - returns: The event bus where you register CustomNPCEvents
- `public abstract File getGlobalDir()`
  - returns: Returns the .minecraft/customnpcs folder or [yourserverfolder]/customnpcs
- `public abstract File getLevelDir()`
  - returns: Returns the .minecraft/saves/[yourworld]/customnpcs folder or [yourserverfolder]/[yourworld]/customnpcs
- `public static boolean IsAvailable()`
- `public static NpcAPI Instance()`
- `public abstract boolean hasPermissionNode(String permission)`
- `public abstract String executeCommand(IWorld world,  String command)`
  - param: world - The world in which the command is executed
  - param: command - The Command to execute
- `public abstract String getRandomName(int dictionary,  int gender)`
  - param: dictionary - 0:roman, 1:japanese, 2:slavic, 3:welsh, 4:saami, 5:old-norse, 6:ancient-greek, 7:aztec, 8:classic-cnpcs, 9:spanish
  - param: gender - 0:random, 1:male, 2:female
  - returns: Returns a randomly generated name
