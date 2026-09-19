# net.minecraft.world.gen

- [ChunkGeneratorDebug](#chunkgeneratordebug)
- [ChunkGeneratorEnd](#chunkgeneratorend)
- [ChunkGeneratorFlat](#chunkgeneratorflat)
- [ChunkGeneratorHell](#chunkgeneratorhell)
- [ChunkGeneratorOverworld](#chunkgeneratoroverworld)
- [ChunkGeneratorSettings](#chunkgeneratorsettings)
- [ChunkGeneratorSettings.Factory](#chunkgeneratorsettings.factory)
- [ChunkGeneratorSettings.Serializer](#chunkgeneratorsettings.serializer)
- [ChunkProviderServer](#chunkproviderserver)
- [FlatGeneratorInfo](#flatgeneratorinfo)
- [FlatLayerInfo](#flatlayerinfo)
- [IChunkGenerator](#ichunkgenerator)
- [MapGenBase](#mapgenbase)
- [MapGenCaves](#mapgencaves)
- [MapGenCavesHell](#mapgencaveshell)
- [MapGenRavine](#mapgenravine)
- [NoiseGenerator](#noisegenerator)
- [NoiseGeneratorImproved](#noisegeneratorimproved)
- [NoiseGeneratorOctaves](#noisegeneratoroctaves)
- [NoiseGeneratorPerlin](#noisegeneratorperlin)
- [NoiseGeneratorSimplex](#noisegeneratorsimplex)
## ChunkGeneratorDebug

*class* `net.minecraft.world.gen.ChunkGeneratorDebug`

All Implemented Interfaces: IChunkGenerator

### Fields
- `protected static final IBlockState AIR`
- `protected static final IBlockState BARRIER`

### Methods
- `public Chunk generateChunk(int x,  int z)`
- `public static IBlockState getBlockStateFor(int p_177461_0_,  int p_177461_1_)`
- `public void populate(int x,  int z)`
- `public boolean generateStructures(Chunk chunkIn,  int x,  int z)`
- `public java.util.List<Biome.SpawnListEntry> getPossibleCreatures(EnumCreatureType creatureType,  BlockPos pos)`
- `public BlockPos getNearestStructurePos(World worldIn,  java.lang.String structureName,  BlockPos position,  boolean findUnexplored)`
- `public boolean isInsideStructure(World worldIn,  java.lang.String structureName,  BlockPos pos)`
- `public void recreateStructures(Chunk chunkIn,  int x,  int z)`

## ChunkGeneratorEnd

*class* `net.minecraft.world.gen.ChunkGeneratorEnd`

All Implemented Interfaces: IChunkGenerator

### Fields
- `protected static final IBlockState END_STONE`
- `protected static final IBlockState AIR`
- `public NoiseGeneratorOctaves noiseGen5`
- `public NoiseGeneratorOctaves noiseGen6`

### Methods
- `public void setBlocksInChunk(int x,  int z,  ChunkPrimer primer)`
- `public void buildSurfaces(ChunkPrimer primer)`
- `public Chunk generateChunk(int x,  int z)`
- `public boolean isIslandChunk(int p_185961_1_,  int p_185961_2_)`
- `public void populate(int x,  int z)`
- `public boolean generateStructures(Chunk chunkIn,  int x,  int z)`
- `public java.util.List<Biome.SpawnListEntry> getPossibleCreatures(EnumCreatureType creatureType,  BlockPos pos)`
- `public BlockPos getNearestStructurePos(World worldIn,  java.lang.String structureName,  BlockPos position,  boolean findUnexplored)`
- `public boolean isInsideStructure(World worldIn,  java.lang.String structureName,  BlockPos pos)`
- `public void recreateStructures(Chunk chunkIn,  int x,  int z)`

## ChunkGeneratorFlat

*class* `net.minecraft.world.gen.ChunkGeneratorFlat`

All Implemented Interfaces: IChunkGenerator

### Methods
- `public Chunk generateChunk(int x,  int z)`
- `public void populate(int x,  int z)`
- `public boolean generateStructures(Chunk chunkIn,  int x,  int z)`
- `public java.util.List<Biome.SpawnListEntry> getPossibleCreatures(EnumCreatureType creatureType,  BlockPos pos)`
- `public BlockPos getNearestStructurePos(World worldIn,  java.lang.String structureName,  BlockPos position,  boolean findUnexplored)`
- `public boolean isInsideStructure(World worldIn,  java.lang.String structureName,  BlockPos pos)`
- `public void recreateStructures(Chunk chunkIn,  int x,  int z)`

## ChunkGeneratorHell

*class* `net.minecraft.world.gen.ChunkGeneratorHell`

All Implemented Interfaces: IChunkGenerator

### Fields
- `protected static final IBlockState AIR`
- `protected static final IBlockState NETHERRACK`
- `protected static final IBlockState BEDROCK`
- `protected static final IBlockState LAVA`
- `protected static final IBlockState GRAVEL`
- `protected static final IBlockState SOUL_SAND`
- `public NoiseGeneratorOctaves scaleNoise`
- `public NoiseGeneratorOctaves depthNoise`

### Methods
- `public void prepareHeights(int p_185936_1_,  int p_185936_2_,  ChunkPrimer primer)`
- `public void buildSurfaces(int p_185937_1_,  int p_185937_2_,  ChunkPrimer primer)`
- `public Chunk generateChunk(int x,  int z)`
- `public void populate(int x,  int z)`
- `public boolean generateStructures(Chunk chunkIn,  int x,  int z)`
- `public java.util.List<Biome.SpawnListEntry> getPossibleCreatures(EnumCreatureType creatureType,  BlockPos pos)`
- `public BlockPos getNearestStructurePos(World worldIn,  java.lang.String structureName,  BlockPos position,  boolean findUnexplored)`
- `public boolean isInsideStructure(World worldIn,  java.lang.String structureName,  BlockPos pos)`
- `public void recreateStructures(Chunk chunkIn,  int x,  int z)`

## ChunkGeneratorOverworld

*class* `net.minecraft.world.gen.ChunkGeneratorOverworld`

All Implemented Interfaces: IChunkGenerator

### Fields
- `protected static final IBlockState STONE`
- `public NoiseGeneratorOctaves scaleNoise`
- `public NoiseGeneratorOctaves depthNoise`
- `public NoiseGeneratorOctaves forestNoise`

### Methods
- `public void setBlocksInChunk(int x,  int z,  ChunkPrimer primer)`
- `public void replaceBiomeBlocks(int x,  int z,  ChunkPrimer primer,  Biome[] biomesIn)`
- `public Chunk generateChunk(int x,  int z)`
- `public void populate(int x,  int z)`
- `public boolean generateStructures(Chunk chunkIn,  int x,  int z)`
- `public java.util.List<Biome.SpawnListEntry> getPossibleCreatures(EnumCreatureType creatureType,  BlockPos pos)`
- `public boolean isInsideStructure(World worldIn,  java.lang.String structureName,  BlockPos pos)`
- `public BlockPos getNearestStructurePos(World worldIn,  java.lang.String structureName,  BlockPos position,  boolean findUnexplored)`
- `public void recreateStructures(Chunk chunkIn,  int x,  int z)`

## ChunkGeneratorSettings

*class* `net.minecraft.world.gen.ChunkGeneratorSettings`

### Fields
- `public final float coordinateScale`
- `public final float heightScale`
- `public final float upperLimitScale`
- `public final float lowerLimitScale`
- `public final float depthNoiseScaleX`
- `public final float depthNoiseScaleZ`
- `public final float depthNoiseScaleExponent`
- `public final float mainNoiseScaleX`
- `public final float mainNoiseScaleY`
- `public final float mainNoiseScaleZ`
- `public final float baseSize`
- `public final float stretchY`
- `public final float biomeDepthWeight`
- `public final float biomeDepthOffSet`
- `public final float biomeScaleWeight`
- `public final float biomeScaleOffset`
- `public final int seaLevel`
- `public final boolean useCaves`
- `public final boolean useDungeons`
- `public final int dungeonChance`
- `public final boolean useStrongholds`
- `public final boolean useVillages`
- `public final boolean useMineShafts`
- `public final boolean useTemples`
- `public final boolean useMonuments`
- `public final boolean useMansions`
- `public final boolean useRavines`
- `public final boolean useWaterLakes`
- `public final int waterLakeChance`
- `public final boolean useLavaLakes`
- `public final int lavaLakeChance`
- `public final boolean useLavaOceans`
- `public final int fixedBiome`
- `public final int biomeSize`
- `public final int riverSize`
- `public final int dirtSize`
- `public final int dirtCount`
- `public final int dirtMinHeight`
- `public final int dirtMaxHeight`
- `public final int gravelSize`
- `public final int gravelCount`
- `public final int gravelMinHeight`
- `public final int gravelMaxHeight`
- `public final int graniteSize`
- `public final int graniteCount`
- `public final int graniteMinHeight`
- `public final int graniteMaxHeight`
- `public final int dioriteSize`
- `public final int dioriteCount`
- `public final int dioriteMinHeight`
- `public final int dioriteMaxHeight`
- `public final int andesiteSize`
- `public final int andesiteCount`
- `public final int andesiteMinHeight`
- `public final int andesiteMaxHeight`
- `public final int coalSize`
- `public final int coalCount`
- `public final int coalMinHeight`
- `public final int coalMaxHeight`
- `public final int ironSize`
- `public final int ironCount`
- `public final int ironMinHeight`
- `public final int ironMaxHeight`
- `public final int goldSize`
- `public final int goldCount`
- `public final int goldMinHeight`
- `public final int goldMaxHeight`
- `public final int redstoneSize`
- `public final int redstoneCount`
- `public final int redstoneMinHeight`
- `public final int redstoneMaxHeight`
- `public final int diamondSize`
- `public final int diamondCount`
- `public final int diamondMinHeight`
- `public final int diamondMaxHeight`
- `public final int lapisSize`
- `public final int lapisCount`
- `public final int lapisCenterHeight`
- `public final int lapisSpread`

## ChunkGeneratorSettings.Factory

*class* `net.minecraft.world.gen.ChunkGeneratorSettings.Factory`

Enclosing class: ChunkGeneratorSettings

### Fields
- `public float coordinateScale`
- `public float heightScale`
- `public float upperLimitScale`
- `public float lowerLimitScale`
- `public float depthNoiseScaleX`
- `public float depthNoiseScaleZ`
- `public float depthNoiseScaleExponent`
- `public float mainNoiseScaleX`
- `public float mainNoiseScaleY`
- `public float mainNoiseScaleZ`
- `public float baseSize`
- `public float stretchY`
- `public float biomeDepthWeight`
- `public float biomeDepthOffset`
- `public float biomeScaleWeight`
- `public float biomeScaleOffset`
- `public int seaLevel`
- `public boolean useCaves`
- `public boolean useDungeons`
- `public int dungeonChance`
- `public boolean useStrongholds`
- `public boolean useVillages`
- `public boolean useMineShafts`
- `public boolean useTemples`
- `public boolean useMonuments`
- `public boolean useMansions`
- `public boolean useRavines`
- `public boolean useWaterLakes`
- `public int waterLakeChance`
- `public boolean useLavaLakes`
- `public int lavaLakeChance`
- `public boolean useLavaOceans`
- `public int fixedBiome`
- `public int biomeSize`
- `public int riverSize`
- `public int dirtSize`
- `public int dirtCount`
- `public int dirtMinHeight`
- `public int dirtMaxHeight`
- `public int gravelSize`
- `public int gravelCount`
- `public int gravelMinHeight`
- `public int gravelMaxHeight`
- `public int graniteSize`
- `public int graniteCount`
- `public int graniteMinHeight`
- `public int graniteMaxHeight`
- `public int dioriteSize`
- `public int dioriteCount`
- `public int dioriteMinHeight`
- `public int dioriteMaxHeight`
- `public int andesiteSize`
- `public int andesiteCount`
- `public int andesiteMinHeight`
- `public int andesiteMaxHeight`
- `public int coalSize`
- `public int coalCount`
- `public int coalMinHeight`
- `public int coalMaxHeight`
- `public int ironSize`
- `public int ironCount`
- `public int ironMinHeight`
- `public int ironMaxHeight`
- `public int goldSize`
- `public int goldCount`
- `public int goldMinHeight`
- `public int goldMaxHeight`
- `public int redstoneSize`
- `public int redstoneCount`
- `public int redstoneMinHeight`
- `public int redstoneMaxHeight`
- `public int diamondSize`
- `public int diamondCount`
- `public int diamondMinHeight`
- `public int diamondMaxHeight`
- `public int lapisSize`
- `public int lapisCount`
- `public int lapisCenterHeight`
- `public int lapisSpread`

### Methods
- `public static ChunkGeneratorSettings.Factory jsonToFactory(java.lang.String p_177865_0_)`
- `public java.lang.String toString()`
- `public void setDefaults()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public ChunkGeneratorSettings build()`

## ChunkGeneratorSettings.Serializer

*class* `net.minecraft.world.gen.ChunkGeneratorSettings.Serializer`

Enclosing class: ChunkGeneratorSettings

### Methods
- `public ChunkGeneratorSettings.Factory deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `public JsonElement serialize(ChunkGeneratorSettings.Factory p_serialize_1_,  java.lang.reflect.Type p_serialize_2_,  JsonSerializationContext p_serialize_3_)`

## ChunkProviderServer

*class* `net.minecraft.world.gen.ChunkProviderServer`

All Implemented Interfaces: IChunkProvider

### Fields
- `public final IChunkGenerator chunkGenerator`
- `public final IChunkLoader chunkLoader`
- `public final <any> id2ChunkMap`
- `public final WorldServer world`

### Methods
- `public java.util.Collection<Chunk> getLoadedChunks()`
- `public void queueUnload(Chunk chunkIn)`
- `public void queueUnloadAll()`
- `public Chunk getLoadedChunk(int x,  int z)`
- `public Chunk loadChunk(int x,  int z)`
- `public Chunk loadChunk(int x,  int z,  java.lang.Runnable runnable)`
- `public Chunk provideChunk(int x,  int z)`
- `public boolean saveChunks(boolean all)`
- `public void flushToDisk()`
- `public boolean tick()`
- `public boolean canSave()`
- `public java.lang.String makeString()`
- `public java.util.List<Biome.SpawnListEntry> getPossibleCreatures(EnumCreatureType creatureType,  BlockPos pos)`
- `public BlockPos getNearestStructurePos(World worldIn,  java.lang.String structureName,  BlockPos position,  boolean findUnexplored)`
- `public boolean isInsideStructure(World worldIn,  java.lang.String structureName,  BlockPos pos)`
- `public int getLoadedChunkCount()`
- `public boolean chunkExists(int x,  int z)`
- `public boolean isChunkGeneratedAt(int x,  int z)`

## FlatGeneratorInfo

*class* `net.minecraft.world.gen.FlatGeneratorInfo`

### Methods
- `public int getBiome()`
- `public void setBiome(int biome)`
- `public java.util.Map<java.lang.String,java.util.Map<java.lang.String,java.lang.String>> getWorldFeatures()`
- `public java.util.List<FlatLayerInfo> getFlatLayers()`
- `public void updateLayers()`
- `public java.lang.String toString()`
- `public static FlatGeneratorInfo createFlatGeneratorFromString(java.lang.String flatGeneratorSettings)`
- `public static FlatGeneratorInfo getDefaultFlatGenerator()`

## FlatLayerInfo

*class* `net.minecraft.world.gen.FlatLayerInfo`

### Methods
- `public int getLayerCount()`
- `public IBlockState getLayerMaterial()`
- `public int getMinY()`
- `public void setMinY(int minY)`
- `public java.lang.String toString()`

## IChunkGenerator

*interface* `net.minecraft.world.gen.IChunkGenerator`

### Methods
- `Chunk generateChunk(int x,  int z)`
- `void populate(int x,  int z)`
- `boolean generateStructures(Chunk chunkIn,  int x,  int z)`
- `java.util.List<Biome.SpawnListEntry> getPossibleCreatures(EnumCreatureType creatureType,  BlockPos pos)`
- `BlockPos getNearestStructurePos(World worldIn,  java.lang.String structureName,  BlockPos position,  boolean findUnexplored)`
- `void recreateStructures(Chunk chunkIn,  int x,  int z)`
- `boolean isInsideStructure(World worldIn,  java.lang.String structureName,  BlockPos pos)`

## MapGenBase

*class* `net.minecraft.world.gen.MapGenBase`

### Fields
- `protected int range`
- `protected java.util.Random rand`
- `protected World world`

### Methods
- `public void generate(World worldIn,  int x,  int z,  ChunkPrimer primer)`
- `public static void setupChunkSeed(long p_191068_0_,  java.util.Random p_191068_2_,  int p_191068_3_,  int p_191068_4_)`
- `protected void recursiveGenerate(World worldIn,  int chunkX,  int chunkZ,  int originalX,  int originalZ,  ChunkPrimer chunkPrimerIn)`

## MapGenCaves

*class* `net.minecraft.world.gen.MapGenCaves`

### Fields
- `protected static final IBlockState BLK_LAVA`
- `protected static final IBlockState BLK_AIR`
- `protected static final IBlockState BLK_SANDSTONE`
- `protected static final IBlockState BLK_RED_SANDSTONE`

### Inherited fields
- from `net.minecraft.world.gen.MapGenBase`: `rand`, `range`, `world`

### Methods
- `protected void addRoom(long p_180703_1_,  int p_180703_3_,  int p_180703_4_,  ChunkPrimer p_180703_5_,  double p_180703_6_,  double p_180703_8_,  double p_180703_10_)`
- `protected void addTunnel(long p_180702_1_,  int p_180702_3_,  int p_180702_4_,  ChunkPrimer p_180702_5_,  double p_180702_6_,  double p_180702_8_,  double p_180702_10_,  float p_180702_12_,  float p_180702_13_,  float p_180702_14_,  int p_180702_15_,  int p_180702_16_,  double p_180702_17_)`
- `protected boolean canReplaceBlock(IBlockState p_175793_1_,  IBlockState p_175793_2_)`
- `protected void recursiveGenerate(World worldIn,  int chunkX,  int chunkZ,  int originalX,  int originalZ,  ChunkPrimer chunkPrimerIn)`
- `protected boolean isOceanBlock(ChunkPrimer data,  int x,  int y,  int z,  int chunkX,  int chunkZ)`
- `protected void digBlock(ChunkPrimer data,  int x,  int y,  int z,  int chunkX,  int chunkZ,  boolean foundTop,  IBlockState state,  IBlockState up)`
  Digs out the current block, default implementation removes stone, filler, and top block
   Sets the block to lava if y is less then 10, and air other wise.
   If setting to air, it also checks to see if we've broken the surface and if so
   tries to make the floor the biome's top block
  - param: data - Block data array
  - param: index - Pre-calculated index into block data
  - param: x - local X position
  - param: y - local Y position
  - param: z - local Z position
  - param: chunkX - Chunk X position
  - param: chunkZ - Chunk Y position
  - param: foundTop - True if we've encountered the biome's top block. Ideally if we've broken the surface.

### Inherited methods
- from `net.minecraft.world.gen.MapGenBase`: `generate`, `setupChunkSeed`

## MapGenCavesHell

*class* `net.minecraft.world.gen.MapGenCavesHell`

### Fields
- `protected static final IBlockState AIR`

### Inherited fields
- from `net.minecraft.world.gen.MapGenBase`: `rand`, `range`, `world`

### Methods
- `protected void addRoom(long p_180705_1_,  int p_180705_3_,  int p_180705_4_,  ChunkPrimer p_180705_5_,  double p_180705_6_,  double p_180705_8_,  double p_180705_10_)`
- `protected void addTunnel(long p_180704_1_,  int p_180704_3_,  int p_180704_4_,  ChunkPrimer p_180704_5_,  double p_180704_6_,  double p_180704_8_,  double p_180704_10_,  float p_180704_12_,  float p_180704_13_,  float p_180704_14_,  int p_180704_15_,  int p_180704_16_,  double p_180704_17_)`
- `protected void recursiveGenerate(World worldIn,  int chunkX,  int chunkZ,  int originalX,  int originalZ,  ChunkPrimer chunkPrimerIn)`

### Inherited methods
- from `net.minecraft.world.gen.MapGenBase`: `generate`, `setupChunkSeed`

## MapGenRavine

*class* `net.minecraft.world.gen.MapGenRavine`

### Fields
- `protected static final IBlockState FLOWING_LAVA`
- `protected static final IBlockState AIR`

### Inherited fields
- from `net.minecraft.world.gen.MapGenBase`: `rand`, `range`, `world`

### Methods
- `protected void addTunnel(long p_180707_1_,  int p_180707_3_,  int p_180707_4_,  ChunkPrimer p_180707_5_,  double p_180707_6_,  double p_180707_8_,  double p_180707_10_,  float p_180707_12_,  float p_180707_13_,  float p_180707_14_,  int p_180707_15_,  int p_180707_16_,  double p_180707_17_)`
- `protected void recursiveGenerate(World worldIn,  int chunkX,  int chunkZ,  int originalX,  int originalZ,  ChunkPrimer chunkPrimerIn)`
- `protected boolean isOceanBlock(ChunkPrimer data,  int x,  int y,  int z,  int chunkX,  int chunkZ)`
- `protected void digBlock(ChunkPrimer data,  int x,  int y,  int z,  int chunkX,  int chunkZ,  boolean foundTop)`
  Digs out the current block, default implementation removes stone, filler, and top block
   Sets the block to lava if y is less then 10, and air other wise.
   If setting to air, it also checks to see if we've broken the surface and if so
   tries to make the floor the biome's top block
  - param: data - Block data array
  - param: index - Pre-calculated index into block data
  - param: x - local X position
  - param: y - local Y position
  - param: z - local Z position
  - param: chunkX - Chunk X position
  - param: chunkZ - Chunk Y position
  - param: foundTop - True if we've encountered the biome's top block. Ideally if we've broken the surface.

### Inherited methods
- from `net.minecraft.world.gen.MapGenBase`: `generate`, `setupChunkSeed`

## NoiseGenerator

*class* `net.minecraft.world.gen.NoiseGenerator`

## NoiseGeneratorImproved

*class* `net.minecraft.world.gen.NoiseGeneratorImproved`

### Fields
- `public double xCoord`
- `public double yCoord`
- `public double zCoord`

### Methods
- `public final double lerp(double p_76311_1_,  double p_76311_3_,  double p_76311_5_)`
- `public final double grad2(int p_76309_1_,  double p_76309_2_,  double p_76309_4_)`
- `public final double grad(int p_76310_1_,  double p_76310_2_,  double p_76310_4_,  double p_76310_6_)`
- `public void populateNoiseArray(double[] noiseArray,  double xOffset,  double yOffset,  double zOffset,  int xSize,  int ySize,  int zSize,  double xScale,  double yScale,  double zScale,  double noiseScale)`

## NoiseGeneratorOctaves

*class* `net.minecraft.world.gen.NoiseGeneratorOctaves`

### Methods
- `public double[] generateNoiseOctaves(double[] noiseArray,  int xOffset,  int yOffset,  int zOffset,  int xSize,  int ySize,  int zSize,  double xScale,  double yScale,  double zScale)`
- `public double[] generateNoiseOctaves(double[] noiseArray,  int xOffset,  int zOffset,  int xSize,  int zSize,  double xScale,  double zScale,  double p_76305_10_)`

## NoiseGeneratorPerlin

*class* `net.minecraft.world.gen.NoiseGeneratorPerlin`

### Methods
- `public double getValue(double p_151601_1_,  double p_151601_3_)`
- `public double[] getRegion(double[] p_151599_1_,  double p_151599_2_,  double p_151599_4_,  int p_151599_6_,  int p_151599_7_,  double p_151599_8_,  double p_151599_10_,  double p_151599_12_)`
- `public double[] getRegion(double[] p_151600_1_,  double p_151600_2_,  double p_151600_4_,  int p_151600_6_,  int p_151600_7_,  double p_151600_8_,  double p_151600_10_,  double p_151600_12_,  double p_151600_14_)`

## NoiseGeneratorSimplex

*class* `net.minecraft.world.gen.NoiseGeneratorSimplex`

### Fields
- `public static final double SQRT_3`
- `public double xo`
- `public double yo`
- `public double zo`

### Methods
- `public double getValue(double p_151605_1_,  double p_151605_3_)`
- `public void add(double[] p_151606_1_,  double p_151606_2_,  double p_151606_4_,  int p_151606_6_,  int p_151606_7_,  double p_151606_8_,  double p_151606_10_,  double p_151606_12_)`
