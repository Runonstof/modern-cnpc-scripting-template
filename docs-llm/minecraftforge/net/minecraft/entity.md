# net.minecraft.entity

- [Entity](#entity)
- [EntityAgeable](#entityageable)
- [EntityAreaEffectCloud](#entityareaeffectcloud)
- [EntityBodyHelper](#entitybodyhelper)
- [EntityCreature](#entitycreature)
- [EntityFlying](#entityflying)
- [EntityHanging](#entityhanging)
- [EntityLeashKnot](#entityleashknot)
- [EntityList](#entitylist)
- [EntityList.EntityEggInfo](#entitylist.entityegginfo)
- [EntityLiving](#entityliving)
- [EntityLiving.SpawnPlacementType](#entityliving.spawnplacementtype)
- [EntityLivingBase](#entitylivingbase)
- [EntitySpawnPlacementRegistry](#entityspawnplacementregistry)
- [EntityTracker](#entitytracker)
- [EntityTrackerEntry](#entitytrackerentry)
- [EnumCreatureAttribute](#enumcreatureattribute)
- [EnumCreatureType](#enumcreaturetype)
- [IEntityLivingData](#ientitylivingdata)
- [IEntityMultiPart](#ientitymultipart)
- [IEntityOwnable](#ientityownable)
- [IJumpingMount](#ijumpingmount)
- [IMerchant](#imerchant)
- [INpc](#inpc)
- [IProjectile](#iprojectile)
- [IRangedAttackMob](#irangedattackmob)
- [MoverType](#movertype)
- [MultiPartEntityPart](#multipartentitypart)
- [NpcMerchant](#npcmerchant)
- [SharedMonsterAttributes](#sharedmonsterattributes)
## Entity

*class* `net.minecraft.entity.Entity`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public boolean preventEntitySpawning`
- `protected int rideCooldown`
- `public boolean forceSpawn`
- `public World world`
- `public double prevPosX`
- `public double prevPosY`
- `public double prevPosZ`
- `public double posX`
- `public double posY`
- `public double posZ`
- `public double motionX`
- `public double motionY`
- `public double motionZ`
- `public float rotationYaw`
- `public float rotationPitch`
- `public float prevRotationYaw`
- `public float prevRotationPitch`
- `public boolean onGround`
- `public boolean collidedHorizontally`
- `public boolean collidedVertically`
- `public boolean collided`
- `public boolean velocityChanged`
- `protected boolean isInWeb`
- `public boolean isDead`
- `public float width`
- `public float height`
- `public float prevDistanceWalkedModified`
- `public float distanceWalkedModified`
- `public float distanceWalkedOnStepModified`
- `public float fallDistance`
- `public double lastTickPosX`
- `public double lastTickPosY`
- `public double lastTickPosZ`
- `public float stepHeight`
- `public boolean noClip`
- `public float entityCollisionReduction`
- `protected java.util.Random rand`
- `public int ticksExisted`
- `protected boolean inWater`
- `public int hurtResistantTime`
- `protected boolean firstUpdate`
- `protected boolean isImmuneToFire`
- `protected EntityDataManager dataManager`
- `protected static final DataParameter<java.lang.Byte> FLAGS`
- `public boolean addedToChunk`
- `public int chunkCoordX`
- `public int chunkCoordY`
- `public int chunkCoordZ`
- `public long serverPosX`
- `public long serverPosY`
- `public long serverPosZ`
- `public boolean ignoreFrustumCheck`
- `public boolean isAirBorne`
- `public int timeUntilPortal`
- `protected boolean inPortal`
- `protected int portalCounter`
- `public int dimension`
- `protected BlockPos lastPortalPos`
- `protected Vec3d lastPortalVec`
- `protected EnumFacing teleportDirection`
- `protected java.util.UUID entityUniqueID`
- `protected java.lang.String cachedUniqueIdString`
- `protected boolean glowing`
- `public boolean updateBlocked`
  Setting this to true will prevent the world from calling onUpdate() for this entity.
- `public boolean captureDrops`
- `public java.util.ArrayList<EntityItem> capturedDrops`

### Methods
- `public int getEntityId()`
- `public void setEntityId(int id)`
- `public java.util.Set<java.lang.String> getTags()`
- `public boolean addTag(java.lang.String tag)`
- `public boolean removeTag(java.lang.String tag)`
- `public void onKillCommand()`
- `protected abstract void entityInit()`
- `public EntityDataManager getDataManager()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `protected void preparePlayerToSpawn()`
- `public void setDead()`
- `public void setDropItemsWhenDead(boolean dropWhenDead)`
- `protected void setSize(float width,  float height)`
- `protected void setRotation(float yaw,  float pitch)`
- `public void setPosition(double x,  double y,  double z)`
- `public void turn(float yaw,  float pitch)`
- `public void onUpdate()`
- `public void onEntityUpdate()`
- `protected void decrementTimeUntilPortal()`
- `public int getMaxInPortalTime()`
- `protected void setOnFireFromLava()`
- `public void setFire(int seconds)`
- `public void extinguish()`
- `protected void outOfWorld()`
- `public boolean isOffsetPositionInLiquid(double x,  double y,  double z)`
- `public void move(MoverType type,  double x,  double y,  double z)`
- `public void resetPositionToBB()`
- `protected SoundEvent getSwimSound()`
- `protected SoundEvent getSplashSound()`
- `protected void doBlockCollisions()`
- `protected void onInsideBlock(IBlockState p_191955_1_)`
- `protected void playStepSound(BlockPos pos,  Block blockIn)`
- `protected float playFlySound(float p_191954_1_)`
- `protected boolean makeFlySound()`
- `public void playSound(SoundEvent soundIn,  float volume,  float pitch)`
- `public boolean isSilent()`
- `public void setSilent(boolean isSilent)`
- `public boolean hasNoGravity()`
- `public void setNoGravity(boolean noGravity)`
- `protected boolean canTriggerWalking()`
- `protected void updateFallState(double y,  boolean onGroundIn,  IBlockState state,  BlockPos pos)`
- `public AxisAlignedBB getCollisionBoundingBox()`
- `protected void dealFireDamage(int amount)`
- `public final boolean isImmuneToFire()`
- `public void fall(float distance,  float damageMultiplier)`
- `public boolean isWet()`
- `public boolean isInWater()`
- `public boolean isOverWater()`
- `public boolean handleWaterMovement()`
- `protected void doWaterSplashEffect()`
- `public void spawnRunningParticles()`
- `protected void createRunningParticles()`
- `public boolean isInsideOfMaterial(Material materialIn)`
- `public boolean isInLava()`
- `public void moveRelative(float strafe,  float up,  float forward,  float friction)`
- `public int getBrightnessForRender()`
- `public float getBrightness()`
- `public void setWorld(World worldIn)`
- `public void setPositionAndRotation(double x,  double y,  double z,  float yaw,  float pitch)`
- `public void moveToBlockPosAndAngles(BlockPos pos,  float rotationYawIn,  float rotationPitchIn)`
- `public void setLocationAndAngles(double x,  double y,  double z,  float yaw,  float pitch)`
- `public float getDistance(Entity entityIn)`
- `public double getDistanceSq(double x,  double y,  double z)`
- `public double getDistanceSq(BlockPos pos)`
- `public double getDistanceSqToCenter(BlockPos pos)`
- `public double getDistance(double x,  double y,  double z)`
- `public double getDistanceSq(Entity entityIn)`
- `public void onCollideWithPlayer(EntityPlayer entityIn)`
- `public void applyEntityCollision(Entity entityIn)`
- `public void addVelocity(double x,  double y,  double z)`
- `protected void markVelocityChanged()`
- `public boolean attackEntityFrom(DamageSource source,  float amount)`
- `public Vec3d getLook(float partialTicks)`
- `protected final Vec3d getVectorForRotation(float pitch,  float yaw)`
- `public Vec3d getPositionEyes(float partialTicks)`
- `public RayTraceResult rayTrace(double blockReachDistance,  float partialTicks)`
- `public boolean canBeCollidedWith()`
- `public boolean canBePushed()`
- `public void awardKillScore(Entity p_191956_1_,  int p_191956_2_,  DamageSource p_191956_3_)`
- `public boolean isInRangeToRender3d(double x,  double y,  double z)`
- `public boolean isInRangeToRenderDist(double distance)`
- `public boolean writeToNBTAtomically(NBTTagCompound compound)`
- `public boolean writeToNBTOptional(NBTTagCompound compound)`
- `public static void registerFixes(DataFixer fixer)`
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public void readFromNBT(NBTTagCompound compound)`
- `protected boolean shouldSetPosAfterLoading()`
- `protected final java.lang.String getEntityString()`
- `protected abstract void readEntityFromNBT(NBTTagCompound compound)`
- `protected abstract void writeEntityToNBT(NBTTagCompound compound)`
- `protected NBTTagList newDoubleNBTList(double... numbers)`
- `protected NBTTagList newFloatNBTList(float... numbers)`
- `public EntityItem dropItem(Item itemIn,  int size)`
- `public EntityItem dropItemWithOffset(Item itemIn,  int size,  float offsetY)`
- `public EntityItem entityDropItem(ItemStack stack,  float offsetY)`
- `public boolean isEntityAlive()`
- `public boolean isEntityInsideOpaqueBlock()`
- `public boolean processInitialInteract(EntityPlayer player,  EnumHand hand)`
- `public AxisAlignedBB getCollisionBox(Entity entityIn)`
- `public void updateRidden()`
- `public void updatePassenger(Entity passenger)`
- `public void applyOrientationToEntity(Entity entityToUpdate)`
- `public double getYOffset()`
- `public double getMountedYOffset()`
- `public boolean startRiding(Entity entityIn)`
- `public boolean startRiding(Entity entityIn,  boolean force)`
- `protected boolean canBeRidden(Entity entityIn)`
- `public void removePassengers()`
- `public void dismountRidingEntity()`
- `protected void addPassenger(Entity passenger)`
- `protected void removePassenger(Entity passenger)`
- `protected boolean canFitPassenger(Entity passenger)`
- `public void setPositionAndRotationDirect(double x,  double y,  double z,  float yaw,  float pitch,  int posRotationIncrements,  boolean teleport)`
- `public float getCollisionBorderSize()`
- `public Vec3d getLookVec()`
- `public Vec2f getPitchYaw()`
- `public Vec3d getForward()`
- `public void setPortal(BlockPos pos)`
- `public int getPortalCooldown()`
- `public void setVelocity(double x,  double y,  double z)`
- `public void handleStatusUpdate(byte id)`
- `public void performHurtAnimation()`
- `public java.lang.Iterable<ItemStack> getHeldEquipment()`
- `public java.lang.Iterable<ItemStack> getArmorInventoryList()`
- `public java.lang.Iterable<ItemStack> getEquipmentAndArmor()`
- `public void setItemStackToSlot(EntityEquipmentSlot slotIn,  ItemStack stack)`
- `public boolean isBurning()`
- `public boolean isRiding()`
- `public boolean isBeingRidden()`
- `public boolean isSneaking()`
- `public void setSneaking(boolean sneaking)`
- `public boolean isSprinting()`
- `public void setSprinting(boolean sprinting)`
- `public boolean isGlowing()`
- `public void setGlowing(boolean glowingIn)`
- `public boolean isInvisible()`
- `public boolean isInvisibleToPlayer(EntityPlayer player)`
- `public Team getTeam()`
- `public boolean isOnSameTeam(Entity entityIn)`
- `public boolean isOnScoreboardTeam(Team teamIn)`
- `public void setInvisible(boolean invisible)`
- `protected boolean getFlag(int flag)`
- `protected void setFlag(int flag,  boolean set)`
- `public int getAir()`
- `public void setAir(int air)`
- `public void onStruckByLightning(EntityLightningBolt lightningBolt)`
- `public void onKillEntity(EntityLivingBase entityLivingIn)`
- `protected boolean pushOutOfBlocks(double x,  double y,  double z)`
- `public void setInWeb()`
- `public java.lang.String getName()`
- `public Entity[] getParts()`
- `public boolean isEntityEqual(Entity entityIn)`
- `public float getRotationYawHead()`
- `public void setRotationYawHead(float rotation)`
- `public void setRenderYawOffset(float offset)`
- `public boolean canBeAttackedWithItem()`
- `public boolean hitByEntity(Entity entityIn)`
- `public java.lang.String toString()`
- `public boolean isEntityInvulnerable(DamageSource source)`
- `public boolean getIsInvulnerable()`
- `public void setEntityInvulnerable(boolean isInvulnerable)`
- `public void copyLocationAndAnglesFrom(Entity entityIn)`
- `public Entity changeDimension(int dimensionIn)`
- `public Entity changeDimension(int dimensionIn,  ITeleporter teleporter)`
- `public boolean isNonBoss()`
- `public float getExplosionResistance(Explosion explosionIn,  World worldIn,  BlockPos pos,  IBlockState blockStateIn)`
- `public boolean canExplosionDestroyBlock(Explosion explosionIn,  World worldIn,  BlockPos pos,  IBlockState blockStateIn,  float p_174816_5_)`
- `public int getMaxFallHeight()`
- `public Vec3d getLastPortalVec()`
- `public EnumFacing getTeleportDirection()`
- `public boolean doesEntityNotTriggerPressurePlate()`
- `public void addEntityCrashInfo(CrashReportCategory category)`
- `public void setUniqueId(java.util.UUID uniqueIdIn)`
- `public boolean canRenderOnFire()`
- `public java.util.UUID getUniqueID()`
- `public java.lang.String getCachedUniqueIdString()`
- `public boolean isPushedByWater()`
- `public static double getRenderDistanceWeight()`
- `public static void setRenderDistanceWeight(double renderDistWeight)`
- `public ITextComponent getDisplayName()`
- `public void setCustomNameTag(java.lang.String name)`
- `public java.lang.String getCustomNameTag()`
- `public boolean hasCustomName()`
- `public void setAlwaysRenderNameTag(boolean alwaysRenderNameTag)`
- `public boolean getAlwaysRenderNameTag()`
- `public void setPositionAndUpdate(double x,  double y,  double z)`
- `public void notifyDataManagerChange(DataParameter<?> key)`
- `public boolean getAlwaysRenderNameTagForRender()`
- `public EnumFacing getHorizontalFacing()`
- `public EnumFacing getAdjustedHorizontalFacing()`
- `protected HoverEvent getHoverEvent()`
- `public boolean isSpectatedByPlayer(EntityPlayerMP player)`
- `public AxisAlignedBB getEntityBoundingBox()`
- `public AxisAlignedBB getRenderBoundingBox()`
- `public void setEntityBoundingBox(AxisAlignedBB bb)`
- `public float getEyeHeight()`
- `public boolean isOutsideBorder()`
- `public void setOutsideBorder(boolean outsideBorder)`
- `public boolean replaceItemInInventory(int inventorySlot,  ItemStack itemStackIn)`
- `public void sendMessage(ITextComponent component)`
- `public boolean canUseCommand(int permLevel,  java.lang.String commandName)`
- `public BlockPos getPosition()`
- `public Vec3d getPositionVector()`
- `public World getEntityWorld()`
- `public Entity getCommandSenderEntity()`
- `public boolean sendCommandFeedback()`
- `public void setCommandStat(CommandResultStats.Type type,  int amount)`
- `public MinecraftServer getServer()`
- `public CommandResultStats getCommandStats()`
- `public void setCommandStats(Entity entityIn)`
- `public EnumActionResult applyPlayerInteraction(EntityPlayer player,  Vec3d vec,  EnumHand hand)`
- `public boolean isImmuneToExplosions()`
- `protected void applyEnchantments(EntityLivingBase entityLivingBaseIn,  Entity entityIn)`
- `public final boolean isAddedToWorld()`
  Gets whether this entity has been added to a world (for tracking). Specifically
   between the times when an entity is added to a world and the entity being removed
   from the world's tracked lists. See World.onEntityAdded(Entity) and
   World.onEntityRemoved(Entity).
  - returns: True if this entity is being tracked by a world
- `public void onAddedToWorld()`
  Called after the entity has been added to the world's
   ticking list. Can be overriden, but needs to call super
   to prevent MC-136995.
- `public void onRemovedFromWorld()`
  Called after the entity has been removed to the world's
   ticking list. Can be overriden, but needs to call super
   to prevent MC-136995.
- `public NBTTagCompound getEntityData()`
  Returns a NBTTagCompound that can be used to store custom data for this entity.
   It will be written, and read from disc, so it persists over world saves.
  - returns: A NBTTagCompound
- `public boolean shouldRiderSit()`
  Used in model rendering to determine if the entity riding this entity should be in the 'sitting' position.
  - returns: false to prevent an entity that is mounted to this entity from displaying the 'sitting' animation.
- `public ItemStack getPickedResult(RayTraceResult target)`
  Called when a user uses the creative pick block button on this entity.
  - param: target - The full target the player is looking at
  - returns: A ItemStack to add to the player's inventory, empty ItemStack if nothing should be added.
- `public java.util.UUID getPersistentID()`
- `@Deprecated public final void resetEntityId()` (deprecated)
  Deprecated.
  Reset the entity ID to a new value. Not to be used from Mod code
- `public boolean shouldRenderInPass(int pass)`
- `public boolean isCreatureType(EnumCreatureType type,  boolean forSpawnCount)`
  Returns true if the entity is of the @link{EnumCreatureType} provided
  - param: type - The EnumCreatureType type this entity is evaluating
  - param: forSpawnCount - If this is being invoked to check spawn count caps.
  - returns: If the creature is of the type provided
- `public boolean canRiderInteract()`
  If a rider of this entity can interact with this entity. Should return true on the
   ridden entity if so.
  - returns: if the entity can be interacted with from a rider
- `public boolean shouldDismountInWater(Entity rider)`
  If the rider should be dismounted from the entity when the entity goes under water
  - param: rider - The entity that is riding
  - returns: if the entity should be dismounted when under water
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
- `public void deserializeNBT(NBTTagCompound nbt)`
- `public NBTTagCompound serializeNBT()`
- `public boolean canTrample(World world,  Block block,  BlockPos pos,  float fallDistance)`
  Checks if this Entity can trample a Block.
  - param: world - The world in which the block will be trampled
  - param: block - The block being tested
  - param: pos - The block pos
  - param: fallDistance - The fall distance
  - returns: true if this entity can trample, false otherwise
- `public void addTrackingPlayer(EntityPlayerMP player)`
- `public void removeTrackingPlayer(EntityPlayerMP player)`
- `public float getRotatedYaw(Rotation transformRotation)`
- `public float getMirroredYaw(Mirror transformMirror)`
- `public boolean ignoreItemEntityData()`
- `public boolean setPositionNonDirty()`
- `public Entity getControllingPassenger()`
- `public java.util.List<Entity> getPassengers()`
- `public boolean isPassenger(Entity entityIn)`
- `public java.util.Collection<Entity> getRecursivePassengers()`
- `public <T extends Entity> java.util.Collection<T> getRecursivePassengersByType(java.lang.Class<T> entityClass)`
- `public Entity getLowestRidingEntity()`
- `public boolean isRidingSameEntity(Entity entityIn)`
- `public boolean isRidingOrBeingRiddenBy(Entity entityIn)`
- `public boolean canPassengerSteer()`
- `public Entity getRidingEntity()`
- `public EnumPushReaction getPushReaction()`
- `public SoundCategory getSoundCategory()`
- `protected int getFireImmuneTicks()`

## EntityAgeable

*class* `net.minecraft.entity.EntityAgeable`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `protected int growingAge`
- `protected int forcedAge`
- `protected int forcedAgeTimer`

### Inherited fields
- from `net.minecraft.entity.EntityCreature`: `FLEEING_SPEED_MODIFIER`, `FLEEING_SPEED_MODIFIER_UUID`
- from `net.minecraft.entity.EntityLiving`: `experienceValue`, `inventoryArmorDropChances`, `inventoryHandsDropChances`, `jumpHelper`, `livingSoundTime`, `moveHelper`, `navigator`, `targetTasks`, `tasks`
- from `net.minecraft.entity.EntityLivingBase`: `activeItemStack`, `activeItemStackUseCount`, `arrowHitTimer`, `attackedAtYaw`, `attackingPlayer`, `cameraPitch`, `dead`, `deathTime`, `HAND_STATES`, `hurtTime`, `idleTime`, `interpTargetPitch`, `interpTargetX`, `interpTargetY`, `interpTargetYaw`, `interpTargetZ`, `isJumping`, `isSwingInProgress`, `jumpMovementFactor`, `lastDamage`, `limbSwing`, `limbSwingAmount`, `maxHurtResistantTime`, `maxHurtTime`, `movedDistance`, `moveForward`, `moveStrafing`, `moveVertical`, `newPosRotationIncrements`, `onGroundSpeedFactor`, `prevCameraPitch`, `prevLimbSwingAmount`, `prevMovedDistance`, `prevOnGroundSpeedFactor`, `prevRenderYawOffset`, `prevRotationYawHead`, `prevSwingProgress`, `randomUnused1`, `randomUnused2`, `randomYawVelocity`, `recentlyHit`, `renderYawOffset`, `rotationYawHead`, `scoreValue`, `SWIM_SPEED`, `swingingHand`, `swingProgress`, `swingProgressInt`, `ticksElytraFlying`, `ticksSinceLastSwing`, `unused180`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `public abstract EntityAgeable createChild(EntityAgeable ageable)`
- `public boolean processInteract(EntityPlayer player,  EnumHand hand)`
- `protected boolean holdingSpawnEggOfClass(ItemStack stack,  java.lang.Class<? extends Entity> entityClass)`
- `protected void entityInit()`
- `public int getGrowingAge()`
- `public void ageUp(int growthSeconds,  boolean updateForcedAge)`
- `public void addGrowth(int growth)`
- `public void setGrowingAge(int age)`
- `public void writeEntityToNBT(NBTTagCompound compound)`
- `public void readEntityFromNBT(NBTTagCompound compound)`
- `public void notifyDataManagerChange(DataParameter<?> key)`
- `public void onLivingUpdate()`
- `protected void onGrowingAdult()`
- `public boolean isChild()`
- `public void setScaleForAge(boolean child)`
- `protected final void setSize(float width,  float height)`
- `protected final void setScale(float scale)`

### Inherited methods
- from `net.minecraft.entity.EntityCreature`: `detachHome`, `followLeashSpeed`, `getBlockPathWeight`, `getCanSpawnHere`, `getHomePosition`, `getMaximumHomeDistance`, `hasHome`, `hasPath`, `isWithinHomeDistanceCurrentPosition`, `isWithinHomeDistanceFromPosition`, `onLeashDistance`, `setHomePosAndDistance`, `updateLeashedState`
- from `net.minecraft.entity.EntityLiving`: `applyEntityAttributes`, `canAttackClass`, `canBeLeashedTo`, `canBeSteered`, `canDespawn`, `canEquipItem`, `canPassengerSteer`, `canPickUpLoot`, `clearLeashed`, `createBodyHelper`, `createNavigator`, `despawnEntity`, `dropEquipment`, `dropFewItems`, `dropLoot`, `eatGrassBonus`, `enablePersistence`, `faceEntity`, `getAmbientSound`, `getArmorByChance`, `getArmorInventoryList`, `getAttackTarget`, `getDropItem`, `getEntitySenses`, `getExperiencePoints`, `getHeldEquipment`, `getHorizontalFaceSpeed`, `getItemStackFromSlot`, `getJumpHelper`, `getLeashed`, `getLeashHolder`, `getLookHelper`, `getLootTable`, `getMaxFallHeight`, `getMaxSpawnedInChunk`, `getMoveHelper`, `getNavigator`, `getPathPriority`, `getPrimaryHand`, `getRenderSizeModifier`, `getSlotForItemStack`, `getTalkInterval`, `getVerticalFaceSpeed`, `handleStatusUpdate`, `initEntityAI`, `isAIDisabled`, `isItemStackInSlot`, `isLeftHanded`, `isNoDespawnRequired`, `isNotColliding`, `isServerWorld`, `onEntityUpdate`, `onInitialSpawn`, `onUpdate`, `playHurtSound`, `playLivingSound`, `processInitialInteract`, `registerFixesMob`, `replaceItemInInventory`, `setAIMoveSpeed`, `setAttackTarget`, `setCanPickUpLoot`, `setDropChance`, `setEnchantmentBasedOnDifficulty`, `setEquipmentBasedOnDifficulty`, `setItemStackToSlot`, `setLeashHolder`, `setLeftHanded`, `setMoveForward`, `setMoveStrafing`, `setMoveVertical`, `setNoAI`, `setPathPriority`, `spawnExplosionParticle`, `startRiding`, `updateAITasks`, `updateDistance`, `updateEntityActionState`, `updateEquipmentIfNeeded`
- from `net.minecraft.entity.EntityLivingBase`: `addPotionEffect`, `applyArmorCalculations`, `applyPotionDamageCalculations`, `areAllPotionsAmbient`, `attackable`, `attackEntityAsMob`, `attackEntityFrom`, `attemptTeleport`, `blockUsingShield`, `canBeCollidedWith`, `canBeHitWithPotion`, `canBePushed`, `canBreatheUnderwater`, `canDropLoot`, `canEntityBeSeen`, `clearActivePotions`, `collideWithEntity`, `collideWithNearbyEntities`, `curePotionEffects`, `damageArmor`, `damageEntity`, `damageShield`, `decreaseAirSupply`, `dismountEntity`, `dismountRidingEntity`, `fall`, `frostWalk`, `getAbsorptionAmount`, `getActiveHand`, `getActiveItemStack`, `getActivePotionEffect`, `getActivePotionEffects`, `getActivePotionMap`, `getAIMoveSpeed`, `getAlwaysRenderNameTagForRender`, `getArrowCountInEntity`, `getAttackingEntity`, `getAttributeMap`, `getCapability`, `getCombatTracker`, `getCreatureAttribute`, `getDeathSound`, `getEntityAttribute`, `getFallSound`, `getHealth`, `getHeldItem`, `getHeldItemMainhand`, `getHeldItemOffhand`, `getHurtSound`, `getIdleTime`, `getItemInUseCount`, `getItemInUseMaxCount`, `getJumpUpwardsMotion`, `getLastAttackedEntity`, `getLastAttackedEntityTime`, `getLastDamageSource`, `getLook`, `getMaxHealth`, `getRevengeTarget`, `getRevengeTimer`, `getRNG`, `getRotationYawHead`, `getSoundPitch`, `getSoundVolume`, `getSwingProgress`, `getTicksElytraFlying`, `getTotalArmorValue`, `getWaterSlowDown`, `handleJumpLava`, `handleJumpWater`, `hasCapability`, `hasItemInSlot`, `heal`, `isActiveItemStackBlocking`, `isElytraFlying`, `isEntityAlive`, `isEntityUndead`, `isHandActive`, `isMovementBlocked`, `isOnLadder`, `isPlayer`, `isPlayerSleeping`, `isPotionActive`, `isPotionApplicable`, `jump`, `knockBack`, `markPotionsDirty`, `markVelocityChanged`, `moveRelative`, `onChangedPotionEffect`, `onDeath`, `onDeathUpdate`, `onFinishedPotionEffect`, `onItemPickup`, `onItemUseFinish`, `onKillCommand`, `onNewPotionEffect`, `outOfWorld`, `performHurtAnimation`, `playEquipSound`, `removeActivePotionEffect`, `removePotionEffect`, `renderBrokenItemStack`, `resetActiveHand`, `resetPotionEffectMetadata`, `sendEndCombat`, `sendEnterCombat`, `setAbsorptionAmount`, `setActiveHand`, `setArrowCountInEntity`, `setHealth`, `setHeldItem`, `setJumping`, `setLastAttackedEntity`, `setPartying`, `setPositionAndRotationDirect`, `setRenderYawOffset`, `setRevengeTarget`, `setRotationYawHead`, `setSprinting`, `shouldRiderFaceForward`, `stopActiveHand`, `swingArm`, `travel`, `updateActiveHand`, `updateArmSwingProgress`, `updateFallState`, `updateItemUse`, `updatePotionEffects`, `updatePotionMetadata`, `updateRidden`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canTriggerWalking`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLookVec`, `getLowestRidingEntity`, `getMaxInPortalTime`, `getMirroredYaw`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleWaterMovement`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `move`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `onAddedToWorld`, `onCollideWithPlayer`, `onInsideBlock`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRotation`, `setSilent`, `setSneaking`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `toString`, `turn`, `updatePassenger`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntityAreaEffectCloud

*class* `net.minecraft.entity.EntityAreaEffectCloud`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `protected void entityInit()`
- `public void setRadius(float radiusIn)`
- `public float getRadius()`
- `public void setPotion(PotionType potionIn)`
- `public void addEffect(PotionEffect effect)`
- `public int getColor()`
- `public void setColor(int colorIn)`
- `public EnumParticleTypes getParticle()`
- `public void setParticle(EnumParticleTypes particleIn)`
- `public int getParticleParam1()`
- `public void setParticleParam1(int particleParam)`
- `public int getParticleParam2()`
- `public void setParticleParam2(int particleParam)`
- `protected void setIgnoreRadius(boolean ignoreRadius)`
- `public boolean shouldIgnoreRadius()`
- `public int getDuration()`
- `public void setDuration(int durationIn)`
- `public void onUpdate()`
- `public void setRadiusOnUse(float radiusOnUseIn)`
- `public void setRadiusPerTick(float radiusPerTickIn)`
- `public void setWaitTime(int waitTimeIn)`
- `public void setOwner(EntityLivingBase ownerIn)`
- `public EntityLivingBase getOwner()`
- `protected void readEntityFromNBT(NBTTagCompound compound)`
- `protected void writeEntityToNBT(NBTTagCompound compound)`
- `public void notifyDataManagerChange(DataParameter<?> key)`
- `public EnumPushReaction getPushReaction()`

### Inherited methods
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `attackEntityFrom`, `awardKillScore`, `canBeAttackedWithItem`, `canBeCollidedWith`, `canBePushed`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canTriggerWalking`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `fall`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `handleWaterMovement`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `outOfWorld`, `performHurtAnimation`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `processInitialInteract`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndRotationDirect`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntityBodyHelper

*class* `net.minecraft.entity.EntityBodyHelper`

### Methods
- `public void updateRenderAngles()`

## EntityCreature

*class* `net.minecraft.entity.EntityCreature`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public static final java.util.UUID FLEEING_SPEED_MODIFIER_UUID`
- `public static final AttributeModifier FLEEING_SPEED_MODIFIER`

### Inherited fields
- from `net.minecraft.entity.EntityLiving`: `experienceValue`, `inventoryArmorDropChances`, `inventoryHandsDropChances`, `jumpHelper`, `livingSoundTime`, `moveHelper`, `navigator`, `targetTasks`, `tasks`
- from `net.minecraft.entity.EntityLivingBase`: `activeItemStack`, `activeItemStackUseCount`, `arrowHitTimer`, `attackedAtYaw`, `attackingPlayer`, `cameraPitch`, `dead`, `deathTime`, `HAND_STATES`, `hurtTime`, `idleTime`, `interpTargetPitch`, `interpTargetX`, `interpTargetY`, `interpTargetYaw`, `interpTargetZ`, `isJumping`, `isSwingInProgress`, `jumpMovementFactor`, `lastDamage`, `limbSwing`, `limbSwingAmount`, `maxHurtResistantTime`, `maxHurtTime`, `movedDistance`, `moveForward`, `moveStrafing`, `moveVertical`, `newPosRotationIncrements`, `onGroundSpeedFactor`, `prevCameraPitch`, `prevLimbSwingAmount`, `prevMovedDistance`, `prevOnGroundSpeedFactor`, `prevRenderYawOffset`, `prevRotationYawHead`, `prevSwingProgress`, `randomUnused1`, `randomUnused2`, `randomYawVelocity`, `recentlyHit`, `renderYawOffset`, `rotationYawHead`, `scoreValue`, `SWIM_SPEED`, `swingingHand`, `swingProgress`, `swingProgressInt`, `ticksElytraFlying`, `ticksSinceLastSwing`, `unused180`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `public float getBlockPathWeight(BlockPos pos)`
- `public boolean getCanSpawnHere()`
- `public boolean hasPath()`
- `public boolean isWithinHomeDistanceCurrentPosition()`
- `public boolean isWithinHomeDistanceFromPosition(BlockPos pos)`
- `public void setHomePosAndDistance(BlockPos pos,  int distance)`
- `public BlockPos getHomePosition()`
- `public float getMaximumHomeDistance()`
- `public void detachHome()`
- `public boolean hasHome()`
- `protected void updateLeashedState()`
- `protected double followLeashSpeed()`
- `protected void onLeashDistance(float p_142017_1_)`

### Inherited methods
- from `net.minecraft.entity.EntityLiving`: `applyEntityAttributes`, `canAttackClass`, `canBeLeashedTo`, `canBeSteered`, `canDespawn`, `canEquipItem`, `canPassengerSteer`, `canPickUpLoot`, `clearLeashed`, `createBodyHelper`, `createNavigator`, `despawnEntity`, `dropEquipment`, `dropFewItems`, `dropLoot`, `eatGrassBonus`, `enablePersistence`, `entityInit`, `faceEntity`, `getAmbientSound`, `getArmorByChance`, `getArmorInventoryList`, `getAttackTarget`, `getDropItem`, `getEntitySenses`, `getExperiencePoints`, `getHeldEquipment`, `getHorizontalFaceSpeed`, `getItemStackFromSlot`, `getJumpHelper`, `getLeashed`, `getLeashHolder`, `getLookHelper`, `getLootTable`, `getMaxFallHeight`, `getMaxSpawnedInChunk`, `getMoveHelper`, `getNavigator`, `getPathPriority`, `getPrimaryHand`, `getRenderSizeModifier`, `getSlotForItemStack`, `getTalkInterval`, `getVerticalFaceSpeed`, `handleStatusUpdate`, `initEntityAI`, `isAIDisabled`, `isItemStackInSlot`, `isLeftHanded`, `isNoDespawnRequired`, `isNotColliding`, `isServerWorld`, `onEntityUpdate`, `onInitialSpawn`, `onLivingUpdate`, `onUpdate`, `playHurtSound`, `playLivingSound`, `processInitialInteract`, `processInteract`, `readEntityFromNBT`, `registerFixesMob`, `replaceItemInInventory`, `setAIMoveSpeed`, `setAttackTarget`, `setCanPickUpLoot`, `setDropChance`, `setEnchantmentBasedOnDifficulty`, `setEquipmentBasedOnDifficulty`, `setItemStackToSlot`, `setLeashHolder`, `setLeftHanded`, `setMoveForward`, `setMoveStrafing`, `setMoveVertical`, `setNoAI`, `setPathPriority`, `spawnExplosionParticle`, `startRiding`, `updateAITasks`, `updateDistance`, `updateEntityActionState`, `updateEquipmentIfNeeded`, `writeEntityToNBT`
- from `net.minecraft.entity.EntityLivingBase`: `addPotionEffect`, `applyArmorCalculations`, `applyPotionDamageCalculations`, `areAllPotionsAmbient`, `attackable`, `attackEntityAsMob`, `attackEntityFrom`, `attemptTeleport`, `blockUsingShield`, `canBeCollidedWith`, `canBeHitWithPotion`, `canBePushed`, `canBreatheUnderwater`, `canDropLoot`, `canEntityBeSeen`, `clearActivePotions`, `collideWithEntity`, `collideWithNearbyEntities`, `curePotionEffects`, `damageArmor`, `damageEntity`, `damageShield`, `decreaseAirSupply`, `dismountEntity`, `dismountRidingEntity`, `fall`, `frostWalk`, `getAbsorptionAmount`, `getActiveHand`, `getActiveItemStack`, `getActivePotionEffect`, `getActivePotionEffects`, `getActivePotionMap`, `getAIMoveSpeed`, `getAlwaysRenderNameTagForRender`, `getArrowCountInEntity`, `getAttackingEntity`, `getAttributeMap`, `getCapability`, `getCombatTracker`, `getCreatureAttribute`, `getDeathSound`, `getEntityAttribute`, `getFallSound`, `getHealth`, `getHeldItem`, `getHeldItemMainhand`, `getHeldItemOffhand`, `getHurtSound`, `getIdleTime`, `getItemInUseCount`, `getItemInUseMaxCount`, `getJumpUpwardsMotion`, `getLastAttackedEntity`, `getLastAttackedEntityTime`, `getLastDamageSource`, `getLook`, `getMaxHealth`, `getRevengeTarget`, `getRevengeTimer`, `getRNG`, `getRotationYawHead`, `getSoundPitch`, `getSoundVolume`, `getSwingProgress`, `getTicksElytraFlying`, `getTotalArmorValue`, `getWaterSlowDown`, `handleJumpLava`, `handleJumpWater`, `hasCapability`, `hasItemInSlot`, `heal`, `isActiveItemStackBlocking`, `isChild`, `isElytraFlying`, `isEntityAlive`, `isEntityUndead`, `isHandActive`, `isMovementBlocked`, `isOnLadder`, `isPlayer`, `isPlayerSleeping`, `isPotionActive`, `isPotionApplicable`, `jump`, `knockBack`, `markPotionsDirty`, `markVelocityChanged`, `moveRelative`, `notifyDataManagerChange`, `onChangedPotionEffect`, `onDeath`, `onDeathUpdate`, `onFinishedPotionEffect`, `onItemPickup`, `onItemUseFinish`, `onKillCommand`, `onNewPotionEffect`, `outOfWorld`, `performHurtAnimation`, `playEquipSound`, `removeActivePotionEffect`, `removePotionEffect`, `renderBrokenItemStack`, `resetActiveHand`, `resetPotionEffectMetadata`, `sendEndCombat`, `sendEnterCombat`, `setAbsorptionAmount`, `setActiveHand`, `setArrowCountInEntity`, `setHealth`, `setHeldItem`, `setJumping`, `setLastAttackedEntity`, `setPartying`, `setPositionAndRotationDirect`, `setRenderYawOffset`, `setRevengeTarget`, `setRotationYawHead`, `setSprinting`, `shouldRiderFaceForward`, `stopActiveHand`, `swingArm`, `travel`, `updateActiveHand`, `updateArmSwingProgress`, `updateFallState`, `updateItemUse`, `updatePotionEffects`, `updatePotionMetadata`, `updateRidden`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canTriggerWalking`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLookVec`, `getLowestRidingEntity`, `getMaxInPortalTime`, `getMirroredYaw`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleWaterMovement`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `move`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `onAddedToWorld`, `onCollideWithPlayer`, `onInsideBlock`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRotation`, `setSilent`, `setSize`, `setSneaking`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `toString`, `turn`, `updatePassenger`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntityFlying

*class* `net.minecraft.entity.EntityFlying`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.entity.EntityLiving`: `experienceValue`, `inventoryArmorDropChances`, `inventoryHandsDropChances`, `jumpHelper`, `livingSoundTime`, `moveHelper`, `navigator`, `targetTasks`, `tasks`
- from `net.minecraft.entity.EntityLivingBase`: `activeItemStack`, `activeItemStackUseCount`, `arrowHitTimer`, `attackedAtYaw`, `attackingPlayer`, `cameraPitch`, `dead`, `deathTime`, `HAND_STATES`, `hurtTime`, `idleTime`, `interpTargetPitch`, `interpTargetX`, `interpTargetY`, `interpTargetYaw`, `interpTargetZ`, `isJumping`, `isSwingInProgress`, `jumpMovementFactor`, `lastDamage`, `limbSwing`, `limbSwingAmount`, `maxHurtResistantTime`, `maxHurtTime`, `movedDistance`, `moveForward`, `moveStrafing`, `moveVertical`, `newPosRotationIncrements`, `onGroundSpeedFactor`, `prevCameraPitch`, `prevLimbSwingAmount`, `prevMovedDistance`, `prevOnGroundSpeedFactor`, `prevRenderYawOffset`, `prevRotationYawHead`, `prevSwingProgress`, `randomUnused1`, `randomUnused2`, `randomYawVelocity`, `recentlyHit`, `renderYawOffset`, `rotationYawHead`, `scoreValue`, `SWIM_SPEED`, `swingingHand`, `swingProgress`, `swingProgressInt`, `ticksElytraFlying`, `ticksSinceLastSwing`, `unused180`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `public void fall(float distance,  float damageMultiplier)`
- `protected void updateFallState(double y,  boolean onGroundIn,  IBlockState state,  BlockPos pos)`
- `public void travel(float strafe,  float vertical,  float forward)`
- `public boolean isOnLadder()`

### Inherited methods
- from `net.minecraft.entity.EntityLiving`: `applyEntityAttributes`, `canAttackClass`, `canBeLeashedTo`, `canBeSteered`, `canDespawn`, `canEquipItem`, `canPassengerSteer`, `canPickUpLoot`, `clearLeashed`, `createBodyHelper`, `createNavigator`, `despawnEntity`, `dropEquipment`, `dropFewItems`, `dropLoot`, `eatGrassBonus`, `enablePersistence`, `entityInit`, `faceEntity`, `getAmbientSound`, `getArmorByChance`, `getArmorInventoryList`, `getAttackTarget`, `getCanSpawnHere`, `getDropItem`, `getEntitySenses`, `getExperiencePoints`, `getHeldEquipment`, `getHorizontalFaceSpeed`, `getItemStackFromSlot`, `getJumpHelper`, `getLeashed`, `getLeashHolder`, `getLookHelper`, `getLootTable`, `getMaxFallHeight`, `getMaxSpawnedInChunk`, `getMoveHelper`, `getNavigator`, `getPathPriority`, `getPrimaryHand`, `getRenderSizeModifier`, `getSlotForItemStack`, `getTalkInterval`, `getVerticalFaceSpeed`, `handleStatusUpdate`, `initEntityAI`, `isAIDisabled`, `isItemStackInSlot`, `isLeftHanded`, `isNoDespawnRequired`, `isNotColliding`, `isServerWorld`, `onEntityUpdate`, `onInitialSpawn`, `onLivingUpdate`, `onUpdate`, `playHurtSound`, `playLivingSound`, `processInitialInteract`, `processInteract`, `readEntityFromNBT`, `registerFixesMob`, `replaceItemInInventory`, `setAIMoveSpeed`, `setAttackTarget`, `setCanPickUpLoot`, `setDropChance`, `setEnchantmentBasedOnDifficulty`, `setEquipmentBasedOnDifficulty`, `setItemStackToSlot`, `setLeashHolder`, `setLeftHanded`, `setMoveForward`, `setMoveStrafing`, `setMoveVertical`, `setNoAI`, `setPathPriority`, `spawnExplosionParticle`, `startRiding`, `updateAITasks`, `updateDistance`, `updateEntityActionState`, `updateEquipmentIfNeeded`, `updateLeashedState`, `writeEntityToNBT`
- from `net.minecraft.entity.EntityLivingBase`: `addPotionEffect`, `applyArmorCalculations`, `applyPotionDamageCalculations`, `areAllPotionsAmbient`, `attackable`, `attackEntityAsMob`, `attackEntityFrom`, `attemptTeleport`, `blockUsingShield`, `canBeCollidedWith`, `canBeHitWithPotion`, `canBePushed`, `canBreatheUnderwater`, `canDropLoot`, `canEntityBeSeen`, `clearActivePotions`, `collideWithEntity`, `collideWithNearbyEntities`, `curePotionEffects`, `damageArmor`, `damageEntity`, `damageShield`, `decreaseAirSupply`, `dismountEntity`, `dismountRidingEntity`, `frostWalk`, `getAbsorptionAmount`, `getActiveHand`, `getActiveItemStack`, `getActivePotionEffect`, `getActivePotionEffects`, `getActivePotionMap`, `getAIMoveSpeed`, `getAlwaysRenderNameTagForRender`, `getArrowCountInEntity`, `getAttackingEntity`, `getAttributeMap`, `getCapability`, `getCombatTracker`, `getCreatureAttribute`, `getDeathSound`, `getEntityAttribute`, `getFallSound`, `getHealth`, `getHeldItem`, `getHeldItemMainhand`, `getHeldItemOffhand`, `getHurtSound`, `getIdleTime`, `getItemInUseCount`, `getItemInUseMaxCount`, `getJumpUpwardsMotion`, `getLastAttackedEntity`, `getLastAttackedEntityTime`, `getLastDamageSource`, `getLook`, `getMaxHealth`, `getRevengeTarget`, `getRevengeTimer`, `getRNG`, `getRotationYawHead`, `getSoundPitch`, `getSoundVolume`, `getSwingProgress`, `getTicksElytraFlying`, `getTotalArmorValue`, `getWaterSlowDown`, `handleJumpLava`, `handleJumpWater`, `hasCapability`, `hasItemInSlot`, `heal`, `isActiveItemStackBlocking`, `isChild`, `isElytraFlying`, `isEntityAlive`, `isEntityUndead`, `isHandActive`, `isMovementBlocked`, `isPlayer`, `isPlayerSleeping`, `isPotionActive`, `isPotionApplicable`, `jump`, `knockBack`, `markPotionsDirty`, `markVelocityChanged`, `moveRelative`, `notifyDataManagerChange`, `onChangedPotionEffect`, `onDeath`, `onDeathUpdate`, `onFinishedPotionEffect`, `onItemPickup`, `onItemUseFinish`, `onKillCommand`, `onNewPotionEffect`, `outOfWorld`, `performHurtAnimation`, `playEquipSound`, `removeActivePotionEffect`, `removePotionEffect`, `renderBrokenItemStack`, `resetActiveHand`, `resetPotionEffectMetadata`, `sendEndCombat`, `sendEnterCombat`, `setAbsorptionAmount`, `setActiveHand`, `setArrowCountInEntity`, `setHealth`, `setHeldItem`, `setJumping`, `setLastAttackedEntity`, `setPartying`, `setPositionAndRotationDirect`, `setRenderYawOffset`, `setRevengeTarget`, `setRotationYawHead`, `setSprinting`, `shouldRiderFaceForward`, `stopActiveHand`, `swingArm`, `updateActiveHand`, `updateArmSwingProgress`, `updateItemUse`, `updatePotionEffects`, `updatePotionMetadata`, `updateRidden`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canTriggerWalking`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLookVec`, `getLowestRidingEntity`, `getMaxInPortalTime`, `getMirroredYaw`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleWaterMovement`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `move`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `onAddedToWorld`, `onCollideWithPlayer`, `onInsideBlock`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRotation`, `setSilent`, `setSize`, `setSneaking`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `toString`, `turn`, `updatePassenger`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntityHanging

*class* `net.minecraft.entity.EntityHanging`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `protected BlockPos hangingPosition`
- `public EnumFacing facingDirection`

### Inherited fields
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `protected void entityInit()`
- `protected void updateFacingWithBoundingBox(EnumFacing facingDirectionIn)`
- `protected void updateBoundingBox()`
- `public void onUpdate()`
- `public boolean onValidSurface()`
- `public boolean canBeCollidedWith()`
- `public boolean hitByEntity(Entity entityIn)`
- `public EnumFacing getHorizontalFacing()`
- `public boolean attackEntityFrom(DamageSource source,  float amount)`
- `public void move(MoverType type,  double x,  double y,  double z)`
- `public void addVelocity(double x,  double y,  double z)`
- `public void writeEntityToNBT(NBTTagCompound compound)`
- `public void readEntityFromNBT(NBTTagCompound compound)`
- `public abstract int getWidthPixels()`
- `public abstract int getHeightPixels()`
- `public abstract void onBroken(Entity brokenEntity)`
- `public abstract void playPlaceSound()`
- `public EntityItem entityDropItem(ItemStack stack,  float offsetY)`
- `protected boolean shouldSetPosAfterLoading()`
- `public void setPosition(double x,  double y,  double z)`
- `public BlockPos getHangingPosition()`
- `public float getRotatedYaw(Rotation transformRotation)`
- `public float getMirroredYaw(Mirror transformMirror)`
- `public void onStruckByLightning(EntityLightningBolt lightningBolt)`

### Inherited methods
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBePushed`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canTriggerWalking`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `equals`, `extinguish`, `fall`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `handleWaterMovement`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `outOfWorld`, `performHurtAnimation`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `processInitialInteract`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPositionAndRotation`, `setPositionAndRotationDirect`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntityLeashKnot

*class* `net.minecraft.entity.EntityLeashKnot`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.entity.EntityHanging`: `facingDirection`, `hangingPosition`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `public void setPosition(double x,  double y,  double z)`
- `protected void updateBoundingBox()`
- `public void updateFacingWithBoundingBox(EnumFacing facingDirectionIn)`
- `public int getWidthPixels()`
- `public int getHeightPixels()`
- `public float getEyeHeight()`
- `public boolean isInRangeToRenderDist(double distance)`
- `public void onBroken(Entity brokenEntity)`
- `public boolean writeToNBTOptional(NBTTagCompound compound)`
- `public void writeEntityToNBT(NBTTagCompound compound)`
- `public void readEntityFromNBT(NBTTagCompound compound)`
- `public boolean processInitialInteract(EntityPlayer player,  EnumHand hand)`
- `public boolean onValidSurface()`
- `public static EntityLeashKnot createKnot(World worldIn,  BlockPos fence)`
- `public static EntityLeashKnot getKnotForPosition(World worldIn,  BlockPos pos)`
- `public void playPlaceSound()`

### Inherited methods
- from `net.minecraft.entity.EntityHanging`: `addVelocity`, `attackEntityFrom`, `canBeCollidedWith`, `entityDropItem`, `entityInit`, `getHangingPosition`, `getHorizontalFacing`, `getMirroredYaw`, `getRotatedYaw`, `hitByEntity`, `move`, `onStruckByLightning`, `onUpdate`, `shouldSetPosAfterLoading`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBePushed`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canTriggerWalking`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `equals`, `extinguish`, `fall`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `handleWaterMovement`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `outOfWorld`, `performHurtAnimation`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPositionAndRotation`, `setPositionAndRotationDirect`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`

## EntityList

*class* `net.minecraft.entity.EntityList`

### Fields
- `public static final ResourceLocation LIGHTNING_BOLT`
- `public static final java.util.Map<ResourceLocation,EntityList.EntityEggInfo> ENTITY_EGGS`

### Methods
- `public static ResourceLocation getKey(Entity entityIn)`
- `public static ResourceLocation getKey(java.lang.Class<? extends Entity> entityIn)`
- `public static java.lang.String getEntityString(Entity entityIn)`
- `public static java.lang.String getTranslationName(ResourceLocation entityType)`
- `public static java.lang.Class<? extends Entity> getClassFromID(int entityID)`
- `public static java.lang.Class<? extends Entity> getClassFromName(java.lang.String p_192839_0_)`
- `public static int getID(java.lang.Class<? extends Entity> cls)`
- `public static java.lang.Class<? extends Entity> getClass(ResourceLocation key)`
- `public static Entity newEntity(java.lang.Class<? extends Entity> clazz,  World worldIn)`
- `public static Entity createEntityByID(int entityID,  World worldIn)`
- `public static Entity createEntityByIDFromName(ResourceLocation name,  World worldIn)`
- `public static Entity createEntityFromNBT(NBTTagCompound nbt,  World worldIn)`
- `public static java.util.Set<ResourceLocation> getEntityNameList()`
- `public static boolean isMatchingName(Entity entityIn,  ResourceLocation entityName)`
- `public static boolean isRegistered(ResourceLocation entityName)`
- `public static java.lang.String getValidTypeNames()`
- `public static void init()`
- `protected static EntityList.EntityEggInfo addSpawnInfo(java.lang.String id,  int primaryColor,  int secondaryColor)`

## EntityList.EntityEggInfo

*class* `net.minecraft.entity.EntityList.EntityEggInfo`

Enclosing class: EntityList

### Fields
- `public final ResourceLocation spawnedID`
- `public final int primaryColor`
- `public final int secondaryColor`
- `public final StatBase killEntityStat`
- `public final StatBase entityKilledByStat`

## EntityLiving

*class* `net.minecraft.entity.EntityLiving`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public int livingSoundTime`
- `protected int experienceValue`
- `protected EntityMoveHelper moveHelper`
- `protected EntityJumpHelper jumpHelper`
- `protected PathNavigate navigator`
- `public final EntityAITasks tasks`
- `public final EntityAITasks targetTasks`
- `protected float[] inventoryHandsDropChances`
- `protected float[] inventoryArmorDropChances`

### Inherited fields
- from `net.minecraft.entity.EntityLivingBase`: `activeItemStack`, `activeItemStackUseCount`, `arrowHitTimer`, `attackedAtYaw`, `attackingPlayer`, `cameraPitch`, `dead`, `deathTime`, `HAND_STATES`, `hurtTime`, `idleTime`, `interpTargetPitch`, `interpTargetX`, `interpTargetY`, `interpTargetYaw`, `interpTargetZ`, `isJumping`, `isSwingInProgress`, `jumpMovementFactor`, `lastDamage`, `limbSwing`, `limbSwingAmount`, `maxHurtResistantTime`, `maxHurtTime`, `movedDistance`, `moveForward`, `moveStrafing`, `moveVertical`, `newPosRotationIncrements`, `onGroundSpeedFactor`, `prevCameraPitch`, `prevLimbSwingAmount`, `prevMovedDistance`, `prevOnGroundSpeedFactor`, `prevRenderYawOffset`, `prevRotationYawHead`, `prevSwingProgress`, `randomUnused1`, `randomUnused2`, `randomYawVelocity`, `recentlyHit`, `renderYawOffset`, `rotationYawHead`, `scoreValue`, `SWIM_SPEED`, `swingingHand`, `swingProgress`, `swingProgressInt`, `ticksElytraFlying`, `ticksSinceLastSwing`, `unused180`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `protected void initEntityAI()`
- `protected void applyEntityAttributes()`
- `protected PathNavigate createNavigator(World worldIn)`
- `public float getPathPriority(PathNodeType nodeType)`
- `public void setPathPriority(PathNodeType nodeType,  float priority)`
- `protected EntityBodyHelper createBodyHelper()`
- `public EntityLookHelper getLookHelper()`
- `public EntityMoveHelper getMoveHelper()`
- `public EntityJumpHelper getJumpHelper()`
- `public PathNavigate getNavigator()`
- `public EntitySenses getEntitySenses()`
- `public EntityLivingBase getAttackTarget()`
- `public void setAttackTarget(EntityLivingBase entitylivingbaseIn)`
- `public boolean canAttackClass(java.lang.Class<? extends EntityLivingBase> cls)`
- `public void eatGrassBonus()`
- `protected void entityInit()`
- `public int getTalkInterval()`
- `public void playLivingSound()`
- `public void onEntityUpdate()`
- `protected void playHurtSound(DamageSource source)`
- `protected int getExperiencePoints(EntityPlayer player)`
- `public void spawnExplosionParticle()`
- `public void handleStatusUpdate(byte id)`
- `public void onUpdate()`
- `protected float updateDistance(float p_110146_1_,  float p_110146_2_)`
- `protected SoundEvent getAmbientSound()`
- `protected Item getDropItem()`
- `protected void dropFewItems(boolean wasRecentlyHit,  int lootingModifier)`
- `public static void registerFixesMob(DataFixer fixer,  java.lang.Class<?> name)`
- `public void writeEntityToNBT(NBTTagCompound compound)`
- `public void readEntityFromNBT(NBTTagCompound compound)`
- `protected ResourceLocation getLootTable()`
- `protected void dropLoot(boolean wasRecentlyHit,  int lootingModifier,  DamageSource source)`
- `public void setMoveForward(float amount)`
- `public void setMoveVertical(float amount)`
- `public void setMoveStrafing(float amount)`
- `public void setAIMoveSpeed(float speedIn)`
- `public void onLivingUpdate()`
- `protected void updateEquipmentIfNeeded(EntityItem itemEntity)`
- `protected boolean canEquipItem(ItemStack stack)`
- `protected boolean canDespawn()`
- `protected void despawnEntity()`
- `protected final void updateEntityActionState()`
- `protected void updateAITasks()`
- `public int getVerticalFaceSpeed()`
- `public int getHorizontalFaceSpeed()`
- `public void faceEntity(Entity entityIn,  float maxYawIncrease,  float maxPitchIncrease)`
- `public boolean getCanSpawnHere()`
- `public boolean isNotColliding()`
- `public float getRenderSizeModifier()`
- `public int getMaxSpawnedInChunk()`
- `public int getMaxFallHeight()`
- `public java.lang.Iterable<ItemStack> getHeldEquipment()`
- `public java.lang.Iterable<ItemStack> getArmorInventoryList()`
- `public ItemStack getItemStackFromSlot(EntityEquipmentSlot slotIn)`
- `public void setItemStackToSlot(EntityEquipmentSlot slotIn,  ItemStack stack)`
- `protected void dropEquipment(boolean wasRecentlyHit,  int lootingModifier)`
- `protected void setEquipmentBasedOnDifficulty(DifficultyInstance difficulty)`
- `public static EntityEquipmentSlot getSlotForItemStack(ItemStack stack)`
- `public static Item getArmorByChance(EntityEquipmentSlot slotIn,  int chance)`
- `protected void setEnchantmentBasedOnDifficulty(DifficultyInstance difficulty)`
- `public IEntityLivingData onInitialSpawn(DifficultyInstance difficulty,  IEntityLivingData livingdata)`
- `public boolean canBeSteered()`
- `public void enablePersistence()`
- `public void setDropChance(EntityEquipmentSlot slotIn,  float chance)`
- `public boolean canPickUpLoot()`
- `public void setCanPickUpLoot(boolean canPickup)`
- `public boolean isNoDespawnRequired()`
- `public final boolean processInitialInteract(EntityPlayer player,  EnumHand hand)`
- `protected boolean processInteract(EntityPlayer player,  EnumHand hand)`
- `protected void updateLeashedState()`
- `public void clearLeashed(boolean sendPacket,  boolean dropLead)`
- `public boolean canBeLeashedTo(EntityPlayer player)`
- `public boolean getLeashed()`
- `public Entity getLeashHolder()`
- `public void setLeashHolder(Entity entityIn,  boolean sendAttachNotification)`
- `public boolean startRiding(Entity entityIn,  boolean force)`
- `public boolean replaceItemInInventory(int inventorySlot,  ItemStack itemStackIn)`
- `public boolean canPassengerSteer()`
- `public static boolean isItemStackInSlot(EntityEquipmentSlot slotIn,  ItemStack stack)`
- `public boolean isServerWorld()`
- `public void setNoAI(boolean disable)`
- `public void setLeftHanded(boolean leftHanded)`
- `public boolean isAIDisabled()`
- `public boolean isLeftHanded()`
- `public EnumHandSide getPrimaryHand()`

### Inherited methods
- from `net.minecraft.entity.EntityLivingBase`: `addPotionEffect`, `applyArmorCalculations`, `applyPotionDamageCalculations`, `areAllPotionsAmbient`, `attackable`, `attackEntityAsMob`, `attackEntityFrom`, `attemptTeleport`, `blockUsingShield`, `canBeCollidedWith`, `canBeHitWithPotion`, `canBePushed`, `canBreatheUnderwater`, `canDropLoot`, `canEntityBeSeen`, `clearActivePotions`, `collideWithEntity`, `collideWithNearbyEntities`, `curePotionEffects`, `damageArmor`, `damageEntity`, `damageShield`, `decreaseAirSupply`, `dismountEntity`, `dismountRidingEntity`, `fall`, `frostWalk`, `getAbsorptionAmount`, `getActiveHand`, `getActiveItemStack`, `getActivePotionEffect`, `getActivePotionEffects`, `getActivePotionMap`, `getAIMoveSpeed`, `getAlwaysRenderNameTagForRender`, `getArrowCountInEntity`, `getAttackingEntity`, `getAttributeMap`, `getCapability`, `getCombatTracker`, `getCreatureAttribute`, `getDeathSound`, `getEntityAttribute`, `getFallSound`, `getHealth`, `getHeldItem`, `getHeldItemMainhand`, `getHeldItemOffhand`, `getHurtSound`, `getIdleTime`, `getItemInUseCount`, `getItemInUseMaxCount`, `getJumpUpwardsMotion`, `getLastAttackedEntity`, `getLastAttackedEntityTime`, `getLastDamageSource`, `getLook`, `getMaxHealth`, `getRevengeTarget`, `getRevengeTimer`, `getRNG`, `getRotationYawHead`, `getSoundPitch`, `getSoundVolume`, `getSwingProgress`, `getTicksElytraFlying`, `getTotalArmorValue`, `getWaterSlowDown`, `handleJumpLava`, `handleJumpWater`, `hasCapability`, `hasItemInSlot`, `heal`, `isActiveItemStackBlocking`, `isChild`, `isElytraFlying`, `isEntityAlive`, `isEntityUndead`, `isHandActive`, `isMovementBlocked`, `isOnLadder`, `isPlayer`, `isPlayerSleeping`, `isPotionActive`, `isPotionApplicable`, `jump`, `knockBack`, `markPotionsDirty`, `markVelocityChanged`, `moveRelative`, `notifyDataManagerChange`, `onChangedPotionEffect`, `onDeath`, `onDeathUpdate`, `onFinishedPotionEffect`, `onItemPickup`, `onItemUseFinish`, `onKillCommand`, `onNewPotionEffect`, `outOfWorld`, `performHurtAnimation`, `playEquipSound`, `removeActivePotionEffect`, `removePotionEffect`, `renderBrokenItemStack`, `resetActiveHand`, `resetPotionEffectMetadata`, `sendEndCombat`, `sendEnterCombat`, `setAbsorptionAmount`, `setActiveHand`, `setArrowCountInEntity`, `setHealth`, `setHeldItem`, `setJumping`, `setLastAttackedEntity`, `setPartying`, `setPositionAndRotationDirect`, `setRenderYawOffset`, `setRevengeTarget`, `setRotationYawHead`, `setSprinting`, `shouldRiderFaceForward`, `stopActiveHand`, `swingArm`, `travel`, `updateActiveHand`, `updateArmSwingProgress`, `updateFallState`, `updateItemUse`, `updatePotionEffects`, `updatePotionMetadata`, `updateRidden`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canTriggerWalking`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLookVec`, `getLowestRidingEntity`, `getMaxInPortalTime`, `getMirroredYaw`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleWaterMovement`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `move`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `onAddedToWorld`, `onCollideWithPlayer`, `onInsideBlock`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRotation`, `setSilent`, `setSize`, `setSneaking`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `toString`, `turn`, `updatePassenger`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntityLiving.SpawnPlacementType

*enum* `net.minecraft.entity.EntityLiving.SpawnPlacementType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EntityLiving.SpawnPlacementType>

Enclosing class: EntityLiving

### Fields
- `public static final EntityLiving.SpawnPlacementType ON_GROUND`
- `public static final EntityLiving.SpawnPlacementType IN_AIR`
- `public static final EntityLiving.SpawnPlacementType IN_WATER`

### Methods
- `public static EntityLiving.SpawnPlacementType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EntityLiving.SpawnPlacementType c : EntityLiving.SpawnPlacementType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EntityLiving.SpawnPlacementType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public boolean canSpawnAt(World world,  BlockPos pos)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## EntityLivingBase

*class* `net.minecraft.entity.EntityLivingBase`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public static final IAttribute SWIM_SPEED`
- `protected static final DataParameter<java.lang.Byte> HAND_STATES`
- `public boolean isSwingInProgress`
- `public EnumHand swingingHand`
- `public int swingProgressInt`
- `public int arrowHitTimer`
- `public int hurtTime`
- `public int maxHurtTime`
- `public float attackedAtYaw`
- `public int deathTime`
- `public float prevSwingProgress`
- `public float swingProgress`
- `protected int ticksSinceLastSwing`
- `public float prevLimbSwingAmount`
- `public float limbSwingAmount`
- `public float limbSwing`
- `public int maxHurtResistantTime`
- `public float prevCameraPitch`
- `public float cameraPitch`
- `public float randomUnused2`
- `public float randomUnused1`
- `public float renderYawOffset`
- `public float prevRenderYawOffset`
- `public float rotationYawHead`
- `public float prevRotationYawHead`
- `public float jumpMovementFactor`
- `protected EntityPlayer attackingPlayer`
- `protected int recentlyHit`
- `protected boolean dead`
- `protected int idleTime`
- `protected float prevOnGroundSpeedFactor`
- `protected float onGroundSpeedFactor`
- `protected float movedDistance`
- `protected float prevMovedDistance`
- `protected float unused180`
- `protected int scoreValue`
- `protected float lastDamage`
- `protected boolean isJumping`
- `public float moveStrafing`
- `public float moveVertical`
- `public float moveForward`
- `public float randomYawVelocity`
- `protected int newPosRotationIncrements`
- `protected double interpTargetX`
- `protected double interpTargetY`
- `protected double interpTargetZ`
- `protected double interpTargetYaw`
- `protected double interpTargetPitch`
- `protected ItemStack activeItemStack`
- `protected int activeItemStackUseCount`
- `protected int ticksElytraFlying`

### Inherited fields
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `public void onKillCommand()`
- `protected void entityInit()`
- `protected void applyEntityAttributes()`
- `protected void updateFallState(double y,  boolean onGroundIn,  IBlockState state,  BlockPos pos)`
- `public boolean canBreatheUnderwater()`
- `public void onEntityUpdate()`
- `protected void frostWalk(BlockPos pos)`
- `public boolean isChild()`
- `protected void onDeathUpdate()`
- `protected boolean canDropLoot()`
- `protected int decreaseAirSupply(int air)`
- `protected int getExperiencePoints(EntityPlayer player)`
- `protected boolean isPlayer()`
- `public java.util.Random getRNG()`
- `public EntityLivingBase getRevengeTarget()`
- `public int getRevengeTimer()`
- `public void setRevengeTarget(EntityLivingBase livingBase)`
- `public EntityLivingBase getLastAttackedEntity()`
- `public int getLastAttackedEntityTime()`
- `public void setLastAttackedEntity(Entity entityIn)`
- `public int getIdleTime()`
- `protected void playEquipSound(ItemStack stack)`
- `public void writeEntityToNBT(NBTTagCompound compound)`
- `public void readEntityFromNBT(NBTTagCompound compound)`
- `protected void updatePotionEffects()`
- `protected void updatePotionMetadata()`
- `public static boolean areAllPotionsAmbient(java.util.Collection<PotionEffect> potionEffects)`
- `protected void resetPotionEffectMetadata()`
- `public void clearActivePotions()`
- `public java.util.Collection<PotionEffect> getActivePotionEffects()`
- `public java.util.Map<Potion,PotionEffect> getActivePotionMap()`
- `public boolean isPotionActive(Potion potionIn)`
- `public PotionEffect getActivePotionEffect(Potion potionIn)`
- `public void addPotionEffect(PotionEffect potioneffectIn)`
- `public boolean isPotionApplicable(PotionEffect potioneffectIn)`
- `public boolean isEntityUndead()`
- `public PotionEffect removeActivePotionEffect(Potion potioneffectin)`
- `public void removePotionEffect(Potion potionIn)`
- `protected void onNewPotionEffect(PotionEffect id)`
- `protected void onChangedPotionEffect(PotionEffect id,  boolean p_70695_2_)`
- `protected void onFinishedPotionEffect(PotionEffect effect)`
- `public void heal(float healAmount)`
- `public final float getHealth()`
- `public void setHealth(float health)`
- `public boolean attackEntityFrom(DamageSource source,  float amount)`
- `protected void blockUsingShield(EntityLivingBase p_190629_1_)`
- `public DamageSource getLastDamageSource()`
- `protected void playHurtSound(DamageSource source)`
- `public void renderBrokenItemStack(ItemStack stack)`
- `public void onDeath(DamageSource cause)`
- `protected void dropLoot(boolean wasRecentlyHit,  int lootingModifier,  DamageSource source)`
- `protected void dropEquipment(boolean wasRecentlyHit,  int lootingModifier)`
- `public void knockBack(Entity entityIn,  float strength,  double xRatio,  double zRatio)`
- `protected SoundEvent getHurtSound(DamageSource damageSourceIn)`
- `protected SoundEvent getDeathSound()`
- `protected SoundEvent getFallSound(int heightIn)`
- `protected void dropFewItems(boolean wasRecentlyHit,  int lootingModifier)`
- `public boolean isOnLadder()`
- `public boolean isEntityAlive()`
- `public void fall(float distance,  float damageMultiplier)`
- `public void performHurtAnimation()`
- `public int getTotalArmorValue()`
- `protected void damageArmor(float damage)`
- `protected void damageShield(float damage)`
- `protected float applyArmorCalculations(DamageSource source,  float damage)`
- `protected float applyPotionDamageCalculations(DamageSource source,  float damage)`
- `protected void damageEntity(DamageSource damageSrc,  float damageAmount)`
- `public CombatTracker getCombatTracker()`
- `public EntityLivingBase getAttackingEntity()`
- `public final float getMaxHealth()`
- `public final int getArrowCountInEntity()`
- `public final void setArrowCountInEntity(int count)`
- `public void swingArm(EnumHand hand)`
- `public void handleStatusUpdate(byte id)`
- `protected void outOfWorld()`
- `protected void updateArmSwingProgress()`
- `public IAttributeInstance getEntityAttribute(IAttribute attribute)`
- `public AbstractAttributeMap getAttributeMap()`
- `public EnumCreatureAttribute getCreatureAttribute()`
- `public ItemStack getHeldItemMainhand()`
- `public ItemStack getHeldItemOffhand()`
- `public ItemStack getHeldItem(EnumHand hand)`
- `public void setHeldItem(EnumHand hand,  ItemStack stack)`
- `public boolean hasItemInSlot(EntityEquipmentSlot p_190630_1_)`
- `public abstract java.lang.Iterable<ItemStack> getArmorInventoryList()`
- `public abstract ItemStack getItemStackFromSlot(EntityEquipmentSlot slotIn)`
- `public abstract void setItemStackToSlot(EntityEquipmentSlot slotIn,  ItemStack stack)`
- `public void setSprinting(boolean sprinting)`
- `protected float getSoundVolume()`
- `protected float getSoundPitch()`
- `protected boolean isMovementBlocked()`
- `public void dismountEntity(Entity entityIn)`
- `public boolean getAlwaysRenderNameTagForRender()`
- `protected float getJumpUpwardsMotion()`
- `protected void jump()`
- `protected void handleJumpWater()`
- `protected void handleJumpLava()`
- `protected float getWaterSlowDown()`
- `public void travel(float strafe,  float vertical,  float forward)`
- `public float getAIMoveSpeed()`
- `public void setAIMoveSpeed(float speedIn)`
- `public boolean attackEntityAsMob(Entity entityIn)`
- `public boolean isPlayerSleeping()`
- `public void onUpdate()`
- `protected float updateDistance(float p_110146_1_,  float p_110146_2_)`
- `public void onLivingUpdate()`
- `protected void updateEntityActionState()`
- `protected void collideWithNearbyEntities()`
- `protected void collideWithEntity(Entity entityIn)`
- `public void dismountRidingEntity()`
- `public void updateRidden()`
- `public void setPositionAndRotationDirect(double x,  double y,  double z,  float yaw,  float pitch,  int posRotationIncrements,  boolean teleport)`
- `public void setJumping(boolean jumping)`
- `public void onItemPickup(Entity entityIn,  int quantity)`
- `public boolean canEntityBeSeen(Entity entityIn)`
- `public Vec3d getLook(float partialTicks)`
- `public float getSwingProgress(float partialTickTime)`
- `public boolean isServerWorld()`
- `public boolean canBeCollidedWith()`
- `public boolean canBePushed()`
- `protected void markVelocityChanged()`
- `public float getRotationYawHead()`
- `public void setRotationYawHead(float rotation)`
- `public void setRenderYawOffset(float offset)`
- `public float getAbsorptionAmount()`
- `public void setAbsorptionAmount(float amount)`
- `public void sendEnterCombat()`
- `public void sendEndCombat()`
- `protected void markPotionsDirty()`
- `public void curePotionEffects(ItemStack curativeItem)`
  Removes all potion effects that have curativeItem as a curative item for its effect
  - param: curativeItem - The itemstack we are using to cure potion effects
- `public boolean shouldRiderFaceForward(EntityPlayer player)`
  Returns true if the entity's rider (EntityPlayer) should face forward when mounted.
   currently only used in vanilla code by pigs.
  - param: player - The player who is riding the entity.
  - returns: If the player should orient the same direction as this entity.
- `public abstract EnumHandSide getPrimaryHand()`
- `public boolean isHandActive()`
- `public EnumHand getActiveHand()`
- `protected void updateActiveHand()`
- `public void setActiveHand(EnumHand hand)`
- `public void notifyDataManagerChange(DataParameter<?> key)`
- `protected void updateItemUse(ItemStack stack,  int eatingParticleCount)`
- `protected void onItemUseFinish()`
- `public ItemStack getActiveItemStack()`
- `public int getItemInUseCount()`
- `public int getItemInUseMaxCount()`
- `public void stopActiveHand()`
- `public void resetActiveHand()`
- `public boolean isActiveItemStackBlocking()`
- `public boolean isElytraFlying()`
- `public int getTicksElytraFlying()`
- `public boolean attemptTeleport(double x,  double y,  double z)`
- `public boolean canBeHitWithPotion()`
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
- `public boolean attackable()`
- `public void setPartying(BlockPos pos,  boolean p_191987_2_)`
- `public void moveRelative(float strafe,  float up,  float forward,  float friction)`

### Inherited methods
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canTriggerWalking`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleWaterMovement`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityEqual`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `move`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `onAddedToWorld`, `onCollideWithPlayer`, `onInsideBlock`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `processInitialInteract`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRotation`, `setSilent`, `setSize`, `setSneaking`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updatePassenger`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntitySpawnPlacementRegistry

*class* `net.minecraft.entity.EntitySpawnPlacementRegistry`

### Methods
- `public static EntityLiving.SpawnPlacementType getPlacementForEntity(java.lang.Class<?> entityClass)`
- `public static void setPlacementType(java.lang.Class<? extends Entity> entityClass,  EntityLiving.SpawnPlacementType placementType)`

## EntityTracker

*class* `net.minecraft.entity.EntityTracker`

### Methods
- `public static long getPositionLong(double value)`
- `public static void updateServerPosition(Entity entityIn,  double x,  double y,  double z)`
- `public void track(Entity entityIn)`
- `public void track(Entity entityIn,  int trackingRange,  int updateFrequency)`
- `public void track(Entity entityIn,  int trackingRange,  int updateFrequency,  boolean sendVelocityUpdates)`
- `public void untrack(Entity entityIn)`
- `public void tick()`
- `public void updateVisibility(EntityPlayerMP player)`
- `public void sendToTracking(Entity entityIn,  Packet<?> packetIn)`
- `public java.util.Set<? extends EntityPlayer> getTrackingPlayers(Entity entity)`
  Get all players tracking the given Entity. The Entity must be part of the World that this Tracker belongs to.
  - param: entity - the Entity
  - returns: all players tracking the Entity
- `public void sendToTrackingAndSelf(Entity entityIn,  Packet<?> packetIn)`
- `public void removePlayerFromTrackers(EntityPlayerMP player)`
- `public void sendLeashedEntitiesInChunk(EntityPlayerMP player,  Chunk chunkIn)`
- `public void setViewDistance(int p_187252_1_)`

## EntityTrackerEntry

*class* `net.minecraft.entity.EntityTrackerEntry`

### Fields
- `public int updateCounter`
- `public boolean playerEntitiesUpdated`
- `public final java.util.Set<EntityPlayerMP> trackingPlayers`

### Methods
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public void updatePlayerList(java.util.List<EntityPlayer> players)`
- `public void sendPacketToTrackedPlayers(Packet<?> packetIn)`
- `public void sendToTrackingAndSelf(Packet<?> packetIn)`
- `public void sendDestroyEntityPacketToTrackedPlayers()`
- `public void removeFromTrackedPlayers(EntityPlayerMP playerMP)`
- `public void updatePlayerEntity(EntityPlayerMP playerMP)`
- `public boolean isVisibleTo(EntityPlayerMP playerMP)`
- `public void updatePlayerEntities(java.util.List<EntityPlayer> players)`
- `public void removeTrackedPlayerSymmetric(EntityPlayerMP playerMP)`
- `public Entity getTrackedEntity()`
- `public void setMaxRange(int maxRangeIn)`
- `public void resetPlayerVisibility()`

## EnumCreatureAttribute

*enum* `net.minecraft.entity.EnumCreatureAttribute`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumCreatureAttribute>

### Fields
- `public static final EnumCreatureAttribute UNDEFINED`
- `public static final EnumCreatureAttribute UNDEAD`
- `public static final EnumCreatureAttribute ARTHROPOD`
- `public static final EnumCreatureAttribute ILLAGER`

### Methods
- `public static EnumCreatureAttribute[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumCreatureAttribute c : EnumCreatureAttribute.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumCreatureAttribute valueOf(java.lang.String name)`
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

## EnumCreatureType

*enum* `net.minecraft.entity.EnumCreatureType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumCreatureType>

### Fields
- `public static final EnumCreatureType MONSTER`
- `public static final EnumCreatureType CREATURE`
- `public static final EnumCreatureType AMBIENT`
- `public static final EnumCreatureType WATER_CREATURE`

### Methods
- `public static EnumCreatureType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumCreatureType c : EnumCreatureType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumCreatureType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public java.lang.Class<? extends IAnimals> getCreatureClass()`
- `public int getMaxNumberOfCreature()`
- `public boolean getPeacefulCreature()`
- `public boolean getAnimal()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## IEntityLivingData

*interface* `net.minecraft.entity.IEntityLivingData`

## IEntityMultiPart

*interface* `net.minecraft.entity.IEntityMultiPart`

### Methods
- `World getWorld()`
- `boolean attackEntityFromPart(MultiPartEntityPart dragonPart,  DamageSource source,  float damage)`

## IEntityOwnable

*interface* `net.minecraft.entity.IEntityOwnable`

### Methods
- `java.util.UUID getOwnerId()`
- `Entity getOwner()`

## IJumpingMount

*interface* `net.minecraft.entity.IJumpingMount`

### Methods
- `void setJumpPower(int jumpPowerIn)`
- `boolean canJump()`
- `void handleStartJump(int p_184775_1_)`
- `void handleStopJump()`

## IMerchant

*interface* `net.minecraft.entity.IMerchant`

### Methods
- `void setCustomer(EntityPlayer player)`
- `EntityPlayer getCustomer()`
- `MerchantRecipeList getRecipes(EntityPlayer player)`
- `void setRecipes(MerchantRecipeList recipeList)`
- `void useRecipe(MerchantRecipe recipe)`
- `void verifySellingItem(ItemStack stack)`
- `ITextComponent getDisplayName()`
- `World getWorld()`
- `BlockPos getPos()`

## INpc

*interface* `net.minecraft.entity.INpc`

All Superinterfaces: IAnimals

## IProjectile

*interface* `net.minecraft.entity.IProjectile`

### Methods
- `void shoot(double x,  double y,  double z,  float velocity,  float inaccuracy)`

## IRangedAttackMob

*interface* `net.minecraft.entity.IRangedAttackMob`

### Methods
- `void attackEntityWithRangedAttack(EntityLivingBase target,  float distanceFactor)`
- `void setSwingingArms(boolean swingingArms)`

## MoverType

*enum* `net.minecraft.entity.MoverType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<MoverType>

### Fields
- `public static final MoverType SELF`
- `public static final MoverType PLAYER`
- `public static final MoverType PISTON`
- `public static final MoverType SHULKER_BOX`
- `public static final MoverType SHULKER`

### Methods
- `public static MoverType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (MoverType c : MoverType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static MoverType valueOf(java.lang.String name)`
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

## MultiPartEntityPart

*class* `net.minecraft.entity.MultiPartEntityPart`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public final IEntityMultiPart parent`
- `public final java.lang.String partName`

### Inherited fields
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `protected void entityInit()`
- `protected void readEntityFromNBT(NBTTagCompound compound)`
- `protected void writeEntityToNBT(NBTTagCompound compound)`
- `public boolean canBeCollidedWith()`
- `public boolean attackEntityFrom(DamageSource source,  float amount)`
- `public boolean isEntityEqual(Entity entityIn)`

### Inherited methods
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyEntityCollision`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBePushed`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canTriggerWalking`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `dismountRidingEntity`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `doWaterSplashEffect`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `fall`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCapability`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDisplayName`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getEyeHeight`, `getFireImmuneTicks`, `getFlag`, `getForward`, `getHeldEquipment`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLook`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMaxInPortalTime`, `getMirroredYaw`, `getMountedYOffset`, `getName`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPortalCooldown`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getRotationYawHead`, `getServer`, `getSoundCategory`, `getSplashSound`, `getSwimSound`, `getTags`, `getTeam`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `getYOffset`, `handleStatusUpdate`, `handleWaterMovement`, `hasCapability`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityAlive`, `isEntityInsideOpaqueBlock`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInvisibleToPlayer`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isPushedByWater`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `markVelocityChanged`, `move`, `moveRelative`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `notifyDataManagerChange`, `onAddedToWorld`, `onCollideWithPlayer`, `onEntityUpdate`, `onInsideBlock`, `onKillCommand`, `onKillEntity`, `onRemovedFromWorld`, `onStruckByLightning`, `onUpdate`, `outOfWorld`, `performHurtAnimation`, `playFlySound`, `playSound`, `playStepSound`, `preparePlayerToSpawn`, `processInitialInteract`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `replaceItemInInventory`, `resetEntityId`, `resetPositionToBB`, `sendCommandFeedback`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDead`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setInWeb`, `setItemStackToSlot`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndRotationDirect`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRenderYawOffset`, `setRotation`, `setRotationYawHead`, `setSilent`, `setSize`, `setSneaking`, `setSprinting`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updateFallState`, `updatePassenger`, `updateRidden`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## NpcMerchant

*class* `net.minecraft.entity.NpcMerchant`

All Implemented Interfaces: IMerchant

### Methods
- `public EntityPlayer getCustomer()`
- `public void setCustomer(EntityPlayer player)`
- `public MerchantRecipeList getRecipes(EntityPlayer player)`
- `public void setRecipes(MerchantRecipeList recipeList)`
- `public void useRecipe(MerchantRecipe recipe)`
- `public void verifySellingItem(ItemStack stack)`
- `public ITextComponent getDisplayName()`
- `public World getWorld()`
- `public BlockPos getPos()`

## SharedMonsterAttributes

*class* `net.minecraft.entity.SharedMonsterAttributes`

### Fields
- `public static final IAttribute MAX_HEALTH`
- `public static final IAttribute FOLLOW_RANGE`
- `public static final IAttribute KNOCKBACK_RESISTANCE`
- `public static final IAttribute MOVEMENT_SPEED`
- `public static final IAttribute FLYING_SPEED`
- `public static final IAttribute ATTACK_DAMAGE`
- `public static final IAttribute ATTACK_SPEED`
- `public static final IAttribute ARMOR`
- `public static final IAttribute ARMOR_TOUGHNESS`
- `public static final IAttribute LUCK`

### Methods
- `public static NBTTagList writeBaseAttributeMapToNBT(AbstractAttributeMap map)`
- `public static NBTTagCompound writeAttributeModifierToNBT(AttributeModifier modifier)`
- `public static void setAttributeModifiers(AbstractAttributeMap map,  NBTTagList list)`
- `public static AttributeModifier readAttributeModifierFromNBT(NBTTagCompound compound)`
