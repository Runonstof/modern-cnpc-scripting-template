# net.minecraft.world.level.timers

- [FunctionCallback](#functioncallback)
- [FunctionCallback.Serializer](#functioncallback.serializer)
- [FunctionTagCallback](#functiontagcallback)
- [FunctionTagCallback.Serializer](#functiontagcallback.serializer)
- [TimerCallback](#timercallback)
- [TimerCallback.Serializer>](#timercallback.serializer)
- [TimerCallbacks](#timercallbacks)
- [TimerQueue](#timerqueue)
- [TimerQueue.Event](#timerqueue.event)
## FunctionCallback

*class* `net.minecraft.world.level.timers.FunctionCallback`

### Fields
- `final ResourceLocation functionId`

### Methods
- `public void handle(MinecraftServer p_82172_,  TimerQueue<MinecraftServer> p_82173_,  long p_82174_)`

## FunctionCallback.Serializer

*class* `net.minecraft.world.level.timers.FunctionCallback.Serializer`

Enclosing class: FunctionCallback

### Methods
- `public void serialize(CompoundTag p_82182_,  FunctionCallback p_82183_)`
- `public FunctionCallback deserialize(CompoundTag p_82180_)`

### Inherited methods
- from `net.minecraft.world.level.timers.TimerCallback.Serializer`: `getCls`, `getId`

## FunctionTagCallback

*class* `net.minecraft.world.level.timers.FunctionTagCallback`

### Fields
- `final ResourceLocation tagId`

### Methods
- `public void handle(MinecraftServer p_82199_,  TimerQueue<MinecraftServer> p_82200_,  long p_82201_)`

## FunctionTagCallback.Serializer

*class* `net.minecraft.world.level.timers.FunctionTagCallback.Serializer`

Enclosing class: FunctionTagCallback

### Methods
- `public void serialize(CompoundTag p_82206_,  FunctionTagCallback p_82207_)`
- `public FunctionTagCallback deserialize(CompoundTag p_82204_)`

### Inherited methods
- from `net.minecraft.world.level.timers.TimerCallback.Serializer`: `getCls`, `getId`

## TimerCallback

*interface* `net.minecraft.world.level.timers.TimerCallback`

### Methods
- `void handle(T p_82213_,  TimerQueue<T> p_82214_,  long p_82215_)`

## TimerCallback.Serializer>

*class* `net.minecraft.world.level.timers.TimerCallback.Serializer>`

Enclosing interface: TimerCallback<T>

### Fields
- `private final ResourceLocation id`
- `private final Class<?> cls`

### Methods
- `public ResourceLocation getId()`
- `public Class<?> getCls()`
- `public abstract void serialize(CompoundTag p_82222_,  C p_82223_)`
- `public abstract C deserialize(CompoundTag p_82225_)`

## TimerCallbacks

*class* `net.minecraft.world.level.timers.TimerCallbacks`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final TimerCallbacks<MinecraftServer> SERVER_CALLBACKS`
- `private final Map<ResourceLocation,TimerCallback.Serializer<C,?>> idToSerializer`
- `private final Map<Class<?>,TimerCallback.Serializer<C,?>> classToSerializer`

### Methods
- `public TimerCallbacks<C> register(TimerCallback.Serializer<C,?> p_82233_)`
- `private <T extends TimerCallback<C>> TimerCallback.Serializer<C,T> getSerializer(Class<?> p_82237_)`
- `public <T extends TimerCallback<C>> CompoundTag serialize(T p_82235_)`
- `@Nullable public TimerCallback<C> deserialize(CompoundTag p_82239_)`

## TimerQueue

*class* `net.minecraft.world.level.timers.TimerQueue`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final String CALLBACK_DATA_TAG` (= "Callback")
- `private static final String TIMER_NAME_TAG` (= "Name")
- `private static final String TIMER_TRIGGER_TIME_TAG` (= "TriggerTime")
- `private final TimerCallbacks<T> callbacksRegistry`
- `private final Queue<TimerQueue.Event<T>> queue`
- `private com.google.common.primitives.UnsignedLong sequentialId`
- `private final com.google.common.collect.Table<String,Long,TimerQueue.Event<T>> events`

### Methods
- `private static <T> Comparator<TimerQueue.Event<T>> createComparator()`
- `public void tick(T p_82257_,  long p_82258_)`
- `public void schedule(String p_82262_,  long p_82263_,  TimerCallback<T> p_82264_)`
- `public int remove(String p_82260_)`
- `public Set<String> getEventsIds()`
- `private void loadEvent(CompoundTag p_82266_)`
- `private CompoundTag storeEvent(TimerQueue.Event<T> p_82255_)`
- `public ListTag store()`

## TimerQueue.Event

*class* `net.minecraft.world.level.timers.TimerQueue.Event`

Enclosing class: TimerQueue<T>

### Fields
- `public final long triggerTime`
- `public final com.google.common.primitives.UnsignedLong sequentialId`
- `public final String id`
- `public final TimerCallback<T> callback`
