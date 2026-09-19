# net.minecraft.world.entity.animal.sniffer

- [Class Sniffer.State](#class-sniffer.state)
- [Sniffer](#sniffer)
- [SnifferAi](#snifferai)
- [SnifferAi.Digging](#snifferai.digging)
- [SnifferAi.FeelingHappy](#snifferai.feelinghappy)
- [SnifferAi.FinishedDigging](#snifferai.finisheddigging)
- [SnifferAi.Scenting](#snifferai.scenting)
- [SnifferAi.Searching](#snifferai.searching)
- [SnifferAi.Sniffing](#snifferai.sniffing)
## Class Sniffer.State

*enum* `net.minecraft.world.entity.animal.sniffer.Class Sniffer.State`

Enclosing class: Sniffer

### Methods
- `public static Sniffer.State[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Sniffer.State valueOf(String name)`
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

## Sniffer

*class* `net.minecraft.world.entity.animal.sniffer.Sniffer`

### Fields
- `private static final int DIGGING_PARTICLES_DELAY_TICKS` (= 1700)
- `private static final int DIGGING_PARTICLES_DURATION_TICKS` (= 6000)
- `private static final int DIGGING_PARTICLES_AMOUNT` (= 30)
- `private static final int DIGGING_DROP_SEED_OFFSET_TICKS` (= 120)
- `private static final int SNIFFER_BABY_AGE_TICKS` (= 48000)
- `private static final float DIGGING_BB_HEIGHT_OFFSET` (= 0.4000000059604645f)
- `private static final EntityDimensions DIGGING_DIMENSIONS`
- `private static final EntityDataAccessor<Sniffer.State> DATA_STATE`
- `private static final EntityDataAccessor<Integer> DATA_DROP_SEED_AT_TICK`
- `public final AnimationState feelingHappyAnimationState`
- `public final AnimationState scentingAnimationState`
- `public final AnimationState sniffingAnimationState`
- `public final AnimationState diggingAnimationState`
- `public final AnimationState risingAnimationState`

### Inherited fields
- from `net.minecraft.world.entity.animal.Animal`: `PARENT_AGE_AFTER_BREEDING`
- from `net.minecraft.world.entity.AgeableMob`: `age`, `BABY_START_AGE`, `forcedAge`, `forcedAgeTimer`
- from `net.minecraft.world.entity.PathfinderMob`: `DEFAULT_WALK_TARGET_VALUE`
- from `net.minecraft.world.entity.Mob`: `ambientSoundTime`, `armorDropChances`, `DEFAULT_EQUIPMENT_DROP_CHANCE`, `goalSelector`, `handDropChances`, `jumpControl`, `LEASH_TAG`, `lookControl`, `MAX_ENCHANTED_ARMOR_CHANCE`, `MAX_ENCHANTED_WEAPON_CHANCE`, `MAX_PICKUP_LOOT_CHANCE`, `MAX_WEARING_ARMOR_CHANCE`, `moveControl`, `navigation`, `PICKUP_REACH`, `PRESERVE_ITEM_DROP_CHANCE`, `targetSelector`, `UPDATE_GOAL_SELECTOR_EVERY_N_TICKS`, `xpReward`
- from `net.minecraft.world.entity.LivingEntity`: `animStep`, `animStepO`, `ARMOR_SLOT_OFFSET`, `ARMOR_SLOTS`, `attackAnim`, `attackStrengthTicker`, `autoSpinAttackTicks`, `brain`, `DATA_LIVING_ENTITY_FLAGS`, `dead`, `DEATH_DURATION`, `deathScore`, `deathTime`, `DEFAULT_BASE_GRAVITY`, `DEFAULT_EYE_HEIGHT`, `EQUIPMENT_SLOT_OFFSET`, `EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT`, `fallFlyTicks`, `HAND_SLOTS`, `hurtDuration`, `hurtTime`, `invulnerableDuration`, `jumping`, `lastHurt`, `lastHurtByPlayer`, `lastHurtByPlayerTime`, `lerpHeadSteps`, `lerpSteps`, `lerpX`, `lerpXRot`, `lerpY`, `lerpYHeadRot`, `lerpYRot`, `lerpZ`, `LIVING_ENTITY_FLAG_IS_USING`, `LIVING_ENTITY_FLAG_OFF_HAND`, `LIVING_ENTITY_FLAG_SPIN_ATTACK`, `MIN_MOVEMENT_DISTANCE`, `noActionTime`, `oAttackAnim`, `oRun`, `PLAYER_HURT_EXPERIENCE_TIME`, `removeArrowTime`, `removeStingerTime`, `rotA`, `rotOffs`, `run`, `SLEEPING_DIMENSIONS`, `SWING_DURATION`, `swinging`, `swingingArm`, `swingTime`, `timeOffs`, `USE_ITEM_INTERVAL`, `useItem`, `useItemRemaining`, `walkAnimation`, `xxa`, `yBodyRot`, `yBodyRotO`, `yHeadRot`, `yHeadRotO`, `yya`, `zza`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `public static AttributeSupplier.Builder createAttributes()`
- `protected float getStandingEyeHeight(Pose p_272721_,  EntityDimensions p_273353_)`
- `public void onPathfindingStart()`
- `public void onPathfindingDone()`
- `public EntityDimensions getDimensions(Pose p_286815_)`
- `public boolean isSearching()`
- `public boolean isTempted()`
- `public boolean canSniff()`
- `public boolean canPlayDiggingSound()`
- `private BlockPos getHeadBlock()`
- `private Vec3 getHeadPosition()`
- `private Sniffer.State getState()`
- `private Sniffer setState(Sniffer.State p_273359_)`
- `public void onSyncedDataUpdated(EntityDataAccessor<?> p_272936_)`
- `private void resetAnimations()`
- `public Sniffer transitionTo(Sniffer.State p_273096_)`
- `private Sniffer onScentingStart()`
- `private Sniffer onDiggingStart()`
- `public Sniffer onDiggingComplete(boolean p_272677_)`
- `Optional<BlockPos> calculateDigPosition()`
- `boolean canDig()`
- `private boolean canDig(BlockPos p_272757_)`
- `private void dropSeed()`
- `private Sniffer emitDiggingParticles(AnimationState p_273528_)`
- `private Sniffer storeExploredPosition(BlockPos p_273015_)`
- `private Stream<GlobalPos> getExploredPositions()`
- `protected void jumpFromGround()`
- `public void spawnChildFromBreeding(ServerLevel p_277923_,  Animal p_277857_)`
- `public void die(DamageSource p_277689_)`
- `public void tick()`
- `public InteractionResult mobInteract(Player p_273046_,  InteractionHand p_272687_)`
- `protected org.joml.Vector3f getPassengerAttachmentPoint(Entity p_299021_,  EntityDimensions p_299943_,  float p_301334_)`
- `public float getNameTagOffsetY()`
- `private void playSearchingSound()`
- `protected void playStepSound(BlockPos p_272953_,  BlockState p_273729_)`
- `public SoundEvent getEatingSound(ItemStack p_272747_)`
- `protected SoundEvent getAmbientSound()`
- `protected SoundEvent getHurtSound(DamageSource p_273718_)`
- `protected SoundEvent getDeathSound()`
- `public int getMaxHeadYRot()`
- `public void setBaby(boolean p_272995_)`
- `public AgeableMob getBreedOffspring(ServerLevel p_273401_,  AgeableMob p_273310_)`
- `public boolean canMate(Animal p_272966_)`
- `public AABB getBoundingBoxForCulling()`
- `public boolean isFood(ItemStack p_273659_)`
- `protected Brain<?> makeBrain(com.mojang.serialization.Dynamic<?> p_273174_)`
- `public Brain<Sniffer> getBrain()`
- `protected Brain.Provider<Sniffer> brainProvider()`
- `protected void customServerAiStep()`
- `protected void sendDebugPackets()`

### Inherited methods
- from `net.minecraft.world.entity.animal.Animal`: `addAdditionalSaveData`, `aiStep`, `canFallInLove`, `checkAnimalSpawnRules`, `finalizeSpawnChildFromBreeding`, `getAmbientSoundInterval`, `getExperienceReward`, `getInLoveTime`, `getLoveCause`, `getWalkTargetValue`, `handleEntityEvent`, `hurt`, `isBrightEnoughToSpawn`, `isInLove`, `readAdditionalSaveData`, `removeWhenFarAway`, `resetLove`, `setInLove`, `setInLoveTime`, `usePlayerItem`
- from `net.minecraft.world.entity.AgeableMob`: `ageBoundaryReached`, `ageUp`, `ageUp`, `canBreed`, `defineSynchedData`, `finalizeSpawn`, `getAge`, `getSpeedUpSecondsWhenFeeding`, `isBaby`, `setAge`
- from `net.minecraft.world.entity.PathfinderMob`: `checkSpawnRules`, `followLeashSpeed`, `getWalkTargetValue`, `isPanicking`, `isPathFinding`, `onLeashDistance`, `shouldStayCloseToLeashHolder`, `tickLeash`
- from `net.minecraft.world.entity.Mob`: `ate`, `baseTick`, `canAttackType`, `canBeLeashed`, `canFireProjectileWeapon`, `canHoldItem`, `canPickUpLoot`, `canReplaceCurrentItem`, `canReplaceEqualItem`, `canTakeItem`, `checkDespawn`, `checkMobSpawnRules`, `checkSpawnObstruction`, `clearRestriction`, `convertTo`, `createBodyControl`, `createMobAttributes`, `createNavigation`, `doHurtTarget`, `dropCustomDeathLoot`, `dropFromLootTable`, `dropLeash`, `enchantSpawnedArmor`, `enchantSpawnedWeapon`, `equipItemIfPossible`, `getArmorSlots`, `getAttackBoundingBox`, `getControllingPassenger`, `getDefaultLootTable`, `getEquipmentDropChance`, `getEquipmentForSlot`, `getHandSlots`, `getHeadRotSpeed`, `getItemBySlot`, `getJumpControl`, `getLeashHolder`, `getLookControl`, `getLootTable`, `getLootTableSeed`, `getMainArm`, `getMaxFallDistance`, `getMaxHeadXRot`, `getMaxSpawnClusterSize`, `getMoveControl`, `getNavigation`, `getPathfindingMalus`, `getPickResult`, `getPickupReach`, `getRestrictCenter`, `getRestrictRadius`, `getSensing`, `getSpawnType`, `getTarget`, `hasRestriction`, `interact`, `isAggressive`, `isEffectiveAi`, `isLeashed`, `isLeftHanded`, `isMaxGroupSizeReached`, `isNoAi`, `isPersistenceRequired`, `isSpawnCancelled`, `isSunBurnTick`, `isWithinMeleeAttackRange`, `isWithinRestriction`, `isWithinRestriction`, `jumpInFluid`, `jumpInLiquid`, `lookAt`, `onOffspringSpawnedFromEgg`, `pickUpItem`, `playAmbientSound`, `playHurtSound`, `populateDefaultEquipmentEnchantments`, `populateDefaultEquipmentSlots`, `registerGoals`, `removeAfterChangingDimensions`, `removeAllGoals`, `removeFreeWill`, `requiresCustomPersistence`, `restrictTo`, `serverAiStep`, `setAggressive`, `setCanPickUpLoot`, `setDelayedLeashHolderId`, `setDropChance`, `setGuaranteedDrop`, `setItemSlot`, `setItemSlotAndDropWhenKilled`, `setLeashedTo`, `setLeftHanded`, `setNoAi`, `setPathfindingMalus`, `setPersistenceRequired`, `setSpawnCancelled`, `setSpeed`, `setTarget`, `setXxa`, `setYya`, `setZza`, `shouldDespawnInPeaceful`, `shouldPassengersInheritMalus`, `spawnAnim`, `startRiding`, `tickHeadTurn`, `updateControlFlags`, `wantsToPickUp`
- from `net.minecraft.world.entity.LivingEntity`: `actuallyHurt`, `addEffect`, `addEffect`, `animateHurt`, `areAllEffectsAmbient`, `attackable`, `blockedByShield`, `blockUsingShield`, `broadcastBreakEvent`, `broadcastBreakEvent`, `calculateEntityAnimation`, `calculateFallDamage`, `canAttack`, `canAttack`, `canBeAffected`, `canBeSeenAsEnemy`, `canBeSeenByAnyone`, `canBreatheUnderwater`, `canChangeDimensions`, `canDisableShield`, `canFreeze`, `canSpawnSoulSpeedParticle`, `canStandOnFluid`, `causeFallDamage`, `checkAutoSpinAttack`, `checkFallDamage`, `clearSleepingPos`, `completeUsingItem`, `createLivingAttributes`, `createWitherRose`, `curePotionEffects`, `decreaseAirSupply`, `doAutoAttackOnTouch`, `doesEmitEquipEvent`, `doPush`, `dropAllDeathLoot`, `dropEquipment`, `dropExperience`, `eat`, `equipmentHasChanged`, `forceAddEffect`, `getAbsorptionAmount`, `getActiveEffects`, `getActiveEffectsMap`, `getArmorCoverPercentage`, `getArmorValue`, `getArrowCount`, `getAttackAnim`, `getAttribute`, `getAttributeBaseValue`, `getAttributeBaseValue`, `getAttributes`, `getAttributeValue`, `getAttributeValue`, `getBedOrientation`, `getBlockSpeedFactor`, `getCapability`, `getCombatTracker`, `getDamageAfterArmorAbsorb`, `getDamageAfterMagicAbsorb`, `getDismountPoses`, `getDrinkingSound`, `getEffect`, `getEquipmentSlotForItem`, `getEyeHeight`, `getFallFlyingTicks`, `getFallSounds`, `getFluidFallingAdjustedMovement`, `getFlyingSpeed`, `getHealth`, `getHitbox`, `getHurtDir`, `getItemInHand`, `getJumpBoostPower`, `getJumpPower`, `getKillCredit`, `getLastAttacker`, `getLastClimbablePos`, `getLastDamageSource`, `getLastHurtByMob`, `getLastHurtByMobTimestamp`, `getLastHurtMob`, `getLastHurtMobTimestamp`, `getLocalBoundsForPose`, `getMainHandItem`, `getMaxAbsorption`, `getMaxHealth`, `getMobType`, `getMyRidingOffset`, `getNoActionTime`, `getOffhandItem`, `getPassengerRidingPosition`, `getProjectile`, `getRandom`, `getRelativePortalPosition`, `getRiddenInput`, `getRiddenSpeed`, `getScale`, `getSleepingPos`, `getSlot`, `getSoundVolume`, `getSpeed`, `getStingerCount`, `getSwimAmount`, `getTicksUsingItem`, `getUsedItemHand`, `getUseItem`, `getUseItemRemainingTicks`, `getViewYRot`, `getVisibilityPercent`, `getVisualRotationYInDegrees`, `getVoicePitch`, `getWaterSlowDown`, `getYHeadRot`, `goDownInWater`, `handleDamageEvent`, `handleRelativeFrictionAndCalculateMovement`, `hasEffect`, `hasItemInSlot`, `hasLineOfSight`, `heal`, `hurtArmor`, `hurtCurrentlyUsedShield`, `hurtHelmet`, `increaseAirSupply`, `indicateDamage`, `internalSetAbsorptionAmount`, `invalidateCaps`, `isAffectedByFluids`, `isAffectedByPotions`, `isAlive`, `isAlwaysExperienceDropper`, `isAutoSpinAttack`, `isBlocking`, `isCurrentlyGlowing`, `isDamageSourceBlocked`, `isDeadOrDying`, `isFallFlying`, `isHolding`, `isHolding`, `isImmobile`, `isInvertedHealAndHarm`, `isInWall`, `isPickable`, `isPushable`, `isSensitiveToWater`, `isSleeping`, `isSuppressingSlidingDownLadder`, `isUsingItem`, `isVisuallySwimming`, `kill`, `knockback`, `lerpHeadRotationStep`, `lerpHeadTo`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `lookAt`, `maxUpStep`, `onBelowWorld`, `onChangedBlock`, `onClimbable`, `onEffectAdded`, `onEffectRemoved`, `onEffectUpdated`, `onEnterCombat`, `onEquipItem`, `onItemPickup`, `onLeaveCombat`, `onSoulSpeedBlock`, `playBlockFallSound`, `push`, `pushEntities`, `randomTeleport`, `recreateFromPacket`, `releaseUsingItem`, `remove`, `removeAllEffects`, `removeEffect`, `removeEffectNoUpdate`, `removeEffectParticles`, `removeFrost`, `removeSoulSpeed`, `resetForwardDirectionOfRelativePortalPosition`, `reviveCaps`, `rideTick`, `sendEffectToPassengers`, `setAbsorptionAmount`, `setArrowCount`, `setDiscardFriction`, `setHealth`, `setItemInHand`, `setJumping`, `setLastHurtByMob`, `setLastHurtByPlayer`, `setLastHurtMob`, `setLivingEntityFlag`, `setNoActionTime`, `setRecordPlayingNearby`, `setSleepingPos`, `setSprinting`, `setStingerCount`, `setYBodyRot`, `setYHeadRot`, `shouldDiscardFriction`, `shouldDropExperience`, `shouldDropLoot`, `shouldRemoveSoulSpeed`, `shouldRiderFaceForward`, `shouldShowName`, `skipDropExperience`, `spawnSoulSpeedParticle`, `startSleeping`, `startUsingItem`, `stopRiding`, `stopSleeping`, `stopUsingItem`, `swing`, `swing`, `take`, `tickDeath`, `tickEffects`, `tickRidden`, `travel`, `triggerItemUseEffects`, `tryAddFrost`, `tryAddSoulSpeed`, `updateEffectVisibility`, `updateInvisibilityStatus`, `updateSwingTime`, `updateUsingItem`, `updateWalkAnimation`, `verifyEquippedItem`, `wasExperienceConsumed`, `wouldNotSuffocateAtTargetPose`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canCollideWith`, `canControlVehicle`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getName`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYRot`, `getZ`, `getZ`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `killedEntity`, `lavaHurt`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `refreshDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startSeenByPlayer`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getEyeInFluidType`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getFluidTypeHeight`, `getMaxHeightFluidType`, `getParts`, `getPersistentData`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isAddedToWorld`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `onAddedToWorld`, `onRemovedFromWorld`, `revive`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraftforge.common.extensions.IForgeLivingEntity`: `canDrownInFluidType`, `canSwimInFluidType`, `moveInFluid`, `self`, `sinkInFluid`

## SnifferAi

*class* `net.minecraft.world.entity.animal.sniffer.SnifferAi`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int MAX_LOOK_DISTANCE` (= 6)
- `static final List<SensorType<? extends Sensor<? super Sniffer>>> SENSOR_TYPES`
- `static final List<MemoryModuleType<?>> MEMORY_TYPES`
- `private static final int SNIFFING_COOLDOWN_TICKS` (= 9600)
- `private static final float SPEED_MULTIPLIER_WHEN_IDLING` (= 1.0f)
- `private static final float SPEED_MULTIPLIER_WHEN_PANICKING` (= 2.0f)
- `private static final float SPEED_MULTIPLIER_WHEN_SNIFFING` (= 1.25f)
- `private static final float SPEED_MULTIPLIER_WHEN_TEMPTED` (= 1.25f)

### Methods
- `public static Ingredient getTemptations()`
- `protected static Brain<?> makeBrain(Brain<Sniffer> p_273175_)`
- `static Sniffer resetSniffing(Sniffer p_279301_)`
- `private static void initCoreActivity(Brain<Sniffer> p_273185_)`
- `private static void initSniffingActivity(Brain<Sniffer> p_273183_)`
- `private static void initDigActivity(Brain<Sniffer> p_273677_)`
- `private static void initIdleActivity(Brain<Sniffer> p_273750_)`
- `static void updateActivity(Sniffer p_273301_)`

## SnifferAi.Digging

*class* `net.minecraft.world.entity.animal.sniffer.SnifferAi.Digging`

Enclosing class: SnifferAi

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_273442_,  Sniffer p_273370_)`
- `protected boolean canStillUse(ServerLevel p_272686_,  Sniffer p_273617_,  long p_273124_)`
- `protected void start(ServerLevel p_272951_,  Sniffer p_272688_,  long p_272979_)`
- `protected void stop(ServerLevel p_273656_,  Sniffer p_273063_,  long p_272844_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tick`, `tickOrStop`, `timedOut`, `tryStart`

## SnifferAi.FeelingHappy

*class* `net.minecraft.world.entity.animal.sniffer.SnifferAi.FeelingHappy`

Enclosing class: SnifferAi

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean canStillUse(ServerLevel p_272660_,  Sniffer p_273250_,  long p_273180_)`
- `protected void start(ServerLevel p_273624_,  Sniffer p_273470_,  long p_273501_)`
- `protected void stop(ServerLevel p_273216_,  Sniffer p_273271_,  long p_273738_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `checkExtraStartConditions`, `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tick`, `tickOrStop`, `timedOut`, `tryStart`

## SnifferAi.FinishedDigging

*class* `net.minecraft.world.entity.animal.sniffer.SnifferAi.FinishedDigging`

Enclosing class: SnifferAi

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_273692_,  Sniffer p_272856_)`
- `protected boolean canStillUse(ServerLevel p_273775_,  Sniffer p_273131_,  long p_273569_)`
- `protected void start(ServerLevel p_272708_,  Sniffer p_273502_,  long p_272739_)`
- `protected void stop(ServerLevel p_273210_,  Sniffer p_273648_,  long p_272804_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tick`, `tickOrStop`, `timedOut`, `tryStart`

## SnifferAi.Scenting

*class* `net.minecraft.world.entity.animal.sniffer.SnifferAi.Scenting`

Enclosing class: SnifferAi

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_279176_,  Sniffer p_279496_)`
- `protected boolean canStillUse(ServerLevel p_273482_,  Sniffer p_273724_,  long p_273191_)`
- `protected void start(ServerLevel p_272795_,  Sniffer p_272788_,  long p_273611_)`
- `protected void stop(ServerLevel p_272816_,  Sniffer p_273426_,  long p_272832_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tick`, `tickOrStop`, `timedOut`, `tryStart`

## SnifferAi.Searching

*class* `net.minecraft.world.entity.animal.sniffer.SnifferAi.Searching`

Enclosing class: SnifferAi

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_273493_,  Sniffer p_272857_)`
- `protected boolean canStillUse(ServerLevel p_273196_,  Sniffer p_273769_,  long p_273602_)`
- `protected void start(ServerLevel p_273563_,  Sniffer p_273394_,  long p_273358_)`
- `protected void stop(ServerLevel p_273705_,  Sniffer p_273135_,  long p_272667_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tick`, `tickOrStop`, `timedOut`, `tryStart`

## SnifferAi.Sniffing

*class* `net.minecraft.world.entity.animal.sniffer.SnifferAi.Sniffing`

Enclosing class: SnifferAi

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_272972_,  Sniffer p_273676_)`
- `protected boolean canStillUse(ServerLevel p_273156_,  Sniffer p_273448_,  long p_272841_)`
- `protected void start(ServerLevel p_272950_,  Sniffer p_272614_,  long p_273573_)`
- `protected void stop(ServerLevel p_272617_,  Sniffer p_273181_,  long p_272635_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tick`, `tickOrStop`, `timedOut`, `tryStart`
