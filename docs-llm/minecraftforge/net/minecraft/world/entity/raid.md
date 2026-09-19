# net.minecraft.world.entity.raid

- [Class Raid.RaiderType](#class-raid.raidertype)
- [Class Raid.RaidStatus](#class-raid.raidstatus)
- [Raid](#raid)
- [Raider](#raider)
- [Raider.HoldGroundAttackGoal](#raider.holdgroundattackgoal)
- [Raider.ObtainRaidLeaderBannerGoal](#raider.obtainraidleaderbannergoal)
- [Raider.RaiderCelebration](#raider.raidercelebration)
- [Raider.RaiderMoveThroughVillageGoal](#raider.raidermovethroughvillagegoal)
- [Raids](#raids)
## Class Raid.RaiderType

*enum* `net.minecraft.world.entity.raid.Class Raid.RaiderType`

Enclosing class: Raid

### Fields
- `static Raid.RaiderType[] VALUES`
- `final EntityType<? extends Raider> entityType`
- `final int[] spawnsPerWaveBeforeBonus`

### Methods
- `public static Raid.RaiderType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Raid.RaiderType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static Raid.RaiderType create(String name,  EntityType<? extends Raider> typeIn,  int[] waveCountsIn)`
  The waveCountsIn integer decides how many entities of the EntityType defined in typeIn will spawn in each wave.
   For example, one ravager will always spawn in wave 3.
- `@Deprecated public void init()` (deprecated)
  Description copied from interface: IExtensibleEnum
  Called by generated factory code to do any post-constructor setup required by
   the enum. Should not be called manually.

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Raid.RaidStatus

*enum* `net.minecraft.world.entity.raid.Class Raid.RaidStatus`

Enclosing class: Raid

### Fields
- `private static final Raid.RaidStatus[] VALUES`

### Methods
- `public static Raid.RaidStatus[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Raid.RaidStatus valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `static Raid.RaidStatus getByName(String p_37804_)`
- `public String getName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Raid

*class* `net.minecraft.world.entity.raid.Raid`

### Fields
- `private static final int SECTION_RADIUS_FOR_FINDING_NEW_VILLAGE_CENTER` (= 2)
- `private static final int ATTEMPT_RAID_FARTHEST` (= 0)
- `private static final int ATTEMPT_RAID_CLOSE` (= 1)
- `private static final int ATTEMPT_RAID_INSIDE` (= 2)
- `private static final int VILLAGE_SEARCH_RADIUS` (= 32)
- `private static final int RAID_TIMEOUT_TICKS` (= 48000)
- `private static final int NUM_SPAWN_ATTEMPTS` (= 3)
- `private static final String OMINOUS_BANNER_PATTERN_NAME` (= "block.minecraft.ominous_banner")
- `private static final String RAIDERS_REMAINING` (= "event.minecraft.raid.raiders_remaining")
- `public static final int VILLAGE_RADIUS_BUFFER` (= 16)
- `private static final int POST_RAID_TICK_LIMIT` (= 40)
- `private static final int DEFAULT_PRE_RAID_TICKS` (= 300)
- `public static final int MAX_NO_ACTION_TIME` (= 2400)
- `public static final int MAX_CELEBRATION_TICKS` (= 600)
- `private static final int OUTSIDE_RAID_BOUNDS_TIMEOUT` (= 30)
- `public static final int TICKS_PER_DAY` (= 24000)
- `public static final int DEFAULT_MAX_BAD_OMEN_LEVEL` (= 5)
- `private static final int LOW_MOB_THRESHOLD` (= 2)
- `private static final Component RAID_NAME_COMPONENT`
- `private static final Component RAID_BAR_VICTORY_COMPONENT`
- `private static final Component RAID_BAR_DEFEAT_COMPONENT`
- `private static final int HERO_OF_THE_VILLAGE_DURATION` (= 48000)
- `public static final int VALID_RAID_RADIUS_SQR` (= 9216)
- `public static final int RAID_REMOVAL_THRESHOLD_SQR` (= 12544)
- `private final Map<Integer,Raider> groupToLeaderMap`
- `private final Map<Integer,Set<Raider>> groupRaiderMap`
- `private final Set<UUID> heroesOfTheVillage`
- `private long ticksActive`
- `private BlockPos center`
- `private final ServerLevel level`
- `private boolean started`
- `private final int id`
- `private float totalHealth`
- `private int badOmenLevel`
- `private boolean active`
- `private int groupsSpawned`
- `private final ServerBossEvent raidEvent`
- `private int postRaidTicks`
- `private int raidCooldownTicks`
- `private final RandomSource random`
- `private final int numGroups`
- `private Raid.RaidStatus status`
- `private int celebrationTicks`
- `private Optional<BlockPos> waveSpawnPos`

### Methods
- `public boolean isOver()`
- `public boolean isBetweenWaves()`
- `public boolean hasFirstWaveSpawned()`
- `public boolean isStopped()`
- `public boolean isVictory()`
- `public boolean isLoss()`
- `public float getTotalHealth()`
- `public Set<Raider> getAllRaiders()`
- `public Level getLevel()`
- `public boolean isStarted()`
- `public int getGroupsSpawned()`
- `private Predicate<ServerPlayer> validPlayer()`
- `private void updatePlayers()`
- `public int getMaxBadOmenLevel()`
- `public int getBadOmenLevel()`
- `public void setBadOmenLevel(int p_150219_)`
- `public void absorbBadOmen(Player p_37729_)`
- `public void stop()`
- `public void tick()`
- `private void moveRaidCenterToNearbyVillageSection()`
- `private Optional<BlockPos> getValidSpawnPos(int p_37764_)`
- `private boolean hasMoreWaves()`
- `private boolean isFinalWave()`
- `private boolean hasBonusWave()`
- `private boolean hasSpawnedBonusWave()`
- `private boolean shouldSpawnBonusGroup()`
- `private void updateRaiders()`
- `private void playSound(BlockPos p_37744_)`
- `private void spawnGroup(BlockPos p_37756_)`
- `public void joinRaid(int p_37714_,  Raider p_37715_,  @Nullable  BlockPos p_37716_,  boolean p_37717_)`
- `public void updateBossbar()`
- `public float getHealthOfLivingRaiders()`
- `private boolean shouldSpawnGroup()`
- `public int getTotalRaidersAlive()`
- `public void removeFromRaid(Raider p_37741_,  boolean p_37742_)`
- `private void setDirty()`
- `public static ItemStack getLeaderBannerInstance()`
- `@Nullable public Raider getLeader(int p_37751_)`
- `@Nullable private BlockPos findRandomSpawnPos(int p_37708_,  int p_37709_)`
- `private boolean addWaveMob(int p_37753_,  Raider p_37754_)`
- `public boolean addWaveMob(int p_37719_,  Raider p_37720_,  boolean p_37721_)`
- `public void setLeader(int p_37711_,  Raider p_37712_)`
- `public void removeLeader(int p_37759_)`
- `public BlockPos getCenter()`
- `private void setCenter(BlockPos p_37761_)`
- `public int getId()`
- `private int getDefaultNumSpawns(Raid.RaiderType p_37731_,  int p_37732_,  boolean p_37733_)`
- `private int getPotentialBonusSpawns(Raid.RaiderType p_219829_,  RandomSource p_219830_,  int p_219831_,  DifficultyInstance p_219832_,  boolean p_219833_)`
- `public boolean isActive()`
- `public CompoundTag save(CompoundTag p_37748_)`
- `public int getNumGroups(Difficulty p_37725_)`
- `public float getEnchantOdds()`
- `public void addHeroOfTheVillage(Entity p_37727_)`

## Raider

*class* `net.minecraft.world.entity.raid.Raider`

### Fields
- `protected static final EntityDataAccessor<Boolean> IS_CELEBRATING`
- `static final Predicate<ItemEntity> ALLOWED_ITEMS`
- `@Nullable protected Raid raid`
- `private int wave`
- `private boolean canJoinRaid`
- `private int ticksOutsideRaid`

### Inherited fields
- from `net.minecraft.world.entity.PathfinderMob`: `DEFAULT_WALK_TARGET_VALUE`
- from `net.minecraft.world.entity.Mob`: `ambientSoundTime`, `armorDropChances`, `DEFAULT_EQUIPMENT_DROP_CHANCE`, `goalSelector`, `handDropChances`, `jumpControl`, `LEASH_TAG`, `lookControl`, `MAX_ENCHANTED_ARMOR_CHANCE`, `MAX_ENCHANTED_WEAPON_CHANCE`, `MAX_PICKUP_LOOT_CHANCE`, `MAX_WEARING_ARMOR_CHANCE`, `moveControl`, `navigation`, `PICKUP_REACH`, `PRESERVE_ITEM_DROP_CHANCE`, `targetSelector`, `UPDATE_GOAL_SELECTOR_EVERY_N_TICKS`, `xpReward`
- from `net.minecraft.world.entity.LivingEntity`: `animStep`, `animStepO`, `ARMOR_SLOT_OFFSET`, `ARMOR_SLOTS`, `attackAnim`, `attackStrengthTicker`, `autoSpinAttackTicks`, `brain`, `DATA_LIVING_ENTITY_FLAGS`, `dead`, `DEATH_DURATION`, `deathScore`, `deathTime`, `DEFAULT_BASE_GRAVITY`, `DEFAULT_EYE_HEIGHT`, `EQUIPMENT_SLOT_OFFSET`, `EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT`, `fallFlyTicks`, `HAND_SLOTS`, `hurtDuration`, `hurtTime`, `invulnerableDuration`, `jumping`, `lastHurt`, `lastHurtByPlayer`, `lastHurtByPlayerTime`, `lerpHeadSteps`, `lerpSteps`, `lerpX`, `lerpXRot`, `lerpY`, `lerpYHeadRot`, `lerpYRot`, `lerpZ`, `LIVING_ENTITY_FLAG_IS_USING`, `LIVING_ENTITY_FLAG_OFF_HAND`, `LIVING_ENTITY_FLAG_SPIN_ATTACK`, `MIN_MOVEMENT_DISTANCE`, `noActionTime`, `oAttackAnim`, `oRun`, `PLAYER_HURT_EXPERIENCE_TIME`, `removeArrowTime`, `removeStingerTime`, `rotA`, `rotOffs`, `run`, `SLEEPING_DIMENSIONS`, `SWING_DURATION`, `swinging`, `swingingArm`, `swingTime`, `timeOffs`, `USE_ITEM_INTERVAL`, `useItem`, `useItemRemaining`, `walkAnimation`, `xxa`, `yBodyRot`, `yBodyRotO`, `yHeadRot`, `yHeadRotO`, `yya`, `zza`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`
- from `net.minecraft.world.entity.monster.Enemy`: `XP_REWARD_BOSS`, `XP_REWARD_HUGE`, `XP_REWARD_LARGE`, `XP_REWARD_MEDIUM`, `XP_REWARD_NONE`, `XP_REWARD_SMALL`

### Methods
- `protected void registerGoals()`
- `protected void defineSynchedData()`
- `public abstract void applyRaidBuffs(int p_37844_,  boolean p_37845_)`
- `public boolean canJoinRaid()`
- `public void setCanJoinRaid(boolean p_37898_)`
- `public void aiStep()`
- `protected void updateNoActionTime()`
- `public void die(DamageSource p_37847_)`
- `public boolean canJoinPatrol()`
- `public void setCurrentRaid(@Nullable  Raid p_37852_)`
- `@Nullable public Raid getCurrentRaid()`
- `public boolean hasActiveRaid()`
- `public void setWave(int p_37843_)`
- `public int getWave()`
- `public boolean isCelebrating()`
- `public void setCelebrating(boolean p_37900_)`
- `public void addAdditionalSaveData(CompoundTag p_37870_)`
- `public void readAdditionalSaveData(CompoundTag p_37862_)`
- `protected void pickUpItem(ItemEntity p_37866_)`
- `public boolean removeWhenFarAway(double p_37894_)`
- `public boolean requiresCustomPersistence()`
- `public int getTicksOutsideRaid()`
- `public void setTicksOutsideRaid(int p_37864_)`
- `public boolean hurt(DamageSource p_37849_,  float p_37850_)`
- `@Nullable public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_37856_,  DifficultyInstance p_37857_,  MobSpawnType p_37858_,  @Nullable  SpawnGroupData p_37859_,  @Nullable  CompoundTag p_37860_)`
  Description copied from class: Mob
  Forge: Override-Only, call via ForgeEventFactory.onFinalizeSpawn.
  
   Overrides are allowed. Do not wrap super calls within override (as that will cause stack overflows).
  
   Vanilla calls are replaced with a transformer, and are not visible in source.
  
   Be certain to either call super.finalizeSpawn or set the Mob.spawnType field from within your override.
- `public abstract SoundEvent getCelebrateSound()`

### Inherited methods
- from `net.minecraft.world.entity.monster.PatrollingMonster`: `canBeLeader`, `checkPatrollingMonsterSpawnRules`, `findPatrolTarget`, `getPatrolTarget`, `hasPatrolTarget`, `isPatrolLeader`, `isPatrolling`, `setPatrolLeader`, `setPatrolling`, `setPatrolTarget`
- from `net.minecraft.world.entity.monster.Monster`: `checkAnyLightMonsterSpawnRules`, `checkMonsterSpawnRules`, `createMonsterAttributes`, `getDeathSound`, `getFallSounds`, `getHurtSound`, `getProjectile`, `getSoundSource`, `getSwimSound`, `getSwimSplashSound`, `getWalkTargetValue`, `isDarkEnoughToSpawn`, `isPreventingPlayerRest`, `shouldDespawnInPeaceful`, `shouldDropExperience`, `shouldDropLoot`
- from `net.minecraft.world.entity.PathfinderMob`: `checkSpawnRules`, `followLeashSpeed`, `getWalkTargetValue`, `isPanicking`, `isPathFinding`, `onLeashDistance`, `shouldStayCloseToLeashHolder`, `tickLeash`
- from `net.minecraft.world.entity.Mob`: `ate`, `baseTick`, `canAttackType`, `canBeLeashed`, `canFireProjectileWeapon`, `canHoldItem`, `canPickUpLoot`, `canReplaceCurrentItem`, `canReplaceEqualItem`, `canTakeItem`, `checkDespawn`, `checkMobSpawnRules`, `checkSpawnObstruction`, `clearRestriction`, `convertTo`, `createBodyControl`, `createMobAttributes`, `createNavigation`, `customServerAiStep`, `doHurtTarget`, `dropCustomDeathLoot`, `dropFromLootTable`, `dropLeash`, `enchantSpawnedArmor`, `enchantSpawnedWeapon`, `equipItemIfPossible`, `getAmbientSound`, `getAmbientSoundInterval`, `getArmorSlots`, `getAttackBoundingBox`, `getControllingPassenger`, `getDefaultLootTable`, `getEquipmentDropChance`, `getEquipmentForSlot`, `getExperienceReward`, `getHandSlots`, `getHeadRotSpeed`, `getItemBySlot`, `getJumpControl`, `getLeashHolder`, `getLookControl`, `getLootTable`, `getLootTableSeed`, `getMainArm`, `getMaxFallDistance`, `getMaxHeadXRot`, `getMaxHeadYRot`, `getMaxSpawnClusterSize`, `getMoveControl`, `getNavigation`, `getPathfindingMalus`, `getPickResult`, `getPickupReach`, `getRestrictCenter`, `getRestrictRadius`, `getSensing`, `getSpawnType`, `getTarget`, `handleEntityEvent`, `hasRestriction`, `interact`, `isAggressive`, `isEffectiveAi`, `isLeashed`, `isLeftHanded`, `isMaxGroupSizeReached`, `isNoAi`, `isPersistenceRequired`, `isSpawnCancelled`, `isSunBurnTick`, `isWithinMeleeAttackRange`, `isWithinRestriction`, `isWithinRestriction`, `jumpInFluid`, `jumpInLiquid`, `lookAt`, `mobInteract`, `onOffspringSpawnedFromEgg`, `onPathfindingDone`, `onPathfindingStart`, `playAmbientSound`, `playHurtSound`, `populateDefaultEquipmentEnchantments`, `populateDefaultEquipmentSlots`, `removeAfterChangingDimensions`, `removeAllGoals`, `removeFreeWill`, `restrictTo`, `sendDebugPackets`, `serverAiStep`, `setAggressive`, `setBaby`, `setCanPickUpLoot`, `setDelayedLeashHolderId`, `setDropChance`, `setGuaranteedDrop`, `setItemSlot`, `setItemSlotAndDropWhenKilled`, `setLeashedTo`, `setLeftHanded`, `setNoAi`, `setPathfindingMalus`, `setPersistenceRequired`, `setSpawnCancelled`, `setSpeed`, `setTarget`, `setXxa`, `setYya`, `setZza`, `shouldPassengersInheritMalus`, `spawnAnim`, `startRiding`, `tick`, `tickHeadTurn`, `updateControlFlags`, `wantsToPickUp`
- from `net.minecraft.world.entity.LivingEntity`: `actuallyHurt`, `addEffect`, `addEffect`, `animateHurt`, `areAllEffectsAmbient`, `attackable`, `blockedByShield`, `blockUsingShield`, `brainProvider`, `broadcastBreakEvent`, `broadcastBreakEvent`, `calculateEntityAnimation`, `calculateFallDamage`, `canAttack`, `canAttack`, `canBeAffected`, `canBeSeenAsEnemy`, `canBeSeenByAnyone`, `canBreatheUnderwater`, `canChangeDimensions`, `canDisableShield`, `canFreeze`, `canSpawnSoulSpeedParticle`, `canStandOnFluid`, `causeFallDamage`, `checkAutoSpinAttack`, `checkFallDamage`, `clearSleepingPos`, `completeUsingItem`, `createLivingAttributes`, `createWitherRose`, `curePotionEffects`, `decreaseAirSupply`, `doAutoAttackOnTouch`, `doesEmitEquipEvent`, `doPush`, `dropAllDeathLoot`, `dropEquipment`, `dropExperience`, `eat`, `equipmentHasChanged`, `forceAddEffect`, `getAbsorptionAmount`, `getActiveEffects`, `getActiveEffectsMap`, `getArmorCoverPercentage`, `getArmorValue`, `getArrowCount`, `getAttackAnim`, `getAttribute`, `getAttributeBaseValue`, `getAttributeBaseValue`, `getAttributes`, `getAttributeValue`, `getAttributeValue`, `getBedOrientation`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getBrain`, `getCapability`, `getCombatTracker`, `getDamageAfterArmorAbsorb`, `getDamageAfterMagicAbsorb`, `getDimensions`, `getDismountPoses`, `getDrinkingSound`, `getEatingSound`, `getEffect`, `getEquipmentSlotForItem`, `getEyeHeight`, `getFallFlyingTicks`, `getFluidFallingAdjustedMovement`, `getFlyingSpeed`, `getHealth`, `getHitbox`, `getHurtDir`, `getItemInHand`, `getJumpBoostPower`, `getJumpPower`, `getKillCredit`, `getLastAttacker`, `getLastClimbablePos`, `getLastDamageSource`, `getLastHurtByMob`, `getLastHurtByMobTimestamp`, `getLastHurtMob`, `getLastHurtMobTimestamp`, `getLocalBoundsForPose`, `getMainHandItem`, `getMaxAbsorption`, `getMaxHealth`, `getMobType`, `getMyRidingOffset`, `getNoActionTime`, `getOffhandItem`, `getPassengerRidingPosition`, `getRandom`, `getRelativePortalPosition`, `getRiddenInput`, `getRiddenSpeed`, `getScale`, `getSleepingPos`, `getSlot`, `getSoundVolume`, `getSpeed`, `getStandingEyeHeight`, `getStingerCount`, `getSwimAmount`, `getTicksUsingItem`, `getUsedItemHand`, `getUseItem`, `getUseItemRemainingTicks`, `getViewYRot`, `getVisibilityPercent`, `getVisualRotationYInDegrees`, `getVoicePitch`, `getWaterSlowDown`, `getYHeadRot`, `goDownInWater`, `handleDamageEvent`, `handleRelativeFrictionAndCalculateMovement`, `hasEffect`, `hasItemInSlot`, `hasLineOfSight`, `heal`, `hurtArmor`, `hurtCurrentlyUsedShield`, `hurtHelmet`, `increaseAirSupply`, `indicateDamage`, `internalSetAbsorptionAmount`, `invalidateCaps`, `isAffectedByFluids`, `isAffectedByPotions`, `isAlive`, `isAlwaysExperienceDropper`, `isAutoSpinAttack`, `isBaby`, `isBlocking`, `isCurrentlyGlowing`, `isDamageSourceBlocked`, `isDeadOrDying`, `isFallFlying`, `isHolding`, `isHolding`, `isImmobile`, `isInvertedHealAndHarm`, `isInWall`, `isPickable`, `isPushable`, `isSensitiveToWater`, `isSleeping`, `isSuppressingSlidingDownLadder`, `isUsingItem`, `isVisuallySwimming`, `jumpFromGround`, `kill`, `knockback`, `lerpHeadRotationStep`, `lerpHeadTo`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `lookAt`, `makeBrain`, `maxUpStep`, `onBelowWorld`, `onChangedBlock`, `onClimbable`, `onEffectAdded`, `onEffectRemoved`, `onEffectUpdated`, `onEnterCombat`, `onEquipItem`, `onItemPickup`, `onLeaveCombat`, `onSoulSpeedBlock`, `onSyncedDataUpdated`, `playBlockFallSound`, `push`, `pushEntities`, `randomTeleport`, `recreateFromPacket`, `releaseUsingItem`, `remove`, `removeAllEffects`, `removeEffect`, `removeEffectNoUpdate`, `removeEffectParticles`, `removeFrost`, `removeSoulSpeed`, `resetForwardDirectionOfRelativePortalPosition`, `reviveCaps`, `rideTick`, `sendEffectToPassengers`, `setAbsorptionAmount`, `setArrowCount`, `setDiscardFriction`, `setHealth`, `setItemInHand`, `setJumping`, `setLastHurtByMob`, `setLastHurtByPlayer`, `setLastHurtMob`, `setLivingEntityFlag`, `setNoActionTime`, `setRecordPlayingNearby`, `setSleepingPos`, `setSprinting`, `setStingerCount`, `setYBodyRot`, `setYHeadRot`, `shouldDiscardFriction`, `shouldRemoveSoulSpeed`, `shouldRiderFaceForward`, `shouldShowName`, `skipDropExperience`, `spawnSoulSpeedParticle`, `startSleeping`, `startUsingItem`, `stopRiding`, `stopSleeping`, `stopUsingItem`, `swing`, `swing`, `take`, `tickDeath`, `tickEffects`, `tickRidden`, `travel`, `triggerItemUseEffects`, `tryAddFrost`, `tryAddSoulSpeed`, `updateEffectVisibility`, `updateInvisibilityStatus`, `updateSwingTime`, `updateUsingItem`, `updateWalkAnimation`, `verifyEquippedItem`, `wasExperienceConsumed`, `wouldNotSuffocateAtTargetPose`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canCollideWith`, `canControlVehicle`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYRot`, `getZ`, `getZ`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `killedEntity`, `lavaHurt`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `refreshDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startSeenByPlayer`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getEyeInFluidType`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getFluidTypeHeight`, `getMaxHeightFluidType`, `getParts`, `getPersistentData`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isAddedToWorld`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `onAddedToWorld`, `onRemovedFromWorld`, `revive`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraftforge.common.extensions.IForgeLivingEntity`: `canDrownInFluidType`, `canSwimInFluidType`, `moveInFluid`, `self`, `sinkInFluid`

## Raider.HoldGroundAttackGoal

*class* `net.minecraft.world.entity.raid.Raider.HoldGroundAttackGoal`

Enclosing class: Raider

### Fields
- `private final Raider mob`
- `private final float hostileRadiusSqr`
- `public final TargetingConditions shoutTargeting`

### Methods
- `public boolean canUse()`
- `public void start()`
- `public void stop()`
- `public boolean requiresUpdateEveryTick()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `canContinueToUse`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `setFlags`, `toString`

## Raider.ObtainRaidLeaderBannerGoal

*class* `net.minecraft.world.entity.raid.Raider.ObtainRaidLeaderBannerGoal`

Enclosing class: Raider

### Fields
- `private final T extends Raider mob`

### Methods
- `public boolean canUse()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `canContinueToUse`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `start`, `stop`, `toString`

## Raider.RaiderCelebration

*class* `net.minecraft.world.entity.raid.Raider.RaiderCelebration`

Enclosing class: Raider

### Fields
- `private final Raider mob`

### Methods
- `public boolean canUse()`
- `public void start()`
- `public void stop()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `canContinueToUse`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `toString`

## Raider.RaiderMoveThroughVillageGoal

*class* `net.minecraft.world.entity.raid.Raider.RaiderMoveThroughVillageGoal`

Enclosing class: Raider

### Fields
- `private final Raider raider`
- `private final double speedModifier`
- `private BlockPos poiPos`
- `private final List<BlockPos> visited`
- `private final int distanceToPoi`
- `private boolean stuck`

### Methods
- `public boolean canUse()`
- `private boolean isValidRaid()`
- `private boolean hasSuitablePoi()`
- `public boolean canContinueToUse()`
- `public void stop()`
- `public void start()`
- `public void tick()`
- `private boolean hasNotVisited(BlockPos p_37943_)`
- `private void updateVisited()`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `toString`

## Raids

*class* `net.minecraft.world.entity.raid.Raids`

### Fields
- `private static final String RAID_FILE_ID` (= "raids")
- `private final Map<Integer,Raid> raidMap`
- `private final ServerLevel level`
- `private int nextAvailableID`
- `private int tick`

### Methods
- `public static SavedData.Factory<Raids> factory(ServerLevel p_300199_)`
- `public Raid get(int p_37959_)`
- `public void tick()`
- `public static boolean canJoinRaid(Raider p_37966_,  Raid p_37967_)`
- `@Nullable public Raid createOrExtendRaid(ServerPlayer p_37964_)`
- `private Raid getOrCreateRaid(ServerLevel p_37961_,  BlockPos p_37962_)`
- `public static Raids load(ServerLevel p_150236_,  CompoundTag p_150237_)`
- `public CompoundTag save(CompoundTag p_37976_)`
- `public static String getFileId(Holder<DimensionType> p_211597_)`
- `private int getUniqueId()`
- `@Nullable public Raid getNearbyRaid(BlockPos p_37971_,  int p_37972_)`

### Inherited methods
- from `net.minecraft.world.level.saveddata.SavedData`: `isDirty`, `save`, `setDirty`, `setDirty`
