# net.minecraft.client.renderer.chunk

- [Class SectionRenderDispatcher.SectionTaskResult](#class-sectionrenderdispatcher.sectiontaskresult)
- [RenderChunk](#renderchunk)
- [RenderChunkRegion](#renderchunkregion)
- [RenderRegionCache](#renderregioncache)
- [RenderRegionCache.ChunkInfo](#renderregioncache.chunkinfo)
- [SectionRenderDispatcher](#sectionrenderdispatcher)
- [SectionRenderDispatcher.CompiledSection](#sectionrenderdispatcher.compiledsection)
- [SectionRenderDispatcher.RenderSection](#sectionrenderdispatcher.rendersection)
- [SectionRenderDispatcher.RenderSection.CompileTask](#sectionrenderdispatcher.rendersection.compiletask)
- [SectionRenderDispatcher.RenderSection.RebuildTask](#sectionrenderdispatcher.rendersection.rebuildtask)
- [SectionRenderDispatcher.RenderSection.RebuildTask.CompileResults](#sectionrenderdispatcher.rendersection.rebuildtask.compileresults)
- [SectionRenderDispatcher.RenderSection.ResortTransparencyTask](#sectionrenderdispatcher.rendersection.resorttransparencytask)
- [VisGraph](#visgraph)
- [VisibilitySet](#visibilityset)
## Class SectionRenderDispatcher.SectionTaskResult

*enum* `net.minecraft.client.renderer.chunk.Class SectionRenderDispatcher.SectionTaskResult`

Enclosing class: SectionRenderDispatcher

### Methods
- `public static SectionRenderDispatcher.SectionTaskResult[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SectionRenderDispatcher.SectionTaskResult valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## RenderChunk

*class* `net.minecraft.client.renderer.chunk.RenderChunk`

### Fields
- `private final Map<BlockPos,BlockEntity> blockEntities`
- `@Nullable private final List<PalettedContainer<BlockState>> sections`
- `private final boolean debug`
- `private final LevelChunk wrapped`

### Methods
- `@Nullable public BlockEntity getBlockEntity(BlockPos p_200452_)`
- `public BlockState getBlockState(BlockPos p_200454_)`

## RenderChunkRegion

*class* `net.minecraft.client.renderer.chunk.RenderChunkRegion`

### Fields
- `private final int centerX`
- `private final int centerZ`
- `protected final RenderChunk[][] chunks`
- `protected final Level level`

### Methods
- `public BlockState getBlockState(BlockPos p_112947_)`
- `public FluidState getFluidState(BlockPos p_112943_)`
- `public float getShade(Direction p_112940_,  boolean p_112941_)`
- `public LevelLightEngine getLightEngine()`
- `@Nullable public BlockEntity getBlockEntity(BlockPos p_112945_)`
- `public int getBlockTint(BlockPos p_112937_,  ColorResolver p_112938_)`
- `public int getMinBuildHeight()`
- `public int getHeight()`
- `public float getShade(float normalX,  float normalY,  float normalZ,  boolean shade)`
  Description copied from interface: IForgeBlockAndTintGetter
  Computes the shade for a given normal.
   Alternate version of the vanilla method taking in a Direction.
- `public ModelDataManager getModelDataManager()`
  Description copied from interface: IForgeBlockGetter
  Retrieves the model data manager for this level.
   This will be null on a server level.

### Inherited methods
- from `net.minecraft.world.level.BlockAndTintGetter`: `canSeeSky`, `getBrightness`, `getRawBrightness`
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockEntity`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockStates`, `getLightEmission`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getMaxBuildHeight`, `getMaxSection`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`

## RenderRegionCache

*class* `net.minecraft.client.renderer.chunk.RenderRegionCache`

### Fields
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectMap<RenderRegionCache.ChunkInfo> chunkInfoCache`

### Methods
- `@Nullable public RenderChunkRegion createRegion(Level p_200466_,  BlockPos p_200467_,  BlockPos p_200468_,  int p_200469_)`
- `private static boolean isAllEmpty(BlockPos p_200471_,  BlockPos p_200472_,  int p_200473_,  int p_200474_,  RenderRegionCache.ChunkInfo[][] p_200475_)`

## RenderRegionCache.ChunkInfo

*class* `net.minecraft.client.renderer.chunk.RenderRegionCache.ChunkInfo`

Enclosing class: RenderRegionCache

### Fields
- `private final LevelChunk chunk`
- `@Nullable private RenderChunk renderChunk`

### Methods
- `public LevelChunk chunk()`
- `public RenderChunk renderChunk()`

## SectionRenderDispatcher

*class* `net.minecraft.client.renderer.chunk.SectionRenderDispatcher`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int MAX_WORKERS_32_BIT` (= 4)
- `private static final int MAX_HIGH_PRIORITY_QUOTA` (= 2)
- `private final PriorityBlockingQueue<SectionRenderDispatcher.RenderSection.CompileTask> toBatchHighPriority`
- `private final Queue<SectionRenderDispatcher.RenderSection.CompileTask> toBatchLowPriority`
- `private int highPriorityQuota`
- `private final Queue<SectionBufferBuilderPack> freeBuffers`
- `private final Queue<Runnable> toUpload`
- `private volatile int toBatchCount`
- `private volatile int freeBufferCount`
- `final SectionBufferBuilderPack fixedBuffers`
- `private final ProcessorMailbox<Runnable> mailbox`
- `private final Executor executor`
- `ClientLevel level`
- `final LevelRenderer renderer`
- `private Vec3 camera`

### Methods
- `public void setLevel(ClientLevel p_298968_)`
- `private void runTask()`
- `@Nullable private SectionRenderDispatcher.RenderSection.CompileTask pollTask()`
- `public String getStats()`
- `public int getToBatchCount()`
- `public int getToUpload()`
- `public int getFreeBufferCount()`
- `public void setCamera(Vec3 p_297762_)`
- `public Vec3 getCameraPosition()`
- `public void uploadAllPendingUploads()`
- `public void rebuildSectionSync(SectionRenderDispatcher.RenderSection p_299640_,  RenderRegionCache p_297835_)`
- `public void blockUntilClear()`
- `public void schedule(SectionRenderDispatcher.RenderSection.CompileTask p_297747_)`
- `public CompletableFuture<Void> uploadSectionLayer(BufferBuilder.RenderedBuffer p_299767_,  VertexBuffer p_298938_)`
- `private void clearBatchQueue()`
- `public boolean isQueueEmpty()`
- `public void dispose()`

## SectionRenderDispatcher.CompiledSection

*class* `net.minecraft.client.renderer.chunk.SectionRenderDispatcher.CompiledSection`

Enclosing class: SectionRenderDispatcher

### Fields
- `public static final SectionRenderDispatcher.CompiledSection UNCOMPILED`
- `final Set<RenderType> hasBlocks`
- `final List<BlockEntity> renderableBlockEntities`
- `VisibilitySet visibilitySet`
- `@Nullable BufferBuilder.SortState transparencyState`

### Methods
- `public boolean hasNoRenderableLayers()`
- `public boolean isEmpty(RenderType p_300861_)`
- `public List<BlockEntity> getRenderableBlockEntities()`
- `public boolean facesCanSeeEachother(Direction p_301006_,  Direction p_300193_)`

## SectionRenderDispatcher.RenderSection

*class* `net.minecraft.client.renderer.chunk.SectionRenderDispatcher.RenderSection`

Enclosing class: SectionRenderDispatcher

### Fields
- `public static final int SIZE` (= 16)
- `public final int index`
- `public final AtomicReference<SectionRenderDispatcher.CompiledSection> compiled`
- `final AtomicInteger initialCompilationCancelCount`
- `@Nullable private SectionRenderDispatcher.RenderSection.RebuildTask lastRebuildTask`
- `@Nullable private SectionRenderDispatcher.RenderSection.ResortTransparencyTask lastResortTransparencyTask`
- `private final Set<BlockEntity> globalBlockEntities`
- `private final Map<RenderType,VertexBuffer> buffers`
- `private AABB bb`
- `private boolean dirty`
- `final BlockPos.MutableBlockPos origin`
- `private final BlockPos.MutableBlockPos[] relativeOrigins`
- `private boolean playerChanged`

### Methods
- `private boolean doesChunkExistAt(BlockPos p_297611_)`
- `public boolean hasAllNeighbors()`
- `public AABB getBoundingBox()`
- `public VertexBuffer getBuffer(RenderType p_298748_)`
- `public void setOrigin(int p_298099_,  int p_299019_,  int p_299020_)`
- `protected double getDistToPlayerSqr()`
- `void beginLayer(BufferBuilder p_300604_)`
- `public SectionRenderDispatcher.CompiledSection getCompiled()`
- `private void reset()`
- `public void releaseBuffers()`
- `public BlockPos getOrigin()`
- `public void setDirty(boolean p_298731_)`
- `public void setNotDirty()`
- `public boolean isDirty()`
- `public boolean isDirtyFromPlayer()`
- `public BlockPos getRelativeOrigin(Direction p_299060_)`
- `public boolean resortTransparency(RenderType p_301074_,  SectionRenderDispatcher p_298196_)`
- `protected boolean cancelTasks()`
- `public SectionRenderDispatcher.RenderSection.CompileTask createCompileTask(RenderRegionCache p_300037_)`
- `public void rebuildSectionAsync(SectionRenderDispatcher p_299090_,  RenderRegionCache p_297331_)`
- `void updateGlobalBlockEntities(Collection<BlockEntity> p_300373_)`
- `public void compileSync(RenderRegionCache p_298605_)`
- `public boolean isAxisAlignedWith(int p_297900_,  int p_299871_,  int p_299328_)`

## SectionRenderDispatcher.RenderSection.CompileTask

*class* `net.minecraft.client.renderer.chunk.SectionRenderDispatcher.RenderSection.CompileTask`

Enclosing class: SectionRenderDispatcher.RenderSection

### Fields
- `protected final double distAtCreation`
- `protected final AtomicBoolean isCancelled`
- `protected final boolean isHighPriority`
- `protected Map<BlockPos,ModelData> modelData`

### Methods
- `public abstract CompletableFuture<SectionRenderDispatcher.SectionTaskResult> doTask(SectionBufferBuilderPack p_300298_)`
- `public abstract void cancel()`
- `protected abstract String name()`
- `public int compareTo(SectionRenderDispatcher.RenderSection.CompileTask p_298947_)`
- `public ModelData getModelData(BlockPos pos)`

## SectionRenderDispatcher.RenderSection.RebuildTask

*class* `net.minecraft.client.renderer.chunk.SectionRenderDispatcher.RenderSection.RebuildTask`

Enclosing class: SectionRenderDispatcher.RenderSection

### Fields
- `@Nullable protected RenderChunkRegion region`

### Inherited fields
- from `net.minecraft.client.renderer.chunk.SectionRenderDispatcher.RenderSection.CompileTask`: `distAtCreation`, `isCancelled`, `isHighPriority`, `modelData`

### Methods
- `protected String name()`
- `public CompletableFuture<SectionRenderDispatcher.SectionTaskResult> doTask(SectionBufferBuilderPack p_299595_)`
- `private SectionRenderDispatcher.RenderSection.RebuildTask.CompileResults compile(float p_297372_,  float p_300511_,  float p_298415_,  SectionBufferBuilderPack p_300020_)`
- `private <E extends BlockEntity> void handleBlockEntity(SectionRenderDispatcher.RenderSection.RebuildTask.CompileResults p_297364_,  E p_299361_)`
- `public void cancel()`

### Inherited methods
- from `net.minecraft.client.renderer.chunk.SectionRenderDispatcher.RenderSection.CompileTask`: `compareTo`, `getModelData`

## SectionRenderDispatcher.RenderSection.RebuildTask.CompileResults

*class* `net.minecraft.client.renderer.chunk.SectionRenderDispatcher.RenderSection.RebuildTask.CompileResults`

Enclosing class: SectionRenderDispatcher.RenderSection.RebuildTask

### Fields
- `public final List<BlockEntity> globalBlockEntities`
- `public final List<BlockEntity> blockEntities`
- `public final Map<RenderType,BufferBuilder.RenderedBuffer> renderedLayers`
- `public VisibilitySet visibilitySet`
- `@Nullable public BufferBuilder.SortState transparencyState`

## SectionRenderDispatcher.RenderSection.ResortTransparencyTask

*class* `net.minecraft.client.renderer.chunk.SectionRenderDispatcher.RenderSection.ResortTransparencyTask`

Enclosing class: SectionRenderDispatcher.RenderSection

### Fields
- `private final SectionRenderDispatcher.CompiledSection compiledSection`

### Inherited fields
- from `net.minecraft.client.renderer.chunk.SectionRenderDispatcher.RenderSection.CompileTask`: `distAtCreation`, `isCancelled`, `isHighPriority`, `modelData`

### Methods
- `protected String name()`
- `public CompletableFuture<SectionRenderDispatcher.SectionTaskResult> doTask(SectionBufferBuilderPack p_297366_)`
- `public void cancel()`

### Inherited methods
- from `net.minecraft.client.renderer.chunk.SectionRenderDispatcher.RenderSection.CompileTask`: `compareTo`, `getModelData`

## VisGraph

*class* `net.minecraft.client.renderer.chunk.VisGraph`

### Fields
- `private static final int SIZE_IN_BITS` (= 4)
- `private static final int LEN` (= 16)
- `private static final int MASK` (= 15)
- `private static final int SIZE` (= 4096)
- `private static final int X_SHIFT` (= 0)
- `private static final int Z_SHIFT` (= 4)
- `private static final int Y_SHIFT` (= 8)
- `private static final int DX`
- `private static final int DZ`
- `private static final int DY`
- `private static final int INVALID_INDEX` (= -1)
- `private static final Direction[] DIRECTIONS`
- `private final BitSet bitSet`
- `private static final int[] INDEX_OF_EDGES`
- `private int empty`

### Methods
- `public void setOpaque(BlockPos p_112972_)`
- `private static int getIndex(BlockPos p_112976_)`
- `private static int getIndex(int p_112962_,  int p_112963_,  int p_112964_)`
- `public VisibilitySet resolve()`
- `private Set<Direction> floodFill(int p_112960_)`
- `private void addEdges(int p_112969_,  Set<Direction> p_112970_)`
- `private int getNeighborIndexAtFace(int p_112966_,  Direction p_112967_)`

## VisibilitySet

*class* `net.minecraft.client.renderer.chunk.VisibilitySet`

### Fields
- `private static final int FACINGS`
- `private final BitSet data`

### Methods
- `public void add(Set<Direction> p_112991_)`
- `public void set(Direction p_112987_,  Direction p_112988_,  boolean p_112989_)`
- `public void setAll(boolean p_112993_)`
- `public boolean visibilityBetween(Direction p_112984_,  Direction p_112985_)`
- `public String toString()`
