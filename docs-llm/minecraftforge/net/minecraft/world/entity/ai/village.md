# net.minecraft.world.entity.ai.village

- [Class VillageSiege.State](#class-villagesiege.state)
- [ReputationEventType](#reputationeventtype)
- [VillageSiege](#villagesiege)
## Class VillageSiege.State

*enum* `net.minecraft.world.entity.ai.village.Class VillageSiege.State`

Enclosing class: VillageSiege

### Methods
- `public static VillageSiege.State[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static VillageSiege.State valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ReputationEventType

*interface* `net.minecraft.world.entity.ai.village.ReputationEventType`

### Fields
- `static final ReputationEventType ZOMBIE_VILLAGER_CURED`
- `static final ReputationEventType GOLEM_KILLED`
- `static final ReputationEventType VILLAGER_HURT`
- `static final ReputationEventType VILLAGER_KILLED`
- `static final ReputationEventType TRADE`

### Methods
- `static ReputationEventType register(String p_26992_)`

## VillageSiege

*class* `net.minecraft.world.entity.ai.village.VillageSiege`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private boolean hasSetupSiege`
- `private VillageSiege.State siegeState`
- `private int zombiesToSpawn`
- `private int nextSpawnTime`
- `private int spawnX`
- `private int spawnY`
- `private int spawnZ`

### Methods
- `public int tick(ServerLevel p_27013_,  boolean p_27014_,  boolean p_27015_)`
- `private boolean tryToSetupSiege(ServerLevel p_27008_)`
- `private void trySpawn(ServerLevel p_27017_)`
- `@Nullable private Vec3 findRandomSpawnPos(ServerLevel p_27010_,  BlockPos p_27011_)`
