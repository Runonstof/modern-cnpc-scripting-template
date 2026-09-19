# net.minecraftforge.fml.loading

- [BackgroundWaiter](#backgroundwaiter)
- [Class FMLConfig.ConfigValue](#class-fmlconfig.configvalue)
- [Class FMLPaths](#class-fmlpaths)
- [ClasspathLocatorUtils](#classpathlocatorutils)
- [ClasspathTransformerDiscoverer](#classpathtransformerdiscoverer)
- [EarlyLoadingException](#earlyloadingexception)
- [EarlyLoadingException.ExceptionData](#earlyloadingexception.exceptiondata)
- [FMLConfig](#fmlconfig)
- [FMLEnvironment](#fmlenvironment)
- [FMLEnvironment.Keys](#fmlenvironment.keys)
- [FMLLoader](#fmlloader)
- [FMLServiceProvider](#fmlserviceprovider)
- [ImmediateWindowHandler](#immediatewindowhandler)
- [ImmediateWindowHandler.DummyProvider](#immediatewindowhandler.dummyprovider)
- [ImmediateWindowProvider](#immediatewindowprovider)
- [JarVersionLookupHandler](#jarversionlookuphandler)
- [LanguageLoadingProvider](#languageloadingprovider)
- [LanguageLoadingProvider.ModLanguageWrapper](#languageloadingprovider.modlanguagewrapper)
- [LauncherVersion](#launcherversion)
- [LibraryFinder](#libraryfinder)
- [LoadingModList](#loadingmodlist)
- [LogMarkers](#logmarkers)
- [MavenCoordinateResolver](#mavencoordinateresolver)
- [MCPNamingService](#mcpnamingservice)
- [ModDirTransformerDiscoverer](#moddirtransformerdiscoverer)
- [ModSorter](#modsorter)
- [RuntimeDistCleaner](#runtimedistcleaner)
- [RuntimeDistCleaner.LambdaGatherer](#runtimedistcleaner.lambdagatherer)
- [StringSubstitutor](#stringsubstitutor)
- [StringUtils](#stringutils)
- [TracingPrintStream](#tracingprintstream)
- [UniqueModListBuilder](#uniquemodlistbuilder)
- [UniqueModListBuilder.UniqueModListData](#uniquemodlistbuilder.uniquemodlistdata)
- [VersionInfo](#versioninfo)
- [VersionSupportMatrix](#versionsupportmatrix)
## BackgroundWaiter

*class* `net.minecraftforge.fml.loading.BackgroundWaiter`

### Fields
- `private static ExecutorService runner`

### Methods
- `public static void runAndTick(Runnable r,  Runnable tick)`

## Class FMLConfig.ConfigValue

*enum* `net.minecraftforge.fml.loading.Class FMLConfig.ConfigValue`

Enclosing class: FMLConfig

### Fields
- `private final String entry`
- `private final Object defaultValue`
- `private final String comment`
- `private final Function<Object,Object> entryFunction`

### Methods
- `public static FMLConfig.ConfigValue[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static FMLConfig.ConfigValue valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `void buildConfigEntry(com.electronwill.nightconfig.core.ConfigSpec spec,  com.electronwill.nightconfig.core.CommentedConfig commentedConfig)`
- `private <T> T getConfigValue(com.electronwill.nightconfig.core.file.CommentedFileConfig config)`
- `public <T> void updateValue(com.electronwill.nightconfig.core.file.CommentedFileConfig configData,  T value)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class FMLPaths

*enum* `net.minecraftforge.fml.loading.Class FMLPaths`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Path relativePath`
- `private final boolean isDirectory`
- `private Path absolutePath`

### Methods
- `public static FMLPaths[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static FMLPaths valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `private Path computePath(String... path)`
- `public static void setup(cpw.mods.modlauncher.api.IEnvironment env)`
- `public static void loadAbsolutePaths(Path rootPath)`
- `public static Path getOrCreateGameRelativePath(Path path)`
- `public Path relative()`
- `public Path get()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ClasspathLocatorUtils

*class* `net.minecraftforge.fml.loading.ClasspathLocatorUtils`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Methods
- `public static Path findJarPathFor(String resourceName,  String jarName,  URL resource)`

## ClasspathTransformerDiscoverer

*class* `net.minecraftforge.fml.loading.ClasspathTransformerDiscoverer`

### Fields
- `private final List<Path> legacyClasspath`
- `private static final List<cpw.mods.modlauncher.api.NamedPath> found`

### Methods
- `public List<cpw.mods.modlauncher.api.NamedPath> candidates(Path gameDirectory)`
- `public List<cpw.mods.modlauncher.api.NamedPath> candidates(Path gameDirectory,  String launchTarget)`
- `public static List<Path> allExcluded()`
- `private void scan(Path gameDirectory)`
- `private void locateTransformers(String resource)  throws IOException`
  - throws: IOException

### Inherited methods
- from `cpw.mods.modlauncher.serviceapi.ITransformerDiscoveryService`: `earlyInitialization`

## EarlyLoadingException

*class* `net.minecraftforge.fml.loading.EarlyLoadingException`

Thrown during early loading phase, and collected by the LoadingModList for handoff to the client
 or server.

### Fields
- `private static final long serialVersionUID` (= 2302192216172508006L)
- `private final List<EarlyLoadingException.ExceptionData> errorMessages`

### Methods
- `public List<EarlyLoadingException.ExceptionData> getAllData()`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## EarlyLoadingException.ExceptionData

*class* `net.minecraftforge.fml.loading.EarlyLoadingException.ExceptionData`

Enclosing class: EarlyLoadingException

### Fields
- `private final net.minecraftforge.forgespi.language.IModInfo modInfo`
- `private final String i18message`
- `private final Object[] args`

### Methods
- `public String getI18message()`
- `public Object[] getArgs()`
- `public net.minecraftforge.forgespi.language.IModInfo getModInfo()`

## FMLConfig

*class* `net.minecraftforge.fml.loading.FMLConfig`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final FMLConfig INSTANCE`
- `private static final com.electronwill.nightconfig.core.ConfigSpec configSpec`
- `private static final com.electronwill.nightconfig.core.CommentedConfig configComments`
- `private com.electronwill.nightconfig.core.file.CommentedFileConfig configData`

### Methods
- `private static Object maxThreads(Object value)`
- `private void loadFrom(Path configFile)`
- `public static void load()`
- `public static String getConfigValue(FMLConfig.ConfigValue v)`
- `public static boolean getBoolConfigValue(FMLConfig.ConfigValue v)`
- `public static int getIntConfigValue(FMLConfig.ConfigValue v)`
- `public static <A> List<A> getListConfigValue(FMLConfig.ConfigValue v)`
- `public static <T> void updateConfig(FMLConfig.ConfigValue v,  T value)`
- `public static String defaultConfigPath()`

## FMLEnvironment

*class* `net.minecraftforge.fml.loading.FMLEnvironment`

### Fields
- `public static final net.minecraftforge.api.distmarker.Dist dist`
- `public static final String naming`
- `public static final boolean production`
- `public static final boolean secureJarsEnabled`

### Methods
- `static void setupInteropEnvironment(cpw.mods.modlauncher.api.IEnvironment environment)`

## FMLEnvironment.Keys

*class* `net.minecraftforge.fml.loading.FMLEnvironment.Keys`

Enclosing class: FMLEnvironment

### Fields
- `public static final Supplier<cpw.mods.modlauncher.api.TypesafeMap.Key<ClassLoader>> LOCATORCLASSLOADER`

## FMLLoader

*class* `net.minecraftforge.fml.loading.FMLLoader`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static net.minecraftforge.accesstransformer.service.AccessTransformerService accessTransformer`
- `private static ModDiscoverer modDiscoverer`
- `private static net.minecraftforge.forgespi.coremod.ICoreModProvider coreModProvider`
- `private static cpw.mods.modlauncher.serviceapi.ILaunchPluginService eventBus`
- `private static LanguageLoadingProvider languageLoadingProvider`
- `private static net.minecraftforge.api.distmarker.Dist dist`
- `private static String naming`
- `private static LoadingModList loadingModList`
- `private static RuntimeDistCleaner runtimeDistCleaner`
- `private static Path gamePath`
- `private static VersionInfo versionInfo`
- `private static String launchHandlerName`
- `private static CommonLaunchHandler commonLaunchHandler`
- `public static Runnable progressWindowTick`
- `private static ModValidator modValidator`
- `public static BackgroundScanHandler backgroundScanHandler`
- `private static boolean production`
- `private static cpw.mods.modlauncher.api.IModuleLayerManager moduleLayerManager`

### Methods
- `static void onInitialLoad(cpw.mods.modlauncher.api.IEnvironment environment,  Set<String> otherServices)  throws cpw.mods.modlauncher.api.IncompatibleEnvironmentException`
  - throws: cpw.mods.modlauncher.api.IncompatibleEnvironmentException
- `static void setupLaunchHandler(cpw.mods.modlauncher.api.IEnvironment environment,  Map<String,Object> arguments)`
- `public static List<cpw.mods.modlauncher.api.ITransformationService.Resource> beginModScan(Map<String,?> arguments)`
- `public static List<cpw.mods.modlauncher.api.ITransformationService.Resource> completeScan(cpw.mods.modlauncher.api.IModuleLayerManager layerManager)`
- `public static net.minecraftforge.forgespi.coremod.ICoreModProvider getCoreModProvider()`
- `public static LanguageLoadingProvider getLanguageLoadingProvider()`
- `static ModDiscoverer getModDiscoverer()`
- `public static CommonLaunchHandler getLaunchHandler()`
- `public static void addAccessTransformer(Path atPath,  ModFile modName)`
- `public static net.minecraftforge.api.distmarker.Dist getDist()`
- `public static void beforeStart(ModuleLayer gameLayer)`
- `public static LoadingModList getLoadingModList()`
- `public static Path getGamePath()`
- `public static String getNaming()`
- `public static Optional<BiFunction<cpw.mods.modlauncher.api.INameMappingService.Domain,String,String>> getNameFunction(String naming)`
- `public static String getLauncherInfo()`
- `public static List<Map<String,String>> modLauncherModList()`
- `public static String launcherHandlerName()`
- `public static boolean isProduction()`
- `public static boolean isSecureJarEnabled()`
- `public static ModuleLayer getGameLayer()`
- `public static VersionInfo versionInfo()`

## FMLServiceProvider

*class* `net.minecraftforge.fml.loading.FMLServiceProvider`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private joptsimple.ArgumentAcceptingOptionSpec<String> modsOption`
- `private joptsimple.ArgumentAcceptingOptionSpec<String> modListsOption`
- `private joptsimple.ArgumentAcceptingOptionSpec<String> mavenRootsOption`
- `private joptsimple.ArgumentAcceptingOptionSpec<String> forgeOption`
- `private joptsimple.ArgumentAcceptingOptionSpec<String> mcOption`
- `private joptsimple.ArgumentAcceptingOptionSpec<String> forgeGroupOption`
- `private joptsimple.ArgumentAcceptingOptionSpec<String> mcpOption`
- `private joptsimple.ArgumentAcceptingOptionSpec<String> mappingsOption`
- `private List<String> modsArgumentList`
- `private List<String> modListsArgumentList`
- `private List<String> mavenRootsArgumentList`
- `private String targetForgeVersion`
- `private String targetMcVersion`
- `private String targetMcpVersion`
- `private String targetMcpMappings`
- `private String targetForgeGroup`
- `private Map<String,Object> arguments`

### Methods
- `public String name()`
- `public void initialize(cpw.mods.modlauncher.api.IEnvironment environment)`
- `public List<cpw.mods.modlauncher.api.ITransformationService.Resource> beginScanning(cpw.mods.modlauncher.api.IEnvironment environment)`
- `public List<cpw.mods.modlauncher.api.ITransformationService.Resource> completeScan(cpw.mods.modlauncher.api.IModuleLayerManager layerManager)`
- `public void onLoad(cpw.mods.modlauncher.api.IEnvironment environment,  Set<String> otherServices)  throws cpw.mods.modlauncher.api.IncompatibleEnvironmentException`
  - throws: cpw.mods.modlauncher.api.IncompatibleEnvironmentException
- `public void arguments(BiFunction<String,String,joptsimple.OptionSpecBuilder> argumentBuilder)`
- `public void argumentValues(cpw.mods.modlauncher.api.ITransformationService.OptionResult option)`
- `@NotNull public @NotNull List<cpw.mods.modlauncher.api.ITransformer> transformers()`

### Inherited methods
- from `cpw.mods.modlauncher.api.ITransformationService`: `additionalClassesLocator`, `additionalResourcesLocator`

## ImmediateWindowHandler

*class* `net.minecraftforge.fml.loading.ImmediateWindowHandler`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static ImmediateWindowProvider provider`
- `private static ProgressMeter earlyProgress`

### Methods
- `public static void load(String launchTarget,  String[] arguments)`
- `public static long setupMinecraftWindow(IntSupplier width,  IntSupplier height,  Supplier<String> title,  LongSupplier monitor)`
- `public static boolean positionWindow(Optional<Object> monitor,  IntConsumer widthSetter,  IntConsumer heightSetter,  IntConsumer xSetter,  IntConsumer ySetter)`
- `public static void updateFBSize(IntConsumer width,  IntConsumer height)`
- `public static <T> Supplier<T> loadingOverlay(Supplier<?> mc,  Supplier<?> ri,  Consumer<Optional<Throwable>> ex,  boolean fade)`
- `public static void acceptGameLayer(ModuleLayer layer)`
- `public static void renderTick()`
- `public static String getGLVersion()`
- `public static void updateProgress(String message)`

## ImmediateWindowHandler.DummyProvider

*record* `net.minecraftforge.fml.loading.ImmediateWindowHandler.DummyProvider`

Enclosing class: ImmediateWindowHandler

### Fields
- `private static Method NV_HANDOFF`
- `private static Method NV_POSITION`
- `private static Method NV_OVERLAY`
- `private static Method NV_VERSION`

### Methods
- `public String name()`
  - returns: The name of this window provider. Do NOT use fmlearlywindow.
- `public Runnable initialize(String[] args)`
  Description copied from interface: ImmediateWindowProvider
  This is called very early on to initialize ourselves. Use this to initialize the window and other GL core resources.
  
   One thing we want to ensure is that we try and create the highest GL_PROFILE we can accomplish.
   GLFW_CONTEXT_VERSION_MAJOR,GLFW_CONTEXT_VERSION_MINOR should be as high as possible on the created window,
   and it should have all the typical profile settings.
  - param: args - The arguments provided to the Java process. This is the entire command line, so you can process
 stuff from it.
  - returns: A runnable that will be periodically ticked by FML during startup ON THE MAIN THREAD. This is usually
 a good place to put glfwPollEvents() tests.
- `public void updateFramebufferSize(IntConsumer width,  IntConsumer height)`
  Description copied from interface: ImmediateWindowProvider
  This will be called during the handoff to minecraft to update minecraft with the size of the framebuffer we have.
   Generally won't be called because Minecraft figures it out for itself.
  - param: width - Consumer of the framebuffer width
  - param: height - Consumer of the framebuffer height
- `public long setupMinecraftWindow(IntSupplier width,  IntSupplier height,  Supplier<String> title,  LongSupplier monitor)`
  Description copied from interface: ImmediateWindowProvider
  This is called to setup the minecraft window, as if Mojang had done it themselves in their Window class. This
   handoff is difficult to get right - you have to make sure that any activities you're doing to the window are finished
   prior to returning. You should try and setup the width and height as Mojang expects - the suppliers give you all that
   information. Alternatively, you can force Mojang to update from the current position of the window in ImmediateWindowProvider.positionWindow(Optional, IntConsumer, IntConsumer, IntConsumer, IntConsumer)
   instead. This might give a more seamless experience.
  - param: width - This is the width of the window Mojang expects
  - param: height - This is the height of the Window Mojang expects.
  - param: title - This is the title for the window.
  - param: monitor - This is the monitor it should appear on.
  - returns: The window id
- `public boolean positionWindow(Optional<Object> monitor,  IntConsumer widthSetter,  IntConsumer heightSetter,  IntConsumer xSetter,  IntConsumer ySetter)`
  Description copied from interface: ImmediateWindowProvider
  This is called after window handoff to allow us to tell Mojang about our window's position. This might give a
   preferrable user experience to users, because we just tell Mojang our truth, rather than accept theirs.
  - param: monitor - This is the monitor we're rendering on. Note that this is the Mojang monitor object. You might have trouble unwrapping it.
  - param: widthSetter - This sets the width on the Mojang side
  - param: heightSetter - This sets the height on the Mojang side
  - param: xSetter - This sets the x coordinate on the Mojang side
  - param: ySetter - This sets the y coordinate on the Mojang side
  - returns: true if you've handled the window positioning - this skips the "forced fullscreen" code until a later stage
- `public <T> Supplier<T> loadingOverlay(Supplier<?> mc,  Supplier<?> ri,  Consumer<Optional<Throwable>> ex,  boolean fade)`
  Description copied from interface: ImmediateWindowProvider
  Return a Supplier of an object extending the LoadingOverlay class from Mojang. This is what will be used once
   the Mojang window code has taken over rendering of the window, to render the later stages of the loading process.
  - param: mc - This supplies the Minecraft object
  - param: ri - This supplies the ReloadInstance object that tells us when the loading is finished
  - param: ex - This Consumes the final state of the loading - if it's an error you pass it the Throwable, otherwise you
 pass Optional.empty()
  - param: fade - This is the fade flag passed to LoadingOverlay. You probably want to ignore it.
  - returns: A supplier of your later LoadingOverlay screen.
- `public String getGLVersion()`
  Description copied from interface: ImmediateWindowProvider
  This is called to construct a ForgeFeature for the GL_VERSION we
   managed to create for the window. Should be a string of the format {MAJOR}.{MINOR}, such as 4.6, 4.5 or such.
  - returns: the GL profile we created
- `public void updateModuleReads(ModuleLayer layer)`
  Description copied from interface: ImmediateWindowProvider
  This is called during the module loading process to allow us to find objects inside the GAME layer, such as a
   later loading screen.
  - param: layer - This is the GAME layer from ModLauncher
- `public void periodicTick()`
  Description copied from interface: ImmediateWindowProvider
  This is called periodically during the loading process to "tick" the window. It is typically the same as the Runnable
   from ImmediateWindowProvider.initialize(String[])
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.

## ImmediateWindowProvider

*interface* `net.minecraftforge.fml.loading.ImmediateWindowProvider`

This is for allowing the plugging in of alternative early display implementations.

 They can be selected through the config value "earlyWindowProvider" which defaults to "fmlearlywindow" implemented by DisplayWindow

 There are a few key things to keep in mind if following through on implementation. You cannot access the game state as it
 literally DOES NOT EXIST at the time this object is constructed. You have to be very careful about managing the handoff
 to mojang, be sure that if you're trying to tick your window in a background thread (a nice idea!) that you properly
 transition to the main thread before handoff is complete. Do note that in general, you should construct your GL objects
 on the MAIN thread before starting your ticker, to ensure MacOS compatibility.

 No doubt many more things can be said here.

### Methods
- `String name()`
  - returns: The name of this window provider. Do NOT use fmlearlywindow.
- `Runnable initialize(String[] arguments)`
  This is called very early on to initialize ourselves. Use this to initialize the window and other GL core resources.
  
   One thing we want to ensure is that we try and create the highest GL_PROFILE we can accomplish.
   GLFW_CONTEXT_VERSION_MAJOR,GLFW_CONTEXT_VERSION_MINOR should be as high as possible on the created window,
   and it should have all the typical profile settings.
  - param: arguments - The arguments provided to the Java process. This is the entire command line, so you can process
 stuff from it.
  - returns: A runnable that will be periodically ticked by FML during startup ON THE MAIN THREAD. This is usually
 a good place to put glfwPollEvents() tests.
- `void updateFramebufferSize(IntConsumer width,  IntConsumer height)`
  This will be called during the handoff to minecraft to update minecraft with the size of the framebuffer we have.
   Generally won't be called because Minecraft figures it out for itself.
  - param: width - Consumer of the framebuffer width
  - param: height - Consumer of the framebuffer height
- `long setupMinecraftWindow(IntSupplier width,  IntSupplier height,  Supplier<String> title,  LongSupplier monitor)`
  This is called to setup the minecraft window, as if Mojang had done it themselves in their Window class. This
   handoff is difficult to get right - you have to make sure that any activities you're doing to the window are finished
   prior to returning. You should try and setup the width and height as Mojang expects - the suppliers give you all that
   information. Alternatively, you can force Mojang to update from the current position of the window in positionWindow(Optional, IntConsumer, IntConsumer, IntConsumer, IntConsumer)
   instead. This might give a more seamless experience.
  - param: width - This is the width of the window Mojang expects
  - param: height - This is the height of the Window Mojang expects.
  - param: title - This is the title for the window.
  - param: monitor - This is the monitor it should appear on.
  - returns: The window id
- `boolean positionWindow(Optional<Object> monitor,  IntConsumer widthSetter,  IntConsumer heightSetter,  IntConsumer xSetter,  IntConsumer ySetter)`
  This is called after window handoff to allow us to tell Mojang about our window's position. This might give a
   preferrable user experience to users, because we just tell Mojang our truth, rather than accept theirs.
  - param: monitor - This is the monitor we're rendering on. Note that this is the Mojang monitor object. You might have trouble unwrapping it.
  - param: widthSetter - This sets the width on the Mojang side
  - param: heightSetter - This sets the height on the Mojang side
  - param: xSetter - This sets the x coordinate on the Mojang side
  - param: ySetter - This sets the y coordinate on the Mojang side
  - returns: true if you've handled the window positioning - this skips the "forced fullscreen" code until a later stage
- `<T> Supplier<T> loadingOverlay(Supplier<?> mc,  Supplier<?> ri,  Consumer<Optional<Throwable>> ex,  boolean fade)`
  Return a Supplier of an object extending the LoadingOverlay class from Mojang. This is what will be used once
   the Mojang window code has taken over rendering of the window, to render the later stages of the loading process.
  - param: mc - This supplies the Minecraft object
  - param: ri - This supplies the ReloadInstance object that tells us when the loading is finished
  - param: ex - This Consumes the final state of the loading - if it's an error you pass it the Throwable, otherwise you
 pass Optional.empty()
  - param: fade - This is the fade flag passed to LoadingOverlay. You probably want to ignore it.
  - returns: A supplier of your later LoadingOverlay screen.
- `void updateModuleReads(ModuleLayer layer)`
  This is called during the module loading process to allow us to find objects inside the GAME layer, such as a
   later loading screen.
  - param: layer - This is the GAME layer from ModLauncher
- `void periodicTick()`
  This is called periodically during the loading process to "tick" the window. It is typically the same as the Runnable
   from initialize(String[])
- `String getGLVersion()`
  This is called to construct a ForgeFeature for the GL_VERSION we
   managed to create for the window. Should be a string of the format {MAJOR}.{MINOR}, such as 4.6, 4.5 or such.
  - returns: the GL profile we created

## JarVersionLookupHandler

*class* `net.minecraftforge.fml.loading.JarVersionLookupHandler`

Finds Version data from a package, with possible default values

### Methods
- `public static Optional<String> getImplementationVersion(String pkgName)`
- `public static Optional<String> getSpecificationVersion(String pkgName)`
- `public static Optional<String> getImplementationVersion(Class<?> clazz)`
- `public static Optional<String> getImplementationTitle(Class<?> clazz)`
- `public static Optional<String> getSpecificationVersion(Class<?> clazz)`

## LanguageLoadingProvider

*class* `net.minecraftforge.fml.loading.LanguageLoadingProvider`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final List<net.minecraftforge.forgespi.language.IModLanguageProvider> languageProviders`
- `private final ServiceLoader<net.minecraftforge.forgespi.language.IModLanguageProvider> serviceLoader`
- `private final Map<String,LanguageLoadingProvider.ModLanguageWrapper> languageProviderMap`
- `private List<Path> languagePaths`

### Methods
- `public void forEach(Consumer<net.minecraftforge.forgespi.language.IModLanguageProvider> consumer)`
- `public <T> Stream<T> applyForEach(Function<net.minecraftforge.forgespi.language.IModLanguageProvider,T> function)`
- `private void loadLanguageProviders()`
- `void addForgeLanguage(Path forgePath)`
- `private void addLanguagePaths(Stream<Path> langPaths)`
- `public void addAdditionalLanguages(List<ModFile> modFiles)`
- `Stream<Path> getLibraries()`
- `public net.minecraftforge.forgespi.language.IModLanguageProvider findLanguage(ModFile mf,  String modLoader,  org.apache.maven.artifact.versioning.VersionRange modLoaderVersion)`

## LanguageLoadingProvider.ModLanguageWrapper

*class* `net.minecraftforge.fml.loading.LanguageLoadingProvider.ModLanguageWrapper`

Enclosing class: LanguageLoadingProvider

### Fields
- `private final net.minecraftforge.forgespi.language.IModLanguageProvider modLanguageProvider`
- `private final org.apache.maven.artifact.versioning.ArtifactVersion version`

### Methods
- `public org.apache.maven.artifact.versioning.ArtifactVersion getVersion()`
- `public net.minecraftforge.forgespi.language.IModLanguageProvider getModLanguageProvider()`

## LauncherVersion

*class* `net.minecraftforge.fml.loading.LauncherVersion`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final String launcherVersion`

### Methods
- `public static String getVersion()`

## LibraryFinder

*class* `net.minecraftforge.fml.loading.LibraryFinder`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static Path libsPath`

### Methods
- `static Path findLibsPath()`
- `static Path getForgeLibraryPath(String mcVersion,  String forgeVersion,  String forgeGroup)`
- `static String pathStatus(Path path)`
- `static Path[] getMCPaths(String mcVersion,  String mcpVersion,  String forgeVersion,  String forgeGroup,  String type)`
- `public static Path findPathForMaven(String group,  String artifact,  String extension,  String classifier,  String version)`
- `public static Path findPathForMaven(String maven)`

## LoadingModList

*class* `net.minecraftforge.fml.loading.LoadingModList`

Master list of all mods in the loading context. This class cannot refer outside the
 loading package

### Fields
- `private static LoadingModList INSTANCE`
- `private final List<ModFileInfo> modFiles`
- `private final List<ModInfo> sortedList`
- `private final Map<String,ModFileInfo> fileById`
- `private final List<EarlyLoadingException> preLoadErrors`
- `private List<net.minecraftforge.forgespi.locating.IModFile> brokenFiles`

### Methods
- `public static LoadingModList of(List<ModFile> modFiles,  List<ModInfo> sortedList,  EarlyLoadingException earlyLoadingException)`
- `public static LoadingModList get()`
- `public void addCoreMods()`
- `public void addAccessTransformers()`
- `public void addForScanning(BackgroundScanHandler backgroundScanHandler)`
- `public List<ModFileInfo> getModFiles()`
- `public Path findResource(String className)`
- `public Enumeration<URL> findAllURLsForResource(String resName)`
- `public ModFileInfo getModFileById(String modid)`
- `public List<ModInfo> getMods()`
- `public List<EarlyLoadingException> getErrors()`
- `public void setBrokenFiles(List<net.minecraftforge.forgespi.locating.IModFile> brokenFiles)`
- `public List<net.minecraftforge.forgespi.locating.IModFile> getBrokenFiles()`

## LogMarkers

*class* `net.minecraftforge.fml.loading.LogMarkers`

### Fields
- `public static final org.slf4j.Marker CORE`
- `public static final org.slf4j.Marker LOADING`
- `public static final org.slf4j.Marker SCAN`
- `public static final org.slf4j.Marker SPLASH`

## MavenCoordinateResolver

*class* `net.minecraftforge.fml.loading.MavenCoordinateResolver`

Convert a maven coordinate into a Path.

 This is gradle standard not maven standard coordinate formatting
 <groupId>:<artifactId>[:<classifier>]:<version>[@extension], must not be null.

### Methods
- `public static Path get(String coordinate)`
- `public static Path get(String groupId,  String artifactId,  String extension,  String classifier,  String version)`

## MCPNamingService

*class* `net.minecraftforge.fml.loading.MCPNamingService`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private HashMap<String,String> methods`
- `private HashMap<String,String> fields`

### Methods
- `public String mappingName()`
- `public String mappingVersion()`
- `public Map.Entry<String,String> understanding()`
- `public BiFunction<cpw.mods.modlauncher.api.INameMappingService.Domain,String,String> namingFunction()`
- `private String findMapping(cpw.mods.modlauncher.api.INameMappingService.Domain domain,  String srgName)`
- `private String findMethodMapping(String origin)`
- `private String findFieldMapping(String origin)`
- `private static void loadMappings(String mappingFileName,  BiConsumer<String,String> mapStore)`

## ModDirTransformerDiscoverer

*class* `net.minecraftforge.fml.loading.ModDirTransformerDiscoverer`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Set<String> SERVICES`
- `private static final List<cpw.mods.modlauncher.api.NamedPath> found`

### Methods
- `public List<cpw.mods.modlauncher.api.NamedPath> candidates(Path gameDirectory,  String launchTarget)`
- `public void earlyInitialization(String launchTarget,  String[] arguments)`
- `public List<cpw.mods.modlauncher.api.NamedPath> candidates(Path gameDirectory)`
- `public static List<Path> allExcluded()`
- `private static void scan(Path gameDirectory)`
- `private static void visitFile(Path path)`

## ModSorter

*class* `net.minecraftforge.fml.loading.ModSorter`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final UniqueModListBuilder uniqueModListBuilder`
- `private List<ModFile> modFiles`
- `private List<ModInfo> sortedList`
- `private Map<String,net.minecraftforge.forgespi.language.IModInfo> modIdNameLookup`
- `private List<ModFile> systemMods`

### Methods
- `public static LoadingModList sort(List<ModFile> mods,  List<EarlyLoadingException.ExceptionData> errors)`
- `private void sort()`
- `private void addDependency(com.google.common.graph.MutableGraph<ModFileInfo> topoGraph,  net.minecraftforge.forgespi.language.IModInfo.ModVersion dep)`
- `private void buildUniqueList()`
- `private void detectSystemMods(Map<String,List<ModFile>> modFilesByFirstId)`
- `private List<EarlyLoadingException.ExceptionData> verifyDependencyVersions()`
- `private static String formatDependencyError(net.minecraftforge.forgespi.language.IModInfo.ModVersion dependency,  Map<String,org.apache.maven.artifact.versioning.ArtifactVersion> modVersions)`
- `private boolean modVersionNotContained(net.minecraftforge.forgespi.language.IModInfo.ModVersion mv,  Map<String,org.apache.maven.artifact.versioning.ArtifactVersion> modVersions)`

## RuntimeDistCleaner

*class* `net.minecraftforge.fml.loading.RuntimeDistCleaner`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final org.slf4j.Marker DISTXFORM`
- `private static String DIST`
- `private static final String ONLYIN`
- `private static final String ONLYINS`
- `private static final EnumSet<cpw.mods.modlauncher.serviceapi.ILaunchPluginService.Phase> YAY`
- `private static final EnumSet<cpw.mods.modlauncher.serviceapi.ILaunchPluginService.Phase> NAY`

### Methods
- `public String name()`
- `public int processClassWithFlags(cpw.mods.modlauncher.serviceapi.ILaunchPluginService.Phase phase,  org.objectweb.asm.tree.ClassNode classNode,  org.objectweb.asm.Type classType,  String reason)`
- `private static List<org.objectweb.asm.tree.AnnotationNode> unpack(List<org.objectweb.asm.tree.AnnotationNode> anns)`
- `private boolean remove(List<org.objectweb.asm.tree.AnnotationNode> anns,  String side)`
- `public Consumer<net.minecraftforge.api.distmarker.Dist> getExtension()`
- `public EnumSet<cpw.mods.modlauncher.serviceapi.ILaunchPluginService.Phase> handlesClass(org.objectweb.asm.Type classType,  boolean isEmpty)`

### Inherited methods
- from `cpw.mods.modlauncher.serviceapi.ILaunchPluginService`: `addResources`, `customAuditConsumer`, `handlesClass`, `initializeLaunch`, `offerResource`, `processClass`, `processClass`

## RuntimeDistCleaner.LambdaGatherer

*class* `net.minecraftforge.fml.loading.RuntimeDistCleaner.LambdaGatherer`

Enclosing class: RuntimeDistCleaner

### Fields
- `private static final org.objectweb.asm.Handle META_FACTORY`
- `private final List<org.objectweb.asm.Handle> dynamicLambdaHandles`

### Inherited fields
- from `org.objectweb.asm.MethodVisitor`: `api`, `mv`

### Methods
- `public void accept(org.objectweb.asm.tree.MethodNode method)`
- `public void visitInvokeDynamicInsn(String name,  String desc,  org.objectweb.asm.Handle bsm,  Object... bsmArgs)`
- `public List<org.objectweb.asm.Handle> getDynamicLambdaHandles()`

### Inherited methods
- from `org.objectweb.asm.MethodVisitor`: `getDelegate`, `visitAnnotableParameterCount`, `visitAnnotation`, `visitAnnotationDefault`, `visitAttribute`, `visitCode`, `visitEnd`, `visitFieldInsn`, `visitFrame`, `visitIincInsn`, `visitInsn`, `visitInsnAnnotation`, `visitIntInsn`, `visitJumpInsn`, `visitLabel`, `visitLdcInsn`, `visitLineNumber`, `visitLocalVariable`, `visitLocalVariableAnnotation`, `visitLookupSwitchInsn`, `visitMaxs`, `visitMethodInsn`, `visitMethodInsn`, `visitMultiANewArrayInsn`, `visitParameter`, `visitParameterAnnotation`, `visitTableSwitchInsn`, `visitTryCatchAnnotation`, `visitTryCatchBlock`, `visitTypeAnnotation`, `visitTypeInsn`, `visitVarInsn`

## StringSubstitutor

*class* `net.minecraftforge.fml.loading.StringSubstitutor`

### Fields
- `private static final Map<String,String> globals`

### Methods
- `public static String replace(String in,  ModFile file)`
- `private static org.apache.commons.lang3.text.StrLookup<String> getStringLookup(ModFile file)`

## StringUtils

*class* `net.minecraftforge.fml.loading.StringUtils`

### Methods
- `public static String toLowerCase(String str)`
- `public static String toUpperCase(String str)`
- `public static boolean endsWith(String search,  String... endings)`
- `public static URL toURL(String string)`
- `public static String parseStringFormat(String input,  Map<String,String> properties)`
- `public static String binToHex(byte[] bytes)`

## TracingPrintStream

*class* `net.minecraftforge.fml.loading.TracingPrintStream`

PrintStream which redirects it's output to a given logger.

### Fields
- `private static final int BASE_DEPTH` (= 4)
- `private final org.slf4j.Logger logger`

### Inherited fields
- from `java.io.FilterOutputStream`: `out`

### Methods
- `private void log(String s)`
- `private static String getPrefix()`
- `public void println(Object o)`
- `public void println(String s)`
- `public void println(boolean x)`
- `public void println(char x)`
- `public void println(int x)`
- `public void println(long x)`
- `public void println(float x)`
- `public void println(double x)`
- `public void println(char[] x)`

### Inherited methods
- from `java.io.PrintStream`: `append`, `append`, `append`, `checkError`, `clearError`, `close`, `flush`, `format`, `format`, `print`, `print`, `print`, `print`, `print`, `print`, `print`, `print`, `print`, `printf`, `printf`, `println`, `setError`, `write`, `write`, `write`, `writeBytes`
- from `java.io.OutputStream`: `nullOutputStream`

## UniqueModListBuilder

*class* `net.minecraftforge.fml.loading.UniqueModListBuilder`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final List<ModFile> modFiles`

### Methods
- `public UniqueModListBuilder.UniqueModListData buildUniqueList()`
- `private ModFile selectNewestModInfo(Map.Entry<String,List<ModFile>> fullList)`
- `private org.apache.maven.artifact.versioning.ArtifactVersion getVersion(ModFile mf)`
- `private static String getModId(ModFile modFile)`

## UniqueModListBuilder.UniqueModListData

*record* `net.minecraftforge.fml.loading.UniqueModListBuilder.UniqueModListData`

Enclosing class: UniqueModListBuilder

### Fields
- `private final List<ModFile> modFiles`
  The field for the modFiles record component.
- `private final Map<String,List<ModFile>> modFilesByFirstId`
  The field for the modFilesByFirstId record component.

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
- `public List<ModFile> modFiles()`
  Returns the value of the modFiles record component.
  - returns: the value of the modFiles record component
- `public Map<String,List<ModFile>> modFilesByFirstId()`
  Returns the value of the modFilesByFirstId record component.
  - returns: the value of the modFilesByFirstId record component

## VersionInfo

*record* `net.minecraftforge.fml.loading.VersionInfo`

### Fields
- `private final String forgeVersion`
  The field for the forgeVersion record component.
- `private final String mcVersion`
  The field for the mcVersion record component.
- `private final String mcpVersion`
  The field for the mcpVersion record component.
- `private final String forgeGroup`
  The field for the forgeGroup record component.

### Methods
- `public String mcAndForgeVersion()`
- `public String mcAndMCPVersion()`
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
- `public String forgeVersion()`
  Returns the value of the forgeVersion record component.
  - returns: the value of the forgeVersion record component
- `public String mcVersion()`
  Returns the value of the mcVersion record component.
  - returns: the value of the mcVersion record component
- `public String mcpVersion()`
  Returns the value of the mcpVersion record component.
  - returns: the value of the mcpVersion record component
- `public String forgeGroup()`
  Returns the value of the forgeGroup record component.
  - returns: the value of the forgeGroup record component

## VersionSupportMatrix

*class* `net.minecraftforge.fml.loading.VersionSupportMatrix`

### Fields
- `private static final HashMap<String,List<org.apache.maven.artifact.versioning.ArtifactVersion>> overrideVersions`

### Methods
- `private static void add(String key,  String value)`
- `public static <T> boolean testVersionSupportMatrix(org.apache.maven.artifact.versioning.VersionRange declaredRange,  String lookupId,  String type,  BiPredicate<String,org.apache.maven.artifact.versioning.VersionRange> standardLookup)`
