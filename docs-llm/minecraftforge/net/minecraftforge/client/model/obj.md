# net.minecraftforge.client.model.obj

- [OBJLoader](#objloader)
- [OBJModel](#objmodel)
- [OBJModel.Face](#objmodel.face)
- [OBJModel.Group](#objmodel.group)
- [OBJModel.Material](#objmodel.material)
- [OBJModel.MaterialLibrary](#objmodel.materiallibrary)
- [OBJModel.Normal](#objmodel.normal)
- [OBJModel.OBJBakedModel](#objmodel.objbakedmodel)
- [OBJModel.OBJProperty](#objmodel.objproperty)
- [OBJModel.OBJState](#objmodel.objstate)
- [OBJModel.OBJState.Operation](#objmodel.objstate.operation)
- [OBJModel.Parser](#objmodel.parser)
- [OBJModel.Texture](#objmodel.texture)
- [OBJModel.TextureCoordinate](#objmodel.texturecoordinate)
- [OBJModel.UVsOutOfBoundsException](#objmodel.uvsoutofboundsexception)
- [OBJModel.Vertex](#objmodel.vertex)
## OBJLoader

*enum* `net.minecraftforge.client.model.obj.OBJLoader`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<OBJLoader>, IResourceManagerReloadListener, ICustomModelLoader, ISelectiveResourceReloadListener

### Fields
- `public static final OBJLoader INSTANCE`

### Methods
- `public static OBJLoader[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (OBJLoader c : OBJLoader.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static OBJLoader valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public void addDomain(java.lang.String domain)`
- `public void onResourceManagerReload(IResourceManager resourceManager)`
- `public boolean accepts(ResourceLocation modelLocation)`
- `public IModel loadModel(ResourceLocation modelLocation)  throws java.lang.Exception`
  - throws: java.lang.Exception

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraftforge.client.model.ICustomModelLoader`: `onResourceManagerReload`

## OBJModel

*class* `net.minecraftforge.client.model.obj.OBJModel`

All Implemented Interfaces: IModel

### Methods
- `public java.util.Collection<ResourceLocation> getTextures()`
- `public IBakedModel bake(IModelState state,  VertexFormat format,  java.util.function.Function<ResourceLocation,TextureAtlasSprite> bakedTextureGetter)`
- `public OBJModel.MaterialLibrary getMatLib()`
- `public IModel process(<any> customData)`
  Description copied from interface: IModel
  Allows the model to process custom data from the variant definition.
   If unknown data is encountered it should be skipped.
  - returns: a new model, with data applied.
- `public IModel retexture(<any> textures)`
  Description copied from interface: IModel
  Applies new textures to the model.
   The returned model should be independent of the accessed one,
   as a model should be able to be retextured multiple times producing
   a separate model each time.
  
   The input map MAY map to an empty string "" which should be used
   to indicate the texture was removed. Handling of that is up to
   the model itself. Such as using default, missing texture, or
   removing vertices.
  
   The input should be considered a DIFF of the old textures, not a
   replacement as it may not contain everything.
  - param: textures - New
  - returns: Model with textures applied.

### Inherited methods
- from `net.minecraftforge.client.model.IModel`: `asVanillaModel`, `getClip`, `getDefaultState`, `getDependencies`, `gui3d`, `smoothLighting`, `uvlock`

## OBJModel.Face

*class* `net.minecraftforge.client.model.obj.OBJModel.Face`

Enclosing class: OBJModel

### Methods
- `public void setMaterialName(java.lang.String materialName)`
- `public java.lang.String getMaterialName()`
- `public boolean isTriangles()`
- `public boolean setVertices(OBJModel.Vertex[] verts)`
- `public OBJModel.Vertex[] getVertices()`
- `public OBJModel.Face bake(TRSRTransformation transform)`
- `public OBJModel.Normal getNormal()`

## OBJModel.Group

*class* `net.minecraftforge.client.model.obj.OBJModel.Group`

Deprecated.

All Implemented Interfaces: IModelPart

Enclosing class: OBJModel

### Fields
- `public static final java.lang.String DEFAULT_NAME` (= "OBJModel.Default.Element.Name", deprecated)
  Deprecated.
- `public static final java.lang.String ALL` (= "OBJModel.Group.All.Key", deprecated)
  Deprecated.
- `public static final java.lang.String ALL_EXCEPT` (= "OBJModel.Group.All.Except.Key", deprecated)
  Deprecated.
- `public float[] minUVBounds` (deprecated)
  Deprecated.
- `public float[] maxUVBounds` (deprecated)
  Deprecated.

### Methods
- `public java.util.LinkedHashSet<OBJModel.Face> applyTransform(java.util.Optional<TRSRTransformation> transform)` (deprecated)
  Deprecated.
- `public java.lang.String getName()` (deprecated)
  Deprecated.
- `public java.util.LinkedHashSet<OBJModel.Face> getFaces()` (deprecated)
  Deprecated.
- `public void setFaces(java.util.LinkedHashSet<OBJModel.Face> faces)` (deprecated)
  Deprecated.
- `public void addFace(OBJModel.Face face)` (deprecated)
  Deprecated.
- `public void addFaces(java.util.List<OBJModel.Face> faces)` (deprecated)
  Deprecated.

## OBJModel.Material

*class* `net.minecraftforge.client.model.obj.OBJModel.Material`

Enclosing class: OBJModel

### Fields
- `public static final java.lang.String WHITE_NAME` (= "OBJModel.White.Texture.Name")
- `public static final java.lang.String DEFAULT_NAME` (= "OBJModel.Default.Texture.Name")

### Methods
- `public void setName(java.lang.String name)`
- `public java.lang.String getName()`
- `public void setColor(Vector4f color)`
- `public Vector4f getColor()`
- `public void setTexture(OBJModel.Texture texture)`
- `public OBJModel.Texture getTexture()`
- `public boolean isWhite()`
- `public java.lang.String toString()`

## OBJModel.MaterialLibrary

*class* `net.minecraftforge.client.model.obj.OBJModel.MaterialLibrary`

Enclosing class: OBJModel

### Methods
- `public OBJModel.MaterialLibrary makeLibWithReplacements(<any> replacements)`
- `public java.util.Map<java.lang.String,OBJModel.Group> getGroups()`
- `public java.util.List<OBJModel.Group> getGroupsContainingFace(OBJModel.Face f)`
- `public void changeMaterialColor(java.lang.String name,  int color)`
- `public OBJModel.Material getMaterial(java.lang.String name)`
- `public <any> getMaterialNames()`
- `public void parseMaterials(IResourceManager manager,  java.lang.String path,  ResourceLocation from)  throws java.io.IOException`
  - throws: java.io.IOException

## OBJModel.Normal

*class* `net.minecraftforge.client.model.obj.OBJModel.Normal`

Enclosing class: OBJModel

### Fields
- `public float x`
- `public float y`
- `public float z`

### Methods
- `public Vector3f getData()`

## OBJModel.OBJBakedModel

*class* `net.minecraftforge.client.model.obj.OBJModel.OBJBakedModel`

All Implemented Interfaces: IBakedModel

Enclosing class: OBJModel

### Methods
- `public void scheduleRebake()`
- `public java.util.List<BakedQuad> getQuads(IBlockState blockState,  EnumFacing side,  long rand)`
- `public boolean isAmbientOcclusion()`
- `public boolean isGui3d()`
- `public boolean isBuiltInRenderer()`
- `public TextureAtlasSprite getParticleTexture()`
- `public OBJModel.OBJBakedModel getCachedModel(IModelState state)`
- `public OBJModel getModel()`
- `public IModelState getState()`
- `public OBJModel.OBJBakedModel getBakedModel()`
- `public <any> handlePerspective(ItemCameraTransforms.TransformType cameraTransformType)`
- `public java.lang.String toString()`
- `public ItemOverrideList getOverrides()`

### Inherited methods
- from `net.minecraft.client.renderer.block.model.IBakedModel`: `getItemCameraTransforms`, `isAmbientOcclusion`

## OBJModel.OBJProperty

*enum* `net.minecraftforge.client.model.obj.OBJModel.OBJProperty`

Deprecated.

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<OBJModel.OBJProperty>, IUnlistedProperty<OBJModel.OBJState>

Enclosing class: OBJModel

### Fields
- `public static final OBJModel.OBJProperty INSTANCE` (deprecated)
  Deprecated.

### Methods
- `public static OBJModel.OBJProperty[] values()` (deprecated)
  Deprecated.
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (OBJModel.OBJProperty c : OBJModel.OBJProperty.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static OBJModel.OBJProperty valueOf(java.lang.String name)` (deprecated)
  Deprecated.
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public java.lang.String getName()` (deprecated)
  Deprecated.
- `public boolean isValid(OBJModel.OBJState value)` (deprecated)
  Deprecated.
- `public java.lang.Class<OBJModel.OBJState> getType()` (deprecated)
  Deprecated.
- `public java.lang.String valueToString(OBJModel.OBJState value)` (deprecated)
  Deprecated.

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## OBJModel.OBJState

*class* `net.minecraftforge.client.model.obj.OBJModel.OBJState`

Deprecated.

All Implemented Interfaces: IModelState

Enclosing class: OBJModel

### Fields
- `protected java.util.Map<java.lang.String,java.lang.Boolean> visibilityMap` (deprecated)
  Deprecated.
- `public IModelState parent` (deprecated)
  Deprecated.
- `protected OBJModel.OBJState.Operation operation` (deprecated)
  Deprecated.

### Methods
- `public IModelState getParent(IModelState parent)` (deprecated)
  Deprecated.
- `public java.util.Optional<TRSRTransformation> apply(java.util.Optional<? extends IModelPart> part)` (deprecated)
  Deprecated.
- `public java.util.Map<java.lang.String,java.lang.Boolean> getVisibilityMap()` (deprecated)
  Deprecated.
- `public java.util.List<java.lang.String> getGroupsWithVisibility(boolean visibility)` (deprecated)
  Deprecated.
- `public java.util.List<java.lang.String> getGroupNamesFromMap()` (deprecated)
  Deprecated.
- `public void changeGroupVisibilities(java.util.List<java.lang.String> names,  OBJModel.OBJState.Operation operation)` (deprecated)
  Deprecated.
- `public java.lang.String toString()` (deprecated)
  Deprecated.
- `public int hashCode()` (deprecated)
  Deprecated.
- `public boolean equals(java.lang.Object obj)` (deprecated)
  Deprecated.

## OBJModel.OBJState.Operation

*enum* `net.minecraftforge.client.model.obj.OBJModel.OBJState.Operation`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<OBJModel.OBJState.Operation>

Enclosing class: OBJModel.OBJState

### Fields
- `public static final OBJModel.OBJState.Operation SET_TRUE`
- `public static final OBJModel.OBJState.Operation SET_FALSE`
- `public static final OBJModel.OBJState.Operation TOGGLE`

### Methods
- `public static OBJModel.OBJState.Operation[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (OBJModel.OBJState.Operation c : OBJModel.OBJState.Operation.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static OBJModel.OBJState.Operation valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public boolean performOperation(boolean valueToToggle)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## OBJModel.Parser

*class* `net.minecraftforge.client.model.obj.OBJModel.Parser`

Enclosing class: OBJModel

### Fields
- `public OBJModel.MaterialLibrary materialLibrary`

### Methods
- `public java.util.List<java.lang.String> getElements()`
- `public OBJModel parse()  throws java.io.IOException`
  - throws: java.io.IOException

## OBJModel.Texture

*class* `net.minecraftforge.client.model.obj.OBJModel.Texture`

Enclosing class: OBJModel

### Fields
- `public static OBJModel.Texture WHITE`

### Methods
- `public ResourceLocation getTextureLocation()`
- `public void setPath(java.lang.String path)`
- `public java.lang.String getPath()`
- `public void setPosition(Vector2f position)`
- `public Vector2f getPosition()`
- `public void setScale(Vector2f scale)`
- `public Vector2f getScale()`
- `public void setRotation(float rotation)`
- `public float getRotation()`

## OBJModel.TextureCoordinate

*class* `net.minecraftforge.client.model.obj.OBJModel.TextureCoordinate`

Enclosing class: OBJModel

### Fields
- `public float u`
- `public float v`
- `public float w`

### Methods
- `public Vector3f getData()`
- `public static OBJModel.TextureCoordinate[] getDefaultUVs()`

## OBJModel.UVsOutOfBoundsException

*class* `net.minecraftforge.client.model.obj.OBJModel.UVsOutOfBoundsException`

All Implemented Interfaces: java.io.Serializable

Enclosing class: OBJModel

### Fields
- `public ResourceLocation modelLocation`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## OBJModel.Vertex

*class* `net.minecraftforge.client.model.obj.OBJModel.Vertex`

Enclosing class: OBJModel

### Methods
- `public void setPos(Vector4f position)`
- `public Vector4f getPos()`
- `public Vector3f getPos3()`
- `public boolean hasNormal()`
- `public void setNormal(OBJModel.Normal normal)`
- `public OBJModel.Normal getNormal()`
- `public boolean hasTextureCoordinate()`
- `public void setTextureCoordinate(OBJModel.TextureCoordinate texCoord)`
- `public OBJModel.TextureCoordinate getTextureCoordinate()`
- `public void setMaterial(OBJModel.Material material)`
- `public OBJModel.Material getMaterial()`
- `public java.lang.String toString()`
