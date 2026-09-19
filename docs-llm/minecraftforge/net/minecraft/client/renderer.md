# net.minecraft.client.renderer

- [BiomeColors](#biomecolors)
- [BlockEntityWithoutLevelRenderer](#blockentitywithoutlevelrenderer)
- [Class DimensionSpecialEffects.SkyType](#class-dimensionspecialeffects.skytype)
- [Class FaceInfo](#class-faceinfo)
- [Class FogRenderer.FogMode](#class-fogrenderer.fogmode)
- [Class ItemInHandRenderer.HandRenderSelection](#class-iteminhandrenderer.handrenderselection)
- [Class RenderType.OutlineProperty](#class-rendertype.outlineproperty)
- [CubeMap](#cubemap)
- [DimensionSpecialEffects](#dimensionspecialeffects)
- [DimensionSpecialEffects.EndEffects](#dimensionspecialeffects.endeffects)
- [DimensionSpecialEffects.NetherEffects](#dimensionspecialeffects.nethereffects)
- [DimensionSpecialEffects.OverworldEffects](#dimensionspecialeffects.overworldeffects)
- [EffectInstance](#effectinstance)
- [FaceInfo.Constants](#faceinfo.constants)
- [FaceInfo.VertexInfo](#faceinfo.vertexinfo)
- [FogRenderer](#fogrenderer)
- [FogRenderer.BlindnessFogFunction](#fogrenderer.blindnessfogfunction)
- [FogRenderer.DarknessFogFunction](#fogrenderer.darknessfogfunction)
- [FogRenderer.FogData](#fogrenderer.fogdata)
- [FogRenderer.MobEffectFogFunction](#fogrenderer.mobeffectfogfunction)
- [GameRenderer](#gamerenderer)
- [GameRenderer.ResourceCache](#gamerenderer.resourcecache)
- [GpuWarnlistManager](#gpuwarnlistmanager)
- [GpuWarnlistManager.Preparations](#gpuwarnlistmanager.preparations)
- [ItemBlockRenderTypes](#itemblockrendertypes)
- [ItemInHandRenderer](#iteminhandrenderer)
- [ItemModelShaper](#itemmodelshaper)
- [LevelRenderer](#levelrenderer)
- [LevelRenderer.TransparencyShaderException](#levelrenderer.transparencyshaderexception)
- [LightTexture](#lighttexture)
- [MultiBufferSource](#multibuffersource)
- [MultiBufferSource.BufferSource](#multibuffersource.buffersource)
- [OutlineBufferSource](#outlinebuffersource)
- [OutlineBufferSource.EntityOutlineGenerator](#outlinebuffersource.entityoutlinegenerator)
- [PanoramaRenderer](#panoramarenderer)
- [PostChain](#postchain)
- [PostPass](#postpass)
- [Rect2i](#rect2i)
- [RenderBuffers](#renderbuffers)
- [RenderStateShard](#renderstateshard)
- [RenderStateShard.BooleanStateShard](#renderstateshard.booleanstateshard)
- [RenderStateShard.ColorLogicStateShard](#renderstateshard.colorlogicstateshard)
- [RenderStateShard.CullStateShard](#renderstateshard.cullstateshard)
- [RenderStateShard.DepthTestStateShard](#renderstateshard.depthteststateshard)
- [RenderStateShard.EmptyTextureStateShard](#renderstateshard.emptytexturestateshard)
- [RenderStateShard.LayeringStateShard](#renderstateshard.layeringstateshard)
- [RenderStateShard.LightmapStateShard](#renderstateshard.lightmapstateshard)
- [RenderStateShard.LineStateShard](#renderstateshard.linestateshard)
- [RenderStateShard.MultiTextureStateShard](#renderstateshard.multitexturestateshard)
- [RenderStateShard.MultiTextureStateShard.Builder](#renderstateshard.multitexturestateshard.builder)
- [RenderStateShard.OffsetTexturingStateShard](#renderstateshard.offsettexturingstateshard)
- [RenderStateShard.OutputStateShard](#renderstateshard.outputstateshard)
- [RenderStateShard.OverlayStateShard](#renderstateshard.overlaystateshard)
- [RenderStateShard.ShaderStateShard](#renderstateshard.shaderstateshard)
- [RenderStateShard.TextureStateShard](#renderstateshard.texturestateshard)
- [RenderStateShard.TexturingStateShard](#renderstateshard.texturingstateshard)
- [RenderStateShard.TransparencyStateShard](#renderstateshard.transparencystateshard)
- [RenderStateShard.WriteMaskStateShard](#renderstateshard.writemaskstateshard)
- [RenderType](#rendertype)
- [RenderType.CompositeRenderType](#rendertype.compositerendertype)
- [RenderType.CompositeState](#rendertype.compositestate)
- [RenderType.CompositeState.CompositeStateBuilder](#rendertype.compositestate.compositestatebuilder)
- [RunningTrimmedMean](#runningtrimmedmean)
- [ScreenEffectRenderer](#screeneffectrenderer)
- [SectionBufferBuilderPack](#sectionbufferbuilderpack)
- [SectionOcclusionGraph](#sectionocclusiongraph)
- [SectionOcclusionGraph.GraphEvents](#sectionocclusiongraph.graphevents)
- [SectionOcclusionGraph.GraphState](#sectionocclusiongraph.graphstate)
- [SectionOcclusionGraph.GraphStorage](#sectionocclusiongraph.graphstorage)
- [SectionOcclusionGraph.Node](#sectionocclusiongraph.node)
- [SectionOcclusionGraph.SectionToNodeMap](#sectionocclusiongraph.sectiontonodemap)
- [ShaderInstance](#shaderinstance)
- [Sheets](#sheets)
- [SpriteCoordinateExpander](#spritecoordinateexpander)
- [ViewArea](#viewarea)
- [VirtualScreen](#virtualscreen)
## BiomeColors

*class* `net.minecraft.client.renderer.BiomeColors`

### Fields
- `public static final ColorResolver GRASS_COLOR_RESOLVER`
- `public static final ColorResolver FOLIAGE_COLOR_RESOLVER`
- `public static final ColorResolver WATER_COLOR_RESOLVER`

### Methods
- `private static int getAverageColor(BlockAndTintGetter p_108797_,  BlockPos p_108798_,  ColorResolver p_108799_)`
- `public static int getAverageGrassColor(BlockAndTintGetter p_108794_,  BlockPos p_108795_)`
- `public static int getAverageFoliageColor(BlockAndTintGetter p_108805_,  BlockPos p_108806_)`
- `public static int getAverageWaterColor(BlockAndTintGetter p_108812_,  BlockPos p_108813_)`

## BlockEntityWithoutLevelRenderer

*class* `net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer`

### Fields
- `private static final ShulkerBoxBlockEntity[] SHULKER_BOXES`
- `private static final ShulkerBoxBlockEntity DEFAULT_SHULKER_BOX`
- `private final ChestBlockEntity chest`
- `private final ChestBlockEntity trappedChest`
- `private final EnderChestBlockEntity enderChest`
- `private final BannerBlockEntity banner`
- `private final BedBlockEntity bed`
- `private final ConduitBlockEntity conduit`
- `private final DecoratedPotBlockEntity decoratedPot`
- `private ShieldModel shieldModel`
- `private TridentModel tridentModel`
- `private Map<SkullBlock.Type,SkullModelBase> skullModels`
- `private final BlockEntityRenderDispatcher blockEntityRenderDispatcher`
- `private final EntityModelSet entityModelSet`

### Methods
- `public void onResourceManagerReload(ResourceManager p_172555_)`
- `public void renderByItem(ItemStack p_108830_,  ItemDisplayContext p_270899_,  PoseStack p_108832_,  MultiBufferSource p_108833_,  int p_108834_,  int p_108835_)`

### Inherited methods
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`
- from `net.minecraft.server.packs.resources.ResourceManagerReloadListener`: `reload`

## Class DimensionSpecialEffects.SkyType

*enum* `net.minecraft.client.renderer.Class DimensionSpecialEffects.SkyType`

Enclosing class: DimensionSpecialEffects

### Methods
- `public static DimensionSpecialEffects.SkyType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static DimensionSpecialEffects.SkyType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class FaceInfo

*enum* `net.minecraft.client.renderer.Class FaceInfo`

### Fields
- `private static final FaceInfo[] BY_FACING`
- `private final FaceInfo.VertexInfo[] infos`

### Methods
- `public static FaceInfo[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static FaceInfo valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static FaceInfo fromFacing(Direction p_108985_)`
- `public FaceInfo.VertexInfo getVertexInfo(int p_108983_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class FogRenderer.FogMode

*enum* `net.minecraft.client.renderer.Class FogRenderer.FogMode`

Enclosing class: FogRenderer

### Methods
- `public static FogRenderer.FogMode[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static FogRenderer.FogMode valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ItemInHandRenderer.HandRenderSelection

*enum* `net.minecraft.client.renderer.Class ItemInHandRenderer.HandRenderSelection`

Enclosing class: ItemInHandRenderer

### Fields
- `final boolean renderMainHand`
- `final boolean renderOffHand`

### Methods
- `public static ItemInHandRenderer.HandRenderSelection[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ItemInHandRenderer.HandRenderSelection valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static ItemInHandRenderer.HandRenderSelection onlyForHand(InteractionHand p_172932_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class RenderType.OutlineProperty

*enum* `net.minecraft.client.renderer.Class RenderType.OutlineProperty`

Enclosing class: RenderType

### Fields
- `private final String name`

### Methods
- `public static RenderType.OutlineProperty[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RenderType.OutlineProperty valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String toString()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## CubeMap

*class* `net.minecraft.client.renderer.CubeMap`

### Fields
- `private static final int SIDES` (= 6)
- `private final ResourceLocation[] images`

### Methods
- `public void render(Minecraft p_108850_,  float p_108851_,  float p_108852_,  float p_108853_)`
- `public CompletableFuture<Void> preload(TextureManager p_108855_,  Executor p_108856_)`

## DimensionSpecialEffects

*class* `net.minecraft.client.renderer.DimensionSpecialEffects`

### Fields
- `private static final it.unimi.dsi.fastutil.objects.Object2ObjectMap<ResourceLocation,DimensionSpecialEffects> EFFECTS`
- `private final float[] sunriseCol`
- `private final float cloudLevel`
- `private final boolean hasGround`
- `private final DimensionSpecialEffects.SkyType skyType`
- `private final boolean forceBrightLightmap`
- `private final boolean constantAmbientLight`

### Methods
- `public static DimensionSpecialEffects forType(DimensionType p_108877_)`
- `@Nullable public float[] getSunriseColor(float p_108872_,  float p_108873_)`
- `public float getCloudHeight()`
- `public boolean hasGround()`
- `public abstract Vec3 getBrightnessDependentFogColor(Vec3 p_108878_,  float p_108879_)`
- `public abstract boolean isFoggyAt(int p_108874_,  int p_108875_)`
- `public DimensionSpecialEffects.SkyType skyType()`
- `public boolean forceBrightLightmap()`
- `public boolean constantAmbientLight()`

### Inherited methods
- from `net.minecraftforge.client.extensions.IForgeDimensionSpecialEffects`: `adjustLightmapColors`, `renderClouds`, `renderSky`, `renderSnowAndRain`, `tickRain`

## DimensionSpecialEffects.EndEffects

*class* `net.minecraft.client.renderer.DimensionSpecialEffects.EndEffects`

Enclosing class: DimensionSpecialEffects

### Methods
- `public Vec3 getBrightnessDependentFogColor(Vec3 p_108894_,  float p_108895_)`
- `public boolean isFoggyAt(int p_108891_,  int p_108892_)`
- `@Nullable public float[] getSunriseColor(float p_108888_,  float p_108889_)`

### Inherited methods
- from `net.minecraft.client.renderer.DimensionSpecialEffects`: `constantAmbientLight`, `forceBrightLightmap`, `forType`, `getCloudHeight`, `hasGround`, `skyType`
- from `net.minecraftforge.client.extensions.IForgeDimensionSpecialEffects`: `adjustLightmapColors`, `renderClouds`, `renderSky`, `renderSnowAndRain`, `tickRain`

## DimensionSpecialEffects.NetherEffects

*class* `net.minecraft.client.renderer.DimensionSpecialEffects.NetherEffects`

Enclosing class: DimensionSpecialEffects

### Methods
- `public Vec3 getBrightnessDependentFogColor(Vec3 p_108901_,  float p_108902_)`
- `public boolean isFoggyAt(int p_108898_,  int p_108899_)`

### Inherited methods
- from `net.minecraft.client.renderer.DimensionSpecialEffects`: `constantAmbientLight`, `forceBrightLightmap`, `forType`, `getCloudHeight`, `getSunriseColor`, `hasGround`, `skyType`
- from `net.minecraftforge.client.extensions.IForgeDimensionSpecialEffects`: `adjustLightmapColors`, `renderClouds`, `renderSky`, `renderSnowAndRain`, `tickRain`

## DimensionSpecialEffects.OverworldEffects

*class* `net.minecraft.client.renderer.DimensionSpecialEffects.OverworldEffects`

Enclosing class: DimensionSpecialEffects

### Fields
- `public static final int CLOUD_LEVEL` (= 192)

### Methods
- `public Vec3 getBrightnessDependentFogColor(Vec3 p_108908_,  float p_108909_)`
- `public boolean isFoggyAt(int p_108905_,  int p_108906_)`

### Inherited methods
- from `net.minecraft.client.renderer.DimensionSpecialEffects`: `constantAmbientLight`, `forceBrightLightmap`, `forType`, `getCloudHeight`, `getSunriseColor`, `hasGround`, `skyType`
- from `net.minecraftforge.client.extensions.IForgeDimensionSpecialEffects`: `adjustLightmapColors`, `renderClouds`, `renderSky`, `renderSnowAndRain`, `tickRain`

## EffectInstance

*class* `net.minecraft.client.renderer.EffectInstance`

### Fields
- `private static final String EFFECT_SHADER_PATH` (= "shaders/program/")
- `private static final org.slf4j.Logger LOGGER`
- `private static final AbstractUniform DUMMY_UNIFORM`
- `private static final boolean ALWAYS_REAPPLY` (= true)
- `private static EffectInstance lastAppliedEffect`
- `private static int lastProgramId`
- `private final Map<String,IntSupplier> samplerMap`
- `private final List<String> samplerNames`
- `private final List<Integer> samplerLocations`
- `private final List<Uniform> uniforms`
- `private final List<Integer> uniformLocations`
- `private final Map<String,Uniform> uniformMap`
- `private final int programId`
- `private final String name`
- `private boolean dirty`
- `private final BlendMode blend`
- `private final List<Integer> attributes`
- `private final List<String> attributeNames`
- `private final EffectProgram vertexProgram`
- `private final EffectProgram fragmentProgram`

### Methods
- `public static EffectProgram getOrCreate(ResourceManager p_172567_,  Program.Type p_172568_,  String p_172569_)  throws IOException`
  - throws: IOException
- `public static BlendMode parseBlendNode(@Nullable  com.google.gson.JsonObject p_108951_)`
- `public void close()`
- `public void clear()`
- `public void apply()`
- `public void markDirty()`
- `@Nullable public Uniform getUniform(String p_108953_)`
- `public AbstractUniform safeGetUniform(String p_108961_)`
- `private void updateLocations()`
- `private void parseSamplerNode(com.google.gson.JsonElement p_108949_)`
- `public void setSampler(String p_108955_,  IntSupplier p_108956_)`
- `private void parseUniformNode(com.google.gson.JsonElement p_108959_)  throws ChainedJsonException`
  - throws: ChainedJsonException
- `public Program getVertexProgram()`
- `public Program getFragmentProgram()`
- `public void attachToProgram()`
- `public String getName()`
- `public int getId()`

## FaceInfo.Constants

*class* `net.minecraft.client.renderer.FaceInfo.Constants`

Enclosing class: FaceInfo

### Fields
- `public static final int MAX_Z`
- `public static final int MAX_Y`
- `public static final int MAX_X`
- `public static final int MIN_Z`
- `public static final int MIN_Y`
- `public static final int MIN_X`

## FaceInfo.VertexInfo

*class* `net.minecraft.client.renderer.FaceInfo.VertexInfo`

Enclosing class: FaceInfo

### Fields
- `public final int xFace`
- `public final int yFace`
- `public final int zFace`

## FogRenderer

*class* `net.minecraft.client.renderer.FogRenderer`

### Fields
- `private static final int WATER_FOG_DISTANCE` (= 96)
- `private static final List<FogRenderer.MobEffectFogFunction> MOB_EFFECT_FOG`
- `public static final float BIOME_FOG_TRANSITION_TIME` (= 5000.0f)
- `private static float fogRed`
- `private static float fogGreen`
- `private static float fogBlue`
- `private static int targetBiomeFog`
- `private static int previousBiomeFog`
- `private static long biomeChangedTime`

### Methods
- `public static void setupColor(Camera p_109019_,  float p_109020_,  ClientLevel p_109021_,  int p_109022_,  float p_109023_)`
- `public static void setupNoFog()`
- `@Nullable private static FogRenderer.MobEffectFogFunction getPriorityFogFunction(Entity p_234166_,  float p_234167_)`
- `public static void setupFog(Camera p_234173_,  FogRenderer.FogMode p_234174_,  float p_234175_,  boolean p_234176_,  float p_234177_)`
- `public static void levelFogColor()`

## FogRenderer.BlindnessFogFunction

*class* `net.minecraft.client.renderer.FogRenderer.BlindnessFogFunction`

Enclosing class: FogRenderer

### Methods
- `public MobEffect getMobEffect()`
- `public void setupFog(FogRenderer.FogData p_234181_,  LivingEntity p_234182_,  MobEffectInstance p_234183_,  float p_234184_,  float p_234185_)`

### Inherited methods
- from `net.minecraft.client.renderer.FogRenderer.MobEffectFogFunction`: `getModifiedVoidDarkness`, `isEnabled`

## FogRenderer.DarknessFogFunction

*class* `net.minecraft.client.renderer.FogRenderer.DarknessFogFunction`

Enclosing class: FogRenderer

### Methods
- `public MobEffect getMobEffect()`
- `public void setupFog(FogRenderer.FogData p_234194_,  LivingEntity p_234195_,  MobEffectInstance p_234196_,  float p_234197_,  float p_234198_)`
- `public float getModifiedVoidDarkness(LivingEntity p_234189_,  MobEffectInstance p_234190_,  float p_234191_,  float p_234192_)`

### Inherited methods
- from `net.minecraft.client.renderer.FogRenderer.MobEffectFogFunction`: `isEnabled`

## FogRenderer.FogData

*class* `net.minecraft.client.renderer.FogRenderer.FogData`

Enclosing class: FogRenderer

### Fields
- `public final FogRenderer.FogMode mode`
- `public float start`
- `public float end`
- `public FogShape shape`

## FogRenderer.MobEffectFogFunction

*interface* `net.minecraft.client.renderer.FogRenderer.MobEffectFogFunction`

Enclosing class: FogRenderer

### Methods
- `MobEffect getMobEffect()`
- `void setupFog(FogRenderer.FogData p_234212_,  LivingEntity p_234213_,  MobEffectInstance p_234214_,  float p_234215_,  float p_234216_)`
- `default boolean isEnabled(LivingEntity p_234206_,  float p_234207_)`
- `default float getModifiedVoidDarkness(LivingEntity p_234208_,  MobEffectInstance p_234209_,  float p_234210_,  float p_234211_)`

## GameRenderer

*class* `net.minecraft.client.renderer.GameRenderer`

### Fields
- `private static final ResourceLocation NAUSEA_LOCATION`
- `static final org.slf4j.Logger LOGGER`
- `private static final boolean DEPTH_BUFFER_DEBUG` (= false)
- `public static final float PROJECTION_Z_NEAR` (= 0.05000000074505806f)
- `private static final float GUI_Z_NEAR` (= 1000.0f)
- `final Minecraft minecraft`
- `private final ResourceManager resourceManager`
- `private final RandomSource random`
- `private float renderDistance`
- `public final ItemInHandRenderer itemInHandRenderer`
- `private final MapRenderer mapRenderer`
- `private final RenderBuffers renderBuffers`
- `private int tick`
- `private float fov`
- `private float oldFov`
- `private float darkenWorldAmount`
- `private float darkenWorldAmountO`
- `private boolean renderHand`
- `private boolean renderBlockOutline`
- `private long lastScreenshotAttempt`
- `private boolean hasWorldScreenshot`
- `private long lastActiveTime`
- `private final LightTexture lightTexture`
- `private final OverlayTexture overlayTexture`
- `private boolean panoramicMode`
- `private float zoom`
- `private float zoomX`
- `private float zoomY`
- `public static final int ITEM_ACTIVATION_ANIMATION_LENGTH` (= 40)
- `@Nullable private ItemStack itemActivationItem`
- `private int itemActivationTicks`
- `private float itemActivationOffX`
- `private float itemActivationOffY`
- `@Nullable PostChain postEffect`
- `static final ResourceLocation[] EFFECTS`
- `public static final int EFFECT_NONE`
- `int effectIndex`
- `private boolean effectActive`
- `private final Camera mainCamera`
- `public ShaderInstance blitShader`
- `private final Map<String,ShaderInstance> shaders`
- `@Nullable private static ShaderInstance positionShader`
- `@Nullable private static ShaderInstance positionColorShader`
- `@Nullable private static ShaderInstance positionColorTexShader`
- `@Nullable private static ShaderInstance positionTexShader`
- `@Nullable private static ShaderInstance positionTexColorShader`
- `@Nullable private static ShaderInstance particleShader`
- `@Nullable private static ShaderInstance positionColorLightmapShader`
- `@Nullable private static ShaderInstance positionColorTexLightmapShader`
- `@Nullable private static ShaderInstance positionTexColorNormalShader`
- `@Nullable private static ShaderInstance positionTexLightmapColorShader`
- `@Nullable private static ShaderInstance rendertypeSolidShader`
- `@Nullable private static ShaderInstance rendertypeCutoutMippedShader`
- `@Nullable private static ShaderInstance rendertypeCutoutShader`
- `@Nullable private static ShaderInstance rendertypeTranslucentShader`
- `@Nullable private static ShaderInstance rendertypeTranslucentMovingBlockShader`
- `@Nullable private static ShaderInstance rendertypeTranslucentNoCrumblingShader`
- `@Nullable private static ShaderInstance rendertypeArmorCutoutNoCullShader`
- `@Nullable private static ShaderInstance rendertypeEntitySolidShader`
- `@Nullable private static ShaderInstance rendertypeEntityCutoutShader`
- `@Nullable private static ShaderInstance rendertypeEntityCutoutNoCullShader`
- `@Nullable private static ShaderInstance rendertypeEntityCutoutNoCullZOffsetShader`
- `@Nullable private static ShaderInstance rendertypeItemEntityTranslucentCullShader`
- `@Nullable private static ShaderInstance rendertypeEntityTranslucentCullShader`
- `@Nullable private static ShaderInstance rendertypeEntityTranslucentShader`
- `@Nullable private static ShaderInstance rendertypeEntityTranslucentEmissiveShader`
- `@Nullable private static ShaderInstance rendertypeEntitySmoothCutoutShader`
- `@Nullable private static ShaderInstance rendertypeBeaconBeamShader`
- `@Nullable private static ShaderInstance rendertypeEntityDecalShader`
- `@Nullable private static ShaderInstance rendertypeEntityNoOutlineShader`
- `@Nullable private static ShaderInstance rendertypeEntityShadowShader`
- `@Nullable private static ShaderInstance rendertypeEntityAlphaShader`
- `@Nullable private static ShaderInstance rendertypeEyesShader`
- `@Nullable private static ShaderInstance rendertypeEnergySwirlShader`
- `@Nullable private static ShaderInstance rendertypeLeashShader`
- `@Nullable private static ShaderInstance rendertypeWaterMaskShader`
- `@Nullable private static ShaderInstance rendertypeOutlineShader`
- `@Nullable private static ShaderInstance rendertypeArmorGlintShader`
- `@Nullable private static ShaderInstance rendertypeArmorEntityGlintShader`
- `@Nullable private static ShaderInstance rendertypeGlintTranslucentShader`
- `@Nullable private static ShaderInstance rendertypeGlintShader`
- `@Nullable private static ShaderInstance rendertypeGlintDirectShader`
- `@Nullable private static ShaderInstance rendertypeEntityGlintShader`
- `@Nullable private static ShaderInstance rendertypeEntityGlintDirectShader`
- `@Nullable private static ShaderInstance rendertypeTextShader`
- `@Nullable private static ShaderInstance rendertypeTextBackgroundShader`
- `@Nullable private static ShaderInstance rendertypeTextIntensityShader`
- `@Nullable private static ShaderInstance rendertypeTextSeeThroughShader`
- `@Nullable private static ShaderInstance rendertypeTextBackgroundSeeThroughShader`
- `@Nullable private static ShaderInstance rendertypeTextIntensitySeeThroughShader`
- `@Nullable private static ShaderInstance rendertypeLightningShader`
- `@Nullable private static ShaderInstance rendertypeTripwireShader`
- `@Nullable private static ShaderInstance rendertypeEndPortalShader`
- `@Nullable private static ShaderInstance rendertypeEndGatewayShader`
- `@Nullable private static ShaderInstance rendertypeLinesShader`
- `@Nullable private static ShaderInstance rendertypeCrumblingShader`
- `@Nullable private static ShaderInstance rendertypeGuiShader`
- `@Nullable private static ShaderInstance rendertypeGuiOverlayShader`
- `@Nullable private static ShaderInstance rendertypeGuiTextHighlightShader`
- `@Nullable private static ShaderInstance rendertypeGuiGhostRecipeOverlayShader`

### Methods
- `public void close()`
- `public void setRenderHand(boolean p_172737_)`
- `public void setRenderBlockOutline(boolean p_172776_)`
- `public void setPanoramicMode(boolean p_172780_)`
- `public boolean isPanoramicMode()`
- `public void shutdownEffect()`
- `public void togglePostEffect()`
- `public void checkEntityPostEffect(@Nullable  Entity p_109107_)`
- `public void cycleEffect()`
- `public void loadEffect(ResourceLocation p_109129_)`
- `public PreparableReloadListener createReloadListener()`
- `public void preloadUiShader(ResourceProvider p_172723_)`
- `private ShaderInstance preloadShader(ResourceProvider p_172725_,  String p_172726_,  VertexFormat p_172727_)`
- `void reloadShaders(ResourceProvider p_250719_)`
- `private void shutdownShaders()`
- `@Nullable public ShaderInstance getShader(@Nullable  String p_172735_)`
- `public void tick()`
- `@Nullable public PostChain currentEffect()`
- `public void resize(int p_109098_,  int p_109099_)`
- `public void pick(float p_109088_)`
- `private void tickFov()`
- `private double getFov(Camera p_109142_,  float p_109143_,  boolean p_109144_)`
- `private void bobHurt(PoseStack p_109118_,  float p_109119_)`
- `private void bobView(PoseStack p_109139_,  float p_109140_)`
- `public void renderZoomed(float p_172719_,  float p_172720_,  float p_172721_)`
- `private void renderItemInHand(PoseStack p_109121_,  Camera p_109122_,  float p_109123_)`
- `public void resetProjectionMatrix(org.joml.Matrix4f p_253668_)`
- `public org.joml.Matrix4f getProjectionMatrix(double p_254507_)`
- `public float getDepthFar()`
- `public static float getNightVisionScale(LivingEntity p_109109_,  float p_109110_)`
- `public void render(float p_109094_,  long p_109095_,  boolean p_109096_)`
- `private void tryTakeScreenshotIfNeeded()`
- `private void takeAutoScreenshot(Path p_182643_)`
- `private boolean shouldRenderBlockOutline()`
- `public void renderLevel(float p_109090_,  long p_109091_,  PoseStack p_109092_)`
- `public void resetData()`
- `public MapRenderer getMapRenderer()`
- `public void displayItemActivation(ItemStack p_109114_)`
- `private void renderItemActivationAnimation(int p_109101_,  int p_109102_,  float p_109103_)`
- `private void renderConfusionOverlay(GuiGraphics p_282460_,  float p_282656_)`
- `public Minecraft getMinecraft()`
- `public float getDarkenWorldAmount(float p_109132_)`
- `public float getRenderDistance()`
- `public Camera getMainCamera()`
- `public LightTexture lightTexture()`
- `public OverlayTexture overlayTexture()`
- `@Nullable public static ShaderInstance getPositionShader()`
- `@Nullable public static ShaderInstance getPositionColorShader()`
- `@Nullable public static ShaderInstance getPositionColorTexShader()`
- `@Nullable public static ShaderInstance getPositionTexShader()`
- `@Nullable public static ShaderInstance getPositionTexColorShader()`
- `@Nullable public static ShaderInstance getParticleShader()`
- `@Nullable public static ShaderInstance getPositionColorLightmapShader()`
- `@Nullable public static ShaderInstance getPositionColorTexLightmapShader()`
- `@Nullable public static ShaderInstance getPositionTexColorNormalShader()`
- `@Nullable public static ShaderInstance getPositionTexLightmapColorShader()`
- `@Nullable public static ShaderInstance getRendertypeSolidShader()`
- `@Nullable public static ShaderInstance getRendertypeCutoutMippedShader()`
- `@Nullable public static ShaderInstance getRendertypeCutoutShader()`
- `@Nullable public static ShaderInstance getRendertypeTranslucentShader()`
- `@Nullable public static ShaderInstance getRendertypeTranslucentMovingBlockShader()`
- `@Nullable public static ShaderInstance getRendertypeTranslucentNoCrumblingShader()`
- `@Nullable public static ShaderInstance getRendertypeArmorCutoutNoCullShader()`
- `@Nullable public static ShaderInstance getRendertypeEntitySolidShader()`
- `@Nullable public static ShaderInstance getRendertypeEntityCutoutShader()`
- `@Nullable public static ShaderInstance getRendertypeEntityCutoutNoCullShader()`
- `@Nullable public static ShaderInstance getRendertypeEntityCutoutNoCullZOffsetShader()`
- `@Nullable public static ShaderInstance getRendertypeItemEntityTranslucentCullShader()`
- `@Nullable public static ShaderInstance getRendertypeEntityTranslucentCullShader()`
- `@Nullable public static ShaderInstance getRendertypeEntityTranslucentShader()`
- `@Nullable public static ShaderInstance getRendertypeEntityTranslucentEmissiveShader()`
- `@Nullable public static ShaderInstance getRendertypeEntitySmoothCutoutShader()`
- `@Nullable public static ShaderInstance getRendertypeBeaconBeamShader()`
- `@Nullable public static ShaderInstance getRendertypeEntityDecalShader()`
- `@Nullable public static ShaderInstance getRendertypeEntityNoOutlineShader()`
- `@Nullable public static ShaderInstance getRendertypeEntityShadowShader()`
- `@Nullable public static ShaderInstance getRendertypeEntityAlphaShader()`
- `@Nullable public static ShaderInstance getRendertypeEyesShader()`
- `@Nullable public static ShaderInstance getRendertypeEnergySwirlShader()`
- `@Nullable public static ShaderInstance getRendertypeLeashShader()`
- `@Nullable public static ShaderInstance getRendertypeWaterMaskShader()`
- `@Nullable public static ShaderInstance getRendertypeOutlineShader()`
- `@Nullable public static ShaderInstance getRendertypeArmorGlintShader()`
- `@Nullable public static ShaderInstance getRendertypeArmorEntityGlintShader()`
- `@Nullable public static ShaderInstance getRendertypeGlintTranslucentShader()`
- `@Nullable public static ShaderInstance getRendertypeGlintShader()`
- `@Nullable public static ShaderInstance getRendertypeGlintDirectShader()`
- `@Nullable public static ShaderInstance getRendertypeEntityGlintShader()`
- `@Nullable public static ShaderInstance getRendertypeEntityGlintDirectShader()`
- `@Nullable public static ShaderInstance getRendertypeTextShader()`
- `@Nullable public static ShaderInstance getRendertypeTextBackgroundShader()`
- `@Nullable public static ShaderInstance getRendertypeTextIntensityShader()`
- `@Nullable public static ShaderInstance getRendertypeTextSeeThroughShader()`
- `@Nullable public static ShaderInstance getRendertypeTextBackgroundSeeThroughShader()`
- `@Nullable public static ShaderInstance getRendertypeTextIntensitySeeThroughShader()`
- `@Nullable public static ShaderInstance getRendertypeLightningShader()`
- `@Nullable public static ShaderInstance getRendertypeTripwireShader()`
- `@Nullable public static ShaderInstance getRendertypeEndPortalShader()`
- `@Nullable public static ShaderInstance getRendertypeEndGatewayShader()`
- `@Nullable public static ShaderInstance getRendertypeLinesShader()`
- `@Nullable public static ShaderInstance getRendertypeCrumblingShader()`
- `@Nullable public static ShaderInstance getRendertypeGuiShader()`
- `@Nullable public static ShaderInstance getRendertypeGuiOverlayShader()`
- `@Nullable public static ShaderInstance getRendertypeGuiTextHighlightShader()`
- `@Nullable public static ShaderInstance getRendertypeGuiGhostRecipeOverlayShader()`

## GameRenderer.ResourceCache

*record* `net.minecraft.client.renderer.GameRenderer.ResourceCache`

Enclosing class: GameRenderer

### Fields
- `private final ResourceProvider original`
  The field for the original record component.
- `private final Map<ResourceLocation,Resource> cache`
  The field for the cache record component.

### Methods
- `public Optional<Resource> getResource(ResourceLocation p_251007_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public ResourceProvider original()`
  Returns the value of the original record component.
  - returns: the value of the original record component
- `public Map<ResourceLocation,Resource> cache()`
  Returns the value of the cache record component.
  - returns: the value of the cache record component

### Inherited methods
- from `net.minecraft.server.packs.resources.ResourceProvider`: `getResourceOrThrow`, `open`, `openAsReader`

## GpuWarnlistManager

*class* `net.minecraft.client.renderer.GpuWarnlistManager`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final ResourceLocation GPU_WARNLIST_LOCATION`
- `private com.google.common.collect.ImmutableMap<String,String> warnings`
- `private boolean showWarning`
- `private boolean warningDismissed`
- `private boolean skipFabulous`

### Methods
- `public boolean hasWarnings()`
- `public boolean willShowWarning()`
- `public void showWarning()`
- `public void dismissWarning()`
- `public void dismissWarningAndSkipFabulous()`
- `public boolean isShowingWarning()`
- `public boolean isSkippingFabulous()`
- `public void resetWarnings()`
- `@Nullable public String getRendererWarnings()`
- `@Nullable public String getVersionWarnings()`
- `@Nullable public String getVendorWarnings()`
- `@Nullable public String getAllWarnings()`
- `protected GpuWarnlistManager.Preparations prepare(ResourceManager p_109220_,  ProfilerFiller p_109221_)`
- `protected void apply(GpuWarnlistManager.Preparations p_109226_,  ResourceManager p_109227_,  ProfilerFiller p_109228_)`
- `private static void compilePatterns(com.google.gson.JsonArray p_109223_,  List<Pattern> p_109224_)`
- `@Nullable private static com.google.gson.JsonObject parseJson(ResourceManager p_109245_,  ProfilerFiller p_109246_)`

### Inherited methods
- from `net.minecraft.server.packs.resources.SimplePreparableReloadListener`: `reload`
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## GpuWarnlistManager.Preparations

*class* `net.minecraft.client.renderer.GpuWarnlistManager.Preparations`

Enclosing class: GpuWarnlistManager

### Fields
- `private final List<Pattern> rendererPatterns`
- `private final List<Pattern> versionPatterns`
- `private final List<Pattern> vendorPatterns`

### Methods
- `private static String matchAny(List<Pattern> p_109273_,  String p_109274_)`
- `com.google.common.collect.ImmutableMap<String,String> apply()`

## ItemBlockRenderTypes

*class* `net.minecraft.client.renderer.ItemBlockRenderTypes`

### Fields
- `@Deprecated private static final Map<Block,RenderType> TYPE_BY_BLOCK` (deprecated)
- `@Deprecated private static final Map<Fluid,RenderType> TYPE_BY_FLUID` (deprecated)
- `private static boolean renderCutout`
- `private static final ChunkRenderTypeSet CUTOUT_MIPPED`
- `private static final ChunkRenderTypeSet SOLID`
- `private static final Map<Holder.Reference<Block>,ChunkRenderTypeSet> BLOCK_RENDER_TYPES`
- `private static final Map<Holder.Reference<Fluid>,RenderType> FLUID_RENDER_TYPES`

### Methods
- `@Deprecated public static RenderType getChunkRenderType(BlockState p_109283_)` (deprecated)
- `@Deprecated public static RenderType getMovingBlockRenderType(BlockState p_109294_)` (deprecated)
- `@Deprecated public static RenderType getRenderType(BlockState p_109285_,  boolean p_109286_)` (deprecated)
- `@Deprecated public static RenderType getRenderType(ItemStack p_109280_,  boolean p_109281_)` (deprecated)
- `public static RenderType getRenderLayer(FluidState p_109288_)`
- `@Deprecated(since="1.19") public static ChunkRenderTypeSet getRenderLayers(BlockState state)` (deprecated)
- `@Deprecated(since="1.19") public static void setRenderLayer(Block block,  RenderType type)` (deprecated)
- `@Deprecated(since="1.19") public static void setRenderLayer(Block block,  Predicate<RenderType> predicate)` (deprecated)
- `@Deprecated(since="1.19") public static void setRenderLayer(Block block,  ChunkRenderTypeSet layers)` (deprecated)
- `public static void setRenderLayer(Fluid fluid,  RenderType type)`
- `private static void checkClientLoading()`
- `private static ChunkRenderTypeSet createSetFromPredicate(Predicate<RenderType> predicate)`
- `public static void setFancy(boolean p_109292_)`

## ItemInHandRenderer

*class* `net.minecraft.client.renderer.ItemInHandRenderer`

### Fields
- `private static final RenderType MAP_BACKGROUND`
- `private static final RenderType MAP_BACKGROUND_CHECKERBOARD`
- `private static final float ITEM_SWING_X_POS_SCALE` (= -0.4000000059604645f)
- `private static final float ITEM_SWING_Y_POS_SCALE` (= 0.20000000298023224f)
- `private static final float ITEM_SWING_Z_POS_SCALE` (= -0.20000000298023224f)
- `private static final float ITEM_HEIGHT_SCALE` (= -0.6000000238418579f)
- `private static final float ITEM_POS_X` (= 0.5600000023841858f)
- `private static final float ITEM_POS_Y` (= -0.5199999809265137f)
- `private static final float ITEM_POS_Z` (= -0.7200000286102295f)
- `private static final float ITEM_PRESWING_ROT_Y` (= 45.0f)
- `private static final float ITEM_SWING_X_ROT_AMOUNT` (= -80.0f)
- `private static final float ITEM_SWING_Y_ROT_AMOUNT` (= -20.0f)
- `private static final float ITEM_SWING_Z_ROT_AMOUNT` (= -20.0f)
- `private static final float EAT_JIGGLE_X_ROT_AMOUNT` (= 10.0f)
- `private static final float EAT_JIGGLE_Y_ROT_AMOUNT` (= 90.0f)
- `private static final float EAT_JIGGLE_Z_ROT_AMOUNT` (= 30.0f)
- `private static final float EAT_JIGGLE_X_POS_SCALE` (= 0.6000000238418579f)
- `private static final float EAT_JIGGLE_Y_POS_SCALE` (= -0.5f)
- `private static final float EAT_JIGGLE_Z_POS_SCALE` (= 0.0f)
- `private static final double EAT_JIGGLE_EXPONENT` (= 27.0)
- `private static final float EAT_EXTRA_JIGGLE_CUTOFF` (= 0.800000011920929f)
- `private static final float EAT_EXTRA_JIGGLE_SCALE` (= 0.10000000149011612f)
- `private static final float ARM_SWING_X_POS_SCALE` (= -0.30000001192092896f)
- `private static final float ARM_SWING_Y_POS_SCALE` (= 0.4000000059604645f)
- `private static final float ARM_SWING_Z_POS_SCALE` (= -0.4000000059604645f)
- `private static final float ARM_SWING_Y_ROT_AMOUNT` (= 70.0f)
- `private static final float ARM_SWING_Z_ROT_AMOUNT` (= -20.0f)
- `private static final float ARM_HEIGHT_SCALE` (= -0.6000000238418579f)
- `private static final float ARM_POS_SCALE` (= 0.800000011920929f)
- `private static final float ARM_POS_X` (= 0.800000011920929f)
- `private static final float ARM_POS_Y` (= -0.75f)
- `private static final float ARM_POS_Z` (= -0.8999999761581421f)
- `private static final float ARM_PRESWING_ROT_Y` (= 45.0f)
- `private static final float ARM_PREROTATION_X_OFFSET` (= -1.0f)
- `private static final float ARM_PREROTATION_Y_OFFSET` (= 3.5999999046325684f)
- `private static final float ARM_PREROTATION_Z_OFFSET` (= 3.5f)
- `private static final float ARM_POSTROTATION_X_OFFSET` (= 5.599999904632568f)
- `private static final int ARM_ROT_X` (= 200)
- `private static final int ARM_ROT_Y` (= -135)
- `private static final int ARM_ROT_Z` (= 120)
- `private static final float MAP_SWING_X_POS_SCALE` (= -0.4000000059604645f)
- `private static final float MAP_SWING_Z_POS_SCALE` (= -0.20000000298023224f)
- `private static final float MAP_HANDS_POS_X` (= 0.0f)
- `private static final float MAP_HANDS_POS_Y` (= 0.03999999910593033f)
- `private static final float MAP_HANDS_POS_Z` (= -0.7200000286102295f)
- `private static final float MAP_HANDS_HEIGHT_SCALE` (= -1.2000000476837158f)
- `private static final float MAP_HANDS_TILT_SCALE` (= -0.5f)
- `private static final float MAP_PLAYER_PITCH_SCALE` (= 45.0f)
- `private static final float MAP_HANDS_Z_ROT_AMOUNT` (= -85.0f)
- `private static final float MAPHAND_X_ROT_AMOUNT` (= 45.0f)
- `private static final float MAPHAND_Y_ROT_AMOUNT` (= 92.0f)
- `private static final float MAPHAND_Z_ROT_AMOUNT` (= -41.0f)
- `private static final float MAP_HAND_X_POS` (= 0.30000001192092896f)
- `private static final float MAP_HAND_Y_POS` (= -1.100000023841858f)
- `private static final float MAP_HAND_Z_POS` (= 0.44999998807907104f)
- `private static final float MAP_SWING_X_ROT_AMOUNT` (= 20.0f)
- `private static final float MAP_PRE_ROT_SCALE` (= 0.3799999952316284f)
- `private static final float MAP_GLOBAL_X_POS` (= -0.5f)
- `private static final float MAP_GLOBAL_Y_POS` (= -0.5f)
- `private static final float MAP_GLOBAL_Z_POS` (= 0.0f)
- `private static final float MAP_FINAL_SCALE` (= 0.0078125f)
- `private static final int MAP_BORDER` (= 7)
- `private static final int MAP_HEIGHT` (= 128)
- `private static final int MAP_WIDTH` (= 128)
- `private static final float BOW_CHARGE_X_POS_SCALE` (= 0.0f)
- `private static final float BOW_CHARGE_Y_POS_SCALE` (= 0.0f)
- `private static final float BOW_CHARGE_Z_POS_SCALE` (= 0.03999999910593033f)
- `private static final float BOW_CHARGE_SHAKE_X_SCALE` (= 0.0f)
- `private static final float BOW_CHARGE_SHAKE_Y_SCALE` (= 0.004000000189989805f)
- `private static final float BOW_CHARGE_SHAKE_Z_SCALE` (= 0.0f)
- `private static final float BOW_CHARGE_Z_SCALE` (= 0.20000000298023224f)
- `private static final float BOW_MIN_SHAKE_CHARGE` (= 0.10000000149011612f)
- `private final Minecraft minecraft`
- `private ItemStack mainHandItem`
- `private ItemStack offHandItem`
- `private float mainHandHeight`
- `private float oMainHandHeight`
- `private float offHandHeight`
- `private float oOffHandHeight`
- `private final EntityRenderDispatcher entityRenderDispatcher`
- `private final ItemRenderer itemRenderer`

### Methods
- `public void renderItem(LivingEntity p_270072_,  ItemStack p_270793_,  ItemDisplayContext p_270837_,  boolean p_270203_,  PoseStack p_270974_,  MultiBufferSource p_270686_,  int p_270103_)`
- `private float calculateMapTilt(float p_109313_)`
- `private void renderMapHand(PoseStack p_109362_,  MultiBufferSource p_109363_,  int p_109364_,  HumanoidArm p_109365_)`
- `private void renderOneHandedMap(PoseStack p_109354_,  MultiBufferSource p_109355_,  int p_109356_,  float p_109357_,  HumanoidArm p_109358_,  float p_109359_,  ItemStack p_109360_)`
- `private void renderTwoHandedMap(PoseStack p_109340_,  MultiBufferSource p_109341_,  int p_109342_,  float p_109343_,  float p_109344_,  float p_109345_)`
- `private void renderMap(PoseStack p_109367_,  MultiBufferSource p_109368_,  int p_109369_,  ItemStack p_109370_)`
- `private void renderPlayerArm(PoseStack p_109347_,  MultiBufferSource p_109348_,  int p_109349_,  float p_109350_,  float p_109351_,  HumanoidArm p_109352_)`
- `private void applyEatTransform(PoseStack p_109331_,  float p_109332_,  HumanoidArm p_109333_,  ItemStack p_109334_)`
- `private void applyBrushTransform(PoseStack p_273513_,  float p_273245_,  HumanoidArm p_273726_,  ItemStack p_272809_,  float p_273333_)`
- `private void applyItemArmAttackTransform(PoseStack p_109336_,  HumanoidArm p_109337_,  float p_109338_)`
- `private void applyItemArmTransform(PoseStack p_109383_,  HumanoidArm p_109384_,  float p_109385_)`
- `public void renderHandsWithItems(float p_109315_,  PoseStack p_109316_,  MultiBufferSource.BufferSource p_109317_,  LocalPlayer p_109318_,  int p_109319_)`
- `static ItemInHandRenderer.HandRenderSelection evaluateWhichHandsToRender(LocalPlayer p_172915_)`
- `private static ItemInHandRenderer.HandRenderSelection selectionUsingItemWhileHoldingBowLike(LocalPlayer p_172917_)`
- `private static boolean isChargedCrossbow(ItemStack p_172913_)`
- `private void renderArmWithItem(AbstractClientPlayer p_109372_,  float p_109373_,  float p_109374_,  InteractionHand p_109375_,  float p_109376_,  ItemStack p_109377_,  float p_109378_,  PoseStack p_109379_,  MultiBufferSource p_109380_,  int p_109381_)`
- `public void tick()`
- `public void itemUsed(InteractionHand p_109321_)`

## ItemModelShaper

*class* `net.minecraft.client.renderer.ItemModelShaper`

### Fields
- `public final it.unimi.dsi.fastutil.ints.Int2ObjectMap<ModelResourceLocation> shapes`
- `private final it.unimi.dsi.fastutil.ints.Int2ObjectMap<BakedModel> shapesCache`
- `private final ModelManager modelManager`

### Methods
- `public BakedModel getItemModel(ItemStack p_109407_)`
- `@Nullable public BakedModel getItemModel(Item p_109395_)`
- `private static int getIndex(Item p_109405_)`
- `public void register(Item p_109397_,  ModelResourceLocation p_109398_)`
- `public ModelManager getModelManager()`
- `public void rebuildCache()`

## LevelRenderer

*class* `net.minecraft.client.renderer.LevelRenderer`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final int SECTION_SIZE` (= 16)
- `public static final int HALF_SECTION_SIZE` (= 8)
- `private static final float SKY_DISC_RADIUS` (= 512.0f)
- `private static final int MIN_FOG_DISTANCE` (= 32)
- `private static final int RAIN_RADIUS` (= 10)
- `private static final int RAIN_DIAMETER` (= 21)
- `private static final int TRANSPARENT_SORT_COUNT` (= 15)
- `private static final ResourceLocation MOON_LOCATION`
- `private static final ResourceLocation SUN_LOCATION`
- `private static final ResourceLocation CLOUDS_LOCATION`
- `private static final ResourceLocation END_SKY_LOCATION`
- `private static final ResourceLocation FORCEFIELD_LOCATION`
- `private static final ResourceLocation RAIN_LOCATION`
- `private static final ResourceLocation SNOW_LOCATION`
- `public static final Direction[] DIRECTIONS`
- `private final Minecraft minecraft`
- `private final EntityRenderDispatcher entityRenderDispatcher`
- `private final BlockEntityRenderDispatcher blockEntityRenderDispatcher`
- `private final RenderBuffers renderBuffers`
- `@Nullable private ClientLevel level`
- `private final SectionOcclusionGraph sectionOcclusionGraph`
- `private final it.unimi.dsi.fastutil.objects.ObjectArrayList<SectionRenderDispatcher.RenderSection> visibleSections`
- `private final Set<BlockEntity> globalBlockEntities`
- `@Nullable private ViewArea viewArea`
- `@Nullable private VertexBuffer starBuffer`
- `@Nullable private VertexBuffer skyBuffer`
- `@Nullable private VertexBuffer darkBuffer`
- `private boolean generateClouds`
- `@Nullable private VertexBuffer cloudBuffer`
- `private final RunningTrimmedMean frameTimes`
- `private int ticks`
- `private final it.unimi.dsi.fastutil.ints.Int2ObjectMap<BlockDestructionProgress> destroyingBlocks`
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectMap<SortedSet<BlockDestructionProgress>> destructionProgress`
- `private final Map<BlockPos,SoundInstance> playingRecords`
- `@Nullable private RenderTarget entityTarget`
- `@Nullable private PostChain entityEffect`
- `@Nullable private RenderTarget translucentTarget`
- `@Nullable private RenderTarget itemEntityTarget`
- `@Nullable private RenderTarget particlesTarget`
- `@Nullable private RenderTarget weatherTarget`
- `@Nullable private RenderTarget cloudsTarget`
- `@Nullable private PostChain transparencyChain`
- `private int lastCameraSectionX`
- `private int lastCameraSectionY`
- `private int lastCameraSectionZ`
- `private double prevCamX`
- `private double prevCamY`
- `private double prevCamZ`
- `private double prevCamRotX`
- `private double prevCamRotY`
- `private int prevCloudX`
- `private int prevCloudY`
- `private int prevCloudZ`
- `private Vec3 prevCloudColor`
- `@Nullable private CloudStatus prevCloudsType`
- `@Nullable private SectionRenderDispatcher sectionRenderDispatcher`
- `private int lastViewDistance`
- `private int renderedEntities`
- `private int culledEntities`
- `private Frustum cullingFrustum`
- `private boolean captureFrustum`
- `@Nullable private Frustum capturedFrustum`
- `private final org.joml.Vector4f[] frustumPoints`
- `private final org.joml.Vector3d frustumPos`
- `private double xTransparentOld`
- `private double yTransparentOld`
- `private double zTransparentOld`
- `private int rainSoundTime`
- `private final float[] rainSizeX`
- `private final float[] rainSizeZ`

### Methods
- `private void renderSnowAndRain(LightTexture p_109704_,  float p_109705_,  double p_109706_,  double p_109707_,  double p_109708_)`
- `public void tickRain(Camera p_109694_)`
- `public void close()`
- `public void onResourceManagerReload(ResourceManager p_109513_)`
- `public void initOutline()`
- `private void initTransparency()`
- `private void deinitTransparency()`
- `public void doEntityOutline()`
- `public boolean shouldShowEntityOutlines()`
- `private void createDarkSky()`
- `private void createLightSky()`
- `private static BufferBuilder.RenderedBuffer buildSkyDisc(BufferBuilder p_234268_,  float p_234269_)`
- `private void createStars()`
- `private BufferBuilder.RenderedBuffer drawStars(BufferBuilder p_234260_)`
- `public void setLevel(@Nullable  ClientLevel p_109702_)`
- `public void graphicsChanged()`
- `public void allChanged()`
- `public void resize(int p_109488_,  int p_109489_)`
- `public String getSectionStatistics()`
- `public SectionRenderDispatcher getSectionRenderDispatcher()`
- `public double getTotalSections()`
- `public double getLastViewDistance()`
- `public int countRenderedSections()`
- `public String getEntityStatistics()`
- `private void setupRender(Camera p_194339_,  Frustum p_194340_,  boolean p_194341_,  boolean p_194342_)`
- `public static Frustum offsetFrustum(Frustum p_298803_)`
- `private void applyFrustum(Frustum p_194355_)`
- `public void addRecentlyCompiledSection(SectionRenderDispatcher.RenderSection p_301248_)`
- `private void captureFrustum(org.joml.Matrix4f p_253756_,  org.joml.Matrix4f p_253787_,  double p_254187_,  double p_253833_,  double p_254547_,  Frustum p_253954_)`
- `public void prepareCullFrustum(PoseStack p_253986_,  Vec3 p_253766_,  org.joml.Matrix4f p_254341_)`
- `public void renderLevel(PoseStack p_109600_,  float p_109601_,  long p_109602_,  boolean p_109603_,  Camera p_109604_,  GameRenderer p_109605_,  LightTexture p_109606_,  org.joml.Matrix4f p_254120_)`
- `private void checkPoseStack(PoseStack p_109589_)`
- `private void renderEntity(Entity p_109518_,  double p_109519_,  double p_109520_,  double p_109521_,  float p_109522_,  PoseStack p_109523_,  MultiBufferSource p_109524_)`
- `private void renderSectionLayer(RenderType p_298012_,  PoseStack p_298121_,  double p_298706_,  double p_299730_,  double p_298956_,  org.joml.Matrix4f p_297481_)`
- `private void renderDebug(PoseStack p_271014_,  MultiBufferSource p_270107_,  Camera p_270483_)`
- `private void addFrustumVertex(VertexConsumer p_270950_,  org.joml.Matrix4f p_270118_,  int p_270865_)`
- `private void addFrustumQuad(VertexConsumer p_270858_,  org.joml.Matrix4f p_270341_,  int p_270702_,  int p_270959_,  int p_270732_,  int p_270363_,  int p_270273_,  int p_270934_,  int p_270916_)`
- `public void captureFrustum()`
- `public void killFrustum()`
- `public void tick()`
- `private void removeProgress(BlockDestructionProgress p_109766_)`
- `private void renderEndSky(PoseStack p_109781_)`
- `public void renderSky(PoseStack p_202424_,  org.joml.Matrix4f p_254034_,  float p_202426_,  Camera p_202427_,  boolean p_202428_,  Runnable p_202429_)`
- `private boolean doesMobEffectBlockSky(Camera p_234311_)`
- `public void renderClouds(PoseStack p_254145_,  org.joml.Matrix4f p_254537_,  float p_254364_,  double p_253843_,  double p_253663_,  double p_253795_)`
- `private BufferBuilder.RenderedBuffer buildClouds(BufferBuilder p_234262_,  double p_234263_,  double p_234264_,  double p_234265_,  Vec3 p_234266_)`
- `private void compileSections(Camera p_194371_)`
- `private void renderWorldBorder(Camera p_173013_)`
- `private void renderHitOutline(PoseStack p_109638_,  VertexConsumer p_109639_,  Entity p_109640_,  double p_109641_,  double p_109642_,  double p_109643_,  BlockPos p_109644_,  BlockState p_109645_)`
- `private static Vec3 mixColor(float p_286899_)`
- `private static Vec3 shiftHue(float p_286907_,  float p_286536_,  float p_286318_,  float p_286590_)`
- `public static void renderVoxelShape(PoseStack p_286791_,  VertexConsumer p_286416_,  VoxelShape p_286863_,  double p_286432_,  double p_286836_,  double p_286774_,  float p_286612_,  float p_286516_,  float p_286787_,  float p_286300_,  boolean p_286443_)`
- `private static void renderShape(PoseStack p_109783_,  VertexConsumer p_109784_,  VoxelShape p_109785_,  double p_109786_,  double p_109787_,  double p_109788_,  float p_109789_,  float p_109790_,  float p_109791_,  float p_109792_)`
- `public static void renderLineBox(VertexConsumer p_172966_,  double p_172967_,  double p_172968_,  double p_172969_,  double p_172970_,  double p_172971_,  double p_172972_,  float p_172973_,  float p_172974_,  float p_172975_,  float p_172976_)`
- `public static void renderLineBox(PoseStack p_109647_,  VertexConsumer p_109648_,  AABB p_109649_,  float p_109650_,  float p_109651_,  float p_109652_,  float p_109653_)`
- `public static void renderLineBox(PoseStack p_109609_,  VertexConsumer p_109610_,  double p_109611_,  double p_109612_,  double p_109613_,  double p_109614_,  double p_109615_,  double p_109616_,  float p_109617_,  float p_109618_,  float p_109619_,  float p_109620_)`
- `public static void renderLineBox(PoseStack p_109622_,  VertexConsumer p_109623_,  double p_109624_,  double p_109625_,  double p_109626_,  double p_109627_,  double p_109628_,  double p_109629_,  float p_109630_,  float p_109631_,  float p_109632_,  float p_109633_,  float p_109634_,  float p_109635_,  float p_109636_)`
- `public static void addChainedFilledBoxVertices(PoseStack p_270343_,  VertexConsumer p_270926_,  double p_270503_,  double p_270353_,  double p_270642_,  double p_270676_,  double p_270711_,  double p_270601_,  float p_270523_,  float p_270382_,  float p_270089_,  float p_270335_)`
- `public static void addChainedFilledBoxVertices(PoseStack p_270352_,  VertexConsumer p_271015_,  float p_270144_,  float p_270901_,  float p_270546_,  float p_270102_,  float p_270605_,  float p_271006_,  float p_270864_,  float p_270181_,  float p_270220_,  float p_270293_)`
- `public void blockChanged(BlockGetter p_109545_,  BlockPos p_109546_,  BlockState p_109547_,  BlockState p_109548_,  int p_109549_)`
- `private void setBlockDirty(BlockPos p_109733_,  boolean p_109734_)`
- `public void setBlocksDirty(int p_109495_,  int p_109496_,  int p_109497_,  int p_109498_,  int p_109499_,  int p_109500_)`
- `public void setBlockDirty(BlockPos p_109722_,  BlockState p_109723_,  BlockState p_109724_)`
- `public void setSectionDirtyWithNeighbors(int p_109491_,  int p_109492_,  int p_109493_)`
- `public void setSectionDirty(int p_109771_,  int p_109772_,  int p_109773_)`
- `private void setSectionDirty(int p_109502_,  int p_109503_,  int p_109504_,  boolean p_109505_)`
- `public Frustum getFrustum()`
- `public int getTicks()`
- `@Deprecated public void playStreamingMusic(@Nullable  SoundEvent p_109515_,  BlockPos p_109516_)` (deprecated)
- `public void playStreamingMusic(@Nullable  SoundEvent p_109515_,  BlockPos p_109516_,  @Nullable  RecordItem musicDiscItem)`
- `private void notifyNearbyEntities(Level p_109551_,  BlockPos p_109552_,  boolean p_109553_)`
- `public void addParticle(ParticleOptions p_109744_,  boolean p_109745_,  double p_109746_,  double p_109747_,  double p_109748_,  double p_109749_,  double p_109750_,  double p_109751_)`
- `public void addParticle(ParticleOptions p_109753_,  boolean p_109754_,  boolean p_109755_,  double p_109756_,  double p_109757_,  double p_109758_,  double p_109759_,  double p_109760_,  double p_109761_)`
- `private <T extends ParticleOptions> void addParticle(T p_109736_,  double p_109737_,  double p_109738_,  double p_109739_,  double p_109740_,  double p_109741_,  double p_109742_)`
- `@Nullable private Particle addParticleInternal(ParticleOptions p_109796_,  boolean p_109797_,  double p_109798_,  double p_109799_,  double p_109800_,  double p_109801_,  double p_109802_,  double p_109803_)`
- `@Nullable private Particle addParticleInternal(ParticleOptions p_109805_,  boolean p_109806_,  boolean p_109807_,  double p_109808_,  double p_109809_,  double p_109810_,  double p_109811_,  double p_109812_,  double p_109813_)`
- `private ParticleStatus calculateParticleLevel(boolean p_109768_)`
- `public void clear()`
- `public void globalLevelEvent(int p_109507_,  BlockPos p_109508_,  int p_109509_)`
- `public void levelEvent(int p_234305_,  BlockPos p_234306_,  int p_234307_)`
- `public void destroyBlockProgress(int p_109775_,  BlockPos p_109776_,  int p_109777_)`
- `public boolean hasRenderedAllSections()`
- `public void onChunkLoaded(ChunkPos p_300326_)`
- `public void needsUpdate()`
- `public void updateGlobalBlockEntities(Collection<BlockEntity> p_109763_,  Collection<BlockEntity> p_109764_)`
- `public static int getLightColor(BlockAndTintGetter p_109542_,  BlockPos p_109543_)`
- `public static int getLightColor(BlockAndTintGetter p_109538_,  BlockState p_109539_,  BlockPos p_109540_)`
- `public boolean isSectionCompiled(BlockPos p_300380_)`
- `@Nullable public RenderTarget entityTarget()`
- `@Nullable public RenderTarget getTranslucentTarget()`
- `@Nullable public RenderTarget getItemEntityTarget()`
- `@Nullable public RenderTarget getParticlesTarget()`
- `@Nullable public RenderTarget getWeatherTarget()`
- `@Nullable public RenderTarget getCloudsTarget()`

### Inherited methods
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`
- from `net.minecraft.server.packs.resources.ResourceManagerReloadListener`: `reload`

## LevelRenderer.TransparencyShaderException

*class* `net.minecraft.client.renderer.LevelRenderer.TransparencyShaderException`

Enclosing class: LevelRenderer

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## LightTexture

*class* `net.minecraft.client.renderer.LightTexture`

### Fields
- `public static final int FULL_BRIGHT` (= 15728880)
- `public static final int FULL_SKY` (= 15728640)
- `public static final int FULL_BLOCK` (= 240)
- `private final DynamicTexture lightTexture`
- `private final NativeImage lightPixels`
- `private final ResourceLocation lightTextureLocation`
- `private boolean updateLightTexture`
- `private float blockLightRedFlicker`
- `private final GameRenderer renderer`
- `private final Minecraft minecraft`

### Methods
- `public void close()`
- `public void tick()`
- `public void turnOffLightLayer()`
- `public void turnOnLightLayer()`
- `private float getDarknessGamma(float p_234320_)`
- `private float calculateDarknessScale(LivingEntity p_234313_,  float p_234314_,  float p_234315_)`
- `public void updateLightTexture(float p_109882_)`
- `private static void clampColor(org.joml.Vector3f p_254122_)`
- `private float notGamma(float p_109893_)`
- `public static float getBrightness(DimensionType p_234317_,  int p_234318_)`
- `public static int pack(int p_109886_,  int p_109887_)`
- `public static int block(int p_109884_)`
- `public static int sky(int p_109895_)`

## MultiBufferSource

*interface* `net.minecraft.client.renderer.MultiBufferSource`

### Methods
- `static MultiBufferSource.BufferSource immediate(BufferBuilder p_109899_)`
- `static MultiBufferSource.BufferSource immediateWithBuffers(Map<RenderType,BufferBuilder> p_109901_,  BufferBuilder p_109902_)`
- `VertexConsumer getBuffer(RenderType p_109903_)`

## MultiBufferSource.BufferSource

*class* `net.minecraft.client.renderer.MultiBufferSource.BufferSource`

Enclosing interface: MultiBufferSource

### Fields
- `protected final BufferBuilder builder`
- `protected final Map<RenderType,BufferBuilder> fixedBuffers`
- `protected Optional<RenderType> lastState`
- `protected final Set<BufferBuilder> startedBuffers`

### Methods
- `public VertexConsumer getBuffer(RenderType p_109919_)`
- `private BufferBuilder getBuilderRaw(RenderType p_109915_)`
- `public void endLastBatch()`
- `public void endBatch()`
- `public void endBatch(RenderType p_109913_)`

## OutlineBufferSource

*class* `net.minecraft.client.renderer.OutlineBufferSource`

### Fields
- `private final MultiBufferSource.BufferSource bufferSource`
- `private final MultiBufferSource.BufferSource outlineBufferSource`
- `private int teamR`
- `private int teamG`
- `private int teamB`
- `private int teamA`

### Methods
- `public VertexConsumer getBuffer(RenderType p_109935_)`
- `public void setColor(int p_109930_,  int p_109931_,  int p_109932_,  int p_109933_)`
- `public void endOutlineBatch()`

## OutlineBufferSource.EntityOutlineGenerator

*class* `net.minecraft.client.renderer.OutlineBufferSource.EntityOutlineGenerator`

Enclosing class: OutlineBufferSource

### Fields
- `private final VertexConsumer delegate`
- `private double x`
- `private double y`
- `private double z`
- `private float u`
- `private float v`

### Inherited fields
- from `com.mojang.blaze3d.vertex.DefaultedVertexConsumer`: `defaultA`, `defaultB`, `defaultColorSet`, `defaultG`, `defaultR`

### Methods
- `public void defaultColor(int p_109993_,  int p_109994_,  int p_109995_,  int p_109996_)`
- `public void unsetDefaultColor()`
- `public VertexConsumer vertex(double p_109956_,  double p_109957_,  double p_109958_)`
- `public VertexConsumer color(int p_109981_,  int p_109982_,  int p_109983_,  int p_109984_)`
- `public VertexConsumer uv(float p_109960_,  float p_109961_)`
- `public VertexConsumer overlayCoords(int p_109978_,  int p_109979_)`
- `public VertexConsumer uv2(int p_109990_,  int p_109991_)`
- `public VertexConsumer normal(float p_109986_,  float p_109987_,  float p_109988_)`
- `public void vertex(float p_109963_,  float p_109964_,  float p_109965_,  float p_109966_,  float p_109967_,  float p_109968_,  float p_109969_,  float p_109970_,  float p_109971_,  int p_109972_,  int p_109973_,  float p_109974_,  float p_109975_,  float p_109976_)`
- `public void endVertex()`

### Inherited methods
- from `net.minecraftforge.client.extensions.IForgeVertexConsumer`: `applyBakedLighting`, `applyBakedNormals`, `misc`, `putBulkData`
- from `com.mojang.blaze3d.vertex.VertexConsumer`: `color`, `color`, `normal`, `overlayCoords`, `putBulkData`, `putBulkData`, `putBulkData`, `uv2`, `vertex`

## PanoramaRenderer

*class* `net.minecraft.client.renderer.PanoramaRenderer`

### Fields
- `private final Minecraft minecraft`
- `private final CubeMap cubeMap`
- `private float spin`
- `private float bob`

### Methods
- `public void render(float p_110004_,  float p_110005_)`
- `private static float wrap(float p_249058_,  float p_249548_)`

## PostChain

*class* `net.minecraft.client.renderer.PostChain`

### Fields
- `private static final String MAIN_RENDER_TARGET` (= "minecraft:main")
- `private final RenderTarget screenTarget`
- `private final ResourceManager resourceManager`
- `private final String name`
- `private final List<PostPass> passes`
- `private final Map<String,RenderTarget> customRenderTargets`
- `private final List<RenderTarget> fullSizedTargets`
- `private org.joml.Matrix4f shaderOrthoMatrix`
- `private int screenWidth`
- `private int screenHeight`
- `private float time`
- `private float lastStamp`

### Methods
- `private void load(TextureManager p_110034_,  ResourceLocation p_110035_)  throws IOException, com.google.gson.JsonSyntaxException`
  - throws: IOException
  - throws: com.google.gson.JsonSyntaxException
- `private void parseTargetNode(com.google.gson.JsonElement p_110029_)  throws ChainedJsonException`
  - throws: ChainedJsonException
- `private void parsePassNode(TextureManager p_110031_,  com.google.gson.JsonElement p_110032_)  throws IOException`
  - throws: IOException
- `private void parseUniformNode(com.google.gson.JsonElement p_110048_)  throws ChainedJsonException`
  - throws: ChainedJsonException
- `public RenderTarget getTempTarget(String p_110037_)`
- `public void addTempTarget(String p_110039_,  int p_110040_,  int p_110041_)`
- `public void close()`
- `public PostPass addPass(String p_110043_,  RenderTarget p_110044_,  RenderTarget p_110045_)  throws IOException`
  - throws: IOException
- `private void updateOrthoMatrix()`
- `public void resize(int p_110026_,  int p_110027_)`
- `public void process(float p_110024_)`
- `public final String getName()`
- `@Nullable private RenderTarget getRenderTarget(@Nullable  String p_110050_)`

## PostPass

*class* `net.minecraft.client.renderer.PostPass`

### Fields
- `private final EffectInstance effect`
- `public final RenderTarget inTarget`
- `public final RenderTarget outTarget`
- `private final List<IntSupplier> auxAssets`
- `private final List<String> auxNames`
- `private final List<Integer> auxWidths`
- `private final List<Integer> auxHeights`
- `private org.joml.Matrix4f shaderOrthoMatrix`

### Methods
- `public void close()`
- `public final String getName()`
- `public void addAuxAsset(String p_110070_,  IntSupplier p_110071_,  int p_110072_,  int p_110073_)`
- `public void setOrthoMatrix(org.joml.Matrix4f p_253811_)`
- `public void process(float p_110066_)`
- `public EffectInstance getEffect()`

## Rect2i

*class* `net.minecraft.client.renderer.Rect2i`

### Fields
- `private int xPos`
- `private int yPos`
- `private int width`
- `private int height`

### Methods
- `public Rect2i intersect(Rect2i p_173053_)`
- `public int getX()`
- `public int getY()`
- `public void setX(int p_173048_)`
- `public void setY(int p_173055_)`
- `public int getWidth()`
- `public int getHeight()`
- `public void setWidth(int p_173057_)`
- `public void setHeight(int p_173059_)`
- `public void setPosition(int p_173050_,  int p_173051_)`
- `public boolean contains(int p_110088_,  int p_110089_)`

## RenderBuffers

*class* `net.minecraft.client.renderer.RenderBuffers`

### Fields
- `private final SectionBufferBuilderPack fixedBufferPack`
- `private final SortedMap<RenderType,BufferBuilder> fixedBuffers`
- `private final MultiBufferSource.BufferSource bufferSource`
- `private final MultiBufferSource.BufferSource crumblingBufferSource`
- `private final OutlineBufferSource outlineBufferSource`

### Methods
- `private static void put(it.unimi.dsi.fastutil.objects.Object2ObjectLinkedOpenHashMap<RenderType,BufferBuilder> p_110102_,  RenderType p_110103_)`
- `public SectionBufferBuilderPack fixedBufferPack()`
- `public MultiBufferSource.BufferSource bufferSource()`
- `public MultiBufferSource.BufferSource crumblingBufferSource()`
- `public OutlineBufferSource outlineBufferSource()`

## RenderStateShard

*class* `net.minecraft.client.renderer.RenderStateShard`

### Fields
- `private static final float VIEW_SCALE_Z_EPSILON` (= 0.999755859375f)
- `public static final double MAX_ENCHANTMENT_GLINT_SPEED_MILLIS` (= 8.0)
- `protected final String name`
- `protected Runnable setupState`
- `private final Runnable clearState`
- `protected static final RenderStateShard.TransparencyStateShard NO_TRANSPARENCY`
- `protected static final RenderStateShard.TransparencyStateShard ADDITIVE_TRANSPARENCY`
- `protected static final RenderStateShard.TransparencyStateShard LIGHTNING_TRANSPARENCY`
- `protected static final RenderStateShard.TransparencyStateShard GLINT_TRANSPARENCY`
- `protected static final RenderStateShard.TransparencyStateShard CRUMBLING_TRANSPARENCY`
- `protected static final RenderStateShard.TransparencyStateShard TRANSLUCENT_TRANSPARENCY`
- `protected static final RenderStateShard.ShaderStateShard NO_SHADER`
- `protected static final RenderStateShard.ShaderStateShard POSITION_COLOR_LIGHTMAP_SHADER`
- `protected static final RenderStateShard.ShaderStateShard POSITION_SHADER`
- `protected static final RenderStateShard.ShaderStateShard POSITION_COLOR_TEX_SHADER`
- `protected static final RenderStateShard.ShaderStateShard POSITION_TEX_SHADER`
- `protected static final RenderStateShard.ShaderStateShard POSITION_COLOR_TEX_LIGHTMAP_SHADER`
- `protected static final RenderStateShard.ShaderStateShard POSITION_COLOR_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_SOLID_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_CUTOUT_MIPPED_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_CUTOUT_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_TRANSLUCENT_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_ENTITY_SOLID_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_ENTITY_CUTOUT_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_BEACON_BEAM_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_ENTITY_DECAL_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_ENTITY_SHADOW_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_ENTITY_ALPHA_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_EYES_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_ENERGY_SWIRL_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_LEASH_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_WATER_MASK_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_OUTLINE_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_ARMOR_GLINT_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_GLINT_TRANSLUCENT_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_GLINT_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_GLINT_DIRECT_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_ENTITY_GLINT_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_CRUMBLING_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_TEXT_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_TEXT_BACKGROUND_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_TEXT_INTENSITY_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_TEXT_SEE_THROUGH_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_LIGHTNING_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_TRIPWIRE_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_END_PORTAL_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_END_GATEWAY_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_LINES_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_GUI_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_GUI_OVERLAY_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`
- `protected static final RenderStateShard.ShaderStateShard RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`
- `protected static final RenderStateShard.TextureStateShard BLOCK_SHEET_MIPPED`
- `protected static final RenderStateShard.TextureStateShard BLOCK_SHEET`
- `protected static final RenderStateShard.EmptyTextureStateShard NO_TEXTURE`
- `protected static final RenderStateShard.TexturingStateShard DEFAULT_TEXTURING`
- `protected static final RenderStateShard.TexturingStateShard GLINT_TEXTURING`
- `protected static final RenderStateShard.TexturingStateShard ENTITY_GLINT_TEXTURING`
- `protected static final RenderStateShard.LightmapStateShard LIGHTMAP`
- `protected static final RenderStateShard.LightmapStateShard NO_LIGHTMAP`
- `protected static final RenderStateShard.OverlayStateShard OVERLAY`
- `protected static final RenderStateShard.OverlayStateShard NO_OVERLAY`
- `protected static final RenderStateShard.CullStateShard CULL`
- `protected static final RenderStateShard.CullStateShard NO_CULL`
- `protected static final RenderStateShard.DepthTestStateShard NO_DEPTH_TEST`
- `protected static final RenderStateShard.DepthTestStateShard EQUAL_DEPTH_TEST`
- `protected static final RenderStateShard.DepthTestStateShard LEQUAL_DEPTH_TEST`
- `protected static final RenderStateShard.DepthTestStateShard GREATER_DEPTH_TEST`
- `protected static final RenderStateShard.WriteMaskStateShard COLOR_DEPTH_WRITE`
- `protected static final RenderStateShard.WriteMaskStateShard COLOR_WRITE`
- `protected static final RenderStateShard.WriteMaskStateShard DEPTH_WRITE`
- `protected static final RenderStateShard.LayeringStateShard NO_LAYERING`
- `protected static final RenderStateShard.LayeringStateShard POLYGON_OFFSET_LAYERING`
- `protected static final RenderStateShard.LayeringStateShard VIEW_OFFSET_Z_LAYERING`
- `protected static final RenderStateShard.OutputStateShard MAIN_TARGET`
- `protected static final RenderStateShard.OutputStateShard OUTLINE_TARGET`
- `protected static final RenderStateShard.OutputStateShard TRANSLUCENT_TARGET`
- `protected static final RenderStateShard.OutputStateShard PARTICLES_TARGET`
- `protected static final RenderStateShard.OutputStateShard WEATHER_TARGET`
- `protected static final RenderStateShard.OutputStateShard CLOUDS_TARGET`
- `protected static final RenderStateShard.OutputStateShard ITEM_ENTITY_TARGET`
- `protected static final RenderStateShard.LineStateShard DEFAULT_LINE`
- `protected static final RenderStateShard.ColorLogicStateShard NO_COLOR_LOGIC`
- `protected static final RenderStateShard.ColorLogicStateShard OR_REVERSE_COLOR_LOGIC`

### Methods
- `public void setupRenderState()`
- `public void clearRenderState()`
- `public String toString()`
- `private static void setupGlintTexturing(float p_110187_)`

## RenderStateShard.BooleanStateShard

*class* `net.minecraft.client.renderer.RenderStateShard.BooleanStateShard`

Enclosing class: RenderStateShard

### Fields
- `private final boolean enabled`

### Inherited fields
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Methods
- `public String toString()`

### Inherited methods
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`

## RenderStateShard.ColorLogicStateShard

*class* `net.minecraft.client.renderer.RenderStateShard.ColorLogicStateShard`

Enclosing class: RenderStateShard

### Inherited fields
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Inherited methods
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`, `toString`

## RenderStateShard.CullStateShard

*class* `net.minecraft.client.renderer.RenderStateShard.CullStateShard`

Enclosing class: RenderStateShard

### Inherited fields
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Inherited methods
- from `net.minecraft.client.renderer.RenderStateShard.BooleanStateShard`: `toString`
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`

## RenderStateShard.DepthTestStateShard

*class* `net.minecraft.client.renderer.RenderStateShard.DepthTestStateShard`

Enclosing class: RenderStateShard

### Fields
- `private final String functionName`

### Inherited fields
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Methods
- `public String toString()`

### Inherited methods
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`

## RenderStateShard.EmptyTextureStateShard

*class* `net.minecraft.client.renderer.RenderStateShard.EmptyTextureStateShard`

Enclosing class: RenderStateShard

### Inherited fields
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Methods
- `protected Optional<ResourceLocation> cutoutTexture()`

### Inherited methods
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`, `toString`

## RenderStateShard.LayeringStateShard

*class* `net.minecraft.client.renderer.RenderStateShard.LayeringStateShard`

Enclosing class: RenderStateShard

### Inherited fields
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Inherited methods
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`, `toString`

## RenderStateShard.LightmapStateShard

*class* `net.minecraft.client.renderer.RenderStateShard.LightmapStateShard`

Enclosing class: RenderStateShard

### Inherited fields
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Inherited methods
- from `net.minecraft.client.renderer.RenderStateShard.BooleanStateShard`: `toString`
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`

## RenderStateShard.LineStateShard

*class* `net.minecraft.client.renderer.RenderStateShard.LineStateShard`

Enclosing class: RenderStateShard

### Fields
- `private final OptionalDouble width`

### Inherited fields
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Methods
- `public String toString()`

### Inherited methods
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`

## RenderStateShard.MultiTextureStateShard

*class* `net.minecraft.client.renderer.RenderStateShard.MultiTextureStateShard`

Enclosing class: RenderStateShard

### Fields
- `private final Optional<ResourceLocation> cutoutTexture`

### Inherited fields
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Methods
- `protected Optional<ResourceLocation> cutoutTexture()`
- `public static RenderStateShard.MultiTextureStateShard.Builder builder()`

### Inherited methods
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`, `toString`

## RenderStateShard.MultiTextureStateShard.Builder

*class* `net.minecraft.client.renderer.RenderStateShard.MultiTextureStateShard.Builder`

Enclosing class: RenderStateShard.MultiTextureStateShard

### Fields
- `private final com.google.common.collect.ImmutableList.Builder<org.apache.commons.lang3.tuple.Triple<ResourceLocation,Boolean,Boolean>> builder`

### Methods
- `public RenderStateShard.MultiTextureStateShard.Builder add(ResourceLocation p_173133_,  boolean p_173134_,  boolean p_173135_)`
- `public RenderStateShard.MultiTextureStateShard build()`

## RenderStateShard.OffsetTexturingStateShard

*class* `net.minecraft.client.renderer.RenderStateShard.OffsetTexturingStateShard`

Enclosing class: RenderStateShard

### Inherited fields
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Inherited methods
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`, `toString`

## RenderStateShard.OutputStateShard

*class* `net.minecraft.client.renderer.RenderStateShard.OutputStateShard`

Enclosing class: RenderStateShard

### Inherited fields
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Inherited methods
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`, `toString`

## RenderStateShard.OverlayStateShard

*class* `net.minecraft.client.renderer.RenderStateShard.OverlayStateShard`

Enclosing class: RenderStateShard

### Inherited fields
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Inherited methods
- from `net.minecraft.client.renderer.RenderStateShard.BooleanStateShard`: `toString`
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`

## RenderStateShard.ShaderStateShard

*class* `net.minecraft.client.renderer.RenderStateShard.ShaderStateShard`

Enclosing class: RenderStateShard

### Fields
- `private final Optional<Supplier<ShaderInstance>> shader`

### Inherited fields
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Methods
- `public String toString()`

### Inherited methods
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`

## RenderStateShard.TextureStateShard

*class* `net.minecraft.client.renderer.RenderStateShard.TextureStateShard`

Enclosing class: RenderStateShard

### Fields
- `private final Optional<ResourceLocation> texture`
- `protected boolean blur`
- `protected boolean mipmap`

### Inherited fields
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Methods
- `public String toString()`
- `protected Optional<ResourceLocation> cutoutTexture()`

### Inherited methods
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`

## RenderStateShard.TexturingStateShard

*class* `net.minecraft.client.renderer.RenderStateShard.TexturingStateShard`

Enclosing class: RenderStateShard

### Inherited fields
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Inherited methods
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`, `toString`

## RenderStateShard.TransparencyStateShard

*class* `net.minecraft.client.renderer.RenderStateShard.TransparencyStateShard`

Enclosing class: RenderStateShard

### Inherited fields
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Inherited methods
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`, `toString`

## RenderStateShard.WriteMaskStateShard

*class* `net.minecraft.client.renderer.RenderStateShard.WriteMaskStateShard`

Enclosing class: RenderStateShard

### Fields
- `private final boolean writeColor`
- `private final boolean writeDepth`

### Inherited fields
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Methods
- `public String toString()`

### Inherited methods
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`

## RenderType

*class* `net.minecraft.client.renderer.RenderType`

### Fields
- `private static final int BYTES_IN_INT` (= 4)
- `private static final int MEGABYTE` (= 1048576)
- `public static final int BIG_BUFFER_SIZE` (= 2097152)
- `public static final int MEDIUM_BUFFER_SIZE` (= 262144)
- `public static final int SMALL_BUFFER_SIZE` (= 131072)
- `public static final int TRANSIENT_BUFFER_SIZE` (= 256)
- `private static final RenderType SOLID`
- `private static final RenderType CUTOUT_MIPPED`
- `private static final RenderType CUTOUT`
- `private static final RenderType TRANSLUCENT`
- `private static final RenderType TRANSLUCENT_MOVING_BLOCK`
- `private static final RenderType TRANSLUCENT_NO_CRUMBLING`
- `private static final Function<ResourceLocation,RenderType> ARMOR_CUTOUT_NO_CULL`
- `private static final Function<ResourceLocation,RenderType> ENTITY_SOLID`
- `private static final Function<ResourceLocation,RenderType> ENTITY_CUTOUT`
- `private static final BiFunction<ResourceLocation,Boolean,RenderType> ENTITY_CUTOUT_NO_CULL`
- `private static final BiFunction<ResourceLocation,Boolean,RenderType> ENTITY_CUTOUT_NO_CULL_Z_OFFSET`
- `private static final Function<ResourceLocation,RenderType> ITEM_ENTITY_TRANSLUCENT_CULL`
- `private static final Function<ResourceLocation,RenderType> ENTITY_TRANSLUCENT_CULL`
- `private static final BiFunction<ResourceLocation,Boolean,RenderType> ENTITY_TRANSLUCENT`
- `private static final BiFunction<ResourceLocation,Boolean,RenderType> ENTITY_TRANSLUCENT_EMISSIVE`
- `private static final Function<ResourceLocation,RenderType> ENTITY_SMOOTH_CUTOUT`
- `private static final BiFunction<ResourceLocation,Boolean,RenderType> BEACON_BEAM`
- `private static final Function<ResourceLocation,RenderType> ENTITY_DECAL`
- `private static final Function<ResourceLocation,RenderType> ENTITY_NO_OUTLINE`
- `private static final Function<ResourceLocation,RenderType> ENTITY_SHADOW`
- `private static final Function<ResourceLocation,RenderType> DRAGON_EXPLOSION_ALPHA`
- `private static final Function<ResourceLocation,RenderType> EYES`
- `private static final RenderType LEASH`
- `private static final RenderType WATER_MASK`
- `private static final RenderType ARMOR_GLINT`
- `private static final RenderType ARMOR_ENTITY_GLINT`
- `private static final RenderType GLINT_TRANSLUCENT`
- `private static final RenderType GLINT`
- `private static final RenderType GLINT_DIRECT`
- `private static final RenderType ENTITY_GLINT`
- `private static final RenderType ENTITY_GLINT_DIRECT`
- `private static final Function<ResourceLocation,RenderType> CRUMBLING`
- `private static final Function<ResourceLocation,RenderType> TEXT`
- `private static final RenderType TEXT_BACKGROUND`
- `private static final Function<ResourceLocation,RenderType> TEXT_INTENSITY`
- `private static final Function<ResourceLocation,RenderType> TEXT_POLYGON_OFFSET`
- `private static final Function<ResourceLocation,RenderType> TEXT_INTENSITY_POLYGON_OFFSET`
- `private static final Function<ResourceLocation,RenderType> TEXT_SEE_THROUGH`
- `private static final RenderType TEXT_BACKGROUND_SEE_THROUGH`
- `private static final Function<ResourceLocation,RenderType> TEXT_INTENSITY_SEE_THROUGH`
- `private static final RenderType LIGHTNING`
- `private static final RenderType TRIPWIRE`
- `private static final RenderType END_PORTAL`
- `private static final RenderType END_GATEWAY`
- `public static final RenderType.CompositeRenderType LINES`
- `public static final RenderType.CompositeRenderType LINE_STRIP`
- `private static final Function<Double,RenderType.CompositeRenderType> DEBUG_LINE_STRIP`
- `private static final RenderType.CompositeRenderType DEBUG_FILLED_BOX`
- `private static final RenderType.CompositeRenderType DEBUG_QUADS`
- `private static final RenderType.CompositeRenderType DEBUG_SECTION_QUADS`
- `private static final RenderType.CompositeRenderType GUI`
- `private static final RenderType.CompositeRenderType GUI_OVERLAY`
- `private static final RenderType.CompositeRenderType GUI_TEXT_HIGHLIGHT`
- `private static final RenderType.CompositeRenderType GUI_GHOST_RECIPE_OVERLAY`
- `private static final com.google.common.collect.ImmutableList<RenderType> CHUNK_BUFFER_LAYERS`
- `private final VertexFormat format`
- `private final VertexFormat.Mode mode`
- `private final int bufferSize`
- `private final boolean affectsCrumbling`
- `private final boolean sortOnUpload`
- `private final Optional<RenderType> asOptional`
- `private int chunkLayerId`

### Inherited fields
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Methods
- `public static RenderType solid()`
- `public static RenderType cutoutMipped()`
- `public static RenderType cutout()`
- `private static RenderType.CompositeState translucentState(RenderStateShard.ShaderStateShard p_173208_)`
- `public static RenderType translucent()`
- `private static RenderType.CompositeState translucentMovingBlockState()`
- `public static RenderType translucentMovingBlock()`
- `public static RenderType translucentNoCrumbling()`
- `private static RenderType.CompositeRenderType createArmorCutoutNoCull(String p_297971_,  ResourceLocation p_300992_,  boolean p_297695_)`
- `public static RenderType armorCutoutNoCull(ResourceLocation p_110432_)`
- `public static RenderType createArmorDecalCutoutNoCull(ResourceLocation p_298982_)`
- `public static RenderType entitySolid(ResourceLocation p_110447_)`
- `public static RenderType entityCutout(ResourceLocation p_110453_)`
- `public static RenderType entityCutoutNoCull(ResourceLocation p_110444_,  boolean p_110445_)`
- `public static RenderType entityCutoutNoCull(ResourceLocation p_110459_)`
- `public static RenderType entityCutoutNoCullZOffset(ResourceLocation p_110449_,  boolean p_110450_)`
- `public static RenderType entityCutoutNoCullZOffset(ResourceLocation p_110465_)`
- `public static RenderType itemEntityTranslucentCull(ResourceLocation p_110468_)`
- `public static RenderType entityTranslucentCull(ResourceLocation p_110471_)`
- `public static RenderType entityTranslucent(ResourceLocation p_110455_,  boolean p_110456_)`
- `public static RenderType entityTranslucent(ResourceLocation p_110474_)`
- `public static RenderType entityTranslucentEmissive(ResourceLocation p_234336_,  boolean p_234337_)`
- `public static RenderType entityTranslucentEmissive(ResourceLocation p_234339_)`
- `public static RenderType entitySmoothCutout(ResourceLocation p_110477_)`
- `public static RenderType beaconBeam(ResourceLocation p_110461_,  boolean p_110462_)`
- `public static RenderType entityDecal(ResourceLocation p_110480_)`
- `public static RenderType entityNoOutline(ResourceLocation p_110483_)`
- `public static RenderType entityShadow(ResourceLocation p_110486_)`
- `public static RenderType dragonExplosionAlpha(ResourceLocation p_173236_)`
- `public static RenderType eyes(ResourceLocation p_110489_)`
- `public static RenderType energySwirl(ResourceLocation p_110437_,  float p_110438_,  float p_110439_)`
- `public static RenderType leash()`
- `public static RenderType waterMask()`
- `public static RenderType outline(ResourceLocation p_110492_)`
- `public static RenderType armorGlint()`
- `public static RenderType armorEntityGlint()`
- `public static RenderType glintTranslucent()`
- `public static RenderType glint()`
- `public static RenderType glintDirect()`
- `public static RenderType entityGlint()`
- `public static RenderType entityGlintDirect()`
- `public static RenderType crumbling(ResourceLocation p_110495_)`
- `public static RenderType text(ResourceLocation p_110498_)`
- `public static RenderType textBackground()`
- `public static RenderType textIntensity(ResourceLocation p_173238_)`
- `public static RenderType textPolygonOffset(ResourceLocation p_181445_)`
- `public static RenderType textIntensityPolygonOffset(ResourceLocation p_181447_)`
- `public static RenderType textSeeThrough(ResourceLocation p_110501_)`
- `public static RenderType textBackgroundSeeThrough()`
- `public static RenderType textIntensitySeeThrough(ResourceLocation p_173241_)`
- `public static RenderType lightning()`
- `private static RenderType.CompositeState tripwireState()`
- `public static RenderType tripwire()`
- `public static RenderType endPortal()`
- `public static RenderType endGateway()`
- `public static RenderType lines()`
- `public static RenderType lineStrip()`
- `public static RenderType debugLineStrip(double p_270166_)`
- `public static RenderType debugFilledBox()`
- `public static RenderType debugQuads()`
- `public static RenderType debugSectionQuads()`
- `public static RenderType gui()`
- `public static RenderType guiOverlay()`
- `public static RenderType guiTextHighlight()`
- `public static RenderType guiGhostRecipeOverlay()`
- `static RenderType.CompositeRenderType create(String p_173210_,  VertexFormat p_173211_,  VertexFormat.Mode p_173212_,  int p_173213_,  RenderType.CompositeState p_173214_)`
- `public static RenderType.CompositeRenderType create(String p_173216_,  VertexFormat p_173217_,  VertexFormat.Mode p_173218_,  int p_173219_,  boolean p_173220_,  boolean p_173221_,  RenderType.CompositeState p_173222_)`
- `public void end(BufferBuilder p_277996_,  VertexSorting p_277677_)`
- `public String toString()`
- `public static List<RenderType> chunkBufferLayers()`
- `public int bufferSize()`
- `public VertexFormat format()`
- `public VertexFormat.Mode mode()`
- `public Optional<RenderType> outline()`
- `public boolean isOutline()`
- `public boolean affectsCrumbling()`
- `public boolean canConsolidateConsecutiveGeometry()`
- `public Optional<RenderType> asOptional()`
- `public final int getChunkLayerId()`
  Returns the unique ID of this RenderType for chunk rendering purposes, or -1 if this is not a chunk RenderType.
  - returns: the unique ID of this RenderType for chunk rendering purposes, or -1 if this is not a chunk RenderType

### Inherited methods
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`

## RenderType.CompositeRenderType

*class* `net.minecraft.client.renderer.RenderType.CompositeRenderType`

Enclosing class: RenderType

### Fields
- `static final BiFunction<ResourceLocation,RenderStateShard.CullStateShard,RenderType> OUTLINE`
- `private final RenderType.CompositeState state`
- `private final Optional<RenderType> outline`
- `private final boolean isOutline`

### Inherited fields
- from `net.minecraft.client.renderer.RenderType`: `BIG_BUFFER_SIZE`, `LINE_STRIP`, `LINES`, `MEDIUM_BUFFER_SIZE`, `SMALL_BUFFER_SIZE`, `TRANSIENT_BUFFER_SIZE`
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Methods
- `public Optional<RenderType> outline()`
- `public boolean isOutline()`
- `protected final RenderType.CompositeState state()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.client.renderer.RenderType`: `affectsCrumbling`, `armorCutoutNoCull`, `armorEntityGlint`, `armorGlint`, `asOptional`, `beaconBeam`, `bufferSize`, `canConsolidateConsecutiveGeometry`, `chunkBufferLayers`, `create`, `create`, `createArmorDecalCutoutNoCull`, `crumbling`, `cutout`, `cutoutMipped`, `debugFilledBox`, `debugLineStrip`, `debugQuads`, `debugSectionQuads`, `dragonExplosionAlpha`, `end`, `endGateway`, `endPortal`, `energySwirl`, `entityCutout`, `entityCutoutNoCull`, `entityCutoutNoCull`, `entityCutoutNoCullZOffset`, `entityCutoutNoCullZOffset`, `entityDecal`, `entityGlint`, `entityGlintDirect`, `entityNoOutline`, `entityShadow`, `entitySmoothCutout`, `entitySolid`, `entityTranslucent`, `entityTranslucent`, `entityTranslucentCull`, `entityTranslucentEmissive`, `entityTranslucentEmissive`, `eyes`, `format`, `getChunkLayerId`, `glint`, `glintDirect`, `glintTranslucent`, `gui`, `guiGhostRecipeOverlay`, `guiOverlay`, `guiTextHighlight`, `itemEntityTranslucentCull`, `leash`, `lightning`, `lines`, `lineStrip`, `mode`, `outline`, `solid`, `text`, `textBackground`, `textBackgroundSeeThrough`, `textIntensity`, `textIntensityPolygonOffset`, `textIntensitySeeThrough`, `textPolygonOffset`, `textSeeThrough`, `translucent`, `translucentMovingBlock`, `translucentNoCrumbling`, `tripwire`, `waterMask`
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`

## RenderType.CompositeState

*class* `net.minecraft.client.renderer.RenderType.CompositeState`

Enclosing class: RenderType

### Fields
- `final RenderStateShard.EmptyTextureStateShard textureState`
- `private final RenderStateShard.ShaderStateShard shaderState`
- `private final RenderStateShard.TransparencyStateShard transparencyState`
- `private final RenderStateShard.DepthTestStateShard depthTestState`
- `final RenderStateShard.CullStateShard cullState`
- `private final RenderStateShard.LightmapStateShard lightmapState`
- `private final RenderStateShard.OverlayStateShard overlayState`
- `private final RenderStateShard.LayeringStateShard layeringState`
- `private final RenderStateShard.OutputStateShard outputState`
- `private final RenderStateShard.TexturingStateShard texturingState`
- `private final RenderStateShard.WriteMaskStateShard writeMaskState`
- `private final RenderStateShard.LineStateShard lineState`
- `private final RenderStateShard.ColorLogicStateShard colorLogicState`
- `final RenderType.OutlineProperty outlineProperty`
- `final com.google.common.collect.ImmutableList<RenderStateShard> states`

### Methods
- `public String toString()`
- `public static RenderType.CompositeState.CompositeStateBuilder builder()`

## RenderType.CompositeState.CompositeStateBuilder

*class* `net.minecraft.client.renderer.RenderType.CompositeState.CompositeStateBuilder`

Enclosing class: RenderType.CompositeState

### Fields
- `private RenderStateShard.EmptyTextureStateShard textureState`
- `private RenderStateShard.ShaderStateShard shaderState`
- `private RenderStateShard.TransparencyStateShard transparencyState`
- `private RenderStateShard.DepthTestStateShard depthTestState`
- `private RenderStateShard.CullStateShard cullState`
- `private RenderStateShard.LightmapStateShard lightmapState`
- `private RenderStateShard.OverlayStateShard overlayState`
- `private RenderStateShard.LayeringStateShard layeringState`
- `private RenderStateShard.OutputStateShard outputState`
- `private RenderStateShard.TexturingStateShard texturingState`
- `private RenderStateShard.WriteMaskStateShard writeMaskState`
- `private RenderStateShard.LineStateShard lineState`
- `private RenderStateShard.ColorLogicStateShard colorLogicState`

### Methods
- `public RenderType.CompositeState.CompositeStateBuilder setTextureState(RenderStateShard.EmptyTextureStateShard p_173291_)`
- `public RenderType.CompositeState.CompositeStateBuilder setShaderState(RenderStateShard.ShaderStateShard p_173293_)`
- `public RenderType.CompositeState.CompositeStateBuilder setTransparencyState(RenderStateShard.TransparencyStateShard p_110686_)`
- `public RenderType.CompositeState.CompositeStateBuilder setDepthTestState(RenderStateShard.DepthTestStateShard p_110664_)`
- `public RenderType.CompositeState.CompositeStateBuilder setCullState(RenderStateShard.CullStateShard p_110662_)`
- `public RenderType.CompositeState.CompositeStateBuilder setLightmapState(RenderStateShard.LightmapStateShard p_110672_)`
- `public RenderType.CompositeState.CompositeStateBuilder setOverlayState(RenderStateShard.OverlayStateShard p_110678_)`
- `public RenderType.CompositeState.CompositeStateBuilder setLayeringState(RenderStateShard.LayeringStateShard p_110670_)`
- `public RenderType.CompositeState.CompositeStateBuilder setOutputState(RenderStateShard.OutputStateShard p_110676_)`
- `public RenderType.CompositeState.CompositeStateBuilder setTexturingState(RenderStateShard.TexturingStateShard p_110684_)`
- `public RenderType.CompositeState.CompositeStateBuilder setWriteMaskState(RenderStateShard.WriteMaskStateShard p_110688_)`
- `public RenderType.CompositeState.CompositeStateBuilder setLineState(RenderStateShard.LineStateShard p_110674_)`
- `public RenderType.CompositeState.CompositeStateBuilder setColorLogicState(RenderStateShard.ColorLogicStateShard p_286236_)`
- `public RenderType.CompositeState createCompositeState(boolean p_110692_)`
- `public RenderType.CompositeState createCompositeState(RenderType.OutlineProperty p_110690_)`

## RunningTrimmedMean

*class* `net.minecraft.client.renderer.RunningTrimmedMean`

### Fields
- `private final long[] values`
- `private int count`
- `private int cursor`

### Methods
- `public long registerValueAndGetMean(long p_110713_)`

## ScreenEffectRenderer

*class* `net.minecraft.client.renderer.ScreenEffectRenderer`

### Fields
- `private static final ResourceLocation UNDERWATER_LOCATION`

### Methods
- `public static void renderScreenEffect(Minecraft p_110719_,  PoseStack p_110720_)`
- `@Nullable private static BlockState getViewBlockingState(Player p_110717_)`
- `@Nullable private static org.apache.commons.lang3.tuple.Pair<BlockState,BlockPos> getOverlayBlock(Player p_110717_)`
- `private static void renderTex(TextureAtlasSprite p_173297_,  PoseStack p_173298_)`
- `private static void renderWater(Minecraft p_110726_,  PoseStack p_110727_)`
- `public static void renderFluid(Minecraft p_110726_,  PoseStack p_110727_,  ResourceLocation texture)`
- `private static void renderFire(Minecraft p_110729_,  PoseStack p_110730_)`

## SectionBufferBuilderPack

*class* `net.minecraft.client.renderer.SectionBufferBuilderPack`

### Fields
- `private final Map<RenderType,BufferBuilder> builders`

### Methods
- `public BufferBuilder builder(RenderType p_299415_)`
- `public void clearAll()`
- `public void discardAll()`

## SectionOcclusionGraph

*class* `net.minecraft.client.renderer.SectionOcclusionGraph`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Direction[] DIRECTIONS`
- `private static final int MINIMUM_ADVANCED_CULLING_DISTANCE` (= 60)
- `private static final double CEILED_SECTION_DIAGONAL`
- `private boolean needsFullUpdate`
- `@Nullable private Future<?> fullUpdateTask`
- `@Nullable private ViewArea viewArea`
- `private final AtomicReference<SectionOcclusionGraph.GraphState> currentGraph`
- `private final AtomicReference<SectionOcclusionGraph.GraphEvents> nextGraphEvents`
- `private final AtomicBoolean needsFrustumUpdate`

### Methods
- `public void waitAndReset(@Nullable  ViewArea p_298923_)`
- `public void invalidate()`
- `public void addSectionsInFrustum(Frustum p_299761_,  List<SectionRenderDispatcher.RenderSection> p_301346_)`
- `public boolean consumeFrustumUpdate()`
- `public void onChunkLoaded(ChunkPos p_299612_)`
- `public void onSectionCompiled(SectionRenderDispatcher.RenderSection p_301377_)`
- `public void update(boolean p_301275_,  Camera p_298972_,  Frustum p_298939_,  List<SectionRenderDispatcher.RenderSection> p_300432_)`
- `private void scheduleFullUpdate(boolean p_298569_,  Camera p_299582_,  Vec3 p_297830_)`
- `private void runPartialUpdate(boolean p_298388_,  Frustum p_299940_,  List<SectionRenderDispatcher.RenderSection> p_297967_,  Vec3 p_299094_)`
- `private void queueSectionsWithNewNeighbors(SectionOcclusionGraph.GraphState p_298801_)`
- `private void addNeighbors(SectionOcclusionGraph.GraphEvents p_300825_,  ChunkPos p_297758_)`
- `private void initializeQueueForFullUpdate(Camera p_298889_,  Queue<SectionOcclusionGraph.Node> p_297605_)`
- `private void runUpdates(SectionOcclusionGraph.GraphStorage p_299200_,  Vec3 p_300018_,  Queue<SectionOcclusionGraph.Node> p_300570_,  boolean p_300892_,  Consumer<SectionRenderDispatcher.RenderSection> p_298647_)`
- `private boolean isInViewDistance(BlockPos p_298566_,  BlockPos p_298230_)`
- `@Nullable private SectionRenderDispatcher.RenderSection getRelativeFrom(BlockPos p_298318_,  SectionRenderDispatcher.RenderSection p_299737_,  Direction p_301139_)`
- `@Nullable protected SectionOcclusionGraph.Node getNode(SectionRenderDispatcher.RenderSection p_299335_)`

## SectionOcclusionGraph.GraphEvents

*record* `net.minecraft.client.renderer.SectionOcclusionGraph.GraphEvents`

Enclosing class: SectionOcclusionGraph

### Fields
- `private final it.unimi.dsi.fastutil.longs.LongSet chunksWhichReceivedNeighbors`
  The field for the chunksWhichReceivedNeighbors record component.
- `private final BlockingQueue<SectionRenderDispatcher.RenderSection> sectionsToPropagateFrom`
  The field for the sectionsToPropagateFrom record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public it.unimi.dsi.fastutil.longs.LongSet chunksWhichReceivedNeighbors()`
  Returns the value of the chunksWhichReceivedNeighbors record component.
  - returns: the value of the chunksWhichReceivedNeighbors record component
- `public BlockingQueue<SectionRenderDispatcher.RenderSection> sectionsToPropagateFrom()`
  Returns the value of the sectionsToPropagateFrom record component.
  - returns: the value of the sectionsToPropagateFrom record component

## SectionOcclusionGraph.GraphState

*record* `net.minecraft.client.renderer.SectionOcclusionGraph.GraphState`

Enclosing class: SectionOcclusionGraph

### Fields
- `private final SectionOcclusionGraph.GraphStorage storage`
  The field for the storage record component.
- `private final SectionOcclusionGraph.GraphEvents events`
  The field for the events record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public SectionOcclusionGraph.GraphStorage storage()`
  Returns the value of the storage record component.
  - returns: the value of the storage record component
- `public SectionOcclusionGraph.GraphEvents events()`
  Returns the value of the events record component.
  - returns: the value of the events record component

## SectionOcclusionGraph.GraphStorage

*class* `net.minecraft.client.renderer.SectionOcclusionGraph.GraphStorage`

Enclosing class: SectionOcclusionGraph

### Fields
- `public final SectionOcclusionGraph.SectionToNodeMap sectionToNodeMap`
- `public final LinkedHashSet<SectionOcclusionGraph.Node> renderSections`
- `public final it.unimi.dsi.fastutil.longs.Long2ObjectMap<List<SectionRenderDispatcher.RenderSection>> chunksWaitingForNeighbors`

## SectionOcclusionGraph.Node

*class* `net.minecraft.client.renderer.SectionOcclusionGraph.Node`

Enclosing class: SectionOcclusionGraph

### Fields
- `protected final SectionRenderDispatcher.RenderSection section`
- `private byte sourceDirections`
- `byte directions`
- `protected final int step`

### Methods
- `void setDirections(byte p_298984_,  Direction p_300480_)`
- `boolean hasDirection(Direction p_299145_)`
- `void addSourceDirection(Direction p_299877_)`
- `protected boolean hasSourceDirection(int p_301075_)`
- `boolean hasSourceDirections()`
- `public int hashCode()`
- `public boolean equals(Object p_300561_)`

## SectionOcclusionGraph.SectionToNodeMap

*class* `net.minecraft.client.renderer.SectionOcclusionGraph.SectionToNodeMap`

Enclosing class: SectionOcclusionGraph

### Fields
- `private final SectionOcclusionGraph.Node[] nodes`

### Methods
- `public void put(SectionRenderDispatcher.RenderSection p_297513_,  SectionOcclusionGraph.Node p_298532_)`
- `@Nullable public SectionOcclusionGraph.Node get(SectionRenderDispatcher.RenderSection p_297749_)`

## ShaderInstance

*class* `net.minecraft.client.renderer.ShaderInstance`

### Fields
- `public static final String SHADER_PATH` (= "shaders")
- `private static final String SHADER_CORE_PATH` (= "shaders/core/")
- `private static final String SHADER_INCLUDE_PATH` (= "shaders/include/")
- `static final org.slf4j.Logger LOGGER`
- `private static final AbstractUniform DUMMY_UNIFORM`
- `private static final boolean ALWAYS_REAPPLY` (= true)
- `private static ShaderInstance lastAppliedShader`
- `private static int lastProgramId`
- `private final Map<String,Object> samplerMap`
- `private final List<String> samplerNames`
- `private final List<Integer> samplerLocations`
- `private final List<Uniform> uniforms`
- `private final List<Integer> uniformLocations`
- `private final Map<String,Uniform> uniformMap`
- `private final int programId`
- `private final String name`
- `private boolean dirty`
- `private final BlendMode blend`
- `private final List<Integer> attributes`
- `private final List<String> attributeNames`
- `private final Program vertexProgram`
- `private final Program fragmentProgram`
- `private final VertexFormat vertexFormat`
- `@Nullable public final Uniform MODEL_VIEW_MATRIX`
- `@Nullable public final Uniform PROJECTION_MATRIX`
- `@Nullable public final Uniform INVERSE_VIEW_ROTATION_MATRIX`
- `@Nullable public final Uniform TEXTURE_MATRIX`
- `@Nullable public final Uniform SCREEN_SIZE`
- `@Nullable public final Uniform COLOR_MODULATOR`
- `@Nullable public final Uniform LIGHT0_DIRECTION`
- `@Nullable public final Uniform LIGHT1_DIRECTION`
- `@Nullable public final Uniform GLINT_ALPHA`
- `@Nullable public final Uniform FOG_START`
- `@Nullable public final Uniform FOG_END`
- `@Nullable public final Uniform FOG_COLOR`
- `@Nullable public final Uniform FOG_SHAPE`
- `@Nullable public final Uniform LINE_WIDTH`
- `@Nullable public final Uniform GAME_TIME`
- `@Nullable public final Uniform CHUNK_OFFSET`

### Methods
- `private static Program getOrCreate(ResourceProvider p_173341_,  Program.Type p_173342_,  String p_173343_)  throws IOException`
  - throws: IOException
- `public static BlendMode parseBlendNode(com.google.gson.JsonObject p_173347_)`
- `public void close()`
- `public void clear()`
- `public void apply()`
- `public void markDirty()`
- `@Nullable public Uniform getUniform(String p_173349_)`
- `public AbstractUniform safeGetUniform(String p_173357_)`
- `private void updateLocations()`
- `private void parseSamplerNode(com.google.gson.JsonElement p_173345_)`
- `public void setSampler(String p_173351_,  Object p_173352_)`
- `private void parseUniformNode(com.google.gson.JsonElement p_173355_)  throws ChainedJsonException`
  - throws: ChainedJsonException
- `public Program getVertexProgram()`
- `public Program getFragmentProgram()`
- `public void attachToProgram()`
- `public VertexFormat getVertexFormat()`
- `public String getName()`
- `public int getId()`

## Sheets

*class* `net.minecraft.client.renderer.Sheets`

### Fields
- `public static final ResourceLocation SHULKER_SHEET`
- `public static final ResourceLocation BED_SHEET`
- `public static final ResourceLocation BANNER_SHEET`
- `public static final ResourceLocation SHIELD_SHEET`
- `public static final ResourceLocation SIGN_SHEET`
- `public static final ResourceLocation CHEST_SHEET`
- `public static final ResourceLocation ARMOR_TRIMS_SHEET`
- `public static final ResourceLocation DECORATED_POT_SHEET`
- `private static final RenderType SHULKER_BOX_SHEET_TYPE`
- `private static final RenderType BED_SHEET_TYPE`
- `private static final RenderType BANNER_SHEET_TYPE`
- `private static final RenderType SHIELD_SHEET_TYPE`
- `private static final RenderType SIGN_SHEET_TYPE`
- `private static final RenderType CHEST_SHEET_TYPE`
- `private static final RenderType ARMOR_TRIMS_SHEET_TYPE`
- `private static final RenderType ARMOR_TRIMS_DECAL_SHEET_TYPE`
- `private static final RenderType SOLID_BLOCK_SHEET`
- `private static final RenderType CUTOUT_BLOCK_SHEET`
- `private static final RenderType TRANSLUCENT_ITEM_CULL_BLOCK_SHEET`
- `private static final RenderType TRANSLUCENT_CULL_BLOCK_SHEET`
- `public static final Material DEFAULT_SHULKER_TEXTURE_LOCATION`
- `public static final List<Material> SHULKER_TEXTURE_LOCATION`
- `public static final Map<WoodType,Material> SIGN_MATERIALS`
- `public static final Map<WoodType,Material> HANGING_SIGN_MATERIALS`
- `public static final Map<ResourceKey<BannerPattern>,Material> BANNER_MATERIALS`
- `public static final Map<ResourceKey<BannerPattern>,Material> SHIELD_MATERIALS`
- `public static final Map<ResourceKey<String>,Material> DECORATED_POT_MATERIALS`
- `public static final Material[] BED_TEXTURES`
- `public static final Material CHEST_TRAP_LOCATION`
- `public static final Material CHEST_TRAP_LOCATION_LEFT`
- `public static final Material CHEST_TRAP_LOCATION_RIGHT`
- `public static final Material CHEST_XMAS_LOCATION`
- `public static final Material CHEST_XMAS_LOCATION_LEFT`
- `public static final Material CHEST_XMAS_LOCATION_RIGHT`
- `public static final Material CHEST_LOCATION`
- `public static final Material CHEST_LOCATION_LEFT`
- `public static final Material CHEST_LOCATION_RIGHT`
- `public static final Material ENDER_CHEST_LOCATION`

### Methods
- `public static RenderType bannerSheet()`
- `public static RenderType shieldSheet()`
- `public static RenderType bedSheet()`
- `public static RenderType shulkerBoxSheet()`
- `public static RenderType signSheet()`
- `public static RenderType hangingSignSheet()`
- `public static RenderType chestSheet()`
- `public static RenderType armorTrimsSheet(boolean p_298447_)`
- `public static RenderType solidBlockSheet()`
- `public static RenderType cutoutBlockSheet()`
- `public static RenderType translucentItemSheet()`
- `public static RenderType translucentCullBlockSheet()`
- `public static void getAllMaterials(Consumer<Material> p_110781_)`
- `private static Material createSignMaterial(WoodType p_173386_)`
- `private static Material createHangingSignMaterial(WoodType p_251735_)`
- `public static Material getSignMaterial(WoodType p_173382_)`
- `public static Material getHangingSignMaterial(WoodType p_250958_)`
- `private static Material createBannerMaterial(ResourceKey<BannerPattern> p_234352_)`
- `public static Material getBannerMaterial(ResourceKey<BannerPattern> p_234348_)`
- `private static Material createShieldMaterial(ResourceKey<BannerPattern> p_234354_)`
- `public static Material getShieldMaterial(ResourceKey<BannerPattern> p_234350_)`
- `private static Material chestMaterial(String p_110779_)`
- `private static Material createDecoratedPotMaterial(ResourceKey<String> p_272805_)`
- `@Nullable public static Material getDecoratedPotMaterial(@Nullable  ResourceKey<String> p_273567_)`
- `public static Material chooseMaterial(BlockEntity p_110768_,  ChestType p_110769_,  boolean p_110770_)`
- `private static Material chooseMaterial(ChestType p_110772_,  Material p_110773_,  Material p_110774_,  Material p_110775_)`
- `public static void addWoodType(WoodType woodType)`
  Not threadsafe. Enqueue it in client setup.

## SpriteCoordinateExpander

*class* `net.minecraft.client.renderer.SpriteCoordinateExpander`

### Fields
- `private final VertexConsumer delegate`
- `private final TextureAtlasSprite sprite`

### Methods
- `public VertexConsumer vertex(double p_110801_,  double p_110802_,  double p_110803_)`
- `public VertexConsumer color(int p_110826_,  int p_110827_,  int p_110828_,  int p_110829_)`
- `public VertexConsumer uv(float p_110805_,  float p_110806_)`
- `public VertexConsumer overlayCoords(int p_110823_,  int p_110824_)`
- `public VertexConsumer uv2(int p_110835_,  int p_110836_)`
- `public VertexConsumer normal(float p_110831_,  float p_110832_,  float p_110833_)`
- `public void endVertex()`
- `public void defaultColor(int p_173392_,  int p_173393_,  int p_173394_,  int p_173395_)`
- `public void unsetDefaultColor()`
- `public void vertex(float p_110808_,  float p_110809_,  float p_110810_,  float p_110811_,  float p_110812_,  float p_110813_,  float p_110814_,  float p_110815_,  float p_110816_,  int p_110817_,  int p_110818_,  float p_110819_,  float p_110820_,  float p_110821_)`

### Inherited methods
- from `net.minecraftforge.client.extensions.IForgeVertexConsumer`: `applyBakedLighting`, `applyBakedNormals`, `misc`, `putBulkData`
- from `com.mojang.blaze3d.vertex.VertexConsumer`: `color`, `color`, `normal`, `overlayCoords`, `putBulkData`, `putBulkData`, `putBulkData`, `uv2`, `vertex`

## ViewArea

*class* `net.minecraft.client.renderer.ViewArea`

### Fields
- `protected final LevelRenderer levelRenderer`
- `protected final Level level`
- `protected int sectionGridSizeY`
- `protected int sectionGridSizeX`
- `protected int sectionGridSizeZ`
- `private int viewDistance`
- `public SectionRenderDispatcher.RenderSection[] sections`

### Methods
- `protected void createSections(SectionRenderDispatcher p_299921_)`
- `public void releaseAllBuffers()`
- `private int getSectionIndex(int p_297902_,  int p_298060_,  int p_297930_)`
- `protected void setViewDistance(int p_110854_)`
- `public int getViewDistance()`
- `public LevelHeightAccessor getLevelHeightAccessor()`
- `public void repositionCamera(double p_110851_,  double p_110852_)`
- `public void setDirty(int p_110860_,  int p_110861_,  int p_110862_,  boolean p_110863_)`
- `@Nullable protected SectionRenderDispatcher.RenderSection getRenderSectionAt(BlockPos p_299271_)`

## VirtualScreen

*class* `net.minecraft.client.renderer.VirtualScreen`

### Fields
- `private final Minecraft minecraft`
- `private final ScreenManager screenManager`

### Methods
- `public Window newWindow(DisplayData p_110873_,  @Nullable  String p_110874_,  String p_110875_)`
- `public void close()`
