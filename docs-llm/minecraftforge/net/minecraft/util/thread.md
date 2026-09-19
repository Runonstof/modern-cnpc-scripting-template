# net.minecraft.util.thread

- [BlockableEventLoop](#blockableeventloop)
- [NamedThreadFactory](#namedthreadfactory)
- [ProcessorHandle](#processorhandle)
- [ProcessorMailbox](#processormailbox)
- [ReentrantBlockableEventLoop](#reentrantblockableeventloop)
- [StrictQueue](#strictqueue)
- [StrictQueue.FixedPriorityQueue](#strictqueue.fixedpriorityqueue)
- [StrictQueue.IntRunnable](#strictqueue.intrunnable)
- [StrictQueue.QueueStrictQueue](#strictqueue.queuestrictqueue)
## BlockableEventLoop

*class* `net.minecraft.util.thread.BlockableEventLoop`

### Fields
- `private final String name`
- `private static final org.slf4j.Logger LOGGER`
- `private final Queue<R extends Runnable> pendingRunnables`
- `private int blockingCount`

### Methods
- `protected abstract R wrapRunnable(Runnable p_18704_)`
- `protected abstract boolean shouldRun(R p_18703_)`
- `public boolean isSameThread()`
- `protected abstract Thread getRunningThread()`
- `protected boolean scheduleExecutables()`
- `public int getPendingTasksCount()`
- `public String name()`
- `public <V> CompletableFuture<V> submit(Supplier<V> p_18692_)`
- `public CompletableFuture<Void> submitAsync(Runnable p_18690_)`
- `public CompletableFuture<Void> submit(Runnable p_18708_)`
- `public void executeBlocking(Runnable p_18710_)`
- `public void tell(R p_18712_)`
- `public void execute(Runnable p_18706_)`
- `public void executeIfPossible(Runnable p_201937_)`
- `protected void dropAllTasks()`
- `protected void runAllTasks()`
- `public boolean pollTask()`
- `public void managedBlock(BooleanSupplier p_18702_)`
- `protected void waitForTasks()`
- `protected void doRunTask(R p_18700_)`
- `public List<MetricSampler> profiledMetrics()`

### Inherited methods
- from `net.minecraft.util.thread.ProcessorHandle`: `ask`, `askEither`, `close`

## NamedThreadFactory

*class* `net.minecraft.util.thread.NamedThreadFactory`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final ThreadGroup group`
- `private final AtomicInteger threadNumber`
- `private final String namePrefix`

### Methods
- `public Thread newThread(Runnable p_146352_)`

## ProcessorHandle

*interface* `net.minecraft.util.thread.ProcessorHandle`

All Superinterfaces: AutoCloseable

### Methods
- `String name()`
- `void tell(Msg p_18713_)`
- `default void close()`
- `default <Source> CompletableFuture<Source> ask(Function<? super ProcessorHandle<Source>,? extends Msg> p_18721_)`
- `default <Source> CompletableFuture<Source> askEither(Function<? super ProcessorHandle<com.mojang.datafixers.util.Either<Source,Exception>>,? extends Msg> p_18723_)`
- `static <Msg> ProcessorHandle<Msg> of(String p_18715_,  Consumer<Msg> p_18716_)`

## ProcessorMailbox

*class* `net.minecraft.util.thread.ProcessorMailbox`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int CLOSED_BIT` (= 1)
- `private static final int SCHEDULED_BIT` (= 2)
- `private final AtomicInteger status`
- `private final StrictQueue<? super T,? extends Runnable> queue`
- `private final Executor dispatcher`
- `private final String name`

### Methods
- `public static ProcessorMailbox<Runnable> create(Executor p_18752_,  String p_18753_)`
- `private boolean setAsScheduled()`
- `private void setAsIdle()`
- `private boolean canBeScheduled()`
- `public void close()`
- `private boolean shouldProcess()`
- `private boolean pollTask()`
- `public void run()`
- `public void runAll()`
- `public void tell(T p_18750_)`
- `private void registerForExecution()`
- `private int pollUntil(it.unimi.dsi.fastutil.ints.Int2BooleanFunction p_18748_)`
- `public int size()`
- `public boolean hasWork()`
- `public String toString()`
- `public String name()`
- `public List<MetricSampler> profiledMetrics()`

### Inherited methods
- from `net.minecraft.util.thread.ProcessorHandle`: `ask`, `askEither`

## ReentrantBlockableEventLoop

*class* `net.minecraft.util.thread.ReentrantBlockableEventLoop`

### Fields
- `private int reentrantCount`

### Methods
- `public boolean scheduleExecutables()`
- `protected boolean runningTask()`
- `public void doRunTask(R p_18769_)`

### Inherited methods
- from `net.minecraft.util.thread.BlockableEventLoop`: `dropAllTasks`, `execute`, `executeBlocking`, `executeIfPossible`, `getPendingTasksCount`, `getRunningThread`, `isSameThread`, `managedBlock`, `name`, `pollTask`, `profiledMetrics`, `runAllTasks`, `shouldRun`, `submit`, `submit`, `submitAsync`, `tell`, `waitForTasks`, `wrapRunnable`
- from `net.minecraft.util.thread.ProcessorHandle`: `ask`, `askEither`, `close`

## StrictQueue

*interface* `net.minecraft.util.thread.StrictQueue`

### Methods
- `@Nullable F pop()`
- `boolean push(T p_18770_)`
- `boolean isEmpty()`
- `int size()`

## StrictQueue.FixedPriorityQueue

*class* `net.minecraft.util.thread.StrictQueue.FixedPriorityQueue`

Enclosing interface: StrictQueue<T, F>

### Fields
- `private final Queue<Runnable>[] queues`
- `private final AtomicInteger size`

### Methods
- `@Nullable public Runnable pop()`
- `public boolean push(StrictQueue.IntRunnable p_18778_)`
- `public boolean isEmpty()`
- `public int size()`

## StrictQueue.IntRunnable

*class* `net.minecraft.util.thread.StrictQueue.IntRunnable`

Enclosing interface: StrictQueue<T, F>

### Fields
- `final int priority`
- `private final Runnable task`

### Methods
- `public void run()`
- `public int getPriority()`

## StrictQueue.QueueStrictQueue

*class* `net.minecraft.util.thread.StrictQueue.QueueStrictQueue`

Enclosing interface: StrictQueue<T, F>

### Fields
- `private final Queue<T> queue`

### Methods
- `@Nullable public T pop()`
- `public boolean push(T p_18795_)`
- `public boolean isEmpty()`
- `public int size()`
