# net.minecraftforge.fml.relauncher

- [CoreModManager](#coremodmanager)
- [FileListHelper](#filelisthelper)
- [FMLCorePlugin](#fmlcoreplugin)
- [FMLInjectionData](#fmlinjectiondata)
- [FMLLaunchHandler](#fmllaunchhandler)
- [FMLRelaunchLog](#fmlrelaunchlog)
- [FMLSecurityManager](#fmlsecuritymanager)
- [FMLSecurityManager.ExitTrappedException](#fmlsecuritymanager.exittrappedexception)
- [IFMLCallHook](#ifmlcallhook)
- [IFMLLoadingPlugin](#ifmlloadingplugin)
- [IFMLLoadingPlugin.DependsOn](#ifmlloadingplugin.dependson)
- [IFMLLoadingPlugin.MCVersion](#ifmlloadingplugin.mcversion)
- [IFMLLoadingPlugin.Name](#ifmlloadingplugin.name)
- [IFMLLoadingPlugin.SortingIndex](#ifmlloadingplugin.sortingindex)
- [IFMLLoadingPlugin.TransformerExclusions](#ifmlloadingplugin.transformerexclusions)
- [ReflectionHelper](#reflectionhelper)
- [ReflectionHelper.UnableToAccessFieldException](#reflectionhelper.unabletoaccessfieldexception)
- [ReflectionHelper.UnableToFindClassException](#reflectionhelper.unabletofindclassexception)
- [ReflectionHelper.UnableToFindFieldException](#reflectionhelper.unabletofindfieldexception)
- [ReflectionHelper.UnableToFindMethodException](#reflectionhelper.unabletofindmethodexception)
- [ReflectionHelper.UnknownConstructorException](#reflectionhelper.unknownconstructorexception)
- [ServerLaunchWrapper](#serverlaunchwrapper)
- [Side](#side)
- [SideOnly](#sideonly)
## CoreModManager

*class* `net.minecraftforge.fml.relauncher.CoreModManager`

### Methods
- `public static void handleLaunch(java.io.File mcDir,  LaunchClassLoader classLoader,  FMLTweaker tweaker)`
- `public static java.util.List<java.lang.String> getIgnoredMods()`
- `public static java.util.Map<java.lang.String,java.util.List<java.lang.String>> getTransformers()`
- `public static java.util.List<java.lang.String> getReparseableCoremods()`
- `public static void injectTransformers(LaunchClassLoader classLoader)`
- `public static void injectCoreModTweaks(FMLInjectionAndSortingTweaker fmlInjectionAndSortingTweaker)`
- `public static void sortTweakList()`
- `public static java.util.List<java.lang.String> getAccessTransformers()`
- `public static void onCrash(java.lang.StringBuilder builder)`

## FileListHelper

*class* `net.minecraftforge.fml.relauncher.FileListHelper`

### Methods
- `public static java.io.File[] sortFileList(java.io.File[] files)`
- `public static java.io.File[] sortFileList(java.io.File dir,  java.io.FilenameFilter filter)`

## FMLCorePlugin

*class* `net.minecraftforge.fml.relauncher.FMLCorePlugin`

All Implemented Interfaces: IFMLLoadingPlugin

### Methods
- `public java.lang.String[] getASMTransformerClass()`
  Description copied from interface: IFMLLoadingPlugin
  Return a list of classes that implements the IClassTransformer interface
  - returns: a list of classes that implements the IClassTransformer interface
- `public java.lang.String getAccessTransformerClass()`
  Description copied from interface: IFMLLoadingPlugin
  Return an optional access transformer class for this coremod. It will be injected post-deobf
   so ensure your ATs conform to the new srgnames scheme.
  - returns: the name of an access transformer class or null if none is provided
- `public java.lang.String getModContainerClass()`
  Description copied from interface: IFMLLoadingPlugin
  Return a class name that implements "ModContainer" for injection into the mod list
   The "getName" function should return a name that other mods can, if need be,
   depend on.
   Trivially, this modcontainer will be loaded before all regular mod containers,
   which means it will be forced to be "immutable" - not susceptible to normal
   sorting behaviour.
   All other mod behaviours are available however- this container can receive and handle
   normal loading events
- `public java.lang.String getSetupClass()`
  Description copied from interface: IFMLLoadingPlugin
  Return the class name of an implementor of "IFMLCallHook", that will be run, in the
   main thread, to perform any additional setup this coremod may require. It will be
   run prior to Minecraft starting, so it CANNOT operate on minecraft
   itself. The game will deliberately crash if this code is detected to trigger a
   minecraft class loading
   TODO: implement crash ;)
- `public void injectData(java.util.Map<java.lang.String,java.lang.Object> data)`
  Description copied from interface: IFMLLoadingPlugin
  Inject coremod data into this coremod
   This data includes:
   "mcLocation" : the location of the minecraft directory,
   "coremodList" : the list of coremods
   "coremodLocation" : the file this coremod loaded from,

## FMLInjectionData

*class* `net.minecraftforge.fml.relauncher.FMLInjectionData`

### Fields
- `public static final java.util.List<java.lang.String> containers`

### Methods
- `public static java.lang.Object[] data()`

## FMLLaunchHandler

*class* `net.minecraftforge.fml.relauncher.FMLLaunchHandler`

### Methods
- `public static void configureForClientLaunch(LaunchClassLoader loader,  FMLTweaker tweaker)`
- `public static void configureForServerLaunch(LaunchClassLoader loader,  FMLTweaker tweaker)`
- `public static Side side()`
- `public static void appendCoreMods()`
- `public static boolean isDeobfuscatedEnvironment()`

## FMLRelaunchLog

*class* `net.minecraftforge.fml.relauncher.FMLRelaunchLog`

Deprecated.

### Fields
- `public static final FMLRelaunchLog log` (deprecated)
  Deprecated.
  Our special logger for logging issues to. We copy various assets from the
   Minecraft logger to achieve a similar appearance.

### Methods
- `public static void log(java.lang.String targetLog,  Level level,  java.lang.String format,  java.lang.Object... data)` (deprecated)
  Deprecated.
- `public static void log(Level level,  java.lang.String format,  java.lang.Object... data)` (deprecated)
  Deprecated.
- `public static void log(java.lang.String targetLog,  Level level,  java.lang.Throwable ex,  java.lang.String format,  java.lang.Object... data)` (deprecated)
  Deprecated.
- `public static void log(Level level,  java.lang.Throwable ex,  java.lang.String format,  java.lang.Object... data)` (deprecated)
  Deprecated.
- `public static void severe(java.lang.String format,  java.lang.Object... data)` (deprecated)
  Deprecated.
- `public static void warning(java.lang.String format,  java.lang.Object... data)` (deprecated)
  Deprecated.
- `public static void info(java.lang.String format,  java.lang.Object... data)` (deprecated)
  Deprecated.
- `public static void fine(java.lang.String format,  java.lang.Object... data)` (deprecated)
  Deprecated.
- `public static void finer(java.lang.String format,  java.lang.Object... data)` (deprecated)
  Deprecated.
- `public Logger getLogger()` (deprecated)
  Deprecated.

## FMLSecurityManager

*class* `net.minecraftforge.fml.relauncher.FMLSecurityManager`

A custom security manager stopping certain events from happening
 unexpectedly.

### Inherited fields
- from `java.lang.SecurityManager`: `inCheck`

### Methods
- `public void checkPermission(java.security.Permission perm)`
- `public void checkPermission(java.security.Permission perm,  java.lang.Object context)`

### Inherited methods
- from `java.lang.SecurityManager`: `checkAccept`, `checkAccess`, `checkAccess`, `checkAwtEventQueueAccess`, `checkConnect`, `checkConnect`, `checkCreateClassLoader`, `checkDelete`, `checkExec`, `checkExit`, `checkLink`, `checkListen`, `checkMemberAccess`, `checkMulticast`, `checkMulticast`, `checkPackageAccess`, `checkPackageDefinition`, `checkPrintJobAccess`, `checkPropertiesAccess`, `checkPropertyAccess`, `checkRead`, `checkRead`, `checkRead`, `checkSecurityAccess`, `checkSetFactory`, `checkSystemClipboardAccess`, `checkTopLevelWindow`, `checkWrite`, `checkWrite`, `classDepth`, `classLoaderDepth`, `currentClassLoader`, `currentLoadedClass`, `getClassContext`, `getInCheck`, `getSecurityContext`, `getThreadGroup`, `inClass`, `inClassLoader`

## FMLSecurityManager.ExitTrappedException

*class* `net.minecraftforge.fml.relauncher.FMLSecurityManager.ExitTrappedException`

All Implemented Interfaces: java.io.Serializable

Enclosing class: FMLSecurityManager

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## IFMLCallHook

*interface* `net.minecraftforge.fml.relauncher.IFMLCallHook`

This call hook allows for code to execute at the very early stages of
 minecraft initialization. FML uses it to validate that there is a
 safe environment for further loading of FML.

All Superinterfaces: java.util.concurrent.Callable<java.lang.Void>

### Methods
- `void injectData(java.util.Map<java.lang.String,java.lang.Object> data)`
  Injected with data from the FML environment:
   "classLoader" : The FML Class Loader
  - param: data -

### Inherited methods
- from `java.util.concurrent.Callable`: `call`

## IFMLLoadingPlugin

*interface* `net.minecraftforge.fml.relauncher.IFMLLoadingPlugin`

The base plugin that provides class name meta information to FML to
 enhance the classloading lifecycle for mods in FML

### Methods
- `java.lang.String[] getASMTransformerClass()`
  Return a list of classes that implements the IClassTransformer interface
  - returns: a list of classes that implements the IClassTransformer interface
- `java.lang.String getModContainerClass()`
  Return a class name that implements "ModContainer" for injection into the mod list
   The "getName" function should return a name that other mods can, if need be,
   depend on.
   Trivially, this modcontainer will be loaded before all regular mod containers,
   which means it will be forced to be "immutable" - not susceptible to normal
   sorting behaviour.
   All other mod behaviours are available however- this container can receive and handle
   normal loading events
- `java.lang.String getSetupClass()`
  Return the class name of an implementor of "IFMLCallHook", that will be run, in the
   main thread, to perform any additional setup this coremod may require. It will be
   run prior to Minecraft starting, so it CANNOT operate on minecraft
   itself. The game will deliberately crash if this code is detected to trigger a
   minecraft class loading
   TODO: implement crash ;)
- `void injectData(java.util.Map<java.lang.String,java.lang.Object> data)`
  Inject coremod data into this coremod
   This data includes:
   "mcLocation" : the location of the minecraft directory,
   "coremodList" : the list of coremods
   "coremodLocation" : the file this coremod loaded from,
- `java.lang.String getAccessTransformerClass()`
  Return an optional access transformer class for this coremod. It will be injected post-deobf
   so ensure your ATs conform to the new srgnames scheme.
  - returns: the name of an access transformer class or null if none is provided

## IFMLLoadingPlugin.DependsOn

*annotation* `net.minecraftforge.fml.relauncher.IFMLLoadingPlugin.DependsOn`

## IFMLLoadingPlugin.MCVersion

*annotation* `net.minecraftforge.fml.relauncher.IFMLLoadingPlugin.MCVersion`

Use this to target a specific minecraft version for your coremod. It will refuse to load with an error if
 minecraft is not this exact version.

## IFMLLoadingPlugin.Name

*annotation* `net.minecraftforge.fml.relauncher.IFMLLoadingPlugin.Name`

Name this coremod something other than the "short class name"

## IFMLLoadingPlugin.SortingIndex

*annotation* `net.minecraftforge.fml.relauncher.IFMLLoadingPlugin.SortingIndex`

A simple sorting index, interleaved with other tweakers from other sources, as well as FML

## IFMLLoadingPlugin.TransformerExclusions

*annotation* `net.minecraftforge.fml.relauncher.IFMLLoadingPlugin.TransformerExclusions`

Annotate your load plugin with a list of package prefixes that will *not* be
 processed by the ASM transformation stack.

 Your plugin, and any transformers should *definitely* be in this list, because
 otherwise you can face problems with the classloader trying to transform classes
 with your transformer, whilst it is *loading* your transformer. Not pretty.

## ReflectionHelper

*class* `net.minecraftforge.fml.relauncher.ReflectionHelper`

Deprecated.
not for external use

### Methods
- `@Deprecated public static java.lang.reflect.Field findField(java.lang.Class<?> clazz,  java.lang.String... fieldNames)` (deprecated)
  Deprecated. use findField(Class, String, String)
- `public static java.lang.reflect.Field findField(java.lang.Class<?> clazz,  java.lang.String fieldName,  java.lang.String fieldObfName)` (deprecated)
  Deprecated.
  Finds a field with the specified name in the given class and makes it accessible.
   Note: for performance, store the returned value and avoid calling this repeatedly.
  
   Throws an exception if the field is not found.
  - param: clazz - The class to find the field on.
  - param: fieldName - The name of the field to find (used in developer environments, i.e. "maxStackSize").
  - param: fieldObfName - The obfuscated name of the field to find (used in obfuscated environments, i.e. "maxStackSize").
 If the name you are looking for is on a class that is never obfuscated, this should be null.
  - returns: The field with the specified name in the given class.
- `@Deprecated public static <T,E> T getPrivateValue(java.lang.Class<? super E> classToAccess,  E instance,  int fieldIndex)` (deprecated)
  Deprecated.
- `@Deprecated public static <T,E> T getPrivateValue(java.lang.Class<? super E> classToAccess,  E instance,  java.lang.String... fieldNames)` (deprecated)
  Deprecated. use getPrivateValue(Class, Object, String, String )
- `public static <T,E> T getPrivateValue(java.lang.Class<? super E> classToAccess,  E instance,  java.lang.String fieldName,  java.lang.String fieldObfName)` (deprecated)
  Deprecated.
- `@Deprecated public static <T,E> void setPrivateValue(java.lang.Class<? super T> classToAccess,  T instance,  E value,  int fieldIndex)` (deprecated)
  Deprecated.
- `@Deprecated public static <T,E> void setPrivateValue(java.lang.Class<? super T> classToAccess,  T instance,  E value,  java.lang.String... fieldNames)` (deprecated)
  Deprecated. use setPrivateValue(Class, Object, Object, String, String)
- `public static <T,E> void setPrivateValue(java.lang.Class<? super T> classToAccess,  T instance,  E value,  java.lang.String fieldName,  java.lang.String fieldObfName)` (deprecated)
  Deprecated.
- `public static java.lang.Class<? super java.lang.Object> getClass(java.lang.ClassLoader loader,  java.lang.String... classNames)` (deprecated)
  Deprecated.
- `public static java.lang.reflect.Method findMethod(java.lang.Class<?> clazz,  java.lang.String methodName,  java.lang.String methodObfName,  java.lang.Class<?>... parameterTypes)` (deprecated)
  Deprecated.
  Finds a method with the specified name and parameters in the given class and makes it accessible.
   Note: for performance, store the returned value and avoid calling this repeatedly.
  
   Throws an exception if the method is not found.
  - param: clazz - The class to find the method on.
  - param: methodName - The name of the method to find (used in developer environments, i.e. "getWorldTime").
  - param: methodObfName - The obfuscated name of the method to find (used in obfuscated environments, i.e. "getWorldTime").
 If the name you are looking for is on a class that is never obfuscated, this should be null.
  - param: parameterTypes - The parameter types of the method to find.
  - returns: The method with the specified name and parameters in the given class.
- `public static <T> java.lang.reflect.Constructor<T> findConstructor(java.lang.Class<T> klass,  java.lang.Class<?>... parameterTypes)` (deprecated)
  Deprecated.
  Finds a constructor in the specified class that has matching parameter types.
  - param: klass - The class to find the constructor in
  - param: parameterTypes - The parameter types of the constructor.
  - returns: The constructor
  - throws: java.lang.NullPointerException - if klass is null
  - throws: java.lang.NullPointerException - if parameterTypes is null
  - throws: ReflectionHelper.UnknownConstructorException - if the constructor could not be found

## ReflectionHelper.UnableToAccessFieldException

*class* `net.minecraftforge.fml.relauncher.ReflectionHelper.UnableToAccessFieldException`

All Implemented Interfaces: java.io.Serializable

Enclosing class: ReflectionHelper

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ReflectionHelper.UnableToFindClassException

*class* `net.minecraftforge.fml.relauncher.ReflectionHelper.UnableToFindClassException`

All Implemented Interfaces: java.io.Serializable

Enclosing class: ReflectionHelper

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ReflectionHelper.UnableToFindFieldException

*class* `net.minecraftforge.fml.relauncher.ReflectionHelper.UnableToFindFieldException`

All Implemented Interfaces: java.io.Serializable

Enclosing class: ReflectionHelper

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ReflectionHelper.UnableToFindMethodException

*class* `net.minecraftforge.fml.relauncher.ReflectionHelper.UnableToFindMethodException`

All Implemented Interfaces: java.io.Serializable

Enclosing class: ReflectionHelper

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ReflectionHelper.UnknownConstructorException

*class* `net.minecraftforge.fml.relauncher.ReflectionHelper.UnknownConstructorException`

All Implemented Interfaces: java.io.Serializable

Enclosing class: ReflectionHelper

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ServerLaunchWrapper

*class* `net.minecraftforge.fml.relauncher.ServerLaunchWrapper`

### Methods
- `public static void main(java.lang.String[] args)`
  - param: args -

## Side

*enum* `net.minecraftforge.fml.relauncher.Side`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<Side>

### Fields
- `public static final Side CLIENT`
  The client side. Specifically, an environment where rendering capability exists.
   Usually in the game client.
- `public static final Side SERVER`
  The server side. Specifically, an environment where NO rendering capability exists.
   Usually on the dedicated server.

### Methods
- `public static Side[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (Side c : Side.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static Side valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public boolean isServer()`
  - returns: If this is the server environment
- `public boolean isClient()`
  - returns: if this is the Client environment

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## SideOnly

*annotation* `net.minecraftforge.fml.relauncher.SideOnly`

Marks the associated element as being only available on a certain Side. This is
 generally meant for internal Forge and FML use only and should only be used on mod classes
 when other more common mechanisms, such as using a SidedProxy fail to work.

 Note, this will only apply to the direct element marked. This code:
 @SideOnly public MyField field = new MyField(); will not work, as the initializer
 is a separate piece of code to the actual field declaration, and will not be able to find
 it's field on the wrong side.
