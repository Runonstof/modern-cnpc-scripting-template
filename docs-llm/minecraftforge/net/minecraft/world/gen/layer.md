# net.minecraft.world.gen.layer

- [GenLayer](#genlayer)
- [GenLayerAddIsland](#genlayeraddisland)
- [GenLayerAddMushroomIsland](#genlayeraddmushroomisland)
- [GenLayerAddSnow](#genlayeraddsnow)
- [GenLayerBiome](#genlayerbiome)
- [GenLayerBiomeEdge](#genlayerbiomeedge)
- [GenLayerDeepOcean](#genlayerdeepocean)
- [GenLayerEdge](#genlayeredge)
- [GenLayerEdge.Mode](#genlayeredge.mode)
- [GenLayerFuzzyZoom](#genlayerfuzzyzoom)
- [GenLayerHills](#genlayerhills)
- [GenLayerIsland](#genlayerisland)
- [GenLayerRareBiome](#genlayerrarebiome)
- [GenLayerRemoveTooMuchOcean](#genlayerremovetoomuchocean)
- [GenLayerRiver](#genlayerriver)
- [GenLayerRiverInit](#genlayerriverinit)
- [GenLayerRiverMix](#genlayerrivermix)
- [GenLayerShore](#genlayershore)
- [GenLayerSmooth](#genlayersmooth)
- [GenLayerVoronoiZoom](#genlayervoronoizoom)
- [GenLayerZoom](#genlayerzoom)
- [IntCache](#intcache)
## GenLayer

*class* `net.minecraft.world.gen.layer.GenLayer`

### Fields
- `protected GenLayer parent`
- `protected long baseSeed`

### Methods
- `public static GenLayer[] initializeAllBiomeGenerators(long seed,  WorldType p_180781_2_,  ChunkGeneratorSettings p_180781_3_)`
- `public void initWorldGenSeed(long seed)`
- `public void initChunkSeed(long p_75903_1_,  long p_75903_3_)`
- `protected int nextInt(int p_75902_1_)`
- `public abstract int[] getInts(int areaX,  int areaY,  int areaWidth,  int areaHeight)`
- `protected static boolean biomesEqualOrMesaPlateau(int biomeIDA,  int biomeIDB)`
- `protected static boolean isBiomeOceanic(int p_151618_0_)`
- `protected long nextLong(long par1)`
- `public static int getModdedBiomeSize(WorldType worldType,  int original)`
- `protected int selectRandom(int... p_151619_1_)`
- `protected int selectModeOrRandom(int p_151617_1_,  int p_151617_2_,  int p_151617_3_,  int p_151617_4_)`

## GenLayerAddIsland

*class* `net.minecraft.world.gen.layer.GenLayerAddIsland`

### Inherited fields
- from `net.minecraft.world.gen.layer.GenLayer`: `baseSeed`, `parent`

### Methods
- `public int[] getInts(int areaX,  int areaY,  int areaWidth,  int areaHeight)`

### Inherited methods
- from `net.minecraft.world.gen.layer.GenLayer`: `biomesEqualOrMesaPlateau`, `getModdedBiomeSize`, `initChunkSeed`, `initializeAllBiomeGenerators`, `initWorldGenSeed`, `isBiomeOceanic`, `nextInt`, `nextLong`, `selectModeOrRandom`, `selectRandom`

## GenLayerAddMushroomIsland

*class* `net.minecraft.world.gen.layer.GenLayerAddMushroomIsland`

### Inherited fields
- from `net.minecraft.world.gen.layer.GenLayer`: `baseSeed`, `parent`

### Methods
- `public int[] getInts(int areaX,  int areaY,  int areaWidth,  int areaHeight)`

### Inherited methods
- from `net.minecraft.world.gen.layer.GenLayer`: `biomesEqualOrMesaPlateau`, `getModdedBiomeSize`, `initChunkSeed`, `initializeAllBiomeGenerators`, `initWorldGenSeed`, `isBiomeOceanic`, `nextInt`, `nextLong`, `selectModeOrRandom`, `selectRandom`

## GenLayerAddSnow

*class* `net.minecraft.world.gen.layer.GenLayerAddSnow`

### Inherited fields
- from `net.minecraft.world.gen.layer.GenLayer`: `baseSeed`, `parent`

### Methods
- `public int[] getInts(int areaX,  int areaY,  int areaWidth,  int areaHeight)`

### Inherited methods
- from `net.minecraft.world.gen.layer.GenLayer`: `biomesEqualOrMesaPlateau`, `getModdedBiomeSize`, `initChunkSeed`, `initializeAllBiomeGenerators`, `initWorldGenSeed`, `isBiomeOceanic`, `nextInt`, `nextLong`, `selectModeOrRandom`, `selectRandom`

## GenLayerBiome

*class* `net.minecraft.world.gen.layer.GenLayerBiome`

### Inherited fields
- from `net.minecraft.world.gen.layer.GenLayer`: `baseSeed`, `parent`

### Methods
- `public int[] getInts(int areaX,  int areaY,  int areaWidth,  int areaHeight)`
- `protected BiomeManager.BiomeEntry getWeightedBiomeEntry(BiomeManager.BiomeType type)`

### Inherited methods
- from `net.minecraft.world.gen.layer.GenLayer`: `biomesEqualOrMesaPlateau`, `getModdedBiomeSize`, `initChunkSeed`, `initializeAllBiomeGenerators`, `initWorldGenSeed`, `isBiomeOceanic`, `nextInt`, `nextLong`, `selectModeOrRandom`, `selectRandom`

## GenLayerBiomeEdge

*class* `net.minecraft.world.gen.layer.GenLayerBiomeEdge`

### Inherited fields
- from `net.minecraft.world.gen.layer.GenLayer`: `baseSeed`, `parent`

### Methods
- `public int[] getInts(int areaX,  int areaY,  int areaWidth,  int areaHeight)`

### Inherited methods
- from `net.minecraft.world.gen.layer.GenLayer`: `biomesEqualOrMesaPlateau`, `getModdedBiomeSize`, `initChunkSeed`, `initializeAllBiomeGenerators`, `initWorldGenSeed`, `isBiomeOceanic`, `nextInt`, `nextLong`, `selectModeOrRandom`, `selectRandom`

## GenLayerDeepOcean

*class* `net.minecraft.world.gen.layer.GenLayerDeepOcean`

### Inherited fields
- from `net.minecraft.world.gen.layer.GenLayer`: `baseSeed`, `parent`

### Methods
- `public int[] getInts(int areaX,  int areaY,  int areaWidth,  int areaHeight)`

### Inherited methods
- from `net.minecraft.world.gen.layer.GenLayer`: `biomesEqualOrMesaPlateau`, `getModdedBiomeSize`, `initChunkSeed`, `initializeAllBiomeGenerators`, `initWorldGenSeed`, `isBiomeOceanic`, `nextInt`, `nextLong`, `selectModeOrRandom`, `selectRandom`

## GenLayerEdge

*class* `net.minecraft.world.gen.layer.GenLayerEdge`

### Inherited fields
- from `net.minecraft.world.gen.layer.GenLayer`: `baseSeed`, `parent`

### Methods
- `public int[] getInts(int areaX,  int areaY,  int areaWidth,  int areaHeight)`

### Inherited methods
- from `net.minecraft.world.gen.layer.GenLayer`: `biomesEqualOrMesaPlateau`, `getModdedBiomeSize`, `initChunkSeed`, `initializeAllBiomeGenerators`, `initWorldGenSeed`, `isBiomeOceanic`, `nextInt`, `nextLong`, `selectModeOrRandom`, `selectRandom`

## GenLayerEdge.Mode

*enum* `net.minecraft.world.gen.layer.GenLayerEdge.Mode`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<GenLayerEdge.Mode>

Enclosing class: GenLayerEdge

### Fields
- `public static final GenLayerEdge.Mode COOL_WARM`
- `public static final GenLayerEdge.Mode HEAT_ICE`
- `public static final GenLayerEdge.Mode SPECIAL`

### Methods
- `public static GenLayerEdge.Mode[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (GenLayerEdge.Mode c : GenLayerEdge.Mode.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static GenLayerEdge.Mode valueOf(java.lang.String name)`
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

## GenLayerFuzzyZoom

*class* `net.minecraft.world.gen.layer.GenLayerFuzzyZoom`

### Inherited fields
- from `net.minecraft.world.gen.layer.GenLayer`: `baseSeed`, `parent`

### Methods
- `protected int selectModeOrRandom(int p_151617_1_,  int p_151617_2_,  int p_151617_3_,  int p_151617_4_)`

### Inherited methods
- from `net.minecraft.world.gen.layer.GenLayerZoom`: `getInts`, `magnify`
- from `net.minecraft.world.gen.layer.GenLayer`: `biomesEqualOrMesaPlateau`, `getModdedBiomeSize`, `initChunkSeed`, `initializeAllBiomeGenerators`, `initWorldGenSeed`, `isBiomeOceanic`, `nextInt`, `nextLong`, `selectRandom`

## GenLayerHills

*class* `net.minecraft.world.gen.layer.GenLayerHills`

### Inherited fields
- from `net.minecraft.world.gen.layer.GenLayer`: `baseSeed`, `parent`

### Methods
- `public int[] getInts(int areaX,  int areaY,  int areaWidth,  int areaHeight)`

### Inherited methods
- from `net.minecraft.world.gen.layer.GenLayer`: `biomesEqualOrMesaPlateau`, `getModdedBiomeSize`, `initChunkSeed`, `initializeAllBiomeGenerators`, `initWorldGenSeed`, `isBiomeOceanic`, `nextInt`, `nextLong`, `selectModeOrRandom`, `selectRandom`

## GenLayerIsland

*class* `net.minecraft.world.gen.layer.GenLayerIsland`

### Inherited fields
- from `net.minecraft.world.gen.layer.GenLayer`: `baseSeed`, `parent`

### Methods
- `public int[] getInts(int areaX,  int areaY,  int areaWidth,  int areaHeight)`

### Inherited methods
- from `net.minecraft.world.gen.layer.GenLayer`: `biomesEqualOrMesaPlateau`, `getModdedBiomeSize`, `initChunkSeed`, `initializeAllBiomeGenerators`, `initWorldGenSeed`, `isBiomeOceanic`, `nextInt`, `nextLong`, `selectModeOrRandom`, `selectRandom`

## GenLayerRareBiome

*class* `net.minecraft.world.gen.layer.GenLayerRareBiome`

### Inherited fields
- from `net.minecraft.world.gen.layer.GenLayer`: `baseSeed`, `parent`

### Methods
- `public int[] getInts(int areaX,  int areaY,  int areaWidth,  int areaHeight)`

### Inherited methods
- from `net.minecraft.world.gen.layer.GenLayer`: `biomesEqualOrMesaPlateau`, `getModdedBiomeSize`, `initChunkSeed`, `initializeAllBiomeGenerators`, `initWorldGenSeed`, `isBiomeOceanic`, `nextInt`, `nextLong`, `selectModeOrRandom`, `selectRandom`

## GenLayerRemoveTooMuchOcean

*class* `net.minecraft.world.gen.layer.GenLayerRemoveTooMuchOcean`

### Inherited fields
- from `net.minecraft.world.gen.layer.GenLayer`: `baseSeed`, `parent`

### Methods
- `public int[] getInts(int areaX,  int areaY,  int areaWidth,  int areaHeight)`

### Inherited methods
- from `net.minecraft.world.gen.layer.GenLayer`: `biomesEqualOrMesaPlateau`, `getModdedBiomeSize`, `initChunkSeed`, `initializeAllBiomeGenerators`, `initWorldGenSeed`, `isBiomeOceanic`, `nextInt`, `nextLong`, `selectModeOrRandom`, `selectRandom`

## GenLayerRiver

*class* `net.minecraft.world.gen.layer.GenLayerRiver`

### Inherited fields
- from `net.minecraft.world.gen.layer.GenLayer`: `baseSeed`, `parent`

### Methods
- `public int[] getInts(int areaX,  int areaY,  int areaWidth,  int areaHeight)`

### Inherited methods
- from `net.minecraft.world.gen.layer.GenLayer`: `biomesEqualOrMesaPlateau`, `getModdedBiomeSize`, `initChunkSeed`, `initializeAllBiomeGenerators`, `initWorldGenSeed`, `isBiomeOceanic`, `nextInt`, `nextLong`, `selectModeOrRandom`, `selectRandom`

## GenLayerRiverInit

*class* `net.minecraft.world.gen.layer.GenLayerRiverInit`

### Inherited fields
- from `net.minecraft.world.gen.layer.GenLayer`: `baseSeed`, `parent`

### Methods
- `public int[] getInts(int areaX,  int areaY,  int areaWidth,  int areaHeight)`

### Inherited methods
- from `net.minecraft.world.gen.layer.GenLayer`: `biomesEqualOrMesaPlateau`, `getModdedBiomeSize`, `initChunkSeed`, `initializeAllBiomeGenerators`, `initWorldGenSeed`, `isBiomeOceanic`, `nextInt`, `nextLong`, `selectModeOrRandom`, `selectRandom`

## GenLayerRiverMix

*class* `net.minecraft.world.gen.layer.GenLayerRiverMix`

### Inherited fields
- from `net.minecraft.world.gen.layer.GenLayer`: `baseSeed`, `parent`

### Methods
- `public void initWorldGenSeed(long seed)`
- `public int[] getInts(int areaX,  int areaY,  int areaWidth,  int areaHeight)`

### Inherited methods
- from `net.minecraft.world.gen.layer.GenLayer`: `biomesEqualOrMesaPlateau`, `getModdedBiomeSize`, `initChunkSeed`, `initializeAllBiomeGenerators`, `isBiomeOceanic`, `nextInt`, `nextLong`, `selectModeOrRandom`, `selectRandom`

## GenLayerShore

*class* `net.minecraft.world.gen.layer.GenLayerShore`

### Inherited fields
- from `net.minecraft.world.gen.layer.GenLayer`: `baseSeed`, `parent`

### Methods
- `public int[] getInts(int areaX,  int areaY,  int areaWidth,  int areaHeight)`

### Inherited methods
- from `net.minecraft.world.gen.layer.GenLayer`: `biomesEqualOrMesaPlateau`, `getModdedBiomeSize`, `initChunkSeed`, `initializeAllBiomeGenerators`, `initWorldGenSeed`, `isBiomeOceanic`, `nextInt`, `nextLong`, `selectModeOrRandom`, `selectRandom`

## GenLayerSmooth

*class* `net.minecraft.world.gen.layer.GenLayerSmooth`

### Inherited fields
- from `net.minecraft.world.gen.layer.GenLayer`: `baseSeed`, `parent`

### Methods
- `public int[] getInts(int areaX,  int areaY,  int areaWidth,  int areaHeight)`

### Inherited methods
- from `net.minecraft.world.gen.layer.GenLayer`: `biomesEqualOrMesaPlateau`, `getModdedBiomeSize`, `initChunkSeed`, `initializeAllBiomeGenerators`, `initWorldGenSeed`, `isBiomeOceanic`, `nextInt`, `nextLong`, `selectModeOrRandom`, `selectRandom`

## GenLayerVoronoiZoom

*class* `net.minecraft.world.gen.layer.GenLayerVoronoiZoom`

### Inherited fields
- from `net.minecraft.world.gen.layer.GenLayer`: `baseSeed`, `parent`

### Methods
- `public int[] getInts(int areaX,  int areaY,  int areaWidth,  int areaHeight)`

### Inherited methods
- from `net.minecraft.world.gen.layer.GenLayer`: `biomesEqualOrMesaPlateau`, `getModdedBiomeSize`, `initChunkSeed`, `initializeAllBiomeGenerators`, `initWorldGenSeed`, `isBiomeOceanic`, `nextInt`, `nextLong`, `selectModeOrRandom`, `selectRandom`

## GenLayerZoom

*class* `net.minecraft.world.gen.layer.GenLayerZoom`

### Inherited fields
- from `net.minecraft.world.gen.layer.GenLayer`: `baseSeed`, `parent`

### Methods
- `public int[] getInts(int areaX,  int areaY,  int areaWidth,  int areaHeight)`
- `public static GenLayer magnify(long p_75915_0_,  GenLayer p_75915_2_,  int p_75915_3_)`

### Inherited methods
- from `net.minecraft.world.gen.layer.GenLayer`: `biomesEqualOrMesaPlateau`, `getModdedBiomeSize`, `initChunkSeed`, `initializeAllBiomeGenerators`, `initWorldGenSeed`, `isBiomeOceanic`, `nextInt`, `nextLong`, `selectModeOrRandom`, `selectRandom`

## IntCache

*class* `net.minecraft.world.gen.layer.IntCache`

### Methods
- `public static int[] getIntCache(int size)`
- `public static void resetIntCache()`
- `public static java.lang.String getCacheSizes()`
