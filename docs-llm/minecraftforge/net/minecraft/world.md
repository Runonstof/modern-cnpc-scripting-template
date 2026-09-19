# net.minecraft.world

- [BossInfo](#bossinfo)
- [BossInfo.Color](#bossinfo.color)
- [BossInfo.Overlay](#bossinfo.overlay)
- [BossInfoServer](#bossinfoserver)
- [ChunkCache](#chunkcache)
- [ColorizerFoliage](#colorizerfoliage)
- [ColorizerGrass](#colorizergrass)
- [DifficultyInstance](#difficultyinstance)
- [DimensionType](#dimensiontype)
- [EnumDifficulty](#enumdifficulty)
- [EnumSkyBlock](#enumskyblock)
- [Explosion](#explosion)
- [GameRules](#gamerules)
- [GameRules.ValueType](#gamerules.valuetype)
- [GameType](#gametype)
- [IBlockAccess](#iblockaccess)
- [IInteractionObject](#iinteractionobject)
- [ILockableContainer](#ilockablecontainer)
- [IWorldEventListener](#iworldeventlistener)
- [IWorldNameable](#iworldnameable)
- [LockCode](#lockcode)
- [MinecraftException](#minecraftexception)
- [NextTickListEntry](#nextticklistentry)
- [ServerWorldEventHandler](#serverworldeventhandler)
- [Teleporter](#teleporter)
- [Teleporter.PortalPosition](#teleporter.portalposition)
- [World](#world)
- [WorldEntitySpawner](#worldentityspawner)
- [WorldProvider](#worldprovider)
- [WorldProvider.WorldSleepResult](#worldprovider.worldsleepresult)
- [WorldProviderEnd](#worldproviderend)
- [WorldProviderHell](#worldproviderhell)
- [WorldProviderSurface](#worldprovidersurface)
- [WorldServer](#worldserver)
- [WorldServerDemo](#worldserverdemo)
- [WorldServerMulti](#worldservermulti)
- [WorldSettings](#worldsettings)
- [WorldType](#worldtype)
## BossInfo

*class* `net.minecraft.world.BossInfo`

### Fields
- `protected ITextComponent name`
- `protected float percent`
- `protected BossInfo.Color color`
- `protected BossInfo.Overlay overlay`
- `protected boolean darkenSky`
- `protected boolean playEndBossMusic`
- `protected boolean createFog`

### Methods
- `public java.util.UUID getUniqueId()`
- `public ITextComponent getName()`
- `public void setName(ITextComponent nameIn)`
- `public float getPercent()`
- `public void setPercent(float percentIn)`
- `public BossInfo.Color getColor()`
- `public void setColor(BossInfo.Color colorIn)`
- `public BossInfo.Overlay getOverlay()`
- `public void setOverlay(BossInfo.Overlay overlayIn)`
- `public boolean shouldDarkenSky()`
- `public BossInfo setDarkenSky(boolean darkenSkyIn)`
- `public boolean shouldPlayEndBossMusic()`
- `public BossInfo setPlayEndBossMusic(boolean playEndBossMusicIn)`
- `public BossInfo setCreateFog(boolean createFogIn)`
- `public boolean shouldCreateFog()`

## BossInfo.Color

*enum* `net.minecraft.world.BossInfo.Color`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<BossInfo.Color>

Enclosing class: BossInfo

### Fields
- `public static final BossInfo.Color PINK`
- `public static final BossInfo.Color BLUE`
- `public static final BossInfo.Color RED`
- `public static final BossInfo.Color GREEN`
- `public static final BossInfo.Color YELLOW`
- `public static final BossInfo.Color PURPLE`
- `public static final BossInfo.Color WHITE`

### Methods
- `public static BossInfo.Color[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (BossInfo.Color c : BossInfo.Color.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static BossInfo.Color valueOf(java.lang.String name)`
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

## BossInfo.Overlay

*enum* `net.minecraft.world.BossInfo.Overlay`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<BossInfo.Overlay>

Enclosing class: BossInfo

### Fields
- `public static final BossInfo.Overlay PROGRESS`
- `public static final BossInfo.Overlay NOTCHED_6`
- `public static final BossInfo.Overlay NOTCHED_10`
- `public static final BossInfo.Overlay NOTCHED_12`
- `public static final BossInfo.Overlay NOTCHED_20`

### Methods
- `public static BossInfo.Overlay[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (BossInfo.Overlay c : BossInfo.Overlay.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static BossInfo.Overlay valueOf(java.lang.String name)`
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

## BossInfoServer

*class* `net.minecraft.world.BossInfoServer`

### Inherited fields
- from `net.minecraft.world.BossInfo`: `color`, `createFog`, `darkenSky`, `name`, `overlay`, `percent`, `playEndBossMusic`

### Methods
- `public void setPercent(float percentIn)`
- `public void setColor(BossInfo.Color colorIn)`
- `public void setOverlay(BossInfo.Overlay overlayIn)`
- `public BossInfo setDarkenSky(boolean darkenSkyIn)`
- `public BossInfo setPlayEndBossMusic(boolean playEndBossMusicIn)`
- `public BossInfo setCreateFog(boolean createFogIn)`
- `public void setName(ITextComponent nameIn)`
- `public void addPlayer(EntityPlayerMP player)`
- `public void removePlayer(EntityPlayerMP player)`
- `public void setVisible(boolean visibleIn)`
- `public java.util.Collection<EntityPlayerMP> getPlayers()`

### Inherited methods
- from `net.minecraft.world.BossInfo`: `getColor`, `getName`, `getOverlay`, `getPercent`, `getUniqueId`, `shouldCreateFog`, `shouldDarkenSky`, `shouldPlayEndBossMusic`

## ChunkCache

*class* `net.minecraft.world.ChunkCache`

All Implemented Interfaces: IBlockAccess

### Fields
- `protected int chunkX`
- `protected int chunkZ`
- `protected Chunk[][] chunkArray`
- `protected boolean empty`
- `protected World world`

### Methods
- `public boolean isEmpty()`
- `public TileEntity getTileEntity(BlockPos pos)`
- `public TileEntity getTileEntity(BlockPos pos,  Chunk.EnumCreateEntityType p_190300_2_)`
- `public int getCombinedLight(BlockPos pos,  int lightValue)`
- `public IBlockState getBlockState(BlockPos pos)`
- `public Biome getBiome(BlockPos pos)`
- `public boolean isAirBlock(BlockPos pos)`
- `public int getLightFor(EnumSkyBlock type,  BlockPos pos)`
- `public int getStrongPower(BlockPos pos,  EnumFacing direction)`
- `public WorldType getWorldType()`
- `public boolean isSideSolid(BlockPos pos,  EnumFacing side,  boolean _default)`
  Description copied from interface: IBlockAccess
  FORGE: isSideSolid, pulled up from World
  - param: pos - Position
  - param: side - Side
  - param: _default - default return value
  - returns: if the block is solid on the side

## ColorizerFoliage

*class* `net.minecraft.world.ColorizerFoliage`

### Methods
- `public static void setFoliageBiomeColorizer(int[] foliageBufferIn)`
- `public static int getFoliageColor(double temperature,  double humidity)`
- `public static int getFoliageColorPine()`
- `public static int getFoliageColorBirch()`
- `public static int getFoliageColorBasic()`

## ColorizerGrass

*class* `net.minecraft.world.ColorizerGrass`

### Methods
- `public static void setGrassBiomeColorizer(int[] grassBufferIn)`
- `public static int getGrassColor(double temperature,  double humidity)`

## DifficultyInstance

*class* `net.minecraft.world.DifficultyInstance`

### Methods
- `public float getAdditionalDifficulty()`
- `public boolean isHarderThan(float p_193845_1_)`
- `public float getClampedAdditionalDifficulty()`

## DimensionType

*enum* `net.minecraft.world.DimensionType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<DimensionType>

### Fields
- `public static final DimensionType OVERWORLD`
- `public static final DimensionType NETHER`
- `public static final DimensionType THE_END`

### Methods
- `public static DimensionType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (DimensionType c : DimensionType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static DimensionType valueOf(java.lang.String name)`
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
- `public java.lang.String getSuffix()`
- `public WorldProvider createDimension()`
- `public static DimensionType getById(int id)`
- `public boolean shouldLoadSpawn()`
- `public DimensionType setLoadSpawn(boolean value)`
- `public static DimensionType register(java.lang.String name,  java.lang.String suffix,  int id,  java.lang.Class<? extends WorldProvider> provider,  boolean keepLoaded)`
- `public static DimensionType byName(java.lang.String p_193417_0_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## EnumDifficulty

*enum* `net.minecraft.world.EnumDifficulty`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumDifficulty>

### Fields
- `public static final EnumDifficulty PEACEFUL`
- `public static final EnumDifficulty EASY`
- `public static final EnumDifficulty NORMAL`
- `public static final EnumDifficulty HARD`

### Methods
- `public static EnumDifficulty[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumDifficulty c : EnumDifficulty.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumDifficulty valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public int getDifficultyId()`
- `public static EnumDifficulty getDifficultyEnum(int id)`
- `public java.lang.String getDifficultyResourceKey()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## EnumSkyBlock

*enum* `net.minecraft.world.EnumSkyBlock`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumSkyBlock>

### Fields
- `public final int defaultLightValue`
- `public static final EnumSkyBlock SKY`
- `public static final EnumSkyBlock BLOCK`

### Methods
- `public static EnumSkyBlock[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumSkyBlock c : EnumSkyBlock.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumSkyBlock valueOf(java.lang.String name)`
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

## Explosion

*class* `net.minecraft.world.Explosion`

### Methods
- `public void doExplosionA()`
- `public void doExplosionB(boolean spawnParticles)`
- `public java.util.Map<EntityPlayer,Vec3d> getPlayerKnockbackMap()`
- `public EntityLivingBase getExplosivePlacedBy()`
- `public void clearAffectedBlockPositions()`
- `public java.util.List<BlockPos> getAffectedBlockPositions()`
- `public Vec3d getPosition()`

## GameRules

*class* `net.minecraft.world.GameRules`

### Methods
- `public void addGameRule(java.lang.String key,  java.lang.String value,  GameRules.ValueType type)`
- `public void setOrCreateGameRule(java.lang.String key,  java.lang.String ruleValue)`
- `public java.lang.String getString(java.lang.String name)`
- `public boolean getBoolean(java.lang.String name)`
- `public int getInt(java.lang.String name)`
- `public NBTTagCompound writeToNBT()`
- `public void readFromNBT(NBTTagCompound nbt)`
- `public java.lang.String[] getRules()`
- `public boolean hasRule(java.lang.String name)`
- `public boolean areSameType(java.lang.String key,  GameRules.ValueType otherValue)`

## GameRules.ValueType

*enum* `net.minecraft.world.GameRules.ValueType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<GameRules.ValueType>

Enclosing class: GameRules

### Fields
- `public static final GameRules.ValueType ANY_VALUE`
- `public static final GameRules.ValueType BOOLEAN_VALUE`
- `public static final GameRules.ValueType NUMERICAL_VALUE`
- `public static final GameRules.ValueType FUNCTION`

### Methods
- `public static GameRules.ValueType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (GameRules.ValueType c : GameRules.ValueType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static GameRules.ValueType valueOf(java.lang.String name)`
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

## GameType

*enum* `net.minecraft.world.GameType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<GameType>

### Fields
- `public static final GameType NOT_SET`
- `public static final GameType SURVIVAL`
- `public static final GameType CREATIVE`
- `public static final GameType ADVENTURE`
- `public static final GameType SPECTATOR`

### Methods
- `public static GameType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (GameType c : GameType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static GameType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public int getID()`
- `public java.lang.String getName()`
- `public void configurePlayerCapabilities(PlayerCapabilities capabilities)`
- `public boolean hasLimitedInteractions()`
- `public boolean isCreative()`
- `public boolean isSurvivalOrAdventure()`
- `public static GameType getByID(int idIn)`
- `public static GameType parseGameTypeWithDefault(int targetId,  GameType fallback)`
- `public static GameType getByName(java.lang.String gamemodeName)`
- `public static GameType parseGameTypeWithDefault(java.lang.String targetName,  GameType fallback)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## IBlockAccess

*interface* `net.minecraft.world.IBlockAccess`

### Methods
- `TileEntity getTileEntity(BlockPos pos)`
- `int getCombinedLight(BlockPos pos,  int lightValue)`
- `IBlockState getBlockState(BlockPos pos)`
- `boolean isAirBlock(BlockPos pos)`
- `Biome getBiome(BlockPos pos)`
- `int getStrongPower(BlockPos pos,  EnumFacing direction)`
- `WorldType getWorldType()`
- `boolean isSideSolid(BlockPos pos,  EnumFacing side,  boolean _default)`
  FORGE: isSideSolid, pulled up from World
  - param: pos - Position
  - param: side - Side
  - param: _default - default return value
  - returns: if the block is solid on the side

## IInteractionObject

*interface* `net.minecraft.world.IInteractionObject`

All Superinterfaces: IWorldNameable

### Methods
- `Container createContainer(InventoryPlayer playerInventory,  EntityPlayer playerIn)`
- `java.lang.String getGuiID()`

### Inherited methods
- from `net.minecraft.world.IWorldNameable`: `getDisplayName`, `getName`, `hasCustomName`

## ILockableContainer

*interface* `net.minecraft.world.ILockableContainer`

All Superinterfaces: IInteractionObject, IInventory, IWorldNameable

### Methods
- `boolean isLocked()`
- `void setLockCode(LockCode code)`
- `LockCode getLockCode()`

### Inherited methods
- from `net.minecraft.inventory.IInventory`: `clear`, `closeInventory`, `decrStackSize`, `getField`, `getFieldCount`, `getInventoryStackLimit`, `getSizeInventory`, `getStackInSlot`, `isEmpty`, `isItemValidForSlot`, `isUsableByPlayer`, `markDirty`, `openInventory`, `removeStackFromSlot`, `setField`, `setInventorySlotContents`
- from `net.minecraft.world.IInteractionObject`: `createContainer`, `getGuiID`
- from `net.minecraft.world.IWorldNameable`: `getDisplayName`, `getName`, `hasCustomName`

## IWorldEventListener

*interface* `net.minecraft.world.IWorldEventListener`

### Methods
- `void notifyBlockUpdate(World worldIn,  BlockPos pos,  IBlockState oldState,  IBlockState newState,  int flags)`
- `void notifyLightSet(BlockPos pos)`
- `void markBlockRangeForRenderUpdate(int x1,  int y1,  int z1,  int x2,  int y2,  int z2)`
- `void playSoundToAllNearExcept(EntityPlayer player,  SoundEvent soundIn,  SoundCategory category,  double x,  double y,  double z,  float volume,  float pitch)`
- `void playRecord(SoundEvent soundIn,  BlockPos pos)`
- `void spawnParticle(int particleID,  boolean ignoreRange,  double xCoord,  double yCoord,  double zCoord,  double xSpeed,  double ySpeed,  double zSpeed,  int... parameters)`
- `void spawnParticle(int id,  boolean ignoreRange,  boolean p_190570_3_,  double x,  double y,  double z,  double xSpeed,  double ySpeed,  double zSpeed,  int... parameters)`
- `void onEntityAdded(Entity entityIn)`
- `void onEntityRemoved(Entity entityIn)`
- `void broadcastSound(int soundID,  BlockPos pos,  int data)`
- `void playEvent(EntityPlayer player,  int type,  BlockPos blockPosIn,  int data)`
- `void sendBlockBreakProgress(int breakerId,  BlockPos pos,  int progress)`

## IWorldNameable

*interface* `net.minecraft.world.IWorldNameable`

### Methods
- `java.lang.String getName()`
- `boolean hasCustomName()`
- `ITextComponent getDisplayName()`

## LockCode

*class* `net.minecraft.world.LockCode`

### Fields
- `public static final LockCode EMPTY_CODE`

### Methods
- `public boolean isEmpty()`
- `public java.lang.String getLock()`
- `public void toNBT(NBTTagCompound nbt)`
- `public static LockCode fromNBT(NBTTagCompound nbt)`

## MinecraftException

*class* `net.minecraft.world.MinecraftException`

All Implemented Interfaces: java.io.Serializable

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## NextTickListEntry

*class* `net.minecraft.world.NextTickListEntry`

All Implemented Interfaces: java.lang.Comparable<NextTickListEntry>

### Fields
- `public final BlockPos position`
- `public long scheduledTime`
- `public int priority`

### Methods
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public NextTickListEntry setScheduledTime(long scheduledTimeIn)`
- `public void setPriority(int priorityIn)`
- `public int compareTo(NextTickListEntry p_compareTo_1_)`
- `public java.lang.String toString()`
- `public Block getBlock()`

## ServerWorldEventHandler

*class* `net.minecraft.world.ServerWorldEventHandler`

All Implemented Interfaces: IWorldEventListener

### Methods
- `public void spawnParticle(int particleID,  boolean ignoreRange,  double xCoord,  double yCoord,  double zCoord,  double xSpeed,  double ySpeed,  double zSpeed,  int... parameters)`
- `public void spawnParticle(int id,  boolean ignoreRange,  boolean p_190570_3_,  double x,  double y,  double z,  double xSpeed,  double ySpeed,  double zSpeed,  int... parameters)`
- `public void onEntityAdded(Entity entityIn)`
- `public void onEntityRemoved(Entity entityIn)`
- `public void playSoundToAllNearExcept(EntityPlayer player,  SoundEvent soundIn,  SoundCategory category,  double x,  double y,  double z,  float volume,  float pitch)`
- `public void markBlockRangeForRenderUpdate(int x1,  int y1,  int z1,  int x2,  int y2,  int z2)`
- `public void notifyBlockUpdate(World worldIn,  BlockPos pos,  IBlockState oldState,  IBlockState newState,  int flags)`
- `public void notifyLightSet(BlockPos pos)`
- `public void playRecord(SoundEvent soundIn,  BlockPos pos)`
- `public void playEvent(EntityPlayer player,  int type,  BlockPos blockPosIn,  int data)`
- `public void broadcastSound(int soundID,  BlockPos pos,  int data)`
- `public void sendBlockBreakProgress(int breakerId,  BlockPos pos,  int progress)`

## Teleporter

*class* `net.minecraft.world.Teleporter`

All Implemented Interfaces: ITeleporter

### Fields
- `protected final WorldServer world`
- `protected final java.util.Random random`
- `protected final <any> destinationCoordinateCache`

### Methods
- `public void placeInPortal(Entity entityIn,  float rotationYaw)`
- `public boolean placeInExistingPortal(Entity entityIn,  float rotationYaw)`
- `public boolean makePortal(Entity entityIn)`
- `public void removeStalePortalLocations(long worldTime)`
- `public void placeEntity(World world,  Entity entity,  float yaw)`
  Description copied from interface: ITeleporter
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

### Inherited methods
- from `net.minecraftforge.common.util.ITeleporter`: `isVanilla`

## Teleporter.PortalPosition

*class* `net.minecraft.world.Teleporter.PortalPosition`

All Implemented Interfaces: java.lang.Comparable<Vec3i>

Enclosing class: Teleporter

### Fields
- `public long lastUpdateTime`

### Inherited fields
- from `net.minecraft.util.math.BlockPos`: `ORIGIN`
- from `net.minecraft.util.math.Vec3i`: `NULL_VECTOR`

### Inherited methods
- from `net.minecraft.util.math.BlockPos`: `add`, `add`, `add`, `crossProduct`, `down`, `down`, `east`, `east`, `fromLong`, `getAllInBox`, `getAllInBox`, `getAllInBoxMutable`, `getAllInBoxMutable`, `north`, `north`, `offset`, `offset`, `rotate`, `south`, `south`, `subtract`, `toImmutable`, `toLong`, `up`, `up`, `west`, `west`
- from `net.minecraft.util.math.Vec3i`: `compareTo`, `distanceSq`, `distanceSq`, `distanceSqToCenter`, `equals`, `getDistance`, `getX`, `getY`, `getZ`, `hashCode`, `toString`

## World

*class* `net.minecraft.world.World`

All Implemented Interfaces: IBlockAccess, ICapabilityProvider

### Fields
- `public static double MAX_ENTITY_RADIUS`
  Used in the getEntitiesWithinAABB functions to expand the search area for entities.
   Modders should change this variable to a higher value if it is less then the radius
   of one of there entities.
- `protected boolean scheduledUpdatesAreImmediate`
- `public final java.util.List<Entity> loadedEntityList`
- `protected final java.util.List<Entity> unloadedEntityList`
- `public final java.util.List<TileEntity> loadedTileEntityList`
- `public final java.util.List<TileEntity> tickableTileEntities`
- `public final java.util.List<EntityPlayer> playerEntities`
- `public final java.util.List<Entity> weatherEffects`
- `protected final IntHashMap<Entity> entitiesById`
- `protected int updateLCG`
- `protected final int DIST_HASH_MAGIC` (= 1013904223)
- `public float prevRainingStrength`
- `public float rainingStrength`
- `public float prevThunderingStrength`
- `public float thunderingStrength`
- `public final java.util.Random rand`
- `public final WorldProvider provider`
- `protected PathWorldListener pathListener`
- `protected java.util.List<IWorldEventListener> eventListeners`
- `protected IChunkProvider chunkProvider`
- `protected final ISaveHandler saveHandler`
- `protected WorldInfo worldInfo`
- `protected boolean findingSpawnPoint`
- `protected MapStorage mapStorage`
- `public VillageCollection villageCollection`
- `protected LootTableManager lootTable`
- `protected AdvancementManager advancementManager`
- `protected FunctionManager functionManager`
- `public final Profiler profiler`
- `protected Scoreboard worldScoreboard`
- `public final boolean isRemote`
- `protected boolean spawnHostileMobs`
- `protected boolean spawnPeacefulMobs`
- `public boolean restoringBlockSnapshots`
- `public boolean captureBlockSnapshots`
- `public java.util.ArrayList<BlockSnapshot> capturedBlockSnapshots`
- `protected MapStorage perWorldStorage`

### Methods
- `public World init()`
- `public Biome getBiome(BlockPos pos)`
- `public Biome getBiomeForCoordsBody(BlockPos pos)`
- `public BiomeProvider getBiomeProvider()`
- `protected abstract IChunkProvider createChunkProvider()`
- `public void initialize(WorldSettings settings)`
- `public MinecraftServer getMinecraftServer()`
- `public void setInitialSpawnLocation()`
- `public IBlockState getGroundAboveSeaLevel(BlockPos pos)`
- `public boolean isValid(BlockPos pos)`
- `public boolean isOutsideBuildHeight(BlockPos pos)`
- `public boolean isAirBlock(BlockPos pos)`
- `public boolean isBlockLoaded(BlockPos pos)`
- `public boolean isBlockLoaded(BlockPos pos,  boolean allowEmpty)`
- `public boolean isAreaLoaded(BlockPos center,  int radius)`
- `public boolean isAreaLoaded(BlockPos center,  int radius,  boolean allowEmpty)`
- `public boolean isAreaLoaded(BlockPos from,  BlockPos to)`
- `public boolean isAreaLoaded(BlockPos from,  BlockPos to,  boolean allowEmpty)`
- `public boolean isAreaLoaded(StructureBoundingBox box)`
- `public boolean isAreaLoaded(StructureBoundingBox box,  boolean allowEmpty)`
- `protected abstract boolean isChunkLoaded(int x,  int z,  boolean allowEmpty)`
- `public Chunk getChunkFromBlockCoords(BlockPos pos)`
- `public Chunk getChunkFromChunkCoords(int chunkX,  int chunkZ)`
- `public boolean isChunkGeneratedAt(int x,  int z)`
- `public boolean setBlockState(BlockPos pos,  IBlockState newState,  int flags)`
- `public void markAndNotifyBlock(BlockPos pos,  Chunk chunk,  IBlockState iblockstate,  IBlockState newState,  int flags)`
- `public boolean setBlockToAir(BlockPos pos)`
- `public boolean destroyBlock(BlockPos pos,  boolean dropBlock)`
- `public boolean setBlockState(BlockPos pos,  IBlockState state)`
- `public void notifyBlockUpdate(BlockPos pos,  IBlockState oldState,  IBlockState newState,  int flags)`
- `public void notifyNeighborsRespectDebug(BlockPos pos,  Block blockType,  boolean p_175722_3_)`
- `public void markBlocksDirtyVertical(int x,  int z,  int y1,  int y2)`
- `public void markBlockRangeForRenderUpdate(BlockPos rangeMin,  BlockPos rangeMax)`
- `public void markBlockRangeForRenderUpdate(int x1,  int y1,  int z1,  int x2,  int y2,  int z2)`
- `public void updateObservingBlocksAt(BlockPos pos,  Block blockType)`
- `public void notifyNeighborsOfStateChange(BlockPos pos,  Block blockType,  boolean updateObservers)`
- `public void notifyNeighborsOfStateExcept(BlockPos pos,  Block blockType,  EnumFacing skipSide)`
- `public void neighborChanged(BlockPos pos,  Block blockIn,  BlockPos fromPos)`
- `public void observedNeighborChanged(BlockPos pos,  Block p_190529_2_,  BlockPos p_190529_3_)`
- `public boolean isBlockTickPending(BlockPos pos,  Block blockType)`
- `public boolean canSeeSky(BlockPos pos)`
- `public boolean canBlockSeeSky(BlockPos pos)`
- `public int getLight(BlockPos pos)`
- `public int getLightFromNeighbors(BlockPos pos)`
- `public int getLight(BlockPos pos,  boolean checkNeighbors)`
- `public BlockPos getHeight(BlockPos pos)`
- `public int getHeight(int x,  int z)`
- `@Deprecated public int getChunksLowestHorizon(int x,  int z)` (deprecated)
  Deprecated.
- `public int getLightFromNeighborsFor(EnumSkyBlock type,  BlockPos pos)`
- `public int getLightFor(EnumSkyBlock type,  BlockPos pos)`
- `public void setLightFor(EnumSkyBlock type,  BlockPos pos,  int lightValue)`
- `public void notifyLightSet(BlockPos pos)`
- `public int getCombinedLight(BlockPos pos,  int lightValue)`
- `public float getLightBrightness(BlockPos pos)`
- `public IBlockState getBlockState(BlockPos pos)`
- `public boolean isDaytime()`
- `public RayTraceResult rayTraceBlocks(Vec3d start,  Vec3d end)`
- `public RayTraceResult rayTraceBlocks(Vec3d start,  Vec3d end,  boolean stopOnLiquid)`
- `public RayTraceResult rayTraceBlocks(Vec3d vec31,  Vec3d vec32,  boolean stopOnLiquid,  boolean ignoreBlockWithoutBoundingBox,  boolean returnLastUncollidableBlock)`
- `public void playSound(EntityPlayer player,  BlockPos pos,  SoundEvent soundIn,  SoundCategory category,  float volume,  float pitch)`
- `public void playSound(EntityPlayer player,  double x,  double y,  double z,  SoundEvent soundIn,  SoundCategory category,  float volume,  float pitch)`
- `public void playSound(double x,  double y,  double z,  SoundEvent soundIn,  SoundCategory category,  float volume,  float pitch,  boolean distanceDelay)`
- `public void playRecord(BlockPos blockPositionIn,  SoundEvent soundEventIn)`
- `public void spawnParticle(EnumParticleTypes particleType,  double xCoord,  double yCoord,  double zCoord,  double xSpeed,  double ySpeed,  double zSpeed,  int... parameters)`
- `public void spawnAlwaysVisibleParticle(int p_190523_1_,  double p_190523_2_,  double p_190523_4_,  double p_190523_6_,  double p_190523_8_,  double p_190523_10_,  double p_190523_12_,  int... p_190523_14_)`
- `public void spawnParticle(EnumParticleTypes particleType,  boolean ignoreRange,  double xCoord,  double yCoord,  double zCoord,  double xSpeed,  double ySpeed,  double zSpeed,  int... parameters)`
- `public boolean addWeatherEffect(Entity entityIn)`
- `public boolean spawnEntity(Entity entityIn)`
- `public void onEntityAdded(Entity entityIn)`
- `public void onEntityRemoved(Entity entityIn)`
- `public void removeEntity(Entity entityIn)`
- `public void removeEntityDangerously(Entity entityIn)`
- `public void addEventListener(IWorldEventListener listener)`
- `public java.util.List<AxisAlignedBB> getCollisionBoxes(Entity entityIn,  AxisAlignedBB aabb)`
- `public void removeEventListener(IWorldEventListener listener)`
- `public boolean isInsideWorldBorder(Entity p_191503_1_)`
- `public boolean collidesWithAnyBlock(AxisAlignedBB bbox)`
- `public int calculateSkylightSubtracted(float partialTicks)`
- `public float getSunBrightnessFactor(float partialTicks)`
  The current sun brightness factor for this dimension.
   0.0f means no light at all, and 1.0f means maximum sunlight.
   Highly recommended for sunlight detection like solar panel.
  - returns: The current brightness factor
- `public float getSunBrightness(float partialTicks)`
- `public float getSunBrightnessBody(float partialTicks)`
- `public Vec3d getSkyColor(Entity entityIn,  float partialTicks)`
- `public Vec3d getSkyColorBody(Entity entityIn,  float partialTicks)`
- `public float getCelestialAngle(float partialTicks)`
- `public int getMoonPhase()`
- `public float getCurrentMoonPhaseFactor()`
- `public float getCurrentMoonPhaseFactorBody()`
- `public float getCelestialAngleRadians(float partialTicks)`
- `public Vec3d getCloudColour(float partialTicks)`
- `public Vec3d getCloudColorBody(float partialTicks)`
- `public Vec3d getFogColor(float partialTicks)`
- `public BlockPos getPrecipitationHeight(BlockPos pos)`
- `public BlockPos getTopSolidOrLiquidBlock(BlockPos pos)`
- `public float getStarBrightness(float partialTicks)`
- `public float getStarBrightnessBody(float partialTicks)`
- `public boolean isUpdateScheduled(BlockPos pos,  Block blk)`
- `public void scheduleUpdate(BlockPos pos,  Block blockIn,  int delay)`
- `public void updateBlockTick(BlockPos pos,  Block blockIn,  int delay,  int priority)`
- `public void scheduleBlockUpdate(BlockPos pos,  Block blockIn,  int delay,  int priority)`
- `public void updateEntities()`
- `protected void tickPlayers()`
- `public boolean addTileEntity(TileEntity tile)`
- `public void addTileEntities(java.util.Collection<TileEntity> tileEntityCollection)`
- `public void updateEntity(Entity ent)`
- `public void updateEntityWithOptionalForce(Entity entityIn,  boolean forceUpdate)`
- `public boolean checkNoEntityCollision(AxisAlignedBB bb)`
- `public boolean checkNoEntityCollision(AxisAlignedBB bb,  Entity entityIn)`
- `public boolean checkBlockCollision(AxisAlignedBB bb)`
- `public boolean containsAnyLiquid(AxisAlignedBB bb)`
- `public boolean isFlammableWithin(AxisAlignedBB bb)`
- `public boolean handleMaterialAcceleration(AxisAlignedBB bb,  Material materialIn,  Entity entityIn)`
- `public boolean isMaterialInBB(AxisAlignedBB bb,  Material materialIn)`
- `public Explosion createExplosion(Entity entityIn,  double x,  double y,  double z,  float strength,  boolean isSmoking)`
- `public Explosion newExplosion(Entity entityIn,  double x,  double y,  double z,  float strength,  boolean isFlaming,  boolean isSmoking)`
- `public float getBlockDensity(Vec3d vec,  AxisAlignedBB bb)`
- `public boolean extinguishFire(EntityPlayer player,  BlockPos pos,  EnumFacing side)`
- `public java.lang.String getDebugLoadedEntities()`
- `public java.lang.String getProviderName()`
- `public TileEntity getTileEntity(BlockPos pos)`
- `public void setTileEntity(BlockPos pos,  TileEntity tileEntityIn)`
- `public void removeTileEntity(BlockPos pos)`
- `public void markTileEntityForRemoval(TileEntity tileEntityIn)`
- `public boolean isBlockFullCube(BlockPos pos)`
- `public boolean isBlockNormalCube(BlockPos pos,  boolean _default)`
- `public void calculateInitialSkylight()`
- `public void setAllowedSpawnTypes(boolean hostile,  boolean peaceful)`
- `public void tick()`
- `protected void calculateInitialWeather()`
- `public void calculateInitialWeatherBody()`
- `protected void updateWeather()`
- `public void updateWeatherBody()`
- `protected void playMoodSoundAndCheckLight(int p_147467_1_,  int p_147467_2_,  Chunk chunkIn)`
- `protected void updateBlocks()`
- `public void immediateBlockTick(BlockPos pos,  IBlockState state,  java.util.Random random)`
- `public boolean canBlockFreezeWater(BlockPos pos)`
- `public boolean canBlockFreezeNoWater(BlockPos pos)`
- `public boolean canBlockFreeze(BlockPos pos,  boolean noWaterAdj)`
- `public boolean canBlockFreezeBody(BlockPos pos,  boolean noWaterAdj)`
- `public boolean canSnowAt(BlockPos pos,  boolean checkLight)`
- `public boolean canSnowAtBody(BlockPos pos,  boolean checkLight)`
- `public boolean checkLight(BlockPos pos)`
- `public boolean checkLightFor(EnumSkyBlock lightType,  BlockPos pos)`
- `public boolean tickUpdates(boolean runAllPending)`
- `public java.util.List<NextTickListEntry> getPendingBlockUpdates(Chunk chunkIn,  boolean remove)`
- `public java.util.List<NextTickListEntry> getPendingBlockUpdates(StructureBoundingBox structureBB,  boolean remove)`
- `public java.util.List<Entity> getEntitiesWithinAABBExcludingEntity(Entity entityIn,  AxisAlignedBB bb)`
- `public java.util.List<Entity> getEntitiesInAABBexcluding(Entity entityIn,  AxisAlignedBB boundingBox,  <any> predicate)`
- `public <T extends Entity> java.util.List<T> getEntities(java.lang.Class<? extends T> entityType,  <any> filter)`
- `public <T extends Entity> java.util.List<T> getPlayers(java.lang.Class<? extends T> playerType,  <any> filter)`
- `public <T extends Entity> java.util.List<T> getEntitiesWithinAABB(java.lang.Class<? extends T> classEntity,  AxisAlignedBB bb)`
- `public <T extends Entity> java.util.List<T> getEntitiesWithinAABB(java.lang.Class<? extends T> clazz,  AxisAlignedBB aabb,  <any> filter)`
- `public <T extends Entity> T findNearestEntityWithinAABB(java.lang.Class<? extends T> entityType,  AxisAlignedBB aabb,  T closestTo)`
- `public Entity getEntityByID(int id)`
- `public java.util.List<Entity> getLoadedEntityList()`
- `public void markChunkDirty(BlockPos pos,  TileEntity unusedTileEntity)`
- `public int countEntities(java.lang.Class<?> entityType)`
- `public void loadEntities(java.util.Collection<Entity> entityCollection)`
- `public void unloadEntities(java.util.Collection<Entity> entityCollection)`
- `public boolean mayPlace(Block blockIn,  BlockPos pos,  boolean skipCollisionCheck,  EnumFacing sidePlacedOn,  Entity placer)`
- `public int getSeaLevel()`
- `public void setSeaLevel(int seaLevelIn)`
- `public int getStrongPower(BlockPos pos,  EnumFacing direction)`
- `public WorldType getWorldType()`
- `public int getStrongPower(BlockPos pos)`
- `public boolean isSidePowered(BlockPos pos,  EnumFacing side)`
- `public int getRedstonePower(BlockPos pos,  EnumFacing facing)`
- `public boolean isBlockPowered(BlockPos pos)`
- `public int isBlockIndirectlyGettingPowered(BlockPos pos)`
- `public EntityPlayer getClosestPlayerToEntity(Entity entityIn,  double distance)`
- `public EntityPlayer getNearestPlayerNotCreative(Entity entityIn,  double distance)`
- `public EntityPlayer getClosestPlayer(double posX,  double posY,  double posZ,  double distance,  boolean spectator)`
- `public EntityPlayer getClosestPlayer(double x,  double y,  double z,  double p_190525_7_,  <any> p_190525_9_)`
- `public boolean isAnyPlayerWithinRangeAt(double x,  double y,  double z,  double range)`
- `public EntityPlayer getNearestAttackablePlayer(Entity entityIn,  double maxXZDistance,  double maxYDistance)`
- `public EntityPlayer getNearestAttackablePlayer(BlockPos pos,  double maxXZDistance,  double maxYDistance)`
- `public EntityPlayer getNearestAttackablePlayer(double posX,  double posY,  double posZ,  double maxXZDistance,  double maxYDistance,  <any> playerToDouble,  <any> p_184150_12_)`
- `public EntityPlayer getPlayerEntityByName(java.lang.String name)`
- `public EntityPlayer getPlayerEntityByUUID(java.util.UUID uuid)`
- `public void sendQuittingDisconnectingPacket()`
- `public void checkSessionLock()  throws MinecraftException`
  - throws: MinecraftException
- `public void setTotalWorldTime(long worldTime)`
- `public long getSeed()`
- `public long getTotalWorldTime()`
- `public long getWorldTime()`
- `public void setWorldTime(long time)`
- `public BlockPos getSpawnPoint()`
- `public void setSpawnPoint(BlockPos pos)`
- `public void joinEntityInSurroundings(Entity entityIn)`
- `public boolean isBlockModifiable(EntityPlayer player,  BlockPos pos)`
- `public boolean canMineBlockBody(EntityPlayer player,  BlockPos pos)`
- `public void setEntityState(Entity entityIn,  byte state)`
- `public IChunkProvider getChunkProvider()`
- `public void addBlockEvent(BlockPos pos,  Block blockIn,  int eventID,  int eventParam)`
- `public ISaveHandler getSaveHandler()`
- `public WorldInfo getWorldInfo()`
- `public GameRules getGameRules()`
- `public void updateAllPlayersSleepingFlag()`
- `public float getThunderStrength(float delta)`
- `public void setThunderStrength(float strength)`
- `public float getRainStrength(float delta)`
- `public void setRainStrength(float strength)`
- `public boolean isThundering()`
- `public boolean isRaining()`
- `public boolean isRainingAt(BlockPos position)`
- `public boolean isBlockinHighHumidity(BlockPos pos)`
- `public MapStorage getMapStorage()`
- `public void setData(java.lang.String dataID,  WorldSavedData worldSavedDataIn)`
- `public WorldSavedData loadData(java.lang.Class<? extends WorldSavedData> clazz,  java.lang.String dataID)`
- `public int getUniqueDataId(java.lang.String key)`
- `public void playBroadcastSound(int id,  BlockPos pos,  int data)`
- `public void playEvent(int type,  BlockPos pos,  int data)`
- `public void playEvent(EntityPlayer player,  int type,  BlockPos pos,  int data)`
- `public int getHeight()`
- `public int getActualHeight()`
- `public java.util.Random setRandomSeed(int p_72843_1_,  int p_72843_2_,  int p_72843_3_)`
- `public CrashReportCategory addWorldInfoToCrashReport(CrashReport report)`
- `public double getHorizon()`
- `public void sendBlockBreakProgress(int breakerId,  BlockPos pos,  int progress)`
- `public java.util.Calendar getCurrentDate()`
- `public void makeFireworks(double x,  double y,  double z,  double motionX,  double motionY,  double motionZ,  NBTTagCompound compound)`
- `public Scoreboard getScoreboard()`
- `public void updateComparatorOutputLevel(BlockPos pos,  Block blockIn)`
- `public DifficultyInstance getDifficultyForLocation(BlockPos pos)`
- `public EnumDifficulty getDifficulty()`
- `public int getSkylightSubtracted()`
- `public void setSkylightSubtracted(int newSkylightSubtracted)`
- `public int getLastLightningBolt()`
- `public void setLastLightningBolt(int lastLightningBoltIn)`
- `public VillageCollection getVillageCollection()`
- `public WorldBorder getWorldBorder()`
- `public boolean isSpawnChunk(int x,  int z)`
- `public boolean isSideSolid(BlockPos pos,  EnumFacing side)`
  Determine if the given block is considered solid on the
   specified side. Used by placement logic.
  - param: pos - Block Position
  - param: side - The Side in question
  - returns: True if the side is solid
- `public boolean isSideSolid(BlockPos pos,  EnumFacing side,  boolean _default)`
  Determine if the given block is considered solid on the
   specified side. Used by placement logic.
  - param: pos - Block Position
  - param: side - The Side in question
  - param: _default - The default to return if the block doesn't exist.
  - returns: True if the side is solid
- `public <any> getPersistentChunks()`
  Get the persistent chunks for this world
- `public java.util.Iterator<Chunk> getPersistentChunkIterable(java.util.Iterator<Chunk> chunkIterator)`
- `public int getBlockLightOpacity(BlockPos pos)`
  Readded as it was removed, very useful helper function
  - param: pos - Block position
  - returns: The blocks light opacity
- `public int countEntities(EnumCreatureType type,  boolean forSpawnCount)`
  Returns a count of entities that classify themselves as the specified creature type.
- `@Deprecated public void markTileEntitiesInChunkForRemoval(Chunk chunk)` (deprecated)
  Deprecated.
- `protected void initCapabilities()`
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
- `public MapStorage getPerWorldStorage()`
- `public void sendPacketToServer(Packet<?> packetIn)`
- `public LootTableManager getLootTableManager()`
- `public BlockPos findNearestStructure(java.lang.String p_190528_1_,  BlockPos p_190528_2_,  boolean p_190528_3_)`

## WorldEntitySpawner

*class* `net.minecraft.world.WorldEntitySpawner`

### Methods
- `public int findChunksForSpawning(WorldServer worldServerIn,  boolean spawnHostileMobs,  boolean spawnPeacefulMobs,  boolean spawnOnSetTickRate)`
- `public static boolean isValidEmptySpawnBlock(IBlockState state)`
- `public static boolean canCreatureTypeSpawnAtLocation(EntityLiving.SpawnPlacementType spawnPlacementTypeIn,  World worldIn,  BlockPos pos)`
- `public static boolean canCreatureTypeSpawnBody(EntityLiving.SpawnPlacementType spawnPlacementTypeIn,  World worldIn,  BlockPos pos)`
- `public static void performWorldGenSpawning(World worldIn,  Biome biomeIn,  int centerX,  int centerZ,  int diameterX,  int diameterZ,  java.util.Random randomIn)`

## WorldProvider

*class* `net.minecraft.world.WorldProvider`

### Fields
- `public static final float[] MOON_PHASE_FACTORS`
- `protected World world`
- `protected BiomeProvider biomeProvider`
- `protected boolean doesWaterVaporize`
- `protected boolean nether`
- `protected boolean hasSkyLight`
- `protected final float[] lightBrightnessTable`

### Methods
- `public final void setWorld(World worldIn)`
- `protected void generateLightBrightnessTable()`
- `protected void init()`
- `public IChunkGenerator createChunkGenerator()`
- `public boolean canCoordinateBeSpawn(int x,  int z)`
- `public float calculateCelestialAngle(long worldTime,  float partialTicks)`
- `public int getMoonPhase(long worldTime)`
- `public boolean isSurfaceWorld()`
- `public float[] calcSunriseSunsetColors(float celestialAngle,  float partialTicks)`
- `public Vec3d getFogColor(float p_76562_1_,  float p_76562_2_)`
- `public boolean canRespawnHere()`
- `public float getCloudHeight()`
- `public boolean isSkyColored()`
- `public BlockPos getSpawnCoordinate()`
- `public int getAverageGroundLevel()`
- `public double getVoidFogYFactor()`
- `public boolean doesXZShowFog(int x,  int z)`
- `public BiomeProvider getBiomeProvider()`
- `public boolean doesWaterVaporize()`
- `public boolean hasSkyLight()`
- `public boolean isNether()`
- `public float[] getLightBrightnessTable()`
- `public WorldBorder createWorldBorder()`
- `public void setDimension(int dim)`
  Sets the providers current dimension ID, used in default getSaveFolder()
   Added to allow default providers to be registered for multiple dimensions.
   This is to denote the exact dimension ID opposed to the 'type' in WorldType
  - param: dim - Dimension ID
- `public int getDimension()`
- `public java.lang.String getSaveFolder()`
  Returns the sub-folder of the world folder that this WorldProvider saves to.
   EXA: DIM1, DIM-1
  - returns: The sub-folder name to save this world's chunks to.
- `public double getMovementFactor()`
  The dimension's movement factor.
   Whenever a player or entity changes dimension from world A to world B, their coordinates are multiplied by
   worldA.provider.getMovementFactor() / worldB.provider.getMovementFactor()
   Example: Overworld factor is 1, nether factor is 8. Traveling from overworld to nether multiplies coordinates by 1/8.
  - returns: The movement factor
- `public boolean shouldClientCheckLighting()`
  If this method returns true, then chunks received by the client will
   have Chunk.resetRelightChecks() called
   on them, queuing lighting checks for all air blocks in the chunk (and
   any adjacent light-emitting blocks).
  
   Returning true here is recommended if the chunk generator used also
   does this for newly generated chunks.
  - returns: true if lighting checks should be performed
- `public IRenderHandler getSkyRenderer()`
- `public void setSkyRenderer(IRenderHandler skyRenderer)`
- `public IRenderHandler getCloudRenderer()`
- `public void setCloudRenderer(IRenderHandler renderer)`
- `public IRenderHandler getWeatherRenderer()`
- `public void setWeatherRenderer(IRenderHandler renderer)`
- `public void getLightmapColors(float partialTicks,  float sunBrightness,  float skyLight,  float blockLight,  float[] colors)`
  Allows for manipulating the coloring of the lightmap texture.
   Will be called for each 16*16 combination of sky/block light values.
  - param: partialTicks - Progress between ticks.
  - param: sunBrightness - Current sun brightness.
  - param: skyLight - Sky light brightness factor.
  - param: blockLight - Block light brightness factor.
  - param: colors - The color values that will be used: [r, g, b].
- `public BlockPos getRandomizedSpawnPoint()`
- `public boolean shouldMapSpin(java.lang.String entity,  double x,  double z,  double rotation)`
  Determine if the cursor on the map should 'spin' when rendered, like it does for the player in the nether.
  - param: entity - The entity holding the map, playername, or frame-ENTITYID
  - param: x - X Position
  - param: z - Z Position
  - param: rotation - the regular rotation of the marker
  - returns: True to 'spin' the cursor
- `public int getRespawnDimension(EntityPlayerMP player)`
  Determines the dimension the player will be respawned in, typically this brings them back to the overworld.
  - param: player - The player that is respawning
  - returns: The dimension to respawn the player in
- `public ICapabilityProvider initCapabilities()`
  Called from World.initCapabilities(), to gather capabilities for this world.
   It's safe to access world here since this is called after world is registered.
  
   On server, called directly after mapStorage and world data such as Scoreboard and VillageCollection are initialized.
   On client, called when world is constructed, just before world load event is called.
   Note that this method is always called before the world load event.
  - returns: initial holder for capabilities on the world
- `public MusicTicker.MusicType getMusicType()`
  Called on the client to get the music type to play when in this world type.
   At the time of calling, the client player and world are guaranteed to be non-null
  - returns: null to use vanilla logic, otherwise a MusicType to play in this world
- `public WorldProvider.WorldSleepResult canSleepAt(EntityPlayer player,  BlockPos pos)`
  Determines if the player can sleep in this world (or if the bed should explode for example).
  - param: player - The player that is attempting to sleep
  - param: pos - The location where the player tries to sleep at (the position of the clicked on bed for example)
  - returns: the result of a player trying to sleep at the given location
- `public Biome getBiomeForCoords(BlockPos pos)`
- `public boolean isDaytime()`
- `public float getSunBrightnessFactor(float par1)`
  The current sun brightness factor for this dimension.
   0.0f means no light at all, and 1.0f means maximum sunlight.
   This will be used for the "calculateSkylightSubtracted"
   which is for Sky light value calculation.
  - returns: The current brightness factor
- `public float getCurrentMoonPhaseFactor()`
  Calculates the current moon phase factor.
   This factor is effective for slimes.
   (This method do not affect the moon rendering)
- `public Vec3d getSkyColor(Entity cameraEntity,  float partialTicks)`
- `public Vec3d getCloudColor(float partialTicks)`
- `public float getSunBrightness(float par1)`
  Gets the Sun Brightness for rendering sky.
- `public float getStarBrightness(float par1)`
  Gets the Star Brightness for rendering sky.
- `public void setAllowedSpawnTypes(boolean allowHostile,  boolean allowPeaceful)`
- `public void calculateInitialWeather()`
- `public void updateWeather()`
- `public boolean canBlockFreeze(BlockPos pos,  boolean byWater)`
- `public boolean canSnowAt(BlockPos pos,  boolean checkLight)`
- `public void setWorldTime(long time)`
- `public long getSeed()`
- `public long getWorldTime()`
- `public BlockPos getSpawnPoint()`
- `public void setSpawnPoint(BlockPos pos)`
- `public boolean canMineBlock(EntityPlayer player,  BlockPos pos)`
- `public boolean isBlockHighHumidity(BlockPos pos)`
- `public int getHeight()`
- `public int getActualHeight()`
- `public double getHorizon()`
- `public void resetRainAndThunder()`
- `public boolean canDoLightning(Chunk chunk)`
- `public boolean canDoRainSnowIce(Chunk chunk)`
- `public void onPlayerAdded(EntityPlayerMP player)`
- `public void onPlayerRemoved(EntityPlayerMP player)`
- `public abstract DimensionType getDimensionType()`
- `public void onWorldSave()`
- `public void onWorldUpdateEntities()`
- `public boolean canDropChunk(int x,  int z)`

## WorldProvider.WorldSleepResult

*enum* `net.minecraft.world.WorldProvider.WorldSleepResult`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<WorldProvider.WorldSleepResult>

Enclosing class: WorldProvider

### Fields
- `public static final WorldProvider.WorldSleepResult ALLOW`
- `public static final WorldProvider.WorldSleepResult DENY`
- `public static final WorldProvider.WorldSleepResult BED_EXPLODES`

### Methods
- `public static WorldProvider.WorldSleepResult[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (WorldProvider.WorldSleepResult c : WorldProvider.WorldSleepResult.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static WorldProvider.WorldSleepResult valueOf(java.lang.String name)`
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

## WorldProviderEnd

*class* `net.minecraft.world.WorldProviderEnd`

### Inherited fields
- from `net.minecraft.world.WorldProvider`: `biomeProvider`, `doesWaterVaporize`, `hasSkyLight`, `lightBrightnessTable`, `MOON_PHASE_FACTORS`, `nether`, `world`

### Methods
- `public void init()`
- `public IChunkGenerator createChunkGenerator()`
- `public float calculateCelestialAngle(long worldTime,  float partialTicks)`
- `public float[] calcSunriseSunsetColors(float celestialAngle,  float partialTicks)`
- `public Vec3d getFogColor(float p_76562_1_,  float p_76562_2_)`
- `public boolean isSkyColored()`
- `public boolean canRespawnHere()`
- `public boolean isSurfaceWorld()`
- `public float getCloudHeight()`
- `public boolean canCoordinateBeSpawn(int x,  int z)`
- `public BlockPos getSpawnCoordinate()`
- `public int getAverageGroundLevel()`
- `public boolean doesXZShowFog(int x,  int z)`
- `public DimensionType getDimensionType()`
- `public void onWorldSave()`
- `public void onWorldUpdateEntities()`
- `public DragonFightManager getDragonFightManager()`
- `public void onPlayerAdded(EntityPlayerMP player)`
- `public void onPlayerRemoved(EntityPlayerMP player)`

### Inherited methods
- from `net.minecraft.world.WorldProvider`: `calculateInitialWeather`, `canBlockFreeze`, `canDoLightning`, `canDoRainSnowIce`, `canDropChunk`, `canMineBlock`, `canSleepAt`, `canSnowAt`, `createWorldBorder`, `doesWaterVaporize`, `generateLightBrightnessTable`, `getActualHeight`, `getBiomeForCoords`, `getBiomeProvider`, `getCloudColor`, `getCloudRenderer`, `getCurrentMoonPhaseFactor`, `getDimension`, `getHeight`, `getHorizon`, `getLightBrightnessTable`, `getLightmapColors`, `getMoonPhase`, `getMovementFactor`, `getMusicType`, `getRandomizedSpawnPoint`, `getRespawnDimension`, `getSaveFolder`, `getSeed`, `getSkyColor`, `getSkyRenderer`, `getSpawnPoint`, `getStarBrightness`, `getSunBrightness`, `getSunBrightnessFactor`, `getVoidFogYFactor`, `getWeatherRenderer`, `getWorldTime`, `hasSkyLight`, `initCapabilities`, `isBlockHighHumidity`, `isDaytime`, `isNether`, `resetRainAndThunder`, `setAllowedSpawnTypes`, `setCloudRenderer`, `setDimension`, `setSkyRenderer`, `setSpawnPoint`, `setWeatherRenderer`, `setWorld`, `setWorldTime`, `shouldClientCheckLighting`, `shouldMapSpin`, `updateWeather`

## WorldProviderHell

*class* `net.minecraft.world.WorldProviderHell`

### Inherited fields
- from `net.minecraft.world.WorldProvider`: `biomeProvider`, `doesWaterVaporize`, `hasSkyLight`, `lightBrightnessTable`, `MOON_PHASE_FACTORS`, `nether`, `world`

### Methods
- `public void init()`
- `public Vec3d getFogColor(float p_76562_1_,  float p_76562_2_)`
- `protected void generateLightBrightnessTable()`
- `public IChunkGenerator createChunkGenerator()`
- `public boolean isSurfaceWorld()`
- `public boolean canCoordinateBeSpawn(int x,  int z)`
- `public float calculateCelestialAngle(long worldTime,  float partialTicks)`
- `public boolean canRespawnHere()`
- `public boolean doesXZShowFog(int x,  int z)`
- `public WorldBorder createWorldBorder()`
- `public DimensionType getDimensionType()`

### Inherited methods
- from `net.minecraft.world.WorldProvider`: `calcSunriseSunsetColors`, `calculateInitialWeather`, `canBlockFreeze`, `canDoLightning`, `canDoRainSnowIce`, `canDropChunk`, `canMineBlock`, `canSleepAt`, `canSnowAt`, `doesWaterVaporize`, `getActualHeight`, `getAverageGroundLevel`, `getBiomeForCoords`, `getBiomeProvider`, `getCloudColor`, `getCloudHeight`, `getCloudRenderer`, `getCurrentMoonPhaseFactor`, `getDimension`, `getHeight`, `getHorizon`, `getLightBrightnessTable`, `getLightmapColors`, `getMoonPhase`, `getMovementFactor`, `getMusicType`, `getRandomizedSpawnPoint`, `getRespawnDimension`, `getSaveFolder`, `getSeed`, `getSkyColor`, `getSkyRenderer`, `getSpawnCoordinate`, `getSpawnPoint`, `getStarBrightness`, `getSunBrightness`, `getSunBrightnessFactor`, `getVoidFogYFactor`, `getWeatherRenderer`, `getWorldTime`, `hasSkyLight`, `initCapabilities`, `isBlockHighHumidity`, `isDaytime`, `isNether`, `isSkyColored`, `onPlayerAdded`, `onPlayerRemoved`, `onWorldSave`, `onWorldUpdateEntities`, `resetRainAndThunder`, `setAllowedSpawnTypes`, `setCloudRenderer`, `setDimension`, `setSkyRenderer`, `setSpawnPoint`, `setWeatherRenderer`, `setWorld`, `setWorldTime`, `shouldClientCheckLighting`, `shouldMapSpin`, `updateWeather`

## WorldProviderSurface

*class* `net.minecraft.world.WorldProviderSurface`

### Inherited fields
- from `net.minecraft.world.WorldProvider`: `biomeProvider`, `doesWaterVaporize`, `hasSkyLight`, `lightBrightnessTable`, `MOON_PHASE_FACTORS`, `nether`, `world`

### Methods
- `public DimensionType getDimensionType()`
- `public boolean canDropChunk(int x,  int z)`

### Inherited methods
- from `net.minecraft.world.WorldProvider`: `calcSunriseSunsetColors`, `calculateCelestialAngle`, `calculateInitialWeather`, `canBlockFreeze`, `canCoordinateBeSpawn`, `canDoLightning`, `canDoRainSnowIce`, `canMineBlock`, `canRespawnHere`, `canSleepAt`, `canSnowAt`, `createChunkGenerator`, `createWorldBorder`, `doesWaterVaporize`, `doesXZShowFog`, `generateLightBrightnessTable`, `getActualHeight`, `getAverageGroundLevel`, `getBiomeForCoords`, `getBiomeProvider`, `getCloudColor`, `getCloudHeight`, `getCloudRenderer`, `getCurrentMoonPhaseFactor`, `getDimension`, `getFogColor`, `getHeight`, `getHorizon`, `getLightBrightnessTable`, `getLightmapColors`, `getMoonPhase`, `getMovementFactor`, `getMusicType`, `getRandomizedSpawnPoint`, `getRespawnDimension`, `getSaveFolder`, `getSeed`, `getSkyColor`, `getSkyRenderer`, `getSpawnCoordinate`, `getSpawnPoint`, `getStarBrightness`, `getSunBrightness`, `getSunBrightnessFactor`, `getVoidFogYFactor`, `getWeatherRenderer`, `getWorldTime`, `hasSkyLight`, `init`, `initCapabilities`, `isBlockHighHumidity`, `isDaytime`, `isNether`, `isSkyColored`, `isSurfaceWorld`, `onPlayerAdded`, `onPlayerRemoved`, `onWorldSave`, `onWorldUpdateEntities`, `resetRainAndThunder`, `setAllowedSpawnTypes`, `setCloudRenderer`, `setDimension`, `setSkyRenderer`, `setSpawnPoint`, `setWeatherRenderer`, `setWorld`, `setWorldTime`, `shouldClientCheckLighting`, `shouldMapSpin`, `updateWeather`

## WorldServer

*class* `net.minecraft.world.WorldServer`

All Implemented Interfaces: IThreadListener, IBlockAccess, ICapabilityProvider

### Fields
- `public boolean disableLevelSaving`
- `protected final VillageSiege villageSiege`
- `protected java.util.Set<ChunkPos> doneChunks`
  Stores the recently processed (lighting) chunks
- `public java.util.List<Teleporter> customTeleporters`

### Inherited fields
- from `net.minecraft.world.World`: `advancementManager`, `captureBlockSnapshots`, `capturedBlockSnapshots`, `chunkProvider`, `DIST_HASH_MAGIC`, `entitiesById`, `eventListeners`, `findingSpawnPoint`, `functionManager`, `isRemote`, `loadedEntityList`, `loadedTileEntityList`, `lootTable`, `mapStorage`, `MAX_ENTITY_RADIUS`, `pathListener`, `perWorldStorage`, `playerEntities`, `prevRainingStrength`, `prevThunderingStrength`, `profiler`, `provider`, `rainingStrength`, `rand`, `restoringBlockSnapshots`, `saveHandler`, `scheduledUpdatesAreImmediate`, `spawnHostileMobs`, `spawnPeacefulMobs`, `thunderingStrength`, `tickableTileEntities`, `unloadedEntityList`, `updateLCG`, `villageCollection`, `weatherEffects`, `worldInfo`, `worldScoreboard`

### Methods
- `public World init()`
- `public void tick()`
- `public Biome.SpawnListEntry getSpawnListEntryForTypeAt(EnumCreatureType creatureType,  BlockPos pos)`
- `public boolean canCreatureTypeSpawnHere(EnumCreatureType creatureType,  Biome.SpawnListEntry spawnListEntry,  BlockPos pos)`
- `public void updateAllPlayersSleepingFlag()`
- `protected void wakeAllPlayers()`
- `public boolean areAllPlayersAsleep()`
- `public void setInitialSpawnLocation()`
- `protected boolean isChunkLoaded(int x,  int z,  boolean allowEmpty)`
- `protected void playerCheckLight()`
- `protected void updateBlocks()`
- `protected BlockPos adjustPosToNearbyEntity(BlockPos pos)`
- `public boolean isBlockTickPending(BlockPos pos,  Block blockType)`
- `public boolean isUpdateScheduled(BlockPos pos,  Block blk)`
- `public void scheduleUpdate(BlockPos pos,  Block blockIn,  int delay)`
- `public void updateBlockTick(BlockPos pos,  Block blockIn,  int delay,  int priority)`
- `public void scheduleBlockUpdate(BlockPos pos,  Block blockIn,  int delay,  int priority)`
- `public void updateEntities()`
- `protected void tickPlayers()`
- `public void resetUpdateEntityTick()`
- `public boolean tickUpdates(boolean runAllPending)`
- `public java.util.List<NextTickListEntry> getPendingBlockUpdates(Chunk chunkIn,  boolean remove)`
- `public java.util.List<NextTickListEntry> getPendingBlockUpdates(StructureBoundingBox structureBB,  boolean remove)`
- `public void updateEntityWithOptionalForce(Entity entityIn,  boolean forceUpdate)`
- `protected IChunkProvider createChunkProvider()`
- `public boolean isBlockModifiable(EntityPlayer player,  BlockPos pos)`
- `public boolean canMineBlockBody(EntityPlayer player,  BlockPos pos)`
- `public void initialize(WorldSettings settings)`
- `protected void createBonusChest()`
- `public BlockPos getSpawnCoordinate()`
- `public void saveAllChunks(boolean all,  IProgressUpdate progressCallback)  throws MinecraftException`
  - throws: MinecraftException
- `public void flushToDisk()`
- `protected void saveLevel()  throws MinecraftException`
  - throws: MinecraftException
- `public boolean spawnEntity(Entity entityIn)`
- `public void loadEntities(java.util.Collection<Entity> entityCollection)`
- `public void onEntityAdded(Entity entityIn)`
- `public void onEntityRemoved(Entity entityIn)`
- `public boolean addWeatherEffect(Entity entityIn)`
- `public void setEntityState(Entity entityIn,  byte state)`
- `public ChunkProviderServer getChunkProvider()`
- `public Explosion newExplosion(Entity entityIn,  double x,  double y,  double z,  float strength,  boolean isFlaming,  boolean isSmoking)`
- `public void addBlockEvent(BlockPos pos,  Block blockIn,  int eventID,  int eventParam)`
- `public void flush()`
- `protected void updateWeather()`
- `public MinecraftServer getMinecraftServer()`
- `public EntityTracker getEntityTracker()`
- `public PlayerChunkMap getPlayerChunkMap()`
- `public Teleporter getDefaultTeleporter()`
- `public TemplateManager getStructureTemplateManager()`
- `public void spawnParticle(EnumParticleTypes particleType,  double xCoord,  double yCoord,  double zCoord,  int numberOfParticles,  double xOffset,  double yOffset,  double zOffset,  double particleSpeed,  int... particleArguments)`
- `public void spawnParticle(EnumParticleTypes particleType,  boolean longDistance,  double xCoord,  double yCoord,  double zCoord,  int numberOfParticles,  double xOffset,  double yOffset,  double zOffset,  double particleSpeed,  int... particleArguments)`
- `public void spawnParticle(EntityPlayerMP player,  EnumParticleTypes particle,  boolean longDistance,  double x,  double y,  double z,  int count,  double xOffset,  double yOffset,  double zOffset,  double speed,  int... arguments)`
- `public Entity getEntityFromUuid(java.util.UUID uuid)`
- `public <any> addScheduledTask(java.lang.Runnable runnableToSchedule)`
- `public boolean isCallingFromMinecraftThread()`
- `public BlockPos findNearestStructure(java.lang.String p_190528_1_,  BlockPos p_190528_2_,  boolean p_190528_3_)`
- `public AdvancementManager getAdvancementManager()`
- `public FunctionManager getFunctionManager()`
- `public java.io.File getChunkSaveLocation()`

### Inherited methods
- from `net.minecraft.world.World`: `addEventListener`, `addTileEntities`, `addTileEntity`, `addWorldInfoToCrashReport`, `calculateInitialSkylight`, `calculateInitialWeather`, `calculateInitialWeatherBody`, `calculateSkylightSubtracted`, `canBlockFreeze`, `canBlockFreezeBody`, `canBlockFreezeNoWater`, `canBlockFreezeWater`, `canBlockSeeSky`, `canSeeSky`, `canSnowAt`, `canSnowAtBody`, `checkBlockCollision`, `checkLight`, `checkLightFor`, `checkNoEntityCollision`, `checkNoEntityCollision`, `checkSessionLock`, `collidesWithAnyBlock`, `containsAnyLiquid`, `countEntities`, `countEntities`, `createExplosion`, `destroyBlock`, `extinguishFire`, `findNearestEntityWithinAABB`, `getActualHeight`, `getBiome`, `getBiomeForCoordsBody`, `getBiomeProvider`, `getBlockDensity`, `getBlockLightOpacity`, `getBlockState`, `getCapability`, `getCelestialAngle`, `getCelestialAngleRadians`, `getChunkFromBlockCoords`, `getChunkFromChunkCoords`, `getChunksLowestHorizon`, `getClosestPlayer`, `getClosestPlayer`, `getClosestPlayerToEntity`, `getCloudColorBody`, `getCloudColour`, `getCollisionBoxes`, `getCombinedLight`, `getCurrentDate`, `getCurrentMoonPhaseFactor`, `getCurrentMoonPhaseFactorBody`, `getDebugLoadedEntities`, `getDifficulty`, `getDifficultyForLocation`, `getEntities`, `getEntitiesInAABBexcluding`, `getEntitiesWithinAABB`, `getEntitiesWithinAABB`, `getEntitiesWithinAABBExcludingEntity`, `getEntityByID`, `getFogColor`, `getGameRules`, `getGroundAboveSeaLevel`, `getHeight`, `getHeight`, `getHeight`, `getHorizon`, `getLastLightningBolt`, `getLight`, `getLight`, `getLightBrightness`, `getLightFor`, `getLightFromNeighbors`, `getLightFromNeighborsFor`, `getLoadedEntityList`, `getLootTableManager`, `getMapStorage`, `getMoonPhase`, `getNearestAttackablePlayer`, `getNearestAttackablePlayer`, `getNearestAttackablePlayer`, `getNearestPlayerNotCreative`, `getPersistentChunkIterable`, `getPersistentChunks`, `getPerWorldStorage`, `getPlayerEntityByName`, `getPlayerEntityByUUID`, `getPlayers`, `getPrecipitationHeight`, `getProviderName`, `getRainStrength`, `getRedstonePower`, `getSaveHandler`, `getScoreboard`, `getSeaLevel`, `getSeed`, `getSkyColor`, `getSkyColorBody`, `getSkylightSubtracted`, `getSpawnPoint`, `getStarBrightness`, `getStarBrightnessBody`, `getStrongPower`, `getStrongPower`, `getSunBrightness`, `getSunBrightnessBody`, `getSunBrightnessFactor`, `getThunderStrength`, `getTileEntity`, `getTopSolidOrLiquidBlock`, `getTotalWorldTime`, `getUniqueDataId`, `getVillageCollection`, `getWorldBorder`, `getWorldInfo`, `getWorldTime`, `getWorldType`, `handleMaterialAcceleration`, `hasCapability`, `immediateBlockTick`, `initCapabilities`, `isAirBlock`, `isAnyPlayerWithinRangeAt`, `isAreaLoaded`, `isAreaLoaded`, `isAreaLoaded`, `isAreaLoaded`, `isAreaLoaded`, `isAreaLoaded`, `isBlockFullCube`, `isBlockIndirectlyGettingPowered`, `isBlockinHighHumidity`, `isBlockLoaded`, `isBlockLoaded`, `isBlockNormalCube`, `isBlockPowered`, `isChunkGeneratedAt`, `isDaytime`, `isFlammableWithin`, `isInsideWorldBorder`, `isMaterialInBB`, `isOutsideBuildHeight`, `isRaining`, `isRainingAt`, `isSidePowered`, `isSideSolid`, `isSideSolid`, `isSpawnChunk`, `isThundering`, `isValid`, `joinEntityInSurroundings`, `loadData`, `makeFireworks`, `markAndNotifyBlock`, `markBlockRangeForRenderUpdate`, `markBlockRangeForRenderUpdate`, `markBlocksDirtyVertical`, `markChunkDirty`, `markTileEntitiesInChunkForRemoval`, `markTileEntityForRemoval`, `mayPlace`, `neighborChanged`, `notifyBlockUpdate`, `notifyLightSet`, `notifyNeighborsOfStateChange`, `notifyNeighborsOfStateExcept`, `notifyNeighborsRespectDebug`, `observedNeighborChanged`, `playBroadcastSound`, `playEvent`, `playEvent`, `playMoodSoundAndCheckLight`, `playRecord`, `playSound`, `playSound`, `playSound`, `rayTraceBlocks`, `rayTraceBlocks`, `rayTraceBlocks`, `removeEntity`, `removeEntityDangerously`, `removeEventListener`, `removeTileEntity`, `sendBlockBreakProgress`, `sendPacketToServer`, `sendQuittingDisconnectingPacket`, `setAllowedSpawnTypes`, `setBlockState`, `setBlockState`, `setBlockToAir`, `setData`, `setLastLightningBolt`, `setLightFor`, `setRainStrength`, `setRandomSeed`, `setSeaLevel`, `setSkylightSubtracted`, `setSpawnPoint`, `setThunderStrength`, `setTileEntity`, `setTotalWorldTime`, `setWorldTime`, `spawnAlwaysVisibleParticle`, `spawnParticle`, `spawnParticle`, `unloadEntities`, `updateComparatorOutputLevel`, `updateEntity`, `updateObservingBlocksAt`, `updateWeatherBody`

## WorldServerDemo

*class* `net.minecraft.world.WorldServerDemo`

All Implemented Interfaces: IThreadListener, IBlockAccess, ICapabilityProvider

### Fields
- `public static final WorldSettings DEMO_WORLD_SETTINGS`

### Inherited fields
- from `net.minecraft.world.WorldServer`: `customTeleporters`, `disableLevelSaving`, `doneChunks`, `villageSiege`
- from `net.minecraft.world.World`: `advancementManager`, `captureBlockSnapshots`, `capturedBlockSnapshots`, `chunkProvider`, `DIST_HASH_MAGIC`, `entitiesById`, `eventListeners`, `findingSpawnPoint`, `functionManager`, `isRemote`, `loadedEntityList`, `loadedTileEntityList`, `lootTable`, `mapStorage`, `MAX_ENTITY_RADIUS`, `pathListener`, `perWorldStorage`, `playerEntities`, `prevRainingStrength`, `prevThunderingStrength`, `profiler`, `provider`, `rainingStrength`, `rand`, `restoringBlockSnapshots`, `saveHandler`, `scheduledUpdatesAreImmediate`, `spawnHostileMobs`, `spawnPeacefulMobs`, `thunderingStrength`, `tickableTileEntities`, `unloadedEntityList`, `updateLCG`, `villageCollection`, `weatherEffects`, `worldInfo`, `worldScoreboard`

### Inherited methods
- from `net.minecraft.world.WorldServer`: `addBlockEvent`, `addScheduledTask`, `addWeatherEffect`, `adjustPosToNearbyEntity`, `areAllPlayersAsleep`, `canCreatureTypeSpawnHere`, `canMineBlockBody`, `createBonusChest`, `createChunkProvider`, `findNearestStructure`, `flush`, `flushToDisk`, `getAdvancementManager`, `getChunkProvider`, `getChunkSaveLocation`, `getDefaultTeleporter`, `getEntityFromUuid`, `getEntityTracker`, `getFunctionManager`, `getMinecraftServer`, `getPendingBlockUpdates`, `getPendingBlockUpdates`, `getPlayerChunkMap`, `getSpawnCoordinate`, `getSpawnListEntryForTypeAt`, `getStructureTemplateManager`, `init`, `initialize`, `isBlockModifiable`, `isBlockTickPending`, `isCallingFromMinecraftThread`, `isChunkLoaded`, `isUpdateScheduled`, `loadEntities`, `newExplosion`, `onEntityAdded`, `onEntityRemoved`, `playerCheckLight`, `resetUpdateEntityTick`, `saveAllChunks`, `saveLevel`, `scheduleBlockUpdate`, `scheduleUpdate`, `setEntityState`, `setInitialSpawnLocation`, `spawnEntity`, `spawnParticle`, `spawnParticle`, `spawnParticle`, `tick`, `tickPlayers`, `tickUpdates`, `updateAllPlayersSleepingFlag`, `updateBlocks`, `updateBlockTick`, `updateEntities`, `updateEntityWithOptionalForce`, `updateWeather`, `wakeAllPlayers`
- from `net.minecraft.world.World`: `addEventListener`, `addTileEntities`, `addTileEntity`, `addWorldInfoToCrashReport`, `calculateInitialSkylight`, `calculateInitialWeather`, `calculateInitialWeatherBody`, `calculateSkylightSubtracted`, `canBlockFreeze`, `canBlockFreezeBody`, `canBlockFreezeNoWater`, `canBlockFreezeWater`, `canBlockSeeSky`, `canSeeSky`, `canSnowAt`, `canSnowAtBody`, `checkBlockCollision`, `checkLight`, `checkLightFor`, `checkNoEntityCollision`, `checkNoEntityCollision`, `checkSessionLock`, `collidesWithAnyBlock`, `containsAnyLiquid`, `countEntities`, `countEntities`, `createExplosion`, `destroyBlock`, `extinguishFire`, `findNearestEntityWithinAABB`, `getActualHeight`, `getBiome`, `getBiomeForCoordsBody`, `getBiomeProvider`, `getBlockDensity`, `getBlockLightOpacity`, `getBlockState`, `getCapability`, `getCelestialAngle`, `getCelestialAngleRadians`, `getChunkFromBlockCoords`, `getChunkFromChunkCoords`, `getChunksLowestHorizon`, `getClosestPlayer`, `getClosestPlayer`, `getClosestPlayerToEntity`, `getCloudColorBody`, `getCloudColour`, `getCollisionBoxes`, `getCombinedLight`, `getCurrentDate`, `getCurrentMoonPhaseFactor`, `getCurrentMoonPhaseFactorBody`, `getDebugLoadedEntities`, `getDifficulty`, `getDifficultyForLocation`, `getEntities`, `getEntitiesInAABBexcluding`, `getEntitiesWithinAABB`, `getEntitiesWithinAABB`, `getEntitiesWithinAABBExcludingEntity`, `getEntityByID`, `getFogColor`, `getGameRules`, `getGroundAboveSeaLevel`, `getHeight`, `getHeight`, `getHeight`, `getHorizon`, `getLastLightningBolt`, `getLight`, `getLight`, `getLightBrightness`, `getLightFor`, `getLightFromNeighbors`, `getLightFromNeighborsFor`, `getLoadedEntityList`, `getLootTableManager`, `getMapStorage`, `getMoonPhase`, `getNearestAttackablePlayer`, `getNearestAttackablePlayer`, `getNearestAttackablePlayer`, `getNearestPlayerNotCreative`, `getPersistentChunkIterable`, `getPersistentChunks`, `getPerWorldStorage`, `getPlayerEntityByName`, `getPlayerEntityByUUID`, `getPlayers`, `getPrecipitationHeight`, `getProviderName`, `getRainStrength`, `getRedstonePower`, `getSaveHandler`, `getScoreboard`, `getSeaLevel`, `getSeed`, `getSkyColor`, `getSkyColorBody`, `getSkylightSubtracted`, `getSpawnPoint`, `getStarBrightness`, `getStarBrightnessBody`, `getStrongPower`, `getStrongPower`, `getSunBrightness`, `getSunBrightnessBody`, `getSunBrightnessFactor`, `getThunderStrength`, `getTileEntity`, `getTopSolidOrLiquidBlock`, `getTotalWorldTime`, `getUniqueDataId`, `getVillageCollection`, `getWorldBorder`, `getWorldInfo`, `getWorldTime`, `getWorldType`, `handleMaterialAcceleration`, `hasCapability`, `immediateBlockTick`, `initCapabilities`, `isAirBlock`, `isAnyPlayerWithinRangeAt`, `isAreaLoaded`, `isAreaLoaded`, `isAreaLoaded`, `isAreaLoaded`, `isAreaLoaded`, `isAreaLoaded`, `isBlockFullCube`, `isBlockIndirectlyGettingPowered`, `isBlockinHighHumidity`, `isBlockLoaded`, `isBlockLoaded`, `isBlockNormalCube`, `isBlockPowered`, `isChunkGeneratedAt`, `isDaytime`, `isFlammableWithin`, `isInsideWorldBorder`, `isMaterialInBB`, `isOutsideBuildHeight`, `isRaining`, `isRainingAt`, `isSidePowered`, `isSideSolid`, `isSideSolid`, `isSpawnChunk`, `isThundering`, `isValid`, `joinEntityInSurroundings`, `loadData`, `makeFireworks`, `markAndNotifyBlock`, `markBlockRangeForRenderUpdate`, `markBlockRangeForRenderUpdate`, `markBlocksDirtyVertical`, `markChunkDirty`, `markTileEntitiesInChunkForRemoval`, `markTileEntityForRemoval`, `mayPlace`, `neighborChanged`, `notifyBlockUpdate`, `notifyLightSet`, `notifyNeighborsOfStateChange`, `notifyNeighborsOfStateExcept`, `notifyNeighborsRespectDebug`, `observedNeighborChanged`, `playBroadcastSound`, `playEvent`, `playEvent`, `playMoodSoundAndCheckLight`, `playRecord`, `playSound`, `playSound`, `playSound`, `rayTraceBlocks`, `rayTraceBlocks`, `rayTraceBlocks`, `removeEntity`, `removeEntityDangerously`, `removeEventListener`, `removeTileEntity`, `sendBlockBreakProgress`, `sendPacketToServer`, `sendQuittingDisconnectingPacket`, `setAllowedSpawnTypes`, `setBlockState`, `setBlockState`, `setBlockToAir`, `setData`, `setLastLightningBolt`, `setLightFor`, `setRainStrength`, `setRandomSeed`, `setSeaLevel`, `setSkylightSubtracted`, `setSpawnPoint`, `setThunderStrength`, `setTileEntity`, `setTotalWorldTime`, `setWorldTime`, `spawnAlwaysVisibleParticle`, `spawnParticle`, `spawnParticle`, `unloadEntities`, `updateComparatorOutputLevel`, `updateEntity`, `updateObservingBlocksAt`, `updateWeatherBody`

## WorldServerMulti

*class* `net.minecraft.world.WorldServerMulti`

All Implemented Interfaces: IThreadListener, IBlockAccess, ICapabilityProvider

### Inherited fields
- from `net.minecraft.world.WorldServer`: `customTeleporters`, `disableLevelSaving`, `doneChunks`, `villageSiege`
- from `net.minecraft.world.World`: `advancementManager`, `captureBlockSnapshots`, `capturedBlockSnapshots`, `chunkProvider`, `DIST_HASH_MAGIC`, `entitiesById`, `eventListeners`, `findingSpawnPoint`, `functionManager`, `isRemote`, `loadedEntityList`, `loadedTileEntityList`, `lootTable`, `mapStorage`, `MAX_ENTITY_RADIUS`, `pathListener`, `perWorldStorage`, `playerEntities`, `prevRainingStrength`, `prevThunderingStrength`, `profiler`, `provider`, `rainingStrength`, `rand`, `restoringBlockSnapshots`, `saveHandler`, `scheduledUpdatesAreImmediate`, `spawnHostileMobs`, `spawnPeacefulMobs`, `thunderingStrength`, `tickableTileEntities`, `unloadedEntityList`, `updateLCG`, `villageCollection`, `weatherEffects`, `worldInfo`, `worldScoreboard`

### Methods
- `protected void saveLevel()  throws MinecraftException`
  - throws: MinecraftException
- `public World init()`
- `public void flush()`
- `public void saveAdditionalData()`

### Inherited methods
- from `net.minecraft.world.WorldServer`: `addBlockEvent`, `addScheduledTask`, `addWeatherEffect`, `adjustPosToNearbyEntity`, `areAllPlayersAsleep`, `canCreatureTypeSpawnHere`, `canMineBlockBody`, `createBonusChest`, `createChunkProvider`, `findNearestStructure`, `flushToDisk`, `getAdvancementManager`, `getChunkProvider`, `getChunkSaveLocation`, `getDefaultTeleporter`, `getEntityFromUuid`, `getEntityTracker`, `getFunctionManager`, `getMinecraftServer`, `getPendingBlockUpdates`, `getPendingBlockUpdates`, `getPlayerChunkMap`, `getSpawnCoordinate`, `getSpawnListEntryForTypeAt`, `getStructureTemplateManager`, `initialize`, `isBlockModifiable`, `isBlockTickPending`, `isCallingFromMinecraftThread`, `isChunkLoaded`, `isUpdateScheduled`, `loadEntities`, `newExplosion`, `onEntityAdded`, `onEntityRemoved`, `playerCheckLight`, `resetUpdateEntityTick`, `saveAllChunks`, `scheduleBlockUpdate`, `scheduleUpdate`, `setEntityState`, `setInitialSpawnLocation`, `spawnEntity`, `spawnParticle`, `spawnParticle`, `spawnParticle`, `tick`, `tickPlayers`, `tickUpdates`, `updateAllPlayersSleepingFlag`, `updateBlocks`, `updateBlockTick`, `updateEntities`, `updateEntityWithOptionalForce`, `updateWeather`, `wakeAllPlayers`
- from `net.minecraft.world.World`: `addEventListener`, `addTileEntities`, `addTileEntity`, `addWorldInfoToCrashReport`, `calculateInitialSkylight`, `calculateInitialWeather`, `calculateInitialWeatherBody`, `calculateSkylightSubtracted`, `canBlockFreeze`, `canBlockFreezeBody`, `canBlockFreezeNoWater`, `canBlockFreezeWater`, `canBlockSeeSky`, `canSeeSky`, `canSnowAt`, `canSnowAtBody`, `checkBlockCollision`, `checkLight`, `checkLightFor`, `checkNoEntityCollision`, `checkNoEntityCollision`, `checkSessionLock`, `collidesWithAnyBlock`, `containsAnyLiquid`, `countEntities`, `countEntities`, `createExplosion`, `destroyBlock`, `extinguishFire`, `findNearestEntityWithinAABB`, `getActualHeight`, `getBiome`, `getBiomeForCoordsBody`, `getBiomeProvider`, `getBlockDensity`, `getBlockLightOpacity`, `getBlockState`, `getCapability`, `getCelestialAngle`, `getCelestialAngleRadians`, `getChunkFromBlockCoords`, `getChunkFromChunkCoords`, `getChunksLowestHorizon`, `getClosestPlayer`, `getClosestPlayer`, `getClosestPlayerToEntity`, `getCloudColorBody`, `getCloudColour`, `getCollisionBoxes`, `getCombinedLight`, `getCurrentDate`, `getCurrentMoonPhaseFactor`, `getCurrentMoonPhaseFactorBody`, `getDebugLoadedEntities`, `getDifficulty`, `getDifficultyForLocation`, `getEntities`, `getEntitiesInAABBexcluding`, `getEntitiesWithinAABB`, `getEntitiesWithinAABB`, `getEntitiesWithinAABBExcludingEntity`, `getEntityByID`, `getFogColor`, `getGameRules`, `getGroundAboveSeaLevel`, `getHeight`, `getHeight`, `getHeight`, `getHorizon`, `getLastLightningBolt`, `getLight`, `getLight`, `getLightBrightness`, `getLightFor`, `getLightFromNeighbors`, `getLightFromNeighborsFor`, `getLoadedEntityList`, `getLootTableManager`, `getMapStorage`, `getMoonPhase`, `getNearestAttackablePlayer`, `getNearestAttackablePlayer`, `getNearestAttackablePlayer`, `getNearestPlayerNotCreative`, `getPersistentChunkIterable`, `getPersistentChunks`, `getPerWorldStorage`, `getPlayerEntityByName`, `getPlayerEntityByUUID`, `getPlayers`, `getPrecipitationHeight`, `getProviderName`, `getRainStrength`, `getRedstonePower`, `getSaveHandler`, `getScoreboard`, `getSeaLevel`, `getSeed`, `getSkyColor`, `getSkyColorBody`, `getSkylightSubtracted`, `getSpawnPoint`, `getStarBrightness`, `getStarBrightnessBody`, `getStrongPower`, `getStrongPower`, `getSunBrightness`, `getSunBrightnessBody`, `getSunBrightnessFactor`, `getThunderStrength`, `getTileEntity`, `getTopSolidOrLiquidBlock`, `getTotalWorldTime`, `getUniqueDataId`, `getVillageCollection`, `getWorldBorder`, `getWorldInfo`, `getWorldTime`, `getWorldType`, `handleMaterialAcceleration`, `hasCapability`, `immediateBlockTick`, `initCapabilities`, `isAirBlock`, `isAnyPlayerWithinRangeAt`, `isAreaLoaded`, `isAreaLoaded`, `isAreaLoaded`, `isAreaLoaded`, `isAreaLoaded`, `isAreaLoaded`, `isBlockFullCube`, `isBlockIndirectlyGettingPowered`, `isBlockinHighHumidity`, `isBlockLoaded`, `isBlockLoaded`, `isBlockNormalCube`, `isBlockPowered`, `isChunkGeneratedAt`, `isDaytime`, `isFlammableWithin`, `isInsideWorldBorder`, `isMaterialInBB`, `isOutsideBuildHeight`, `isRaining`, `isRainingAt`, `isSidePowered`, `isSideSolid`, `isSideSolid`, `isSpawnChunk`, `isThundering`, `isValid`, `joinEntityInSurroundings`, `loadData`, `makeFireworks`, `markAndNotifyBlock`, `markBlockRangeForRenderUpdate`, `markBlockRangeForRenderUpdate`, `markBlocksDirtyVertical`, `markChunkDirty`, `markTileEntitiesInChunkForRemoval`, `markTileEntityForRemoval`, `mayPlace`, `neighborChanged`, `notifyBlockUpdate`, `notifyLightSet`, `notifyNeighborsOfStateChange`, `notifyNeighborsOfStateExcept`, `notifyNeighborsRespectDebug`, `observedNeighborChanged`, `playBroadcastSound`, `playEvent`, `playEvent`, `playMoodSoundAndCheckLight`, `playRecord`, `playSound`, `playSound`, `playSound`, `rayTraceBlocks`, `rayTraceBlocks`, `rayTraceBlocks`, `removeEntity`, `removeEntityDangerously`, `removeEventListener`, `removeTileEntity`, `sendBlockBreakProgress`, `sendPacketToServer`, `sendQuittingDisconnectingPacket`, `setAllowedSpawnTypes`, `setBlockState`, `setBlockState`, `setBlockToAir`, `setData`, `setLastLightningBolt`, `setLightFor`, `setRainStrength`, `setRandomSeed`, `setSeaLevel`, `setSkylightSubtracted`, `setSpawnPoint`, `setThunderStrength`, `setTileEntity`, `setTotalWorldTime`, `setWorldTime`, `spawnAlwaysVisibleParticle`, `spawnParticle`, `spawnParticle`, `unloadEntities`, `updateComparatorOutputLevel`, `updateEntity`, `updateObservingBlocksAt`, `updateWeatherBody`

## WorldSettings

*class* `net.minecraft.world.WorldSettings`

### Methods
- `public WorldSettings enableBonusChest()`
- `public WorldSettings setGeneratorOptions(java.lang.String options)`
- `public WorldSettings enableCommands()`
- `public boolean isBonusChestEnabled()`
- `public long getSeed()`
- `public GameType getGameType()`
- `public boolean getHardcoreEnabled()`
- `public boolean isMapFeaturesEnabled()`
- `public WorldType getTerrainType()`
- `public boolean areCommandsAllowed()`
- `public static GameType getGameTypeById(int id)`
- `public java.lang.String getGeneratorOptions()`

## WorldType

*class* `net.minecraft.world.WorldType`

### Fields
- `public static WorldType[] WORLD_TYPES`
- `public static final WorldType DEFAULT`
- `public static final WorldType FLAT`
- `public static final WorldType LARGE_BIOMES`
- `public static final WorldType AMPLIFIED`
- `public static final WorldType CUSTOMIZED`
- `public static final WorldType DEBUG_ALL_BLOCK_STATES`
- `public static final WorldType DEFAULT_1_1`

### Methods
- `public java.lang.String getName()`
- `public java.lang.String getTranslationKey()`
- `public java.lang.String getInfoTranslationKey()`
- `public int getVersion()`
- `public WorldType getWorldTypeForGeneratorVersion(int version)`
- `public boolean canBeCreated()`
- `public boolean isVersioned()`
- `public static WorldType parseWorldType(java.lang.String type)`
- `public int getId()`
- `public boolean hasInfoNotice()`
- `public BiomeProvider getBiomeProvider(World world)`
- `public IChunkGenerator getChunkGenerator(World world,  java.lang.String generatorOptions)`
- `public int getMinimumSpawnHeight(World world)`
- `public double getHorizon(World world)`
- `public double voidFadeMagnitude()`
- `public boolean handleSlimeSpawnReduction(java.util.Random random,  World world)`
- `public void onGUICreateWorldPress()`
  Called when 'Create New World' button is pressed before starting game
- `public int getSpawnFuzz(WorldServer world,  MinecraftServer server)`
  Gets the spawn fuzz for players who join the world.
   Useful for void world types.
  - returns: Fuzz for entity initial spawn in blocks.
- `public void onCustomizeButton(Minecraft mc,  GuiCreateWorld guiCreateWorld)`
  Called when the 'Customize' button is pressed on world creation GUI
  - param: mc - The Minecraft instance
  - param: guiCreateWorld - the createworld GUI
- `public boolean isCustomizable()`
  Should world creation GUI show 'Customize' button for this world type?
  - returns: if this world type has customization parameters
- `public float getCloudHeight()`
  Get the height to render the clouds for this world type
  - returns: The height to render clouds at
- `public GenLayer getBiomeLayer(long worldSeed,  GenLayer parentLayer,  ChunkGeneratorSettings chunkSettings)`
  Creates the GenLayerBiome used for generating the world with the specified ChunkProviderSettings JSON String
   *IF AND ONLY IF* this WorldType == WorldType.CUSTOMIZED.
  - param: worldSeed - The world seed
  - param: parentLayer - The parent layer to feed into any layer you return
  - param: chunkSettings - The ChunkGeneratorSettings constructed from the custom JSON
  - returns: A GenLayer that will return ints representing the Biomes to be generated, see GenLayerBiome
