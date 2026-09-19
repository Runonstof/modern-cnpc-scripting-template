# net.minecraft

- [BlockUtil](#blockutil)
- [BlockUtil.FoundRectangle](#blockutil.foundrectangle)
- [BlockUtil.IntBounds](#blockutil.intbounds)
- [CharPredicate](#charpredicate)
- [Class ChatFormatting](#class-chatformatting)
- [Class Util.IdentityStrategy](#class-util.identitystrategy)
- [Class Util.OS](#class-util.os)
- [CrashReport](#crashreport)
- [CrashReportCategory](#crashreportcategory)
- [CrashReportCategory.Entry](#crashreportcategory.entry)
- [CrashReportDetail](#crashreportdetail)
- [DefaultUncaughtExceptionHandler](#defaultuncaughtexceptionhandler)
- [DefaultUncaughtExceptionHandlerWithName](#defaultuncaughtexceptionhandlerwithname)
- [DetectedVersion](#detectedversion)
- [FieldsAreNonnullByDefault](#fieldsarenonnullbydefault)
- [FileUtil](#fileutil)
- [MethodsReturnNonnullByDefault](#methodsreturnnonnullbydefault)
- [Optionull](#optionull)
- [ReportedException](#reportedexception)
- [ResourceLocationException](#resourcelocationexception)
- [SharedConstants](#sharedconstants)
- [SystemReport](#systemreport)
- [Util](#util)
- [WorldVersion](#worldversion)
## BlockUtil

*class* `net.minecraft.BlockUtil`

### Methods
- `public static BlockUtil.FoundRectangle getLargestRectangleAround(BlockPos p_124335_,  Direction.Axis p_124336_,  int p_124337_,  Direction.Axis p_124338_,  int p_124339_,  Predicate<BlockPos> p_124340_)`
- `private static int getLimit(Predicate<BlockPos> p_124342_,  BlockPos.MutableBlockPos p_124343_,  Direction p_124344_,  int p_124345_)`
- `static com.mojang.datafixers.util.Pair<BlockUtil.IntBounds,Integer> getMaxRectangleLocation(int[] p_124347_)`
- `public static Optional<BlockPos> getTopConnectedBlock(BlockGetter p_177846_,  BlockPos p_177847_,  Block p_177848_,  Direction p_177849_,  Block p_177850_)`

## BlockUtil.FoundRectangle

*class* `net.minecraft.BlockUtil.FoundRectangle`

Enclosing class: BlockUtil

### Fields
- `public final BlockPos minCorner`
- `public final int axis1Size`
- `public final int axis2Size`

## BlockUtil.IntBounds

*class* `net.minecraft.BlockUtil.IntBounds`

Enclosing class: BlockUtil

### Fields
- `public final int min`
- `public final int max`

### Methods
- `public String toString()`

## CharPredicate

*interface* `net.minecraft.CharPredicate`

### Methods
- `boolean test(char p_125855_)`
- `default CharPredicate and(CharPredicate p_178287_)`
- `default CharPredicate negate()`
- `default CharPredicate or(CharPredicate p_178292_)`

## Class ChatFormatting

*enum* `net.minecraft.Class ChatFormatting`

### Fields
- `public static final com.mojang.serialization.Codec<ChatFormatting> CODEC`
- `public static final char PREFIX_CODE`
- `private static final Map<String,ChatFormatting> FORMATTING_BY_NAME`
- `private static final Pattern STRIP_FORMATTING_PATTERN`
- `private final String name`
- `private final char code`
- `private final boolean isFormat`
- `private final String toString`
- `private final int id`
- `@Nullable private final Integer color`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static ChatFormatting[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ChatFormatting valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `private static String cleanName(String p_126663_)`
- `public char getChar()`
- `public int getId()`
- `public boolean isFormat()`
- `public boolean isColor()`
- `@Nullable public Integer getColor()`
- `public String getName()`
- `public String toString()`
- `@Nullable public static String stripFormatting(@Nullable  String p_126650_)`
- `@Nullable public static ChatFormatting getByName(@Nullable  String p_126658_)`
- `@Nullable public static ChatFormatting getById(int p_126648_)`
- `@Nullable public static ChatFormatting getByCode(char p_126646_)`
- `public static Collection<String> getNames(boolean p_126654_,  boolean p_126655_)`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## Class Util.IdentityStrategy

*enum* `net.minecraft.Class Util.IdentityStrategy`

Enclosing class: Util

### Methods
- `public static Util.IdentityStrategy[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Util.IdentityStrategy valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int hashCode(Object p_137626_)`
- `public boolean equals(Object p_137623_,  Object p_137624_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Util.OS

*enum* `net.minecraft.Class Util.OS`

Enclosing class: Util

### Fields
- `private final String telemetryName`

### Methods
- `public static Util.OS[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Util.OS valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public void openUrl(URL p_137651_)`
- `public void openUri(URI p_137649_)`
- `public void openFile(File p_137645_)`
- `protected String[] getOpenUrlArguments(URL p_137652_)`
- `public void openUri(String p_137647_)`
- `public String telemetryName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## CrashReport

*class* `net.minecraft.CrashReport`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final DateTimeFormatter DATE_TIME_FORMATTER`
- `private final String title`
- `private final Throwable exception`
- `private final List<CrashReportCategory> details`
- `private File saveFile`
- `private boolean trackingStackTrace`
- `private StackTraceElement[] uncategorizedStackTrace`
- `private final SystemReport systemReport`

### Methods
- `public String getTitle()`
- `public Throwable getException()`
- `public String getDetails()`
- `public void getDetails(StringBuilder p_127520_)`
- `public String getExceptionMessage()`
- `public String getFriendlyReport()`
- `public File getSaveFile()`
- `public boolean saveToFile(File p_127513_)`
- `public SystemReport getSystemReport()`
- `public CrashReportCategory addCategory(String p_127515_)`
- `public CrashReportCategory addCategory(String p_127517_,  int p_127518_)`
- `private static String getErrorComment()`
- `public static CrashReport forThrowable(Throwable p_127522_,  String p_127523_)`
- `public static void preload()`

## CrashReportCategory

*class* `net.minecraft.CrashReportCategory`

### Fields
- `private final String title`
- `private final List<CrashReportCategory.Entry> entries`
- `private StackTraceElement[] stackTrace`

### Methods
- `public static String formatLocation(LevelHeightAccessor p_178938_,  double p_178939_,  double p_178940_,  double p_178941_)`
- `public static String formatLocation(LevelHeightAccessor p_178948_,  BlockPos p_178949_)`
- `public static String formatLocation(LevelHeightAccessor p_178943_,  int p_178944_,  int p_178945_,  int p_178946_)`
- `public CrashReportCategory setDetail(String p_128166_,  CrashReportDetail<String> p_128167_)`
- `public CrashReportCategory setDetail(String p_128160_,  Object p_128161_)`
- `public void setDetailError(String p_128163_,  Throwable p_128164_)`
- `public int fillInStackTrace(int p_128149_)`
- `public boolean validateStackTrace(StackTraceElement p_128157_,  StackTraceElement p_128158_)`
- `public void trimStacktrace(int p_128175_)`
- `public void getDetails(StringBuilder p_128169_)`
- `public StackTraceElement[] getStacktrace()`
- `public void applyStackTrace(Throwable t)`
- `public static void populateBlockDetails(CrashReportCategory p_178951_,  LevelHeightAccessor p_178952_,  BlockPos p_178953_,  @Nullable  BlockState p_178954_)`

## CrashReportCategory.Entry

*class* `net.minecraft.CrashReportCategory.Entry`

Enclosing class: CrashReportCategory

### Fields
- `private final String key`
- `private final String value`

### Methods
- `public String getKey()`
- `public String getValue()`

## CrashReportDetail

*interface* `net.minecraft.CrashReportDetail`

All Superinterfaces: Callable<V>

### Inherited methods
- from `java.util.concurrent.Callable`: `call`

## DefaultUncaughtExceptionHandler

*class* `net.minecraft.DefaultUncaughtExceptionHandler`

### Fields
- `private final org.slf4j.Logger logger`

### Methods
- `public void uncaughtException(Thread p_131079_,  Throwable p_131080_)`

## DefaultUncaughtExceptionHandlerWithName

*class* `net.minecraft.DefaultUncaughtExceptionHandlerWithName`

### Fields
- `private final org.slf4j.Logger logger`

### Methods
- `public void uncaughtException(Thread p_131803_,  Throwable p_131804_)`

## DetectedVersion

*class* `net.minecraft.DetectedVersion`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final WorldVersion BUILT_IN`
- `private final String id`
- `private final String name`
- `private final boolean stable`
- `private final DataVersion worldVersion`
- `private final int protocolVersion`
- `private final int resourcePackVersion`
- `private final int dataPackVersion`
- `private final Date buildTime`

### Methods
- `public static WorldVersion tryDetectVersion()`
- `public String getId()`
- `public String getName()`
- `public DataVersion getDataVersion()`
- `public int getProtocolVersion()`
- `public int getPackVersion(PackType p_265454_)`
- `public Date getBuildTime()`
- `public boolean isStable()`

## FieldsAreNonnullByDefault

*annotation interface* `net.minecraft.FieldsAreNonnullByDefault`

## FileUtil

*class* `net.minecraft.FileUtil`

### Fields
- `private static final Pattern COPY_COUNTER_PATTERN`
- `private static final int MAX_FILE_NAME` (= 255)
- `private static final Pattern RESERVED_WINDOWS_FILENAMES`
- `private static final Pattern STRICT_PATH_SEGMENT_CHECK`

### Methods
- `public static String findAvailableName(Path p_133731_,  String p_133732_,  String p_133733_)  throws IOException`
  - throws: IOException
- `public static boolean isPathNormalized(Path p_133729_)`
- `public static boolean isPathPortable(Path p_133735_)`
- `public static Path createPathToResource(Path p_133737_,  String p_133738_,  String p_133739_)`
- `public static String getFullResourcePath(String p_179923_)`
- `public static String normalizeResourcePath(String p_179925_)`
- `public static com.mojang.serialization.DataResult<List<String>> decomposePath(String p_248866_)`
- `public static Path resolvePath(Path p_251522_,  List<String> p_251495_)`
- `public static boolean isValidStrictPathSegment(String p_249814_)`
- `public static void validatePath(String... p_249502_)`
- `public static void createDirectoriesSafe(Path p_259902_)  throws IOException`
  - throws: IOException

## MethodsReturnNonnullByDefault

*annotation interface* `net.minecraft.MethodsReturnNonnullByDefault`

## Optionull

*class* `net.minecraft.Optionull`

### Methods
- `@Nullable public static <T, R> R map(@Nullable  T p_270441_,  Function<T,R> p_270332_)`
- `public static <T, R> R mapOrDefault(@Nullable  T p_270215_,  Function<T,R> p_270557_,  R p_270839_)`
- `public static <T, R> R mapOrElse(@Nullable  T p_270820_,  Function<T,R> p_270536_,  Supplier<R> p_270756_)`
- `@Nullable public static <T> T first(Collection<T> p_270346_)`
- `public static <T> T firstOrDefault(Collection<T> p_270625_,  T p_270960_)`
- `public static <T> T firstOrElse(Collection<T> p_270529_,  Supplier<T> p_270239_)`
- `public static <T> boolean isNullOrEmpty(@Nullable  T[] p_270794_)`
- `public static boolean isNullOrEmpty(@Nullable  boolean[] p_270403_)`
- `public static boolean isNullOrEmpty(@Nullable  byte[] p_270775_)`
- `public static boolean isNullOrEmpty(@Nullable  char[] p_270512_)`
- `public static boolean isNullOrEmpty(@Nullable  short[] p_270712_)`
- `public static boolean isNullOrEmpty(@Nullable  int[] p_270127_)`
- `public static boolean isNullOrEmpty(@Nullable  long[] p_270148_)`
- `public static boolean isNullOrEmpty(@Nullable  float[] p_270428_)`
- `public static boolean isNullOrEmpty(@Nullable  double[] p_270373_)`

## ReportedException

*class* `net.minecraft.ReportedException`

### Fields
- `private final CrashReport report`

### Methods
- `public CrashReport getReport()`
- `public Throwable getCause()`
- `public String getMessage()`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ResourceLocationException

*class* `net.minecraft.ResourceLocationException`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## SharedConstants

*class* `net.minecraft.SharedConstants`

### Fields
- `@Deprecated public static final boolean SNAPSHOT` (= false, deprecated)
- `@Deprecated public static final int WORLD_VERSION` (= 3578, deprecated)
- `@Deprecated public static final String SERIES` (= "main", deprecated)
- `@Deprecated public static final String VERSION_STRING` (= "1.20.2", deprecated)
- `@Deprecated public static final int RELEASE_NETWORK_PROTOCOL_VERSION` (= 764, deprecated)
- `@Deprecated public static final int SNAPSHOT_NETWORK_PROTOCOL_VERSION` (= 153, deprecated)
- `public static final int SNBT_NAG_VERSION` (= 3563)
- `private static final int SNAPSHOT_PROTOCOL_BIT` (= 30)
- `public static final boolean THROW_ON_TASK_FAILURE` (= false)
- `@Deprecated public static final int RESOURCE_PACK_FORMAT` (= 18, deprecated)
- `@Deprecated public static final int DATA_PACK_FORMAT` (= 18, deprecated)
- `@Deprecated public static final int LANGUAGE_FORMAT` (= 1, deprecated)
- `public static final int REPORT_FORMAT_VERSION` (= 1)
- `public static final String DATA_VERSION_TAG` (= "DataVersion")
- `public static final boolean USE_NEW_RENDERSYSTEM` (= false)
- `public static final boolean MULTITHREADED_RENDERING` (= false)
- `public static final boolean FIX_TNT_DUPE` (= false)
- `public static final boolean FIX_SAND_DUPE` (= false)
- `public static final boolean USE_DEBUG_FEATURES` (= false)
- `public static final boolean DEBUG_OPEN_INCOMPATIBLE_WORLDS` (= false)
- `public static final boolean DEBUG_ALLOW_LOW_SIM_DISTANCE` (= false)
- `public static final boolean DEBUG_HOTKEYS` (= false)
- `public static final boolean DEBUG_UI_NARRATION` (= false)
- `public static final boolean DEBUG_RENDER` (= false)
- `public static final boolean DEBUG_PATHFINDING` (= false)
- `public static final boolean DEBUG_WATER` (= false)
- `public static final boolean DEBUG_HEIGHTMAP` (= false)
- `public static final boolean DEBUG_COLLISION` (= false)
- `public static final boolean DEBUG_SUPPORT_BLOCKS` (= false)
- `public static final boolean DEBUG_SHAPES` (= false)
- `public static final boolean DEBUG_NEIGHBORSUPDATE` (= false)
- `public static final boolean DEBUG_STRUCTURES` (= false)
- `public static final boolean DEBUG_LIGHT` (= false)
- `public static final boolean DEBUG_SKY_LIGHT_SECTIONS` (= false)
- `public static final boolean DEBUG_WORLDGENATTEMPT` (= false)
- `public static final boolean DEBUG_SOLID_FACE` (= false)
- `public static final boolean DEBUG_CHUNKS` (= false)
- `public static final boolean DEBUG_GAME_EVENT_LISTENERS` (= false)
- `public static final boolean DEBUG_DUMP_TEXTURE_ATLAS` (= false)
- `public static final boolean DEBUG_DUMP_INTERPOLATED_TEXTURE_FRAMES` (= false)
- `public static final boolean DEBUG_STRUCTURE_EDIT_MODE` (= false)
- `public static final boolean DEBUG_SAVE_STRUCTURES_AS_SNBT` (= false)
- `public static final boolean DEBUG_SYNCHRONOUS_GL_LOGS` (= false)
- `public static final boolean DEBUG_VERBOSE_SERVER_EVENTS` (= false)
- `public static final boolean DEBUG_NAMED_RUNNABLES` (= false)
- `public static final boolean DEBUG_GOAL_SELECTOR` (= false)
- `public static final boolean DEBUG_VILLAGE_SECTIONS` (= false)
- `public static final boolean DEBUG_BRAIN` (= false)
- `public static final boolean DEBUG_BEES` (= false)
- `public static final boolean DEBUG_RAIDS` (= false)
- `public static final boolean DEBUG_BLOCK_BREAK` (= false)
- `public static final boolean DEBUG_RESOURCE_LOAD_TIMES` (= false)
- `public static final boolean DEBUG_MONITOR_TICK_TIMES` (= false)
- `public static final boolean DEBUG_KEEP_JIGSAW_BLOCKS_DURING_STRUCTURE_GEN` (= false)
- `public static final boolean DEBUG_DONT_SAVE_WORLD` (= false)
- `public static final boolean DEBUG_LARGE_DRIPSTONE` (= false)
- `public static final boolean DEBUG_PACKET_SERIALIZATION` (= false)
- `public static final boolean DEBUG_CARVERS` (= false)
- `public static final boolean DEBUG_ORE_VEINS` (= false)
- `public static final boolean DEBUG_SCULK_CATALYST` (= false)
- `public static final boolean DEBUG_BYPASS_REALMS_VERSION_CHECK` (= false)
- `public static final boolean DEBUG_SOCIAL_INTERACTIONS` (= false)
- `public static final boolean DEBUG_VALIDATE_RESOURCE_PATH_CASE` (= false)
- `public static final boolean DEBUG_UNLOCK_ALL_TRADES` (= false)
- `public static final boolean DEBUG_IGNORE_LOCAL_MOB_CAP` (= false)
- `public static final boolean DEBUG_SMALL_SPAWN` (= false)
- `public static final boolean DEBUG_DISABLE_LIQUID_SPREADING` (= false)
- `public static final boolean DEBUG_AQUIFERS` (= false)
- `public static final boolean DEBUG_JFR_PROFILING_ENABLE_LEVEL_LOADING` (= false)
- `public static boolean debugGenerateSquareTerrainWithoutNoise`
- `public static boolean debugGenerateStripedTerrainWithoutNoise`
- `public static final boolean DEBUG_ONLY_GENERATE_HALF_THE_WORLD` (= false)
- `public static final boolean DEBUG_DISABLE_FLUID_GENERATION` (= false)
- `public static final boolean DEBUG_DISABLE_AQUIFERS` (= false)
- `public static final boolean DEBUG_DISABLE_SURFACE` (= false)
- `public static final boolean DEBUG_DISABLE_CARVERS` (= false)
- `public static final boolean DEBUG_DISABLE_STRUCTURES` (= false)
- `public static final boolean DEBUG_DISABLE_FEATURES` (= false)
- `public static final boolean DEBUG_DISABLE_ORE_VEINS` (= false)
- `public static final boolean DEBUG_DISABLE_BLENDING` (= false)
- `public static final boolean DEBUG_DISABLE_BELOW_ZERO_RETROGENERATION` (= false)
- `public static final int DEFAULT_MINECRAFT_PORT` (= 25565)
- `public static final boolean INGAME_DEBUG_OUTPUT` (= false)
- `public static final boolean DEBUG_SUBTITLES` (= false)
- `public static final int FAKE_MS_LATENCY` (= 0)
- `public static final int FAKE_MS_JITTER` (= 0)
- `public static final io.netty.util.ResourceLeakDetector.Level NETTY_LEAK_DETECTION`
- `public static final boolean COMMAND_STACK_TRACES` (= false)
- `public static final boolean DEBUG_WORLD_RECREATE` (= false)
- `public static final boolean DEBUG_SHOW_SERVER_DEBUG_VALUES` (= false)
- `public static final boolean DEBUG_STORE_CHUNK_STACKTRACES` (= false)
- `public static final boolean DEBUG_FEATURE_COUNT` (= false)
- `public static final boolean DEBUG_RESOURCE_GENERATION_OVERRIDE` (= false)
- `public static final boolean DEBUG_FORCE_TELEMETRY` (= false)
- `public static final boolean DEBUG_DONT_SEND_TELEMETRY_TO_BACKEND` (= false)
- `public static final long MAXIMUM_TICK_TIME_NANOS`
- `public static final boolean USE_WORKFLOWS_HOOKS` (= false)
- `public static boolean CHECK_DATA_FIXER_SCHEMA`
- `public static boolean IS_RUNNING_IN_IDE`
- `public static Set<com.mojang.datafixers.DSL.TypeReference> DATA_FIX_TYPES_TO_OPTIMIZE`
- `public static final int WORLD_RESOLUTION` (= 16)
- `public static final int MAX_CHAT_LENGTH` (= 256)
- `public static final int MAX_COMMAND_LENGTH` (= 32500)
- `public static final int MAX_CHAINED_NEIGHBOR_UPDATES` (= 1000000)
- `public static final int MAX_RENDER_DISTANCE` (= 32)
- `public static final char[] ILLEGAL_FILE_CHARACTERS`
- `public static final int TICKS_PER_SECOND` (= 20)
- `public static final int MILLIS_PER_TICK` (= 50)
- `public static final int TICKS_PER_MINUTE` (= 1200)
- `public static final int TICKS_PER_GAME_DAY` (= 24000)
- `public static final float AVERAGE_GAME_TICKS_PER_RANDOM_TICK_PER_BLOCK` (= 1365.3333740234375f)
- `public static final float AVERAGE_RANDOM_TICKS_PER_BLOCK_PER_MINUTE` (= 0.87890625f)
- `public static final float AVERAGE_RANDOM_TICKS_PER_BLOCK_PER_GAME_DAY` (= 17.578125f)
- `public static final int WORLD_ICON_SIZE` (= 64)
- `@Nullable private static WorldVersion CURRENT_VERSION`

### Methods
- `public static boolean isAllowedChatCharacter(char p_136189_)`
- `public static String filterText(String p_136191_)`
- `public static String filterText(String p_239658_,  boolean p_239659_)`
- `public static void setVersion(WorldVersion p_183706_)`
- `public static void tryDetectVersion()`
- `public static WorldVersion getCurrentVersion()`
- `public static int getProtocolVersion()`
- `public static boolean debugVoidTerrain(ChunkPos p_183708_)`
- `public static void enableDataFixerOptimizations()`

## SystemReport

*class* `net.minecraft.SystemReport`

### Fields
- `public static final long BYTES_PER_MEBIBYTE` (= 1048576L)
- `private static final long ONE_GIGA` (= 1000000000L)
- `private static final org.slf4j.Logger LOGGER`
- `private static final String OPERATING_SYSTEM`
- `private static final String JAVA_VERSION`
- `private static final String JAVA_VM_VERSION`
- `private final Map<String,String> entries`

### Methods
- `public void setDetail(String p_143520_,  String p_143521_)`
- `public void setDetail(String p_143523_,  Supplier<String> p_143524_)`
- `private void putHardware(oshi.SystemInfo p_143536_)`
- `private void ignoreErrors(String p_143517_,  Runnable p_143518_)`
- `private void putPhysicalMemory(List<oshi.hardware.PhysicalMemory> p_143532_)`
- `private void putVirtualMemory(oshi.hardware.VirtualMemory p_143550_)`
- `private void putMemory(oshi.hardware.GlobalMemory p_143542_)`
- `private void putGraphics(List<oshi.hardware.GraphicsCard> p_143553_)`
- `private void putProcessor(oshi.hardware.CentralProcessor p_143540_)`
- `public void appendToCrashReportString(StringBuilder p_143526_)`
- `public String toLineSeparatedString()`

## Util

*class* `net.minecraft.Util`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `private static final int DEFAULT_MAX_THREADS` (= 255)
- `private static final String MAX_THREADS_SYSTEM_PROPERTY` (= "max.bg.threads")
- `private static final AtomicInteger WORKER_COUNT`
- `private static final ExecutorService BACKGROUND_EXECUTOR`
- `private static final ExecutorService IO_POOL`
- `private static final DateTimeFormatter FILENAME_DATE_TIME_FORMATTER`
- `public static final long NANOS_PER_MILLI` (= 1000000L)
- `public static TimeSource.NanoTimeSource timeSource`
- `public static final com.google.common.base.Ticker TICKER`
- `public static final UUID NIL_UUID`
- `public static final FileSystemProvider ZIP_FILE_SYSTEM_PROVIDER`
- `private static Consumer<String> thePauser`
- `private static LongSupplier INNER_CLASS_SHIFT1`
- `private static LongSupplier INNER_CLASS_SHIFT2`

### Methods
- `public static <K, V> Collector<Map.Entry<? extends K,? extends V>,?,Map<K,V>> toMap()`
- `public static <T extends Comparable<T>> String getPropertyName(Property<T> p_137454_,  Object p_137455_)`
- `public static String makeDescriptionId(String p_137493_,  @Nullable  ResourceLocation p_137494_)`
- `public static long getMillis()`
- `public static long getNanos()`
- `public static long getEpochMillis()`
- `public static String getFilenameFormattedDateTime()`
- `private static ExecutorService makeExecutor(String p_137478_)`
- `private static int getMaxThreads()`
- `public static ExecutorService backgroundExecutor()`
- `public static ExecutorService ioPool()`
- `public static void shutdownExecutors()`
- `private static void shutdownExecutor(ExecutorService p_137532_)`
- `private static ExecutorService makeIoExecutor()`
- `public static void throwAsRuntime(Throwable p_137560_)`
- `private static void onThreadException(Thread p_137496_,  Throwable p_137497_)`
- `@Nullable public static com.mojang.datafixers.types.Type<?> fetchChoiceType(com.mojang.datafixers.DSL.TypeReference p_137457_,  String p_137458_)`
- `@Nullable private static com.mojang.datafixers.types.Type<?> doFetchChoiceType(com.mojang.datafixers.DSL.TypeReference p_137552_,  String p_137553_)`
- `public static Runnable wrapThreadWithTaskName(String p_143788_,  Runnable p_143789_)`
- `public static <V> Supplier<V> wrapThreadWithTaskName(String p_183947_,  Supplier<V> p_183948_)`
- `public static Util.OS getPlatform()`
- `public static Stream<String> getVmArguments()`
- `public static <T> T lastOf(List<T> p_137510_)`
- `public static <T> T findNextInIterable(Iterable<T> p_137467_,  @Nullable  T p_137468_)`
- `public static <T> T findPreviousInIterable(Iterable<T> p_137555_,  @Nullable  T p_137556_)`
- `public static <T> T make(Supplier<T> p_137538_)`
- `public static <T> T make(T p_137470_,  Consumer<? super T> p_137471_)`
- `public static <K> it.unimi.dsi.fastutil.Hash.Strategy<K> identityStrategy()`
- `public static <V> CompletableFuture<List<V>> sequence(List<? extends CompletableFuture<V>> p_137568_)`
- `public static <V> CompletableFuture<List<V>> sequenceFailFast(List<? extends CompletableFuture<? extends V>> p_143841_)`
- `public static <V> CompletableFuture<List<V>> sequenceFailFastAndCancel(List<? extends CompletableFuture<? extends V>> p_214685_)`
- `private static <V> CompletableFuture<List<V>> fallibleSequence(List<? extends CompletableFuture<? extends V>> p_214632_,  Consumer<Throwable> p_214633_)`
- `public static <T> Optional<T> ifElse(Optional<T> p_137522_,  Consumer<T> p_137523_,  Runnable p_137524_)`
- `public static <T> Supplier<T> name(Supplier<T> p_214656_,  Supplier<String> p_214657_)`
- `public static Runnable name(Runnable p_137475_,  Supplier<String> p_137476_)`
- `public static void logAndPauseIfInIde(String p_143786_)`
- `public static void logAndPauseIfInIde(String p_200891_,  Throwable p_200892_)`
- `public static <T extends Throwable> T pauseInIde(T p_137571_)`
- `public static void setPause(Consumer<String> p_183970_)`
- `private static void doPause(String p_183985_)`
- `public static String describeError(Throwable p_137576_)`
- `public static <T> T getRandom(T[] p_214671_,  RandomSource p_214672_)`
- `public static int getRandom(int[] p_214668_,  RandomSource p_214669_)`
- `public static <T> T getRandom(List<T> p_214622_,  RandomSource p_214623_)`
- `public static <T> Optional<T> getRandomSafe(List<T> p_214677_,  RandomSource p_214678_)`
- `private static BooleanSupplier createRenamer(Path p_137503_,  Path p_137504_)`
- `private static BooleanSupplier createDeleter(Path p_137501_)`
- `private static BooleanSupplier createFileDeletedCheck(Path p_137562_)`
- `private static BooleanSupplier createFileCreatedCheck(Path p_137573_)`
- `private static boolean executeInSequence(BooleanSupplier... p_137549_)`
- `private static boolean runWithRetries(int p_137450_,  String p_137451_,  BooleanSupplier... p_137452_)`
- `public static void safeReplaceFile(File p_137463_,  File p_137464_,  File p_137465_)`
- `public static void safeReplaceFile(Path p_137506_,  Path p_137507_,  Path p_137508_)`
- `public static void safeReplaceOrMoveFile(File p_212225_,  File p_212226_,  File p_212227_,  boolean p_212228_)`
- `public static void safeReplaceOrMoveFile(Path p_212230_,  Path p_212231_,  Path p_212232_,  boolean p_212233_)`
- `public static int offsetByCodepoints(String p_137480_,  int p_137481_,  int p_137482_)`
- `public static Consumer<String> prefix(String p_137490_,  Consumer<String> p_137491_)`
- `public static com.mojang.serialization.DataResult<int[]> fixedSize(IntStream p_137540_,  int p_137541_)`
- `public static com.mojang.serialization.DataResult<long[]> fixedSize(LongStream p_287579_,  int p_287631_)`
- `public static <T> com.mojang.serialization.DataResult<List<T>> fixedSize(List<T> p_143796_,  int p_143797_)`
- `public static void startTimerHackThread()`
- `public static void copyBetweenDirs(Path p_137564_,  Path p_137565_,  Path p_137566_)  throws IOException`
  - throws: IOException
- `public static String sanitizeName(String p_137484_,  CharPredicate p_137485_)`
- `public static <K, V> SingleKeyCache<K,V> singleKeyCache(Function<K,V> p_270326_)`
- `public static <T, R> Function<T,R> memoize(Function<T,R> p_143828_)`
- `public static <T, U, R> BiFunction<T,U,R> memoize(BiFunction<T,U,R> p_143822_)`
- `public static <T> List<T> toShuffledList(Stream<T> p_214662_,  RandomSource p_214663_)`
- `public static it.unimi.dsi.fastutil.ints.IntArrayList toShuffledList(IntStream p_214659_,  RandomSource p_214660_)`
- `public static <T> List<T> shuffledCopy(T[] p_214682_,  RandomSource p_214683_)`
- `public static <T> List<T> shuffledCopy(it.unimi.dsi.fastutil.objects.ObjectArrayList<T> p_214612_,  RandomSource p_214613_)`
- `public static <T> void shuffle(it.unimi.dsi.fastutil.objects.ObjectArrayList<T> p_214674_,  RandomSource p_214675_)`
- `public static <T> CompletableFuture<T> blockUntilDone(Function<Executor,CompletableFuture<T>> p_214680_)`
- `public static <T> T blockUntilDone(Function<Executor,T> p_214653_,  Predicate<T> p_214654_)`
- `public static <T> ToIntFunction<T> createIndexLookup(List<T> p_214687_)`
- `public static <T> ToIntFunction<T> createIndexLookup(List<T> p_214635_,  IntFunction<it.unimi.dsi.fastutil.objects.Object2IntMap<T>> p_214636_)`
- `public static <T, E extends Exception> T getOrThrow(com.mojang.serialization.DataResult<T> p_261812_,  Function<String,E> p_261468_)  throws E`
  - throws: E extends Exception
- `public static boolean isWhitespace(int p_289004_)`
- `public static boolean isBlank(@Nullable  String p_288983_)`

## WorldVersion

*interface* `net.minecraft.WorldVersion`

### Methods
- `DataVersion getDataVersion()`
- `String getId()`
- `String getName()`
- `int getProtocolVersion()`
- `int getPackVersion(PackType p_265245_)`
- `Date getBuildTime()`
- `boolean isStable()`
