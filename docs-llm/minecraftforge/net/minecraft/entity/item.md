# net.minecraft.entity.item

- [EntityArmorStand](#entityarmorstand)
- [EntityBoat](#entityboat)
- [EntityBoat.Status](#entityboat.status)
- [EntityBoat.Type](#entityboat.type)
- [EntityEnderCrystal](#entityendercrystal)
- [EntityEnderEye](#entityendereye)
- [EntityEnderPearl](#entityenderpearl)
- [EntityExpBottle](#entityexpbottle)
- [EntityFallingBlock](#entityfallingblock)
- [EntityFireworkRocket](#entityfireworkrocket)
- [EntityItem](#entityitem)
- [EntityItemFrame](#entityitemframe)
- [EntityMinecart](#entityminecart)
- [EntityMinecart.Type](#entityminecart.type)
- [EntityMinecartChest](#entityminecartchest)
- [EntityMinecartCommandBlock](#entityminecartcommandblock)
- [EntityMinecartContainer](#entityminecartcontainer)
- [EntityMinecartEmpty](#entityminecartempty)
- [EntityMinecartFurnace](#entityminecartfurnace)
- [EntityMinecartHopper](#entityminecarthopper)
- [EntityMinecartMobSpawner](#entityminecartmobspawner)
- [EntityMinecartTNT](#entityminecarttnt)
- [EntityPainting](#entitypainting)
- [EntityPainting.EnumArt](#entitypainting.enumart)
- [EntityTNTPrimed](#entitytntprimed)
- [EntityXPOrb](#entityxporb)
## EntityArmorStand

*class* `net.minecraft.entity.item.EntityArmorStand`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public static final DataParameter<java.lang.Byte> STATUS`
- `public static final DataParameter<Rotations> HEAD_ROTATION`
- `public static final DataParameter<Rotations> BODY_ROTATION`
- `public static final DataParameter<Rotations> LEFT_ARM_ROTATION`
- `public static final DataParameter<Rotations> RIGHT_ARM_ROTATION`
- `public static final DataParameter<Rotations> LEFT_LEG_ROTATION`
- `public static final DataParameter<Rotations> RIGHT_LEG_ROTATION`
- `public long punchCooldown`

### Inherited fields
- from `net.minecraft.entity.EntityLivingBase`: `activeItemStack`, `activeItemStackUseCount`, `arrowHitTimer`, `attackedAtYaw`, `attackingPlayer`, `cameraPitch`, `dead`, `deathTime`, `HAND_STATES`, `hurtTime`, `idleTime`, `interpTargetPitch`, `interpTargetX`, `interpTargetY`, `interpTargetYaw`, `interpTargetZ`, `isJumping`, `isSwingInProgress`, `jumpMovementFactor`, `lastDamage`, `limbSwing`, `limbSwingAmount`, `maxHurtResistantTime`, `maxHurtTime`, `movedDistance`, `moveForward`, `moveStrafing`, `moveVertical`, `newPosRotationIncrements`, `onGroundSpeedFactor`, `prevCameraPitch`, `prevLimbSwingAmount`, `prevMovedDistance`, `prevOnGroundSpeedFactor`, `prevRenderYawOffset`, `prevRotationYawHead`, `prevSwingProgress`, `randomUnused1`, `randomUnused2`, `randomYawVelocity`, `recentlyHit`, `renderYawOffset`, `rotationYawHead`, `scoreValue`, `SWIM_SPEED`, `swingingHand`, `swingProgress`, `swingProgressInt`, `ticksElytraFlying`, `ticksSinceLastSwing`, `unused180`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `protected final void setSize(float width,  float height)`
- `public boolean isServerWorld()`
- `protected void entityInit()`
- `public java.lang.Iterable<ItemStack> getHeldEquipment()`
- `public java.lang.Iterable<ItemStack> getArmorInventoryList()`
- `public ItemStack getItemStackFromSlot(EntityEquipmentSlot slotIn)`
- `public void setItemStackToSlot(EntityEquipmentSlot slotIn,  ItemStack stack)`
- `public boolean replaceItemInInventory(int inventorySlot,  ItemStack itemStackIn)`
- `public static void registerFixesArmorStand(DataFixer fixer)`
- `public void writeEntityToNBT(NBTTagCompound compound)`
- `public void readEntityFromNBT(NBTTagCompound compound)`
- `public boolean canBePushed()`
- `protected void collideWithEntity(Entity entityIn)`
- `protected void collideWithNearbyEntities()`
- `public EnumActionResult applyPlayerInteraction(EntityPlayer player,  Vec3d vec,  EnumHand hand)`
- `protected EntityEquipmentSlot getClickedSlot(Vec3d p_190772_1_)`
- `public boolean attackEntityFrom(DamageSource source,  float amount)`
- `public void handleStatusUpdate(byte id)`
- `public boolean isInRangeToRenderDist(double distance)`
- `protected float updateDistance(float p_110146_1_,  float p_110146_2_)`
- `public float getEyeHeight()`
- `public double getYOffset()`
- `public void travel(float strafe,  float vertical,  float forward)`
- `public void setRenderYawOffset(float offset)`
- `public void setRotationYawHead(float rotation)`
- `public void onUpdate()`
- `protected void updatePotionMetadata()`
- `public void setInvisible(boolean invisible)`
- `public boolean isChild()`
- `public void onKillCommand()`
- `public boolean isImmuneToExplosions()`
- `public EnumPushReaction getPushReaction()`
- `public boolean isSmall()`
- `public boolean getShowArms()`
- `public boolean hasNoBasePlate()`
- `public boolean hasMarker()`
- `public void setHeadRotation(Rotations vec)`
- `public void setBodyRotation(Rotations vec)`
- `public void setLeftArmRotation(Rotations vec)`
- `public void setRightArmRotation(Rotations vec)`
- `public void setLeftLegRotation(Rotations vec)`
- `public void setRightLegRotation(Rotations vec)`
- `public Rotations getHeadRotation()`
- `public Rotations getBodyRotation()`
- `public Rotations getLeftArmRotation()`
- `public Rotations getRightArmRotation()`
- `public Rotations getLeftLegRotation()`
- `public Rotations getRightLegRotation()`
- `public boolean canBeCollidedWith()`
- `public EnumHandSide getPrimaryHand()`
- `protected SoundEvent getFallSound(int heightIn)`
- `protected SoundEvent getHurtSound(DamageSource damageSourceIn)`
- `protected SoundEvent getDeathSound()`
- `public void onStruckByLightning(EntityLightningBolt lightningBolt)`
- `public boolean canBeHitWithPotion()`
- `public void notifyDataManagerChange(DataParameter<?> key)`
- `public boolean attackable()`

### Inherited methods
- from `net.minecraft.entity.EntityLivingBase`: `addPotionEffect`, `applyArmorCalculations`, `applyEntityAttributes`, `applyPotionDamageCalculations`, `areAllPotionsAmbient`, `attackEntityAsMob`, `attemptTeleport`, `blockUsingShield`, `canBreatheUnderwater`, `canDropLoot`, `canEntityBeSeen`, `clearActivePotions`, `curePotionEffects`, `damageArmor`, `damageEntity`, `damageShield`, `decreaseAirSupply`, `dismountEntity`, `dismountRidingEntity`, `dropEquipment`, `dropFewItems`, `dropLoot`, `fall`, `frostWalk`, `getAbsorptionAmount`, `getActiveHand`, `getActiveItemStack`, `getActivePotionEffect`, `getActivePotionEffects`, `getActivePotionMap`, `getAIMoveSpeed`, `getAlwaysRenderNameTagForRender`, `getArrowCountInEntity`, `getAttackingEntity`, `getAttributeMap`, `getCapability`, `getCombatTracker`, `getCreatureAttribute`, `getEntityAttribute`, `getExperiencePoints`, `getHealth`, `getHeldItem`, `getHeldItemMainhand`, `getHeldItemOffhand`, `getIdleTime`, `getItemInUseCount`, `getItemInUseMaxCount`, `getJumpUpwardsMotion`, `getLastAttackedEntity`, `getLastAttackedEntityTime`, `getLastDamageSource`, `getLook`, `getMaxHealth`, `getRevengeTarget`, `getRevengeTimer`, `getRNG`, `getRotationYawHead`, `getSoundPitch`, `getSoundVolume`, `getSwingProgress`, `getTicksElytraFlying`, `getTotalArmorValue`, `getWaterSlowDown`, `handleJumpLava`, `handleJumpWater`, `hasCapability`, `hasItemInSlot`, `heal`, `isActiveItemStackBlocking`, `isElytraFlying`, `isEntityAlive`, `isEntityUndead`, `isHandActive`, `isMovementBlocked`, `isOnLadder`, `isPlayer`, `isPlayerSleeping`, `isPotionActive`, `isPotionApplicable`, `jump`, `knockBack`, `markPotionsDirty`, `markVelocityChanged`, `moveRelative`, `onChangedPotionEffect`, `onDeath`, `onDeathUpdate`, `onEntityUpdate`, `onFinishedPotionEffect`, `onItemPickup`, `onItemUseFinish`, `onLivingUpdate`, `onNewPotionEffect`, `outOfWorld`, `performHurtAnimation`, `playEquipSound`, `playHurtSound`, `removeActivePotionEffect`, `removePotionEffect`, `renderBrokenItemStack`, `resetActiveHand`, `resetPotionEffectMetadata`, `sendEndCombat`, `sendEnterCombat`, `setAbsorptionAmount`, `setActiveHand`, `setAIMoveSpeed`, `setArrowCountInEntity`, `setHealth`, `setHeldItem`, `setJumping`, `setLastAttackedEntity`, `setPartying`, `setPositionAndRotationDirect`, `setRevengeTarget`, `setSprinting`, `shouldRiderFaceForward`, `stopActiveHand`, `swingArm`, `updateActiveHand`, `updateArmSwingProgress`, `updateEntityActionState`, `updateFallState`, `updateItemUse`, `updatePotionEffects`, `updateRidden`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `awardKillScore`, `canBeAttackedWithItem`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canTriggerWalking`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `handleWaterMovement`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `move`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `onAddedToWorld`, `onCollideWithPlayer`, `onInsideBlock`, `onKillEntity`, `onRemovedFromWorld`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `processInitialInteract`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInWeb`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRotation`, `setSilent`, `setSneaking`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updatePassenger`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntityBoat

*class* `net.minecraft.entity.item.EntityBoat`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `protected boolean canTriggerWalking()`
- `protected void entityInit()`
- `public AxisAlignedBB getCollisionBox(Entity entityIn)`
- `public AxisAlignedBB getCollisionBoundingBox()`
- `public boolean canBePushed()`
- `public double getMountedYOffset()`
- `public boolean attackEntityFrom(DamageSource source,  float amount)`
- `public void applyEntityCollision(Entity entityIn)`
- `public Item getItemBoat()`
- `public void performHurtAnimation()`
- `public boolean canBeCollidedWith()`
- `public void setPositionAndRotationDirect(double x,  double y,  double z,  float yaw,  float pitch,  int posRotationIncrements,  boolean teleport)`
- `public EnumFacing getAdjustedHorizontalFacing()`
- `public void onUpdate()`
- `protected SoundEvent getPaddleSound()`
- `public void setPaddleState(boolean left,  boolean right)`
- `public float getRowingTime(int side,  float limbSwing)`
- `public float getWaterLevelAbove()`
- `public float getBoatGlide()`
- `public void updatePassenger(Entity passenger)`
- `protected void applyYawToEntity(Entity entityToUpdate)`
- `public void applyOrientationToEntity(Entity entityToUpdate)`
- `protected void writeEntityToNBT(NBTTagCompound compound)`
- `protected void readEntityFromNBT(NBTTagCompound compound)`
- `public boolean processInitialInteract(EntityPlayer player,  EnumHand hand)`
- `protected void updateFallState(double y,  boolean onGroundIn,  IBlockState state,  BlockPos pos)`
- `public boolean getPaddleState(int side)`
- `public void setDamageTaken(float damageTaken)`
- `public float getDamageTaken()`
- `public void setTimeSinceHit(int timeSinceHit)`
- `public int getTimeSinceHit()`
- `public void setForwardDirection(int forwardDirection)`
- `public int getForwardDirection()`
- `public void setBoatType(EntityBoat.Type boatType)`
- `public EntityBoat.Type getBoatType()`
- `protected boolean canFitPassenger(Entity passenger)`
- `public Entity getControllingPassenger()`
- `public void updateInputs(boolean p_184442_1_,  boolean p_184442_2_,  boolean p_184442_3_,  boolean p_184442_4_)`
- `protected void addPassenger(Entity passenger)`

### Inherited methods
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBeRidden`, `canExplosionDestroyBlock`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `fall`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCommandSenderEntity`, `getCommandStats`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `handleWaterMovement`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `outOfWorld`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntityBoat.Status

*enum* `net.minecraft.entity.item.EntityBoat.Status`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EntityBoat.Status>

Enclosing class: EntityBoat

### Fields
- `public static final EntityBoat.Status IN_WATER`
- `public static final EntityBoat.Status UNDER_WATER`
- `public static final EntityBoat.Status UNDER_FLOWING_WATER`
- `public static final EntityBoat.Status ON_LAND`
- `public static final EntityBoat.Status IN_AIR`

### Methods
- `public static EntityBoat.Status[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EntityBoat.Status c : EntityBoat.Status.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EntityBoat.Status valueOf(java.lang.String name)`
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

## EntityBoat.Type

*enum* `net.minecraft.entity.item.EntityBoat.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EntityBoat.Type>

Enclosing class: EntityBoat

### Fields
- `public static final EntityBoat.Type OAK`
- `public static final EntityBoat.Type SPRUCE`
- `public static final EntityBoat.Type BIRCH`
- `public static final EntityBoat.Type JUNGLE`
- `public static final EntityBoat.Type ACACIA`
- `public static final EntityBoat.Type DARK_OAK`

### Methods
- `public static EntityBoat.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EntityBoat.Type c : EntityBoat.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EntityBoat.Type valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public java.lang.String getName()`
- `public int getMetadata()`
- `public java.lang.String toString()`
- `public static EntityBoat.Type byId(int id)`
- `public static EntityBoat.Type getTypeFromString(java.lang.String nameIn)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## EntityEnderCrystal

*class* `net.minecraft.entity.item.EntityEnderCrystal`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public int innerRotation`

### Inherited fields
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `protected boolean canTriggerWalking()`
- `protected void entityInit()`
- `public void onUpdate()`
- `protected void writeEntityToNBT(NBTTagCompound compound)`
- `protected void readEntityFromNBT(NBTTagCompound compound)`
- `public boolean canBeCollidedWith()`
- `public boolean attackEntityFrom(DamageSource source,  float amount)`
- `public void onKillCommand()`
- `public void setBeamTarget(BlockPos beamTarget)`
- `public BlockPos getBeamTarget()`
- `public void setShowBottom(boolean showBottom)`
- `public boolean shouldShowBottom()`
- `public boolean isInRangeToRenderDist(double distance)`

### Inherited methods
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBePushed`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `fall`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `handleWaterMovement`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `outOfWorld`, `performHurtAnimation`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `processInitialInteract`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndRotationDirect`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntityEnderEye

*class* `net.minecraft.entity.item.EntityEnderEye`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `protected void entityInit()`
- `public boolean isInRangeToRenderDist(double distance)`
- `public void moveTowards(BlockPos pos)`
- `public void setVelocity(double x,  double y,  double z)`
- `public void onUpdate()`
- `public void writeEntityToNBT(NBTTagCompound compound)`
- `public void readEntityFromNBT(NBTTagCompound compound)`
- `public float getBrightness()`
- `public int getBrightnessForRender()`
- `public boolean canBeAttackedWithItem()`

### Inherited methods
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `attackEntityFrom`, `awardKillScore`, `canBeCollidedWith`, `canBePushed`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canTriggerWalking`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `fall`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `handleWaterMovement`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `outOfWorld`, `performHurtAnimation`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `processInitialInteract`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndRotationDirect`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntityEnderPearl

*class* `net.minecraft.entity.item.EntityEnderPearl`

All Implemented Interfaces: ICommandSender, IProjectile, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.entity.projectile.EntityThrowable`: `ignoreEntity`, `inGround`, `throwableShake`, `thrower`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `public static void registerFixesEnderPearl(DataFixer fixer)`
- `protected void onImpact(RayTraceResult result)`
- `public void onUpdate()`
- `public Entity changeDimension(int dimensionIn,  ITeleporter teleporter)`

### Inherited methods
- from `net.minecraft.entity.projectile.EntityThrowable`: `entityInit`, `getGravityVelocity`, `getThrower`, `isInRangeToRenderDist`, `readEntityFromNBT`, `registerFixesThrowable`, `setVelocity`, `shoot`, `shoot`, `writeEntityToNBT`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `attackEntityFrom`, `awardKillScore`, `canBeAttackedWithItem`, `canBeCollidedWith`, `canBePushed`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canTriggerWalking`, `canUseCommand`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `fall`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `handleWaterMovement`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `outOfWorld`, `performHurtAnimation`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `processInitialInteract`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndRotationDirect`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntityExpBottle

*class* `net.minecraft.entity.item.EntityExpBottle`

All Implemented Interfaces: ICommandSender, IProjectile, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.entity.projectile.EntityThrowable`: `ignoreEntity`, `inGround`, `throwableShake`, `thrower`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `public static void registerFixesExpBottle(DataFixer fixer)`
- `protected float getGravityVelocity()`
- `protected void onImpact(RayTraceResult result)`

### Inherited methods
- from `net.minecraft.entity.projectile.EntityThrowable`: `entityInit`, `getThrower`, `isInRangeToRenderDist`, `onUpdate`, `readEntityFromNBT`, `registerFixesThrowable`, `setVelocity`, `shoot`, `shoot`, `writeEntityToNBT`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `attackEntityFrom`, `awardKillScore`, `canBeAttackedWithItem`, `canBeCollidedWith`, `canBePushed`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canTriggerWalking`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `fall`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `handleWaterMovement`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `outOfWorld`, `performHurtAnimation`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `processInitialInteract`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndRotationDirect`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntityFallingBlock

*class* `net.minecraft.entity.item.EntityFallingBlock`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public int fallTime`
- `public boolean shouldDropItem`
- `public NBTTagCompound tileEntityData`
- `protected static final DataParameter<BlockPos> ORIGIN`

### Inherited fields
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `public boolean canBeAttackedWithItem()`
- `public void setOrigin(BlockPos p_184530_1_)`
- `public BlockPos getOrigin()`
- `protected boolean canTriggerWalking()`
- `protected void entityInit()`
- `public boolean canBeCollidedWith()`
- `public void onUpdate()`
- `public void fall(float distance,  float damageMultiplier)`
- `public static void registerFixesFallingBlock(DataFixer fixer)`
- `protected void writeEntityToNBT(NBTTagCompound compound)`
- `protected void readEntityFromNBT(NBTTagCompound compound)`
- `public void setHurtEntities(boolean p_145806_1_)`
- `public void addEntityCrashInfo(CrashReportCategory category)`
- `public World getWorldObj()`
- `public boolean canRenderOnFire()`
- `public IBlockState getBlock()`
- `public boolean ignoreItemEntityData()`

### Inherited methods
- from `net.minecraft.entity.Entity`: `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `attackEntityFrom`, `awardKillScore`, `canBePushed`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRiderInteract`, `canTrample`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `handleWaterMovement`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `outOfWorld`, `performHurtAnimation`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `processInitialInteract`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndRotationDirect`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntityFireworkRocket

*class* `net.minecraft.entity.item.EntityFireworkRocket`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `protected void entityInit()`
- `public boolean isInRangeToRenderDist(double distance)`
- `public boolean isInRangeToRender3d(double x,  double y,  double z)`
- `public void setVelocity(double x,  double y,  double z)`
- `public void onUpdate()`
- `public boolean isAttachedToEntity()`
- `public void handleStatusUpdate(byte id)`
- `public static void registerFixesFireworkRocket(DataFixer fixer)`
- `public void writeEntityToNBT(NBTTagCompound compound)`
- `public void readEntityFromNBT(NBTTagCompound compound)`
- `public boolean canBeAttackedWithItem()`

### Inherited methods
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `attackEntityFrom`, `awardKillScore`, `canBeCollidedWith`, `canBePushed`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canTriggerWalking`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `fall`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleWaterMovement`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `outOfWorld`, `performHurtAnimation`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `processInitialInteract`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndRotationDirect`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntityItem

*class* `net.minecraft.entity.item.EntityItem`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public float hoverStart`
- `public int lifespan`
  The maximum age of this EntityItem. The item is expired once this is reached.

### Inherited fields
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `protected boolean canTriggerWalking()`
- `protected void entityInit()`
- `public void onUpdate()`
- `public void setAgeToCreativeDespawnTime()`
- `public boolean handleWaterMovement()`
- `protected void dealFireDamage(int amount)`
- `public boolean attackEntityFrom(DamageSource source,  float amount)`
- `public static void registerFixesItem(DataFixer fixer)`
- `public void writeEntityToNBT(NBTTagCompound compound)`
- `public void readEntityFromNBT(NBTTagCompound compound)`
- `public void onCollideWithPlayer(EntityPlayer entityIn)`
- `public java.lang.String getName()`
- `public boolean canBeAttackedWithItem()`
- `public Entity changeDimension(int dimensionIn,  ITeleporter teleporter)`
- `public ItemStack getItem()`
- `public void setItem(ItemStack stack)`
- `public java.lang.String getOwner()`
- `public void setOwner(java.lang.String owner)`
- `public java.lang.String getThrower()`
- `public void setThrower(java.lang.String thrower)`
- `public int getAge()`
- `public void setDefaultPickupDelay()`
- `public void setNoPickupDelay()`
- `public void setInfinitePickupDelay()`
- `public void setPickupDelay(int ticks)`
- `public boolean cannotPickup()`
- `public void setNoDespawn()`
- `public void makeFakeItem()`

### Inherited methods
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeCollidedWith`, `canBePushed`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canUseCommand`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `fall`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getMountedYOffset`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `outOfWorld`, `performHurtAnimation`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `processInitialInteract`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndRotationDirect`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntityItemFrame

*class* `net.minecraft.entity.item.EntityItemFrame`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.entity.EntityHanging`: `facingDirection`, `hangingPosition`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `protected void entityInit()`
- `public float getCollisionBorderSize()`
- `public boolean attackEntityFrom(DamageSource source,  float amount)`
- `public int getWidthPixels()`
- `public int getHeightPixels()`
- `public boolean isInRangeToRenderDist(double distance)`
- `public void onBroken(Entity brokenEntity)`
- `public void playPlaceSound()`
- `public void dropItemOrSelf(Entity entityIn,  boolean p_146065_2_)`
- `public ItemStack getDisplayedItem()`
- `public void setDisplayedItem(ItemStack stack)`
- `public void notifyDataManagerChange(DataParameter<?> key)`
- `public int getRotation()`
- `public void setItemRotation(int rotationIn)`
- `public static void registerFixesItemFrame(DataFixer fixer)`
- `public void writeEntityToNBT(NBTTagCompound compound)`
- `public void readEntityFromNBT(NBTTagCompound compound)`
- `public boolean processInitialInteract(EntityPlayer player,  EnumHand hand)`
- `public int getAnalogOutput()`

### Inherited methods
- from `net.minecraft.entity.EntityHanging`: `addVelocity`, `canBeCollidedWith`, `entityDropItem`, `getHangingPosition`, `getHorizontalFacing`, `getMirroredYaw`, `getRotatedYaw`, `hitByEntity`, `move`, `onStruckByLightning`, `onUpdate`, `onValidSurface`, `setPosition`, `shouldSetPosAfterLoading`, `updateBoundingBox`, `updateFacingWithBoundingBox`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBePushed`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canTriggerWalking`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `equals`, `extinguish`, `fall`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `handleWaterMovement`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `outOfWorld`, `performHurtAnimation`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPositionAndRotation`, `setPositionAndRotationDirect`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntityMinecart

*class* `net.minecraft.entity.item.EntityMinecart`

All Implemented Interfaces: ICommandSender, IWorldNameable, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public static float defaultMaxSpeedAirLateral`
- `public static float defaultMaxSpeedAirVertical`
- `public static double defaultDragAir`
- `protected boolean canUseRail`
- `protected boolean canBePushed`
- `protected float maxSpeedAirLateral`
- `protected float maxSpeedAirVertical`
- `protected double dragAir`

### Inherited fields
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `public static EntityMinecart create(World worldIn,  double x,  double y,  double z,  EntityMinecart.Type typeIn)`
- `protected boolean canTriggerWalking()`
- `protected void entityInit()`
- `public AxisAlignedBB getCollisionBox(Entity entityIn)`
- `public AxisAlignedBB getCollisionBoundingBox()`
- `public boolean canBePushed()`
- `public double getMountedYOffset()`
- `public boolean attackEntityFrom(DamageSource source,  float amount)`
- `public void killMinecart(DamageSource source)`
- `public void performHurtAnimation()`
- `public boolean canBeCollidedWith()`
- `public EnumFacing getAdjustedHorizontalFacing()`
- `public void onUpdate()`
- `protected double getMaximumSpeed()`
- `public void onActivatorRailPass(int x,  int y,  int z,  boolean receivingPower)`
- `protected void moveDerailedMinecart()`
- `protected void moveAlongTrack(BlockPos pos,  IBlockState state)`
- `protected void applyDrag()`
- `public void setPosition(double x,  double y,  double z)`
- `public Vec3d getPosOffset(double x,  double y,  double z,  double offset)`
- `public Vec3d getPos(double p_70489_1_,  double p_70489_3_,  double p_70489_5_)`
- `public AxisAlignedBB getRenderBoundingBox()`
- `public static void registerFixesMinecart(DataFixer fixer,  java.lang.Class<?> name)`
- `protected void readEntityFromNBT(NBTTagCompound compound)`
- `protected void writeEntityToNBT(NBTTagCompound compound)`
- `public void applyEntityCollision(Entity entityIn)`
- `public void setPositionAndRotationDirect(double x,  double y,  double z,  float yaw,  float pitch,  int posRotationIncrements,  boolean teleport)`
- `public void setDamage(float damage)`
- `public void setVelocity(double x,  double y,  double z)`
- `public float getDamage()`
- `public void setRollingAmplitude(int rollingAmplitude)`
- `public int getRollingAmplitude()`
- `public void setRollingDirection(int rollingDirection)`
- `public int getRollingDirection()`
- `public abstract EntityMinecart.Type getType()`
- `public IBlockState getDisplayTile()`
- `public IBlockState getDefaultDisplayTile()`
- `public int getDisplayTileOffset()`
- `public int getDefaultDisplayTileOffset()`
- `public void setDisplayTile(IBlockState displayTile)`
- `public void setDisplayTileOffset(int displayTileOffset)`
- `public boolean hasDisplayTile()`
- `public void setHasDisplayTile(boolean showBlock)`
- `public boolean processInitialInteract(EntityPlayer player,  EnumHand hand)`
- `protected double getMaxSpeed()`
- `public void moveMinecartOnRail(BlockPos pos)`
  Moved to allow overrides.
   This code handles minecart movement and speed capping when on a rail.
- `public static IMinecartCollisionHandler getCollisionHandler()`
  Gets the current global Minecart Collision handler if none
   is registered, returns null
  - returns: The collision handler or null
- `public static void setCollisionHandler(IMinecartCollisionHandler handler)`
  Sets the global Minecart Collision handler, overwrites any
   that is currently set.
  - param: handler - The new handler
- `public ItemStack getCartItem()`
  This function returns an ItemStack that represents this cart.
   This should be an ItemStack that can be used by the player to place the cart,
   but is not necessary the item the cart drops when destroyed.
  - returns: An ItemStack that can be used to place the cart.
- `public boolean canUseRail()`
  Returns true if this cart can currently use rails.
   This function is mainly used to gracefully detach a minecart from a rail.
  - returns: True if the minecart can use rails.
- `public void setCanUseRail(boolean use)`
  Set whether the minecart can use rails.
   This function is mainly used to gracefully detach a minecart from a rail.
  - param: use - Whether the minecart can currently use rails.
- `public boolean shouldDoRailFunctions()`
  Return false if this cart should not call onMinecartPass() and should ignore Powered Rails.
  - returns: True if this cart should call onMinecartPass().
- `public boolean isPoweredCart()`
  Returns true if this cart is self propelled.
  - returns: True if powered.
- `public boolean canBeRidden()`
  Returns true if this cart can be ridden by an Entity.
  - returns: True if this cart can be ridden.
- `public float getMaxCartSpeedOnRail()`
  Returns the carts max speed when traveling on rails. Carts going faster
   than 1.1 cause issues with chunk loading. Carts cant traverse slopes or
   corners at greater than 0.5 - 0.6. This value is compared with the rails
   max speed and the carts current speed cap to determine the carts current
   max speed. A normal rail's max speed is 0.4.
  - returns: Carts max speed.
- `public final float getCurrentCartSpeedCapOnRail()`
  Returns the current speed cap for the cart when traveling on rails. This
   functions differs from getMaxCartSpeedOnRail() in that it controls
   current movement and cannot be overridden. The value however can never be
   higher than getMaxCartSpeedOnRail().
- `public final void setCurrentCartSpeedCapOnRail(float value)`
- `public float getMaxSpeedAirLateral()`
- `public void setMaxSpeedAirLateral(float value)`
- `public float getMaxSpeedAirVertical()`
- `public void setMaxSpeedAirVertical(float value)`
- `public double getDragAir()`
- `public void setDragAir(double value)`
- `public double getSlopeAdjustment()`
- `public int getComparatorLevel()`
  Called from Detector Rails to retrieve a redstone power level for comparators.

### Inherited methods
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `fall`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `handleWaterMovement`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `outOfWorld`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPositionAndRotation`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`
- from `net.minecraft.world.IWorldNameable`: `getDisplayName`, `getName`, `hasCustomName`

## EntityMinecart.Type

*enum* `net.minecraft.entity.item.EntityMinecart.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EntityMinecart.Type>

Enclosing class: EntityMinecart

### Fields
- `public static final EntityMinecart.Type RIDEABLE`
- `public static final EntityMinecart.Type CHEST`
- `public static final EntityMinecart.Type FURNACE`
- `public static final EntityMinecart.Type TNT`
- `public static final EntityMinecart.Type SPAWNER`
- `public static final EntityMinecart.Type HOPPER`
- `public static final EntityMinecart.Type COMMAND_BLOCK`

### Methods
- `public static EntityMinecart.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EntityMinecart.Type c : EntityMinecart.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EntityMinecart.Type valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public int getId()`
- `public java.lang.String getName()`
- `public static EntityMinecart.Type getById(int idIn)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## EntityMinecartChest

*class* `net.minecraft.entity.item.EntityMinecartChest`

All Implemented Interfaces: ICommandSender, IInventory, IInteractionObject, ILockableContainer, IWorldNameable, ILootContainer, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.entity.item.EntityMinecartContainer`: `dropContentsWhenDead`, `itemHandler`
- from `net.minecraft.entity.item.EntityMinecart`: `canBePushed`, `canUseRail`, `defaultDragAir`, `defaultMaxSpeedAirLateral`, `defaultMaxSpeedAirVertical`, `dragAir`, `maxSpeedAirLateral`, `maxSpeedAirVertical`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `public static void registerFixesMinecartChest(DataFixer fixer)`
- `public void killMinecart(DamageSource source)`
- `public int getSizeInventory()`
- `public EntityMinecart.Type getType()`
- `public IBlockState getDefaultDisplayTile()`
- `public int getDefaultDisplayTileOffset()`
- `public java.lang.String getGuiID()`
- `public Container createContainer(InventoryPlayer playerInventory,  EntityPlayer playerIn)`

### Inherited methods
- from `net.minecraft.entity.item.EntityMinecartContainer`: `addDataFixers`, `addLoot`, `applyDrag`, `changeDimension`, `clear`, `closeInventory`, `decrStackSize`, `getCapability`, `getField`, `getFieldCount`, `getInventoryStackLimit`, `getLockCode`, `getLootTable`, `getStackInSlot`, `hasCapability`, `isEmpty`, `isItemValidForSlot`, `isLocked`, `isUsableByPlayer`, `markDirty`, `openInventory`, `processInitialInteract`, `readEntityFromNBT`, `removeStackFromSlot`, `setDead`, `setDropItemsWhenDead`, `setField`, `setInventorySlotContents`, `setLockCode`, `setLootTable`, `writeEntityToNBT`
- from `net.minecraft.entity.item.EntityMinecart`: `applyEntityCollision`, `attackEntityFrom`, `canBeCollidedWith`, `canBePushed`, `canBeRidden`, `canTriggerWalking`, `canUseRail`, `create`, `entityInit`, `getAdjustedHorizontalFacing`, `getCartItem`, `getCollisionBoundingBox`, `getCollisionBox`, `getCollisionHandler`, `getComparatorLevel`, `getCurrentCartSpeedCapOnRail`, `getDamage`, `getDisplayTile`, `getDisplayTileOffset`, `getDragAir`, `getMaxCartSpeedOnRail`, `getMaximumSpeed`, `getMaxSpeed`, `getMaxSpeedAirLateral`, `getMaxSpeedAirVertical`, `getMountedYOffset`, `getPos`, `getPosOffset`, `getRenderBoundingBox`, `getRollingAmplitude`, `getRollingDirection`, `getSlopeAdjustment`, `hasDisplayTile`, `isPoweredCart`, `moveAlongTrack`, `moveDerailedMinecart`, `moveMinecartOnRail`, `onActivatorRailPass`, `onUpdate`, `performHurtAnimation`, `registerFixesMinecart`, `setCanUseRail`, `setCollisionHandler`, `setCurrentCartSpeedCapOnRail`, `setDamage`, `setDisplayTile`, `setDisplayTileOffset`, `setDragAir`, `setHasDisplayTile`, `setMaxSpeedAirLateral`, `setMaxSpeedAirVertical`, `setPosition`, `setPositionAndRotationDirect`, `setRollingAmplitude`, `setRollingDirection`, `setVelocity`, `shouldDoRailFunctions`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canUseCommand`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `fall`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCollisionBorderSize`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `handleWaterMovement`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `outOfWorld`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPositionAndRotation`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`
- from `net.minecraft.world.IWorldNameable`: `getDisplayName`, `getName`, `hasCustomName`

## EntityMinecartCommandBlock

*class* `net.minecraft.entity.item.EntityMinecartCommandBlock`

All Implemented Interfaces: ICommandSender, IWorldNameable, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.entity.item.EntityMinecart`: `canBePushed`, `canUseRail`, `defaultDragAir`, `defaultMaxSpeedAirLateral`, `defaultMaxSpeedAirVertical`, `dragAir`, `maxSpeedAirLateral`, `maxSpeedAirVertical`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `public static void registerFixesMinecartCommand(DataFixer fixer)`
- `protected void entityInit()`
- `protected void readEntityFromNBT(NBTTagCompound compound)`
- `protected void writeEntityToNBT(NBTTagCompound compound)`
- `public EntityMinecart.Type getType()`
- `public IBlockState getDefaultDisplayTile()`
- `public CommandBlockBaseLogic getCommandBlockLogic()`
- `public void onActivatorRailPass(int x,  int y,  int z,  boolean receivingPower)`
- `public boolean processInitialInteract(EntityPlayer player,  EnumHand hand)`
- `public void notifyDataManagerChange(DataParameter<?> key)`
- `public boolean ignoreItemEntityData()`

### Inherited methods
- from `net.minecraft.entity.item.EntityMinecart`: `applyDrag`, `applyEntityCollision`, `attackEntityFrom`, `canBeCollidedWith`, `canBePushed`, `canBeRidden`, `canTriggerWalking`, `canUseRail`, `create`, `getAdjustedHorizontalFacing`, `getCartItem`, `getCollisionBoundingBox`, `getCollisionBox`, `getCollisionHandler`, `getComparatorLevel`, `getCurrentCartSpeedCapOnRail`, `getDamage`, `getDefaultDisplayTileOffset`, `getDisplayTile`, `getDisplayTileOffset`, `getDragAir`, `getMaxCartSpeedOnRail`, `getMaximumSpeed`, `getMaxSpeed`, `getMaxSpeedAirLateral`, `getMaxSpeedAirVertical`, `getMountedYOffset`, `getPos`, `getPosOffset`, `getRenderBoundingBox`, `getRollingAmplitude`, `getRollingDirection`, `getSlopeAdjustment`, `hasDisplayTile`, `isPoweredCart`, `killMinecart`, `moveAlongTrack`, `moveDerailedMinecart`, `moveMinecartOnRail`, `onUpdate`, `performHurtAnimation`, `registerFixesMinecart`, `setCanUseRail`, `setCollisionHandler`, `setCurrentCartSpeedCapOnRail`, `setDamage`, `setDisplayTile`, `setDisplayTileOffset`, `setDragAir`, `setHasDisplayTile`, `setMaxSpeedAirLateral`, `setMaxSpeedAirVertical`, `setPosition`, `setPositionAndRotationDirect`, `setRollingAmplitude`, `setRollingDirection`, `setVelocity`, `shouldDoRailFunctions`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `fall`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `handleWaterMovement`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `outOfWorld`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPositionAndRotation`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`
- from `net.minecraft.world.IWorldNameable`: `getDisplayName`, `getName`, `hasCustomName`

## EntityMinecartContainer

*class* `net.minecraft.entity.item.EntityMinecartContainer`

All Implemented Interfaces: ICommandSender, IInventory, IInteractionObject, ILockableContainer, IWorldNameable, ILootContainer, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public boolean dropContentsWhenDead`
- `public IItemHandler itemHandler`

### Inherited fields
- from `net.minecraft.entity.item.EntityMinecart`: `canBePushed`, `canUseRail`, `defaultDragAir`, `defaultMaxSpeedAirLateral`, `defaultMaxSpeedAirVertical`, `dragAir`, `maxSpeedAirLateral`, `maxSpeedAirVertical`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `public void killMinecart(DamageSource source)`
- `public boolean isEmpty()`
- `public ItemStack getStackInSlot(int index)`
- `public ItemStack decrStackSize(int index,  int count)`
- `public ItemStack removeStackFromSlot(int index)`
- `public void setInventorySlotContents(int index,  ItemStack stack)`
- `public void markDirty()`
- `public boolean isUsableByPlayer(EntityPlayer player)`
- `public void openInventory(EntityPlayer player)`
- `public void closeInventory(EntityPlayer player)`
- `public boolean isItemValidForSlot(int index,  ItemStack stack)`
- `public int getInventoryStackLimit()`
- `public Entity changeDimension(int dimensionIn,  ITeleporter teleporter)`
- `public void setDead()`
- `public void setDropItemsWhenDead(boolean dropWhenDead)`
- `public static void addDataFixers(DataFixer p_190574_0_,  java.lang.Class<?> p_190574_1_)`
- `protected void writeEntityToNBT(NBTTagCompound compound)`
- `protected void readEntityFromNBT(NBTTagCompound compound)`
- `public boolean processInitialInteract(EntityPlayer player,  EnumHand hand)`
- `protected void applyDrag()`
- `public int getField(int id)`
- `public void setField(int id,  int value)`
- `public int getFieldCount()`
- `public boolean isLocked()`
- `public void setLockCode(LockCode code)`
- `public LockCode getLockCode()`
- `public void addLoot(EntityPlayer player)`
- `public <T> T getCapability(Capability<T> capability,  EnumFacing facing)`
  Description copied from interface: ICapabilityProvider
  Retrieves the handler for the capability requested on the specific side.
  
   The return value CAN be null if the object does not support the capability.
   The return value CAN be the same for multiple faces.
  
   Basically, this method functions analogously to Map.get(Object).
  - param: capability - The capability to check
  - param: facing - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested capability. Must NOT be null when ICapabilityProvider.hasCapability(Capability, EnumFacing)
 would return true.
- `public boolean hasCapability(Capability<?> capability,  EnumFacing facing)`
  Description copied from interface: ICapabilityProvider
  Determines if this object has support for the capability in question on the specific side.
   The return value of this MIGHT change during runtime if this object gains or loses support
   for a capability. It is not required to call this function before calling
   ICapabilityProvider.getCapability(Capability, EnumFacing).
  
   Basically, this method functions analogously to Map.containsKey(Object).
  
   Example:
   A Pipe getting a cover placed on one side causing it lose the Inventory attachment function for that side.
  
   This is a light weight version of getCapability, intended for metadata uses.
  - param: capability - The capability to check
  - param: facing - The Side to check from:
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: True if this object supports the capability. If true, then ICapabilityProvider.getCapability(Capability, EnumFacing)
 must not return null.
- `public void clear()`
- `public void setLootTable(ResourceLocation lootTableIn,  long lootTableSeedIn)`
- `public ResourceLocation getLootTable()`

### Inherited methods
- from `net.minecraft.entity.item.EntityMinecart`: `applyEntityCollision`, `attackEntityFrom`, `canBeCollidedWith`, `canBePushed`, `canBeRidden`, `canTriggerWalking`, `canUseRail`, `create`, `entityInit`, `getAdjustedHorizontalFacing`, `getCartItem`, `getCollisionBoundingBox`, `getCollisionBox`, `getCollisionHandler`, `getComparatorLevel`, `getCurrentCartSpeedCapOnRail`, `getDamage`, `getDefaultDisplayTile`, `getDefaultDisplayTileOffset`, `getDisplayTile`, `getDisplayTileOffset`, `getDragAir`, `getMaxCartSpeedOnRail`, `getMaximumSpeed`, `getMaxSpeed`, `getMaxSpeedAirLateral`, `getMaxSpeedAirVertical`, `getMountedYOffset`, `getPos`, `getPosOffset`, `getRenderBoundingBox`, `getRollingAmplitude`, `getRollingDirection`, `getSlopeAdjustment`, `getType`, `hasDisplayTile`, `isPoweredCart`, `moveAlongTrack`, `moveDerailedMinecart`, `moveMinecartOnRail`, `onActivatorRailPass`, `onUpdate`, `performHurtAnimation`, `registerFixesMinecart`, `setCanUseRail`, `setCollisionHandler`, `setCurrentCartSpeedCapOnRail`, `setDamage`, `setDisplayTile`, `setDisplayTileOffset`, `setDragAir`, `setHasDisplayTile`, `setMaxSpeedAirLateral`, `setMaxSpeedAirVertical`, `setPosition`, `setPositionAndRotationDirect`, `setRollingAmplitude`, `setRollingDirection`, `setVelocity`, `shouldDoRailFunctions`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canUseCommand`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `fall`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCollisionBorderSize`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `handleWaterMovement`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `outOfWorld`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPositionAndRotation`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`
- from `net.minecraft.inventory.IInventory`: `getSizeInventory`
- from `net.minecraft.world.IInteractionObject`: `createContainer`, `getGuiID`
- from `net.minecraft.world.IWorldNameable`: `getDisplayName`, `getName`, `hasCustomName`

## EntityMinecartEmpty

*class* `net.minecraft.entity.item.EntityMinecartEmpty`

All Implemented Interfaces: ICommandSender, IWorldNameable, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.entity.item.EntityMinecart`: `canBePushed`, `canUseRail`, `defaultDragAir`, `defaultMaxSpeedAirLateral`, `defaultMaxSpeedAirVertical`, `dragAir`, `maxSpeedAirLateral`, `maxSpeedAirVertical`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `public static void registerFixesMinecartEmpty(DataFixer fixer)`
- `public boolean processInitialInteract(EntityPlayer player,  EnumHand hand)`
- `public void onActivatorRailPass(int x,  int y,  int z,  boolean receivingPower)`
- `public EntityMinecart.Type getType()`

### Inherited methods
- from `net.minecraft.entity.item.EntityMinecart`: `applyDrag`, `applyEntityCollision`, `attackEntityFrom`, `canBeCollidedWith`, `canBePushed`, `canBeRidden`, `canTriggerWalking`, `canUseRail`, `create`, `entityInit`, `getAdjustedHorizontalFacing`, `getCartItem`, `getCollisionBoundingBox`, `getCollisionBox`, `getCollisionHandler`, `getComparatorLevel`, `getCurrentCartSpeedCapOnRail`, `getDamage`, `getDefaultDisplayTile`, `getDefaultDisplayTileOffset`, `getDisplayTile`, `getDisplayTileOffset`, `getDragAir`, `getMaxCartSpeedOnRail`, `getMaximumSpeed`, `getMaxSpeed`, `getMaxSpeedAirLateral`, `getMaxSpeedAirVertical`, `getMountedYOffset`, `getPos`, `getPosOffset`, `getRenderBoundingBox`, `getRollingAmplitude`, `getRollingDirection`, `getSlopeAdjustment`, `hasDisplayTile`, `isPoweredCart`, `killMinecart`, `moveAlongTrack`, `moveDerailedMinecart`, `moveMinecartOnRail`, `onUpdate`, `performHurtAnimation`, `readEntityFromNBT`, `registerFixesMinecart`, `setCanUseRail`, `setCollisionHandler`, `setCurrentCartSpeedCapOnRail`, `setDamage`, `setDisplayTile`, `setDisplayTileOffset`, `setDragAir`, `setHasDisplayTile`, `setMaxSpeedAirLateral`, `setMaxSpeedAirVertical`, `setPosition`, `setPositionAndRotationDirect`, `setRollingAmplitude`, `setRollingDirection`, `setVelocity`, `shouldDoRailFunctions`, `writeEntityToNBT`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `fall`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `handleWaterMovement`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `outOfWorld`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPositionAndRotation`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`
- from `net.minecraft.world.IWorldNameable`: `getDisplayName`, `getName`, `hasCustomName`

## EntityMinecartFurnace

*class* `net.minecraft.entity.item.EntityMinecartFurnace`

All Implemented Interfaces: ICommandSender, IWorldNameable, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public double pushX`
- `public double pushZ`

### Inherited fields
- from `net.minecraft.entity.item.EntityMinecart`: `canBePushed`, `canUseRail`, `defaultDragAir`, `defaultMaxSpeedAirLateral`, `defaultMaxSpeedAirVertical`, `dragAir`, `maxSpeedAirLateral`, `maxSpeedAirVertical`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `public static void registerFixesMinecartFurnace(DataFixer fixer)`
- `public EntityMinecart.Type getType()`
- `protected void entityInit()`
- `public void onUpdate()`
- `protected double getMaximumSpeed()`
- `public void killMinecart(DamageSource source)`
- `protected void moveAlongTrack(BlockPos pos,  IBlockState state)`
- `protected void applyDrag()`
- `public boolean processInitialInteract(EntityPlayer player,  EnumHand hand)`
- `protected void writeEntityToNBT(NBTTagCompound compound)`
- `protected void readEntityFromNBT(NBTTagCompound compound)`
- `protected boolean isMinecartPowered()`
- `protected void setMinecartPowered(boolean p_94107_1_)`
- `public IBlockState getDefaultDisplayTile()`

### Inherited methods
- from `net.minecraft.entity.item.EntityMinecart`: `applyEntityCollision`, `attackEntityFrom`, `canBeCollidedWith`, `canBePushed`, `canBeRidden`, `canTriggerWalking`, `canUseRail`, `create`, `getAdjustedHorizontalFacing`, `getCartItem`, `getCollisionBoundingBox`, `getCollisionBox`, `getCollisionHandler`, `getComparatorLevel`, `getCurrentCartSpeedCapOnRail`, `getDamage`, `getDefaultDisplayTileOffset`, `getDisplayTile`, `getDisplayTileOffset`, `getDragAir`, `getMaxCartSpeedOnRail`, `getMaxSpeed`, `getMaxSpeedAirLateral`, `getMaxSpeedAirVertical`, `getMountedYOffset`, `getPos`, `getPosOffset`, `getRenderBoundingBox`, `getRollingAmplitude`, `getRollingDirection`, `getSlopeAdjustment`, `hasDisplayTile`, `isPoweredCart`, `moveDerailedMinecart`, `moveMinecartOnRail`, `onActivatorRailPass`, `performHurtAnimation`, `registerFixesMinecart`, `setCanUseRail`, `setCollisionHandler`, `setCurrentCartSpeedCapOnRail`, `setDamage`, `setDisplayTile`, `setDisplayTileOffset`, `setDragAir`, `setHasDisplayTile`, `setMaxSpeedAirLateral`, `setMaxSpeedAirVertical`, `setPosition`, `setPositionAndRotationDirect`, `setRollingAmplitude`, `setRollingDirection`, `setVelocity`, `shouldDoRailFunctions`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `fall`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `handleWaterMovement`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `outOfWorld`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPositionAndRotation`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`
- from `net.minecraft.world.IWorldNameable`: `getDisplayName`, `getName`, `hasCustomName`

## EntityMinecartHopper

*class* `net.minecraft.entity.item.EntityMinecartHopper`

All Implemented Interfaces: ICommandSender, IInventory, IHopper, IInteractionObject, ILockableContainer, IWorldNameable, ILootContainer, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.entity.item.EntityMinecartContainer`: `dropContentsWhenDead`, `itemHandler`
- from `net.minecraft.entity.item.EntityMinecart`: `canBePushed`, `canUseRail`, `defaultDragAir`, `defaultMaxSpeedAirLateral`, `defaultMaxSpeedAirVertical`, `dragAir`, `maxSpeedAirLateral`, `maxSpeedAirVertical`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `public EntityMinecart.Type getType()`
- `public IBlockState getDefaultDisplayTile()`
- `public int getDefaultDisplayTileOffset()`
- `public int getSizeInventory()`
- `public boolean processInitialInteract(EntityPlayer player,  EnumHand hand)`
- `public void onActivatorRailPass(int x,  int y,  int z,  boolean receivingPower)`
- `public boolean getBlocked()`
- `public void setBlocked(boolean p_96110_1_)`
- `public World getWorld()`
- `public double getXPos()`
- `public double getYPos()`
- `public double getZPos()`
- `public void onUpdate()`
- `public boolean captureDroppedItems()`
- `public void killMinecart(DamageSource source)`
- `public static void registerFixesMinecartHopper(DataFixer fixer)`
- `protected void writeEntityToNBT(NBTTagCompound compound)`
- `protected void readEntityFromNBT(NBTTagCompound compound)`
- `public void setTransferTicker(int p_98042_1_)`
- `public boolean canTransfer()`
- `public java.lang.String getGuiID()`
- `public Container createContainer(InventoryPlayer playerInventory,  EntityPlayer playerIn)`

### Inherited methods
- from `net.minecraft.entity.item.EntityMinecartContainer`: `addDataFixers`, `addLoot`, `applyDrag`, `changeDimension`, `clear`, `closeInventory`, `decrStackSize`, `getCapability`, `getField`, `getFieldCount`, `getInventoryStackLimit`, `getLockCode`, `getLootTable`, `getStackInSlot`, `hasCapability`, `isEmpty`, `isItemValidForSlot`, `isLocked`, `isUsableByPlayer`, `markDirty`, `openInventory`, `removeStackFromSlot`, `setDead`, `setDropItemsWhenDead`, `setField`, `setInventorySlotContents`, `setLockCode`, `setLootTable`
- from `net.minecraft.entity.item.EntityMinecart`: `applyEntityCollision`, `attackEntityFrom`, `canBeCollidedWith`, `canBePushed`, `canBeRidden`, `canTriggerWalking`, `canUseRail`, `create`, `entityInit`, `getAdjustedHorizontalFacing`, `getCartItem`, `getCollisionBoundingBox`, `getCollisionBox`, `getCollisionHandler`, `getComparatorLevel`, `getCurrentCartSpeedCapOnRail`, `getDamage`, `getDisplayTile`, `getDisplayTileOffset`, `getDragAir`, `getMaxCartSpeedOnRail`, `getMaximumSpeed`, `getMaxSpeed`, `getMaxSpeedAirLateral`, `getMaxSpeedAirVertical`, `getMountedYOffset`, `getPos`, `getPosOffset`, `getRenderBoundingBox`, `getRollingAmplitude`, `getRollingDirection`, `getSlopeAdjustment`, `hasDisplayTile`, `isPoweredCart`, `moveAlongTrack`, `moveDerailedMinecart`, `moveMinecartOnRail`, `performHurtAnimation`, `registerFixesMinecart`, `setCanUseRail`, `setCollisionHandler`, `setCurrentCartSpeedCapOnRail`, `setDamage`, `setDisplayTile`, `setDisplayTileOffset`, `setDragAir`, `setHasDisplayTile`, `setMaxSpeedAirLateral`, `setMaxSpeedAirVertical`, `setPosition`, `setPositionAndRotationDirect`, `setRollingAmplitude`, `setRollingDirection`, `setVelocity`, `shouldDoRailFunctions`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canUseCommand`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `fall`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCollisionBorderSize`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `handleWaterMovement`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `outOfWorld`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPositionAndRotation`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`
- from `net.minecraft.inventory.IInventory`: `clear`, `closeInventory`, `decrStackSize`, `getField`, `getFieldCount`, `getInventoryStackLimit`, `getStackInSlot`, `isEmpty`, `isItemValidForSlot`, `isUsableByPlayer`, `markDirty`, `openInventory`, `removeStackFromSlot`, `setField`, `setInventorySlotContents`
- from `net.minecraft.world.IWorldNameable`: `getDisplayName`, `getName`, `hasCustomName`

## EntityMinecartMobSpawner

*class* `net.minecraft.entity.item.EntityMinecartMobSpawner`

All Implemented Interfaces: ICommandSender, IWorldNameable, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.entity.item.EntityMinecart`: `canBePushed`, `canUseRail`, `defaultDragAir`, `defaultMaxSpeedAirLateral`, `defaultMaxSpeedAirVertical`, `dragAir`, `maxSpeedAirLateral`, `maxSpeedAirVertical`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `public static void registerFixesMinecartMobSpawner(DataFixer fixer)`
- `public EntityMinecart.Type getType()`
- `public IBlockState getDefaultDisplayTile()`
- `protected void readEntityFromNBT(NBTTagCompound compound)`
- `protected void writeEntityToNBT(NBTTagCompound compound)`
- `public void handleStatusUpdate(byte id)`
- `public void onUpdate()`

### Inherited methods
- from `net.minecraft.entity.item.EntityMinecart`: `applyDrag`, `applyEntityCollision`, `attackEntityFrom`, `canBeCollidedWith`, `canBePushed`, `canBeRidden`, `canTriggerWalking`, `canUseRail`, `create`, `entityInit`, `getAdjustedHorizontalFacing`, `getCartItem`, `getCollisionBoundingBox`, `getCollisionBox`, `getCollisionHandler`, `getComparatorLevel`, `getCurrentCartSpeedCapOnRail`, `getDamage`, `getDefaultDisplayTileOffset`, `getDisplayTile`, `getDisplayTileOffset`, `getDragAir`, `getMaxCartSpeedOnRail`, `getMaximumSpeed`, `getMaxSpeed`, `getMaxSpeedAirLateral`, `getMaxSpeedAirVertical`, `getMountedYOffset`, `getPos`, `getPosOffset`, `getRenderBoundingBox`, `getRollingAmplitude`, `getRollingDirection`, `getSlopeAdjustment`, `hasDisplayTile`, `isPoweredCart`, `killMinecart`, `moveAlongTrack`, `moveDerailedMinecart`, `moveMinecartOnRail`, `onActivatorRailPass`, `performHurtAnimation`, `processInitialInteract`, `registerFixesMinecart`, `setCanUseRail`, `setCollisionHandler`, `setCurrentCartSpeedCapOnRail`, `setDamage`, `setDisplayTile`, `setDisplayTileOffset`, `setDragAir`, `setHasDisplayTile`, `setMaxSpeedAirLateral`, `setMaxSpeedAirVertical`, `setPosition`, `setPositionAndRotationDirect`, `setRollingAmplitude`, `setRollingDirection`, `setVelocity`, `shouldDoRailFunctions`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `fall`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleWaterMovement`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `outOfWorld`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPositionAndRotation`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`
- from `net.minecraft.world.IWorldNameable`: `getDisplayName`, `getName`, `hasCustomName`

## EntityMinecartTNT

*class* `net.minecraft.entity.item.EntityMinecartTNT`

All Implemented Interfaces: ICommandSender, IWorldNameable, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.entity.item.EntityMinecart`: `canBePushed`, `canUseRail`, `defaultDragAir`, `defaultMaxSpeedAirLateral`, `defaultMaxSpeedAirVertical`, `dragAir`, `maxSpeedAirLateral`, `maxSpeedAirVertical`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `public static void registerFixesMinecartTNT(DataFixer fixer)`
- `public EntityMinecart.Type getType()`
- `public IBlockState getDefaultDisplayTile()`
- `public void onUpdate()`
- `public boolean attackEntityFrom(DamageSource source,  float amount)`
- `public void killMinecart(DamageSource source)`
- `protected void explodeCart(double p_94103_1_)`
- `public void fall(float distance,  float damageMultiplier)`
- `public void onActivatorRailPass(int x,  int y,  int z,  boolean receivingPower)`
- `public void handleStatusUpdate(byte id)`
- `public void ignite()`
- `public int getFuseTicks()`
- `public boolean isIgnited()`
- `public float getExplosionResistance(Explosion explosionIn,  World worldIn,  BlockPos pos,  IBlockState blockStateIn)`
- `public boolean canExplosionDestroyBlock(Explosion explosionIn,  World worldIn,  BlockPos pos,  IBlockState blockStateIn,  float p_174816_5_)`
- `protected void readEntityFromNBT(NBTTagCompound compound)`
- `protected void writeEntityToNBT(NBTTagCompound compound)`

### Inherited methods
- from `net.minecraft.entity.item.EntityMinecart`: `applyDrag`, `applyEntityCollision`, `canBeCollidedWith`, `canBePushed`, `canBeRidden`, `canTriggerWalking`, `canUseRail`, `create`, `entityInit`, `getAdjustedHorizontalFacing`, `getCartItem`, `getCollisionBoundingBox`, `getCollisionBox`, `getCollisionHandler`, `getComparatorLevel`, `getCurrentCartSpeedCapOnRail`, `getDamage`, `getDefaultDisplayTileOffset`, `getDisplayTile`, `getDisplayTileOffset`, `getDragAir`, `getMaxCartSpeedOnRail`, `getMaximumSpeed`, `getMaxSpeed`, `getMaxSpeedAirLateral`, `getMaxSpeedAirVertical`, `getMountedYOffset`, `getPos`, `getPosOffset`, `getRenderBoundingBox`, `getRollingAmplitude`, `getRollingDirection`, `getSlopeAdjustment`, `hasDisplayTile`, `isPoweredCart`, `moveAlongTrack`, `moveDerailedMinecart`, `moveMinecartOnRail`, `performHurtAnimation`, `processInitialInteract`, `registerFixesMinecart`, `setCanUseRail`, `setCollisionHandler`, `setCurrentCartSpeedCapOnRail`, `setDamage`, `setDisplayTile`, `setDisplayTileOffset`, `setDragAir`, `setHasDisplayTile`, `setMaxSpeedAirLateral`, `setMaxSpeedAirVertical`, `setPosition`, `setPositionAndRotationDirect`, `setRollingAmplitude`, `setRollingDirection`, `setVelocity`, `shouldDoRailFunctions`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBeRidden`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleWaterMovement`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `outOfWorld`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPositionAndRotation`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`
- from `net.minecraft.world.IWorldNameable`: `getDisplayName`, `getName`, `hasCustomName`

## EntityPainting

*class* `net.minecraft.entity.item.EntityPainting`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public EntityPainting.EnumArt art`

### Inherited fields
- from `net.minecraft.entity.EntityHanging`: `facingDirection`, `hangingPosition`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `public void writeEntityToNBT(NBTTagCompound compound)`
- `public void readEntityFromNBT(NBTTagCompound compound)`
- `public int getWidthPixels()`
- `public int getHeightPixels()`
- `public void onBroken(Entity brokenEntity)`
- `public void playPlaceSound()`
- `public void setLocationAndAngles(double x,  double y,  double z,  float yaw,  float pitch)`
- `public void setPositionAndRotationDirect(double x,  double y,  double z,  float yaw,  float pitch,  int posRotationIncrements,  boolean teleport)`

### Inherited methods
- from `net.minecraft.entity.EntityHanging`: `addVelocity`, `attackEntityFrom`, `canBeCollidedWith`, `entityDropItem`, `entityInit`, `getHangingPosition`, `getHorizontalFacing`, `getMirroredYaw`, `getRotatedYaw`, `hitByEntity`, `move`, `onStruckByLightning`, `onUpdate`, `onValidSurface`, `setPosition`, `shouldSetPosAfterLoading`, `updateBoundingBox`, `updateFacingWithBoundingBox`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBePushed`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canTriggerWalking`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `equals`, `extinguish`, `fall`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `handleWaterMovement`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `outOfWorld`, `performHurtAnimation`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `processInitialInteract`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPositionAndRotation`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntityPainting.EnumArt

*enum* `net.minecraft.entity.item.EntityPainting.EnumArt`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EntityPainting.EnumArt>

Enclosing class: EntityPainting

### Fields
- `public static final int MAX_NAME_LENGTH`
- `public final java.lang.String title`
- `public final int sizeX`
- `public final int sizeY`
- `public final int offsetX`
- `public final int offsetY`
- `public static final EntityPainting.EnumArt KEBAB`
- `public static final EntityPainting.EnumArt AZTEC`
- `public static final EntityPainting.EnumArt ALBAN`
- `public static final EntityPainting.EnumArt AZTEC_2`
- `public static final EntityPainting.EnumArt BOMB`
- `public static final EntityPainting.EnumArt PLANT`
- `public static final EntityPainting.EnumArt WASTELAND`
- `public static final EntityPainting.EnumArt POOL`
- `public static final EntityPainting.EnumArt COURBET`
- `public static final EntityPainting.EnumArt SEA`
- `public static final EntityPainting.EnumArt SUNSET`
- `public static final EntityPainting.EnumArt CREEBET`
- `public static final EntityPainting.EnumArt WANDERER`
- `public static final EntityPainting.EnumArt GRAHAM`
- `public static final EntityPainting.EnumArt MATCH`
- `public static final EntityPainting.EnumArt BUST`
- `public static final EntityPainting.EnumArt STAGE`
- `public static final EntityPainting.EnumArt VOID`
- `public static final EntityPainting.EnumArt SKULL_AND_ROSES`
- `public static final EntityPainting.EnumArt WITHER`
- `public static final EntityPainting.EnumArt FIGHTERS`
- `public static final EntityPainting.EnumArt POINTER`
- `public static final EntityPainting.EnumArt PIGSCENE`
- `public static final EntityPainting.EnumArt BURNING_SKULL`
- `public static final EntityPainting.EnumArt SKELETON`
- `public static final EntityPainting.EnumArt DONKEY_KONG`

### Methods
- `public static EntityPainting.EnumArt[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EntityPainting.EnumArt c : EntityPainting.EnumArt.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EntityPainting.EnumArt valueOf(java.lang.String name)`
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

## EntityTNTPrimed

*class* `net.minecraft.entity.item.EntityTNTPrimed`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `protected void entityInit()`
- `protected boolean canTriggerWalking()`
- `public boolean canBeCollidedWith()`
- `public void onUpdate()`
- `protected void writeEntityToNBT(NBTTagCompound compound)`
- `protected void readEntityFromNBT(NBTTagCompound compound)`
- `public EntityLivingBase getTntPlacedBy()`
- `public float getEyeHeight()`
- `public void setFuse(int fuseIn)`
- `public void notifyDataManagerChange(DataParameter<?> key)`
- `public int getFuseDataManager()`
- `public int getFuse()`

### Inherited methods
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `attackEntityFrom`, `awardKillScore`, `canBeAttackedWithItem`, `canBePushed`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `fall`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `handleWaterMovement`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `outOfWorld`, `performHurtAnimation`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `processInitialInteract`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndRotationDirect`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntityXPOrb

*class* `net.minecraft.entity.item.EntityXPOrb`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public int xpColor`
- `public int xpOrbAge`
- `public int delayBeforeCanPickup`
- `public int xpValue`

### Inherited fields
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `protected boolean canTriggerWalking()`
- `protected void entityInit()`
- `public int getBrightnessForRender()`
- `public void onUpdate()`
- `public boolean handleWaterMovement()`
- `protected void dealFireDamage(int amount)`
- `public boolean attackEntityFrom(DamageSource source,  float amount)`
- `public void writeEntityToNBT(NBTTagCompound compound)`
- `public void readEntityFromNBT(NBTTagCompound compound)`
- `public void onCollideWithPlayer(EntityPlayer entityIn)`
- `public int getXpValue()`
- `public int getTextureByXP()`
- `public static int getXPSplit(int expValue)`
- `public boolean canBeAttackedWithItem()`

### Inherited methods
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeCollidedWith`, `canBePushed`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `fall`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `outOfWorld`, `performHurtAnimation`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `processInitialInteract`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndRotationDirect`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`
