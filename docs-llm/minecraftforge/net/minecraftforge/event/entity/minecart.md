# net.minecraftforge.event.entity.minecart

- [MinecartCollisionEvent](#minecartcollisionevent)
- [MinecartEvent](#minecartevent)
- [MinecartInteractEvent](#minecartinteractevent)
- [MinecartUpdateEvent](#minecartupdateevent)
## MinecartCollisionEvent

*class* `net.minecraftforge.event.entity.minecart.MinecartCollisionEvent`

MinecartCollisionEvent is fired when a minecart collides with an Entity.
 This event is fired whenever a minecraft collides in
 EntityMinecart.applyEntityCollision(Entity).

 collider contains the Entity the Minecart collided with.

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public Entity getCollider()`

### Inherited methods
- from `net.minecraftforge.event.entity.minecart.MinecartEvent`: `getMinecart`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## MinecartEvent

*class* `net.minecraftforge.event.entity.minecart.MinecartEvent`

MinecartEvent is fired whenever an event involving minecart entities occurs.

 If a method utilizes this Event as its parameter, the method will

 receive every child event of this class.

 minecart contains the minecart entity involved with this event.

 All children of this event are fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public EntityMinecart getMinecart()`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## MinecartInteractEvent

*class* `net.minecraftforge.event.entity.minecart.MinecartInteractEvent`

MinecartInteractEvent is fired when a player interacts with a minecart.

 This event is fired whenever a player interacts with a minecart in
 EntityMinecart.processInitialInteract(EntityPlayer, EnumHand).

 player contains the EntityPlayer that is involved with this minecart interaction.

 This event is Cancelable.

 If this event is canceled, the player does not interact with the minecart.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public EntityPlayer getPlayer()`
- `public ItemStack getItem()`
- `public EnumHand getHand()`

### Inherited methods
- from `net.minecraftforge.event.entity.minecart.MinecartEvent`: `getMinecart`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## MinecartUpdateEvent

*class* `net.minecraftforge.event.entity.minecart.MinecartUpdateEvent`

MinecartUpdateEvent is fired when a minecart is updated.

 This event is fired whenever a minecart is updated in
 EntityMinecart.onUpdate().

 pos contains the coordinate of the track the entity is on {if applicable}.

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public BlockPos getPos()`

### Inherited methods
- from `net.minecraftforge.event.entity.minecart.MinecartEvent`: `getMinecart`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`
