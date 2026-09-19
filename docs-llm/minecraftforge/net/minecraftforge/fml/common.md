# net.minecraftforge.fml.common

- [API](#api)
- [AutomaticEventSubscriber](#automaticeventsubscriber)
- [CertificateHelper](#certificatehelper)
- [ClassNameUtils](#classnameutils)
- [DummyModContainer](#dummymodcontainer)
- [DuplicateModsFoundException](#duplicatemodsfoundexception)
- [EnhancedRuntimeException](#enhancedruntimeexception)
- [EnhancedRuntimeException.WrappedPrintStream](#enhancedruntimeexception.wrappedprintstream)
- [FMLCommonHandler](#fmlcommonhandler)
- [FMLContainer](#fmlcontainer)
- [FMLContainerHolder](#fmlcontainerholder)
- [FMLLog](#fmllog)
- [FMLModContainer](#fmlmodcontainer)
- [ICrashCallable](#icrashcallable)
- [IEntitySelectorFactory](#ientityselectorfactory)
- [IFMLHandledException](#ifmlhandledexception)
- [IFMLSidedHandler](#ifmlsidedhandler)
- [IFuelHandler](#ifuelhandler)
- [ILanguageAdapter](#ilanguageadapter)
- [ILanguageAdapter.JavaAdapter](#ilanguageadapter.javaadapter)
- [ILanguageAdapter.ScalaAdapter](#ilanguageadapter.scalaadapter)
- [InjectedModContainer](#injectedmodcontainer)
- [IWorldGenerator](#iworldgenerator)
- [LoadController](#loadcontroller)
- [Loader](#loader)
- [LoaderException](#loaderexception)
- [LoaderExceptionModCrash](#loaderexceptionmodcrash)
- [LoaderState](#loaderstate)
- [LoaderState.ModState](#loaderstate.modstate)
- [MCPDummyContainer](#mcpdummycontainer)
- [MetadataCollection](#metadatacollection)
- [MetadataCollection.ArtifactVersionAdapter](#metadatacollection.artifactversionadapter)
- [MinecraftDummyContainer](#minecraftdummycontainer)
- [MissingModsException](#missingmodsexception)
- [MissingModsException.MissingModInfo](#missingmodsexception.missingmodinfo)
- [Mod](#mod)
- [Mod.CustomProperty](#mod.customproperty)
- [Mod.EventBusSubscriber](#mod.eventbussubscriber)
- [Mod.EventHandler](#mod.eventhandler)
- [Mod.Instance](#mod.instance)
- [Mod.InstanceFactory](#mod.instancefactory)
- [Mod.Metadata](#mod.metadata)
- [ModAPIManager](#modapimanager)
- [ModClassLoader](#modclassloader)
- [ModContainer](#modcontainer)
- [ModContainer.Disableable](#modcontainer.disableable)
- [ModContainerFactory](#modcontainerfactory)
- [ModMetadata](#modmetadata)
- [MultipleModsErrored](#multiplemodserrored)
- [ObfuscationReflectionHelper](#obfuscationreflectionhelper)
- [Optional](#optional)
- [Optional.Interface](#optional.interface)
- [Optional.InterfaceList](#optional.interfacelist)
- [Optional.Method](#optional.method)
- [ProgressManager](#progressmanager)
- [ProgressManager.ProgressBar](#progressmanager.progressbar)
- [ProxyInjector](#proxyinjector)
- [SaveInspectionHandler](#saveinspectionhandler)
- [SidedProxy](#sidedproxy)
- [StartupQuery](#startupquery)
- [StartupQuery.AbortedException](#startupquery.abortedexception)
- [TracingPrintStream](#tracingprintstream)
- [WorldAccessContainer](#worldaccesscontainer)
- [WrongMinecraftVersionException](#wrongminecraftversionexception)
- [ZipperUtil](#zipperutil)
## API

*annotation* `net.minecraftforge.fml.common.API`

## AutomaticEventSubscriber

*class* `net.minecraftforge.fml.common.AutomaticEventSubscriber`

Automatic eventbus subscriber - reads Mod.EventBusSubscriber
 annotations and passes the class instances to the net.minecraftforge.common.MinecraftForge.EVENT_BUS

### Methods
- `public static void inject(ModContainer mod,  ASMDataTable data,  Side side)`

## CertificateHelper

*class* `net.minecraftforge.fml.common.CertificateHelper`

### Methods
- `public static <any> getFingerprints(java.security.cert.Certificate[] certificates)`
- `public static java.lang.String getFingerprint(java.security.cert.Certificate certificate)`
- `public static java.lang.String getFingerprint(java.nio.ByteBuffer buffer)`

## ClassNameUtils

*class* `net.minecraftforge.fml.common.ClassNameUtils`

### Methods
- `public static java.lang.String shortName(java.lang.Class<?> clz)`

## DummyModContainer

*class* `net.minecraftforge.fml.common.DummyModContainer`

All Implemented Interfaces: ModContainer

### Inherited fields
- from `net.minecraftforge.fml.common.ModContainer`: `EMPTY_PROPERTIES`

### Methods
- `public void bindMetadata(MetadataCollection mc)`
  Description copied from interface: ModContainer
  Attach this mod to it's metadata from the supplied metadata collection
- `public java.util.List<ArtifactVersion> getDependants()`
  Description copied from interface: ModContainer
  A list of modids that should be loaded after this one. The
   special value * indicates to load before any
   other mod.
- `public java.util.List<ArtifactVersion> getDependencies()`
  Description copied from interface: ModContainer
  A list of modids that should be loaded prior to this one. The special
   value * indicates to load after any other mod.
- `public java.util.Set<ArtifactVersion> getRequirements()`
  Description copied from interface: ModContainer
  A list of the modids that this mod requires loaded prior to loading
- `public ModMetadata getMetadata()`
  Description copied from interface: ModContainer
  The metadata for this mod
- `public java.lang.Object getMod()`
  Description copied from interface: ModContainer
  Get the actual mod object
- `public java.lang.String getModId()`
  Description copied from interface: ModContainer
  The globally unique modid for this mod
- `public java.lang.String getName()`
  Description copied from interface: ModContainer
  A human readable name
- `public java.lang.String getSortingRules()`
  Description copied from interface: ModContainer
  A representative string encapsulating the sorting preferences for this
   mod
- `public java.io.File getSource()`
  Description copied from interface: ModContainer
  The location on the file system which this mod came from
- `public java.lang.String getVersion()`
  Description copied from interface: ModContainer
  A human readable version identifier
- `public boolean matches(java.lang.Object mod)`
  Description copied from interface: ModContainer
  Does this mod match the supplied mod
- `public void setEnabledState(boolean enabled)`
  Description copied from interface: ModContainer
  Set the enabled/disabled state of this mod
- `public boolean registerBus(EventBus bus,  LoadController controller)`
  Description copied from interface: ModContainer
  Register the event bus for the mod and the controller for error handling
   Returns if this bus was successfully registered - disabled mods and other
   mods that don't need real events should return false and avoid further
   processing
- `public ArtifactVersion getProcessedVersion()`
- `public boolean isImmutable()`
- `public java.lang.String getDisplayVersion()`
- `public VersionRange acceptableMinecraftVersionRange()`
- `public java.security.cert.Certificate getSigningCertificate()`
- `public java.lang.String toString()`
- `public java.util.Map<java.lang.String,java.lang.String> getCustomModProperties()`
- `public java.lang.Class<?> getCustomResourcePackClass()`
- `public java.util.Map<java.lang.String,java.lang.String> getSharedModDescriptor()`
- `public ModContainer.Disableable canBeDisabled()`
- `public java.lang.String getGuiClassName()`
- `public java.util.List<java.lang.String> getOwnedPackages()`
- `public boolean shouldLoadInEnvironment()`
- `public java.net.URL getUpdateUrl()`
- `public void setClassVersion(int classVersion)`
- `public int getClassVersion()`

## DuplicateModsFoundException

*class* `net.minecraftforge.fml.common.DuplicateModsFoundException`

All Implemented Interfaces: java.io.Serializable, IDisplayableError

### Fields
- `public <any> dupes`

### Methods
- `protected void printStackTrace(EnhancedRuntimeException.WrappedPrintStream stream)`
- `public GuiScreen createGui()`

### Inherited methods
- from `net.minecraftforge.fml.common.EnhancedRuntimeException`: `getMessage`, `printStackTrace`, `printStackTrace`
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `setStackTrace`, `toString`

## EnhancedRuntimeException

*class* `net.minecraftforge.fml.common.EnhancedRuntimeException`

RuntimeException that gives subclasses the simple opportunity to write extra data when printing the stack trace.
 Mainly a helper class as printsStackTrace has multiple signatures.

All Implemented Interfaces: java.io.Serializable

### Methods
- `public java.lang.String getMessage()`
- `public void printStackTrace(java.io.PrintWriter s)`
- `public void printStackTrace(java.io.PrintStream s)`
- `protected abstract void printStackTrace(EnhancedRuntimeException.WrappedPrintStream stream)`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `setStackTrace`, `toString`

## EnhancedRuntimeException.WrappedPrintStream

*class* `net.minecraftforge.fml.common.EnhancedRuntimeException.WrappedPrintStream`

Enclosing class: EnhancedRuntimeException

### Methods
- `public abstract void println(java.lang.String line)`

## FMLCommonHandler

*class* `net.minecraftforge.fml.common.FMLCommonHandler`

The main class for non-obfuscated hook handling code

 Anything that doesn't require obfuscated or client/server specific code should
 go in this handler

 It also contains a reference to the sided handler instance that is valid
 allowing for common code to access specific properties from the obfuscated world
 without a direct dependency

### Methods
- `@Deprecated public EventBus bus()` (deprecated)
  Deprecated.
  The FML event bus. Subscribe here for FML related events
  - returns: the event bus
- `public java.util.List<java.lang.String> beginLoading(IFMLSidedHandler handler)`
- `public static FMLCommonHandler instance()`
  - returns: the instance
- `public ModContainer findContainerFor(java.lang.Object mod)`
  Find the container that associates with the supplied mod object
  - param: mod -
- `@Deprecated public Logger getFMLLogger()` (deprecated)
  Deprecated. Not used in FML, Mods use your own logger, see FMLPreInitializationEvent.getModLog()
  Get the forge mod loader logging instance (goes to the forgemodloader log file)
  - returns: The log instance for the FML log file
- `public Side getSide()`
- `public Side getEffectiveSide()`
  Return the effective side for the context in the game. This is dependent
   on thread analysis to try and determine whether the code is running in the
   server or not. Use at your own risk
- `public void raiseException(java.lang.Throwable exception,  java.lang.String message,  boolean stopGame)`
  Raise an exception
- `public void computeBranding()`
- `public java.util.List<java.lang.String> getBrandings(boolean includeMC)`
- `public IFMLSidedHandler getSidedDelegate()`
- `public void onPostServerTick()`
- `public void onPostWorldTick(World world)`
  Every tick just after world and other ticks occur
- `public void onPreServerTick()`
- `public void onPreWorldTick(World world)`
  Every tick just before world and other ticks occur
- `public boolean handleServerAboutToStart(MinecraftServer server)`
- `public boolean handleServerStarting(MinecraftServer server)`
- `public void handleServerStarted()`
- `public void handleServerStopping()`
- `public java.io.File getSavesDirectory()`
- `public MinecraftServer getMinecraftServerInstance()`
- `public void showGuiScreen(java.lang.Object clientGuiElement)`
- `public void queryUser(StartupQuery query)  throws java.lang.InterruptedException`
  - throws: java.lang.InterruptedException
- `public void onServerStart(MinecraftServer dedicatedServer)`
- `public void onServerStarted()`
- `public void onPreClientTick()`
- `public void onPostClientTick()`
- `public void onRenderTickStart(float timer)`
- `public void onRenderTickEnd(float timer)`
- `public void onPlayerPreTick(EntityPlayer player)`
- `public void onPlayerPostTick(EntityPlayer player)`
- `public void registerCrashCallable(ICrashCallable callable)`
- `public void enhanceCrashReport(CrashReport crashReport,  CrashReportCategory category)`
- `public void handleWorldDataSave(SaveHandler handler,  WorldInfo worldInfo,  NBTTagCompound tagCompound)`
- `public void handleWorldDataLoad(SaveHandler handler,  WorldInfo worldInfo,  NBTTagCompound tagCompound)`
- `public void confirmBackupLevelDatUse(SaveHandler handler)`
- `public boolean isDisplayCloseRequested()`
- `public boolean shouldServerBeKilledQuietly()`
- `public void expectServerStopped()`
  Make handleExit() wait for handleServerStopped().
  
   For internal use only!
- `public void handleExit(int retVal)`
  Delayed System.exit() until the server is actually stopped/done saving.
  
   For internal use only!
  - param: retVal - Exit code for System.exit()
- `public void handleServerStopped()`
- `public java.lang.String getModName()`
- `public void addModToResourcePack(ModContainer container)`
- `public java.lang.String getCurrentLanguage()`
- `public void bootstrap()`
- `public NetworkManager getClientToServerNetworkManager()`
- `public void fireMouseInput()`
- `public void fireKeyInput()`
- `public void firePlayerChangedDimensionEvent(EntityPlayer player,  int fromDim,  int toDim)`
- `public void firePlayerLoggedIn(EntityPlayer player)`
- `public void firePlayerLoggedOut(EntityPlayer player)`
- `public void firePlayerRespawnEvent(EntityPlayer player,  boolean endConquered)`
- `public void firePlayerItemPickupEvent(EntityPlayer player,  EntityItem item,  ItemStack clone)`
- `public void firePlayerCraftingEvent(EntityPlayer player,  ItemStack crafted,  IInventory craftMatrix)`
- `public void firePlayerSmeltedEvent(EntityPlayer player,  ItemStack smelted)`
- `public INetHandler getClientPlayHandler()`
- `public void fireNetRegistrationEvent(NetworkManager manager,  java.util.Set<java.lang.String> channelSet,  java.lang.String channel,  Side side)`
- `public boolean shouldAllowPlayerLogins()`
- `public void fireServerConnectionEvent(NetworkManager manager)`
- `public boolean handleServerHandshake(C00Handshake packet,  NetworkManager manager)`
  Process initial Handshake packet, kicks players from the server if they are connecting while we are starting up.
   Also verifies the client has the FML marker.
  - param: packet - Handshake Packet
  - param: manager - Network connection
  - returns: True to allow connection, otherwise False.
- `public void processWindowMessages()`
- `public void exitJava(int exitCode,  boolean hardExit)`
  Used to exit from java, with system exit preventions in place. Will be tidy about it and just log a message,
   unless debugging is enabled
  - param: exitCode - The exit code
  - param: hardExit - Perform a halt instead of an exit (only use when the world is unsavable) - read the warnings at Runtime.halt(int)
- `public IThreadListener getWorldThread(INetHandler net)`
- `public static void callFuture(java.util.concurrent.FutureTask<?> task)`
- `public java.io.InputStream loadLanguage(java.util.Map<java.lang.String,java.lang.String> table,  java.io.InputStream inputstream)  throws java.io.IOException`
  Loads a lang file, first searching for a marker to enable the 'extended' format {escape characters}
   If the marker is not found it simply returns and let the vanilla code load things.
   The Marker is 'PARSE_ESCAPES' by itself on a line starting with '#' as such:
   #PARSE_ESCAPES
  - param: table - The Map to load each key/value pair into.
  - param: inputstream - Input stream containing the lang file.
  - returns: A new InputStream that vanilla uses to load normal Lang files, Null if this is a 'enhanced' file and loading is done.
  - throws: java.io.IOException
- `public java.lang.String stripSpecialChars(java.lang.String message)`
- `public void reloadRenderers()`
- `public void fireSidedRegistryEvents()`
- `public CompoundDataFixer getDataFixer()`
- `public boolean isDisplayVSyncForced()`
- `public void resetClientRecipeBook()`
- `public void reloadSearchTrees()`
- `public void reloadCreativeSettings()`

## FMLContainer

*class* `net.minecraftforge.fml.common.FMLContainer`

All Implemented Interfaces: ModContainer, WorldAccessContainer

### Inherited fields
- from `net.minecraftforge.fml.common.ModContainer`: `EMPTY_PROPERTIES`

### Methods
- `public boolean registerBus(EventBus bus,  LoadController controller)`
  Description copied from interface: ModContainer
  Register the event bus for the mod and the controller for error handling
   Returns if this bus was successfully registered - disabled mods and other
   mods that don't need real events should return false and avoid further
   processing
- `public void modConstruction(FMLConstructionEvent evt)`
- `public void modPreinitialization(FMLPreInitializationEvent evt)`
- `public boolean checkModLists(java.util.Map<java.lang.String,java.lang.String> modList,  Side side)`
- `public NBTTagCompound getDataForWriting(SaveHandler handler,  WorldInfo info)`
- `public void readData(SaveHandler handler,  WorldInfo info,  java.util.Map<java.lang.String,NBTBase> propertyMap,  NBTTagCompound tag)`
- `public java.security.cert.Certificate getSigningCertificate()`
- `public java.io.File getSource()`
  Description copied from interface: ModContainer
  The location on the file system which this mod came from
- `public java.lang.Class<?> getCustomResourcePackClass()`
- `public java.lang.String getGuiClassName()`
- `public java.lang.Object getMod()`
  Description copied from interface: ModContainer
  Get the actual mod object

### Inherited methods
- from `net.minecraftforge.fml.common.DummyModContainer`: `acceptableMinecraftVersionRange`, `bindMetadata`, `canBeDisabled`, `getClassVersion`, `getCustomModProperties`, `getDependants`, `getDependencies`, `getDisplayVersion`, `getMetadata`, `getModId`, `getName`, `getOwnedPackages`, `getProcessedVersion`, `getRequirements`, `getSharedModDescriptor`, `getSortingRules`, `getUpdateUrl`, `getVersion`, `isImmutable`, `matches`, `setClassVersion`, `setEnabledState`, `shouldLoadInEnvironment`, `toString`

## FMLContainerHolder

*interface* `net.minecraftforge.fml.common.FMLContainerHolder`

### Methods
- `ModContainer getFMLContainer()`

## FMLLog

*class* `net.minecraftforge.fml.common.FMLLog`

FMLs logging class. Internal use only, NOT FOR MOD LOGGING! Mods use your own log, see FMLPreInitializationEvent.getModLog().
 TODO 1.13 remove all the deprecated methods

### Fields
- `public static final Logger log`

### Methods
- `public static void bigWarning(java.lang.String format,  java.lang.Object... data)`
- `@Deprecated public static void log(java.lang.String targetLog,  Level level,  java.lang.String format,  java.lang.Object... data)` (deprecated)
  Deprecated.
- `@Deprecated public static void log(Level level,  java.lang.String format,  java.lang.Object... data)` (deprecated)
  Deprecated.
- `@Deprecated public static void log(java.lang.String targetLog,  Level level,  java.lang.Throwable ex,  java.lang.String format,  java.lang.Object... data)` (deprecated)
  Deprecated.
- `@Deprecated public static void log(Level level,  java.lang.Throwable ex,  java.lang.String format,  java.lang.Object... data)` (deprecated)
  Deprecated.
- `@Deprecated public static void severe(java.lang.String format,  java.lang.Object... data)` (deprecated)
  Deprecated.
- `@Deprecated public static void warning(java.lang.String format,  java.lang.Object... data)` (deprecated)
  Deprecated.
- `@Deprecated public static void info(java.lang.String format,  java.lang.Object... data)` (deprecated)
  Deprecated.
- `@Deprecated public static void fine(java.lang.String format,  java.lang.Object... data)` (deprecated)
  Deprecated.
- `@Deprecated public static void finer(java.lang.String format,  java.lang.Object... data)` (deprecated)
  Deprecated.
- `@Deprecated public static Logger getLogger()` (deprecated)
  Deprecated.

## FMLModContainer

*class* `net.minecraftforge.fml.common.FMLModContainer`

All Implemented Interfaces: ModContainer

### Inherited fields
- from `net.minecraftforge.fml.common.ModContainer`: `EMPTY_PROPERTIES`

### Methods
- `public java.lang.String getModId()`
  Description copied from interface: ModContainer
  The globally unique modid for this mod
- `public java.lang.String getName()`
  Description copied from interface: ModContainer
  A human readable name
- `public java.lang.String getVersion()`
  Description copied from interface: ModContainer
  A human readable version identifier
- `public java.io.File getSource()`
  Description copied from interface: ModContainer
  The location on the file system which this mod came from
- `public ModMetadata getMetadata()`
  Description copied from interface: ModContainer
  The metadata for this mod
- `public void bindMetadata(MetadataCollection mc)`
  Description copied from interface: ModContainer
  Attach this mod to it's metadata from the supplied metadata collection
- `public java.util.Properties searchForVersionProperties()`
- `public void setEnabledState(boolean enabled)`
  Description copied from interface: ModContainer
  Set the enabled/disabled state of this mod
- `public java.util.Set<ArtifactVersion> getRequirements()`
  Description copied from interface: ModContainer
  A list of the modids that this mod requires loaded prior to loading
- `public java.util.List<ArtifactVersion> getDependencies()`
  Description copied from interface: ModContainer
  A list of modids that should be loaded prior to this one. The special
   value * indicates to load after any other mod.
- `public java.util.List<ArtifactVersion> getDependants()`
  Description copied from interface: ModContainer
  A list of modids that should be loaded after this one. The
   special value * indicates to load before any
   other mod.
- `public java.lang.String getSortingRules()`
  Description copied from interface: ModContainer
  A representative string encapsulating the sorting preferences for this
   mod
- `public boolean matches(java.lang.Object mod)`
  Description copied from interface: ModContainer
  Does this mod match the supplied mod
- `public java.lang.Object getMod()`
  Description copied from interface: ModContainer
  Get the actual mod object
- `public boolean registerBus(EventBus bus,  LoadController controller)`
  Description copied from interface: ModContainer
  Register the event bus for the mod and the controller for error handling
   Returns if this bus was successfully registered - disabled mods and other
   mods that don't need real events should return false and avoid further
   processing
- `public void constructMod(FMLConstructionEvent event)`
- `public void handleModStateEvent(FMLEvent event)`
- `public ArtifactVersion getProcessedVersion()`
- `public boolean isImmutable()`
- `public java.lang.String getDisplayVersion()`
- `public VersionRange acceptableMinecraftVersionRange()`
- `public java.security.cert.Certificate getSigningCertificate()`
- `public java.lang.String toString()`
- `public java.util.Map<java.lang.String,java.lang.String> getCustomModProperties()`
- `public java.lang.Class<?> getCustomResourcePackClass()`
- `public java.util.Map<java.lang.String,java.lang.String> getSharedModDescriptor()`
- `public ModContainer.Disableable canBeDisabled()`
- `public java.lang.String getGuiClassName()`
- `public java.util.List<java.lang.String> getOwnedPackages()`
- `public boolean shouldLoadInEnvironment()`
- `public java.net.URL getUpdateUrl()`
- `public void setClassVersion(int classVersion)`
- `public int getClassVersion()`

## ICrashCallable

*interface* `net.minecraftforge.fml.common.ICrashCallable`

All Superinterfaces: java.util.concurrent.Callable<java.lang.String>, ICrashReportDetail<java.lang.String>

### Methods
- `java.lang.String getLabel()`

### Inherited methods
- from `java.util.concurrent.Callable`: `call`

## IEntitySelectorFactory

*interface* `net.minecraftforge.fml.common.IEntitySelectorFactory`

Allows mods to create custom selectors in commands.
 Registered in GameRegistry.registerEntitySelector(IEntitySelectorFactory, String...)
 For an example implementation, see CustomEntitySelectorTest

### Methods
- `java.util.List<<any>> createPredicates(java.util.Map<java.lang.String,java.lang.String> arguments,  java.lang.String mainSelector,  ICommandSender sender,  Vec3d position)`
  Called every time a command that contains entity selectors is executed
  - param: arguments - A map with all arguments and their values
  - param: mainSelector - The main selector string (e.g. 'a' for all players or 'e' for all entities)
  - param: sender - The sender of the command
  - param: position - A position either specified in the selector arguments or by the players position. See EntitySelector.getPosFromArguments(Map, Vec3d)
  - returns: A list of new predicates, can be empty (Collections.emptyList() but not null.

## IFMLHandledException

*interface* `net.minecraftforge.fml.common.IFMLHandledException`

## IFMLSidedHandler

*interface* `net.minecraftforge.fml.common.IFMLSidedHandler`

### Methods
- `java.util.List<java.lang.String> getAdditionalBrandingInformation()`
- `Side getSide()`
- `void haltGame(java.lang.String message,  java.lang.Throwable exception)`
- `void showGuiScreen(java.lang.Object clientGuiElement)`
- `void queryUser(StartupQuery query)  throws java.lang.InterruptedException`
  - throws: java.lang.InterruptedException
- `void beginServerLoading(MinecraftServer server)`
- `void finishServerLoading()`
- `java.io.File getSavesDirectory()`
- `MinecraftServer getServer()`
- `boolean isDisplayCloseRequested()`
- `boolean shouldServerShouldBeKilledQuietly()`
- `void addModAsResource(ModContainer container)`
- `java.lang.String getCurrentLanguage()`
- `void serverStopped()`
- `NetworkManager getClientToServerNetworkManager()`
- `INetHandler getClientPlayHandler()`
- `void fireNetRegistrationEvent(EventBus bus,  NetworkManager manager,  java.util.Set<java.lang.String> channelSet,  java.lang.String channel,  Side side)`
- `boolean shouldAllowPlayerLogins()`
- `void allowLogins()`
- `IThreadListener getWorldThread(INetHandler net)`
- `void processWindowMessages()`
- `java.lang.String stripSpecialChars(java.lang.String message)`
- `void reloadRenderers()`
- `void fireSidedRegistryEvents()`
- `CompoundDataFixer getDataFixer()`
- `boolean isDisplayVSyncForced()`
- `default void resetClientRecipeBook()`
- `default void reloadSearchTrees()`
- `default void reloadCreativeSettings()`

## IFuelHandler

*interface* `net.minecraftforge.fml.common.IFuelHandler`

Deprecated.
set your item's Item.getItemBurnTime(ItemStack) or subscribe to FurnaceFuelBurnTimeEvent instead.

### Methods
- `int getBurnTime(ItemStack fuel)` (deprecated)
  Deprecated.

## ILanguageAdapter

*interface* `net.minecraftforge.fml.common.ILanguageAdapter`

### Methods
- `java.lang.Object getNewInstance(FMLModContainer container,  java.lang.Class<?> objectClass,  java.lang.ClassLoader classLoader,  java.lang.reflect.Method factoryMarkedAnnotation)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `boolean supportsStatics()`
- `void setProxy(java.lang.reflect.Field target,  java.lang.Class<?> proxyTarget,  java.lang.Object proxy)  throws java.lang.IllegalArgumentException,  java.lang.IllegalAccessException,  java.lang.NoSuchFieldException,  java.lang.SecurityException`
  - throws: java.lang.IllegalArgumentException
  - throws: java.lang.IllegalAccessException
  - throws: java.lang.NoSuchFieldException
  - throws: java.lang.SecurityException
- `void setInternalProxies(ModContainer mod,  Side side,  java.lang.ClassLoader loader)`

## ILanguageAdapter.JavaAdapter

*class* `net.minecraftforge.fml.common.ILanguageAdapter.JavaAdapter`

All Implemented Interfaces: ILanguageAdapter

Enclosing interface: ILanguageAdapter

### Methods
- `public java.lang.Object getNewInstance(FMLModContainer container,  java.lang.Class<?> objectClass,  java.lang.ClassLoader classLoader,  java.lang.reflect.Method factoryMarkedMethod)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public boolean supportsStatics()`
- `public void setProxy(java.lang.reflect.Field target,  java.lang.Class<?> proxyTarget,  java.lang.Object proxy)  throws java.lang.IllegalArgumentException,  java.lang.IllegalAccessException,  java.lang.NoSuchFieldException,  java.lang.SecurityException`
  - throws: java.lang.IllegalArgumentException
  - throws: java.lang.IllegalAccessException
  - throws: java.lang.NoSuchFieldException
  - throws: java.lang.SecurityException
- `public void setInternalProxies(ModContainer mod,  Side side,  java.lang.ClassLoader loader)`

## ILanguageAdapter.ScalaAdapter

*class* `net.minecraftforge.fml.common.ILanguageAdapter.ScalaAdapter`

All Implemented Interfaces: ILanguageAdapter

Enclosing interface: ILanguageAdapter

### Methods
- `public java.lang.Object getNewInstance(FMLModContainer container,  java.lang.Class<?> scalaObjectClass,  java.lang.ClassLoader classLoader,  java.lang.reflect.Method factoryMarkedAnnotation)  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public boolean supportsStatics()`
- `public void setProxy(java.lang.reflect.Field target,  java.lang.Class<?> proxyTarget,  java.lang.Object proxy)  throws java.lang.IllegalArgumentException,  java.lang.IllegalAccessException,  java.lang.NoSuchFieldException,  java.lang.SecurityException`
  - throws: java.lang.IllegalArgumentException
  - throws: java.lang.IllegalAccessException
  - throws: java.lang.NoSuchFieldException
  - throws: java.lang.SecurityException
- `public void setInternalProxies(ModContainer mod,  Side side,  java.lang.ClassLoader loader)`

## InjectedModContainer

*class* `net.minecraftforge.fml.common.InjectedModContainer`

All Implemented Interfaces: ModContainer

### Fields
- `public final ModContainer wrappedContainer`

### Inherited fields
- from `net.minecraftforge.fml.common.ModContainer`: `EMPTY_PROPERTIES`

### Methods
- `public java.lang.String getModId()`
  Description copied from interface: ModContainer
  The globally unique modid for this mod
- `public java.lang.String getName()`
  Description copied from interface: ModContainer
  A human readable name
- `public java.lang.String getVersion()`
  Description copied from interface: ModContainer
  A human readable version identifier
- `public java.io.File getSource()`
  Description copied from interface: ModContainer
  The location on the file system which this mod came from
- `public ModMetadata getMetadata()`
  Description copied from interface: ModContainer
  The metadata for this mod
- `public void bindMetadata(MetadataCollection mc)`
  Description copied from interface: ModContainer
  Attach this mod to it's metadata from the supplied metadata collection
- `public void setEnabledState(boolean enabled)`
  Description copied from interface: ModContainer
  Set the enabled/disabled state of this mod
- `public java.util.Set<ArtifactVersion> getRequirements()`
  Description copied from interface: ModContainer
  A list of the modids that this mod requires loaded prior to loading
- `public java.util.List<ArtifactVersion> getDependencies()`
  Description copied from interface: ModContainer
  A list of modids that should be loaded prior to this one. The special
   value * indicates to load after any other mod.
- `public java.util.List<ArtifactVersion> getDependants()`
  Description copied from interface: ModContainer
  A list of modids that should be loaded after this one. The
   special value * indicates to load before any
   other mod.
- `public java.lang.String getSortingRules()`
  Description copied from interface: ModContainer
  A representative string encapsulating the sorting preferences for this
   mod
- `public boolean registerBus(EventBus bus,  LoadController controller)`
  Description copied from interface: ModContainer
  Register the event bus for the mod and the controller for error handling
   Returns if this bus was successfully registered - disabled mods and other
   mods that don't need real events should return false and avoid further
   processing
- `public boolean matches(java.lang.Object mod)`
  Description copied from interface: ModContainer
  Does this mod match the supplied mod
- `public java.lang.Object getMod()`
  Description copied from interface: ModContainer
  Get the actual mod object
- `public ArtifactVersion getProcessedVersion()`
- `public boolean isImmutable()`
- `public java.lang.String getDisplayVersion()`
- `public VersionRange acceptableMinecraftVersionRange()`
- `public WorldAccessContainer getWrappedWorldAccessContainer()`
- `public java.security.cert.Certificate getSigningCertificate()`
- `public java.lang.String toString()`
- `public java.util.Map<java.lang.String,java.lang.String> getCustomModProperties()`
- `public java.lang.Class<?> getCustomResourcePackClass()`
- `public java.util.Map<java.lang.String,java.lang.String> getSharedModDescriptor()`
- `public ModContainer.Disableable canBeDisabled()`
- `public java.lang.String getGuiClassName()`
- `public java.util.List<java.lang.String> getOwnedPackages()`
- `public boolean shouldLoadInEnvironment()`
- `public java.net.URL getUpdateUrl()`
- `public void setClassVersion(int classVersion)`
- `public int getClassVersion()`

## IWorldGenerator

*interface* `net.minecraftforge.fml.common.IWorldGenerator`

This is called back during world generation.

### Methods
- `void generate(java.util.Random random,  int chunkX,  int chunkZ,  World world,  IChunkGenerator chunkGenerator,  IChunkProvider chunkProvider)`
  Generate some world
  - param: random - the chunk specific Random.
  - param: chunkX - the chunk X coordinate of this chunk.
  - param: chunkZ - the chunk Z coordinate of this chunk.
  - param: world - : additionalData[0] The minecraft World we're generating for.
  - param: chunkGenerator - : additionalData[1] The IChunkProvider that is generating.
  - param: chunkProvider - : additionalData[2] IChunkProvider that is requesting the world generation.

## LoadController

*class* `net.minecraftforge.fml.common.LoadController`

### Methods
- `public void buildModList(FMLLoadEvent event)`
- `public void distributeStateMessage(LoaderState state,  java.lang.Object... eventData)`
- `public void transition(LoaderState desiredState,  boolean forceState)`
- `@Deprecated public void checkErrorsAfterAvailable()` (deprecated)
  Deprecated.
- `@Deprecated public void checkErrors()` (deprecated)
  Deprecated.
- `public ModContainer activeContainer()`
- `public void propogateStateMessage(FMLEvent stateEvent)`
- `public <any> buildModObjectList()`
- `public void errorOccurred(ModContainer modContainer,  java.lang.Throwable exception)`
- `public void printModStates(java.lang.StringBuilder ret)`
- `public java.util.List<ModContainer> getActiveModList()`
- `public LoaderState.ModState getModState(ModContainer selectedMod)`
- `public void distributeStateMessage(java.lang.Class<?> customEvent)`
- `public <any> getModObjectList()`
- `public boolean isInState(LoaderState state)`

## Loader

*class* `net.minecraftforge.fml.common.Loader`

The loader class performs the actual loading of the mod code from disk.

 There are several LoaderStates to mod loading, triggered in two
 different stages from the FML handler code's hooks into the minecraft code.

 LOADING. Scanning the filesystem for mod containers to load (zips, jars,
 directories), adding them to the modClassLoader Scanning, the loaded
 containers for mod classes to load and registering them appropriately.
 PREINIT. The mod classes are configured, they are sorted into a load
 order, and instances of the mods are constructed.
 INIT. The mod instances are initialized. For BaseMod mods, this involves
 calling the load method.
 POSTINIT. The mod instances are post initialized. For BaseMod mods this
 involves calling the modsLoaded method.
 UP. The Loader is complete
 ERRORED. The loader encountered an error during the LOADING phase and
 dropped to this state instead. It will not complete loading from this state,
 but it attempts to continue loading before abandoning and giving a fatal
 error.

 Phase 1 code triggers the LOADING and PREINIT states. Phase 2 code triggers
 the INIT and POSTINIT states.

### Fields
- `public static final java.lang.String MC_VERSION` (= "1.12.2")

### Methods
- `public static Loader instance()`
- `public static void injectData(java.lang.Object... data)`
- `public java.util.List<ModContainer> getModList()`
- `public void setupTestHarness(ModContainer... containers)`
  Used to setup a testharness with a single dummy mod instance for use with various testing hooks
  - param: containers - A list of dummy containers that will be returned as "active" for all queries
- `public void loadMods(java.util.List<java.lang.String> injectedModContainers)`
  Called from the hook to start mod loading. We trigger the
   identifyMods(List) and Constructing, Preinitalization, and Initalization phases here. Finally,
   the mod list is frozen completely and is consider immutable from then on.
  - param: injectedModContainers - containers to inject
- `public void preinitializeMods()`
- `public static boolean isModLoaded(java.lang.String modname)`
  Query if we know of a mod named modname
  - param: modname -
  - returns: If the mod is loaded
- `public java.io.File getConfigDir()`
- `public java.lang.String getCrashInformation()`
- `public java.lang.String getFMLVersionString()`
- `public ModClassLoader getModClassLoader()`
- `@Deprecated public void computeDependencies(java.lang.String dependencyString,  java.util.Set<ArtifactVersion> requirements,  java.util.List<ArtifactVersion> dependencies,  java.util.List<ArtifactVersion> dependants)` (deprecated)
  Deprecated. use DependencyParser.parseDependencies(String)
- `public java.util.Map<java.lang.String,ModContainer> getIndexedModList()`
- `public void initializeMods()`
- `public ICrashCallable getCallableCrashInformation()`
- `public java.util.List<ModContainer> getActiveModList()`
- `public LoaderState.ModState getModState(ModContainer selectedMod)`
- `public java.lang.String getMCVersionString()`
- `public boolean serverStarting(java.lang.Object server)`
- `public void serverStarted()`
- `public void serverStopping()`
- `public <any> getModObjectList()`
- `public <any> getReversedModObjectList()`
- `public ModContainer activeModContainer()`
- `public boolean isInState(LoaderState state)`
- `public MinecraftDummyContainer getMinecraftModContainer()`
- `public boolean hasReachedState(LoaderState state)`
- `public java.lang.String getMCPVersionString()`
- `public void serverStopped()`
- `public boolean serverAboutToStart(java.lang.Object server)`
- `public java.util.Map<java.lang.String,java.lang.String> getFMLBrandingProperties()`
- `public java.util.Map<java.lang.String,java.lang.String> getCustomModProperties(java.lang.String modId)`
- `public void fireRemapEvent(java.util.Map<ResourceLocation,java.util.Map<ResourceLocation,java.lang.Integer[]>> remaps,  boolean isFreezing)`
- `public void runtimeDisableMod(java.lang.String modId)`
- `public void loadingComplete()`
- `public final LoaderState getLoaderState()`
- `public void setActiveModContainer(ModContainer container)`

## LoaderException

*class* `net.minecraftforge.fml.common.LoaderException`

All Implemented Interfaces: java.io.Serializable

### Methods
- `protected void printStackTrace(EnhancedRuntimeException.WrappedPrintStream stream)`

### Inherited methods
- from `net.minecraftforge.fml.common.EnhancedRuntimeException`: `getMessage`, `printStackTrace`, `printStackTrace`
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `setStackTrace`, `toString`

## LoaderExceptionModCrash

*class* `net.minecraftforge.fml.common.LoaderExceptionModCrash`

Prevent LoaderException from adding its own stack trace to the wrapped throwable's stack trace.

All Implemented Interfaces: java.io.Serializable

### Methods
- `public java.lang.Throwable fillInStackTrace()`

### Inherited methods
- from `net.minecraftforge.fml.common.LoaderException`: `printStackTrace`
- from `net.minecraftforge.fml.common.EnhancedRuntimeException`: `getMessage`, `printStackTrace`, `printStackTrace`
- from `java.lang.Throwable`: `addSuppressed`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `setStackTrace`, `toString`

## LoaderState

*enum* `net.minecraftforge.fml.common.LoaderState`

The state enum used to help track state progression for the loader

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<LoaderState>

### Fields
- `public static final LoaderState NOINIT`
- `public static final LoaderState LOADING`
- `public static final LoaderState CONSTRUCTING`
- `public static final LoaderState PREINITIALIZATION`
- `public static final LoaderState INITIALIZATION`
- `public static final LoaderState POSTINITIALIZATION`
- `public static final LoaderState AVAILABLE`
- `public static final LoaderState SERVER_ABOUT_TO_START`
- `public static final LoaderState SERVER_STARTING`
- `public static final LoaderState SERVER_STARTED`
- `public static final LoaderState SERVER_STOPPING`
- `public static final LoaderState SERVER_STOPPED`
- `public static final LoaderState ERRORED`

### Methods
- `public static LoaderState[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (LoaderState c : LoaderState.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static LoaderState valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public LoaderState transition(boolean errored)`
- `public boolean hasEvent()`
- `public FMLStateEvent getEvent(java.lang.Object... eventData)`
- `public LoaderState requiredState()`
- `public java.lang.String getPrettyName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## LoaderState.ModState

*enum* `net.minecraftforge.fml.common.LoaderState.ModState`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<LoaderState.ModState>

Enclosing class: LoaderState

### Fields
- `public static final LoaderState.ModState UNLOADED`
- `public static final LoaderState.ModState LOADED`
- `public static final LoaderState.ModState CONSTRUCTED`
- `public static final LoaderState.ModState PREINITIALIZED`
- `public static final LoaderState.ModState INITIALIZED`
- `public static final LoaderState.ModState POSTINITIALIZED`
- `public static final LoaderState.ModState AVAILABLE`
- `public static final LoaderState.ModState DISABLED`
- `public static final LoaderState.ModState ERRORED`

### Methods
- `public static LoaderState.ModState[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (LoaderState.ModState c : LoaderState.ModState.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static LoaderState.ModState valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public java.lang.String toString()`
- `public java.lang.String getMarker()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## MCPDummyContainer

*class* `net.minecraftforge.fml.common.MCPDummyContainer`

All Implemented Interfaces: ModContainer

### Inherited fields
- from `net.minecraftforge.fml.common.ModContainer`: `EMPTY_PROPERTIES`

### Methods
- `public boolean registerBus(EventBus bus,  LoadController controller)`
  Description copied from interface: ModContainer
  Register the event bus for the mod and the controller for error handling
   Returns if this bus was successfully registered - disabled mods and other
   mods that don't need real events should return false and avoid further
   processing
- `public ModContainer.Disableable canBeDisabled()`

### Inherited methods
- from `net.minecraftforge.fml.common.DummyModContainer`: `acceptableMinecraftVersionRange`, `bindMetadata`, `getClassVersion`, `getCustomModProperties`, `getCustomResourcePackClass`, `getDependants`, `getDependencies`, `getDisplayVersion`, `getGuiClassName`, `getMetadata`, `getMod`, `getModId`, `getName`, `getOwnedPackages`, `getProcessedVersion`, `getRequirements`, `getSharedModDescriptor`, `getSigningCertificate`, `getSortingRules`, `getSource`, `getUpdateUrl`, `getVersion`, `isImmutable`, `matches`, `setClassVersion`, `setEnabledState`, `shouldLoadInEnvironment`, `toString`

## MetadataCollection

*class* `net.minecraftforge.fml.common.MetadataCollection`

### Methods
- `public static MetadataCollection from(java.io.InputStream inputStream,  java.lang.String sourceName)`
- `public ModMetadata getMetadataForId(java.lang.String modId,  java.util.Map<java.lang.String,java.lang.Object> extraData)`

## MetadataCollection.ArtifactVersionAdapter

*class* `net.minecraftforge.fml.common.MetadataCollection.ArtifactVersionAdapter`

Enclosing class: MetadataCollection

### Methods
- `public void write(JsonWriter out,  ArtifactVersion value)  throws java.io.IOException`
  - throws: java.io.IOException
- `public ArtifactVersion read(JsonReader in)  throws java.io.IOException`
  - throws: java.io.IOException

## MinecraftDummyContainer

*class* `net.minecraftforge.fml.common.MinecraftDummyContainer`

All Implemented Interfaces: ModContainer

### Inherited fields
- from `net.minecraftforge.fml.common.ModContainer`: `EMPTY_PROPERTIES`

### Methods
- `public boolean isImmutable()`
- `public java.io.File getSource()`
  Description copied from interface: ModContainer
  The location on the file system which this mod came from
- `public boolean registerBus(EventBus bus,  LoadController controller)`
  Description copied from interface: ModContainer
  Register the event bus for the mod and the controller for error handling
   Returns if this bus was successfully registered - disabled mods and other
   mods that don't need real events should return false and avoid further
   processing
- `public VersionRange getStaticVersionRange()`
- `public java.security.cert.Certificate getSigningCertificate()`

### Inherited methods
- from `net.minecraftforge.fml.common.DummyModContainer`: `acceptableMinecraftVersionRange`, `bindMetadata`, `canBeDisabled`, `getClassVersion`, `getCustomModProperties`, `getCustomResourcePackClass`, `getDependants`, `getDependencies`, `getDisplayVersion`, `getGuiClassName`, `getMetadata`, `getMod`, `getModId`, `getName`, `getOwnedPackages`, `getProcessedVersion`, `getRequirements`, `getSharedModDescriptor`, `getSortingRules`, `getUpdateUrl`, `getVersion`, `matches`, `setClassVersion`, `setEnabledState`, `shouldLoadInEnvironment`, `toString`

## MissingModsException

*class* `net.minecraftforge.fml.common.MissingModsException`

All Implemented Interfaces: java.io.Serializable, IDisplayableError

### Fields
- `@Deprecated public final java.util.Set<ArtifactVersion> missingMods` (deprecated)
  Deprecated. use getMissingModInfos()

### Methods
- `public java.lang.String getMessage()`
- `public void addMissingMod(ArtifactVersion acceptedVersion,  ArtifactVersion currentVersion,  boolean required)`
- `public java.lang.String getModName()`
- `public java.util.List<MissingModsException.MissingModInfo> getMissingModInfos()`
- `protected void printStackTrace(EnhancedRuntimeException.WrappedPrintStream stream)`
- `public GuiScreen createGui()`

### Inherited methods
- from `net.minecraftforge.fml.common.EnhancedRuntimeException`: `printStackTrace`, `printStackTrace`
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `setStackTrace`, `toString`

## MissingModsException.MissingModInfo

*class* `net.minecraftforge.fml.common.MissingModsException.MissingModInfo`

Enclosing class: MissingModsException

### Methods
- `public ArtifactVersion getCurrentVersion()`
- `public ArtifactVersion getAcceptedVersion()`
- `public boolean isRequired()`

## Mod

*annotation* `net.minecraftforge.fml.common.Mod`

This defines a Mod to FML.
 Any class found with this annotation applied will be loaded as a Mod. The instance that is loaded will
 represent the mod to other Mods in the system. It will be sent various subclasses of FMLEvent
 at pre-defined times during the loading of the game, based on where you have applied the Mod.EventHandler
 annotation.

 This is a simple example of a Mod. It has the modId of "mymodid", the name of "My example mod", it is
 version 1.0, and depends on FML being loaded.

 package mymod;
 // Declare that this is a mod with modId "mymodid", name "My example mod", version "1.0" and dependency on FML.
 {@literal @}Mod(modId="mymodid",name="My example mod",version="1.0",dependencies="required-after:FML")
 public class MyMod {
 // Populate this field with the instance of the mod created by FML
 {@literal @}Instance("mymodid")
 public MyMod instance;

 // Mark this method for receiving an {@link FMLEvent} (in this case, it's the {@link FMLPreInitializationEvent})
 {@literal @}EventHandler public void preInit(FMLPreInitializationEvent event)
 {
 // Do stuff in pre-init phase (read config, create blocks and items, register them)
 }
 }

## Mod.CustomProperty

*annotation* `net.minecraftforge.fml.common.Mod.CustomProperty`

A custom key => value property pair for use with Mod.customProperties()

## Mod.EventBusSubscriber

*annotation* `net.minecraftforge.fml.common.Mod.EventBusSubscriber`

A class which will be subscribed to net.minecraftforge.common.MinecraftForge.EVENT_BUS at mod construction time.

## Mod.EventHandler

*annotation* `net.minecraftforge.fml.common.Mod.EventHandler`

Marks the associated method as handling an FML lifecycle event.
 The method must have a single parameter, one of the following types. This annotation
 replaces the multiple different annotations that previously were used.

 Current event classes. This first section is standard lifecycle events. They are dispatched
 at various phases as the game starts. Each event should have information useful to that
 phase of the lifecycle. They are fired in this order.

 These suggestions are mostly just suggestions on what to do in each event.

 FMLPreInitializationEvent : Run before anything else. Read your config, create blocks,
 items, etc, and register them with the GameRegistry.
 FMLInitializationEvent : Do your mod setup. Build whatever data structures you care about. Register recipes,
 send FMLInterModComms messages to other mods.
 FMLPostInitializationEvent : Handle interaction with other mods, complete your setup based on this.

 These are the server lifecycle events. They are fired whenever a server is running, or about to run. Each time a server
 starts they will be fired in this sequence.

 FMLServerAboutToStartEvent : Use if you need to handle something before the server has even been created.
 FMLServerStartingEvent : Do stuff you need to do to set up the server. register commands, tweak the server.
 FMLServerStartedEvent : Do what you need to with the running server.
 FMLServerStoppingEvent : Do what you need to before the server has started it's shutdown sequence.
 FMLServerStoppedEvent : Do whatever cleanup you need once the server has shutdown. Generally only useful
 on the integrated server.

 The second set of events are more specialized, for receiving notification of specific
 information.

 FMLFingerprintViolationEvent : Sent just before FMLPreInitializationEvent
 if something is wrong with your mod signature
 FMLInterModComms.IMCEvent : Sent just after FMLInitializationEvent if you have IMC messages waiting
 from other mods

## Mod.Instance

*annotation* `net.minecraftforge.fml.common.Mod.Instance`

Populate the annotated field with the mod instance based on the specified ModId. This can be used
 to retrieve instances of other mods.

## Mod.InstanceFactory

*annotation* `net.minecraftforge.fml.common.Mod.InstanceFactory`

Mod instance factory method. Should return an instance of the mod. Applies only to static methods on the same class as Mod.

## Mod.Metadata

*annotation* `net.minecraftforge.fml.common.Mod.Metadata`

Populate the annotated field with the mod's metadata.

## ModAPIManager

*class* `net.minecraftforge.fml.common.ModAPIManager`

### Fields
- `public static final ModAPIManager INSTANCE`

### Methods
- `public void registerDataTableAndParseAPI(ASMDataTable dataTable)`
- `public void manageAPI(ModClassLoader modClassLoader,  ModDiscoverer discoverer)`
- `public void injectAPIModContainers(java.util.List<ModContainer> mods,  java.util.Map<java.lang.String,ModContainer> nameLookup)`
- `public void cleanupAPIContainers(java.util.List<ModContainer> mods)`
- `public boolean hasAPI(java.lang.String modId)`
- `public java.lang.Iterable<? extends ModContainer> getAPIList()`

## ModClassLoader

*class* `net.minecraftforge.fml.common.ModClassLoader`

A simple delegating class loader used to load mods into the system

All Implemented Interfaces: java.io.Closeable, java.lang.AutoCloseable

### Methods
- `public void addFile(java.io.File modFile)  throws java.net.MalformedURLException`
  - throws: java.net.MalformedURLException
- `public java.lang.Class<?> loadClass(java.lang.String name)  throws java.lang.ClassNotFoundException`
  - throws: java.lang.ClassNotFoundException
- `public java.io.File[] getParentSources()`
- `public java.util.List<java.lang.String> getDefaultLibraries()`
- `public boolean isDefaultLibrary(java.io.File file)`
- `public void clearNegativeCacheFor(java.util.Set<java.lang.String> classList)`
- `public ModAPITransformer addModAPITransformer(ASMDataTable dataTable)`
- `public boolean containsSource(java.io.File source)`

### Inherited methods
- from `java.net.URLClassLoader`: `addURL`, `close`, `definePackage`, `findClass`, `findResource`, `findResources`, `getPermissions`, `getResourceAsStream`, `getURLs`, `newInstance`, `newInstance`
- from `java.security.SecureClassLoader`: `defineClass`, `defineClass`
- from `java.lang.ClassLoader`: `clearAssertionStatus`, `defineClass`, `defineClass`, `defineClass`, `defineClass`, `definePackage`, `findLibrary`, `findLoadedClass`, `findSystemClass`, `getClassLoadingLock`, `getPackage`, `getPackages`, `getParent`, `getResource`, `getResources`, `getSystemClassLoader`, `getSystemResource`, `getSystemResourceAsStream`, `getSystemResources`, `loadClass`, `registerAsParallelCapable`, `resolveClass`, `setClassAssertionStatus`, `setDefaultAssertionStatus`, `setPackageAssertionStatus`, `setSigners`

## ModContainer

*interface* `net.minecraftforge.fml.common.ModContainer`

The container that wraps around mods in the system.

 The philosophy is that individual mod implementation technologies should not
 impact the actual loading and management of mod code. This interface provides
 a mechanism by which we can wrap actual mod code so that the loader and other
 facilities can treat mods at arms length.

### Fields
- `static final java.util.Map<java.lang.String,java.lang.String> EMPTY_PROPERTIES`

### Methods
- `java.lang.String getModId()`
  The globally unique modid for this mod
- `java.lang.String getName()`
  A human readable name
- `java.lang.String getVersion()`
  A human readable version identifier
- `java.io.File getSource()`
  The location on the file system which this mod came from
- `ModMetadata getMetadata()`
  The metadata for this mod
- `void bindMetadata(MetadataCollection mc)`
  Attach this mod to it's metadata from the supplied metadata collection
- `void setEnabledState(boolean enabled)`
  Set the enabled/disabled state of this mod
- `java.util.Set<ArtifactVersion> getRequirements()`
  A list of the modids that this mod requires loaded prior to loading
- `java.util.List<ArtifactVersion> getDependencies()`
  A list of modids that should be loaded prior to this one. The special
   value * indicates to load after any other mod.
- `java.util.List<ArtifactVersion> getDependants()`
  A list of modids that should be loaded after this one. The
   special value * indicates to load before any
   other mod.
- `java.lang.String getSortingRules()`
  A representative string encapsulating the sorting preferences for this
   mod
- `boolean registerBus(EventBus bus,  LoadController controller)`
  Register the event bus for the mod and the controller for error handling
   Returns if this bus was successfully registered - disabled mods and other
   mods that don't need real events should return false and avoid further
   processing
  - param: bus -
  - param: controller -
- `boolean matches(java.lang.Object mod)`
  Does this mod match the supplied mod
  - param: mod -
- `java.lang.Object getMod()`
  Get the actual mod object
- `ArtifactVersion getProcessedVersion()`
- `boolean isImmutable()`
- `java.lang.String getDisplayVersion()`
- `VersionRange acceptableMinecraftVersionRange()`
- `java.security.cert.Certificate getSigningCertificate()`
- `java.util.Map<java.lang.String,java.lang.String> getCustomModProperties()`
- `java.lang.Class<?> getCustomResourcePackClass()`
- `java.util.Map<java.lang.String,java.lang.String> getSharedModDescriptor()`
- `ModContainer.Disableable canBeDisabled()`
- `java.lang.String getGuiClassName()`
- `java.util.List<java.lang.String> getOwnedPackages()`
- `boolean shouldLoadInEnvironment()`
- `java.net.URL getUpdateUrl()`
- `void setClassVersion(int classVersion)`
- `int getClassVersion()`

## ModContainer.Disableable

*enum* `net.minecraftforge.fml.common.ModContainer.Disableable`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ModContainer.Disableable>

Enclosing interface: ModContainer

### Fields
- `public static final ModContainer.Disableable YES`
- `public static final ModContainer.Disableable RESTART`
- `public static final ModContainer.Disableable NEVER`
- `public static final ModContainer.Disableable DEPENDENCIES`

### Methods
- `public static ModContainer.Disableable[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ModContainer.Disableable c : ModContainer.Disableable.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ModContainer.Disableable valueOf(java.lang.String name)`
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

## ModContainerFactory

*class* `net.minecraftforge.fml.common.ModContainerFactory`

### Fields
- `public static java.util.Map<Type,java.lang.reflect.Constructor<? extends ModContainer>> modTypes`

### Methods
- `public static ModContainerFactory instance()`
- `public void registerContainerType(Type type,  java.lang.Class<? extends ModContainer> container)`
- `public ModContainer build(ASMModParser modParser,  java.io.File modSource,  ModCandidate container)`

## ModMetadata

*class* `net.minecraftforge.fml.common.ModMetadata`

### Fields
- `public java.lang.String modId`
- `public java.lang.String name`
- `public java.lang.String description`
- `public java.lang.String url`
- `@Deprecated public java.lang.String updateUrl` (deprecated)
  Deprecated.
- `public java.lang.String updateJSON`
  URL to update json file. Format is defined here: https://gist.github.com/LexManos/7aacb9aa991330523884
- `public java.lang.String logoFile`
- `public java.lang.String version`
- `public java.util.List<java.lang.String> authorList`
- `public java.lang.String credits`
- `public java.lang.String parent`
- `public java.lang.String[] screenshots`
- `public transient ModContainer parentMod`
- `public transient java.util.List<ModContainer> childMods`
- `public boolean useDependencyInformation`
- `public java.util.Set<ArtifactVersion> requiredMods`
- `public java.util.List<ArtifactVersion> dependencies`
- `public java.util.List<ArtifactVersion> dependants`
- `public transient boolean autogenerated`

### Methods
- `public java.lang.String getChildModCountString()`
- `public java.lang.String getAuthorList()`
- `public java.lang.String getChildModList()`
- `public java.lang.String printableSortingRules()`

## MultipleModsErrored

*class* `net.minecraftforge.fml.common.MultipleModsErrored`

All Implemented Interfaces: java.io.Serializable, IDisplayableError

### Fields
- `public final java.util.List<WrongMinecraftVersionException> wrongMinecraftExceptions`
- `public final java.util.List<MissingModsException> missingModsExceptions`

### Methods
- `public GuiScreen createGui()`
- `protected void printStackTrace(EnhancedRuntimeException.WrappedPrintStream stream)`

### Inherited methods
- from `net.minecraftforge.fml.common.EnhancedRuntimeException`: `getMessage`, `printStackTrace`, `printStackTrace`
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `setStackTrace`, `toString`

## ObfuscationReflectionHelper

*class* `net.minecraftforge.fml.common.ObfuscationReflectionHelper`

Some reflection helper code.

### Methods
- `@Deprecated public static <T,E> T getPrivateValue(java.lang.Class<? super E> classToAccess,  E instance,  int fieldIndex)` (deprecated)
  Deprecated.
- `@Deprecated public static java.lang.String[] remapFieldNames(java.lang.String className,  java.lang.String... fieldNames)` (deprecated)
  Deprecated.
- `@Deprecated public static <T,E> T getPrivateValue(java.lang.Class<? super E> classToAccess,  E instance,  java.lang.String... fieldNames)` (deprecated)
  Deprecated. use getPrivateValue(Class, Object, String)
- `public static <T,E> T getPrivateValue(java.lang.Class<? super E> classToAccess,  E instance,  java.lang.String srgName)`
- `@Deprecated public static <T,E> void setPrivateValue(java.lang.Class<? super T> classToAccess,  T instance,  E value,  int fieldIndex)` (deprecated)
  Deprecated.
- `@Deprecated public static <T,E> void setPrivateValue(java.lang.Class<? super T> classToAccess,  T instance,  E value,  java.lang.String... fieldNames)` (deprecated)
  Deprecated. use setPrivateValue(Class, Object, Object, String)
- `public static <T,E> void setPrivateValue(java.lang.Class<? super T> classToAccess,  T instance,  E value,  java.lang.String srgName)`
- `public static java.lang.reflect.Field findField(java.lang.Class<?> clazz,  java.lang.String srgName)`
  Finds a field with the specified name in the given class and makes it accessible.
   Note: for performance, store the returned value and avoid calling this repeatedly.
  
   Throws an exception if the field is not found.
  - param: clazz - The class to find the field on.
  - param: srgName - The obfuscated name of the field to find.
  - returns: The field with the specified name in the given class.
- `public static java.lang.reflect.Method findMethod(java.lang.Class<?> clazz,  java.lang.String srgName,  java.lang.Class<?> returnType,  java.lang.Class<?>... parameterTypes)`
  Finds a method with the specified name and parameters in the given class and makes it accessible.
   Note: for performance, store the returned value and avoid calling this repeatedly.
  
   Throws an exception if the method is not found.
  - param: clazz - The class to find the method on.
  - param: srgName - The obfuscated name of the method to find.
  - param: returnType - The return type of the method to find.
  - param: parameterTypes - The parameter types of the method to find.
  - returns: The method with the specified name and type signature in the given class.
- `public static <T> java.lang.reflect.Constructor<T> findConstructor(java.lang.Class<T> klass,  java.lang.Class<?>... parameterTypes)`
  Finds a constructor in the specified class that has matching parameter types.
  - param: klass - The class to find the constructor in
  - param: parameterTypes - The parameter types of the constructor.
  - returns: The constructor

## Optional

*class* `net.minecraftforge.fml.common.Optional`

Classes annotated with this will have the named interface or method removed from the runtime definition of the class
 if the modid specified is missing.

## Optional.Interface

*annotation* `net.minecraftforge.fml.common.Optional.Interface`

Used to remove optional interfaces

## Optional.InterfaceList

*annotation* `net.minecraftforge.fml.common.Optional.InterfaceList`

Mark a list of interfaces as removable

## Optional.Method

*annotation* `net.minecraftforge.fml.common.Optional.Method`

Used to remove optional methods

## ProgressManager

*class* `net.minecraftforge.fml.common.ProgressManager`

Not a fully fleshed out API, may change in future MC versions.
 However feel free to use and suggest additions.

### Methods
- `public static ProgressManager.ProgressBar push(java.lang.String title,  int steps)`
  Not a fully fleshed out API, may change in future MC versions.
   However feel free to use and suggest additions.
- `public static ProgressManager.ProgressBar push(java.lang.String title,  int steps,  boolean timeEachStep)`
  Not a fully fleshed out API, may change in future MC versions.
   However feel free to use and suggest additions.
- `public static boolean isDisplayVSyncForced()`
- `public static void pop(ProgressManager.ProgressBar bar)`
  Not a fully fleshed out API, may change in future MC versions.
   However feel free to use and suggest additions.
- `public static java.util.Iterator<ProgressManager.ProgressBar> barIterator()`

## ProgressManager.ProgressBar

*class* `net.minecraftforge.fml.common.ProgressManager.ProgressBar`

Not a fully fleshed out API, may change in future MC versions.
 However feel free to use and suggest additions.

Enclosing class: ProgressManager

### Methods
- `public void step(java.lang.Class<?> classToName,  java.lang.String... extra)`
- `public void step(java.lang.String message)`
- `public java.lang.String getTitle()`
- `public int getSteps()`
- `public int getStep()`
- `public java.lang.String getMessage()`
- `public void timeEachStep()`

## ProxyInjector

*class* `net.minecraftforge.fml.common.ProxyInjector`

### Methods
- `public static void inject(ModContainer mod,  ASMDataTable data,  Side side,  ILanguageAdapter languageAdapter)`

## SaveInspectionHandler

*annotation* `net.minecraftforge.fml.common.SaveInspectionHandler`

A method annotated with this on the Mod will be called whenever a local save is listed in
 the save games list.

## SidedProxy

*annotation* `net.minecraftforge.fml.common.SidedProxy`

Sided proxies are loaded based on the specific environment they find themselves loaded into.
 They are used to ensure that client-specific code (such as GUIs) is only loaded into the game
 on the client side.
 It is applied to static fields of a class, anywhere in your mod code. FML will scan
 and load any classes with this annotation at mod construction time.

 This example will load a CommonProxy on the server side, and a ClientProxy on the client side.

 public class MySidedProxyHolder {
 {@literal @}SidedProxy(modId="MyModId",clientSide="mymod.ClientProxy", serverSide="mymod.CommonProxy")
 public static CommonProxy proxy;
 }

 public class CommonProxy {
 // Common or server stuff here that needs to be overridden on the client
 }

 public class ClientProxy extends CommonProxy {
 // Override common stuff with client specific stuff here
 }

## StartupQuery

*class* `net.minecraftforge.fml.common.StartupQuery`

### Methods
- `public static boolean confirm(java.lang.String text)`
- `public static void notify(java.lang.String text)`
- `public static void abort()`
- `public static void reset()`
- `public static boolean check()`
- `public java.lang.Boolean getResult()`
- `public void setResult(boolean result)`
- `public java.lang.String getText()`
- `public boolean isSynchronous()`
- `public void finish()`

## StartupQuery.AbortedException

*class* `net.minecraftforge.fml.common.StartupQuery.AbortedException`

Exception not being caught by the crash report generation logic.

All Implemented Interfaces: java.io.Serializable

Enclosing class: StartupQuery

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## TracingPrintStream

*class* `net.minecraftforge.fml.common.TracingPrintStream`

PrintStream which redirects it's output to a given logger.

All Implemented Interfaces: java.io.Closeable, java.io.Flushable, java.lang.Appendable, java.lang.AutoCloseable

### Inherited fields
- from `java.io.FilterOutputStream`: `out`

### Methods
- `public void println(java.lang.Object o)`
- `public void println(java.lang.String s)`

### Inherited methods
- from `java.io.PrintStream`: `append`, `append`, `append`, `checkError`, `clearError`, `close`, `flush`, `format`, `format`, `print`, `print`, `print`, `print`, `print`, `print`, `print`, `print`, `print`, `printf`, `printf`, `println`, `println`, `println`, `println`, `println`, `println`, `println`, `println`, `setError`, `write`, `write`
- from `java.io.FilterOutputStream`: `write`

## WorldAccessContainer

*interface* `net.minecraftforge.fml.common.WorldAccessContainer`

### Methods
- `NBTTagCompound getDataForWriting(SaveHandler handler,  WorldInfo info)`
- `void readData(SaveHandler handler,  WorldInfo info,  java.util.Map<java.lang.String,NBTBase> propertyMap,  NBTTagCompound tag)`

## WrongMinecraftVersionException

*class* `net.minecraftforge.fml.common.WrongMinecraftVersionException`

All Implemented Interfaces: java.io.Serializable, IDisplayableError

### Fields
- `public ModContainer mod`

### Methods
- `protected void printStackTrace(EnhancedRuntimeException.WrappedPrintStream stream)`
- `public GuiScreen createGui()`

### Inherited methods
- from `net.minecraftforge.fml.common.EnhancedRuntimeException`: `getMessage`, `printStackTrace`, `printStackTrace`
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `setStackTrace`, `toString`

## ZipperUtil

*class* `net.minecraftforge.fml.common.ZipperUtil`

Copied from http://stackoverflow.com/questions/1399126/java-util-zip-recreating-directory-structure
 because the code looked very tidy and neat. Thanks, McDowell!

### Methods
- `public static void zip(java.io.File directory,  java.io.File zipfile)  throws java.io.IOException`
  - throws: java.io.IOException
- `public static void backupWorld()  throws java.io.IOException`
  - throws: java.io.IOException
- `@Deprecated public static void backupWorld(java.lang.String dirName,  java.lang.String saveName)  throws java.io.IOException` (deprecated)
  Deprecated.
  - throws: java.io.IOException
- `public static void backupWorld(java.lang.String dirName)  throws java.io.IOException`
  - throws: java.io.IOException
