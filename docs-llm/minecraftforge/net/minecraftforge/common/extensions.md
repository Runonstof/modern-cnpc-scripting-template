# net.minecraftforge.common.extensions

- [Class IForgeHolderSet.SerializationType](#class-iforgeholderset.serializationtype)
- [IForgeAbstractMinecart](#iforgeabstractminecart)
- [IForgeBaseRailBlock](#iforgebaserailblock)
- [IForgeBlock](#iforgeblock)
- [IForgeBlockEntity](#iforgeblockentity)
- [IForgeBlockGetter](#iforgeblockgetter)
- [IForgeBlockState](#iforgeblockstate)
- [IForgeBoat](#iforgeboat)
- [IForgeBucketPickup](#iforgebucketpickup)
- [IForgeCommandSourceStack](#iforgecommandsourcestack)
- [IForgeDispensibleContainerItem](#iforgedispensiblecontaineritem)
- [IForgeEnchantment](#iforgeenchantment)
- [IForgeEntity](#iforgeentity)
- [IForgeFluid](#iforgefluid)
- [IForgeFluidState](#iforgefluidstate)
- [IForgeFriendlyByteBuf](#iforgefriendlybytebuf)
- [IForgeGameTestHelper](#iforgegametesthelper)
- [IForgeHolderSet](#iforgeholderset)
- [IForgeIntrinsicHolderTagAppender](#iforgeintrinsicholdertagappender)
- [IForgeItem](#iforgeitem)
- [IForgeItemStack](#iforgeitemstack)
- [IForgeLevel](#iforgelevel)
- [IForgeLevelChunk](#iforgelevelchunk)
- [IForgeLivingEntity](#iforgelivingentity)
- [IForgeMenuType](#iforgemenutype)
- [IForgeMobEffect](#iforgemobeffect)
- [IForgeMobEffectInstance](#iforgemobeffectinstance)
- [IForgePackResources](#iforgepackresources)
- [IForgePlayer](#iforgeplayer)
- [IForgePotion](#iforgepotion)
- [IForgeRawTagBuilder](#iforgerawtagbuilder)
- [IForgeServerPlayer](#iforgeserverplayer)
- [IForgeTagAppender](#iforgetagappender)
- [IForgeTransformation](#iforgetransformation)
## Class IForgeHolderSet.SerializationType

*enum* `net.minecraftforge.common.extensions.Class IForgeHolderSet.SerializationType`

What format a holderset serializes to in json/nbt/etc

Enclosing interface: IForgeHolderSet<T>

### Methods
- `public static IForgeHolderSet.SerializationType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static IForgeHolderSet.SerializationType valueOf(String name)`
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

## IForgeAbstractMinecart

*interface* `net.minecraftforge.common.extensions.IForgeAbstractMinecart`

### Fields
- `static final float DEFAULT_MAX_SPEED_AIR_LATERAL` (= 0.4000000059604645f)
- `static final float DEFAULT_MAX_SPEED_AIR_VERTICAL` (= -1.0f)
- `static final double DEFAULT_AIR_DRAG` (= 0.949999988079071)

### Methods
- `private AbstractMinecart self()`
- `default BlockPos getCurrentRailPosition()`
  Internal, returns the current spot to look for the attached rail.
- `double getMaxSpeedWithRail()`
- `void moveMinecartOnRail(BlockPos pos)`
  Moved to allow overrides.
   This code handles minecart movement and speed capping when on a rail.
- `boolean canUseRail()`
  Returns true if this cart can currently use rails.
   This function is mainly used to gracefully detach a minecart from a rail.
  - returns: True if the minecart can use rails.
- `void setCanUseRail(boolean use)`
  Set whether the minecart can use rails.
   This function is mainly used to gracefully detach a minecart from a rail.
  - param: use - Whether the minecart can currently use rails.
- `default boolean shouldDoRailFunctions()`
  Return false if this cart should not call onMinecartPass() and should ignore Powered Rails.
  - returns: True if this cart should call onMinecartPass().
- `default boolean isPoweredCart()`
  Returns true if this cart is self propelled.
  - returns: True if powered.
- `default boolean canBeRidden()`
  Returns true if this cart can be ridden by an Entity.
  - returns: True if this cart can be ridden.
- `default float getMaxCartSpeedOnRail()`
  Returns the carts max speed when traveling on rails. Carts going faster
   than 1.1 cause issues with chunk loading. Carts cant traverse slopes or
   corners at greater than 0.5 - 0.6. This value is compared with the rails
   max speed and the carts current speed cap to determine the carts current
   max speed. A normal rail's max speed is 0.4.
  - returns: Carts max speed.
- `float getCurrentCartSpeedCapOnRail()`
  Returns the current speed cap for the cart when traveling on rails. This
   functions differs from getMaxCartSpeedOnRail() in that it controls
   current movement and cannot be overridden. The value however can never be
   higher than getMaxCartSpeedOnRail().
- `void setCurrentCartSpeedCapOnRail(float value)`
- `float getMaxSpeedAirLateral()`
- `void setMaxSpeedAirLateral(float value)`
- `float getMaxSpeedAirVertical()`
- `void setMaxSpeedAirVertical(float value)`
- `double getDragAir()`
- `void setDragAir(double value)`
- `default double getSlopeAdjustment()`
- `default int getComparatorLevel()`
  Called from Detector Rails to retrieve a redstone power level for comparators.

## IForgeBaseRailBlock

*interface* `net.minecraftforge.common.extensions.IForgeBaseRailBlock`

### Methods
- `boolean isFlexibleRail(BlockState state,  BlockGetter level,  BlockPos pos)`
  Return true if the rail can make corners.
   Used by placement logic.
  - param: level - The level.
  - param: pos - Block's position in level
  - returns: True if the rail can make corners.
- `default boolean canMakeSlopes(BlockState state,  BlockGetter level,  BlockPos pos)`
  Returns true if the rail can make up and down slopes.
   Used by placement logic.
  - param: level - The level.
  - param: pos - Block's position in level
  - returns: True if the rail can make slopes.
- `RailShape getRailDirection(BlockState state,  BlockGetter level,  BlockPos pos,  @Nullable  @Nullable AbstractMinecart cart)`
  Return the rail's direction.
   Can be used to make the cart think the rail is a different shape,
   for example when making diamond junctions or switches.
   The cart parameter will often be null unless it it called from EntityMinecart.
  - param: level - The level.
  - param: pos - Block's position in level
  - param: state - The BlockState
  - param: cart - The cart asking for the metadata, null if it is not called by EntityMinecart.
  - returns: The direction.
- `default float getRailMaxSpeed(BlockState state,  Level level,  BlockPos pos,  AbstractMinecart cart)`
  Returns the max speed of the rail at the specified position.
  - param: level - The level.
  - param: cart - The cart on the rail, may be null.
  - param: pos - Block's position in level
  - returns: The max speed of the current rail.
- `default void onMinecartPass(BlockState state,  Level level,  BlockPos pos,  AbstractMinecart cart)`
  This function is called by any minecart that passes over this rail.
   It is called once per update tick that the minecart is on the rail.
  - param: level - The level.
  - param: cart - The cart on the rail.
  - param: pos - Block's position in level
- `default boolean isValidRailShape(RailShape shape)`
  Returns true if the given RailShape is valid for this rail block.
   This is called when the RailShape for the initial placement of this block is calculated or
   when another rail block tries to connect to this block and this block's RailState calculates
   the new RailShape for its current neigbors.
  - param: shape - The new RailShape
  - returns: True when the given RailShape is valid

## IForgeBlock

*interface* `net.minecraftforge.common.extensions.IForgeBlock`

### Methods
- `private Block self()`
- `default float getFriction(BlockState state,  LevelReader level,  BlockPos pos,  @Nullable  @Nullable Entity entity)`
  Gets the slipperiness at the given location at the given state. Normally
   between 0 and 1.
  
   Note that entities may reduce slipperiness by a certain factor of their own;
   for LivingEntity, this is .91.
   ItemEntity uses .98, and
   FishingHook uses .92.
  - param: state - state of the block
  - param: level - the level
  - param: pos - the position in the level
  - param: entity - the entity in question
  - returns: the factor by which the entity's motion should be multiplied
- `default int getLightEmission(BlockState state,  BlockGetter level,  BlockPos pos)`
  Get a light value for this block, taking into account the given state and coordinates, normal ranges are between 0 and 15
  - param: state - The state of this block
  - param: level - The level this block is in
  - param: pos - The position of this block in the level, will be BlockPos.ZERO when the chunk being loaded or
 generated calls this to check whether it contains any light sources
  - returns: The light value
- `default boolean isLadder(BlockState state,  LevelReader level,  BlockPos pos,  LivingEntity entity)`
  Checks if a player or entity can use this block to 'climb' like a ladder.
  - param: state - The current state
  - param: level - The current level
  - param: pos - Block position in level
  - param: entity - The entity trying to use the ladder, CAN be null.
  - returns: True if the block should act like a ladder
- `default boolean makesOpenTrapdoorAboveClimbable(BlockState state,  LevelReader level,  BlockPos pos,  BlockState trapdoorState)`
  Checks if this block makes an open trapdoor above it climbable.
  - param: state - The current state
  - param: level - The current level
  - param: pos - Block position in level
  - param: trapdoorState - The current state of the open trapdoor above
  - returns: True if the block should act like a ladder
- `default boolean isBurning(BlockState state,  BlockGetter level,  BlockPos pos)`
  Determines if this block should set fire and deal fire damage
   to entities coming into contact with it.
  - param: level - The current level
  - param: pos - Block position in level
  - returns: True if the block should deal damage
- `default boolean canHarvestBlock(BlockState state,  BlockGetter level,  BlockPos pos,  Player player)`
  Determines if the player can harvest this block, obtaining it's drops when the block is destroyed.
  - param: level - The current level
  - param: pos - The block's current position
  - param: player - The player damaging the block
  - returns: True to spawn the drops
- `default boolean onDestroyedByPlayer(BlockState state,  Level level,  BlockPos pos,  Player player,  boolean willHarvest,  FluidState fluid)`
  Called when a player removes a block. This is responsible for
   actually destroying the block, and the block is intact at time of call.
   This is called regardless of whether the player can harvest the block or
   not.
  
   Return true if the block is actually destroyed.
  
   Note: When used in multiplayer, this is called on both client and
   server sides!
  - param: state - The current state.
  - param: level - The current level
  - param: player - The player damaging the block, may be null
  - param: pos - Block position in level
  - param: willHarvest - True if Block.harvestBlock will be called after this, if the return in true.
 Can be useful to delay the destruction of tile entities till after harvestBlock
  - param: fluid - The current fluid state at current position
  - returns: True if the block is actually destroyed.
- `default boolean isBed(BlockState state,  BlockGetter level,  BlockPos pos,  @Nullable  @Nullable Entity player)`
  Determines if this block is classified as a Bed, Allowing
   players to sleep in it, though the block has to specifically
   perform the sleeping functionality in it's activated event.
  - param: state - The current state
  - param: level - The current level
  - param: pos - Block position in level
  - param: player - The player or camera entity, null in some cases.
  - returns: True to treat this as a bed
- `default Optional<Vec3> getRespawnPosition(BlockState state,  EntityType<?> type,  LevelReader levelReader,  BlockPos pos,  float orientation,  @Nullable  @Nullable LivingEntity entity)`
  Returns the position that the entity is moved to upon
   respawning at this block.
  - param: state - The current state
  - param: type - The entity type used when checking if a dismount blockstate is dangerous. Currently always PLAYER.
  - param: levelReader - The current level
  - param: pos - Block position in level
  - param: orientation - The angle the entity had when setting the respawn point
  - param: entity - The entity respawning, often null
  - returns: The spawn position or the empty optional if respawning here is not possible
- `default boolean isValidSpawn(BlockState state,  BlockGetter level,  BlockPos pos,  SpawnPlacements.Type type,  EntityType<?> entityType)`
  Determines if a specified mob type can spawn on this block, returning false will
   prevent any mob from spawning on the block.
  - param: state - The current state
  - param: level - The current level
  - param: pos - Block position in level
  - param: type - The Mob Category Type
  - returns: True to allow a mob of the specified category to spawn, false to prevent it.
- `default void setBedOccupied(BlockState state,  Level level,  BlockPos pos,  LivingEntity sleeper,  boolean occupied)`
  Called when a user either starts or stops sleeping in the bed.
  - param: level - The current level
  - param: pos - Block position in level
  - param: sleeper - The sleeper or camera entity, null in some cases.
  - param: occupied - True if we are occupying the bed, or false if they are stopping use of the bed
- `default Direction getBedDirection(BlockState state,  LevelReader level,  BlockPos pos)`
  Returns the direction of the block. Same values that
   are returned by BlockDirectional. Called every frame tick for every living entity. Be VERY fast.
  - param: state - The current state
  - param: level - The current level
  - param: pos - Block position in level
  - returns: Bed direction
- `default float getExplosionResistance(BlockState state,  BlockGetter level,  BlockPos pos,  Explosion explosion)`
  Location sensitive version of getExplosionResistance
  - param: level - The current level
  - param: pos - Block position in level
  - param: explosion - The explosion
  - returns: The amount of the explosion absorbed.
- `default ItemStack getCloneItemStack(BlockState state,  HitResult target,  BlockGetter level,  BlockPos pos,  Player player)`
  Called when A user uses the creative pick block button on this block
  - param: target - The full target the player is looking at
  - returns: A ItemStack to add to the player's inventory, empty itemstack if nothing should be added.
- `default boolean addLandingEffects(BlockState state1,  ServerLevel level,  BlockPos pos,  BlockState state2,  LivingEntity entity,  int numberOfParticles)`
  Allows a block to override the standard EntityLivingBase.updateFallState
   particles, this is a server side method that spawns particles with
   WorldServer.spawnParticle.
  - param: level - The current server level
  - param: pos - The position of the block.
  - param: state2 - The state at the specific level/pos
  - param: entity - The entity that hit landed on the block
  - param: numberOfParticles - That vanilla level have spawned
  - returns: True to prevent vanilla landing particles from spawning
- `default boolean addRunningEffects(BlockState state,  Level level,  BlockPos pos,  Entity entity)`
  Allows a block to override the standard vanilla running particles.
   This is called from Entity.spawnSprintParticle and is called both,
   Client and server side, it's up to the implementor to client check / server check.
   By default vanilla spawns particles only on the client and the server methods no-op.
  - param: state - The BlockState the entity is running on.
  - param: level - The level.
  - param: pos - The position at the entities feet.
  - param: entity - The entity running on the block.
  - returns: True to prevent vanilla running particles from spawning.
- `boolean canSustainPlant(BlockState state,  BlockGetter level,  BlockPos pos,  Direction facing,  IPlantable plantable)`
  Determines if this block can support the passed in plant, allowing it to be planted and grow.
   Some examples:
   Reeds check if its a reed, or if its sand/dirt/grass and adjacent to water
   Cacti checks if its a cacti, or if its sand
   Nether types check for soul sand
   Crops check for tilled soil
   Caves check if it's a solid surface
   Plains check if its grass or dirt
   Water check if its still water
  - param: state - The Current state
  - param: level - The current level
  - param: facing - The direction relative to the given position the plant wants to be, typically its UP
  - param: plantable - The plant that wants to check
  - returns: True to allow the plant to be planted/stay.
- `default boolean onTreeGrow(BlockState state,  LevelReader level,  BiConsumer<BlockPos,BlockState> placeFunction,  RandomSource randomSource,  BlockPos pos,  TreeConfiguration config)`
  Called when a tree grows on top of this block and tries to set it to dirt by the trunk placer.
   An override that returns true is responsible for using the place function to
   set blocks in the world properly during generation. A modded grass block might override this method
   to ensure it turns into the corresponding modded dirt instead of regular dirt when a tree grows on it.
   For modded grass blocks, returning true from this method is NOT a substitute for adding your block
   to the #minecraft:dirt tag, rather for changing the behaviour to something other than setting to dirt.
  
   NOTE: This happens DURING world generation, the generation may be incomplete when this is called.
   Use the placeFunction when modifying the level.
  - param: state - The current state
  - param: level - The current level
  - param: placeFunction - Function to set blocks in the level for the tree, use this instead of the level directly
  - param: randomSource - The random source
  - param: pos - Position of the block to be set to dirt
  - param: config - Configuration of the trunk placer. Consider azalea trees, which should place rooted dirt instead of regular dirt.
  - returns: True to ignore vanilla behaviour
- `default boolean isFertile(BlockState state,  BlockGetter level,  BlockPos pos)`
  Checks if this soil is fertile, typically this means that growth rates
   of plants on this soil will be slightly sped up.
   Only vanilla case is tilledField when it is within range of water.
  - param: level - The current level
  - param: pos - Block position in level
  - returns: True if the soil should be considered fertile.
- `default boolean isConduitFrame(BlockState state,  LevelReader level,  BlockPos pos,  BlockPos conduit)`
  Determines if this block can be used as the frame of a conduit.
  - param: level - The current level
  - param: pos - Block position in level
  - param: conduit - Conduit position in level
  - returns: True, to support the conduit, and make it active with this block.
- `default boolean isPortalFrame(BlockState state,  BlockGetter level,  BlockPos pos)`
  Determines if this block can be used as part of a frame of a nether portal.
  - param: state - The current state
  - param: level - The current level
  - param: pos - Block position in level
  - returns: True, to support being part of a nether portal frame, false otherwise.
- `default int getExpDrop(BlockState state,  LevelReader level,  RandomSource randomSource,  BlockPos pos,  int fortuneLevel,  int silkTouchLevel)`
  Gathers how much experience this block drops when broken.
  - param: state - The current state
  - param: level - The level
  - param: randomSource - Random source to use for experience randomness
  - param: pos - Block position
  - param: fortuneLevel - fortune enchantment level of tool being used
  - param: silkTouchLevel - silk touch enchantment level of tool being used
  - returns: Amount of XP from breaking this block.
- `default BlockState rotate(BlockState state,  LevelAccessor level,  BlockPos pos,  Rotation direction)`
- `default float getEnchantPowerBonus(BlockState state,  LevelReader level,  BlockPos pos)`
  Determines the amount of enchanting power this block can provide to an enchanting table.
  - param: level - The level
  - param: pos - Block position in level
  - returns: The amount of enchanting power this block produces.
- `default void onNeighborChange(BlockState state,  LevelReader level,  BlockPos pos,  BlockPos neighbor)`
  Called when a tile entity on a side of this block changes is created or is destroyed.
  - param: level - The level
  - param: pos - Block position in level
  - param: neighbor - Block position of neighbor
- `default boolean shouldCheckWeakPower(BlockState state,  SignalGetter level,  BlockPos pos,  Direction side)`
  Called to determine whether to allow the block to handle its own indirect power rather than using the default rules.
  - param: level - The level
  - param: pos - Block position in level
  - param: side - The INPUT side of the block to be powered - ie the opposite of this block's output side
  - returns: Whether Block#isProvidingWeakPower should be called when determining indirect power
- `default boolean getWeakChanges(BlockState state,  LevelReader level,  BlockPos pos)`
  If this block should be notified of weak changes.
   Weak changes are changes 1 block away through a solid block.
   Similar to comparators.
  - param: level - The current level
  - param: pos - Block position in level
  - returns: true To be notified of changes
- `default SoundType getSoundType(BlockState state,  LevelReader level,  BlockPos pos,  @Nullable  @Nullable Entity entity)`
  Sensitive version of getSoundType
  - param: state - The state
  - param: level - The level
  - param: pos - The position. Note that the level may not necessarily have state here!
  - param: entity - The entity that is breaking/stepping on/placing/hitting/falling on this block, or null if no entity is in this context
  - returns: A SoundType to use
- `@Nullable default @org.jetbrains.annotations.Nullable float[] getBeaconColorMultiplier(BlockState state,  LevelReader level,  BlockPos pos,  BlockPos beaconPos)`
  - param: state - The state
  - param: level - The level
  - param: pos - The position of this state
  - param: beaconPos - The position of the beacon
  - returns: A float RGB [0.0, 1.0] array to be averaged with a beacon's existing beam color, or null to do nothing to the beam
- `default BlockState getStateAtViewpoint(BlockState state,  BlockGetter level,  BlockPos pos,  Vec3 viewpoint)`
  Used to determine the state 'viewed' by an entity (see
   Camera.getBlockAtCamera()).
   Can be used by fluid blocks to determine if the viewpoint is within the fluid or not.
  - param: state - the state
  - param: level - the level
  - param: pos - the position
  - param: viewpoint - the viewpoint
  - returns: the block state that should be 'seen'
- `@Nullable default @Nullable BlockPathTypes getBlockPathType(BlockState state,  BlockGetter level,  BlockPos pos,  @Nullable  @Nullable Mob mob)`
  Gets the path type of this block when an entity is pathfinding. When
   null, uses vanilla behavior.
  - param: state - the state of the block
  - param: level - the level which contains this block
  - param: pos - the position of the block
  - param: mob - the mob currently pathfinding, may be null
  - returns: the path type of this block
- `@Nullable default @Nullable BlockPathTypes getAdjacentBlockPathType(BlockState state,  BlockGetter level,  BlockPos pos,  @Nullable  @Nullable Mob mob,  BlockPathTypes originalType)`
  Gets the path type of the adjacent block to a pathfinding entity.
   Path types with a negative malus are not traversable for the entity.
   Pathfinding entities will favor paths consisting of a lower malus.
   When null, uses vanilla behavior.
  - param: state - the state of the block
  - param: level - the level which contains this block
  - param: pos - the position of the block
  - param: mob - the mob currently pathfinding, may be null
  - param: originalType - the path type of the source the entity is on
  - returns: the path type of this block
- `default boolean isSlimeBlock(BlockState state)`
  - param: state - The state
  - returns: true if the block is sticky block which used for pull or push adjacent blocks (use by piston)
- `default boolean isStickyBlock(BlockState state)`
  - param: state - The state
  - returns: true if the block is sticky block which used for pull or push adjacent blocks (use by piston)
- `default boolean canStickTo(BlockState state,  BlockState other)`
  Determines if this block can stick to another block when pushed by a piston.
  - param: state - My state
  - param: other - Other block
  - returns: True to link blocks
- `default int getFlammability(BlockState state,  BlockGetter level,  BlockPos pos,  Direction direction)`
  Chance that fire will spread and consume this block.
   300 being a 100% chance, 0, being a 0% chance.
  - param: state - The current state
  - param: level - The current level
  - param: pos - Block position in level
  - param: direction - The direction that the fire is coming from
  - returns: A number ranging from 0 to 300 relating used to determine if the block will be consumed by fire
- `default boolean isFlammable(BlockState state,  BlockGetter level,  BlockPos pos,  Direction direction)`
  Called when fire is updating, checks if a block face can catch fire.
  - param: state - The current state
  - param: level - The current level
  - param: pos - Block position in level
  - param: direction - The direction that the fire is coming from
  - returns: True if the face can be on fire, false otherwise.
- `default void onCaughtFire(BlockState state,  Level level,  BlockPos pos,  @Nullable  @Nullable Direction direction,  @Nullable  @Nullable LivingEntity igniter)`
  If the block is flammable, this is called when it gets lit on fire.
  - param: state - The current state
  - param: level - The current level
  - param: pos - Block position in level
  - param: direction - The direction that the fire is coming from
  - param: igniter - The entity that lit the fire
- `default int getFireSpreadSpeed(BlockState state,  BlockGetter level,  BlockPos pos,  Direction direction)`
  Called when fire is updating on a neighbor block.
   The higher the number returned, the faster fire will spread around this block.
  - param: state - The current state
  - param: level - The current level
  - param: pos - Block position in level
  - param: direction - The direction that the fire is coming from
  - returns: A number that is used to determine the speed of fire growth around the block
- `default boolean isFireSource(BlockState state,  LevelReader level,  BlockPos pos,  Direction direction)`
  Currently only called by fire when it is on top of this block.
   Returning true will prevent the fire from naturally dying during updating.
   Also prevents firing from dying from rain.
  - param: state - The current state
  - param: level - The current level
  - param: pos - Block position in level
  - param: direction - The direction that the fire is coming from
  - returns: True if this block sustains fire, meaning it will never go out.
- `default boolean canEntityDestroy(BlockState state,  BlockGetter level,  BlockPos pos,  Entity entity)`
  Determines if this block is can be destroyed by the specified entities normal behavior.
  - param: state - The current state
  - param: level - The current level
  - param: pos - Block position in level
  - returns: True to allow the ender dragon to destroy this block
- `default boolean canDropFromExplosion(BlockState state,  BlockGetter level,  BlockPos pos,  Explosion explosion)`
  Determines if this block should drop loot when exploded.
- `default void onBlockExploded(BlockState state,  Level level,  BlockPos pos,  Explosion explosion)`
  Called when the block is destroyed by an explosion.
   Useful for allowing the block to take into account tile entities,
   state, etc. when exploded, before it is removed.
  - param: level - The current level
  - param: pos - Block position in level
  - param: explosion - The explosion instance affecting the block
- `default boolean collisionExtendsVertically(BlockState state,  BlockGetter level,  BlockPos pos,  Entity collidingEntity)`
  Determines if this block's collision box should be treated as though it can extend above its block space.
   Use this to replicate fence and wall behavior.
- `default boolean shouldDisplayFluidOverlay(BlockState state,  BlockAndTintGetter level,  BlockPos pos,  FluidState fluidState)`
  Called to determine whether this block should use the fluid overlay texture or flowing texture when it is placed under the fluid.
  - param: state - The current state
  - param: level - The level
  - param: pos - Block position in level
  - param: fluidState - The state of the fluid
  - returns: Whether the fluid overlay texture should be used
- `@Nullable default @Nullable BlockState getToolModifiedState(BlockState state,  UseOnContext context,  ToolAction toolAction,  boolean simulate)`
  Returns the state that this block should transform into when right-clicked by a tool.
   For example: Used to determine if an axe can strip,
   a shovel can path, or a hoe can till.
   Returns null if nothing should happen.
  - param: state - The current state
  - param: context - The use on context that the action was performed in
  - param: toolAction - The action being performed by the tool
  - param: simulate - If true, no actions that modify the world in any way should be performed. If false, the world may be modified.
  - returns: The resulting state after the action has been performed
- `default boolean isScaffolding(BlockState state,  LevelReader level,  BlockPos pos,  LivingEntity entity)`
  Checks if a player or entity handles movement on this block like scaffolding.
  - param: state - The current state
  - param: level - The current level
  - param: pos - The block position in level
  - param: entity - The entity on the scaffolding
  - returns: True if the block should act like scaffolding
- `default boolean canConnectRedstone(BlockState state,  BlockGetter level,  BlockPos pos,  @Nullable  @Nullable Direction direction)`
  Whether redstone dust should visually connect to this block on a given side
  
   The default implementation is identical to
   RedStoneWireBlock#shouldConnectTo(BlockState, Direction)
  
   RedStoneWireBlock updates its visual connection when
   BlockBehaviour.BlockStateBase.updateShape(Direction, BlockState, LevelAccessor, BlockPos, BlockPos)
   is called, this callback is used during the evaluation of its new shape.
  - param: state - The current state
  - param: level - The level
  - param: pos - The block position in level
  - param: direction - The coming direction of the redstone dust connection (with respect to the block at pos)
  - returns: True if redstone dust should visually connect on the side passed

 If the return value is evaluated based on level and pos (e.g. from BlockEntity), then the implementation of
 this block should notify its neighbors to update their shapes when necessary. Consider using
 BlockBehaviour.BlockStateBase.updateNeighbourShapes(LevelAccessor, BlockPos, int, int) or
 BlockBehaviour.BlockStateBase.updateShape(Direction, BlockState, LevelAccessor, BlockPos, BlockPos).

 Example:

 1. yourBlockState.updateNeighbourShapes(level, yourBlockPos, UPDATE_ALL);

 2. neighborState.updateShape(fromDirection, stateOfYourBlock, level, neighborBlockPos, yourBlockPos),
 where fromDirection is defined from the neighbor block's point of view.
- `default boolean hidesNeighborFace(BlockGetter level,  BlockPos pos,  BlockState state,  BlockState neighborState,  Direction dir)`
  Whether this block hides the neighbors face pointed towards by the given direction.
  
   This method should only be used for blocks you don't control, for your own blocks override
   BlockBehaviour.skipRendering(BlockState, BlockState, Direction) on the respective block instead
  
   WARNING: This method is likely to be called from a worker thread! If you want to retrieve a
   BlockEntity from the given level, make sure to use
   IForgeBlockGetter.getExistingBlockEntity(BlockPos) to not
   accidentally create a new or delete an old BlockEntity
   off of the main thread as this would cause a write operation to the given BlockGetter and cause
   a CME in the process. Any other direct or indirect write operation to the BlockGetter will have
   the same outcome.
  - param: level - The world
  - param: pos - The blocks position in the world
  - param: state - The blocks BlockState
  - param: neighborState - The neighboring blocks BlockState
  - param: dir - The direction towards the neighboring block
- `default boolean supportsExternalFaceHiding(BlockState state)`
  Whether this block allows a neighboring block to hide the face of this block it touches.
   If this returns true, IForgeBlockState.hidesNeighborFace(BlockGetter, BlockPos, BlockState, Direction)
   will be called on the neighboring block.
- `default void onBlockStateChange(LevelReader level,  BlockPos pos,  BlockState oldState,  BlockState newState)`
  Called after the BlockState at the given BlockPos was changed and neighbors were updated.
   This method is called on the server and client side.
   Modifying the level is disallowed in this method.
   Useful for calculating additional data based on the new state and the neighbor's reactions to the state change.
  - param: level - The level the state was modified in
  - param: pos - The blocks position in the level
  - param: oldState - The previous state of the block at the given position, may be a different block than this one
  - param: newState - The new state of the block at the given position
- `default boolean canBeHydrated(BlockState state,  BlockGetter getter,  BlockPos pos,  FluidState fluid,  BlockPos fluidPos)`
  Returns whether the block can be hydrated by a fluid.
  
   Hydration is an arbitrary word which depends on the block.
  
   A farmland has moisture
   A sponge can soak up the liquid
   A coral can live
  - param: state - the state of the block being hydrated
  - param: getter - the getter which can get the block
  - param: pos - the position of the block being hydrated
  - param: fluid - the state of the fluid
  - param: fluidPos - the position of the fluid
  - returns: true if the block can be hydrated, false otherwise
- `default MapColor getMapColor(BlockState state,  BlockGetter level,  BlockPos pos,  MapColor defaultColor)`
  Returns the MapColor shown on the map.
  - param: state - The state of this block
  - param: level - The level this block is in
  - param: pos - The blocks position in the level
  - param: defaultColor - The MapColor configured for the given BlockState in the BlockBehaviour.Properties
- `default BlockState getAppearance(BlockState state,  BlockAndTintGetter level,  BlockPos pos,  Direction side,  @Nullable  @Nullable BlockState queryState,  @Nullable  @Nullable BlockPos queryPos)`
  Returns the BlockState that this block reports to look like on the given side, for querying by other mods.
   Note: Overriding this does not change how this block renders. That must still be handled in the block's model.
  
   Common implementors would be covers and facades, or any other mimic blocks that proxy another block's model.
   Common consumers would be models with connected textures that wish to seamlessly connect to mimic blocks.
  
   Note that this method may be called on the server, or on any of the client's meshing threads.
  
   As such, if you need any data from your BlockEntity, you should put it in ModelData to guarantee
   safe concurrent access to it on the client.
  
   Calling IForgeBlockGetter.getModelDataManager() will return null if in a server context, where it is
   safe to query your BlockEntity directly. Otherwise, ModelDataManager.getAt(BlockPos) will return
   the ModelData for the queried block, or null if none is present.
  - param: state - The state of this block
  - param: level - The level this block is in
  - param: pos - The block's position in the level
  - param: side - The side of the block that is being queried
  - param: queryState - The state of the block that is querying the appearance, or null if not applicable
  - param: queryPos - The position of the block that is querying the appearance, or null if not applicable
  - returns: The appearance of this block on the given side. By default, the current state
- `@Nullable default @Nullable PushReaction getPistonPushReaction(BlockState state)`
  Returns the reaction of the block when pushed or pulled by a piston. This method should be not called directly, instead via BlockBehaviour.BlockStateBase.getPistonPushReaction().
  
   NORMAL: is pushable and pullable by sticky pistons
   DESTROY: is being destroyed on pushing and pulling
   BLOCK: is not being able to be moved
   IGNORE: only usable by entities
   PUSH_ONLY: can only be pushed, blocks on trying to be pulled
   null: use the PistonPushReaction from the BlockBehaviour.Properties passed into the Block Constructor
  - param: state - The state of this block
  - returns: the PushReaction of this state or null if the one passed into the block properties should be used

## IForgeBlockEntity

*interface* `net.minecraftforge.common.extensions.IForgeBlockEntity`

All Superinterfaces: ICapabilityProvider, ICapabilitySerializable<CompoundTag>, INBTSerializable<CompoundTag>

### Fields
- `static final AABB INFINITE_EXTENT_AABB`
  Sometimes default render bounding box: infinite in scope. Used to control rendering on BlockEntityWithoutLevelRenderer.

### Methods
- `private BlockEntity self()`
- `default void deserializeNBT(CompoundTag nbt)`
- `default CompoundTag serializeNBT()`
- `default void onDataPacket(Connection net,  ClientboundBlockEntityDataPacket pkt)`
  Called when you receive a TileEntityData packet for the location this
   TileEntity is currently in. On the client, the NetworkManager will always
   be the remote server. On the server, it will be whomever is responsible for
   sending the packet.
  - param: net - The NetworkManager the packet originated from
  - param: pkt - The data packet
- `default void handleUpdateTag(CompoundTag tag)`
  Called when the chunk's TE update tag, gotten from BlockEntity.getUpdateTag(), is received on the client.
  
   Used to handle this tag in a special way. By default this simply calls BlockEntity.load(CompoundTag).
  - param: tag - The CompoundTag sent from BlockEntity.getUpdateTag()
- `CompoundTag getPersistentData()`
  Gets a CompoundTag that can be used to store custom data for this block entity.
   It will be written, and read from disc, so it persists over world saves.
  - returns: A compound tag for custom persistent data
- `default void onChunkUnloaded()`
- `default void onLoad()`
  Called when this is first added to the world (by LevelChunk.addAndRegisterBlockEntity(BlockEntity))
   or right before the first tick when the chunk is generated or loaded from disk.
   Override instead of adding if (firstTick) stuff in update.
- `default AABB getRenderBoundingBox()`
  Return an AABB that controls the visible scope of a BlockEntityWithoutLevelRenderer associated with this BlockEntity
   Defaults to the collision bounding box BlockBehaviour.BlockStateBase.getCollisionShape(BlockGetter, BlockPos) associated with the block
   at this location.
  - returns: an appropriately size AABB for the BlockEntity
- `default void requestModelDataUpdate()`
  Requests a refresh for the model data of your TE
   Call this every time your getModelData() changes
- `@NotNull default @NotNull ModelData getModelData()`
  Allows you to return additional model data.
   This data can be used to provide additional functionality in your BakedModel
   You need to schedule a refresh of you model data via requestModelDataUpdate() if the result of this function changes.
   Note that this method may be called on a chunk render thread instead of the main client thread
  - returns: Your model data
- `default boolean hasCustomOutlineRendering(Player player)`
  Returns whether this BlockEntity has custom outline rendering behavior.
  - param: player - the local player currently viewing this BlockEntity
  - returns: true to enable outline processing

### Inherited methods
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`

## IForgeBlockGetter

*interface* `net.minecraftforge.common.extensions.IForgeBlockGetter`

### Methods
- `private BlockGetter self()`
- `@Nullable default @Nullable BlockEntity getExistingBlockEntity(BlockPos pos)`
  Get the BlockEntity at the given position if it exists.
  
   Level.getBlockEntity(BlockPos) would create a new BlockEntity if the
   Block has one, but it has not been placed in the world yet
   (This can happen on world load).
  - returns: The BlockEntity at the given position or null if it doesn't exist
- `@Nullable default @Nullable ModelDataManager getModelDataManager()`
  Retrieves the model data manager for this level.
   This will be null on a server level.

## IForgeBlockState

*interface* `net.minecraftforge.common.extensions.IForgeBlockState`

### Methods
- `private BlockState self()`
- `default float getFriction(LevelReader level,  BlockPos pos,  @Nullable  @Nullable Entity entity)`
  Gets the slipperiness at the given location at the given state. Normally
   between 0 and 1.
  
   Note that entities may reduce slipperiness by a certain factor of their own;
   for LivingEntity, this is .91.
   ItemEntity uses .98, and
   FishingHook uses .92.
  - param: level - the level
  - param: pos - the position in the level
  - param: entity - the entity in question
  - returns: the factor by which the entity's motion should be multiplied
- `default int getLightEmission(BlockGetter level,  BlockPos pos)`
  Get a light value for this block, taking into account the given state and coordinates, normal ranges are between 0 and 15
- `default boolean isLadder(LevelReader level,  BlockPos pos,  LivingEntity entity)`
  Checks if a player or entity can use this block to 'climb' like a ladder.
  - param: level - The current level
  - param: pos - Block position in level
  - param: entity - The entity trying to use the ladder, CAN be null.
  - returns: True if the block should act like a ladder
- `default boolean canHarvestBlock(BlockGetter level,  BlockPos pos,  Player player)`
  Determines if the player can harvest this block, obtaining it's drops when the block is destroyed.
  - param: level - The current level
  - param: pos - The block's current position
  - param: player - The player damaging the block
  - returns: True to spawn the drops
- `default boolean onDestroyedByPlayer(Level level,  BlockPos pos,  Player player,  boolean willHarvest,  FluidState fluid)`
  Called when a player removes a block. This is responsible for
   actually destroying the block, and the block is intact at time of call.
   This is called regardless of whether the player can harvest the block or
   not.
  
   Return true if the block is actually destroyed.
  
   Note: When used in multiplayer, this is called on both client and
   server sides!
  - param: level - The current level
  - param: player - The player damaging the block, may be null
  - param: pos - Block position in level
  - param: willHarvest - True if Block.harvestBlock will be called after this, if the return in true.
 Can be useful to delay the destruction of tile entities till after harvestBlock
  - param: fluid - The current fluid and block state for the position in the level.
  - returns: True if the block is actually destroyed.
- `default boolean isBed(BlockGetter level,  BlockPos pos,  @Nullable  @Nullable LivingEntity sleeper)`
  Determines if this block is classified as a Bed, Allowing
   players to sleep in it, though the block has to specifically
   perform the sleeping functionality in it's activated event.
  - param: level - The current level
  - param: pos - Block position in level
  - param: sleeper - The sleeper or camera entity, null in some cases.
  - returns: True to treat this as a bed
- `default boolean isValidSpawn(LevelReader level,  BlockPos pos,  SpawnPlacements.Type type,  EntityType<?> entityType)`
  Determines if a specified mob type can spawn on this block, returning false will
   prevent any mob from spawning on the block.
  - param: level - The current level
  - param: pos - Block position in level
  - param: type - The Mob Category Type
  - returns: True to allow a mob of the specified category to spawn, false to prevent it.
- `default Optional<Vec3> getRespawnPosition(EntityType<?> type,  LevelReader level,  BlockPos pos,  float orientation,  @Nullable  @Nullable LivingEntity entity)`
  Returns the position that the entity is moved to upon
   respawning at this block.
  - param: type - The entity type used when checking if a dismount blockstate is dangerous. Currently always PLAYER.
  - param: level - The current level
  - param: pos - Block position in level
  - param: orientation - The angle the entity had when setting the respawn point
  - param: entity - The entity respawning, often null
  - returns: The spawn position or the empty optional if respawning here is not possible
- `default void setBedOccupied(Level level,  BlockPos pos,  LivingEntity sleeper,  boolean occupied)`
  Called when a user either starts or stops sleeping in the bed.
  - param: level - The current level
  - param: pos - Block position in level
  - param: sleeper - The sleeper or camera entity, null in some cases.
  - param: occupied - True if we are occupying the bed, or false if they are stopping use of the bed
- `default Direction getBedDirection(LevelReader level,  BlockPos pos)`
  Returns the direction of the block. Same values that
   are returned by BlockDirectional
  - param: level - The current level
  - param: pos - Block position in level
  - returns: Bed direction
- `default float getExplosionResistance(BlockGetter level,  BlockPos pos,  Explosion explosion)`
  Location sensitive version of getExplosionResistance
  - param: level - The current level
  - param: pos - Block position in level
  - param: explosion - The explosion
  - returns: The amount of the explosion absorbed.
- `default ItemStack getCloneItemStack(HitResult target,  BlockGetter level,  BlockPos pos,  Player player)`
  Called when A user uses the creative pick block button on this block
  - param: target - The full target the player is looking at
  - returns: A ItemStack to add to the player's inventory, empty itemstack if nothing should be added.
- `default boolean addLandingEffects(ServerLevel level,  BlockPos pos,  BlockState state2,  LivingEntity entity,  int numberOfParticles)`
  Allows a block to override the standard EntityLivingBase.updateFallState
   particles, this is a server side method that spawns particles with
   WorldServer.spawnParticle.
  - param: level - The current server level
  - param: pos - The position of the block.
  - param: state2 - The state at the specific world/pos
  - param: entity - The entity that hit landed on the block
  - param: numberOfParticles - That vanilla world have spawned
  - returns: True to prevent vanilla landing particles from spawning
- `default boolean addRunningEffects(Level level,  BlockPos pos,  Entity entity)`
  Allows a block to override the standard vanilla running particles.
   This is called from Entity#spawnSprintParticle() and is called both,
   Client and server side, it's up to the implementor to client check / server check.
   By default vanilla spawns particles only on the client and the server methods no-op.
  - param: level - The level.
  - param: pos - The position at the entities feet.
  - param: entity - The entity running on the block.
  - returns: True to prevent vanilla running particles from spawning.
- `default boolean canSustainPlant(BlockGetter level,  BlockPos pos,  Direction facing,  IPlantable plantable)`
  Determines if this block can support the passed in plant, allowing it to be planted and grow.
   Some examples:
   Reeds check if its a reed, or if its sand/dirt/grass and adjacent to water
   Cacti checks if its a cacti, or if its sand
   Nether types check for soul sand
   Crops check for tilled soil
   Caves check if it's a solid surface
   Plains check if its grass or dirt
   Water check if its still water
  - param: level - The current level
  - param: facing - The direction relative to the given position the plant wants to be, typically its UP
  - param: plantable - The plant that wants to check
  - returns: True to allow the plant to be planted/stay.
- `default boolean onTreeGrow(LevelReader level,  BiConsumer<BlockPos,BlockState> placeFunction,  RandomSource randomSource,  BlockPos pos,  TreeConfiguration config)`
  Called when a tree grows on top of this block and tries to set it to dirt by the trunk placer.
   An override that returns true is responsible for using the place function to
   set blocks in the world properly during generation. A modded grass block might override this method
   to ensure it turns into the corresponding modded dirt instead of regular dirt when a tree grows on it.
   For modded grass blocks, returning true from this method is NOT a substitute for adding your block
   to the #minecraft:dirt tag, rather for changing the behaviour to something other than setting to dirt.
  
   NOTE: This happens DURING world generation, the generation may be incomplete when this is called.
   Use the placeFunction when modifying the level.
  - param: level - The current level
  - param: placeFunction - Function to set blocks in the level for the tree, use this instead of the level directly
  - param: randomSource - The random source
  - param: pos - Position of the block to be set to dirt
  - param: config - Configuration of the trunk placer. Consider azalea trees, which should place rooted dirt instead of regular dirt.
  - returns: True to ignore vanilla behaviour
- `default boolean isFertile(BlockGetter level,  BlockPos pos)`
  Checks if this soil is fertile, typically this means that growth rates
   of plants on this soil will be slightly sped up.
   Only vanilla case is tilledField when it is within range of water.
  - param: level - The current level
  - param: pos - Block position in level
  - returns: True if the soil should be considered fertile.
- `default boolean isConduitFrame(LevelReader level,  BlockPos pos,  BlockPos conduit)`
  Determines if this block can be used as the frame of a conduit.
  - param: level - The current level
  - param: pos - Block position in level
  - param: conduit - Conduit position in level
  - returns: True, to support the conduit, and make it active with this block.
- `default boolean isPortalFrame(BlockGetter level,  BlockPos pos)`
  Determines if this block can be used as part of a frame of a nether portal.
  - param: level - The current level
  - param: pos - Block position in level
  - returns: True, to support being part of a nether portal frame, false otherwise.
- `default int getExpDrop(LevelReader level,  RandomSource randomSource,  BlockPos pos,  int fortuneLevel,  int silkTouchLevel)`
  Gathers how much experience this block drops when broken.
  - param: level - The level
  - param: randomSource - Random source to use for experience randomness
  - param: pos - Block position
  - param: fortuneLevel - fortune enchantment level of tool being used
  - param: silkTouchLevel - silk touch enchantment level of tool being used
  - returns: Amount of XP from breaking this block.
- `default BlockState rotate(LevelAccessor level,  BlockPos pos,  Rotation direction)`
- `default float getEnchantPowerBonus(LevelReader level,  BlockPos pos)`
  Determines the amount of enchanting power this block can provide to an enchanting table.
  - param: level - The level
  - param: pos - Block position in level
  - returns: The amount of enchanting power this block produces.
- `default void onNeighborChange(LevelReader level,  BlockPos pos,  BlockPos neighbor)`
  Called when a tile entity on a side of this block changes is created or is destroyed.
  - param: level - The level
  - param: pos - Block position in level
  - param: neighbor - Block position of neighbor
- `default boolean shouldCheckWeakPower(SignalGetter level,  BlockPos pos,  Direction side)`
  Called to determine whether to allow the block to handle its own indirect power rather than using the default rules.
  - param: level - The level
  - param: pos - Block position in level
  - param: side - The INPUT side of the block to be powered - ie the opposite of this block's output side
  - returns: Whether Block#isProvidingWeakPower should be called when determining indirect power
- `default boolean getWeakChanges(LevelReader level,  BlockPos pos)`
  If this block should be notified of weak changes.
   Weak changes are changes 1 block away through a solid block.
   Similar to comparators.
  - param: level - The current level
  - param: pos - Block position in level
  - returns: true To be notified of changes
- `default SoundType getSoundType(LevelReader level,  BlockPos pos,  @Nullable  @Nullable Entity entity)`
  Sensitive version of getSoundType
  - param: level - The level
  - param: pos - The position. Note that the level may not necessarily have state here!
  - param: entity - The entity that is breaking/stepping on/placing/hitting/falling on this block, or null if no entity is in this context
  - returns: A SoundType to use
- `@Nullable default @org.jetbrains.annotations.Nullable float[] getBeaconColorMultiplier(LevelReader level,  BlockPos pos,  BlockPos beacon)`
  - param: level - The level
  - param: pos - The position of this state
  - param: beacon - The position of the beacon
  - returns: A float RGB [0.0, 1.0] array to be averaged with a beacon's existing beam color, or null to do nothing to the beam
- `default BlockState getStateAtViewpoint(BlockGetter level,  BlockPos pos,  Vec3 viewpoint)`
  Used to determine the state 'viewed' by an entity (see
   Camera.getBlockAtCamera()).
   Can be used by fluid blocks to determine if the viewpoint is within the fluid or not.
  - param: level - the level
  - param: pos - the position
  - param: viewpoint - the viewpoint
  - returns: the block state that should be 'seen'
- `default boolean isSlimeBlock()`
  - returns: true if the block is sticky block which used for pull or push adjacent blocks (use by piston)
- `default boolean isStickyBlock()`
  - returns: true if the block is sticky block which used for pull or push adjacent blocks (use by piston)
- `default boolean canStickTo(@NotNull  @NotNull BlockState other)`
  Determines if this block can stick to another block when pushed by a piston.
  - param: other - Other block
  - returns: True to link blocks
- `default int getFlammability(BlockGetter level,  BlockPos pos,  Direction face)`
  Chance that fire will spread and consume this block.
   300 being a 100% chance, 0, being a 0% chance.
  - param: level - The current level
  - param: pos - Block position in level
  - param: face - The face that the fire is coming from
  - returns: A number ranging from 0 to 300 relating used to determine if the block will be consumed by fire
- `default boolean isFlammable(BlockGetter level,  BlockPos pos,  Direction face)`
  Called when fire is updating, checks if a block face can catch fire.
  - param: level - The current level
  - param: pos - Block position in level
  - param: face - The face that the fire is coming from
  - returns: True if the face can be on fire, false otherwise.
- `default void onCaughtFire(Level level,  BlockPos pos,  @Nullable  @Nullable Direction face,  @Nullable  @Nullable LivingEntity igniter)`
  If the block is flammable, this is called when it gets lit on fire.
  - param: level - The current level
  - param: pos - Block position in level
  - param: face - The face that the fire is coming from
  - param: igniter - The entity that lit the fire
- `default int getFireSpreadSpeed(BlockGetter level,  BlockPos pos,  Direction face)`
  Called when fire is updating on a neighbor block.
   The higher the number returned, the faster fire will spread around this block.
  - param: level - The current level
  - param: pos - Block position in level
  - param: face - The face that the fire is coming from
  - returns: A number that is used to determine the speed of fire growth around the block
- `default boolean isFireSource(LevelReader level,  BlockPos pos,  Direction side)`
  Currently only called by fire when it is on top of this block.
   Returning true will prevent the fire from naturally dying during updating.
   Also prevents firing from dying from rain.
  - param: level - The current level
  - param: pos - Block position in level
  - param: side - The face that the fire is coming from
  - returns: True if this block sustains fire, meaning it will never go out.
- `default boolean canEntityDestroy(BlockGetter level,  BlockPos pos,  Entity entity)`
  Determines if this block is can be destroyed by the specified entities normal behavior.
  - param: level - The current level
  - param: pos - Block position in level
  - returns: True to allow the ender dragon to destroy this block
- `default boolean isBurning(BlockGetter level,  BlockPos pos)`
  Determines if this block should set fire and deal fire damage
   to entities coming into contact with it.
  - param: level - The current level
  - param: pos - Block position in level
  - returns: True if the block should deal damage
- `@Nullable default @Nullable BlockPathTypes getBlockPathType(BlockGetter level,  BlockPos pos,  @Nullable  @Nullable Mob mob)`
  Gets the path type of this block when an entity is pathfinding. When
   null, uses vanilla behavior.
  - param: level - the level which contains this block
  - param: pos - the position of the block
  - param: mob - the mob currently pathfinding, may be null
  - returns: the path type of this block
- `@Nullable default @Nullable BlockPathTypes getAdjacentBlockPathType(BlockGetter level,  BlockPos pos,  @Nullable  @Nullable Mob mob,  BlockPathTypes originalType)`
  Gets the path type of the adjacent block to a pathfinding entity.
   Path types with a negative malus are not traversable for the entity.
   Pathfinding entities will favor paths consisting of a lower malus.
   When null, uses vanilla behavior.
  - param: level - the level which contains this block
  - param: pos - the position of the block
  - param: mob - the mob currently pathfinding, may be null
  - param: originalType - the path type of the source the entity is on
  - returns: the path type of this block
- `default boolean canDropFromExplosion(BlockGetter level,  BlockPos pos,  Explosion explosion)`
  Determines if this block should drop loot when exploded.
- `default void onBlockExploded(Level level,  BlockPos pos,  Explosion explosion)`
  Called when the block is destroyed by an explosion.
   Useful for allowing the block to take into account tile entities,
   state, etc. when exploded, before it is removed.
  - param: level - The current level
  - param: pos - Block position in level
  - param: explosion - The explosion instance affecting the block
- `default boolean collisionExtendsVertically(BlockGetter level,  BlockPos pos,  Entity collidingEntity)`
  Determines if this block's collision box should be treated as though it can extend above its block space.
   This can be used to replicate fence and wall behavior.
- `default boolean shouldDisplayFluidOverlay(BlockAndTintGetter level,  BlockPos pos,  FluidState fluidState)`
  Called to determine whether this block should use the fluid overlay texture or flowing texture when it is placed under the fluid.
  - param: level - The level
  - param: pos - Block position in level
  - param: fluidState - The state of the fluid
  - returns: Whether the fluid overlay texture should be used
- `@Nullable default @Nullable BlockState getToolModifiedState(UseOnContext context,  ToolAction toolAction,  boolean simulate)`
  Returns the state that this block should transform into when right-clicked by a tool.
   For example: Used to determine if an axe can strip,
   a shovel can path, or a hoe can till.
   Returns null if nothing should happen.
  - param: context - The use on context that the action was performed in
  - param: toolAction - The action being performed by the tool
  - param: simulate - If true, no actions that modify the world in any way should be performed. If false, the world may be modified.
  - returns: The resulting state after the action has been performed
- `default boolean isScaffolding(LivingEntity entity)`
  Checks if a player or entity handles movement on this block like scaffolding.
  - param: entity - The entity on the scaffolding
  - returns: True if the block should act like scaffolding
- `default boolean canRedstoneConnectTo(BlockGetter level,  BlockPos pos,  @Nullable  @Nullable Direction direction)`
  Whether redstone dust should visually connect to this block on a side.
  
   Modded redstone wire blocks should call this function to determine visual connections.
  - param: level - The level
  - param: pos - The block position in level
  - param: direction - The coming direction of the redstone dust connection (with respect to the block at pos)
  - returns: True if redstone dust should visually connect on the side passed
- `default boolean hidesNeighborFace(BlockGetter level,  BlockPos pos,  BlockState neighborState,  Direction dir)`
  Whether this block hides the neighbors face pointed towards by the given direction.
  
   This method should only be used for blocks you don't control, for your own blocks override
   BlockBehaviour.skipRendering(BlockState, BlockState, Direction)
   on the respective block instead
  - param: level - The world
  - param: pos - The blocks position in the world
  - param: neighborState - The neighboring blocks BlockState
  - param: dir - The direction towards the neighboring block
- `default boolean supportsExternalFaceHiding()`
  Whether this block allows a neighboring block to hide the face of this block it touches.
   If this returns true, hidesNeighborFace(BlockGetter, BlockPos, BlockState, Direction)
   will be called on the neighboring block.
- `default void onBlockStateChange(LevelReader level,  BlockPos pos,  BlockState oldState)`
  Called after the BlockState at the given BlockPos was changed and neighbors were updated.
   This method is called on the server and client side.
   Modifying the level is disallowed in this method.
   Useful for calculating additional data based on the new state and the neighbor's reactions to the state change.
  - param: level - The level the state was modified in
  - param: pos - The blocks position in the level
  - param: oldState - The previous state of the block at the given position, may be a different block than this one
- `default boolean canBeHydrated(BlockGetter getter,  BlockPos pos,  FluidState fluid,  BlockPos fluidPos)`
  Returns whether the block can be hydrated by a fluid.
  
   Hydration is an arbitrary word which depends on the block.
  
   A farmland has moisture
   A sponge can soak up the liquid
   A coral can live
  - param: getter - the getter which can get the block
  - param: pos - the position of the block being hydrated
  - param: fluid - the state of the fluid
  - param: fluidPos - the position of the fluid
  - returns: true if the block can be hydrated, false otherwise
- `default BlockState getAppearance(BlockAndTintGetter level,  BlockPos pos,  Direction side,  @Nullable  @Nullable BlockState queryState,  @Nullable  @Nullable BlockPos queryPos)`
  Returns the BlockState that this state reports to look like on the given side for querying by other mods.
  - param: level - The level this block is in
  - param: pos - The block's position in the level
  - param: side - The side of the block that is being queried
  - param: queryState - The state of the block that is querying the appearance, or null if not applicable
  - param: queryPos - The position of the block that is querying the appearance, or null if not applicable
  - returns: The appearance of this block from the given side

## IForgeBoat

*interface* `net.minecraftforge.common.extensions.IForgeBoat`

### Methods
- `private Boat self()`
- `default boolean canBoatInFluid(FluidState state)`
  Returns whether the boat can be used on the fluid.
  - param: state - the state of the fluid
  - returns: true if the boat can be used, false otherwise
- `default boolean canBoatInFluid(FluidType type)`
  Returns whether the boat can be used on the fluid.
  - param: type - the type of the fluid
  - returns: true if the boat can be used, false otherwise
- `default boolean shouldUpdateFluidWhileRiding(FluidState state,  Entity rider)`
  When false, the fluid will no longer update its height value while
   within a boat while it is not within a fluid (Boat.isUnderWater().
  - param: state - the state of the fluid the rider is within
  - param: rider - the rider of the boat
  - returns: true if the fluid height should be updated, false otherwise

## IForgeBucketPickup

*interface* `net.minecraftforge.common.extensions.IForgeBucketPickup`

### Methods
- `private BucketPickup self()`
- `default Optional<SoundEvent> getPickupSound(BlockState state)`
  State sensitive variant of BucketPickup.getPickupSound().
  
   Override to change the pickup sound based on the BlockState of the object being picked up.
  - param: state - State
  - returns: Sound event for pickup sound or empty if there isn't a pickup sound.

## IForgeCommandSourceStack

*interface* `net.minecraftforge.common.extensions.IForgeCommandSourceStack`

Additional methods for CommandSourceStack so that commands and arguments can access various things without directly referencing using server specific classes

### Methods
- `private CommandSourceStack self()`
- `default Scoreboard getScoreboard()`
  - returns: the scoreboard
- `default AdvancementHolder getAdvancement(ResourceLocation id)`
  - returns: the advancement from the id
- `default RecipeManager getRecipeManager()`
  - returns: the recipe manager
- `default Level getUnsidedLevel()`
  - returns: the level but without being specifically the server side level

## IForgeDispensibleContainerItem

*interface* `net.minecraftforge.common.extensions.IForgeDispensibleContainerItem`

### Methods
- `private DispensibleContainerItem self()`
- `default boolean emptyContents(@Nullable  @Nullable Player player,  Level level,  BlockPos pos,  @Nullable  @Nullable BlockHitResult hitResult,  @Nullable  @Nullable ItemStack container)`
  Empties the contents of the container and returns whether it was successful.
  - param: player - Player who empties the container. May be null for blocks like dispensers.
  - param: level - Level to place the content in
  - param: pos - The position in the level to empty the content
  - param: hitResult - Hit result of the interaction. May be null for blocks like dispensers.
  - param: container - ItemStack of the container. May be null for backwards compatibility.
  - returns: true if emptying the contents of the container was successful, false otherwise

## IForgeEnchantment

*interface* `net.minecraftforge.common.extensions.IForgeEnchantment`

### Methods
- `private Enchantment self()`
- `default float getDamageBonus(int level,  MobType mobType,  ItemStack enchantedItem)`
  ItemStack aware version of Enchantment.getDamageBonus(int, MobType)
  - param: level - the level of the enchantment
  - param: mobType - the mob type being attacked
  - param: enchantedItem - the item used for the attack
  - returns: the damage bonus
- `default boolean allowedInCreativeTab(Item book,  Set<EnchantmentCategory> allowedCategories)`
  Determines whether item variants of this enchantment can be added to a given creative tab with the allowed categories.
  - param: book - the item being added to the creative tab
  - param: allowedCategories - the enchantment categories allowed in the creative tab
  - returns: whether item variants of this enchantment can be added to a given creative tab with the allowed categories

## IForgeEntity

*interface* `net.minecraftforge.common.extensions.IForgeEntity`

All Superinterfaces: ICapabilityProvider, ICapabilitySerializable<CompoundTag>, INBTSerializable<CompoundTag>

### Methods
- `private Entity self()`
- `default void deserializeNBT(CompoundTag nbt)`
- `default CompoundTag serializeNBT()`
- `boolean canUpdate()`
- `void canUpdate(boolean value)`
- `@Nullable @Nullable Collection<ItemEntity> captureDrops()`
- `Collection<ItemEntity> captureDrops(@Nullable  @Nullable Collection<ItemEntity> captureDrops)`
- `CompoundTag getPersistentData()`
  Returns a NBTTagCompound that can be used to store custom data for this entity.
   It will be written, and read from disc, so it persists over world saves.
  - returns: A NBTTagCompound
- `default boolean shouldRiderSit()`
  Used in model rendering to determine if the entity riding this entity should be in the 'sitting' position.
  - returns: false to prevent an entity that is mounted to this entity from displaying the 'sitting' animation.
- `default ItemStack getPickedResult(HitResult target)`
  Called when a user uses the creative pick block button on this entity.
  - param: target - The full target the player is looking at
  - returns: A ItemStack to add to the player's inventory, empty ItemStack if nothing should be added.
- `default boolean canRiderInteract()`
  If a rider of this entity can interact with this entity. Should return true on the
   ridden entity if so.
  - returns: if the entity can be interacted with from a rider
- `default boolean canBeRiddenUnderFluidType(FluidType type,  Entity rider)`
  Returns whether the entity can ride in this vehicle under the fluid.
  - param: type - the type of the fluid
  - param: rider - the entity riding the vehicle
  - returns: true if the vehicle can be ridden in under this fluid,
 false otherwise
- `boolean canTrample(BlockState state,  BlockPos pos,  float fallDistance)`
  Checks if this Entity can trample a Block.
  - param: pos - The block pos
  - param: fallDistance - The fall distance
  - returns: true if this entity can trample, false otherwise
- `default MobCategory getClassification(boolean forSpawnCount)`
  Returns The classification of this entity
  - param: forSpawnCount - If this is being invoked to check spawn count caps.
  - returns: If the creature is of the type provided
- `boolean isAddedToWorld()`
  Gets whether this entity has been added to a world (for tracking). Specifically
   between the times when an entity is added to a world and the entity being removed
   from the world's tracked lists.
  - returns: True if this entity is being tracked by a world
- `void onAddedToWorld()`
  Called after the entity has been added to the world's
   ticking list. Can be overriden, but needs to call super
   to prevent MC-136995.
- `void onRemovedFromWorld()`
  Called after the entity has been removed to the world's
   ticking list. Can be overriden, but needs to call super
   to prevent MC-136995.
- `void revive()`
  Revives an entity that has been removed from a world.
   Used as replacement for entity.removed = true. Having it as a function allows
   the entity to react to being revived.
- `default boolean isMultipartEntity()`
  This is used to specify that your entity has multiple individual parts, such as the Vanilla Ender Dragon.
  
   See EnderDragon for an example implementation.
  - returns: true if this is a multipart entity.
- `@Nullable default @Nullable PartEntity<?>[] getParts()`
  Gets the individual sub parts that make up this entity.
  
   The entities returned by this method are NOT saved to the world in nay way, they exist as an extension
   of their host entity. The child entity does not track its server-side(or client-side) counterpart, and
   the host entity is responsible for moving and managing these children.
  
   Only used if isMultipartEntity() returns true.
  
   See EnderDragon for an example implementation.
  - returns: The child parts of this entity. The value to be returned here should be cached.
- `default float getStepHeight()`
  - returns: Return the height in blocks the Entity can step up without needing to jump
 This is the sum of vanilla's Entity.maxUpStep() method and the current value
 of the ForgeMod.STEP_HEIGHT_ADDITION attribute
 (if this Entity is a LivingEntity and has the attribute), clamped at 0.
- `double getFluidTypeHeight(FluidType type)`
  Returns the height of the fluid type in relation to the bounding box of
   the entity. If the entity is not in the fluid type, then 0
   is returned.
  - param: type - the type of the fluid
  - returns: the height of the fluid compared to the entity
- `FluidType getMaxHeightFluidType()`
  Returns the fluid type which is the highest on the bounding box of
   the entity.
  - returns: the fluid type which is the highest on the bounding box of
 the entity
- `default boolean isInFluidType(FluidState state)`
  Returns whether the entity is within the fluid type of the state.
  - param: state - the state of the fluid
  - returns: true if the entity is within the fluid type of the
 state, false otherwise
- `default boolean isInFluidType(FluidType type)`
  Returns whether the entity is within the fluid type.
  - param: type - the type of the fluid
  - returns: true if the entity is within the fluid type,
 false otherwise
- `default boolean isInFluidType(BiPredicate<FluidType,Double> predicate)`
  Returns whether any fluid type the entity is currently in matches
   the specified condition.
  - param: predicate - a test taking in the fluid type and its height
  - returns: true if a fluid type meets the condition, false
 otherwise
- `boolean isInFluidType(BiPredicate<FluidType,Double> predicate,  boolean forAllTypes)`
  Returns whether the fluid type the entity is currently in matches
   the specified condition.
  - param: predicate - a test taking in the fluid type and its height
  - param: forAllTypes - true if all fluid types should match the
 condition instead of at least one
  - returns: true if a fluid type meets the condition, false
 otherwise
- `boolean isInFluidType()`
  Returns whether the entity is in a fluid.
  - returns: true if the entity is in a fluid, false otherwise
- `FluidType getEyeInFluidType()`
  Returns the fluid that is on the entity's eyes.
  - returns: the fluid that is on the entity's eyes
- `default boolean isEyeInFluidType(FluidType type)`
  Returns whether the fluid is on the entity's eyes.
  - returns: true if the fluid is on the entity's eyes, false otherwise
- `default boolean canStartSwimming()`
  Returns whether the entity can start swimming in the fluid.
  - returns: true if the entity can start swimming, false otherwise
- `default double getFluidMotionScale(FluidType type)`
  Returns how much the velocity of the fluid should be scaled by
   when applied to an entity.
  - param: type - the type of the fluid
  - returns: a scalar to multiply to the fluid velocity
- `default boolean isPushedByFluid(FluidType type)`
  Returns whether the fluid can push an entity.
  - param: type - the type of the fluid
  - returns: true if the entity can be pushed by the fluid, false otherwise
- `default boolean canSwimInFluidType(FluidType type)`
  Returns whether the entity can swim in the fluid.
  - param: type - the type of the fluid
  - returns: true if the entity can swim in the fluid, false otherwise
- `default boolean canFluidExtinguish(FluidType type)`
  Returns whether the entity can be extinguished by this fluid.
  - param: type - the type of the fluid
  - returns: true if the entity can be extinguished, false otherwise
- `default float getFluidFallDistanceModifier(FluidType type)`
  Returns how much the fluid should scale the damage done to a falling
   entity when hitting the ground per tick.
  
   Implementation: If the entity is in many fluids, the smallest modifier
   is applied.
  - param: type - the type of the fluid
  - returns: a scalar to multiply to the fall damage
- `default boolean canHydrateInFluidType(FluidType type)`
  Returns whether the entity can be hydrated by this fluid.
  
   Hydration is an arbitrary word which depends on the entity.
  - param: type - the type of the fluid
  - returns: true if the entity can be hydrated, false
 otherwise
- `@Nullable default @Nullable SoundEvent getSoundFromFluidType(FluidType type,  SoundAction action)`
  Returns a sound to play when a certain action is performed by the
   entity in the fluid. If no sound is present, then the sound will be
   null.
  - param: type - the type of the fluid
  - param: action - the action being performed
  - returns: the sound to play when performing the action
- `default boolean hasCustomOutlineRendering(Player player)`
  Returns whether this Entity has custom outline rendering behavior which does
   not use the existing automatic outline rendering based on Entity.isCurrentlyGlowing()
   and the entity's team color.
  - param: player - the local player currently viewing this Entity
  - returns: true to enable outline processing
- `@Deprecated(forRemoval=true,  since="1.20.1") default float getEyeHeightForge(Pose pose,  EntityDimensions size)` (deprecated)
- `default boolean shouldUpdateFluidWhileBoating(FluidState state,  Boat boat)`
  When false, the fluid will no longer update its height value while
   within a boat while it is not within a fluid (Boat.isUnderWater().
  - param: state - the state of the fluid the rider is within
  - param: boat - the boat the rider is within that is not inside a fluid
  - returns: true if the fluid height should be updated, false otherwise

### Inherited methods
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`

## IForgeFluid

*interface* `net.minecraftforge.common.extensions.IForgeFluid`

### Methods
- `default float getExplosionResistance(FluidState state,  BlockGetter level,  BlockPos pos,  Explosion explosion)`
  Returns the explosion resistance of the fluid.
  - param: state - the state of the fluid
  - param: level - the level the fluid is in
  - param: pos - the position of the fluid
  - param: explosion - the explosion the fluid is absorbing
  - returns: the amount of the explosion the fluid can absorb
- `FluidType getFluidType()`
  Returns the type of this fluid.
  
   Important: This MUST be overridden on your fluid, otherwise an
   error will be thrown.
  - returns: the type of this fluid
- `default boolean move(FluidState state,  LivingEntity entity,  Vec3 movementVector,  double gravity)`
  Performs how an entity moves when within the fluid. If using custom
   movement logic, the method should return true. Otherwise, the
   movement logic will default to water.
  - param: state - the state of the fluid
  - param: entity - the entity moving within the fluid
  - param: movementVector - the velocity of how the entity wants to move
  - param: gravity - the gravity to apply to the entity
  - returns: true if custom movement logic is performed, false otherwise
- `default boolean canConvertToSource(FluidState state,  Level level,  BlockPos pos)`
  Returns whether the fluid can create a source.
  - param: state - the state of the fluid
  - param: level - the level that can get the fluid
  - param: pos - the location of the fluid
  - returns: true if the fluid can create a source, false otherwise
- `default boolean supportsBoating(FluidState state,  Boat boat)`
  Returns whether the boat can be used on the fluid.
  - param: state - the state of the fluid
  - param: boat - the boat trying to be used on the fluid
  - returns: true if the boat can be used, false otherwise
- `default boolean shouldUpdateWhileBoating(FluidState state,  Boat boat,  Entity rider)`
  When false, the fluid will no longer update its height value while
   within a boat while it is not within a fluid (Boat.isUnderWater().
  - param: state - the state of the fluid the rider is within
  - param: boat - the boat the rider is within that is not inside a fluid
  - param: rider - the rider of the boat
  - returns: true if the fluid height should be updated, false otherwise
- `@Nullable default @Nullable BlockPathTypes getBlockPathType(FluidState state,  BlockGetter level,  BlockPos pos,  @Nullable  @Nullable Mob mob,  boolean canFluidLog)`
  Gets the path type of this fluid when an entity is pathfinding. When
   null, uses vanilla behavior.
  - param: state - the state of the fluid
  - param: level - the level which contains this fluid
  - param: pos - the position of the fluid
  - param: mob - the mob currently pathfinding, may be null
  - param: canFluidLog - true if the path is being applied for fluids that can log blocks,
 should be checked against if the fluid can log a block
  - returns: the path type of this fluid
- `@Nullable default @Nullable BlockPathTypes getAdjacentBlockPathType(FluidState state,  BlockGetter level,  BlockPos pos,  @Nullable  @Nullable Mob mob,  BlockPathTypes originalType)`
  Gets the path type of the adjacent fluid to a pathfinding entity.
   Path types with a negative malus are not traversable for the entity.
   Pathfinding entities will favor paths consisting of a lower malus.
   When null, uses vanilla behavior.
  - param: state - the state of the fluid
  - param: level - the level which contains this fluid
  - param: pos - the position of the fluid
  - param: mob - the mob currently pathfinding, may be null
  - param: originalType - the path type of the source the entity is on
  - returns: the path type of this fluid
- `default boolean canHydrate(FluidState state,  BlockGetter getter,  BlockPos pos,  BlockState source,  BlockPos sourcePos)`
  Returns whether the block can be hydrated by a fluid.
  
   Hydration is an arbitrary word which depends on the block.
  
   A farmland has moisture
   A sponge can soak up the liquid
   A coral can live
  - param: state - the state of the fluid
  - param: getter - the getter which can get the fluid
  - param: pos - the position of the fluid
  - param: source - the state of the block being hydrated
  - param: sourcePos - the position of the block being hydrated
  - returns: true if the block can be hydrated, false otherwise
- `default boolean canExtinguish(FluidState state,  BlockGetter getter,  BlockPos pos)`
  Returns whether the block can be extinguished by this fluid.
  - param: state - the state of the fluid
  - param: getter - the getter which can get the fluid
  - param: pos - the position of the fluid
  - returns: true if the block can be extinguished, false otherwise

## IForgeFluidState

*interface* `net.minecraftforge.common.extensions.IForgeFluidState`

### Methods
- `private FluidState self()`
- `default float getExplosionResistance(BlockGetter level,  BlockPos pos,  Explosion explosion)`
  Returns the explosion resistance of the fluid.
  - param: level - the level the fluid is in
  - param: pos - the position of the fluid
  - param: explosion - the explosion the fluid is absorbing
  - returns: the amount of the explosion the fluid can absorb
- `default FluidType getFluidType()`
  Returns the type of this fluid.
  - returns: the type of this fluid
- `default boolean move(LivingEntity entity,  Vec3 movementVector,  double gravity)`
  Performs how an entity moves when within the fluid. If using custom
   movement logic, the method should return true. Otherwise, the
   movement logic will default to water.
  - param: entity - the entity moving within the fluid
  - param: movementVector - the velocity of how the entity wants to move
  - param: gravity - the gravity to apply to the entity
  - returns: true if custom movement logic is performed, false otherwise
- `default boolean canConvertToSource(Level level,  BlockPos pos)`
  Returns whether the fluid can create a source.
  - param: level - the level that can get the fluid
  - param: pos - the location of the fluid
  - returns: true if the fluid can create a source, false otherwise
- `default boolean supportsBoating(Boat boat)`
  Returns whether the boat can be used on the fluid.
  - param: boat - the boat trying to be used on the fluid
  - returns: true if the boat can be used, false otherwise
- `default boolean shouldUpdateWhileBoating(Boat boat,  Entity rider)`
  When false, the fluid will no longer update its height value while
   within a boat while it is not within a fluid (Boat.isUnderWater().
  - param: boat - the boat the rider is within that is not inside a fluid
  - param: rider - the rider of the boat
  - returns: true if the fluid height should be updated, false otherwise
- `@Nullable default @Nullable BlockPathTypes getBlockPathType(BlockGetter level,  BlockPos pos,  @Nullable  @Nullable Mob mob,  boolean canFluidLog)`
  Gets the path type of this fluid when an entity is pathfinding. When
   null, uses vanilla behavior.
  - param: level - the level which contains this fluid
  - param: pos - the position of the fluid
  - param: mob - the mob currently pathfinding, may be null
  - param: canFluidLog - true if the path is being applied for fluids that can log blocks,
 should be checked against if the fluid can log a block
  - returns: the path type of this fluid
- `@Nullable default @Nullable BlockPathTypes getAdjacentBlockPathType(BlockGetter level,  BlockPos pos,  @Nullable  @Nullable Mob mob,  BlockPathTypes originalType)`
  Gets the path type of the adjacent fluid to a pathfinding entity.
   Path types with a negative malus are not traversable for the entity.
   Pathfinding entities will favor paths consisting of a lower malus.
   When null, uses vanilla behavior.
  - param: level - the level which contains this fluid
  - param: pos - the position of the fluid
  - param: mob - the mob currently pathfinding, may be null
  - param: originalType - the path type of the source the entity is on
  - returns: the path type of this fluid
- `default boolean canHydrate(BlockGetter getter,  BlockPos pos,  BlockState source,  BlockPos sourcePos)`
  Returns whether the block can be hydrated by a fluid.
  
   Hydration is an arbitrary word which depends on the block.
  
   A farmland has moisture
   A sponge can soak up the liquid
   A coral can live
  - param: getter - the getter which can get the fluid
  - param: pos - the position of the fluid
  - param: source - the state of the block being hydrated
  - param: sourcePos - the position of the block being hydrated
  - returns: true if the block can be hydrated, false otherwise
- `default boolean canExtinguish(BlockGetter getter,  BlockPos pos)`
  Returns whether the block can be extinguished by this fluid.
  - param: getter - the getter which can get the fluid
  - param: pos - the position of the fluid
  - returns: true if the block can be extinguished, false otherwise

## IForgeFriendlyByteBuf

*interface* `net.minecraftforge.common.extensions.IForgeFriendlyByteBuf`

Extension-Interface providing methods for writing registry-id's instead of their registry-names.

### Methods
- `private FriendlyByteBuf self()`
- `default <T> void writeRegistryIdUnsafe(@NotNull  @NotNull IForgeRegistry<T> registry,  @NotNull  T entry)`
  Writes the given entries integer id to the buffer. Notice however that this will only write the id of the given entry and will not check whether it actually exists
   in the given registry. Therefore no safety checks can be performed whilst reading it and if the entry is not in the registry a default value will be written.
  - param: registry - The registry containing the given entry
  - param: entry - The entry who's registryName is to be written
- `default void writeRegistryIdUnsafe(@NotNull  @NotNull IForgeRegistry<?> registry,  @NotNull  @NotNull ResourceLocation entryKey)`
  Writes the given entries integer id to the buffer. Notice however that this will only write the id of the given entry and will not check whether it actually exists
   in the given registry. Therefore no safety checks can be performed whilst reading it and if the entry is not in the registry a default value will be written.
  - param: registry - The registry containing the entry represented by this key
  - param: entryKey - The registry-name of an entry in this IForgeRegistry
- `default <T> T readRegistryIdUnsafe(@NotNull  @NotNull IForgeRegistry<T> registry)`
  Reads an integer value from the buffer, which will be interpreted as an registry-id in the given registry. Notice that if there is no value in the specified registry for the
   read id, that the registry's default value will be returned.
  - param: registry - The registry containing the entry
- `default <T> void writeRegistryId(@NotNull  @NotNull IForgeRegistry<T> registry,  @NotNull  T entry)`
  Writes a given registry-entry's integer id to the specified buffer in combination with writing the containing registry's id. In contrast to
   writeRegistryIdUnsafe(IForgeRegistry, Object) this method checks every single step performed as well as
   writing the registry-id to the buffer, in order to prevent any unexpected behaviour. Therefore this method is to be preferred whenever possible,
   over using the unsafe methods.
  - param: registry - The registry containing the entry
  - param: entry - The entry to write
  - throws: NullPointerException - if the registry or entry was null
  - throws: IllegalArgumentException - if the registry does not contain the specified value
- `default <T> T readRegistryId()`
  Reads an registry-entry from the specified buffer. Notice however that the type cannot be checked without providing an additional class parameter
   - see readRegistryIdSafe(Class) for an safe version.
  - throws: NullPointerException - if the registry could not be found.
- `default <T> T readRegistryIdSafe(Class<? super T> registrySuperType)`
  Reads an registry-entry from the specified buffer. This method also verifies, that the value read is of the appropriate type.
  - throws: IllegalArgumentException - if the retrieved entries registryType doesn't match the one passed in.
  - throws: NullPointerException - if the registry could not be found.
- `default void writeFluidStack(FluidStack stack)`
  Writes a FluidStack to the packet buffer, easy enough. If EMPTY, writes a FALSE.
   This behavior provides parity with the ItemStack method in PacketBuffer.
  - param: stack - FluidStack to be written to the packet buffer.
- `default FluidStack readFluidStack()`
  Reads a FluidStack from this buffer.

## IForgeGameTestHelper

*interface* `net.minecraftforge.common.extensions.IForgeGameTestHelper`

### Methods
- `private GameTestHelper self()`
- `default void assertTrue(boolean value,  Supplier<String> message)`
- `default void assertFalse(boolean value,  Supplier<String> message)`
- `default ServerPlayer makeMockServerPlayer()`

## IForgeHolderSet

*interface* `net.minecraftforge.common.extensions.IForgeHolderSet`

### Methods
- `default void addInvalidationListener(Runnable runnable)`
  Adds a callback to run when this holderset's contents invalidate (i.e. because tags were rebound).
  
   The intended usage and use case is with composite holdersets that need to cache sets/list based on other
   holdersets, which may be mutable (because they are tag-based or themselves composite holdersets).
   Composite holdersets should use this to add callbacks to each of their component holdersets when constructed.
  - param: runnable - Runnable to invoke when this component holderset's contents are no longer valid.
 This runnable should only clear caches and allow them to be lazily reevaluated later,
 as not all tag holdersets may have been rebound when this is called.
 This runnable should also invalidate all of the caller's listeners.
- `default IForgeHolderSet.SerializationType serializationType()`
  What format this holderset serializes to in json/nbt/etc

## IForgeIntrinsicHolderTagAppender

*interface* `net.minecraftforge.common.extensions.IForgeIntrinsicHolderTagAppender`

All Superinterfaces: IForgeTagAppender<T>

### Methods
- `private IntrinsicHolderTagsProvider.IntrinsicTagAppender<T> self()`
- `ResourceKey<T> getKey(T value)`
- `default IntrinsicHolderTagsProvider.IntrinsicTagAppender<T> remove(T entry)`
  Adds a registry entry to the tag json's remove list. Callable during datageneration.
  - param: entry - The entry to remove
  - returns: The builder for chaining
- `default IntrinsicHolderTagsProvider.IntrinsicTagAppender<T> remove(T first,  T... entries)`
  Adds multiple registry entries to the tag json's remove list. Callable during datageneration.
  - param: entries - The entries to remove
  - returns: The builder for chaining
- `default IntrinsicHolderTagsProvider.IntrinsicTagAppender<T> addTags(TagKey<T>... values)`
- `default IntrinsicHolderTagsProvider.IntrinsicTagAppender<T> replace()`
- `default IntrinsicHolderTagsProvider.IntrinsicTagAppender<T> replace(boolean value)`
- `default IntrinsicHolderTagsProvider.IntrinsicTagAppender<T> remove(ResourceLocation location)`
  Description copied from interface: IForgeTagAppender
  Adds a single element's ID to the tag json's remove list. Callable during datageneration.
  - param: location - The ID of the element to remove
  - returns: The builder for chaining
- `default IntrinsicHolderTagsProvider.IntrinsicTagAppender<T> remove(ResourceLocation first,  ResourceLocation... locations)`
  Description copied from interface: IForgeTagAppender
  Adds multiple elements' IDs to the tag json's remove list. Callable during datageneration.
  - returns: The builder for chaining
- `default IntrinsicHolderTagsProvider.IntrinsicTagAppender<T> remove(ResourceKey<T> resourceKey)`
  Description copied from interface: IForgeTagAppender
  Adds a resource key to the tag json's remove list. Callable during datageneration.
  - param: resourceKey - The resource key of the element to remove
  - returns: The appender for chaining
- `default IntrinsicHolderTagsProvider.IntrinsicTagAppender<T> remove(ResourceKey<T> firstResourceKey,  ResourceKey<T>... resourceKeys)`
  Description copied from interface: IForgeTagAppender
  Adds multiple resource keys to the tag json's remove list. Callable during datageneration.
  - returns: The appender for chaining
- `default IntrinsicHolderTagsProvider.IntrinsicTagAppender<T> remove(TagKey<T> tag)`
  Description copied from interface: IForgeTagAppender
  Adds a tag to the tag json's remove list. Callable during datageneration.
  - param: tag - The ID of the tag to remove
  - returns: The builder for chaining
- `default IntrinsicHolderTagsProvider.IntrinsicTagAppender<T> remove(TagKey<T> first,  TagKey<T>... tags)`
  Description copied from interface: IForgeTagAppender
  Adds multiple tags to the tag json's remove list. Callable during datageneration.
  - returns: The builder for chaining

### Inherited methods
- from `net.minecraftforge.common.extensions.IForgeTagAppender`: `addOptionalTag`, `addOptionalTags`

## IForgeItem

*interface* `net.minecraftforge.common.extensions.IForgeItem`

### Methods
- `private Item self()`
- `default com.google.common.collect.Multimap<Attribute,AttributeModifier> getAttributeModifiers(EquipmentSlot slot,  ItemStack stack)`
  ItemStack sensitive version of getItemAttributeModifiers
- `default boolean onDroppedByPlayer(ItemStack item,  Player player)`
  Called when a player drops the item into the world, returning false from this
   will prevent the item from being removed from the players inventory and
   spawning in the world
  - param: player - The player that dropped the item
  - param: item - The item stack, before the item is removed.
- `default Component getHighlightTip(ItemStack item,  Component displayName)`
  Allow the item one last chance to modify its name used for the tool highlight
   useful for adding something extra that can't be removed by a user in the
   displayed name, such as a mode of operation.
  - param: item - the ItemStack for the item.
  - param: displayName - the name that will be displayed unless it is changed in
 this method.
- `default InteractionResult onItemUseFirst(ItemStack stack,  UseOnContext context)`
  This is called when the item is used, before the block is activated.
  - returns: Return PASS to allow vanilla handling, any other to skip normal code.
- `default boolean isPiglinCurrency(ItemStack stack)`
  Called by Piglins when checking to see if they will give an item or something in exchange for this item.
  - returns: True if this item can be used as "currency" by piglins
- `default boolean makesPiglinsNeutral(ItemStack stack,  LivingEntity wearer)`
  Called by Piglins to check if a given item prevents hostility on sight. If this is true the Piglins will be neutral to the entity wearing this item, and will not
   attack on sight. Note: This does not prevent Piglins from becoming hostile due to other actions, nor does it make Piglins that are already hostile stop being so.
  - param: wearer - The entity wearing this ItemStack
  - returns: True if piglins are neutral to players wearing this item in an armor slot
- `boolean isRepairable(ItemStack stack)`
  Called by CraftingManager to determine if an item is reparable.
  - returns: True if reparable
- `default float getXpRepairRatio(ItemStack stack)`
  Determines the amount of durability the mending enchantment
   will repair, on average, per point of experience.
- `@Nullable default @Nullable CompoundTag getShareTag(ItemStack stack)`
  Override this method to change the NBT data being sent to the client. You
   should ONLY override this when you have no other choice, as this might change
   behavior client side!
  
   Note that this will sometimes be applied multiple times, the following MUST
   be supported:
   Item item = stack.getItem();
   NBTTagCompound nbtShare1 = item.getNBTShareTag(stack);
   stack.setTagCompound(nbtShare1);
   NBTTagCompound nbtShare2 = item.getNBTShareTag(stack);
   assert nbtShare1.equals(nbtShare2);
  - param: stack - The stack to send the NBT tag for
  - returns: The NBT tag
- `default void readShareTag(ItemStack stack,  @Nullable  @Nullable CompoundTag nbt)`
  Override this method to decide what to do with the NBT data received from
   getNBTShareTag().
  - param: stack - The stack that received NBT
  - param: nbt - Received NBT, can be null
- `default boolean onBlockStartBreak(ItemStack itemstack,  BlockPos pos,  Player player)`
  Called before a block is broken. Return true to prevent default block
   harvesting.
  
   Note: In SMP, this is called on both client and server sides!
  - param: itemstack - The current ItemStack
  - param: pos - Block's position in world
  - param: player - The Player that is wielding the item
  - returns: True to prevent harvesting, false to continue as normal
- `default void onStopUsing(ItemStack stack,  LivingEntity entity,  int count)`
  Called when an entity stops using an item for any reason, notably when selecting another item without releasing or finishing.
   This method is called in addition to any other hooks called when an item is finished using; when another hook is also called it will be called before this method.
  
   Note that if you break an item while using it (that is, it becomes empty without swapping the stack instance), this hook may not be called on the serverside as you are
   technically still using the empty item (thus this hook is called on air instead). It is necessary to call LivingEntity.stopUsingItem() as part of your
   ItemStack.hurtAndBreak(int, LivingEntity, Consumer) callback to prevent this issue.
  
   For most uses, you likely want one of the following:
  
   Item.finishUsingItem(ItemStack, Level, LivingEntity) for when the player releases and enough ticks have passed
   Item.releaseUsing(ItemStack, Level, LivingEntity, int) (ItemStack, Level, LivingEntity)} for when the player releases but the full timer has not passed
  - param: stack - The Item being used
  - param: entity - The entity using the item, typically a player
  - param: count - The amount of time in tick the item has been used for continuously
- `default boolean onLeftClickEntity(ItemStack stack,  Player player,  Entity entity)`
  Called when the player Left Clicks (attacks) an entity. Processed before
   damage is done, if return value is true further processing is canceled and
   the entity is not attacked.
  - param: stack - The Item being used
  - param: player - The player that is attacking
  - param: entity - The entity being attacked
  - returns: True to cancel the rest of the interaction.
- `default ItemStack getCraftingRemainingItem(ItemStack itemStack)`
  ItemStack sensitive version of Item.getCraftingRemainingItem().
   Returns a full ItemStack instance of the result.
  - param: itemStack - The current ItemStack
  - returns: The resulting ItemStack
- `default boolean hasCraftingRemainingItem(ItemStack stack)`
  ItemStack sensitive version of Item.hasCraftingRemainingItem().
  - param: stack - The current item stack
  - returns: True if this item has a crafting remaining item
- `default int getEntityLifespan(ItemStack itemStack,  Level level)`
  Retrieves the normal 'lifespan' of this item when it is dropped on the ground
   as a EntityItem. This is in ticks, standard result is 6000, or 5 mins.
  - param: itemStack - The current ItemStack
  - param: level - The level the entity is in
  - returns: The normal lifespan in ticks.
- `default boolean hasCustomEntity(ItemStack stack)`
  Determines if this Item has a special entity for when they are in the world.
   Is called when a EntityItem is spawned in the world, if true and
   Item#createCustomEntity returns non null, the EntityItem will be destroyed
   and the new Entity will be added to the world.
  - param: stack - The current item stack
  - returns: True of the item has a custom entity, If true,
 Item#createCustomEntity will be called
- `@Nullable default @Nullable Entity createEntity(Level level,  Entity location,  ItemStack stack)`
  This function should return a new entity to replace the dropped item.
   Returning null here will not kill the EntityItem and will leave it to
   function normally. Called when the item it placed in a level.
  - param: level - The level object
  - param: location - The EntityItem object, useful for getting the position of
 the entity
  - param: stack - The current item stack
  - returns: A new Entity object to spawn or null
- `default boolean onEntityItemUpdate(ItemStack stack,  ItemEntity entity)`
  Called by the default implemetation of EntityItem's onUpdate method, allowing
   for cleaner control over the update of the item without having to write a
   subclass.
  - param: entity - The entity Item
  - returns: Return true to skip any further update code.
- `default boolean doesSneakBypassUse(ItemStack stack,  LevelReader level,  BlockPos pos,  Player player)`
  Should this item, when held, allow sneak-clicks to pass through to the
   underlying block?
  - param: level - The level
  - param: pos - Block position in level
  - param: player - The Player that is wielding the item
- `@Deprecated(forRemoval=true,  since="1.20.1") default void onArmorTick(ItemStack stack,  Level level,  Player player)` (deprecated)
  Called to tick armor in the armor slot. Override to do something
- `default void onInventoryTick(ItemStack stack,  Level level,  Player player,  int slotIndex,  int selectedIndex)`
  Called to tick this items in a players inventory, the indexes are the global slot index.
- `default boolean canEquip(ItemStack stack,  EquipmentSlot armorType,  Entity entity)`
  Determines if the specific ItemStack can be placed in the specified armor
   slot, for the entity.
  - param: stack - The ItemStack
  - param: armorType - Armor slot to be verified.
  - param: entity - The entity trying to equip the armor
  - returns: True if the given ItemStack can be inserted in the slot
- `@Nullable default @Nullable EquipmentSlot getEquipmentSlot(ItemStack stack)`
  Override this to set a non-default armor slot for an ItemStack, but do
   not use this to get the armor slot of said stack; for that, use
   LivingEntity.getEquipmentSlotForItem(ItemStack)..
  - param: stack - the ItemStack
  - returns: the armor slot of the ItemStack, or null to let the default
 vanilla logic as per LivingEntity.getSlotForItemStack(stack)
 decide
- `default boolean isBookEnchantable(ItemStack stack,  ItemStack book)`
  Allow or forbid the specific book/item combination as an anvil enchant
  - param: stack - The item
  - param: book - The book
  - returns: if the enchantment is allowed
- `@Nullable default @Nullable String getArmorTexture(ItemStack stack,  Entity entity,  EquipmentSlot slot,  String type)`
  Called by RenderBiped and RenderPlayer to determine the armor texture that
   should be use for the currently equipped item. This will only be called on
   instances of ItemArmor.
  
   Returning null from this function will use the default value.
  - param: stack - ItemStack for the equipped armor
  - param: entity - The entity wearing the armor
  - param: slot - The slot the armor is in
  - param: type - The subtype, can be null or "overlay"
  - returns: Path of texture to bind, or null to use default
- `default boolean onEntitySwing(ItemStack stack,  LivingEntity entity)`
  Called when a entity tries to play the 'swing' animation.
  - param: entity - The entity swinging the item.
  - returns: True to cancel any further processing by EntityLiving
- `default int getDamage(ItemStack stack)`
  Return the itemDamage represented by this ItemStack. Defaults to the Damage
   entry in the stack NBT, but can be overridden here for other sources.
  - param: stack - The itemstack that is damaged
  - returns: the damage value
- `default int getMaxDamage(ItemStack stack)`
  Return the maxDamage for this ItemStack. Defaults to the maxDamage field in
   this item, but can be overridden here for other sources such as NBT.
  - param: stack - The itemstack that is damaged
  - returns: the damage value
- `default boolean isDamaged(ItemStack stack)`
  Return if this itemstack is damaged. Note only called if
   ItemStack.isDamageableItem() is true.
  - param: stack - the stack
  - returns: if the stack is damaged
- `default void setDamage(ItemStack stack,  int damage)`
  Set the damage for this itemstack. Note, this method is responsible for zero
   checking.
  - param: stack - the stack
  - param: damage - the new damage value
- `default boolean canPerformAction(ItemStack stack,  ToolAction toolAction)`
  Queries if an item can perform the given action.
   See ToolActions for a description of each stock action
  - param: stack - The stack being used
  - param: toolAction - The action being queried
  - returns: True if the stack can perform the action
- `default boolean isCorrectToolForDrops(ItemStack stack,  BlockState state)`
  ItemStack sensitive version of Item.isCorrectToolForDrops(BlockState)
  - param: stack - The itemstack used to harvest the block
  - param: state - The block trying to harvest
  - returns: true if the stack can harvest the block
- `default int getMaxStackSize(ItemStack stack)`
  Gets the maximum number of items that this stack should be able to hold. This
   is a ItemStack (and thus NBT) sensitive version of Item.getMaxStackSize().
  - param: stack - The ItemStack
  - returns: The maximum size this item can be stacked to
- `default int getEnchantmentValue(ItemStack stack)`
  ItemStack sensitive version of Item.getEnchantmentValue().
  - param: stack - The ItemStack
  - returns: the enchantment value
- `default boolean canApplyAtEnchantingTable(ItemStack stack,  Enchantment enchantment)`
  Checks whether an item can be enchanted with a certain enchantment. This
   applies specifically to enchanting an item in the enchanting table and is
   called when retrieving the list of possible enchantments for an item.
   Enchantments may additionally (or exclusively) be doing their own checks in
   Enchantment.canApplyAtEnchantingTable(ItemStack);
   check the individual implementation for reference. By default this will check
   if the enchantment type is valid for this item type.
  - param: stack - the item stack to be enchanted
  - param: enchantment - the enchantment to be applied
  - returns: true if the enchantment can be applied to this item
- `default int getEnchantmentLevel(ItemStack stack,  Enchantment enchantment)`
  Gets the level of the enchantment currently present on the stack. By default, returns the enchantment level present in NBT.
   Most enchantment implementations rely upon this method.
   For consistency, results of this method should be the same as getting the enchantment from getAllEnchantments(ItemStack)
  - param: stack - the item stack being checked
  - param: enchantment - the enchantment being checked for
  - returns: Level of the enchantment, or 0 if not present
- `default Map<Enchantment,Integer> getAllEnchantments(ItemStack stack)`
  Gets a map of all enchantments present on the stack. By default, returns the enchantments present in NBT.
   Used in several places in code including armor enchantment hooks.
   For consistency, any enchantments in the returned map should include the same level in getEnchantmentLevel(ItemStack, Enchantment)
  - param: stack - the item stack being checked
  - returns: Map of all enchantments on the stack, empty if no enchantments are present
- `default boolean shouldCauseReequipAnimation(ItemStack oldStack,  ItemStack newStack,  boolean slotChanged)`
  Determine if the player switching between these two item stacks
  - param: oldStack - The old stack that was equipped
  - param: newStack - The new stack
  - param: slotChanged - If the current equipped slot was changed, Vanilla does not
 play the animation if you switch between two slots that
 hold the exact same item.
  - returns: True to play the item change animation
- `default boolean shouldCauseBlockBreakReset(ItemStack oldStack,  ItemStack newStack)`
  Called when the player is mining a block and the item in his hand changes.
   Allows to not reset blockbreaking if only NBT or similar changes.
  - param: oldStack - The old stack that was used for mining. Item in players main
 hand
  - param: newStack - The new stack
  - returns: True to reset block break progress
- `default boolean canContinueUsing(ItemStack oldStack,  ItemStack newStack)`
  Called while an item is in 'active' use to determine if usage should
   continue. Allows items to continue being used while sustaining damage, for
   example.
  - param: oldStack - the previous 'active' stack
  - param: newStack - the stack currently in the active hand
  - returns: true to set the new stack to active and continue using it
- `@Nullable default @Nullable String getCreatorModId(ItemStack itemStack)`
  Called to get the Mod ID of the mod that *created* the ItemStack, instead of
   the real Mod ID that *registered* it.
  
   For example the Forge Universal Bucket creates a subitem for each modded
   fluid, and it returns the modded fluid's Mod ID here.
  
   Mods that register subitems for other mods can override this. Informational
   mods can call it to show the mod that created the item.
  - param: itemStack - the ItemStack to check
  - returns: the Mod ID for the ItemStack, or null when there is no specially
 associated mod and IForgeRegistry.getKey(Object) would return null.
- `@Nullable default @Nullable ICapabilityProvider initCapabilities(ItemStack stack,  @Nullable  @Nullable CompoundTag nbt)`
  Called from ItemStack.setItem, will hold extra data for the life of this
   ItemStack. Can be retrieved from stack.getCapabilities() The NBT can be null
   if this is not called from readNBT or if the item the stack is changing FROM
   is different then this item, or the previous item had no capabilities.
  
   This is called BEFORE the stacks item is set so you can use stack.getItem()
   to see the OLD item. Remember that getItem CAN return null.
  - param: stack - The ItemStack
  - param: nbt - NBT of this item serialized, or null.
  - returns: A holder instance associated with this ItemStack where you can hold
 capabilities for the life of this item.
- `default boolean canDisableShield(ItemStack stack,  ItemStack shield,  LivingEntity entity,  LivingEntity attacker)`
  Can this Item disable a shield
  - param: stack - The ItemStack
  - param: shield - The shield in question
  - param: entity - The LivingEntity holding the shield
  - param: attacker - The LivingEntity holding the ItemStack
  - returns: True if this ItemStack can disable the shield in question.
- `default int getBurnTime(ItemStack itemStack,  @Nullable  @Nullable RecipeType<?> recipeType)`
  - returns: the fuel burn time for this itemStack in a furnace. Return 0 to make
 it not act as a fuel. Return -1 to let the default vanilla logic
 decide.
- `default void onHorseArmorTick(ItemStack stack,  Level level,  Mob horse)`
  Called every tick from Horse#playGallopSound(SoundEvent) on the item in the
   armor slot.
  - param: stack - the armor itemstack
  - param: level - the level the horse is in
  - param: horse - the horse wearing this armor
- `default <T extends LivingEntity> int damageItem(ItemStack stack,  int amount,  T entity,  Consumer<T> onBroken)`
  Reduce the durability of this item by the amount given.
   This can be used to e.g. consume power from NBT before durability.
  - param: stack - The itemstack to damage
  - param: amount - The amount to damage
  - param: entity - The entity damaging the item
  - param: onBroken - The on-broken callback from vanilla
  - returns: The amount of damage to pass to the vanilla logic
- `default void onDestroyed(ItemEntity itemEntity,  DamageSource damageSource)`
  Called when an item entity for this stack is destroyed. Note: The ItemStack can be retrieved from the item entity.
  - param: itemEntity - The item entity that was destroyed.
  - param: damageSource - Damage source that caused the item entity to "die".
- `default boolean isEnderMask(ItemStack stack,  Player player,  EnderMan endermanEntity)`
  Whether this Item can be used to hide player head for enderman.
  - param: stack - the ItemStack
  - param: player - The player watching the enderman
  - param: endermanEntity - The enderman that the player look
  - returns: true if this Item can be used to hide player head for enderman
- `default boolean canElytraFly(ItemStack stack,  LivingEntity entity)`
  Used to determine if the player can use Elytra flight.
   This is called Client and Server side.
  - param: stack - The ItemStack in the Chest slot of the entity.
  - param: entity - The entity trying to fly.
  - returns: True if the entity can use Elytra flight.
- `default boolean elytraFlightTick(ItemStack stack,  LivingEntity entity,  int flightTicks)`
  Used to determine if the player can continue Elytra flight,
   this is called each tick, and can be used to apply ItemStack damage,
   consume Energy, or what have you.
   For example the Vanilla implementation of this, applies damage to the
   ItemStack every 20 ticks.
  - param: stack - ItemStack in the Chest slot of the entity.
  - param: entity - The entity currently in Elytra flight.
  - param: flightTicks - The number of ticks the entity has been Elytra flying for.
  - returns: True if the entity should continue Elytra flight or False to stop.
- `default boolean canWalkOnPowderedSnow(ItemStack stack,  LivingEntity wearer)`
  Called by the powdered snow block to check if a living entity wearing this can walk on the snow, granting the same behavior as leather boots.
   Only affects items worn in the boots slot.
  - param: stack - Stack instance
  - param: wearer - The entity wearing this ItemStack
  - returns: True if the entity can walk on powdered snow
- `default boolean isDamageable(ItemStack stack)`
  Used to test if this item can be damaged, but with the ItemStack in question.
   Please note that in some cases no ItemStack is available, so the stack-less method will be used.
  - param: stack - ItemStack in the Chest slot of the entity.
- `@NotNull default @NotNull AABB getSweepHitBox(@NotNull  @NotNull ItemStack stack,  @NotNull  @NotNull Player player,  @NotNull  @NotNull Entity target)`
  Get a bounding box (AABB) of a sweep attack.
  - param: stack - the stack held by the player.
  - param: player - the performing the attack the attack.
  - param: target - the entity targeted by the attack.
  - returns: the bounding box.
- `default int getDefaultTooltipHideFlags(@NotNull  @NotNull ItemStack stack)`
  Get the tooltip parts that should be hidden by default on the given stack if the HideFlags tag is not set.
  - param: stack - the stack
  - returns: the default hide flags
- `@Nullable default @Nullable FoodProperties getFoodProperties(ItemStack stack,  @Nullable  @Nullable LivingEntity entity)`
  Get the food properties for this item.
   Use this instead of the Item.getFoodProperties() method, for ItemStack sensitivity.
  
   The @Nullable annotation was only added, due to the default method, also being @Nullable.
   Use this with a grain of salt, as if you return null here and true at Item.isEdible(), NPEs will occur!
  - param: stack - The ItemStack the entity wants to eat.
  - param: entity - The entity which wants to eat the food. Be aware that this can be null!
  - returns: The current FoodProperties for the item.
- `default boolean isNotReplaceableByPickAction(ItemStack stack,  Player player,  int inventorySlot)`
  Whether the given ItemStack should be excluded (if possible) when selecting the target hotbar slot of a "pick" action.
   By default, this returns true for enchanted stacks.
  - param: player - the player performing the picking
  - param: inventorySlot - the inventory slot of the item being up for replacement
  - returns: true to leave this stack in the hotbar if possible
- `default boolean canGrindstoneRepair(ItemStack stack)`
  Returns true if the given ItemStack can be put into a grindstone to be repaired and/or stripped of its enchantments.
  - returns: true if the given ItemStack can be put into a grindstone to be repaired and/or stripped of its enchantments

## IForgeItemStack

*interface* `net.minecraftforge.common.extensions.IForgeItemStack`

All Superinterfaces: ICapabilityProvider, ICapabilitySerializable<CompoundTag>, INBTSerializable<CompoundTag>

### Methods
- `private ItemStack self()`
- `default ItemStack getCraftingRemainingItem()`
  ItemStack sensitive version of Item.getCraftingRemainingItem().
   Returns a full ItemStack instance of the result.
  - returns: The resulting ItemStack
- `default boolean hasCraftingRemainingItem()`
  ItemStack sensitive version of Item.hasCraftingRemainingItem().
  - returns: True if this item has a crafting remaining item
- `default int getBurnTime(@Nullable  @Nullable RecipeType<?> recipeType)`
  - returns: the fuel burn time for this itemStack in a furnace. Return 0 to make
 it not act as a fuel. Return -1 to let the default vanilla logic
 decide.
- `default InteractionResult onItemUseFirst(UseOnContext context)`
- `default CompoundTag serializeNBT()`
- `default boolean canPerformAction(ToolAction toolAction)`
  Queries if an item can perform the given action.
   See ToolActions for a description of each stock action
  - param: toolAction - The action being queried
  - returns: True if the stack can perform the action
- `default boolean onBlockStartBreak(BlockPos pos,  Player player)`
  Called before a block is broken. Return true to prevent default block
   harvesting.
  
   Note: In SMP, this is called on both client and server sides!
  - param: pos - Block's position in world
  - param: player - The Player that is wielding the item
  - returns: True to prevent harvesting, false to continue as normal
- `default boolean shouldCauseBlockBreakReset(ItemStack newStack)`
  Called when the player is mining a block and the item in his hand changes.
   Allows to not reset blockbreaking if only NBT or similar changes.
  - param: newStack - The new stack
  - returns: True to reset block break progress
- `default boolean canApplyAtEnchantingTable(Enchantment enchantment)`
  Checks whether an item can be enchanted with a certain enchantment. This
   applies specifically to enchanting an item in the enchanting table and is
   called when retrieving the list of possible enchantments for an item.
   Enchantments may additionally (or exclusively) be doing their own checks in
   Enchantment.canApplyAtEnchantingTable(ItemStack);
   check the individual implementation for reference. By default this will check
   if the enchantment type is valid for this item type.
  - param: enchantment - the enchantment to be applied
  - returns: true if the enchantment can be applied to this item
- `default int getEnchantmentLevel(Enchantment enchantment)`
  Gets the level of the enchantment currently present on the stack. By default, returns the enchantment level present in NBT.
  
   Equivalent to calling EnchantmentHelper.getItemEnchantmentLevel(Enchantment, ItemStack)
   Use in place of EnchantmentHelper.getTagEnchantmentLevel(Enchantment, ItemStack) for checking presence of an enchantment in logic implementing the enchantment behavior.
   Use EnchantmentHelper.getTagEnchantmentLevel(Enchantment, ItemStack) instead when modifying an item's enchantments.
  - param: enchantment - the enchantment being checked for
  - returns: Level of the enchantment, or 0 if not present
- `default Map<Enchantment,Integer> getAllEnchantments()`
  Gets a map of all enchantments present on the stack. By default, returns the enchantments present in NBT, ignoring book enchantments.
  
   Use in place of EnchantmentHelper.getEnchantments(ItemStack) for checking presence of an enchantment in logic implementing the enchantment behavior.
   Use EnchantmentHelper.getEnchantments(ItemStack) instead when modifying an item's enchantments.
  - returns: Map of all enchantments on the stack, empty if no enchantments are present
- `default int getEnchantmentValue()`
  ItemStack sensitive version of Item.getEnchantmentValue().
  - returns: the enchantment value of this ItemStack
- `@Nullable default @Nullable EquipmentSlot getEquipmentSlot()`
  Override this to set a non-default armor slot for an ItemStack, but do
   not use this to get the armor slot of said stack; for that, use
   LivingEntity.getEquipmentSlotForItem(ItemStack).
  - returns: the armor slot of the ItemStack, or null to let the default
 vanilla logic as per LivingEntity.getSlotForItemStack(stack)
 decide
- `default boolean canDisableShield(ItemStack shield,  LivingEntity entity,  LivingEntity attacker)`
  Can this Item disable a shield
  - param: shield - The shield in question
  - param: entity - The LivingEntity holding the shield
  - param: attacker - The LivingEntity holding the ItemStack
  - returns: True if this ItemStack can disable the shield in question.
- `default boolean onEntitySwing(LivingEntity entity)`
  Called when a entity tries to play the 'swing' animation.
  - param: entity - The entity swinging the item.
  - returns: True to cancel any further processing by EntityLiving
- `default void onStopUsing(LivingEntity entity,  int count)`
  Called when an entity stops using an item item for any reason.
  - param: entity - The entity using the item, typically a player
  - param: count - The amount of time in tick the item has been used for continuously
- `default int getEntityLifespan(Level level)`
  Retrieves the normal 'lifespan' of this item when it is dropped on the ground
   as a EntityItem. This is in ticks, standard result is 6000, or 5 mins.
  - param: level - The level the entity is in
  - returns: The normal lifespan in ticks.
- `default boolean onEntityItemUpdate(ItemEntity entity)`
  Called by the default implemetation of EntityItem's onUpdate method, allowing
   for cleaner control over the update of the item without having to write a
   subclass.
  - param: entity - The entity Item
  - returns: Return true to skip any further update code.
- `default float getXpRepairRatio()`
  Determines the amount of durability the mending enchantment
   will repair, on average, per point of experience.
- `@Deprecated(forRemoval=true,  since="1.20.1") default void onArmorTick(Level level,  Player player)` (deprecated)
  Called to tick armor in the armor slot. Override to do something
- `default void onInventoryTick(Level level,  Player player,  int slotIndex,  int selectedIndex)`
  Called to tick this items in a players inventory, the indexes are the global slot index.
- `default void onHorseArmorTick(Level level,  Mob horse)`
  Called every tick from Horse#playGallopSound(SoundEvent) on the item in the
   armor slot.
  - param: level - the level the horse is in
  - param: horse - the horse wearing this armor
- `default boolean canEquip(EquipmentSlot armorType,  Entity entity)`
  Determines if the specific ItemStack can be placed in the specified armor
   slot, for the entity.
  - param: armorType - Armor slot to be verified.
  - param: entity - The entity trying to equip the armor
  - returns: True if the given ItemStack can be inserted in the slot
- `default boolean isBookEnchantable(ItemStack book)`
  Allow or forbid the specific book/item combination as an anvil enchant
  - param: book - The book
  - returns: if the enchantment is allowed
- `default boolean onDroppedByPlayer(Player player)`
  Called when a player drops the item into the world, returning false from this
   will prevent the item from being removed from the players inventory and
   spawning in the world
  - param: player - The player that dropped the item
- `default Component getHighlightTip(Component displayName)`
  Allow the item one last chance to modify its name used for the tool highlight
   useful for adding something extra that can't be removed by a user in the
   displayed name, such as a mode of operation.
  - param: displayName - the name that will be displayed unless it is changed in
 this method.
- `@Nullable default @Nullable CompoundTag getShareTag()`
  Get the NBT data to be sent to the client. The Item can control what data is kept in the tag.
  
   Note that this will sometimes be applied multiple times, the following MUST
   be supported:
   Item item = stack.getItem();
   NBTTagCompound nbtShare1 = item.getNBTShareTag(stack);
   stack.setTagCompound(nbtShare1);
   NBTTagCompound nbtShare2 = item.getNBTShareTag(stack);
   assert nbtShare1.equals(nbtShare2);
  - returns: The NBT tag
- `default void readShareTag(@Nullable  @Nullable CompoundTag nbt)`
  Override this method to decide what to do with the NBT data received from
   getNBTShareTag().
  - param: nbt - Received NBT, can be null
- `default boolean doesSneakBypassUse(LevelReader level,  BlockPos pos,  Player player)`
  Should this item, when held, allow sneak-clicks to pass through to the underlying block?
  - param: level - The level
  - param: pos - Block position in level
  - param: player - The Player that is wielding the item
- `default boolean areShareTagsEqual(ItemStack other)`
  Modeled after ItemStack.areItemStackTagsEqual
   Uses Item.getNBTShareTag for comparison instead of NBT and capabilities.
   Only used for comparing itemStacks that were transferred from server to client using Item.getNBTShareTag.
- `default boolean equals(ItemStack other,  boolean limitTags)`
  Determines if the ItemStack is equal to the other item stack, including Item, Count, and NBT.
  - param: other - The other stack
  - param: limitTags - True to use shareTag False to use full NBT tag
  - returns: true if equals
- `default boolean isRepairable()`
  Determines if a item is reparable, used by Repair recipes and Grindstone.
  - returns: True if reparable
- `default boolean isPiglinCurrency()`
  Called by Piglins when checking to see if they will give an item or something in exchange for this item.
  - returns: True if this item can be used as "currency" by piglins
- `default boolean makesPiglinsNeutral(LivingEntity wearer)`
  Called by Piglins to check if a given item prevents hostility on sight. If this is true the Piglins will be neutral to the entity wearing this item, and will not
   attack on sight. Note: This does not prevent Piglins from becoming hostile due to other actions, nor does it make Piglins that are already hostile stop being so.
  - param: wearer - The entity wearing this ItemStack
  - returns: True if piglins are neutral to players wearing this item in an armor slot
- `default boolean isEnderMask(Player player,  EnderMan endermanEntity)`
  Whether this Item can be used to hide player head for enderman.
  - param: player - The player watching the enderman
  - param: endermanEntity - The enderman that the player look
  - returns: true if this Item can be used.
- `default boolean canElytraFly(LivingEntity entity)`
  Used to determine if the player can use Elytra flight.
   This is called Client and Server side.
  - param: entity - The entity trying to fly.
  - returns: True if the entity can use Elytra flight.
- `default boolean elytraFlightTick(LivingEntity entity,  int flightTicks)`
  Used to determine if the player can continue Elytra flight,
   this is called each tick, and can be used to apply ItemStack damage,
   consume Energy, or what have you.
   For example the Vanilla implementation of this, applies damage to the
   ItemStack every 20 ticks.
  - param: entity - The entity currently in Elytra flight.
  - param: flightTicks - The number of ticks the entity has been Elytra flying for.
  - returns: True if the entity should continue Elytra flight or False to stop.
- `default boolean canWalkOnPowderedSnow(LivingEntity wearer)`
  Called by the powdered snow block to check if a living entity wearing this can walk on the snow, granting the same behavior as leather boots.
   Only affects items worn in the boots slot.
  - param: wearer - The entity wearing this ItemStack
  - returns: True if the entity can walk on powdered snow
- `@NotNull default @NotNull AABB getSweepHitBox(@NotNull  @NotNull Player player,  @NotNull  @NotNull Entity target)`
  Get a bounding box (AABB) of a sweep attack.
  - param: player - the performing the attack the attack.
  - param: target - the entity targeted by the attack.
  - returns: the bounding box.
- `default void onDestroyed(ItemEntity itemEntity,  DamageSource damageSource)`
  Called when an item entity for this stack is destroyed. Note: The ItemStack can be retrieved from the item entity.
  - param: itemEntity - The item entity that was destroyed.
  - param: damageSource - Damage source that caused the item entity to "die".
- `@Nullable default @Nullable FoodProperties getFoodProperties(@Nullable  @Nullable LivingEntity entity)`
  Get the food properties for this item.
   This is a bouncer for easier use of IForgeItem.getFoodProperties(ItemStack, LivingEntity)
  
   The @Nullable annotation was only added, due to the default method, also being @Nullable.
   Use this with a grain of salt, as if you return null here and true at Item.isEdible(), NPEs will occur!
  - param: entity - The entity which wants to eat the food. Be aware that this can be null!
  - returns: The current FoodProperties for the item.
- `default boolean isNotReplaceableByPickAction(Player player,  int inventorySlot)`
  Whether this stack should be excluded (if possible) when selecting the target hotbar slot of a "pick" action.
   By default, this returns true for enchanted stacks.
  - param: player - the player performing the picking
  - param: inventorySlot - the inventory slot of the item being up for replacement
  - returns: true to leave this stack in the hotbar if possible
- `default boolean canGrindstoneRepair()`
  Returns true if the given ItemStack can be put into a grindstone to be repaired and/or stripped of its enchantments.
  - returns: true if the given ItemStack can be put into a grindstone to be repaired and/or stripped of its enchantments

### Inherited methods
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.util.INBTSerializable`: `deserializeNBT`

## IForgeLevel

*interface* `net.minecraftforge.common.extensions.IForgeLevel`

All Superinterfaces: ICapabilityProvider

### Methods
- `double getMaxEntityRadius()`
  The maximum radius to scan for entities when trying to check bounding boxes. Vanilla's default is
   2.0D But mods that add larger entities may increase this.
- `double increaseMaxEntityRadius(double value)`
  Increases the max entity radius, this is safe to call with any value.
   The setter will verify the input value is larger then the current setting.
  - param: value - New max radius to set.
  - returns: The new max radius
- `default Collection<PartEntity<?>> getPartEntities()`
  All part entities in this world. Used when collecting entities in an AABB to fix parts being
   ignored whose parent entity is in a chunk that does not intersect with the AABB.

### Inherited methods
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`

## IForgeLevelChunk

*interface* `net.minecraftforge.common.extensions.IForgeLevelChunk`

All Superinterfaces: ICapabilityProvider

### Inherited methods
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`

## IForgeLivingEntity

*interface* `net.minecraftforge.common.extensions.IForgeLivingEntity`

All Superinterfaces: ICapabilityProvider, ICapabilitySerializable<CompoundTag>, IForgeEntity, INBTSerializable<CompoundTag>

### Methods
- `default LivingEntity self()`
- `default boolean canSwimInFluidType(FluidType type)`
  Description copied from interface: IForgeEntity
  Returns whether the entity can swim in the fluid.
  - param: type - the type of the fluid
  - returns: true if the entity can swim in the fluid, false otherwise
- `default void jumpInFluid(FluidType type)`
  Performs what to do when an entity attempts to go up or "jump" in a fluid.
  - param: type - the type of the fluid
- `default void sinkInFluid(FluidType type)`
  Performs what to do when an entity attempts to go down or "sink" in a fluid.
  - param: type - the type of the fluid
- `default boolean canDrownInFluidType(FluidType type)`
  Returns whether the entity can drown in the fluid.
  - param: type - the type of the fluid
  - returns: true if the entity can drown in the fluid, false otherwise
- `default boolean moveInFluid(FluidState state,  Vec3 movementVector,  double gravity)`
  Performs how an entity moves when within the fluid. If using custom
   movement logic, the method should return true. Otherwise, the
   movement logic will default to water.
  - param: state - the state of the fluid
  - param: movementVector - the velocity of how the entity wants to move
  - param: gravity - the gravity to apply to the entity
  - returns: true if custom movement logic is performed, false otherwise

### Inherited methods
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeEntity`: `canBeRiddenUnderFluidType`, `canFluidExtinguish`, `canHydrateInFluidType`, `canRiderInteract`, `canStartSwimming`, `canTrample`, `canUpdate`, `canUpdate`, `captureDrops`, `captureDrops`, `deserializeNBT`, `getClassification`, `getEyeHeightForge`, `getEyeInFluidType`, `getFluidFallDistanceModifier`, `getFluidMotionScale`, `getFluidTypeHeight`, `getMaxHeightFluidType`, `getParts`, `getPersistentData`, `getPickedResult`, `getSoundFromFluidType`, `getStepHeight`, `hasCustomOutlineRendering`, `isAddedToWorld`, `isEyeInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isInFluidType`, `isMultipartEntity`, `isPushedByFluid`, `onAddedToWorld`, `onRemovedFromWorld`, `revive`, `serializeNBT`, `shouldRiderSit`, `shouldUpdateFluidWhileBoating`

## IForgeMenuType

*interface* `net.minecraftforge.common.extensions.IForgeMenuType`

### Methods
- `static <T extends AbstractContainerMenu> MenuType<T> create(IContainerFactory<T> factory)`
- `T create(int windowId,  Inventory playerInv,  FriendlyByteBuf extraData)`

## IForgeMobEffect

*interface* `net.minecraftforge.common.extensions.IForgeMobEffect`

### Methods
- `private MobEffect self()`
- `default List<ItemStack> getCurativeItems()`
  Get a fresh list of items that can cure this Potion.
   All new PotionEffects created from this Potion will call this to initialize the default curative items
  - returns: A list of items that can cure this Potion
- `default int getSortOrder(MobEffectInstance effectInstance)`
  Used for determining PotionEffect sort order in GUIs.
   Defaults to the PotionEffect's liquid color.
  - param: effectInstance - the PotionEffect instance containing the potion
  - returns: a value used to sort PotionEffects in GUIs

## IForgeMobEffectInstance

*interface* `net.minecraftforge.common.extensions.IForgeMobEffectInstance`

### Methods
- `List<ItemStack> getCurativeItems()`
  Returns a list of curative items for the potion effect
   By default, this list is initialized using IForgeMobEffect.getCurativeItems()
  - returns: The list (ItemStack) of curative items for the potion effect
- `default boolean isCurativeItem(ItemStack stack)`
  Checks the given ItemStack to see if it is in the list of curative items for the potion effect
  - param: stack - The ItemStack being checked against the list of curative items for this PotionEffect
  - returns: true if the given ItemStack is in the list of curative items for this PotionEffect, false otherwise
- `void setCurativeItems(List<ItemStack> curativeItems)`
  Sets the list of curative items for this potion effect, overwriting any already present
  - param: curativeItems - The list of ItemStacks being set to the potion effect
- `default void addCurativeItem(ItemStack stack)`
  Adds the given stack to the list of curative items for this PotionEffect
  - param: stack - The ItemStack being added to the curative item list
- `default void writeCurativeItems(CompoundTag nbt)`

## IForgePackResources

*interface* `net.minecraftforge.common.extensions.IForgePackResources`

### Methods
- `default boolean isHidden()`
  Returns true if the pack should be hidden from any user interfaces.
  - returns: true if the pack should be hidden from any user interfaces
- `@Nullable default @Nullable Collection<PackResources> getChildren()`
  Gets a collection of PackResource instances nested inside this pack.
   Used to merge several packs into one entry in the resource pack selection UI without
   losing the ability for each pack to return a resource in
   ResourceManager.getResourceStack(ResourceLocation)
  - returns: Collection of nested PackResource, or null if this pack has no children

## IForgePlayer

*interface* `net.minecraftforge.common.extensions.IForgePlayer`

### Methods
- `private Player self()`
- `default double getEntityReach()`
  The entity reach is increased by 3 for creative players, unless it is currently zero, which disables attacks and entity interactions.
  - returns: The entity reach of this player.
- `default double getBlockReach()`
  The reach distance is increased by 0.5 for creative players, unless it is currently zero, which disables interactions.
  - returns: The reach distance of this player.
- `default boolean canReach(Vec3 entityHitVec,  double padding)`
  Checks if the player can reach an entity by targeting the passed vector.
  
   On the server, additional padding is added to account for movement/lag.
  - param: entityHitVec - The vector being range-checked.
  - param: padding - Extra validation distance.
  - returns: If the player can attack the entity.
- `default boolean canReach(Entity entity,  double padding)`
  Checks if the player can reach an entity.
  
   On the server, additional padding is added to account for movement/lag.
  - param: entity - The entity being range-checked.
  - param: padding - Extra validation distance.
  - returns: If the player can attack the passed entity.
- `default boolean canReach(BlockPos pos,  double padding)`
  Checks if the player can reach a block.
  
   On the server, additional padding is added to account for movement/lag.
  - param: pos - The position being range-checked.
  - param: padding - Extra validation distance.
  - returns: If the player can interact with this location.
- `default boolean isCloseEnough(Entity entity,  double dist)`
  Utility check to see if the player is close enough to a target entity. Uses "eye-to-closest-corner" checks.
  - param: entity - The entity being checked against
  - param: dist - The max distance allowed
  - returns: If the eye-to-center distance between this player and the passed entity is less than dist.

## IForgePotion

*interface* `net.minecraftforge.common.extensions.IForgePotion`

### Methods
- `default boolean isFoil(ItemStack stack)`
  Determines whether the potion bottle item should be enchanted.
   Not called for tipped arrows or if the item is already enchanted.
  - param: stack - The potion bottle
  - returns: whether the item should appear enchanted.

## IForgeRawTagBuilder

*interface* `net.minecraftforge.common.extensions.IForgeRawTagBuilder`

### Methods
- `default TagBuilder getRawBuilder()`
- `@Deprecated(forRemoval=true,  since="1.20.1") default void serializeTagAdditions(com.google.gson.JsonObject tagJson)` (deprecated)
- `default TagBuilder remove(TagEntry tagEntry,  String source)`
  Adds a tag entry to the remove list.
  - param: tagEntry - The tag entry to add to the remove list
  - param: source - The source of the caller for logging purposes (generally a modid)
  - returns: The builder for chaining purposes
- `default TagBuilder removeElement(ResourceLocation elementID,  String source)`
  Adds a single-element entry to the remove list.
  - param: elementID - The ID of the element to add to the remove list
  - param: source - The source of the caller for logging purposes (generally a modid)
  - returns: The builder for chaining purposes
- `default TagBuilder removeTag(ResourceLocation tagID,  String source)`
  Adds a tag to the remove list.
  - param: tagID - The ID of the tag to add to the remove list
  - param: source - The source of the caller for logging purposes (generally a modid)
  - returns: The builder for chaining purposes

## IForgeServerPlayer

*interface* `net.minecraftforge.common.extensions.IForgeServerPlayer`

### Methods
- `private ServerPlayer self()`
- `default void openMenu(MenuProvider containerSupplier,  BlockPos pos)`
  Request to open a GUI on the client, from the server
  
   Refer to ConfigScreenHandler.ConfigScreenFactory for how to provide a function to consume
   these GUI requests on the client.
  - param: player - The player to open the GUI for
  - param: containerSupplier - A supplier of container properties including the registry name of the container
  - param: pos - A block pos, which will be encoded into the auxillary data for this request
- `default void openMenu(MenuProvider containerSupplier,  Consumer<FriendlyByteBuf> extraDataWriter)`
  Request to open a GUI on the client, from the server
  
   Refer to ConfigScreenHandler.ConfigScreenFactory for how to provide a function to consume
   these GUI requests on the client.
  
   The maximum size for #extraDataWriter is 32600 bytes.
  - param: player - The player to open the GUI for
  - param: containerSupplier - A supplier of container properties including the registry name of the container
  - param: extraDataWriter - Consumer to write any additional data the GUI needs

## IForgeTagAppender

*interface* `net.minecraftforge.common.extensions.IForgeTagAppender`

### Methods
- `private TagsProvider.TagAppender<T> self()`
- `default TagsProvider.TagAppender<T> addTags(TagKey<T>... values)`
- `default TagsProvider.TagAppender<T> addOptionalTag(TagKey<T> value)`
- `default TagsProvider.TagAppender<T> addOptionalTags(TagKey<T>... values)`
- `default TagsProvider.TagAppender<T> replace()`
- `default TagsProvider.TagAppender<T> replace(boolean value)`
- `default TagsProvider.TagAppender<T> remove(ResourceLocation location)`
  Adds a single element's ID to the tag json's remove list. Callable during datageneration.
  - param: location - The ID of the element to remove
  - returns: The builder for chaining
- `default TagsProvider.TagAppender<T> remove(ResourceLocation first,  ResourceLocation... locations)`
  Adds multiple elements' IDs to the tag json's remove list. Callable during datageneration.
  - param: locations - The IDs of the elements to remove
  - returns: The builder for chaining
- `default TagsProvider.TagAppender<T> remove(ResourceKey<T> resourceKey)`
  Adds a resource key to the tag json's remove list. Callable during datageneration.
  - param: resourceKey - The resource key of the element to remove
  - returns: The appender for chaining
- `default TagsProvider.TagAppender<T> remove(ResourceKey<T> firstResourceKey,  ResourceKey<T>... resourceKeys)`
  Adds multiple resource keys to the tag json's remove list. Callable during datageneration.
  - param: resourceKeys - The resource keys of the elements to remove
  - returns: The appender for chaining
- `default TagsProvider.TagAppender<T> remove(TagKey<T> tag)`
  Adds a tag to the tag json's remove list. Callable during datageneration.
  - param: tag - The ID of the tag to remove
  - returns: The builder for chaining
- `default TagsProvider.TagAppender<T> remove(TagKey<T> first,  TagKey<T>... tags)`
  Adds multiple tags to the tag json's remove list. Callable during datageneration.
  - param: tags - The IDs of the tags to remove
  - returns: The builder for chaining

## IForgeTransformation

*interface* `net.minecraftforge.common.extensions.IForgeTransformation`

Extension interface for Transformation.

### Methods
- `private Transformation self()`
- `default boolean isIdentity()`
  Returns whether this transformation is the identity transformation.
  - returns: whether this transformation is the identity transformation
- `default void transformPosition(org.joml.Vector4f position)`
  Transforms the position according to this transformation.
  - param: position - the position to transform
- `default void transformNormal(org.joml.Vector3f normal)`
  Transforms the normal according to this transformation and normalizes it.
  - param: normal - the normal to transform
- `default Direction rotateTransform(Direction facing)`
  Rotates the direction according to this transformation and returns the nearest Direction to the
   resulting direction.
  - param: facing - the direction to transform
  - returns: the Direction value nearest to the resulting transformed direction
- `default Transformation blockCenterToCorner()`
  Converts and returns a new transformation based on this transformation from assuming a center-block system to an
   opposing-corner-block system.
  - returns: a new transformation using the opposing-corner-block system
- `default Transformation blockCornerToCenter()`
  Converts and returns a new transformation based on this transformation from assuming an opposing-corner-block
   system to a center-block system.
  - returns: a new transformation using the center-block system
- `default Transformation applyOrigin(org.joml.Vector3f origin)`
  Returns a new transformation with a changed origin by applying the given parameter (which is relative to the
   current origin). This can be used for switching between coordinate systems.
  - param: origin - the new origin as relative to the current origin
  - returns: a new transformation with a changed origin
