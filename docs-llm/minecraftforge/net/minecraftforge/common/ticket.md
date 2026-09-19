# net.minecraftforge.common.ticket

- [AABBTicket](#aabbticket)
- [ChunkTicketManager](#chunkticketmanager)
- [ITicketGetter](#iticketgetter)
- [ITicketManager](#iticketmanager)
- [SimpleTicket](#simpleticket)
## AABBTicket

*class* `net.minecraftforge.common.ticket.AABBTicket`

### Fields
- `@NotNull public final @NotNull AABB axisAlignedBB`

### Inherited fields
- from `net.minecraftforge.common.ticket.SimpleTicket`: `isValid`

### Methods
- `public boolean matches(Vec3 toMatch)`

### Inherited methods
- from `net.minecraftforge.common.ticket.SimpleTicket`: `forEachManager`, `getDummyManagers`, `getMasterManager`, `invalidate`, `isValid`, `setManager`, `unload`, `validate`

## ChunkTicketManager

*class* `net.minecraftforge.common.ticket.ChunkTicketManager`

### Fields
- `private final Set<SimpleTicket<T>> tickets`
- `public final ChunkPos pos`

### Methods
- `public void add(SimpleTicket<T> ticket)`
- `public void remove(SimpleTicket<T> ticket)`
- `public Collection<SimpleTicket<T>> getTickets()`

## ITicketGetter

*interface* `net.minecraftforge.common.ticket.ITicketGetter`

All Superinterfaces: ITicketManager<T>

### Methods
- `Collection<SimpleTicket<T>> getTickets()`

### Inherited methods
- from `net.minecraftforge.common.ticket.ITicketManager`: `add`, `remove`

## ITicketManager

*interface* `net.minecraftforge.common.ticket.ITicketManager`

### Methods
- `void add(SimpleTicket<T> ticket)`
- `void remove(SimpleTicket<T> ticket)`

## SimpleTicket

*class* `net.minecraftforge.common.ticket.SimpleTicket`

Common class for a simple ticket based system.

### Fields
- `@Nullable private @Nullable ITicketManager<T> masterManager`
- `private ITicketManager<T>[] dummyManagers`
- `protected boolean isValid`

### Methods
- `@SafeVarargs public final void setManager(@NotNull  @NotNull ITicketManager<T> masterManager,  @NotNull  @NotNull ITicketManager<T>... dummyManagers)`
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
  - returns: true if this ticket can be removed, false if not.
- `public void validate()`
  Re-adds your ticket to the system.
- `public abstract boolean matches(T toMatch)`
- `protected final void forEachManager(Consumer<ITicketManager<T>> consumer)`
- `protected final ITicketManager<T> getMasterManager()`
- `protected final ITicketManager<T>[] getDummyManagers()`
