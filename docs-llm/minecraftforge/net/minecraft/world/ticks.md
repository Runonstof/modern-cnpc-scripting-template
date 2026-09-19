# net.minecraft.world.ticks

- [BlackholeTickAccess](#blackholetickaccess)
- [Class TickPriority](#class-tickpriority)
- [ContainerSingleItem](#containersingleitem)
- [LevelChunkTicks](#levelchunkticks)
- [LevelTickAccess](#leveltickaccess)
- [LevelTicks](#levelticks)
- [LevelTicks.PosAndContainerConsumer](#levelticks.posandcontainerconsumer)
- [ProtoChunkTicks](#protochunkticks)
- [SavedTick](#savedtick)
- [ScheduledTick](#scheduledtick)
- [SerializableTickContainer](#serializabletickcontainer)
- [TickAccess](#tickaccess)
- [TickContainerAccess](#tickcontaineraccess)
- [WorldGenTickAccess](#worldgentickaccess)
## BlackholeTickAccess

*class* `net.minecraft.world.ticks.BlackholeTickAccess`

### Fields
- `private static final TickContainerAccess<Object> CONTAINER_BLACKHOLE`
- `private static final LevelTickAccess<Object> LEVEL_BLACKHOLE`

### Methods
- `public static <T> TickContainerAccess<T> emptyContainer()`
- `public static <T> LevelTickAccess<T> emptyLevelList()`

## Class TickPriority

*enum* `net.minecraft.world.ticks.Class TickPriority`

### Fields
- `private final int value`

### Methods
- `public static TickPriority[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static TickPriority valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static TickPriority byValue(int p_193447_)`
- `public int getValue()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ContainerSingleItem

*interface* `net.minecraft.world.ticks.ContainerSingleItem`

All Superinterfaces: Clearable, Container

### Inherited fields
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`

### Methods
- `default int getContainerSize()`
- `default boolean isEmpty()`
- `default void clearContent()`
- `default ItemStack getFirstItem()`
- `default ItemStack removeFirstItem()`
- `default void setFirstItem(ItemStack p_273635_)`
- `default ItemStack removeItemNoUpdate(int p_273409_)`

### Inherited methods
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `removeItem`, `setChanged`, `setItem`, `startOpen`, `stillValid`, `stopOpen`

## LevelChunkTicks

*class* `net.minecraft.world.ticks.LevelChunkTicks`

### Fields
- `private final Queue<ScheduledTick<T>> tickQueue`
- `@Nullable private List<SavedTick<T>> pendingTicks`
- `private final Set<ScheduledTick<?>> ticksPerPosition`
- `@Nullable private BiConsumer<LevelChunkTicks<T>,ScheduledTick<T>> onTickAdded`

### Methods
- `public void setOnTickAdded(@Nullable  BiConsumer<LevelChunkTicks<T>,ScheduledTick<T>> p_193182_)`
- `@Nullable public ScheduledTick<T> peek()`
- `@Nullable public ScheduledTick<T> poll()`
- `public void schedule(ScheduledTick<T> p_193177_)`
- `private void scheduleUnchecked(ScheduledTick<T> p_193194_)`
- `public boolean hasScheduledTick(BlockPos p_193179_,  T p_193180_)`
- `public void removeIf(Predicate<ScheduledTick<T>> p_193184_)`
- `public Stream<ScheduledTick<T>> getAll()`
- `public int count()`
- `public ListTag save(long p_193174_,  Function<T,String> p_193175_)`
- `public void unpack(long p_193172_)`
- `public static <T> LevelChunkTicks<T> load(ListTag p_193186_,  Function<String,Optional<T>> p_193187_,  ChunkPos p_193188_)`

## LevelTickAccess

*interface* `net.minecraft.world.ticks.LevelTickAccess`

All Superinterfaces: TickAccess<T>

### Methods
- `boolean willTickThisTick(BlockPos p_193197_,  T p_193198_)`

### Inherited methods
- from `net.minecraft.world.ticks.TickAccess`: `count`, `hasScheduledTick`, `schedule`

## LevelTicks

*class* `net.minecraft.world.ticks.LevelTicks`

### Fields
- `private static final Comparator<LevelChunkTicks<?>> CONTAINER_DRAIN_ORDER`
- `private final LongPredicate tickCheck`
- `private final Supplier<ProfilerFiller> profiler`
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectMap<LevelChunkTicks<T>> allContainers`
- `private final it.unimi.dsi.fastutil.longs.Long2LongMap nextTickForContainer`
- `private final Queue<LevelChunkTicks<T>> containersToTick`
- `private final Queue<ScheduledTick<T>> toRunThisTick`
- `private final List<ScheduledTick<T>> alreadyRunThisTick`
- `private final Set<ScheduledTick<?>> toRunThisTickSet`
- `private final BiConsumer<LevelChunkTicks<T>,ScheduledTick<T>> chunkScheduleUpdater`

### Methods
- `public void addContainer(ChunkPos p_193232_,  LevelChunkTicks<T> p_193233_)`
- `public void removeContainer(ChunkPos p_193230_)`
- `public void schedule(ScheduledTick<T> p_193252_)`
- `public void tick(long p_193226_,  int p_193227_,  BiConsumer<BlockPos,T> p_193228_)`
- `private void collectTicks(long p_193222_,  int p_193223_,  ProfilerFiller p_193224_)`
- `private void sortContainersToTick(long p_193217_)`
- `private void drainContainers(long p_193219_,  int p_193220_)`
- `private void rescheduleLeftoverContainers()`
- `private void updateContainerScheduling(ScheduledTick<T> p_193280_)`
- `private void drainFromCurrentContainer(Queue<LevelChunkTicks<T>> p_193268_,  LevelChunkTicks<T> p_193269_,  long p_193270_,  int p_193271_)`
- `private void scheduleForThisTick(ScheduledTick<T> p_193286_)`
- `private boolean canScheduleMoreTicks(int p_193215_)`
- `private void runCollectedTicks(BiConsumer<BlockPos,T> p_193273_)`
- `private void cleanupAfterTick()`
- `public boolean hasScheduledTick(BlockPos p_193254_,  T p_193255_)`
- `public boolean willTickThisTick(BlockPos p_193282_,  T p_193283_)`
- `private void calculateTickSetIfNeeded()`
- `private void forContainersInArea(BoundingBox p_193237_,  LevelTicks.PosAndContainerConsumer<T> p_193238_)`
- `public void clearArea(BoundingBox p_193235_)`
- `public void copyArea(BoundingBox p_193243_,  Vec3i p_193244_)`
- `public void copyAreaFrom(LevelTicks<T> p_265554_,  BoundingBox p_265172_,  Vec3i p_265318_)`
- `public int count()`

## LevelTicks.PosAndContainerConsumer

*interface* `net.minecraft.world.ticks.LevelTicks.PosAndContainerConsumer`

Enclosing class: LevelTicks<T>

### Methods
- `void accept(long p_193289_,  LevelChunkTicks<T> p_193290_)`

## ProtoChunkTicks

*class* `net.minecraft.world.ticks.ProtoChunkTicks`

### Fields
- `private final List<SavedTick<T>> ticks`
- `private final Set<SavedTick<?>> ticksPerPosition`

### Methods
- `public void schedule(ScheduledTick<T> p_193298_)`
- `private void schedule(SavedTick<T> p_193296_)`
- `public boolean hasScheduledTick(BlockPos p_193300_,  T p_193301_)`
- `public int count()`
- `public Tag save(long p_193308_,  Function<T,String> p_193309_)`
- `public List<SavedTick<T>> scheduledTicks()`
- `public static <T> ProtoChunkTicks<T> load(ListTag p_193303_,  Function<String,Optional<T>> p_193304_,  ChunkPos p_193305_)`

## SavedTick

*record* `net.minecraft.world.ticks.SavedTick`

### Fields
- `private final T type`
  The field for the type record component.
- `private final BlockPos pos`
  The field for the pos record component.
- `private final int delay`
  The field for the delay record component.
- `private final TickPriority priority`
  The field for the priority record component.
- `private static final String TAG_ID` (= "i")
- `private static final String TAG_X` (= "x")
- `private static final String TAG_Y` (= "y")
- `private static final String TAG_Z` (= "z")
- `private static final String TAG_DELAY` (= "t")
- `private static final String TAG_PRIORITY` (= "p")
- `public static final it.unimi.dsi.fastutil.Hash.Strategy<SavedTick<?>> UNIQUE_TICK_HASH`

### Methods
- `public static <T> void loadTickList(ListTag p_193351_,  Function<String,Optional<T>> p_193352_,  ChunkPos p_193353_,  Consumer<SavedTick<T>> p_193354_)`
- `public static <T> Optional<SavedTick<T>> loadTick(CompoundTag p_210670_,  Function<String,Optional<T>> p_210671_)`
- `private static CompoundTag saveTick(String p_193339_,  BlockPos p_193340_,  int p_193341_,  TickPriority p_193342_)`
- `public static <T> CompoundTag saveTick(ScheduledTick<T> p_193332_,  Function<T,String> p_193333_,  long p_193334_)`
- `public CompoundTag save(Function<T,String> p_193344_)`
- `public ScheduledTick<T> unpack(long p_193329_,  long p_193330_)`
- `public static <T> SavedTick<T> probe(T p_193336_,  BlockPos p_193337_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public T type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public BlockPos pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component
- `public int delay()`
  Returns the value of the delay record component.
  - returns: the value of the delay record component
- `public TickPriority priority()`
  Returns the value of the priority record component.
  - returns: the value of the priority record component

## ScheduledTick

*record* `net.minecraft.world.ticks.ScheduledTick`

### Fields
- `private final T type`
  The field for the type record component.
- `private final BlockPos pos`
  The field for the pos record component.
- `private final long triggerTick`
  The field for the triggerTick record component.
- `private final TickPriority priority`
  The field for the priority record component.
- `private final long subTickOrder`
  The field for the subTickOrder record component.
- `public static final Comparator<ScheduledTick<?>> DRAIN_ORDER`
- `public static final Comparator<ScheduledTick<?>> INTRA_TICK_DRAIN_ORDER`
- `public static final it.unimi.dsi.fastutil.Hash.Strategy<ScheduledTick<?>> UNIQUE_TICK_HASH`

### Methods
- `public static <T> ScheduledTick<T> probe(T p_193398_,  BlockPos p_193399_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public T type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public BlockPos pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component
- `public long triggerTick()`
  Returns the value of the triggerTick record component.
  - returns: the value of the triggerTick record component
- `public TickPriority priority()`
  Returns the value of the priority record component.
  - returns: the value of the priority record component
- `public long subTickOrder()`
  Returns the value of the subTickOrder record component.
  - returns: the value of the subTickOrder record component

## SerializableTickContainer

*interface* `net.minecraft.world.ticks.SerializableTickContainer`

### Methods
- `Tag save(long p_193426_,  Function<T,String> p_193427_)`

## TickAccess

*interface* `net.minecraft.world.ticks.TickAccess`

### Methods
- `void schedule(ScheduledTick<T> p_193428_)`
- `boolean hasScheduledTick(BlockPos p_193429_,  T p_193430_)`
- `int count()`

## TickContainerAccess

*interface* `net.minecraft.world.ticks.TickContainerAccess`

All Superinterfaces: TickAccess<T>

### Inherited methods
- from `net.minecraft.world.ticks.TickAccess`: `count`, `hasScheduledTick`, `schedule`

## WorldGenTickAccess

*class* `net.minecraft.world.ticks.WorldGenTickAccess`

### Fields
- `private final Function<BlockPos,TickContainerAccess<T>> containerGetter`

### Methods
- `public boolean hasScheduledTick(BlockPos p_193459_,  T p_193460_)`
- `public void schedule(ScheduledTick<T> p_193457_)`
- `public boolean willTickThisTick(BlockPos p_193462_,  T p_193463_)`
- `public int count()`
