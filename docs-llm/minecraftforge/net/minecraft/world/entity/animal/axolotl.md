# net.minecraft.world.entity.animal.axolotl

- [Axolotl](#axolotl)
- [Axolotl.AxolotlGroupData](#axolotl.axolotlgroupdata)
- [Axolotl.AxolotlLookControl](#axolotl.axolotllookcontrol)
- [Axolotl.AxolotlMoveControl](#axolotl.axolotlmovecontrol)
- [AxolotlAi](#axolotlai)
- [Class Axolotl.Variant](#class-axolotl.variant)
- [PlayDead](#playdead)
- [ValidatePlayDead](#validateplaydead)
## Axolotl

*class* `net.minecraft.world.entity.animal.axolotl.Axolotl`

### Fields
- `public static final int TOTAL_PLAYDEAD_TIME` (= 200)
- `protected static final com.google.common.collect.ImmutableList<? extends SensorType<? extends Sensor<? super Axolotl>>> SENSOR_TYPES`
- `protected static final com.google.common.collect.ImmutableList<? extends MemoryModuleType<?>> MEMORY_TYPES`
- `private static final EntityDataAccessor<Integer> DATA_VARIANT`
- `private static final EntityDataAccessor<Boolean> DATA_PLAYING_DEAD`
- `private static final EntityDataAccessor<Boolean> FROM_BUCKET`
- `public static final double PLAYER_REGEN_DETECTION_RANGE` (= 20.0)
- `public static final int RARE_VARIANT_CHANCE` (= 1200)
- `private static final int AXOLOTL_TOTAL_AIR_SUPPLY` (= 6000)
- `public static final String VARIANT_TAG` (= "Variant")
- `private static final int REHYDRATE_AIR_SUPPLY` (= 1800)
- `private static final int REGEN_BUFF_MAX_DURATION` (= 2400)
- `private final Map<String,org.joml.Vector3f> modelRotationValues`
- `private static final int REGEN_BUFF_BASE_DURATION` (= 100)

### Inherited fields
- from `net.minecraft.world.entity.animal.Animal`: `PARENT_AGE_AFTER_BREEDING`
- from `net.minecraft.world.entity.AgeableMob`: `age`, `BABY_START_AGE`, `forcedAge`, `forcedAgeTimer`
- from `net.minecraft.world.entity.PathfinderMob`: `DEFAULT_WALK_TARGET_VALUE`
- from `net.minecraft.world.entity.Mob`: `ambientSoundTime`, `armorDropChances`, `DEFAULT_EQUIPMENT_DROP_CHANCE`, `goalSelector`, `handDropChances`, `jumpControl`, `LEASH_TAG`, `lookControl`, `MAX_ENCHANTED_ARMOR_CHANCE`, `MAX_ENCHANTED_WEAPON_CHANCE`, `MAX_PICKUP_LOOT_CHANCE`, `MAX_WEARING_ARMOR_CHANCE`, `moveControl`, `navigation`, `PICKUP_REACH`, `PRESERVE_ITEM_DROP_CHANCE`, `targetSelector`, `UPDATE_GOAL_SELECTOR_EVERY_N_TICKS`, `xpReward`
- from `net.minecraft.world.entity.LivingEntity`: `animStep`, `animStepO`, `ARMOR_SLOT_OFFSET`, `ARMOR_SLOTS`, `attackAnim`, `attackStrengthTicker`, `autoSpinAttackTicks`, `brain`, `DATA_LIVING_ENTITY_FLAGS`, `dead`, `DEATH_DURATION`, `deathScore`, `deathTime`, `DEFAULT_BASE_GRAVITY`, `DEFAULT_EYE_HEIGHT`, `EQUIPMENT_SLOT_OFFSET`, `EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT`, `fallFlyTicks`, `HAND_SLOTS`, `hurtDuration`, `hurtTime`, `invulnerableDuration`, `jumping`, `lastHurt`, `lastHurtByPlayer`, `lastHurtByPlayerTime`, `lerpHeadSteps`, `lerpSteps`, `lerpX`, `lerpXRot`, `lerpY`, `lerpYHeadRot`, `lerpYRot`, `lerpZ`, `LIVING_ENTITY_FLAG_IS_USING`, `LIVING_ENTITY_FLAG_OFF_HAND`, `LIVING_ENTITY_FLAG_SPIN_ATTACK`, `MIN_MOVEMENT_DISTANCE`, `noActionTime`, `oAttackAnim`, `oRun`, `PLAYER_HURT_EXPERIENCE_TIME`, `removeArrowTime`, `removeStingerTime`, `rotA`, `rotOffs`, `run`, `SLEEPING_DIMENSIONS`, `SWING_DURATION`, `swinging`, `swingingArm`, `swingTime`, `timeOffs`, `USE_ITEM_INTERVAL`, `useItem`, `useItemRemaining`, `walkAnimation`, `xxa`, `yBodyRot`, `yBodyRotO`, `yHeadRot`, `yHeadRotO`, `yya`, `zza`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `public Map<String,org.joml.Vector3f> getModelRotationValues()`
- `public float getWalkTargetValue(BlockPos p_149140_,  LevelReader p_149141_)`
- `protected void defineSynchedData()`
- `public void addAdditionalSaveData(CompoundTag p_149158_)`
- `public void readAdditionalSaveData(CompoundTag p_149145_)`
- `public void playAmbientSound()`
- `public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_149132_,  DifficultyInstance p_149133_,  MobSpawnType p_149134_,  @Nullable  SpawnGroupData p_149135_,  @Nullable  CompoundTag p_149136_)`
  Description copied from class: Mob
  Forge: Override-Only, call via ForgeEventFactory.onFinalizeSpawn.
  
   Overrides are allowed. Do not wrap super calls within override (as that will cause stack overflows).
  
   Vanilla calls are replaced with a transformer, and are not visible in source.
  
   Be certain to either call super.finalizeSpawn or set the Mob.spawnType field from within your override.
- `public void baseTick()`
- `protected void handleAirSupply(int p_149194_)`
- `public void rehydrate()`
- `public int getMaxAirSupply()`
- `public Axolotl.Variant getVariant()`
- `public void setVariant(Axolotl.Variant p_149118_)`
- `private static boolean useRareVariant(RandomSource p_218436_)`
- `public boolean checkSpawnObstruction(LevelReader p_149130_)`
- `public boolean canBreatheUnderwater()`
- `public boolean isPushedByFluid()`
- `public MobType getMobType()`
- `public void setPlayingDead(boolean p_149199_)`
- `public boolean isPlayingDead()`
- `public boolean fromBucket()`
- `public void setFromBucket(boolean p_149196_)`
- `@Nullable public AgeableMob getBreedOffspring(ServerLevel p_149112_,  AgeableMob p_149113_)`
- `public boolean isFood(ItemStack p_149189_)`
- `public boolean canBeLeashed(Player p_149122_)`
- `protected void customServerAiStep()`
- `public static AttributeSupplier.Builder createAttributes()`
- `protected PathNavigation createNavigation(Level p_149128_)`
- `public boolean doHurtTarget(Entity p_149201_)`
- `public boolean hurt(DamageSource p_149115_,  float p_149116_)`
- `protected float getStandingEyeHeight(Pose p_149152_,  EntityDimensions p_149153_)`
- `public int getMaxHeadXRot()`
- `public int getMaxHeadYRot()`
- `public InteractionResult mobInteract(Player p_149155_,  InteractionHand p_149156_)`
- `public void saveToBucketTag(ItemStack p_149187_)`
- `public void loadFromBucketTag(CompoundTag p_149163_)`
- `public ItemStack getBucketItemStack()`
- `public SoundEvent getPickupSound()`
- `public boolean canBeSeenAsEnemy()`
- `public static void onStopAttacking(Axolotl p_218444_,  LivingEntity p_218445_)`
- `public void applySupportingEffects(Player p_149174_)`
- `public boolean requiresCustomPersistence()`
- `protected SoundEvent getHurtSound(DamageSource p_149161_)`
- `@Nullable protected SoundEvent getDeathSound()`
- `@Nullable protected SoundEvent getAmbientSound()`
- `protected SoundEvent getSwimSplashSound()`
- `protected SoundEvent getSwimSound()`
- `protected Brain.Provider<Axolotl> brainProvider()`
- `protected Brain<?> makeBrain(com.mojang.serialization.Dynamic<?> p_149138_)`
- `public Brain<Axolotl> getBrain()`
- `protected void sendDebugPackets()`
- `public void travel(Vec3 p_149181_)`
- `protected void usePlayerItem(Player p_149124_,  InteractionHand p_149125_,  ItemStack p_149126_)`
- `public boolean removeWhenFarAway(double p_149183_)`
- `public static boolean checkAxolotlSpawnRules(EntityType<? extends LivingEntity> p_218438_,  ServerLevelAccessor p_218439_,  MobSpawnType p_218440_,  BlockPos p_218441_,  RandomSource p_218442_)`

### Inherited methods
- from `net.minecraft.world.entity.animal.Animal`: `aiStep`, `canFallInLove`, `canMate`, `checkAnimalSpawnRules`, `finalizeSpawnChildFromBreeding`, `getAmbientSoundInterval`, `getExperienceReward`, `getInLoveTime`, `getLoveCause`, `handleEntityEvent`, `isBrightEnoughToSpawn`, `isInLove`, `resetLove`, `setInLove`, `setInLoveTime`, `spawnChildFromBreeding`
- from `net.minecraft.world.entity.AgeableMob`: `ageBoundaryReached`, `ageUp`, `ageUp`, `canBreed`, `getAge`, `getSpeedUpSecondsWhenFeeding`, `isBaby`, `onSyncedDataUpdated`, `setAge`, `setBaby`
- from `net.minecraft.world.entity.PathfinderMob`: `checkSpawnRules`, `followLeashSpeed`, `getWalkTargetValue`, `isPanicking`, `isPathFinding`, `onLeashDistance`, `shouldStayCloseToLeashHolder`, `tickLeash`
- from `net.minecraft.world.entity.Mob`: `ate`, `canAttackType`, `canFireProjectileWeapon`, `canHoldItem`, `canPickUpLoot`, `canReplaceCurrentItem`, `canReplaceEqualItem`, `canTakeItem`, `checkDespawn`, `checkMobSpawnRules`, `clearRestriction`, `convertTo`, `createBodyControl`, `createMobAttributes`, `dropCustomDeathLoot`, `dropFromLootTable`, `dropLeash`, `enchantSpawnedArmor`, `enchantSpawnedWeapon`, `equipItemIfPossible`, `getArmorSlots`, `getAttackBoundingBox`, `getControllingPassenger`, `getDefaultLootTable`, `getEquipmentDropChance`, `getEquipmentForSlot`, `getHandSlots`, `getHeadRotSpeed`, `getItemBySlot`, `getJumpControl`, `getLeashHolder`, `getLookControl`, `getLootTable`, `getLootTableSeed`, `getMainArm`, `getMaxFallDistance`, `getMaxSpawnClusterSize`, `getMoveControl`, `getNavigation`, `getPathfindingMalus`, `getPickResult`, `getPickupReach`, `getRestrictCenter`, `getRestrictRadius`, `getSensing`, `getSpawnType`, `getTarget`, `hasRestriction`, `interact`, `isAggressive`, `isEffectiveAi`, `isLeashed`, `isLeftHanded`, `isMaxGroupSizeReached`, `isNoAi`, `isPersistenceRequired`, `isSpawnCancelled`, `isSunBurnTick`, `isWithinMeleeAttackRange`, `isWithinRestriction`, `isWithinRestriction`, `jumpInFluid`, `jumpInLiquid`, `lookAt`, `onOffspringSpawnedFromEgg`, `onPathfindingDone`, `onPathfindingStart`, `pickUpItem`, `playHurtSound`, `populateDefaultEquipmentEnchantments`, `populateDefaultEquipmentSlots`, `registerGoals`, `removeAfterChangingDimensions`, `removeAllGoals`, `removeFreeWill`, `restrictTo`, `serverAiStep`, `setAggressive`, `setCanPickUpLoot`, `setDelayedLeashHolderId`, `setDropChance`, `setGuaranteedDrop`, `setItemSlot`, `setItemSlotAndDropWhenKilled`, `setLeashedTo`, `setLeftHanded`, `setNoAi`, `setPathfindingMalus`, `setPersistenceRequired`, `setSpawnCancelled`, `setSpeed`, `setTarget`, `setXxa`, `setYya`, `setZza`, `shouldDespawnInPeaceful`, `shouldPassengersInheritMalus`, `spawnAnim`, `startRiding`, `tick`, `tickHeadTurn`, `updateControlFlags`, `wantsToPickUp`
- from `net.minecraft.world.entity.LivingEntity`: `actuallyHurt`, `addEffect`, `addEffect`, `animateHurt`, `areAllEffectsAmbient`, `attackable`, `blockedByShield`, `blockUsingShield`, `broadcastBreakEvent`, `broadcastBreakEvent`, `calculateEntityAnimation`, `calculateFallDamage`, `canAttack`, `canAttack`, `canBeAffected`, `canBeSeenByAnyone`, `canChangeDimensions`, `canDisableShield`, `canFreeze`, `canSpawnSoulSpeedParticle`, `canStandOnFluid`, `causeFallDamage`, `checkAutoSpinAttack`, `checkFallDamage`, `clearSleepingPos`, `completeUsingItem`, `createLivingAttributes`, `createWitherRose`, `curePotionEffects`, `decreaseAirSupply`, `die`, `doAutoAttackOnTouch`, `doesEmitEquipEvent`, `doPush`, `dropAllDeathLoot`, `dropEquipment`, `dropExperience`, `eat`, `equipmentHasChanged`, `forceAddEffect`, `getAbsorptionAmount`, `getActiveEffects`, `getActiveEffectsMap`, `getArmorCoverPercentage`, `getArmorValue`, `getArrowCount`, `getAttackAnim`, `getAttribute`, `getAttributeBaseValue`, `getAttributeBaseValue`, `getAttributes`, `getAttributeValue`, `getAttributeValue`, `getBedOrientation`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getCapability`, `getCombatTracker`, `getDamageAfterArmorAbsorb`, `getDamageAfterMagicAbsorb`, `getDimensions`, `getDismountPoses`, `getDrinkingSound`, `getEatingSound`, `getEffect`, `getEquipmentSlotForItem`, `getEyeHeight`, `getFallFlyingTicks`, `getFallSounds`, `getFluidFallingAdjustedMovement`, `getFlyingSpeed`, `getHealth`, `getHitbox`, `getHurtDir`, `getItemInHand`, `getJumpBoostPower`, `getJumpPower`, `getKillCredit`, `getLastAttacker`, `getLastClimbablePos`, `getLastDamageSource`, `getLastHurtByMob`, `getLastHurtByMobTimestamp`, `getLastHurtMob`, `getLastHurtMobTimestamp`, `getLocalBoundsForPose`, `getMainHandItem`, `getMaxAbsorption`, `getMaxHealth`, `getMyRidingOffset`, `getNoActionTime`, `getOffhandItem`, `getPassengerRidingPosition`, `getProjectile`, `getRandom`, `getRelativePortalPosition`, `getRiddenInput`, `getRiddenSpeed`, `getScale`, `getSleepingPos`, `getSlot`, `getSoundVolume`, `getSpeed`, `getStingerCount`, `getSwimAmount`, `getTicksUsingItem`, `getUsedItemHand`, `getUseItem`, `getUseItemRemainingTicks`, `getViewYRot`, `getVisibilityPercent`, `getVisualRotationYInDegrees`, `getVoicePitch`, `getWaterSlowDown`, `getYHeadRot`, `goDownInWater`, `handleDamageEvent`, `handleRelativeFrictionAndCalculateMovement`, `hasEffect`, `hasItemInSlot`, `hasLineOfSight`, `heal`, `hurtArmor`, `hurtCurrentlyUsedShield`, `hurtHelmet`, `increaseAirSupply`, `indicateDamage`, `internalSetAbsorptionAmount`, `invalidateCaps`, `isAffectedByFluids`, `isAffectedByPotions`, `isAlive`, `isAlwaysExperienceDropper`, `isAutoSpinAttack`, `isBlocking`, `isCurrentlyGlowing`, `isDamageSourceBlocked`, `isDeadOrDying`, `isFallFlying`, `isHolding`, `isHolding`, `isImmobile`, `isInvertedHealAndHarm`, `isInWall`, `isPickable`, `isPushable`, `isSensitiveToWater`, `isSleeping`, `isSuppressingSlidingDownLadder`, `isUsingItem`, `isVisuallySwimming`, `jumpFromGround`, `kill`, `knockback`, `lerpHeadRotationStep`, `lerpHeadTo`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `lookAt`, `maxUpStep`, `onBelowWorld`, `onChangedBlock`, `onClimbable`, `onEffectAdded`, `onEffectRemoved`, `onEffectUpdated`, `onEnterCombat`, `onEquipItem`, `onItemPickup`, `onLeaveCombat`, `onSoulSpeedBlock`, `playBlockFallSound`, `push`, `pushEntities`, `randomTeleport`, `recreateFromPacket`, `releaseUsingItem`, `remove`, `removeAllEffects`, `removeEffect`, `removeEffectNoUpdate`, `removeEffectParticles`, `removeFrost`, `removeSoulSpeed`, `resetForwardDirectionOfRelativePortalPosition`, `reviveCaps`, `rideTick`, `sendEffectToPassengers`, `setAbsorptionAmount`, `setArrowCount`, `setDiscardFriction`, `setHealth`, `setItemInHand`, `setJumping`, `setLastHurtByMob`, `setLastHurtByPlayer`, `setLastHurtMob`, `setLivingEntityFlag`, `setNoActionTime`, `setRecordPlayingNearby`, `setSleepingPos`, `setSprinting`, `setStingerCount`, `setYBodyRot`, `setYHeadRot`, `shouldDiscardFriction`, `shouldDropExperience`, `shouldDropLoot`, `shouldRemoveSoulSpeed`, `shouldRiderFaceForward`, `shouldShowName`, `skipDropExperience`, `spawnSoulSpeedParticle`, `startSleeping`, `startUsingItem`, `stopRiding`, `stopSleeping`, `stopUsingItem`, `swing`, `swing`, `take`, `tickDeath`, `tickEffects`, `tickRidden`, `triggerItemUseEffects`, `tryAddFrost`, `tryAddSoulSpeed`, `updateEffectVisibility`, `updateInvisibilityStatus`, `updateSwingTime`, `updateUsingItem`, `updateWalkAnimation`, `verifyEquippedItem`, `wasExperienceConsumed`, `wouldNotSuffocateAtTargetPose`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canCollideWith`, `canControlVehicle`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYRot`, `getZ`, `getZ`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `killedEntity`, `lavaHurt`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `refreshDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startSeenByPlayer`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getEyeInFluidType`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getFluidTypeHeight`, `getMaxHeightFluidType`, `getParts`, `getPersistentData`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isAddedToWorld`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `onAddedToWorld`, `onRemovedFromWorld`, `revive`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraftforge.common.extensions.IForgeLivingEntity`: `canDrownInFluidType`, `canSwimInFluidType`, `moveInFluid`, `self`, `sinkInFluid`

## Axolotl.AxolotlGroupData

*class* `net.minecraft.world.entity.animal.axolotl.Axolotl.AxolotlGroupData`

Enclosing class: Axolotl

### Fields
- `public final Axolotl.Variant[] types`

### Methods
- `public Axolotl.Variant getVariant(RandomSource p_218447_)`

### Inherited methods
- from `net.minecraft.world.entity.AgeableMob.AgeableMobGroupData`: `getBabySpawnChance`, `getGroupSize`, `increaseGroupSizeByOne`, `isShouldSpawnBaby`

## Axolotl.AxolotlLookControl

*class* `net.minecraft.world.entity.animal.axolotl.Axolotl.AxolotlLookControl`

Enclosing class: Axolotl

### Inherited fields
- from `net.minecraft.world.entity.ai.control.LookControl`: `lookAtCooldown`, `mob`, `wantedX`, `wantedY`, `wantedZ`, `xMaxRotAngle`, `yMaxRotSpeed`

### Methods
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.control.LookControl`: `clampHeadRotationToBody`, `getWantedX`, `getWantedY`, `getWantedZ`, `getXRotD`, `getYRotD`, `isLookingAtTarget`, `resetXRotOnTick`, `rotateTowards`, `setLookAt`, `setLookAt`, `setLookAt`, `setLookAt`, `setLookAt`

## Axolotl.AxolotlMoveControl

*class* `net.minecraft.world.entity.animal.axolotl.Axolotl.AxolotlMoveControl`

Enclosing class: Axolotl

### Fields
- `private final Axolotl axolotl`

### Inherited fields
- from `net.minecraft.world.entity.ai.control.MoveControl`: `MAX_TURN`, `MIN_SPEED`, `MIN_SPEED_SQR`, `mob`, `operation`, `speedModifier`, `strafeForwards`, `strafeRight`, `wantedX`, `wantedY`, `wantedZ`

### Methods
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.control.MoveControl`: `getSpeedModifier`, `getWantedX`, `getWantedY`, `getWantedZ`, `hasWanted`, `rotlerp`, `setWantedPosition`, `strafe`

## AxolotlAi

*class* `net.minecraft.world.entity.animal.axolotl.AxolotlAi`

### Fields
- `private static final UniformInt ADULT_FOLLOW_RANGE`
- `private static final float SPEED_MULTIPLIER_WHEN_MAKING_LOVE` (= 0.20000000298023224f)
- `private static final float SPEED_MULTIPLIER_ON_LAND` (= 0.15000000596046448f)
- `private static final float SPEED_MULTIPLIER_WHEN_IDLING_IN_WATER` (= 0.5f)
- `private static final float SPEED_MULTIPLIER_WHEN_CHASING_IN_WATER` (= 0.6000000238418579f)
- `private static final float SPEED_MULTIPLIER_WHEN_FOLLOWING_ADULT_IN_WATER` (= 0.6000000238418579f)

### Methods
- `protected static Brain<?> makeBrain(Brain<Axolotl> p_149291_)`
- `private static void initPlayDeadActivity(Brain<Axolotl> p_149297_)`
- `private static void initFightActivity(Brain<Axolotl> p_149303_)`
- `private static void initCoreActivity(Brain<Axolotl> p_149307_)`
- `private static void initIdleActivity(Brain<Axolotl> p_149309_)`
- `private static boolean canSetWalkTargetFromLookTarget(LivingEntity p_182381_)`
- `public static void updateActivity(Axolotl p_149293_)`
- `private static float getSpeedModifierChasing(LivingEntity p_149289_)`
- `private static float getSpeedModifierFollowingAdult(LivingEntity p_149295_)`
- `private static float getSpeedModifier(LivingEntity p_149301_)`
- `private static Optional<? extends LivingEntity> findNearestValidAttackTarget(Axolotl p_149299_)`
- `public static Ingredient getTemptations()`

## Class Axolotl.Variant

*enum* `net.minecraft.world.entity.animal.axolotl.Class Axolotl.Variant`

Enclosing class: Axolotl

### Fields
- `private static final IntFunction<Axolotl.Variant> BY_ID`
- `public static final com.mojang.serialization.Codec<Axolotl.Variant> CODEC`
- `private final int id`
- `private final String name`
- `private final boolean common`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static Axolotl.Variant[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Axolotl.Variant valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getId()`
- `public String getName()`
- `public String getSerializedName()`
- `public static Axolotl.Variant byId(int p_262930_)`
- `public static Axolotl.Variant getCommonSpawnVariant(RandomSource p_218449_)`
- `public static Axolotl.Variant getRareSpawnVariant(RandomSource p_218454_)`
- `private static Axolotl.Variant getSpawnVariant(RandomSource p_218451_,  boolean p_218452_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## PlayDead

*class* `net.minecraft.world.entity.animal.axolotl.PlayDead`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_149319_,  Axolotl p_149320_)`
- `protected boolean canStillUse(ServerLevel p_149322_,  Axolotl p_149323_,  long p_149324_)`
- `protected void start(ServerLevel p_149330_,  Axolotl p_149331_,  long p_149332_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `stop`, `tick`, `tickOrStop`, `timedOut`, `tryStart`

## ValidatePlayDead

*class* `net.minecraft.world.entity.animal.axolotl.ValidatePlayDead`

### Methods
- `public static BehaviorControl<LivingEntity> create()`
