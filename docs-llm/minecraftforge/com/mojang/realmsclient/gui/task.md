# com.mojang.realmsclient.gui.task

- [DataFetcher](#datafetcher)
- [DataFetcher.ComputationResult](#datafetcher.computationresult)
- [DataFetcher.SubscribedTask](#datafetcher.subscribedtask)
- [DataFetcher.Subscription](#datafetcher.subscription)
- [DataFetcher.SuccessfulComputationResult](#datafetcher.successfulcomputationresult)
- [DataFetcher.Task](#datafetcher.task)
- [RepeatedDelayStrategy](#repeateddelaystrategy)
## DataFetcher

*class* `com.mojang.realmsclient.gui.task.DataFetcher`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `final Executor executor`
- `final TimeUnit resolution`
- `final TimeSource timeSource`

### Methods
- `public <T> DataFetcher.Task<T> createTask(String p_239623_,  Callable<T> p_239624_,  Duration p_239625_,  RepeatedDelayStrategy p_239626_)`
- `public DataFetcher.Subscription createSubscription()`

## DataFetcher.ComputationResult

*record* `com.mojang.realmsclient.gui.task.DataFetcher.ComputationResult`

Enclosing class: DataFetcher

### Fields
- `private final com.mojang.datafixers.util.Either<T,Exception> value`
  The field for the value record component.
- `private final long time`
  The field for the time record component.

### Methods
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
- `public com.mojang.datafixers.util.Either<T,Exception> value()`
  Returns the value of the value record component.
  - returns: the value of the value record component
- `public long time()`
  Returns the value of the time record component.
  - returns: the value of the time record component

## DataFetcher.SubscribedTask

*class* `com.mojang.realmsclient.gui.task.DataFetcher.SubscribedTask`

Enclosing class: DataFetcher

### Fields
- `private final DataFetcher.Task<T> task`
- `private final Consumer<T> output`
- `private long lastCheckTime`

### Methods
- `void update(long p_239226_)`
- `void runCallbackIfNeeded()`
- `void runCallback()`
- `void reset()`

## DataFetcher.Subscription

*class* `com.mojang.realmsclient.gui.task.DataFetcher.Subscription`

Enclosing class: DataFetcher

### Fields
- `private final List<DataFetcher.SubscribedTask<?>> subscriptions`

### Methods
- `public <T> void subscribe(DataFetcher.Task<T> p_239442_,  Consumer<T> p_239443_)`
- `public void forceUpdate()`
- `public void tick()`
- `public void reset()`

## DataFetcher.SuccessfulComputationResult

*record* `com.mojang.realmsclient.gui.task.DataFetcher.SuccessfulComputationResult`

Enclosing class: DataFetcher

### Fields
- `private final T value`
  The field for the value record component.
- `private final long time`
  The field for the time record component.

### Methods
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
- `public T value()`
  Returns the value of the value record component.
  - returns: the value of the value record component
- `public long time()`
  Returns the value of the time record component.
  - returns: the value of the time record component

## DataFetcher.Task

*class* `com.mojang.realmsclient.gui.task.DataFetcher.Task`

Enclosing class: DataFetcher

### Fields
- `private final String id`
- `private final Callable<T> updater`
- `private final long period`
- `private final RepeatedDelayStrategy repeatStrategy`
- `@Nullable private CompletableFuture<DataFetcher.ComputationResult<T>> pendingTask`
- `@Nullable DataFetcher.SuccessfulComputationResult<T> lastResult`
- `private long nextUpdate`

### Methods
- `void updateIfNeeded(long p_239710_)`
- `public void reset()`

## RepeatedDelayStrategy

*interface* `com.mojang.realmsclient.gui.task.RepeatedDelayStrategy`

### Fields
- `static final RepeatedDelayStrategy CONSTANT`

### Methods
- `long delayCyclesAfterSuccess()`
- `long delayCyclesAfterFailure()`
- `static RepeatedDelayStrategy exponentialBackoff(int p_239256_)`
