# net.minecraft.util.profiling.metrics.storage

- [MetricsPersister](#metricspersister)
- [RecordedDeviation](#recordeddeviation)
## MetricsPersister

*class* `net.minecraft.util.profiling.metrics.storage.MetricsPersister`

### Fields
- `public static final Path PROFILING_RESULTS_DIR`
- `public static final String METRICS_DIR_NAME` (= "metrics")
- `public static final String DEVIATIONS_DIR_NAME` (= "deviations")
- `public static final String PROFILING_RESULT_FILENAME` (= "profiling.txt")
- `private static final org.slf4j.Logger LOGGER`
- `private final String rootFolderName`

### Methods
- `public Path saveReports(Set<MetricSampler> p_146251_,  Map<MetricSampler,List<RecordedDeviation>> p_146252_,  ProfileResults p_146253_)`
- `private void saveMetrics(Set<MetricSampler> p_146248_,  Path p_146249_)`
- `private void saveCategory(MetricCategory p_146227_,  List<MetricSampler> p_146228_,  Path p_146229_)`
- `private void saveDeviations(Map<MetricSampler,List<RecordedDeviation>> p_146245_,  Path p_146246_)`
- `private void saveProfilingTaskExecutionResult(ProfileResults p_146224_,  Path p_146225_)`

## RecordedDeviation

*class* `net.minecraft.util.profiling.metrics.storage.RecordedDeviation`

### Fields
- `public final Instant timestamp`
- `public final int tick`
- `public final ProfileResults profilerResultAtTick`
