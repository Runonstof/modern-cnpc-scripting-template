# net.minecraft.world.chunk.storage

- [AnvilChunkLoader](#anvilchunkloader)
- [AnvilSaveConverter](#anvilsaveconverter)
- [AnvilSaveHandler](#anvilsavehandler)
- [ChunkLoader](#chunkloader)
- [ChunkLoader.AnvilConverterData](#chunkloader.anvilconverterdata)
- [ExtendedBlockStorage](#extendedblockstorage)
- [IChunkLoader](#ichunkloader)
- [NibbleArrayReader](#nibblearrayreader)
- [RegionFile](#regionfile)
- [RegionFileCache](#regionfilecache)
## AnvilChunkLoader

*class* `net.minecraft.world.chunk.storage.AnvilChunkLoader`

All Implemented Interfaces: IChunkLoader, IThreadedFileIO

### Fields
- `public final java.io.File chunkSaveLocation`

### Methods
- `@Deprecated public boolean chunkExists(World world,  int x,  int z)` (deprecated)
  Deprecated.
- `public Chunk loadChunk(World worldIn,  int x,  int z)  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.lang.Object[] loadChunk__Async(World worldIn,  int x,  int z)  throws java.io.IOException`
  - throws: java.io.IOException
- `public boolean isChunkGeneratedAt(int x,  int z)`
- `protected Chunk checkedReadChunkFromNBT(World worldIn,  int x,  int z,  NBTTagCompound compound)`
- `protected java.lang.Object[] checkedReadChunkFromNBT__Async(World worldIn,  int x,  int z,  NBTTagCompound compound)`
- `public void saveChunk(World worldIn,  Chunk chunkIn)  throws MinecraftException,  java.io.IOException`
  - throws: MinecraftException
  - throws: java.io.IOException
- `protected void addChunkToPending(ChunkPos pos,  NBTTagCompound compound)`
- `public boolean writeNextIO()`
- `public void saveExtraChunkData(World worldIn,  Chunk chunkIn)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void chunkTick()`
- `public void flush()`
- `public static void registerFixes(DataFixer fixer)`
- `public void loadEntities(World worldIn,  NBTTagCompound compound,  Chunk chunk)`
- `public static Entity readChunkEntity(NBTTagCompound compound,  World worldIn,  Chunk chunkIn)`
- `public static Entity readWorldEntityPos(NBTTagCompound compound,  World worldIn,  double x,  double y,  double z,  boolean attemptSpawn)`
- `protected static Entity createEntityFromNBT(NBTTagCompound compound,  World worldIn)`
- `public static void spawnEntity(Entity entityIn,  World worldIn)`
- `public static Entity readWorldEntity(NBTTagCompound compound,  World worldIn,  boolean p_186051_2_)`
- `public int getPendingSaveCount()`

## AnvilSaveConverter

*class* `net.minecraft.world.chunk.storage.AnvilSaveConverter`

All Implemented Interfaces: ISaveFormat

### Inherited fields
- from `net.minecraft.world.storage.SaveFormatOld`: `dataFixer`, `savesDirectory`

### Methods
- `public java.lang.String getName()`
- `public java.util.List<WorldSummary> getSaveList()  throws AnvilConverterException`
  - throws: AnvilConverterException
- `protected int getSaveVersion()`
- `public void flushCache()`
- `public ISaveHandler getSaveLoader(java.lang.String saveName,  boolean storePlayerdata)`
- `public boolean isConvertible(java.lang.String saveName)`
- `public boolean isOldMapFormat(java.lang.String saveName)`
- `public boolean convertMapFormat(java.lang.String filename,  IProgressUpdate progressCallback)`

### Inherited methods
- from `net.minecraft.world.storage.SaveFormatOld`: `canLoadWorld`, `deleteFiles`, `deleteWorldDirectory`, `getFile`, `getWorldData`, `getWorldInfo`, `isNewLevelIdAcceptable`, `loadAndFix`, `renameWorld`

## AnvilSaveHandler

*class* `net.minecraft.world.chunk.storage.AnvilSaveHandler`

All Implemented Interfaces: IPlayerFileData, ISaveHandler

### Inherited fields
- from `net.minecraft.world.storage.SaveHandler`: `dataFixer`

### Methods
- `public IChunkLoader getChunkLoader(WorldProvider provider)`
- `public void saveWorldInfoWithPlayer(WorldInfo worldInformation,  NBTTagCompound tagCompound)`
- `public void flush()`

### Inherited methods
- from `net.minecraft.world.storage.SaveHandler`: `checkSessionLock`, `getAvailablePlayerDat`, `getMapFileFromName`, `getPlayerNBT`, `getPlayerNBTManager`, `getStructureTemplateManager`, `getWorldDirectory`, `loadWorldInfo`, `readPlayerData`, `saveWorldInfo`, `writePlayerData`

## ChunkLoader

*class* `net.minecraft.world.chunk.storage.ChunkLoader`

### Methods
- `public static ChunkLoader.AnvilConverterData load(NBTTagCompound nbt)`
- `public static void convertToAnvilFormat(ChunkLoader.AnvilConverterData converterData,  NBTTagCompound compound,  BiomeProvider provider)`

## ChunkLoader.AnvilConverterData

*class* `net.minecraft.world.chunk.storage.ChunkLoader.AnvilConverterData`

Enclosing class: ChunkLoader

### Fields
- `public long lastUpdated`
- `public boolean terrainPopulated`
- `public byte[] heightmap`
- `public NibbleArrayReader blockLight`
- `public NibbleArrayReader skyLight`
- `public NibbleArrayReader data`
- `public byte[] blocks`
- `public NBTTagList entities`
- `public NBTTagList tileEntities`
- `public NBTTagList tileTicks`
- `public final int x`
- `public final int z`

## ExtendedBlockStorage

*class* `net.minecraft.world.chunk.storage.ExtendedBlockStorage`

### Methods
- `public IBlockState get(int x,  int y,  int z)`
- `public void set(int x,  int y,  int z,  IBlockState state)`
- `public boolean isEmpty()`
- `public boolean needsRandomTick()`
- `public int getYLocation()`
- `public void setSkyLight(int x,  int y,  int z,  int value)`
- `public int getSkyLight(int x,  int y,  int z)`
- `public void setBlockLight(int x,  int y,  int z,  int value)`
- `public int getBlockLight(int x,  int y,  int z)`
- `public void recalculateRefCounts()`
- `public BlockStateContainer getData()`
- `public NibbleArray getBlockLight()`
- `public NibbleArray getSkyLight()`
- `public void setBlockLight(NibbleArray newBlocklightArray)`
- `public void setSkyLight(NibbleArray newSkylightArray)`

## IChunkLoader

*interface* `net.minecraft.world.chunk.storage.IChunkLoader`

### Methods
- `Chunk loadChunk(World worldIn,  int x,  int z)  throws java.io.IOException`
  - throws: java.io.IOException
- `void saveChunk(World worldIn,  Chunk chunkIn)  throws MinecraftException,  java.io.IOException`
  - throws: MinecraftException
  - throws: java.io.IOException
- `void saveExtraChunkData(World worldIn,  Chunk chunkIn)  throws java.io.IOException`
  - throws: java.io.IOException
- `void chunkTick()`
- `void flush()`
- `boolean isChunkGeneratedAt(int x,  int z)`

## NibbleArrayReader

*class* `net.minecraft.world.chunk.storage.NibbleArrayReader`

### Fields
- `public final byte[] data`

### Methods
- `public int get(int x,  int y,  int z)`

## RegionFile

*class* `net.minecraft.world.chunk.storage.RegionFile`

### Methods
- `@Deprecated public boolean chunkExists(int x,  int z)` (deprecated)
  Deprecated.
- `public java.io.DataInputStream getChunkDataInputStream(int x,  int z)`
- `public java.io.DataOutputStream getChunkDataOutputStream(int x,  int z)`
- `protected void write(int x,  int z,  byte[] data,  int length)`
- `public boolean isChunkSaved(int x,  int z)`
- `public void close()  throws java.io.IOException`
  - throws: java.io.IOException

## RegionFileCache

*class* `net.minecraft.world.chunk.storage.RegionFileCache`

### Methods
- `public static RegionFile createOrLoadRegionFile(java.io.File worldDir,  int chunkX,  int chunkZ)`
- `public static RegionFile getRegionFileIfExists(java.io.File worldDir,  int chunkX,  int chunkZ)`
- `public static void clearRegionFileReferences()`
- `public static java.io.DataInputStream getChunkInputStream(java.io.File worldDir,  int chunkX,  int chunkZ)`
- `public static java.io.DataOutputStream getChunkOutputStream(java.io.File worldDir,  int chunkX,  int chunkZ)`
- `public static boolean chunkExists(java.io.File worldDir,  int chunkX,  int chunkZ)`
