# net.minecraftforge.client.model.obj

- [ObjLoader](#objloader)
- [ObjMaterialLibrary](#objmateriallibrary)
- [ObjMaterialLibrary.Material](#objmateriallibrary.material)
- [ObjModel](#objmodel)
- [ObjModel.ModelGroup](#objmodel.modelgroup)
- [ObjModel.ModelMesh](#objmodel.modelmesh)
- [ObjModel.ModelObject](#objmodel.modelobject)
- [ObjModel.ModelSettings](#objmodel.modelsettings)
- [ObjTokenizer](#objtokenizer)
## ObjLoader

*class* `net.minecraftforge.client.model.obj.ObjLoader`

A loader for OBJ models.

 Allows the user to enable automatic face culling, toggle quad shading, flip UVs, render emissively and specify a
 material library override.

### Fields
- `public static ObjLoader INSTANCE`
- `private final Map<ObjModel.ModelSettings,ObjModel> modelCache`
- `private final Map<ResourceLocation,ObjMaterialLibrary> materialCache`
- `private ResourceManager manager`

### Methods
- `public void onResourceManagerReload(ResourceManager resourceManager)`
- `public ObjModel read(com.google.gson.JsonObject jsonObject,  com.google.gson.JsonDeserializationContext deserializationContext)`
- `public ObjModel loadModel(ObjModel.ModelSettings settings)`
- `public ObjMaterialLibrary loadMaterialLibrary(ResourceLocation materialLocation)`

### Inherited methods
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`
- from `net.minecraft.server.packs.resources.ResourceManagerReloadListener`: `reload`

## ObjMaterialLibrary

*class* `net.minecraftforge.client.model.obj.ObjMaterialLibrary`

An OBJ material library (MTL), composed of named materials.

### Fields
- `public static final ObjMaterialLibrary EMPTY`
- `final Map<String,ObjMaterialLibrary.Material> materials`

### Methods
- `public ObjMaterialLibrary.Material getMaterial(String mat)`

## ObjMaterialLibrary.Material

*class* `net.minecraftforge.client.model.obj.ObjMaterialLibrary.Material`

Enclosing class: ObjMaterialLibrary

### Fields
- `public final String name`
- `public org.joml.Vector4f ambientColor`
- `public String ambientColorMap`
- `public org.joml.Vector4f diffuseColor`
- `public String diffuseColorMap`
- `public org.joml.Vector4f specularColor`
- `public float specularHighlight`
- `public String specularColorMap`
- `public float dissolve`
- `public float transparency`
- `public int diffuseTintIndex`

## ObjModel

*class* `net.minecraftforge.client.model.obj.ObjModel`

A model loaded from an OBJ file.

 Supports positions, texture coordinates, normals and colors. The material library
 has support for numerous features, including support for ResourceLocation textures (non-standard).

### Fields
- `private static final org.joml.Vector4f COLOR_WHITE`
- `private static final Vec2[] DEFAULT_COORDS`
- `private final Map<String,ObjModel.ModelGroup> parts`
- `private final Set<String> rootComponentNames`
- `private Set<String> allComponentNames`
- `private final List<org.joml.Vector3f> positions`
- `private final List<Vec2> texCoords`
- `private final List<org.joml.Vector3f> normals`
- `private final List<org.joml.Vector4f> colors`
- `public final boolean automaticCulling`
- `public final boolean shadeQuads`
- `public final boolean flipV`
- `public final boolean emissiveAmbient`
- `@Nullable public final @Nullable String mtlOverride`
- `public final ResourceLocation modelLocation`

### Methods
- `public static ObjModel parse(ObjTokenizer tokenizer,  ObjModel.ModelSettings settings)  throws IOException`
  - throws: IOException
- `private static org.joml.Vector3f parseVector4To3(String[] line)`
- `private static Vec2 parseVector2(String[] line)`
- `private static org.joml.Vector3f parseVector3(String[] line)`
- `static org.joml.Vector4f parseVector4(String[] line)`
- `protected void addQuads(IGeometryBakingContext owner,  IModelBuilder<?> modelBuilder,  ModelBaker baker,  Function<Material,TextureAtlasSprite> spriteGetter,  ModelState modelTransform,  ResourceLocation modelLocation)`
- `public Set<String> getRootComponentNames()`
- `public Set<String> getConfigurableComponentNames()`
  Description copied from interface: IUnbakedGeometry
  Returns a set of all the components whose visibility may be configured via IGeometryBakingContext.
  - returns: a set of all the components whose visibility may be configured via IGeometryBakingContext
- `private org.apache.commons.lang3.tuple.Pair<BakedQuad,Direction> makeQuad(int[][] indices,  int tintIndex,  org.joml.Vector4f colorTint,  org.joml.Vector4f ambientColor,  TextureAtlasSprite texture,  Transformation transform)`
- `public CompositeRenderable bakeRenderable(IGeometryBakingContext configuration)`

### Inherited methods
- from `net.minecraftforge.client.model.geometry.SimpleUnbakedGeometry`: `bake`
- from `net.minecraftforge.client.model.geometry.IUnbakedGeometry`: `resolveParents`

## ObjModel.ModelGroup

*class* `net.minecraftforge.client.model.obj.ObjModel.ModelGroup`

Enclosing class: ObjModel

### Fields
- `final Map<String,ObjModel.ModelObject> parts`

### Inherited fields
- from `net.minecraftforge.client.model.obj.ObjModel.ModelObject`: `meshes`, `name`

### Methods
- `public void addQuads(IGeometryBakingContext owner,  IModelBuilder<?> modelBuilder,  ModelBaker baker,  Function<Material,TextureAtlasSprite> spriteGetter,  ModelState modelTransform,  ResourceLocation modelLocation)`
- `public void bake(CompositeRenderable.PartBuilder<?> builder,  IGeometryBakingContext configuration)`
- `public Collection<Material> getTextures(IGeometryBakingContext owner,  Function<ResourceLocation,UnbakedModel> modelGetter,  Set<com.mojang.datafixers.util.Pair<String,String>> missingTextureErrors)`
- `protected void addNamesRecursively(Set<String> names)`

### Inherited methods
- from `net.minecraftforge.client.model.obj.ObjModel.ModelObject`: `name`

## ObjModel.ModelMesh

*class* `net.minecraftforge.client.model.obj.ObjModel.ModelMesh`

Enclosing class: ObjModel

### Fields
- `@Nullable public ObjMaterialLibrary.Material mat`
- `@Nullable public @Nullable String smoothingGroup`
- `public final List<int[][]> faces`

### Methods
- `public void addQuads(IGeometryBakingContext owner,  IModelBuilder<?> modelBuilder,  Function<Material,TextureAtlasSprite> spriteGetter,  ModelState modelTransform)`
- `public void bake(CompositeRenderable.PartBuilder<?> builder,  IGeometryBakingContext configuration)`

## ObjModel.ModelObject

*class* `net.minecraftforge.client.model.obj.ObjModel.ModelObject`

Enclosing class: ObjModel

### Fields
- `public final String name`
- `List<ObjModel.ModelMesh> meshes`

### Methods
- `public String name()`
- `public void addQuads(IGeometryBakingContext owner,  IModelBuilder<?> modelBuilder,  ModelBaker baker,  Function<Material,TextureAtlasSprite> spriteGetter,  ModelState modelTransform,  ResourceLocation modelLocation)`
- `public void bake(CompositeRenderable.PartBuilder<?> builder,  IGeometryBakingContext configuration)`
- `public Collection<Material> getTextures(IGeometryBakingContext owner,  Function<ResourceLocation,UnbakedModel> modelGetter,  Set<com.mojang.datafixers.util.Pair<String,String>> missingTextureErrors)`
- `protected void addNamesRecursively(Set<String> names)`

## ObjModel.ModelSettings

*record* `net.minecraftforge.client.model.obj.ObjModel.ModelSettings`

Enclosing class: ObjModel

### Fields
- `@NotNull private final @NotNull ResourceLocation modelLocation`
  The field for the modelLocation record component.
- `private final boolean automaticCulling`
  The field for the automaticCulling record component.
- `private final boolean shadeQuads`
  The field for the shadeQuads record component.
- `private final boolean flipV`
  The field for the flipV record component.
- `private final boolean emissiveAmbient`
  The field for the emissiveAmbient record component.
- `@Nullable private final @Nullable String mtlOverride`
  The field for the mtlOverride record component.

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
- `@NotNull public @NotNull ResourceLocation modelLocation()`
  Returns the value of the modelLocation record component.
  - returns: the value of the modelLocation record component
- `public boolean automaticCulling()`
  Returns the value of the automaticCulling record component.
  - returns: the value of the automaticCulling record component
- `public boolean shadeQuads()`
  Returns the value of the shadeQuads record component.
  - returns: the value of the shadeQuads record component
- `public boolean flipV()`
  Returns the value of the flipV record component.
  - returns: the value of the flipV record component
- `public boolean emissiveAmbient()`
  Returns the value of the emissiveAmbient record component.
  - returns: the value of the emissiveAmbient record component
- `@Nullable public @Nullable String mtlOverride()`
  Returns the value of the mtlOverride record component.
  - returns: the value of the mtlOverride record component

## ObjTokenizer

*class* `net.minecraftforge.client.model.obj.ObjTokenizer`

A tokenizer for OBJ and MTL files.

 Joins split lines and ignores comments.

### Fields
- `private final BufferedReader lineReader`

### Methods
- `@Nullable public @Nullable String[] readAndSplitLine(boolean ignoreEmptyLines)  throws IOException`
  - throws: IOException
- `public void close()  throws IOException`
  - throws: IOException
