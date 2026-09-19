# net.minecraft.world.flag

- [FeatureElement](#featureelement)
- [FeatureFlag](#featureflag)
- [FeatureFlagRegistry](#featureflagregistry)
- [FeatureFlagRegistry.Builder](#featureflagregistry.builder)
- [FeatureFlags](#featureflags)
- [FeatureFlagSet](#featureflagset)
- [FeatureFlagUniverse](#featureflaguniverse)
## FeatureElement

*interface* `net.minecraft.world.flag.FeatureElement`

### Fields
- `static final Set<ResourceKey<? extends Registry<? extends FeatureElement>>> FILTERED_REGISTRIES`

### Methods
- `FeatureFlagSet requiredFeatures()`
- `default boolean isEnabled(FeatureFlagSet p_249172_)`

## FeatureFlag

*class* `net.minecraft.world.flag.FeatureFlag`

### Fields
- `final FeatureFlagUniverse universe`
- `final long mask`

## FeatureFlagRegistry

*class* `net.minecraft.world.flag.FeatureFlagRegistry`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final FeatureFlagUniverse universe`
- `private final Map<ResourceLocation,FeatureFlag> names`
- `private final FeatureFlagSet allFlags`

### Methods
- `public boolean isSubset(FeatureFlagSet p_251939_)`
- `public FeatureFlagSet allFlags()`
- `public FeatureFlagSet fromNames(Iterable<ResourceLocation> p_250759_)`
- `public FeatureFlagSet subset(FeatureFlag... p_252295_)`
- `public FeatureFlagSet fromNames(Iterable<ResourceLocation> p_251769_,  Consumer<ResourceLocation> p_251521_)`
- `public Set<ResourceLocation> toNames(FeatureFlagSet p_251153_)`
- `public com.mojang.serialization.Codec<FeatureFlagSet> codec()`

## FeatureFlagRegistry.Builder

*class* `net.minecraft.world.flag.FeatureFlagRegistry.Builder`

Enclosing class: FeatureFlagRegistry

### Fields
- `private final FeatureFlagUniverse universe`
- `private int id`
- `private final Map<ResourceLocation,FeatureFlag> flags`

### Methods
- `public FeatureFlag createVanilla(String p_251782_)`
- `public FeatureFlag create(ResourceLocation p_250098_)`
- `public FeatureFlagRegistry build()`

## FeatureFlags

*class* `net.minecraft.world.flag.FeatureFlags`

### Fields
- `public static final FeatureFlag VANILLA`
- `public static final FeatureFlag BUNDLE`
- `public static final FeatureFlag TRADE_REBALANCE`
- `public static final FeatureFlagRegistry REGISTRY`
- `public static final com.mojang.serialization.Codec<FeatureFlagSet> CODEC`
- `public static final FeatureFlagSet VANILLA_SET`
- `public static final FeatureFlagSet DEFAULT_FLAGS`

### Methods
- `public static String printMissingFlags(FeatureFlagSet p_250581_,  FeatureFlagSet p_250326_)`
- `public static String printMissingFlags(FeatureFlagRegistry p_249213_,  FeatureFlagSet p_250429_,  FeatureFlagSet p_250547_)`
- `public static boolean isExperimental(FeatureFlagSet p_249170_)`

## FeatureFlagSet

*class* `net.minecraft.world.flag.FeatureFlagSet`

### Fields
- `private static final FeatureFlagSet EMPTY`
- `public static final int MAX_CONTAINER_SIZE` (= 64)
- `@Nullable private final FeatureFlagUniverse universe`
- `private final long mask`

### Methods
- `static FeatureFlagSet create(FeatureFlagUniverse p_251573_,  Collection<FeatureFlag> p_251037_)`
- `public static FeatureFlagSet of()`
- `public static FeatureFlagSet of(FeatureFlag p_252331_)`
- `public static FeatureFlagSet of(FeatureFlag p_251008_,  FeatureFlag... p_249805_)`
- `private static long computeMask(FeatureFlagUniverse p_249684_,  long p_250982_,  Iterable<FeatureFlag> p_251734_)`
- `public boolean contains(FeatureFlag p_249521_)`
- `public boolean isSubsetOf(FeatureFlagSet p_249164_)`
- `public FeatureFlagSet join(FeatureFlagSet p_251527_)`
- `public boolean equals(Object p_248691_)`
- `public int hashCode()`

## FeatureFlagUniverse

*class* `net.minecraft.world.flag.FeatureFlagUniverse`

### Fields
- `private final String id`

### Methods
- `public String toString()`
