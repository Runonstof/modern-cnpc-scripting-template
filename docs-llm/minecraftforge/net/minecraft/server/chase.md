# net.minecraft.server.chase

- [ChaseClient](#chaseclient)
- [ChaseClient.TeleportTarget](#chaseclient.teleporttarget)
- [ChaseServer](#chaseserver)
- [ChaseServer.PlayerPosition](#chaseserver.playerposition)
## ChaseClient

*class* `net.minecraft.server.chase.ChaseClient`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int RECONNECT_INTERVAL_SECONDS` (= 5)
- `private final String serverHost`
- `private final int serverPort`
- `private final MinecraftServer server`
- `private volatile boolean wantsToRun`
- `@Nullable private Socket socket`
- `@Nullable private Thread thread`

### Methods
- `public void start()`
- `public void stop()`
- `public void run()`
- `private void handleMessage(String p_195995_)`
- `private void handleTeleport(Scanner p_195997_)`
- `private Optional<ChaseClient.TeleportTarget> parseTarget(Scanner p_196004_)`
- `private void executeCommand(String p_196002_)`

## ChaseClient.TeleportTarget

*record* `net.minecraft.server.chase.ChaseClient.TeleportTarget`

Enclosing class: ChaseClient

### Fields
- `private final ResourceKey<Level> level`
  The field for the level record component.
- `private final Vec3 pos`
  The field for the pos record component.
- `private final Vec2 rot`
  The field for the rot record component.

### Methods
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
- `public ResourceKey<Level> level()`
  Returns the value of the level record component.
  - returns: the value of the level record component
- `public Vec3 pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component
- `public Vec2 rot()`
  Returns the value of the rot record component.
  - returns: the value of the rot record component

## ChaseServer

*class* `net.minecraft.server.chase.ChaseServer`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final String serverBindAddress`
- `private final int serverPort`
- `private final PlayerList playerList`
- `private final int broadcastIntervalMs`
- `private volatile boolean wantsToRun`
- `@Nullable private ServerSocket serverSocket`
- `private final CopyOnWriteArrayList<Socket> clientSockets`

### Methods
- `public void start()  throws IOException`
  - throws: IOException
- `private void runSender()`
- `public void stop()`
- `private void runAcceptor()`
- `@Nullable private ChaseServer.PlayerPosition getPlayerPosition()`

## ChaseServer.PlayerPosition

*record* `net.minecraft.server.chase.ChaseServer.PlayerPosition`

Enclosing class: ChaseServer

### Fields
- `private final String dimensionName`
  The field for the dimensionName record component.
- `private final double x`
  The field for the x record component.
- `private final double y`
  The field for the y record component.
- `private final double z`
  The field for the z record component.
- `private final float yRot`
  The field for the yRot record component.
- `private final float xRot`
  The field for the xRot record component.

### Methods
- `String format()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public String dimensionName()`
  Returns the value of the dimensionName record component.
  - returns: the value of the dimensionName record component
- `public double x()`
  Returns the value of the x record component.
  - returns: the value of the x record component
- `public double y()`
  Returns the value of the y record component.
  - returns: the value of the y record component
- `public double z()`
  Returns the value of the z record component.
  - returns: the value of the z record component
- `public float yRot()`
  Returns the value of the yRot record component.
  - returns: the value of the yRot record component
- `public float xRot()`
  Returns the value of the xRot record component.
  - returns: the value of the xRot record component
