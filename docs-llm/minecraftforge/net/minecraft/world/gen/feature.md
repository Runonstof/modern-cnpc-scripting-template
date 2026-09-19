# net.minecraft.world.gen.feature

- [WorldGenAbstractTree](#worldgenabstracttree)
- [WorldGenBigMushroom](#worldgenbigmushroom)
- [WorldGenBigTree](#worldgenbigtree)
- [WorldGenBirchTree](#worldgenbirchtree)
- [WorldGenBlockBlob](#worldgenblockblob)
- [WorldGenBush](#worldgenbush)
- [WorldGenCactus](#worldgencactus)
- [WorldGenCanopyTree](#worldgencanopytree)
- [WorldGenClay](#worldgenclay)
- [WorldGenDeadBush](#worldgendeadbush)
- [WorldGenDesertWells](#worldgendesertwells)
- [WorldGenDoublePlant](#worldgendoubleplant)
- [WorldGenDungeons](#worldgendungeons)
- [WorldGenEndGateway](#worldgenendgateway)
- [WorldGenEndIsland](#worldgenendisland)
- [WorldGenEndPodium](#worldgenendpodium)
- [WorldGenerator](#worldgenerator)
- [WorldGeneratorBonusChest](#worldgeneratorbonuschest)
- [WorldGenFire](#worldgenfire)
- [WorldGenFlowers](#worldgenflowers)
- [WorldGenFossils](#worldgenfossils)
- [WorldGenGlowStone1](#worldgenglowstone1)
- [WorldGenGlowStone2](#worldgenglowstone2)
- [WorldGenHellLava](#worldgenhelllava)
- [WorldGenHugeTrees](#worldgenhugetrees)
- [WorldGenIcePath](#worldgenicepath)
- [WorldGenIceSpike](#worldgenicespike)
- [WorldGenLakes](#worldgenlakes)
- [WorldGenLiquids](#worldgenliquids)
- [WorldGenMegaJungle](#worldgenmegajungle)
- [WorldGenMegaPineTree](#worldgenmegapinetree)
- [WorldGenMelon](#worldgenmelon)
- [WorldGenMinable](#worldgenminable)
- [WorldGenPumpkin](#worldgenpumpkin)
- [WorldGenReed](#worldgenreed)
- [WorldGenSand](#worldgensand)
- [WorldGenSavannaTree](#worldgensavannatree)
- [WorldGenShrub](#worldgenshrub)
- [WorldGenSpikes](#worldgenspikes)
- [WorldGenSpikes.EndSpike](#worldgenspikes.endspike)
- [WorldGenSwamp](#worldgenswamp)
- [WorldGenTaiga1](#worldgentaiga1)
- [WorldGenTaiga2](#worldgentaiga2)
- [WorldGenTallGrass](#worldgentallgrass)
- [WorldGenTrees](#worldgentrees)
- [WorldGenVines](#worldgenvines)
- [WorldGenWaterlily](#worldgenwaterlily)
## WorldGenAbstractTree

*class* `net.minecraft.world.gen.feature.WorldGenAbstractTree`

### Methods
- `protected boolean canGrowInto(Block blockType)`
- `public void generateSaplings(World worldIn,  java.util.Random random,  BlockPos pos)`
- `protected void setDirtAt(World worldIn,  BlockPos pos)`
- `public boolean isReplaceable(World world,  BlockPos pos)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `generate`, `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenBigMushroom

*class* `net.minecraft.world.gen.feature.WorldGenBigMushroom`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenBigTree

*class* `net.minecraft.world.gen.feature.WorldGenBigTree`

### Methods
- `public void setDecorationDefaults()`
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenAbstractTree`: `canGrowInto`, `generateSaplings`, `isReplaceable`, `setDirtAt`
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`

## WorldGenBirchTree

*class* `net.minecraft.world.gen.feature.WorldGenBirchTree`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenAbstractTree`: `canGrowInto`, `generateSaplings`, `isReplaceable`, `setDirtAt`
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenBlockBlob

*class* `net.minecraft.world.gen.feature.WorldGenBlockBlob`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenBush

*class* `net.minecraft.world.gen.feature.WorldGenBush`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenCactus

*class* `net.minecraft.world.gen.feature.WorldGenCactus`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenCanopyTree

*class* `net.minecraft.world.gen.feature.WorldGenCanopyTree`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenAbstractTree`: `canGrowInto`, `generateSaplings`, `isReplaceable`, `setDirtAt`
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenClay

*class* `net.minecraft.world.gen.feature.WorldGenClay`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenDeadBush

*class* `net.minecraft.world.gen.feature.WorldGenDeadBush`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenDesertWells

*class* `net.minecraft.world.gen.feature.WorldGenDesertWells`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenDoublePlant

*class* `net.minecraft.world.gen.feature.WorldGenDoublePlant`

### Methods
- `public void setPlantType(BlockDoublePlant.EnumPlantType plantTypeIn)`
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenDungeons

*class* `net.minecraft.world.gen.feature.WorldGenDungeons`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenEndGateway

*class* `net.minecraft.world.gen.feature.WorldGenEndGateway`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenEndIsland

*class* `net.minecraft.world.gen.feature.WorldGenEndIsland`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenEndPodium

*class* `net.minecraft.world.gen.feature.WorldGenEndPodium`

### Fields
- `public static final BlockPos END_PODIUM_LOCATION`
- `public static final BlockPos END_PODIUM_CHUNK_POS`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenerator

*class* `net.minecraft.world.gen.feature.WorldGenerator`

### Methods
- `public abstract boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`
- `public void setDecorationDefaults()`
- `protected void setBlockAndNotifyAdequately(World worldIn,  BlockPos pos,  IBlockState state)`

## WorldGeneratorBonusChest

*class* `net.minecraft.world.gen.feature.WorldGeneratorBonusChest`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenFire

*class* `net.minecraft.world.gen.feature.WorldGenFire`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenFlowers

*class* `net.minecraft.world.gen.feature.WorldGenFlowers`

### Methods
- `public void setGeneratedBlock(BlockFlower flowerIn,  BlockFlower.EnumFlowerType typeIn)`
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenFossils

*class* `net.minecraft.world.gen.feature.WorldGenFossils`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenGlowStone1

*class* `net.minecraft.world.gen.feature.WorldGenGlowStone1`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenGlowStone2

*class* `net.minecraft.world.gen.feature.WorldGenGlowStone2`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenHellLava

*class* `net.minecraft.world.gen.feature.WorldGenHellLava`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenHugeTrees

*class* `net.minecraft.world.gen.feature.WorldGenHugeTrees`

### Fields
- `protected final int baseHeight`
- `protected final IBlockState woodMetadata`
- `protected final IBlockState leavesMetadata`
- `protected int extraRandomHeight`

### Methods
- `protected int getHeight(java.util.Random rand)`
- `protected boolean ensureGrowable(World worldIn,  java.util.Random rand,  BlockPos treePos,  int height)`
- `protected void growLeavesLayerStrict(World worldIn,  BlockPos layerCenter,  int width)`
- `protected void growLeavesLayer(World worldIn,  BlockPos layerCenter,  int width)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenAbstractTree`: `canGrowInto`, `generateSaplings`, `isReplaceable`, `setDirtAt`
- from `net.minecraft.world.gen.feature.WorldGenerator`: `generate`, `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenIcePath

*class* `net.minecraft.world.gen.feature.WorldGenIcePath`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenIceSpike

*class* `net.minecraft.world.gen.feature.WorldGenIceSpike`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenLakes

*class* `net.minecraft.world.gen.feature.WorldGenLakes`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenLiquids

*class* `net.minecraft.world.gen.feature.WorldGenLiquids`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenMegaJungle

*class* `net.minecraft.world.gen.feature.WorldGenMegaJungle`

### Inherited fields
- from `net.minecraft.world.gen.feature.WorldGenHugeTrees`: `baseHeight`, `extraRandomHeight`, `leavesMetadata`, `woodMetadata`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenHugeTrees`: `ensureGrowable`, `getHeight`, `growLeavesLayer`, `growLeavesLayerStrict`
- from `net.minecraft.world.gen.feature.WorldGenAbstractTree`: `canGrowInto`, `generateSaplings`, `isReplaceable`, `setDirtAt`
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenMegaPineTree

*class* `net.minecraft.world.gen.feature.WorldGenMegaPineTree`

### Inherited fields
- from `net.minecraft.world.gen.feature.WorldGenHugeTrees`: `baseHeight`, `extraRandomHeight`, `leavesMetadata`, `woodMetadata`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`
- `public void generateSaplings(World worldIn,  java.util.Random random,  BlockPos pos)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenHugeTrees`: `ensureGrowable`, `getHeight`, `growLeavesLayer`, `growLeavesLayerStrict`
- from `net.minecraft.world.gen.feature.WorldGenAbstractTree`: `canGrowInto`, `isReplaceable`, `setDirtAt`
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenMelon

*class* `net.minecraft.world.gen.feature.WorldGenMelon`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenMinable

*class* `net.minecraft.world.gen.feature.WorldGenMinable`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenPumpkin

*class* `net.minecraft.world.gen.feature.WorldGenPumpkin`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenReed

*class* `net.minecraft.world.gen.feature.WorldGenReed`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenSand

*class* `net.minecraft.world.gen.feature.WorldGenSand`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenSavannaTree

*class* `net.minecraft.world.gen.feature.WorldGenSavannaTree`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenAbstractTree`: `canGrowInto`, `generateSaplings`, `isReplaceable`, `setDirtAt`
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenShrub

*class* `net.minecraft.world.gen.feature.WorldGenShrub`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenAbstractTree`: `canGrowInto`, `generateSaplings`, `isReplaceable`, `setDirtAt`
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenSpikes

*class* `net.minecraft.world.gen.feature.WorldGenSpikes`

### Methods
- `public void setSpike(WorldGenSpikes.EndSpike p_186143_1_)`
- `public void setCrystalInvulnerable(boolean p_186144_1_)`
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`
- `public void setBeamTarget(BlockPos pos)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenSpikes.EndSpike

*class* `net.minecraft.world.gen.feature.WorldGenSpikes.EndSpike`

Enclosing class: WorldGenSpikes

### Methods
- `public boolean doesStartInChunk(BlockPos p_186154_1_)`
- `public int getCenterX()`
- `public int getCenterZ()`
- `public int getRadius()`
- `public int getHeight()`
- `public boolean isGuarded()`
- `public AxisAlignedBB getTopBoundingBox()`

## WorldGenSwamp

*class* `net.minecraft.world.gen.feature.WorldGenSwamp`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenAbstractTree`: `canGrowInto`, `generateSaplings`, `isReplaceable`, `setDirtAt`
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenTaiga1

*class* `net.minecraft.world.gen.feature.WorldGenTaiga1`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenAbstractTree`: `canGrowInto`, `generateSaplings`, `isReplaceable`, `setDirtAt`
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenTaiga2

*class* `net.minecraft.world.gen.feature.WorldGenTaiga2`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenAbstractTree`: `canGrowInto`, `generateSaplings`, `isReplaceable`, `setDirtAt`
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenTallGrass

*class* `net.minecraft.world.gen.feature.WorldGenTallGrass`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenTrees

*class* `net.minecraft.world.gen.feature.WorldGenTrees`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenAbstractTree`: `canGrowInto`, `generateSaplings`, `isReplaceable`, `setDirtAt`
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenVines

*class* `net.minecraft.world.gen.feature.WorldGenVines`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`

## WorldGenWaterlily

*class* `net.minecraft.world.gen.feature.WorldGenWaterlily`

### Methods
- `public boolean generate(World worldIn,  java.util.Random rand,  BlockPos position)`

### Inherited methods
- from `net.minecraft.world.gen.feature.WorldGenerator`: `setBlockAndNotifyAdequately`, `setDecorationDefaults`
