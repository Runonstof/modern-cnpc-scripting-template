# net.minecraftforge.common.util

- [BlockSnapshot](#blocksnapshot)
- [ChunkCoordComparator](#chunkcoordcomparator)
- [CompoundDataFixer](#compounddatafixer)
- [Constants](#constants)
- [Constants.AiMutexBits](#constants.aimutexbits)
- [Constants.AttributeModifierOperation](#constants.attributemodifieroperation)
- [Constants.BlockFlags](#constants.blockflags)
- [Constants.EntityFlags](#constants.entityflags)
- [Constants.NBT](#constants.nbt)
- [Constants.WorldEvents](#constants.worldevents)
- [EnumHelper](#enumhelper)
- [FakePlayer](#fakeplayer)
- [FakePlayerFactory](#fakeplayerfactory)
- [IDataFixerData](#idatafixerdata)
- [INBTSerializable](#inbtserializable)
- [ITeleporter](#iteleporter)
- [JsonUtils](#jsonutils)
- [JsonUtils.ImmutableListTypeAdapter](#jsonutils.immutablelisttypeadapter)
- [JsonUtils.ImmutableMapTypeAdapter](#jsonutils.immutablemaptypeadapter)
- [ModFixs](#modfixs)
- [PacketUtil](#packetutil)
- [RecipeMatcher](#recipematcher)
- [TextTable](#texttable)
- [TextTable.Alignment](#texttable.alignment)
- [TextTable.Column](#texttable.column)
- [TextTable.Row](#texttable.row)
- [WorldCapabilityData](#worldcapabilitydata)
## BlockSnapshot

*class* `net.minecraftforge.common.util.BlockSnapshot`

Represents a captured snapshot of a block which will not change
 automatically.

 Unlike Block, which only one object can exist per coordinate, BlockSnapshot
 can exist multiple times for any given Block.

### Methods
- `public static BlockSnapshot getBlockSnapshot(World world,  BlockPos pos)`
- `public static BlockSnapshot getBlockSnapshot(World world,  BlockPos pos,  int flag)`
- `public static BlockSnapshot readFromNBT(NBTTagCompound tag)`
- `public IBlockState getCurrentBlock()`
- `public World getWorld()`
- `public IBlockState getReplacedBlock()`
- `public TileEntity getTileEntity()`
- `public boolean restore()`
- `public boolean restore(boolean force)`
- `public boolean restore(boolean force,  boolean notifyNeighbors)`
- `public boolean restoreToLocation(World world,  BlockPos pos,  boolean force,  boolean notifyNeighbors)`
- `public void writeToNBT(NBTTagCompound compound)`
- `public boolean equals(java.lang.Object obj)`
- `public int hashCode()`
- `public BlockPos getPos()`
- `public int getDimId()`
- `public void setReplacedBlock(IBlockState replacedBlock)`
- `public int getFlag()`
- `public void setFlag(int flag)`
- `public NBTTagCompound getNbt()`
- `public void setWorld(World world)`
- `public ResourceLocation getRegistryName()`
- `public int getMeta()`

## ChunkCoordComparator

*class* `net.minecraftforge.common.util.ChunkCoordComparator`

All Implemented Interfaces: java.util.Comparator<ChunkPos>

### Methods
- `public int compare(ChunkPos a,  ChunkPos b)`

### Inherited methods
- from `java.util.Comparator`: `comparing`, `comparing`, `comparingDouble`, `comparingInt`, `comparingLong`, `equals`, `naturalOrder`, `nullsFirst`, `nullsLast`, `reversed`, `reverseOrder`, `thenComparing`, `thenComparing`, `thenComparing`, `thenComparingDouble`, `thenComparingInt`, `thenComparingLong`

## CompoundDataFixer

*class* `net.minecraftforge.common.util.CompoundDataFixer`

All Implemented Interfaces: IDataFixer

### Inherited fields
- from `net.minecraft.util.datafix.DataFixer`: `version`

### Methods
- `public NBTTagCompound process(IFixType type,  NBTTagCompound nbt)`
- `@Deprecated public NBTTagCompound process(IFixType type,  NBTTagCompound nbt,  int mcversion)` (deprecated)
  Deprecated.
- `@Deprecated public void registerFix(IFixType type,  IFixableData fixable)` (deprecated)
  Deprecated.
- `@Deprecated public void registerWalker(FixTypes type,  IDataWalker walker)` (deprecated)
  Deprecated.
- `public void registerVanillaWalker(IFixType type,  IDataWalker walker)`
- `public ModFixs init(java.lang.String modid,  int version)`
  Initialize your mod specific data fixer.
  - param: modid - You mod id, must be lower case.
  - param: version - The current data version of your mod
- `public void writeVersionData(NBTTagCompound nbt)`

## Constants

*class* `net.minecraftforge.common.util.Constants`

A class containing constants for magic numbers used in the minecraft codebase.
 Everything here should be checked each update, and have a comment relating to where to check it.

## Constants.AiMutexBits

*class* `net.minecraftforge.common.util.Constants.AiMutexBits`

The mutex bits used for AI tasks EntityAIBase.setMutexBits(int)
 Bits can be combined with bitwise OR

Enclosing class: Constants

### Fields
- `public static final int MOVE` (= 1)
- `public static final int LOOK` (= 2)
- `public static final int JUMP` (= 4)

## Constants.AttributeModifierOperation

*class* `net.minecraftforge.common.util.Constants.AttributeModifierOperation`

The operation used for Attribute modifier operations, AttributeModifier(String, double, int)

 Can be found at ModifiableAttributeInstance.computeValue()

 The total value starts with the base value.

 Order of operations are ADD, ADD_MULTIPLE, MULTIPLY

Enclosing class: Constants

### Fields
- `public static final int ADD` (= 0)
  The modifier value is added onto the total value
- `public static final int ADD_MULTIPLE` (= 1)
  The modifier value is multiplied by the original base value then added onto the total value
- `public static final int MULTIPLY` (= 2)
  The total value is multiplied by 1 + the modifier value

## Constants.BlockFlags

*class* `net.minecraftforge.common.util.Constants.BlockFlags`

The flags used when calling World.setBlockState(net.minecraft.util.math.BlockPos, net.minecraft.block.state.IBlockState, int)

 Can be found from World.markAndNotifyBlock(net.minecraft.util.math.BlockPos, net.minecraft.world.chunk.Chunk, net.minecraft.block.state.IBlockState, net.minecraft.block.state.IBlockState, int) and RenderGlobal.notifyBlockUpdate(net.minecraft.world.World, net.minecraft.util.math.BlockPos, net.minecraft.block.state.IBlockState, net.minecraft.block.state.IBlockState, int)

 Flags can be combined with bitwise OR

Enclosing class: Constants

### Fields
- `public static final int NOTIFY_NEIGHBORS` (= 1)
  Calls neighborChanged on surrounding blocks
- `public static final int SEND_TO_CLIENTS` (= 2)
  Sends the update to the client
- `public static final int NO_RERENDER` (= 4)
  Stops the blocks from being marked for a render update
- `public static final int RERENDER_MAIN_THREAD` (= 8)
  Makes the block be re-rendered immediately, on the main thread.
   If NO_RERENDER is set, then this will be ignored
- `public static final int NO_OBSERVERS` (= 16)
  Disables observers from seeing this update
- `public static final int DEFAULT` (= 3)
- `public static final int DEFAULT_AND_RERENDER` (= 11)

## Constants.EntityFlags

*class* `net.minecraftforge.common.util.Constants.EntityFlags`

The flags used for Entity.getFlag(int) and Entity.setFlag(int, boolean)}

 Can be found by searching for the usages of getFlag

Enclosing class: Constants

### Fields
- `public static final int BURNING` (= 0)
- `public static final int SNEAKING` (= 1)
- `public static final int SPRINTING` (= 3)
- `public static final int INVISIBLE` (= 5)
- `public static final int GLOWING` (= 6)
- `public static final int ELYTRA_FLYING` (= 7)

## Constants.NBT

*class* `net.minecraftforge.common.util.Constants.NBT`

NBT Tag type IDS, used when storing the nbt to disc, Should align with NBTBase.getId,
 table used in NBTBase.func_150283_g

 Main use is checking tag type in NBTTagCompound.hasKey(String, int)

Enclosing class: Constants

### Fields
- `public static final int TAG_END` (= 0)
- `public static final int TAG_BYTE` (= 1)
- `public static final int TAG_SHORT` (= 2)
- `public static final int TAG_INT` (= 3)
- `public static final int TAG_LONG` (= 4)
- `public static final int TAG_FLOAT` (= 5)
- `public static final int TAG_DOUBLE` (= 6)
- `public static final int TAG_BYTE_ARRAY` (= 7)
- `public static final int TAG_STRING` (= 8)
- `public static final int TAG_LIST` (= 9)
- `public static final int TAG_COMPOUND` (= 10)
- `public static final int TAG_INT_ARRAY` (= 11)
- `public static final int TAG_LONG_ARRAY` (= 12)
- `public static final int TAG_ANY_NUMERIC` (= 99)

## Constants.WorldEvents

*class* `net.minecraftforge.common.util.Constants.WorldEvents`

The world event IDS, used when calling World.playEvent(net.minecraft.entity.player.EntityPlayer, int, net.minecraft.util.math.BlockPos, int).

 Can be found from RenderGlobal.playEvent(net.minecraft.entity.player.EntityPlayer, int, net.minecraft.util.math.BlockPos, int)

 Some of the events use the data parameter. If this is the case, an explanation of what data does is also provided

Enclosing class: Constants

### Fields
- `public static final int DISPENSER_DISPENSE_SOUND` (= 1000)
- `public static final int DISPENSER_FAIL_SOUND` (= 1001)
- `public static final int DISPENSER_LAUNCH_SOUND` (= 1002)
  Like DISPENSER_DISPENSE_SOUND, but for items that are fired (arrows, eggs, snowballs)
- `public static final int ENDEREYE_LAUNCH_SOUND` (= 1003)
- `public static final int FIREWORK_SHOOT_SOUND` (= 1004)
- `public static final int IRON_DOOR_OPEN_SOUND` (= 1005)
- `public static final int WOODEN_DOOR_OPEN_SOUND` (= 1006)
- `public static final int WOODEN_TRAPDOOR_OPEN_SOUND` (= 1007)
- `public static final int FENCE_GATE_OPEN_SOUND` (= 1008)
- `public static final int FIRE_EXTINGUISH_SOUND` (= 1009)
- `public static final int PLAY_RECORD_SOUND` (= 1010)
  data is the item ID of the record you want to play
- `public static final int IRON_DOOR_CLOSE_SOUND` (= 1011)
- `public static final int WOODEN_DOOR_CLOSE_SOUND` (= 1012)
- `public static final int WOODEN_TRAPDOOR_CLOSE_SOUND` (= 1013)
- `public static final int FENCE_GATE_CLOSE_SOUND` (= 1014)
- `public static final int GHAST_WARN_SOUND` (= 1015)
- `public static final int GHAST_SHOOT_SOUND` (= 1016)
- `public static final int ENDERDRAGON_SHOOT_SOUND` (= 1017)
- `public static final int BLAZE_SHOOT_SOUND` (= 1018)
- `public static final int ZOMBIE_ATTACK_DOOR_WOOD_SOUND` (= 1019)
- `public static final int ZOMBIE_ATTACK_DOOR_IRON_SOUND` (= 1020)
- `public static final int ZOMBIE_BREAK_DOOR_WOOD_SOUND` (= 1021)
- `public static final int WITHER_BREAK_BLOCK_SOUND` (= 1022)
- `public static final int WITHER_BREAK_BLOCK` (= 1023)
- `public static final int WITHER_SHOOT_SOUND` (= 1024)
- `public static final int BAT_TAKEOFF_SOUND` (= 1025)
- `public static final int ZOMBIE_INFECT_SOUND` (= 1026)
- `public static final int ZOMBIE_VILLAGER_CONVERTED_SOUND` (= 1027)
- `public static final int ANVIL_DESTROYED_SOUND` (= 1029)
- `public static final int ANVIL_USE_SOUND` (= 1030)
- `public static final int ANVIL_LAND_SOUND` (= 1031)
- `public static final int PORTAL_TRAVEL_SOUND` (= 1032)
- `public static final int CHORUS_FLOWER_GROW_SOUND` (= 1033)
- `public static final int CHORUS_FLOWER_DEATH_SOUND` (= 1034)
- `public static final int BREWING_STAND_BREW_SOUND` (= 1035)
- `public static final int IRON_TRAPDOOR_CLOSE_SOUND` (= 1036)
- `public static final int IRON_TRAPDOOR_OPEN_SOUND` (= 1037)
- `public static final int DISPENSER_SMOKE` (= 2000)
  data is the direction of the smoke, as a grid around the dispenser as follows (with 4 being the position of the dispenser):
   N
   0 | 1 | 2
   ----------
   W 3 | 4 | 5 E
   ----------
   6 | 7 | 8
   S
  
   Setting the data to 4 will mean the particles won't spawn
- `public static final int BREAK_BLOCK_EFFECTS` (= 2001)
  data is the state id of the block broken
- `public static final int SPLASH_POTION_EFFECT` (= 2002)
  data is the rgb color int that should be used for the potion particles
- `public static final int ENDER_EYE_SHATTER` (= 2003)
- `public static final int MOB_SPAWNER_PARTICLES` (= 2004)
- `public static final int BONEMEAL_PARTICLES` (= 2005)
  data is the amount of particles to spawn. If data is 0 then there will be 15 particles spawned
- `public static final int DRAGON_FIREBALL_HIT` (= 2006)
- `public static final int LINGERING_POTION_EFFECT` (= 2007)
  data is the rgb color int that should be used for the potion particles
- `public static final int GATEWAY_SPAWN_EFFECTS` (= 3000)
- `public static final int ENDERMAN_GROWL_SOUND` (= 3001)

## EnumHelper

*class* `net.minecraftforge.common.util.EnumHelper`

### Methods
- `public static EnumAction addAction(java.lang.String name)`
- `public static ItemArmor.ArmorMaterial addArmorMaterial(java.lang.String name,  java.lang.String textureName,  int durability,  int[] reductionAmounts,  int enchantability,  SoundEvent soundOnEquip,  float toughness)`
- `public static EntityPainting.EnumArt addArt(java.lang.String name,  java.lang.String tile,  int sizeX,  int sizeY,  int offsetX,  int offsetY)`
- `public static EnumCreatureAttribute addCreatureAttribute(java.lang.String name)`
- `public static EnumCreatureType addCreatureType(java.lang.String name,  java.lang.Class<? extends IAnimals> typeClass,  int maxNumber,  Material material,  boolean peaceful,  boolean animal)`
- `public static StructureStrongholdPieces.Stronghold.Door addDoor(java.lang.String name)`
- `public static EnumEnchantmentType addEnchantmentType(java.lang.String name,  <any> delegate)`
- `public static BlockPressurePlate.Sensitivity addSensitivity(java.lang.String name)`
- `public static RayTraceResult.Type addMovingObjectType(java.lang.String name)`
- `public static EnumSkyBlock addSkyBlock(java.lang.String name,  int lightValue)`
- `public static EntityPlayer.SleepResult addStatus(java.lang.String name)`
- `public static Item.ToolMaterial addToolMaterial(java.lang.String name,  int harvestLevel,  int maxUses,  float efficiency,  float damage,  int enchantability)`
- `@Deprecated public static EnumRarity addRarity(java.lang.String name,  TextFormatting color,  java.lang.String displayName)` (deprecated)
  Deprecated. use IRarity instead
- `public static EntityLiving.SpawnPlacementType addSpawnPlacementType(java.lang.String name,  java.util.function.BiPredicate<IBlockAccess,BlockPos> predicate)`
- `public static HorseArmorType addHorseArmor(java.lang.String name,  java.lang.String textureLocation,  int armorStrength)`
  - param: name - the name of the new HorseArmorType
  - param: textureLocation - the path to the texture for this armor type. It must follow the format domain:path and be relative to the assets folder.
  - param: armorStrength - how much protection this armor type should give
  - returns: the new HorseArmorType, or null if it could not be created
- `public static void setFailsafeFieldValue(java.lang.reflect.Field field,  java.lang.Object target,  java.lang.Object value)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `protected static <T extends java.lang.Enum<?>> T addEnum(java.lang.Class<?>[][] map,  java.lang.Class<T> enumType,  java.lang.String enumName,  java.lang.Object... paramValues)`
- `public static void testEnum(java.lang.Class<? extends java.lang.Enum<?>> enumType,  java.lang.Class<?>[] paramTypes)`
- `public static <T extends java.lang.Enum<?>> T addEnum(java.lang.Class<T> enumType,  java.lang.String enumName,  java.lang.Class<?>[] paramTypes,  java.lang.Object... paramValues)`

## FakePlayer

*class* `net.minecraftforge.common.util.FakePlayer`

All Implemented Interfaces: ICommandSender, IContainerListener, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.entity.player.EntityPlayerMP`: `connection`, `currentWindowId`, `interactionManager`, `isChangingQuantityOnly`, `managedPosX`, `managedPosZ`, `mcServer`, `ping`, `queuedEndExit`
- from `net.minecraft.entity.player.EntityPlayer`: `bedLocation`, `cameraYaw`, `capabilities`, `chasingPosX`, `chasingPosY`, `chasingPosZ`, `enderChest`, `experience`, `experienceLevel`, `experienceTotal`, `eyeHeight`, `fishEntity`, `flyToggleTimer`, `foodStats`, `inventory`, `inventoryContainer`, `LEFT_SHOULDER_ENTITY`, `MAIN_HAND`, `openContainer`, `PERSISTED_NBT_TAG`, `PLAYER_MODEL_FLAG`, `prevCameraYaw`, `prevChasingPosX`, `prevChasingPosY`, `prevChasingPosZ`, `REACH_DISTANCE`, `renderOffsetX`, `renderOffsetY`, `renderOffsetZ`, `RIGHT_SHOULDER_ENTITY`, `sleeping`, `spawnChunkMap`, `spawnForced`, `spawnForcedMap`, `spawnPos`, `speedInAir`, `xpCooldown`, `xpSeed`
- from `net.minecraft.entity.EntityLivingBase`: `activeItemStack`, `activeItemStackUseCount`, `arrowHitTimer`, `attackedAtYaw`, `attackingPlayer`, `cameraPitch`, `dead`, `deathTime`, `HAND_STATES`, `hurtTime`, `idleTime`, `interpTargetPitch`, `interpTargetX`, `interpTargetY`, `interpTargetYaw`, `interpTargetZ`, `isJumping`, `isSwingInProgress`, `jumpMovementFactor`, `lastDamage`, `limbSwing`, `limbSwingAmount`, `maxHurtResistantTime`, `maxHurtTime`, `movedDistance`, `moveForward`, `moveStrafing`, `moveVertical`, `newPosRotationIncrements`, `onGroundSpeedFactor`, `prevCameraPitch`, `prevLimbSwingAmount`, `prevMovedDistance`, `prevOnGroundSpeedFactor`, `prevRenderYawOffset`, `prevRotationYawHead`, `prevSwingProgress`, `randomUnused1`, `randomUnused2`, `randomYawVelocity`, `recentlyHit`, `renderYawOffset`, `rotationYawHead`, `scoreValue`, `SWIM_SPEED`, `swingingHand`, `swingProgress`, `swingProgressInt`, `ticksElytraFlying`, `ticksSinceLastSwing`, `unused180`
- from `net.minecraft.entity.Entity`: `addedToChunk`, `cachedUniqueIdString`, `capturedDrops`, `captureDrops`, `chunkCoordX`, `chunkCoordY`, `chunkCoordZ`, `collided`, `collidedHorizontally`, `collidedVertically`, `dataManager`, `dimension`, `distanceWalkedModified`, `distanceWalkedOnStepModified`, `entityCollisionReduction`, `entityUniqueID`, `fallDistance`, `firstUpdate`, `FLAGS`, `forceSpawn`, `glowing`, `height`, `hurtResistantTime`, `ignoreFrustumCheck`, `inPortal`, `inWater`, `isAirBorne`, `isDead`, `isImmuneToFire`, `isInWeb`, `lastPortalPos`, `lastPortalVec`, `lastTickPosX`, `lastTickPosY`, `lastTickPosZ`, `motionX`, `motionY`, `motionZ`, `noClip`, `onGround`, `portalCounter`, `posX`, `posY`, `posZ`, `prevDistanceWalkedModified`, `preventEntitySpawning`, `prevPosX`, `prevPosY`, `prevPosZ`, `prevRotationPitch`, `prevRotationYaw`, `rand`, `rideCooldown`, `rotationPitch`, `rotationYaw`, `serverPosX`, `serverPosY`, `serverPosZ`, `stepHeight`, `teleportDirection`, `ticksExisted`, `timeUntilPortal`, `updateBlocked`, `velocityChanged`, `width`, `world`

### Methods
- `public Vec3d getPositionVector()`
- `public boolean canUseCommand(int i,  java.lang.String s)`
- `public void sendStatusMessage(ITextComponent chatComponent,  boolean actionBar)`
- `public void sendMessage(ITextComponent component)`
- `public void addStat(StatBase par1StatBase,  int par2)`
- `public void openGui(java.lang.Object mod,  int modGuiId,  World world,  int x,  int y,  int z)`
  Description copied from class: EntityPlayer
  Opens a GUI with this player, uses FML's IGuiHandler system.
   Allows for extension by modders.
  - param: mod - The mod trying to open a GUI
  - param: modGuiId - GUI ID
  - param: world - Current World
  - param: x - Passed directly to IGuiHandler, data meaningless Typically world X position
  - param: y - Passed directly to IGuiHandler, data meaningless Typically world Y position
  - param: z - Passed directly to IGuiHandler, data meaningless Typically world Z position
- `public boolean isEntityInvulnerable(DamageSource source)`
- `public boolean canAttackPlayer(EntityPlayer player)`
- `public void onDeath(DamageSource source)`
- `public void onUpdate()`
- `public Entity changeDimension(int dim,  ITeleporter teleporter)`
- `public void handleClientSettings(CPacketClientSettings pkt)`
- `public MinecraftServer getServer()`

### Inherited methods
- from `net.minecraft.entity.player.EntityPlayerMP`: `addEntity`, `addExperienceLevel`, `addSelfToInternalCraftingInventory`, `attackEntityFrom`, `attackTargetEntityWithCurrentItem`, `awardKillScore`, `clearElytraFlying`, `clearInvulnerableDimensionChange`, `closeContainer`, `closeScreen`, `copyFrom`, `createCooldownTracker`, `decrementTimeUntilPortal`, `dismountRidingEntity`, `displayGui`, `displayGUIChest`, `displayGuiCommandBlock`, `displayVillagerTradeGui`, `frostWalk`, `getAdvancements`, `getChatVisibility`, `getEnteredNetherPosition`, `getLastActiveTime`, `getNextWindowId`, `getPlayerIP`, `getPosition`, `getRecipeBook`, `getServerWorld`, `getSpectatingEntity`, `getStatFile`, `getTabListDisplayName`, `handleFalling`, `hasDisconnected`, `isCreative`, `isInvulnerableDimensionChange`, `isSpectatedByPlayer`, `isSpectator`, `loadResourcePack`, `markPlayerActive`, `mountEntityAndWakeUp`, `onChangedPotionEffect`, `onCriticalHit`, `onEnchant`, `onEnchantmentCritical`, `onFinishedPotionEffect`, `onInsideBlock`, `onItemPickup`, `onItemUseFinish`, `onNewPotionEffect`, `onUpdateEntity`, `openBook`, `openEditSign`, `openGuiHorseInventory`, `readEntityFromNBT`, `registerFixesPlayerMP`, `removeEntity`, `resetRecipes`, `sendAllContents`, `sendAllWindowProperties`, `sendContainerToPlayer`, `sendEndCombat`, `sendEnterCombat`, `sendPlayerAbilities`, `sendSlotContents`, `sendWindowProperty`, `setElytraFlying`, `setEntityActionState`, `setGameType`, `setPlayerHealthUpdated`, `setPositionAndUpdate`, `setSpectatingEntity`, `startRiding`, `swingArm`, `takeStat`, `trySleep`, `unlockRecipes`, `unlockRecipes`, `updateFallState`, `updateHeldItem`, `updatePotionMetadata`, `wakeUpPlayer`, `writeEntityToNBT`
- from `net.minecraft.entity.player.EntityPlayer`: `addExhaustion`, `addExperience`, `addItemStackToInventory`, `addMovementStat`, `addPrefix`, `addScore`, `addShoulderEntity`, `addStat`, `addSuffix`, `applyEntityAttributes`, `applyEntityCollision`, `blockUsingShield`, `canEat`, `canHarvestBlock`, `canOpen`, `canPlayerEdit`, `canTriggerWalking`, `canUseCommandBlock`, `damageArmor`, `damageEntity`, `damageShield`, `destroyVanishingCursedItems`, `disableShield`, `displayGuiEditCommandCart`, `doWaterSplashEffect`, `dropItem`, `dropItem`, `dropItem`, `dropItemAndGetStack`, `entityInit`, `fall`, `getAbsorptionAmount`, `getAIMoveSpeed`, `getAlwaysRenderNameTagForRender`, `getArmorInventoryList`, `getArmorVisibility`, `getBedLocation`, `getBedLocation`, `getBedOrientationInDegrees`, `getBedSpawnLocation`, `getCapability`, `getCooldownPeriod`, `getCooldownTracker`, `getCooledAttackStrength`, `getDeathSound`, `getDefaultEyeHeight`, `getDigSpeed`, `getDigSpeed`, `getDisplayName`, `getDisplayNameString`, `getExperiencePoints`, `getEyeHeight`, `getFallSound`, `getFireImmuneTicks`, `getFoodStats`, `getGameProfile`, `getHeldEquipment`, `getHurtSound`, `getInventoryEnderChest`, `getItemStackFromSlot`, `getLeftShoulderEntity`, `getLuck`, `getMaxInPortalTime`, `getName`, `getOfflineUUID`, `getPortalCooldown`, `getPrefixes`, `getPrimaryHand`, `getRightShoulderEntity`, `getScore`, `getSleepTimer`, `getSoundCategory`, `getSpawnDimension`, `getSplashSound`, `getSuffixes`, `getSwimSound`, `getTeam`, `getUUID`, `getWorldScoreboard`, `getXPSeed`, `getYOffset`, `handleStatusUpdate`, `hasCapability`, `hasReducedDebug`, `hasSpawnDimension`, `interactOn`, `isAllowEdit`, `isEntityInsideOpaqueBlock`, `isInvisibleToPlayer`, `isMovementBlocked`, `isPlayer`, `isPlayerFullyAsleep`, `isPlayerSleeping`, `isPushedByWater`, `isSpawnForced`, `isSpawnForced`, `isUser`, `isWearing`, `jump`, `onKillEntity`, `onLivingUpdate`, `openEditStructure`, `playSound`, `preparePlayerToSpawn`, `refreshDisplayName`, `registerFixesPlayer`, `replaceItemInInventory`, `resetCooldown`, `respawnPlayer`, `sendCommandFeedback`, `setAbsorptionAmount`, `setDead`, `setInWeb`, `setItemStackToSlot`, `setLeftShoulderEntity`, `setPrimaryHand`, `setReducedDebug`, `setRightShoulderEntity`, `setScore`, `setSpawnChunk`, `setSpawnDimension`, `setSpawnPoint`, `shouldHeal`, `spawnShoulderEntities`, `spawnSweepParticles`, `travel`, `updateEntityActionState`, `updateRidden`, `updateSize`, `xpBarCap`
- from `net.minecraft.entity.EntityLivingBase`: `addPotionEffect`, `applyArmorCalculations`, `applyPotionDamageCalculations`, `areAllPotionsAmbient`, `attackable`, `attackEntityAsMob`, `attemptTeleport`, `canBeCollidedWith`, `canBeHitWithPotion`, `canBePushed`, `canBreatheUnderwater`, `canDropLoot`, `canEntityBeSeen`, `clearActivePotions`, `collideWithEntity`, `collideWithNearbyEntities`, `curePotionEffects`, `decreaseAirSupply`, `dismountEntity`, `dropEquipment`, `dropFewItems`, `dropLoot`, `getActiveHand`, `getActiveItemStack`, `getActivePotionEffect`, `getActivePotionEffects`, `getActivePotionMap`, `getArrowCountInEntity`, `getAttackingEntity`, `getAttributeMap`, `getCombatTracker`, `getCreatureAttribute`, `getEntityAttribute`, `getHealth`, `getHeldItem`, `getHeldItemMainhand`, `getHeldItemOffhand`, `getIdleTime`, `getItemInUseCount`, `getItemInUseMaxCount`, `getJumpUpwardsMotion`, `getLastAttackedEntity`, `getLastAttackedEntityTime`, `getLastDamageSource`, `getLook`, `getMaxHealth`, `getRevengeTarget`, `getRevengeTimer`, `getRNG`, `getRotationYawHead`, `getSoundPitch`, `getSoundVolume`, `getSwingProgress`, `getTicksElytraFlying`, `getTotalArmorValue`, `getWaterSlowDown`, `handleJumpLava`, `handleJumpWater`, `hasItemInSlot`, `heal`, `isActiveItemStackBlocking`, `isChild`, `isElytraFlying`, `isEntityAlive`, `isEntityUndead`, `isHandActive`, `isOnLadder`, `isPotionActive`, `isPotionApplicable`, `isServerWorld`, `knockBack`, `markPotionsDirty`, `markVelocityChanged`, `moveRelative`, `notifyDataManagerChange`, `onDeathUpdate`, `onEntityUpdate`, `onKillCommand`, `outOfWorld`, `performHurtAnimation`, `playEquipSound`, `playHurtSound`, `removeActivePotionEffect`, `removePotionEffect`, `renderBrokenItemStack`, `resetActiveHand`, `resetPotionEffectMetadata`, `setActiveHand`, `setAIMoveSpeed`, `setArrowCountInEntity`, `setHealth`, `setHeldItem`, `setJumping`, `setLastAttackedEntity`, `setPartying`, `setPositionAndRotationDirect`, `setRenderYawOffset`, `setRevengeTarget`, `setRotationYawHead`, `setSprinting`, `shouldRiderFaceForward`, `stopActiveHand`, `updateActiveHand`, `updateArmSwingProgress`, `updateDistance`, `updateItemUse`, `updatePotionEffects`
- from `net.minecraft.entity.Entity`: `addEntityCrashInfo`, `addPassenger`, `addTag`, `addTrackingPlayer`, `addVelocity`, `applyEnchantments`, `applyOrientationToEntity`, `applyPlayerInteraction`, `canBeAttackedWithItem`, `canBeRidden`, `canExplosionDestroyBlock`, `canFitPassenger`, `canPassengerSteer`, `canRenderOnFire`, `canRiderInteract`, `canTrample`, `changeDimension`, `copyLocationAndAnglesFrom`, `createRunningParticles`, `dealFireDamage`, `deserializeNBT`, `doBlockCollisions`, `doesEntityNotTriggerPressurePlate`, `dropItem`, `dropItemWithOffset`, `entityDropItem`, `equals`, `extinguish`, `getAdjustedHorizontalFacing`, `getAir`, `getAlwaysRenderNameTag`, `getBrightness`, `getBrightnessForRender`, `getCachedUniqueIdString`, `getCollisionBorderSize`, `getCollisionBoundingBox`, `getCollisionBox`, `getCommandSenderEntity`, `getCommandStats`, `getControllingPassenger`, `getCustomNameTag`, `getDataManager`, `getDistance`, `getDistance`, `getDistanceSq`, `getDistanceSq`, `getDistanceSq`, `getDistanceSqToCenter`, `getEntityBoundingBox`, `getEntityData`, `getEntityId`, `getEntityString`, `getEntityWorld`, `getEquipmentAndArmor`, `getExplosionResistance`, `getFlag`, `getForward`, `getHorizontalFacing`, `getHoverEvent`, `getIsInvulnerable`, `getLastPortalVec`, `getLookVec`, `getLowestRidingEntity`, `getMaxFallHeight`, `getMirroredYaw`, `getMountedYOffset`, `getParts`, `getPassengers`, `getPersistentID`, `getPickedResult`, `getPitchYaw`, `getPositionEyes`, `getPushReaction`, `getRecursivePassengers`, `getRecursivePassengersByType`, `getRenderBoundingBox`, `getRenderDistanceWeight`, `getRidingEntity`, `getRotatedYaw`, `getTags`, `getTeleportDirection`, `getUniqueID`, `getVectorForRotation`, `handleWaterMovement`, `hasCustomName`, `hashCode`, `hasNoGravity`, `hitByEntity`, `ignoreItemEntityData`, `isAddedToWorld`, `isBeingRidden`, `isBurning`, `isCreatureType`, `isEntityEqual`, `isGlowing`, `isImmuneToExplosions`, `isImmuneToFire`, `isInLava`, `isInRangeToRender3d`, `isInRangeToRenderDist`, `isInsideOfMaterial`, `isInvisible`, `isInWater`, `isNonBoss`, `isOffsetPositionInLiquid`, `isOnSameTeam`, `isOnScoreboardTeam`, `isOutsideBorder`, `isOverWater`, `isPassenger`, `isRiding`, `isRidingOrBeingRiddenBy`, `isRidingSameEntity`, `isSilent`, `isSneaking`, `isSprinting`, `isWet`, `makeFlySound`, `move`, `moveToBlockPosAndAngles`, `newDoubleNBTList`, `newFloatNBTList`, `onAddedToWorld`, `onCollideWithPlayer`, `onRemovedFromWorld`, `onStruckByLightning`, `playFlySound`, `playStepSound`, `processInitialInteract`, `pushOutOfBlocks`, `rayTrace`, `readFromNBT`, `registerFixes`, `removePassenger`, `removePassengers`, `removeTag`, `removeTrackingPlayer`, `resetEntityId`, `resetPositionToBB`, `serializeNBT`, `setAir`, `setAlwaysRenderNameTag`, `setCommandStat`, `setCommandStats`, `setCustomNameTag`, `setDropItemsWhenDead`, `setEntityBoundingBox`, `setEntityId`, `setEntityInvulnerable`, `setFire`, `setFlag`, `setGlowing`, `setInvisible`, `setLocationAndAngles`, `setNoGravity`, `setOnFireFromLava`, `setOutsideBorder`, `setPortal`, `setPosition`, `setPositionAndRotation`, `setPositionNonDirty`, `setRenderDistanceWeight`, `setRotation`, `setSilent`, `setSize`, `setSneaking`, `setUniqueId`, `setVelocity`, `setWorld`, `shouldDismountInWater`, `shouldRenderInPass`, `shouldRiderSit`, `shouldSetPosAfterLoading`, `spawnRunningParticles`, `startRiding`, `toString`, `turn`, `updatePassenger`, `writeToNBT`, `writeToNBTAtomically`, `writeToNBTOptional`

## FakePlayerFactory

*class* `net.minecraftforge.common.util.FakePlayerFactory`

### Methods
- `public static FakePlayer getMinecraft(WorldServer world)`
- `public static FakePlayer get(WorldServer world,  GameProfile username)`
  Get a fake player with a given username,
   Mods should either hold weak references to the return value, or listen for a
   WorldEvent.Unload and kill all references to prevent worlds staying in memory.
- `public static void unloadWorld(WorldServer world)`

## IDataFixerData

*interface* `net.minecraftforge.common.util.IDataFixerData`

All Superinterfaces: IDataFixer

### Methods
- `int getVersion(java.lang.String mod)`

### Inherited methods
- from `net.minecraft.util.datafix.IDataFixer`: `process`

## INBTSerializable

*interface* `net.minecraftforge.common.util.INBTSerializable`

An interface designed to unify various things in the Minecraft
 code base that can be serialized to and from a NBT tag.

### Methods
- `T serializeNBT()`
- `void deserializeNBT(T nbt)`

## ITeleporter

*interface* `net.minecraftforge.common.util.ITeleporter`

Interface for handling the placement of entities during dimension change.

 An implementation of this interface can be used to place the entity
 in a safe location, or generate a return portal, for instance.

 See the Teleporter class, which has
 been patched to implement this interface, for a vanilla example.

### Methods
- `void placeEntity(World world,  Entity entity,  float yaw)`
  Called to handle placing the entity in the new world.
  
   The initial position of the entity will be its
   position in the origin world, multiplied horizontally
   by the computed cross-dimensional movement factor
   (see WorldProvider.getMovementFactor()).
  
   Note that the supplied entity has not yet been spawned
   in the destination world at the time.
  - param: world - the entity's destination
  - param: entity - the entity to be placed
  - param: yaw - the suggested yaw value to apply
- `default boolean isVanilla()`

## JsonUtils

*class* `net.minecraftforge.common.util.JsonUtils`

### Methods
- `public static NBTTagCompound readNBT(JsonObject json,  java.lang.String key)`

## JsonUtils.ImmutableListTypeAdapter

*enum* `net.minecraftforge.common.util.JsonUtils.ImmutableListTypeAdapter`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<JsonUtils.ImmutableListTypeAdapter>

Enclosing class: JsonUtils

### Fields
- `public static final JsonUtils.ImmutableListTypeAdapter INSTANCE`

### Methods
- `public static JsonUtils.ImmutableListTypeAdapter[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (JsonUtils.ImmutableListTypeAdapter c : JsonUtils.ImmutableListTypeAdapter.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static JsonUtils.ImmutableListTypeAdapter valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public <any> deserialize(JsonElement json,  java.lang.reflect.Type type,  JsonDeserializationContext context)  throws JsonParseException`
  - throws: JsonParseException
- `public JsonElement serialize(<any> src,  java.lang.reflect.Type type,  JsonSerializationContext context)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## JsonUtils.ImmutableMapTypeAdapter

*enum* `net.minecraftforge.common.util.JsonUtils.ImmutableMapTypeAdapter`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<JsonUtils.ImmutableMapTypeAdapter>

Enclosing class: JsonUtils

### Fields
- `public static final JsonUtils.ImmutableMapTypeAdapter INSTANCE`

### Methods
- `public static JsonUtils.ImmutableMapTypeAdapter[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (JsonUtils.ImmutableMapTypeAdapter c : JsonUtils.ImmutableMapTypeAdapter.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static JsonUtils.ImmutableMapTypeAdapter valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public <any> deserialize(JsonElement json,  java.lang.reflect.Type type,  JsonDeserializationContext context)  throws JsonParseException`
  - throws: JsonParseException
- `public JsonElement serialize(<any> src,  java.lang.reflect.Type type,  JsonSerializationContext context)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ModFixs

*class* `net.minecraftforge.common.util.ModFixs`

### Methods
- `public java.util.List<IFixableData> getFixes(IFixType type)`
- `public void registerFix(IFixType type,  IFixableData fixer)`

## PacketUtil

*class* `net.minecraftforge.common.util.PacketUtil`

### Methods
- `public static void writeItemStackFromClientToServer(PacketBuffer buffer,  ItemStack stack)`
  Most ItemStack serialization is Server to Client, and must go through PacketBuffer.writeItemStack which uses Item.getNBTShareTag.
   One exception is items from the creative menu, which must be sent from Client to Server with their full NBT.
  
   This method matches PacketBuffer.writeItemStack but without the Item.getNBTShareTag patch.
   It is compatible with PacketBuffer.readItemStack.

## RecipeMatcher

*class* `net.minecraftforge.common.util.RecipeMatcher`

### Methods
- `public static <T> int[] findMatches(java.util.List<T> inputs,  java.util.List<? extends <any>> tests)`
  Attempts to match inputs to the specified tests. In the best way that all inputs are used by one test.
   Will return null in any of these cases:
   input/test lengths don't match. This is only for matching paired outputs.
   any input doesn't match a test
   any test doesn't match a input
   If we are unable to determine a proper pair
  - returns: An array mapping inputs to tests. ret[x] = y means input[x] = test[y]

## TextTable

*class* `net.minecraftforge.common.util.TextTable`

Utility to format data into a textual (markdown-compliant) table.

### Methods
- `public static TextTable.Column column(java.lang.String header)`
- `public static TextTable.Column column(java.lang.String header,  TextTable.Alignment alignment)`
- `public java.lang.String build(java.lang.String lineEnding)`
- `public void append(java.lang.StringBuilder destination,  java.lang.String lineEnding)`
  Appends the data formatted as a table to the given string builder.
   The padding character used for the column alignments is a single space (' '),
   the separate between column headers and values is a dash ('-').
   Note that you *have* to specify a line ending, '\n' isn't used by default.
  
   The generated table is compliant with the markdown file format.
  - param: destination - a string builder to append the table to
  - param: lineEnding - the line ending to use for each row of the table
- `public void add(java.lang.Object... values)`
- `public void clear()`
- `public java.util.List<TextTable.Column> getColumns()`

## TextTable.Alignment

*enum* `net.minecraftforge.common.util.TextTable.Alignment`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<TextTable.Alignment>

Enclosing class: TextTable

### Fields
- `public static final TextTable.Alignment LEFT`
- `public static final TextTable.Alignment CENTER`
- `public static final TextTable.Alignment RIGHT`

### Methods
- `public static TextTable.Alignment[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (TextTable.Alignment c : TextTable.Alignment.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static TextTable.Alignment valueOf(java.lang.String name)`
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

## TextTable.Column

*class* `net.minecraftforge.common.util.TextTable.Column`

Enclosing class: TextTable

### Methods
- `public java.lang.String formatHeader(java.lang.String padding)`
- `public java.lang.String format(java.lang.String value,  java.lang.String padding)`
- `public java.lang.String getSeparator(char character)`
- `public void fit(java.lang.String value)`
- `public void resetWidth()`
- `public int getWidth()`

## TextTable.Row

*class* `net.minecraftforge.common.util.TextTable.Row`

Enclosing class: TextTable

### Methods
- `public java.util.List<java.lang.String> format(java.util.List<TextTable.Column> columns,  java.lang.String padding)`

## WorldCapabilityData

*class* `net.minecraftforge.common.util.WorldCapabilityData`

All Implemented Interfaces: INBTSerializable<NBTTagCompound>

### Fields
- `public static final java.lang.String ID` (= "capabilities")

### Inherited fields
- from `net.minecraft.world.storage.WorldSavedData`: `mapName`

### Methods
- `public void readFromNBT(NBTTagCompound nbt)`
- `public NBTTagCompound writeToNBT(NBTTagCompound nbt)`
- `public boolean isDirty()`
- `public void setCapabilities(WorldProvider provider,  INBTSerializable<NBTTagCompound> capabilities)`

### Inherited methods
- from `net.minecraft.world.storage.WorldSavedData`: `deserializeNBT`, `markDirty`, `serializeNBT`, `setDirty`
