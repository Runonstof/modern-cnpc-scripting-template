# net.minecraft.world.level.levelgen.structure.templatesystem

- [AlwaysTrueTest](#alwaystruetest)
- [AxisAlignedLinearPosTest](#axisalignedlinearpostest)
- [BlackstoneReplaceProcessor](#blackstonereplaceprocessor)
- [BlockAgeProcessor](#blockageprocessor)
- [BlockIgnoreProcessor](#blockignoreprocessor)
- [BlockMatchTest](#blockmatchtest)
- [BlockRotProcessor](#blockrotprocessor)
- [BlockStateMatchTest](#blockstatematchtest)
- [CappedProcessor](#cappedprocessor)
- [GravityProcessor](#gravityprocessor)
- [JigsawReplacementProcessor](#jigsawreplacementprocessor)
- [LavaSubmergedBlockProcessor](#lavasubmergedblockprocessor)
- [LinearPosTest](#linearpostest)
- [NopProcessor](#nopprocessor)
- [PosAlwaysTrueTest](#posalwaystruetest)
- [PosRuleTest](#posruletest)
- [PosRuleTestType](#posruletesttype)
- [ProcessorRule](#processorrule)
- [ProtectedBlockProcessor](#protectedblockprocessor)
- [RandomBlockMatchTest](#randomblockmatchtest)
- [RandomBlockStateMatchTest](#randomblockstatematchtest)
- [RuleProcessor](#ruleprocessor)
- [RuleTest](#ruletest)
- [RuleTestType](#ruletesttype)
- [StructurePlaceSettings](#structureplacesettings)
- [StructureProcessor](#structureprocessor)
- [StructureProcessorList](#structureprocessorlist)
- [StructureProcessorType](#structureprocessortype)
- [StructureTemplate](#structuretemplate)
- [StructureTemplate.Palette](#structuretemplate.palette)
- [StructureTemplate.SimplePalette](#structuretemplate.simplepalette)
- [StructureTemplate.StructureBlockInfo](#structuretemplate.structureblockinfo)
- [StructureTemplate.StructureEntityInfo](#structuretemplate.structureentityinfo)
- [StructureTemplateManager](#structuretemplatemanager)
- [StructureTemplateManager.InputStreamOpener](#structuretemplatemanager.inputstreamopener)
- [StructureTemplateManager.Source](#structuretemplatemanager.source)
- [TagMatchTest](#tagmatchtest)
## AlwaysTrueTest

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.AlwaysTrueTest`

### Fields
- `public static final com.mojang.serialization.Codec<AlwaysTrueTest> CODEC`
- `public static final AlwaysTrueTest INSTANCE`

### Methods
- `public boolean test(BlockState p_230248_,  RandomSource p_230249_)`
- `protected RuleTestType<?> getType()`

## AxisAlignedLinearPosTest

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.AxisAlignedLinearPosTest`

### Fields
- `public static final com.mojang.serialization.Codec<AxisAlignedLinearPosTest> CODEC`
- `private final float minChance`
- `private final float maxChance`
- `private final int minDist`
- `private final int maxDist`
- `private final Direction.Axis axis`

### Methods
- `public boolean test(BlockPos p_230251_,  BlockPos p_230252_,  BlockPos p_230253_,  RandomSource p_230254_)`
- `protected PosRuleTestType<?> getType()`

## BlackstoneReplaceProcessor

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.BlackstoneReplaceProcessor`

### Fields
- `public static final com.mojang.serialization.Codec<BlackstoneReplaceProcessor> CODEC`
- `public static final BlackstoneReplaceProcessor INSTANCE`
- `private final Map<Block,Block> replacements`

### Methods
- `public StructureTemplate.StructureBlockInfo processBlock(LevelReader p_74000_,  BlockPos p_74001_,  BlockPos p_74002_,  StructureTemplate.StructureBlockInfo p_74003_,  StructureTemplate.StructureBlockInfo p_74004_,  StructurePlaceSettings p_74005_)`
- `protected StructureProcessorType<?> getType()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor`: `finalizeProcessing`, `process`, `processEntity`

## BlockAgeProcessor

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.BlockAgeProcessor`

### Fields
- `public static final com.mojang.serialization.Codec<BlockAgeProcessor> CODEC`
- `private static final float PROBABILITY_OF_REPLACING_FULL_BLOCK` (= 0.5f)
- `private static final float PROBABILITY_OF_REPLACING_STAIRS` (= 0.5f)
- `private static final float PROBABILITY_OF_REPLACING_OBSIDIAN` (= 0.15000000596046448f)
- `private static final BlockState[] NON_MOSSY_REPLACEMENTS`
- `private final float mossiness`

### Methods
- `@Nullable public StructureTemplate.StructureBlockInfo processBlock(LevelReader p_74016_,  BlockPos p_74017_,  BlockPos p_74018_,  StructureTemplate.StructureBlockInfo p_74019_,  StructureTemplate.StructureBlockInfo p_74020_,  StructurePlaceSettings p_74021_)`
- `@Nullable private BlockState maybeReplaceFullStoneBlock(RandomSource p_230256_)`
- `@Nullable private BlockState maybeReplaceStairs(RandomSource p_230261_,  BlockState p_230262_)`
- `@Nullable private BlockState maybeReplaceSlab(RandomSource p_230271_)`
- `@Nullable private BlockState maybeReplaceWall(RandomSource p_230273_)`
- `@Nullable private BlockState maybeReplaceObsidian(RandomSource p_230275_)`
- `private static BlockState getRandomFacingStairs(RandomSource p_230258_,  Block p_230259_)`
- `private BlockState getRandomBlock(RandomSource p_230267_,  BlockState[] p_230268_,  BlockState[] p_230269_)`
- `private static BlockState getRandomBlock(RandomSource p_230264_,  BlockState[] p_230265_)`
- `protected StructureProcessorType<?> getType()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor`: `finalizeProcessing`, `process`, `processEntity`

## BlockIgnoreProcessor

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.BlockIgnoreProcessor`

### Fields
- `public static final com.mojang.serialization.Codec<BlockIgnoreProcessor> CODEC`
- `public static final BlockIgnoreProcessor STRUCTURE_BLOCK`
- `public static final BlockIgnoreProcessor AIR`
- `public static final BlockIgnoreProcessor STRUCTURE_AND_AIR`
- `private final com.google.common.collect.ImmutableList<Block> toIgnore`

### Methods
- `@Nullable public StructureTemplate.StructureBlockInfo processBlock(LevelReader p_74055_,  BlockPos p_74056_,  BlockPos p_74057_,  StructureTemplate.StructureBlockInfo p_74058_,  StructureTemplate.StructureBlockInfo p_74059_,  StructurePlaceSettings p_74060_)`
- `protected StructureProcessorType<?> getType()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor`: `finalizeProcessing`, `process`, `processEntity`

## BlockMatchTest

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.BlockMatchTest`

### Fields
- `public static final com.mojang.serialization.Codec<BlockMatchTest> CODEC`
- `private final Block block`

### Methods
- `public boolean test(BlockState p_230277_,  RandomSource p_230278_)`
- `protected RuleTestType<?> getType()`

## BlockRotProcessor

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.BlockRotProcessor`

### Fields
- `public static final com.mojang.serialization.Codec<BlockRotProcessor> CODEC`
- `private final Optional<HolderSet<Block>> rottableBlocks`
- `private final float integrity`

### Methods
- `@Nullable public StructureTemplate.StructureBlockInfo processBlock(LevelReader p_74081_,  BlockPos p_74082_,  BlockPos p_74083_,  StructureTemplate.StructureBlockInfo p_74084_,  StructureTemplate.StructureBlockInfo p_74085_,  StructurePlaceSettings p_74086_)`
- `protected StructureProcessorType<?> getType()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor`: `finalizeProcessing`, `process`, `processEntity`

## BlockStateMatchTest

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.BlockStateMatchTest`

### Fields
- `public static final com.mojang.serialization.Codec<BlockStateMatchTest> CODEC`
- `private final BlockState blockState`

### Methods
- `public boolean test(BlockState p_230293_,  RandomSource p_230294_)`
- `protected RuleTestType<?> getType()`

## CappedProcessor

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.CappedProcessor`

### Fields
- `public static final com.mojang.serialization.Codec<CappedProcessor> CODEC`
- `private final StructureProcessor delegate`
- `private final IntProvider limit`

### Methods
- `protected StructureProcessorType<?> getType()`
- `public final List<StructureTemplate.StructureBlockInfo> finalizeProcessing(ServerLevelAccessor p_278291_,  BlockPos p_278055_,  BlockPos p_277825_,  List<StructureTemplate.StructureBlockInfo> p_277746_,  List<StructureTemplate.StructureBlockInfo> p_277676_,  StructurePlaceSettings p_277728_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor`: `process`, `processBlock`, `processEntity`

## GravityProcessor

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.GravityProcessor`

### Fields
- `public static final com.mojang.serialization.Codec<GravityProcessor> CODEC`
- `private final Heightmap.Types heightmap`
- `private final int offset`

### Methods
- `@Nullable public StructureTemplate.StructureBlockInfo processBlock(LevelReader p_74109_,  BlockPos p_74110_,  BlockPos p_74111_,  StructureTemplate.StructureBlockInfo p_74112_,  StructureTemplate.StructureBlockInfo p_74113_,  StructurePlaceSettings p_74114_)`
- `protected StructureProcessorType<?> getType()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor`: `finalizeProcessing`, `process`, `processEntity`

## JigsawReplacementProcessor

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.JigsawReplacementProcessor`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final com.mojang.serialization.Codec<JigsawReplacementProcessor> CODEC`
- `public static final JigsawReplacementProcessor INSTANCE`

### Methods
- `@Nullable public StructureTemplate.StructureBlockInfo processBlock(LevelReader p_74127_,  BlockPos p_74128_,  BlockPos p_74129_,  StructureTemplate.StructureBlockInfo p_74130_,  StructureTemplate.StructureBlockInfo p_74131_,  StructurePlaceSettings p_74132_)`
- `protected StructureProcessorType<?> getType()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor`: `finalizeProcessing`, `process`, `processEntity`

## LavaSubmergedBlockProcessor

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.LavaSubmergedBlockProcessor`

### Fields
- `public static final com.mojang.serialization.Codec<LavaSubmergedBlockProcessor> CODEC`
- `public static final LavaSubmergedBlockProcessor INSTANCE`

### Methods
- `@Nullable public StructureTemplate.StructureBlockInfo processBlock(LevelReader p_74140_,  BlockPos p_74141_,  BlockPos p_74142_,  StructureTemplate.StructureBlockInfo p_74143_,  StructureTemplate.StructureBlockInfo p_74144_,  StructurePlaceSettings p_74145_)`
- `protected StructureProcessorType<?> getType()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor`: `finalizeProcessing`, `process`, `processEntity`

## LinearPosTest

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.LinearPosTest`

### Fields
- `public static final com.mojang.serialization.Codec<LinearPosTest> CODEC`
- `private final float minChance`
- `private final float maxChance`
- `private final int minDist`
- `private final int maxDist`

### Methods
- `public boolean test(BlockPos p_230296_,  BlockPos p_230297_,  BlockPos p_230298_,  RandomSource p_230299_)`
- `protected PosRuleTestType<?> getType()`

## NopProcessor

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.NopProcessor`

### Fields
- `public static final com.mojang.serialization.Codec<NopProcessor> CODEC`
- `public static final NopProcessor INSTANCE`

### Methods
- `protected StructureProcessorType<?> getType()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor`: `finalizeProcessing`, `process`, `processBlock`, `processEntity`

## PosAlwaysTrueTest

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.PosAlwaysTrueTest`

### Fields
- `public static final com.mojang.serialization.Codec<PosAlwaysTrueTest> CODEC`
- `public static final PosAlwaysTrueTest INSTANCE`

### Methods
- `public boolean test(BlockPos p_230301_,  BlockPos p_230302_,  BlockPos p_230303_,  RandomSource p_230304_)`
- `protected PosRuleTestType<?> getType()`

## PosRuleTest

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.PosRuleTest`

### Fields
- `public static final com.mojang.serialization.Codec<PosRuleTest> CODEC`

### Methods
- `public abstract boolean test(BlockPos p_230305_,  BlockPos p_230306_,  BlockPos p_230307_,  RandomSource p_230308_)`
- `protected abstract PosRuleTestType<?> getType()`

## PosRuleTestType

*interface* `net.minecraft.world.level.levelgen.structure.templatesystem.PosRuleTestType`

### Fields
- `static final PosRuleTestType<PosAlwaysTrueTest> ALWAYS_TRUE_TEST`
- `static final PosRuleTestType<LinearPosTest> LINEAR_POS_TEST`
- `static final PosRuleTestType<AxisAlignedLinearPosTest> AXIS_ALIGNED_LINEAR_POS_TEST`

### Methods
- `com.mojang.serialization.Codec<P> codec()`
- `static <P extends PosRuleTest> PosRuleTestType<P> register(String p_74212_,  com.mojang.serialization.Codec<P> p_74213_)`

## ProcessorRule

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.ProcessorRule`

### Fields
- `public static final Passthrough DEFAULT_BLOCK_ENTITY_MODIFIER`
- `public static final com.mojang.serialization.Codec<ProcessorRule> CODEC`
- `private final RuleTest inputPredicate`
- `private final RuleTest locPredicate`
- `private final PosRuleTest posPredicate`
- `private final BlockState outputState`
- `private final RuleBlockEntityModifier blockEntityModifier`

### Methods
- `public boolean test(BlockState p_230310_,  BlockState p_230311_,  BlockPos p_230312_,  BlockPos p_230313_,  BlockPos p_230314_,  RandomSource p_230315_)`
- `public BlockState getOutputState()`
- `@Nullable public CompoundTag getOutputTag(RandomSource p_277551_,  @Nullable  CompoundTag p_277867_)`

## ProtectedBlockProcessor

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.ProtectedBlockProcessor`

### Fields
- `public final TagKey<Block> cannotReplace`
- `public static final com.mojang.serialization.Codec<ProtectedBlockProcessor> CODEC`

### Methods
- `@Nullable public StructureTemplate.StructureBlockInfo processBlock(LevelReader p_163755_,  BlockPos p_163756_,  BlockPos p_163757_,  StructureTemplate.StructureBlockInfo p_163758_,  StructureTemplate.StructureBlockInfo p_163759_,  StructurePlaceSettings p_163760_)`
- `protected StructureProcessorType<?> getType()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor`: `finalizeProcessing`, `process`, `processEntity`

## RandomBlockMatchTest

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.RandomBlockMatchTest`

### Fields
- `public static final com.mojang.serialization.Codec<RandomBlockMatchTest> CODEC`
- `private final Block block`
- `private final float probability`

### Methods
- `public boolean test(BlockState p_230317_,  RandomSource p_230318_)`
- `protected RuleTestType<?> getType()`

## RandomBlockStateMatchTest

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.RandomBlockStateMatchTest`

### Fields
- `public static final com.mojang.serialization.Codec<RandomBlockStateMatchTest> CODEC`
- `private final BlockState blockState`
- `private final float probability`

### Methods
- `public boolean test(BlockState p_230320_,  RandomSource p_230321_)`
- `protected RuleTestType<?> getType()`

## RuleProcessor

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.RuleProcessor`

### Fields
- `public static final com.mojang.serialization.Codec<RuleProcessor> CODEC`
- `private final com.google.common.collect.ImmutableList<ProcessorRule> rules`

### Methods
- `@Nullable public StructureTemplate.StructureBlockInfo processBlock(LevelReader p_74299_,  BlockPos p_74300_,  BlockPos p_74301_,  StructureTemplate.StructureBlockInfo p_74302_,  StructureTemplate.StructureBlockInfo p_74303_,  StructurePlaceSettings p_74304_)`
- `protected StructureProcessorType<?> getType()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor`: `finalizeProcessing`, `process`, `processEntity`

## RuleTest

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest`

### Fields
- `public static final com.mojang.serialization.Codec<RuleTest> CODEC`

### Methods
- `public abstract boolean test(BlockState p_230322_,  RandomSource p_230323_)`
- `protected abstract RuleTestType<?> getType()`

## RuleTestType

*interface* `net.minecraft.world.level.levelgen.structure.templatesystem.RuleTestType`

### Fields
- `static final RuleTestType<AlwaysTrueTest> ALWAYS_TRUE_TEST`
- `static final RuleTestType<BlockMatchTest> BLOCK_TEST`
- `static final RuleTestType<BlockStateMatchTest> BLOCKSTATE_TEST`
- `static final RuleTestType<TagMatchTest> TAG_TEST`
- `static final RuleTestType<RandomBlockMatchTest> RANDOM_BLOCK_TEST`
- `static final RuleTestType<RandomBlockStateMatchTest> RANDOM_BLOCKSTATE_TEST`

### Methods
- `com.mojang.serialization.Codec<P> codec()`
- `static <P extends RuleTest> RuleTestType<P> register(String p_74322_,  com.mojang.serialization.Codec<P> p_74323_)`

## StructurePlaceSettings

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings`

### Fields
- `private Mirror mirror`
- `private Rotation rotation`
- `private BlockPos rotationPivot`
- `private boolean ignoreEntities`
- `@Nullable private BoundingBox boundingBox`
- `private boolean keepLiquids`
- `@Nullable private RandomSource random`
- `private int palette`
- `private final List<StructureProcessor> processors`
- `private boolean knownShape`
- `private boolean finalizeEntities`

### Methods
- `public StructurePlaceSettings copy()`
- `public StructurePlaceSettings setMirror(Mirror p_74378_)`
- `public StructurePlaceSettings setRotation(Rotation p_74380_)`
- `public StructurePlaceSettings setRotationPivot(BlockPos p_74386_)`
- `public StructurePlaceSettings setIgnoreEntities(boolean p_74393_)`
- `public StructurePlaceSettings setBoundingBox(BoundingBox p_74382_)`
- `public StructurePlaceSettings setRandom(@Nullable  RandomSource p_230325_)`
- `public StructurePlaceSettings setKeepLiquids(boolean p_163783_)`
- `public StructurePlaceSettings setKnownShape(boolean p_74403_)`
- `public StructurePlaceSettings clearProcessors()`
- `public StructurePlaceSettings addProcessor(StructureProcessor p_74384_)`
- `public StructurePlaceSettings popProcessor(StructureProcessor p_74398_)`
- `public Mirror getMirror()`
- `public Rotation getRotation()`
- `public BlockPos getRotationPivot()`
- `public RandomSource getRandom(@Nullable  BlockPos p_230327_)`
- `public boolean isIgnoreEntities()`
- `@Nullable public BoundingBox getBoundingBox()`
- `public boolean getKnownShape()`
- `public List<StructureProcessor> getProcessors()`
- `public boolean shouldKeepLiquids()`
- `public StructureTemplate.Palette getRandomPalette(List<StructureTemplate.Palette> p_74388_,  @Nullable  BlockPos p_74389_)`
- `public StructurePlaceSettings setFinalizeEntities(boolean p_74406_)`
- `public boolean shouldFinalizeEntities()`

## StructureProcessor

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor`

### Methods
- `@Deprecated @Nullable public StructureTemplate.StructureBlockInfo processBlock(LevelReader p_74416_,  BlockPos p_74417_,  BlockPos p_74418_,  StructureTemplate.StructureBlockInfo p_74419_,  StructureTemplate.StructureBlockInfo p_74420_,  StructurePlaceSettings p_74421_)` (deprecated)
- `protected abstract StructureProcessorType<?> getType()`
- `@Nullable public StructureTemplate.StructureBlockInfo process(LevelReader p_74140_,  BlockPos p_74141_,  BlockPos p_74142_,  StructureTemplate.StructureBlockInfo p_74143_,  StructureTemplate.StructureBlockInfo p_74144_,  StructurePlaceSettings p_74145_,  @Nullable  StructureTemplate template)`
- `public StructureTemplate.StructureEntityInfo processEntity(LevelReader world,  BlockPos seedPos,  StructureTemplate.StructureEntityInfo rawEntityInfo,  StructureTemplate.StructureEntityInfo entityInfo,  StructurePlaceSettings placementSettings,  StructureTemplate template)`
  FORGE: Add entity processing.
  
   Use this method to process entities from a structure in much the same way as
   blocks, parameters are analogous.
  - param: world -
  - param: seedPos -
  - param: rawEntityInfo -
  - param: entityInfo -
  - param: placementSettings -
  - param: template -
- `public List<StructureTemplate.StructureBlockInfo> finalizeProcessing(ServerLevelAccessor p_278247_,  BlockPos p_277590_,  BlockPos p_277935_,  List<StructureTemplate.StructureBlockInfo> p_278070_,  List<StructureTemplate.StructureBlockInfo> p_278053_,  StructurePlaceSettings p_277497_)`

## StructureProcessorList

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorList`

### Fields
- `private final List<StructureProcessor> list`

### Methods
- `public List<StructureProcessor> list()`
- `public String toString()`

## StructureProcessorType

*interface* `net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorType`

### Fields
- `static final com.mojang.serialization.Codec<StructureProcessor> SINGLE_CODEC`
- `static final com.mojang.serialization.Codec<StructureProcessorList> LIST_OBJECT_CODEC`
- `static final com.mojang.serialization.Codec<StructureProcessorList> DIRECT_CODEC`
- `static final com.mojang.serialization.Codec<Holder<StructureProcessorList>> LIST_CODEC`
- `static final StructureProcessorType<BlockIgnoreProcessor> BLOCK_IGNORE`
- `static final StructureProcessorType<BlockRotProcessor> BLOCK_ROT`
- `static final StructureProcessorType<GravityProcessor> GRAVITY`
- `static final StructureProcessorType<JigsawReplacementProcessor> JIGSAW_REPLACEMENT`
- `static final StructureProcessorType<RuleProcessor> RULE`
- `static final StructureProcessorType<NopProcessor> NOP`
- `static final StructureProcessorType<BlockAgeProcessor> BLOCK_AGE`
- `static final StructureProcessorType<BlackstoneReplaceProcessor> BLACKSTONE_REPLACE`
- `static final StructureProcessorType<LavaSubmergedBlockProcessor> LAVA_SUBMERGED_BLOCK`
- `static final StructureProcessorType<ProtectedBlockProcessor> PROTECTED_BLOCKS`
- `static final StructureProcessorType<CappedProcessor> CAPPED`

### Methods
- `com.mojang.serialization.Codec<P> codec()`
- `static <P extends StructureProcessor> StructureProcessorType<P> register(String p_74477_,  com.mojang.serialization.Codec<P> p_74478_)`

## StructureTemplate

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate`

### Fields
- `public static final String PALETTE_TAG` (= "palette")
- `public static final String PALETTE_LIST_TAG` (= "palettes")
- `public static final String ENTITIES_TAG` (= "entities")
- `public static final String BLOCKS_TAG` (= "blocks")
- `public static final String BLOCK_TAG_POS` (= "pos")
- `public static final String BLOCK_TAG_STATE` (= "state")
- `public static final String BLOCK_TAG_NBT` (= "nbt")
- `public static final String ENTITY_TAG_POS` (= "pos")
- `public static final String ENTITY_TAG_BLOCKPOS` (= "blockPos")
- `public static final String ENTITY_TAG_NBT` (= "nbt")
- `public static final String SIZE_TAG` (= "size")
- `private final List<StructureTemplate.Palette> palettes`
- `private final List<StructureTemplate.StructureEntityInfo> entityInfoList`
- `private Vec3i size`
- `private String author`

### Methods
- `public Vec3i getSize()`
- `public void setAuthor(String p_74613_)`
- `public String getAuthor()`
- `public void fillFromWorld(Level p_163803_,  BlockPos p_163804_,  Vec3i p_163805_,  boolean p_163806_,  @Nullable  Block p_163807_)`
- `private static void addToLists(StructureTemplate.StructureBlockInfo p_74574_,  List<StructureTemplate.StructureBlockInfo> p_74575_,  List<StructureTemplate.StructureBlockInfo> p_74576_,  List<StructureTemplate.StructureBlockInfo> p_74577_)`
- `private static List<StructureTemplate.StructureBlockInfo> buildInfoList(List<StructureTemplate.StructureBlockInfo> p_74615_,  List<StructureTemplate.StructureBlockInfo> p_74616_,  List<StructureTemplate.StructureBlockInfo> p_74617_)`
- `private void fillEntityList(Level p_74501_,  BlockPos p_74502_,  BlockPos p_74503_)`
- `public List<StructureTemplate.StructureBlockInfo> filterBlocks(BlockPos p_74604_,  StructurePlaceSettings p_74605_,  Block p_74606_)`
- `public it.unimi.dsi.fastutil.objects.ObjectArrayList<StructureTemplate.StructureBlockInfo> filterBlocks(BlockPos p_230336_,  StructurePlaceSettings p_230337_,  Block p_230338_,  boolean p_230339_)`
- `public BlockPos calculateConnectedPosition(StructurePlaceSettings p_74567_,  BlockPos p_74568_,  StructurePlaceSettings p_74569_,  BlockPos p_74570_)`
- `public static BlockPos calculateRelativePosition(StructurePlaceSettings p_74564_,  BlockPos p_74565_)`
- `public static Vec3 transformedVec3d(StructurePlaceSettings placementIn,  Vec3 pos)`
- `public boolean placeInWorld(ServerLevelAccessor p_230329_,  BlockPos p_230330_,  BlockPos p_230331_,  StructurePlaceSettings p_230332_,  RandomSource p_230333_,  int p_230334_)`
- `public static void updateShapeAtEdge(LevelAccessor p_74511_,  int p_74512_,  DiscreteVoxelShape p_74513_,  int p_74514_,  int p_74515_,  int p_74516_)`
- `@Deprecated public static List<StructureTemplate.StructureBlockInfo> processBlockInfos(ServerLevelAccessor p_278297_,  BlockPos p_74519_,  BlockPos p_74520_,  StructurePlaceSettings p_74521_,  List<StructureTemplate.StructureBlockInfo> p_74522_)` (deprecated)
- `public static List<StructureTemplate.StructureBlockInfo> processBlockInfos(ServerLevelAccessor p_278297_,  BlockPos p_74519_,  BlockPos p_74520_,  StructurePlaceSettings p_74521_,  List<StructureTemplate.StructureBlockInfo> p_74522_,  @Nullable  StructureTemplate template)`
- `public static List<StructureTemplate.StructureEntityInfo> processEntityInfos(@Nullable  StructureTemplate template,  LevelAccessor p_215387_0_,  BlockPos p_215387_1_,  StructurePlaceSettings p_215387_2_,  List<StructureTemplate.StructureEntityInfo> p_215387_3_)`
- `private void addEntitiesToWorld(ServerLevelAccessor p_74524_,  BlockPos p_74525_,  StructurePlaceSettings placementIn)`
- `private static Optional<Entity> createEntityIgnoreException(ServerLevelAccessor p_74544_,  CompoundTag p_74545_)`
- `public Vec3i getSize(Rotation p_163809_)`
- `public static BlockPos transform(BlockPos p_74594_,  Mirror p_74595_,  Rotation p_74596_,  BlockPos p_74597_)`
- `public static Vec3 transform(Vec3 p_74579_,  Mirror p_74580_,  Rotation p_74581_,  BlockPos p_74582_)`
- `public BlockPos getZeroPositionWithTransform(BlockPos p_74584_,  Mirror p_74585_,  Rotation p_74586_)`
- `public static BlockPos getZeroPositionWithTransform(BlockPos p_74588_,  Mirror p_74589_,  Rotation p_74590_,  int p_74591_,  int p_74592_)`
- `public BoundingBox getBoundingBox(StructurePlaceSettings p_74634_,  BlockPos p_74635_)`
- `public BoundingBox getBoundingBox(BlockPos p_74599_,  Rotation p_74600_,  BlockPos p_74601_,  Mirror p_74602_)`
- `protected static BoundingBox getBoundingBox(BlockPos p_163811_,  Rotation p_163812_,  BlockPos p_163813_,  Mirror p_163814_,  Vec3i p_163815_)`
- `public CompoundTag save(CompoundTag p_74619_)`
- `public void load(HolderGetter<Block> p_255773_,  CompoundTag p_248574_)`
- `private void loadPalette(HolderGetter<Block> p_256546_,  ListTag p_251056_,  ListTag p_251493_)`
- `private ListTag newIntegerList(int... p_74626_)`
- `private ListTag newDoubleList(double... p_74624_)`

## StructureTemplate.Palette

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate.Palette`

Enclosing class: StructureTemplate

### Fields
- `private final List<StructureTemplate.StructureBlockInfo> blocks`
- `private final Map<Block,List<StructureTemplate.StructureBlockInfo>> cache`

### Methods
- `public List<StructureTemplate.StructureBlockInfo> blocks()`
- `public List<StructureTemplate.StructureBlockInfo> blocks(Block p_74654_)`

## StructureTemplate.SimplePalette

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate.SimplePalette`

Enclosing class: StructureTemplate

### Fields
- `public static final BlockState DEFAULT_BLOCK_STATE`
- `private final IdMapper<BlockState> ids`
- `private int lastId`

### Methods
- `public int idFor(BlockState p_74670_)`
- `@Nullable public BlockState stateFor(int p_74668_)`
- `public Iterator<BlockState> iterator()`
- `public void addMapping(BlockState p_74672_,  int p_74673_)`

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `spliterator`

## StructureTemplate.StructureBlockInfo

*record* `net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate.StructureBlockInfo`

Enclosing class: StructureTemplate

### Fields
- `private final BlockPos pos`
  The field for the pos record component.
- `private final BlockState state`
  The field for the state record component.
- `@Nullable private final CompoundTag nbt`
  The field for the nbt record component.

### Methods
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
- `public BlockPos pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component
- `public BlockState state()`
  Returns the value of the state record component.
  - returns: the value of the state record component
- `@Nullable public CompoundTag nbt()`
  Returns the value of the nbt record component.
  - returns: the value of the nbt record component

## StructureTemplate.StructureEntityInfo

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate.StructureEntityInfo`

Enclosing class: StructureTemplate

### Fields
- `public final Vec3 pos`
- `public final BlockPos blockPos`
- `public final CompoundTag nbt`

## StructureTemplateManager

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final String STRUCTURE_DIRECTORY_NAME` (= "structures")
- `private static final String TEST_STRUCTURES_DIR` (= "gameteststructures")
- `private static final String STRUCTURE_FILE_EXTENSION` (= ".nbt")
- `private static final String STRUCTURE_TEXT_FILE_EXTENSION` (= ".snbt")
- `private final Map<ResourceLocation,Optional<StructureTemplate>> structureRepository`
- `private final com.mojang.datafixers.DataFixer fixerUpper`
- `private ResourceManager resourceManager`
- `private final Path generatedDir`
- `private final List<StructureTemplateManager.Source> sources`
- `private final HolderGetter<Block> blockLookup`
- `private static final FileToIdConverter LISTER`

### Methods
- `public StructureTemplate getOrCreate(ResourceLocation p_230360_)`
- `public Optional<StructureTemplate> get(ResourceLocation p_230408_)`
- `public Stream<ResourceLocation> listTemplates()`
- `private Optional<StructureTemplate> tryLoad(ResourceLocation p_230426_)`
- `public void onResourceManagerReload(ResourceManager p_230371_)`
- `private Optional<StructureTemplate> loadFromResource(ResourceLocation p_230428_)`
- `private Stream<ResourceLocation> listResources()`
- `private Optional<StructureTemplate> loadFromTestStructures(ResourceLocation p_230430_)`
- `private Stream<ResourceLocation> listTestStructures()`
- `private Optional<StructureTemplate> loadFromGenerated(ResourceLocation p_230432_)`
- `private Stream<ResourceLocation> listGenerated()`
- `private Stream<ResourceLocation> listGeneratedInNamespace(Path p_230389_)`
- `private Stream<ResourceLocation> listFolderContents(Path p_230395_,  String p_230396_,  String p_230397_)`
- `private String relativize(Path p_230402_,  Path p_230403_)`
- `private Optional<StructureTemplate> loadFromSnbt(ResourceLocation p_230368_,  Path p_230369_)`
- `private Optional<StructureTemplate> load(StructureTemplateManager.InputStreamOpener p_230373_,  Consumer<Throwable> p_230374_)`
- `private StructureTemplate readStructure(InputStream p_230378_)  throws IOException`
  - throws: IOException
- `public StructureTemplate readStructure(CompoundTag p_230405_)`
- `public boolean save(ResourceLocation p_230417_)`
- `public Path getPathToGeneratedStructure(ResourceLocation p_230362_,  String p_230363_)`
- `public static Path createPathToStructure(Path p_230391_,  ResourceLocation p_230392_,  String p_230393_)`
- `private static Path createAndValidatePathToStructure(Path p_230412_,  ResourceLocation p_230413_,  String p_230414_)`
- `public void remove(ResourceLocation p_230422_)`

## StructureTemplateManager.InputStreamOpener

*interface* `net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager.InputStreamOpener`

Enclosing class: StructureTemplateManager

### Methods
- `InputStream open()  throws IOException`
  - throws: IOException

## StructureTemplateManager.Source

*record* `net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager.Source`

Enclosing class: StructureTemplateManager

### Fields
- `private final Function<ResourceLocation,Optional<StructureTemplate>> loader`
  The field for the loader record component.
- `private final Supplier<Stream<ResourceLocation>> lister`
  The field for the lister record component.

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
- `public Function<ResourceLocation,Optional<StructureTemplate>> loader()`
  Returns the value of the loader record component.
  - returns: the value of the loader record component
- `public Supplier<Stream<ResourceLocation>> lister()`
  Returns the value of the lister record component.
  - returns: the value of the lister record component

## TagMatchTest

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.TagMatchTest`

### Fields
- `public static final com.mojang.serialization.Codec<TagMatchTest> CODEC`
- `private final TagKey<Block> tag`

### Methods
- `public boolean test(BlockState p_230452_,  RandomSource p_230453_)`
- `protected RuleTestType<?> getType()`
