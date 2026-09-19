# net.minecraft.client

- [AnvilConverterException](#anvilconverterexception)
- [ClientBrandRetriever](#clientbrandretriever)
- [LoadingScreenRenderer](#loadingscreenrenderer)
- [Minecraft](#minecraft)
## AnvilConverterException

*class* `net.minecraft.client.AnvilConverterException`

All Implemented Interfaces: java.io.Serializable

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ClientBrandRetriever

*class* `net.minecraft.client.ClientBrandRetriever`

### Methods
- `public static java.lang.String getClientModName()`

## LoadingScreenRenderer

*class* `net.minecraft.client.LoadingScreenRenderer`

All Implemented Interfaces: IProgressUpdate

### Methods
- `public void resetProgressAndMessage(java.lang.String message)`
- `public void displaySavingString(java.lang.String message)`
- `public void displayLoadingString(java.lang.String message)`
- `public void setLoadingProgress(int progress)`
- `public void setDoneWorking()`

## Minecraft

*class* `net.minecraft.client.Minecraft`

All Implemented Interfaces: ISnooperInfo, IThreadListener

### Fields
- `public static final boolean IS_RUNNING_ON_MAC`
- `public static byte[] memoryReserve`
- `public TextureManager renderEngine`
- `public PlayerControllerMP playerController`
- `public int displayWidth`
- `public int displayHeight`
- `public WorldClient world`
- `public RenderGlobal renderGlobal`
- `public EntityPlayerSP player`
- `public Entity pointedEntity`
- `public ParticleManager effectRenderer`
- `public FontRenderer fontRenderer`
- `public FontRenderer standardGalacticFontRenderer`
- `public GuiScreen currentScreen`
- `public LoadingScreenRenderer loadingScreen`
- `public EntityRenderer entityRenderer`
- `public DebugRenderer debugRenderer`
- `public GuiIngame ingameGUI`
- `public boolean skipRenderWorld`
- `public RayTraceResult objectMouseOver`
- `public GameSettings gameSettings`
- `public CreativeSettings creativeSettings`
- `public MouseHelper mouseHelper`
- `public final java.io.File mcDataDir`
- `public boolean inGameHasFocus`
- `public final FrameTimer frameTimer`
- `public final Profiler mcProfiler`
- `public final DefaultResourcePack mcDefaultResourcePack`
- `public java.lang.String debug`
- `public boolean renderChunksMany`

### Methods
- `public void run()`
- `public void populateSearchTreeManager()`
- `public Framebuffer getFramebuffer()`
- `public java.lang.String getVersion()`
- `public java.lang.String getVersionType()`
- `public void crashed(CrashReport crash)`
- `public void displayCrashReport(CrashReport crashReportIn)`
- `public boolean isUnicode()`
- `@Deprecated public void refreshResources()` (deprecated)
  Deprecated.
- `public void drawSplashScreen(TextureManager textureManagerInstance)  throws LWJGLException`
  - throws: LWJGLException
- `public void draw(int posX,  int posY,  int texU,  int texV,  int width,  int height,  int red,  int green,  int blue,  int alpha)`
- `public ISaveFormat getSaveLoader()`
- `public void displayGuiScreen(GuiScreen guiScreenIn)`
- `public void shutdownMinecraftApplet()`
- `public void updateDisplay()`
- `protected void checkWindowResize()`
- `public int getLimitFramerate()`
- `public boolean isFramerateLimitBelowMax()`
- `public void freeMemory()`
- `public void shutdown()`
- `public void setIngameFocus()`
- `public void setIngameNotInFocus()`
- `public void displayInGameMenu()`
- `public void toggleFullscreen()`
- `public void resize(int width,  int height)`
- `public MusicTicker getMusicTicker()`
- `public void runTick()  throws java.io.IOException`
  - throws: java.io.IOException
- `public void launchIntegratedServer(java.lang.String folderName,  java.lang.String worldName,  WorldSettings worldSettingsIn)`
- `public void loadWorld(WorldClient worldClientIn)`
- `public void loadWorld(WorldClient worldClientIn,  java.lang.String loadingMessage)`
- `public void setDimensionAndSpawnPlayer(int dimension)`
- `public final boolean isDemo()`
- `public NetHandlerPlayClient getConnection()`
- `public static boolean isGuiEnabled()`
- `public static boolean isFancyGraphicsEnabled()`
- `public static boolean isAmbientOcclusionEnabled()`
- `public ItemStack storeTEInStack(ItemStack stack,  TileEntity te)`
- `public CrashReport addGraphicsAndWorldToCrashReport(CrashReport theCrash)`
- `public static Minecraft getMinecraft()`
- `@Deprecated public <any> scheduleResourcesRefresh()` (deprecated)
  Deprecated.
- `public void addServerStatsToSnooper(Snooper playerSnooper)`
- `public void addServerTypeToSnooper(Snooper playerSnooper)`
- `public static int getGLMaximumTextureSize()`
- `public boolean isSnooperEnabled()`
- `public void setServerData(ServerData serverDataIn)`
- `public ServerData getCurrentServerData()`
- `public boolean isIntegratedServerRunning()`
- `public boolean isSingleplayer()`
- `public IntegratedServer getIntegratedServer()`
- `public static void stopIntegratedServer()`
- `public Snooper getPlayerUsageSnooper()`
- `public static long getSystemTime()`
- `public boolean isFullScreen()`
- `public Session getSession()`
- `public PropertyMap getProfileProperties()`
- `public java.net.Proxy getProxy()`
- `public TextureManager getTextureManager()`
- `public IResourceManager getResourceManager()`
- `public ResourcePackRepository getResourcePackRepository()`
- `public LanguageManager getLanguageManager()`
- `public TextureMap getTextureMapBlocks()`
- `public boolean isJava64bit()`
- `public boolean isGamePaused()`
- `public SoundHandler getSoundHandler()`
- `public MusicTicker.MusicType getAmbientMusicType()`
- `public void dispatchKeypresses()`
- `public MinecraftSessionService getSessionService()`
- `public SkinManager getSkinManager()`
- `public Entity getRenderViewEntity()`
- `public void setRenderViewEntity(Entity viewingEntity)`
- `public <V> <any> addScheduledTask(java.util.concurrent.Callable<V> callableToSchedule)`
- `public <any> addScheduledTask(java.lang.Runnable runnableToSchedule)`
- `public boolean isCallingFromMinecraftThread()`
- `public BlockRendererDispatcher getBlockRendererDispatcher()`
- `public RenderManager getRenderManager()`
- `public RenderItem getRenderItem()`
- `public ItemRenderer getItemRenderer()`
- `public <T> ISearchTree<T> getSearchTree(SearchTreeManager.Key<T> key)`
- `public static int getDebugFPS()`
- `public FrameTimer getFrameTimer()`
- `public boolean isConnectedToRealms()`
- `public void setConnectedToRealms(boolean isConnected)`
- `public DataFixer getDataFixer()`
- `public float getRenderPartialTicks()`
- `public float getTickLength()`
- `public BlockColors getBlockColors()`
- `public ItemColors getItemColors()`
- `public boolean isReducedDebug()`
- `public GuiToast getToastGui()`
- `public Tutorial getTutorial()`
- `public SearchTreeManager getSearchTreeManager()`
