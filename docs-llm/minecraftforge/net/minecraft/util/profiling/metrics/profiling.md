# net.minecraft.util.profiling.metrics.profiling

- [ActiveMetricsRecorder](#activemetricsrecorder)
- [InactiveMetricsRecorder](#inactivemetricsrecorder)
- [MetricsRecorder](#metricsrecorder)
- [ProfilerSamplerAdapter](#profilersampleradapter)
- [ServerMetricsSamplersProvider](#servermetricssamplersprovider)
- [ServerMetricsSamplersProvider.CpuStats](#servermetricssamplersprovider.cpustats)
## ActiveMetricsRecorder

*class* `net.minecraft.util.profiling.metrics.profiling.ActiveMetricsRecorder`

### Fields
- `public static final int PROFILING_MAX_DURATION_SECONDS` (= 10)
- `@Nullable private static Consumer<Path> globalOnReportFinished`
- `private final Map<MetricSampler,List<RecordedDeviation>> deviationsBySampler`
- `private final ContinuousProfiler taskProfiler`
- `private final Executor ioExecutor`
- `private final MetricsPersister metricsPersister`
- `private final Consumer<ProfileResults> onProfilingEnd`
- `private final Consumer<Path> onReportFinished`
- `private final MetricsSamplerProvider metricsSamplerProvider`
- `private final LongSupplier wallTimeSource`
- `private final long deadlineNano`
- `private int currentTick`
- `private ProfileCollector singleTickProfiler`
- `private volatile boolean killSwitch`
- `private Set<MetricSampler> thisTickSamplers`

### Methods
- `public static ActiveMetricsRecorder createStarted(MetricsSamplerProvider p_146133_,  LongSupplier p_146134_,  Executor p_146135_,  MetricsPersister p_146136_,  Consumer<ProfileResults> p_146137_,  Consumer<Path> p_146138_)`
- `public void end()`
- `public void cancel()`
- `public void startTick()`
- `public void endTick()`
- `public boolean isRecording()`
- `public ProfilerFiller getProfiler()`
- `private void verifyStarted()`
- `private void scheduleSaveResults(ProfileResults p_146129_)`
- `private void cleanup(Collection<MetricSampler> p_216817_)`
- `public static void registerGlobalCompletionCallback(Consumer<Path> p_146143_)`

## InactiveMetricsRecorder

*class* `net.minecraft.util.profiling.metrics.profiling.InactiveMetricsRecorder`

### Fields
- `public static final MetricsRecorder INSTANCE`

### Methods
- `public void end()`
- `public void cancel()`
- `public void startTick()`
- `public boolean isRecording()`
- `public ProfilerFiller getProfiler()`
- `public void endTick()`

## MetricsRecorder

*interface* `net.minecraft.util.profiling.metrics.profiling.MetricsRecorder`

### Methods
- `void end()`
- `void cancel()`
- `void startTick()`
- `boolean isRecording()`
- `ProfilerFiller getProfiler()`
- `void endTick()`

## ProfilerSamplerAdapter

*class* `net.minecraft.util.profiling.metrics.profiling.ProfilerSamplerAdapter`

### Fields
- `private final Set<String> previouslyFoundSamplerNames`

### Methods
- `public Set<MetricSampler> newSamplersFoundInProfiler(Supplier<ProfileCollector> p_146164_)`
- `private static MetricSampler samplerForProfilingPath(Supplier<ProfileCollector> p_146169_,  String p_146170_,  MetricCategory p_146171_)`

## ServerMetricsSamplersProvider

*class* `net.minecraft.util.profiling.metrics.profiling.ServerMetricsSamplersProvider`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Set<MetricSampler> samplers`
- `private final ProfilerSamplerAdapter samplerFactory`

### Methods
- `public static Set<MetricSampler> runtimeIndependentSamplers()`
- `public Set<MetricSampler> samplers(Supplier<ProfileCollector> p_146191_)`
- `public static MetricSampler tickTimeSampler(LongSupplier p_146189_)`

## ServerMetricsSamplersProvider.CpuStats

*class* `net.minecraft.util.profiling.metrics.profiling.ServerMetricsSamplersProvider.CpuStats`

Enclosing class: ServerMetricsSamplersProvider

### Fields
- `private final oshi.SystemInfo systemInfo`
- `private final oshi.hardware.CentralProcessor processor`
- `public final int nrOfCpus`
- `private long[][] previousCpuLoadTick`
- `private double[] currentLoad`
- `private long lastPollMs`

### Methods
- `public double loadForCpu(int p_146208_)`
