# net.minecraftforge.event.entity.item

- [ItemEvent](#itemevent)
- [ItemExpireEvent](#itemexpireevent)
- [ItemTossEvent](#itemtossevent)
## ItemEvent

*class* `net.minecraftforge.event.entity.item.ItemEvent`

Base class for all ItemEntity events. Contains a reference to the
 ItemEntity of interest. For most ItemEntity events, there's little to no
 additional useful data from the firing method that isn't already contained
 within the ItemEntity instance.

### Fields
- `private final ItemEntity itemEntity`

### Methods
- `public ItemEntity getEntity()`
  The relevant ItemEntity for this event.

## ItemExpireEvent

*class* `net.minecraftforge.event.entity.item.ItemExpireEvent`

Event that is fired when an EntityItem's age has reached its maximum
 lifespan. Canceling this event will prevent the EntityItem from being
 flagged as dead, thus staying it's removal from the world. If canceled
 it will add more time to the entities life equal to extraLife.

### Fields
- `private int extraLife`

### Methods
- `public int getExtraLife()`
- `public void setExtraLife(int extraLife)`

### Inherited methods
- from `net.minecraftforge.event.entity.item.ItemEvent`: `getEntity`

## ItemTossEvent

*class* `net.minecraftforge.event.entity.item.ItemTossEvent`

Event that is fired whenever a player tosses (Q) an item or drag-n-drops a
 stack of items outside the inventory GUI screens. Canceling the event will
 stop the items from entering the world, but will not prevent them being
 removed from the inventory - and thus removed from the system.

### Fields
- `private final Player player`

### Methods
- `public Player getPlayer()`
  The player tossing the item.

### Inherited methods
- from `net.minecraftforge.event.entity.item.ItemEvent`: `getEntity`
