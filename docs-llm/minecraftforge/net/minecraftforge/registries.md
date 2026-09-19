# net.minecraftforge.registries

- [Class MissingMappingsEvent.Action](#class-missingmappingsevent.action)
- [DataPackRegistriesHooks](#datapackregistrieshooks)
- [DataPackRegistryEvent](#datapackregistryevent)
- [DataPackRegistryEvent.DataPackRegistryData](#datapackregistryevent.datapackregistrydata)
- [DataPackRegistryEvent.NewRegistry](#datapackregistryevent.newregistry)
- [DeferredRegister](#deferredregister)
- [DeferredRegister.EventDispatcher](#deferredregister.eventdispatcher)
- [DeferredRegister.RegistryHolder](#deferredregister.registryholder)
- [ForgeDeferredRegistriesSetup](#forgedeferredregistriessetup)
- [ForgeRegistries](#forgeregistries)
- [ForgeRegistries.Keys](#forgeregistries.keys)
- [ForgeRegistry](#forgeregistry)
- [ForgeRegistry.DumpRow](#forgeregistry.dumprow)
- [ForgeRegistry.OverrideOwner](#forgeregistry.overrideowner)
- [ForgeRegistry.RegistryCodec](#forgeregistry.registrycodec)
- [ForgeRegistry.Snapshot](#forgeregistry.snapshot)
- [ForgeRegistryTag](#forgeregistrytag)
- [ForgeRegistryTagManager](#forgeregistrytagmanager)
- [GameData](#gamedata)
- [GameData.AttributeCallbacks](#gamedata.attributecallbacks)
- [GameData.BlockCallbacks](#gamedata.blockcallbacks)
- [GameData.ClearableObjectIntIdentityMap](#gamedata.clearableobjectintidentitymap)
- [GameData.ItemCallbacks](#gamedata.itemcallbacks)
- [GameData.PointOfInterestTypeCallbacks](#gamedata.pointofinteresttypecallbacks)
- [IdMappingEvent](#idmappingevent)
- [IdMappingEvent.IdRemapping](#idmappingevent.idremapping)
- [IdMappingEvent.ModRemapping](#idmappingevent.modremapping)
- [IForgeRegistry](#iforgeregistry)
- [IForgeRegistry.AddCallback](#iforgeregistry.addcallback)
- [IForgeRegistry.BakeCallback](#iforgeregistry.bakecallback)
- [IForgeRegistry.ClearCallback](#iforgeregistry.clearcallback)
- [IForgeRegistry.CreateCallback](#iforgeregistry.createcallback)
- [IForgeRegistry.MissingFactory](#iforgeregistry.missingfactory)
- [IForgeRegistry.ValidateCallback](#iforgeregistry.validatecallback)
- [IForgeRegistryInternal](#iforgeregistryinternal)
- [IForgeRegistryModifiable](#iforgeregistrymodifiable)
- [ILockableRegistry](#ilockableregistry)
- [MissingMappingsEvent](#missingmappingsevent)
- [MissingMappingsEvent.Mapping](#missingmappingsevent.mapping)
- [NamespacedDefaultedWrapper](#namespaceddefaultedwrapper)
- [NamespacedDefaultedWrapper.Factory](#namespaceddefaultedwrapper.factory)
- [NamespacedWrapper](#namespacedwrapper)
- [NamespacedWrapper.Factory](#namespacedwrapper.factory)
- [NewRegistryEvent](#newregistryevent)
- [NewRegistryEvent.RegistryData](#newregistryevent.registrydata)
- [NewRegistryEvent.RegistryHolder](#newregistryevent.registryholder)
- [ObjectHolder](#objectholder)
- [ObjectHolderRef](#objectholderref)
- [ObjectHolderRegistry](#objectholderregistry)
- [ObjectHolderRegistry.VanillaObjectHolderData](#objectholderregistry.vanillaobjectholderdata)
- [RegisterEvent](#registerevent)
- [RegisterEvent.RegisterHelper](#registerevent.registerhelper)
- [RegistryBuilder](#registrybuilder)
- [RegistryManager](#registrymanager)
- [RegistryObject](#registryobject)
## Class MissingMappingsEvent.Action

*enum* `net.minecraftforge.registries.Class MissingMappingsEvent.Action`

Actions you can take with this missing mapping.

 IGNORE means this missing mapping will be ignored.
 WARN means this missing mapping will generate a warning.
 FAIL means this missing mapping will prevent the world from loading.

Enclosing class: MissingMappingsEvent

### Methods
- `public static MissingMappingsEvent.Action[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static MissingMappingsEvent.Action valueOf(String name)`
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

## DataPackRegistriesHooks

*class* `net.minecraftforge.registries.DataPackRegistriesHooks`

### Fields
- `private static final Map<ResourceKey<? extends Registry<?>>,RegistrySynchronization.NetworkedRegistryData<?>> NETWORKABLE_REGISTRIES`
- `private static final List<RegistryDataLoader.RegistryData<?>> DATA_PACK_REGISTRIES`
- `private static final List<RegistryDataLoader.RegistryData<?>> DATA_PACK_REGISTRIES_VIEW`
- `private static final Set<ResourceKey<? extends Registry<?>>> SYNCED_CUSTOM_REGISTRIES`
- `private static final Set<ResourceKey<? extends Registry<?>>> SYNCED_CUSTOM_REGISTRIES_VIEW`

### Methods
- `public static Map<ResourceKey<? extends Registry<?>>,RegistrySynchronization.NetworkedRegistryData<?>> grabNetworkableRegistries(com.google.common.collect.ImmutableMap.Builder<ResourceKey<? extends Registry<?>>,RegistrySynchronization.NetworkedRegistryData<?>> builder)`
- `static <T> void addRegistryCodec(DataPackRegistryEvent.DataPackRegistryData<T> data)`
- `public static List<RegistryDataLoader.RegistryData<?>> getDataPackRegistries()`
  Returns An unmodifiable view of the list of datapack registries..
   These registries are loaded from per-world datapacks on server startup.
  - returns: An unmodifiable view of the list of datapack registries
- `public static Stream<RegistryDataLoader.RegistryData<?>> getDataPackRegistriesWithDimensions()`
- `public static Set<ResourceKey<? extends Registry<?>>> getSyncedCustomRegistries()`
  Returns An unmodifiable view of the set of synced non-vanilla datapack registry IDs.
   Clients must have each of a server's synced datapack registries to be able to connect to that server;
   vanilla clients therefore cannot connect if this list is non-empty on the server.
  - returns: An unmodifiable view of the set of synced non-vanilla datapack registry IDs

## DataPackRegistryEvent

*class* `net.minecraftforge.registries.DataPackRegistryEvent`

## DataPackRegistryEvent.DataPackRegistryData

*record* `net.minecraftforge.registries.DataPackRegistryEvent.DataPackRegistryData`

Enclosing class: DataPackRegistryEvent

### Fields
- `private final RegistryDataLoader.RegistryData<T> loaderData`
  The field for the loaderData record component.
- `@Nullable private final @Nullable com.mojang.serialization.Codec<T> networkCodec`
  The field for the networkCodec record component.

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
- `public RegistryDataLoader.RegistryData<T> loaderData()`
  Returns the value of the loaderData record component.
  - returns: the value of the loaderData record component
- `@Nullable public @Nullable com.mojang.serialization.Codec<T> networkCodec()`
  Returns the value of the networkCodec record component.
  - returns: the value of the networkCodec record component

## DataPackRegistryEvent.NewRegistry

*class* `net.minecraftforge.registries.DataPackRegistryEvent.NewRegistry`

Fired when datapack registries can be registered.
 Datapack registries are registries which can only load entries through JSON files from datapacks.

 Data JSONs will be loaded from data/<datapack_namespace>/modid/registryname/, where modid is the namespace of the registry key.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 on both logical sides.

Enclosing class: DataPackRegistryEvent

### Fields
- `private final List<DataPackRegistryEvent.DataPackRegistryData<?>> registryDataList`

### Methods
- `public <T> void dataPackRegistry(ResourceKey<Registry<T>> registryKey,  com.mojang.serialization.Codec<T> codec)`
  Registers the given registry key as an unsynced datapack registry, which will cause data to be loaded from
   a datapack folder based on the registry's name. The datapack registry is not required to be present
   on clients when connecting to servers with the mod/registry.
  
   Data JSONs will be loaded from data/<datapack_namespace>/modid/registryname/, where modid is the namespace of the registry key.
  - param: registryKey - the root registry key of the new datapack registry
  - param: codec - the codec to be used for loading data from datapacks on servers
- `public <T> void dataPackRegistry(ResourceKey<Registry<T>> registryKey,  com.mojang.serialization.Codec<T> codec,  @Nullable  @Nullable com.mojang.serialization.Codec<T> networkCodec)`
  Registers the registry key as a datapack registry, which will cause data to be loaded from
   a datapack folder based on the registry's name.
  
   Data JSONs will be loaded from data/<datapack_namespace>/modid/registryname/, where modid is the namespace of the registry key.
  - param: registryKey - the root registry key of the new datapack registry
  - param: codec - the codec to be used for loading data from datapacks on servers
  - param: networkCodec - the codec to be used for syncing loaded data to clients.
 If networkCodec is null, data will not be synced, and clients are not required to have this
 datapack registry to join a server.

 If networkCodec is not null, clients must have this datapack registry/mod
 when joining a server that has this datapack registry/mod.
 The data will be synced using the network codec and accessible via ClientPacketListener.registryAccess().
- `void process()`

## DeferredRegister

*class* `net.minecraftforge.registries.DeferredRegister`

Utility class to help with managing registry entries.
 Maintains a list of all suppliers for entries and registers them during the proper Register event.
 Suppliers should return NEW instances every time.

Example Usage:

 private static final DeferredRegister<Item> ITEMS = DeferredRegister.create(ForgeRegistries.ITEMS, MODID);
 private static final DeferredRegister<Block> BLOCKS = DeferredRegister.create(ForgeRegistries.BLOCKS, MODID);

 public static final RegistryObject<Block> ROCK_BLOCK = BLOCKS.register("rock", () -> new Block(Block.Properties.create(Material.ROCK)));
 public static final RegistryObject<Item> ROCK_ITEM = ITEMS.register("rock", () -> new BlockItem(ROCK_BLOCK.get(), new Item.Properties().group(ItemGroup.MISC)));

 public ExampleMod() {
 ITEMS.register(FMLJavaModLoadingContext.get().getModEventBus());
 BLOCKS.register(FMLJavaModLoadingContext.get().getModEventBus());
 }

### Fields
- `private final ResourceKey<? extends Registry<T>> registryKey`
- `private final String modid`
- `private final boolean optionalRegistry`
- `private final Map<RegistryObject<T>,Supplier<? extends T>> entries`
- `private final Set<RegistryObject<T>> entriesView`
- `@Nullable private @Nullable Supplier<RegistryBuilder<?>> registryFactory`
- `@Nullable private @Nullable com.google.common.collect.SetMultimap<TagKey<T>,Supplier<T>> optionalTags`
- `private boolean seenRegisterEvent`

### Methods
- `public static <B> DeferredRegister<B> create(IForgeRegistry<B> reg,  String modid)`
  DeferredRegister factory for forge registries that exist before this DeferredRegister is created.
  
   If you have a supplier, do not use this method.
   Instead, use one of the other factories that takes in a registry key or registry name.
  - param: reg - the forge registry to wrap
  - param: modid - the namespace for all objects registered to this DeferredRegister
- `public static <B> DeferredRegister<B> create(@Deprecated(forRemoval=true,since="1.20.2")  Supplier<IForgeRegistry<B>> reg,  String modid)`
  DeferredRegister factory for forge registries that exist after this DeferredRegister is created.
  - param: reg - the forge registry to wrap
  - param: modid - the namespace for all objects registered to this DeferredRegister
- `public static <B> DeferredRegister<B> create(ResourceKey<? extends Registry<B>> key,  String modid)`
  DeferredRegister factory for custom forge registries or vanilla registries
   to lookup based on the provided registry key. Supports both registries that already exist or do not exist yet.
  
   If the registry is never created, any RegistryObjects made from this DeferredRegister will throw an exception.
   To allow the optional existence of a registry without error, use createOptional(ResourceKey, String).
  - param: key - the key of the registry to reference. May come from another DeferredRegister through getRegistryKey().
  - param: modid - the namespace for all objects registered to this DeferredRegister
- `public static <B> DeferredRegister<B> createOptional(ResourceKey<? extends Registry<B>> key,  String modid)`
  DeferredRegister factory for the optional existence of custom forge registries
   or vanilla registries to lookup based on the provided registry key.
   Supports both registries that already exist or do not exist yet.
  
   If the registry is never created, any RegistryObjects made from this DeferredRegister will never be filled but will not throw an exception.
  - param: key - the key of the registry to reference
  - param: modid - the namespace for all objects registered to this DeferredRegister
- `public static <B> DeferredRegister<B> create(ResourceLocation registryName,  String modid)`
  DeferredRegister factory for custom forge registries or vanilla registries
   to lookup based on the provided registry name. Supports both registries that already exist or do not exist yet.
  
   If the registry is never created, any RegistryObjects made from this DeferredRegister will throw an exception.
   To allow the optional existence of a registry without error, use createOptional(ResourceLocation, String).
  - param: registryName - The name of the registry, should include namespace. May come from another DeferredRegister through getRegistryName().
  - param: modid - The namespace for all objects registered to this DeferredRegister
- `public static <B> DeferredRegister<B> createOptional(ResourceLocation registryName,  String modid)`
  DeferredRegister factory for the optional existence of custom forge registries
   or vanilla registries to lookup based on the provided registry name.
   Supports both registries that already exist or do not exist yet.
  
   If the registry is never created, any RegistryObjects made from this DeferredRegister will never be filled but will not throw an exception.
  - param: registryName - The name of the registry, should include namespace. May come from another DeferredRegister through getRegistryName().
  - param: modid - The namespace for all objects registered to this DeferredRegister
- `public <I extends T> RegistryObject<I> register(String name,  Supplier<? extends I> sup)`
  Adds a new supplier to the list of entries to be registered, and returns a RegistryObject that will be populated with the created entry automatically.
  - param: name - The new entry's name, it will automatically have the modid prefixed.
  - param: sup - A factory for the new entry, it should return a new instance every time it is called.
  - returns: A RegistryObject that will be updated with when the entries in the registry change.
- `public Supplier<IForgeRegistry<T>> makeRegistry(Supplier<RegistryBuilder<T>> sup)`
  Only used for custom registries to fill the forge registry held in this DeferredRegister.
  
   Calls RegistryBuilder.setName(net.minecraft.resources.ResourceLocation) automatically.
  - param: sup - Supplier of a RegistryBuilder that initializes a IForgeRegistry during the NewRegistryEvent event
  - returns: A supplier of the IForgeRegistry created by the builder.
 Will always return null until after the NewRegistryEvent event fires.
- `@NotNull public @NotNull TagKey<T> createTagKey(@NotNull  @NotNull String path)`
  Creates a tag key based on the current modid and provided path as the location and the registry name linked to this DeferredRegister.
   To control the namespace, use createTagKey(ResourceLocation).
  - throws: IllegalStateException - If the registry name was not set.
 Use the factories that take a registry name or forge registry.
- `@NotNull public @NotNull TagKey<T> createTagKey(@NotNull  @NotNull ResourceLocation location)`
  Creates a tag key based on the provided resource location and the registry name linked to this DeferredRegister.
   To use the current modid as the namespace, use createTagKey(String).
  - throws: IllegalStateException - If the registry name was not set.
 Use the factories that take a registry name or forge registry.
- `@NotNull public @NotNull TagKey<T> createOptionalTagKey(@NotNull  @NotNull String path,  @NotNull  @NotNull Set<? extends Supplier<T>> defaults)`
  Creates a tag key with the current modid and provided path that will use the set of defaults if the tag is not loaded from any datapacks.
   Useful on the client side when a server may not provide a specific tag.
   To control the namespace, use createOptionalTagKey(ResourceLocation, Set).
  - throws: IllegalStateException - If the registry name was not set.
 Use the factories that take a registry name or forge registry.
- `@NotNull public @NotNull TagKey<T> createOptionalTagKey(@NotNull  @NotNull ResourceLocation location,  @NotNull  @NotNull Set<? extends Supplier<T>> defaults)`
  Creates a tag key with the provided location that will use the set of defaults if the tag is not loaded from any datapacks.
   Useful on the client side when a server may not provide a specific tag.
   To use the current modid as the namespace, use createOptionalTagKey(String, Set).
  - throws: IllegalStateException - If the registry name was not set.
 Use the factories that take a registry name or forge registry.
- `public void addOptionalTagDefaults(@NotNull  @NotNull TagKey<T> name,  @NotNull  @NotNull Set<? extends Supplier<T>> defaults)`
  Adds defaults to an existing tag key.
   The set of defaults will be bound to the tag if the tag is not loaded from any datapacks.
   Useful on the client side when a server may not provide a specific tag.
  - throws: IllegalStateException - If the registry name was not set.
 Use the factories that take a registry name or forge registry.
- `public void register(net.minecraftforge.eventbus.api.IEventBus bus)`
  Adds our event handler to the specified event bus, this MUST be called in order for this class to function.
   See the example usage.
  - param: bus - The Mod Specific event bus.
- `public Collection<RegistryObject<T>> getEntries()`
  - returns: The unmodifiable view of registered entries. Useful for bulk operations on all values.
- `public ResourceKey<? extends Registry<T>> getRegistryKey()`
  - returns: The registry key stored in this deferred register. Useful for creating new deferred registers based on an existing one.
- `@NotNull public @NotNull ResourceLocation getRegistryName()`
  - returns: The registry name stored in this deferred register. Useful for creating new deferred registers based on an existing one.
- `private Supplier<IForgeRegistry<T>> makeRegistry(ResourceLocation registryName,  Supplier<RegistryBuilder<T>> sup)`
- `private void onFill(IForgeRegistry<?> registry)`

## DeferredRegister.EventDispatcher

*class* `net.minecraftforge.registries.DeferredRegister.EventDispatcher`

Enclosing class: DeferredRegister<T>

### Methods
- `public void handleEvent(RegisterEvent event)`
- `public void createRegistry(NewRegistryEvent event)`

## DeferredRegister.RegistryHolder

*class* `net.minecraftforge.registries.DeferredRegister.RegistryHolder`

Enclosing class: DeferredRegister<T>

### Fields
- `private final ResourceKey<? extends Registry<V>> registryKey` (deprecated)
- `private IForgeRegistry<V> registry` (deprecated)

### Methods
- `public IForgeRegistry<V> get()` (deprecated)

## ForgeDeferredRegistriesSetup

*class* `net.minecraftforge.registries.ForgeDeferredRegistriesSetup`

### Fields
- `private static boolean setup`

### Methods
- `public static void setup(net.minecraftforge.eventbus.api.IEventBus modEventBus)`
  Internal forge method. Modders do not call.

## ForgeRegistries

*class* `net.minecraftforge.registries.ForgeRegistries`

A class that exposes static references to all vanilla and Forge registries.
 Created to have a central place to access the registries directly if modders need.
 It is still advised that if you are registering things to use RegisterEvent or DeferredRegister, but queries and iterations can use this.

### Fields
- `static final List<DeferredRegister<?>> registries`
- `public static final IForgeRegistry<Block> BLOCKS`
- `public static final IForgeRegistry<Fluid> FLUIDS`
- `public static final IForgeRegistry<Item> ITEMS`
- `public static final IForgeRegistry<MobEffect> MOB_EFFECTS`
- `public static final IForgeRegistry<SoundEvent> SOUND_EVENTS`
- `public static final IForgeRegistry<Potion> POTIONS`
- `public static final IForgeRegistry<Enchantment> ENCHANTMENTS`
- `public static final IForgeRegistry<EntityType<?>> ENTITY_TYPES`
- `public static final IForgeRegistry<BlockEntityType<?>> BLOCK_ENTITY_TYPES`
- `public static final IForgeRegistry<ParticleType<?>> PARTICLE_TYPES`
- `public static final IForgeRegistry<MenuType<?>> MENU_TYPES`
- `public static final IForgeRegistry<PaintingVariant> PAINTING_VARIANTS`
- `public static final IForgeRegistry<RecipeType<?>> RECIPE_TYPES`
- `public static final IForgeRegistry<RecipeSerializer<?>> RECIPE_SERIALIZERS`
- `public static final IForgeRegistry<Attribute> ATTRIBUTES`
- `public static final IForgeRegistry<StatType<?>> STAT_TYPES`
- `public static final IForgeRegistry<ArgumentTypeInfo<?,?>> COMMAND_ARGUMENT_TYPES`
- `public static final IForgeRegistry<VillagerProfession> VILLAGER_PROFESSIONS`
- `public static final IForgeRegistry<PoiType> POI_TYPES`
- `public static final IForgeRegistry<MemoryModuleType<?>> MEMORY_MODULE_TYPES`
- `public static final IForgeRegistry<SensorType<?>> SENSOR_TYPES`
- `public static final IForgeRegistry<Schedule> SCHEDULES`
- `public static final IForgeRegistry<Activity> ACTIVITIES`
- `public static final IForgeRegistry<WorldCarver<?>> WORLD_CARVERS`
- `public static final IForgeRegistry<Feature<?>> FEATURES`
- `public static final IForgeRegistry<ChunkStatus> CHUNK_STATUS`
- `public static final IForgeRegistry<BlockStateProviderType<?>> BLOCK_STATE_PROVIDER_TYPES`
- `public static final IForgeRegistry<FoliagePlacerType<?>> FOLIAGE_PLACER_TYPES`
- `public static final IForgeRegistry<TreeDecoratorType<?>> TREE_DECORATOR_TYPES`
- `public static final IForgeRegistry<Biome> BIOMES`
- `public static final Supplier<IForgeRegistry<EntityDataSerializer<?>>> ENTITY_DATA_SERIALIZERS`
- `public static final Supplier<IForgeRegistry<com.mojang.serialization.Codec<? extends IGlobalLootModifier>>> GLOBAL_LOOT_MODIFIER_SERIALIZERS`
- `public static final Supplier<IForgeRegistry<com.mojang.serialization.Codec<? extends BiomeModifier>>> BIOME_MODIFIER_SERIALIZERS`
- `public static final Supplier<IForgeRegistry<com.mojang.serialization.Codec<? extends StructureModifier>>> STRUCTURE_MODIFIER_SERIALIZERS`
- `public static final Supplier<IForgeRegistry<FluidType>> FLUID_TYPES`
- `public static final Supplier<IForgeRegistry<HolderSetType>> HOLDER_SET_TYPES`
- `public static final Supplier<IForgeRegistry<ItemDisplayContext>> DISPLAY_CONTEXTS`
- `public static final Supplier<IForgeRegistry<com.mojang.serialization.Codec<? extends ICondition>>> CONDITION_SERIALIZERS`
- `public static final Supplier<IForgeRegistry<IIngredientSerializer<?>>> INGREDIENT_SERIALIZERS`

### Methods
- `private static <T> IForgeRegistry<T> active(ResourceKey<Registry<T>> key)`
- `private static final <T> Supplier<IForgeRegistry<T>> registry(ResourceKey<Registry<T>> key,  Supplier<RegistryBuilder<T>> factory)`
- `private static void init()`
  This function is just to make sure static initializers in other classes have run and setup their registries before we query them.

## ForgeRegistries.Keys

*class* `net.minecraftforge.registries.ForgeRegistries.Keys`

Enclosing class: ForgeRegistries

### Fields
- `public static final ResourceKey<Registry<Block>> BLOCKS`
- `public static final ResourceKey<Registry<Fluid>> FLUIDS`
- `public static final ResourceKey<Registry<Item>> ITEMS`
- `public static final ResourceKey<Registry<MobEffect>> MOB_EFFECTS`
- `public static final ResourceKey<Registry<Potion>> POTIONS`
- `public static final ResourceKey<Registry<Attribute>> ATTRIBUTES`
- `public static final ResourceKey<Registry<StatType<?>>> STAT_TYPES`
- `public static final ResourceKey<Registry<ArgumentTypeInfo<?,?>>> COMMAND_ARGUMENT_TYPES`
- `public static final ResourceKey<Registry<SoundEvent>> SOUND_EVENTS`
- `public static final ResourceKey<Registry<Enchantment>> ENCHANTMENTS`
- `public static final ResourceKey<Registry<EntityType<?>>> ENTITY_TYPES`
- `public static final ResourceKey<Registry<PaintingVariant>> PAINTING_VARIANTS`
- `public static final ResourceKey<Registry<ParticleType<?>>> PARTICLE_TYPES`
- `public static final ResourceKey<Registry<MenuType<?>>> MENU_TYPES`
- `public static final ResourceKey<Registry<BlockEntityType<?>>> BLOCK_ENTITY_TYPES`
- `public static final ResourceKey<Registry<RecipeType<?>>> RECIPE_TYPES`
- `public static final ResourceKey<Registry<RecipeSerializer<?>>> RECIPE_SERIALIZERS`
- `public static final ResourceKey<Registry<VillagerProfession>> VILLAGER_PROFESSIONS`
- `public static final ResourceKey<Registry<PoiType>> POI_TYPES`
- `public static final ResourceKey<Registry<MemoryModuleType<?>>> MEMORY_MODULE_TYPES`
- `public static final ResourceKey<Registry<SensorType<?>>> SENSOR_TYPES`
- `public static final ResourceKey<Registry<Schedule>> SCHEDULES`
- `public static final ResourceKey<Registry<Activity>> ACTIVITIES`
- `public static final ResourceKey<Registry<WorldCarver<?>>> WORLD_CARVERS`
- `public static final ResourceKey<Registry<Feature<?>>> FEATURES`
- `public static final ResourceKey<Registry<ChunkStatus>> CHUNK_STATUS`
- `public static final ResourceKey<Registry<BlockStateProviderType<?>>> BLOCK_STATE_PROVIDER_TYPES`
- `public static final ResourceKey<Registry<FoliagePlacerType<?>>> FOLIAGE_PLACER_TYPES`
- `public static final ResourceKey<Registry<TreeDecoratorType<?>>> TREE_DECORATOR_TYPES`
- `public static final ResourceKey<Registry<Biome>> BIOMES`
- `public static final ResourceKey<Registry<EntityDataSerializer<?>>> ENTITY_DATA_SERIALIZERS`
- `public static final ResourceKey<Registry<com.mojang.serialization.Codec<? extends IGlobalLootModifier>>> GLOBAL_LOOT_MODIFIER_SERIALIZERS`
- `public static final ResourceKey<Registry<com.mojang.serialization.Codec<? extends BiomeModifier>>> BIOME_MODIFIER_SERIALIZERS`
- `public static final ResourceKey<Registry<com.mojang.serialization.Codec<? extends StructureModifier>>> STRUCTURE_MODIFIER_SERIALIZERS`
- `public static final ResourceKey<Registry<FluidType>> FLUID_TYPES`
- `public static final ResourceKey<Registry<HolderSetType>> HOLDER_SET_TYPES`
- `public static final ResourceKey<Registry<ItemDisplayContext>> DISPLAY_CONTEXTS`
- `public static final ResourceKey<Registry<com.mojang.serialization.Codec<? extends ICondition>>> CONDITION_SERIALIZERS`
- `public static final ResourceKey<Registry<IIngredientSerializer<?>>> INGREDIENT_SERIALIZERS`
- `public static final ResourceKey<Registry<BiomeModifier>> BIOME_MODIFIERS`
- `public static final ResourceKey<Registry<StructureModifier>> STRUCTURE_MODIFIERS`

### Methods
- `private static <T> ResourceKey<Registry<T>> key(String name)`
- `private static void init()`

## ForgeRegistry

*class* `net.minecraftforge.registries.ForgeRegistry`

Internal - use the public IForgeRegistry and ForgeRegistries APIs to get the data

### Fields
- `public static final org.apache.logging.log4j.Marker REGISTRIES`
- `private static final org.apache.logging.log4j.Marker REGISTRYDUMP`
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private final RegistryManager stage`
- `private final com.google.common.collect.BiMap<Integer,V> ids`
- `private final com.google.common.collect.BiMap<ResourceLocation,V> names`
- `private final com.google.common.collect.BiMap<ResourceKey<V>,V> keys`
- `private final Map<ResourceLocation,ResourceLocation> aliases`
- `final Map<ResourceLocation,?> slaves`
- `private final ResourceLocation defaultKey`
- `private final IForgeRegistry.CreateCallback<V> create`
- `private final IForgeRegistry.AddCallback<V> add`
- `private final IForgeRegistry.ClearCallback<V> clear`
- `private final IForgeRegistry.ValidateCallback<V> validate`
- `private final IForgeRegistry.BakeCallback<V> bake`
- `private final IForgeRegistry.MissingFactory<V> missing`
- `private final BitSet availabilityMap`
- `private final it.unimi.dsi.fastutil.ints.IntSet blocked`
- `private final com.google.common.collect.Multimap<ResourceLocation,V> overrides`
- `private final Map<ResourceLocation,Holder.Reference<V>> delegatesByName`
- `private final Map<V,Holder.Reference<V>> delegatesByValue`
- `private final com.google.common.collect.BiMap<ForgeRegistry.OverrideOwner<V>,V> owners`
- `private final ForgeRegistryTagManager<V> tagManager`
- `private final int min`
- `private final int max`
- `private final boolean allowOverrides`
- `private final boolean isModifiable`
- `private final boolean hasWrapper`
- `private V defaultValue`
- `boolean isFrozen`
- `private final ResourceLocation name`
- `private final ResourceKey<Registry<V>> key`
- `private final RegistryBuilder<V> builder`
- `private final com.mojang.serialization.Codec<V> codec`

### Methods
- `public void register(String key,  V value)`
  Description copied from interface: IForgeRegistry
  The supplied string key will be prefixed with the currently active mod's mod id.
   If the supplied name already has a prefix that is different, it will be used and a warning will be logged.
- `public void register(ResourceLocation key,  V value)`
- `public Iterator<V> iterator()`
- `public ResourceLocation getRegistryName()`
- `public ResourceKey<Registry<V>> getRegistryKey()`
- `@NotNull public @NotNull com.mojang.serialization.Codec<V> getCodec()`
- `public boolean containsKey(ResourceLocation key)`
- `public boolean containsValue(V value)`
- `public boolean isEmpty()`
- `int size()`
- `public V getValue(ResourceLocation key)`
- `public ResourceLocation getKey(V value)`
- `@NotNull public @NotNull Optional<ResourceKey<V>> getResourceKey(V value)`
- `@Nullable @Nullable NamespacedWrapper<V> getWrapper()`
- `@NotNull @NotNull NamespacedWrapper<V> getWrapperOrThrow()`
- `void onBindTags(Map<TagKey<V>,HolderSet.Named<V>> tags,  Set<TagKey<V>> defaultedTags)`
- `@NotNull public @NotNull Optional<Holder<V>> getHolder(ResourceKey<V> key)`
  Description copied from interface: IForgeRegistry
  This method exists purely as a stopgap for vanilla compatibility.
   For anything tag related, use IForgeRegistry.tags().
- `@NotNull public @NotNull Optional<Holder<V>> getHolder(ResourceLocation location)`
  Description copied from interface: IForgeRegistry
  This method exists purely as a stopgap for vanilla compatibility.
   For anything tag related, use IForgeRegistry.tags().
- `@NotNull public @NotNull Optional<Holder<V>> getHolder(V value)`
  Description copied from interface: IForgeRegistry
  This method exists purely as a stopgap for vanilla compatibility.
   For anything tag related, use IForgeRegistry.tags().
- `@Nullable public @Nullable ITagManager<V> tags()`
  - returns: an instance of ITagManager if this registry supports tags and/or has a wrapper registry, null otherwise
- `@NotNull public @NotNull Set<ResourceLocation> getKeys()`
- `@NotNull @NotNull Set<ResourceKey<V>> getResourceKeys()`
- `@NotNull public @NotNull Collection<V> getValues()`
- `@NotNull public @NotNull Set<Map.Entry<ResourceKey<V>,V>> getEntries()`
- `public <T> T getSlaveMap(ResourceLocation name,  Class<T> type)`
  Description copied from interface: IForgeRegistry
  Retrieve the slave map of type T from the registry.
   Slave maps are maps which are dependent on registry content in some way.
  - param: name - The name of the slavemap
  - param: type - The type
  - returns: The slavemap if present
- `public void setSlaveMap(ResourceLocation name,  Object obj)`
- `public int getID(V value)`
- `public int getID(ResourceLocation name)`
- `private int getIDRaw(V value)`
- `private int getIDRaw(ResourceLocation name)`
- `public V getValue(int id)`
- `@Nullable public @Nullable ResourceKey<V> getKey(int id)`
- `void validateKey()`
- `@Nullable public @Nullable ResourceLocation getDefaultKey()`
- `ForgeRegistry<V> copy(RegistryManager stage)`
- `public void register(int id,  ResourceLocation key,  V value)`
- `int add(int id,  ResourceLocation key,  V value)`
- `int add(int id,  ResourceLocation key,  V value,  String owner)`
- `public V getRaw(ResourceLocation key)`
- `public void addAlias(ResourceLocation src,  ResourceLocation dst)`
  Adds an alias that maps from the name specified by src to the name specified by dst.
   Any registry lookups that target the first name will resolve as the second name, if the first name is not present.
  - param: src - The source registry name to alias from.
  - param: dst - The target registry name to alias to.

 TODO: Add as public API in IForgeRegistry and DeferredRegister.
- `@NotNull public @NotNull Optional<Holder.Reference<V>> getDelegate(ResourceKey<V> rkey)`
- `@NotNull public Holder.Reference<V> getDelegateOrThrow(ResourceKey<V> rkey)`
- `@NotNull public @NotNull Optional<Holder.Reference<V>> getDelegate(ResourceLocation key)`
- `@NotNull public Holder.Reference<V> getDelegateOrThrow(ResourceLocation key)`
- `@NotNull public @NotNull Optional<Holder.Reference<V>> getDelegate(V value)`
- `@NotNull public Holder.Reference<V> getDelegateOrThrow(V value)`
- `private Holder.Reference<V> bindDelegate(ResourceKey<V> rkey,  V value)`
- `void resetDelegates()`
- `V getDefault()`
- `void validateContent(ResourceLocation registryName)`
- `public void bake()`
- `void sync(ResourceLocation name,  ForgeRegistry<V> from)`
- `public void clear()`
- `public V remove(ResourceLocation key)`
- `void block(int id)`
- `public boolean isLocked()`
- `public void freeze()`
  Used to control the times where people can modify this registry.
   Users should only ever register things in the Register<?> events!
- `public void unfreeze()`
- `void dump(ResourceLocation name)`
- `public void loadIds(it.unimi.dsi.fastutil.objects.Object2IntMap<ResourceLocation> ids,  Map<ResourceLocation,String> overrides,  it.unimi.dsi.fastutil.objects.Object2IntMap<ResourceLocation> missing,  Map<ResourceLocation,IdMappingEvent.IdRemapping> remapped,  ForgeRegistry<V> old,  ResourceLocation name)`
- `public ForgeRegistry.Snapshot makeSnapshot()`
- `Map<ResourceLocation,String> getOverrideOwners()`
- `public MissingMappingsEvent getMissingEvent(ResourceLocation name,  it.unimi.dsi.fastutil.objects.Object2IntMap<ResourceLocation> map)`
- `void processMissingEvent(ResourceLocation name,  ForgeRegistry<V> pool,  List<MissingMappingsEvent.Mapping<V>> mappings,  it.unimi.dsi.fastutil.objects.Object2IntMap<ResourceLocation> missing,  Map<ResourceLocation,IdMappingEvent.IdRemapping> remaps,  Collection<ResourceLocation> defaulted,  Collection<ResourceLocation> failed,  boolean injectNetworkDummies)`
- `RegistryBuilder<V> getBuilder()`

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `spliterator`

## ForgeRegistry.DumpRow

*record* `net.minecraftforge.registries.ForgeRegistry.DumpRow`

Enclosing class: ForgeRegistry<V>

### Fields
- `private final String id`
  The field for the id record component.
- `private final String key`
  The field for the key record component.
- `private final String value`
  The field for the value record component.

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
- `public String id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public String key()`
  Returns the value of the key record component.
  - returns: the value of the key record component
- `public String value()`
  Returns the value of the value record component.
  - returns: the value of the value record component

## ForgeRegistry.OverrideOwner

*record* `net.minecraftforge.registries.ForgeRegistry.OverrideOwner`

Enclosing class: ForgeRegistry<V>

### Fields
- `private final String owner`
  The field for the owner record component.
- `private final ResourceKey<V> key`
  The field for the key record component.

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
- `public String owner()`
  Returns the value of the owner record component.
  - returns: the value of the owner record component
- `public ResourceKey<V> key()`
  Returns the value of the key record component.
  - returns: the value of the key record component

## ForgeRegistry.RegistryCodec

*class* `net.minecraftforge.registries.ForgeRegistry.RegistryCodec`

Enclosing class: ForgeRegistry<V>

### Inherited fields
- from `com.mojang.serialization.Codec`: `BOOL`, `BYTE`, `BYTE_BUFFER`, `DOUBLE`, `EMPTY`, `FLOAT`, `INT`, `INT_STREAM`, `LONG`, `LONG_STREAM`, `PASSTHROUGH`, `SHORT`, `STRING`

### Methods
- `public <T> com.mojang.serialization.DataResult<com.mojang.datafixers.util.Pair<V,T>> decode(com.mojang.serialization.DynamicOps<T> ops,  T input)`
- `public <T> com.mojang.serialization.DataResult<T> encode(V input,  com.mojang.serialization.DynamicOps<T> ops,  T prefix)`

### Inherited methods
- from `com.mojang.serialization.Codec`: `comapFlatMap`, `deprecated`, `dispatch`, `dispatch`, `dispatchMap`, `dispatchMap`, `dispatchStable`, `fieldOf`, `flatComapMap`, `flatXmap`, `listOf`, `mapResult`, `optionalFieldOf`, `optionalFieldOf`, `optionalFieldOf`, `optionalFieldOf`, `orElse`, `orElse`, `orElse`, `orElseGet`, `orElseGet`, `orElseGet`, `partialDispatch`, `promotePartial`, `stable`, `withLifecycle`, `xmap`
- from `com.mojang.serialization.Decoder`: `boxed`, `decode`, `flatMap`, `map`, `parse`, `parse`, `simple`, `terminal`
- from `com.mojang.serialization.Encoder`: `comap`, `encodeStart`, `flatComap`

## ForgeRegistry.Snapshot

*class* `net.minecraftforge.registries.ForgeRegistry.Snapshot`

Enclosing class: ForgeRegistry<V>

### Fields
- `private static final Comparator<ResourceLocation> sorter`
- `public final it.unimi.dsi.fastutil.objects.Object2IntMap<ResourceLocation> ids`
- `public final Map<ResourceLocation,ResourceLocation> aliases`
- `public final it.unimi.dsi.fastutil.ints.IntSet blocked`
- `public final Map<ResourceLocation,String> overrides`
- `private FriendlyByteBuf binary`

### Methods
- `public CompoundTag write()`
- `public static ForgeRegistry.Snapshot read(CompoundTag nbt)`
- `public FriendlyByteBuf getPacketData()`
- `public static ForgeRegistry.Snapshot read(FriendlyByteBuf buf)`

## ForgeRegistryTag

*class* `net.minecraftforge.registries.ForgeRegistryTag`

### Fields
- `private final TagKey<V> key`
- `@Nullable private @Nullable HolderSet<V> holderSet`
- `@Nullable private @Nullable List<V> contents`

### Methods
- `public TagKey<V> getKey()`
- `@NotNull public @NotNull Iterator<V> iterator()`
- `public Spliterator<V> spliterator()`
- `public boolean isEmpty()`
- `public int size()`
- `public Stream<V> stream()`
- `public boolean contains(V value)`
- `public Optional<V> getRandomElement(RandomSource random)`
- `public boolean isBound()`
  - returns: true if this tag was loaded with a value (including empty),
 otherwise the tag is always empty and this returns false
- `List<V> getContents()`
- `void bind(@Nullable  @Nullable HolderSet<V> holderSet)`
- `public String toString()`

### Inherited methods
- from `java.lang.Iterable`: `forEach`

## ForgeRegistryTagManager

*class* `net.minecraftforge.registries.ForgeRegistryTagManager`

### Fields
- `private final ForgeRegistry<V> owner`
- `private volatile Map<TagKey<V>,ITag<V>> tags`

### Methods
- `void bind(Map<TagKey<V>,HolderSet.Named<V>> holderTags,  Set<TagKey<V>> defaultedTags)`
- `@NotNull public @NotNull ITag<V> getTag(@NotNull  @NotNull TagKey<V> name)`
  Description copied from interface: ITagManager
  Queries this tag manager for a tag with the given tag key.
   If it does not exist, this will create an empty tag and return it.
- `@NotNull public @NotNull Optional<IReverseTag<V>> getReverseTag(@NotNull  V value)`
  Description copied from interface: ITagManager
  Queries a reverse tag for a given value from the forge registry linked to this tag manager.
   A reverse tag stores all tags that the given value is contained in.
  - param: value - A value currently registered to the forge registry linked to this tag manager
  - returns: A reverse tag for the given value, or an empty optional if the value is not registered
- `public boolean isKnownTagName(@NotNull  @NotNull TagKey<V> name)`
  Description copied from interface: ITagManager
  Checks whether the given tag key exists in this tag manager and is bound.
   Unlike ITagManager.getTag(TagKey), this method will not create the tag if it does not exist.
- `@NotNull public @NotNull Iterator<ITag<V>> iterator()`
- `@NotNull public @NotNull Stream<ITag<V>> stream()`
  - returns: A stream of all tags stored in this tag manager, bound or unbound.
- `@NotNull public @NotNull Stream<TagKey<V>> getTagNames()`
  - returns: A stream of all tag keys stored in this tag manager, bound or unbound.
- `@NotNull public @NotNull TagKey<V> createTagKey(@NotNull  @NotNull ResourceLocation location)`
  Description copied from interface: ITagManager
  Creates a tag key based on the location and the forge registry linked to this tag manager.
   Custom registries can use DeferredRegister.createTagKey(ResourceLocation) to create tag keys before the tag manager is created.
- `@NotNull public @NotNull TagKey<V> createOptionalTagKey(@NotNull  @NotNull ResourceLocation location,  @NotNull  @NotNull Set<? extends Supplier<V>> defaults)`
  Description copied from interface: ITagManager
  Creates a tag key that will use the set of defaults if the tag is not loaded from any datapacks.
   Useful on the client side when a server may not provide a specific tag.
   Custom registries can use DeferredRegister.addOptionalTagDefaults(TagKey, Set) to create tag keys before the tag manager is created.
- `public void addOptionalTagDefaults(@NotNull  @NotNull TagKey<V> name,  @NotNull  @NotNull Set<? extends Supplier<V>> defaults)`
  Description copied from interface: ITagManager
  Adds defaults to an existing tag key.
   The set of defaults will be bound to the tag if the tag is not loaded from any datapacks.
   Useful on the client side when a server may not provide a specific tag.
   Custom registries can use DeferredRegister.addOptionalTagDefaults(TagKey, Set) to add defaults before the tag manager is created.

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `spliterator`

## GameData

*class* `net.minecraftforge.registries.GameData`

INTERNAL ONLY
 MODDERS SHOULD HAVE NO REASON TO USE THIS CLASS
 Use the public IForgeRegistry and ForgeRegistries APIs to get the data

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final org.apache.logging.log4j.Marker REGISTRIES`
- `private static final int MAX_VARINT` (= 2147483646)
- `private static final ResourceLocation BLOCK_TO_ITEM`
- `private static final ResourceLocation BLOCKSTATE_TO_ID`
- `private static final ResourceLocation BLOCKSTATE_TO_POINT_OF_INTEREST_TYPE`
- `private static boolean hasInit`
- `private static final boolean DISABLE_VANILLA_REGISTRIES`
- `private static final BiConsumer<ResourceLocation,ForgeRegistry<?>> LOCK_VANILLA`

### Methods
- `public static void init()`
- `static RegistryBuilder<EntityDataSerializer<?>> getDataSerializersRegistryBuilder()`
- `static RegistryBuilder<com.mojang.serialization.Codec<? extends IGlobalLootModifier>> getGLMSerializersRegistryBuilder()`
- `static RegistryBuilder<FluidType> getFluidTypeRegistryBuilder()`
- `static <T> RegistryBuilder<T> makeUnsavedAndUnsynced()`
- `static RegistryBuilder<ItemDisplayContext> getItemDisplayContextRegistryBuilder()`
- `private static <T> RegistryBuilder<T> makeRegistry(ResourceKey<? extends Registry<T>> key)`
- `private static <T> RegistryBuilder<T> makeRegistry(ResourceKey<? extends Registry<T>> key,  int min,  int max)`
- `private static <T> RegistryBuilder<T> makeRegistry(ResourceKey<? extends Registry<T>> key,  String _default)`
- `public static <T> MappedRegistry<T> getWrapper(ResourceKey<? extends Registry<T>> key,  com.mojang.serialization.Lifecycle lifecycle)`
- `public static <T> MappedRegistry<T> getWrapper(ResourceKey<? extends Registry<T>> key,  com.mojang.serialization.Lifecycle lifecycle,  String defKey)`
- `public static Map<Block,Item> getBlockItemMap()`
- `public static IdMapper<BlockState> getBlockStateIDMap()`
- `public static Map<BlockState,PoiType> getBlockStatePointOfInterestTypeMap()`
- `public static void vanillaSnapshot()`
- `public static void unfreezeData()`
- `public static void freezeData()`
- `public static void revertToFrozen()`
- `public static void revertTo(RegistryManager target,  boolean fireEvents)`
- `public static void revert(RegistryManager state,  ResourceLocation registry,  boolean lock)`
- `public static void postRegisterEvents()`
- `private static <T> void loadRegistry(ResourceLocation registryName,  RegistryManager from,  RegistryManager to,  boolean freeze)`
- `public static com.google.common.collect.Multimap<ResourceLocation,ResourceLocation> injectSnapshot(Map<ResourceLocation,ForgeRegistry.Snapshot> snapshot,  boolean injectFrozenData,  boolean isLocalWorld)`
- `private static void fireRemapEvent(Map<ResourceLocation,Map<ResourceLocation,IdMappingEvent.IdRemapping>> remaps,  boolean isFreezing)`
- `private static <T> void loadPersistentDataToStagingRegistry(RegistryManager pool,  RegistryManager to,  Map<ResourceLocation,IdMappingEvent.IdRemapping> remaps,  it.unimi.dsi.fastutil.objects.Object2IntMap<ResourceLocation> missing,  ResourceLocation name,  ForgeRegistry.Snapshot snap)`
- `private static <T> void processMissing(ResourceLocation name,  RegistryManager STAGING,  MissingMappingsEvent e,  it.unimi.dsi.fastutil.objects.Object2IntMap<ResourceLocation> missing,  Map<ResourceLocation,IdMappingEvent.IdRemapping> remaps,  Collection<ResourceLocation> defaulted,  Collection<ResourceLocation> failed,  boolean injectNetworkDummies)`
- `private static <T> void loadFrozenDataToStagingRegistry(RegistryManager STAGING,  ResourceLocation name,  Map<ResourceLocation,IdMappingEvent.IdRemapping> remaps)`
- `public static ResourceLocation checkPrefix(String name,  boolean warnOverrides)`
  Check a name for a domain prefix, and if not present infer it from the
   current active mod container.
  - param: name - The name or resource location
  - param: warnOverrides - If true, logs a warning if domain differs from that of
 the currently currently active mod container
  - returns: The ResourceLocation with given or inferred domain

## GameData.AttributeCallbacks

*class* `net.minecraftforge.registries.GameData.AttributeCallbacks`

Enclosing class: GameData

### Fields
- `static final GameData.AttributeCallbacks INSTANCE`

### Methods
- `public void onValidate(IForgeRegistryInternal<Attribute> owner,  RegistryManager stage,  int id,  ResourceLocation key,  Attribute obj)`

## GameData.BlockCallbacks

*class* `net.minecraftforge.registries.GameData.BlockCallbacks`

Enclosing class: GameData

### Fields
- `static final GameData.BlockCallbacks INSTANCE`

### Methods
- `public void onAdd(IForgeRegistryInternal<Block> owner,  RegistryManager stage,  int id,  ResourceKey<Block> key,  Block block,  @Nullable  @Nullable Block oldBlock)`
- `public void onClear(IForgeRegistryInternal<Block> owner,  RegistryManager stage)`
- `public void onCreate(IForgeRegistryInternal<Block> owner,  RegistryManager stage)`
- `public void onBake(IForgeRegistryInternal<Block> owner,  RegistryManager stage)`

## GameData.ClearableObjectIntIdentityMap

*class* `net.minecraftforge.registries.GameData.ClearableObjectIntIdentityMap`

Enclosing class: GameData

### Inherited fields
- from `net.minecraft.core.IdMapper`: `idToT`, `nextId`, `tToId`
- from `net.minecraft.core.IdMap`: `DEFAULT`

### Methods
- `void clear()`
- `void remove(I key)`

### Inherited methods
- from `net.minecraft.core.IdMapper`: `add`, `addMapping`, `byId`, `contains`, `getId`, `iterator`, `size`
- from `net.minecraft.core.IdMap`: `byIdOrThrow`
- from `java.lang.Iterable`: `forEach`, `spliterator`

## GameData.ItemCallbacks

*class* `net.minecraftforge.registries.GameData.ItemCallbacks`

Enclosing class: GameData

### Fields
- `static final GameData.ItemCallbacks INSTANCE`

### Methods
- `public void onAdd(IForgeRegistryInternal<Item> owner,  RegistryManager stage,  int id,  ResourceKey<Item> key,  Item item,  @Nullable  @Nullable Item oldItem)`
- `public void onClear(IForgeRegistryInternal<Item> owner,  RegistryManager stage)`
- `public void onCreate(IForgeRegistryInternal<Item> owner,  RegistryManager stage)`

## GameData.PointOfInterestTypeCallbacks

*class* `net.minecraftforge.registries.GameData.PointOfInterestTypeCallbacks`

Enclosing class: GameData

### Fields
- `static final GameData.PointOfInterestTypeCallbacks INSTANCE`

### Methods
- `public void onAdd(IForgeRegistryInternal<PoiType> owner,  RegistryManager stage,  int id,  ResourceKey<PoiType> key,  PoiType obj,  @Nullable  @Nullable PoiType oldObj)`
- `public void onClear(IForgeRegistryInternal<PoiType> owner,  RegistryManager stage)`
- `public void onCreate(IForgeRegistryInternal<PoiType> owner,  RegistryManager stage)`

## IdMappingEvent

*class* `net.minecraftforge.registries.IdMappingEvent`

Called whenever the ID mapping might have changed. If you register for this event, you
 will be called back whenever the client or server loads an ID set. This includes both
 when the ID maps are loaded from disk, as well as when the ID maps revert to the initial
 state.

 Note: you cannot change the IDs that have been allocated, but you might want to use
 this event to update caches or other in-mod artifacts that might be impacted by an ID
 change.

 Fired on the forge bus.

### Fields
- `private final Map<ResourceLocation,com.google.common.collect.ImmutableList<IdMappingEvent.ModRemapping>> remaps`
- `private final com.google.common.collect.ImmutableSet<ResourceLocation> keys`
- `private final boolean isFrozen`

### Methods
- `public com.google.common.collect.ImmutableSet<ResourceLocation> getRegistries()`
- `public com.google.common.collect.ImmutableList<IdMappingEvent.ModRemapping> getRemaps(ResourceLocation registry)`
- `public boolean isFrozen()`

## IdMappingEvent.IdRemapping

*record* `net.minecraftforge.registries.IdMappingEvent.IdRemapping`

Enclosing class: IdMappingEvent

### Fields
- `private final int currId`
  The field for the currId record component.
- `private final int newId`
  The field for the newId record component.

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
- `public int currId()`
  Returns the value of the currId record component.
  - returns: the value of the currId record component
- `public int newId()`
  Returns the value of the newId record component.
  - returns: the value of the newId record component

## IdMappingEvent.ModRemapping

*class* `net.minecraftforge.registries.IdMappingEvent.ModRemapping`

Enclosing class: IdMappingEvent

### Fields
- `public final ResourceLocation registry`
- `public final ResourceLocation key`
- `public final int oldId`
- `public final int newId`

## IForgeRegistry

*interface* `net.minecraftforge.registries.IForgeRegistry`

Main interface for the registry system. Use this to query the registry system.

All Superinterfaces: Iterable<V>

### Methods
- `ResourceKey<Registry<V>> getRegistryKey()`
- `ResourceLocation getRegistryName()`
- `void register(String key,  V value)`
  The supplied string key will be prefixed with the currently active mod's mod id.
   If the supplied name already has a prefix that is different, it will be used and a warning will be logged.
- `void register(ResourceLocation key,  V value)`
- `boolean containsKey(ResourceLocation key)`
- `boolean containsValue(V value)`
- `boolean isEmpty()`
- `@Nullable V getValue(ResourceLocation key)`
- `@Nullable @Nullable ResourceLocation getKey(V value)`
- `@Nullable @Nullable ResourceLocation getDefaultKey()`
- `@NotNull @NotNull Optional<ResourceKey<V>> getResourceKey(V value)`
- `@NotNull @NotNull Set<ResourceLocation> getKeys()`
- `@NotNull @NotNull Collection<V> getValues()`
- `@NotNull @NotNull Set<Map.Entry<ResourceKey<V>,V>> getEntries()`
- `@NotNull @NotNull com.mojang.serialization.Codec<V> getCodec()`
- `@NotNull @NotNull Optional<Holder<V>> getHolder(ResourceKey<V> key)`
  This method exists purely as a stopgap for vanilla compatibility.
   For anything tag related, use tags().
- `@NotNull @NotNull Optional<Holder<V>> getHolder(ResourceLocation location)`
  This method exists purely as a stopgap for vanilla compatibility.
   For anything tag related, use tags().
- `@NotNull @NotNull Optional<Holder<V>> getHolder(V value)`
  This method exists purely as a stopgap for vanilla compatibility.
   For anything tag related, use tags().
- `@Nullable @Nullable ITagManager<V> tags()`
  - returns: an instance of ITagManager if this registry supports tags and/or has a wrapper registry, null otherwise
- `@NotNull @NotNull Optional<Holder.Reference<V>> getDelegate(ResourceKey<V> rkey)`
- `@NotNull Holder.Reference<V> getDelegateOrThrow(ResourceKey<V> rkey)`
- `@NotNull @NotNull Optional<Holder.Reference<V>> getDelegate(ResourceLocation key)`
- `@NotNull Holder.Reference<V> getDelegateOrThrow(ResourceLocation key)`
- `@NotNull @NotNull Optional<Holder.Reference<V>> getDelegate(V value)`
- `@NotNull Holder.Reference<V> getDelegateOrThrow(V value)`
- `<T> T getSlaveMap(ResourceLocation slaveMapName,  Class<T> type)`
  Retrieve the slave map of type T from the registry.
   Slave maps are maps which are dependent on registry content in some way.
  - param: slaveMapName - The name of the slavemap
  - param: type - The type
  - returns: The slavemap if present

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `iterator`, `spliterator`

## IForgeRegistry.AddCallback

*interface* `net.minecraftforge.registries.IForgeRegistry.AddCallback`

Callback fired when objects are added to the registry. This will fire when the registry is rebuilt
 on the client side from a server side synchronization, or when a world is loaded.

Enclosing interface: IForgeRegistry<V>

### Methods
- `void onAdd(IForgeRegistryInternal<V> owner,  RegistryManager stage,  int id,  ResourceKey<V> key,  V obj,  @Nullable  V oldObj)`

## IForgeRegistry.BakeCallback

*interface* `net.minecraftforge.registries.IForgeRegistry.BakeCallback`

Callback fired when the registry is done processing. Used to calculate state ID maps.

Enclosing interface: IForgeRegistry<V>

### Methods
- `void onBake(IForgeRegistryInternal<V> owner,  RegistryManager stage)`

## IForgeRegistry.ClearCallback

*interface* `net.minecraftforge.registries.IForgeRegistry.ClearCallback`

Callback fired when the registry is cleared. This is done before a registry is reloaded from client
 or server.

Enclosing interface: IForgeRegistry<V>

### Methods
- `void onClear(IForgeRegistryInternal<V> owner,  RegistryManager stage)`

## IForgeRegistry.CreateCallback

*interface* `net.minecraftforge.registries.IForgeRegistry.CreateCallback`

Callback fired when a registry instance is created. Populate slave maps here.

Enclosing interface: IForgeRegistry<V>

### Methods
- `void onCreate(IForgeRegistryInternal<V> owner,  RegistryManager stage)`

## IForgeRegistry.MissingFactory

*interface* `net.minecraftforge.registries.IForgeRegistry.MissingFactory`

Enclosing interface: IForgeRegistry<V>

### Methods
- `V createMissing(ResourceLocation key,  boolean isNetwork)`

## IForgeRegistry.ValidateCallback

*interface* `net.minecraftforge.registries.IForgeRegistry.ValidateCallback`

Callback fired when the registry contents are validated.

Enclosing interface: IForgeRegistry<V>

### Methods
- `void onValidate(IForgeRegistryInternal<V> owner,  RegistryManager stage,  int id,  ResourceLocation key,  V obj)`

## IForgeRegistryInternal

*interface* `net.minecraftforge.registries.IForgeRegistryInternal`

All Superinterfaces: IForgeRegistry<V>, Iterable<V>

### Methods
- `void setSlaveMap(ResourceLocation name,  Object obj)`
- `void register(int id,  ResourceLocation key,  V value)`
- `V getValue(int id)`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistry`: `containsKey`, `containsValue`, `getCodec`, `getDefaultKey`, `getDelegate`, `getDelegate`, `getDelegate`, `getDelegateOrThrow`, `getDelegateOrThrow`, `getDelegateOrThrow`, `getEntries`, `getHolder`, `getHolder`, `getHolder`, `getKey`, `getKeys`, `getRegistryKey`, `getRegistryName`, `getResourceKey`, `getSlaveMap`, `getValue`, `getValues`, `isEmpty`, `register`, `register`, `tags`
- from `java.lang.Iterable`: `forEach`, `iterator`, `spliterator`

## IForgeRegistryModifiable

*interface* `net.minecraftforge.registries.IForgeRegistryModifiable`

All Superinterfaces: IForgeRegistry<V>, Iterable<V>

### Methods
- `void clear()`
- `V remove(ResourceLocation key)`
- `boolean isLocked()`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistry`: `containsKey`, `containsValue`, `getCodec`, `getDefaultKey`, `getDelegate`, `getDelegate`, `getDelegate`, `getDelegateOrThrow`, `getDelegateOrThrow`, `getDelegateOrThrow`, `getEntries`, `getHolder`, `getHolder`, `getHolder`, `getKey`, `getKeys`, `getRegistryKey`, `getRegistryName`, `getResourceKey`, `getSlaveMap`, `getValue`, `getValues`, `isEmpty`, `register`, `register`, `tags`
- from `java.lang.Iterable`: `forEach`, `iterator`, `spliterator`

## ILockableRegistry

*interface* `net.minecraftforge.registries.ILockableRegistry`

### Methods
- `void lock()`

## MissingMappingsEvent

*class* `net.minecraftforge.registries.MissingMappingsEvent`

Fired on the forge bus.

### Fields
- `private final ResourceKey<? extends Registry<?>> key`
- `private final IForgeRegistry<?> registry`
- `private final List<MissingMappingsEvent.Mapping<?>> mappings`

### Methods
- `public ResourceKey<? extends Registry<?>> getKey()`
- `public IForgeRegistry<?> getRegistry()`
- `public <T> List<MissingMappingsEvent.Mapping<T>> getMappings(ResourceKey<? extends Registry<T>> registryKey,  String namespace)`
  - returns: An immutable list of missing mappings for the given namespace.
 Empty if the registry key doesn't match getKey().
- `public <T> List<MissingMappingsEvent.Mapping<T>> getAllMappings(ResourceKey<? extends Registry<T>> registryKey)`
  - returns: An immutable list of all missing mappings.
 Empty if the registry key doesn't match getKey().

## MissingMappingsEvent.Mapping

*class* `net.minecraftforge.registries.MissingMappingsEvent.Mapping`

Enclosing class: MissingMappingsEvent

### Fields
- `private final IForgeRegistry<T> registry`
- `private final IForgeRegistry<T> pool`
- `final ResourceLocation key`
- `final int id`
- `MissingMappingsEvent.Action action`
- `T target`

### Methods
- `public void ignore()`
  Ignore the missing item.
- `public void warn()`
  Warn the user about the missing item.
- `public void fail()`
  Prevent the world from loading due to the missing item.
- `public void remap(T target)`
  Remap the missing entry to the specified object.
  
   Use this if you have renamed an entry.
   Existing references using the old name will point to the new one.
  - param: target - Entry to remap to.
- `public IForgeRegistry<T> getRegistry()`
- `public ResourceLocation getKey()`
- `public int getId()`
- `public int compareTo(MissingMappingsEvent.Mapping<T> o)`

## NamespacedDefaultedWrapper

*class* `net.minecraftforge.registries.NamespacedDefaultedWrapper`

### Fields
- `private final ForgeRegistry<T> delegate`
- `private final ResourceLocation defaultKey`
- `private Holder.Reference<T> defaultHolder`

### Inherited fields
- from `net.minecraftforge.registries.NamespacedWrapper`: `locked`, `LOGGER`, `registryLifecycle`
- from `net.minecraft.core.MappedRegistry`: `unregisteredIntrusiveHolders`
- from `net.minecraft.core.IdMap`: `DEFAULT`

### Methods
- `public T get(@Nullable  @Nullable ResourceLocation name)`
- `public Optional<Holder.Reference<T>> getRandom(RandomSource rand)`
- `public ResourceLocation getDefaultKey()`
- `@Nullable Holder.Reference<T> onAdded(RegistryManager stage,  int id,  ResourceKey<T> key,  T newValue,  T oldValue)`

### Inherited methods
- from `net.minecraftforge.registries.NamespacedWrapper`: `addOptionalTag`, `bindTags`, `byId`, `containsKey`, `containsKey`, `createIntrusiveHolder`, `createRegistrationLookup`, `entrySet`, `freeze`, `get`, `getHolder`, `getHolder`, `getHolder`, `getHolder`, `getId`, `getKey`, `getOptional`, `getOrCreateHolderOrThrow`, `getOrCreateTag`, `getResourceKey`, `getTag`, `getTagNames`, `getTags`, `holders`, `isEmpty`, `isFrozen`, `isIntrusive`, `iterator`, `keySet`, `lifecycle`, `lock`, `register`, `registerMapping`, `registryKeySet`, `registryLifecycle`, `resetTags`, `size`, `unfreeze`, `validateWrite`, `validateWrite`, `wrapAsHolder`
- from `net.minecraft.core.MappedRegistry`: `asLookup`, `getKnownRegistries`, `holderOwner`, `key`, `markKnown`, `toString`
- from `net.minecraft.core.DefaultedRegistry`: `byId`, `getKey`
- from `net.minecraft.core.IdMap`: `byIdOrThrow`, `size`
- from `java.lang.Iterable`: `forEach`, `iterator`, `spliterator`
- from `net.minecraft.core.Registry`: `asHolderIdMap`, `asLookup`, `asTagAddingLookup`, `bindTags`, `byNameCodec`, `containsKey`, `containsKey`, `createIntrusiveHolder`, `entrySet`, `freeze`, `get`, `getHolder`, `getHolder`, `getHolderOrThrow`, `getId`, `getOptional`, `getOptional`, `getOrCreateTag`, `getOrThrow`, `getResourceKey`, `getTag`, `getTagNames`, `getTagOrEmpty`, `getTags`, `holderByNameCodec`, `holderOwner`, `holders`, `key`, `keys`, `keySet`, `lifecycle`, `registryKeySet`, `registryLifecycle`, `resetTags`, `stream`, `wrapAsHolder`

## NamespacedDefaultedWrapper.Factory

*class* `net.minecraftforge.registries.NamespacedDefaultedWrapper.Factory`

Enclosing class: NamespacedDefaultedWrapper<T>

### Fields
- `public static final ResourceLocation ID`

### Methods
- `public void onCreate(IForgeRegistryInternal<V> owner,  RegistryManager stage)`
- `public void onAdd(IForgeRegistryInternal<V> owner,  RegistryManager stage,  int id,  ResourceKey<V> key,  V value,  V oldValue)`

## NamespacedWrapper

*class* `net.minecraftforge.registries.NamespacedWrapper`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `private final ForgeRegistry<T> delegate`
- `@Nullable private final @Nullable Function<T,Holder.Reference<T>> intrusiveHolderCallback`
- `private final com.google.common.collect.Multimap<TagKey<T>,Supplier<T>> optionalTags`
- `boolean locked`
- `com.mojang.serialization.Lifecycle registryLifecycle`
- `private boolean frozen`
- `private List<Holder.Reference<T>> holdersSorted`
- `private it.unimi.dsi.fastutil.objects.ObjectList<Holder.Reference<T>> holdersById`
- `private Map<ResourceLocation,Holder.Reference<T>> holdersByName`
- `private Map<T,Holder.Reference<T>> holders`
- `private RegistryManager stage`
- `private volatile Map<TagKey<T>,HolderSet.Named<T>> tags`

### Inherited fields
- from `net.minecraft.core.MappedRegistry`: `unregisteredIntrusiveHolders`
- from `net.minecraft.core.IdMap`: `DEFAULT`

### Methods
- `public Holder.Reference<T> registerMapping(int id,  ResourceKey<T> key,  T value,  com.mojang.serialization.Lifecycle lifecycle)`
- `public Holder.Reference<T> register(ResourceKey<T> key,  T value,  com.mojang.serialization.Lifecycle lifecycle)`
- `@Nullable public T get(@Nullable  @Nullable ResourceLocation name)`
- `public Optional<T> getOptional(@Nullable  @Nullable ResourceLocation name)`
- `@Nullable public T get(@Nullable  @Nullable ResourceKey<T> name)`
- `@Nullable public @Nullable ResourceLocation getKey(T value)`
- `public Optional<ResourceKey<T>> getResourceKey(T p_122755_)`
- `public boolean containsKey(ResourceLocation key)`
- `public boolean containsKey(ResourceKey<T> key)`
- `public int getId(@Nullable  T value)`
- `@Nullable public T byId(int id)`
- `public com.mojang.serialization.Lifecycle lifecycle(T value)`
- `public com.mojang.serialization.Lifecycle registryLifecycle()`
- `public Iterator<T> iterator()`
- `public Set<ResourceLocation> keySet()`
- `public Set<ResourceKey<T>> registryKeySet()`
- `public Set<Map.Entry<ResourceKey<T>,T>> entrySet()`
- `public boolean isEmpty()`
- `public int size()`
- `@Deprecated public void lock()` (deprecated)
- `public Optional<Holder.Reference<T>> getHolder(int id)`
- `public Optional<Holder.Reference<T>> getHolder(ResourceKey<T> key)`
- `@NotNull public @NotNull Holder<T> wrapAsHolder(@NotNull  T value)`
- `Optional<Holder<T>> getHolder(ResourceLocation location)`
- `Optional<Holder<T>> getHolder(T value)`
- `public HolderGetter<T> createRegistrationLookup()`
- `void validateWrite()`
- `void validateWrite(ResourceKey<T> key)`
- `Holder.Reference<T> getOrCreateHolderOrThrow(ResourceKey<T> key)`
- `public Optional<Holder.Reference<T>> getRandom(RandomSource rand)`
- `public Stream<Holder.Reference<T>> holders()`
- `public Stream<com.mojang.datafixers.util.Pair<TagKey<T>,HolderSet.Named<T>>> getTags()`
- `public HolderSet.Named<T> getOrCreateTag(TagKey<T> name)`
- `void addOptionalTag(TagKey<T> name,  @NotNull  @NotNull Set<? extends Supplier<T>> defaults)`
- `public Stream<TagKey<T>> getTagNames()`
- `public Registry<T> freeze()`
- `public Holder.Reference<T> createIntrusiveHolder(T value)`
- `public Optional<HolderSet.Named<T>> getTag(TagKey<T> name)`
- `public void bindTags(Map<TagKey<T>,List<Holder<T>>> newTags)`
- `private void addTagToHolder(Map<Holder.Reference<T>,List<TagKey<T>>> holderToTag,  TagKey<T> name,  Holder<T> holder)`
- `public void resetTags()`
- `public void unfreeze()`
- `boolean isFrozen()`
- `boolean isIntrusive()`
- `@Nullable Holder.Reference<T> onAdded(RegistryManager stage,  int id,  ResourceKey<T> key,  T newValue,  T oldValue)`
- `private HolderSet.Named<T> createTag(TagKey<T> name)`
- `private Holder.Reference<T> getHolder(ResourceKey<T> key,  T value)`
- `private List<Holder.Reference<T>> getSortedHolders()`

### Inherited methods
- from `net.minecraft.core.MappedRegistry`: `asLookup`, `getKnownRegistries`, `holderOwner`, `key`, `markKnown`, `toString`
- from `net.minecraft.core.IdMap`: `byIdOrThrow`
- from `java.lang.Iterable`: `forEach`, `spliterator`
- from `net.minecraft.core.Registry`: `asHolderIdMap`, `asTagAddingLookup`, `byNameCodec`, `getHolderOrThrow`, `getOptional`, `getOrThrow`, `getTagOrEmpty`, `holderByNameCodec`, `keys`, `stream`

## NamespacedWrapper.Factory

*class* `net.minecraftforge.registries.NamespacedWrapper.Factory`

Enclosing class: NamespacedWrapper<T>

### Fields
- `public static final ResourceLocation ID`

### Methods
- `public void onCreate(IForgeRegistryInternal<V> owner,  RegistryManager stage)`
- `public void onAdd(IForgeRegistryInternal<V> owner,  RegistryManager stage,  int id,  ResourceKey<V> key,  V value,  V oldValue)`

## NewRegistryEvent

*class* `net.minecraftforge.registries.NewRegistryEvent`

Register new registries when you receive this event through RegistryBuilder and create(RegistryBuilder).

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final List<NewRegistryEvent.RegistryData<?>> registries`

### Methods
- `public <V> Supplier<IForgeRegistry<V>> create(RegistryBuilder<V> builder)`
  Adds a registry builder to be created.
  - param: builder - The builder to turn into a IForgeRegistry
  - returns: A supplier of the IForgeRegistry created by the builder. Resolving too early will return null.
- `public <V> Supplier<IForgeRegistry<V>> create(RegistryBuilder<V> builder,  @Nullable  @Nullable Consumer<IForgeRegistry<V>> onFill)`
  Adds a registry builder to be created.
  - param: builder - The builder to turn into a IForgeRegistry
  - param: onFill - Called when the returned supplier is filled with the registry
  - returns: a supplier of the IForgeRegistry created by the builder. Resolving too early will return null.
- `void fill()`
- `private <T> void buildRegistry(Map<RegistryBuilder<?>,IForgeRegistry<?>> builtRegistries,  NewRegistryEvent.RegistryData<T> data)`
- `public String toString()`

## NewRegistryEvent.RegistryData

*record* `net.minecraftforge.registries.NewRegistryEvent.RegistryData`

Enclosing class: NewRegistryEvent

### Fields
- `private final RegistryBuilder<V> builder`
  The field for the builder record component.
- `private final NewRegistryEvent.RegistryHolder<V> registryHolder`
  The field for the registryHolder record component.
- `private final Consumer<IForgeRegistry<V>> onFill`
  The field for the onFill record component.

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
- `public RegistryBuilder<V> builder()`
  Returns the value of the builder record component.
  - returns: the value of the builder record component
- `public NewRegistryEvent.RegistryHolder<V> registryHolder()`
  Returns the value of the registryHolder record component.
  - returns: the value of the registryHolder record component
- `public Consumer<IForgeRegistry<V>> onFill()`
  Returns the value of the onFill record component.
  - returns: the value of the onFill record component

## NewRegistryEvent.RegistryHolder

*class* `net.minecraftforge.registries.NewRegistryEvent.RegistryHolder`

Enclosing class: NewRegistryEvent

### Fields
- `IForgeRegistry<V> registry`

### Methods
- `public IForgeRegistry<V> get()`

## ObjectHolder

*annotation interface* `net.minecraftforge.registries.ObjectHolder`

ObjectHolder can be used to automatically populate public static final fields with entries
 from the registry. These values can then be referred within mod code directly.

## ObjectHolderRef

*class* `net.minecraftforge.registries.ObjectHolderRef`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private final Field field`
- `private final ResourceLocation injectedObject`
- `private final ForgeRegistry<?> registry`

### Methods
- `@Nullable static @Nullable ObjectHolderRef create(ResourceLocation registryName,  Field field,  String injectedObject,  boolean extractFromExistingValues)`
- `public void accept(Predicate<ResourceLocation> filter)`
- `public int hashCode()`
- `public boolean equals(Object other)`

### Inherited methods
- from `java.util.function.Consumer`: `andThen`

## ObjectHolderRegistry

*class* `net.minecraftforge.registries.ObjectHolderRegistry`

Internal registry for tracking ObjectHolder references

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final Set<Consumer<Predicate<ResourceLocation>>> objectHolders`
- `private static final org.objectweb.asm.Type OBJECT_HOLDER`
- `private static final org.objectweb.asm.Type MOD`
- `private static final List<ObjectHolderRegistry.VanillaObjectHolderData> VANILLA_OBJECT_HOLDERS`

### Methods
- `public static void addHandler(Consumer<Predicate<ResourceLocation>> ref)`
  Exposed to allow modders to register their own notification handlers.
   This runnable will be called after a registry snapshot has been injected and finalized.
   The internal list is backed by a HashSet so it is HIGHLY recommended you implement a proper equals
   and hashCode function to de-duplicate callers here.
   The default @ObjectHolder implementation uses the hashCode/equals for the field the annotation is on.
- `public static boolean removeHandler(Consumer<Predicate<ResourceLocation>> ref)`
  Removed the specified handler from the notification list.
  
   The internal list is backed by a hash set, and so proper hashCode and equals operations are required for success.
  
   The default @ObjectHolder implementation uses the hashCode/equals for the field the annotation is on.
  - returns: true if handler was matched and removed.
- `public static void findObjectHolders()`
- `private static void scanTarget(Map<org.objectweb.asm.Type,String> classModIds,  Map<org.objectweb.asm.Type,Class<?>> classCache,  org.objectweb.asm.Type type,  @Nullable  @Nullable String annotationTarget,  @Nullable  @Nullable Class<?> registryClass,  String registryName,  String value,  boolean isClass,  boolean extractFromValue)`
- `private static void scanClassForFields(Map<org.objectweb.asm.Type,String> classModIds,  org.objectweb.asm.Type targetClass,  ResourceLocation registryName,  Class<?> registryClass,  String value,  Class<?> clazz,  boolean extractFromExistingValues)`
- `private static ResourceLocation getRegistryName(Map<org.objectweb.asm.Type,ResourceLocation> classRegistryNames,  @Nullable  @Nullable String registryName,  org.objectweb.asm.Type targetClass,  Object declaration)`
- `public static void applyObjectHolders()`
- `public static void applyObjectHolders(Predicate<ResourceLocation> filter)`

## ObjectHolderRegistry.VanillaObjectHolderData

*record* `net.minecraftforge.registries.ObjectHolderRegistry.VanillaObjectHolderData`

Enclosing class: ObjectHolderRegistry

### Fields
- `private final String holderClass`
  The field for the holderClass record component.
- `private final String registryName`
  The field for the registryName record component.
- `private final String registryType`
  The field for the registryType record component.

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
- `public String holderClass()`
  Returns the value of the holderClass record component.
  - returns: the value of the holderClass record component
- `public String registryName()`
  Returns the value of the registryName record component.
  - returns: the value of the registryName record component
- `public String registryType()`
  Returns the value of the registryType record component.
  - returns: the value of the registryType record component

## RegisterEvent

*class* `net.minecraftforge.registries.RegisterEvent`

This event fires for each forge and vanilla registry when all registries are ready to have modded objects registered.

 Fired on the mod bus.

### Fields
- `@NotNull private final @NotNull ResourceKey<? extends Registry<?>> registryKey`
- `@Nullable final @Nullable ForgeRegistry<?> forgeRegistry`
- `@Nullable private final @Nullable Registry<?> vanillaRegistry`

### Methods
- `public <T> void register(ResourceKey<? extends Registry<T>> registryKey,  ResourceLocation name,  Supplier<T> valueSupplier)`
  Registers the value with the given name to the stored registry if the provided registry key matches this event's registry key.
  - param: registryKey - the key of the registry to register the value to
  - param: name - the name of the object to register as its key
  - param: valueSupplier - a supplier of the object value
- `public <T> void register(ResourceKey<? extends Registry<T>> registryKey,  Consumer<RegisterEvent.RegisterHelper<T>> consumer)`
  Calls the provided consumer with a register helper if the provided registry key matches this event's registry key.
  - param: registryKey - the key of the registry to register objects to
- `@NotNull public @NotNull ResourceKey<? extends Registry<?>> getRegistryKey()`
  - returns: The registry key linked to this event
- `@Nullable public <T> @Nullable IForgeRegistry<T> getForgeRegistry()`
  - returns: The forge registry for the given registry key, or null if the registry is not a forge registry
- `@Nullable public <T> @Nullable Registry<T> getVanillaRegistry()`
  - returns: The vanilla registry for the given registry key, or null if the registry is not a vanilla registry
- `public String toString()`

## RegisterEvent.RegisterHelper

*interface* `net.minecraftforge.registries.RegisterEvent.RegisterHelper`

Enclosing class: RegisterEvent

### Methods
- `default void register(String name,  T value)`
  Registers the given value with the given name to the registry.
   The namespace is inferred based on the active mod container.
   If you wish to specify a namespace, use register(ResourceLocation, Object) instead.
  - param: name - the name of the object to register as its key with the namespaced inferred from the active mod container
  - param: value - the object value
- `default void register(ResourceKey<T> key,  T value)`
  Registers the given value with the given name to the registry.
  - param: key - the resource key of the object to register
  - param: value - the object value
- `void register(ResourceLocation name,  T value)`
  Registers the given value with the given name to the registry.
  - param: name - the name of the object to register as its key
  - param: value - the object value

## RegistryBuilder

*class* `net.minecraftforge.registries.RegistryBuilder`

### Fields
- `private static final int MAX_ID` (= 2147483646)
- `private ResourceLocation registryName`
- `private ResourceLocation optionalDefaultKey`
- `private int minId`
- `private int maxId`
- `private List<IForgeRegistry.AddCallback<T>> addCallback`
- `private List<IForgeRegistry.ClearCallback<T>> clearCallback`
- `private List<IForgeRegistry.CreateCallback<T>> createCallback`
- `private List<IForgeRegistry.ValidateCallback<T>> validateCallback`
- `private List<IForgeRegistry.BakeCallback<T>> bakeCallback`
- `private boolean saveToDisc`
- `private boolean sync`
- `private boolean allowOverrides`
- `private boolean allowModifications`
- `private boolean hasWrapper`
- `private IForgeRegistry.MissingFactory<T> missingFactory`
- `private Set<ResourceLocation> legacyNames`
- `@Nullable private @Nullable Function<T,Holder.Reference<T>> intrusiveHolderCallback`

### Methods
- `public static <T> RegistryBuilder<T> of()`
- `public static <T> RegistryBuilder<T> of(String name)`
- `public static <T> RegistryBuilder<T> of(ResourceLocation name)`
- `public RegistryBuilder<T> setName(ResourceLocation name)`
- `public RegistryBuilder<T> setIDRange(int min,  int max)`
- `public RegistryBuilder<T> setMaxID(int max)`
- `public RegistryBuilder<T> setDefaultKey(ResourceLocation key)`
- `public RegistryBuilder<T> addCallback(Object inst)`
- `public RegistryBuilder<T> add(IForgeRegistry.AddCallback<T> add)`
- `public RegistryBuilder<T> onAdd(IForgeRegistry.AddCallback<T> add)`
- `public RegistryBuilder<T> add(IForgeRegistry.ClearCallback<T> clear)`
- `public RegistryBuilder<T> onClear(IForgeRegistry.ClearCallback<T> clear)`
- `public RegistryBuilder<T> add(IForgeRegistry.CreateCallback<T> create)`
- `public RegistryBuilder<T> onCreate(IForgeRegistry.CreateCallback<T> create)`
- `public RegistryBuilder<T> add(IForgeRegistry.ValidateCallback<T> validate)`
- `public RegistryBuilder<T> onValidate(IForgeRegistry.ValidateCallback<T> validate)`
- `public RegistryBuilder<T> add(IForgeRegistry.BakeCallback<T> bake)`
- `public RegistryBuilder<T> onBake(IForgeRegistry.BakeCallback<T> bake)`
- `public RegistryBuilder<T> set(IForgeRegistry.MissingFactory<T> missing)`
- `public RegistryBuilder<T> missing(IForgeRegistry.MissingFactory<T> missing)`
- `public RegistryBuilder<T> disableSaving()`
- `public RegistryBuilder<T> disableSync()`
  Prevents the registry from being synced to clients.
  - returns: this
- `public RegistryBuilder<T> disableOverrides()`
- `public RegistryBuilder<T> allowModification()`
- `RegistryBuilder<T> hasWrapper()`
- `public RegistryBuilder<T> legacyName(String name)`
- `public RegistryBuilder<T> legacyName(ResourceLocation name)`
- `RegistryBuilder<T> intrusiveHolderCallback(Function<T,Holder.Reference<T>> intrusiveHolderCallback)`
- `public RegistryBuilder<T> hasTags()`
  Enables tags for this registry if not already.
   All forge registries with wrappers inherently support tags.
  - returns: this builder
- `IForgeRegistry<T> create()`
  Modders: Use NewRegistryEvent.create(RegistryBuilder) instead
- `@Nullable public @Nullable IForgeRegistry.AddCallback<T> getAdd()`
- `@Nullable public @Nullable IForgeRegistry.ClearCallback<T> getClear()`
- `@Nullable public @Nullable IForgeRegistry.CreateCallback<T> getCreate()`
- `@Nullable public @Nullable IForgeRegistry.ValidateCallback<T> getValidate()`
- `@Nullable public @Nullable IForgeRegistry.BakeCallback<T> getBake()`
- `@Nullable public @Nullable ResourceLocation getDefault()`
- `public int getMinId()`
- `public int getMaxId()`
- `public boolean getAllowOverrides()`
- `public boolean getAllowModifications()`
- `@Nullable public @Nullable IForgeRegistry.MissingFactory<T> getMissingFactory()`
- `public boolean getSaveToDisc()`
- `public boolean getSync()`
- `public Set<ResourceLocation> getLegacyNames()`
- `Function<T,Holder.Reference<T>> getIntrusiveHolderCallback()`
- `boolean getHasWrapper()`

## RegistryManager

*class* `net.minecraftforge.registries.RegistryManager`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `public static final RegistryManager ACTIVE`
- `public static final RegistryManager VANILLA`
- `public static final RegistryManager FROZEN`
- `private static Set<ResourceLocation> vanillaRegistryKeys`
- `com.google.common.collect.BiMap<ResourceLocation,ForgeRegistry<?>> registries`
- `private Map<ResourceLocation,? extends IForgeRegistry<?>> registryView`
- `private Set<ResourceLocation> persisted`
- `private Set<ResourceLocation> synced`
- `private Map<ResourceLocation,ResourceLocation> legacyNames`
- `private final String name`

### Methods
- `public String getName()`
- `boolean isStaging()`
- `public <V> ForgeRegistry<V> getRegistry(ResourceLocation key)`
- `public <V> ForgeRegistry<V> getRegistry(ResourceKey<? extends Registry<V>> key)`
- `public <V> ResourceLocation getName(IForgeRegistry<V> reg)`
- `public Map<ResourceLocation,? extends IForgeRegistry<?>> getRegistries()`
- `public static Set<ResourceLocation> getVanillaRegistryKeys()`
- `public <V> ResourceLocation updateLegacyName(ResourceLocation legacyName)`
- `public <V> ForgeRegistry<V> getRegistry(ResourceLocation key,  RegistryManager other)`
- `<V> ForgeRegistry<V> createRegistry(ResourceLocation name,  RegistryBuilder<V> builder)`
- `static <V> void registerToRootRegistry(ForgeRegistry<V> forgeReg)`
- `private static <V> void injectForgeRegistry(ForgeRegistry<V> forgeReg,  Registry<? extends Registry<?>> rootRegistry)`
- `public static void postNewRegistryEvent()`
- `private void addLegacyName(ResourceLocation legacyName,  ResourceLocation name)`
- `public Map<ResourceLocation,ForgeRegistry.Snapshot> takeSnapshot(boolean savingToDisc)`
- `@Internal public void clean()`
- `@Internal public static List<ResourceLocation> getRegistryNamesForSyncToClient()`

## RegistryObject

*class* `net.minecraftforge.registries.RegistryObject`

### Fields
- `@Nullable private final @Nullable ResourceLocation name`
- `@Nullable private @Nullable ResourceKey<T> key`
- `private final boolean optionalRegistry`
- `@Nullable private T value`
- `@Nullable private @Nullable Holder<T> holder`
- `private static final RegistryObject<?> EMPTY`

### Methods
- `public static <T, U extends T> RegistryObject<U> create(ResourceLocation name,  IForgeRegistry<T> registry)`
  Factory for a RegistryObject that stores the value of an object from the provided forge registry once it is ready.
  - param: name - the name of the object to look up in the forge registry
  - param: registry - the forge registry
  - returns: a RegistryObject that stores the value of an object from the provided forge registry once it is ready
- `public static <T, U extends T> RegistryObject<U> create(ResourceLocation name,  ResourceKey<? extends Registry<T>> registryKey,  String modid)`
  Factory for a RegistryObject that stores the value of an object from a registry once it is ready based on a lookup of the provided registry key.
  
   If a registry with the given key cannot be found, an exception will be thrown when trying to fill this RegistryObject.
   Use createOptional(ResourceLocation, ResourceKey, String) for RegistryObjects of optional registries.
  - param: name - the name of the object to look up in a registry
  - param: registryKey - the key of the registry. Supports lookups on BuiltInRegistries and RegistryManager.ACTIVE.
  - param: modid - the mod id calling context
  - returns: a RegistryObject that stores the value of an object from a registry once it is ready
- `public static <T, U extends T> RegistryObject<U> createOptional(ResourceLocation name,  ResourceKey<? extends Registry<T>> registryKey,  String modid)`
  Factory for a RegistryObject that optionally stores the value of an object from a registry once it is ready if the registry exists
   based on a lookup of the provided registry key.
  
   If a registry with the given key cannot be found, it will be silently ignored and this RegistryObject will not be filled.
   Use create(ResourceLocation, ResourceKey, String) for RegistryObjects that should throw exceptions on missing registry.
  - param: name - the name of the object to look up in a registry
  - param: registryKey - the key of the registry. Supports lookups on BuiltInRegistries and RegistryManager.ACTIVE.
  - param: modid - the mod id calling context
  - returns: a RegistryObject that stores the value of an object from a registry once it is ready
- `public static <T, U extends T> RegistryObject<U> create(ResourceLocation name,  ResourceLocation registryName,  String modid)`
  Factory for a RegistryObject that stores the value of an object from a registry once it is ready based on a lookup of the provided registry name.
  
   If a registry with the given name cannot be found, an exception will be thrown when trying to fill this RegistryObject.
   Use createOptional(ResourceLocation, ResourceLocation, String) for RegistryObjects of optional registries.
  - param: name - the name of the object to look up in a registry
  - param: registryName - the name of the registry. Supports lookups on BuiltInRegistries and RegistryManager.ACTIVE.
  - param: modid - the mod id calling context
  - returns: a RegistryObject that stores the value of an object from a registry once it is ready
- `public static <T, U extends T> RegistryObject<U> createOptional(ResourceLocation name,  ResourceLocation registryName,  String modid)`
  Factory for a RegistryObject that optionally stores the value of an object from a registry once it is ready if the registry exists
   based on a lookup of the provided registry name.
  
   If a registry with the given name cannot be found, it will be silently ignored and this RegistryObject will not be filled.
   Use create(ResourceLocation, ResourceLocation, String) for RegistryObjects that should throw exceptions on missing registry.
  - param: name - the name of the object to look up in a registry
  - param: registryName - the name of the registry. Supports lookups on BuiltInRegistries and RegistryManager.ACTIVE.
  - param: modid - the mod id calling context
  - returns: a RegistryObject that stores the value of an object from a registry once it is ready
- `private static <T> RegistryObject<T> empty()`
- `@NotNull public T get()`
  Retrieves the wrapped object in the registry.
   This value will automatically be updated when the backing registry is updated.
  - throws: NullPointerException - If the value is null. Use isPresent() to check if the value exists first.
- `void updateReference(IForgeRegistry<? extends T> registry)`
- `void updateReference(Registry<? extends T> registry)`
- `void updateReference(ResourceLocation registryName)`
- `void updateReference(RegisterEvent event)`
- `private static boolean registryExists(ResourceLocation registryName)`
- `public ResourceLocation getId()`
- `@Nullable public @Nullable ResourceKey<T> getKey()`
  Returns the resource key that points to the registry and name of this registry object.
   Nullable only if this RegistryObject is empty and has no name.
  - returns: the resource key that points to the registry and name of this registry object
- `public Stream<T> stream()`
- `public boolean isPresent()`
  Return true if there is a mod object present, otherwise false.
  - returns: true if there is a mod object present, otherwise false
- `public void ifPresent(Consumer<? super T> consumer)`
  If a mod object is present, invoke the specified consumer with the object,
   otherwise do nothing.
  - param: consumer - block to be executed if a mod object is present
  - throws: NullPointerException - if mod object is present and consumer is
 null
- `public RegistryObject<T> filter(Predicate<? super T> predicate)`
  If a mod object is present, and the mod object matches the given predicate,
   return an RegistryObject describing the value, otherwise return an
   empty RegistryObject.
  - param: predicate - a predicate to apply to the mod object, if present
  - returns: an RegistryObject describing the value of this RegistryObject
 if a mod object is present and the mod object matches the given predicate,
 otherwise an empty RegistryObject
  - throws: NullPointerException - if the predicate is null
- `public <U> Optional<U> map(Function<? super T,? extends U> mapper)`
  If a mod object is present, apply the provided mapping function to it,
   and if the result is non-null, return an Optional describing the
   result. Otherwise return an empty Optional.
  - param: mapper - a mapping function to apply to the mod object, if present
  - returns: an Optional describing the result of applying a mapping
 function to the mod object of this RegistryObject, if a mod object is present,
 otherwise an empty Optional
  - throws: NullPointerException - if the mapping function is null
- `public <U> Optional<U> flatMap(Function<? super T,Optional<U>> mapper)`
  If a value is present, apply the provided Optional-bearing
   mapping function to it, return that result, otherwise return an empty
   Optional. This method is similar to map(Function),
   but the provided mapper is one whose result is already an Optional,
   and if invoked, flatMap does not wrap it with an additional
   Optional.
  - param: mapper - a mapping function to apply to the mod object, if present
 the mapping function
  - returns: the result of applying an Optional-bearing mapping
 function to the value of this Optional, if a value is present,
 otherwise an empty Optional
  - throws: NullPointerException - if the mapping function is null or returns
 a null result
- `public <U> Supplier<U> lazyMap(Function<? super T,? extends U> mapper)`
  If a mod object is present, lazily apply the provided mapping function to it,
   returning a supplier for the transformed result. If this object is empty, or the
   mapping function returns null, the supplier will return null.
  - param: mapper - A mapping function to apply to the mod object, if present
  - returns: A Supplier lazily providing the result of applying a mapping
 function to the mod object of this RegistryObject, if a mod object is present,
 otherwise a supplier returning null
  - throws: NullPointerException - if the mapping function is null
- `public T orElse(T other)`
  Return the mod object if present, otherwise return other.
  - param: other - the mod object to be returned if there is no mod object present, may
 be null
  - returns: the mod object, if present, otherwise other
- `public T orElseGet(Supplier<? extends T> other)`
  Return the mod object if present, otherwise invoke other and return
   the result of that invocation.
  - param: other - a Supplier whose result is returned if no mod object
 is present
  - returns: the mod object if present otherwise the result of other.get()
  - throws: NullPointerException - if mod object is not present and other is
 null
- `public <X extends Throwable> T orElseThrow(Supplier<? extends X> exceptionSupplier)  throws X`
  Return the contained mod object, if present, otherwise throw an exception
   to be created by the provided supplier.
  - param: exceptionSupplier - The supplier which will return the exception to
 be thrown
  - returns: the present mod object
  - throws: X - if there is no mod object present
  - throws: NullPointerException - if no mod object is present and
 exceptionSupplier is null
- `@NotNull public @NotNull Optional<Holder<T>> getHolder()`
  Returns an optional Holder instance pointing to this RegistryObject's name and value.
  
   This should only be used in cases where vanilla code requires passing in a Holder.
   Mod-written code should rely on RegistryObjects or Suppliers instead.
  
   The returned optional will be empty if the registry does not exist or if returns false.
  - returns: an optional Holder instance pointing to this RegistryObject's name and value
- `public boolean equals(Object obj)`
- `public int hashCode()`
