# net.minecraftforge.client

- [ChunkRenderTypeSet](#chunkrendertypeset)
- [ChunkRenderTypeSet.All](#chunkrendertypeset.all)
- [ChunkRenderTypeSet.IteratorImpl](#chunkrendertypeset.iteratorimpl)
- [ChunkRenderTypeSet.None](#chunkrendertypeset.none)
- [Class ForgeRenderTypes](#class-forgerendertypes)
- [ClientCommandHandler](#clientcommandhandler)
- [ClientCommandSourceStack](#clientcommandsourcestack)
- [ClientForgeMod](#clientforgemod)
- [ColorResolverManager](#colorresolvermanager)
- [ConfigScreenHandler](#configscreenhandler)
- [ConfigScreenHandler.ConfigScreenFactory](#configscreenhandler.configscreenfactory)
- [CreativeModeTabSearchRegistry](#creativemodetabsearchregistry)
- [DimensionSpecialEffectsManager](#dimensionspecialeffectsmanager)
- [EntitySpectatorShaderManager](#entityspectatorshadermanager)
- [ExtendedServerListData](#extendedserverlistdata)
- [FireworkShapeFactoryRegistry](#fireworkshapefactoryregistry)
- [FireworkShapeFactoryRegistry.Factory](#fireworkshapefactoryregistry.factory)
- [ForgeHooksClient](#forgehooksclient)
- [ForgeHooksClient.ClientEvents](#forgehooksclient.clientevents)
- [ForgeRenderTypes.CustomizableTextureState](#forgerendertypes.customizabletexturestate)
- [ForgeRenderTypes.Internal](#forgerendertypes.internal)
- [IArmPoseTransformer](#iarmposetransformer)
- [IItemDecorator](#iitemdecorator)
- [ItemDecoratorHandler](#itemdecoratorhandler)
- [NamedRenderTypeManager](#namedrendertypemanager)
- [PresetEditorManager](#preseteditormanager)
- [RecipeBookManager](#recipebookmanager)
- [RenderTypeGroup](#rendertypegroup)
- [RenderTypeHelper](#rendertypehelper)
- [StencilManager](#stencilmanager)
## ChunkRenderTypeSet

*class* `net.minecraftforge.client.ChunkRenderTypeSet`

An immutable ordered set (not implementing Set) of chunk render types.

 Considerably speeds up lookups and merges of sets of chunk render types.
 Users should cache their instances of this class whenever possible, as instantiating it is cheap, but not free.

### Fields
- `private static final List<RenderType> CHUNK_RENDER_TYPES_LIST`
- `private static final RenderType[] CHUNK_RENDER_TYPES`
- `private static final ChunkRenderTypeSet NONE`
- `private static final ChunkRenderTypeSet ALL`
- `private final BitSet bits`

### Methods
- `public static ChunkRenderTypeSet none()`
- `public static ChunkRenderTypeSet all()`
- `public static ChunkRenderTypeSet of(RenderType... renderTypes)`
- `public static ChunkRenderTypeSet of(Collection<RenderType> renderTypes)`
- `private static ChunkRenderTypeSet of(Iterable<RenderType> renderTypes)`
- `public static ChunkRenderTypeSet union(ChunkRenderTypeSet... sets)`
- `public static ChunkRenderTypeSet union(Collection<ChunkRenderTypeSet> sets)`
- `public static ChunkRenderTypeSet union(Iterable<ChunkRenderTypeSet> sets)`
- `public static ChunkRenderTypeSet intersection(ChunkRenderTypeSet... sets)`
- `public static ChunkRenderTypeSet intersection(Collection<ChunkRenderTypeSet> sets)`
- `public static ChunkRenderTypeSet intersection(Iterable<ChunkRenderTypeSet> sets)`
- `public boolean isEmpty()`
- `public boolean contains(RenderType renderType)`
- `@NotNull public @NotNull Iterator<RenderType> iterator()`
- `public List<RenderType> asList()`

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `spliterator`

## ChunkRenderTypeSet.All

*class* `net.minecraftforge.client.ChunkRenderTypeSet.All`

Enclosing class: ChunkRenderTypeSet

### Methods
- `public boolean isEmpty()`
- `public boolean contains(RenderType renderType)`
- `@NotNull public @NotNull Iterator<RenderType> iterator()`
- `public List<RenderType> asList()`

### Inherited methods
- from `net.minecraftforge.client.ChunkRenderTypeSet`: `all`, `intersection`, `intersection`, `intersection`, `none`, `of`, `of`, `union`, `union`, `union`
- from `java.lang.Iterable`: `forEach`, `spliterator`

## ChunkRenderTypeSet.IteratorImpl

*class* `net.minecraftforge.client.ChunkRenderTypeSet.IteratorImpl`

Enclosing class: ChunkRenderTypeSet

### Fields
- `private int index`

### Methods
- `public boolean hasNext()`
- `public RenderType next()`

### Inherited methods
- from `java.util.Iterator`: `forEachRemaining`, `remove`

## ChunkRenderTypeSet.None

*class* `net.minecraftforge.client.ChunkRenderTypeSet.None`

Enclosing class: ChunkRenderTypeSet

### Methods
- `public boolean isEmpty()`
- `public boolean contains(RenderType renderType)`
- `@NotNull public @NotNull Iterator<RenderType> iterator()`
- `public List<RenderType> asList()`

### Inherited methods
- from `net.minecraftforge.client.ChunkRenderTypeSet`: `all`, `intersection`, `intersection`, `intersection`, `none`, `of`, `of`, `union`, `union`, `union`
- from `java.lang.Iterable`: `forEach`, `spliterator`

## Class ForgeRenderTypes

*enum* `net.minecraftforge.client.Class ForgeRenderTypes`

### Fields
- `public static boolean enableTextTextureLinearFiltering`
- `private final NonNullSupplier<RenderType> renderTypeSupplier`

### Methods
- `public static ForgeRenderTypes[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ForgeRenderTypes valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static RenderType getItemLayeredSolid(ResourceLocation textureLocation)`
  - returns: A RenderType fit for multi-layer solid item rendering.
- `public static RenderType getItemLayeredCutout(ResourceLocation textureLocation)`
  - returns: A RenderType fit for multi-layer cutout item item rendering.
- `public static RenderType getItemLayeredCutoutMipped(ResourceLocation textureLocation)`
  - returns: A RenderType fit for multi-layer cutout-mipped item rendering.
- `public static RenderType getItemLayeredTranslucent(ResourceLocation textureLocation)`
  - returns: A RenderType fit for multi-layer translucent item rendering.
- `public static RenderType getUnsortedTranslucent(ResourceLocation textureLocation)`
  - returns: A RenderType fit for translucent item/entity rendering, but with depth sorting disabled.
- `public static RenderType getUnlitTranslucent(ResourceLocation textureLocation)`
  - returns: A RenderType fit for translucent item/entity rendering, but with diffuse lighting disabled
 so that fullbright quads look correct.
- `public static RenderType getUnlitTranslucent(ResourceLocation textureLocation,  boolean sortingEnabled)`
  - param: sortingEnabled - If false, depth sorting will not be performed.
  - returns: A RenderType fit for translucent item/entity rendering, but with diffuse lighting disabled
 so that fullbright quads look correct.
- `public static RenderType getEntityCutoutMipped(ResourceLocation textureLocation)`
  - returns: Same as RenderType.entityCutout(ResourceLocation), but with mipmapping enabled.
- `public static RenderType getText(ResourceLocation locationIn)`
  - returns: Replacement of RenderType.text(ResourceLocation), but with optional linear texture filtering.
- `public static RenderType getTextIntensity(ResourceLocation locationIn)`
  - returns: Replacement of RenderType.textIntensity(ResourceLocation), but with optional linear texture filtering.
- `public static RenderType getTextPolygonOffset(ResourceLocation locationIn)`
  - returns: Replacement of RenderType.textPolygonOffset(ResourceLocation), but with optional linear texture filtering.
- `public static RenderType getTextIntensityPolygonOffset(ResourceLocation locationIn)`
  - returns: Replacement of RenderType.textIntensityPolygonOffset(ResourceLocation), but with optional linear texture filtering.
- `public static RenderType getTextSeeThrough(ResourceLocation locationIn)`
  - returns: Replacement of RenderType.textSeeThrough(ResourceLocation), but with optional linear texture filtering.
- `public static RenderType getTextIntensitySeeThrough(ResourceLocation locationIn)`
  - returns: Replacement of RenderType.textIntensitySeeThrough(ResourceLocation), but with optional linear texture filtering.
- `public static RenderType getTranslucentParticlesTarget(ResourceLocation locationIn)`
  - returns: A variation of RenderType.translucent() that uses OutputStateShard#PARTICLES_TARGET to allow fabulous transparency sorting when using RenderLevelStageEvent
- `public RenderType get()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ClientCommandHandler

*class* `net.minecraftforge.client.ClientCommandHandler`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static com.mojang.brigadier.CommandDispatcher<CommandSourceStack> commands`

### Methods
- `public static void init()`
- `private static void handleClientPlayerLogin(ClientPlayerNetworkEvent.LoggingIn event)`
- `@Internal public static com.mojang.brigadier.CommandDispatcher<SharedSuggestionProvider> mergeServerCommands(com.mojang.brigadier.CommandDispatcher<SharedSuggestionProvider> serverCommands,  CommandBuildContext buildContext)`
- `public static com.mojang.brigadier.CommandDispatcher<CommandSourceStack> getDispatcher()`
  - returns: The command dispatcher for client side commands
- `public static ClientCommandSourceStack getSource()`
  - returns: A ClientCommandSourceStack for the player in the current client
- `private static <S> void copy(com.mojang.brigadier.tree.CommandNode<S> sourceNode,  com.mojang.brigadier.tree.CommandNode<S> resultNode)`
  Creates a deep copy of the sourceNode while keeping the redirects referring to the old command tree
  - param: sourceNode - the original
  - param: resultNode - the result
- `public static boolean runCommand(String command)`
  Always try to execute the cached parsing of a typed command as a clientside command. Requires that the execute field of the commands to be set to send to server so that they aren't
   treated as client command's that do nothing.
  
   Commands.performCommand(ParseResults, String) for reference
  - param: command - the full command to execute, no preceding slash
  - returns: false leaves the message to be sent to the server, while true means it should be caught before LocalPlayer#sendCommand

## ClientCommandSourceStack

*class* `net.minecraftforge.client.ClientCommandSourceStack`

overrides for CommandSourceStack so that the methods will run successfully client side

### Inherited fields
- from `net.minecraft.commands.CommandSourceStack`: `ERROR_NOT_ENTITY`, `ERROR_NOT_PLAYER`, `source`

### Methods
- `public void sendSuccess(Supplier<Component> message,  boolean sendToAdmins)`
  Sends a success message without attempting to get the server side list of admins
- `public Collection<String> getAllTeams()`
  Returns the list of teams from the client side.
  - returns: the list of teams from the client side
- `public Collection<String> getOnlinePlayerNames()`
  Returns the list of online player names from the client side.
  - returns: the list of online player names from the client side
- `public Stream<ResourceLocation> getRecipeNames()`
  Returns a Stream of recipe ids that are available on the client.
  - returns: a Stream of recipe ids that are available on the client
- `public Set<ResourceKey<Level>> levels()`
  Returns a set of ResourceKey for levels from the client side.
  - returns: a set of ResourceKey for levels from the client side
- `public RegistryAccess registryAccess()`
  Returns the RegistryAccess from the client side.
  - returns: the RegistryAccess from the client side
- `public Scoreboard getScoreboard()`
  Returns the scoreboard from the client side.
  - returns: the scoreboard from the client side
- `public AdvancementHolder getAdvancement(ResourceLocation id)`
  Returns the advancement from the id from the client side where the advancement needs to be visible to the player.
  - returns: the advancement from the id from the client side where the advancement needs to be visible to the player
- `public RecipeManager getRecipeManager()`
  Returns the RecipeManager from the client side.
  - returns: the RecipeManager from the client side
- `public Level getUnsidedLevel()`
  Returns the level from the client side.
  - returns: the level from the client side
- `public MinecraftServer getServer()`
  - throws: UnsupportedOperationException - because the server isn't available on the client
- `public ServerLevel getLevel()`
  - throws: UnsupportedOperationException - because the server side level isn't available on the client side

### Inherited methods
- from `net.minecraft.commands.CommandSourceStack`: `customSuggestion`, `enabledFeatures`, `facing`, `facing`, `getAnchor`, `getAvailableSounds`, `getChatMessageChainer`, `getDisplayName`, `getEntity`, `getEntityOrException`, `getPlayer`, `getPlayerOrException`, `getPosition`, `getReturnValueConsumer`, `getRotation`, `getSigningContext`, `getTextName`, `hasPermission`, `isPlayer`, `onCommandComplete`, `sendChatMessage`, `sendFailure`, `sendSystemMessage`, `shouldFilterMessageTo`, `suggestRegistryElements`, `withAnchor`, `withCallback`, `withCallback`, `withEntity`, `withLevel`, `withMaximumPermission`, `withPermission`, `withPosition`, `withReturnValueConsumer`, `withRotation`, `withSigningContext`, `withSource`, `withSuppressedOutput`
- from `net.minecraft.commands.SharedSuggestionProvider`: `getAbsoluteCoordinates`, `getCustomTabSugggestions`, `getRelevantCoordinates`, `getSelectedEntities`, `suggestRegistryElements`

## ClientForgeMod

*class* `net.minecraftforge.client.ClientForgeMod`

### Methods
- `public static void onRegisterGeometryLoaders(ModelEvent.RegisterGeometryLoaders event)`
- `public static void onRegisterReloadListeners(RegisterClientReloadListenersEvent event)`
- `public static void onRegisterNamedRenderTypes(RegisterNamedRenderTypesEvent event)`

## ColorResolverManager

*class* `net.minecraftforge.client.ColorResolverManager`

Manager for custom ColorResolver instances, collected via RegisterColorHandlersEvent.ColorResolvers.

### Fields
- `private static com.google.common.collect.ImmutableList<ColorResolver> colorResolvers`

### Methods
- `@Internal public static void init()`
- `public static void registerBlockTintCaches(ClientLevel level,  Map<ColorResolver,BlockTintCache> target)`
  Register a BlockTintCache for every registered ColorResolver into the given target map.
  - param: level - the level to use
  - param: target - the map to populate

## ConfigScreenHandler

*class* `net.minecraftforge.client.ConfigScreenHandler`

### Methods
- `public static Optional<BiFunction<Minecraft,Screen,Screen>> getScreenFactoryFor(net.minecraftforge.forgespi.language.IModInfo selectedMod)`

## ConfigScreenHandler.ConfigScreenFactory

*record* `net.minecraftforge.client.ConfigScreenHandler.ConfigScreenFactory`

Enclosing class: ConfigScreenHandler

### Fields
- `private final BiFunction<Minecraft,Screen,Screen> screenFunction`
  The field for the screenFunction record component.

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
- `public BiFunction<Minecraft,Screen,Screen> screenFunction()`
  Returns the value of the screenFunction record component.
  - returns: the value of the screenFunction record component

## CreativeModeTabSearchRegistry

*class* `net.minecraftforge.client.CreativeModeTabSearchRegistry`

### Fields
- `private static final Map<CreativeModeTab,SearchRegistry.Key<ItemStack>> NAME_SEARCH_KEYS`
- `private static final Map<CreativeModeTab,SearchRegistry.Key<ItemStack>> TAG_SEARCH_KEYS`

### Methods
- `public static Map<CreativeModeTab,SearchRegistry.Key<ItemStack>> getNameSearchKeys()`
- `public static Map<CreativeModeTab,SearchRegistry.Key<ItemStack>> getTagSearchKeys()`
- `@Nullable public static SearchRegistry.Key<ItemStack> getNameSearchKey(CreativeModeTab tab)`
- `@Nullable public static SearchRegistry.Key<ItemStack> getTagSearchKey(CreativeModeTab tab)`
- `@Internal public static void createSearchTrees()`

## DimensionSpecialEffectsManager

*class* `net.minecraftforge.client.DimensionSpecialEffectsManager`

Manager for DimensionSpecialEffects instances.

 Provides a lookup by dimension type.

### Fields
- `private static com.google.common.collect.ImmutableMap<ResourceLocation,DimensionSpecialEffects> EFFECTS`
- `private static DimensionSpecialEffects DEFAULT_EFFECTS`

### Methods
- `public static DimensionSpecialEffects getForType(ResourceLocation type)`
  Finds the DimensionSpecialEffects for a given dimension type, or the default if none is registered.
- `@Internal public static void init()`
- `private static DimensionSpecialEffects preRegisterVanillaEffects(Map<ResourceLocation,DimensionSpecialEffects> effects)`
  Pre-registers vanilla dimension effects and returns the default fallback effects instance.
  
   Borrowed from DimensionSpecialEffects.EFFECTS.

## EntitySpectatorShaderManager

*class* `net.minecraftforge.client.EntitySpectatorShaderManager`

Manager for entity spectator mode shaders.

 Provides a lookup.

### Fields
- `private static Map<EntityType<?>,ResourceLocation> SHADERS`

### Methods
- `@Nullable public static @Nullable ResourceLocation get(EntityType<?> entityType)`
  Finds the path to the spectator mode shader used for the specified entity type, or null if none is registered.
- `@Internal public static void init()`

## ExtendedServerListData

*record* `net.minecraftforge.client.ExtendedServerListData`

### Fields
- `private final String type`
  The field for the type record component.
- `private final boolean isCompatible`
  The field for the isCompatible record component.
- `private final int numberOfMods`
  The field for the numberOfMods record component.
- `private final String extraReason`
  The field for the extraReason record component.
- `private final boolean truncated`
  The field for the truncated record component.

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
- `public String type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public boolean isCompatible()`
  Returns the value of the isCompatible record component.
  - returns: the value of the isCompatible record component
- `public int numberOfMods()`
  Returns the value of the numberOfMods record component.
  - returns: the value of the numberOfMods record component
- `public String extraReason()`
  Returns the value of the extraReason record component.
  - returns: the value of the extraReason record component
- `public boolean truncated()`
  Returns the value of the truncated record component.
  - returns: the value of the truncated record component

## FireworkShapeFactoryRegistry

*class* `net.minecraftforge.client.FireworkShapeFactoryRegistry`

Keeps track of custom firework shape types, because Particle is client side only this can't be on the Shape itself.
 So sometime during your client initalization call register.

### Fields
- `private static final Map<FireworkRocketItem.Shape,FireworkShapeFactoryRegistry.Factory> factories`

### Methods
- `public static void register(FireworkRocketItem.Shape shape,  FireworkShapeFactoryRegistry.Factory factory)`
- `@Nullable public static @Nullable FireworkShapeFactoryRegistry.Factory get(FireworkRocketItem.Shape shape)`

## FireworkShapeFactoryRegistry.Factory

*interface* `net.minecraftforge.client.FireworkShapeFactoryRegistry.Factory`

Enclosing class: FireworkShapeFactoryRegistry

### Methods
- `void build(FireworkParticles.Starter starter,  boolean trail,  boolean flicker,  int[] colors,  int[] fadecolors)`

## ForgeHooksClient

*class* `net.minecraftforge.client.ForgeHooksClient`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final org.apache.logging.log4j.Marker CLIENTHOOKS`
- `private static final Stack<Screen> guiLayers`
  Contains the *extra* GUI layers.
   The current top layer stays in Minecraft#currentScreen, and the rest serve as a background for it.
- `public static String forgeStatusLine`
- `private static int slotMainHand`
- `private static final Map<ModelLayerLocation,Supplier<LayerDefinition>> layerDefinitions`
- `private static final ResourceLocation ICON_SHEET`
- `private static final ChatTypeDecoration SYSTEM_CHAT_TYPE_DECORATION`
- `private static final ChatType SYSTEM_CHAT_TYPE`
- `private static final ChatType.Bound SYSTEM_CHAT_TYPE_BOUND`
- `private static boolean initializedClientHooks`

### Methods
- `public static void resizeGuiLayers(Minecraft minecraft,  int width,  int height)`
- `public static void clearGuiLayers(Minecraft minecraft)`
- `private static void popGuiLayerInternal(Minecraft minecraft)`
- `public static void pushGuiLayer(Minecraft minecraft,  Screen screen)`
- `public static void popGuiLayer(Minecraft minecraft)`
- `public static float getGuiFarPlane()`
- `public static String getArmorTexture(Entity entity,  ItemStack armor,  String _default,  EquipmentSlot slot,  String type)`
- `public static boolean onDrawHighlight(LevelRenderer context,  Camera camera,  HitResult target,  float partialTick,  PoseStack poseStack,  MultiBufferSource bufferSource)`
- `public static void dispatchRenderStage(RenderType renderType,  LevelRenderer levelRenderer,  PoseStack poseStack,  org.joml.Matrix4f projectionMatrix,  int renderTick,  Camera camera,  Frustum frustum)`
- `public static boolean renderSpecificFirstPersonHand(InteractionHand hand,  PoseStack poseStack,  MultiBufferSource bufferSource,  int packedLight,  float partialTick,  float interpPitch,  float swingProgress,  float equipProgress,  ItemStack stack)`
- `public static boolean renderSpecificFirstPersonArm(PoseStack poseStack,  MultiBufferSource multiBufferSource,  int packedLight,  AbstractClientPlayer player,  HumanoidArm arm)`
- `public static void onTextureStitchedPost(TextureAtlas map)`
- `public static void onBlockColorsInit(BlockColors blockColors)`
- `public static void onItemColorsInit(ItemColors itemColors,  BlockColors blockColors)`
- `public static Model getArmorModel(LivingEntity entityLiving,  ItemStack itemStack,  EquipmentSlot slot,  HumanoidModel<?> _default)`
- `public static <T extends LivingEntity> void copyModelProperties(HumanoidModel<T> original,  HumanoidModel<?> replacement)`
  Copies humanoid model properties from the original model to another, used for armor models
- `public static String fixDomain(String base,  String complex)`
- `public static float getFieldOfViewModifier(Player entity,  float fovModifier)`
- `public static double getFieldOfView(GameRenderer renderer,  Camera camera,  double partialTick,  double fov,  boolean usedConfiguredFov)`
- `public static void renderMainMenu(TitleScreen gui,  GuiGraphics graphics,  Font font,  int width,  int height,  int alpha)`
- `@Nullable public static @Nullable SoundInstance playSound(SoundEngine manager,  SoundInstance sound)`
- `public static void drawScreen(Screen screen,  GuiGraphics guiGraphics,  int mouseX,  int mouseY,  float partialTick)`
- `private static void drawScreenInternal(Screen screen,  GuiGraphics guiGraphics,  int mouseX,  int mouseY,  float partialTick)`
- `public static org.joml.Vector3f getFogColor(Camera camera,  float partialTick,  ClientLevel level,  int renderDistance,  float darkenWorldAmount,  float fogRed,  float fogGreen,  float fogBlue)`
- `public static void onFogRender(FogRenderer.FogMode mode,  FogType type,  Camera camera,  float partialTick,  float renderDistance,  float nearDistance,  float farDistance,  FogShape shape)`
- `public static ViewportEvent.ComputeCameraAngles onCameraSetup(GameRenderer renderer,  Camera camera,  float partial)`
- `public static void onModifyBakingResult(Map<ResourceLocation,BakedModel> models,  ModelBakery modelBakery)`
- `public static void onModelBake(ModelManager modelManager,  Map<ResourceLocation,BakedModel> models,  ModelBakery modelBakery)`
- `public static BakedModel handleCameraTransforms(PoseStack poseStack,  BakedModel model,  ItemDisplayContext cameraTransformType,  boolean applyLeftHandTransform)`
- `public static TextureAtlasSprite[] getFluidSprites(BlockAndTintGetter level,  BlockPos pos,  FluidState fluidStateIn)`
- `public static Material getBlockMaterial(ResourceLocation loc)`
- `public static void fillNormal(int[] faceData,  Direction facing)`
- `public static void fillNormal(int[] faceData,  Direction facing,  boolean calculateNormals)`
  internal, relies on fixed format of FaceBakery
- `private static org.joml.Vector3f getVertexPos(int[] data,  int vertex)`
- `public static boolean calculateFaceWithoutAO(BlockAndTintGetter getter,  BlockState state,  BlockPos pos,  BakedQuad quad,  boolean isFaceCubic,  float[] brightness,  int[] lightmap)`
- `public static void loadEntityShader(Entity entity,  GameRenderer entityRenderer)`
- `public static boolean shouldCauseReequipAnimation(@NotNull  @NotNull ItemStack from,  @NotNull  @NotNull ItemStack to,  int slot)`
- `public static CustomizeGuiOverlayEvent.BossEventProgress onCustomizeBossEventProgress(GuiGraphics guiGraphics,  Window window,  LerpingBossEvent bossInfo,  int x,  int y,  int increment)`
- `public static ScreenshotEvent onScreenshot(NativeImage image,  File screenshotFile)`
- `public static void onClientChangeGameType(PlayerInfo info,  GameType currentGameMode,  GameType newGameMode)`
- `public static void onMovementInputUpdate(Player player,  Input movementInput)`
- `public static boolean onScreenKeyPressedPre(Screen guiScreen,  int keyCode,  int scanCode,  int modifiers)`
- `public static boolean onScreenKeyPressedPost(Screen guiScreen,  int keyCode,  int scanCode,  int modifiers)`
- `public static boolean onScreenKeyReleasedPre(Screen guiScreen,  int keyCode,  int scanCode,  int modifiers)`
- `public static boolean onScreenKeyReleasedPost(Screen guiScreen,  int keyCode,  int scanCode,  int modifiers)`
- `public static boolean onScreenCharTypedPre(Screen guiScreen,  char codePoint,  int modifiers)`
- `public static void onScreenCharTypedPost(Screen guiScreen,  char codePoint,  int modifiers)`
- `public static void onRecipesUpdated(RecipeManager mgr)`
- `public static void onKeyInput(int key,  int scanCode,  int action,  int modifiers)`
- `public static InputEvent.InteractionKeyMappingTriggered onClickInput(int button,  KeyMapping keyBinding,  InteractionHand hand)`
- `public static boolean isNameplateInRenderDistance(Entity entity,  double squareDistance)`
- `public static void renderPistonMovedBlocks(BlockPos pos,  BlockState state,  PoseStack stack,  MultiBufferSource bufferSource,  Level level,  boolean checkSides,  int packedOverlay,  BlockRenderDispatcher blockRenderer)`
- `public static boolean shouldRenderEffect(MobEffectInstance effectInstance)`
- `@Nullable public static @Nullable SpriteContents loadSpriteContents(ResourceLocation name,  Resource resource,  FrameSize frameSize,  NativeImage image,  ResourceMetadata animationMeta)`
- `@Nullable public static @Nullable TextureAtlasSprite loadTextureAtlasSprite(ResourceLocation atlasName,  SpriteContents contents,  int atlasWidth,  int atlasHeight,  int spriteX,  int spriteY,  int mipmapLevel)`
- `public static void registerLayerDefinition(ModelLayerLocation layerLocation,  Supplier<LayerDefinition> supplier)`
- `public static void loadLayerDefinitions(com.google.common.collect.ImmutableMap.Builder<ModelLayerLocation,LayerDefinition> builder)`
- `public static void processForgeListPingData(ServerStatus packet,  ServerData target)`
- `public static void drawForgePingInfo(JoinMultiplayerScreen gui,  ServerData target,  GuiGraphics guiGraphics,  int x,  int y,  int width,  int relativeMouseX,  int relativeMouseY)`
- `private static Connection getClientConnection()`
- `public static void handleClientLevelClosing(ClientLevel level)`
- `public static void firePlayerLogin(MultiPlayerGameMode pc,  LocalPlayer player,  Connection networkManager)`
- `public static void firePlayerLogout(@Nullable  @Nullable MultiPlayerGameMode pc,  @Nullable  @Nullable LocalPlayer player)`
- `public static void firePlayerRespawn(MultiPlayerGameMode pc,  LocalPlayer oldPlayer,  LocalPlayer newPlayer,  Connection networkManager)`
- `public static void onRegisterParticleProviders(ParticleEngine particleEngine)`
- `public static void onRegisterKeyMappings(Options options)`
- `public static void onRegisterAdditionalModels(Set<ResourceLocation> additionalModels)`
- `@Nullable public static @Nullable Component onClientChat(ChatType.Bound boundChatType,  Component message,  UUID sender)`
- `@Nullable public static @Nullable Component onClientPlayerChat(ChatType.Bound boundChatType,  Component message,  PlayerChatMessage playerChatMessage,  UUID sender)`
- `@Nullable public static @Nullable Component onClientSystemChat(Component message,  boolean overlay)`
- `@NotNull public static @NotNull String onClientSendMessage(String message)`
- `@NotNull public static @NotNull RenderType getEntityRenderType(RenderType chunkRenderType,  boolean cull)`
  Mimics the behavior of ItemBlockRenderTypes.getRenderType(BlockState, boolean)
   for the input RenderType.
- `public static Font getTooltipFont(@NotNull  @NotNull ItemStack stack,  Font fallbackFont)`
- `public static RenderTooltipEvent.Pre onRenderTooltipPre(@NotNull  @NotNull ItemStack stack,  GuiGraphics graphics,  int x,  int y,  int screenWidth,  int screenHeight,  @NotNull  @NotNull List<ClientTooltipComponent> components,  @NotNull  @NotNull Font fallbackFont,  @NotNull  @NotNull ClientTooltipPositioner positioner)`
- `public static RenderTooltipEvent.Color onRenderTooltipColor(@NotNull  @NotNull ItemStack stack,  GuiGraphics graphics,  int x,  int y,  @NotNull  @NotNull Font font,  @NotNull  @NotNull List<ClientTooltipComponent> components)`
- `public static List<ClientTooltipComponent> gatherTooltipComponents(ItemStack stack,  List<? extends FormattedText> textElements,  int mouseX,  int screenWidth,  int screenHeight,  Font fallbackFont)`
- `public static List<ClientTooltipComponent> gatherTooltipComponents(ItemStack stack,  List<? extends FormattedText> textElements,  Optional<TooltipComponent> itemComponent,  int mouseX,  int screenWidth,  int screenHeight,  Font fallbackFont)`
- `private static Stream<ClientTooltipComponent> splitLine(FormattedText text,  Font font,  int maxWidth)`
- `public static Comparator<ParticleRenderType> makeParticleRenderTypeComparator(List<ParticleRenderType> renderOrder)`
- `public static ScreenEvent.RenderInventoryMobEffects onScreenPotionSize(Screen screen,  int availableSpace,  boolean compact,  int horizontalOffset)`
- `public static boolean onToastAdd(Toast toast)`
- `public static boolean isBlockInSolidLayer(BlockState state)`
- `public static void createWorldConfirmationScreen(Runnable doConfirmedWorldLoad)`
- `public static boolean renderFireOverlay(Player player,  PoseStack mat)`
- `public static boolean renderWaterOverlay(Player player,  PoseStack mat)`
- `public static boolean renderBlockOverlay(Player player,  PoseStack mat,  RenderBlockScreenEffectEvent.OverlayType type,  BlockState block,  BlockPos pos)`
- `public static int getMaxMipmapLevel(int width,  int height)`
- `public static ResourceLocation getShaderImportLocation(String basePath,  boolean isRelative,  String importPath)`
- `public static Direction getNearestStable(float nX,  float nY,  float nZ)`
  This function is a clone of Direction.getNearest(float, float, float) designed to return a consistent
   direction when the normal is at an inflection point (ie 45 degrees) rounding errors
   from associated matrix multiplication (such as during SheetedDecalTextureGenerator.endVertex()
   can cause the direction chosen to be unstable.
  
   The function will only take effect if the Forge Client config option "stabilizeDirectionGetNearest" is enabled.
  
   This is a port of the downstream changes from https://github.com/neoforged/NeoForge PR #26
  - param: nX - X component of the normal
  - param: nY - Y component of the normal
  - param: nZ - Z component of the normal
  - returns: the nearest Direction to the passed in normal, biased slightly in favor of the order of declaration
- `@Internal public static void initClientHooks(Minecraft mc,  ReloadableResourceManager resourceManager)`
- `public static boolean onClientDisconnect(Connection connection,  Minecraft mc,  Screen parent,  Component message)`

## ForgeHooksClient.ClientEvents

*class* `net.minecraftforge.client.ForgeHooksClient.ClientEvents`

Enclosing class: ForgeHooksClient

### Fields
- `@Nullable private static @Nullable ShaderInstance rendertypeEntityTranslucentUnlitShader`

### Methods
- `public static ShaderInstance getEntityTranslucentUnlitShader()`
- `public static void registerShaders(RegisterShadersEvent event)  throws IOException`
  - throws: IOException

## ForgeRenderTypes.CustomizableTextureState

*class* `net.minecraftforge.client.ForgeRenderTypes.CustomizableTextureState`

Enclosing class: ForgeRenderTypes

### Inherited fields
- from `net.minecraft.client.renderer.RenderStateShard.TextureStateShard`: `blur`, `mipmap`
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Inherited methods
- from `net.minecraft.client.renderer.RenderStateShard.TextureStateShard`: `cutoutTexture`, `toString`
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`

## ForgeRenderTypes.Internal

*class* `net.minecraftforge.client.ForgeRenderTypes.Internal`

Enclosing class: ForgeRenderTypes

### Fields
- `private static final RenderStateShard.ShaderStateShard RENDERTYPE_ENTITY_TRANSLUCENT_UNLIT_SHADER`
- `public static Function<ResourceLocation,RenderType> UNSORTED_TRANSLUCENT`
- `private static final BiFunction<ResourceLocation,Boolean,RenderType> ENTITY_TRANSLUCENT`
- `public static Function<ResourceLocation,RenderType> UNLIT_TRANSLUCENT_SORTED`
- `public static Function<ResourceLocation,RenderType> UNLIT_TRANSLUCENT_UNSORTED`
- `public static Function<ResourceLocation,RenderType> LAYERED_ITEM_SOLID`
- `public static Function<ResourceLocation,RenderType> LAYERED_ITEM_CUTOUT`
- `public static Function<ResourceLocation,RenderType> LAYERED_ITEM_CUTOUT_MIPPED`
- `public static Function<ResourceLocation,RenderType> LAYERED_ITEM_TRANSLUCENT`
- `public static Function<ResourceLocation,RenderType> TEXT`
- `public static Function<ResourceLocation,RenderType> TEXT_INTENSITY`
- `public static Function<ResourceLocation,RenderType> TEXT_POLYGON_OFFSET`
- `public static Function<ResourceLocation,RenderType> TEXT_INTENSITY_POLYGON_OFFSET`
- `public static Function<ResourceLocation,RenderType> TEXT_SEETHROUGH`
- `public static Function<ResourceLocation,RenderType> TEXT_INTENSITY_SEETHROUGH`
- `public static Function<ResourceLocation,RenderType> TRANSLUCENT_PARTICLES_TARGET`

### Inherited fields
- from `net.minecraft.client.renderer.RenderType`: `BIG_BUFFER_SIZE`, `LINE_STRIP`, `LINES`, `MEDIUM_BUFFER_SIZE`, `SMALL_BUFFER_SIZE`, `TRANSIENT_BUFFER_SIZE`
- from `net.minecraft.client.renderer.RenderStateShard`: `ADDITIVE_TRANSPARENCY`, `BLOCK_SHEET`, `BLOCK_SHEET_MIPPED`, `CLOUDS_TARGET`, `COLOR_DEPTH_WRITE`, `COLOR_WRITE`, `CRUMBLING_TRANSPARENCY`, `CULL`, `DEFAULT_LINE`, `DEFAULT_TEXTURING`, `DEPTH_WRITE`, `ENTITY_GLINT_TEXTURING`, `EQUAL_DEPTH_TEST`, `GLINT_TEXTURING`, `GLINT_TRANSPARENCY`, `GREATER_DEPTH_TEST`, `ITEM_ENTITY_TARGET`, `LEQUAL_DEPTH_TEST`, `LIGHTMAP`, `LIGHTNING_TRANSPARENCY`, `MAIN_TARGET`, `MAX_ENCHANTMENT_GLINT_SPEED_MILLIS`, `name`, `NO_COLOR_LOGIC`, `NO_CULL`, `NO_DEPTH_TEST`, `NO_LAYERING`, `NO_LIGHTMAP`, `NO_OVERLAY`, `NO_SHADER`, `NO_TEXTURE`, `NO_TRANSPARENCY`, `OR_REVERSE_COLOR_LOGIC`, `OUTLINE_TARGET`, `OVERLAY`, `PARTICLES_TARGET`, `POLYGON_OFFSET_LAYERING`, `POSITION_COLOR_LIGHTMAP_SHADER`, `POSITION_COLOR_SHADER`, `POSITION_COLOR_TEX_LIGHTMAP_SHADER`, `POSITION_COLOR_TEX_SHADER`, `POSITION_SHADER`, `POSITION_TEX_SHADER`, `RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER`, `RENDERTYPE_ARMOR_GLINT_SHADER`, `RENDERTYPE_BEACON_BEAM_SHADER`, `RENDERTYPE_CRUMBLING_SHADER`, `RENDERTYPE_CUTOUT_MIPPED_SHADER`, `RENDERTYPE_CUTOUT_SHADER`, `RENDERTYPE_END_GATEWAY_SHADER`, `RENDERTYPE_END_PORTAL_SHADER`, `RENDERTYPE_ENERGY_SWIRL_SHADER`, `RENDERTYPE_ENTITY_ALPHA_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER`, `RENDERTYPE_ENTITY_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_DECAL_SHADER`, `RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER`, `RENDERTYPE_ENTITY_GLINT_SHADER`, `RENDERTYPE_ENTITY_NO_OUTLINE_SHADER`, `RENDERTYPE_ENTITY_SHADOW_SHADER`, `RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER`, `RENDERTYPE_ENTITY_SOLID_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER`, `RENDERTYPE_ENTITY_TRANSLUCENT_SHADER`, `RENDERTYPE_EYES_SHADER`, `RENDERTYPE_GLINT_DIRECT_SHADER`, `RENDERTYPE_GLINT_SHADER`, `RENDERTYPE_GLINT_TRANSLUCENT_SHADER`, `RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER`, `RENDERTYPE_GUI_OVERLAY_SHADER`, `RENDERTYPE_GUI_SHADER`, `RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER`, `RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER`, `RENDERTYPE_LEASH_SHADER`, `RENDERTYPE_LIGHTNING_SHADER`, `RENDERTYPE_LINES_SHADER`, `RENDERTYPE_OUTLINE_SHADER`, `RENDERTYPE_SOLID_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_BACKGROUND_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_INTENSITY_SHADER`, `RENDERTYPE_TEXT_SEE_THROUGH_SHADER`, `RENDERTYPE_TEXT_SHADER`, `RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER`, `RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER`, `RENDERTYPE_TRANSLUCENT_SHADER`, `RENDERTYPE_TRIPWIRE_SHADER`, `RENDERTYPE_WATER_MASK_SHADER`, `setupState`, `TRANSLUCENT_TARGET`, `TRANSLUCENT_TRANSPARENCY`, `VIEW_OFFSET_Z_LAYERING`, `WEATHER_TARGET`

### Methods
- `private static RenderType unsortedTranslucent(ResourceLocation textureLocation)`
- `private static RenderType unlitTranslucent(ResourceLocation textureLocation,  boolean sortingEnabled)`
- `private static RenderType layeredItemSolid(ResourceLocation locationIn)`
- `private static RenderType layeredItemCutout(ResourceLocation locationIn)`
- `private static RenderType layeredItemCutoutMipped(ResourceLocation locationIn)`
- `private static RenderType layeredItemTranslucent(ResourceLocation locationIn)`
- `private static RenderType getText(ResourceLocation locationIn)`
- `private static RenderType getTextIntensity(ResourceLocation locationIn)`
- `private static RenderType getTextPolygonOffset(ResourceLocation locationIn)`
- `private static RenderType getTextIntensityPolygonOffset(ResourceLocation locationIn)`
- `private static RenderType getTextSeeThrough(ResourceLocation locationIn)`
- `private static RenderType getTextIntensitySeeThrough(ResourceLocation locationIn)`
- `private static RenderType getTranslucentParticlesTarget(ResourceLocation locationIn)`

### Inherited methods
- from `net.minecraft.client.renderer.RenderType`: `affectsCrumbling`, `armorCutoutNoCull`, `armorEntityGlint`, `armorGlint`, `asOptional`, `beaconBeam`, `bufferSize`, `canConsolidateConsecutiveGeometry`, `chunkBufferLayers`, `create`, `createArmorDecalCutoutNoCull`, `crumbling`, `cutout`, `cutoutMipped`, `debugFilledBox`, `debugLineStrip`, `debugQuads`, `debugSectionQuads`, `dragonExplosionAlpha`, `end`, `endGateway`, `endPortal`, `energySwirl`, `entityCutout`, `entityCutoutNoCull`, `entityCutoutNoCull`, `entityCutoutNoCullZOffset`, `entityCutoutNoCullZOffset`, `entityDecal`, `entityGlint`, `entityGlintDirect`, `entityNoOutline`, `entityShadow`, `entitySmoothCutout`, `entitySolid`, `entityTranslucent`, `entityTranslucent`, `entityTranslucentCull`, `entityTranslucentEmissive`, `entityTranslucentEmissive`, `eyes`, `format`, `getChunkLayerId`, `glint`, `glintDirect`, `glintTranslucent`, `gui`, `guiGhostRecipeOverlay`, `guiOverlay`, `guiTextHighlight`, `isOutline`, `itemEntityTranslucentCull`, `leash`, `lightning`, `lines`, `lineStrip`, `mode`, `outline`, `outline`, `solid`, `text`, `textBackground`, `textBackgroundSeeThrough`, `textIntensity`, `textIntensityPolygonOffset`, `textIntensitySeeThrough`, `textPolygonOffset`, `textSeeThrough`, `toString`, `translucent`, `translucentMovingBlock`, `translucentNoCrumbling`, `tripwire`, `waterMask`
- from `net.minecraft.client.renderer.RenderStateShard`: `clearRenderState`, `setupRenderState`

## IArmPoseTransformer

*interface* `net.minecraftforge.client.IArmPoseTransformer`

An ArmPose that can be defined by the user.
 Register one by creating a custom HumanoidModel.ArmPose
 and returning it in IClientItemExtensions.getArmPose(LivingEntity, InteractionHand, ItemStack).

### Methods
- `void applyTransform(HumanoidModel<?> model,  LivingEntity entity,  HumanoidArm arm)`
  This method should be used to apply all wanted transformations to the player when the ArmPose is active.
   You can use LivingEntity.getTicksUsingItem() and LivingEntity.getUseItemRemainingTicks() for moving animations.
  - param: model - The humanoid model
  - param: entity - The humanoid entity
  - param: arm - Arm to pose

## IItemDecorator

*interface* `net.minecraftforge.client.IItemDecorator`

An ItemDecorator that is used to render something on specific items, when the DurabilityBar and StackCount is rendered.
 Add it to an item using RegisterItemDecorationsEvent.register(ItemLike, IItemDecorator).

### Methods
- `boolean render(GuiGraphics guiGraphics,  Font font,  ItemStack stack,  int xOffset,  int yOffset)`
  Is called after GuiGraphics.renderItemDecorations(Font, ItemStack, int, int, String) is done rendering.
   The StackCount is rendered at blitOffset+200 so use the blitOffset with caution.
  
   The RenderState during this call will be: enableTexture, enableDepthTest, enableBlend and defaultBlendFunc
  - returns: true if you have modified the RenderState and it has to be reset for other ItemDecorators

## ItemDecoratorHandler

*class* `net.minecraftforge.client.ItemDecoratorHandler`

### Fields
- `private final List<IItemDecorator> itemDecorators`
- `private static Map<Item,ItemDecoratorHandler> DECORATOR_LOOKUP`
- `private static final ItemDecoratorHandler EMPTY`

### Methods
- `public static void init()`
- `public static ItemDecoratorHandler of(ItemStack stack)`
- `public void render(GuiGraphics guiGraphics,  Font font,  ItemStack stack,  int xOffset,  int yOffset)`
- `private void resetRenderState()`

## NamedRenderTypeManager

*class* `net.minecraftforge.client.NamedRenderTypeManager`

Manager for named render types.

 Provides a lookup.

### Fields
- `private static com.google.common.collect.ImmutableMap<ResourceLocation,RenderTypeGroup> RENDER_TYPES`

### Methods
- `public static RenderTypeGroup get(ResourceLocation name)`
  Finds the RenderTypeGroup for a given name, or the empty group if not found.
- `@Internal public static void init()`
- `private static void preRegisterVanillaRenderTypes(Map<ResourceLocation,RenderTypeGroup> blockRenderTypes)`
  Pre-registers vanilla render types.

## PresetEditorManager

*class* `net.minecraftforge.client.PresetEditorManager`

### Fields
- `private static Map<ResourceKey<WorldPreset>,PresetEditor> editors`

### Methods
- `@Internal static void init()`
- `@Nullable public static @Nullable PresetEditor get(ResourceKey<WorldPreset> key)`
  Returns the PresetEditor for the given WorldPreset key, or null if no such PresetEditor exists.
  - param: key - ResourceKey for the specified WorldPreset/PresetEditor.
  - returns: the PresetEditor for the given WorldPreset key, or null if no such PresetEditor exists

## RecipeBookManager

*class* `net.minecraftforge.client.RecipeBookManager`

Manager for recipe book types and categories.

 Provides a recipe category lookup.

### Fields
- `private static final Map<RecipeBookCategories,List<RecipeBookCategories>> AGGREGATE_CATEGORIES`
- `private static final Map<RecipeBookType,List<RecipeBookCategories>> TYPE_CATEGORIES`
- `private static final Map<RecipeType<?>,Function<Recipe<?>,RecipeBookCategories>> RECIPE_CATEGORY_LOOKUPS`
- `private static final Map<RecipeBookCategories,List<RecipeBookCategories>> AGGREGATE_CATEGORIES_VIEW`

### Methods
- `@Nullable public static <T extends Recipe<?>> @Nullable RecipeBookCategories findCategories(RecipeType<T> type,  RecipeHolder<T> recipe)`
  Finds the category the specified recipe should display in, or null if none.
- `@Internal public static Map<RecipeBookCategories,List<RecipeBookCategories>> getAggregateCategories()`
- `@Internal public static List<RecipeBookCategories> getCustomCategoriesOrEmpty(RecipeBookType recipeBookType)`
- `@Internal public static void init()`

## RenderTypeGroup

*record* `net.minecraftforge.client.RenderTypeGroup`

A set of functionally equivalent shaders. One using DefaultVertexFormat.BLOCK,
 and the other two using DefaultVertexFormat.NEW_ENTITY.
 entityFabulous may support custom render targets and other aspects of the fabulous pipeline, or can otherwise
 be the same as entity.

### Fields
- `private final RenderType block`
  The field for the block record component.
- `private final RenderType entity`
  The field for the entity record component.
- `private final RenderType entityFabulous`
  The field for the entityFabulous record component.
- `public static RenderTypeGroup EMPTY`

### Methods
- `public boolean isEmpty()`
  Returns true if this group has render types or not. It either has all, or none.
  - returns: true if this group has render types or not. It either has all, or none
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
- `public RenderType block()`
  Returns the value of the block record component.
  - returns: the value of the block record component
- `public RenderType entity()`
  Returns the value of the entity record component.
  - returns: the value of the entity record component
- `public RenderType entityFabulous()`
  Returns the value of the entityFabulous record component.
  - returns: the value of the entityFabulous record component

## RenderTypeHelper

*class* `net.minecraftforge.client.RenderTypeHelper`

Provides helper functions replacing those in ItemBlockRenderTypes.

### Methods
- `@NotNull public static @NotNull RenderType getEntityRenderType(RenderType chunkRenderType,  boolean cull)`
  Provides a RenderType using DefaultVertexFormat.NEW_ENTITY for the given DefaultVertexFormat.BLOCK format.
   This should be called for each RenderType returned by IForgeBakedModel.getRenderTypes(BlockState, RandomSource, ModelData).
  
   Mimics the behavior of vanilla's ItemBlockRenderTypes.getRenderType(BlockState, boolean).
- `@NotNull public static @NotNull RenderType getMovingBlockRenderType(RenderType renderType)`
  Provides a RenderType fit for rendering moving blocks given the specified chunk render type.
   This should be called for each RenderType returned by IForgeBakedModel.getRenderTypes(BlockState, RandomSource, ModelData).
  
   Mimics the behavior of vanilla's ItemBlockRenderTypes.getMovingBlockRenderType(BlockState).
- `@NotNull public static @NotNull RenderType getFallbackItemRenderType(ItemStack stack,  BakedModel model,  boolean cull)`
  Provides a fallback RenderType for the given ItemStack in the case that none is explicitly specified.
  
   Mimics the behavior of vanilla's ItemBlockRenderTypes.getRenderType(ItemStack, boolean)
   but removes the need to query the model again if the item is a BlockItem.

## StencilManager

*class* `net.minecraftforge.client.StencilManager`

### Fields
- `private static final BitSet BITS`

### Methods
- `public static int reserveBit()`
  Reserve a stencil bit for use in rendering
  
   Note: you must check the RenderTarget you are working with to
   determine if stencil bits are enabled on it before use.
  - returns: A bit, or -1 if no further stencil bits are available
- `public static void releaseBit(int bit)`
  Release the stencil bit for other use
  - param: bit - The bit obtained from reserveBit()
