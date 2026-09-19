# net.minecraft.client.renderer.block.model

- [BakedQuad](#bakedquad)
- [BakedQuadRetextured](#bakedquadretextured)
- [BlockFaceUV](#blockfaceuv)
- [BlockPart](#blockpart)
- [BlockPartFace](#blockpartface)
- [BlockPartRotation](#blockpartrotation)
- [BuiltInModel](#builtinmodel)
- [FaceBakery](#facebakery)
- [IBakedModel](#ibakedmodel)
- [ItemCameraTransforms](#itemcameratransforms)
- [ItemCameraTransforms.TransformType](#itemcameratransforms.transformtype)
- [ItemModelGenerator](#itemmodelgenerator)
- [ItemOverride](#itemoverride)
- [ItemOverrideList](#itemoverridelist)
- [ItemTransformVec3f](#itemtransformvec3f)
- [ModelBakery](#modelbakery)
- [ModelBlock](#modelblock)
- [ModelBlock.Deserializer](#modelblock.deserializer)
- [ModelBlock.LoopException](#modelblock.loopexception)
- [ModelBlockDefinition](#modelblockdefinition)
- [ModelBlockDefinition.Deserializer](#modelblockdefinition.deserializer)
- [ModelBlockDefinition.MissingVariantException](#modelblockdefinition.missingvariantexception)
- [ModelManager](#modelmanager)
- [ModelResourceLocation](#modelresourcelocation)
- [ModelRotation](#modelrotation)
- [MultipartBakedModel](#multipartbakedmodel)
- [MultipartBakedModel.Builder](#multipartbakedmodel.builder)
- [SimpleBakedModel](#simplebakedmodel)
- [SimpleBakedModel.Builder](#simplebakedmodel.builder)
- [Variant](#variant)
- [Variant.Deserializer](#variant.deserializer)
- [VariantList](#variantlist)
- [VariantList.Deserializer](#variantlist.deserializer)
- [WeightedBakedModel](#weightedbakedmodel)
- [WeightedBakedModel.Builder](#weightedbakedmodel.builder)
## BakedQuad

*class* `net.minecraft.client.renderer.block.model.BakedQuad`

All Implemented Interfaces: IVertexProducer

### Fields
- `protected final int[] vertexData`
- `protected final int tintIndex`
- `protected final EnumFacing face`
- `protected final TextureAtlasSprite sprite`
- `protected final VertexFormat format`
- `protected final boolean applyDiffuseLighting`

### Methods
- `public TextureAtlasSprite getSprite()`
- `public int[] getVertexData()`
- `public boolean hasTintIndex()`
- `public int getTintIndex()`
- `public EnumFacing getFace()`
- `public void pipe(IVertexConsumer consumer)`
  - param: consumer - consumer to receive the vertex data this producer can provide
- `public VertexFormat getFormat()`
- `public boolean shouldApplyDiffuseLighting()`

## BakedQuadRetextured

*class* `net.minecraft.client.renderer.block.model.BakedQuadRetextured`

All Implemented Interfaces: IVertexProducer

### Inherited fields
- from `net.minecraft.client.renderer.block.model.BakedQuad`: `applyDiffuseLighting`, `face`, `format`, `sprite`, `tintIndex`, `vertexData`

### Methods
- `public TextureAtlasSprite getSprite()`

### Inherited methods
- from `net.minecraft.client.renderer.block.model.BakedQuad`: `getFace`, `getFormat`, `getTintIndex`, `getVertexData`, `hasTintIndex`, `pipe`, `shouldApplyDiffuseLighting`

## BlockFaceUV

*class* `net.minecraft.client.renderer.block.model.BlockFaceUV`

### Fields
- `public float[] uvs`
- `public final int rotation`

### Methods
- `public float getVertexU(int p_178348_1_)`
- `public float getVertexV(int p_178346_1_)`
- `public int getVertexRotatedRev(int p_178345_1_)`
- `public void setUvs(float[] uvsIn)`

## BlockPart

*class* `net.minecraft.client.renderer.block.model.BlockPart`

### Fields
- `public final Vector3f positionFrom`
- `public final Vector3f positionTo`
- `public final java.util.Map<EnumFacing,BlockPartFace> mapFaces`
- `public final BlockPartRotation partRotation`
- `public final boolean shade`

## BlockPartFace

*class* `net.minecraft.client.renderer.block.model.BlockPartFace`

### Fields
- `public static final EnumFacing FACING_DEFAULT`
- `public final EnumFacing cullFace`
- `public final int tintIndex`
- `public final java.lang.String texture`
- `public final BlockFaceUV blockFaceUV`

## BlockPartRotation

*class* `net.minecraft.client.renderer.block.model.BlockPartRotation`

### Fields
- `public final Vector3f origin`
- `public final EnumFacing.Axis axis`
- `public final float angle`
- `public final boolean rescale`

## BuiltInModel

*class* `net.minecraft.client.renderer.block.model.BuiltInModel`

All Implemented Interfaces: IBakedModel

### Methods
- `public java.util.List<BakedQuad> getQuads(IBlockState state,  EnumFacing side,  long rand)`
- `public boolean isAmbientOcclusion()`
- `public boolean isGui3d()`
- `public boolean isBuiltInRenderer()`
- `public TextureAtlasSprite getParticleTexture()`
- `public ItemCameraTransforms getItemCameraTransforms()`
- `public ItemOverrideList getOverrides()`

### Inherited methods
- from `net.minecraft.client.renderer.block.model.IBakedModel`: `handlePerspective`, `isAmbientOcclusion`

## FaceBakery

*class* `net.minecraft.client.renderer.block.model.FaceBakery`

### Methods
- `public BakedQuad makeBakedQuad(Vector3f posFrom,  Vector3f posTo,  BlockPartFace face,  TextureAtlasSprite sprite,  EnumFacing facing,  ModelRotation modelRotationIn,  BlockPartRotation partRotation,  boolean uvLocked,  boolean shade)`
- `public BakedQuad makeBakedQuad(Vector3f posFrom,  Vector3f posTo,  BlockPartFace face,  TextureAtlasSprite sprite,  EnumFacing facing,  ITransformation modelRotationIn,  BlockPartRotation partRotation,  boolean uvLocked,  boolean shade)`
- `public int rotateVertex(Vector3f p_188011_1_,  EnumFacing p_188011_2_,  int p_188011_3_,  ModelRotation p_188011_4_)`
- `public int rotateVertex(Vector3f p_188011_1_,  EnumFacing p_188011_2_,  int p_188011_3_,  ITransformation p_188011_4_)`
- `public static EnumFacing getFacingFromVertexData(int[] faceData)`

## IBakedModel

*interface* `net.minecraft.client.renderer.block.model.IBakedModel`

### Methods
- `java.util.List<BakedQuad> getQuads(IBlockState state,  EnumFacing side,  long rand)`
- `boolean isAmbientOcclusion()`
- `boolean isGui3d()`
- `boolean isBuiltInRenderer()`
- `TextureAtlasSprite getParticleTexture()`
- `@Deprecated default ItemCameraTransforms getItemCameraTransforms()` (deprecated)
  Deprecated.
- `ItemOverrideList getOverrides()`
- `default boolean isAmbientOcclusion(IBlockState state)`
- `default <any> handlePerspective(ItemCameraTransforms.TransformType cameraTransformType)`

## ItemCameraTransforms

*class* `net.minecraft.client.renderer.block.model.ItemCameraTransforms`

### Fields
- `public static final ItemCameraTransforms DEFAULT`
- `public static float offsetTranslateX`
- `public static float offsetTranslateY`
- `public static float offsetTranslateZ`
- `public static float offsetRotationX`
- `public static float offsetRotationY`
- `public static float offsetRotationZ`
- `public static float offsetScaleX`
- `public static float offsetScaleY`
- `public static float offsetScaleZ`
- `public final ItemTransformVec3f thirdperson_left`
- `public final ItemTransformVec3f thirdperson_right`
- `public final ItemTransformVec3f firstperson_left`
- `public final ItemTransformVec3f firstperson_right`
- `public final ItemTransformVec3f head`
- `public final ItemTransformVec3f gui`
- `public final ItemTransformVec3f ground`
- `public final ItemTransformVec3f fixed`

### Methods
- `public void applyTransform(ItemCameraTransforms.TransformType type)`
- `public static void applyTransformSide(ItemTransformVec3f vec,  boolean leftHand)`
- `@Deprecated public ItemTransformVec3f getTransform(ItemCameraTransforms.TransformType type)` (deprecated)
  Deprecated.
- `public boolean hasCustomTransform(ItemCameraTransforms.TransformType type)`

## ItemCameraTransforms.TransformType

*enum* `net.minecraft.client.renderer.block.model.ItemCameraTransforms.TransformType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ItemCameraTransforms.TransformType>, IModelPart

Enclosing class: ItemCameraTransforms

### Fields
- `public static final ItemCameraTransforms.TransformType NONE`
- `public static final ItemCameraTransforms.TransformType THIRD_PERSON_LEFT_HAND`
- `public static final ItemCameraTransforms.TransformType THIRD_PERSON_RIGHT_HAND`
- `public static final ItemCameraTransforms.TransformType FIRST_PERSON_LEFT_HAND`
- `public static final ItemCameraTransforms.TransformType FIRST_PERSON_RIGHT_HAND`
- `public static final ItemCameraTransforms.TransformType HEAD`
- `public static final ItemCameraTransforms.TransformType GUI`
- `public static final ItemCameraTransforms.TransformType GROUND`
- `public static final ItemCameraTransforms.TransformType FIXED`

### Methods
- `public static ItemCameraTransforms.TransformType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ItemCameraTransforms.TransformType c : ItemCameraTransforms.TransformType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ItemCameraTransforms.TransformType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ItemModelGenerator

*class* `net.minecraft.client.renderer.block.model.ItemModelGenerator`

### Fields
- `public static final java.util.List<java.lang.String> LAYERS`

### Methods
- `public ModelBlock makeItemModel(TextureMap textureMapIn,  ModelBlock blockModel)`

## ItemOverride

*class* `net.minecraft.client.renderer.block.model.ItemOverride`

### Methods
- `public ResourceLocation getLocation()`

## ItemOverrideList

*class* `net.minecraft.client.renderer.block.model.ItemOverrideList`

### Fields
- `public static final ItemOverrideList NONE`

### Methods
- `@Deprecated public ResourceLocation applyOverride(ItemStack stack,  World worldIn,  EntityLivingBase entityIn)` (deprecated)
  Deprecated.
- `public IBakedModel handleItemState(IBakedModel originalModel,  ItemStack stack,  World world,  EntityLivingBase entity)`
- `public <any> getOverrides()`

## ItemTransformVec3f

*class* `net.minecraft.client.renderer.block.model.ItemTransformVec3f`

Deprecated.

All Implemented Interfaces: IModelState

### Fields
- `public static final ItemTransformVec3f DEFAULT` (deprecated)
  Deprecated.
- `public final Vector3f rotation` (deprecated)
  Deprecated.
- `public final Vector3f translation` (deprecated)
  Deprecated.
- `public final Vector3f scale` (deprecated)
  Deprecated.

### Methods
- `public java.util.Optional<TRSRTransformation> apply(java.util.Optional<? extends IModelPart> part)` (deprecated)
  Deprecated.
- `public boolean equals(java.lang.Object p_equals_1_)` (deprecated)
  Deprecated.
- `public int hashCode()` (deprecated)
  Deprecated.

## ModelBakery

*class* `net.minecraft.client.renderer.block.model.ModelBakery`

### Fields
- `protected static final java.util.Set<ResourceLocation> LOCATIONS_BUILTIN_TEXTURES`
- `public static final ModelResourceLocation MODEL_MISSING`
- `protected final IResourceManager resourceManager`
- `protected final java.util.Map<ResourceLocation,TextureAtlasSprite> sprites`
- `protected final TextureMap textureMap`
- `protected final BlockModelShapes blockModelShapes`
- `protected final RegistrySimple<ModelResourceLocation,IBakedModel> bakedRegistry`
- `protected static final ModelBlock MODEL_GENERATED`
- `protected static final ModelBlock MODEL_ENTITY`

### Methods
- `public IRegistry<ModelResourceLocation,IBakedModel> setupModelRegistry()`
- `protected void loadBlocks()`
- `protected void loadBlock(BlockStateMapper blockstatemapper,  Block block,  ResourceLocation resourcelocation)`
- `protected void loadVariantItemModels()`
- `protected void registerVariant(ModelBlockDefinition blockstateDefinition,  ModelResourceLocation location)`
- `protected ModelBlockDefinition getModelBlockDefinition(ResourceLocation location)`
- `protected void loadVariantModels()`
- `protected void loadMultipartVariantModels()`
- `protected void loadVariantList(ModelResourceLocation p_188638_1_,  VariantList p_188638_2_)`
- `protected ModelBlock loadModel(ResourceLocation location)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected ResourceLocation getModelLocation(ResourceLocation location)`
- `protected void loadItemModels()`
- `protected void registerVariantNames()`
- `protected java.util.List<java.lang.String> getVariantNames(Item stack)`
- `protected ResourceLocation getItemLocation(java.lang.String location)`
- `protected IBakedModel bakeModel(ModelBlock modelBlockIn,  ITransformation modelRotationIn,  boolean uvLocked)`
- `protected BakedQuad makeBakedQuad(BlockPart p_177589_1_,  BlockPartFace p_177589_2_,  TextureAtlasSprite p_177589_3_,  EnumFacing p_177589_4_,  ITransformation p_177589_5_,  boolean p_177589_6_)`
- `protected java.util.Set<ResourceLocation> getTextureLocations(ModelBlock p_177585_1_)`
- `protected boolean hasItemModel(ModelBlock p_177581_1_)`
- `protected boolean isCustomRenderer(ModelBlock p_177587_1_)`
- `protected ModelBlock makeItemModel(ModelBlock p_177582_1_)`
- `protected void registerMultipartVariant(ModelBlockDefinition definition,  java.util.Collection<ModelResourceLocation> locations)`
- `public static void registerItemVariants(Item item,  ResourceLocation... names)`

## ModelBlock

*class* `net.minecraft.client.renderer.block.model.ModelBlock`

### Fields
- `public final boolean ambientOcclusion`
- `public java.lang.String name`
- `public final java.util.Map<java.lang.String,java.lang.String> textures`
- `public ModelBlock parent`
- `protected ResourceLocation parentLocation`

### Methods
- `public static ModelBlock deserialize(java.io.Reader readerIn)`
- `public static ModelBlock deserialize(java.lang.String jsonString)`
- `public java.util.List<BlockPart> getElements()`
- `public boolean isAmbientOcclusion()`
- `public boolean isGui3d()`
- `public boolean isResolved()`
- `public void getParentFromMap(java.util.Map<ResourceLocation,ModelBlock> p_178299_1_)`
- `public java.util.Collection<ResourceLocation> getOverrideLocations()`
- `public java.util.List<ItemOverride> getOverrides()`
- `public ItemOverrideList createOverrides()`
- `public boolean isTexturePresent(java.lang.String textureName)`
- `public java.lang.String resolveTextureName(java.lang.String textureName)`
- `public ResourceLocation getParentLocation()`
- `public ModelBlock getRootModel()`
- `public ItemCameraTransforms getAllTransforms()`
- `public static void checkModelHierarchy(java.util.Map<ResourceLocation,ModelBlock> p_178312_0_)`

## ModelBlock.Deserializer

*class* `net.minecraft.client.renderer.block.model.ModelBlock.Deserializer`

Enclosing class: ModelBlock

### Methods
- `public ModelBlock deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `protected java.util.List<ItemOverride> getItemOverrides(JsonDeserializationContext deserializationContext,  JsonObject object)`
- `protected boolean getAmbientOcclusionEnabled(JsonObject object)`
- `protected java.util.List<BlockPart> getModelElements(JsonDeserializationContext deserializationContext,  JsonObject object)`

## ModelBlock.LoopException

*class* `net.minecraft.client.renderer.block.model.ModelBlock.LoopException`

All Implemented Interfaces: java.io.Serializable

Enclosing class: ModelBlock

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ModelBlockDefinition

*class* `net.minecraft.client.renderer.block.model.ModelBlockDefinition`

### Methods
- `@Deprecated public static ModelBlockDefinition parseFromReader(java.io.Reader reader)` (deprecated)
  Deprecated.
- `public static ModelBlockDefinition parseFromReader(java.io.Reader reader,  ResourceLocation location)`
- `public boolean hasVariant(java.lang.String p_188000_1_)`
- `public VariantList getVariant(java.lang.String p_188004_1_)`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public java.util.Set<VariantList> getMultipartVariants()`
- `public boolean hasMultipartData()`
- `public Multipart getMultipartData()`

## ModelBlockDefinition.Deserializer

*class* `net.minecraft.client.renderer.block.model.ModelBlockDefinition.Deserializer`

Enclosing class: ModelBlockDefinition

### Methods
- `public ModelBlockDefinition deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `protected java.util.Map<java.lang.String,VariantList> parseMapVariants(JsonDeserializationContext deserializationContext,  JsonObject object)`
- `protected Multipart parseMultipart(JsonDeserializationContext deserializationContext,  JsonObject object)`

## ModelBlockDefinition.MissingVariantException

*class* `net.minecraft.client.renderer.block.model.ModelBlockDefinition.MissingVariantException`

All Implemented Interfaces: java.io.Serializable

Enclosing class: ModelBlockDefinition

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ModelManager

*class* `net.minecraft.client.renderer.block.model.ModelManager`

All Implemented Interfaces: IResourceManagerReloadListener

### Methods
- `public void onResourceManagerReload(IResourceManager resourceManager)`
- `public IBakedModel getModel(ModelResourceLocation modelLocation)`
- `public IBakedModel getMissingModel()`
- `public TextureMap getTextureMap()`
- `public BlockModelShapes getBlockModelShapes()`

## ModelResourceLocation

*class* `net.minecraft.client.renderer.block.model.ModelResourceLocation`

All Implemented Interfaces: java.lang.Comparable<ResourceLocation>

### Inherited fields
- from `net.minecraft.util.ResourceLocation`: `resourceDomain`, `resourcePath`

### Methods
- `protected static java.lang.String[] parsePathString(java.lang.String pathIn)`
- `public java.lang.String getVariant()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public java.lang.String toString()`

### Inherited methods
- from `net.minecraft.util.ResourceLocation`: `compareTo`, `getResourceDomain`, `getResourcePath`, `splitObjectName`

## ModelRotation

*enum* `net.minecraft.client.renderer.block.model.ModelRotation`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ModelRotation>, IModelState, ITransformation

### Fields
- `public static final ModelRotation X0_Y0`
- `public static final ModelRotation X0_Y90`
- `public static final ModelRotation X0_Y180`
- `public static final ModelRotation X0_Y270`
- `public static final ModelRotation X90_Y0`
- `public static final ModelRotation X90_Y90`
- `public static final ModelRotation X90_Y180`
- `public static final ModelRotation X90_Y270`
- `public static final ModelRotation X180_Y0`
- `public static final ModelRotation X180_Y90`
- `public static final ModelRotation X180_Y180`
- `public static final ModelRotation X180_Y270`
- `public static final ModelRotation X270_Y0`
- `public static final ModelRotation X270_Y90`
- `public static final ModelRotation X270_Y180`
- `public static final ModelRotation X270_Y270`

### Methods
- `public static ModelRotation[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ModelRotation c : ModelRotation.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ModelRotation valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public Matrix4f getMatrix4d()`
- `public EnumFacing rotateFace(EnumFacing facing)`
- `public int rotateVertex(EnumFacing facing,  int vertexIndex)`
- `public static ModelRotation getModelRotation(int x,  int y)`
- `public java.util.Optional<TRSRTransformation> apply(java.util.Optional<? extends IModelPart> part)`
- `public javax.vecmath.Matrix4f getMatrix()`
- `public EnumFacing rotate(EnumFacing facing)`
- `public int rotate(EnumFacing facing,  int vertexIndex)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## MultipartBakedModel

*class* `net.minecraft.client.renderer.block.model.MultipartBakedModel`

All Implemented Interfaces: IBakedModel

### Fields
- `protected final boolean ambientOcclusion`
- `protected final boolean gui3D`
- `protected final TextureAtlasSprite particleTexture`
- `protected final ItemCameraTransforms cameraTransforms`
- `protected final ItemOverrideList overrides`

### Methods
- `public java.util.List<BakedQuad> getQuads(IBlockState state,  EnumFacing side,  long rand)`
- `public boolean isAmbientOcclusion()`
- `public boolean isGui3d()`
- `public boolean isBuiltInRenderer()`
- `public TextureAtlasSprite getParticleTexture()`
- `public ItemCameraTransforms getItemCameraTransforms()`
- `public ItemOverrideList getOverrides()`

### Inherited methods
- from `net.minecraft.client.renderer.block.model.IBakedModel`: `handlePerspective`, `isAmbientOcclusion`

## MultipartBakedModel.Builder

*class* `net.minecraft.client.renderer.block.model.MultipartBakedModel.Builder`

Enclosing class: MultipartBakedModel

### Methods
- `public void putModel(<any> predicate,  IBakedModel model)`
- `public IBakedModel makeMultipartModel()`

## SimpleBakedModel

*class* `net.minecraft.client.renderer.block.model.SimpleBakedModel`

All Implemented Interfaces: IBakedModel

### Fields
- `protected final java.util.List<BakedQuad> generalQuads`
- `protected final java.util.Map<EnumFacing,java.util.List<BakedQuad>> faceQuads`
- `protected final boolean ambientOcclusion`
- `protected final boolean gui3d`
- `protected final TextureAtlasSprite texture`
- `protected final ItemCameraTransforms cameraTransforms`
- `protected final ItemOverrideList itemOverrideList`

### Methods
- `public java.util.List<BakedQuad> getQuads(IBlockState state,  EnumFacing side,  long rand)`
- `public boolean isAmbientOcclusion()`
- `public boolean isGui3d()`
- `public boolean isBuiltInRenderer()`
- `public TextureAtlasSprite getParticleTexture()`
- `public ItemCameraTransforms getItemCameraTransforms()`
- `public ItemOverrideList getOverrides()`

### Inherited methods
- from `net.minecraft.client.renderer.block.model.IBakedModel`: `handlePerspective`, `isAmbientOcclusion`

## SimpleBakedModel.Builder

*class* `net.minecraft.client.renderer.block.model.SimpleBakedModel.Builder`

Enclosing class: SimpleBakedModel

### Methods
- `public SimpleBakedModel.Builder addFaceQuad(EnumFacing facing,  BakedQuad quad)`
- `public SimpleBakedModel.Builder addGeneralQuad(BakedQuad quad)`
- `public SimpleBakedModel.Builder setTexture(TextureAtlasSprite texture)`
- `public IBakedModel makeBakedModel()`

## Variant

*class* `net.minecraft.client.renderer.block.model.Variant`

All Implemented Interfaces: ISmartVariant

### Methods
- `public ResourceLocation getModelLocation()`
- `@Deprecated public ModelRotation getRotation()` (deprecated)
  Deprecated.
- `public IModelState getState()`
- `public boolean isUvLock()`
- `public int getWeight()`
- `public java.lang.String toString()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public IModel process(IModel base)`

## Variant.Deserializer

*class* `net.minecraft.client.renderer.block.model.Variant.Deserializer`

Enclosing class: Variant

### Methods
- `public Variant deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `protected ModelRotation parseModelRotation(JsonObject json)`
- `protected java.lang.String getStringModel(JsonObject json)`
- `protected int parseWeight(JsonObject json)`

## VariantList

*class* `net.minecraft.client.renderer.block.model.VariantList`

### Methods
- `public java.util.List<Variant> getVariantList()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`

## VariantList.Deserializer

*class* `net.minecraft.client.renderer.block.model.VariantList.Deserializer`

Enclosing class: VariantList

### Methods
- `public VariantList deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException

## WeightedBakedModel

*class* `net.minecraft.client.renderer.block.model.WeightedBakedModel`

All Implemented Interfaces: IBakedModel

### Methods
- `public java.util.List<BakedQuad> getQuads(IBlockState state,  EnumFacing side,  long rand)`
- `public boolean isAmbientOcclusion()`
- `public boolean isAmbientOcclusion(IBlockState state)`
- `public boolean isGui3d()`
- `public boolean isBuiltInRenderer()`
- `public TextureAtlasSprite getParticleTexture()`
- `public ItemCameraTransforms getItemCameraTransforms()`
- `public ItemOverrideList getOverrides()`

### Inherited methods
- from `net.minecraft.client.renderer.block.model.IBakedModel`: `handlePerspective`

## WeightedBakedModel.Builder

*class* `net.minecraft.client.renderer.block.model.WeightedBakedModel.Builder`

Enclosing class: WeightedBakedModel

### Methods
- `public WeightedBakedModel.Builder add(IBakedModel model,  int weight)`
- `public WeightedBakedModel build()`
- `public IBakedModel first()`
