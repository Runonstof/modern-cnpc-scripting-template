# net.minecraft.world.entity.ai.goal.target

- [DefendVillageTargetGoal](#defendvillagetargetgoal)
- [HurtByTargetGoal](#hurtbytargetgoal)
- [NearestAttackableTargetGoal](#nearestattackabletargetgoal)
- [NearestAttackableWitchTargetGoal](#nearestattackablewitchtargetgoal)
- [NearestHealableRaiderTargetGoal](#nearesthealableraidertargetgoal)
- [NonTameRandomTargetGoal](#nontamerandomtargetgoal)
- [OwnerHurtByTargetGoal](#ownerhurtbytargetgoal)
- [OwnerHurtTargetGoal](#ownerhurttargetgoal)
- [ResetUniversalAngerTargetGoal](#resetuniversalangertargetgoal)
- [TargetGoal](#targetgoal)
## DefendVillageTargetGoal

*class* `net.minecraft.world.entity.ai.goal.target.DefendVillageTargetGoal`

### Fields
- `private final IronGolem golem`
- `@Nullable private LivingEntity potentialTarget`
- `private final TargetingConditions attackTargeting`

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.target.TargetGoal`: `mob`, `mustSee`, `targetMob`, `unseenMemoryTicks`

### Methods
- `public boolean canUse()`
- `public void start()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.target.TargetGoal`: `canAttack`, `canContinueToUse`, `getFollowDistance`, `setUnseenMemoryTicks`, `stop`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## HurtByTargetGoal

*class* `net.minecraft.world.entity.ai.goal.target.HurtByTargetGoal`

### Fields
- `private static final TargetingConditions HURT_BY_TARGETING`
- `private static final int ALERT_RANGE_Y` (= 10)
- `private boolean alertSameType`
- `private int timestamp`
- `private final Class<?>[] toIgnoreDamage`
- `@Nullable private Class<?>[] toIgnoreAlert`

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.target.TargetGoal`: `mob`, `mustSee`, `targetMob`, `unseenMemoryTicks`

### Methods
- `public boolean canUse()`
- `public HurtByTargetGoal setAlertOthers(Class<?>... p_26045_)`
- `public void start()`
- `protected void alertOthers()`
- `protected void alertOther(Mob p_26042_,  LivingEntity p_26043_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.target.TargetGoal`: `canAttack`, `canContinueToUse`, `getFollowDistance`, `setUnseenMemoryTicks`, `stop`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## NearestAttackableTargetGoal

*class* `net.minecraft.world.entity.ai.goal.target.NearestAttackableTargetGoal`

### Fields
- `private static final int DEFAULT_RANDOM_INTERVAL` (= 10)
- `protected final Class<T extends LivingEntity> targetType`
- `protected final int randomInterval`
- `@Nullable protected LivingEntity target`
- `protected TargetingConditions targetConditions`

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.target.TargetGoal`: `mob`, `mustSee`, `targetMob`, `unseenMemoryTicks`

### Methods
- `public boolean canUse()`
- `protected AABB getTargetSearchArea(double p_26069_)`
- `protected void findTarget()`
- `public void start()`
- `public void setTarget(@Nullable  LivingEntity p_26071_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.target.TargetGoal`: `canAttack`, `canContinueToUse`, `getFollowDistance`, `setUnseenMemoryTicks`, `stop`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## NearestAttackableWitchTargetGoal

*class* `net.minecraft.world.entity.ai.goal.target.NearestAttackableWitchTargetGoal`

### Fields
- `private boolean canAttack`

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.target.NearestAttackableTargetGoal`: `randomInterval`, `target`, `targetConditions`, `targetType`
- from `net.minecraft.world.entity.ai.goal.target.TargetGoal`: `mob`, `mustSee`, `targetMob`, `unseenMemoryTicks`

### Methods
- `public void setCanAttack(boolean p_26084_)`
- `public boolean canUse()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.target.NearestAttackableTargetGoal`: `findTarget`, `getTargetSearchArea`, `setTarget`, `start`
- from `net.minecraft.world.entity.ai.goal.target.TargetGoal`: `canAttack`, `canContinueToUse`, `getFollowDistance`, `setUnseenMemoryTicks`, `stop`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## NearestHealableRaiderTargetGoal

*class* `net.minecraft.world.entity.ai.goal.target.NearestHealableRaiderTargetGoal`

### Fields
- `private static final int DEFAULT_COOLDOWN` (= 200)
- `private int cooldown`

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.target.NearestAttackableTargetGoal`: `randomInterval`, `target`, `targetConditions`, `targetType`
- from `net.minecraft.world.entity.ai.goal.target.TargetGoal`: `mob`, `mustSee`, `targetMob`, `unseenMemoryTicks`

### Methods
- `public int getCooldown()`
- `public void decrementCooldown()`
- `public boolean canUse()`
- `public void start()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.target.NearestAttackableTargetGoal`: `findTarget`, `getTargetSearchArea`, `setTarget`
- from `net.minecraft.world.entity.ai.goal.target.TargetGoal`: `canAttack`, `canContinueToUse`, `getFollowDistance`, `setUnseenMemoryTicks`, `stop`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## NonTameRandomTargetGoal

*class* `net.minecraft.world.entity.ai.goal.target.NonTameRandomTargetGoal`

### Fields
- `private final TamableAnimal tamableMob`

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.target.NearestAttackableTargetGoal`: `randomInterval`, `target`, `targetConditions`, `targetType`
- from `net.minecraft.world.entity.ai.goal.target.TargetGoal`: `mob`, `mustSee`, `targetMob`, `unseenMemoryTicks`

### Methods
- `public boolean canUse()`
- `public boolean canContinueToUse()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.target.NearestAttackableTargetGoal`: `findTarget`, `getTargetSearchArea`, `setTarget`, `start`
- from `net.minecraft.world.entity.ai.goal.target.TargetGoal`: `canAttack`, `getFollowDistance`, `setUnseenMemoryTicks`, `stop`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## OwnerHurtByTargetGoal

*class* `net.minecraft.world.entity.ai.goal.target.OwnerHurtByTargetGoal`

### Fields
- `private final TamableAnimal tameAnimal`
- `private LivingEntity ownerLastHurtBy`
- `private int timestamp`

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.target.TargetGoal`: `mob`, `mustSee`, `targetMob`, `unseenMemoryTicks`

### Methods
- `public boolean canUse()`
- `public void start()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.target.TargetGoal`: `canAttack`, `canContinueToUse`, `getFollowDistance`, `setUnseenMemoryTicks`, `stop`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## OwnerHurtTargetGoal

*class* `net.minecraft.world.entity.ai.goal.target.OwnerHurtTargetGoal`

### Fields
- `private final TamableAnimal tameAnimal`
- `private LivingEntity ownerLastHurt`
- `private int timestamp`

### Inherited fields
- from `net.minecraft.world.entity.ai.goal.target.TargetGoal`: `mob`, `mustSee`, `targetMob`, `unseenMemoryTicks`

### Methods
- `public boolean canUse()`
- `public void start()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.target.TargetGoal`: `canAttack`, `canContinueToUse`, `getFollowDistance`, `setUnseenMemoryTicks`, `stop`
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`

## ResetUniversalAngerTargetGoal

*class* `net.minecraft.world.entity.ai.goal.target.ResetUniversalAngerTargetGoal`

### Fields
- `private static final int ALERT_RANGE_Y` (= 10)
- `private final T extends Mob & NeutralMob mob`
- `private final boolean alertOthersOfSameType`
- `private int lastHurtByPlayerTimestamp`

### Methods
- `public boolean canUse()`
- `private boolean wasHurtByPlayer()`
- `public void start()`
- `private List<? extends Mob> getNearbyMobsOfSameType()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `canContinueToUse`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `stop`, `tick`, `toString`

## TargetGoal

*class* `net.minecraft.world.entity.ai.goal.target.TargetGoal`

### Fields
- `private static final int EMPTY_REACH_CACHE` (= 0)
- `private static final int CAN_REACH_CACHE` (= 1)
- `private static final int CANT_REACH_CACHE` (= 2)
- `protected final Mob mob`
- `protected final boolean mustSee`
- `private final boolean mustReach`
- `private int reachCache`
- `private int reachCacheTime`
- `private int unseenTicks`
- `@Nullable protected LivingEntity targetMob`
- `protected int unseenMemoryTicks`

### Methods
- `public boolean canContinueToUse()`
- `protected double getFollowDistance()`
- `public void start()`
- `public void stop()`
- `protected boolean canAttack(@Nullable  LivingEntity p_26151_,  TargetingConditions p_26152_)`
- `private boolean canReach(LivingEntity p_26149_)`
- `public TargetGoal setUnseenMemoryTicks(int p_26147_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `canUse`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `tick`, `toString`
