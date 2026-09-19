# net.minecraft.village

- [MerchantRecipe](#merchantrecipe)
- [MerchantRecipeList](#merchantrecipelist)
- [Village](#village)
- [VillageCollection](#villagecollection)
- [VillageDoorInfo](#villagedoorinfo)
- [VillageSiege](#villagesiege)
## MerchantRecipe

*class* `net.minecraft.village.MerchantRecipe`

### Methods
- `public ItemStack getItemToBuy()`
- `public ItemStack getSecondItemToBuy()`
- `public boolean hasSecondItemToBuy()`
- `public ItemStack getItemToSell()`
- `public int getToolUses()`
- `public int getMaxTradeUses()`
- `public void incrementToolUses()`
- `public void increaseMaxTradeUses(int increment)`
- `public boolean isRecipeDisabled()`
- `public void compensateToolUses()`
- `public boolean getRewardsExp()`
- `public void readFromTags(NBTTagCompound tagCompound)`
- `public NBTTagCompound writeToTags()`

## MerchantRecipeList

*class* `net.minecraft.village.MerchantRecipeList`

All Implemented Interfaces: java.io.Serializable, java.lang.Cloneable, java.lang.Iterable<MerchantRecipe>, java.util.Collection<MerchantRecipe>, java.util.List<MerchantRecipe>, java.util.RandomAccess

### Inherited fields
- from `java.util.AbstractList`: `modCount`

### Methods
- `public MerchantRecipe canRecipeBeUsed(ItemStack stack0,  ItemStack stack1,  int index)`
- `public void writeToBuf(PacketBuffer buffer)`
- `public void readRecipiesFromTags(NBTTagCompound compound)`
- `public NBTTagCompound getRecipiesAsTags()`
- `public static MerchantRecipeList readFromBuf(PacketBuffer buffer)  throws java.io.IOException`
  - throws: java.io.IOException

### Inherited methods
- from `java.util.ArrayList`: `add`, `add`, `addAll`, `addAll`, `clear`, `clone`, `contains`, `ensureCapacity`, `forEach`, `get`, `indexOf`, `isEmpty`, `iterator`, `lastIndexOf`, `listIterator`, `listIterator`, `remove`, `remove`, `removeAll`, `removeIf`, `removeRange`, `replaceAll`, `retainAll`, `set`, `size`, `sort`, `spliterator`, `subList`, `toArray`, `toArray`, `trimToSize`
- from `java.util.AbstractList`: `equals`, `hashCode`
- from `java.util.AbstractCollection`: `containsAll`, `toString`
- from `java.util.List`: `containsAll`, `equals`, `hashCode`
- from `java.util.Collection`: `parallelStream`, `stream`

## Village

*class* `net.minecraft.village.Village`

All Implemented Interfaces: ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Methods
- `public void setWorld(World worldIn)`
- `public void tick(int tickCounterIn)`
- `public BlockPos getCenter()`
- `public int getVillageRadius()`
- `public int getNumVillageDoors()`
- `public int getTicksSinceLastDoorAdding()`
- `public int getNumVillagers()`
- `public boolean isBlockPosWithinSqVillageRadius(BlockPos pos)`
- `public java.util.List<VillageDoorInfo> getVillageDoorInfoList()`
- `public VillageDoorInfo getNearestDoor(BlockPos pos)`
- `public VillageDoorInfo getDoorInfo(BlockPos pos)`
- `public VillageDoorInfo getExistedDoor(BlockPos doorBlock)`
- `public void addVillageDoorInfo(VillageDoorInfo doorInfo)`
- `public boolean isAnnihilated()`
- `public void addOrRenewAgressor(EntityLivingBase entitylivingbaseIn)`
- `public EntityLivingBase findNearestVillageAggressor(EntityLivingBase entitylivingbaseIn)`
- `public EntityPlayer getNearestTargetPlayer(EntityLivingBase villageDefender)`
- `@Deprecated public int getPlayerReputation(java.lang.String playerName)` (deprecated)
  Deprecated.
- `public int getPlayerReputation(java.util.UUID playerName)`
- `@Deprecated public int modifyPlayerReputation(java.lang.String playerName,  int reputation)` (deprecated)
  Deprecated.
- `public int modifyPlayerReputation(java.util.UUID playerName,  int reputation)`
- `@Deprecated public boolean isPlayerReputationTooLow(java.lang.String playerName)` (deprecated)
  Deprecated.
- `public boolean isPlayerReputationTooLow(java.util.UUID uuid)`
- `public void readVillageDataFromNBT(NBTTagCompound compound)`
- `public void writeVillageDataToNBT(NBTTagCompound compound)`
- `public void endMatingSeason()`
- `public boolean isMatingSeason()`
- `public void setDefaultPlayerReputation(int defaultReputation)`
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

## VillageCollection

*class* `net.minecraft.village.VillageCollection`

All Implemented Interfaces: INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.world.storage.WorldSavedData`: `mapName`

### Methods
- `public void setWorldsForAll(World worldIn)`
- `public void addToVillagerPositionList(BlockPos pos)`
- `public void tick()`
- `public java.util.List<Village> getVillageList()`
- `public Village getNearestVillage(BlockPos doorBlock,  int radius)`
- `public void readFromNBT(NBTTagCompound nbt)`
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public static java.lang.String fileNameForProvider(WorldProvider provider)`

### Inherited methods
- from `net.minecraft.world.storage.WorldSavedData`: `deserializeNBT`, `isDirty`, `markDirty`, `serializeNBT`, `setDirty`

## VillageDoorInfo

*class* `net.minecraft.village.VillageDoorInfo`

### Methods
- `public int getDistanceSquared(int x,  int y,  int z)`
- `public int getDistanceToDoorBlockSq(BlockPos pos)`
- `public int getDistanceToInsideBlockSq(BlockPos pos)`
- `public boolean isInsideSide(BlockPos pos)`
- `public void resetDoorOpeningRestrictionCounter()`
- `public void incrementDoorOpeningRestrictionCounter()`
- `public int getDoorOpeningRestrictionCounter()`
- `public BlockPos getDoorBlockPos()`
- `public BlockPos getInsideBlockPos()`
- `public int getInsideOffsetX()`
- `public int getInsideOffsetZ()`
- `public int getLastActivityTimestamp()`
- `public void setLastActivityTimestamp(int timestamp)`
- `public boolean getIsDetachedFromVillageFlag()`
- `public void setIsDetachedFromVillageFlag(boolean detached)`
- `public EnumFacing getInsideDirection()`

## VillageSiege

*class* `net.minecraft.village.VillageSiege`

### Methods
- `public void tick()`
