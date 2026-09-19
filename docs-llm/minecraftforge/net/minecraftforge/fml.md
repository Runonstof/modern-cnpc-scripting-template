# net.minecraftforge.fml

- [Bindings](#bindings)
- [Class LogicalSide](#class-logicalside)
- [Class ModLoadingPhase](#class-modloadingphase)
- [Class ModLoadingStage](#class-modloadingstage)
- [Class ThreadSelector](#class-threadselector)
- [Class VersionChecker.Status](#class-versionchecker.status)
- [CrashReportCallables](#crashreportcallables)
- [DeferredWorkQueue](#deferredworkqueue)
- [DeferredWorkQueue.TaskInfo](#deferredworkqueue.taskinfo)
- [DistExecutor](#distexecutor)
- [DistExecutor.SafeCallable](#distexecutor.safecallable)
- [DistExecutor.SafeReferent](#distexecutor.safereferent)
- [DistExecutor.SafeRunnable](#distexecutor.saferunnable)
- [DistExecutor.SafeSupplier](#distexecutor.safesupplier)
- [I18NParser](#i18nparser)
- [IBindingsProvider](#ibindingsprovider)
- [IExtensionPoint](#iextensionpoint)
- [IExtensionPoint.DisplayTest](#iextensionpoint.displaytest)
- [IModLoadingState](#imodloadingstate)
- [IModStateProvider](#imodstateprovider)
- [IModStateTransition](#imodstatetransition)
- [IModStateTransition.EventGenerator](#imodstatetransition.eventgenerator)
- [InterModComms](#intermodcomms)
- [InterModComms.IMCMessage](#intermodcomms.imcmessage)
- [InterModComms.QueueFilteringSpliterator](#intermodcomms.queuefilteringspliterator)
- [ISystemReportExtender](#isystemreportextender)
- [LoadingFailedException](#loadingfailedexception)
- [Logging](#logging)
- [ModContainer](#modcontainer)
- [ModList](#modlist)
- [ModList.UncaughtModLoadingException](#modlist.uncaughtmodloadingexception)
- [ModLoader](#modloader)
- [ModLoader.ErroredModContainer](#modloader.erroredmodcontainer)
- [ModLoadingContext](#modloadingcontext)
- [ModLoadingException](#modloadingexception)
- [ModLoadingState](#modloadingstate)
- [ModLoadingWarning](#modloadingwarning)
- [ModStateManager](#modstatemanager)
- [ModWorkManager](#modworkmanager)
- [ModWorkManager.DrivenExecutor](#modworkmanager.drivenexecutor)
- [ModWorkManager.SyncExecutor](#modworkmanager.syncexecutor)
- [ModWorkManager.WrappingExecutor](#modworkmanager.wrappingexecutor)
- [NoopTransition](#nooptransition)
- [OptionalMod](#optionalmod)
- [StartupMessageManager](#startupmessagemanager)
- [VersionChecker](#versionchecker)
- [VersionChecker.CheckResult](#versionchecker.checkresult)
## Bindings

*class* `net.minecraftforge.fml.Bindings`

### Fields
- `private static final Bindings INSTANCE`
- `private final IBindingsProvider provider`

### Methods
- `public static Supplier<net.minecraftforge.eventbus.api.IEventBus> getForgeBus()`
- `public static Supplier<I18NParser> getMessageParser()`
- `public static Supplier<IConfigEvent.ConfigConfig> getConfigConfiguration()`

## Class LogicalSide

*enum* `net.minecraftforge.fml.Class LogicalSide`

A logical side of the Minecraft game.

 The client distribution has a copy of the logical client and the logical server, while the
 dedicated server distribution only holds
 the logical server.

### Methods
- `public static LogicalSide[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static LogicalSide valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public boolean isServer()`
  Returns if this logical side is the server.
  - returns: if this logical side is the server
- `public boolean isClient()`
  Returns if the logical side is the client.
  - returns: if the logical side is the client

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ModLoadingPhase

*enum* `net.minecraftforge.fml.Class ModLoadingPhase`

Phases of mod loading, for grouping mod loading states.

### Methods
- `public static ModLoadingPhase[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ModLoadingPhase valueOf(String name)`
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

## Class ModLoadingStage

*enum* `net.minecraftforge.fml.Class ModLoadingStage`

Mod loading stage of mod containers during the mod loading process. These will have a corresponding ModLoadingState
 in the basic mod loading process provided by FML.

 Each mod loading stage has a global DeferredWorkQueue, which is populated during the execution of the state
 associated with this stage and emptied at the end of the state's execution.

### Fields
- `private final DeferredWorkQueue deferredWorkQueue`

### Methods
- `public static ModLoadingStage[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ModLoadingStage valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `ModLoadingStage nextState(Throwable exception)`
  Returns the next stage after this stage, or ERROR if the exception is not null.
  - param: exception - the exception that occurred during this stage, may be null
  - returns: the next stage after this stage, or ERROR if the exception is not null
- `public ModLoadingStage currentState(Throwable exception)`
  Returns this stage, or ERROR if the exception is not null.
  - param: exception - the exception that occurred during this stage, may be null
  - returns: this stage, or ERROR if the exception is not null
- `public DeferredWorkQueue getDeferredWorkQueue()`
  Returns the deferred work queue for this stage.
  - returns: the deferred work queue for this stage

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ThreadSelector

*enum* `net.minecraftforge.fml.Class ThreadSelector`

### Fields
- `private final BinaryOperator<Executor> selector`

### Methods
- `public static ThreadSelector[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ThreadSelector valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public Executor apply(Executor sync,  Executor parallel)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `java.util.function.BiFunction`: `andThen`

## Class VersionChecker.Status

*enum* `net.minecraftforge.fml.Class VersionChecker.Status`

Enclosing class: VersionChecker

### Fields
- `final int sheetOffset`
- `final boolean draw`
- `final boolean animated`

### Methods
- `public static VersionChecker.Status[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static VersionChecker.Status valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getSheetOffset()`
- `public boolean shouldDraw()`
- `public boolean isAnimated()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## CrashReportCallables

*class* `net.minecraftforge.fml.CrashReportCallables`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final List<ISystemReportExtender> crashCallables`

### Methods
- `public static void registerCrashCallable(ISystemReportExtender callable)`
  Register a custom ISystemReportExtender
- `public static void registerCrashCallable(String headerName,  Supplier<String> reportGenerator)`
  Register a system report extender with the given header name and content
   generator, which will always be appended to the system report
  - param: headerName - The name of the system report entry
  - param: reportGenerator - The report generator to be called when a crash report is built
- `public static void registerCrashCallable(String headerName,  Supplier<String> reportGenerator,  BooleanSupplier active)`
  Register a system report extender with the given header name and content
   generator, which will only be appended to the system report when the given BooleanSupplier returns true
  - param: headerName - The name of the system report entry
  - param: reportGenerator - The report generator to be called when a crash report is built
  - param: active - The supplier of the flag to be checked when a crash report is built
- `public static List<ISystemReportExtender> allCrashCallables()`

## DeferredWorkQueue

*class* `net.minecraftforge.fml.DeferredWorkQueue`

Utility for running code on the main launch thread at the next available
 opportunity. There is no guaranteed order that work from various mods will be
 run, but your own work will be run sequentially.

 Use of this class after startup is not possible. At that
 point, ReentrantBlockableEventLoop should be used instead.

 Exceptions from tasks will be handled gracefully, causing a mod loading
 error. Tasks that take egregiously long times to run will be logged.

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final Map<ModLoadingStage,DeferredWorkQueue> workQueues`
- `private final ConcurrentLinkedDeque<DeferredWorkQueue.TaskInfo> tasks`
- `private final ModLoadingStage modLoadingStage`

### Methods
- `public static Optional<DeferredWorkQueue> lookup(Optional<ModLoadingStage> parallelClass)`
- `public void runTasks()`
- `private static void makeRunnable(DeferredWorkQueue.TaskInfo ti,  Executor executor,  RuntimeException aggregate)`
- `private static <T> T captureException(String modId,  RuntimeException aggregate,  Throwable throwable)`
- `public CompletableFuture<Void> enqueueWork(ModContainer modInfo,  Runnable work)`
- `public <T> CompletableFuture<T> enqueueWork(ModContainer modInfo,  Supplier<T> work)`
- `private <T> CompletableFuture<T> enqueueWork(ModContainer modInfo,  Function<DeferredWorkQueue.TaskInfo,CompletableFuture<T>> futureGen)`

## DeferredWorkQueue.TaskInfo

*class* `net.minecraftforge.fml.DeferredWorkQueue.TaskInfo`

Enclosing class: DeferredWorkQueue

### Fields
- `private final ModContainer owner`
- `private Runnable task`
- `private CompletableFuture<?> future`

## DistExecutor

*class* `net.minecraftforge.fml.DistExecutor`

Use to execute code conditionally based on sidedness.

 When you want to call something on one side and return a result safeCallWhenOn(Dist, Supplier)
 When you want to call one thing on one side, another thing on the other and return a result safeRunForDist(Supplier, Supplier)
 When you want to run something on one side safeRunWhenOn(Dist, Supplier)

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`

### Methods
- `@Deprecated public static <T> T callWhenOn(net.minecraftforge.api.distmarker.Dist dist,  Supplier<Callable<T>> toRun)` (deprecated)
  Run the callable in the supplier only on the specified Dist.
   This method is NOT sided-safe and special care needs to be taken in code using this method that implicit class
   loading is not triggered by the Callable.
  
   This method can cause unexpected ClassNotFound exceptions.
  
   Use safeCallWhenOn(Dist, Supplier) where possible.
  - param: dist - The dist to run on
  - param: toRun - A supplier of the callable to run (Supplier wrapper to ensure classloading only on the appropriate dist)
  - returns: The callable's result
- `public static <T> T unsafeCallWhenOn(net.minecraftforge.api.distmarker.Dist dist,  Supplier<Callable<T>> toRun)`
- `public static <T> T safeCallWhenOn(net.minecraftforge.api.distmarker.Dist dist,  Supplier<DistExecutor.SafeCallable<T>> toRun)`
  Call the SafeCallable when on the correct Dist.
  
   The lambda supplied here is required to be a method reference to a method defined in
   another class, otherwise an invalid SafeReferent error will be thrown
  - param: dist - the dist which this will run on
  - param: toRun - the SafeCallable to run and return the result from
  - returns: the result of the SafeCallable or null if on the wrong side
- `@Deprecated public static void runWhenOn(net.minecraftforge.api.distmarker.Dist dist,  Supplier<Runnable> toRun)` (deprecated)
  Runs the supplied Runnable on the speicified side. Same warnings apply as callWhenOn(Dist, Supplier).
  
   This method can cause unexpected ClassNotFound exceptions.
  - param: dist - Dist to run this code on
  - param: toRun - The code to run
- `public static void unsafeRunWhenOn(net.minecraftforge.api.distmarker.Dist dist,  Supplier<Runnable> toRun)`
  Runs the supplied Runnable on the speicified side. Same warnings apply as unsafeCallWhenOn(Dist, Supplier).
  
   This method can cause unexpected ClassNotFoundException problems in common scenarios. Understand the pitfalls of
   the way the class verifier works to load classes before using this.
  
   Use safeRunWhenOn(Dist, Supplier) if you can.
  - param: dist - Dist to run this code on
  - param: toRun - The code to run
- `public static void safeRunWhenOn(net.minecraftforge.api.distmarker.Dist dist,  Supplier<DistExecutor.SafeRunnable> toRun)`
  Call the supplied SafeRunnable when on the correct Dist.
  - param: dist - The dist to run on
  - param: toRun - The code to run
- `@Deprecated public static <T> T runForDist(Supplier<Supplier<T>> clientTarget,  Supplier<Supplier<T>> serverTarget)` (deprecated)
  Executes one of the two suppliers, based on which side is active.
  
   Example (replacement for old SidedProxy):
  
   Proxy p = DistExecutor.runForDist(()->ClientProxy::new, ()->ServerProxy::new);
  
   NOTE: the double supplier is required to avoid classloading the secondary target.
  - param: clientTarget - The supplier supplier to run when on the Dist.CLIENT
  - param: serverTarget - The supplier supplier to run when on the Dist.DEDICATED_SERVER
  - returns: The returned instance
- `public static <T> T unsafeRunForDist(Supplier<Supplier<T>> clientTarget,  Supplier<Supplier<T>> serverTarget)`
  Unsafe version of safeRunForDist(Supplier, Supplier). Use only when you know what you're doing
   and understand why the verifier can cause unexpected ClassNotFoundException crashes even when code is apparently
   not sided. Ensure you test both sides fully to be confident in using this.
  - param: clientTarget - The supplier supplier to run when on the Dist.CLIENT
  - param: serverTarget - The supplier supplier to run when on the Dist.DEDICATED_SERVER
  - returns: The returned instance
- `public static <T> T safeRunForDist(Supplier<DistExecutor.SafeSupplier<T>> clientTarget,  Supplier<DistExecutor.SafeSupplier<T>> serverTarget)`
  Executes one of the two suppliers, based on which side is active.
  
   Example (replacement for old SidedProxy):
  
   Proxy p = DistExecutor.safeRunForDist(()->ClientProxy::new, ()->ServerProxy::new);
  
   NOTE: the double supplier is required to avoid classloading the secondary target.
  - param: clientTarget - The supplier supplier to run when on the Dist.CLIENT
  - param: serverTarget - The supplier supplier to run when on the Dist.DEDICATED_SERVER
  - returns: The returned instance
- `private static final void validateSafeReferent(Supplier<? extends DistExecutor.SafeReferent> safeReferentSupplier)`

## DistExecutor.SafeCallable

*interface* `net.minecraftforge.fml.DistExecutor.SafeCallable`

SafeCallable version of DistExecutor.SafeReferent.

All Superinterfaces: Callable<T>, DistExecutor.SafeReferent, Serializable

Enclosing class: DistExecutor

### Inherited methods
- from `java.util.concurrent.Callable`: `call`

## DistExecutor.SafeReferent

*interface* `net.minecraftforge.fml.DistExecutor.SafeReferent`

A safe referent. This will assert that it is being called via a separated class method reference. This will
 avoid the common pitfalls of DistExecutor.callWhenOn(Dist, Supplier) above.

 SafeReferents assert that they are defined as a separate method outside the scope of the calling class.

 Implementations need to be defined in a separate class to the referring site, with appropriate
 visibility to be accessible at the callsite (generally, avoid private methods).

 Valid:

 DistExecutor.safeCallWhenOn(Dist.CLIENT, ()->AnotherClass::clientOnlyMethod);

 Invalid:

 DistExecutor.safeCallWhenOn(Dist.CLIENT, ()->()->Minecraft.getInstance().world);

Enclosing class: DistExecutor

## DistExecutor.SafeRunnable

*interface* `net.minecraftforge.fml.DistExecutor.SafeRunnable`

SafeRunnable version of DistExecutor.SafeReferent

All Superinterfaces: DistExecutor.SafeReferent, Runnable, Serializable

Enclosing class: DistExecutor

### Inherited methods
- from `java.lang.Runnable`: `run`

## DistExecutor.SafeSupplier

*interface* `net.minecraftforge.fml.DistExecutor.SafeSupplier`

SafeSupplier version of DistExecutor.SafeReferent

All Superinterfaces: DistExecutor.SafeReferent, Serializable, Supplier<T>

Enclosing class: DistExecutor

### Inherited methods
- from `java.util.function.Supplier`: `get`

## I18NParser

*interface* `net.minecraftforge.fml.I18NParser`

### Methods
- `String parseMessage(String i18nMessage,  Object... args)`
- `String stripControlCodes(String toStrip)`

## IBindingsProvider

*interface* `net.minecraftforge.fml.IBindingsProvider`

### Methods
- `Supplier<net.minecraftforge.eventbus.api.IEventBus> getForgeBusSupplier()`
- `Supplier<I18NParser> getMessageParser()`
- `Supplier<IConfigEvent.ConfigConfig> getConfigConfiguration()`

## IExtensionPoint

*interface* `net.minecraftforge.fml.IExtensionPoint`

An extension point for a mod container.

 An extension point can be registered for a mod container using ModContainer.registerExtensionPoint(Class, Supplier)
 and retrieved (if present) using ModContainer.getCustomExtension(Class). An extension point allows a mod to
 supply an arbitrary value as a record class to another mod or framework through their mod container class, avoiding
 the use of InterModComms or other external frameworks to pass around these values.

 The usual way to declare an extension point is to implement this interface on a record class, with the type
 parameter being a reference to the class itself. For example, record MyExtension(...) extends
 IExtensionPoint<MyExtension> would declare an extension point which supplies a MyExtension object. However,
 there is no hard requirement that an extension point's type parameter must be in reference to itself; the type
 parameter may reference another record class instead.

## IExtensionPoint.DisplayTest

*record* `net.minecraftforge.fml.IExtensionPoint.DisplayTest`

Extension point for the compatibility display test used on the server selection screen.

 Note: "server" and "client" refers to the dedicated server
 and game client physical distributions, rather than the
 logical server and client.

 The Supplier provides the local compatibility version, which is sent from the server to the client
 for multiplayer connections or stored to disk for the world save. The BiPredicate accepts the remote
 compatibility version and a boolean indicating whether the remote version is from the server or a world save,
 where true means it is from the server and false means it is from the world save. The return
 value of the predicate determines whether the remote version is "compatible" for the purposes of the display test.

 The local compatibility version may be of the value IGNORESERVERONLY,
 in which case clients will ignore the mod's presence if it is present on the server but not on the client.
 However, the remote version test predicate must still accept this value as a remote version in order to display
 as compatible if the mod is present on the client.

 The compatibility display test does not necessarily indicate the success or failure of an actual
 connection attempt. Factors such as display test extension misconfiguration, truncation of ping data,
 difference of registry data or network channels between server and client, and others may cause the result of the
 compatibility test to not reflect the actual likelihood of a connection successfully being established between
 the server and the client.

 An example declaration of a display test extension registration for a regular mod (requires to be present on
 server and client) is as follows:

 String compatibilityVersion = "1"; // Could be linked with a network channel version or mod version
 ModLoadingContext.get().registerExtensionPoint(IExtensionPoint.DisplayTest.class,
 () -> new IExtensionPoint.DisplayTest(
 () -> compatibilityVersion,
 (remoteVersion, isFromServer) -> remoteVersion.equals(compatibilityVersion)
 )
 );

 An example declaration of a display test extension registration for a server-side-only mod (does not
 require to be present on the client) is as follows:

 ModLoadingContext.get().registerExtensionPoint(IExtensionPoint.DisplayTest.class,
 () -> new IExtensionPoint.DisplayTest(
 // Ignore this mod if not present on the client
 () -> NetworkConstants.IGNORESERVERONLY,
 // If present on the client, accept any version if from a server
 (remoteVersion, isFromServer) -> isFromServer
 )
 );

 An example declaration of a display test extension registration for a client-side-only mod (does not
 require to be present on the server) is as follows:

 ModLoadingContext.get().registerExtensionPoint(IExtensionPoint.DisplayTest.class,
 () -> new IExtensionPoint.DisplayTest(
 // Send any version from server to client, since we will be accepting any version as well
 () -> "dQw4w9WgXcQ",
 // Accept any version on the client, from server or from save
 (remoteVersion, isFromServer) -> true
 )
 );

Enclosing interface: IExtensionPoint<T extends Record>

### Fields
- `private final Supplier<String> suppliedVersion`
  The field for the suppliedVersion record component.
- `private final BiPredicate<String,Boolean> remoteVersionTest`
  The field for the remoteVersionTest record component.
- `public static final String IGNORESERVERONLY` (= "SERVER_ONLY")

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
- `public Supplier<String> suppliedVersion()`
  Returns the value of the suppliedVersion record component.
  - returns: the value of the suppliedVersion record component
- `public BiPredicate<String,Boolean> remoteVersionTest()`
  Returns the value of the remoteVersionTest record component.
  - returns: the value of the remoteVersionTest record component

## IModLoadingState

*interface* `net.minecraftforge.fml.IModLoadingState`

A mod loading state. During mod loading, the mod loader transitions between states in a defined sorted list of states,
 grouped into various phases.

### Methods
- `String name()`
  Returns the name of this state.
  - returns: the name of this state
- `String previous()`
  Returns the name of the state immediately previous to this state. This may be a blank name, which indicates this
   is either the first mod loading state or an exceptional mod loading state (such as a situation where errors
   prevent the loading process from continuing normally).
  - returns: the name of the state immediately previous to this state
- `ModLoadingPhase phase()`
  Returns the mod loading phase this state belongs to. For exceptional mod loading states, this should be
   ModLoadingPhase.ERROR.
  - returns: the mod loading phase this state belongs to
- `Function<ModList,String> message()`
  Returns a function returning a human-friendly message for this state.
  - returns: a function returning a human-friendly message for this state
- `ToIntFunction<ModList> size()`
  - returns: a function that computes the size of this transition based on the size of the modlist.
 Used to compute progress.
- `Optional<Consumer<ModList>> inlineRunnable()`
  Returns an optional runnable, which runs before starting the transition from this state to the next.
  - returns: an optional runnable, which runs before starting the transition from this state to the next
- `default <T extends net.minecraftforge.eventbus.api.Event & IModBusEvent> Optional<CompletableFuture<Void>> buildTransition(Executor syncExecutor,  Executor parallelExecutor,  ProgressMeter progressBar)`
  Builds the transition task for this state with a blank pre-sync and post-sync task.
  - param: syncExecutor - a synchronous executor
  - param: parallelExecutor - a parallel executor
  - param: progressBar - a progress meter for tracking progress
  - returns: a transition task for this state
- `<T extends net.minecraftforge.eventbus.api.Event & IModBusEvent> Optional<CompletableFuture<Void>> buildTransition(Executor syncExecutor,  Executor parallelExecutor,  ProgressMeter progressBar,  Function<Executor,CompletableFuture<Void>> preSyncTask,  Function<Executor,CompletableFuture<Void>> postSyncTask)`
  Builds the transition task for this state. The pre-sync and post-sync task functions allow the transition builder
   to run these tasks on the same executor as the actual event dispatch and pre/post hooks.
  - param: syncExecutor - a synchronous executor
  - param: parallelExecutor - a parallel executor
  - param: progressBar - a progress meter for tracking progress
  - param: preSyncTask - a function which returns a task to run before event pre-dispatch hook
  - param: postSyncTask - a function which returns a task to run after event post-dispatch hook
  - returns: a transition task for this state

## IModStateProvider

*interface* `net.minecraftforge.fml.IModStateProvider`

Provides a list of mod loading states which the mod loader may transition between.

 There may be multiple mod state providers in a single application, where all states from each provider is
 combined into a single list and ordered.

### Methods
- `List<IModLoadingState> getAllStates()`
  Returns the list of mod loading states known to this provider.
  - returns: the list of mod loading states known to this provider

## IModStateTransition

*interface* `net.minecraftforge.fml.IModStateTransition`

### Methods
- `static IModStateTransition buildNoopTransition()`
- `default <T extends net.minecraftforge.eventbus.api.Event & IModBusEvent> CompletableFuture<Void> build(String name,  Executor syncExecutor,  Executor parallelExecutor,  ProgressMeter progressBar,  Function<Executor,CompletableFuture<Void>> preSyncTask,  Function<Executor,CompletableFuture<Void>> postSyncTask)`
- `default BiFunction<ModLoadingStage,Throwable,ModLoadingStage> nextModLoadingStage()`
- `private <T extends net.minecraftforge.eventbus.api.Event & IModBusEvent> IModStateTransition.EventGenerator<T> addCompletableFutureTaskForModDispatch(Executor syncExecutor,  Executor parallelExecutor,  List<CompletableFuture<Void>> completableFutures,  ProgressMeter progressBar,  IModStateTransition.EventGenerator<T> eventGenerator,  BiFunction<ModLoadingStage,Throwable,ModLoadingStage> nextState,  IModStateTransition.EventGenerator<T> nextGenerator)`
- `Supplier<Stream<IModStateTransition.EventGenerator<?>>> eventFunctionStream()`
- `ThreadSelector threadSelector()`
- `BiFunction<Executor,CompletableFuture<Void>,CompletableFuture<Void>> finalActivityGenerator()`
- `BiFunction<Executor,? extends IModStateTransition.EventGenerator<?>,CompletableFuture<Void>> preDispatchHook()`
- `BiFunction<Executor,? extends IModStateTransition.EventGenerator<?>,CompletableFuture<Void>> postDispatchHook()`

## IModStateTransition.EventGenerator

*interface* `net.minecraftforge.fml.IModStateTransition.EventGenerator`

All Superinterfaces: Function<ModContainer, T>

Enclosing interface: IModStateTransition

### Methods
- `static <FN extends net.minecraftforge.eventbus.api.Event & IModBusEvent> IModStateTransition.EventGenerator<FN> fromFunction(Function<ModContainer,FN> fn)`

### Inherited methods
- from `java.util.function.Function`: `andThen`, `apply`, `compose`

## InterModComms

*class* `net.minecraftforge.fml.InterModComms`

### Fields
- `private static ConcurrentMap<String,ConcurrentLinkedQueue<InterModComms.IMCMessage>> containerQueues`

### Methods
- `public static boolean sendTo(String modId,  String method,  Supplier<?> thing)`
  Send IMC to remote. Sender will default to the active modcontainer, or minecraft if not.
  - param: modId - the mod id to send to
  - param: method - the method name to send
  - param: thing - the thing associated with the method name
  - returns: true if the message was enqueued for sending (the target modid is loaded)
- `public static boolean sendTo(String senderModId,  String modId,  String method,  Supplier<?> thing)`
  Send IMC to remote.
  - param: senderModId - the mod id you are sending from
  - param: modId - the mod id to send to
  - param: method - the method name to send
  - param: thing - the thing associated with the method name
  - returns: true if the message was enqueued for sending (the target modid is loaded)
- `public static Stream<InterModComms.IMCMessage> getMessages(String modId,  Predicate<String> methodMatcher)`
  Retrieve pending messages for your modid. Use the predicate to filter the method name.
  - param: modId - the modid you are querying for
  - param: methodMatcher - a predicate for the method you are interested in
  - returns: All messages passing the supplied method predicate
- `public static Stream<InterModComms.IMCMessage> getMessages(String modId)`
  Retrieve all message for your modid.
  - param: modId - the modid you are querying for
  - returns: All messages

## InterModComms.IMCMessage

*record* `net.minecraftforge.fml.InterModComms.IMCMessage`

Enclosing class: InterModComms

### Fields
- `private final String senderModId`
  The field for the senderModId record component.
- `private final String modId`
  The field for the modId record component.
- `private final String method`
  The field for the method record component.
- `private final Supplier<?> messageSupplier`
  The field for the messageSupplier record component.

### Methods
- `@Deprecated public final String getSenderModId()` (deprecated)
  Deprecated: use senderModId()
  - returns: The modid of the sender. This is supplied by the caller, or by the active mod container context.
 Consider it unreliable.
- `@Deprecated public final String getModId()` (deprecated)
  Deprecated: use modId()
  - returns: The modid being sent to.
- `@Deprecated public final String getMethod()` (deprecated)
  Deprecated: use method()
  - returns: The method being sent to.
- `@Deprecated public final <T> Supplier<T> getMessageSupplier()` (deprecated)
  - returns: A Supplier of the message.
 Use messageSupplier()
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
- `public String senderModId()`
  Returns the value of the senderModId record component.
  - returns: the value of the senderModId record component
- `public String modId()`
  Returns the value of the modId record component.
  - returns: the value of the modId record component
- `public String method()`
  Returns the value of the method record component.
  - returns: the value of the method record component
- `public Supplier<?> messageSupplier()`
  Returns the value of the messageSupplier record component.
  - returns: the value of the messageSupplier record component

## InterModComms.QueueFilteringSpliterator

*class* `net.minecraftforge.fml.InterModComms.QueueFilteringSpliterator`

Enclosing class: InterModComms

### Fields
- `private final ConcurrentLinkedQueue<InterModComms.IMCMessage> queue`
- `private final Predicate<String> methodFilter`
- `private final Iterator<InterModComms.IMCMessage> iterator`

### Inherited fields
- from `java.util.Spliterator`: `CONCURRENT`, `DISTINCT`, `IMMUTABLE`, `NONNULL`, `ORDERED`, `SIZED`, `SORTED`, `SUBSIZED`

### Methods
- `public int characteristics()`
- `public long estimateSize()`
- `public boolean tryAdvance(Consumer<? super InterModComms.IMCMessage> action)`
- `public Spliterator<InterModComms.IMCMessage> trySplit()`

### Inherited methods
- from `java.util.Spliterator`: `forEachRemaining`, `getComparator`, `getExactSizeIfKnown`, `hasCharacteristics`

## ISystemReportExtender

*interface* `net.minecraftforge.fml.ISystemReportExtender`

All Superinterfaces: Supplier<String>

### Methods
- `String getLabel()`
- `default boolean isActive()`

### Inherited methods
- from `java.util.function.Supplier`: `get`

## LoadingFailedException

*class* `net.minecraftforge.fml.LoadingFailedException`

### Fields
- `private final List<ModLoadingException> loadingExceptions`

### Methods
- `public List<ModLoadingException> getErrors()`
- `public String getMessage()`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## Logging

*class* `net.minecraftforge.fml.Logging`

### Fields
- `public static final org.apache.logging.log4j.Marker CORE`
- `public static final org.apache.logging.log4j.Marker LOADING`
- `public static final org.apache.logging.log4j.Marker SCAN`
- `public static final org.apache.logging.log4j.Marker SPLASH`
- `public static final org.apache.logging.log4j.Marker CAPABILITIES`
- `public static final org.apache.logging.log4j.Marker MODELLOADING`
- `public static final org.apache.logging.log4j.Marker FORGEMOD`

## ModContainer

*class* `net.minecraftforge.fml.ModContainer`

The container that wraps around mods in the system.

 The philosophy is that individual mod implementation technologies should not
 impact the actual loading and management of mod code. This class provides
 a mechanism by which we can wrap actual mod code so that the loader and other
 facilities can treat mods at arms length.

### Fields
- `protected final String modId`
- `protected final String namespace`
- `protected final net.minecraftforge.forgespi.language.IModInfo modInfo`
- `protected ModLoadingStage modLoadingStage`
- `protected Supplier<?> contextExtension`
- `protected final Map<ModLoadingStage,Runnable> activityMap`
- `protected final Map<Class<? extends IExtensionPoint<?>>,Supplier<?>> extensionPoints`
- `protected final EnumMap<ModConfig.Type,ModConfig> configs`
- `protected Optional<Consumer<IConfigEvent>> configHandler`

### Methods
- `public final String getModId()`
  - returns: the modid for this mod
- `public final String getNamespace()`
  - returns: the resource prefix for the mod
- `public ModLoadingStage getCurrentState()`
  - returns: The current loading stage for this mod
- `public static <T extends net.minecraftforge.eventbus.api.Event & IModBusEvent> CompletableFuture<Void> buildTransitionHandler(ModContainer target,  IModStateTransition.EventGenerator<T> eventGenerator,  ProgressMeter progressBar,  BiFunction<ModLoadingStage,Throwable,ModLoadingStage> stateChangeHandler,  Executor executor)`
- `public net.minecraftforge.forgespi.language.IModInfo getModInfo()`
- `public <T extends Record> Optional<T> getCustomExtension(Class<? extends IExtensionPoint<T>> point)`
- `public <T extends Record & IExtensionPoint<T>> void registerExtensionPoint(Class<? extends IExtensionPoint<T>> point,  Supplier<T> extension)`
- `public void addConfig(ModConfig modConfig)`
- `public void dispatchConfigEvent(IConfigEvent event)`
- `public abstract boolean matches(Object mod)`
  Does this mod match the supplied mod?
  - param: mod - to compare
  - returns: if the mod matches
- `public abstract Object getMod()`
  - returns: the mod object instance
- `protected <T extends net.minecraftforge.eventbus.api.Event & IModBusEvent> void acceptEvent(T e)`
  Accept an arbitrary event for processing by the mod. Probably posted to an event bus in the lower level container.
  - param: e - Event to accept

## ModList

*class* `net.minecraftforge.fml.ModList`

Master list of all mods - game-side version. This is classloaded in the game scope and
 can dispatch game level events as a result.

### Fields
- `private static org.apache.logging.log4j.Logger LOGGER`
- `private static ModList INSTANCE`
- `private final List<net.minecraftforge.forgespi.language.IModFileInfo> modFiles`
- `private final List<net.minecraftforge.forgespi.language.IModInfo> sortedList`
- `private final Map<String,ModFileInfo> fileById`
- `private List<ModContainer> mods`
- `private Map<String,ModContainer> indexedMods`
- `private List<net.minecraftforge.forgespi.language.ModFileScanData> modFileScanData`
- `private List<ModContainer> sortedContainers`

### Methods
- `private String getModContainerState(String modId)`
- `private String fileToLine(net.minecraftforge.forgespi.locating.IModFile mf)`
- `private String crashReport()`
- `public static ModList of(List<ModFile> modFiles,  List<ModInfo> sortedList)`
- `public static ModList get()`
- `private static ForkJoinWorkerThread newForkJoinWorkerThread(ForkJoinPool pool)`
- `public List<net.minecraftforge.forgespi.language.IModFileInfo> getModFiles()`
- `public net.minecraftforge.forgespi.language.IModFileInfo getModFileById(String modid)`
- `<T extends net.minecraftforge.eventbus.api.Event & IModBusEvent> Function<Executor,CompletableFuture<Void>> futureVisitor(IModStateTransition.EventGenerator<T> eventGenerator,  ProgressMeter progressBar,  BiFunction<ModLoadingStage,Throwable,ModLoadingStage> stateChange)`
- `static CompletionStage<Void> completableFutureFromExceptionList(List<? extends Map.Entry<?,Throwable>> t)`
- `static <V> CompletableFuture<List<Map.Entry<V,Throwable>>> gather(List<? extends CompletableFuture<? extends V>> futures)`
- `void setLoadedMods(List<ModContainer> modContainers)`
- `public <T> Optional<T> getModObjectById(String modId)`
- `public Optional<? extends ModContainer> getModContainerById(String modId)`
- `public Optional<? extends ModContainer> getModContainerByObject(Object obj)`
- `public List<net.minecraftforge.forgespi.language.IModInfo> getMods()`
- `public boolean isLoaded(String modTarget)`
- `public int size()`
- `public List<net.minecraftforge.forgespi.language.ModFileScanData> getAllScanData()`
- `public void forEachModFile(Consumer<net.minecraftforge.forgespi.locating.IModFile> fileConsumer)`
- `public <T> Stream<T> applyForEachModFile(Function<net.minecraftforge.forgespi.locating.IModFile,T> function)`
- `public void forEachModContainer(BiConsumer<String,ModContainer> modContainerConsumer)`
- `public void forEachModInOrder(Consumer<ModContainer> containerConsumer)`
- `public <T> Stream<T> applyForEachModContainer(Function<ModContainer,T> function)`

## ModList.UncaughtModLoadingException

*class* `net.minecraftforge.fml.ModList.UncaughtModLoadingException`

Enclosing class: ModList

### Inherited methods
- from `net.minecraftforge.fml.ModLoadingException`: `formatToString`, `fromEarlyException`, `getCleanMessage`, `getContext`, `getI18NMessage`, `getMessage`, `getModInfo`
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ModLoader

*class* `net.minecraftforge.fml.ModLoader`

Loads mods.

 Dispatch cycle is seen in #loadMods() and #finishMods()

 Overall sequence for loadMods is:

 CONSTRUCT
 Constructs the mod instance. Mods can typically setup basic environment such as Event listeners
 and Configuration specifications here.
 Automated dispatches
 Dispatches automated elements : net.minecraftforge.fml.common.Mod.EventBusSubscriber,
 net.minecraftforge.event.RegistryEvent, net.minecraftforge.common.capabilities.CapabilityInject
 and others
 CONFIG_LOAD
 Dispatches ConfigLoadEvent to mods
 COMMON_SETUP
 Dispatches net.minecraftforge.fml.event.lifecycle.FMLCommonSetupEvent to mods
 SIDED_SETUP
 Dispatches net.minecraftforge.fml.event.lifecycle.FMLClientSetupEvent or
 net.minecraftforge.fml.event.lifecycle.FMLDedicatedServerSetupEvent to mods

 Overall sequence for finishMods is:

 ENQUEUE_IMC
 Dispatches net.minecraftforge.fml.event.lifecycle.InterModEnqueueEvent to mods,
 for enqueuing InterModComms messages for other mods to receive subsequently
 PROCESS_IMC
 Dispatches net.minecraftforge.fml.event.lifecycle.InterModProcessEvent to mods,
 for processing InterModComms messages received from other mods prior to this event
 COMPLETE
 Dispatches net.minecraftforge.fml.event.lifecycle.FMLLoadCompleteEvent to mods,
 and completes the mod loading sequence.

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static ModLoader INSTANCE`
- `private final LoadingModList loadingModList`
- `private final List<ModLoadingException> loadingExceptions`
- `private final List<ModLoadingWarning> loadingWarnings`
- `private final ModStateManager stateManager`
- `private boolean loadingStateValid`
- `private final Optional<Consumer<String>> statusConsumer`
- `private final Set<IModLoadingState> completedStates`
- `private ModList modList`
- `private static boolean runningDataGen`

### Methods
- `private String computeLanguageList()`
- `private String computeModLauncherServiceList()`
- `public static ModLoader get()`
- `public void gatherAndInitializeMods(ModWorkManager.DrivenExecutor syncExecutor,  Executor parallelExecutor,  Runnable periodicTask)`
  Run on the primary starting thread by ClientModLoader and ServerModLoader
  - param: syncExecutor - An executor to run tasks on the main thread
  - param: parallelExecutor - An executor to run tasks on a parallel loading thread pool
  - param: periodicTask - Optional periodic task to perform on the main thread while other activities run
- `public void loadMods(ModWorkManager.DrivenExecutor syncExecutor,  Executor parallelExecutor,  Runnable periodicTask)`
- `public void finishMods(ModWorkManager.DrivenExecutor syncExecutor,  Executor parallelExecutor,  Runnable periodicTask)`
- `private void dispatchAndHandleError(IModLoadingState state,  ModWorkManager.DrivenExecutor syncExecutor,  Executor parallelExecutor,  Runnable ticker,  ProgressMeter progressBar)`
- `private void handleInlineTransition(Consumer<ModList> transition,  IModLoadingState state,  ModWorkManager.DrivenExecutor syncExecutor,  Runnable ticker)`
- `private void waitForTransition(IModLoadingState state,  ModWorkManager.DrivenExecutor syncExecutor,  Runnable ticker,  CompletableFuture<Void> transition)`
- `private List<ModContainer> buildMods(net.minecraftforge.forgespi.locating.IModFile modFile)`
- `private ModContainer buildModContainerFromTOML(net.minecraftforge.forgespi.locating.IModFile modFile,  Map<String,net.minecraftforge.forgespi.language.IModInfo> modInfoMap,  Map.Entry<String,? extends net.minecraftforge.forgespi.language.IModLanguageProvider.IModLanguageLoader> idToProviderEntry)`
- `public static boolean isLoadingStateValid()`
  - returns: If the current mod loading state is valid. Use if you interact with vanilla systems directly during loading
 and don't want to cause extraneous crashes due to trying to do things that aren't possible in a "broken load"
- `public boolean hasCompletedState(String stateName)`
- `public <T extends net.minecraftforge.eventbus.api.Event & IModBusEvent> void runEventGenerator(Function<ModContainer,T> generator)`
- `public <T extends net.minecraftforge.eventbus.api.Event & IModBusEvent> void postEvent(T e)`
- `public <T extends net.minecraftforge.eventbus.api.Event & IModBusEvent> T postEventWithReturn(T e)`
- `public <T extends net.minecraftforge.eventbus.api.Event & IModBusEvent> void postEventWrapContainerInModOrder(T event)`
- `public <T extends net.minecraftforge.eventbus.api.Event & IModBusEvent> void postEventWithWrapInModOrder(T e,  BiConsumer<ModContainer,T> pre,  BiConsumer<ModContainer,T> post)`
- `public List<ModLoadingWarning> getWarnings()`
- `public void addWarning(ModLoadingWarning warning)`
- `public static boolean isDataGenRunning()`

## ModLoader.ErroredModContainer

*class* `net.minecraftforge.fml.ModLoader.ErroredModContainer`

Enclosing class: ModLoader

### Inherited fields
- from `net.minecraftforge.fml.ModContainer`: `activityMap`, `configHandler`, `configs`, `contextExtension`, `extensionPoints`, `modId`, `modInfo`, `modLoadingStage`, `namespace`

### Methods
- `public boolean matches(Object mod)`
  Description copied from class: ModContainer
  Does this mod match the supplied mod?
  - param: mod - to compare
  - returns: if the mod matches
- `public Object getMod()`
  - returns: the mod object instance

### Inherited methods
- from `net.minecraftforge.fml.ModContainer`: `acceptEvent`, `addConfig`, `buildTransitionHandler`, `dispatchConfigEvent`, `getCurrentState`, `getCustomExtension`, `getModId`, `getModInfo`, `getNamespace`, `registerExtensionPoint`

## ModLoadingContext

*class* `net.minecraftforge.fml.ModLoadingContext`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final ThreadLocal<ModLoadingContext> context`
- `private Object languageExtension`
- `private ModLoadingStage stage`
- `private ModContainer activeContainer`

### Methods
- `public static ModLoadingContext get()`
- `public void setActiveContainer(ModContainer container)`
- `public ModContainer getActiveContainer()`
- `public String getActiveNamespace()`
- `public <T extends Record & IExtensionPoint<T>> void registerExtensionPoint(Class<? extends IExtensionPoint<T>> point,  Supplier<T> extension)`
  Register an IExtensionPoint with the mod container.
  - param: point - The extension point to register
  - param: extension - An extension operator
- `public void registerConfig(ModConfig.Type type,  IConfigSpec<?> spec)`
- `public void registerConfig(ModConfig.Type type,  IConfigSpec<?> spec,  String fileName)`
- `public <T> T extension()`

## ModLoadingException

*class* `net.minecraftforge.fml.ModLoadingException`

General purpose mod loading error message

### Fields
- `private static final long serialVersionUID` (= 2048947398536935507L)
- `private final net.minecraftforge.forgespi.language.IModInfo modInfo`
  Mod Info for mod with issue
- `private final ModLoadingStage errorStage`
  The stage where this error was encountered
- `private final String i18nMessage`
  I18N message to use for display
- `private final List<Object> context`
  Context for message display

### Methods
- `static Stream<ModLoadingException> fromEarlyException(EarlyLoadingException e)`
- `public String getI18NMessage()`
- `public Object[] getContext()`
- `public String formatToString()`
- `public String getMessage()`
- `public net.minecraftforge.forgespi.language.IModInfo getModInfo()`
- `public String getCleanMessage()`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ModLoadingState

*record* `net.minecraftforge.fml.ModLoadingState`

Implementation of the IModLoadingState interface.

### Fields
- `private final String name`
  The field for the name record component.
- `private final String previous`
  The field for the previous record component.
- `private final Function<ModList,String> message`
  The field for the message record component.
- `private final ToIntFunction<ModList> size`
  The field for the size record component.
- `private final ModLoadingPhase phase`
  The field for the phase record component.
- `private final Optional<Consumer<ModList>> inlineRunnable`
  The field for the inlineRunnable record component.
- `private final Optional<IModStateTransition> transition`
  The field for the transition record component.

### Methods
- `public <T extends net.minecraftforge.eventbus.api.Event & IModBusEvent> Optional<CompletableFuture<Void>> buildTransition(Executor syncExecutor,  Executor parallelExecutor,  ProgressMeter progressBar,  Function<Executor,CompletableFuture<Void>> preSyncTask,  Function<Executor,CompletableFuture<Void>> postSyncTask)`
  Description copied from interface: IModLoadingState
  Builds the transition task for this state. The pre-sync and post-sync task functions allow the transition builder
   to run these tasks on the same executor as the actual event dispatch and pre/post hooks.
  - param: syncExecutor - a synchronous executor
  - param: parallelExecutor - a parallel executor
  - param: progressBar - a progress meter for tracking progress
  - param: preSyncTask - a function which returns a task to run before event pre-dispatch hook
  - param: postSyncTask - a function which returns a task to run after event post-dispatch hook
  - returns: a transition task for this state
- `public static ModLoadingState empty(String name,  String previous,  ModLoadingPhase phase)`
  Returns an empty mod loading state. The mod loading state has a blank human-readable message, no inline runnable,
   and no state transition information.
  - param: name - the name of the state
  - param: previous - the name of the immediately previous state to this state
  - param: phase - the mod loading phase the state belongs to
  - returns: an empty mod loading state
- `public static ModLoadingState withTransition(String name,  String previous,  ModLoadingPhase phase,  IModStateTransition transition)`
  Returns a mod loading state with state transition information and a default human-friendly message of
   Processing transition [name].
  - param: name - the name of the state
  - param: previous - the name of the immediately previous state to this state
  - param: phase - the mod loading phase the state belongs to
  - param: transition - the state transition information
  - returns: a mod loading state with state transition information and a default message
- `public static ModLoadingState withTransition(String name,  String previous,  Function<ModList,String> message,  ModLoadingPhase phase,  IModStateTransition transition)`
  Returns a mod loading state with state transition information and a custom human-friendly message function.
  - param: name - the name of the state
  - param: previous - the name of the immediately previous state to this state
  - param: message - a function returning a human-friendly message for this state
  - param: phase - the mod loading phase the state belongs to
  - param: transition - the state transition information
  - returns: a mod loading state with state transition information and a custom message
- `public static ModLoadingState withInline(String name,  String previous,  ModLoadingPhase phase,  Consumer<ModList> inline)`
  Returns a mod loading state with an inline runnable and a default human-friendly message of Processing
   work [name].
  - param: name - the name of the state
  - param: previous - the name of the immediately previous state to this state
  - param: phase - the mod loading phase the state belongs to
  - param: inline - an optional runnable, which runs before starting the transition from this state to the next
  - returns: a mod loading state with an inline runnable and default message
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
- `public String name()`
  Returns the value of the name record component.
  - returns: the value of the name record component
- `public String previous()`
  Returns the value of the previous record component.
  - returns: the value of the previous record component
- `public Function<ModList,String> message()`
  Returns the value of the message record component.
  - returns: the value of the message record component
- `public ToIntFunction<ModList> size()`
  Returns the value of the size record component.
  - returns: the value of the size record component
- `public ModLoadingPhase phase()`
  Returns the value of the phase record component.
  - returns: the value of the phase record component
- `public Optional<Consumer<ModList>> inlineRunnable()`
  Returns the value of the inlineRunnable record component.
  - returns: the value of the inlineRunnable record component
- `public Optional<IModStateTransition> transition()`
  Returns the value of the transition record component.
  - returns: the value of the transition record component

### Inherited methods
- from `net.minecraftforge.fml.IModLoadingState`: `buildTransition`

## ModLoadingWarning

*class* `net.minecraftforge.fml.ModLoadingWarning`

### Fields
- `private final net.minecraftforge.forgespi.language.IModInfo modInfo`
  Mod Info for mod with warning
- `private final ModLoadingStage warningStage`
  The stage where this warning was encountered
- `private final String i18nMessage`
  I18N message to use for display
- `private final List<Object> context`
  Context for message display

### Methods
- `public String formatToString()`

## ModStateManager

*class* `net.minecraftforge.fml.ModStateManager`

### Fields
- `static ModStateManager INSTANCE`
- `private final EnumMap<ModLoadingPhase,List<IModLoadingState>> stateMap`

### Methods
- `public List<IModLoadingState> getStates(ModLoadingPhase phase)`
- `public IModLoadingState findState(String stateName)`

## ModWorkManager

*class* `net.minecraftforge.fml.ModWorkManager`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final long PARK_TIME`
- `private static ModWorkManager.SyncExecutor syncExecutor`
- `private static ForkJoinPool parallelThreadPool`

### Methods
- `public static ModWorkManager.DrivenExecutor syncExecutor()`
- `public static ModWorkManager.DrivenExecutor wrappedExecutor(Executor executor)`
- `public static Executor parallelExecutor()`
- `private static ForkJoinWorkerThread newForkJoinWorkerThread(ForkJoinPool pool)`

## ModWorkManager.DrivenExecutor

*interface* `net.minecraftforge.fml.ModWorkManager.DrivenExecutor`

All Superinterfaces: Executor

Enclosing class: ModWorkManager

### Methods
- `boolean selfDriven()`
- `boolean driveOne()`
- `default void drive(Runnable ticker)`

### Inherited methods
- from `java.util.concurrent.Executor`: `execute`

## ModWorkManager.SyncExecutor

*class* `net.minecraftforge.fml.ModWorkManager.SyncExecutor`

Enclosing class: ModWorkManager

### Fields
- `private ConcurrentLinkedDeque<Runnable> tasks`

### Methods
- `public boolean driveOne()`
- `public boolean selfDriven()`
- `public void execute(Runnable command)`

### Inherited methods
- from `net.minecraftforge.fml.ModWorkManager.DrivenExecutor`: `drive`

## ModWorkManager.WrappingExecutor

*class* `net.minecraftforge.fml.ModWorkManager.WrappingExecutor`

Enclosing class: ModWorkManager

### Fields
- `private final Executor wrapped`

### Methods
- `public boolean selfDriven()`
- `public boolean driveOne()`
- `public void execute(Runnable command)`

### Inherited methods
- from `net.minecraftforge.fml.ModWorkManager.DrivenExecutor`: `drive`

## NoopTransition

*record* `net.minecraftforge.fml.NoopTransition`

### Methods
- `public Supplier<Stream<IModStateTransition.EventGenerator<?>>> eventFunctionStream()`
- `public ThreadSelector threadSelector()`
- `public BiFunction<Executor,CompletableFuture<Void>,CompletableFuture<Void>> finalActivityGenerator()`
- `public BiFunction<Executor,? extends IModStateTransition.EventGenerator<?>,CompletableFuture<Void>> preDispatchHook()`
- `public BiFunction<Executor,? extends IModStateTransition.EventGenerator<?>,CompletableFuture<Void>> postDispatchHook()`
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

### Inherited methods
- from `net.minecraftforge.fml.IModStateTransition`: `build`, `nextModLoadingStage`

## OptionalMod

*class* `net.minecraftforge.fml.OptionalMod`

### Fields
- `private final String modId`
- `private T value`
- `private boolean searched`
- `private static OptionalMod<?> EMPTY`

### Methods
- `public static <M> OptionalMod<M> of(String modId)`
- `private static <T> OptionalMod<T> empty()`
- `private T getValue()`
- `public T get()`
  If a mod is present in this OptionalMod, returns the value,
   otherwise throws NoSuchElementException.
  - returns: the modobject held by this OptionalMod
  - throws: NoSuchElementException - if there is no modobject present
- `public String getModId()`
- `public boolean isPresent()`
  Return true if there is a mod object present, otherwise false.
  - returns: true if there is a mod object present, otherwise false
- `public void ifPresent(Consumer<? super T> consumer)`
  If a mod object is present, invoke the specified consumer with the object,
   otherwise do nothing.
  - param: consumer - block to be executed if a mod object is present
  - throws: NullPointerException - if mod object is present and consumer is
 null
- `public OptionalMod<T> filter(Predicate<? super T> predicate)`
  If a mod object is present, and the mod object matches the given predicate,
   return an OptionalMod describing the value, otherwise return an
   empty OptionalMod.
  - param: predicate - a predicate to apply to the mod object, if present
  - returns: an OptionalMod describing the value of this OptionalMod
 if a mod object is present and the mod object matches the given predicate,
 otherwise an empty OptionalMod
  - throws: NullPointerException - if the predicate is null
- `public <U> Optional<U> map(Function<? super T,? extends U> mapper)`
  If a mod object is present, apply the provided mapping function to it,
   and if the result is non-null, return an Optional describing the
   result. Otherwise return an empty Optional.
  - param: mapper - a mapping function to apply to the mod object, if present
  - returns: an Optional describing the result of applying a mapping
 function to the mod object of this OptionalMod, if a mod object is present,
 otherwise an empty Optional
  - throws: NullPointerException - if the mapping function is null
- `public <U> Optional<U> flatMap(Function<? super T,Optional<U>> mapper)`
  If a value is present, apply the provided Optional-bearing
   mapping function to it, return that result, otherwise return an empty
   Optional. This method is similar to map(Function),
   but the provided mapper is one whose result is already an Optional,
   and if invoked, flatMap does not wrap it with an additional
   Optional.
  - param: mapper - a mapping function to apply to the mod object, if present
 the mapping function
  - returns: the result of applying an Optional-bearing mapping
 function to the value of this Optional, if a value is present,
 otherwise an empty Optional
  - throws: NullPointerException - if the mapping function is null or returns
 a null result
- `public T orElse(T other)`
  Return the mod object if present, otherwise return other.
  - param: other - the mod object to be returned if there is no mod object present, may
 be null
  - returns: the mod object, if present, otherwise other
- `public T orElseGet(Supplier<? extends T> other)`
  Return the mod object if present, otherwise invoke other and return
   the result of that invocation.
  - param: other - a Supplier whose result is returned if no mod object
 is present
  - returns: the mod object if present otherwise the result of other.get()
  - throws: NullPointerException - if mod object is not present and other is
 null
- `public <X extends Throwable> T orElseThrow(Supplier<? extends X> exceptionSupplier)  throws X`
  Return the contained mod object, if present, otherwise throw an exception
   to be created by the provided supplier.
  - param: exceptionSupplier - The supplier which will return the exception to
 be thrown
  - returns: the present mod object
  - throws: X - if there is no mod object present
  - throws: NullPointerException - if no mod object is present and
 exceptionSupplier is null
- `public boolean equals(Object obj)`
- `public int hashCode()`

## StartupMessageManager

*class* `net.minecraftforge.fml.StartupMessageManager`

### Methods
- `public static void addModMessage(String message)`
- `public static Optional<Consumer<String>> modLoaderConsumer()`
- `public static Optional<Consumer<String>> mcLoaderConsumer()`
- `public static ProgressMeter addProgressBar(String barName,  int count)`
- `public static ProgressMeter prependProgressBar(String barName,  int count)`

## VersionChecker

*class* `net.minecraftforge.fml.VersionChecker`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final int MAX_HTTP_REDIRECTS`
- `private static final int HTTP_TIMEOUT_SECS`
- `private static Map<net.minecraftforge.forgespi.language.IModInfo,VersionChecker.CheckResult> results`
- `private static final VersionChecker.CheckResult PENDING_CHECK`

### Methods
- `public static void startVersionCheck()`
- `private static List<net.minecraftforge.forgespi.language.IModInfo> gatherMods()`
- `public static VersionChecker.CheckResult getResult(net.minecraftforge.forgespi.language.IModInfo mod)`

## VersionChecker.CheckResult

*record* `net.minecraftforge.fml.VersionChecker.CheckResult`

Enclosing class: VersionChecker

### Fields
- `private final VersionChecker.Status status`
  The field for the status record component.
- `private final org.apache.maven.artifact.versioning.ComparableVersion target`
  The field for the target record component.
- `private final Map<org.apache.maven.artifact.versioning.ComparableVersion,String> changes`
  The field for the changes record component.
- `private final String url`
  The field for the url record component.

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
- `public VersionChecker.Status status()`
  Returns the value of the status record component.
  - returns: the value of the status record component
- `public org.apache.maven.artifact.versioning.ComparableVersion target()`
  Returns the value of the target record component.
  - returns: the value of the target record component
- `public Map<org.apache.maven.artifact.versioning.ComparableVersion,String> changes()`
  Returns the value of the changes record component.
  - returns: the value of the changes record component
- `public String url()`
  Returns the value of the url record component.
  - returns: the value of the url record component
