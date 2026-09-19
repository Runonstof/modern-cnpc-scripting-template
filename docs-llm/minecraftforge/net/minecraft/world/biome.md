# net.minecraft.world.biome

- [Biome](#biome)
- [Biome.BiomeProperties](#biome.biomeproperties)
- [Biome.FlowerEntry](#biome.flowerentry)
- [Biome.SpawnListEntry](#biome.spawnlistentry)
- [Biome.TempCategory](#biome.tempcategory)
- [BiomeBeach](#biomebeach)
- [BiomeCache](#biomecache)
- [BiomeCache.Block](#biomecache.block)
- [BiomeColorHelper](#biomecolorhelper)
- [BiomeDecorator](#biomedecorator)
- [BiomeDesert](#biomedesert)
- [BiomeEnd](#biomeend)
- [BiomeEndDecorator](#biomeenddecorator)
- [BiomeForest](#biomeforest)
- [BiomeForest.Type](#biomeforest.type)
- [BiomeForestMutated](#biomeforestmutated)
- [BiomeHell](#biomehell)
- [BiomeHellDecorator](#biomehelldecorator)
- [BiomeHills](#biomehills)
- [BiomeHills.Type](#biomehills.type)
- [BiomeJungle](#biomejungle)
- [BiomeMesa](#biomemesa)
- [BiomeMushroomIsland](#biomemushroomisland)
- [BiomeOcean](#biomeocean)
- [BiomePlains](#biomeplains)
- [BiomeProvider](#biomeprovider)
- [BiomeProviderSingle](#biomeprovidersingle)
- [BiomeRiver](#biomeriver)
- [BiomeSavanna](#biomesavanna)
- [BiomeSavannaMutated](#biomesavannamutated)
- [BiomeSnow](#biomesnow)
- [BiomeStoneBeach](#biomestonebeach)
- [BiomeSwamp](#biomeswamp)
- [BiomeTaiga](#biometaiga)
- [BiomeTaiga.Type](#biometaiga.type)
- [BiomeVoid](#biomevoid)
- [BiomeVoidDecorator](#biomevoiddecorator)
## Biome

*class* `net.minecraft.world.biome.Biome`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Fields
- `protected static final IBlockState STONE`
- `protected static final IBlockState AIR`
- `protected static final IBlockState BEDROCK`
- `protected static final IBlockState GRAVEL`
- `protected static final IBlockState RED_SANDSTONE`
- `protected static final IBlockState SANDSTONE`
- `protected static final IBlockState ICE`
- `protected static final IBlockState WATER`
- `public static final ObjectIntIdentityMap<Biome> MUTATION_TO_BASE_ID_MAP`
- `protected static final NoiseGeneratorPerlin TEMPERATURE_NOISE`
- `protected static final NoiseGeneratorPerlin GRASS_COLOR_NOISE`
- `protected static final WorldGenDoublePlant DOUBLE_PLANT_GENERATOR`
- `protected static final WorldGenTrees TREE_FEATURE`
- `protected static final WorldGenBigTree BIG_TREE_FEATURE`
- `protected static final WorldGenSwamp SWAMP_FEATURE`
- `public static final RegistryNamespaced<ResourceLocation,Biome> REGISTRY`
- `public IBlockState topBlock`
- `public IBlockState fillerBlock`
- `public BiomeDecorator decorator`
- `protected java.util.List<Biome.SpawnListEntry> spawnableMonsterList`
- `protected java.util.List<Biome.SpawnListEntry> spawnableCreatureList`
- `protected java.util.List<Biome.SpawnListEntry> spawnableWaterCreatureList`
- `protected java.util.List<Biome.SpawnListEntry> spawnableCaveCreatureList`
- `protected java.util.Map<EnumCreatureType,java.util.List<Biome.SpawnListEntry>> modSpawnableLists`
- `protected java.util.List<Biome.FlowerEntry> flowers`

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public static int getIdForBiome(Biome biome)`
- `public static Biome getBiomeForId(int id)`
- `public static Biome getMutationForBiome(Biome biome)`
- `public BiomeDecorator createBiomeDecorator()`
- `public boolean isMutation()`
- `public WorldGenAbstractTree getRandomTreeFeature(java.util.Random rand)`
- `public WorldGenerator getRandomWorldGenForGrass(java.util.Random rand)`
- `public BlockFlower.EnumFlowerType pickRandomFlower(java.util.Random rand,  BlockPos pos)`
- `public int getSkyColorByTemp(float currentTemperature)`
- `public java.util.List<Biome.SpawnListEntry> getSpawnableList(EnumCreatureType creatureType)`
- `public boolean getEnableSnow()`
- `public boolean canRain()`
- `public boolean isHighHumidity()`
- `public float getSpawningChance()`
- `public final float getTemperature(BlockPos pos)`
- `public void decorate(World worldIn,  java.util.Random rand,  BlockPos pos)`
- `public void genTerrainBlocks(World worldIn,  java.util.Random rand,  ChunkPrimer chunkPrimerIn,  int x,  int z,  double noiseVal)`
- `public int getGrassColorAtPos(BlockPos pos)`
- `public final void generateBiomeTerrain(World worldIn,  java.util.Random rand,  ChunkPrimer chunkPrimerIn,  int x,  int z,  double noiseVal)`
- `public int getFoliageColorAtPos(BlockPos pos)`
- `public java.lang.Class<? extends Biome> getBiomeClass()`
- `public Biome.TempCategory getTempCategory()`
- `public static Biome getBiome(int id)`
- `public static Biome getBiome(int biomeId,  Biome fallback)`
- `public boolean ignorePlayerSpawnSuitability()`
- `public final float getBaseHeight()`
- `public final float getRainfall()`
- `public final java.lang.String getBiomeName()`
- `public final float getHeightVariation()`
- `public final float getDefaultTemperature()`
- `public final int getWaterColor()`
- `public final boolean isSnowyBiome()`
- `public BiomeDecorator getModdedBiomeDecorator(BiomeDecorator original)`
- `public int getWaterColorMultiplier()`
- `public int getModdedBiomeGrassColor(int original)`
- `public int getModdedBiomeFoliageColor(int original)`
- `public void addDefaultFlowers()`
  Adds the default flowers, as of 1.7, it is 2 yellow, and 1 red. I chose 10 to allow some wiggle room in the numbers.
- `public void addFlower(IBlockState state,  int weight)`
  Register a new plant to be planted when bonemeal is used on grass.
  - param: state - The block to place.
  - param: weight - The weight of the plant, where red flowers are
 10 and yellow flowers are 20.
- `public void plantFlower(World world,  java.util.Random rand,  BlockPos pos)`
- `public static void registerBiomes()`
- `public static void registerBiome(int id,  java.lang.String name,  Biome biome)`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## Biome.BiomeProperties

*class* `net.minecraft.world.biome.Biome.BiomeProperties`

Enclosing class: Biome

### Methods
- `public Biome.BiomeProperties setTemperature(float temperatureIn)`
- `public Biome.BiomeProperties setRainfall(float rainfallIn)`
- `public Biome.BiomeProperties setBaseHeight(float baseHeightIn)`
- `public Biome.BiomeProperties setHeightVariation(float heightVariationIn)`
- `public Biome.BiomeProperties setRainDisabled()`
- `public Biome.BiomeProperties setSnowEnabled()`
- `public Biome.BiomeProperties setWaterColor(int waterColorIn)`
- `public Biome.BiomeProperties setBaseBiome(java.lang.String nameIn)`

## Biome.FlowerEntry

*class* `net.minecraft.world.biome.Biome.FlowerEntry`

Weighted random holder class used to hold possible flowers
 that can spawn in this biome when bonemeal is used on grass.

Enclosing class: Biome

### Fields
- `public final IBlockState state`

### Inherited fields
- from `net.minecraft.util.WeightedRandom.Item`: `itemWeight`

## Biome.SpawnListEntry

*class* `net.minecraft.world.biome.Biome.SpawnListEntry`

Enclosing class: Biome

### Fields
- `public java.lang.Class<? extends EntityLiving> entityClass`
- `public int minGroupCount`
- `public int maxGroupCount`

### Inherited fields
- from `net.minecraft.util.WeightedRandom.Item`: `itemWeight`

### Methods
- `public java.lang.String toString()`
- `public EntityLiving newInstance(World world)  throws java.lang.Exception`
  - throws: java.lang.Exception

## Biome.TempCategory

*enum* `net.minecraft.world.biome.Biome.TempCategory`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<Biome.TempCategory>

Enclosing class: Biome

### Fields
- `public static final Biome.TempCategory OCEAN`
- `public static final Biome.TempCategory COLD`
- `public static final Biome.TempCategory MEDIUM`
- `public static final Biome.TempCategory WARM`

### Methods
- `public static Biome.TempCategory[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (Biome.TempCategory c : Biome.TempCategory.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static Biome.TempCategory valueOf(java.lang.String name)`
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

## BiomeBeach

*class* `net.minecraft.world.biome.BiomeBeach`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Inherited fields
- from `net.minecraft.world.biome.Biome`: `AIR`, `BEDROCK`, `BIG_TREE_FEATURE`, `decorator`, `DOUBLE_PLANT_GENERATOR`, `fillerBlock`, `flowers`, `GRASS_COLOR_NOISE`, `GRAVEL`, `ICE`, `modSpawnableLists`, `MUTATION_TO_BASE_ID_MAP`, `RED_SANDSTONE`, `REGISTRY`, `SANDSTONE`, `spawnableCaveCreatureList`, `spawnableCreatureList`, `spawnableMonsterList`, `spawnableWaterCreatureList`, `STONE`, `SWAMP_FEATURE`, `TEMPERATURE_NOISE`, `topBlock`, `TREE_FEATURE`, `WATER`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Inherited methods
- from `net.minecraft.world.biome.Biome`: `addDefaultFlowers`, `addFlower`, `canRain`, `createBiomeDecorator`, `decorate`, `generateBiomeTerrain`, `genTerrainBlocks`, `getBaseHeight`, `getBiome`, `getBiome`, `getBiomeClass`, `getBiomeForId`, `getBiomeName`, `getDefaultTemperature`, `getEnableSnow`, `getFoliageColorAtPos`, `getGrassColorAtPos`, `getHeightVariation`, `getIdForBiome`, `getModdedBiomeDecorator`, `getModdedBiomeFoliageColor`, `getModdedBiomeGrassColor`, `getMutationForBiome`, `getRainfall`, `getRandomTreeFeature`, `getRandomWorldGenForGrass`, `getSkyColorByTemp`, `getSpawnableList`, `getSpawningChance`, `getTempCategory`, `getTemperature`, `getWaterColor`, `getWaterColorMultiplier`, `ignorePlayerSpawnSuitability`, `isHighHumidity`, `isMutation`, `isSnowyBiome`, `pickRandomFlower`, `plantFlower`, `registerBiome`, `registerBiomes`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BiomeCache

*class* `net.minecraft.world.biome.BiomeCache`

### Methods
- `public BiomeCache.Block getEntry(int x,  int z)`
- `public Biome getBiome(int x,  int z,  Biome defaultValue)`
- `public void cleanupCache()`
- `public Biome[] getCachedBiomes(int x,  int z)`

## BiomeCache.Block

*class* `net.minecraft.world.biome.BiomeCache.Block`

Enclosing class: BiomeCache

### Fields
- `public Biome[] biomes`
- `public int x`
- `public int z`
- `public long lastAccessTime`

### Methods
- `public Biome getBiome(int x,  int z)`

## BiomeColorHelper

*class* `net.minecraft.world.biome.BiomeColorHelper`

### Methods
- `public static int getGrassColorAtPos(IBlockAccess blockAccess,  BlockPos pos)`
- `public static int getFoliageColorAtPos(IBlockAccess blockAccess,  BlockPos pos)`
- `public static int getWaterColorAtPos(IBlockAccess blockAccess,  BlockPos pos)`

## BiomeDecorator

*class* `net.minecraft.world.biome.BiomeDecorator`

### Fields
- `public boolean decorating`
- `public BlockPos chunkPos`
- `public ChunkGeneratorSettings chunkProviderSettings`
- `public WorldGenerator clayGen`
- `public WorldGenerator sandGen`
- `public WorldGenerator gravelGen`
- `public WorldGenerator dirtGen`
- `public WorldGenerator gravelOreGen`
- `public WorldGenerator graniteGen`
- `public WorldGenerator dioriteGen`
- `public WorldGenerator andesiteGen`
- `public WorldGenerator coalGen`
- `public WorldGenerator ironGen`
- `public WorldGenerator goldGen`
- `public WorldGenerator redstoneGen`
- `public WorldGenerator diamondGen`
- `public WorldGenerator lapisGen`
- `public WorldGenFlowers flowerGen`
- `public WorldGenerator mushroomBrownGen`
- `public WorldGenerator mushroomRedGen`
- `public WorldGenerator bigMushroomGen`
- `public WorldGenerator reedGen`
- `public WorldGenerator cactusGen`
- `public WorldGenerator waterlilyGen`
- `public int waterlilyPerChunk`
- `public int treesPerChunk`
- `public float extraTreeChance`
- `public int flowersPerChunk`
- `public int grassPerChunk`
- `public int deadBushPerChunk`
- `public int mushroomsPerChunk`
- `public int reedsPerChunk`
- `public int cactiPerChunk`
- `public int gravelPatchesPerChunk`
- `public int sandPatchesPerChunk`
- `public int clayPerChunk`
- `public int bigMushroomsPerChunk`
- `public boolean generateFalls`

### Methods
- `public void decorate(World worldIn,  java.util.Random random,  Biome biome,  BlockPos pos)`
- `protected void genDecorations(Biome biomeIn,  World worldIn,  java.util.Random random)`
- `protected void generateOres(World worldIn,  java.util.Random random)`
- `protected void genStandardOre1(World worldIn,  java.util.Random random,  int blockCount,  WorldGenerator generator,  int minHeight,  int maxHeight)`
- `protected void genStandardOre2(World worldIn,  java.util.Random random,  int blockCount,  WorldGenerator generator,  int centerHeight,  int spread)`

## BiomeDesert

*class* `net.minecraft.world.biome.BiomeDesert`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Inherited fields
- from `net.minecraft.world.biome.Biome`: `AIR`, `BEDROCK`, `BIG_TREE_FEATURE`, `decorator`, `DOUBLE_PLANT_GENERATOR`, `fillerBlock`, `flowers`, `GRASS_COLOR_NOISE`, `GRAVEL`, `ICE`, `modSpawnableLists`, `MUTATION_TO_BASE_ID_MAP`, `RED_SANDSTONE`, `REGISTRY`, `SANDSTONE`, `spawnableCaveCreatureList`, `spawnableCreatureList`, `spawnableMonsterList`, `spawnableWaterCreatureList`, `STONE`, `SWAMP_FEATURE`, `TEMPERATURE_NOISE`, `topBlock`, `TREE_FEATURE`, `WATER`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public void decorate(World worldIn,  java.util.Random rand,  BlockPos pos)`

### Inherited methods
- from `net.minecraft.world.biome.Biome`: `addDefaultFlowers`, `addFlower`, `canRain`, `createBiomeDecorator`, `generateBiomeTerrain`, `genTerrainBlocks`, `getBaseHeight`, `getBiome`, `getBiome`, `getBiomeClass`, `getBiomeForId`, `getBiomeName`, `getDefaultTemperature`, `getEnableSnow`, `getFoliageColorAtPos`, `getGrassColorAtPos`, `getHeightVariation`, `getIdForBiome`, `getModdedBiomeDecorator`, `getModdedBiomeFoliageColor`, `getModdedBiomeGrassColor`, `getMutationForBiome`, `getRainfall`, `getRandomTreeFeature`, `getRandomWorldGenForGrass`, `getSkyColorByTemp`, `getSpawnableList`, `getSpawningChance`, `getTempCategory`, `getTemperature`, `getWaterColor`, `getWaterColorMultiplier`, `ignorePlayerSpawnSuitability`, `isHighHumidity`, `isMutation`, `isSnowyBiome`, `pickRandomFlower`, `plantFlower`, `registerBiome`, `registerBiomes`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BiomeEnd

*class* `net.minecraft.world.biome.BiomeEnd`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Inherited fields
- from `net.minecraft.world.biome.Biome`: `AIR`, `BEDROCK`, `BIG_TREE_FEATURE`, `decorator`, `DOUBLE_PLANT_GENERATOR`, `fillerBlock`, `flowers`, `GRASS_COLOR_NOISE`, `GRAVEL`, `ICE`, `modSpawnableLists`, `MUTATION_TO_BASE_ID_MAP`, `RED_SANDSTONE`, `REGISTRY`, `SANDSTONE`, `spawnableCaveCreatureList`, `spawnableCreatureList`, `spawnableMonsterList`, `spawnableWaterCreatureList`, `STONE`, `SWAMP_FEATURE`, `TEMPERATURE_NOISE`, `topBlock`, `TREE_FEATURE`, `WATER`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getSkyColorByTemp(float currentTemperature)`

### Inherited methods
- from `net.minecraft.world.biome.Biome`: `addDefaultFlowers`, `addFlower`, `canRain`, `createBiomeDecorator`, `decorate`, `generateBiomeTerrain`, `genTerrainBlocks`, `getBaseHeight`, `getBiome`, `getBiome`, `getBiomeClass`, `getBiomeForId`, `getBiomeName`, `getDefaultTemperature`, `getEnableSnow`, `getFoliageColorAtPos`, `getGrassColorAtPos`, `getHeightVariation`, `getIdForBiome`, `getModdedBiomeDecorator`, `getModdedBiomeFoliageColor`, `getModdedBiomeGrassColor`, `getMutationForBiome`, `getRainfall`, `getRandomTreeFeature`, `getRandomWorldGenForGrass`, `getSpawnableList`, `getSpawningChance`, `getTempCategory`, `getTemperature`, `getWaterColor`, `getWaterColorMultiplier`, `ignorePlayerSpawnSuitability`, `isHighHumidity`, `isMutation`, `isSnowyBiome`, `pickRandomFlower`, `plantFlower`, `registerBiome`, `registerBiomes`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BiomeEndDecorator

*class* `net.minecraft.world.biome.BiomeEndDecorator`

### Inherited fields
- from `net.minecraft.world.biome.BiomeDecorator`: `andesiteGen`, `bigMushroomGen`, `bigMushroomsPerChunk`, `cactiPerChunk`, `cactusGen`, `chunkPos`, `chunkProviderSettings`, `clayGen`, `clayPerChunk`, `coalGen`, `deadBushPerChunk`, `decorating`, `diamondGen`, `dioriteGen`, `dirtGen`, `extraTreeChance`, `flowerGen`, `flowersPerChunk`, `generateFalls`, `goldGen`, `graniteGen`, `grassPerChunk`, `gravelGen`, `gravelOreGen`, `gravelPatchesPerChunk`, `ironGen`, `lapisGen`, `mushroomBrownGen`, `mushroomRedGen`, `mushroomsPerChunk`, `redstoneGen`, `reedGen`, `reedsPerChunk`, `sandGen`, `sandPatchesPerChunk`, `treesPerChunk`, `waterlilyGen`, `waterlilyPerChunk`

### Methods
- `protected void genDecorations(Biome biomeIn,  World worldIn,  java.util.Random random)`
- `public static WorldGenSpikes.EndSpike[] getSpikesForWorld(World p_185426_0_)`

### Inherited methods
- from `net.minecraft.world.biome.BiomeDecorator`: `decorate`, `generateOres`, `genStandardOre1`, `genStandardOre2`

## BiomeForest

*class* `net.minecraft.world.biome.BiomeForest`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Fields
- `protected static final WorldGenBirchTree SUPER_BIRCH_TREE`
- `protected static final WorldGenBirchTree BIRCH_TREE`
- `protected static final WorldGenCanopyTree ROOF_TREE`

### Inherited fields
- from `net.minecraft.world.biome.Biome`: `AIR`, `BEDROCK`, `BIG_TREE_FEATURE`, `decorator`, `DOUBLE_PLANT_GENERATOR`, `fillerBlock`, `flowers`, `GRASS_COLOR_NOISE`, `GRAVEL`, `ICE`, `modSpawnableLists`, `MUTATION_TO_BASE_ID_MAP`, `RED_SANDSTONE`, `REGISTRY`, `SANDSTONE`, `spawnableCaveCreatureList`, `spawnableCreatureList`, `spawnableMonsterList`, `spawnableWaterCreatureList`, `STONE`, `SWAMP_FEATURE`, `TEMPERATURE_NOISE`, `topBlock`, `TREE_FEATURE`, `WATER`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public WorldGenAbstractTree getRandomTreeFeature(java.util.Random rand)`
- `public BlockFlower.EnumFlowerType pickRandomFlower(java.util.Random rand,  BlockPos pos)`
- `public void decorate(World worldIn,  java.util.Random rand,  BlockPos pos)`
- `public void addMushrooms(World p_185379_1_,  java.util.Random p_185379_2_,  BlockPos p_185379_3_)`
- `public void addDoublePlants(World p_185378_1_,  java.util.Random p_185378_2_,  BlockPos p_185378_3_,  int p_185378_4_)`
- `public java.lang.Class<? extends Biome> getBiomeClass()`
- `public int getGrassColorAtPos(BlockPos pos)`

### Inherited methods
- from `net.minecraft.world.biome.Biome`: `addDefaultFlowers`, `addFlower`, `canRain`, `createBiomeDecorator`, `generateBiomeTerrain`, `genTerrainBlocks`, `getBaseHeight`, `getBiome`, `getBiome`, `getBiomeForId`, `getBiomeName`, `getDefaultTemperature`, `getEnableSnow`, `getFoliageColorAtPos`, `getHeightVariation`, `getIdForBiome`, `getModdedBiomeDecorator`, `getModdedBiomeFoliageColor`, `getModdedBiomeGrassColor`, `getMutationForBiome`, `getRainfall`, `getRandomWorldGenForGrass`, `getSkyColorByTemp`, `getSpawnableList`, `getSpawningChance`, `getTempCategory`, `getTemperature`, `getWaterColor`, `getWaterColorMultiplier`, `ignorePlayerSpawnSuitability`, `isHighHumidity`, `isMutation`, `isSnowyBiome`, `plantFlower`, `registerBiome`, `registerBiomes`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BiomeForest.Type

*enum* `net.minecraft.world.biome.BiomeForest.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<BiomeForest.Type>

Enclosing class: BiomeForest

### Fields
- `public static final BiomeForest.Type NORMAL`
- `public static final BiomeForest.Type FLOWER`
- `public static final BiomeForest.Type BIRCH`
- `public static final BiomeForest.Type ROOFED`

### Methods
- `public static BiomeForest.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (BiomeForest.Type c : BiomeForest.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static BiomeForest.Type valueOf(java.lang.String name)`
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

## BiomeForestMutated

*class* `net.minecraft.world.biome.BiomeForestMutated`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Inherited fields
- from `net.minecraft.world.biome.BiomeForest`: `BIRCH_TREE`, `ROOF_TREE`, `SUPER_BIRCH_TREE`
- from `net.minecraft.world.biome.Biome`: `AIR`, `BEDROCK`, `BIG_TREE_FEATURE`, `decorator`, `DOUBLE_PLANT_GENERATOR`, `fillerBlock`, `flowers`, `GRASS_COLOR_NOISE`, `GRAVEL`, `ICE`, `modSpawnableLists`, `MUTATION_TO_BASE_ID_MAP`, `RED_SANDSTONE`, `REGISTRY`, `SANDSTONE`, `spawnableCaveCreatureList`, `spawnableCreatureList`, `spawnableMonsterList`, `spawnableWaterCreatureList`, `STONE`, `SWAMP_FEATURE`, `TEMPERATURE_NOISE`, `topBlock`, `TREE_FEATURE`, `WATER`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public WorldGenAbstractTree getRandomTreeFeature(java.util.Random rand)`

### Inherited methods
- from `net.minecraft.world.biome.BiomeForest`: `addDoublePlants`, `addMushrooms`, `decorate`, `getBiomeClass`, `getGrassColorAtPos`, `pickRandomFlower`
- from `net.minecraft.world.biome.Biome`: `addDefaultFlowers`, `addFlower`, `canRain`, `createBiomeDecorator`, `generateBiomeTerrain`, `genTerrainBlocks`, `getBaseHeight`, `getBiome`, `getBiome`, `getBiomeForId`, `getBiomeName`, `getDefaultTemperature`, `getEnableSnow`, `getFoliageColorAtPos`, `getHeightVariation`, `getIdForBiome`, `getModdedBiomeDecorator`, `getModdedBiomeFoliageColor`, `getModdedBiomeGrassColor`, `getMutationForBiome`, `getRainfall`, `getRandomWorldGenForGrass`, `getSkyColorByTemp`, `getSpawnableList`, `getSpawningChance`, `getTempCategory`, `getTemperature`, `getWaterColor`, `getWaterColorMultiplier`, `ignorePlayerSpawnSuitability`, `isHighHumidity`, `isMutation`, `isSnowyBiome`, `plantFlower`, `registerBiome`, `registerBiomes`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BiomeHell

*class* `net.minecraft.world.biome.BiomeHell`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Inherited fields
- from `net.minecraft.world.biome.Biome`: `AIR`, `BEDROCK`, `BIG_TREE_FEATURE`, `decorator`, `DOUBLE_PLANT_GENERATOR`, `fillerBlock`, `flowers`, `GRASS_COLOR_NOISE`, `GRAVEL`, `ICE`, `modSpawnableLists`, `MUTATION_TO_BASE_ID_MAP`, `RED_SANDSTONE`, `REGISTRY`, `SANDSTONE`, `spawnableCaveCreatureList`, `spawnableCreatureList`, `spawnableMonsterList`, `spawnableWaterCreatureList`, `STONE`, `SWAMP_FEATURE`, `TEMPERATURE_NOISE`, `topBlock`, `TREE_FEATURE`, `WATER`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Inherited methods
- from `net.minecraft.world.biome.Biome`: `addDefaultFlowers`, `addFlower`, `canRain`, `createBiomeDecorator`, `decorate`, `generateBiomeTerrain`, `genTerrainBlocks`, `getBaseHeight`, `getBiome`, `getBiome`, `getBiomeClass`, `getBiomeForId`, `getBiomeName`, `getDefaultTemperature`, `getEnableSnow`, `getFoliageColorAtPos`, `getGrassColorAtPos`, `getHeightVariation`, `getIdForBiome`, `getModdedBiomeDecorator`, `getModdedBiomeFoliageColor`, `getModdedBiomeGrassColor`, `getMutationForBiome`, `getRainfall`, `getRandomTreeFeature`, `getRandomWorldGenForGrass`, `getSkyColorByTemp`, `getSpawnableList`, `getSpawningChance`, `getTempCategory`, `getTemperature`, `getWaterColor`, `getWaterColorMultiplier`, `ignorePlayerSpawnSuitability`, `isHighHumidity`, `isMutation`, `isSnowyBiome`, `pickRandomFlower`, `plantFlower`, `registerBiome`, `registerBiomes`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BiomeHellDecorator

*class* `net.minecraft.world.biome.BiomeHellDecorator`

### Inherited fields
- from `net.minecraft.world.biome.BiomeDecorator`: `andesiteGen`, `bigMushroomGen`, `bigMushroomsPerChunk`, `cactiPerChunk`, `cactusGen`, `chunkPos`, `chunkProviderSettings`, `clayGen`, `clayPerChunk`, `coalGen`, `deadBushPerChunk`, `decorating`, `diamondGen`, `dioriteGen`, `dirtGen`, `extraTreeChance`, `flowerGen`, `flowersPerChunk`, `generateFalls`, `goldGen`, `graniteGen`, `grassPerChunk`, `gravelGen`, `gravelOreGen`, `gravelPatchesPerChunk`, `ironGen`, `lapisGen`, `mushroomBrownGen`, `mushroomRedGen`, `mushroomsPerChunk`, `redstoneGen`, `reedGen`, `reedsPerChunk`, `sandGen`, `sandPatchesPerChunk`, `treesPerChunk`, `waterlilyGen`, `waterlilyPerChunk`

### Methods
- `public void decorate(World worldIn,  java.util.Random random,  Biome biome,  BlockPos pos)`

### Inherited methods
- from `net.minecraft.world.biome.BiomeDecorator`: `genDecorations`, `generateOres`, `genStandardOre1`, `genStandardOre2`

## BiomeHills

*class* `net.minecraft.world.biome.BiomeHills`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Inherited fields
- from `net.minecraft.world.biome.Biome`: `AIR`, `BEDROCK`, `BIG_TREE_FEATURE`, `decorator`, `DOUBLE_PLANT_GENERATOR`, `fillerBlock`, `flowers`, `GRASS_COLOR_NOISE`, `GRAVEL`, `ICE`, `modSpawnableLists`, `MUTATION_TO_BASE_ID_MAP`, `RED_SANDSTONE`, `REGISTRY`, `SANDSTONE`, `spawnableCaveCreatureList`, `spawnableCreatureList`, `spawnableMonsterList`, `spawnableWaterCreatureList`, `STONE`, `SWAMP_FEATURE`, `TEMPERATURE_NOISE`, `topBlock`, `TREE_FEATURE`, `WATER`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public WorldGenAbstractTree getRandomTreeFeature(java.util.Random rand)`
- `public void decorate(World worldIn,  java.util.Random rand,  BlockPos pos)`
- `public void genTerrainBlocks(World worldIn,  java.util.Random rand,  ChunkPrimer chunkPrimerIn,  int x,  int z,  double noiseVal)`

### Inherited methods
- from `net.minecraft.world.biome.Biome`: `addDefaultFlowers`, `addFlower`, `canRain`, `createBiomeDecorator`, `generateBiomeTerrain`, `getBaseHeight`, `getBiome`, `getBiome`, `getBiomeClass`, `getBiomeForId`, `getBiomeName`, `getDefaultTemperature`, `getEnableSnow`, `getFoliageColorAtPos`, `getGrassColorAtPos`, `getHeightVariation`, `getIdForBiome`, `getModdedBiomeDecorator`, `getModdedBiomeFoliageColor`, `getModdedBiomeGrassColor`, `getMutationForBiome`, `getRainfall`, `getRandomWorldGenForGrass`, `getSkyColorByTemp`, `getSpawnableList`, `getSpawningChance`, `getTempCategory`, `getTemperature`, `getWaterColor`, `getWaterColorMultiplier`, `ignorePlayerSpawnSuitability`, `isHighHumidity`, `isMutation`, `isSnowyBiome`, `pickRandomFlower`, `plantFlower`, `registerBiome`, `registerBiomes`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BiomeHills.Type

*enum* `net.minecraft.world.biome.BiomeHills.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<BiomeHills.Type>

Enclosing class: BiomeHills

### Fields
- `public static final BiomeHills.Type NORMAL`
- `public static final BiomeHills.Type EXTRA_TREES`
- `public static final BiomeHills.Type MUTATED`

### Methods
- `public static BiomeHills.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (BiomeHills.Type c : BiomeHills.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static BiomeHills.Type valueOf(java.lang.String name)`
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

## BiomeJungle

*class* `net.minecraft.world.biome.BiomeJungle`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Inherited fields
- from `net.minecraft.world.biome.Biome`: `AIR`, `BEDROCK`, `BIG_TREE_FEATURE`, `decorator`, `DOUBLE_PLANT_GENERATOR`, `fillerBlock`, `flowers`, `GRASS_COLOR_NOISE`, `GRAVEL`, `ICE`, `modSpawnableLists`, `MUTATION_TO_BASE_ID_MAP`, `RED_SANDSTONE`, `REGISTRY`, `SANDSTONE`, `spawnableCaveCreatureList`, `spawnableCreatureList`, `spawnableMonsterList`, `spawnableWaterCreatureList`, `STONE`, `SWAMP_FEATURE`, `TEMPERATURE_NOISE`, `topBlock`, `TREE_FEATURE`, `WATER`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public WorldGenAbstractTree getRandomTreeFeature(java.util.Random rand)`
- `public WorldGenerator getRandomWorldGenForGrass(java.util.Random rand)`
- `public void decorate(World worldIn,  java.util.Random rand,  BlockPos pos)`

### Inherited methods
- from `net.minecraft.world.biome.Biome`: `addDefaultFlowers`, `addFlower`, `canRain`, `createBiomeDecorator`, `generateBiomeTerrain`, `genTerrainBlocks`, `getBaseHeight`, `getBiome`, `getBiome`, `getBiomeClass`, `getBiomeForId`, `getBiomeName`, `getDefaultTemperature`, `getEnableSnow`, `getFoliageColorAtPos`, `getGrassColorAtPos`, `getHeightVariation`, `getIdForBiome`, `getModdedBiomeDecorator`, `getModdedBiomeFoliageColor`, `getModdedBiomeGrassColor`, `getMutationForBiome`, `getRainfall`, `getSkyColorByTemp`, `getSpawnableList`, `getSpawningChance`, `getTempCategory`, `getTemperature`, `getWaterColor`, `getWaterColorMultiplier`, `ignorePlayerSpawnSuitability`, `isHighHumidity`, `isMutation`, `isSnowyBiome`, `pickRandomFlower`, `plantFlower`, `registerBiome`, `registerBiomes`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BiomeMesa

*class* `net.minecraft.world.biome.BiomeMesa`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Fields
- `protected static final IBlockState COARSE_DIRT`
- `protected static final IBlockState GRASS`
- `protected static final IBlockState HARDENED_CLAY`
- `protected static final IBlockState STAINED_HARDENED_CLAY`
- `protected static final IBlockState ORANGE_STAINED_HARDENED_CLAY`
- `protected static final IBlockState RED_SAND`

### Inherited fields
- from `net.minecraft.world.biome.Biome`: `AIR`, `BEDROCK`, `BIG_TREE_FEATURE`, `decorator`, `DOUBLE_PLANT_GENERATOR`, `fillerBlock`, `flowers`, `GRASS_COLOR_NOISE`, `GRAVEL`, `ICE`, `modSpawnableLists`, `MUTATION_TO_BASE_ID_MAP`, `RED_SANDSTONE`, `REGISTRY`, `SANDSTONE`, `spawnableCaveCreatureList`, `spawnableCreatureList`, `spawnableMonsterList`, `spawnableWaterCreatureList`, `STONE`, `SWAMP_FEATURE`, `TEMPERATURE_NOISE`, `topBlock`, `TREE_FEATURE`, `WATER`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public BiomeDecorator createBiomeDecorator()`
- `public WorldGenAbstractTree getRandomTreeFeature(java.util.Random rand)`
- `public void genTerrainBlocks(World worldIn,  java.util.Random rand,  ChunkPrimer chunkPrimerIn,  int x,  int z,  double noiseVal)`
- `public void generateBands(long p_150619_1_)`
- `public IBlockState getBand(int p_180629_1_,  int p_180629_2_,  int p_180629_3_)`
- `public int getFoliageColorAtPos(BlockPos pos)`
- `public int getGrassColorAtPos(BlockPos pos)`

### Inherited methods
- from `net.minecraft.world.biome.Biome`: `addDefaultFlowers`, `addFlower`, `canRain`, `decorate`, `generateBiomeTerrain`, `getBaseHeight`, `getBiome`, `getBiome`, `getBiomeClass`, `getBiomeForId`, `getBiomeName`, `getDefaultTemperature`, `getEnableSnow`, `getHeightVariation`, `getIdForBiome`, `getModdedBiomeDecorator`, `getModdedBiomeFoliageColor`, `getModdedBiomeGrassColor`, `getMutationForBiome`, `getRainfall`, `getRandomWorldGenForGrass`, `getSkyColorByTemp`, `getSpawnableList`, `getSpawningChance`, `getTempCategory`, `getTemperature`, `getWaterColor`, `getWaterColorMultiplier`, `ignorePlayerSpawnSuitability`, `isHighHumidity`, `isMutation`, `isSnowyBiome`, `pickRandomFlower`, `plantFlower`, `registerBiome`, `registerBiomes`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BiomeMushroomIsland

*class* `net.minecraft.world.biome.BiomeMushroomIsland`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Inherited fields
- from `net.minecraft.world.biome.Biome`: `AIR`, `BEDROCK`, `BIG_TREE_FEATURE`, `decorator`, `DOUBLE_PLANT_GENERATOR`, `fillerBlock`, `flowers`, `GRASS_COLOR_NOISE`, `GRAVEL`, `ICE`, `modSpawnableLists`, `MUTATION_TO_BASE_ID_MAP`, `RED_SANDSTONE`, `REGISTRY`, `SANDSTONE`, `spawnableCaveCreatureList`, `spawnableCreatureList`, `spawnableMonsterList`, `spawnableWaterCreatureList`, `STONE`, `SWAMP_FEATURE`, `TEMPERATURE_NOISE`, `topBlock`, `TREE_FEATURE`, `WATER`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Inherited methods
- from `net.minecraft.world.biome.Biome`: `addDefaultFlowers`, `addFlower`, `canRain`, `createBiomeDecorator`, `decorate`, `generateBiomeTerrain`, `genTerrainBlocks`, `getBaseHeight`, `getBiome`, `getBiome`, `getBiomeClass`, `getBiomeForId`, `getBiomeName`, `getDefaultTemperature`, `getEnableSnow`, `getFoliageColorAtPos`, `getGrassColorAtPos`, `getHeightVariation`, `getIdForBiome`, `getModdedBiomeDecorator`, `getModdedBiomeFoliageColor`, `getModdedBiomeGrassColor`, `getMutationForBiome`, `getRainfall`, `getRandomTreeFeature`, `getRandomWorldGenForGrass`, `getSkyColorByTemp`, `getSpawnableList`, `getSpawningChance`, `getTempCategory`, `getTemperature`, `getWaterColor`, `getWaterColorMultiplier`, `ignorePlayerSpawnSuitability`, `isHighHumidity`, `isMutation`, `isSnowyBiome`, `pickRandomFlower`, `plantFlower`, `registerBiome`, `registerBiomes`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BiomeOcean

*class* `net.minecraft.world.biome.BiomeOcean`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Inherited fields
- from `net.minecraft.world.biome.Biome`: `AIR`, `BEDROCK`, `BIG_TREE_FEATURE`, `decorator`, `DOUBLE_PLANT_GENERATOR`, `fillerBlock`, `flowers`, `GRASS_COLOR_NOISE`, `GRAVEL`, `ICE`, `modSpawnableLists`, `MUTATION_TO_BASE_ID_MAP`, `RED_SANDSTONE`, `REGISTRY`, `SANDSTONE`, `spawnableCaveCreatureList`, `spawnableCreatureList`, `spawnableMonsterList`, `spawnableWaterCreatureList`, `STONE`, `SWAMP_FEATURE`, `TEMPERATURE_NOISE`, `topBlock`, `TREE_FEATURE`, `WATER`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public Biome.TempCategory getTempCategory()`

### Inherited methods
- from `net.minecraft.world.biome.Biome`: `addDefaultFlowers`, `addFlower`, `canRain`, `createBiomeDecorator`, `decorate`, `generateBiomeTerrain`, `genTerrainBlocks`, `getBaseHeight`, `getBiome`, `getBiome`, `getBiomeClass`, `getBiomeForId`, `getBiomeName`, `getDefaultTemperature`, `getEnableSnow`, `getFoliageColorAtPos`, `getGrassColorAtPos`, `getHeightVariation`, `getIdForBiome`, `getModdedBiomeDecorator`, `getModdedBiomeFoliageColor`, `getModdedBiomeGrassColor`, `getMutationForBiome`, `getRainfall`, `getRandomTreeFeature`, `getRandomWorldGenForGrass`, `getSkyColorByTemp`, `getSpawnableList`, `getSpawningChance`, `getTemperature`, `getWaterColor`, `getWaterColorMultiplier`, `ignorePlayerSpawnSuitability`, `isHighHumidity`, `isMutation`, `isSnowyBiome`, `pickRandomFlower`, `plantFlower`, `registerBiome`, `registerBiomes`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BiomePlains

*class* `net.minecraft.world.biome.BiomePlains`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Fields
- `protected boolean sunflowers`

### Inherited fields
- from `net.minecraft.world.biome.Biome`: `AIR`, `BEDROCK`, `BIG_TREE_FEATURE`, `decorator`, `DOUBLE_PLANT_GENERATOR`, `fillerBlock`, `flowers`, `GRASS_COLOR_NOISE`, `GRAVEL`, `ICE`, `modSpawnableLists`, `MUTATION_TO_BASE_ID_MAP`, `RED_SANDSTONE`, `REGISTRY`, `SANDSTONE`, `spawnableCaveCreatureList`, `spawnableCreatureList`, `spawnableMonsterList`, `spawnableWaterCreatureList`, `STONE`, `SWAMP_FEATURE`, `TEMPERATURE_NOISE`, `topBlock`, `TREE_FEATURE`, `WATER`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public BlockFlower.EnumFlowerType pickRandomFlower(java.util.Random rand,  BlockPos pos)`
- `public void decorate(World worldIn,  java.util.Random rand,  BlockPos pos)`
- `public void addDefaultFlowers()`
  Description copied from class: Biome
  Adds the default flowers, as of 1.7, it is 2 yellow, and 1 red. I chose 10 to allow some wiggle room in the numbers.
- `public WorldGenAbstractTree getRandomTreeFeature(java.util.Random rand)`

### Inherited methods
- from `net.minecraft.world.biome.Biome`: `addFlower`, `canRain`, `createBiomeDecorator`, `generateBiomeTerrain`, `genTerrainBlocks`, `getBaseHeight`, `getBiome`, `getBiome`, `getBiomeClass`, `getBiomeForId`, `getBiomeName`, `getDefaultTemperature`, `getEnableSnow`, `getFoliageColorAtPos`, `getGrassColorAtPos`, `getHeightVariation`, `getIdForBiome`, `getModdedBiomeDecorator`, `getModdedBiomeFoliageColor`, `getModdedBiomeGrassColor`, `getMutationForBiome`, `getRainfall`, `getRandomWorldGenForGrass`, `getSkyColorByTemp`, `getSpawnableList`, `getSpawningChance`, `getTempCategory`, `getTemperature`, `getWaterColor`, `getWaterColorMultiplier`, `ignorePlayerSpawnSuitability`, `isHighHumidity`, `isMutation`, `isSnowyBiome`, `plantFlower`, `registerBiome`, `registerBiomes`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BiomeProvider

*class* `net.minecraft.world.biome.BiomeProvider`

### Fields
- `public static java.util.List<Biome> allowedBiomes`

### Methods
- `public java.util.List<Biome> getBiomesToSpawnIn()`
- `public Biome getBiome(BlockPos pos)`
- `public Biome getBiome(BlockPos pos,  Biome defaultBiome)`
- `public float getTemperatureAtHeight(float p_76939_1_,  int p_76939_2_)`
- `public Biome[] getBiomesForGeneration(Biome[] biomes,  int x,  int z,  int width,  int height)`
- `public Biome[] getBiomes(Biome[] oldBiomeList,  int x,  int z,  int width,  int depth)`
- `public Biome[] getBiomes(Biome[] listToReuse,  int x,  int z,  int width,  int length,  boolean cacheFlag)`
- `public boolean areBiomesViable(int x,  int z,  int radius,  java.util.List<Biome> allowed)`
- `public BlockPos findBiomePosition(int x,  int z,  int range,  java.util.List<Biome> biomes,  java.util.Random random)`
- `public void cleanupCache()`
- `public GenLayer[] getModdedBiomeGenerators(WorldType worldType,  long seed,  GenLayer[] original)`
- `public boolean isFixedBiome()`
- `public Biome getFixedBiome()`

## BiomeProviderSingle

*class* `net.minecraft.world.biome.BiomeProviderSingle`

### Inherited fields
- from `net.minecraft.world.biome.BiomeProvider`: `allowedBiomes`

### Methods
- `public Biome getBiome(BlockPos pos)`
- `public Biome[] getBiomesForGeneration(Biome[] biomes,  int x,  int z,  int width,  int height)`
- `public Biome[] getBiomes(Biome[] oldBiomeList,  int x,  int z,  int width,  int depth)`
- `public Biome[] getBiomes(Biome[] listToReuse,  int x,  int z,  int width,  int length,  boolean cacheFlag)`
- `public BlockPos findBiomePosition(int x,  int z,  int range,  java.util.List<Biome> biomes,  java.util.Random random)`
- `public boolean areBiomesViable(int x,  int z,  int radius,  java.util.List<Biome> allowed)`
- `public boolean isFixedBiome()`
- `public Biome getFixedBiome()`

### Inherited methods
- from `net.minecraft.world.biome.BiomeProvider`: `cleanupCache`, `getBiome`, `getBiomesToSpawnIn`, `getModdedBiomeGenerators`, `getTemperatureAtHeight`

## BiomeRiver

*class* `net.minecraft.world.biome.BiomeRiver`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Inherited fields
- from `net.minecraft.world.biome.Biome`: `AIR`, `BEDROCK`, `BIG_TREE_FEATURE`, `decorator`, `DOUBLE_PLANT_GENERATOR`, `fillerBlock`, `flowers`, `GRASS_COLOR_NOISE`, `GRAVEL`, `ICE`, `modSpawnableLists`, `MUTATION_TO_BASE_ID_MAP`, `RED_SANDSTONE`, `REGISTRY`, `SANDSTONE`, `spawnableCaveCreatureList`, `spawnableCreatureList`, `spawnableMonsterList`, `spawnableWaterCreatureList`, `STONE`, `SWAMP_FEATURE`, `TEMPERATURE_NOISE`, `topBlock`, `TREE_FEATURE`, `WATER`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Inherited methods
- from `net.minecraft.world.biome.Biome`: `addDefaultFlowers`, `addFlower`, `canRain`, `createBiomeDecorator`, `decorate`, `generateBiomeTerrain`, `genTerrainBlocks`, `getBaseHeight`, `getBiome`, `getBiome`, `getBiomeClass`, `getBiomeForId`, `getBiomeName`, `getDefaultTemperature`, `getEnableSnow`, `getFoliageColorAtPos`, `getGrassColorAtPos`, `getHeightVariation`, `getIdForBiome`, `getModdedBiomeDecorator`, `getModdedBiomeFoliageColor`, `getModdedBiomeGrassColor`, `getMutationForBiome`, `getRainfall`, `getRandomTreeFeature`, `getRandomWorldGenForGrass`, `getSkyColorByTemp`, `getSpawnableList`, `getSpawningChance`, `getTempCategory`, `getTemperature`, `getWaterColor`, `getWaterColorMultiplier`, `ignorePlayerSpawnSuitability`, `isHighHumidity`, `isMutation`, `isSnowyBiome`, `pickRandomFlower`, `plantFlower`, `registerBiome`, `registerBiomes`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BiomeSavanna

*class* `net.minecraft.world.biome.BiomeSavanna`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Inherited fields
- from `net.minecraft.world.biome.Biome`: `AIR`, `BEDROCK`, `BIG_TREE_FEATURE`, `decorator`, `DOUBLE_PLANT_GENERATOR`, `fillerBlock`, `flowers`, `GRASS_COLOR_NOISE`, `GRAVEL`, `ICE`, `modSpawnableLists`, `MUTATION_TO_BASE_ID_MAP`, `RED_SANDSTONE`, `REGISTRY`, `SANDSTONE`, `spawnableCaveCreatureList`, `spawnableCreatureList`, `spawnableMonsterList`, `spawnableWaterCreatureList`, `STONE`, `SWAMP_FEATURE`, `TEMPERATURE_NOISE`, `topBlock`, `TREE_FEATURE`, `WATER`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public WorldGenAbstractTree getRandomTreeFeature(java.util.Random rand)`
- `public void decorate(World worldIn,  java.util.Random rand,  BlockPos pos)`
- `public java.lang.Class<? extends Biome> getBiomeClass()`

### Inherited methods
- from `net.minecraft.world.biome.Biome`: `addDefaultFlowers`, `addFlower`, `canRain`, `createBiomeDecorator`, `generateBiomeTerrain`, `genTerrainBlocks`, `getBaseHeight`, `getBiome`, `getBiome`, `getBiomeForId`, `getBiomeName`, `getDefaultTemperature`, `getEnableSnow`, `getFoliageColorAtPos`, `getGrassColorAtPos`, `getHeightVariation`, `getIdForBiome`, `getModdedBiomeDecorator`, `getModdedBiomeFoliageColor`, `getModdedBiomeGrassColor`, `getMutationForBiome`, `getRainfall`, `getRandomWorldGenForGrass`, `getSkyColorByTemp`, `getSpawnableList`, `getSpawningChance`, `getTempCategory`, `getTemperature`, `getWaterColor`, `getWaterColorMultiplier`, `ignorePlayerSpawnSuitability`, `isHighHumidity`, `isMutation`, `isSnowyBiome`, `pickRandomFlower`, `plantFlower`, `registerBiome`, `registerBiomes`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BiomeSavannaMutated

*class* `net.minecraft.world.biome.BiomeSavannaMutated`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Inherited fields
- from `net.minecraft.world.biome.Biome`: `AIR`, `BEDROCK`, `BIG_TREE_FEATURE`, `decorator`, `DOUBLE_PLANT_GENERATOR`, `fillerBlock`, `flowers`, `GRASS_COLOR_NOISE`, `GRAVEL`, `ICE`, `modSpawnableLists`, `MUTATION_TO_BASE_ID_MAP`, `RED_SANDSTONE`, `REGISTRY`, `SANDSTONE`, `spawnableCaveCreatureList`, `spawnableCreatureList`, `spawnableMonsterList`, `spawnableWaterCreatureList`, `STONE`, `SWAMP_FEATURE`, `TEMPERATURE_NOISE`, `topBlock`, `TREE_FEATURE`, `WATER`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public void genTerrainBlocks(World worldIn,  java.util.Random rand,  ChunkPrimer chunkPrimerIn,  int x,  int z,  double noiseVal)`
- `public void decorate(World worldIn,  java.util.Random rand,  BlockPos pos)`

### Inherited methods
- from `net.minecraft.world.biome.BiomeSavanna`: `getBiomeClass`, `getRandomTreeFeature`
- from `net.minecraft.world.biome.Biome`: `addDefaultFlowers`, `addFlower`, `canRain`, `createBiomeDecorator`, `generateBiomeTerrain`, `getBaseHeight`, `getBiome`, `getBiome`, `getBiomeForId`, `getBiomeName`, `getDefaultTemperature`, `getEnableSnow`, `getFoliageColorAtPos`, `getGrassColorAtPos`, `getHeightVariation`, `getIdForBiome`, `getModdedBiomeDecorator`, `getModdedBiomeFoliageColor`, `getModdedBiomeGrassColor`, `getMutationForBiome`, `getRainfall`, `getRandomWorldGenForGrass`, `getSkyColorByTemp`, `getSpawnableList`, `getSpawningChance`, `getTempCategory`, `getTemperature`, `getWaterColor`, `getWaterColorMultiplier`, `ignorePlayerSpawnSuitability`, `isHighHumidity`, `isMutation`, `isSnowyBiome`, `pickRandomFlower`, `plantFlower`, `registerBiome`, `registerBiomes`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BiomeSnow

*class* `net.minecraft.world.biome.BiomeSnow`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Inherited fields
- from `net.minecraft.world.biome.Biome`: `AIR`, `BEDROCK`, `BIG_TREE_FEATURE`, `decorator`, `DOUBLE_PLANT_GENERATOR`, `fillerBlock`, `flowers`, `GRASS_COLOR_NOISE`, `GRAVEL`, `ICE`, `modSpawnableLists`, `MUTATION_TO_BASE_ID_MAP`, `RED_SANDSTONE`, `REGISTRY`, `SANDSTONE`, `spawnableCaveCreatureList`, `spawnableCreatureList`, `spawnableMonsterList`, `spawnableWaterCreatureList`, `STONE`, `SWAMP_FEATURE`, `TEMPERATURE_NOISE`, `topBlock`, `TREE_FEATURE`, `WATER`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public float getSpawningChance()`
- `public void decorate(World worldIn,  java.util.Random rand,  BlockPos pos)`
- `public WorldGenAbstractTree getRandomTreeFeature(java.util.Random rand)`

### Inherited methods
- from `net.minecraft.world.biome.Biome`: `addDefaultFlowers`, `addFlower`, `canRain`, `createBiomeDecorator`, `generateBiomeTerrain`, `genTerrainBlocks`, `getBaseHeight`, `getBiome`, `getBiome`, `getBiomeClass`, `getBiomeForId`, `getBiomeName`, `getDefaultTemperature`, `getEnableSnow`, `getFoliageColorAtPos`, `getGrassColorAtPos`, `getHeightVariation`, `getIdForBiome`, `getModdedBiomeDecorator`, `getModdedBiomeFoliageColor`, `getModdedBiomeGrassColor`, `getMutationForBiome`, `getRainfall`, `getRandomWorldGenForGrass`, `getSkyColorByTemp`, `getSpawnableList`, `getTempCategory`, `getTemperature`, `getWaterColor`, `getWaterColorMultiplier`, `ignorePlayerSpawnSuitability`, `isHighHumidity`, `isMutation`, `isSnowyBiome`, `pickRandomFlower`, `plantFlower`, `registerBiome`, `registerBiomes`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BiomeStoneBeach

*class* `net.minecraft.world.biome.BiomeStoneBeach`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Inherited fields
- from `net.minecraft.world.biome.Biome`: `AIR`, `BEDROCK`, `BIG_TREE_FEATURE`, `decorator`, `DOUBLE_PLANT_GENERATOR`, `fillerBlock`, `flowers`, `GRASS_COLOR_NOISE`, `GRAVEL`, `ICE`, `modSpawnableLists`, `MUTATION_TO_BASE_ID_MAP`, `RED_SANDSTONE`, `REGISTRY`, `SANDSTONE`, `spawnableCaveCreatureList`, `spawnableCreatureList`, `spawnableMonsterList`, `spawnableWaterCreatureList`, `STONE`, `SWAMP_FEATURE`, `TEMPERATURE_NOISE`, `topBlock`, `TREE_FEATURE`, `WATER`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Inherited methods
- from `net.minecraft.world.biome.Biome`: `addDefaultFlowers`, `addFlower`, `canRain`, `createBiomeDecorator`, `decorate`, `generateBiomeTerrain`, `genTerrainBlocks`, `getBaseHeight`, `getBiome`, `getBiome`, `getBiomeClass`, `getBiomeForId`, `getBiomeName`, `getDefaultTemperature`, `getEnableSnow`, `getFoliageColorAtPos`, `getGrassColorAtPos`, `getHeightVariation`, `getIdForBiome`, `getModdedBiomeDecorator`, `getModdedBiomeFoliageColor`, `getModdedBiomeGrassColor`, `getMutationForBiome`, `getRainfall`, `getRandomTreeFeature`, `getRandomWorldGenForGrass`, `getSkyColorByTemp`, `getSpawnableList`, `getSpawningChance`, `getTempCategory`, `getTemperature`, `getWaterColor`, `getWaterColorMultiplier`, `ignorePlayerSpawnSuitability`, `isHighHumidity`, `isMutation`, `isSnowyBiome`, `pickRandomFlower`, `plantFlower`, `registerBiome`, `registerBiomes`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BiomeSwamp

*class* `net.minecraft.world.biome.BiomeSwamp`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Fields
- `protected static final IBlockState WATER_LILY`

### Inherited fields
- from `net.minecraft.world.biome.Biome`: `AIR`, `BEDROCK`, `BIG_TREE_FEATURE`, `decorator`, `DOUBLE_PLANT_GENERATOR`, `fillerBlock`, `flowers`, `GRASS_COLOR_NOISE`, `GRAVEL`, `ICE`, `modSpawnableLists`, `MUTATION_TO_BASE_ID_MAP`, `RED_SANDSTONE`, `REGISTRY`, `SANDSTONE`, `spawnableCaveCreatureList`, `spawnableCreatureList`, `spawnableMonsterList`, `spawnableWaterCreatureList`, `STONE`, `SWAMP_FEATURE`, `TEMPERATURE_NOISE`, `topBlock`, `TREE_FEATURE`, `WATER`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public WorldGenAbstractTree getRandomTreeFeature(java.util.Random rand)`
- `public BlockFlower.EnumFlowerType pickRandomFlower(java.util.Random rand,  BlockPos pos)`
- `public void genTerrainBlocks(World worldIn,  java.util.Random rand,  ChunkPrimer chunkPrimerIn,  int x,  int z,  double noiseVal)`
- `public void decorate(World worldIn,  java.util.Random rand,  BlockPos pos)`
- `public int getGrassColorAtPos(BlockPos pos)`
- `public int getFoliageColorAtPos(BlockPos pos)`
- `public void addDefaultFlowers()`
  Description copied from class: Biome
  Adds the default flowers, as of 1.7, it is 2 yellow, and 1 red. I chose 10 to allow some wiggle room in the numbers.

### Inherited methods
- from `net.minecraft.world.biome.Biome`: `addFlower`, `canRain`, `createBiomeDecorator`, `generateBiomeTerrain`, `getBaseHeight`, `getBiome`, `getBiome`, `getBiomeClass`, `getBiomeForId`, `getBiomeName`, `getDefaultTemperature`, `getEnableSnow`, `getHeightVariation`, `getIdForBiome`, `getModdedBiomeDecorator`, `getModdedBiomeFoliageColor`, `getModdedBiomeGrassColor`, `getMutationForBiome`, `getRainfall`, `getRandomWorldGenForGrass`, `getSkyColorByTemp`, `getSpawnableList`, `getSpawningChance`, `getTempCategory`, `getTemperature`, `getWaterColor`, `getWaterColorMultiplier`, `ignorePlayerSpawnSuitability`, `isHighHumidity`, `isMutation`, `isSnowyBiome`, `plantFlower`, `registerBiome`, `registerBiomes`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BiomeTaiga

*class* `net.minecraft.world.biome.BiomeTaiga`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Inherited fields
- from `net.minecraft.world.biome.Biome`: `AIR`, `BEDROCK`, `BIG_TREE_FEATURE`, `decorator`, `DOUBLE_PLANT_GENERATOR`, `fillerBlock`, `flowers`, `GRASS_COLOR_NOISE`, `GRAVEL`, `ICE`, `modSpawnableLists`, `MUTATION_TO_BASE_ID_MAP`, `RED_SANDSTONE`, `REGISTRY`, `SANDSTONE`, `spawnableCaveCreatureList`, `spawnableCreatureList`, `spawnableMonsterList`, `spawnableWaterCreatureList`, `STONE`, `SWAMP_FEATURE`, `TEMPERATURE_NOISE`, `topBlock`, `TREE_FEATURE`, `WATER`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public WorldGenAbstractTree getRandomTreeFeature(java.util.Random rand)`
- `public WorldGenerator getRandomWorldGenForGrass(java.util.Random rand)`
- `public void decorate(World worldIn,  java.util.Random rand,  BlockPos pos)`
- `public void genTerrainBlocks(World worldIn,  java.util.Random rand,  ChunkPrimer chunkPrimerIn,  int x,  int z,  double noiseVal)`

### Inherited methods
- from `net.minecraft.world.biome.Biome`: `addDefaultFlowers`, `addFlower`, `canRain`, `createBiomeDecorator`, `generateBiomeTerrain`, `getBaseHeight`, `getBiome`, `getBiome`, `getBiomeClass`, `getBiomeForId`, `getBiomeName`, `getDefaultTemperature`, `getEnableSnow`, `getFoliageColorAtPos`, `getGrassColorAtPos`, `getHeightVariation`, `getIdForBiome`, `getModdedBiomeDecorator`, `getModdedBiomeFoliageColor`, `getModdedBiomeGrassColor`, `getMutationForBiome`, `getRainfall`, `getSkyColorByTemp`, `getSpawnableList`, `getSpawningChance`, `getTempCategory`, `getTemperature`, `getWaterColor`, `getWaterColorMultiplier`, `ignorePlayerSpawnSuitability`, `isHighHumidity`, `isMutation`, `isSnowyBiome`, `pickRandomFlower`, `plantFlower`, `registerBiome`, `registerBiomes`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BiomeTaiga.Type

*enum* `net.minecraft.world.biome.BiomeTaiga.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<BiomeTaiga.Type>

Enclosing class: BiomeTaiga

### Fields
- `public static final BiomeTaiga.Type NORMAL`
- `public static final BiomeTaiga.Type MEGA`
- `public static final BiomeTaiga.Type MEGA_SPRUCE`

### Methods
- `public static BiomeTaiga.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (BiomeTaiga.Type c : BiomeTaiga.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static BiomeTaiga.Type valueOf(java.lang.String name)`
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

## BiomeVoid

*class* `net.minecraft.world.biome.BiomeVoid`

All Implemented Interfaces: IForgeRegistryEntry<Biome>

### Inherited fields
- from `net.minecraft.world.biome.Biome`: `AIR`, `BEDROCK`, `BIG_TREE_FEATURE`, `decorator`, `DOUBLE_PLANT_GENERATOR`, `fillerBlock`, `flowers`, `GRASS_COLOR_NOISE`, `GRAVEL`, `ICE`, `modSpawnableLists`, `MUTATION_TO_BASE_ID_MAP`, `RED_SANDSTONE`, `REGISTRY`, `SANDSTONE`, `spawnableCaveCreatureList`, `spawnableCreatureList`, `spawnableMonsterList`, `spawnableWaterCreatureList`, `STONE`, `SWAMP_FEATURE`, `TEMPERATURE_NOISE`, `topBlock`, `TREE_FEATURE`, `WATER`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean ignorePlayerSpawnSuitability()`

### Inherited methods
- from `net.minecraft.world.biome.Biome`: `addDefaultFlowers`, `addFlower`, `canRain`, `createBiomeDecorator`, `decorate`, `generateBiomeTerrain`, `genTerrainBlocks`, `getBaseHeight`, `getBiome`, `getBiome`, `getBiomeClass`, `getBiomeForId`, `getBiomeName`, `getDefaultTemperature`, `getEnableSnow`, `getFoliageColorAtPos`, `getGrassColorAtPos`, `getHeightVariation`, `getIdForBiome`, `getModdedBiomeDecorator`, `getModdedBiomeFoliageColor`, `getModdedBiomeGrassColor`, `getMutationForBiome`, `getRainfall`, `getRandomTreeFeature`, `getRandomWorldGenForGrass`, `getSkyColorByTemp`, `getSpawnableList`, `getSpawningChance`, `getTempCategory`, `getTemperature`, `getWaterColor`, `getWaterColorMultiplier`, `isHighHumidity`, `isMutation`, `isSnowyBiome`, `pickRandomFlower`, `plantFlower`, `registerBiome`, `registerBiomes`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## BiomeVoidDecorator

*class* `net.minecraft.world.biome.BiomeVoidDecorator`

### Inherited fields
- from `net.minecraft.world.biome.BiomeDecorator`: `andesiteGen`, `bigMushroomGen`, `bigMushroomsPerChunk`, `cactiPerChunk`, `cactusGen`, `chunkPos`, `chunkProviderSettings`, `clayGen`, `clayPerChunk`, `coalGen`, `deadBushPerChunk`, `decorating`, `diamondGen`, `dioriteGen`, `dirtGen`, `extraTreeChance`, `flowerGen`, `flowersPerChunk`, `generateFalls`, `goldGen`, `graniteGen`, `grassPerChunk`, `gravelGen`, `gravelOreGen`, `gravelPatchesPerChunk`, `ironGen`, `lapisGen`, `mushroomBrownGen`, `mushroomRedGen`, `mushroomsPerChunk`, `redstoneGen`, `reedGen`, `reedsPerChunk`, `sandGen`, `sandPatchesPerChunk`, `treesPerChunk`, `waterlilyGen`, `waterlilyPerChunk`

### Methods
- `public void decorate(World worldIn,  java.util.Random random,  Biome biome,  BlockPos pos)`

### Inherited methods
- from `net.minecraft.world.biome.BiomeDecorator`: `genDecorations`, `generateOres`, `genStandardOre1`, `genStandardOre2`
