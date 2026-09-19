# net.minecraft.world.level.levelgen.feature.stateproviders

- [BlockStateProvider](#blockstateprovider)
- [BlockStateProviderType](#blockstateprovidertype)
- [DualNoiseProvider](#dualnoiseprovider)
- [NoiseBasedStateProvider](#noisebasedstateprovider)
- [NoiseProvider](#noiseprovider)
- [NoiseThresholdProvider](#noisethresholdprovider)
- [RandomizedIntStateProvider](#randomizedintstateprovider)
- [RotatedBlockProvider](#rotatedblockprovider)
- [RuleBasedBlockStateProvider](#rulebasedblockstateprovider)
- [RuleBasedBlockStateProvider.Rule](#rulebasedblockstateprovider.rule)
- [SimpleStateProvider](#simplestateprovider)
- [WeightedStateProvider](#weightedstateprovider)
## BlockStateProvider

*class* `net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider`

### Fields
- `public static final com.mojang.serialization.Codec<BlockStateProvider> CODEC`

### Methods
- `public static SimpleStateProvider simple(BlockState p_191385_)`
- `public static SimpleStateProvider simple(Block p_191383_)`
- `protected abstract BlockStateProviderType<?> type()`
- `public abstract BlockState getState(RandomSource p_225907_,  BlockPos p_225908_)`

## BlockStateProviderType

*class* `net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProviderType`

### Fields
- `public static final BlockStateProviderType<SimpleStateProvider> SIMPLE_STATE_PROVIDER`
- `public static final BlockStateProviderType<WeightedStateProvider> WEIGHTED_STATE_PROVIDER`
- `public static final BlockStateProviderType<NoiseThresholdProvider> NOISE_THRESHOLD_PROVIDER`
- `public static final BlockStateProviderType<NoiseProvider> NOISE_PROVIDER`
- `public static final BlockStateProviderType<DualNoiseProvider> DUAL_NOISE_PROVIDER`
- `public static final BlockStateProviderType<RotatedBlockProvider> ROTATED_BLOCK_PROVIDER`
- `public static final BlockStateProviderType<RandomizedIntStateProvider> RANDOMIZED_INT_STATE_PROVIDER`
- `private final com.mojang.serialization.Codec<P extends BlockStateProvider> codec`

### Methods
- `private static <P extends BlockStateProvider> BlockStateProviderType<P> register(String p_68763_,  com.mojang.serialization.Codec<P> p_68764_)`
- `public com.mojang.serialization.Codec<P> codec()`

## DualNoiseProvider

*class* `net.minecraft.world.level.levelgen.feature.stateproviders.DualNoiseProvider`

### Fields
- `public static final com.mojang.serialization.Codec<DualNoiseProvider> CODEC`
- `private final InclusiveRange<Integer> variety`
- `private final NormalNoise.NoiseParameters slowNoiseParameters`
- `private final float slowScale`
- `private final NormalNoise slowNoise`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.stateproviders.NoiseProvider`: `states`
- from `net.minecraft.world.level.levelgen.feature.stateproviders.NoiseBasedStateProvider`: `noise`, `parameters`, `scale`, `seed`

### Methods
- `protected BlockStateProviderType<?> type()`
- `public BlockState getState(RandomSource p_225910_,  BlockPos p_225911_)`
- `protected double getSlowNoiseValue(BlockPos p_191407_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.stateproviders.NoiseProvider`: `getRandomState`, `getRandomState`, `noiseProviderCodec`
- from `net.minecraft.world.level.levelgen.feature.stateproviders.NoiseBasedStateProvider`: `getNoiseValue`, `noiseCodec`
- from `net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider`: `simple`, `simple`

## NoiseBasedStateProvider

*class* `net.minecraft.world.level.levelgen.feature.stateproviders.NoiseBasedStateProvider`

### Fields
- `protected final long seed`
- `protected final NormalNoise.NoiseParameters parameters`
- `protected final float scale`
- `protected final NormalNoise noise`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider`: `CODEC`

### Methods
- `protected static <P extends NoiseBasedStateProvider> com.mojang.datafixers.Products.P3<com.mojang.serialization.codecs.RecordCodecBuilder.Mu<P>,Long,NormalNoise.NoiseParameters,Float> noiseCodec(com.mojang.serialization.codecs.RecordCodecBuilder.Instance<P> p_191426_)`
- `protected double getNoiseValue(BlockPos p_191430_,  double p_191431_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider`: `getState`, `simple`, `simple`, `type`

## NoiseProvider

*class* `net.minecraft.world.level.levelgen.feature.stateproviders.NoiseProvider`

### Fields
- `public static final com.mojang.serialization.Codec<NoiseProvider> CODEC`
- `protected final List<BlockState> states`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.stateproviders.NoiseBasedStateProvider`: `noise`, `parameters`, `scale`, `seed`

### Methods
- `protected static <P extends NoiseProvider> com.mojang.datafixers.Products.P4<com.mojang.serialization.codecs.RecordCodecBuilder.Mu<P>,Long,NormalNoise.NoiseParameters,Float,List<BlockState>> noiseProviderCodec(com.mojang.serialization.codecs.RecordCodecBuilder.Instance<P> p_191460_)`
- `protected BlockStateProviderType<?> type()`
- `public BlockState getState(RandomSource p_225913_,  BlockPos p_225914_)`
- `protected BlockState getRandomState(List<BlockState> p_191453_,  BlockPos p_191454_,  double p_191455_)`
- `protected BlockState getRandomState(List<BlockState> p_191450_,  double p_191451_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.stateproviders.NoiseBasedStateProvider`: `getNoiseValue`, `noiseCodec`
- from `net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider`: `simple`, `simple`

## NoiseThresholdProvider

*class* `net.minecraft.world.level.levelgen.feature.stateproviders.NoiseThresholdProvider`

### Fields
- `public static final com.mojang.serialization.Codec<NoiseThresholdProvider> CODEC`
- `private final float threshold`
- `private final float highChance`
- `private final BlockState defaultState`
- `private final List<BlockState> lowStates`
- `private final List<BlockState> highStates`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.stateproviders.NoiseBasedStateProvider`: `noise`, `parameters`, `scale`, `seed`

### Methods
- `protected BlockStateProviderType<?> type()`
- `public BlockState getState(RandomSource p_225916_,  BlockPos p_225917_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.stateproviders.NoiseBasedStateProvider`: `getNoiseValue`, `noiseCodec`
- from `net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider`: `simple`, `simple`

## RandomizedIntStateProvider

*class* `net.minecraft.world.level.levelgen.feature.stateproviders.RandomizedIntStateProvider`

### Fields
- `public static final com.mojang.serialization.Codec<RandomizedIntStateProvider> CODEC`
- `private final BlockStateProvider source`
- `private final String propertyName`
- `@Nullable private IntegerProperty property`
- `private final IntProvider values`

### Methods
- `protected BlockStateProviderType<?> type()`
- `public BlockState getState(RandomSource p_225919_,  BlockPos p_225920_)`
- `private static IntegerProperty findProperty(BlockState p_161571_,  String p_161572_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider`: `simple`, `simple`

## RotatedBlockProvider

*class* `net.minecraft.world.level.levelgen.feature.stateproviders.RotatedBlockProvider`

### Fields
- `public static final com.mojang.serialization.Codec<RotatedBlockProvider> CODEC`
- `private final Block block`

### Methods
- `protected BlockStateProviderType<?> type()`
- `public BlockState getState(RandomSource p_225922_,  BlockPos p_225923_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider`: `simple`, `simple`

## RuleBasedBlockStateProvider

*record* `net.minecraft.world.level.levelgen.feature.stateproviders.RuleBasedBlockStateProvider`

### Fields
- `private final BlockStateProvider fallback`
  The field for the fallback record component.
- `private final List<RuleBasedBlockStateProvider.Rule> rules`
  The field for the rules record component.
- `public static final com.mojang.serialization.Codec<RuleBasedBlockStateProvider> CODEC`

### Methods
- `public static RuleBasedBlockStateProvider simple(BlockStateProvider p_225941_)`
- `public static RuleBasedBlockStateProvider simple(Block p_225937_)`
- `public BlockState getState(WorldGenLevel p_225933_,  RandomSource p_225934_,  BlockPos p_225935_)`
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
- `public BlockStateProvider fallback()`
  Returns the value of the fallback record component.
  - returns: the value of the fallback record component
- `public List<RuleBasedBlockStateProvider.Rule> rules()`
  Returns the value of the rules record component.
  - returns: the value of the rules record component

## RuleBasedBlockStateProvider.Rule

*record* `net.minecraft.world.level.levelgen.feature.stateproviders.RuleBasedBlockStateProvider.Rule`

Enclosing class: RuleBasedBlockStateProvider

### Fields
- `private final BlockPredicate ifTrue`
  The field for the ifTrue record component.
- `private final BlockStateProvider then`
  The field for the then record component.
- `public static final com.mojang.serialization.Codec<RuleBasedBlockStateProvider.Rule> CODEC`

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
- `public BlockPredicate ifTrue()`
  Returns the value of the ifTrue record component.
  - returns: the value of the ifTrue record component
- `public BlockStateProvider then()`
  Returns the value of the then record component.
  - returns: the value of the then record component

## SimpleStateProvider

*class* `net.minecraft.world.level.levelgen.feature.stateproviders.SimpleStateProvider`

### Fields
- `public static final com.mojang.serialization.Codec<SimpleStateProvider> CODEC`
- `private final BlockState state`

### Methods
- `protected BlockStateProviderType<?> type()`
- `public BlockState getState(RandomSource p_225963_,  BlockPos p_225964_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider`: `simple`, `simple`

## WeightedStateProvider

*class* `net.minecraft.world.level.levelgen.feature.stateproviders.WeightedStateProvider`

### Fields
- `public static final com.mojang.serialization.Codec<WeightedStateProvider> CODEC`
- `private final SimpleWeightedRandomList<BlockState> weightedList`

### Methods
- `private static com.mojang.serialization.DataResult<WeightedStateProvider> create(SimpleWeightedRandomList<BlockState> p_161598_)`
- `protected BlockStateProviderType<?> type()`
- `public BlockState getState(RandomSource p_225966_,  BlockPos p_225967_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider`: `simple`, `simple`
