# net.minecraft.world.entity.ai

- [Brain](#brain)
- [Brain.MemoryValue](#brain.memoryvalue)
- [Brain.Provider](#brain.provider)
## Brain

*class* `net.minecraft.world.entity.ai.Brain`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `private final Supplier<com.mojang.serialization.Codec<Brain<E extends LivingEntity>>> codec`
- `private static final int SCHEDULE_UPDATE_DELAY` (= 20)
- `private final Map<MemoryModuleType<?>,Optional<? extends ExpirableValue<?>>> memories`
- `private final Map<SensorType<? extends Sensor<? super E extends LivingEntity>>,Sensor<? super E extends LivingEntity>> sensors`
- `private final Map<Integer,Map<Activity,Set<BehaviorControl<? super E extends LivingEntity>>>> availableBehaviorsByPriority`
- `private Schedule schedule`
- `private final Map<Activity,Set<com.mojang.datafixers.util.Pair<MemoryModuleType<?>,MemoryStatus>>> activityRequirements`
- `private final Map<Activity,Set<MemoryModuleType<?>>> activityMemoriesToEraseWhenStopped`
- `private Set<Activity> coreActivities`
- `private final Set<Activity> activeActivities`
- `private Activity defaultActivity`
- `private long lastScheduleUpdate`

### Methods
- `public static <E extends LivingEntity> Brain.Provider<E> provider(Collection<? extends MemoryModuleType<?>> p_21924_,  Collection<? extends SensorType<? extends Sensor<? super E>>> p_21925_)`
- `public static <E extends LivingEntity> com.mojang.serialization.Codec<Brain<E>> codec(Collection<? extends MemoryModuleType<?>> p_21947_,  Collection<? extends SensorType<? extends Sensor<? super E>>> p_21948_)`
- `public <T> com.mojang.serialization.DataResult<T> serializeStart(com.mojang.serialization.DynamicOps<T> p_21915_)`
- `Stream<Brain.MemoryValue<?>> memories()`
- `public boolean hasMemoryValue(MemoryModuleType<?> p_21875_)`
- `public void clearMemories()`
- `public <U> void eraseMemory(MemoryModuleType<U> p_21937_)`
- `public <U> void setMemory(MemoryModuleType<U> p_21880_,  @Nullable  U p_21881_)`
- `public <U> void setMemoryWithExpiry(MemoryModuleType<U> p_21883_,  U p_21884_,  long p_21885_)`
- `public <U> void setMemory(MemoryModuleType<U> p_21887_,  Optional<? extends U> p_21888_)`
- `<U> void setMemoryInternal(MemoryModuleType<U> p_21942_,  Optional<? extends ExpirableValue<?>> p_21943_)`
- `public <U> Optional<U> getMemory(MemoryModuleType<U> p_21953_)`
- `@Nullable public <U> Optional<U> getMemoryInternal(MemoryModuleType<U> p_259344_)`
- `public <U> long getTimeUntilExpiry(MemoryModuleType<U> p_147342_)`
- `@Deprecated public Map<MemoryModuleType<?>,Optional<? extends ExpirableValue<?>>> getMemories()` (deprecated)
- `public <U> boolean isMemoryValue(MemoryModuleType<U> p_21939_,  U p_21940_)`
- `public boolean checkMemory(MemoryModuleType<?> p_21877_,  MemoryStatus p_21878_)`
- `public Schedule getSchedule()`
- `public void setSchedule(Schedule p_21913_)`
- `public void setCoreActivities(Set<Activity> p_21931_)`
- `@Deprecated public Set<Activity> getActiveActivities()` (deprecated)
- `@Deprecated public List<BehaviorControl<? super E>> getRunningBehaviors()` (deprecated)
- `public void useDefaultActivity()`
- `public Optional<Activity> getActiveNonCoreActivity()`
- `public void setActiveActivityIfPossible(Activity p_21890_)`
- `private void setActiveActivity(Activity p_21961_)`
- `private void eraseMemoriesForOtherActivitesThan(Activity p_21967_)`
- `public void updateActivityFromSchedule(long p_21863_,  long p_21864_)`
- `public void setActiveActivityToFirstValid(List<Activity> p_21927_)`
- `public void setDefaultActivity(Activity p_21945_)`
- `public void addActivity(Activity p_21892_,  int p_21893_,  com.google.common.collect.ImmutableList<? extends BehaviorControl<? super E>> p_21894_)`
- `public void addActivityAndRemoveMemoryWhenStopped(Activity p_21896_,  int p_21897_,  com.google.common.collect.ImmutableList<? extends BehaviorControl<? super E>> p_21898_,  MemoryModuleType<?> p_21899_)`
- `public void addActivity(Activity p_21901_,  com.google.common.collect.ImmutableList<? extends com.mojang.datafixers.util.Pair<Integer,? extends BehaviorControl<? super E>>> p_21902_)`
- `public void addActivityWithConditions(Activity p_21904_,  com.google.common.collect.ImmutableList<? extends com.mojang.datafixers.util.Pair<Integer,? extends BehaviorControl<? super E>>> p_21905_,  Set<com.mojang.datafixers.util.Pair<MemoryModuleType<?>,MemoryStatus>> p_21906_)`
- `public void addActivityAndRemoveMemoriesWhenStopped(Activity p_21908_,  com.google.common.collect.ImmutableList<? extends com.mojang.datafixers.util.Pair<Integer,? extends BehaviorControl<? super E>>> p_21909_,  Set<com.mojang.datafixers.util.Pair<MemoryModuleType<?>,MemoryStatus>> p_21910_,  Set<MemoryModuleType<?>> p_21911_)`
- `public void removeAllBehaviors()`
- `public boolean isActive(Activity p_21955_)`
- `public Brain<E> copyWithoutBehaviors()`
- `public void tick(ServerLevel p_21866_,  E p_21867_)`
- `private void tickSensors(ServerLevel p_21950_,  E p_21951_)`
- `private void forgetOutdatedMemories()`
- `public void stopAll(ServerLevel p_21934_,  E p_21935_)`
- `private void startEachNonRunningBehavior(ServerLevel p_21958_,  E p_21959_)`
- `private void tickEachRunningBehavior(ServerLevel p_21964_,  E p_21965_)`
- `private boolean activityRequirementsAreMet(Activity p_21970_)`
- `private boolean isEmptyCollection(Object p_21919_)`
- `com.google.common.collect.ImmutableList<? extends com.mojang.datafixers.util.Pair<Integer,? extends BehaviorControl<? super E>>> createPriorityPairs(int p_21860_,  com.google.common.collect.ImmutableList<? extends BehaviorControl<? super E>> p_21861_)`
- `public BrainBuilder<E> createBuilder()`
- `public void copyFromBuilder(BrainBuilder<E> builder)`

## Brain.MemoryValue

*class* `net.minecraft.world.entity.ai.Brain.MemoryValue`

Enclosing class: Brain<E extends LivingEntity>

### Fields
- `private final MemoryModuleType<U> type`
- `private final Optional<? extends ExpirableValue<U>> value`

### Methods
- `static <U> Brain.MemoryValue<U> createUnchecked(MemoryModuleType<U> p_22060_,  Optional<? extends ExpirableValue<?>> p_22061_)`
- `void setMemoryInternal(Brain<?> p_22043_)`
- `public <T> void serialize(com.mojang.serialization.DynamicOps<T> p_22048_,  com.mojang.serialization.RecordBuilder<T> p_22049_)`

## Brain.Provider

*class* `net.minecraft.world.entity.ai.Brain.Provider`

Enclosing class: Brain<E extends LivingEntity>

### Fields
- `private final Collection<? extends MemoryModuleType<?>> memoryTypes`
- `private final Collection<? extends SensorType<? extends Sensor<? super E extends LivingEntity>>> sensorTypes`
- `private final com.mojang.serialization.Codec<Brain<E extends LivingEntity>> codec`

### Methods
- `public Brain<E> makeBrain(com.mojang.serialization.Dynamic<?> p_22074_)`
