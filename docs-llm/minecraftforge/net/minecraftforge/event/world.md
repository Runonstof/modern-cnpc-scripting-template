# net.minecraftforge.event.world

- [BlockEvent](#blockevent)
- [BlockEvent.BreakEvent](#blockevent.breakevent)
- [BlockEvent.CreateFluidSourceEvent](#blockevent.createfluidsourceevent)
- [BlockEvent.CropGrowEvent](#blockevent.cropgrowevent)
- [BlockEvent.CropGrowEvent.Post](#blockevent.cropgrowevent.post)
- [BlockEvent.CropGrowEvent.Pre](#blockevent.cropgrowevent.pre)
- [BlockEvent.EntityMultiPlaceEvent](#blockevent.entitymultiplaceevent)
- [BlockEvent.EntityPlaceEvent](#blockevent.entityplaceevent)
- [BlockEvent.FarmlandTrampleEvent](#blockevent.farmlandtrampleevent)
- [BlockEvent.FluidPlaceBlockEvent](#blockevent.fluidplaceblockevent)
- [BlockEvent.HarvestDropsEvent](#blockevent.harvestdropsevent)
- [BlockEvent.MultiPlaceEvent](#blockevent.multiplaceevent)
- [BlockEvent.NeighborNotifyEvent](#blockevent.neighbornotifyevent)
- [BlockEvent.PlaceEvent](#blockevent.placeevent)
- [BlockEvent.PortalSpawnEvent](#blockevent.portalspawnevent)
- [ChunkDataEvent](#chunkdataevent)
- [ChunkDataEvent.Load](#chunkdataevent.load)
- [ChunkDataEvent.Save](#chunkdataevent.save)
- [ChunkEvent](#chunkevent)
- [ChunkEvent.Load](#chunkevent.load)
- [ChunkEvent.Unload](#chunkevent.unload)
- [ChunkWatchEvent](#chunkwatchevent)
- [ChunkWatchEvent.UnWatch](#chunkwatchevent.unwatch)
- [ChunkWatchEvent.Watch](#chunkwatchevent.watch)
- [ExplosionEvent](#explosionevent)
- [ExplosionEvent.Detonate](#explosionevent.detonate)
- [ExplosionEvent.Start](#explosionevent.start)
- [GetCollisionBoxesEvent](#getcollisionboxesevent)
- [NoteBlockEvent](#noteblockevent)
- [NoteBlockEvent.Change](#noteblockevent.change)
- [NoteBlockEvent.Instrument](#noteblockevent.instrument)
- [NoteBlockEvent.Note](#noteblockevent.note)
- [NoteBlockEvent.Octave](#noteblockevent.octave)
- [NoteBlockEvent.Play](#noteblockevent.play)
- [WorldEvent](#worldevent)
- [WorldEvent.CreateSpawnPosition](#worldevent.createspawnposition)
- [WorldEvent.Load](#worldevent.load)
- [WorldEvent.PotentialSpawns](#worldevent.potentialspawns)
- [WorldEvent.Save](#worldevent.save)
- [WorldEvent.Unload](#worldevent.unload)
## BlockEvent

*class* `net.minecraftforge.event.world.BlockEvent`

### Methods
- `public World getWorld()`
- `public BlockPos getPos()`
- `public IBlockState getState()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BlockEvent.BreakEvent

*class* `net.minecraftforge.event.world.BlockEvent.BreakEvent`

Event that is fired when an Block is about to be broken by a player
 Canceling this event will prevent the Block from being broken.

Enclosing class: BlockEvent

### Methods
- `public EntityPlayer getPlayer()`
- `public int getExpToDrop()`
  Get the experience dropped by the block after the event has processed
  - returns: The experience to drop or 0 if the event was canceled
- `public void setExpToDrop(int exp)`
  Set the amount of experience dropped by the block after the event has processed
  - param: exp - 1 or higher to drop experience, else nothing will drop

### Inherited methods
- from `net.minecraftforge.event.world.BlockEvent`: `getPos`, `getState`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BlockEvent.CreateFluidSourceEvent

*class* `net.minecraftforge.event.world.BlockEvent.CreateFluidSourceEvent`

Fired to check whether a non-source block can turn into a source block.
 A result of ALLOW causes a source block to be created even if the liquid
 usually doesn't do that (like lava), and a result of DENY prevents creation
 even if the liquid usually does do that (like water).

Enclosing class: BlockEvent

### Inherited methods
- from `net.minecraftforge.event.world.BlockEvent`: `getPos`, `getState`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BlockEvent.CropGrowEvent

*class* `net.minecraftforge.event.world.BlockEvent.CropGrowEvent`

Fired when a crop block grows. See subevents.

Enclosing class: BlockEvent

### Inherited methods
- from `net.minecraftforge.event.world.BlockEvent`: `getPos`, `getState`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BlockEvent.CropGrowEvent.Post

*class* `net.minecraftforge.event.world.BlockEvent.CropGrowEvent.Post`

Fired when "growing age" blocks (for example cacti, chorus plants, or crops
 in vanilla) have successfully grown. The block's original state is available,
 in addition to its new state.

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

Enclosing class: BlockEvent.CropGrowEvent

### Methods
- `public IBlockState getOriginalState()`

### Inherited methods
- from `net.minecraftforge.event.world.BlockEvent`: `getPos`, `getState`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BlockEvent.CropGrowEvent.Pre

*class* `net.minecraftforge.event.world.BlockEvent.CropGrowEvent.Pre`

Fired when any "growing age" blocks (for example cacti, chorus plants, or crops
 in vanilla) attempt to advance to the next growth age state during a random tick.

 Result#DEFAULT will pass on to the vanilla growth mechanics.

 Result#ALLOW will force the plant to advance a growth stage.

 Result#DENY will prevent the plant from advancing a growth stage.

 This event is not Cancelable.

Enclosing class: BlockEvent.CropGrowEvent

### Inherited methods
- from `net.minecraftforge.event.world.BlockEvent`: `getPos`, `getState`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BlockEvent.EntityMultiPlaceEvent

*class* `net.minecraftforge.event.world.BlockEvent.EntityMultiPlaceEvent`

Fired when a single block placement triggers the
 creation of multiple blocks(e.g. placing a bed block). The block returned
 by BlockEvent.state and its related methods is the block where
 the placed block would exist if the placement only affected a single
 block.

Enclosing class: BlockEvent

### Methods
- `public java.util.List<BlockSnapshot> getReplacedBlockSnapshots()`
  Gets a list of BlockSnapshots for all blocks which were replaced by the
   placement of the new blocks. Most of these blocks will just be of type AIR.
  - returns: immutable list of replaced BlockSnapshots

### Inherited methods
- from `net.minecraftforge.event.world.BlockEvent.EntityPlaceEvent`: `getBlockSnapshot`, `getEntity`, `getPlacedAgainst`, `getPlacedBlock`
- from `net.minecraftforge.event.world.BlockEvent`: `getPos`, `getState`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BlockEvent.EntityPlaceEvent

*class* `net.minecraftforge.event.world.BlockEvent.EntityPlaceEvent`

Called when a block is placed.

 If a Block Place event is cancelled, the block will not be placed.

Enclosing class: BlockEvent

### Methods
- `public Entity getEntity()`
- `public BlockSnapshot getBlockSnapshot()`
- `public IBlockState getPlacedBlock()`
- `public IBlockState getPlacedAgainst()`

### Inherited methods
- from `net.minecraftforge.event.world.BlockEvent`: `getPos`, `getState`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BlockEvent.FarmlandTrampleEvent

*class* `net.minecraftforge.event.world.BlockEvent.FarmlandTrampleEvent`

Fired when when farmland gets trampled
 This event is Cancelable

Enclosing class: BlockEvent

### Methods
- `public Entity getEntity()`
- `public float getFallDistance()`

### Inherited methods
- from `net.minecraftforge.event.world.BlockEvent`: `getPos`, `getState`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BlockEvent.FluidPlaceBlockEvent

*class* `net.minecraftforge.event.world.BlockEvent.FluidPlaceBlockEvent`

Fired when a liquid places a block. Use setNewState(IBlockState) to change the result of
 a cobblestone generator or add variants of obsidian. Alternatively, you could execute
 arbitrary code when lava sets blocks on fire, even preventing it.

 BlockEvent.getState() will return the block that was originally going to be placed.
 BlockEvent.getPos() will return the position of the block to be changed.

Enclosing class: BlockEvent

### Methods
- `public BlockPos getLiquidPos()`
  - returns: The position of the liquid this event originated from. This may be the same as BlockEvent.getPos().
- `public IBlockState getNewState()`
  - returns: The block state that will be placed after this event resolves.
- `public void setNewState(IBlockState state)`
- `public IBlockState getOriginalState()`
  - returns: The state of the block to be changed before the event was fired.

### Inherited methods
- from `net.minecraftforge.event.world.BlockEvent`: `getPos`, `getState`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BlockEvent.HarvestDropsEvent

*class* `net.minecraftforge.event.world.BlockEvent.HarvestDropsEvent`

Fired when a block is about to drop it's harvested items. The drops array can be amended, as can the dropChance.
 Note well: the harvester player field is null in a variety of scenarios. Code expecting null.

 The dropChance is used to determine which items in this array will actually drop, compared to a random number. If you wish, you
 can pre-filter yourself, and set dropChance to 1.0f to always drop the contents of the drops array.

 isSilkTouching is set if this is considered a silk touch harvesting operation, vs a normal harvesting operation. Act accordingly.

Enclosing class: BlockEvent

### Methods
- `public int getFortuneLevel()`
- `public java.util.List<ItemStack> getDrops()`
- `public boolean isSilkTouching()`
- `public float getDropChance()`
- `public void setDropChance(float dropChance)`
- `public EntityPlayer getHarvester()`

### Inherited methods
- from `net.minecraftforge.event.world.BlockEvent`: `getPos`, `getState`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BlockEvent.MultiPlaceEvent

*class* `net.minecraftforge.event.world.BlockEvent.MultiPlaceEvent`

Fired when a single block placement action of a player triggers the
 creation of multiple blocks(e.g. placing a bed block). The block returned
 by BlockEvent.state and its related methods is the block where
 the placed block would exist if the placement only affected a single
 block.

Enclosing class: BlockEvent

### Methods
- `public java.util.List<BlockSnapshot> getReplacedBlockSnapshots()`
  Gets a list of BlockSnapshots for all blocks which were replaced by the
   placement of the new blocks. Most of these blocks will just be of type AIR.
  - returns: immutable list of replaced BlockSnapshots

### Inherited methods
- from `net.minecraftforge.event.world.BlockEvent.PlaceEvent`: `getHand`, `getItemInHand`, `getPlayer`
- from `net.minecraftforge.event.world.BlockEvent.EntityPlaceEvent`: `getBlockSnapshot`, `getEntity`, `getPlacedAgainst`, `getPlacedBlock`
- from `net.minecraftforge.event.world.BlockEvent`: `getPos`, `getState`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BlockEvent.NeighborNotifyEvent

*class* `net.minecraftforge.event.world.BlockEvent.NeighborNotifyEvent`

Fired when a physics update occurs on a block. This event acts as
 a way for mods to detect physics updates, in the same way a BUD switch
 does. This event is only called on the server.

Enclosing class: BlockEvent

### Methods
- `public java.util.EnumSet<EnumFacing> getNotifiedSides()`
  Gets a list of directions from the base block that updates will occur upon.
  - returns: list of notified directions
- `public boolean getForceRedstoneUpdate()`
  Get if redstone update was forced during setBlock call (0x16 to flags)
  - returns: if the flag was set

### Inherited methods
- from `net.minecraftforge.event.world.BlockEvent`: `getPos`, `getState`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BlockEvent.PlaceEvent

*class* `net.minecraftforge.event.world.BlockEvent.PlaceEvent`

Deprecated.

Enclosing class: BlockEvent

### Methods
- `public EntityPlayer getPlayer()` (deprecated)
  Deprecated.
- `@Deprecated public ItemStack getItemInHand()` (deprecated)
  Deprecated.
- `public EnumHand getHand()` (deprecated)
  Deprecated.

### Inherited methods
- from `net.minecraftforge.event.world.BlockEvent.EntityPlaceEvent`: `getBlockSnapshot`, `getEntity`, `getPlacedAgainst`, `getPlacedBlock`
- from `net.minecraftforge.event.world.BlockEvent`: `getPos`, `getState`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BlockEvent.PortalSpawnEvent

*class* `net.minecraftforge.event.world.BlockEvent.PortalSpawnEvent`

Enclosing class: BlockEvent

### Methods
- `public BlockPortal.Size getPortalSize()`

### Inherited methods
- from `net.minecraftforge.event.world.BlockEvent`: `getPos`, `getState`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ChunkDataEvent

*class* `net.minecraftforge.event.world.ChunkDataEvent`

ChunkDataEvent is fired when an event involving chunk data occurs.

 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 data contains the NBTTagCompound containing the chunk data for this event.

 All children of this event are fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public NBTTagCompound getData()`

### Inherited methods
- from `net.minecraftforge.event.world.ChunkEvent`: `getChunk`
- from `net.minecraftforge.event.world.WorldEvent`: `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ChunkDataEvent.Load

*class* `net.minecraftforge.event.world.ChunkDataEvent.Load`

ChunkDataEvent.Load is fired when vanilla Minecraft attempts to load Chunk data.

 This event is fired during chunk loading in
 ChunkIOProvider.syncCallback().

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: ChunkDataEvent

### Inherited methods
- from `net.minecraftforge.event.world.ChunkDataEvent`: `getData`
- from `net.minecraftforge.event.world.ChunkEvent`: `getChunk`
- from `net.minecraftforge.event.world.WorldEvent`: `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ChunkDataEvent.Save

*class* `net.minecraftforge.event.world.ChunkDataEvent.Save`

ChunkDataEvent.Save is fired when vanilla Minecraft attempts to save Chunk data.

 This event is fired during chunk saving in
 AnvilChunkLoader.saveChunk(World, Chunk).

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: ChunkDataEvent

### Inherited methods
- from `net.minecraftforge.event.world.ChunkDataEvent`: `getData`
- from `net.minecraftforge.event.world.ChunkEvent`: `getChunk`
- from `net.minecraftforge.event.world.WorldEvent`: `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ChunkEvent

*class* `net.minecraftforge.event.world.ChunkEvent`

ChunkEvent is fired when an event involving a chunk occurs.

 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 chunk contains the Chunk this event is affecting.

 All children of this event are fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public Chunk getChunk()`

### Inherited methods
- from `net.minecraftforge.event.world.WorldEvent`: `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ChunkEvent.Load

*class* `net.minecraftforge.event.world.ChunkEvent.Load`

ChunkEvent.Load is fired when vanilla Minecraft attempts to load a Chunk into the world.

 This event is fired during chunk loading in

 ChunkProviderClient.loadChunk(int, int),

 Chunk.onChunkLoad().

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: ChunkEvent

### Inherited methods
- from `net.minecraftforge.event.world.ChunkEvent`: `getChunk`
- from `net.minecraftforge.event.world.WorldEvent`: `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ChunkEvent.Unload

*class* `net.minecraftforge.event.world.ChunkEvent.Unload`

ChunkEvent.Unload is fired when vanilla Minecraft attempts to unload a Chunk from the world.

 This event is fired during chunk unloading in

 Chunk.onChunkUnload().

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: ChunkEvent

### Inherited methods
- from `net.minecraftforge.event.world.ChunkEvent`: `getChunk`
- from `net.minecraftforge.event.world.WorldEvent`: `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ChunkWatchEvent

*class* `net.minecraftforge.event.world.ChunkWatchEvent`

ChunkWatchEvent is fired when an event involving a chunk being watched occurs.

 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 chunk contains the ChunkPos of the Chunk this event is affecting.

 player contains the EntityPlayer that is involved with this chunk being watched.

 chunkInstance contains the instance of the Chunk.

 The player's world may not be the same as the world of the chunk
 when the player is teleporting to another dimension.

 All children of this event are fired on the MinecraftForge.EVENT_BUS.

### Methods
- `@Deprecated public ChunkPos getChunk()` (deprecated)
  Deprecated.
- `public EntityPlayerMP getPlayer()`
- `public Chunk getChunkInstance()`
  The affected chunk.
  - returns: The affected chunk.

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ChunkWatchEvent.UnWatch

*class* `net.minecraftforge.event.world.ChunkWatchEvent.UnWatch`

ChunkWatchEvent.UnWatch is fired when an EntityPlayer stops watching a chunk.

 This event is fired when a chunk is removed from the watched chunks of an EntityPlayer in
 PlayerChunkMapEntry.removePlayer(EntityPlayerMP).

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: ChunkWatchEvent

### Inherited methods
- from `net.minecraftforge.event.world.ChunkWatchEvent`: `getChunk`, `getChunkInstance`, `getPlayer`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ChunkWatchEvent.Watch

*class* `net.minecraftforge.event.world.ChunkWatchEvent.Watch`

ChunkWatchEvent.Watch is fired when an EntityPlayer begins watching a chunk.

 This event is fired when a chunk is added to the watched chunks of an EntityPlayer in
 PlayerChunkMapEntry.addPlayer(EntityPlayerMP) and PlayerChunkMapEntry.sendToPlayers().

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: ChunkWatchEvent

### Inherited methods
- from `net.minecraftforge.event.world.ChunkWatchEvent`: `getChunk`, `getChunkInstance`, `getPlayer`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ExplosionEvent

*class* `net.minecraftforge.event.world.ExplosionEvent`

ExplosionEvent triggers when an explosion happens in the world.

 ExplosionEvent.Start is fired before the explosion actually occurs.

 ExplosionEvent.Detonate is fired once the explosion has a list of affected blocks and entities.

 ExplosionEvent.Start is Cancelable.

 ExplosionEvent.Detonate can modify the affected blocks and entities.

 Children do not use HasResult.

 Children of this event are fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public World getWorld()`
- `public Explosion getExplosion()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ExplosionEvent.Detonate

*class* `net.minecraftforge.event.world.ExplosionEvent.Detonate`

ExplosionEvent.Detonate is fired once the explosion has a list of affected blocks and entities. These lists can be modified to change the outcome.

 This event is not Cancelable.

 This event does not use HasResult.

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: ExplosionEvent

### Methods
- `public java.util.List<BlockPos> getAffectedBlocks()`
  return the list of blocks affected by the explosion.
- `public java.util.List<Entity> getAffectedEntities()`
  return the list of entities affected by the explosion.

### Inherited methods
- from `net.minecraftforge.event.world.ExplosionEvent`: `getExplosion`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ExplosionEvent.Start

*class* `net.minecraftforge.event.world.ExplosionEvent.Start`

ExplosionEvent.Start is fired before the explosion actually occurs. Canceling this event will stop the explosion.

 This event is Cancelable.

 This event does not use HasResult.

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: ExplosionEvent

### Inherited methods
- from `net.minecraftforge.event.world.ExplosionEvent`: `getExplosion`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GetCollisionBoxesEvent

*class* `net.minecraftforge.event.world.GetCollisionBoxesEvent`

This event is fired during World.collidesWithAnyBlock(AxisAlignedBB)
 and before returning the list in World.getCollisionBoxes(Entity, AxisAlignedBB)

 entity contains the entity passed in the World.getCollisionBoxes(Entity, AxisAlignedBB). Can be null. Calls from World.collidesWithAnyBlock(AxisAlignedBB) will be null.

 aabb contains the AxisAlignedBB passed in the method.

 collisionBoxesList contains the list of detected collision boxes intersecting with aabb. The list can be modified.

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public Entity getEntity()`
- `public AxisAlignedBB getAabb()`
- `public java.util.List<AxisAlignedBB> getCollisionBoxesList()`

### Inherited methods
- from `net.minecraftforge.event.world.WorldEvent`: `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## NoteBlockEvent

*class* `net.minecraftforge.event.world.NoteBlockEvent`

Base class for Noteblock Events

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
- from `net.minecraftforge.event.world.BlockEvent`: `getPos`, `getState`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## NoteBlockEvent.Change

*class* `net.minecraftforge.event.world.NoteBlockEvent.Change`

Fired when a Noteblock is changed. You can adjust the note it will change to via NoteBlockEvent.setNote(Note, Octave).
 Canceling this event will not change the note and also stop the Noteblock from playing it's note.

Enclosing class: NoteBlockEvent

### Methods
- `public NoteBlockEvent.Note getOldNote()`
- `public NoteBlockEvent.Octave getOldOctave()`

### Inherited methods
- from `net.minecraftforge.event.world.NoteBlockEvent`: `getNote`, `getOctave`, `getVanillaNoteId`, `setNote`
- from `net.minecraftforge.event.world.BlockEvent`: `getPos`, `getState`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## NoteBlockEvent.Instrument

*enum* `net.minecraftforge.event.world.NoteBlockEvent.Instrument`

Describes the types of musical Instruments that can be played by a Noteblock.
 The Instrument being played can be overridden with NoteBlockEvent.Play#setInstrument(Instrument)

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<NoteBlockEvent.Instrument>

Enclosing class: NoteBlockEvent

### Fields
- `public static final NoteBlockEvent.Instrument PIANO`
- `public static final NoteBlockEvent.Instrument BASSDRUM`
- `public static final NoteBlockEvent.Instrument SNARE`
- `public static final NoteBlockEvent.Instrument CLICKS`
- `public static final NoteBlockEvent.Instrument BASSGUITAR`
- `public static final NoteBlockEvent.Instrument FLUTE`
- `public static final NoteBlockEvent.Instrument BELL`
- `public static final NoteBlockEvent.Instrument GUITAR`
- `public static final NoteBlockEvent.Instrument CHIME`
- `public static final NoteBlockEvent.Instrument XYLOPHONE`

### Methods
- `public static NoteBlockEvent.Instrument[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (NoteBlockEvent.Instrument c : NoteBlockEvent.Instrument.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static NoteBlockEvent.Instrument valueOf(java.lang.String name)`
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

## NoteBlockEvent.Note

*enum* `net.minecraftforge.event.world.NoteBlockEvent.Note`

Information about the pitch of a Noteblock note.
 For altered notes such as G-Sharp / A-Flat the Sharp variant is used here.

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<NoteBlockEvent.Note>

Enclosing class: NoteBlockEvent

### Fields
- `public static final NoteBlockEvent.Note F_SHARP`
- `public static final NoteBlockEvent.Note G`
- `public static final NoteBlockEvent.Note G_SHARP`
- `public static final NoteBlockEvent.Note A`
- `public static final NoteBlockEvent.Note A_SHARP`
- `public static final NoteBlockEvent.Note B`
- `public static final NoteBlockEvent.Note C`
- `public static final NoteBlockEvent.Note C_SHARP`
- `public static final NoteBlockEvent.Note D`
- `public static final NoteBlockEvent.Note D_SHARP`
- `public static final NoteBlockEvent.Note E`
- `public static final NoteBlockEvent.Note F`

### Methods
- `public static NoteBlockEvent.Note[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (NoteBlockEvent.Note c : NoteBlockEvent.Note.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static NoteBlockEvent.Note valueOf(java.lang.String name)`
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

## NoteBlockEvent.Octave

*enum* `net.minecraftforge.event.world.NoteBlockEvent.Octave`

Describes the Octave of a Note being played by a Noteblock.
 Together with NoteBlockEvent.Note it fully describes the note.

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<NoteBlockEvent.Octave>

Enclosing class: NoteBlockEvent

### Fields
- `public static final NoteBlockEvent.Octave LOW`
- `public static final NoteBlockEvent.Octave MID`
- `public static final NoteBlockEvent.Octave HIGH`

### Methods
- `public static NoteBlockEvent.Octave[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (NoteBlockEvent.Octave c : NoteBlockEvent.Octave.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static NoteBlockEvent.Octave valueOf(java.lang.String name)`
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

## NoteBlockEvent.Play

*class* `net.minecraftforge.event.world.NoteBlockEvent.Play`

Fired when a Noteblock plays it's note. You can override the note and instrument
 Canceling this event will stop the note from playing.

Enclosing class: NoteBlockEvent

### Methods
- `public NoteBlockEvent.Instrument getInstrument()`
- `public void setInstrument(NoteBlockEvent.Instrument instrument)`

### Inherited methods
- from `net.minecraftforge.event.world.NoteBlockEvent`: `getNote`, `getOctave`, `getVanillaNoteId`, `setNote`
- from `net.minecraftforge.event.world.BlockEvent`: `getPos`, `getState`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## WorldEvent

*class* `net.minecraftforge.event.world.WorldEvent`

WorldEvent is fired when an event involving the world occurs.

 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 world contains the World this event is occurring in.

 All children of this event are fired on the MinecraftForge#EVENT_BUS.

### Methods
- `public World getWorld()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## WorldEvent.CreateSpawnPosition

*class* `net.minecraftforge.event.world.WorldEvent.CreateSpawnPosition`

Called by WorldServer when it attempts to create a spawnpoint for a dimension.
 Canceling the event will prevent the vanilla code from running.

Enclosing class: WorldEvent

### Methods
- `public WorldSettings getSettings()`

### Inherited methods
- from `net.minecraftforge.event.world.WorldEvent`: `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## WorldEvent.Load

*class* `net.minecraftforge.event.world.WorldEvent.Load`

WorldEvent.Load is fired when Minecraft loads a world.

 This event is fired when a world is loaded in
 WorldClient(NetHandlerPlayClient, WorldSettings, int, EnumDifficulty, Profiler),
 MinecraftServer.loadAllWorlds(String, String, long, WorldType, String),
 IntegratedServer.loadAllWorlds(String, String, long, WorldType, String)
 DimensionManager#initDimension(int),
 and ForgeInternalHandler#onDimensionLoad(Load).

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge#EVENT_BUS.

Enclosing class: WorldEvent

### Inherited methods
- from `net.minecraftforge.event.world.WorldEvent`: `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## WorldEvent.PotentialSpawns

*class* `net.minecraftforge.event.world.WorldEvent.PotentialSpawns`

Called by WorldServer to gather a list of all possible entities that can spawn at the specified location.
 If an entry is added to the list, it needs to be a globally unique instance.
 The event is called in WorldServer.getSpawnListEntryForTypeAt(EnumCreatureType, BlockPos) as well as
 WorldServer#canCreatureTypeSpawnHere(EnumCreatureType, SpawnListEntry, BlockPos)
 where the latter checks for identity, meaning both events must add the same instance.
 Canceling the event will result in a empty list, meaning no entity will be spawned.

Enclosing class: WorldEvent

### Methods
- `public EnumCreatureType getType()`
- `public BlockPos getPos()`
- `public java.util.List<Biome.SpawnListEntry> getList()`

### Inherited methods
- from `net.minecraftforge.event.world.WorldEvent`: `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## WorldEvent.Save

*class* `net.minecraftforge.event.world.WorldEvent.Save`

WorldEvent.Save is fired when Minecraft saves a world.

 This event is fired when a world is saved in
 WorldServer.saveAllChunks(boolean, IProgressUpdate),
 ForgeInternalHandler#onDimensionSave(Save).

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge#EVENT_BUS.

Enclosing class: WorldEvent

### Inherited methods
- from `net.minecraftforge.event.world.WorldEvent`: `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## WorldEvent.Unload

*class* `net.minecraftforge.event.world.WorldEvent.Unload`

WorldEvent.Unload is fired when Minecraft unloads a world.

 This event is fired when a world is unloaded in
 Minecraft.loadWorld(WorldClient, String),
 MinecraftServer.stopServer(),
 DimensionManager#unloadWorlds(Hashtable),
 ForgeInternalHandler#onDimensionUnload(Unload).

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge#EVENT_BUS.

Enclosing class: WorldEvent

### Inherited methods
- from `net.minecraftforge.event.world.WorldEvent`: `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`
