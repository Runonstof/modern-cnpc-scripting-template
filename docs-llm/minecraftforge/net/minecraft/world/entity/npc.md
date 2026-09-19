# net.minecraft.world.entity.npc

- [AbstractVillager](#abstractvillager)
- [CatSpawner](#catspawner)
- [ClientSideMerchant](#clientsidemerchant)
- [InventoryCarrier](#inventorycarrier)
- [Npc](#npc)
- [Villager](#villager)
- [VillagerData](#villagerdata)
- [VillagerDataHolder](#villagerdataholder)
- [VillagerProfession](#villagerprofession)
- [VillagerTrades](#villagertrades)
- [VillagerTrades.DyedArmorForEmeralds](#villagertrades.dyedarmorforemeralds)
- [VillagerTrades.EmeraldForItems](#villagertrades.emeraldforitems)
- [VillagerTrades.EmeraldsForVillagerTypeItem](#villagertrades.emeraldsforvillagertypeitem)
- [VillagerTrades.EnchantBookForEmeralds](#villagertrades.enchantbookforemeralds)
- [VillagerTrades.EnchantedItemForEmeralds](#villagertrades.enchanteditemforemeralds)
- [VillagerTrades.FailureItemListing](#villagertrades.failureitemlisting)
- [VillagerTrades.ItemListing](#villagertrades.itemlisting)
- [VillagerTrades.ItemsAndEmeraldsToItems](#villagertrades.itemsandemeraldstoitems)
- [VillagerTrades.ItemsForEmeralds](#villagertrades.itemsforemeralds)
- [VillagerTrades.SuspiciousStewForEmerald](#villagertrades.suspiciousstewforemerald)
- [VillagerTrades.TippedArrowForItemsAndEmeralds](#villagertrades.tippedarrowforitemsandemeralds)
- [VillagerTrades.TreasureMapForEmeralds](#villagertrades.treasuremapforemeralds)
- [VillagerTrades.TypeSpecificTrade](#villagertrades.typespecifictrade)
- [VillagerType](#villagertype)
- [WanderingTrader](#wanderingtrader)
- [WanderingTrader.WanderToPositionGoal](#wanderingtrader.wandertopositiongoal)
- [WanderingTraderSpawner](#wanderingtraderspawner)
## AbstractVillager

*class* `net.minecraft.world.entity.npc.AbstractVillager`

### Fields
- `private static final EntityDataAccessor<Integer> DATA_UNHAPPY_COUNTER`
- `public static final int VILLAGER_SLOT_OFFSET` (= 300)
- `private static final int VILLAGER_INVENTORY_SIZE` (= 8)
- `@Nullable private Player tradingPlayer`
- `@Nullable protected MerchantOffers offers`
- `private final SimpleContainer inventory`

### Inherited fields
- from `net.minecraft.world.entity.AgeableMob`: `age`, `BABY_START_AGE`, `forcedAge`, `forcedAgeTimer`
- from `net.minecraft.world.entity.PathfinderMob`: `DEFAULT_WALK_TARGET_VALUE`
- from `net.minecraft.world.entity.Mob`: `ambientSoundTime`, `armorDropChances`, `DEFAULT_EQUIPMENT_DROP_CHANCE`, `goalSelector`, `handDropChances`, `jumpControl`, `LEASH_TAG`, `lookControl`, `MAX_ENCHANTED_ARMOR_CHANCE`, `MAX_ENCHANTED_WEAPON_CHANCE`, `MAX_PICKUP_LOOT_CHANCE`, `MAX_WEARING_ARMOR_CHANCE`, `moveControl`, `navigation`, `PICKUP_REACH`, `PRESERVE_ITEM_DROP_CHANCE`, `targetSelector`, `UPDATE_GOAL_SELECTOR_EVERY_N_TICKS`, `xpReward`
- from `net.minecraft.world.entity.LivingEntity`: `animStep`, `animStepO`, `ARMOR_SLOT_OFFSET`, `ARMOR_SLOTS`, `attackAnim`, `attackStrengthTicker`, `autoSpinAttackTicks`, `brain`, `DATA_LIVING_ENTITY_FLAGS`, `dead`, `DEATH_DURATION`, `deathScore`, `deathTime`, `DEFAULT_BASE_GRAVITY`, `DEFAULT_EYE_HEIGHT`, `EQUIPMENT_SLOT_OFFSET`, `EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT`, `fallFlyTicks`, `HAND_SLOTS`, `hurtDuration`, `hurtTime`, `invulnerableDuration`, `jumping`, `lastHurt`, `lastHurtByPlayer`, `lastHurtByPlayerTime`, `lerpHeadSteps`, `lerpSteps`, `lerpX`, `lerpXRot`, `lerpY`, `lerpYHeadRot`, `lerpYRot`, `lerpZ`, `LIVING_ENTITY_FLAG_IS_USING`, `LIVING_ENTITY_FLAG_OFF_HAND`, `LIVING_ENTITY_FLAG_SPIN_ATTACK`, `MIN_MOVEMENT_DISTANCE`, `noActionTime`, `oAttackAnim`, `oRun`, `PLAYER_HURT_EXPERIENCE_TIME`, `removeArrowTime`, `removeStingerTime`, `rotA`, `rotOffs`, `run`, `SLEEPING_DIMENSIONS`, `SWING_DURATION`, `swinging`, `swingingArm`, `swingTime`, `timeOffs`, `USE_ITEM_INTERVAL`, `useItem`, `useItemRemaining`, `walkAnimation`, `xxa`, `yBodyRot`, `yBodyRotO`, `yHeadRot`, `yHeadRotO`, `yya`, `zza`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`
- from `net.minecraft.world.entity.npc.InventoryCarrier`: `TAG_INVENTORY`

### Methods
- `public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_35282_,  DifficultyInstance p_35283_,  MobSpawnType p_35284_,  @Nullable  SpawnGroupData p_35285_,  @Nullable  CompoundTag p_35286_)`
  Description copied from class: Mob
  Forge: Override-Only, call via ForgeEventFactory.onFinalizeSpawn.
  
   Overrides are allowed. Do not wrap super calls within override (as that will cause stack overflows).
  
   Vanilla calls are replaced with a transformer, and are not visible in source.
  
   Be certain to either call super.finalizeSpawn or set the Mob.spawnType field from within your override.
- `public int getUnhappyCounter()`
- `public void setUnhappyCounter(int p_35320_)`
- `public int getVillagerXp()`
- `protected float getStandingEyeHeight(Pose p_35297_,  EntityDimensions p_35298_)`
- `protected void defineSynchedData()`
- `public void setTradingPlayer(@Nullable  Player p_35314_)`
- `@Nullable public Player getTradingPlayer()`
- `public boolean isTrading()`
- `public MerchantOffers getOffers()`
- `public void overrideOffers(@Nullable  MerchantOffers p_35276_)`
- `public void overrideXp(int p_35322_)`
- `public void notifyTrade(MerchantOffer p_35274_)`
- `protected abstract void rewardTradeXp(MerchantOffer p_35299_)`
- `public boolean showProgressBar()`
- `public void notifyTradeUpdated(ItemStack p_35316_)`
- `public SoundEvent getNotifyTradeSound()`
- `protected SoundEvent getTradeUpdatedSound(boolean p_35323_)`
- `public void playCelebrateSound()`
- `public void addAdditionalSaveData(CompoundTag p_35301_)`
- `public void readAdditionalSaveData(CompoundTag p_35290_)`
- `@Nullable public Entity changeDimension(ServerLevel p_35295_,  ITeleporter teleporter)`
- `protected void stopTrading()`
- `public void die(DamageSource p_35270_)`
- `protected void addParticlesAroundSelf(ParticleOptions p_35288_)`
- `public boolean canBeLeashed(Player p_35272_)`
- `public SimpleContainer getInventory()`
- `public SlotAccess getSlot(int p_149995_)`
- `protected abstract void updateTrades()`
- `protected void addOffersFromItemListings(MerchantOffers p_35278_,  VillagerTrades.ItemListing[] p_35279_,  int p_35280_)`
- `public Vec3 getRopeHoldPosition(float p_35318_)`
- `public boolean isClientSide()`

### Inherited methods
- from `net.minecraft.world.entity.AgeableMob`: `ageBoundaryReached`, `ageUp`, `ageUp`, `aiStep`, `canBreed`, `getAge`, `getBreedOffspring`, `getSpeedUpSecondsWhenFeeding`, `isBaby`, `onSyncedDataUpdated`, `setAge`, `setBaby`
- from `net.minecraft.world.entity.PathfinderMob`: `checkSpawnRules`, `followLeashSpeed`, `getWalkTargetValue`, `getWalkTargetValue`, `isPanicking`, `isPathFinding`, `onLeashDistance`, `shouldStayCloseToLeashHolder`, `tickLeash`
- from `net.minecraft.world.entity.Mob`: `ate`, `baseTick`, `canAttackType`, `canFireProjectileWeapon`, `canHoldItem`, `canPickUpLoot`, `canReplaceCurrentItem`, `canReplaceEqualItem`, `canTakeItem`, `checkDespawn`, `checkMobSpawnRules`, `checkSpawnObstruction`, `clearRestriction`, `convertTo`, `createBodyControl`, `createMobAttributes`, `createNavigation`, `customServerAiStep`, `doHurtTarget`, `dropCustomDeathLoot`, `dropFromLootTable`, `dropLeash`, `enchantSpawnedArmor`, `enchantSpawnedWeapon`, `equipItemIfPossible`, `getAmbientSound`, `getAmbientSoundInterval`, `getArmorSlots`, `getAttackBoundingBox`, `getControllingPassenger`, `getDefaultLootTable`, `getEquipmentDropChance`, `getEquipmentForSlot`, `getExperienceReward`, `getHandSlots`, `getHeadRotSpeed`, `getItemBySlot`, `getJumpControl`, `getLeashHolder`, `getLookControl`, `getLootTable`, `getLootTableSeed`, `getMainArm`, `getMaxFallDistance`, `getMaxHeadXRot`, `getMaxHeadYRot`, `getMaxSpawnClusterSize`, `getMoveControl`, `getNavigation`, `getPathfindingMalus`, `getPickResult`, `getPickupReach`, `getRestrictCenter`, `getRestrictRadius`, `getSensing`, `getSpawnType`, `getTarget`, `handleEntityEvent`, `hasRestriction`, `interact`, `isAggressive`, `isEffectiveAi`, `isLeashed`, `isLeftHanded`, `isMaxGroupSizeReached`, `isNoAi`, `isPersistenceRequired`, `isSpawnCancelled`, `isSunBurnTick`, `isWithinMeleeAttackRange`, `isWithinRestriction`, `isWithinRestriction`, `jumpInFluid`, `jumpInLiquid`, `lookAt`, `mobInteract`, `onOffspringSpawnedFromEgg`, `onPathfindingDone`, `onPathfindingStart`, `pickUpItem`, `playAmbientSound`, `playHurtSound`, `populateDefaultEquipmentEnchantments`, `populateDefaultEquipmentSlots`, `registerGoals`, `removeAfterChangingDimensions`, `removeAllGoals`, `removeFreeWill`, `removeWhenFarAway`, `requiresCustomPersistence`, `restrictTo`, `sendDebugPackets`, `serverAiStep`, `setAggressive`, `setCanPickUpLoot`, `setDelayedLeashHolderId`, `setDropChance`, `setGuaranteedDrop`, `setItemSlot`, `setItemSlotAndDropWhenKilled`, `setLeashedTo`, `setLeftHanded`, `setNoAi`, `setPathfindingMalus`, `setPersistenceRequired`, `setSpawnCancelled`, `setSpeed`, `setTarget`, `setXxa`, `setYya`, `setZza`, `shouldDespawnInPeaceful`, `shouldPassengersInheritMalus`, `spawnAnim`, `startRiding`, `tick`, `tickHeadTurn`, `updateControlFlags`, `wantsToPickUp`
- from `net.minecraft.world.entity.LivingEntity`: `actuallyHurt`, `addEffect`, `addEffect`, `animateHurt`, `areAllEffectsAmbient`, `attackable`, `blockedByShield`, `blockUsingShield`, `brainProvider`, `broadcastBreakEvent`, `broadcastBreakEvent`, `calculateEntityAnimation`, `calculateFallDamage`, `canAttack`, `canAttack`, `canBeAffected`, `canBeSeenAsEnemy`, `canBeSeenByAnyone`, `canBreatheUnderwater`, `canChangeDimensions`, `canDisableShield`, `canFreeze`, `canSpawnSoulSpeedParticle`, `canStandOnFluid`, `causeFallDamage`, `checkAutoSpinAttack`, `checkFallDamage`, `clearSleepingPos`, `completeUsingItem`, `createLivingAttributes`, `createWitherRose`, `curePotionEffects`, `decreaseAirSupply`, `doAutoAttackOnTouch`, `doesEmitEquipEvent`, `doPush`, `dropAllDeathLoot`, `dropEquipment`, `dropExperience`, `eat`, `equipmentHasChanged`, `forceAddEffect`, `getAbsorptionAmount`, `getActiveEffects`, `getActiveEffectsMap`, `getArmorCoverPercentage`, `getArmorValue`, `getArrowCount`, `getAttackAnim`, `getAttribute`, `getAttributeBaseValue`, `getAttributeBaseValue`, `getAttributes`, `getAttributeValue`, `getAttributeValue`, `getBedOrientation`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getBrain`, `getCapability`, `getCombatTracker`, `getDamageAfterArmorAbsorb`, `getDamageAfterMagicAbsorb`, `getDeathSound`, `getDimensions`, `getDismountPoses`, `getDrinkingSound`, `getEatingSound`, `getEffect`, `getEquipmentSlotForItem`, `getEyeHeight`, `getFallFlyingTicks`, `getFallSounds`, `getFluidFallingAdjustedMovement`, `getFlyingSpeed`, `getHealth`, `getHitbox`, `getHurtDir`, `getHurtSound`, `getItemInHand`, `getJumpBoostPower`, `getJumpPower`, `getKillCredit`, `getLastAttacker`, `getLastClimbablePos`, `getLastDamageSource`, `getLastHurtByMob`, `getLastHurtByMobTimestamp`, `getLastHurtMob`, `getLastHurtMobTimestamp`, `getLocalBoundsForPose`, `getMainHandItem`, `getMaxAbsorption`, `getMaxHealth`, `getMobType`, `getMyRidingOffset`, `getNoActionTime`, `getOffhandItem`, `getPassengerRidingPosition`, `getProjectile`, `getRandom`, `getRelativePortalPosition`, `getRiddenInput`, `getRiddenSpeed`, `getScale`, `getSleepingPos`, `getSoundVolume`, `getSpeed`, `getStingerCount`, `getSwimAmount`, `getTicksUsingItem`, `getUsedItemHand`, `getUseItem`, `getUseItemRemainingTicks`, `getViewYRot`, `getVisibilityPercent`, `getVisualRotationYInDegrees`, `getVoicePitch`, `getWaterSlowDown`, `getYHeadRot`, `goDownInWater`, `handleDamageEvent`, `handleRelativeFrictionAndCalculateMovement`, `hasEffect`, `hasItemInSlot`, `hasLineOfSight`, `heal`, `hurt`, `hurtArmor`, `hurtCurrentlyUsedShield`, `hurtHelmet`, `increaseAirSupply`, `indicateDamage`, `internalSetAbsorptionAmount`, `invalidateCaps`, `isAffectedByFluids`, `isAffectedByPotions`, `isAlive`, `isAlwaysExperienceDropper`, `isAutoSpinAttack`, `isBlocking`, `isCurrentlyGlowing`, `isDamageSourceBlocked`, `isDeadOrDying`, `isFallFlying`, `isHolding`, `isHolding`, `isImmobile`, `isInvertedHealAndHarm`, `isInWall`, `isPickable`, `isPushable`, `isSensitiveToWater`, `isSleeping`, `isSuppressingSlidingDownLadder`, `isUsingItem`, `isVisuallySwimming`, `jumpFromGround`, `kill`, `knockback`, `lerpHeadRotationStep`, `lerpHeadTo`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `lookAt`, `makeBrain`, `maxUpStep`, `onBelowWorld`, `onChangedBlock`, `onClimbable`, `onEffectAdded`, `onEffectRemoved`, `onEffectUpdated`, `onEnterCombat`, `onEquipItem`, `onItemPickup`, `onLeaveCombat`, `onSoulSpeedBlock`, `playBlockFallSound`, `push`, `pushEntities`, `randomTeleport`, `recreateFromPacket`, `releaseUsingItem`, `remove`, `removeAllEffects`, `removeEffect`, `removeEffectNoUpdate`, `removeEffectParticles`, `removeFrost`, `removeSoulSpeed`, `resetForwardDirectionOfRelativePortalPosition`, `reviveCaps`, `rideTick`, `sendEffectToPassengers`, `setAbsorptionAmount`, `setArrowCount`, `setDiscardFriction`, `setHealth`, `setItemInHand`, `setJumping`, `setLastHurtByMob`, `setLastHurtByPlayer`, `setLastHurtMob`, `setLivingEntityFlag`, `setNoActionTime`, `setRecordPlayingNearby`, `setSleepingPos`, `setSprinting`, `setStingerCount`, `setYBodyRot`, `setYHeadRot`, `shouldDiscardFriction`, `shouldDropExperience`, `shouldDropLoot`, `shouldRemoveSoulSpeed`, `shouldRiderFaceForward`, `shouldShowName`, `skipDropExperience`, `spawnSoulSpeedParticle`, `startSleeping`, `startUsingItem`, `stopRiding`, `stopSleeping`, `stopUsingItem`, `swing`, `swing`, `take`, `tickDeath`, `tickEffects`, `tickRidden`, `travel`, `triggerItemUseEffects`, `tryAddFrost`, `tryAddSoulSpeed`, `updateEffectVisibility`, `updateInvisibilityStatus`, `updateSwingTime`, `updateUsingItem`, `updateWalkAnimation`, `verifyEquippedItem`, `wasExperienceConsumed`, `wouldNotSuffocateAtTargetPose`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canCollideWith`, `canControlVehicle`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `changeDimension`, `checkBelowWorld`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYRot`, `getZ`, `getZ`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `killedEntity`, `lavaHurt`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `refreshDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startSeenByPlayer`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getEyeInFluidType`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getFluidTypeHeight`, `getMaxHeightFluidType`, `getParts`, `getPersistentData`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isAddedToWorld`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `onAddedToWorld`, `onRemovedFromWorld`, `revive`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraftforge.common.extensions.IForgeLivingEntity`: `canDrownInFluidType`, `canSwimInFluidType`, `moveInFluid`, `self`, `sinkInFluid`
- from `net.minecraft.world.entity.npc.InventoryCarrier`: `readInventoryFromTag`, `writeInventoryToTag`
- from `net.minecraft.world.item.trading.Merchant`: `canRestock`, `openTradingScreen`

## CatSpawner

*class* `net.minecraft.world.entity.npc.CatSpawner`

### Fields
- `private static final int TICK_DELAY` (= 1200)
- `private int nextTick`

### Methods
- `public int tick(ServerLevel p_35330_,  boolean p_35331_,  boolean p_35332_)`
- `private int spawnInVillage(ServerLevel p_35327_,  BlockPos p_35328_)`
- `private int spawnInHut(ServerLevel p_35337_,  BlockPos p_35338_)`
- `private int spawnCat(BlockPos p_35334_,  ServerLevel p_35335_)`

## ClientSideMerchant

*class* `net.minecraft.world.entity.npc.ClientSideMerchant`

### Fields
- `private final Player source`
- `private MerchantOffers offers`
- `private int xp`

### Methods
- `public Player getTradingPlayer()`
- `public void setTradingPlayer(@Nullable  Player p_35356_)`
- `public MerchantOffers getOffers()`
- `public void overrideOffers(MerchantOffers p_35348_)`
- `public void notifyTrade(MerchantOffer p_35346_)`
- `public void notifyTradeUpdated(ItemStack p_35358_)`
- `public boolean isClientSide()`
- `public int getVillagerXp()`
- `public void overrideXp(int p_35360_)`
- `public boolean showProgressBar()`
- `public SoundEvent getNotifyTradeSound()`

### Inherited methods
- from `net.minecraft.world.item.trading.Merchant`: `canRestock`, `openTradingScreen`

## InventoryCarrier

*interface* `net.minecraft.world.entity.npc.InventoryCarrier`

### Fields
- `static final String TAG_INVENTORY` (= "Inventory")

### Methods
- `SimpleContainer getInventory()`
- `static void pickUpItem(Mob p_219612_,  InventoryCarrier p_219613_,  ItemEntity p_219614_)`
- `default void readInventoryFromTag(CompoundTag p_253699_)`
- `default void writeInventoryToTag(CompoundTag p_254428_)`

## Npc

*interface* `net.minecraft.world.entity.npc.Npc`

## Villager

*class* `net.minecraft.world.entity.npc.Villager`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final EntityDataAccessor<VillagerData> DATA_VILLAGER_DATA`
- `public static final int BREEDING_FOOD_THRESHOLD` (= 12)
- `public static final Map<Item,Integer> FOOD_POINTS`
- `private static final int TRADES_PER_LEVEL` (= 2)
- `private static final Set<Item> WANTED_ITEMS`
- `private static final int MAX_GOSSIP_TOPICS` (= 10)
- `private static final int GOSSIP_COOLDOWN` (= 1200)
- `private static final int GOSSIP_DECAY_INTERVAL` (= 24000)
- `private static final int REPUTATION_CHANGE_PER_EVENT` (= 25)
- `private static final int HOW_FAR_AWAY_TO_TALK_TO_OTHER_VILLAGERS_ABOUT_GOLEMS` (= 10)
- `private static final int HOW_MANY_VILLAGERS_NEED_TO_AGREE_TO_SPAWN_A_GOLEM` (= 5)
- `private static final long TIME_SINCE_SLEEPING_FOR_GOLEM_SPAWNING` (= 24000L)
- `public static final float SPEED_MODIFIER` (= 0.5f)
- `private int updateMerchantTimer`
- `private boolean increaseProfessionLevelOnUpdate`
- `@Nullable private Player lastTradedPlayer`
- `private boolean chasing`
- `private int foodLevel`
- `private final GossipContainer gossips`
- `private long lastGossipTime`
- `private long lastGossipDecayTime`
- `private int villagerXp`
- `private long lastRestockGameTime`
- `private int numberOfRestocksToday`
- `private long lastRestockCheckDayTime`
- `private boolean assignProfessionWhenSpawned`
- `private static final com.google.common.collect.ImmutableList<MemoryModuleType<?>> MEMORY_TYPES`
- `private static final com.google.common.collect.ImmutableList<SensorType<? extends Sensor<? super Villager>>> SENSOR_TYPES`
- `public static final Map<MemoryModuleType<GlobalPos>,BiPredicate<Villager,Holder<PoiType>>> POI_MEMORIES`

### Inherited fields
- from `net.minecraft.world.entity.npc.AbstractVillager`: `offers`, `VILLAGER_SLOT_OFFSET`
- from `net.minecraft.world.entity.AgeableMob`: `age`, `BABY_START_AGE`, `forcedAge`, `forcedAgeTimer`
- from `net.minecraft.world.entity.PathfinderMob`: `DEFAULT_WALK_TARGET_VALUE`
- from `net.minecraft.world.entity.Mob`: `ambientSoundTime`, `armorDropChances`, `DEFAULT_EQUIPMENT_DROP_CHANCE`, `goalSelector`, `handDropChances`, `jumpControl`, `LEASH_TAG`, `lookControl`, `MAX_ENCHANTED_ARMOR_CHANCE`, `MAX_ENCHANTED_WEAPON_CHANCE`, `MAX_PICKUP_LOOT_CHANCE`, `MAX_WEARING_ARMOR_CHANCE`, `moveControl`, `navigation`, `PICKUP_REACH`, `PRESERVE_ITEM_DROP_CHANCE`, `targetSelector`, `UPDATE_GOAL_SELECTOR_EVERY_N_TICKS`, `xpReward`
- from `net.minecraft.world.entity.LivingEntity`: `animStep`, `animStepO`, `ARMOR_SLOT_OFFSET`, `ARMOR_SLOTS`, `attackAnim`, `attackStrengthTicker`, `autoSpinAttackTicks`, `brain`, `DATA_LIVING_ENTITY_FLAGS`, `dead`, `DEATH_DURATION`, `deathScore`, `deathTime`, `DEFAULT_BASE_GRAVITY`, `DEFAULT_EYE_HEIGHT`, `EQUIPMENT_SLOT_OFFSET`, `EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT`, `fallFlyTicks`, `HAND_SLOTS`, `hurtDuration`, `hurtTime`, `invulnerableDuration`, `jumping`, `lastHurt`, `lastHurtByPlayer`, `lastHurtByPlayerTime`, `lerpHeadSteps`, `lerpSteps`, `lerpX`, `lerpXRot`, `lerpY`, `lerpYHeadRot`, `lerpYRot`, `lerpZ`, `LIVING_ENTITY_FLAG_IS_USING`, `LIVING_ENTITY_FLAG_OFF_HAND`, `LIVING_ENTITY_FLAG_SPIN_ATTACK`, `MIN_MOVEMENT_DISTANCE`, `noActionTime`, `oAttackAnim`, `oRun`, `PLAYER_HURT_EXPERIENCE_TIME`, `removeArrowTime`, `removeStingerTime`, `rotA`, `rotOffs`, `run`, `SLEEPING_DIMENSIONS`, `SWING_DURATION`, `swinging`, `swingingArm`, `swingTime`, `timeOffs`, `USE_ITEM_INTERVAL`, `useItem`, `useItemRemaining`, `walkAnimation`, `xxa`, `yBodyRot`, `yBodyRotO`, `yHeadRot`, `yHeadRotO`, `yya`, `zza`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`
- from `net.minecraft.world.entity.npc.InventoryCarrier`: `TAG_INVENTORY`

### Methods
- `public Brain<Villager> getBrain()`
- `protected Brain.Provider<Villager> brainProvider()`
- `protected Brain<?> makeBrain(com.mojang.serialization.Dynamic<?> p_35445_)`
- `public void refreshBrain(ServerLevel p_35484_)`
- `private void registerBrainGoals(Brain<Villager> p_35425_)`
- `protected void ageBoundaryReached()`
- `public static AttributeSupplier.Builder createAttributes()`
- `public boolean assignProfessionWhenSpawned()`
- `protected void customServerAiStep()`
- `public void tick()`
- `public InteractionResult mobInteract(Player p_35472_,  InteractionHand p_35473_)`
- `private void setUnhappy()`
- `private void startTrading(Player p_35537_)`
- `public void setTradingPlayer(@Nullable  Player p_35508_)`
- `protected void stopTrading()`
- `private void resetSpecialPrices()`
- `public boolean canRestock()`
- `public boolean isClientSide()`
- `public void restock()`
- `private void resendOffersToTradingPlayer()`
- `private boolean needsToRestock()`
- `private boolean allowedToRestock()`
- `public boolean shouldRestock()`
- `private void catchUpDemand()`
- `private void updateDemand()`
- `private void updateSpecialPrices(Player p_35541_)`
- `protected void defineSynchedData()`
- `public void addAdditionalSaveData(CompoundTag p_35481_)`
- `public void readAdditionalSaveData(CompoundTag p_35451_)`
- `public boolean removeWhenFarAway(double p_35535_)`
- `@Nullable protected SoundEvent getAmbientSound()`
- `protected SoundEvent getHurtSound(DamageSource p_35498_)`
- `protected SoundEvent getDeathSound()`
- `public void playWorkSound()`
- `public void setVillagerData(VillagerData p_35437_)`
- `public VillagerData getVillagerData()`
- `protected void rewardTradeXp(MerchantOffer p_35475_)`
- `public void setChasing(boolean p_150016_)`
- `public boolean isChasing()`
- `public void setLastHurtByMob(@Nullable  LivingEntity p_35423_)`
- `public void die(DamageSource p_35419_)`
- `private void releaseAllPois()`
- `private void tellWitnessesThatIWasMurdered(Entity p_35421_)`
- `public void releasePoi(MemoryModuleType<GlobalPos> p_35429_)`
- `public boolean canBreed()`
- `private boolean hungry()`
- `private void eatUntilFull()`
- `public int getPlayerReputation(Player p_35533_)`
- `private void digestFood(int p_35549_)`
- `public void eatAndDigestFood()`
- `public void setOffers(MerchantOffers p_35477_)`
- `private boolean shouldIncreaseLevel()`
- `private void increaseMerchantCareer()`
- `protected Component getTypeName()`
- `public void handleEntityEvent(byte p_35391_)`
- `@Nullable public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_35439_,  DifficultyInstance p_35440_,  MobSpawnType p_35441_,  @Nullable  SpawnGroupData p_35442_,  @Nullable  CompoundTag p_35443_)`
  Description copied from class: Mob
  Forge: Override-Only, call via ForgeEventFactory.onFinalizeSpawn.
  
   Overrides are allowed. Do not wrap super calls within override (as that will cause stack overflows).
  
   Vanilla calls are replaced with a transformer, and are not visible in source.
  
   Be certain to either call super.finalizeSpawn or set the Mob.spawnType field from within your override.
- `@Nullable public Villager getBreedOffspring(ServerLevel p_150012_,  AgeableMob p_150013_)`
- `public void thunderHit(ServerLevel p_35409_,  LightningBolt p_35410_)`
- `protected void pickUpItem(ItemEntity p_35467_)`
- `public boolean wantsToPickUp(ItemStack p_35543_)`
- `public boolean hasExcessFood()`
- `public boolean wantsMoreFood()`
- `private int countFoodPointsInInventory()`
- `public boolean hasFarmSeeds()`
- `protected void updateTrades()`
- `public void gossip(ServerLevel p_35412_,  Villager p_35413_,  long p_35414_)`
- `private void maybeDecayGossip()`
- `public void spawnGolemIfNeeded(ServerLevel p_35398_,  long p_35399_,  int p_35400_)`
- `public boolean wantsToSpawnGolem(long p_35393_)`
- `public void onReputationEventFrom(ReputationEventType p_35431_,  Entity p_35432_)`
- `public int getVillagerXp()`
- `public void setVillagerXp(int p_35547_)`
- `private void resetNumberOfRestocks()`
- `public GossipContainer getGossips()`
- `public void setGossips(Tag p_35456_)`
- `protected void sendDebugPackets()`
- `public void startSleeping(BlockPos p_35479_)`
- `public void stopSleeping()`
- `private boolean golemSpawnConditionsMet(long p_35462_)`

### Inherited methods
- from `net.minecraft.world.entity.npc.AbstractVillager`: `addOffersFromItemListings`, `addParticlesAroundSelf`, `canBeLeashed`, `changeDimension`, `getInventory`, `getNotifyTradeSound`, `getOffers`, `getRopeHoldPosition`, `getSlot`, `getStandingEyeHeight`, `getTradeUpdatedSound`, `getTradingPlayer`, `getUnhappyCounter`, `isTrading`, `notifyTrade`, `notifyTradeUpdated`, `overrideOffers`, `overrideXp`, `playCelebrateSound`, `setUnhappyCounter`, `showProgressBar`
- from `net.minecraft.world.entity.AgeableMob`: `ageUp`, `ageUp`, `aiStep`, `getAge`, `getSpeedUpSecondsWhenFeeding`, `isBaby`, `onSyncedDataUpdated`, `setAge`, `setBaby`
- from `net.minecraft.world.entity.PathfinderMob`: `checkSpawnRules`, `followLeashSpeed`, `getWalkTargetValue`, `getWalkTargetValue`, `isPanicking`, `isPathFinding`, `onLeashDistance`, `shouldStayCloseToLeashHolder`, `tickLeash`
- from `net.minecraft.world.entity.Mob`: `ate`, `baseTick`, `canAttackType`, `canFireProjectileWeapon`, `canHoldItem`, `canPickUpLoot`, `canReplaceCurrentItem`, `canReplaceEqualItem`, `canTakeItem`, `checkDespawn`, `checkMobSpawnRules`, `checkSpawnObstruction`, `clearRestriction`, `convertTo`, `createBodyControl`, `createMobAttributes`, `createNavigation`, `doHurtTarget`, `dropCustomDeathLoot`, `dropFromLootTable`, `dropLeash`, `enchantSpawnedArmor`, `enchantSpawnedWeapon`, `equipItemIfPossible`, `getAmbientSoundInterval`, `getArmorSlots`, `getAttackBoundingBox`, `getControllingPassenger`, `getDefaultLootTable`, `getEquipmentDropChance`, `getEquipmentForSlot`, `getExperienceReward`, `getHandSlots`, `getHeadRotSpeed`, `getItemBySlot`, `getJumpControl`, `getLeashHolder`, `getLookControl`, `getLootTable`, `getLootTableSeed`, `getMainArm`, `getMaxFallDistance`, `getMaxHeadXRot`, `getMaxHeadYRot`, `getMaxSpawnClusterSize`, `getMoveControl`, `getNavigation`, `getPathfindingMalus`, `getPickResult`, `getPickupReach`, `getRestrictCenter`, `getRestrictRadius`, `getSensing`, `getSpawnType`, `getTarget`, `hasRestriction`, `interact`, `isAggressive`, `isEffectiveAi`, `isLeashed`, `isLeftHanded`, `isMaxGroupSizeReached`, `isNoAi`, `isPersistenceRequired`, `isSpawnCancelled`, `isSunBurnTick`, `isWithinMeleeAttackRange`, `isWithinRestriction`, `isWithinRestriction`, `jumpInFluid`, `jumpInLiquid`, `lookAt`, `onOffspringSpawnedFromEgg`, `onPathfindingDone`, `onPathfindingStart`, `playAmbientSound`, `playHurtSound`, `populateDefaultEquipmentEnchantments`, `populateDefaultEquipmentSlots`, `registerGoals`, `removeAfterChangingDimensions`, `removeAllGoals`, `removeFreeWill`, `requiresCustomPersistence`, `restrictTo`, `serverAiStep`, `setAggressive`, `setCanPickUpLoot`, `setDelayedLeashHolderId`, `setDropChance`, `setGuaranteedDrop`, `setItemSlot`, `setItemSlotAndDropWhenKilled`, `setLeashedTo`, `setLeftHanded`, `setNoAi`, `setPathfindingMalus`, `setPersistenceRequired`, `setSpawnCancelled`, `setSpeed`, `setTarget`, `setXxa`, `setYya`, `setZza`, `shouldDespawnInPeaceful`, `shouldPassengersInheritMalus`, `spawnAnim`, `startRiding`, `tickHeadTurn`, `updateControlFlags`
- from `net.minecraft.world.entity.LivingEntity`: `actuallyHurt`, `addEffect`, `addEffect`, `animateHurt`, `areAllEffectsAmbient`, `attackable`, `blockedByShield`, `blockUsingShield`, `broadcastBreakEvent`, `broadcastBreakEvent`, `calculateEntityAnimation`, `calculateFallDamage`, `canAttack`, `canAttack`, `canBeAffected`, `canBeSeenAsEnemy`, `canBeSeenByAnyone`, `canBreatheUnderwater`, `canChangeDimensions`, `canDisableShield`, `canFreeze`, `canSpawnSoulSpeedParticle`, `canStandOnFluid`, `causeFallDamage`, `checkAutoSpinAttack`, `checkFallDamage`, `clearSleepingPos`, `completeUsingItem`, `createLivingAttributes`, `createWitherRose`, `curePotionEffects`, `decreaseAirSupply`, `doAutoAttackOnTouch`, `doesEmitEquipEvent`, `doPush`, `dropAllDeathLoot`, `dropEquipment`, `dropExperience`, `eat`, `equipmentHasChanged`, `forceAddEffect`, `getAbsorptionAmount`, `getActiveEffects`, `getActiveEffectsMap`, `getArmorCoverPercentage`, `getArmorValue`, `getArrowCount`, `getAttackAnim`, `getAttribute`, `getAttributeBaseValue`, `getAttributeBaseValue`, `getAttributes`, `getAttributeValue`, `getAttributeValue`, `getBedOrientation`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getCapability`, `getCombatTracker`, `getDamageAfterArmorAbsorb`, `getDamageAfterMagicAbsorb`, `getDimensions`, `getDismountPoses`, `getDrinkingSound`, `getEatingSound`, `getEffect`, `getEquipmentSlotForItem`, `getEyeHeight`, `getFallFlyingTicks`, `getFallSounds`, `getFluidFallingAdjustedMovement`, `getFlyingSpeed`, `getHealth`, `getHitbox`, `getHurtDir`, `getItemInHand`, `getJumpBoostPower`, `getJumpPower`, `getKillCredit`, `getLastAttacker`, `getLastClimbablePos`, `getLastDamageSource`, `getLastHurtByMob`, `getLastHurtByMobTimestamp`, `getLastHurtMob`, `getLastHurtMobTimestamp`, `getLocalBoundsForPose`, `getMainHandItem`, `getMaxAbsorption`, `getMaxHealth`, `getMobType`, `getMyRidingOffset`, `getNoActionTime`, `getOffhandItem`, `getPassengerRidingPosition`, `getProjectile`, `getRandom`, `getRelativePortalPosition`, `getRiddenInput`, `getRiddenSpeed`, `getScale`, `getSleepingPos`, `getSoundVolume`, `getSpeed`, `getStingerCount`, `getSwimAmount`, `getTicksUsingItem`, `getUsedItemHand`, `getUseItem`, `getUseItemRemainingTicks`, `getViewYRot`, `getVisibilityPercent`, `getVisualRotationYInDegrees`, `getVoicePitch`, `getWaterSlowDown`, `getYHeadRot`, `goDownInWater`, `handleDamageEvent`, `handleRelativeFrictionAndCalculateMovement`, `hasEffect`, `hasItemInSlot`, `hasLineOfSight`, `heal`, `hurt`, `hurtArmor`, `hurtCurrentlyUsedShield`, `hurtHelmet`, `increaseAirSupply`, `indicateDamage`, `internalSetAbsorptionAmount`, `invalidateCaps`, `isAffectedByFluids`, `isAffectedByPotions`, `isAlive`, `isAlwaysExperienceDropper`, `isAutoSpinAttack`, `isBlocking`, `isCurrentlyGlowing`, `isDamageSourceBlocked`, `isDeadOrDying`, `isFallFlying`, `isHolding`, `isHolding`, `isImmobile`, `isInvertedHealAndHarm`, `isInWall`, `isPickable`, `isPushable`, `isSensitiveToWater`, `isSleeping`, `isSuppressingSlidingDownLadder`, `isUsingItem`, `isVisuallySwimming`, `jumpFromGround`, `kill`, `knockback`, `lerpHeadRotationStep`, `lerpHeadTo`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `lookAt`, `maxUpStep`, `onBelowWorld`, `onChangedBlock`, `onClimbable`, `onEffectAdded`, `onEffectRemoved`, `onEffectUpdated`, `onEnterCombat`, `onEquipItem`, `onItemPickup`, `onLeaveCombat`, `onSoulSpeedBlock`, `playBlockFallSound`, `push`, `pushEntities`, `randomTeleport`, `recreateFromPacket`, `releaseUsingItem`, `remove`, `removeAllEffects`, `removeEffect`, `removeEffectNoUpdate`, `removeEffectParticles`, `removeFrost`, `removeSoulSpeed`, `resetForwardDirectionOfRelativePortalPosition`, `reviveCaps`, `rideTick`, `sendEffectToPassengers`, `setAbsorptionAmount`, `setArrowCount`, `setDiscardFriction`, `setHealth`, `setItemInHand`, `setJumping`, `setLastHurtByPlayer`, `setLastHurtMob`, `setLivingEntityFlag`, `setNoActionTime`, `setRecordPlayingNearby`, `setSleepingPos`, `setSprinting`, `setStingerCount`, `setYBodyRot`, `setYHeadRot`, `shouldDiscardFriction`, `shouldDropExperience`, `shouldDropLoot`, `shouldRemoveSoulSpeed`, `shouldRiderFaceForward`, `shouldShowName`, `skipDropExperience`, `spawnSoulSpeedParticle`, `startUsingItem`, `stopRiding`, `stopUsingItem`, `swing`, `swing`, `take`, `tickDeath`, `tickEffects`, `tickRidden`, `travel`, `triggerItemUseEffects`, `tryAddFrost`, `tryAddSoulSpeed`, `updateEffectVisibility`, `updateInvisibilityStatus`, `updateSwingTime`, `updateUsingItem`, `updateWalkAnimation`, `verifyEquippedItem`, `wasExperienceConsumed`, `wouldNotSuffocateAtTargetPose`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canCollideWith`, `canControlVehicle`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `changeDimension`, `checkBelowWorld`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYRot`, `getZ`, `getZ`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `killedEntity`, `lavaHurt`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `refreshDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startSeenByPlayer`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getEyeInFluidType`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getFluidTypeHeight`, `getMaxHeightFluidType`, `getParts`, `getPersistentData`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isAddedToWorld`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `onAddedToWorld`, `onRemovedFromWorld`, `revive`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraftforge.common.extensions.IForgeLivingEntity`: `canDrownInFluidType`, `canSwimInFluidType`, `moveInFluid`, `self`, `sinkInFluid`
- from `net.minecraft.world.entity.npc.InventoryCarrier`: `readInventoryFromTag`, `writeInventoryToTag`
- from `net.minecraft.world.item.trading.Merchant`: `openTradingScreen`
- from `net.minecraft.world.entity.npc.VillagerDataHolder`: `getVariant`, `setVariant`

## VillagerData

*class* `net.minecraft.world.entity.npc.VillagerData`

### Fields
- `public static final int MIN_VILLAGER_LEVEL` (= 1)
- `public static final int MAX_VILLAGER_LEVEL` (= 5)
- `private static final int[] NEXT_LEVEL_XP_THRESHOLDS`
- `public static final com.mojang.serialization.Codec<VillagerData> CODEC`
- `private final VillagerType type`
- `private final VillagerProfession profession`
- `private final int level`

### Methods
- `public VillagerType getType()`
- `public VillagerProfession getProfession()`
- `public int getLevel()`
- `public VillagerData setType(VillagerType p_35568_)`
- `public VillagerData setProfession(VillagerProfession p_35566_)`
- `public VillagerData setLevel(int p_35562_)`
- `public static int getMinXpPerLevel(int p_35573_)`
- `public static int getMaxXpPerLevel(int p_35578_)`
- `public static boolean canLevelUp(int p_35583_)`

## VillagerDataHolder

*interface* `net.minecraft.world.entity.npc.VillagerDataHolder`

All Superinterfaces: VariantHolder<VillagerType>

### Methods
- `VillagerData getVillagerData()`
- `void setVillagerData(VillagerData p_150027_)`
- `default VillagerType getVariant()`
- `default void setVariant(VillagerType p_262647_)`

## VillagerProfession

*record* `net.minecraft.world.entity.npc.VillagerProfession`

### Fields
- `private final String name`
  The field for the name record component.
- `private final Predicate<Holder<PoiType>> heldJobSite`
  The field for the heldJobSite record component.
- `private final Predicate<Holder<PoiType>> acquirableJobSite`
  The field for the acquirableJobSite record component.
- `private final com.google.common.collect.ImmutableSet<Item> requestedItems`
  The field for the requestedItems record component.
- `private final com.google.common.collect.ImmutableSet<Block> secondaryPoi`
  The field for the secondaryPoi record component.
- `@Nullable private final SoundEvent workSound`
  The field for the workSound record component.
- `public static final Predicate<Holder<PoiType>> ALL_ACQUIRABLE_JOBS`
- `public static final VillagerProfession NONE`
- `public static final VillagerProfession ARMORER`
- `public static final VillagerProfession BUTCHER`
- `public static final VillagerProfession CARTOGRAPHER`
- `public static final VillagerProfession CLERIC`
- `public static final VillagerProfession FARMER`
- `public static final VillagerProfession FISHERMAN`
- `public static final VillagerProfession FLETCHER`
- `public static final VillagerProfession LEATHERWORKER`
- `public static final VillagerProfession LIBRARIAN`
- `public static final VillagerProfession MASON`
- `public static final VillagerProfession NITWIT`
- `public static final VillagerProfession SHEPHERD`
- `public static final VillagerProfession TOOLSMITH`
- `public static final VillagerProfession WEAPONSMITH`

### Methods
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `private static VillagerProfession register(String p_219644_,  ResourceKey<PoiType> p_219645_,  @Nullable  SoundEvent p_219646_)`
- `private static VillagerProfession register(String p_219654_,  Predicate<Holder<PoiType>> p_219655_,  Predicate<Holder<PoiType>> p_219656_,  @Nullable  SoundEvent p_219657_)`
- `private static VillagerProfession register(String p_219648_,  ResourceKey<PoiType> p_219649_,  com.google.common.collect.ImmutableSet<Item> p_219650_,  com.google.common.collect.ImmutableSet<Block> p_219651_,  @Nullable  SoundEvent p_219652_)`
- `private static VillagerProfession register(String p_219659_,  Predicate<Holder<PoiType>> p_219660_,  Predicate<Holder<PoiType>> p_219661_,  com.google.common.collect.ImmutableSet<Item> p_219662_,  com.google.common.collect.ImmutableSet<Block> p_219663_,  @Nullable  SoundEvent p_219664_)`
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public String name()`
  Returns the value of the name record component.
  - returns: the value of the name record component
- `public Predicate<Holder<PoiType>> heldJobSite()`
  Returns the value of the heldJobSite record component.
  - returns: the value of the heldJobSite record component
- `public Predicate<Holder<PoiType>> acquirableJobSite()`
  Returns the value of the acquirableJobSite record component.
  - returns: the value of the acquirableJobSite record component
- `public com.google.common.collect.ImmutableSet<Item> requestedItems()`
  Returns the value of the requestedItems record component.
  - returns: the value of the requestedItems record component
- `public com.google.common.collect.ImmutableSet<Block> secondaryPoi()`
  Returns the value of the secondaryPoi record component.
  - returns: the value of the secondaryPoi record component
- `@Nullable public SoundEvent workSound()`
  Returns the value of the workSound record component.
  - returns: the value of the workSound record component

## VillagerTrades

*class* `net.minecraft.world.entity.npc.VillagerTrades`

### Fields
- `private static final int DEFAULT_SUPPLY` (= 12)
- `private static final int COMMON_ITEMS_SUPPLY` (= 16)
- `private static final int UNCOMMON_ITEMS_SUPPLY` (= 3)
- `private static final int XP_LEVEL_1_SELL` (= 1)
- `private static final int XP_LEVEL_1_BUY` (= 2)
- `private static final int XP_LEVEL_2_SELL` (= 5)
- `private static final int XP_LEVEL_2_BUY` (= 10)
- `private static final int XP_LEVEL_3_SELL` (= 10)
- `private static final int XP_LEVEL_3_BUY` (= 20)
- `private static final int XP_LEVEL_4_SELL` (= 15)
- `private static final int XP_LEVEL_4_BUY` (= 30)
- `private static final int XP_LEVEL_5_TRADE` (= 30)
- `private static final float LOW_TIER_PRICE_MULTIPLIER` (= 0.05000000074505806f)
- `private static final float HIGH_TIER_PRICE_MULTIPLIER` (= 0.20000000298023224f)
- `public static final Map<VillagerProfession,it.unimi.dsi.fastutil.ints.Int2ObjectMap<VillagerTrades.ItemListing[]>> TRADES`
- `public static final it.unimi.dsi.fastutil.ints.Int2ObjectMap<VillagerTrades.ItemListing[]> WANDERING_TRADER_TRADES`
- `private static final VillagerTrades.TreasureMapForEmeralds DESERT_MAP`
- `private static final VillagerTrades.TreasureMapForEmeralds SAVANNA_MAP`
- `private static final VillagerTrades.TreasureMapForEmeralds PLAINS_MAP`
- `private static final VillagerTrades.TreasureMapForEmeralds TAIGA_MAP`
- `private static final VillagerTrades.TreasureMapForEmeralds SNOWY_MAP`
- `private static final VillagerTrades.TreasureMapForEmeralds JUNGLE_MAP`
- `private static final VillagerTrades.TreasureMapForEmeralds SWAMP_MAP`
- `public static final Map<VillagerProfession,it.unimi.dsi.fastutil.ints.Int2ObjectMap<VillagerTrades.ItemListing[]>> EXPERIMENTAL_TRADES`
- `public static final List<org.apache.commons.lang3.tuple.Pair<VillagerTrades.ItemListing[],Integer>> EXPERIMENTAL_WANDERING_TRADER_TRADES`

### Methods
- `private static VillagerTrades.ItemListing commonBooks(int p_301375_)`
- `private static VillagerTrades.ItemListing specialBooks()`
- `private static it.unimi.dsi.fastutil.ints.Int2ObjectMap<VillagerTrades.ItemListing[]> toIntMap(com.google.common.collect.ImmutableMap<Integer,VillagerTrades.ItemListing[]> p_35631_)`
- `private static ItemStack potion(Potion p_298471_)`
- `private static ItemStack enchant(Item p_297234_,  Enchantment p_297599_,  int p_298408_)`

## VillagerTrades.DyedArmorForEmeralds

*class* `net.minecraft.world.entity.npc.VillagerTrades.DyedArmorForEmeralds`

Enclosing class: VillagerTrades

### Fields
- `private final Item item`
- `private final int value`
- `private final int maxUses`
- `private final int villagerXp`

### Methods
- `public MerchantOffer getOffer(Entity p_219679_,  RandomSource p_219680_)`
- `private static DyeItem getRandomDye(RandomSource p_219677_)`

## VillagerTrades.EmeraldForItems

*class* `net.minecraft.world.entity.npc.VillagerTrades.EmeraldForItems`

Enclosing class: VillagerTrades

### Fields
- `private final ItemStack itemStack`
- `private final int maxUses`
- `private final int villagerXp`
- `private final int emeraldAmount`
- `private final float priceMultiplier`

### Methods
- `public MerchantOffer getOffer(Entity p_219682_,  RandomSource p_219683_)`

## VillagerTrades.EmeraldsForVillagerTypeItem

*class* `net.minecraft.world.entity.npc.VillagerTrades.EmeraldsForVillagerTypeItem`

Enclosing class: VillagerTrades

### Fields
- `private final Map<VillagerType,Item> trades`
- `private final int cost`
- `private final int maxUses`
- `private final int villagerXp`

### Methods
- `@Nullable public MerchantOffer getOffer(Entity p_219685_,  RandomSource p_219686_)`

## VillagerTrades.EnchantBookForEmeralds

*class* `net.minecraft.world.entity.npc.VillagerTrades.EnchantBookForEmeralds`

Enclosing class: VillagerTrades

### Fields
- `private final int villagerXp`
- `private final List<Enchantment> tradeableEnchantments`
- `private final int minLevel`
- `private final int maxLevel`

### Methods
- `public MerchantOffer getOffer(Entity p_219688_,  RandomSource p_219689_)`

## VillagerTrades.EnchantedItemForEmeralds

*class* `net.minecraft.world.entity.npc.VillagerTrades.EnchantedItemForEmeralds`

Enclosing class: VillagerTrades

### Fields
- `private final ItemStack itemStack`
- `private final int baseEmeraldCost`
- `private final int maxUses`
- `private final int villagerXp`
- `private final float priceMultiplier`

### Methods
- `public MerchantOffer getOffer(Entity p_219691_,  RandomSource p_219692_)`

## VillagerTrades.FailureItemListing

*class* `net.minecraft.world.entity.npc.VillagerTrades.FailureItemListing`

Enclosing class: VillagerTrades

### Methods
- `public MerchantOffer getOffer(Entity p_298567_,  RandomSource p_297389_)`

## VillagerTrades.ItemListing

*interface* `net.minecraft.world.entity.npc.VillagerTrades.ItemListing`

Enclosing class: VillagerTrades

### Methods
- `@Nullable MerchantOffer getOffer(Entity p_219693_,  RandomSource p_219694_)`

## VillagerTrades.ItemsAndEmeraldsToItems

*class* `net.minecraft.world.entity.npc.VillagerTrades.ItemsAndEmeraldsToItems`

Enclosing class: VillagerTrades

### Fields
- `private final ItemStack fromItem`
- `private final int emeraldCost`
- `private final ItemStack toItem`
- `private final int maxUses`
- `private final int villagerXp`
- `private final float priceMultiplier`

### Methods
- `@Nullable public MerchantOffer getOffer(Entity p_219696_,  RandomSource p_219697_)`

## VillagerTrades.ItemsForEmeralds

*class* `net.minecraft.world.entity.npc.VillagerTrades.ItemsForEmeralds`

Enclosing class: VillagerTrades

### Fields
- `private final ItemStack itemStack`
- `private final int emeraldCost`
- `private final int maxUses`
- `private final int villagerXp`
- `private final float priceMultiplier`

### Methods
- `public MerchantOffer getOffer(Entity p_219699_,  RandomSource p_219700_)`

## VillagerTrades.SuspiciousStewForEmerald

*class* `net.minecraft.world.entity.npc.VillagerTrades.SuspiciousStewForEmerald`

Enclosing class: VillagerTrades

### Fields
- `private final List<SuspiciousEffectHolder.EffectEntry> effects`
- `private final int xp`
- `private final float priceMultiplier`

### Methods
- `@Nullable public MerchantOffer getOffer(Entity p_219702_,  RandomSource p_219703_)`

## VillagerTrades.TippedArrowForItemsAndEmeralds

*class* `net.minecraft.world.entity.npc.VillagerTrades.TippedArrowForItemsAndEmeralds`

Enclosing class: VillagerTrades

### Fields
- `private final ItemStack toItem`
- `private final int toCount`
- `private final int emeraldCost`
- `private final int maxUses`
- `private final int villagerXp`
- `private final Item fromItem`
- `private final int fromCount`
- `private final float priceMultiplier`

### Methods
- `public MerchantOffer getOffer(Entity p_219705_,  RandomSource p_219706_)`

## VillagerTrades.TreasureMapForEmeralds

*class* `net.minecraft.world.entity.npc.VillagerTrades.TreasureMapForEmeralds`

Enclosing class: VillagerTrades

### Fields
- `private final int emeraldCost`
- `private final TagKey<Structure> destination`
- `private final String displayName`
- `private final MapDecoration.Type destinationType`
- `private final int maxUses`
- `private final int villagerXp`

### Methods
- `@Nullable public MerchantOffer getOffer(Entity p_219708_,  RandomSource p_219709_)`

## VillagerTrades.TypeSpecificTrade

*record* `net.minecraft.world.entity.npc.VillagerTrades.TypeSpecificTrade`

Enclosing class: VillagerTrades

### Fields
- `private final Map<VillagerType,VillagerTrades.ItemListing> trades`
  The field for the trades record component.

### Methods
- `public static VillagerTrades.TypeSpecificTrade oneTradeInBiomes(VillagerTrades.ItemListing p_297877_,  VillagerType... p_298107_)`
- `@Nullable public MerchantOffer getOffer(Entity p_300790_,  RandomSource p_298667_)`
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
- `public Map<VillagerType,VillagerTrades.ItemListing> trades()`
  Returns the value of the trades record component.
  - returns: the value of the trades record component

## VillagerType

*class* `net.minecraft.world.entity.npc.VillagerType`

### Fields
- `public static final VillagerType DESERT`
- `public static final VillagerType JUNGLE`
- `public static final VillagerType PLAINS`
- `public static final VillagerType SAVANNA`
- `public static final VillagerType SNOW`
- `public static final VillagerType SWAMP`
- `public static final VillagerType TAIGA`
- `private final String name`
- `private static final Map<ResourceKey<Biome>,VillagerType> BY_BIOME`

### Methods
- `public String toString()`
- `private static VillagerType register(String p_35832_)`
- `public static VillagerType byBiome(Holder<Biome> p_204074_)`

## WanderingTrader

*class* `net.minecraft.world.entity.npc.WanderingTrader`

### Fields
- `private static final int NUMBER_OF_TRADE_OFFERS` (= 5)
- `@Nullable private BlockPos wanderTarget`
- `private int despawnDelay`

### Inherited fields
- from `net.minecraft.world.entity.npc.AbstractVillager`: `offers`, `VILLAGER_SLOT_OFFSET`
- from `net.minecraft.world.entity.AgeableMob`: `age`, `BABY_START_AGE`, `forcedAge`, `forcedAgeTimer`
- from `net.minecraft.world.entity.PathfinderMob`: `DEFAULT_WALK_TARGET_VALUE`
- from `net.minecraft.world.entity.Mob`: `ambientSoundTime`, `armorDropChances`, `DEFAULT_EQUIPMENT_DROP_CHANCE`, `goalSelector`, `handDropChances`, `jumpControl`, `LEASH_TAG`, `lookControl`, `MAX_ENCHANTED_ARMOR_CHANCE`, `MAX_ENCHANTED_WEAPON_CHANCE`, `MAX_PICKUP_LOOT_CHANCE`, `MAX_WEARING_ARMOR_CHANCE`, `moveControl`, `navigation`, `PICKUP_REACH`, `PRESERVE_ITEM_DROP_CHANCE`, `targetSelector`, `UPDATE_GOAL_SELECTOR_EVERY_N_TICKS`, `xpReward`
- from `net.minecraft.world.entity.LivingEntity`: `animStep`, `animStepO`, `ARMOR_SLOT_OFFSET`, `ARMOR_SLOTS`, `attackAnim`, `attackStrengthTicker`, `autoSpinAttackTicks`, `brain`, `DATA_LIVING_ENTITY_FLAGS`, `dead`, `DEATH_DURATION`, `deathScore`, `deathTime`, `DEFAULT_BASE_GRAVITY`, `DEFAULT_EYE_HEIGHT`, `EQUIPMENT_SLOT_OFFSET`, `EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT`, `fallFlyTicks`, `HAND_SLOTS`, `hurtDuration`, `hurtTime`, `invulnerableDuration`, `jumping`, `lastHurt`, `lastHurtByPlayer`, `lastHurtByPlayerTime`, `lerpHeadSteps`, `lerpSteps`, `lerpX`, `lerpXRot`, `lerpY`, `lerpYHeadRot`, `lerpYRot`, `lerpZ`, `LIVING_ENTITY_FLAG_IS_USING`, `LIVING_ENTITY_FLAG_OFF_HAND`, `LIVING_ENTITY_FLAG_SPIN_ATTACK`, `MIN_MOVEMENT_DISTANCE`, `noActionTime`, `oAttackAnim`, `oRun`, `PLAYER_HURT_EXPERIENCE_TIME`, `removeArrowTime`, `removeStingerTime`, `rotA`, `rotOffs`, `run`, `SLEEPING_DIMENSIONS`, `SWING_DURATION`, `swinging`, `swingingArm`, `swingTime`, `timeOffs`, `USE_ITEM_INTERVAL`, `useItem`, `useItemRemaining`, `walkAnimation`, `xxa`, `yBodyRot`, `yBodyRotO`, `yHeadRot`, `yHeadRotO`, `yya`, `zza`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`
- from `net.minecraft.world.entity.npc.InventoryCarrier`: `TAG_INVENTORY`

### Methods
- `protected void registerGoals()`
- `@Nullable public AgeableMob getBreedOffspring(ServerLevel p_150046_,  AgeableMob p_150047_)`
- `public boolean showProgressBar()`
- `public InteractionResult mobInteract(Player p_35856_,  InteractionHand p_35857_)`
- `protected void updateTrades()`
- `private void experimentalUpdateTrades()`
- `public void addAdditionalSaveData(CompoundTag p_35861_)`
- `public void readAdditionalSaveData(CompoundTag p_35852_)`
- `public boolean removeWhenFarAway(double p_35886_)`
- `protected void rewardTradeXp(MerchantOffer p_35859_)`
- `protected SoundEvent getAmbientSound()`
- `protected SoundEvent getHurtSound(DamageSource p_35870_)`
- `protected SoundEvent getDeathSound()`
- `protected SoundEvent getDrinkingSound(ItemStack p_35865_)`
- `protected SoundEvent getTradeUpdatedSound(boolean p_35890_)`
- `public SoundEvent getNotifyTradeSound()`
- `public void setDespawnDelay(int p_35892_)`
- `public int getDespawnDelay()`
- `public void aiStep()`
- `private void maybeDespawn()`
- `public void setWanderTarget(@Nullable  BlockPos p_35884_)`
- `@Nullable BlockPos getWanderTarget()`

### Inherited methods
- from `net.minecraft.world.entity.npc.AbstractVillager`: `addOffersFromItemListings`, `addParticlesAroundSelf`, `canBeLeashed`, `changeDimension`, `defineSynchedData`, `die`, `finalizeSpawn`, `getInventory`, `getOffers`, `getRopeHoldPosition`, `getSlot`, `getStandingEyeHeight`, `getTradingPlayer`, `getUnhappyCounter`, `getVillagerXp`, `isClientSide`, `isTrading`, `notifyTrade`, `notifyTradeUpdated`, `overrideOffers`, `overrideXp`, `playCelebrateSound`, `setTradingPlayer`, `setUnhappyCounter`, `stopTrading`
- from `net.minecraft.world.entity.AgeableMob`: `ageBoundaryReached`, `ageUp`, `ageUp`, `canBreed`, `getAge`, `getSpeedUpSecondsWhenFeeding`, `isBaby`, `onSyncedDataUpdated`, `setAge`, `setBaby`
- from `net.minecraft.world.entity.PathfinderMob`: `checkSpawnRules`, `followLeashSpeed`, `getWalkTargetValue`, `getWalkTargetValue`, `isPanicking`, `isPathFinding`, `onLeashDistance`, `shouldStayCloseToLeashHolder`, `tickLeash`
- from `net.minecraft.world.entity.Mob`: `ate`, `baseTick`, `canAttackType`, `canFireProjectileWeapon`, `canHoldItem`, `canPickUpLoot`, `canReplaceCurrentItem`, `canReplaceEqualItem`, `canTakeItem`, `checkDespawn`, `checkMobSpawnRules`, `checkSpawnObstruction`, `clearRestriction`, `convertTo`, `createBodyControl`, `createMobAttributes`, `createNavigation`, `customServerAiStep`, `doHurtTarget`, `dropCustomDeathLoot`, `dropFromLootTable`, `dropLeash`, `enchantSpawnedArmor`, `enchantSpawnedWeapon`, `equipItemIfPossible`, `getAmbientSoundInterval`, `getArmorSlots`, `getAttackBoundingBox`, `getControllingPassenger`, `getDefaultLootTable`, `getEquipmentDropChance`, `getEquipmentForSlot`, `getExperienceReward`, `getHandSlots`, `getHeadRotSpeed`, `getItemBySlot`, `getJumpControl`, `getLeashHolder`, `getLookControl`, `getLootTable`, `getLootTableSeed`, `getMainArm`, `getMaxFallDistance`, `getMaxHeadXRot`, `getMaxHeadYRot`, `getMaxSpawnClusterSize`, `getMoveControl`, `getNavigation`, `getPathfindingMalus`, `getPickResult`, `getPickupReach`, `getRestrictCenter`, `getRestrictRadius`, `getSensing`, `getSpawnType`, `getTarget`, `handleEntityEvent`, `hasRestriction`, `interact`, `isAggressive`, `isEffectiveAi`, `isLeashed`, `isLeftHanded`, `isMaxGroupSizeReached`, `isNoAi`, `isPersistenceRequired`, `isSpawnCancelled`, `isSunBurnTick`, `isWithinMeleeAttackRange`, `isWithinRestriction`, `isWithinRestriction`, `jumpInFluid`, `jumpInLiquid`, `lookAt`, `onOffspringSpawnedFromEgg`, `onPathfindingDone`, `onPathfindingStart`, `pickUpItem`, `playAmbientSound`, `playHurtSound`, `populateDefaultEquipmentEnchantments`, `populateDefaultEquipmentSlots`, `removeAfterChangingDimensions`, `removeAllGoals`, `removeFreeWill`, `requiresCustomPersistence`, `restrictTo`, `sendDebugPackets`, `serverAiStep`, `setAggressive`, `setCanPickUpLoot`, `setDelayedLeashHolderId`, `setDropChance`, `setGuaranteedDrop`, `setItemSlot`, `setItemSlotAndDropWhenKilled`, `setLeashedTo`, `setLeftHanded`, `setNoAi`, `setPathfindingMalus`, `setPersistenceRequired`, `setSpawnCancelled`, `setSpeed`, `setTarget`, `setXxa`, `setYya`, `setZza`, `shouldDespawnInPeaceful`, `shouldPassengersInheritMalus`, `spawnAnim`, `startRiding`, `tick`, `tickHeadTurn`, `updateControlFlags`, `wantsToPickUp`
- from `net.minecraft.world.entity.LivingEntity`: `actuallyHurt`, `addEffect`, `addEffect`, `animateHurt`, `areAllEffectsAmbient`, `attackable`, `blockedByShield`, `blockUsingShield`, `brainProvider`, `broadcastBreakEvent`, `broadcastBreakEvent`, `calculateEntityAnimation`, `calculateFallDamage`, `canAttack`, `canAttack`, `canBeAffected`, `canBeSeenAsEnemy`, `canBeSeenByAnyone`, `canBreatheUnderwater`, `canChangeDimensions`, `canDisableShield`, `canFreeze`, `canSpawnSoulSpeedParticle`, `canStandOnFluid`, `causeFallDamage`, `checkAutoSpinAttack`, `checkFallDamage`, `clearSleepingPos`, `completeUsingItem`, `createLivingAttributes`, `createWitherRose`, `curePotionEffects`, `decreaseAirSupply`, `doAutoAttackOnTouch`, `doesEmitEquipEvent`, `doPush`, `dropAllDeathLoot`, `dropEquipment`, `dropExperience`, `eat`, `equipmentHasChanged`, `forceAddEffect`, `getAbsorptionAmount`, `getActiveEffects`, `getActiveEffectsMap`, `getArmorCoverPercentage`, `getArmorValue`, `getArrowCount`, `getAttackAnim`, `getAttribute`, `getAttributeBaseValue`, `getAttributeBaseValue`, `getAttributes`, `getAttributeValue`, `getAttributeValue`, `getBedOrientation`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getBrain`, `getCapability`, `getCombatTracker`, `getDamageAfterArmorAbsorb`, `getDamageAfterMagicAbsorb`, `getDimensions`, `getDismountPoses`, `getEatingSound`, `getEffect`, `getEquipmentSlotForItem`, `getEyeHeight`, `getFallFlyingTicks`, `getFallSounds`, `getFluidFallingAdjustedMovement`, `getFlyingSpeed`, `getHealth`, `getHitbox`, `getHurtDir`, `getItemInHand`, `getJumpBoostPower`, `getJumpPower`, `getKillCredit`, `getLastAttacker`, `getLastClimbablePos`, `getLastDamageSource`, `getLastHurtByMob`, `getLastHurtByMobTimestamp`, `getLastHurtMob`, `getLastHurtMobTimestamp`, `getLocalBoundsForPose`, `getMainHandItem`, `getMaxAbsorption`, `getMaxHealth`, `getMobType`, `getMyRidingOffset`, `getNoActionTime`, `getOffhandItem`, `getPassengerRidingPosition`, `getProjectile`, `getRandom`, `getRelativePortalPosition`, `getRiddenInput`, `getRiddenSpeed`, `getScale`, `getSleepingPos`, `getSoundVolume`, `getSpeed`, `getStingerCount`, `getSwimAmount`, `getTicksUsingItem`, `getUsedItemHand`, `getUseItem`, `getUseItemRemainingTicks`, `getViewYRot`, `getVisibilityPercent`, `getVisualRotationYInDegrees`, `getVoicePitch`, `getWaterSlowDown`, `getYHeadRot`, `goDownInWater`, `handleDamageEvent`, `handleRelativeFrictionAndCalculateMovement`, `hasEffect`, `hasItemInSlot`, `hasLineOfSight`, `heal`, `hurt`, `hurtArmor`, `hurtCurrentlyUsedShield`, `hurtHelmet`, `increaseAirSupply`, `indicateDamage`, `internalSetAbsorptionAmount`, `invalidateCaps`, `isAffectedByFluids`, `isAffectedByPotions`, `isAlive`, `isAlwaysExperienceDropper`, `isAutoSpinAttack`, `isBlocking`, `isCurrentlyGlowing`, `isDamageSourceBlocked`, `isDeadOrDying`, `isFallFlying`, `isHolding`, `isHolding`, `isImmobile`, `isInvertedHealAndHarm`, `isInWall`, `isPickable`, `isPushable`, `isSensitiveToWater`, `isSleeping`, `isSuppressingSlidingDownLadder`, `isUsingItem`, `isVisuallySwimming`, `jumpFromGround`, `kill`, `knockback`, `lerpHeadRotationStep`, `lerpHeadTo`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `lookAt`, `makeBrain`, `maxUpStep`, `onBelowWorld`, `onChangedBlock`, `onClimbable`, `onEffectAdded`, `onEffectRemoved`, `onEffectUpdated`, `onEnterCombat`, `onEquipItem`, `onItemPickup`, `onLeaveCombat`, `onSoulSpeedBlock`, `playBlockFallSound`, `push`, `pushEntities`, `randomTeleport`, `recreateFromPacket`, `releaseUsingItem`, `remove`, `removeAllEffects`, `removeEffect`, `removeEffectNoUpdate`, `removeEffectParticles`, `removeFrost`, `removeSoulSpeed`, `resetForwardDirectionOfRelativePortalPosition`, `reviveCaps`, `rideTick`, `sendEffectToPassengers`, `setAbsorptionAmount`, `setArrowCount`, `setDiscardFriction`, `setHealth`, `setItemInHand`, `setJumping`, `setLastHurtByMob`, `setLastHurtByPlayer`, `setLastHurtMob`, `setLivingEntityFlag`, `setNoActionTime`, `setRecordPlayingNearby`, `setSleepingPos`, `setSprinting`, `setStingerCount`, `setYBodyRot`, `setYHeadRot`, `shouldDiscardFriction`, `shouldDropExperience`, `shouldDropLoot`, `shouldRemoveSoulSpeed`, `shouldRiderFaceForward`, `shouldShowName`, `skipDropExperience`, `spawnSoulSpeedParticle`, `startSleeping`, `startUsingItem`, `stopRiding`, `stopSleeping`, `stopUsingItem`, `swing`, `swing`, `take`, `tickDeath`, `tickEffects`, `tickRidden`, `travel`, `triggerItemUseEffects`, `tryAddFrost`, `tryAddSoulSpeed`, `updateEffectVisibility`, `updateInvisibilityStatus`, `updateSwingTime`, `updateUsingItem`, `updateWalkAnimation`, `verifyEquippedItem`, `wasExperienceConsumed`, `wouldNotSuffocateAtTargetPose`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canCollideWith`, `canControlVehicle`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `changeDimension`, `checkBelowWorld`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxHeightFluidType`, `getMotionDirection`, `getMovementEmission`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYRot`, `getZ`, `getZ`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `killedEntity`, `lavaHurt`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `refreshDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startSeenByPlayer`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getEyeInFluidType`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getFluidTypeHeight`, `getMaxHeightFluidType`, `getParts`, `getPersistentData`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isAddedToWorld`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `onAddedToWorld`, `onRemovedFromWorld`, `revive`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraftforge.common.extensions.IForgeLivingEntity`: `canDrownInFluidType`, `canSwimInFluidType`, `moveInFluid`, `self`, `sinkInFluid`
- from `net.minecraft.world.entity.npc.InventoryCarrier`: `readInventoryFromTag`, `writeInventoryToTag`
- from `net.minecraft.world.item.trading.Merchant`: `canRestock`, `openTradingScreen`

## WanderingTrader.WanderToPositionGoal

*class* `net.minecraft.world.entity.npc.WanderingTrader.WanderToPositionGoal`

Enclosing class: WanderingTrader

### Fields
- `final WanderingTrader trader`
- `final double stopDistance`
- `final double speedModifier`

### Methods
- `public void stop()`
- `public boolean canUse()`
- `public void tick()`
- `private boolean isTooFarAway(BlockPos p_35904_,  double p_35905_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.goal.Goal`: `adjustedTickDelay`, `canContinueToUse`, `getFlags`, `isInterruptable`, `reducedTickDelay`, `requiresUpdateEveryTick`, `setFlags`, `start`, `toString`

## WanderingTraderSpawner

*class* `net.minecraft.world.entity.npc.WanderingTraderSpawner`

### Fields
- `private static final int DEFAULT_TICK_DELAY` (= 1200)
- `public static final int DEFAULT_SPAWN_DELAY` (= 24000)
- `private static final int MIN_SPAWN_CHANCE` (= 25)
- `private static final int MAX_SPAWN_CHANCE` (= 75)
- `private static final int SPAWN_CHANCE_INCREASE` (= 25)
- `private static final int SPAWN_ONE_IN_X_CHANCE` (= 10)
- `private static final int NUMBER_OF_SPAWN_ATTEMPTS` (= 10)
- `private final RandomSource random`
- `private final ServerLevelData serverLevelData`
- `private int tickDelay`
- `private int spawnDelay`
- `private int spawnChance`

### Methods
- `public int tick(ServerLevel p_35922_,  boolean p_35923_,  boolean p_35924_)`
- `private boolean spawn(ServerLevel p_35916_)`
- `private void tryToSpawnLlamaFor(ServerLevel p_35918_,  WanderingTrader p_35919_,  int p_35920_)`
- `@Nullable private BlockPos findSpawnPositionNear(LevelReader p_35929_,  BlockPos p_35930_,  int p_35931_)`
- `private boolean hasEnoughSpace(BlockGetter p_35926_,  BlockPos p_35927_)`
