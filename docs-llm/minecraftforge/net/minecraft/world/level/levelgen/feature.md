# net.minecraft.world.level.levelgen.feature

- [AbstractHugeMushroomFeature](#abstracthugemushroomfeature)
- [BambooFeature](#bamboofeature)
- [BasaltColumnsFeature](#basaltcolumnsfeature)
- [BasaltPillarFeature](#basaltpillarfeature)
- [BlockBlobFeature](#blockblobfeature)
- [BlockColumnFeature](#blockcolumnfeature)
- [BlockPileFeature](#blockpilefeature)
- [BlueIceFeature](#blueicefeature)
- [BonusChestFeature](#bonuschestfeature)
- [ChorusPlantFeature](#chorusplantfeature)
- [ConfiguredFeature>](#configuredfeature)
- [CoralClawFeature](#coralclawfeature)
- [CoralFeature](#coralfeature)
- [CoralMushroomFeature](#coralmushroomfeature)
- [CoralTreeFeature](#coraltreefeature)
- [DeltaFeature](#deltafeature)
- [DesertWellFeature](#desertwellfeature)
- [DiskFeature](#diskfeature)
- [DripstoneClusterFeature](#dripstoneclusterfeature)
- [DripstoneUtils](#dripstoneutils)
- [EndGatewayFeature](#endgatewayfeature)
- [EndIslandFeature](#endislandfeature)
- [EndPodiumFeature](#endpodiumfeature)
- [Feature](#feature)
- [FeatureCountTracker](#featurecounttracker)
- [FeatureCountTracker.FeatureData](#featurecounttracker.featuredata)
- [FeatureCountTracker.LevelData](#featurecounttracker.leveldata)
- [FeaturePlaceContext](#featureplacecontext)
- [FillLayerFeature](#filllayerfeature)
- [FossilFeature](#fossilfeature)
- [FossilFeatureConfiguration](#fossilfeatureconfiguration)
- [GeodeFeature](#geodefeature)
- [GlowstoneFeature](#glowstonefeature)
- [HugeBrownMushroomFeature](#hugebrownmushroomfeature)
- [HugeFungusConfiguration](#hugefungusconfiguration)
- [HugeFungusFeature](#hugefungusfeature)
- [HugeRedMushroomFeature](#hugeredmushroomfeature)
- [IcebergFeature](#icebergfeature)
- [IceSpikeFeature](#icespikefeature)
- [KelpFeature](#kelpfeature)
- [LakeFeature](#lakefeature)
- [LakeFeature.Configuration](#lakefeature.configuration)
- [LargeDripstoneFeature](#largedripstonefeature)
- [LargeDripstoneFeature.LargeDripstone](#largedripstonefeature.largedripstone)
- [LargeDripstoneFeature.WindOffsetter](#largedripstonefeature.windoffsetter)
- [MonsterRoomFeature](#monsterroomfeature)
- [MultifaceGrowthFeature](#multifacegrowthfeature)
- [NetherForestVegetationFeature](#netherforestvegetationfeature)
- [NoOpFeature](#noopfeature)
- [OreFeature](#orefeature)
- [PointedDripstoneFeature](#pointeddripstonefeature)
- [RandomBooleanSelectorFeature](#randombooleanselectorfeature)
- [RandomPatchFeature](#randompatchfeature)
- [RandomSelectorFeature](#randomselectorfeature)
- [ReplaceBlobsFeature](#replaceblobsfeature)
- [ReplaceBlockFeature](#replaceblockfeature)
- [RootSystemFeature](#rootsystemfeature)
- [ScatteredOreFeature](#scatteredorefeature)
- [SculkPatchFeature](#sculkpatchfeature)
- [SeagrassFeature](#seagrassfeature)
- [SeaPickleFeature](#seapicklefeature)
- [SimpleBlockFeature](#simpleblockfeature)
- [SimpleRandomSelectorFeature](#simplerandomselectorfeature)
- [SnowAndFreezeFeature](#snowandfreezefeature)
- [SpikeFeature](#spikefeature)
- [SpikeFeature.EndSpike](#spikefeature.endspike)
- [SpikeFeature.SpikeCacheLoader](#spikefeature.spikecacheloader)
- [SpringFeature](#springfeature)
- [TreeFeature](#treefeature)
- [TwistingVinesFeature](#twistingvinesfeature)
- [UnderwaterMagmaFeature](#underwatermagmafeature)
- [VegetationPatchFeature](#vegetationpatchfeature)
- [VinesFeature](#vinesfeature)
- [VoidStartPlatformFeature](#voidstartplatformfeature)
- [WaterloggedVegetationPatchFeature](#waterloggedvegetationpatchfeature)
- [WeepingVinesFeature](#weepingvinesfeature)
- [WeightedPlacedFeature](#weightedplacedfeature)
## AbstractHugeMushroomFeature

*class* `net.minecraft.world.level.levelgen.feature.AbstractHugeMushroomFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `protected void placeTrunk(LevelAccessor p_224930_,  RandomSource p_224931_,  BlockPos p_224932_,  HugeMushroomFeatureConfiguration p_224933_,  int p_224934_,  BlockPos.MutableBlockPos p_224935_)`
- `protected int getTreeHeight(RandomSource p_224922_)`
- `protected boolean isValidPosition(LevelAccessor p_65099_,  BlockPos p_65100_,  int p_65101_,  BlockPos.MutableBlockPos p_65102_,  HugeMushroomFeatureConfiguration p_65103_)`
- `public boolean place(FeaturePlaceContext<HugeMushroomFeatureConfiguration> p_159436_)`
- `protected abstract int getTreeRadiusForHeight(int p_65094_,  int p_65095_,  int p_65096_,  int p_65097_)`
- `protected abstract void makeCap(LevelAccessor p_224923_,  RandomSource p_224924_,  BlockPos p_224925_,  int p_224926_,  BlockPos.MutableBlockPos p_224927_,  HugeMushroomFeatureConfiguration p_224928_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## BambooFeature

*class* `net.minecraft.world.level.levelgen.feature.BambooFeature`

### Fields
- `private static final BlockState BAMBOO_TRUNK`
- `private static final BlockState BAMBOO_FINAL_LARGE`
- `private static final BlockState BAMBOO_TOP_LARGE`
- `private static final BlockState BAMBOO_TOP_SMALL`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<ProbabilityFeatureConfiguration> p_159438_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## BasaltColumnsFeature

*class* `net.minecraft.world.level.levelgen.feature.BasaltColumnsFeature`

### Fields
- `private static final com.google.common.collect.ImmutableList<Block> CANNOT_PLACE_ON`
- `private static final int CLUSTERED_REACH` (= 5)
- `private static final int CLUSTERED_SIZE` (= 50)
- `private static final int UNCLUSTERED_REACH` (= 8)
- `private static final int UNCLUSTERED_SIZE` (= 15)

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<ColumnFeatureConfiguration> p_159444_)`
- `private boolean placeColumn(LevelAccessor p_65168_,  int p_65169_,  BlockPos p_65170_,  int p_65171_,  int p_65172_)`
- `@Nullable private static BlockPos findSurface(LevelAccessor p_65159_,  int p_65160_,  BlockPos.MutableBlockPos p_65161_,  int p_65162_)`
- `private static boolean canPlaceAt(LevelAccessor p_65155_,  int p_65156_,  BlockPos.MutableBlockPos p_65157_)`
- `@Nullable private static BlockPos findAir(LevelAccessor p_65174_,  BlockPos.MutableBlockPos p_65175_,  int p_65176_)`
- `private static boolean isAirOrLavaOcean(LevelAccessor p_65164_,  int p_65165_,  BlockPos p_65166_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## BasaltPillarFeature

*class* `net.minecraft.world.level.levelgen.feature.BasaltPillarFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<NoneFeatureConfiguration> p_159446_)`
- `private void placeBaseHangOff(LevelAccessor p_224937_,  RandomSource p_224938_,  BlockPos p_224939_)`
- `private boolean placeHangOff(LevelAccessor p_224941_,  RandomSource p_224942_,  BlockPos p_224943_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## BlockBlobFeature

*class* `net.minecraft.world.level.levelgen.feature.BlockBlobFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<BlockStateConfiguration> p_159471_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## BlockColumnFeature

*class* `net.minecraft.world.level.levelgen.feature.BlockColumnFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<BlockColumnConfiguration> p_190791_)`
- `private static void truncate(int[] p_190793_,  int p_190794_,  int p_190795_,  boolean p_190796_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## BlockPileFeature

*class* `net.minecraft.world.level.levelgen.feature.BlockPileFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<BlockPileConfiguration> p_159473_)`
- `private boolean mayPlaceOn(LevelAccessor p_224945_,  BlockPos p_224946_,  RandomSource p_224947_)`
- `private void tryPlaceBlock(LevelAccessor p_224949_,  BlockPos p_224950_,  RandomSource p_224951_,  BlockPileConfiguration p_224952_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## BlueIceFeature

*class* `net.minecraft.world.level.levelgen.feature.BlueIceFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<NoneFeatureConfiguration> p_159475_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## BonusChestFeature

*class* `net.minecraft.world.level.levelgen.feature.BonusChestFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<NoneFeatureConfiguration> p_159477_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## ChorusPlantFeature

*class* `net.minecraft.world.level.levelgen.feature.ChorusPlantFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<NoneFeatureConfiguration> p_159521_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## ConfiguredFeature>

*record* `net.minecraft.world.level.levelgen.feature.ConfiguredFeature>`

### Fields
- `private final F extends Feature<FC> feature`
  The field for the feature record component.
- `private final FC extends FeatureConfiguration config`
  The field for the config record component.
- `public static final com.mojang.serialization.Codec<ConfiguredFeature<?,?>> DIRECT_CODEC`
- `public static final com.mojang.serialization.Codec<Holder<ConfiguredFeature<?,?>>> CODEC`
- `public static final com.mojang.serialization.Codec<HolderSet<ConfiguredFeature<?,?>>> LIST_CODEC`

### Methods
- `public boolean place(WorldGenLevel p_224954_,  ChunkGenerator p_224955_,  RandomSource p_224956_,  BlockPos p_224957_)`
- `public Stream<ConfiguredFeature<?,?>> getFeatures()`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public F feature()`
  Returns the value of the feature record component.
  - returns: the value of the feature record component
- `public FC config()`
  Returns the value of the config record component.
  - returns: the value of the config record component

## CoralClawFeature

*class* `net.minecraft.world.level.levelgen.feature.CoralClawFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `protected boolean placeFeature(LevelAccessor p_224959_,  RandomSource p_224960_,  BlockPos p_224961_,  BlockState p_224962_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.CoralFeature`: `place`, `placeCoralBlock`
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## CoralFeature

*class* `net.minecraft.world.level.levelgen.feature.CoralFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<NoneFeatureConfiguration> p_159536_)`
- `protected abstract boolean placeFeature(LevelAccessor p_224966_,  RandomSource p_224967_,  BlockPos p_224968_,  BlockState p_224969_)`
- `protected boolean placeCoralBlock(LevelAccessor p_224974_,  RandomSource p_224975_,  BlockPos p_224976_,  BlockState p_224977_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## CoralMushroomFeature

*class* `net.minecraft.world.level.levelgen.feature.CoralMushroomFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `protected boolean placeFeature(LevelAccessor p_224982_,  RandomSource p_224983_,  BlockPos p_224984_,  BlockState p_224985_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.CoralFeature`: `place`, `placeCoralBlock`
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## CoralTreeFeature

*class* `net.minecraft.world.level.levelgen.feature.CoralTreeFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `protected boolean placeFeature(LevelAccessor p_224987_,  RandomSource p_224988_,  BlockPos p_224989_,  BlockState p_224990_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.CoralFeature`: `place`, `placeCoralBlock`
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## DeltaFeature

*class* `net.minecraft.world.level.levelgen.feature.DeltaFeature`

### Fields
- `private static final com.google.common.collect.ImmutableList<Block> CANNOT_REPLACE`
- `private static final Direction[] DIRECTIONS`
- `private static final double RIM_SPAWN_CHANCE` (= 0.9)

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<DeltaFeatureConfiguration> p_159548_)`
- `private static boolean isClear(LevelAccessor p_65552_,  BlockPos p_65553_,  DeltaFeatureConfiguration p_65554_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## DesertWellFeature

*class* `net.minecraft.world.level.levelgen.feature.DesertWellFeature`

### Fields
- `private static final BlockStatePredicate IS_SAND`
- `private final BlockState sand`
- `private final BlockState sandSlab`
- `private final BlockState sandstone`
- `private final BlockState water`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<NoneFeatureConfiguration> p_159571_)`
- `private static void placeSusSand(WorldGenLevel p_278029_,  BlockPos p_278082_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## DiskFeature

*class* `net.minecraft.world.level.levelgen.feature.DiskFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<DiskConfiguration> p_224994_)`
- `protected boolean placeColumn(DiskConfiguration p_224996_,  WorldGenLevel p_224997_,  RandomSource p_224998_,  int p_224999_,  int p_225000_,  BlockPos.MutableBlockPos p_225001_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## DripstoneClusterFeature

*class* `net.minecraft.world.level.levelgen.feature.DripstoneClusterFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<DripstoneClusterConfiguration> p_159605_)`
- `private void placeColumn(WorldGenLevel p_225016_,  RandomSource p_225017_,  BlockPos p_225018_,  int p_225019_,  int p_225020_,  float p_225021_,  double p_225022_,  int p_225023_,  float p_225024_,  DripstoneClusterConfiguration p_225025_)`
- `private boolean isLava(LevelReader p_159586_,  BlockPos p_159587_)`
- `private int getDripstoneHeight(RandomSource p_225009_,  int p_225010_,  int p_225011_,  float p_225012_,  int p_225013_,  DripstoneClusterConfiguration p_225014_)`
- `private boolean canPlacePool(WorldGenLevel p_159620_,  BlockPos p_159621_)`
- `private boolean canBeAdjacentToWater(LevelAccessor p_159583_,  BlockPos p_159584_)`
- `private void replaceBlocksWithDripstoneBlocks(WorldGenLevel p_159589_,  BlockPos p_159590_,  int p_159591_,  Direction p_159592_)`
- `private double getChanceOfStalagmiteOrStalactite(int p_159577_,  int p_159578_,  int p_159579_,  int p_159580_,  DripstoneClusterConfiguration p_159581_)`
- `private static float randomBetweenBiased(RandomSource p_225003_,  float p_225004_,  float p_225005_,  float p_225006_,  float p_225007_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## DripstoneUtils

*class* `net.minecraft.world.level.levelgen.feature.DripstoneUtils`

### Methods
- `protected static double getDripstoneHeight(double p_159624_,  double p_159625_,  double p_159626_,  double p_159627_)`
- `protected static boolean isCircleMostlyEmbeddedInStone(WorldGenLevel p_159640_,  BlockPos p_159641_,  int p_159642_)`
- `protected static boolean isEmptyOrWater(LevelAccessor p_159629_,  BlockPos p_159630_)`
- `protected static boolean isEmptyOrWaterOrLava(LevelAccessor p_159660_,  BlockPos p_159661_)`
- `protected static void buildBaseToTipColumn(Direction p_159652_,  int p_159653_,  boolean p_159654_,  Consumer<BlockState> p_159655_)`
- `protected static void growPointedDripstone(LevelAccessor p_190848_,  BlockPos p_190849_,  Direction p_190850_,  int p_190851_,  boolean p_190852_)`
- `protected static boolean placeDripstoneBlockIfPossible(LevelAccessor p_190854_,  BlockPos p_190855_)`
- `private static BlockState createPointedDripstone(Direction p_159657_,  DripstoneThickness p_159658_)`
- `public static boolean isDripstoneBaseOrLava(BlockState p_159650_)`
- `public static boolean isDripstoneBase(BlockState p_159663_)`
- `public static boolean isEmptyOrWater(BlockState p_159665_)`
- `public static boolean isNeitherEmptyNorWater(BlockState p_203131_)`
- `public static boolean isEmptyOrWaterOrLava(BlockState p_159667_)`

## EndGatewayFeature

*class* `net.minecraft.world.level.levelgen.feature.EndGatewayFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<EndGatewayConfiguration> p_159715_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## EndIslandFeature

*class* `net.minecraft.world.level.levelgen.feature.EndIslandFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<NoneFeatureConfiguration> p_159717_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## EndPodiumFeature

*class* `net.minecraft.world.level.levelgen.feature.EndPodiumFeature`

### Fields
- `public static final int PODIUM_RADIUS` (= 4)
- `public static final int PODIUM_PILLAR_HEIGHT` (= 4)
- `public static final int RIM_RADIUS` (= 1)
- `public static final float CORNER_ROUNDING` (= 0.5f)
- `private static final BlockPos END_PODIUM_LOCATION`
- `private final boolean active`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public static BlockPos getLocation(BlockPos p_287614_)`
- `public boolean place(FeaturePlaceContext<NoneFeatureConfiguration> p_159723_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## Feature

*class* `net.minecraft.world.level.levelgen.feature.Feature`

### Fields
- `public static final Feature<NoneFeatureConfiguration> NO_OP`
- `public static final Feature<TreeConfiguration> TREE`
- `public static final Feature<RandomPatchConfiguration> FLOWER`
- `public static final Feature<RandomPatchConfiguration> NO_BONEMEAL_FLOWER`
- `public static final Feature<RandomPatchConfiguration> RANDOM_PATCH`
- `public static final Feature<BlockPileConfiguration> BLOCK_PILE`
- `public static final Feature<SpringConfiguration> SPRING`
- `public static final Feature<NoneFeatureConfiguration> CHORUS_PLANT`
- `public static final Feature<ReplaceBlockConfiguration> REPLACE_SINGLE_BLOCK`
- `public static final Feature<NoneFeatureConfiguration> VOID_START_PLATFORM`
- `public static final Feature<NoneFeatureConfiguration> DESERT_WELL`
- `public static final Feature<FossilFeatureConfiguration> FOSSIL`
- `public static final Feature<HugeMushroomFeatureConfiguration> HUGE_RED_MUSHROOM`
- `public static final Feature<HugeMushroomFeatureConfiguration> HUGE_BROWN_MUSHROOM`
- `public static final Feature<NoneFeatureConfiguration> ICE_SPIKE`
- `public static final Feature<NoneFeatureConfiguration> GLOWSTONE_BLOB`
- `public static final Feature<NoneFeatureConfiguration> FREEZE_TOP_LAYER`
- `public static final Feature<NoneFeatureConfiguration> VINES`
- `public static final Feature<BlockColumnConfiguration> BLOCK_COLUMN`
- `public static final Feature<VegetationPatchConfiguration> VEGETATION_PATCH`
- `public static final Feature<VegetationPatchConfiguration> WATERLOGGED_VEGETATION_PATCH`
- `public static final Feature<RootSystemConfiguration> ROOT_SYSTEM`
- `public static final Feature<MultifaceGrowthConfiguration> MULTIFACE_GROWTH`
- `public static final Feature<UnderwaterMagmaConfiguration> UNDERWATER_MAGMA`
- `public static final Feature<NoneFeatureConfiguration> MONSTER_ROOM`
- `public static final Feature<NoneFeatureConfiguration> BLUE_ICE`
- `public static final Feature<BlockStateConfiguration> ICEBERG`
- `public static final Feature<BlockStateConfiguration> FOREST_ROCK`
- `public static final Feature<DiskConfiguration> DISK`
- `public static final Feature<LakeFeature.Configuration> LAKE`
- `public static final Feature<OreConfiguration> ORE`
- `public static final Feature<SpikeConfiguration> END_SPIKE`
- `public static final Feature<NoneFeatureConfiguration> END_ISLAND`
- `public static final Feature<EndGatewayConfiguration> END_GATEWAY`
- `public static final SeagrassFeature SEAGRASS`
- `public static final Feature<NoneFeatureConfiguration> KELP`
- `public static final Feature<NoneFeatureConfiguration> CORAL_TREE`
- `public static final Feature<NoneFeatureConfiguration> CORAL_MUSHROOM`
- `public static final Feature<NoneFeatureConfiguration> CORAL_CLAW`
- `public static final Feature<CountConfiguration> SEA_PICKLE`
- `public static final Feature<SimpleBlockConfiguration> SIMPLE_BLOCK`
- `public static final Feature<ProbabilityFeatureConfiguration> BAMBOO`
- `public static final Feature<HugeFungusConfiguration> HUGE_FUNGUS`
- `public static final Feature<NetherForestVegetationConfig> NETHER_FOREST_VEGETATION`
- `public static final Feature<NoneFeatureConfiguration> WEEPING_VINES`
- `public static final Feature<TwistingVinesConfig> TWISTING_VINES`
- `public static final Feature<ColumnFeatureConfiguration> BASALT_COLUMNS`
- `public static final Feature<DeltaFeatureConfiguration> DELTA_FEATURE`
- `public static final Feature<ReplaceSphereConfiguration> REPLACE_BLOBS`
- `public static final Feature<LayerConfiguration> FILL_LAYER`
- `public static final BonusChestFeature BONUS_CHEST`
- `public static final Feature<NoneFeatureConfiguration> BASALT_PILLAR`
- `public static final Feature<OreConfiguration> SCATTERED_ORE`
- `public static final Feature<RandomFeatureConfiguration> RANDOM_SELECTOR`
- `public static final Feature<SimpleRandomFeatureConfiguration> SIMPLE_RANDOM_SELECTOR`
- `public static final Feature<RandomBooleanFeatureConfiguration> RANDOM_BOOLEAN_SELECTOR`
- `public static final Feature<GeodeConfiguration> GEODE`
- `public static final Feature<DripstoneClusterConfiguration> DRIPSTONE_CLUSTER`
- `public static final Feature<LargeDripstoneConfiguration> LARGE_DRIPSTONE`
- `public static final Feature<PointedDripstoneConfiguration> POINTED_DRIPSTONE`
- `public static final Feature<SculkPatchConfiguration> SCULK_PATCH`
- `private final com.mojang.serialization.Codec<ConfiguredFeature<FC extends FeatureConfiguration,Feature<FC extends FeatureConfiguration>>> configuredCodec`

### Methods
- `private static <C extends FeatureConfiguration, F extends Feature<C>> F register(String p_65808_,  F p_65809_)`
- `public com.mojang.serialization.Codec<ConfiguredFeature<FC,Feature<FC>>> configuredCodec()`
- `protected void setBlock(LevelWriter p_65791_,  BlockPos p_65792_,  BlockState p_65793_)`
- `public static Predicate<BlockState> isReplaceable(TagKey<Block> p_204736_)`
- `protected void safeSetBlock(WorldGenLevel p_159743_,  BlockPos p_159744_,  BlockState p_159745_,  Predicate<BlockState> p_159746_)`
- `public abstract boolean place(FeaturePlaceContext<FC> p_159749_)`
- `public boolean place(FC p_225029_,  WorldGenLevel p_225030_,  ChunkGenerator p_225031_,  RandomSource p_225032_,  BlockPos p_225033_)`
- `protected static boolean isStone(BlockState p_159748_)`
- `public static boolean isDirt(BlockState p_159760_)`
- `public static boolean isGrassOrDirt(LevelSimulatedReader p_65789_,  BlockPos p_65790_)`
- `public static boolean checkNeighbors(Function<BlockPos,BlockState> p_159754_,  BlockPos p_159755_,  Predicate<BlockState> p_159756_)`
- `public static boolean isAdjacentToAir(Function<BlockPos,BlockState> p_159751_,  BlockPos p_159752_)`
- `protected void markAboveForPostProcessing(WorldGenLevel p_159740_,  BlockPos p_159741_)`

## FeatureCountTracker

*class* `net.minecraft.world.level.levelgen.feature.FeatureCountTracker`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final com.google.common.cache.LoadingCache<ServerLevel,FeatureCountTracker.LevelData> data`

### Methods
- `public static void chunkDecorated(ServerLevel p_190882_)`
- `public static void featurePlaced(ServerLevel p_190884_,  ConfiguredFeature<?,?> p_190885_,  Optional<PlacedFeature> p_190886_)`
- `public static void clearCounts()`
- `public static void logCounts()`

## FeatureCountTracker.FeatureData

*record* `net.minecraft.world.level.levelgen.feature.FeatureCountTracker.FeatureData`

Enclosing class: FeatureCountTracker

### Fields
- `private final ConfiguredFeature<?,?> feature`
  The field for the feature record component.
- `private final Optional<PlacedFeature> topFeature`
  The field for the topFeature record component.

### Methods
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
- `public ConfiguredFeature<?,?> feature()`
  Returns the value of the feature record component.
  - returns: the value of the feature record component
- `public Optional<PlacedFeature> topFeature()`
  Returns the value of the topFeature record component.
  - returns: the value of the topFeature record component

## FeatureCountTracker.LevelData

*record* `net.minecraft.world.level.levelgen.feature.FeatureCountTracker.LevelData`

Enclosing class: FeatureCountTracker

### Fields
- `private final it.unimi.dsi.fastutil.objects.Object2IntMap<FeatureCountTracker.FeatureData> featureData`
  The field for the featureData record component.
- `private final org.apache.commons.lang3.mutable.MutableInt chunksWithFeatures`
  The field for the chunksWithFeatures record component.

### Methods
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
- `public it.unimi.dsi.fastutil.objects.Object2IntMap<FeatureCountTracker.FeatureData> featureData()`
  Returns the value of the featureData record component.
  - returns: the value of the featureData record component
- `public org.apache.commons.lang3.mutable.MutableInt chunksWithFeatures()`
  Returns the value of the chunksWithFeatures record component.
  - returns: the value of the chunksWithFeatures record component

## FeaturePlaceContext

*class* `net.minecraft.world.level.levelgen.feature.FeaturePlaceContext`

### Fields
- `private final Optional<ConfiguredFeature<?,?>> topFeature`
- `private final WorldGenLevel level`
- `private final ChunkGenerator chunkGenerator`
- `private final RandomSource random`
- `private final BlockPos origin`
- `private final FC extends FeatureConfiguration config`

### Methods
- `public Optional<ConfiguredFeature<?,?>> topFeature()`
- `public WorldGenLevel level()`
- `public ChunkGenerator chunkGenerator()`
- `public RandomSource random()`
- `public BlockPos origin()`
- `public FC config()`

## FillLayerFeature

*class* `net.minecraft.world.level.levelgen.feature.FillLayerFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<LayerConfiguration> p_159780_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## FossilFeature

*class* `net.minecraft.world.level.levelgen.feature.FossilFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<FossilFeatureConfiguration> p_159789_)`
- `private static int countEmptyCorners(WorldGenLevel p_159782_,  BoundingBox p_159783_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## FossilFeatureConfiguration

*class* `net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<FossilFeatureConfiguration> CODEC`
- `public final List<ResourceLocation> fossilStructures`
- `public final List<ResourceLocation> overlayStructures`
- `public final Holder<StructureProcessorList> fossilProcessors`
- `public final Holder<StructureProcessorList> overlayProcessors`
- `public final int maxEmptyCornersAllowed`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## GeodeFeature

*class* `net.minecraft.world.level.levelgen.feature.GeodeFeature`

### Fields
- `private static final Direction[] DIRECTIONS`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<GeodeConfiguration> p_159836_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## GlowstoneFeature

*class* `net.minecraft.world.level.levelgen.feature.GlowstoneFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<NoneFeatureConfiguration> p_159861_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## HugeBrownMushroomFeature

*class* `net.minecraft.world.level.levelgen.feature.HugeBrownMushroomFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `protected void makeCap(LevelAccessor p_225043_,  RandomSource p_225044_,  BlockPos p_225045_,  int p_225046_,  BlockPos.MutableBlockPos p_225047_,  HugeMushroomFeatureConfiguration p_225048_)`
- `protected int getTreeRadiusForHeight(int p_65881_,  int p_65882_,  int p_65883_,  int p_65884_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.AbstractHugeMushroomFeature`: `getTreeHeight`, `isValidPosition`, `place`, `placeTrunk`
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## HugeFungusConfiguration

*class* `net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration`

### Fields
- `public static final com.mojang.serialization.Codec<HugeFungusConfiguration> CODEC`
- `public final BlockState validBaseState`
- `public final BlockState stemState`
- `public final BlockState hatState`
- `public final BlockState decorState`
- `public final BlockPredicate replaceableBlocks`
- `public final boolean planted`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## HugeFungusFeature

*class* `net.minecraft.world.level.levelgen.feature.HugeFungusFeature`

### Fields
- `private static final float HUGE_PROBABILITY` (= 0.05999999865889549f)

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<HugeFungusConfiguration> p_159878_)`
- `private static boolean isReplaceable(WorldGenLevel p_285049_,  BlockPos p_285309_,  HugeFungusConfiguration p_284992_,  boolean p_285162_)`
- `private void placeStem(WorldGenLevel p_285364_,  RandomSource p_285032_,  HugeFungusConfiguration p_285198_,  BlockPos p_285090_,  int p_285249_,  boolean p_285355_)`
- `private void placeHat(WorldGenLevel p_285200_,  RandomSource p_285456_,  HugeFungusConfiguration p_285146_,  BlockPos p_285097_,  int p_285156_,  boolean p_285265_)`
- `private void placeHatBlock(LevelAccessor p_225050_,  RandomSource p_225051_,  HugeFungusConfiguration p_225052_,  BlockPos.MutableBlockPos p_225053_,  float p_225054_,  float p_225055_,  float p_225056_)`
- `private void placeHatDropBlock(LevelAccessor p_225065_,  RandomSource p_225066_,  BlockPos p_225067_,  BlockState p_225068_,  boolean p_225069_)`
- `private static void tryPlaceWeepingVines(BlockPos p_225071_,  LevelAccessor p_225072_,  RandomSource p_225073_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## HugeRedMushroomFeature

*class* `net.minecraft.world.level.levelgen.feature.HugeRedMushroomFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `protected void makeCap(LevelAccessor p_225082_,  RandomSource p_225083_,  BlockPos p_225084_,  int p_225085_,  BlockPos.MutableBlockPos p_225086_,  HugeMushroomFeatureConfiguration p_225087_)`
- `protected int getTreeRadiusForHeight(int p_65977_,  int p_65978_,  int p_65979_,  int p_65980_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.AbstractHugeMushroomFeature`: `getTreeHeight`, `isValidPosition`, `place`, `placeTrunk`
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## IcebergFeature

*class* `net.minecraft.world.level.levelgen.feature.IcebergFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<BlockStateConfiguration> p_159884_)`
- `private void generateCutOut(RandomSource p_225100_,  LevelAccessor p_225101_,  int p_225102_,  int p_225103_,  BlockPos p_225104_,  boolean p_225105_,  int p_225106_,  double p_225107_,  int p_225108_)`
- `private void carve(int p_66036_,  int p_66037_,  BlockPos p_66038_,  LevelAccessor p_66039_,  boolean p_66040_,  double p_66041_,  BlockPos p_66042_,  int p_66043_,  int p_66044_)`
- `private void removeFloatingSnowLayer(LevelAccessor p_66049_,  BlockPos p_66050_)`
- `private void generateIcebergBlock(LevelAccessor p_225110_,  RandomSource p_225111_,  BlockPos p_225112_,  int p_225113_,  int p_225114_,  int p_225115_,  int p_225116_,  int p_225117_,  int p_225118_,  boolean p_225119_,  int p_225120_,  double p_225121_,  boolean p_225122_,  BlockState p_225123_)`
- `private void setIcebergBlock(BlockPos p_225125_,  LevelAccessor p_225126_,  RandomSource p_225127_,  int p_225128_,  int p_225129_,  boolean p_225130_,  boolean p_225131_,  BlockState p_225132_)`
- `private int getEllipseC(int p_66019_,  int p_66020_,  int p_66021_)`
- `private double signedDistanceCircle(int p_225089_,  int p_225090_,  BlockPos p_225091_,  int p_225092_,  RandomSource p_225093_)`
- `private double signedDistanceEllipse(int p_66023_,  int p_66024_,  BlockPos p_66025_,  int p_66026_,  int p_66027_,  double p_66028_)`
- `private int heightDependentRadiusRound(RandomSource p_225095_,  int p_225096_,  int p_225097_,  int p_225098_)`
- `private int heightDependentRadiusEllipse(int p_66110_,  int p_66111_,  int p_66112_)`
- `private int heightDependentRadiusSteep(RandomSource p_225134_,  int p_225135_,  int p_225136_,  int p_225137_)`
- `private static boolean isIcebergState(BlockState p_159886_)`
- `private boolean belowIsAir(BlockGetter p_66046_,  BlockPos p_66047_)`
- `private void smooth(LevelAccessor p_66052_,  BlockPos p_66053_,  int p_66054_,  int p_66055_,  boolean p_66056_,  int p_66057_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## IceSpikeFeature

*class* `net.minecraft.world.level.levelgen.feature.IceSpikeFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<NoneFeatureConfiguration> p_159882_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## KelpFeature

*class* `net.minecraft.world.level.levelgen.feature.KelpFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<NoneFeatureConfiguration> p_159956_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## LakeFeature

*class* `net.minecraft.world.level.levelgen.feature.LakeFeature`

### Fields
- `private static final BlockState AIR` (deprecated)

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<LakeFeature.Configuration> p_159958_)` (deprecated)
- `private boolean canReplaceBlock(BlockState p_190952_)` (deprecated)

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## LakeFeature.Configuration

*record* `net.minecraft.world.level.levelgen.feature.LakeFeature.Configuration`

Enclosing class: LakeFeature

### Fields
- `private final BlockStateProvider fluid`
  The field for the fluid record component.
- `private final BlockStateProvider barrier`
  The field for the barrier record component.
- `public static final com.mojang.serialization.Codec<LakeFeature.Configuration> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `NONE`

### Methods
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
- `public BlockStateProvider fluid()`
  Returns the value of the fluid record component.
  - returns: the value of the fluid record component
- `public BlockStateProvider barrier()`
  Returns the value of the barrier record component.
  - returns: the value of the barrier record component

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration`: `getFeatures`

## LargeDripstoneFeature

*class* `net.minecraft.world.level.levelgen.feature.LargeDripstoneFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<LargeDripstoneConfiguration> p_159967_)`
- `private static LargeDripstoneFeature.LargeDripstone makeDripstone(BlockPos p_225139_,  boolean p_225140_,  RandomSource p_225141_,  int p_225142_,  FloatProvider p_225143_,  FloatProvider p_225144_)`
- `private void placeDebugMarkers(WorldGenLevel p_159962_,  BlockPos p_159963_,  Column.Range p_159964_,  LargeDripstoneFeature.WindOffsetter p_159965_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## LargeDripstoneFeature.LargeDripstone

*class* `net.minecraft.world.level.levelgen.feature.LargeDripstoneFeature.LargeDripstone`

Enclosing class: LargeDripstoneFeature

### Fields
- `private BlockPos root`
- `private final boolean pointingUp`
- `private int radius`
- `private final double bluntness`
- `private final double scale`

### Methods
- `private int getHeight()`
- `private int getMinY()`
- `private int getMaxY()`
- `boolean moveBackUntilBaseIsInsideStoneAndShrinkRadiusIfNecessary(WorldGenLevel p_159990_,  LargeDripstoneFeature.WindOffsetter p_159991_)`
- `private int getHeightAtRadius(float p_159988_)`
- `void placeBlocks(WorldGenLevel p_225146_,  RandomSource p_225147_,  LargeDripstoneFeature.WindOffsetter p_225148_)`
- `boolean isSuitableForWind(LargeDripstoneConfiguration p_159997_)`

## LargeDripstoneFeature.WindOffsetter

*class* `net.minecraft.world.level.levelgen.feature.LargeDripstoneFeature.WindOffsetter`

Enclosing class: LargeDripstoneFeature

### Fields
- `private final int originY`
- `@Nullable private final Vec3 windSpeed`

### Methods
- `static LargeDripstoneFeature.WindOffsetter noWind()`
- `BlockPos offset(BlockPos p_160009_)`

## MonsterRoomFeature

*class* `net.minecraft.world.level.levelgen.feature.MonsterRoomFeature`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final EntityType<?>[] MOBS`
- `private static final BlockState AIR`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<NoneFeatureConfiguration> p_160066_)`
- `private EntityType<?> randomEntityId(RandomSource p_225154_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## MultifaceGrowthFeature

*class* `net.minecraft.world.level.levelgen.feature.MultifaceGrowthFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<MultifaceGrowthConfiguration> p_225165_)`
- `public static boolean placeGrowthIfPossible(WorldGenLevel p_225158_,  BlockPos p_225159_,  BlockState p_225160_,  MultifaceGrowthConfiguration p_225161_,  RandomSource p_225162_,  List<Direction> p_225163_)`
- `private static boolean isAirOrWater(BlockState p_225167_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## NetherForestVegetationFeature

*class* `net.minecraft.world.level.levelgen.feature.NetherForestVegetationFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<NetherForestVegetationConfig> p_160068_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## NoOpFeature

*class* `net.minecraft.world.level.levelgen.feature.NoOpFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<NoneFeatureConfiguration> p_160112_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## OreFeature

*class* `net.minecraft.world.level.levelgen.feature.OreFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<OreConfiguration> p_160177_)`
- `protected boolean doPlace(WorldGenLevel p_225172_,  RandomSource p_225173_,  OreConfiguration p_225174_,  double p_225175_,  double p_225176_,  double p_225177_,  double p_225178_,  double p_225179_,  double p_225180_,  int p_225181_,  int p_225182_,  int p_225183_,  int p_225184_,  int p_225185_)`
- `public static boolean canPlaceOre(BlockState p_225187_,  Function<BlockPos,BlockState> p_225188_,  RandomSource p_225189_,  OreConfiguration p_225190_,  OreConfiguration.TargetBlockState p_225191_,  BlockPos.MutableBlockPos p_225192_)`
- `protected static boolean shouldSkipAirCheck(RandomSource p_225169_,  float p_225170_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## PointedDripstoneFeature

*class* `net.minecraft.world.level.levelgen.feature.PointedDripstoneFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<PointedDripstoneConfiguration> p_191078_)`
- `private static Optional<Direction> getTipDirection(LevelAccessor p_225199_,  BlockPos p_225200_,  RandomSource p_225201_)`
- `private static void createPatchOfDripstoneBlocks(LevelAccessor p_225194_,  RandomSource p_225195_,  BlockPos p_225196_,  PointedDripstoneConfiguration p_225197_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## RandomBooleanSelectorFeature

*class* `net.minecraft.world.level.levelgen.feature.RandomBooleanSelectorFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<RandomBooleanFeatureConfiguration> p_160208_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## RandomPatchFeature

*class* `net.minecraft.world.level.levelgen.feature.RandomPatchFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<RandomPatchConfiguration> p_160210_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## RandomSelectorFeature

*class* `net.minecraft.world.level.levelgen.feature.RandomSelectorFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<RandomFeatureConfiguration> p_160212_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## ReplaceBlobsFeature

*class* `net.minecraft.world.level.levelgen.feature.ReplaceBlobsFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<ReplaceSphereConfiguration> p_160214_)`
- `@Nullable private static BlockPos findTarget(LevelAccessor p_66635_,  BlockPos.MutableBlockPos p_66636_,  Block p_66637_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## ReplaceBlockFeature

*class* `net.minecraft.world.level.levelgen.feature.ReplaceBlockFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<ReplaceBlockConfiguration> p_160216_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## RootSystemFeature

*class* `net.minecraft.world.level.levelgen.feature.RootSystemFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<RootSystemConfiguration> p_160257_)`
- `private static boolean spaceForTree(WorldGenLevel p_160236_,  RootSystemConfiguration p_160237_,  BlockPos p_160238_)`
- `private static boolean isAllowedTreeSpace(BlockState p_160253_,  int p_160254_,  int p_160255_)`
- `private static boolean placeDirtAndTree(WorldGenLevel p_225203_,  ChunkGenerator p_225204_,  RootSystemConfiguration p_225205_,  RandomSource p_225206_,  BlockPos.MutableBlockPos p_225207_,  BlockPos p_225208_)`
- `private static void placeDirt(BlockPos p_225223_,  int p_225224_,  WorldGenLevel p_225225_,  RootSystemConfiguration p_225226_,  RandomSource p_225227_)`
- `private static void placeRootedDirt(WorldGenLevel p_225210_,  RootSystemConfiguration p_225211_,  RandomSource p_225212_,  int p_225213_,  int p_225214_,  BlockPos.MutableBlockPos p_225215_)`
- `private static void placeRoots(WorldGenLevel p_225217_,  RootSystemConfiguration p_225218_,  RandomSource p_225219_,  BlockPos p_225220_,  BlockPos.MutableBlockPos p_225221_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## ScatteredOreFeature

*class* `net.minecraft.world.level.levelgen.feature.ScatteredOreFeature`

### Fields
- `private static final int MAX_DIST_FROM_ORIGIN` (= 7)

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<OreConfiguration> p_160306_)`
- `private void offsetTargetPos(BlockPos.MutableBlockPos p_225232_,  RandomSource p_225233_,  BlockPos p_225234_,  int p_225235_)`
- `private int getRandomPlacementInOneAxisRelativeToOrigin(RandomSource p_225229_,  int p_225230_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## SculkPatchFeature

*class* `net.minecraft.world.level.levelgen.feature.SculkPatchFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<SculkPatchConfiguration> p_225242_)`
- `private boolean canSpreadFrom(LevelAccessor p_225239_,  BlockPos p_225240_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## SeagrassFeature

*class* `net.minecraft.world.level.levelgen.feature.SeagrassFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<ProbabilityFeatureConfiguration> p_160318_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## SeaPickleFeature

*class* `net.minecraft.world.level.levelgen.feature.SeaPickleFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<CountConfiguration> p_160316_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## SimpleBlockFeature

*class* `net.minecraft.world.level.levelgen.feature.SimpleBlockFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<SimpleBlockConfiguration> p_160341_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## SimpleRandomSelectorFeature

*class* `net.minecraft.world.level.levelgen.feature.SimpleRandomSelectorFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<SimpleRandomFeatureConfiguration> p_160343_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## SnowAndFreezeFeature

*class* `net.minecraft.world.level.levelgen.feature.SnowAndFreezeFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<NoneFeatureConfiguration> p_160368_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## SpikeFeature

*class* `net.minecraft.world.level.levelgen.feature.SpikeFeature`

### Fields
- `public static final int NUMBER_OF_SPIKES` (= 10)
- `private static final int SPIKE_DISTANCE` (= 42)
- `private static final com.google.common.cache.LoadingCache<Long,List<SpikeFeature.EndSpike>> SPIKE_CACHE`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public static List<SpikeFeature.EndSpike> getSpikesForLevel(WorldGenLevel p_66859_)`
- `public boolean place(FeaturePlaceContext<SpikeConfiguration> p_160372_)`
- `private void placeSpike(ServerLevelAccessor p_225247_,  RandomSource p_225248_,  SpikeConfiguration p_225249_,  SpikeFeature.EndSpike p_225250_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## SpikeFeature.EndSpike

*class* `net.minecraft.world.level.levelgen.feature.SpikeFeature.EndSpike`

Enclosing class: SpikeFeature

### Fields
- `public static final com.mojang.serialization.Codec<SpikeFeature.EndSpike> CODEC`
- `private final int centerX`
- `private final int centerZ`
- `private final int radius`
- `private final int height`
- `private final boolean guarded`
- `private final AABB topBoundingBox`

### Methods
- `public boolean isCenterWithinChunk(BlockPos p_66892_)`
- `public int getCenterX()`
- `public int getCenterZ()`
- `public int getRadius()`
- `public int getHeight()`
- `public boolean isGuarded()`
- `public AABB getTopBoundingBox()`

## SpikeFeature.SpikeCacheLoader

*class* `net.minecraft.world.level.levelgen.feature.SpikeFeature.SpikeCacheLoader`

Enclosing class: SpikeFeature

### Methods
- `public List<SpikeFeature.EndSpike> load(Long p_66910_)`

### Inherited methods
- from `com.google.common.cache.CacheLoader`: `asyncReloading`, `from`, `from`, `loadAll`, `reload`

## SpringFeature

*class* `net.minecraft.world.level.levelgen.feature.SpringFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<SpringConfiguration> p_160404_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## TreeFeature

*class* `net.minecraft.world.level.levelgen.feature.TreeFeature`

### Fields
- `private static final int BLOCK_UPDATE_FLAGS` (= 19)

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `private static boolean isVine(LevelSimulatedReader p_67278_,  BlockPos p_67279_)`
- `public static boolean isAirOrLeaves(LevelSimulatedReader p_67268_,  BlockPos p_67269_)`
- `private static void setBlockKnownShape(LevelWriter p_67257_,  BlockPos p_67258_,  BlockState p_67259_)`
- `public static boolean validTreePos(LevelSimulatedReader p_67273_,  BlockPos p_67274_)`
- `private boolean doPlace(WorldGenLevel p_225258_,  RandomSource p_225259_,  BlockPos p_225260_,  BiConsumer<BlockPos,BlockState> p_225261_,  BiConsumer<BlockPos,BlockState> p_225262_,  FoliagePlacer.FoliageSetter p_273670_,  TreeConfiguration p_225264_)`
- `private int getMaxFreeTreeHeight(LevelSimulatedReader p_67216_,  int p_67217_,  BlockPos p_67218_,  TreeConfiguration p_67219_)`
- `protected void setBlock(LevelWriter p_67221_,  BlockPos p_67222_,  BlockState p_67223_)`
- `public final boolean place(FeaturePlaceContext<TreeConfiguration> p_160530_)`
- `private static DiscreteVoxelShape updateLeaves(LevelAccessor p_225252_,  BoundingBox p_225253_,  Set<BlockPos> p_225254_,  Set<BlockPos> p_225255_,  Set<BlockPos> p_225256_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`

## TwistingVinesFeature

*class* `net.minecraft.world.level.levelgen.feature.TwistingVinesFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<TwistingVinesConfig> p_160558_)`
- `private static boolean findFirstAirBlockAboveGround(LevelAccessor p_67294_,  BlockPos.MutableBlockPos p_67295_)`
- `public static void placeWeepingVinesColumn(LevelAccessor p_225301_,  RandomSource p_225302_,  BlockPos.MutableBlockPos p_225303_,  int p_225304_,  int p_225305_,  int p_225306_)`
- `private static boolean isInvalidPlacementLocation(LevelAccessor p_67297_,  BlockPos p_67298_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## UnderwaterMagmaFeature

*class* `net.minecraft.world.level.levelgen.feature.UnderwaterMagmaFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<UnderwaterMagmaConfiguration> p_160569_)`
- `private static OptionalInt getFloorY(WorldGenLevel p_160565_,  BlockPos p_160566_,  UnderwaterMagmaConfiguration p_160567_)`
- `private boolean isValidPlacement(WorldGenLevel p_160575_,  BlockPos p_160576_)`
- `private boolean isWaterOrAir(LevelAccessor p_160562_,  BlockPos p_160563_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## VegetationPatchFeature

*class* `net.minecraft.world.level.levelgen.feature.VegetationPatchFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<VegetationPatchConfiguration> p_160612_)`
- `protected Set<BlockPos> placeGroundPatch(WorldGenLevel p_225311_,  VegetationPatchConfiguration p_225312_,  RandomSource p_225313_,  BlockPos p_225314_,  Predicate<BlockState> p_225315_,  int p_225316_,  int p_225317_)`
- `protected void distributeVegetation(FeaturePlaceContext<VegetationPatchConfiguration> p_225331_,  WorldGenLevel p_225332_,  VegetationPatchConfiguration p_225333_,  RandomSource p_225334_,  Set<BlockPos> p_225335_,  int p_225336_,  int p_225337_)`
- `protected boolean placeVegetation(WorldGenLevel p_225318_,  VegetationPatchConfiguration p_225319_,  ChunkGenerator p_225320_,  RandomSource p_225321_,  BlockPos p_225322_)`
- `protected boolean placeGround(WorldGenLevel p_225324_,  VegetationPatchConfiguration p_225325_,  Predicate<BlockState> p_225326_,  RandomSource p_225327_,  BlockPos.MutableBlockPos p_225328_,  int p_225329_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## VinesFeature

*class* `net.minecraft.world.level.levelgen.feature.VinesFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<NoneFeatureConfiguration> p_160628_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## VoidStartPlatformFeature

*class* `net.minecraft.world.level.levelgen.feature.VoidStartPlatformFeature`

### Fields
- `private static final BlockPos PLATFORM_OFFSET`
- `private static final ChunkPos PLATFORM_ORIGIN_CHUNK`
- `private static final int PLATFORM_RADIUS` (= 16)
- `private static final int PLATFORM_RADIUS_CHUNKS` (= 1)

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `private static int checkerboardDistance(int p_67356_,  int p_67357_,  int p_67358_,  int p_67359_)`
- `public boolean place(FeaturePlaceContext<NoneFeatureConfiguration> p_160633_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## WaterloggedVegetationPatchFeature

*class* `net.minecraft.world.level.levelgen.feature.WaterloggedVegetationPatchFeature`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `protected Set<BlockPos> placeGroundPatch(WorldGenLevel p_225339_,  VegetationPatchConfiguration p_225340_,  RandomSource p_225341_,  BlockPos p_225342_,  Predicate<BlockState> p_225343_,  int p_225344_,  int p_225345_)`
- `private static boolean isExposed(WorldGenLevel p_160656_,  Set<BlockPos> p_160657_,  BlockPos p_160658_,  BlockPos.MutableBlockPos p_160659_)`
- `private static boolean isExposedDirection(WorldGenLevel p_160651_,  BlockPos p_160652_,  BlockPos.MutableBlockPos p_160653_,  Direction p_160654_)`
- `protected boolean placeVegetation(WorldGenLevel p_225347_,  VegetationPatchConfiguration p_225348_,  ChunkGenerator p_225349_,  RandomSource p_225350_,  BlockPos p_225351_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.VegetationPatchFeature`: `distributeVegetation`, `place`, `placeGround`
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## WeepingVinesFeature

*class* `net.minecraft.world.level.levelgen.feature.WeepingVinesFeature`

### Fields
- `private static final Direction[] DIRECTIONS`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.Feature`: `BAMBOO`, `BASALT_COLUMNS`, `BASALT_PILLAR`, `BLOCK_COLUMN`, `BLOCK_PILE`, `BLUE_ICE`, `BONUS_CHEST`, `CHORUS_PLANT`, `CORAL_CLAW`, `CORAL_MUSHROOM`, `CORAL_TREE`, `DELTA_FEATURE`, `DESERT_WELL`, `DISK`, `DRIPSTONE_CLUSTER`, `END_GATEWAY`, `END_ISLAND`, `END_SPIKE`, `FILL_LAYER`, `FLOWER`, `FOREST_ROCK`, `FOSSIL`, `FREEZE_TOP_LAYER`, `GEODE`, `GLOWSTONE_BLOB`, `HUGE_BROWN_MUSHROOM`, `HUGE_FUNGUS`, `HUGE_RED_MUSHROOM`, `ICE_SPIKE`, `ICEBERG`, `KELP`, `LAKE`, `LARGE_DRIPSTONE`, `MONSTER_ROOM`, `MULTIFACE_GROWTH`, `NETHER_FOREST_VEGETATION`, `NO_BONEMEAL_FLOWER`, `NO_OP`, `ORE`, `POINTED_DRIPSTONE`, `RANDOM_BOOLEAN_SELECTOR`, `RANDOM_PATCH`, `RANDOM_SELECTOR`, `REPLACE_BLOBS`, `REPLACE_SINGLE_BLOCK`, `ROOT_SYSTEM`, `SCATTERED_ORE`, `SCULK_PATCH`, `SEA_PICKLE`, `SEAGRASS`, `SIMPLE_BLOCK`, `SIMPLE_RANDOM_SELECTOR`, `SPRING`, `TREE`, `TWISTING_VINES`, `UNDERWATER_MAGMA`, `VEGETATION_PATCH`, `VINES`, `VOID_START_PLATFORM`, `WATERLOGGED_VEGETATION_PATCH`, `WEEPING_VINES`

### Methods
- `public boolean place(FeaturePlaceContext<NoneFeatureConfiguration> p_160661_)`
- `private void placeRoofNetherWart(LevelAccessor p_225360_,  RandomSource p_225361_,  BlockPos p_225362_)`
- `private void placeRoofWeepingVines(LevelAccessor p_225364_,  RandomSource p_225365_,  BlockPos p_225366_)`
- `public static void placeWeepingVinesColumn(LevelAccessor p_225353_,  RandomSource p_225354_,  BlockPos.MutableBlockPos p_225355_,  int p_225356_,  int p_225357_,  int p_225358_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.Feature`: `checkNeighbors`, `configuredCodec`, `isAdjacentToAir`, `isDirt`, `isGrassOrDirt`, `isReplaceable`, `isStone`, `markAboveForPostProcessing`, `place`, `safeSetBlock`, `setBlock`

## WeightedPlacedFeature

*class* `net.minecraft.world.level.levelgen.feature.WeightedPlacedFeature`

### Fields
- `public static final com.mojang.serialization.Codec<WeightedPlacedFeature> CODEC`
- `public final Holder<PlacedFeature> feature`
- `public final float chance`

### Methods
- `public boolean place(WorldGenLevel p_225368_,  ChunkGenerator p_225369_,  RandomSource p_225370_,  BlockPos p_225371_)`
