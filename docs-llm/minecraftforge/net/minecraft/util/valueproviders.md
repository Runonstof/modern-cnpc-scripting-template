# net.minecraft.util.valueproviders

- [BiasedToBottomInt](#biasedtobottomint)
- [ClampedInt](#clampedint)
- [ClampedNormalFloat](#clampednormalfloat)
- [ClampedNormalInt](#clampednormalint)
- [ConstantFloat](#constantfloat)
- [ConstantInt](#constantint)
- [FloatProvider](#floatprovider)
- [FloatProviderType](#floatprovidertype)
- [IntProvider](#intprovider)
- [IntProviderType](#intprovidertype)
- [MultipliedFloats](#multipliedfloats)
- [SampledFloat](#sampledfloat)
- [TrapezoidFloat](#trapezoidfloat)
- [UniformFloat](#uniformfloat)
- [UniformInt](#uniformint)
- [WeightedListInt](#weightedlistint)
## BiasedToBottomInt

*class* `net.minecraft.util.valueproviders.BiasedToBottomInt`

### Fields
- `public static final com.mojang.serialization.Codec<BiasedToBottomInt> CODEC`
- `private final int minInclusive`
- `private final int maxInclusive`

### Inherited fields
- from `net.minecraft.util.valueproviders.IntProvider`: `NON_NEGATIVE_CODEC`, `POSITIVE_CODEC`

### Methods
- `public static BiasedToBottomInt of(int p_146368_,  int p_146369_)`
- `public int sample(RandomSource p_216832_)`
- `public int getMinValue()`
- `public int getMaxValue()`
- `public IntProviderType<?> getType()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.util.valueproviders.IntProvider`: `codec`, `codec`

## ClampedInt

*class* `net.minecraft.util.valueproviders.ClampedInt`

### Fields
- `public static final com.mojang.serialization.Codec<ClampedInt> CODEC`
- `private final IntProvider source`
- `private final int minInclusive`
- `private final int maxInclusive`

### Inherited fields
- from `net.minecraft.util.valueproviders.IntProvider`: `NON_NEGATIVE_CODEC`, `POSITIVE_CODEC`

### Methods
- `public static ClampedInt of(IntProvider p_146396_,  int p_146397_,  int p_146398_)`
- `public int sample(RandomSource p_216834_)`
- `public int getMinValue()`
- `public int getMaxValue()`
- `public IntProviderType<?> getType()`

### Inherited methods
- from `net.minecraft.util.valueproviders.IntProvider`: `codec`, `codec`

## ClampedNormalFloat

*class* `net.minecraft.util.valueproviders.ClampedNormalFloat`

### Fields
- `public static final com.mojang.serialization.Codec<ClampedNormalFloat> CODEC`
- `private final float mean`
- `private final float deviation`
- `private final float min`
- `private final float max`

### Methods
- `public static ClampedNormalFloat of(float p_146424_,  float p_146425_,  float p_146426_,  float p_146427_)`
- `public float sample(RandomSource p_216836_)`
- `public static float sample(RandomSource p_216838_,  float p_216839_,  float p_216840_,  float p_216841_,  float p_216842_)`
- `public float getMinValue()`
- `public float getMaxValue()`
- `public FloatProviderType<?> getType()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.util.valueproviders.FloatProvider`: `codec`

## ClampedNormalInt

*class* `net.minecraft.util.valueproviders.ClampedNormalInt`

### Fields
- `public static final com.mojang.serialization.Codec<ClampedNormalInt> CODEC`
- `private final float mean`
- `private final float deviation`
- `private final int min_inclusive`
- `private final int max_inclusive`

### Inherited fields
- from `net.minecraft.util.valueproviders.IntProvider`: `NON_NEGATIVE_CODEC`, `POSITIVE_CODEC`

### Methods
- `public static ClampedNormalInt of(float p_185880_,  float p_185881_,  int p_185882_,  int p_185883_)`
- `public int sample(RandomSource p_216844_)`
- `public static int sample(RandomSource p_216846_,  float p_216847_,  float p_216848_,  float p_216849_,  float p_216850_)`
- `public int getMinValue()`
- `public int getMaxValue()`
- `public IntProviderType<?> getType()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.util.valueproviders.IntProvider`: `codec`, `codec`

## ConstantFloat

*class* `net.minecraft.util.valueproviders.ConstantFloat`

### Fields
- `public static final ConstantFloat ZERO`
- `public static final com.mojang.serialization.Codec<ConstantFloat> CODEC`
- `private final float value`

### Methods
- `public static ConstantFloat of(float p_146459_)`
- `public float getValue()`
- `public float sample(RandomSource p_216852_)`
- `public float getMinValue()`
- `public float getMaxValue()`
- `public FloatProviderType<?> getType()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.util.valueproviders.FloatProvider`: `codec`

## ConstantInt

*class* `net.minecraft.util.valueproviders.ConstantInt`

### Fields
- `public static final ConstantInt ZERO`
- `public static final com.mojang.serialization.Codec<ConstantInt> CODEC`
- `private final int value`

### Inherited fields
- from `net.minecraft.util.valueproviders.IntProvider`: `NON_NEGATIVE_CODEC`, `POSITIVE_CODEC`

### Methods
- `public static ConstantInt of(int p_146484_)`
- `public int getValue()`
- `public int sample(RandomSource p_216854_)`
- `public int getMinValue()`
- `public int getMaxValue()`
- `public IntProviderType<?> getType()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.util.valueproviders.IntProvider`: `codec`, `codec`

## FloatProvider

*class* `net.minecraft.util.valueproviders.FloatProvider`

### Fields
- `private static final com.mojang.serialization.Codec<com.mojang.datafixers.util.Either<Float,FloatProvider>> CONSTANT_OR_DISPATCH_CODEC`
- `public static final com.mojang.serialization.Codec<FloatProvider> CODEC`

### Methods
- `public static com.mojang.serialization.Codec<FloatProvider> codec(float p_146506_,  float p_146507_)`
- `public abstract float getMinValue()`
- `public abstract float getMaxValue()`
- `public abstract FloatProviderType<?> getType()`

### Inherited methods
- from `net.minecraft.util.valueproviders.SampledFloat`: `sample`

## FloatProviderType

*interface* `net.minecraft.util.valueproviders.FloatProviderType`

### Fields
- `static final FloatProviderType<ConstantFloat> CONSTANT`
- `static final FloatProviderType<UniformFloat> UNIFORM`
- `static final FloatProviderType<ClampedNormalFloat> CLAMPED_NORMAL`
- `static final FloatProviderType<TrapezoidFloat> TRAPEZOID`

### Methods
- `com.mojang.serialization.Codec<P> codec()`
- `static <P extends FloatProvider> FloatProviderType<P> register(String p_146527_,  com.mojang.serialization.Codec<P> p_146528_)`

## IntProvider

*class* `net.minecraft.util.valueproviders.IntProvider`

### Fields
- `private static final com.mojang.serialization.Codec<com.mojang.datafixers.util.Either<Integer,IntProvider>> CONSTANT_OR_DISPATCH_CODEC`
- `public static final com.mojang.serialization.Codec<IntProvider> CODEC`
- `public static final com.mojang.serialization.Codec<IntProvider> NON_NEGATIVE_CODEC`
- `public static final com.mojang.serialization.Codec<IntProvider> POSITIVE_CODEC`

### Methods
- `public static com.mojang.serialization.Codec<IntProvider> codec(int p_146546_,  int p_146547_)`
- `public static <T extends IntProvider> com.mojang.serialization.Codec<T> codec(int p_273149_,  int p_272813_,  com.mojang.serialization.Codec<T> p_273329_)`
- `public abstract int sample(RandomSource p_216855_)`
- `public abstract int getMinValue()`
- `public abstract int getMaxValue()`
- `public abstract IntProviderType<?> getType()`

## IntProviderType

*interface* `net.minecraft.util.valueproviders.IntProviderType`

### Fields
- `static final IntProviderType<ConstantInt> CONSTANT`
- `static final IntProviderType<UniformInt> UNIFORM`
- `static final IntProviderType<BiasedToBottomInt> BIASED_TO_BOTTOM`
- `static final IntProviderType<ClampedInt> CLAMPED`
- `static final IntProviderType<WeightedListInt> WEIGHTED_LIST`
- `static final IntProviderType<ClampedNormalInt> CLAMPED_NORMAL`

### Methods
- `com.mojang.serialization.Codec<P> codec()`
- `static <P extends IntProvider> IntProviderType<P> register(String p_146558_,  com.mojang.serialization.Codec<P> p_146559_)`

## MultipliedFloats

*class* `net.minecraft.util.valueproviders.MultipliedFloats`

### Fields
- `private final SampledFloat[] values`

### Methods
- `public float sample(RandomSource p_216860_)`
- `public String toString()`

## SampledFloat

*interface* `net.minecraft.util.valueproviders.SampledFloat`

### Methods
- `float sample(RandomSource p_216862_)`

## TrapezoidFloat

*class* `net.minecraft.util.valueproviders.TrapezoidFloat`

### Fields
- `public static final com.mojang.serialization.Codec<TrapezoidFloat> CODEC`
- `private final float min`
- `private final float max`
- `private final float plateau`

### Methods
- `public static TrapezoidFloat of(float p_146572_,  float p_146573_,  float p_146574_)`
- `public float sample(RandomSource p_216864_)`
- `public float getMinValue()`
- `public float getMaxValue()`
- `public FloatProviderType<?> getType()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.util.valueproviders.FloatProvider`: `codec`

## UniformFloat

*class* `net.minecraft.util.valueproviders.UniformFloat`

### Fields
- `public static final com.mojang.serialization.Codec<UniformFloat> CODEC`
- `private final float minInclusive`
- `private final float maxExclusive`

### Methods
- `public static UniformFloat of(float p_146606_,  float p_146607_)`
- `public float sample(RandomSource p_216866_)`
- `public float getMinValue()`
- `public float getMaxValue()`
- `public FloatProviderType<?> getType()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.util.valueproviders.FloatProvider`: `codec`

## UniformInt

*class* `net.minecraft.util.valueproviders.UniformInt`

### Fields
- `public static final com.mojang.serialization.Codec<UniformInt> CODEC`
- `private final int minInclusive`
- `private final int maxInclusive`

### Inherited fields
- from `net.minecraft.util.valueproviders.IntProvider`: `NON_NEGATIVE_CODEC`, `POSITIVE_CODEC`

### Methods
- `public static UniformInt of(int p_146623_,  int p_146624_)`
- `public int sample(RandomSource p_216868_)`
- `public int getMinValue()`
- `public int getMaxValue()`
- `public IntProviderType<?> getType()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.util.valueproviders.IntProvider`: `codec`, `codec`

## WeightedListInt

*class* `net.minecraft.util.valueproviders.WeightedListInt`

### Fields
- `public static final com.mojang.serialization.Codec<WeightedListInt> CODEC`
- `private final SimpleWeightedRandomList<IntProvider> distribution`
- `private final int minValue`
- `private final int maxValue`

### Inherited fields
- from `net.minecraft.util.valueproviders.IntProvider`: `NON_NEGATIVE_CODEC`, `POSITIVE_CODEC`

### Methods
- `public int sample(RandomSource p_216870_)`
- `public int getMinValue()`
- `public int getMaxValue()`
- `public IntProviderType<?> getType()`

### Inherited methods
- from `net.minecraft.util.valueproviders.IntProvider`: `codec`, `codec`
