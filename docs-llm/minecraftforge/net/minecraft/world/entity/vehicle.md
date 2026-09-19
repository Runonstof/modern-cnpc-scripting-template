# net.minecraft.world.entity.vehicle

- [AbstractMinecart](#abstractminecart)
- [AbstractMinecartContainer](#abstractminecartcontainer)
- [Boat](#boat)
- [ChestBoat](#chestboat)
- [Class AbstractMinecart.Type](#class-abstractminecart.type)
- [Class Boat.Status](#class-boat.status)
- [Class Boat.Type](#class-boat.type)
- [ContainerEntity](#containerentity)
- [DismountHelper](#dismounthelper)
- [Minecart](#minecart)
- [MinecartChest](#minecartchest)
- [MinecartCommandBlock](#minecartcommandblock)
- [MinecartCommandBlock.MinecartCommandBase](#minecartcommandblock.minecartcommandbase)
- [MinecartFurnace](#minecartfurnace)
- [MinecartHopper](#minecarthopper)
- [MinecartSpawner](#minecartspawner)
- [MinecartTNT](#minecarttnt)
## AbstractMinecart

*class* `net.minecraft.world.entity.vehicle.AbstractMinecart`

### Fields
- `private static final float LOWERED_PASSENGER_ATTACHMENT_Y` (= 0.0f)
- `private static final float PASSENGER_ATTACHMENT_Y` (= 0.1875f)
- `private static final EntityDataAccessor<Integer> DATA_ID_HURT`
- `private static final EntityDataAccessor<Integer> DATA_ID_HURTDIR`
- `private static final EntityDataAccessor<Float> DATA_ID_DAMAGE`
- `private static final EntityDataAccessor<Integer> DATA_ID_DISPLAY_BLOCK`
- `private static final EntityDataAccessor<Integer> DATA_ID_DISPLAY_OFFSET`
- `private static final EntityDataAccessor<Boolean> DATA_ID_CUSTOM_DISPLAY`
- `private static final com.google.common.collect.ImmutableMap<Pose,com.google.common.collect.ImmutableList<Integer>> POSE_DISMOUNT_HEIGHTS`
- `protected static final float WATER_SLOWDOWN_FACTOR` (= 0.949999988079071f)
- `private boolean flipped`
- `private boolean onRails`
- `private int lerpSteps`
- `private double lerpX`
- `private double lerpY`
- `private double lerpZ`
- `private double lerpYRot`
- `private double lerpXRot`
- `private Vec3 targetDeltaMovement`
- `private static final Map<RailShape,com.mojang.datafixers.util.Pair<Vec3i,Vec3i>> EXITS`
- `private static IMinecartCollisionHandler COLLISIONS`
- `private boolean canBePushed`
- `private boolean canUseRail`
- `private float currentSpeedCapOnRail`
- `@Nullable private @Nullable Float maxSpeedAirLateral`
- `private float maxSpeedAirVertical`
- `private double dragAir`

### Inherited fields
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`
- from `net.minecraftforge.common.extensions.IForgeAbstractMinecart`: `DEFAULT_AIR_DRAG`, `DEFAULT_MAX_SPEED_AIR_LATERAL`, `DEFAULT_MAX_SPEED_AIR_VERTICAL`

### Methods
- `public IMinecartCollisionHandler getCollisionHandler()`
- `public static void registerCollisionHandler(@Nullable  IMinecartCollisionHandler handler)`
- `public static AbstractMinecart createMinecart(Level p_38120_,  double p_38121_,  double p_38122_,  double p_38123_,  AbstractMinecart.Type p_38124_)`
- `protected Entity.MovementEmission getMovementEmission()`
- `protected void defineSynchedData()`
- `public boolean canCollideWith(Entity p_38168_)`
- `public boolean isPushable()`
- `protected Vec3 getRelativePortalPosition(Direction.Axis p_38132_,  BlockUtil.FoundRectangle p_38133_)`
- `protected org.joml.Vector3f getPassengerAttachmentPoint(Entity p_300806_,  EntityDimensions p_300201_,  float p_299127_)`
- `public Vec3 getDismountLocationForPassenger(LivingEntity p_38145_)`
- `public boolean hurt(DamageSource p_38117_,  float p_38118_)`
- `protected float getBlockSpeedFactor()`
- `public void destroy(DamageSource p_38115_)`
- `protected abstract Item getDropItem()`
- `public void animateHurt(float p_265349_)`
- `public boolean isPickable()`
- `private static com.mojang.datafixers.util.Pair<Vec3i,Vec3i> exits(RailShape p_38126_)`
- `public Direction getMotionDirection()`
- `public void tick()`
- `protected double getMaxSpeed()`
- `public void activateMinecart(int p_38111_,  int p_38112_,  int p_38113_,  boolean p_38114_)`
- `protected void comeOffTrack()`
- `protected void moveAlongTrack(BlockPos p_38156_,  BlockState p_38157_)`
- `public boolean isOnRails()`
- `private boolean isRedstoneConductor(BlockPos p_38130_)`
- `protected void applyNaturalSlowdown()`
- `@Nullable public Vec3 getPosOffs(double p_38097_,  double p_38098_,  double p_38099_,  double p_38100_)`
- `@Nullable public Vec3 getPos(double p_38180_,  double p_38181_,  double p_38182_)`
- `public AABB getBoundingBoxForCulling()`
- `protected void readAdditionalSaveData(CompoundTag p_38137_)`
- `protected void addAdditionalSaveData(CompoundTag p_38151_)`
- `public void push(Entity p_38165_)`
- `public void lerpTo(double p_38102_,  double p_38103_,  double p_38104_,  float p_38105_,  float p_38106_,  int p_38107_)`
- `public double lerpTargetX()`
- `public double lerpTargetY()`
- `public double lerpTargetZ()`
- `public float lerpTargetXRot()`
- `public float lerpTargetYRot()`
- `public void lerpMotion(double p_38171_,  double p_38172_,  double p_38173_)`
- `public void setDamage(float p_38110_)`
- `public float getDamage()`
- `public void setHurtTime(int p_38155_)`
- `public int getHurtTime()`
- `public void setHurtDir(int p_38161_)`
- `public int getHurtDir()`
- `public abstract AbstractMinecart.Type getMinecartType()`
- `public BlockState getDisplayBlockState()`
- `public BlockState getDefaultDisplayBlockState()`
- `public int getDisplayOffset()`
- `public int getDefaultDisplayOffset()`
- `public void setDisplayBlockState(BlockState p_38147_)`
- `public void setDisplayOffset(int p_38175_)`
- `public boolean hasCustomDisplay()`
- `public void setCustomDisplay(boolean p_38139_)`
- `public boolean canUseRail()`
  Description copied from interface: IForgeAbstractMinecart
  Returns true if this cart can currently use rails.
   This function is mainly used to gracefully detach a minecart from a rail.
  - returns: True if the minecart can use rails.
- `public void setCanUseRail(boolean value)`
  Description copied from interface: IForgeAbstractMinecart
  Set whether the minecart can use rails.
   This function is mainly used to gracefully detach a minecart from a rail.
  - param: value - Whether the minecart can currently use rails.
- `public float getCurrentCartSpeedCapOnRail()`
  Description copied from interface: IForgeAbstractMinecart
  Returns the current speed cap for the cart when traveling on rails. This
   functions differs from getMaxCartSpeedOnRail() in that it controls
   current movement and cannot be overridden. The value however can never be
   higher than getMaxCartSpeedOnRail().
- `public void setCurrentCartSpeedCapOnRail(float value)`
- `public float getMaxSpeedAirLateral()`
- `public void setMaxSpeedAirLateral(float value)`
- `public float getMaxSpeedAirVertical()`
- `public void setMaxSpeedAirVertical(float value)`
- `public double getDragAir()`
- `public void setDragAir(double value)`
- `public double getMaxSpeedWithRail()`
- `public void moveMinecartOnRail(BlockPos pos)`
  Description copied from interface: IForgeAbstractMinecart
  Moved to allow overrides.
   This code handles minecart movement and speed capping when on a rail.
- `public ItemStack getPickResult()`

### Inherited methods
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDirection`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSlot`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interact`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `recreateFromPacket`, `refreshDimensions`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `shouldShowName`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeAbstractMinecart`: `canBeRidden`, `getComparatorLevel`, `getCurrentRailPosition`, `getMaxCartSpeedOnRail`, `getSlopeAdjustment`, `isPoweredCart`, `shouldDoRailFunctions`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## AbstractMinecartContainer

*class* `net.minecraft.world.entity.vehicle.AbstractMinecartContainer`

### Fields
- `private NonNullList<ItemStack> itemStacks`
- `@Nullable private ResourceLocation lootTable`
- `private long lootTableSeed`
- `private LazyOptional<?> itemHandler`

### Inherited fields
- from `net.minecraft.world.entity.vehicle.AbstractMinecart`: `WATER_SLOWDOWN_FACTOR`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`
- from `net.minecraftforge.common.extensions.IForgeAbstractMinecart`: `DEFAULT_AIR_DRAG`, `DEFAULT_MAX_SPEED_AIR_LATERAL`, `DEFAULT_MAX_SPEED_AIR_VERTICAL`

### Methods
- `public void destroy(DamageSource p_38228_)`
- `public ItemStack getItem(int p_38218_)`
- `public ItemStack removeItem(int p_38220_,  int p_38221_)`
- `public ItemStack removeItemNoUpdate(int p_38244_)`
- `public void setItem(int p_38225_,  ItemStack p_38226_)`
- `public SlotAccess getSlot(int p_150257_)`
- `public void setChanged()`
- `public boolean stillValid(Player p_38230_)`
- `public void remove(Entity.RemovalReason p_150255_)`
- `protected void addAdditionalSaveData(CompoundTag p_38248_)`
- `protected void readAdditionalSaveData(CompoundTag p_38235_)`
- `public InteractionResult interact(Player p_38232_,  InteractionHand p_38233_)`
- `protected void applyNaturalSlowdown()`
- `public void clearContent()`
- `public void setLootTable(ResourceLocation p_38237_,  long p_38238_)`
- `@Nullable public AbstractContainerMenu createMenu(int p_38251_,  Inventory p_38252_,  Player p_38253_)`
- `protected abstract AbstractContainerMenu createMenu(int p_38222_,  Inventory p_38223_)`
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
- `@Nullable public ResourceLocation getLootTable()`
- `public void setLootTable(@Nullable  ResourceLocation p_219859_)`
- `public long getLootTableSeed()`
- `public void setLootTableSeed(long p_219857_)`
- `public NonNullList<ItemStack> getItemStacks()`
- `public void clearItemStacks()`

### Inherited methods
- from `net.minecraft.world.entity.vehicle.AbstractMinecart`: `activateMinecart`, `animateHurt`, `canCollideWith`, `canUseRail`, `comeOffTrack`, `createMinecart`, `defineSynchedData`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getCollisionHandler`, `getCurrentCartSpeedCapOnRail`, `getDamage`, `getDefaultDisplayBlockState`, `getDefaultDisplayOffset`, `getDismountLocationForPassenger`, `getDisplayBlockState`, `getDisplayOffset`, `getDragAir`, `getDropItem`, `getHurtDir`, `getHurtTime`, `getMaxSpeed`, `getMaxSpeedAirLateral`, `getMaxSpeedAirVertical`, `getMaxSpeedWithRail`, `getMinecartType`, `getMotionDirection`, `getMovementEmission`, `getPassengerAttachmentPoint`, `getPickResult`, `getPos`, `getPosOffs`, `getRelativePortalPosition`, `hasCustomDisplay`, `hurt`, `isOnRails`, `isPickable`, `isPushable`, `lerpMotion`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `moveAlongTrack`, `moveMinecartOnRail`, `push`, `registerCollisionHandler`, `setCanUseRail`, `setCurrentCartSpeedCapOnRail`, `setCustomDisplay`, `setDamage`, `setDisplayBlockState`, `setDisplayOffset`, `setDragAir`, `setHurtDir`, `setHurtTime`, `setMaxSpeedAirLateral`, `setMaxSpeedAirVertical`, `tick`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDirection`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `recreateFromPacket`, `refreshDimensions`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `shouldShowName`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getContainerSize`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `startOpen`, `stopOpen`
- from `net.minecraft.world.entity.vehicle.ContainerEntity`: `addChestVehicleSaveData`, `chestVehicleDestroyed`, `clearChestVehicleContent`, `getChestVehicleItem`, `getChestVehicleSlot`, `interactWithContainerVehicle`, `isChestVehicleEmpty`, `isChestVehicleStillValid`, `isEmpty`, `isRemoved`, `level`, `position`, `readChestVehicleSaveData`, `removeChestVehicleItem`, `removeChestVehicleItemNoUpdate`, `setChestVehicleItem`, `unpackChestVehicleLootTable`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeAbstractMinecart`: `canBeRidden`, `getComparatorLevel`, `getCurrentRailPosition`, `getMaxCartSpeedOnRail`, `getSlopeAdjustment`, `isPoweredCart`, `shouldDoRailFunctions`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraft.world.MenuProvider`: `getDisplayName`

## Boat

*class* `net.minecraft.world.entity.vehicle.Boat`

### Fields
- `private static final EntityDataAccessor<Integer> DATA_ID_HURT`
- `private static final EntityDataAccessor<Integer> DATA_ID_HURTDIR`
- `private static final EntityDataAccessor<Float> DATA_ID_DAMAGE`
- `private static final EntityDataAccessor<Integer> DATA_ID_TYPE`
- `private static final EntityDataAccessor<Boolean> DATA_ID_PADDLE_LEFT`
- `private static final EntityDataAccessor<Boolean> DATA_ID_PADDLE_RIGHT`
- `private static final EntityDataAccessor<Integer> DATA_ID_BUBBLE_TIME`
- `public static final int PADDLE_LEFT` (= 0)
- `public static final int PADDLE_RIGHT` (= 1)
- `private static final int TIME_TO_EJECT` (= 60)
- `private static final float PADDLE_SPEED` (= 0.39269909262657166f)
- `public static final double PADDLE_SOUND_TIME` (= 0.7853981852531433)
- `public static final int BUBBLE_TIME` (= 60)
- `private final float[] paddlePositions`
- `private float invFriction`
- `private float outOfControlTicks`
- `private float deltaRotation`
- `private int lerpSteps`
- `private double lerpX`
- `private double lerpY`
- `private double lerpZ`
- `private double lerpYRot`
- `private double lerpXRot`
- `private boolean inputLeft`
- `private boolean inputRight`
- `private boolean inputUp`
- `private boolean inputDown`
- `private double waterLevel`
- `private float landFriction`
- `private Boat.Status status`
- `private Boat.Status oldStatus`
- `private double lastYd`
- `private boolean isAboveBubbleColumn`
- `private boolean bubbleColumnDirectionIsDown`
- `private float bubbleMultiplier`
- `private float bubbleAngle`
- `private float bubbleAngleO`

### Inherited fields
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `protected float getEyeHeight(Pose p_38327_,  EntityDimensions p_38328_)`
- `protected Entity.MovementEmission getMovementEmission()`
- `protected void defineSynchedData()`
- `public boolean canCollideWith(Entity p_38376_)`
- `public static boolean canVehicleCollide(Entity p_38324_,  Entity p_38325_)`
- `public boolean canBeCollidedWith()`
- `public boolean isPushable()`
- `protected Vec3 getRelativePortalPosition(Direction.Axis p_38335_,  BlockUtil.FoundRectangle p_38336_)`
- `protected org.joml.Vector3f getPassengerAttachmentPoint(Entity p_299070_,  EntityDimensions p_299244_,  float p_298802_)`
- `public boolean hurt(DamageSource p_38319_,  float p_38320_)`
- `protected void destroy(DamageSource p_219862_)`
- `public void onAboveBubbleCol(boolean p_38381_)`
- `public void push(Entity p_38373_)`
- `public Item getDropItem()`
- `public void animateHurt(float p_265761_)`
- `public boolean isPickable()`
- `public void lerpTo(double p_38299_,  double p_38300_,  double p_38301_,  float p_38302_,  float p_38303_,  int p_38304_)`
- `public double lerpTargetX()`
- `public double lerpTargetY()`
- `public double lerpTargetZ()`
- `public float lerpTargetXRot()`
- `public float lerpTargetYRot()`
- `public Direction getMotionDirection()`
- `public void tick()`
- `private void tickBubbleColumn()`
- `@Nullable protected SoundEvent getPaddleSound()`
- `private void tickLerp()`
- `public void setPaddleState(boolean p_38340_,  boolean p_38341_)`
- `public float getRowingTime(int p_38316_,  float p_38317_)`
- `private Boat.Status getStatus()`
- `public float getWaterLevelAbove()`
- `public float getGroundFriction()`
- `private boolean checkInWater()`
- `@Nullable private Boat.Status isUnderwater()`
- `private void floatBoat()`
- `private void controlBoat()`
- `protected float getSinglePassengerXOffset()`
- `public boolean hasEnoughSpaceFor(Entity p_273171_)`
- `protected void positionRider(Entity p_289552_,  Entity.MoveFunction p_289571_)`
- `public Vec3 getDismountLocationForPassenger(LivingEntity p_38357_)`
- `protected void clampRotation(Entity p_38322_)`
- `public void onPassengerTurned(Entity p_38383_)`
- `protected void addAdditionalSaveData(CompoundTag p_38359_)`
- `protected void readAdditionalSaveData(CompoundTag p_38338_)`
- `public InteractionResult interact(Player p_38330_,  InteractionHand p_38331_)`
- `protected void checkFallDamage(double p_38307_,  boolean p_38308_,  BlockState p_38309_,  BlockPos p_38310_)`
- `public boolean getPaddleState(int p_38314_)`
- `public void setDamage(float p_38312_)`
- `public float getDamage()`
- `public void setHurtTime(int p_38355_)`
- `public int getHurtTime()`
- `private void setBubbleTime(int p_38367_)`
- `private int getBubbleTime()`
- `public float getBubbleAngle(float p_38353_)`
- `public void setHurtDir(int p_38363_)`
- `public int getHurtDir()`
- `public void setVariant(Boat.Type p_38333_)`
- `public Boat.Type getVariant()`
- `protected boolean canAddPassenger(Entity p_38390_)`
- `protected int getMaxPassengers()`
- `@Nullable public LivingEntity getControllingPassenger()`
- `public void setInput(boolean p_38343_,  boolean p_38344_,  boolean p_38345_,  boolean p_38346_)`
- `protected Component getTypeName()`
- `public boolean isUnderWater()`
- `protected void addPassenger(Entity passenger)`
- `public ItemStack getPickResult()`

### Inherited methods
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addTag`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canBeHitByProjectile`, `canChangeDimensions`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockSpeedFactor`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getBoundingBoxForCulling`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDirection`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSlot`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `recreateFromPacket`, `refreshDimensions`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `shouldShowName`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBoat`: `canBoatInFluid`, `canBoatInFluid`, `shouldUpdateFluidWhileRiding`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## ChestBoat

*class* `net.minecraft.world.entity.vehicle.ChestBoat`

### Fields
- `private static final int CONTAINER_SIZE` (= 27)
- `private NonNullList<ItemStack> itemStacks`
- `@Nullable private ResourceLocation lootTable`
- `private long lootTableSeed`
- `private LazyOptional<?> itemHandler`

### Inherited fields
- from `net.minecraft.world.entity.vehicle.Boat`: `BUBBLE_TIME`, `PADDLE_LEFT`, `PADDLE_RIGHT`, `PADDLE_SOUND_TIME`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`

### Methods
- `protected float getSinglePassengerXOffset()`
- `protected int getMaxPassengers()`
- `protected void addAdditionalSaveData(CompoundTag p_219908_)`
- `protected void readAdditionalSaveData(CompoundTag p_219901_)`
- `public void destroy(DamageSource p_219892_)`
- `public void remove(Entity.RemovalReason p_219894_)`
- `public InteractionResult interact(Player p_219898_,  InteractionHand p_219899_)`
- `public void openCustomInventoryScreen(Player p_219906_)`
- `public Item getDropItem()`
- `public void clearContent()`
- `public int getContainerSize()`
- `public ItemStack getItem(int p_219880_)`
- `public ItemStack removeItem(int p_219882_,  int p_219883_)`
- `public ItemStack removeItemNoUpdate(int p_219904_)`
- `public void setItem(int p_219885_,  ItemStack p_219886_)`
- `public SlotAccess getSlot(int p_219918_)`
- `public void setChanged()`
- `public boolean stillValid(Player p_219896_)`
- `@Nullable public AbstractContainerMenu createMenu(int p_219910_,  Inventory p_219911_,  Player p_219912_)`
- `public void unpackLootTable(@Nullable  Player p_219914_)`
- `@Nullable public ResourceLocation getLootTable()`
- `public void setLootTable(@Nullable  ResourceLocation p_219890_)`
- `public long getLootTableSeed()`
- `public void setLootTableSeed(long p_219888_)`
- `public NonNullList<ItemStack> getItemStacks()`
- `public void clearItemStacks()`
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
- `public void stopOpen(Player p_270286_)`

### Inherited methods
- from `net.minecraft.world.entity.vehicle.Boat`: `addPassenger`, `animateHurt`, `canAddPassenger`, `canBeCollidedWith`, `canCollideWith`, `canVehicleCollide`, `checkFallDamage`, `clampRotation`, `defineSynchedData`, `getBubbleAngle`, `getControllingPassenger`, `getDamage`, `getDismountLocationForPassenger`, `getEyeHeight`, `getGroundFriction`, `getHurtDir`, `getHurtTime`, `getMotionDirection`, `getMovementEmission`, `getPaddleSound`, `getPaddleState`, `getPassengerAttachmentPoint`, `getPickResult`, `getRelativePortalPosition`, `getRowingTime`, `getTypeName`, `getVariant`, `getWaterLevelAbove`, `hasEnoughSpaceFor`, `hurt`, `isPickable`, `isPushable`, `isUnderWater`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `onAboveBubbleCol`, `onPassengerTurned`, `positionRider`, `push`, `setDamage`, `setHurtDir`, `setHurtTime`, `setInput`, `setPaddleState`, `setVariant`, `tick`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addTag`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canBeHitByProjectile`, `canChangeDimensions`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockSpeedFactor`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getBoundingBoxForCulling`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDirection`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `recreateFromPacket`, `refreshDimensions`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `shouldShowName`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `startOpen`
- from `net.minecraft.world.entity.vehicle.ContainerEntity`: `addChestVehicleSaveData`, `chestVehicleDestroyed`, `clearChestVehicleContent`, `getChestVehicleItem`, `getChestVehicleSlot`, `interactWithContainerVehicle`, `isChestVehicleEmpty`, `isChestVehicleStillValid`, `isEmpty`, `isRemoved`, `level`, `position`, `readChestVehicleSaveData`, `removeChestVehicleItem`, `removeChestVehicleItemNoUpdate`, `setChestVehicleItem`, `unpackChestVehicleLootTable`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBoat`: `canBoatInFluid`, `canBoatInFluid`, `shouldUpdateFluidWhileRiding`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraft.world.MenuProvider`: `getDisplayName`

## Class AbstractMinecart.Type

*enum* `net.minecraft.world.entity.vehicle.Class AbstractMinecart.Type`

Enclosing class: AbstractMinecart

### Methods
- `public static AbstractMinecart.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static AbstractMinecart.Type valueOf(String name)`
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

## Class Boat.Status

*enum* `net.minecraft.world.entity.vehicle.Class Boat.Status`

Enclosing class: Boat

### Methods
- `public static Boat.Status[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Boat.Status valueOf(String name)`
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

## Class Boat.Type

*enum* `net.minecraft.world.entity.vehicle.Class Boat.Type`

Enclosing class: Boat

### Fields
- `private final String name`
- `private final Block planks`
- `public static final StringRepresentable.EnumCodec<Boat.Type> CODEC`
- `private static final IntFunction<Boat.Type> BY_ID`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static Boat.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Boat.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`
- `public String getName()`
- `public Block getPlanks()`
- `public String toString()`
- `public static Boat.Type byId(int p_38431_)`
- `public static Boat.Type byName(String p_38433_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## ContainerEntity

*interface* `net.minecraft.world.entity.vehicle.ContainerEntity`

All Superinterfaces: Clearable, Container, MenuConstructor, MenuProvider

### Inherited fields
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`

### Methods
- `Vec3 position()`
- `@Nullable ResourceLocation getLootTable()`
- `void setLootTable(@Nullable  ResourceLocation p_219926_)`
- `long getLootTableSeed()`
- `void setLootTableSeed(long p_219925_)`
- `NonNullList<ItemStack> getItemStacks()`
- `void clearItemStacks()`
- `Level level()`
- `boolean isRemoved()`
- `default boolean isEmpty()`
- `default void addChestVehicleSaveData(CompoundTag p_219944_)`
- `default void readChestVehicleSaveData(CompoundTag p_219935_)`
- `default void chestVehicleDestroyed(DamageSource p_219928_,  Level p_219929_,  Entity p_219930_)`
- `default InteractionResult interactWithContainerVehicle(Player p_270068_)`
- `default void unpackChestVehicleLootTable(@Nullable  Player p_219950_)`
- `default void clearChestVehicleContent()`
- `default boolean isChestVehicleEmpty()`
- `default ItemStack removeChestVehicleItemNoUpdate(int p_219946_)`
- `default ItemStack getChestVehicleItem(int p_219948_)`
- `default ItemStack removeChestVehicleItem(int p_219937_,  int p_219938_)`
- `default void setChestVehicleItem(int p_219941_,  ItemStack p_219942_)`
- `default SlotAccess getChestVehicleSlot(int p_219952_)`
- `default boolean isChestVehicleStillValid(Player p_219955_)`

### Inherited methods
- from `net.minecraft.world.Clearable`: `clearContent`
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getContainerSize`, `getItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `removeItem`, `removeItemNoUpdate`, `setChanged`, `setItem`, `startOpen`, `stillValid`, `stopOpen`
- from `net.minecraft.world.inventory.MenuConstructor`: `createMenu`
- from `net.minecraft.world.MenuProvider`: `getDisplayName`

## DismountHelper

*class* `net.minecraft.world.entity.vehicle.DismountHelper`

### Methods
- `public static int[][] offsetsForDirection(Direction p_38468_)`
- `public static boolean isBlockFloorValid(double p_38440_)`
- `public static boolean canDismountTo(CollisionGetter p_38457_,  LivingEntity p_38458_,  AABB p_38459_)`
- `public static boolean canDismountTo(CollisionGetter p_150280_,  Vec3 p_150281_,  LivingEntity p_150282_,  Pose p_150283_)`
- `public static VoxelShape nonClimbableShape(BlockGetter p_38447_,  BlockPos p_38448_)`
- `public static double findCeilingFrom(BlockPos p_38464_,  int p_38465_,  Function<BlockPos,VoxelShape> p_38466_)`
- `@Nullable public static Vec3 findSafeDismountLocation(EntityType<?> p_38442_,  CollisionGetter p_38443_,  BlockPos p_38444_,  boolean p_38445_)`

## Minecart

*class* `net.minecraft.world.entity.vehicle.Minecart`

### Inherited fields
- from `net.minecraft.world.entity.vehicle.AbstractMinecart`: `WATER_SLOWDOWN_FACTOR`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`
- from `net.minecraftforge.common.extensions.IForgeAbstractMinecart`: `DEFAULT_AIR_DRAG`, `DEFAULT_MAX_SPEED_AIR_LATERAL`, `DEFAULT_MAX_SPEED_AIR_VERTICAL`

### Methods
- `public InteractionResult interact(Player p_38483_,  InteractionHand p_38484_)`
- `protected Item getDropItem()`
- `public void activateMinecart(int p_38478_,  int p_38479_,  int p_38480_,  boolean p_38481_)`
- `public AbstractMinecart.Type getMinecartType()`

### Inherited methods
- from `net.minecraft.world.entity.vehicle.AbstractMinecart`: `addAdditionalSaveData`, `animateHurt`, `applyNaturalSlowdown`, `canCollideWith`, `canUseRail`, `comeOffTrack`, `createMinecart`, `defineSynchedData`, `destroy`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getCollisionHandler`, `getCurrentCartSpeedCapOnRail`, `getDamage`, `getDefaultDisplayBlockState`, `getDefaultDisplayOffset`, `getDismountLocationForPassenger`, `getDisplayBlockState`, `getDisplayOffset`, `getDragAir`, `getHurtDir`, `getHurtTime`, `getMaxSpeed`, `getMaxSpeedAirLateral`, `getMaxSpeedAirVertical`, `getMaxSpeedWithRail`, `getMotionDirection`, `getMovementEmission`, `getPassengerAttachmentPoint`, `getPickResult`, `getPos`, `getPosOffs`, `getRelativePortalPosition`, `hasCustomDisplay`, `hurt`, `isOnRails`, `isPickable`, `isPushable`, `lerpMotion`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `moveAlongTrack`, `moveMinecartOnRail`, `push`, `readAdditionalSaveData`, `registerCollisionHandler`, `setCanUseRail`, `setCurrentCartSpeedCapOnRail`, `setCustomDisplay`, `setDamage`, `setDisplayBlockState`, `setDisplayOffset`, `setDragAir`, `setHurtDir`, `setHurtTime`, `setMaxSpeedAirLateral`, `setMaxSpeedAirVertical`, `tick`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDirection`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSlot`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `recreateFromPacket`, `refreshDimensions`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `shouldShowName`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeAbstractMinecart`: `canBeRidden`, `getComparatorLevel`, `getCurrentRailPosition`, `getMaxCartSpeedOnRail`, `getSlopeAdjustment`, `isPoweredCart`, `shouldDoRailFunctions`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## MinecartChest

*class* `net.minecraft.world.entity.vehicle.MinecartChest`

### Inherited fields
- from `net.minecraft.world.entity.vehicle.AbstractMinecart`: `WATER_SLOWDOWN_FACTOR`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`
- from `net.minecraftforge.common.extensions.IForgeAbstractMinecart`: `DEFAULT_AIR_DRAG`, `DEFAULT_MAX_SPEED_AIR_LATERAL`, `DEFAULT_MAX_SPEED_AIR_VERTICAL`

### Methods
- `protected Item getDropItem()`
- `public int getContainerSize()`
- `public AbstractMinecart.Type getMinecartType()`
- `public BlockState getDefaultDisplayBlockState()`
- `public int getDefaultDisplayOffset()`
- `public AbstractContainerMenu createMenu(int p_38496_,  Inventory p_38497_)`
- `public void stopOpen(Player p_270111_)`
- `public InteractionResult interact(Player p_270398_,  InteractionHand p_270576_)`

### Inherited methods
- from `net.minecraft.world.entity.vehicle.AbstractMinecartContainer`: `addAdditionalSaveData`, `applyNaturalSlowdown`, `clearContent`, `clearItemStacks`, `createMenu`, `destroy`, `getCapability`, `getItem`, `getItemStacks`, `getLootTable`, `getLootTableSeed`, `getSlot`, `invalidateCaps`, `readAdditionalSaveData`, `remove`, `removeItem`, `removeItemNoUpdate`, `reviveCaps`, `setChanged`, `setItem`, `setLootTable`, `setLootTable`, `setLootTableSeed`, `stillValid`
- from `net.minecraft.world.entity.vehicle.AbstractMinecart`: `activateMinecart`, `animateHurt`, `canCollideWith`, `canUseRail`, `comeOffTrack`, `createMinecart`, `defineSynchedData`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getCollisionHandler`, `getCurrentCartSpeedCapOnRail`, `getDamage`, `getDismountLocationForPassenger`, `getDisplayBlockState`, `getDisplayOffset`, `getDragAir`, `getHurtDir`, `getHurtTime`, `getMaxSpeed`, `getMaxSpeedAirLateral`, `getMaxSpeedAirVertical`, `getMaxSpeedWithRail`, `getMotionDirection`, `getMovementEmission`, `getPassengerAttachmentPoint`, `getPickResult`, `getPos`, `getPosOffs`, `getRelativePortalPosition`, `hasCustomDisplay`, `hurt`, `isOnRails`, `isPickable`, `isPushable`, `lerpMotion`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `moveAlongTrack`, `moveMinecartOnRail`, `push`, `registerCollisionHandler`, `setCanUseRail`, `setCurrentCartSpeedCapOnRail`, `setCustomDisplay`, `setDamage`, `setDisplayBlockState`, `setDisplayOffset`, `setDragAir`, `setHurtDir`, `setHurtTime`, `setMaxSpeedAirLateral`, `setMaxSpeedAirVertical`, `tick`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDirection`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `recreateFromPacket`, `refreshDimensions`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `shouldShowName`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `startOpen`
- from `net.minecraft.world.entity.vehicle.ContainerEntity`: `addChestVehicleSaveData`, `chestVehicleDestroyed`, `clearChestVehicleContent`, `getChestVehicleItem`, `getChestVehicleSlot`, `interactWithContainerVehicle`, `isChestVehicleEmpty`, `isChestVehicleStillValid`, `isEmpty`, `isRemoved`, `level`, `position`, `readChestVehicleSaveData`, `removeChestVehicleItem`, `removeChestVehicleItemNoUpdate`, `setChestVehicleItem`, `unpackChestVehicleLootTable`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeAbstractMinecart`: `canBeRidden`, `getComparatorLevel`, `getCurrentRailPosition`, `getMaxCartSpeedOnRail`, `getSlopeAdjustment`, `isPoweredCart`, `shouldDoRailFunctions`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraft.world.MenuProvider`: `getDisplayName`

## MinecartCommandBlock

*class* `net.minecraft.world.entity.vehicle.MinecartCommandBlock`

### Fields
- `static final EntityDataAccessor<String> DATA_ID_COMMAND_NAME`
- `static final EntityDataAccessor<Component> DATA_ID_LAST_OUTPUT`
- `private final BaseCommandBlock commandBlock`
- `private static final int ACTIVATION_DELAY` (= 4)
- `private int lastActivated`

### Inherited fields
- from `net.minecraft.world.entity.vehicle.AbstractMinecart`: `WATER_SLOWDOWN_FACTOR`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`
- from `net.minecraftforge.common.extensions.IForgeAbstractMinecart`: `DEFAULT_AIR_DRAG`, `DEFAULT_MAX_SPEED_AIR_LATERAL`, `DEFAULT_MAX_SPEED_AIR_VERTICAL`

### Methods
- `protected Item getDropItem()`
- `protected void defineSynchedData()`
- `protected void readAdditionalSaveData(CompoundTag p_38525_)`
- `protected void addAdditionalSaveData(CompoundTag p_38529_)`
- `public AbstractMinecart.Type getMinecartType()`
- `public BlockState getDefaultDisplayBlockState()`
- `public BaseCommandBlock getCommandBlock()`
- `public void activateMinecart(int p_38517_,  int p_38518_,  int p_38519_,  boolean p_38520_)`
- `public InteractionResult interact(Player p_38522_,  InteractionHand p_38523_)`
- `public void onSyncedDataUpdated(EntityDataAccessor<?> p_38527_)`
- `public boolean onlyOpCanSetNbt()`

### Inherited methods
- from `net.minecraft.world.entity.vehicle.AbstractMinecart`: `animateHurt`, `applyNaturalSlowdown`, `canCollideWith`, `canUseRail`, `comeOffTrack`, `createMinecart`, `destroy`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getCollisionHandler`, `getCurrentCartSpeedCapOnRail`, `getDamage`, `getDefaultDisplayOffset`, `getDismountLocationForPassenger`, `getDisplayBlockState`, `getDisplayOffset`, `getDragAir`, `getHurtDir`, `getHurtTime`, `getMaxSpeed`, `getMaxSpeedAirLateral`, `getMaxSpeedAirVertical`, `getMaxSpeedWithRail`, `getMotionDirection`, `getMovementEmission`, `getPassengerAttachmentPoint`, `getPickResult`, `getPos`, `getPosOffs`, `getRelativePortalPosition`, `hasCustomDisplay`, `hurt`, `isOnRails`, `isPickable`, `isPushable`, `lerpMotion`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `moveAlongTrack`, `moveMinecartOnRail`, `push`, `registerCollisionHandler`, `setCanUseRail`, `setCurrentCartSpeedCapOnRail`, `setCustomDisplay`, `setDamage`, `setDisplayBlockState`, `setDisplayOffset`, `setDragAir`, `setHurtDir`, `setHurtTime`, `setMaxSpeedAirLateral`, `setMaxSpeedAirVertical`, `tick`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDirection`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSlot`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `recreateFromPacket`, `refreshDimensions`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `shouldShowName`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeAbstractMinecart`: `canBeRidden`, `getComparatorLevel`, `getCurrentRailPosition`, `getMaxCartSpeedOnRail`, `getSlopeAdjustment`, `isPoweredCart`, `shouldDoRailFunctions`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## MinecartCommandBlock.MinecartCommandBase

*class* `net.minecraft.world.entity.vehicle.MinecartCommandBlock.MinecartCommandBase`

Enclosing class: MinecartCommandBlock

### Inherited fields
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `public ServerLevel getLevel()`
- `public void onUpdated()`
- `public Vec3 getPosition()`
- `public MinecartCommandBlock getMinecart()`
- `public CommandSourceStack createCommandSourceStack()`
- `public boolean isValid()`

### Inherited methods
- from `net.minecraft.world.level.BaseCommandBlock`: `acceptsFailure`, `acceptsSuccess`, `getCommand`, `getLastOutput`, `getName`, `getSuccessCount`, `isTrackOutput`, `load`, `performCommand`, `save`, `sendSystemMessage`, `setCommand`, `setLastOutput`, `setName`, `setSuccessCount`, `setTrackOutput`, `shouldInformAdmins`, `usedBy`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`

## MinecartFurnace

*class* `net.minecraft.world.entity.vehicle.MinecartFurnace`

### Fields
- `private static final EntityDataAccessor<Boolean> DATA_ID_FUEL`
- `private int fuel`
- `public double xPush`
- `public double zPush`
- `private static final Ingredient INGREDIENT`

### Inherited fields
- from `net.minecraft.world.entity.vehicle.AbstractMinecart`: `WATER_SLOWDOWN_FACTOR`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`
- from `net.minecraftforge.common.extensions.IForgeAbstractMinecart`: `DEFAULT_AIR_DRAG`, `DEFAULT_MAX_SPEED_AIR_LATERAL`, `DEFAULT_MAX_SPEED_AIR_VERTICAL`

### Methods
- `public AbstractMinecart.Type getMinecartType()`
- `protected void defineSynchedData()`
- `public void tick()`
- `protected double getMaxSpeed()`
- `protected Item getDropItem()`
- `protected void moveAlongTrack(BlockPos p_38569_,  BlockState p_38570_)`
- `protected void applyNaturalSlowdown()`
- `public InteractionResult interact(Player p_38562_,  InteractionHand p_38563_)`
- `public float getMaxCartSpeedOnRail()`
  Description copied from interface: IForgeAbstractMinecart
  Returns the carts max speed when traveling on rails. Carts going faster
   than 1.1 cause issues with chunk loading. Carts cant traverse slopes or
   corners at greater than 0.5 - 0.6. This value is compared with the rails
   max speed and the carts current speed cap to determine the carts current
   max speed. A normal rail's max speed is 0.4.
  - returns: Carts max speed.
- `protected void addAdditionalSaveData(CompoundTag p_38567_)`
- `protected void readAdditionalSaveData(CompoundTag p_38565_)`
- `protected boolean hasFuel()`
- `protected void setHasFuel(boolean p_38577_)`
- `public BlockState getDefaultDisplayBlockState()`

### Inherited methods
- from `net.minecraft.world.entity.vehicle.AbstractMinecart`: `activateMinecart`, `animateHurt`, `canCollideWith`, `canUseRail`, `comeOffTrack`, `createMinecart`, `destroy`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getCollisionHandler`, `getCurrentCartSpeedCapOnRail`, `getDamage`, `getDefaultDisplayOffset`, `getDismountLocationForPassenger`, `getDisplayBlockState`, `getDisplayOffset`, `getDragAir`, `getHurtDir`, `getHurtTime`, `getMaxSpeedAirLateral`, `getMaxSpeedAirVertical`, `getMaxSpeedWithRail`, `getMotionDirection`, `getMovementEmission`, `getPassengerAttachmentPoint`, `getPickResult`, `getPos`, `getPosOffs`, `getRelativePortalPosition`, `hasCustomDisplay`, `hurt`, `isOnRails`, `isPickable`, `isPushable`, `lerpMotion`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `moveMinecartOnRail`, `push`, `registerCollisionHandler`, `setCanUseRail`, `setCurrentCartSpeedCapOnRail`, `setCustomDisplay`, `setDamage`, `setDisplayBlockState`, `setDisplayOffset`, `setDragAir`, `setHurtDir`, `setHurtTime`, `setMaxSpeedAirLateral`, `setMaxSpeedAirVertical`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDirection`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSlot`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `recreateFromPacket`, `refreshDimensions`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `shouldShowName`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeAbstractMinecart`: `canBeRidden`, `getComparatorLevel`, `getCurrentRailPosition`, `getSlopeAdjustment`, `isPoweredCart`, `shouldDoRailFunctions`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## MinecartHopper

*class* `net.minecraft.world.entity.vehicle.MinecartHopper`

### Fields
- `private boolean enabled`

### Inherited fields
- from `net.minecraft.world.entity.vehicle.AbstractMinecart`: `WATER_SLOWDOWN_FACTOR`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`
- from `net.minecraft.world.level.block.entity.Hopper`: `ABOVE`, `INSIDE`, `SUCK`
- from `net.minecraftforge.common.extensions.IForgeAbstractMinecart`: `DEFAULT_AIR_DRAG`, `DEFAULT_MAX_SPEED_AIR_LATERAL`, `DEFAULT_MAX_SPEED_AIR_VERTICAL`

### Methods
- `public AbstractMinecart.Type getMinecartType()`
- `public BlockState getDefaultDisplayBlockState()`
- `public int getDefaultDisplayOffset()`
- `public int getContainerSize()`
- `public void activateMinecart(int p_38596_,  int p_38597_,  int p_38598_,  boolean p_38599_)`
- `public boolean isEnabled()`
- `public void setEnabled(boolean p_38614_)`
- `public double getLevelX()`
- `public double getLevelY()`
- `public double getLevelZ()`
- `public void tick()`
- `public boolean suckInItems()`
- `protected Item getDropItem()`
- `protected void addAdditionalSaveData(CompoundTag p_38608_)`
- `protected void readAdditionalSaveData(CompoundTag p_38606_)`
- `public AbstractContainerMenu createMenu(int p_38601_,  Inventory p_38602_)`

### Inherited methods
- from `net.minecraft.world.entity.vehicle.AbstractMinecartContainer`: `applyNaturalSlowdown`, `clearContent`, `clearItemStacks`, `createMenu`, `destroy`, `getCapability`, `getItem`, `getItemStacks`, `getLootTable`, `getLootTableSeed`, `getSlot`, `interact`, `invalidateCaps`, `remove`, `removeItem`, `removeItemNoUpdate`, `reviveCaps`, `setChanged`, `setItem`, `setLootTable`, `setLootTable`, `setLootTableSeed`, `stillValid`
- from `net.minecraft.world.entity.vehicle.AbstractMinecart`: `animateHurt`, `canCollideWith`, `canUseRail`, `comeOffTrack`, `createMinecart`, `defineSynchedData`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getCollisionHandler`, `getCurrentCartSpeedCapOnRail`, `getDamage`, `getDismountLocationForPassenger`, `getDisplayBlockState`, `getDisplayOffset`, `getDragAir`, `getHurtDir`, `getHurtTime`, `getMaxSpeed`, `getMaxSpeedAirLateral`, `getMaxSpeedAirVertical`, `getMaxSpeedWithRail`, `getMotionDirection`, `getMovementEmission`, `getPassengerAttachmentPoint`, `getPickResult`, `getPos`, `getPosOffs`, `getRelativePortalPosition`, `hasCustomDisplay`, `hurt`, `isOnRails`, `isPickable`, `isPushable`, `lerpMotion`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `moveAlongTrack`, `moveMinecartOnRail`, `push`, `registerCollisionHandler`, `setCanUseRail`, `setCurrentCartSpeedCapOnRail`, `setCustomDisplay`, `setDamage`, `setDisplayBlockState`, `setDisplayOffset`, `setDragAir`, `setHurtDir`, `setHurtTime`, `setMaxSpeedAirLateral`, `setMaxSpeedAirVertical`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDirection`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleEntityEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `recreateFromPacket`, `refreshDimensions`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `shouldShowName`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.world.Clearable`: `clearContent`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `removeItem`, `removeItemNoUpdate`, `setChanged`, `setItem`, `startOpen`, `stillValid`, `stopOpen`
- from `net.minecraft.world.entity.vehicle.ContainerEntity`: `addChestVehicleSaveData`, `chestVehicleDestroyed`, `clearChestVehicleContent`, `getChestVehicleItem`, `getChestVehicleSlot`, `interactWithContainerVehicle`, `isChestVehicleEmpty`, `isChestVehicleStillValid`, `isEmpty`, `isRemoved`, `level`, `position`, `readChestVehicleSaveData`, `removeChestVehicleItem`, `removeChestVehicleItemNoUpdate`, `setChestVehicleItem`, `unpackChestVehicleLootTable`
- from `net.minecraft.world.level.block.entity.Hopper`: `getSuckShape`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeAbstractMinecart`: `canBeRidden`, `getComparatorLevel`, `getCurrentRailPosition`, `getMaxCartSpeedOnRail`, `getSlopeAdjustment`, `isPoweredCart`, `shouldDoRailFunctions`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraft.world.MenuProvider`: `getDisplayName`

## MinecartSpawner

*class* `net.minecraft.world.entity.vehicle.MinecartSpawner`

### Fields
- `private final BaseSpawner spawner`
- `private final Runnable ticker`

### Inherited fields
- from `net.minecraft.world.entity.vehicle.AbstractMinecart`: `WATER_SLOWDOWN_FACTOR`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`
- from `net.minecraftforge.common.extensions.IForgeAbstractMinecart`: `DEFAULT_AIR_DRAG`, `DEFAULT_MAX_SPEED_AIR_LATERAL`, `DEFAULT_MAX_SPEED_AIR_VERTICAL`

### Methods
- `protected Item getDropItem()`
- `private Runnable createTicker(Level p_150335_)`
- `public AbstractMinecart.Type getMinecartType()`
- `public BlockState getDefaultDisplayBlockState()`
- `protected void readAdditionalSaveData(CompoundTag p_38633_)`
- `protected void addAdditionalSaveData(CompoundTag p_38635_)`
- `public void handleEntityEvent(byte p_38631_)`
- `public void tick()`
- `public BaseSpawner getSpawner()`
- `public boolean onlyOpCanSetNbt()`

### Inherited methods
- from `net.minecraft.world.entity.vehicle.AbstractMinecart`: `activateMinecart`, `animateHurt`, `applyNaturalSlowdown`, `canCollideWith`, `canUseRail`, `comeOffTrack`, `createMinecart`, `defineSynchedData`, `destroy`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getCollisionHandler`, `getCurrentCartSpeedCapOnRail`, `getDamage`, `getDefaultDisplayOffset`, `getDismountLocationForPassenger`, `getDisplayBlockState`, `getDisplayOffset`, `getDragAir`, `getHurtDir`, `getHurtTime`, `getMaxSpeed`, `getMaxSpeedAirLateral`, `getMaxSpeedAirVertical`, `getMaxSpeedWithRail`, `getMotionDirection`, `getMovementEmission`, `getPassengerAttachmentPoint`, `getPickResult`, `getPos`, `getPosOffs`, `getRelativePortalPosition`, `hasCustomDisplay`, `hurt`, `isOnRails`, `isPickable`, `isPushable`, `lerpMotion`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `moveAlongTrack`, `moveMinecartOnRail`, `push`, `registerCollisionHandler`, `setCanUseRail`, `setCurrentCartSpeedCapOnRail`, `setCustomDisplay`, `setDamage`, `setDisplayBlockState`, `setDisplayOffset`, `setDragAir`, `setHurtDir`, `setHurtTime`, `setMaxSpeedAirLateral`, `setMaxSpeedAirVertical`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `causeFallDamage`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDirection`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSlot`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interact`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `recreateFromPacket`, `refreshDimensions`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `shouldShowName`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeAbstractMinecart`: `canBeRidden`, `getComparatorLevel`, `getCurrentRailPosition`, `getMaxCartSpeedOnRail`, `getSlopeAdjustment`, `isPoweredCart`, `shouldDoRailFunctions`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## MinecartTNT

*class* `net.minecraft.world.entity.vehicle.MinecartTNT`

### Fields
- `private static final byte EVENT_PRIME` (= 0xa)
- `private int fuse`

### Inherited fields
- from `net.minecraft.world.entity.vehicle.AbstractMinecart`: `WATER_SLOWDOWN_FACTOR`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`
- from `net.minecraftforge.common.extensions.IForgeAbstractMinecart`: `DEFAULT_AIR_DRAG`, `DEFAULT_MAX_SPEED_AIR_LATERAL`, `DEFAULT_MAX_SPEED_AIR_VERTICAL`

### Methods
- `public AbstractMinecart.Type getMinecartType()`
- `public BlockState getDefaultDisplayBlockState()`
- `public void tick()`
- `public boolean hurt(DamageSource p_38666_,  float p_38667_)`
- `public void destroy(DamageSource p_38664_)`
- `protected Item getDropItem()`
- `protected void explode(double p_38689_)`
- `protected void explode(@Nullable  DamageSource p_259539_,  double p_260287_)`
- `public boolean causeFallDamage(float p_150347_,  float p_150348_,  DamageSource p_150349_)`
- `public void activateMinecart(int p_38659_,  int p_38660_,  int p_38661_,  boolean p_38662_)`
- `public void handleEntityEvent(byte p_38657_)`
- `public void primeFuse()`
- `public int getFuse()`
- `public boolean isPrimed()`
- `public float getBlockExplosionResistance(Explosion p_38675_,  BlockGetter p_38676_,  BlockPos p_38677_,  BlockState p_38678_,  FluidState p_38679_,  float p_38680_)`
- `public boolean shouldBlockExplode(Explosion p_38669_,  BlockGetter p_38670_,  BlockPos p_38671_,  BlockState p_38672_,  float p_38673_)`
- `protected void readAdditionalSaveData(CompoundTag p_38682_)`
- `protected void addAdditionalSaveData(CompoundTag p_38687_)`

### Inherited methods
- from `net.minecraft.world.entity.vehicle.AbstractMinecart`: `animateHurt`, `applyNaturalSlowdown`, `canCollideWith`, `canUseRail`, `comeOffTrack`, `createMinecart`, `defineSynchedData`, `getBlockSpeedFactor`, `getBoundingBoxForCulling`, `getCollisionHandler`, `getCurrentCartSpeedCapOnRail`, `getDamage`, `getDefaultDisplayOffset`, `getDismountLocationForPassenger`, `getDisplayBlockState`, `getDisplayOffset`, `getDragAir`, `getHurtDir`, `getHurtTime`, `getMaxSpeed`, `getMaxSpeedAirLateral`, `getMaxSpeedAirVertical`, `getMaxSpeedWithRail`, `getMotionDirection`, `getMovementEmission`, `getPassengerAttachmentPoint`, `getPickResult`, `getPos`, `getPosOffs`, `getRelativePortalPosition`, `hasCustomDisplay`, `isOnRails`, `isPickable`, `isPushable`, `lerpMotion`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `moveAlongTrack`, `moveMinecartOnRail`, `push`, `registerCollisionHandler`, `setCanUseRail`, `setCurrentCartSpeedCapOnRail`, `setCustomDisplay`, `setDamage`, `setDisplayBlockState`, `setDisplayOffset`, `setDragAir`, `setHurtDir`, `setHurtTime`, `setMaxSpeedAirLateral`, `setMaxSpeedAirVertical`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `baseTick`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canBeHitByProjectile`, `canChangeDimensions`, `canControlVehicle`, `canFreeze`, `canRide`, `canSpawnSprintParticle`, `canSprint`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkFallDamage`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `doWaterSplashEffect`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getArmorSlots`, `getBbHeight`, `getBbWidth`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionChangingDelay`, `getDimensions`, `getDimensionsForge`, `getDirection`, `getDisplayName`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFireImmuneTicks`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getHandSlots`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMyRidingOffset`, `getName`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerRidingPosition`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPistonPushReaction`, `getPortalCooldown`, `getPortalWaitTime`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRopeHoldPosition`, `getRotationVector`, `getScoreboardName`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getSlot`, `getSoundSource`, `getStringUUID`, `getSwimHighSpeedSplashSound`, `getSwimSound`, `getSwimSplashSound`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getViewYRot`, `getVisualRotationYInDegrees`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYHeadRot`, `getYRot`, `getZ`, `getZ`, `handleDamageEvent`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interact`, `interactAt`, `is`, `isAddedToWorld`, `isAlive`, `isAlliedTo`, `isAlliedTo`, `isAlwaysTicking`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCurrentlyGlowing`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInvulnerableTo`, `isInWall`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isPassenger`, `isPassengerOfSameVehicle`, `isPushedByFluid`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSpectator`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isSwimming`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `isVisuallySwimming`, `kill`, `killedEntity`, `lavaHurt`, `lerpHeadTo`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `lookAt`, `makeBoundingBox`, `makeStuckInBlock`, `markHurt`, `maxUpStep`, `maybeBackOffFromEdge`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onBelowWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSound`, `playStepSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `recreateFromPacket`, `refreshDimensions`, `remove`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `removeVehicle`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rideTick`, `ridingOffset`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setItemSlot`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemainingFireTicks`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSprinting`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYBodyRot`, `setYHeadRot`, `setYRot`, `shouldBeSaved`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `shouldShowName`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopRiding`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `updateSwimming`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeAbstractMinecart`: `canBeRidden`, `getComparatorLevel`, `getCurrentRailPosition`, `getMaxCartSpeedOnRail`, `getSlopeAdjustment`, `isPoweredCart`, `shouldDoRailFunctions`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canSwimInFluidType`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getParts`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
