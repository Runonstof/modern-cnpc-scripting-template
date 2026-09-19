# net.minecraftforge.client.model.b3d

- [B3DClip](#b3dclip)
- [B3DClip.NodeClip](#b3dclip.nodeclip)
- [B3DLoader](#b3dloader)
- [B3DLoader.B3DState](#b3dloader.b3dstate)
- [B3DModel](#b3dmodel)
- [B3DModel.Animation](#b3dmodel.animation)
- [B3DModel.Bone](#b3dmodel.bone)
- [B3DModel.Brush](#b3dmodel.brush)
- [B3DModel.Face](#b3dmodel.face)
- [B3DModel.IKind>](#b3dmodel.ikind)
- [B3DModel.Key](#b3dmodel.key)
- [B3DModel.Mesh](#b3dmodel.mesh)
- [B3DModel.Node>](#b3dmodel.node)
- [B3DModel.Parser](#b3dmodel.parser)
- [B3DModel.Pivot](#b3dmodel.pivot)
- [B3DModel.Texture](#b3dmodel.texture)
- [B3DModel.Vertex](#b3dmodel.vertex)
## B3DClip

*enum* `net.minecraftforge.client.model.b3d.B3DClip`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<B3DClip>, IClip

### Fields
- `public static final B3DClip INSTANCE`

### Methods
- `public static B3DClip[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (B3DClip c : B3DClip.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static B3DClip valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public IJointClip apply(IJoint joint)`
- `public java.lang.Iterable<Event> pastEvents(float lastPollTime,  float time)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## B3DClip.NodeClip

*class* `net.minecraftforge.client.model.b3d.B3DClip.NodeClip`

All Implemented Interfaces: IJointClip

Enclosing class: B3DClip

### Methods
- `public TRSRTransformation apply(float time)`

## B3DLoader

*enum* `net.minecraftforge.client.model.b3d.B3DLoader`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<B3DLoader>, IResourceManagerReloadListener, ICustomModelLoader, ISelectiveResourceReloadListener

### Fields
- `public static final B3DLoader INSTANCE`

### Methods
- `public static B3DLoader[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (B3DLoader c : B3DLoader.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static B3DLoader valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public void addDomain(java.lang.String domain)`
- `public void onResourceManagerReload(IResourceManager manager)`
- `public boolean accepts(ResourceLocation modelLocation)`
- `public IModel loadModel(ResourceLocation modelLocation)  throws java.lang.Exception`
  - throws: java.lang.Exception

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraftforge.client.model.ICustomModelLoader`: `onResourceManagerReload`

## B3DLoader.B3DState

*class* `net.minecraftforge.client.model.b3d.B3DLoader.B3DState`

All Implemented Interfaces: IModelState

Enclosing class: B3DLoader

### Methods
- `public B3DModel.Animation getAnimation()`
- `public int getFrame()`
- `public int getNextFrame()`
- `public float getProgress()`
- `public IModelState getParent()`
- `public java.util.Optional<TRSRTransformation> apply(java.util.Optional<? extends IModelPart> part)`
- `public TRSRTransformation getNodeMatrix(B3DModel.Node<?> node)`
- `public TRSRTransformation getNodeMatrix(B3DModel.Node<?> node,  int frame)`
- `public static TRSRTransformation getNodeMatrix(B3DModel.Animation animation,  B3DModel.Node<?> node,  int frame)`

## B3DModel

*class* `net.minecraftforge.client.model.b3d.B3DModel`

### Methods
- `public java.util.List<B3DModel.Texture> getTextures()`
- `public java.util.List<B3DModel.Brush> getBrushes()`
- `public B3DModel.Node<?> getRoot()`
- `public <any> getMeshes()`

## B3DModel.Animation

*class* `net.minecraftforge.client.model.b3d.B3DModel.Animation`

Enclosing class: B3DModel

### Methods
- `public int getFlags()`
- `public int getFrames()`
- `public float getFps()`
- `public <any> getKeys()`
- `public java.lang.String toString()`

## B3DModel.Bone

*class* `net.minecraftforge.client.model.b3d.B3DModel.Bone`

All Implemented Interfaces: B3DModel.IKind<B3DModel.Bone>

Enclosing class: B3DModel

### Methods
- `public java.util.List<<any>> getData()`
- `public void setParent(B3DModel.Node<B3DModel.Bone> parent)`
- `public B3DModel.Node<B3DModel.Bone> getParent()`

## B3DModel.Brush

*class* `net.minecraftforge.client.model.b3d.B3DModel.Brush`

Enclosing class: B3DModel

### Methods
- `public java.lang.String getName()`
- `public Vector4f getColor()`
- `public float getShininess()`
- `public int getBlend()`
- `public int getFx()`
- `public java.util.List<B3DModel.Texture> getTextures()`
- `public java.lang.String toString()`

## B3DModel.Face

*class* `net.minecraftforge.client.model.b3d.B3DModel.Face`

Enclosing class: B3DModel

### Methods
- `public B3DModel.Vertex getV1()`
- `public B3DModel.Vertex getV2()`
- `public B3DModel.Vertex getV3()`
- `public B3DModel.Brush getBrush()`
- `public java.lang.String toString()`
- `public Vector3f getNormal()`
- `public static Vector3f getNormal(B3DModel.Vertex v1,  B3DModel.Vertex v2,  B3DModel.Vertex v3)`

## B3DModel.IKind>

*interface* `net.minecraftforge.client.model.b3d.B3DModel.IKind>`

Enclosing class: B3DModel

### Methods
- `void setParent(B3DModel.Node<K> parent)`
- `B3DModel.Node<K> getParent()`

## B3DModel.Key

*class* `net.minecraftforge.client.model.b3d.B3DModel.Key`

Enclosing class: B3DModel

### Methods
- `public Vector3f getPos()`
- `public Vector3f getScale()`
- `public Quat4f getRot()`
- `public java.lang.String toString()`

## B3DModel.Mesh

*class* `net.minecraftforge.client.model.b3d.B3DModel.Mesh`

All Implemented Interfaces: B3DModel.IKind<B3DModel.Mesh>

Enclosing class: B3DModel

### Methods
- `public <any> getWeightMap()`
- `public <any> bake(java.util.function.Function<B3DModel.Node<?>,Matrix4f> animator)`
- `public B3DModel.Brush getBrush()`
- `public <any> getFaces()`
- `public <any> getBones()`
- `public java.lang.String toString()`
- `public void setParent(B3DModel.Node<B3DModel.Mesh> parent)`
- `public B3DModel.Node<B3DModel.Mesh> getParent()`

## B3DModel.Node>

*class* `net.minecraftforge.client.model.b3d.B3DModel.Node>`

Enclosing class: B3DModel

### Methods
- `public static <K extends B3DModel.IKind<K>> B3DModel.Node<K> create(java.lang.String name,  Vector3f pos,  Vector3f scale,  Quat4f rot,  java.util.List<B3DModel.Node<?>> nodes,  K kind)`
- `public void setAnimation(B3DModel.Animation animation)`
- `public void setAnimation(<any> animData,  <any> keyData)`
- `public java.lang.String getName()`
- `public K getKind()`
- `public Vector3f getPos()`
- `public Vector3f getScale()`
- `public Quat4f getRot()`
- `public <any> getNodes()`
- `public B3DModel.Animation getAnimation()`
- `public B3DModel.Node<? extends B3DModel.IKind<?>> getParent()`
- `public void setParent(B3DModel.Node<? extends B3DModel.IKind<?>> parent)`
- `public java.lang.String toString()`

## B3DModel.Parser

*class* `net.minecraftforge.client.model.b3d.B3DModel.Parser`

Enclosing class: B3DModel

### Methods
- `public B3DModel parse()  throws java.io.IOException`
  - throws: java.io.IOException

## B3DModel.Pivot

*class* `net.minecraftforge.client.model.b3d.B3DModel.Pivot`

All Implemented Interfaces: B3DModel.IKind<B3DModel.Pivot>

Enclosing class: B3DModel

### Methods
- `public void setParent(B3DModel.Node<B3DModel.Pivot> parent)`
- `public B3DModel.Node<B3DModel.Pivot> getParent()`

## B3DModel.Texture

*class* `net.minecraftforge.client.model.b3d.B3DModel.Texture`

Enclosing class: B3DModel

### Fields
- `public static final B3DModel.Texture White`

### Methods
- `public java.lang.String getPath()`
- `public int getFlags()`
- `public int getBlend()`
- `public Vector2f getPos()`
- `public Vector2f getScale()`
- `public float getRot()`
- `public java.lang.String toString()`

## B3DModel.Vertex

*class* `net.minecraftforge.client.model.b3d.B3DModel.Vertex`

Enclosing class: B3DModel

### Methods
- `public B3DModel.Vertex bake(B3DModel.Mesh mesh,  java.util.function.Function<B3DModel.Node<?>,Matrix4f> animator)`
- `public Vector3f getPos()`
- `public Vector3f getNormal()`
- `public Vector4f getColor()`
- `public Vector4f[] getTexCoords()`
- `public java.lang.String toString()`
