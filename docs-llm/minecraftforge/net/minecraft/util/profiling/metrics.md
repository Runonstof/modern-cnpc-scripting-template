# net.minecraft.util.profiling.metrics

- [Class MetricCategory](#class-metriccategory)
- [MetricSampler](#metricsampler)
- [MetricSampler.MetricSamplerBuilder](#metricsampler.metricsamplerbuilder)
- [MetricSampler.SamplerResult](#metricsampler.samplerresult)
- [MetricSampler.ThresholdTest](#metricsampler.thresholdtest)
- [MetricSampler.ValueIncreasedByPercentage](#metricsampler.valueincreasedbypercentage)
- [MetricsRegistry](#metricsregistry)
- [MetricsRegistry.AggregatedMetricSampler](#metricsregistry.aggregatedmetricsampler)
- [MetricsSamplerProvider](#metricssamplerprovider)
- [ProfilerMeasured](#profilermeasured)
## Class MetricCategory

*enum* `net.minecraft.util.profiling.metrics.Class MetricCategory`

### Fields
- `private final String description`

### Methods
- `public static MetricCategory[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static MetricCategory valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getDescription()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## MetricSampler

*class* `net.minecraft.util.profiling.metrics.MetricSampler`

### Fields
- `private final String name`
- `private final MetricCategory category`
- `private final DoubleSupplier sampler`
- `private final io.netty.buffer.ByteBuf ticks`
- `private final io.netty.buffer.ByteBuf values`
- `private volatile boolean isRunning`
- `@Nullable private final Runnable beforeTick`
- `@Nullable final MetricSampler.ThresholdTest thresholdTest`
- `private double currentValue`

### Methods
- `public static MetricSampler create(String p_146010_,  MetricCategory p_146011_,  DoubleSupplier p_146012_)`
- `public static <T> MetricSampler create(String p_146005_,  MetricCategory p_146006_,  T p_146007_,  ToDoubleFunction<T> p_146008_)`
- `public static <T> MetricSampler.MetricSamplerBuilder<T> builder(String p_146014_,  MetricCategory p_146015_,  ToDoubleFunction<T> p_146016_,  T p_146017_)`
- `public void onStartTick()`
- `public void onEndTick(int p_146003_)`
- `public void onFinished()`
- `private void verifyRunning()`
- `DoubleSupplier getSampler()`
- `public String getName()`
- `public MetricCategory getCategory()`
- `public MetricSampler.SamplerResult result()`
- `public boolean triggersThreshold()`
- `public boolean equals(Object p_146023_)`
- `public int hashCode()`

## MetricSampler.MetricSamplerBuilder

*class* `net.minecraft.util.profiling.metrics.MetricSampler.MetricSamplerBuilder`

Enclosing class: MetricSampler

### Fields
- `private final String name`
- `private final MetricCategory category`
- `private final DoubleSupplier sampler`
- `private final T context`
- `@Nullable private Runnable beforeTick`
- `@Nullable private MetricSampler.ThresholdTest thresholdTest`

### Methods
- `public MetricSampler.MetricSamplerBuilder<T> withBeforeTick(Consumer<T> p_146043_)`
- `public MetricSampler.MetricSamplerBuilder<T> withThresholdAlert(MetricSampler.ThresholdTest p_146041_)`
- `public MetricSampler build()`

## MetricSampler.SamplerResult

*class* `net.minecraft.util.profiling.metrics.MetricSampler.SamplerResult`

Enclosing class: MetricSampler

### Fields
- `private final it.unimi.dsi.fastutil.ints.Int2DoubleMap recording`
- `private final int firstTick`
- `private final int lastTick`

### Methods
- `public double valueAtTick(int p_146058_)`
- `public int getFirstTick()`
- `public int getLastTick()`

## MetricSampler.ThresholdTest

*interface* `net.minecraft.util.profiling.metrics.MetricSampler.ThresholdTest`

Enclosing class: MetricSampler

### Methods
- `boolean test(double p_146060_)`

## MetricSampler.ValueIncreasedByPercentage

*class* `net.minecraft.util.profiling.metrics.MetricSampler.ValueIncreasedByPercentage`

Enclosing class: MetricSampler

### Fields
- `private final float percentageIncreaseThreshold`
- `private double previousValue`

### Methods
- `public boolean test(double p_146066_)`

## MetricsRegistry

*class* `net.minecraft.util.profiling.metrics.MetricsRegistry`

### Fields
- `public static final MetricsRegistry INSTANCE`
- `private final WeakHashMap<ProfilerMeasured,Void> measuredInstances`

### Methods
- `public void add(ProfilerMeasured p_146073_)`
- `public List<MetricSampler> getRegisteredSamplers()`
- `private static List<MetricSampler> aggregateDuplicates(Map<String,List<MetricSampler>> p_146077_)`

## MetricsRegistry.AggregatedMetricSampler

*class* `net.minecraft.util.profiling.metrics.MetricsRegistry.AggregatedMetricSampler`

Enclosing class: MetricsRegistry

### Fields
- `private final List<MetricSampler> delegates`

### Inherited fields
- from `net.minecraft.util.profiling.metrics.MetricSampler`: `thresholdTest`

### Methods
- `private static MetricSampler.ThresholdTest thresholdTest(List<MetricSampler> p_146088_)`
- `private static void beforeTick(List<MetricSampler> p_146093_)`
- `private static double averageValueFromDelegates(List<MetricSampler> p_146095_)`
- `public boolean equals(@Nullable  Object p_146101_)`
- `public int hashCode()`

### Inherited methods
- from `net.minecraft.util.profiling.metrics.MetricSampler`: `builder`, `create`, `create`, `getCategory`, `getName`, `getSampler`, `onEndTick`, `onFinished`, `onStartTick`, `result`, `triggersThreshold`

## MetricsSamplerProvider

*interface* `net.minecraft.util.profiling.metrics.MetricsSamplerProvider`

### Methods
- `Set<MetricSampler> samplers(Supplier<ProfileCollector> p_146103_)`

## ProfilerMeasured

*interface* `net.minecraft.util.profiling.metrics.ProfilerMeasured`

### Methods
- `List<MetricSampler> profiledMetrics()`
