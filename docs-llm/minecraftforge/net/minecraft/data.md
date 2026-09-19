# net.minecraft.data

- [BlockFamilies](#blockfamilies)
- [BlockFamily](#blockfamily)
- [BlockFamily.Builder](#blockfamily.builder)
- [CachedOutput](#cachedoutput)
- [Class BlockFamily.Variant](#class-blockfamily.variant)
- [Class PackOutput.Target](#class-packoutput.target)
- [DataGenerator](#datagenerator)
- [DataGenerator.PackGenerator](#datagenerator.packgenerator)
- [DataProvider](#dataprovider)
- [DataProvider.Factory](#dataprovider.factory)
- [HashCache](#hashcache)
- [HashCache.CacheUpdater](#hashcache.cacheupdater)
- [HashCache.ProviderCache](#hashcache.providercache)
- [HashCache.ProviderCacheBuilder](#hashcache.providercachebuilder)
- [HashCache.UpdateFunction](#hashcache.updatefunction)
- [HashCache.UpdateResult](#hashcache.updateresult)
- [Main](#main)
- [PackOutput](#packoutput)
- [PackOutput.PathProvider](#packoutput.pathprovider)
## BlockFamilies

*class* `net.minecraft.data.BlockFamilies`

### Fields
- `private static final Map<Block,BlockFamily> MAP`
- `private static final String RECIPE_GROUP_PREFIX_WOODEN` (= "wooden")
- `private static final String RECIPE_UNLOCKED_BY_HAS_PLANKS` (= "has_planks")
- `public static final BlockFamily ACACIA_PLANKS`
- `public static final BlockFamily CHERRY_PLANKS`
- `public static final BlockFamily BIRCH_PLANKS`
- `public static final BlockFamily CRIMSON_PLANKS`
- `public static final BlockFamily JUNGLE_PLANKS`
- `public static final BlockFamily OAK_PLANKS`
- `public static final BlockFamily DARK_OAK_PLANKS`
- `public static final BlockFamily SPRUCE_PLANKS`
- `public static final BlockFamily WARPED_PLANKS`
- `public static final BlockFamily MANGROVE_PLANKS`
- `public static final BlockFamily BAMBOO_PLANKS`
- `public static final BlockFamily BAMBOO_MOSAIC`
- `public static final BlockFamily MUD_BRICKS`
- `public static final BlockFamily ANDESITE`
- `public static final BlockFamily POLISHED_ANDESITE`
- `public static final BlockFamily BLACKSTONE`
- `public static final BlockFamily POLISHED_BLACKSTONE`
- `public static final BlockFamily POLISHED_BLACKSTONE_BRICKS`
- `public static final BlockFamily BRICKS`
- `public static final BlockFamily END_STONE_BRICKS`
- `public static final BlockFamily MOSSY_STONE_BRICKS`
- `public static final BlockFamily COPPER_BLOCK`
- `public static final BlockFamily CUT_COPPER`
- `public static final BlockFamily WAXED_COPPER_BLOCK`
- `public static final BlockFamily WAXED_CUT_COPPER`
- `public static final BlockFamily EXPOSED_COPPER`
- `public static final BlockFamily EXPOSED_CUT_COPPER`
- `public static final BlockFamily WAXED_EXPOSED_COPPER`
- `public static final BlockFamily WAXED_EXPOSED_CUT_COPPER`
- `public static final BlockFamily WEATHERED_COPPER`
- `public static final BlockFamily WEATHERED_CUT_COPPER`
- `public static final BlockFamily WAXED_WEATHERED_COPPER`
- `public static final BlockFamily WAXED_WEATHERED_CUT_COPPER`
- `public static final BlockFamily OXIDIZED_COPPER`
- `public static final BlockFamily OXIDIZED_CUT_COPPER`
- `public static final BlockFamily WAXED_OXIDIZED_COPPER`
- `public static final BlockFamily WAXED_OXIDIZED_CUT_COPPER`
- `public static final BlockFamily COBBLESTONE`
- `public static final BlockFamily MOSSY_COBBLESTONE`
- `public static final BlockFamily DIORITE`
- `public static final BlockFamily POLISHED_DIORITE`
- `public static final BlockFamily GRANITE`
- `public static final BlockFamily POLISHED_GRANITE`
- `public static final BlockFamily NETHER_BRICKS`
- `public static final BlockFamily RED_NETHER_BRICKS`
- `public static final BlockFamily PRISMARINE`
- `public static final BlockFamily PURPUR`
- `public static final BlockFamily PRISMARINE_BRICKS`
- `public static final BlockFamily DARK_PRISMARINE`
- `public static final BlockFamily QUARTZ`
- `public static final BlockFamily SMOOTH_QUARTZ`
- `public static final BlockFamily SANDSTONE`
- `public static final BlockFamily CUT_SANDSTONE`
- `public static final BlockFamily SMOOTH_SANDSTONE`
- `public static final BlockFamily RED_SANDSTONE`
- `public static final BlockFamily CUT_RED_SANDSTONE`
- `public static final BlockFamily SMOOTH_RED_SANDSTONE`
- `public static final BlockFamily STONE`
- `public static final BlockFamily STONE_BRICK`
- `public static final BlockFamily DEEPSLATE`
- `public static final BlockFamily COBBLED_DEEPSLATE`
- `public static final BlockFamily POLISHED_DEEPSLATE`
- `public static final BlockFamily DEEPSLATE_BRICKS`
- `public static final BlockFamily DEEPSLATE_TILES`

### Methods
- `private static BlockFamily.Builder familyBuilder(Block p_175936_)`
- `public static Stream<BlockFamily> getAllFamilies()`

## BlockFamily

*class* `net.minecraft.data.BlockFamily`

### Fields
- `private final Block baseBlock`
- `final Map<BlockFamily.Variant,Block> variants`
- `FeatureFlagSet requiredFeatures`
- `boolean generateModel`
- `boolean generateRecipe`
- `@Nullable String recipeGroupPrefix`
- `@Nullable String recipeUnlockedBy`

### Methods
- `public Block getBaseBlock()`
- `public Map<BlockFamily.Variant,Block> getVariants()`
- `public Block get(BlockFamily.Variant p_175953_)`
- `public boolean shouldGenerateModel()`
- `public boolean shouldGenerateRecipe(FeatureFlagSet p_250218_)`
- `public Optional<String> getRecipeGroupPrefix()`
- `public Optional<String> getRecipeUnlockedBy()`

## BlockFamily.Builder

*class* `net.minecraft.data.BlockFamily.Builder`

Enclosing class: BlockFamily

### Fields
- `private final BlockFamily family`

### Methods
- `public BlockFamily getFamily()`
- `public BlockFamily.Builder button(Block p_175964_)`
- `public BlockFamily.Builder chiseled(Block p_175972_)`
- `public BlockFamily.Builder mosaic(Block p_251947_)`
- `public BlockFamily.Builder cracked(Block p_175977_)`
- `public BlockFamily.Builder cut(Block p_175979_)`
- `public BlockFamily.Builder door(Block p_175981_)`
- `public BlockFamily.Builder customFence(Block p_248790_)`
- `public BlockFamily.Builder fence(Block p_175983_)`
- `public BlockFamily.Builder customFenceGate(Block p_251301_)`
- `public BlockFamily.Builder fenceGate(Block p_175985_)`
- `public BlockFamily.Builder sign(Block p_175966_,  Block p_175967_)`
- `public BlockFamily.Builder slab(Block p_175987_)`
- `public BlockFamily.Builder stairs(Block p_175989_)`
- `public BlockFamily.Builder pressurePlate(Block p_175991_)`
- `public BlockFamily.Builder polished(Block p_175993_)`
- `public BlockFamily.Builder trapdoor(Block p_175995_)`
- `public BlockFamily.Builder wall(Block p_175997_)`
- `public BlockFamily.Builder dontGenerateModel()`
- `public BlockFamily.Builder dontGenerateRecipe()`
- `public BlockFamily.Builder featureLockedBehind(FeatureFlag... p_250956_)`
- `public BlockFamily.Builder recipeGroupPrefix(String p_175969_)`
- `public BlockFamily.Builder recipeUnlockedBy(String p_175974_)`

## CachedOutput

*interface* `net.minecraft.data.CachedOutput`

### Fields
- `static final CachedOutput NO_CACHE`

### Methods
- `void writeIfNeeded(Path p_236022_,  byte[] p_236023_,  com.google.common.hash.HashCode p_236024_)  throws IOException`
  - throws: IOException

## Class BlockFamily.Variant

*enum* `net.minecraft.data.Class BlockFamily.Variant`

Enclosing class: BlockFamily

### Fields
- `private final String recipeGroup`

### Methods
- `public static BlockFamily.Variant[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static BlockFamily.Variant valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getRecipeGroup()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class PackOutput.Target

*enum* `net.minecraft.data.Class PackOutput.Target`

Enclosing class: PackOutput

### Fields
- `final String directory`

### Methods
- `public static PackOutput.Target[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static PackOutput.Target valueOf(String name)`
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

## DataGenerator

*class* `net.minecraft.data.DataGenerator`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Path rootOutputFolder`
- `private final PackOutput vanillaPackOutput`
- `final Set<String> allProviderIds`
- `final Map<String,DataProvider> providersToRun`
- `private final WorldVersion version`
- `private final boolean alwaysGenerate`
- `private final Map<String,DataProvider> providersView`

### Methods
- `public void run()  throws IOException`
  - throws: IOException
- `public DataGenerator.PackGenerator getVanillaPack(boolean p_254422_)`
- `public DataGenerator.PackGenerator getBuiltinDatapack(boolean p_253826_,  String p_254134_)`
- `public Map<String,DataProvider> getProvidersView()`
- `public PackOutput getPackOutput()`
- `public PackOutput getPackOutput(String path)`
- `public <T extends DataProvider> T addProvider(boolean run,  DataProvider.Factory<T> factory)`
- `public <T extends DataProvider> T addProvider(boolean run,  T provider)`

## DataGenerator.PackGenerator

*class* `net.minecraft.data.DataGenerator.PackGenerator`

Enclosing class: DataGenerator

### Fields
- `private final boolean toRun`
- `private final String providerPrefix`
- `private final PackOutput output`

### Methods
- `public <T extends DataProvider> T addProvider(DataProvider.Factory<T> p_254382_)`

## DataProvider

*interface* `net.minecraft.data.DataProvider`

### Fields
- `static final ToIntFunction<String> FIXED_ORDER_FIELDS`
- `static final Comparator<String> KEY_COMPARATOR`
- `static final org.slf4j.Logger LOGGER`

### Methods
- `CompletableFuture<?> run(CachedOutput p_236071_)`
- `String getName()`
- `static <T> CompletableFuture<?> saveStable(CachedOutput p_300299_,  com.mojang.serialization.Codec<T> p_297797_,  T p_300766_,  Path p_299101_)`
- `static CompletableFuture<?> saveStable(CachedOutput p_253653_,  com.google.gson.JsonElement p_254542_,  Path p_254467_)`

## DataProvider.Factory

*interface* `net.minecraft.data.DataProvider.Factory`

Enclosing interface: DataProvider

### Methods
- `T create(PackOutput p_253851_)`

## HashCache

*class* `net.minecraft.data.HashCache`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `private static final String HEADER_MARKER` (= "// ")
- `private final Path rootDir`
- `private final Path cacheDir`
- `private final String versionId`
- `private final Map<String,HashCache.ProviderCache> caches`
- `private final Map<String,HashCache.ProviderCache> originalCaches`
- `private final Set<String> cachesToWrite`
- `private final Set<Path> cachePaths`
- `private final int initialCount`
- `private int writes`

### Methods
- `private Path getProviderCachePath(String p_254395_)`
- `private static HashCache.ProviderCache readCache(Path p_236093_,  Path p_236094_)`
- `public boolean shouldRunInThisVersion(String p_254319_)`
- `public CompletableFuture<HashCache.UpdateResult> generateUpdate(String p_253944_,  HashCache.UpdateFunction p_254321_)`
- `public void applyUpdate(HashCache.UpdateResult p_253725_)`
- `public void purgeStaleAndWrite()  throws IOException`
  - throws: IOException

## HashCache.CacheUpdater

*class* `net.minecraft.data.HashCache.CacheUpdater`

Enclosing class: HashCache

### Fields
- `private final String provider`
- `private final HashCache.ProviderCache oldCache`
- `private final HashCache.ProviderCacheBuilder newCache`
- `private final AtomicInteger writes`
- `private volatile boolean closed`

### Inherited fields
- from `net.minecraft.data.CachedOutput`: `NO_CACHE`

### Methods
- `private boolean shouldWrite(Path p_236120_,  com.google.common.hash.HashCode p_236121_)`
- `public void writeIfNeeded(Path p_236123_,  byte[] p_236124_,  com.google.common.hash.HashCode p_236125_)  throws IOException`
  - throws: IOException
- `public HashCache.UpdateResult close()`

## HashCache.ProviderCache

*record* `net.minecraft.data.HashCache.ProviderCache`

Enclosing class: HashCache

### Fields
- `private final String version`
  The field for the version record component.
- `private final com.google.common.collect.ImmutableMap<Path,com.google.common.hash.HashCode> data`
  The field for the data record component.

### Methods
- `@Nullable public com.google.common.hash.HashCode get(Path p_236135_)`
- `public int count()`
- `public static HashCache.ProviderCache load(Path p_236140_,  Path p_236141_)  throws IOException`
  - throws: IOException
- `public void save(Path p_236143_,  Path p_236144_,  String p_236145_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public String version()`
  Returns the value of the version record component.
  - returns: the value of the version record component
- `public com.google.common.collect.ImmutableMap<Path,com.google.common.hash.HashCode> data()`
  Returns the value of the data record component.
  - returns: the value of the data record component

## HashCache.ProviderCacheBuilder

*record* `net.minecraft.data.HashCache.ProviderCacheBuilder`

Enclosing class: HashCache

### Fields
- `private final String version`
  The field for the version record component.
- `private final ConcurrentMap<Path,com.google.common.hash.HashCode> data`
  The field for the data record component.

### Methods
- `public void put(Path p_254121_,  com.google.common.hash.HashCode p_254288_)`
- `public HashCache.ProviderCache build()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public String version()`
  Returns the value of the version record component.
  - returns: the value of the version record component
- `public ConcurrentMap<Path,com.google.common.hash.HashCode> data()`
  Returns the value of the data record component.
  - returns: the value of the data record component

## HashCache.UpdateFunction

*interface* `net.minecraft.data.HashCache.UpdateFunction`

Enclosing class: HashCache

### Methods
- `CompletableFuture<?> update(CachedOutput p_253936_)`

## HashCache.UpdateResult

*record* `net.minecraft.data.HashCache.UpdateResult`

Enclosing class: HashCache

### Fields
- `private final String providerId`
  The field for the providerId record component.
- `private final HashCache.ProviderCache cache`
  The field for the cache record component.
- `private final int writes`
  The field for the writes record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public String providerId()`
  Returns the value of the providerId record component.
  - returns: the value of the providerId record component
- `public HashCache.ProviderCache cache()`
  Returns the value of the cache record component.
  - returns: the value of the cache record component
- `public int writes()`
  Returns the value of the writes record component.
  - returns: the value of the writes record component

## Main

*class* `net.minecraft.data.Main`

### Methods
- `public static void main(String[] p_129669_)  throws IOException`
  - throws: IOException
- `private static <T extends DataProvider> DataProvider.Factory<T> bindRegistries(BiFunction<PackOutput,CompletableFuture<HolderLookup.Provider>,T> p_256618_,  CompletableFuture<HolderLookup.Provider> p_256515_)`
- `public static DataGenerator createStandardGenerator(Path p_236680_,  Collection<Path> p_236681_,  boolean p_236682_,  boolean p_236683_,  boolean p_236684_,  boolean p_236685_,  boolean p_236686_,  WorldVersion p_236687_,  boolean p_236688_)`

## PackOutput

*class* `net.minecraft.data.PackOutput`

### Fields
- `private final Path outputFolder`

### Methods
- `public Path getOutputFolder()`
- `public Path getOutputFolder(PackOutput.Target p_251669_)`
- `public PackOutput.PathProvider createPathProvider(PackOutput.Target p_249479_,  String p_251050_)`

## PackOutput.PathProvider

*class* `net.minecraft.data.PackOutput.PathProvider`

Enclosing class: PackOutput

### Fields
- `private final Path root`
- `private final String kind`

### Methods
- `public Path file(ResourceLocation p_250940_,  String p_251208_)`
- `public Path json(ResourceLocation p_251634_)`
