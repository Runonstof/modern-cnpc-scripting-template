# net.minecraftforge.event.server

- [ServerAboutToStartEvent](#serverabouttostartevent)
- [ServerLifecycleEvent](#serverlifecycleevent)
- [ServerStartedEvent](#serverstartedevent)
- [ServerStartingEvent](#serverstartingevent)
- [ServerStoppedEvent](#serverstoppedevent)
- [ServerStoppingEvent](#serverstoppingevent)
## ServerAboutToStartEvent

*class* `net.minecraftforge.event.server.ServerAboutToStartEvent`

Called before the server begins loading anything. Called after InterModProcessEvent on the dedicated
 server, and after the player has hit "Play Selected World" in the client. Called before ServerStartingEvent.

 You can obtain a reference to the server with this event.

### Inherited fields
- from `net.minecraftforge.event.server.ServerLifecycleEvent`: `server`

### Inherited methods
- from `net.minecraftforge.event.server.ServerLifecycleEvent`: `getServer`

## ServerLifecycleEvent

*class* `net.minecraftforge.event.server.ServerLifecycleEvent`

### Fields
- `protected final MinecraftServer server`

### Methods
- `public MinecraftServer getServer()`

## ServerStartedEvent

*class* `net.minecraftforge.event.server.ServerStartedEvent`

Called after ServerStartingEvent when the server is available and ready to play.

### Inherited fields
- from `net.minecraftforge.event.server.ServerLifecycleEvent`: `server`

### Inherited methods
- from `net.minecraftforge.event.server.ServerLifecycleEvent`: `getServer`

## ServerStartingEvent

*class* `net.minecraftforge.event.server.ServerStartingEvent`

Called after ServerAboutToStartEvent and before ServerStartedEvent.
 This event allows for customizations of the server.

 If you need to add commands use RegisterCommandsEvent.

### Inherited fields
- from `net.minecraftforge.event.server.ServerLifecycleEvent`: `server`

### Inherited methods
- from `net.minecraftforge.event.server.ServerLifecycleEvent`: `getServer`

## ServerStoppedEvent

*class* `net.minecraftforge.event.server.ServerStoppedEvent`

Called after ServerStoppingEvent when the server has completely shut down.
 Called immediately before shutting down, on the dedicated server, and before returning
 to the main menu on the client.

### Inherited fields
- from `net.minecraftforge.event.server.ServerLifecycleEvent`: `server`

### Inherited methods
- from `net.minecraftforge.event.server.ServerLifecycleEvent`: `getServer`

## ServerStoppingEvent

*class* `net.minecraftforge.event.server.ServerStoppingEvent`

Called when the server begins an orderly shutdown, before ServerStoppedEvent.

### Inherited fields
- from `net.minecraftforge.event.server.ServerLifecycleEvent`: `server`

### Inherited methods
- from `net.minecraftforge.event.server.ServerLifecycleEvent`: `getServer`
