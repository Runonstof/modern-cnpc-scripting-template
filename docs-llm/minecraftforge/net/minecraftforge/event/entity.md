# net.minecraftforge.event.entity

- [EntityEvent](#entityevent)
- [EntityEvent.CanUpdate](#entityevent.canupdate)
- [EntityEvent.EnteringChunk](#entityevent.enteringchunk)
- [EntityEvent.EntityConstructing](#entityevent.entityconstructing)
- [EntityJoinWorldEvent](#entityjoinworldevent)
- [EntityMobGriefingEvent](#entitymobgriefingevent)
- [EntityMountEvent](#entitymountevent)
- [EntityStruckByLightningEvent](#entitystruckbylightningevent)
- [EntityTravelToDimensionEvent](#entitytraveltodimensionevent)
- [PlaySoundAtEntityEvent](#playsoundatentityevent)
- [ProjectileImpactEvent](#projectileimpactevent)
- [ProjectileImpactEvent.Arrow](#projectileimpactevent.arrow)
- [ProjectileImpactEvent.Fireball](#projectileimpactevent.fireball)
- [ProjectileImpactEvent.Throwable](#projectileimpactevent.throwable)
- [ThrowableImpactEvent](#throwableimpactevent)
## EntityEvent

*class* `net.minecraftforge.event.entity.EntityEvent`

EntityEvent is fired when an event involving any Entity occurs.

 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 entity contains the entity that caused this event to occur.

 All children of this event are fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public Entity getEntity()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## EntityEvent.CanUpdate

*class* `net.minecraftforge.event.entity.EntityEvent.CanUpdate`

CanUpdate is fired when an Entity is being created.

 This event is fired whenever vanilla Minecraft determines that an entity

 cannot update in World.updateEntityWithOptionalForce(net.minecraft.entity.Entity, boolean)

 canUpdate contains the boolean value of whether this entity can update.

 If the modder decides that this Entity can be updated, they may change canUpdate to true,

 and the entity with then be updated.

 This event is not Cancelable.

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: EntityEvent

### Methods
- `public boolean getCanUpdate()`
- `public void setCanUpdate(boolean canUpdate)`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## EntityEvent.EnteringChunk

*class* `net.minecraftforge.event.entity.EntityEvent.EnteringChunk`

EnteringChunk is fired when an Entity enters a chunk.

 This event is fired whenever vanilla Minecraft determines that an entity

 is entering a chunk in Chunk.addEntity(net.minecraft.entity.Entity)

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: EntityEvent

### Methods
- `public int getNewChunkX()`
- `public void setNewChunkX(int newChunkX)`
- `public int getNewChunkZ()`
- `public void setNewChunkZ(int newChunkZ)`
- `public int getOldChunkX()`
- `public void setOldChunkX(int oldChunkX)`
- `public int getOldChunkZ()`
- `public void setOldChunkZ(int oldChunkZ)`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## EntityEvent.EntityConstructing

*class* `net.minecraftforge.event.entity.EntityEvent.EntityConstructing`

EntityConstructing is fired when an Entity is being created.

 This event is fired within the constructor of the Entity.

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: EntityEvent

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## EntityJoinWorldEvent

*class* `net.minecraftforge.event.entity.EntityJoinWorldEvent`

EntityJoinWorldEvent is fired when an Entity joins the world.

 This event is fired whenever an Entity is added to the world in
 World.loadEntities(Collection), WorldServer.loadEntities(Collection) World.joinEntityInSurroundings(Entity), and World.spawnEntity(Entity).

 world contains the world in which the entity is to join.

 This event is Cancelable.

 If this event is canceled, the Entity is not added to the world.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public World getWorld()`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## EntityMobGriefingEvent

*class* `net.minecraftforge.event.entity.EntityMobGriefingEvent`

EntityMobGriefingEvent is fired when mob griefing is about to occur and allows an event listener to specify whether it should or not.

 This event is fired when ever the mobGriefing game rule is checked.

 This event has a result:

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## EntityMountEvent

*class* `net.minecraftforge.event.entity.EntityMountEvent`

This event gets fired whenever a entity mounts/dismounts another entity.

 entityBeingMounted can be null, be sure to check for that.

 This event is Cancelable.

 If this event is canceled, the entity does not mount/dismount the other entity.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public boolean isMounting()`
- `public boolean isDismounting()`
- `public Entity getEntityMounting()`
- `public Entity getEntityBeingMounted()`
- `public World getWorldObj()`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## EntityStruckByLightningEvent

*class* `net.minecraftforge.event.entity.EntityStruckByLightningEvent`

EntityStruckByLightningEvent is fired when an Entity is about to be struck by lightening.

 This event is fired whenever an EntityLightningBolt is updated to strike an Entity in
 EntityLightningBolt.onUpdate() via ForgeEventFactory.onEntityStruckByLightning(Entity, EntityLightningBolt).

 lightning contains the instance of EntityLightningBolt attempting to strike an entity.

 This event is Cancelable.

 If this event is canceled, the Entity is not struck by the lightening.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public EntityLightningBolt getLightning()`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## EntityTravelToDimensionEvent

*class* `net.minecraftforge.event.entity.EntityTravelToDimensionEvent`

EntityTravelToDimensionEvent is fired before an Entity travels to a dimension.

 dimension contains the id of the dimension the entity is traveling to.

 This event is Cancelable.

 If this event is canceled, the Entity does not travel to the dimension.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public int getDimension()`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlaySoundAtEntityEvent

*class* `net.minecraftforge.event.entity.PlaySoundAtEntityEvent`

PlaySoundAtEntityEvent is fired a sound is to be played at an Entity

 This event is fired whenever a sound is set to be played at an Entity such as in
 EntityPlayerSP.playSound(SoundEvent, float, float) and World.playSound(EntityPlayer, double, double, double, SoundEvent, SoundCategory, float, float).

 name contains the name of the sound to be played at the Entity.

 volume contains the volume at which the sound is to be played originally.

 pitch contains the pitch at which the sound is to be played originally.

 newVolume contains the volume at which the sound is actually played.

 newPitch contains the pitch at which the sound is actually played.

 Changing the name field will cause the sound of this name to be played instead of the originally intended sound.

 This event is Cancelable.

 If this event is canceled, the sound is not played.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public SoundEvent getSound()`
- `public SoundCategory getCategory()`
- `public float getDefaultVolume()`
- `public float getDefaultPitch()`
- `public float getVolume()`
- `public float getPitch()`
- `public void setSound(SoundEvent value)`
- `public void setCategory(SoundCategory category)`
- `public void setVolume(float value)`
- `public void setPitch(float value)`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ProjectileImpactEvent

*class* `net.minecraftforge.event.entity.ProjectileImpactEvent`

This event is fired when a projectile entity impacts something.
 This event is fired via ForgeEventFactory.onProjectileImpact(Entity, RayTraceResult)
 Subclasses of this event exist for more specific types of projectile.
 This event is fired for all vanilla projectiles by Forge,
 custom projectiles should fire this event and check the result in a similar fashion.
 This event is cancelable. When canceled, the impact will not be processed.
 Killing or other handling of the entity after event cancellation is up to the modder.
 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public RayTraceResult getRayTraceResult()`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ProjectileImpactEvent.Arrow

*class* `net.minecraftforge.event.entity.ProjectileImpactEvent.Arrow`

Enclosing class: ProjectileImpactEvent

### Methods
- `public EntityArrow getArrow()`

### Inherited methods
- from `net.minecraftforge.event.entity.ProjectileImpactEvent`: `getRayTraceResult`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ProjectileImpactEvent.Fireball

*class* `net.minecraftforge.event.entity.ProjectileImpactEvent.Fireball`

Enclosing class: ProjectileImpactEvent

### Methods
- `public EntityFireball getFireball()`

### Inherited methods
- from `net.minecraftforge.event.entity.ProjectileImpactEvent`: `getRayTraceResult`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ProjectileImpactEvent.Throwable

*class* `net.minecraftforge.event.entity.ProjectileImpactEvent.Throwable`

Enclosing class: ProjectileImpactEvent

### Methods
- `public EntityThrowable getThrowable()`

### Inherited methods
- from `net.minecraftforge.event.entity.ProjectileImpactEvent`: `getRayTraceResult`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ThrowableImpactEvent

*class* `net.minecraftforge.event.entity.ThrowableImpactEvent`

Deprecated.
use ProjectileImpactEvent.Throwable

### Methods
- `public EntityThrowable getEntityThrowable()` (deprecated)
  Deprecated.
- `public RayTraceResult getRayTraceResult()` (deprecated)
  Deprecated.

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`
