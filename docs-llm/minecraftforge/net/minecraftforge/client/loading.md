# net.minecraftforge.client.loading

- [ClientModLoader](#clientmodloader)
- [ForgeLoadingOverlay](#forgeloadingoverlay)
- [NoVizFallback](#novizfallback)
## ClientModLoader

*class* `net.minecraftforge.client.loading.ClientModLoader`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static boolean loading`
- `private static Minecraft mc`
- `private static boolean loadingComplete`
- `private static LoadingFailedException error`

### Methods
- `public static void begin(Minecraft minecraft,  PackRepository defaultResourcePacks,  ReloadableResourceManager mcResourceManager)`
- `private static CompletableFuture<Void> onResourceReload(PreparableReloadListener.PreparationBarrier stage,  ResourceManager resourceManager,  ProfilerFiller prepareProfiler,  ProfilerFiller executeProfiler,  Executor asyncExecutor,  Executor syncExecutor)`
- `private static Runnable createRunnableWithCatch(Runnable r)`
- `private static void startModLoading(ModWorkManager.DrivenExecutor syncExecutor,  Executor parallelExecutor)`
- `private static void finishModLoading(ModWorkManager.DrivenExecutor syncExecutor,  Executor parallelExecutor)`
- `public static VersionChecker.Status checkForUpdates()`
- `public static boolean completeModLoading()`
- `public static boolean isLoading()`
- `private static RepositorySource buildPackFinder(Map<net.minecraftforge.forgespi.locating.IModFile,? extends PathPackResources> modResourcePacks)`
- `private static void clientPackFinder(Map<net.minecraftforge.forgespi.locating.IModFile,? extends PathPackResources> modResourcePacks,  Consumer<Pack> packAcceptor)`

## ForgeLoadingOverlay

*class* `net.minecraftforge.client.loading.ForgeLoadingOverlay`

This is an implementation of the LoadingOverlay that calls back into the early window rendering, as part of the
 game loading cycle. We completely replace the render(GuiGraphics, int, int, float) call from the parent
 with one of our own, that allows us to blend our early loading screen into the main window, in the same manner as
 the Mojang screen. It also allows us to see and tick appropriately as the later stages of the loading system run.

 It is somewhat a copy of the superclass render method.

### Fields
- `private final Minecraft minecraft`
- `private final ReloadInstance reload`
- `private final Consumer<Optional<Throwable>> onFinish`
- `private final DisplayWindow displayWindow`
- `private final ProgressMeter progress`
- `private long fadeOutStart`

### Inherited fields
- from `net.minecraft.client.gui.screens.LoadingOverlay`: `FADE_IN_TIME`, `FADE_OUT_TIME`

### Methods
- `public static Supplier<LoadingOverlay> newInstance(Supplier<Minecraft> mc,  Supplier<ReloadInstance> ri,  Consumer<Optional<Throwable>> handler,  DisplayWindow window)`
- `public void render(@NotNull  @NotNull GuiGraphics graphics,  int mouseX,  int mouseY,  float partialTick)`
- `private static void addQuad(BufferVertexConsumer bufferbuilder,  float x0,  float x1,  float y0,  float y1,  ColourScheme.Colour colour,  float fade)`

### Inherited methods
- from `net.minecraft.client.gui.screens.LoadingOverlay`: `isPauseScreen`, `registerTextures`

## NoVizFallback

*class* `net.minecraftforge.client.loading.NoVizFallback`

### Fields
- `private static long WINDOW`

### Methods
- `public static LongSupplier windowHandoff(IntSupplier width,  IntSupplier height,  Supplier<String> title,  LongSupplier monitor)`
- `public static Supplier<LoadingOverlay> loadingOverlay(Supplier<Minecraft> mc,  Supplier<ReloadInstance> ri,  Consumer<Optional<Throwable>> ex,  boolean fadein)`
- `public static Boolean windowPositioning(Optional<Monitor> monitor,  IntConsumer widthSetter,  IntConsumer heightSetter,  IntConsumer xSetter,  IntConsumer ySetter)`
- `public static String glVersion()`
