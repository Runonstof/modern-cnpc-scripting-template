# net.minecraft.entity.boss

- [EntityDragon](#entitydragon)
- [EntityWither](#entitywither)
## EntityDragon

*class* `net.minecraft.entity.boss.EntityDragon`

All Implemented Interfaces: ICommandSender, IEntityMultiPart, IMob, IAnimals, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public static final DataParameter<java.lang.Integer> PHASE`
- `public double[][] ringBuffer`
- `public int ringBufferIndex`
- `public MultiPartEntityPart[] dragonPartArray`
- `public MultiPartEntityPart dragonPartHead`
- `public MultiPartEntityPart dragonPartNeck`
- `public MultiPartEntityPart dragonPartBody`
- `public MultiPartEntityPart dragonPartTail1`
- `public MultiPartEntityPart dragonPartTail2`
- `public MultiPartEntityPart dragonPartTail3`
- `public MultiPartEntityPart dragonPartWing1`
- `public MultiPartEntityPart dragonPartWing2`
- `public float prevAnimTime`
- `public float animTime`
- `public boolean slowed`
- `public int deathTicks`
- `public EntityEnderCrystal healingEnderCrystal`

### Inherited fields
- from `net.minecraft.entity.EntityLiving`: `experienceValue`, `inventoryArmorDropChances`, `inventoryHandsDropChances`, `jumpHelper`, `livingSoundTime`, `moveHelper`, `navigator`, `targetTasks`, `tasks`
- from `net.minecraft.entity.EntityLivingBase`: `activeItemStack`, `activeItemStackUseCount`, `arrowHitTimer`, `attackedAtYaw`, `attackingPlayer`, `cameraPitch`, `dead`, `deathTime`, `HAND_STATES`, `hurtTime`, `idleTime`, `interpTargetPitch`, `interpTargetX`, `interpTargetY`, `interpTargetYaw`, `interpTargetZ`, `isJumping`, `isSwingInProgress`, `jumpMovementFactor`, `lastDamage`, `limbSwing`, `limbSwingAmount`, `maxHurtResistantTime`, `maxHurtTime`, `movedDistance`, `moveForward`, `moveStrafing`, `moveVertical`, `newPosRotationIncrements`, `onGroundSpeedFactor`, `prevCameraPitch`, `prevLimbSwingAmount`, `prevMovedDistance`, `prevOnGroundSpeedFactor`, `prevRenderYawOffset`, `prevRotationYawHead`, `prevSwingProgress`, `randomUnused1`, `randomUnused2`, `randomYawVelocity`, `recentlyHit`, `renderYawOffset`, `rotationYawHead`, `scoreValue`, `SWIM_SPEED`, `swingingHand`, `swingProgress`, `swingProgressInt`, `ticksElytraFlying`, `ticksSinceLastSwing`, `unused180`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`
- from `net.minecraft.entity.monster.IMob`: `MOB_SELECTOR`, `VISIBLE_MOB_SELECTOR`

### Methods
- `protected void applyEntityAttributes()`
- `protected void entityInit()`
- `public double[] getMovementOffsets(int p_70974_1_,  float p_70974_2_)`
- `public void onLivingUpdate()`
- `public boolean attackEntityFromPart(MultiPartEntityPart dragonPart,  DamageSource source,  float damage)`
- `public boolean attackEntityFrom(DamageSource source,  float amount)`
- `protected boolean attackDragonFrom(DamageSource source,  float amount)`
- `public void onKillCommand()`
- `protected void onDeathUpdate()`
- `public int initPathPoints()`
- `public int getNearestPpIdx(double x,  double y,  double z)`
- `public Path findPath(int startIdx,  int finishIdx,  PathPoint andThen)`
- `public static void registerFixesDragon(DataFixer fixer)`
- `public void writeEntityToNBT(NBTTagCompound compound)`
- `public void readEntityFromNBT(NBTTagCompound compound)`
- `protected void despawnEntity()`
- `public Entity[] getParts()`
- `public boolean canBeCollidedWith()`
- `public World getWorld()`
- `public SoundCategory getSoundCategory()`
- `protected SoundEvent getAmbientSound()`
- `protected SoundEvent getHurtSound(DamageSource damageSourceIn)`
- `protected float getSoundVolume()`
- `protected ResourceLocation getLootTable()`
- `public float getHeadPartYOffset(int p_184667_1_,  double[] p_184667_2_,  double[] p_184667_3_)`
- `public Vec3d getHeadLookVec(float p_184665_1_)`
- `public void onCrystalDestroyed(EntityEnderCrystal crystal,  BlockPos pos,  DamageSource dmgSrc)`
- `public void notifyDataManagerChange(DataParameter<?> key)`
- `public PhaseManager getPhaseManager()`
- `public DragonFightManager getFightManager()`
- `public void addPotionEffect(PotionEffect potioneffectIn)`
- `protected boolean canBeRidden(Entity entityIn)`
- `public boolean isNonBoss()`

### Inherited methods
- from `net.minecraft.entity.EntityLiving`: `canAttackClass`, `canBeLeashedTo`, `canBeSteered`, `canDespawn`, `canEquipItem`, `canPassengerSteer`, `canPickUpLoot`, `clearLeashed`, `createBodyHelper`, `createNavigator`, `dropEquipment`, `dropFewItems`, `dropLoot`, `eatGrassBonus`, `enablePersistence`, `faceEntity`, `getArmorByChance`, `getArmorInventoryList`, `getAttackTarget`, `getCanSpawnHere`, `getDropItem`, `getEntitySenses`, `getExperiencePoints`, `getHeldEquipment`, `getHorizontalFaceSpeed`, `getItemStackFromSlot`, `getJumpHelper`, `getLeashed`, `getLeashHolder`, `getLookHelper`, `getMaxFallHeight`, `getMaxSpawnedInChunk`, `getMoveHelper`, `getNavigator`, `getPathPriority`, `getPrimaryHand`, `getRenderSizeModifier`, `getSlotForItemStack`, `getTalkInterval`, `getVerticalFaceSpeed`, `handleStatusUpdate`, `initEntityAI`, `isAIDisabled`, `isItemStackInSlot`, `isLeftHanded`, `isNoDespawnRequired`, `isNotColliding`, `isServerWorld`, `onEntityUpdate`, `onInitialSpawn`, `onUpdate`, `playHurtSound`, `playLivingSound`, `processInitialInteract`, `processInteract`, `registerFixesMob`, `replaceItemInInventory`, `setAIMoveSpeed`, `setAttackTarget`, `setCanPickUpLoot`, `setDropChance`, `setEnchantmentBasedOnDifficulty`, `setEquipmentBasedOnDifficulty`, `setItemStackToSlot`, `setLeashHolder`, `setLeftHanded`, `setMoveForward`, `setMoveStrafing`, `setMoveVertical`, `setNoAI`, `setPathPriority`, `spawnExplosionParticle`, `startRiding`, `updateAITasks`, `updateDistance`, `updateEntityActionState`, `updateEquipmentIfNeeded`, `updateLeashedState`
- from `net.minecraft.entity.EntityLivingBase`: `applyArmorCalculations`, `applyPotionDamageCalculations`, `areAllPotionsAmbient`, `attackable`, `attackEntityAsMob`, `attemptTeleport`, `blockUsingShield`, `canBeHitWithPotion`, `canBePushed`, `canBreatheUnderwater`, `canDropLoot`, `canEntityBeSeen`, `clearActivePotions`, `collideWithEntity`, `collideWithNearbyEntities`, `curePotionEffects`, `damageArmor`, `damageEntity`, `damageShield`, `decreaseAirSupply`, `dismountEntity`, `dismountRidingEntity`, `fall`, `frostWalk`, `getAbsorptionAmount`, `getActiveHand`, `getActiveItemStack`, `getActivePotionEffect`, `getActivePotionEffects`, `getActivePotionMap`, `getAIMoveSpeed`, `getAlwaysRenderNameTagForRender`, `getArrowCountInEntity`, `getAttackingEntity`, `getAttributeMap`, `getCapability`, `getCombatTracker`, `getCreatureAttribute`, `getDeathSound`, `getEntityAttribute`, `getFallSound`, `getHealth`, `getHeldItem`, `getHeldItemMainhand`, `getHeldItemOffhand`, `getIdleTime`, `getItemInUseCount`, `getItemInUseMaxCount`, `getJumpUpwardsMotion`, `getLastAttackedEntity`, `getLastAttackedEntityTime`, `getLastDamageSource`, `getLook`, `getMaxHealth`, `getRevengeTarget`, `getRevengeTimer`, `getRNG`, `getRotationYawHead`, `getSoundPitch`, `getSwingProgress`, `getTicksElytraFlying`, `getTotalArmorValue`, `getWaterSlowDown`, `handleJumpLava`, `handleJumpWater`, `hasCapability`, `hasItemInSlot`, `heal`, `isActiveItemStackBlocking`, `isChild`, `isElytraFlying`, `isEntityAlive`, `isEntityUndead`, `isHandActive`, `isMovementBlocked`, `isOnLadder`, `isPlayer`, `isPlayerSleeping`, `isPotionActive`, `isPotionApplicable`, `jump`, `knockBack`, `markPotionsDirty`, `markVelocityChanged`, `moveRelative`, `onChangedPotionEffect`, `onDeath`, `onFinishedPotionEffect`, `onItemPickup`, `onItemUseFinish`, `onNewPotionEffect`, `outOfWorld`, `performHurtAnimation`, `playEquipSound`, `removeActivePotionEffect`, `removePotionEffect`, `renderBrokenItemStack`, `resetActiveHand`, `resetPotionEffectMetadata`, `sendEndCombat`, `sendEnterCombat`, `setAbsorptionAmount`, `setActiveHand`, `setArrowCountInEntity`, `setHealth`, `setHeldItem`, `setJumping`, `setLastAttackedEntity`, `setPartying`, `setPositionAndRotationDirect`, `setRenderYawOffset`, `setRevengeTarget`, `setRotationYawHead`, `setSprinting`, `shouldRiderFaceForward`, `stopActiveHand`, `swingArm`, `travel`, `updateActiveHand`, `updateArmSwingProgress`, `updateFallState`, `updateItemUse`, `updatePotionEffects`, `updatePotionMetadata`, `updateRidden`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canExplosionDestroyBlock`, `canFitPassenger`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canTriggerWalking`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLookVec`, `getLowestRidingEntity`, `getMaxInPortalTime`, `getMirroredYaw`, `getMountedYOffset`, `getName`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getServer`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleWaterMovement`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `move`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `onAddedToWorld`, `onCollideWithPlayer`, `onInsideBlock`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRotation`, `setSilent`, `setSize`, `setSneaking`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `toString`, `turn`, `updatePassenger`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntityWither

*class* `net.minecraft.entity.boss.EntityWither`

All Implemented Interfaces: ICommandSender, IRangedAttackMob, IMob, IAnimals, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.entity.EntityCreature`: `FLEEING_SPEED_MODIFIER`, `FLEEING_SPEED_MODIFIER_UUID`
- from `net.minecraft.entity.EntityLiving`: `experienceValue`, `inventoryArmorDropChances`, `inventoryHandsDropChances`, `jumpHelper`, `livingSoundTime`, `moveHelper`, `navigator`, `targetTasks`, `tasks`
- from `net.minecraft.entity.EntityLivingBase`: `activeItemStack`, `activeItemStackUseCount`, `arrowHitTimer`, `attackedAtYaw`, `attackingPlayer`, `cameraPitch`, `dead`, `deathTime`, `HAND_STATES`, `hurtTime`, `idleTime`, `interpTargetPitch`, `interpTargetX`, `interpTargetY`, `interpTargetYaw`, `interpTargetZ`, `isJumping`, `isSwingInProgress`, `jumpMovementFactor`, `lastDamage`, `limbSwing`, `limbSwingAmount`, `maxHurtResistantTime`, `maxHurtTime`, `movedDistance`, `moveForward`, `moveStrafing`, `moveVertical`, `newPosRotationIncrements`, `onGroundSpeedFactor`, `prevCameraPitch`, `prevLimbSwingAmount`, `prevMovedDistance`, `prevOnGroundSpeedFactor`, `prevRenderYawOffset`, `prevRotationYawHead`, `prevSwingProgress`, `randomUnused1`, `randomUnused2`, `randomYawVelocity`, `recentlyHit`, `renderYawOffset`, `rotationYawHead`, `scoreValue`, `SWIM_SPEED`, `swingingHand`, `swingProgress`, `swingProgressInt`, `ticksElytraFlying`, `ticksSinceLastSwing`, `unused180`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`
- from `net.minecraft.entity.monster.IMob`: `MOB_SELECTOR`, `VISIBLE_MOB_SELECTOR`

### Methods
- `protected void initEntityAI()`
- `protected void entityInit()`
- `public static void registerFixesWither(DataFixer fixer)`
- `public void writeEntityToNBT(NBTTagCompound compound)`
- `public void readEntityFromNBT(NBTTagCompound compound)`
- `public void setCustomNameTag(java.lang.String name)`
- `protected SoundEvent getAmbientSound()`
- `protected SoundEvent getHurtSound(DamageSource damageSourceIn)`
- `protected SoundEvent getDeathSound()`
- `public void onLivingUpdate()`
- `protected void updateAITasks()`
- `public static boolean canDestroyBlock(Block blockIn)`
- `public void ignite()`
- `public void setInWeb()`
- `public void addTrackingPlayer(EntityPlayerMP player)`
- `public void removeTrackingPlayer(EntityPlayerMP player)`
- `public void attackEntityWithRangedAttack(EntityLivingBase target,  float distanceFactor)`
- `public boolean attackEntityFrom(DamageSource source,  float amount)`
- `protected void dropFewItems(boolean wasRecentlyHit,  int lootingModifier)`
- `protected void despawnEntity()`
- `public int getBrightnessForRender()`
- `public void fall(float distance,  float damageMultiplier)`
- `public void addPotionEffect(PotionEffect potioneffectIn)`
- `protected void applyEntityAttributes()`
- `public float getHeadYRotation(int p_82207_1_)`
- `public float getHeadXRotation(int p_82210_1_)`
- `public int getInvulTime()`
- `public void setInvulTime(int time)`
- `public int getWatchedTargetId(int head)`
- `public void updateWatchedTargetId(int targetOffset,  int newId)`
- `public boolean isArmored()`
- `public EnumCreatureAttribute getCreatureAttribute()`
- `protected boolean canBeRidden(Entity entityIn)`
- `public boolean isNonBoss()`
- `public void setSwingingArms(boolean swingingArms)`

### Inherited methods
- from `net.minecraft.entity.monster.EntityMob`: `attackEntityAsMob`, `canDropLoot`, `getBlockPathWeight`, `getCanSpawnHere`, `getFallSound`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `isPreventingPlayerRest`, `isValidLightLevel`, `onUpdate`
- from `net.minecraft.entity.EntityCreature`: `detachHome`, `followLeashSpeed`, `getHomePosition`, `getMaximumHomeDistance`, `hasHome`, `hasPath`, `isWithinHomeDistanceCurrentPosition`, `isWithinHomeDistanceFromPosition`, `onLeashDistance`, `setHomePosAndDistance`, `updateLeashedState`
- from `net.minecraft.entity.EntityLiving`: `canAttackClass`, `canBeLeashedTo`, `canBeSteered`, `canDespawn`, `canEquipItem`, `canPassengerSteer`, `canPickUpLoot`, `clearLeashed`, `createBodyHelper`, `createNavigator`, `dropEquipment`, `dropLoot`, `eatGrassBonus`, `enablePersistence`, `faceEntity`, `getArmorByChance`, `getArmorInventoryList`, `getAttackTarget`, `getDropItem`, `getEntitySenses`, `getExperiencePoints`, `getHeldEquipment`, `getHorizontalFaceSpeed`, `getItemStackFromSlot`, `getJumpHelper`, `getLeashed`, `getLeashHolder`, `getLookHelper`, `getLootTable`, `getMaxFallHeight`, `getMaxSpawnedInChunk`, `getMoveHelper`, `getNavigator`, `getPathPriority`, `getPrimaryHand`, `getRenderSizeModifier`, `getSlotForItemStack`, `getTalkInterval`, `getVerticalFaceSpeed`, `handleStatusUpdate`, `isAIDisabled`, `isItemStackInSlot`, `isLeftHanded`, `isNoDespawnRequired`, `isNotColliding`, `isServerWorld`, `onEntityUpdate`, `onInitialSpawn`, `playHurtSound`, `playLivingSound`, `processInitialInteract`, `processInteract`, `registerFixesMob`, `replaceItemInInventory`, `setAIMoveSpeed`, `setAttackTarget`, `setCanPickUpLoot`, `setDropChance`, `setEnchantmentBasedOnDifficulty`, `setEquipmentBasedOnDifficulty`, `setItemStackToSlot`, `setLeashHolder`, `setLeftHanded`, `setMoveForward`, `setMoveStrafing`, `setMoveVertical`, `setNoAI`, `setPathPriority`, `spawnExplosionParticle`, `startRiding`, `updateDistance`, `updateEntityActionState`, `updateEquipmentIfNeeded`
- from `net.minecraft.entity.EntityLivingBase`: `applyArmorCalculations`, `applyPotionDamageCalculations`, `areAllPotionsAmbient`, `attackable`, `attemptTeleport`, `blockUsingShield`, `canBeCollidedWith`, `canBeHitWithPotion`, `canBePushed`, `canBreatheUnderwater`, `canEntityBeSeen`, `clearActivePotions`, `collideWithEntity`, `collideWithNearbyEntities`, `curePotionEffects`, `damageArmor`, `damageEntity`, `damageShield`, `decreaseAirSupply`, `dismountEntity`, `dismountRidingEntity`, `frostWalk`, `getAbsorptionAmount`, `getActiveHand`, `getActiveItemStack`, `getActivePotionEffect`, `getActivePotionEffects`, `getActivePotionMap`, `getAIMoveSpeed`, `getAlwaysRenderNameTagForRender`, `getArrowCountInEntity`, `getAttackingEntity`, `getAttributeMap`, `getCapability`, `getCombatTracker`, `getEntityAttribute`, `getHealth`, `getHeldItem`, `getHeldItemMainhand`, `getHeldItemOffhand`, `getIdleTime`, `getItemInUseCount`, `getItemInUseMaxCount`, `getJumpUpwardsMotion`, `getLastAttackedEntity`, `getLastAttackedEntityTime`, `getLastDamageSource`, `getLook`, `getMaxHealth`, `getRevengeTarget`, `getRevengeTimer`, `getRNG`, `getRotationYawHead`, `getSoundPitch`, `getSoundVolume`, `getSwingProgress`, `getTicksElytraFlying`, `getTotalArmorValue`, `getWaterSlowDown`, `handleJumpLava`, `handleJumpWater`, `hasCapability`, `hasItemInSlot`, `heal`, `isActiveItemStackBlocking`, `isChild`, `isElytraFlying`, `isEntityAlive`, `isEntityUndead`, `isHandActive`, `isMovementBlocked`, `isOnLadder`, `isPlayer`, `isPlayerSleeping`, `isPotionActive`, `isPotionApplicable`, `jump`, `knockBack`, `markPotionsDirty`, `markVelocityChanged`, `moveRelative`, `notifyDataManagerChange`, `onChangedPotionEffect`, `onDeath`, `onDeathUpdate`, `onFinishedPotionEffect`, `onItemPickup`, `onItemUseFinish`, `onKillCommand`, `onNewPotionEffect`, `outOfWorld`, `performHurtAnimation`, `playEquipSound`, `removeActivePotionEffect`, `removePotionEffect`, `renderBrokenItemStack`, `resetActiveHand`, `resetPotionEffectMetadata`, `sendEndCombat`, `sendEnterCombat`, `setAbsorptionAmount`, `setActiveHand`, `setArrowCountInEntity`, `setHealth`, `setHeldItem`, `setJumping`, `setLastAttackedEntity`, `setPartying`, `setPositionAndRotationDirect`, `setRenderYawOffset`, `setRevengeTarget`, `setRotationYawHead`, `setSprinting`, `shouldRiderFaceForward`, `stopActiveHand`, `swingArm`, `travel`, `updateActiveHand`, `updateArmSwingProgress`, `updateFallState`, `updateItemUse`, `updatePotionEffects`, `updatePotionMetadata`, `updateRidden`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addVelocity`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canExplosionDestroyBlock`, `canFitPassenger`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canTriggerWalking`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getBrightness`, `getCachedUniqueIdString`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLookVec`, `getLowestRidingEntity`, `getMaxInPortalTime`, `getMirroredYaw`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getServer`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleWaterMovement`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `move`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `onAddedToWorld`, `onCollideWithPlayer`, `onInsideBlock`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRotation`, `setSilent`, `setSize`, `setSneaking`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `toString`, `turn`, `updatePassenger`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`
