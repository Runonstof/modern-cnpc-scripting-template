# net.minecraftforge.event.level

- [AlterGroundEvent](#altergroundevent)
- [BlockEvent](#blockevent)
- [BlockEvent.BlockToolModificationEvent](#blockevent.blocktoolmodificationevent)
- [BlockEvent.BreakEvent](#blockevent.breakevent)
- [BlockEvent.CreateFluidSourceEvent](#blockevent.createfluidsourceevent)
- [BlockEvent.CropGrowEvent](#blockevent.cropgrowevent)
- [BlockEvent.CropGrowEvent.Post](#blockevent.cropgrowevent.post)
- [BlockEvent.CropGrowEvent.Pre](#blockevent.cropgrowevent.pre)
- [BlockEvent.EntityMultiPlaceEvent](#blockevent.entitymultiplaceevent)
- [BlockEvent.EntityPlaceEvent](#blockevent.entityplaceevent)
- [BlockEvent.FarmlandTrampleEvent](#blockevent.farmlandtrampleevent)
- [BlockEvent.FluidPlaceBlockEvent](#blockevent.fluidplaceblockevent)
- [BlockEvent.NeighborNotifyEvent](#blockevent.neighbornotifyevent)
- [BlockEvent.PortalSpawnEvent](#blockevent.portalspawnevent)
- [ChunkDataEvent](#chunkdataevent)
- [ChunkDataEvent.Load](#chunkdataevent.load)
- [ChunkDataEvent.Save](#chunkdataevent.save)
- [ChunkEvent](#chunkevent)
- [ChunkEvent.Load](#chunkevent.load)
- [ChunkEvent.Unload](#chunkevent.unload)
- [ChunkTicketLevelUpdatedEvent](#chunkticketlevelupdatedevent)
- [ChunkWatchEvent](#chunkwatchevent)
- [ChunkWatchEvent.UnWatch](#chunkwatchevent.unwatch)
- [ChunkWatchEvent.Watch](#chunkwatchevent.watch)
- [Class NoteBlockEvent.Note](#class-noteblockevent.note)
- [Class NoteBlockEvent.Octave](#class-noteblockevent.octave)
- [Class PistonEvent.PistonMoveType](#class-pistonevent.pistonmovetype)
- [ExplosionEvent](#explosionevent)
- [ExplosionEvent.Detonate](#explosionevent.detonate)
- [ExplosionEvent.Start](#explosionevent.start)
- [LevelEvent](#levelevent)
- [LevelEvent.CreateSpawnPosition](#levelevent.createspawnposition)
- [LevelEvent.Load](#levelevent.load)
- [LevelEvent.PotentialSpawns](#levelevent.potentialspawns)
- [LevelEvent.Save](#levelevent.save)
- [LevelEvent.Unload](#levelevent.unload)
- [NoteBlockEvent](#noteblockevent)
- [NoteBlockEvent.Change](#noteblockevent.change)
- [NoteBlockEvent.Play](#noteblockevent.play)
- [PistonEvent](#pistonevent)
- [PistonEvent.Post](#pistonevent.post)
- [PistonEvent.Pre](#pistonevent.pre)
- [SaplingGrowTreeEvent](#saplinggrowtreeevent)
- [SleepFinishedTimeEvent](#sleepfinishedtimeevent)
## AlterGroundEvent

*class* `net.minecraftforge.event.level.AlterGroundEvent`

This event is fired when AlterGroundDecorator.placeBlockAt(TreeDecorator.Context, BlockPos)
 attempts to alter a ground block when generating a feature. An example of this would be large spruce trees converting grass blocks into podzol.

 This event is not cancellable.

 This event is fired on the main Forge event bus
 only on the logical server.

### Fields
- `private final LevelSimulatedReader level`
- `private final RandomSource random`
- `private final BlockPos pos`
- `private final BlockState originalAltered`
- `private BlockState newAltered`

### Methods
- `public LevelSimulatedReader getLevel()`
- `public RandomSource getRandom()`
- `public BlockPos getPos()`
  Returns the position of the block that will be altered.
  - returns: the position of the block that will be altered
- `public BlockState getOriginalAlteredState()`
  Returns the original block state that would be placed by the ground decorator.
  - returns: the original block state that would be placed by the ground decorator
- `public BlockState getNewAlteredState()`
  Returns the new block state to be placed by the ground decorator.
  - returns: the new block state to be placed by the ground decorator
- `public void setNewAlteredState(BlockState newAltered)`
  - param: newAltered - the new block state to be placed by the ground decorator

## BlockEvent

*class* `net.minecraftforge.event.level.BlockEvent`

### Fields
- `private static final boolean DEBUG`
- `private final LevelAccessor level`
- `private final BlockPos pos`
- `private final BlockState state`

### Methods
- `public LevelAccessor getLevel()`
- `public BlockPos getPos()`
- `public BlockState getState()`

## BlockEvent.BlockToolModificationEvent

*class* `net.minecraftforge.event.level.BlockEvent.BlockToolModificationEvent`

Fired when a block is right-clicked by a tool to change its state.
 For example: Used to determine if an axe can strip,
 a shovel can path, or a hoe can till.

 Care must be taken to ensure level-modifying events are only performed if isSimulated() returns false.

 This event is Cancelable. If canceled, this will prevent the tool
 from changing the block's state.

Enclosing class: BlockEvent

### Fields
- `private final UseOnContext context`
- `private final ToolAction toolAction`
- `private final boolean simulate`
- `private BlockState state`

### Methods
- `@Nullable public @Nullable Player getPlayer()`
  - returns: the player using the tool.
 May be null based on what was provided by the use on context.
- `public ItemStack getHeldItemStack()`
  - returns: the tool being used
- `public ToolAction getToolAction()`
  - returns: the action being performed
- `public boolean isSimulated()`
  Returns true if this event should not perform any actions that modify the level.
   If false, then level-modifying actions can be performed.
  - returns: true if this event should not perform any actions that modify the level.
 If false, then level-modifying actions can be performed.
- `@NotNull public @NotNull UseOnContext getContext()`
  Returns the nonnull use on context that this event was performed in.
  - returns: the nonnull use on context that this event was performed in
- `public void setFinalState(@Nullable  @Nullable BlockState finalState)`
  Sets the state to transform the block into after tool use.
  - param: finalState - the state to transform the block into after tool use
- `public BlockState getFinalState()`
  Returns the state to transform the block into after tool use.
   If setFinalState(BlockState) is not called, this will return the original state.
   If Event.isCanceled() is true, this value will be ignored and the tool action will be canceled.
  - returns: the state to transform the block into after tool use

### Inherited methods
- from `net.minecraftforge.event.level.BlockEvent`: `getLevel`, `getPos`, `getState`

## BlockEvent.BreakEvent

*class* `net.minecraftforge.event.level.BlockEvent.BreakEvent`

Event that is fired when an Block is about to be broken by a player
 Canceling this event will prevent the Block from being broken.

Enclosing class: BlockEvent

### Fields
- `private final Player player`
  Reference to the Player who broke the block. If no player is available, use a EntityFakePlayer
- `private int exp`

### Methods
- `public Player getPlayer()`
- `public int getExpToDrop()`
  Get the experience dropped by the block after the event has processed
  - returns: The experience to drop or 0 if the event was canceled
- `public void setExpToDrop(int exp)`
  Set the amount of experience dropped by the block after the event has processed
  - param: exp - 1 or higher to drop experience, else nothing will drop

### Inherited methods
- from `net.minecraftforge.event.level.BlockEvent`: `getLevel`, `getPos`, `getState`

## BlockEvent.CreateFluidSourceEvent

*class* `net.minecraftforge.event.level.BlockEvent.CreateFluidSourceEvent`

Fired to check whether a non-source block can turn into a source block.
 A result of ALLOW causes a source block to be created even if the liquid
 usually doesn't do that (like lava), and a result of DENY prevents creation
 even if the liquid usually does do that (like water).

Enclosing class: BlockEvent

### Fields
- `private final Level level`
- `private final BlockPos pos`
- `private final BlockState state`

### Methods
- `public Level getLevel()`
- `public BlockPos getPos()`
- `public BlockState getState()`

## BlockEvent.CropGrowEvent

*class* `net.minecraftforge.event.level.BlockEvent.CropGrowEvent`

Fired when a crop block grows. See subevents.

Enclosing class: BlockEvent

### Inherited methods
- from `net.minecraftforge.event.level.BlockEvent`: `getLevel`, `getPos`, `getState`

## BlockEvent.CropGrowEvent.Post

*class* `net.minecraftforge.event.level.BlockEvent.CropGrowEvent.Post`

Fired when "growing age" blocks (for example cacti, chorus plants, or crops
 in vanilla) have successfully grown. The block's original state is available,
 in addition to its new state.

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

Enclosing class: BlockEvent.CropGrowEvent

### Fields
- `private final BlockState originalState`

### Methods
- `public BlockState getOriginalState()`

### Inherited methods
- from `net.minecraftforge.event.level.BlockEvent`: `getLevel`, `getPos`, `getState`

## BlockEvent.CropGrowEvent.Pre

*class* `net.minecraftforge.event.level.BlockEvent.CropGrowEvent.Pre`

Fired when any "growing age" blocks (for example cacti, chorus plants, or crops
 in vanilla) attempt to advance to the next growth age state during a random tick.

 Event.Result.DEFAULT will pass on to the vanilla growth mechanics.

 Event.Result.ALLOW will force the plant to advance a growth stage.

 Event.Result.DENY will prevent the plant from advancing a growth stage.

 This event is not Cancelable.

Enclosing class: BlockEvent.CropGrowEvent

### Inherited methods
- from `net.minecraftforge.event.level.BlockEvent`: `getLevel`, `getPos`, `getState`

## BlockEvent.EntityMultiPlaceEvent

*class* `net.minecraftforge.event.level.BlockEvent.EntityMultiPlaceEvent`

Fired when a single block placement triggers the
 creation of multiple blocks(e.g. placing a bed block). The block returned
 by BlockEvent.state and its related methods is the block where
 the placed block would exist if the placement only affected a single
 block.

Enclosing class: BlockEvent

### Fields
- `private final List<BlockSnapshot> blockSnapshots`

### Methods
- `public List<BlockSnapshot> getReplacedBlockSnapshots()`
  Gets a list of BlockSnapshots for all blocks which were replaced by the
   placement of the new blocks. Most of these blocks will just be of type AIR.
  - returns: immutable list of replaced BlockSnapshots

### Inherited methods
- from `net.minecraftforge.event.level.BlockEvent.EntityPlaceEvent`: `getBlockSnapshot`, `getEntity`, `getPlacedAgainst`, `getPlacedBlock`
- from `net.minecraftforge.event.level.BlockEvent`: `getLevel`, `getPos`, `getState`

## BlockEvent.EntityPlaceEvent

*class* `net.minecraftforge.event.level.BlockEvent.EntityPlaceEvent`

Called when a block is placed.

 If a Block Place event is cancelled, the block will not be placed.

Enclosing class: BlockEvent

### Fields
- `private final Entity entity`
- `private final BlockSnapshot blockSnapshot`
- `private final BlockState placedBlock`
- `private final BlockState placedAgainst`

### Methods
- `@Nullable public @Nullable Entity getEntity()`
- `public BlockSnapshot getBlockSnapshot()`
- `public BlockState getPlacedBlock()`
- `public BlockState getPlacedAgainst()`

### Inherited methods
- from `net.minecraftforge.event.level.BlockEvent`: `getLevel`, `getPos`, `getState`

## BlockEvent.FarmlandTrampleEvent

*class* `net.minecraftforge.event.level.BlockEvent.FarmlandTrampleEvent`

Fired when when farmland gets trampled
 This event is Cancelable

Enclosing class: BlockEvent

### Fields
- `private final Entity entity`
- `private final float fallDistance`

### Methods
- `public Entity getEntity()`
- `public float getFallDistance()`

### Inherited methods
- from `net.minecraftforge.event.level.BlockEvent`: `getLevel`, `getPos`, `getState`

## BlockEvent.FluidPlaceBlockEvent

*class* `net.minecraftforge.event.level.BlockEvent.FluidPlaceBlockEvent`

Fired when a liquid places a block. Use setNewState(BlockState) to change the result of
 a cobblestone generator or add variants of obsidian. Alternatively, you could execute
 arbitrary code when lava sets blocks on fire, even preventing it.

 BlockEvent.getState() will return the block that was originally going to be placed.
 BlockEvent.getPos() will return the position of the block to be changed.

Enclosing class: BlockEvent

### Fields
- `private final BlockPos liquidPos`
- `private BlockState newState`
- `private BlockState origState`

### Methods
- `public BlockPos getLiquidPos()`
  - returns: The position of the liquid this event originated from. This may be the same as BlockEvent.getPos().
- `public BlockState getNewState()`
  - returns: The block state that will be placed after this event resolves.
- `public void setNewState(BlockState state)`
- `public BlockState getOriginalState()`
  - returns: The state of the block to be changed before the event was fired.

### Inherited methods
- from `net.minecraftforge.event.level.BlockEvent`: `getLevel`, `getPos`, `getState`

## BlockEvent.NeighborNotifyEvent

*class* `net.minecraftforge.event.level.BlockEvent.NeighborNotifyEvent`

Fired when a physics update occurs on a block. This event acts as
 a way for mods to detect physics updates, in the same way a BUD switch
 does. This event is only called on the server.

Enclosing class: BlockEvent

### Fields
- `private final EnumSet<Direction> notifiedSides`
- `private final boolean forceRedstoneUpdate`

### Methods
- `public EnumSet<Direction> getNotifiedSides()`
  Gets a list of directions from the base block that updates will occur upon.
  - returns: list of notified directions
- `public boolean getForceRedstoneUpdate()`
  Get if redstone update was forced during setBlock call (0x16 to flags)
  - returns: if the flag was set

### Inherited methods
- from `net.minecraftforge.event.level.BlockEvent`: `getLevel`, `getPos`, `getState`

## BlockEvent.PortalSpawnEvent

*class* `net.minecraftforge.event.level.BlockEvent.PortalSpawnEvent`

Fired when an attempt is made to spawn a nether portal from
 BaseFireBlock.onPlace(BlockState, Level, BlockPos, BlockState, boolean).

 If cancelled, the portal will not be spawned.

Enclosing class: BlockEvent

### Fields
- `private final PortalShape size`

### Methods
- `public PortalShape getPortalSize()`

### Inherited methods
- from `net.minecraftforge.event.level.BlockEvent`: `getLevel`, `getPos`, `getState`

## ChunkDataEvent

*class* `net.minecraftforge.event.level.ChunkDataEvent`

ChunkDataEvent is fired when an event involving chunk data occurs.

 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 data contains the NBTTagCompound containing the chunk data for this event.

 All children of this event are fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final CompoundTag data`

### Methods
- `public CompoundTag getData()`

### Inherited methods
- from `net.minecraftforge.event.level.ChunkEvent`: `getChunk`
- from `net.minecraftforge.event.level.LevelEvent`: `getLevel`

## ChunkDataEvent.Load

*class* `net.minecraftforge.event.level.ChunkDataEvent.Load`

ChunkDataEvent.Load is fired when vanilla Minecraft attempts to load Chunk data.

 This event is fired during chunk loading in
 ChunkSerializer.read(ServerLevel, PoiManager, ChunkPos, CompoundTag) which means it is async, so be careful.

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: ChunkDataEvent

### Fields
- `private ChunkStatus.ChunkType status`

### Methods
- `public ChunkStatus.ChunkType getStatus()`

### Inherited methods
- from `net.minecraftforge.event.level.ChunkDataEvent`: `getData`
- from `net.minecraftforge.event.level.ChunkEvent`: `getChunk`
- from `net.minecraftforge.event.level.LevelEvent`: `getLevel`

## ChunkDataEvent.Save

*class* `net.minecraftforge.event.level.ChunkDataEvent.Save`

ChunkDataEvent.Save is fired when vanilla Minecraft attempts to save Chunk data.

 This event is fired during chunk saving in
 ChunkMap#save(ChunkAccess).

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: ChunkDataEvent

### Inherited methods
- from `net.minecraftforge.event.level.ChunkDataEvent`: `getData`
- from `net.minecraftforge.event.level.ChunkEvent`: `getChunk`
- from `net.minecraftforge.event.level.LevelEvent`: `getLevel`

## ChunkEvent

*class* `net.minecraftforge.event.level.ChunkEvent`

ChunkEvent is fired when an event involving a chunk occurs.

 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 chunk contains the Chunk this event is affecting.

 All children of this event are fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final ChunkAccess chunk`

### Methods
- `public ChunkAccess getChunk()`

### Inherited methods
- from `net.minecraftforge.event.level.LevelEvent`: `getLevel`

## ChunkEvent.Load

*class* `net.minecraftforge.event.level.ChunkEvent.Load`

ChunkEvent.Load is fired when vanilla Minecraft attempts to load a Chunk into the level.

 This event is fired during chunk loading in

 Chunk.onChunkLoad().

 Note: This event may be called before the underlying LevelChunk is promoted to ChunkStatus.FULL. You will cause chunk loading deadlocks if you don't delay your level interactions.

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: ChunkEvent

### Fields
- `private final boolean newChunk`

### Methods
- `public boolean isNewChunk()`
  Check whether the Chunk is newly generated, and being loaded for the first time.
  
   Will only ever return true on the logical server.
  - returns: whether the Chunk is newly generated

### Inherited methods
- from `net.minecraftforge.event.level.ChunkEvent`: `getChunk`
- from `net.minecraftforge.event.level.LevelEvent`: `getLevel`

## ChunkEvent.Unload

*class* `net.minecraftforge.event.level.ChunkEvent.Unload`

ChunkEvent.Unload is fired when vanilla Minecraft attempts to unload a Chunk from the level.

 This event is fired during chunk unloading in

 Chunk.onChunkUnload().

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: ChunkEvent

### Inherited methods
- from `net.minecraftforge.event.level.ChunkEvent`: `getChunk`
- from `net.minecraftforge.event.level.LevelEvent`: `getLevel`

## ChunkTicketLevelUpdatedEvent

*class* `net.minecraftforge.event.level.ChunkTicketLevelUpdatedEvent`

This event is fired whenever a chunk has its ticket level changed via the server's ChunkMap.

 This event does not fire if the new ticket level is the same as the old level, or if both the
 new AND old ticket levels represent values past the max chunk distance.

 Due to how vanilla processes ticket level changes this event may be fired "twice" in one tick for the same chunk.
 The scenario where this happens is when increasing the level from say 31 (ticking) to 32, the way vanilla does it
 is by first changing it from 31 to 46, and then queuing the update from 46 to 32. However, when going from 32 to 31,
 vanilla is able to go directly.

 This event is not cancellable and does not have a result.

 This event is fired on the main Forge event bus
 only on the logical server.

### Fields
- `private final ServerLevel level`
- `private final long chunkPos`
- `private final int oldTicketLevel`
- `private final int newTicketLevel`
- `@Nullable private final @Nullable ChunkHolder chunkHolder`

### Methods
- `public ServerLevel getLevel()`
  Returns the server level containing the chunk.
  - returns: the server level containing the chunk
- `public long getChunkPos()`
  Returns the long representation of the chunk position the ticket level changed for.
  - returns: the long representation of the chunk position the ticket level changed for
- `public int getOldTicketLevel()`
  Returns the previous ticket level the chunk had.
  - returns: the previous ticket level the chunk had
- `public int getNewTicketLevel()`
  Returns the new ticket level for the chunk.
  - returns: the new ticket level for the chunk
- `@Nullable public @Nullable ChunkHolder getChunkHolder()`
  Returns chunk that had its ticket level updated.
  - returns: chunk that had its ticket level updated

## ChunkWatchEvent

*class* `net.minecraftforge.event.level.ChunkWatchEvent`

This event is fired whenever a chunk has a watch-related action.

 The player's level may not be the same as the level of the chunk
 when the player is teleporting to another dimension.

 This event is not cancellable and does not have a result.

 This event is fired on the main Forge event bus
 only on the logical server.

### Fields
- `private final ServerLevel level`
- `private final ServerPlayer player`
- `private final ChunkPos pos`

### Methods
- `public ServerPlayer getPlayer()`
  Returns the server player involved with the watch action.
  - returns: the server player involved with the watch action
- `public ChunkPos getPos()`
  Returns the chunk position this watch event is affecting.
  - returns: the chunk position this watch event is affecting
- `public ServerLevel getLevel()`
  Returns the server level containing the chunk.
  - returns: the server level containing the chunk

## ChunkWatchEvent.UnWatch

*class* `net.minecraftforge.event.level.ChunkWatchEvent.UnWatch`

This event is fired when server sends "forget chunk" packet to the ServerPlayer.

 This event is not cancellable and does not have a result.

 This event is fired on the main Forge event bus
 only on the logical server.

Enclosing class: ChunkWatchEvent

### Inherited methods
- from `net.minecraftforge.event.level.ChunkWatchEvent`: `getLevel`, `getPlayer`, `getPos`

## ChunkWatchEvent.Watch

*class* `net.minecraftforge.event.level.ChunkWatchEvent.Watch`

This event is fired when chunk data is sent to the ServerPlayer (see PlayerChunkSender).

 This event may be used to send additional chunk-related data to the client.

 This event is not cancellable and does not have a result.

 This event is fired on the main Forge event bus
 only on the logical server.

Enclosing class: ChunkWatchEvent

### Fields
- `private final LevelChunk chunk`

### Methods
- `public LevelChunk getChunk()`

### Inherited methods
- from `net.minecraftforge.event.level.ChunkWatchEvent`: `getLevel`, `getPlayer`, `getPos`

## Class NoteBlockEvent.Note

*enum* `net.minecraftforge.event.level.Class NoteBlockEvent.Note`

Information about the pitch of a Noteblock note.
 For altered notes such as G-Sharp / A-Flat the Sharp variant is used here.

Enclosing class: NoteBlockEvent

### Fields
- `private static final NoteBlockEvent.Note[] values`

### Methods
- `public static NoteBlockEvent.Note[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static NoteBlockEvent.Note valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `static NoteBlockEvent.Note fromId(int id)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class NoteBlockEvent.Octave

*enum* `net.minecraftforge.event.level.Class NoteBlockEvent.Octave`

Describes the Octave of a Note being played by a Noteblock.
 Together with NoteBlockEvent.Note it fully describes the note.

Enclosing class: NoteBlockEvent

### Methods
- `public static NoteBlockEvent.Octave[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static NoteBlockEvent.Octave valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `static NoteBlockEvent.Octave fromId(int id)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class PistonEvent.PistonMoveType

*enum* `net.minecraftforge.event.level.Class PistonEvent.PistonMoveType`

Enclosing class: PistonEvent

### Fields
- `public final boolean isExtend`

### Methods
- `public static PistonEvent.PistonMoveType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static PistonEvent.PistonMoveType valueOf(String name)`
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

## ExplosionEvent

*class* `net.minecraftforge.event.level.ExplosionEvent`

ExplosionEvent triggers when an explosion happens in the level.

 ExplosionEvent.Start is fired before the explosion actually occurs.

 ExplosionEvent.Detonate is fired once the explosion has a list of affected blocks and entities.

 ExplosionEvent.Start is Cancelable.

 ExplosionEvent.Detonate can modify the affected blocks and entities.

 Children do not use Event.HasResult.

 Children of this event are fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final Level level`
- `private final Explosion explosion`

### Methods
- `public Level getLevel()`
- `public Explosion getExplosion()`

## ExplosionEvent.Detonate

*class* `net.minecraftforge.event.level.ExplosionEvent.Detonate`

ExplosionEvent.Detonate is fired once the explosion has a list of affected blocks and entities. These lists can be modified to change the outcome.

 This event is not Cancelable.

 This event does not use Event.HasResult.

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: ExplosionEvent

### Fields
- `private final List<Entity> entityList`

### Methods
- `public List<BlockPos> getAffectedBlocks()`
  return the list of blocks affected by the explosion.
- `public List<Entity> getAffectedEntities()`
  return the list of entities affected by the explosion.

### Inherited methods
- from `net.minecraftforge.event.level.ExplosionEvent`: `getExplosion`, `getLevel`

## ExplosionEvent.Start

*class* `net.minecraftforge.event.level.ExplosionEvent.Start`

ExplosionEvent.Start is fired before the explosion actually occurs. Canceling this event will stop the explosion.

 This event is Cancelable.

 This event does not use Event.HasResult.

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: ExplosionEvent

### Inherited methods
- from `net.minecraftforge.event.level.ExplosionEvent`: `getExplosion`, `getLevel`

## LevelEvent

*class* `net.minecraftforge.event.level.LevelEvent`

This event is fired whenever an event involving a LevelAccessor occurs.

 All children of this event are fired on the main Forge event bus.

### Fields
- `private final LevelAccessor level`

### Methods
- `public LevelAccessor getLevel()`
  Returns the level this event is affecting.
  - returns: the level this event is affecting

## LevelEvent.CreateSpawnPosition

*class* `net.minecraftforge.event.level.LevelEvent.CreateSpawnPosition`

This event fires whenever a ServerLevel is initialized for the first time
 and a spawn position needs to be chosen.

 This event is cancellable and does not have a result.
 If the event is canceled, the vanilla logic to choose a spawn position will be skipped.

 This event is fired on the main Forge event bus
 only on the logical server.

Enclosing class: LevelEvent

### Fields
- `private final ServerLevelData settings`

### Methods
- `public ServerLevelData getSettings()`

### Inherited methods
- from `net.minecraftforge.event.level.LevelEvent`: `getLevel`

## LevelEvent.Load

*class* `net.minecraftforge.event.level.LevelEvent.Load`

This event is fired whenever a level loads.
 This event is fired whenever a level loads in ClientLevel's constructor and
 MinecraftServer#createLevels(ChunkProgressListener).

 This event is not cancellable and does not have a result.

 This event is fired on the main Forge event bus
 on both logical sides.

Enclosing class: LevelEvent

### Inherited methods
- from `net.minecraftforge.event.level.LevelEvent`: `getLevel`

## LevelEvent.PotentialSpawns

*class* `net.minecraftforge.event.level.LevelEvent.PotentialSpawns`

Fired when building a list of all possible entities that can spawn at the specified location.

 If an entry is added to the list, it needs to be a globally unique instance.

 The event is called in net.minecraft.world.level.NaturalSpawner#mobsAt(ServerLevel, StructureManager, ChunkGenerator, MobCategory, RandomSource, BlockPos).

 This event is cancellable, and does not have a result.
 Canceling the event will result in an empty list, meaning no entity will be spawned.

Enclosing class: LevelEvent

### Fields
- `private final MobCategory mobcategory`
- `private final BlockPos pos`
- `private final List<MobSpawnSettings.SpawnerData> list`
- `private final List<MobSpawnSettings.SpawnerData> view`

### Methods
- `public MobCategory getMobCategory()`
  Returns the category of the mobs in the spawn list..
  - returns: the category of the mobs in the spawn list.
- `public BlockPos getPos()`
  Returns the block position where the chosen mob will be spawned..
  - returns: the block position where the chosen mob will be spawned.
- `public List<MobSpawnSettings.SpawnerData> getSpawnerDataList()`
  Returns the list of mobs that can potentially be spawned..
  - returns: the list of mobs that can potentially be spawned.
- `public void addSpawnerData(MobSpawnSettings.SpawnerData data)`
  Appends a SpawnerData entry to the spawn list.
  - param: data - SpawnerData entry to be appended to the spawn list.
- `public boolean removeSpawnerData(MobSpawnSettings.SpawnerData data)`
  Removes a SpawnerData entry from the spawn list.
  - param: data - SpawnerData entry to be removed from the spawn list.

 Returns true if the spawn list contained the specified element..

### Inherited methods
- from `net.minecraftforge.event.level.LevelEvent`: `getLevel`

## LevelEvent.Save

*class* `net.minecraftforge.event.level.LevelEvent.Save`

This event fires whenever a level is saved.
 This event is fired when a level is saved in
 ServerLevel.save(ProgressListener, boolean, boolean).

 This event is not cancellable and does not have a result.

 This event is fired on the main Forge event bus
 only on the logical server.

Enclosing class: LevelEvent

### Inherited methods
- from `net.minecraftforge.event.level.LevelEvent`: `getLevel`

## LevelEvent.Unload

*class* `net.minecraftforge.event.level.LevelEvent.Unload`

This event is fired whenever a level unloads.
 This event is fired whenever a level unloads in
 Minecraft.setLevel(ClientLevel),
 MinecraftServer.stopServer(),
 Minecraft#clearLevel(Screen), and
 ForgeInternalHandler#onDimensionUnload(Unload).

 This event is not cancellable and does not have a result.

 This event is fired on the main Forge event bus
 on both logical sides.

Enclosing class: LevelEvent

### Inherited methods
- from `net.minecraftforge.event.level.LevelEvent`: `getLevel`

## NoteBlockEvent

*class* `net.minecraftforge.event.level.NoteBlockEvent`

Base class for Noteblock Events

### Fields
- `private int noteId`

### Methods
- `public NoteBlockEvent.Note getNote()`
  Get the Note the Noteblock is tuned to
  - returns: the Note
- `public NoteBlockEvent.Octave getOctave()`
  Get the Octave of the note this Noteblock is tuned to
  - returns: the Octave
- `public int getVanillaNoteId()`
  get the vanilla note-id, which contains information about both Note and Octave. Most modders should not need this.
  - returns: an ID for the note
- `public void setNote(NoteBlockEvent.Note note,  NoteBlockEvent.Octave octave)`
  Set Note and Octave for this event.
  
   If octave is Octave.HIGH, note may only be Note.F_SHARP
  - param: note - the Note
  - param: octave - the Octave

### Inherited methods
- from `net.minecraftforge.event.level.BlockEvent`: `getLevel`, `getPos`, `getState`

## NoteBlockEvent.Change

*class* `net.minecraftforge.event.level.NoteBlockEvent.Change`

Fired when a Noteblock is changed. You can adjust the note it will change to via NoteBlockEvent.setNote(Note, Octave).
 Canceling this event will not change the note and also stop the Noteblock from playing it's note.

Enclosing class: NoteBlockEvent

### Fields
- `private final NoteBlockEvent.Note oldNote`
- `private final NoteBlockEvent.Octave oldOctave`

### Methods
- `public NoteBlockEvent.Note getOldNote()`
- `public NoteBlockEvent.Octave getOldOctave()`

### Inherited methods
- from `net.minecraftforge.event.level.NoteBlockEvent`: `getNote`, `getOctave`, `getVanillaNoteId`, `setNote`
- from `net.minecraftforge.event.level.BlockEvent`: `getLevel`, `getPos`, `getState`

## NoteBlockEvent.Play

*class* `net.minecraftforge.event.level.NoteBlockEvent.Play`

Fired when a Noteblock plays it's note. You can override the note and instrument
 Canceling this event will stop the note from playing.

Enclosing class: NoteBlockEvent

### Fields
- `private NoteBlockInstrument instrument`

### Methods
- `public NoteBlockInstrument getInstrument()`
- `public void setInstrument(NoteBlockInstrument instrument)`

### Inherited methods
- from `net.minecraftforge.event.level.NoteBlockEvent`: `getNote`, `getOctave`, `getVanillaNoteId`, `setNote`
- from `net.minecraftforge.event.level.BlockEvent`: `getLevel`, `getPos`, `getState`

## PistonEvent

*class* `net.minecraftforge.event.level.PistonEvent`

Base piston event, use PistonEvent.Post and PistonEvent.Pre

### Fields
- `private final Direction direction`
- `private final PistonEvent.PistonMoveType moveType`

### Methods
- `public Direction getDirection()`
  - returns: The direction of the piston block
- `public BlockPos getFaceOffsetPos()`
  Helper method that gets the piston position offset by its facing
- `public PistonEvent.PistonMoveType getPistonMoveType()`
  - returns: The movement type of the piston (extension, retraction)
- `@Nullable public @Nullable PistonStructureResolver getStructureHelper()`
  - returns: A piston structure helper for this movement. Returns null if the world stored is not a Level

### Inherited methods
- from `net.minecraftforge.event.level.BlockEvent`: `getLevel`, `getPos`, `getState`

## PistonEvent.Post

*class* `net.minecraftforge.event.level.PistonEvent.Post`

Fires after the piston has moved and set surrounding states. This will not fire if PistonEvent.Pre is cancelled.

Enclosing class: PistonEvent

### Inherited methods
- from `net.minecraftforge.event.level.PistonEvent`: `getDirection`, `getFaceOffsetPos`, `getPistonMoveType`, `getStructureHelper`
- from `net.minecraftforge.event.level.BlockEvent`: `getLevel`, `getPos`, `getState`

## PistonEvent.Pre

*class* `net.minecraftforge.event.level.PistonEvent.Pre`

Fires before the piston has updated block states. Cancellation prevents movement.

Enclosing class: PistonEvent

### Inherited methods
- from `net.minecraftforge.event.level.PistonEvent`: `getDirection`, `getFaceOffsetPos`, `getPistonMoveType`, `getStructureHelper`
- from `net.minecraftforge.event.level.BlockEvent`: `getLevel`, `getPos`, `getState`

## SaplingGrowTreeEvent

*class* `net.minecraftforge.event.level.SaplingGrowTreeEvent`

This event is fired whenever a sapling, fungus, mushroom or azalea grows into a tree.

 This event is not cancellable but does have a result.
 ALLOW and DEFAULT will allow the sapling to grow
 using the features set on the event.
 DENY will prevent the sapling from growing.

 This event is fired on the main Forge event bus
 only on the logical server.

### Fields
- `private final RandomSource randomSource`
- `private final BlockPos pos`
- `@Nullable private @Nullable Holder<ConfiguredFeature<?,?>> feature`

### Methods
- `public RandomSource getRandomSource()`
  Returns the random source which initiated the sapling growth.
  - returns: the random source which initiated the sapling growth
- `public BlockPos getPos()`
  Returns the coordinates of the sapling attempting to grow.
  - returns: the coordinates of the sapling attempting to grow
- `@Nullable public @Nullable Holder<ConfiguredFeature<?,?>> getFeature()`
  Returns the holder of the feature which will be placed, possibly null.
  - returns: the holder of the feature which will be placed, possibly null
- `public void setFeature(@Nullable  @Nullable Holder<ConfiguredFeature<?,?>> feature)`
  - param: feature - a Holder referencing a tree feature to be placed instead of the current feature.
- `public void setFeature(ResourceKey<ConfiguredFeature<?,?>> featureKey)`
  - param: featureKey - a ResourceKey referencing a tree feature to be placed instead of the current feature.

### Inherited methods
- from `net.minecraftforge.event.level.LevelEvent`: `getLevel`

## SleepFinishedTimeEvent

*class* `net.minecraftforge.event.level.SleepFinishedTimeEvent`

This event is fired when all players are asleep and the time should be set to day.

 setWakeUpTime(wakeUpTime) sets a new time that will be added to the dayTime.

### Fields
- `private long newTime`
- `private final long minTime`

### Methods
- `public long getNewTime()`
  - returns: the new time
- `public boolean setTimeAddition(long newTimeIn)`
  Sets the new time which should be set when all players wake up
  - param: newTimeIn - The new time at wakeup
  - returns: false if newTimeIn was lower than current time

### Inherited methods
- from `net.minecraftforge.event.level.LevelEvent`: `getLevel`
