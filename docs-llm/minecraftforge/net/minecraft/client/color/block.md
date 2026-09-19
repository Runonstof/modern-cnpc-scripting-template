# net.minecraft.client.color.block

- [BlockColor](#blockcolor)
- [BlockColors](#blockcolors)
- [BlockTintCache](#blocktintcache)
- [BlockTintCache.CacheData](#blocktintcache.cachedata)
- [BlockTintCache.LatestCacheInfo](#blocktintcache.latestcacheinfo)
## BlockColor

*interface* `net.minecraft.client.color.block.BlockColor`

### Methods
- `int getColor(BlockState p_92567_,  @Nullable  BlockAndTintGetter p_92568_,  @Nullable  BlockPos p_92569_,  int p_92570_)`

## BlockColors

*class* `net.minecraft.client.color.block.BlockColors`

### Fields
- `private static final int DEFAULT` (= -1)
- `private final Map<Holder.Reference<Block>,BlockColor> blockColors`
- `private final Map<Block,Set<Property<?>>> coloringStates`

### Methods
- `public static BlockColors createDefault()`
- `public int getColor(BlockState p_92583_,  Level p_92584_,  BlockPos p_92585_)`
- `public int getColor(BlockState p_92578_,  @Nullable  BlockAndTintGetter p_92579_,  @Nullable  BlockPos p_92580_,  int p_92581_)`
- `@Deprecated public void register(BlockColor p_92590_,  Block... p_92591_)` (deprecated)
- `private void addColoringStates(Set<Property<?>> p_92593_,  Block... p_92594_)`
- `private void addColoringState(Property<?> p_92587_,  Block... p_92588_)`
- `public Set<Property<?>> getColoringProperties(Block p_92576_)`

## BlockTintCache

*class* `net.minecraft.client.color.block.BlockTintCache`

### Fields
- `private static final int MAX_CACHE_ENTRIES` (= 256)
- `private final ThreadLocal<BlockTintCache.LatestCacheInfo> latestChunkOnThread`
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectLinkedOpenHashMap<BlockTintCache.CacheData> cache`
- `private final ReentrantReadWriteLock lock`
- `private final ToIntFunction<BlockPos> source`

### Methods
- `public int getColor(BlockPos p_193813_)`
- `public void invalidateForChunk(int p_92656_,  int p_92657_)`
- `public void invalidateAll()`
- `private BlockTintCache.CacheData findOrCreateChunkCache(int p_193815_,  int p_193816_)`

## BlockTintCache.CacheData

*class* `net.minecraft.client.color.block.BlockTintCache.CacheData`

Enclosing class: BlockTintCache

### Fields
- `private final it.unimi.dsi.fastutil.ints.Int2ObjectArrayMap<int[]> cache`
- `private final ReentrantReadWriteLock lock`
- `private static final int BLOCKS_PER_LAYER`
- `private volatile boolean invalidated`

### Methods
- `public int[] getLayer(int p_193824_)`
- `private int[] allocateLayer()`
- `public boolean isInvalidated()`
- `public void invalidate()`

## BlockTintCache.LatestCacheInfo

*class* `net.minecraft.client.color.block.BlockTintCache.LatestCacheInfo`

Enclosing class: BlockTintCache

### Fields
- `public int x`
- `public int z`
- `@Nullable BlockTintCache.CacheData cache`
