# net.minecraft.world.level.levelgen.synth

- [BlendedNoise](#blendednoise)
- [ImprovedNoise](#improvednoise)
- [NoiseUtils](#noiseutils)
- [NormalNoise](#normalnoise)
- [NormalNoise.NoiseParameters](#normalnoise.noiseparameters)
- [PerlinNoise](#perlinnoise)
- [PerlinSimplexNoise](#perlinsimplexnoise)
- [SimplexNoise](#simplexnoise)
## BlendedNoise

*class* `net.minecraft.world.level.levelgen.synth.BlendedNoise`

### Fields
- `private static final com.mojang.serialization.Codec<Double> SCALE_RANGE`
- `private static final com.mojang.serialization.MapCodec<BlendedNoise> DATA_CODEC`
- `public static final KeyDispatchDataCodec<BlendedNoise> CODEC`
- `private final PerlinNoise minLimitNoise`
- `private final PerlinNoise maxLimitNoise`
- `private final PerlinNoise mainNoise`
- `private final double xzMultiplier`
- `private final double yMultiplier`
- `private final double xzFactor`
- `private final double yFactor`
- `private final double smearScaleMultiplier`
- `private final double maxValue`
- `private final double xzScale`
- `private final double yScale`

### Inherited fields
- from `net.minecraft.world.level.levelgen.DensityFunction`: `DIRECT_CODEC`, `HOLDER_HELPER_CODEC`

### Methods
- `public static BlendedNoise createUnseeded(double p_230478_,  double p_230479_,  double p_230480_,  double p_230481_,  double p_230482_)`
- `public BlendedNoise withNewRandom(RandomSource p_230484_)`
- `public double compute(DensityFunction.FunctionContext p_210621_)`
- `public double minValue()`
- `public double maxValue()`
- `public void parityConfigString(StringBuilder p_192818_)`
- `public KeyDispatchDataCodec<? extends DensityFunction> codec()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.DensityFunction`: `abs`, `clamp`, `cube`, `halfNegative`, `quarterNegative`, `square`, `squeeze`
- from `net.minecraft.world.level.levelgen.DensityFunction.SimpleFunction`: `fillArray`, `mapAll`

## ImprovedNoise

*class* `net.minecraft.world.level.levelgen.synth.ImprovedNoise`

### Fields
- `private static final float SHIFT_UP_EPSILON` (= 1.0000000116860974E-7f)
- `private final byte[] p`
- `public final double xo`
- `public final double yo`
- `public final double zo`

### Methods
- `public double noise(double p_164309_,  double p_164310_,  double p_164311_)`
- `@Deprecated public double noise(double p_75328_,  double p_75329_,  double p_75330_,  double p_75331_,  double p_75332_)` (deprecated)
- `public double noiseWithDerivative(double p_164313_,  double p_164314_,  double p_164315_,  double[] p_164316_)`
- `private static double gradDot(int p_75336_,  double p_75337_,  double p_75338_,  double p_75339_)`
- `private int p(int p_75334_)`
- `private double sampleAndLerp(int p_164318_,  int p_164319_,  int p_164320_,  double p_164321_,  double p_164322_,  double p_164323_,  double p_164324_)`
- `private double sampleWithDerivative(int p_164326_,  int p_164327_,  int p_164328_,  double p_164329_,  double p_164330_,  double p_164331_,  double[] p_164332_)`
- `public void parityConfigString(StringBuilder p_192824_)`

## NoiseUtils

*class* `net.minecraft.world.level.levelgen.synth.NoiseUtils`

### Methods
- `public static double biasTowardsExtreme(double p_164335_,  double p_164336_)`
- `public static void parityNoiseOctaveConfigString(StringBuilder p_192826_,  double p_192827_,  double p_192828_,  double p_192829_,  byte[] p_192830_)`
- `public static void parityNoiseOctaveConfigString(StringBuilder p_192832_,  double p_192833_,  double p_192834_,  double p_192835_,  int[] p_192836_)`

## NormalNoise

*class* `net.minecraft.world.level.levelgen.synth.NormalNoise`

### Fields
- `private static final double INPUT_FACTOR` (= 1.0181268882175227)
- `private static final double TARGET_DEVIATION` (= 0.3333333333333333)
- `private final double valueFactor`
- `private final PerlinNoise first`
- `private final PerlinNoise second`
- `private final double maxValue`
- `private final NormalNoise.NoiseParameters parameters`

### Methods
- `@Deprecated public static NormalNoise createLegacyNetherBiome(RandomSource p_230509_,  NormalNoise.NoiseParameters p_230510_)` (deprecated)
- `public static NormalNoise create(RandomSource p_230505_,  int p_230506_,  double... p_230507_)`
- `public static NormalNoise create(RandomSource p_230512_,  NormalNoise.NoiseParameters p_230513_)`
- `public double maxValue()`
- `private static double expectedDeviation(int p_75385_)`
- `public double getValue(double p_75381_,  double p_75382_,  double p_75383_)`
- `public NormalNoise.NoiseParameters parameters()`
- `public void parityConfigString(StringBuilder p_192847_)`

## NormalNoise.NoiseParameters

*record* `net.minecraft.world.level.levelgen.synth.NormalNoise.NoiseParameters`

Enclosing class: NormalNoise

### Fields
- `private final int firstOctave`
  The field for the firstOctave record component.
- `private final it.unimi.dsi.fastutil.doubles.DoubleList amplitudes`
  The field for the amplitudes record component.
- `public static final com.mojang.serialization.Codec<NormalNoise.NoiseParameters> DIRECT_CODEC`
- `public static final com.mojang.serialization.Codec<Holder<NormalNoise.NoiseParameters>> CODEC`

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int firstOctave()`
  Returns the value of the firstOctave record component.
  - returns: the value of the firstOctave record component
- `public it.unimi.dsi.fastutil.doubles.DoubleList amplitudes()`
  Returns the value of the amplitudes record component.
  - returns: the value of the amplitudes record component

## PerlinNoise

*class* `net.minecraft.world.level.levelgen.synth.PerlinNoise`

### Fields
- `private static final int ROUND_OFF` (= 33554432)
- `private final ImprovedNoise[] noiseLevels`
- `private final int firstOctave`
- `private final it.unimi.dsi.fastutil.doubles.DoubleList amplitudes`
- `private final double lowestFreqValueFactor`
- `private final double lowestFreqInputFactor`
- `private final double maxValue`

### Methods
- `@Deprecated public static PerlinNoise createLegacyForBlendedNoise(RandomSource p_230533_,  IntStream p_230534_)` (deprecated)
- `@Deprecated public static PerlinNoise createLegacyForLegacyNetherBiome(RandomSource p_230526_,  int p_230527_,  it.unimi.dsi.fastutil.doubles.DoubleList p_230528_)` (deprecated)
- `public static PerlinNoise create(RandomSource p_230540_,  IntStream p_230541_)`
- `public static PerlinNoise create(RandomSource p_230530_,  List<Integer> p_230531_)`
- `public static PerlinNoise create(RandomSource p_230521_,  int p_230522_,  double p_230523_,  double... p_230524_)`
- `public static PerlinNoise create(RandomSource p_230536_,  int p_230537_,  it.unimi.dsi.fastutil.doubles.DoubleList p_230538_)`
- `private static com.mojang.datafixers.util.Pair<Integer,it.unimi.dsi.fastutil.doubles.DoubleList> makeAmplitudes(it.unimi.dsi.fastutil.ints.IntSortedSet p_75431_)`
- `protected double maxValue()`
- `private static void skipOctave(RandomSource p_230519_)`
- `public double getValue(double p_75409_,  double p_75410_,  double p_75411_)`
- `@Deprecated public double getValue(double p_75418_,  double p_75419_,  double p_75420_,  double p_75421_,  double p_75422_,  boolean p_75423_)` (deprecated)
- `public double maxBrokenValue(double p_210644_)`
- `private double edgeValue(double p_210650_)`
- `@Nullable public ImprovedNoise getOctaveNoise(int p_75425_)`
- `public static double wrap(double p_75407_)`
- `protected int firstOctave()`
- `protected it.unimi.dsi.fastutil.doubles.DoubleList amplitudes()`
- `public void parityConfigString(StringBuilder p_192891_)`

## PerlinSimplexNoise

*class* `net.minecraft.world.level.levelgen.synth.PerlinSimplexNoise`

### Fields
- `private final SimplexNoise[] noiseLevels`
- `private final double highestFreqValueFactor`
- `private final double highestFreqInputFactor`

### Methods
- `public double getValue(double p_75450_,  double p_75451_,  boolean p_75452_)`

## SimplexNoise

*class* `net.minecraft.world.level.levelgen.synth.SimplexNoise`

### Fields
- `protected static final int[][] GRADIENT`
- `private static final double SQRT_3`
- `private static final double F2`
- `private static final double G2`
- `private final int[] p`
- `public final double xo`
- `public final double yo`
- `public final double zo`

### Methods
- `private int p(int p_75472_)`
- `protected static double dot(int[] p_75480_,  double p_75481_,  double p_75482_,  double p_75483_)`
- `private double getCornerNoise3D(int p_75474_,  double p_75475_,  double p_75476_,  double p_75477_,  double p_75478_)`
- `public double getValue(double p_75465_,  double p_75466_)`
- `public double getValue(double p_75468_,  double p_75469_,  double p_75470_)`
