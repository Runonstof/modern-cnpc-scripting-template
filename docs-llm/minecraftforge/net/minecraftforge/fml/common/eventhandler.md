# net.minecraftforge.fml.common.eventhandler

- [ASMEventHandler](#asmeventhandler)
- [Cancelable](#cancelable)
- [Event](#event)
- [Event.HasResult](#event.hasresult)
- [Event.Result](#event.result)
- [EventBus](#eventbus)
- [EventPriority](#eventpriority)
- [FMLThrowingEventBus](#fmlthrowingeventbus)
- [GenericEvent](#genericevent)
- [IContextSetter](#icontextsetter)
- [IEventExceptionHandler](#ieventexceptionhandler)
- [IEventListener](#ieventlistener)
- [IGenericEvent](#igenericevent)
- [ListenerList](#listenerlist)
- [SubscribeEvent](#subscribeevent)
## ASMEventHandler

*class* `net.minecraftforge.fml.common.eventhandler.ASMEventHandler`

All Implemented Interfaces: IEventListener

### Methods
- `public void invoke(Event event)`
- `public EventPriority getPriority()`
- `public java.lang.Class<?> createWrapper(java.lang.reflect.Method callback)`
- `public java.lang.String toString()`

## Cancelable

*annotation* `net.minecraftforge.fml.common.eventhandler.Cancelable`

## Event

*class* `net.minecraftforge.fml.common.eventhandler.Event`

Base Event class that all other events are derived from

### Methods
- `public boolean isCancelable()`
  Determine if this function is cancelable at all.
  - returns: If access to setCanceled should be allowed

 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.
- `public boolean isCanceled()`
  Determine if this event is canceled and should stop executing.
  - returns: The current canceled state
- `public void setCanceled(boolean cancel)`
  Sets the cancel state of this event. Note, not all events are cancelable, and any attempt to
   invoke this method on an event that is not cancelable (as determined by isCancelable()
   will result in an UnsupportedOperationException.
  
   The functionality of setting the canceled state is defined on a per-event bases.
  - param: cancel - The new canceled value
- `public boolean hasResult()`
  Determines if this event expects a significant result value.
  
   Note:
   Events with the HasResult annotation will have this method automatically added to return true.
- `public Event.Result getResult()`
  Returns the value set as the result of this event
- `public void setResult(Event.Result value)`
  Sets the result value for this event, not all events can have a result set, and any attempt to
   set a result for a event that isn't expecting it will result in a IllegalArgumentException.
  
   The functionality of setting the result is defined on a per-event bases.
  - param: value - The new result
- `protected void setup()`
  Called by the base constructor, this is used by ASM generated
   event classes to setup various functionality such as the listener list.
- `public ListenerList getListenerList()`
  Returns a ListenerList object that contains all listeners
   that are registered to this event.
  - returns: Listener List
- `public EventPriority getPhase()`
- `public void setPhase(EventPriority value)`

## Event.HasResult

*annotation* `net.minecraftforge.fml.common.eventhandler.Event.HasResult`

## Event.Result

*enum* `net.minecraftforge.fml.common.eventhandler.Event.Result`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<Event.Result>

Enclosing class: Event

### Fields
- `public static final Event.Result DENY`
- `public static final Event.Result DEFAULT`
- `public static final Event.Result ALLOW`

### Methods
- `public static Event.Result[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (Event.Result c : Event.Result.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static Event.Result valueOf(java.lang.String name)`
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

## EventBus

*class* `net.minecraftforge.fml.common.eventhandler.EventBus`

All Implemented Interfaces: IEventExceptionHandler

### Methods
- `public void register(java.lang.Object target)`
- `public void unregister(java.lang.Object object)`
- `public boolean post(Event event)`
- `public void shutdown()`
- `public void handleException(EventBus bus,  Event event,  IEventListener[] listeners,  int index,  java.lang.Throwable throwable)`
  Description copied from interface: IEventExceptionHandler
  Fired when a EventListener throws an exception for the specified event on the event bus.
   After this function returns, the original Throwable will be propagated upwards.
  - param: bus - The bus the event is being fired on
  - param: event - The event that is being fired
  - param: listeners - All listeners that are listening for this event, in order
  - param: index - Index for the current listener being fired.
  - param: throwable - The throwable being thrown

## EventPriority

*enum* `net.minecraftforge.fml.common.eventhandler.EventPriority`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EventPriority>, IEventListener

### Fields
- `public static final EventPriority HIGHEST`
- `public static final EventPriority HIGH`
- `public static final EventPriority NORMAL`
- `public static final EventPriority LOW`
- `public static final EventPriority LOWEST`

### Methods
- `public static EventPriority[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EventPriority c : EventPriority.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EventPriority valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public void invoke(Event event)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## FMLThrowingEventBus

*class* `net.minecraftforge.fml.common.eventhandler.FMLThrowingEventBus`

Event bus that allows exceptions thrown by the exception handler to propagate.
 TODO remove this in 1.13 and stop using the guava event bus

All Implemented Interfaces: IEventExceptionHandler

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.EventBus`: `handleException`, `post`, `register`, `shutdown`, `unregister`

## GenericEvent

*class* `net.minecraftforge.fml.common.eventhandler.GenericEvent`

All Implemented Interfaces: IGenericEvent<T>

### Methods
- `public java.lang.reflect.Type getGenericType()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## IContextSetter

*interface* `net.minecraftforge.fml.common.eventhandler.IContextSetter`

### Methods
- `default void setModContainer(ModContainer mod)`

## IEventExceptionHandler

*interface* `net.minecraftforge.fml.common.eventhandler.IEventExceptionHandler`

### Methods
- `void handleException(EventBus bus,  Event event,  IEventListener[] listeners,  int index,  java.lang.Throwable throwable)`
  Fired when a EventListener throws an exception for the specified event on the event bus.
   After this function returns, the original Throwable will be propagated upwards.
  - param: bus - The bus the event is being fired on
  - param: event - The event that is being fired
  - param: listeners - All listeners that are listening for this event, in order
  - param: index - Index for the current listener being fired.
  - param: throwable - The throwable being thrown

## IEventListener

*interface* `net.minecraftforge.fml.common.eventhandler.IEventListener`

### Methods
- `void invoke(Event event)`

## IGenericEvent

*interface* `net.minecraftforge.fml.common.eventhandler.IGenericEvent`

### Methods
- `java.lang.reflect.Type getGenericType()`

## ListenerList

*class* `net.minecraftforge.fml.common.eventhandler.ListenerList`

### Methods
- `public static void resize(int max)`
- `public void resizeLists(int max)`
- `public static void clearBusID(int id)`
- `protected net.minecraftforge.fml.common.eventhandler.ListenerList.ListenerListInst getInstance(int id)`
- `public IEventListener[] getListeners(int id)`
- `public void register(int id,  EventPriority priority,  IEventListener listener)`
- `public void unregister(int id,  IEventListener listener)`
- `public static void unregisterAll(int id,  IEventListener listener)`

## SubscribeEvent

*annotation* `net.minecraftforge.fml.common.eventhandler.SubscribeEvent`
