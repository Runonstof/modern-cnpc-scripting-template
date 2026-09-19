# net.minecraft.world.chunk

- [BlockStateContainer](#blockstatecontainer)
- [BlockStatePaletteHashMap](#blockstatepalettehashmap)
- [BlockStatePaletteLinear](#blockstatepalettelinear)
- [BlockStatePaletteRegistry](#blockstatepaletteregistry)
- [Chunk](#chunk)
- [Chunk.EnumCreateEntityType](#chunk.enumcreateentitytype)
- [ChunkPrimer](#chunkprimer)
- [EmptyChunk](#emptychunk)
- [IBlockStatePalette](#iblockstatepalette)
- [IChunkProvider](#ichunkprovider)
- [NibbleArray](#nibblearray)
## BlockStateContainer

*class* `net.minecraft.world.chunk.BlockStateContainer`

### Fields
- `protected static final IBlockState AIR_BLOCK_STATE`
- `protected BitArray storage`
- `protected IBlockStatePalette palette`

### Methods
- `public int onResize(int bits,  IBlockState state)`
- `public void set(int x,  int y,  int z,  IBlockState state)`
- `protected void set(int index,  IBlockState state)`
- `public IBlockState get(int x,  int y,  int z)`
- `protected IBlockState get(int index)`
- `public void read(PacketBuffer buf)`
- `public void write(PacketBuffer buf)`
- `public NibbleArray getDataForNBT(byte[] blockIds,  NibbleArray data)`
- `public void setDataFromNBT(byte[] blockIds,  NibbleArray data,  NibbleArray blockIdExtension)`
- `public int getSerializedSize()`

## BlockStatePaletteHashMap

*class* `net.minecraft.world.chunk.BlockStatePaletteHashMap`

All Implemented Interfaces: IBlockStatePalette

### Methods
- `public int idFor(IBlockState state)`
- `public IBlockState getBlockState(int indexKey)`
- `public void read(PacketBuffer buf)`
- `public void write(PacketBuffer buf)`
- `public int getSerializedSize()`

## BlockStatePaletteLinear

*class* `net.minecraft.world.chunk.BlockStatePaletteLinear`

All Implemented Interfaces: IBlockStatePalette

### Methods
- `public int idFor(IBlockState state)`
- `public IBlockState getBlockState(int indexKey)`
- `public void read(PacketBuffer buf)`
- `public void write(PacketBuffer buf)`
- `public int getSerializedSize()`

## BlockStatePaletteRegistry

*class* `net.minecraft.world.chunk.BlockStatePaletteRegistry`

All Implemented Interfaces: IBlockStatePalette

### Methods
- `public int idFor(IBlockState state)`
- `public IBlockState getBlockState(int indexKey)`
- `public void read(PacketBuffer buf)`
- `public void write(PacketBuffer buf)`
- `public int getSerializedSize()`

## Chunk

*class* `net.minecraft.world.chunk.Chunk`

All Implemented Interfaces: ICapabilityProvider

### Fields
- `public static final ExtendedBlockStorage NULL_BLOCK_STORAGE`
- `public final int x`
- `public final int z`
- `public boolean unloadQueued`

### Methods
- `public boolean isAtLocation(int x,  int z)`
- `public int getHeight(BlockPos pos)`
- `public int getHeightValue(int x,  int z)`
- `public int getTopFilledSegment()`
- `public ExtendedBlockStorage[] getBlockStorageArray()`
- `protected void generateHeightMap()`
- `public void generateSkylightMap()`
- `public int getBlockLightOpacity(BlockPos pos)`
- `public IBlockState getBlockState(BlockPos pos)`
- `public IBlockState getBlockState(int x,  int y,  int z)`
- `public IBlockState setBlockState(BlockPos pos,  IBlockState state)`
- `public int getLightFor(EnumSkyBlock type,  BlockPos pos)`
- `public void setLightFor(EnumSkyBlock type,  BlockPos pos,  int value)`
- `public int getLightSubtracted(BlockPos pos,  int amount)`
- `public void addEntity(Entity entityIn)`
- `public void removeEntity(Entity entityIn)`
- `public void removeEntityAtIndex(Entity entityIn,  int index)`
- `public boolean canSeeSky(BlockPos pos)`
- `public TileEntity getTileEntity(BlockPos pos,  Chunk.EnumCreateEntityType p_177424_2_)`
- `public void addTileEntity(TileEntity tileEntityIn)`
- `public void addTileEntity(BlockPos pos,  TileEntity tileEntityIn)`
- `public void removeTileEntity(BlockPos pos)`
- `public void onLoad()`
- `public void onUnload()`
- `public void markDirty()`
- `public void getEntitiesWithinAABBForEntity(Entity entityIn,  AxisAlignedBB aabb,  java.util.List<Entity> listToFill,  <any> filter)`
- `public <T extends Entity> void getEntitiesOfTypeWithinAABB(java.lang.Class<? extends T> entityClass,  AxisAlignedBB aabb,  java.util.List<T> listToFill,  <any> filter)`
- `public boolean needsSaving(boolean p_76601_1_)`
- `public java.util.Random getRandomWithSeed(long seed)`
- `public boolean isEmpty()`
- `public void populate(IChunkProvider chunkProvider,  IChunkGenerator chunkGenrator)`
- `protected void populate(IChunkGenerator generator)`
- `public BlockPos getPrecipitationHeight(BlockPos pos)`
- `public void onTick(boolean skipRecheckGaps)`
- `public boolean isPopulated()`
- `public boolean wasTicked()`
- `public ChunkPos getPos()`
- `public boolean isEmptyBetween(int startY,  int endY)`
- `public void setStorageArrays(ExtendedBlockStorage[] newStorageArrays)`
- `public void read(PacketBuffer buf,  int availableSections,  boolean groundUpContinuous)`
- `public Biome getBiome(BlockPos pos,  BiomeProvider provider)`
- `public byte[] getBiomeArray()`
- `public void setBiomeArray(byte[] biomeArray)`
- `public void resetRelightChecks()`
- `public void enqueueRelightChecks()`
- `public void checkLight()`
- `public boolean isLoaded()`
- `public void markLoaded(boolean loaded)`
- `public World getWorld()`
- `public int[] getHeightMap()`
- `public void setHeightMap(int[] newHeightMap)`
- `public java.util.Map<BlockPos,TileEntity> getTileEntityMap()`
- `public ClassInheritanceMultiMap<Entity>[] getEntityLists()`
- `public boolean isTerrainPopulated()`
- `public void setTerrainPopulated(boolean terrainPopulated)`
- `public boolean isLightPopulated()`
- `public void setLightPopulated(boolean lightPopulated)`
- `public void setModified(boolean modified)`
- `public void setHasEntities(boolean hasEntitiesIn)`
- `public void setLastSaveTime(long saveTime)`
- `public int getLowestHeight()`
- `public long getInhabitedTime()`
- `public void setInhabitedTime(long newInhabitedTime)`
- `public void removeInvalidTileEntity(BlockPos pos)`
  Removes the tile entity at the specified position, only if it's
   marked as invalid.
- `public CapabilityDispatcher getCapabilities()`
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

## Chunk.EnumCreateEntityType

*enum* `net.minecraft.world.chunk.Chunk.EnumCreateEntityType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<Chunk.EnumCreateEntityType>

Enclosing class: Chunk

### Fields
- `public static final Chunk.EnumCreateEntityType IMMEDIATE`
- `public static final Chunk.EnumCreateEntityType QUEUED`
- `public static final Chunk.EnumCreateEntityType CHECK`

### Methods
- `public static Chunk.EnumCreateEntityType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (Chunk.EnumCreateEntityType c : Chunk.EnumCreateEntityType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static Chunk.EnumCreateEntityType valueOf(java.lang.String name)`
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

## ChunkPrimer

*class* `net.minecraft.world.chunk.ChunkPrimer`

### Methods
- `public IBlockState getBlockState(int x,  int y,  int z)`
- `public void setBlockState(int x,  int y,  int z,  IBlockState state)`
- `public int findGroundBlockIdx(int x,  int z)`

## EmptyChunk

*class* `net.minecraft.world.chunk.EmptyChunk`

All Implemented Interfaces: ICapabilityProvider

### Inherited fields
- from `net.minecraft.world.chunk.Chunk`: `NULL_BLOCK_STORAGE`, `unloadQueued`, `x`, `z`

### Methods
- `public boolean isAtLocation(int x,  int z)`
- `public int getHeightValue(int x,  int z)`
- `public void generateHeightMap()`
- `public void generateSkylightMap()`
- `public IBlockState getBlockState(BlockPos pos)`
- `public int getBlockLightOpacity(BlockPos pos)`
- `public int getLightFor(EnumSkyBlock type,  BlockPos pos)`
- `public void setLightFor(EnumSkyBlock type,  BlockPos pos,  int value)`
- `public int getLightSubtracted(BlockPos pos,  int amount)`
- `public void addEntity(Entity entityIn)`
- `public void removeEntity(Entity entityIn)`
- `public void removeEntityAtIndex(Entity entityIn,  int index)`
- `public boolean canSeeSky(BlockPos pos)`
- `public TileEntity getTileEntity(BlockPos pos,  Chunk.EnumCreateEntityType p_177424_2_)`
- `public void addTileEntity(TileEntity tileEntityIn)`
- `public void addTileEntity(BlockPos pos,  TileEntity tileEntityIn)`
- `public void removeTileEntity(BlockPos pos)`
- `public void onLoad()`
- `public void onUnload()`
- `public void markDirty()`
- `public void getEntitiesWithinAABBForEntity(Entity entityIn,  AxisAlignedBB aabb,  java.util.List<Entity> listToFill,  <any> filter)`
- `public <T extends Entity> void getEntitiesOfTypeWithinAABB(java.lang.Class<? extends T> entityClass,  AxisAlignedBB aabb,  java.util.List<T> listToFill,  <any> filter)`
- `public boolean needsSaving(boolean p_76601_1_)`
- `public java.util.Random getRandomWithSeed(long seed)`
- `public boolean isEmpty()`
- `public boolean isEmptyBetween(int startY,  int endY)`

### Inherited methods
- from `net.minecraft.world.chunk.Chunk`: `checkLight`, `enqueueRelightChecks`, `getBiome`, `getBiomeArray`, `getBlockState`, `getBlockStorageArray`, `getCapabilities`, `getCapability`, `getEntityLists`, `getHeight`, `getHeightMap`, `getInhabitedTime`, `getLowestHeight`, `getPos`, `getPrecipitationHeight`, `getTileEntityMap`, `getTopFilledSegment`, `getWorld`, `hasCapability`, `isLightPopulated`, `isLoaded`, `isPopulated`, `isTerrainPopulated`, `markLoaded`, `onTick`, `populate`, `populate`, `read`, `removeInvalidTileEntity`, `resetRelightChecks`, `setBiomeArray`, `setBlockState`, `setHasEntities`, `setHeightMap`, `setInhabitedTime`, `setLastSaveTime`, `setLightPopulated`, `setModified`, `setStorageArrays`, `setTerrainPopulated`, `wasTicked`

## IBlockStatePalette

*interface* `net.minecraft.world.chunk.IBlockStatePalette`

### Methods
- `int idFor(IBlockState state)`
- `IBlockState getBlockState(int indexKey)`
- `void read(PacketBuffer buf)`
- `void write(PacketBuffer buf)`
- `int getSerializedSize()`

## IChunkProvider

*interface* `net.minecraft.world.chunk.IChunkProvider`

### Methods
- `Chunk getLoadedChunk(int x,  int z)`
- `Chunk provideChunk(int x,  int z)`
- `boolean tick()`
- `java.lang.String makeString()`
- `boolean isChunkGeneratedAt(int x,  int z)`

## NibbleArray

*class* `net.minecraft.world.chunk.NibbleArray`

### Methods
- `public int get(int x,  int y,  int z)`
- `public void set(int x,  int y,  int z,  int value)`
- `public int getFromIndex(int index)`
- `public void setIndex(int index,  int value)`
- `public byte[] getData()`
