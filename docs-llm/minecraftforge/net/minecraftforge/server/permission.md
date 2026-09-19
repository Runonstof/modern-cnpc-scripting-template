# net.minecraftforge.server.permission

- [PermissionAPI](#permissionapi)
## PermissionAPI

*class* `net.minecraftforge.server.permission.PermissionAPI`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static IPermissionHandler activeHandler`

### Methods
- `public static Collection<PermissionNode<?>> getRegisteredNodes()`
- `@Nullable public static @Nullable ResourceLocation getActivePermissionHandler()`
  - returns: the Identifier of the currently active permission handler
- `public static <T> T getPermission(ServerPlayer player,  PermissionNode<T> node,  PermissionDynamicContext<?>... context)`
  Queries a player's permission for a given node and contexts
   Warning: PermissionNodes must be registered using the
   PermissionGatherEvent.Nodes event before querying.
  - param: player - player for which you want to check permissions
  - param: node - the PermissionNode for which you want to query
  - param: context - optional array of PermissionDynamicContext, single entries will be ignored if they weren't
 registered to the node
  - returns: a value of type <T>, that the combination of Player and PermissionNode map to, defaults to the
 PermissionNodes default handler.
  - throws: UnregisteredPermissionException - when the PermissionNode wasn't registered properly
- `public static <T> T getOfflinePermission(UUID player,  PermissionNode<T> node,  PermissionDynamicContext<?>... context)`
  See getPermission(ServerPlayer, PermissionNode, PermissionDynamicContext[])
  - param: player - offline player for which you want to check permissions
  - param: node - the PermissionNode for which you want to query
  - param: context - optional array of PermissionDynamicContext, single entries will be ignored if they weren't
 registered to the node
  - returns: a value of type <T>, that the combination of Player and PermissionNode map to, defaults to the
 PermissionNodes default handler.
  - throws: UnregisteredPermissionException - when the PermissionNode wasn't registered properly
- `public static void initializePermissionAPI()`
  Helper method for internal use only!
   Initializes the active permission handler based on the users config.
