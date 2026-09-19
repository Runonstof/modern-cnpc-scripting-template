# com.mojang.blaze3d.systems

- [RenderSystem](#rendersystem)
- [RenderSystem.AutoStorageIndexBuffer](#rendersystem.autostorageindexbuffer)
- [RenderSystem.AutoStorageIndexBuffer.IndexGenerator](#rendersystem.autostorageindexbuffer.indexgenerator)
- [TimerQuery](#timerquery)
- [TimerQuery.FrameProfile](#timerquery.frameprofile)
- [TimerQuery.TimerQueryLazyLoader](#timerquery.timerquerylazyloader)
## RenderSystem

*class* `com.mojang.blaze3d.systems.RenderSystem`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `private static final ConcurrentLinkedQueue<RenderCall> recordingQueue`
- `private static final Tesselator RENDER_THREAD_TESSELATOR`
- `private static final int MINIMUM_ATLAS_TEXTURE_SIZE` (= 1024)
- `private static boolean isReplayingQueue`
- `@Nullable private static Thread gameThread`
- `@Nullable private static Thread renderThread`
- `private static int MAX_SUPPORTED_TEXTURE_SIZE`
- `private static boolean isInInit`
- `private static double lastDrawTime`
- `private static final RenderSystem.AutoStorageIndexBuffer sharedSequential`
- `private static final RenderSystem.AutoStorageIndexBuffer sharedSequentialQuad`
- `private static final RenderSystem.AutoStorageIndexBuffer sharedSequentialLines`
- `private static org.joml.Matrix3f inverseViewRotationMatrix`
- `private static org.joml.Matrix4f projectionMatrix`
- `private static org.joml.Matrix4f savedProjectionMatrix`
- `private static VertexSorting vertexSorting`
- `private static VertexSorting savedVertexSorting`
- `private static final PoseStack modelViewStack`
- `private static org.joml.Matrix4f modelViewMatrix`
- `private static org.joml.Matrix4f textureMatrix`
- `private static final int[] shaderTextures`
- `private static final float[] shaderColor`
- `private static float shaderGlintAlpha`
- `private static float shaderFogStart`
- `private static float shaderFogEnd`
- `private static final float[] shaderFogColor`
- `private static FogShape shaderFogShape`
- `private static final org.joml.Vector3f[] shaderLightDirections`
- `private static float shaderGameTime`
- `private static float shaderLineWidth`
- `private static String apiDescription`
- `@Nullable private static ShaderInstance shader`
- `private static final AtomicLong pollEventsWaitStart`
- `private static final AtomicBoolean pollingEvents`

### Methods
- `public static void initRenderThread()`
- `public static boolean isOnRenderThread()`
- `public static boolean isOnRenderThreadOrInit()`
- `public static void initGameThread(boolean p_69578_)`
- `public static boolean isOnGameThread()`
- `public static void assertInInitPhase()`
- `public static void assertOnGameThreadOrInit()`
- `public static void assertOnRenderThreadOrInit()`
- `public static void assertOnRenderThread()`
- `public static void assertOnGameThread()`
- `private static IllegalStateException constructThreadException()`
- `public static boolean isInInitPhase()`
- `public static void recordRenderCall(RenderCall p_69880_)`
- `private static void pollEvents()`
- `public static boolean isFrozenAtPollEvents()`
- `public static void flipFrame(long p_69496_)`
- `public static void replayQueue()`
- `public static void limitDisplayFPS(int p_69831_)`
- `public static void disableDepthTest()`
- `public static void enableDepthTest()`
- `public static void enableScissor(int p_69489_,  int p_69490_,  int p_69491_,  int p_69492_)`
- `public static void disableScissor()`
- `public static void depthFunc(int p_69457_)`
- `public static void depthMask(boolean p_69459_)`
- `public static void enableBlend()`
- `public static void disableBlend()`
- `public static void blendFunc(GlStateManager.SourceFactor p_69409_,  GlStateManager.DestFactor p_69410_)`
- `public static void blendFunc(int p_69406_,  int p_69407_)`
- `public static void blendFuncSeparate(GlStateManager.SourceFactor p_69417_,  GlStateManager.DestFactor p_69418_,  GlStateManager.SourceFactor p_69419_,  GlStateManager.DestFactor p_69420_)`
- `public static void blendFuncSeparate(int p_69412_,  int p_69413_,  int p_69414_,  int p_69415_)`
- `public static void blendEquation(int p_69404_)`
- `public static void enableCull()`
- `public static void disableCull()`
- `public static void polygonMode(int p_69861_,  int p_69862_)`
- `public static void enablePolygonOffset()`
- `public static void disablePolygonOffset()`
- `public static void polygonOffset(float p_69864_,  float p_69865_)`
- `public static void enableColorLogicOp()`
- `public static void disableColorLogicOp()`
- `public static void logicOp(GlStateManager.LogicOp p_69836_)`
- `public static void activeTexture(int p_69389_)`
- `public static void texParameter(int p_69938_,  int p_69939_,  int p_69940_)`
- `public static void deleteTexture(int p_69455_)`
- `public static void bindTextureForSetup(int p_157185_)`
- `public static void bindTexture(int p_69397_)`
- `public static void viewport(int p_69950_,  int p_69951_,  int p_69952_,  int p_69953_)`
- `public static void colorMask(boolean p_69445_,  boolean p_69446_,  boolean p_69447_,  boolean p_69448_)`
- `public static void stencilFunc(int p_69926_,  int p_69927_,  int p_69928_)`
- `public static void stencilMask(int p_69930_)`
- `public static void stencilOp(int p_69932_,  int p_69933_,  int p_69934_)`
- `public static void clearDepth(double p_69431_)`
- `public static void clearColor(float p_69425_,  float p_69426_,  float p_69427_,  float p_69428_)`
- `public static void clearStencil(int p_69433_)`
- `public static void clear(int p_69422_,  boolean p_69423_)`
- `public static void setShaderFogStart(float p_157446_)`
- `private static void _setShaderFogStart(float p_157172_)`
- `public static float getShaderFogStart()`
- `public static void setShaderGlintAlpha(double p_268332_)`
- `public static void setShaderGlintAlpha(float p_268329_)`
- `private static void _setShaderGlintAlpha(float p_268319_)`
- `public static float getShaderGlintAlpha()`
- `public static void setShaderFogEnd(float p_157444_)`
- `private static void _setShaderFogEnd(float p_157170_)`
- `public static float getShaderFogEnd()`
- `public static void setShaderFogColor(float p_157439_,  float p_157440_,  float p_157441_,  float p_157442_)`
- `public static void setShaderFogColor(float p_157435_,  float p_157436_,  float p_157437_)`
- `private static void _setShaderFogColor(float p_157165_,  float p_157166_,  float p_157167_,  float p_157168_)`
- `public static float[] getShaderFogColor()`
- `public static void setShaderFogShape(FogShape p_202161_)`
- `private static void _setShaderFogShape(FogShape p_202040_)`
- `public static FogShape getShaderFogShape()`
- `public static void setShaderLights(org.joml.Vector3f p_254155_,  org.joml.Vector3f p_254006_)`
- `public static void _setShaderLights(org.joml.Vector3f p_253618_,  org.joml.Vector3f p_253929_)`
- `public static void setupShaderLights(ShaderInstance p_157462_)`
- `public static void setShaderColor(float p_157430_,  float p_157431_,  float p_157432_,  float p_157433_)`
- `private static void _setShaderColor(float p_157160_,  float p_157161_,  float p_157162_,  float p_157163_)`
- `public static float[] getShaderColor()`
- `public static void drawElements(int p_157187_,  int p_157188_,  int p_157189_)`
- `public static void lineWidth(float p_69833_)`
- `public static float getShaderLineWidth()`
- `public static void pixelStore(int p_69855_,  int p_69856_)`
- `public static void readPixels(int p_69872_,  int p_69873_,  int p_69874_,  int p_69875_,  int p_69876_,  int p_69877_,  ByteBuffer p_69878_)`
- `public static void getString(int p_69520_,  Consumer<String> p_69521_)`
- `public static String getBackendDescription()`
- `public static String getApiDescription()`
- `public static TimeSource.NanoTimeSource initBackendSystem()`
- `public static void initRenderer(int p_69581_,  boolean p_69582_)`
- `public static void setErrorCallback(org.lwjgl.glfw.GLFWErrorCallbackI p_69901_)`
- `public static void renderCrosshair(int p_69882_)`
- `public static String getCapsString()`
- `public static void setupDefaultState(int p_69903_,  int p_69904_,  int p_69905_,  int p_69906_)`
- `public static int maxSupportedTextureSize()`
- `public static void glBindBuffer(int p_157209_,  IntSupplier p_157210_)`
- `public static void glBindVertexArray(Supplier<Integer> p_157212_)`
- `public static void glBufferData(int p_69526_,  ByteBuffer p_69527_,  int p_69528_)`
- `public static void glDeleteBuffers(int p_69530_)`
- `public static void glDeleteVertexArrays(int p_157214_)`
- `public static void glUniform1i(int p_69544_,  int p_69545_)`
- `public static void glUniform1(int p_69541_,  IntBuffer p_69542_)`
- `public static void glUniform2(int p_69550_,  IntBuffer p_69551_)`
- `public static void glUniform3(int p_69556_,  IntBuffer p_69557_)`
- `public static void glUniform4(int p_69562_,  IntBuffer p_69563_)`
- `public static void glUniform1(int p_69538_,  FloatBuffer p_69539_)`
- `public static void glUniform2(int p_69547_,  FloatBuffer p_69548_)`
- `public static void glUniform3(int p_69553_,  FloatBuffer p_69554_)`
- `public static void glUniform4(int p_69559_,  FloatBuffer p_69560_)`
- `public static void glUniformMatrix2(int p_69565_,  boolean p_69566_,  FloatBuffer p_69567_)`
- `public static void glUniformMatrix3(int p_69569_,  boolean p_69570_,  FloatBuffer p_69571_)`
- `public static void glUniformMatrix4(int p_69573_,  boolean p_69574_,  FloatBuffer p_69575_)`
- `public static void setupOverlayColor(IntSupplier p_69921_,  int p_69922_)`
- `public static void teardownOverlayColor()`
- `public static void setupLevelDiffuseLighting(org.joml.Vector3f p_254489_,  org.joml.Vector3f p_254541_,  org.joml.Matrix4f p_253812_)`
- `public static void setupGuiFlatDiffuseLighting(org.joml.Vector3f p_254419_,  org.joml.Vector3f p_254483_)`
- `public static void setupGui3DDiffuseLighting(org.joml.Vector3f p_253859_,  org.joml.Vector3f p_253890_)`
- `public static void beginInitialization()`
- `public static void finishInitialization()`
- `public static void glGenBuffers(Consumer<Integer> p_69532_)`
- `public static void glGenVertexArrays(Consumer<Integer> p_157216_)`
- `public static Tesselator renderThreadTesselator()`
- `public static void defaultBlendFunc()`
- `@Deprecated public static void runAsFancy(Runnable p_69891_)` (deprecated)
- `public static void setShader(Supplier<ShaderInstance> p_157428_)`
- `@Nullable public static ShaderInstance getShader()`
- `public static void setShaderTexture(int p_157457_,  ResourceLocation p_157458_)`
- `public static void _setShaderTexture(int p_157180_,  ResourceLocation p_157181_)`
- `public static void setShaderTexture(int p_157454_,  int p_157455_)`
- `public static void _setShaderTexture(int p_157177_,  int p_157178_)`
- `public static int getShaderTexture(int p_157204_)`
- `public static void setProjectionMatrix(org.joml.Matrix4f p_277884_,  VertexSorting p_277702_)`
- `public static void setInverseViewRotationMatrix(org.joml.Matrix3f p_253989_)`
- `public static void setTextureMatrix(org.joml.Matrix4f p_254081_)`
- `public static void resetTextureMatrix()`
- `public static void applyModelViewMatrix()`
- `public static void backupProjectionMatrix()`
- `private static void _backupProjectionMatrix()`
- `public static void restoreProjectionMatrix()`
- `private static void _restoreProjectionMatrix()`
- `public static org.joml.Matrix4f getProjectionMatrix()`
- `public static org.joml.Matrix3f getInverseViewRotationMatrix()`
- `public static org.joml.Matrix4f getModelViewMatrix()`
- `public static PoseStack getModelViewStack()`
- `public static org.joml.Matrix4f getTextureMatrix()`
- `public static RenderSystem.AutoStorageIndexBuffer getSequentialBuffer(VertexFormat.Mode p_221942_)`
- `public static void setShaderGameTime(long p_157448_,  float p_157449_)`
- `public static float getShaderGameTime()`
- `public static VertexSorting getVertexSorting()`

## RenderSystem.AutoStorageIndexBuffer

*class* `com.mojang.blaze3d.systems.RenderSystem.AutoStorageIndexBuffer`

Enclosing class: RenderSystem

### Fields
- `private final int vertexStride`
- `private final int indexStride`
- `private final RenderSystem.AutoStorageIndexBuffer.IndexGenerator generator`
- `private int name`
- `private VertexFormat.IndexType type`
- `private int indexCount`

### Methods
- `public boolean hasStorage(int p_221945_)`
- `public void bind(int p_221947_)`
- `private void ensureStorage(int p_157477_)`
- `private it.unimi.dsi.fastutil.ints.IntConsumer intConsumer(ByteBuffer p_157479_)`
- `public VertexFormat.IndexType type()`

## RenderSystem.AutoStorageIndexBuffer.IndexGenerator

*interface* `com.mojang.blaze3d.systems.RenderSystem.AutoStorageIndexBuffer.IndexGenerator`

Enclosing class: RenderSystem.AutoStorageIndexBuffer

### Methods
- `void accept(it.unimi.dsi.fastutil.ints.IntConsumer p_157488_,  int p_157489_)`

## TimerQuery

*class* `com.mojang.blaze3d.systems.TimerQuery`

### Fields
- `private int nextQueryName`

### Methods
- `public static Optional<TimerQuery> getInstance()`
- `public void beginProfile()`
- `public TimerQuery.FrameProfile endProfile()`

## TimerQuery.FrameProfile

*class* `com.mojang.blaze3d.systems.TimerQuery.FrameProfile`

Enclosing class: TimerQuery

### Fields
- `private static final long NO_RESULT` (= 0L)
- `private static final long CANCELLED_RESULT` (= -1L)
- `private final int queryName`
- `private long result`

### Methods
- `public void cancel()`
- `public boolean isDone()`
- `public long get()`

## TimerQuery.TimerQueryLazyLoader

*class* `com.mojang.blaze3d.systems.TimerQuery.TimerQueryLazyLoader`

Enclosing class: TimerQuery

### Fields
- `static final Optional<TimerQuery> INSTANCE`

### Methods
- `@Nullable private static TimerQuery instantiate()`
