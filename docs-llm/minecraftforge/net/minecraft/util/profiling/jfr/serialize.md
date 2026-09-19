# net.minecraft.util.profiling.jfr.serialize

- [JfrResultJsonSerializer](#jfrresultjsonserializer)
## JfrResultJsonSerializer

*class* `net.minecraft.util.profiling.jfr.serialize.JfrResultJsonSerializer`

### Fields
- `private static final String BYTES_PER_SECOND` (= "bytesPerSecond")
- `private static final String COUNT` (= "count")
- `private static final String DURATION_NANOS_TOTAL` (= "durationNanosTotal")
- `private static final String TOTAL_BYTES` (= "totalBytes")
- `private static final String COUNT_PER_SECOND` (= "countPerSecond")
- `final com.google.gson.Gson gson`

### Methods
- `public String format(JfrStatsResult p_185536_)`
- `private com.google.gson.JsonElement heap(GcHeapStat.Summary p_185542_)`
- `private com.google.gson.JsonElement chunkGen(List<com.mojang.datafixers.util.Pair<ChunkStatus,TimedStatSummary<ChunkGenStat>>> p_185573_)`
- `private com.google.gson.JsonElement threadAllocations(ThreadAllocationStat.Summary p_185546_)`
- `private com.google.gson.JsonElement serverTicks(List<TickTimeStat> p_185587_)`
- `private com.google.gson.JsonElement fileIO(JfrStatsResult p_185578_)`
- `private com.google.gson.JsonElement fileIoSummary(FileIOStat.Summary p_185540_)`
- `private com.google.gson.JsonElement network(JfrStatsResult p_185589_)`
- `private com.google.gson.JsonElement packets(NetworkPacketSummary p_185544_)`
- `private com.google.gson.JsonElement cpu(List<CpuLoadStat> p_185591_)`
