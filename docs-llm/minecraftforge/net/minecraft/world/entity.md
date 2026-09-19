# net.minecraft.world.entity

- [AgeableMob](#ageablemob)
- [AgeableMob.AgeableMobGroupData](#ageablemob.ageablemobgroupdata)
- [AnimationState](#animationstate)
- [AreaEffectCloud](#areaeffectcloud)
- [Attackable](#attackable)
- [Class Display.BillboardConstraints](#class-display.billboardconstraints)
- [Class Display.TextDisplay.Align](#class-display.textdisplay.align)
- [Class Entity.MovementEmission](#class-entity.movementemission)
- [Class Entity.RemovalReason](#class-entity.removalreason)
- [Class EquipmentSlot](#class-equipmentslot)
- [Class EquipmentSlot.Type](#class-equipmentslot.type)
- [Class HumanoidArm](#class-humanoidarm)
- [Class MobCategory](#class-mobcategory)
- [Class MobSpawnType](#class-mobspawntype)
- [Class MoverType](#class-movertype)
- [Class Pose](#class-pose)
- [Class RelativeMovement](#class-relativemovement)
- [Class SpawnPlacements.Type](#class-spawnplacements.type)
- [Display](#display)
- [Display.BlockDisplay](#display.blockdisplay)
- [Display.BlockDisplay.BlockRenderState](#display.blockdisplay.blockrenderstate)
- [Display.ColorInterpolator](#display.colorinterpolator)
- [Display.FloatInterpolator](#display.floatinterpolator)
- [Display.GenericInterpolator](#display.genericinterpolator)
- [Display.IntInterpolator](#display.intinterpolator)
- [Display.ItemDisplay](#display.itemdisplay)
- [Display.ItemDisplay.ItemRenderState](#display.itemdisplay.itemrenderstate)
- [Display.LinearFloatInterpolator](#display.linearfloatinterpolator)
- [Display.LinearIntInterpolator](#display.linearintinterpolator)
- [Display.PosRotInterpolationTarget](#display.posrotinterpolationtarget)
- [Display.RenderState](#display.renderstate)
- [Display.TextDisplay](#display.textdisplay)
- [Display.TextDisplay.CachedInfo](#display.textdisplay.cachedinfo)
- [Display.TextDisplay.CachedLine](#display.textdisplay.cachedline)
- [Display.TextDisplay.LineSplitter](#display.textdisplay.linesplitter)
- [Display.TextDisplay.TextRenderState](#display.textdisplay.textrenderstate)
- [Display.TransformationInterpolator](#display.transformationinterpolator)
- [Entity](#entity)
- [Entity.MoveFunction](#entity.movefunction)
- [EntityDimensions](#entitydimensions)
- [EntityEvent](#entityevent)
- [EntitySelector](#entityselector)
- [EntitySelector.MobCanWearArmorEntitySelector](#entityselector.mobcanweararmorentityselector)
- [EntityType](#entitytype)
- [EntityType.Builder](#entitytype.builder)
- [EntityType.EntityFactory](#entitytype.entityfactory)
- [ExperienceOrb](#experienceorb)
- [FlyingMob](#flyingmob)
- [GlowSquid](#glowsquid)
- [HasCustomInventoryScreen](#hascustominventoryscreen)
- [Interaction](#interaction)
- [Interaction.PlayerAction](#interaction.playeraction)
- [ItemBasedSteering](#itembasedsteering)
- [ItemSteerable](#itemsteerable)
- [LerpingModel](#lerpingmodel)
- [LightningBolt](#lightningbolt)
- [LivingEntity](#livingentity)
- [LivingEntity.Fallsounds](#livingentity.fallsounds)
- [Marker](#marker)
- [Mob](#mob)
- [MobType](#mobtype)
- [NeutralMob](#neutralmob)
- [OwnableEntity](#ownableentity)
- [PathfinderMob](#pathfindermob)
- [PlayerRideable](#playerrideable)
- [PlayerRideableJumping](#playerrideablejumping)
- [PowerableMob](#powerablemob)
- [ReputationEventHandler](#reputationeventhandler)
- [Saddleable](#saddleable)
- [Shearable](#shearable)
- [SlotAccess](#slotaccess)
- [SpawnGroupData](#spawngroupdata)
- [SpawnPlacements](#spawnplacements)
- [SpawnPlacements.Data](#spawnplacements.data)
- [SpawnPlacements.SpawnPredicate](#spawnplacements.spawnpredicate)
- [TamableAnimal](#tamableanimal)
- [Targeting](#targeting)
- [TraceableEntity](#traceableentity)
- [VariantHolder](#variantholder)
- [WalkAnimationState](#walkanimationstate)
## AgeableMob

*class* `net.minecraft.world.entity.AgeableMob`

### Fields
- `private static final EntityDataAccessor<Boolean> DATA_BABY_ID`
- `public static final int BABY_START_AGE` (= -24000)
- `private static final int FORCED_AGE_PARTICLE_TICKS` (= 40)
- `protected int age`
- `protected int forcedAge`
- `protected int forcedAgeTimer`

### Inherited fields
- from `net.minecraft.world.entity.PathfinderMob`: `DEFAULT_WALK_TARGET_VALUE`
- from `net.minecraft.world.entity.Mob`: `ambientSoundTime`, `armorDropChances`, `DEFAULT_EQUIPMENT_DROP_CHANCE`, `goalSelector`, `handDropChances`, `jumpControl`, `LEASH_TAG`, `lookControl`, `MAX_ENCHANTED_ARMOR_CHANCE`, `MAX_ENCHANTED_WEAPON_CHANCE`, `MAX_PICKUP_LOOT_CHANCE`, `MAX_WEARING_ARMOR_CHANCE`, `moveControl`, `navigation`, `PICKUP_REACH`, `PRESERVE_ITEM_DROP_CHANCE`, `targetSelector`, `UPDATE_GOAL_SELECTOR_EVERY_N_TICKS`, `xpReward`
- from `net.minecraft.world.entity.LivingEntity`: `animStep`, `animStepO`, `ARMOR_SLOT_OFFSET`, `ARMOR_SLOTS`, `attackAnim`, `attackStrengthTicker`, `autoSpinAttackTicks`, `brain`, `DATA_LIVING_ENTITY_FLAGS`, `dead`, `DEATH_DURATION`, `deathScore`, `deathTime`, `DEFAULT_BASE_GRAVITY`, `DEFAULT_EYE_HEIGHT`, `EQUIPMENT_SLOT_OFFSET`, `EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT`, `fallFlyTicks`, `HAND_SLOTS`, `hurtDuration`, `hurtTime`, `invulnerableDuration`, `jumping`, `lastHurt`, `lastHurtByPlayer`, `lastHurtByPlayerTime`, `lerpHeadSteps`, `lerpSteps`, `lerpX`, `lerpXRot`, `lerpY`, `lerpYHeadRot`, `lerpYRot`, `lerpZ`, `LIVING_ENTITY_FLAG_IS_USING`, `LIVING_ENTITY_FLAG_OFF_HAND`, `LIVING_ENTITY_FLAG_SPIN_ATTACK`, `MIN_MOVEMENT_DISTANCE`, `noActionTime`, `oAttackAnim`, `oRun`, `PLAYER_HURT_EXPERIENCE_TIME`, `removeArrowTime`, `removeStingerTime`, `rotA`, `rotOffs`, `run`, `SLEEPING_DIMENSIONS`, `SWING_DURATION`, `swinging`, `swingingArm`, `swingTime`, `timeOffs`, `USE_ITEM_INTERVAL`, `useItem`, `useItemRemaining`, `walkAnimation`, `xxa`, `yBodyRot`, `yBodyRotO`, `yHeadRot`, `yHeadRotO`, `yya`, `zza`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_146746_,  DifficultyInstance p_146747_,  MobSpawnType p_146748_,  @Nullable  SpawnGroupData p_146749_,  @Nullable  CompoundTag p_146750_)`
  Description copied from class: Mob
  Forge: Override-Only, call via ForgeEventFactory.onFinalizeSpawn.
  
   Overrides are allowed. Do not wrap super calls within override (as that will cause stack overflows).
  
   Vanilla calls are replaced with a transformer, and are not visible in source.
  
   Be certain to either call super.finalizeSpawn or set the Mob.spawnType field from within your override.
- `@Nullable public abstract AgeableMob getBreedOffspring(ServerLevel p_146743_,  AgeableMob p_146744_)`
- `protected void defineSynchedData()`
- `public boolean canBreed()`
- `public int getAge()`
- `public void ageUp(int p_146741_,  boolean p_146742_)`
- `public void ageUp(int p_146759_)`
- `public void setAge(int p_146763_)`
- `public void addAdditionalSaveData(CompoundTag p_146761_)`
- `public void readAdditionalSaveData(CompoundTag p_146752_)`
- `public void onSyncedDataUpdated(EntityDataAccessor<?> p_146754_)`
- `public void aiStep()`
- `protected void ageBoundaryReached()`
- `public boolean isBaby()`
- `public void setBaby(boolean p_146756_)`
- `public static int getSpeedUpSecondsWhenFeeding(int p_216968_)`

### Inherited methods
- from `net.minecraft.world.entity.PathfinderMob`: `checkSpawnRules`, `followLeashSpeed`, `getWalkTargetValue`, `getWalkTargetValue`, `isPanicking`, `isPathFinding`, `onLeashDistance`, `shouldStayCloseToLeashHolder`, `tickLeash`
- from `net.minecraft.world.entity.Mob`: `ate`, `baseTick`, `canAttackType`, `canBeLeashed`, `canFireProjectileWeapon`, `canHoldItem`, `canPickUpLoot`, `canReplaceCurrentItem`, `canReplaceEqualItem`, `canTakeItem`, `checkDespawn`, `checkMobSpawnRules`, `checkSpawnObstruction`, `clearRestriction`, `convertTo`, `createBodyControl`, `createMobAttributes`, `createNavigation`, `customServerAiStep`, `doHurtTarget`, `dropCustomDeathLoot`, `dropFromLootTable`, `dropLeash`, `enchantSpawnedArmor`, `enchantSpawnedWeapon`, `equipItemIfPossible`, `getAmbientSound`, `getAmbientSoundInterval`, `getArmorSlots`, `getAttackBoundingBox`, `getControllingPassenger`, `getDefaultLootTable`, `getEquipmentDropChance`, `getEquipmentForSlot`, `getExperienceReward`, `getHandSlots`, `getHeadRotSpeed`, `getItemBySlot`, `getJumpControl`, `getLeashHolder`, `getLookControl`, `getLootTable`, `getLootTableSeed`, `getMainArm`, `getMaxFallDistance`, `getMaxHeadXRot`, `getMaxHeadYRot`, `getMaxSpawnClusterSize`, `getMoveControl`, `getNavigation`, `getPathfindingMalus`, `getPickResult`, `getPickupReach`, `getRestrictCenter`, `getRestrictRadius`, `getSensing`, `getSpawnType`, `getTarget`, `handleEntityEvent`, `hasRestriction`, `interact`, `isAggressive`, `isEffectiveAi`, `isLeashed`, `isLeftHanded`, `isMaxGroupSizeReached`, `isNoAi`, `isPersistenceRequired`, `isSpawnCancelled`, `isSunBurnTick`, `isWithinMeleeAttackRange`, `isWithinRestriction`, `isWithinRestriction`, `jumpInFluid`, `jumpInLiquid`, `lookAt`, `mobInteract`, `onOffspringSpawnedFromEgg`, `onPathfindingDone`, `onPathfindingStart`, `pickUpItem`, `playAmbientSound`, `playHurtSound`, `populateDefaultEquipmentEnchantments`, `populateDefaultEquipmentSlots`, `registerGoals`, `removeAfterChangingDimensions`, `removeAllGoals`, `removeFreeWill`, `removeWhenFarAway`, `requiresCustomPersistence`, `restrictTo`, `sendDebugPackets`, `serverAiStep`, `setAggressive`, `setCanPickUpLoot`, `setDelayedLeashHolderId`, `setDropChance`, `setGuaranteedDrop`, `setItemSlot`, `setItemSlotAndDropWhenKilled`, `setLeashedTo`, `setLeftHanded`, `setNoAi`, `setPathfindingMalus`, `setPersistenceRequired`, `setSpawnCancelled`, `setSpeed`, `setTarget`, `setXxa`, `setYya`, `setZza`, `shouldDespawnInPeaceful`, `shouldPassengersInheritMalus`, `spawnAnim`, `startRiding`, `tick`, `tickHeadTurn`, `updateControlFlags`, `wantsToPickUp`
- from `net.minecraft.world.entity.LivingEntity`: `actuallyHurt`, `addEffect`, `addEffect`, `animateHurt`, `areAllEffectsAmbient`, `attackable`, `blockedByShield`, `blockUsingShield`, `brainProvider`, `broadcastBreakEvent`, `broadcastBreakEvent`, `calculateEntityAnimation`, `calculateFallDamage`, `canAttack`, `canAttack`, `canBeAffected`, `canBeSeenAsEnemy`, `canBeSeenByAnyone`, `canBreatheUnderwater`, `canChangeDimensions`, `canDisableShield`, `canFreeze`, `canSpawnSoulSpeedParticle`, `canStandOnFluid`, `causeFallDamage`, `checkAutoSpinAttack`, `checkFallDamage`, `clearSleepingPos`, `completeUsingItem`, `createLivingAttributes`, `createWitherRose`, `curePotionEffects`, `decreaseAirSupply`, `die`, `doAutoAttackOnTouch`, `doesEmitEquipEvent`, `doPush`, `dropAllDeathLoot`, `dropEquipment`, `dropExperience`, `eat`, `equipmentHasChanged`, `forceAddEffect`, `getAbsorptionAmount`, `getActiveEffects`, `getActiveEffectsMap`, `getArmorCoverPercentage`, `getArmorValue`, `getArrowCount`, `getAttackAnim`, `getAttribute`, `getAttributeBaseValue`, `getAttributeBaseValue`, `getAttributes`, `getAttributeValue`, `getAttributeValue`, `getBedOrientation`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getBrain`, `getCapability`, `getCombatTracker`, `getDamageAfterArmorAbsorb`, `getDamageAfterMagicAbsorb`, `getDeathSound`, `getDimensions`, `getDismountPoses`, `getDrinkingSound`, `getEatingSound`, `getEffect`, `getEquipmentSlotForItem`, `getEyeHeight`, `getFallFlyingTicks`, `getFallSounds`, `getFluidFallingAdjustedMovement`, `getFlyingSpeed`, `getHealth`, `getHitbox`, `getHurtDir`, `getHurtSound`, `getItemInHand`, `getJumpBoostPower`, `getJumpPower`, `getKillCredit`, `getLastAttacker`, `getLastClimbablePos`, `getLastDamageSource`, `getLastHurtByMob`, `getLastHurtByMobTimestamp`, `getLastHurtMob`, `getLastHurtMobTimestamp`, `getLocalBoundsForPose`, `getMainHandItem`, `getMaxAbsorption`, `getMaxHealth`, `getMobType`, `getMyRidingOffset`, `getNoActionTime`, `getOffhandItem`, `getPassengerRidingPosition`, `getProjectile`, `getRandom`, `getRelativePortalPosition`, `getRiddenInput`, `getRiddenSpeed`, `getScale`, `getSleepingPos`, `getSlot`, `getSoundVolume`, `getSpeed`, `getStandingEyeHeight`, `getStingerCount`, `getSwimAmount`, `getTicksUsingItem`, `getUsedItemHand`, `getUseItem`, `getUseItemRemainingTicks`, `getViewYRot`, `getVisibilityPercent`, `getVisualRotationYInDegrees`, `getVoicePitch`, `getWaterSlowDown`, `getYHeadRot`, `goDownInWater`, `handleDamageEvent`, `handleRelativeFrictionAndCalculateMovement`, `hasEffect`, `hasItemInSlot`, `hasLineOfSight`, `heal`, `hurt`, `hurtArmor`, `hurtCurrentlyUsedShield`, `hurtHelmet`, `increaseAirSupply`, `indicateDamage`, `internalSetAbsorptionAmount`, `invalidateCaps`, `isAffectedByFluids`, `isAffectedByPotions`, `isAlive`, `isAlwaysExperienceDropper`, `isAutoSpinAttack`, `isBlocking`, `isCurrentlyGlowing`, `isDamageSourceBlocked`, `isDeadOrDying`, `isFallFlying`, `isHolding`, `isHolding`, `isImmobile`, `isInvertedHealAndHarm`, `isInWall`, `isPickable`, `isPushable`, `isSensitiveToWater`, `isSleeping`, `isSuppressingSlidingDownLadder`, `isUsingItem`, `isVisuallySwimming`, `jumpFromGround`, `kill`, `knockback`, `lerpHeadRotationStep`, `lerpHeadTo`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `lookAt`, `makeBrain`, `maxUpStep`, `onBelowWorld`, `onChangedBlock`, `onClimbable`, `onEffectAdded`, `onEffectRemoved`, `onEffectUpdated`, `onEnterCombat`, `onEquipItem`, `onItemPickup`, `onLeaveCombat`, `onSoulSpeedBlock`, `playBlockFallSound`, `push`, `pushEntities`, `randomTeleport`, `recreateFromPacket`, `releaseUsingItem`, `remove`, `removeAllEffects`, `removeEffect`, `removeEffectNoUpdate`, `removeEffectParticles`, `removeFrost`, `removeSoulSpeed`, `resetForwardDirectionOfRelativePortalPosition`, `reviveCaps`, `rideTick`, `sendEffectToPassengers`, `setAbsorptionAmount`, `setArrowCount`, `setDiscardFriction`, `setHealth`, `setItemInHand`, `setJumping`, `setLastHurtByMob`, `setLastHurtByPlayer`, `setLastHurtMob`, `setLivingEntityFlag`, `setNoActionTime`, `setRecordPlayingNearby`, `setSleepingPos`, `setSprinting`, `setStingerCount`, `setYBodyRot`, `setYHeadRot`, `shouldDiscardFriction`, `shouldDropExperience`, `shouldDropLoot`, `shouldRemoveSoulSpeed`, `shouldRiderFaceForward`, `shouldShowName`, `skipDropExperience`, `spawnSoulSpeedParticle`, `startSleeping`, `startUsingItem`, `stopRiding`, `stopSleeping`, `stopUsingItem`, `swing`, `swing`, `take`, `tickDeath`, `tickEffects`, `tickRidden`, `travel`, `triggerItemUseEffects`, `tryAddFrost`, `tryAddSoulSpeed`, `updateEffectVisibility`, `updateInvisibilityStatus`, `updateSwingTime`, `updateUsingItem`, `updateWalkAnimation`, `verifyEquippedItem`, `wasExperienceConsumed`, `wouldNotSuffocateAtTargetPose`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canCollideWith`, `canControlVehicle`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYRot`, `getZ`, `getZ`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `killedEntity`, `lavaHurt`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `refreshDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startSeenByPlayer`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateInWaterStateAndDoWaterCurrentPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getEyeInFluidType`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getFluidTypeHeight`, `getMaxHeightFluidType`, `getParts`, `getPersistentData`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isAddedToWorld`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `onAddedToWorld`, `onRemovedFromWorld`, `revive`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraftforge.common.extensions.IForgeLivingEntity`: `canDrownInFluidType`, `canSwimInFluidType`, `moveInFluid`, `self`, `sinkInFluid`

## AgeableMob.AgeableMobGroupData

*class* `net.minecraft.world.entity.AgeableMob.AgeableMobGroupData`

Enclosing class: AgeableMob

### Fields
- `private int groupSize`
- `private final boolean shouldSpawnBaby`
- `private final float babySpawnChance`

### Methods
- `public int getGroupSize()`
- `public void increaseGroupSizeByOne()`
- `public boolean isShouldSpawnBaby()`
- `public float getBabySpawnChance()`

## AnimationState

*class* `net.minecraft.world.entity.AnimationState`

### Fields
- `private static final long STOPPED` (= 9223372036854775807L)
- `private long lastTime`
- `private long accumulatedTime`

### Methods
- `public void start(int p_216978_)`
- `public void startIfStopped(int p_216983_)`
- `public void animateWhen(boolean p_252220_,  int p_249486_)`
- `public void stop()`
- `public void ifStarted(Consumer<AnimationState> p_216980_)`
- `public void updateTime(float p_216975_,  float p_216976_)`
- `public long getAccumulatedTime()`
- `public boolean isStarted()`

## AreaEffectCloud

*class* `net.minecraft.world.entity.AreaEffectCloud`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int TIME_BETWEEN_APPLICATIONS` (= 5)
- `private static final EntityDataAccessor<Float> DATA_RADIUS`
- `private static final EntityDataAccessor<Integer> DATA_COLOR`
- `private static final EntityDataAccessor<Boolean> DATA_WAITING`
- `private static final EntityDataAccessor<ParticleOptions> DATA_PARTICLE`
- `private static final float MAX_RADIUS` (= 32.0f)
- `private static final float MINIMAL_RADIUS` (= 0.5f)
- `private static final float DEFAULT_RADIUS` (= 3.0f)
- `public static final float DEFAULT_WIDTH` (= 6.0f)
- `public static final float HEIGHT` (= 0.5f)
- `private static final String TAG_EFFECTS` (= "effects")
- `private Potion potion`
- `private final List<MobEffectInstance> effects`
- `private final Map<Entity,Integer> victims`
- `private int duration`
- `private int waitTime`
- `private int reapplicationDelay`
- `private boolean fixedColor`
- `private int durationOnUse`
- `private float radiusOnUse`
- `private float radiusPerTick`
- `@Nullable private LivingEntity owner`
- `@Nullable private UUID ownerUUID`

### Inherited fields
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `protected void defineSynchedData()`
- `public void setRadius(float p_19713_)`
- `public void refreshDimensions()`
- `public float getRadius()`
- `public void setPotion(Potion p_19723_)`
- `private void updateColor()`
- `public void addEffect(MobEffectInstance p_19717_)`
- `public int getColor()`
- `public void setFixedColor(int p_19715_)`
- `public ParticleOptions getParticle()`
- `public void setParticle(ParticleOptions p_19725_)`
- `protected void setWaiting(boolean p_19731_)`
- `public boolean isWaiting()`
- `public int getDuration()`
- `public void setDuration(int p_19735_)`
- `public void tick()`
- `public float getRadiusOnUse()`
- `public void setRadiusOnUse(float p_19733_)`
- `public float getRadiusPerTick()`
- `public void setRadiusPerTick(float p_19739_)`
- `public int getDurationOnUse()`
- `public void setDurationOnUse(int p_146786_)`
- `public int getWaitTime()`
- `public void setWaitTime(int p_19741_)`
- `public void setOwner(@Nullable  LivingEntity p_19719_)`
- `@Nullable public LivingEntity getOwner()`
- `protected void readAdditionalSaveData(CompoundTag p_19727_)`
- `protected void addAdditionalSaveData(CompoundTag p_19737_)`
- `public void onSyncedDataUpdated(EntityDataAccessor<?> p_19729_)`
- `public Potion getPotion()`
- `public PushReaction getPistonPushReaction()`
- `public EntityDimensions getDimensions(Pose p_19721_)`

### Inherited methods
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `animateHurt`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canCollideWith`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockSpeedFactor`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getBoundingBoxForCulling`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPickResult`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRelativePortalPosition`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSlot`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `hurt`, `ignoreExplosion`, `interact`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPickable`, `isPushable`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpMotion`, `lerpPositionAndRotationStep`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `push`, `reapplyPosition`, `recreateFromPacket`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `shouldShowName`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateInWaterStateAndDoWaterCurrentPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## Attackable

*interface* `net.minecraft.world.entity.Attackable`

### Methods
- `@Nullable LivingEntity getLastAttacker()`

## Class Display.BillboardConstraints

*enum* `net.minecraft.world.entity.Class Display.BillboardConstraints`

Enclosing class: Display

### Fields
- `public static final com.mojang.serialization.Codec<Display.BillboardConstraints> CODEC`
- `public static final IntFunction<Display.BillboardConstraints> BY_ID`
- `private final byte id`
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static Display.BillboardConstraints[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Display.BillboardConstraints valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`
- `byte getId()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Display.TextDisplay.Align

*enum* `net.minecraft.world.entity.Class Display.TextDisplay.Align`

Enclosing class: Display.TextDisplay

### Fields
- `public static final com.mojang.serialization.Codec<Display.TextDisplay.Align> CODEC`
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static Display.TextDisplay.Align[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Display.TextDisplay.Align valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Entity.MovementEmission

*enum* `net.minecraft.world.entity.Class Entity.MovementEmission`

Enclosing class: Entity

### Fields
- `final boolean sounds`
- `final boolean events`

### Methods
- `public static Entity.MovementEmission[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Entity.MovementEmission valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public boolean emitsAnything()`
- `public boolean emitsEvents()`
- `public boolean emitsSounds()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Entity.RemovalReason

*enum* `net.minecraft.world.entity.Class Entity.RemovalReason`

Enclosing class: Entity

### Fields
- `private final boolean destroy`
- `private final boolean save`

### Methods
- `public static Entity.RemovalReason[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Entity.RemovalReason valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public boolean shouldDestroy()`
- `public boolean shouldSave()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class EquipmentSlot

*enum* `net.minecraft.world.entity.Class EquipmentSlot`

### Fields
- `public static final StringRepresentable.EnumCodec<EquipmentSlot> CODEC`
- `private final EquipmentSlot.Type type`
- `private final int index`
- `private final int filterFlag`
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static EquipmentSlot[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static EquipmentSlot valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public EquipmentSlot.Type getType()`
- `public int getIndex()`
- `public int getIndex(int p_147069_)`
- `public int getFilterFlag()`
- `public String getName()`
- `public boolean isArmor()`
- `public String getSerializedName()`
- `public static EquipmentSlot byName(String p_20748_)`
- `public static EquipmentSlot byTypeAndIndex(EquipmentSlot.Type p_20745_,  int p_20746_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class EquipmentSlot.Type

*enum* `net.minecraft.world.entity.Class EquipmentSlot.Type`

Enclosing class: EquipmentSlot

### Methods
- `public static EquipmentSlot.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static EquipmentSlot.Type valueOf(String name)`
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

## Class HumanoidArm

*enum* `net.minecraft.world.entity.Class HumanoidArm`

### Fields
- `public static final com.mojang.serialization.Codec<HumanoidArm> CODEC`
- `public static final IntFunction<HumanoidArm> BY_ID`
- `private final int id`
- `private final String name`
- `private final String translationKey`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static HumanoidArm[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static HumanoidArm valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public HumanoidArm getOpposite()`
- `public int getId()`
- `public String getKey()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraft.util.OptionEnum`: `getCaption`

## Class MobCategory

*enum* `net.minecraft.world.entity.Class MobCategory`

### Fields
- `public static final com.mojang.serialization.Codec<MobCategory> CODEC`
- `private static final Map<String,MobCategory> BY_NAME`
- `private final int max`
- `private final boolean isFriendly`
- `private final boolean isPersistent`
- `private final String name`
- `private final int noDespawnDistance`
- `private final int despawnDistance`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static MobCategory[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static MobCategory valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getName()`
- `public String getSerializedName()`
- `public int getMaxInstancesPerChunk()`
- `public boolean isFriendly()`
- `public boolean isPersistent()`
- `public static MobCategory create(String name,  String id,  int maxNumberOfCreatureIn,  boolean isPeacefulCreatureIn,  boolean isAnimalIn,  int despawnDistance)`
- `@Deprecated public void init()` (deprecated)
  Description copied from interface: IExtensibleEnum
  Called by generated factory code to do any post-constructor setup required by
   the enum. Should not be called manually.
- `public static MobCategory byName(String name)`
- `public int getDespawnDistance()`
- `public int getNoDespawnDistance()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class MobSpawnType

*enum* `net.minecraft.world.entity.Class MobSpawnType`

### Methods
- `public static MobSpawnType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static MobSpawnType valueOf(String name)`
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

## Class MoverType

*enum* `net.minecraft.world.entity.Class MoverType`

### Methods
- `public static MoverType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static MoverType valueOf(String name)`
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

## Class Pose

*enum* `net.minecraft.world.entity.Class Pose`

### Methods
- `public static Pose[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Pose valueOf(String name)`
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

## Class RelativeMovement

*enum* `net.minecraft.world.entity.Class RelativeMovement`

### Fields
- `public static final Set<RelativeMovement> ALL`
- `public static final Set<RelativeMovement> ROTATION`
- `private final int bit`

### Methods
- `public static RelativeMovement[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RelativeMovement valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `private int getMask()`
- `private boolean isSet(int p_265420_)`
- `public static Set<RelativeMovement> unpack(int p_265683_)`
- `public static int pack(Set<RelativeMovement> p_265525_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class SpawnPlacements.Type

*enum* `net.minecraft.world.entity.Class SpawnPlacements.Type`

Enclosing class: SpawnPlacements

### Fields
- `private TriPredicate<LevelReader,BlockPos,EntityType<?>> predicate`

### Methods
- `public static SpawnPlacements.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SpawnPlacements.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static SpawnPlacements.Type create(String name,  TriPredicate<LevelReader,BlockPos,EntityType<? extends Mob>> predicate)`
- `public boolean canSpawnAt(LevelReader world,  BlockPos pos,  EntityType<?> type)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraftforge.common.IExtensibleEnum`: `init`

## Display

*class* `net.minecraft.world.entity.Display`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `public static final int NO_BRIGHTNESS_OVERRIDE` (= -1)
- `private static final EntityDataAccessor<Integer> DATA_TRANSFORMATION_INTERPOLATION_START_DELTA_TICKS_ID`
- `private static final EntityDataAccessor<Integer> DATA_TRANSFORMATION_INTERPOLATION_DURATION_ID`
- `private static final EntityDataAccessor<Integer> DATA_POS_ROT_INTERPOLATION_DURATION_ID`
- `private static final EntityDataAccessor<org.joml.Vector3f> DATA_TRANSLATION_ID`
- `private static final EntityDataAccessor<org.joml.Vector3f> DATA_SCALE_ID`
- `private static final EntityDataAccessor<org.joml.Quaternionf> DATA_LEFT_ROTATION_ID`
- `private static final EntityDataAccessor<org.joml.Quaternionf> DATA_RIGHT_ROTATION_ID`
- `private static final EntityDataAccessor<Byte> DATA_BILLBOARD_RENDER_CONSTRAINTS_ID`
- `private static final EntityDataAccessor<Integer> DATA_BRIGHTNESS_OVERRIDE_ID`
- `private static final EntityDataAccessor<Float> DATA_VIEW_RANGE_ID`
- `private static final EntityDataAccessor<Float> DATA_SHADOW_RADIUS_ID`
- `private static final EntityDataAccessor<Float> DATA_SHADOW_STRENGTH_ID`
- `private static final EntityDataAccessor<Float> DATA_WIDTH_ID`
- `private static final EntityDataAccessor<Float> DATA_HEIGHT_ID`
- `private static final EntityDataAccessor<Integer> DATA_GLOW_COLOR_OVERRIDE_ID`
- `private static final it.unimi.dsi.fastutil.ints.IntSet RENDER_STATE_IDS`
- `private static final float INITIAL_SHADOW_RADIUS` (= 0.0f)
- `private static final float INITIAL_SHADOW_STRENGTH` (= 1.0f)
- `private static final int NO_GLOW_COLOR_OVERRIDE` (= -1)
- `public static final String TAG_POS_ROT_INTERPOLATION_DURATION` (= "teleport_duration")
- `public static final String TAG_TRANSFORMATION_INTERPOLATION_DURATION` (= "interpolation_duration")
- `public static final String TAG_TRANSFORMATION_START_INTERPOLATION` (= "start_interpolation")
- `public static final String TAG_TRANSFORMATION` (= "transformation")
- `public static final String TAG_BILLBOARD` (= "billboard")
- `public static final String TAG_BRIGHTNESS` (= "brightness")
- `public static final String TAG_VIEW_RANGE` (= "view_range")
- `public static final String TAG_SHADOW_RADIUS` (= "shadow_radius")
- `public static final String TAG_SHADOW_STRENGTH` (= "shadow_strength")
- `public static final String TAG_WIDTH` (= "width")
- `public static final String TAG_HEIGHT` (= "height")
- `public static final String TAG_GLOW_COLOR_OVERRIDE` (= "glow_color_override")
- `private long interpolationStartClientTick`
- `private int interpolationDuration`
- `private float lastProgress`
- `private AABB cullingBoundingBox`
- `protected boolean updateRenderState`
- `private boolean updateStartTick`
- `private boolean updateInterpolationDuration`
- `@Nullable private Display.RenderState renderState`
- `@Nullable private Display.PosRotInterpolationTarget posRotInterpolationTarget`

### Inherited fields
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `public void onSyncedDataUpdated(EntityDataAccessor<?> p_270275_)`
- `private static Transformation createTransformation(SynchedEntityData p_270278_)`
- `public void tick()`
- `protected abstract void updateRenderSubState(boolean p_277603_,  float p_277810_)`
- `protected void defineSynchedData()`
- `protected void readAdditionalSaveData(CompoundTag p_270854_)`
- `private void setTransformation(Transformation p_270186_)`
- `protected void addAdditionalSaveData(CompoundTag p_270779_)`
- `public void lerpTo(double p_297677_,  double p_301293_,  double p_301384_,  float p_300635_,  float p_299108_,  int p_299659_)`
- `public double lerpTargetX()`
- `public double lerpTargetY()`
- `public double lerpTargetZ()`
- `public float lerpTargetXRot()`
- `public float lerpTargetYRot()`
- `public AABB getBoundingBoxForCulling()`
- `public PushReaction getPistonPushReaction()`
- `public boolean isIgnoringBlockTriggers()`
- `@Nullable public Display.RenderState renderState()`
- `private void setTransformationInterpolationDuration(int p_297488_)`
- `private int getTransformationInterpolationDuration()`
- `private void setTransformationInterpolationDelay(int p_300640_)`
- `private int getTransformationInterpolationDelay()`
- `private void setPosRotInterpolationDuration(int p_300107_)`
- `private int getPosRotInterpolationDuration()`
- `private void setBillboardConstraints(Display.BillboardConstraints p_270345_)`
- `private Display.BillboardConstraints getBillboardConstraints()`
- `private void setBrightnessOverride(@Nullable  Brightness p_270461_)`
- `@Nullable private Brightness getBrightnessOverride()`
- `private int getPackedBrightnessOverride()`
- `private void setViewRange(float p_270907_)`
- `private float getViewRange()`
- `private void setShadowRadius(float p_270122_)`
- `private float getShadowRadius()`
- `private void setShadowStrength(float p_270866_)`
- `private float getShadowStrength()`
- `private void setWidth(float p_270741_)`
- `private float getWidth()`
- `private void setHeight(float p_270716_)`
- `private int getGlowColorOverride()`
- `private void setGlowColorOverride(int p_270784_)`
- `public float calculateInterpolationProgress(float p_272675_)`
- `private float getHeight()`
- `public void setPos(double p_270091_,  double p_270983_,  double p_270419_)`
- `private void updateCulling()`
- `public boolean shouldRenderAtSqrDistance(double p_270991_)`
- `public int getTeamColor()`
- `private Display.RenderState createFreshRenderState()`
- `private Display.RenderState createInterpolatedRenderState(Display.RenderState p_277365_,  float p_277948_)`

### Inherited methods
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `animateHurt`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canCollideWith`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockSpeedFactor`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPickResult`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRelativePortalPosition`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSlot`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `hurt`, `ignoreExplosion`, `interact`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPickable`, `isPushable`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `push`, `reapplyPosition`, `recreateFromPacket`, `refreshDimensions`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldShowName`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateInWaterStateAndDoWaterCurrentPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## Display.BlockDisplay

*class* `net.minecraft.world.entity.Display.BlockDisplay`

Enclosing class: Display

### Fields
- `public static final String TAG_BLOCK_STATE` (= "block_state")
- `private static final EntityDataAccessor<BlockState> DATA_BLOCK_STATE_ID`
- `@Nullable private Display.BlockDisplay.BlockRenderState blockRenderState`

### Inherited fields
- from `net.minecraft.world.entity.Display`: `LOGGER`, `NO_BRIGHTNESS_OVERRIDE`, `TAG_BILLBOARD`, `TAG_BRIGHTNESS`, `TAG_GLOW_COLOR_OVERRIDE`, `TAG_HEIGHT`, `TAG_POS_ROT_INTERPOLATION_DURATION`, `TAG_SHADOW_RADIUS`, `TAG_SHADOW_STRENGTH`, `TAG_TRANSFORMATION`, `TAG_TRANSFORMATION_INTERPOLATION_DURATION`, `TAG_TRANSFORMATION_START_INTERPOLATION`, `TAG_VIEW_RANGE`, `TAG_WIDTH`, `updateRenderState`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `protected void defineSynchedData()`
- `public void onSyncedDataUpdated(EntityDataAccessor<?> p_277476_)`
- `private BlockState getBlockState()`
- `private void setBlockState(BlockState p_270267_)`
- `protected void readAdditionalSaveData(CompoundTag p_270139_)`
- `protected void addAdditionalSaveData(CompoundTag p_270469_)`
- `@Nullable public Display.BlockDisplay.BlockRenderState blockRenderState()`
- `protected void updateRenderSubState(boolean p_277802_,  float p_277688_)`

### Inherited methods
- from `net.minecraft.world.entity.Display`: `calculateInterpolationProgress`, `getBoundingBoxForCulling`, `getPistonPushReaction`, `getTeamColor`, `isIgnoringBlockTriggers`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `renderState`, `setPos`, `shouldRenderAtSqrDistance`, `tick`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `animateHurt`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canCollideWith`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockSpeedFactor`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPickResult`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRelativePortalPosition`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSlot`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `hurt`, `ignoreExplosion`, `interact`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPickable`, `isPushable`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `push`, `reapplyPosition`, `recreateFromPacket`, `refreshDimensions`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldShowName`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateInWaterStateAndDoWaterCurrentPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## Display.BlockDisplay.BlockRenderState

*record* `net.minecraft.world.entity.Display.BlockDisplay.BlockRenderState`

Enclosing class: Display.BlockDisplay

### Fields
- `private final BlockState blockState`
  The field for the blockState record component.

### Methods
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
- `public BlockState blockState()`
  Returns the value of the blockState record component.
  - returns: the value of the blockState record component

## Display.ColorInterpolator

*record* `net.minecraft.world.entity.Display.ColorInterpolator`

Enclosing class: Display

### Fields
- `private final int previous`
  The field for the previous record component.
- `private final int current`
  The field for the current record component.

### Methods
- `public int get(float p_278012_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int previous()`
  Returns the value of the previous record component.
  - returns: the value of the previous record component
- `public int current()`
  Returns the value of the current record component.
  - returns: the value of the current record component

## Display.FloatInterpolator

*interface* `net.minecraft.world.entity.Display.FloatInterpolator`

Enclosing class: Display

### Methods
- `static Display.FloatInterpolator constant(float p_277894_)`
- `float get(float p_270330_)`

## Display.GenericInterpolator

*interface* `net.minecraft.world.entity.Display.GenericInterpolator`

Enclosing class: Display

### Methods
- `static <T> Display.GenericInterpolator<T> constant(T p_277718_)`
- `T get(float p_270270_)`

## Display.IntInterpolator

*interface* `net.minecraft.world.entity.Display.IntInterpolator`

Enclosing class: Display

### Methods
- `static Display.IntInterpolator constant(int p_277348_)`
- `int get(float p_270183_)`

## Display.ItemDisplay

*class* `net.minecraft.world.entity.Display.ItemDisplay`

Enclosing class: Display

### Fields
- `private static final String TAG_ITEM` (= "item")
- `private static final String TAG_ITEM_DISPLAY` (= "item_display")
- `private static final EntityDataAccessor<ItemStack> DATA_ITEM_STACK_ID`
- `private static final EntityDataAccessor<Byte> DATA_ITEM_DISPLAY_ID`
- `private final SlotAccess slot`
- `@Nullable private Display.ItemDisplay.ItemRenderState itemRenderState`

### Inherited fields
- from `net.minecraft.world.entity.Display`: `LOGGER`, `NO_BRIGHTNESS_OVERRIDE`, `TAG_BILLBOARD`, `TAG_BRIGHTNESS`, `TAG_GLOW_COLOR_OVERRIDE`, `TAG_HEIGHT`, `TAG_POS_ROT_INTERPOLATION_DURATION`, `TAG_SHADOW_RADIUS`, `TAG_SHADOW_STRENGTH`, `TAG_TRANSFORMATION`, `TAG_TRANSFORMATION_INTERPOLATION_DURATION`, `TAG_TRANSFORMATION_START_INTERPOLATION`, `TAG_VIEW_RANGE`, `TAG_WIDTH`, `updateRenderState`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `protected void defineSynchedData()`
- `public void onSyncedDataUpdated(EntityDataAccessor<?> p_277793_)`
- `ItemStack getItemStack()`
- `void setItemStack(ItemStack p_270310_)`
- `private void setItemTransform(ItemDisplayContext p_270370_)`
- `private ItemDisplayContext getItemTransform()`
- `protected void readAdditionalSaveData(CompoundTag p_270713_)`
- `protected void addAdditionalSaveData(CompoundTag p_270669_)`
- `public SlotAccess getSlot(int p_270599_)`
- `@Nullable public Display.ItemDisplay.ItemRenderState itemRenderState()`
- `protected void updateRenderSubState(boolean p_277976_,  float p_277708_)`

### Inherited methods
- from `net.minecraft.world.entity.Display`: `calculateInterpolationProgress`, `getBoundingBoxForCulling`, `getPistonPushReaction`, `getTeamColor`, `isIgnoringBlockTriggers`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `renderState`, `setPos`, `shouldRenderAtSqrDistance`, `tick`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `animateHurt`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canCollideWith`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockSpeedFactor`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPickResult`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRelativePortalPosition`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `hurt`, `ignoreExplosion`, `interact`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPickable`, `isPushable`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `push`, `reapplyPosition`, `recreateFromPacket`, `refreshDimensions`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldShowName`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateInWaterStateAndDoWaterCurrentPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## Display.ItemDisplay.ItemRenderState

*record* `net.minecraft.world.entity.Display.ItemDisplay.ItemRenderState`

Enclosing class: Display.ItemDisplay

### Fields
- `private final ItemStack itemStack`
  The field for the itemStack record component.
- `private final ItemDisplayContext itemTransform`
  The field for the itemTransform record component.

### Methods
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
- `public ItemStack itemStack()`
  Returns the value of the itemStack record component.
  - returns: the value of the itemStack record component
- `public ItemDisplayContext itemTransform()`
  Returns the value of the itemTransform record component.
  - returns: the value of the itemTransform record component

## Display.LinearFloatInterpolator

*record* `net.minecraft.world.entity.Display.LinearFloatInterpolator`

Enclosing class: Display

### Fields
- `private final float previous`
  The field for the previous record component.
- `private final float current`
  The field for the current record component.

### Methods
- `public float get(float p_277511_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public float previous()`
  Returns the value of the previous record component.
  - returns: the value of the previous record component
- `public float current()`
  Returns the value of the current record component.
  - returns: the value of the current record component

## Display.LinearIntInterpolator

*record* `net.minecraft.world.entity.Display.LinearIntInterpolator`

Enclosing class: Display

### Fields
- `private final int previous`
  The field for the previous record component.
- `private final int current`
  The field for the current record component.

### Methods
- `public int get(float p_277960_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int previous()`
  Returns the value of the previous record component.
  - returns: the value of the previous record component
- `public int current()`
  Returns the value of the current record component.
  - returns: the value of the current record component

## Display.PosRotInterpolationTarget

*class* `net.minecraft.world.entity.Display.PosRotInterpolationTarget`

Enclosing class: Display

### Fields
- `int steps`
- `final double targetX`
- `final double targetY`
- `final double targetZ`
- `final double targetYRot`
- `final double targetXRot`

### Methods
- `void applyTargetPosAndRot(Entity p_297540_)`
- `void applyLerpStep(Entity p_300902_)`

## Display.RenderState

*record* `net.minecraft.world.entity.Display.RenderState`

Enclosing class: Display

### Fields
- `private final Display.GenericInterpolator<Transformation> transformation`
  The field for the transformation record component.
- `private final Display.BillboardConstraints billboardConstraints`
  The field for the billboardConstraints record component.
- `private final int brightnessOverride`
  The field for the brightnessOverride record component.
- `private final Display.FloatInterpolator shadowRadius`
  The field for the shadowRadius record component.
- `private final Display.FloatInterpolator shadowStrength`
  The field for the shadowStrength record component.
- `private final int glowColorOverride`
  The field for the glowColorOverride record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public Display.GenericInterpolator<Transformation> transformation()`
  Returns the value of the transformation record component.
  - returns: the value of the transformation record component
- `public Display.BillboardConstraints billboardConstraints()`
  Returns the value of the billboardConstraints record component.
  - returns: the value of the billboardConstraints record component
- `public int brightnessOverride()`
  Returns the value of the brightnessOverride record component.
  - returns: the value of the brightnessOverride record component
- `public Display.FloatInterpolator shadowRadius()`
  Returns the value of the shadowRadius record component.
  - returns: the value of the shadowRadius record component
- `public Display.FloatInterpolator shadowStrength()`
  Returns the value of the shadowStrength record component.
  - returns: the value of the shadowStrength record component
- `public int glowColorOverride()`
  Returns the value of the glowColorOverride record component.
  - returns: the value of the glowColorOverride record component

## Display.TextDisplay

*class* `net.minecraft.world.entity.Display.TextDisplay`

Enclosing class: Display

### Fields
- `public static final String TAG_TEXT` (= "text")
- `private static final String TAG_LINE_WIDTH` (= "line_width")
- `private static final String TAG_TEXT_OPACITY` (= "text_opacity")
- `private static final String TAG_BACKGROUND_COLOR` (= "background")
- `private static final String TAG_SHADOW` (= "shadow")
- `private static final String TAG_SEE_THROUGH` (= "see_through")
- `private static final String TAG_USE_DEFAULT_BACKGROUND` (= "default_background")
- `private static final String TAG_ALIGNMENT` (= "alignment")
- `public static final byte FLAG_SHADOW` (= 0x1)
- `public static final byte FLAG_SEE_THROUGH` (= 0x2)
- `public static final byte FLAG_USE_DEFAULT_BACKGROUND` (= 0x4)
- `public static final byte FLAG_ALIGN_LEFT` (= 0x8)
- `public static final byte FLAG_ALIGN_RIGHT` (= 0x10)
- `private static final byte INITIAL_TEXT_OPACITY` (= 0xff)
- `public static final int INITIAL_BACKGROUND` (= 1073741824)
- `private static final EntityDataAccessor<Component> DATA_TEXT_ID`
- `private static final EntityDataAccessor<Integer> DATA_LINE_WIDTH_ID`
- `private static final EntityDataAccessor<Integer> DATA_BACKGROUND_COLOR_ID`
- `private static final EntityDataAccessor<Byte> DATA_TEXT_OPACITY_ID`
- `private static final EntityDataAccessor<Byte> DATA_STYLE_FLAGS_ID`
- `private static final it.unimi.dsi.fastutil.ints.IntSet TEXT_RENDER_STATE_IDS`
- `@Nullable private Display.TextDisplay.CachedInfo clientDisplayCache`
- `@Nullable private Display.TextDisplay.TextRenderState textRenderState`

### Inherited fields
- from `net.minecraft.world.entity.Display`: `LOGGER`, `NO_BRIGHTNESS_OVERRIDE`, `TAG_BILLBOARD`, `TAG_BRIGHTNESS`, `TAG_GLOW_COLOR_OVERRIDE`, `TAG_HEIGHT`, `TAG_POS_ROT_INTERPOLATION_DURATION`, `TAG_SHADOW_RADIUS`, `TAG_SHADOW_STRENGTH`, `TAG_TRANSFORMATION`, `TAG_TRANSFORMATION_INTERPOLATION_DURATION`, `TAG_TRANSFORMATION_START_INTERPOLATION`, `TAG_VIEW_RANGE`, `TAG_WIDTH`, `updateRenderState`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `protected void defineSynchedData()`
- `public void onSyncedDataUpdated(EntityDataAccessor<?> p_270797_)`
- `private Component getText()`
- `private void setText(Component p_270902_)`
- `private int getLineWidth()`
- `private void setLineWidth(int p_270545_)`
- `private byte getTextOpacity()`
- `private void setTextOpacity(byte p_270583_)`
- `private int getBackgroundColor()`
- `private void setBackgroundColor(int p_270241_)`
- `private byte getFlags()`
- `private void setFlags(byte p_270855_)`
- `private static byte loadFlag(byte p_270219_,  CompoundTag p_270994_,  String p_270958_,  byte p_270701_)`
- `protected void readAdditionalSaveData(CompoundTag p_270714_)`
- `private static void storeFlag(byte p_270879_,  CompoundTag p_270177_,  String p_270294_,  byte p_270853_)`
- `protected void addAdditionalSaveData(CompoundTag p_270268_)`
- `protected void updateRenderSubState(boolean p_277565_,  float p_277967_)`
- `@Nullable public Display.TextDisplay.TextRenderState textRenderState()`
- `private Display.TextDisplay.TextRenderState createFreshTextRenderState()`
- `private Display.TextDisplay.TextRenderState createInterpolatedTextRenderState(Display.TextDisplay.TextRenderState p_278000_,  float p_277646_)`
- `public Display.TextDisplay.CachedInfo cacheDisplay(Display.TextDisplay.LineSplitter p_270682_)`
- `public static Display.TextDisplay.Align getAlign(byte p_270911_)`

### Inherited methods
- from `net.minecraft.world.entity.Display`: `calculateInterpolationProgress`, `getBoundingBoxForCulling`, `getPistonPushReaction`, `getTeamColor`, `isIgnoringBlockTriggers`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `renderState`, `setPos`, `shouldRenderAtSqrDistance`, `tick`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `animateHurt`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canCollideWith`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockSpeedFactor`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPickResult`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRelativePortalPosition`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSlot`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `hurt`, `ignoreExplosion`, `interact`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPickable`, `isPushable`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `push`, `reapplyPosition`, `recreateFromPacket`, `refreshDimensions`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldShowName`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateInWaterStateAndDoWaterCurrentPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## Display.TextDisplay.CachedInfo

*record* `net.minecraft.world.entity.Display.TextDisplay.CachedInfo`

Enclosing class: Display.TextDisplay

### Fields
- `private final List<Display.TextDisplay.CachedLine> lines`
  The field for the lines record component.
- `private final int width`
  The field for the width record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public List<Display.TextDisplay.CachedLine> lines()`
  Returns the value of the lines record component.
  - returns: the value of the lines record component
- `public int width()`
  Returns the value of the width record component.
  - returns: the value of the width record component

## Display.TextDisplay.CachedLine

*record* `net.minecraft.world.entity.Display.TextDisplay.CachedLine`

Enclosing class: Display.TextDisplay

### Fields
- `private final FormattedCharSequence contents`
  The field for the contents record component.
- `private final int width`
  The field for the width record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public FormattedCharSequence contents()`
  Returns the value of the contents record component.
  - returns: the value of the contents record component
- `public int width()`
  Returns the value of the width record component.
  - returns: the value of the width record component

## Display.TextDisplay.LineSplitter

*interface* `net.minecraft.world.entity.Display.TextDisplay.LineSplitter`

Enclosing class: Display.TextDisplay

### Methods
- `Display.TextDisplay.CachedInfo split(Component p_270086_,  int p_270526_)`

## Display.TextDisplay.TextRenderState

*record* `net.minecraft.world.entity.Display.TextDisplay.TextRenderState`

Enclosing class: Display.TextDisplay

### Fields
- `private final Component text`
  The field for the text record component.
- `private final int lineWidth`
  The field for the lineWidth record component.
- `private final Display.IntInterpolator textOpacity`
  The field for the textOpacity record component.
- `private final Display.IntInterpolator backgroundColor`
  The field for the backgroundColor record component.
- `private final byte flags`
  The field for the flags record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public Component text()`
  Returns the value of the text record component.
  - returns: the value of the text record component
- `public int lineWidth()`
  Returns the value of the lineWidth record component.
  - returns: the value of the lineWidth record component
- `public Display.IntInterpolator textOpacity()`
  Returns the value of the textOpacity record component.
  - returns: the value of the textOpacity record component
- `public Display.IntInterpolator backgroundColor()`
  Returns the value of the backgroundColor record component.
  - returns: the value of the backgroundColor record component
- `public byte flags()`
  Returns the value of the flags record component.
  - returns: the value of the flags record component

## Display.TransformationInterpolator

*record* `net.minecraft.world.entity.Display.TransformationInterpolator`

Enclosing class: Display

### Fields
- `private final Transformation previous`
  The field for the previous record component.
- `private final Transformation current`
  The field for the current record component.

### Methods
- `public Transformation get(float p_278027_)`
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
- `public Transformation previous()`
  Returns the value of the previous record component.
  - returns: the value of the previous record component
- `public Transformation current()`
  Returns the value of the current record component.
  - returns: the value of the current record component

## Entity

*class* `net.minecraft.world.entity.Entity`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final String ID_TAG` (= "id")
- `public static final String PASSENGERS_TAG` (= "Passengers")
- `protected static final AtomicInteger ENTITY_COUNTER`
- `private static final List<ItemStack> EMPTY_LIST`
- `public static final int BOARDING_COOLDOWN` (= 60)
- `public static final int TOTAL_AIR_SUPPLY` (= 300)
- `public static final int MAX_ENTITY_TAG_COUNT` (= 1024)
- `public static final float DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2` (= 0.20000000298023224f)
- `public static final double DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5` (= 0.500001)
- `public static final double DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0` (= 0.999999)
- `public static final float BREATHING_DISTANCE_BELOW_EYES` (= 0.1111111119389534f)
- `public static final int BASE_TICKS_REQUIRED_TO_FREEZE` (= 140)
- `public static final int FREEZE_HURT_FREQUENCY` (= 40)
- `private static final AABB INITIAL_AABB`
- `private static final double WATER_FLOW_SCALE` (= 0.014)
- `private static final double LAVA_FAST_FLOW_SCALE` (= 0.007)
- `private static final double LAVA_SLOW_FLOW_SCALE` (= 0.0023333333333333335)
- `public static final String UUID_TAG` (= "UUID")
- `private static double viewScale`
- `@Deprecated private final EntityType<?> type` (deprecated)
- `private int id`
- `public boolean blocksBuilding`
- `private com.google.common.collect.ImmutableList<Entity> passengers`
- `protected int boardingCooldown`
- `@Nullable private Entity vehicle`
- `private Level level`
- `public double xo`
- `public double yo`
- `public double zo`
- `private Vec3 position`
- `private BlockPos blockPosition`
- `private ChunkPos chunkPosition`
- `private Vec3 deltaMovement`
- `private float yRot`
- `private float xRot`
- `public float yRotO`
- `public float xRotO`
- `private AABB bb`
- `private boolean onGround`
- `public boolean horizontalCollision`
- `public boolean verticalCollision`
- `public boolean verticalCollisionBelow`
- `public boolean minorHorizontalCollision`
- `public boolean hurtMarked`
- `protected Vec3 stuckSpeedMultiplier`
- `@Nullable private Entity.RemovalReason removalReason`
- `public static final float DEFAULT_BB_WIDTH` (= 0.6000000238418579f)
- `public static final float DEFAULT_BB_HEIGHT` (= 1.7999999523162842f)
- `public float walkDistO`
- `public float walkDist`
- `public float moveDist`
- `public float flyDist`
- `public float fallDistance`
- `private float nextStep`
- `public double xOld`
- `public double yOld`
- `public double zOld`
- `private float maxUpStep`
- `public boolean noPhysics`
- `protected final RandomSource random`
- `public int tickCount`
- `private int remainingFireTicks`
- `protected boolean wasTouchingWater`
- `@Deprecated protected it.unimi.dsi.fastutil.objects.Object2DoubleMap<TagKey<Fluid>> fluidHeight` (deprecated)
- `protected boolean wasEyeInWater`
- `@Deprecated private final Set<TagKey<Fluid>> fluidOnEyes` (deprecated)
- `public int invulnerableTime`
- `protected boolean firstTick`
- `protected final SynchedEntityData entityData`
- `protected static final EntityDataAccessor<Byte> DATA_SHARED_FLAGS_ID`
- `protected static final int FLAG_ONFIRE` (= 0)
- `private static final int FLAG_SHIFT_KEY_DOWN` (= 1)
- `private static final int FLAG_SPRINTING` (= 3)
- `private static final int FLAG_SWIMMING` (= 4)
- `private static final int FLAG_INVISIBLE` (= 5)
- `protected static final int FLAG_GLOWING` (= 6)
- `protected static final int FLAG_FALL_FLYING` (= 7)
- `private static final EntityDataAccessor<Integer> DATA_AIR_SUPPLY_ID`
- `private static final EntityDataAccessor<Optional<Component>> DATA_CUSTOM_NAME`
- `private static final EntityDataAccessor<Boolean> DATA_CUSTOM_NAME_VISIBLE`
- `private static final EntityDataAccessor<Boolean> DATA_SILENT`
- `private static final EntityDataAccessor<Boolean> DATA_NO_GRAVITY`
- `protected static final EntityDataAccessor<Pose> DATA_POSE`
- `private static final EntityDataAccessor<Integer> DATA_TICKS_FROZEN`
- `private EntityInLevelCallback levelCallback`
- `private final VecDeltaCodec packetPositionCodec`
- `public boolean noCulling`
- `public boolean hasImpulse`
- `private int portalCooldown`
- `protected boolean isInsidePortal`
- `protected int portalTime`
- `protected BlockPos portalEntrancePos`
- `private boolean invulnerable`
- `protected UUID uuid`
- `protected String stringUUID`
- `private boolean hasGlowingTag`
- `private final Set<String> tags`
- `private final double[] pistonDeltas`
- `private long pistonDeltasGameTime`
- `private EntityDimensions dimensions`
- `private float eyeHeight`
- `public boolean isInPowderSnow`
- `public boolean wasInPowderSnow`
- `public boolean wasOnFire`
- `public Optional<BlockPos> mainSupportingBlockPos`
- `private boolean onGroundNoBlocks`
- `private float crystalSoundIntensity`
- `private int lastCrystalSoundPlayTick`
- `private boolean hasVisualFire`
- `@Nullable private BlockState feetBlockState`
- `private boolean hasExtraSpawnData`
- `private boolean canUpdate`
- `private Collection<ItemEntity> captureDrops`
- `private CompoundTag persistentData`
- `private boolean isAddedToWorld`
  Internal use for keeping track of entities that are tracked by a world, to
   allow guarantees that entity position changes will force a chunk load, avoiding
   potential issues with entity desyncing and bad chunk data.
- `protected it.unimi.dsi.fastutil.objects.Object2DoubleMap<FluidType> forgeFluidTypeHeight`
- `private FluidType forgeFluidTypeOnEyes`

### Inherited fields
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `public boolean isColliding(BlockPos p_20040_,  BlockState p_20041_)`
- `public int getTeamColor()`
- `public boolean isSpectator()`
- `public final void unRide()`
- `public void syncPacketPositionCodec(double p_217007_,  double p_217008_,  double p_217009_)`
- `public VecDeltaCodec getPositionCodec()`
- `public EntityType<?> getType()`
- `public int getId()`
- `public void setId(int p_20235_)`
- `public Set<String> getTags()`
- `public boolean addTag(String p_20050_)`
- `public boolean removeTag(String p_20138_)`
- `public void kill()`
- `public final void discard()`
- `protected abstract void defineSynchedData()`
- `public SynchedEntityData getEntityData()`
- `public boolean equals(Object p_20245_)`
- `public int hashCode()`
- `public void remove(Entity.RemovalReason p_146834_)`
- `public void onClientRemoval()`
- `public void setPose(Pose p_20125_)`
- `public Pose getPose()`
- `public boolean hasPose(Pose p_217004_)`
- `public boolean closerThan(Entity p_19951_,  double p_19952_)`
- `public boolean closerThan(Entity p_216993_,  double p_216994_,  double p_216995_)`
- `protected void setRot(float p_19916_,  float p_19917_)`
- `public final void setPos(Vec3 p_146885_)`
- `public void setPos(double p_20210_,  double p_20211_,  double p_20212_)`
- `protected AABB makeBoundingBox()`
- `protected void reapplyPosition()`
- `public void turn(double p_19885_,  double p_19886_)`
- `public void tick()`
- `public void baseTick()`
- `public void setSharedFlagOnFire(boolean p_146869_)`
- `public void checkBelowWorld()`
- `public void setPortalCooldown()`
- `public void setPortalCooldown(int p_287760_)`
- `public int getPortalCooldown()`
- `public boolean isOnPortalCooldown()`
- `protected void processPortalCooldown()`
- `public int getPortalWaitTime()`
- `public void lavaHurt()`
- `public void setSecondsOnFire(int p_20255_)`
- `public void setRemainingFireTicks(int p_20269_)`
- `public int getRemainingFireTicks()`
- `public void clearFire()`
- `protected void onBelowWorld()`
- `public boolean isFree(double p_20230_,  double p_20231_,  double p_20232_)`
- `private boolean isFree(AABB p_20132_)`
- `public void setOnGround(boolean p_20181_)`
- `public void setOnGroundWithKnownMovement(boolean p_289661_,  Vec3 p_289653_)`
- `public boolean isSupportedBy(BlockPos p_287613_)`
- `protected void checkSupportingBlock(boolean p_289694_,  @Nullable  Vec3 p_289680_)`
- `public boolean onGround()`
- `public void move(MoverType p_19973_,  Vec3 p_19974_)`
- `private boolean isStateClimbable(BlockState p_286733_)`
- `private boolean vibrationAndSoundEffectsFromBlock(BlockPos p_286221_,  BlockState p_286549_,  boolean p_286708_,  boolean p_286543_,  Vec3 p_286448_)`
- `protected boolean isHorizontalCollisionMinor(Vec3 p_196625_)`
- `protected void tryCheckInsideBlocks()`
- `protected void playEntityOnFireExtinguishedSound()`
- `public void extinguishFire()`
- `protected void processFlappingMovement()`
- `@Deprecated public BlockPos getOnPosLegacy()` (deprecated)
- `protected BlockPos getBlockPosBelowThatAffectsMyMovement()`
- `public BlockPos getOnPos()`
- `protected BlockPos getOnPos(float p_216987_)`
- `protected float getBlockJumpFactor()`
- `protected float getBlockSpeedFactor()`
- `protected Vec3 maybeBackOffFromEdge(Vec3 p_20019_,  MoverType p_20020_)`
- `protected Vec3 limitPistonMovement(Vec3 p_20134_)`
- `private double applyPistonMovementRestriction(Direction.Axis p_20043_,  double p_20044_)`
- `private Vec3 collide(Vec3 p_20273_)`
- `public static Vec3 collideBoundingBox(@Nullable  Entity p_198895_,  Vec3 p_198896_,  AABB p_198897_,  Level p_198898_,  List<VoxelShape> p_198899_)`
- `private static Vec3 collideWithShapes(Vec3 p_198901_,  AABB p_198902_,  List<VoxelShape> p_198903_)`
- `protected float nextStep()`
- `protected SoundEvent getSwimSound()`
- `protected SoundEvent getSwimSplashSound()`
- `protected SoundEvent getSwimHighSpeedSplashSound()`
- `protected void checkInsideBlocks()`
- `protected void onInsideBlock(BlockState p_20005_)`
- `public void gameEvent(GameEvent p_146853_,  @Nullable  Entity p_146854_)`
- `public void gameEvent(GameEvent p_146851_)`
- `private void walkingStepSound(BlockPos p_281828_,  BlockState p_282118_)`
- `protected void waterSwimSound()`
- `protected BlockPos getPrimaryStepSoundBlockPos(BlockPos p_278049_)`
- `protected void playCombinationStepSounds(BlockState p_277472_,  BlockState p_277630_,  BlockPos primaryPos,  BlockPos secondaryPos)`
- `protected void playMuffledStepSound(BlockState p_283110_,  BlockPos pos)`
- `protected void playStepSound(BlockPos p_20135_,  BlockState p_20136_)`
- `private boolean shouldPlayAmethystStepSound(BlockState p_278069_)`
- `private void playAmethystStepSound()`
- `protected void playSwimSound(float p_20213_)`
- `protected void onFlap()`
- `protected boolean isFlapping()`
- `public void playSound(SoundEvent p_19938_,  float p_19939_,  float p_19940_)`
- `public void playSound(SoundEvent p_216991_)`
- `public boolean isSilent()`
- `public void setSilent(boolean p_20226_)`
- `public boolean isNoGravity()`
- `public void setNoGravity(boolean p_20243_)`
- `protected Entity.MovementEmission getMovementEmission()`
- `public boolean dampensVibrations()`
- `protected void checkFallDamage(double p_19911_,  boolean p_19912_,  BlockState p_19913_,  BlockPos p_19914_)`
- `public boolean fireImmune()`
- `public boolean causeFallDamage(float p_146828_,  float p_146829_,  DamageSource p_146830_)`
- `public boolean isInWater()`
- `private boolean isInRain()`
- `private boolean isInBubbleColumn()`
- `public boolean isInWaterOrRain()`
- `public boolean isInWaterRainOrBubble()`
- `public boolean isInWaterOrBubble()`
- `public boolean isInLiquid()`
- `public boolean isUnderWater()`
- `public void updateSwimming()`
- `protected boolean updateInWaterStateAndDoFluidPushing()`
- `void updateInWaterStateAndDoWaterCurrentPushing()`
- `private void updateFluidOnEyes()`
- `protected void doWaterSplashEffect()`
- `@Deprecated protected BlockState getBlockStateOnLegacy()` (deprecated)
- `public BlockState getBlockStateOn()`
- `public boolean canSpawnSprintParticle()`
- `protected void spawnSprintParticle()`
- `@Deprecated public boolean isEyeInFluid(TagKey<Fluid> p_204030_)` (deprecated)
- `public boolean isInLava()`
- `public void moveRelative(float p_19921_,  Vec3 p_19922_)`
- `private static Vec3 getInputVector(Vec3 p_20016_,  float p_20017_,  float p_20018_)`
- `@Deprecated public float getLightLevelDependentMagicValue()` (deprecated)
- `public void absMoveTo(double p_19891_,  double p_19892_,  double p_19893_,  float p_19894_,  float p_19895_)`
- `public void absMoveTo(double p_20249_,  double p_20250_,  double p_20251_)`
- `public void moveTo(Vec3 p_20220_)`
- `public void moveTo(double p_20105_,  double p_20106_,  double p_20107_)`
- `public void moveTo(BlockPos p_20036_,  float p_20037_,  float p_20038_)`
- `public void moveTo(double p_20108_,  double p_20109_,  double p_20110_,  float p_20111_,  float p_20112_)`
- `public final void setOldPosAndRot()`
- `public float distanceTo(Entity p_20271_)`
- `public double distanceToSqr(double p_20276_,  double p_20277_,  double p_20278_)`
- `public double distanceToSqr(Entity p_20281_)`
- `public double distanceToSqr(Vec3 p_20239_)`
- `public void playerTouch(Player p_20081_)`
- `public void push(Entity p_20293_)`
- `public void push(double p_20286_,  double p_20287_,  double p_20288_)`
- `protected void markHurt()`
- `public boolean hurt(DamageSource p_19946_,  float p_19947_)`
- `public final Vec3 getViewVector(float p_20253_)`
- `public float getViewXRot(float p_20268_)`
- `public float getViewYRot(float p_20279_)`
- `protected final Vec3 calculateViewVector(float p_20172_,  float p_20173_)`
- `public final Vec3 getUpVector(float p_20290_)`
- `protected final Vec3 calculateUpVector(float p_20215_,  float p_20216_)`
- `public final Vec3 getEyePosition()`
- `public final Vec3 getEyePosition(float p_20300_)`
- `public Vec3 getLightProbePosition(float p_20309_)`
- `public final Vec3 getPosition(float p_20319_)`
- `public HitResult pick(double p_19908_,  float p_19909_,  boolean p_19910_)`
- `public boolean canBeHitByProjectile()`
- `public boolean isPickable()`
- `public boolean isPushable()`
- `public void awardKillScore(Entity p_19953_,  int p_19954_,  DamageSource p_19955_)`
- `public boolean shouldRender(double p_20296_,  double p_20297_,  double p_20298_)`
- `public boolean shouldRenderAtSqrDistance(double p_19883_)`
- `public boolean saveAsPassenger(CompoundTag p_20087_)`
- `public boolean save(CompoundTag p_20224_)`
- `public CompoundTag saveWithoutId(CompoundTag p_20241_)`
- `public void load(CompoundTag p_20259_)`
- `protected boolean repositionEntityAfterLoad()`
- `@Nullable public final String getEncodeId()`
- `protected abstract void readAdditionalSaveData(CompoundTag p_20052_)`
- `protected abstract void addAdditionalSaveData(CompoundTag p_20139_)`
- `protected ListTag newDoubleList(double... p_20064_)`
- `protected ListTag newFloatList(float... p_20066_)`
- `@Nullable public ItemEntity spawnAtLocation(ItemLike p_19999_)`
- `@Nullable public ItemEntity spawnAtLocation(ItemLike p_20001_,  int p_20002_)`
- `@Nullable public ItemEntity spawnAtLocation(ItemStack p_19984_)`
- `@Nullable public ItemEntity spawnAtLocation(ItemStack p_19985_,  float p_19986_)`
- `public boolean isAlive()`
- `public boolean isInWall()`
- `public InteractionResult interact(Player p_19978_,  InteractionHand p_19979_)`
- `public boolean canCollideWith(Entity p_20303_)`
- `public boolean canBeCollidedWith()`
- `public void rideTick()`
- `public final void positionRider(Entity p_20312_)`
- `protected void positionRider(Entity p_19957_,  Entity.MoveFunction p_19958_)`
- `public void onPassengerTurned(Entity p_20320_)`
- `public float getMyRidingOffset(Entity p_299721_)`
- `protected float ridingOffset(Entity p_301274_)`
- `public Vec3 getPassengerRidingPosition(Entity p_297660_)`
- `protected org.joml.Vector3f getPassengerAttachmentPoint(Entity p_297569_,  EntityDimensions p_297882_,  float p_300288_)`
- `public boolean startRiding(Entity p_20330_)`
- `public boolean showVehicleHealth()`
- `public boolean startRiding(Entity p_19966_,  boolean p_19967_)`
- `protected boolean canRide(Entity p_20339_)`
- `public void ejectPassengers()`
- `public void removeVehicle()`
- `public void stopRiding()`
- `protected void addPassenger(Entity p_20349_)`
- `protected void removePassenger(Entity p_20352_)`
- `protected boolean canAddPassenger(Entity p_20354_)`
- `@Deprecated protected boolean couldAcceptPassenger()` (deprecated)
- `public void lerpTo(double p_19896_,  double p_19897_,  double p_19898_,  float p_19899_,  float p_19900_,  int p_19901_)`
- `public double lerpTargetX()`
- `public double lerpTargetY()`
- `public double lerpTargetZ()`
- `public float lerpTargetXRot()`
- `public float lerpTargetYRot()`
- `public void lerpHeadTo(float p_19918_,  int p_19919_)`
- `public float getPickRadius()`
- `public Vec3 getLookAngle()`
- `public Vec3 getHandHoldingItemAngle(Item p_204035_)`
- `public Vec2 getRotationVector()`
- `public Vec3 getForward()`
- `public void handleInsidePortal(BlockPos p_20222_)`
- `protected void handleNetherPortal()`
- `public int getDimensionChangingDelay()`
- `public void lerpMotion(double p_20306_,  double p_20307_,  double p_20308_)`
- `public void handleDamageEvent(DamageSource p_270704_)`
- `public void handleEntityEvent(byte p_19882_)`
- `public void animateHurt(float p_265161_)`
- `public Iterable<ItemStack> getHandSlots()`
- `public Iterable<ItemStack> getArmorSlots()`
- `public Iterable<ItemStack> getAllSlots()`
- `public void setItemSlot(EquipmentSlot p_19968_,  ItemStack p_19969_)`
- `public boolean isOnFire()`
- `public boolean isPassenger()`
- `public boolean isVehicle()`
- `public boolean dismountsUnderwater()`
- `public boolean canControlVehicle()`
- `public void setShiftKeyDown(boolean p_20261_)`
- `public boolean isShiftKeyDown()`
- `public boolean isSteppingCarefully()`
- `public boolean isSuppressingBounce()`
- `public boolean isDiscrete()`
- `public boolean isDescending()`
- `public boolean isCrouching()`
- `public boolean isSprinting()`
- `public void setSprinting(boolean p_20274_)`
- `public boolean isSwimming()`
- `public boolean isVisuallySwimming()`
- `public boolean isVisuallyCrawling()`
- `public void setSwimming(boolean p_20283_)`
- `public final boolean hasGlowingTag()`
- `public final void setGlowingTag(boolean p_146916_)`
- `public boolean isCurrentlyGlowing()`
- `public boolean isInvisible()`
- `public boolean isInvisibleTo(Player p_20178_)`
- `public boolean isOnRails()`
- `public void updateDynamicGameEventListener(BiConsumer<DynamicGameEventListener<?>,ServerLevel> p_216996_)`
- `@Nullable public Team getTeam()`
- `public boolean isAlliedTo(Entity p_20355_)`
- `public boolean isAlliedTo(Team p_20032_)`
- `public void setInvisible(boolean p_20304_)`
- `protected boolean getSharedFlag(int p_20292_)`
- `protected void setSharedFlag(int p_20116_,  boolean p_20117_)`
- `public int getMaxAirSupply()`
- `public int getAirSupply()`
- `public void setAirSupply(int p_20302_)`
- `public int getTicksFrozen()`
- `public void setTicksFrozen(int p_146918_)`
- `public float getPercentFrozen()`
- `public boolean isFullyFrozen()`
- `public int getTicksRequiredToFreeze()`
- `public void thunderHit(ServerLevel p_19927_,  LightningBolt p_19928_)`
- `public void onAboveBubbleCol(boolean p_20313_)`
- `public void onInsideBubbleColumn(boolean p_20322_)`
- `public boolean killedEntity(ServerLevel p_216988_,  LivingEntity p_216989_)`
- `public void checkSlowFallDistance()`
- `public void resetFallDistance()`
- `protected void moveTowardsClosestSpace(double p_20315_,  double p_20316_,  double p_20317_)`
- `public void makeStuckInBlock(BlockState p_20006_,  Vec3 p_20007_)`
- `private static Component removeAction(Component p_20141_)`
- `public Component getName()`
- `protected Component getTypeName()`
- `public boolean is(Entity p_20356_)`
- `public float getYHeadRot()`
- `public void setYHeadRot(float p_20328_)`
- `public void setYBodyRot(float p_20338_)`
- `public boolean isAttackable()`
- `public boolean skipAttackInteraction(Entity p_20357_)`
- `public String toString()`
- `public boolean isInvulnerableTo(DamageSource p_20122_)`
- `public boolean isInvulnerable()`
- `public void setInvulnerable(boolean p_20332_)`
- `public void copyPosition(Entity p_20360_)`
- `public void restoreFrom(Entity p_20362_)`
- `@Nullable public Entity changeDimension(ServerLevel p_20118_)`
- `@Nullable public Entity changeDimension(ServerLevel p_20118_,  ITeleporter teleporter)`
- `protected void removeAfterChangingDimensions()`
- `@Nullable protected PortalInfo findDimensionEntryPoint(ServerLevel p_19923_)`
- `protected Vec3 getRelativePortalPosition(Direction.Axis p_20045_,  BlockUtil.FoundRectangle p_20046_)`
- `protected Optional<BlockUtil.FoundRectangle> getExitPortal(ServerLevel p_185935_,  BlockPos p_185936_,  boolean p_185937_,  WorldBorder p_185938_)`
- `public boolean canChangeDimensions()`
- `public float getBlockExplosionResistance(Explosion p_19992_,  BlockGetter p_19993_,  BlockPos p_19994_,  BlockState p_19995_,  FluidState p_19996_,  float p_19997_)`
- `public boolean shouldBlockExplode(Explosion p_19987_,  BlockGetter p_19988_,  BlockPos p_19989_,  BlockState p_19990_,  float p_19991_)`
- `public int getMaxFallDistance()`
- `public boolean isIgnoringBlockTriggers()`
- `public void fillCrashReportCategory(CrashReportCategory p_20051_)`
- `public boolean displayFireAnimation()`
- `public void setUUID(UUID p_20085_)`
- `public UUID getUUID()`
- `public String getStringUUID()`
- `public String getScoreboardName()`
- `@Deprecated public boolean isPushedByFluid()` (deprecated)
- `public static double getViewScale()`
- `public static void setViewScale(double p_20104_)`
- `public Component getDisplayName()`
- `public void setCustomName(@Nullable  Component p_20053_)`
- `@Nullable public Component getCustomName()`
- `public boolean hasCustomName()`
- `public void setCustomNameVisible(boolean p_20341_)`
- `public boolean isCustomNameVisible()`
- `public final void teleportToWithTicket(double p_20325_,  double p_20326_,  double p_20327_)`
- `public boolean teleportTo(ServerLevel p_265257_,  double p_265407_,  double p_265727_,  double p_265410_,  Set<RelativeMovement> p_265083_,  float p_265573_,  float p_265094_)`
- `public void dismountTo(double p_146825_,  double p_146826_,  double p_146827_)`
- `public void teleportTo(double p_19887_,  double p_19888_,  double p_19889_)`
- `private void teleportPassengers()`
- `public void teleportRelative(double p_249341_,  double p_252229_,  double p_252038_)`
- `public boolean shouldShowName()`
- `public void onSyncedDataUpdated(List<SynchedEntityData.DataValue<?>> p_270372_)`
- `public void onSyncedDataUpdated(EntityDataAccessor<?> p_20059_)`
- `@Deprecated protected void fixupDimensions()` (deprecated)
- `public void refreshDimensions()`
- `public Direction getDirection()`
- `public Direction getMotionDirection()`
- `protected HoverEvent createHoverEvent()`
- `public boolean broadcastToPlayer(ServerPlayer p_19937_)`
- `public final AABB getBoundingBox()`
- `public AABB getBoundingBoxForCulling()`
- `public final void setBoundingBox(AABB p_20012_)`
- `protected float getEyeHeight(Pose p_19976_,  EntityDimensions p_19977_)`
- `public float getEyeHeight(Pose p_20237_)`
- `public final float getEyeHeight()`
- `public Vec3 getLeashOffset(float p_249286_)`
- `protected Vec3 getLeashOffset()`
- `public SlotAccess getSlot(int p_146919_)`
- `public void sendSystemMessage(Component p_216998_)`
- `public Level getCommandSenderWorld()`
- `@Nullable public MinecraftServer getServer()`
- `public InteractionResult interactAt(Player p_19980_,  Vec3 p_19981_,  InteractionHand p_19982_)`
- `public boolean ignoreExplosion()`
- `public void doEnchantDamageEffects(LivingEntity p_19971_,  Entity p_19972_)`
- `public void startSeenByPlayer(ServerPlayer p_20119_)`
- `public void stopSeenByPlayer(ServerPlayer p_20174_)`
- `public float rotate(Rotation p_20004_)`
- `public float mirror(Mirror p_20003_)`
- `public boolean onlyOpCanSetNbt()`
- `@Nullable public LivingEntity getControllingPassenger()`
- `public final boolean hasControllingPassenger()`
- `public final List<Entity> getPassengers()`
- `@Nullable public Entity getFirstPassenger()`
- `public boolean hasPassenger(Entity p_20364_)`
- `public boolean hasPassenger(Predicate<Entity> p_146863_)`
- `private Stream<Entity> getIndirectPassengersStream()`
- `public Stream<Entity> getSelfAndPassengers()`
- `public Stream<Entity> getPassengersAndSelf()`
- `public Iterable<Entity> getIndirectPassengers()`
- `public boolean hasExactlyOnePlayerPassenger()`
- `public Entity getRootVehicle()`
- `public boolean isPassengerOfSameVehicle(Entity p_20366_)`
- `public boolean hasIndirectPassenger(Entity p_20368_)`
- `public boolean isControlledByLocalInstance()`
- `public boolean isEffectiveAi()`
- `protected static Vec3 getCollisionHorizontalEscapeVector(double p_19904_,  double p_19905_,  float p_19906_)`
- `public Vec3 getDismountLocationForPassenger(LivingEntity p_20123_)`
- `@Nullable public Entity getVehicle()`
- `@Nullable public Entity getControlledVehicle()`
- `public PushReaction getPistonPushReaction()`
- `public SoundSource getSoundSource()`
- `protected int getFireImmuneTicks()`
- `public CommandSourceStack createCommandSourceStack()`
- `protected int getPermissionLevel()`
- `public boolean hasPermissions(int p_20311_)`
- `public boolean acceptsSuccess()`
- `public boolean acceptsFailure()`
- `public boolean shouldInformAdmins()`
- `public void lookAt(EntityAnchorArgument.Anchor p_20033_,  Vec3 p_20034_)`
- `@Deprecated public boolean updateFluidHeightAndDoFluidPushing(TagKey<Fluid> p_204032_,  double p_204033_)` (deprecated)
- `@Deprecated(forRemoval=true,  since="1.20.1") public void updateFluidHeightAndDoFluidPushing()` (deprecated)
- `public void updateFluidHeightAndDoFluidPushing(Predicate<FluidState> shouldUpdate)`
- `public boolean touchingUnloadedChunk()`
- `@Deprecated public double getFluidHeight(TagKey<Fluid> p_204037_)` (deprecated)
- `public double getFluidJumpThreshold()`
- `public final float getBbWidth()`
- `public final float getBbHeight()`
- `public float getNameTagOffsetY()`
- `public Packet<ClientGamePacketListener> getAddEntityPacket()`
- `public EntityDimensions getDimensions(Pose p_19975_)`
- `public Vec3 position()`
- `public Vec3 trackingPosition()`
- `public BlockPos blockPosition()`
- `public BlockState getFeetBlockState()`
- `public ChunkPos chunkPosition()`
- `public Vec3 getDeltaMovement()`
- `public void setDeltaMovement(Vec3 p_20257_)`
- `public void addDeltaMovement(Vec3 p_250128_)`
- `public void setDeltaMovement(double p_20335_,  double p_20336_,  double p_20337_)`
- `public final int getBlockX()`
- `public final double getX()`
- `public double getX(double p_20166_)`
- `public double getRandomX(double p_20209_)`
- `public final int getBlockY()`
- `public final double getY()`
- `public double getY(double p_20228_)`
- `public double getRandomY()`
- `public double getEyeY()`
- `public final int getBlockZ()`
- `public final double getZ()`
- `public double getZ(double p_20247_)`
- `public double getRandomZ(double p_20263_)`
- `public final void setPosRaw(double p_20344_,  double p_20345_,  double p_20346_)`
- `public void checkDespawn()`
- `public Vec3 getRopeHoldPosition(float p_20347_)`
- `public void recreateFromPacket(ClientboundAddEntityPacket p_146866_)`
- `@Nullable public ItemStack getPickResult()`
- `public void setIsInPowderSnow(boolean p_146925_)`
- `public boolean canFreeze()`
- `public boolean isFreezing()`
- `public float getYRot()`
- `public float getVisualRotationYInDegrees()`
- `public void setYRot(float p_146923_)`
- `public float getXRot()`
- `public void setXRot(float p_146927_)`
- `public boolean canSprint()`
- `@Deprecated public float maxUpStep()` (deprecated)
- `public void setMaxUpStep(float p_275672_)`
- `public final boolean isRemoved()`
- `@Nullable public Entity.RemovalReason getRemovalReason()`
- `public final void setRemoved(Entity.RemovalReason p_146876_)`
- `protected void unsetRemoved()`
- `public void setLevelCallback(EntityInLevelCallback p_146849_)`
- `public boolean shouldBeSaved()`
- `public boolean isAlwaysTicking()`
- `public boolean mayInteract(Level p_146843_,  BlockPos p_146844_)`
- `public void canUpdate(boolean value)`
- `public boolean canUpdate()`
- `public Collection<ItemEntity> captureDrops()`
- `public Collection<ItemEntity> captureDrops(Collection<ItemEntity> value)`
- `public CompoundTag getPersistentData()`
  Description copied from interface: IForgeEntity
  Returns a NBTTagCompound that can be used to store custom data for this entity.
   It will be written, and read from disc, so it persists over world saves.
  - returns: A NBTTagCompound
- `public boolean canTrample(BlockState state,  BlockPos pos,  float fallDistance)`
  Description copied from interface: IForgeEntity
  Checks if this Entity can trample a Block.
  - returns: true if this entity can trample, false otherwise
- `public final boolean isAddedToWorld()`
  Description copied from interface: IForgeEntity
  Gets whether this entity has been added to a world (for tracking). Specifically
   between the times when an entity is added to a world and the entity being removed
   from the world's tracked lists.
  - returns: True if this entity is being tracked by a world
- `public void onAddedToWorld()`
  Description copied from interface: IForgeEntity
  Called after the entity has been added to the world's
   ticking list. Can be overriden, but needs to call super
   to prevent MC-136995.
- `public void onRemovedFromWorld()`
  Description copied from interface: IForgeEntity
  Called after the entity has been removed to the world's
   ticking list. Can be overriden, but needs to call super
   to prevent MC-136995.
- `public void revive()`
  Description copied from interface: IForgeEntity
  Revives an entity that has been removed from a world.
   Used as replacement for entity.removed = true. Having it as a function allows
   the entity to react to being revived.
- `@Deprecated(forRemoval=true,  since="1.20.1") public float getEyeHeightAccess(Pose pose,  EntityDimensions size)` (deprecated)
  Accessor method for getEyeHeight(Pose, EntityDimensions)
- `protected final void setFluidTypeHeight(FluidType type,  double height)`
- `public final double getFluidTypeHeight(FluidType type)`
  Description copied from interface: IForgeEntity
  Returns the height of the fluid type in relation to the bounding box of
   the entity. If the entity is not in the fluid type, then 0
   is returned.
  - param: type - the type of the fluid
  - returns: the height of the fluid compared to the entity
- `public final boolean isInFluidType(BiPredicate<FluidType,Double> predicate,  boolean forAllTypes)`
  Description copied from interface: IForgeEntity
  Returns whether the fluid type the entity is currently in matches
   the specified condition.
  - param: predicate - a test taking in the fluid type and its height
  - param: forAllTypes - true if all fluid types should match the
 condition instead of at least one
  - returns: true if a fluid type meets the condition, false
 otherwise
- `public final boolean isInFluidType()`
  Description copied from interface: IForgeEntity
  Returns whether the entity is in a fluid.
  - returns: true if the entity is in a fluid, false otherwise
- `public final FluidType getEyeInFluidType()`
  Description copied from interface: IForgeEntity
  Returns the fluid that is on the entity's eyes.
  - returns: the fluid that is on the entity's eyes
- `public FluidType getMaxHeightFluidType()`
  Description copied from interface: IForgeEntity
  Returns the fluid type which is the highest on the bounding box of
   the entity.
  - returns: the fluid type which is the highest on the bounding box of
 the entity
- `@Deprecated(forRemoval=true,  since="1.20.1") public EntityDimensions getDimensionsForge(Pose pose)` (deprecated)
- `public Level level()`
- `protected void setLevel(Level p_285201_)`
- `public DamageSources damageSources()`
- `protected void lerpPositionAndRotationStep(int p_298722_,  double p_297490_,  double p_300716_,  double p_298684_,  double p_300659_,  double p_298926_)`

### Inherited methods
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## Entity.MoveFunction

*interface* `net.minecraft.world.entity.Entity.MoveFunction`

Enclosing class: Entity

### Methods
- `void accept(Entity p_20373_,  double p_20374_,  double p_20375_,  double p_20376_)`

## EntityDimensions

*class* `net.minecraft.world.entity.EntityDimensions`

### Fields
- `public final float width`
- `public final float height`
- `public final boolean fixed`

### Methods
- `public AABB makeBoundingBox(Vec3 p_20394_)`
- `public AABB makeBoundingBox(double p_20385_,  double p_20386_,  double p_20387_)`
- `public EntityDimensions scale(float p_20389_)`
- `public EntityDimensions scale(float p_20391_,  float p_20392_)`
- `public static EntityDimensions scalable(float p_20396_,  float p_20397_)`
- `public static EntityDimensions fixed(float p_20399_,  float p_20400_)`
- `public String toString()`

## EntityEvent

*class* `net.minecraft.world.entity.EntityEvent`

### Fields
- `public static final byte JUMP` (= 0x1)
- `public static final byte DEATH` (= 0x3)
- `public static final byte START_ATTACKING` (= 0x4)
- `public static final byte STOP_ATTACKING` (= 0x5)
- `public static final byte TAMING_FAILED` (= 0x6)
- `public static final byte TAMING_SUCCEEDED` (= 0x7)
- `public static final byte SHAKE_WETNESS` (= 0x8)
- `public static final byte USE_ITEM_COMPLETE` (= 0x9)
- `public static final byte EAT_GRASS` (= 0xa)
- `public static final byte OFFER_FLOWER` (= 0xb)
- `public static final byte LOVE_HEARTS` (= 0xc)
- `public static final byte VILLAGER_ANGRY` (= 0xd)
- `public static final byte VILLAGER_HAPPY` (= 0xe)
- `public static final byte WITCH_HAT_MAGIC` (= 0xf)
- `public static final byte ZOMBIE_CONVERTING` (= 0x10)
- `public static final byte FIREWORKS_EXPLODE` (= 0x11)
- `public static final byte IN_LOVE_HEARTS` (= 0x12)
- `public static final byte SQUID_ANIM_SYNCH` (= 0x13)
- `public static final byte SILVERFISH_MERGE_ANIM` (= 0x14)
- `public static final byte GUARDIAN_ATTACK_SOUND` (= 0x15)
- `public static final byte REDUCED_DEBUG_INFO` (= 0x16)
- `public static final byte FULL_DEBUG_INFO` (= 0x17)
- `public static final byte PERMISSION_LEVEL_ALL` (= 0x18)
- `public static final byte PERMISSION_LEVEL_MODERATORS` (= 0x19)
- `public static final byte PERMISSION_LEVEL_GAMEMASTERS` (= 0x1a)
- `public static final byte PERMISSION_LEVEL_ADMINS` (= 0x1b)
- `public static final byte PERMISSION_LEVEL_OWNERS` (= 0x1c)
- `public static final byte ATTACK_BLOCKED` (= 0x1d)
- `public static final byte SHIELD_DISABLED` (= 0x1e)
- `public static final byte FISHING_ROD_REEL_IN` (= 0x1f)
- `public static final byte ARMORSTAND_WOBBLE` (= 0x20)
- `public static final byte STOP_OFFER_FLOWER` (= 0x22)
- `public static final byte TALISMAN_ACTIVATE` (= 0x23)
- `public static final byte DOLPHIN_LOOKING_FOR_TREASURE` (= 0x26)
- `public static final byte RAVAGER_STUNNED` (= 0x27)
- `public static final byte TRUSTING_FAILED` (= 0x28)
- `public static final byte TRUSTING_SUCCEEDED` (= 0x29)
- `public static final byte VILLAGER_SWEAT` (= 0x2a)
- `public static final byte BAD_OMEN_TRIGGERED` (= 0x2b)
- `public static final byte FOX_EAT` (= 0x2d)
- `public static final byte TELEPORT` (= 0x2e)
- `public static final byte MAINHAND_BREAK` (= 0x2f)
- `public static final byte OFFHAND_BREAK` (= 0x30)
- `public static final byte HEAD_BREAK` (= 0x31)
- `public static final byte CHEST_BREAK` (= 0x32)
- `public static final byte LEGS_BREAK` (= 0x33)
- `public static final byte FEET_BREAK` (= 0x34)
- `public static final byte HONEY_SLIDE` (= 0x35)
- `public static final byte HONEY_JUMP` (= 0x36)
- `public static final byte SWAP_HANDS` (= 0x37)
- `public static final byte CANCEL_SHAKE_WETNESS` (= 0x38)
- `public static final byte START_RAM` (= 0x3a)
- `public static final byte END_RAM` (= 0x3b)
- `public static final byte POOF` (= 0x3c)
- `public static final byte TENDRILS_SHIVER` (= 0x3d)
- `public static final byte SONIC_CHARGE` (= 0x3e)
- `public static final byte SNIFFER_DIGGING_SOUND` (= 0x3f)

## EntitySelector

*class* `net.minecraft.world.entity.EntitySelector`

### Fields
- `public static final Predicate<Entity> ENTITY_STILL_ALIVE`
- `public static final Predicate<Entity> LIVING_ENTITY_STILL_ALIVE`
- `public static final Predicate<Entity> ENTITY_NOT_BEING_RIDDEN`
- `public static final Predicate<Entity> CONTAINER_ENTITY_SELECTOR`
- `public static final Predicate<Entity> NO_CREATIVE_OR_SPECTATOR`
- `public static final Predicate<Entity> NO_SPECTATORS`
- `public static final Predicate<Entity> CAN_BE_COLLIDED_WITH`

### Methods
- `public static Predicate<Entity> withinDistance(double p_20411_,  double p_20412_,  double p_20413_,  double p_20414_)`
- `public static Predicate<Entity> pushableBy(Entity p_20422_)`
- `public static Predicate<Entity> notRiding(Entity p_20432_)`

## EntitySelector.MobCanWearArmorEntitySelector

*class* `net.minecraft.world.entity.EntitySelector.MobCanWearArmorEntitySelector`

Enclosing class: EntitySelector

### Fields
- `private final ItemStack itemStack`

### Methods
- `public boolean test(@Nullable  Entity p_20447_)`

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## EntityType

*class* `net.minecraft.world.entity.EntityType`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final String ENTITY_TAG` (= "EntityTag")
- `private final Holder.Reference<EntityType<?>> builtInRegistryHolder`
- `private static final float MAGIC_HORSE_WIDTH` (= 1.396484375f)
- `private static final int DISPLAY_TRACKING_RANGE` (= 10)
- `public static final EntityType<Allay> ALLAY`
- `public static final EntityType<AreaEffectCloud> AREA_EFFECT_CLOUD`
- `public static final EntityType<ArmorStand> ARMOR_STAND`
- `public static final EntityType<Arrow> ARROW`
- `public static final EntityType<Axolotl> AXOLOTL`
- `public static final EntityType<Bat> BAT`
- `public static final EntityType<Bee> BEE`
- `public static final EntityType<Blaze> BLAZE`
- `public static final EntityType<Display.BlockDisplay> BLOCK_DISPLAY`
- `public static final EntityType<Boat> BOAT`
- `public static final EntityType<Camel> CAMEL`
- `public static final EntityType<Cat> CAT`
- `public static final EntityType<CaveSpider> CAVE_SPIDER`
- `public static final EntityType<ChestBoat> CHEST_BOAT`
- `public static final EntityType<MinecartChest> CHEST_MINECART`
- `public static final EntityType<Chicken> CHICKEN`
- `public static final EntityType<Cod> COD`
- `public static final EntityType<MinecartCommandBlock> COMMAND_BLOCK_MINECART`
- `public static final EntityType<Cow> COW`
- `public static final EntityType<Creeper> CREEPER`
- `public static final EntityType<Dolphin> DOLPHIN`
- `public static final EntityType<Donkey> DONKEY`
- `public static final EntityType<DragonFireball> DRAGON_FIREBALL`
- `public static final EntityType<Drowned> DROWNED`
- `public static final EntityType<ThrownEgg> EGG`
- `public static final EntityType<ElderGuardian> ELDER_GUARDIAN`
- `public static final EntityType<EndCrystal> END_CRYSTAL`
- `public static final EntityType<EnderDragon> ENDER_DRAGON`
- `public static final EntityType<ThrownEnderpearl> ENDER_PEARL`
- `public static final EntityType<EnderMan> ENDERMAN`
- `public static final EntityType<Endermite> ENDERMITE`
- `public static final EntityType<Evoker> EVOKER`
- `public static final EntityType<EvokerFangs> EVOKER_FANGS`
- `public static final EntityType<ThrownExperienceBottle> EXPERIENCE_BOTTLE`
- `public static final EntityType<ExperienceOrb> EXPERIENCE_ORB`
- `public static final EntityType<EyeOfEnder> EYE_OF_ENDER`
- `public static final EntityType<FallingBlockEntity> FALLING_BLOCK`
- `public static final EntityType<FireworkRocketEntity> FIREWORK_ROCKET`
- `public static final EntityType<Fox> FOX`
- `public static final EntityType<Frog> FROG`
- `public static final EntityType<MinecartFurnace> FURNACE_MINECART`
- `public static final EntityType<Ghast> GHAST`
- `public static final EntityType<Giant> GIANT`
- `public static final EntityType<GlowItemFrame> GLOW_ITEM_FRAME`
- `public static final EntityType<GlowSquid> GLOW_SQUID`
- `public static final EntityType<Goat> GOAT`
- `public static final EntityType<Guardian> GUARDIAN`
- `public static final EntityType<Hoglin> HOGLIN`
- `public static final EntityType<MinecartHopper> HOPPER_MINECART`
- `public static final EntityType<Horse> HORSE`
- `public static final EntityType<Husk> HUSK`
- `public static final EntityType<Illusioner> ILLUSIONER`
- `public static final EntityType<Interaction> INTERACTION`
- `public static final EntityType<IronGolem> IRON_GOLEM`
- `public static final EntityType<ItemEntity> ITEM`
- `public static final EntityType<Display.ItemDisplay> ITEM_DISPLAY`
- `public static final EntityType<ItemFrame> ITEM_FRAME`
- `public static final EntityType<LargeFireball> FIREBALL`
- `public static final EntityType<LeashFenceKnotEntity> LEASH_KNOT`
- `public static final EntityType<LightningBolt> LIGHTNING_BOLT`
- `public static final EntityType<Llama> LLAMA`
- `public static final EntityType<LlamaSpit> LLAMA_SPIT`
- `public static final EntityType<MagmaCube> MAGMA_CUBE`
- `public static final EntityType<Marker> MARKER`
- `public static final EntityType<Minecart> MINECART`
- `public static final EntityType<MushroomCow> MOOSHROOM`
- `public static final EntityType<Mule> MULE`
- `public static final EntityType<Ocelot> OCELOT`
- `public static final EntityType<Painting> PAINTING`
- `public static final EntityType<Panda> PANDA`
- `public static final EntityType<Parrot> PARROT`
- `public static final EntityType<Phantom> PHANTOM`
- `public static final EntityType<Pig> PIG`
- `public static final EntityType<Piglin> PIGLIN`
- `public static final EntityType<PiglinBrute> PIGLIN_BRUTE`
- `public static final EntityType<Pillager> PILLAGER`
- `public static final EntityType<PolarBear> POLAR_BEAR`
- `public static final EntityType<ThrownPotion> POTION`
- `public static final EntityType<Pufferfish> PUFFERFISH`
- `public static final EntityType<Rabbit> RABBIT`
- `public static final EntityType<Ravager> RAVAGER`
- `public static final EntityType<Salmon> SALMON`
- `public static final EntityType<Sheep> SHEEP`
- `public static final EntityType<Shulker> SHULKER`
- `public static final EntityType<ShulkerBullet> SHULKER_BULLET`
- `public static final EntityType<Silverfish> SILVERFISH`
- `public static final EntityType<Skeleton> SKELETON`
- `public static final EntityType<SkeletonHorse> SKELETON_HORSE`
- `public static final EntityType<Slime> SLIME`
- `public static final EntityType<SmallFireball> SMALL_FIREBALL`
- `public static final EntityType<Sniffer> SNIFFER`
- `public static final EntityType<SnowGolem> SNOW_GOLEM`
- `public static final EntityType<Snowball> SNOWBALL`
- `public static final EntityType<MinecartSpawner> SPAWNER_MINECART`
- `public static final EntityType<SpectralArrow> SPECTRAL_ARROW`
- `public static final EntityType<Spider> SPIDER`
- `public static final EntityType<Squid> SQUID`
- `public static final EntityType<Stray> STRAY`
- `public static final EntityType<Strider> STRIDER`
- `public static final EntityType<Tadpole> TADPOLE`
- `public static final EntityType<Display.TextDisplay> TEXT_DISPLAY`
- `public static final EntityType<PrimedTnt> TNT`
- `public static final EntityType<MinecartTNT> TNT_MINECART`
- `public static final EntityType<TraderLlama> TRADER_LLAMA`
- `public static final EntityType<ThrownTrident> TRIDENT`
- `public static final EntityType<TropicalFish> TROPICAL_FISH`
- `public static final EntityType<Turtle> TURTLE`
- `public static final EntityType<Vex> VEX`
- `public static final EntityType<Villager> VILLAGER`
- `public static final EntityType<Vindicator> VINDICATOR`
- `public static final EntityType<WanderingTrader> WANDERING_TRADER`
- `public static final EntityType<Warden> WARDEN`
- `public static final EntityType<Witch> WITCH`
- `public static final EntityType<WitherBoss> WITHER`
- `public static final EntityType<WitherSkeleton> WITHER_SKELETON`
- `public static final EntityType<WitherSkull> WITHER_SKULL`
- `public static final EntityType<Wolf> WOLF`
- `public static final EntityType<Zoglin> ZOGLIN`
- `public static final EntityType<Zombie> ZOMBIE`
- `public static final EntityType<ZombieHorse> ZOMBIE_HORSE`
- `public static final EntityType<ZombieVillager> ZOMBIE_VILLAGER`
- `public static final EntityType<ZombifiedPiglin> ZOMBIFIED_PIGLIN`
- `public static final EntityType<Player> PLAYER`
- `public static final EntityType<FishingHook> FISHING_BOBBER`
- `private final EntityType.EntityFactory<T extends Entity> factory`
- `private final MobCategory category`
- `private final com.google.common.collect.ImmutableSet<Block> immuneTo`
- `private final boolean serialize`
- `private final boolean summon`
- `private final boolean fireImmune`
- `private final boolean canSpawnFarFromPlayer`
- `private final int clientTrackingRange`
- `private final int updateInterval`
- `@Nullable private String descriptionId`
- `@Nullable private Component description`
- `@Nullable private ResourceLocation lootTable`
- `private final EntityDimensions dimensions`
- `private final FeatureFlagSet requiredFeatures`
- `private final Predicate<EntityType<?>> velocityUpdateSupplier`
- `private final ToIntFunction<EntityType<?>> trackingRangeSupplier`
- `private final ToIntFunction<EntityType<?>> updateIntervalSupplier`
- `private final BiFunction<SpawnEntity,Level,T extends Entity> customClientFactory`

### Inherited fields
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `private static <T extends Entity> EntityType<T> register(String p_20635_,  EntityType.Builder<T> p_20636_)`
- `public static ResourceLocation getKey(EntityType<?> p_20614_)`
- `public static Optional<EntityType<?>> byString(String p_20633_)`
- `@Nullable public T spawn(ServerLevel p_20593_,  @Nullable  ItemStack p_20594_,  @Nullable  Player p_20595_,  BlockPos p_20596_,  MobSpawnType p_20597_,  boolean p_20598_,  boolean p_20599_)`
- `public static <T extends Entity> Consumer<T> createDefaultStackConfig(ServerLevel p_263583_,  ItemStack p_263568_,  @Nullable  Player p_263575_)`
- `public static <T extends Entity> Consumer<T> appendDefaultStackConfig(Consumer<T> p_265154_,  ServerLevel p_265733_,  ItemStack p_265598_,  @Nullable  Player p_265666_)`
- `public static <T extends Entity> Consumer<T> appendCustomNameConfig(Consumer<T> p_263567_,  ItemStack p_263564_)`
- `public static <T extends Entity> Consumer<T> appendCustomEntityStackConfig(Consumer<T> p_263579_,  ServerLevel p_263571_,  ItemStack p_263582_,  @Nullable  Player p_263574_)`
- `@Nullable public T spawn(ServerLevel p_262634_,  BlockPos p_262707_,  MobSpawnType p_262597_)`
- `@Nullable public T spawn(ServerLevel p_262704_,  @Nullable  CompoundTag p_262603_,  @Nullable  Consumer<T> p_262621_,  BlockPos p_262672_,  MobSpawnType p_262644_,  boolean p_262690_,  boolean p_262590_)`
- `@Nullable public T create(ServerLevel p_262637_,  @Nullable  CompoundTag p_262687_,  @Nullable  Consumer<T> p_262629_,  BlockPos p_262595_,  MobSpawnType p_262666_,  boolean p_262685_,  boolean p_262588_)`
- `protected static double getYOffset(LevelReader p_20626_,  BlockPos p_20627_,  boolean p_20628_,  AABB p_20629_)`
- `public static void updateCustomEntityTag(Level p_20621_,  @Nullable  Player p_20622_,  @Nullable  Entity p_20623_,  @Nullable  CompoundTag p_20624_)`
- `public boolean canSerialize()`
- `public boolean canSummon()`
- `public boolean fireImmune()`
- `public boolean canSpawnFarFromPlayer()`
- `public MobCategory getCategory()`
- `public String getDescriptionId()`
- `public Component getDescription()`
- `public String toString()`
- `public String toShortString()`
- `public ResourceLocation getDefaultLootTable()`
- `public float getWidth()`
- `public float getHeight()`
- `public FeatureFlagSet requiredFeatures()`
- `@Nullable public T create(Level p_20616_)`
- `public static Optional<Entity> create(CompoundTag p_20643_,  Level p_20644_)`
- `public AABB getAABB(double p_20586_,  double p_20587_,  double p_20588_)`
- `public boolean isBlockDangerous(BlockState p_20631_)`
- `public EntityDimensions getDimensions()`
- `public static Optional<EntityType<?>> by(CompoundTag p_20638_)`
- `@Nullable public static Entity loadEntityRecursive(CompoundTag p_20646_,  Level p_20647_,  Function<Entity,Entity> p_20648_)`
- `public static Stream<Entity> loadEntitiesRecursive(List<? extends Tag> p_147046_,  Level p_147047_)`
- `private static Optional<Entity> loadStaticEntity(CompoundTag p_20670_,  Level p_20671_)`
- `public int clientTrackingRange()`
- `private int defaultTrackingRangeSupplier()`
- `public int updateInterval()`
- `private int defaultUpdateIntervalSupplier()`
- `public boolean trackDeltas()`
- `private boolean defaultVelocitySupplier()`
- `public boolean is(TagKey<EntityType<?>> p_204040_)`
- `public boolean is(HolderSet<EntityType<?>> p_300605_)`
- `@Nullable public T tryCast(Entity p_147042_)`
- `public Class<? extends Entity> getBaseClass()`
- `@Deprecated public Holder.Reference<EntityType<?>> builtInRegistryHolder()` (deprecated)
- `public T customClientSpawn(SpawnEntity packet,  Level world)`
- `public Stream<TagKey<EntityType<?>>> getTags()`

### Inherited methods
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`

## EntityType.Builder

*class* `net.minecraft.world.entity.EntityType.Builder`

Enclosing class: EntityType<T extends Entity>

### Fields
- `private final EntityType.EntityFactory<T extends Entity> factory`
- `private final MobCategory category`
- `private com.google.common.collect.ImmutableSet<Block> immuneTo`
- `private boolean serialize`
- `private boolean summon`
- `private boolean fireImmune`
- `private boolean canSpawnFarFromPlayer`
- `private int clientTrackingRange`
- `private int updateInterval`
- `private EntityDimensions dimensions`
- `private FeatureFlagSet requiredFeatures`
- `private Predicate<EntityType<?>> velocityUpdateSupplier`
- `private ToIntFunction<EntityType<?>> trackingRangeSupplier`
- `private ToIntFunction<EntityType<?>> updateIntervalSupplier`
- `private BiFunction<SpawnEntity,Level,T extends Entity> customClientFactory`

### Methods
- `public static <T extends Entity> EntityType.Builder<T> of(EntityType.EntityFactory<T> p_20705_,  MobCategory p_20706_)`
- `public static <T extends Entity> EntityType.Builder<T> createNothing(MobCategory p_20711_)`
- `public EntityType.Builder<T> sized(float p_20700_,  float p_20701_)`
- `public EntityType.Builder<T> noSummon()`
- `public EntityType.Builder<T> noSave()`
- `public EntityType.Builder<T> fireImmune()`
- `public EntityType.Builder<T> immuneTo(Block... p_20715_)`
- `public EntityType.Builder<T> canSpawnFarFromPlayer()`
- `public EntityType.Builder<T> clientTrackingRange(int p_20703_)`
- `public EntityType.Builder<T> updateInterval(int p_20718_)`
- `public EntityType.Builder<T> requiredFeatures(FeatureFlag... p_251646_)`
- `public EntityType.Builder<T> setUpdateInterval(int interval)`
- `public EntityType.Builder<T> setTrackingRange(int range)`
- `public EntityType.Builder<T> setShouldReceiveVelocityUpdates(boolean value)`
- `public EntityType.Builder<T> setCustomClientFactory(BiFunction<SpawnEntity,Level,T> customClientFactory)`
  By default, entities are spawned clientside via EntityType.create(Level)}.
   If you need finer control over the spawning process, use this to get read access to the spawn packet.
- `public EntityType<T> build(String p_20713_)`

## EntityType.EntityFactory

*interface* `net.minecraft.world.entity.EntityType.EntityFactory`

Enclosing class: EntityType<T extends Entity>

### Methods
- `T create(EntityType<T> p_20722_,  Level p_20723_)`

## ExperienceOrb

*class* `net.minecraft.world.entity.ExperienceOrb`

### Fields
- `private static final int LIFETIME` (= 6000)
- `private static final int ENTITY_SCAN_PERIOD` (= 20)
- `private static final int MAX_FOLLOW_DIST` (= 8)
- `private static final int ORB_GROUPS_PER_AREA` (= 40)
- `private static final double ORB_MERGE_DISTANCE` (= 0.5)
- `private int age`
- `private int health`
- `public int value`
- `private int count`
- `private Player followingPlayer`

### Inherited fields
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `protected Entity.MovementEmission getMovementEmission()`
- `protected void defineSynchedData()`
- `public void tick()`
- `protected BlockPos getBlockPosBelowThatAffectsMyMovement()`
- `private void scanForEntities()`
- `public static void award(ServerLevel p_147083_,  Vec3 p_147084_,  int p_147085_)`
- `private static boolean tryMergeToExisting(ServerLevel p_147097_,  Vec3 p_147098_,  int p_147099_)`
- `private boolean canMerge(ExperienceOrb p_147087_)`
- `private static boolean canMerge(ExperienceOrb p_147089_,  int p_147090_,  int p_147091_)`
- `private void merge(ExperienceOrb p_147101_)`
- `private void setUnderwaterMovement()`
- `protected void doWaterSplashEffect()`
- `public boolean hurt(DamageSource p_20785_,  float p_20786_)`
- `public void addAdditionalSaveData(CompoundTag p_20796_)`
- `public void readAdditionalSaveData(CompoundTag p_20788_)`
- `public void playerTouch(Player p_20792_)`
- `private int repairPlayerItems(Player p_147093_,  int p_147094_)`
- `private int durabilityToXp(int p_20794_)`
- `private int xpToDurability(int p_20799_)`
- `public int getValue()`
- `public int getIcon()`
- `public static int getExperienceValue(int p_20783_)`
- `public boolean isAttackable()`
- `public Packet<ClientGamePacketListener> getAddEntityPacket()`
- `public SoundSource getSoundSource()`

### Inherited methods
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `animateHurt`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canCollideWith`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockSpeedFactor`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getBoundingBoxForCulling`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMotionDirection`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPickResult`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRelativePortalPosition`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSlot`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interact`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPickable`, `isPushable`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpMotion`, `lerpPositionAndRotationStep`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `push`, `reapplyPosition`, `recreateFromPacket`, `refreshDimensions`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `shouldShowName`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateInWaterStateAndDoWaterCurrentPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## FlyingMob

*class* `net.minecraft.world.entity.FlyingMob`

### Inherited fields
- from `net.minecraft.world.entity.Mob`: `ambientSoundTime`, `armorDropChances`, `DEFAULT_EQUIPMENT_DROP_CHANCE`, `goalSelector`, `handDropChances`, `jumpControl`, `LEASH_TAG`, `lookControl`, `MAX_ENCHANTED_ARMOR_CHANCE`, `MAX_ENCHANTED_WEAPON_CHANCE`, `MAX_PICKUP_LOOT_CHANCE`, `MAX_WEARING_ARMOR_CHANCE`, `moveControl`, `navigation`, `PICKUP_REACH`, `PRESERVE_ITEM_DROP_CHANCE`, `targetSelector`, `UPDATE_GOAL_SELECTOR_EVERY_N_TICKS`, `xpReward`
- from `net.minecraft.world.entity.LivingEntity`: `animStep`, `animStepO`, `ARMOR_SLOT_OFFSET`, `ARMOR_SLOTS`, `attackAnim`, `attackStrengthTicker`, `autoSpinAttackTicks`, `brain`, `DATA_LIVING_ENTITY_FLAGS`, `dead`, `DEATH_DURATION`, `deathScore`, `deathTime`, `DEFAULT_BASE_GRAVITY`, `DEFAULT_EYE_HEIGHT`, `EQUIPMENT_SLOT_OFFSET`, `EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT`, `fallFlyTicks`, `HAND_SLOTS`, `hurtDuration`, `hurtTime`, `invulnerableDuration`, `jumping`, `lastHurt`, `lastHurtByPlayer`, `lastHurtByPlayerTime`, `lerpHeadSteps`, `lerpSteps`, `lerpX`, `lerpXRot`, `lerpY`, `lerpYHeadRot`, `lerpYRot`, `lerpZ`, `LIVING_ENTITY_FLAG_IS_USING`, `LIVING_ENTITY_FLAG_OFF_HAND`, `LIVING_ENTITY_FLAG_SPIN_ATTACK`, `MIN_MOVEMENT_DISTANCE`, `noActionTime`, `oAttackAnim`, `oRun`, `PLAYER_HURT_EXPERIENCE_TIME`, `removeArrowTime`, `removeStingerTime`, `rotA`, `rotOffs`, `run`, `SLEEPING_DIMENSIONS`, `SWING_DURATION`, `swinging`, `swingingArm`, `swingTime`, `timeOffs`, `USE_ITEM_INTERVAL`, `useItem`, `useItemRemaining`, `walkAnimation`, `xxa`, `yBodyRot`, `yBodyRotO`, `yHeadRot`, `yHeadRotO`, `yya`, `zza`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `protected void checkFallDamage(double p_20809_,  boolean p_20810_,  BlockState p_20811_,  BlockPos p_20812_)`
- `public void travel(Vec3 p_20818_)`
- `public boolean onClimbable()`

### Inherited methods
- from `net.minecraft.world.entity.Mob`: `addAdditionalSaveData`, `aiStep`, `ate`, `baseTick`, `canAttackType`, `canBeLeashed`, `canFireProjectileWeapon`, `canHoldItem`, `canPickUpLoot`, `canReplaceCurrentItem`, `canReplaceEqualItem`, `canTakeItem`, `checkDespawn`, `checkMobSpawnRules`, `checkSpawnObstruction`, `checkSpawnRules`, `clearRestriction`, `convertTo`, `createBodyControl`, `createMobAttributes`, `createNavigation`, `customServerAiStep`, `defineSynchedData`, `doHurtTarget`, `dropCustomDeathLoot`, `dropFromLootTable`, `dropLeash`, `enchantSpawnedArmor`, `enchantSpawnedWeapon`, `equipItemIfPossible`, `finalizeSpawn`, `getAmbientSound`, `getAmbientSoundInterval`, `getArmorSlots`, `getAttackBoundingBox`, `getControllingPassenger`, `getDefaultLootTable`, `getEquipmentDropChance`, `getEquipmentForSlot`, `getExperienceReward`, `getHandSlots`, `getHeadRotSpeed`, `getItemBySlot`, `getJumpControl`, `getLeashHolder`, `getLookControl`, `getLootTable`, `getLootTableSeed`, `getMainArm`, `getMaxFallDistance`, `getMaxHeadXRot`, `getMaxHeadYRot`, `getMaxSpawnClusterSize`, `getMoveControl`, `getNavigation`, `getPathfindingMalus`, `getPickResult`, `getPickupReach`, `getRestrictCenter`, `getRestrictRadius`, `getSensing`, `getSpawnType`, `getTarget`, `handleEntityEvent`, `hasRestriction`, `interact`, `isAggressive`, `isEffectiveAi`, `isLeashed`, `isLeftHanded`, `isMaxGroupSizeReached`, `isNoAi`, `isPersistenceRequired`, `isSpawnCancelled`, `isSunBurnTick`, `isWithinMeleeAttackRange`, `isWithinRestriction`, `isWithinRestriction`, `jumpInFluid`, `jumpInLiquid`, `lookAt`, `mobInteract`, `onOffspringSpawnedFromEgg`, `onPathfindingDone`, `onPathfindingStart`, `pickUpItem`, `playAmbientSound`, `playHurtSound`, `populateDefaultEquipmentEnchantments`, `populateDefaultEquipmentSlots`, `readAdditionalSaveData`, `registerGoals`, `removeAfterChangingDimensions`, `removeAllGoals`, `removeFreeWill`, `removeWhenFarAway`, `requiresCustomPersistence`, `restrictTo`, `sendDebugPackets`, `serverAiStep`, `setAggressive`, `setBaby`, `setCanPickUpLoot`, `setDelayedLeashHolderId`, `setDropChance`, `setGuaranteedDrop`, `setItemSlot`, `setItemSlotAndDropWhenKilled`, `setLeashedTo`, `setLeftHanded`, `setNoAi`, `setPathfindingMalus`, `setPersistenceRequired`, `setSpawnCancelled`, `setSpeed`, `setTarget`, `setXxa`, `setYya`, `setZza`, `shouldDespawnInPeaceful`, `shouldPassengersInheritMalus`, `spawnAnim`, `startRiding`, `tick`, `tickHeadTurn`, `tickLeash`, `updateControlFlags`, `wantsToPickUp`
- from `net.minecraft.world.entity.LivingEntity`: `actuallyHurt`, `addEffect`, `addEffect`, `animateHurt`, `areAllEffectsAmbient`, `attackable`, `blockedByShield`, `blockUsingShield`, `brainProvider`, `broadcastBreakEvent`, `broadcastBreakEvent`, `calculateEntityAnimation`, `calculateFallDamage`, `canAttack`, `canAttack`, `canBeAffected`, `canBeSeenAsEnemy`, `canBeSeenByAnyone`, `canBreatheUnderwater`, `canChangeDimensions`, `canDisableShield`, `canFreeze`, `canSpawnSoulSpeedParticle`, `canStandOnFluid`, `causeFallDamage`, `checkAutoSpinAttack`, `clearSleepingPos`, `completeUsingItem`, `createLivingAttributes`, `createWitherRose`, `curePotionEffects`, `decreaseAirSupply`, `die`, `doAutoAttackOnTouch`, `doesEmitEquipEvent`, `doPush`, `dropAllDeathLoot`, `dropEquipment`, `dropExperience`, `eat`, `equipmentHasChanged`, `forceAddEffect`, `getAbsorptionAmount`, `getActiveEffects`, `getActiveEffectsMap`, `getArmorCoverPercentage`, `getArmorValue`, `getArrowCount`, `getAttackAnim`, `getAttribute`, `getAttributeBaseValue`, `getAttributeBaseValue`, `getAttributes`, `getAttributeValue`, `getAttributeValue`, `getBedOrientation`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getBrain`, `getCapability`, `getCombatTracker`, `getDamageAfterArmorAbsorb`, `getDamageAfterMagicAbsorb`, `getDeathSound`, `getDimensions`, `getDismountPoses`, `getDrinkingSound`, `getEatingSound`, `getEffect`, `getEquipmentSlotForItem`, `getEyeHeight`, `getFallFlyingTicks`, `getFallSounds`, `getFluidFallingAdjustedMovement`, `getFlyingSpeed`, `getHealth`, `getHitbox`, `getHurtDir`, `getHurtSound`, `getItemInHand`, `getJumpBoostPower`, `getJumpPower`, `getKillCredit`, `getLastAttacker`, `getLastClimbablePos`, `getLastDamageSource`, `getLastHurtByMob`, `getLastHurtByMobTimestamp`, `getLastHurtMob`, `getLastHurtMobTimestamp`, `getLocalBoundsForPose`, `getMainHandItem`, `getMaxAbsorption`, `getMaxHealth`, `getMobType`, `getMyRidingOffset`, `getNoActionTime`, `getOffhandItem`, `getPassengerRidingPosition`, `getProjectile`, `getRandom`, `getRelativePortalPosition`, `getRiddenInput`, `getRiddenSpeed`, `getScale`, `getSleepingPos`, `getSlot`, `getSoundVolume`, `getSpeed`, `getStandingEyeHeight`, `getStingerCount`, `getSwimAmount`, `getTicksUsingItem`, `getUsedItemHand`, `getUseItem`, `getUseItemRemainingTicks`, `getViewYRot`, `getVisibilityPercent`, `getVisualRotationYInDegrees`, `getVoicePitch`, `getWaterSlowDown`, `getYHeadRot`, `goDownInWater`, `handleDamageEvent`, `handleRelativeFrictionAndCalculateMovement`, `hasEffect`, `hasItemInSlot`, `hasLineOfSight`, `heal`, `hurt`, `hurtArmor`, `hurtCurrentlyUsedShield`, `hurtHelmet`, `increaseAirSupply`, `indicateDamage`, `internalSetAbsorptionAmount`, `invalidateCaps`, `isAffectedByFluids`, `isAffectedByPotions`, `isAlive`, `isAlwaysExperienceDropper`, `isAutoSpinAttack`, `isBaby`, `isBlocking`, `isCurrentlyGlowing`, `isDamageSourceBlocked`, `isDeadOrDying`, `isFallFlying`, `isHolding`, `isHolding`, `isImmobile`, `isInvertedHealAndHarm`, `isInWall`, `isPickable`, `isPushable`, `isSensitiveToWater`, `isSleeping`, `isSuppressingSlidingDownLadder`, `isUsingItem`, `isVisuallySwimming`, `jumpFromGround`, `kill`, `knockback`, `lerpHeadRotationStep`, `lerpHeadTo`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `lookAt`, `makeBrain`, `maxUpStep`, `onBelowWorld`, `onChangedBlock`, `onEffectAdded`, `onEffectRemoved`, `onEffectUpdated`, `onEnterCombat`, `onEquipItem`, `onItemPickup`, `onLeaveCombat`, `onSoulSpeedBlock`, `onSyncedDataUpdated`, `playBlockFallSound`, `push`, `pushEntities`, `randomTeleport`, `recreateFromPacket`, `releaseUsingItem`, `remove`, `removeAllEffects`, `removeEffect`, `removeEffectNoUpdate`, `removeEffectParticles`, `removeFrost`, `removeSoulSpeed`, `resetForwardDirectionOfRelativePortalPosition`, `reviveCaps`, `rideTick`, `sendEffectToPassengers`, `setAbsorptionAmount`, `setArrowCount`, `setDiscardFriction`, `setHealth`, `setItemInHand`, `setJumping`, `setLastHurtByMob`, `setLastHurtByPlayer`, `setLastHurtMob`, `setLivingEntityFlag`, `setNoActionTime`, `setRecordPlayingNearby`, `setSleepingPos`, `setSprinting`, `setStingerCount`, `setYBodyRot`, `setYHeadRot`, `shouldDiscardFriction`, `shouldDropExperience`, `shouldDropLoot`, `shouldRemoveSoulSpeed`, `shouldRiderFaceForward`, `shouldShowName`, `skipDropExperience`, `spawnSoulSpeedParticle`, `startSleeping`, `startUsingItem`, `stopRiding`, `stopSleeping`, `stopUsingItem`, `swing`, `swing`, `take`, `tickDeath`, `tickEffects`, `tickRidden`, `triggerItemUseEffects`, `tryAddFrost`, `tryAddSoulSpeed`, `updateEffectVisibility`, `updateInvisibilityStatus`, `updateSwingTime`, `updateUsingItem`, `updateWalkAnimation`, `verifyEquippedItem`, `wasExperienceConsumed`, `wouldNotSuffocateAtTargetPose`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canCollideWith`, `canControlVehicle`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYRot`, `getZ`, `getZ`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `killedEntity`, `lavaHurt`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `refreshDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startSeenByPlayer`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateInWaterStateAndDoWaterCurrentPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getEyeInFluidType`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getFluidTypeHeight`, `getMaxHeightFluidType`, `getParts`, `getPersistentData`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isAddedToWorld`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `onAddedToWorld`, `onRemovedFromWorld`, `revive`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraftforge.common.extensions.IForgeLivingEntity`: `canDrownInFluidType`, `canSwimInFluidType`, `moveInFluid`, `self`, `sinkInFluid`

## GlowSquid

*class* `net.minecraft.world.entity.GlowSquid`

### Fields
- `private static final EntityDataAccessor<Integer> DATA_DARK_TICKS_REMAINING`

### Inherited fields
- from `net.minecraft.world.entity.animal.Squid`: `oldTentacleAngle`, `oldTentacleMovement`, `tentacleAngle`, `tentacleMovement`, `xBodyRot`, `xBodyRotO`, `zBodyRot`, `zBodyRotO`
- from `net.minecraft.world.entity.PathfinderMob`: `DEFAULT_WALK_TARGET_VALUE`
- from `net.minecraft.world.entity.Mob`: `ambientSoundTime`, `armorDropChances`, `DEFAULT_EQUIPMENT_DROP_CHANCE`, `goalSelector`, `handDropChances`, `jumpControl`, `LEASH_TAG`, `lookControl`, `MAX_ENCHANTED_ARMOR_CHANCE`, `MAX_ENCHANTED_WEAPON_CHANCE`, `MAX_PICKUP_LOOT_CHANCE`, `MAX_WEARING_ARMOR_CHANCE`, `moveControl`, `navigation`, `PICKUP_REACH`, `PRESERVE_ITEM_DROP_CHANCE`, `targetSelector`, `UPDATE_GOAL_SELECTOR_EVERY_N_TICKS`, `xpReward`
- from `net.minecraft.world.entity.LivingEntity`: `animStep`, `animStepO`, `ARMOR_SLOT_OFFSET`, `ARMOR_SLOTS`, `attackAnim`, `attackStrengthTicker`, `autoSpinAttackTicks`, `brain`, `DATA_LIVING_ENTITY_FLAGS`, `dead`, `DEATH_DURATION`, `deathScore`, `deathTime`, `DEFAULT_BASE_GRAVITY`, `DEFAULT_EYE_HEIGHT`, `EQUIPMENT_SLOT_OFFSET`, `EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT`, `fallFlyTicks`, `HAND_SLOTS`, `hurtDuration`, `hurtTime`, `invulnerableDuration`, `jumping`, `lastHurt`, `lastHurtByPlayer`, `lastHurtByPlayerTime`, `lerpHeadSteps`, `lerpSteps`, `lerpX`, `lerpXRot`, `lerpY`, `lerpYHeadRot`, `lerpYRot`, `lerpZ`, `LIVING_ENTITY_FLAG_IS_USING`, `LIVING_ENTITY_FLAG_OFF_HAND`, `LIVING_ENTITY_FLAG_SPIN_ATTACK`, `MIN_MOVEMENT_DISTANCE`, `noActionTime`, `oAttackAnim`, `oRun`, `PLAYER_HURT_EXPERIENCE_TIME`, `removeArrowTime`, `removeStingerTime`, `rotA`, `rotOffs`, `run`, `SLEEPING_DIMENSIONS`, `SWING_DURATION`, `swinging`, `swingingArm`, `swingTime`, `timeOffs`, `USE_ITEM_INTERVAL`, `useItem`, `useItemRemaining`, `walkAnimation`, `xxa`, `yBodyRot`, `yBodyRotO`, `yHeadRot`, `yHeadRotO`, `yya`, `zza`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `protected ParticleOptions getInkParticle()`
- `protected void defineSynchedData()`
- `protected SoundEvent getSquirtSound()`
- `protected SoundEvent getAmbientSound()`
- `protected SoundEvent getHurtSound(DamageSource p_147124_)`
- `protected SoundEvent getDeathSound()`
- `public void addAdditionalSaveData(CompoundTag p_147122_)`
- `public void readAdditionalSaveData(CompoundTag p_147117_)`
- `public void aiStep()`
- `public boolean hurt(DamageSource p_147114_,  float p_147115_)`
- `private void setDarkTicks(int p_147120_)`
- `public int getDarkTicksRemaining()`
- `public static boolean checkGlowSquidSpawnRules(EntityType<? extends LivingEntity> p_300540_,  ServerLevelAccessor p_297255_,  MobSpawnType p_297489_,  BlockPos p_299141_,  RandomSource p_297395_)`

### Inherited methods
- from `net.minecraft.world.entity.animal.Squid`: `canBeLeashed`, `createAttributes`, `getMovementEmission`, `getSoundVolume`, `getStandingEyeHeight`, `handleEntityEvent`, `hasMovementVector`, `registerGoals`, `setMovementVector`, `travel`
- from `net.minecraft.world.entity.animal.WaterAnimal`: `baseTick`, `canBreatheUnderwater`, `checkSpawnObstruction`, `checkSurfaceWaterAnimalSpawnRules`, `getAmbientSoundInterval`, `getExperienceReward`, `getMobType`, `handleAirSupply`, `isPushedByFluid`
- from `net.minecraft.world.entity.PathfinderMob`: `checkSpawnRules`, `followLeashSpeed`, `getWalkTargetValue`, `getWalkTargetValue`, `isPanicking`, `isPathFinding`, `onLeashDistance`, `shouldStayCloseToLeashHolder`, `tickLeash`
- from `net.minecraft.world.entity.Mob`: `ate`, `canAttackType`, `canFireProjectileWeapon`, `canHoldItem`, `canPickUpLoot`, `canReplaceCurrentItem`, `canReplaceEqualItem`, `canTakeItem`, `checkDespawn`, `checkMobSpawnRules`, `clearRestriction`, `convertTo`, `createBodyControl`, `createMobAttributes`, `createNavigation`, `customServerAiStep`, `doHurtTarget`, `dropCustomDeathLoot`, `dropFromLootTable`, `dropLeash`, `enchantSpawnedArmor`, `enchantSpawnedWeapon`, `equipItemIfPossible`, `finalizeSpawn`, `getArmorSlots`, `getAttackBoundingBox`, `getControllingPassenger`, `getDefaultLootTable`, `getEquipmentDropChance`, `getEquipmentForSlot`, `getHandSlots`, `getHeadRotSpeed`, `getItemBySlot`, `getJumpControl`, `getLeashHolder`, `getLookControl`, `getLootTable`, `getLootTableSeed`, `getMainArm`, `getMaxFallDistance`, `getMaxHeadXRot`, `getMaxHeadYRot`, `getMaxSpawnClusterSize`, `getMoveControl`, `getNavigation`, `getPathfindingMalus`, `getPickResult`, `getPickupReach`, `getRestrictCenter`, `getRestrictRadius`, `getSensing`, `getSpawnType`, `getTarget`, `hasRestriction`, `interact`, `isAggressive`, `isEffectiveAi`, `isLeashed`, `isLeftHanded`, `isMaxGroupSizeReached`, `isNoAi`, `isPersistenceRequired`, `isSpawnCancelled`, `isSunBurnTick`, `isWithinMeleeAttackRange`, `isWithinRestriction`, `isWithinRestriction`, `jumpInFluid`, `jumpInLiquid`, `lookAt`, `mobInteract`, `onOffspringSpawnedFromEgg`, `onPathfindingDone`, `onPathfindingStart`, `pickUpItem`, `playAmbientSound`, `playHurtSound`, `populateDefaultEquipmentEnchantments`, `populateDefaultEquipmentSlots`, `removeAfterChangingDimensions`, `removeAllGoals`, `removeFreeWill`, `removeWhenFarAway`, `requiresCustomPersistence`, `restrictTo`, `sendDebugPackets`, `serverAiStep`, `setAggressive`, `setBaby`, `setCanPickUpLoot`, `setDelayedLeashHolderId`, `setDropChance`, `setGuaranteedDrop`, `setItemSlot`, `setItemSlotAndDropWhenKilled`, `setLeashedTo`, `setLeftHanded`, `setNoAi`, `setPathfindingMalus`, `setPersistenceRequired`, `setSpawnCancelled`, `setSpeed`, `setTarget`, `setXxa`, `setYya`, `setZza`, `shouldDespawnInPeaceful`, `shouldPassengersInheritMalus`, `spawnAnim`, `startRiding`, `tick`, `tickHeadTurn`, `updateControlFlags`, `wantsToPickUp`
- from `net.minecraft.world.entity.LivingEntity`: `actuallyHurt`, `addEffect`, `addEffect`, `animateHurt`, `areAllEffectsAmbient`, `attackable`, `blockedByShield`, `blockUsingShield`, `brainProvider`, `broadcastBreakEvent`, `broadcastBreakEvent`, `calculateEntityAnimation`, `calculateFallDamage`, `canAttack`, `canAttack`, `canBeAffected`, `canBeSeenAsEnemy`, `canBeSeenByAnyone`, `canChangeDimensions`, `canDisableShield`, `canFreeze`, `canSpawnSoulSpeedParticle`, `canStandOnFluid`, `causeFallDamage`, `checkAutoSpinAttack`, `checkFallDamage`, `clearSleepingPos`, `completeUsingItem`, `createLivingAttributes`, `createWitherRose`, `curePotionEffects`, `decreaseAirSupply`, `die`, `doAutoAttackOnTouch`, `doesEmitEquipEvent`, `doPush`, `dropAllDeathLoot`, `dropEquipment`, `dropExperience`, `eat`, `equipmentHasChanged`, `forceAddEffect`, `getAbsorptionAmount`, `getActiveEffects`, `getActiveEffectsMap`, `getArmorCoverPercentage`, `getArmorValue`, `getArrowCount`, `getAttackAnim`, `getAttribute`, `getAttributeBaseValue`, `getAttributeBaseValue`, `getAttributes`, `getAttributeValue`, `getAttributeValue`, `getBedOrientation`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getBrain`, `getCapability`, `getCombatTracker`, `getDamageAfterArmorAbsorb`, `getDamageAfterMagicAbsorb`, `getDimensions`, `getDismountPoses`, `getDrinkingSound`, `getEatingSound`, `getEffect`, `getEquipmentSlotForItem`, `getEyeHeight`, `getFallFlyingTicks`, `getFallSounds`, `getFluidFallingAdjustedMovement`, `getFlyingSpeed`, `getHealth`, `getHitbox`, `getHurtDir`, `getItemInHand`, `getJumpBoostPower`, `getJumpPower`, `getKillCredit`, `getLastAttacker`, `getLastClimbablePos`, `getLastDamageSource`, `getLastHurtByMob`, `getLastHurtByMobTimestamp`, `getLastHurtMob`, `getLastHurtMobTimestamp`, `getLocalBoundsForPose`, `getMainHandItem`, `getMaxAbsorption`, `getMaxHealth`, `getMyRidingOffset`, `getNoActionTime`, `getOffhandItem`, `getPassengerRidingPosition`, `getProjectile`, `getRandom`, `getRelativePortalPosition`, `getRiddenInput`, `getRiddenSpeed`, `getScale`, `getSleepingPos`, `getSlot`, `getSpeed`, `getStingerCount`, `getSwimAmount`, `getTicksUsingItem`, `getUsedItemHand`, `getUseItem`, `getUseItemRemainingTicks`, `getViewYRot`, `getVisibilityPercent`, `getVisualRotationYInDegrees`, `getVoicePitch`, `getWaterSlowDown`, `getYHeadRot`, `goDownInWater`, `handleDamageEvent`, `handleRelativeFrictionAndCalculateMovement`, `hasEffect`, `hasItemInSlot`, `hasLineOfSight`, `heal`, `hurtArmor`, `hurtCurrentlyUsedShield`, `hurtHelmet`, `increaseAirSupply`, `indicateDamage`, `internalSetAbsorptionAmount`, `invalidateCaps`, `isAffectedByFluids`, `isAffectedByPotions`, `isAlive`, `isAlwaysExperienceDropper`, `isAutoSpinAttack`, `isBaby`, `isBlocking`, `isCurrentlyGlowing`, `isDamageSourceBlocked`, `isDeadOrDying`, `isFallFlying`, `isHolding`, `isHolding`, `isImmobile`, `isInvertedHealAndHarm`, `isInWall`, `isPickable`, `isPushable`, `isSensitiveToWater`, `isSleeping`, `isSuppressingSlidingDownLadder`, `isUsingItem`, `isVisuallySwimming`, `jumpFromGround`, `kill`, `knockback`, `lerpHeadRotationStep`, `lerpHeadTo`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `lookAt`, `makeBrain`, `maxUpStep`, `onBelowWorld`, `onChangedBlock`, `onClimbable`, `onEffectAdded`, `onEffectRemoved`, `onEffectUpdated`, `onEnterCombat`, `onEquipItem`, `onItemPickup`, `onLeaveCombat`, `onSoulSpeedBlock`, `onSyncedDataUpdated`, `playBlockFallSound`, `push`, `pushEntities`, `randomTeleport`, `recreateFromPacket`, `releaseUsingItem`, `remove`, `removeAllEffects`, `removeEffect`, `removeEffectNoUpdate`, `removeEffectParticles`, `removeFrost`, `removeSoulSpeed`, `resetForwardDirectionOfRelativePortalPosition`, `reviveCaps`, `rideTick`, `sendEffectToPassengers`, `setAbsorptionAmount`, `setArrowCount`, `setDiscardFriction`, `setHealth`, `setItemInHand`, `setJumping`, `setLastHurtByMob`, `setLastHurtByPlayer`, `setLastHurtMob`, `setLivingEntityFlag`, `setNoActionTime`, `setRecordPlayingNearby`, `setSleepingPos`, `setSprinting`, `setStingerCount`, `setYBodyRot`, `setYHeadRot`, `shouldDiscardFriction`, `shouldDropExperience`, `shouldDropLoot`, `shouldRemoveSoulSpeed`, `shouldRiderFaceForward`, `shouldShowName`, `skipDropExperience`, `spawnSoulSpeedParticle`, `startSleeping`, `startUsingItem`, `stopRiding`, `stopSleeping`, `stopUsingItem`, `swing`, `swing`, `take`, `tickDeath`, `tickEffects`, `tickRidden`, `triggerItemUseEffects`, `tryAddFrost`, `tryAddSoulSpeed`, `updateEffectVisibility`, `updateInvisibilityStatus`, `updateSwingTime`, `updateUsingItem`, `updateWalkAnimation`, `verifyEquippedItem`, `wasExperienceConsumed`, `wouldNotSuffocateAtTargetPose`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canCollideWith`, `canControlVehicle`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxHeightFluidType`, `getMotionDirection`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYRot`, `getZ`, `getZ`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `killedEntity`, `lavaHurt`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `refreshDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startSeenByPlayer`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getEyeInFluidType`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getFluidTypeHeight`, `getMaxHeightFluidType`, `getParts`, `getPersistentData`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isAddedToWorld`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `onAddedToWorld`, `onRemovedFromWorld`, `revive`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraftforge.common.extensions.IForgeLivingEntity`: `canDrownInFluidType`, `canSwimInFluidType`, `moveInFluid`, `self`, `sinkInFluid`

## HasCustomInventoryScreen

*interface* `net.minecraft.world.entity.HasCustomInventoryScreen`

### Methods
- `void openCustomInventoryScreen(Player p_217023_)`

## Interaction

*class* `net.minecraft.world.entity.Interaction`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final EntityDataAccessor<Float> DATA_WIDTH_ID`
- `private static final EntityDataAccessor<Float> DATA_HEIGHT_ID`
- `private static final EntityDataAccessor<Boolean> DATA_RESPONSE_ID`
- `private static final String TAG_WIDTH` (= "width")
- `private static final String TAG_HEIGHT` (= "height")
- `private static final String TAG_ATTACK` (= "attack")
- `private static final String TAG_INTERACTION` (= "interaction")
- `private static final String TAG_RESPONSE` (= "response")
- `@Nullable private Interaction.PlayerAction attack`
- `@Nullable private Interaction.PlayerAction interaction`

### Inherited fields
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `protected void defineSynchedData()`
- `protected void readAdditionalSaveData(CompoundTag p_272702_)`
- `protected void addAdditionalSaveData(CompoundTag p_273772_)`
- `public void onSyncedDataUpdated(EntityDataAccessor<?> p_272722_)`
- `public boolean canBeHitByProjectile()`
- `public boolean isPickable()`
- `public PushReaction getPistonPushReaction()`
- `public boolean isIgnoringBlockTriggers()`
- `public boolean skipAttackInteraction(Entity p_273553_)`
- `public InteractionResult interact(Player p_273507_,  InteractionHand p_273048_)`
- `public void tick()`
- `@Nullable public LivingEntity getLastAttacker()`
- `@Nullable public LivingEntity getTarget()`
- `private void setWidth(float p_273385_)`
- `private float getWidth()`
- `private void setHeight(float p_273733_)`
- `private float getHeight()`
- `private void setResponse(boolean p_273657_)`
- `private boolean getResponse()`
- `private EntityDimensions getDimensions()`
- `public EntityDimensions getDimensions(Pose p_273111_)`
- `protected AABB makeBoundingBox()`

### Inherited methods
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `animateHurt`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canChangeDimensions`, `canCollideWith`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockSpeedFactor`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getBoundingBoxForCulling`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPickResult`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRelativePortalPosition`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSlot`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `hurt`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushable`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpMotion`, `lerpPositionAndRotationStep`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `push`, `reapplyPosition`, `recreateFromPacket`, `refreshDimensions`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `shouldShowName`, `showVehicleHealth`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateInWaterStateAndDoWaterCurrentPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## Interaction.PlayerAction

*record* `net.minecraft.world.entity.Interaction.PlayerAction`

Enclosing class: Interaction

### Fields
- `private final UUID player`
  The field for the player record component.
- `private final long timestamp`
  The field for the timestamp record component.
- `public static final com.mojang.serialization.Codec<Interaction.PlayerAction> CODEC`

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public UUID player()`
  Returns the value of the player record component.
  - returns: the value of the player record component
- `public long timestamp()`
  Returns the value of the timestamp record component.
  - returns: the value of the timestamp record component

## ItemBasedSteering

*class* `net.minecraft.world.entity.ItemBasedSteering`

### Fields
- `private static final int MIN_BOOST_TIME` (= 140)
- `private static final int MAX_BOOST_TIME` (= 700)
- `private final SynchedEntityData entityData`
- `private final EntityDataAccessor<Integer> boostTimeAccessor`
- `private final EntityDataAccessor<Boolean> hasSaddleAccessor`
- `private boolean boosting`
- `private int boostTime`

### Methods
- `public void onSynced()`
- `public boolean boost(RandomSource p_217033_)`
- `public void tickBoost()`
- `public float boostFactor()`
- `private int boostTimeTotal()`
- `public void addAdditionalSaveData(CompoundTag p_20848_)`
- `public void readAdditionalSaveData(CompoundTag p_20853_)`
- `public void setSaddle(boolean p_20850_)`
- `public boolean hasSaddle()`

## ItemSteerable

*interface* `net.minecraft.world.entity.ItemSteerable`

### Methods
- `boolean boost()`

## LerpingModel

*interface* `net.minecraft.world.entity.LerpingModel`

### Methods
- `Map<String,org.joml.Vector3f> getModelRotationValues()`

## LightningBolt

*class* `net.minecraft.world.entity.LightningBolt`

### Fields
- `private static final int START_LIFE` (= 2)
- `private static final double DAMAGE_RADIUS` (= 3.0)
- `private static final double DETECTION_RADIUS` (= 15.0)
- `private int life`
- `public long seed`
- `private int flashes`
- `private boolean visualOnly`
- `@Nullable private ServerPlayer cause`
- `private final Set<Entity> hitEntities`
- `private int blocksSetOnFire`
- `private float damage`

### Inherited fields
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `public void setVisualOnly(boolean p_20875_)`
- `public SoundSource getSoundSource()`
- `@Nullable public ServerPlayer getCause()`
- `public void setCause(@Nullable  ServerPlayer p_20880_)`
- `private void powerLightningRod()`
- `public void setDamage(float damage)`
- `public float getDamage()`
- `public void tick()`
- `private BlockPos getStrikePosition()`
- `private void spawnFire(int p_20871_)`
- `private static void clearCopperOnLightningStrike(Level p_147151_,  BlockPos p_147152_)`
- `private static void randomWalkCleaningCopper(Level p_147146_,  BlockPos p_147147_,  BlockPos.MutableBlockPos p_147148_,  int p_147149_)`
- `private static Optional<BlockPos> randomStepCleaningCopper(Level p_147154_,  BlockPos p_147155_)`
- `public boolean shouldRenderAtSqrDistance(double p_20869_)`
- `protected void defineSynchedData()`
- `protected void readAdditionalSaveData(CompoundTag p_20873_)`
- `protected void addAdditionalSaveData(CompoundTag p_20877_)`
- `public int getBlocksSetOnFire()`
- `public Stream<Entity> getHitEntities()`

### Inherited methods
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `animateHurt`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canCollideWith`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockSpeedFactor`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getBoundingBoxForCulling`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPickResult`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRelativePortalPosition`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSlot`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `hurt`, `ignoreExplosion`, `interact`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPickable`, `isPushable`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpMotion`, `lerpPositionAndRotationStep`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `push`, `reapplyPosition`, `recreateFromPacket`, `refreshDimensions`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldShowName`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateInWaterStateAndDoWaterCurrentPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## LivingEntity

*class* `net.minecraft.world.entity.LivingEntity`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final String TAG_ACTIVE_EFFECTS` (= "active_effects")
- `private static final UUID SPEED_MODIFIER_SOUL_SPEED_UUID`
- `private static final UUID SPEED_MODIFIER_POWDER_SNOW_UUID`
- `private static final UUID SLOW_FALLING_ID`
- `private static final AttributeModifier SPEED_MODIFIER_SPRINTING`
- `private static final AttributeModifier SLOW_FALLING`
- `public static final int HAND_SLOTS` (= 2)
- `public static final int ARMOR_SLOTS` (= 4)
- `public static final int EQUIPMENT_SLOT_OFFSET` (= 98)
- `public static final int ARMOR_SLOT_OFFSET` (= 100)
- `public static final int SWING_DURATION` (= 6)
- `public static final int PLAYER_HURT_EXPERIENCE_TIME` (= 100)
- `private static final int DAMAGE_SOURCE_TIMEOUT` (= 40)
- `public static final double MIN_MOVEMENT_DISTANCE` (= 0.003)
- `public static final double DEFAULT_BASE_GRAVITY` (= 0.08)
- `public static final int DEATH_DURATION` (= 20)
- `private static final int WAIT_TICKS_BEFORE_ITEM_USE_EFFECTS` (= 7)
- `private static final int TICKS_PER_ELYTRA_FREE_FALL_EVENT` (= 10)
- `private static final int FREE_FALL_EVENTS_PER_ELYTRA_BREAK` (= 2)
- `public static final int USE_ITEM_INTERVAL` (= 4)
- `private static final float BASE_JUMP_POWER` (= 0.41999998688697815f)
- `private static final double MAX_LINE_OF_SIGHT_TEST_RANGE` (= 128.0)
- `protected static final int LIVING_ENTITY_FLAG_IS_USING` (= 1)
- `protected static final int LIVING_ENTITY_FLAG_OFF_HAND` (= 2)
- `protected static final int LIVING_ENTITY_FLAG_SPIN_ATTACK` (= 4)
- `protected static final EntityDataAccessor<Byte> DATA_LIVING_ENTITY_FLAGS`
- `private static final EntityDataAccessor<Float> DATA_HEALTH_ID`
- `private static final EntityDataAccessor<Integer> DATA_EFFECT_COLOR_ID`
- `private static final EntityDataAccessor<Boolean> DATA_EFFECT_AMBIENCE_ID`
- `private static final EntityDataAccessor<Integer> DATA_ARROW_COUNT_ID`
- `private static final EntityDataAccessor<Integer> DATA_STINGER_COUNT_ID`
- `private static final EntityDataAccessor<Optional<BlockPos>> SLEEPING_POS_ID`
- `protected static final float DEFAULT_EYE_HEIGHT` (= 1.7400000095367432f)
- `protected static final EntityDimensions SLEEPING_DIMENSIONS`
- `public static final float EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT` (= 0.5f)
- `private static final int MAX_HEAD_ROTATION_RELATIVE_TO_BODY` (= 50)
- `private final AttributeMap attributes`
- `private final CombatTracker combatTracker`
- `private final Map<MobEffect,MobEffectInstance> activeEffects`
- `private final NonNullList<ItemStack> lastHandItemStacks`
- `private final NonNullList<ItemStack> lastArmorItemStacks`
- `public boolean swinging`
- `private boolean discardFriction`
- `public InteractionHand swingingArm`
- `public int swingTime`
- `public int removeArrowTime`
- `public int removeStingerTime`
- `public int hurtTime`
- `public int hurtDuration`
- `public int deathTime`
- `public float oAttackAnim`
- `public float attackAnim`
- `protected int attackStrengthTicker`
- `public final WalkAnimationState walkAnimation`
- `public final int invulnerableDuration` (= 20)
- `public final float timeOffs`
- `public final float rotA`
- `public float yBodyRot`
- `public float yBodyRotO`
- `public float yHeadRot`
- `public float yHeadRotO`
- `@Nullable protected Player lastHurtByPlayer`
- `protected int lastHurtByPlayerTime`
- `protected boolean dead`
- `protected int noActionTime`
- `protected float oRun`
- `protected float run`
- `protected float animStep`
- `protected float animStepO`
- `protected float rotOffs`
- `protected int deathScore`
- `protected float lastHurt`
- `protected boolean jumping`
- `public float xxa`
- `public float yya`
- `public float zza`
- `protected int lerpSteps`
- `protected double lerpX`
- `protected double lerpY`
- `protected double lerpZ`
- `protected double lerpYRot`
- `protected double lerpXRot`
- `protected double lerpYHeadRot`
- `protected int lerpHeadSteps`
- `private boolean effectsDirty`
- `@Nullable private LivingEntity lastHurtByMob`
- `private int lastHurtByMobTimestamp`
- `private LivingEntity lastHurtMob`
- `private int lastHurtMobTimestamp`
- `private float speed`
- `private int noJumpDelay`
- `private float absorptionAmount`
- `protected ItemStack useItem`
- `protected int useItemRemaining`
- `protected int fallFlyTicks`
- `private BlockPos lastPos`
- `private Optional<BlockPos> lastClimbablePos`
- `@Nullable private DamageSource lastDamageSource`
- `private long lastDamageStamp`
- `protected int autoSpinAttackTicks`
- `private float swimAmount`
- `private float swimAmountO`
- `protected Brain<?> brain`
- `private boolean skipDropExperience`
- `private LazyOptional<?>[] handlers`

### Inherited fields
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `public Brain<?> getBrain()`
- `protected Brain.Provider<?> brainProvider()`
- `protected Brain<?> makeBrain(com.mojang.serialization.Dynamic<?> p_21069_)`
- `public void kill()`
- `public boolean canAttackType(EntityType<?> p_21032_)`
- `protected void defineSynchedData()`
- `public static AttributeSupplier.Builder createLivingAttributes()`
- `protected void checkFallDamage(double p_20990_,  boolean p_20991_,  BlockState p_20992_,  BlockPos p_20993_)`
- `@Deprecated public boolean canBreatheUnderwater()` (deprecated)
- `public float getSwimAmount(float p_20999_)`
- `public void baseTick()`
- `public boolean canSpawnSoulSpeedParticle()`
- `protected void spawnSoulSpeedParticle()`
- `protected boolean onSoulSpeedBlock()`
- `protected float getBlockSpeedFactor()`
- `protected boolean shouldRemoveSoulSpeed(BlockState p_21140_)`
- `protected void removeSoulSpeed()`
- `protected void tryAddSoulSpeed()`
- `protected void removeFrost()`
- `protected void tryAddFrost()`
- `protected void onChangedBlock(BlockPos p_21175_)`
- `public boolean isBaby()`
- `public float getScale()`
- `protected boolean isAffectedByFluids()`
- `protected void tickDeath()`
- `public boolean shouldDropExperience()`
- `protected boolean shouldDropLoot()`
- `protected int decreaseAirSupply(int p_21303_)`
- `protected int increaseAirSupply(int p_21307_)`
- `public int getExperienceReward()`
- `protected boolean isAlwaysExperienceDropper()`
- `public RandomSource getRandom()`
- `@Nullable public LivingEntity getLastHurtByMob()`
- `public LivingEntity getLastAttacker()`
- `public int getLastHurtByMobTimestamp()`
- `public void setLastHurtByPlayer(@Nullable  Player p_21248_)`
- `public void setLastHurtByMob(@Nullable  LivingEntity p_21039_)`
- `@Nullable public LivingEntity getLastHurtMob()`
- `public int getLastHurtMobTimestamp()`
- `public void setLastHurtMob(Entity p_21336_)`
- `public int getNoActionTime()`
- `public void setNoActionTime(int p_21311_)`
- `public boolean shouldDiscardFriction()`
- `public void setDiscardFriction(boolean p_147245_)`
- `protected boolean doesEmitEquipEvent(EquipmentSlot p_217035_)`
- `public void onEquipItem(EquipmentSlot p_238393_,  ItemStack p_238394_,  ItemStack p_238395_)`
- `public void remove(Entity.RemovalReason p_276115_)`
- `public void addAdditionalSaveData(CompoundTag p_21145_)`
- `public void readAdditionalSaveData(CompoundTag p_21096_)`
- `protected void tickEffects()`
- `protected void updateInvisibilityStatus()`
- `private void updateGlowingStatus()`
- `public double getVisibilityPercent(@Nullable  Entity p_20969_)`
- `public boolean canAttack(LivingEntity p_21171_)`
- `public boolean canAttack(LivingEntity p_21041_,  TargetingConditions p_21042_)`
- `public boolean canBeSeenAsEnemy()`
- `public boolean canBeSeenByAnyone()`
- `public static boolean areAllEffectsAmbient(Collection<MobEffectInstance> p_21180_)`
- `protected void removeEffectParticles()`
- `public boolean removeAllEffects()`
- `public Collection<MobEffectInstance> getActiveEffects()`
- `public Map<MobEffect,MobEffectInstance> getActiveEffectsMap()`
- `public boolean hasEffect(MobEffect p_21024_)`
- `@Nullable public MobEffectInstance getEffect(MobEffect p_21125_)`
- `public final boolean addEffect(MobEffectInstance p_21165_)`
- `public boolean addEffect(MobEffectInstance p_147208_,  @Nullable  Entity p_147209_)`
- `public boolean canBeAffected(MobEffectInstance p_21197_)`
- `public void forceAddEffect(MobEffectInstance p_147216_,  @Nullable  Entity p_147217_)`
- `public boolean isInvertedHealAndHarm()`
- `@Nullable public MobEffectInstance removeEffectNoUpdate(@Nullable  MobEffect p_21164_)`
- `public boolean removeEffect(MobEffect p_21196_)`
- `protected void onEffectAdded(MobEffectInstance p_147190_,  @Nullable  Entity p_147191_)`
- `public void sendEffectToPassengers(MobEffectInstance p_289695_)`
- `protected void onEffectUpdated(MobEffectInstance p_147192_,  boolean p_147193_,  @Nullable  Entity p_147194_)`
- `protected void onEffectRemoved(MobEffectInstance p_21126_)`
- `private void refreshDirtyAttributes()`
- `private void onAttributeUpdated(Attribute p_298194_)`
- `public void heal(float p_21116_)`
- `public float getHealth()`
- `public void setHealth(float p_21154_)`
- `public boolean isDeadOrDying()`
- `public boolean hurt(DamageSource p_21016_,  float p_21017_)`
- `protected void blockUsingShield(LivingEntity p_21200_)`
- `protected void blockedByShield(LivingEntity p_21246_)`
- `private boolean checkTotemDeathProtection(DamageSource p_21263_)`
- `@Nullable public DamageSource getLastDamageSource()`
- `protected void playHurtSound(DamageSource p_21160_)`
- `public boolean isDamageSourceBlocked(DamageSource p_21276_)`
- `private void breakItem(ItemStack p_21279_)`
- `public void die(DamageSource p_21014_)`
- `protected void createWitherRose(@Nullable  LivingEntity p_21269_)`
- `protected void dropAllDeathLoot(DamageSource p_21192_)`
- `protected void dropEquipment()`
- `protected void dropExperience()`
- `protected void dropCustomDeathLoot(DamageSource p_21018_,  int p_21019_,  boolean p_21020_)`
- `public ResourceLocation getLootTable()`
- `public long getLootTableSeed()`
- `protected void dropFromLootTable(DamageSource p_21021_,  boolean p_21022_)`
- `public void knockback(double p_147241_,  double p_147242_,  double p_147243_)`
- `public void indicateDamage(double p_270514_,  double p_270826_)`
- `@Nullable protected SoundEvent getHurtSound(DamageSource p_21239_)`
- `@Nullable protected SoundEvent getDeathSound()`
- `private SoundEvent getFallDamageSound(int p_21313_)`
- `public void skipDropExperience()`
- `public boolean wasExperienceConsumed()`
- `public float getHurtDir()`
- `protected AABB getHitbox()`
- `public LivingEntity.Fallsounds getFallSounds()`
- `protected SoundEvent getDrinkingSound(ItemStack p_21174_)`
- `public SoundEvent getEatingSound(ItemStack p_21202_)`
- `public Optional<BlockPos> getLastClimbablePos()`
- `public boolean onClimbable()`
- `private boolean trapdoorUsableAsLadder(BlockPos p_21177_,  BlockState p_21178_)`
- `public boolean isAlive()`
- `public boolean causeFallDamage(float p_147187_,  float p_147188_,  DamageSource p_147189_)`
- `protected int calculateFallDamage(float p_21237_,  float p_21238_)`
- `protected void playBlockFallSound()`
- `public void animateHurt(float p_265265_)`
- `public int getArmorValue()`
- `protected void hurtArmor(DamageSource p_21122_,  float p_21123_)`
- `protected void hurtHelmet(DamageSource p_147213_,  float p_147214_)`
- `protected void hurtCurrentlyUsedShield(float p_21316_)`
- `protected float getDamageAfterArmorAbsorb(DamageSource p_21162_,  float p_21163_)`
- `protected float getDamageAfterMagicAbsorb(DamageSource p_21193_,  float p_21194_)`
- `protected void actuallyHurt(DamageSource p_21240_,  float p_21241_)`
- `public CombatTracker getCombatTracker()`
- `@Nullable public LivingEntity getKillCredit()`
- `public final float getMaxHealth()`
- `public final float getMaxAbsorption()`
- `public final int getArrowCount()`
- `public final void setArrowCount(int p_21318_)`
- `public final int getStingerCount()`
- `public final void setStingerCount(int p_21322_)`
- `private int getCurrentSwingDuration()`
- `public void swing(InteractionHand p_21007_)`
- `public void swing(InteractionHand p_21012_,  boolean p_21013_)`
- `public void handleDamageEvent(DamageSource p_270229_)`
- `public void handleEntityEvent(byte p_20975_)`
- `private void makePoofParticles()`
- `private void swapHandItems()`
- `protected void onBelowWorld()`
- `protected void updateSwingTime()`
- `@Nullable public AttributeInstance getAttribute(Attribute p_21052_)`
- `public double getAttributeValue(Holder<Attribute> p_251296_)`
- `public double getAttributeValue(Attribute p_21134_)`
- `public double getAttributeBaseValue(Holder<Attribute> p_248605_)`
- `public double getAttributeBaseValue(Attribute p_21173_)`
- `public AttributeMap getAttributes()`
- `public MobType getMobType()`
- `public ItemStack getMainHandItem()`
- `public ItemStack getOffhandItem()`
- `public boolean isHolding(Item p_21056_)`
- `public boolean isHolding(Predicate<ItemStack> p_21094_)`
- `public ItemStack getItemInHand(InteractionHand p_21121_)`
- `public void setItemInHand(InteractionHand p_21009_,  ItemStack p_21010_)`
- `public boolean hasItemInSlot(EquipmentSlot p_21034_)`
- `public abstract Iterable<ItemStack> getArmorSlots()`
- `public abstract ItemStack getItemBySlot(EquipmentSlot p_21127_)`
- `public abstract void setItemSlot(EquipmentSlot p_21036_,  ItemStack p_21037_)`
- `protected void verifyEquippedItem(ItemStack p_181123_)`
- `public float getArmorCoverPercentage()`
- `public void setSprinting(boolean p_21284_)`
- `protected float getSoundVolume()`
- `public float getVoicePitch()`
- `protected boolean isImmobile()`
- `public void push(Entity p_21294_)`
- `private void dismountVehicle(Entity p_21029_)`
- `public boolean shouldShowName()`
- `protected float getJumpPower()`
- `public float getJumpBoostPower()`
- `protected void jumpFromGround()`
- `@Deprecated protected void goDownInWater()` (deprecated)
- `@Deprecated protected void jumpInLiquid(TagKey<Fluid> p_204043_)` (deprecated)
- `protected float getWaterSlowDown()`
- `public boolean canStandOnFluid(FluidState p_204042_)`
- `public void travel(Vec3 p_21280_)`
- `private void travelRidden(Player p_278244_,  Vec3 p_278231_)`
- `protected void tickRidden(Player p_278262_,  Vec3 p_275242_)`
- `protected Vec3 getRiddenInput(Player p_278326_,  Vec3 p_275300_)`
- `protected float getRiddenSpeed(Player p_278286_)`
- `public void calculateEntityAnimation(boolean p_268129_)`
- `protected void updateWalkAnimation(float p_268283_)`
- `public Vec3 handleRelativeFrictionAndCalculateMovement(Vec3 p_21075_,  float p_21076_)`
- `public Vec3 getFluidFallingAdjustedMovement(double p_20995_,  boolean p_20996_,  Vec3 p_20997_)`
- `private Vec3 handleOnClimbable(Vec3 p_21298_)`
- `private float getFrictionInfluencedSpeed(float p_21331_)`
- `protected float getFlyingSpeed()`
- `public float getSpeed()`
- `public void setSpeed(float p_21320_)`
- `public boolean doHurtTarget(Entity p_20970_)`
- `public void tick()`
- `private void detectEquipmentUpdates()`
- `@Nullable private Map<EquipmentSlot,ItemStack> collectEquipmentChanges()`
- `public boolean equipmentHasChanged(ItemStack p_252265_,  ItemStack p_251043_)`
- `private void handleHandSwap(Map<EquipmentSlot,ItemStack> p_21092_)`
- `private void handleEquipmentChanges(Map<EquipmentSlot,ItemStack> p_21143_)`
- `private ItemStack getLastArmorItem(EquipmentSlot p_21199_)`
- `private void setLastArmorItem(EquipmentSlot p_21129_,  ItemStack p_21130_)`
- `private ItemStack getLastHandItem(EquipmentSlot p_21245_)`
- `private void setLastHandItem(EquipmentSlot p_21169_,  ItemStack p_21170_)`
- `protected float tickHeadTurn(float p_21260_,  float p_21261_)`
- `public void aiStep()`
- `public boolean isSensitiveToWater()`
- `private void updateFallFlying()`
- `protected void serverAiStep()`
- `protected void pushEntities()`
- `protected void checkAutoSpinAttack(AABB p_21072_,  AABB p_21073_)`
- `protected void doPush(Entity p_20971_)`
- `protected void doAutoAttackOnTouch(LivingEntity p_21277_)`
- `public boolean isAutoSpinAttack()`
- `public void stopRiding()`
- `public void rideTick()`
- `public void lerpTo(double p_20977_,  double p_20978_,  double p_20979_,  float p_20980_,  float p_20981_,  int p_20982_)`
- `public double lerpTargetX()`
- `public double lerpTargetY()`
- `public double lerpTargetZ()`
- `public float lerpTargetXRot()`
- `public float lerpTargetYRot()`
- `public void lerpHeadTo(float p_21005_,  int p_21006_)`
- `public void setJumping(boolean p_21314_)`
- `public void onItemPickup(ItemEntity p_21054_)`
- `public void take(Entity p_21030_,  int p_21031_)`
- `public boolean hasLineOfSight(Entity p_147185_)`
- `public float getViewYRot(float p_21286_)`
- `public float getAttackAnim(float p_21325_)`
- `public boolean isPickable()`
- `public boolean isPushable()`
- `public float getYHeadRot()`
- `public void setYHeadRot(float p_21306_)`
- `public void setYBodyRot(float p_21309_)`
- `protected Vec3 getRelativePortalPosition(Direction.Axis p_21085_,  BlockUtil.FoundRectangle p_21086_)`
- `public static Vec3 resetForwardDirectionOfRelativePortalPosition(Vec3 p_21290_)`
- `public float getAbsorptionAmount()`
- `public final void setAbsorptionAmount(float p_21328_)`
- `protected void internalSetAbsorptionAmount(float p_299471_)`
- `public void onEnterCombat()`
- `public void onLeaveCombat()`
- `protected void updateEffectVisibility()`
- `public abstract HumanoidArm getMainArm()`
- `public boolean isUsingItem()`
- `public InteractionHand getUsedItemHand()`
- `private void updatingUsingItem()`
- `protected void updateUsingItem(ItemStack p_147201_)`
- `private boolean shouldTriggerItemUseEffects()`
- `private void updateSwimAmount()`
- `protected void setLivingEntityFlag(int p_21156_,  boolean p_21157_)`
- `public void startUsingItem(InteractionHand p_21159_)`
- `public void onSyncedDataUpdated(EntityDataAccessor<?> p_21104_)`
- `public void lookAt(EntityAnchorArgument.Anchor p_21078_,  Vec3 p_21079_)`
- `protected void triggerItemUseEffects(ItemStack p_21138_,  int p_21139_)`
- `private void spawnItemParticles(ItemStack p_21061_,  int p_21062_)`
- `protected void completeUsingItem()`
- `public ItemStack getUseItem()`
- `public int getUseItemRemainingTicks()`
- `public int getTicksUsingItem()`
- `public void releaseUsingItem()`
- `public void stopUsingItem()`
- `public boolean isBlocking()`
- `public boolean isSuppressingSlidingDownLadder()`
- `public boolean isFallFlying()`
- `public boolean isVisuallySwimming()`
- `public int getFallFlyingTicks()`
- `public boolean randomTeleport(double p_20985_,  double p_20986_,  double p_20987_,  boolean p_20988_)`
- `public boolean isAffectedByPotions()`
- `public boolean attackable()`
- `public void setRecordPlayingNearby(BlockPos p_21082_,  boolean p_21083_)`
- `public boolean canTakeItem(ItemStack p_21249_)`
- `public EntityDimensions getDimensions(Pose p_21047_)`
- `public com.google.common.collect.ImmutableList<Pose> getDismountPoses()`
- `public AABB getLocalBoundsForPose(Pose p_21271_)`
- `protected boolean wouldNotSuffocateAtTargetPose(Pose p_297537_)`
- `public boolean canChangeDimensions()`
- `public Optional<BlockPos> getSleepingPos()`
- `public void setSleepingPos(BlockPos p_21251_)`
- `public void clearSleepingPos()`
- `public boolean isSleeping()`
- `public void startSleeping(BlockPos p_21141_)`
- `private void setPosToBed(BlockPos p_21081_)`
- `private boolean checkBedExists()`
- `public void stopSleeping()`
- `@Nullable public Direction getBedOrientation()`
- `public boolean isInWall()`
- `protected final float getEyeHeight(Pose p_21049_,  EntityDimensions p_21050_)`
- `protected float getStandingEyeHeight(Pose p_21131_,  EntityDimensions p_21132_)`
- `public ItemStack getProjectile(ItemStack p_21272_)`
- `public ItemStack eat(Level p_21067_,  ItemStack p_21068_)`
- `private void addEatEffect(ItemStack p_21064_,  Level p_21065_,  LivingEntity p_21066_)`
- `private static byte entityEventForEquipmentBreak(EquipmentSlot p_21267_)`
- `public void broadcastBreakEvent(EquipmentSlot p_21167_)`
- `public void broadcastBreakEvent(InteractionHand p_21191_)`
- `public boolean curePotionEffects(ItemStack curativeItem)`
  Removes all potion effects that have curativeItem as a curative item for its effect
  - param: curativeItem - The itemstack we are using to cure potion effects
- `public boolean shouldRiderFaceForward(Player player)`
  Returns true if the entity's rider (EntityPlayer) should face forward when mounted.
   currently only used in vanilla code by pigs.
  - param: player - The player who is riding the entity.
  - returns: If the player should orient the same direction as this entity.
- `public <T> LazyOptional<T> getCapability(Capability<T> capability,  @Nullable  Direction facing)`
  Description copied from interface: ICapabilityProvider
  Retrieves the Optional handler for the capability requested on the specific side.
   The return value CAN be the same for multiple faces.
   Modders are encouraged to cache this value, using the listener capabilities of the Optional to
   be notified if the requested capability get lost.
  - param: capability - The capability to check
  - param: facing - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested an optional holding the requested capability.
- `public void invalidateCaps()`
- `public void reviveCaps()`
- `public AABB getBoundingBoxForCulling()`
- `public static EquipmentSlot getEquipmentSlotForItem(ItemStack p_147234_)`
- `private static SlotAccess createEquipmentSlotAccess(LivingEntity p_147196_,  EquipmentSlot p_147197_)`
- `@Nullable private static EquipmentSlot getEquipmentSlot(int p_147212_)`
- `public SlotAccess getSlot(int p_147238_)`
- `public boolean canFreeze()`
- `public boolean isCurrentlyGlowing()`
- `public float getVisualRotationYInDegrees()`
- `public void recreateFromPacket(ClientboundAddEntityPacket p_217037_)`
- `public boolean canDisableShield()`
- `public float maxUpStep()`
- `public Vec3 getPassengerRidingPosition(Entity p_299288_)`
- `public float getMyRidingOffset(Entity p_298892_)`
- `protected void lerpHeadRotationStep(int p_297258_,  double p_301409_)`

### Inherited methods
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canCollideWith`, `canControlVehicle`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPickResult`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYRot`, `getZ`, `getZ`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interact`, `interactAt`, `is`, `isAddedToWorld`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `killedEntity`, `lavaHurt`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `refreshDimensions`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateInWaterStateAndDoWaterCurrentPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getEyeInFluidType`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getFluidTypeHeight`, `getMaxHeightFluidType`, `getParts`, `getPersistentData`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isAddedToWorld`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `onAddedToWorld`, `onRemovedFromWorld`, `revive`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraftforge.common.extensions.IForgeLivingEntity`: `canDrownInFluidType`, `canSwimInFluidType`, `jumpInFluid`, `moveInFluid`, `self`, `sinkInFluid`

## LivingEntity.Fallsounds

*record* `net.minecraft.world.entity.LivingEntity.Fallsounds`

Enclosing class: LivingEntity

### Fields
- `private final SoundEvent small`
  The field for the small record component.
- `private final SoundEvent big`
  The field for the big record component.

### Methods
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
- `public SoundEvent small()`
  Returns the value of the small record component.
  - returns: the value of the small record component
- `public SoundEvent big()`
  Returns the value of the big record component.
  - returns: the value of the big record component

## Marker

*class* `net.minecraft.world.entity.Marker`

### Fields
- `private static final String DATA_TAG` (= "data")
- `private CompoundTag data`

### Inherited fields
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `public void tick()`
- `protected void defineSynchedData()`
- `protected void readAdditionalSaveData(CompoundTag p_147254_)`
- `protected void addAdditionalSaveData(CompoundTag p_147257_)`
- `public Packet<ClientGamePacketListener> getAddEntityPacket()`
- `protected boolean canAddPassenger(Entity p_265289_)`
- `protected boolean couldAcceptPassenger()`
- `protected void addPassenger(Entity p_270306_)`
- `public PushReaction getPistonPushReaction()`
- `public boolean isIgnoringBlockTriggers()`

### Inherited methods
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addTag`, `animateHurt`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canCollideWith`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockSpeedFactor`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getBoundingBoxForCulling`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPickResult`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRelativePortalPosition`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSlot`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `hurt`, `ignoreExplosion`, `interact`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPickable`, `isPushable`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpMotion`, `lerpPositionAndRotationStep`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `push`, `reapplyPosition`, `recreateFromPacket`, `refreshDimensions`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `shouldShowName`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateInWaterStateAndDoWaterCurrentPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## Mob

*class* `net.minecraft.world.entity.Mob`

### Fields
- `private static final EntityDataAccessor<Byte> DATA_MOB_FLAGS_ID`
- `private static final int MOB_FLAG_NO_AI` (= 1)
- `private static final int MOB_FLAG_LEFTHANDED` (= 2)
- `private static final int MOB_FLAG_AGGRESSIVE` (= 4)
- `protected static final int PICKUP_REACH` (= 1)
- `private static final Vec3i ITEM_PICKUP_REACH`
- `public static final float MAX_WEARING_ARMOR_CHANCE` (= 0.15000000596046448f)
- `public static final float MAX_PICKUP_LOOT_CHANCE` (= 0.550000011920929f)
- `public static final float MAX_ENCHANTED_ARMOR_CHANCE` (= 0.5f)
- `public static final float MAX_ENCHANTED_WEAPON_CHANCE` (= 0.25f)
- `public static final String LEASH_TAG` (= "Leash")
- `public static final float DEFAULT_EQUIPMENT_DROP_CHANCE` (= 0.08500000089406967f)
- `public static final int PRESERVE_ITEM_DROP_CHANCE` (= 2)
- `public static final int UPDATE_GOAL_SELECTOR_EVERY_N_TICKS` (= 2)
- `private static final double DEFAULT_ATTACK_REACH`
- `public int ambientSoundTime`
- `protected int xpReward`
- `protected LookControl lookControl`
- `protected MoveControl moveControl`
- `protected JumpControl jumpControl`
- `private final BodyRotationControl bodyRotationControl`
- `protected PathNavigation navigation`
- `public final GoalSelector goalSelector`
- `public final GoalSelector targetSelector`
- `@Nullable private LivingEntity target`
- `private final Sensing sensing`
- `private final NonNullList<ItemStack> handItems`
- `protected final float[] handDropChances`
- `private final NonNullList<ItemStack> armorItems`
- `protected final float[] armorDropChances`
- `private boolean canPickUpLoot`
- `private boolean persistenceRequired`
- `private final Map<BlockPathTypes,Float> pathfindingMalus`
- `@Nullable private ResourceLocation lootTable`
- `private long lootTableSeed`
- `@Nullable private Entity leashHolder`
- `private int delayedLeashHolderId`
- `@Nullable private CompoundTag leashInfoTag`
- `private BlockPos restrictCenter`
- `private float restrictRadius`
- `@Nullable private MobSpawnType spawnType`
- `private boolean spawnCancelled`

### Inherited fields
- from `net.minecraft.world.entity.LivingEntity`: `animStep`, `animStepO`, `ARMOR_SLOT_OFFSET`, `ARMOR_SLOTS`, `attackAnim`, `attackStrengthTicker`, `autoSpinAttackTicks`, `brain`, `DATA_LIVING_ENTITY_FLAGS`, `dead`, `DEATH_DURATION`, `deathScore`, `deathTime`, `DEFAULT_BASE_GRAVITY`, `DEFAULT_EYE_HEIGHT`, `EQUIPMENT_SLOT_OFFSET`, `EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT`, `fallFlyTicks`, `HAND_SLOTS`, `hurtDuration`, `hurtTime`, `invulnerableDuration`, `jumping`, `lastHurt`, `lastHurtByPlayer`, `lastHurtByPlayerTime`, `lerpHeadSteps`, `lerpSteps`, `lerpX`, `lerpXRot`, `lerpY`, `lerpYHeadRot`, `lerpYRot`, `lerpZ`, `LIVING_ENTITY_FLAG_IS_USING`, `LIVING_ENTITY_FLAG_OFF_HAND`, `LIVING_ENTITY_FLAG_SPIN_ATTACK`, `MIN_MOVEMENT_DISTANCE`, `noActionTime`, `oAttackAnim`, `oRun`, `PLAYER_HURT_EXPERIENCE_TIME`, `removeArrowTime`, `removeStingerTime`, `rotA`, `rotOffs`, `run`, `SLEEPING_DIMENSIONS`, `SWING_DURATION`, `swinging`, `swingingArm`, `swingTime`, `timeOffs`, `USE_ITEM_INTERVAL`, `useItem`, `useItemRemaining`, `walkAnimation`, `xxa`, `yBodyRot`, `yBodyRotO`, `yHeadRot`, `yHeadRotO`, `yya`, `zza`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `protected void registerGoals()`
- `public static AttributeSupplier.Builder createMobAttributes()`
- `protected PathNavigation createNavigation(Level p_21480_)`
- `protected boolean shouldPassengersInheritMalus()`
- `public float getPathfindingMalus(BlockPathTypes p_21440_)`
- `public void setPathfindingMalus(BlockPathTypes p_21442_,  float p_21443_)`
- `public void onPathfindingStart()`
- `public void onPathfindingDone()`
- `protected BodyRotationControl createBodyControl()`
- `public LookControl getLookControl()`
- `public MoveControl getMoveControl()`
- `public JumpControl getJumpControl()`
- `public PathNavigation getNavigation()`
- `@Nullable public LivingEntity getControllingPassenger()`
- `public Sensing getSensing()`
- `@Nullable public LivingEntity getTarget()`
- `public void setTarget(@Nullable  LivingEntity p_21544_)`
- `public boolean canAttackType(EntityType<?> p_21399_)`
- `public boolean canFireProjectileWeapon(ProjectileWeaponItem p_21430_)`
- `public void ate()`
- `protected void defineSynchedData()`
- `public int getAmbientSoundInterval()`
- `public void playAmbientSound()`
- `public void baseTick()`
- `protected void playHurtSound(DamageSource p_21493_)`
- `private void resetAmbientSoundTime()`
- `public int getExperienceReward()`
- `public void spawnAnim()`
- `public void handleEntityEvent(byte p_21375_)`
- `public void tick()`
- `protected void updateControlFlags()`
- `protected float tickHeadTurn(float p_21538_,  float p_21539_)`
- `@Nullable protected SoundEvent getAmbientSound()`
- `public void addAdditionalSaveData(CompoundTag p_21484_)`
- `public void readAdditionalSaveData(CompoundTag p_21450_)`
- `protected void dropFromLootTable(DamageSource p_21389_,  boolean p_21390_)`
- `public final ResourceLocation getLootTable()`
- `protected ResourceLocation getDefaultLootTable()`
- `public long getLootTableSeed()`
- `public void setZza(float p_21565_)`
- `public void setYya(float p_21568_)`
- `public void setXxa(float p_21571_)`
- `public void setSpeed(float p_21556_)`
- `public void aiStep()`
- `protected Vec3i getPickupReach()`
- `protected void pickUpItem(ItemEntity p_21471_)`
- `public ItemStack equipItemIfPossible(ItemStack p_255842_)`
- `protected void setItemSlotAndDropWhenKilled(EquipmentSlot p_21469_,  ItemStack p_21470_)`
- `public void setGuaranteedDrop(EquipmentSlot p_21509_)`
- `protected boolean canReplaceCurrentItem(ItemStack p_21428_,  ItemStack p_21429_)`
- `public boolean canReplaceEqualItem(ItemStack p_21478_,  ItemStack p_21479_)`
- `public boolean canHoldItem(ItemStack p_21545_)`
- `public boolean wantsToPickUp(ItemStack p_21546_)`
- `public boolean removeWhenFarAway(double p_21542_)`
- `public boolean requiresCustomPersistence()`
- `protected boolean shouldDespawnInPeaceful()`
- `public void checkDespawn()`
- `protected final void serverAiStep()`
- `protected void sendDebugPackets()`
- `protected void customServerAiStep()`
- `public int getMaxHeadXRot()`
- `public int getMaxHeadYRot()`
- `public int getHeadRotSpeed()`
- `public void lookAt(Entity p_21392_,  float p_21393_,  float p_21394_)`
- `private float rotlerp(float p_21377_,  float p_21378_,  float p_21379_)`
- `public static boolean checkMobSpawnRules(EntityType<? extends Mob> p_217058_,  LevelAccessor p_217059_,  MobSpawnType p_217060_,  BlockPos p_217061_,  RandomSource p_217062_)`
- `public boolean checkSpawnRules(LevelAccessor p_21431_,  MobSpawnType p_21432_)`
- `public boolean checkSpawnObstruction(LevelReader p_21433_)`
- `public int getMaxSpawnClusterSize()`
- `public boolean isMaxGroupSizeReached(int p_21489_)`
- `public int getMaxFallDistance()`
- `public Iterable<ItemStack> getHandSlots()`
- `public Iterable<ItemStack> getArmorSlots()`
- `public ItemStack getItemBySlot(EquipmentSlot p_21467_)`
- `public void setItemSlot(EquipmentSlot p_21416_,  ItemStack p_21417_)`
- `protected void dropCustomDeathLoot(DamageSource p_21385_,  int p_21386_,  boolean p_21387_)`
- `protected float getEquipmentDropChance(EquipmentSlot p_21520_)`
- `protected void populateDefaultEquipmentSlots(RandomSource p_217055_,  DifficultyInstance p_217056_)`
- `@Nullable public static Item getEquipmentForSlot(EquipmentSlot p_21413_,  int p_21414_)`
- `protected void populateDefaultEquipmentEnchantments(RandomSource p_217063_,  DifficultyInstance p_217064_)`
- `protected void enchantSpawnedWeapon(RandomSource p_217049_,  float p_217050_)`
- `protected void enchantSpawnedArmor(RandomSource p_217052_,  float p_217053_,  EquipmentSlot p_217054_)`
- `@Deprecated @OverrideOnly @Nullable public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_21434_,  DifficultyInstance p_21435_,  MobSpawnType p_21436_,  @Nullable  SpawnGroupData p_21437_,  @Nullable  CompoundTag p_21438_)` (deprecated)
  Forge: Override-Only, call via ForgeEventFactory.onFinalizeSpawn.
  
   Overrides are allowed. Do not wrap super calls within override (as that will cause stack overflows).
  
   Vanilla calls are replaced with a transformer, and are not visible in source.
  
   Be certain to either call super.finalizeSpawn or set the spawnType field from within your override.
- `public void setPersistenceRequired()`
- `public void setDropChance(EquipmentSlot p_21410_,  float p_21411_)`
- `public boolean canPickUpLoot()`
- `public void setCanPickUpLoot(boolean p_21554_)`
- `public boolean canTakeItem(ItemStack p_21522_)`
- `public boolean isPersistenceRequired()`
- `public final InteractionResult interact(Player p_21420_,  InteractionHand p_21421_)`
- `private InteractionResult checkAndHandleImportantInteractions(Player p_21500_,  InteractionHand p_21501_)`
- `protected void onOffspringSpawnedFromEgg(Player p_21422_,  Mob p_21423_)`
- `protected InteractionResult mobInteract(Player p_21472_,  InteractionHand p_21473_)`
- `public boolean isWithinRestriction()`
- `public boolean isWithinRestriction(BlockPos p_21445_)`
- `public void restrictTo(BlockPos p_21447_,  int p_21448_)`
- `public BlockPos getRestrictCenter()`
- `public float getRestrictRadius()`
- `public void clearRestriction()`
- `public boolean hasRestriction()`
- `@Nullable public <T extends Mob> T convertTo(EntityType<T> p_21407_,  boolean p_21408_)`
- `protected void tickLeash()`
- `public void dropLeash(boolean p_21456_,  boolean p_21457_)`
- `public boolean canBeLeashed(Player p_21418_)`
- `public boolean isLeashed()`
- `@Nullable public Entity getLeashHolder()`
- `public void setLeashedTo(Entity p_21464_,  boolean p_21465_)`
- `public void setDelayedLeashHolderId(int p_21507_)`
- `public boolean startRiding(Entity p_21396_,  boolean p_21397_)`
- `private void restoreLeashFromSave()`
- `public boolean isEffectiveAi()`
- `public void setNoAi(boolean p_21558_)`
- `public void setLeftHanded(boolean p_21560_)`
- `public void setAggressive(boolean p_21562_)`
- `public boolean isNoAi()`
- `public boolean isLeftHanded()`
- `public boolean isAggressive()`
- `public void setBaby(boolean p_21451_)`
- `public HumanoidArm getMainArm()`
- `public boolean isWithinMeleeAttackRange(LivingEntity p_217067_)`
- `protected AABB getAttackBoundingBox()`
- `public boolean doHurtTarget(Entity p_21372_)`
- `private void maybeDisableShield(Player p_21425_,  ItemStack p_21426_,  ItemStack p_21427_)`
- `protected boolean isSunBurnTick()`
- `@Deprecated protected void jumpInLiquid(TagKey<Fluid> p_204045_)` (deprecated)
- `private void jumpInLiquidInternal(Runnable onSuper)`
- `public void jumpInFluid(FluidType type)`
  Description copied from interface: IForgeLivingEntity
  Performs what to do when an entity attempts to go up or "jump" in a fluid.
  - param: type - the type of the fluid
- `public void removeFreeWill()`
- `public void removeAllGoals(Predicate<Goal> p_262667_)`
- `protected void removeAfterChangingDimensions()`
- `@Nullable public ItemStack getPickResult()`
- `@Nullable public final MobSpawnType getSpawnType()`
  Returns the type of spawn that created this mob, if applicable.
   If it could not be determined, this will return null.
  
   This is set via finalizeSpawn(net.minecraft.world.level.ServerLevelAccessor, net.minecraft.world.DifficultyInstance, net.minecraft.world.entity.MobSpawnType, net.minecraft.world.entity.SpawnGroupData, net.minecraft.nbt.CompoundTag), so you should not call this from within that method, instead using the parameter.
- `@Internal public final boolean isSpawnCancelled()`
  This method exists so that spawns can be cancelled from the FinalizeSpawnEvent
   without needing to hook up an additional handler for the EntityJoinLevelEvent.
  - returns: if this mob will be blocked from spawning during LevelWriter.addFreshEntity(Entity)
- `@Internal public final void setSpawnCancelled(boolean cancel)`
  Marks this mob as being disallowed to spawn during LevelWriter.addFreshEntity(Entity).
  - throws: UnsupportedOperationException - if this entity has already been added to the world.

### Inherited methods
- from `net.minecraft.world.entity.LivingEntity`: `actuallyHurt`, `addEffect`, `addEffect`, `animateHurt`, `areAllEffectsAmbient`, `attackable`, `blockedByShield`, `blockUsingShield`, `brainProvider`, `broadcastBreakEvent`, `broadcastBreakEvent`, `calculateEntityAnimation`, `calculateFallDamage`, `canAttack`, `canAttack`, `canBeAffected`, `canBeSeenAsEnemy`, `canBeSeenByAnyone`, `canBreatheUnderwater`, `canChangeDimensions`, `canDisableShield`, `canFreeze`, `canSpawnSoulSpeedParticle`, `canStandOnFluid`, `causeFallDamage`, `checkAutoSpinAttack`, `checkFallDamage`, `clearSleepingPos`, `completeUsingItem`, `createLivingAttributes`, `createWitherRose`, `curePotionEffects`, `decreaseAirSupply`, `die`, `doAutoAttackOnTouch`, `doesEmitEquipEvent`, `doPush`, `dropAllDeathLoot`, `dropEquipment`, `dropExperience`, `eat`, `equipmentHasChanged`, `forceAddEffect`, `getAbsorptionAmount`, `getActiveEffects`, `getActiveEffectsMap`, `getArmorCoverPercentage`, `getArmorValue`, `getArrowCount`, `getAttackAnim`, `getAttribute`, `getAttributeBaseValue`, `getAttributeBaseValue`, `getAttributes`, `getAttributeValue`, `getAttributeValue`, `getBedOrientation`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getBrain`, `getCapability`, `getCombatTracker`, `getDamageAfterArmorAbsorb`, `getDamageAfterMagicAbsorb`, `getDeathSound`, `getDimensions`, `getDismountPoses`, `getDrinkingSound`, `getEatingSound`, `getEffect`, `getEquipmentSlotForItem`, `getEyeHeight`, `getFallFlyingTicks`, `getFallSounds`, `getFluidFallingAdjustedMovement`, `getFlyingSpeed`, `getHealth`, `getHitbox`, `getHurtDir`, `getHurtSound`, `getItemInHand`, `getJumpBoostPower`, `getJumpPower`, `getKillCredit`, `getLastAttacker`, `getLastClimbablePos`, `getLastDamageSource`, `getLastHurtByMob`, `getLastHurtByMobTimestamp`, `getLastHurtMob`, `getLastHurtMobTimestamp`, `getLocalBoundsForPose`, `getMainHandItem`, `getMaxAbsorption`, `getMaxHealth`, `getMobType`, `getMyRidingOffset`, `getNoActionTime`, `getOffhandItem`, `getPassengerRidingPosition`, `getProjectile`, `getRandom`, `getRelativePortalPosition`, `getRiddenInput`, `getRiddenSpeed`, `getScale`, `getSleepingPos`, `getSlot`, `getSoundVolume`, `getSpeed`, `getStandingEyeHeight`, `getStingerCount`, `getSwimAmount`, `getTicksUsingItem`, `getUsedItemHand`, `getUseItem`, `getUseItemRemainingTicks`, `getViewYRot`, `getVisibilityPercent`, `getVisualRotationYInDegrees`, `getVoicePitch`, `getWaterSlowDown`, `getYHeadRot`, `goDownInWater`, `handleDamageEvent`, `handleRelativeFrictionAndCalculateMovement`, `hasEffect`, `hasItemInSlot`, `hasLineOfSight`, `heal`, `hurt`, `hurtArmor`, `hurtCurrentlyUsedShield`, `hurtHelmet`, `increaseAirSupply`, `indicateDamage`, `internalSetAbsorptionAmount`, `invalidateCaps`, `isAffectedByFluids`, `isAffectedByPotions`, `isAlive`, `isAlwaysExperienceDropper`, `isAutoSpinAttack`, `isBaby`, `isBlocking`, `isCurrentlyGlowing`, `isDamageSourceBlocked`, `isDeadOrDying`, `isFallFlying`, `isHolding`, `isHolding`, `isImmobile`, `isInvertedHealAndHarm`, `isInWall`, `isPickable`, `isPushable`, `isSensitiveToWater`, `isSleeping`, `isSuppressingSlidingDownLadder`, `isUsingItem`, `isVisuallySwimming`, `jumpFromGround`, `kill`, `knockback`, `lerpHeadRotationStep`, `lerpHeadTo`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `lookAt`, `makeBrain`, `maxUpStep`, `onBelowWorld`, `onChangedBlock`, `onClimbable`, `onEffectAdded`, `onEffectRemoved`, `onEffectUpdated`, `onEnterCombat`, `onEquipItem`, `onItemPickup`, `onLeaveCombat`, `onSoulSpeedBlock`, `onSyncedDataUpdated`, `playBlockFallSound`, `push`, `pushEntities`, `randomTeleport`, `recreateFromPacket`, `releaseUsingItem`, `remove`, `removeAllEffects`, `removeEffect`, `removeEffectNoUpdate`, `removeEffectParticles`, `removeFrost`, `removeSoulSpeed`, `resetForwardDirectionOfRelativePortalPosition`, `reviveCaps`, `rideTick`, `sendEffectToPassengers`, `setAbsorptionAmount`, `setArrowCount`, `setDiscardFriction`, `setHealth`, `setItemInHand`, `setJumping`, `setLastHurtByMob`, `setLastHurtByPlayer`, `setLastHurtMob`, `setLivingEntityFlag`, `setNoActionTime`, `setRecordPlayingNearby`, `setSleepingPos`, `setSprinting`, `setStingerCount`, `setYBodyRot`, `setYHeadRot`, `shouldDiscardFriction`, `shouldDropExperience`, `shouldDropLoot`, `shouldRemoveSoulSpeed`, `shouldRiderFaceForward`, `shouldShowName`, `skipDropExperience`, `spawnSoulSpeedParticle`, `startSleeping`, `startUsingItem`, `stopRiding`, `stopSleeping`, `stopUsingItem`, `swing`, `swing`, `take`, `tickDeath`, `tickEffects`, `tickRidden`, `travel`, `triggerItemUseEffects`, `tryAddFrost`, `tryAddSoulSpeed`, `updateEffectVisibility`, `updateInvisibilityStatus`, `updateSwingTime`, `updateUsingItem`, `updateWalkAnimation`, `verifyEquippedItem`, `wasExperienceConsumed`, `wouldNotSuffocateAtTargetPose`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canCollideWith`, `canControlVehicle`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYRot`, `getZ`, `getZ`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `killedEntity`, `lavaHurt`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `refreshDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startSeenByPlayer`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateInWaterStateAndDoWaterCurrentPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getEyeInFluidType`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getFluidTypeHeight`, `getMaxHeightFluidType`, `getParts`, `getPersistentData`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isAddedToWorld`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `onAddedToWorld`, `onRemovedFromWorld`, `revive`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraftforge.common.extensions.IForgeLivingEntity`: `canDrownInFluidType`, `canSwimInFluidType`, `moveInFluid`, `self`, `sinkInFluid`

## MobType

*class* `net.minecraft.world.entity.MobType`

### Fields
- `public static final MobType UNDEFINED`
- `public static final MobType UNDEAD`
- `public static final MobType ARTHROPOD`
- `public static final MobType ILLAGER`
- `public static final MobType WATER`

## NeutralMob

*interface* `net.minecraft.world.entity.NeutralMob`

### Fields
- `static final String TAG_ANGER_TIME` (= "AngerTime")
- `static final String TAG_ANGRY_AT` (= "AngryAt")

### Methods
- `int getRemainingPersistentAngerTime()`
- `void setRemainingPersistentAngerTime(int p_21673_)`
- `@Nullable UUID getPersistentAngerTarget()`
- `void setPersistentAngerTarget(@Nullable  UUID p_21672_)`
- `void startPersistentAngerTimer()`
- `default void addPersistentAngerSaveData(CompoundTag p_21679_)`
- `default void readPersistentAngerSaveData(Level p_147286_,  CompoundTag p_147287_)`
- `default void updatePersistentAnger(ServerLevel p_21667_,  boolean p_21668_)`
- `default boolean isAngryAt(LivingEntity p_21675_)`
- `default boolean isAngryAtAllPlayers(Level p_21671_)`
- `default boolean isAngry()`
- `default void playerDied(Player p_21677_)`
- `default void forgetCurrentTargetAndRefreshUniversalAnger()`
- `default void stopBeingAngry()`
- `@Nullable LivingEntity getLastHurtByMob()`
- `void setLastHurtByMob(@Nullable  LivingEntity p_21669_)`
- `void setLastHurtByPlayer(@Nullable  Player p_21680_)`
- `void setTarget(@Nullable  LivingEntity p_21681_)`
- `boolean canAttack(LivingEntity p_181126_)`
- `@Nullable LivingEntity getTarget()`

## OwnableEntity

*interface* `net.minecraft.world.entity.OwnableEntity`

### Methods
- `@Nullable UUID getOwnerUUID()`
- `EntityGetter level()`
- `@Nullable default LivingEntity getOwner()`

## PathfinderMob

*class* `net.minecraft.world.entity.PathfinderMob`

### Fields
- `protected static final float DEFAULT_WALK_TARGET_VALUE` (= 0.0f)

### Inherited fields
- from `net.minecraft.world.entity.Mob`: `ambientSoundTime`, `armorDropChances`, `DEFAULT_EQUIPMENT_DROP_CHANCE`, `goalSelector`, `handDropChances`, `jumpControl`, `LEASH_TAG`, `lookControl`, `MAX_ENCHANTED_ARMOR_CHANCE`, `MAX_ENCHANTED_WEAPON_CHANCE`, `MAX_PICKUP_LOOT_CHANCE`, `MAX_WEARING_ARMOR_CHANCE`, `moveControl`, `navigation`, `PICKUP_REACH`, `PRESERVE_ITEM_DROP_CHANCE`, `targetSelector`, `UPDATE_GOAL_SELECTOR_EVERY_N_TICKS`, `xpReward`
- from `net.minecraft.world.entity.LivingEntity`: `animStep`, `animStepO`, `ARMOR_SLOT_OFFSET`, `ARMOR_SLOTS`, `attackAnim`, `attackStrengthTicker`, `autoSpinAttackTicks`, `brain`, `DATA_LIVING_ENTITY_FLAGS`, `dead`, `DEATH_DURATION`, `deathScore`, `deathTime`, `DEFAULT_BASE_GRAVITY`, `DEFAULT_EYE_HEIGHT`, `EQUIPMENT_SLOT_OFFSET`, `EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT`, `fallFlyTicks`, `HAND_SLOTS`, `hurtDuration`, `hurtTime`, `invulnerableDuration`, `jumping`, `lastHurt`, `lastHurtByPlayer`, `lastHurtByPlayerTime`, `lerpHeadSteps`, `lerpSteps`, `lerpX`, `lerpXRot`, `lerpY`, `lerpYHeadRot`, `lerpYRot`, `lerpZ`, `LIVING_ENTITY_FLAG_IS_USING`, `LIVING_ENTITY_FLAG_OFF_HAND`, `LIVING_ENTITY_FLAG_SPIN_ATTACK`, `MIN_MOVEMENT_DISTANCE`, `noActionTime`, `oAttackAnim`, `oRun`, `PLAYER_HURT_EXPERIENCE_TIME`, `removeArrowTime`, `removeStingerTime`, `rotA`, `rotOffs`, `run`, `SLEEPING_DIMENSIONS`, `SWING_DURATION`, `swinging`, `swingingArm`, `swingTime`, `timeOffs`, `USE_ITEM_INTERVAL`, `useItem`, `useItemRemaining`, `walkAnimation`, `xxa`, `yBodyRot`, `yBodyRotO`, `yHeadRot`, `yHeadRotO`, `yya`, `zza`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `public float getWalkTargetValue(BlockPos p_21693_)`
- `public float getWalkTargetValue(BlockPos p_21688_,  LevelReader p_21689_)`
- `public boolean checkSpawnRules(LevelAccessor p_21686_,  MobSpawnType p_21687_)`
- `public boolean isPathFinding()`
- `public boolean isPanicking()`
- `protected void tickLeash()`
- `protected boolean shouldStayCloseToLeashHolder()`
- `protected double followLeashSpeed()`
- `protected void onLeashDistance(float p_21694_)`

### Inherited methods
- from `net.minecraft.world.entity.Mob`: `addAdditionalSaveData`, `aiStep`, `ate`, `baseTick`, `canAttackType`, `canBeLeashed`, `canFireProjectileWeapon`, `canHoldItem`, `canPickUpLoot`, `canReplaceCurrentItem`, `canReplaceEqualItem`, `canTakeItem`, `checkDespawn`, `checkMobSpawnRules`, `checkSpawnObstruction`, `clearRestriction`, `convertTo`, `createBodyControl`, `createMobAttributes`, `createNavigation`, `customServerAiStep`, `defineSynchedData`, `doHurtTarget`, `dropCustomDeathLoot`, `dropFromLootTable`, `dropLeash`, `enchantSpawnedArmor`, `enchantSpawnedWeapon`, `equipItemIfPossible`, `finalizeSpawn`, `getAmbientSound`, `getAmbientSoundInterval`, `getArmorSlots`, `getAttackBoundingBox`, `getControllingPassenger`, `getDefaultLootTable`, `getEquipmentDropChance`, `getEquipmentForSlot`, `getExperienceReward`, `getHandSlots`, `getHeadRotSpeed`, `getItemBySlot`, `getJumpControl`, `getLeashHolder`, `getLookControl`, `getLootTable`, `getLootTableSeed`, `getMainArm`, `getMaxFallDistance`, `getMaxHeadXRot`, `getMaxHeadYRot`, `getMaxSpawnClusterSize`, `getMoveControl`, `getNavigation`, `getPathfindingMalus`, `getPickResult`, `getPickupReach`, `getRestrictCenter`, `getRestrictRadius`, `getSensing`, `getSpawnType`, `getTarget`, `handleEntityEvent`, `hasRestriction`, `interact`, `isAggressive`, `isEffectiveAi`, `isLeashed`, `isLeftHanded`, `isMaxGroupSizeReached`, `isNoAi`, `isPersistenceRequired`, `isSpawnCancelled`, `isSunBurnTick`, `isWithinMeleeAttackRange`, `isWithinRestriction`, `isWithinRestriction`, `jumpInFluid`, `jumpInLiquid`, `lookAt`, `mobInteract`, `onOffspringSpawnedFromEgg`, `onPathfindingDone`, `onPathfindingStart`, `pickUpItem`, `playAmbientSound`, `playHurtSound`, `populateDefaultEquipmentEnchantments`, `populateDefaultEquipmentSlots`, `readAdditionalSaveData`, `registerGoals`, `removeAfterChangingDimensions`, `removeAllGoals`, `removeFreeWill`, `removeWhenFarAway`, `requiresCustomPersistence`, `restrictTo`, `sendDebugPackets`, `serverAiStep`, `setAggressive`, `setBaby`, `setCanPickUpLoot`, `setDelayedLeashHolderId`, `setDropChance`, `setGuaranteedDrop`, `setItemSlot`, `setItemSlotAndDropWhenKilled`, `setLeashedTo`, `setLeftHanded`, `setNoAi`, `setPathfindingMalus`, `setPersistenceRequired`, `setSpawnCancelled`, `setSpeed`, `setTarget`, `setXxa`, `setYya`, `setZza`, `shouldDespawnInPeaceful`, `shouldPassengersInheritMalus`, `spawnAnim`, `startRiding`, `tick`, `tickHeadTurn`, `updateControlFlags`, `wantsToPickUp`
- from `net.minecraft.world.entity.LivingEntity`: `actuallyHurt`, `addEffect`, `addEffect`, `animateHurt`, `areAllEffectsAmbient`, `attackable`, `blockedByShield`, `blockUsingShield`, `brainProvider`, `broadcastBreakEvent`, `broadcastBreakEvent`, `calculateEntityAnimation`, `calculateFallDamage`, `canAttack`, `canAttack`, `canBeAffected`, `canBeSeenAsEnemy`, `canBeSeenByAnyone`, `canBreatheUnderwater`, `canChangeDimensions`, `canDisableShield`, `canFreeze`, `canSpawnSoulSpeedParticle`, `canStandOnFluid`, `causeFallDamage`, `checkAutoSpinAttack`, `checkFallDamage`, `clearSleepingPos`, `completeUsingItem`, `createLivingAttributes`, `createWitherRose`, `curePotionEffects`, `decreaseAirSupply`, `die`, `doAutoAttackOnTouch`, `doesEmitEquipEvent`, `doPush`, `dropAllDeathLoot`, `dropEquipment`, `dropExperience`, `eat`, `equipmentHasChanged`, `forceAddEffect`, `getAbsorptionAmount`, `getActiveEffects`, `getActiveEffectsMap`, `getArmorCoverPercentage`, `getArmorValue`, `getArrowCount`, `getAttackAnim`, `getAttribute`, `getAttributeBaseValue`, `getAttributeBaseValue`, `getAttributes`, `getAttributeValue`, `getAttributeValue`, `getBedOrientation`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getBrain`, `getCapability`, `getCombatTracker`, `getDamageAfterArmorAbsorb`, `getDamageAfterMagicAbsorb`, `getDeathSound`, `getDimensions`, `getDismountPoses`, `getDrinkingSound`, `getEatingSound`, `getEffect`, `getEquipmentSlotForItem`, `getEyeHeight`, `getFallFlyingTicks`, `getFallSounds`, `getFluidFallingAdjustedMovement`, `getFlyingSpeed`, `getHealth`, `getHitbox`, `getHurtDir`, `getHurtSound`, `getItemInHand`, `getJumpBoostPower`, `getJumpPower`, `getKillCredit`, `getLastAttacker`, `getLastClimbablePos`, `getLastDamageSource`, `getLastHurtByMob`, `getLastHurtByMobTimestamp`, `getLastHurtMob`, `getLastHurtMobTimestamp`, `getLocalBoundsForPose`, `getMainHandItem`, `getMaxAbsorption`, `getMaxHealth`, `getMobType`, `getMyRidingOffset`, `getNoActionTime`, `getOffhandItem`, `getPassengerRidingPosition`, `getProjectile`, `getRandom`, `getRelativePortalPosition`, `getRiddenInput`, `getRiddenSpeed`, `getScale`, `getSleepingPos`, `getSlot`, `getSoundVolume`, `getSpeed`, `getStandingEyeHeight`, `getStingerCount`, `getSwimAmount`, `getTicksUsingItem`, `getUsedItemHand`, `getUseItem`, `getUseItemRemainingTicks`, `getViewYRot`, `getVisibilityPercent`, `getVisualRotationYInDegrees`, `getVoicePitch`, `getWaterSlowDown`, `getYHeadRot`, `goDownInWater`, `handleDamageEvent`, `handleRelativeFrictionAndCalculateMovement`, `hasEffect`, `hasItemInSlot`, `hasLineOfSight`, `heal`, `hurt`, `hurtArmor`, `hurtCurrentlyUsedShield`, `hurtHelmet`, `increaseAirSupply`, `indicateDamage`, `internalSetAbsorptionAmount`, `invalidateCaps`, `isAffectedByFluids`, `isAffectedByPotions`, `isAlive`, `isAlwaysExperienceDropper`, `isAutoSpinAttack`, `isBaby`, `isBlocking`, `isCurrentlyGlowing`, `isDamageSourceBlocked`, `isDeadOrDying`, `isFallFlying`, `isHolding`, `isHolding`, `isImmobile`, `isInvertedHealAndHarm`, `isInWall`, `isPickable`, `isPushable`, `isSensitiveToWater`, `isSleeping`, `isSuppressingSlidingDownLadder`, `isUsingItem`, `isVisuallySwimming`, `jumpFromGround`, `kill`, `knockback`, `lerpHeadRotationStep`, `lerpHeadTo`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `lookAt`, `makeBrain`, `maxUpStep`, `onBelowWorld`, `onChangedBlock`, `onClimbable`, `onEffectAdded`, `onEffectRemoved`, `onEffectUpdated`, `onEnterCombat`, `onEquipItem`, `onItemPickup`, `onLeaveCombat`, `onSoulSpeedBlock`, `onSyncedDataUpdated`, `playBlockFallSound`, `push`, `pushEntities`, `randomTeleport`, `recreateFromPacket`, `releaseUsingItem`, `remove`, `removeAllEffects`, `removeEffect`, `removeEffectNoUpdate`, `removeEffectParticles`, `removeFrost`, `removeSoulSpeed`, `resetForwardDirectionOfRelativePortalPosition`, `reviveCaps`, `rideTick`, `sendEffectToPassengers`, `setAbsorptionAmount`, `setArrowCount`, `setDiscardFriction`, `setHealth`, `setItemInHand`, `setJumping`, `setLastHurtByMob`, `setLastHurtByPlayer`, `setLastHurtMob`, `setLivingEntityFlag`, `setNoActionTime`, `setRecordPlayingNearby`, `setSleepingPos`, `setSprinting`, `setStingerCount`, `setYBodyRot`, `setYHeadRot`, `shouldDiscardFriction`, `shouldDropExperience`, `shouldDropLoot`, `shouldRemoveSoulSpeed`, `shouldRiderFaceForward`, `shouldShowName`, `skipDropExperience`, `spawnSoulSpeedParticle`, `startSleeping`, `startUsingItem`, `stopRiding`, `stopSleeping`, `stopUsingItem`, `swing`, `swing`, `take`, `tickDeath`, `tickEffects`, `tickRidden`, `travel`, `triggerItemUseEffects`, `tryAddFrost`, `tryAddSoulSpeed`, `updateEffectVisibility`, `updateInvisibilityStatus`, `updateSwingTime`, `updateUsingItem`, `updateWalkAnimation`, `verifyEquippedItem`, `wasExperienceConsumed`, `wouldNotSuffocateAtTargetPose`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canCollideWith`, `canControlVehicle`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYRot`, `getZ`, `getZ`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `killedEntity`, `lavaHurt`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `refreshDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startSeenByPlayer`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateInWaterStateAndDoWaterCurrentPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getEyeInFluidType`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getFluidTypeHeight`, `getMaxHeightFluidType`, `getParts`, `getPersistentData`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isAddedToWorld`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `onAddedToWorld`, `onRemovedFromWorld`, `revive`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraftforge.common.extensions.IForgeLivingEntity`: `canDrownInFluidType`, `canSwimInFluidType`, `moveInFluid`, `self`, `sinkInFluid`

## PlayerRideable

*interface* `net.minecraft.world.entity.PlayerRideable`

## PlayerRideableJumping

*interface* `net.minecraft.world.entity.PlayerRideableJumping`

All Superinterfaces: PlayerRideable

### Methods
- `void onPlayerJump(int p_21696_)`
- `boolean canJump()`
- `void handleStartJump(int p_21695_)`
- `void handleStopJump()`
- `default int getJumpCooldown()`

## PowerableMob

*interface* `net.minecraft.world.entity.PowerableMob`

### Methods
- `boolean isPowered()`

## ReputationEventHandler

*interface* `net.minecraft.world.entity.ReputationEventHandler`

### Methods
- `void onReputationEventFrom(ReputationEventType p_21712_,  Entity p_21713_)`

## Saddleable

*interface* `net.minecraft.world.entity.Saddleable`

### Methods
- `boolean isSaddleable()`
- `void equipSaddle(@Nullable  SoundSource p_21748_)`
- `default SoundEvent getSaddleSoundEvent()`
- `boolean isSaddled()`

## Shearable

*interface* `net.minecraft.world.entity.Shearable`

### Methods
- `@Deprecated void shear(SoundSource p_21749_)` (deprecated)
- `@Deprecated boolean readyForShearing()` (deprecated)

## SlotAccess

*interface* `net.minecraft.world.entity.SlotAccess`

### Fields
- `static final SlotAccess NULL`

### Methods
- `static SlotAccess forContainer(Container p_147296_,  int p_147297_,  Predicate<ItemStack> p_147298_)`
- `static SlotAccess forContainer(Container p_147293_,  int p_147294_)`
- `static SlotAccess forEquipmentSlot(LivingEntity p_147303_,  EquipmentSlot p_147304_,  Predicate<ItemStack> p_147305_)`
- `static SlotAccess forEquipmentSlot(LivingEntity p_147300_,  EquipmentSlot p_147301_)`
- `ItemStack get()`
- `boolean set(ItemStack p_147306_)`

## SpawnGroupData

*interface* `net.minecraft.world.entity.SpawnGroupData`

## SpawnPlacements

*class* `net.minecraft.world.entity.SpawnPlacements`

### Fields
- `private static final Map<EntityType<?>,SpawnPlacements.Data> DATA_BY_TYPE`

### Methods
- `@Deprecated public static <T extends Mob> void register(EntityType<T> p_21755_,  SpawnPlacements.Type p_21756_,  Heightmap.Types p_21757_,  SpawnPlacements.SpawnPredicate<T> p_21758_)` (deprecated)
- `public static SpawnPlacements.Type getPlacementType(EntityType<?> p_21753_)`
- `public static Heightmap.Types getHeightmapType(@Nullable  EntityType<?> p_21766_)`
- `public static <T extends Entity> boolean checkSpawnRules(EntityType<T> p_217075_,  ServerLevelAccessor p_217076_,  MobSpawnType p_217077_,  BlockPos p_217078_,  RandomSource p_217079_)`
- `public static void fireSpawnPlacementEvent()`

## SpawnPlacements.Data

*class* `net.minecraft.world.entity.SpawnPlacements.Data`

Enclosing class: SpawnPlacements

### Fields
- `final Heightmap.Types heightMap`
- `final SpawnPlacements.Type placement`
- `final SpawnPlacements.SpawnPredicate<?> predicate`

## SpawnPlacements.SpawnPredicate

*interface* `net.minecraft.world.entity.SpawnPlacements.SpawnPredicate`

Enclosing class: SpawnPlacements

### Methods
- `boolean test(EntityType<T> p_217081_,  ServerLevelAccessor p_217082_,  MobSpawnType p_217083_,  BlockPos p_217084_,  RandomSource p_217085_)`

## TamableAnimal

*class* `net.minecraft.world.entity.TamableAnimal`

### Fields
- `protected static final EntityDataAccessor<Byte> DATA_FLAGS_ID`
- `protected static final EntityDataAccessor<Optional<UUID>> DATA_OWNERUUID_ID`
- `private boolean orderedToSit`

### Inherited fields
- from `net.minecraft.world.entity.animal.Animal`: `PARENT_AGE_AFTER_BREEDING`
- from `net.minecraft.world.entity.AgeableMob`: `age`, `BABY_START_AGE`, `forcedAge`, `forcedAgeTimer`
- from `net.minecraft.world.entity.PathfinderMob`: `DEFAULT_WALK_TARGET_VALUE`
- from `net.minecraft.world.entity.Mob`: `ambientSoundTime`, `armorDropChances`, `DEFAULT_EQUIPMENT_DROP_CHANCE`, `goalSelector`, `handDropChances`, `jumpControl`, `LEASH_TAG`, `lookControl`, `MAX_ENCHANTED_ARMOR_CHANCE`, `MAX_ENCHANTED_WEAPON_CHANCE`, `MAX_PICKUP_LOOT_CHANCE`, `MAX_WEARING_ARMOR_CHANCE`, `moveControl`, `navigation`, `PICKUP_REACH`, `PRESERVE_ITEM_DROP_CHANCE`, `targetSelector`, `UPDATE_GOAL_SELECTOR_EVERY_N_TICKS`, `xpReward`
- from `net.minecraft.world.entity.LivingEntity`: `animStep`, `animStepO`, `ARMOR_SLOT_OFFSET`, `ARMOR_SLOTS`, `attackAnim`, `attackStrengthTicker`, `autoSpinAttackTicks`, `brain`, `DATA_LIVING_ENTITY_FLAGS`, `dead`, `DEATH_DURATION`, `deathScore`, `deathTime`, `DEFAULT_BASE_GRAVITY`, `DEFAULT_EYE_HEIGHT`, `EQUIPMENT_SLOT_OFFSET`, `EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT`, `fallFlyTicks`, `HAND_SLOTS`, `hurtDuration`, `hurtTime`, `invulnerableDuration`, `jumping`, `lastHurt`, `lastHurtByPlayer`, `lastHurtByPlayerTime`, `lerpHeadSteps`, `lerpSteps`, `lerpX`, `lerpXRot`, `lerpY`, `lerpYHeadRot`, `lerpYRot`, `lerpZ`, `LIVING_ENTITY_FLAG_IS_USING`, `LIVING_ENTITY_FLAG_OFF_HAND`, `LIVING_ENTITY_FLAG_SPIN_ATTACK`, `MIN_MOVEMENT_DISTANCE`, `noActionTime`, `oAttackAnim`, `oRun`, `PLAYER_HURT_EXPERIENCE_TIME`, `removeArrowTime`, `removeStingerTime`, `rotA`, `rotOffs`, `run`, `SLEEPING_DIMENSIONS`, `SWING_DURATION`, `swinging`, `swingingArm`, `swingTime`, `timeOffs`, `USE_ITEM_INTERVAL`, `useItem`, `useItemRemaining`, `walkAnimation`, `xxa`, `yBodyRot`, `yBodyRotO`, `yHeadRot`, `yHeadRotO`, `yya`, `zza`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `protected void defineSynchedData()`
- `public void addAdditionalSaveData(CompoundTag p_21819_)`
- `public void readAdditionalSaveData(CompoundTag p_21815_)`
- `public boolean canBeLeashed(Player p_21813_)`
- `protected void spawnTamingParticles(boolean p_21835_)`
- `public void handleEntityEvent(byte p_21807_)`
- `public boolean isTame()`
- `public void setTame(boolean p_21836_)`
- `protected void reassessTameGoals()`
- `public boolean isInSittingPose()`
- `public void setInSittingPose(boolean p_21838_)`
- `@Nullable public UUID getOwnerUUID()`
- `public void setOwnerUUID(@Nullable  UUID p_21817_)`
- `public void tame(Player p_21829_)`
- `public boolean canAttack(LivingEntity p_21822_)`
- `public boolean isOwnedBy(LivingEntity p_21831_)`
- `public boolean wantsToAttack(LivingEntity p_21810_,  LivingEntity p_21811_)`
- `public Team getTeam()`
- `public boolean isAlliedTo(Entity p_21833_)`
- `public void die(DamageSource p_21809_)`
- `public boolean isOrderedToSit()`
- `public void setOrderedToSit(boolean p_21840_)`

### Inherited methods
- from `net.minecraft.world.entity.animal.Animal`: `aiStep`, `canFallInLove`, `canMate`, `checkAnimalSpawnRules`, `customServerAiStep`, `finalizeSpawnChildFromBreeding`, `getAmbientSoundInterval`, `getExperienceReward`, `getInLoveTime`, `getLoveCause`, `getWalkTargetValue`, `hurt`, `isBrightEnoughToSpawn`, `isFood`, `isInLove`, `mobInteract`, `removeWhenFarAway`, `resetLove`, `setInLove`, `setInLoveTime`, `spawnChildFromBreeding`, `usePlayerItem`
- from `net.minecraft.world.entity.AgeableMob`: `ageBoundaryReached`, `ageUp`, `ageUp`, `canBreed`, `finalizeSpawn`, `getAge`, `getBreedOffspring`, `getSpeedUpSecondsWhenFeeding`, `isBaby`, `onSyncedDataUpdated`, `setAge`, `setBaby`
- from `net.minecraft.world.entity.PathfinderMob`: `checkSpawnRules`, `followLeashSpeed`, `getWalkTargetValue`, `isPanicking`, `isPathFinding`, `onLeashDistance`, `shouldStayCloseToLeashHolder`, `tickLeash`
- from `net.minecraft.world.entity.Mob`: `ate`, `baseTick`, `canAttackType`, `canFireProjectileWeapon`, `canHoldItem`, `canPickUpLoot`, `canReplaceCurrentItem`, `canReplaceEqualItem`, `canTakeItem`, `checkDespawn`, `checkMobSpawnRules`, `checkSpawnObstruction`, `clearRestriction`, `convertTo`, `createBodyControl`, `createMobAttributes`, `createNavigation`, `doHurtTarget`, `dropCustomDeathLoot`, `dropFromLootTable`, `dropLeash`, `enchantSpawnedArmor`, `enchantSpawnedWeapon`, `equipItemIfPossible`, `getAmbientSound`, `getArmorSlots`, `getAttackBoundingBox`, `getControllingPassenger`, `getDefaultLootTable`, `getEquipmentDropChance`, `getEquipmentForSlot`, `getHandSlots`, `getHeadRotSpeed`, `getItemBySlot`, `getJumpControl`, `getLeashHolder`, `getLookControl`, `getLootTable`, `getLootTableSeed`, `getMainArm`, `getMaxFallDistance`, `getMaxHeadXRot`, `getMaxHeadYRot`, `getMaxSpawnClusterSize`, `getMoveControl`, `getNavigation`, `getPathfindingMalus`, `getPickResult`, `getPickupReach`, `getRestrictCenter`, `getRestrictRadius`, `getSensing`, `getSpawnType`, `getTarget`, `hasRestriction`, `interact`, `isAggressive`, `isEffectiveAi`, `isLeashed`, `isLeftHanded`, `isMaxGroupSizeReached`, `isNoAi`, `isPersistenceRequired`, `isSpawnCancelled`, `isSunBurnTick`, `isWithinMeleeAttackRange`, `isWithinRestriction`, `isWithinRestriction`, `jumpInFluid`, `jumpInLiquid`, `lookAt`, `onOffspringSpawnedFromEgg`, `onPathfindingDone`, `onPathfindingStart`, `pickUpItem`, `playAmbientSound`, `playHurtSound`, `populateDefaultEquipmentEnchantments`, `populateDefaultEquipmentSlots`, `registerGoals`, `removeAfterChangingDimensions`, `removeAllGoals`, `removeFreeWill`, `requiresCustomPersistence`, `restrictTo`, `sendDebugPackets`, `serverAiStep`, `setAggressive`, `setCanPickUpLoot`, `setDelayedLeashHolderId`, `setDropChance`, `setGuaranteedDrop`, `setItemSlot`, `setItemSlotAndDropWhenKilled`, `setLeashedTo`, `setLeftHanded`, `setNoAi`, `setPathfindingMalus`, `setPersistenceRequired`, `setSpawnCancelled`, `setSpeed`, `setTarget`, `setXxa`, `setYya`, `setZza`, `shouldDespawnInPeaceful`, `shouldPassengersInheritMalus`, `spawnAnim`, `startRiding`, `tick`, `tickHeadTurn`, `updateControlFlags`, `wantsToPickUp`
- from `net.minecraft.world.entity.LivingEntity`: `actuallyHurt`, `addEffect`, `addEffect`, `animateHurt`, `areAllEffectsAmbient`, `attackable`, `blockedByShield`, `blockUsingShield`, `brainProvider`, `broadcastBreakEvent`, `broadcastBreakEvent`, `calculateEntityAnimation`, `calculateFallDamage`, `canAttack`, `canBeAffected`, `canBeSeenAsEnemy`, `canBeSeenByAnyone`, `canBreatheUnderwater`, `canChangeDimensions`, `canDisableShield`, `canFreeze`, `canSpawnSoulSpeedParticle`, `canStandOnFluid`, `causeFallDamage`, `checkAutoSpinAttack`, `checkFallDamage`, `clearSleepingPos`, `completeUsingItem`, `createLivingAttributes`, `createWitherRose`, `curePotionEffects`, `decreaseAirSupply`, `doAutoAttackOnTouch`, `doesEmitEquipEvent`, `doPush`, `dropAllDeathLoot`, `dropEquipment`, `dropExperience`, `eat`, `equipmentHasChanged`, `forceAddEffect`, `getAbsorptionAmount`, `getActiveEffects`, `getActiveEffectsMap`, `getArmorCoverPercentage`, `getArmorValue`, `getArrowCount`, `getAttackAnim`, `getAttribute`, `getAttributeBaseValue`, `getAttributeBaseValue`, `getAttributes`, `getAttributeValue`, `getAttributeValue`, `getBedOrientation`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getBrain`, `getCapability`, `getCombatTracker`, `getDamageAfterArmorAbsorb`, `getDamageAfterMagicAbsorb`, `getDeathSound`, `getDimensions`, `getDismountPoses`, `getDrinkingSound`, `getEatingSound`, `getEffect`, `getEquipmentSlotForItem`, `getEyeHeight`, `getFallFlyingTicks`, `getFallSounds`, `getFluidFallingAdjustedMovement`, `getFlyingSpeed`, `getHealth`, `getHitbox`, `getHurtDir`, `getHurtSound`, `getItemInHand`, `getJumpBoostPower`, `getJumpPower`, `getKillCredit`, `getLastAttacker`, `getLastClimbablePos`, `getLastDamageSource`, `getLastHurtByMob`, `getLastHurtByMobTimestamp`, `getLastHurtMob`, `getLastHurtMobTimestamp`, `getLocalBoundsForPose`, `getMainHandItem`, `getMaxAbsorption`, `getMaxHealth`, `getMobType`, `getMyRidingOffset`, `getNoActionTime`, `getOffhandItem`, `getPassengerRidingPosition`, `getProjectile`, `getRandom`, `getRelativePortalPosition`, `getRiddenInput`, `getRiddenSpeed`, `getScale`, `getSleepingPos`, `getSlot`, `getSoundVolume`, `getSpeed`, `getStandingEyeHeight`, `getStingerCount`, `getSwimAmount`, `getTicksUsingItem`, `getUsedItemHand`, `getUseItem`, `getUseItemRemainingTicks`, `getViewYRot`, `getVisibilityPercent`, `getVisualRotationYInDegrees`, `getVoicePitch`, `getWaterSlowDown`, `getYHeadRot`, `goDownInWater`, `handleDamageEvent`, `handleRelativeFrictionAndCalculateMovement`, `hasEffect`, `hasItemInSlot`, `hasLineOfSight`, `heal`, `hurtArmor`, `hurtCurrentlyUsedShield`, `hurtHelmet`, `increaseAirSupply`, `indicateDamage`, `internalSetAbsorptionAmount`, `invalidateCaps`, `isAffectedByFluids`, `isAffectedByPotions`, `isAlive`, `isAlwaysExperienceDropper`, `isAutoSpinAttack`, `isBlocking`, `isCurrentlyGlowing`, `isDamageSourceBlocked`, `isDeadOrDying`, `isFallFlying`, `isHolding`, `isHolding`, `isImmobile`, `isInvertedHealAndHarm`, `isInWall`, `isPickable`, `isPushable`, `isSensitiveToWater`, `isSleeping`, `isSuppressingSlidingDownLadder`, `isUsingItem`, `isVisuallySwimming`, `jumpFromGround`, `kill`, `knockback`, `lerpHeadRotationStep`, `lerpHeadTo`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `lookAt`, `makeBrain`, `maxUpStep`, `onBelowWorld`, `onChangedBlock`, `onClimbable`, `onEffectAdded`, `onEffectRemoved`, `onEffectUpdated`, `onEnterCombat`, `onEquipItem`, `onItemPickup`, `onLeaveCombat`, `onSoulSpeedBlock`, `playBlockFallSound`, `push`, `pushEntities`, `randomTeleport`, `recreateFromPacket`, `releaseUsingItem`, `remove`, `removeAllEffects`, `removeEffect`, `removeEffectNoUpdate`, `removeEffectParticles`, `removeFrost`, `removeSoulSpeed`, `resetForwardDirectionOfRelativePortalPosition`, `reviveCaps`, `rideTick`, `sendEffectToPassengers`, `setAbsorptionAmount`, `setArrowCount`, `setDiscardFriction`, `setHealth`, `setItemInHand`, `setJumping`, `setLastHurtByMob`, `setLastHurtByPlayer`, `setLastHurtMob`, `setLivingEntityFlag`, `setNoActionTime`, `setRecordPlayingNearby`, `setSleepingPos`, `setSprinting`, `setStingerCount`, `setYBodyRot`, `setYHeadRot`, `shouldDiscardFriction`, `shouldDropExperience`, `shouldDropLoot`, `shouldRemoveSoulSpeed`, `shouldRiderFaceForward`, `shouldShowName`, `skipDropExperience`, `spawnSoulSpeedParticle`, `startSleeping`, `startUsingItem`, `stopRiding`, `stopSleeping`, `stopUsingItem`, `swing`, `swing`, `take`, `tickDeath`, `tickEffects`, `tickRidden`, `travel`, `triggerItemUseEffects`, `tryAddFrost`, `tryAddSoulSpeed`, `updateEffectVisibility`, `updateInvisibilityStatus`, `updateSwingTime`, `updateUsingItem`, `updateWalkAnimation`, `verifyEquippedItem`, `wasExperienceConsumed`, `wouldNotSuffocateAtTargetPose`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canCollideWith`, `canControlVehicle`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYRot`, `getZ`, `getZ`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `killedEntity`, `lavaHurt`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `refreshDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startSeenByPlayer`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getEyeInFluidType`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getFluidTypeHeight`, `getMaxHeightFluidType`, `getParts`, `getPersistentData`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isAddedToWorld`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `onAddedToWorld`, `onRemovedFromWorld`, `revive`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraftforge.common.extensions.IForgeLivingEntity`: `canDrownInFluidType`, `canSwimInFluidType`, `moveInFluid`, `self`, `sinkInFluid`
- from `net.minecraft.world.entity.OwnableEntity`: `getOwner`, `level`

## Targeting

*interface* `net.minecraft.world.entity.Targeting`

### Methods
- `@Nullable LivingEntity getTarget()`

## TraceableEntity

*interface* `net.minecraft.world.entity.TraceableEntity`

### Methods
- `@Nullable Entity getOwner()`

## VariantHolder

*interface* `net.minecraft.world.entity.VariantHolder`

### Methods
- `void setVariant(T p_262689_)`
- `T getVariant()`

## WalkAnimationState

*class* `net.minecraft.world.entity.WalkAnimationState`

### Fields
- `private float speedOld`
- `private float speed`
- `private float position`

### Methods
- `public void setSpeed(float p_268265_)`
- `public void update(float p_267993_,  float p_267967_)`
- `public float speed()`
- `public float speed(float p_268054_)`
- `public float position()`
- `public float position(float p_268007_)`
- `public boolean isMoving()`
