# net.minecraftforge.fml.common.gameevent

- [InputEvent](#inputevent)
- [InputEvent.KeyInputEvent](#inputevent.keyinputevent)
- [InputEvent.MouseInputEvent](#inputevent.mouseinputevent)
- [PlayerEvent](#playerevent)
- [PlayerEvent.ItemCraftedEvent](#playerevent.itemcraftedevent)
- [PlayerEvent.ItemPickupEvent](#playerevent.itempickupevent)
- [PlayerEvent.ItemSmeltedEvent](#playerevent.itemsmeltedevent)
- [PlayerEvent.PlayerChangedDimensionEvent](#playerevent.playerchangeddimensionevent)
- [PlayerEvent.PlayerLoggedInEvent](#playerevent.playerloggedinevent)
- [PlayerEvent.PlayerLoggedOutEvent](#playerevent.playerloggedoutevent)
- [PlayerEvent.PlayerRespawnEvent](#playerevent.playerrespawnevent)
- [TickEvent](#tickevent)
- [TickEvent.ClientTickEvent](#tickevent.clienttickevent)
- [TickEvent.Phase](#tickevent.phase)
- [TickEvent.PlayerTickEvent](#tickevent.playertickevent)
- [TickEvent.RenderTickEvent](#tickevent.rendertickevent)
- [TickEvent.ServerTickEvent](#tickevent.servertickevent)
- [TickEvent.Type](#tickevent.type)
- [TickEvent.WorldTickEvent](#tickevent.worldtickevent)
## InputEvent

*class* `net.minecraftforge.fml.common.gameevent.InputEvent`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## InputEvent.KeyInputEvent

*class* `net.minecraftforge.fml.common.gameevent.InputEvent.KeyInputEvent`

Enclosing class: InputEvent

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## InputEvent.MouseInputEvent

*class* `net.minecraftforge.fml.common.gameevent.InputEvent.MouseInputEvent`

Enclosing class: InputEvent

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerEvent

*class* `net.minecraftforge.fml.common.gameevent.PlayerEvent`

### Fields
- `public final EntityPlayer player`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerEvent.ItemCraftedEvent

*class* `net.minecraftforge.fml.common.gameevent.PlayerEvent.ItemCraftedEvent`

Enclosing class: PlayerEvent

### Fields
- `public final ItemStack crafting`
- `public final IInventory craftMatrix`

### Inherited fields
- from `net.minecraftforge.fml.common.gameevent.PlayerEvent`: `player`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerEvent.ItemPickupEvent

*class* `net.minecraftforge.fml.common.gameevent.PlayerEvent.ItemPickupEvent`

Enclosing class: PlayerEvent

### Fields
- `@Deprecated public final EntityItem pickedUp` (deprecated)
  Deprecated.

### Inherited fields
- from `net.minecraftforge.fml.common.gameevent.PlayerEvent`: `player`

### Methods
- `public ItemStack getStack()`
- `public EntityItem getOriginalEntity()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerEvent.ItemSmeltedEvent

*class* `net.minecraftforge.fml.common.gameevent.PlayerEvent.ItemSmeltedEvent`

Enclosing class: PlayerEvent

### Fields
- `public final ItemStack smelting`

### Inherited fields
- from `net.minecraftforge.fml.common.gameevent.PlayerEvent`: `player`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerEvent.PlayerChangedDimensionEvent

*class* `net.minecraftforge.fml.common.gameevent.PlayerEvent.PlayerChangedDimensionEvent`

Enclosing class: PlayerEvent

### Fields
- `public final int fromDim`
- `public final int toDim`

### Inherited fields
- from `net.minecraftforge.fml.common.gameevent.PlayerEvent`: `player`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerEvent.PlayerLoggedInEvent

*class* `net.minecraftforge.fml.common.gameevent.PlayerEvent.PlayerLoggedInEvent`

Enclosing class: PlayerEvent

### Inherited fields
- from `net.minecraftforge.fml.common.gameevent.PlayerEvent`: `player`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerEvent.PlayerLoggedOutEvent

*class* `net.minecraftforge.fml.common.gameevent.PlayerEvent.PlayerLoggedOutEvent`

Enclosing class: PlayerEvent

### Inherited fields
- from `net.minecraftforge.fml.common.gameevent.PlayerEvent`: `player`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerEvent.PlayerRespawnEvent

*class* `net.minecraftforge.fml.common.gameevent.PlayerEvent.PlayerRespawnEvent`

Enclosing class: PlayerEvent

### Inherited fields
- from `net.minecraftforge.fml.common.gameevent.PlayerEvent`: `player`

### Methods
- `public boolean isEndConquered()`
  Did this respawn event come from the player conquering the end?
  - returns: if this respawn was because the player conquered the end

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## TickEvent

*class* `net.minecraftforge.fml.common.gameevent.TickEvent`

### Fields
- `public final TickEvent.Type type`
- `public final Side side`
- `public final TickEvent.Phase phase`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## TickEvent.ClientTickEvent

*class* `net.minecraftforge.fml.common.gameevent.TickEvent.ClientTickEvent`

Enclosing class: TickEvent

### Inherited fields
- from `net.minecraftforge.fml.common.gameevent.TickEvent`: `phase`, `side`, `type`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## TickEvent.Phase

*enum* `net.minecraftforge.fml.common.gameevent.TickEvent.Phase`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<TickEvent.Phase>

Enclosing class: TickEvent

### Fields
- `public static final TickEvent.Phase START`
- `public static final TickEvent.Phase END`

### Methods
- `public static TickEvent.Phase[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (TickEvent.Phase c : TickEvent.Phase.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static TickEvent.Phase valueOf(java.lang.String name)`
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

## TickEvent.PlayerTickEvent

*class* `net.minecraftforge.fml.common.gameevent.TickEvent.PlayerTickEvent`

Enclosing class: TickEvent

### Fields
- `public final EntityPlayer player`

### Inherited fields
- from `net.minecraftforge.fml.common.gameevent.TickEvent`: `phase`, `side`, `type`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## TickEvent.RenderTickEvent

*class* `net.minecraftforge.fml.common.gameevent.TickEvent.RenderTickEvent`

Enclosing class: TickEvent

### Fields
- `public final float renderTickTime`

### Inherited fields
- from `net.minecraftforge.fml.common.gameevent.TickEvent`: `phase`, `side`, `type`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## TickEvent.ServerTickEvent

*class* `net.minecraftforge.fml.common.gameevent.TickEvent.ServerTickEvent`

Enclosing class: TickEvent

### Inherited fields
- from `net.minecraftforge.fml.common.gameevent.TickEvent`: `phase`, `side`, `type`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## TickEvent.Type

*enum* `net.minecraftforge.fml.common.gameevent.TickEvent.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<TickEvent.Type>

Enclosing class: TickEvent

### Fields
- `public static final TickEvent.Type WORLD`
- `public static final TickEvent.Type PLAYER`
- `public static final TickEvent.Type CLIENT`
- `public static final TickEvent.Type SERVER`
- `public static final TickEvent.Type RENDER`

### Methods
- `public static TickEvent.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (TickEvent.Type c : TickEvent.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static TickEvent.Type valueOf(java.lang.String name)`
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

## TickEvent.WorldTickEvent

*class* `net.minecraftforge.fml.common.gameevent.TickEvent.WorldTickEvent`

Enclosing class: TickEvent

### Fields
- `public final World world`

### Inherited fields
- from `net.minecraftforge.fml.common.gameevent.TickEvent`: `phase`, `side`, `type`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`
