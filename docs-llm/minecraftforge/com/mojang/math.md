# com.mojang.math

- [Axis](#axis)
- [Class OctahedralGroup](#class-octahedralgroup)
- [Class SymmetricGroup3](#class-symmetricgroup3)
- [Constants](#constants)
- [Divisor](#divisor)
- [FieldsAreNonnullByDefault](#fieldsarenonnullbydefault)
- [GivensParameters](#givensparameters)
- [MatrixUtil](#matrixutil)
- [MethodsReturnNonnullByDefault](#methodsreturnnonnullbydefault)
- [Transformation](#transformation)
## Axis

*interface* `com.mojang.math.Axis`

### Fields
- `static final Axis XN`
- `static final Axis XP`
- `static final Axis YN`
- `static final Axis YP`
- `static final Axis ZN`
- `static final Axis ZP`

### Methods
- `static Axis of(org.joml.Vector3f p_254398_)`
- `org.joml.Quaternionf rotation(float p_254545_)`
- `default org.joml.Quaternionf rotationDegrees(float p_253800_)`

## Class OctahedralGroup

*enum* `com.mojang.math.Class OctahedralGroup`

### Fields
- `private final org.joml.Matrix3f transformation`
- `private final String name`
- `@Nullable private Map<Direction,Direction> rotatedDirections`
- `private final boolean invertX`
- `private final boolean invertY`
- `private final boolean invertZ`
- `private final SymmetricGroup3 permutation`
- `private static final OctahedralGroup[][] cayleyTable`
- `private static final OctahedralGroup[] inverseTable`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static OctahedralGroup[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static OctahedralGroup valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `private it.unimi.dsi.fastutil.booleans.BooleanList packInversions()`
- `public OctahedralGroup compose(OctahedralGroup p_56522_)`
- `public OctahedralGroup inverse()`
- `public org.joml.Matrix3f transformation()`
- `public String toString()`
- `public String getSerializedName()`
- `public Direction rotate(Direction p_56529_)`
- `public boolean inverts(Direction.Axis p_56527_)`
- `public FrontAndTop rotate(FrontAndTop p_56531_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## Class SymmetricGroup3

*enum* `com.mojang.math.Class SymmetricGroup3`

### Fields
- `private final int[] permutation`
- `private final org.joml.Matrix3f transformation`
- `private static final int ORDER`
- `private static final SymmetricGroup3[][] cayleyTable`

### Methods
- `public static SymmetricGroup3[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SymmetricGroup3 valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public SymmetricGroup3 compose(SymmetricGroup3 p_109183_)`
- `public int permutation(int p_109181_)`
- `public org.joml.Matrix3f transformation()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Constants

*class* `com.mojang.math.Constants`

### Fields
- `public static final float PI` (= 3.1415927410125732f)
- `public static final float RAD_TO_DEG` (= 57.2957763671875f)
- `public static final float DEG_TO_RAD` (= 0.01745329238474369f)
- `public static final float EPSILON` (= 9.999999974752427E-7f)

## Divisor

*class* `com.mojang.math.Divisor`

### Fields
- `private final int denominator`
- `private final int quotient`
- `private final int mod`
- `private int returnedParts`
- `private int remainder`

### Methods
- `public boolean hasNext()`
- `public int nextInt()`
- `public static Iterable<Integer> asIterable(int p_254381_,  int p_254129_)`

### Inherited methods
- from `it.unimi.dsi.fastutil.ints.IntIterator`: `forEachRemaining`, `forEachRemaining`, `next`, `skip`
- from `java.util.Iterator`: `remove`
- from `java.util.PrimitiveIterator.OfInt`: `forEachRemaining`

## FieldsAreNonnullByDefault

*annotation interface* `com.mojang.math.FieldsAreNonnullByDefault`

## GivensParameters

*record* `com.mojang.math.GivensParameters`

### Fields
- `private final float sinHalf`
  The field for the sinHalf record component.
- `private final float cosHalf`
  The field for the cosHalf record component.

### Methods
- `public static GivensParameters fromUnnormalized(float p_276277_,  float p_276305_)`
- `public static GivensParameters fromPositiveAngle(float p_276260_)`
- `public GivensParameters inverse()`
- `public org.joml.Quaternionf aroundX(org.joml.Quaternionf p_276271_)`
- `public org.joml.Quaternionf aroundY(org.joml.Quaternionf p_276323_)`
- `public org.joml.Quaternionf aroundZ(org.joml.Quaternionf p_276281_)`
- `public float cos()`
- `public float sin()`
- `public org.joml.Matrix3f aroundX(org.joml.Matrix3f p_276268_)`
- `public org.joml.Matrix3f aroundY(org.joml.Matrix3f p_276274_)`
- `public org.joml.Matrix3f aroundZ(org.joml.Matrix3f p_276317_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public float sinHalf()`
  Returns the value of the sinHalf record component.
  - returns: the value of the sinHalf record component
- `public float cosHalf()`
  Returns the value of the cosHalf record component.
  - returns: the value of the cosHalf record component

## MatrixUtil

*class* `com.mojang.math.MatrixUtil`

### Fields
- `private static final float G`
- `private static final GivensParameters PI_4`

### Methods
- `public static org.joml.Matrix4f mulComponentWise(org.joml.Matrix4f p_254173_,  float p_253864_)`
- `private static GivensParameters approxGivensQuat(float p_276275_,  float p_276276_,  float p_276282_)`
- `private static GivensParameters qrGivensQuat(float p_253897_,  float p_254413_)`
- `private static void similarityTransform(org.joml.Matrix3f p_276319_,  org.joml.Matrix3f p_276263_)`
- `private static void stepJacobi(org.joml.Matrix3f p_276262_,  org.joml.Matrix3f p_276279_,  org.joml.Quaternionf p_276314_,  org.joml.Quaternionf p_276299_)`
- `public static org.joml.Quaternionf eigenvalueJacobi(org.joml.Matrix3f p_276278_,  int p_276269_)`
- `public static org.apache.commons.lang3.tuple.Triple<org.joml.Quaternionf,org.joml.Vector3f,org.joml.Quaternionf> svdDecompose(org.joml.Matrix3f p_253947_)`

## MethodsReturnNonnullByDefault

*annotation interface* `com.mojang.math.MethodsReturnNonnullByDefault`

## Transformation

*class* `com.mojang.math.Transformation`

### Fields
- `private final org.joml.Matrix4f matrix`
- `public static final com.mojang.serialization.Codec<Transformation> CODEC`
- `public static final com.mojang.serialization.Codec<Transformation> EXTENDED_CODEC`
- `private boolean decomposed`
- `@Nullable private org.joml.Vector3f translation`
- `@Nullable private org.joml.Quaternionf leftRotation`
- `@Nullable private org.joml.Vector3f scale`
- `@Nullable private org.joml.Quaternionf rightRotation`
- `private static final Transformation IDENTITY`
- `private org.joml.Matrix3f normalTransform`

### Methods
- `public static Transformation identity()`
- `public Transformation compose(Transformation p_121097_)`
- `@Nullable public Transformation inverse()`
- `private void ensureDecomposed()`
- `private static org.joml.Matrix4f compose(@Nullable  org.joml.Vector3f p_254465_,  @Nullable  org.joml.Quaternionf p_254416_,  @Nullable  org.joml.Vector3f p_254499_,  @Nullable  org.joml.Quaternionf p_254334_)`
- `public org.joml.Matrix4f getMatrix()`
- `public org.joml.Vector3f getTranslation()`
- `public org.joml.Quaternionf getLeftRotation()`
- `public org.joml.Vector3f getScale()`
- `public org.joml.Quaternionf getRightRotation()`
- `public boolean equals(Object p_121108_)`
- `public int hashCode()`
- `public org.joml.Matrix3f getNormalMatrix()`
- `private void checkNormalTransform()`
- `public Transformation slerp(Transformation p_175938_,  float p_175939_)`

### Inherited methods
- from `net.minecraftforge.common.extensions.IForgeTransformation`: `applyOrigin`, `blockCenterToCorner`, `blockCornerToCenter`, `isIdentity`, `rotateTransform`, `transformNormal`, `transformPosition`
