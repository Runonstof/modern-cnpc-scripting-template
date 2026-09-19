# net.minecraft.util.profiling.jfr

- [Class Environment](#class-environment)
- [JfrProfiler](#jfrprofiler)
- [JvmProfiler](#jvmprofiler)
- [JvmProfiler.NoOpProfiler](#jvmprofiler.noopprofiler)
- [Percentiles](#percentiles)
- [SummaryReporter](#summaryreporter)
## Class Environment

*enum* `net.minecraft.util.profiling.jfr.Class Environment`

### Fields
- `private final String description`

### Methods
- `public static Environment[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Environment valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static Environment from(MinecraftServer p_185279_)`
- `public String getDescription()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## JfrProfiler

*class* `net.minecraft.util.profiling.jfr.JfrProfiler`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final String ROOT_CATEGORY` (= "Minecraft")
- `public static final String WORLD_GEN_CATEGORY` (= "World Generation")
- `public static final String TICK_CATEGORY` (= "Ticking")
- `public static final String NETWORK_CATEGORY` (= "Network")
- `private static final List<Class<? extends Event>> CUSTOM_EVENTS`
- `private static final String FLIGHT_RECORDER_CONFIG` (= "/flightrecorder-config.jfc")
- `private static final DateTimeFormatter DATE_TIME_FORMATTER`
- `private static final JfrProfiler INSTANCE`
- `@Nullable Recording recording`
- `private float currentAverageTickTime`
- `private final Map<String,NetworkSummaryEvent.SumAggregation> networkTrafficByAddress`

### Methods
- `public static JfrProfiler getInstance()`
- `public boolean start(Environment p_185307_)`
- `public Path stop()`
- `public boolean isRunning()`
- `public boolean isAvailable()`
- `private boolean start(Reader p_185317_,  Environment p_185318_)`
- `private void setupSummaryListener()`
- `public void onServerTick(float p_185300_)`
- `public void onPacketReceived(ConnectionProtocol p_300094_,  int p_185302_,  SocketAddress p_185304_,  int p_185303_)`
- `public void onPacketSent(ConnectionProtocol p_299489_,  int p_185323_,  SocketAddress p_185325_,  int p_185324_)`
- `private NetworkSummaryEvent.SumAggregation networkStatFor(SocketAddress p_185320_)`
- `@Nullable public ProfiledDuration onWorldLoadedStarted()`
- `@Nullable public ProfiledDuration onChunkGenerate(ChunkPos p_185313_,  ResourceKey<Level> p_185314_,  String p_185315_)`

## JvmProfiler

*interface* `net.minecraft.util.profiling.jfr.JvmProfiler`

### Fields
- `static final JvmProfiler INSTANCE`

### Methods
- `boolean start(Environment p_185347_)`
- `Path stop()`
- `boolean isRunning()`
- `boolean isAvailable()`
- `void onServerTick(float p_185342_)`
- `void onPacketReceived(ConnectionProtocol p_298929_,  int p_185343_,  SocketAddress p_185345_,  int p_185344_)`
- `void onPacketSent(ConnectionProtocol p_298320_,  int p_185351_,  SocketAddress p_185353_,  int p_185352_)`
- `@Nullable ProfiledDuration onWorldLoadedStarted()`
- `@Nullable ProfiledDuration onChunkGenerate(ChunkPos p_185348_,  ResourceKey<Level> p_185349_,  String p_185350_)`

## JvmProfiler.NoOpProfiler

*class* `net.minecraft.util.profiling.jfr.JvmProfiler.NoOpProfiler`

Enclosing interface: JvmProfiler

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `static final ProfiledDuration noOpCommit`

### Inherited fields
- from `net.minecraft.util.profiling.jfr.JvmProfiler`: `INSTANCE`

### Methods
- `public boolean start(Environment p_185368_)`
- `public Path stop()`
- `public boolean isRunning()`
- `public boolean isAvailable()`
- `public void onPacketReceived(ConnectionProtocol p_298045_,  int p_185363_,  SocketAddress p_185365_,  int p_185364_)`
- `public void onPacketSent(ConnectionProtocol p_297220_,  int p_185375_,  SocketAddress p_185377_,  int p_185376_)`
- `public void onServerTick(float p_185361_)`
- `public ProfiledDuration onWorldLoadedStarted()`
- `@Nullable public ProfiledDuration onChunkGenerate(ChunkPos p_185370_,  ResourceKey<Level> p_185371_,  String p_185372_)`

## Percentiles

*class* `net.minecraft.util.profiling.jfr.Percentiles`

### Fields
- `public static final com.google.common.math.Quantiles.ScaleAndIndexes DEFAULT_INDEXES`

### Methods
- `public static Map<Integer,Double> evaluate(long[] p_185393_)`
- `public static Map<Integer,Double> evaluate(double[] p_185391_)`
- `private static Map<Integer,Double> sorted(Map<Integer,Double> p_185386_)`

## SummaryReporter

*class* `net.minecraft.util.profiling.jfr.SummaryReporter`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Runnable onDeregistration`

### Methods
- `public void recordingStopped(@Nullable  Path p_185401_)`
- `private static void infoWithFallback(Supplier<String> p_201933_)`
- `private static void warnWithFallback(Supplier<String> p_201935_,  Throwable p_201936_)`
