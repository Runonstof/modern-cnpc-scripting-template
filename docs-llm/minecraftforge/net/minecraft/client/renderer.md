# net.minecraft.client.renderer

- [ActiveRenderInfo](#activerenderinfo)
- [BannerTextures](#bannertextures)
- [BannerTextures.Cache](#bannertextures.cache)
- [BlockFluidRenderer](#blockfluidrenderer)
- [BlockModelRenderer](#blockmodelrenderer)
- [BlockModelRenderer.EnumNeighborInfo](#blockmodelrenderer.enumneighborinfo)
- [BlockModelRenderer.Orientation](#blockmodelrenderer.orientation)
- [BlockModelShapes](#blockmodelshapes)
- [BlockRendererDispatcher](#blockrendererdispatcher)
- [BufferBuilder](#bufferbuilder)
- [BufferBuilder.State](#bufferbuilder.state)
- [ChestRenderer](#chestrenderer)
- [ChunkRenderContainer](#chunkrendercontainer)
- [DestroyBlockProgress](#destroyblockprogress)
- [EntityRenderer](#entityrenderer)
- [EnumFaceDirection](#enumfacedirection)
- [EnumFaceDirection.Constants](#enumfacedirection.constants)
- [EnumFaceDirection.VertexInformation](#enumfacedirection.vertexinformation)
- [GLAllocation](#glallocation)
- [GlStateManager](#glstatemanager)
- [GlStateManager.CullFace](#glstatemanager.cullface)
- [GlStateManager.DestFactor](#glstatemanager.destfactor)
- [GlStateManager.FogMode](#glstatemanager.fogmode)
- [GlStateManager.LogicOp](#glstatemanager.logicop)
- [GlStateManager.Profile](#glstatemanager.profile)
- [GlStateManager.SourceFactor](#glstatemanager.sourcefactor)
- [GlStateManager.TexGen](#glstatemanager.texgen)
- [IImageBuffer](#iimagebuffer)
- [ImageBufferDownload](#imagebufferdownload)
- [InventoryEffectRenderer](#inventoryeffectrenderer)
- [ItemMeshDefinition](#itemmeshdefinition)
- [ItemModelMesher](#itemmodelmesher)
- [ItemRenderer](#itemrenderer)
- [Matrix4f](#matrix4f)
- [OpenGlHelper](#openglhelper)
- [RegionRenderCacheBuilder](#regionrendercachebuilder)
- [RenderGlobal](#renderglobal)
- [RenderHelper](#renderhelper)
- [RenderItem](#renderitem)
- [RenderList](#renderlist)
- [StitcherException](#stitcherexception)
- [Tessellator](#tessellator)
- [ThreadDownloadImageData](#threaddownloadimagedata)
- [VboRenderList](#vborenderlist)
- [Vector3d](#vector3d)
- [VertexBufferUploader](#vertexbufferuploader)
- [ViewFrustum](#viewfrustum)
- [WorldVertexBufferUploader](#worldvertexbufferuploader)
## ActiveRenderInfo

*class* `net.minecraft.client.renderer.ActiveRenderInfo`

### Methods
- `public static void updateRenderInfo(EntityPlayer entityplayerIn,  boolean p_74583_1_)`
- `public static void updateRenderInfo(Entity entityplayerIn,  boolean p_74583_1_)`
- `public static Vec3d projectViewFromEntity(Entity entityIn,  double p_178806_1_)`
- `public static IBlockState getBlockStateAtEntityViewpoint(World worldIn,  Entity entityIn,  float p_186703_2_)`
- `public static float getRotationX()`
- `public static float getRotationXZ()`
- `public static float getRotationZ()`
- `public static float getRotationYZ()`
- `public static float getRotationXY()`
- `public static Vec3d getCameraPosition()`
  Vector from render view entity position (corrected for partialTickTime) to the middle of screen

## BannerTextures

*class* `net.minecraft.client.renderer.BannerTextures`

### Fields
- `public static final BannerTextures.Cache BANNER_DESIGNS`
- `public static final BannerTextures.Cache SHIELD_DESIGNS`
- `public static final ResourceLocation SHIELD_BASE_TEXTURE`
- `public static final ResourceLocation BANNER_BASE_TEXTURE`

## BannerTextures.Cache

*class* `net.minecraft.client.renderer.BannerTextures.Cache`

Enclosing class: BannerTextures

### Methods
- `public ResourceLocation getResourceLocation(java.lang.String id,  java.util.List<BannerPattern> patternList,  java.util.List<EnumDyeColor> colorList)`

## BlockFluidRenderer

*class* `net.minecraft.client.renderer.BlockFluidRenderer`

### Methods
- `protected void initAtlasSprites()`
- `public boolean renderFluid(IBlockAccess blockAccess,  IBlockState blockStateIn,  BlockPos blockPosIn,  BufferBuilder bufferBuilderIn)`

## BlockModelRenderer

*class* `net.minecraft.client.renderer.BlockModelRenderer`

### Methods
- `public boolean renderModel(IBlockAccess blockAccessIn,  IBakedModel modelIn,  IBlockState blockStateIn,  BlockPos blockPosIn,  BufferBuilder buffer,  boolean checkSides)`
- `public boolean renderModel(IBlockAccess worldIn,  IBakedModel modelIn,  IBlockState stateIn,  BlockPos posIn,  BufferBuilder buffer,  boolean checkSides,  long rand)`
- `public boolean renderModelSmooth(IBlockAccess worldIn,  IBakedModel modelIn,  IBlockState stateIn,  BlockPos posIn,  BufferBuilder buffer,  boolean checkSides,  long rand)`
- `public boolean renderModelFlat(IBlockAccess worldIn,  IBakedModel modelIn,  IBlockState stateIn,  BlockPos posIn,  BufferBuilder buffer,  boolean checkSides,  long rand)`
- `public void renderModelBrightnessColor(IBakedModel bakedModel,  float p_178262_2_,  float red,  float green,  float blue)`
- `public void renderModelBrightnessColor(IBlockState state,  IBakedModel p_187495_2_,  float p_187495_3_,  float p_187495_4_,  float p_187495_5_,  float p_187495_6_)`
- `public void renderModelBrightness(IBakedModel model,  IBlockState state,  float brightness,  boolean p_178266_4_)`

## BlockModelRenderer.EnumNeighborInfo

*enum* `net.minecraft.client.renderer.BlockModelRenderer.EnumNeighborInfo`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<BlockModelRenderer.EnumNeighborInfo>

Enclosing class: BlockModelRenderer

### Fields
- `public static final BlockModelRenderer.EnumNeighborInfo DOWN`
- `public static final BlockModelRenderer.EnumNeighborInfo UP`
- `public static final BlockModelRenderer.EnumNeighborInfo NORTH`
- `public static final BlockModelRenderer.EnumNeighborInfo SOUTH`
- `public static final BlockModelRenderer.EnumNeighborInfo WEST`
- `public static final BlockModelRenderer.EnumNeighborInfo EAST`

### Methods
- `public static BlockModelRenderer.EnumNeighborInfo[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (BlockModelRenderer.EnumNeighborInfo c : BlockModelRenderer.EnumNeighborInfo.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static BlockModelRenderer.EnumNeighborInfo valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public static BlockModelRenderer.EnumNeighborInfo getNeighbourInfo(EnumFacing p_178273_0_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## BlockModelRenderer.Orientation

*enum* `net.minecraft.client.renderer.BlockModelRenderer.Orientation`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<BlockModelRenderer.Orientation>

Enclosing class: BlockModelRenderer

### Fields
- `public static final BlockModelRenderer.Orientation DOWN`
- `public static final BlockModelRenderer.Orientation UP`
- `public static final BlockModelRenderer.Orientation NORTH`
- `public static final BlockModelRenderer.Orientation SOUTH`
- `public static final BlockModelRenderer.Orientation WEST`
- `public static final BlockModelRenderer.Orientation EAST`
- `public static final BlockModelRenderer.Orientation FLIP_DOWN`
- `public static final BlockModelRenderer.Orientation FLIP_UP`
- `public static final BlockModelRenderer.Orientation FLIP_NORTH`
- `public static final BlockModelRenderer.Orientation FLIP_SOUTH`
- `public static final BlockModelRenderer.Orientation FLIP_WEST`
- `public static final BlockModelRenderer.Orientation FLIP_EAST`

### Methods
- `public static BlockModelRenderer.Orientation[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (BlockModelRenderer.Orientation c : BlockModelRenderer.Orientation.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static BlockModelRenderer.Orientation valueOf(java.lang.String name)`
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

## BlockModelShapes

*class* `net.minecraft.client.renderer.BlockModelShapes`

### Methods
- `public BlockStateMapper getBlockStateMapper()`
- `public TextureAtlasSprite getTexture(IBlockState state)`
- `public IBakedModel getModelForState(IBlockState state)`
- `public ModelManager getModelManager()`
- `public void reloadModels()`
- `public void registerBlockWithStateMapper(Block assoc,  IStateMapper stateMapper)`
- `public void registerBuiltInBlocks(Block... builtIns)`

## BlockRendererDispatcher

*class* `net.minecraft.client.renderer.BlockRendererDispatcher`

All Implemented Interfaces: IResourceManagerReloadListener

### Methods
- `public BlockModelShapes getBlockModelShapes()`
- `public void renderBlockDamage(IBlockState state,  BlockPos pos,  TextureAtlasSprite texture,  IBlockAccess blockAccess)`
- `public boolean renderBlock(IBlockState state,  BlockPos pos,  IBlockAccess blockAccess,  BufferBuilder bufferBuilderIn)`
- `public BlockModelRenderer getBlockModelRenderer()`
- `public IBakedModel getModelForState(IBlockState state)`
- `public void renderBlockBrightness(IBlockState state,  float brightness)`
- `public void onResourceManagerReload(IResourceManager resourceManager)`

## BufferBuilder

*class* `net.minecraft.client.renderer.BufferBuilder`

### Methods
- `public void sortVertexData(float p_181674_1_,  float p_181674_2_,  float p_181674_3_)`
- `public BufferBuilder.State getVertexState()`
- `public void setVertexState(BufferBuilder.State state)`
- `public void reset()`
- `public void begin(int glMode,  VertexFormat format)`
- `public BufferBuilder tex(double u,  double v)`
- `public BufferBuilder lightmap(int p_187314_1_,  int p_187314_2_)`
- `public void putBrightness4(int p_178962_1_,  int p_178962_2_,  int p_178962_3_,  int p_178962_4_)`
- `public void putPosition(double x,  double y,  double z)`
- `public int getColorIndex(int vertexIndex)`
- `public void putColorMultiplier(float red,  float green,  float blue,  int vertexIndex)`
- `public void putColorRGB_F(float red,  float green,  float blue,  int vertexIndex)`
- `public void putColorRGBA(int index,  int red,  int green,  int blue)`
- `public void noColor()`
- `public BufferBuilder color(float red,  float green,  float blue,  float alpha)`
- `public BufferBuilder color(int red,  int green,  int blue,  int alpha)`
- `public void addVertexData(int[] vertexData)`
- `public void endVertex()`
- `public BufferBuilder pos(double x,  double y,  double z)`
- `public void putNormal(float x,  float y,  float z)`
- `public BufferBuilder normal(float x,  float y,  float z)`
- `public void setTranslation(double x,  double y,  double z)`
- `public void finishDrawing()`
- `public java.nio.ByteBuffer getByteBuffer()`
- `public VertexFormat getVertexFormat()`
- `public int getVertexCount()`
- `public int getDrawMode()`
- `public void putColor4(int argb)`
- `public void putColorRGB_F4(float red,  float green,  float blue)`
- `public void putColorRGBA(int index,  int red,  int green,  int blue,  int alpha)`
- `public boolean isColorDisabled()`
- `public void putBulkData(java.nio.ByteBuffer buffer)`

## BufferBuilder.State

*class* `net.minecraft.client.renderer.BufferBuilder.State`

Enclosing class: BufferBuilder

### Methods
- `public int[] getRawBuffer()`
- `public int getVertexCount()`
- `public VertexFormat getVertexFormat()`

## ChestRenderer

*class* `net.minecraft.client.renderer.ChestRenderer`

### Methods
- `public void renderChestBrightness(Block blockIn,  float color)`

## ChunkRenderContainer

*class* `net.minecraft.client.renderer.ChunkRenderContainer`

### Fields
- `protected java.util.List<RenderChunk> renderChunks`
- `protected boolean initialized`

### Methods
- `public void initialize(double viewEntityXIn,  double viewEntityYIn,  double viewEntityZIn)`
- `public void preRenderChunk(RenderChunk renderChunkIn)`
- `public void addRenderChunk(RenderChunk renderChunkIn,  BlockRenderLayer layer)`
- `public abstract void renderChunkLayer(BlockRenderLayer layer)`

## DestroyBlockProgress

*class* `net.minecraft.client.renderer.DestroyBlockProgress`

### Methods
- `public BlockPos getPosition()`
- `public void setPartialBlockDamage(int damage)`
- `public int getPartialBlockDamage()`
- `public void setCloudUpdateTick(int createdAtCloudUpdateTickIn)`
- `public int getCreationCloudUpdateTick()`

## EntityRenderer

*class* `net.minecraft.client.renderer.EntityRenderer`

All Implemented Interfaces: IResourceManagerReloadListener

### Fields
- `public static boolean anaglyphEnable`
- `public static int anaglyphField`
- `public final ItemRenderer itemRenderer`
- `public static final int SHADER_COUNT`

### Methods
- `public boolean isShaderActive()`
- `public void stopUseShader()`
- `public void switchUseShader()`
- `public void loadEntityShader(Entity entityIn)`
- `public void loadShader(ResourceLocation resourceLocationIn)`
- `public void onResourceManagerReload(IResourceManager resourceManager)`
- `public void updateRenderer()`
- `public ShaderGroup getShaderGroup()`
- `public void updateShaderGroupSize(int width,  int height)`
- `public void getMouseOver(float partialTicks)`
- `public void disableLightmap()`
- `public void enableLightmap()`
- `public void updateCameraAndRender(float partialTicks,  long nanoTime)`
- `public void renderStreamIndicator(float partialTicks)`
- `public void renderWorld(float partialTicks,  long finishTimeNano)`
- `protected void renderRainSnow(float partialTicks)`
- `public void setupOverlayRendering()`
- `public void setupFogColor(boolean black)`
- `public void resetData()`
- `public MapItemRenderer getMapItemRenderer()`
- `public static void drawNameplate(FontRenderer fontRendererIn,  java.lang.String str,  float x,  float y,  float z,  int verticalShift,  float viewerYaw,  float viewerPitch,  boolean isThirdPersonFrontal,  boolean isSneaking)`
- `public void displayItemActivation(ItemStack stack)`

## EnumFaceDirection

*enum* `net.minecraft.client.renderer.EnumFaceDirection`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumFaceDirection>

### Fields
- `public static final EnumFaceDirection DOWN`
- `public static final EnumFaceDirection UP`
- `public static final EnumFaceDirection NORTH`
- `public static final EnumFaceDirection SOUTH`
- `public static final EnumFaceDirection WEST`
- `public static final EnumFaceDirection EAST`

### Methods
- `public static EnumFaceDirection[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumFaceDirection c : EnumFaceDirection.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumFaceDirection valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public static EnumFaceDirection getFacing(EnumFacing facing)`
- `public EnumFaceDirection.VertexInformation getVertexInformation(int index)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## EnumFaceDirection.Constants

*class* `net.minecraft.client.renderer.EnumFaceDirection.Constants`

Enclosing class: EnumFaceDirection

### Fields
- `public static final int SOUTH_INDEX`
- `public static final int UP_INDEX`
- `public static final int EAST_INDEX`
- `public static final int NORTH_INDEX`
- `public static final int DOWN_INDEX`
- `public static final int WEST_INDEX`

## EnumFaceDirection.VertexInformation

*class* `net.minecraft.client.renderer.EnumFaceDirection.VertexInformation`

Enclosing class: EnumFaceDirection

### Fields
- `public final int xIndex`
- `public final int yIndex`
- `public final int zIndex`

## GLAllocation

*class* `net.minecraft.client.renderer.GLAllocation`

### Methods
- `public static int generateDisplayLists(int range)`
- `public static void deleteDisplayLists(int list,  int range)`
- `public static void deleteDisplayLists(int list)`
- `public static java.nio.ByteBuffer createDirectByteBuffer(int capacity)`
- `public static java.nio.IntBuffer createDirectIntBuffer(int capacity)`
- `public static java.nio.FloatBuffer createDirectFloatBuffer(int capacity)`

## GlStateManager

*class* `net.minecraft.client.renderer.GlStateManager`

### Methods
- `public static void pushAttrib()`
- `public static void popAttrib()`
- `public static void disableAlpha()`
- `public static void enableAlpha()`
- `public static void alphaFunc(int func,  float ref)`
- `public static void enableLighting()`
- `public static void disableLighting()`
- `public static void enableLight(int light)`
- `public static void disableLight(int light)`
- `public static void enableColorMaterial()`
- `public static void disableColorMaterial()`
- `public static void colorMaterial(int face,  int mode)`
- `public static void glLight(int light,  int pname,  java.nio.FloatBuffer params)`
- `public static void glLightModel(int pname,  java.nio.FloatBuffer params)`
- `public static void glNormal3f(float nx,  float ny,  float nz)`
- `public static void disableDepth()`
- `public static void enableDepth()`
- `public static void depthFunc(int depthFunc)`
- `public static void depthMask(boolean flagIn)`
- `public static void disableBlend()`
- `public static void enableBlend()`
- `public static void blendFunc(GlStateManager.SourceFactor srcFactor,  GlStateManager.DestFactor dstFactor)`
- `public static void blendFunc(int srcFactor,  int dstFactor)`
- `public static void tryBlendFuncSeparate(GlStateManager.SourceFactor srcFactor,  GlStateManager.DestFactor dstFactor,  GlStateManager.SourceFactor srcFactorAlpha,  GlStateManager.DestFactor dstFactorAlpha)`
- `public static void tryBlendFuncSeparate(int srcFactor,  int dstFactor,  int srcFactorAlpha,  int dstFactorAlpha)`
- `public static void glBlendEquation(int blendEquation)`
- `public static void enableOutlineMode(int color)`
- `public static void disableOutlineMode()`
- `public static void enableFog()`
- `public static void disableFog()`
- `public static void setFog(GlStateManager.FogMode fogMode)`
- `public static void setFogDensity(float param)`
- `public static void setFogStart(float param)`
- `public static void setFogEnd(float param)`
- `public static void glFog(int pname,  java.nio.FloatBuffer param)`
- `public static void glFogi(int pname,  int param)`
- `public static void enableCull()`
- `public static void disableCull()`
- `public static void cullFace(GlStateManager.CullFace cullFace)`
- `public static void glPolygonMode(int face,  int mode)`
- `public static void enablePolygonOffset()`
- `public static void disablePolygonOffset()`
- `public static void doPolygonOffset(float factor,  float units)`
- `public static void enableColorLogic()`
- `public static void disableColorLogic()`
- `public static void colorLogicOp(GlStateManager.LogicOp logicOperation)`
- `public static void colorLogicOp(int opcode)`
- `public static void enableTexGenCoord(GlStateManager.TexGen texGen)`
- `public static void disableTexGenCoord(GlStateManager.TexGen texGen)`
- `public static void texGen(GlStateManager.TexGen texGen,  int param)`
- `public static void texGen(GlStateManager.TexGen texGen,  int pname,  java.nio.FloatBuffer params)`
- `public static void setActiveTexture(int texture)`
- `public static void enableTexture2D()`
- `public static void disableTexture2D()`
- `public static void glTexEnv(int target,  int parameterName,  java.nio.FloatBuffer parameters)`
- `public static void glTexEnvi(int target,  int parameterName,  int parameter)`
- `public static void glTexEnvf(int target,  int parameterName,  float parameter)`
- `public static void glTexParameterf(int target,  int parameterName,  float parameter)`
- `public static void glTexParameteri(int target,  int parameterName,  int parameter)`
- `public static int glGetTexLevelParameteri(int target,  int level,  int parameterName)`
- `public static int generateTexture()`
- `public static void deleteTexture(int texture)`
- `public static void bindTexture(int texture)`
- `public static void glTexImage2D(int target,  int level,  int internalFormat,  int width,  int height,  int border,  int format,  int type,  java.nio.IntBuffer pixels)`
- `public static void glTexSubImage2D(int target,  int level,  int xOffset,  int yOffset,  int width,  int height,  int format,  int type,  java.nio.IntBuffer pixels)`
- `public static void glCopyTexSubImage2D(int target,  int level,  int xOffset,  int yOffset,  int x,  int y,  int width,  int height)`
- `public static void glGetTexImage(int target,  int level,  int format,  int type,  java.nio.IntBuffer pixels)`
- `public static void enableNormalize()`
- `public static void disableNormalize()`
- `public static void shadeModel(int mode)`
- `public static void enableRescaleNormal()`
- `public static void disableRescaleNormal()`
- `public static void viewport(int x,  int y,  int width,  int height)`
- `public static void colorMask(boolean red,  boolean green,  boolean blue,  boolean alpha)`
- `public static void clearDepth(double depth)`
- `public static void clearColor(float red,  float green,  float blue,  float alpha)`
- `public static void clear(int mask)`
- `public static void matrixMode(int mode)`
- `public static void loadIdentity()`
- `public static void pushMatrix()`
- `public static void popMatrix()`
- `public static void getFloat(int pname,  java.nio.FloatBuffer params)`
- `public static void ortho(double left,  double right,  double bottom,  double top,  double zNear,  double zFar)`
- `public static void rotate(float angle,  float x,  float y,  float z)`
- `public static void scale(float x,  float y,  float z)`
- `public static void scale(double x,  double y,  double z)`
- `public static void translate(float x,  float y,  float z)`
- `public static void translate(double x,  double y,  double z)`
- `public static void multMatrix(java.nio.FloatBuffer matrix)`
- `public static void rotate(Quaternion quaternionIn)`
- `public static java.nio.FloatBuffer quatToGlMatrix(java.nio.FloatBuffer buffer,  Quaternion quaternionIn)`
- `public static void color(float colorRed,  float colorGreen,  float colorBlue,  float colorAlpha)`
- `public static void color(float colorRed,  float colorGreen,  float colorBlue)`
- `public static void glTexCoord2f(float sCoord,  float tCoord)`
- `public static void glVertex3f(float x,  float y,  float z)`
- `public static void resetColor()`
- `public static void glNormalPointer(int type,  int stride,  java.nio.ByteBuffer buffer)`
- `public static void glTexCoordPointer(int size,  int type,  int stride,  int buffer_offset)`
- `public static void glTexCoordPointer(int size,  int type,  int stride,  java.nio.ByteBuffer buffer)`
- `public static void glVertexPointer(int size,  int type,  int stride,  int buffer_offset)`
- `public static void glVertexPointer(int size,  int type,  int stride,  java.nio.ByteBuffer buffer)`
- `public static void glColorPointer(int size,  int type,  int stride,  int buffer_offset)`
- `public static void glColorPointer(int size,  int type,  int stride,  java.nio.ByteBuffer buffer)`
- `public static void glDisableClientState(int cap)`
- `public static void glEnableClientState(int cap)`
- `public static void glBegin(int mode)`
- `public static void glEnd()`
- `public static void glDrawArrays(int mode,  int first,  int count)`
- `public static void glLineWidth(float width)`
- `public static void callList(int list)`
- `public static void glDeleteLists(int list,  int range)`
- `public static void glNewList(int list,  int mode)`
- `public static void glEndList()`
- `public static int glGenLists(int range)`
- `public static void glPixelStorei(int parameterName,  int param)`
- `public static void glReadPixels(int x,  int y,  int width,  int height,  int format,  int type,  java.nio.IntBuffer pixels)`
- `public static int glGetError()`
- `public static java.lang.String glGetString(int name)`
- `public static void glGetInteger(int parameterName,  java.nio.IntBuffer parameters)`
- `public static int glGetInteger(int parameterName)`
- `public static void enableBlendProfile(GlStateManager.Profile p_187408_0_)`
- `public static void disableBlendProfile(GlStateManager.Profile p_187440_0_)`

## GlStateManager.CullFace

*enum* `net.minecraft.client.renderer.GlStateManager.CullFace`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<GlStateManager.CullFace>

Enclosing class: GlStateManager

### Fields
- `public final int mode`
- `public static final GlStateManager.CullFace FRONT`
- `public static final GlStateManager.CullFace BACK`
- `public static final GlStateManager.CullFace FRONT_AND_BACK`

### Methods
- `public static GlStateManager.CullFace[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (GlStateManager.CullFace c : GlStateManager.CullFace.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static GlStateManager.CullFace valueOf(java.lang.String name)`
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

## GlStateManager.DestFactor

*enum* `net.minecraft.client.renderer.GlStateManager.DestFactor`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<GlStateManager.DestFactor>

Enclosing class: GlStateManager

### Fields
- `public final int factor`
- `public static final GlStateManager.DestFactor CONSTANT_ALPHA`
- `public static final GlStateManager.DestFactor CONSTANT_COLOR`
- `public static final GlStateManager.DestFactor DST_ALPHA`
- `public static final GlStateManager.DestFactor DST_COLOR`
- `public static final GlStateManager.DestFactor ONE`
- `public static final GlStateManager.DestFactor ONE_MINUS_CONSTANT_ALPHA`
- `public static final GlStateManager.DestFactor ONE_MINUS_CONSTANT_COLOR`
- `public static final GlStateManager.DestFactor ONE_MINUS_DST_ALPHA`
- `public static final GlStateManager.DestFactor ONE_MINUS_DST_COLOR`
- `public static final GlStateManager.DestFactor ONE_MINUS_SRC_ALPHA`
- `public static final GlStateManager.DestFactor ONE_MINUS_SRC_COLOR`
- `public static final GlStateManager.DestFactor SRC_ALPHA`
- `public static final GlStateManager.DestFactor SRC_COLOR`
- `public static final GlStateManager.DestFactor ZERO`

### Methods
- `public static GlStateManager.DestFactor[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (GlStateManager.DestFactor c : GlStateManager.DestFactor.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static GlStateManager.DestFactor valueOf(java.lang.String name)`
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

## GlStateManager.FogMode

*enum* `net.minecraft.client.renderer.GlStateManager.FogMode`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<GlStateManager.FogMode>

Enclosing class: GlStateManager

### Fields
- `public final int capabilityId`
- `public static final GlStateManager.FogMode LINEAR`
- `public static final GlStateManager.FogMode EXP`
- `public static final GlStateManager.FogMode EXP2`

### Methods
- `public static GlStateManager.FogMode[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (GlStateManager.FogMode c : GlStateManager.FogMode.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static GlStateManager.FogMode valueOf(java.lang.String name)`
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

## GlStateManager.LogicOp

*enum* `net.minecraft.client.renderer.GlStateManager.LogicOp`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<GlStateManager.LogicOp>

Enclosing class: GlStateManager

### Fields
- `public final int opcode`
- `public static final GlStateManager.LogicOp AND`
- `public static final GlStateManager.LogicOp AND_INVERTED`
- `public static final GlStateManager.LogicOp AND_REVERSE`
- `public static final GlStateManager.LogicOp CLEAR`
- `public static final GlStateManager.LogicOp COPY`
- `public static final GlStateManager.LogicOp COPY_INVERTED`
- `public static final GlStateManager.LogicOp EQUIV`
- `public static final GlStateManager.LogicOp INVERT`
- `public static final GlStateManager.LogicOp NAND`
- `public static final GlStateManager.LogicOp NOOP`
- `public static final GlStateManager.LogicOp NOR`
- `public static final GlStateManager.LogicOp OR`
- `public static final GlStateManager.LogicOp OR_INVERTED`
- `public static final GlStateManager.LogicOp OR_REVERSE`
- `public static final GlStateManager.LogicOp SET`
- `public static final GlStateManager.LogicOp XOR`

### Methods
- `public static GlStateManager.LogicOp[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (GlStateManager.LogicOp c : GlStateManager.LogicOp.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static GlStateManager.LogicOp valueOf(java.lang.String name)`
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

## GlStateManager.Profile

*enum* `net.minecraft.client.renderer.GlStateManager.Profile`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<GlStateManager.Profile>

Enclosing class: GlStateManager

### Fields
- `public static final GlStateManager.Profile DEFAULT`
- `public static final GlStateManager.Profile PLAYER_SKIN`
- `public static final GlStateManager.Profile TRANSPARENT_MODEL`

### Methods
- `public static GlStateManager.Profile[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (GlStateManager.Profile c : GlStateManager.Profile.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static GlStateManager.Profile valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public abstract void apply()`
- `public abstract void clean()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## GlStateManager.SourceFactor

*enum* `net.minecraft.client.renderer.GlStateManager.SourceFactor`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<GlStateManager.SourceFactor>

Enclosing class: GlStateManager

### Fields
- `public final int factor`
- `public static final GlStateManager.SourceFactor CONSTANT_ALPHA`
- `public static final GlStateManager.SourceFactor CONSTANT_COLOR`
- `public static final GlStateManager.SourceFactor DST_ALPHA`
- `public static final GlStateManager.SourceFactor DST_COLOR`
- `public static final GlStateManager.SourceFactor ONE`
- `public static final GlStateManager.SourceFactor ONE_MINUS_CONSTANT_ALPHA`
- `public static final GlStateManager.SourceFactor ONE_MINUS_CONSTANT_COLOR`
- `public static final GlStateManager.SourceFactor ONE_MINUS_DST_ALPHA`
- `public static final GlStateManager.SourceFactor ONE_MINUS_DST_COLOR`
- `public static final GlStateManager.SourceFactor ONE_MINUS_SRC_ALPHA`
- `public static final GlStateManager.SourceFactor ONE_MINUS_SRC_COLOR`
- `public static final GlStateManager.SourceFactor SRC_ALPHA`
- `public static final GlStateManager.SourceFactor SRC_ALPHA_SATURATE`
- `public static final GlStateManager.SourceFactor SRC_COLOR`
- `public static final GlStateManager.SourceFactor ZERO`

### Methods
- `public static GlStateManager.SourceFactor[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (GlStateManager.SourceFactor c : GlStateManager.SourceFactor.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static GlStateManager.SourceFactor valueOf(java.lang.String name)`
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

## GlStateManager.TexGen

*enum* `net.minecraft.client.renderer.GlStateManager.TexGen`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<GlStateManager.TexGen>

Enclosing class: GlStateManager

### Fields
- `public static final GlStateManager.TexGen S`
- `public static final GlStateManager.TexGen T`
- `public static final GlStateManager.TexGen R`
- `public static final GlStateManager.TexGen Q`

### Methods
- `public static GlStateManager.TexGen[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (GlStateManager.TexGen c : GlStateManager.TexGen.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static GlStateManager.TexGen valueOf(java.lang.String name)`
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

## IImageBuffer

*interface* `net.minecraft.client.renderer.IImageBuffer`

### Methods
- `java.awt.image.BufferedImage parseUserSkin(java.awt.image.BufferedImage image)`
- `void skinAvailable()`

## ImageBufferDownload

*class* `net.minecraft.client.renderer.ImageBufferDownload`

All Implemented Interfaces: IImageBuffer

### Methods
- `public java.awt.image.BufferedImage parseUserSkin(java.awt.image.BufferedImage image)`
- `public void skinAvailable()`

## InventoryEffectRenderer

*class* `net.minecraft.client.renderer.InventoryEffectRenderer`

All Implemented Interfaces: GuiYesNoCallback

### Fields
- `protected boolean hasActivePotionEffects`

### Inherited fields
- from `net.minecraft.client.gui.inventory.GuiContainer`: `dragSplitting`, `dragSplittingSlots`, `guiLeft`, `guiTop`, `INVENTORY_BACKGROUND`, `inventorySlots`, `xSize`, `ySize`
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `protected void updateActivePotionEffects()`
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.gui.inventory.GuiContainer`: `checkHotbarKeys`, `doesGuiPauseGame`, `drawGuiContainerBackgroundLayer`, `drawGuiContainerForegroundLayer`, `getGuiLeft`, `getGuiTop`, `getSlotUnderMouse`, `getXSize`, `getYSize`, `handleMouseClick`, `hasClickedOutside`, `isPointInRegion`, `keyTyped`, `mouseClicked`, `mouseClickMove`, `mouseReleased`, `onGuiClosed`, `renderHoveredToolTip`, `updateScreen`
- from `net.minecraft.client.gui.GuiScreen`: `actionPerformed`, `addButton`, `confirmClicked`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## ItemMeshDefinition

*interface* `net.minecraft.client.renderer.ItemMeshDefinition`

### Methods
- `ModelResourceLocation getModelLocation(ItemStack stack)`

## ItemModelMesher

*class* `net.minecraft.client.renderer.ItemModelMesher`

### Fields
- `protected final java.util.Map<Item,ItemMeshDefinition> shapers`

### Methods
- `public TextureAtlasSprite getParticleIcon(Item item)`
- `public TextureAtlasSprite getParticleIcon(Item item,  int meta)`
- `public IBakedModel getItemModel(ItemStack stack)`
- `protected int getMetadata(ItemStack stack)`
- `protected IBakedModel getItemModel(Item item,  int meta)`
- `public void register(Item item,  int meta,  ModelResourceLocation location)`
- `public void register(Item item,  ItemMeshDefinition definition)`
- `public ModelManager getModelManager()`
- `public void rebuildCache()`

## ItemRenderer

*class* `net.minecraft.client.renderer.ItemRenderer`

### Methods
- `public void renderItem(EntityLivingBase entityIn,  ItemStack heldStack,  ItemCameraTransforms.TransformType transform)`
- `public void renderItemSide(EntityLivingBase entitylivingbaseIn,  ItemStack heldStack,  ItemCameraTransforms.TransformType transform,  boolean leftHanded)`
- `public void renderItemInFirstPerson(float partialTicks)`
- `public void renderItemInFirstPerson(AbstractClientPlayer player,  float p_187457_2_,  float p_187457_3_,  EnumHand hand,  float p_187457_5_,  ItemStack stack,  float p_187457_7_)`
- `public void renderOverlays(float partialTicks)`
- `public void updateEquippedItem()`
- `public void resetEquippedProgress(EnumHand hand)`

## Matrix4f

*class* `net.minecraft.client.renderer.Matrix4f`

## OpenGlHelper

*class* `net.minecraft.client.renderer.OpenGlHelper`

### Fields
- `public static boolean nvidia`
- `public static boolean ati`
- `public static int GL_FRAMEBUFFER`
- `public static int GL_RENDERBUFFER`
- `public static int GL_COLOR_ATTACHMENT0`
- `public static int GL_DEPTH_ATTACHMENT`
- `public static int GL_FRAMEBUFFER_COMPLETE`
- `public static int GL_FB_INCOMPLETE_ATTACHMENT`
- `public static int GL_FB_INCOMPLETE_MISS_ATTACH`
- `public static int GL_FB_INCOMPLETE_DRAW_BUFFER`
- `public static int GL_FB_INCOMPLETE_READ_BUFFER`
- `public static boolean framebufferSupported`
- `public static int GL_LINK_STATUS`
- `public static int GL_COMPILE_STATUS`
- `public static int GL_VERTEX_SHADER`
- `public static int GL_FRAGMENT_SHADER`
- `public static int defaultTexUnit`
- `public static int lightmapTexUnit`
- `public static int GL_TEXTURE2`
- `public static int GL_COMBINE`
- `public static int GL_INTERPOLATE`
- `public static int GL_PRIMARY_COLOR`
- `public static int GL_CONSTANT`
- `public static int GL_PREVIOUS`
- `public static int GL_COMBINE_RGB`
- `public static int GL_SOURCE0_RGB`
- `public static int GL_SOURCE1_RGB`
- `public static int GL_SOURCE2_RGB`
- `public static int GL_OPERAND0_RGB`
- `public static int GL_OPERAND1_RGB`
- `public static int GL_OPERAND2_RGB`
- `public static int GL_COMBINE_ALPHA`
- `public static int GL_SOURCE0_ALPHA`
- `public static int GL_SOURCE1_ALPHA`
- `public static int GL_SOURCE2_ALPHA`
- `public static int GL_OPERAND0_ALPHA`
- `public static int GL_OPERAND1_ALPHA`
- `public static int GL_OPERAND2_ALPHA`
- `public static boolean extBlendFuncSeparate`
- `public static boolean openGL21`
- `public static boolean shadersSupported`
- `public static boolean vboSupported`
- `public static boolean vboSupportedAti`
- `public static int GL_ARRAY_BUFFER`
- `public static int GL_STATIC_DRAW`
- `public static float lastBrightnessX`
- `public static float lastBrightnessY`

### Methods
- `public static void initializeTextures()`
- `public static boolean areShadersSupported()`
- `public static java.lang.String getLogText()`
- `public static int glGetProgrami(int program,  int pname)`
- `public static void glAttachShader(int program,  int shaderIn)`
- `public static void glDeleteShader(int shaderIn)`
- `public static int glCreateShader(int type)`
- `public static void glShaderSource(int shaderIn,  java.nio.ByteBuffer string)`
- `public static void glCompileShader(int shaderIn)`
- `public static int glGetShaderi(int shaderIn,  int pname)`
- `public static java.lang.String glGetShaderInfoLog(int shaderIn,  int maxLength)`
- `public static java.lang.String glGetProgramInfoLog(int program,  int maxLength)`
- `public static void glUseProgram(int program)`
- `public static int glCreateProgram()`
- `public static void glDeleteProgram(int program)`
- `public static void glLinkProgram(int program)`
- `public static int glGetUniformLocation(int programObj,  java.lang.CharSequence name)`
- `public static void glUniform1(int location,  java.nio.IntBuffer values)`
- `public static void glUniform1i(int location,  int v0)`
- `public static void glUniform1(int location,  java.nio.FloatBuffer values)`
- `public static void glUniform2(int location,  java.nio.IntBuffer values)`
- `public static void glUniform2(int location,  java.nio.FloatBuffer values)`
- `public static void glUniform3(int location,  java.nio.IntBuffer values)`
- `public static void glUniform3(int location,  java.nio.FloatBuffer values)`
- `public static void glUniform4(int location,  java.nio.IntBuffer values)`
- `public static void glUniform4(int location,  java.nio.FloatBuffer values)`
- `public static void glUniformMatrix2(int location,  boolean transpose,  java.nio.FloatBuffer matrices)`
- `public static void glUniformMatrix3(int location,  boolean transpose,  java.nio.FloatBuffer matrices)`
- `public static void glUniformMatrix4(int location,  boolean transpose,  java.nio.FloatBuffer matrices)`
- `public static int glGetAttribLocation(int program,  java.lang.CharSequence name)`
- `public static int glGenBuffers()`
- `public static void glBindBuffer(int target,  int buffer)`
- `public static void glBufferData(int target,  java.nio.ByteBuffer data,  int usage)`
- `public static void glDeleteBuffers(int buffer)`
- `public static boolean useVbo()`
- `public static void glBindFramebuffer(int target,  int framebufferIn)`
- `public static void glBindRenderbuffer(int target,  int renderbuffer)`
- `public static void glDeleteRenderbuffers(int renderbuffer)`
- `public static void glDeleteFramebuffers(int framebufferIn)`
- `public static int glGenFramebuffers()`
- `public static int glGenRenderbuffers()`
- `public static void glRenderbufferStorage(int target,  int internalFormat,  int width,  int height)`
- `public static void glFramebufferRenderbuffer(int target,  int attachment,  int renderBufferTarget,  int renderBuffer)`
- `public static int glCheckFramebufferStatus(int target)`
- `public static void glFramebufferTexture2D(int target,  int attachment,  int textarget,  int texture,  int level)`
- `public static void setActiveTexture(int texture)`
- `public static void setClientActiveTexture(int texture)`
- `public static void setLightmapTextureCoords(int target,  float p_77475_1_,  float t)`
- `public static void glBlendFunc(int sFactorRGB,  int dFactorRGB,  int sfactorAlpha,  int dfactorAlpha)`
- `public static boolean isFramebufferEnabled()`
- `public static java.lang.String getCpu()`
- `public static void renderDirections(int p_188785_0_)`
- `public static void openFile(java.io.File fileIn)`

## RegionRenderCacheBuilder

*class* `net.minecraft.client.renderer.RegionRenderCacheBuilder`

### Methods
- `public BufferBuilder getWorldRendererByLayer(BlockRenderLayer layer)`
- `public BufferBuilder getWorldRendererByLayerId(int id)`

## RenderGlobal

*class* `net.minecraft.client.renderer.RenderGlobal`

All Implemented Interfaces: IResourceManagerReloadListener, IWorldEventListener

### Methods
- `public void onResourceManagerReload(IResourceManager resourceManager)`
- `public void makeEntityOutlineShader()`
- `public void renderEntityOutlineFramebuffer()`
- `protected boolean isRenderEntityOutlines()`
- `public void setWorldAndLoadRenderers(WorldClient worldClientIn)`
- `public void loadRenderers()`
- `protected void stopChunkUpdates()`
- `public void createBindEntityOutlineFbs(int width,  int height)`
- `public void renderEntities(Entity renderViewEntity,  ICamera camera,  float partialTicks)`
- `public java.lang.String getDebugInfoRenders()`
- `protected int getRenderedChunks()`
- `public java.lang.String getDebugInfoEntities()`
- `public void setupTerrain(Entity viewEntity,  double partialTicks,  ICamera camera,  int frameCount,  boolean playerSpectator)`
- `protected Vector3f getViewVector(Entity entityIn,  double partialTicks)`
- `public int renderBlockLayer(BlockRenderLayer blockLayerIn,  double partialTicks,  int pass,  Entity entityIn)`
- `public void updateClouds()`
- `public void renderSky(float partialTicks,  int pass)`
- `public void renderClouds(float partialTicks,  int pass,  double p_180447_3_,  double p_180447_5_,  double p_180447_7_)`
- `public boolean hasCloudFog(double x,  double y,  double z,  float partialTicks)`
- `public void updateChunks(long finishTimeNano)`
- `public void renderWorldBorder(Entity entityIn,  float partialTicks)`
- `public void drawBlockDamageTexture(Tessellator tessellatorIn,  BufferBuilder bufferBuilderIn,  Entity entityIn,  float partialTicks)`
- `public void drawSelectionBox(EntityPlayer player,  RayTraceResult movingObjectPositionIn,  int execute,  float partialTicks)`
- `public static void drawSelectionBoundingBox(AxisAlignedBB box,  float red,  float green,  float blue,  float alpha)`
- `public static void drawBoundingBox(double minX,  double minY,  double minZ,  double maxX,  double maxY,  double maxZ,  float red,  float green,  float blue,  float alpha)`
- `public static void drawBoundingBox(BufferBuilder buffer,  double minX,  double minY,  double minZ,  double maxX,  double maxY,  double maxZ,  float red,  float green,  float blue,  float alpha)`
- `public static void renderFilledBox(AxisAlignedBB aabb,  float red,  float green,  float blue,  float alpha)`
- `public static void renderFilledBox(double minX,  double minY,  double minZ,  double maxX,  double maxY,  double maxZ,  float red,  float green,  float blue,  float alpha)`
- `public static void addChainedFilledBoxVertices(BufferBuilder builder,  double p_189693_1_,  double p_189693_3_,  double p_189693_5_,  double p_189693_7_,  double p_189693_9_,  double p_189693_11_,  float red,  float green,  float blue,  float alpha)`
- `public void notifyBlockUpdate(World worldIn,  BlockPos pos,  IBlockState oldState,  IBlockState newState,  int flags)`
- `public void notifyLightSet(BlockPos pos)`
- `public void markBlockRangeForRenderUpdate(int x1,  int y1,  int z1,  int x2,  int y2,  int z2)`
- `public void playRecord(SoundEvent soundIn,  BlockPos pos)`
- `public void playSoundToAllNearExcept(EntityPlayer player,  SoundEvent soundIn,  SoundCategory category,  double x,  double y,  double z,  float volume,  float pitch)`
- `public void spawnParticle(int particleID,  boolean ignoreRange,  double xCoord,  double yCoord,  double zCoord,  double xSpeed,  double ySpeed,  double zSpeed,  int... parameters)`
- `public void spawnParticle(int id,  boolean ignoreRange,  boolean p_190570_3_,  double x,  double y,  double z,  double xSpeed,  double ySpeed,  double zSpeed,  int... parameters)`
- `public void onEntityAdded(Entity entityIn)`
- `public void onEntityRemoved(Entity entityIn)`
- `public void deleteAllDisplayLists()`
- `public void broadcastSound(int soundID,  BlockPos pos,  int data)`
- `public void playEvent(EntityPlayer player,  int type,  BlockPos blockPosIn,  int data)`
- `public void sendBlockBreakProgress(int breakerId,  BlockPos pos,  int progress)`
- `public boolean hasNoChunkUpdates()`
- `public void setDisplayListEntitiesDirty()`
- `public void updateTileEntities(java.util.Collection<TileEntity> tileEntitiesToRemove,  java.util.Collection<TileEntity> tileEntitiesToAdd)`

## RenderHelper

*class* `net.minecraft.client.renderer.RenderHelper`

### Methods
- `public static void disableStandardItemLighting()`
- `public static void enableStandardItemLighting()`
- `public static java.nio.FloatBuffer setColorBuffer(float p_74521_0_,  float p_74521_1_,  float p_74521_2_,  float p_74521_3_)`
- `public static void enableGUIStandardItemLighting()`

## RenderItem

*class* `net.minecraft.client.renderer.RenderItem`

All Implemented Interfaces: IResourceManagerReloadListener

### Fields
- `public float zLevel`

### Methods
- `public ItemModelMesher getItemModelMesher()`
- `protected void registerItem(Item itm,  int subType,  java.lang.String identifier)`
- `protected void registerBlock(Block blk,  int subType,  java.lang.String identifier)`
- `public void renderItem(ItemStack stack,  IBakedModel model)`
- `public void renderQuads(BufferBuilder renderer,  java.util.List<BakedQuad> quads,  int color,  ItemStack stack)`
- `public boolean shouldRenderItemIn3D(ItemStack stack)`
- `public void renderItem(ItemStack stack,  ItemCameraTransforms.TransformType cameraTransformType)`
- `public IBakedModel getItemModelWithOverrides(ItemStack stack,  World worldIn,  EntityLivingBase entitylivingbaseIn)`
- `public void renderItem(ItemStack stack,  EntityLivingBase entitylivingbaseIn,  ItemCameraTransforms.TransformType transform,  boolean leftHanded)`
- `protected void renderItemModel(ItemStack stack,  IBakedModel bakedmodel,  ItemCameraTransforms.TransformType transform,  boolean leftHanded)`
- `public void renderItemIntoGUI(ItemStack stack,  int x,  int y)`
- `protected void renderItemModelIntoGUI(ItemStack stack,  int x,  int y,  IBakedModel bakedmodel)`
- `public void renderItemAndEffectIntoGUI(ItemStack stack,  int xPosition,  int yPosition)`
- `public void renderItemAndEffectIntoGUI(EntityLivingBase p_184391_1_,  ItemStack p_184391_2_,  int p_184391_3_,  int p_184391_4_)`
- `public void renderItemOverlays(FontRenderer fr,  ItemStack stack,  int xPosition,  int yPosition)`
- `public void renderItemOverlayIntoGUI(FontRenderer fr,  ItemStack stack,  int xPosition,  int yPosition,  java.lang.String text)`
- `public void onResourceManagerReload(IResourceManager resourceManager)`

## RenderList

*class* `net.minecraft.client.renderer.RenderList`

### Inherited fields
- from `net.minecraft.client.renderer.ChunkRenderContainer`: `initialized`, `renderChunks`

### Methods
- `public void renderChunkLayer(BlockRenderLayer layer)`

### Inherited methods
- from `net.minecraft.client.renderer.ChunkRenderContainer`: `addRenderChunk`, `initialize`, `preRenderChunk`

## StitcherException

*class* `net.minecraft.client.renderer.StitcherException`

All Implemented Interfaces: java.io.Serializable

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## Tessellator

*class* `net.minecraft.client.renderer.Tessellator`

### Methods
- `public static Tessellator getInstance()`
- `public void draw()`
- `public BufferBuilder getBuffer()`

## ThreadDownloadImageData

*class* `net.minecraft.client.renderer.ThreadDownloadImageData`

All Implemented Interfaces: ITextureObject

### Inherited fields
- from `net.minecraft.client.renderer.texture.SimpleTexture`: `textureLocation`
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `blur`, `blurLast`, `glTextureId`, `mipmap`, `mipmapLast`

### Methods
- `public int getGlTextureId()`
- `public void setBufferedImage(java.awt.image.BufferedImage bufferedImageIn)`
- `public void loadTexture(IResourceManager resourceManager)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void loadTextureFromServer()`

### Inherited methods
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `deleteGlTexture`, `restoreLastBlurMipmap`, `setBlurMipmap`, `setBlurMipmapDirect`

## VboRenderList

*class* `net.minecraft.client.renderer.VboRenderList`

### Inherited fields
- from `net.minecraft.client.renderer.ChunkRenderContainer`: `initialized`, `renderChunks`

### Methods
- `public void renderChunkLayer(BlockRenderLayer layer)`

### Inherited methods
- from `net.minecraft.client.renderer.ChunkRenderContainer`: `addRenderChunk`, `initialize`, `preRenderChunk`

## Vector3d

*class* `net.minecraft.client.renderer.Vector3d`

### Fields
- `public double x`
- `public double y`
- `public double z`

## VertexBufferUploader

*class* `net.minecraft.client.renderer.VertexBufferUploader`

### Methods
- `public void draw(BufferBuilder bufferBuilderIn)`
- `public void setVertexBuffer(VertexBuffer vertexBufferIn)`

## ViewFrustum

*class* `net.minecraft.client.renderer.ViewFrustum`

### Fields
- `protected final RenderGlobal renderGlobal`
- `protected final World world`
- `protected int countChunksY`
- `protected int countChunksX`
- `protected int countChunksZ`
- `public RenderChunk[] renderChunks`

### Methods
- `protected void createRenderChunks(IRenderChunkFactory renderChunkFactory)`
- `public void deleteGlResources()`
- `protected void setCountChunksXYZ(int renderDistanceChunks)`
- `public void updateChunkPositions(double viewEntityX,  double viewEntityZ)`
- `public void markBlocksForUpdate(int minX,  int minY,  int minZ,  int maxX,  int maxY,  int maxZ,  boolean updateImmediately)`
- `protected RenderChunk getRenderChunk(BlockPos pos)`

## WorldVertexBufferUploader

*class* `net.minecraft.client.renderer.WorldVertexBufferUploader`

### Methods
- `public void draw(BufferBuilder bufferBuilderIn)`
