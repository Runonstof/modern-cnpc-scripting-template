# noppes.npcs.api.block

- [IBlock](#iblock)
- [IBlockFluidContainer](#iblockfluidcontainer)
- [IBlockScripted](#iblockscripted)
- [IBlockScriptedDoor](#iblockscripteddoor)
- [ITextPlane](#itextplane)
## IBlock

*interface* `noppes.npcs.api.block.IBlock`

### Methods
- `int getX()`
- `int getY()`
- `int getZ()`
- `IPos getPos()`
- `Object getProperty(String name)`
- `void setProperty(String name,  Object val)`
- `String[] getProperties()`
- `String getName()`
  - returns: Returns this blocks name
- `void remove()`
  Removes this block
- `boolean isRemoved()`
  - returns: Returns whether or not this block has been replaced by another
- `boolean isAir()`
- `IBlock setBlock(String name)`
- `IBlock setBlock(IBlock block)`
  - param: block - Sets the block to replace this one
  - returns: Returns the new block
- `boolean hasTileEntity()`
- `boolean isContainer()`
  - returns: Returns whether it has items stored inside it (e.g. chests, droppers, hoppers, etc)
- `IContainer getContainer()`
- `IData getTempdata()`
  Temp data stores anything but only untill it's reloaded.
   (works only for customnpcs blocks)
- `IData getStoreddata()`
  Stored data persists through world restart. Unlike tempdata only Strings and Numbers can be saved
   (works only for blocks with TileEntities)
- `IWorld getWorld()`
- `INbt getBlockEntityNBT()`
- `void setTileEntityNBT(INbt nbt)`
- `net.minecraft.world.level.block.entity.BlockEntity getMCTileEntity()`
  Expert users only
  - returns: Returns minecrafts tilentity
- `net.minecraft.world.level.block.Block getMCBlock()`
  Expert users only
  - returns: Returns minecrafts block
- `void blockEvent(int type,  int data)`
  - param: type - Event type
  - param: data - Event data
 Example:
 Chests - type:1 data:1 opens the lid, type:1 data:0 closes the lid
 Note block - type:(0-9) data:(0-24) plays different notes
- `String getDisplayName()`
- `net.minecraft.world.level.block.state.BlockState getMCBlockState()`
  Expert users only
  - returns: Returns minecrafts iblockstate
- `void interact(int side)`
  Simulates a player interacting with this block (can give weird results)
  - param: side - The side of the block interacted with

## IBlockFluidContainer

*interface* `noppes.npcs.api.block.IBlockFluidContainer`

Used for certain technical mods which use FluidContainer blocks *

All Superinterfaces: IBlock

### Methods
- `float getFluidPercentage()`
- `float getFuildDensity()`
- `float getFuildTemperature()`
- `String getFluidName()`

### Inherited methods
- from `noppes.npcs.api.block.IBlock`: `blockEvent`, `getBlockEntityNBT`, `getContainer`, `getDisplayName`, `getMCBlock`, `getMCBlockState`, `getMCTileEntity`, `getName`, `getPos`, `getProperties`, `getProperty`, `getStoreddata`, `getTempdata`, `getWorld`, `getX`, `getY`, `getZ`, `hasTileEntity`, `interact`, `isAir`, `isContainer`, `isRemoved`, `remove`, `setBlock`, `setBlock`, `setProperty`, `setTileEntityNBT`

## IBlockScripted

*interface* `noppes.npcs.api.block.IBlockScripted`

All Superinterfaces: IBlock

### Methods
- `void setModel(IItemStack item)`
  - param: item - The item to be set as model
- `void setModel(String name)`
- `IItemStack getModel()`
- `ITimers getTimers()`
- `void setRedstonePower(int strength)`
  - param: strength - Sets the strength of the redstone signal (0-15)
- `int getRedstonePower()`
  - returns: Returns the current redstone power (0-15) this block is giving off
- `void setIsLadder(boolean enabled)`
- `boolean getIsLadder()`
- `void setLight(int value)`
  - param: value - Sets the light value (0-15)
- `int getLight()`
  - returns: Returns the light value (0-15)
- `void setScale(float x,  float y,  float z)`
  - param: x - Scale x (0-10)
  - param: y - Scale y (0-10)
  - param: z - Scale z (0-10)
- `float getScaleX()`
- `float getScaleY()`
- `float getScaleZ()`
- `void setRotation(int x,  int y,  int z)`
  - param: x - Rotation x (0-359)
  - param: y - Rotation y (0-359)
  - param: z - Rotation z (0-359)
- `int getRotationX()`
- `int getRotationY()`
- `int getRotationZ()`
- `String executeCommand(String command)`
  On servers the enable-command-block option in the server.properties needs to be set to true
  
   Use /gamerule commandBlockOutput false/true to turn off/on command block feedback
  
   Setting NpcUseOpCommands to true in the CustomNPCs.cfg should allow the npc to run op commands, be warned this could be a major security risk, use at own risk
  
   For permission plugins the commands are run under uuid:c9c843f8-4cb1-4c82-aa61-e264291b7bd6 and name:[customnpcs]
  - param: command - The command to be executed
  - returns: Returns the commands output
- `boolean getIsPassible()`
- `void setIsPassible(boolean bo)`
- `float getHardness()`
  - returns: Harvesting hardness (-1 makes it unharvestable)
- `void setHardness(float hardness)`
- `float getResistance()`
  - returns: Explosion resistance (-1 makes it unexplodable)
- `void setResistance(float resistance)`
- `ITextPlane getTextPlane()`
- `ITextPlane getTextPlane2()`
- `ITextPlane getTextPlane3()`
- `ITextPlane getTextPlane4()`
- `ITextPlane getTextPlane5()`
- `ITextPlane getTextPlane6()`
- `void trigger(int id,  Object... arguments)`
  Fires trigger event for block scripts
  - param: id - , Id for the event
  - param: arguments - , arguments you can give with it

### Inherited methods
- from `noppes.npcs.api.block.IBlock`: `blockEvent`, `getBlockEntityNBT`, `getContainer`, `getDisplayName`, `getMCBlock`, `getMCBlockState`, `getMCTileEntity`, `getName`, `getPos`, `getProperties`, `getProperty`, `getStoreddata`, `getTempdata`, `getWorld`, `getX`, `getY`, `getZ`, `hasTileEntity`, `interact`, `isAir`, `isContainer`, `isRemoved`, `remove`, `setBlock`, `setBlock`, `setProperty`, `setTileEntityNBT`

## IBlockScriptedDoor

*interface* `noppes.npcs.api.block.IBlockScriptedDoor`

All Superinterfaces: IBlock

### Methods
- `ITimers getTimers()`
- `boolean getOpen()`
- `void setOpen(boolean open)`
- `void setBlockModel(String name)`
  - param: name - The items name for the blocks model to be set
- `String getBlockModel()`
- `float getHardness()`
  - returns: Harvesting hardness (-1 makes it unharvestable)
- `void setHardness(float hardness)`
- `float getResistance()`
  - returns: Explosion resistance (-1 makes it unexplodable)
- `void setResistance(float resistance)`
- `String executeCommand(String command)`
  On servers the enable-command-block option in the server.properties needs to be set to true
  
   Use /gamerule commandBlockOutput false/true to turn off/on command block feedback
  
   Setting NpcUseOpCommands to true in the CustomNPCs.cfg should allow the npc to run op commands, be warned this could be a major security risk, use at own risk
  
   For permission plugins the commands are run under uuid:c9c843f8-4cb1-4c82-aa61-e264291b7bd6 and name:[customnpcs]
  - param: command - The command to be executed
  - returns: Returns the commands output

### Inherited methods
- from `noppes.npcs.api.block.IBlock`: `blockEvent`, `getBlockEntityNBT`, `getContainer`, `getDisplayName`, `getMCBlock`, `getMCBlockState`, `getMCTileEntity`, `getName`, `getPos`, `getProperties`, `getProperty`, `getStoreddata`, `getTempdata`, `getWorld`, `getX`, `getY`, `getZ`, `hasTileEntity`, `interact`, `isAir`, `isContainer`, `isRemoved`, `remove`, `setBlock`, `setBlock`, `setProperty`, `setTileEntityNBT`

## ITextPlane

*interface* `noppes.npcs.api.block.ITextPlane`

### Methods
- `String getText()`
- `void setText(String text)`
- `int getRotationX()`
- `int getRotationY()`
- `int getRotationZ()`
- `void setRotationX(int x)`
- `void setRotationY(int y)`
- `void setRotationZ(int z)`
  - param: z - Default: 0.5
- `float getOffsetX()`
- `float getOffsetY()`
- `float getOffsetZ()`
- `void setOffsetX(float x)`
- `void setOffsetY(float y)`
- `void setOffsetZ(float z)`
- `float getScale()`
- `void setScale(float scale)`
  - param: scale - Default: 1
