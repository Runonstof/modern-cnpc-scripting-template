# net.minecraft.world.entity.ai.behavior

- [AcquirePoi](#acquirepoi)
- [AcquirePoi.JitteredLinearRetry](#acquirepoi.jitteredlinearretry)
- [AnimalMakeLove](#animalmakelove)
- [AnimalPanic](#animalpanic)
- [AssignProfessionFromJobSite](#assignprofessionfromjobsite)
- [BabyFollowAdult](#babyfollowadult)
- [BackUpIfTooClose](#backupiftooclose)
- [BecomePassiveIfMemoryPresent](#becomepassiveifmemorypresent)
- [Behavior](#behavior)
- [BehaviorControl](#behaviorcontrol)
- [BehaviorUtils](#behaviorutils)
- [BlockPosTracker](#blockpostracker)
- [CelebrateVillagersSurvivedRaid](#celebratevillagerssurvivedraid)
- [Class Behavior.Status](#class-behavior.status)
- [Class CrossbowAttack.CrossbowState](#class-crossbowattack.crossbowstate)
- [Class GateBehavior.OrderPolicy](#class-gatebehavior.orderpolicy)
- [Class GateBehavior.RunningPolicy](#class-gatebehavior.runningpolicy)
- [CopyMemoryWithExpiry](#copymemorywithexpiry)
- [CountDownCooldownTicks](#countdowncooldownticks)
- [Croak](#croak)
- [CrossbowAttack](#crossbowattack)
- [DismountOrSkipMounting](#dismountorskipmounting)
- [DoNothing](#donothing)
- [EntityTracker](#entitytracker)
- [EraseMemoryIf](#erasememoryif)
- [FollowTemptation](#followtemptation)
- [GateBehavior](#gatebehavior)
- [GiveGiftToHero](#givegifttohero)
- [GoAndGiveItemsToTarget](#goandgiveitemstotarget)
- [GoToClosestVillage](#gotoclosestvillage)
- [GoToPotentialJobSite](#gotopotentialjobsite)
- [GoToTargetLocation](#gototargetlocation)
- [GoToWantedItem](#gotowanteditem)
- [HarvestFarmland](#harvestfarmland)
- [InsideBrownianWalk](#insidebrownianwalk)
- [InteractWith](#interactwith)
- [InteractWithDoor](#interactwithdoor)
- [JumpOnBed](#jumponbed)
- [LocateHidingPlace](#locatehidingplace)
- [LongJumpMidJump](#longjumpmidjump)
- [LongJumpToPreferredBlock](#longjumptopreferredblock)
- [LongJumpToRandomPos](#longjumptorandompos)
- [LongJumpToRandomPos.PossibleJump](#longjumptorandompos.possiblejump)
- [LookAndFollowTradingPlayerSink](#lookandfollowtradingplayersink)
- [LookAtTargetSink](#lookattargetsink)
- [MeleeAttack](#meleeattack)
- [Mount](#mount)
- [MoveToSkySeeingSpot](#movetoskyseeingspot)
- [MoveToTargetSink](#movetotargetsink)
- [OneShot](#oneshot)
- [PlayTagWithOtherKids](#playtagwithotherkids)
- [PoiCompetitorScan](#poicompetitorscan)
- [PositionTracker](#positiontracker)
- [PrepareRamNearestTarget](#prepareramnearesttarget)
- [PrepareRamNearestTarget.RamCandidate](#prepareramnearesttarget.ramcandidate)
- [RamTarget](#ramtarget)
- [RandomLookAround](#randomlookaround)
- [RandomStroll](#randomstroll)
- [ReactToBell](#reacttobell)
- [ResetProfession](#resetprofession)
- [ResetRaidStatus](#resetraidstatus)
- [RingBell](#ringbell)
- [RunOne](#runone)
- [SetClosestHomeAsWalkTarget](#setclosesthomeaswalktarget)
- [SetEntityLookTarget](#setentitylooktarget)
- [SetEntityLookTargetSometimes](#setentitylooktargetsometimes)
- [SetEntityLookTargetSometimes.Ticker](#setentitylooktargetsometimes.ticker)
- [SetHiddenState](#sethiddenstate)
- [SetLookAndInteract](#setlookandinteract)
- [SetRaidStatus](#setraidstatus)
- [SetWalkTargetAwayFrom](#setwalktargetawayfrom)
- [SetWalkTargetFromAttackTargetIfTargetOutOfReach](#setwalktargetfromattacktargetiftargetoutofreach)
- [SetWalkTargetFromBlockMemory](#setwalktargetfromblockmemory)
- [SetWalkTargetFromLookTarget](#setwalktargetfromlooktarget)
- [ShowTradesToPlayer](#showtradestoplayer)
- [ShufflingList](#shufflinglist)
- [ShufflingList.WeightedEntry](#shufflinglist.weightedentry)
- [SleepInBed](#sleepinbed)
- [SocializeAtBell](#socializeatbell)
- [StartAttacking](#startattacking)
- [StartCelebratingIfTargetDead](#startcelebratingiftargetdead)
- [StayCloseToTarget](#stayclosetotarget)
- [StopAttackingIfTargetInvalid](#stopattackingiftargetinvalid)
- [StopBeingAngryIfTargetDead](#stopbeingangryiftargetdead)
- [StrollAroundPoi](#strollaroundpoi)
- [StrollToPoi](#strolltopoi)
- [StrollToPoiList](#strolltopoilist)
- [Swim](#swim)
- [TradeWithVillager](#tradewithvillager)
- [TriggerGate](#triggergate)
- [TryFindLand](#tryfindland)
- [TryFindLandNearWater](#tryfindlandnearwater)
- [TryFindWater](#tryfindwater)
- [TryLaySpawnOnWaterNearLand](#trylayspawnonwaternearland)
- [UpdateActivityFromSchedule](#updateactivityfromschedule)
- [UseBonemeal](#usebonemeal)
- [ValidateNearbyPoi](#validatenearbypoi)
- [VillageBoundRandomStroll](#villageboundrandomstroll)
- [VillagerCalmDown](#villagercalmdown)
- [VillagerGoalPackages](#villagergoalpackages)
- [VillagerMakeLove](#villagermakelove)
- [VillagerPanicTrigger](#villagerpanictrigger)
- [WakeUp](#wakeup)
- [WorkAtComposter](#workatcomposter)
- [WorkAtPoi](#workatpoi)
- [YieldJobSite](#yieldjobsite)
## AcquirePoi

*class* `net.minecraft.world.entity.ai.behavior.AcquirePoi`

### Fields
- `public static final int SCAN_RANGE` (= 48)

### Methods
- `public static BehaviorControl<PathfinderMob> create(Predicate<Holder<PoiType>> p_259994_,  MemoryModuleType<GlobalPos> p_259167_,  boolean p_259077_,  Optional<Byte> p_259824_)`
- `public static BehaviorControl<PathfinderMob> create(Predicate<Holder<PoiType>> p_260007_,  MemoryModuleType<GlobalPos> p_259129_,  MemoryModuleType<GlobalPos> p_260194_,  boolean p_259108_,  Optional<Byte> p_260129_)`
- `@Nullable public static Path findPathToPois(Mob p_217098_,  Set<com.mojang.datafixers.util.Pair<Holder<PoiType>,BlockPos>> p_217099_)`

## AcquirePoi.JitteredLinearRetry

*class* `net.minecraft.world.entity.ai.behavior.AcquirePoi.JitteredLinearRetry`

Enclosing class: AcquirePoi

### Fields
- `private static final int MIN_INTERVAL_INCREASE` (= 40)
- `private static final int MAX_INTERVAL_INCREASE` (= 80)
- `private static final int MAX_RETRY_PATHFINDING_INTERVAL` (= 400)
- `private final RandomSource random`
- `private long previousAttemptTimestamp`
- `private long nextScheduledAttemptTimestamp`
- `private int currentDelay`

### Methods
- `public void markAttempt(long p_22381_)`
- `public boolean isStillValid(long p_22383_)`
- `public boolean shouldRetry(long p_22385_)`
- `public String toString()`

## AnimalMakeLove

*class* `net.minecraft.world.entity.ai.behavior.AnimalMakeLove`

### Fields
- `private static final int BREED_RANGE` (= 3)
- `private static final int MIN_DURATION` (= 60)
- `private static final int MAX_DURATION` (= 110)
- `private final EntityType<? extends Animal> partnerType`
- `private final float speedModifier`
- `private long spawnChildAtTime`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_22401_,  Animal p_22402_)`
- `protected void start(ServerLevel p_22404_,  Animal p_22405_,  long p_22406_)`
- `protected boolean canStillUse(ServerLevel p_22416_,  Animal p_22417_,  long p_22418_)`
- `protected void tick(ServerLevel p_22428_,  Animal p_22429_,  long p_22430_)`
- `protected void stop(ServerLevel p_22438_,  Animal p_22439_,  long p_22440_)`
- `private Animal getBreedTarget(Animal p_22410_)`
- `private boolean hasBreedTargetOfRightType(Animal p_22422_)`
- `private Optional<? extends Animal> findValidBreedPartner(Animal p_22432_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tickOrStop`, `timedOut`, `tryStart`

## AnimalPanic

*class* `net.minecraft.world.entity.ai.behavior.AnimalPanic`

### Fields
- `private static final int PANIC_MIN_DURATION` (= 100)
- `private static final int PANIC_MAX_DURATION` (= 120)
- `private static final int PANIC_DISTANCE_HORIZONTAL` (= 5)
- `private static final int PANIC_DISTANCE_VERTICAL` (= 4)
- `private static final Predicate<PathfinderMob> DEFAULT_SHOULD_PANIC_PREDICATE`
- `private final float speedMultiplier`
- `private final Predicate<PathfinderMob> shouldPanic`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_275286_,  PathfinderMob p_275721_)`
- `protected boolean canStillUse(ServerLevel p_147391_,  PathfinderMob p_147392_,  long p_147393_)`
- `protected void start(ServerLevel p_147399_,  PathfinderMob p_147400_,  long p_147401_)`
- `protected void stop(ServerLevel p_217118_,  PathfinderMob p_217119_,  long p_217120_)`
- `protected void tick(ServerLevel p_147403_,  PathfinderMob p_147404_,  long p_147405_)`
- `@Nullable private Vec3 getPanicPos(PathfinderMob p_196639_,  ServerLevel p_196640_)`
- `private Optional<BlockPos> lookForWater(BlockGetter p_196642_,  Entity p_196643_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tickOrStop`, `timedOut`, `tryStart`

## AssignProfessionFromJobSite

*class* `net.minecraft.world.entity.ai.behavior.AssignProfessionFromJobSite`

### Methods
- `public static BehaviorControl<Villager> create()`

## BabyFollowAdult

*class* `net.minecraft.world.entity.ai.behavior.BabyFollowAdult`

### Methods
- `public static OneShot<AgeableMob> create(UniformInt p_260109_,  float p_259621_)`
- `public static OneShot<AgeableMob> create(UniformInt p_259321_,  Function<LivingEntity,Float> p_259190_)`

## BackUpIfTooClose

*class* `net.minecraft.world.entity.ai.behavior.BackUpIfTooClose`

### Methods
- `public static OneShot<Mob> create(int p_259782_,  float p_259071_)`

## BecomePassiveIfMemoryPresent

*class* `net.minecraft.world.entity.ai.behavior.BecomePassiveIfMemoryPresent`

### Methods
- `public static BehaviorControl<LivingEntity> create(MemoryModuleType<?> p_259988_,  int p_260143_)`

## Behavior

*class* `net.minecraft.world.entity.ai.behavior.Behavior`

### Fields
- `public static final int DEFAULT_DURATION` (= 60)
- `protected final Map<MemoryModuleType<?>,MemoryStatus> entryCondition`
- `private Behavior.Status status`
- `private long endTimestamp`
- `private final int minDuration`
- `private final int maxDuration`

### Methods
- `public Behavior.Status getStatus()`
- `public final boolean tryStart(ServerLevel p_22555_,  E p_22556_,  long p_22557_)`
- `protected void start(ServerLevel p_22540_,  E p_22541_,  long p_22542_)`
- `public final void tickOrStop(ServerLevel p_22559_,  E p_22560_,  long p_22561_)`
- `protected void tick(ServerLevel p_22551_,  E p_22552_,  long p_22553_)`
- `public final void doStop(ServerLevel p_22563_,  E p_22564_,  long p_22565_)`
- `protected void stop(ServerLevel p_22548_,  E p_22549_,  long p_22550_)`
- `protected boolean canStillUse(ServerLevel p_22545_,  E p_22546_,  long p_22547_)`
- `protected boolean timedOut(long p_22537_)`
- `protected boolean checkExtraStartConditions(ServerLevel p_22538_,  E p_22539_)`
- `public String debugString()`
- `protected boolean hasRequiredMemories(E p_22544_)`

## BehaviorControl

*interface* `net.minecraft.world.entity.ai.behavior.BehaviorControl`

### Methods
- `Behavior.Status getStatus()`
- `boolean tryStart(ServerLevel p_259494_,  E p_259608_,  long p_260186_)`
- `void tickOrStop(ServerLevel p_259926_,  E p_260016_,  long p_259089_)`
- `void doStop(ServerLevel p_259056_,  E p_259620_,  long p_260105_)`
- `String debugString()`

## BehaviorUtils

*class* `net.minecraft.world.entity.ai.behavior.BehaviorUtils`

### Methods
- `public static void lockGazeAndWalkToEachOther(LivingEntity p_22603_,  LivingEntity p_22604_,  float p_22605_)`
- `public static boolean entityIsVisible(Brain<?> p_22637_,  LivingEntity p_22638_)`
- `public static boolean targetIsValid(Brain<?> p_22640_,  MemoryModuleType<? extends LivingEntity> p_22641_,  EntityType<?> p_22642_)`
- `private static boolean targetIsValid(Brain<?> p_22644_,  MemoryModuleType<? extends LivingEntity> p_22645_,  Predicate<LivingEntity> p_22646_)`
- `private static void lookAtEachOther(LivingEntity p_22671_,  LivingEntity p_22672_)`
- `public static void lookAtEntity(LivingEntity p_22596_,  LivingEntity p_22597_)`
- `private static void setWalkAndLookTargetMemoriesToEachOther(LivingEntity p_22661_,  LivingEntity p_22662_,  float p_22663_)`
- `public static void setWalkAndLookTargetMemories(LivingEntity p_22591_,  Entity p_22592_,  float p_22593_,  int p_22594_)`
- `public static void setWalkAndLookTargetMemories(LivingEntity p_22618_,  BlockPos p_22619_,  float p_22620_,  int p_22621_)`
- `public static void setWalkAndLookTargetMemories(LivingEntity p_217129_,  PositionTracker p_217130_,  float p_217131_,  int p_217132_)`
- `public static void throwItem(LivingEntity p_22614_,  ItemStack p_22615_,  Vec3 p_22616_)`
- `public static void throwItem(LivingEntity p_217134_,  ItemStack p_217135_,  Vec3 p_217136_,  Vec3 p_217137_,  float p_217138_)`
- `public static SectionPos findSectionClosestToVillage(ServerLevel p_22582_,  SectionPos p_22583_,  int p_22584_)`
- `public static boolean isWithinAttackRange(Mob p_22633_,  LivingEntity p_22634_,  int p_22635_)`
- `public static boolean isOtherTargetMuchFurtherAwayThanCurrentAttackTarget(LivingEntity p_22599_,  LivingEntity p_22600_,  double p_22601_)`
- `public static boolean canSee(LivingEntity p_22668_,  LivingEntity p_22669_)`
- `public static LivingEntity getNearestTarget(LivingEntity p_22626_,  Optional<LivingEntity> p_22627_,  LivingEntity p_22628_)`
- `public static LivingEntity getTargetNearestMe(LivingEntity p_22607_,  LivingEntity p_22608_,  LivingEntity p_22609_)`
- `public static Optional<LivingEntity> getLivingEntityFromUUIDMemory(LivingEntity p_22611_,  MemoryModuleType<UUID> p_22612_)`
- `@Nullable public static Vec3 getRandomSwimmablePos(PathfinderMob p_147445_,  int p_147446_,  int p_147447_)`
- `public static boolean isBreeding(LivingEntity p_217127_)`

## BlockPosTracker

*class* `net.minecraft.world.entity.ai.behavior.BlockPosTracker`

### Fields
- `private final BlockPos blockPos`
- `private final Vec3 centerPosition`

### Methods
- `public Vec3 currentPosition()`
- `public BlockPos currentBlockPosition()`
- `public boolean isVisibleBy(LivingEntity p_22679_)`
- `public String toString()`

## CelebrateVillagersSurvivedRaid

*class* `net.minecraft.world.entity.ai.behavior.CelebrateVillagersSurvivedRaid`

### Fields
- `@Nullable private Raid currentRaid`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_22690_,  Villager p_22691_)`
- `protected boolean canStillUse(ServerLevel p_22693_,  Villager p_22694_,  long p_22695_)`
- `protected void stop(ServerLevel p_22704_,  Villager p_22705_,  long p_22706_)`
- `protected void tick(ServerLevel p_22712_,  Villager p_22713_,  long p_22714_)`
- `private ItemStack getFirework(DyeColor p_22697_,  int p_22698_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `start`, `tickOrStop`, `timedOut`, `tryStart`

## Class Behavior.Status

*enum* `net.minecraft.world.entity.ai.behavior.Class Behavior.Status`

Enclosing class: Behavior<E extends LivingEntity>

### Methods
- `public static Behavior.Status[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Behavior.Status valueOf(String name)`
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

## Class CrossbowAttack.CrossbowState

*enum* `net.minecraft.world.entity.ai.behavior.Class CrossbowAttack.CrossbowState`

Enclosing class: CrossbowAttack<E extends Mob & CrossbowAttackMob, T extends LivingEntity>

### Methods
- `public static CrossbowAttack.CrossbowState[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static CrossbowAttack.CrossbowState valueOf(String name)`
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

## Class GateBehavior.OrderPolicy

*enum* `net.minecraft.world.entity.ai.behavior.Class GateBehavior.OrderPolicy`

Enclosing class: GateBehavior<E extends LivingEntity>

### Fields
- `private final Consumer<ShufflingList<?>> consumer`

### Methods
- `public static GateBehavior.OrderPolicy[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static GateBehavior.OrderPolicy valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public void apply(ShufflingList<?> p_147528_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class GateBehavior.RunningPolicy

*enum* `net.minecraft.world.entity.ai.behavior.Class GateBehavior.RunningPolicy`

Enclosing class: GateBehavior<E extends LivingEntity>

### Methods
- `public static GateBehavior.RunningPolicy[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static GateBehavior.RunningPolicy valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public abstract <E extends LivingEntity> void apply(Stream<BehaviorControl<? super E>> p_147532_,  ServerLevel p_147533_,  E p_147534_,  long p_147535_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## CopyMemoryWithExpiry

*class* `net.minecraft.world.entity.ai.behavior.CopyMemoryWithExpiry`

### Methods
- `public static <E extends LivingEntity, T> BehaviorControl<E> create(Predicate<E> p_260270_,  MemoryModuleType<? extends T> p_260344_,  MemoryModuleType<T> p_260014_,  UniformInt p_259596_)`

## CountDownCooldownTicks

*class* `net.minecraft.world.entity.ai.behavior.CountDownCooldownTicks`

### Fields
- `private final MemoryModuleType<Integer> cooldownTicks`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `private Optional<Integer> getCooldownTickMemory(LivingEntity p_147466_)`
- `protected boolean timedOut(long p_147464_)`
- `protected boolean canStillUse(ServerLevel p_147468_,  LivingEntity p_147469_,  long p_147470_)`
- `protected void tick(ServerLevel p_147476_,  LivingEntity p_147477_,  long p_147478_)`
- `protected void stop(ServerLevel p_147472_,  LivingEntity p_147473_,  long p_147474_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `checkExtraStartConditions`, `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `start`, `tickOrStop`, `tryStart`

## Croak

*class* `net.minecraft.world.entity.ai.behavior.Croak`

### Fields
- `private static final int CROAK_TICKS` (= 60)
- `private static final int TIME_OUT_DURATION` (= 100)
- `private int croakCounter`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_217151_,  Frog p_217152_)`
- `protected boolean canStillUse(ServerLevel p_217154_,  Frog p_217155_,  long p_217156_)`
- `protected void start(ServerLevel p_217162_,  Frog p_217163_,  long p_217164_)`
- `protected void stop(ServerLevel p_217170_,  Frog p_217171_,  long p_217172_)`
- `protected void tick(ServerLevel p_217178_,  Frog p_217179_,  long p_217180_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tickOrStop`, `timedOut`, `tryStart`

## CrossbowAttack

*class* `net.minecraft.world.entity.ai.behavior.CrossbowAttack`

### Fields
- `private static final int TIMEOUT` (= 1200)
- `private int attackDelay`
- `private CrossbowAttack.CrossbowState crossbowState`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_22778_,  E p_22779_)`
- `protected boolean canStillUse(ServerLevel p_22781_,  E p_22782_,  long p_22783_)`
- `protected void tick(ServerLevel p_22794_,  E p_22795_,  long p_22796_)`
- `protected void stop(ServerLevel p_22805_,  E p_22806_,  long p_22807_)`
- `private void crossbowAttack(E p_22787_,  LivingEntity p_22788_)`
- `private void lookAtTarget(Mob p_22798_,  LivingEntity p_22799_)`
- `private static LivingEntity getAttackTarget(LivingEntity p_22785_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `start`, `tickOrStop`, `timedOut`, `tryStart`

## DismountOrSkipMounting

*class* `net.minecraft.world.entity.ai.behavior.DismountOrSkipMounting`

### Methods
- `public static <E extends LivingEntity> BehaviorControl<E> create(int p_259945_,  BiPredicate<E,Entity> p_259837_)`
- `private static boolean isVehicleValid(LivingEntity p_259293_,  Entity p_260023_,  int p_259048_)`

## DoNothing

*class* `net.minecraft.world.entity.ai.behavior.DoNothing`

### Fields
- `private final int minDuration`
- `private final int maxDuration`
- `private Behavior.Status status`
- `private long endTimestamp`

### Methods
- `public Behavior.Status getStatus()`
- `public final boolean tryStart(ServerLevel p_259135_,  LivingEntity p_259195_,  long p_259189_)`
- `public final void tickOrStop(ServerLevel p_259225_,  LivingEntity p_259218_,  long p_259803_)`
- `public final void doStop(ServerLevel p_260265_,  LivingEntity p_259336_,  long p_259826_)`
- `public String debugString()`

## EntityTracker

*class* `net.minecraft.world.entity.ai.behavior.EntityTracker`

### Fields
- `private final Entity entity`
- `private final boolean trackEyeHeight`

### Methods
- `public Vec3 currentPosition()`
- `public BlockPos currentBlockPosition()`
- `public boolean isVisibleBy(LivingEntity p_22853_)`
- `public Entity getEntity()`
- `public String toString()`

## EraseMemoryIf

*class* `net.minecraft.world.entity.ai.behavior.EraseMemoryIf`

### Methods
- `public static <E extends LivingEntity> BehaviorControl<E> create(Predicate<E> p_260241_,  MemoryModuleType<?> p_259406_)`

## FollowTemptation

*class* `net.minecraft.world.entity.ai.behavior.FollowTemptation`

### Fields
- `public static final int TEMPTATION_COOLDOWN` (= 100)
- `public static final double DEFAULT_CLOSE_ENOUGH_DIST` (= 2.5)
- `public static final double BACKED_UP_CLOSE_ENOUGH_DIST` (= 3.5)
- `private final Function<LivingEntity,Float> speedModifier`
- `private final Function<LivingEntity,Double> closeEnoughDistance`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected float getSpeedModifier(PathfinderMob p_147498_)`
- `private Optional<Player> getTemptingPlayer(PathfinderMob p_147509_)`
- `protected boolean timedOut(long p_147488_)`
- `protected boolean canStillUse(ServerLevel p_147494_,  PathfinderMob p_147495_,  long p_147496_)`
- `protected void start(ServerLevel p_147505_,  PathfinderMob p_147506_,  long p_147507_)`
- `protected void stop(ServerLevel p_147515_,  PathfinderMob p_147516_,  long p_147517_)`
- `protected void tick(ServerLevel p_147523_,  PathfinderMob p_147524_,  long p_147525_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `checkExtraStartConditions`, `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tickOrStop`, `tryStart`

## GateBehavior

*class* `net.minecraft.world.entity.ai.behavior.GateBehavior`

### Fields
- `private final Map<MemoryModuleType<?>,MemoryStatus> entryCondition`
- `private final Set<MemoryModuleType<?>> exitErasedMemories`
- `private final GateBehavior.OrderPolicy orderPolicy`
- `private final GateBehavior.RunningPolicy runningPolicy`
- `private final ShufflingList<BehaviorControl<? super E extends LivingEntity>> behaviors`
- `private Behavior.Status status`

### Methods
- `public Behavior.Status getStatus()`
- `private boolean hasRequiredMemories(E p_259419_)`
- `public final boolean tryStart(ServerLevel p_259362_,  E p_259746_,  long p_259560_)`
- `public final void tickOrStop(ServerLevel p_259934_,  E p_259790_,  long p_260259_)`
- `public final void doStop(ServerLevel p_259962_,  E p_260250_,  long p_259847_)`
- `public String debugString()`
- `public String toString()`

## GiveGiftToHero

*class* `net.minecraft.world.entity.ai.behavior.GiveGiftToHero`

### Fields
- `private static final int THROW_GIFT_AT_DISTANCE` (= 5)
- `private static final int MIN_TIME_BETWEEN_GIFTS` (= 600)
- `private static final int MAX_TIME_BETWEEN_GIFTS` (= 6600)
- `private static final int TIME_TO_DELAY_FOR_HEAD_TO_FINISH_TURNING` (= 20)
- `private static final Map<VillagerProfession,ResourceLocation> GIFTS`
- `private static final float SPEED_MODIFIER` (= 0.5f)
- `private int timeUntilNextGift`
- `private boolean giftGivenDuringThisRun`
- `private long timeSinceStart`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_23003_,  Villager p_23004_)`
- `protected void start(ServerLevel p_23006_,  Villager p_23007_,  long p_23008_)`
- `protected boolean canStillUse(ServerLevel p_23026_,  Villager p_23027_,  long p_23028_)`
- `protected void tick(ServerLevel p_23036_,  Villager p_23037_,  long p_23038_)`
- `protected void stop(ServerLevel p_23046_,  Villager p_23047_,  long p_23048_)`
- `private void throwGift(Villager p_23012_,  LivingEntity p_23013_)`
- `private List<ItemStack> getItemToThrow(Villager p_23010_)`
- `private boolean isHeroVisible(Villager p_23030_)`
- `private Optional<Player> getNearestTargetableHero(Villager p_23040_)`
- `private boolean isHero(Player p_23018_)`
- `private boolean isWithinThrowingDistance(Villager p_23015_,  Player p_23016_)`
- `private static int calculateTimeUntilNextGift(ServerLevel p_22994_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tickOrStop`, `timedOut`, `tryStart`

## GoAndGiveItemsToTarget

*class* `net.minecraft.world.entity.ai.behavior.GoAndGiveItemsToTarget`

### Fields
- `private static final int CLOSE_ENOUGH_DISTANCE_TO_TARGET` (= 3)
- `private static final int ITEM_PICKUP_COOLDOWN_AFTER_THROWING` (= 60)
- `private final Function<LivingEntity,Optional<PositionTracker>> targetPositionGetter`
- `private final float speedModifier`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_217196_,  E p_217197_)`
- `protected boolean canStillUse(ServerLevel p_217218_,  E p_217219_,  long p_217220_)`
- `protected void start(ServerLevel p_217199_,  E p_217200_,  long p_217201_)`
- `protected void tick(ServerLevel p_217226_,  E p_217227_,  long p_217228_)`
- `private void triggerDropItemOnBlock(PositionTracker p_217214_,  ItemStack p_217215_,  ServerPlayer p_217216_)`
- `private boolean canThrowItemToTarget(E p_217203_)`
- `private static Vec3 getThrowPosition(PositionTracker p_217212_)`
- `public static void throwItem(LivingEntity p_217208_,  ItemStack p_217209_,  Vec3 p_217210_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `stop`, `tickOrStop`, `timedOut`, `tryStart`

## GoToClosestVillage

*class* `net.minecraft.world.entity.ai.behavior.GoToClosestVillage`

### Methods
- `public static BehaviorControl<Villager> create(float p_260342_,  int p_259691_)`

## GoToPotentialJobSite

*class* `net.minecraft.world.entity.ai.behavior.GoToPotentialJobSite`

### Fields
- `private static final int TICKS_UNTIL_TIMEOUT` (= 1200)
- `final float speedModifier`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_23103_,  Villager p_23104_)`
- `protected boolean canStillUse(ServerLevel p_23106_,  Villager p_23107_,  long p_23108_)`
- `protected void tick(ServerLevel p_23121_,  Villager p_23122_,  long p_23123_)`
- `protected void stop(ServerLevel p_23129_,  Villager p_23130_,  long p_23131_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `start`, `tickOrStop`, `timedOut`, `tryStart`

## GoToTargetLocation

*class* `net.minecraft.world.entity.ai.behavior.GoToTargetLocation`

### Methods
- `private static BlockPos getNearbyPos(Mob p_217251_,  BlockPos p_217252_)`
- `private static int getRandomOffset(RandomSource p_217247_)`
- `public static <E extends Mob> OneShot<E> create(MemoryModuleType<BlockPos> p_259938_,  int p_259740_,  float p_259957_)`

## GoToWantedItem

*class* `net.minecraft.world.entity.ai.behavior.GoToWantedItem`

### Methods
- `public static BehaviorControl<LivingEntity> create(float p_260027_,  boolean p_259769_,  int p_259671_)`
- `public static <E extends LivingEntity> BehaviorControl<E> create(Predicate<E> p_259490_,  float p_260346_,  boolean p_259637_,  int p_259054_)`

## HarvestFarmland

*class* `net.minecraft.world.entity.ai.behavior.HarvestFarmland`

### Fields
- `private static final int HARVEST_DURATION` (= 200)
- `public static final float SPEED_MODIFIER` (= 0.5f)
- `@Nullable private BlockPos aboveFarmlandPos`
- `private long nextOkStartTime`
- `private int timeWorkedSoFar`
- `private final List<BlockPos> validFarmlandAroundVillager`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_23174_,  Villager p_23175_)`
- `@Nullable private BlockPos getValidFarmland(ServerLevel p_23165_)`
- `private boolean validPos(BlockPos p_23181_,  ServerLevel p_23182_)`
- `protected void start(ServerLevel p_23177_,  Villager p_23178_,  long p_23179_)`
- `protected void stop(ServerLevel p_23188_,  Villager p_23189_,  long p_23190_)`
- `protected void tick(ServerLevel p_23196_,  Villager p_23197_,  long p_23198_)`
- `protected boolean canStillUse(ServerLevel p_23204_,  Villager p_23205_,  long p_23206_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tickOrStop`, `timedOut`, `tryStart`

## InsideBrownianWalk

*class* `net.minecraft.world.entity.ai.behavior.InsideBrownianWalk`

### Methods
- `public static BehaviorControl<PathfinderMob> create(float p_259775_)`

## InteractWith

*class* `net.minecraft.world.entity.ai.behavior.InteractWith`

### Methods
- `public static <T extends LivingEntity> BehaviorControl<LivingEntity> of(EntityType<? extends T> p_259703_,  int p_260224_,  MemoryModuleType<T> p_259995_,  float p_259991_,  int p_259933_)`
- `public static <E extends LivingEntity, T extends LivingEntity> BehaviorControl<E> of(EntityType<? extends T> p_259366_,  int p_259564_,  Predicate<E> p_259570_,  Predicate<T> p_260254_,  MemoryModuleType<T> p_260229_,  float p_259369_,  int p_259065_)`

## InteractWithDoor

*class* `net.minecraft.world.entity.ai.behavior.InteractWithDoor`

### Fields
- `private static final int COOLDOWN_BEFORE_RERUNNING_IN_SAME_NODE` (= 20)
- `private static final double SKIP_CLOSING_DOOR_IF_FURTHER_AWAY_THAN` (= 3.0)
- `private static final double MAX_DISTANCE_TO_HOLD_DOOR_OPEN_FOR_OTHER_MOBS` (= 2.0)

### Methods
- `public static BehaviorControl<LivingEntity> create()`
- `public static void closeDoorsThatIHaveOpenedOrPassedThrough(ServerLevel p_260343_,  LivingEntity p_259371_,  @Nullable  Node p_259408_,  @Nullable  Node p_260013_,  Set<GlobalPos> p_259401_,  Optional<List<LivingEntity>> p_260015_)`
- `private static boolean areOtherMobsComingThroughDoor(LivingEntity p_260091_,  BlockPos p_259764_,  Optional<List<LivingEntity>> p_259365_)`
- `private static boolean isMobComingThroughDoor(Brain<?> p_259548_,  BlockPos p_259146_)`
- `private static boolean isDoorTooFarAway(ServerLevel p_23308_,  LivingEntity p_23309_,  GlobalPos p_23310_)`
- `private static Optional<Set<GlobalPos>> rememberDoorToClose(MemoryAccessor<com.mojang.datafixers.kinds.OptionalBox.Mu,Set<GlobalPos>> p_262178_,  Optional<Set<GlobalPos>> p_261639_,  ServerLevel p_261528_,  BlockPos p_261874_)`

## JumpOnBed

*class* `net.minecraft.world.entity.ai.behavior.JumpOnBed`

### Fields
- `private static final int MAX_TIME_TO_REACH_BED` (= 100)
- `private static final int MIN_JUMPS` (= 3)
- `private static final int MAX_JUMPS` (= 6)
- `private static final int COOLDOWN_BETWEEN_JUMPS` (= 5)
- `private final float speedModifier`
- `@Nullable private BlockPos targetBed`
- `private int remainingTimeToReachBed`
- `private int remainingJumps`
- `private int remainingCooldownUntilNextJump`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_23346_,  Mob p_23347_)`
- `protected void start(ServerLevel p_23349_,  Mob p_23350_,  long p_23351_)`
- `protected void stop(ServerLevel p_23372_,  Mob p_23373_,  long p_23374_)`
- `protected boolean canStillUse(ServerLevel p_23383_,  Mob p_23384_,  long p_23385_)`
- `protected boolean timedOut(long p_23337_)`
- `protected void tick(ServerLevel p_23394_,  Mob p_23395_,  long p_23396_)`
- `private void startWalkingTowardsBed(Mob p_23362_,  BlockPos p_23363_)`
- `private boolean nearBed(ServerLevel p_23369_,  Mob p_23370_)`
- `private boolean onOrOverBed(ServerLevel p_23380_,  Mob p_23381_)`
- `private boolean onBedSurface(ServerLevel p_23391_,  Mob p_23392_)`
- `private boolean isBed(ServerLevel p_23357_,  BlockPos p_23358_)`
- `private Optional<BlockPos> getNearestBed(Mob p_23360_)`
- `private boolean tiredOfWalking(ServerLevel p_23398_,  Mob p_23399_)`
- `private boolean tiredOfJumping(ServerLevel p_23401_,  Mob p_23402_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tickOrStop`, `tryStart`

## LocateHidingPlace

*class* `net.minecraft.world.entity.ai.behavior.LocateHidingPlace`

### Methods
- `public static OneShot<LivingEntity> create(int p_259202_,  float p_259881_,  int p_259982_)`

## LongJumpMidJump

*class* `net.minecraft.world.entity.ai.behavior.LongJumpMidJump`

### Fields
- `public static final int TIME_OUT_DURATION` (= 100)
- `private final UniformInt timeBetweenLongJumps`
- `private final SoundEvent landingSound`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean canStillUse(ServerLevel p_147603_,  Mob p_147604_,  long p_147605_)`
- `protected void start(ServerLevel p_147611_,  Mob p_147612_,  long p_147613_)`
- `protected void stop(ServerLevel p_147619_,  Mob p_147620_,  long p_147621_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `checkExtraStartConditions`, `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tick`, `tickOrStop`, `timedOut`, `tryStart`

## LongJumpToPreferredBlock

*class* `net.minecraft.world.entity.ai.behavior.LongJumpToPreferredBlock`

### Fields
- `private final TagKey<Block> preferredBlockTag`
- `private final float preferredBlocksChance`
- `private final List<LongJumpToRandomPos.PossibleJump> notPrefferedJumpCandidates`
- `private boolean currentlyWantingPreferredOnes`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.LongJumpToRandomPos`: `chosenJump`, `FIND_JUMP_TRIES`, `findJumpTries`, `initialPosition`, `jumpCandidates`, `maxJumpVelocity`, `maxLongJumpHeight`, `maxLongJumpWidth`, `MIN_PATHFIND_DISTANCE_TO_VALID_JUMP`, `prepareJumpStart`
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected void start(ServerLevel p_217279_,  E p_217280_,  long p_217281_)`
- `protected Optional<LongJumpToRandomPos.PossibleJump> getJumpCandidate(ServerLevel p_217273_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.LongJumpToRandomPos`: `calculateOptimalJumpVector`, `canStillUse`, `checkExtraStartConditions`, `defaultAcceptableLandingSpot`, `pickCandidate`, `tick`
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `stop`, `tickOrStop`, `timedOut`, `tryStart`

## LongJumpToRandomPos

*class* `net.minecraft.world.entity.ai.behavior.LongJumpToRandomPos`

### Fields
- `protected static final int FIND_JUMP_TRIES` (= 20)
- `private static final int PREPARE_JUMP_DURATION` (= 40)
- `protected static final int MIN_PATHFIND_DISTANCE_TO_VALID_JUMP` (= 8)
- `private static final int TIME_OUT_DURATION` (= 200)
- `private static final List<Integer> ALLOWED_ANGLES`
- `private final UniformInt timeBetweenLongJumps`
- `protected final int maxLongJumpHeight`
- `protected final int maxLongJumpWidth`
- `protected final float maxJumpVelocity`
- `protected List<LongJumpToRandomPos.PossibleJump> jumpCandidates`
- `protected Optional<Vec3> initialPosition`
- `@Nullable protected Vec3 chosenJump`
- `protected int findJumpTries`
- `protected long prepareJumpStart`
- `private final Function<E extends Mob,SoundEvent> getJumpSound`
- `private final BiPredicate<E extends Mob,BlockPos> acceptableLandingSpot`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `public static <E extends Mob> boolean defaultAcceptableLandingSpot(E p_251540_,  BlockPos p_248879_)`
- `protected boolean checkExtraStartConditions(ServerLevel p_147650_,  Mob p_147651_)`
- `protected boolean canStillUse(ServerLevel p_147653_,  Mob p_147654_,  long p_147655_)`
- `protected void start(ServerLevel p_147676_,  E p_147677_,  long p_147678_)`
- `protected void tick(ServerLevel p_147680_,  E p_147681_,  long p_147682_)`
- `protected void pickCandidate(ServerLevel p_217319_,  E p_217320_,  long p_217321_)`
- `protected Optional<LongJumpToRandomPos.PossibleJump> getJumpCandidate(ServerLevel p_217299_)`
- `private boolean isAcceptableLandingPosition(ServerLevel p_217300_,  E p_217301_,  BlockPos p_217302_)`
- `@Nullable protected Vec3 calculateOptimalJumpVector(Mob p_217304_,  Vec3 p_217305_)`
- `@Nullable private Vec3 calculateJumpVectorForAngle(Mob p_217307_,  Vec3 p_217308_,  int p_217309_)`
- `private boolean isClearTransition(Mob p_249070_,  EntityDimensions p_250156_,  Vec3 p_251660_,  Vec3 p_250101_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `stop`, `tickOrStop`, `timedOut`, `tryStart`

## LongJumpToRandomPos.PossibleJump

*class* `net.minecraft.world.entity.ai.behavior.LongJumpToRandomPos.PossibleJump`

Enclosing class: LongJumpToRandomPos<E extends Mob>

### Fields
- `private final BlockPos jumpTarget`

### Methods
- `public BlockPos getJumpTarget()`

### Inherited methods
- from `net.minecraft.util.random.WeightedEntry.IntrusiveBase`: `getWeight`

## LookAndFollowTradingPlayerSink

*class* `net.minecraft.world.entity.ai.behavior.LookAndFollowTradingPlayerSink`

### Fields
- `private final float speedModifier`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_23445_,  Villager p_23446_)`
- `protected boolean canStillUse(ServerLevel p_23448_,  Villager p_23449_,  long p_23450_)`
- `protected void start(ServerLevel p_23458_,  Villager p_23459_,  long p_23460_)`
- `protected void stop(ServerLevel p_23466_,  Villager p_23467_,  long p_23468_)`
- `protected void tick(ServerLevel p_23474_,  Villager p_23475_,  long p_23476_)`
- `protected boolean timedOut(long p_23436_)`
- `private void followPlayer(Villager p_23452_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tickOrStop`, `tryStart`

## LookAtTargetSink

*class* `net.minecraft.world.entity.ai.behavior.LookAtTargetSink`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean canStillUse(ServerLevel p_23481_,  Mob p_23482_,  long p_23483_)`
- `protected void stop(ServerLevel p_23492_,  Mob p_23493_,  long p_23494_)`
- `protected void tick(ServerLevel p_23503_,  Mob p_23504_,  long p_23505_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `checkExtraStartConditions`, `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `start`, `tickOrStop`, `timedOut`, `tryStart`

## MeleeAttack

*class* `net.minecraft.world.entity.ai.behavior.MeleeAttack`

### Methods
- `public static OneShot<Mob> create(int p_259758_)`
- `private static boolean isHoldingUsableProjectileWeapon(Mob p_23528_)`

## Mount

*class* `net.minecraft.world.entity.ai.behavior.Mount`

### Fields
- `private static final int CLOSE_ENOUGH_TO_START_RIDING_DIST` (= 1)

### Methods
- `public static BehaviorControl<LivingEntity> create(float p_259363_)`

## MoveToSkySeeingSpot

*class* `net.minecraft.world.entity.ai.behavior.MoveToSkySeeingSpot`

### Methods
- `public static OneShot<LivingEntity> create(float p_259860_)`
- `@Nullable private static Vec3 getOutdoorPosition(ServerLevel p_23565_,  LivingEntity p_23566_)`
- `public static boolean hasNoBlocksAbove(ServerLevel p_23559_,  LivingEntity p_23560_,  BlockPos p_23561_)`

## MoveToTargetSink

*class* `net.minecraft.world.entity.ai.behavior.MoveToTargetSink`

### Fields
- `private static final int MAX_COOLDOWN_BEFORE_RETRYING` (= 40)
- `private int remainingCooldown`
- `@Nullable private Path path`
- `@Nullable private BlockPos lastTargetPos`
- `private float speedModifier`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_23583_,  Mob p_23584_)`
- `protected boolean canStillUse(ServerLevel p_23586_,  Mob p_23587_,  long p_23588_)`
- `protected void stop(ServerLevel p_23601_,  Mob p_23602_,  long p_23603_)`
- `protected void start(ServerLevel p_23609_,  Mob p_23610_,  long p_23611_)`
- `protected void tick(ServerLevel p_23617_,  Mob p_23618_,  long p_23619_)`
- `private boolean tryComputePath(Mob p_23593_,  WalkTarget p_23594_,  long p_23595_)`
- `private boolean reachedTarget(Mob p_23590_,  WalkTarget p_23591_)`
- `private static boolean isWalkTargetSpectator(WalkTarget p_277420_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tickOrStop`, `timedOut`, `tryStart`

## OneShot

*class* `net.minecraft.world.entity.ai.behavior.OneShot`

### Fields
- `private Behavior.Status status`

### Methods
- `public final Behavior.Status getStatus()`
- `public final boolean tryStart(ServerLevel p_260083_,  E p_259643_,  long p_259226_)`
- `public final void tickOrStop(ServerLevel p_259112_,  E p_259594_,  long p_259046_)`
- `public final void doStop(ServerLevel p_260215_,  E p_259970_,  long p_260273_)`
- `public String debugString()`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.declarative.Trigger`: `trigger`

## PlayTagWithOtherKids

*class* `net.minecraft.world.entity.ai.behavior.PlayTagWithOtherKids`

### Fields
- `private static final int MAX_FLEE_XZ_DIST` (= 20)
- `private static final int MAX_FLEE_Y_DIST` (= 8)
- `private static final float FLEE_SPEED_MODIFIER` (= 0.6000000238418579f)
- `private static final float CHASE_SPEED_MODIFIER` (= 0.6000000238418579f)
- `private static final int MAX_CHASERS_PER_TARGET` (= 5)
- `private static final int AVERAGE_WAIT_TIME_BETWEEN_RUNS` (= 10)

### Methods
- `public static BehaviorControl<PathfinderMob> create()`
- `private static void chaseKid(MemoryAccessor<?,LivingEntity> p_259811_,  MemoryAccessor<?,PositionTracker> p_259299_,  MemoryAccessor<?,WalkTarget> p_260056_,  LivingEntity p_259463_)`
- `private static Optional<LivingEntity> findSomeoneBeingChased(List<LivingEntity> p_259655_)`
- `private static Map<LivingEntity,Integer> checkHowManyChasersEachFriendHas(List<LivingEntity> p_259989_)`
- `private static LivingEntity whoAreYouChasing(LivingEntity p_23640_)`
- `private static boolean isChasingSomeone(LivingEntity p_23668_)`
- `private static boolean isFriendChasingMe(LivingEntity p_23642_,  LivingEntity p_23643_)`

## PoiCompetitorScan

*class* `net.minecraft.world.entity.ai.behavior.PoiCompetitorScan`

### Methods
- `public static BehaviorControl<Villager> create()`
- `private static Villager selectWinner(Villager p_23725_,  Villager p_23726_)`
- `private static boolean competesForSameJobsite(GlobalPos p_217330_,  Holder<PoiType> p_217331_,  Villager p_217332_)`
- `private static boolean hasMatchingProfession(Holder<PoiType> p_217334_,  VillagerProfession p_217335_)`

## PositionTracker

*interface* `net.minecraft.world.entity.ai.behavior.PositionTracker`

### Methods
- `Vec3 currentPosition()`
- `BlockPos currentBlockPosition()`
- `boolean isVisibleBy(LivingEntity p_23739_)`

## PrepareRamNearestTarget

*class* `net.minecraft.world.entity.ai.behavior.PrepareRamNearestTarget`

### Fields
- `public static final int TIME_OUT_DURATION` (= 160)
- `private final ToIntFunction<E extends PathfinderMob> getCooldownOnFail`
- `private final int minRamDistance`
- `private final int maxRamDistance`
- `private final float walkSpeed`
- `private final TargetingConditions ramTargeting`
- `private final int ramPrepareTime`
- `private final Function<E extends PathfinderMob,SoundEvent> getPrepareRamSound`
- `private Optional<Long> reachedRamPositionTimestamp`
- `private Optional<PrepareRamNearestTarget.RamCandidate> ramCandidate`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected void start(ServerLevel p_147736_,  PathfinderMob p_147737_,  long p_147738_)`
- `protected void stop(ServerLevel p_147762_,  E p_147763_,  long p_147764_)`
- `protected boolean canStillUse(ServerLevel p_147773_,  PathfinderMob p_147774_,  long p_147775_)`
- `protected void tick(ServerLevel p_147784_,  E p_147785_,  long p_147786_)`
- `private Vec3 getEdgeOfBlock(BlockPos p_147755_,  BlockPos p_147756_)`
- `private Optional<BlockPos> calculateRammingStartPosition(PathfinderMob p_147743_,  LivingEntity p_147744_)`
- `private boolean isWalkableBlock(PathfinderMob p_147746_,  BlockPos p_147747_)`
- `private void chooseRamPosition(PathfinderMob p_147766_,  LivingEntity p_147767_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `checkExtraStartConditions`, `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tickOrStop`, `timedOut`, `tryStart`

## PrepareRamNearestTarget.RamCandidate

*class* `net.minecraft.world.entity.ai.behavior.PrepareRamNearestTarget.RamCandidate`

Enclosing class: PrepareRamNearestTarget<E extends PathfinderMob>

### Fields
- `private final BlockPos startPosition`
- `private final BlockPos targetPosition`
- `final LivingEntity target`

### Methods
- `public BlockPos getStartPosition()`
- `public BlockPos getTargetPosition()`
- `public LivingEntity getTarget()`

## RamTarget

*class* `net.minecraft.world.entity.ai.behavior.RamTarget`

### Fields
- `public static final int TIME_OUT_DURATION` (= 200)
- `public static final float RAM_SPEED_FORCE_FACTOR` (= 1.649999976158142f)
- `private final Function<Goat,UniformInt> getTimeBetweenRams`
- `private final TargetingConditions ramTargeting`
- `private final float speed`
- `private final ToDoubleFunction<Goat> getKnockbackForce`
- `private Vec3 ramDirection`
- `private final Function<Goat,SoundEvent> getImpactSound`
- `private final Function<Goat,SoundEvent> getHornBreakSound`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_217349_,  Goat p_217350_)`
- `protected boolean canStillUse(ServerLevel p_217352_,  Goat p_217353_,  long p_217354_)`
- `protected void start(ServerLevel p_217359_,  Goat p_217360_,  long p_217361_)`
- `protected void tick(ServerLevel p_217366_,  Goat p_217367_,  long p_217368_)`
- `private boolean hasRammedHornBreakingBlock(ServerLevel p_217363_,  Goat p_217364_)`
- `protected void finishRam(ServerLevel p_217356_,  Goat p_217357_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `stop`, `tickOrStop`, `timedOut`, `tryStart`

## RandomLookAround

*class* `net.minecraft.world.entity.ai.behavior.RandomLookAround`

### Fields
- `private final IntProvider interval`
- `private final float maxYaw`
- `private final float minPitch`
- `private final float pitchRange`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected void start(ServerLevel p_250941_,  Mob p_248765_,  long p_251801_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `canStillUse`, `checkExtraStartConditions`, `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `stop`, `tick`, `tickOrStop`, `timedOut`, `tryStart`

## RandomStroll

*class* `net.minecraft.world.entity.ai.behavior.RandomStroll`

### Fields
- `private static final int MAX_XZ_DIST` (= 10)
- `private static final int MAX_Y_DIST` (= 7)
- `private static final int[][] SWIM_XY_DISTANCE_TIERS`

### Methods
- `public static OneShot<PathfinderMob> stroll(float p_260304_)`
- `public static OneShot<PathfinderMob> stroll(float p_260303_,  boolean p_259639_)`
- `public static BehaviorControl<PathfinderMob> stroll(float p_260204_,  int p_259502_,  int p_259891_)`
- `public static BehaviorControl<PathfinderMob> fly(float p_259119_)`
- `public static BehaviorControl<PathfinderMob> swim(float p_259469_)`
- `private static OneShot<PathfinderMob> strollFlyOrSwim(float p_260030_,  Function<PathfinderMob,Vec3> p_259912_,  Predicate<PathfinderMob> p_259088_)`
- `@Nullable private static Vec3 getTargetSwimPos(PathfinderMob p_259491_)`
- `@Nullable private static Vec3 getTargetFlyPos(PathfinderMob p_260316_,  int p_259038_,  int p_259696_)`

## ReactToBell

*class* `net.minecraft.world.entity.ai.behavior.ReactToBell`

### Methods
- `public static BehaviorControl<LivingEntity> create()`

## ResetProfession

*class* `net.minecraft.world.entity.ai.behavior.ResetProfession`

### Methods
- `public static BehaviorControl<Villager> create()`

## ResetRaidStatus

*class* `net.minecraft.world.entity.ai.behavior.ResetRaidStatus`

### Methods
- `public static BehaviorControl<LivingEntity> create()`

## RingBell

*class* `net.minecraft.world.entity.ai.behavior.RingBell`

### Fields
- `private static final float BELL_RING_CHANCE` (= 0.949999988079071f)
- `public static final int RING_BELL_FROM_DISTANCE` (= 3)

### Methods
- `public static BehaviorControl<LivingEntity> create()`

## RunOne

*class* `net.minecraft.world.entity.ai.behavior.RunOne`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.GateBehavior`: `debugString`, `doStop`, `getStatus`, `tickOrStop`, `toString`, `tryStart`

## SetClosestHomeAsWalkTarget

*class* `net.minecraft.world.entity.ai.behavior.SetClosestHomeAsWalkTarget`

### Fields
- `private static final int CACHE_TIMEOUT` (= 40)
- `private static final int BATCH_SIZE` (= 5)
- `private static final int RATE` (= 20)
- `private static final int OK_DISTANCE_SQR` (= 4)

### Methods
- `public static BehaviorControl<PathfinderMob> create(float p_259960_)`

## SetEntityLookTarget

*class* `net.minecraft.world.entity.ai.behavior.SetEntityLookTarget`

### Methods
- `public static BehaviorControl<LivingEntity> create(MobCategory p_259154_,  float p_260240_)`
- `public static OneShot<LivingEntity> create(EntityType<?> p_260318_,  float p_259522_)`
- `public static OneShot<LivingEntity> create(float p_259830_)`
- `public static OneShot<LivingEntity> create(Predicate<LivingEntity> p_260088_,  float p_259747_)`

## SetEntityLookTargetSometimes

*class* `net.minecraft.world.entity.ai.behavior.SetEntityLookTargetSometimes`

### Methods
- `public static BehaviorControl<LivingEntity> create(float p_259047_,  UniformInt p_260065_)` (deprecated)
- `public static BehaviorControl<LivingEntity> create(EntityType<?> p_259588_,  float p_259105_,  UniformInt p_259422_)` (deprecated)
- `private static BehaviorControl<LivingEntity> create(float p_260336_,  UniformInt p_259266_,  Predicate<LivingEntity> p_260173_)` (deprecated)

## SetEntityLookTargetSometimes.Ticker

*class* `net.minecraft.world.entity.ai.behavior.SetEntityLookTargetSometimes.Ticker`

Enclosing class: SetEntityLookTargetSometimes

### Fields
- `private final UniformInt interval`
- `private int ticksUntilNextStart`

### Methods
- `public boolean tickDownAndCheck(RandomSource p_260276_)`

## SetHiddenState

*class* `net.minecraft.world.entity.ai.behavior.SetHiddenState`

### Fields
- `private static final int HIDE_TIMEOUT` (= 300)

### Methods
- `public static BehaviorControl<LivingEntity> create(int p_259244_,  int p_260263_)`

## SetLookAndInteract

*class* `net.minecraft.world.entity.ai.behavior.SetLookAndInteract`

### Methods
- `public static BehaviorControl<LivingEntity> create(EntityType<?> p_259642_,  int p_259805_)`

## SetRaidStatus

*class* `net.minecraft.world.entity.ai.behavior.SetRaidStatus`

### Methods
- `public static BehaviorControl<LivingEntity> create()`

## SetWalkTargetAwayFrom

*class* `net.minecraft.world.entity.ai.behavior.SetWalkTargetAwayFrom`

### Methods
- `public static BehaviorControl<PathfinderMob> pos(MemoryModuleType<BlockPos> p_259330_,  float p_259719_,  int p_259965_,  boolean p_259828_)`
- `public static OneShot<PathfinderMob> entity(MemoryModuleType<? extends Entity> p_259598_,  float p_260183_,  int p_260077_,  boolean p_259761_)`
- `private static <T> OneShot<PathfinderMob> create(MemoryModuleType<T> p_260057_,  float p_259672_,  int p_259866_,  boolean p_259232_,  Function<T,Vec3> p_259355_)`

## SetWalkTargetFromAttackTargetIfTargetOutOfReach

*class* `net.minecraft.world.entity.ai.behavior.SetWalkTargetFromAttackTargetIfTargetOutOfReach`

### Fields
- `private static final int PROJECTILE_ATTACK_RANGE_BUFFER` (= 1)

### Methods
- `public static BehaviorControl<Mob> create(float p_259228_)`
- `public static BehaviorControl<Mob> create(Function<LivingEntity,Float> p_259507_)`

## SetWalkTargetFromBlockMemory

*class* `net.minecraft.world.entity.ai.behavior.SetWalkTargetFromBlockMemory`

### Methods
- `public static OneShot<Villager> create(MemoryModuleType<GlobalPos> p_259685_,  float p_259842_,  int p_259530_,  int p_260360_,  int p_259504_)`

## SetWalkTargetFromLookTarget

*class* `net.minecraft.world.entity.ai.behavior.SetWalkTargetFromLookTarget`

### Methods
- `public static OneShot<LivingEntity> create(float p_259702_,  int p_259510_)`
- `public static OneShot<LivingEntity> create(Predicate<LivingEntity> p_260341_,  Function<LivingEntity,Float> p_260269_,  int p_259192_)`

## ShowTradesToPlayer

*class* `net.minecraft.world.entity.ai.behavior.ShowTradesToPlayer`

### Fields
- `private static final int MAX_LOOK_TIME` (= 900)
- `private static final int STARTING_LOOK_TIME` (= 40)
- `@Nullable private ItemStack playerItemStack`
- `private final List<ItemStack> displayItems`
- `private int cycleCounter`
- `private int displayIndex`
- `private int lookTime`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `public boolean checkExtraStartConditions(ServerLevel p_24106_,  Villager p_24107_)`
- `public boolean canStillUse(ServerLevel p_24109_,  Villager p_24110_,  long p_24111_)`
- `public void start(ServerLevel p_24124_,  Villager p_24125_,  long p_24126_)`
- `public void tick(ServerLevel p_24134_,  Villager p_24135_,  long p_24136_)`
- `public void stop(ServerLevel p_24144_,  Villager p_24145_,  long p_24146_)`
- `private void findItemsToDisplay(LivingEntity p_24113_,  Villager p_24114_)`
- `private void displayFirstItem(Villager p_24116_)`
- `private void updateDisplayItems(Villager p_24128_)`
- `private boolean playerItemStackMatchesCostOfOffer(MerchantOffer p_24118_)`
- `private static void clearHeldItem(Villager p_182374_)`
- `private static void displayAsHeldItem(Villager p_182371_,  ItemStack p_182372_)`
- `private LivingEntity lookAtTarget(Villager p_24138_)`
- `private void displayCyclingItems(Villager p_24148_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tickOrStop`, `timedOut`, `tryStart`

## ShufflingList

*class* `net.minecraft.world.entity.ai.behavior.ShufflingList`

### Fields
- `protected final List<ShufflingList.WeightedEntry<U>> entries`
- `private final RandomSource random`

### Methods
- `public static <U> com.mojang.serialization.Codec<ShufflingList<U>> codec(com.mojang.serialization.Codec<U> p_147928_)`
- `public ShufflingList<U> add(U p_147930_,  int p_147931_)`
- `public ShufflingList<U> shuffle()`
- `public Stream<U> stream()`
- `public Iterator<U> iterator()`
- `public String toString()`

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `spliterator`

## ShufflingList.WeightedEntry

*class* `net.minecraft.world.entity.ai.behavior.ShufflingList.WeightedEntry`

Enclosing class: ShufflingList<U>

### Fields
- `final T data`
- `final int weight`
- `private double randWeight`

### Methods
- `private double getRandWeight()`
- `void setRandom(float p_147942_)`
- `public T getData()`
- `public int getWeight()`
- `public String toString()`
- `public static <E> com.mojang.serialization.Codec<ShufflingList.WeightedEntry<E>> codec(com.mojang.serialization.Codec<E> p_147944_)`

## SleepInBed

*class* `net.minecraft.world.entity.ai.behavior.SleepInBed`

### Fields
- `public static final int COOLDOWN_AFTER_BEING_WOKEN` (= 100)
- `private long nextOkStartTime`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_24154_,  LivingEntity p_24155_)`
- `protected boolean canStillUse(ServerLevel p_24161_,  LivingEntity p_24162_,  long p_24163_)`
- `protected void start(ServerLevel p_24157_,  LivingEntity p_24158_,  long p_24159_)`
- `protected boolean timedOut(long p_24152_)`
- `protected void stop(ServerLevel p_24165_,  LivingEntity p_24166_,  long p_24167_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tick`, `tickOrStop`, `tryStart`

## SocializeAtBell

*class* `net.minecraft.world.entity.ai.behavior.SocializeAtBell`

### Fields
- `private static final float SPEED_MODIFIER` (= 0.30000001192092896f)

### Methods
- `public static OneShot<LivingEntity> create()`

## StartAttacking

*class* `net.minecraft.world.entity.ai.behavior.StartAttacking`

### Methods
- `public static <E extends Mob> BehaviorControl<E> create(Function<E,Optional<? extends LivingEntity>> p_259868_)`
- `public static <E extends Mob> BehaviorControl<E> create(Predicate<E> p_259618_,  Function<E,Optional<? extends LivingEntity>> p_259435_)`

## StartCelebratingIfTargetDead

*class* `net.minecraft.world.entity.ai.behavior.StartCelebratingIfTargetDead`

### Methods
- `public static BehaviorControl<LivingEntity> create(int p_259238_,  BiPredicate<LivingEntity,LivingEntity> p_259102_)`

## StayCloseToTarget

*class* `net.minecraft.world.entity.ai.behavior.StayCloseToTarget`

### Methods
- `public static BehaviorControl<LivingEntity> create(Function<LivingEntity,Optional<PositionTracker>> p_272871_,  Predicate<LivingEntity> p_273150_,  int p_273536_,  int p_273107_,  float p_273745_)`

## StopAttackingIfTargetInvalid

*class* `net.minecraft.world.entity.ai.behavior.StopAttackingIfTargetInvalid`

### Fields
- `private static final int TIMEOUT_TO_GET_WITHIN_ATTACK_RANGE` (= 200)

### Methods
- `public static <E extends Mob> BehaviorControl<E> create(BiConsumer<E,LivingEntity> p_260165_)`
- `public static <E extends Mob> BehaviorControl<E> create(Predicate<LivingEntity> p_259762_)`
- `public static <E extends Mob> BehaviorControl<E> create()`
- `public static <E extends Mob> BehaviorControl<E> create(Predicate<LivingEntity> p_260357_,  BiConsumer<E,LivingEntity> p_259568_,  boolean p_260319_)`
- `private static boolean isTiredOfTryingToReachTarget(LivingEntity p_259416_,  Optional<Long> p_259377_)`

## StopBeingAngryIfTargetDead

*class* `net.minecraft.world.entity.ai.behavior.StopBeingAngryIfTargetDead`

### Methods
- `public static BehaviorControl<LivingEntity> create()`

## StrollAroundPoi

*class* `net.minecraft.world.entity.ai.behavior.StrollAroundPoi`

### Fields
- `private static final int MIN_TIME_BETWEEN_STROLLS` (= 180)
- `private static final int STROLL_MAX_XZ_DIST` (= 8)
- `private static final int STROLL_MAX_Y_DIST` (= 6)

### Methods
- `public static OneShot<PathfinderMob> create(MemoryModuleType<GlobalPos> p_259159_,  float p_260182_,  int p_260102_)`

## StrollToPoi

*class* `net.minecraft.world.entity.ai.behavior.StrollToPoi`

### Methods
- `public static BehaviorControl<PathfinderMob> create(MemoryModuleType<GlobalPos> p_259919_,  float p_259285_,  int p_259332_,  int p_259904_)`

## StrollToPoiList

*class* `net.minecraft.world.entity.ai.behavior.StrollToPoiList`

### Methods
- `public static BehaviorControl<Villager> create(MemoryModuleType<List<GlobalPos>> p_259573_,  float p_259895_,  int p_260285_,  int p_259533_,  MemoryModuleType<GlobalPos> p_259706_)`

## Swim

*class* `net.minecraft.world.entity.ai.behavior.Swim`

### Fields
- `private final float chance`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_24388_,  Mob p_24389_)`
- `protected boolean canStillUse(ServerLevel p_24391_,  Mob p_24392_,  long p_24393_)`
- `protected void tick(ServerLevel p_24399_,  Mob p_24400_,  long p_24401_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `start`, `stop`, `tickOrStop`, `timedOut`, `tryStart`

## TradeWithVillager

*class* `net.minecraft.world.entity.ai.behavior.TradeWithVillager`

### Fields
- `private static final int INTERACT_DIST_SQR` (= 5)
- `private static final float SPEED_MODIFIER` (= 0.5f)
- `private Set<Item> trades`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_24416_,  Villager p_24417_)`
- `protected boolean canStillUse(ServerLevel p_24419_,  Villager p_24420_,  long p_24421_)`
- `protected void start(ServerLevel p_24437_,  Villager p_24438_,  long p_24439_)`
- `protected void tick(ServerLevel p_24445_,  Villager p_24446_,  long p_24447_)`
- `protected void stop(ServerLevel p_24453_,  Villager p_24454_,  long p_24455_)`
- `private static Set<Item> figureOutWhatIAmWillingToTrade(Villager p_24423_,  Villager p_24424_)`
- `private static void throwHalfStack(Villager p_24426_,  Set<Item> p_24427_,  LivingEntity p_24428_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tickOrStop`, `timedOut`, `tryStart`

## TriggerGate

*class* `net.minecraft.world.entity.ai.behavior.TriggerGate`

### Methods
- `public static <E extends LivingEntity> OneShot<E> triggerOneShuffled(List<com.mojang.datafixers.util.Pair<? extends Trigger<? super E>,Integer>> p_259551_)`
- `public static <E extends LivingEntity> OneShot<E> triggerGate(List<com.mojang.datafixers.util.Pair<? extends Trigger<? super E>,Integer>> p_259442_,  GateBehavior.OrderPolicy p_259823_,  GateBehavior.RunningPolicy p_259632_)`

## TryFindLand

*class* `net.minecraft.world.entity.ai.behavior.TryFindLand`

### Fields
- `private static final int COOLDOWN_TICKS` (= 60)

### Methods
- `public static BehaviorControl<PathfinderMob> create(int p_259889_,  float p_259302_)`

## TryFindLandNearWater

*class* `net.minecraft.world.entity.ai.behavior.TryFindLandNearWater`

### Methods
- `public static BehaviorControl<PathfinderMob> create(int p_259739_,  float p_259118_)`

## TryFindWater

*class* `net.minecraft.world.entity.ai.behavior.TryFindWater`

### Methods
- `public static BehaviorControl<PathfinderMob> create(int p_259298_,  float p_259140_)`

## TryLaySpawnOnWaterNearLand

*class* `net.minecraft.world.entity.ai.behavior.TryLaySpawnOnWaterNearLand`

### Methods
- `public static BehaviorControl<LivingEntity> create(Block p_259207_)`

## UpdateActivityFromSchedule

*class* `net.minecraft.world.entity.ai.behavior.UpdateActivityFromSchedule`

### Methods
- `public static BehaviorControl<LivingEntity> create()`

## UseBonemeal

*class* `net.minecraft.world.entity.ai.behavior.UseBonemeal`

### Fields
- `private static final int BONEMEALING_DURATION` (= 80)
- `private long nextWorkCycleTime`
- `private long lastBonemealingSession`
- `private int timeWorkedSoFar`
- `private Optional<BlockPos> cropPos`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_24474_,  Villager p_24475_)`
- `protected boolean canStillUse(ServerLevel p_24477_,  Villager p_24478_,  long p_24479_)`
- `private Optional<BlockPos> pickNextTarget(ServerLevel p_24493_,  Villager p_24494_)`
- `private boolean validPos(BlockPos p_24486_,  ServerLevel p_24487_)`
- `protected void start(ServerLevel p_24496_,  Villager p_24497_,  long p_24498_)`
- `private void setCurrentCropAsTarget(Villager p_24481_)`
- `protected void stop(ServerLevel p_24504_,  Villager p_24505_,  long p_24506_)`
- `protected void tick(ServerLevel p_24512_,  Villager p_24513_,  long p_24514_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tickOrStop`, `timedOut`, `tryStart`

## ValidateNearbyPoi

*class* `net.minecraft.world.entity.ai.behavior.ValidateNearbyPoi`

### Fields
- `private static final int MAX_DISTANCE` (= 16)

### Methods
- `public static BehaviorControl<LivingEntity> create(Predicate<Holder<PoiType>> p_259460_,  MemoryModuleType<GlobalPos> p_259635_)`
- `private static boolean bedIsOccupied(ServerLevel p_24531_,  BlockPos p_24532_,  LivingEntity p_24533_)`

## VillageBoundRandomStroll

*class* `net.minecraft.world.entity.ai.behavior.VillageBoundRandomStroll`

### Fields
- `private static final int MAX_XZ_DIST` (= 10)
- `private static final int MAX_Y_DIST` (= 7)

### Methods
- `public static OneShot<PathfinderMob> create(float p_260156_)`
- `public static OneShot<PathfinderMob> create(float p_259320_,  int p_259708_,  int p_259311_)`

## VillagerCalmDown

*class* `net.minecraft.world.entity.ai.behavior.VillagerCalmDown`

### Fields
- `private static final int SAFE_DISTANCE_FROM_DANGER` (= 36)

### Methods
- `public static BehaviorControl<LivingEntity> create()`

## VillagerGoalPackages

*class* `net.minecraft.world.entity.ai.behavior.VillagerGoalPackages`

### Fields
- `private static final float STROLL_SPEED_MODIFIER` (= 0.4000000059604645f)

### Methods
- `public static com.google.common.collect.ImmutableList<com.mojang.datafixers.util.Pair<Integer,? extends BehaviorControl<? super Villager>>> getCorePackage(VillagerProfession p_24586_,  float p_24587_)`
- `public static com.google.common.collect.ImmutableList<com.mojang.datafixers.util.Pair<Integer,? extends BehaviorControl<? super Villager>>> getWorkPackage(VillagerProfession p_24590_,  float p_24591_)`
- `public static com.google.common.collect.ImmutableList<com.mojang.datafixers.util.Pair<Integer,? extends BehaviorControl<? super Villager>>> getPlayPackage(float p_24584_)`
- `public static com.google.common.collect.ImmutableList<com.mojang.datafixers.util.Pair<Integer,? extends BehaviorControl<? super Villager>>> getRestPackage(VillagerProfession p_24593_,  float p_24594_)`
- `public static com.google.common.collect.ImmutableList<com.mojang.datafixers.util.Pair<Integer,? extends BehaviorControl<? super Villager>>> getMeetPackage(VillagerProfession p_24596_,  float p_24597_)`
- `public static com.google.common.collect.ImmutableList<com.mojang.datafixers.util.Pair<Integer,? extends BehaviorControl<? super Villager>>> getIdlePackage(VillagerProfession p_24599_,  float p_24600_)`
- `public static com.google.common.collect.ImmutableList<com.mojang.datafixers.util.Pair<Integer,? extends BehaviorControl<? super Villager>>> getPanicPackage(VillagerProfession p_24602_,  float p_24603_)`
- `public static com.google.common.collect.ImmutableList<com.mojang.datafixers.util.Pair<Integer,? extends BehaviorControl<? super Villager>>> getPreRaidPackage(VillagerProfession p_24605_,  float p_24606_)`
- `public static com.google.common.collect.ImmutableList<com.mojang.datafixers.util.Pair<Integer,? extends BehaviorControl<? super Villager>>> getRaidPackage(VillagerProfession p_24608_,  float p_24609_)`
- `public static com.google.common.collect.ImmutableList<com.mojang.datafixers.util.Pair<Integer,? extends BehaviorControl<? super Villager>>> getHidePackage(VillagerProfession p_24611_,  float p_24612_)`
- `private static com.mojang.datafixers.util.Pair<Integer,BehaviorControl<LivingEntity>> getFullLookBehavior()`
- `private static com.mojang.datafixers.util.Pair<Integer,BehaviorControl<LivingEntity>> getMinimalLookBehavior()`
- `private static boolean raidExistsAndActive(ServerLevel p_260274_,  LivingEntity p_260163_)`
- `private static boolean raidExistsAndNotVictory(ServerLevel p_259939_,  LivingEntity p_259384_)`

## VillagerMakeLove

*class* `net.minecraft.world.entity.ai.behavior.VillagerMakeLove`

### Fields
- `private static final int INTERACT_DIST_SQR` (= 5)
- `private static final float SPEED_MODIFIER` (= 0.5f)
- `private long birthTimestamp`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_24623_,  Villager p_24624_)`
- `protected boolean canStillUse(ServerLevel p_24626_,  Villager p_24627_,  long p_24628_)`
- `protected void start(ServerLevel p_24652_,  Villager p_24653_,  long p_24654_)`
- `protected void tick(ServerLevel p_24667_,  Villager p_24668_,  long p_24669_)`
- `private void tryToGiveBirth(ServerLevel p_24630_,  Villager p_24631_,  Villager p_24632_)`
- `protected void stop(ServerLevel p_24675_,  Villager p_24676_,  long p_24677_)`
- `private boolean isBreedingPossible(Villager p_24640_)`
- `private Optional<BlockPos> takeVacantBed(ServerLevel p_24649_,  Villager p_24650_)`
- `private boolean canReach(Villager p_217501_,  BlockPos p_217502_,  Holder<PoiType> p_217503_)`
- `private Optional<Villager> breed(ServerLevel p_24656_,  Villager p_24657_,  Villager p_24658_)`
- `private void giveBedToChild(ServerLevel p_24634_,  Villager p_24635_,  BlockPos p_24636_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tickOrStop`, `timedOut`, `tryStart`

## VillagerPanicTrigger

*class* `net.minecraft.world.entity.ai.behavior.VillagerPanicTrigger`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean canStillUse(ServerLevel p_24684_,  Villager p_24685_,  long p_24686_)`
- `protected void start(ServerLevel p_24694_,  Villager p_24695_,  long p_24696_)`
- `protected void tick(ServerLevel p_24700_,  Villager p_24701_,  long p_24702_)`
- `public static boolean hasHostile(LivingEntity p_24688_)`
- `public static boolean isHurt(LivingEntity p_24698_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `checkExtraStartConditions`, `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `stop`, `tickOrStop`, `timedOut`, `tryStart`

## WakeUp

*class* `net.minecraft.world.entity.ai.behavior.WakeUp`

### Methods
- `public static BehaviorControl<LivingEntity> create()`

## WorkAtComposter

*class* `net.minecraft.world.entity.ai.behavior.WorkAtComposter`

### Fields
- `private static final List<Item> COMPOSTABLE_ITEMS`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected void useWorkstation(ServerLevel p_24790_,  Villager p_24791_)`
- `private void compostItems(ServerLevel p_24793_,  Villager p_24794_,  GlobalPos p_24795_,  BlockState p_24796_)`
- `private void spawnComposterFillEffects(ServerLevel p_24798_,  BlockState p_24799_,  BlockPos p_24800_,  BlockState p_24801_)`
- `private void makeBread(Villager p_24803_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.WorkAtPoi`: `canStillUse`, `checkExtraStartConditions`, `start`
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `stop`, `tick`, `tickOrStop`, `timedOut`, `tryStart`

## WorkAtPoi

*class* `net.minecraft.world.entity.ai.behavior.WorkAtPoi`

### Fields
- `private static final int CHECK_COOLDOWN` (= 300)
- `private static final double DISTANCE` (= 1.73)
- `private long lastCheck`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_24827_,  Villager p_24828_)`
- `protected void start(ServerLevel p_24816_,  Villager p_24817_,  long p_24818_)`
- `protected void useWorkstation(ServerLevel p_24813_,  Villager p_24814_)`
- `protected boolean canStillUse(ServerLevel p_24830_,  Villager p_24831_,  long p_24832_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `stop`, `tick`, `tickOrStop`, `timedOut`, `tryStart`

## YieldJobSite

*class* `net.minecraft.world.entity.ai.behavior.YieldJobSite`

### Methods
- `public static BehaviorControl<Villager> create(float p_259768_)`
- `private static boolean nearbyWantsJobsite(Holder<PoiType> p_217511_,  Villager p_217512_,  BlockPos p_217513_)`
- `private static boolean canReachPos(PathfinderMob p_260080_,  BlockPos p_259875_,  PoiType p_259606_)`
