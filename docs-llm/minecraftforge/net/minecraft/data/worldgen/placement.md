# net.minecraft.data.worldgen.placement

- [AquaticPlacements](#aquaticplacements)
- [CavePlacements](#caveplacements)
- [EndPlacements](#endplacements)
- [MiscOverworldPlacements](#miscoverworldplacements)
- [NetherPlacements](#netherplacements)
- [OrePlacements](#oreplacements)
- [PlacementUtils](#placementutils)
- [TreePlacements](#treeplacements)
- [VegetationPlacements](#vegetationplacements)
- [VillagePlacements](#villageplacements)
## AquaticPlacements

*class* `net.minecraft.data.worldgen.placement.AquaticPlacements`

### Fields
- `public static final ResourceKey<PlacedFeature> SEAGRASS_WARM`
- `public static final ResourceKey<PlacedFeature> SEAGRASS_NORMAL`
- `public static final ResourceKey<PlacedFeature> SEAGRASS_COLD`
- `public static final ResourceKey<PlacedFeature> SEAGRASS_RIVER`
- `public static final ResourceKey<PlacedFeature> SEAGRASS_SWAMP`
- `public static final ResourceKey<PlacedFeature> SEAGRASS_DEEP_WARM`
- `public static final ResourceKey<PlacedFeature> SEAGRASS_DEEP`
- `public static final ResourceKey<PlacedFeature> SEAGRASS_DEEP_COLD`
- `public static final ResourceKey<PlacedFeature> SEAGRASS_SIMPLE`
- `public static final ResourceKey<PlacedFeature> SEA_PICKLE`
- `public static final ResourceKey<PlacedFeature> KELP_COLD`
- `public static final ResourceKey<PlacedFeature> KELP_WARM`
- `public static final ResourceKey<PlacedFeature> WARM_OCEAN_VEGETATION`

### Methods
- `private static List<PlacementModifier> seagrassPlacement(int p_195234_)`
- `public static void bootstrap(BootstapContext<PlacedFeature> p_256301_)`

## CavePlacements

*class* `net.minecraft.data.worldgen.placement.CavePlacements`

### Fields
- `public static final ResourceKey<PlacedFeature> MONSTER_ROOM`
- `public static final ResourceKey<PlacedFeature> MONSTER_ROOM_DEEP`
- `public static final ResourceKey<PlacedFeature> FOSSIL_UPPER`
- `public static final ResourceKey<PlacedFeature> FOSSIL_LOWER`
- `public static final ResourceKey<PlacedFeature> DRIPSTONE_CLUSTER`
- `public static final ResourceKey<PlacedFeature> LARGE_DRIPSTONE`
- `public static final ResourceKey<PlacedFeature> POINTED_DRIPSTONE`
- `public static final ResourceKey<PlacedFeature> UNDERWATER_MAGMA`
- `public static final ResourceKey<PlacedFeature> GLOW_LICHEN`
- `public static final ResourceKey<PlacedFeature> ROOTED_AZALEA_TREE`
- `public static final ResourceKey<PlacedFeature> CAVE_VINES`
- `public static final ResourceKey<PlacedFeature> LUSH_CAVES_VEGETATION`
- `public static final ResourceKey<PlacedFeature> LUSH_CAVES_CLAY`
- `public static final ResourceKey<PlacedFeature> LUSH_CAVES_CEILING_VEGETATION`
- `public static final ResourceKey<PlacedFeature> SPORE_BLOSSOM`
- `public static final ResourceKey<PlacedFeature> CLASSIC_VINES`
- `public static final ResourceKey<PlacedFeature> AMETHYST_GEODE`
- `public static final ResourceKey<PlacedFeature> SCULK_PATCH_DEEP_DARK`
- `public static final ResourceKey<PlacedFeature> SCULK_PATCH_ANCIENT_CITY`
- `public static final ResourceKey<PlacedFeature> SCULK_VEIN`

### Methods
- `public static void bootstrap(BootstapContext<PlacedFeature> p_256565_)`

## EndPlacements

*class* `net.minecraft.data.worldgen.placement.EndPlacements`

### Fields
- `public static final ResourceKey<PlacedFeature> END_SPIKE`
- `public static final ResourceKey<PlacedFeature> END_GATEWAY_RETURN`
- `public static final ResourceKey<PlacedFeature> CHORUS_PLANT`
- `public static final ResourceKey<PlacedFeature> END_ISLAND_DECORATED`

### Methods
- `public static void bootstrap(BootstapContext<PlacedFeature> p_255845_)`

## MiscOverworldPlacements

*class* `net.minecraft.data.worldgen.placement.MiscOverworldPlacements`

### Fields
- `public static final ResourceKey<PlacedFeature> ICE_SPIKE`
- `public static final ResourceKey<PlacedFeature> ICE_PATCH`
- `public static final ResourceKey<PlacedFeature> FOREST_ROCK`
- `public static final ResourceKey<PlacedFeature> ICEBERG_PACKED`
- `public static final ResourceKey<PlacedFeature> ICEBERG_BLUE`
- `public static final ResourceKey<PlacedFeature> BLUE_ICE`
- `public static final ResourceKey<PlacedFeature> LAKE_LAVA_UNDERGROUND`
- `public static final ResourceKey<PlacedFeature> LAKE_LAVA_SURFACE`
- `public static final ResourceKey<PlacedFeature> DISK_CLAY`
- `public static final ResourceKey<PlacedFeature> DISK_GRAVEL`
- `public static final ResourceKey<PlacedFeature> DISK_SAND`
- `public static final ResourceKey<PlacedFeature> DISK_GRASS`
- `public static final ResourceKey<PlacedFeature> FREEZE_TOP_LAYER`
- `public static final ResourceKey<PlacedFeature> VOID_START_PLATFORM`
- `public static final ResourceKey<PlacedFeature> DESERT_WELL`
- `public static final ResourceKey<PlacedFeature> SPRING_LAVA`
- `public static final ResourceKey<PlacedFeature> SPRING_LAVA_FROZEN`
- `public static final ResourceKey<PlacedFeature> SPRING_WATER`

### Methods
- `public static void bootstrap(BootstapContext<PlacedFeature> p_255762_)`

## NetherPlacements

*class* `net.minecraft.data.worldgen.placement.NetherPlacements`

### Fields
- `public static final ResourceKey<PlacedFeature> DELTA`
- `public static final ResourceKey<PlacedFeature> SMALL_BASALT_COLUMNS`
- `public static final ResourceKey<PlacedFeature> LARGE_BASALT_COLUMNS`
- `public static final ResourceKey<PlacedFeature> BASALT_BLOBS`
- `public static final ResourceKey<PlacedFeature> BLACKSTONE_BLOBS`
- `public static final ResourceKey<PlacedFeature> GLOWSTONE_EXTRA`
- `public static final ResourceKey<PlacedFeature> GLOWSTONE`
- `public static final ResourceKey<PlacedFeature> CRIMSON_FOREST_VEGETATION`
- `public static final ResourceKey<PlacedFeature> WARPED_FOREST_VEGETATION`
- `public static final ResourceKey<PlacedFeature> NETHER_SPROUTS`
- `public static final ResourceKey<PlacedFeature> TWISTING_VINES`
- `public static final ResourceKey<PlacedFeature> WEEPING_VINES`
- `public static final ResourceKey<PlacedFeature> PATCH_CRIMSON_ROOTS`
- `public static final ResourceKey<PlacedFeature> BASALT_PILLAR`
- `public static final ResourceKey<PlacedFeature> SPRING_DELTA`
- `public static final ResourceKey<PlacedFeature> SPRING_CLOSED`
- `public static final ResourceKey<PlacedFeature> SPRING_CLOSED_DOUBLE`
- `public static final ResourceKey<PlacedFeature> SPRING_OPEN`
- `public static final ResourceKey<PlacedFeature> PATCH_SOUL_FIRE`
- `public static final ResourceKey<PlacedFeature> PATCH_FIRE`

### Methods
- `public static void bootstrap(BootstapContext<PlacedFeature> p_256373_)`

## OrePlacements

*class* `net.minecraft.data.worldgen.placement.OrePlacements`

### Fields
- `public static final ResourceKey<PlacedFeature> ORE_MAGMA`
- `public static final ResourceKey<PlacedFeature> ORE_SOUL_SAND`
- `public static final ResourceKey<PlacedFeature> ORE_GOLD_DELTAS`
- `public static final ResourceKey<PlacedFeature> ORE_QUARTZ_DELTAS`
- `public static final ResourceKey<PlacedFeature> ORE_GOLD_NETHER`
- `public static final ResourceKey<PlacedFeature> ORE_QUARTZ_NETHER`
- `public static final ResourceKey<PlacedFeature> ORE_GRAVEL_NETHER`
- `public static final ResourceKey<PlacedFeature> ORE_BLACKSTONE`
- `public static final ResourceKey<PlacedFeature> ORE_DIRT`
- `public static final ResourceKey<PlacedFeature> ORE_GRAVEL`
- `public static final ResourceKey<PlacedFeature> ORE_GRANITE_UPPER`
- `public static final ResourceKey<PlacedFeature> ORE_GRANITE_LOWER`
- `public static final ResourceKey<PlacedFeature> ORE_DIORITE_UPPER`
- `public static final ResourceKey<PlacedFeature> ORE_DIORITE_LOWER`
- `public static final ResourceKey<PlacedFeature> ORE_ANDESITE_UPPER`
- `public static final ResourceKey<PlacedFeature> ORE_ANDESITE_LOWER`
- `public static final ResourceKey<PlacedFeature> ORE_TUFF`
- `public static final ResourceKey<PlacedFeature> ORE_COAL_UPPER`
- `public static final ResourceKey<PlacedFeature> ORE_COAL_LOWER`
- `public static final ResourceKey<PlacedFeature> ORE_IRON_UPPER`
- `public static final ResourceKey<PlacedFeature> ORE_IRON_MIDDLE`
- `public static final ResourceKey<PlacedFeature> ORE_IRON_SMALL`
- `public static final ResourceKey<PlacedFeature> ORE_GOLD_EXTRA`
- `public static final ResourceKey<PlacedFeature> ORE_GOLD`
- `public static final ResourceKey<PlacedFeature> ORE_GOLD_LOWER`
- `public static final ResourceKey<PlacedFeature> ORE_REDSTONE`
- `public static final ResourceKey<PlacedFeature> ORE_REDSTONE_LOWER`
- `public static final ResourceKey<PlacedFeature> ORE_DIAMOND`
- `public static final ResourceKey<PlacedFeature> ORE_DIAMOND_MEDIUM`
- `public static final ResourceKey<PlacedFeature> ORE_DIAMOND_LARGE`
- `public static final ResourceKey<PlacedFeature> ORE_DIAMOND_BURIED`
- `public static final ResourceKey<PlacedFeature> ORE_LAPIS`
- `public static final ResourceKey<PlacedFeature> ORE_LAPIS_BURIED`
- `public static final ResourceKey<PlacedFeature> ORE_INFESTED`
- `public static final ResourceKey<PlacedFeature> ORE_EMERALD`
- `public static final ResourceKey<PlacedFeature> ORE_ANCIENT_DEBRIS_LARGE`
- `public static final ResourceKey<PlacedFeature> ORE_ANCIENT_DEBRIS_SMALL`
- `public static final ResourceKey<PlacedFeature> ORE_COPPER`
- `public static final ResourceKey<PlacedFeature> ORE_COPPER_LARGE`
- `public static final ResourceKey<PlacedFeature> ORE_CLAY`

### Methods
- `private static List<PlacementModifier> orePlacement(PlacementModifier p_195347_,  PlacementModifier p_195348_)`
- `private static List<PlacementModifier> commonOrePlacement(int p_195344_,  PlacementModifier p_195345_)`
- `private static List<PlacementModifier> rareOrePlacement(int p_195350_,  PlacementModifier p_195351_)`
- `public static void bootstrap(BootstapContext<PlacedFeature> p_256238_)`

## PlacementUtils

*class* `net.minecraft.data.worldgen.placement.PlacementUtils`

### Fields
- `public static final PlacementModifier HEIGHTMAP`
- `public static final PlacementModifier HEIGHTMAP_TOP_SOLID`
- `public static final PlacementModifier HEIGHTMAP_WORLD_SURFACE`
- `public static final PlacementModifier HEIGHTMAP_OCEAN_FLOOR`
- `public static final PlacementModifier FULL_RANGE`
- `public static final PlacementModifier RANGE_10_10`
- `public static final PlacementModifier RANGE_8_8`
- `public static final PlacementModifier RANGE_4_4`
- `public static final PlacementModifier RANGE_BOTTOM_TO_MAX_TERRAIN_HEIGHT`

### Methods
- `public static void bootstrap(BootstapContext<PlacedFeature> p_255779_)`
- `public static ResourceKey<PlacedFeature> createKey(String p_256293_)`
- `public static void register(BootstapContext<PlacedFeature> p_255872_,  ResourceKey<PlacedFeature> p_255820_,  Holder<ConfiguredFeature<?,?>> p_255813_,  List<PlacementModifier> p_256042_)`
- `public static void register(BootstapContext<PlacedFeature> p_256241_,  ResourceKey<PlacedFeature> p_256614_,  Holder<ConfiguredFeature<?,?>> p_255855_,  PlacementModifier... p_256413_)`
- `public static PlacementModifier countExtra(int p_195365_,  float p_195366_,  int p_195367_)`
- `public static PlacementFilter isEmpty()`
- `public static BlockPredicateFilter filteredByBlockSurvival(Block p_206494_)`
- `public static Holder<PlacedFeature> inlinePlaced(Holder<ConfiguredFeature<?,?>> p_206507_,  PlacementModifier... p_206508_)`
- `public static <FC extends FeatureConfiguration, F extends Feature<FC>> Holder<PlacedFeature> inlinePlaced(F p_206503_,  FC p_206504_,  PlacementModifier... p_206505_)`
- `public static <FC extends FeatureConfiguration, F extends Feature<FC>> Holder<PlacedFeature> onlyWhenEmpty(F p_206496_,  FC p_206497_)`
- `public static <FC extends FeatureConfiguration, F extends Feature<FC>> Holder<PlacedFeature> filtered(F p_206499_,  FC p_206500_,  BlockPredicate p_206501_)`

## TreePlacements

*class* `net.minecraft.data.worldgen.placement.TreePlacements`

### Fields
- `public static final ResourceKey<PlacedFeature> CRIMSON_FUNGI`
- `public static final ResourceKey<PlacedFeature> WARPED_FUNGI`
- `public static final ResourceKey<PlacedFeature> OAK_CHECKED`
- `public static final ResourceKey<PlacedFeature> DARK_OAK_CHECKED`
- `public static final ResourceKey<PlacedFeature> BIRCH_CHECKED`
- `public static final ResourceKey<PlacedFeature> ACACIA_CHECKED`
- `public static final ResourceKey<PlacedFeature> SPRUCE_CHECKED`
- `public static final ResourceKey<PlacedFeature> MANGROVE_CHECKED`
- `public static final ResourceKey<PlacedFeature> CHERRY_CHECKED`
- `public static final ResourceKey<PlacedFeature> PINE_ON_SNOW`
- `public static final ResourceKey<PlacedFeature> SPRUCE_ON_SNOW`
- `public static final ResourceKey<PlacedFeature> PINE_CHECKED`
- `public static final ResourceKey<PlacedFeature> JUNGLE_TREE_CHECKED`
- `public static final ResourceKey<PlacedFeature> FANCY_OAK_CHECKED`
- `public static final ResourceKey<PlacedFeature> MEGA_JUNGLE_TREE_CHECKED`
- `public static final ResourceKey<PlacedFeature> MEGA_SPRUCE_CHECKED`
- `public static final ResourceKey<PlacedFeature> MEGA_PINE_CHECKED`
- `public static final ResourceKey<PlacedFeature> TALL_MANGROVE_CHECKED`
- `public static final ResourceKey<PlacedFeature> JUNGLE_BUSH`
- `public static final ResourceKey<PlacedFeature> SUPER_BIRCH_BEES_0002`
- `public static final ResourceKey<PlacedFeature> SUPER_BIRCH_BEES`
- `public static final ResourceKey<PlacedFeature> OAK_BEES_0002`
- `public static final ResourceKey<PlacedFeature> OAK_BEES_002`
- `public static final ResourceKey<PlacedFeature> BIRCH_BEES_0002_PLACED`
- `public static final ResourceKey<PlacedFeature> BIRCH_BEES_002`
- `public static final ResourceKey<PlacedFeature> FANCY_OAK_BEES_0002`
- `public static final ResourceKey<PlacedFeature> FANCY_OAK_BEES_002`
- `public static final ResourceKey<PlacedFeature> FANCY_OAK_BEES`
- `public static final ResourceKey<PlacedFeature> CHERRY_BEES_005`

### Methods
- `public static void bootstrap(BootstapContext<PlacedFeature> p_255688_)`

## VegetationPlacements

*class* `net.minecraft.data.worldgen.placement.VegetationPlacements`

### Fields
- `public static final ResourceKey<PlacedFeature> BAMBOO_LIGHT`
- `public static final ResourceKey<PlacedFeature> BAMBOO`
- `public static final ResourceKey<PlacedFeature> VINES`
- `public static final ResourceKey<PlacedFeature> PATCH_SUNFLOWER`
- `public static final ResourceKey<PlacedFeature> PATCH_PUMPKIN`
- `public static final ResourceKey<PlacedFeature> PATCH_GRASS_PLAIN`
- `public static final ResourceKey<PlacedFeature> PATCH_GRASS_FOREST`
- `public static final ResourceKey<PlacedFeature> PATCH_GRASS_BADLANDS`
- `public static final ResourceKey<PlacedFeature> PATCH_GRASS_SAVANNA`
- `public static final ResourceKey<PlacedFeature> PATCH_GRASS_NORMAL`
- `public static final ResourceKey<PlacedFeature> PATCH_GRASS_TAIGA_2`
- `public static final ResourceKey<PlacedFeature> PATCH_GRASS_TAIGA`
- `public static final ResourceKey<PlacedFeature> PATCH_GRASS_JUNGLE`
- `public static final ResourceKey<PlacedFeature> GRASS_BONEMEAL`
- `public static final ResourceKey<PlacedFeature> PATCH_DEAD_BUSH_2`
- `public static final ResourceKey<PlacedFeature> PATCH_DEAD_BUSH`
- `public static final ResourceKey<PlacedFeature> PATCH_DEAD_BUSH_BADLANDS`
- `public static final ResourceKey<PlacedFeature> PATCH_MELON`
- `public static final ResourceKey<PlacedFeature> PATCH_MELON_SPARSE`
- `public static final ResourceKey<PlacedFeature> PATCH_BERRY_COMMON`
- `public static final ResourceKey<PlacedFeature> PATCH_BERRY_RARE`
- `public static final ResourceKey<PlacedFeature> PATCH_WATERLILY`
- `public static final ResourceKey<PlacedFeature> PATCH_TALL_GRASS_2`
- `public static final ResourceKey<PlacedFeature> PATCH_TALL_GRASS`
- `public static final ResourceKey<PlacedFeature> PATCH_LARGE_FERN`
- `public static final ResourceKey<PlacedFeature> PATCH_CACTUS_DESERT`
- `public static final ResourceKey<PlacedFeature> PATCH_CACTUS_DECORATED`
- `public static final ResourceKey<PlacedFeature> PATCH_SUGAR_CANE_SWAMP`
- `public static final ResourceKey<PlacedFeature> PATCH_SUGAR_CANE_DESERT`
- `public static final ResourceKey<PlacedFeature> PATCH_SUGAR_CANE_BADLANDS`
- `public static final ResourceKey<PlacedFeature> PATCH_SUGAR_CANE`
- `public static final ResourceKey<PlacedFeature> BROWN_MUSHROOM_NETHER`
- `public static final ResourceKey<PlacedFeature> RED_MUSHROOM_NETHER`
- `public static final ResourceKey<PlacedFeature> BROWN_MUSHROOM_NORMAL`
- `public static final ResourceKey<PlacedFeature> RED_MUSHROOM_NORMAL`
- `public static final ResourceKey<PlacedFeature> BROWN_MUSHROOM_TAIGA`
- `public static final ResourceKey<PlacedFeature> RED_MUSHROOM_TAIGA`
- `public static final ResourceKey<PlacedFeature> BROWN_MUSHROOM_OLD_GROWTH`
- `public static final ResourceKey<PlacedFeature> RED_MUSHROOM_OLD_GROWTH`
- `public static final ResourceKey<PlacedFeature> BROWN_MUSHROOM_SWAMP`
- `public static final ResourceKey<PlacedFeature> RED_MUSHROOM_SWAMP`
- `public static final ResourceKey<PlacedFeature> FLOWER_WARM`
- `public static final ResourceKey<PlacedFeature> FLOWER_DEFAULT`
- `public static final ResourceKey<PlacedFeature> FLOWER_FLOWER_FOREST`
- `public static final ResourceKey<PlacedFeature> FLOWER_SWAMP`
- `public static final ResourceKey<PlacedFeature> FLOWER_PLAINS`
- `public static final ResourceKey<PlacedFeature> FLOWER_MEADOW`
- `public static final ResourceKey<PlacedFeature> FLOWER_CHERRY`
- `public static final ResourceKey<PlacedFeature> TREES_PLAINS`
- `public static final ResourceKey<PlacedFeature> DARK_FOREST_VEGETATION`
- `public static final ResourceKey<PlacedFeature> FLOWER_FOREST_FLOWERS`
- `public static final ResourceKey<PlacedFeature> FOREST_FLOWERS`
- `public static final ResourceKey<PlacedFeature> TREES_FLOWER_FOREST`
- `public static final ResourceKey<PlacedFeature> TREES_MEADOW`
- `public static final ResourceKey<PlacedFeature> TREES_CHERRY`
- `public static final ResourceKey<PlacedFeature> TREES_TAIGA`
- `public static final ResourceKey<PlacedFeature> TREES_GROVE`
- `public static final ResourceKey<PlacedFeature> TREES_BADLANDS`
- `public static final ResourceKey<PlacedFeature> TREES_SNOWY`
- `public static final ResourceKey<PlacedFeature> TREES_SWAMP`
- `public static final ResourceKey<PlacedFeature> TREES_WINDSWEPT_SAVANNA`
- `public static final ResourceKey<PlacedFeature> TREES_SAVANNA`
- `public static final ResourceKey<PlacedFeature> BIRCH_TALL`
- `public static final ResourceKey<PlacedFeature> TREES_BIRCH`
- `public static final ResourceKey<PlacedFeature> TREES_WINDSWEPT_FOREST`
- `public static final ResourceKey<PlacedFeature> TREES_WINDSWEPT_HILLS`
- `public static final ResourceKey<PlacedFeature> TREES_WATER`
- `public static final ResourceKey<PlacedFeature> TREES_BIRCH_AND_OAK`
- `public static final ResourceKey<PlacedFeature> TREES_SPARSE_JUNGLE`
- `public static final ResourceKey<PlacedFeature> TREES_OLD_GROWTH_SPRUCE_TAIGA`
- `public static final ResourceKey<PlacedFeature> TREES_OLD_GROWTH_PINE_TAIGA`
- `public static final ResourceKey<PlacedFeature> TREES_JUNGLE`
- `public static final ResourceKey<PlacedFeature> BAMBOO_VEGETATION`
- `public static final ResourceKey<PlacedFeature> MUSHROOM_ISLAND_VEGETATION`
- `public static final ResourceKey<PlacedFeature> TREES_MANGROVE`
- `private static final PlacementModifier TREE_THRESHOLD`

### Methods
- `public static List<PlacementModifier> worldSurfaceSquaredWithCount(int p_195475_)`
- `private static List<PlacementModifier> getMushroomPlacement(int p_195477_,  @Nullable  PlacementModifier p_195478_)`
- `private static com.google.common.collect.ImmutableList.Builder<PlacementModifier> treePlacementBase(PlacementModifier p_195485_)`
- `public static List<PlacementModifier> treePlacement(PlacementModifier p_195480_)`
- `public static List<PlacementModifier> treePlacement(PlacementModifier p_195482_,  Block p_195483_)`
- `public static void bootstrap(BootstapContext<PlacedFeature> p_255657_)`

## VillagePlacements

*class* `net.minecraft.data.worldgen.placement.VillagePlacements`

### Fields
- `public static final ResourceKey<PlacedFeature> PILE_HAY_VILLAGE`
- `public static final ResourceKey<PlacedFeature> PILE_MELON_VILLAGE`
- `public static final ResourceKey<PlacedFeature> PILE_SNOW_VILLAGE`
- `public static final ResourceKey<PlacedFeature> PILE_ICE_VILLAGE`
- `public static final ResourceKey<PlacedFeature> PILE_PUMPKIN_VILLAGE`
- `public static final ResourceKey<PlacedFeature> OAK_VILLAGE`
- `public static final ResourceKey<PlacedFeature> ACACIA_VILLAGE`
- `public static final ResourceKey<PlacedFeature> SPRUCE_VILLAGE`
- `public static final ResourceKey<PlacedFeature> PINE_VILLAGE`
- `public static final ResourceKey<PlacedFeature> PATCH_CACTUS_VILLAGE`
- `public static final ResourceKey<PlacedFeature> FLOWER_PLAIN_VILLAGE`
- `public static final ResourceKey<PlacedFeature> PATCH_TAIGA_GRASS_VILLAGE`
- `public static final ResourceKey<PlacedFeature> PATCH_BERRY_BUSH_VILLAGE`

### Methods
- `public static void bootstrap(BootstapContext<PlacedFeature> p_256300_)`
