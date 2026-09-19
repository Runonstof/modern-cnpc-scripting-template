# net.minecraftforge.server.permission.nodes

- [PermissionDynamicContext](#permissiondynamiccontext)
- [PermissionDynamicContextKey](#permissiondynamiccontextkey)
- [PermissionNode](#permissionnode)
- [PermissionNode.PermissionResolver](#permissionnode.permissionresolver)
- [PermissionType](#permissiontype)
- [PermissionTypes](#permissiontypes)
## PermissionDynamicContext

*class* `net.minecraftforge.server.permission.nodes.PermissionDynamicContext`

Pair of a PermissionDynamicContextKey and a value of the corresponding type.
 Use PermissionDynamicContextKey.createContext(Object) )} for constructing.

 Note: While the DynamicContext behaves similar to BlockStates, it does not oblige to the same limitations.
 There is no string representation that you have to follow, nor is there a limit on how many unique value a DynamicContext may have

### Fields
- `private PermissionDynamicContextKey<T> dynamic`
- `private T value`

### Methods
- `public PermissionDynamicContextKey<T> getDynamic()`
- `public T getValue()`
- `public String getSerializedValue()`
- `public boolean equals(Object o)`
- `public int hashCode()`

## PermissionDynamicContextKey

*record* `net.minecraftforge.server.permission.nodes.PermissionDynamicContextKey`

Represents a key that can be used to build a PermissionDynamicContext.

 Keys, along with their associated values, can be used to provide additional context for a permission handler
 in determining whether to grant permission for an actor and a specific node.

 As an example usage, a dimension context key could be used inside a building permission
 check to ensure that the actor can build given those constraints.

### Fields
- `private final Class<T> typeToken`
  The field for the typeToken record component.
- `private final String name`
  The field for the name record component.
- `private final Function<T,String> serializer`
  The field for the serializer record component.

### Methods
- `public PermissionDynamicContext<T> createContext(T value)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public Class<T> typeToken()`
  Returns the value of the typeToken record component.
  - returns: the value of the typeToken record component
- `public String name()`
  Returns the value of the name record component.
  - returns: the value of the name record component
- `public Function<T,String> serializer()`
  Returns the value of the serializer record component.
  - returns: the value of the serializer record component

## PermissionNode

*class* `net.minecraftforge.server.permission.nodes.PermissionNode`

Represents the basic unit at the heart of the permission system.

 A permission indicates the ability for an actor to perform an action,
 in its most general sense. In the permission system, all permissions are encoded as instances of this class,
 optionally integrated by a PermissionDynamicContext.

 A node is uniquely identified by its `nodeName`,
 which is a dot-separated string providing meaning to the node itself.
 The suggested structure of the name is `modid.name`, where `modid` is the ID of the owner of the node.
 This API does not require any implicit hierarchy,
 so `modid.name` is not considered a parent of `modid.name.sub`. Such decisions are left to the IPermissionHandler.

 Each node also has an associated PermissionType, detailing its exact type,
 along with a PermissionNode.PermissionResolver that is used to obtain the default value of the permission.
 More information can be found on their documentation.

 A node can also be bound to additional PermissionDynamicContextKeys,
 which are used when querying the availability of the permission.
 There are no restrictions on their amount. It is also not mandatory to provide a value for all dynamics in a permission query.
 See the above link for more information.

 Each node should be registered via the PermissionGatherEvent.Nodes and stored statically in a field.
 That instance should then be reused every-time a permission check needs to be performed via PermissionAPI.getPermission(ServerPlayer, PermissionNode, PermissionDynamicContext[]).

### Fields
- `private final String nodeName`
- `private final PermissionType<T> type`
- `private final PermissionNode.PermissionResolver<T> defaultResolver`
- `private final PermissionDynamicContextKey<?>[] dynamics`
- `@Nullable private @Nullable Component readableName`
- `@Nullable private @Nullable Component description`

### Methods
- `public PermissionNode setInformation(@NotNull  @NotNull Component readableName,  @NotNull  @NotNull Component description)`
  Allows you to set a human-readable name and description for your Permission.
  
   Note: Even though not used by Default, PermissionHandlers may display this information in game,
   or provide it to the user by other means.
  
   You may use translatable components, but you'll
   need 2 language files. One inside the data directory for the server and one inside assets for the client.
  - param: readableName - an easier to read name for the PermissionNode,
 when using TranslatableComponent, key should be of format "permission.name.<nodename>"
  - param: description - description for the PermissionNode
 when using TranslatableComponent, key should be of format "permission.desc.<nodename>"
  - returns: itself with the new information set.
- `public String getNodeName()`
- `public PermissionType<T> getType()`
- `public PermissionDynamicContextKey<?>[] getDynamics()`
- `public PermissionNode.PermissionResolver<T> getDefaultResolver()`
- `@Nullable public @Nullable Component getReadableName()`
- `@Nullable public @Nullable Component getDescription()`
- `public boolean equals(Object o)`
- `public int hashCode()`

## PermissionNode.PermissionResolver

*interface* `net.minecraftforge.server.permission.nodes.PermissionNode.PermissionResolver`

Utility Interface used for resolving the default value of PermissionNodes

Enclosing class: PermissionNode<T>

### Methods
- `T resolve(@Nullable  @Nullable ServerPlayer player,  UUID playerUUID,  PermissionDynamicContext<?>... context)`
  - param: player - an online player
  - param: playerUUID - if the player is null, this UUID belongs to an offline player,
 otherwise it must match the UUID of the passed in player.
  - param: context - may contain DynamicContext if it was provided
  - returns: according Permission Value

## PermissionType

*class* `net.minecraftforge.server.permission.nodes.PermissionType`

Type of a Permission, use the existing Types in PermissionTypes

### Fields
- `private final Class<T> typeToken`
- `private final String typeName`

### Methods
- `public Class<T> typeToken()`
- `public String typeName()`
- `public boolean equals(Object obj)`
- `public int hashCode()`
- `public String toString()`

## PermissionTypes

*class* `net.minecraftforge.server.permission.nodes.PermissionTypes`

Default PermissionTypes, if you need additional ones, please PR it.

### Fields
- `public static final PermissionType<Boolean> BOOLEAN`
- `public static final PermissionType<Integer> INTEGER`
- `public static final PermissionType<String> STRING`
- `public static final PermissionType<Component> COMPONENT`

### Methods
- `@Nullable public static @Nullable PermissionType<?> getTypeByName(String name)`
