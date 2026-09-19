# net.minecraft.world.level.levelgen.feature.featuresize

- [FeatureSize](#featuresize)
- [FeatureSizeType](#featuresizetype)
- [ThreeLayersFeatureSize](#threelayersfeaturesize)
- [TwoLayersFeatureSize](#twolayersfeaturesize)
## FeatureSize

*class* `net.minecraft.world.level.levelgen.feature.featuresize.FeatureSize`

### Fields
- `public static final com.mojang.serialization.Codec<FeatureSize> CODEC`
- `protected static final int MAX_WIDTH` (= 16)
- `protected final OptionalInt minClippedHeight`

### Methods
- `protected static <S extends FeatureSize> com.mojang.serialization.codecs.RecordCodecBuilder<S,OptionalInt> minClippedHeightCodec()`
- `protected abstract FeatureSizeType<?> type()`
- `public abstract int getSizeAtHeight(int p_68287_,  int p_68288_)`
- `public OptionalInt minClippedHeight()`

## FeatureSizeType

*class* `net.minecraft.world.level.levelgen.feature.featuresize.FeatureSizeType`

### Fields
- `public static final FeatureSizeType<TwoLayersFeatureSize> TWO_LAYERS_FEATURE_SIZE`
- `public static final FeatureSizeType<ThreeLayersFeatureSize> THREE_LAYERS_FEATURE_SIZE`
- `private final com.mojang.serialization.Codec<P extends FeatureSize> codec`

### Methods
- `private static <P extends FeatureSize> FeatureSizeType<P> register(String p_68304_,  com.mojang.serialization.Codec<P> p_68305_)`
- `public com.mojang.serialization.Codec<P> codec()`

## ThreeLayersFeatureSize

*class* `net.minecraft.world.level.levelgen.feature.featuresize.ThreeLayersFeatureSize`

### Fields
- `public static final com.mojang.serialization.Codec<ThreeLayersFeatureSize> CODEC`
- `private final int limit`
- `private final int upperLimit`
- `private final int lowerSize`
- `private final int middleSize`
- `private final int upperSize`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.featuresize.FeatureSize`: `MAX_WIDTH`, `minClippedHeight`

### Methods
- `protected FeatureSizeType<?> type()`
- `public int getSizeAtHeight(int p_68321_,  int p_68322_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.featuresize.FeatureSize`: `minClippedHeight`, `minClippedHeightCodec`

## TwoLayersFeatureSize

*class* `net.minecraft.world.level.levelgen.feature.featuresize.TwoLayersFeatureSize`

### Fields
- `public static final com.mojang.serialization.Codec<TwoLayersFeatureSize> CODEC`
- `private final int limit`
- `private final int lowerSize`
- `private final int upperSize`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.featuresize.FeatureSize`: `MAX_WIDTH`, `minClippedHeight`

### Methods
- `protected FeatureSizeType<?> type()`
- `public int getSizeAtHeight(int p_68351_,  int p_68352_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.featuresize.FeatureSize`: `minClippedHeight`, `minClippedHeightCodec`
