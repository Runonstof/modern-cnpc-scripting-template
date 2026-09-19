# net.minecraftforge.fml.common.registry

- [EntityEntry](#entityentry)
- [EntityEntryBuilder](#entityentrybuilder)
- [EntityEntryBuilder.BuiltEntityEntry](#entityentrybuilder.builtentityentry)
- [EntityEntryBuilder.Spawn](#entityentrybuilder.spawn)
- [EntityRegistry](#entityregistry)
- [EntityRegistry.EntityRegistration](#entityregistry.entityregistration)
- [ExistingSubstitutionException](#existingsubstitutionexception)
- [ForgeRegistries](#forgeregistries)
- [GameRegistry](#gameregistry)
- [GameRegistry.ItemStackHolder](#gameregistry.itemstackholder)
- [GameRegistry.ObjectHolder](#gameregistry.objectholder)
- [IEntityAdditionalSpawnData](#ientityadditionalspawndata)
- [ItemStackHolderInjector](#itemstackholderinjector)
- [IThrowableEntity](#ithrowableentity)
- [VillagerRegistry](#villagerregistry)
- [VillagerRegistry.IVillageCreationHandler](#villagerregistry.ivillagecreationhandler)
- [VillagerRegistry.VillagerCareer](#villagerregistry.villagercareer)
- [VillagerRegistry.VillagerProfession](#villagerregistry.villagerprofession)
## EntityEntry

*class* `net.minecraftforge.fml.common.registry.EntityEntry`

All Implemented Interfaces: IForgeRegistryEntry<EntityEntry>

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `protected void init()`
- `public java.lang.Class<? extends Entity> getEntityClass()`
- `public java.lang.String getName()`
- `public EntityList.EntityEggInfo getEgg()`
- `public void setEgg(EntityList.EntityEggInfo egg)`
- `public Entity newInstance(World world)`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EntityEntryBuilder

*class* `net.minecraftforge.fml.common.registry.EntityEntryBuilder`

An entity registry entry builder.

### Methods
- `public static <E extends Entity> EntityEntryBuilder<E> create()`
  Creates a new entity entry builder.
  - returns: A new entity entry builder
- `public final EntityEntryBuilder<E> entity(java.lang.Class<? extends E> entity)`
  Sets the class of the entity.
  
   Entities will be constructed using a constructor accepting World. If you wish
   to use your own factory, use factory(Function).
  - param: entity - The entity class
  - returns: This builder
  - throws: java.lang.NullPointerException - If entity is null
- `public final EntityEntryBuilder<E> factory(java.util.function.Function<World,E> factory)`
  Sets the factory of the entity.
  - param: factory - The entity factory
  - returns: This builder
  - throws: java.lang.NullPointerException - If entity is null
- `public final EntityEntryBuilder<E> id(ResourceLocation id,  int network)`
  Sets the id of the entity.
  - param: id - The entity id
  - param: network - The network id
  - returns: This builder
  - throws: java.lang.NullPointerException - If id is null
- `public final EntityEntryBuilder<E> id(java.lang.String id,  int network)`
  Sets the id of the entity.
  - param: id - The entity id
  - param: network - The network id
  - returns: This builder
  - throws: java.lang.NullPointerException - If id is null
- `public final EntityEntryBuilder<E> name(java.lang.String name)`
  Sets the name of the entity.
  - param: name - The entity name
  - returns: This builder
  - throws: java.lang.NullPointerException - If name is null
- `public final EntityEntryBuilder<E> tracker(int range,  int updateFrequency,  boolean sendVelocityUpdates)`
  Sets entity tracking information.
  - param: range - The tracking range
  - param: updateFrequency - The tracking update frequency
  - param: sendVelocityUpdates - If the entity should send velocity updates
  - returns: This builder
- `public final EntityEntryBuilder<E> spawn(EnumCreatureType type,  int weight,  int min,  int max,  Biome... biomes)`
  Adds a spawn entry.
  - param: type - The creature type
  - param: weight - The spawn entry weight
  - param: min - The minimum spawn count
  - param: max - The maximum spawn count
  - param: biomes - The biomes to add an entry in
  - returns: This builder
  - throws: java.lang.IllegalArgumentException - If the entity is not a EntityLiving
  - throws: java.lang.NullPointerException - If type is null
  - throws: java.lang.NullPointerException - If biomes is null
- `public final EntityEntryBuilder<E> spawn(EnumCreatureType type,  int weight,  int min,  int max,  java.lang.Iterable<Biome> biomes)`
  Adds a spawn entry.
  - param: type - The creature type
  - param: weight - The spawn entry weight
  - param: min - The minimum spawn count
  - param: max - The maximum spawn count
  - param: biomes - The biomes to add an entry in
  - returns: This builder
  - throws: java.lang.IllegalArgumentException - If the entity is not a EntityLiving
  - throws: java.lang.NullPointerException - If type is null
  - throws: java.lang.NullPointerException - If biomes is null
- `public final EntityEntryBuilder<E> egg(int primaryColor,  int secondaryColor)`
  Sets the egg of the entity.
  - param: primaryColor - the primary egg color
  - param: secondaryColor - the secondary egg color
  - returns: This builder
- `public EntityEntry build()`
  Create an entity entry based on the data in this builder.
  - returns: The entity entry
  - throws: java.lang.IllegalStateException - If the entity class has not been provided
  - throws: java.lang.IllegalStateException - If the entity id has not been provided
  - throws: java.lang.IllegalStateException - If the entity name has not been provided
  - throws: java.lang.IllegalStateException - If spawns have been provided for a non EntityLiving
  - throws: ReflectionHelper.UnknownConstructorException - If a factory has not been provided
 and entity does not have a constructor accepting World

## EntityEntryBuilder.BuiltEntityEntry

*class* `net.minecraftforge.fml.common.registry.EntityEntryBuilder.BuiltEntityEntry`

All Implemented Interfaces: IForgeRegistryEntry<EntityEntry>

Enclosing class: EntityEntryBuilder<E extends Entity>

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `protected final void init()`
- `public final void addedToRegistry()`

### Inherited methods
- from `net.minecraftforge.fml.common.registry.EntityEntry`: `getEgg`, `getEntityClass`, `getName`, `newInstance`, `setEgg`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EntityEntryBuilder.Spawn

*class* `net.minecraftforge.fml.common.registry.EntityEntryBuilder.Spawn`

Enclosing class: EntityEntryBuilder<E extends Entity>

## EntityRegistry

*class* `net.minecraftforge.fml.common.registry.EntityRegistry`

### Methods
- `public static EntityRegistry instance()`
- `public static void registerModEntity(ResourceLocation registryName,  java.lang.Class<? extends Entity> entityClass,  java.lang.String entityName,  int id,  java.lang.Object mod,  int trackingRange,  int updateFrequency,  boolean sendsVelocityUpdates)`
  Register the mod entity type with FML
  - param: entityClass - The entity class
  - param: entityName - A unique name for the entity
  - param: id - A mod specific ID for the entity
  - param: mod - The mod
  - param: trackingRange - The range at which MC will send tracking updates
  - param: updateFrequency - The frequency of tracking updates
  - param: sendsVelocityUpdates - Whether to send velocity information packets as well
- `public static void registerModEntity(ResourceLocation registryName,  java.lang.Class<? extends Entity> entityClass,  java.lang.String entityName,  int id,  java.lang.Object mod,  int trackingRange,  int updateFrequency,  boolean sendsVelocityUpdates,  int eggPrimary,  int eggSecondary)`
  Register the mod entity type with FML
   This will also register a spawn egg.
  - param: entityClass - The entity class
  - param: entityName - A unique name for the entity
  - param: id - A mod specific ID for the entity
  - param: mod - The mod
  - param: trackingRange - The range at which MC will send tracking updates
  - param: updateFrequency - The frequency of tracking updates
  - param: sendsVelocityUpdates - Whether to send velocity information packets as well
  - param: eggPrimary - Primary egg color
  - param: eggSecondary - Secondary egg color
- `public static void registerEgg(ResourceLocation name,  int primary,  int secondary)`
  Registers a spawn egg for the specified entity class.
   The class must already be registered in the EntityList.classToStringMapping.
   This can be done either by using the global ID system, or preferably the registerModEntity functions above.
   Once registered mob eggs can be created by using minecraft:spawn_egg with NBT entry 'entity_name' with
   value of the name this class is registered in the classToStringMapping with.
  - param: name - The entity ResourceLocation
  - param: primary - Primary egg color
  - param: secondary - Secondary egg color
- `public static void addSpawn(java.lang.Class<? extends EntityLiving> entityClass,  int weightedProb,  int min,  int max,  EnumCreatureType typeOfCreature,  Biome... biomes)`
  Add a spawn entry for the supplied entity in the supplied Biome list
  - param: entityClass - Entity class added
  - param: weightedProb - Probability
  - param: min - Min spawn count
  - param: max - Max spawn count
  - param: typeOfCreature - Type of spawn
  - param: biomes - List of biomes
- `public static void addSpawn(java.lang.String entityName,  int weightedProb,  int min,  int max,  EnumCreatureType typeOfCreature,  Biome... biomes)`
  Add a spawn entry for the supplied entity in the supplied Biome list
  - param: entityName - The entity name
  - param: weightedProb - Probability
  - param: min - Min spawn count
  - param: max - Max spawn count
  - param: typeOfCreature - type of spawn
  - param: biomes - List of biomes
- `public static void removeSpawn(java.lang.Class<? extends EntityLiving> entityClass,  EnumCreatureType typeOfCreature,  Biome... biomes)`
  Remove the spawn entry for the supplied entity
  - param: entityClass - The entity class
  - param: typeOfCreature - type of spawn
  - param: biomes - Biomes to remove from
- `public static void removeSpawn(java.lang.String entityName,  EnumCreatureType typeOfCreature,  Biome... biomes)`
  Remove the spawn entry for the supplied entity
  - param: entityName - Name of entity being removed
  - param: typeOfCreature - type of spawn
  - param: biomes - Biomes to remove from
- `public EntityRegistry.EntityRegistration lookupModSpawn(java.lang.Class<? extends Entity> clazz,  boolean keepLooking)`
- `public EntityRegistry.EntityRegistration lookupModSpawn(ModContainer mc,  int modEntityId)`
- `public boolean tryTrackingEntity(EntityTracker entityTracker,  Entity entity)`
- `public static EntityEntry getEntry(java.lang.Class<? extends Entity> entityClass)`

## EntityRegistry.EntityRegistration

*class* `net.minecraftforge.fml.common.registry.EntityRegistry.EntityRegistration`

Enclosing class: EntityRegistry

### Methods
- `public ResourceLocation getRegistryName()`
- `@Deprecated public java.lang.Class<? extends Entity> getEntityClass()` (deprecated)
  Deprecated.
- `public Entity newInstance(World world)`
- `public ModContainer getContainer()`
- `public java.lang.String getEntityName()`
- `public int getModEntityId()`
- `public int getTrackingRange()`
- `public int getUpdateFrequency()`
- `public boolean sendsVelocityUpdates()`
- `public boolean usesVanillaSpawning()`
- `public boolean hasCustomSpawning()`
- `public Entity doCustomSpawning(FMLMessage.EntitySpawnMessage spawnMsg)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void setCustomSpawning(java.util.function.Function<FMLMessage.EntitySpawnMessage,Entity> callable,  boolean usesVanillaSpawning)`

## ExistingSubstitutionException

*class* `net.minecraftforge.fml.common.registry.ExistingSubstitutionException`

All Implemented Interfaces: java.io.Serializable

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ForgeRegistries

*class* `net.minecraftforge.fml.common.registry.ForgeRegistries`

A class that exposes static references to all vanilla and Forge registries.
 Created to have a central place to access the registries directly if modders need.
 It is still advised that if you are registering things to go through GameRegistry register methods, but queries and iterations can use this.

### Fields
- `public static final IForgeRegistry<Block> BLOCKS`
- `public static final IForgeRegistry<Item> ITEMS`
- `public static final IForgeRegistry<Potion> POTIONS`
- `public static final IForgeRegistry<Biome> BIOMES`
- `public static final IForgeRegistry<SoundEvent> SOUND_EVENTS`
- `public static final IForgeRegistry<PotionType> POTION_TYPES`
- `public static final IForgeRegistry<Enchantment> ENCHANTMENTS`
- `public static final IForgeRegistry<VillagerRegistry.VillagerProfession> VILLAGER_PROFESSIONS`
- `public static final IForgeRegistry<EntityEntry> ENTITIES`
- `public static final IForgeRegistry<IRecipe> RECIPES`
- `public static final IForgeRegistry<DataSerializerEntry> DATA_SERIALIZERS`

## GameRegistry

*class* `net.minecraftforge.fml.common.registry.GameRegistry`

### Methods
- `public static void registerWorldGenerator(IWorldGenerator generator,  int modGenerationWeight)`
  Register a world generator - something that inserts new block types into the world
  - param: generator - the generator
  - param: modGenerationWeight - a weight to assign to this generator. Heavy weights tend to sink to the bottom of
 list of world generators (i.e. they run later)
- `public static void registerEntitySelector(IEntitySelectorFactory factory,  java.lang.String... arguments)`
  Registers a entity selector factory which is used to create predicates whenever a command containing selectors is executed
   Any non vanilla arguments that you expect has to be registered. Otherwise Minecraft will throw an CommandException on usage.
  
   If you want to react to a command like "/kill @e[xyz=5]", you would have to register the argument "xyz" here and check for that argument in the factory.
   One factory can listen to any number of arguments as long as they are registered here.
  
   For inter mod compatibility you might want to use "modid:xyz" (e.g. "forge:min_health") as argument.
  
   For an example usage, see CustomEntitySelectorTest
  - param: arguments - Expected string arguments in commands
- `public static java.util.List<<any>> createEntitySelectors(java.util.Map<java.lang.String,java.lang.String> arguments,  java.lang.String mainSelector,  ICommandSender sender,  Vec3d position)`
  Creates a list of entity selectors using the registered factories.
   Should probably only be called by Forge
- `public static void generateWorld(int chunkX,  int chunkZ,  World world,  IChunkGenerator chunkGenerator,  IChunkProvider chunkProvider)`
  Callback hook for world gen - if your mod wishes to add extra mod related generation to the world
   call this
  - param: chunkX - Chunk X coordinate
  - param: chunkZ - Chunk Z coordinate
  - param: world - World we're generating into
  - param: chunkGenerator - The chunk generator
  - param: chunkProvider - The chunk provider
- `public static <K extends IForgeRegistryEntry<K>> IForgeRegistry<K> findRegistry(java.lang.Class<K> registryType)`
  Retrieves the registry associated with this super class type.
   If the return is non-null it is HIGHLY recommended that modders cache this
   value as the return will never change for a given type in a single run of Minecraft once set.
  - param: registryType - The base class of items in this registry.
  - returns: The registry, Null if none is registered.
- `public static void addShapedRecipe(ResourceLocation name,  ResourceLocation group,  ItemStack output,  java.lang.Object... params)`
- `public static void addShapelessRecipe(ResourceLocation name,  ResourceLocation group,  ItemStack output,  Ingredient... params)`
- `public static void addSmelting(Block input,  ItemStack output,  float xp)`
- `public static void addSmelting(Item input,  ItemStack output,  float xp)`
- `public static void addSmelting(ItemStack input,  ItemStack output,  float xp)`
- `@Deprecated public static void registerTileEntity(java.lang.Class<? extends TileEntity> tileEntityClass,  java.lang.String key)` (deprecated)
  Deprecated.
- `public static void registerTileEntity(java.lang.Class<? extends TileEntity> tileEntityClass,  ResourceLocation key)`
- `@Deprecated public static void registerFuelHandler(IFuelHandler handler)` (deprecated)
  Deprecated. set your item's Item.getItemBurnTime(ItemStack) or subscribe to FurnaceFuelBurnTimeEvent instead.
- `@Deprecated public static int getFuelValue(ItemStack itemStack)` (deprecated)
  Deprecated. use ForgeEventFactory.getItemBurnTime(ItemStack)
- `@Deprecated public static int getFuelValueLegacy(ItemStack itemStack)` (deprecated)
  Deprecated. use ForgeEventFactory.getItemBurnTime(ItemStack)
- `public static ItemStack makeItemStack(java.lang.String itemName,  int meta,  int stackSize,  java.lang.String nbtString)`
  Makes an ItemStack based on the itemName reference, with supplied meta, stackSize and nbt, if possible
  
   Will return null if the item doesn't exist (because it's not from a loaded mod for example)
   Will throw a RuntimeException if the nbtString is invalid for use in an ItemStack
  - param: itemName - a registry name reference
  - param: meta - the meta
  - param: stackSize - the stack size
  - param: nbtString - an nbt stack as a string, will be processed by JsonToNBT
  - returns: a new itemstack

## GameRegistry.ItemStackHolder

*annotation* `net.minecraftforge.fml.common.registry.GameRegistry.ItemStackHolder`

ItemStackHolder can be used to automatically populate public static final fields with
 ItemStack instances, referring a specific item, potentially configured with NBT.
 These values can then be used in things like recipes and other places where ItemStacks
 might be required.

 If the item is not found, the field will be populated with null.

## GameRegistry.ObjectHolder

*annotation* `net.minecraftforge.fml.common.registry.GameRegistry.ObjectHolder`

ObjectHolder can be used to automatically populate public static final fields with entries
 from the registry. These values can then be referred within mod code directly.

## IEntityAdditionalSpawnData

*interface* `net.minecraftforge.fml.common.registry.IEntityAdditionalSpawnData`

A interface for Entities that need extra information to be communicated
 between the server and client when they are spawned.

### Methods
- `void writeSpawnData(ByteBuf buffer)`
  Called by the server when constructing the spawn packet.
   Data should be added to the provided stream.
  - param: buffer - The packet data stream
- `void readSpawnData(ByteBuf additionalData)`
  Called by the client when it receives a Entity spawn packet.
   Data should be read out of the stream in the same way as it was written.
  - param: additionalData - The packet data stream

## ItemStackHolderInjector

*enum* `net.minecraftforge.fml.common.registry.ItemStackHolderInjector`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ItemStackHolderInjector>

### Fields
- `public static final ItemStackHolderInjector INSTANCE`

### Methods
- `public static ItemStackHolderInjector[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ItemStackHolderInjector c : ItemStackHolderInjector.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ItemStackHolderInjector valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public void inject()`
- `public void findHolders(ASMDataTable table)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## IThrowableEntity

*interface* `net.minecraftforge.fml.common.registry.IThrowableEntity`

This interface should be implemented by an Entity that can be 'thrown', like snowballs.
 This was created to mimic ModLoaderMP's 'owner' functionality.

### Methods
- `Entity getThrower()`
  Gets the entity that threw/created this entity.
  - returns: The owner instance, Null if none.
- `void setThrower(Entity entity)`
  Sets the entity that threw/created this entity.
  - param: entity - The new thrower/creator.

## VillagerRegistry

*class* `net.minecraftforge.fml.common.registry.VillagerRegistry`

Registry for villager trading control

### Fields
- `public static final VillagerRegistry.VillagerProfession FARMER`

### Methods
- `public static VillagerRegistry instance()`
- `public void registerVillageCreationHandler(VillagerRegistry.IVillageCreationHandler handler)`
  Register a new village creation handler
  - param: handler -
- `public static void addExtraVillageComponents(java.util.List<StructureVillagePieces.PieceWeight> list,  java.util.Random random,  int i)`
- `public static StructureVillagePieces.Village getVillageComponent(StructureVillagePieces.PieceWeight villagePiece,  StructureVillagePieces.Start startPiece,  java.util.List<StructureComponent> pieces,  java.util.Random random,  int p1,  int p2,  int p3,  EnumFacing facing,  int p5)`
- `public static void setRandomProfession(EntityVillager entity,  java.util.Random rand)`
  Hook called when spawning a Villager, sets it's profession to a random registered profession.
  - param: entity - The new entity
  - param: rand - The world's RNG
- `public static void setRandomProfession(EntityZombieVillager entity,  java.util.Random rand)`
- `public static void onSetProfession(EntityVillager entity,  int network)`
- `public static void onSetProfession(EntityZombieVillager entity,  int network)`
- `@Deprecated public static VillagerRegistry.VillagerProfession getById(int network)` (deprecated)
  Deprecated.
- `@Deprecated public static int getId(VillagerRegistry.VillagerProfession prof)` (deprecated)
  Deprecated.

## VillagerRegistry.IVillageCreationHandler

*interface* `net.minecraftforge.fml.common.registry.VillagerRegistry.IVillageCreationHandler`

Allow access to the StructureVillagePieces array controlling new village
 creation so you can insert your own new village pieces

Enclosing class: VillagerRegistry

### Methods
- `StructureVillagePieces.PieceWeight getVillagePieceWeight(java.util.Random random,  int i)`
  Called when MapGenVillage is creating a new village
  - param: random -
  - param: i -
- `java.lang.Class<?> getComponentClass()`
  The class of the root structure component to add to the village
- `StructureVillagePieces.Village buildComponent(StructureVillagePieces.PieceWeight villagePiece,  StructureVillagePieces.Start startPiece,  java.util.List<StructureComponent> pieces,  java.util.Random random,  int p1,  int p2,  int p3,  EnumFacing facing,  int p5)`
  Build an instance of the village component StructureVillagePieces
  - param: villagePiece -
  - param: startPiece -
  - param: pieces -
  - param: random -
  - param: p1 -
  - param: p2 -
  - param: p3 -
  - param: facing -
  - param: p5 -

## VillagerRegistry.VillagerCareer

*class* `net.minecraftforge.fml.common.registry.VillagerRegistry.VillagerCareer`

Enclosing class: VillagerRegistry

### Methods
- `public java.lang.String getName()`
- `public VillagerRegistry.VillagerCareer addTrade(int level,  EntityVillager.ITradeList... trades)`
- `public java.util.List<EntityVillager.ITradeList> getTrades(int level)`
- `public boolean equals(java.lang.Object o)`

## VillagerRegistry.VillagerProfession

*class* `net.minecraftforge.fml.common.registry.VillagerRegistry.VillagerProfession`

All Implemented Interfaces: IForgeRegistryEntry<VillagerRegistry.VillagerProfession>

Enclosing class: VillagerRegistry

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ResourceLocation getSkin()`
- `public ResourceLocation getZombieSkin()`
- `public VillagerRegistry.VillagerCareer getCareer(int id)`
- `public int getRandomCareer(java.util.Random rand)`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`
