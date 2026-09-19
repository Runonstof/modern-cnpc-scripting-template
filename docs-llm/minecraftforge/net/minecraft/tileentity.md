# net.minecraft.tileentity

- [BannerPattern](#bannerpattern)
- [CommandBlockBaseLogic](#commandblockbaselogic)
- [IHopper](#ihopper)
- [MobSpawnerBaseLogic](#mobspawnerbaselogic)
- [TileEntity](#tileentity)
- [TileEntityBanner](#tileentitybanner)
- [TileEntityBeacon](#tileentitybeacon)
- [TileEntityBeacon.BeamSegment](#tileentitybeacon.beamsegment)
- [TileEntityBed](#tileentitybed)
- [TileEntityBrewingStand](#tileentitybrewingstand)
- [TileEntityChest](#tileentitychest)
- [TileEntityCommandBlock](#tileentitycommandblock)
- [TileEntityCommandBlock.Mode](#tileentitycommandblock.mode)
- [TileEntityComparator](#tileentitycomparator)
- [TileEntityDaylightDetector](#tileentitydaylightdetector)
- [TileEntityDispenser](#tileentitydispenser)
- [TileEntityDropper](#tileentitydropper)
- [TileEntityEnchantmentTable](#tileentityenchantmenttable)
- [TileEntityEnderChest](#tileentityenderchest)
- [TileEntityEndGateway](#tileentityendgateway)
- [TileEntityEndPortal](#tileentityendportal)
- [TileEntityFlowerPot](#tileentityflowerpot)
- [TileEntityFurnace](#tileentityfurnace)
- [TileEntityHopper](#tileentityhopper)
- [TileEntityLockable](#tileentitylockable)
- [TileEntityLockableLoot](#tileentitylockableloot)
- [TileEntityMobSpawner](#tileentitymobspawner)
- [TileEntityNote](#tileentitynote)
- [TileEntityPiston](#tileentitypiston)
- [TileEntityShulkerBox](#tileentityshulkerbox)
- [TileEntityShulkerBox.AnimationStatus](#tileentityshulkerbox.animationstatus)
- [TileEntitySign](#tileentitysign)
- [TileEntitySkull](#tileentityskull)
- [TileEntityStructure](#tileentitystructure)
- [TileEntityStructure.Mode](#tileentitystructure.mode)
## BannerPattern

*enum* `net.minecraft.tileentity.BannerPattern`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<BannerPattern>

### Fields
- `public static final BannerPattern BASE`
- `public static final BannerPattern SQUARE_BOTTOM_LEFT`
- `public static final BannerPattern SQUARE_BOTTOM_RIGHT`
- `public static final BannerPattern SQUARE_TOP_LEFT`
- `public static final BannerPattern SQUARE_TOP_RIGHT`
- `public static final BannerPattern STRIPE_BOTTOM`
- `public static final BannerPattern STRIPE_TOP`
- `public static final BannerPattern STRIPE_LEFT`
- `public static final BannerPattern STRIPE_RIGHT`
- `public static final BannerPattern STRIPE_CENTER`
- `public static final BannerPattern STRIPE_MIDDLE`
- `public static final BannerPattern STRIPE_DOWNRIGHT`
- `public static final BannerPattern STRIPE_DOWNLEFT`
- `public static final BannerPattern STRIPE_SMALL`
- `public static final BannerPattern CROSS`
- `public static final BannerPattern STRAIGHT_CROSS`
- `public static final BannerPattern TRIANGLE_BOTTOM`
- `public static final BannerPattern TRIANGLE_TOP`
- `public static final BannerPattern TRIANGLES_BOTTOM`
- `public static final BannerPattern TRIANGLES_TOP`
- `public static final BannerPattern DIAGONAL_LEFT`
- `public static final BannerPattern DIAGONAL_RIGHT`
- `public static final BannerPattern DIAGONAL_LEFT_MIRROR`
- `public static final BannerPattern DIAGONAL_RIGHT_MIRROR`
- `public static final BannerPattern CIRCLE_MIDDLE`
- `public static final BannerPattern RHOMBUS_MIDDLE`
- `public static final BannerPattern HALF_VERTICAL`
- `public static final BannerPattern HALF_HORIZONTAL`
- `public static final BannerPattern HALF_VERTICAL_MIRROR`
- `public static final BannerPattern HALF_HORIZONTAL_MIRROR`
- `public static final BannerPattern BORDER`
- `public static final BannerPattern CURLY_BORDER`
- `public static final BannerPattern CREEPER`
- `public static final BannerPattern GRADIENT`
- `public static final BannerPattern GRADIENT_UP`
- `public static final BannerPattern BRICKS`
- `public static final BannerPattern SKULL`
- `public static final BannerPattern FLOWER`
- `public static final BannerPattern MOJANG`

### Methods
- `public static BannerPattern[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (BannerPattern c : BannerPattern.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static BannerPattern valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public java.lang.String getFileName()`
- `public java.lang.String getHashname()`
- `public java.lang.String[] getPatterns()`
- `public boolean hasPattern()`
- `public boolean hasPatternItem()`
- `public ItemStack getPatternItem()`
- `public static BannerPattern byHash(java.lang.String hash)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## CommandBlockBaseLogic

*class* `net.minecraft.tileentity.CommandBlockBaseLogic`

All Implemented Interfaces: ICommandSender

### Methods
- `public int getSuccessCount()`
- `public void setSuccessCount(int successCountIn)`
- `public ITextComponent getLastOutput()`
- `public NBTTagCompound writeToNBT(NBTTagCompound p_189510_1_)`
- `public void readDataFromNBT(NBTTagCompound nbt)`
- `public boolean canUseCommand(int permLevel,  java.lang.String commandName)`
- `public void setCommand(java.lang.String command)`
- `public java.lang.String getCommand()`
- `public boolean trigger(World worldIn)`
- `public java.lang.String getName()`
- `public void setName(java.lang.String name)`
- `public void sendMessage(ITextComponent component)`
- `public boolean sendCommandFeedback()`
- `public void setCommandStat(CommandResultStats.Type type,  int amount)`
- `public abstract void updateCommand()`
- `public abstract int getCommandBlockType()`
- `public abstract void fillInInfo(ByteBuf buf)`
- `public void setLastOutput(ITextComponent lastOutputMessage)`
- `public void setTrackOutput(boolean shouldTrackOutput)`
- `public boolean shouldTrackOutput()`
- `public boolean tryOpenEditCommandBlock(EntityPlayer playerIn)`
- `public CommandResultStats getCommandResultStats()`

### Inherited methods
- from `net.minecraft.command.ICommandSender`: `getCommandSenderEntity`, `getDisplayName`, `getEntityWorld`, `getPosition`, `getPositionVector`, `getServer`

## IHopper

*interface* `net.minecraft.tileentity.IHopper`

All Superinterfaces: IInventory, IWorldNameable

### Methods
- `World getWorld()`
- `double getXPos()`
- `double getYPos()`
- `double getZPos()`

### Inherited methods
- from `net.minecraft.inventory.IInventory`: `clear`, `closeInventory`, `decrStackSize`, `getField`, `getFieldCount`, `getInventoryStackLimit`, `getSizeInventory`, `getStackInSlot`, `isEmpty`, `isItemValidForSlot`, `isUsableByPlayer`, `markDirty`, `openInventory`, `removeStackFromSlot`, `setField`, `setInventorySlotContents`
- from `net.minecraft.world.IWorldNameable`: `getDisplayName`, `getName`, `hasCustomName`

## MobSpawnerBaseLogic

*class* `net.minecraft.tileentity.MobSpawnerBaseLogic`

### Methods
- `public void setEntityId(ResourceLocation id)`
- `public void updateSpawner()`
- `public void readFromNBT(NBTTagCompound nbt)`
- `public NBTTagCompound writeToNBT(NBTTagCompound p_189530_1_)`
- `public boolean setDelayToMin(int delay)`
- `public Entity getCachedEntity()`
- `public void setNextSpawnData(WeightedSpawnerEntity p_184993_1_)`
- `public abstract void broadcastEvent(int id)`
- `public abstract World getSpawnerWorld()`
- `public abstract BlockPos getSpawnerPosition()`
- `public double getMobRotation()`
- `public double getPrevMobRotation()`
- `public Entity getSpawnerEntity()`

## TileEntity

*class* `net.minecraft.tileentity.TileEntity`

All Implemented Interfaces: ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `protected World world`
- `protected BlockPos pos`
- `protected boolean tileEntityInvalid`
- `protected Block blockType`
- `public static final AxisAlignedBB INFINITE_EXTENT_AABB`
  Sometimes default render bounding box: infinite in scope. Used to control rendering on TileEntitySpecialRenderer.

### Methods
- `public static void register(java.lang.String id,  java.lang.Class<? extends TileEntity> clazz)`
- `public static ResourceLocation getKey(java.lang.Class<? extends TileEntity> clazz)`
- `public World getWorld()`
- `public void setWorld(World worldIn)`
- `public boolean hasWorld()`
- `public void readFromNBT(NBTTagCompound compound)`
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public static TileEntity create(World worldIn,  NBTTagCompound compound)`
- `protected void setWorldCreate(World worldIn)`
- `public int getBlockMetadata()`
- `public void markDirty()`
- `public double getDistanceSq(double x,  double y,  double z)`
- `public double getMaxRenderDistanceSquared()`
- `public BlockPos getPos()`
- `public Block getBlockType()`
- `public SPacketUpdateTileEntity getUpdatePacket()`
- `public NBTTagCompound getUpdateTag()`
- `public boolean isInvalid()`
- `public void invalidate()`
- `public void validate()`
- `public boolean receiveClientEvent(int id,  int type)`
- `public void updateContainingBlockInfo()`
- `public void addInfoToCrashReport(CrashReportCategory reportCategory)`
- `public void setPos(BlockPos posIn)`
- `public boolean onlyOpsCanSetNbt()`
- `public ITextComponent getDisplayName()`
- `public void rotate(Rotation rotationIn)`
- `public void mirror(Mirror mirrorIn)`
- `public void onDataPacket(NetworkManager net,  SPacketUpdateTileEntity pkt)`
  Called when you receive a TileEntityData packet for the location this
   TileEntity is currently in. On the client, the NetworkManager will always
   be the remote server. On the server, it will be whomever is responsible for
   sending the packet.
  - param: net - The NetworkManager the packet originated from
  - param: pkt - The data packet
- `public void handleUpdateTag(NBTTagCompound tag)`
  Called when the chunk's TE update tag, gotten from getUpdateTag(), is received on the client.
  
   Used to handle this tag in a special way. By default this simply calls readFromNBT(NBTTagCompound).
  - param: tag - The NBTTagCompound sent from getUpdateTag()
- `public void onChunkUnload()`
  Called when the chunk this TileEntity is on is Unloaded.
- `public boolean shouldRefresh(World world,  BlockPos pos,  IBlockState oldState,  IBlockState newSate)`
  Called from Chunk.setBlockIDWithMetadata and Chunk.fillChunk, determines if this tile entity should be re-created when the ID, or Metadata changes.
   Use with caution as this will leave straggler TileEntities, or create conflicts with other TileEntities if not used properly.
  - param: world - Current world
  - param: pos - Tile's world position
  - param: oldState - The old ID of the block
  - param: newState - The new ID of the block (May be the same)
  - returns: true forcing the invalidation of the existing TE, false not to invalidate the existing TE
- `public boolean shouldRenderInPass(int pass)`
- `public AxisAlignedBB getRenderBoundingBox()`
  Return an AxisAlignedBB that controls the visible scope of a TileEntitySpecialRenderer associated with this TileEntity
   Defaults to the collision bounding box Block#getCollisionBoundingBoxFromPool(World, int, int, int) associated with the block
   at this location.
  - returns: an appropriately size AxisAlignedBB for the TileEntity
- `public boolean canRenderBreaking()`
  Checks if this tile entity knows how to render its 'breaking' overlay effect.
   If this returns true, The TileEntitySpecialRenderer will be called again with break progress set.
  - returns: True to re-render tile with breaking effect.
- `public NBTTagCompound getTileData()`
  Gets a NBTTagCompound that can be used to store custom data for this tile entity.
   It will be written, and read from disc, so it persists over world saves.
  - returns: A compound tag for custom data
- `public boolean restrictNBTCopy()`
  Determines if the player can overwrite the NBT data of this tile entity while they place it using a ItemStack.
   Added as a fix for MC-75630 - Exploit with signs and command blocks
  - returns: True to prevent NBT copy, false to allow.
- `public void onLoad()`
  Called when this is first added to the world (by World.addTileEntity(TileEntity)).
   Override instead of adding if (firstTick) stuff in update.
- `public boolean hasFastRenderer()`
  If the TileEntitySpecialRenderer associated with this TileEntity can be batched in with another renderers, and won't access the GL state.
   If TileEntity returns true, then TESR should have the same functionality as (and probably extend) the FastTESR class.
- `public boolean hasCapability(Capability<?> capability,  EnumFacing facing)`
  Description copied from interface: ICapabilityProvider
  Determines if this object has support for the capability in question on the specific side.
   The return value of this MIGHT change during runtime if this object gains or loses support
   for a capability. It is not required to call this function before calling
   ICapabilityProvider.getCapability(Capability, EnumFacing).
  
   Basically, this method functions analogously to Map.containsKey(Object).
  
   Example:
   A Pipe getting a cover placed on one side causing it lose the Inventory attachment function for that side.
  
   This is a light weight version of getCapability, intended for metadata uses.
  - param: capability - The capability to check
  - param: facing - The Side to check from:
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: True if this object supports the capability. If true, then ICapabilityProvider.getCapability(Capability, EnumFacing)
 must not return null.
- `public <T> T getCapability(Capability<T> capability,  EnumFacing facing)`
  Description copied from interface: ICapabilityProvider
  Retrieves the handler for the capability requested on the specific side.
  
   The return value CAN be null if the object does not support the capability.
   The return value CAN be the same for multiple faces.
  
   Basically, this method functions analogously to Map.get(Object).
  - param: capability - The capability to check
  - param: facing - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested capability. Must NOT be null when ICapabilityProvider.hasCapability(Capability, EnumFacing)
 would return true.
- `public void deserializeNBT(NBTTagCompound nbt)`
- `public NBTTagCompound serializeNBT()`

## TileEntityBanner

*class* `net.minecraft.tileentity.TileEntityBanner`

All Implemented Interfaces: IWorldNameable, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public void setItemValues(ItemStack stack,  boolean p_175112_2_)`
- `public java.lang.String getName()`
- `public boolean hasCustomName()`
- `public ITextComponent getDisplayName()`
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public void readFromNBT(NBTTagCompound compound)`
- `public SPacketUpdateTileEntity getUpdatePacket()`
- `public NBTTagCompound getUpdateTag()`
- `public static int getPatterns(ItemStack stack)`
- `public java.util.List<BannerPattern> getPatternList()`
- `public java.util.List<EnumDyeColor> getColorList()`
- `public java.lang.String getPatternResourceLocation()`
- `public static void removeBannerData(ItemStack stack)`
- `public ItemStack getItem()`
- `public static EnumDyeColor getColor(ItemStack p_190616_0_)`

### Inherited methods
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getCapability`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getWorld`, `handleUpdateTag`, `hasCapability`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`

## TileEntityBeacon

*class* `net.minecraft.tileentity.TileEntityBeacon`

All Implemented Interfaces: IInventory, ISidedInventory, ITickable, IInteractionObject, ILockableContainer, IWorldNameable, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public static final Potion[][] EFFECTS_LIST`

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public void update()`
- `public void updateBeacon()`
- `public java.util.List<TileEntityBeacon.BeamSegment> getBeamSegments()`
- `public float shouldBeamRender()`
- `public int getLevels()`
- `public SPacketUpdateTileEntity getUpdatePacket()`
- `public NBTTagCompound getUpdateTag()`
- `public double getMaxRenderDistanceSquared()`
- `public void readFromNBT(NBTTagCompound compound)`
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public int getSizeInventory()`
- `public boolean isEmpty()`
- `public ItemStack getStackInSlot(int index)`
- `public ItemStack decrStackSize(int index,  int count)`
- `public ItemStack removeStackFromSlot(int index)`
- `public void setInventorySlotContents(int index,  ItemStack stack)`
- `public java.lang.String getName()`
- `public boolean hasCustomName()`
- `public void setName(java.lang.String name)`
- `public int getInventoryStackLimit()`
- `public boolean isUsableByPlayer(EntityPlayer player)`
- `public void openInventory(EntityPlayer player)`
- `public void closeInventory(EntityPlayer player)`
- `public boolean isItemValidForSlot(int index,  ItemStack stack)`
- `public java.lang.String getGuiID()`
- `public Container createContainer(InventoryPlayer playerInventory,  EntityPlayer playerIn)`
- `public int getField(int id)`
- `public void setField(int id,  int value)`
- `public int getFieldCount()`
- `public void clear()`
- `public boolean receiveClientEvent(int id,  int type)`
- `public int[] getSlotsForFace(EnumFacing side)`
- `public boolean canInsertItem(int index,  ItemStack itemStackIn,  EnumFacing direction)`
- `public boolean canExtractItem(int index,  ItemStack stack,  EnumFacing direction)`

### Inherited methods
- from `net.minecraft.tileentity.TileEntityLockable`: `createUnSidedHandler`, `getCapability`, `getDisplayName`, `getLockCode`, `hasCapability`, `isLocked`, `setLockCode`
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getDistanceSq`, `getKey`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getWorld`, `handleUpdateTag`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`
- from `net.minecraft.inventory.IInventory`: `markDirty`
- from `net.minecraft.world.IWorldNameable`: `getDisplayName`

## TileEntityBeacon.BeamSegment

*class* `net.minecraft.tileentity.TileEntityBeacon.BeamSegment`

Enclosing class: TileEntityBeacon

### Methods
- `protected void incrementHeight()`
- `public float[] getColors()`
- `public int getHeight()`

## TileEntityBed

*class* `net.minecraft.tileentity.TileEntityBed`

All Implemented Interfaces: ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public void setItemValues(ItemStack p_193051_1_)`
- `public void readFromNBT(NBTTagCompound compound)`
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public NBTTagCompound getUpdateTag()`
- `public SPacketUpdateTileEntity getUpdatePacket()`
- `public EnumDyeColor getColor()`
- `public void setColor(EnumDyeColor color)`
- `public boolean isHeadPiece()`
- `public ItemStack getItemStack()`

### Inherited methods
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getCapability`, `getDisplayName`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getWorld`, `handleUpdateTag`, `hasCapability`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`

## TileEntityBrewingStand

*class* `net.minecraft.tileentity.TileEntityBrewingStand`

All Implemented Interfaces: IInventory, ISidedInventory, ITickable, IInteractionObject, ILockableContainer, IWorldNameable, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public java.lang.String getName()`
- `public boolean hasCustomName()`
- `public void setName(java.lang.String name)`
- `public int getSizeInventory()`
- `public boolean isEmpty()`
- `public void update()`
- `public boolean[] createFilledSlotsArray()`
- `public static void registerFixesBrewingStand(DataFixer fixer)`
- `public void readFromNBT(NBTTagCompound compound)`
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public ItemStack getStackInSlot(int index)`
- `public ItemStack decrStackSize(int index,  int count)`
- `public ItemStack removeStackFromSlot(int index)`
- `public void setInventorySlotContents(int index,  ItemStack stack)`
- `public int getInventoryStackLimit()`
- `public boolean isUsableByPlayer(EntityPlayer player)`
- `public void openInventory(EntityPlayer player)`
- `public void closeInventory(EntityPlayer player)`
- `public boolean isItemValidForSlot(int index,  ItemStack stack)`
- `public int[] getSlotsForFace(EnumFacing side)`
- `public boolean canInsertItem(int index,  ItemStack itemStackIn,  EnumFacing direction)`
- `public boolean canExtractItem(int index,  ItemStack stack,  EnumFacing direction)`
- `public java.lang.String getGuiID()`
- `public Container createContainer(InventoryPlayer playerInventory,  EntityPlayer playerIn)`
- `public int getField(int id)`
- `public void setField(int id,  int value)`
- `public <T> T getCapability(Capability<T> capability,  EnumFacing facing)`
  Description copied from interface: ICapabilityProvider
  Retrieves the handler for the capability requested on the specific side.
  
   The return value CAN be null if the object does not support the capability.
   The return value CAN be the same for multiple faces.
  
   Basically, this method functions analogously to Map.get(Object).
  - param: capability - The capability to check
  - param: facing - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested capability. Must NOT be null when ICapabilityProvider.hasCapability(Capability, EnumFacing)
 would return true.
- `public int getFieldCount()`
- `public void clear()`

### Inherited methods
- from `net.minecraft.tileentity.TileEntityLockable`: `createUnSidedHandler`, `getDisplayName`, `getLockCode`, `hasCapability`, `isLocked`, `setLockCode`
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getUpdatePacket`, `getUpdateTag`, `getWorld`, `handleUpdateTag`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`
- from `net.minecraft.inventory.IInventory`: `markDirty`
- from `net.minecraft.world.IWorldNameable`: `getDisplayName`

## TileEntityChest

*class* `net.minecraft.tileentity.TileEntityChest`

All Implemented Interfaces: IInventory, ITickable, IInteractionObject, ILockableContainer, IWorldNameable, ILootContainer, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public boolean adjacentChestChecked`
- `public TileEntityChest adjacentChestZNeg`
- `public TileEntityChest adjacentChestXPos`
- `public TileEntityChest adjacentChestXNeg`
- `public TileEntityChest adjacentChestZPos`
- `public float lidAngle`
- `public float prevLidAngle`
- `public int numPlayersUsing`
- `public VanillaDoubleChestItemHandler doubleChestHandler`

### Inherited fields
- from `net.minecraft.tileentity.TileEntityLockableLoot`: `customName`, `lootTable`, `lootTableSeed`
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public int getSizeInventory()`
- `public boolean isEmpty()`
- `public java.lang.String getName()`
- `public static void registerFixesChest(DataFixer fixer)`
- `public void readFromNBT(NBTTagCompound compound)`
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public int getInventoryStackLimit()`
- `public void updateContainingBlockInfo()`
- `public void checkForAdjacentChests()`
- `protected TileEntityChest getAdjacentChest(EnumFacing side)`
- `public void update()`
- `public boolean receiveClientEvent(int id,  int type)`
- `public void openInventory(EntityPlayer player)`
- `public void closeInventory(EntityPlayer player)`
- `public <T> T getCapability(Capability<T> capability,  EnumFacing facing)`
  Description copied from interface: ICapabilityProvider
  Retrieves the handler for the capability requested on the specific side.
  
   The return value CAN be null if the object does not support the capability.
   The return value CAN be the same for multiple faces.
  
   Basically, this method functions analogously to Map.get(Object).
  - param: capability - The capability to check
  - param: facing - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested capability. Must NOT be null when ICapabilityProvider.hasCapability(Capability, EnumFacing)
 would return true.
- `public IItemHandler getSingleChestHandler()`
- `public void invalidate()`
- `public BlockChest.Type getChestType()`
- `public java.lang.String getGuiID()`
- `public Container createContainer(InventoryPlayer playerInventory,  EntityPlayer playerIn)`
- `protected NonNullList<ItemStack> getItems()`

### Inherited methods
- from `net.minecraft.tileentity.TileEntityLockableLoot`: `checkLootAndRead`, `checkLootAndWrite`, `clear`, `decrStackSize`, `fillWithLoot`, `getField`, `getFieldCount`, `getLootTable`, `getStackInSlot`, `hasCustomName`, `isItemValidForSlot`, `isUsableByPlayer`, `removeStackFromSlot`, `setCustomName`, `setField`, `setInventorySlotContents`, `setLootTable`
- from `net.minecraft.tileentity.TileEntityLockable`: `createUnSidedHandler`, `getDisplayName`, `getLockCode`, `hasCapability`, `isLocked`, `setLockCode`
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getUpdatePacket`, `getUpdateTag`, `getWorld`, `handleUpdateTag`, `hasFastRenderer`, `hasWorld`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `validate`
- from `net.minecraft.inventory.IInventory`: `markDirty`

## TileEntityCommandBlock

*class* `net.minecraft.tileentity.TileEntityCommandBlock`

All Implemented Interfaces: ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public void readFromNBT(NBTTagCompound compound)`
- `public SPacketUpdateTileEntity getUpdatePacket()`
- `public boolean onlyOpsCanSetNbt()`
- `public CommandBlockBaseLogic getCommandBlockLogic()`
- `public CommandResultStats getCommandResultStats()`
- `public void setPowered(boolean poweredIn)`
- `public boolean isPowered()`
- `public boolean isAuto()`
- `public void setAuto(boolean autoIn)`
- `public boolean isConditionMet()`
- `public boolean setConditionMet()`
- `public boolean isSendToClient()`
- `public void setSendToClient(boolean p_184252_1_)`
- `public TileEntityCommandBlock.Mode getMode()`
- `public boolean isConditional()`
- `public void validate()`

### Inherited methods
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getCapability`, `getDisplayName`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getUpdateTag`, `getWorld`, `handleUpdateTag`, `hasCapability`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`

## TileEntityCommandBlock.Mode

*enum* `net.minecraft.tileentity.TileEntityCommandBlock.Mode`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<TileEntityCommandBlock.Mode>

Enclosing class: TileEntityCommandBlock

### Fields
- `public static final TileEntityCommandBlock.Mode SEQUENCE`
- `public static final TileEntityCommandBlock.Mode AUTO`
- `public static final TileEntityCommandBlock.Mode REDSTONE`

### Methods
- `public static TileEntityCommandBlock.Mode[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (TileEntityCommandBlock.Mode c : TileEntityCommandBlock.Mode.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static TileEntityCommandBlock.Mode valueOf(java.lang.String name)`
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

## TileEntityComparator

*class* `net.minecraft.tileentity.TileEntityComparator`

All Implemented Interfaces: ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public void readFromNBT(NBTTagCompound compound)`
- `public int getOutputSignal()`
- `public void setOutputSignal(int outputSignalIn)`

### Inherited methods
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getCapability`, `getDisplayName`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getUpdatePacket`, `getUpdateTag`, `getWorld`, `handleUpdateTag`, `hasCapability`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`

## TileEntityDaylightDetector

*class* `net.minecraft.tileentity.TileEntityDaylightDetector`

All Implemented Interfaces: ITickable, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public void update()`

### Inherited methods
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getCapability`, `getDisplayName`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getUpdatePacket`, `getUpdateTag`, `getWorld`, `handleUpdateTag`, `hasCapability`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `readFromNBT`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`, `writeToNBT`

## TileEntityDispenser

*class* `net.minecraft.tileentity.TileEntityDispenser`

All Implemented Interfaces: IInventory, IInteractionObject, ILockableContainer, IWorldNameable, ILootContainer, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.tileentity.TileEntityLockableLoot`: `customName`, `lootTable`, `lootTableSeed`
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public int getSizeInventory()`
- `public boolean isEmpty()`
- `public int getDispenseSlot()`
- `public int addItemStack(ItemStack stack)`
- `public java.lang.String getName()`
- `public static void registerFixes(DataFixer fixer)`
- `public void readFromNBT(NBTTagCompound compound)`
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public int getInventoryStackLimit()`
- `public java.lang.String getGuiID()`
- `public Container createContainer(InventoryPlayer playerInventory,  EntityPlayer playerIn)`
- `protected NonNullList<ItemStack> getItems()`

### Inherited methods
- from `net.minecraft.tileentity.TileEntityLockableLoot`: `checkLootAndRead`, `checkLootAndWrite`, `clear`, `closeInventory`, `decrStackSize`, `fillWithLoot`, `getField`, `getFieldCount`, `getLootTable`, `getStackInSlot`, `hasCustomName`, `isItemValidForSlot`, `isUsableByPlayer`, `openInventory`, `removeStackFromSlot`, `setCustomName`, `setField`, `setInventorySlotContents`, `setLootTable`
- from `net.minecraft.tileentity.TileEntityLockable`: `createUnSidedHandler`, `getCapability`, `getDisplayName`, `getLockCode`, `hasCapability`, `isLocked`, `setLockCode`
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getUpdatePacket`, `getUpdateTag`, `getWorld`, `handleUpdateTag`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`
- from `net.minecraft.inventory.IInventory`: `markDirty`

## TileEntityDropper

*class* `net.minecraft.tileentity.TileEntityDropper`

All Implemented Interfaces: IInventory, IInteractionObject, ILockableContainer, IWorldNameable, ILootContainer, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.tileentity.TileEntityLockableLoot`: `customName`, `lootTable`, `lootTableSeed`
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public static void registerFixesDropper(DataFixer fixer)`
- `public java.lang.String getName()`
- `public java.lang.String getGuiID()`

### Inherited methods
- from `net.minecraft.tileentity.TileEntityDispenser`: `addItemStack`, `createContainer`, `getDispenseSlot`, `getInventoryStackLimit`, `getItems`, `getSizeInventory`, `isEmpty`, `readFromNBT`, `registerFixes`, `writeToNBT`
- from `net.minecraft.tileentity.TileEntityLockableLoot`: `checkLootAndRead`, `checkLootAndWrite`, `clear`, `closeInventory`, `decrStackSize`, `fillWithLoot`, `getField`, `getFieldCount`, `getLootTable`, `getStackInSlot`, `hasCustomName`, `isItemValidForSlot`, `isUsableByPlayer`, `openInventory`, `removeStackFromSlot`, `setCustomName`, `setField`, `setInventorySlotContents`, `setLootTable`
- from `net.minecraft.tileentity.TileEntityLockable`: `createUnSidedHandler`, `getCapability`, `getDisplayName`, `getLockCode`, `hasCapability`, `isLocked`, `setLockCode`
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getUpdatePacket`, `getUpdateTag`, `getWorld`, `handleUpdateTag`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`
- from `net.minecraft.inventory.IInventory`: `markDirty`

## TileEntityEnchantmentTable

*class* `net.minecraft.tileentity.TileEntityEnchantmentTable`

All Implemented Interfaces: ITickable, IInteractionObject, IWorldNameable, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public int tickCount`
- `public float pageFlip`
- `public float pageFlipPrev`
- `public float flipT`
- `public float flipA`
- `public float bookSpread`
- `public float bookSpreadPrev`
- `public float bookRotation`
- `public float bookRotationPrev`
- `public float tRot`

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public void readFromNBT(NBTTagCompound compound)`
- `public void update()`
- `public java.lang.String getName()`
- `public boolean hasCustomName()`
- `public void setCustomName(java.lang.String customNameIn)`
- `public ITextComponent getDisplayName()`
- `public Container createContainer(InventoryPlayer playerInventory,  EntityPlayer playerIn)`
- `public java.lang.String getGuiID()`

### Inherited methods
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getCapability`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getUpdatePacket`, `getUpdateTag`, `getWorld`, `handleUpdateTag`, `hasCapability`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`

## TileEntityEnderChest

*class* `net.minecraft.tileentity.TileEntityEnderChest`

All Implemented Interfaces: ITickable, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public float lidAngle`
- `public float prevLidAngle`
- `public int numPlayersUsing`

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public void update()`
- `public boolean receiveClientEvent(int id,  int type)`
- `public void invalidate()`
- `public void openChest()`
- `public void closeChest()`
- `public boolean canBeUsed(EntityPlayer player)`

### Inherited methods
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getCapability`, `getDisplayName`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getUpdatePacket`, `getUpdateTag`, `getWorld`, `handleUpdateTag`, `hasCapability`, `hasFastRenderer`, `hasWorld`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `readFromNBT`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`, `writeToNBT`

## TileEntityEndGateway

*class* `net.minecraft.tileentity.TileEntityEndGateway`

All Implemented Interfaces: ITickable, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public void readFromNBT(NBTTagCompound compound)`
- `public double getMaxRenderDistanceSquared()`
- `public void update()`
- `public boolean isSpawning()`
- `public boolean isCoolingDown()`
- `public float getSpawnPercent(float p_184302_1_)`
- `public float getCooldownPercent(float p_184305_1_)`
- `public SPacketUpdateTileEntity getUpdatePacket()`
- `public NBTTagCompound getUpdateTag()`
- `public void triggerCooldown()`
- `public boolean receiveClientEvent(int id,  int type)`
- `public void teleportEntity(Entity entityIn)`
- `public boolean shouldRenderFace(EnumFacing p_184313_1_)`
- `public int getParticleAmount()`
- `public void setExactPosition(BlockPos p_190603_1_)`

### Inherited methods
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getCapability`, `getDisplayName`, `getDistanceSq`, `getKey`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getWorld`, `handleUpdateTag`, `hasCapability`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`

## TileEntityEndPortal

*class* `net.minecraft.tileentity.TileEntityEndPortal`

All Implemented Interfaces: ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public boolean shouldRenderFace(EnumFacing p_184313_1_)`

### Inherited methods
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getCapability`, `getDisplayName`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getUpdatePacket`, `getUpdateTag`, `getWorld`, `handleUpdateTag`, `hasCapability`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `readFromNBT`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`, `writeToNBT`

## TileEntityFlowerPot

*class* `net.minecraft.tileentity.TileEntityFlowerPot`

All Implemented Interfaces: ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public static void registerFixesFlowerPot(DataFixer fixer)`
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public void readFromNBT(NBTTagCompound compound)`
- `public SPacketUpdateTileEntity getUpdatePacket()`
- `public NBTTagCompound getUpdateTag()`
- `public void setItemStack(ItemStack stack)`
- `public ItemStack getFlowerItemStack()`
- `public Item getFlowerPotItem()`
- `public int getFlowerPotData()`

### Inherited methods
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getCapability`, `getDisplayName`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getWorld`, `handleUpdateTag`, `hasCapability`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`

## TileEntityFurnace

*class* `net.minecraft.tileentity.TileEntityFurnace`

All Implemented Interfaces: IInventory, ISidedInventory, ITickable, IInteractionObject, ILockableContainer, IWorldNameable, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public int getSizeInventory()`
- `public boolean isEmpty()`
- `public ItemStack getStackInSlot(int index)`
- `public ItemStack decrStackSize(int index,  int count)`
- `public ItemStack removeStackFromSlot(int index)`
- `public void setInventorySlotContents(int index,  ItemStack stack)`
- `public java.lang.String getName()`
- `public boolean hasCustomName()`
- `public void setCustomInventoryName(java.lang.String p_145951_1_)`
- `public static void registerFixesFurnace(DataFixer fixer)`
- `public void readFromNBT(NBTTagCompound compound)`
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public int getInventoryStackLimit()`
- `public boolean isBurning()`
- `public static boolean isBurning(IInventory inventory)`
- `public void update()`
- `public int getCookTime(ItemStack stack)`
- `public void smeltItem()`
- `public static int getItemBurnTime(ItemStack stack)`
- `public static boolean isItemFuel(ItemStack stack)`
- `public boolean isUsableByPlayer(EntityPlayer player)`
- `public void openInventory(EntityPlayer player)`
- `public void closeInventory(EntityPlayer player)`
- `public boolean isItemValidForSlot(int index,  ItemStack stack)`
- `public int[] getSlotsForFace(EnumFacing side)`
- `public boolean canInsertItem(int index,  ItemStack itemStackIn,  EnumFacing direction)`
- `public boolean canExtractItem(int index,  ItemStack stack,  EnumFacing direction)`
- `public java.lang.String getGuiID()`
- `public Container createContainer(InventoryPlayer playerInventory,  EntityPlayer playerIn)`
- `public int getField(int id)`
- `public void setField(int id,  int value)`
- `public int getFieldCount()`
- `public void clear()`
- `public <T> T getCapability(Capability<T> capability,  EnumFacing facing)`
  Description copied from interface: ICapabilityProvider
  Retrieves the handler for the capability requested on the specific side.
  
   The return value CAN be null if the object does not support the capability.
   The return value CAN be the same for multiple faces.
  
   Basically, this method functions analogously to Map.get(Object).
  - param: capability - The capability to check
  - param: facing - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested capability. Must NOT be null when ICapabilityProvider.hasCapability(Capability, EnumFacing)
 would return true.

### Inherited methods
- from `net.minecraft.tileentity.TileEntityLockable`: `createUnSidedHandler`, `getDisplayName`, `getLockCode`, `hasCapability`, `isLocked`, `setLockCode`
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getUpdatePacket`, `getUpdateTag`, `getWorld`, `handleUpdateTag`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`
- from `net.minecraft.inventory.IInventory`: `markDirty`
- from `net.minecraft.world.IWorldNameable`: `getDisplayName`

## TileEntityHopper

*class* `net.minecraft.tileentity.TileEntityHopper`

All Implemented Interfaces: IInventory, IHopper, ITickable, IInteractionObject, ILockableContainer, IWorldNameable, ILootContainer, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.tileentity.TileEntityLockableLoot`: `customName`, `lootTable`, `lootTableSeed`
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public static void registerFixesHopper(DataFixer fixer)`
- `public void readFromNBT(NBTTagCompound compound)`
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public int getSizeInventory()`
- `public ItemStack decrStackSize(int index,  int count)`
- `public void setInventorySlotContents(int index,  ItemStack stack)`
- `public java.lang.String getName()`
- `public int getInventoryStackLimit()`
- `public void update()`
- `protected boolean updateHopper()`
- `public boolean isEmpty()`
- `public static boolean pullItems(IHopper hopper)`
- `public static boolean putDropInInventoryAllSlots(IInventory source,  IInventory destination,  EntityItem entity)`
- `protected IItemHandler createUnSidedHandler()`
- `public static ItemStack putStackInInventoryAllSlots(IInventory source,  IInventory destination,  ItemStack stack,  EnumFacing direction)`
- `public static IInventory getSourceInventory(IHopper hopper)`
- `public static java.util.List<EntityItem> getCaptureItems(World worldIn,  double p_184292_1_,  double p_184292_3_,  double p_184292_5_)`
- `public static IInventory getInventoryAtPosition(World worldIn,  double x,  double y,  double z)`
- `public double getXPos()`
- `public double getYPos()`
- `public double getZPos()`
- `public void setTransferCooldown(int ticks)`
- `public boolean mayTransfer()`
- `public java.lang.String getGuiID()`
- `public Container createContainer(InventoryPlayer playerInventory,  EntityPlayer playerIn)`
- `protected NonNullList<ItemStack> getItems()`
- `public long getLastUpdateTime()`

### Inherited methods
- from `net.minecraft.tileentity.TileEntityLockableLoot`: `checkLootAndRead`, `checkLootAndWrite`, `clear`, `closeInventory`, `fillWithLoot`, `getField`, `getFieldCount`, `getLootTable`, `getStackInSlot`, `hasCustomName`, `isItemValidForSlot`, `isUsableByPlayer`, `openInventory`, `removeStackFromSlot`, `setCustomName`, `setField`, `setLootTable`
- from `net.minecraft.tileentity.TileEntityLockable`: `getCapability`, `getDisplayName`, `getLockCode`, `hasCapability`, `isLocked`, `setLockCode`
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getUpdatePacket`, `getUpdateTag`, `getWorld`, `handleUpdateTag`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`
- from `net.minecraft.tileentity.IHopper`: `getWorld`
- from `net.minecraft.inventory.IInventory`: `clear`, `closeInventory`, `getField`, `getFieldCount`, `getStackInSlot`, `isItemValidForSlot`, `isUsableByPlayer`, `markDirty`, `openInventory`, `removeStackFromSlot`, `setField`
- from `net.minecraft.world.IWorldNameable`: `getDisplayName`, `hasCustomName`

## TileEntityLockable

*class* `net.minecraft.tileentity.TileEntityLockable`

All Implemented Interfaces: IInventory, IInteractionObject, ILockableContainer, IWorldNameable, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public void readFromNBT(NBTTagCompound compound)`
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public boolean isLocked()`
- `public LockCode getLockCode()`
- `public void setLockCode(LockCode code)`
- `public ITextComponent getDisplayName()`
- `protected IItemHandler createUnSidedHandler()`
- `public <T> T getCapability(Capability<T> capability,  EnumFacing facing)`
  Description copied from interface: ICapabilityProvider
  Retrieves the handler for the capability requested on the specific side.
  
   The return value CAN be null if the object does not support the capability.
   The return value CAN be the same for multiple faces.
  
   Basically, this method functions analogously to Map.get(Object).
  - param: capability - The capability to check
  - param: facing - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested capability. Must NOT be null when ICapabilityProvider.hasCapability(Capability, EnumFacing)
 would return true.
- `public boolean hasCapability(Capability<?> capability,  EnumFacing facing)`
  Description copied from interface: ICapabilityProvider
  Determines if this object has support for the capability in question on the specific side.
   The return value of this MIGHT change during runtime if this object gains or loses support
   for a capability. It is not required to call this function before calling
   ICapabilityProvider.getCapability(Capability, EnumFacing).
  
   Basically, this method functions analogously to Map.containsKey(Object).
  
   Example:
   A Pipe getting a cover placed on one side causing it lose the Inventory attachment function for that side.
  
   This is a light weight version of getCapability, intended for metadata uses.
  - param: capability - The capability to check
  - param: facing - The Side to check from:
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: True if this object supports the capability. If true, then ICapabilityProvider.getCapability(Capability, EnumFacing)
 must not return null.

### Inherited methods
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getUpdatePacket`, `getUpdateTag`, `getWorld`, `handleUpdateTag`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`
- from `net.minecraft.inventory.IInventory`: `clear`, `closeInventory`, `decrStackSize`, `getField`, `getFieldCount`, `getInventoryStackLimit`, `getSizeInventory`, `getStackInSlot`, `isEmpty`, `isItemValidForSlot`, `isUsableByPlayer`, `markDirty`, `openInventory`, `removeStackFromSlot`, `setField`, `setInventorySlotContents`
- from `net.minecraft.world.IInteractionObject`: `createContainer`, `getGuiID`
- from `net.minecraft.world.IWorldNameable`: `getName`, `hasCustomName`

## TileEntityLockableLoot

*class* `net.minecraft.tileentity.TileEntityLockableLoot`

All Implemented Interfaces: IInventory, IInteractionObject, ILockableContainer, IWorldNameable, ILootContainer, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `protected ResourceLocation lootTable`
- `protected long lootTableSeed`
- `protected java.lang.String customName`

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `protected boolean checkLootAndRead(NBTTagCompound compound)`
- `protected boolean checkLootAndWrite(NBTTagCompound compound)`
- `public void fillWithLoot(EntityPlayer player)`
- `public ResourceLocation getLootTable()`
- `public void setLootTable(ResourceLocation p_189404_1_,  long p_189404_2_)`
- `public boolean hasCustomName()`
- `public void setCustomName(java.lang.String p_190575_1_)`
- `public ItemStack getStackInSlot(int index)`
- `public ItemStack decrStackSize(int index,  int count)`
- `public ItemStack removeStackFromSlot(int index)`
- `public void setInventorySlotContents(int index,  ItemStack stack)`
- `public boolean isUsableByPlayer(EntityPlayer player)`
- `public void openInventory(EntityPlayer player)`
- `public void closeInventory(EntityPlayer player)`
- `public boolean isItemValidForSlot(int index,  ItemStack stack)`
- `public int getField(int id)`
- `public void setField(int id,  int value)`
- `public int getFieldCount()`
- `public void clear()`
- `protected abstract NonNullList<ItemStack> getItems()`

### Inherited methods
- from `net.minecraft.tileentity.TileEntityLockable`: `createUnSidedHandler`, `getCapability`, `getDisplayName`, `getLockCode`, `hasCapability`, `isLocked`, `readFromNBT`, `setLockCode`, `writeToNBT`
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getUpdatePacket`, `getUpdateTag`, `getWorld`, `handleUpdateTag`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`
- from `net.minecraft.inventory.IInventory`: `getInventoryStackLimit`, `getSizeInventory`, `isEmpty`, `markDirty`
- from `net.minecraft.world.IInteractionObject`: `createContainer`, `getGuiID`
- from `net.minecraft.world.IWorldNameable`: `getName`

## TileEntityMobSpawner

*class* `net.minecraft.tileentity.TileEntityMobSpawner`

All Implemented Interfaces: ITickable, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public static void registerFixesMobSpawner(DataFixer fixer)`
- `public void readFromNBT(NBTTagCompound compound)`
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public void update()`
- `public SPacketUpdateTileEntity getUpdatePacket()`
- `public NBTTagCompound getUpdateTag()`
- `public boolean receiveClientEvent(int id,  int type)`
- `public boolean onlyOpsCanSetNbt()`
- `public MobSpawnerBaseLogic getSpawnerBaseLogic()`

### Inherited methods
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getCapability`, `getDisplayName`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getWorld`, `handleUpdateTag`, `hasCapability`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`

## TileEntityNote

*class* `net.minecraft.tileentity.TileEntityNote`

All Implemented Interfaces: ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public byte note`
- `public boolean previousRedstoneState`

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public void readFromNBT(NBTTagCompound compound)`
- `public void changePitch()`
- `public void triggerNote(World worldIn,  BlockPos posIn)`

### Inherited methods
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getCapability`, `getDisplayName`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getUpdatePacket`, `getUpdateTag`, `getWorld`, `handleUpdateTag`, `hasCapability`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`

## TileEntityPiston

*class* `net.minecraft.tileentity.TileEntityPiston`

All Implemented Interfaces: ITickable, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public IBlockState getPistonState()`
- `public NBTTagCompound getUpdateTag()`
- `public int getBlockMetadata()`
- `public boolean isExtending()`
- `public EnumFacing getFacing()`
- `public boolean shouldPistonHeadBeRendered()`
- `public float getProgress(float ticks)`
- `public float getOffsetX(float ticks)`
- `public float getOffsetY(float ticks)`
- `public float getOffsetZ(float ticks)`
- `public AxisAlignedBB getAABB(IBlockAccess p_184321_1_,  BlockPos p_184321_2_)`
- `public AxisAlignedBB getAABB(IBlockAccess p_184319_1_,  BlockPos p_184319_2_,  float p_184319_3_)`
- `public void clearPistonTileEntity()`
- `public void update()`
- `public static void registerFixesPiston(DataFixer fixer)`
- `public void readFromNBT(NBTTagCompound compound)`
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public void addCollissionAABBs(World p_190609_1_,  BlockPos p_190609_2_,  AxisAlignedBB p_190609_3_,  java.util.List<AxisAlignedBB> p_190609_4_,  Entity p_190609_5_)`

### Inherited methods
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockType`, `getCapability`, `getDisplayName`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getUpdatePacket`, `getWorld`, `handleUpdateTag`, `hasCapability`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`

## TileEntityShulkerBox

*class* `net.minecraft.tileentity.TileEntityShulkerBox`

All Implemented Interfaces: IInventory, ISidedInventory, ITickable, IInteractionObject, ILockableContainer, IWorldNameable, ILootContainer, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.tileentity.TileEntityLockableLoot`: `customName`, `lootTable`, `lootTableSeed`
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public void update()`
- `protected void updateAnimation()`
- `public TileEntityShulkerBox.AnimationStatus getAnimationStatus()`
- `public AxisAlignedBB getBoundingBox(IBlockState p_190584_1_)`
- `public AxisAlignedBB getBoundingBox(EnumFacing p_190587_1_)`
- `public int getSizeInventory()`
- `public int getInventoryStackLimit()`
- `public boolean receiveClientEvent(int id,  int type)`
- `public void openInventory(EntityPlayer player)`
- `public void closeInventory(EntityPlayer player)`
- `public Container createContainer(InventoryPlayer playerInventory,  EntityPlayer playerIn)`
- `public java.lang.String getGuiID()`
- `public java.lang.String getName()`
- `public static void registerFixesShulkerBox(DataFixer fixer)`
- `public void readFromNBT(NBTTagCompound compound)`
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public void loadFromNbt(NBTTagCompound compound)`
- `public NBTTagCompound saveToNbt(NBTTagCompound compound)`
- `protected NonNullList<ItemStack> getItems()`
- `public boolean isEmpty()`
- `public int[] getSlotsForFace(EnumFacing side)`
- `public boolean canInsertItem(int index,  ItemStack itemStackIn,  EnumFacing direction)`
- `public boolean canExtractItem(int index,  ItemStack stack,  EnumFacing direction)`
- `public void clear()`
- `public boolean isCleared()`
- `public float getProgress(float p_190585_1_)`
- `public EnumDyeColor getColor()`
- `public SPacketUpdateTileEntity getUpdatePacket()`
- `public boolean isDestroyedByCreativePlayer()`
- `public void setDestroyedByCreativePlayer(boolean p_190579_1_)`
- `public boolean shouldDrop()`
- `protected IItemHandler createUnSidedHandler()`

### Inherited methods
- from `net.minecraft.tileentity.TileEntityLockableLoot`: `checkLootAndRead`, `checkLootAndWrite`, `decrStackSize`, `fillWithLoot`, `getField`, `getFieldCount`, `getLootTable`, `getStackInSlot`, `hasCustomName`, `isItemValidForSlot`, `isUsableByPlayer`, `removeStackFromSlot`, `setCustomName`, `setField`, `setInventorySlotContents`, `setLootTable`
- from `net.minecraft.tileentity.TileEntityLockable`: `getCapability`, `getDisplayName`, `getLockCode`, `hasCapability`, `isLocked`, `setLockCode`
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getUpdateTag`, `getWorld`, `handleUpdateTag`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`
- from `net.minecraft.inventory.IInventory`: `decrStackSize`, `getField`, `getFieldCount`, `getStackInSlot`, `isItemValidForSlot`, `isUsableByPlayer`, `markDirty`, `removeStackFromSlot`, `setField`, `setInventorySlotContents`
- from `net.minecraft.world.IWorldNameable`: `getDisplayName`, `hasCustomName`

## TileEntityShulkerBox.AnimationStatus

*enum* `net.minecraft.tileentity.TileEntityShulkerBox.AnimationStatus`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<TileEntityShulkerBox.AnimationStatus>

Enclosing class: TileEntityShulkerBox

### Fields
- `public static final TileEntityShulkerBox.AnimationStatus CLOSED`
- `public static final TileEntityShulkerBox.AnimationStatus OPENING`
- `public static final TileEntityShulkerBox.AnimationStatus OPENED`
- `public static final TileEntityShulkerBox.AnimationStatus CLOSING`

### Methods
- `public static TileEntityShulkerBox.AnimationStatus[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (TileEntityShulkerBox.AnimationStatus c : TileEntityShulkerBox.AnimationStatus.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static TileEntityShulkerBox.AnimationStatus valueOf(java.lang.String name)`
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

## TileEntitySign

*class* `net.minecraft.tileentity.TileEntitySign`

All Implemented Interfaces: ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public final ITextComponent[] signText`
- `public int lineBeingEdited`

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `protected void setWorldCreate(World worldIn)`
- `public void readFromNBT(NBTTagCompound compound)`
- `public SPacketUpdateTileEntity getUpdatePacket()`
- `public NBTTagCompound getUpdateTag()`
- `public boolean onlyOpsCanSetNbt()`
- `public boolean getIsEditable()`
- `public void setEditable(boolean isEditableIn)`
- `public void setPlayer(EntityPlayer playerIn)`
- `public EntityPlayer getPlayer()`
- `public boolean executeCommand(EntityPlayer playerIn)`
- `public CommandResultStats getStats()`

### Inherited methods
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getCapability`, `getDisplayName`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getWorld`, `handleUpdateTag`, `hasCapability`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`

## TileEntitySkull

*class* `net.minecraft.tileentity.TileEntitySkull`

All Implemented Interfaces: ITickable, ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public static void setProfileCache(PlayerProfileCache profileCacheIn)`
- `public static void setSessionService(MinecraftSessionService sessionServiceIn)`
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public void readFromNBT(NBTTagCompound compound)`
- `public void update()`
- `public float getAnimationProgress(float p_184295_1_)`
- `public GameProfile getPlayerProfile()`
- `public SPacketUpdateTileEntity getUpdatePacket()`
- `public NBTTagCompound getUpdateTag()`
- `public void setType(int type)`
- `public void setPlayerProfile(GameProfile playerProfile)`
- `public static GameProfile updateGameprofile(GameProfile input)`
- `public int getSkullType()`
- `public int getSkullRotation()`
- `public void setSkullRotation(int rotation)`
- `public void mirror(Mirror mirrorIn)`
- `public void rotate(Rotation rotationIn)`

### Inherited methods
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getCapability`, `getDisplayName`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getWorld`, `handleUpdateTag`, `hasCapability`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`

## TileEntityStructure

*class* `net.minecraft.tileentity.TileEntityStructure`

All Implemented Interfaces: ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.tileentity.TileEntity`: `blockType`, `INFINITE_EXTENT_AABB`, `pos`, `tileEntityInvalid`, `world`

### Methods
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public void readFromNBT(NBTTagCompound compound)`
- `public SPacketUpdateTileEntity getUpdatePacket()`
- `public NBTTagCompound getUpdateTag()`
- `public boolean usedBy(EntityPlayer player)`
- `public java.lang.String getName()`
- `public void setName(java.lang.String nameIn)`
- `public void createdBy(EntityLivingBase p_189720_1_)`
- `public BlockPos getPosition()`
- `public void setPosition(BlockPos posIn)`
- `public BlockPos getStructureSize()`
- `public void setSize(BlockPos sizeIn)`
- `public Mirror getMirror()`
- `public void setMirror(Mirror mirrorIn)`
- `public void setRotation(Rotation rotationIn)`
- `public void setMetadata(java.lang.String metadataIn)`
- `public Rotation getRotation()`
- `public java.lang.String getMetadata()`
- `public TileEntityStructure.Mode getMode()`
- `public void setMode(TileEntityStructure.Mode modeIn)`
- `public void setIgnoresEntities(boolean ignoreEntitiesIn)`
- `public void setIntegrity(float integrityIn)`
- `public void setSeed(long seedIn)`
- `public void nextMode()`
- `public boolean ignoresEntities()`
- `public float getIntegrity()`
- `public long getSeed()`
- `public boolean detectSize()`
- `public void writeCoordinates(ByteBuf buf)`
- `public boolean save()`
- `public boolean save(boolean writeToDisk)`
- `public boolean load()`
- `public boolean load(boolean requireMatchingSize)`
- `public void unloadStructure()`
- `public boolean isStructureLoadable()`
- `public boolean isPowered()`
- `public void setPowered(boolean poweredIn)`
- `public boolean showsAir()`
- `public void setShowAir(boolean showAirIn)`
- `public boolean showsBoundingBox()`
- `public void setShowBoundingBox(boolean showBoundingBoxIn)`
- `public ITextComponent getDisplayName()`

### Inherited methods
- from `net.minecraft.tileentity.TileEntity`: `addInfoToCrashReport`, `canRenderBreaking`, `create`, `deserializeNBT`, `getBlockMetadata`, `getBlockType`, `getCapability`, `getDistanceSq`, `getKey`, `getMaxRenderDistanceSquared`, `getPos`, `getRenderBoundingBox`, `getTileData`, `getWorld`, `handleUpdateTag`, `hasCapability`, `hasFastRenderer`, `hasWorld`, `invalidate`, `isInvalid`, `markDirty`, `mirror`, `onChunkUnload`, `onDataPacket`, `onLoad`, `onlyOpsCanSetNbt`, `receiveClientEvent`, `register`, `restrictNBTCopy`, `rotate`, `serializeNBT`, `setPos`, `setWorld`, `setWorldCreate`, `shouldRefresh`, `shouldRenderInPass`, `updateContainingBlockInfo`, `validate`

## TileEntityStructure.Mode

*enum* `net.minecraft.tileentity.TileEntityStructure.Mode`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<TileEntityStructure.Mode>, IStringSerializable

Enclosing class: TileEntityStructure

### Fields
- `public static final TileEntityStructure.Mode SAVE`
- `public static final TileEntityStructure.Mode LOAD`
- `public static final TileEntityStructure.Mode CORNER`
- `public static final TileEntityStructure.Mode DATA`

### Methods
- `public static TileEntityStructure.Mode[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (TileEntityStructure.Mode c : TileEntityStructure.Mode.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static TileEntityStructure.Mode valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public java.lang.String getName()`
- `public int getModeId()`
- `public static TileEntityStructure.Mode getById(int id)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
