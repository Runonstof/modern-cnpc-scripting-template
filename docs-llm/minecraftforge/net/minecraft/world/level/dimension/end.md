# net.minecraft.world.level.dimension.end

- [Class DragonRespawnAnimation](#class-dragonrespawnanimation)
- [EndDragonFight](#enddragonfight)
- [EndDragonFight.Data](#enddragonfight.data)
## Class DragonRespawnAnimation

*enum* `net.minecraft.world.level.dimension.end.Class DragonRespawnAnimation`

### Methods
- `public static DragonRespawnAnimation[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static DragonRespawnAnimation valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public abstract void tick(ServerLevel p_64005_,  EndDragonFight p_64006_,  List<EndCrystal> p_64007_,  int p_64008_,  BlockPos p_64009_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## EndDragonFight

*class* `net.minecraft.world.level.dimension.end.EndDragonFight`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int MAX_TICKS_BEFORE_DRAGON_RESPAWN` (= 1200)
- `private static final int TIME_BETWEEN_CRYSTAL_SCANS` (= 100)
- `public static final int TIME_BETWEEN_PLAYER_SCANS` (= 20)
- `private static final int ARENA_SIZE_CHUNKS` (= 8)
- `public static final int ARENA_TICKET_LEVEL` (= 9)
- `private static final int GATEWAY_COUNT` (= 20)
- `private static final int GATEWAY_DISTANCE` (= 96)
- `public static final int DRAGON_SPAWN_Y` (= 128)
- `private final Predicate<Entity> validPlayer`
- `private final ServerBossEvent dragonEvent`
- `private final ServerLevel level`
- `private final BlockPos origin`
- `private final it.unimi.dsi.fastutil.objects.ObjectArrayList<Integer> gateways`
- `private final BlockPattern exitPortalPattern`
- `private int ticksSinceDragonSeen`
- `private int crystalsAlive`
- `private int ticksSinceCrystalsScanned`
- `private int ticksSinceLastPlayerScan`
- `private boolean dragonKilled`
- `private boolean previouslyKilled`
- `private boolean skipArenaLoadedCheck`
- `@Nullable private UUID dragonUUID`
- `private boolean needsStateScanning`
- `@Nullable private BlockPos portalLocation`
- `@Nullable private DragonRespawnAnimation respawnStage`
- `private int respawnTime`
- `@Nullable private List<EndCrystal> respawnCrystals`

### Methods
- `@Deprecated public void skipArenaLoadedCheck()` (deprecated)
- `public EndDragonFight.Data saveData()`
- `public void tick()`
- `private void scanState()`
- `private void findOrCreateDragon()`
- `protected void setRespawnStage(DragonRespawnAnimation p_64088_)`
- `private boolean hasActiveExitPortal()`
- `@Nullable private BlockPattern.BlockPatternMatch findExitPortal()`
- `private boolean isArenaLoaded()`
- `private void updatePlayers()`
- `private void updateCrystalCount()`
- `public void setDragonKilled(EnderDragon p_64086_)`
- `@Deprecated public void removeAllGateways()` (deprecated)
- `private void spawnNewGateway()`
- `private void spawnNewGateway(BlockPos p_64090_)`
- `private void spawnExitPortal(boolean p_64094_)`
- `@Nullable private EnderDragon createNewDragon()`
- `public void updateDragon(EnderDragon p_64097_)`
- `public int getCrystalsAlive()`
- `public void onCrystalDestroyed(EndCrystal p_64083_,  DamageSource p_64084_)`
- `public boolean hasPreviouslyKilledDragon()`
- `public void tryRespawn()`
- `private void respawnDragon(List<EndCrystal> p_64092_)`
- `public void resetSpikeCrystals()`
- `public void addPlayer(ServerPlayer player)`
- `public void removePlayer(ServerPlayer player)`
- `@Nullable public UUID getDragonUUID()`

## EndDragonFight.Data

*record* `net.minecraft.world.level.dimension.end.EndDragonFight.Data`

Enclosing class: EndDragonFight

### Fields
- `private final boolean needsStateScanning`
  The field for the needsStateScanning record component.
- `private final boolean dragonKilled`
  The field for the dragonKilled record component.
- `private final boolean previouslyKilled`
  The field for the previouslyKilled record component.
- `private final boolean isRespawning`
  The field for the isRespawning record component.
- `private final Optional<UUID> dragonUUID`
  The field for the dragonUUID record component.
- `private final Optional<BlockPos> exitPortalLocation`
  The field for the exitPortalLocation record component.
- `private final Optional<List<Integer>> gateways`
  The field for the gateways record component.
- `public static final com.mojang.serialization.Codec<EndDragonFight.Data> CODEC`
- `public static final EndDragonFight.Data DEFAULT`

### Methods
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
- `public boolean needsStateScanning()`
  Returns the value of the needsStateScanning record component.
  - returns: the value of the needsStateScanning record component
- `public boolean dragonKilled()`
  Returns the value of the dragonKilled record component.
  - returns: the value of the dragonKilled record component
- `public boolean previouslyKilled()`
  Returns the value of the previouslyKilled record component.
  - returns: the value of the previouslyKilled record component
- `public boolean isRespawning()`
  Returns the value of the isRespawning record component.
  - returns: the value of the isRespawning record component
- `public Optional<UUID> dragonUUID()`
  Returns the value of the dragonUUID record component.
  - returns: the value of the dragonUUID record component
- `public Optional<BlockPos> exitPortalLocation()`
  Returns the value of the exitPortalLocation record component.
  - returns: the value of the exitPortalLocation record component
- `public Optional<List<Integer>> gateways()`
  Returns the value of the gateways record component.
  - returns: the value of the gateways record component
