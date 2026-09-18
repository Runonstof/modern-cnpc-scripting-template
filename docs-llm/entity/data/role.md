# noppes.npcs.api.entity.data.role

- [IJobBard](#ijobbard)
- [IJobBuilder](#ijobbuilder)
- [IJobFarmer](#ijobfarmer)
- [IJobFollower](#ijobfollower)
- [IJobPuppet](#ijobpuppet)
- [IJobPuppet.IJobPuppetPart](#ijobpuppet.ijobpuppetpart)
- [IJobSpawner](#ijobspawner)
- [IRoleDialog](#iroledialog)
- [IRoleFollower](#irolefollower)
- [IRoleTrader](#iroletrader)
- [IRoleTransporter](#iroletransporter)
- [IRoleTransporter.ITransportLocation](#iroletransporter.itransportlocation)
## IJobBard

*interface* `noppes.npcs.api.entity.data.role.IJobBard`

### Methods
- `String getSong()`
- `void setSong(String song)`

## IJobBuilder

*interface* `noppes.npcs.api.entity.data.role.IJobBuilder`

### Methods
- `boolean isBuilding()`

## IJobFarmer

*interface* `noppes.npcs.api.entity.data.role.IJobFarmer`

### Methods
- `boolean isPlucking()`

## IJobFollower

*interface* `noppes.npcs.api.entity.data.role.IJobFollower`

All Superinterfaces: INPCJob

### Methods
- `String getFollowing()`
- `void setFollowing(String name)`
- `boolean isFollowing()`
- `ICustomNpc getFollowingNpc()`

### Inherited methods
- from `noppes.npcs.api.entity.data.INPCJob`: `getType`

## IJobPuppet

*interface* `noppes.npcs.api.entity.data.role.IJobPuppet`

All Superinterfaces: INPCJob

### Methods
- `boolean getIsAnimated()`
- `void setIsAnimated(boolean bo)`
- `int getAnimationSpeed()`
  - returns: (0-7)
- `void setAnimationSpeed(int speed)`
  - param: speed - (0-7)
- `IJobPuppet.IJobPuppetPart getPart(int part)`
  Part 6-11 are for animation
  - param: part - 0:head, 1:left arm, 2:right arm, 3:body, 4:left leg, 5:right leg, 6:head2, 7:left arm2, 8:right arm2, 9:body2, 10:left leg2, 11:right leg2
  - returns: returns the part

### Inherited methods
- from `noppes.npcs.api.entity.data.INPCJob`: `getType`

## IJobPuppet.IJobPuppetPart

*interface* `noppes.npcs.api.entity.data.role.IJobPuppet.IJobPuppetPart`

Enclosing interface: IJobPuppet

### Methods
- `int getRotationX()`
- `int getRotationY()`
- `int getRotationZ()`
- `void setRotation(int x,  int y,  int z)`

## IJobSpawner

*interface* `noppes.npcs.api.entity.data.role.IJobSpawner`

### Methods
- `IEntityLiving spawnEntity(int i)`
  Npc needs to be attacking something or be set to Despawn Spawns On Target Lost: No, otherwise it will despawn right away
  - param: i - The entity going to be spawned (0-5)
  - returns: Returns spawned entity
- `void removeAllSpawned()`

## IRoleDialog

*interface* `noppes.npcs.api.entity.data.role.IRoleDialog`

### Methods
- `String getDialog()`
- `void setDialog(String text)`
- `String getOption(int option)`
- `void setOption(int option,  String text)`
  - param: option - The dialog option (1-6)
- `String getOptionDialog(int option)`
- `void setOptionDialog(int option,  String text)`
  - param: option - The dialog option (1-6)

## IRoleFollower

*interface* `noppes.npcs.api.entity.data.role.IRoleFollower`

All Superinterfaces: INPCRole

### Methods
- `int getDays()`
- `void addDays(int days)`
- `boolean getInfinite()`
- `void setInfinite(boolean infinite)`
- `boolean getGuiDisabled()`
- `void setGuiDisabled(boolean disabled)`
- `IPlayer getFollowing()`
- `void setFollowing(IPlayer player)`
- `boolean isFollowing()`
- `void reset()`
- `void setRefuseSoulstone(boolean refuse)`
- `boolean getRefuseSoulstone()`

### Inherited methods
- from `noppes.npcs.api.entity.data.INPCRole`: `getType`

## IRoleTrader

*interface* `noppes.npcs.api.entity.data.role.IRoleTrader`

All Superinterfaces: INPCRole

### Methods
- `IItemStack getSold(int slot)`
  - param: slot - Slot number 0-17
- `IItemStack getCurrency1(int slot)`
  - param: slot - Slot number 0-17
- `IItemStack getCurrency2(int slot)`
  - param: slot - Slot number 0-17
- `void set(int slot,  IItemStack currency,  IItemStack currency2,  IItemStack sold)`
  - param: slot - Slot number 0-17
- `void remove(int slot)`
  - param: slot - Slot number 0-17
- `void setMarket(String name)`
- `String getMarket()`

### Inherited methods
- from `noppes.npcs.api.entity.data.INPCRole`: `getType`

## IRoleTransporter

*interface* `noppes.npcs.api.entity.data.role.IRoleTransporter`

All Superinterfaces: INPCRole

### Methods
- `IRoleTransporter.ITransportLocation getLocation()`

### Inherited methods
- from `noppes.npcs.api.entity.data.INPCRole`: `getType`

## IRoleTransporter.ITransportLocation

*interface* `noppes.npcs.api.entity.data.role.IRoleTransporter.ITransportLocation`

Enclosing interface: IRoleTransporter

### Methods
- `int getId()`
- `String getDimension()`
- `int getX()`
- `int getY()`
- `int getZ()`
- `String getName()`
- `int getType()`
  Returns the unlock type
  - returns: 0:discover, 1:from start, 2:from start
