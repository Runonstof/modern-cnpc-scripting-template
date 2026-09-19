# net.minecraft.world.entity.ai.memory

- [Class MemoryStatus](#class-memorystatus)
- [ExpirableValue](#expirablevalue)
- [MemoryModuleType](#memorymoduletype)
- [NearestVisibleLivingEntities](#nearestvisiblelivingentities)
- [WalkTarget](#walktarget)
## Class MemoryStatus

*enum* `net.minecraft.world.entity.ai.memory.Class MemoryStatus`

### Methods
- `public static MemoryStatus[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static MemoryStatus valueOf(String name)`
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

## ExpirableValue

*class* `net.minecraft.world.entity.ai.memory.ExpirableValue`

### Fields
- `private final T value`
- `private long timeToLive`

### Methods
- `public void tick()`
- `public static <T> ExpirableValue<T> of(T p_26310_)`
- `public static <T> ExpirableValue<T> of(T p_26312_,  long p_26313_)`
- `public long getTimeToLive()`
- `public T getValue()`
- `public boolean hasExpired()`
- `public String toString()`
- `public boolean canExpire()`
- `public static <T> com.mojang.serialization.Codec<ExpirableValue<T>> codec(com.mojang.serialization.Codec<T> p_26305_)`

## MemoryModuleType

*class* `net.minecraft.world.entity.ai.memory.MemoryModuleType`

### Fields
- `public static final MemoryModuleType<Void> DUMMY`
- `public static final MemoryModuleType<GlobalPos> HOME`
- `public static final MemoryModuleType<GlobalPos> JOB_SITE`
- `public static final MemoryModuleType<GlobalPos> POTENTIAL_JOB_SITE`
- `public static final MemoryModuleType<GlobalPos> MEETING_POINT`
- `public static final MemoryModuleType<List<GlobalPos>> SECONDARY_JOB_SITE`
- `public static final MemoryModuleType<List<LivingEntity>> NEAREST_LIVING_ENTITIES`
- `public static final MemoryModuleType<NearestVisibleLivingEntities> NEAREST_VISIBLE_LIVING_ENTITIES`
- `public static final MemoryModuleType<List<LivingEntity>> VISIBLE_VILLAGER_BABIES`
- `public static final MemoryModuleType<List<Player>> NEAREST_PLAYERS`
- `public static final MemoryModuleType<Player> NEAREST_VISIBLE_PLAYER`
- `public static final MemoryModuleType<Player> NEAREST_VISIBLE_ATTACKABLE_PLAYER`
- `public static final MemoryModuleType<WalkTarget> WALK_TARGET`
- `public static final MemoryModuleType<PositionTracker> LOOK_TARGET`
- `public static final MemoryModuleType<LivingEntity> ATTACK_TARGET`
- `public static final MemoryModuleType<Boolean> ATTACK_COOLING_DOWN`
- `public static final MemoryModuleType<LivingEntity> INTERACTION_TARGET`
- `public static final MemoryModuleType<AgeableMob> BREED_TARGET`
- `public static final MemoryModuleType<Entity> RIDE_TARGET`
- `public static final MemoryModuleType<Path> PATH`
- `public static final MemoryModuleType<List<GlobalPos>> INTERACTABLE_DOORS`
- `public static final MemoryModuleType<Set<GlobalPos>> DOORS_TO_CLOSE`
- `public static final MemoryModuleType<BlockPos> NEAREST_BED`
- `public static final MemoryModuleType<DamageSource> HURT_BY`
- `public static final MemoryModuleType<LivingEntity> HURT_BY_ENTITY`
- `public static final MemoryModuleType<LivingEntity> AVOID_TARGET`
- `public static final MemoryModuleType<LivingEntity> NEAREST_HOSTILE`
- `public static final MemoryModuleType<LivingEntity> NEAREST_ATTACKABLE`
- `public static final MemoryModuleType<GlobalPos> HIDING_PLACE`
- `public static final MemoryModuleType<Long> HEARD_BELL_TIME`
- `public static final MemoryModuleType<Long> CANT_REACH_WALK_TARGET_SINCE`
- `public static final MemoryModuleType<Boolean> GOLEM_DETECTED_RECENTLY`
- `public static final MemoryModuleType<Long> LAST_SLEPT`
- `public static final MemoryModuleType<Long> LAST_WOKEN`
- `public static final MemoryModuleType<Long> LAST_WORKED_AT_POI`
- `public static final MemoryModuleType<AgeableMob> NEAREST_VISIBLE_ADULT`
- `public static final MemoryModuleType<ItemEntity> NEAREST_VISIBLE_WANTED_ITEM`
- `public static final MemoryModuleType<Mob> NEAREST_VISIBLE_NEMESIS`
- `public static final MemoryModuleType<Integer> PLAY_DEAD_TICKS`
- `public static final MemoryModuleType<Player> TEMPTING_PLAYER`
- `public static final MemoryModuleType<Integer> TEMPTATION_COOLDOWN_TICKS`
- `public static final MemoryModuleType<Integer> GAZE_COOLDOWN_TICKS`
- `public static final MemoryModuleType<Boolean> IS_TEMPTED`
- `public static final MemoryModuleType<Integer> LONG_JUMP_COOLDOWN_TICKS`
- `public static final MemoryModuleType<Boolean> LONG_JUMP_MID_JUMP`
- `public static final MemoryModuleType<Boolean> HAS_HUNTING_COOLDOWN`
- `public static final MemoryModuleType<Integer> RAM_COOLDOWN_TICKS`
- `public static final MemoryModuleType<Vec3> RAM_TARGET`
- `public static final MemoryModuleType<Unit> IS_IN_WATER`
- `public static final MemoryModuleType<Unit> IS_PREGNANT`
- `public static final MemoryModuleType<Boolean> IS_PANICKING`
- `public static final MemoryModuleType<List<UUID>> UNREACHABLE_TONGUE_TARGETS`
- `public static final MemoryModuleType<UUID> ANGRY_AT`
- `public static final MemoryModuleType<Boolean> UNIVERSAL_ANGER`
- `public static final MemoryModuleType<Boolean> ADMIRING_ITEM`
- `public static final MemoryModuleType<Integer> TIME_TRYING_TO_REACH_ADMIRE_ITEM`
- `public static final MemoryModuleType<Boolean> DISABLE_WALK_TO_ADMIRE_ITEM`
- `public static final MemoryModuleType<Boolean> ADMIRING_DISABLED`
- `public static final MemoryModuleType<Boolean> HUNTED_RECENTLY`
- `public static final MemoryModuleType<BlockPos> CELEBRATE_LOCATION`
- `public static final MemoryModuleType<Boolean> DANCING`
- `public static final MemoryModuleType<Hoglin> NEAREST_VISIBLE_HUNTABLE_HOGLIN`
- `public static final MemoryModuleType<Hoglin> NEAREST_VISIBLE_BABY_HOGLIN`
- `public static final MemoryModuleType<Player> NEAREST_TARGETABLE_PLAYER_NOT_WEARING_GOLD`
- `public static final MemoryModuleType<List<AbstractPiglin>> NEARBY_ADULT_PIGLINS`
- `public static final MemoryModuleType<List<AbstractPiglin>> NEAREST_VISIBLE_ADULT_PIGLINS`
- `public static final MemoryModuleType<List<Hoglin>> NEAREST_VISIBLE_ADULT_HOGLINS`
- `public static final MemoryModuleType<AbstractPiglin> NEAREST_VISIBLE_ADULT_PIGLIN`
- `public static final MemoryModuleType<LivingEntity> NEAREST_VISIBLE_ZOMBIFIED`
- `public static final MemoryModuleType<Integer> VISIBLE_ADULT_PIGLIN_COUNT`
- `public static final MemoryModuleType<Integer> VISIBLE_ADULT_HOGLIN_COUNT`
- `public static final MemoryModuleType<Player> NEAREST_PLAYER_HOLDING_WANTED_ITEM`
- `public static final MemoryModuleType<Boolean> ATE_RECENTLY`
- `public static final MemoryModuleType<BlockPos> NEAREST_REPELLENT`
- `public static final MemoryModuleType<Boolean> PACIFIED`
- `public static final MemoryModuleType<LivingEntity> ROAR_TARGET`
- `public static final MemoryModuleType<BlockPos> DISTURBANCE_LOCATION`
- `public static final MemoryModuleType<Unit> RECENT_PROJECTILE`
- `public static final MemoryModuleType<Unit> IS_SNIFFING`
- `public static final MemoryModuleType<Unit> IS_EMERGING`
- `public static final MemoryModuleType<Unit> ROAR_SOUND_DELAY`
- `public static final MemoryModuleType<Unit> DIG_COOLDOWN`
- `public static final MemoryModuleType<Unit> ROAR_SOUND_COOLDOWN`
- `public static final MemoryModuleType<Unit> SNIFF_COOLDOWN`
- `public static final MemoryModuleType<Unit> TOUCH_COOLDOWN`
- `public static final MemoryModuleType<Unit> VIBRATION_COOLDOWN`
- `public static final MemoryModuleType<Unit> SONIC_BOOM_COOLDOWN`
- `public static final MemoryModuleType<Unit> SONIC_BOOM_SOUND_COOLDOWN`
- `public static final MemoryModuleType<Unit> SONIC_BOOM_SOUND_DELAY`
- `public static final MemoryModuleType<UUID> LIKED_PLAYER`
- `public static final MemoryModuleType<GlobalPos> LIKED_NOTEBLOCK_POSITION`
- `public static final MemoryModuleType<Integer> LIKED_NOTEBLOCK_COOLDOWN_TICKS`
- `public static final MemoryModuleType<Integer> ITEM_PICKUP_COOLDOWN_TICKS`
- `public static final MemoryModuleType<List<GlobalPos>> SNIFFER_EXPLORED_POSITIONS`
- `public static final MemoryModuleType<BlockPos> SNIFFER_SNIFFING_TARGET`
- `public static final MemoryModuleType<Boolean> SNIFFER_DIGGING`
- `public static final MemoryModuleType<Boolean> SNIFFER_HAPPY`
- `private final Optional<com.mojang.serialization.Codec<ExpirableValue<U>>> codec`

### Methods
- `public String toString()`
- `public Optional<com.mojang.serialization.Codec<ExpirableValue<U>>> getCodec()`
- `private static <U> MemoryModuleType<U> register(String p_26391_,  com.mojang.serialization.Codec<U> p_26392_)`
- `private static <U> MemoryModuleType<U> register(String p_26389_)`

## NearestVisibleLivingEntities

*class* `net.minecraft.world.entity.ai.memory.NearestVisibleLivingEntities`

### Fields
- `private static final NearestVisibleLivingEntities EMPTY`
- `private final List<LivingEntity> nearbyEntities`
- `private final Predicate<LivingEntity> lineOfSightTest`

### Methods
- `public static NearestVisibleLivingEntities empty()`
- `public Optional<LivingEntity> findClosest(Predicate<LivingEntity> p_186117_)`
- `public Iterable<LivingEntity> findAll(Predicate<LivingEntity> p_186124_)`
- `public Stream<LivingEntity> find(Predicate<LivingEntity> p_186129_)`
- `public boolean contains(LivingEntity p_186108_)`
- `public boolean contains(Predicate<LivingEntity> p_186131_)`

## WalkTarget

*class* `net.minecraft.world.entity.ai.memory.WalkTarget`

### Fields
- `private final PositionTracker target`
- `private final float speedModifier`
- `private final int closeEnoughDist`

### Methods
- `public PositionTracker getTarget()`
- `public float getSpeedModifier()`
- `public int getCloseEnoughDist()`
