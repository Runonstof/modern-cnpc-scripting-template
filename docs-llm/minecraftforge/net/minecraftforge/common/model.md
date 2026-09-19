# net.minecraftforge.common.model

- [IModelPart](#imodelpart)
- [IModelState](#imodelstate)
- [ITransformation](#itransformation)
- [Models](#models)
- [TRSRTransformation](#trsrtransformation)
## IModelPart

*interface* `net.minecraftforge.common.model.IModelPart`

## IModelState

*interface* `net.minecraftforge.common.model.IModelState`

### Methods
- `java.util.Optional<TRSRTransformation> apply(java.util.Optional<? extends IModelPart> part)`

## ITransformation

*interface* `net.minecraftforge.common.model.ITransformation`

### Methods
- `Matrix4f getMatrix()`
- `EnumFacing rotate(EnumFacing facing)`
- `int rotate(EnumFacing facing,  int vertexIndex)`

## Models

*enum* `net.minecraftforge.common.model.Models`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<Models>

### Methods
- `public static Models[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (Models c : Models.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static Models valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public static IModelPart getHiddenModelPart(<any> path)`
- `public static <any> getParts(IModelPart part)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## TRSRTransformation

*class* `net.minecraftforge.common.model.TRSRTransformation`

All Implemented Interfaces: IModelState, ITransformation

### Methods
- `@Deprecated public static TRSRTransformation from(ItemTransformVec3f transform)` (deprecated)
  Deprecated.
- `public static TRSRTransformation from(ModelRotation rotation)`
- `public static TRSRTransformation from(EnumFacing facing)`
- `public static Matrix4f getMatrix(EnumFacing facing)`
- `public static ModelRotation getRotation(EnumFacing facing)`
- `public static TRSRTransformation identity()`
- `public TRSRTransformation compose(TRSRTransformation b)`
- `public TRSRTransformation inverse()`
- `public static Quat4f quatFromYXZ(float y,  float x,  float z)`
- `public static Quat4f quatFromXYZDegrees(Vector3f xyz)`
- `public static Quat4f quatFromXYZ(Vector3f xyz)`
- `public static Quat4f quatFromXYZ(float x,  float y,  float z)`
- `public static Vector3f toYXZDegrees(Quat4f q)`
- `public static Vector3f toYXZ(Quat4f q)`
- `public static Vector3f toXYZDegrees(Quat4f q)`
- `public static Vector3f toXYZ(Quat4f q)`
- `public static Matrix4f mul(Vector3f translation,  Quat4f leftRot,  Vector3f scale,  Quat4f rightRot)`
- `public static <any> svdDecompose(Matrix3f m)`
- `public static <any> toAffine(Matrix4f m)`
- `@Deprecated public ItemTransformVec3f toItemTransform()` (deprecated)
  Deprecated.
- `public boolean isIdentity()`
- `public Matrix4f getMatrix()`
- `public Vector3f getTranslation()`
- `public Quat4f getLeftRot()`
- `public Vector3f getScale()`
- `public Quat4f getRightRot()`
- `public java.util.Optional<TRSRTransformation> apply(java.util.Optional<? extends IModelPart> part)`
- `public EnumFacing rotate(EnumFacing facing)`
- `public static EnumFacing rotate(Matrix4f matrix,  EnumFacing facing)`
- `public static boolean isInteger(Matrix4f matrix)`
- `public int rotate(EnumFacing facing,  int vertexIndex)`
- `public void transformPosition(Vector4f position)`
- `public void transformNormal(Vector3f normal)`
- `public java.lang.String toString()`
- `public static TRSRTransformation blockCenterToCorner(TRSRTransformation transform)`
  convert transformation from assuming center-block system to corner-block system
- `public static TRSRTransformation blockCornerToCenter(TRSRTransformation transform)`
  convert transformation from assuming corner-block system to center-block system
- `public int hashCode()`
- `public boolean equals(java.lang.Object obj)`
- `public static Vector3f toVecmath(org.lwjgl.util.vector.Vector3f vec)`
- `public static Vector4f toVecmath(org.lwjgl.util.vector.Vector4f vec)`
- `public static Matrix4f toVecmath(org.lwjgl.util.vector.Matrix4f m)`
- `public static org.lwjgl.util.vector.Vector3f toLwjgl(Vector3f vec)`
- `public static org.lwjgl.util.vector.Vector4f toLwjgl(Vector4f vec)`
- `public static org.lwjgl.util.vector.Matrix4f toLwjgl(Matrix4f m)`
- `public static Vector3f lerp(Tuple3f from,  Tuple3f to,  float progress)`
- `public static Vector4f lerp(Tuple4f from,  Tuple4f to,  float progress)`
- `public static Quat4f slerp(Quat4f from,  Quat4f to,  float progress)`
- `public TRSRTransformation slerp(TRSRTransformation that,  float progress)`
- `public static TRSRTransformation getVanillaUvTransformLocalToGlobal(EnumFacing side)`
- `public static TRSRTransformation getVanillaUvTransformGlobalToLocal(EnumFacing side)`
- `public TRSRTransformation getUVLockTransform(EnumFacing originalSide)`
