# net.minecraftforge.common.ticket

- [AABBTicket](#aabbticket)
- [ChunkTicketManager](#chunkticketmanager)
- [ITicketGetter](#iticketgetter)
- [ITicketManager](#iticketmanager)
- [MultiTicketManager](#multiticketmanager)
- [SimpleTicket](#simpleticket)
## AABBTicket

*class* `net.minecraftforge.common.ticket.AABBTicket`

### Fields
- `public final AxisAlignedBB axisAlignedBB`

### Inherited fields
- from `net.minecraftforge.common.ticket.SimpleTicket`: `isValid`

### Methods
- `public boolean matches(Vec3d toMatch)`

### Inherited methods
- from `net.minecraftforge.common.ticket.SimpleTicket`: `forEachManager`, `getDummyManagers`, `getMasterManager`, `invalidate`, `isValid`, `setBackend`, `setManager`, `unload`, `validate`

## ChunkTicketManager

*class* `net.minecraftforge.common.ticket.ChunkTicketManager`

All Implemented Interfaces: ITicketGetter<T>, ITicketManager<T>

### Fields
- `public final ChunkPos pos`

### Methods
- `public void add(SimpleTicket<T> ticket)`
- `public void remove(SimpleTicket<T> ticket)`
- `public java.util.Collection<SimpleTicket<T>> getTickets()`

## ITicketGetter

*interface* `net.minecraftforge.common.ticket.ITicketGetter`

All Superinterfaces: ITicketManager<T>

### Methods
- `java.util.Collection<SimpleTicket<T>> getTickets()`

### Inherited methods
- from `net.minecraftforge.common.ticket.ITicketManager`: `add`, `remove`

## ITicketManager

*interface* `net.minecraftforge.common.ticket.ITicketManager`

### Methods
- `void add(SimpleTicket<T> ticket)`
- `void remove(SimpleTicket<T> ticket)`

## MultiTicketManager

*class* `net.minecraftforge.common.ticket.MultiTicketManager`

Deprecated.
No longer needed, SimpleTicket now accepts dummy managers

All Implemented Interfaces: ITicketManager<T>

### Methods
- `public void add(SimpleTicket<T> ticket)` (deprecated)
  Deprecated.
- `public void remove(SimpleTicket<T> ticket)` (deprecated)
  Deprecated.

## SimpleTicket

*class* `net.minecraftforge.common.ticket.SimpleTicket`

Common class for a simple ticket based system.

### Fields
- `protected boolean isValid`

### Methods
- `@Deprecated public final void setBackend(ITicketManager<T> ticketManager)` (deprecated)
  Deprecated.
- `@SafeVarargs public final void setManager(ITicketManager<T> masterManager,  ITicketManager<T>... dummyManagers)`
  Internal method that sets the collection from the managing system.
  
   Should not be called if you just want to register a ticket to a system like the FarmlandWaterManager
- `public boolean isValid()`
  Checks if your ticket is still registered in the system.
- `public void invalidate()`
  Removes the ticket from the managing system.
   After this call, any calls to isValid() should return false unless it is registered again using validate()
- `public boolean unload(ITicketManager<T> unloadingManager)`
  Called by the managing system when a ticket wishes to unload all of it's tickets, e.g. on chunk unload
  
  The ticket must not remove itself from the manager that is calling the unload!
   The ticket must ensure that it removes itself from all of it's dummies when returning true
  - param: unloadingManager - The manager that is unloading this ticket
- `public void validate()`
  Re-adds your ticket to the system.
- `public abstract boolean matches(T toMatch)`
- `protected final void forEachManager(java.util.function.Consumer<ITicketManager<T>> consumer)`
- `protected final ITicketManager<T> getMasterManager()`
- `protected final ITicketManager<T>[] getDummyManagers()`
