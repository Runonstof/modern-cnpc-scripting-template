# net.minecraftforge.common.util

- [BlockSnapshot](#blocksnapshot)
- [BrainBuilder](#brainbuilder)
- [CenterChunkPosComparator](#centerchunkposcomparator)
- [Class JsonUtils.ImmutableListTypeAdapter](#class-jsonutils.immutablelisttypeadapter)
- [Class JsonUtils.ImmutableMapTypeAdapter](#class-jsonutils.immutablemaptypeadapter)
- [Class TextTable.Alignment](#class-texttable.alignment)
- [Class TransformationHelper.TransformOrigin](#class-transformationhelper.transformorigin)
- [ConcatenatedListView](#concatenatedlistview)
- [DummySavedData](#dummysaveddata)
- [ForgeSoundType](#forgesoundtype)
- [HexDumper](#hexdumper)
- [HexDumper.Instance](#hexdumper.instance)
- [INBTBuilder](#inbtbuilder)
- [INBTBuilder.Builder](#inbtbuilder.builder)
- [INBTSerializable](#inbtserializable)
- [ITeleporter](#iteleporter)
- [ItemStackMap](#itemstackmap)
- [JsonUtils](#jsonutils)
- [Lazy](#lazy)
- [Lazy.Concurrent](#lazy.concurrent)
- [Lazy.Fast](#lazy.fast)
- [LazyOptional](#lazyoptional)
- [LevelCapabilityData](#levelcapabilitydata)
- [LogicalSidedProvider](#logicalsidedprovider)
- [LogMessageAdapter](#logmessageadapter)
- [MavenVersionStringHelper](#mavenversionstringhelper)
- [MutableHashedLinkedMap](#mutablehashedlinkedmap)
- [MutableHashedLinkedMap.BasicStrategy](#mutablehashedlinkedmap.basicstrategy)
- [MutableHashedLinkedMap.Entry](#mutablehashedlinkedmap.entry)
- [MutableHashedLinkedMap.IdentityStrategy](#mutablehashedlinkedmap.identitystrategy)
- [MutableHashedLinkedMap.MergeFunction](#mutablehashedlinkedmap.mergefunction)
- [NonNullConsumer](#nonnullconsumer)
- [NonNullFunction](#nonnullfunction)
- [NonNullLazy](#nonnulllazy)
- [NonNullPredicate](#nonnullpredicate)
- [NonNullSupplier](#nonnullsupplier)
- [PacketLogger](#packetlogger)
- [RecipeMatcher](#recipematcher)
- [Size2i](#size2i)
- [SortedProperties](#sortedproperties)
- [TablePrinter](#tableprinter)
- [TablePrinter.Header](#tableprinter.header)
- [TextTable](#texttable)
- [TextTable.Column](#texttable.column)
- [TextTable.Row](#texttable.row)
- [TransformationHelper](#transformationhelper)
- [TransformationHelper.Deserializer](#transformationhelper.deserializer)
- [TriPredicate](#tripredicate)
## BlockSnapshot

*class* `net.minecraftforge.common.util.BlockSnapshot`

Represents a captured snapshot of a block which will not change
 automatically.

 Unlike Block, which only one object can exist per coordinate, BlockSnapshot
 can exist multiple times for any given Block.

### Fields
- `private static final boolean DEBUG`
- `private final ResourceKey<Level> dim`
- `private final BlockPos pos`
- `private final int flags`
- `private final BlockState block`
- `@Nullable private final @Nullable CompoundTag nbt`
- `@Nullable private @Nullable WeakReference<LevelAccessor> level`
- `private String toString`

### Methods
- `public static BlockSnapshot create(ResourceKey<Level> dim,  LevelAccessor world,  BlockPos pos)`
- `public static BlockSnapshot create(ResourceKey<Level> dim,  LevelAccessor world,  BlockPos pos,  int flag)`
- `@Nullable private static @Nullable CompoundTag getBlockEntityTag(@Nullable  @Nullable BlockEntity te)`
- `public BlockState getCurrentBlock()`
- `@Nullable public @Nullable LevelAccessor getLevel()`
- `public BlockState getReplacedBlock()`
- `@Nullable public @Nullable BlockEntity getBlockEntity()`
- `public boolean restore()`
- `public boolean restore(boolean force)`
- `public boolean restore(boolean force,  boolean notifyNeighbors)`
- `public boolean restoreToLocation(LevelAccessor world,  BlockPos pos,  boolean force,  boolean notifyNeighbors)`
- `public boolean equals(Object obj)`
- `public int hashCode()`
- `public String toString()`
- `public BlockPos getPos()`
- `public int getFlag()`
- `@Nullable public @Nullable CompoundTag getTag()`

## BrainBuilder

*class* `net.minecraftforge.common.util.BrainBuilder`

This object is used to encapsulate state found inside a Brain instance,
 to make it easily accessible for modders to manipulate during LivingMakeBrainEvent.

 Provided are a variety of getter/setter methods to access and manipulate the encapsulated state.

 Methods marked with "INTENDED FOR INTERNAL USE" are only meant to be used inside:

 ForgeHooks.onLivingMakeBrain(LivingEntity, Brain, Dynamic)
 Brain.createBuilder()
 Brain.copyFromBuilder(BrainBuilder)

 Of course, nothing egregious will happen should a modder choose to use them for their own purposes.

### Fields
- `private final Collection<MemoryModuleType<?>> memoryTypes`
- `private final Collection<SensorType<? extends Sensor<? super E extends LivingEntity>>> sensorTypes`
- `private final Map<Integer,Map<Activity,Set<BehaviorControl<? super E extends LivingEntity>>>> availableBehaviorsByPriority`
- `private Schedule schedule`
- `private final Map<Activity,Set<com.mojang.datafixers.util.Pair<MemoryModuleType<?>,MemoryStatus>>> activityRequirements`
- `private final Map<Activity,Set<MemoryModuleType<?>>> activityMemoriesToEraseWhenStopped`
- `private final Set<Activity> coreActivities`
- `private final Set<Activity> activeActivites`
- `private Activity defaultActivity`

### Methods
- `public Brain.Provider<E> provider()`
- `public Collection<MemoryModuleType<?>> getMemoryTypes()`
- `public Collection<SensorType<? extends Sensor<? super E>>> getSensorTypes()`
- `public Map<Integer,Map<Activity,Set<BehaviorControl<? super E>>>> getAvailableBehaviorsByPriority()`
- `public Schedule getSchedule()`
- `public void setSchedule(Schedule schedule)`
- `public Map<Activity,Set<com.mojang.datafixers.util.Pair<MemoryModuleType<?>,MemoryStatus>>> getActivityRequirements()`
- `public Map<Activity,Set<MemoryModuleType<?>>> getActivityMemoriesToEraseWhenStopped()`
- `public Set<Activity> getCoreActivities()`
- `public Activity getDefaultActivity()`
- `public void setDefaultActivity(Activity defaultActivity)`
- `public Set<Activity> getActiveActivites()`
- `public void setActiveActivites(Set<Activity> value)`
- `public void addBehaviorToActivityByPriority(Integer priority,  Activity activity,  BehaviorControl<? super E> behaviorControl)`
  You may use this as a helper method for adding a behavior to an Activity by priority to an entity's brain.
- `public void addRequirementsToActivity(Activity activity,  Collection<com.mojang.datafixers.util.Pair<MemoryModuleType<?>,MemoryStatus>> requirements)`
  You may use this as a helper method for adding memory requirements for an Activity to an entity's brain.
- `public void addMemoriesToEraseWhenActivityStopped(Activity activity,  Collection<MemoryModuleType<?>> memories)`
  You may use this as a helper method for adding a collection of memories to erase when an Activity is stopped to entity's brain.
- `@Internal public void addAvailableBehaviorsByPriorityFrom(Map<Integer,Map<Activity,Set<BehaviorControl<? super E>>>> addFrom)`
- `@Internal public void addAvailableBehaviorsByPriorityTo(Map<Integer,Map<Activity,Set<BehaviorControl<? super E>>>> addTo)`
- `@Internal public void addActivityRequirementsFrom(Map<Activity,Set<com.mojang.datafixers.util.Pair<MemoryModuleType<?>,MemoryStatus>>> addFrom)`
- `@Internal public void addActivityRequirementsTo(Map<Activity,Set<com.mojang.datafixers.util.Pair<MemoryModuleType<?>,MemoryStatus>>> addTo)`
- `@Internal public void addActivityMemoriesToEraseWhenStoppedFrom(Map<Activity,Set<MemoryModuleType<?>>> addFrom)`
- `@Internal public void addActivityMemoriesToEraseWhenStoppedTo(Map<Activity,Set<MemoryModuleType<?>>> addTo)`
- `private static void addMemoriesToEraseWhenActivityStoppedInternal(Map<Activity,Set<MemoryModuleType<?>>> activityMemoriesToEraseWhenStopped,  Activity activity,  Collection<MemoryModuleType<?>> memories)`
- `private static void addRequirementsToActivityInternal(Map<Activity,Set<com.mojang.datafixers.util.Pair<MemoryModuleType<?>,MemoryStatus>>> activityRequirements,  Activity activity,  Collection<com.mojang.datafixers.util.Pair<MemoryModuleType<?>,MemoryStatus>> requirements)`
- `@Internal public Brain<E> makeBrain(com.mojang.serialization.Dynamic<?> dynamic)`

## CenterChunkPosComparator

*class* `net.minecraftforge.common.util.CenterChunkPosComparator`

### Fields
- `private int x`
- `private int z`

### Methods
- `public int compare(ChunkPos a,  ChunkPos b)`

### Inherited methods
- from `java.util.Comparator`: `equals`, `reversed`, `thenComparing`, `thenComparing`, `thenComparing`, `thenComparingDouble`, `thenComparingInt`, `thenComparingLong`

## Class JsonUtils.ImmutableListTypeAdapter

*enum* `net.minecraftforge.common.util.Class JsonUtils.ImmutableListTypeAdapter`

Enclosing class: JsonUtils

### Methods
- `public static JsonUtils.ImmutableListTypeAdapter[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static JsonUtils.ImmutableListTypeAdapter valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public com.google.common.collect.ImmutableList<?> deserialize(com.google.gson.JsonElement json,  Type type,  com.google.gson.JsonDeserializationContext context)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException
- `public com.google.gson.JsonElement serialize(com.google.common.collect.ImmutableList<?> src,  Type type,  com.google.gson.JsonSerializationContext context)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class JsonUtils.ImmutableMapTypeAdapter

*enum* `net.minecraftforge.common.util.Class JsonUtils.ImmutableMapTypeAdapter`

Enclosing class: JsonUtils

### Methods
- `public static JsonUtils.ImmutableMapTypeAdapter[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static JsonUtils.ImmutableMapTypeAdapter valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public com.google.common.collect.ImmutableMap<String,?> deserialize(com.google.gson.JsonElement json,  Type type,  com.google.gson.JsonDeserializationContext context)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException
- `public com.google.gson.JsonElement serialize(com.google.common.collect.ImmutableMap<String,?> src,  Type type,  com.google.gson.JsonSerializationContext context)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class TextTable.Alignment

*enum* `net.minecraftforge.common.util.Class TextTable.Alignment`

Enclosing class: TextTable

### Methods
- `public static TextTable.Alignment[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static TextTable.Alignment valueOf(String name)`
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

## Class TransformationHelper.TransformOrigin

*enum* `net.minecraftforge.common.util.Class TransformationHelper.TransformOrigin`

Enclosing class: TransformationHelper

### Fields
- `private final org.joml.Vector3f vec`
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static TransformationHelper.TransformOrigin[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static TransformationHelper.TransformOrigin valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public org.joml.Vector3f getVector()`
- `@NotNull public @NotNull String getSerializedName()`
- `@Nullable public static @Nullable TransformationHelper.TransformOrigin fromString(String originName)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ConcatenatedListView

*class* `net.minecraftforge.common.util.ConcatenatedListView`

A list that concatenates multiple other lists for efficient iteration.
 You may use this in place of creating a new list and calling List.addAll(Collection)
 for each of your collections.
 This list does not support modification operations, but the underlying lists may be mutated safely externally.

### Fields
- `private final List<? extends List<? extends T>> lists`

### Methods
- `@SafeVarargs public static <T> ConcatenatedListView<T> of(List<T>... lists)`
- `public static <T> List<T> of(List<? extends List<? extends T>> members)`
- `public int size()`
- `public boolean isEmpty()`
- `public boolean contains(Object o)`
- `public T get(int index)`
- `public int indexOf(Object o)`
- `public int lastIndexOf(Object o)`
- `@NotNull public @NotNull Iterator<T> iterator()`
- `public Spliterator<T> spliterator()`
- `private <C extends Collection<T>> C concatenate(Supplier<C> collectionFactory)`
- `@NotNull public @NotNull Object[] toArray()`
- `@NotNull public <T1> @NotNull T1[] toArray(@NotNull  @NotNull T1[] a)`
- `public boolean containsAll(@NotNull  @NotNull Collection<?> c)`
- `public boolean add(T t)`
- `public void add(int index,  T element)`
- `public T set(int index,  T element)`
- `public boolean addAll(@NotNull  @NotNull Collection<? extends T> c)`
- `public boolean addAll(int index,  @NotNull  @NotNull Collection<? extends T> c)`
- `public boolean remove(Object o)`
- `public T remove(int index)`
- `public boolean removeAll(@NotNull  @NotNull Collection<?> c)`
- `public boolean retainAll(@NotNull  @NotNull Collection<?> c)`
- `public void clear()`
- `@NotNull public @NotNull ListIterator<T> listIterator()`
- `@NotNull public @NotNull ListIterator<T> listIterator(int index)`
- `@NotNull public @NotNull List<T> subList(int fromIndex,  int toIndex)`

### Inherited methods
- from `java.util.Collection`: `parallelStream`, `removeIf`, `stream`, `toArray`
- from `java.lang.Iterable`: `forEach`
- from `java.util.List`: `equals`, `hashCode`, `replaceAll`, `sort`

## DummySavedData

*class* `net.minecraftforge.common.util.DummySavedData`

### Fields
- `public static final DummySavedData DUMMY`

### Methods
- `public CompoundTag save(CompoundTag compound)`

### Inherited methods
- from `net.minecraft.world.level.saveddata.SavedData`: `isDirty`, `save`, `setDirty`, `setDirty`

## ForgeSoundType

*class* `net.minecraftforge.common.util.ForgeSoundType`

A subclass of SoundType that uses Supplier<SoundEvent>s.

 This class allows mod developers to safely create custom SoundTypes for use in their e.g. Block.

 The problem with using SoundType directly is it requires SoundEvent instances directly, because
 SoundTypes are required to be present during Block creation and registration. However,
 SoundEvent must also be registered.

 A possible solution of initializing SoundEvents first would require static initialization of the
 SoundEvent instances and later registration, which goes against the contract of the registry system and
 prevents the use of DeferredRegister and RegistryObjects.

 This class offers an alternative and preferable solution, by allowing mods to create SoundTypes using
 Suppliers of SoundEvents instead, which do not require static initialization of SoundEvents
 and allow the direct use of RegistryObjects.

### Fields
- `private final Supplier<SoundEvent> breakSound`
- `private final Supplier<SoundEvent> stepSound`
- `private final Supplier<SoundEvent> placeSound`
- `private final Supplier<SoundEvent> hitSound`
- `private final Supplier<SoundEvent> fallSound`

### Inherited fields
- from `net.minecraft.world.level.block.SoundType`: `AMETHYST`, `AMETHYST_CLUSTER`, `ANCIENT_DEBRIS`, `ANVIL`, `AZALEA`, `AZALEA_LEAVES`, `BAMBOO`, `BAMBOO_SAPLING`, `BAMBOO_WOOD`, `BAMBOO_WOOD_HANGING_SIGN`, `BASALT`, `BIG_DRIPLEAF`, `BONE_BLOCK`, `CALCITE`, `CANDLE`, `CAVE_VINES`, `CHAIN`, `CHERRY_LEAVES`, `CHERRY_SAPLING`, `CHERRY_WOOD`, `CHERRY_WOOD_HANGING_SIGN`, `CHISELED_BOOKSHELF`, `COPPER`, `CORAL_BLOCK`, `CROP`, `DECORATED_POT`, `DECORATED_POT_CRACKED`, `DEEPSLATE`, `DEEPSLATE_BRICKS`, `DEEPSLATE_TILES`, `DRIPSTONE_BLOCK`, `EMPTY`, `FLOWERING_AZALEA`, `FROGLIGHT`, `FROGSPAWN`, `FUNGUS`, `GILDED_BLACKSTONE`, `GLASS`, `GLOW_LICHEN`, `GRASS`, `GRAVEL`, `HANGING_ROOTS`, `HANGING_SIGN`, `HARD_CROP`, `HONEY_BLOCK`, `LADDER`, `LANTERN`, `LARGE_AMETHYST_BUD`, `LILY_PAD`, `LODESTONE`, `MANGROVE_ROOTS`, `MEDIUM_AMETHYST_BUD`, `METAL`, `MOSS`, `MOSS_CARPET`, `MUD`, `MUD_BRICKS`, `MUDDY_MANGROVE_ROOTS`, `NETHER_BRICKS`, `NETHER_GOLD_ORE`, `NETHER_ORE`, `NETHER_SPROUTS`, `NETHER_WART`, `NETHER_WOOD`, `NETHER_WOOD_HANGING_SIGN`, `NETHERITE_BLOCK`, `NETHERRACK`, `NYLIUM`, `PACKED_MUD`, `PINK_PETALS`, `pitch`, `POINTED_DRIPSTONE`, `POLISHED_DEEPSLATE`, `POWDER_SNOW`, `ROOTED_DIRT`, `ROOTS`, `SAND`, `SCAFFOLDING`, `SCULK`, `SCULK_CATALYST`, `SCULK_SENSOR`, `SCULK_SHRIEKER`, `SCULK_VEIN`, `SHROOMLIGHT`, `SLIME_BLOCK`, `SMALL_AMETHYST_BUD`, `SMALL_DRIPLEAF`, `SNOW`, `SOUL_SAND`, `SOUL_SOIL`, `SPONGE`, `SPORE_BLOSSOM`, `STEM`, `STONE`, `SUSPICIOUS_GRAVEL`, `SUSPICIOUS_SAND`, `SWEET_BERRY_BUSH`, `TUFF`, `TWISTING_VINES`, `VINE`, `volume`, `WART_BLOCK`, `WEEPING_VINES`, `WET_GRASS`, `WET_SPONGE`, `WOOD`, `WOOL`

### Methods
- `@NotNull public @NotNull SoundEvent getBreakSound()`
- `@NotNull public @NotNull SoundEvent getStepSound()`
- `@NotNull public @NotNull SoundEvent getPlaceSound()`
- `@NotNull public @NotNull SoundEvent getHitSound()`
- `@NotNull public @NotNull SoundEvent getFallSound()`

### Inherited methods
- from `net.minecraft.world.level.block.SoundType`: `getPitch`, `getVolume`

## HexDumper

*class* `net.minecraftforge.common.util.HexDumper`

Utility class for creating a nice human readable dump of binary data.

 It might look something like this:

 00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F ................
 69 68 67 66 65 64 63 62 61 61 6A 6B 6C 6D 6E 00 ihgfedcbaajklmn.
 41 00 A.
 Length: 34

### Methods
- `public static String dump(io.netty.buffer.ByteBuf data)`
- `public static String dump(byte[] data)`
- `public static String dump(byte[] data,  int marker)`

## HexDumper.Instance

*class* `net.minecraftforge.common.util.HexDumper.Instance`

Enclosing class: HexDumper

### Fields
- `private static final String HEX` (= "0123456789ABCDEF")
- `private final int marked`
- `private final StringBuilder buf`
- `private char[] ascii`
- `private int index`

### Methods
- `public void add(byte data)`
- `public String finish()`

## INBTBuilder

*interface* `net.minecraftforge.common.util.INBTBuilder`

### Methods
- `default INBTBuilder.Builder nbt()`

## INBTBuilder.Builder

*class* `net.minecraftforge.common.util.INBTBuilder.Builder`

Enclosing interface: INBTBuilder

### Fields
- `private final CompoundTag tag`

### Methods
- `public CompoundTag build()`
- `public INBTBuilder.Builder tag(String key,  Tag value)`
- `public INBTBuilder.Builder putByte(String key,  byte value)`
- `public INBTBuilder.Builder putShort(String key,  short value)`
- `public INBTBuilder.Builder putInt(String key,  int value)`
- `public INBTBuilder.Builder putLong(String key,  long value)`
- `public INBTBuilder.Builder putFloat(String key,  float value)`
- `public INBTBuilder.Builder putDouble(String key,  double value)`
- `public INBTBuilder.Builder putByteArray(String key,  byte... value)`
- `public INBTBuilder.Builder putByteArray(String key,  List<Byte> value)`
- `public INBTBuilder.Builder putIntArray(String key,  int... value)`
- `public INBTBuilder.Builder putIntArray(String key,  List<Integer> value)`
- `public INBTBuilder.Builder putLongArray(String key,  long... value)`
- `public INBTBuilder.Builder putLongArray(String key,  List<Long> value)`
- `public INBTBuilder.Builder put(String key,  boolean value)`
- `public INBTBuilder.Builder put(String key,  String value)`
- `public INBTBuilder.Builder put(String key,  UUID value)`

### Inherited methods
- from `net.minecraftforge.common.util.INBTBuilder`: `nbt`

## INBTSerializable

*interface* `net.minecraftforge.common.util.INBTSerializable`

An interface designed to unify various things in the Minecraft
 code base that can be serialized to and from a NBT tag.

### Methods
- `T serializeNBT()`
- `void deserializeNBT(T nbt)`

## ITeleporter

*interface* `net.minecraftforge.common.util.ITeleporter`

Interface for handling the placement of entities during dimension change.

 An implementation of this interface can be used to place the entity
 in a safe location, or generate a return portal, for instance.

 See the PortalForcer class, which has
 been patched to implement this interface, for a vanilla example.

### Methods
- `default Entity placeEntity(Entity entity,  ServerLevel currentWorld,  ServerLevel destWorld,  float yaw,  Function<Boolean,Entity> repositionEntity)`
  Called to handle placing the entity in the new world.
  
   The initial position of the entity will be its
   position in the origin world, multiplied horizontally
   by the computed cross-dimensional movement factor.
  
   Note that the supplied entity has not yet been spawned
   in the destination world at the time.
  - param: entity - the entity to be placed
  - param: currentWorld - the entity's origin
  - param: destWorld - the entity's destination
  - param: yaw - the suggested yaw value to apply
  - param: repositionEntity - a function to reposition the entity, which returns the new entity in the new dimension. This is the vanilla implementation of the dimension travel logic. If the supplied boolean is true, it is attempted to spawn a new portal.
  - returns: the entity in the new World. Vanilla creates for most Entitys a new instance and copy the data. But you are not allowed to create a new instance for Players! Move the player and update its state, see ServerPlayer.changeDimension(ServerLevel, ITeleporter)
- `@Nullable default @Nullable PortalInfo getPortalInfo(Entity entity,  ServerLevel destWorld,  Function<ServerLevel,PortalInfo> defaultPortalInfo)`
  Gets the PortalInfo. defaultPortalInfo references the
   vanilla code and should not be used for your purposes.
   Override this method to handle your own logic.
  
   Return null to prevent teleporting.
  - param: entity - The entity teleporting before the teleport
  - param: destWorld - The world the entity is teleporting to
  - param: defaultPortalInfo - A reference to the vanilla method for getting portal info. You should implement your own logic instead of using this
  - returns: The location, rotation, and motion of the entity in the destWorld after the teleport
- `default boolean isVanilla()`
  Is this teleporter the vanilla instance.
- `default boolean playTeleportSound(ServerPlayer player,  ServerLevel sourceWorld,  ServerLevel destWorld)`
  Called when vanilla wants to play the portal sound after teleporting. Return true to play the vanilla sound.
  - param: player - the player
  - param: sourceWorld - the source world
  - param: destWorld - the target world
  - returns: true to play the vanilla sound

## ItemStackMap

*class* `net.minecraftforge.common.util.ItemStackMap`

### Methods
- `public static <V> Map<ItemStack,V> createTypeAndTagLinkedMap()`
- `public static <V> Map<ItemStack,V> createTypeAndTagMap()`

## JsonUtils

*class* `net.minecraftforge.common.util.JsonUtils`

### Methods
- `private static <E> com.google.common.reflect.TypeToken<List<E>> listOf(Type arg)`
- `@Nullable public static @Nullable CompoundTag readNBT(com.google.gson.JsonObject json,  String key)`
- `private static <E> com.google.common.reflect.TypeToken<Map<String,E>> mapOf(Type arg)`

## Lazy

*interface* `net.minecraftforge.common.util.Lazy`

Proxy object for a value that is calculated on first access

All Superinterfaces: Supplier<T>

### Methods
- `static <T> Lazy<T> of(@NotNull  @NotNull Supplier<T> supplier)`
  Constructs a lazy-initialized object
  - param: supplier - The supplier for the value, to be called the first time the value is needed.
- `static <T> Lazy<T> concurrentOf(@NotNull  @NotNull Supplier<T> supplier)`
  Constructs a thread-safe lazy-initialized object
  - param: supplier - The supplier for the value, to be called the first time the value is needed.

### Inherited methods
- from `java.util.function.Supplier`: `get`

## Lazy.Concurrent

*class* `net.minecraftforge.common.util.Lazy.Concurrent`

Thread-safe implementation.

Enclosing interface: Lazy<T>

### Fields
- `private volatile Object lock`
- `private volatile Supplier<T> supplier`
- `private volatile T instance`

### Methods
- `@Nullable public final T get()`

## Lazy.Fast

*class* `net.minecraftforge.common.util.Lazy.Fast`

Non-thread-safe implementation.

Enclosing interface: Lazy<T>

### Fields
- `private Supplier<T> supplier`
- `private T instance`

### Methods
- `@Nullable public final T get()`

## LazyOptional

*class* `net.minecraftforge.common.util.LazyOptional`

This object encapsulates a lazy value, with typical transformation operations
 (map/ifPresent) available, much like Optional.

 It also provides the ability to listen for invalidation, via
 addListener(NonNullConsumer). This method is invoked when the provider of
 this object calls invalidate().

 To create an instance of this class, use of(NonNullSupplier). Note
 that this accepts a NonNullSupplier, so the result of the supplier
 must never be null.

 The empty instance can be retrieved with empty().

### Fields
- `private final NonNullSupplier<T> supplier`
- `private final Object lock`
- `private org.apache.commons.lang3.mutable.Mutable<T> resolved`
- `private Set<NonNullConsumer<LazyOptional<T>>> listeners`
- `private boolean isValid`
- `@NotNull private static final @NotNull LazyOptional<Void> EMPTY`
- `private static final org.apache.logging.log4j.Logger LOGGER`

### Methods
- `public static <T> LazyOptional<T> of(@Nullable  @Nullable NonNullSupplier<T> instanceSupplier)`
  Construct a new LazyOptional that wraps the given
   NonNullSupplier.
  - param: instanceSupplier - The NonNullSupplier to wrap. Cannot return
 null, but can be null itself. If null, this method
 returns empty().
- `public static <T> LazyOptional<T> empty()`
  - returns: The singleton empty instance
- `public <X> LazyOptional<X> cast()`
  This method hides an unchecked cast to the inferred type. Only use this if
   you are sure the type should match. For capabilities, generally
   Capability.orEmpty(Capability, LazyOptional) should be used.
  - returns: This LazyOptional, cast to the inferred generic type
- `@Nullable private T getValue()`
- `private T getValueUnsafe()`
- `public boolean isPresent()`
  Check if this LazyOptional is non-empty.
  - returns: true if this LazyOptional is non-empty, i.e. holds a
 non-null supplier
- `public void ifPresent(NonNullConsumer<? super T> consumer)`
  If non-empty, invoke the specified NonNullConsumer with the object,
   otherwise do nothing.
  - param: consumer - The NonNullConsumer to run if this optional is non-empty.
  - throws: NullPointerException - if consumer is null and this LazyOptional is non-empty
- `public <U> LazyOptional<U> lazyMap(NonNullFunction<? super T,? extends U> mapper)`
  If a this LazyOptional is non-empty, return a new
   LazyOptional encapsulating the mapping function. Otherwise, returns
   empty().
  
   The supplier inside this object is NOT resolved.
  - param: mapper - A mapping function to apply to the mod object, if present
  - returns: A LazyOptional describing the result of applying a mapping
 function to the value of this LazyOptional, if a value is
 present, otherwise an empty LazyOptional
  - throws: NullPointerException - if mapper is null.
- `public <U> Optional<U> map(NonNullFunction<? super T,? extends U> mapper)`
  If a this LazyOptional is non-empty, return a new
   Optional encapsulating the mapped value. Otherwise, returns
   Optional.empty().
  - param: mapper - A mapping function to apply to the mod object, if present
  - returns: An Optional describing the result of applying a mapping
 function to the value of this Optional, if a value is
 present, otherwise an empty Optional
  - throws: NullPointerException - if mapper is null.
- `public Optional<T> filter(NonNullPredicate<? super T> predicate)`
  Resolve the contained supplier if non-empty, and filter it by the given
   NonNullPredicate, returning empty if false.
  
   It is important to note that this method is not lazy, as
   it must resolve the value of the supplier to validate it with the
   predicate.
  - param: predicate - A NonNullPredicate to apply to the result of the
 contained supplier, if non-empty
  - returns: An Optional containing the result of the contained
 supplier, if and only if the passed NonNullPredicate returns
 true, otherwise an empty Optional
  - throws: NullPointerException - If predicate is null and this
 Optional is non-empty
- `public Optional<T> resolve()`
  Resolves the value of this LazyOptional, turning it into a standard non-lazy Optional<T>
  - returns: The resolved optional.
- `public T orElse(T other)`
  Resolve the contained supplier if non-empty and return the result, otherwise return
   other.
  - param: other - the value to be returned if this LazyOptional is empty
  - returns: the result of the supplier, if non-empty, otherwise other
- `public T orElseGet(NonNullSupplier<? extends T> other)`
  Resolve the contained supplier if non-empty and return the result, otherwise return the
   result of other.
  - param: other - A NonNullSupplier whose result is returned if this
 LazyOptional is empty
  - returns: The result of the supplier, if non-empty, otherwise the result of
 other.get()
  - throws: NullPointerException - If other is null and this
 LazyOptional is non-empty
- `public <X extends Throwable> T orElseThrow(NonNullSupplier<? extends X> exceptionSupplier)  throws X`
  Resolve the contained supplier if non-empty and return the result, otherwise throw the
   exception created by the provided NonNullSupplier.
  - param: exceptionSupplier - The NonNullSupplier which will return the
 exception to be thrown
  - returns: The result of the supplier
  - throws: X - If this LazyOptional is empty
  - throws: NullPointerException - If exceptionSupplier is null and this
 LazyOptional is empty
- `public void addListener(NonNullConsumer<LazyOptional<T>> listener)`
  Register a listener that will be called when this LazyOptional becomes invalid (via invalidate()).
  
   If this LazyOptional is empty, the listener will be called immediately.
- `public void removeListener(NonNullConsumer<LazyOptional<T>> listener)`
  Unregisters a listener from the list to be notified when this LazyOptional becomes invalid (via invalidate()).
  
   This allows modder who know they will not need to be notified, to remove the hard reference that this holds to their listener.
- `public void invalidate()`
  Invalidate this LazyOptional, making it unavailable for further use,
   and notifying any listeners that this
   has become invalid and they should update.
  
   This would typically be used with capability objects. For example, a TE would
   call this, if they are covered with a microblock panel, thus cutting off pipe
   connectivity to this side.
  
   Also should be called for all when a TE is invalidated (for example, when
   the TE is removed or unloaded), or a world/chunk unloads, or a entity dies,
   etc... This allows modders to keep a cache of capability objects instead of
   re-checking them every tick.

## LevelCapabilityData

*class* `net.minecraftforge.common.util.LevelCapabilityData`

### Fields
- `public static final String ID` (= "capabilities")
- `private INBTSerializable<CompoundTag> serializable`
- `private CompoundTag capNBT`

### Methods
- `public void read(CompoundTag nbt)`
- `public CompoundTag save(CompoundTag nbt)`
- `public boolean isDirty()`
- `public void setCapabilities(INBTSerializable<CompoundTag> capabilities)`
- `public static LevelCapabilityData compute(DimensionDataStorage data,  @Nullable  @Nullable INBTSerializable<CompoundTag> caps)`

### Inherited methods
- from `net.minecraft.world.level.saveddata.SavedData`: `save`, `setDirty`, `setDirty`

## LogicalSidedProvider

*class* `net.minecraftforge.common.util.LogicalSidedProvider`

### Fields
- `public static final LogicalSidedProvider<BlockableEventLoop<? super TickTask>> WORKQUEUE`
- `public static final LogicalSidedProvider<Optional<Level>> CLIENTWORLD`
- `private static Supplier<Minecraft> client`
- `private static Supplier<MinecraftServer> server`
- `private final Function<Supplier<Minecraft>,T> clientSide`
- `private final Function<Supplier<MinecraftServer>,T> serverSide`

### Methods
- `public static void setClient(Supplier<Minecraft> client)`
- `public static void setServer(Supplier<MinecraftServer> server)`
- `public T get(LogicalSide side)`

## LogMessageAdapter

*record* `net.minecraftforge.common.util.LogMessageAdapter`

### Fields
- `private final Consumer<StringBuilder> builder`
  The field for the builder record component.
- `private static final Object[] EMPTY`

### Methods
- `public String getFormattedMessage()`
- `public String getFormat()`
- `public Object[] getParameters()`
- `public Throwable getThrowable()`
- `public void formatTo(StringBuilder buffer)`
- `public static org.apache.logging.log4j.message.Message adapt(Consumer<StringBuilder> toConsume)`
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
- `public Consumer<StringBuilder> builder()`
  Returns the value of the builder record component.
  - returns: the value of the builder record component

## MavenVersionStringHelper

*class* `net.minecraftforge.common.util.MavenVersionStringHelper`

### Methods
- `public static String artifactVersionToString(org.apache.maven.artifact.versioning.ArtifactVersion artifactVersion)`
- `public static String versionRangeToString(org.apache.maven.artifact.versioning.VersionRange range)`
- `public static String restrictionToString(org.apache.maven.artifact.versioning.Restriction restriction)`
- `public static void parseVersionRange(StringBuffer stringBuffer,  Object range)`
- `public static void parseFeatureBoundValue(StringBuffer stringBuffer,  Object range)`

## MutableHashedLinkedMap

*class* `net.minecraftforge.common.util.MutableHashedLinkedMap`

A mutable linked map with a hashing strategy and a merge function.

### Fields
- `public static final it.unimi.dsi.fastutil.Hash.Strategy<? super Object> BASIC`
  A strategy that uses Objects.hashCode(Object) and Object.equals(Object).
- `public static final it.unimi.dsi.fastutil.Hash.Strategy<? super Object> IDENTITY`
  A strategy that uses System.identityHashCode(Object) and a == b comparisons.
- `private final it.unimi.dsi.fastutil.Hash.Strategy<? super K> strategy`
- `private final Map<K,MutableHashedLinkedMap<K,V>.Entry> entries`
- `private final MutableHashedLinkedMap.MergeFunction<K,V> merge`
- `private MutableHashedLinkedMap<K,V>.Entry head`
- `private MutableHashedLinkedMap<K,V>.Entry last`
- `private transient int changes`

### Methods
- `@Nullable public V put(K key,  V value)`
  Inserts the mapping with the specified key and value pair.
  
   If there is a mapping already associated with this key, then the previous value and the specified (new) value
   are merged according to this collection's merge function, and the position of the entry is not modified. If there
   is no such mapping, then the key-value mapping is inserted at the end of this collection.
  - param: key - key to be inserted
  - param: value - (new) value to be associated with the key
  - returns: the previous value associated with the specified key, or null if there was no mapping for the key
- `public boolean contains(K key)`
- `public boolean isEmpty()`
- `@Nullable public V remove(K key)`
- `@Nullable public V get(K key)`
- `public Iterator<Map.Entry<K,V>> iterator()`
- `@Nullable public V putFirst(K key,  V value)`
  Inserts the mapping with the specified key and value pair at the beginning of this map.
  
   If there is a mapping already associated with this key, then the previous value and the specified (new) value
   are first merged according to this map's merge function, then the entry is moved to the beginning of the map.
  - param: key - key to be inserted at the beginning
  - param: value - (new) value to be associated with the key
  - returns: the previous value associated with the specified key, or null if there was no mapping for the key
- `@Nullable public V putAfter(K after,  K key,  V value)`
  Inserts the mapping with this key and value pair immediately after the entry with the specified positioning key.
  
   If the specified positioning key is not present within this map, then this method behaves like
   put(Object, Object). If there is a mapping already associated with this key, then the previous value
   and the specified (new) value are first merged according to this map's merge function, then the entry is
   moved to directly after the entry with the specified positioning key.
  - param: after - the key to position this new entry afterwards
  - param: key - key to be inserted at the beginning
  - param: value - (new) value to be associated with the key
  - returns: the previous value associated with the specified key, or null if there was no mapping for the key
- `@Nullable public V putBefore(K before,  K key,  V value)`
  Inserts the mapping with this key and value pair immediately before the entry with the specified positioning key.
  
   If the specified positioning key is not present within this map, then this method behaves like
   put(Object, Object). If there is a mapping already associated with this key, then the previous value
   and the specified (new) value are first merged according to this map's merge function, then the entry is
   moved to directly before the entry with the specified positioning key.
  - param: before - the key to position this new entry afterwards
  - param: key - key to be inserted at the beginning
  - param: value - (new) value to be associated with the key
  - returns: the previous value associated with the specified key, or null if there was no mapping for the key
- `private void remove(MutableHashedLinkedMap<K,V>.Entry e)`

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `spliterator`

## MutableHashedLinkedMap.BasicStrategy

*class* `net.minecraftforge.common.util.MutableHashedLinkedMap.BasicStrategy`

Enclosing class: MutableHashedLinkedMap<K, V>

### Methods
- `public int hashCode(Object o)`
- `public boolean equals(Object a,  Object b)`

## MutableHashedLinkedMap.Entry

*class* `net.minecraftforge.common.util.MutableHashedLinkedMap.Entry`

Enclosing class: MutableHashedLinkedMap<K, V>

### Fields
- `private final K key`
- `private V value`
- `private MutableHashedLinkedMap<K,V>.Entry previous`
- `private MutableHashedLinkedMap<K,V>.Entry next`

### Methods
- `public K getKey()`
- `public V getValue()`
- `public V setValue(V value)`
- `public String toString()`
- `public boolean equals(Object o)`
- `public int hashCode()`

## MutableHashedLinkedMap.IdentityStrategy

*class* `net.minecraftforge.common.util.MutableHashedLinkedMap.IdentityStrategy`

Enclosing class: MutableHashedLinkedMap<K, V>

### Methods
- `public int hashCode(Object o)`
- `public boolean equals(Object a,  Object b)`

## MutableHashedLinkedMap.MergeFunction

*interface* `net.minecraftforge.common.util.MutableHashedLinkedMap.MergeFunction`

Enclosing class: MutableHashedLinkedMap<K, V>

### Methods
- `Value apply(Key key,  Value left,  Value right)`

## NonNullConsumer

*interface* `net.minecraftforge.common.util.NonNullConsumer`

Equivalent to Consumer, except with nonnull contract.

### Methods
- `void accept(@NotNull  T t)`

## NonNullFunction

*interface* `net.minecraftforge.common.util.NonNullFunction`

Equivalent to Function, except with nonnull contract.

### Methods
- `@NotNull R apply(@NotNull  T t)`

## NonNullLazy

*interface* `net.minecraftforge.common.util.NonNullLazy`

Proxy object for a value that is calculated on first access.
 Same as Lazy, but with a nonnull contract.

All Superinterfaces: NonNullSupplier<T>

### Methods
- `static <T> NonNullLazy<T> of(@NotNull  @NotNull NonNullSupplier<T> supplier)`
  Constructs a lazy-initialized object
  - param: supplier - The supplier for the value, to be called the first time the value is needed.
- `static <T> NonNullLazy<T> concurrentOf(@NotNull  @NotNull NonNullSupplier<T> supplier)`
  Constructs a thread-safe lazy-initialized object
  - param: supplier - The supplier for the value, to be called the first time the value is needed.

### Inherited methods
- from `net.minecraftforge.common.util.NonNullSupplier`: `get`

## NonNullPredicate

*interface* `net.minecraftforge.common.util.NonNullPredicate`

Equivalent to Predicate, except with nonnull contract.

### Methods
- `boolean test(@NotNull  T t)`

## NonNullSupplier

*interface* `net.minecraftforge.common.util.NonNullSupplier`

Equivalent to Supplier, except with nonnull contract.

### Methods
- `@NotNull T get()`

## PacketLogger

*class* `net.minecraftforge.common.util.PacketLogger`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final org.apache.logging.log4j.Marker MARKER`
- `private final Connection connection`
- `public boolean enabled`

### Methods
- `public void send(Packet<?> packet)`
- `public void recv(Packet<?> packet)`
- `private void common(PacketFlow side,  PacketFlow flow,  Packet<?> packet)`
- `private static String side(PacketFlow side)`
- `private static String dir(PacketFlow flow)`

## RecipeMatcher

*class* `net.minecraftforge.common.util.RecipeMatcher`

### Methods
- `public static <T> int[] findMatches(List<T> inputs,  List<? extends Predicate<T>> tests)`
  Attempts to match inputs to the specified tests. In the best way that all inputs are used by one test.
   Will return null in any of these cases:
   input/test lengths don't match. This is only for matching paired outputs.
   any input doesn't match a test
   any test doesn't match a input
   If we are unable to determine a proper pair
  - returns: An array mapping inputs to tests. ret[x] = y means input[x] = test[y]
- `private static boolean claim(int[] ret,  BitSet data,  int claimed,  int elements)`
- `private static boolean backtrack(BitSet data,  int[] ret,  int start,  int elements)`

## Size2i

*record* `net.minecraftforge.common.util.Size2i`

### Fields
- `private final int width`
  The field for the width record component.
- `private final int height`
  The field for the height record component.

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
- `public int width()`
  Returns the value of the width record component.
  - returns: the value of the width record component
- `public int height()`
  Returns the value of the height record component.
  - returns: the value of the height record component

## SortedProperties

*class* `net.minecraftforge.common.util.SortedProperties`

An Implementation of Properties that is sorted when iterating.
 Made because i got tired of seeing config files written in random orders.
 This is implemented very basically, and thus is not a speedy system.
 This is not recommended for used in high traffic areas, and is mainly intended for writing to disc.

### Fields
- `private static final long serialVersionUID` (= -8913480931455982442L)

### Inherited fields
- from `java.util.Properties`: `defaults`

### Methods
- `public Set<Map.Entry<Object,Object>> entrySet()`
- `public Set<Object> keySet()`
- `public Enumeration<Object> keys()`
- `public static void store(Properties props,  Writer stream,  String comment)  throws IOException`
  - throws: IOException

### Inherited methods
- from `java.util.Properties`: `clear`, `clone`, `compute`, `computeIfAbsent`, `computeIfPresent`, `contains`, `containsKey`, `containsValue`, `elements`, `equals`, `forEach`, `get`, `getOrDefault`, `getProperty`, `getProperty`, `hashCode`, `isEmpty`, `list`, `list`, `load`, `load`, `loadFromXML`, `merge`, `propertyNames`, `put`, `putAll`, `putIfAbsent`, `rehash`, `remove`, `remove`, `replace`, `replace`, `replaceAll`, `save`, `setProperty`, `size`, `store`, `store`, `storeToXML`, `storeToXML`, `storeToXML`, `stringPropertyNames`, `toString`, `values`

## TablePrinter

*class* `net.minecraftforge.common.util.TablePrinter`

### Fields
- `private final List<TablePrinter.Header<T>> headers`
- `private final List<T> rows`

### Methods
- `public TablePrinter<T> header(String name,  Function<T,String> supplier)`
- `public TablePrinter<T> header(String name,  Function<T,String> supplier,  boolean right)`
- `public void clearRows()`
- `public TablePrinter<T> add(T row)`
- `public TablePrinter<T> add(T row,  T... more)`
- `public TablePrinter<T> add(Collection<? extends T> rows)`
- `public String toString()`
- `public void build(StringBuilder buf)`
- `private static void line(StringBuilder buf,  int size)`
- `private static void pad(StringBuilder buf,  int size)`

## TablePrinter.Header

*class* `net.minecraftforge.common.util.TablePrinter.Header`

Enclosing class: TablePrinter<T>

### Fields
- `private final String name`
- `private final Function<T,String> supplier`
- `private final boolean right`

## TextTable

*class* `net.minecraftforge.common.util.TextTable`

Utility to format data into a textual (markdown-compliant) table.

### Fields
- `private final List<TextTable.Column> columns`
- `private final List<TextTable.Row> rows`

### Methods
- `public static TextTable.Column column(String header)`
- `public static TextTable.Column column(String header,  TextTable.Alignment alignment)`
- `public String build(String lineEnding)`
- `public void append(StringBuilder destination,  String lineEnding)`
  Appends the data formatted as a table to the given string builder.
   The padding character used for the column alignments is a single space (' '),
   the separate between column headers and values is a dash ('-').
   Note that you *have* to specify a line ending, '\n' isn't used by default.
  
   The generated table is compliant with the markdown file format.
  - param: destination - a string builder to append the table to
  - param: lineEnding - the line ending to use for each row of the table
- `private void printSeparators(StringBuilder destination)`
- `private void printRow(StringBuilder destination,  List<String> values)`
- `public void add(@NotNull  @NotNull Object... values)`
- `public void clear()`
- `public List<TextTable.Column> getColumns()`

## TextTable.Column

*class* `net.minecraftforge.common.util.TextTable.Column`

Enclosing class: TextTable

### Fields
- `private String header`
- `private int width`
- `private TextTable.Alignment alignment`

### Methods
- `public String formatHeader(String padding)`
- `public String format(String value,  String padding)`
- `public String getSeparator(char character)`
- `public void fit(String value)`
- `public void resetWidth()`
- `public int getWidth()`

## TextTable.Row

*class* `net.minecraftforge.common.util.TextTable.Row`

Enclosing class: TextTable

### Fields
- `private final ArrayList<String> values`

### Methods
- `public List<String> format(List<TextTable.Column> columns,  String padding)`

## TransformationHelper

*class* `net.minecraftforge.common.util.TransformationHelper`

### Fields
- `private static final double THRESHOLD` (= 0.9995)

### Methods
- `public static org.joml.Quaternionf quatFromXYZ(org.joml.Vector3f xyz,  boolean degrees)`
- `public static org.joml.Quaternionf quatFromXYZ(float[] xyz,  boolean degrees)`
- `public static org.joml.Quaternionf quatFromXYZ(float x,  float y,  float z,  boolean degrees)`
- `public static org.joml.Quaternionf makeQuaternion(float[] values)`
- `public static org.joml.Vector3f lerp(org.joml.Vector3f from,  org.joml.Vector3f to,  float progress)`
- `public static org.joml.Quaternionf slerp(org.joml.Quaternionfc v0,  org.joml.Quaternionfc v1,  float t)`
- `public static Transformation slerp(Transformation one,  Transformation that,  float progress)`
- `public static boolean epsilonEquals(org.joml.Vector4f v1,  org.joml.Vector4f v2,  float epsilon)`

## TransformationHelper.Deserializer

*class* `net.minecraftforge.common.util.TransformationHelper.Deserializer`

Enclosing class: TransformationHelper

### Methods
- `public Transformation deserialize(com.google.gson.JsonElement json,  Type typeOfT,  com.google.gson.JsonDeserializationContext context)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException
- `private static org.joml.Vector3f parseOrigin(com.google.gson.JsonObject obj)`
- `public static org.joml.Matrix4f parseMatrix(com.google.gson.JsonElement e)`
- `public static float[] parseFloatArray(com.google.gson.JsonElement e,  int length,  String prefix)`
- `public static org.joml.Quaternionf parseAxisRotation(com.google.gson.JsonElement e)`
- `public static org.joml.Quaternionf parseRotation(com.google.gson.JsonElement e)`

## TriPredicate

*interface* `net.minecraftforge.common.util.TriPredicate`

A predicate that takes three arguments and returns a boolean.

### Methods
- `boolean test(T t,  U u,  V v)`
- `default TriPredicate<T,U,V> and(TriPredicate<? super T,? super U,? super V> other)`
- `default TriPredicate<T,U,V> negate()`
- `default TriPredicate<T,U,V> or(TriPredicate<? super T,? super U,? super V> other)`
