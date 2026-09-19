# net.minecraft.util.random

- [SimpleWeightedRandomList](#simpleweightedrandomlist)
- [SimpleWeightedRandomList.Builder](#simpleweightedrandomlist.builder)
- [Weight](#weight)
- [WeightedEntry](#weightedentry)
- [WeightedEntry.IntrusiveBase](#weightedentry.intrusivebase)
- [WeightedEntry.Wrapper](#weightedentry.wrapper)
- [WeightedRandom](#weightedrandom)
- [WeightedRandomList](#weightedrandomlist)
## SimpleWeightedRandomList

*class* `net.minecraft.util.random.SimpleWeightedRandomList`

### Methods
- `public static <E> com.mojang.serialization.Codec<SimpleWeightedRandomList<E>> wrappedCodecAllowingEmpty(com.mojang.serialization.Codec<E> p_185861_)`
- `public static <E> com.mojang.serialization.Codec<SimpleWeightedRandomList<E>> wrappedCodec(com.mojang.serialization.Codec<E> p_146265_)`
- `public static <E> SimpleWeightedRandomList.Builder<E> builder()`
- `public static <E> SimpleWeightedRandomList<E> empty()`
- `public static <E> SimpleWeightedRandomList<E> single(E p_185863_)`
- `public Optional<E> getRandomValue(RandomSource p_216821_)`

### Inherited methods
- from `net.minecraft.util.random.WeightedRandomList`: `codec`, `create`, `create`, `create`, `getRandom`, `isEmpty`, `unwrap`

## SimpleWeightedRandomList.Builder

*class* `net.minecraft.util.random.SimpleWeightedRandomList.Builder`

Enclosing class: SimpleWeightedRandomList<E>

### Fields
- `private final com.google.common.collect.ImmutableList.Builder<WeightedEntry.Wrapper<E>> result`

### Methods
- `public SimpleWeightedRandomList.Builder<E> add(E p_146272_,  int p_146273_)`
- `public SimpleWeightedRandomList<E> build()`

## Weight

*class* `net.minecraft.util.random.Weight`

### Fields
- `public static final com.mojang.serialization.Codec<Weight> CODEC`
- `private static final Weight ONE`
- `private static final org.slf4j.Logger LOGGER`
- `private final int value`

### Methods
- `public static Weight of(int p_146283_)`
- `public int asInt()`
- `private static void validateWeight(int p_146285_)`
- `public String toString()`
- `public int hashCode()`
- `public boolean equals(Object p_146287_)`

## WeightedEntry

*interface* `net.minecraft.util.random.WeightedEntry`

### Methods
- `Weight getWeight()`
- `static <T> WeightedEntry.Wrapper<T> wrap(T p_146291_,  int p_146292_)`

## WeightedEntry.IntrusiveBase

*class* `net.minecraft.util.random.WeightedEntry.IntrusiveBase`

Enclosing interface: WeightedEntry

### Fields
- `private final Weight weight`

### Methods
- `public Weight getWeight()`

## WeightedEntry.Wrapper

*class* `net.minecraft.util.random.WeightedEntry.Wrapper`

Enclosing interface: WeightedEntry

### Fields
- `private final T data`
- `private final Weight weight`

### Methods
- `public T getData()`
- `public Weight getWeight()`
- `public static <E> com.mojang.serialization.Codec<WeightedEntry.Wrapper<E>> codec(com.mojang.serialization.Codec<E> p_146306_)`

## WeightedRandom

*class* `net.minecraft.util.random.WeightedRandom`

### Methods
- `public static int getTotalWeight(List<? extends WeightedEntry> p_146313_)`
- `public static <T extends WeightedEntry> Optional<T> getRandomItem(RandomSource p_216826_,  List<T> p_216827_,  int p_216828_)`
- `public static <T extends WeightedEntry> Optional<T> getWeightedItem(List<T> p_146315_,  int p_146316_)`
- `public static <T extends WeightedEntry> Optional<T> getRandomItem(RandomSource p_216823_,  List<T> p_216824_)`

## WeightedRandomList

*class* `net.minecraft.util.random.WeightedRandomList`

### Fields
- `private final int totalWeight`
- `private final com.google.common.collect.ImmutableList<E extends WeightedEntry> items`

### Methods
- `public static <E extends WeightedEntry> WeightedRandomList<E> create()`
- `@SafeVarargs public static <E extends WeightedEntry> WeightedRandomList<E> create(E... p_146331_)`
- `public static <E extends WeightedEntry> WeightedRandomList<E> create(List<E> p_146329_)`
- `public boolean isEmpty()`
- `public Optional<E> getRandom(RandomSource p_216830_)`
- `public List<E> unwrap()`
- `public static <E extends WeightedEntry> com.mojang.serialization.Codec<WeightedRandomList<E>> codec(com.mojang.serialization.Codec<E> p_146334_)`
