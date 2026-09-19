# net.minecraft.world.storage

- [DerivedWorldInfo](#derivedworldinfo)
- [IPlayerFileData](#iplayerfiledata)
- [ISaveFormat](#isaveformat)
- [ISaveHandler](#isavehandler)
- [IThreadedFileIO](#ithreadedfileio)
- [MapData](#mapdata)
- [MapData.MapInfo](#mapdata.mapinfo)
- [MapDecoration](#mapdecoration)
- [MapDecoration.Type](#mapdecoration.type)
- [MapStorage](#mapstorage)
- [SaveDataMemoryStorage](#savedatamemorystorage)
- [SaveFormatOld](#saveformatold)
- [SaveHandler](#savehandler)
- [SaveHandlerMP](#savehandlermp)
- [ThreadedFileIOBase](#threadedfileiobase)
- [WorldInfo](#worldinfo)
- [WorldSavedData](#worldsaveddata)
- [WorldSavedDataCallableSave](#worldsaveddatacallablesave)
- [WorldSummary](#worldsummary)
## DerivedWorldInfo

*class* `net.minecraft.world.storage.DerivedWorldInfo`

### Inherited fields
- from `net.minecraft.world.storage.WorldInfo`: `DEFAULT_DIFFICULTY`

### Methods
- `public NBTTagCompound cloneNBTCompound(NBTTagCompound nbt)`
- `public long getSeed()`
- `public int getSpawnX()`
- `public int getSpawnY()`
- `public int getSpawnZ()`
- `public long getWorldTotalTime()`
- `public long getWorldTime()`
- `public long getSizeOnDisk()`
- `public NBTTagCompound getPlayerNBTTagCompound()`
- `public java.lang.String getWorldName()`
- `public int getSaveVersion()`
- `public long getLastTimePlayed()`
- `public boolean isThundering()`
- `public int getThunderTime()`
- `public boolean isRaining()`
- `public int getRainTime()`
- `public GameType getGameType()`
- `public void setSpawnX(int x)`
- `public void setSpawnY(int y)`
- `public void setWorldTotalTime(long time)`
- `public void setSpawnZ(int z)`
- `public void setWorldTime(long time)`
- `public void setSpawn(BlockPos spawnPoint)`
- `public void setWorldName(java.lang.String worldName)`
- `public void setSaveVersion(int version)`
- `public void setThundering(boolean thunderingIn)`
- `public void setThunderTime(int time)`
- `public void setRaining(boolean isRaining)`
- `public void setRainTime(int time)`
- `public boolean isMapFeaturesEnabled()`
- `public boolean isHardcoreModeEnabled()`
- `public WorldType getTerrainType()`
- `public void setTerrainType(WorldType type)`
- `public boolean areCommandsAllowed()`
- `public void setAllowCommands(boolean allow)`
- `public boolean isInitialized()`
- `public void setServerInitialized(boolean initializedIn)`
- `public GameRules getGameRulesInstance()`
- `public EnumDifficulty getDifficulty()`
- `public void setDifficulty(EnumDifficulty newDifficulty)`
- `public boolean isDifficultyLocked()`
- `public void setDifficultyLocked(boolean locked)`
- `@Deprecated public void setDimensionData(DimensionType dimensionIn,  NBTTagCompound compound)` (deprecated)
  Deprecated.
- `@Deprecated public NBTTagCompound getDimensionData(DimensionType dimensionIn)` (deprecated)
  Deprecated.
- `public void setDimensionData(int dimensionID,  NBTTagCompound compound)`
- `public NBTTagCompound getDimensionData(int dimensionID)`

### Inherited methods
- from `net.minecraft.world.storage.WorldInfo`: `addToCrashReport`, `getAdditionalProperty`, `getBorderCenterX`, `getBorderCenterX`, `getBorderCenterZ`, `getBorderCenterZ`, `getBorderDamagePerBlock`, `getBorderLerpTarget`, `getBorderLerpTime`, `getBorderSafeZone`, `getBorderSize`, `getBorderWarningDistance`, `getBorderWarningTime`, `getCleanWeatherTime`, `getGeneratorOptions`, `getVersionId`, `getVersionName`, `isVersionSnapshot`, `populateFromWorldSettings`, `registerFixes`, `setAdditionalProperties`, `setBorderDamagePerBlock`, `setBorderLerpTarget`, `setBorderLerpTime`, `setBorderSafeZone`, `setBorderSize`, `setBorderWarningDistance`, `setBorderWarningTime`, `setCleanWeatherTime`, `setGameType`, `setHardcore`, `setMapFeaturesEnabled`

## IPlayerFileData

*interface* `net.minecraft.world.storage.IPlayerFileData`

### Methods
- `void writePlayerData(EntityPlayer player)`
- `NBTTagCompound readPlayerData(EntityPlayer player)`
- `java.lang.String[] getAvailablePlayerDat()`

## ISaveFormat

*interface* `net.minecraft.world.storage.ISaveFormat`

### Methods
- `java.lang.String getName()`
- `ISaveHandler getSaveLoader(java.lang.String saveName,  boolean storePlayerdata)`
- `java.util.List<WorldSummary> getSaveList()  throws AnvilConverterException`
  - throws: AnvilConverterException
- `boolean isOldMapFormat(java.lang.String saveName)`
- `void flushCache()`
- `WorldInfo getWorldInfo(java.lang.String saveName)`
- `boolean isNewLevelIdAcceptable(java.lang.String saveName)`
- `boolean deleteWorldDirectory(java.lang.String saveName)`
- `void renameWorld(java.lang.String dirName,  java.lang.String newName)`
- `boolean isConvertible(java.lang.String saveName)`
- `boolean convertMapFormat(java.lang.String filename,  IProgressUpdate progressCallback)`
- `java.io.File getFile(java.lang.String p_186352_1_,  java.lang.String p_186352_2_)`
- `boolean canLoadWorld(java.lang.String saveName)`

## ISaveHandler

*interface* `net.minecraft.world.storage.ISaveHandler`

### Methods
- `WorldInfo loadWorldInfo()`
- `void checkSessionLock()  throws MinecraftException`
  - throws: MinecraftException
- `IChunkLoader getChunkLoader(WorldProvider provider)`
- `void saveWorldInfoWithPlayer(WorldInfo worldInformation,  NBTTagCompound tagCompound)`
- `void saveWorldInfo(WorldInfo worldInformation)`
- `IPlayerFileData getPlayerNBTManager()`
- `void flush()`
- `java.io.File getWorldDirectory()`
- `java.io.File getMapFileFromName(java.lang.String mapName)`
- `TemplateManager getStructureTemplateManager()`

## IThreadedFileIO

*interface* `net.minecraft.world.storage.IThreadedFileIO`

### Methods
- `boolean writeNextIO()`

## MapData

*class* `net.minecraft.world.storage.MapData`

All Implemented Interfaces: INBTSerializable<NBTTagCompound>

### Fields
- `public int xCenter`
- `public int zCenter`
- `public int dimension`
- `public boolean trackingPosition`
- `public boolean unlimitedTracking`
- `public byte scale`
- `public byte[] colors`
- `public java.util.List<MapData.MapInfo> playersArrayList`
- `public java.util.Map<java.lang.String,MapDecoration> mapDecorations`

### Inherited fields
- from `net.minecraft.world.storage.WorldSavedData`: `mapName`

### Methods
- `public void calculateMapCenter(double x,  double z,  int mapScale)`
- `public void readFromNBT(NBTTagCompound nbt)`
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public void updateVisiblePlayers(EntityPlayer player,  ItemStack mapStack)`
- `public static void addTargetDecoration(ItemStack map,  BlockPos target,  java.lang.String decorationName,  MapDecoration.Type type)`
- `public Packet<?> getMapPacket(ItemStack mapStack,  World worldIn,  EntityPlayer player)`
- `public void updateMapData(int x,  int y)`
- `public MapData.MapInfo getMapInfo(EntityPlayer player)`

### Inherited methods
- from `net.minecraft.world.storage.WorldSavedData`: `deserializeNBT`, `isDirty`, `markDirty`, `serializeNBT`, `setDirty`

## MapData.MapInfo

*class* `net.minecraft.world.storage.MapData.MapInfo`

Enclosing class: MapData

### Fields
- `public final EntityPlayer player`
- `public int step`

### Methods
- `public Packet<?> getPacket(ItemStack stack)`
- `public void update(int x,  int y)`

## MapDecoration

*class* `net.minecraft.world.storage.MapDecoration`

### Methods
- `public byte getImage()`
- `public MapDecoration.Type getType()`
- `public byte getX()`
- `public byte getY()`
- `public byte getRotation()`
- `public boolean renderOnFrame()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public boolean render(int index)`
  Renders this decoration, useful for custom sprite sheets.
  - param: index - The index of this icon in the MapData's list. Used by vanilla to offset the Z-coordinate to prevent Z-fighting
  - returns: false to run vanilla logic for this decoration, true to skip it

## MapDecoration.Type

*enum* `net.minecraft.world.storage.MapDecoration.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<MapDecoration.Type>

Enclosing class: MapDecoration

### Fields
- `public static final MapDecoration.Type PLAYER`
- `public static final MapDecoration.Type FRAME`
- `public static final MapDecoration.Type RED_MARKER`
- `public static final MapDecoration.Type BLUE_MARKER`
- `public static final MapDecoration.Type TARGET_X`
- `public static final MapDecoration.Type TARGET_POINT`
- `public static final MapDecoration.Type PLAYER_OFF_MAP`
- `public static final MapDecoration.Type PLAYER_OFF_LIMITS`
- `public static final MapDecoration.Type MANSION`
- `public static final MapDecoration.Type MONUMENT`

### Methods
- `public static MapDecoration.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (MapDecoration.Type c : MapDecoration.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static MapDecoration.Type valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public byte getIcon()`
- `public boolean isRenderedOnFrame()`
- `public boolean hasMapColor()`
- `public int getMapColor()`
- `public static MapDecoration.Type byIcon(byte p_191159_0_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## MapStorage

*class* `net.minecraft.world.storage.MapStorage`

### Fields
- `protected java.util.Map<java.lang.String,WorldSavedData> loadedDataMap`

### Methods
- `public WorldSavedData getOrLoadData(java.lang.Class<? extends WorldSavedData> clazz,  java.lang.String dataIdentifier)`
- `public void setData(java.lang.String dataIdentifier,  WorldSavedData data)`
- `public void saveAllData()`
- `public int getUniqueDataId(java.lang.String key)`

## SaveDataMemoryStorage

*class* `net.minecraft.world.storage.SaveDataMemoryStorage`

### Inherited fields
- from `net.minecraft.world.storage.MapStorage`: `loadedDataMap`

### Methods
- `public WorldSavedData getOrLoadData(java.lang.Class<? extends WorldSavedData> clazz,  java.lang.String dataIdentifier)`
- `public void setData(java.lang.String dataIdentifier,  WorldSavedData data)`
- `public void saveAllData()`
- `public int getUniqueDataId(java.lang.String key)`

## SaveFormatOld

*class* `net.minecraft.world.storage.SaveFormatOld`

All Implemented Interfaces: ISaveFormat

### Fields
- `public final java.io.File savesDirectory`
- `protected final DataFixer dataFixer`

### Methods
- `public java.lang.String getName()`
- `public java.util.List<WorldSummary> getSaveList()  throws AnvilConverterException`
  - throws: AnvilConverterException
- `public void flushCache()`
- `public WorldInfo getWorldInfo(java.lang.String saveName)`
- `public static WorldInfo getWorldData(java.io.File p_186353_0_,  DataFixer dataFixerIn)`
- `public static WorldInfo loadAndFix(java.io.File file,  DataFixer fixer,  SaveHandler save)`
- `public void renameWorld(java.lang.String dirName,  java.lang.String newName)`
- `public ISaveHandler getSaveLoader(java.lang.String saveName,  boolean storePlayerdata)`
- `public boolean isNewLevelIdAcceptable(java.lang.String saveName)`
- `public boolean deleteWorldDirectory(java.lang.String saveName)`
- `protected static boolean deleteFiles(java.io.File[] files)`
- `public boolean isConvertible(java.lang.String saveName)`
- `public boolean isOldMapFormat(java.lang.String saveName)`
- `public boolean convertMapFormat(java.lang.String filename,  IProgressUpdate progressCallback)`
- `public boolean canLoadWorld(java.lang.String saveName)`
- `public java.io.File getFile(java.lang.String p_186352_1_,  java.lang.String p_186352_2_)`

## SaveHandler

*class* `net.minecraft.world.storage.SaveHandler`

All Implemented Interfaces: IPlayerFileData, ISaveHandler

### Fields
- `protected final DataFixer dataFixer`

### Methods
- `public java.io.File getWorldDirectory()`
- `public void checkSessionLock()  throws MinecraftException`
  - throws: MinecraftException
- `public IChunkLoader getChunkLoader(WorldProvider provider)`
- `public WorldInfo loadWorldInfo()`
- `public void saveWorldInfoWithPlayer(WorldInfo worldInformation,  NBTTagCompound tagCompound)`
- `public void saveWorldInfo(WorldInfo worldInformation)`
- `public void writePlayerData(EntityPlayer player)`
- `public NBTTagCompound readPlayerData(EntityPlayer player)`
- `public IPlayerFileData getPlayerNBTManager()`
- `public java.lang.String[] getAvailablePlayerDat()`
- `public void flush()`
- `public java.io.File getMapFileFromName(java.lang.String mapName)`
- `public TemplateManager getStructureTemplateManager()`
- `public NBTTagCompound getPlayerNBT(EntityPlayerMP player)`

## SaveHandlerMP

*class* `net.minecraft.world.storage.SaveHandlerMP`

All Implemented Interfaces: ISaveHandler

### Methods
- `public WorldInfo loadWorldInfo()`
- `public void checkSessionLock()  throws MinecraftException`
  - throws: MinecraftException
- `public IChunkLoader getChunkLoader(WorldProvider provider)`
- `public void saveWorldInfoWithPlayer(WorldInfo worldInformation,  NBTTagCompound tagCompound)`
- `public void saveWorldInfo(WorldInfo worldInformation)`
- `public IPlayerFileData getPlayerNBTManager()`
- `public void flush()`
- `public java.io.File getMapFileFromName(java.lang.String mapName)`
- `public java.io.File getWorldDirectory()`
- `public TemplateManager getStructureTemplateManager()`

## ThreadedFileIOBase

*class* `net.minecraft.world.storage.ThreadedFileIOBase`

All Implemented Interfaces: java.lang.Runnable

### Methods
- `public static ThreadedFileIOBase getThreadedIOInstance()`
- `public void run()`
- `public void queueIO(IThreadedFileIO fileIo)`
- `public void waitForFinish()  throws java.lang.InterruptedException`
  - throws: java.lang.InterruptedException

## WorldInfo

*class* `net.minecraft.world.storage.WorldInfo`

### Fields
- `public static final EnumDifficulty DEFAULT_DIFFICULTY`

### Methods
- `public static void registerFixes(DataFixer fixer)`
- `public void populateFromWorldSettings(WorldSettings settings)`
- `public NBTTagCompound cloneNBTCompound(NBTTagCompound nbt)`
- `public long getSeed()`
- `public int getSpawnX()`
- `public int getSpawnY()`
- `public int getSpawnZ()`
- `public long getWorldTotalTime()`
- `public long getWorldTime()`
- `public long getSizeOnDisk()`
- `public NBTTagCompound getPlayerNBTTagCompound()`
- `public void setSpawnX(int x)`
- `public void setSpawnY(int y)`
- `public void setWorldTotalTime(long time)`
- `public void setSpawnZ(int z)`
- `public void setWorldTime(long time)`
- `public void setSpawn(BlockPos spawnPoint)`
- `public java.lang.String getWorldName()`
- `public void setWorldName(java.lang.String worldName)`
- `public int getSaveVersion()`
- `public void setSaveVersion(int version)`
- `public long getLastTimePlayed()`
- `public int getCleanWeatherTime()`
- `public void setCleanWeatherTime(int cleanWeatherTimeIn)`
- `public boolean isThundering()`
- `public void setThundering(boolean thunderingIn)`
- `public int getThunderTime()`
- `public void setThunderTime(int time)`
- `public boolean isRaining()`
- `public void setRaining(boolean isRaining)`
- `public int getRainTime()`
- `public void setRainTime(int time)`
- `public GameType getGameType()`
- `public boolean isMapFeaturesEnabled()`
- `public void setMapFeaturesEnabled(boolean enabled)`
- `public void setGameType(GameType type)`
- `public boolean isHardcoreModeEnabled()`
- `public void setHardcore(boolean hardcoreIn)`
- `public WorldType getTerrainType()`
- `public void setTerrainType(WorldType type)`
- `public java.lang.String getGeneratorOptions()`
- `public boolean areCommandsAllowed()`
- `public void setAllowCommands(boolean allow)`
- `public boolean isInitialized()`
- `public void setServerInitialized(boolean initializedIn)`
- `public GameRules getGameRulesInstance()`
- `public double getBorderCenterX()`
- `public double getBorderCenterZ()`
- `public double getBorderSize()`
- `public void setBorderSize(double size)`
- `public long getBorderLerpTime()`
- `public void setBorderLerpTime(long time)`
- `public double getBorderLerpTarget()`
- `public void setBorderLerpTarget(double lerpSize)`
- `public void getBorderCenterZ(double posZ)`
- `public void getBorderCenterX(double posX)`
- `public double getBorderSafeZone()`
- `public void setBorderSafeZone(double amount)`
- `public double getBorderDamagePerBlock()`
- `public void setBorderDamagePerBlock(double damage)`
- `public int getBorderWarningDistance()`
- `public int getBorderWarningTime()`
- `public void setBorderWarningDistance(int amountOfBlocks)`
- `public void setBorderWarningTime(int ticks)`
- `public EnumDifficulty getDifficulty()`
- `public void setDifficulty(EnumDifficulty newDifficulty)`
- `public boolean isDifficultyLocked()`
- `public void setDifficultyLocked(boolean locked)`
- `public void addToCrashReport(CrashReportCategory category)`
- `public void setAdditionalProperties(java.util.Map<java.lang.String,NBTBase> additionalProperties)`
  Allow access to additional mod specific world based properties
   Used by FML to store mod list associated with a world, and maybe an id map
   Used by Forge to store the dimensions available to a world
  - param: additionalProperties -
- `public NBTBase getAdditionalProperty(java.lang.String additionalProperty)`
- `@Deprecated public NBTTagCompound getDimensionData(DimensionType dimensionIn)` (deprecated)
  Deprecated.
- `public NBTTagCompound getDimensionData(int dimensionIn)`
- `@Deprecated public void setDimensionData(DimensionType dimensionIn,  NBTTagCompound compound)` (deprecated)
  Deprecated.
- `public void setDimensionData(int dimensionID,  NBTTagCompound compound)`
- `public int getVersionId()`
- `public boolean isVersionSnapshot()`
- `public java.lang.String getVersionName()`

## WorldSavedData

*class* `net.minecraft.world.storage.WorldSavedData`

All Implemented Interfaces: INBTSerializable<NBTTagCompound>

### Fields
- `public final java.lang.String mapName`

### Methods
- `public abstract void readFromNBT(NBTTagCompound nbt)`
- `public abstract NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public void markDirty()`
- `public void setDirty(boolean isDirty)`
- `public boolean isDirty()`
- `public void deserializeNBT(NBTTagCompound nbt)`
- `public NBTTagCompound serializeNBT()`

## WorldSavedDataCallableSave

*class* `net.minecraft.world.storage.WorldSavedDataCallableSave`

All Implemented Interfaces: java.lang.Runnable

### Methods
- `public void run()`

## WorldSummary

*class* `net.minecraft.world.storage.WorldSummary`

All Implemented Interfaces: java.lang.Comparable<WorldSummary>

### Methods
- `public java.lang.String getFileName()`
- `public java.lang.String getDisplayName()`
- `public long getSizeOnDisk()`
- `public boolean requiresConversion()`
- `public long getLastTimePlayed()`
- `public int compareTo(WorldSummary p_compareTo_1_)`
- `public GameType getEnumGameType()`
- `public boolean isHardcoreModeEnabled()`
- `public boolean getCheatsEnabled()`
- `public java.lang.String getVersionName()`
- `public boolean markVersionInList()`
- `public boolean askToOpenWorld()`
