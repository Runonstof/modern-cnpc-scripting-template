# net.minecraftforge.registries

- [DataSerializerEntry](#dataserializerentry)
- [ForgeRegistry.Snapshot](#forgeregistry.snapshot)
- [ForgeRegistry>](#forgeregistry)
- [GameData](#gamedata)
- [IForgeRegistry.AddCallback>](#iforgeregistry.addcallback)
- [IForgeRegistry.ClearCallback>](#iforgeregistry.clearcallback)
- [IForgeRegistry.CreateCallback>](#iforgeregistry.createcallback)
- [IForgeRegistry.DummyFactory>](#iforgeregistry.dummyfactory)
- [IForgeRegistry.MissingFactory>](#iforgeregistry.missingfactory)
- [IForgeRegistry.ValidateCallback>](#iforgeregistry.validatecallback)
- [IForgeRegistry>](#iforgeregistry)
- [IForgeRegistryEntry](#iforgeregistryentry)
- [IForgeRegistryEntry.Impl>](#iforgeregistryentry.impl)
- [IForgeRegistryInternal>](#iforgeregistryinternal)
- [IForgeRegistryModifiable>](#iforgeregistrymodifiable)
- [ILockableRegistry](#ilockableregistry)
- [IRegistryDelegate](#iregistrydelegate)
- [ObjectHolderRegistry](#objectholderregistry)
- [RegistryBuilder>](#registrybuilder)
- [RegistryManager](#registrymanager)
## DataSerializerEntry

*class* `net.minecraftforge.registries.DataSerializerEntry`

All Implemented Interfaces: IForgeRegistryEntry<DataSerializerEntry>

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public DataSerializer<?> getSerializer()`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ForgeRegistry.Snapshot

*class* `net.minecraftforge.registries.ForgeRegistry.Snapshot`

Enclosing class: ForgeRegistry<V extends IForgeRegistryEntry<V>>

### Fields
- `public final java.util.Map<ResourceLocation,java.lang.Integer> ids`
- `public final java.util.Map<ResourceLocation,ResourceLocation> aliases`
- `public final java.util.Set<java.lang.Integer> blocked`
- `public final java.util.Set<ResourceLocation> dummied`
- `public final java.util.Map<ResourceLocation,java.lang.String> overrides`

### Methods
- `public NBTTagCompound write()`
- `public static ForgeRegistry.Snapshot read(NBTTagCompound nbt)`

## ForgeRegistry>

*class* `net.minecraftforge.registries.ForgeRegistry>`

All Implemented Interfaces: java.lang.Iterable<V>, IForgeRegistry<V>, IForgeRegistryInternal<V>, IForgeRegistryModifiable<V>

### Fields
- `public static final boolean DEBUG`

### Methods
- `public void register(V value)`
- `public java.util.Iterator<V> iterator()`
- `public java.lang.Class<V> getRegistrySuperType()`
- `public void registerAll(V... values)`
- `public boolean containsKey(ResourceLocation key)`
- `public boolean containsValue(V value)`
- `public V getValue(ResourceLocation key)`
- `public ResourceLocation getKey(V value)`
- `public java.util.Set<ResourceLocation> getKeys()`
- `@Deprecated public java.util.List<V> getValues()` (deprecated)
  Deprecated. use getValuesCollection() to avoid copying
- `public java.util.Collection<V> getValuesCollection()`
- `public java.util.Set<java.util.Map.Entry<ResourceLocation,V>> getEntries()`
- `public <T> T getSlaveMap(ResourceLocation name,  java.lang.Class<T> type)`
  Description copied from interface: IForgeRegistry
  Retrieve the slave map of type T from the registry.
   Slave maps are maps which are dependent on registry content in some way.
  - param: name - The name of the slavemap
  - param: type - The type
  - returns: The slavemap if present
- `public void setSlaveMap(ResourceLocation name,  java.lang.Object obj)`
- `public int getID(V value)`
- `public int getID(ResourceLocation name)`
- `public V getValue(int id)`
- `@Deprecated public V getRaw(int id)` (deprecated)
  Deprecated.
- `public void clear()`
- `public V remove(ResourceLocation key)`
- `public boolean isLocked()`
- `public void freeze()`
  Used to control the times where people can modify this registry.
   Users should only ever register things in the Register events!
- `public void unfreeze()`
- `public void loadIds(java.util.Map<ResourceLocation,java.lang.Integer> ids,  java.util.Map<ResourceLocation,java.lang.String> overrides,  java.util.Map<ResourceLocation,java.lang.Integer> missing,  java.util.Map<ResourceLocation,java.lang.Integer[]> remapped,  ForgeRegistry<V> old,  ResourceLocation name)`
- `public ForgeRegistry.Snapshot makeSnapshot()`
- `public RegistryEvent.MissingMappings<?> getMissingEvent(ResourceLocation name,  java.util.Map<ResourceLocation,java.lang.Integer> map)`

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `spliterator`

## GameData

*class* `net.minecraftforge.registries.GameData`

INTERNAL ONLY
 MODDERS SHOULD HAVE NO REASON TO USE THIS CLASS

### Fields
- `public static final ResourceLocation BLOCKS`
- `public static final ResourceLocation ITEMS`
- `public static final ResourceLocation POTIONS`
- `public static final ResourceLocation BIOMES`
- `public static final ResourceLocation SOUNDEVENTS`
- `public static final ResourceLocation POTIONTYPES`
- `public static final ResourceLocation ENCHANTMENTS`
- `public static final ResourceLocation ENTITIES`
- `public static final ResourceLocation RECIPES`
- `public static final ResourceLocation PROFESSIONS`
- `public static final ResourceLocation SERIALIZERS`

### Methods
- `public static void init()`
- `public static <V extends IForgeRegistryEntry<V>> RegistryNamespacedDefaultedByKey<ResourceLocation,V> getWrapperDefaulted(java.lang.Class<V> cls)`
- `public static <V extends IForgeRegistryEntry<V>> RegistryNamespaced<ResourceLocation,V> getWrapper(java.lang.Class<V> cls)`
- `public static <any> getBlockItemMap()`
- `public static ObjectIntIdentityMap<IBlockState> getBlockStateIDMap()`
- `public static java.util.Map<java.lang.Class<? extends Entity>,EntityEntry> getEntityClassMap()`
- `public static java.util.Map<DataSerializer<?>,DataSerializerEntry> getSerializerMap()`
- `public static <K extends IForgeRegistryEntry<K>> K register_impl(K value)`
- `public static void vanillaSnapshot()`
- `public static void freezeData()`
- `public static void revertToFrozen()`
- `public static void revert(RegistryManager state,  ResourceLocation registry,  boolean lock)`
- `public static ForgeRegistry<EntityEntry> getEntityRegistry()`
- `public static void registerEntity(int id,  ResourceLocation key,  java.lang.Class<? extends Entity> clazz,  java.lang.String oldName)`
- `public static <any> injectSnapshot(java.util.Map<ResourceLocation,ForgeRegistry.Snapshot> snapshot,  boolean injectFrozenData,  boolean isLocalWorld)`
- `public static void fireCreateRegistryEvents()`
- `public static void fireRegistryEvents()`
- `public static void fireRegistryEvents(java.util.function.Predicate<ResourceLocation> filter)`
- `@Deprecated public static ResourceLocation checkPrefix(java.lang.String name)` (deprecated)
  Deprecated. Use checkPrefix(String, boolean).
- `public static ResourceLocation checkPrefix(java.lang.String name,  boolean warnOverrides)`
  Check a name for a domain prefix, and if not present infer it from the
   current active mod container.
  - param: name - The name or resource location
  - param: warnOverrides - If true, logs a warning if domain differs from that of
 the currently currently active mod container
  - returns: The ResourceLocation with given or inferred domain

## IForgeRegistry.AddCallback>

*interface* `net.minecraftforge.registries.IForgeRegistry.AddCallback>`

Callback fired when objects are added to the registry. This will fire when the registry is rebuilt
 on the client side from a server side synchronization, or when a world is loaded.

Enclosing interface: IForgeRegistry<V extends IForgeRegistryEntry<V>>

### Methods
- `void onAdd(IForgeRegistryInternal<V> owner,  RegistryManager stage,  int id,  V obj,  V oldObj)`

## IForgeRegistry.ClearCallback>

*interface* `net.minecraftforge.registries.IForgeRegistry.ClearCallback>`

Callback fired when the registry is cleared. This is done before a registry is reloaded from client
 or server.

Enclosing interface: IForgeRegistry<V extends IForgeRegistryEntry<V>>

### Methods
- `void onClear(IForgeRegistryInternal<V> owner,  RegistryManager stage)`

## IForgeRegistry.CreateCallback>

*interface* `net.minecraftforge.registries.IForgeRegistry.CreateCallback>`

Callback fired when a registry instance is created. Populate slave maps here.

Enclosing interface: IForgeRegistry<V extends IForgeRegistryEntry<V>>

### Methods
- `void onCreate(IForgeRegistryInternal<V> owner,  RegistryManager stage)`

## IForgeRegistry.DummyFactory>

*interface* `net.minecraftforge.registries.IForgeRegistry.DummyFactory>`

Factory for creating dummy entries, allowing worlds to be loaded and keep the missing block references.

Enclosing interface: IForgeRegistry<V extends IForgeRegistryEntry<V>>

### Methods
- `V createDummy(ResourceLocation key)`

## IForgeRegistry.MissingFactory>

*interface* `net.minecraftforge.registries.IForgeRegistry.MissingFactory>`

Enclosing interface: IForgeRegistry<V extends IForgeRegistryEntry<V>>

### Methods
- `V createMissing(ResourceLocation key,  boolean isNetwork)`

## IForgeRegistry.ValidateCallback>

*interface* `net.minecraftforge.registries.IForgeRegistry.ValidateCallback>`

Callback fired when the registry contents are validated.

Enclosing interface: IForgeRegistry<V extends IForgeRegistryEntry<V>>

### Methods
- `void onValidate(IForgeRegistryInternal<V> owner,  RegistryManager stage,  int id,  ResourceLocation key,  V obj)`

## IForgeRegistry>

*interface* `net.minecraftforge.registries.IForgeRegistry>`

Main interface for the registry system. Use this to query the registry system.

All Superinterfaces: java.lang.Iterable<V>

### Methods
- `java.lang.Class<V> getRegistrySuperType()`
- `void register(V value)`
- `void registerAll(V... values)`
- `boolean containsKey(ResourceLocation key)`
- `boolean containsValue(V value)`
- `V getValue(ResourceLocation key)`
- `ResourceLocation getKey(V value)`
- `java.util.Set<ResourceLocation> getKeys()`
- `@Deprecated java.util.List<V> getValues()` (deprecated)
  Deprecated. use getValuesCollection()
- `default java.util.Collection<V> getValuesCollection()`
- `java.util.Set<java.util.Map.Entry<ResourceLocation,V>> getEntries()`
- `<T> T getSlaveMap(ResourceLocation slaveMapName,  java.lang.Class<T> type)`
  Retrieve the slave map of type T from the registry.
   Slave maps are maps which are dependent on registry content in some way.
  - param: slaveMapName - The name of the slavemap
  - param: type - The type
  - returns: The slavemap if present

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `iterator`, `spliterator`

## IForgeRegistryEntry

*interface* `net.minecraftforge.registries.IForgeRegistryEntry`

### Methods
- `V setRegistryName(ResourceLocation name)`
  Sets a unique name for this Item. This should be used for uniquely identify the instance of the Item.
   This is the valid replacement for the atrocious 'getUnlocalizedName().substring(6)' stuff that everyone does.
   Unlocalized names have NOTHING to do with unique identifiers. As demonstrated by vanilla blocks and items.
  
   The supplied name will be prefixed with the currently active mod's modId.
   If the supplied name already has a prefix that is different, it will be used and a warning will be logged.
  
   If a name already exists, or this Item is already registered in a registry, then an IllegalStateException is thrown.
  
   Returns 'this' to allow for chaining.
  - param: name - Unique registry name
  - returns: This instance
- `ResourceLocation getRegistryName()`
  A unique identifier for this entry, if this entry is registered already it will return it's official registry name.
   Otherwise it will return the name set in setRegistryName().
   If neither are valid null is returned.
  - returns: Unique identifier or null.
- `java.lang.Class<V> getRegistryType()`

## IForgeRegistryEntry.Impl>

*class* `net.minecraftforge.registries.IForgeRegistryEntry.Impl>`

All Implemented Interfaces: IForgeRegistryEntry<T>

Enclosing interface: IForgeRegistryEntry<V>

### Fields
- `public final IRegistryDelegate<T extends IForgeRegistryEntry<T>> delegate`

### Methods
- `public final T setRegistryName(java.lang.String name)`
- `public final T setRegistryName(ResourceLocation name)`
  Description copied from interface: IForgeRegistryEntry
  Sets a unique name for this Item. This should be used for uniquely identify the instance of the Item.
   This is the valid replacement for the atrocious 'getUnlocalizedName().substring(6)' stuff that everyone does.
   Unlocalized names have NOTHING to do with unique identifiers. As demonstrated by vanilla blocks and items.
  
   The supplied name will be prefixed with the currently active mod's modId.
   If the supplied name already has a prefix that is different, it will be used and a warning will be logged.
  
   If a name already exists, or this Item is already registered in a registry, then an IllegalStateException is thrown.
  
   Returns 'this' to allow for chaining.
  - param: name - Unique registry name
  - returns: This instance
- `public final T setRegistryName(java.lang.String modID,  java.lang.String name)`
- `public final ResourceLocation getRegistryName()`
  Description copied from interface: IForgeRegistryEntry
  A unique identifier for this entry, if this entry is registered already it will return it's official registry name.
   Otherwise it will return the name set in setRegistryName().
   If neither are valid null is returned.
  - returns: Unique identifier or null.
- `public final java.lang.Class<T> getRegistryType()`

## IForgeRegistryInternal>

*interface* `net.minecraftforge.registries.IForgeRegistryInternal>`

All Superinterfaces: IForgeRegistry<V>, java.lang.Iterable<V>

### Methods
- `void setSlaveMap(ResourceLocation name,  java.lang.Object obj)`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistry`: `containsKey`, `containsValue`, `getEntries`, `getKey`, `getKeys`, `getRegistrySuperType`, `getSlaveMap`, `getValue`, `getValues`, `getValuesCollection`, `register`, `registerAll`
- from `java.lang.Iterable`: `forEach`, `iterator`, `spliterator`

## IForgeRegistryModifiable>

*interface* `net.minecraftforge.registries.IForgeRegistryModifiable>`

All Superinterfaces: IForgeRegistry<V>, java.lang.Iterable<V>

### Methods
- `void clear()`
- `V remove(ResourceLocation key)`
- `boolean isLocked()`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistry`: `containsKey`, `containsValue`, `getEntries`, `getKey`, `getKeys`, `getRegistrySuperType`, `getSlaveMap`, `getValue`, `getValues`, `getValuesCollection`, `register`, `registerAll`
- from `java.lang.Iterable`: `forEach`, `iterator`, `spliterator`

## ILockableRegistry

*interface* `net.minecraftforge.registries.ILockableRegistry`

### Methods
- `void lock()`

## IRegistryDelegate

*interface* `net.minecraftforge.registries.IRegistryDelegate`

A registry delegate for holding references to items or blocks
 These should be safe to use in things like lists though aliased items and blocks will not
 have object identity with respect to their delegate.

### Methods
- `T get()`
  Get the referent pointed at by this delegate. This will be the currently active item or block, and will change
   as world saves come and go. Note that item.delegate.get() may NOT be the same object as item, due to item and
   block substitution.
  - returns: The referred object
- `ResourceLocation name()`
  Get the unique resource location for this delegate. Completely static after registration has completed, and
   will never change.
  - returns: The name
- `java.lang.Class<T> type()`
  Get the delegate type. It will be dependent on the registry this delegate is sourced from.
  - returns: The type of delegate

## ObjectHolderRegistry

*enum* `net.minecraftforge.registries.ObjectHolderRegistry`

Internal registry for tracking GameRegistry.ObjectHolder references

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ObjectHolderRegistry>

### Fields
- `public static final ObjectHolderRegistry INSTANCE`

### Methods
- `public static ObjectHolderRegistry[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ObjectHolderRegistry c : ObjectHolderRegistry.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ObjectHolderRegistry valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public void findObjectHolders(ASMDataTable table)`
- `public void applyObjectHolders()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## RegistryBuilder>

*class* `net.minecraftforge.registries.RegistryBuilder>`

### Methods
- `public RegistryBuilder<T> setName(ResourceLocation name)`
- `public RegistryBuilder<T> setType(java.lang.Class<T> type)`
- `public RegistryBuilder<T> setIDRange(int min,  int max)`
- `public RegistryBuilder<T> setMaxID(int max)`
- `public RegistryBuilder<T> setDefaultKey(ResourceLocation key)`
- `public RegistryBuilder<T> addCallback(java.lang.Object inst)`
- `public RegistryBuilder<T> add(IForgeRegistry.AddCallback<T> add)`
- `public RegistryBuilder<T> add(IForgeRegistry.ClearCallback<T> clear)`
- `public RegistryBuilder<T> add(IForgeRegistry.CreateCallback<T> create)`
- `public RegistryBuilder<T> add(IForgeRegistry.ValidateCallback<T> validate)`
- `public RegistryBuilder<T> set(IForgeRegistry.DummyFactory<T> factory)`
- `public RegistryBuilder<T> set(IForgeRegistry.MissingFactory<T> missing)`
- `public RegistryBuilder<T> disableSaving()`
- `public RegistryBuilder<T> disableOverrides()`
- `public RegistryBuilder<T> allowModification()`
- `public IForgeRegistry<T> create()`

## RegistryManager

*class* `net.minecraftforge.registries.RegistryManager`

### Fields
- `public static final RegistryManager ACTIVE`
- `public static final RegistryManager VANILLA`
- `public static final RegistryManager FROZEN`

### Methods
- `public java.lang.String getName()`
- `public <V extends IForgeRegistryEntry<V>> java.lang.Class<V> getSuperType(ResourceLocation key)`
- `public <V extends IForgeRegistryEntry<V>> ForgeRegistry<V> getRegistry(ResourceLocation key)`
- `public <V extends IForgeRegistryEntry<V>> IForgeRegistry<V> getRegistry(java.lang.Class<V> cls)`
- `public <V extends IForgeRegistryEntry<V>> ResourceLocation getName(IForgeRegistry<V> reg)`
- `public <V extends IForgeRegistryEntry<V>> ForgeRegistry<V> getRegistry(ResourceLocation key,  RegistryManager other)`
- `public java.util.Map<ResourceLocation,ForgeRegistry.Snapshot> takeSnapshot(boolean savingToDisc)`
- `public void clean()`
