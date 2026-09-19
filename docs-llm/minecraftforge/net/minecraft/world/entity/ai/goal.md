# net.minecraft.world.entity.ai.goal

- [AvoidEntityGoal](#avoidentitygoal)
- [BegGoal](#beggoal)
- [BreakDoorGoal](#breakdoorgoal)
- [BreathAirGoal](#breathairgoal)
- [BreedGoal](#breedgoal)
- [CatLieOnBedGoal](#catlieonbedgoal)
- [CatSitOnBlockGoal](#catsitonblockgoal)
- [Class BoatGoals](#class-boatgoals)
- [Class Goal.Flag](#class-goal.flag)
- [Class RangedCrossbowAttackGoal.CrossbowState](#class-rangedcrossbowattackgoal.crossbowstate)
- [ClimbOnTopOfPowderSnowGoal](#climbontopofpowdersnowgoal)
- [DolphinJumpGoal](#dolphinjumpgoal)
- [DoorInteractGoal](#doorinteractgoal)
- [EatBlockGoal](#eatblockgoal)
- [FleeSunGoal](#fleesungoal)
- [FloatGoal](#floatgoal)
- [FollowBoatGoal](#followboatgoal)
- [FollowFlockLeaderGoal](#followflockleadergoal)
- [FollowMobGoal](#followmobgoal)
- [FollowOwnerGoal](#followownergoal)
- [FollowParentGoal](#followparentgoal)
- [Goal](#goal)
- [GoalSelector](#goalselector)
- [GolemRandomStrollInVillageGoal](#golemrandomstrollinvillagegoal)
- [InteractGoal](#interactgoal)
- [JumpGoal](#jumpgoal)
- [LandOnOwnersShoulderGoal](#landonownersshouldergoal)
- [LeapAtTargetGoal](#leapattargetgoal)
- [LlamaFollowCaravanGoal](#llamafollowcaravangoal)
- [LookAtPlayerGoal](#lookatplayergoal)
- [LookAtTradingPlayerGoal](#lookattradingplayergoal)
- [MeleeAttackGoal](#meleeattackgoal)
- [MoveBackToVillageGoal](#movebacktovillagegoal)
- [MoveThroughVillageGoal](#movethroughvillagegoal)
- [MoveToBlockGoal](#movetoblockgoal)
- [MoveTowardsRestrictionGoal](#movetowardsrestrictiongoal)
- [MoveTowardsTargetGoal](#movetowardstargetgoal)
- [OcelotAttackGoal](#ocelotattackgoal)
- [OfferFlowerGoal](#offerflowergoal)
- [OpenDoorGoal](#opendoorgoal)
- [PanicGoal](#panicgoal)
- [PathfindToRaidGoal](#pathfindtoraidgoal)
- [RandomLookAroundGoal](#randomlookaroundgoal)
- [RandomStandGoal](#randomstandgoal)
- [RandomStrollGoal](#randomstrollgoal)
- [RandomSwimmingGoal](#randomswimminggoal)
- [RangedAttackGoal](#rangedattackgoal)
- [RangedBowAttackGoal](#rangedbowattackgoal)
- [RangedCrossbowAttackGoal](#rangedcrossbowattackgoal)
- [RemoveBlockGoal](#removeblockgoal)
- [RestrictSunGoal](#restrictsungoal)
- [RunAroundLikeCrazyGoal](#runaroundlikecrazygoal)
- [SitWhenOrderedToGoal](#sitwhenorderedtogoal)
- [StrollThroughVillageGoal](#strollthroughvillagegoal)
- [SwellGoal](#swellgoal)
- [TemptGoal](#temptgoal)
- [TradeWithPlayerGoal](#tradewithplayergoal)
- [TryFindWaterGoal](#tryfindwatergoal)
- [UseItemGoal](#useitemgoal)
- [WaterAvoidingRandomFlyingGoal](#wateravoidingrandomflyinggoal)
- [WaterAvoidingRandomStrollGoal](#wateravoidingrandomstrollgoal)
- [WrappedGoal](#wrappedgoal)
- [ZombieAttackGoal](#zombieattackgoal)
## AvoidEntityGoal

*class* `net.minecraft.world.entity.ai.goal.AvoidEntityGoal`

### Fields
- `protected final PathfinderMob mob`
- `private final double walkSpeedModifier`
- `private final double sprintSpeedModifier`
- `@Nullable protected T extends LivingEntity toAvoid`
- `protected final float maxDist`
- `@Nullable protected Path path`
- `protected final PathNavigation pathNav`
- `protected final Class<T extends LivingEntity> avoidClass`
- `protected final Predicate<LivingEntity> avoidPredicate`
- `protected final Predicate<LivingEntity> predicateOnAvoidEntity`
- `private final TargetingConditions avoidEntityTargeting`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void start()`
- `public void stop()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `toString`

## BegGoal

*class* `net.minecraft.world.entity.ai.goal.BegGoal`

### Fields
- `private final Wolf wolf`
- `@Nullable private Player player`
- `private final Level level`
- `private final float lookDistance`
- `private int lookTime`
- `private final TargetingConditions begTargeting`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void start()`
- `public void stop()`
- `public void tick()`
- `private boolean playerHoldingInteresting(Player p_25067_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `toString`

## BreakDoorGoal

*class* `net.minecraft.world.entity.ai.goal.BreakDoorGoal`

### Fields
- `private static final int DEFAULT_DOOR_BREAK_TIME` (= 240)
- `private final Predicate<Difficulty> validDifficulties`
- `protected int breakTime`
- `protected int lastBreakProgress`
- `protected int doorBreakTime`

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.DoorInteractGoal`: `doorPos`, `hasDoor`, `mob`

### Methods
- `protected int getDoorBreakTime()`
- `public boolean canUse()`
- `public void start()`
- `public boolean canContinueToUse()`
- `public void stop()`
- `public void tick()`
- `private boolean isValidDifficulty(Difficulty p_25095_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.DoorInteractGoal`: `isOpen`, `requiresUpdateEveryTick`, `setOpen`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `setFlags`, `toString`

## BreathAirGoal

*class* `net.minecraft.world.entity.ai.goal.BreathAirGoal`

### Fields
- `private final PathfinderMob mob`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public boolean isInterruptable()`
- `public void start()`
- `private void findAirPosition()`
- `public void tick()`
- `private boolean givesAir(LevelReader p_25107_,  BlockPos p_25108_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `stop`, `toString`

## BreedGoal

*class* `net.minecraft.world.entity.ai.goal.BreedGoal`

### Fields
- `private static final TargetingConditions PARTNER_TARGETING`
- `protected final Animal animal`
- `private final Class<? extends Animal> partnerClass`
- `protected final Level level`
- `@Nullable protected Animal partner`
- `private int loveTime`
- `private final double speedModifier`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void stop()`
- `public void tick()`
- `@Nullable private Animal getFreePartner()`
- `protected void breed()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `start`, `toString`

## CatLieOnBedGoal

*class* `net.minecraft.world.entity.ai.goal.CatLieOnBedGoal`

### Fields
- `private final Cat cat`

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.MoveToBlockGoal`: `blockPos`, `mob`, `nextStartTick`, `speedModifier`, `tryTicks`, `verticalSearchStart`

### Methods
- `public boolean canUse()`
- `public void start()`
- `protected int nextStartTick(PathfinderMob p_25140_)`
- `public void stop()`
- `public void tick()`
- `protected boolean isValidTarget(LevelReader p_25142_,  BlockPos p_25143_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.MoveToBlockGoal`: `acceptedDistance`, `canContinueToUse`, `findNearestBlock`, `getMoveToTarget`, `isReachedTarget`, `moveMobToBlock`, `requiresUpdateEveryTick`, `shouldRecalculatePath`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `setFlags`, `toString`

## CatSitOnBlockGoal

*class* `net.minecraft.world.entity.ai.goal.CatSitOnBlockGoal`

### Fields
- `private final Cat cat`

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.MoveToBlockGoal`: `blockPos`, `mob`, `nextStartTick`, `speedModifier`, `tryTicks`, `verticalSearchStart`

### Methods
- `public boolean canUse()`
- `public void start()`
- `public void stop()`
- `public void tick()`
- `protected boolean isValidTarget(LevelReader p_25153_,  BlockPos p_25154_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.MoveToBlockGoal`: `acceptedDistance`, `canContinueToUse`, `findNearestBlock`, `getMoveToTarget`, `isReachedTarget`, `moveMobToBlock`, `nextStartTick`, `requiresUpdateEveryTick`, `shouldRecalculatePath`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `setFlags`, `toString`

## Class BoatGoals

*enum* `net.minecraft.world.entity.ai.goal.Class BoatGoals`

### Methods
- `public static BoatGoals[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static BoatGoals valueOf(String name)`
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

## Class Goal.Flag

*enum* `net.minecraft.world.entity.ai.goal.Class Goal.Flag`

Enclosing class: Goal

### Methods
- `public static Goal.Flag[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Goal.Flag valueOf(String name)`
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

## Class RangedCrossbowAttackGoal.CrossbowState

*enum* `net.minecraft.world.entity.ai.goal.Class RangedCrossbowAttackGoal.CrossbowState`

Enclosing class: RangedCrossbowAttackGoal<T extends Monster & RangedAttackMob & CrossbowAttackMob>

### Methods
- `public static RangedCrossbowAttackGoal.CrossbowState[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RangedCrossbowAttackGoal.CrossbowState valueOf(String name)`
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

## ClimbOnTopOfPowderSnowGoal

*class* `net.minecraft.world.entity.ai.goal.ClimbOnTopOfPowderSnowGoal`

### Fields
- `private final Mob mob`
- `private final Level level`

### Methods
- `public boolean canUse()`
- `public boolean requiresUpdateEveryTick()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `canContinueToUse`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `setFlags`, `start`, `stop`, `toString`

## DolphinJumpGoal

*class* `net.minecraft.world.entity.ai.goal.DolphinJumpGoal`

### Fields
- `private static final int[] STEPS_TO_CHECK`
- `private final Dolphin dolphin`
- `private final int interval`
- `private boolean breached`

### Methods
- `public boolean canUse()`
- `private boolean waterIsClear(BlockPos p_25173_,  int p_25174_,  int p_25175_,  int p_25176_)`
- `private boolean surfaceIsClear(BlockPos p_25179_,  int p_25180_,  int p_25181_,  int p_25182_)`
- `public boolean canContinueToUse()`
- `public boolean isInterruptable()`
- `public void start()`
- `public void stop()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `toString`

## DoorInteractGoal

*class* `net.minecraft.world.entity.ai.goal.DoorInteractGoal`

### Fields
- `protected Mob mob`
- `protected BlockPos doorPos`
- `protected boolean hasDoor`
- `private boolean passed`
- `private float doorOpenDirX`
- `private float doorOpenDirZ`

### Methods
- `protected boolean isOpen()`
- `protected void setOpen(boolean p_25196_)`
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void start()`
- `public boolean requiresUpdateEveryTick()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `setFlags`, `stop`, `toString`

## EatBlockGoal

*class* `net.minecraft.world.entity.ai.goal.EatBlockGoal`

### Fields
- `private static final int EAT_ANIMATION_TICKS` (= 40)
- `private static final Predicate<BlockState> IS_TALL_GRASS`
- `private final Mob mob`
- `private final Level level`
- `private int eatAnimationTick`

### Methods
- `public boolean canUse()`
- `public void start()`
- `public void stop()`
- `public boolean canContinueToUse()`
- `public int getEatAnimationTick()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `toString`

## FleeSunGoal

*class* `net.minecraft.world.entity.ai.goal.FleeSunGoal`

### Fields
- `protected final PathfinderMob mob`
- `private double wantedX`
- `private double wantedY`
- `private double wantedZ`
- `private final double speedModifier`
- `private final Level level`

### Methods
- `public boolean canUse()`
- `protected boolean setWantedPos()`
- `public boolean canContinueToUse()`
- `public void start()`
- `@Nullable protected Vec3 getHidePos()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `stop`, `tick`, `toString`

## FloatGoal

*class* `net.minecraft.world.entity.ai.goal.FloatGoal`

### Fields
- `private final Mob mob`

### Methods
- `public boolean canUse()`
- `public boolean requiresUpdateEveryTick()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `canContinueToUse`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `setFlags`, `start`, `stop`, `toString`

## FollowBoatGoal

*class* `net.minecraft.world.entity.ai.goal.FollowBoatGoal`

### Fields
- `private int timeToRecalcPath`
- `private final PathfinderMob mob`
- `@Nullable private Player following`
- `private BoatGoals currentGoal`

### Methods
- `public boolean canUse()`
- `public boolean isInterruptable()`
- `public boolean canContinueToUse()`
- `public void start()`
- `public void stop()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `toString`

## FollowFlockLeaderGoal

*class* `net.minecraft.world.entity.ai.goal.FollowFlockLeaderGoal`

### Fields
- `private static final int INTERVAL_TICKS` (= 200)
- `private final AbstractSchoolingFish mob`
- `private int timeToRecalcPath`
- `private int nextStartTick`

### Methods
- `protected int nextStartTick(AbstractSchoolingFish p_25252_)`
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void start()`
- `public void stop()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `toString`

## FollowMobGoal

*class* `net.minecraft.world.entity.ai.goal.FollowMobGoal`

### Fields
- `private final Mob mob`
- `private final Predicate<Mob> followPredicate`
- `@Nullable private Mob followingMob`
- `private final double speedModifier`
- `private final PathNavigation navigation`
- `private int timeToRecalcPath`
- `private final float stopDistance`
- `private float oldWaterCost`
- `private final float areaSize`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void start()`
- `public void stop()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `toString`

## FollowOwnerGoal

*class* `net.minecraft.world.entity.ai.goal.FollowOwnerGoal`

### Fields
- `public static final int TELEPORT_WHEN_DISTANCE_IS` (= 12)
- `private static final int MIN_HORIZONTAL_DISTANCE_FROM_PLAYER_WHEN_TELEPORTING` (= 2)
- `private static final int MAX_HORIZONTAL_DISTANCE_FROM_PLAYER_WHEN_TELEPORTING` (= 3)
- `private static final int MAX_VERTICAL_DISTANCE_FROM_PLAYER_WHEN_TELEPORTING` (= 1)
- `private final TamableAnimal tamable`
- `private LivingEntity owner`
- `private final LevelReader level`
- `private final double speedModifier`
- `private final PathNavigation navigation`
- `private int timeToRecalcPath`
- `private final float stopDistance`
- `private final float startDistance`
- `private float oldWaterCost`
- `private final boolean canFly`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `private boolean unableToMove()`
- `public void start()`
- `public void stop()`
- `public void tick()`
- `private void teleportToOwner()`
- `private boolean maybeTeleportTo(int p_25304_,  int p_25305_,  int p_25306_)`
- `private boolean canTeleportTo(BlockPos p_25308_)`
- `private int randomIntInclusive(int p_25301_,  int p_25302_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `toString`

## FollowParentGoal

*class* `net.minecraft.world.entity.ai.goal.FollowParentGoal`

### Fields
- `public static final int HORIZONTAL_SCAN_RANGE` (= 8)
- `public static final int VERTICAL_SCAN_RANGE` (= 4)
- `public static final int DONT_FOLLOW_IF_CLOSER_THAN` (= 3)
- `private final Animal animal`
- `@Nullable private Animal parent`
- `private final double speedModifier`
- `private int timeToRecalcPath`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void start()`
- `public void stop()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `toString`

## Goal

*class* `net.minecraft.world.entity.ai.goal.Goal`

### Fields
- `private final EnumSet<Goal.Flag> flags`

### Methods
- `public abstract boolean canUse()`
- `public boolean canContinueToUse()`
- `public boolean isInterruptable()`
- `public void start()`
- `public void stop()`
- `public boolean requiresUpdateEveryTick()`
- `public void tick()`
- `public void setFlags(EnumSet<Goal.Flag> p_25328_)`
- `public String toString()`
- `public EnumSet<Goal.Flag> getFlags()`
- `protected int adjustedTickDelay(int p_186072_)`
- `protected static int reducedTickDelay(int p_186074_)`

## GoalSelector

*class* `net.minecraft.world.entity.ai.goal.GoalSelector`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final WrappedGoal NO_GOAL`
- `private final Map<Goal.Flag,WrappedGoal> lockedFlags`
- `private final Set<WrappedGoal> availableGoals`
- `private final Supplier<ProfilerFiller> profiler`
- `private final EnumSet<Goal.Flag> disabledFlags`
- `private int tickCount`
- `private int newGoalRate`

### Methods
- `public void addGoal(int p_25353_,  Goal p_25354_)`
- `public void removeAllGoals(Predicate<Goal> p_262575_)`
- `public void removeGoal(Goal p_25364_)`
- `private static boolean goalContainsAnyFlags(WrappedGoal p_186076_,  EnumSet<Goal.Flag> p_186077_)`
- `private static boolean goalCanBeReplacedForAllFlags(WrappedGoal p_186079_,  Map<Goal.Flag,WrappedGoal> p_186080_)`
- `public void tick()`
- `public void tickRunningGoals(boolean p_186082_)`
- `public Set<WrappedGoal> getAvailableGoals()`
- `public Stream<WrappedGoal> getRunningGoals()`
- `public void setNewGoalRate(int p_148098_)`
- `public void disableControlFlag(Goal.Flag p_25356_)`
- `public void enableControlFlag(Goal.Flag p_25375_)`
- `public void setControlFlag(Goal.Flag p_25361_,  boolean p_25362_)`

## GolemRandomStrollInVillageGoal

*class* `net.minecraft.world.entity.ai.goal.GolemRandomStrollInVillageGoal`

### Fields
- `private static final int POI_SECTION_SCAN_RADIUS` (= 2)
- `private static final int VILLAGER_SCAN_RADIUS` (= 32)
- `private static final int RANDOM_POS_XY_DISTANCE` (= 10)
- `private static final int RANDOM_POS_Y_DISTANCE` (= 7)

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.RandomStrollGoal`: `DEFAULT_INTERVAL`, `forceTrigger`, `interval`, `mob`, `speedModifier`, `wantedX`, `wantedY`, `wantedZ`

### Methods
- `@Nullable protected Vec3 getPosition()`
- `@Nullable private Vec3 getPositionTowardsAnywhere()`
- `@Nullable private Vec3 getPositionTowardsVillagerWhoWantsGolem()`
- `@Nullable private Vec3 getPositionTowardsPoi()`
- `@Nullable private SectionPos getRandomVillageSection()`
- `@Nullable private BlockPos getRandomPoiWithinSection(SectionPos p_25408_)`
- `private boolean doesVillagerWantGolem(Villager p_25406_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.RandomStrollGoal`: `canContinueToUse`, `canUse`, `setInterval`, `start`, `stop`, `trigger`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## InteractGoal

*class* `net.minecraft.world.entity.ai.goal.InteractGoal`

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.LookAtPlayerGoal`: `DEFAULT_PROBABILITY`, `lookAt`, `lookAtContext`, `lookAtType`, `lookDistance`, `mob`, `probability`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.LookAtPlayerGoal`: `canContinueToUse`, `canUse`, `start`, `stop`, `tick`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `toString`

## JumpGoal

*class* `net.minecraft.world.entity.ai.goal.JumpGoal`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `canContinueToUse`, `canUse`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `start`, `stop`, `tick`, `toString`

## LandOnOwnersShoulderGoal

*class* `net.minecraft.world.entity.ai.goal.LandOnOwnersShoulderGoal`

### Fields
- `private final ShoulderRidingEntity entity`
- `private ServerPlayer owner`
- `private boolean isSittingOnShoulder`

### Methods
- `public boolean canUse()`
- `public boolean isInterruptable()`
- `public void start()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `canContinueToUse`, `getFlags`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `stop`, `toString`

## LeapAtTargetGoal

*class* `net.minecraft.world.entity.ai.goal.LeapAtTargetGoal`

### Fields
- `private final Mob mob`
- `private LivingEntity target`
- `private final float yd`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void start()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `stop`, `tick`, `toString`

## LlamaFollowCaravanGoal

*class* `net.minecraft.world.entity.ai.goal.LlamaFollowCaravanGoal`

### Fields
- `public final Llama llama`
- `private double speedModifier`
- `private static final int CARAVAN_LIMIT` (= 8)
- `private int distCheckCounter`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void stop()`
- `public void tick()`
- `private boolean firstIsLeashed(Llama p_25507_,  int p_25508_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `start`, `toString`

## LookAtPlayerGoal

*class* `net.minecraft.world.entity.ai.goal.LookAtPlayerGoal`

### Fields
- `public static final float DEFAULT_PROBABILITY` (= 0.019999999552965164f)
- `protected final Mob mob`
- `@Nullable protected Entity lookAt`
- `protected final float lookDistance`
- `private int lookTime`
- `protected final float probability`
- `private final boolean onlyHorizontal`
- `protected final Class<? extends LivingEntity> lookAtType`
- `protected final TargetingConditions lookAtContext`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void start()`
- `public void stop()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `toString`

## LookAtTradingPlayerGoal

*class* `net.minecraft.world.entity.ai.goal.LookAtTradingPlayerGoal`

### Fields
- `private final AbstractVillager villager`

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.LookAtPlayerGoal`: `DEFAULT_PROBABILITY`, `lookAt`, `lookAtContext`, `lookAtType`, `lookDistance`, `mob`, `probability`

### Methods
- `public boolean canUse()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.LookAtPlayerGoal`: `canContinueToUse`, `start`, `stop`, `tick`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `toString`

## MeleeAttackGoal

*class* `net.minecraft.world.entity.ai.goal.MeleeAttackGoal`

### Fields
- `protected final PathfinderMob mob`
- `private final double speedModifier`
- `private final boolean followingTargetEvenIfNotSeen`
- `private Path path`
- `private double pathedTargetX`
- `private double pathedTargetY`
- `private double pathedTargetZ`
- `private int ticksUntilNextPathRecalculation`
- `private int ticksUntilNextAttack`
- `private final int attackInterval` (= 20)
- `private long lastCanUseCheck`
- `private static final long COOLDOWN_BETWEEN_CAN_USE_CHECKS` (= 20L)
- `private int failedPathFindingPenalty`
- `private boolean canPenalize`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void start()`
- `public void stop()`
- `public boolean requiresUpdateEveryTick()`
- `public void tick()`
- `protected void checkAndPerformAttack(LivingEntity p_25557_)`
- `protected void resetAttackCooldown()`
- `protected boolean isTimeToAttack()`
- `protected boolean canPerformAttack(LivingEntity p_301160_)`
- `protected int getTicksUntilNextAttack()`
- `protected int getAttackInterval()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `setFlags`, `toString`

## MoveBackToVillageGoal

*class* `net.minecraft.world.entity.ai.goal.MoveBackToVillageGoal`

### Fields
- `private static final int MAX_XZ_DIST` (= 10)
- `private static final int MAX_Y_DIST` (= 7)

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.RandomStrollGoal`: `DEFAULT_INTERVAL`, `forceTrigger`, `interval`, `mob`, `speedModifier`, `wantedX`, `wantedY`, `wantedZ`

### Methods
- `public boolean canUse()`
- `@Nullable protected Vec3 getPosition()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.RandomStrollGoal`: `canContinueToUse`, `setInterval`, `start`, `stop`, `trigger`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## MoveThroughVillageGoal

*class* `net.minecraft.world.entity.ai.goal.MoveThroughVillageGoal`

### Fields
- `protected final PathfinderMob mob`
- `private final double speedModifier`
- `@Nullable private Path path`
- `private BlockPos poiPos`
- `private final boolean onlyAtNight`
- `private final List<BlockPos> visited`
- `private final int distanceToPoi`
- `private final BooleanSupplier canDealWithDoors`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void start()`
- `public void stop()`
- `private boolean hasNotVisited(BlockPos p_25593_)`
- `private void updateVisited()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## MoveToBlockGoal

*class* `net.minecraft.world.entity.ai.goal.MoveToBlockGoal`

### Fields
- `private static final int GIVE_UP_TICKS` (= 1200)
- `private static final int STAY_TICKS` (= 1200)
- `private static final int INTERVAL_TICKS` (= 200)
- `protected final PathfinderMob mob`
- `public final double speedModifier`
- `protected int nextStartTick`
- `protected int tryTicks`
- `private int maxStayTicks`
- `protected BlockPos blockPos`
- `private boolean reachedTarget`
- `private final int searchRange`
- `private final int verticalSearchRange`
- `protected int verticalSearchStart`

### Methods
- `public boolean canUse()`
- `protected int nextStartTick(PathfinderMob p_25618_)`
- `public boolean canContinueToUse()`
- `public void start()`
- `protected void moveMobToBlock()`
- `public double acceptedDistance()`
- `protected BlockPos getMoveToTarget()`
- `public boolean requiresUpdateEveryTick()`
- `public void tick()`
- `public boolean shouldRecalculatePath()`
- `protected boolean isReachedTarget()`
- `protected boolean findNearestBlock()`
- `protected abstract boolean isValidTarget(LevelReader p_25619_,  BlockPos p_25620_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `setFlags`, `stop`, `toString`

## MoveTowardsRestrictionGoal

*class* `net.minecraft.world.entity.ai.goal.MoveTowardsRestrictionGoal`

### Fields
- `private final PathfinderMob mob`
- `private double wantedX`
- `private double wantedY`
- `private double wantedZ`
- `private final double speedModifier`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void start()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `stop`, `tick`, `toString`

## MoveTowardsTargetGoal

*class* `net.minecraft.world.entity.ai.goal.MoveTowardsTargetGoal`

### Fields
- `private final PathfinderMob mob`
- `@Nullable private LivingEntity target`
- `private double wantedX`
- `private double wantedY`
- `private double wantedZ`
- `private final double speedModifier`
- `private final float within`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void stop()`
- `public void start()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## OcelotAttackGoal

*class* `net.minecraft.world.entity.ai.goal.OcelotAttackGoal`

### Fields
- `private final Mob mob`
- `private LivingEntity target`
- `private int attackTime`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void stop()`
- `public boolean requiresUpdateEveryTick()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `setFlags`, `start`, `toString`

## OfferFlowerGoal

*class* `net.minecraft.world.entity.ai.goal.OfferFlowerGoal`

### Fields
- `private static final TargetingConditions OFFER_TARGER_CONTEXT`
- `public static final int OFFER_TICKS` (= 400)
- `private final IronGolem golem`
- `private Villager villager`
- `private int tick`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void start()`
- `public void stop()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `toString`

## OpenDoorGoal

*class* `net.minecraft.world.entity.ai.goal.OpenDoorGoal`

### Fields
- `private final boolean closeDoor`
- `private int forgetTime`

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.DoorInteractGoal`: `doorPos`, `hasDoor`, `mob`

### Methods
- `public boolean canContinueToUse()`
- `public void start()`
- `public void stop()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.DoorInteractGoal`: `canUse`, `isOpen`, `requiresUpdateEveryTick`, `setOpen`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `setFlags`, `toString`

## PanicGoal

*class* `net.minecraft.world.entity.ai.goal.PanicGoal`

### Fields
- `public static final int WATER_CHECK_DISTANCE_VERTICAL` (= 1)
- `protected final PathfinderMob mob`
- `protected final double speedModifier`
- `protected double posX`
- `protected double posY`
- `protected double posZ`
- `protected boolean isRunning`

### Methods
- `public boolean canUse()`
- `protected boolean shouldPanic()`
- `protected boolean findRandomPosition()`
- `public boolean isRunning()`
- `public void start()`
- `public void stop()`
- `public boolean canContinueToUse()`
- `@Nullable protected BlockPos lookForWater(BlockGetter p_198173_,  Entity p_198174_,  int p_198175_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## PathfindToRaidGoal

*class* `net.minecraft.world.entity.ai.goal.PathfindToRaidGoal`

### Fields
- `private static final int RECRUITMENT_SEARCH_TICK_DELAY` (= 20)
- `private static final float SPEED_MODIFIER` (= 1.0f)
- `private final T extends Raider mob`
- `private int recruitmentTick`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void tick()`
- `private void recruitNearby(Raid p_25709_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `start`, `stop`, `toString`

## RandomLookAroundGoal

*class* `net.minecraft.world.entity.ai.goal.RandomLookAroundGoal`

### Fields
- `private final Mob mob`
- `private double relX`
- `private double relZ`
- `private int lookTime`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void start()`
- `public boolean requiresUpdateEveryTick()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `setFlags`, `stop`, `toString`

## RandomStandGoal

*class* `net.minecraft.world.entity.ai.goal.RandomStandGoal`

### Fields
- `private final AbstractHorse horse`
- `private int nextStand`

### Methods
- `public void start()`
- `private void playStandSound()`
- `public boolean canContinueToUse()`
- `public boolean canUse()`
- `private void resetStandInterval(AbstractHorse p_250439_)`
- `public boolean requiresUpdateEveryTick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `setFlags`, `stop`, `tick`, `toString`

## RandomStrollGoal

*class* `net.minecraft.world.entity.ai.goal.RandomStrollGoal`

### Fields
- `public static final int DEFAULT_INTERVAL` (= 120)
- `protected final PathfinderMob mob`
- `protected double wantedX`
- `protected double wantedY`
- `protected double wantedZ`
- `protected final double speedModifier`
- `protected int interval`
- `protected boolean forceTrigger`
- `private final boolean checkNoActionTime`

### Methods
- `public boolean canUse()`
- `@Nullable protected Vec3 getPosition()`
- `public boolean canContinueToUse()`
- `public void start()`
- `public void stop()`
- `public void trigger()`
- `public void setInterval(int p_25747_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## RandomSwimmingGoal

*class* `net.minecraft.world.entity.ai.goal.RandomSwimmingGoal`

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.RandomStrollGoal`: `DEFAULT_INTERVAL`, `forceTrigger`, `interval`, `mob`, `speedModifier`, `wantedX`, `wantedY`, `wantedZ`

### Methods
- `@Nullable protected Vec3 getPosition()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.RandomStrollGoal`: `canContinueToUse`, `canUse`, `setInterval`, `start`, `stop`, `trigger`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## RangedAttackGoal

*class* `net.minecraft.world.entity.ai.goal.RangedAttackGoal`

### Fields
- `private final Mob mob`
- `private final RangedAttackMob rangedAttackMob`
- `@Nullable private LivingEntity target`
- `private int attackTime`
- `private final double speedModifier`
- `private int seeTime`
- `private final int attackIntervalMin`
- `private final int attackIntervalMax`
- `private final float attackRadius`
- `private final float attackRadiusSqr`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void stop()`
- `public boolean requiresUpdateEveryTick()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `setFlags`, `start`, `toString`

## RangedBowAttackGoal

*class* `net.minecraft.world.entity.ai.goal.RangedBowAttackGoal`

### Fields
- `private final T extends Mob & RangedAttackMob mob`
- `private final double speedModifier`
- `private int attackIntervalMin`
- `private final float attackRadiusSqr`
- `private int attackTime`
- `private int seeTime`
- `private boolean strafingClockwise`
- `private boolean strafingBackwards`
- `private int strafingTime`

### Methods
- `public void setMinAttackInterval(int p_25798_)`
- `public boolean canUse()`
- `protected boolean isHoldingBow()`
- `public boolean canContinueToUse()`
- `public void start()`
- `public void stop()`
- `public boolean requiresUpdateEveryTick()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `setFlags`, `toString`

## RangedCrossbowAttackGoal

*class* `net.minecraft.world.entity.ai.goal.RangedCrossbowAttackGoal`

### Fields
- `public static final UniformInt PATHFINDING_DELAY_RANGE`
- `private final T extends Monster & RangedAttackMob & CrossbowAttackMob mob`
- `private RangedCrossbowAttackGoal.CrossbowState crossbowState`
- `private final double speedModifier`
- `private final float attackRadiusSqr`
- `private int seeTime`
- `private int attackDelay`
- `private int updatePathDelay`

### Methods
- `public boolean canUse()`
- `private boolean isHoldingCrossbow()`
- `public boolean canContinueToUse()`
- `private boolean isValidTarget()`
- `public void stop()`
- `public boolean requiresUpdateEveryTick()`
- `public void tick()`
- `private boolean canRun()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `setFlags`, `start`, `toString`

## RemoveBlockGoal

*class* `net.minecraft.world.entity.ai.goal.RemoveBlockGoal`

### Fields
- `private final Block blockToRemove`
- `private final Mob removerMob`
- `private int ticksSinceReachedGoal`
- `private static final int WAIT_AFTER_BLOCK_FOUND` (= 20)

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.MoveToBlockGoal`: `blockPos`, `mob`, `nextStartTick`, `speedModifier`, `tryTicks`, `verticalSearchStart`

### Methods
- `public boolean canUse()`
- `public void stop()`
- `public void start()`
- `public void playDestroyProgressSound(LevelAccessor p_25847_,  BlockPos p_25848_)`
- `public void playBreakSound(Level p_25845_,  BlockPos p_25846_)`
- `public void tick()`
- `@Nullable private BlockPos getPosWithBlock(BlockPos p_25853_,  BlockGetter p_25854_)`
- `protected boolean isValidTarget(LevelReader p_25850_,  BlockPos p_25851_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.MoveToBlockGoal`: `acceptedDistance`, `canContinueToUse`, `findNearestBlock`, `getMoveToTarget`, `isReachedTarget`, `moveMobToBlock`, `nextStartTick`, `requiresUpdateEveryTick`, `shouldRecalculatePath`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `setFlags`, `toString`

## RestrictSunGoal

*class* `net.minecraft.world.entity.ai.goal.RestrictSunGoal`

### Fields
- `private final PathfinderMob mob`

### Methods
- `public boolean canUse()`
- `public void start()`
- `public void stop()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `canContinueToUse`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## RunAroundLikeCrazyGoal

*class* `net.minecraft.world.entity.ai.goal.RunAroundLikeCrazyGoal`

### Fields
- `private final AbstractHorse horse`
- `private final double speedModifier`
- `private double posX`
- `private double posY`
- `private double posZ`

### Methods
- `public boolean canUse()`
- `public void start()`
- `public boolean canContinueToUse()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `stop`, `toString`

## SitWhenOrderedToGoal

*class* `net.minecraft.world.entity.ai.goal.SitWhenOrderedToGoal`

### Fields
- `private final TamableAnimal mob`

### Methods
- `public boolean canContinueToUse()`
- `public boolean canUse()`
- `public void start()`
- `public void stop()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## StrollThroughVillageGoal

*class* `net.minecraft.world.entity.ai.goal.StrollThroughVillageGoal`

### Fields
- `private static final int DISTANCE_THRESHOLD` (= 10)
- `private final PathfinderMob mob`
- `private final int interval`
- `@Nullable private BlockPos wantedPos`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void tick()`
- `private void moveRandomly()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `start`, `stop`, `toString`

## SwellGoal

*class* `net.minecraft.world.entity.ai.goal.SwellGoal`

### Fields
- `private final Creeper creeper`
- `@Nullable private LivingEntity target`

### Methods
- `public boolean canUse()`
- `public void start()`
- `public void stop()`
- `public boolean requiresUpdateEveryTick()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `canContinueToUse`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `setFlags`, `toString`

## TemptGoal

*class* `net.minecraft.world.entity.ai.goal.TemptGoal`

### Fields
- `private static final TargetingConditions TEMP_TARGETING`
- `private final TargetingConditions targetingConditions`
- `protected final PathfinderMob mob`
- `private final double speedModifier`
- `private double px`
- `private double py`
- `private double pz`
- `private double pRotX`
- `private double pRotY`
- `@Nullable protected Player player`
- `private int calmDown`
- `private boolean isRunning`
- `private final Ingredient items`
- `private final boolean canScare`

### Methods
- `public boolean canUse()`
- `private boolean shouldFollow(LivingEntity p_148139_)`
- `public boolean canContinueToUse()`
- `protected boolean canScare()`
- `public void start()`
- `public void stop()`
- `public void tick()`
- `public boolean isRunning()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `toString`

## TradeWithPlayerGoal

*class* `net.minecraft.world.entity.ai.goal.TradeWithPlayerGoal`

### Fields
- `private final AbstractVillager mob`

### Methods
- `public boolean canUse()`
- `public void start()`
- `public void stop()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `canContinueToUse`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## TryFindWaterGoal

*class* `net.minecraft.world.entity.ai.goal.TryFindWaterGoal`

### Fields
- `private final PathfinderMob mob`

### Methods
- `public boolean canUse()`
- `public void start()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `canContinueToUse`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `stop`, `tick`, `toString`

## UseItemGoal

*class* `net.minecraft.world.entity.ai.goal.UseItemGoal`

### Fields
- `private final T extends Mob mob`
- `private final ItemStack item`
- `private final Predicate<? super T extends Mob> canUseSelector`
- `@Nullable private final SoundEvent finishUsingSound`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public void start()`
- `public void stop()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## WaterAvoidingRandomFlyingGoal

*class* `net.minecraft.world.entity.ai.goal.WaterAvoidingRandomFlyingGoal`

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.WaterAvoidingRandomStrollGoal`: `probability`, `PROBABILITY`
- from `net.minecraft.world.entity.ai.goal.RandomStrollGoal`: `DEFAULT_INTERVAL`, `forceTrigger`, `interval`, `mob`, `speedModifier`, `wantedX`, `wantedY`, `wantedZ`

### Methods
- `@Nullable protected Vec3 getPosition()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.RandomStrollGoal`: `canContinueToUse`, `canUse`, `setInterval`, `start`, `stop`, `trigger`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## WaterAvoidingRandomStrollGoal

*class* `net.minecraft.world.entity.ai.goal.WaterAvoidingRandomStrollGoal`

### Fields
- `public static final float PROBABILITY` (= 0.0010000000474974513f)
- `protected final float probability`

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.RandomStrollGoal`: `DEFAULT_INTERVAL`, `forceTrigger`, `interval`, `mob`, `speedModifier`, `wantedX`, `wantedY`, `wantedZ`

### Methods
- `@Nullable protected Vec3 getPosition()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.RandomStrollGoal`: `canContinueToUse`, `canUse`, `setInterval`, `start`, `stop`, `trigger`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## WrappedGoal

*class* `net.minecraft.world.entity.ai.goal.WrappedGoal`

### Fields
- `private final Goal goal`
- `private final int priority`
- `private boolean isRunning`

### Methods
- `public boolean canBeReplacedBy(WrappedGoal p_26003_)`
- `public boolean canUse()`
- `public boolean canContinueToUse()`
- `public boolean isInterruptable()`
- `public void start()`
- `public void stop()`
- `public boolean requiresUpdateEveryTick()`
- `protected int adjustedTickDelay(int p_186092_)`
- `public void tick()`
- `public void setFlags(EnumSet<Goal.Flag> p_26005_)`
- `public EnumSet<Goal.Flag> getFlags()`
- `public boolean isRunning()`
- `public int getPriority()`
- `public Goal getGoal()`
- `public boolean equals(@Nullable  Object p_26011_)`
- `public int hashCode()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `reducedTickDelay`, `toString`

## ZombieAttackGoal

*class* `net.minecraft.world.entity.ai.goal.ZombieAttackGoal`

### Fields
- `private final Zombie zombie`
- `private int raiseArmTicks`

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.MeleeAttackGoal`: `mob`

### Methods
- `public void start()`
- `public void stop()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.MeleeAttackGoal`: `canContinueToUse`, `canPerformAttack`, `canUse`, `checkAndPerformAttack`, `getAttackInterval`, `getTicksUntilNextAttack`, `isTimeToAttack`, `requiresUpdateEveryTick`, `resetAttackCooldown`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `setFlags`, `toString`
