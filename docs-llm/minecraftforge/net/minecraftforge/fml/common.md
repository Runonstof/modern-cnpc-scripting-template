# net.minecraftforge.fml.common

- [Class Mod.EventBusSubscriber.Bus](#class-mod.eventbussubscriber.bus)
- [Mod](#mod)
- [Mod.EventBusSubscriber](#mod.eventbussubscriber)
## Class Mod.EventBusSubscriber.Bus

*enum* `net.minecraftforge.fml.common.Class Mod.EventBusSubscriber.Bus`

Enclosing class: Mod.EventBusSubscriber

### Fields
- `private final Supplier<net.minecraftforge.eventbus.api.IEventBus> busSupplier`

### Methods
- `public static Mod.EventBusSubscriber.Bus[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Mod.EventBusSubscriber.Bus valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public Supplier<net.minecraftforge.eventbus.api.IEventBus> bus()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Mod

*annotation interface* `net.minecraftforge.fml.common.Mod`

This defines a Mod to FML.
 Any class found with this annotation applied will be loaded as a Mod. The instance that is loaded will
 represent the mod to other Mods in the system. It will be sent various subclasses of ModLifecycleEvent
 at pre-defined times during the loading of the game.

## Mod.EventBusSubscriber

*annotation interface* `net.minecraftforge.fml.common.Mod.EventBusSubscriber`

Annotate a class which will be subscribed to an Event Bus at mod construction time.
 Defaults to subscribing the current modid to the MinecraftForge#EVENT_BUS
 on both sides.

Enclosing class: Mod
