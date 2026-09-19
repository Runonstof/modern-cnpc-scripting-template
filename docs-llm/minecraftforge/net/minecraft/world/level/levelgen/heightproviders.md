# net.minecraft.world.level.levelgen.heightproviders

- [BiasedToBottomHeight](#biasedtobottomheight)
- [ConstantHeight](#constantheight)
- [HeightProvider](#heightprovider)
- [HeightProviderType](#heightprovidertype)
- [TrapezoidHeight](#trapezoidheight)
- [UniformHeight](#uniformheight)
- [VeryBiasedToBottomHeight](#verybiasedtobottomheight)
- [WeightedListHeight](#weightedlistheight)
## BiasedToBottomHeight

*class* `net.minecraft.world.level.levelgen.heightproviders.BiasedToBottomHeight`

### Fields
- `public static final com.mojang.serialization.Codec<BiasedToBottomHeight> CODEC`
- `private static final org.slf4j.Logger LOGGER`
- `private final VerticalAnchor minInclusive`
- `private final VerticalAnchor maxInclusive`
- `private final int inner`

### Methods
- `public static BiasedToBottomHeight of(VerticalAnchor p_161932_,  VerticalAnchor p_161933_,  int p_161934_)`
- `public int sample(RandomSource p_226297_,  WorldGenerationContext p_226298_)`
- `public HeightProviderType<?> getType()`
- `public String toString()`

## ConstantHeight

*class* `net.minecraft.world.level.levelgen.heightproviders.ConstantHeight`

### Fields
- `public static final ConstantHeight ZERO`
- `public static final com.mojang.serialization.Codec<ConstantHeight> CODEC`
- `private final VerticalAnchor value`

### Methods
- `public static ConstantHeight of(VerticalAnchor p_161957_)`
- `public VerticalAnchor getValue()`
- `public int sample(RandomSource p_226300_,  WorldGenerationContext p_226301_)`
- `public HeightProviderType<?> getType()`
- `public String toString()`

## HeightProvider

*class* `net.minecraft.world.level.levelgen.heightproviders.HeightProvider`

### Fields
- `private static final com.mojang.serialization.Codec<com.mojang.datafixers.util.Either<VerticalAnchor,HeightProvider>> CONSTANT_OR_DISPATCH_CODEC`
- `public static final com.mojang.serialization.Codec<HeightProvider> CODEC`

### Methods
- `public abstract int sample(RandomSource p_226302_,  WorldGenerationContext p_226303_)`
- `public abstract HeightProviderType<?> getType()`

## HeightProviderType

*interface* `net.minecraft.world.level.levelgen.heightproviders.HeightProviderType`

### Fields
- `static final HeightProviderType<ConstantHeight> CONSTANT`
- `static final HeightProviderType<UniformHeight> UNIFORM`
- `static final HeightProviderType<BiasedToBottomHeight> BIASED_TO_BOTTOM`
- `static final HeightProviderType<VeryBiasedToBottomHeight> VERY_BIASED_TO_BOTTOM`
- `static final HeightProviderType<TrapezoidHeight> TRAPEZOID`
- `static final HeightProviderType<WeightedListHeight> WEIGHTED_LIST`

### Methods
- `com.mojang.serialization.Codec<P> codec()`
- `private static <P extends HeightProvider> HeightProviderType<P> register(String p_161990_,  com.mojang.serialization.Codec<P> p_161991_)`

## TrapezoidHeight

*class* `net.minecraft.world.level.levelgen.heightproviders.TrapezoidHeight`

### Fields
- `public static final com.mojang.serialization.Codec<TrapezoidHeight> CODEC`
- `private static final org.slf4j.Logger LOGGER`
- `private final VerticalAnchor minInclusive`
- `private final VerticalAnchor maxInclusive`
- `private final int plateau`

### Methods
- `public static TrapezoidHeight of(VerticalAnchor p_162010_,  VerticalAnchor p_162011_,  int p_162012_)`
- `public static TrapezoidHeight of(VerticalAnchor p_162007_,  VerticalAnchor p_162008_)`
- `public int sample(RandomSource p_226305_,  WorldGenerationContext p_226306_)`
- `public HeightProviderType<?> getType()`
- `public String toString()`

## UniformHeight

*class* `net.minecraft.world.level.levelgen.heightproviders.UniformHeight`

### Fields
- `public static final com.mojang.serialization.Codec<UniformHeight> CODEC`
- `private static final org.slf4j.Logger LOGGER`
- `private final VerticalAnchor minInclusive`
- `private final VerticalAnchor maxInclusive`
- `private final it.unimi.dsi.fastutil.longs.LongSet warnedFor`

### Methods
- `public static UniformHeight of(VerticalAnchor p_162035_,  VerticalAnchor p_162036_)`
- `public int sample(RandomSource p_226308_,  WorldGenerationContext p_226309_)`
- `public HeightProviderType<?> getType()`
- `public String toString()`

## VeryBiasedToBottomHeight

*class* `net.minecraft.world.level.levelgen.heightproviders.VeryBiasedToBottomHeight`

### Fields
- `public static final com.mojang.serialization.Codec<VeryBiasedToBottomHeight> CODEC`
- `private static final org.slf4j.Logger LOGGER`
- `private final VerticalAnchor minInclusive`
- `private final VerticalAnchor maxInclusive`
- `private final int inner`

### Methods
- `public static VeryBiasedToBottomHeight of(VerticalAnchor p_162059_,  VerticalAnchor p_162060_,  int p_162061_)`
- `public int sample(RandomSource p_226311_,  WorldGenerationContext p_226312_)`
- `public HeightProviderType<?> getType()`
- `public String toString()`

## WeightedListHeight

*class* `net.minecraft.world.level.levelgen.heightproviders.WeightedListHeight`

### Fields
- `public static final com.mojang.serialization.Codec<WeightedListHeight> CODEC`
- `private final SimpleWeightedRandomList<HeightProvider> distribution`

### Methods
- `public int sample(RandomSource p_226314_,  WorldGenerationContext p_226315_)`
- `public HeightProviderType<?> getType()`
