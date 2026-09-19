# net.minecraftforge.server.permission

- [DefaultPermissionHandler](#defaultpermissionhandler)
- [DefaultPermissionLevel](#defaultpermissionlevel)
- [IPermissionHandler](#ipermissionhandler)
- [PermissionAPI](#permissionapi)
## DefaultPermissionHandler

*enum* `net.minecraftforge.server.permission.DefaultPermissionHandler`

Default implementation of PermissionAPI.
 hasPermission(GameProfile, String, IContext) is based on DefaultPermissionLevel

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<DefaultPermissionHandler>, IPermissionHandler

### Fields
- `public static final DefaultPermissionHandler INSTANCE`

### Methods
- `public static DefaultPermissionHandler[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (DefaultPermissionHandler c : DefaultPermissionHandler.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static DefaultPermissionHandler valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public void registerNode(java.lang.String node,  DefaultPermissionLevel level,  java.lang.String desc)`
  Description copied from interface: IPermissionHandler
  Use PermissionAPI.registerNode(String, DefaultPermissionLevel, String)
- `public java.util.Collection<java.lang.String> getRegisteredNodes()`
  - returns: Immutable collection of all registered nodes
- `public boolean hasPermission(GameProfile profile,  java.lang.String node,  IContext context)`
  Description copied from interface: IPermissionHandler
  Use PermissionAPI.hasPermission(GameProfile, String, IContext)
- `public java.lang.String getNodeDescription(java.lang.String node)`
  - param: node - Permission node
  - returns: Description of the node. "" in case this node doesn't have a decription
- `public DefaultPermissionLevel getDefaultPermissionLevel(java.lang.String node)`
  - returns: The default permission level of a node. If the permission isn't registred, it will return NONE

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## DefaultPermissionLevel

*enum* `net.minecraftforge.server.permission.DefaultPermissionLevel`

LevelPlayerOP

 ALLtruetrue
 OPfalsetrue
 NONEfalsefalse

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<DefaultPermissionLevel>

### Fields
- `public static final DefaultPermissionLevel ALL`
- `public static final DefaultPermissionLevel OP`
- `public static final DefaultPermissionLevel NONE`

### Methods
- `public static DefaultPermissionLevel[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (DefaultPermissionLevel c : DefaultPermissionLevel.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static DefaultPermissionLevel valueOf(java.lang.String name)`
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

## IPermissionHandler

*interface* `net.minecraftforge.server.permission.IPermissionHandler`

### Methods
- `void registerNode(java.lang.String node,  DefaultPermissionLevel level,  java.lang.String desc)`
  Use PermissionAPI.registerNode(String, DefaultPermissionLevel, String)
- `java.util.Collection<java.lang.String> getRegisteredNodes()`
  - returns: Immutable collection of all registered nodes
- `boolean hasPermission(GameProfile profile,  java.lang.String node,  IContext context)`
  Use PermissionAPI.hasPermission(GameProfile, String, IContext)
- `java.lang.String getNodeDescription(java.lang.String node)`
  - param: node - Permission node
  - returns: Description of the node. "" in case this node doesn't have a decription

## PermissionAPI

*class* `net.minecraftforge.server.permission.PermissionAPI`

### Methods
- `public static void setPermissionHandler(IPermissionHandler handler)`
  Only use this in PreInit state!
- `public static IPermissionHandler getPermissionHandler()`
- `public static java.lang.String registerNode(java.lang.String node,  DefaultPermissionLevel level,  java.lang.String desc)`
  Only use this after PreInit state!
  - param: node - Permission node, best if it's lowercase and contains '.' (e.g. "modid.subgroup.permission_id")
  - param: level - Default permission level for this node. If not isn't registered, it's level is going to be 'NONE'
  - param: desc - Optional description of the node
- `public static boolean hasPermission(GameProfile profile,  java.lang.String node,  IContext context)`
  - param: profile - GameProfile of the player who is requesting permission. The player doesn't have to be online
  - param: node - Permission node. See registerNode(String, DefaultPermissionLevel, String)
  - param: context - Context for this permission. Highly recommended to not be null. See IContext
  - returns: true, if player has permission, false if he does not.
- `public static boolean hasPermission(EntityPlayer player,  java.lang.String node)`
  Shortcut method using EntityPlayer and creating PlayerContext
