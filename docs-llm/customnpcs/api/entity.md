# noppes.npcs.api.entity

- [IAnimal](#ianimal)
- [IArrow](#iarrow)
- [ICustomNpc](#icustomnpc)
- [IEntity](#ientity)
- [IEntityItem](#ientityitem)
- [IEntityLiving](#ientityliving)
- [IEntityLivingBase](#ientitylivingbase)
- [IMonster](#imonster)
- [IPixelmon](#ipixelmon)
- [IPlayer](#iplayer)
- [IProjectile](#iprojectile)
- [IThrowable](#ithrowable)
- [IVillager](#ivillager)
## IAnimal

*interface* `noppes.npcs.api.entity.IAnimal`

All Superinterfaces: IEntity<T>, IEntityLiving<T>, IEntityLivingBase<T>

### Inherited methods
- from `noppes.npcs.api.entity.IEntity`: `addRider`, `addTag`, `clearRiders`, `damage`, `despawn`, `dropItem`, `extinguish`, `generateNewUUID`, `getAge`, `getAllRiders`, `getBlockX`, `getBlockY`, `getBlockZ`, `getEntityName`, `getEntityNbt`, `getEyeHeight`, `getHeight`, `getMotionX`, `getMotionY`, `getMotionZ`, `getMount`, `getName`, `getNbt`, `getPitch`, `getPos`, `getRiders`, `getRotation`, `getStoreddata`, `getTags`, `getTempdata`, `getType`, `getTypeName`, `getUUID`, `getWidth`, `getWorld`, `getX`, `getY`, `getZ`, `hasCustomName`, `hasTag`, `inFire`, `inLava`, `inWater`, `isAlive`, `isBurning`, `isSneaking`, `isSprinting`, `kill`, `knockback`, `playAnimation`, `rayTraceBlock`, `rayTraceEntities`, `removeTag`, `setBurning`, `setEntityNbt`, `setMotionX`, `setMotionY`, `setMotionZ`, `setMount`, `setName`, `setPitch`, `setPos`, `setPosition`, `setRotation`, `setX`, `setY`, `setZ`, `spawn`, `storeAsClone`, `typeOf`
- from `noppes.npcs.api.entity.IEntityLiving`: `clearNavigation`, `getMCEntity`, `getNavigationPath`, `isNavigating`, `jump`, `navigateTo`
- from `noppes.npcs.api.entity.IEntityLivingBase`: `addMark`, `addPotionEffect`, `canSeeEntity`, `clearPotionEffects`, `getArmor`, `getAttackTarget`, `getHealth`, `getLastAttacked`, `getLastAttackedTime`, `getMainhandItem`, `getMarks`, `getMaxHealth`, `getMoveForward`, `getMoveStrafing`, `getMoveVertical`, `getOffhandItem`, `getPotionEffect`, `isAttacking`, `isChild`, `removeMark`, `setArmor`, `setAttackTarget`, `setHealth`, `setMainhandItem`, `setMaxHealth`, `setMoveForward`, `setMoveStrafing`, `setMoveVertical`, `setOffhandItem`, `swingMainhand`, `swingOffhand`

## IArrow

*interface* `noppes.npcs.api.entity.IArrow`

All Superinterfaces: IEntity<T>

### Inherited methods
- from `noppes.npcs.api.entity.IEntity`: `addRider`, `addTag`, `clearRiders`, `damage`, `despawn`, `dropItem`, `extinguish`, `generateNewUUID`, `getAge`, `getAllRiders`, `getBlockX`, `getBlockY`, `getBlockZ`, `getEntityName`, `getEntityNbt`, `getEyeHeight`, `getHeight`, `getMCEntity`, `getMotionX`, `getMotionY`, `getMotionZ`, `getMount`, `getName`, `getNbt`, `getPitch`, `getPos`, `getRiders`, `getRotation`, `getStoreddata`, `getTags`, `getTempdata`, `getType`, `getTypeName`, `getUUID`, `getWidth`, `getWorld`, `getX`, `getY`, `getZ`, `hasCustomName`, `hasTag`, `inFire`, `inLava`, `inWater`, `isAlive`, `isBurning`, `isSneaking`, `isSprinting`, `kill`, `knockback`, `playAnimation`, `rayTraceBlock`, `rayTraceEntities`, `removeTag`, `setBurning`, `setEntityNbt`, `setMotionX`, `setMotionY`, `setMotionZ`, `setMount`, `setName`, `setPitch`, `setPos`, `setPosition`, `setRotation`, `setX`, `setY`, `setZ`, `spawn`, `storeAsClone`, `typeOf`

## ICustomNpc

*interface* `noppes.npcs.api.entity.ICustomNpc`

All Superinterfaces: IEntity<T>, IEntityLiving<T>, IEntityLivingBase<T>

### Methods
- `INPCDisplay getDisplay()`
- `INPCInventory getInventory()`
- `INPCStats getStats()`
- `INPCAi getAi()`
- `INPCAdvanced getAdvanced()`
- `IFaction getFaction()`
- `void setFaction​(int id)`
- `INPCRole getRole()`
- `INPCJob getJob()`
- `ITimers getTimers()`
- `int getHomeX()`
- `int getHomeY()`
- `int getHomeZ()`
- `IEntityLivingBase getOwner()`
  - returns: Incase the npc is a Follower or Companion it will return the one who its following. Also works for scene followers
- `void setHome​(int x, int y, int z)`
- `void reset()`
  Basically completely resets the npc. This will also call the Init script
- `void say​(java.lang.String message)`
- `void sayTo​(IPlayer player, java.lang.String message)`
- `IProjectile shootItem​(IEntityLivingBase target, IItemStack item, int accuracy)`
  - param: item - The item you want to shoot
  - param: accuracy - Accuracy of the shot (1-100)
- `IProjectile shootItem​(double x, double y, double z, IItemStack item, int accuracy)`
  - param: item - The item you want to shoot
  - param: accuracy - Accuracy of the shot (1-100)
- `void giveItem​(IPlayer player, IItemStack item)`
  If the player can't carry the item it will fall on the ground. (unless the player is in creative)
- `void setDialog​(int slot, IDialog dialog)`
  - param: slot - (0-11)
- `IDialog getDialog​(int slot)`
  - param: slot - (0-11)
- `void updateClient()`
  Force update client. Normally it updates client once every 10 ticks
- `java.lang.String executeCommand​(java.lang.String command)`
  On servers the enable-command-block option in the server.properties needs to be set to true
  
   Use /gamerule commandBlockOutput false/true to turn off/on command block feedback
  
   Setting NpcUseOpCommands to true in the CustomNPCs.cfg should allow the npc to run op commands, be warned this could be a major security risk, use at own risk
  
   For permission plugins the commands are run under uuid:c9c843f8-4cb1-4c82-aa61-e264291b7bd6 and name:[customnpcs]
  - param: command - The command to be executed
  - returns: Returns the commands output

### Inherited methods
- from `noppes.npcs.api.entity.IEntity`: `addRider`, `addTag`, `clearRiders`, `damage`, `despawn`, `dropItem`, `extinguish`, `generateNewUUID`, `getAge`, `getAllRiders`, `getBlockX`, `getBlockY`, `getBlockZ`, `getEntityName`, `getEntityNbt`, `getEyeHeight`, `getHeight`, `getMotionX`, `getMotionY`, `getMotionZ`, `getMount`, `getName`, `getNbt`, `getPitch`, `getPos`, `getRiders`, `getRotation`, `getStoreddata`, `getTags`, `getTempdata`, `getType`, `getTypeName`, `getUUID`, `getWidth`, `getWorld`, `getX`, `getY`, `getZ`, `hasCustomName`, `hasTag`, `inFire`, `inLava`, `inWater`, `isAlive`, `isBurning`, `isSneaking`, `isSprinting`, `kill`, `knockback`, `playAnimation`, `rayTraceBlock`, `rayTraceEntities`, `removeTag`, `setBurning`, `setEntityNbt`, `setMotionX`, `setMotionY`, `setMotionZ`, `setMount`, `setName`, `setPitch`, `setPos`, `setPosition`, `setRotation`, `setX`, `setY`, `setZ`, `spawn`, `storeAsClone`, `typeOf`
- from `noppes.npcs.api.entity.IEntityLiving`: `clearNavigation`, `getMCEntity`, `getNavigationPath`, `isNavigating`, `jump`, `navigateTo`
- from `noppes.npcs.api.entity.IEntityLivingBase`: `addMark`, `addPotionEffect`, `canSeeEntity`, `clearPotionEffects`, `getArmor`, `getAttackTarget`, `getHealth`, `getLastAttacked`, `getLastAttackedTime`, `getMainhandItem`, `getMarks`, `getMaxHealth`, `getMoveForward`, `getMoveStrafing`, `getMoveVertical`, `getOffhandItem`, `getPotionEffect`, `isAttacking`, `isChild`, `removeMark`, `setArmor`, `setAttackTarget`, `setHealth`, `setMainhandItem`, `setMaxHealth`, `setMoveForward`, `setMoveStrafing`, `setMoveVertical`, `setOffhandItem`, `swingMainhand`, `swingOffhand`

## IEntity

*interface* `noppes.npcs.api.entity.IEntity`

### Methods
- `double getX()`
- `void setX​(double x)`
- `double getY()`
- `void setY​(double y)`
- `double getZ()`
- `void setZ​(double z)`
- `int getBlockX()`
- `int getBlockY()`
- `int getBlockZ()`
- `IPos getPos()`
- `void setPos​(IPos pos)`
- `void setPosition​(double x, double y, double z)`
- `void setRotation​(float rotation)`
  - param: rotation - The rotation to be set (0-360)
- `float getRotation()`
  - returns: Current rotation of the entity
- `float getHeight()`
  - returns: Returns the height of the bounding box
- `float getEyeHeight()`
  - returns: Returns the eye height of the entity, used in this like canSee and such
- `float getWidth()`
  - returns: Returns the width of the bounding box
- `void setPitch​(float pitch)`
  - param: pitch - The viewing pitch
- `float getPitch()`
  - returns: Entities viewing pitch
- `IEntity getMount()`
- `void setMount​(IEntity entity)`
- `IEntity[] getRiders()`
  - returns: Returns the entities riding this entity
- `IEntity[] getAllRiders()`
  - returns: Returns the entities riding this entity including the entities riding those entities
- `void addRider​(IEntity entity)`
- `void clearRiders()`
- `void knockback​(int power, float direction)`
  - param: power - How strong the knockback is
  - param: direction - The direction in which he flies back (0-360). Usually based on getRotation()
- `boolean isSneaking()`
- `boolean isSprinting()`
- `IEntityItem dropItem​(IItemStack item)`
- `boolean inWater()`
- `boolean inFire()`
- `boolean inLava()`
- `IData getTempdata()`
  Temp data stores anything but only untill it's reloaded
- `IData getStoreddata()`
  Stored data persists through world restart. Unlike tempdata only Strings and Numbers can be saved
- `INbt getNbt()`
  The Entity's extra stored NBT data
  - returns: The Entity's extra stored NBT data
- `boolean isAlive()`
- `long getAge()`
  - returns: The age of this entity in ticks
- `void despawn()`
  Despawns this entity. Removes it permanently
- `void spawn()`
  Spawns this entity into the world (For NPCs dont forget to set their home position)
- `void kill()`
  Kill the entity, doesnt't despawn it
- `boolean isBurning()`
  - returns: Return whether or not this entity is on fire
- `void setBurning​(int seconds)`
  - param: seconds - Amount of seconds this entity will burn.
- `void extinguish()`
  Removes fire from this entity
- `IWorld getWorld()`
  - returns: Returns the IWorld
- `java.lang.String getTypeName()`
  - returns: Name as which it's registered in minecraft
- `int getType()`
  - returns: Returns the EntityType of this entity
- `boolean typeOf​(int type)`
  - param: type - EntityType to check
  - returns: Returns whether the entity is type of the given EntityType
- `T getMCEntity()`
  Expert users only
  - returns: Returns minecrafts entity
- `java.lang.String getUUID()`
- `java.lang.String generateNewUUID()`
- `void storeAsClone​(int tab, java.lang.String name)`
  Stores the entity as clone server side
  - param: tab -
  - param: name -
- `INbt getEntityNbt()`
  This is not a function you should be calling every tick.
   Returns the entire entity as nbt
- `void setEntityNbt​(INbt nbt)`
  This is not a function you should be calling every tick
- `IRayTrace rayTraceBlock​(double distance, boolean stopOnLiquid, boolean ignoreBlockWithoutBoundingBox)`
  Gets the first block within distance the npc is looking at
  - param: distance -
  - param: stopOnLiquid -
  - param: ignoreBlockWithoutBoundingBox -
- `IEntity[] rayTraceEntities​(double distance, boolean stopOnLiquid, boolean ignoreBlockWithoutBoundingBox)`
  Gets the entities within distance the npc is looking at sorted by distance
  - param: distance -
  - param: stopOnLiquid -
  - param: ignoreBlockWithoutBoundingBox -
- `java.lang.String[] getTags()`
  Tags are used by scoreboards and can be used in commands
- `void addTag​(java.lang.String tag)`
- `boolean hasTag​(java.lang.String tag)`
- `void removeTag​(java.lang.String tag)`
- `void playAnimation​(int type)`
  Play specific minecraft animations client side
   0 and 3 are for EntityLivingBase entities and 2 is only for players
  - param: type - 0:Swing main hand, 1:Hurt animation, 2:Wakeup Player 3:Swing offhand hand, 4:Crit particle, 5:Spell crit particle
- `void damage​(float amount)`
- `double getMotionX()`
- `double getMotionY()`
- `double getMotionZ()`
- `void setMotionX​(double motion)`
- `void setMotionY​(double motion)`
- `void setMotionZ​(double motion)`
- `java.lang.String getName()`
  - returns: Returns the current name displayed by the entity
- `void setName​(java.lang.String name)`
  - param: name - Set a custom name for this entity
- `boolean hasCustomName()`
- `java.lang.String getEntityName()`
  - returns: Returns the original name incase a custom name has been set

## IEntityItem

*interface* `noppes.npcs.api.entity.IEntityItem`

All Superinterfaces: IEntity<T>

### Methods
- `java.lang.String getOwner()`
  - returns: The owner of the item, only the owner can pick the item up
- `void setOwner​(java.lang.String name)`
  - param: name - The owner of the item, only the owner can pick up the item
 (note that the item can also be picked up if the lifetime - age is equal or smaller than 200)
- `int getPickupDelay()`
  - returns: Ticks remaining before it can be picked up (32767 is infinite)
- `void setPickupDelay​(int delay)`
  - param: delay - Delay before the item can be picked up (32767 is infinite delay)
- `long getAge()`
  - returns: Returns the age of the item
- `void setAge​(long age)`
  - param: age - Age of the item (-32767 is infinite age)
- `int getLifeSpawn()`
  - returns: When the age reaches this the item despawns
- `void setLifeSpawn​(int age)`
  - param: age - Age at which the item despawns
- `IItemStack getItem()`
- `void setItem​(IItemStack item)`

### Inherited methods
- from `noppes.npcs.api.entity.IEntity`: `addRider`, `addTag`, `clearRiders`, `damage`, `despawn`, `dropItem`, `extinguish`, `generateNewUUID`, `getAllRiders`, `getBlockX`, `getBlockY`, `getBlockZ`, `getEntityName`, `getEntityNbt`, `getEyeHeight`, `getHeight`, `getMCEntity`, `getMotionX`, `getMotionY`, `getMotionZ`, `getMount`, `getName`, `getNbt`, `getPitch`, `getPos`, `getRiders`, `getRotation`, `getStoreddata`, `getTags`, `getTempdata`, `getType`, `getTypeName`, `getUUID`, `getWidth`, `getWorld`, `getX`, `getY`, `getZ`, `hasCustomName`, `hasTag`, `inFire`, `inLava`, `inWater`, `isAlive`, `isBurning`, `isSneaking`, `isSprinting`, `kill`, `knockback`, `playAnimation`, `rayTraceBlock`, `rayTraceEntities`, `removeTag`, `setBurning`, `setEntityNbt`, `setMotionX`, `setMotionY`, `setMotionZ`, `setMount`, `setName`, `setPitch`, `setPos`, `setPosition`, `setRotation`, `setX`, `setY`, `setZ`, `spawn`, `storeAsClone`, `typeOf`

## IEntityLiving

*interface* `noppes.npcs.api.entity.IEntityLiving`

All Superinterfaces: IEntity<T>, IEntityLivingBase<T>

### Methods
- `boolean isNavigating()`
  - returns: Whether or not this entity is navigating somewhere
- `void clearNavigation()`
  Stop navigating wherever this npc was walking to
- `void navigateTo​(double x, double y, double z, double speed)`
  Start path finding toward this target
  - param: x - Destination x position
  - param: y - Destination x position
  - param: z - Destination x position
- `void jump()`
- `T getMCEntity()`
  Description copied from interface: IEntity
  Expert users only
  - returns: Returns minecrafts entity
- `IPos getNavigationPath()`

### Inherited methods
- from `noppes.npcs.api.entity.IEntity`: `addRider`, `addTag`, `clearRiders`, `damage`, `despawn`, `dropItem`, `extinguish`, `generateNewUUID`, `getAge`, `getAllRiders`, `getBlockX`, `getBlockY`, `getBlockZ`, `getEntityName`, `getEntityNbt`, `getEyeHeight`, `getHeight`, `getMotionX`, `getMotionY`, `getMotionZ`, `getMount`, `getName`, `getNbt`, `getPitch`, `getPos`, `getRiders`, `getRotation`, `getStoreddata`, `getTags`, `getTempdata`, `getType`, `getTypeName`, `getUUID`, `getWidth`, `getWorld`, `getX`, `getY`, `getZ`, `hasCustomName`, `hasTag`, `inFire`, `inLava`, `inWater`, `isAlive`, `isBurning`, `isSneaking`, `isSprinting`, `kill`, `knockback`, `playAnimation`, `rayTraceBlock`, `rayTraceEntities`, `removeTag`, `setBurning`, `setEntityNbt`, `setMotionX`, `setMotionY`, `setMotionZ`, `setMount`, `setName`, `setPitch`, `setPos`, `setPosition`, `setRotation`, `setX`, `setY`, `setZ`, `spawn`, `storeAsClone`, `typeOf`
- from `noppes.npcs.api.entity.IEntityLivingBase`: `addMark`, `addPotionEffect`, `canSeeEntity`, `clearPotionEffects`, `getArmor`, `getAttackTarget`, `getHealth`, `getLastAttacked`, `getLastAttackedTime`, `getMainhandItem`, `getMarks`, `getMaxHealth`, `getMoveForward`, `getMoveStrafing`, `getMoveVertical`, `getOffhandItem`, `getPotionEffect`, `isAttacking`, `isChild`, `removeMark`, `setArmor`, `setAttackTarget`, `setHealth`, `setMainhandItem`, `setMaxHealth`, `setMoveForward`, `setMoveStrafing`, `setMoveVertical`, `setOffhandItem`, `swingMainhand`, `swingOffhand`

## IEntityLivingBase

*interface* `noppes.npcs.api.entity.IEntityLivingBase`

All Superinterfaces: IEntity<T>

### Methods
- `float getHealth()`
- `void setHealth​(float health)`
- `float getMaxHealth()`
- `void setMaxHealth​(float health)`
- `boolean isAttacking()`
- `void setAttackTarget​(IEntityLivingBase living)`
- `IEntityLivingBase getAttackTarget()`
- `IEntityLivingBase getLastAttacked()`
  - returns: Returns the last Entity this Entity attacked
- `int getLastAttackedTime()`
  - returns: Returns the age of this entity when it was last attacked
- `boolean canSeeEntity​(IEntity entity)`
- `void swingMainhand()`
- `void swingOffhand()`
- `IItemStack getMainhandItem()`
- `void setMainhandItem​(IItemStack item)`
- `IItemStack getOffhandItem()`
- `void setOffhandItem​(IItemStack item)`
- `IItemStack getArmor​(int slot)`
  Note not all Living Entities support this
  - param: slot - Slot of what armor piece to get, 0:boots, 1:pants, 2:body, 3:head
  - returns: The item in the given slot
- `void setArmor​(int slot, IItemStack item)`
  - param: slot - Slot of what armor piece to set, 0:boots, 1:pants, 2:body, 3:head
  - param: item - Item to be set
- `void addPotionEffect​(int effect, int duration, int strength, boolean hideParticles)`
  Works the same as the /effect command
  - param: effect -
  - param: duration - The duration in seconds
  - param: strength - The amplifier of the potion effect
  - param: hideParticles - Whether or not you want to hide potion particles
- `void clearPotionEffects()`
- `int getPotionEffect​(int effect)`
- `IMark addMark​(int type)`
- `void removeMark​(IMark mark)`
- `IMark[] getMarks()`
- `boolean isChild()`
- `T getMCEntity()`
  Description copied from interface: IEntity
  Expert users only
  - returns: Returns minecrafts entity
- `float getMoveForward()`
- `void setMoveForward​(float move)`
- `float getMoveStrafing()`
- `void setMoveStrafing​(float move)`
- `float getMoveVertical()`
- `void setMoveVertical​(float move)`

### Inherited methods
- from `noppes.npcs.api.entity.IEntity`: `addRider`, `addTag`, `clearRiders`, `damage`, `despawn`, `dropItem`, `extinguish`, `generateNewUUID`, `getAge`, `getAllRiders`, `getBlockX`, `getBlockY`, `getBlockZ`, `getEntityName`, `getEntityNbt`, `getEyeHeight`, `getHeight`, `getMotionX`, `getMotionY`, `getMotionZ`, `getMount`, `getName`, `getNbt`, `getPitch`, `getPos`, `getRiders`, `getRotation`, `getStoreddata`, `getTags`, `getTempdata`, `getType`, `getTypeName`, `getUUID`, `getWidth`, `getWorld`, `getX`, `getY`, `getZ`, `hasCustomName`, `hasTag`, `inFire`, `inLava`, `inWater`, `isAlive`, `isBurning`, `isSneaking`, `isSprinting`, `kill`, `knockback`, `playAnimation`, `rayTraceBlock`, `rayTraceEntities`, `removeTag`, `setBurning`, `setEntityNbt`, `setMotionX`, `setMotionY`, `setMotionZ`, `setMount`, `setName`, `setPitch`, `setPos`, `setPosition`, `setRotation`, `setX`, `setY`, `setZ`, `spawn`, `storeAsClone`, `typeOf`

## IMonster

*interface* `noppes.npcs.api.entity.IMonster`

All Superinterfaces: IEntity<T>, IEntityLiving<T>, IEntityLivingBase<T>

### Inherited methods
- from `noppes.npcs.api.entity.IEntity`: `addRider`, `addTag`, `clearRiders`, `damage`, `despawn`, `dropItem`, `extinguish`, `generateNewUUID`, `getAge`, `getAllRiders`, `getBlockX`, `getBlockY`, `getBlockZ`, `getEntityName`, `getEntityNbt`, `getEyeHeight`, `getHeight`, `getMotionX`, `getMotionY`, `getMotionZ`, `getMount`, `getName`, `getNbt`, `getPitch`, `getPos`, `getRiders`, `getRotation`, `getStoreddata`, `getTags`, `getTempdata`, `getType`, `getTypeName`, `getUUID`, `getWidth`, `getWorld`, `getX`, `getY`, `getZ`, `hasCustomName`, `hasTag`, `inFire`, `inLava`, `inWater`, `isAlive`, `isBurning`, `isSneaking`, `isSprinting`, `kill`, `knockback`, `playAnimation`, `rayTraceBlock`, `rayTraceEntities`, `removeTag`, `setBurning`, `setEntityNbt`, `setMotionX`, `setMotionY`, `setMotionZ`, `setMount`, `setName`, `setPitch`, `setPos`, `setPosition`, `setRotation`, `setX`, `setY`, `setZ`, `spawn`, `storeAsClone`, `typeOf`
- from `noppes.npcs.api.entity.IEntityLiving`: `clearNavigation`, `getMCEntity`, `getNavigationPath`, `isNavigating`, `jump`, `navigateTo`
- from `noppes.npcs.api.entity.IEntityLivingBase`: `addMark`, `addPotionEffect`, `canSeeEntity`, `clearPotionEffects`, `getArmor`, `getAttackTarget`, `getHealth`, `getLastAttacked`, `getLastAttackedTime`, `getMainhandItem`, `getMarks`, `getMaxHealth`, `getMoveForward`, `getMoveStrafing`, `getMoveVertical`, `getOffhandItem`, `getPotionEffect`, `isAttacking`, `isChild`, `removeMark`, `setArmor`, `setAttackTarget`, `setHealth`, `setMainhandItem`, `setMaxHealth`, `setMoveForward`, `setMoveStrafing`, `setMoveVertical`, `setOffhandItem`, `swingMainhand`, `swingOffhand`

## IPixelmon

*interface* `noppes.npcs.api.entity.IPixelmon`

All Superinterfaces: IAnimal<T>, IEntity<T>, IEntityLiving<T>, IEntityLivingBase<T>

### Methods
- `java.lang.Object getPokemonData()`
  Returns a Pokemon object

### Inherited methods
- from `noppes.npcs.api.entity.IEntity`: `addRider`, `addTag`, `clearRiders`, `damage`, `despawn`, `dropItem`, `extinguish`, `generateNewUUID`, `getAge`, `getAllRiders`, `getBlockX`, `getBlockY`, `getBlockZ`, `getEntityName`, `getEntityNbt`, `getEyeHeight`, `getHeight`, `getMotionX`, `getMotionY`, `getMotionZ`, `getMount`, `getName`, `getNbt`, `getPitch`, `getPos`, `getRiders`, `getRotation`, `getStoreddata`, `getTags`, `getTempdata`, `getType`, `getTypeName`, `getUUID`, `getWidth`, `getWorld`, `getX`, `getY`, `getZ`, `hasCustomName`, `hasTag`, `inFire`, `inLava`, `inWater`, `isAlive`, `isBurning`, `isSneaking`, `isSprinting`, `kill`, `knockback`, `playAnimation`, `rayTraceBlock`, `rayTraceEntities`, `removeTag`, `setBurning`, `setEntityNbt`, `setMotionX`, `setMotionY`, `setMotionZ`, `setMount`, `setName`, `setPitch`, `setPos`, `setPosition`, `setRotation`, `setX`, `setY`, `setZ`, `spawn`, `storeAsClone`, `typeOf`
- from `noppes.npcs.api.entity.IEntityLiving`: `clearNavigation`, `getMCEntity`, `getNavigationPath`, `isNavigating`, `jump`, `navigateTo`
- from `noppes.npcs.api.entity.IEntityLivingBase`: `addMark`, `addPotionEffect`, `canSeeEntity`, `clearPotionEffects`, `getArmor`, `getAttackTarget`, `getHealth`, `getLastAttacked`, `getLastAttackedTime`, `getMainhandItem`, `getMarks`, `getMaxHealth`, `getMoveForward`, `getMoveStrafing`, `getMoveVertical`, `getOffhandItem`, `getPotionEffect`, `isAttacking`, `isChild`, `removeMark`, `setArmor`, `setAttackTarget`, `setHealth`, `setMainhandItem`, `setMaxHealth`, `setMoveForward`, `setMoveStrafing`, `setMoveVertical`, `setOffhandItem`, `swingMainhand`, `swingOffhand`

## IPlayer

*interface* `noppes.npcs.api.entity.IPlayer`

All Superinterfaces: IEntity<T>, IEntityLivingBase<T>

### Methods
- `java.lang.String getDisplayName()`
- `boolean hasFinishedQuest​(int id)`
- `boolean hasActiveQuest​(int id)`
- `void startQuest​(int id)`
- `int factionStatus​(int factionId)`
  - returns: Returns -1:Unfriendly, 0:Neutral, 1:Friendly
- `void finishQuest​(int id)`
  Add the quest from finished quest list
  - param: id - The Quest ID
- `void stopQuest​(int id)`
  Removes the quest from active quest list
  - param: id - The Quest ID
- `void removeQuest​(int id)`
  Removes the quest from active and finished quest list
  - param: id - The Quest ID
- `boolean hasReadDialog​(int id)`
- `void showDialog​(int id, java.lang.String name)`
  - param: name - Name of the person talking in the dialog
- `void removeDialog​(int id)`
  - param: id - Removes the given id from the read dialogs list
- `void addDialog​(int id)`
  - param: id - Adds the given id to the read dialogs
- `void addFactionPoints​(int faction, int points)`
  - param: faction - The faction id
  - param: points - The points to increase. Use negative values to decrease
- `int getFactionPoints​(int faction)`
  - param: faction - The faction id
  - returns: points
- `void message​(java.lang.String message)`
- `int getGamemode()`
- `void setGamemode​(int mode)`
- `int inventoryItemCount​(IItemStack item)` (deprecated)
  Use getInventory().count instead
- `int inventoryItemCount​(java.lang.String id, int damage)` (deprecated)
  Use getInventory().count instead
- `IContainer getInventory()`
  - returns: Returns a IItemStack array size 36
- `IItemStack getInventoryHeldItem()`
  - returns: Returns the itemstack the player is currently holding in a container gui
- `boolean removeItem​(IItemStack item, int amount)`
  - param: item - The Item type to be removed
  - param: amount - How many will be removed
  - returns: Returns true if the items were removed succesfully. Returns false incase a bigger amount than what the player has was given
- `boolean removeItem​(java.lang.String id, int damage, int amount)`
  - param: id - The items name
  - param: damage - The damage value (give -1 for any damage value)
  - param: amount - How many will be removed
  - returns: Returns true if the items were removed succesfully. Returns false incase a bigger amount than what the player has was given or item doesnt exist
- `void removeAllItems​(IItemStack item)`
- `boolean giveItem​(IItemStack item)`
  - param: item - Item to be added
  - returns: Returns whether or not it gave the item succesfully
- `boolean giveItem​(java.lang.String id, int damage, int amount)`
  - param: id - The items name
  - param: damage - The damage value
  - param: amount - The amount of the item to be added
  - returns: Returns whether or not it gave the item succesfully
- `void setSpawnpoint​(int x, int y, int z)`
  Same as the /spawnpoint command
  - param: x - The x position
  - param: y - The y position
  - param: z - The z position
- `void resetSpawnpoint()`
- `boolean hasAchievement​(java.lang.String achievement)`
  - param: achievement - The achievement id. For a complete list see
getExpLevel
int getExpLevel()
- `void setExpLevel​(int level)`
- `boolean hasPermission​(java.lang.String permission)`
- `java.lang.Object getPixelmonData()`
- `ITimers getTimers()`
- `void closeGui()`
- `T getMCEntity()`
  Description copied from interface: IEntity
  Expert users only
  - returns: Returns minecrafts entity
- `IBlock getSpawnPoint()`
- `void setSpawnPoint​(IBlock block)`
- `int getHunger()`
- `void setHunger​(int level)`
- `void kick​(java.lang.String message)`
  - param: message - The message the player gets when kicked
- `void sendNotification​(java.lang.String title, java.lang.String msg, int type)`
  - param: title - Title of the notification
  - param: msg - Message of the notification
  - param: type - (0-3) notification background type
- `void sendMail​(IPlayerMail mail)`
- `void clearData()`
  WANRING, REMOVES ALL PLAYER DATA (data only from CustomNPCs, does not clear inventory etc)
- `IQuest[] getActiveQuests()`
- `IQuest[] getFinishedQuests()`
- `void updatePlayerInventory()`
  Syncs inventory changes to the client side. Also checks Item Quests for completion
- `void playSound​(java.lang.String sound, float volume, float pitch)`
  - param: sound - Sounds resource name
  - param: volume - default 1
  - param: pitch - default 1
- `IContainer showChestGui​(int rows)` (deprecated)
  - param: rows - (1-6)
  - returns: Returns the IContainer of the chest gui
- `IContainer getOpenContainer()`
  - returns: Returns the container of the player if he has a container gui open. Returns the inventory container if none is open
- `boolean canQuestBeAccepted​(int id)`
- `void showCustomGui​(ICustomGui gui)`
  Open a ICustomGui to this player.
  - param: gui - Custom GUI to be displayed to the player.
- `ICustomGui getCustomGui()`
  - returns: Returns the currently opened custom gui

### Inherited methods
- from `noppes.npcs.api.entity.IEntity`: `addRider`, `addTag`, `clearRiders`, `damage`, `despawn`, `dropItem`, `extinguish`, `generateNewUUID`, `getAge`, `getAllRiders`, `getBlockX`, `getBlockY`, `getBlockZ`, `getEntityName`, `getEntityNbt`, `getEyeHeight`, `getHeight`, `getMotionX`, `getMotionY`, `getMotionZ`, `getMount`, `getName`, `getNbt`, `getPitch`, `getPos`, `getRiders`, `getRotation`, `getStoreddata`, `getTags`, `getTempdata`, `getType`, `getTypeName`, `getUUID`, `getWidth`, `getWorld`, `getX`, `getY`, `getZ`, `hasCustomName`, `hasTag`, `inFire`, `inLava`, `inWater`, `isAlive`, `isBurning`, `isSneaking`, `isSprinting`, `kill`, `knockback`, `playAnimation`, `rayTraceBlock`, `rayTraceEntities`, `removeTag`, `setBurning`, `setEntityNbt`, `setMotionX`, `setMotionY`, `setMotionZ`, `setMount`, `setName`, `setPitch`, `setPos`, `setPosition`, `setRotation`, `setX`, `setY`, `setZ`, `spawn`, `storeAsClone`, `typeOf`
- from `noppes.npcs.api.entity.IEntityLivingBase`: `addMark`, `addPotionEffect`, `canSeeEntity`, `clearPotionEffects`, `getArmor`, `getAttackTarget`, `getHealth`, `getLastAttacked`, `getLastAttackedTime`, `getMainhandItem`, `getMarks`, `getMaxHealth`, `getMoveForward`, `getMoveStrafing`, `getMoveVertical`, `getOffhandItem`, `getPotionEffect`, `isAttacking`, `isChild`, `removeMark`, `setArmor`, `setAttackTarget`, `setHealth`, `setMainhandItem`, `setMaxHealth`, `setMoveForward`, `setMoveStrafing`, `setMoveVertical`, `setOffhandItem`, `swingMainhand`, `swingOffhand`

## IProjectile

*interface* `noppes.npcs.api.entity.IProjectile`

All Superinterfaces: IEntity<T>, IThrowable<T>

### Methods
- `IItemStack getItem()`
- `void setItem​(IItemStack item)`
- `boolean getHasGravity()`
  - returns: Returns whether the arrow flies in a straight line or not
- `void setHasGravity​(boolean bo)`
  - param: bo - Whether the arrow flies in a straight line or not
- `int getAccuracy()`
- `void setAccuracy​(int accuracy)`
- `void setHeading​(IEntity entity)`
  Entity where the projectile heads towards
   The position for the projectile needs to have been set for this
- `void setHeading​(double x, double y, double z)`
  Position where the projectile heads towards.
   The position for the projectile needs to have been set for this
- `void setHeading​(float yaw, float pitch)`
  - param: yaw - Rotation yaw
  - param: pitch - Rotation pitch
- `void enableEvents()`
  For scripters to enable projectile events in their current scripting container

### Inherited methods
- from `noppes.npcs.api.entity.IEntity`: `addRider`, `addTag`, `clearRiders`, `damage`, `despawn`, `dropItem`, `extinguish`, `generateNewUUID`, `getAge`, `getAllRiders`, `getBlockX`, `getBlockY`, `getBlockZ`, `getEntityName`, `getEntityNbt`, `getEyeHeight`, `getHeight`, `getMCEntity`, `getMotionX`, `getMotionY`, `getMotionZ`, `getMount`, `getName`, `getNbt`, `getPitch`, `getPos`, `getRiders`, `getRotation`, `getStoreddata`, `getTags`, `getTempdata`, `getType`, `getTypeName`, `getUUID`, `getWidth`, `getWorld`, `getX`, `getY`, `getZ`, `hasCustomName`, `hasTag`, `inFire`, `inLava`, `inWater`, `isAlive`, `isBurning`, `isSneaking`, `isSprinting`, `kill`, `knockback`, `playAnimation`, `rayTraceBlock`, `rayTraceEntities`, `removeTag`, `setBurning`, `setEntityNbt`, `setMotionX`, `setMotionY`, `setMotionZ`, `setMount`, `setName`, `setPitch`, `setPos`, `setPosition`, `setRotation`, `setX`, `setY`, `setZ`, `spawn`, `storeAsClone`, `typeOf`

## IThrowable

*interface* `noppes.npcs.api.entity.IThrowable`

All Superinterfaces: IEntity<T>

### Inherited methods
- from `noppes.npcs.api.entity.IEntity`: `addRider`, `addTag`, `clearRiders`, `damage`, `despawn`, `dropItem`, `extinguish`, `generateNewUUID`, `getAge`, `getAllRiders`, `getBlockX`, `getBlockY`, `getBlockZ`, `getEntityName`, `getEntityNbt`, `getEyeHeight`, `getHeight`, `getMCEntity`, `getMotionX`, `getMotionY`, `getMotionZ`, `getMount`, `getName`, `getNbt`, `getPitch`, `getPos`, `getRiders`, `getRotation`, `getStoreddata`, `getTags`, `getTempdata`, `getType`, `getTypeName`, `getUUID`, `getWidth`, `getWorld`, `getX`, `getY`, `getZ`, `hasCustomName`, `hasTag`, `inFire`, `inLava`, `inWater`, `isAlive`, `isBurning`, `isSneaking`, `isSprinting`, `kill`, `knockback`, `playAnimation`, `rayTraceBlock`, `rayTraceEntities`, `removeTag`, `setBurning`, `setEntityNbt`, `setMotionX`, `setMotionY`, `setMotionZ`, `setMount`, `setName`, `setPitch`, `setPos`, `setPosition`, `setRotation`, `setX`, `setY`, `setZ`, `spawn`, `storeAsClone`, `typeOf`

## IVillager

*interface* `noppes.npcs.api.entity.IVillager`

All Superinterfaces: IEntity<T>, IEntityLiving<T>, IEntityLivingBase<T>

### Inherited methods
- from `noppes.npcs.api.entity.IEntity`: `addRider`, `addTag`, `clearRiders`, `damage`, `despawn`, `dropItem`, `extinguish`, `generateNewUUID`, `getAge`, `getAllRiders`, `getBlockX`, `getBlockY`, `getBlockZ`, `getEntityName`, `getEntityNbt`, `getEyeHeight`, `getHeight`, `getMotionX`, `getMotionY`, `getMotionZ`, `getMount`, `getName`, `getNbt`, `getPitch`, `getPos`, `getRiders`, `getRotation`, `getStoreddata`, `getTags`, `getTempdata`, `getType`, `getTypeName`, `getUUID`, `getWidth`, `getWorld`, `getX`, `getY`, `getZ`, `hasCustomName`, `hasTag`, `inFire`, `inLava`, `inWater`, `isAlive`, `isBurning`, `isSneaking`, `isSprinting`, `kill`, `knockback`, `playAnimation`, `rayTraceBlock`, `rayTraceEntities`, `removeTag`, `setBurning`, `setEntityNbt`, `setMotionX`, `setMotionY`, `setMotionZ`, `setMount`, `setName`, `setPitch`, `setPos`, `setPosition`, `setRotation`, `setX`, `setY`, `setZ`, `spawn`, `storeAsClone`, `typeOf`
- from `noppes.npcs.api.entity.IEntityLiving`: `clearNavigation`, `getMCEntity`, `getNavigationPath`, `isNavigating`, `jump`, `navigateTo`
- from `noppes.npcs.api.entity.IEntityLivingBase`: `addMark`, `addPotionEffect`, `canSeeEntity`, `clearPotionEffects`, `getArmor`, `getAttackTarget`, `getHealth`, `getLastAttacked`, `getLastAttackedTime`, `getMainhandItem`, `getMarks`, `getMaxHealth`, `getMoveForward`, `getMoveStrafing`, `getMoveVertical`, `getOffhandItem`, `getPotionEffect`, `isAttacking`, `isChild`, `removeMark`, `setArmor`, `setAttackTarget`, `setHealth`, `setMainhandItem`, `setMaxHealth`, `setMoveForward`, `setMoveStrafing`, `setMoveVertical`, `setOffhandItem`, `swingMainhand`, `swingOffhand`
