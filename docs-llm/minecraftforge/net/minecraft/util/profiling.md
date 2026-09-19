# net.minecraft.util.profiling

- [ActiveProfiler](#activeprofiler)
- [ActiveProfiler.PathEntry](#activeprofiler.pathentry)
- [ContinuousProfiler](#continuousprofiler)
- [EmptyProfileResults](#emptyprofileresults)
- [FilledProfileResults](#filledprofileresults)
- [FilledProfileResults.CounterCollector](#filledprofileresults.countercollector)
- [InactiveProfiler](#inactiveprofiler)
- [ProfileCollector](#profilecollector)
- [ProfileResults](#profileresults)
- [ProfilerFiller](#profilerfiller)
- [ProfilerPathEntry](#profilerpathentry)
- [ResultField](#resultfield)
- [SingleTickProfiler](#singletickprofiler)
## ActiveProfiler

*class* `net.minecraft.util.profiling.ActiveProfiler`

### Fields
- `private static final long WARNING_TIME_NANOS`
- `private static final org.slf4j.Logger LOGGER`
- `private final List<String> paths`
- `private final it.unimi.dsi.fastutil.longs.LongList startTimes`
- `private final Map<String,ActiveProfiler.PathEntry> entries`
- `private final IntSupplier getTickTime`
- `private final LongSupplier getRealTime`
- `private final long startTimeNano`
- `private final int startTimeTicks`
- `private String path`
- `private boolean started`
- `@Nullable private ActiveProfiler.PathEntry currentEntry`
- `private final boolean warn`
- `private final Set<org.apache.commons.lang3.tuple.Pair<String,MetricCategory>> chartedPaths`

### Inherited fields
- from `net.minecraft.util.profiling.ProfilerFiller`: `ROOT`

### Methods
- `public void startTick()`
- `public void endTick()`
- `public void push(String p_18390_)`
- `public void push(Supplier<String> p_18392_)`
- `public void markForCharting(MetricCategory p_145928_)`
- `public void pop()`
- `public void popPush(String p_18395_)`
- `public void popPush(Supplier<String> p_18397_)`
- `private ActiveProfiler.PathEntry getCurrentEntry()`
- `public void incrementCounter(String p_185247_,  int p_185248_)`
- `public void incrementCounter(Supplier<String> p_185250_,  int p_185251_)`
- `public ProfileResults getResults()`
- `@Nullable public ActiveProfiler.PathEntry getEntry(String p_145930_)`
- `public Set<org.apache.commons.lang3.tuple.Pair<String,MetricCategory>> getChartedPaths()`

### Inherited methods
- from `net.minecraft.util.profiling.ProfilerFiller`: `incrementCounter`, `incrementCounter`

## ActiveProfiler.PathEntry

*class* `net.minecraft.util.profiling.ActiveProfiler.PathEntry`

Enclosing class: ActiveProfiler

### Fields
- `long maxDuration`
- `long minDuration`
- `long accumulatedDuration`
- `long count`
- `final it.unimi.dsi.fastutil.objects.Object2LongOpenHashMap<String> counters`

### Methods
- `public long getDuration()`
- `public long getMaxDuration()`
- `public long getCount()`
- `public it.unimi.dsi.fastutil.objects.Object2LongMap<String> getCounters()`

## ContinuousProfiler

*class* `net.minecraft.util.profiling.ContinuousProfiler`

### Fields
- `private final LongSupplier realTime`
- `private final IntSupplier tickCount`
- `private ProfileCollector profiler`

### Methods
- `public boolean isEnabled()`
- `public void disable()`
- `public void enable()`
- `public ProfilerFiller getFiller()`
- `public ProfileResults getResults()`

## EmptyProfileResults

*class* `net.minecraft.util.profiling.EmptyProfileResults`

### Fields
- `public static final EmptyProfileResults EMPTY`

### Inherited fields
- from `net.minecraft.util.profiling.ProfileResults`: `PATH_SEPARATOR`

### Methods
- `public List<ResultField> getTimes(String p_18448_)`
- `public boolean saveResults(Path p_145937_)`
- `public long getStartTimeNano()`
- `public int getStartTimeTicks()`
- `public long getEndTimeNano()`
- `public int getEndTimeTicks()`
- `public String getProfilerResults()`

### Inherited methods
- from `net.minecraft.util.profiling.ProfileResults`: `getNanoDuration`, `getTickDuration`

## FilledProfileResults

*class* `net.minecraft.util.profiling.FilledProfileResults`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final ProfilerPathEntry EMPTY`
- `private static final com.google.common.base.Splitter SPLITTER`
- `private static final Comparator<Map.Entry<String,FilledProfileResults.CounterCollector>> COUNTER_ENTRY_COMPARATOR`
- `private final Map<String,? extends ProfilerPathEntry> entries`
- `private final long startTimeNano`
- `private final int startTimeTicks`
- `private final long endTimeNano`
- `private final int endTimeTicks`
- `private final int tickDuration`

### Inherited fields
- from `net.minecraft.util.profiling.ProfileResults`: `PATH_SEPARATOR`

### Methods
- `private ProfilerPathEntry getEntry(String p_18526_)`
- `public List<ResultField> getTimes(String p_18493_)`
- `private static boolean isDirectChild(String p_18495_,  String p_18496_)`
- `private Map<String,FilledProfileResults.CounterCollector> getCounterValues()`
- `public long getStartTimeNano()`
- `public int getStartTimeTicks()`
- `public long getEndTimeNano()`
- `public int getEndTimeTicks()`
- `public boolean saveResults(Path p_145940_)`
- `protected String getProfilerResults(long p_18486_,  int p_18487_)`
- `public String getProfilerResults()`
- `private static StringBuilder indentLine(StringBuilder p_18498_,  int p_18499_)`
- `private void appendProfilerResults(int p_18482_,  String p_18483_,  StringBuilder p_18484_)`
- `private void appendCounterResults(int p_18476_,  String p_18477_,  FilledProfileResults.CounterCollector p_18478_,  int p_18479_,  StringBuilder p_18480_)`
- `private void appendCounters(Map<String,FilledProfileResults.CounterCollector> p_18515_,  StringBuilder p_18516_,  int p_18517_)`
- `private static String getComment()`
- `public int getTickDuration()`

### Inherited methods
- from `net.minecraft.util.profiling.ProfileResults`: `getNanoDuration`

## FilledProfileResults.CounterCollector

*class* `net.minecraft.util.profiling.FilledProfileResults.CounterCollector`

Enclosing class: FilledProfileResults

### Fields
- `long selfValue`
- `long totalValue`
- `final Map<String,FilledProfileResults.CounterCollector> children`

### Methods
- `public void addValue(Iterator<String> p_18548_,  long p_18549_)`

## InactiveProfiler

*class* `net.minecraft.util.profiling.InactiveProfiler`

### Fields
- `public static final InactiveProfiler INSTANCE`

### Inherited fields
- from `net.minecraft.util.profiling.ProfilerFiller`: `ROOT`

### Methods
- `public void startTick()`
- `public void endTick()`
- `public void push(String p_18559_)`
- `public void push(Supplier<String> p_18561_)`
- `public void markForCharting(MetricCategory p_145951_)`
- `public void pop()`
- `public void popPush(String p_18564_)`
- `public void popPush(Supplier<String> p_18566_)`
- `public void incrementCounter(String p_185253_,  int p_185254_)`
- `public void incrementCounter(Supplier<String> p_185256_,  int p_185257_)`
- `public ProfileResults getResults()`
- `@Nullable public ActiveProfiler.PathEntry getEntry(String p_145953_)`
- `public Set<org.apache.commons.lang3.tuple.Pair<String,MetricCategory>> getChartedPaths()`

### Inherited methods
- from `net.minecraft.util.profiling.ProfilerFiller`: `incrementCounter`, `incrementCounter`

## ProfileCollector

*interface* `net.minecraft.util.profiling.ProfileCollector`

All Superinterfaces: ProfilerFiller

### Inherited fields
- from `net.minecraft.util.profiling.ProfilerFiller`: `ROOT`

### Methods
- `ProfileResults getResults()`
- `@Nullable ActiveProfiler.PathEntry getEntry(String p_145955_)`
- `Set<org.apache.commons.lang3.tuple.Pair<String,MetricCategory>> getChartedPaths()`

### Inherited methods
- from `net.minecraft.util.profiling.ProfilerFiller`: `endTick`, `incrementCounter`, `incrementCounter`, `incrementCounter`, `incrementCounter`, `markForCharting`, `pop`, `popPush`, `popPush`, `push`, `push`, `startTick`

## ProfileResults

*interface* `net.minecraft.util.profiling.ProfileResults`

### Fields
- `static final char PATH_SEPARATOR` (= '\u001e')

### Methods
- `List<ResultField> getTimes(String p_18574_)`
- `boolean saveResults(Path p_145957_)`
- `long getStartTimeNano()`
- `int getStartTimeTicks()`
- `long getEndTimeNano()`
- `int getEndTimeTicks()`
- `default long getNanoDuration()`
- `default int getTickDuration()`
- `String getProfilerResults()`
- `static String demanglePath(String p_18576_)`

## ProfilerFiller

*interface* `net.minecraft.util.profiling.ProfilerFiller`

### Fields
- `static final String ROOT` (= "root")

### Methods
- `void startTick()`
- `void endTick()`
- `void push(String p_18581_)`
- `void push(Supplier<String> p_18582_)`
- `void pop()`
- `void popPush(String p_18583_)`
- `void popPush(Supplier<String> p_18584_)`
- `void markForCharting(MetricCategory p_145959_)`
- `default void incrementCounter(String p_18585_)`
- `void incrementCounter(String p_185258_,  int p_185259_)`
- `default void incrementCounter(Supplier<String> p_18586_)`
- `void incrementCounter(Supplier<String> p_185260_,  int p_185261_)`
- `static ProfilerFiller tee(ProfilerFiller p_18579_,  ProfilerFiller p_18580_)`

## ProfilerPathEntry

*interface* `net.minecraft.util.profiling.ProfilerPathEntry`

### Methods
- `long getDuration()`
- `long getMaxDuration()`
- `long getCount()`
- `it.unimi.dsi.fastutil.objects.Object2LongMap<String> getCounters()`

## ResultField

*class* `net.minecraft.util.profiling.ResultField`

### Fields
- `public final double percentage`
- `public final double globalPercentage`
- `public final long count`
- `public final String name`

### Methods
- `public int compareTo(ResultField p_18618_)`
- `public int getColor()`

## SingleTickProfiler

*class* `net.minecraft.util.profiling.SingleTickProfiler`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final LongSupplier realTime`
- `private final long saveThreshold`
- `private int tick`
- `private final File location`
- `private ProfileCollector profiler`

### Methods
- `public ProfilerFiller startTick()`
- `public void endTick()`
- `@Nullable public static SingleTickProfiler createTickProfiler(String p_18633_)`
- `public static ProfilerFiller decorateFiller(ProfilerFiller p_18630_,  @Nullable  SingleTickProfiler p_18631_)`
