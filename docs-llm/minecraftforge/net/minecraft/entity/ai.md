# net.minecraft.entity.ai

- [EntityAIAttackMelee](#entityaiattackmelee)
- [EntityAIAttackRanged](#entityaiattackranged)
- [EntityAIAttackRangedBow](#entityaiattackrangedbow)
- [EntityAIAvoidEntity](#entityaiavoidentity)
- [EntityAIBase](#entityaibase)
- [EntityAIBeg](#entityaibeg)
- [EntityAIBreakDoor](#entityaibreakdoor)
- [EntityAICreeperSwell](#entityaicreeperswell)
- [EntityAIDefendVillage](#entityaidefendvillage)
- [EntityAIDoorInteract](#entityaidoorinteract)
- [EntityAIEatGrass](#entityaieatgrass)
- [EntityAIFindEntityNearest](#entityaifindentitynearest)
- [EntityAIFindEntityNearestPlayer](#entityaifindentitynearestplayer)
- [EntityAIFleeSun](#entityaifleesun)
- [EntityAIFollow](#entityaifollow)
- [EntityAIFollowGolem](#entityaifollowgolem)
- [EntityAIFollowOwner](#entityaifollowowner)
- [EntityAIFollowOwnerFlying](#entityaifollowownerflying)
- [EntityAIFollowParent](#entityaifollowparent)
- [EntityAIHarvestFarmland](#entityaiharvestfarmland)
- [EntityAIHurtByTarget](#entityaihurtbytarget)
- [EntityAILandOnOwnersShoulder](#entityailandonownersshoulder)
- [EntityAILeapAtTarget](#entityaileapattarget)
- [EntityAILlamaFollowCaravan](#entityaillamafollowcaravan)
- [EntityAILookAtTradePlayer](#entityailookattradeplayer)
- [EntityAILookAtVillager](#entityailookatvillager)
- [EntityAILookIdle](#entityailookidle)
- [EntityAIMate](#entityaimate)
- [EntityAIMoveIndoors](#entityaimoveindoors)
- [EntityAIMoveThroughVillage](#entityaimovethroughvillage)
- [EntityAIMoveToBlock](#entityaimovetoblock)
- [EntityAIMoveTowardsRestriction](#entityaimovetowardsrestriction)
- [EntityAIMoveTowardsTarget](#entityaimovetowardstarget)
- [EntityAINearestAttackableTarget](#entityainearestattackabletarget)
- [EntityAINearestAttackableTarget.Sorter](#entityainearestattackabletarget.sorter)
- [EntityAIOcelotAttack](#entityaiocelotattack)
- [EntityAIOcelotSit](#entityaiocelotsit)
- [EntityAIOpenDoor](#entityaiopendoor)
- [EntityAIOwnerHurtByTarget](#entityaiownerhurtbytarget)
- [EntityAIOwnerHurtTarget](#entityaiownerhurttarget)
- [EntityAIPanic](#entityaipanic)
- [EntityAIPlay](#entityaiplay)
- [EntityAIRestrictOpenDoor](#entityairestrictopendoor)
- [EntityAIRestrictSun](#entityairestrictsun)
- [EntityAIRunAroundLikeCrazy](#entityairunaroundlikecrazy)
- [EntityAISit](#entityaisit)
- [EntityAISkeletonRiders](#entityaiskeletonriders)
- [EntityAISwimming](#entityaiswimming)
- [EntityAITarget](#entityaitarget)
- [EntityAITargetNonTamed](#entityaitargetnontamed)
- [EntityAITasks](#entityaitasks)
- [EntityAITasks.EntityAITaskEntry](#entityaitasks.entityaitaskentry)
- [EntityAITempt](#entityaitempt)
- [EntityAITradePlayer](#entityaitradeplayer)
- [EntityAIVillagerInteract](#entityaivillagerinteract)
- [EntityAIVillagerMate](#entityaivillagermate)
- [EntityAIWander](#entityaiwander)
- [EntityAIWanderAvoidWater](#entityaiwanderavoidwater)
- [EntityAIWanderAvoidWaterFlying](#entityaiwanderavoidwaterflying)
- [EntityAIWatchClosest](#entityaiwatchclosest)
- [EntityAIWatchClosest2](#entityaiwatchclosest2)
- [EntityAIZombieAttack](#entityaizombieattack)
- [EntityFlyHelper](#entityflyhelper)
- [EntityJumpHelper](#entityjumphelper)
- [EntityLookHelper](#entitylookhelper)
- [EntityMoveHelper](#entitymovehelper)
- [EntityMoveHelper.Action](#entitymovehelper.action)
- [EntitySenses](#entitysenses)
- [RandomPositionGenerator](#randompositiongenerator)
## EntityAIAttackMelee

*class* `net.minecraft.entity.ai.EntityAIAttackMelee`

### Fields
- `protected EntityCreature attacker`
- `protected int attackTick`
- `protected final int attackInterval` (= 20)

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void resetTask()`
- `public void updateTask()`
- `protected void checkAndPerformAttack(EntityLivingBase p_190102_1_,  double p_190102_2_)`
- `protected double getAttackReachSqr(EntityLivingBase attackTarget)`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAIAttackRanged

*class* `net.minecraft.entity.ai.EntityAIAttackRanged`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void resetTask()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`, `startExecuting`

## EntityAIAttackRangedBow

*class* `net.minecraft.entity.ai.EntityAIAttackRangedBow`

### Methods
- `public void setAttackCooldown(int p_189428_1_)`
- `public boolean shouldExecute()`
- `protected boolean isBowInMainhand()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void resetTask()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAIAvoidEntity

*class* `net.minecraft.entity.ai.EntityAIAvoidEntity`

### Fields
- `protected EntityCreature entity`
- `protected T extends Entity closestLivingEntity`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void resetTask()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAIBase

*class* `net.minecraft.entity.ai.EntityAIBase`

### Methods
- `public abstract boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public boolean isInterruptible()`
- `public void startExecuting()`
- `public void resetTask()`
- `public void updateTask()`
- `public void setMutexBits(int mutexBitsIn)`
- `public int getMutexBits()`

## EntityAIBeg

*class* `net.minecraft.entity.ai.EntityAIBeg`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void resetTask()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAIBreakDoor

*class* `net.minecraft.entity.ai.EntityAIBreakDoor`

### Inherited fields
- from `net.minecraft.entity.ai.EntityAIDoorInteract`: `doorBlock`, `doorPosition`, `entity`

### Methods
- `public boolean shouldExecute()`
- `public void startExecuting()`
- `public boolean shouldContinueExecuting()`
- `public void resetTask()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAICreeperSwell

*class* `net.minecraft.entity.ai.EntityAICreeperSwell`

### Methods
- `public boolean shouldExecute()`
- `public void startExecuting()`
- `public void resetTask()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`, `shouldContinueExecuting`

## EntityAIDefendVillage

*class* `net.minecraft.entity.ai.EntityAIDefendVillage`

### Inherited fields
- from `net.minecraft.entity.ai.EntityAITarget`: `shouldCheckSight`, `target`, `taskOwner`, `unseenMemoryTicks`

### Methods
- `public boolean shouldExecute()`
- `public void startExecuting()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAITarget`: `getTargetDistance`, `isSuitableTarget`, `isSuitableTarget`, `resetTask`, `setUnseenMemoryTicks`, `shouldContinueExecuting`
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`, `updateTask`

## EntityAIDoorInteract

*class* `net.minecraft.entity.ai.EntityAIDoorInteract`

### Fields
- `protected EntityLiving entity`
- `protected BlockPos doorPosition`
- `protected BlockDoor doorBlock`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `resetTask`, `setMutexBits`

## EntityAIEatGrass

*class* `net.minecraft.entity.ai.EntityAIEatGrass`

### Methods
- `public boolean shouldExecute()`
- `public void startExecuting()`
- `public void resetTask()`
- `public boolean shouldContinueExecuting()`
- `public int getEatingGrassTimer()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAIFindEntityNearest

*class* `net.minecraft.entity.ai.EntityAIFindEntityNearest`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void resetTask()`
- `protected double getFollowRange()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`, `updateTask`

## EntityAIFindEntityNearestPlayer

*class* `net.minecraft.entity.ai.EntityAIFindEntityNearestPlayer`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void resetTask()`
- `protected double maxTargetRange()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`, `updateTask`

## EntityAIFleeSun

*class* `net.minecraft.entity.ai.EntityAIFleeSun`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `resetTask`, `setMutexBits`, `updateTask`

## EntityAIFollow

*class* `net.minecraft.entity.ai.EntityAIFollow`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void resetTask()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAIFollowGolem

*class* `net.minecraft.entity.ai.EntityAIFollowGolem`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void resetTask()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAIFollowOwner

*class* `net.minecraft.entity.ai.EntityAIFollowOwner`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void resetTask()`
- `public void updateTask()`
- `protected boolean isTeleportFriendlyBlock(int x,  int p_192381_2_,  int y,  int p_192381_4_,  int p_192381_5_)`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAIFollowOwnerFlying

*class* `net.minecraft.entity.ai.EntityAIFollowOwnerFlying`

### Methods
- `protected boolean isTeleportFriendlyBlock(int x,  int p_192381_2_,  int y,  int p_192381_4_,  int p_192381_5_)`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIFollowOwner`: `resetTask`, `shouldContinueExecuting`, `shouldExecute`, `startExecuting`, `updateTask`
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAIFollowParent

*class* `net.minecraft.entity.ai.EntityAIFollowParent`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void resetTask()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAIHarvestFarmland

*class* `net.minecraft.entity.ai.EntityAIHarvestFarmland`

### Inherited fields
- from `net.minecraft.entity.ai.EntityAIMoveToBlock`: `destinationBlock`, `runDelay`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void updateTask()`
- `protected boolean shouldMoveTo(World worldIn,  BlockPos pos)`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIMoveToBlock`: `getIsAboveDestination`, `startExecuting`
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `resetTask`, `setMutexBits`

## EntityAIHurtByTarget

*class* `net.minecraft.entity.ai.EntityAIHurtByTarget`

### Inherited fields
- from `net.minecraft.entity.ai.EntityAITarget`: `shouldCheckSight`, `target`, `taskOwner`, `unseenMemoryTicks`

### Methods
- `public boolean shouldExecute()`
- `public void startExecuting()`
- `protected void alertOthers()`
- `protected void setEntityAttackTarget(EntityCreature creatureIn,  EntityLivingBase entityLivingBaseIn)`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAITarget`: `getTargetDistance`, `isSuitableTarget`, `isSuitableTarget`, `resetTask`, `setUnseenMemoryTicks`, `shouldContinueExecuting`
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`, `updateTask`

## EntityAILandOnOwnersShoulder

*class* `net.minecraft.entity.ai.EntityAILandOnOwnersShoulder`

### Methods
- `public boolean shouldExecute()`
- `public boolean isInterruptible()`
- `public void startExecuting()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `resetTask`, `setMutexBits`, `shouldContinueExecuting`

## EntityAILeapAtTarget

*class* `net.minecraft.entity.ai.EntityAILeapAtTarget`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `resetTask`, `setMutexBits`, `updateTask`

## EntityAILlamaFollowCaravan

*class* `net.minecraft.entity.ai.EntityAILlamaFollowCaravan`

### Fields
- `public EntityLlama llama`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void resetTask()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`, `startExecuting`

## EntityAILookAtTradePlayer

*class* `net.minecraft.entity.ai.EntityAILookAtTradePlayer`

### Inherited fields
- from `net.minecraft.entity.ai.EntityAIWatchClosest`: `closestEntity`, `entity`, `maxDistanceForPlayer`, `watchedClass`

### Methods
- `public boolean shouldExecute()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIWatchClosest`: `resetTask`, `shouldContinueExecuting`, `startExecuting`, `updateTask`
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAILookAtVillager

*class* `net.minecraft.entity.ai.EntityAILookAtVillager`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void resetTask()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAILookIdle

*class* `net.minecraft.entity.ai.EntityAILookIdle`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `resetTask`, `setMutexBits`

## EntityAIMate

*class* `net.minecraft.entity.ai.EntityAIMate`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void resetTask()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`, `startExecuting`

## EntityAIMoveIndoors

*class* `net.minecraft.entity.ai.EntityAIMoveIndoors`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void resetTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`, `updateTask`

## EntityAIMoveThroughVillage

*class* `net.minecraft.entity.ai.EntityAIMoveThroughVillage`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void resetTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`, `updateTask`

## EntityAIMoveToBlock

*class* `net.minecraft.entity.ai.EntityAIMoveToBlock`

### Fields
- `protected int runDelay`
- `protected BlockPos destinationBlock`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void updateTask()`
- `protected boolean getIsAboveDestination()`
- `protected abstract boolean shouldMoveTo(World worldIn,  BlockPos pos)`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `resetTask`, `setMutexBits`

## EntityAIMoveTowardsRestriction

*class* `net.minecraft.entity.ai.EntityAIMoveTowardsRestriction`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `resetTask`, `setMutexBits`, `updateTask`

## EntityAIMoveTowardsTarget

*class* `net.minecraft.entity.ai.EntityAIMoveTowardsTarget`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void resetTask()`
- `public void startExecuting()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`, `updateTask`

## EntityAINearestAttackableTarget

*class* `net.minecraft.entity.ai.EntityAINearestAttackableTarget`

### Fields
- `protected final java.lang.Class<T extends EntityLivingBase> targetClass`
- `protected final EntityAINearestAttackableTarget.Sorter sorter`
- `protected final <any> targetEntitySelector`
- `protected T extends EntityLivingBase targetEntity`

### Inherited fields
- from `net.minecraft.entity.ai.EntityAITarget`: `shouldCheckSight`, `target`, `taskOwner`, `unseenMemoryTicks`

### Methods
- `public boolean shouldExecute()`
- `protected AxisAlignedBB getTargetableArea(double targetDistance)`
- `public void startExecuting()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAITarget`: `getTargetDistance`, `isSuitableTarget`, `isSuitableTarget`, `resetTask`, `setUnseenMemoryTicks`, `shouldContinueExecuting`
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`, `updateTask`

## EntityAINearestAttackableTarget.Sorter

*class* `net.minecraft.entity.ai.EntityAINearestAttackableTarget.Sorter`

All Implemented Interfaces: java.util.Comparator<Entity>

Enclosing class: EntityAINearestAttackableTarget<T extends EntityLivingBase>

### Methods
- `public int compare(Entity p_compare_1_,  Entity p_compare_2_)`

### Inherited methods
- from `java.util.Comparator`: `comparing`, `comparing`, `comparingDouble`, `comparingInt`, `comparingLong`, `equals`, `naturalOrder`, `nullsFirst`, `nullsLast`, `reversed`, `reverseOrder`, `thenComparing`, `thenComparing`, `thenComparing`, `thenComparingDouble`, `thenComparingInt`, `thenComparingLong`

## EntityAIOcelotAttack

*class* `net.minecraft.entity.ai.EntityAIOcelotAttack`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void resetTask()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`, `startExecuting`

## EntityAIOcelotSit

*class* `net.minecraft.entity.ai.EntityAIOcelotSit`

### Inherited fields
- from `net.minecraft.entity.ai.EntityAIMoveToBlock`: `destinationBlock`, `runDelay`

### Methods
- `public boolean shouldExecute()`
- `public void startExecuting()`
- `public void resetTask()`
- `public void updateTask()`
- `protected boolean shouldMoveTo(World worldIn,  BlockPos pos)`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIMoveToBlock`: `getIsAboveDestination`, `shouldContinueExecuting`
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAIOpenDoor

*class* `net.minecraft.entity.ai.EntityAIOpenDoor`

### Inherited fields
- from `net.minecraft.entity.ai.EntityAIDoorInteract`: `doorBlock`, `doorPosition`, `entity`

### Methods
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void resetTask()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIDoorInteract`: `shouldExecute`
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAIOwnerHurtByTarget

*class* `net.minecraft.entity.ai.EntityAIOwnerHurtByTarget`

### Inherited fields
- from `net.minecraft.entity.ai.EntityAITarget`: `shouldCheckSight`, `target`, `taskOwner`, `unseenMemoryTicks`

### Methods
- `public boolean shouldExecute()`
- `public void startExecuting()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAITarget`: `getTargetDistance`, `isSuitableTarget`, `isSuitableTarget`, `resetTask`, `setUnseenMemoryTicks`, `shouldContinueExecuting`
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`, `updateTask`

## EntityAIOwnerHurtTarget

*class* `net.minecraft.entity.ai.EntityAIOwnerHurtTarget`

### Inherited fields
- from `net.minecraft.entity.ai.EntityAITarget`: `shouldCheckSight`, `target`, `taskOwner`, `unseenMemoryTicks`

### Methods
- `public boolean shouldExecute()`
- `public void startExecuting()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAITarget`: `getTargetDistance`, `isSuitableTarget`, `isSuitableTarget`, `resetTask`, `setUnseenMemoryTicks`, `shouldContinueExecuting`
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`, `updateTask`

## EntityAIPanic

*class* `net.minecraft.entity.ai.EntityAIPanic`

### Fields
- `protected final EntityCreature creature`
- `protected double speed`
- `protected double randPosX`
- `protected double randPosY`
- `protected double randPosZ`

### Methods
- `public boolean shouldExecute()`
- `protected boolean findRandomPosition()`
- `public void startExecuting()`
- `public boolean shouldContinueExecuting()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `resetTask`, `setMutexBits`, `updateTask`

## EntityAIPlay

*class* `net.minecraft.entity.ai.EntityAIPlay`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void resetTask()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAIRestrictOpenDoor

*class* `net.minecraft.entity.ai.EntityAIRestrictOpenDoor`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void resetTask()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAIRestrictSun

*class* `net.minecraft.entity.ai.EntityAIRestrictSun`

### Methods
- `public boolean shouldExecute()`
- `public void startExecuting()`
- `public void resetTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`, `shouldContinueExecuting`, `updateTask`

## EntityAIRunAroundLikeCrazy

*class* `net.minecraft.entity.ai.EntityAIRunAroundLikeCrazy`

### Methods
- `public boolean shouldExecute()`
- `public void startExecuting()`
- `public boolean shouldContinueExecuting()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `resetTask`, `setMutexBits`

## EntityAISit

*class* `net.minecraft.entity.ai.EntityAISit`

### Methods
- `public boolean shouldExecute()`
- `public void startExecuting()`
- `public void resetTask()`
- `public void setSitting(boolean sitting)`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`, `shouldContinueExecuting`, `updateTask`

## EntityAISkeletonRiders

*class* `net.minecraft.entity.ai.EntityAISkeletonRiders`

### Methods
- `public boolean shouldExecute()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `resetTask`, `setMutexBits`, `shouldContinueExecuting`, `startExecuting`

## EntityAISwimming

*class* `net.minecraft.entity.ai.EntityAISwimming`

### Methods
- `public boolean shouldExecute()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `resetTask`, `setMutexBits`, `shouldContinueExecuting`, `startExecuting`

## EntityAITarget

*class* `net.minecraft.entity.ai.EntityAITarget`

### Fields
- `protected final EntityCreature taskOwner`
- `protected boolean shouldCheckSight`
- `protected EntityLivingBase target`
- `protected int unseenMemoryTicks`

### Methods
- `public boolean shouldContinueExecuting()`
- `protected double getTargetDistance()`
- `public void startExecuting()`
- `public void resetTask()`
- `public static boolean isSuitableTarget(EntityLiving attacker,  EntityLivingBase target,  boolean includeInvincibles,  boolean checkSight)`
- `protected boolean isSuitableTarget(EntityLivingBase target,  boolean includeInvincibles)`
- `public EntityAITarget setUnseenMemoryTicks(int p_190882_1_)`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`, `shouldExecute`, `updateTask`

## EntityAITargetNonTamed

*class* `net.minecraft.entity.ai.EntityAITargetNonTamed`

### Inherited fields
- from `net.minecraft.entity.ai.EntityAINearestAttackableTarget`: `sorter`, `targetClass`, `targetEntity`, `targetEntitySelector`
- from `net.minecraft.entity.ai.EntityAITarget`: `shouldCheckSight`, `target`, `taskOwner`, `unseenMemoryTicks`

### Methods
- `public boolean shouldExecute()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAINearestAttackableTarget`: `getTargetableArea`, `startExecuting`
- from `net.minecraft.entity.ai.EntityAITarget`: `getTargetDistance`, `isSuitableTarget`, `isSuitableTarget`, `resetTask`, `setUnseenMemoryTicks`, `shouldContinueExecuting`
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`, `updateTask`

## EntityAITasks

*class* `net.minecraft.entity.ai.EntityAITasks`

### Fields
- `public final java.util.Set<EntityAITasks.EntityAITaskEntry> taskEntries`

### Methods
- `public void addTask(int priority,  EntityAIBase task)`
- `public void removeTask(EntityAIBase task)`
- `public void onUpdateTasks()`
- `public boolean isControlFlagDisabled(int p_188528_1_)`
- `public void disableControlFlag(int p_188526_1_)`
- `public void enableControlFlag(int p_188525_1_)`
- `public void setControlFlag(int p_188527_1_,  boolean p_188527_2_)`

## EntityAITasks.EntityAITaskEntry

*class* `net.minecraft.entity.ai.EntityAITasks.EntityAITaskEntry`

Enclosing class: EntityAITasks

### Fields
- `public final EntityAIBase action`
- `public final int priority`
- `public boolean using`

### Methods
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`

## EntityAITempt

*class* `net.minecraft.entity.ai.EntityAITempt`

### Methods
- `public boolean shouldExecute()`
- `protected boolean isTempting(ItemStack stack)`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void resetTask()`
- `public void updateTask()`
- `public boolean isRunning()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAITradePlayer

*class* `net.minecraft.entity.ai.EntityAITradePlayer`

### Methods
- `public boolean shouldExecute()`
- `public void startExecuting()`
- `public void resetTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`, `shouldContinueExecuting`, `updateTask`

## EntityAIVillagerInteract

*class* `net.minecraft.entity.ai.EntityAIVillagerInteract`

### Inherited fields
- from `net.minecraft.entity.ai.EntityAIWatchClosest`: `closestEntity`, `entity`, `maxDistanceForPlayer`, `watchedClass`

### Methods
- `public void startExecuting()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIWatchClosest`: `resetTask`, `shouldContinueExecuting`, `shouldExecute`
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAIVillagerMate

*class* `net.minecraft.entity.ai.EntityAIVillagerMate`

### Methods
- `public boolean shouldExecute()`
- `public void startExecuting()`
- `public void resetTask()`
- `public boolean shouldContinueExecuting()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAIWander

*class* `net.minecraft.entity.ai.EntityAIWander`

### Fields
- `protected final EntityCreature entity`
- `protected double x`
- `protected double y`
- `protected double z`
- `protected final double speed`
- `protected int executionChance`
- `protected boolean mustUpdate`

### Methods
- `public boolean shouldExecute()`
- `protected Vec3d getPosition()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void makeUpdate()`
- `public void setExecutionChance(int newchance)`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `resetTask`, `setMutexBits`, `updateTask`

## EntityAIWanderAvoidWater

*class* `net.minecraft.entity.ai.EntityAIWanderAvoidWater`

### Fields
- `protected final float probability`

### Inherited fields
- from `net.minecraft.entity.ai.EntityAIWander`: `entity`, `executionChance`, `mustUpdate`, `speed`, `x`, `y`, `z`

### Methods
- `protected Vec3d getPosition()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIWander`: `makeUpdate`, `setExecutionChance`, `shouldContinueExecuting`, `shouldExecute`, `startExecuting`
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `resetTask`, `setMutexBits`, `updateTask`

## EntityAIWanderAvoidWaterFlying

*class* `net.minecraft.entity.ai.EntityAIWanderAvoidWaterFlying`

### Inherited fields
- from `net.minecraft.entity.ai.EntityAIWanderAvoidWater`: `probability`
- from `net.minecraft.entity.ai.EntityAIWander`: `entity`, `executionChance`, `mustUpdate`, `speed`, `x`, `y`, `z`

### Methods
- `protected Vec3d getPosition()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIWander`: `makeUpdate`, `setExecutionChance`, `shouldContinueExecuting`, `shouldExecute`, `startExecuting`
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `resetTask`, `setMutexBits`, `updateTask`

## EntityAIWatchClosest

*class* `net.minecraft.entity.ai.EntityAIWatchClosest`

### Fields
- `protected EntityLiving entity`
- `protected Entity closestEntity`
- `protected float maxDistanceForPlayer`
- `protected java.lang.Class<? extends Entity> watchedClass`

### Methods
- `public boolean shouldExecute()`
- `public boolean shouldContinueExecuting()`
- `public void startExecuting()`
- `public void resetTask()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAIWatchClosest2

*class* `net.minecraft.entity.ai.EntityAIWatchClosest2`

### Inherited fields
- from `net.minecraft.entity.ai.EntityAIWatchClosest`: `closestEntity`, `entity`, `maxDistanceForPlayer`, `watchedClass`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIWatchClosest`: `resetTask`, `shouldContinueExecuting`, `shouldExecute`, `startExecuting`, `updateTask`
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityAIZombieAttack

*class* `net.minecraft.entity.ai.EntityAIZombieAttack`

### Inherited fields
- from `net.minecraft.entity.ai.EntityAIAttackMelee`: `attacker`, `attackInterval`, `attackTick`

### Methods
- `public void startExecuting()`
- `public void resetTask()`
- `public void updateTask()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityAIAttackMelee`: `checkAndPerformAttack`, `getAttackReachSqr`, `shouldContinueExecuting`, `shouldExecute`
- from `net.minecraft.entity.ai.EntityAIBase`: `getMutexBits`, `isInterruptible`, `setMutexBits`

## EntityFlyHelper

*class* `net.minecraft.entity.ai.EntityFlyHelper`

### Inherited fields
- from `net.minecraft.entity.ai.EntityMoveHelper`: `action`, `entity`, `moveForward`, `moveStrafe`, `posX`, `posY`, `posZ`, `speed`

### Methods
- `public void onUpdateMoveHelper()`

### Inherited methods
- from `net.minecraft.entity.ai.EntityMoveHelper`: `getSpeed`, `getX`, `getY`, `getZ`, `isUpdating`, `limitAngle`, `read`, `setMoveTo`, `strafe`

## EntityJumpHelper

*class* `net.minecraft.entity.ai.EntityJumpHelper`

### Fields
- `protected boolean isJumping`

### Methods
- `public void setJumping()`
- `public void doJump()`

## EntityLookHelper

*class* `net.minecraft.entity.ai.EntityLookHelper`

### Methods
- `public void setLookPositionWithEntity(Entity entityIn,  float deltaYaw,  float deltaPitch)`
- `public void setLookPosition(double x,  double y,  double z,  float deltaYaw,  float deltaPitch)`
- `public void onUpdateLook()`
- `public boolean getIsLooking()`
- `public double getLookPosX()`
- `public double getLookPosY()`
- `public double getLookPosZ()`

## EntityMoveHelper

*class* `net.minecraft.entity.ai.EntityMoveHelper`

### Fields
- `protected final EntityLiving entity`
- `protected double posX`
- `protected double posY`
- `protected double posZ`
- `protected double speed`
- `protected float moveForward`
- `protected float moveStrafe`
- `public EntityMoveHelper.Action action`

### Methods
- `public boolean isUpdating()`
- `public double getSpeed()`
- `public void setMoveTo(double x,  double y,  double z,  double speedIn)`
- `public void strafe(float forward,  float strafe)`
- `public void read(EntityMoveHelper that)`
- `public void onUpdateMoveHelper()`
- `protected float limitAngle(float sourceAngle,  float targetAngle,  float maximumChange)`
- `public double getX()`
- `public double getY()`
- `public double getZ()`

## EntityMoveHelper.Action

*enum* `net.minecraft.entity.ai.EntityMoveHelper.Action`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EntityMoveHelper.Action>

Enclosing class: EntityMoveHelper

### Fields
- `public static final EntityMoveHelper.Action WAIT`
- `public static final EntityMoveHelper.Action MOVE_TO`
- `public static final EntityMoveHelper.Action STRAFE`
- `public static final EntityMoveHelper.Action JUMPING`

### Methods
- `public static EntityMoveHelper.Action[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EntityMoveHelper.Action c : EntityMoveHelper.Action.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EntityMoveHelper.Action valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## EntitySenses

*class* `net.minecraft.entity.ai.EntitySenses`

### Methods
- `public void clearSensingCache()`
- `public boolean canSee(Entity entityIn)`

## RandomPositionGenerator

*class* `net.minecraft.entity.ai.RandomPositionGenerator`

### Methods
- `public static Vec3d findRandomTarget(EntityCreature entitycreatureIn,  int xz,  int y)`
- `public static Vec3d getLandPos(EntityCreature p_191377_0_,  int p_191377_1_,  int p_191377_2_)`
- `public static Vec3d findRandomTargetBlockTowards(EntityCreature entitycreatureIn,  int xz,  int y,  Vec3d targetVec3)`
- `public static Vec3d findRandomTargetBlockAwayFrom(EntityCreature entitycreatureIn,  int xz,  int y,  Vec3d targetVec3)`
