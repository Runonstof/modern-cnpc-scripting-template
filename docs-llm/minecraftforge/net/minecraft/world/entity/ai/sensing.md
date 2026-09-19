# net.minecraft.world.entity.ai.sensing

- [AdultSensor](#adultsensor)
- [AxolotlAttackablesSensor](#axolotlattackablessensor)
- [DummySensor](#dummysensor)
- [FrogAttackablesSensor](#frogattackablessensor)
- [GolemSensor](#golemsensor)
- [HoglinSpecificSensor](#hoglinspecificsensor)
- [HurtBySensor](#hurtbysensor)
- [IsInWaterSensor](#isinwatersensor)
- [NearestBedSensor](#nearestbedsensor)
- [NearestItemSensor](#nearestitemsensor)
- [NearestLivingEntitySensor](#nearestlivingentitysensor)
- [NearestVisibleLivingEntitySensor](#nearestvisiblelivingentitysensor)
- [PiglinBruteSpecificSensor](#piglinbrutespecificsensor)
- [PiglinSpecificSensor](#piglinspecificsensor)
- [PlayerSensor](#playersensor)
- [SecondaryPoiSensor](#secondarypoisensor)
- [Sensing](#sensing)
- [Sensor](#sensor)
- [SensorType>](#sensortype)
- [TemptingSensor](#temptingsensor)
- [VillagerBabiesSensor](#villagerbabiessensor)
- [VillagerHostilesSensor](#villagerhostilessensor)
- [WardenEntitySensor](#wardenentitysensor)
## AdultSensor

*class* `net.minecraft.world.entity.ai.sensing.AdultSensor`

### Inherited fields
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `TARGETING_RANGE`

### Methods
- `public Set<MemoryModuleType<?>> requires()`
- `protected void doTick(ServerLevel p_148248_,  AgeableMob p_148249_)`
- `private void setNearestVisibleAdult(AgeableMob p_186141_,  NearestVisibleLivingEntities p_186142_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `isEntityAttackable`, `isEntityAttackableIgnoringLineOfSight`, `isEntityTargetable`, `tick`

## AxolotlAttackablesSensor

*class* `net.minecraft.world.entity.ai.sensing.AxolotlAttackablesSensor`

### Fields
- `public static final float TARGET_DETECTION_DISTANCE` (= 8.0f)

### Inherited fields
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `TARGETING_RANGE`

### Methods
- `protected boolean isMatchingEntity(LivingEntity p_148266_,  LivingEntity p_148267_)`
- `private boolean isHuntTarget(LivingEntity p_148272_,  LivingEntity p_148273_)`
- `private boolean isHostileTarget(LivingEntity p_148270_)`
- `private boolean isClose(LivingEntity p_148275_,  LivingEntity p_148276_)`
- `protected MemoryModuleType<LivingEntity> getMemory()`

### Inherited methods
- from `net.minecraft.world.entity.ai.sensing.NearestVisibleLivingEntitySensor`: `doTick`, `getVisibleEntities`, `requires`
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `isEntityAttackable`, `isEntityAttackableIgnoringLineOfSight`, `isEntityTargetable`, `tick`

## DummySensor

*class* `net.minecraft.world.entity.ai.sensing.DummySensor`

### Inherited fields
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `TARGETING_RANGE`

### Methods
- `protected void doTick(ServerLevel p_26638_,  LivingEntity p_26639_)`
- `public Set<MemoryModuleType<?>> requires()`

### Inherited methods
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `isEntityAttackable`, `isEntityAttackableIgnoringLineOfSight`, `isEntityTargetable`, `tick`

## FrogAttackablesSensor

*class* `net.minecraft.world.entity.ai.sensing.FrogAttackablesSensor`

### Fields
- `public static final float TARGET_DETECTION_DISTANCE` (= 10.0f)

### Inherited fields
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `TARGETING_RANGE`

### Methods
- `protected boolean isMatchingEntity(LivingEntity p_217810_,  LivingEntity p_217811_)`
- `private boolean isUnreachableAttackTarget(LivingEntity p_238336_,  LivingEntity p_238337_)`
- `protected MemoryModuleType<LivingEntity> getMemory()`

### Inherited methods
- from `net.minecraft.world.entity.ai.sensing.NearestVisibleLivingEntitySensor`: `doTick`, `getVisibleEntities`, `requires`
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `isEntityAttackable`, `isEntityAttackableIgnoringLineOfSight`, `isEntityTargetable`, `tick`

## GolemSensor

*class* `net.minecraft.world.entity.ai.sensing.GolemSensor`

### Fields
- `private static final int GOLEM_SCAN_RATE` (= 200)
- `private static final int MEMORY_TIME_TO_LIVE` (= 599)

### Inherited fields
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `TARGETING_RANGE`

### Methods
- `protected void doTick(ServerLevel p_26645_,  LivingEntity p_26646_)`
- `public Set<MemoryModuleType<?>> requires()`
- `public static void checkForNearbyGolem(LivingEntity p_26648_)`
- `public static void golemDetected(LivingEntity p_26650_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `isEntityAttackable`, `isEntityAttackableIgnoringLineOfSight`, `isEntityTargetable`, `tick`

## HoglinSpecificSensor

*class* `net.minecraft.world.entity.ai.sensing.HoglinSpecificSensor`

### Inherited fields
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `TARGETING_RANGE`

### Methods
- `public Set<MemoryModuleType<?>> requires()`
- `protected void doTick(ServerLevel p_26659_,  Hoglin p_26660_)`
- `private Optional<BlockPos> findNearestRepellent(ServerLevel p_26665_,  Hoglin p_26666_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `isEntityAttackable`, `isEntityAttackableIgnoringLineOfSight`, `isEntityTargetable`, `tick`

## HurtBySensor

*class* `net.minecraft.world.entity.ai.sensing.HurtBySensor`

### Inherited fields
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `TARGETING_RANGE`

### Methods
- `public Set<MemoryModuleType<?>> requires()`
- `protected void doTick(ServerLevel p_26670_,  LivingEntity p_26671_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `isEntityAttackable`, `isEntityAttackableIgnoringLineOfSight`, `isEntityTargetable`, `tick`

## IsInWaterSensor

*class* `net.minecraft.world.entity.ai.sensing.IsInWaterSensor`

### Inherited fields
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `TARGETING_RANGE`

### Methods
- `public Set<MemoryModuleType<?>> requires()`
- `protected void doTick(ServerLevel p_217816_,  LivingEntity p_217817_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `isEntityAttackable`, `isEntityAttackableIgnoringLineOfSight`, `isEntityTargetable`, `tick`

## NearestBedSensor

*class* `net.minecraft.world.entity.ai.sensing.NearestBedSensor`

### Fields
- `private static final int CACHE_TIMEOUT` (= 40)
- `private static final int BATCH_SIZE` (= 5)
- `private static final int RATE` (= 20)
- `private final it.unimi.dsi.fastutil.longs.Long2LongMap batchCache`
- `private int triedCount`
- `private long lastUpdate`

### Inherited fields
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `TARGETING_RANGE`

### Methods
- `public Set<MemoryModuleType<?>> requires()`
- `protected void doTick(ServerLevel p_26685_,  Mob p_26686_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `isEntityAttackable`, `isEntityAttackableIgnoringLineOfSight`, `isEntityTargetable`, `tick`

## NearestItemSensor

*class* `net.minecraft.world.entity.ai.sensing.NearestItemSensor`

### Fields
- `private static final long XZ_RANGE` (= 32L)
- `private static final long Y_RANGE` (= 16L)
- `public static final int MAX_DISTANCE_TO_WANTED_ITEM` (= 32)

### Inherited fields
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `TARGETING_RANGE`

### Methods
- `public Set<MemoryModuleType<?>> requires()`
- `protected void doTick(ServerLevel p_26697_,  Mob p_26698_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `isEntityAttackable`, `isEntityAttackableIgnoringLineOfSight`, `isEntityTargetable`, `tick`

## NearestLivingEntitySensor

*class* `net.minecraft.world.entity.ai.sensing.NearestLivingEntitySensor`

### Inherited fields
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `TARGETING_RANGE`

### Methods
- `protected void doTick(ServerLevel p_26710_,  T p_26711_)`
- `protected int radiusXZ()`
- `protected int radiusY()`
- `public Set<MemoryModuleType<?>> requires()`

### Inherited methods
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `isEntityAttackable`, `isEntityAttackableIgnoringLineOfSight`, `isEntityTargetable`, `tick`

## NearestVisibleLivingEntitySensor

*class* `net.minecraft.world.entity.ai.sensing.NearestVisibleLivingEntitySensor`

### Inherited fields
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `TARGETING_RANGE`

### Methods
- `protected abstract boolean isMatchingEntity(LivingEntity p_148292_,  LivingEntity p_148293_)`
- `protected abstract MemoryModuleType<LivingEntity> getMemory()`
- `public Set<MemoryModuleType<?>> requires()`
- `protected void doTick(ServerLevel p_148288_,  LivingEntity p_148289_)`
- `private Optional<LivingEntity> getNearestEntity(LivingEntity p_148298_)`
- `protected Optional<NearestVisibleLivingEntities> getVisibleEntities(LivingEntity p_148291_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `isEntityAttackable`, `isEntityAttackableIgnoringLineOfSight`, `isEntityTargetable`, `tick`

## PiglinBruteSpecificSensor

*class* `net.minecraft.world.entity.ai.sensing.PiglinBruteSpecificSensor`

### Inherited fields
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `TARGETING_RANGE`

### Methods
- `public Set<MemoryModuleType<?>> requires()`
- `protected void doTick(ServerLevel p_26721_,  LivingEntity p_26722_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `isEntityAttackable`, `isEntityAttackableIgnoringLineOfSight`, `isEntityTargetable`, `tick`

## PiglinSpecificSensor

*class* `net.minecraft.world.entity.ai.sensing.PiglinSpecificSensor`

### Inherited fields
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `TARGETING_RANGE`

### Methods
- `public Set<MemoryModuleType<?>> requires()`
- `protected void doTick(ServerLevel p_26726_,  LivingEntity p_26727_)`
- `private static Optional<BlockPos> findNearestRepellent(ServerLevel p_26735_,  LivingEntity p_26736_)`
- `private static boolean isValidRepellent(ServerLevel p_26729_,  BlockPos p_26730_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `isEntityAttackable`, `isEntityAttackableIgnoringLineOfSight`, `isEntityTargetable`, `tick`

## PlayerSensor

*class* `net.minecraft.world.entity.ai.sensing.PlayerSensor`

### Inherited fields
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `TARGETING_RANGE`

### Methods
- `public Set<MemoryModuleType<?>> requires()`
- `protected void doTick(ServerLevel p_26740_,  LivingEntity p_26741_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `isEntityAttackable`, `isEntityAttackableIgnoringLineOfSight`, `isEntityTargetable`, `tick`

## SecondaryPoiSensor

*class* `net.minecraft.world.entity.ai.sensing.SecondaryPoiSensor`

### Fields
- `private static final int SCAN_RATE` (= 40)

### Inherited fields
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `TARGETING_RANGE`

### Methods
- `protected void doTick(ServerLevel p_26754_,  Villager p_26755_)`
- `public Set<MemoryModuleType<?>> requires()`

### Inherited methods
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `isEntityAttackable`, `isEntityAttackableIgnoringLineOfSight`, `isEntityTargetable`, `tick`

## Sensing

*class* `net.minecraft.world.entity.ai.sensing.Sensing`

### Fields
- `private final Mob mob`
- `private final it.unimi.dsi.fastutil.ints.IntSet seen`
- `private final it.unimi.dsi.fastutil.ints.IntSet unseen`

### Methods
- `public void tick()`
- `public boolean hasLineOfSight(Entity p_148307_)`

## Sensor

*class* `net.minecraft.world.entity.ai.sensing.Sensor`

### Fields
- `private static final RandomSource RANDOM`
- `private static final int DEFAULT_SCAN_RATE` (= 20)
- `protected static final int TARGETING_RANGE` (= 16)
- `private static final TargetingConditions TARGET_CONDITIONS`
- `private static final TargetingConditions TARGET_CONDITIONS_IGNORE_INVISIBILITY_TESTING`
- `private static final TargetingConditions ATTACK_TARGET_CONDITIONS`
- `private static final TargetingConditions ATTACK_TARGET_CONDITIONS_IGNORE_INVISIBILITY_TESTING`
- `private static final TargetingConditions ATTACK_TARGET_CONDITIONS_IGNORE_LINE_OF_SIGHT`
- `private static final TargetingConditions ATTACK_TARGET_CONDITIONS_IGNORE_INVISIBILITY_AND_LINE_OF_SIGHT`
- `private final int scanRate`
- `private long timeToTick`

### Methods
- `public final void tick(ServerLevel p_26807_,  E p_26808_)`
- `protected abstract void doTick(ServerLevel p_26801_,  E p_26802_)`
- `public abstract Set<MemoryModuleType<?>> requires()`
- `public static boolean isEntityTargetable(LivingEntity p_26804_,  LivingEntity p_26805_)`
- `public static boolean isEntityAttackable(LivingEntity p_148313_,  LivingEntity p_148314_)`
- `public static boolean isEntityAttackableIgnoringLineOfSight(LivingEntity p_182378_,  LivingEntity p_182379_)`

## SensorType>

*class* `net.minecraft.world.entity.ai.sensing.SensorType>`

### Fields
- `public static final SensorType<DummySensor> DUMMY`
- `public static final SensorType<NearestItemSensor> NEAREST_ITEMS`
- `public static final SensorType<NearestLivingEntitySensor<LivingEntity>> NEAREST_LIVING_ENTITIES`
- `public static final SensorType<PlayerSensor> NEAREST_PLAYERS`
- `public static final SensorType<NearestBedSensor> NEAREST_BED`
- `public static final SensorType<HurtBySensor> HURT_BY`
- `public static final SensorType<VillagerHostilesSensor> VILLAGER_HOSTILES`
- `public static final SensorType<VillagerBabiesSensor> VILLAGER_BABIES`
- `public static final SensorType<SecondaryPoiSensor> SECONDARY_POIS`
- `public static final SensorType<GolemSensor> GOLEM_DETECTED`
- `public static final SensorType<PiglinSpecificSensor> PIGLIN_SPECIFIC_SENSOR`
- `public static final SensorType<PiglinBruteSpecificSensor> PIGLIN_BRUTE_SPECIFIC_SENSOR`
- `public static final SensorType<HoglinSpecificSensor> HOGLIN_SPECIFIC_SENSOR`
- `public static final SensorType<AdultSensor> NEAREST_ADULT`
- `public static final SensorType<AxolotlAttackablesSensor> AXOLOTL_ATTACKABLES`
- `public static final SensorType<TemptingSensor> AXOLOTL_TEMPTATIONS`
- `public static final SensorType<TemptingSensor> GOAT_TEMPTATIONS`
- `public static final SensorType<TemptingSensor> FROG_TEMPTATIONS`
- `public static final SensorType<TemptingSensor> CAMEL_TEMPTATIONS`
- `public static final SensorType<FrogAttackablesSensor> FROG_ATTACKABLES`
- `public static final SensorType<IsInWaterSensor> IS_IN_WATER`
- `public static final SensorType<WardenEntitySensor> WARDEN_ENTITY_SENSOR`
- `public static final SensorType<TemptingSensor> SNIFFER_TEMPTATIONS`
- `private final Supplier<U extends Sensor<?>> factory`

### Methods
- `public U create()`
- `private static <U extends Sensor<?>> SensorType<U> register(String p_26829_,  Supplier<U> p_26830_)`

## TemptingSensor

*class* `net.minecraft.world.entity.ai.sensing.TemptingSensor`

### Fields
- `public static final int TEMPTATION_RANGE` (= 10)
- `private static final TargetingConditions TEMPT_TARGETING`
- `private final Ingredient temptations`

### Inherited fields
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `TARGETING_RANGE`

### Methods
- `protected void doTick(ServerLevel p_148331_,  PathfinderMob p_148332_)`
- `private boolean playerHoldingTemptation(Player p_148337_)`
- `private boolean isTemptation(ItemStack p_148339_)`
- `public Set<MemoryModuleType<?>> requires()`

### Inherited methods
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `isEntityAttackable`, `isEntityAttackableIgnoringLineOfSight`, `isEntityTargetable`, `tick`

## VillagerBabiesSensor

*class* `net.minecraft.world.entity.ai.sensing.VillagerBabiesSensor`

### Inherited fields
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `TARGETING_RANGE`

### Methods
- `public Set<MemoryModuleType<?>> requires()`
- `protected void doTick(ServerLevel p_26834_,  LivingEntity p_26835_)`
- `private List<LivingEntity> getNearestVillagerBabies(LivingEntity p_26837_)`
- `private boolean isVillagerBaby(LivingEntity p_26839_)`
- `private NearestVisibleLivingEntities getVisibleEntities(LivingEntity p_186204_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `isEntityAttackable`, `isEntityAttackableIgnoringLineOfSight`, `isEntityTargetable`, `tick`

## VillagerHostilesSensor

*class* `net.minecraft.world.entity.ai.sensing.VillagerHostilesSensor`

### Fields
- `private static final com.google.common.collect.ImmutableMap<EntityType<?>,Float> ACCEPTABLE_DISTANCE_FROM_HOSTILES`

### Inherited fields
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `TARGETING_RANGE`

### Methods
- `protected boolean isMatchingEntity(LivingEntity p_148344_,  LivingEntity p_148345_)`
- `private boolean isClose(LivingEntity p_26861_,  LivingEntity p_26862_)`
- `protected MemoryModuleType<LivingEntity> getMemory()`
- `private boolean isHostile(LivingEntity p_26868_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.sensing.NearestVisibleLivingEntitySensor`: `doTick`, `getVisibleEntities`, `requires`
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `isEntityAttackable`, `isEntityAttackableIgnoringLineOfSight`, `isEntityTargetable`, `tick`

## WardenEntitySensor

*class* `net.minecraft.world.entity.ai.sensing.WardenEntitySensor`

### Inherited fields
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `TARGETING_RANGE`

### Methods
- `public Set<MemoryModuleType<?>> requires()`
- `protected void doTick(ServerLevel p_217833_,  Warden p_217834_)`
- `private static Optional<LivingEntity> getClosest(Warden p_217843_,  Predicate<LivingEntity> p_217844_)`
- `protected int radiusXZ()`
- `protected int radiusY()`

### Inherited methods
- from `net.minecraft.world.entity.ai.sensing.Sensor`: `isEntityAttackable`, `isEntityAttackableIgnoringLineOfSight`, `isEntityTargetable`, `tick`
