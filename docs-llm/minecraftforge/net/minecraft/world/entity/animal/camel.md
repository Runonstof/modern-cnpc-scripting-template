# net.minecraft.world.entity.animal.camel

- [Camel](#camel)
- [Camel.CamelBodyRotationControl](#camel.camelbodyrotationcontrol)
- [Camel.CamelLookControl](#camel.camellookcontrol)
- [Camel.CamelMoveControl](#camel.camelmovecontrol)
- [CamelAi](#camelai)
- [CamelAi.CamelPanic](#camelai.camelpanic)
- [CamelAi.RandomSitting](#camelai.randomsitting)
## Camel

*class* `net.minecraft.world.entity.animal.camel.Camel`

### Fields
- `public static final Ingredient TEMPTATION_ITEM`
- `public static final float BABY_SCALE` (= 0.44999998807907104f)
- `public static final int DASH_COOLDOWN_TICKS` (= 55)
- `public static final int MAX_HEAD_Y_ROT` (= 30)
- `private static final float RUNNING_SPEED_BONUS` (= 0.10000000149011612f)
- `private static final float DASH_VERTICAL_MOMENTUM` (= 1.4285000562667847f)
- `private static final float DASH_HORIZONTAL_MOMENTUM` (= 22.222200393676758f)
- `private static final int DASH_MINIMUM_DURATION_TICKS` (= 5)
- `private static final int SITDOWN_DURATION_TICKS` (= 40)
- `private static final int STANDUP_DURATION_TICKS` (= 52)
- `private static final int IDLE_MINIMAL_DURATION_TICKS` (= 80)
- `private static final float SITTING_HEIGHT_DIFFERENCE` (= 1.4299999475479126f)
- `public static final EntityDataAccessor<Boolean> DASH`
- `public static final EntityDataAccessor<Long> LAST_POSE_CHANGE_TICK`
- `public final AnimationState sitAnimationState`
- `public final AnimationState sitPoseAnimationState`
- `public final AnimationState sitUpAnimationState`
- `public final AnimationState idleAnimationState`
- `public final AnimationState dashAnimationState`
- `private static final EntityDimensions SITTING_DIMENSIONS`
- `private int dashCooldown`
- `private int idleAnimationTimeout`

### Inherited fields
- from `net.minecraft.world.entity.animal.horse.AbstractHorse`: `allowStandSliding`, `BREEDING_CROSS_FACTOR`, `canGallop`, `CHEST_SLOT_OFFSET`, `EQUIPMENT_SLOT_OFFSET`, `gallopSoundCounter`, `INV_BASE_COUNT`, `INV_SLOT_ARMOR`, `INV_SLOT_SADDLE`, `inventory`, `INVENTORY_SLOT_OFFSET`, `isJumping`, `playerJumpPendingScale`, `sprintCounter`, `tailCounter`, `temper`
- from `net.minecraft.world.entity.animal.Animal`: `PARENT_AGE_AFTER_BREEDING`
- from `net.minecraft.world.entity.AgeableMob`: `age`, `BABY_START_AGE`, `forcedAge`, `forcedAgeTimer`
- from `net.minecraft.world.entity.PathfinderMob`: `DEFAULT_WALK_TARGET_VALUE`
- from `net.minecraft.world.entity.Mob`: `ambientSoundTime`, `armorDropChances`, `DEFAULT_EQUIPMENT_DROP_CHANCE`, `goalSelector`, `handDropChances`, `jumpControl`, `LEASH_TAG`, `lookControl`, `MAX_ENCHANTED_ARMOR_CHANCE`, `MAX_ENCHANTED_WEAPON_CHANCE`, `MAX_PICKUP_LOOT_CHANCE`, `MAX_WEARING_ARMOR_CHANCE`, `moveControl`, `navigation`, `PICKUP_REACH`, `PRESERVE_ITEM_DROP_CHANCE`, `targetSelector`, `UPDATE_GOAL_SELECTOR_EVERY_N_TICKS`, `xpReward`
- from `net.minecraft.world.entity.LivingEntity`: `animStep`, `animStepO`, `ARMOR_SLOT_OFFSET`, `ARMOR_SLOTS`, `attackAnim`, `attackStrengthTicker`, `autoSpinAttackTicks`, `brain`, `DATA_LIVING_ENTITY_FLAGS`, `dead`, `DEATH_DURATION`, `deathScore`, `deathTime`, `DEFAULT_BASE_GRAVITY`, `DEFAULT_EYE_HEIGHT`, `EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT`, `fallFlyTicks`, `HAND_SLOTS`, `hurtDuration`, `hurtTime`, `invulnerableDuration`, `jumping`, `lastHurt`, `lastHurtByPlayer`, `lastHurtByPlayerTime`, `lerpHeadSteps`, `lerpSteps`, `lerpX`, `lerpXRot`, `lerpY`, `lerpYHeadRot`, `lerpYRot`, `lerpZ`, `LIVING_ENTITY_FLAG_IS_USING`, `LIVING_ENTITY_FLAG_OFF_HAND`, `LIVING_ENTITY_FLAG_SPIN_ATTACK`, `MIN_MOVEMENT_DISTANCE`, `noActionTime`, `oAttackAnim`, `oRun`, `PLAYER_HURT_EXPERIENCE_TIME`, `removeArrowTime`, `removeStingerTime`, `rotA`, `rotOffs`, `run`, `SLEEPING_DIMENSIONS`, `SWING_DURATION`, `swinging`, `swingingArm`, `swingTime`, `timeOffs`, `USE_ITEM_INTERVAL`, `useItem`, `useItemRemaining`, `walkAnimation`, `xxa`, `yBodyRot`, `yBodyRotO`, `yHeadRot`, `yHeadRotO`, `yya`, `zza`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `public void addAdditionalSaveData(CompoundTag p_250330_)`
- `public void readAdditionalSaveData(CompoundTag p_250781_)`
- `public static AttributeSupplier.Builder createAttributes()`
- `protected void defineSynchedData()`
- `public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_249190_,  DifficultyInstance p_251264_,  MobSpawnType p_250254_,  @Nullable  SpawnGroupData p_249259_,  @Nullable  CompoundTag p_251838_)`
  Description copied from class: Mob
  Forge: Override-Only, call via ForgeEventFactory.onFinalizeSpawn.
  
   Overrides are allowed. Do not wrap super calls within override (as that will cause stack overflows).
  
   Vanilla calls are replaced with a transformer, and are not visible in source.
  
   Be certain to either call super.finalizeSpawn or set the Mob.spawnType field from within your override.
- `protected Brain.Provider<Camel> brainProvider()`
- `protected void registerGoals()`
- `protected Brain<?> makeBrain(com.mojang.serialization.Dynamic<?> p_251586_)`
- `public EntityDimensions getDimensions(Pose p_248973_)`
- `protected float getStandingEyeHeight(Pose p_248908_,  EntityDimensions p_250490_)`
- `protected void customServerAiStep()`
- `public void tick()`
- `private void setupAnimationStates()`
- `protected void updateWalkAnimation(float p_268362_)`
- `public void travel(Vec3 p_250068_)`
- `protected void tickRidden(Player p_278319_,  Vec3 p_278301_)`
- `public boolean refuseToMove()`
- `protected float getRiddenSpeed(Player p_278241_)`
- `protected Vec2 getRiddenRotation(LivingEntity p_275271_)`
- `protected Vec3 getRiddenInput(Player p_278264_,  Vec3 p_278298_)`
- `public boolean canJump()`
- `public void onPlayerJump(int p_249138_)`
- `public boolean canSprint()`
- `protected void executeRidersJump(float p_251967_,  Vec3 p_275627_)`
- `public boolean isDashing()`
- `public void setDashing(boolean p_251380_)`
- `public void handleStartJump(int p_249968_)`
- `public void handleStopJump()`
- `public int getJumpCooldown()`
- `protected SoundEvent getAmbientSound()`
- `protected SoundEvent getDeathSound()`
- `protected SoundEvent getHurtSound(DamageSource p_250052_)`
- `protected void playStepSound(BlockPos p_252056_,  BlockState p_251457_)`
- `public boolean isFood(ItemStack p_248671_)`
- `public InteractionResult mobInteract(Player p_249032_,  InteractionHand p_251004_)`
- `protected void onLeashDistance(float p_251143_)`
- `public boolean canCamelChangePose()`
- `protected boolean handleEating(Player p_249923_,  ItemStack p_248995_)`
- `protected boolean canPerformRearing()`
- `public boolean canMate(Animal p_251650_)`
- `@Nullable public Camel getBreedOffspring(ServerLevel p_251227_,  AgeableMob p_251047_)`
- `@Nullable protected SoundEvent getEatingSound()`
- `protected void actuallyHurt(DamageSource p_250410_,  float p_251451_)`
- `protected org.joml.Vector3f getPassengerAttachmentPoint(Entity p_298535_,  EntityDimensions p_298993_,  float p_301011_)`
- `public float getScale()`
- `private double getBodyAnchorAnimationYOffset(boolean p_249228_,  float p_251763_,  EntityDimensions p_301064_,  float p_299749_)`
- `public Vec3 getLeashOffset(float p_251477_)`
- `private void clampHeadRotationToBody(Entity p_265624_,  float p_265541_)`
- `public int getMaxHeadYRot()`
- `protected boolean canAddPassenger(Entity p_248594_)`
- `protected void sendDebugPackets()`
- `public boolean isCamelSitting()`
- `public boolean isCamelVisuallySitting()`
- `public boolean isInPoseTransition()`
- `private boolean isVisuallySittingDown()`
- `public void sitDown()`
- `public void standUp()`
- `public void standUpInstantly()`
- `public void resetLastPoseChangeTick(long p_248642_)`
- `private void resetLastPoseChangeTickToFullStand(long p_265447_)`
- `public long getPoseTime()`
- `public SoundEvent getSaddleSoundEvent()`
- `public void onSyncedDataUpdated(EntityDataAccessor<?> p_252215_)`
- `public boolean isTamed()`
- `public void openCustomInventoryScreen(Player p_248613_)`
- `protected BodyRotationControl createBodyControl()`

### Inherited methods
- from `net.minecraft.world.entity.animal.horse.AbstractHorse`: `addBehaviourGoals`, `aiStep`, `calculateFallDamage`, `canEatGrass`, `canParent`, `canWearArmor`, `causeFallDamage`, `containerChanged`, `createBaseHorseAttributes`, `createInventory`, `doPlayerRide`, `dropEquipment`, `equipArmor`, `equipSaddle`, `fedFood`, `followMommy`, `generateJumpStrength`, `generateMaxHealth`, `generateSpeed`, `getAmbientSoundInterval`, `getAmbientStandInterval`, `getAmbientStandSound`, `getAngrySound`, `getCapability`, `getControllingPassenger`, `getCustomJump`, `getDismountLocationForPassenger`, `getEatAnim`, `getFlag`, `getInventorySize`, `getMaxSpawnClusterSize`, `getMaxTemper`, `getMouthAnim`, `getOwnerUUID`, `getPassengersRidingOffsetY`, `getSlot`, `getSoundVolume`, `getStandAnim`, `getTemper`, `handleEntityEvent`, `hasInventoryChanged`, `hurt`, `invalidateCaps`, `isArmor`, `isBred`, `isEating`, `isImmobile`, `isJumping`, `isPushable`, `isSaddleable`, `isSaddled`, `isStanding`, `isWearingArmor`, `makeMad`, `modifyTemper`, `onClimbable`, `playGallopSound`, `playJumpSound`, `positionRider`, `randomizeAttributes`, `setBred`, `setEating`, `setFlag`, `setIsJumping`, `setOffspringAttributes`, `setOwnerUUID`, `setStanding`, `setTamed`, `setTemper`, `spawnTamingParticles`, `standIfPossible`, `tameWithName`, `updateContainerEquipment`
- from `net.minecraft.world.entity.animal.Animal`: `canFallInLove`, `checkAnimalSpawnRules`, `finalizeSpawnChildFromBreeding`, `getExperienceReward`, `getInLoveTime`, `getLoveCause`, `getWalkTargetValue`, `isBrightEnoughToSpawn`, `isInLove`, `removeWhenFarAway`, `resetLove`, `setInLove`, `setInLoveTime`, `spawnChildFromBreeding`, `usePlayerItem`
- from `net.minecraft.world.entity.AgeableMob`: `ageBoundaryReached`, `ageUp`, `ageUp`, `canBreed`, `getAge`, `getSpeedUpSecondsWhenFeeding`, `isBaby`, `setAge`, `setBaby`
- from `net.minecraft.world.entity.PathfinderMob`: `checkSpawnRules`, `followLeashSpeed`, `getWalkTargetValue`, `isPanicking`, `isPathFinding`, `shouldStayCloseToLeashHolder`, `tickLeash`
- from `net.minecraft.world.entity.Mob`: `ate`, `baseTick`, `canAttackType`, `canBeLeashed`, `canFireProjectileWeapon`, `canHoldItem`, `canPickUpLoot`, `canReplaceCurrentItem`, `canReplaceEqualItem`, `canTakeItem`, `checkDespawn`, `checkMobSpawnRules`, `checkSpawnObstruction`, `clearRestriction`, `convertTo`, `createMobAttributes`, `createNavigation`, `doHurtTarget`, `dropCustomDeathLoot`, `dropFromLootTable`, `dropLeash`, `enchantSpawnedArmor`, `enchantSpawnedWeapon`, `equipItemIfPossible`, `getArmorSlots`, `getAttackBoundingBox`, `getDefaultLootTable`, `getEquipmentDropChance`, `getEquipmentForSlot`, `getHandSlots`, `getHeadRotSpeed`, `getItemBySlot`, `getJumpControl`, `getLeashHolder`, `getLookControl`, `getLootTable`, `getLootTableSeed`, `getMainArm`, `getMaxFallDistance`, `getMaxHeadXRot`, `getMoveControl`, `getNavigation`, `getPathfindingMalus`, `getPickResult`, `getPickupReach`, `getRestrictCenter`, `getRestrictRadius`, `getSensing`, `getSpawnType`, `getTarget`, `hasRestriction`, `interact`, `isAggressive`, `isEffectiveAi`, `isLeashed`, `isLeftHanded`, `isMaxGroupSizeReached`, `isNoAi`, `isPersistenceRequired`, `isSpawnCancelled`, `isSunBurnTick`, `isWithinMeleeAttackRange`, `isWithinRestriction`, `isWithinRestriction`, `jumpInFluid`, `jumpInLiquid`, `lookAt`, `onOffspringSpawnedFromEgg`, `onPathfindingDone`, `onPathfindingStart`, `pickUpItem`, `playAmbientSound`, `playHurtSound`, `populateDefaultEquipmentEnchantments`, `populateDefaultEquipmentSlots`, `removeAfterChangingDimensions`, `removeAllGoals`, `removeFreeWill`, `requiresCustomPersistence`, `restrictTo`, `serverAiStep`, `setAggressive`, `setCanPickUpLoot`, `setDelayedLeashHolderId`, `setDropChance`, `setGuaranteedDrop`, `setItemSlot`, `setItemSlotAndDropWhenKilled`, `setLeashedTo`, `setLeftHanded`, `setNoAi`, `setPathfindingMalus`, `setPersistenceRequired`, `setSpawnCancelled`, `setSpeed`, `setTarget`, `setXxa`, `setYya`, `setZza`, `shouldDespawnInPeaceful`, `shouldPassengersInheritMalus`, `spawnAnim`, `startRiding`, `tickHeadTurn`, `updateControlFlags`, `wantsToPickUp`
- from `net.minecraft.world.entity.LivingEntity`: `addEffect`, `addEffect`, `animateHurt`, `areAllEffectsAmbient`, `attackable`, `blockedByShield`, `blockUsingShield`, `broadcastBreakEvent`, `broadcastBreakEvent`, `calculateEntityAnimation`, `canAttack`, `canAttack`, `canBeAffected`, `canBeSeenAsEnemy`, `canBeSeenByAnyone`, `canBreatheUnderwater`, `canChangeDimensions`, `canDisableShield`, `canFreeze`, `canSpawnSoulSpeedParticle`, `canStandOnFluid`, `checkAutoSpinAttack`, `checkFallDamage`, `clearSleepingPos`, `completeUsingItem`, `createLivingAttributes`, `createWitherRose`, `curePotionEffects`, `decreaseAirSupply`, `die`, `doAutoAttackOnTouch`, `doesEmitEquipEvent`, `doPush`, `dropAllDeathLoot`, `dropExperience`, `eat`, `equipmentHasChanged`, `forceAddEffect`, `getAbsorptionAmount`, `getActiveEffects`, `getActiveEffectsMap`, `getArmorCoverPercentage`, `getArmorValue`, `getArrowCount`, `getAttackAnim`, `getAttribute`, `getAttributeBaseValue`, `getAttributeBaseValue`, `getAttributes`, `getAttributeValue`, `getAttributeValue`, `getBedOrientation`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getBrain`, `getCombatTracker`, `getDamageAfterArmorAbsorb`, `getDamageAfterMagicAbsorb`, `getDismountPoses`, `getDrinkingSound`, `getEatingSound`, `getEffect`, `getEquipmentSlotForItem`, `getEyeHeight`, `getFallFlyingTicks`, `getFallSounds`, `getFluidFallingAdjustedMovement`, `getFlyingSpeed`, `getHealth`, `getHitbox`, `getHurtDir`, `getItemInHand`, `getJumpBoostPower`, `getJumpPower`, `getKillCredit`, `getLastAttacker`, `getLastClimbablePos`, `getLastDamageSource`, `getLastHurtByMob`, `getLastHurtByMobTimestamp`, `getLastHurtMob`, `getLastHurtMobTimestamp`, `getLocalBoundsForPose`, `getMainHandItem`, `getMaxAbsorption`, `getMaxHealth`, `getMobType`, `getMyRidingOffset`, `getNoActionTime`, `getOffhandItem`, `getPassengerRidingPosition`, `getProjectile`, `getRandom`, `getRelativePortalPosition`, `getSleepingPos`, `getSpeed`, `getStingerCount`, `getSwimAmount`, `getTicksUsingItem`, `getUsedItemHand`, `getUseItem`, `getUseItemRemainingTicks`, `getViewYRot`, `getVisibilityPercent`, `getVisualRotationYInDegrees`, `getVoicePitch`, `getWaterSlowDown`, `getYHeadRot`, `goDownInWater`, `handleDamageEvent`, `handleRelativeFrictionAndCalculateMovement`, `hasEffect`, `hasItemInSlot`, `hasLineOfSight`, `heal`, `hurtArmor`, `hurtCurrentlyUsedShield`, `hurtHelmet`, `increaseAirSupply`, `indicateDamage`, `internalSetAbsorptionAmount`, `isAffectedByFluids`, `isAffectedByPotions`, `isAlive`, `isAlwaysExperienceDropper`, `isAutoSpinAttack`, `isBlocking`, `isCurrentlyGlowing`, `isDamageSourceBlocked`, `isDeadOrDying`, `isFallFlying`, `isHolding`, `isHolding`, `isInvertedHealAndHarm`, `isInWall`, `isPickable`, `isSensitiveToWater`, `isSleeping`, `isSuppressingSlidingDownLadder`, `isUsingItem`, `isVisuallySwimming`, `jumpFromGround`, `kill`, `knockback`, `lerpHeadRotationStep`, `lerpHeadTo`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `lookAt`, `maxUpStep`, `onBelowWorld`, `onChangedBlock`, `onEffectAdded`, `onEffectRemoved`, `onEffectUpdated`, `onEnterCombat`, `onEquipItem`, `onItemPickup`, `onLeaveCombat`, `onSoulSpeedBlock`, `playBlockFallSound`, `push`, `pushEntities`, `randomTeleport`, `recreateFromPacket`, `releaseUsingItem`, `remove`, `removeAllEffects`, `removeEffect`, `removeEffectNoUpdate`, `removeEffectParticles`, `removeFrost`, `removeSoulSpeed`, `resetForwardDirectionOfRelativePortalPosition`, `reviveCaps`, `rideTick`, `sendEffectToPassengers`, `setAbsorptionAmount`, `setArrowCount`, `setDiscardFriction`, `setHealth`, `setItemInHand`, `setJumping`, `setLastHurtByMob`, `setLastHurtByPlayer`, `setLastHurtMob`, `setLivingEntityFlag`, `setNoActionTime`, `setRecordPlayingNearby`, `setSleepingPos`, `setSprinting`, `setStingerCount`, `setYBodyRot`, `setYHeadRot`, `shouldDiscardFriction`, `shouldDropExperience`, `shouldDropLoot`, `shouldRemoveSoulSpeed`, `shouldRiderFaceForward`, `shouldShowName`, `skipDropExperience`, `spawnSoulSpeedParticle`, `startSleeping`, `startUsingItem`, `stopRiding`, `stopSleeping`, `stopUsingItem`, `swing`, `swing`, `take`, `tickDeath`, `tickEffects`, `triggerItemUseEffects`, `tryAddFrost`, `tryAddSoulSpeed`, `updateEffectVisibility`, `updateInvisibilityStatus`, `updateSwingTime`, `updateUsingItem`, `verifyEquippedItem`, `wasExperienceConsumed`, `wouldNotSuffocateAtTargetPose`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canBeCollidedWith`, `canBeHitByProjectile`, `canCollideWith`, `canControlVehicle`, `canRide`, `canSpawnSprintParticle`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensionsForge`, `getDirection`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYRot`, `getZ`, `getZ`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `killedEntity`, `lavaHurt`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playSwimSound`, `position`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `refreshDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startSeenByPlayer`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getEyeInFluidType`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getFluidTypeHeight`, `getMaxHeightFluidType`, `getParts`, `getPersistentData`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isAddedToWorld`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `onAddedToWorld`, `onRemovedFromWorld`, `revive`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraftforge.common.extensions.IForgeLivingEntity`: `canDrownInFluidType`, `canSwimInFluidType`, `moveInFluid`, `self`, `sinkInFluid`
- from `net.minecraft.world.entity.OwnableEntity`: `getOwner`, `level`
- from `net.minecraft.world.entity.Saddleable`: `equipSaddle`, `isSaddleable`, `isSaddled`

## Camel.CamelBodyRotationControl

*class* `net.minecraft.world.entity.animal.camel.Camel.CamelBodyRotationControl`

Enclosing class: Camel

### Methods
- `public void clientTick()`

## Camel.CamelLookControl

*class* `net.minecraft.world.entity.animal.camel.Camel.CamelLookControl`

Enclosing class: Camel

### Inherited fields
- from `net.minecraft.world.entity.ai.control.LookControl`: `lookAtCooldown`, `mob`, `wantedX`, `wantedY`, `wantedZ`, `xMaxRotAngle`, `yMaxRotSpeed`

### Methods
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.control.LookControl`: `clampHeadRotationToBody`, `getWantedX`, `getWantedY`, `getWantedZ`, `getXRotD`, `getYRotD`, `isLookingAtTarget`, `resetXRotOnTick`, `rotateTowards`, `setLookAt`, `setLookAt`, `setLookAt`, `setLookAt`, `setLookAt`

## Camel.CamelMoveControl

*class* `net.minecraft.world.entity.animal.camel.Camel.CamelMoveControl`

Enclosing class: Camel

### Inherited fields
- from `net.minecraft.world.entity.ai.control.MoveControl`: `MAX_TURN`, `MIN_SPEED`, `MIN_SPEED_SQR`, `mob`, `operation`, `speedModifier`, `strafeForwards`, `strafeRight`, `wantedX`, `wantedY`, `wantedZ`

### Methods
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.control.MoveControl`: `getSpeedModifier`, `getWantedX`, `getWantedY`, `getWantedZ`, `hasWanted`, `rotlerp`, `setWantedPosition`, `strafe`

## CamelAi

*class* `net.minecraft.world.entity.animal.camel.CamelAi`

### Fields
- `private static final float SPEED_MULTIPLIER_WHEN_PANICKING` (= 4.0f)
- `private static final float SPEED_MULTIPLIER_WHEN_IDLING` (= 2.0f)
- `private static final float SPEED_MULTIPLIER_WHEN_TEMPTED` (= 2.5f)
- `private static final float SPEED_MULTIPLIER_WHEN_FOLLOWING_ADULT` (= 2.5f)
- `private static final float SPEED_MULTIPLIER_WHEN_MAKING_LOVE` (= 1.0f)
- `private static final UniformInt ADULT_FOLLOW_RANGE`
- `private static final com.google.common.collect.ImmutableList<SensorType<? extends Sensor<? super Camel>>> SENSOR_TYPES`
- `private static final com.google.common.collect.ImmutableList<MemoryModuleType<?>> MEMORY_TYPES`

### Methods
- `protected static void initMemories(Camel p_249638_,  RandomSource p_250704_)`
- `public static Brain.Provider<Camel> brainProvider()`
- `protected static Brain<?> makeBrain(Brain<Camel> p_249515_)`
- `private static void initCoreActivity(Brain<Camel> p_249998_)`
- `private static void initIdleActivity(Brain<Camel> p_252342_)`
- `public static void updateActivity(Camel p_250703_)`
- `public static Ingredient getTemptations()`

## CamelAi.CamelPanic

*class* `net.minecraft.world.entity.animal.camel.CamelAi.CamelPanic`

Enclosing class: CamelAi

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected void start(ServerLevel p_249530_,  PathfinderMob p_248643_,  long p_251124_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.AnimalPanic`: `canStillUse`, `checkExtraStartConditions`, `stop`, `tick`
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tickOrStop`, `timedOut`, `tryStart`

## CamelAi.RandomSitting

*class* `net.minecraft.world.entity.animal.camel.CamelAi.RandomSitting`

Enclosing class: CamelAi

### Fields
- `private final int minimalPoseTicks`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_249520_,  Camel p_250322_)`
- `protected void start(ServerLevel p_250901_,  Camel p_250345_,  long p_248515_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `canStillUse`, `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `stop`, `tick`, `tickOrStop`, `timedOut`, `tryStart`
