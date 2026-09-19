# net.minecraft.world.entity.decoration

- [ArmorStand](#armorstand)
- [GlowItemFrame](#glowitemframe)
- [HangingEntity](#hangingentity)
- [ItemFrame](#itemframe)
- [LeashFenceKnotEntity](#leashfenceknotentity)
- [Painting](#painting)
- [PaintingVariant](#paintingvariant)
- [PaintingVariants](#paintingvariants)
## ArmorStand

*class* `net.minecraft.world.entity.decoration.ArmorStand`

### Fields
- `public static final int WOBBLE_TIME` (= 5)
- `private static final boolean ENABLE_ARMS` (= true)
- `private static final Rotations DEFAULT_HEAD_POSE`
- `private static final Rotations DEFAULT_BODY_POSE`
- `private static final Rotations DEFAULT_LEFT_ARM_POSE`
- `private static final Rotations DEFAULT_RIGHT_ARM_POSE`
- `private static final Rotations DEFAULT_LEFT_LEG_POSE`
- `private static final Rotations DEFAULT_RIGHT_LEG_POSE`
- `private static final EntityDimensions MARKER_DIMENSIONS`
- `private static final EntityDimensions BABY_DIMENSIONS`
- `private static final double FEET_OFFSET` (= 0.1)
- `private static final double CHEST_OFFSET` (= 0.9)
- `private static final double LEGS_OFFSET` (= 0.4)
- `private static final double HEAD_OFFSET` (= 1.6)
- `public static final int DISABLE_TAKING_OFFSET` (= 8)
- `public static final int DISABLE_PUTTING_OFFSET` (= 16)
- `public static final int CLIENT_FLAG_SMALL` (= 1)
- `public static final int CLIENT_FLAG_SHOW_ARMS` (= 4)
- `public static final int CLIENT_FLAG_NO_BASEPLATE` (= 8)
- `public static final int CLIENT_FLAG_MARKER` (= 16)
- `public static final EntityDataAccessor<Byte> DATA_CLIENT_FLAGS`
- `public static final EntityDataAccessor<Rotations> DATA_HEAD_POSE`
- `public static final EntityDataAccessor<Rotations> DATA_BODY_POSE`
- `public static final EntityDataAccessor<Rotations> DATA_LEFT_ARM_POSE`
- `public static final EntityDataAccessor<Rotations> DATA_RIGHT_ARM_POSE`
- `public static final EntityDataAccessor<Rotations> DATA_LEFT_LEG_POSE`
- `public static final EntityDataAccessor<Rotations> DATA_RIGHT_LEG_POSE`
- `private static final Predicate<Entity> RIDABLE_MINECARTS`
- `private final NonNullList<ItemStack> handItems`
- `private final NonNullList<ItemStack> armorItems`
- `private boolean invisible`
- `public long lastHit`
- `private int disabledSlots`
- `private Rotations headPose`
- `private Rotations bodyPose`
- `private Rotations leftArmPose`
- `private Rotations rightArmPose`
- `private Rotations leftLegPose`
- `private Rotations rightLegPose`

### Inherited fields
- from `net.minecraft.world.entity.LivingEntity`: `animStep`, `animStepO`, `ARMOR_SLOT_OFFSET`, `ARMOR_SLOTS`, `attackAnim`, `attackStrengthTicker`, `autoSpinAttackTicks`, `brain`, `DATA_LIVING_ENTITY_FLAGS`, `dead`, `DEATH_DURATION`, `deathScore`, `deathTime`, `DEFAULT_BASE_GRAVITY`, `DEFAULT_EYE_HEIGHT`, `EQUIPMENT_SLOT_OFFSET`, `EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT`, `fallFlyTicks`, `HAND_SLOTS`, `hurtDuration`, `hurtTime`, `invulnerableDuration`, `jumping`, `lastHurt`, `lastHurtByPlayer`, `lastHurtByPlayerTime`, `lerpHeadSteps`, `lerpSteps`, `lerpX`, `lerpXRot`, `lerpY`, `lerpYHeadRot`, `lerpYRot`, `lerpZ`, `LIVING_ENTITY_FLAG_IS_USING`, `LIVING_ENTITY_FLAG_OFF_HAND`, `LIVING_ENTITY_FLAG_SPIN_ATTACK`, `MIN_MOVEMENT_DISTANCE`, `noActionTime`, `oAttackAnim`, `oRun`, `PLAYER_HURT_EXPERIENCE_TIME`, `removeArrowTime`, `removeStingerTime`, `rotA`, `rotOffs`, `run`, `SLEEPING_DIMENSIONS`, `SWING_DURATION`, `swinging`, `swingingArm`, `swingTime`, `timeOffs`, `USE_ITEM_INTERVAL`, `useItem`, `useItemRemaining`, `walkAnimation`, `xxa`, `yBodyRot`, `yBodyRotO`, `yHeadRot`, `yHeadRotO`, `yya`, `zza`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `public void refreshDimensions()`
- `private boolean hasPhysics()`
- `public boolean isEffectiveAi()`
- `protected void defineSynchedData()`
- `public Iterable<ItemStack> getHandSlots()`
- `public Iterable<ItemStack> getArmorSlots()`
- `public ItemStack getItemBySlot(EquipmentSlot p_31612_)`
- `public void setItemSlot(EquipmentSlot p_31584_,  ItemStack p_31585_)`
- `public boolean canTakeItem(ItemStack p_31638_)`
- `public void addAdditionalSaveData(CompoundTag p_31619_)`
- `public void readAdditionalSaveData(CompoundTag p_31600_)`
- `private void readPose(CompoundTag p_31658_)`
- `private CompoundTag writePose()`
- `public boolean isPushable()`
- `protected void doPush(Entity p_31564_)`
- `protected void pushEntities()`
- `public InteractionResult interactAt(Player p_31594_,  Vec3 p_31595_,  InteractionHand p_31596_)`
- `private EquipmentSlot getClickedSlot(Vec3 p_31660_)`
- `private boolean isDisabled(EquipmentSlot p_31627_)`
- `private boolean swapItem(Player p_31589_,  EquipmentSlot p_31590_,  ItemStack p_31591_,  InteractionHand p_31592_)`
- `public boolean hurt(DamageSource p_31579_,  float p_31580_)`
- `public void handleEntityEvent(byte p_31568_)`
- `public boolean shouldRenderAtSqrDistance(double p_31574_)`
- `private void showBreakingParticles()`
- `private void causeDamage(DamageSource p_31649_,  float p_31650_)`
- `private void brokenByPlayer(DamageSource p_31647_)`
- `private void brokenByAnything(DamageSource p_31654_)`
- `private void playBrokenSound()`
- `protected float tickHeadTurn(float p_31644_,  float p_31645_)`
- `protected float getStandingEyeHeight(Pose p_31614_,  EntityDimensions p_31615_)`
- `public void travel(Vec3 p_31656_)`
- `public void setYBodyRot(float p_31670_)`
- `public void setYHeadRot(float p_31668_)`
- `public void tick()`
- `protected void updateInvisibilityStatus()`
- `public void setInvisible(boolean p_31663_)`
- `public boolean isBaby()`
- `public void kill()`
- `public boolean ignoreExplosion()`
- `public PushReaction getPistonPushReaction()`
- `public boolean isIgnoringBlockTriggers()`
- `private void setSmall(boolean p_31604_)`
- `public boolean isSmall()`
- `public void setShowArms(boolean p_31676_)`
- `public boolean isShowArms()`
- `public void setNoBasePlate(boolean p_31679_)`
- `public boolean isNoBasePlate()`
- `private void setMarker(boolean p_31682_)`
- `public boolean isMarker()`
- `private byte setBit(byte p_31570_,  int p_31571_,  boolean p_31572_)`
- `public void setHeadPose(Rotations p_31598_)`
- `public void setBodyPose(Rotations p_31617_)`
- `public void setLeftArmPose(Rotations p_31624_)`
- `public void setRightArmPose(Rotations p_31629_)`
- `public void setLeftLegPose(Rotations p_31640_)`
- `public void setRightLegPose(Rotations p_31652_)`
- `public Rotations getHeadPose()`
- `public Rotations getBodyPose()`
- `public Rotations getLeftArmPose()`
- `public Rotations getRightArmPose()`
- `public Rotations getLeftLegPose()`
- `public Rotations getRightLegPose()`
- `public boolean isPickable()`
- `public boolean skipAttackInteraction(Entity p_31687_)`
- `public HumanoidArm getMainArm()`
- `public LivingEntity.Fallsounds getFallSounds()`
- `@Nullable protected SoundEvent getHurtSound(DamageSource p_31636_)`
- `@Nullable protected SoundEvent getDeathSound()`
- `public void thunderHit(ServerLevel p_31576_,  LightningBolt p_31577_)`
- `public boolean isAffectedByPotions()`
- `public void onSyncedDataUpdated(EntityDataAccessor<?> p_31602_)`
- `public boolean attackable()`
- `public EntityDimensions getDimensions(Pose p_31587_)`
- `private EntityDimensions getDimensionsMarker(boolean p_31684_)`
- `public Vec3 getLightProbePosition(float p_31665_)`
- `public ItemStack getPickResult()`
- `public boolean canBeSeenByAnyone()`

### Inherited methods
- from `net.minecraft.world.entity.LivingEntity`: `actuallyHurt`, `addEffect`, `addEffect`, `aiStep`, `animateHurt`, `areAllEffectsAmbient`, `baseTick`, `blockedByShield`, `blockUsingShield`, `brainProvider`, `broadcastBreakEvent`, `broadcastBreakEvent`, `calculateEntityAnimation`, `calculateFallDamage`, `canAttack`, `canAttack`, `canAttackType`, `canBeAffected`, `canBeSeenAsEnemy`, `canBreatheUnderwater`, `canChangeDimensions`, `canDisableShield`, `canFreeze`, `canSpawnSoulSpeedParticle`, `canStandOnFluid`, `causeFallDamage`, `checkAutoSpinAttack`, `checkFallDamage`, `clearSleepingPos`, `completeUsingItem`, `createLivingAttributes`, `createWitherRose`, `curePotionEffects`, `decreaseAirSupply`, `die`, `doAutoAttackOnTouch`, `doesEmitEquipEvent`, `doHurtTarget`, `dropAllDeathLoot`, `dropCustomDeathLoot`, `dropEquipment`, `dropExperience`, `dropFromLootTable`, `eat`, `equipmentHasChanged`, `forceAddEffect`, `getAbsorptionAmount`, `getActiveEffects`, `getActiveEffectsMap`, `getArmorCoverPercentage`, `getArmorValue`, `getArrowCount`, `getAttackAnim`, `getAttribute`, `getAttributeBaseValue`, `getAttributeBaseValue`, `getAttributes`, `getAttributeValue`, `getAttributeValue`, `getBedOrientation`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getBrain`, `getCapability`, `getCombatTracker`, `getDamageAfterArmorAbsorb`, `getDamageAfterMagicAbsorb`, `getDismountPoses`, `getDrinkingSound`, `getEatingSound`, `getEffect`, `getEquipmentSlotForItem`, `getExperienceReward`, `getEyeHeight`, `getFallFlyingTicks`, `getFluidFallingAdjustedMovement`, `getFlyingSpeed`, `getHealth`, `getHitbox`, `getHurtDir`, `getItemInHand`, `getJumpBoostPower`, `getJumpPower`, `getKillCredit`, `getLastAttacker`, `getLastClimbablePos`, `getLastDamageSource`, `getLastHurtByMob`, `getLastHurtByMobTimestamp`, `getLastHurtMob`, `getLastHurtMobTimestamp`, `getLocalBoundsForPose`, `getLootTable`, `getLootTableSeed`, `getMainHandItem`, `getMaxAbsorption`, `getMaxHealth`, `getMobType`, `getMyRidingOffset`, `getNoActionTime`, `getOffhandItem`, `getPassengerRidingPosition`, `getProjectile`, `getRandom`, `getRelativePortalPosition`, `getRiddenInput`, `getRiddenSpeed`, `getScale`, `getSleepingPos`, `getSlot`, `getSoundVolume`, `getSpeed`, `getStingerCount`, `getSwimAmount`, `getTicksUsingItem`, `getUsedItemHand`, `getUseItem`, `getUseItemRemainingTicks`, `getViewYRot`, `getVisibilityPercent`, `getVisualRotationYInDegrees`, `getVoicePitch`, `getWaterSlowDown`, `getYHeadRot`, `goDownInWater`, `handleDamageEvent`, `handleRelativeFrictionAndCalculateMovement`, `hasEffect`, `hasItemInSlot`, `hasLineOfSight`, `heal`, `hurtArmor`, `hurtCurrentlyUsedShield`, `hurtHelmet`, `increaseAirSupply`, `indicateDamage`, `internalSetAbsorptionAmount`, `invalidateCaps`, `isAffectedByFluids`, `isAlive`, `isAlwaysExperienceDropper`, `isAutoSpinAttack`, `isBlocking`, `isCurrentlyGlowing`, `isDamageSourceBlocked`, `isDeadOrDying`, `isFallFlying`, `isHolding`, `isHolding`, `isImmobile`, `isInvertedHealAndHarm`, `isInWall`, `isSensitiveToWater`, `isSleeping`, `isSuppressingSlidingDownLadder`, `isUsingItem`, `isVisuallySwimming`, `jumpFromGround`, `jumpInLiquid`, `knockback`, `lerpHeadRotationStep`, `lerpHeadTo`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `lookAt`, `makeBrain`, `maxUpStep`, `onBelowWorld`, `onChangedBlock`, `onClimbable`, `onEffectAdded`, `onEffectRemoved`, `onEffectUpdated`, `onEnterCombat`, `onEquipItem`, `onItemPickup`, `onLeaveCombat`, `onSoulSpeedBlock`, `playBlockFallSound`, `playHurtSound`, `push`, `randomTeleport`, `recreateFromPacket`, `releaseUsingItem`, `remove`, `removeAllEffects`, `removeEffect`, `removeEffectNoUpdate`, `removeEffectParticles`, `removeFrost`, `removeSoulSpeed`, `resetForwardDirectionOfRelativePortalPosition`, `reviveCaps`, `rideTick`, `sendEffectToPassengers`, `serverAiStep`, `setAbsorptionAmount`, `setArrowCount`, `setDiscardFriction`, `setHealth`, `setItemInHand`, `setJumping`, `setLastHurtByMob`, `setLastHurtByPlayer`, `setLastHurtMob`, `setLivingEntityFlag`, `setNoActionTime`, `setRecordPlayingNearby`, `setSleepingPos`, `setSpeed`, `setSprinting`, `setStingerCount`, `shouldDiscardFriction`, `shouldDropExperience`, `shouldDropLoot`, `shouldRemoveSoulSpeed`, `shouldRiderFaceForward`, `shouldShowName`, `skipDropExperience`, `spawnSoulSpeedParticle`, `startSleeping`, `startUsingItem`, `stopRiding`, `stopSleeping`, `stopUsingItem`, `swing`, `swing`, `take`, `tickDeath`, `tickEffects`, `tickRidden`, `triggerItemUseEffects`, `tryAddFrost`, `tryAddSoulSpeed`, `updateEffectVisibility`, `updateSwingTime`, `updateUsingItem`, `updateWalkAnimation`, `verifyEquippedItem`, `wasExperienceConsumed`, `wouldNotSuffocateAtTargetPose`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canCollideWith`, `canControlVehicle`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYRot`, `getZ`, `getZ`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `interact`, `is`, `isAddedToWorld`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `killedEntity`, `lavaHurt`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvulnerable`, `setIsInPowderSnow`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `showVehicleHealth`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getEyeInFluidType`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getFluidTypeHeight`, `getMaxHeightFluidType`, `getParts`, `getPersistentData`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isAddedToWorld`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `onAddedToWorld`, `onRemovedFromWorld`, `revive`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraftforge.common.extensions.IForgeLivingEntity`: `canDrownInFluidType`, `canSwimInFluidType`, `jumpInFluid`, `moveInFluid`, `self`, `sinkInFluid`

## GlowItemFrame

*class* `net.minecraft.world.entity.decoration.GlowItemFrame`

### Inherited fields
- from `net.minecraft.world.entity.decoration.ItemFrame`: `NUM_ROTATIONS`
- from `net.minecraft.world.entity.decoration.HangingEntity`: `direction`, `HANGING_ENTITY`, `pos`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `public SoundEvent getRemoveItemSound()`
- `public SoundEvent getBreakSound()`
- `public SoundEvent getPlaceSound()`
- `public SoundEvent getAddItemSound()`
- `public SoundEvent getRotateItemSound()`
- `protected ItemStack getFrameItemStack()`

### Inherited methods
- from `net.minecraft.world.entity.decoration.ItemFrame`: `addAdditionalSaveData`, `defineSynchedData`, `dropItem`, `getAddEntityPacket`, `getAnalogOutput`, `getEyeHeight`, `getFramedMapId`, `getHeight`, `getItem`, `getPickRadius`, `getPickResult`, `getRotation`, `getSlot`, `getVisualRotationYInDegrees`, `getWidth`, `hasFramedMap`, `hurt`, `interact`, `kill`, `move`, `onSyncedDataUpdated`, `playPlacementSound`, `push`, `readAdditionalSaveData`, `recalculateBoundingBox`, `recreateFromPacket`, `setDirection`, `setItem`, `setItem`, `setRotation`, `shouldRenderAtSqrDistance`, `survives`
- from `net.minecraft.world.entity.decoration.HangingEntity`: `getDirection`, `getPos`, `isPickable`, `mirror`, `refreshDimensions`, `repositionEntityAfterLoad`, `rotate`, `setPos`, `skipAttackInteraction`, `spawnAtLocation`, `thunderHit`, `tick`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `animateHurt`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canCollideWith`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockSpeedFactor`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getBoundingBoxForCulling`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRelativePortalPosition`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushable`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpMotion`, `lerpPositionAndRotationStep`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldShowName`, `showVehicleHealth`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## HangingEntity

*class* `net.minecraft.world.entity.decoration.HangingEntity`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `protected static final Predicate<Entity> HANGING_ENTITY`
- `private int checkInterval`
- `protected BlockPos pos`
- `protected Direction direction`

### Inherited fields
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `protected void defineSynchedData()`
- `protected void setDirection(Direction p_31728_)`
- `protected void recalculateBoundingBox()`
- `private double offs(int p_31710_)`
- `public void tick()`
- `public boolean survives()`
- `public boolean isPickable()`
- `public boolean skipAttackInteraction(Entity p_31750_)`
- `public Direction getDirection()`
- `public boolean hurt(DamageSource p_31715_,  float p_31716_)`
- `public void move(MoverType p_31719_,  Vec3 p_31720_)`
- `public void push(double p_31744_,  double p_31745_,  double p_31746_)`
- `public void addAdditionalSaveData(CompoundTag p_31736_)`
- `public void readAdditionalSaveData(CompoundTag p_31730_)`
- `public abstract int getWidth()`
- `public abstract int getHeight()`
- `public abstract void dropItem(@Nullable  Entity p_31717_)`
- `public abstract void playPlacementSound()`
- `public ItemEntity spawnAtLocation(ItemStack p_31722_,  float p_31723_)`
- `protected boolean repositionEntityAfterLoad()`
- `public void setPos(double p_31739_,  double p_31740_,  double p_31741_)`
- `public BlockPos getPos()`
- `public float rotate(Rotation p_31727_)`
- `public float mirror(Mirror p_31725_)`
- `public void thunderHit(ServerLevel p_31712_,  LightningBolt p_31713_)`
- `public void refreshDimensions()`

### Inherited methods
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `animateHurt`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canCollideWith`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockSpeedFactor`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getBoundingBoxForCulling`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPickResult`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRelativePortalPosition`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSlot`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interact`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushable`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpMotion`, `lerpPositionAndRotationStep`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `recreateFromPacket`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `shouldShowName`, `showVehicleHealth`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## ItemFrame

*class* `net.minecraft.world.entity.decoration.ItemFrame`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final EntityDataAccessor<ItemStack> DATA_ITEM`
- `private static final EntityDataAccessor<Integer> DATA_ROTATION`
- `public static final int NUM_ROTATIONS` (= 8)
- `private float dropChance`
- `private boolean fixed`

### Inherited fields
- from `net.minecraft.world.entity.decoration.HangingEntity`: `direction`, `HANGING_ENTITY`, `pos`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `protected float getEyeHeight(Pose p_31784_,  EntityDimensions p_31785_)`
- `protected void defineSynchedData()`
- `protected void setDirection(Direction p_31793_)`
- `protected void recalculateBoundingBox()`
- `public boolean survives()`
- `public void move(MoverType p_31781_,  Vec3 p_31782_)`
- `public void push(double p_31817_,  double p_31818_,  double p_31819_)`
- `public float getPickRadius()`
- `public void kill()`
- `public boolean hurt(DamageSource p_31776_,  float p_31777_)`
- `public SoundEvent getRemoveItemSound()`
- `public int getWidth()`
- `public int getHeight()`
- `public boolean shouldRenderAtSqrDistance(double p_31769_)`
- `public void dropItem(@Nullable  Entity p_31779_)`
- `public SoundEvent getBreakSound()`
- `public void playPlacementSound()`
- `public SoundEvent getPlaceSound()`
- `private void dropItem(@Nullable  Entity p_31803_,  boolean p_31804_)`
- `private void removeFramedMap(ItemStack p_31811_)`
- `public ItemStack getItem()`
- `public OptionalInt getFramedMapId()`
- `public boolean hasFramedMap()`
- `public void setItem(ItemStack p_31806_)`
- `public void setItem(ItemStack p_31790_,  boolean p_31791_)`
- `public SoundEvent getAddItemSound()`
- `public SlotAccess getSlot(int p_149629_)`
- `public void onSyncedDataUpdated(EntityDataAccessor<?> p_31797_)`
- `private void onItemChanged(ItemStack p_218866_)`
- `public int getRotation()`
- `public void setRotation(int p_31771_)`
- `private void setRotation(int p_31773_,  boolean p_31774_)`
- `public void addAdditionalSaveData(CompoundTag p_31808_)`
- `public void readAdditionalSaveData(CompoundTag p_31795_)`
- `public InteractionResult interact(Player p_31787_,  InteractionHand p_31788_)`
- `public SoundEvent getRotateItemSound()`
- `public int getAnalogOutput()`
- `public Packet<ClientGamePacketListener> getAddEntityPacket()`
- `public void recreateFromPacket(ClientboundAddEntityPacket p_149626_)`
- `public ItemStack getPickResult()`
- `protected ItemStack getFrameItemStack()`
- `public float getVisualRotationYInDegrees()`

### Inherited methods
- from `net.minecraft.world.entity.decoration.HangingEntity`: `getDirection`, `getPos`, `isPickable`, `mirror`, `refreshDimensions`, `repositionEntityAfterLoad`, `rotate`, `setPos`, `skipAttackInteraction`, `spawnAtLocation`, `thunderHit`, `tick`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `animateHurt`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canCollideWith`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockSpeedFactor`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getBoundingBoxForCulling`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRelativePortalPosition`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushable`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpMotion`, `lerpPositionAndRotationStep`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldShowName`, `showVehicleHealth`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## LeashFenceKnotEntity

*class* `net.minecraft.world.entity.decoration.LeashFenceKnotEntity`

### Fields
- `public static final double OFFSET_Y` (= 0.375)

### Inherited fields
- from `net.minecraft.world.entity.decoration.HangingEntity`: `direction`, `HANGING_ENTITY`, `pos`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `protected void recalculateBoundingBox()`
- `public void setDirection(Direction p_31848_)`
- `public int getWidth()`
- `public int getHeight()`
- `protected float getEyeHeight(Pose p_31839_,  EntityDimensions p_31840_)`
- `public boolean shouldRenderAtSqrDistance(double p_31835_)`
- `public void dropItem(@Nullable  Entity p_31837_)`
- `public void addAdditionalSaveData(CompoundTag p_31852_)`
- `public void readAdditionalSaveData(CompoundTag p_31850_)`
- `public InteractionResult interact(Player p_31842_,  InteractionHand p_31843_)`
- `public boolean survives()`
- `public static LeashFenceKnotEntity getOrCreateKnot(Level p_31845_,  BlockPos p_31846_)`
- `public void playPlacementSound()`
- `public Packet<ClientGamePacketListener> getAddEntityPacket()`
- `public Vec3 getRopeHoldPosition(float p_31863_)`
- `public ItemStack getPickResult()`

### Inherited methods
- from `net.minecraft.world.entity.decoration.HangingEntity`: `defineSynchedData`, `getDirection`, `getPos`, `hurt`, `isPickable`, `mirror`, `move`, `push`, `refreshDimensions`, `repositionEntityAfterLoad`, `rotate`, `setPos`, `skipAttackInteraction`, `spawnAtLocation`, `thunderHit`, `tick`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `animateHurt`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canCollideWith`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockSpeedFactor`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getBoundingBoxForCulling`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRelativePortalPosition`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSlot`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushable`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpMotion`, `lerpPositionAndRotationStep`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `recreateFromPacket`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldShowName`, `showVehicleHealth`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## Painting

*class* `net.minecraft.world.entity.decoration.Painting`

### Fields
- `private static final EntityDataAccessor<Holder<PaintingVariant>> DATA_PAINTING_VARIANT_ID`
- `private static final ResourceKey<PaintingVariant> DEFAULT_VARIANT`
- `public static final String VARIANT_TAG` (= "variant")

### Inherited fields
- from `net.minecraft.world.entity.decoration.HangingEntity`: `direction`, `HANGING_ENTITY`, `pos`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `private static Holder<PaintingVariant> getDefaultVariant()`
- `protected void defineSynchedData()`
- `public void onSyncedDataUpdated(EntityDataAccessor<?> p_218896_)`
- `public void setVariant(Holder<PaintingVariant> p_218892_)`
- `public Holder<PaintingVariant> getVariant()`
- `public static Optional<Painting> create(Level p_218888_,  BlockPos p_218889_,  Direction p_218890_)`
- `private static int variantArea(Holder<PaintingVariant> p_218899_)`
- `public void addAdditionalSaveData(CompoundTag p_31935_)`
- `public void readAdditionalSaveData(CompoundTag p_31927_)`
- `public static void storeVariant(CompoundTag p_270928_,  Holder<PaintingVariant> p_270667_)`
- `public static Optional<Holder<PaintingVariant>> loadVariant(CompoundTag p_271010_)`
- `public int getWidth()`
- `public int getHeight()`
- `public void dropItem(@Nullable  Entity p_31925_)`
- `public void playPlacementSound()`
- `public void moveTo(double p_31929_,  double p_31930_,  double p_31931_,  float p_31932_,  float p_31933_)`
- `public void lerpTo(double p_31917_,  double p_31918_,  double p_31919_,  float p_31920_,  float p_31921_,  int p_31922_)`
- `public Vec3 trackingPosition()`
- `public Packet<ClientGamePacketListener> getAddEntityPacket()`
- `public void recreateFromPacket(ClientboundAddEntityPacket p_218894_)`
- `public ItemStack getPickResult()`

### Inherited methods
- from `net.minecraft.world.entity.decoration.HangingEntity`: `getDirection`, `getPos`, `hurt`, `isPickable`, `mirror`, `move`, `push`, `recalculateBoundingBox`, `refreshDimensions`, `repositionEntityAfterLoad`, `rotate`, `setDirection`, `setPos`, `skipAttackInteraction`, `spawnAtLocation`, `survives`, `thunderHit`, `tick`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `animateHurt`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canCollideWith`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockSpeedFactor`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getBoundingBoxForCulling`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRelativePortalPosition`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSlot`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interact`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushable`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpMotion`, `lerpPositionAndRotationStep`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `shouldShowName`, `showVehicleHealth`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `toString`, `touchingUnloadedChunk`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## PaintingVariant

*class* `net.minecraft.world.entity.decoration.PaintingVariant`

### Fields
- `private final int width`
- `private final int height`

### Methods
- `public int getWidth()`
- `public int getHeight()`

## PaintingVariants

*class* `net.minecraft.world.entity.decoration.PaintingVariants`

### Fields
- `public static final ResourceKey<PaintingVariant> KEBAB`
- `public static final ResourceKey<PaintingVariant> AZTEC`
- `public static final ResourceKey<PaintingVariant> ALBAN`
- `public static final ResourceKey<PaintingVariant> AZTEC2`
- `public static final ResourceKey<PaintingVariant> BOMB`
- `public static final ResourceKey<PaintingVariant> PLANT`
- `public static final ResourceKey<PaintingVariant> WASTELAND`
- `public static final ResourceKey<PaintingVariant> POOL`
- `public static final ResourceKey<PaintingVariant> COURBET`
- `public static final ResourceKey<PaintingVariant> SEA`
- `public static final ResourceKey<PaintingVariant> SUNSET`
- `public static final ResourceKey<PaintingVariant> CREEBET`
- `public static final ResourceKey<PaintingVariant> WANDERER`
- `public static final ResourceKey<PaintingVariant> GRAHAM`
- `public static final ResourceKey<PaintingVariant> MATCH`
- `public static final ResourceKey<PaintingVariant> BUST`
- `public static final ResourceKey<PaintingVariant> STAGE`
- `public static final ResourceKey<PaintingVariant> VOID`
- `public static final ResourceKey<PaintingVariant> SKULL_AND_ROSES`
- `public static final ResourceKey<PaintingVariant> WITHER`
- `public static final ResourceKey<PaintingVariant> FIGHTERS`
- `public static final ResourceKey<PaintingVariant> POINTER`
- `public static final ResourceKey<PaintingVariant> PIGSCENE`
- `public static final ResourceKey<PaintingVariant> BURNING_SKULL`
- `public static final ResourceKey<PaintingVariant> SKELETON`
- `public static final ResourceKey<PaintingVariant> DONKEY_KONG`
- `public static final ResourceKey<PaintingVariant> EARTH`
- `public static final ResourceKey<PaintingVariant> WIND`
- `public static final ResourceKey<PaintingVariant> WATER`
- `public static final ResourceKey<PaintingVariant> FIRE`

### Methods
- `public static PaintingVariant bootstrap(Registry<PaintingVariant> p_218943_)`
- `private static ResourceKey<PaintingVariant> create(String p_218945_)`
