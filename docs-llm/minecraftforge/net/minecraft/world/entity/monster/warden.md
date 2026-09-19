# net.minecraft.world.entity.monster.warden

- [AngerManagement](#angermanagement)
- [AngerManagement.Sorter](#angermanagement.sorter)
- [Class AngerLevel](#class-angerlevel)
- [Warden](#warden)
- [Warden.VibrationUser](#warden.vibrationuser)
- [WardenAi](#wardenai)
- [WardenSpawnTracker](#wardenspawntracker)
## AngerManagement

*class* `net.minecraft.world.entity.monster.warden.AngerManagement`

### Fields
- `protected static final int CONVERSION_DELAY` (= 2)
- `protected static final int MAX_ANGER` (= 150)
- `private static final int DEFAULT_ANGER_DECREASE` (= 1)
- `private int conversionDelay`
- `int highestAnger`
- `private static final com.mojang.serialization.Codec<com.mojang.datafixers.util.Pair<UUID,Integer>> SUSPECT_ANGER_PAIR`
- `private final Predicate<Entity> filter`
- `protected final ArrayList<Entity> suspects`
- `private final AngerManagement.Sorter suspectSorter`
- `protected final it.unimi.dsi.fastutil.objects.Object2IntMap<Entity> angerBySuspect`
- `protected final it.unimi.dsi.fastutil.objects.Object2IntMap<UUID> angerByUuid`

### Methods
- `public static com.mojang.serialization.Codec<AngerManagement> codec(Predicate<Entity> p_219278_)`
- `private List<com.mojang.datafixers.util.Pair<UUID,Integer>> createUuidAngerPairs()`
- `public void tick(ServerLevel p_219264_,  Predicate<Entity> p_219265_)`
- `private void sortAndUpdateHighestAnger()`
- `private void convertFromUuids(ServerLevel p_219262_)`
- `public int increaseAnger(Entity p_219269_,  int p_219270_)`
- `public void clearAnger(Entity p_219267_)`
- `@Nullable private Entity getTopSuspect()`
- `public int getActiveAnger(@Nullable  Entity p_219287_)`
- `public Optional<LivingEntity> getActiveEntity()`

## AngerManagement.Sorter

*record* `net.minecraft.world.entity.monster.warden.AngerManagement.Sorter`

Enclosing class: AngerManagement

### Fields
- `private final AngerManagement angerManagement`
  The field for the angerManagement record component.

### Methods
- `public int compare(Entity p_219303_,  Entity p_219304_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public AngerManagement angerManagement()`
  Returns the value of the angerManagement record component.
  - returns: the value of the angerManagement record component

### Inherited methods
- from `java.util.Comparator`: `reversed`, `thenComparing`, `thenComparing`, `thenComparing`, `thenComparingDouble`, `thenComparingInt`, `thenComparingLong`

## Class AngerLevel

*enum* `net.minecraft.world.entity.monster.warden.Class AngerLevel`

### Fields
- `private static final AngerLevel[] SORTED_LEVELS`
- `private final int minimumAnger`
- `private final SoundEvent ambientSound`
- `private final SoundEvent listeningSound`

### Methods
- `public static AngerLevel[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static AngerLevel valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getMinimumAnger()`
- `public SoundEvent getAmbientSound()`
- `public SoundEvent getListeningSound()`
- `public static AngerLevel byAnger(int p_219228_)`
- `public boolean isAngry()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Warden

*class* `net.minecraft.world.entity.monster.warden.Warden`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int VIBRATION_COOLDOWN_TICKS` (= 40)
- `private static final int TIME_TO_USE_MELEE_UNTIL_SONIC_BOOM` (= 200)
- `private static final int MAX_HEALTH` (= 500)
- `private static final float MOVEMENT_SPEED_WHEN_FIGHTING` (= 0.30000001192092896f)
- `private static final float KNOCKBACK_RESISTANCE` (= 1.0f)
- `private static final float ATTACK_KNOCKBACK` (= 1.5f)
- `private static final int ATTACK_DAMAGE` (= 30)
- `private static final EntityDataAccessor<Integer> CLIENT_ANGER_LEVEL`
- `private static final int DARKNESS_DISPLAY_LIMIT` (= 200)
- `private static final int DARKNESS_DURATION` (= 260)
- `private static final int DARKNESS_RADIUS` (= 20)
- `private static final int DARKNESS_INTERVAL` (= 120)
- `private static final int ANGERMANAGEMENT_TICK_DELAY` (= 20)
- `private static final int DEFAULT_ANGER` (= 35)
- `private static final int PROJECTILE_ANGER` (= 10)
- `private static final int ON_HURT_ANGER_BOOST` (= 20)
- `private static final int RECENT_PROJECTILE_TICK_THRESHOLD` (= 100)
- `private static final int TOUCH_COOLDOWN_TICKS` (= 20)
- `private static final int DIGGING_PARTICLES_AMOUNT` (= 30)
- `private static final float DIGGING_PARTICLES_DURATION` (= 4.5f)
- `private static final float DIGGING_PARTICLES_OFFSET` (= 0.699999988079071f)
- `private static final int PROJECTILE_ANGER_DISTANCE` (= 30)
- `private int tendrilAnimation`
- `private int tendrilAnimationO`
- `private int heartAnimation`
- `private int heartAnimationO`
- `public AnimationState roarAnimationState`
- `public AnimationState sniffAnimationState`
- `public AnimationState emergeAnimationState`
- `public AnimationState diggingAnimationState`
- `public AnimationState attackAnimationState`
- `public AnimationState sonicBoomAnimationState`
- `private final DynamicGameEventListener<VibrationSystem.Listener> dynamicGameEventListener`
- `private final VibrationSystem.User vibrationUser`
- `private VibrationSystem.Data vibrationData`
- `AngerManagement angerManagement`

### Inherited fields
- from `net.minecraft.world.entity.PathfinderMob`: `DEFAULT_WALK_TARGET_VALUE`
- from `net.minecraft.world.entity.Mob`: `ambientSoundTime`, `armorDropChances`, `DEFAULT_EQUIPMENT_DROP_CHANCE`, `goalSelector`, `handDropChances`, `jumpControl`, `LEASH_TAG`, `lookControl`, `MAX_ENCHANTED_ARMOR_CHANCE`, `MAX_ENCHANTED_WEAPON_CHANCE`, `MAX_PICKUP_LOOT_CHANCE`, `MAX_WEARING_ARMOR_CHANCE`, `moveControl`, `navigation`, `PICKUP_REACH`, `PRESERVE_ITEM_DROP_CHANCE`, `targetSelector`, `UPDATE_GOAL_SELECTOR_EVERY_N_TICKS`, `xpReward`
- from `net.minecraft.world.entity.LivingEntity`: `animStep`, `animStepO`, `ARMOR_SLOT_OFFSET`, `ARMOR_SLOTS`, `attackAnim`, `attackStrengthTicker`, `autoSpinAttackTicks`, `brain`, `DATA_LIVING_ENTITY_FLAGS`, `dead`, `DEATH_DURATION`, `deathScore`, `deathTime`, `DEFAULT_BASE_GRAVITY`, `DEFAULT_EYE_HEIGHT`, `EQUIPMENT_SLOT_OFFSET`, `EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT`, `fallFlyTicks`, `HAND_SLOTS`, `hurtDuration`, `hurtTime`, `invulnerableDuration`, `jumping`, `lastHurt`, `lastHurtByPlayer`, `lastHurtByPlayerTime`, `lerpHeadSteps`, `lerpSteps`, `lerpX`, `lerpXRot`, `lerpY`, `lerpYHeadRot`, `lerpYRot`, `lerpZ`, `LIVING_ENTITY_FLAG_IS_USING`, `LIVING_ENTITY_FLAG_OFF_HAND`, `LIVING_ENTITY_FLAG_SPIN_ATTACK`, `MIN_MOVEMENT_DISTANCE`, `noActionTime`, `oAttackAnim`, `oRun`, `PLAYER_HURT_EXPERIENCE_TIME`, `removeArrowTime`, `removeStingerTime`, `rotA`, `rotOffs`, `run`, `SLEEPING_DIMENSIONS`, `SWING_DURATION`, `swinging`, `swingingArm`, `swingTime`, `timeOffs`, `USE_ITEM_INTERVAL`, `useItem`, `useItemRemaining`, `walkAnimation`, `xxa`, `yBodyRot`, `yBodyRotO`, `yHeadRot`, `yHeadRotO`, `yya`, `zza`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`
- from `net.minecraft.world.entity.monster.Enemy`: `XP_REWARD_BOSS`, `XP_REWARD_HUGE`, `XP_REWARD_LARGE`, `XP_REWARD_MEDIUM`, `XP_REWARD_NONE`, `XP_REWARD_SMALL`
- from `net.minecraft.world.level.gameevent.vibrations.VibrationSystem`: `RESONANCE_EVENTS`, `VIBRATION_FREQUENCY_FOR_EVENT`

### Methods
- `public Packet<ClientGamePacketListener> getAddEntityPacket()`
- `public void recreateFromPacket(ClientboundAddEntityPacket p_219420_)`
- `public boolean checkSpawnObstruction(LevelReader p_219398_)`
- `public float getWalkTargetValue(BlockPos p_219410_,  LevelReader p_219411_)`
- `public boolean isInvulnerableTo(DamageSource p_219427_)`
- `boolean isDiggingOrEmerging()`
- `protected boolean canRide(Entity p_219462_)`
- `public boolean canDisableShield()`
- `protected float nextStep()`
- `public static AttributeSupplier.Builder createAttributes()`
- `public boolean dampensVibrations()`
- `protected float getSoundVolume()`
- `@Nullable protected SoundEvent getAmbientSound()`
- `protected SoundEvent getHurtSound(DamageSource p_219440_)`
- `protected SoundEvent getDeathSound()`
- `protected void playStepSound(BlockPos p_219431_,  BlockState p_219432_)`
- `public boolean doHurtTarget(Entity p_219472_)`
- `protected void defineSynchedData()`
- `public int getClientAngerLevel()`
- `private void syncClientAngerLevel()`
- `public void tick()`
- `protected void customServerAiStep()`
- `public void handleEntityEvent(byte p_219360_)`
- `private int getHeartBeatDelay()`
- `public float getTendrilAnimation(float p_219468_)`
- `public float getHeartAnimation(float p_219470_)`
- `private void clientDiggingParticles(AnimationState p_219384_)`
- `public void onSyncedDataUpdated(EntityDataAccessor<?> p_219422_)`
- `public boolean ignoreExplosion()`
- `protected Brain<?> makeBrain(com.mojang.serialization.Dynamic<?> p_219406_)`
- `public Brain<Warden> getBrain()`
- `protected void sendDebugPackets()`
- `public void updateDynamicGameEventListener(BiConsumer<DynamicGameEventListener<?>,ServerLevel> p_219413_)`
- `@Contract("null->false") public boolean canTargetEntity(@Nullable  Entity p_219386_)`
- `public static void applyDarknessAround(ServerLevel p_219376_,  Vec3 p_219377_,  @Nullable  Entity p_219378_,  int p_219379_)`
- `public void addAdditionalSaveData(CompoundTag p_219434_)`
- `public void readAdditionalSaveData(CompoundTag p_219415_)`
- `private void playListeningSound()`
- `public AngerLevel getAngerLevel()`
- `private int getActiveAnger()`
- `public void clearAnger(Entity p_219429_)`
- `public void increaseAngerAt(@Nullable  Entity p_219442_)`
- `public void increaseAngerAt(@Nullable  Entity p_219388_,  int p_219389_,  boolean p_219390_)`
- `public Optional<LivingEntity> getEntityAngryAt()`
- `@Nullable public LivingEntity getTarget()`
- `public boolean removeWhenFarAway(double p_219457_)`
- `@Nullable public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_219400_,  DifficultyInstance p_219401_,  MobSpawnType p_219402_,  @Nullable  SpawnGroupData p_219403_,  @Nullable  CompoundTag p_219404_)`
  Description copied from class: Mob
  Forge: Override-Only, call via ForgeEventFactory.onFinalizeSpawn.
  
   Overrides are allowed. Do not wrap super calls within override (as that will cause stack overflows).
  
   Vanilla calls are replaced with a transformer, and are not visible in source.
  
   Be certain to either call super.finalizeSpawn or set the Mob.spawnType field from within your override.
- `public boolean hurt(DamageSource p_219381_,  float p_219382_)`
- `public void setAttackTarget(LivingEntity p_219460_)`
- `public EntityDimensions getDimensions(Pose p_219392_)`
- `public boolean isPushable()`
- `protected void doPush(Entity p_219353_)`
- `public AngerManagement getAngerManagement()`
- `protected PathNavigation createNavigation(Level p_219396_)`
- `protected org.joml.Vector3f getPassengerAttachmentPoint(Entity p_297909_,  EntityDimensions p_297829_,  float p_301063_)`
- `public VibrationSystem.Data getVibrationData()`
- `public VibrationSystem.User getVibrationUser()`

### Inherited methods
- from `net.minecraft.world.entity.monster.Monster`: `aiStep`, `checkAnyLightMonsterSpawnRules`, `checkMonsterSpawnRules`, `createMonsterAttributes`, `getFallSounds`, `getProjectile`, `getSoundSource`, `getSwimSound`, `getSwimSplashSound`, `isDarkEnoughToSpawn`, `isPreventingPlayerRest`, `shouldDespawnInPeaceful`, `shouldDropExperience`, `shouldDropLoot`, `updateNoActionTime`
- from `net.minecraft.world.entity.PathfinderMob`: `checkSpawnRules`, `followLeashSpeed`, `getWalkTargetValue`, `isPanicking`, `isPathFinding`, `onLeashDistance`, `shouldStayCloseToLeashHolder`, `tickLeash`
- from `net.minecraft.world.entity.Mob`: `ate`, `baseTick`, `canAttackType`, `canBeLeashed`, `canFireProjectileWeapon`, `canHoldItem`, `canPickUpLoot`, `canReplaceCurrentItem`, `canReplaceEqualItem`, `canTakeItem`, `checkDespawn`, `checkMobSpawnRules`, `clearRestriction`, `convertTo`, `createBodyControl`, `createMobAttributes`, `dropCustomDeathLoot`, `dropFromLootTable`, `dropLeash`, `enchantSpawnedArmor`, `enchantSpawnedWeapon`, `equipItemIfPossible`, `getAmbientSoundInterval`, `getArmorSlots`, `getAttackBoundingBox`, `getControllingPassenger`, `getDefaultLootTable`, `getEquipmentDropChance`, `getEquipmentForSlot`, `getExperienceReward`, `getHandSlots`, `getHeadRotSpeed`, `getItemBySlot`, `getJumpControl`, `getLeashHolder`, `getLookControl`, `getLootTable`, `getLootTableSeed`, `getMainArm`, `getMaxFallDistance`, `getMaxHeadXRot`, `getMaxHeadYRot`, `getMaxSpawnClusterSize`, `getMoveControl`, `getNavigation`, `getPathfindingMalus`, `getPickResult`, `getPickupReach`, `getRestrictCenter`, `getRestrictRadius`, `getSensing`, `getSpawnType`, `hasRestriction`, `interact`, `isAggressive`, `isEffectiveAi`, `isLeashed`, `isLeftHanded`, `isMaxGroupSizeReached`, `isNoAi`, `isPersistenceRequired`, `isSpawnCancelled`, `isSunBurnTick`, `isWithinMeleeAttackRange`, `isWithinRestriction`, `isWithinRestriction`, `jumpInFluid`, `jumpInLiquid`, `lookAt`, `mobInteract`, `onOffspringSpawnedFromEgg`, `onPathfindingDone`, `onPathfindingStart`, `pickUpItem`, `playAmbientSound`, `playHurtSound`, `populateDefaultEquipmentEnchantments`, `populateDefaultEquipmentSlots`, `registerGoals`, `removeAfterChangingDimensions`, `removeAllGoals`, `removeFreeWill`, `requiresCustomPersistence`, `restrictTo`, `serverAiStep`, `setAggressive`, `setBaby`, `setCanPickUpLoot`, `setDelayedLeashHolderId`, `setDropChance`, `setGuaranteedDrop`, `setItemSlot`, `setItemSlotAndDropWhenKilled`, `setLeashedTo`, `setLeftHanded`, `setNoAi`, `setPathfindingMalus`, `setPersistenceRequired`, `setSpawnCancelled`, `setSpeed`, `setTarget`, `setXxa`, `setYya`, `setZza`, `shouldPassengersInheritMalus`, `spawnAnim`, `startRiding`, `tickHeadTurn`, `updateControlFlags`, `wantsToPickUp`
- from `net.minecraft.world.entity.LivingEntity`: `actuallyHurt`, `addEffect`, `addEffect`, `animateHurt`, `areAllEffectsAmbient`, `attackable`, `blockedByShield`, `blockUsingShield`, `brainProvider`, `broadcastBreakEvent`, `broadcastBreakEvent`, `calculateEntityAnimation`, `calculateFallDamage`, `canAttack`, `canAttack`, `canBeAffected`, `canBeSeenAsEnemy`, `canBeSeenByAnyone`, `canBreatheUnderwater`, `canChangeDimensions`, `canFreeze`, `canSpawnSoulSpeedParticle`, `canStandOnFluid`, `causeFallDamage`, `checkAutoSpinAttack`, `checkFallDamage`, `clearSleepingPos`, `completeUsingItem`, `createLivingAttributes`, `createWitherRose`, `curePotionEffects`, `decreaseAirSupply`, `die`, `doAutoAttackOnTouch`, `doesEmitEquipEvent`, `dropAllDeathLoot`, `dropEquipment`, `dropExperience`, `eat`, `equipmentHasChanged`, `forceAddEffect`, `getAbsorptionAmount`, `getActiveEffects`, `getActiveEffectsMap`, `getArmorCoverPercentage`, `getArmorValue`, `getArrowCount`, `getAttackAnim`, `getAttribute`, `getAttributeBaseValue`, `getAttributeBaseValue`, `getAttributes`, `getAttributeValue`, `getAttributeValue`, `getBedOrientation`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getCapability`, `getCombatTracker`, `getDamageAfterArmorAbsorb`, `getDamageAfterMagicAbsorb`, `getDismountPoses`, `getDrinkingSound`, `getEatingSound`, `getEffect`, `getEquipmentSlotForItem`, `getEyeHeight`, `getFallFlyingTicks`, `getFluidFallingAdjustedMovement`, `getFlyingSpeed`, `getHealth`, `getHitbox`, `getHurtDir`, `getItemInHand`, `getJumpBoostPower`, `getJumpPower`, `getKillCredit`, `getLastAttacker`, `getLastClimbablePos`, `getLastDamageSource`, `getLastHurtByMob`, `getLastHurtByMobTimestamp`, `getLastHurtMob`, `getLastHurtMobTimestamp`, `getLocalBoundsForPose`, `getMainHandItem`, `getMaxAbsorption`, `getMaxHealth`, `getMobType`, `getMyRidingOffset`, `getNoActionTime`, `getOffhandItem`, `getPassengerRidingPosition`, `getRandom`, `getRelativePortalPosition`, `getRiddenInput`, `getRiddenSpeed`, `getScale`, `getSleepingPos`, `getSlot`, `getSpeed`, `getStandingEyeHeight`, `getStingerCount`, `getSwimAmount`, `getTicksUsingItem`, `getUsedItemHand`, `getUseItem`, `getUseItemRemainingTicks`, `getViewYRot`, `getVisibilityPercent`, `getVisualRotationYInDegrees`, `getVoicePitch`, `getWaterSlowDown`, `getYHeadRot`, `goDownInWater`, `handleDamageEvent`, `handleRelativeFrictionAndCalculateMovement`, `hasEffect`, `hasItemInSlot`, `hasLineOfSight`, `heal`, `hurtArmor`, `hurtCurrentlyUsedShield`, `hurtHelmet`, `increaseAirSupply`, `indicateDamage`, `internalSetAbsorptionAmount`, `invalidateCaps`, `isAffectedByFluids`, `isAffectedByPotions`, `isAlive`, `isAlwaysExperienceDropper`, `isAutoSpinAttack`, `isBaby`, `isBlocking`, `isCurrentlyGlowing`, `isDamageSourceBlocked`, `isDeadOrDying`, `isFallFlying`, `isHolding`, `isHolding`, `isImmobile`, `isInvertedHealAndHarm`, `isInWall`, `isPickable`, `isSensitiveToWater`, `isSleeping`, `isSuppressingSlidingDownLadder`, `isUsingItem`, `isVisuallySwimming`, `jumpFromGround`, `kill`, `knockback`, `lerpHeadRotationStep`, `lerpHeadTo`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `lookAt`, `maxUpStep`, `onBelowWorld`, `onChangedBlock`, `onClimbable`, `onEffectAdded`, `onEffectRemoved`, `onEffectUpdated`, `onEnterCombat`, `onEquipItem`, `onItemPickup`, `onLeaveCombat`, `onSoulSpeedBlock`, `playBlockFallSound`, `push`, `pushEntities`, `randomTeleport`, `releaseUsingItem`, `remove`, `removeAllEffects`, `removeEffect`, `removeEffectNoUpdate`, `removeEffectParticles`, `removeFrost`, `removeSoulSpeed`, `resetForwardDirectionOfRelativePortalPosition`, `reviveCaps`, `rideTick`, `sendEffectToPassengers`, `setAbsorptionAmount`, `setArrowCount`, `setDiscardFriction`, `setHealth`, `setItemInHand`, `setJumping`, `setLastHurtByMob`, `setLastHurtByPlayer`, `setLastHurtMob`, `setLivingEntityFlag`, `setNoActionTime`, `setRecordPlayingNearby`, `setSleepingPos`, `setSprinting`, `setStingerCount`, `setYBodyRot`, `setYHeadRot`, `shouldDiscardFriction`, `shouldRemoveSoulSpeed`, `shouldRiderFaceForward`, `shouldShowName`, `skipDropExperience`, `spawnSoulSpeedParticle`, `startSleeping`, `startUsingItem`, `stopRiding`, `stopSleeping`, `stopUsingItem`, `swing`, `swing`, `take`, `tickDeath`, `tickEffects`, `tickRidden`, `travel`, `triggerItemUseEffects`, `tryAddFrost`, `tryAddSoulSpeed`, `updateEffectVisibility`, `updateInvisibilityStatus`, `updateSwingTime`, `updateUsingItem`, `updateWalkAnimation`, `verifyEquippedItem`, `wasExperienceConsumed`, `wouldNotSuffocateAtTargetPose`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canCollideWith`, `canControlVehicle`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAirSupply`, `getAllSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYRot`, `getZ`, `getZ`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `interactAt`, `is`, `isAddedToWorld`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `killedEntity`, `lavaHurt`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `onAboveBubbleCol`, `onAddedToWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `refreshDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startSeenByPlayer`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getEyeInFluidType`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getFluidTypeHeight`, `getMaxHeightFluidType`, `getParts`, `getPersistentData`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isAddedToWorld`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `onAddedToWorld`, `onRemovedFromWorld`, `revive`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraftforge.common.extensions.IForgeLivingEntity`: `canDrownInFluidType`, `canSwimInFluidType`, `moveInFluid`, `self`, `sinkInFluid`

## Warden.VibrationUser

*class* `net.minecraft.world.entity.monster.warden.Warden.VibrationUser`

Enclosing class: Warden

### Fields
- `private static final int GAME_EVENT_LISTENER_RANGE` (= 16)
- `private final PositionSource positionSource`

### Methods
- `public int getListenerRadius()`
- `public PositionSource getPositionSource()`
- `public TagKey<GameEvent> getListenableEvents()`
- `public boolean canTriggerAvoidVibration()`
- `public boolean canReceiveVibration(ServerLevel p_282574_,  BlockPos p_282323_,  GameEvent p_283003_,  GameEvent.Context p_282515_)`
- `public void onReceiveVibration(ServerLevel p_281325_,  BlockPos p_282386_,  GameEvent p_282261_,  @Nullable  Entity p_281438_,  @Nullable  Entity p_282582_,  float p_283699_)`

### Inherited methods
- from `net.minecraft.world.level.gameevent.vibrations.VibrationSystem.User`: `calculateTravelTimeInTicks`, `isValidVibration`, `onDataChanged`, `requiresAdjacentChunksToBeTicking`

## WardenAi

*class* `net.minecraft.world.entity.monster.warden.WardenAi`

### Fields
- `private static final float SPEED_MULTIPLIER_WHEN_IDLING` (= 0.5f)
- `private static final float SPEED_MULTIPLIER_WHEN_INVESTIGATING` (= 0.699999988079071f)
- `private static final float SPEED_MULTIPLIER_WHEN_FIGHTING` (= 1.2000000476837158f)
- `private static final int MELEE_ATTACK_COOLDOWN` (= 18)
- `private static final int DIGGING_DURATION`
- `public static final int EMERGE_DURATION`
- `public static final int ROAR_DURATION`
- `private static final int SNIFFING_DURATION`
- `public static final int DIGGING_COOLDOWN` (= 1200)
- `private static final int DISTURBANCE_LOCATION_EXPIRY_TIME` (= 100)
- `private static final List<SensorType<? extends Sensor<? super Warden>>> SENSOR_TYPES`
- `private static final List<MemoryModuleType<?>> MEMORY_TYPES`
- `private static final BehaviorControl<Warden> DIG_COOLDOWN_SETTER`

### Methods
- `public static void updateActivity(Warden p_219513_)`
- `protected static Brain<?> makeBrain(Warden p_219521_,  com.mojang.serialization.Dynamic<?> p_219522_)`
- `private static void initCoreActivity(Brain<Warden> p_219511_)`
- `private static void initEmergeActivity(Brain<Warden> p_219527_)`
- `private static void initDiggingActivity(Brain<Warden> p_219532_)`
- `private static void initIdleActivity(Brain<Warden> p_219537_)`
- `private static void initInvestigateActivity(Brain<Warden> p_219542_)`
- `private static void initSniffingActivity(Brain<Warden> p_219544_)`
- `private static void initRoarActivity(Brain<Warden> p_219546_)`
- `private static void initFightActivity(Warden p_219518_,  Brain<Warden> p_219519_)`
- `private static boolean isTarget(Warden p_219515_,  LivingEntity p_219516_)`
- `private static void onTargetInvalid(Warden p_219529_,  LivingEntity p_219530_)`
- `public static void setDigCooldown(LivingEntity p_219506_)`
- `public static void setDisturbanceLocation(Warden p_219524_,  BlockPos p_219525_)`

## WardenSpawnTracker

*class* `net.minecraft.world.entity.monster.warden.WardenSpawnTracker`

### Fields
- `public static final com.mojang.serialization.Codec<WardenSpawnTracker> CODEC`
- `public static final int MAX_WARNING_LEVEL` (= 4)
- `private static final double PLAYER_SEARCH_RADIUS` (= 16.0)
- `private static final int WARNING_CHECK_DIAMETER` (= 48)
- `private static final int DECREASE_WARNING_LEVEL_EVERY_INTERVAL` (= 12000)
- `private static final int WARNING_LEVEL_INCREASE_COOLDOWN` (= 200)
- `private int ticksSinceLastWarning`
- `private int warningLevel`
- `private int cooldownTicks`

### Methods
- `public void tick()`
- `public void reset()`
- `public static OptionalInt tryWarn(ServerLevel p_219578_,  BlockPos p_219579_,  ServerPlayer p_219580_)`
- `private boolean onCooldown()`
- `private static boolean hasNearbyWarden(ServerLevel p_219575_,  BlockPos p_219576_)`
- `private static List<ServerPlayer> getNearbyPlayers(ServerLevel p_219595_,  BlockPos p_219596_)`
- `private void increaseWarningLevel()`
- `private void decreaseWarningLevel()`
- `public void setWarningLevel(int p_219573_)`
- `public int getWarningLevel()`
- `private void copyData(WardenSpawnTracker p_219584_)`
