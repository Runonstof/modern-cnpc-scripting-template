# net.minecraft.client.renderer.chunk

- [ChunkCompileTaskGenerator](#chunkcompiletaskgenerator)
- [ChunkCompileTaskGenerator.Status](#chunkcompiletaskgenerator.status)
- [ChunkCompileTaskGenerator.Type](#chunkcompiletaskgenerator.type)
- [ChunkRenderDispatcher](#chunkrenderdispatcher)
- [ChunkRenderWorker](#chunkrenderworker)
- [CompiledChunk](#compiledchunk)
- [IRenderChunkFactory](#irenderchunkfactory)
- [ListChunkFactory](#listchunkfactory)
- [ListedRenderChunk](#listedrenderchunk)
- [RenderChunk](#renderchunk)
- [SetVisibility](#setvisibility)
- [VboChunkFactory](#vbochunkfactory)
- [VisGraph](#visgraph)
## ChunkCompileTaskGenerator

*class* `net.minecraft.client.renderer.chunk.ChunkCompileTaskGenerator`

All Implemented Interfaces: java.lang.Comparable<ChunkCompileTaskGenerator>

### Methods
- `public ChunkCompileTaskGenerator.Status getStatus()`
- `public RenderChunk getRenderChunk()`
- `public CompiledChunk getCompiledChunk()`
- `public void setCompiledChunk(CompiledChunk compiledChunkIn)`
- `public RegionRenderCacheBuilder getRegionRenderCacheBuilder()`
- `public void setRegionRenderCacheBuilder(RegionRenderCacheBuilder regionRenderCacheBuilderIn)`
- `public void setStatus(ChunkCompileTaskGenerator.Status statusIn)`
- `public void finish()`
- `public void addFinishRunnable(java.lang.Runnable runnable)`
- `public java.util.concurrent.locks.ReentrantLock getLock()`
- `public ChunkCompileTaskGenerator.Type getType()`
- `public boolean isFinished()`
- `public int compareTo(ChunkCompileTaskGenerator p_compareTo_1_)`
- `public double getDistanceSq()`

## ChunkCompileTaskGenerator.Status

*enum* `net.minecraft.client.renderer.chunk.ChunkCompileTaskGenerator.Status`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ChunkCompileTaskGenerator.Status>

Enclosing class: ChunkCompileTaskGenerator

### Fields
- `public static final ChunkCompileTaskGenerator.Status PENDING`
- `public static final ChunkCompileTaskGenerator.Status COMPILING`
- `public static final ChunkCompileTaskGenerator.Status UPLOADING`
- `public static final ChunkCompileTaskGenerator.Status DONE`

### Methods
- `public static ChunkCompileTaskGenerator.Status[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ChunkCompileTaskGenerator.Status c : ChunkCompileTaskGenerator.Status.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ChunkCompileTaskGenerator.Status valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ChunkCompileTaskGenerator.Type

*enum* `net.minecraft.client.renderer.chunk.ChunkCompileTaskGenerator.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ChunkCompileTaskGenerator.Type>

Enclosing class: ChunkCompileTaskGenerator

### Fields
- `public static final ChunkCompileTaskGenerator.Type REBUILD_CHUNK`
- `public static final ChunkCompileTaskGenerator.Type RESORT_TRANSPARENCY`

### Methods
- `public static ChunkCompileTaskGenerator.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ChunkCompileTaskGenerator.Type c : ChunkCompileTaskGenerator.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ChunkCompileTaskGenerator.Type valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ChunkRenderDispatcher

*class* `net.minecraft.client.renderer.chunk.ChunkRenderDispatcher`

### Methods
- `public java.lang.String getDebugInfo()`
- `public boolean runChunkUploads(long finishTimeNano)`
- `public boolean updateChunkLater(RenderChunk chunkRenderer)`
- `public boolean updateChunkNow(RenderChunk chunkRenderer)`
- `public void stopChunkUpdates()`
- `public void freeRenderBuilder(RegionRenderCacheBuilder p_178512_1_)`
- `public RegionRenderCacheBuilder allocateRenderBuilder()  throws java.lang.InterruptedException`
  - throws: java.lang.InterruptedException
- `public ChunkCompileTaskGenerator getNextChunkUpdate()  throws java.lang.InterruptedException`
  - throws: java.lang.InterruptedException
- `public boolean updateTransparencyLater(RenderChunk chunkRenderer)`
- `public <any> uploadChunk(BlockRenderLayer p_188245_1_,  BufferBuilder p_188245_2_,  RenderChunk p_188245_3_,  CompiledChunk p_188245_4_,  double p_188245_5_)`
- `public void clearChunkUpdates()`
- `public boolean hasChunkUpdates()`
- `public void stopWorkerThreads()`
- `public boolean hasNoFreeRenderBuilders()`

## ChunkRenderWorker

*class* `net.minecraft.client.renderer.chunk.ChunkRenderWorker`

All Implemented Interfaces: java.lang.Runnable

### Methods
- `public void run()`
- `protected void processTask(ChunkCompileTaskGenerator generator)  throws java.lang.InterruptedException`
  - throws: java.lang.InterruptedException
- `public void notifyToStop()`

## CompiledChunk

*class* `net.minecraft.client.renderer.chunk.CompiledChunk`

### Fields
- `public static final CompiledChunk DUMMY`

### Methods
- `public boolean isEmpty()`
- `protected void setLayerUsed(BlockRenderLayer layer)`
- `public boolean isLayerEmpty(BlockRenderLayer layer)`
- `public void setLayerStarted(BlockRenderLayer layer)`
- `public boolean isLayerStarted(BlockRenderLayer layer)`
- `public java.util.List<TileEntity> getTileEntities()`
- `public void addTileEntity(TileEntity tileEntityIn)`
- `public boolean isVisible(EnumFacing facing,  EnumFacing facing2)`
- `public void setVisibility(SetVisibility visibility)`
- `public BufferBuilder.State getState()`
- `public void setState(BufferBuilder.State stateIn)`

## IRenderChunkFactory

*interface* `net.minecraft.client.renderer.chunk.IRenderChunkFactory`

### Methods
- `RenderChunk create(World worldIn,  RenderGlobal renderGlobalIn,  int index)`

## ListChunkFactory

*class* `net.minecraft.client.renderer.chunk.ListChunkFactory`

All Implemented Interfaces: IRenderChunkFactory

### Methods
- `public RenderChunk create(World worldIn,  RenderGlobal renderGlobalIn,  int index)`

## ListedRenderChunk

*class* `net.minecraft.client.renderer.chunk.ListedRenderChunk`

### Inherited fields
- from `net.minecraft.client.renderer.chunk.RenderChunk`: `boundingBox`, `compiledChunk`, `renderChunksUpdated`

### Methods
- `public int getDisplayList(BlockRenderLayer layer,  CompiledChunk p_178600_2_)`
- `public void deleteGlResources()`

### Inherited methods
- from `net.minecraft.client.renderer.chunk.RenderChunk`: `clearNeedsUpdate`, `createRegionRenderCache`, `finishCompileTask`, `getBlockPosOffset16`, `getCompiledChunk`, `getDistanceSq`, `getLockCompileTask`, `getPosition`, `getVertexBufferByLayer`, `getWorld`, `makeCompileTaskChunk`, `makeCompileTaskTransparency`, `multModelviewMatrix`, `needsImmediateUpdate`, `needsUpdate`, `rebuildChunk`, `resortTransparency`, `setCompiledChunk`, `setFrameIndex`, `setNeedsUpdate`, `setPosition`, `stopCompileTask`

## RenderChunk

*class* `net.minecraft.client.renderer.chunk.RenderChunk`

### Fields
- `public static int renderChunksUpdated`
- `public CompiledChunk compiledChunk`
- `public AxisAlignedBB boundingBox`

### Methods
- `public boolean setFrameIndex(int frameIndexIn)`
- `public VertexBuffer getVertexBufferByLayer(int layer)`
- `public void setPosition(int x,  int y,  int z)`
- `public void resortTransparency(float x,  float y,  float z,  ChunkCompileTaskGenerator generator)`
- `public void rebuildChunk(float x,  float y,  float z,  ChunkCompileTaskGenerator generator)`
- `protected void finishCompileTask()`
- `public java.util.concurrent.locks.ReentrantLock getLockCompileTask()`
- `public ChunkCompileTaskGenerator makeCompileTaskChunk()`
- `public ChunkCompileTaskGenerator makeCompileTaskTransparency()`
- `protected double getDistanceSq()`
- `public void multModelviewMatrix()`
- `public CompiledChunk getCompiledChunk()`
- `public void setCompiledChunk(CompiledChunk compiledChunkIn)`
- `public void stopCompileTask()`
- `public void deleteGlResources()`
- `public BlockPos getPosition()`
- `public void setNeedsUpdate(boolean immediate)`
- `public void clearNeedsUpdate()`
- `public boolean needsUpdate()`
- `public boolean needsImmediateUpdate()`
- `protected ChunkCache createRegionRenderCache(World world,  BlockPos from,  BlockPos to,  int subtract)`
  Creates a new RegionRenderCache instance.
  
   Extending classes can change the behavior of the cache, allowing to visually change
   blocks (schematics etc).
  - param: world - The world to cache.
  - param: from - The starting position of the chunk minus one on each axis.
  - param: to - The ending position of the chunk plus one on each axis.
  - param: subtract - Padding used internally by the RegionRenderCache constructor to make
 the cache a 20x20x20 cube, for a total of 8000 states in the cache.
  - returns: new RegionRenderCache instance
- `public BlockPos getBlockPosOffset16(EnumFacing facing)`
- `public World getWorld()`

## SetVisibility

*class* `net.minecraft.client.renderer.chunk.SetVisibility`

### Methods
- `public void setManyVisible(java.util.Set<EnumFacing> facing)`
- `public void setVisible(EnumFacing facing,  EnumFacing facing2,  boolean p_178619_3_)`
- `public void setAllVisible(boolean visible)`
- `public boolean isVisible(EnumFacing facing,  EnumFacing facing2)`
- `public java.lang.String toString()`

## VboChunkFactory

*class* `net.minecraft.client.renderer.chunk.VboChunkFactory`

All Implemented Interfaces: IRenderChunkFactory

### Methods
- `public RenderChunk create(World worldIn,  RenderGlobal renderGlobalIn,  int index)`

## VisGraph

*class* `net.minecraft.client.renderer.chunk.VisGraph`

### Methods
- `public void setOpaqueCube(BlockPos pos)`
- `public SetVisibility computeVisibility()`
- `public java.util.Set<EnumFacing> getVisibleFacings(BlockPos pos)`
