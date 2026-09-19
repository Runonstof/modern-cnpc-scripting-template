# net.minecraftforge.client

- [ClientCommandHandler](#clientcommandhandler)
- [CloudRenderer](#cloudrenderer)
- [EnumHelperClient](#enumhelperclient)
- [FluidContainerColorer](#fluidcontainercolorer)
- [ForgeClientHandler](#forgeclienthandler)
- [ForgeHooksClient](#forgehooksclient)
- [GuiIngameForge](#guiingameforge)
- [IClientCommand](#iclientcommand)
- [IRenderContextHandler](#irendercontexthandler)
- [IRenderHandler](#irenderhandler)
- [ItemModelMesherForge](#itemmodelmesherforge)
- [MinecraftForgeClient](#minecraftforgeclient)
## ClientCommandHandler

*class* `net.minecraftforge.client.ClientCommandHandler`

The class that handles client-side chat commands. You should register any
 commands that you want handled on the client with this command handler.

 If there is a command with the same name registered both on the server and
 client, the client takes precedence!

All Implemented Interfaces: ICommandManager

### Fields
- `public static final ClientCommandHandler instance`
- `public java.lang.String[] latestAutoComplete`

### Methods
- `public int executeCommand(ICommandSender sender,  java.lang.String message)`
  - returns: 1 if successfully executed, -1 if no permission or wrong usage,
 0 if it doesn't exist or it was canceled (it's sent to the server)
- `public void autoComplete(java.lang.String leftOfCursor)`
- `protected MinecraftServer getServer()`

### Inherited methods
- from `net.minecraft.command.CommandHandler`: `getCommands`, `getPossibleCommands`, `getTabCompletions`, `registerCommand`, `tryExecute`

## CloudRenderer

*class* `net.minecraftforge.client.CloudRenderer`

All Implemented Interfaces: IResourceManagerReloadListener, ISelectiveResourceReloadListener

### Methods
- `public void checkSettings()`
- `public boolean render(int cloudTicks,  float partialTicks)`
- `public void onResourceManagerReload(IResourceManager resourceManager,  java.util.function.Predicate<IResourceType> resourcePredicate)`
  Description copied from interface: ISelectiveResourceReloadListener
  A version of onResourceManager that selectively chooses IResourceTypes
   to reload.
   When using this, the given predicate should be called to ensure the relevant resources should
   be reloaded at this time.
  - param: resourceManager - the resource manager being reloaded
  - param: resourcePredicate - predicate to test whether any given resource type should be reloaded

### Inherited methods
- from `net.minecraftforge.client.resource.ISelectiveResourceReloadListener`: `onResourceManagerReload`

## EnumHelperClient

*class* `net.minecraftforge.client.EnumHelperClient`

### Methods
- `public static GameType addGameType(java.lang.String name,  int id,  java.lang.String displayName,  java.lang.String shortName)`
- `public static GameSettings.Options addOptions(java.lang.String name,  java.lang.String langName,  boolean isSlider,  boolean isToggle)`
- `public static GameSettings.Options addOptions(java.lang.String name,  java.lang.String langName,  boolean isSlider,  boolean isToggle,  float valMin,  float valMax,  float valStep)`
- `public static Util.EnumOS addOS2(java.lang.String name)`
- `public static MusicTicker.MusicType addMusicType(java.lang.String name,  SoundEvent sound,  int minDelay,  int maxDelay)`

### Inherited methods
- from `net.minecraftforge.common.util.EnumHelper`: `addAction`, `addArmorMaterial`, `addArt`, `addCreatureAttribute`, `addCreatureType`, `addDoor`, `addEnchantmentType`, `addEnum`, `addEnum`, `addHorseArmor`, `addMovingObjectType`, `addRarity`, `addSensitivity`, `addSkyBlock`, `addSpawnPlacementType`, `addStatus`, `addToolMaterial`, `setFailsafeFieldValue`, `testEnum`

## FluidContainerColorer

*class* `net.minecraftforge.client.FluidContainerColorer`

All Implemented Interfaces: IItemColor

### Methods
- `public int colorMultiplier(ItemStack stack,  int tintIndex)`

## ForgeClientHandler

*class* `net.minecraftforge.client.ForgeClientHandler`

### Methods
- `public static void registerModels(ModelRegistryEvent event)`
- `public static void registerItemHandlers(ColorHandlerEvent.Item event)`

## ForgeHooksClient

*class* `net.minecraftforge.client.ForgeHooksClient`

### Methods
- `public static java.lang.String getArmorTexture(Entity entity,  ItemStack armor,  java.lang.String _default,  EntityEquipmentSlot slot,  java.lang.String type)`
- `public static void orientBedCamera(IBlockAccess world,  BlockPos pos,  IBlockState state,  Entity entity)`
- `public static boolean onDrawBlockHighlight(RenderGlobal context,  EntityPlayer player,  RayTraceResult target,  int subID,  float partialTicks)`
- `public static void dispatchRenderLast(RenderGlobal context,  float partialTicks)`
- `public static boolean renderFirstPersonHand(RenderGlobal context,  float partialTicks,  int renderPass)`
- `public static boolean renderSpecificFirstPersonHand(EnumHand hand,  float partialTicks,  float interpPitch,  float swingProgress,  float equipProgress,  ItemStack stack)`
- `public static void onTextureStitchedPre(TextureMap map)`
- `public static void onTextureStitchedPost(TextureMap map)`
- `public static void onBlockColorsInit(BlockColors blockColors)`
- `public static void onItemColorsInit(ItemColors itemColors,  BlockColors blockColors)`
- `public static void setRenderPass(int pass)`
- `public static void setRenderLayer(BlockRenderLayer layer)`
- `public static ModelBiped getArmorModel(EntityLivingBase entityLiving,  ItemStack itemStack,  EntityEquipmentSlot slot,  ModelBiped _default)`
- `public static java.lang.String fixDomain(java.lang.String base,  java.lang.String complex)`
- `public static boolean postMouseEvent()`
- `public static float getOffsetFOV(EntityPlayer entity,  float fov)`
- `public static float getFOVModifier(EntityRenderer renderer,  Entity entity,  IBlockState state,  double renderPartialTicks,  float fov)`
- `public static int getSkyBlendColour(World world,  BlockPos center)`
- `public static java.lang.String renderMainMenu(GuiMainMenu gui,  FontRenderer font,  int width,  int height,  java.lang.String splashText)`
- `public static ISound playSound(SoundManager manager,  ISound sound)`
- `public static int getWorldRenderPass()`
- `public static void drawScreen(GuiScreen screen,  int mouseX,  int mouseY,  float partialTicks)`
- `public static float getFogDensity(EntityRenderer renderer,  Entity entity,  IBlockState state,  float partial,  float density)`
- `public static void onFogRender(EntityRenderer renderer,  Entity entity,  IBlockState state,  float partial,  int mode,  float distance)`
- `public static void onModelBake(ModelManager modelManager,  IRegistry<ModelResourceLocation,IBakedModel> modelRegistry,  ModelLoader modelLoader)`
- `public static IBakedModel handleCameraTransforms(IBakedModel model,  ItemCameraTransforms.TransformType cameraTransformType,  boolean leftHandHackery)`
- `public static void multiplyCurrentGlMatrix(Matrix4f matrix)`
- `public static void preDraw(VertexFormatElement.EnumUsage attrType,  VertexFormat format,  int element,  int stride,  java.nio.ByteBuffer buffer)`
- `public static void postDraw(VertexFormatElement.EnumUsage attrType,  VertexFormat format,  int element,  int stride,  java.nio.ByteBuffer buffer)`
- `public static void transform(org.lwjgl.util.vector.Vector3f vec,  Matrix4f m)`
- `public static Matrix4f getMatrix(ModelRotation modelRotation)`
- `public static void putQuadColor(BufferBuilder renderer,  BakedQuad quad,  int color)`
- `public static void renderTileItem(Item item,  int metadata)`
- `@Deprecated public static void registerTESRItemStack(Item item,  int metadata,  java.lang.Class<? extends TileEntity> TileClass)` (deprecated)
  Deprecated. Will be removed as soon as possible. See Item.getTileEntityItemStackRenderer().
- `public static void renderLitItem(RenderItem ri,  IBakedModel model,  int color,  ItemStack stack)`
- `public static void fillNormal(int[] faceData,  EnumFacing facing)`
  internal, relies on fixed format of FaceBakery
- `public static java.util.Optional<TRSRTransformation> applyTransform(ItemTransformVec3f transform,  java.util.Optional<? extends IModelPart> part)`
- `public static java.util.Optional<TRSRTransformation> applyTransform(ModelRotation rotation,  java.util.Optional<? extends IModelPart> part)`
- `public static java.util.Optional<TRSRTransformation> applyTransform(Matrix4f matrix,  java.util.Optional<? extends IModelPart> part)`
- `public static void loadEntityShader(Entity entity,  EntityRenderer entityRenderer)`
- `public static IBakedModel getDamageModel(IBakedModel ibakedmodel,  TextureAtlasSprite texture,  IBlockState state,  IBlockAccess world,  BlockPos pos)`
- `public static boolean shouldCauseReequipAnimation(ItemStack from,  ItemStack to,  int slot)`
- `public static boolean shouldCauseBlockBreakReset(ItemStack from,  ItemStack to)`
- `public static BlockFaceUV applyUVLock(BlockFaceUV blockFaceUV,  EnumFacing originalSide,  ITransformation rotation)`
- `public static RenderGameOverlayEvent.BossInfo bossBarRenderPre(ScaledResolution res,  BossInfoClient bossInfo,  int x,  int y,  int increment)`
- `public static void bossBarRenderPost(ScaledResolution res)`
- `public static ScreenshotEvent onScreenshot(java.awt.image.BufferedImage image,  java.io.File screenshotFile)`
- `public static <any> handlePerspective(IBakedModel model,  ItemCameraTransforms.TransformType type)`
- `public static void onInputUpdate(EntityPlayer player,  MovementInput movementInput)`
- `public static java.lang.String getHorseArmorTexture(EntityHorse horse,  ItemStack armorStack)`
- `public static boolean shouldUseVanillaReloadableListener(IResourceManagerReloadListener listener)`
- `public static void invalidateLog4jThreadCache()`

## GuiIngameForge

*class* `net.minecraftforge.client.GuiIngameForge`

### Fields
- `public static boolean renderVignette`
- `public static boolean renderHelmet`
- `public static boolean renderPortal`
- `public static boolean renderHotbar`
- `public static boolean renderCrosshairs`
- `public static boolean renderBossHealth`
- `public static boolean renderHealth`
- `public static boolean renderArmor`
- `public static boolean renderFood`
- `public static boolean renderHealthMount`
- `public static boolean renderAir`
- `public static boolean renderExperiance`
- `public static boolean renderJumpBar`
- `public static boolean renderObjective`
- `public static int left_height`
- `public static int right_height`

### Inherited fields
- from `net.minecraft.client.gui.GuiIngame`: `animateOverlayMessageColor`, `chatListeners`, `displayedSubTitle`, `displayedTitle`, `healthUpdateCounter`, `highlightingItemStack`, `itemRenderer`, `lastPlayerHealth`, `lastSystemTime`, `mc`, `overlayBoss`, `overlayDebug`, `overlayMessage`, `overlayMessageTime`, `overlayPlayerList`, `overlaySubtitle`, `persistantChatGUI`, `playerHealth`, `prevVignetteBrightness`, `PUMPKIN_BLUR_TEX_PATH`, `rand`, `remainingHighlightTicks`, `spectatorGui`, `titleDisplayTime`, `titleFadeIn`, `titleFadeOut`, `titlesTimer`, `updateCounter`, `VIGNETTE_TEX_PATH`, `WIDGETS_TEX_PATH`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void renderGameOverlay(float partialTicks)`
- `public ScaledResolution getResolution()`
- `protected void renderCrosshairs(float partialTicks)`
- `protected void renderPotionIcons(ScaledResolution resolution)`
- `protected void renderSubtitles(ScaledResolution resolution)`
- `protected void renderBossHealth()`
- `protected void renderVignette(float lightLevel,  ScaledResolution scaledRes)`
- `protected void renderArmor(int width,  int height)`
- `protected void renderPortal(ScaledResolution res,  float partialTicks)`
- `protected void renderHotbar(ScaledResolution res,  float partialTicks)`
- `public void setOverlayMessage(ITextComponent component,  boolean animateColor)`
- `protected void renderAir(int width,  int height)`
- `public void renderHealth(int width,  int height)`
- `public void renderFood(int width,  int height)`
- `protected void renderSleepFade(int width,  int height)`
- `protected void renderExperience(int width,  int height)`
- `protected void renderJumpBar(int width,  int height)`
- `protected void renderToolHighlight(ScaledResolution res)`
- `protected void renderHUDText(int width,  int height)`
- `protected void renderFPSGraph()`
- `protected void renderRecordOverlay(int width,  int height,  float partialTicks)`
- `protected void renderTitle(int width,  int height,  float partialTicks)`
- `protected void renderChat(int width,  int height)`
- `protected void renderPlayerList(int width,  int height)`
- `protected void renderHealthMount(int width,  int height)`

### Inherited methods
- from `net.minecraft.client.gui.GuiIngame`: `addChatMessage`, `displayTitle`, `getBossOverlay`, `getChatGUI`, `getFontRenderer`, `getSpectatorGui`, `getTabList`, `getUpdateCounter`, `renderAttackIndicator`, `renderDemo`, `renderExpBar`, `renderHorseJumpBar`, `renderHotbarItem`, `renderMountHealth`, `renderPlayerStats`, `renderPortal`, `renderPotionEffects`, `renderPumpkinOverlay`, `renderScoreboard`, `renderSelectedItem`, `resetPlayersOverlayFooterHeader`, `setDefaultTitlesTimes`, `setOverlayMessage`, `setRecordPlayingMessage`, `updateTick`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## IClientCommand

*interface* `net.minecraftforge.client.IClientCommand`

Client-side commands can implement this interface to allow additional control over when the command may be used.

All Superinterfaces: java.lang.Comparable<ICommand>, ICommand

### Methods
- `boolean allowUsageWithoutPrefix(ICommandSender sender,  java.lang.String message)`
  Determine whether this command can be used without the "/" prefix. By default this is true.
  - param: sender - the command sender
  - param: message - the message, without potential prefix
  - returns: true to allow the usage of this command without the prefix

### Inherited methods
- from `net.minecraft.command.ICommand`: `checkPermission`, `execute`, `getAliases`, `getName`, `getTabCompletions`, `getUsage`, `isUsernameIndex`
- from `java.lang.Comparable`: `compareTo`

## IRenderContextHandler

*interface* `net.minecraftforge.client.IRenderContextHandler`

Deprecated.
TODO remove in 1.13. This has never been used

### Methods
- `void beforeRenderContext()` (deprecated)
  Deprecated.
  Run before the specified rendering context.
- `void afterRenderContext()` (deprecated)
  Deprecated.
  Run after the specified rendering context.

## IRenderHandler

*class* `net.minecraftforge.client.IRenderHandler`

### Methods
- `public abstract void render(float partialTicks,  WorldClient world,  Minecraft mc)`

## ItemModelMesherForge

*class* `net.minecraftforge.client.ItemModelMesherForge`

Wrapper around ItemModeMesher that cleans up the internal maps to respect ID remapping.

### Inherited fields
- from `net.minecraft.client.renderer.ItemModelMesher`: `shapers`

### Methods
- `protected IBakedModel getItemModel(Item item,  int meta)`
- `public void register(Item item,  int meta,  ModelResourceLocation location)`
- `public void rebuildCache()`
- `public ModelResourceLocation getLocation(ItemStack stack)`

### Inherited methods
- from `net.minecraft.client.renderer.ItemModelMesher`: `getItemModel`, `getMetadata`, `getModelManager`, `getParticleIcon`, `getParticleIcon`, `register`

## MinecraftForgeClient

*class* `net.minecraftforge.client.MinecraftForgeClient`

### Methods
- `public static int getRenderPass()`
- `public static BlockRenderLayer getRenderLayer()`
- `public static java.util.Locale getLocale()`
  returns the Locale set by the player in Minecraft.
   Useful for creating string and number formatters.
- `public static int reserveStencilBit()`
  Reserve a stencil bit for use in rendering
  
   Note: you must check the Framebuffer you are working with to
   determine if stencil bits are enabled on it before use.
  - returns: A bit or -1 if no further stencil bits are available
- `public static void releaseStencilBit(int bit)`
  Release the stencil bit for other use
  - param: bit - The bit from reserveStencilBit()
- `public static void onRebuildChunk(World world,  BlockPos position,  ChunkCache cache)`
- `public static ChunkCache getRegionRenderCache(World world,  BlockPos pos)`
- `public static void clearRenderCache()`
- `public static void registerImageLayerSupplier(ResourceLocation resourceLocation,  java.util.function.Supplier<java.awt.image.BufferedImage> supplier)`
- `public static java.awt.image.BufferedImage getImageLayer(ResourceLocation resourceLocation,  IResourceManager resourceManager)  throws java.io.IOException`
  - throws: java.io.IOException
