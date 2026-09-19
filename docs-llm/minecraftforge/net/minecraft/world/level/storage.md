# net.minecraft.world.level.storage

- [Class LevelSummary.BackupStatus](#class-levelsummary.backupstatus)
- [Class PrimaryLevelData.SpecialWorldProperty](#class-primaryleveldata.specialworldproperty)
- [CommandStorage](#commandstorage)
- [CommandStorage.Container](#commandstorage.container)
- [DataVersion](#dataversion)
- [DerivedLevelData](#derivedleveldata)
- [DimensionDataStorage](#dimensiondatastorage)
- [LevelData](#leveldata)
- [LevelResource](#levelresource)
- [LevelStorageException](#levelstorageexception)
- [LevelStorageSource](#levelstoragesource)
- [LevelStorageSource.LevelCandidates](#levelstoragesource.levelcandidates)
- [LevelStorageSource.LevelDirectory](#levelstoragesource.leveldirectory)
- [LevelStorageSource.LevelStorageAccess](#levelstoragesource.levelstorageaccess)
- [LevelSummary](#levelsummary)
- [LevelSummary.SymlinkLevelSummary](#levelsummary.symlinklevelsummary)
- [LevelVersion](#levelversion)
- [PlayerDataStorage](#playerdatastorage)
- [PrimaryLevelData](#primaryleveldata)
- [ServerLevelData](#serverleveldata)
- [WorldData](#worlddata)
- [WritableLevelData](#writableleveldata)
## Class LevelSummary.BackupStatus

*enum* `net.minecraft.world.level.storage.Class LevelSummary.BackupStatus`

Enclosing class: LevelSummary

### Fields
- `private final boolean shouldBackup`
- `private final boolean severe`
- `private final String translationKey`

### Methods
- `public static LevelSummary.BackupStatus[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static LevelSummary.BackupStatus valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public boolean shouldBackup()`
- `public boolean isSevere()`
- `public String getTranslationKey()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class PrimaryLevelData.SpecialWorldProperty

*enum* `net.minecraft.world.level.storage.Class PrimaryLevelData.SpecialWorldProperty`

Enclosing class: PrimaryLevelData

### Methods
- `public static PrimaryLevelData.SpecialWorldProperty[] values()` (deprecated)
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static PrimaryLevelData.SpecialWorldProperty valueOf(String name)` (deprecated)
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

## CommandStorage

*class* `net.minecraft.world.level.storage.CommandStorage`

### Fields
- `private static final String ID_PREFIX` (= "command_storage_")
- `private final Map<String,CommandStorage.Container> namespaces`
- `private final DimensionDataStorage storage`

### Methods
- `private CommandStorage.Container newStorage(String p_164836_)`
- `private SavedData.Factory<CommandStorage.Container> factory(String p_300877_)`
- `public CompoundTag get(ResourceLocation p_78045_)`
- `public void set(ResourceLocation p_78047_,  CompoundTag p_78048_)`
- `public Stream<ResourceLocation> keys()`
- `private static String createId(String p_78038_)`

## CommandStorage.Container

*class* `net.minecraft.world.level.storage.CommandStorage.Container`

Enclosing class: CommandStorage

### Fields
- `private static final String TAG_CONTENTS` (= "contents")
- `private final Map<String,CompoundTag> storage`

### Methods
- `CommandStorage.Container load(CompoundTag p_164850_)`
- `public CompoundTag save(CompoundTag p_78075_)`
- `public CompoundTag get(String p_78059_)`
- `public void put(String p_78064_,  CompoundTag p_78065_)`
- `public Stream<ResourceLocation> getKeys(String p_78073_)`

### Inherited methods
- from `net.minecraft.world.level.saveddata.SavedData`: `isDirty`, `save`, `setDirty`, `setDirty`

## DataVersion

*class* `net.minecraft.world.level.storage.DataVersion`

### Fields
- `private final int version`
- `private final String series`
- `public static String MAIN_SERIES`

### Methods
- `public boolean isSideSeries()`
- `public String getSeries()`
- `public int getVersion()`
- `public boolean isCompatible(DataVersion p_193004_)`

## DerivedLevelData

*class* `net.minecraft.world.level.storage.DerivedLevelData`

### Fields
- `private final WorldData worldData`
- `private final ServerLevelData wrapped`

### Methods
- `public int getXSpawn()`
- `public int getYSpawn()`
- `public int getZSpawn()`
- `public float getSpawnAngle()`
- `public long getGameTime()`
- `public long getDayTime()`
- `public String getLevelName()`
- `public int getClearWeatherTime()`
- `public void setClearWeatherTime(int p_78085_)`
- `public boolean isThundering()`
- `public int getThunderTime()`
- `public boolean isRaining()`
- `public int getRainTime()`
- `public GameType getGameType()`
- `public void setXSpawn(int p_78103_)`
- `public void setYSpawn(int p_78110_)`
- `public void setZSpawn(int p_78115_)`
- `public void setSpawnAngle(float p_78083_)`
- `public void setGameTime(long p_78087_)`
- `public void setDayTime(long p_78105_)`
- `public void setSpawn(BlockPos p_78093_,  float p_78094_)`
- `public void setThundering(boolean p_78100_)`
- `public void setThunderTime(int p_78118_)`
- `public void setRaining(boolean p_78107_)`
- `public void setRainTime(int p_78121_)`
- `public void setGameType(GameType p_78089_)`
- `public boolean isHardcore()`
- `public boolean getAllowCommands()`
- `public boolean isInitialized()`
- `public void setInitialized(boolean p_78112_)`
- `public GameRules getGameRules()`
- `public WorldBorder.Settings getWorldBorder()`
- `public void setWorldBorder(WorldBorder.Settings p_78091_)`
- `public Difficulty getDifficulty()`
- `public boolean isDifficultyLocked()`
- `public TimerQueue<MinecraftServer> getScheduledEvents()`
- `public int getWanderingTraderSpawnDelay()`
- `public void setWanderingTraderSpawnDelay(int p_78124_)`
- `public int getWanderingTraderSpawnChance()`
- `public void setWanderingTraderSpawnChance(int p_78127_)`
- `public UUID getWanderingTraderId()`
- `public void setWanderingTraderId(UUID p_78096_)`
- `public void fillCrashReportCategory(CrashReportCategory p_164852_,  LevelHeightAccessor p_164853_)`

## DimensionDataStorage

*class* `net.minecraft.world.level.storage.DimensionDataStorage`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Map<String,SavedData> cache`
- `private final com.mojang.datafixers.DataFixer fixerUpper`
- `private final File dataFolder`

### Methods
- `private File getDataFile(String p_78157_)`
- `public <T extends SavedData> T computeIfAbsent(SavedData.Factory<T> p_297495_,  String p_164864_)`
- `@Nullable public <T extends SavedData> T get(SavedData.Factory p_297465_,  String p_164860_)`
- `@Nullable private <T extends SavedData> T readSavedData(Function<CompoundTag,T> p_164869_,  DataFixTypes p_300231_,  String p_164870_)`
- `public void set(String p_164856_,  SavedData p_164857_)`
- `public CompoundTag readTagFromDisk(String p_78159_,  DataFixTypes p_301060_,  int p_78160_)  throws IOException`
  - throws: IOException
- `private boolean isGzip(PushbackInputStream p_78155_)  throws IOException`
  - throws: IOException
- `public void save()`

## LevelData

*interface* `net.minecraft.world.level.storage.LevelData`

### Methods
- `int getXSpawn()`
- `int getYSpawn()`
- `int getZSpawn()`
- `float getSpawnAngle()`
- `long getGameTime()`
- `long getDayTime()`
- `boolean isThundering()`
- `boolean isRaining()`
- `void setRaining(boolean p_78171_)`
- `boolean isHardcore()`
- `GameRules getGameRules()`
- `Difficulty getDifficulty()`
- `boolean isDifficultyLocked()`
- `default void fillCrashReportCategory(CrashReportCategory p_164873_,  LevelHeightAccessor p_164874_)`

## LevelResource

*class* `net.minecraft.world.level.storage.LevelResource`

### Fields
- `public static final LevelResource PLAYER_ADVANCEMENTS_DIR`
- `public static final LevelResource PLAYER_STATS_DIR`
- `public static final LevelResource PLAYER_DATA_DIR`
- `public static final LevelResource PLAYER_OLD_DATA_DIR`
- `public static final LevelResource LEVEL_DATA_FILE`
- `public static final LevelResource OLD_LEVEL_DATA_FILE`
- `public static final LevelResource ICON_FILE`
- `public static final LevelResource LOCK_FILE`
- `public static final LevelResource GENERATED_DIR`
- `public static final LevelResource DATAPACK_DIR`
- `public static final LevelResource MAP_RESOURCE_FILE`
- `public static final LevelResource ROOT`
- `private final String id`

### Methods
- `public String getId()`
- `public String toString()`

## LevelStorageException

*class* `net.minecraft.world.level.storage.LevelStorageException`

### Fields
- `private final Component messageComponent`

### Methods
- `public Component getMessageComponent()`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## LevelStorageSource

*class* `net.minecraft.world.level.storage.LevelStorageSource`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `static final DateTimeFormatter FORMATTER`
- `private static final com.google.common.collect.ImmutableList<String> OLD_SETTINGS_KEYS`
- `private static final String TAG_DATA` (= "Data")
- `private static final PathMatcher NO_SYMLINKS_ALLOWED`
- `public static final String ALLOWED_SYMLINKS_CONFIG_NAME` (= "allowed_symlinks.txt")
- `private static final int SUMMARY_UNCOMPRESSED_NBT_QUOTA` (= 104857600)
- `private final Path baseDir`
- `private final Path backupDir`
- `final com.mojang.datafixers.DataFixer fixerUpper`
- `private final DirectoryValidator worldDirValidator`

### Methods
- `public static DirectoryValidator parseValidator(Path p_289968_)`
- `public static LevelStorageSource createDefault(Path p_78243_)`
- `private static <T> com.mojang.serialization.DataResult<WorldGenSettings> readWorldGenSettings(com.mojang.serialization.Dynamic<T> p_251661_,  com.mojang.datafixers.DataFixer p_251712_,  int p_250368_)`
- `private static WorldDataConfiguration readDataConfig(com.mojang.serialization.Dynamic<?> p_250884_)`
- `public String getName()`
- `public LevelStorageSource.LevelCandidates findLevelCandidates()  throws LevelStorageException`
  - throws: LevelStorageException
- `public CompletableFuture<List<LevelSummary>> loadLevelSummaries(LevelStorageSource.LevelCandidates p_230814_)`
- `private int getStorageVersion()`
- `@Nullable <T> T readLevelData(LevelStorageSource.LevelDirectory p_230818_,  BiFunction<Path,com.mojang.datafixers.DataFixer,T> p_230819_)`
- `@Nullable private static WorldDataConfiguration getDataConfiguration(Path p_230829_,  com.mojang.datafixers.DataFixer p_230830_)`
- `static BiFunction<Path,com.mojang.datafixers.DataFixer,com.mojang.datafixers.util.Pair<WorldData,WorldDimensions.Complete>> getLevelData(com.mojang.serialization.DynamicOps<Tag> p_250592_,  WorldDataConfiguration p_249054_,  Registry<LevelStem> p_249363_,  com.mojang.serialization.Lifecycle p_251214_)`
- `BiFunction<Path,com.mojang.datafixers.DataFixer,LevelSummary> levelSummaryReader(LevelStorageSource.LevelDirectory p_230821_,  boolean p_230822_)`
- `private static FeatureFlagSet parseFeatureFlagsFromSummary(com.mojang.serialization.Dynamic<?> p_249466_)`
- `@Nullable private static Tag readLightweightData(Path p_230837_)  throws IOException`
  - throws: IOException
- `public boolean isNewLevelIdAcceptable(String p_78241_)`
- `public boolean levelExists(String p_78256_)`
- `public Path getLevelPath(String p_289974_)`
- `public Path getBaseDir()`
- `public Path getBackupPath()`
- `public LevelStorageSource.LevelStorageAccess validateAndCreateAccess(String p_289980_)  throws IOException, ContentValidationException`
  - throws: IOException
  - throws: ContentValidationException
- `public LevelStorageSource.LevelStorageAccess createAccess(String p_78261_)  throws IOException`
  - throws: IOException
- `public DirectoryValidator getWorldDirValidator()`

## LevelStorageSource.LevelCandidates

*record* `net.minecraft.world.level.storage.LevelStorageSource.LevelCandidates`

Enclosing class: LevelStorageSource

### Fields
- `private final List<LevelStorageSource.LevelDirectory> levels`
  The field for the levels record component.

### Methods
- `public boolean isEmpty()`
- `public Iterator<LevelStorageSource.LevelDirectory> iterator()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public List<LevelStorageSource.LevelDirectory> levels()`
  Returns the value of the levels record component.
  - returns: the value of the levels record component

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `spliterator`

## LevelStorageSource.LevelDirectory

*record* `net.minecraft.world.level.storage.LevelStorageSource.LevelDirectory`

Enclosing class: LevelStorageSource

### Fields
- `private final Path path`
  The field for the path record component.

### Methods
- `public String directoryName()`
- `public Path dataFile()`
- `public Path oldDataFile()`
- `public Path corruptedDataFile(LocalDateTime p_230857_)`
- `public Path iconFile()`
- `public Path lockFile()`
- `public Path resourcePath(LevelResource p_230855_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public Path path()`
  Returns the value of the path record component.
  - returns: the value of the path record component

## LevelStorageSource.LevelStorageAccess

*class* `net.minecraft.world.level.storage.LevelStorageSource.LevelStorageAccess`

Enclosing class: LevelStorageSource

### Fields
- `final DirectoryLock lock`
- `final LevelStorageSource.LevelDirectory levelDirectory`
- `private final String levelId`
- `private final Map<LevelResource,Path> resources`

### Methods
- `public LevelStorageSource parent()`
- `public String getLevelId()`
- `public Path getLevelPath(LevelResource p_78284_)`
- `public Path getDimensionPath(ResourceKey<Level> p_197395_)`
- `private void checkLock()`
- `public PlayerDataStorage createPlayerStorage()`
- `@Nullable public LevelSummary getSummary()`
- `@Nullable public com.mojang.datafixers.util.Pair<WorldData,WorldDimensions.Complete> getDataTag(com.mojang.serialization.DynamicOps<Tag> p_248747_,  WorldDataConfiguration p_251873_,  Registry<LevelStem> p_249187_,  com.mojang.serialization.Lifecycle p_249736_)`
- `public void readAdditionalLevelSaveData()`
- `@Nullable public WorldDataConfiguration getDataConfiguration()`
- `public void saveDataTag(RegistryAccess p_78288_,  WorldData p_78289_)`
- `public void saveDataTag(RegistryAccess p_78291_,  WorldData p_78292_,  @Nullable  CompoundTag p_78293_)`
- `public Optional<Path> getIconFile()`
- `public Path getWorldDir()`
- `public void deleteLevel()  throws IOException`
  - throws: IOException
- `public void renameLevel(String p_78298_)  throws IOException`
  - throws: IOException
- `public long makeWorldBackup()  throws IOException`
  - throws: IOException
- `public void close()  throws IOException`
  - throws: IOException

## LevelSummary

*class* `net.minecraft.world.level.storage.LevelSummary`

### Fields
- `private final LevelSettings settings`
- `private final LevelVersion levelVersion`
- `private final String levelId`
- `private final boolean requiresManualConversion`
- `private final boolean locked`
- `private final boolean experimental`
- `private final Path icon`
- `@Nullable private Component info`

### Methods
- `public String getLevelId()`
- `public String getLevelName()`
- `public Path getIcon()`
- `public boolean requiresManualConversion()`
- `public boolean isExperimental()`
- `public long getLastPlayed()`
- `public int compareTo(LevelSummary p_78360_)`
- `public LevelSettings getSettings()`
- `public GameType getGameMode()`
- `public boolean isHardcore()`
- `public boolean hasCheats()`
- `public MutableComponent getWorldVersionName()`
- `public LevelVersion levelVersion()`
- `public boolean markVersionInList()`
- `public boolean askToOpenWorld()`
- `public LevelSummary.BackupStatus backupStatus()`
- `public boolean isLocked()`
- `public boolean isDisabled()`
- `public boolean isCompatible()`
- `public Component getInfo()`
- `private Component createInfo()`
- `public boolean isLifecycleExperimental()`

## LevelSummary.SymlinkLevelSummary

*class* `net.minecraft.world.level.storage.LevelSummary.SymlinkLevelSummary`

Enclosing class: LevelSummary

### Methods
- `public String getLevelName()`
- `public Component getInfo()`
- `public long getLastPlayed()`
- `public boolean isDisabled()`

### Inherited methods
- from `net.minecraft.world.level.storage.LevelSummary`: `askToOpenWorld`, `backupStatus`, `compareTo`, `getGameMode`, `getIcon`, `getLevelId`, `getSettings`, `getWorldVersionName`, `hasCheats`, `isCompatible`, `isExperimental`, `isHardcore`, `isLifecycleExperimental`, `isLocked`, `levelVersion`, `markVersionInList`, `requiresManualConversion`

## LevelVersion

*class* `net.minecraft.world.level.storage.LevelVersion`

### Fields
- `private final int levelDataVersion`
- `private final long lastPlayed`
- `private final String minecraftVersionName`
- `private final DataVersion minecraftVersion`
- `private final boolean snapshot`

### Methods
- `public static LevelVersion parse(com.mojang.serialization.Dynamic<?> p_78391_)`
- `public int levelDataVersion()`
- `public long lastPlayed()`
- `public String minecraftVersionName()`
- `public DataVersion minecraftVersion()`
- `public boolean snapshot()`

## PlayerDataStorage

*class* `net.minecraft.world.level.storage.PlayerDataStorage`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final File playerDir`
- `protected final com.mojang.datafixers.DataFixer fixerUpper`

### Methods
- `public void save(Player p_78434_)`
- `@Nullable public CompoundTag load(Player p_78436_)`
- `public String[] getSeenPlayers()`
- `public File getPlayerDataFolder()`

## PrimaryLevelData

*class* `net.minecraft.world.level.storage.PrimaryLevelData`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `protected static final String PLAYER` (= "Player")
- `protected static final String WORLD_GEN_SETTINGS` (= "WorldGenSettings")
- `private LevelSettings settings`
- `private final WorldOptions worldOptions`
- `private final PrimaryLevelData.SpecialWorldProperty specialWorldProperty`
- `private final com.mojang.serialization.Lifecycle worldGenSettingsLifecycle`
- `private int xSpawn`
- `private int ySpawn`
- `private int zSpawn`
- `private float spawnAngle`
- `private long gameTime`
- `private long dayTime`
- `@Nullable private final com.mojang.datafixers.DataFixer fixerUpper`
- `private final int playerDataVersion`
- `private boolean upgradedPlayerTag`
- `@Nullable private CompoundTag loadedPlayerTag`
- `private final int version`
- `private int clearWeatherTime`
- `private boolean raining`
- `private int rainTime`
- `private boolean thundering`
- `private int thunderTime`
- `private boolean initialized`
- `private boolean difficultyLocked`
- `private WorldBorder.Settings worldBorder`
- `private EndDragonFight.Data endDragonFightData`
- `@Nullable private CompoundTag customBossEvents`
- `private int wanderingTraderSpawnDelay`
- `private int wanderingTraderSpawnChance`
- `@Nullable private UUID wanderingTraderId`
- `private final Set<String> knownServerBrands`
- `private boolean wasModded`
- `private final Set<String> removedFeatureFlags`
- `private final TimerQueue<MinecraftServer> scheduledEvents`
- `private boolean confirmedExperimentalWarning`

### Inherited fields
- from `net.minecraft.world.level.storage.WorldData`: `ANVIL_VERSION_ID`, `MCREGION_VERSION_ID`

### Methods
- `public static <T> PrimaryLevelData parse(com.mojang.serialization.Dynamic<T> p_78531_,  com.mojang.datafixers.DataFixer p_78532_,  int p_78533_,  @Nullable  CompoundTag p_78534_,  LevelSettings p_78535_,  LevelVersion p_78536_,  PrimaryLevelData.SpecialWorldProperty p_250651_,  WorldOptions p_251864_,  com.mojang.serialization.Lifecycle p_78538_)`
- `public CompoundTag createTag(RegistryAccess p_78543_,  @Nullable  CompoundTag p_78544_)`
- `private void setTagData(RegistryAccess p_78546_,  CompoundTag p_78547_,  @Nullable  CompoundTag p_78548_)`
- `private static ListTag stringCollectionToTag(Set<String> p_277880_)`
- `public int getXSpawn()`
- `public int getYSpawn()`
- `public int getZSpawn()`
- `public float getSpawnAngle()`
- `public long getGameTime()`
- `public long getDayTime()`
- `private void updatePlayerTag()`
- `public CompoundTag getLoadedPlayerTag()`
- `public void setXSpawn(int p_78565_)`
- `public void setYSpawn(int p_78579_)`
- `public void setZSpawn(int p_78584_)`
- `public void setSpawnAngle(float p_78515_)`
- `public void setGameTime(long p_78519_)`
- `public void setDayTime(long p_78567_)`
- `public void setSpawn(BlockPos p_78540_,  float p_78541_)`
- `public String getLevelName()`
- `public int getVersion()`
- `public int getClearWeatherTime()`
- `public void setClearWeatherTime(int p_78517_)`
- `public boolean isThundering()`
- `public void setThundering(boolean p_78562_)`
- `public int getThunderTime()`
- `public void setThunderTime(int p_78589_)`
- `public boolean isRaining()`
- `public void setRaining(boolean p_78576_)`
- `public int getRainTime()`
- `public void setRainTime(int p_78592_)`
- `public GameType getGameType()`
- `public void setGameType(GameType p_78525_)`
- `public boolean isHardcore()`
- `public boolean getAllowCommands()`
- `public boolean isInitialized()`
- `public void setInitialized(boolean p_78581_)`
- `public GameRules getGameRules()`
- `public WorldBorder.Settings getWorldBorder()`
- `public void setWorldBorder(WorldBorder.Settings p_78527_)`
- `public Difficulty getDifficulty()`
- `public void setDifficulty(Difficulty p_78521_)`
- `public boolean isDifficultyLocked()`
- `public void setDifficultyLocked(boolean p_78586_)`
- `public TimerQueue<MinecraftServer> getScheduledEvents()`
- `public void fillCrashReportCategory(CrashReportCategory p_164972_,  LevelHeightAccessor p_164973_)`
- `public WorldOptions worldGenOptions()`
- `public boolean isFlatWorld()`
- `public boolean isDebugWorld()`
- `public com.mojang.serialization.Lifecycle worldGenSettingsLifecycle()`
- `public EndDragonFight.Data endDragonFightData()`
- `public void setEndDragonFightData(EndDragonFight.Data p_289770_)`
- `public WorldDataConfiguration getDataConfiguration()`
- `public void setDataConfiguration(WorldDataConfiguration p_252328_)`
- `@Nullable public CompoundTag getCustomBossEvents()`
- `public void setCustomBossEvents(@Nullable  CompoundTag p_78571_)`
- `public int getWanderingTraderSpawnDelay()`
- `public void setWanderingTraderSpawnDelay(int p_78595_)`
- `public int getWanderingTraderSpawnChance()`
- `public void setWanderingTraderSpawnChance(int p_78598_)`
- `@Nullable public UUID getWanderingTraderId()`
- `public void setWanderingTraderId(UUID p_78553_)`
- `public void setModdedInfo(String p_78550_,  boolean p_78551_)`
- `public boolean wasModded()`
- `public Set<String> getKnownServerBrands()`
- `public Set<String> getRemovedFeatureFlags()`
- `public ServerLevelData overworldData()`
- `public LevelSettings getLevelSettings()`
- `public boolean hasConfirmedExperimentalWarning()`
- `public PrimaryLevelData withConfirmedWarning(boolean confirmedWarning)`

### Inherited methods
- from `net.minecraft.world.level.storage.WorldData`: `enabledFeatures`, `fillCrashReportCategory`, `getStorageVersionName`

## ServerLevelData

*interface* `net.minecraft.world.level.storage.ServerLevelData`

All Superinterfaces: LevelData, WritableLevelData

### Methods
- `String getLevelName()`
- `void setThundering(boolean p_78623_)`
- `int getRainTime()`
- `void setRainTime(int p_78627_)`
- `void setThunderTime(int p_78626_)`
- `int getThunderTime()`
- `default void fillCrashReportCategory(CrashReportCategory p_164976_,  LevelHeightAccessor p_164977_)`
- `int getClearWeatherTime()`
- `void setClearWeatherTime(int p_78616_)`
- `int getWanderingTraderSpawnDelay()`
- `void setWanderingTraderSpawnDelay(int p_78628_)`
- `int getWanderingTraderSpawnChance()`
- `void setWanderingTraderSpawnChance(int p_78629_)`
- `@Nullable UUID getWanderingTraderId()`
- `void setWanderingTraderId(UUID p_78620_)`
- `GameType getGameType()`
- `void setWorldBorder(WorldBorder.Settings p_78619_)`
- `WorldBorder.Settings getWorldBorder()`
- `boolean isInitialized()`
- `void setInitialized(boolean p_78625_)`
- `boolean getAllowCommands()`
- `void setGameType(GameType p_78618_)`
- `TimerQueue<MinecraftServer> getScheduledEvents()`
- `void setGameTime(long p_78617_)`
- `void setDayTime(long p_78624_)`

### Inherited methods
- from `net.minecraft.world.level.storage.LevelData`: `getDayTime`, `getDifficulty`, `getGameRules`, `getGameTime`, `getSpawnAngle`, `getXSpawn`, `getYSpawn`, `getZSpawn`, `isDifficultyLocked`, `isHardcore`, `isRaining`, `isThundering`, `setRaining`
- from `net.minecraft.world.level.storage.WritableLevelData`: `setSpawn`, `setSpawnAngle`, `setXSpawn`, `setYSpawn`, `setZSpawn`

## WorldData

*interface* `net.minecraft.world.level.storage.WorldData`

### Fields
- `static final int ANVIL_VERSION_ID` (= 19133)
- `static final int MCREGION_VERSION_ID` (= 19132)

### Methods
- `WorldDataConfiguration getDataConfiguration()`
- `void setDataConfiguration(WorldDataConfiguration p_250014_)`
- `boolean wasModded()`
- `Set<String> getKnownServerBrands()`
- `Set<String> getRemovedFeatureFlags()`
- `void setModdedInfo(String p_78638_,  boolean p_78639_)`
- `default void fillCrashReportCategory(CrashReportCategory p_78640_)`
- `default String getStorageVersionName(int p_78647_)`
- `@Nullable CompoundTag getCustomBossEvents()`
- `void setCustomBossEvents(@Nullable  CompoundTag p_78643_)`
- `ServerLevelData overworldData()`
- `LevelSettings getLevelSettings()`
- `CompoundTag createTag(RegistryAccess p_78636_,  @Nullable  CompoundTag p_78637_)`
- `boolean isHardcore()`
- `int getVersion()`
- `String getLevelName()`
- `GameType getGameType()`
- `void setGameType(GameType p_78635_)`
- `boolean getAllowCommands()`
- `Difficulty getDifficulty()`
- `void setDifficulty(Difficulty p_78633_)`
- `boolean isDifficultyLocked()`
- `void setDifficultyLocked(boolean p_78645_)`
- `GameRules getGameRules()`
- `@Nullable CompoundTag getLoadedPlayerTag()`
- `EndDragonFight.Data endDragonFightData()`
- `void setEndDragonFightData(EndDragonFight.Data p_289783_)`
- `WorldOptions worldGenOptions()`
- `boolean isFlatWorld()`
- `boolean isDebugWorld()`
- `com.mojang.serialization.Lifecycle worldGenSettingsLifecycle()`
- `default FeatureFlagSet enabledFeatures()`

## WritableLevelData

*interface* `net.minecraft.world.level.storage.WritableLevelData`

All Superinterfaces: LevelData

### Methods
- `void setXSpawn(int p_78651_)`
- `void setYSpawn(int p_78652_)`
- `void setZSpawn(int p_78653_)`
- `void setSpawnAngle(float p_78648_)`
- `default void setSpawn(BlockPos p_78649_,  float p_78650_)`

### Inherited methods
- from `net.minecraft.world.level.storage.LevelData`: `fillCrashReportCategory`, `getDayTime`, `getDifficulty`, `getGameRules`, `getGameTime`, `getSpawnAngle`, `getXSpawn`, `getYSpawn`, `getZSpawn`, `isDifficultyLocked`, `isHardcore`, `isRaining`, `isThundering`, `setRaining`
