# net.minecraft.world.entity.player

- [Abilities](#abilities)
- [Class ChatVisiblity](#class-chatvisiblity)
- [Class Player.BedSleepingProblem](#class-player.bedsleepingproblem)
- [Class PlayerModelPart](#class-playermodelpart)
- [Inventory](#inventory)
- [Player](#player)
- [ProfileKeyPair](#profilekeypair)
- [ProfilePublicKey](#profilepublickey)
- [ProfilePublicKey.Data](#profilepublickey.data)
- [ProfilePublicKey.ValidationException](#profilepublickey.validationexception)
- [StackedContents](#stackedcontents)
- [StackedContents.RecipePicker](#stackedcontents.recipepicker)
## Abilities

*class* `net.minecraft.world.entity.player.Abilities`

### Fields
- `public boolean invulnerable`
- `public boolean flying`
- `public boolean mayfly`
- `public boolean instabuild`
- `public boolean mayBuild`
- `private float flyingSpeed`
- `private float walkingSpeed`

### Methods
- `public void addSaveData(CompoundTag p_35946_)`
- `public void loadSaveData(CompoundTag p_35951_)`
- `public float getFlyingSpeed()`
- `public void setFlyingSpeed(float p_35944_)`
- `public float getWalkingSpeed()`
- `public void setWalkingSpeed(float p_35949_)`

## Class ChatVisiblity

*enum* `net.minecraft.world.entity.player.Class ChatVisiblity`

### Fields
- `private static final IntFunction<ChatVisiblity> BY_ID`
- `private final int id`
- `private final String key`

### Methods
- `public static ChatVisiblity[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ChatVisiblity valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getId()`
- `public String getKey()`
- `public static ChatVisiblity byId(int p_35967_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraft.util.OptionEnum`: `getCaption`

## Class Player.BedSleepingProblem

*enum* `net.minecraft.world.entity.player.Class Player.BedSleepingProblem`

Enclosing class: Player

### Fields
- `@Nullable private final Component message`

### Methods
- `public static Player.BedSleepingProblem[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Player.BedSleepingProblem valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `@Nullable public Component getMessage()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class PlayerModelPart

*enum* `net.minecraft.world.entity.player.Class PlayerModelPart`

### Fields
- `private final int bit`
- `private final int mask`
- `private final String id`
- `private final Component name`

### Methods
- `public static PlayerModelPart[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static PlayerModelPart valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getMask()`
- `public int getBit()`
- `public String getId()`
- `public Component getName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Inventory

*class* `net.minecraft.world.entity.player.Inventory`

### Fields
- `public static final int POP_TIME_DURATION` (= 5)
- `public static final int INVENTORY_SIZE` (= 36)
- `private static final int SELECTION_SIZE` (= 9)
- `public static final int SLOT_OFFHAND` (= 40)
- `public static final int NOT_FOUND_INDEX` (= -1)
- `public static final int[] ALL_ARMOR_SLOTS`
- `public static final int[] HELMET_SLOT_ONLY`
- `public final NonNullList<ItemStack> items`
- `public final NonNullList<ItemStack> armor`
- `public final NonNullList<ItemStack> offhand`
- `private final List<NonNullList<ItemStack>> compartments`
- `public int selected`
- `public final Player player`
- `private int timesChanged`

### Inherited fields
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`

### Methods
- `public ItemStack getSelected()`
- `public static int getSelectionSize()`
- `private boolean hasRemainingSpaceForItem(ItemStack p_36015_,  ItemStack p_36016_)`
- `public int getFreeSlot()`
- `public void setPickedItem(ItemStack p_36013_)`
- `public void pickSlot(int p_36039_)`
- `public static boolean isHotbarSlot(int p_36046_)`
- `public int findSlotMatchingItem(ItemStack p_36031_)`
- `public int findSlotMatchingUnusedItem(ItemStack p_36044_)`
- `public int getSuitableHotbarSlot()`
- `public void swapPaint(double p_35989_)`
- `public int clearOrCountMatchingItems(Predicate<ItemStack> p_36023_,  int p_36024_,  Container p_36025_)`
- `private int addResource(ItemStack p_36067_)`
- `private int addResource(int p_36048_,  ItemStack p_36049_)`
- `public int getSlotWithRemainingSpace(ItemStack p_36051_)`
- `public void tick()`
- `public boolean add(ItemStack p_36055_)`
- `public boolean add(int p_36041_,  ItemStack p_36042_)`
- `public void placeItemBackInInventory(ItemStack p_150080_)`
- `public void placeItemBackInInventory(ItemStack p_150077_,  boolean p_150078_)`
- `public ItemStack removeItem(int p_35993_,  int p_35994_)`
- `public void removeItem(ItemStack p_36058_)`
- `public ItemStack removeItemNoUpdate(int p_36029_)`
- `public void setItem(int p_35999_,  ItemStack p_36000_)`
- `public float getDestroySpeed(BlockState p_36021_)`
- `public ListTag save(ListTag p_36027_)`
- `public void load(ListTag p_36036_)`
- `public int getContainerSize()`
- `public boolean isEmpty()`
- `public ItemStack getItem(int p_35991_)`
- `public Component getName()`
- `public ItemStack getArmor(int p_36053_)`
- `public void hurtArmor(DamageSource p_150073_,  float p_150074_,  int[] p_150075_)`
- `public void dropAll()`
- `public void setChanged()`
- `public int getTimesChanged()`
- `public boolean stillValid(Player p_36009_)`
- `public boolean contains(ItemStack p_36064_)`
- `public boolean contains(TagKey<Item> p_204076_)`
- `public void replaceWith(Inventory p_36007_)`
- `public void clearContent()`
- `public void fillStackedContents(StackedContents p_36011_)`
- `public ItemStack removeFromSelected(boolean p_182404_)`

### Inherited methods
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `startOpen`, `stopOpen`
- from `net.minecraft.world.Nameable`: `getCustomName`, `getDisplayName`, `hasCustomName`

## Player

*class* `net.minecraft.world.entity.player.Player`

### Fields
- `public static final String PERSISTED_NBT_TAG` (= "PlayerPersisted")
- `private static final org.slf4j.Logger LOGGER`
- `public static final int MAX_NAME_LENGTH` (= 16)
- `public static final HumanoidArm DEFAULT_MAIN_HAND`
- `public static final int DEFAULT_MODEL_CUSTOMIZATION` (= 0)
- `public static final int MAX_HEALTH` (= 20)
- `public static final int SLEEP_DURATION` (= 100)
- `public static final int WAKE_UP_DURATION` (= 10)
- `public static final int ENDER_SLOT_OFFSET` (= 200)
- `public static final float CROUCH_BB_HEIGHT` (= 1.5f)
- `public static final float SWIMMING_BB_WIDTH` (= 0.6000000238418579f)
- `public static final float SWIMMING_BB_HEIGHT` (= 0.6000000238418579f)
- `public static final float DEFAULT_EYE_HEIGHT` (= 1.6200000047683716f)
- `public static final EntityDimensions STANDING_DIMENSIONS`
- `private static final Map<Pose,EntityDimensions> POSES`
- `private static final int FLY_ACHIEVEMENT_SPEED` (= 25)
- `private static final EntityDataAccessor<Float> DATA_PLAYER_ABSORPTION_ID`
- `private static final EntityDataAccessor<Integer> DATA_SCORE_ID`
- `protected static final EntityDataAccessor<Byte> DATA_PLAYER_MODE_CUSTOMISATION`
- `protected static final EntityDataAccessor<Byte> DATA_PLAYER_MAIN_HAND`
- `protected static final EntityDataAccessor<CompoundTag> DATA_SHOULDER_LEFT`
- `protected static final EntityDataAccessor<CompoundTag> DATA_SHOULDER_RIGHT`
- `private long timeEntitySatOnShoulder`
- `private final Inventory inventory`
- `protected PlayerEnderChestContainer enderChestInventory`
- `public final InventoryMenu inventoryMenu`
- `public AbstractContainerMenu containerMenu`
- `protected FoodData foodData`
- `protected int jumpTriggerTime`
- `public float oBob`
- `public float bob`
- `public int takeXpDelay`
- `public double xCloakO`
- `public double yCloakO`
- `public double zCloakO`
- `public double xCloak`
- `public double yCloak`
- `public double zCloak`
- `private int sleepCounter`
- `protected boolean wasUnderwater`
- `private final Abilities abilities`
- `public int experienceLevel`
- `public int totalExperience`
- `public float experienceProgress`
- `protected int enchantmentSeed`
- `protected final float defaultFlySpeed` (= 0.019999999552965164f)
- `private int lastLevelUpTime`
- `private final com.mojang.authlib.GameProfile gameProfile`
- `private boolean reducedDebugInfo`
- `private ItemStack lastItemInMainHand`
- `private final ItemCooldowns cooldowns`
- `private Optional<GlobalPos> lastDeathLocation`
- `@Nullable public FishingHook fishing`
- `protected float hurtDir`
- `private final Collection<MutableComponent> prefixes`
- `private final Collection<MutableComponent> suffixes`
- `@Nullable private Pose forcedPose`
- `private Component displayname`
- `private final LazyOptional<IItemHandler> playerMainHandler`
- `private final LazyOptional<IItemHandler> playerEquipmentHandler`
- `private final LazyOptional<IItemHandler> playerJoinedHandler`

### Inherited fields
- from `net.minecraft.world.entity.LivingEntity`: `animStep`, `animStepO`, `ARMOR_SLOT_OFFSET`, `ARMOR_SLOTS`, `attackAnim`, `attackStrengthTicker`, `autoSpinAttackTicks`, `brain`, `DATA_LIVING_ENTITY_FLAGS`, `dead`, `DEATH_DURATION`, `deathScore`, `deathTime`, `DEFAULT_BASE_GRAVITY`, `EQUIPMENT_SLOT_OFFSET`, `EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT`, `fallFlyTicks`, `HAND_SLOTS`, `hurtDuration`, `hurtTime`, `invulnerableDuration`, `jumping`, `lastHurt`, `lastHurtByPlayer`, `lastHurtByPlayerTime`, `lerpHeadSteps`, `lerpSteps`, `lerpX`, `lerpXRot`, `lerpY`, `lerpYHeadRot`, `lerpYRot`, `lerpZ`, `LIVING_ENTITY_FLAG_IS_USING`, `LIVING_ENTITY_FLAG_OFF_HAND`, `LIVING_ENTITY_FLAG_SPIN_ATTACK`, `MIN_MOVEMENT_DISTANCE`, `noActionTime`, `oAttackAnim`, `oRun`, `PLAYER_HURT_EXPERIENCE_TIME`, `removeArrowTime`, `removeStingerTime`, `rotA`, `rotOffs`, `run`, `SLEEPING_DIMENSIONS`, `SWING_DURATION`, `swinging`, `swingingArm`, `swingTime`, `timeOffs`, `USE_ITEM_INTERVAL`, `useItem`, `useItemRemaining`, `walkAnimation`, `xxa`, `yBodyRot`, `yBodyRotO`, `yHeadRot`, `yHeadRotO`, `yya`, `zza`
- from `net.minecraft.world.entity.Entity`: `BASE_TICKS_REQUIRED_TO_FREEZE`, `blocksBuilding`, `BOARDING_COOLDOWN`, `boardingCooldown`, `BREATHING_DISTANCE_BELOW_EYES`, `DATA_POSE`, `DATA_SHARED_FLAGS_ID`, `DEFAULT_BB_HEIGHT`, `DEFAULT_BB_WIDTH`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5`, `DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0`, `ENTITY_COUNTER`, `entityData`, `fallDistance`, `firstTick`, `FLAG_FALL_FLYING`, `FLAG_GLOWING`, `FLAG_ONFIRE`, `fluidHeight`, `flyDist`, `forgeFluidTypeHeight`, `FREEZE_HURT_FREQUENCY`, `hasImpulse`, `horizontalCollision`, `hurtMarked`, `ID_TAG`, `invulnerableTime`, `isInPowderSnow`, `isInsidePortal`, `mainSupportingBlockPos`, `MAX_ENTITY_TAG_COUNT`, `minorHorizontalCollision`, `moveDist`, `noCulling`, `noPhysics`, `PASSENGERS_TAG`, `portalEntrancePos`, `portalTime`, `random`, `stringUUID`, `stuckSpeedMultiplier`, `tickCount`, `TOTAL_AIR_SUPPLY`, `uuid`, `UUID_TAG`, `verticalCollision`, `verticalCollisionBelow`, `walkDist`, `walkDistO`, `wasEyeInWater`, `wasInPowderSnow`, `wasOnFire`, `wasTouchingWater`, `xo`, `xOld`, `xRotO`, `yo`, `yOld`, `yRotO`, `zo`, `zOld`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `public boolean blockActionRestricted(Level p_36188_,  BlockPos p_36189_,  GameType p_36190_)`
- `public static AttributeSupplier.Builder createAttributes()`
- `protected void defineSynchedData()`
- `public void tick()`
- `public boolean isSecondaryUseActive()`
- `protected boolean wantsToStopRiding()`
- `protected boolean isStayingOnGroundSurface()`
- `protected boolean updateIsUnderwater()`
- `private void turtleHelmetTick()`
- `protected ItemCooldowns createItemCooldowns()`
- `private void moveCloak()`
- `protected void updatePlayerPose()`
- `protected boolean canPlayerFitWithinBlocksAndEntitiesWhen(Pose p_297636_)`
- `public int getPortalWaitTime()`
- `protected SoundEvent getSwimSound()`
- `protected SoundEvent getSwimSplashSound()`
- `protected SoundEvent getSwimHighSpeedSplashSound()`
- `public int getDimensionChangingDelay()`
- `public void playSound(SoundEvent p_36137_,  float p_36138_,  float p_36139_)`
- `public void playNotifySound(SoundEvent p_36140_,  SoundSource p_36141_,  float p_36142_,  float p_36143_)`
- `public SoundSource getSoundSource()`
- `protected int getFireImmuneTicks()`
- `public void handleEntityEvent(byte p_36120_)`
- `private void addParticlesAroundSelf(ParticleOptions p_36209_)`
- `public void closeContainer()`
- `protected void doCloseContainer()`
- `public void rideTick()`
- `protected void serverAiStep()`
- `public void aiStep()`
- `private void playShoulderEntityAmbientSound(@Nullable  CompoundTag p_36368_)`
- `private void touch(Entity p_36278_)`
- `public int getScore()`
- `public void setScore(int p_36398_)`
- `public void increaseScore(int p_36402_)`
- `public void startAutoSpinAttack(int p_204080_)`
- `public void die(DamageSource p_36152_)`
- `protected void dropEquipment()`
- `protected void destroyVanishingCursedItems()`
- `protected SoundEvent getHurtSound(DamageSource p_36310_)`
- `protected SoundEvent getDeathSound()`
- `@Nullable public ItemEntity drop(ItemStack p_36177_,  boolean p_36178_)`
- `@Nullable public ItemEntity drop(ItemStack p_36179_,  boolean p_36180_,  boolean p_36181_)`
- `@Deprecated public float getDestroySpeed(BlockState p_36282_)` (deprecated)
- `public float getDigSpeed(BlockState p_36282_,  @Nullable  BlockPos pos)`
- `public boolean hasCorrectToolForDrops(BlockState p_36299_)`
- `public void readAdditionalSaveData(CompoundTag p_36215_)`
- `public void addAdditionalSaveData(CompoundTag p_36265_)`
- `public boolean isInvulnerableTo(DamageSource p_36249_)`
- `public boolean hurt(DamageSource p_36154_,  float p_36155_)`
- `protected void blockUsingShield(LivingEntity p_36295_)`
- `public boolean canBeSeenAsEnemy()`
- `public boolean canHarmPlayer(Player p_36169_)`
- `protected void hurtArmor(DamageSource p_36251_,  float p_36252_)`
- `protected void hurtHelmet(DamageSource p_150103_,  float p_150104_)`
- `protected void hurtCurrentlyUsedShield(float p_36383_)`
- `protected void actuallyHurt(DamageSource p_36312_,  float p_36313_)`
- `protected boolean onSoulSpeedBlock()`
- `public boolean isTextFilteringEnabled()`
- `public void openTextEdit(SignBlockEntity p_36193_,  boolean p_277837_)`
- `public void openMinecartCommandBlock(BaseCommandBlock p_36182_)`
- `public void openCommandBlock(CommandBlockEntity p_36191_)`
- `public void openStructureBlock(StructureBlockEntity p_36194_)`
- `public void openJigsawBlock(JigsawBlockEntity p_36192_)`
- `public void openHorseInventory(AbstractHorse p_36167_,  Container p_36168_)`
- `public OptionalInt openMenu(@Nullable  MenuProvider p_36150_)`
- `public void sendMerchantOffers(int p_36121_,  MerchantOffers p_36122_,  int p_36123_,  int p_36124_,  boolean p_36125_,  boolean p_36126_)`
- `public void openItemGui(ItemStack p_36174_,  InteractionHand p_36175_)`
- `public InteractionResult interactOn(Entity p_36158_,  InteractionHand p_36159_)`
- `protected float ridingOffset(Entity p_297381_)`
- `public void removeVehicle()`
- `protected boolean isImmobile()`
- `public boolean isAffectedByFluids()`
- `protected Vec3 maybeBackOffFromEdge(Vec3 p_36201_,  MoverType p_36202_)`
- `private boolean isAboveGround()`
- `public void attack(Entity p_36347_)`
- `protected void doAutoAttackOnTouch(LivingEntity p_36355_)`
- `public void disableShield(boolean p_36385_)`
- `public void crit(Entity p_36156_)`
- `public void magicCrit(Entity p_36253_)`
- `public void sweepAttack()`
- `public void respawn()`
- `public void remove(Entity.RemovalReason p_150097_)`
- `public boolean isLocalPlayer()`
- `public com.mojang.authlib.GameProfile getGameProfile()`
- `public Inventory getInventory()`
- `public Abilities getAbilities()`
- `public void updateTutorialInventoryAction(ItemStack p_150098_,  ItemStack p_150099_,  ClickAction p_150100_)`
- `public boolean hasContainerOpen()`
- `public com.mojang.datafixers.util.Either<Player.BedSleepingProblem,Unit> startSleepInBed(BlockPos p_36203_)`
- `public void stopSleepInBed(boolean p_36226_,  boolean p_36227_)`
- `public void stopSleeping()`
- `public static Optional<Vec3> findRespawnPositionAndUseSpawnBlock(ServerLevel p_36131_,  BlockPos p_36132_,  float p_36133_,  boolean p_36134_,  boolean p_36135_)`
- `public boolean isSleepingLongEnough()`
- `public int getSleepTimer()`
- `public void displayClientMessage(Component p_36216_,  boolean p_36217_)`
- `public void awardStat(ResourceLocation p_36221_)`
- `public void awardStat(ResourceLocation p_36223_,  int p_36224_)`
- `public void awardStat(Stat<?> p_36247_)`
- `public void awardStat(Stat<?> p_36145_,  int p_36146_)`
- `public void resetStat(Stat<?> p_36144_)`
- `public int awardRecipes(Collection<RecipeHolder<?>> p_36213_)`
- `public void triggerRecipeCrafted(RecipeHolder<?> p_298309_,  List<ItemStack> p_283609_)`
- `public void awardRecipesByKey(ResourceLocation[] p_36228_)`
- `public int resetRecipes(Collection<RecipeHolder<?>> p_36263_)`
- `public void jumpFromGround()`
- `public void travel(Vec3 p_36359_)`
- `public void updateSwimming()`
- `protected boolean freeAt(BlockPos p_36351_)`
- `public float getSpeed()`
- `public void checkMovementStatistics(double p_36379_,  double p_36380_,  double p_36381_)`
- `private void checkRidingStatistics(double p_36388_,  double p_36389_,  double p_36390_)`
- `public boolean causeFallDamage(float p_150093_,  float p_150094_,  DamageSource p_150095_)`
- `public boolean tryToStartFallFlying()`
- `public void startFallFlying()`
- `public void stopFallFlying()`
- `protected void doWaterSplashEffect()`
- `protected void playStepSound(BlockPos p_282121_,  BlockState p_282194_)`
- `public LivingEntity.Fallsounds getFallSounds()`
- `public boolean killedEntity(ServerLevel p_219735_,  LivingEntity p_219736_)`
- `public void makeStuckInBlock(BlockState p_36196_,  Vec3 p_36197_)`
- `public void giveExperiencePoints(int p_36291_)`
- `public int getEnchantmentSeed()`
- `public void onEnchantmentPerformed(ItemStack p_36172_,  int p_36173_)`
- `public void giveExperienceLevels(int p_36276_)`
- `public int getXpNeededForNextLevel()`
- `public void causeFoodExhaustion(float p_36400_)`
- `public Optional<WardenSpawnTracker> getWardenSpawnTracker()`
- `public FoodData getFoodData()`
- `public boolean canEat(boolean p_36392_)`
- `public boolean isHurt()`
- `public boolean mayBuild()`
- `public boolean mayUseItemAt(BlockPos p_36205_,  Direction p_36206_,  ItemStack p_36207_)`
- `public int getExperienceReward()`
- `protected boolean isAlwaysExperienceDropper()`
- `public boolean shouldShowName()`
- `protected Entity.MovementEmission getMovementEmission()`
- `public void onUpdateAbilities()`
- `public Component getName()`
- `public PlayerEnderChestContainer getEnderChestInventory()`
- `public ItemStack getItemBySlot(EquipmentSlot p_36257_)`
- `protected boolean doesEmitEquipEvent(EquipmentSlot p_219741_)`
- `public void setItemSlot(EquipmentSlot p_36161_,  ItemStack p_36162_)`
- `public boolean addItem(ItemStack p_36357_)`
- `public Iterable<ItemStack> getHandSlots()`
- `public Iterable<ItemStack> getArmorSlots()`
- `public boolean setEntityOnShoulder(CompoundTag p_36361_)`
- `protected void removeEntitiesOnShoulder()`
- `private void respawnEntityOnShoulder(CompoundTag p_36371_)`
- `public abstract boolean isSpectator()`
- `public boolean canBeHitByProjectile()`
- `public boolean isSwimming()`
- `public abstract boolean isCreative()`
- `public boolean isPushedByFluid()`
- `public Scoreboard getScoreboard()`
- `public Component getDisplayName()`
- `private MutableComponent decorateDisplayNameComponent(MutableComponent p_36219_)`
- `public String getScoreboardName()`
- `public float getStandingEyeHeight(Pose p_36259_,  EntityDimensions p_36260_)`
- `protected void internalSetAbsorptionAmount(float p_301235_)`
- `public float getAbsorptionAmount()`
- `public boolean isModelPartShown(PlayerModelPart p_36171_)`
- `public SlotAccess getSlot(int p_150112_)`
- `public boolean isReducedDebugInfo()`
- `public void setReducedDebugInfo(boolean p_36394_)`
- `public void setRemainingFireTicks(int p_36353_)`
- `public HumanoidArm getMainArm()`
- `public void setMainArm(HumanoidArm p_36164_)`
- `public CompoundTag getShoulderEntityLeft()`
- `protected void setShoulderEntityLeft(CompoundTag p_36363_)`
- `public CompoundTag getShoulderEntityRight()`
- `protected void setShoulderEntityRight(CompoundTag p_36365_)`
- `public float getCurrentItemAttackStrengthDelay()`
- `public float getAttackStrengthScale(float p_36404_)`
- `public void resetAttackStrengthTicker()`
- `public ItemCooldowns getCooldowns()`
- `protected float getBlockSpeedFactor()`
- `public float getLuck()`
- `public boolean canUseGameMasterBlocks()`
- `public boolean canTakeItem(ItemStack p_36315_)`
- `public EntityDimensions getDimensions(Pose p_36166_)`
- `public com.google.common.collect.ImmutableList<Pose> getDismountPoses()`
- `public ItemStack getProjectile(ItemStack p_36349_)`
- `public ItemStack eat(Level p_36185_,  ItemStack p_36186_)`
- `protected boolean shouldRemoveSoulSpeed(BlockState p_36262_)`
- `public Vec3 getRopeHoldPosition(float p_36374_)`
- `public boolean isAlwaysTicking()`
- `public boolean isScoping()`
- `public boolean shouldBeSaved()`
- `public Optional<GlobalPos> getLastDeathLocation()`
- `public void setLastDeathLocation(Optional<GlobalPos> p_219750_)`
- `public float getHurtDir()`
- `public void animateHurt(float p_265280_)`
- `public boolean canSprint()`
- `protected float getFlyingSpeed()`
- `public Collection<MutableComponent> getPrefixes()`
- `public Collection<MutableComponent> getSuffixes()`
- `public void refreshDisplayName()`
  Force the displayed name to refresh, by firing PlayerEvent.NameFormat, using the real player name as event parameter.
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
- `public void setForcedPose(@Nullable  Pose pose)`
  Force a pose for the player. If set, the vanilla pose determination and clearance check is skipped. Make sure the pose is clear yourself (e.g. in PlayerTick).
   This has to be set just once, do not set it every tick.
   Make sure to clear (null) the pose if not required anymore and only use if necessary.
- `@Nullable public Pose getForcedPose()`
  - returns: The forced pose if set, null otherwise

### Inherited methods
- from `net.minecraft.world.entity.LivingEntity`: `addEffect`, `addEffect`, `areAllEffectsAmbient`, `attackable`, `baseTick`, `blockedByShield`, `brainProvider`, `broadcastBreakEvent`, `broadcastBreakEvent`, `calculateEntityAnimation`, `calculateFallDamage`, `canAttack`, `canAttack`, `canAttackType`, `canBeAffected`, `canBeSeenByAnyone`, `canBreatheUnderwater`, `canChangeDimensions`, `canDisableShield`, `canFreeze`, `canSpawnSoulSpeedParticle`, `canStandOnFluid`, `checkAutoSpinAttack`, `checkFallDamage`, `clearSleepingPos`, `completeUsingItem`, `createLivingAttributes`, `createWitherRose`, `curePotionEffects`, `decreaseAirSupply`, `doHurtTarget`, `doPush`, `dropAllDeathLoot`, `dropCustomDeathLoot`, `dropExperience`, `dropFromLootTable`, `equipmentHasChanged`, `forceAddEffect`, `getActiveEffects`, `getActiveEffectsMap`, `getArmorCoverPercentage`, `getArmorValue`, `getArrowCount`, `getAttackAnim`, `getAttribute`, `getAttributeBaseValue`, `getAttributeBaseValue`, `getAttributes`, `getAttributeValue`, `getAttributeValue`, `getBedOrientation`, `getBoundingBoxForCulling`, `getBrain`, `getCombatTracker`, `getDamageAfterArmorAbsorb`, `getDamageAfterMagicAbsorb`, `getDrinkingSound`, `getEatingSound`, `getEffect`, `getEquipmentSlotForItem`, `getEyeHeight`, `getFallFlyingTicks`, `getFluidFallingAdjustedMovement`, `getHealth`, `getHitbox`, `getItemInHand`, `getJumpBoostPower`, `getJumpPower`, `getKillCredit`, `getLastAttacker`, `getLastClimbablePos`, `getLastDamageSource`, `getLastHurtByMob`, `getLastHurtByMobTimestamp`, `getLastHurtMob`, `getLastHurtMobTimestamp`, `getLocalBoundsForPose`, `getLootTable`, `getLootTableSeed`, `getMainHandItem`, `getMaxAbsorption`, `getMaxHealth`, `getMobType`, `getMyRidingOffset`, `getNoActionTime`, `getOffhandItem`, `getPassengerRidingPosition`, `getRandom`, `getRelativePortalPosition`, `getRiddenInput`, `getRiddenSpeed`, `getScale`, `getSleepingPos`, `getSoundVolume`, `getStingerCount`, `getSwimAmount`, `getTicksUsingItem`, `getUsedItemHand`, `getUseItem`, `getUseItemRemainingTicks`, `getViewYRot`, `getVisibilityPercent`, `getVisualRotationYInDegrees`, `getVoicePitch`, `getWaterSlowDown`, `getYHeadRot`, `goDownInWater`, `handleDamageEvent`, `handleRelativeFrictionAndCalculateMovement`, `hasEffect`, `hasItemInSlot`, `hasLineOfSight`, `heal`, `increaseAirSupply`, `indicateDamage`, `invalidateCaps`, `isAffectedByPotions`, `isAlive`, `isAutoSpinAttack`, `isBaby`, `isBlocking`, `isCurrentlyGlowing`, `isDamageSourceBlocked`, `isDeadOrDying`, `isFallFlying`, `isHolding`, `isHolding`, `isInvertedHealAndHarm`, `isInWall`, `isPickable`, `isPushable`, `isSensitiveToWater`, `isSleeping`, `isSuppressingSlidingDownLadder`, `isUsingItem`, `isVisuallySwimming`, `jumpInLiquid`, `kill`, `knockback`, `lerpHeadRotationStep`, `lerpHeadTo`, `lerpTargetX`, `lerpTargetXRot`, `lerpTargetY`, `lerpTargetYRot`, `lerpTargetZ`, `lerpTo`, `lookAt`, `makeBrain`, `maxUpStep`, `onBelowWorld`, `onChangedBlock`, `onClimbable`, `onEffectAdded`, `onEffectRemoved`, `onEffectUpdated`, `onEnterCombat`, `onEquipItem`, `onItemPickup`, `onLeaveCombat`, `onSyncedDataUpdated`, `playBlockFallSound`, `playHurtSound`, `push`, `pushEntities`, `randomTeleport`, `recreateFromPacket`, `releaseUsingItem`, `removeAllEffects`, `removeEffect`, `removeEffectNoUpdate`, `removeEffectParticles`, `removeFrost`, `removeSoulSpeed`, `resetForwardDirectionOfRelativePortalPosition`, `reviveCaps`, `sendEffectToPassengers`, `setAbsorptionAmount`, `setArrowCount`, `setDiscardFriction`, `setHealth`, `setItemInHand`, `setJumping`, `setLastHurtByMob`, `setLastHurtByPlayer`, `setLastHurtMob`, `setLivingEntityFlag`, `setNoActionTime`, `setRecordPlayingNearby`, `setSleepingPos`, `setSpeed`, `setSprinting`, `setStingerCount`, `setYBodyRot`, `setYHeadRot`, `shouldDiscardFriction`, `shouldDropExperience`, `shouldDropLoot`, `shouldRiderFaceForward`, `skipDropExperience`, `spawnSoulSpeedParticle`, `startSleeping`, `startUsingItem`, `stopRiding`, `stopUsingItem`, `swing`, `swing`, `take`, `tickDeath`, `tickEffects`, `tickHeadTurn`, `tickRidden`, `triggerItemUseEffects`, `tryAddFrost`, `tryAddSoulSpeed`, `updateEffectVisibility`, `updateInvisibilityStatus`, `updateSwingTime`, `updateUsingItem`, `updateWalkAnimation`, `verifyEquippedItem`, `wasExperienceConsumed`, `wouldNotSuffocateAtTargetPose`
- from `net.minecraft.world.entity.Entity`: `absMoveTo`, `absMoveTo`, `acceptsFailure`, `acceptsSuccess`, `addDeltaMovement`, `addPassenger`, `addTag`, `awardKillScore`, `blockPosition`, `broadcastToPlayer`, `calculateUpVector`, `calculateViewVector`, `canAddPassenger`, `canBeCollidedWith`, `canCollideWith`, `canControlVehicle`, `canRide`, `canSpawnSprintParticle`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `changeDimension`, `changeDimension`, `checkBelowWorld`, `checkDespawn`, `checkInsideBlocks`, `checkSlowFallDistance`, `checkSupportingBlock`, `chunkPosition`, `clearFire`, `closerThan`, `closerThan`, `collideBoundingBox`, `copyPosition`, `couldAcceptPassenger`, `createCommandSourceStack`, `createHoverEvent`, `damageSources`, `dampensVibrations`, `discard`, `dismountsUnderwater`, `dismountTo`, `displayFireAnimation`, `distanceTo`, `distanceToSqr`, `distanceToSqr`, `distanceToSqr`, `doEnchantDamageEffects`, `ejectPassengers`, `equals`, `extinguishFire`, `fillCrashReportCategory`, `findDimensionEntryPoint`, `fireImmune`, `fixupDimensions`, `gameEvent`, `gameEvent`, `getAddEntityPacket`, `getAirSupply`, `getAllSlots`, `getBbHeight`, `getBbWidth`, `getBlockExplosionResistance`, `getBlockJumpFactor`, `getBlockPosBelowThatAffectsMyMovement`, `getBlockStateOn`, `getBlockStateOnLegacy`, `getBlockX`, `getBlockY`, `getBlockZ`, `getBoundingBox`, `getCollisionHorizontalEscapeVector`, `getCommandSenderWorld`, `getControlledVehicle`, `getControllingPassenger`, `getCustomName`, `getDeltaMovement`, `getDimensionsForge`, `getDirection`, `getDismountLocationForPassenger`, `getEncodeId`, `getEntityData`, `getExitPortal`, `getEyeHeight`, `getEyeHeight`, `getEyeHeightAccess`, `getEyeInFluidType`, `getEyePosition`, `getEyePosition`, `getEyeY`, `getFeetBlockState`, `getFirstPassenger`, `getFluidHeight`, `getFluidJumpThreshold`, `getFluidTypeHeight`, `getForward`, `getHandHoldingItemAngle`, `getId`, `getIndirectPassengers`, `getLeashOffset`, `getLeashOffset`, `getLightLevelDependentMagicValue`, `getLightProbePosition`, `getLookAngle`, `getMaxAirSupply`, `getMaxFallDistance`, `getMaxHeightFluidType`, `getMotionDirection`, `getNameTagOffsetY`, `getOnPos`, `getOnPos`, `getOnPosLegacy`, `getPassengerAttachmentPoint`, `getPassengers`, `getPassengersAndSelf`, `getPercentFrozen`, `getPermissionLevel`, `getPersistentData`, `getPickRadius`, `getPickResult`, `getPistonPushReaction`, `getPortalCooldown`, `getPose`, `getPosition`, `getPositionCodec`, `getPrimaryStepSoundBlockPos`, `getRandomX`, `getRandomY`, `getRandomZ`, `getRemainingFireTicks`, `getRemovalReason`, `getRootVehicle`, `getRotationVector`, `getSelfAndPassengers`, `getServer`, `getSharedFlag`, `getStringUUID`, `getTags`, `getTeam`, `getTeamColor`, `getTicksFrozen`, `getTicksRequiredToFreeze`, `getType`, `getTypeName`, `getUpVector`, `getUUID`, `getVehicle`, `getViewScale`, `getViewVector`, `getViewXRot`, `getX`, `getX`, `getXRot`, `getY`, `getY`, `getYRot`, `getZ`, `getZ`, `handleInsidePortal`, `handleNetherPortal`, `hasControllingPassenger`, `hasCustomName`, `hasExactlyOnePlayerPassenger`, `hasGlowingTag`, `hashCode`, `hasIndirectPassenger`, `hasPassenger`, `hasPassenger`, `hasPermissions`, `hasPose`, `ignoreExplosion`, `interact`, `interactAt`, `is`, `isAddedToWorld`, `isAlliedTo`, `isAlliedTo`, `isAttackable`, `isColliding`, `isControlledByLocalInstance`, `isCrouching`, `isCustomNameVisible`, `isDescending`, `isDiscrete`, `isEffectiveAi`, `isEyeInFluid`, `isFlapping`, `isFree`, `isFreezing`, `isFullyFrozen`, `isHorizontalCollisionMinor`, `isIgnoringBlockTriggers`, `isInFluidType`, `isInFluidType`, `isInLava`, `isInLiquid`, `isInvisible`, `isInvisibleTo`, `isInvulnerable`, `isInWater`, `isInWaterOrBubble`, `isInWaterOrRain`, `isInWaterRainOrBubble`, `isNoGravity`, `isOnFire`, `isOnPortalCooldown`, `isOnRails`, `isPassenger`, `isPassengerOfSameVehicle`, `isRemoved`, `isShiftKeyDown`, `isSilent`, `isSprinting`, `isSteppingCarefully`, `isSupportedBy`, `isSuppressingBounce`, `isUnderWater`, `isVehicle`, `isVisuallyCrawling`, `lavaHurt`, `lerpMotion`, `lerpPositionAndRotationStep`, `level`, `limitPistonMovement`, `load`, `makeBoundingBox`, `markHurt`, `mayInteract`, `mirror`, `move`, `moveRelative`, `moveTo`, `moveTo`, `moveTo`, `moveTo`, `moveTowardsClosestSpace`, `newDoubleList`, `newFloatList`, `nextStep`, `onAboveBubbleCol`, `onAddedToWorld`, `onClientRemoval`, `onFlap`, `onGround`, `onInsideBlock`, `onInsideBubbleColumn`, `onlyOpCanSetNbt`, `onPassengerTurned`, `onRemovedFromWorld`, `onSyncedDataUpdated`, `pick`, `playCombinationStepSounds`, `playEntityOnFireExtinguishedSound`, `playerTouch`, `playMuffledStepSound`, `playSound`, `playSwimSound`, `position`, `positionRider`, `positionRider`, `processFlappingMovement`, `processPortalCooldown`, `push`, `reapplyPosition`, `refreshDimensions`, `removeAfterChangingDimensions`, `removePassenger`, `removeTag`, `repositionEntityAfterLoad`, `resetFallDistance`, `restoreFrom`, `revive`, `rotate`, `save`, `saveAsPassenger`, `saveWithoutId`, `sendSystemMessage`, `setAirSupply`, `setBoundingBox`, `setCustomName`, `setCustomNameVisible`, `setDeltaMovement`, `setDeltaMovement`, `setFluidTypeHeight`, `setGlowingTag`, `setId`, `setInvisible`, `setInvulnerable`, `setIsInPowderSnow`, `setLevel`, `setLevelCallback`, `setMaxUpStep`, `setNoGravity`, `setOldPosAndRot`, `setOnGround`, `setOnGroundWithKnownMovement`, `setPortalCooldown`, `setPortalCooldown`, `setPos`, `setPos`, `setPose`, `setPosRaw`, `setRemoved`, `setRot`, `setSecondsOnFire`, `setSharedFlag`, `setSharedFlagOnFire`, `setShiftKeyDown`, `setSilent`, `setSwimming`, `setTicksFrozen`, `setUUID`, `setViewScale`, `setXRot`, `setYRot`, `shouldBlockExplode`, `shouldInformAdmins`, `shouldRender`, `shouldRenderAtSqrDistance`, `showVehicleHealth`, `skipAttackInteraction`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnAtLocation`, `spawnSprintParticle`, `startRiding`, `startRiding`, `startSeenByPlayer`, `stopSeenByPlayer`, `syncPacketPositionCodec`, `teleportRelative`, `teleportTo`, `teleportTo`, `teleportToWithTicket`, `thunderHit`, `toString`, `touchingUnloadedChunk`, `trackingPosition`, `tryCheckInsideBlocks`, `turn`, `unRide`, `unsetRemoved`, `updateDynamicGameEventListener`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateFluidHeightAndDoFluidPushing`, `updateInWaterStateAndDoFluidPushing`, `waterSwimSound`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getEyeInFluidType`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getFluidTypeHeight`, `getMaxHeightFluidType`, `getParts`, `getPersistentData`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isAddedToWorld`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `onAddedToWorld`, `onRemovedFromWorld`, `revive`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`
- from `net.minecraftforge.common.extensions.IForgeLivingEntity`: `canDrownInFluidType`, `canSwimInFluidType`, `jumpInFluid`, `moveInFluid`, `self`, `sinkInFluid`
- from `net.minecraftforge.common.extensions.IForgePlayer`: `canReach`, `canReach`, `canReach`, `getBlockReach`, `getEntityReach`, `isCloseEnough`

## ProfileKeyPair

*record* `net.minecraft.world.entity.player.ProfileKeyPair`

### Fields
- `private final PrivateKey privateKey`
  The field for the privateKey record component.
- `private final ProfilePublicKey publicKey`
  The field for the publicKey record component.
- `private final Instant refreshedAfter`
  The field for the refreshedAfter record component.
- `public static final com.mojang.serialization.Codec<ProfileKeyPair> CODEC`

### Methods
- `public boolean dueRefresh()`
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
- `public PrivateKey privateKey()`
  Returns the value of the privateKey record component.
  - returns: the value of the privateKey record component
- `public ProfilePublicKey publicKey()`
  Returns the value of the publicKey record component.
  - returns: the value of the publicKey record component
- `public Instant refreshedAfter()`
  Returns the value of the refreshedAfter record component.
  - returns: the value of the refreshedAfter record component

## ProfilePublicKey

*record* `net.minecraft.world.entity.player.ProfilePublicKey`

### Fields
- `private final ProfilePublicKey.Data data`
  The field for the data record component.
- `public static final Component EXPIRED_PROFILE_PUBLIC_KEY`
- `private static final Component INVALID_SIGNATURE`
- `public static final Duration EXPIRY_GRACE_PERIOD`
- `public static final com.mojang.serialization.Codec<ProfilePublicKey> TRUSTED_CODEC`

### Methods
- `public static ProfilePublicKey createValidated(SignatureValidator p_243373_,  UUID p_243390_,  ProfilePublicKey.Data p_243374_)  throws ProfilePublicKey.ValidationException`
  - throws: ProfilePublicKey.ValidationException
- `public SignatureValidator createSignatureValidator()`
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
- `public ProfilePublicKey.Data data()`
  Returns the value of the data record component.
  - returns: the value of the data record component

## ProfilePublicKey.Data

*record* `net.minecraft.world.entity.player.ProfilePublicKey.Data`

Enclosing class: ProfilePublicKey

### Fields
- `private final Instant expiresAt`
  The field for the expiresAt record component.
- `private final PublicKey key`
  The field for the key record component.
- `private final byte[] keySignature`
  The field for the keySignature record component.
- `private static final int MAX_KEY_SIGNATURE_SIZE` (= 4096)
- `public static final com.mojang.serialization.Codec<ProfilePublicKey.Data> CODEC`

### Methods
- `public void write(FriendlyByteBuf p_219816_)`
- `boolean validateSignature(SignatureValidator p_240296_,  UUID p_240297_)`
- `private byte[] signedPayload(UUID p_240267_)`
- `public boolean hasExpired()`
- `public boolean hasExpired(Duration p_243376_)`
- `public boolean equals(Object p_219822_)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: p_219822_ - the object with which to compare
  - returns: true if this object is the same as the p_219822_ argument; false otherwise.
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public Instant expiresAt()`
  Returns the value of the expiresAt record component.
  - returns: the value of the expiresAt record component
- `public PublicKey key()`
  Returns the value of the key record component.
  - returns: the value of the key record component
- `public byte[] keySignature()`
  Returns the value of the keySignature record component.
  - returns: the value of the keySignature record component

## ProfilePublicKey.ValidationException

*class* `net.minecraft.world.entity.player.ProfilePublicKey.ValidationException`

Enclosing class: ProfilePublicKey

### Inherited methods
- from `net.minecraft.network.chat.ThrowingComponent`: `getComponent`
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## StackedContents

*class* `net.minecraft.world.entity.player.StackedContents`

### Fields
- `private static final int EMPTY` (= 0)
- `public final it.unimi.dsi.fastutil.ints.Int2IntMap contents`

### Methods
- `public void accountSimpleStack(ItemStack p_36467_)`
- `public void accountStack(ItemStack p_36492_)`
- `public void accountStack(ItemStack p_36469_,  int p_36470_)`
- `public static int getStackingIndex(ItemStack p_36497_)`
- `boolean has(int p_36483_)`
- `int take(int p_36457_,  int p_36458_)`
- `void put(int p_36485_,  int p_36486_)`
- `public boolean canCraft(Recipe<?> p_36476_,  @Nullable  it.unimi.dsi.fastutil.ints.IntList p_36477_)`
- `public boolean canCraft(Recipe<?> p_36479_,  @Nullable  it.unimi.dsi.fastutil.ints.IntList p_36480_,  int p_36481_)`
- `public int getBiggestCraftableStack(RecipeHolder<?> p_301008_,  @Nullable  it.unimi.dsi.fastutil.ints.IntList p_36495_)`
- `public int getBiggestCraftableStack(RecipeHolder<?> p_299486_,  int p_36473_,  @Nullable  it.unimi.dsi.fastutil.ints.IntList p_36474_)`
- `public static ItemStack fromStackingIndex(int p_36455_)`
- `public void clear()`

## StackedContents.RecipePicker

*class* `net.minecraft.world.entity.player.StackedContents.RecipePicker`

Enclosing class: StackedContents

### Fields
- `private final Recipe<?> recipe`
- `private final List<Ingredient> ingredients`
- `private final int ingredientCount`
- `private final int[] items`
- `private final int itemCount`
- `private final BitSet data`
- `private final it.unimi.dsi.fastutil.ints.IntList path`

### Methods
- `public boolean tryPick(int p_36513_,  @Nullable  it.unimi.dsi.fastutil.ints.IntList p_36514_)`
- `private int[] getUniqueAvailableIngredientItems()`
- `private boolean dfs(int p_36511_)`
- `private boolean isSatisfied(int p_36524_)`
- `private void setSatisfied(int p_36536_)`
- `private int getSatisfiedIndex(int p_36545_)`
- `private boolean hasConnection(boolean p_36519_,  int p_36520_,  int p_36521_)`
- `private boolean hasResidual(boolean p_36532_,  int p_36533_,  int p_36534_)`
- `private void toggleResidual(boolean p_36541_,  int p_36542_,  int p_36543_)`
- `private int getIndex(boolean p_36547_,  int p_36548_,  int p_36549_)`
- `private void visit(boolean p_36516_,  int p_36517_)`
- `private boolean hasVisited(boolean p_36529_,  int p_36530_)`
- `private int getVisitedIndex(boolean p_36538_,  int p_36539_)`
- `public int tryPickAll(int p_36526_,  @Nullable  it.unimi.dsi.fastutil.ints.IntList p_36527_)`
- `private int getMinIngredientCount()`
