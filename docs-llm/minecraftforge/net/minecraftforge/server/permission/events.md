# net.minecraftforge.server.permission.events

- [PermissionGatherEvent](#permissiongatherevent)
- [PermissionGatherEvent.Handler](#permissiongatherevent.handler)
- [PermissionGatherEvent.Nodes](#permissiongatherevent.nodes)
## PermissionGatherEvent

*class* `net.minecraftforge.server.permission.events.PermissionGatherEvent`

Fired to gather information for the permissions API, such as the IPermissionHandler and PermissionNodes.

 PermissionGatherEvent.Handler allows to set a new PermissionHandler

 PermissionGatherEvent.Nodes allows you to register new PermissionNodes

 Note: All PermissionNodes that you want to use, must be registered!

## PermissionGatherEvent.Handler

*class* `net.minecraftforge.server.permission.events.PermissionGatherEvent.Handler`

Used to register a new PermissionHandler, a server config value exists to choose which one to use.
 Note: Create a new instance when registering a PermissionHandler.
 If you cache it, make sure that your PermissionHandler is actually used after this event.

Enclosing class: PermissionGatherEvent

### Fields
- `private Map<ResourceLocation,IPermissionHandlerFactory> availableHandlers`

### Methods
- `public Map<ResourceLocation,IPermissionHandlerFactory> getAvailablePermissionHandlerFactories()`
- `public void addPermissionHandler(ResourceLocation identifier,  IPermissionHandlerFactory handlerFactory)`

## PermissionGatherEvent.Nodes

*class* `net.minecraftforge.server.permission.events.PermissionGatherEvent.Nodes`

Used to register your PermissionNodes, every node that you want to use, must be registered!

Enclosing class: PermissionGatherEvent

### Fields
- `private final Set<PermissionNode<?>> nodes`

### Methods
- `public Collection<PermissionNode<?>> getNodes()`
- `public void addNodes(PermissionNode<?>... nodes)`
- `public void addNodes(Iterable<PermissionNode<?>> nodes)`
