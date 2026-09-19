# net.minecraftforge.fml.loading.targets

- [ArgumentList](#argumentlist)
- [ArgumentList.EntryValue](#argumentlist.entryvalue)
- [CommonDevLaunchHandler](#commondevlaunchhandler)
- [CommonLaunchHandler](#commonlaunchhandler)
- [CommonLaunchHandler.LaunchType](#commonlaunchhandler.launchtype)
- [CommonLaunchHandler.LocatedPaths](#commonlaunchhandler.locatedpaths)
- [ForgeDevLaunchHandler](#forgedevlaunchhandler)
- [ForgeDevLaunchHandler.Client](#forgedevlaunchhandler.client)
- [ForgeDevLaunchHandler.Data](#forgedevlaunchhandler.data)
- [ForgeDevLaunchHandler.Server](#forgedevlaunchhandler.server)
- [ForgeDevLaunchHandler.ServerGameTest](#forgedevlaunchhandler.servergametest)
- [ForgeProdLaunchHandler](#forgeprodlaunchhandler)
- [ForgeProdLaunchHandler.Client](#forgeprodlaunchhandler.client)
- [ForgeProdLaunchHandler.Server](#forgeprodlaunchhandler.server)
- [ForgeUserdevLaunchHandler](#forgeuserdevlaunchhandler)
- [ForgeUserdevLaunchHandler.Client](#forgeuserdevlaunchhandler.client)
- [ForgeUserdevLaunchHandler.Data](#forgeuserdevlaunchhandler.data)
- [ForgeUserdevLaunchHandler.Server](#forgeuserdevlaunchhandler.server)
- [ForgeUserdevLaunchHandler.ServerGameTest](#forgeuserdevlaunchhandler.servergametest)
## ArgumentList

*class* `net.minecraftforge.fml.loading.targets.ArgumentList`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private List<Supplier<String[]>> entries`
- `private Map<String,ArgumentList.EntryValue> values`

### Methods
- `public static ArgumentList from(String... args)`
- `public void addRaw(String arg)`
- `public void addArg(boolean split,  String raw,  String value)`
- `public String[] getArguments()`
- `public boolean hasValue(String key)`
- `public String get(String key)`
- `public String getOrDefault(String key,  String value)`
- `public void put(String key,  String value)`
- `public void putLazy(String key,  String value)`
- `public String remove(String key)`

## ArgumentList.EntryValue

*class* `net.minecraftforge.fml.loading.targets.ArgumentList.EntryValue`

Enclosing class: ArgumentList

### Fields
- `private final String prefix`
- `private final String key`
- `private final boolean split`
- `private String value`

### Methods
- `public String getKey()`
- `public String getValue()`
- `public void setValue(String value)`
- `public String[] get()`
- `public String toString()`

## CommonDevLaunchHandler

*class* `net.minecraftforge.fml.loading.targets.CommonDevLaunchHandler`

### Inherited fields
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `CLIENT`, `DATA`, `LOGGER`, `SERVER`, `SERVER_GAMETEST`

### Methods
- `public String getNaming()`
- `public boolean isProduction()`
- `protected String[] preLaunch(String[] arguments,  ModuleLayer layer)`
- `protected List<Path> getLibraries(String[] classpath)`
- `protected BiPredicate<String,String> getMcFilter(Path extra,  List<Path> minecraft)`
- `protected Path getForgeMod(List<Path> minecraft)`
- `private static String[] getPackages()`
- `private static String getRandomNumbers(int length)`
- `protected cpw.mods.modlauncher.api.ServiceRunner makeService(String[] arguments,  ModuleLayer gameLayer)`
- `protected static Map<String,List<Path>> getModClasses()`
- `protected static Path findJarOnClasspath(String[] classpath,  String match)`

### Inherited methods
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `configureTransformationClassLoader`, `getDist`, `getMinecraftPaths`, `isData`, `launchService`, `name`, `runTarget`
- from `cpw.mods.modlauncher.api.ILaunchHandlerService`: `getPaths`

## CommonLaunchHandler

*class* `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`

This is required by FMLLoader because ILaunchHandlerService doesn't have the context we need.
 I need to clean this up to make proper api. But that involves editing ModLauncher itself which i'm not gunna do right now.

 So until that happens, guess this is public api.

### Fields
- `protected static final org.slf4j.Logger LOGGER`
- `private final CommonLaunchHandler.LaunchType type`
- `private final String prefix`
- `protected static final CommonLaunchHandler.LaunchType CLIENT`
- `protected static final CommonLaunchHandler.LaunchType DATA`
- `protected static final CommonLaunchHandler.LaunchType SERVER`
- `protected static final CommonLaunchHandler.LaunchType SERVER_GAMETEST`

### Methods
- `public String name()`
- `public net.minecraftforge.api.distmarker.Dist getDist()`
- `public boolean isData()`
- `public boolean isProduction()`
- `public abstract String getNaming()`
- `public abstract CommonLaunchHandler.LocatedPaths getMinecraftPaths()`
- `public void configureTransformationClassLoader(cpw.mods.modlauncher.api.ITransformingClassLoaderBuilder builder)`
- `protected String[] preLaunch(String[] arguments,  ModuleLayer layer)`
- `public cpw.mods.modlauncher.api.ServiceRunner launchService(String[] arguments,  ModuleLayer gameLayer)`
- `protected cpw.mods.modlauncher.api.ServiceRunner makeService(String[] arguments,  ModuleLayer gameLayer)`
- `protected void runTarget(String module,  String target,  String[] arguments,  ModuleLayer layer)  throws Throwable`
  - throws: Throwable

### Inherited methods
- from `cpw.mods.modlauncher.api.ILaunchHandlerService`: `getPaths`

## CommonLaunchHandler.LaunchType

*record* `net.minecraftforge.fml.loading.targets.CommonLaunchHandler.LaunchType`

Enclosing class: CommonLaunchHandler

### Fields
- `private final String name`
  The field for the name record component.
- `private final String module`
  The field for the module record component.
- `private final String main`
  The field for the main record component.
- `private final net.minecraftforge.api.distmarker.Dist dist`
  The field for the dist record component.
- `private final boolean data`
  The field for the data record component.

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
- `public String name()`
  Returns the value of the name record component.
  - returns: the value of the name record component
- `public String module()`
  Returns the value of the module record component.
  - returns: the value of the module record component
- `public String main()`
  Returns the value of the main record component.
  - returns: the value of the main record component
- `public net.minecraftforge.api.distmarker.Dist dist()`
  Returns the value of the dist record component.
  - returns: the value of the dist record component
- `public boolean data()`
  Returns the value of the data record component.
  - returns: the value of the data record component

## CommonLaunchHandler.LocatedPaths

*record* `net.minecraftforge.fml.loading.targets.CommonLaunchHandler.LocatedPaths`

Enclosing class: CommonLaunchHandler

### Fields
- `private final List<Path> minecraftPaths`
  The field for the minecraftPaths record component.
- `private final BiPredicate<String,String> minecraftFilter`
  The field for the minecraftFilter record component.
- `private final List<List<Path>> otherModPaths`
  The field for the otherModPaths record component.
- `private final List<Path> otherArtifacts`
  The field for the otherArtifacts record component.

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
- `public List<Path> minecraftPaths()`
  Returns the value of the minecraftPaths record component.
  - returns: the value of the minecraftPaths record component
- `public BiPredicate<String,String> minecraftFilter()`
  Returns the value of the minecraftFilter record component.
  - returns: the value of the minecraftFilter record component
- `public List<List<Path>> otherModPaths()`
  Returns the value of the otherModPaths record component.
  - returns: the value of the otherModPaths record component
- `public List<Path> otherArtifacts()`
  Returns the value of the otherArtifacts record component.
  - returns: the value of the otherArtifacts record component

## ForgeDevLaunchHandler

*class* `net.minecraftforge.fml.loading.targets.ForgeDevLaunchHandler`

### Fields
- `private static final String MODS_TOML` (= "META-INF/mods.toml")
- `private static final String PACK_META` (= "pack.mcmeta")
- `private static final cpw.mods.niofs.union.UnionFileSystemProvider UFSP`

### Inherited fields
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `CLIENT`, `DATA`, `LOGGER`, `SERVER`, `SERVER_GAMETEST`

### Methods
- `public CommonLaunchHandler.LocatedPaths getMinecraftPaths()`
- `private List<List<Path>> explodeTestMods(List<Path> paths)`
- `private Map<String,Set<String>> findTestModPackages(List<Path> paths)`
- `private void buildModsToml(Set<Path> resources,  Set<String> modids,  Path root)`
- `private void buildPackMeta(Set<Path> paths,  Path root)`
- `private static <E extends Throwable, R> R sneak(Throwable e)  throws E`
  - throws: E extends Throwable

### Inherited methods
- from `net.minecraftforge.fml.loading.targets.CommonDevLaunchHandler`: `findJarOnClasspath`, `getForgeMod`, `getLibraries`, `getMcFilter`, `getModClasses`, `getNaming`, `isProduction`, `makeService`, `preLaunch`
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `configureTransformationClassLoader`, `getDist`, `isData`, `launchService`, `name`, `runTarget`
- from `cpw.mods.modlauncher.api.ILaunchHandlerService`: `getPaths`

## ForgeDevLaunchHandler.Client

*class* `net.minecraftforge.fml.loading.targets.ForgeDevLaunchHandler.Client`

Enclosing class: ForgeDevLaunchHandler

### Inherited fields
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `CLIENT`, `DATA`, `LOGGER`, `SERVER`, `SERVER_GAMETEST`

### Inherited methods
- from `net.minecraftforge.fml.loading.targets.ForgeDevLaunchHandler`: `getMinecraftPaths`
- from `net.minecraftforge.fml.loading.targets.CommonDevLaunchHandler`: `findJarOnClasspath`, `getForgeMod`, `getLibraries`, `getMcFilter`, `getModClasses`, `getNaming`, `isProduction`, `makeService`, `preLaunch`
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `configureTransformationClassLoader`, `getDist`, `isData`, `launchService`, `name`, `runTarget`
- from `cpw.mods.modlauncher.api.ILaunchHandlerService`: `getPaths`

## ForgeDevLaunchHandler.Data

*class* `net.minecraftforge.fml.loading.targets.ForgeDevLaunchHandler.Data`

Enclosing class: ForgeDevLaunchHandler

### Inherited fields
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `CLIENT`, `DATA`, `LOGGER`, `SERVER`, `SERVER_GAMETEST`

### Inherited methods
- from `net.minecraftforge.fml.loading.targets.ForgeDevLaunchHandler`: `getMinecraftPaths`
- from `net.minecraftforge.fml.loading.targets.CommonDevLaunchHandler`: `findJarOnClasspath`, `getForgeMod`, `getLibraries`, `getMcFilter`, `getModClasses`, `getNaming`, `isProduction`, `makeService`, `preLaunch`
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `configureTransformationClassLoader`, `getDist`, `isData`, `launchService`, `name`, `runTarget`
- from `cpw.mods.modlauncher.api.ILaunchHandlerService`: `getPaths`

## ForgeDevLaunchHandler.Server

*class* `net.minecraftforge.fml.loading.targets.ForgeDevLaunchHandler.Server`

Enclosing class: ForgeDevLaunchHandler

### Inherited fields
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `CLIENT`, `DATA`, `LOGGER`, `SERVER`, `SERVER_GAMETEST`

### Inherited methods
- from `net.minecraftforge.fml.loading.targets.ForgeDevLaunchHandler`: `getMinecraftPaths`
- from `net.minecraftforge.fml.loading.targets.CommonDevLaunchHandler`: `findJarOnClasspath`, `getForgeMod`, `getLibraries`, `getMcFilter`, `getModClasses`, `getNaming`, `isProduction`, `makeService`, `preLaunch`
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `configureTransformationClassLoader`, `getDist`, `isData`, `launchService`, `name`, `runTarget`
- from `cpw.mods.modlauncher.api.ILaunchHandlerService`: `getPaths`

## ForgeDevLaunchHandler.ServerGameTest

*class* `net.minecraftforge.fml.loading.targets.ForgeDevLaunchHandler.ServerGameTest`

Enclosing class: ForgeDevLaunchHandler

### Inherited fields
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `CLIENT`, `DATA`, `LOGGER`, `SERVER`, `SERVER_GAMETEST`

### Inherited methods
- from `net.minecraftforge.fml.loading.targets.ForgeDevLaunchHandler`: `getMinecraftPaths`
- from `net.minecraftforge.fml.loading.targets.CommonDevLaunchHandler`: `findJarOnClasspath`, `getForgeMod`, `getLibraries`, `getMcFilter`, `getModClasses`, `getNaming`, `isProduction`, `makeService`, `preLaunch`
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `configureTransformationClassLoader`, `getDist`, `isData`, `launchService`, `name`, `runTarget`
- from `cpw.mods.modlauncher.api.ILaunchHandlerService`: `getPaths`

## ForgeProdLaunchHandler

*class* `net.minecraftforge.fml.loading.targets.ForgeProdLaunchHandler`

### Inherited fields
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `CLIENT`, `DATA`, `LOGGER`, `SERVER`, `SERVER_GAMETEST`

### Methods
- `public String getNaming()`
- `public boolean isProduction()`
- `protected Path mvn(VersionInfo info,  String artifact)`
- `protected Path mvn(VersionInfo info,  String artifact,  String classifier)`
- `protected Path mvn(String group,  String artifact,  String classifier,  String version)`
- `public CommonLaunchHandler.LocatedPaths getMinecraftPaths()`
- `protected abstract List<Path> getMCPaths(VersionInfo vers)`

### Inherited methods
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `configureTransformationClassLoader`, `getDist`, `isData`, `launchService`, `makeService`, `name`, `preLaunch`, `runTarget`
- from `cpw.mods.modlauncher.api.ILaunchHandlerService`: `getPaths`

## ForgeProdLaunchHandler.Client

*class* `net.minecraftforge.fml.loading.targets.ForgeProdLaunchHandler.Client`

Enclosing class: ForgeProdLaunchHandler

### Inherited fields
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `CLIENT`, `DATA`, `LOGGER`, `SERVER`, `SERVER_GAMETEST`

### Methods
- `protected List<Path> getMCPaths(VersionInfo vers)`

### Inherited methods
- from `net.minecraftforge.fml.loading.targets.ForgeProdLaunchHandler`: `getMinecraftPaths`, `getNaming`, `isProduction`, `mvn`, `mvn`, `mvn`
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `configureTransformationClassLoader`, `getDist`, `isData`, `launchService`, `makeService`, `name`, `preLaunch`, `runTarget`
- from `cpw.mods.modlauncher.api.ILaunchHandlerService`: `getPaths`

## ForgeProdLaunchHandler.Server

*class* `net.minecraftforge.fml.loading.targets.ForgeProdLaunchHandler.Server`

Enclosing class: ForgeProdLaunchHandler

### Inherited fields
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `CLIENT`, `DATA`, `LOGGER`, `SERVER`, `SERVER_GAMETEST`

### Methods
- `protected List<Path> getMCPaths(VersionInfo vers)`

### Inherited methods
- from `net.minecraftforge.fml.loading.targets.ForgeProdLaunchHandler`: `getMinecraftPaths`, `getNaming`, `isProduction`, `mvn`, `mvn`, `mvn`
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `configureTransformationClassLoader`, `getDist`, `isData`, `launchService`, `makeService`, `name`, `preLaunch`, `runTarget`
- from `cpw.mods.modlauncher.api.ILaunchHandlerService`: `getPaths`

## ForgeUserdevLaunchHandler

*class* `net.minecraftforge.fml.loading.targets.ForgeUserdevLaunchHandler`

### Inherited fields
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `CLIENT`, `DATA`, `LOGGER`, `SERVER`, `SERVER_GAMETEST`

### Methods
- `public CommonLaunchHandler.LocatedPaths getMinecraftPaths()`

### Inherited methods
- from `net.minecraftforge.fml.loading.targets.CommonDevLaunchHandler`: `findJarOnClasspath`, `getForgeMod`, `getLibraries`, `getMcFilter`, `getModClasses`, `getNaming`, `isProduction`, `makeService`, `preLaunch`
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `configureTransformationClassLoader`, `getDist`, `isData`, `launchService`, `name`, `runTarget`
- from `cpw.mods.modlauncher.api.ILaunchHandlerService`: `getPaths`

## ForgeUserdevLaunchHandler.Client

*class* `net.minecraftforge.fml.loading.targets.ForgeUserdevLaunchHandler.Client`

Enclosing class: ForgeUserdevLaunchHandler

### Inherited fields
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `CLIENT`, `DATA`, `LOGGER`, `SERVER`, `SERVER_GAMETEST`

### Inherited methods
- from `net.minecraftforge.fml.loading.targets.ForgeUserdevLaunchHandler`: `getMinecraftPaths`
- from `net.minecraftforge.fml.loading.targets.CommonDevLaunchHandler`: `findJarOnClasspath`, `getForgeMod`, `getLibraries`, `getMcFilter`, `getModClasses`, `getNaming`, `isProduction`, `makeService`, `preLaunch`
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `configureTransformationClassLoader`, `getDist`, `isData`, `launchService`, `name`, `runTarget`
- from `cpw.mods.modlauncher.api.ILaunchHandlerService`: `getPaths`

## ForgeUserdevLaunchHandler.Data

*class* `net.minecraftforge.fml.loading.targets.ForgeUserdevLaunchHandler.Data`

Enclosing class: ForgeUserdevLaunchHandler

### Inherited fields
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `CLIENT`, `DATA`, `LOGGER`, `SERVER`, `SERVER_GAMETEST`

### Inherited methods
- from `net.minecraftforge.fml.loading.targets.ForgeUserdevLaunchHandler`: `getMinecraftPaths`
- from `net.minecraftforge.fml.loading.targets.CommonDevLaunchHandler`: `findJarOnClasspath`, `getForgeMod`, `getLibraries`, `getMcFilter`, `getModClasses`, `getNaming`, `isProduction`, `makeService`, `preLaunch`
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `configureTransformationClassLoader`, `getDist`, `isData`, `launchService`, `name`, `runTarget`
- from `cpw.mods.modlauncher.api.ILaunchHandlerService`: `getPaths`

## ForgeUserdevLaunchHandler.Server

*class* `net.minecraftforge.fml.loading.targets.ForgeUserdevLaunchHandler.Server`

Enclosing class: ForgeUserdevLaunchHandler

### Inherited fields
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `CLIENT`, `DATA`, `LOGGER`, `SERVER`, `SERVER_GAMETEST`

### Inherited methods
- from `net.minecraftforge.fml.loading.targets.ForgeUserdevLaunchHandler`: `getMinecraftPaths`
- from `net.minecraftforge.fml.loading.targets.CommonDevLaunchHandler`: `findJarOnClasspath`, `getForgeMod`, `getLibraries`, `getMcFilter`, `getModClasses`, `getNaming`, `isProduction`, `makeService`, `preLaunch`
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `configureTransformationClassLoader`, `getDist`, `isData`, `launchService`, `name`, `runTarget`
- from `cpw.mods.modlauncher.api.ILaunchHandlerService`: `getPaths`

## ForgeUserdevLaunchHandler.ServerGameTest

*class* `net.minecraftforge.fml.loading.targets.ForgeUserdevLaunchHandler.ServerGameTest`

Enclosing class: ForgeUserdevLaunchHandler

### Inherited fields
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `CLIENT`, `DATA`, `LOGGER`, `SERVER`, `SERVER_GAMETEST`

### Inherited methods
- from `net.minecraftforge.fml.loading.targets.ForgeUserdevLaunchHandler`: `getMinecraftPaths`
- from `net.minecraftforge.fml.loading.targets.CommonDevLaunchHandler`: `findJarOnClasspath`, `getForgeMod`, `getLibraries`, `getMcFilter`, `getModClasses`, `getNaming`, `isProduction`, `makeService`, `preLaunch`
- from `net.minecraftforge.fml.loading.targets.CommonLaunchHandler`: `configureTransformationClassLoader`, `getDist`, `isData`, `launchService`, `name`, `runTarget`
- from `cpw.mods.modlauncher.api.ILaunchHandlerService`: `getPaths`
