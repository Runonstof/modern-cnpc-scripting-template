# net.minecraft.server.level.progress

- [ChunkProgressListener](#chunkprogresslistener)
- [ChunkProgressListenerFactory](#chunkprogresslistenerfactory)
- [LoggerChunkProgressListener](#loggerchunkprogresslistener)
- [ProcessorChunkProgressListener](#processorchunkprogresslistener)
- [StoringChunkProgressListener](#storingchunkprogresslistener)
## ChunkProgressListener

*interface* `net.minecraft.server.level.progress.ChunkProgressListener`

### Methods
- `void updateSpawnPos(ChunkPos p_9617_)`
- `void onStatusChange(ChunkPos p_9618_,  @Nullable  ChunkStatus p_9619_)`
- `void start()`
- `void stop()`

## ChunkProgressListenerFactory

*interface* `net.minecraft.server.level.progress.ChunkProgressListenerFactory`

### Methods
- `ChunkProgressListener create(int p_9621_)`

## LoggerChunkProgressListener

*class* `net.minecraft.server.level.progress.LoggerChunkProgressListener`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final int maxCount`
- `private int count`
- `private long startTime`
- `private long nextTickTime`

### Methods
- `public void updateSpawnPos(ChunkPos p_9631_)`
- `public void onStatusChange(ChunkPos p_9633_,  @Nullable  ChunkStatus p_9634_)`
- `public void start()`
- `public void stop()`
- `public int getProgress()`

## ProcessorChunkProgressListener

*class* `net.minecraft.server.level.progress.ProcessorChunkProgressListener`

### Fields
- `private final ChunkProgressListener delegate`
- `private final ProcessorMailbox<Runnable> mailbox`

### Methods
- `public static ProcessorChunkProgressListener createStarted(ChunkProgressListener p_143584_,  Executor p_143585_)`
- `public void updateSpawnPos(ChunkPos p_9643_)`
- `public void onStatusChange(ChunkPos p_9645_,  @Nullable  ChunkStatus p_9646_)`
- `public void start()`
- `public void stop()`

## StoringChunkProgressListener

*class* `net.minecraft.server.level.progress.StoringChunkProgressListener`

### Fields
- `private final LoggerChunkProgressListener delegate`
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectOpenHashMap<ChunkStatus> statuses`
- `private ChunkPos spawnPos`
- `private final int fullDiameter`
- `private final int radius`
- `private final int diameter`
- `private boolean started`

### Methods
- `public void updateSpawnPos(ChunkPos p_9667_)`
- `public void onStatusChange(ChunkPos p_9669_,  @Nullable  ChunkStatus p_9670_)`
- `public void start()`
- `public void stop()`
- `public int getFullDiameter()`
- `public int getDiameter()`
- `public int getProgress()`
- `@Nullable public ChunkStatus getStatus(int p_9664_,  int p_9665_)`
