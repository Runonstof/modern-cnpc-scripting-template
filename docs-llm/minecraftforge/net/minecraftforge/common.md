# net.minecraftforge.common

- [BiomeDictionary](#biomedictionary)
- [BiomeDictionary.Type](#biomedictionary.type)
- [BiomeManager](#biomemanager)
- [BiomeManager.BiomeEntry](#biomemanager.biomeentry)
- [BiomeManager.BiomeType](#biomemanager.biometype)
- [DimensionManager](#dimensionmanager)
- [DungeonHooks](#dungeonhooks)
- [DungeonHooks.DungeonMob](#dungeonhooks.dungeonmob)
- [EnumPlantType](#enumplanttype)
- [FarmlandWaterManager](#farmlandwatermanager)
- [ForgeChunkManager](#forgechunkmanager)
- [ForgeChunkManager.ForceChunkEvent](#forgechunkmanager.forcechunkevent)
- [ForgeChunkManager.LoadingCallback](#forgechunkmanager.loadingcallback)
- [ForgeChunkManager.OrderedLoadingCallback](#forgechunkmanager.orderedloadingcallback)
- [ForgeChunkManager.PlayerOrderedLoadingCallback](#forgechunkmanager.playerorderedloadingcallback)
- [ForgeChunkManager.Ticket](#forgechunkmanager.ticket)
- [ForgeChunkManager.Type](#forgechunkmanager.type)
- [ForgeChunkManager.UnforceChunkEvent](#forgechunkmanager.unforcechunkevent)
- [ForgeHooks](#forgehooks)
- [ForgeInternalHandler](#forgeinternalhandler)
- [ForgeModContainer](#forgemodcontainer)
- [ForgeVersion](#forgeversion)
- [ForgeVersion.CheckResult](#forgeversion.checkresult)
- [ForgeVersion.Status](#forgeversion.status)
- [IMinecartCollisionHandler](#iminecartcollisionhandler)
- [IPlantable](#iplantable)
- [IRarity](#irarity)
- [IShearable](#ishearable)
- [ISpecialArmor](#ispecialarmor)
- [ISpecialArmor.ArmorProperties](#ispecialarmor.armorproperties)
- [MinecraftForge](#minecraftforge)
- [UsernameCache](#usernamecache)
- [WorldSpecificSaveHandler](#worldspecificsavehandler)
- [WorldWorkerManager](#worldworkermanager)
- [WorldWorkerManager.IWorker](#worldworkermanager.iworker)
## BiomeDictionary

*class* `net.minecraftforge.common.BiomeDictionary`

### Methods
- `public static void addTypes(Biome biome,  BiomeDictionary.Type... types)`
  Adds the given types to the biome.
- `public static java.util.Set<Biome> getBiomes(BiomeDictionary.Type type)`
  Gets the set of biomes that have the given type.
- `public static java.util.Set<BiomeDictionary.Type> getTypes(Biome biome)`
  Gets the set of types that have been added to the given biome.
- `public static boolean areSimilar(Biome biomeA,  Biome biomeB)`
  Checks if the two given biomes have types in common.
  - returns: returns true if a common type is found, false otherwise
- `public static boolean hasType(Biome biome,  BiomeDictionary.Type type)`
  Checks if the given type has been added to the given biome.
- `public static boolean hasAnyType(Biome biome)`
  Checks if any type has been added to the given biome.
- `public static void makeBestGuess(Biome biome)`
  Automatically adds appropriate types to a given biome based on certain heuristics.
   If a biome's types are requested and no types have been added to the biome so far, the biome's types
   will be determined and added using this method.

## BiomeDictionary.Type

*class* `net.minecraftforge.common.BiomeDictionary.Type`

Enclosing class: BiomeDictionary

### Fields
- `public static final BiomeDictionary.Type HOT`
- `public static final BiomeDictionary.Type COLD`
- `public static final BiomeDictionary.Type SPARSE`
- `public static final BiomeDictionary.Type DENSE`
- `public static final BiomeDictionary.Type WET`
- `public static final BiomeDictionary.Type DRY`
- `public static final BiomeDictionary.Type SAVANNA`
- `public static final BiomeDictionary.Type CONIFEROUS`
- `public static final BiomeDictionary.Type JUNGLE`
- `public static final BiomeDictionary.Type SPOOKY`
- `public static final BiomeDictionary.Type DEAD`
- `public static final BiomeDictionary.Type LUSH`
- `public static final BiomeDictionary.Type NETHER`
- `public static final BiomeDictionary.Type END`
- `public static final BiomeDictionary.Type MUSHROOM`
- `public static final BiomeDictionary.Type MAGICAL`
- `public static final BiomeDictionary.Type RARE`
- `public static final BiomeDictionary.Type OCEAN`
- `public static final BiomeDictionary.Type RIVER`
- `public static final BiomeDictionary.Type WATER`
  A general tag for all water-based biomes. Shown as present if OCEAN or RIVER are.
- `public static final BiomeDictionary.Type MESA`
- `public static final BiomeDictionary.Type FOREST`
- `public static final BiomeDictionary.Type PLAINS`
- `public static final BiomeDictionary.Type MOUNTAIN`
- `public static final BiomeDictionary.Type HILLS`
- `public static final BiomeDictionary.Type SWAMP`
- `public static final BiomeDictionary.Type SANDY`
- `public static final BiomeDictionary.Type SNOWY`
- `public static final BiomeDictionary.Type WASTELAND`
- `public static final BiomeDictionary.Type BEACH`
- `public static final BiomeDictionary.Type VOID`

### Methods
- `public java.lang.String getName()`
  Gets the name for this type.
- `public java.lang.String toString()`
- `public static BiomeDictionary.Type getType(java.lang.String name,  BiomeDictionary.Type... subTypes)`
  Retrieves a Type instance by name,
   if one does not exist already it creates one.
   This can be used as intermediate measure for modders to
   add their own Biome types.
  
   There are no naming conventions besides:
   Must be all upper case (enforced by name.toUpper())
   No Special characters. {Unenforced, just don't be a pain, if it becomes a issue I WILL
   make this RTE with no worry about backwards compatibility}
  
   Note: For performance sake, the return value of this function SHOULD be cached.
   Two calls with the same name SHOULD return the same value.
  - param: name - The name of this Type
  - returns: An instance of Type for this name.
- `public static java.util.Collection<BiomeDictionary.Type> getAll()`
  - returns: An unmodifiable collection of all current biome types.

## BiomeManager

*class* `net.minecraftforge.common.BiomeManager`

### Fields
- `public static java.util.List<Biome> oceanBiomes`
- `public static java.util.ArrayList<Biome> strongHoldBiomes`
- `public static java.util.ArrayList<Biome> strongHoldBiomesBlackList`

### Methods
- `public static void addVillageBiome(Biome biome,  boolean canSpawn)`
- `public static void removeVillageBiome(Biome biome)`
- `public static void addStrongholdBiome(Biome biome)`
- `public static void removeStrongholdBiome(Biome biome)`
- `public static void addSpawnBiome(Biome biome)`
- `public static void removeSpawnBiome(Biome biome)`
- `public static void addBiome(BiomeManager.BiomeType type,  BiomeManager.BiomeEntry entry)`
- `public static void removeBiome(BiomeManager.BiomeType type,  BiomeManager.BiomeEntry entry)`
- `public static <any> getBiomes(BiomeManager.BiomeType type)`
- `public static boolean isTypeListModded(BiomeManager.BiomeType type)`

## BiomeManager.BiomeEntry

*class* `net.minecraftforge.common.BiomeManager.BiomeEntry`

Enclosing class: BiomeManager

### Fields
- `public final Biome biome`

### Inherited fields
- from `net.minecraft.util.WeightedRandom.Item`: `itemWeight`

## BiomeManager.BiomeType

*enum* `net.minecraftforge.common.BiomeManager.BiomeType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<BiomeManager.BiomeType>

Enclosing class: BiomeManager

### Fields
- `public static final BiomeManager.BiomeType DESERT`
- `public static final BiomeManager.BiomeType WARM`
- `public static final BiomeManager.BiomeType COOL`
- `public static final BiomeManager.BiomeType ICY`

### Methods
- `public static BiomeManager.BiomeType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (BiomeManager.BiomeType c : BiomeManager.BiomeType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static BiomeManager.BiomeType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public static BiomeManager.BiomeType getType(java.lang.String name)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## DimensionManager

*class* `net.minecraftforge.common.DimensionManager`

### Methods
- `public static int[] getDimensions(DimensionType type)`
  Returns a list of dimensions associated with this DimensionType.
- `public static java.util.Map<DimensionType,IntSortedSet> getRegisteredDimensions()`
- `public static void init()`
- `public static void registerDimension(int id,  DimensionType type)`
- `public static void unregisterDimension(int id)`
  For unregistering a dimension when the save is changed (disconnected from a server or loaded a new save
- `public static boolean isDimensionRegistered(int dim)`
- `public static DimensionType getProviderType(int dim)`
- `public static WorldProvider getProvider(int dim)`
- `public static java.lang.Integer[] getIDs(boolean check)`
- `public static java.lang.Integer[] getIDs()`
- `public static void setWorld(int id,  WorldServer world,  MinecraftServer server)`
- `public static void initDimension(int dim)`
- `public static WorldServer getWorld(int id)`
- `public static WorldServer getWorld(int id,  boolean resetUnloadDelay)`
- `public static WorldServer[] getWorlds()`
- `public static java.lang.Integer[] getStaticDimensionIDs()`
  Not public API: used internally to get dimensions that should load at
   server startup
- `public static WorldProvider createProviderFor(int dim)`
- `public static boolean keepDimensionLoaded(int dim,  boolean keep)`
  Sets if a dimension should stay loaded.
  - param: dim - the dimension ID
  - param: keep - whether or not the dimension should be kept loaded
  - returns: true iff the dimension's status changed
- `public static void unloadWorld(int id)`
  Queues a dimension to unload, if it can be unloaded.
  - param: id - The id of the dimension
- `public static boolean isWorldQueuedToUnload(int id)`
- `public static void unloadWorlds(java.util.Hashtable<java.lang.Integer,long[]> worldTickTimes)`
- `public static int getNextFreeDimId()`
  Return the next free dimension ID. Note: you are not guaranteed a contiguous
   block of free ids. Always call for each individual ID you wish to get.
  - returns: the next free dimension ID
- `public static NBTTagCompound saveDimensionDataMap()`
- `public static void loadDimensionDataMap(NBTTagCompound compoundTag)`
- `public static java.io.File getCurrentSaveRootDirectory()`
  Return the current root directory for the world save. Accesses getSaveHandler from the overworld
  - returns: the root directory of the save

## DungeonHooks

*class* `net.minecraftforge.common.DungeonHooks`

### Methods
- `public static float addDungeonMob(ResourceLocation name,  int rarity)`
  Adds a mob to the possible list of creatures the spawner will create.
   If the mob is already in the spawn list, the rarity will be added to the existing one,
   causing the mob to be more common.
  - param: name - The name of the monster, use the same name used when registering the entity.
  - param: rarity - The rarity of selecting this mob over others. Must be greater then 0.
 Vanilla Minecraft has the following mobs:
 Spider 100
 Skeleton 100
 Zombie 200
 Meaning, Zombies are twice as common as spiders or skeletons.
  - returns: The new rarity of the monster,
- `public static int removeDungeonMob(ResourceLocation name)`
  Will completely remove a Mob from the dungeon spawn list.
  - param: name - The name of the mob to remove
  - returns: The rarity of the removed mob, prior to being removed.
- `public static ResourceLocation getRandomDungeonMob(java.util.Random rand)`
  Gets a random mob name from the list.
  - param: rand - World generation random number generator
  - returns: The mob name

## DungeonHooks.DungeonMob

*class* `net.minecraftforge.common.DungeonHooks.DungeonMob`

Enclosing class: DungeonHooks

### Fields
- `public ResourceLocation type`

### Inherited fields
- from `net.minecraft.util.WeightedRandom.Item`: `itemWeight`

### Methods
- `public boolean equals(java.lang.Object target)`

## EnumPlantType

*enum* `net.minecraftforge.common.EnumPlantType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumPlantType>

### Fields
- `public static final EnumPlantType Plains`
- `public static final EnumPlantType Desert`
- `public static final EnumPlantType Beach`
- `public static final EnumPlantType Cave`
- `public static final EnumPlantType Water`
- `public static final EnumPlantType Nether`
- `public static final EnumPlantType Crop`

### Methods
- `public static EnumPlantType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumPlantType c : EnumPlantType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumPlantType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public static EnumPlantType getPlantType(java.lang.String name)`
  Getting a custom EnumPlantType, or an existing one if it has the same name as that one. Your plant should implement IPlantable
   and return this custom type in IPlantable.getPlantType(IBlockAccess, BlockPos).
  
   If your new plant grows on blocks like any one of them above, never create a new EnumPlantType.
   This enumeration is only functioning in
   Block.canSustainPlant(IBlockState, IBlockAccess, BlockPos, EnumFacing, IPlantable),
   which you are supposed to override this function in your new block and create a new plant type to grow on that block.
  
   You can create an instance of your plant type in your API and let your/others mods access it. It will be faster than calling this method.
  - param: name - the name of the type of plant, you had better follow the style above
  - returns: the acquired EnumPlantType, a new one if not found.

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## FarmlandWaterManager

*class* `net.minecraftforge.common.FarmlandWaterManager`

### Methods
- `@Deprecated public static <T extends SimpleTicket<Vec3d>> T addCustomTicket(World world,  T ticket,  ChunkPos... chunkPoses)` (deprecated)
  Deprecated.
- `public static <T extends SimpleTicket<Vec3d>> T addCustomTicket(World world,  T ticket,  ChunkPos masterChunk,  ChunkPos... additionalChunks)`
  Adds a custom ticket.
   Use addAABBTicket(World, AxisAlignedBB) if you just need a ticket that can water a certain area.
  
   If you don't want to water the region anymore, call SimpleTicket.invalidate(). Also call this
   when the region this is unloaded (e.g. your TE is unloaded or the block is removed), and validate once it is loaded
  - param: world - The world where the region should be marked. Only server-side worlds are allowed
  - param: ticket - Your ticket you want to have registered
  - param: masterChunk - The chunk pos that is controls when the ticket may be unloaded. The ticket should originate from here.
  - param: additionalChunks - The chunks in that this ticket wants to operate as well.
  - returns: The ticket for your requested region.
- `public static AABBTicket addAABBTicket(World world,  AxisAlignedBB aabb)`
  Convenience method to add a ticket that is backed by an AABB.
  
   If you don't want to water the region anymore, call SimpleTicket.invalidate(). Also call this
   when the region this is unloaded (e.g. your TE is unloaded or the block is removed), and validate once it is loaded
  
   The AABB in the ticket is immutable
  - param: world - The world where the region should be marked. Only server-side worlds are allowed
  - param: aabb - The region where blocks should be watered
  - returns: The ticket for your requested region.
- `public static boolean hasBlockWaterTicket(World world,  BlockPos pos)`
  Tests if a block is in a region that is watered by blocks. This does not check vanilla water, see BlockFarmland.hasWater(World, BlockPos)
  - returns: true if there is a ticket with an AABB that includes your block

## ForgeChunkManager

*class* `net.minecraftforge.common.ForgeChunkManager`

Manages chunkloading for mods.

 The basic principle is a ticket based system.
 1. Mods register a callback setForcedChunkLoadingCallback(Object, LoadingCallback)
 2. Mods ask for a ticket requestTicket(Object, World, Type) and then hold on to that ticket.
 3. Mods request chunks to stay loaded forceChunk(Ticket, ChunkPos) or remove chunks from force loading unforceChunk(Ticket, ChunkPos).
 4. When a world unloads, the tickets associated with that world are saved by the chunk manager.
 5. When a world loads, saved tickets are offered to the mods associated with the tickets. The ForgeChunkManager.Ticket.getModData() that is set by the mod should be used to re-register
 chunks to stay loaded (and maybe take other actions).

 The chunkloading is configurable at runtime. The file "config/forgeChunkLoading.cfg" contains both default configuration for chunkloading, and a sample individual mod
 specific override section.

### Fields
- `public static boolean asyncChunkLoading`
- `public static final java.util.List<java.lang.String> MOD_PROP_ORDER`

### Methods
- `public static java.util.Iterator<Chunk> getPersistentChunksIterableFor(World world,  java.util.Iterator<Chunk> chunkIterator)`
- `public static boolean savedWorldHasForcedChunkTickets(java.io.File chunkDir)`
  Allows dynamically loading world mods to test if there are chunk tickets in the world
   Mods that add dynamically generated worlds (like Mystcraft) should call this method
   to determine if the world should be loaded during server starting.
  - param: chunkDir - The chunk directory to test: should be equivalent to WorldServer.getChunkSaveLocation()
  - returns: if there are tickets outstanding for this world or not
- `public static void setForcedChunkLoadingCallback(java.lang.Object mod,  ForgeChunkManager.LoadingCallback callback)`
  Set a chunkloading callback for the supplied mod object
  - param: mod - The mod instance registering the callback
  - param: callback - The code to call back when forced chunks are loaded
- `public static int ticketCountAvailableFor(java.lang.Object mod,  World world)`
  Discover the available tickets for the mod in the world
  - param: mod - The mod that will own the tickets
  - param: world - The world
  - returns: The count of tickets left for the mod in the supplied world
- `public static int getMaxTicketLengthFor(java.lang.String modId)`
- `public static int getMaxChunkDepthFor(java.lang.String modId)`
- `public static int ticketCountAvailableFor(java.lang.String username)`
- `public static ForgeChunkManager.Ticket requestPlayerTicket(java.lang.Object mod,  java.lang.String player,  World world,  ForgeChunkManager.Type type)`
- `public static ForgeChunkManager.Ticket requestTicket(java.lang.Object mod,  World world,  ForgeChunkManager.Type type)`
  Request a chunkloading ticket of the appropriate type for the supplied mod
  - param: mod - The mod requesting a ticket
  - param: world - The world in which it is requesting the ticket
  - param: type - The type of ticket
  - returns: A ticket with which to register chunks for loading, or null if no further tickets are available
- `public static void releaseTicket(ForgeChunkManager.Ticket ticket)`
  Release the ticket back to the system. This will also unforce any chunks held by the ticket so that they can be unloaded and/or stop ticking.
  - param: ticket - The ticket to release
- `public static void forceChunk(ForgeChunkManager.Ticket ticket,  ChunkPos chunk)`
  Force the supplied chunk coordinate to be loaded by the supplied ticket. If the ticket's ForgeChunkManager.Ticket.maxDepth is exceeded, the least
   recently registered chunk is unforced and may be unloaded.
   It is safe to force the chunk several times for a ticket, it will not generate duplication or change the ordering.
  - param: ticket - The ticket registering the chunk
  - param: chunk - The chunk to force
- `public static void reorderChunk(ForgeChunkManager.Ticket ticket,  ChunkPos chunk)`
  Reorganize the internal chunk list so that the chunk supplied is at the *end* of the list
   This helps if you wish to guarantee a certain "automatic unload ordering" for the chunks
   in the ticket list
  - param: ticket - The ticket holding the chunk list
  - param: chunk - The chunk you wish to push to the end (so that it would be unloaded last)
- `public static void unforceChunk(ForgeChunkManager.Ticket ticket,  ChunkPos chunk)`
  Unforce the supplied chunk, allowing it to be unloaded and stop ticking.
  - param: ticket - The ticket holding the chunk
  - param: chunk - The chunk to unforce
- `public static <any> getPersistentChunksFor(World world)`
  The list of persistent chunks in the world. This set is immutable.
  - param: world -
  - returns: the list of persistent chunks in the world
- `public static void putDormantChunk(long coords,  Chunk chunk)`
- `public static void storeChunkNBT(Chunk chunk,  NBTTagCompound nbt)`
- `public static Chunk fetchDormantChunk(long coords,  World world)`
- `public static void syncConfigDefaults()`
  Synchronizes the local fields with the values in the Configuration object.
- `public static Configuration getConfig()`
- `public static ConfigCategory getDefaultsCategory()`
- `public static java.util.List<ConfigCategory> getModCategories()`
- `public static ConfigCategory getConfigFor(java.lang.Object mod)`
- `public static void addConfigProperty(java.lang.Object mod,  java.lang.String propertyName,  java.lang.String value,  Property.Type type)`

## ForgeChunkManager.ForceChunkEvent

*class* `net.minecraftforge.common.ForgeChunkManager.ForceChunkEvent`

Enclosing class: ForgeChunkManager

### Methods
- `public ForgeChunkManager.Ticket getTicket()`
- `public ChunkPos getLocation()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ForgeChunkManager.LoadingCallback

*interface* `net.minecraftforge.common.ForgeChunkManager.LoadingCallback`

All mods requiring chunkloading need to implement this to handle the
 re-registration of chunk tickets at world loading time

Enclosing class: ForgeChunkManager

### Methods
- `void ticketsLoaded(java.util.List<ForgeChunkManager.Ticket> tickets,  World world)`
  Called back when tickets are loaded from the world to allow the
   mod to re-register the chunks associated with those tickets. The list supplied
   here is truncated to length prior to use. Tickets unwanted by the
   mod must be disposed of manually unless the mod is an OrderedLoadingCallback instance
   in which case, they will have been disposed of by the earlier callback.
  - param: tickets - The tickets to re-register. The list is immutable and cannot be manipulated directly. Copy it first.
  - param: world - the world

## ForgeChunkManager.OrderedLoadingCallback

*interface* `net.minecraftforge.common.ForgeChunkManager.OrderedLoadingCallback`

This is a special LoadingCallback that can be implemented as well as the
 LoadingCallback to provide access to additional behaviour.
 Specifically, this callback will fire prior to Forge dropping excess
 tickets. Tickets in the returned list are presumed ordered and excess will
 be truncated from the returned list.
 This allows the mod to control not only if they actually want a ticket but
 also their preferred ticket ordering.

All Superinterfaces: ForgeChunkManager.LoadingCallback

Enclosing class: ForgeChunkManager

### Methods
- `java.util.List<ForgeChunkManager.Ticket> ticketsLoaded(java.util.List<ForgeChunkManager.Ticket> tickets,  World world,  int maxTicketCount)`
  Called back when tickets are loaded from the world to allow the
   mod to decide if it wants the ticket still, and prioritise overflow
   based on the ticket count.
   WARNING: You cannot force chunks in this callback, it is strictly for allowing the mod
   to be more selective in which tickets it wishes to preserve in an overflow situation
  - param: tickets - The tickets that you will want to select from. The list is immutable and cannot be manipulated directly. Copy it first.
  - param: world - The world
  - param: maxTicketCount - The maximum number of tickets that will be allowed.
  - returns: A list of the tickets this mod wishes to continue using. This list will be truncated
 to "maxTicketCount" size after the call returns and then offered to the other callback
 method

### Inherited methods
- from `net.minecraftforge.common.ForgeChunkManager.LoadingCallback`: `ticketsLoaded`

## ForgeChunkManager.PlayerOrderedLoadingCallback

*interface* `net.minecraftforge.common.ForgeChunkManager.PlayerOrderedLoadingCallback`

All Superinterfaces: ForgeChunkManager.LoadingCallback

Enclosing class: ForgeChunkManager

### Methods
- `<any> playerTicketsLoaded(<any> tickets,  World world)`
  Called back when tickets are loaded from the world to allow the
   mod to decide if it wants the ticket still.
   This is for player bound tickets rather than mod bound tickets. It is here so mods can
   decide they want to dump all player tickets
  
   WARNING: You cannot force chunks in this callback, it is strictly for allowing the mod
   to be more selective in which tickets it wishes to preserve
  - param: tickets - The tickets that you will want to select from. The list is immutable and cannot be manipulated directly. Copy it first.
  - param: world - The world
  - returns: A list of the tickets this mod wishes to use. This list will subsequently be offered
 to the main callback for action

### Inherited methods
- from `net.minecraftforge.common.ForgeChunkManager.LoadingCallback`: `ticketsLoaded`

## ForgeChunkManager.Ticket

*class* `net.minecraftforge.common.ForgeChunkManager.Ticket`

Enclosing class: ForgeChunkManager

### Fields
- `public final World world`

### Methods
- `public void setChunkListDepth(int depth)`
  The chunk list depth can be manipulated up to the maximal grant allowed for the mod. This value is configurable. Once the maximum is reached,
   the least recently forced chunk, by original registration time, is removed from the forced chunk list.
  - param: depth - The new depth to set
- `public int getChunkListDepth()`
  Gets the current max depth for this ticket.
   Should be the same as getMaxChunkListDepth()
   unless setChunkListDepth has been called.
  - returns: Current max depth
- `public int getMaxChunkListDepth()`
  Get the maximum chunk depth size
  - returns: The maximum chunk depth size
- `public void bindEntity(Entity entity)`
  Bind the entity to the ticket for ForgeChunkManager.Type.ENTITY type tickets. Other types will throw a runtime exception.
  - param: entity - The entity to bind
- `public NBTTagCompound getModData()`
  Retrieve the NBTTagCompound that stores mod specific data for the chunk ticket.
   Example data to store would be a TileEntity or Block location. This is persisted with the ticket and
   provided to the ForgeChunkManager.LoadingCallback for the mod. It is recommended to use this to recover
   useful state information for the forced chunks.
  - returns: The custom compound tag for mods to store additional chunkloading data
- `public Entity getEntity()`
  Get the entity associated with this ForgeChunkManager.Type.ENTITY type ticket
  - returns: the entity
- `public boolean isPlayerTicket()`
  Is this a player associated ticket rather than a mod associated ticket?
- `public java.lang.String getPlayerName()`
  Get the player associated with this ticket
- `public java.lang.String getModId()`
  Get the associated mod id
- `public ForgeChunkManager.Type getType()`
  Gets the ticket type
- `public <any> getChunkList()`
  Gets a list of requested chunks for this ticket.

## ForgeChunkManager.Type

*enum* `net.minecraftforge.common.ForgeChunkManager.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ForgeChunkManager.Type>

Enclosing class: ForgeChunkManager

### Fields
- `public static final ForgeChunkManager.Type NORMAL`
  For non-entity registrations
- `public static final ForgeChunkManager.Type ENTITY`
  For entity registrations

### Methods
- `public static ForgeChunkManager.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ForgeChunkManager.Type c : ForgeChunkManager.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ForgeChunkManager.Type valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ForgeChunkManager.UnforceChunkEvent

*class* `net.minecraftforge.common.ForgeChunkManager.UnforceChunkEvent`

Enclosing class: ForgeChunkManager

### Methods
- `public ForgeChunkManager.Ticket getTicket()`
- `public ChunkPos getLocation()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ForgeHooks

*class* `net.minecraftforge.common.ForgeHooks`

### Methods
- `public static ItemStack getGrassSeed(java.util.Random rand,  int fortune)`
- `public static boolean canContinueUsing(ItemStack from,  ItemStack to)`
- `public static boolean canHarvestBlock(Block block,  EntityPlayer player,  IBlockAccess world,  BlockPos pos)`
- `public static boolean canToolHarvestBlock(IBlockAccess world,  BlockPos pos,  ItemStack stack)`
- `public static float blockStrength(IBlockState state,  EntityPlayer player,  World world,  BlockPos pos)`
- `public static boolean isToolEffective(IBlockAccess world,  BlockPos pos,  ItemStack stack)`
- `public static int getTotalArmorValue(EntityPlayer player)`
- `public static boolean onPickBlock(RayTraceResult target,  EntityPlayer player,  World world)`
  Called when a player uses 'pick block', calls new Entity and Block hooks.
- `public static void onDifficultyChange(EnumDifficulty difficulty,  EnumDifficulty oldDifficulty)`
- `public static void onLivingSetAttackTarget(EntityLivingBase entity,  EntityLivingBase target)`
- `public static boolean onLivingUpdate(EntityLivingBase entity)`
- `public static boolean onLivingAttack(EntityLivingBase entity,  DamageSource src,  float amount)`
- `public static boolean onPlayerAttack(EntityLivingBase entity,  DamageSource src,  float amount)`
- `public static LivingKnockBackEvent onLivingKnockBack(EntityLivingBase target,  Entity attacker,  float strength,  double ratioX,  double ratioZ)`
- `public static float onLivingHurt(EntityLivingBase entity,  DamageSource src,  float amount)`
- `public static float onLivingDamage(EntityLivingBase entity,  DamageSource src,  float amount)`
- `public static boolean onLivingDeath(EntityLivingBase entity,  DamageSource src)`
- `public static boolean onLivingDrops(EntityLivingBase entity,  DamageSource source,  java.util.ArrayList<EntityItem> drops,  int lootingLevel,  boolean recentlyHit)`
- `public static float[] onLivingFall(EntityLivingBase entity,  float distance,  float damageMultiplier)`
- `public static int getLootingLevel(Entity target,  Entity killer,  DamageSource cause)`
- `public static int getLootingLevel(EntityLivingBase target,  DamageSource cause,  int level)`
- `public static double getPlayerVisibilityDistance(EntityPlayer player,  double xzDistance,  double maxXZDistance)`
- `public static boolean isLivingOnLadder(IBlockState state,  World world,  BlockPos pos,  EntityLivingBase entity)`
- `public static void onLivingJump(EntityLivingBase entity)`
- `public static EntityItem onPlayerTossEvent(EntityPlayer player,  ItemStack item,  boolean includeName)`
- `public static float getEnchantPower(World world,  BlockPos pos)`
- `public static ITextComponent onServerChatEvent(NetHandlerPlayServer net,  java.lang.String raw,  ITextComponent comp)`
- `public static ITextComponent newChatWithLinks(java.lang.String string)`
- `public static ITextComponent newChatWithLinks(java.lang.String string,  boolean allowMissingHeader)`
- `public static int onBlockBreakEvent(World world,  GameType gameType,  EntityPlayerMP entityPlayer,  BlockPos pos)`
- `public static EnumActionResult onPlaceItemIntoWorld(ItemStack itemstack,  EntityPlayer player,  World world,  BlockPos pos,  EnumFacing side,  float hitX,  float hitY,  float hitZ,  EnumHand hand)`
- `public static boolean onAnvilChange(ContainerRepair container,  ItemStack left,  ItemStack right,  IInventory outputSlot,  java.lang.String name,  int baseCost)`
- `public static float onAnvilRepair(EntityPlayer player,  ItemStack output,  ItemStack left,  ItemStack right)`
- `public static boolean onNoteChange(TileEntityNote te,  byte old)`
- `public static NonNullList<ItemStack> defaultRecipeGetRemainingItems(InventoryCrafting inv)`
  Default implementation of IRecipe.getRemainingItems {getRemainingItems} because
   this is just copy pasted over a lot of recipes.
  - param: inv - Crafting inventory
  - returns: Crafting inventory contents after the recipe.
- `public static void setCraftingPlayer(EntityPlayer player)`
- `public static EntityPlayer getCraftingPlayer()`
- `public static ItemStack getContainerItem(ItemStack stack)`
- `public static boolean isInsideOfMaterial(Material material,  Entity entity,  BlockPos pos)`
- `public static boolean onPlayerAttackTarget(EntityPlayer player,  Entity target)`
- `public static boolean onTravelToDimension(Entity entity,  int dimension)`
- `public static RayTraceResult rayTraceEyes(EntityLivingBase entity,  double length)`
- `public static Vec3d rayTraceEyeHitVec(EntityLivingBase entity,  double length)`
- `public static EnumActionResult onInteractEntityAt(EntityPlayer player,  Entity entity,  RayTraceResult ray,  EnumHand hand)`
- `public static EnumActionResult onInteractEntityAt(EntityPlayer player,  Entity entity,  Vec3d vec3d,  EnumHand hand)`
- `public static EnumActionResult onInteractEntity(EntityPlayer player,  Entity entity,  EnumHand hand)`
- `public static EnumActionResult onItemRightClick(EntityPlayer player,  EnumHand hand)`
- `public static PlayerInteractEvent.LeftClickBlock onLeftClickBlock(EntityPlayer player,  BlockPos pos,  EnumFacing face,  Vec3d hitVec)`
- `public static PlayerInteractEvent.RightClickBlock onRightClickBlock(EntityPlayer player,  EnumHand hand,  BlockPos pos,  EnumFacing face,  Vec3d hitVec)`
- `public static void onEmptyClick(EntityPlayer player,  EnumHand hand)`
- `public static void onEmptyLeftClick(EntityPlayer player)`
- `public static LootTable loadLootTable(Gson gson,  ResourceLocation name,  java.lang.String data,  boolean custom,  LootTableManager lootTableManager)`
- `public static java.lang.String readPoolName(JsonObject json)`
- `public static java.lang.String readLootEntryName(JsonObject json,  java.lang.String type)`
- `public static LootEntry deserializeJsonLootEntry(java.lang.String type,  JsonObject json,  int weight,  int quality,  LootCondition[] conditions)`
- `public static java.lang.String getLootEntryType(LootEntry entry)`
- `@Deprecated public static boolean onThrowableImpact(EntityThrowable throwable,  RayTraceResult ray)` (deprecated)
  Deprecated. use ForgeEventFactory.onProjectileImpact(EntityThrowable, RayTraceResult)
- `public static boolean onCropsGrowPre(World worldIn,  BlockPos pos,  IBlockState state,  boolean def)`
- `public static void onCropsGrowPost(World worldIn,  BlockPos pos,  IBlockState state,  IBlockState blockState)`
- `public static java.lang.String getRegistryName(java.lang.Class<? extends TileEntity> type)`
- `public static boolean loadAdvancements(java.util.Map<ResourceLocation,Advancement.Builder> map)`
- `public static CriticalHitEvent getCriticalHit(EntityPlayer player,  Entity target,  boolean vanillaCritical,  float damageModifier)`
- `public static void sendRecipeBook(NetHandlerPlayServer connection,  SPacketRecipeBook.State state,  java.util.List<IRecipe> recipes,  java.util.List<IRecipe> display,  boolean isGuiOpen,  boolean isFilteringCraftable)`
- `public static void onAdvancement(EntityPlayerMP player,  Advancement advancement)`
- `public static java.lang.String getDefaultCreatorModId(ItemStack itemStack)`
  Used as the default implementation of Item.getCreatorModId(net.minecraft.item.ItemStack). Call that method instead.
- `public static boolean onFarmlandTrample(World world,  BlockPos pos,  IBlockState state,  float fallDistance,  Entity entity)`
- `public static DataSerializer<?> getSerializer(int id,  IntIdentityHashBiMap<DataSerializer<?>> vanilla)`
- `public static int getSerializerId(DataSerializer<?> serializer,  IntIdentityHashBiMap<DataSerializer<?>> vanilla)`

## ForgeInternalHandler

*class* `net.minecraftforge.common.ForgeInternalHandler`

### Methods
- `public void onEntityJoinWorld(EntityJoinWorldEvent event)`
- `public void onDimensionLoad(WorldEvent.Load event)`
- `public void onDimensionSave(WorldEvent.Save event)`
- `public void onDimensionUnload(WorldEvent.Unload event)`
- `public void onServerTick(TickEvent.ServerTickEvent event)`
- `public void checkSettings(TickEvent.ClientTickEvent event)`
- `public void onChunkUnload(ChunkEvent.Unload event)`

## ForgeModContainer

*class* `net.minecraftforge.common.ForgeModContainer`

All Implemented Interfaces: ModContainer, WorldAccessContainer

### Fields
- `public static final java.lang.String VERSION_CHECK_CAT` (= "version_checking")
- `public static int clumpingThreshold`
- `public static boolean removeErroringEntities`
- `public static boolean removeErroringTileEntities`
- `public static boolean fullBoundingBoxLadders`
- `public static double zombieSummonBaseChance`
- `public static int[] blendRanges`
- `public static float zombieBabyChance`
- `public static boolean shouldSortRecipies`
- `public static boolean disableVersionCheck`
- `public static boolean forgeLightPipelineEnabled`
- `public static boolean selectiveResourceReloadEnabled`
- `@Deprecated public static boolean replaceVanillaBucketModel` (deprecated)
  Deprecated.
- `public static boolean zoomInMissingModelTextInGui`
- `public static boolean forgeCloudsEnabled`
- `public static boolean disableStairSlabCulling`
- `public static boolean alwaysSetupTerrainOffThread`
- `public static boolean allowEmissiveItems`
- `public static int dimensionUnloadQueueDelay`
- `public static boolean logCascadingWorldGeneration`
- `public static boolean fixVanillaCascading`
- `public UniversalBucket universalBucket`

### Inherited fields
- from `net.minecraftforge.fml.common.ModContainer`: `EMPTY_PROPERTIES`

### Methods
- `public static ForgeModContainer getInstance()`
- `public java.lang.String getGuiClassName()`
- `public static Configuration getConfig()`
- `public void onConfigChanged(ConfigChangedEvent.OnConfigChangedEvent event)`
  By subscribing to the OnConfigChangedEvent we are able to execute code when our config screens are closed.
   This implementation uses the optional configID string to handle multiple Configurations using one event handler.
- `public void missingMapping(RegistryEvent.MissingMappings<Item> event)`
- `public void playerLogin(PlayerEvent.PlayerLoggedInEvent event)`
- `public boolean registerBus(EventBus bus,  LoadController controller)`
  Description copied from interface: ModContainer
  Register the event bus for the mod and the controller for error handling
   Returns if this bus was successfully registered - disabled mods and other
   mods that don't need real events should return false and avoid further
   processing
- `public void modConstruction(FMLConstructionEvent evt)`
- `public void preInit(FMLPreInitializationEvent evt)`
- `public void registrItems(RegistryEvent.Register<Item> event)`
- `public void postInit(FMLPostInitializationEvent evt)`
- `public void onAvailable(FMLLoadCompleteEvent evt)`
- `public void serverStarting(FMLServerStartingEvent evt)`
- `public void serverStopping(FMLServerStoppingEvent evt)`
- `public NBTTagCompound getDataForWriting(SaveHandler handler,  WorldInfo info)`
- `public void readData(SaveHandler handler,  WorldInfo info,  java.util.Map<java.lang.String,NBTBase> propertyMap,  NBTTagCompound tag)`
- `public void mappingChanged(FMLModIdMappingEvent evt)`
- `public java.io.File getSource()`
  Description copied from interface: ModContainer
  The location on the file system which this mod came from
- `public java.lang.Class<?> getCustomResourcePackClass()`
- `public java.util.List<java.lang.String> getOwnedPackages()`
- `public java.security.cert.Certificate getSigningCertificate()`
- `public java.net.URL getUpdateUrl()`

### Inherited methods
- from `net.minecraftforge.fml.common.DummyModContainer`: `acceptableMinecraftVersionRange`, `bindMetadata`, `canBeDisabled`, `getClassVersion`, `getCustomModProperties`, `getDependants`, `getDependencies`, `getDisplayVersion`, `getMetadata`, `getMod`, `getModId`, `getName`, `getProcessedVersion`, `getRequirements`, `getSharedModDescriptor`, `getSortingRules`, `getVersion`, `isImmutable`, `matches`, `setClassVersion`, `setEnabledState`, `shouldLoadInEnvironment`, `toString`

## ForgeVersion

*class* `net.minecraftforge.common.ForgeVersion`

### Fields
- `public static final java.lang.String MOD_ID` (= "forge")
- `public static final int majorVersion` (= 14)
- `public static final int minorVersion` (= 23)
- `public static final int revisionVersion` (= 5)
- `public static final int buildVersion` (= 2859)
- `public static final java.lang.String mcVersion` (= "1.12.2")
- `public static final java.lang.String mcpVersion` (= "9.42")

### Methods
- `public static int getMajorVersion()`
- `public static int getMinorVersion()`
- `public static int getRevisionVersion()`
- `public static int getBuildVersion()`
- `public static ForgeVersion.Status getStatus()`
- `public static java.lang.String getTarget()`
- `public static java.lang.String getVersion()`
- `public static void startVersionCheck()`
- `public static java.util.Map<ModContainer,java.net.URL> gatherMods()`
- `public static ForgeVersion.CheckResult getResult(ModContainer mod)`

## ForgeVersion.CheckResult

*class* `net.minecraftforge.common.ForgeVersion.CheckResult`

Enclosing class: ForgeVersion

### Fields
- `public final ForgeVersion.Status status`
- `public final ComparableVersion target`
- `public final java.util.Map<ComparableVersion,java.lang.String> changes`
- `public final java.lang.String url`

## ForgeVersion.Status

*enum* `net.minecraftforge.common.ForgeVersion.Status`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ForgeVersion.Status>

Enclosing class: ForgeVersion

### Fields
- `public static final ForgeVersion.Status PENDING`
- `public static final ForgeVersion.Status FAILED`
- `public static final ForgeVersion.Status UP_TO_DATE`
- `public static final ForgeVersion.Status OUTDATED`
- `public static final ForgeVersion.Status AHEAD`
- `public static final ForgeVersion.Status BETA`
- `public static final ForgeVersion.Status BETA_OUTDATED`

### Methods
- `public static ForgeVersion.Status[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ForgeVersion.Status c : ForgeVersion.Status.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ForgeVersion.Status valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public int getSheetOffset()`
- `public boolean shouldDraw()`
- `public boolean isAnimated()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## IMinecartCollisionHandler

*interface* `net.minecraftforge.common.IMinecartCollisionHandler`

This class defines a replacement for the default minecart collision code.
 Only one handler can be registered at a time. It it registered with EntityMinecart.registerCollisionHandler().
 If you use this, make it a configuration option.

### Methods
- `void onEntityCollision(EntityMinecart cart,  Entity other)`
  This basically replaces the function of the same name in EntityMinecart.
   Code in IMinecartHooks.applyEntityCollisionHook is still run.
  - param: cart - The cart that called the collision.
  - param: other - The object it collided with.
- `AxisAlignedBB getCollisionBox(EntityMinecart cart,  Entity other)`
  This function replaced the function of the same name in EntityMinecart.
   It is used to define whether minecarts collide with specific entities,
   for example items.
  - param: cart - The cart for which the collision box was requested.
  - param: other - The entity requesting the collision box.
  - returns: The collision box or null.
- `AxisAlignedBB getMinecartCollisionBox(EntityMinecart cart)`
  This function is used to define the box used for detecting minecart collisions.
   It is generally bigger that the normal collision box.
  - param: cart - The cart for which the collision box was requested.
  - returns: The collision box, cannot be null.
- `AxisAlignedBB getBoundingBox(EntityMinecart cart)`
  This function replaces the function of the same name in EntityMinecart.
   It defines whether minecarts are solid to the player.
  - param: cart - The cart for which the bounding box was requested.
  - returns: The bounding box or null.

## IPlantable

*interface* `net.minecraftforge.common.IPlantable`

### Methods
- `EnumPlantType getPlantType(IBlockAccess world,  BlockPos pos)`
- `IBlockState getPlant(IBlockAccess world,  BlockPos pos)`

## IRarity

*interface* `net.minecraftforge.common.IRarity`

Interface generalisation of EnumRarity.

### Methods
- `TextFormatting getColor()`
- `java.lang.String getName()`

## IShearable

*interface* `net.minecraftforge.common.IShearable`

This allows for mods to create there own Shear-like items
 and have them interact with Blocks/Entities without extra work.
 Also, if your block/entity supports the Shears, this allows you
 to support mod-shears as well.

### Methods
- `boolean isShearable(ItemStack item,  IBlockAccess world,  BlockPos pos)`
  Checks if the object is currently shearable
   Example: Sheep return false when they have no wool
  - param: item - The ItemStack that is being used, may be empty.
  - param: world - The current world.
  - param: pos - Block's position in world.
  - returns: If this is shearable, and onSheared should be called.
- `java.util.List<ItemStack> onSheared(ItemStack item,  IBlockAccess world,  BlockPos pos,  int fortune)`
  Performs the shear function on this object.
   This is called for both client, and server.
   The object should perform all actions related to being sheared,
   except for dropping of the items, and removal of the block.
   As those are handled by ItemShears itself.
  
   Returns a list of items that resulted from the shearing process.
  
   For entities, they should trust there internal location information
   over the values passed into this function.
  - param: item - The ItemStack that is being used, may be empty.
  - param: world - The current world.
  - param: pos - If this is a block, the block's position in world.
  - param: fortune - The fortune level of the shears being used.
  - returns: A List containing all items from this shearing. May be empty.

## ISpecialArmor

*interface* `net.minecraftforge.common.ISpecialArmor`

This interface is to be implemented by ItemArmor classes. It will allow to
 modify computation of damage and health loss. Computation will be called
 before the actual armor computation, which can then be cancelled.

### Methods
- `ISpecialArmor.ArmorProperties getProperties(EntityLivingBase player,  ItemStack armor,  DamageSource source,  double damage,  int slot)`
  Retrieves the modifiers to be used when calculating armor damage.
  
   Armor will higher priority will have damage applied to them before
   lower priority ones. If there are multiple pieces of armor with the
   same priority, damage will be distributed between them based on there
   absorption ratio.
  - param: player - The entity wearing the armor.
  - param: armor - The ItemStack of the armor item itself.
  - param: source - The source of the damage, which can be used to alter armor
 properties based on the type or source of damage.
  - param: damage - The total damage being applied to the entity
  - param: slot - The armor slot the item is in.
  - returns: A ArmorProperties instance holding information about how the armor effects damage.
- `int getArmorDisplay(EntityPlayer player,  ItemStack armor,  int slot)`
  Get the displayed effective armor.
  - param: player - The player wearing the armor.
  - param: armor - The ItemStack of the armor item itself.
  - param: slot - The armor slot the item is in.
  - returns: The number of armor points for display, 2 per shield.
- `void damageArmor(EntityLivingBase entity,  ItemStack stack,  DamageSource source,  int damage,  int slot)`
  Applies damage to the ItemStack. The mod is responsible for reducing the
   item durability and stack size. If the stack is depleted it will be cleaned
   up automatically.
  - param: entity - The entity wearing the armor
  - param: stack - The ItemStack of the armor item itself.
  - param: source - The source of the damage, which can be used to alter armor
 properties based on the type or source of damage.
  - param: damage - The amount of damage being applied to the armor
  - param: slot - The armor slot the item is in.
- `default boolean handleUnblockableDamage(EntityLivingBase entity,  ItemStack armor,  DamageSource source,  double damage,  int slot)`
  Simple check to see if the armor should interact with "Unblockable" damage
   sources. A fair number of vanilla damage sources have this tag, such as
   Anvils, Falling, Fire, and Magic.
  
   Returning true here means that the armor is able to meaningfully respond
   to this damage source. Otherwise, no interaction is allowed.

## ISpecialArmor.ArmorProperties

*class* `net.minecraftforge.common.ISpecialArmor.ArmorProperties`

All Implemented Interfaces: java.lang.Comparable<ISpecialArmor.ArmorProperties>

Enclosing interface: ISpecialArmor

### Fields
- `public int Priority`
- `public int AbsorbMax`
- `public double AbsorbRatio`
- `public double Armor`
- `public double Toughness`
- `public int Slot`

### Methods
- `public static float applyArmor(EntityLivingBase entity,  NonNullList<ItemStack> inventory,  DamageSource source,  double damage)`
  Gathers and applies armor reduction to damage being dealt to a entity.
  - param: entity - The Entity being damage
  - param: inventory - An array of armor items
  - param: source - The damage source type
  - param: damage - The total damage being done
  - returns: The left over damage that has not been absorbed by the armor
- `public int compareTo(ISpecialArmor.ArmorProperties o)`
- `public java.lang.String toString()`
- `public ISpecialArmor.ArmorProperties copy()`

## MinecraftForge

*class* `net.minecraftforge.common.MinecraftForge`

### Fields
- `public static final EventBus EVENT_BUS`
  The core Forge EventBusses, all events for Forge will be fired on these,
   you should use this to register all your listeners.
   This replaces every register*Handler() function in the old version of Forge.
   TERRAIN_GEN_BUS for terrain gen events
   ORE_GEN_BUS for ore gen events
   EVENT_BUS for everything else
- `public static final EventBus TERRAIN_GEN_BUS`
- `public static final EventBus ORE_GEN_BUS`
- `public static final java.lang.String MC_VERSION` (= "1.12.2")

### Methods
- `public static void addGrassSeed(ItemStack seed,  int weight)`
  Register a new seed to be dropped when breaking tall grass.
  - param: seed - The item to drop as a seed.
  - param: weight - The relative probability of the seeds,
 where wheat seeds are 10.

 Note: These functions may be going away soon, we're looking into loot tables....
- `public static void addGrassSeed(net.minecraftforge.common.ForgeHooks.SeedEntry seed)`
- `public static void initialize()`
  Method invoked by FML before any other mods are loaded.
- `public static void preloadCrashClasses(ASMDataTable table,  java.lang.String modID,  java.util.Set<java.lang.String> classes)`

## UsernameCache

*class* `net.minecraftforge.common.UsernameCache`

Caches player's last known usernames

 Modders should use getLastKnownUsername(UUID) to determine a players
 last known username.

 For convenience, getMap() is provided to get an immutable copy of
 the caches underlying map.

### Methods
- `protected static void setUsername(java.util.UUID uuid,  java.lang.String username)`
  Set a player's current username
  - param: uuid - the player's UUID
  - param: username - the player's username
- `protected static boolean removeUsername(java.util.UUID uuid)`
  Remove a player's username from the cache
  - param: uuid - the player's UUID
  - returns: if the cache contained the user
- `public static java.lang.String getLastKnownUsername(java.util.UUID uuid)`
  Get the player's last known username
  
   May be null
  - param: uuid - the player's UUID
  - returns: the player's last known username, or null if the
 cache doesn't have a record of the last username
- `public static boolean containsUUID(java.util.UUID uuid)`
  Check if the cache contains the given player's username
  - param: uuid - the player's UUID
  - returns: if the cache contains a username for the given player
- `public static java.util.Map<java.util.UUID,java.lang.String> getMap()`
  Get an immutable copy of the cache's underlying map
  - returns: the map
- `protected static void save()`
  Save the cache to file
- `protected static void load()`
  Load the cache from file

## WorldSpecificSaveHandler

*class* `net.minecraftforge.common.WorldSpecificSaveHandler`

All Implemented Interfaces: ISaveHandler

### Methods
- `public WorldInfo loadWorldInfo()`
- `public void checkSessionLock()  throws MinecraftException`
  - throws: MinecraftException
- `public IChunkLoader getChunkLoader(WorldProvider var1)`
- `public void saveWorldInfoWithPlayer(WorldInfo var1,  NBTTagCompound var2)`
- `public void saveWorldInfo(WorldInfo var1)`
- `public IPlayerFileData getPlayerNBTManager()`
- `public void flush()`
- `public java.io.File getWorldDirectory()`
- `public java.io.File getMapFileFromName(java.lang.String name)`
- `public TemplateManager getStructureTemplateManager()`

## WorldWorkerManager

*class* `net.minecraftforge.common.WorldWorkerManager`

### Methods
- `public static void tick(boolean start)`
- `public static void addWorker(WorldWorkerManager.IWorker worker)`
- `public static void clear()`

## WorldWorkerManager.IWorker

*interface* `net.minecraftforge.common.WorldWorkerManager.IWorker`

Enclosing class: WorldWorkerManager

### Methods
- `boolean hasWork()`
- `default void work()`
- `default boolean doWork()`
  Perform a task, returning true from this will have the manager call this function again this tick if there is time left.
   Returning false will skip calling this worker until next tick.
