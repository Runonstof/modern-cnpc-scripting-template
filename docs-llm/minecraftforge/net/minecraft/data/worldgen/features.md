# net.minecraft.data.worldgen.features

- [AquaticFeatures](#aquaticfeatures)
- [CaveFeatures](#cavefeatures)
- [EndFeatures](#endfeatures)
- [FeatureUtils](#featureutils)
- [MiscOverworldFeatures](#miscoverworldfeatures)
- [NetherFeatures](#netherfeatures)
- [OreFeatures](#orefeatures)
- [PileFeatures](#pilefeatures)
- [TreeFeatures](#treefeatures)
- [VegetationFeatures](#vegetationfeatures)
## AquaticFeatures

*class* `net.minecraft.data.worldgen.features.AquaticFeatures`

### Fields
- `public static final ResourceKey<ConfiguredFeature<?,?>> SEAGRASS_SHORT`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SEAGRASS_SLIGHTLY_LESS_SHORT`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SEAGRASS_MID`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SEAGRASS_TALL`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SEA_PICKLE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SEAGRASS_SIMPLE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> KELP`
- `public static final ResourceKey<ConfiguredFeature<?,?>> WARM_OCEAN_VEGETATION`

### Methods
- `public static void bootstrap(BootstapContext<ConfiguredFeature<?,?>> p_256171_)`

## CaveFeatures

*class* `net.minecraft.data.worldgen.features.CaveFeatures`

### Fields
- `public static final ResourceKey<ConfiguredFeature<?,?>> MONSTER_ROOM`
- `public static final ResourceKey<ConfiguredFeature<?,?>> FOSSIL_COAL`
- `public static final ResourceKey<ConfiguredFeature<?,?>> FOSSIL_DIAMONDS`
- `public static final ResourceKey<ConfiguredFeature<?,?>> DRIPSTONE_CLUSTER`
- `public static final ResourceKey<ConfiguredFeature<?,?>> LARGE_DRIPSTONE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> POINTED_DRIPSTONE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> UNDERWATER_MAGMA`
- `public static final ResourceKey<ConfiguredFeature<?,?>> GLOW_LICHEN`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ROOTED_AZALEA_TREE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> CAVE_VINE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> CAVE_VINE_IN_MOSS`
- `public static final ResourceKey<ConfiguredFeature<?,?>> MOSS_VEGETATION`
- `public static final ResourceKey<ConfiguredFeature<?,?>> MOSS_PATCH`
- `public static final ResourceKey<ConfiguredFeature<?,?>> MOSS_PATCH_BONEMEAL`
- `public static final ResourceKey<ConfiguredFeature<?,?>> DRIPLEAF`
- `public static final ResourceKey<ConfiguredFeature<?,?>> CLAY_WITH_DRIPLEAVES`
- `public static final ResourceKey<ConfiguredFeature<?,?>> CLAY_POOL_WITH_DRIPLEAVES`
- `public static final ResourceKey<ConfiguredFeature<?,?>> LUSH_CAVES_CLAY`
- `public static final ResourceKey<ConfiguredFeature<?,?>> MOSS_PATCH_CEILING`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SPORE_BLOSSOM`
- `public static final ResourceKey<ConfiguredFeature<?,?>> AMETHYST_GEODE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SCULK_PATCH_DEEP_DARK`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SCULK_PATCH_ANCIENT_CITY`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SCULK_VEIN`

### Methods
- `private static Holder<PlacedFeature> makeDripleaf(Direction p_206468_)`
- `private static Holder<PlacedFeature> makeSmallDripleaf()`
- `public static void bootstrap(BootstapContext<ConfiguredFeature<?,?>> p_256051_)`

## EndFeatures

*class* `net.minecraft.data.worldgen.features.EndFeatures`

### Fields
- `public static final ResourceKey<ConfiguredFeature<?,?>> END_SPIKE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> END_GATEWAY_RETURN`
- `public static final ResourceKey<ConfiguredFeature<?,?>> END_GATEWAY_DELAYED`
- `public static final ResourceKey<ConfiguredFeature<?,?>> CHORUS_PLANT`
- `public static final ResourceKey<ConfiguredFeature<?,?>> END_ISLAND`

### Methods
- `public static void bootstrap(BootstapContext<ConfiguredFeature<?,?>> p_256286_)`

## FeatureUtils

*class* `net.minecraft.data.worldgen.features.FeatureUtils`

### Methods
- `public static void bootstrap(BootstapContext<ConfiguredFeature<?,?>> p_255869_)`
- `private static BlockPredicate simplePatchPredicate(List<Block> p_195009_)`
- `public static RandomPatchConfiguration simpleRandomPatchConfiguration(int p_206471_,  Holder<PlacedFeature> p_206472_)`
- `public static <FC extends FeatureConfiguration, F extends Feature<FC>> RandomPatchConfiguration simplePatchConfiguration(F p_206481_,  FC p_206482_,  List<Block> p_206483_,  int p_206484_)`
- `public static <FC extends FeatureConfiguration, F extends Feature<FC>> RandomPatchConfiguration simplePatchConfiguration(F p_206477_,  FC p_206478_,  List<Block> p_206479_)`
- `public static <FC extends FeatureConfiguration, F extends Feature<FC>> RandomPatchConfiguration simplePatchConfiguration(F p_206474_,  FC p_206475_)`
- `public static ResourceKey<ConfiguredFeature<?,?>> createKey(String p_255643_)`
- `public static void register(BootstapContext<ConfiguredFeature<?,?>> p_256637_,  ResourceKey<ConfiguredFeature<?,?>> p_256555_,  Feature<NoneFeatureConfiguration> p_255921_)`
- `public static <FC extends FeatureConfiguration, F extends Feature<FC>> void register(BootstapContext<ConfiguredFeature<?,?>> p_256315_,  ResourceKey<ConfiguredFeature<?,?>> p_255983_,  F p_255949_,  FC p_256398_)`

## MiscOverworldFeatures

*class* `net.minecraft.data.worldgen.features.MiscOverworldFeatures`

### Fields
- `public static final ResourceKey<ConfiguredFeature<?,?>> ICE_SPIKE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ICE_PATCH`
- `public static final ResourceKey<ConfiguredFeature<?,?>> FOREST_ROCK`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ICEBERG_PACKED`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ICEBERG_BLUE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> BLUE_ICE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> LAKE_LAVA`
- `public static final ResourceKey<ConfiguredFeature<?,?>> DISK_CLAY`
- `public static final ResourceKey<ConfiguredFeature<?,?>> DISK_GRAVEL`
- `public static final ResourceKey<ConfiguredFeature<?,?>> DISK_SAND`
- `public static final ResourceKey<ConfiguredFeature<?,?>> FREEZE_TOP_LAYER`
- `public static final ResourceKey<ConfiguredFeature<?,?>> DISK_GRASS`
- `public static final ResourceKey<ConfiguredFeature<?,?>> BONUS_CHEST`
- `public static final ResourceKey<ConfiguredFeature<?,?>> VOID_START_PLATFORM`
- `public static final ResourceKey<ConfiguredFeature<?,?>> DESERT_WELL`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SPRING_LAVA_OVERWORLD`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SPRING_LAVA_FROZEN`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SPRING_WATER`

### Methods
- `public static void bootstrap(BootstapContext<ConfiguredFeature<?,?>> p_256346_)`

## NetherFeatures

*class* `net.minecraft.data.worldgen.features.NetherFeatures`

### Fields
- `public static final ResourceKey<ConfiguredFeature<?,?>> DELTA`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SMALL_BASALT_COLUMNS`
- `public static final ResourceKey<ConfiguredFeature<?,?>> LARGE_BASALT_COLUMNS`
- `public static final ResourceKey<ConfiguredFeature<?,?>> BASALT_BLOBS`
- `public static final ResourceKey<ConfiguredFeature<?,?>> BLACKSTONE_BLOBS`
- `public static final ResourceKey<ConfiguredFeature<?,?>> GLOWSTONE_EXTRA`
- `public static final ResourceKey<ConfiguredFeature<?,?>> CRIMSON_FOREST_VEGETATION`
- `public static final ResourceKey<ConfiguredFeature<?,?>> CRIMSON_FOREST_VEGETATION_BONEMEAL`
- `public static final ResourceKey<ConfiguredFeature<?,?>> WARPED_FOREST_VEGETION`
- `public static final ResourceKey<ConfiguredFeature<?,?>> WARPED_FOREST_VEGETATION_BONEMEAL`
- `public static final ResourceKey<ConfiguredFeature<?,?>> NETHER_SPROUTS`
- `public static final ResourceKey<ConfiguredFeature<?,?>> NETHER_SPROUTS_BONEMEAL`
- `public static final ResourceKey<ConfiguredFeature<?,?>> TWISTING_VINES`
- `public static final ResourceKey<ConfiguredFeature<?,?>> TWISTING_VINES_BONEMEAL`
- `public static final ResourceKey<ConfiguredFeature<?,?>> WEEPING_VINES`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PATCH_CRIMSON_ROOTS`
- `public static final ResourceKey<ConfiguredFeature<?,?>> BASALT_PILLAR`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SPRING_LAVA_NETHER`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SPRING_NETHER_CLOSED`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SPRING_NETHER_OPEN`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PATCH_FIRE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PATCH_SOUL_FIRE`

### Methods
- `public static void bootstrap(BootstapContext<ConfiguredFeature<?,?>> p_256247_)`

## OreFeatures

*class* `net.minecraft.data.worldgen.features.OreFeatures`

### Fields
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_MAGMA`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_SOUL_SAND`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_NETHER_GOLD`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_QUARTZ`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_GRAVEL_NETHER`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_BLACKSTONE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_DIRT`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_GRAVEL`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_GRANITE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_DIORITE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_ANDESITE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_TUFF`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_COAL`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_COAL_BURIED`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_IRON`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_IRON_SMALL`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_GOLD`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_GOLD_BURIED`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_REDSTONE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_DIAMOND_SMALL`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_DIAMOND_MEDIUM`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_DIAMOND_LARGE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_DIAMOND_BURIED`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_LAPIS`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_LAPIS_BURIED`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_INFESTED`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_EMERALD`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_ANCIENT_DEBRIS_LARGE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_ANCIENT_DEBRIS_SMALL`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_COPPPER_SMALL`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_COPPER_LARGE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ORE_CLAY`

### Methods
- `public static void bootstrap(BootstapContext<ConfiguredFeature<?,?>> p_256319_)`

## PileFeatures

*class* `net.minecraft.data.worldgen.features.PileFeatures`

### Fields
- `public static final ResourceKey<ConfiguredFeature<?,?>> PILE_HAY`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PILE_MELON`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PILE_SNOW`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PILE_ICE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PILE_PUMPKIN`

### Methods
- `public static void bootstrap(BootstapContext<ConfiguredFeature<?,?>> p_256069_)`

## TreeFeatures

*class* `net.minecraft.data.worldgen.features.TreeFeatures`

### Fields
- `public static final ResourceKey<ConfiguredFeature<?,?>> CRIMSON_FUNGUS`
- `public static final ResourceKey<ConfiguredFeature<?,?>> CRIMSON_FUNGUS_PLANTED`
- `public static final ResourceKey<ConfiguredFeature<?,?>> WARPED_FUNGUS`
- `public static final ResourceKey<ConfiguredFeature<?,?>> WARPED_FUNGUS_PLANTED`
- `public static final ResourceKey<ConfiguredFeature<?,?>> HUGE_BROWN_MUSHROOM`
- `public static final ResourceKey<ConfiguredFeature<?,?>> HUGE_RED_MUSHROOM`
- `public static final ResourceKey<ConfiguredFeature<?,?>> OAK`
- `public static final ResourceKey<ConfiguredFeature<?,?>> DARK_OAK`
- `public static final ResourceKey<ConfiguredFeature<?,?>> BIRCH`
- `public static final ResourceKey<ConfiguredFeature<?,?>> ACACIA`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SPRUCE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PINE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> JUNGLE_TREE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> FANCY_OAK`
- `public static final ResourceKey<ConfiguredFeature<?,?>> JUNGLE_TREE_NO_VINE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> MEGA_JUNGLE_TREE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> MEGA_SPRUCE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> MEGA_PINE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SUPER_BIRCH_BEES_0002`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SUPER_BIRCH_BEES`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SWAMP_OAK`
- `public static final ResourceKey<ConfiguredFeature<?,?>> JUNGLE_BUSH`
- `public static final ResourceKey<ConfiguredFeature<?,?>> AZALEA_TREE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> MANGROVE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> TALL_MANGROVE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> CHERRY`
- `public static final ResourceKey<ConfiguredFeature<?,?>> OAK_BEES_0002`
- `public static final ResourceKey<ConfiguredFeature<?,?>> OAK_BEES_002`
- `public static final ResourceKey<ConfiguredFeature<?,?>> OAK_BEES_005`
- `public static final ResourceKey<ConfiguredFeature<?,?>> BIRCH_BEES_0002`
- `public static final ResourceKey<ConfiguredFeature<?,?>> BIRCH_BEES_002`
- `public static final ResourceKey<ConfiguredFeature<?,?>> BIRCH_BEES_005`
- `public static final ResourceKey<ConfiguredFeature<?,?>> FANCY_OAK_BEES_0002`
- `public static final ResourceKey<ConfiguredFeature<?,?>> FANCY_OAK_BEES_002`
- `public static final ResourceKey<ConfiguredFeature<?,?>> FANCY_OAK_BEES_005`
- `public static final ResourceKey<ConfiguredFeature<?,?>> FANCY_OAK_BEES`
- `public static final ResourceKey<ConfiguredFeature<?,?>> CHERRY_BEES_005`

### Methods
- `private static TreeConfiguration.TreeConfigurationBuilder createStraightBlobTree(Block p_195147_,  Block p_195148_,  int p_195149_,  int p_195150_,  int p_195151_,  int p_195152_)`
- `private static TreeConfiguration.TreeConfigurationBuilder createOak()`
- `private static TreeConfiguration.TreeConfigurationBuilder createBirch()`
- `private static TreeConfiguration.TreeConfigurationBuilder createSuperBirch()`
- `private static TreeConfiguration.TreeConfigurationBuilder createJungleTree()`
- `private static TreeConfiguration.TreeConfigurationBuilder createFancyOak()`
- `private static TreeConfiguration.TreeConfigurationBuilder cherry()`
- `public static void bootstrap(BootstapContext<ConfiguredFeature<?,?>> p_256317_)`

## VegetationFeatures

*class* `net.minecraft.data.worldgen.features.VegetationFeatures`

### Fields
- `public static final ResourceKey<ConfiguredFeature<?,?>> BAMBOO_NO_PODZOL`
- `public static final ResourceKey<ConfiguredFeature<?,?>> BAMBOO_SOME_PODZOL`
- `public static final ResourceKey<ConfiguredFeature<?,?>> VINES`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PATCH_BROWN_MUSHROOM`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PATCH_RED_MUSHROOM`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PATCH_SUNFLOWER`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PATCH_PUMPKIN`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PATCH_BERRY_BUSH`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PATCH_TAIGA_GRASS`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PATCH_GRASS`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PATCH_GRASS_JUNGLE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> SINGLE_PIECE_OF_GRASS`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PATCH_DEAD_BUSH`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PATCH_MELON`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PATCH_WATERLILY`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PATCH_TALL_GRASS`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PATCH_LARGE_FERN`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PATCH_CACTUS`
- `public static final ResourceKey<ConfiguredFeature<?,?>> PATCH_SUGAR_CANE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> FLOWER_DEFAULT`
- `public static final ResourceKey<ConfiguredFeature<?,?>> FLOWER_FLOWER_FOREST`
- `public static final ResourceKey<ConfiguredFeature<?,?>> FLOWER_SWAMP`
- `public static final ResourceKey<ConfiguredFeature<?,?>> FLOWER_PLAIN`
- `public static final ResourceKey<ConfiguredFeature<?,?>> FLOWER_MEADOW`
- `public static final ResourceKey<ConfiguredFeature<?,?>> FLOWER_CHERRY`
- `public static final ResourceKey<ConfiguredFeature<?,?>> FOREST_FLOWERS`
- `public static final ResourceKey<ConfiguredFeature<?,?>> DARK_FOREST_VEGETATION`
- `public static final ResourceKey<ConfiguredFeature<?,?>> TREES_FLOWER_FOREST`
- `public static final ResourceKey<ConfiguredFeature<?,?>> MEADOW_TREES`
- `public static final ResourceKey<ConfiguredFeature<?,?>> TREES_TAIGA`
- `public static final ResourceKey<ConfiguredFeature<?,?>> TREES_GROVE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> TREES_SAVANNA`
- `public static final ResourceKey<ConfiguredFeature<?,?>> BIRCH_TALL`
- `public static final ResourceKey<ConfiguredFeature<?,?>> TREES_WINDSWEPT_HILLS`
- `public static final ResourceKey<ConfiguredFeature<?,?>> TREES_WATER`
- `public static final ResourceKey<ConfiguredFeature<?,?>> TREES_BIRCH_AND_OAK`
- `public static final ResourceKey<ConfiguredFeature<?,?>> TREES_PLAINS`
- `public static final ResourceKey<ConfiguredFeature<?,?>> TREES_SPARSE_JUNGLE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> TREES_OLD_GROWTH_SPRUCE_TAIGA`
- `public static final ResourceKey<ConfiguredFeature<?,?>> TREES_OLD_GROWTH_PINE_TAIGA`
- `public static final ResourceKey<ConfiguredFeature<?,?>> TREES_JUNGLE`
- `public static final ResourceKey<ConfiguredFeature<?,?>> BAMBOO_VEGETATION`
- `public static final ResourceKey<ConfiguredFeature<?,?>> MUSHROOM_ISLAND_VEGETATION`
- `public static final ResourceKey<ConfiguredFeature<?,?>> MANGROVE_VEGETATION`

### Methods
- `private static RandomPatchConfiguration grassPatch(BlockStateProvider p_195203_,  int p_195204_)`
- `public static void bootstrap(BootstapContext<ConfiguredFeature<?,?>> p_256132_)`
