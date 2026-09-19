# net.minecraftforge.server.permission.handler

- [DefaultPermissionHandler](#defaultpermissionhandler)
- [IPermissionHandler](#ipermissionhandler)
- [IPermissionHandlerFactory](#ipermissionhandlerfactory)
## DefaultPermissionHandler

*class* `net.minecraftforge.server.permission.handler.DefaultPermissionHandler`

### Fields
- `public static final ResourceLocation IDENTIFIER`
- `private final Set<PermissionNode<?>> registeredNodes`
- `private Set<PermissionNode<?>> immutableRegisteredNodes`

### Methods
- `public ResourceLocation getIdentifier()`
  Description copied from interface: IPermissionHandler
  Returns an identifier for the PermissionHandler.
  - returns: an identifier for the PermissionHandler
- `public Set<PermissionNode<?>> getRegisteredNodes()`
  Description copied from interface: IPermissionHandler
  Returns an unmodifiable view of the collection of registered permission nodes.
  - returns: an unmodifiable view of the collection of registered permission nodes
- `public <T> T getPermission(ServerPlayer player,  PermissionNode<T> node,  PermissionDynamicContext<?>... context)`
  Description copied from interface: IPermissionHandler
  Mods must use PermissionAPI.getPermission(ServerPlayer, PermissionNode, PermissionDynamicContext[])
  
   Queries a player's permission for a given node and contexts
   Warning: PermissionNodes must be registered using the
   PermissionGatherEvent.Nodes event before querying.
  - param: player - player for which you want to check permissions
  - param: node - the PermissionNode for which you want to query
  - param: context - optional array of PermissionDynamicContext, single entries will be ignored if they weren't
 registered to the node
  - returns: a value of type <T>, that the combination of Player and PermissionNode map to.
- `public <T> T getOfflinePermission(UUID player,  PermissionNode<T> node,  PermissionDynamicContext<?>... context)`
  Description copied from interface: IPermissionHandler
  See IPermissionHandler.getPermission(ServerPlayer, PermissionNode, PermissionDynamicContext[])
  - param: player - offline player for which you want to check permissions
  - param: node - the PermissionNode for which you want to query
  - param: context - optional array of PermissionDynamicContext, single entries will be ignored if they weren't
 registered to the node
  - returns: a value of type <T>, that the combination of Player and PermissionNode map to.

## IPermissionHandler

*interface* `net.minecraftforge.server.permission.handler.IPermissionHandler`

This is the Heart of the PermissionAPI, it manages PermissionNodes
 as well as it handles all permission queries.

 Note: You do not need to implement a PermissionHandler to query for permissions.

### Methods
- `ResourceLocation getIdentifier()`
  Returns an identifier for the PermissionHandler.
  - returns: an identifier for the PermissionHandler
- `Set<PermissionNode<?>> getRegisteredNodes()`
  Returns an unmodifiable view of the collection of registered permission nodes.
  - returns: an unmodifiable view of the collection of registered permission nodes
- `<T> T getPermission(ServerPlayer player,  PermissionNode<T> node,  PermissionDynamicContext<?>... context)`
  Mods must use PermissionAPI.getPermission(ServerPlayer, PermissionNode, PermissionDynamicContext[])
  
   Queries a player's permission for a given node and contexts
   Warning: PermissionNodes must be registered using the
   PermissionGatherEvent.Nodes event before querying.
  - param: player - player for which you want to check permissions
  - param: node - the PermissionNode for which you want to query
  - param: context - optional array of PermissionDynamicContext, single entries will be ignored if they weren't
 registered to the node
  - returns: a value of type <T>, that the combination of Player and PermissionNode map to.
- `<T> T getOfflinePermission(UUID player,  PermissionNode<T> node,  PermissionDynamicContext<?>... context)`
  See getPermission(ServerPlayer, PermissionNode, PermissionDynamicContext[])
  - param: player - offline player for which you want to check permissions
  - param: node - the PermissionNode for which you want to query
  - param: context - optional array of PermissionDynamicContext, single entries will be ignored if they weren't
 registered to the node
  - returns: a value of type <T>, that the combination of Player and PermissionNode map to.

## IPermissionHandlerFactory

*interface* `net.minecraftforge.server.permission.handler.IPermissionHandlerFactory`

### Methods
- `IPermissionHandler create(Collection<PermissionNode<?>> permissions)`
