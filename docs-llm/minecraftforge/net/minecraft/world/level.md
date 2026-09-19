# net.minecraft.world.level

- [BaseCommandBlock](#basecommandblock)
- [BaseSpawner](#basespawner)
- [BlockAndTintGetter](#blockandtintgetter)
- [BlockCollisions](#blockcollisions)
- [BlockEventData](#blockeventdata)
- [BlockGetter](#blockgetter)
- [ChunkPos](#chunkpos)
- [Class ClipContext.Block](#class-clipcontext.block)
- [Class ClipContext.Fluid](#class-clipcontext.fluid)
- [Class EmptyBlockGetter](#class-emptyblockgetter)
- [Class Explosion.BlockInteraction](#class-explosion.blockinteraction)
- [Class GameRules.Category](#class-gamerules.category)
- [Class GameType](#class-gametype)
- [Class Level.ExplosionInteraction](#class-level.explosioninteraction)
- [Class LightLayer](#class-lightlayer)
- [ClipBlockStateContext](#clipblockstatecontext)
- [ClipContext](#clipcontext)
- [ClipContext.ShapeGetter](#clipcontext.shapegetter)
- [CollisionGetter](#collisiongetter)
- [ColorResolver](#colorresolver)
- [CommonLevelAccessor](#commonlevelaccessor)
- [CustomSpawner](#customspawner)
- [DataPackConfig](#datapackconfig)
- [EntityBasedExplosionDamageCalculator](#entitybasedexplosiondamagecalculator)
- [EntityGetter](#entitygetter)
- [Explosion](#explosion)
- [ExplosionDamageCalculator](#explosiondamagecalculator)
- [FoliageColor](#foliagecolor)
- [ForcedChunksSavedData](#forcedchunkssaveddata)
- [GameRules](#gamerules)
- [GameRules.BooleanValue](#gamerules.booleanvalue)
- [GameRules.GameRuleTypeVisitor](#gamerules.gameruletypevisitor)
- [GameRules.IntegerValue](#gamerules.integervalue)
- [GameRules.Key>](#gamerules.key)
- [GameRules.Type>](#gamerules.type)
- [GameRules.Value>](#gamerules.value)
- [GameRules.VisitorCaller>](#gamerules.visitorcaller)
- [GrassColor](#grasscolor)
- [ItemLike](#itemlike)
- [Level](#level)
- [LevelAccessor](#levelaccessor)
- [LevelHeightAccessor](#levelheightaccessor)
- [LevelReader](#levelreader)
- [LevelSettings](#levelsettings)
- [LevelSimulatedReader](#levelsimulatedreader)
- [LevelSimulatedRW](#levelsimulatedrw)
- [LevelTimeAccess](#leveltimeaccess)
- [LevelWriter](#levelwriter)
- [LocalMobCapCalculator](#localmobcapcalculator)
- [LocalMobCapCalculator.MobCounts](#localmobcapcalculator.mobcounts)
- [NaturalSpawner](#naturalspawner)
- [NaturalSpawner.AfterSpawnCallback](#naturalspawner.afterspawncallback)
- [NaturalSpawner.ChunkGetter](#naturalspawner.chunkgetter)
- [NaturalSpawner.SpawnPredicate](#naturalspawner.spawnpredicate)
- [NaturalSpawner.SpawnState](#naturalspawner.spawnstate)
- [NoiseColumn](#noisecolumn)
- [PathNavigationRegion](#pathnavigationregion)
- [PotentialCalculator](#potentialcalculator)
- [PotentialCalculator.PointCharge](#potentialcalculator.pointcharge)
- [ServerLevelAccessor](#serverlevelaccessor)
- [SignalGetter](#signalgetter)
- [SpawnData](#spawndata)
- [SpawnData.CustomSpawnRules](#spawndata.customspawnrules)
- [StructureManager](#structuremanager)
- [WorldDataConfiguration](#worlddataconfiguration)
- [WorldGenLevel](#worldgenlevel)
## BaseCommandBlock

*class* `net.minecraft.world.level.BaseCommandBlock`

### Fields
- `private static final SimpleDateFormat TIME_FORMAT`
- `private static final Component DEFAULT_NAME`
- `private long lastExecution`
- `private boolean updateLastExecution`
- `private int successCount`
- `private boolean trackOutput`
- `@Nullable private Component lastOutput`
- `private String command`
- `private Component name`

### Inherited fields
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `public int getSuccessCount()`
- `public void setSuccessCount(int p_45411_)`
- `public Component getLastOutput()`
- `public CompoundTag save(CompoundTag p_45422_)`
- `public void load(CompoundTag p_45432_)`
- `public void setCommand(String p_45420_)`
- `public String getCommand()`
- `public boolean performCommand(Level p_45415_)`
- `public Component getName()`
- `public void setName(@Nullable  Component p_45424_)`
- `public void sendSystemMessage(Component p_220330_)`
- `public abstract ServerLevel getLevel()`
- `public abstract void onUpdated()`
- `public void setLastOutput(@Nullable  Component p_45434_)`
- `public void setTrackOutput(boolean p_45429_)`
- `public boolean isTrackOutput()`
- `public InteractionResult usedBy(Player p_45413_)`
- `public abstract Vec3 getPosition()`
- `public abstract CommandSourceStack createCommandSourceStack()`
- `public boolean acceptsSuccess()`
- `public boolean acceptsFailure()`
- `public boolean shouldInformAdmins()`
- `public abstract boolean isValid()`

### Inherited methods
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`

## BaseSpawner

*class* `net.minecraft.world.level.BaseSpawner`

### Fields
- `public static final String SPAWN_DATA_TAG` (= "SpawnData")
- `private static final org.slf4j.Logger LOGGER`
- `private static final int EVENT_SPAWN` (= 1)
- `private int spawnDelay`
- `private SimpleWeightedRandomList<SpawnData> spawnPotentials`
- `@Nullable private SpawnData nextSpawnData`
- `private double spin`
- `private double oSpin`
- `private int minSpawnDelay`
- `private int maxSpawnDelay`
- `private int spawnCount`
- `@Nullable private Entity displayEntity`
- `private int maxNearbyEntities`
- `private int requiredPlayerRange`
- `private int spawnRange`

### Methods
- `public void setEntityId(EntityType<?> p_253682_,  @Nullable  Level p_254041_,  RandomSource p_254221_,  BlockPos p_254050_)`
- `private boolean isNearPlayer(Level p_151344_,  BlockPos p_151345_)`
- `public void clientTick(Level p_151320_,  BlockPos p_151321_)`
- `public void serverTick(ServerLevel p_151312_,  BlockPos p_151313_)`
- `private void delay(Level p_151351_,  BlockPos p_151352_)`
- `public void load(@Nullable  Level p_151329_,  BlockPos p_151330_,  CompoundTag p_151331_)`
- `public CompoundTag save(CompoundTag p_186382_)`
- `@Nullable public Entity getOrCreateDisplayEntity(Level p_254323_,  RandomSource p_254353_,  BlockPos p_254313_)`
- `public boolean onEventTriggered(Level p_151317_,  int p_151318_)`
- `protected void setNextSpawnData(@Nullable  Level p_151325_,  BlockPos p_151326_,  SpawnData p_151327_)`
- `private SpawnData getOrCreateNextSpawnData(@Nullable  Level p_254503_,  RandomSource p_253892_,  BlockPos p_254487_)`
- `public abstract void broadcastEvent(Level p_151322_,  BlockPos p_151323_,  int p_151324_)`
- `public double getSpin()`
- `public double getoSpin()`
- `@Nullable public Entity getSpawnerEntity()`
- `@Nullable public BlockEntity getSpawnerBlockEntity()`

## BlockAndTintGetter

*interface* `net.minecraft.world.level.BlockAndTintGetter`

All Superinterfaces: BlockGetter, IForgeBlockAndTintGetter, IForgeBlockGetter, LevelHeightAccessor

### Methods
- `float getShade(Direction p_45522_,  boolean p_45523_)`
- `LevelLightEngine getLightEngine()`
- `int getBlockTint(BlockPos p_45520_,  ColorResolver p_45521_)`
- `default int getBrightness(LightLayer p_45518_,  BlockPos p_45519_)`
- `default int getRawBrightness(BlockPos p_45525_,  int p_45526_)`
- `default boolean canSeeSky(BlockPos p_45528_)`

### Inherited methods
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockEntity`, `getBlockEntity`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockState`, `getBlockStates`, `getFluidState`, `getLightEmission`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraftforge.client.extensions.IForgeBlockAndTintGetter`: `getShade`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getHeight`, `getMaxBuildHeight`, `getMaxSection`, `getMinBuildHeight`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`

## BlockCollisions

*class* `net.minecraft.world.level.BlockCollisions`

### Fields
- `private final AABB box`
- `private final CollisionContext context`
- `private final Cursor3D cursor`
- `private final BlockPos.MutableBlockPos pos`
- `private final VoxelShape entityShape`
- `private final CollisionGetter collisionGetter`
- `private final boolean onlySuffocatingBlocks`
- `@Nullable private BlockGetter cachedBlockGetter`
- `private long cachedBlockGetterPos`
- `private final BiFunction<BlockPos.MutableBlockPos,VoxelShape,T> resultProvider`

### Methods
- `@Nullable private BlockGetter getChunk(int p_186412_,  int p_186413_)`
- `protected T computeNext()`

### Inherited methods
- from `com.google.common.collect.AbstractIterator`: `endOfData`, `hasNext`, `next`, `peek`
- from `com.google.common.collect.UnmodifiableIterator`: `remove`
- from `java.util.Iterator`: `forEachRemaining`

## BlockEventData

*record* `net.minecraft.world.level.BlockEventData`

### Fields
- `private final BlockPos pos`
  The field for the pos record component.
- `private final Block block`
  The field for the block record component.
- `private final int paramA`
  The field for the paramA record component.
- `private final int paramB`
  The field for the paramB record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public BlockPos pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component
- `public Block block()`
  Returns the value of the block record component.
  - returns: the value of the block record component
- `public int paramA()`
  Returns the value of the paramA record component.
  - returns: the value of the paramA record component
- `public int paramB()`
  Returns the value of the paramB record component.
  - returns: the value of the paramB record component

## BlockGetter

*interface* `net.minecraft.world.level.BlockGetter`

All Superinterfaces: IForgeBlockGetter, LevelHeightAccessor

### Methods
- `@Nullable BlockEntity getBlockEntity(BlockPos p_45570_)`
- `default <T extends BlockEntity> Optional<T> getBlockEntity(BlockPos p_151367_,  BlockEntityType<T> p_151368_)`
- `BlockState getBlockState(BlockPos p_45571_)`
- `FluidState getFluidState(BlockPos p_45569_)`
- `default int getLightEmission(BlockPos p_45572_)`
- `default int getMaxLightLevel()`
- `default Stream<BlockState> getBlockStates(AABB p_45557_)`
- `default BlockHitResult isBlockInLine(ClipBlockStateContext p_151354_)`
- `default BlockHitResult clip(ClipContext p_45548_)`
- `@Nullable default BlockHitResult clipWithInteractionOverride(Vec3 p_45559_,  Vec3 p_45560_,  BlockPos p_45561_,  VoxelShape p_45562_,  BlockState p_45563_)`
- `default double getBlockFloorHeight(VoxelShape p_45565_,  Supplier<VoxelShape> p_45566_)`
- `default double getBlockFloorHeight(BlockPos p_45574_)`
- `static <T, C> T traverseBlocks(Vec3 p_151362_,  Vec3 p_151363_,  C p_151364_,  BiFunction<C,BlockPos,T> p_151365_,  Function<C,T> p_151366_)`

### Inherited methods
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getHeight`, `getMaxBuildHeight`, `getMaxSection`, `getMinBuildHeight`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`

## ChunkPos

*class* `net.minecraft.world.level.ChunkPos`

### Fields
- `private static final int SAFETY_MARGIN` (= 1056)
- `public static final long INVALID_CHUNK_POS`
- `public static final ChunkPos ZERO`
- `private static final long COORD_BITS` (= 32L)
- `private static final long COORD_MASK` (= 4294967295L)
- `private static final int REGION_BITS` (= 5)
- `public static final int REGION_SIZE` (= 32)
- `private static final int REGION_MASK` (= 31)
- `public static final int REGION_MAX_INDEX` (= 31)
- `public final int x`
- `public final int z`
- `private static final int HASH_A` (= 1664525)
- `private static final int HASH_C` (= 1013904223)
- `private static final int HASH_Z_XOR` (= -559038737)

### Methods
- `public static ChunkPos minFromRegion(int p_220338_,  int p_220339_)`
- `public static ChunkPos maxFromRegion(int p_220341_,  int p_220342_)`
- `public long toLong()`
- `public static long asLong(int p_45590_,  int p_45591_)`
- `public static long asLong(BlockPos p_151389_)`
- `public static int getX(long p_45593_)`
- `public static int getZ(long p_45603_)`
- `public int hashCode()`
- `public static int hash(int p_220344_,  int p_220345_)`
- `public boolean equals(Object p_45607_)`
- `public int getMiddleBlockX()`
- `public int getMiddleBlockZ()`
- `public int getMinBlockX()`
- `public int getMinBlockZ()`
- `public int getMaxBlockX()`
- `public int getMaxBlockZ()`
- `public int getRegionX()`
- `public int getRegionZ()`
- `public int getRegionLocalX()`
- `public int getRegionLocalZ()`
- `public BlockPos getBlockAt(int p_151385_,  int p_151386_,  int p_151387_)`
- `public int getBlockX(int p_151383_)`
- `public int getBlockZ(int p_151392_)`
- `public BlockPos getMiddleBlockPosition(int p_151395_)`
- `public String toString()`
- `public BlockPos getWorldPosition()`
- `public int getChessboardDistance(ChunkPos p_45595_)`
- `public int distanceSquared(ChunkPos p_297557_)`
- `public int distanceSquared(long p_300589_)`
- `private int distanceSquared(int p_300851_,  int p_301322_)`
- `public static Stream<ChunkPos> rangeClosed(ChunkPos p_45597_,  int p_45598_)`
- `public static Stream<ChunkPos> rangeClosed(ChunkPos p_45600_,  ChunkPos p_45601_)`

## Class ClipContext.Block

*enum* `net.minecraft.world.level.Class ClipContext.Block`

Enclosing class: ClipContext

### Fields
- `private final ClipContext.ShapeGetter shapeGetter`

### Methods
- `public static ClipContext.Block[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ClipContext.Block valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public VoxelShape get(BlockState p_45714_,  BlockGetter p_45715_,  BlockPos p_45716_,  CollisionContext p_45717_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ClipContext.Fluid

*enum* `net.minecraft.world.level.Class ClipContext.Fluid`

Enclosing class: ClipContext

### Fields
- `private final Predicate<FluidState> canPick`

### Methods
- `public static ClipContext.Fluid[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ClipContext.Fluid valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public boolean canPick(FluidState p_45732_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class EmptyBlockGetter

*enum* `net.minecraft.world.level.Class EmptyBlockGetter`

### Methods
- `public static EmptyBlockGetter[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static EmptyBlockGetter valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `@Nullable public BlockEntity getBlockEntity(BlockPos p_45867_)`
- `public BlockState getBlockState(BlockPos p_45869_)`
- `public FluidState getFluidState(BlockPos p_45865_)`
- `public int getMinBuildHeight()`
- `public int getHeight()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockEntity`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockStates`, `getLightEmission`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getMaxBuildHeight`, `getMaxSection`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`

## Class Explosion.BlockInteraction

*enum* `net.minecraft.world.level.Class Explosion.BlockInteraction`

Enclosing class: Explosion

### Methods
- `public static Explosion.BlockInteraction[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Explosion.BlockInteraction valueOf(String name)`
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

## Class GameRules.Category

*enum* `net.minecraft.world.level.Class GameRules.Category`

Enclosing class: GameRules

### Fields
- `private final String descriptionId`

### Methods
- `public static GameRules.Category[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static GameRules.Category valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getDescriptionId()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class GameType

*enum* `net.minecraft.world.level.Class GameType`

### Fields
- `public static final GameType DEFAULT_MODE`
- `public static final StringRepresentable.EnumCodec<GameType> CODEC`
- `private static final IntFunction<GameType> BY_ID`
- `private static final int NOT_SET`
- `private final int id`
- `private final String name`
- `private final Component shortName`
- `private final Component longName`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static GameType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static GameType valueOf(String name)`
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
- `public Component getLongDisplayName()`
- `public Component getShortDisplayName()`
- `public void updatePlayerAbilities(Abilities p_46399_)`
- `public boolean isBlockPlacingRestricted()`
- `public boolean isCreative()`
- `public boolean isSurvival()`
- `public static GameType byId(int p_46394_)`
- `public static GameType byName(String p_46401_)`
- `@Nullable @Contract("_,!null->!null;_,null->_") public static GameType byName(String p_46403_,  @Nullable  GameType p_46404_)`
- `public static int getNullableId(@Nullable  GameType p_151496_)`
- `@Nullable public static GameType byNullableId(int p_151498_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Level.ExplosionInteraction

*enum* `net.minecraft.world.level.Class Level.ExplosionInteraction`

Enclosing class: Level

### Methods
- `public static Level.ExplosionInteraction[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Level.ExplosionInteraction valueOf(String name)`
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

## Class LightLayer

*enum* `net.minecraft.world.level.Class LightLayer`

### Methods
- `public static LightLayer[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static LightLayer valueOf(String name)`
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

## ClipBlockStateContext

*class* `net.minecraft.world.level.ClipBlockStateContext`

### Fields
- `private final Vec3 from`
- `private final Vec3 to`
- `private final Predicate<BlockState> block`

### Methods
- `public Vec3 getTo()`
- `public Vec3 getFrom()`
- `public Predicate<BlockState> isTargetBlock()`

## ClipContext

*class* `net.minecraft.world.level.ClipContext`

### Fields
- `private final Vec3 from`
- `private final Vec3 to`
- `private final ClipContext.Block block`
- `private final ClipContext.Fluid fluid`
- `private final CollisionContext collisionContext`

### Methods
- `public Vec3 getTo()`
- `public Vec3 getFrom()`
- `public VoxelShape getBlockShape(BlockState p_45695_,  BlockGetter p_45696_,  BlockPos p_45697_)`
- `public VoxelShape getFluidShape(FluidState p_45699_,  BlockGetter p_45700_,  BlockPos p_45701_)`

## ClipContext.ShapeGetter

*interface* `net.minecraft.world.level.ClipContext.ShapeGetter`

Enclosing class: ClipContext

### Methods
- `VoxelShape get(BlockState p_45740_,  BlockGetter p_45741_,  BlockPos p_45742_,  CollisionContext p_45743_)`

## CollisionGetter

*interface* `net.minecraft.world.level.CollisionGetter`

All Superinterfaces: BlockGetter, IForgeBlockGetter, LevelHeightAccessor

### Methods
- `WorldBorder getWorldBorder()`
- `@Nullable BlockGetter getChunkForCollisions(int p_45774_,  int p_45775_)`
- `default boolean isUnobstructed(@Nullable  Entity p_45750_,  VoxelShape p_45751_)`
- `default boolean isUnobstructed(BlockState p_45753_,  BlockPos p_45754_,  CollisionContext p_45755_)`
- `default boolean isUnobstructed(Entity p_45785_)`
- `default boolean noCollision(AABB p_45773_)`
- `default boolean noCollision(Entity p_45787_)`
- `default boolean noCollision(@Nullable  Entity p_45757_,  AABB p_45758_)`
- `default boolean noBlockCollision(@Nullable  Entity p_299893_,  AABB p_300925_)`
- `List<VoxelShape> getEntityCollisions(@Nullable  Entity p_186427_,  AABB p_186428_)`
- `default Iterable<VoxelShape> getCollisions(@Nullable  Entity p_186432_,  AABB p_186433_)`
- `default Iterable<VoxelShape> getBlockCollisions(@Nullable  Entity p_186435_,  AABB p_186436_)`
- `@Nullable private VoxelShape borderCollision(Entity p_186441_,  AABB p_186442_)`
- `default boolean collidesWithSuffocatingBlock(@Nullable  Entity p_186438_,  AABB p_186439_)`
- `default Optional<BlockPos> findSupportingBlock(Entity p_286468_,  AABB p_286792_)`
- `default Optional<Vec3> findFreePosition(@Nullable  Entity p_151419_,  VoxelShape p_151420_,  Vec3 p_151421_,  double p_151422_,  double p_151423_,  double p_151424_)`

### Inherited methods
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockEntity`, `getBlockEntity`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockState`, `getBlockStates`, `getFluidState`, `getLightEmission`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getHeight`, `getMaxBuildHeight`, `getMaxSection`, `getMinBuildHeight`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`

## ColorResolver

*interface* `net.minecraft.world.level.ColorResolver`

### Methods
- `int getColor(Biome p_130046_,  double p_130047_,  double p_130048_)`

## CommonLevelAccessor

*interface* `net.minecraft.world.level.CommonLevelAccessor`

All Superinterfaces: BiomeManager.NoiseBiomeSource, BlockAndTintGetter, BlockGetter, CollisionGetter, EntityGetter, IForgeBlockAndTintGetter, IForgeBlockGetter, LevelHeightAccessor, LevelReader, LevelSimulatedReader, LevelSimulatedRW, LevelWriter, SignalGetter

### Inherited fields
- from `net.minecraft.world.level.SignalGetter`: `DIRECTIONS`

### Methods
- `default <T extends BlockEntity> Optional<T> getBlockEntity(BlockPos p_151452_,  BlockEntityType<T> p_151453_)`
- `default List<VoxelShape> getEntityCollisions(@Nullable  Entity p_186447_,  AABB p_186448_)`
- `default boolean isUnobstructed(@Nullable  Entity p_45828_,  VoxelShape p_45829_)`
- `default BlockPos getHeightmapPos(Heightmap.Types p_45831_,  BlockPos p_45832_)`

### Inherited methods
- from `net.minecraft.world.level.BlockAndTintGetter`: `canSeeSky`, `getBrightness`, `getLightEngine`, `getRawBrightness`, `getShade`
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockEntity`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockState`, `getBlockStates`, `getFluidState`, `getLightEmission`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraft.world.level.CollisionGetter`: `collidesWithSuffocatingBlock`, `findFreePosition`, `findSupportingBlock`, `getBlockCollisions`, `getCollisions`, `getWorldBorder`, `isUnobstructed`, `isUnobstructed`, `noBlockCollision`, `noCollision`, `noCollision`, `noCollision`
- from `net.minecraft.world.level.EntityGetter`: `getEntities`, `getEntities`, `getEntities`, `getEntitiesOfClass`, `getEntitiesOfClass`, `getNearbyEntities`, `getNearbyPlayers`, `getNearestEntity`, `getNearestEntity`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getPlayerByUUID`, `hasNearbyAlivePlayer`, `players`
- from `net.minecraftforge.client.extensions.IForgeBlockAndTintGetter`: `getShade`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getMaxBuildHeight`, `getMaxSection`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`
- from `net.minecraft.world.level.LevelReader`: `canSeeSkyFromBelowWater`, `containsAnyLiquid`, `dimensionType`, `enabledFeatures`, `getBiome`, `getBiomeManager`, `getBlockStatesIfLoaded`, `getBlockTint`, `getChunk`, `getChunk`, `getChunk`, `getChunk`, `getChunkForCollisions`, `getHeight`, `getHeight`, `getLightLevelDependentMagicValue`, `getMaxLocalRawBrightness`, `getMaxLocalRawBrightness`, `getMinBuildHeight`, `getNoiseBiome`, `getPathfindingCostFromLightLevels`, `getSeaLevel`, `getSkyDarken`, `getUncachedNoiseBiome`, `hasChunk`, `hasChunkAt`, `hasChunkAt`, `hasChunksAt`, `hasChunksAt`, `hasChunksAt`, `holderLookup`, `isAreaLoaded`, `isClientSide`, `isEmptyBlock`, `isWaterAt`, `registryAccess`
- from `net.minecraft.world.level.LevelSimulatedReader`: `isFluidAtPosition`, `isStateAtPosition`
- from `net.minecraft.world.level.LevelWriter`: `addFreshEntity`, `destroyBlock`, `destroyBlock`, `destroyBlock`, `removeBlock`, `setBlock`, `setBlock`
- from `net.minecraft.world.level.SignalGetter`: `getBestNeighborSignal`, `getControlInputSignal`, `getDirectSignal`, `getDirectSignalTo`, `getSignal`, `hasNeighborSignal`, `hasSignal`

## CustomSpawner

*interface* `net.minecraft.world.level.CustomSpawner`

### Methods
- `int tick(ServerLevel p_45839_,  boolean p_45840_,  boolean p_45841_)`

## DataPackConfig

*class* `net.minecraft.world.level.DataPackConfig`

### Fields
- `public static final DataPackConfig DEFAULT`
- `public static final com.mojang.serialization.Codec<DataPackConfig> CODEC`
- `private final List<String> enabled`
- `private final List<String> disabled`

### Methods
- `public List<String> getEnabled()`
- `public List<String> getDisabled()`
- `public void addModPacks(List<String> modPacks)`

## EntityBasedExplosionDamageCalculator

*class* `net.minecraft.world.level.EntityBasedExplosionDamageCalculator`

### Fields
- `private final Entity source`

### Methods
- `public Optional<Float> getBlockExplosionResistance(Explosion p_45902_,  BlockGetter p_45903_,  BlockPos p_45904_,  BlockState p_45905_,  FluidState p_45906_)`
- `public boolean shouldBlockExplode(Explosion p_45896_,  BlockGetter p_45897_,  BlockPos p_45898_,  BlockState p_45899_,  float p_45900_)`

## EntityGetter

*interface* `net.minecraft.world.level.EntityGetter`

### Methods
- `List<Entity> getEntities(@Nullable  Entity p_45936_,  AABB p_45937_,  Predicate<? super Entity> p_45938_)`
- `<T extends Entity> List<T> getEntities(EntityTypeTest<Entity,T> p_151464_,  AABB p_151465_,  Predicate<? super T> p_151466_)`
- `default <T extends Entity> List<T> getEntitiesOfClass(Class<T> p_45979_,  AABB p_45980_,  Predicate<? super T> p_45981_)`
- `List<? extends Player> players()`
- `default List<Entity> getEntities(@Nullable  Entity p_45934_,  AABB p_45935_)`
- `default boolean isUnobstructed(@Nullable  Entity p_45939_,  VoxelShape p_45940_)`
- `default <T extends Entity> List<T> getEntitiesOfClass(Class<T> p_45977_,  AABB p_45978_)`
- `default List<VoxelShape> getEntityCollisions(@Nullable  Entity p_186451_,  AABB p_186452_)`
- `@Nullable default Player getNearestPlayer(double p_45919_,  double p_45920_,  double p_45921_,  double p_45922_,  @Nullable  Predicate<Entity> p_45923_)`
- `@Nullable default Player getNearestPlayer(Entity p_45931_,  double p_45932_)`
- `@Nullable default Player getNearestPlayer(double p_45925_,  double p_45926_,  double p_45927_,  double p_45928_,  boolean p_45929_)`
- `default boolean hasNearbyAlivePlayer(double p_45915_,  double p_45916_,  double p_45917_,  double p_45918_)`
- `@Nullable default Player getNearestPlayer(TargetingConditions p_45947_,  LivingEntity p_45948_)`
- `@Nullable default Player getNearestPlayer(TargetingConditions p_45950_,  LivingEntity p_45951_,  double p_45952_,  double p_45953_,  double p_45954_)`
- `@Nullable default Player getNearestPlayer(TargetingConditions p_45942_,  double p_45943_,  double p_45944_,  double p_45945_)`
- `@Nullable default <T extends LivingEntity> T getNearestEntity(Class<? extends T> p_45964_,  TargetingConditions p_45965_,  @Nullable  LivingEntity p_45966_,  double p_45967_,  double p_45968_,  double p_45969_,  AABB p_45970_)`
- `@Nullable default <T extends LivingEntity> T getNearestEntity(List<? extends T> p_45983_,  TargetingConditions p_45984_,  @Nullable  LivingEntity p_45985_,  double p_45986_,  double p_45987_,  double p_45988_)`
- `default List<Player> getNearbyPlayers(TargetingConditions p_45956_,  LivingEntity p_45957_,  AABB p_45958_)`
- `default <T extends LivingEntity> List<T> getNearbyEntities(Class<T> p_45972_,  TargetingConditions p_45973_,  LivingEntity p_45974_,  AABB p_45975_)`
- `@Nullable default Player getPlayerByUUID(UUID p_46004_)`

## Explosion

*class* `net.minecraft.world.level.Explosion`

### Fields
- `private static final ExplosionDamageCalculator EXPLOSION_DAMAGE_CALCULATOR`
- `private static final int MAX_DROPS_PER_COMBINED_STACK` (= 16)
- `private final boolean fire`
- `private final Explosion.BlockInteraction blockInteraction`
- `private final RandomSource random`
- `private final Level level`
- `private final double x`
- `private final double y`
- `private final double z`
- `@Nullable private final Entity source`
- `private final float radius`
- `private final DamageSource damageSource`
- `private final ExplosionDamageCalculator damageCalculator`
- `private final it.unimi.dsi.fastutil.objects.ObjectArrayList<BlockPos> toBlow`
- `private final Map<Player,Vec3> hitPlayers`
- `private final Vec3 position`

### Methods
- `private ExplosionDamageCalculator makeDamageCalculator(@Nullable  Entity p_46063_)`
- `public static float getSeenPercent(Vec3 p_46065_,  Entity p_46066_)`
- `public void explode()`
- `public void finalizeExplosion(boolean p_46076_)`
- `public boolean interactsWithBlocks()`
- `private static void addBlockDrops(it.unimi.dsi.fastutil.objects.ObjectArrayList<com.mojang.datafixers.util.Pair<ItemStack,BlockPos>> p_46068_,  ItemStack p_46069_,  BlockPos p_46070_)`
- `public DamageSource getDamageSource()`
- `public Map<Player,Vec3> getHitPlayers()`
- `@Nullable public LivingEntity getIndirectSourceEntity()`
- `@Nullable public Entity getDirectSourceEntity()`
- `public void clearToBlow()`
- `public List<BlockPos> getToBlow()`
- `public Vec3 getPosition()`
- `@Nullable public Entity getExploder()`

## ExplosionDamageCalculator

*class* `net.minecraft.world.level.ExplosionDamageCalculator`

### Methods
- `public Optional<Float> getBlockExplosionResistance(Explosion p_46099_,  BlockGetter p_46100_,  BlockPos p_46101_,  BlockState p_46102_,  FluidState p_46103_)`
- `public boolean shouldBlockExplode(Explosion p_46094_,  BlockGetter p_46095_,  BlockPos p_46096_,  BlockState p_46097_,  float p_46098_)`

## FoliageColor

*class* `net.minecraft.world.level.FoliageColor`

### Fields
- `private static int[] pixels`

### Methods
- `public static void init(int[] p_46111_)`
- `public static int get(double p_46108_,  double p_46109_)`
- `public static int getEvergreenColor()`
- `public static int getBirchColor()`
- `public static int getDefaultColor()`
- `public static int getMangroveColor()`

## ForcedChunksSavedData

*class* `net.minecraft.world.level.ForcedChunksSavedData`

### Fields
- `public static final String FILE_ID` (= "chunks")
- `private static final String TAG_FORCED` (= "Forced")
- `private final it.unimi.dsi.fastutil.longs.LongSet chunks`
- `private ForgeChunkManager.TicketTracker<BlockPos> blockForcedChunks`
- `private ForgeChunkManager.TicketTracker<UUID> entityForcedChunks`

### Methods
- `public static SavedData.Factory<ForcedChunksSavedData> factory()`
- `public static ForcedChunksSavedData load(CompoundTag p_151484_)`
- `public CompoundTag save(CompoundTag p_46120_)`
- `public it.unimi.dsi.fastutil.longs.LongSet getChunks()`
- `public ForgeChunkManager.TicketTracker<BlockPos> getBlockForcedChunks()`
- `public ForgeChunkManager.TicketTracker<UUID> getEntityForcedChunks()`

### Inherited methods
- from `net.minecraft.world.level.saveddata.SavedData`: `isDirty`, `save`, `setDirty`, `setDirty`

## GameRules

*class* `net.minecraft.world.level.GameRules`

### Fields
- `public static final int DEFAULT_RANDOM_TICK_SPEED` (= 3)
- `static final org.slf4j.Logger LOGGER`
- `private static final Map<GameRules.Key<?>,GameRules.Type<?>> GAME_RULE_TYPES`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_DOFIRETICK`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_MOBGRIEFING`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_KEEPINVENTORY`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_DOMOBSPAWNING`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_DOMOBLOOT`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_DOBLOCKDROPS`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_DOENTITYDROPS`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_COMMANDBLOCKOUTPUT`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_NATURAL_REGENERATION`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_DAYLIGHT`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_LOGADMINCOMMANDS`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_SHOWDEATHMESSAGES`
- `public static final GameRules.Key<GameRules.IntegerValue> RULE_RANDOMTICKING`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_SENDCOMMANDFEEDBACK`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_REDUCEDDEBUGINFO`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_SPECTATORSGENERATECHUNKS`
- `public static final GameRules.Key<GameRules.IntegerValue> RULE_SPAWN_RADIUS`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_DISABLE_ELYTRA_MOVEMENT_CHECK`
- `public static final GameRules.Key<GameRules.IntegerValue> RULE_MAX_ENTITY_CRAMMING`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_WEATHER_CYCLE`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_LIMITED_CRAFTING`
- `public static final GameRules.Key<GameRules.IntegerValue> RULE_MAX_COMMAND_CHAIN_LENGTH`
- `public static final GameRules.Key<GameRules.IntegerValue> RULE_COMMAND_MODIFICATION_BLOCK_LIMIT`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_ANNOUNCE_ADVANCEMENTS`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_DISABLE_RAIDS`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_DOINSOMNIA`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_DO_IMMEDIATE_RESPAWN`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_DROWNING_DAMAGE`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_FALL_DAMAGE`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_FIRE_DAMAGE`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_FREEZE_DAMAGE`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_DO_PATROL_SPAWNING`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_DO_TRADER_SPAWNING`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_DO_WARDEN_SPAWNING`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_FORGIVE_DEAD_PLAYERS`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_UNIVERSAL_ANGER`
- `public static final GameRules.Key<GameRules.IntegerValue> RULE_PLAYERS_SLEEPING_PERCENTAGE`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_BLOCK_EXPLOSION_DROP_DECAY`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_MOB_EXPLOSION_DROP_DECAY`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_TNT_EXPLOSION_DROP_DECAY`
- `public static final GameRules.Key<GameRules.IntegerValue> RULE_SNOW_ACCUMULATION_HEIGHT`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_WATER_SOURCE_CONVERSION`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_LAVA_SOURCE_CONVERSION`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_GLOBAL_SOUND_EVENTS`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_DO_VINES_SPREAD`
- `public static final GameRules.Key<GameRules.BooleanValue> RULE_ENDER_PEARLS_VANISH_ON_DEATH`
- `private final Map<GameRules.Key<?>,GameRules.Value<?>> rules`

### Methods
- `public static <T extends GameRules.Value<T>> GameRules.Key<T> register(String p_46190_,  GameRules.Category p_46191_,  GameRules.Type<T> p_46192_)`
- `public <T extends GameRules.Value<T>> T getRule(GameRules.Key<T> p_46171_)`
- `public CompoundTag createTag()`
- `private void loadFromTag(com.mojang.serialization.DynamicLike<?> p_46184_)`
- `public GameRules copy()`
- `public static void visitGameRuleTypes(GameRules.GameRuleTypeVisitor p_46165_)`
- `private static <T extends GameRules.Value<T>> void callVisitorCap(GameRules.GameRuleTypeVisitor p_46167_,  GameRules.Key<?> p_46168_,  GameRules.Type<?> p_46169_)`
- `public void assignFrom(GameRules p_46177_,  @Nullable  MinecraftServer p_46178_)`
- `private <T extends GameRules.Value<T>> void assignCap(GameRules.Key<T> p_46173_,  GameRules p_46174_,  @Nullable  MinecraftServer p_46175_)`
- `public boolean getBoolean(GameRules.Key<GameRules.BooleanValue> p_46208_)`
- `public int getInt(GameRules.Key<GameRules.IntegerValue> p_46216_)`

## GameRules.BooleanValue

*class* `net.minecraft.world.level.GameRules.BooleanValue`

Enclosing class: GameRules

### Fields
- `private boolean value`

### Inherited fields
- from `net.minecraft.world.level.GameRules.Value`: `type`

### Methods
- `public static GameRules.Type<GameRules.BooleanValue> create(boolean p_46253_,  BiConsumer<MinecraftServer,GameRules.BooleanValue> p_46254_)`
- `public static GameRules.Type<GameRules.BooleanValue> create(boolean p_46251_)`
- `protected void updateFromArgument(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_46231_,  String p_46232_)`
- `public boolean get()`
- `public void set(boolean p_46247_,  @Nullable  MinecraftServer p_46248_)`
- `public String serialize()`
- `protected void deserialize(String p_46234_)`
- `public int getCommandResult()`
- `protected GameRules.BooleanValue getSelf()`
- `protected GameRules.BooleanValue copy()`
- `public void setFrom(GameRules.BooleanValue p_46225_,  @Nullable  MinecraftServer p_46226_)`

### Inherited methods
- from `net.minecraft.world.level.GameRules.Value`: `onChanged`, `setFromArgument`, `toString`

## GameRules.GameRuleTypeVisitor

*interface* `net.minecraft.world.level.GameRules.GameRuleTypeVisitor`

Enclosing class: GameRules

### Methods
- `default <T extends GameRules.Value<T>> void visit(GameRules.Key<T> p_46278_,  GameRules.Type<T> p_46279_)`
- `default void visitBoolean(GameRules.Key<GameRules.BooleanValue> p_46280_,  GameRules.Type<GameRules.BooleanValue> p_46281_)`
- `default void visitInteger(GameRules.Key<GameRules.IntegerValue> p_46282_,  GameRules.Type<GameRules.IntegerValue> p_46283_)`

## GameRules.IntegerValue

*class* `net.minecraft.world.level.GameRules.IntegerValue`

Enclosing class: GameRules

### Fields
- `private int value`

### Inherited fields
- from `net.minecraft.world.level.GameRules.Value`: `type`

### Methods
- `public static GameRules.Type<GameRules.IntegerValue> create(int p_46295_,  BiConsumer<MinecraftServer,GameRules.IntegerValue> p_46296_)`
- `public static GameRules.Type<GameRules.IntegerValue> create(int p_46313_)`
- `protected void updateFromArgument(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_46304_,  String p_46305_)`
- `public int get()`
- `public void set(int p_151490_,  @Nullable  MinecraftServer p_151491_)`
- `public String serialize()`
- `protected void deserialize(String p_46307_)`
- `public boolean tryDeserialize(String p_46315_)`
- `private static int safeParse(String p_46318_)`
- `public int getCommandResult()`
- `protected GameRules.IntegerValue getSelf()`
- `protected GameRules.IntegerValue copy()`
- `public void setFrom(GameRules.IntegerValue p_46298_,  @Nullable  MinecraftServer p_46299_)`

### Inherited methods
- from `net.minecraft.world.level.GameRules.Value`: `onChanged`, `setFromArgument`, `toString`

## GameRules.Key>

*class* `net.minecraft.world.level.GameRules.Key>`

Enclosing class: GameRules

### Fields
- `final String id`
- `private final GameRules.Category category`

### Methods
- `public String toString()`
- `public boolean equals(Object p_46334_)`
- `public int hashCode()`
- `public String getId()`
- `public String getDescriptionId()`
- `public GameRules.Category getCategory()`

## GameRules.Type>

*class* `net.minecraft.world.level.GameRules.Type>`

Enclosing class: GameRules

### Fields
- `private final Supplier<com.mojang.brigadier.arguments.ArgumentType<?>> argument`
- `private final Function<GameRules.Type<T extends GameRules.Value<T>>,T extends GameRules.Value<T>> constructor`
- `final BiConsumer<MinecraftServer,T extends GameRules.Value<T>> callback`
- `private final GameRules.VisitorCaller<T extends GameRules.Value<T>> visitorCaller`

### Methods
- `public com.mojang.brigadier.builder.RequiredArgumentBuilder<CommandSourceStack,?> createArgument(String p_46359_)`
- `public T createRule()`
- `public void callVisitor(GameRules.GameRuleTypeVisitor p_46354_,  GameRules.Key<T> p_46355_)`

## GameRules.Value>

*class* `net.minecraft.world.level.GameRules.Value>`

Enclosing class: GameRules

### Fields
- `protected final GameRules.Type<T extends GameRules.Value<T>> type`

### Methods
- `protected abstract void updateFromArgument(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_46365_,  String p_46366_)`
- `public void setFromArgument(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_46371_,  String p_46372_)`
- `protected void onChanged(@Nullable  MinecraftServer p_46369_)`
- `protected abstract void deserialize(String p_46367_)`
- `public abstract String serialize()`
- `public String toString()`
- `public abstract int getCommandResult()`
- `protected abstract T getSelf()`
- `protected abstract T copy()`
- `public abstract void setFrom(T p_46363_,  @Nullable  MinecraftServer p_46364_)`

## GameRules.VisitorCaller>

*interface* `net.minecraft.world.level.GameRules.VisitorCaller>`

Enclosing class: GameRules

### Methods
- `void call(GameRules.GameRuleTypeVisitor p_46375_,  GameRules.Key<T> p_46376_,  GameRules.Type<T> p_46377_)`

## GrassColor

*class* `net.minecraft.world.level.GrassColor`

### Fields
- `private static int[] pixels`

### Methods
- `public static void init(int[] p_46419_)`
- `public static int get(double p_46416_,  double p_46417_)`
- `public static int getDefaultColor()`

## ItemLike

*interface* `net.minecraft.world.level.ItemLike`

### Methods
- `Item asItem()`

## Level

*class* `net.minecraft.world.level.Level`

### Fields
- `public static final com.mojang.serialization.Codec<ResourceKey<Level>> RESOURCE_KEY_CODEC`
- `public static final ResourceKey<Level> OVERWORLD`
- `public static final ResourceKey<Level> NETHER`
- `public static final ResourceKey<Level> END`
- `public static final int MAX_LEVEL_SIZE` (= 30000000)
- `public static final int LONG_PARTICLE_CLIP_RANGE` (= 512)
- `public static final int SHORT_PARTICLE_CLIP_RANGE` (= 32)
- `public static final int MAX_BRIGHTNESS` (= 15)
- `public static final int TICKS_PER_DAY` (= 24000)
- `public static final int MAX_ENTITY_SPAWN_Y` (= 20000000)
- `public static final int MIN_ENTITY_SPAWN_Y` (= -20000000)
- `protected final List<TickingBlockEntity> blockEntityTickers`
- `protected final NeighborUpdater neighborUpdater`
- `private final List<TickingBlockEntity> pendingBlockEntityTickers`
- `private boolean tickingBlockEntities`
- `private final Thread thread`
- `private final boolean isDebug`
- `private int skyDarken`
- `protected int randValue`
- `protected final int addend` (= 1013904223)
- `public float oRainLevel`
- `public float rainLevel`
- `public float oThunderLevel`
- `public float thunderLevel`
- `public final RandomSource random`
- `@Deprecated private final RandomSource threadSafeRandom` (deprecated)
- `private final ResourceKey<DimensionType> dimensionTypeId`
- `private final Holder<DimensionType> dimensionTypeRegistration`
- `protected final WritableLevelData levelData`
- `private final Supplier<ProfilerFiller> profiler`
- `public final boolean isClientSide`
- `private final WorldBorder worldBorder`
- `private final BiomeManager biomeManager`
- `private final ResourceKey<Level> dimension`
- `private final RegistryAccess registryAccess`
- `private final DamageSources damageSources`
- `private long subTickCount`
- `public boolean restoringBlockSnapshots`
- `public boolean captureBlockSnapshots`
- `public ArrayList<BlockSnapshot> capturedBlockSnapshots`
- `private final ArrayList<BlockEntity> freshBlockEntities`
- `private final ArrayList<BlockEntity> pendingFreshBlockEntities`
- `private double maxEntityRadius`

### Inherited fields
- from `net.minecraft.world.level.SignalGetter`: `DIRECTIONS`

### Methods
- `public boolean isClientSide()`
- `@Nullable public MinecraftServer getServer()`
- `public boolean isInWorldBounds(BlockPos p_46740_)`
- `public static boolean isInSpawnableBounds(BlockPos p_46742_)`
- `private static boolean isInWorldBoundsHorizontal(BlockPos p_46458_)`
- `private static boolean isOutsideSpawnableHeight(int p_46725_)`
- `public LevelChunk getChunkAt(BlockPos p_46746_)`
- `public LevelChunk getChunk(int p_46727_,  int p_46728_)`
- `@Nullable public ChunkAccess getChunk(int p_46502_,  int p_46503_,  ChunkStatus p_46504_,  boolean p_46505_)`
- `public boolean setBlock(BlockPos p_46601_,  BlockState p_46602_,  int p_46603_)`
- `public boolean setBlock(BlockPos p_46605_,  BlockState p_46606_,  int p_46607_,  int p_46608_)`
- `public void markAndNotifyBlock(BlockPos p_46605_,  @Nullable  LevelChunk levelchunk,  BlockState blockstate,  BlockState p_46606_,  int p_46607_,  int p_46608_)`
- `public void onBlockStateChange(BlockPos p_46609_,  BlockState p_46610_,  BlockState p_46611_)`
- `public boolean removeBlock(BlockPos p_46623_,  boolean p_46624_)`
- `public boolean destroyBlock(BlockPos p_46626_,  boolean p_46627_,  @Nullable  Entity p_46628_,  int p_46629_)`
- `public void addDestroyBlockEffect(BlockPos p_151531_,  BlockState p_151532_)`
- `public boolean setBlockAndUpdate(BlockPos p_46598_,  BlockState p_46599_)`
- `public abstract void sendBlockUpdated(BlockPos p_46612_,  BlockState p_46613_,  BlockState p_46614_,  int p_46615_)`
- `public void setBlocksDirty(BlockPos p_46678_,  BlockState p_46679_,  BlockState p_46680_)`
- `public void updateNeighborsAt(BlockPos p_46673_,  Block p_46674_)`
- `public void updateNeighborsAtExceptFromFacing(BlockPos p_46591_,  Block p_46592_,  Direction p_46593_)`
- `public void neighborChanged(BlockPos p_46587_,  Block p_46588_,  BlockPos p_46589_)`
- `public void neighborChanged(BlockState p_220379_,  BlockPos p_220380_,  Block p_220381_,  BlockPos p_220382_,  boolean p_220383_)`
- `public void neighborShapeChanged(Direction p_220385_,  BlockState p_220386_,  BlockPos p_220387_,  BlockPos p_220388_,  int p_220389_,  int p_220390_)`
- `public int getHeight(Heightmap.Types p_46571_,  int p_46572_,  int p_46573_)`
- `public LevelLightEngine getLightEngine()`
- `public BlockState getBlockState(BlockPos p_46732_)`
- `public FluidState getFluidState(BlockPos p_46671_)`
- `public boolean isDay()`
- `public boolean isNight()`
- `public void playSound(@Nullable  Entity p_252137_,  BlockPos p_251749_,  SoundEvent p_248842_,  SoundSource p_251104_,  float p_249531_,  float p_250763_)`
- `public void playSound(@Nullable  Player p_46560_,  BlockPos p_46561_,  SoundEvent p_46562_,  SoundSource p_46563_,  float p_46564_,  float p_46565_)`
- `public abstract void playSeededSound(@Nullable  Player p_262953_,  double p_263004_,  double p_263398_,  double p_263376_,  Holder<SoundEvent> p_263359_,  SoundSource p_263020_,  float p_263055_,  float p_262914_,  long p_262991_)`
- `public void playSeededSound(@Nullable  Player p_220363_,  double p_220364_,  double p_220365_,  double p_220366_,  SoundEvent p_220367_,  SoundSource p_220368_,  float p_220369_,  float p_220370_,  long p_220371_)`
- `public abstract void playSeededSound(@Nullable  Player p_220372_,  Entity p_220373_,  Holder<SoundEvent> p_263500_,  SoundSource p_220375_,  float p_220376_,  float p_220377_,  long p_220378_)`
- `public void playSound(@Nullable  Player p_46543_,  double p_46544_,  double p_46545_,  double p_46546_,  SoundEvent p_46547_,  SoundSource p_46548_,  float p_46549_,  float p_46550_)`
- `public void playSound(@Nullable  Player p_46551_,  Entity p_46552_,  SoundEvent p_46553_,  SoundSource p_46554_,  float p_46555_,  float p_46556_)`
- `public void playLocalSound(BlockPos p_250938_,  SoundEvent p_252209_,  SoundSource p_249161_,  float p_249980_,  float p_250277_,  boolean p_250151_)`
- `public void playLocalSound(double p_46482_,  double p_46483_,  double p_46484_,  SoundEvent p_46485_,  SoundSource p_46486_,  float p_46487_,  float p_46488_,  boolean p_46489_)`
- `public void addParticle(ParticleOptions p_46631_,  double p_46632_,  double p_46633_,  double p_46634_,  double p_46635_,  double p_46636_,  double p_46637_)`
- `public void addParticle(ParticleOptions p_46638_,  boolean p_46639_,  double p_46640_,  double p_46641_,  double p_46642_,  double p_46643_,  double p_46644_,  double p_46645_)`
- `public void addAlwaysVisibleParticle(ParticleOptions p_46684_,  double p_46685_,  double p_46686_,  double p_46687_,  double p_46688_,  double p_46689_,  double p_46690_)`
- `public void addAlwaysVisibleParticle(ParticleOptions p_46691_,  boolean p_46692_,  double p_46693_,  double p_46694_,  double p_46695_,  double p_46696_,  double p_46697_,  double p_46698_)`
- `public float getSunAngle(float p_46491_)`
- `public void addBlockEntityTicker(TickingBlockEntity p_151526_)`
- `public void addFreshBlockEntities(Collection<BlockEntity> beList)`
- `protected void tickBlockEntities()`
- `public <T extends Entity> void guardEntityTick(Consumer<T> p_46654_,  T p_46655_)`
- `public boolean shouldTickDeath(Entity p_186458_)`
- `public boolean shouldTickBlocksAt(long p_186456_)`
- `public boolean shouldTickBlocksAt(BlockPos p_220394_)`
- `public Explosion explode(@Nullable  Entity p_256599_,  double p_255914_,  double p_255684_,  double p_255843_,  float p_256310_,  Level.ExplosionInteraction p_256178_)`
- `public Explosion explode(@Nullable  Entity p_255682_,  double p_255803_,  double p_256403_,  double p_256538_,  float p_255674_,  boolean p_256634_,  Level.ExplosionInteraction p_256111_)`
- `public Explosion explode(@Nullable  Entity p_255653_,  @Nullable  DamageSource p_256558_,  @Nullable  ExplosionDamageCalculator p_255929_,  Vec3 p_256001_,  float p_255963_,  boolean p_256099_,  Level.ExplosionInteraction p_256371_)`
- `public Explosion explode(@Nullable  Entity p_256145_,  @Nullable  DamageSource p_256004_,  @Nullable  ExplosionDamageCalculator p_255696_,  double p_256208_,  double p_256036_,  double p_255746_,  float p_256647_,  boolean p_256098_,  Level.ExplosionInteraction p_256104_)`
- `public Explosion explode(@Nullable  Entity p_256233_,  @Nullable  DamageSource p_255861_,  @Nullable  ExplosionDamageCalculator p_255867_,  double p_256447_,  double p_255732_,  double p_255717_,  float p_256013_,  boolean p_256228_,  Level.ExplosionInteraction p_255784_,  boolean p_256377_)`
- `private Explosion.BlockInteraction getDestroyType(GameRules.Key<GameRules.BooleanValue> p_256250_)`
- `public abstract String gatherChunkSourceStats()`
- `@Nullable public BlockEntity getBlockEntity(BlockPos p_46716_)`
- `public void setBlockEntity(BlockEntity p_151524_)`
- `public void removeBlockEntity(BlockPos p_46748_)`
- `public boolean isLoaded(BlockPos p_46750_)`
- `public boolean loadedAndEntityCanStandOnFace(BlockPos p_46579_,  Entity p_46580_,  Direction p_46581_)`
- `public boolean loadedAndEntityCanStandOn(BlockPos p_46576_,  Entity p_46577_)`
- `public void updateSkyBrightness()`
- `public void setSpawnSettings(boolean p_46704_,  boolean p_46705_)`
- `public BlockPos getSharedSpawnPos()`
- `public float getSharedSpawnAngle()`
- `protected void prepareWeather()`
- `public void close()  throws IOException`
  - throws: IOException
- `@Nullable public BlockGetter getChunkForCollisions(int p_46711_,  int p_46712_)`
- `public List<Entity> getEntities(@Nullable  Entity p_46536_,  AABB p_46537_,  Predicate<? super Entity> p_46538_)`
- `public <T extends Entity> List<T> getEntities(EntityTypeTest<Entity,T> p_151528_,  AABB p_151529_,  Predicate<? super T> p_151530_)`
- `public <T extends Entity> void getEntities(EntityTypeTest<Entity,T> p_261899_,  AABB p_261837_,  Predicate<? super T> p_261519_,  List<? super T> p_262046_)`
- `public <T extends Entity> void getEntities(EntityTypeTest<Entity,T> p_261885_,  AABB p_262086_,  Predicate<? super T> p_261688_,  List<? super T> p_262071_,  int p_261858_)`
- `@Nullable public abstract Entity getEntity(int p_46492_)`
- `public void blockEntityChanged(BlockPos p_151544_)`
- `public int getSeaLevel()`
- `public void disconnect()`
- `public long getGameTime()`
- `public long getDayTime()`
- `public boolean mayInteract(Player p_46557_,  BlockPos p_46558_)`
- `public void broadcastEntityEvent(Entity p_46509_,  byte p_46510_)`
- `public void broadcastDamageEvent(Entity p_270831_,  DamageSource p_270361_)`
- `public void blockEvent(BlockPos p_46582_,  Block p_46583_,  int p_46584_,  int p_46585_)`
- `public LevelData getLevelData()`
- `public GameRules getGameRules()`
- `public float getThunderLevel(float p_46662_)`
- `public void setThunderLevel(float p_46708_)`
- `public float getRainLevel(float p_46723_)`
- `public void setRainLevel(float p_46735_)`
- `public boolean isThundering()`
- `public boolean isRaining()`
- `public boolean isRainingAt(BlockPos p_46759_)`
- `@Nullable public abstract MapItemSavedData getMapData(String p_46650_)`
- `public abstract void setMapData(String p_151533_,  MapItemSavedData p_151534_)`
- `public abstract int getFreeMapId()`
- `public void globalLevelEvent(int p_46665_,  BlockPos p_46666_,  int p_46667_)`
- `public CrashReportCategory fillReportDetails(CrashReport p_46656_)`
- `public abstract void destroyBlockProgress(int p_46506_,  BlockPos p_46507_,  int p_46508_)`
- `public void createFireworks(double p_46475_,  double p_46476_,  double p_46477_,  double p_46478_,  double p_46479_,  double p_46480_,  @Nullable  CompoundTag p_46481_)`
- `public abstract Scoreboard getScoreboard()`
- `public void updateNeighbourForOutputSignal(BlockPos p_46718_,  Block p_46719_)`
- `public DifficultyInstance getCurrentDifficultyAt(BlockPos p_46730_)`
- `public int getSkyDarken()`
- `public void setSkyFlashTime(int p_46709_)`
- `public WorldBorder getWorldBorder()`
- `public void sendPacketToServer(Packet<?> p_46657_)`
- `public DimensionType dimensionType()`
- `public ResourceKey<DimensionType> dimensionTypeId()`
- `public Holder<DimensionType> dimensionTypeRegistration()`
- `public ResourceKey<Level> dimension()`
- `public RandomSource getRandom()`
- `public boolean isStateAtPosition(BlockPos p_46620_,  Predicate<BlockState> p_46621_)`
- `public boolean isFluidAtPosition(BlockPos p_151541_,  Predicate<FluidState> p_151542_)`
- `public abstract RecipeManager getRecipeManager()`
- `public BlockPos getBlockRandomPos(int p_46497_,  int p_46498_,  int p_46499_,  int p_46500_)`
- `public boolean noSave()`
- `public ProfilerFiller getProfiler()`
- `public Supplier<ProfilerFiller> getProfilerSupplier()`
- `public BiomeManager getBiomeManager()`
- `public double getMaxEntityRadius()`
  Description copied from interface: IForgeLevel
  The maximum radius to scan for entities when trying to check bounding boxes. Vanilla's default is
   2.0D But mods that add larger entities may increase this.
- `public double increaseMaxEntityRadius(double value)`
  Description copied from interface: IForgeLevel
  Increases the max entity radius, this is safe to call with any value.
   The setter will verify the input value is larger then the current setting.
  - param: value - New max radius to set.
  - returns: The new max radius
- `public final boolean isDebug()`
- `protected abstract LevelEntityGetter<Entity> getEntities()`
- `public long nextSubTickCount()`
- `public RegistryAccess registryAccess()`
- `public DamageSources damageSources()`

### Inherited methods
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.world.level.BlockAndTintGetter`: `canSeeSky`, `getBrightness`, `getRawBrightness`, `getShade`
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockStates`, `getLightEmission`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraft.world.level.CollisionGetter`: `collidesWithSuffocatingBlock`, `findFreePosition`, `findSupportingBlock`, `getBlockCollisions`, `getCollisions`, `getEntityCollisions`, `isUnobstructed`, `isUnobstructed`, `isUnobstructed`, `noBlockCollision`, `noCollision`, `noCollision`, `noCollision`
- from `net.minecraft.world.level.CommonLevelAccessor`: `getBlockEntity`, `getEntityCollisions`, `getHeightmapPos`, `isUnobstructed`
- from `net.minecraft.world.level.EntityGetter`: `getEntities`, `getEntitiesOfClass`, `getEntitiesOfClass`, `getNearbyEntities`, `getNearbyPlayers`, `getNearestEntity`, `getNearestEntity`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getPlayerByUUID`, `hasNearbyAlivePlayer`, `players`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.client.extensions.IForgeBlockAndTintGetter`: `getShade`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraftforge.common.extensions.IForgeLevel`: `getPartEntities`
- from `net.minecraft.world.level.LevelAccessor`: `blockUpdated`, `dayTime`, `gameEvent`, `gameEvent`, `gameEvent`, `gameEvent`, `getBlockTicks`, `getChunkSource`, `getDifficulty`, `getFluidTicks`, `hasChunk`, `levelEvent`, `levelEvent`, `playSound`, `scheduleTick`, `scheduleTick`, `scheduleTick`, `scheduleTick`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getMaxBuildHeight`, `getMaxSection`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`
- from `net.minecraft.world.level.LevelReader`: `canSeeSkyFromBelowWater`, `containsAnyLiquid`, `enabledFeatures`, `getBiome`, `getBlockStatesIfLoaded`, `getBlockTint`, `getChunk`, `getChunk`, `getHeight`, `getLightLevelDependentMagicValue`, `getMaxLocalRawBrightness`, `getMaxLocalRawBrightness`, `getMinBuildHeight`, `getNoiseBiome`, `getPathfindingCostFromLightLevels`, `getUncachedNoiseBiome`, `hasChunkAt`, `hasChunkAt`, `hasChunksAt`, `hasChunksAt`, `hasChunksAt`, `holderLookup`, `isAreaLoaded`, `isEmptyBlock`, `isWaterAt`
- from `net.minecraft.world.level.LevelTimeAccess`: `getMoonBrightness`, `getMoonPhase`, `getTimeOfDay`
- from `net.minecraft.world.level.LevelWriter`: `addFreshEntity`, `destroyBlock`, `destroyBlock`
- from `net.minecraft.world.level.SignalGetter`: `getBestNeighborSignal`, `getControlInputSignal`, `getDirectSignal`, `getDirectSignalTo`, `getSignal`, `hasNeighborSignal`, `hasSignal`

## LevelAccessor

*interface* `net.minecraft.world.level.LevelAccessor`

All Superinterfaces: BiomeManager.NoiseBiomeSource, BlockAndTintGetter, BlockGetter, CollisionGetter, CommonLevelAccessor, EntityGetter, IForgeBlockAndTintGetter, IForgeBlockGetter, LevelHeightAccessor, LevelReader, LevelSimulatedReader, LevelSimulatedRW, LevelTimeAccess, LevelWriter, SignalGetter

### Inherited fields
- from `net.minecraft.world.level.SignalGetter`: `DIRECTIONS`

### Methods
- `default long dayTime()`
- `long nextSubTickCount()`
- `LevelTickAccess<Block> getBlockTicks()`
- `private <T> ScheduledTick<T> createTick(BlockPos p_186483_,  T p_186484_,  int p_186485_,  TickPriority p_186486_)`
- `private <T> ScheduledTick<T> createTick(BlockPos p_186479_,  T p_186480_,  int p_186481_)`
- `default void scheduleTick(BlockPos p_186465_,  Block p_186466_,  int p_186467_,  TickPriority p_186468_)`
- `default void scheduleTick(BlockPos p_186461_,  Block p_186462_,  int p_186463_)`
- `LevelTickAccess<Fluid> getFluidTicks()`
- `default void scheduleTick(BlockPos p_186474_,  Fluid p_186475_,  int p_186476_,  TickPriority p_186477_)`
- `default void scheduleTick(BlockPos p_186470_,  Fluid p_186471_,  int p_186472_)`
- `LevelData getLevelData()`
- `DifficultyInstance getCurrentDifficultyAt(BlockPos p_46800_)`
- `@Nullable MinecraftServer getServer()`
- `default Difficulty getDifficulty()`
- `ChunkSource getChunkSource()`
- `default boolean hasChunk(int p_46794_,  int p_46795_)`
- `RandomSource getRandom()`
- `default void blockUpdated(BlockPos p_46781_,  Block p_46782_)`
- `default void neighborShapeChanged(Direction p_220411_,  BlockState p_220412_,  BlockPos p_220413_,  BlockPos p_220414_,  int p_220415_,  int p_220416_)`
- `default void playSound(@Nullable  Player p_251195_,  BlockPos p_250192_,  SoundEvent p_249887_,  SoundSource p_250593_)`
- `void playSound(@Nullable  Player p_46775_,  BlockPos p_46776_,  SoundEvent p_46777_,  SoundSource p_46778_,  float p_46779_,  float p_46780_)`
- `void addParticle(ParticleOptions p_46783_,  double p_46784_,  double p_46785_,  double p_46786_,  double p_46787_,  double p_46788_,  double p_46789_)`
- `void levelEvent(@Nullable  Player p_46771_,  int p_46772_,  BlockPos p_46773_,  int p_46774_)`
- `default void levelEvent(int p_46797_,  BlockPos p_46798_,  int p_46799_)`
- `void gameEvent(GameEvent p_220404_,  Vec3 p_220405_,  GameEvent.Context p_220406_)`
- `default void gameEvent(@Nullable  Entity p_220401_,  GameEvent p_220402_,  Vec3 p_220403_)`
- `default void gameEvent(@Nullable  Entity p_151549_,  GameEvent p_151550_,  BlockPos p_151551_)`
- `default void gameEvent(GameEvent p_220408_,  BlockPos p_220409_,  GameEvent.Context p_220410_)`

### Inherited methods
- from `net.minecraft.world.level.BlockAndTintGetter`: `canSeeSky`, `getBrightness`, `getLightEngine`, `getRawBrightness`, `getShade`
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockEntity`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockState`, `getBlockStates`, `getFluidState`, `getLightEmission`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraft.world.level.CollisionGetter`: `collidesWithSuffocatingBlock`, `findFreePosition`, `findSupportingBlock`, `getBlockCollisions`, `getCollisions`, `getEntityCollisions`, `getWorldBorder`, `isUnobstructed`, `isUnobstructed`, `isUnobstructed`, `noBlockCollision`, `noCollision`, `noCollision`, `noCollision`
- from `net.minecraft.world.level.CommonLevelAccessor`: `getBlockEntity`, `getEntityCollisions`, `getHeightmapPos`, `isUnobstructed`
- from `net.minecraft.world.level.EntityGetter`: `getEntities`, `getEntities`, `getEntities`, `getEntitiesOfClass`, `getEntitiesOfClass`, `getNearbyEntities`, `getNearbyPlayers`, `getNearestEntity`, `getNearestEntity`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getPlayerByUUID`, `hasNearbyAlivePlayer`, `players`
- from `net.minecraftforge.client.extensions.IForgeBlockAndTintGetter`: `getShade`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getMaxBuildHeight`, `getMaxSection`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`
- from `net.minecraft.world.level.LevelReader`: `canSeeSkyFromBelowWater`, `containsAnyLiquid`, `dimensionType`, `enabledFeatures`, `getBiome`, `getBiomeManager`, `getBlockStatesIfLoaded`, `getBlockTint`, `getChunk`, `getChunk`, `getChunk`, `getChunk`, `getChunkForCollisions`, `getHeight`, `getHeight`, `getLightLevelDependentMagicValue`, `getMaxLocalRawBrightness`, `getMaxLocalRawBrightness`, `getMinBuildHeight`, `getNoiseBiome`, `getPathfindingCostFromLightLevels`, `getSeaLevel`, `getSkyDarken`, `getUncachedNoiseBiome`, `hasChunkAt`, `hasChunkAt`, `hasChunksAt`, `hasChunksAt`, `hasChunksAt`, `holderLookup`, `isAreaLoaded`, `isClientSide`, `isEmptyBlock`, `isWaterAt`, `registryAccess`
- from `net.minecraft.world.level.LevelSimulatedReader`: `isFluidAtPosition`, `isStateAtPosition`
- from `net.minecraft.world.level.LevelTimeAccess`: `getMoonBrightness`, `getMoonPhase`, `getTimeOfDay`
- from `net.minecraft.world.level.LevelWriter`: `addFreshEntity`, `destroyBlock`, `destroyBlock`, `destroyBlock`, `removeBlock`, `setBlock`, `setBlock`
- from `net.minecraft.world.level.SignalGetter`: `getBestNeighborSignal`, `getControlInputSignal`, `getDirectSignal`, `getDirectSignalTo`, `getSignal`, `hasNeighborSignal`, `hasSignal`

## LevelHeightAccessor

*interface* `net.minecraft.world.level.LevelHeightAccessor`

### Methods
- `int getHeight()`
- `int getMinBuildHeight()`
- `default int getMaxBuildHeight()`
- `default int getSectionsCount()`
- `default int getMinSection()`
- `default int getMaxSection()`
- `default boolean isOutsideBuildHeight(BlockPos p_151571_)`
- `default boolean isOutsideBuildHeight(int p_151563_)`
- `default int getSectionIndex(int p_151565_)`
- `default int getSectionIndexFromSectionY(int p_151567_)`
- `default int getSectionYFromSectionIndex(int p_151569_)`
- `static LevelHeightAccessor create(int p_186488_,  int p_186489_)`

## LevelReader

*interface* `net.minecraft.world.level.LevelReader`

All Superinterfaces: BiomeManager.NoiseBiomeSource, BlockAndTintGetter, BlockGetter, CollisionGetter, IForgeBlockAndTintGetter, IForgeBlockGetter, LevelHeightAccessor, SignalGetter

### Inherited fields
- from `net.minecraft.world.level.SignalGetter`: `DIRECTIONS`

### Methods
- `@Nullable ChunkAccess getChunk(int p_46823_,  int p_46824_,  ChunkStatus p_46825_,  boolean p_46826_)`
- `@Deprecated boolean hasChunk(int p_46838_,  int p_46839_)` (deprecated)
- `int getHeight(Heightmap.Types p_46827_,  int p_46828_,  int p_46829_)`
- `int getSkyDarken()`
- `BiomeManager getBiomeManager()`
- `default Holder<Biome> getBiome(BlockPos p_204167_)`
- `default Stream<BlockState> getBlockStatesIfLoaded(AABB p_46848_)`
- `default int getBlockTint(BlockPos p_46836_,  ColorResolver p_46837_)`
- `default Holder<Biome> getNoiseBiome(int p_204163_,  int p_204164_,  int p_204165_)`
- `Holder<Biome> getUncachedNoiseBiome(int p_204159_,  int p_204160_,  int p_204161_)`
- `boolean isClientSide()`
- `@Deprecated int getSeaLevel()` (deprecated)
- `DimensionType dimensionType()`
- `default int getMinBuildHeight()`
- `default int getHeight()`
- `default BlockPos getHeightmapPos(Heightmap.Types p_46830_,  BlockPos p_46831_)`
- `default boolean isEmptyBlock(BlockPos p_46860_)`
- `default boolean canSeeSkyFromBelowWater(BlockPos p_46862_)`
- `default float getPathfindingCostFromLightLevels(BlockPos p_220420_)`
- `@Deprecated default float getLightLevelDependentMagicValue(BlockPos p_220418_)` (deprecated)
- `default ChunkAccess getChunk(BlockPos p_46866_)`
- `default ChunkAccess getChunk(int p_46807_,  int p_46808_)`
- `default ChunkAccess getChunk(int p_46820_,  int p_46821_,  ChunkStatus p_46822_)`
- `@Nullable default BlockGetter getChunkForCollisions(int p_46845_,  int p_46846_)`
- `default boolean isWaterAt(BlockPos p_46802_)`
- `default boolean containsAnyLiquid(AABB p_46856_)`
- `default int getMaxLocalRawBrightness(BlockPos p_46804_)`
- `default int getMaxLocalRawBrightness(BlockPos p_46850_,  int p_46851_)`
- `@Deprecated default boolean hasChunkAt(int p_151578_,  int p_151579_)` (deprecated)
- `@Deprecated default boolean hasChunkAt(BlockPos p_46806_)` (deprecated)
- `default boolean isAreaLoaded(BlockPos center,  int range)` (deprecated)
- `@Deprecated default boolean hasChunksAt(BlockPos p_46833_,  BlockPos p_46834_)` (deprecated)
- `@Deprecated default boolean hasChunksAt(int p_46813_,  int p_46814_,  int p_46815_,  int p_46816_,  int p_46817_,  int p_46818_)` (deprecated)
- `@Deprecated default boolean hasChunksAt(int p_151573_,  int p_151574_,  int p_151575_,  int p_151576_)` (deprecated)
- `RegistryAccess registryAccess()`
- `FeatureFlagSet enabledFeatures()`
- `default <T> HolderLookup<T> holderLookup(ResourceKey<? extends Registry<? extends T>> p_249578_)`

### Inherited methods
- from `net.minecraft.world.level.BlockAndTintGetter`: `canSeeSky`, `getBrightness`, `getLightEngine`, `getRawBrightness`, `getShade`
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockEntity`, `getBlockEntity`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockState`, `getBlockStates`, `getFluidState`, `getLightEmission`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraft.world.level.CollisionGetter`: `collidesWithSuffocatingBlock`, `findFreePosition`, `findSupportingBlock`, `getBlockCollisions`, `getCollisions`, `getEntityCollisions`, `getWorldBorder`, `isUnobstructed`, `isUnobstructed`, `isUnobstructed`, `noBlockCollision`, `noCollision`, `noCollision`, `noCollision`
- from `net.minecraftforge.client.extensions.IForgeBlockAndTintGetter`: `getShade`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getMaxBuildHeight`, `getMaxSection`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`
- from `net.minecraft.world.level.SignalGetter`: `getBestNeighborSignal`, `getControlInputSignal`, `getDirectSignal`, `getDirectSignalTo`, `getSignal`, `hasNeighborSignal`, `hasSignal`

## LevelSettings

*class* `net.minecraft.world.level.LevelSettings`

### Fields
- `private final String levelName`
- `private final GameType gameType`
- `private final boolean hardcore`
- `private final Difficulty difficulty`
- `private final boolean allowCommands`
- `private final GameRules gameRules`
- `private final WorldDataConfiguration dataConfiguration`
- `private final com.mojang.serialization.Lifecycle lifecycle`

### Methods
- `public static LevelSettings parse(com.mojang.serialization.Dynamic<?> p_46925_,  WorldDataConfiguration p_251697_)`
- `public String levelName()`
- `public GameType gameType()`
- `public boolean hardcore()`
- `public Difficulty difficulty()`
- `public boolean allowCommands()`
- `public GameRules gameRules()`
- `public WorldDataConfiguration getDataConfiguration()`
- `public LevelSettings withGameType(GameType p_46923_)`
- `public LevelSettings withDifficulty(Difficulty p_46919_)`
- `public LevelSettings withDataConfiguration(WorldDataConfiguration p_250867_)`
- `public LevelSettings copy()`
- `public LevelSettings withLifecycle(com.mojang.serialization.Lifecycle lifecycle)`
- `public com.mojang.serialization.Lifecycle getLifecycle()`

## LevelSimulatedReader

*interface* `net.minecraft.world.level.LevelSimulatedReader`

### Methods
- `boolean isStateAtPosition(BlockPos p_46938_,  Predicate<BlockState> p_46939_)`
- `boolean isFluidAtPosition(BlockPos p_151584_,  Predicate<FluidState> p_151585_)`
- `<T extends BlockEntity> Optional<T> getBlockEntity(BlockPos p_151582_,  BlockEntityType<T> p_151583_)`
- `BlockPos getHeightmapPos(Heightmap.Types p_46936_,  BlockPos p_46937_)`

## LevelSimulatedRW

*interface* `net.minecraft.world.level.LevelSimulatedRW`

All Superinterfaces: LevelSimulatedReader, LevelWriter

### Inherited methods
- from `net.minecraft.world.level.LevelSimulatedReader`: `getBlockEntity`, `getHeightmapPos`, `isFluidAtPosition`, `isStateAtPosition`
- from `net.minecraft.world.level.LevelWriter`: `addFreshEntity`, `destroyBlock`, `destroyBlock`, `destroyBlock`, `removeBlock`, `setBlock`, `setBlock`

## LevelTimeAccess

*interface* `net.minecraft.world.level.LevelTimeAccess`

All Superinterfaces: BiomeManager.NoiseBiomeSource, BlockAndTintGetter, BlockGetter, CollisionGetter, IForgeBlockAndTintGetter, IForgeBlockGetter, LevelHeightAccessor, LevelReader, SignalGetter

### Inherited fields
- from `net.minecraft.world.level.SignalGetter`: `DIRECTIONS`

### Methods
- `long dayTime()`
- `default float getMoonBrightness()`
- `default float getTimeOfDay(float p_46943_)`
- `default int getMoonPhase()`

### Inherited methods
- from `net.minecraft.world.level.BlockAndTintGetter`: `canSeeSky`, `getBrightness`, `getLightEngine`, `getRawBrightness`, `getShade`
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockEntity`, `getBlockEntity`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockState`, `getBlockStates`, `getFluidState`, `getLightEmission`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraft.world.level.CollisionGetter`: `collidesWithSuffocatingBlock`, `findFreePosition`, `findSupportingBlock`, `getBlockCollisions`, `getCollisions`, `getEntityCollisions`, `getWorldBorder`, `isUnobstructed`, `isUnobstructed`, `isUnobstructed`, `noBlockCollision`, `noCollision`, `noCollision`, `noCollision`
- from `net.minecraftforge.client.extensions.IForgeBlockAndTintGetter`: `getShade`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getMaxBuildHeight`, `getMaxSection`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`
- from `net.minecraft.world.level.LevelReader`: `canSeeSkyFromBelowWater`, `containsAnyLiquid`, `dimensionType`, `enabledFeatures`, `getBiome`, `getBiomeManager`, `getBlockStatesIfLoaded`, `getBlockTint`, `getChunk`, `getChunk`, `getChunk`, `getChunk`, `getChunkForCollisions`, `getHeight`, `getHeight`, `getHeightmapPos`, `getLightLevelDependentMagicValue`, `getMaxLocalRawBrightness`, `getMaxLocalRawBrightness`, `getMinBuildHeight`, `getNoiseBiome`, `getPathfindingCostFromLightLevels`, `getSeaLevel`, `getSkyDarken`, `getUncachedNoiseBiome`, `hasChunk`, `hasChunkAt`, `hasChunkAt`, `hasChunksAt`, `hasChunksAt`, `hasChunksAt`, `holderLookup`, `isAreaLoaded`, `isClientSide`, `isEmptyBlock`, `isWaterAt`, `registryAccess`
- from `net.minecraft.world.level.SignalGetter`: `getBestNeighborSignal`, `getControlInputSignal`, `getDirectSignal`, `getDirectSignalTo`, `getSignal`, `hasNeighborSignal`, `hasSignal`

## LevelWriter

*interface* `net.minecraft.world.level.LevelWriter`

### Methods
- `boolean setBlock(BlockPos p_46947_,  BlockState p_46948_,  int p_46949_,  int p_46950_)`
- `default boolean setBlock(BlockPos p_46944_,  BlockState p_46945_,  int p_46946_)`
- `boolean removeBlock(BlockPos p_46951_,  boolean p_46952_)`
- `default boolean destroyBlock(BlockPos p_46962_,  boolean p_46963_)`
- `default boolean destroyBlock(BlockPos p_46954_,  boolean p_46955_,  @Nullable  Entity p_46956_)`
- `boolean destroyBlock(BlockPos p_46957_,  boolean p_46958_,  @Nullable  Entity p_46959_,  int p_46960_)`
- `default boolean addFreshEntity(Entity p_46964_)`

## LocalMobCapCalculator

*class* `net.minecraft.world.level.LocalMobCapCalculator`

### Fields
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectMap<List<ServerPlayer>> playersNearChunk`
- `private final Map<ServerPlayer,LocalMobCapCalculator.MobCounts> playerMobCounts`
- `private final ChunkMap chunkMap`

### Methods
- `private List<ServerPlayer> getPlayersNear(ChunkPos p_186508_)`
- `public void addMob(ChunkPos p_186513_,  MobCategory p_186514_)`
- `public boolean canSpawn(MobCategory p_186505_,  ChunkPos p_186506_)`

## LocalMobCapCalculator.MobCounts

*class* `net.minecraft.world.level.LocalMobCapCalculator.MobCounts`

Enclosing class: LocalMobCapCalculator

### Fields
- `private final it.unimi.dsi.fastutil.objects.Object2IntMap<MobCategory> counts`

### Methods
- `public void add(MobCategory p_186518_)`
- `public boolean canSpawn(MobCategory p_186523_)`

## NaturalSpawner

*class* `net.minecraft.world.level.NaturalSpawner`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int MIN_SPAWN_DISTANCE` (= 24)
- `public static final int SPAWN_DISTANCE_CHUNK` (= 8)
- `public static final int SPAWN_DISTANCE_BLOCK` (= 128)
- `static final int MAGIC_NUMBER`
- `private static final MobCategory[] SPAWNING_CATEGORIES`

### Methods
- `public static NaturalSpawner.SpawnState createState(int p_186525_,  Iterable<Entity> p_186526_,  NaturalSpawner.ChunkGetter p_186527_,  LocalMobCapCalculator p_186528_)`
- `static Biome getRoughBiome(BlockPos p_47096_,  ChunkAccess p_47097_)`
- `public static void spawnForChunk(ServerLevel p_47030_,  LevelChunk p_47031_,  NaturalSpawner.SpawnState p_47032_,  boolean p_47033_,  boolean p_47034_,  boolean p_47035_)`
- `public static void spawnCategoryForChunk(MobCategory p_47046_,  ServerLevel p_47047_,  LevelChunk p_47048_,  NaturalSpawner.SpawnPredicate p_47049_,  NaturalSpawner.AfterSpawnCallback p_47050_)`
- `public static void spawnCategoryForPosition(MobCategory p_151613_,  ServerLevel p_151614_,  BlockPos p_151615_)`
- `public static void spawnCategoryForPosition(MobCategory p_47039_,  ServerLevel p_47040_,  ChunkAccess p_47041_,  BlockPos p_47042_,  NaturalSpawner.SpawnPredicate p_47043_,  NaturalSpawner.AfterSpawnCallback p_47044_)`
- `private static boolean isRightDistanceToPlayerAndSpawnPoint(ServerLevel p_47025_,  ChunkAccess p_47026_,  BlockPos.MutableBlockPos p_47027_,  double p_47028_)`
- `private static boolean isValidSpawnPostitionForType(ServerLevel p_220422_,  MobCategory p_220423_,  StructureManager p_220424_,  ChunkGenerator p_220425_,  MobSpawnSettings.SpawnerData p_220426_,  BlockPos.MutableBlockPos p_220427_,  double p_220428_)`
- `@Nullable private static Mob getMobForSpawn(ServerLevel p_46989_,  EntityType<?> p_46990_)`
- `private static boolean isValidPositionForMob(ServerLevel p_46992_,  Mob p_46993_,  double p_46994_)`
- `private static Optional<MobSpawnSettings.SpawnerData> getRandomSpawnMobAt(ServerLevel p_220430_,  StructureManager p_220431_,  ChunkGenerator p_220432_,  MobCategory p_220433_,  RandomSource p_220434_,  BlockPos p_220435_)`
- `private static boolean canSpawnMobAt(ServerLevel p_220437_,  StructureManager p_220438_,  ChunkGenerator p_220439_,  MobCategory p_220440_,  MobSpawnSettings.SpawnerData p_220441_,  BlockPos p_220442_)`
- `private static WeightedRandomList<MobSpawnSettings.SpawnerData> mobsAt(ServerLevel p_220444_,  StructureManager p_220445_,  ChunkGenerator p_220446_,  MobCategory p_220447_,  BlockPos p_220448_,  @Nullable  Holder<Biome> p_220449_)`
- `public static boolean isInNetherFortressBounds(BlockPos p_220456_,  ServerLevel p_220457_,  MobCategory p_220458_,  StructureManager p_220459_)`
- `private static BlockPos getRandomPosWithin(Level p_47063_,  LevelChunk p_47064_)`
- `public static boolean isValidEmptySpawnBlock(BlockGetter p_47057_,  BlockPos p_47058_,  BlockState p_47059_,  FluidState p_47060_,  EntityType<?> p_47061_)`
- `public static boolean isSpawnPositionOk(SpawnPlacements.Type p_47052_,  LevelReader p_47053_,  BlockPos p_47054_,  @Nullable  EntityType<?> p_47055_)`
- `public static boolean canSpawnAtBody(SpawnPlacements.Type p_47052_,  LevelReader p_47053_,  BlockPos p_47054_,  @Nullable  EntityType<?> p_47055_)`
- `public static void spawnMobsForChunkGeneration(ServerLevelAccessor p_220451_,  Holder<Biome> p_220452_,  ChunkPos p_220453_,  RandomSource p_220454_)`
- `private static BlockPos getTopNonCollidingPos(LevelReader p_47066_,  EntityType<?> p_47067_,  int p_47068_,  int p_47069_)`

## NaturalSpawner.AfterSpawnCallback

*interface* `net.minecraft.world.level.NaturalSpawner.AfterSpawnCallback`

Enclosing class: NaturalSpawner

### Methods
- `void run(Mob p_47101_,  ChunkAccess p_47102_)`

## NaturalSpawner.ChunkGetter

*interface* `net.minecraft.world.level.NaturalSpawner.ChunkGetter`

Enclosing class: NaturalSpawner

### Methods
- `void query(long p_47104_,  Consumer<LevelChunk> p_47105_)`

## NaturalSpawner.SpawnPredicate

*interface* `net.minecraft.world.level.NaturalSpawner.SpawnPredicate`

Enclosing class: NaturalSpawner

### Methods
- `boolean test(EntityType<?> p_47107_,  BlockPos p_47108_,  ChunkAccess p_47109_)`

## NaturalSpawner.SpawnState

*class* `net.minecraft.world.level.NaturalSpawner.SpawnState`

Enclosing class: NaturalSpawner

### Fields
- `private final int spawnableChunkCount`
- `private final it.unimi.dsi.fastutil.objects.Object2IntOpenHashMap<MobCategory> mobCategoryCounts`
- `private final PotentialCalculator spawnPotential`
- `private final it.unimi.dsi.fastutil.objects.Object2IntMap<MobCategory> unmodifiableMobCategoryCounts`
- `private final LocalMobCapCalculator localMobCapCalculator`
- `@Nullable private BlockPos lastCheckedPos`
- `@Nullable private EntityType<?> lastCheckedType`
- `private double lastCharge`

### Methods
- `private boolean canSpawn(EntityType<?> p_47128_,  BlockPos p_47129_,  ChunkAccess p_47130_)`
- `private void afterSpawn(Mob p_47132_,  ChunkAccess p_47133_)`
- `public int getSpawnableChunkCount()`
- `public it.unimi.dsi.fastutil.objects.Object2IntMap<MobCategory> getMobCategoryCounts()`
- `boolean canSpawnForCategory(MobCategory p_186549_,  ChunkPos p_186550_)`

## NoiseColumn

*class* `net.minecraft.world.level.NoiseColumn`

### Fields
- `private final int minY`
- `private final BlockState[] column`

### Methods
- `public BlockState getBlock(int p_186552_)`
- `public void setBlock(int p_186554_,  BlockState p_186555_)`

## PathNavigationRegion

*class* `net.minecraft.world.level.PathNavigationRegion`

### Fields
- `protected final int centerX`
- `protected final int centerZ`
- `protected final ChunkAccess[][] chunks`
- `protected boolean allEmpty`
- `protected final Level level`
- `private final Supplier<Holder<Biome>> plains`

### Methods
- `private ChunkAccess getChunk(BlockPos p_47186_)`
- `private ChunkAccess getChunk(int p_47168_,  int p_47169_)`
- `public WorldBorder getWorldBorder()`
- `public BlockGetter getChunkForCollisions(int p_47173_,  int p_47174_)`
- `public List<VoxelShape> getEntityCollisions(@Nullable  Entity p_186557_,  AABB p_186558_)`
- `@Nullable public BlockEntity getBlockEntity(BlockPos p_47180_)`
- `public BlockState getBlockState(BlockPos p_47188_)`
- `public FluidState getFluidState(BlockPos p_47171_)`
- `public int getMinBuildHeight()`
- `public int getHeight()`
- `public ProfilerFiller getProfiler()`

### Inherited methods
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockEntity`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockStates`, `getLightEmission`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraft.world.level.CollisionGetter`: `collidesWithSuffocatingBlock`, `findFreePosition`, `findSupportingBlock`, `getBlockCollisions`, `getCollisions`, `isUnobstructed`, `isUnobstructed`, `isUnobstructed`, `noBlockCollision`, `noCollision`, `noCollision`, `noCollision`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getMaxBuildHeight`, `getMaxSection`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`

## PotentialCalculator

*class* `net.minecraft.world.level.PotentialCalculator`

### Fields
- `private final List<PotentialCalculator.PointCharge> charges`

### Methods
- `public void addCharge(BlockPos p_47193_,  double p_47194_)`
- `public double getPotentialEnergyChange(BlockPos p_47196_,  double p_47197_)`

## PotentialCalculator.PointCharge

*class* `net.minecraft.world.level.PotentialCalculator.PointCharge`

Enclosing class: PotentialCalculator

### Fields
- `private final BlockPos pos`
- `private final double charge`

### Methods
- `public double getPotentialChange(BlockPos p_47204_)`

## ServerLevelAccessor

*interface* `net.minecraft.world.level.ServerLevelAccessor`

All Superinterfaces: BiomeManager.NoiseBiomeSource, BlockAndTintGetter, BlockGetter, CollisionGetter, CommonLevelAccessor, EntityGetter, IForgeBlockAndTintGetter, IForgeBlockGetter, LevelAccessor, LevelHeightAccessor, LevelReader, LevelSimulatedReader, LevelSimulatedRW, LevelTimeAccess, LevelWriter, SignalGetter

### Inherited fields
- from `net.minecraft.world.level.SignalGetter`: `DIRECTIONS`

### Methods
- `ServerLevel getLevel()`
- `default void addFreshEntityWithPassengers(Entity p_47206_)`

### Inherited methods
- from `net.minecraft.world.level.BlockAndTintGetter`: `canSeeSky`, `getBrightness`, `getLightEngine`, `getRawBrightness`, `getShade`
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockEntity`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockState`, `getBlockStates`, `getFluidState`, `getLightEmission`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraft.world.level.CollisionGetter`: `collidesWithSuffocatingBlock`, `findFreePosition`, `findSupportingBlock`, `getBlockCollisions`, `getCollisions`, `getEntityCollisions`, `getWorldBorder`, `isUnobstructed`, `isUnobstructed`, `isUnobstructed`, `noBlockCollision`, `noCollision`, `noCollision`, `noCollision`
- from `net.minecraft.world.level.CommonLevelAccessor`: `getBlockEntity`, `getEntityCollisions`, `getHeightmapPos`, `isUnobstructed`
- from `net.minecraft.world.level.EntityGetter`: `getEntities`, `getEntities`, `getEntities`, `getEntitiesOfClass`, `getEntitiesOfClass`, `getNearbyEntities`, `getNearbyPlayers`, `getNearestEntity`, `getNearestEntity`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getPlayerByUUID`, `hasNearbyAlivePlayer`, `players`
- from `net.minecraftforge.client.extensions.IForgeBlockAndTintGetter`: `getShade`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraft.world.level.LevelAccessor`: `addParticle`, `blockUpdated`, `dayTime`, `gameEvent`, `gameEvent`, `gameEvent`, `gameEvent`, `getBlockTicks`, `getChunkSource`, `getCurrentDifficultyAt`, `getDifficulty`, `getFluidTicks`, `getLevelData`, `getRandom`, `getServer`, `hasChunk`, `levelEvent`, `levelEvent`, `neighborShapeChanged`, `nextSubTickCount`, `playSound`, `playSound`, `scheduleTick`, `scheduleTick`, `scheduleTick`, `scheduleTick`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getMaxBuildHeight`, `getMaxSection`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`
- from `net.minecraft.world.level.LevelReader`: `canSeeSkyFromBelowWater`, `containsAnyLiquid`, `dimensionType`, `enabledFeatures`, `getBiome`, `getBiomeManager`, `getBlockStatesIfLoaded`, `getBlockTint`, `getChunk`, `getChunk`, `getChunk`, `getChunk`, `getChunkForCollisions`, `getHeight`, `getHeight`, `getLightLevelDependentMagicValue`, `getMaxLocalRawBrightness`, `getMaxLocalRawBrightness`, `getMinBuildHeight`, `getNoiseBiome`, `getPathfindingCostFromLightLevels`, `getSeaLevel`, `getSkyDarken`, `getUncachedNoiseBiome`, `hasChunkAt`, `hasChunkAt`, `hasChunksAt`, `hasChunksAt`, `hasChunksAt`, `holderLookup`, `isAreaLoaded`, `isClientSide`, `isEmptyBlock`, `isWaterAt`, `registryAccess`
- from `net.minecraft.world.level.LevelSimulatedReader`: `isFluidAtPosition`, `isStateAtPosition`
- from `net.minecraft.world.level.LevelTimeAccess`: `getMoonBrightness`, `getMoonPhase`, `getTimeOfDay`
- from `net.minecraft.world.level.LevelWriter`: `addFreshEntity`, `destroyBlock`, `destroyBlock`, `destroyBlock`, `removeBlock`, `setBlock`, `setBlock`
- from `net.minecraft.world.level.SignalGetter`: `getBestNeighborSignal`, `getControlInputSignal`, `getDirectSignal`, `getDirectSignalTo`, `getSignal`, `hasNeighborSignal`, `hasSignal`

## SignalGetter

*interface* `net.minecraft.world.level.SignalGetter`

All Superinterfaces: BlockGetter, IForgeBlockGetter, LevelHeightAccessor

### Fields
- `static final Direction[] DIRECTIONS`

### Methods
- `default int getDirectSignal(BlockPos p_277954_,  Direction p_277342_)`
- `default int getDirectSignalTo(BlockPos p_277959_)`
- `default int getControlInputSignal(BlockPos p_277757_,  Direction p_278104_,  boolean p_277707_)`
- `default boolean hasSignal(BlockPos p_277371_,  Direction p_277391_)`
- `default int getSignal(BlockPos p_277961_,  Direction p_277351_)`
- `default boolean hasNeighborSignal(BlockPos p_277626_)`
- `default int getBestNeighborSignal(BlockPos p_277977_)`

### Inherited methods
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockEntity`, `getBlockEntity`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockState`, `getBlockStates`, `getFluidState`, `getLightEmission`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getHeight`, `getMaxBuildHeight`, `getMaxSection`, `getMinBuildHeight`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`

## SpawnData

*record* `net.minecraft.world.level.SpawnData`

### Fields
- `private final CompoundTag entityToSpawn`
  The field for the entityToSpawn record component.
- `private final Optional<SpawnData.CustomSpawnRules> customSpawnRules`
  The field for the customSpawnRules record component.
- `public static final String ENTITY_TAG` (= "entity")
- `public static final com.mojang.serialization.Codec<SpawnData> CODEC`
- `public static final com.mojang.serialization.Codec<SimpleWeightedRandomList<SpawnData>> LIST_CODEC`

### Methods
- `public CompoundTag getEntityToSpawn()`
- `public Optional<SpawnData.CustomSpawnRules> getCustomSpawnRules()`
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
- `public CompoundTag entityToSpawn()`
  Returns the value of the entityToSpawn record component.
  - returns: the value of the entityToSpawn record component
- `public Optional<SpawnData.CustomSpawnRules> customSpawnRules()`
  Returns the value of the customSpawnRules record component.
  - returns: the value of the customSpawnRules record component

## SpawnData.CustomSpawnRules

*record* `net.minecraft.world.level.SpawnData.CustomSpawnRules`

Enclosing class: SpawnData

### Fields
- `private final InclusiveRange<Integer> blockLightLimit`
  The field for the blockLightLimit record component.
- `private final InclusiveRange<Integer> skyLightLimit`
  The field for the skyLightLimit record component.
- `private static final InclusiveRange<Integer> LIGHT_RANGE`
- `public static final com.mojang.serialization.Codec<SpawnData.CustomSpawnRules> CODEC`

### Methods
- `private static com.mojang.serialization.DataResult<InclusiveRange<Integer>> checkLightBoundaries(InclusiveRange<Integer> p_186593_)`
- `private static com.mojang.serialization.MapCodec<InclusiveRange<Integer>> lightLimit(String p_286409_)`
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
- `public InclusiveRange<Integer> blockLightLimit()`
  Returns the value of the blockLightLimit record component.
  - returns: the value of the blockLightLimit record component
- `public InclusiveRange<Integer> skyLightLimit()`
  Returns the value of the skyLightLimit record component.
  - returns: the value of the skyLightLimit record component

## StructureManager

*class* `net.minecraft.world.level.StructureManager`

### Fields
- `private final LevelAccessor level`
- `private final WorldOptions worldOptions`
- `private final StructureCheck structureCheck`

### Methods
- `public StructureManager forWorldGenRegion(WorldGenRegion p_220469_)`
- `public List<StructureStart> startsForStructure(ChunkPos p_220478_,  Predicate<Structure> p_220479_)`
- `public List<StructureStart> startsForStructure(SectionPos p_220505_,  Structure p_220506_)`
- `public void fillStartsForStructure(Structure p_220481_,  it.unimi.dsi.fastutil.longs.LongSet p_220482_,  Consumer<StructureStart> p_220483_)`
- `@Nullable public StructureStart getStartForStructure(SectionPos p_220513_,  Structure p_220514_,  StructureAccess p_220515_)`
- `public void setStartForStructure(SectionPos p_220517_,  Structure p_220518_,  StructureStart p_220519_,  StructureAccess p_220520_)`
- `public void addReferenceForStructure(SectionPos p_220508_,  Structure p_220509_,  long p_220510_,  StructureAccess p_220511_)`
- `public boolean shouldGenerateStructures()`
- `public StructureStart getStructureAt(BlockPos p_220495_,  Structure p_220496_)`
- `public StructureStart getStructureWithPieceAt(BlockPos p_220489_,  ResourceKey<Structure> p_220490_)`
- `public StructureStart getStructureWithPieceAt(BlockPos p_220492_,  TagKey<Structure> p_220493_)`
- `public StructureStart getStructureWithPieceAt(BlockPos p_220525_,  Structure p_220526_)`
- `public boolean structureHasPieceAt(BlockPos p_220498_,  StructureStart p_220499_)`
- `public boolean hasAnyStructureAt(BlockPos p_220487_)`
- `public Map<Structure,it.unimi.dsi.fastutil.longs.LongSet> getAllStructuresAt(BlockPos p_220523_)`
- `public StructureCheckResult checkStructurePresence(ChunkPos p_220474_,  Structure p_220475_,  boolean p_220476_)`
- `public void addReference(StructureStart p_220485_)`
- `public RegistryAccess registryAccess()`

## WorldDataConfiguration

*record* `net.minecraft.world.level.WorldDataConfiguration`

### Fields
- `private final DataPackConfig dataPacks`
  The field for the dataPacks record component.
- `private final FeatureFlagSet enabledFeatures`
  The field for the enabledFeatures record component.
- `public static final String ENABLED_FEATURES_ID` (= "enabled_features")
- `public static final com.mojang.serialization.Codec<WorldDataConfiguration> CODEC`
- `public static final WorldDataConfiguration DEFAULT`

### Methods
- `public WorldDataConfiguration expandFeatures(FeatureFlagSet p_249090_)`
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
- `public DataPackConfig dataPacks()`
  Returns the value of the dataPacks record component.
  - returns: the value of the dataPacks record component
- `public FeatureFlagSet enabledFeatures()`
  Returns the value of the enabledFeatures record component.
  - returns: the value of the enabledFeatures record component

## WorldGenLevel

*interface* `net.minecraft.world.level.WorldGenLevel`

All Superinterfaces: BiomeManager.NoiseBiomeSource, BlockAndTintGetter, BlockGetter, CollisionGetter, CommonLevelAccessor, EntityGetter, IForgeBlockAndTintGetter, IForgeBlockGetter, LevelAccessor, LevelHeightAccessor, LevelReader, LevelSimulatedReader, LevelSimulatedRW, LevelTimeAccess, LevelWriter, ServerLevelAccessor, SignalGetter

### Inherited fields
- from `net.minecraft.world.level.SignalGetter`: `DIRECTIONS`

### Methods
- `long getSeed()`
- `default boolean ensureCanWrite(BlockPos p_181157_)`
- `default void setCurrentlyGenerating(@Nullable  Supplier<String> p_186618_)`

### Inherited methods
- from `net.minecraft.world.level.BlockAndTintGetter`: `canSeeSky`, `getBrightness`, `getLightEngine`, `getRawBrightness`, `getShade`
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockEntity`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockState`, `getBlockStates`, `getFluidState`, `getLightEmission`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraft.world.level.CollisionGetter`: `collidesWithSuffocatingBlock`, `findFreePosition`, `findSupportingBlock`, `getBlockCollisions`, `getCollisions`, `getEntityCollisions`, `getWorldBorder`, `isUnobstructed`, `isUnobstructed`, `isUnobstructed`, `noBlockCollision`, `noCollision`, `noCollision`, `noCollision`
- from `net.minecraft.world.level.CommonLevelAccessor`: `getBlockEntity`, `getEntityCollisions`, `getHeightmapPos`, `isUnobstructed`
- from `net.minecraft.world.level.EntityGetter`: `getEntities`, `getEntities`, `getEntities`, `getEntitiesOfClass`, `getEntitiesOfClass`, `getNearbyEntities`, `getNearbyPlayers`, `getNearestEntity`, `getNearestEntity`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getPlayerByUUID`, `hasNearbyAlivePlayer`, `players`
- from `net.minecraftforge.client.extensions.IForgeBlockAndTintGetter`: `getShade`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`, `getModelDataManager`
- from `net.minecraft.world.level.LevelAccessor`: `addParticle`, `blockUpdated`, `dayTime`, `gameEvent`, `gameEvent`, `gameEvent`, `gameEvent`, `getBlockTicks`, `getChunkSource`, `getCurrentDifficultyAt`, `getDifficulty`, `getFluidTicks`, `getLevelData`, `getRandom`, `getServer`, `hasChunk`, `levelEvent`, `levelEvent`, `neighborShapeChanged`, `nextSubTickCount`, `playSound`, `playSound`, `scheduleTick`, `scheduleTick`, `scheduleTick`, `scheduleTick`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getMaxBuildHeight`, `getMaxSection`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`
- from `net.minecraft.world.level.LevelReader`: `canSeeSkyFromBelowWater`, `containsAnyLiquid`, `dimensionType`, `enabledFeatures`, `getBiome`, `getBiomeManager`, `getBlockStatesIfLoaded`, `getBlockTint`, `getChunk`, `getChunk`, `getChunk`, `getChunk`, `getChunkForCollisions`, `getHeight`, `getHeight`, `getLightLevelDependentMagicValue`, `getMaxLocalRawBrightness`, `getMaxLocalRawBrightness`, `getMinBuildHeight`, `getNoiseBiome`, `getPathfindingCostFromLightLevels`, `getSeaLevel`, `getSkyDarken`, `getUncachedNoiseBiome`, `hasChunkAt`, `hasChunkAt`, `hasChunksAt`, `hasChunksAt`, `hasChunksAt`, `holderLookup`, `isAreaLoaded`, `isClientSide`, `isEmptyBlock`, `isWaterAt`, `registryAccess`
- from `net.minecraft.world.level.LevelSimulatedReader`: `isFluidAtPosition`, `isStateAtPosition`
- from `net.minecraft.world.level.LevelTimeAccess`: `getMoonBrightness`, `getMoonPhase`, `getTimeOfDay`
- from `net.minecraft.world.level.LevelWriter`: `addFreshEntity`, `destroyBlock`, `destroyBlock`, `destroyBlock`, `removeBlock`, `setBlock`, `setBlock`
- from `net.minecraft.world.level.ServerLevelAccessor`: `addFreshEntityWithPassengers`, `getLevel`
- from `net.minecraft.world.level.SignalGetter`: `getBestNeighborSignal`, `getControlInputSignal`, `getDirectSignal`, `getDirectSignalTo`, `getSignal`, `hasNeighborSignal`, `hasSignal`
