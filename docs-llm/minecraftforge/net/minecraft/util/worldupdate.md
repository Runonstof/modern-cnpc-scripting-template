# net.minecraft.util.worldupdate

- [WorldUpgrader](#worldupgrader)
## WorldUpgrader

*class* `net.minecraft.util.worldupdate.WorldUpgrader`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final ThreadFactory THREAD_FACTORY`
- `private final Registry<LevelStem> dimensions`
- `private final Set<ResourceKey<Level>> levels`
- `private final boolean eraseCache`
- `private final LevelStorageSource.LevelStorageAccess levelStorage`
- `private final Thread thread`
- `private final com.mojang.datafixers.DataFixer dataFixer`
- `private volatile boolean running`
- `private volatile boolean finished`
- `private volatile float progress`
- `private volatile int totalChunks`
- `private volatile int converted`
- `private volatile int skipped`
- `private final it.unimi.dsi.fastutil.objects.Object2FloatMap<ResourceKey<Level>> progressMap`
- `private volatile Component status`
- `private static final Pattern REGEX`
- `private final DimensionDataStorage overworldDataStorage`

### Methods
- `public void cancel()`
- `private void work()`
- `private List<ChunkPos> getAllChunkPos(ResourceKey<Level> p_18831_)`
- `public boolean isFinished()`
- `public Set<ResourceKey<Level>> levels()`
- `public float dimensionProgress(ResourceKey<Level> p_18828_)`
- `public float getProgress()`
- `public int getTotalChunks()`
- `public int getConverted()`
- `public int getSkipped()`
- `public Component getStatus()`
