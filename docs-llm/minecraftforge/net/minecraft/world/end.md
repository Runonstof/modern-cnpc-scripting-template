# net.minecraft.world.end

- [DragonFightManager](#dragonfightmanager)
- [DragonSpawnManager](#dragonspawnmanager)
## DragonFightManager

*class* `net.minecraft.world.end.DragonFightManager`

### Methods
- `public NBTTagCompound getCompound()`
- `public void tick()`
- `protected void setRespawnState(DragonSpawnManager state)`
- `public void processDragonDeath(EntityDragon dragon)`
- `public void dragonUpdate(EntityDragon dragonIn)`
- `public int getNumAliveCrystals()`
- `public void onCrystalDestroyed(EntityEnderCrystal crystal,  DamageSource dmgSrc)`
- `public boolean hasPreviouslyKilledDragon()`
- `public void respawnDragon()`
- `public void resetSpikeCrystals()`
- `public void addPlayer(EntityPlayerMP player)`
- `public void removePlayer(EntityPlayerMP player)`

## DragonSpawnManager

*enum* `net.minecraft.world.end.DragonSpawnManager`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<DragonSpawnManager>

### Fields
- `public static final DragonSpawnManager START`
- `public static final DragonSpawnManager PREPARING_TO_SUMMON_PILLARS`
- `public static final DragonSpawnManager SUMMONING_PILLARS`
- `public static final DragonSpawnManager SUMMONING_DRAGON`
- `public static final DragonSpawnManager END`

### Methods
- `public static DragonSpawnManager[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (DragonSpawnManager c : DragonSpawnManager.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static DragonSpawnManager valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public abstract void process(WorldServer worldIn,  DragonFightManager manager,  java.util.List<EntityEnderCrystal> crystals,  int ticks,  BlockPos pos)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
