# net.minecraft.world.level.levelgen.blockpredicates

- [AllOfPredicate](#allofpredicate)
- [AnyOfPredicate](#anyofpredicate)
- [BlockPredicate](#blockpredicate)
- [BlockPredicateType](#blockpredicatetype)
- [CombiningPredicate](#combiningpredicate)
- [HasSturdyFacePredicate](#hassturdyfacepredicate)
- [InsideWorldBoundsPredicate](#insideworldboundspredicate)
- [MatchingBlocksPredicate](#matchingblockspredicate)
- [MatchingBlockTagPredicate](#matchingblocktagpredicate)
- [MatchingFluidsPredicate](#matchingfluidspredicate)
- [NotPredicate](#notpredicate)
- [ReplaceablePredicate](#replaceablepredicate)
- [SolidPredicate](#solidpredicate)
- [StateTestingPredicate](#statetestingpredicate)
- [TrueBlockPredicate](#trueblockpredicate)
- [WouldSurvivePredicate](#wouldsurvivepredicate)
## AllOfPredicate

*class* `net.minecraft.world.level.levelgen.blockpredicates.AllOfPredicate`

### Fields
- `public static final com.mojang.serialization.Codec<AllOfPredicate> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.blockpredicates.CombiningPredicate`: `predicates`
- from `net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate`: `ONLY_IN_AIR_OR_WATER_PREDICATE`, `ONLY_IN_AIR_PREDICATE`

### Methods
- `public boolean test(WorldGenLevel p_190376_,  BlockPos p_190377_)`
- `public BlockPredicateType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.blockpredicates.CombiningPredicate`: `codec`
- from `java.util.function.BiPredicate`: `and`, `negate`, `or`

## AnyOfPredicate

*class* `net.minecraft.world.level.levelgen.blockpredicates.AnyOfPredicate`

### Fields
- `public static final com.mojang.serialization.Codec<AnyOfPredicate> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.blockpredicates.CombiningPredicate`: `predicates`
- from `net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate`: `ONLY_IN_AIR_OR_WATER_PREDICATE`, `ONLY_IN_AIR_PREDICATE`

### Methods
- `public boolean test(WorldGenLevel p_190387_,  BlockPos p_190388_)`
- `public BlockPredicateType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.blockpredicates.CombiningPredicate`: `codec`
- from `java.util.function.BiPredicate`: `and`, `negate`, `or`

## BlockPredicate

*interface* `net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate`

All Superinterfaces: BiPredicate<WorldGenLevel, BlockPos>

### Fields
- `static final com.mojang.serialization.Codec<BlockPredicate> CODEC`
- `static final BlockPredicate ONLY_IN_AIR_PREDICATE`
- `static final BlockPredicate ONLY_IN_AIR_OR_WATER_PREDICATE`

### Methods
- `BlockPredicateType<?> type()`
- `static BlockPredicate allOf(List<BlockPredicate> p_190413_)`
- `static BlockPredicate allOf(BlockPredicate... p_190418_)`
- `static BlockPredicate allOf(BlockPredicate p_190405_,  BlockPredicate p_190406_)`
- `static BlockPredicate anyOf(List<BlockPredicate> p_190426_)`
- `static BlockPredicate anyOf(BlockPredicate... p_190431_)`
- `static BlockPredicate anyOf(BlockPredicate p_190421_,  BlockPredicate p_190422_)`
- `static BlockPredicate matchesBlocks(Vec3i p_224772_,  List<Block> p_224773_)`
- `static BlockPredicate matchesBlocks(List<Block> p_198312_)`
- `static BlockPredicate matchesBlocks(Vec3i p_224775_,  Block... p_224776_)`
- `static BlockPredicate matchesBlocks(Block... p_224781_)`
- `static BlockPredicate matchesTag(Vec3i p_224769_,  TagKey<Block> p_224770_)`
- `static BlockPredicate matchesTag(TagKey<Block> p_204678_)`
- `static BlockPredicate matchesFluids(Vec3i p_224785_,  List<Fluid> p_224786_)`
- `static BlockPredicate matchesFluids(Vec3i p_224778_,  Fluid... p_224779_)`
- `static BlockPredicate matchesFluids(Fluid... p_224783_)`
- `static BlockPredicate not(BlockPredicate p_190403_)`
- `static BlockPredicate replaceable(Vec3i p_190411_)`
- `static BlockPredicate replaceable()`
- `static BlockPredicate wouldSurvive(BlockState p_190400_,  Vec3i p_190401_)`
- `static BlockPredicate hasSturdyFace(Vec3i p_198309_,  Direction p_198310_)`
- `static BlockPredicate hasSturdyFace(Direction p_198914_)`
- `static BlockPredicate solid(Vec3i p_190424_)`
- `static BlockPredicate solid()`
- `static BlockPredicate noFluid()`
- `static BlockPredicate noFluid(Vec3i p_249383_)`
- `static BlockPredicate insideWorld(Vec3i p_190434_)`
- `static BlockPredicate alwaysTrue()`

### Inherited methods
- from `java.util.function.BiPredicate`: `and`, `negate`, `or`, `test`

## BlockPredicateType

*interface* `net.minecraft.world.level.levelgen.blockpredicates.BlockPredicateType`

### Fields
- `static final BlockPredicateType<MatchingBlocksPredicate> MATCHING_BLOCKS`
- `static final BlockPredicateType<MatchingBlockTagPredicate> MATCHING_BLOCK_TAG`
- `static final BlockPredicateType<MatchingFluidsPredicate> MATCHING_FLUIDS`
- `static final BlockPredicateType<HasSturdyFacePredicate> HAS_STURDY_FACE`
- `static final BlockPredicateType<SolidPredicate> SOLID`
- `static final BlockPredicateType<ReplaceablePredicate> REPLACEABLE`
- `static final BlockPredicateType<WouldSurvivePredicate> WOULD_SURVIVE`
- `static final BlockPredicateType<InsideWorldBoundsPredicate> INSIDE_WORLD_BOUNDS`
- `static final BlockPredicateType<AnyOfPredicate> ANY_OF`
- `static final BlockPredicateType<AllOfPredicate> ALL_OF`
- `static final BlockPredicateType<NotPredicate> NOT`
- `static final BlockPredicateType<TrueBlockPredicate> TRUE`

### Methods
- `com.mojang.serialization.Codec<P> codec()`
- `private static <P extends BlockPredicate> BlockPredicateType<P> register(String p_190450_,  com.mojang.serialization.Codec<P> p_190451_)`

## CombiningPredicate

*class* `net.minecraft.world.level.levelgen.blockpredicates.CombiningPredicate`

### Fields
- `protected final List<BlockPredicate> predicates`

### Inherited fields
- from `net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate`: `CODEC`, `ONLY_IN_AIR_OR_WATER_PREDICATE`, `ONLY_IN_AIR_PREDICATE`

### Methods
- `public static <T extends CombiningPredicate> com.mojang.serialization.Codec<T> codec(Function<List<BlockPredicate>,T> p_190459_)`

### Inherited methods
- from `java.util.function.BiPredicate`: `and`, `negate`, `or`, `test`
- from `net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate`: `type`

## HasSturdyFacePredicate

*class* `net.minecraft.world.level.levelgen.blockpredicates.HasSturdyFacePredicate`

### Fields
- `private final Vec3i offset`
- `private final Direction direction`
- `public static final com.mojang.serialization.Codec<HasSturdyFacePredicate> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate`: `ONLY_IN_AIR_OR_WATER_PREDICATE`, `ONLY_IN_AIR_PREDICATE`

### Methods
- `public boolean test(WorldGenLevel p_198324_,  BlockPos p_198325_)`
- `public BlockPredicateType<?> type()`

### Inherited methods
- from `java.util.function.BiPredicate`: `and`, `negate`, `or`

## InsideWorldBoundsPredicate

*class* `net.minecraft.world.level.levelgen.blockpredicates.InsideWorldBoundsPredicate`

### Fields
- `public static final com.mojang.serialization.Codec<InsideWorldBoundsPredicate> CODEC`
- `private final Vec3i offset`

### Inherited fields
- from `net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate`: `ONLY_IN_AIR_OR_WATER_PREDICATE`, `ONLY_IN_AIR_PREDICATE`

### Methods
- `public boolean test(WorldGenLevel p_190470_,  BlockPos p_190471_)`
- `public BlockPredicateType<?> type()`

### Inherited methods
- from `java.util.function.BiPredicate`: `and`, `negate`, `or`

## MatchingBlocksPredicate

*class* `net.minecraft.world.level.levelgen.blockpredicates.MatchingBlocksPredicate`

### Fields
- `private final HolderSet<Block> blocks`
- `public static final com.mojang.serialization.Codec<MatchingBlocksPredicate> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.blockpredicates.StateTestingPredicate`: `offset`
- from `net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate`: `ONLY_IN_AIR_OR_WATER_PREDICATE`, `ONLY_IN_AIR_PREDICATE`

### Methods
- `protected boolean test(BlockState p_190487_)`
- `public BlockPredicateType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.blockpredicates.StateTestingPredicate`: `stateTestingCodec`, `test`
- from `java.util.function.BiPredicate`: `and`, `negate`, `or`

## MatchingBlockTagPredicate

*class* `net.minecraft.world.level.levelgen.blockpredicates.MatchingBlockTagPredicate`

### Fields
- `final TagKey<Block> tag`
- `public static final com.mojang.serialization.Codec<MatchingBlockTagPredicate> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.blockpredicates.StateTestingPredicate`: `offset`
- from `net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate`: `ONLY_IN_AIR_OR_WATER_PREDICATE`, `ONLY_IN_AIR_PREDICATE`

### Methods
- `protected boolean test(BlockState p_198343_)`
- `public BlockPredicateType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.blockpredicates.StateTestingPredicate`: `stateTestingCodec`, `test`
- from `java.util.function.BiPredicate`: `and`, `negate`, `or`

## MatchingFluidsPredicate

*class* `net.minecraft.world.level.levelgen.blockpredicates.MatchingFluidsPredicate`

### Fields
- `private final HolderSet<Fluid> fluids`
- `public static final com.mojang.serialization.Codec<MatchingFluidsPredicate> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.blockpredicates.StateTestingPredicate`: `offset`
- from `net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate`: `ONLY_IN_AIR_OR_WATER_PREDICATE`, `ONLY_IN_AIR_PREDICATE`

### Methods
- `protected boolean test(BlockState p_190500_)`
- `public BlockPredicateType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.blockpredicates.StateTestingPredicate`: `stateTestingCodec`, `test`
- from `java.util.function.BiPredicate`: `and`, `negate`, `or`

## NotPredicate

*class* `net.minecraft.world.level.levelgen.blockpredicates.NotPredicate`

### Fields
- `public static final com.mojang.serialization.Codec<NotPredicate> CODEC`
- `private final BlockPredicate predicate`

### Inherited fields
- from `net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate`: `ONLY_IN_AIR_OR_WATER_PREDICATE`, `ONLY_IN_AIR_PREDICATE`

### Methods
- `public boolean test(WorldGenLevel p_190512_,  BlockPos p_190513_)`
- `public BlockPredicateType<?> type()`

### Inherited methods
- from `java.util.function.BiPredicate`: `and`, `negate`, `or`

## ReplaceablePredicate

*class* `net.minecraft.world.level.levelgen.blockpredicates.ReplaceablePredicate`

### Fields
- `public static final com.mojang.serialization.Codec<ReplaceablePredicate> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.blockpredicates.StateTestingPredicate`: `offset`
- from `net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate`: `ONLY_IN_AIR_OR_WATER_PREDICATE`, `ONLY_IN_AIR_PREDICATE`

### Methods
- `protected boolean test(BlockState p_190527_)`
- `public BlockPredicateType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.blockpredicates.StateTestingPredicate`: `stateTestingCodec`, `test`
- from `java.util.function.BiPredicate`: `and`, `negate`, `or`

## SolidPredicate

*class* `net.minecraft.world.level.levelgen.blockpredicates.SolidPredicate`

### Fields
- `public static final com.mojang.serialization.Codec<SolidPredicate> CODEC` (deprecated)

### Inherited fields
- from `net.minecraft.world.level.levelgen.blockpredicates.StateTestingPredicate`: `offset`
- from `net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate`: `ONLY_IN_AIR_OR_WATER_PREDICATE`, `ONLY_IN_AIR_PREDICATE`

### Methods
- `protected boolean test(BlockState p_190536_)` (deprecated)
- `public BlockPredicateType<?> type()` (deprecated)

### Inherited methods
- from `net.minecraft.world.level.levelgen.blockpredicates.StateTestingPredicate`: `stateTestingCodec`, `test`
- from `java.util.function.BiPredicate`: `and`, `negate`, `or`

## StateTestingPredicate

*class* `net.minecraft.world.level.levelgen.blockpredicates.StateTestingPredicate`

### Fields
- `protected final Vec3i offset`

### Inherited fields
- from `net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate`: `CODEC`, `ONLY_IN_AIR_OR_WATER_PREDICATE`, `ONLY_IN_AIR_PREDICATE`

### Methods
- `protected static <P extends StateTestingPredicate> com.mojang.datafixers.Products.P1<com.mojang.serialization.codecs.RecordCodecBuilder.Mu<P>,Vec3i> stateTestingCodec(com.mojang.serialization.codecs.RecordCodecBuilder.Instance<P> p_190547_)`
- `public final boolean test(WorldGenLevel p_190543_,  BlockPos p_190544_)`
- `protected abstract boolean test(BlockState p_190545_)`

### Inherited methods
- from `java.util.function.BiPredicate`: `and`, `negate`, `or`
- from `net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate`: `type`

## TrueBlockPredicate

*class* `net.minecraft.world.level.levelgen.blockpredicates.TrueBlockPredicate`

### Fields
- `public static TrueBlockPredicate INSTANCE`
- `public static final com.mojang.serialization.Codec<TrueBlockPredicate> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate`: `ONLY_IN_AIR_OR_WATER_PREDICATE`, `ONLY_IN_AIR_PREDICATE`

### Methods
- `public boolean test(WorldGenLevel p_190559_,  BlockPos p_190560_)`
- `public BlockPredicateType<?> type()`

### Inherited methods
- from `java.util.function.BiPredicate`: `and`, `negate`, `or`

## WouldSurvivePredicate

*class* `net.minecraft.world.level.levelgen.blockpredicates.WouldSurvivePredicate`

### Fields
- `public static final com.mojang.serialization.Codec<WouldSurvivePredicate> CODEC`
- `private final Vec3i offset`
- `private final BlockState state`

### Inherited fields
- from `net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate`: `ONLY_IN_AIR_OR_WATER_PREDICATE`, `ONLY_IN_AIR_PREDICATE`

### Methods
- `public boolean test(WorldGenLevel p_190574_,  BlockPos p_190575_)`
- `public BlockPredicateType<?> type()`

### Inherited methods
- from `java.util.function.BiPredicate`: `and`, `negate`, `or`
