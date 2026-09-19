# net.minecraft.entity.player

- [EntityPlayer](#entityplayer)
- [EntityPlayer.EnumChatVisibility](#entityplayer.enumchatvisibility)
- [EntityPlayer.SleepResult](#entityplayer.sleepresult)
- [EntityPlayerMP](#entityplayermp)
- [EnumPlayerModelParts](#enumplayermodelparts)
- [InventoryPlayer](#inventoryplayer)
- [PlayerCapabilities](#playercapabilities)
## EntityPlayer

*class* `net.minecraft.entity.player.EntityPlayer`

All Implemented Interfaces: ICommandSender, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public static final java.lang.String PERSISTED_NBT_TAG` (= "PlayerPersisted")
- `protected java.util.HashMap<java.lang.Integer,BlockPos> spawnChunkMap`
- `protected java.util.HashMap<java.lang.Integer,java.lang.Boolean> spawnForcedMap`
- `public float eyeHeight`
- `public static final IAttribute REACH_DISTANCE`
- `protected static final DataParameter<java.lang.Byte> PLAYER_MODEL_FLAG`
- `protected static final DataParameter<java.lang.Byte> MAIN_HAND`
- `protected static final DataParameter<NBTTagCompound> LEFT_SHOULDER_ENTITY`
- `protected static final DataParameter<NBTTagCompound> RIGHT_SHOULDER_ENTITY`
- `public InventoryPlayer inventory`
- `protected InventoryEnderChest enderChest`
- `public Container inventoryContainer`
- `public Container openContainer`
- `protected FoodStats foodStats`
- `protected int flyToggleTimer`
- `public float prevCameraYaw`
- `public float cameraYaw`
- `public int xpCooldown`
- `public double prevChasingPosX`
- `public double prevChasingPosY`
- `public double prevChasingPosZ`
- `public double chasingPosX`
- `public double chasingPosY`
- `public double chasingPosZ`
- `protected boolean sleeping`
- `public BlockPos bedLocation`
- `public float renderOffsetX`
- `public float renderOffsetY`
- `public float renderOffsetZ`
- `protected BlockPos spawnPos`
- `protected boolean spawnForced`
- `public PlayerCapabilities capabilities`
- `public int experienceLevel`
- `public int experienceTotal`
- `public float experience`
- `protected int xpSeed`
- `protected float speedInAir`
- `public EntityFishHook fishEntity`

### Inherited fields
- from `net.minecraft.entity.EntityLivingBase`: `activeItemStack`, `activeItemStackUseCount`, `arrowHitTimer`, `attackedAtYaw`, `attackingPlayer`, `cameraPitch`, `dead`, `deathTime`, `HAND_STATES`, `hurtTime`, `idleTime`, `interpTargetPitch`, `interpTargetX`, `interpTargetY`, `interpTargetYaw`, `interpTargetZ`, `isJumping`, `isSwingInProgress`, `jumpMovementFactor`, `lastDamage`, `limbSwing`, `limbSwingAmount`, `maxHurtResistantTime`, `maxHurtTime`, `movedDistance`, `moveForward`, `moveStrafing`, `moveVertical`, `newPosRotationIncrements`, `onGroundSpeedFactor`, `prevCameraPitch`, `prevLimbSwingAmount`, `prevMovedDistance`, `prevOnGroundSpeedFactor`, `prevRenderYawOffset`, `prevRotationYawHead`, `prevSwingProgress`, `randomUnused1`, `randomUnused2`, `randomYawVelocity`, `recentlyHit`, `renderYawOffset`, `rotationYawHead`, `scoreValue`, `SWIM_SPEED`, `swingingHand`, `swingProgress`, `swingProgressInt`, `ticksElytraFlying`, `ticksSinceLastSwing`, `unused180`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `protected CooldownTracker createCooldownTracker()`
- `protected void applyEntityAttributes()`
- `protected void entityInit()`
- `public void onUpdate()`
- `protected void updateSize()`
- `public int getMaxInPortalTime()`
- `protected SoundEvent getSwimSound()`
- `protected SoundEvent getSplashSound()`
- `public int getPortalCooldown()`
- `public void playSound(SoundEvent soundIn,  float volume,  float pitch)`
- `public SoundCategory getSoundCategory()`
- `protected int getFireImmuneTicks()`
- `public void handleStatusUpdate(byte id)`
- `protected boolean isMovementBlocked()`
- `public void closeScreen()`
- `public void updateRidden()`
- `public void preparePlayerToSpawn()`
- `protected void updateEntityActionState()`
- `public void onLivingUpdate()`
- `public int getScore()`
- `public void setScore(int scoreIn)`
- `public void addScore(int scoreIn)`
- `public void onDeath(DamageSource cause)`
- `protected void destroyVanishingCursedItems()`
- `protected SoundEvent getHurtSound(DamageSource damageSourceIn)`
- `protected SoundEvent getDeathSound()`
- `public EntityItem dropItem(boolean dropAll)`
- `public EntityItem dropItem(ItemStack itemStackIn,  boolean unused)`
- `public EntityItem dropItem(ItemStack droppedItem,  boolean dropAround,  boolean traceItem)`
- `public ItemStack dropItemAndGetStack(EntityItem p_184816_1_)`
- `@Deprecated public float getDigSpeed(IBlockState state)` (deprecated)
  Deprecated.
- `public float getDigSpeed(IBlockState state,  BlockPos pos)`
- `public boolean canHarvestBlock(IBlockState state)`
- `public static void registerFixesPlayer(DataFixer fixer)`
- `public void readEntityFromNBT(NBTTagCompound compound)`
- `public void writeEntityToNBT(NBTTagCompound compound)`
- `public boolean attackEntityFrom(DamageSource source,  float amount)`
- `protected void blockUsingShield(EntityLivingBase p_190629_1_)`
- `public boolean canAttackPlayer(EntityPlayer other)`
- `protected void damageArmor(float damage)`
- `protected void damageShield(float damage)`
- `public float getArmorVisibility()`
- `protected void damageEntity(DamageSource damageSrc,  float damageAmount)`
- `public void openEditSign(TileEntitySign signTile)`
- `public void displayGuiEditCommandCart(CommandBlockBaseLogic commandBlock)`
- `public void displayGuiCommandBlock(TileEntityCommandBlock commandBlock)`
- `public void openEditStructure(TileEntityStructure structure)`
- `public void displayVillagerTradeGui(IMerchant villager)`
- `public void displayGUIChest(IInventory chestInventory)`
- `public void openGuiHorseInventory(AbstractHorse horse,  IInventory inventoryIn)`
- `public void displayGui(IInteractionObject guiOwner)`
- `public void openBook(ItemStack stack,  EnumHand hand)`
- `public EnumActionResult interactOn(Entity p_190775_1_,  EnumHand p_190775_2_)`
- `public double getYOffset()`
- `public void dismountRidingEntity()`
- `public void attackTargetEntityWithCurrentItem(Entity targetEntity)`
- `public void disableShield(boolean p_190777_1_)`
- `public void onCriticalHit(Entity entityHit)`
- `public void onEnchantmentCritical(Entity entityHit)`
- `public void spawnSweepParticles()`
- `public void respawnPlayer()`
- `public void setDead()`
- `public boolean isEntityInsideOpaqueBlock()`
- `public boolean isUser()`
- `public GameProfile getGameProfile()`
- `public EntityPlayer.SleepResult trySleep(BlockPos bedLocation)`
- `public void wakeUpPlayer(boolean immediately,  boolean updateWorldFlag,  boolean setSpawn)`
- `public static BlockPos getBedSpawnLocation(World worldIn,  BlockPos bedLocation,  boolean forceSpawn)`
- `public float getBedOrientationInDegrees()`
- `public boolean isPlayerSleeping()`
- `public boolean isPlayerFullyAsleep()`
- `public int getSleepTimer()`
- `public void sendStatusMessage(ITextComponent chatComponent,  boolean actionBar)`
- `public BlockPos getBedLocation()`
- `@Deprecated public boolean isSpawnForced()` (deprecated)
  Deprecated.
- `public void setSpawnPoint(BlockPos pos,  boolean forced)`
- `public void addStat(StatBase stat)`
- `public void addStat(StatBase stat,  int amount)`
- `public void takeStat(StatBase stat)`
- `public void unlockRecipes(java.util.List<IRecipe> p_192021_1_)`
- `public void unlockRecipes(ResourceLocation[] p_193102_1_)`
- `public void resetRecipes(java.util.List<IRecipe> p_192022_1_)`
- `public void jump()`
- `public void travel(float strafe,  float vertical,  float forward)`
- `public float getAIMoveSpeed()`
- `public void addMovementStat(double p_71000_1_,  double p_71000_3_,  double p_71000_5_)`
- `public void fall(float distance,  float damageMultiplier)`
- `protected void doWaterSplashEffect()`
- `protected SoundEvent getFallSound(int heightIn)`
- `public void onKillEntity(EntityLivingBase entityLivingIn)`
- `public void setInWeb()`
- `public void addExperience(int amount)`
- `public int getXPSeed()`
- `public void onEnchant(ItemStack enchantedItem,  int cost)`
- `public void addExperienceLevel(int levels)`
- `public int xpBarCap()`
- `public void addExhaustion(float exhaustion)`
- `public FoodStats getFoodStats()`
- `public boolean canEat(boolean ignoreHunger)`
- `public boolean shouldHeal()`
- `public boolean isAllowEdit()`
- `public boolean canPlayerEdit(BlockPos pos,  EnumFacing facing,  ItemStack stack)`
- `protected int getExperiencePoints(EntityPlayer player)`
- `protected boolean isPlayer()`
- `public boolean getAlwaysRenderNameTagForRender()`
- `protected boolean canTriggerWalking()`
- `public void sendPlayerAbilities()`
- `public void setGameType(GameType gameType)`
- `public java.lang.String getName()`
- `public InventoryEnderChest getInventoryEnderChest()`
- `public ItemStack getItemStackFromSlot(EntityEquipmentSlot slotIn)`
- `public void setItemStackToSlot(EntityEquipmentSlot slotIn,  ItemStack stack)`
- `public boolean addItemStackToInventory(ItemStack p_191521_1_)`
- `public java.lang.Iterable<ItemStack> getHeldEquipment()`
- `public java.lang.Iterable<ItemStack> getArmorInventoryList()`
- `public boolean addShoulderEntity(NBTTagCompound p_192027_1_)`
- `protected void spawnShoulderEntities()`
- `public boolean isInvisibleToPlayer(EntityPlayer player)`
- `public abstract boolean isSpectator()`
- `public abstract boolean isCreative()`
- `public boolean isPushedByWater()`
- `public Scoreboard getWorldScoreboard()`
- `public Team getTeam()`
- `public ITextComponent getDisplayName()`
- `public float getEyeHeight()`
- `public void setAbsorptionAmount(float amount)`
- `public float getAbsorptionAmount()`
- `public static java.util.UUID getUUID(GameProfile profile)`
- `public static java.util.UUID getOfflineUUID(java.lang.String username)`
- `public boolean canOpen(LockCode code)`
- `public boolean isWearing(EnumPlayerModelParts part)`
- `public boolean sendCommandFeedback()`
- `public boolean replaceItemInInventory(int inventorySlot,  ItemStack itemStackIn)`
- `public boolean hasReducedDebug()`
- `public void setReducedDebug(boolean reducedDebug)`
- `public EnumHandSide getPrimaryHand()`
- `public void setPrimaryHand(EnumHandSide hand)`
- `public NBTTagCompound getLeftShoulderEntity()`
- `protected void setLeftShoulderEntity(NBTTagCompound tag)`
- `public NBTTagCompound getRightShoulderEntity()`
- `protected void setRightShoulderEntity(NBTTagCompound tag)`
- `public float getCooldownPeriod()`
- `public float getCooledAttackStrength(float adjustTicks)`
- `public void resetCooldown()`
- `public CooldownTracker getCooldownTracker()`
- `public void applyEntityCollision(Entity entityIn)`
- `public float getLuck()`
- `public boolean canUseCommandBlock()`
- `public void openGui(java.lang.Object mod,  int modGuiId,  World world,  int x,  int y,  int z)`
  Opens a GUI with this player, uses FML's IGuiHandler system.
   Allows for extension by modders.
  - param: mod - The mod trying to open a GUI
  - param: modGuiId - GUI ID
  - param: world - Current World
  - param: x - Passed directly to IGuiHandler, data meaningless Typically world X position
  - param: y - Passed directly to IGuiHandler, data meaningless Typically world Y position
  - param: z - Passed directly to IGuiHandler, data meaningless Typically world Z position
- `public BlockPos getBedLocation(int dimension)`
  A dimension aware version of getBedLocation.
  - param: dimension - The dimension to get the bed spawn for
  - returns: The player specific spawn location for the dimension. May be null.
- `public boolean isSpawnForced(int dimension)`
  A dimension aware version of isSpawnForced.
   Noramally isSpawnForced is used to determine if the respawn system should check for a bed or not.
   This just extends that to be dimension aware.
  - param: dimension - The dimension to get whether to check for a bed before spawning for
  - returns: The player specific spawn location for the dimension. May be null.
- `public void setSpawnChunk(BlockPos pos,  boolean forced,  int dimension)`
  A dimension aware version of setSpawnChunk.
   This functions identically, but allows you to specify which dimension to affect, rather than affecting the player's current dimension.
  - param: pos - The spawn point to set as the player-specific spawn point for the dimension
  - param: forced - Whether or not the respawn code should check for a bed at this location (true means it won't check for a bed)
  - param: dimension - Which dimension to apply the player-specific respawn point to
- `public float getDefaultEyeHeight()`
  Returns the default eye height of the player
  - returns: player default eye height
- `public java.lang.String getDisplayNameString()`
  Get the currently computed display name, cached for efficiency.
  - returns: the current display name
- `public void refreshDisplayName()`
  Force the displayed name to refresh
- `public void addPrefix(ITextComponent prefix)`
  Add a prefix to the player's username in chat
  - param: prefix - The prefix
- `public void addSuffix(ITextComponent suffix)`
  Add a suffix to the player's username in chat
  - param: suffix - The suffix
- `public java.util.Collection<ITextComponent> getPrefixes()`
- `public java.util.Collection<ITextComponent> getSuffixes()`
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
- `public boolean hasSpawnDimension()`
- `public int getSpawnDimension()`
- `public void setSpawnDimension(java.lang.Integer dimension)`

### Inherited methods
- from `net.minecraft.entity.EntityLivingBase`: `addPotionEffect`, `applyArmorCalculations`, `applyPotionDamageCalculations`, `areAllPotionsAmbient`, `attackable`, `attackEntityAsMob`, `attemptTeleport`, `canBeCollidedWith`, `canBeHitWithPotion`, `canBePushed`, `canBreatheUnderwater`, `canDropLoot`, `canEntityBeSeen`, `clearActivePotions`, `collideWithEntity`, `collideWithNearbyEntities`, `curePotionEffects`, `decreaseAirSupply`, `dismountEntity`, `dropEquipment`, `dropFewItems`, `dropLoot`, `frostWalk`, `getActiveHand`, `getActiveItemStack`, `getActivePotionEffect`, `getActivePotionEffects`, `getActivePotionMap`, `getArrowCountInEntity`, `getAttackingEntity`, `getAttributeMap`, `getCombatTracker`, `getCreatureAttribute`, `getEntityAttribute`, `getHealth`, `getHeldItem`, `getHeldItemMainhand`, `getHeldItemOffhand`, `getIdleTime`, `getItemInUseCount`, `getItemInUseMaxCount`, `getJumpUpwardsMotion`, `getLastAttackedEntity`, `getLastAttackedEntityTime`, `getLastDamageSource`, `getLook`, `getMaxHealth`, `getRevengeTarget`, `getRevengeTimer`, `getRNG`, `getRotationYawHead`, `getSoundPitch`, `getSoundVolume`, `getSwingProgress`, `getTicksElytraFlying`, `getTotalArmorValue`, `getWaterSlowDown`, `handleJumpLava`, `handleJumpWater`, `hasItemInSlot`, `heal`, `isActiveItemStackBlocking`, `isChild`, `isElytraFlying`, `isEntityAlive`, `isEntityUndead`, `isHandActive`, `isOnLadder`, `isPotionActive`, `isPotionApplicable`, `isServerWorld`, `knockBack`, `markPotionsDirty`, `markVelocityChanged`, `moveRelative`, `notifyDataManagerChange`, `onChangedPotionEffect`, `onDeathUpdate`, `onEntityUpdate`, `onFinishedPotionEffect`, `onItemPickup`, `onItemUseFinish`, `onKillCommand`, `onNewPotionEffect`, `outOfWorld`, `performHurtAnimation`, `playEquipSound`, `playHurtSound`, `removeActivePotionEffect`, `removePotionEffect`, `renderBrokenItemStack`, `resetActiveHand`, `resetPotionEffectMetadata`, `sendEndCombat`, `sendEnterCombat`, `setActiveHand`, `setAIMoveSpeed`, `setArrowCountInEntity`, `setHealth`, `setHeldItem`, `setJumping`, `setLastAttackedEntity`, `setPartying`, `setPositionAndRotationDirect`, `setRenderYawOffset`, `setRevengeTarget`, `setRotationYawHead`, `setSprinting`, `shouldRiderFaceForward`, `stopActiveHand`, `swingArm`, `updateActiveHand`, `updateArmSwingProgress`, `updateDistance`, `updateFallState`, `updateItemUse`, `updatePotionEffects`, `updatePotionMetadata`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyOrientationToEntity`, `applyPlayerInteraction`, `awardKillScore`, `canBeAttackedWithItem`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `canUseCommand`, `changeDimension`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `decrementTimeUntilPortal`, `deserializeNBT`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getFlag`, `getForward`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMirroredYaw`, `getMountedYOffset`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPosition`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getServer`, `getTags`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `handleWaterMovement`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityEqual`, `isEntityInvulnerable`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSpectatedByPlayer`, `isSprinting`, `isWet`, `makeFlySound`, `move`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `onAddedToWorld`, `onCollideWithPlayer`, `onInsideBlock`, `onRemovedFromWorld`, `onStruckByLightning`, `playFlySound`, `playStepSound`, `processInitialInteract`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `resetEntityId`, `resetPositionToBB`, `sendMessage`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionAndUpdate`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRotation`, `setSilent`, `setSize`, `setSneaking`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `startRiding`, `toString`, `turn`, `updatePassenger`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EntityPlayer.EnumChatVisibility

*enum* `net.minecraft.entity.player.EntityPlayer.EnumChatVisibility`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EntityPlayer.EnumChatVisibility>

Enclosing class: EntityPlayer

### Fields
- `public static final EntityPlayer.EnumChatVisibility FULL`
- `public static final EntityPlayer.EnumChatVisibility SYSTEM`
- `public static final EntityPlayer.EnumChatVisibility HIDDEN`

### Methods
- `public static EntityPlayer.EnumChatVisibility[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EntityPlayer.EnumChatVisibility c : EntityPlayer.EnumChatVisibility.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EntityPlayer.EnumChatVisibility valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public int getChatVisibility()`
- `public static EntityPlayer.EnumChatVisibility getEnumChatVisibility(int id)`
- `public java.lang.String getResourceKey()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## EntityPlayer.SleepResult

*enum* `net.minecraft.entity.player.EntityPlayer.SleepResult`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EntityPlayer.SleepResult>

Enclosing class: EntityPlayer

### Fields
- `public static final EntityPlayer.SleepResult OK`
- `public static final EntityPlayer.SleepResult NOT_POSSIBLE_HERE`
- `public static final EntityPlayer.SleepResult NOT_POSSIBLE_NOW`
- `public static final EntityPlayer.SleepResult TOO_FAR_AWAY`
- `public static final EntityPlayer.SleepResult OTHER_PROBLEM`
- `public static final EntityPlayer.SleepResult NOT_SAFE`

### Methods
- `public static EntityPlayer.SleepResult[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EntityPlayer.SleepResult c : EntityPlayer.SleepResult.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EntityPlayer.SleepResult valueOf(java.lang.String name)`
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

## EntityPlayerMP

*class* `net.minecraft.entity.player.EntityPlayerMP`

All Implemented Interfaces: ICommandSender, IContainerListener, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public NetHandlerPlayServer connection`
- `public final MinecraftServer mcServer`
- `public final PlayerInteractionManager interactionManager`
- `public double managedPosX`
- `public double managedPosZ`
- `public int currentWindowId`
- `public boolean isChangingQuantityOnly`
- `public int ping`
- `public boolean queuedEndExit`

### Inherited fields
- from `net.minecraft.entity.player.EntityPlayer`: `bedLocation`, `cameraYaw`, `capabilities`, `chasingPosX`, `chasingPosY`, `chasingPosZ`, `enderChest`, `experience`, `experienceLevel`, `experienceTotal`, `eyeHeight`, `fishEntity`, `flyToggleTimer`, `foodStats`, `inventory`, `inventoryContainer`, `LEFT_SHOULDER_ENTITY`, `MAIN_HAND`, `openContainer`, `PERSISTED_NBT_TAG`, `PLAYER_MODEL_FLAG`, `prevCameraYaw`, `prevChasingPosX`, `prevChasingPosY`, `prevChasingPosZ`, `REACH_DISTANCE`, `renderOffsetX`, `renderOffsetY`, `renderOffsetZ`, `RIGHT_SHOULDER_ENTITY`, `sleeping`, `spawnChunkMap`, `spawnForced`, `spawnForcedMap`, `spawnPos`, `speedInAir`, `xpCooldown`, `xpSeed`
- from `net.minecraft.entity.EntityLivingBase`: `activeItemStack`, `activeItemStackUseCount`, `arrowHitTimer`, `attackedAtYaw`, `attackingPlayer`, `cameraPitch`, `dead`, `deathTime`, `HAND_STATES`, `hurtTime`, `idleTime`, `interpTargetPitch`, `interpTargetX`, `interpTargetY`, `interpTargetYaw`, `interpTargetZ`, `isJumping`, `isSwingInProgress`, `jumpMovementFactor`, `lastDamage`, `limbSwing`, `limbSwingAmount`, `maxHurtResistantTime`, `maxHurtTime`, `movedDistance`, `moveForward`, `moveStrafing`, `moveVertical`, `newPosRotationIncrements`, `onGroundSpeedFactor`, `prevCameraPitch`, `prevLimbSwingAmount`, `prevMovedDistance`, `prevOnGroundSpeedFactor`, `prevRenderYawOffset`, `prevRotationYawHead`, `prevSwingProgress`, `randomUnused1`, `randomUnused2`, `randomYawVelocity`, `recentlyHit`, `renderYawOffset`, `rotationYawHead`, `scoreValue`, `SWIM_SPEED`, `swingingHand`, `swingProgress`, `swingProgressInt`, `ticksElytraFlying`, `ticksSinceLastSwing`, `unused180`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `public void readEntityFromNBT(NBTTagCompound compound)`
- `public static void registerFixesPlayerMP(DataFixer p_191522_0_)`
- `public void writeEntityToNBT(NBTTagCompound compound)`
- `public void addExperienceLevel(int levels)`
- `public void onEnchant(ItemStack enchantedItem,  int cost)`
- `public void addSelfToInternalCraftingInventory()`
- `public void sendEnterCombat()`
- `public void sendEndCombat()`
- `protected void onInsideBlock(IBlockState p_191955_1_)`
- `protected CooldownTracker createCooldownTracker()`
- `public void onUpdate()`
- `public void onUpdateEntity()`
- `public void onDeath(DamageSource cause)`
- `public void awardKillScore(Entity p_191956_1_,  int p_191956_2_,  DamageSource p_191956_3_)`
- `public boolean attackEntityFrom(DamageSource source,  float amount)`
- `public boolean canAttackPlayer(EntityPlayer other)`
- `public Entity changeDimension(int dimensionIn,  ITeleporter teleporter)`
- `public boolean isSpectatedByPlayer(EntityPlayerMP player)`
- `public void onItemPickup(Entity entityIn,  int quantity)`
- `public EntityPlayer.SleepResult trySleep(BlockPos bedLocation)`
- `public void wakeUpPlayer(boolean immediately,  boolean updateWorldFlag,  boolean setSpawn)`
- `public boolean startRiding(Entity entityIn,  boolean force)`
- `public void dismountRidingEntity()`
- `public boolean isEntityInvulnerable(DamageSource source)`
- `protected void updateFallState(double y,  boolean onGroundIn,  IBlockState state,  BlockPos pos)`
- `protected void frostWalk(BlockPos pos)`
- `public void handleFalling(double y,  boolean onGroundIn)`
- `public void openEditSign(TileEntitySign signTile)`
- `public void getNextWindowId()`
- `public void displayGui(IInteractionObject guiOwner)`
- `public void displayGUIChest(IInventory chestInventory)`
- `public void displayVillagerTradeGui(IMerchant villager)`
- `public void openGuiHorseInventory(AbstractHorse horse,  IInventory inventoryIn)`
- `public void openBook(ItemStack stack,  EnumHand hand)`
- `public void displayGuiCommandBlock(TileEntityCommandBlock commandBlock)`
- `public void sendSlotContents(Container containerToSend,  int slotInd,  ItemStack stack)`
- `public void sendContainerToPlayer(Container containerIn)`
- `public void sendAllContents(Container containerToSend,  NonNullList<ItemStack> itemsList)`
- `public void sendWindowProperty(Container containerIn,  int varToUpdate,  int newValue)`
- `public void sendAllWindowProperties(Container containerIn,  IInventory inventory)`
- `public void closeScreen()`
- `public void updateHeldItem()`
- `public void closeContainer()`
- `public void setEntityActionState(float strafe,  float forward,  boolean jumping,  boolean sneaking)`
- `public void addStat(StatBase stat,  int amount)`
- `public void takeStat(StatBase stat)`
- `public void unlockRecipes(java.util.List<IRecipe> p_192021_1_)`
- `public void unlockRecipes(ResourceLocation[] p_193102_1_)`
- `public void resetRecipes(java.util.List<IRecipe> p_192022_1_)`
- `public void mountEntityAndWakeUp()`
- `public boolean hasDisconnected()`
- `public void setPlayerHealthUpdated()`
- `public void sendStatusMessage(ITextComponent chatComponent,  boolean actionBar)`
- `protected void onItemUseFinish()`
- `public void copyFrom(EntityPlayerMP that,  boolean keepEverything)`
- `protected void onNewPotionEffect(PotionEffect id)`
- `protected void onChangedPotionEffect(PotionEffect id,  boolean p_70695_2_)`
- `protected void onFinishedPotionEffect(PotionEffect effect)`
- `public void setPositionAndUpdate(double x,  double y,  double z)`
- `public void onCriticalHit(Entity entityHit)`
- `public void onEnchantmentCritical(Entity entityHit)`
- `public void sendPlayerAbilities()`
- `public WorldServer getServerWorld()`
- `public void setGameType(GameType gameType)`
- `public boolean isSpectator()`
- `public boolean isCreative()`
- `public void sendMessage(ITextComponent component)`
- `public boolean canUseCommand(int permLevel,  java.lang.String commandName)`
- `public java.lang.String getPlayerIP()`
- `public void handleClientSettings(CPacketClientSettings packetIn)`
- `public EntityPlayer.EnumChatVisibility getChatVisibility()`
- `public void loadResourcePack(java.lang.String url,  java.lang.String hash)`
- `public BlockPos getPosition()`
- `public void markPlayerActive()`
- `public StatisticsManagerServer getStatFile()`
- `public RecipeBookServer getRecipeBook()`
- `public void removeEntity(Entity entityIn)`
- `public void addEntity(Entity entityIn)`
- `protected void updatePotionMetadata()`
- `public Entity getSpectatingEntity()`
- `public void setSpectatingEntity(Entity entityToSpectate)`
- `protected void decrementTimeUntilPortal()`
- `public void attackTargetEntityWithCurrentItem(Entity targetEntity)`
- `public long getLastActiveTime()`
- `public ITextComponent getTabListDisplayName()`
- `public void swingArm(EnumHand hand)`
- `public boolean isInvulnerableDimensionChange()`
- `public void clearInvulnerableDimensionChange()`
- `public void setElytraFlying()`
- `public void clearElytraFlying()`
- `public PlayerAdvancements getAdvancements()`
- `public Vec3d getEnteredNetherPosition()`

### Inherited methods
- from `net.minecraft.entity.player.EntityPlayer`: `addExhaustion`, `addExperience`, `addItemStackToInventory`, `addMovementStat`, `addPrefix`, `addScore`, `addShoulderEntity`, `addStat`, `addSuffix`, `applyEntityAttributes`, `applyEntityCollision`, `blockUsingShield`, `canEat`, `canHarvestBlock`, `canOpen`, `canPlayerEdit`, `canTriggerWalking`, `canUseCommandBlock`, `damageArmor`, `damageEntity`, `damageShield`, `destroyVanishingCursedItems`, `disableShield`, `displayGuiEditCommandCart`, `doWaterSplashEffect`, `dropItem`, `dropItem`, `dropItem`, `dropItemAndGetStack`, `entityInit`, `fall`, `getAbsorptionAmount`, `getAIMoveSpeed`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getArmorVisibility`, `getBedLocation`, `getBedLocation`, `getBedOrientationInDegrees`, `getBedSpawnLocation`, `getCapability`, `getCooldownPeriod`, `getCooldownTracker`, `getCooledAttackStrength`, `getDeathSound`, `getDefaultEyeHeight`, `getDigSpeed`, `getDigSpeed`, `getDisplayName`, `getDisplayNameString`, `getExperiencePoints`, `getEyeHeight`, `getFallSound`, `getFireImmuneTicks`, `getFoodStats`, `getGameProfile`, `getHeldEquipment`, `getHurtSound`, `getInventoryEnderChest`, `getItemStackFromSlot`, `getLeftShoulderEntity`, `getLuck`, `getMaxInPortalTime`, `getName`, `getOfflineUUID`, `getPortalCooldown`, `getPrefixes`, `getPrimaryHand`, `getRightShoulderEntity`, `getScore`, `getSleepTimer`, `getSoundCategory`, `getSpawnDimension`, `getSplashSound`, `getSuffixes`, `getSwimSound`, `getTeam`, `getUUID`, `getWorldScoreboard`, `getXPSeed`, `getYOffset`, `handleStatusUpdate`, `hasCapability`, `hasReducedDebug`, `hasSpawnDimension`, `interactOn`, `isAllowEdit`, `isEntityInsideOpaqueBlock`, `isInvisibleToPlayer`, `isMovementBlocked`, `isPlayer`, `isPlayerFullyAsleep`, `isPlayerSleeping`, `isPushedByWater`, `isSpawnForced`, `isSpawnForced`, `isUser`, `isWearing`, `jump`, `onKillEntity`, `onLivingUpdate`, `openEditStructure`, `openGui`, `playSound`, `preparePlayerToSpawn`, `refreshDisplayName`, `registerFixesPlayer`, `replaceItemInInventory`, `resetCooldown`, `respawnPlayer`, `sendCommandFeedback`, `setAbsorptionAmount`, `setDead`, `setInWeb`, `setItemStackToSlot`, `setLeftShoulderEntity`, `setPrimaryHand`, `setReducedDebug`, `setRightShoulderEntity`, `setScore`, `setSpawnChunk`, `setSpawnDimension`, `setSpawnPoint`, `shouldHeal`, `spawnShoulderEntities`, `spawnSweepParticles`, `travel`, `updateEntityActionState`, `updateRidden`, `updateSize`, `xpBarCap`
- from `net.minecraft.entity.EntityLivingBase`: `addPotionEffect`, `applyArmorCalculations`, `applyPotionDamageCalculations`, `areAllPotionsAmbient`, `attackable`, `attackEntityAsMob`, `attemptTeleport`, `canBeCollidedWith`, `canBeHitWithPotion`, `canBePushed`, `canBreatheUnderwater`, `canDropLoot`, `canEntityBeSeen`, `clearActivePotions`, `collideWithEntity`, `collideWithNearbyEntities`, `curePotionEffects`, `decreaseAirSupply`, `dismountEntity`, `dropEquipment`, `dropFewItems`, `dropLoot`, `getActiveHand`, `getActiveItemStack`, `getActivePotionEffect`, `getActivePotionEffects`, `getActivePotionMap`, `getArrowCountInEntity`, `getAttackingEntity`, `getAttributeMap`, `getCombatTracker`, `getCreatureAttribute`, `getEntityAttribute`, `getHealth`, `getHeldItem`, `getHeldItemMainhand`, `getHeldItemOffhand`, `getIdleTime`, `getItemInUseCount`, `getItemInUseMaxCount`, `getJumpUpwardsMotion`, `getLastAttackedEntity`, `getLastAttackedEntityTime`, `getLastDamageSource`, `getLook`, `getMaxHealth`, `getRevengeTarget`, `getRevengeTimer`, `getRNG`, `getRotationYawHead`, `getSoundPitch`, `getSoundVolume`, `getSwingProgress`, `getTicksElytraFlying`, `getTotalArmorValue`, `getWaterSlowDown`, `handleJumpLava`, `handleJumpWater`, `hasItemInSlot`, `heal`, `isActiveItemStackBlocking`, `isChild`, `isElytraFlying`, `isEntityAlive`, `isEntityUndead`, `isHandActive`, `isOnLadder`, `isPotionActive`, `isPotionApplicable`, `isServerWorld`, `knockBack`, `markPotionsDirty`, `markVelocityChanged`, `moveRelative`, `notifyDataManagerChange`, `onDeathUpdate`, `onEntityUpdate`, `onKillCommand`, `outOfWorld`, `performHurtAnimation`, `playEquipSound`, `playHurtSound`, `removeActivePotionEffect`, `removePotionEffect`, `renderBrokenItemStack`, `resetActiveHand`, `resetPotionEffectMetadata`, `setActiveHand`, `setAIMoveSpeed`, `setArrowCountInEntity`, `setHealth`, `setHeldItem`, `setJumping`, `setLastAttackedEntity`, `setPartying`, `setPositionAndRotationDirect`, `setRenderYawOffset`, `setRevengeTarget`, `setRotationYawHead`, `setSprinting`, `shouldRiderFaceForward`, `stopActiveHand`, `updateActiveHand`, `updateArmSwingProgress`, `updateDistance`, `updateItemUse`, `updatePotionEffects`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyOrientationToEntity`, `applyPlayerInteraction`, `canBeAttackedWithItem`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `deserializeNBT`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getFlag`, `getForward`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMirroredYaw`, `getMountedYOffset`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPositionEyes`, `getPositionVector`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getServer`, `getTags`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `handleWaterMovement`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityEqual`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSprinting`, `isWet`, `makeFlySound`, `move`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `onAddedToWorld`, `onCollideWithPlayer`, `onRemovedFromWorld`, `onStruckByLightning`, `playFlySound`, `playStepSound`, `processInitialInteract`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `resetEntityId`, `resetPositionToBB`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRotation`, `setSilent`, `setSize`, `setSneaking`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `toString`, `turn`, `updatePassenger`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## EnumPlayerModelParts

*enum* `net.minecraft.entity.player.EnumPlayerModelParts`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumPlayerModelParts>

### Fields
- `public static final EnumPlayerModelParts CAPE`
- `public static final EnumPlayerModelParts JACKET`
- `public static final EnumPlayerModelParts LEFT_SLEEVE`
- `public static final EnumPlayerModelParts RIGHT_SLEEVE`
- `public static final EnumPlayerModelParts LEFT_PANTS_LEG`
- `public static final EnumPlayerModelParts RIGHT_PANTS_LEG`
- `public static final EnumPlayerModelParts HAT`

### Methods
- `public static EnumPlayerModelParts[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumPlayerModelParts c : EnumPlayerModelParts.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumPlayerModelParts valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public int getPartMask()`
- `public int getPartId()`
- `public java.lang.String getPartName()`
- `public ITextComponent getName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## InventoryPlayer

*class* `net.minecraft.entity.player.InventoryPlayer`

All Implemented Interfaces: IInventory, IWorldNameable

### Fields
- `public final NonNullList<ItemStack> mainInventory`
- `public final NonNullList<ItemStack> armorInventory`
- `public final NonNullList<ItemStack> offHandInventory`
- `public int currentItem`
- `public EntityPlayer player`

### Methods
- `public ItemStack getCurrentItem()`
- `public static int getHotbarSize()`
- `public int getFirstEmptyStack()`
- `public void setPickedItemStack(ItemStack stack)`
- `public void pickItem(int index)`
- `public static boolean isHotbar(int index)`
- `public int getSlotFor(ItemStack stack)`
- `public int findSlotMatchingUnusedItem(ItemStack p_194014_1_)`
- `public int getBestHotbarSlot()`
- `public void changeCurrentItem(int direction)`
- `public int clearMatchingItems(Item itemIn,  int metadataIn,  int removeCount,  NBTTagCompound itemNBT)`
- `public int storeItemStack(ItemStack itemStackIn)`
- `public void decrementAnimations()`
- `public boolean addItemStackToInventory(ItemStack itemStackIn)`
- `public boolean add(int p_191971_1_,  ItemStack p_191971_2_)`
- `public void placeItemBackInInventory(World p_191975_1_,  ItemStack p_191975_2_)`
- `public ItemStack decrStackSize(int index,  int count)`
- `public void deleteStack(ItemStack stack)`
- `public ItemStack removeStackFromSlot(int index)`
- `public void setInventorySlotContents(int index,  ItemStack stack)`
- `public float getDestroySpeed(IBlockState state)`
- `public NBTTagList writeToNBT(NBTTagList nbtTagListIn)`
- `public void readFromNBT(NBTTagList nbtTagListIn)`
- `public int getSizeInventory()`
- `public boolean isEmpty()`
- `public ItemStack getStackInSlot(int index)`
- `public java.lang.String getName()`
- `public boolean hasCustomName()`
- `public ITextComponent getDisplayName()`
- `public int getInventoryStackLimit()`
- `public boolean canHarvestBlock(IBlockState state)`
- `public ItemStack armorItemInSlot(int slotIn)`
- `public void damageArmor(float damage)`
- `public void dropAllItems()`
- `public void markDirty()`
- `public int getTimesChanged()`
- `public void setItemStack(ItemStack itemStackIn)`
- `public ItemStack getItemStack()`
- `public boolean isUsableByPlayer(EntityPlayer player)`
- `public boolean hasItemStack(ItemStack itemStackIn)`
- `public void openInventory(EntityPlayer player)`
- `public void closeInventory(EntityPlayer player)`
- `public boolean isItemValidForSlot(int index,  ItemStack stack)`
- `public void copyInventory(InventoryPlayer playerInventory)`
- `public int getField(int id)`
- `public void setField(int id,  int value)`
- `public int getFieldCount()`
- `public void clear()`
- `public void fillStackedContents(RecipeItemHelper helper,  boolean p_194016_2_)`

## PlayerCapabilities

*class* `net.minecraft.entity.player.PlayerCapabilities`

### Fields
- `public boolean disableDamage`
- `public boolean isFlying`
- `public boolean allowFlying`
- `public boolean isCreativeMode`
- `public boolean allowEdit`

### Methods
- `public void writeCapabilitiesToNBT(NBTTagCompound tagCompound)`
- `public void readCapabilitiesFromNBT(NBTTagCompound tagCompound)`
- `public float getFlySpeed()`
- `public void setFlySpeed(float speed)`
- `public float getWalkSpeed()`
- `public void setPlayerWalkSpeed(float speed)`
