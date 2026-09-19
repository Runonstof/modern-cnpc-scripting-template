# net.minecraft.world.level.block.state.pattern

- [BlockInWorld](#blockinworld)
- [BlockPattern](#blockpattern)
- [BlockPattern.BlockCacheLoader](#blockpattern.blockcacheloader)
- [BlockPattern.BlockPatternMatch](#blockpattern.blockpatternmatch)
- [BlockPatternBuilder](#blockpatternbuilder)
## BlockInWorld

*class* `net.minecraft.world.level.block.state.pattern.BlockInWorld`

### Fields
- `private final LevelReader level`
- `private final BlockPos pos`
- `private final boolean loadChunks`
- `@Nullable private BlockState state`
- `@Nullable private BlockEntity entity`
- `private boolean cachedEntity`

### Methods
- `public BlockState getState()`
- `@Nullable public BlockEntity getEntity()`
- `public LevelReader getLevel()`
- `public BlockPos getPos()`
- `public static Predicate<BlockInWorld> hasState(Predicate<BlockState> p_61170_)`

## BlockPattern

*class* `net.minecraft.world.level.block.state.pattern.BlockPattern`

### Fields
- `private final Predicate<BlockInWorld>[][][] pattern`
- `private final int depth`
- `private final int height`
- `private final int width`

### Methods
- `public int getDepth()`
- `public int getHeight()`
- `public int getWidth()`
- `public Predicate<BlockInWorld>[][][] getPattern()`
- `@Nullable public BlockPattern.BlockPatternMatch matches(LevelReader p_155965_,  BlockPos p_155966_,  Direction p_155967_,  Direction p_155968_)`
- `@Nullable private BlockPattern.BlockPatternMatch matches(BlockPos p_61198_,  Direction p_61199_,  Direction p_61200_,  com.google.common.cache.LoadingCache<BlockPos,BlockInWorld> p_61201_)`
- `@Nullable public BlockPattern.BlockPatternMatch find(LevelReader p_61185_,  BlockPos p_61186_)`
- `public static com.google.common.cache.LoadingCache<BlockPos,BlockInWorld> createLevelCache(LevelReader p_61188_,  boolean p_61189_)`
- `protected static BlockPos translateAndRotate(BlockPos p_61191_,  Direction p_61192_,  Direction p_61193_,  int p_61194_,  int p_61195_,  int p_61196_)`

## BlockPattern.BlockCacheLoader

*class* `net.minecraft.world.level.block.state.pattern.BlockPattern.BlockCacheLoader`

Enclosing class: BlockPattern

### Fields
- `private final LevelReader level`
- `private final boolean loadChunks`

### Methods
- `public BlockInWorld load(BlockPos p_61210_)`

### Inherited methods
- from `com.google.common.cache.CacheLoader`: `asyncReloading`, `from`, `from`, `loadAll`, `reload`

## BlockPattern.BlockPatternMatch

*class* `net.minecraft.world.level.block.state.pattern.BlockPattern.BlockPatternMatch`

Enclosing class: BlockPattern

### Fields
- `private final BlockPos frontTopLeft`
- `private final Direction forwards`
- `private final Direction up`
- `private final com.google.common.cache.LoadingCache<BlockPos,BlockInWorld> cache`
- `private final int width`
- `private final int height`
- `private final int depth`

### Methods
- `public BlockPos getFrontTopLeft()`
- `public Direction getForwards()`
- `public Direction getUp()`
- `public int getWidth()`
- `public int getHeight()`
- `public int getDepth()`
- `public BlockInWorld getBlock(int p_61230_,  int p_61231_,  int p_61232_)`
- `public String toString()`

## BlockPatternBuilder

*class* `net.minecraft.world.level.block.state.pattern.BlockPatternBuilder`

### Fields
- `private static final com.google.common.base.Joiner COMMA_JOINED`
- `private final List<String[]> pattern`
- `private final Map<Character,Predicate<BlockInWorld>> lookup`
- `private int height`
- `private int width`

### Methods
- `public BlockPatternBuilder aisle(String... p_61248_)`
- `public static BlockPatternBuilder start()`
- `public BlockPatternBuilder where(char p_61245_,  Predicate<BlockInWorld> p_61246_)`
- `public BlockPattern build()`
- `private Predicate<BlockInWorld>[][][] createPattern()`
- `private void ensureAllCharactersMatched()`
