# net.minecraftforge.fml.config

- [Class ModConfig.Type](#class-modconfig.type)
- [ConfigFileTypeHandler](#configfiletypehandler)
- [ConfigFileTypeHandler.ConfigLoadingException](#configfiletypehandler.configloadingexception)
- [ConfigFileTypeHandler.ConfigWatcher](#configfiletypehandler.configwatcher)
- [ConfigTracker](#configtracker)
- [IConfigEvent](#iconfigevent)
- [IConfigEvent.ConfigConfig](#iconfigevent.configconfig)
- [IConfigSpec>](#iconfigspec)
- [ModConfig](#modconfig)
## Class ModConfig.Type

*enum* `net.minecraftforge.fml.config.Class ModConfig.Type`

Enclosing class: ModConfig

### Methods
- `public static ModConfig.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ModConfig.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String extension()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ConfigFileTypeHandler

*class* `net.minecraftforge.fml.config.ConfigFileTypeHandler`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `static ConfigFileTypeHandler TOML`
- `private static final Path defaultConfigPath`

### Methods
- `public Function<ModConfig,com.electronwill.nightconfig.core.file.CommentedFileConfig> reader(Path configBasePath)`
- `public void unload(Path configBasePath,  ModConfig config)`
- `private boolean setupConfigFile(ModConfig modConfig,  Path file,  com.electronwill.nightconfig.core.ConfigFormat<?> conf)  throws IOException`
  - throws: IOException
- `public static void backUpConfig(com.electronwill.nightconfig.core.file.CommentedFileConfig commentedFileConfig)`
- `public static void backUpConfig(com.electronwill.nightconfig.core.file.CommentedFileConfig commentedFileConfig,  int maxBackups)`

## ConfigFileTypeHandler.ConfigLoadingException

*class* `net.minecraftforge.fml.config.ConfigFileTypeHandler.ConfigLoadingException`

Enclosing class: ConfigFileTypeHandler

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ConfigFileTypeHandler.ConfigWatcher

*class* `net.minecraftforge.fml.config.ConfigFileTypeHandler.ConfigWatcher`

Enclosing class: ConfigFileTypeHandler

### Fields
- `private final ModConfig modConfig`
- `private final com.electronwill.nightconfig.core.file.CommentedFileConfig commentedFileConfig`
- `private final ClassLoader realClassLoader`

### Methods
- `public void run()`

## ConfigTracker

*class* `net.minecraftforge.fml.config.ConfigTracker`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `static final org.slf4j.Marker CONFIG`
- `public static final ConfigTracker INSTANCE`
- `private final ConcurrentHashMap<String,ModConfig> fileMap`
- `private final EnumMap<ModConfig.Type,Set<ModConfig>> configSets`
- `private final ConcurrentHashMap<String,Map<ModConfig.Type,ModConfig>> configsByMod`

### Methods
- `void trackConfig(ModConfig config)`
- `public void loadConfigs(ModConfig.Type type,  Path configBasePath)`
- `public void unloadConfigs(ModConfig.Type type,  Path configBasePath)`
- `private void openConfig(ModConfig config,  Path configBasePath)`
- `private void closeConfig(ModConfig config,  Path configBasePath)`
- `public void loadDefaultServerConfigs()`
- `public String getConfigFileName(String modId,  ModConfig.Type type)`
- `public Map<ModConfig.Type,Set<ModConfig>> configSets()`
- `public ConcurrentHashMap<String,ModConfig> fileMap()`

## IConfigEvent

*interface* `net.minecraftforge.fml.config.IConfigEvent`

### Fields
- `static final IConfigEvent.ConfigConfig CONFIGCONFIG`

### Methods
- `static IConfigEvent reloading(ModConfig modConfig)`
- `static IConfigEvent loading(ModConfig modConfig)`
- `@Nullable static @Nullable IConfigEvent unloading(ModConfig modConfig)`
- `ModConfig getConfig()`
- `default <T extends net.minecraftforge.eventbus.api.Event & IConfigEvent> T self()`

## IConfigEvent.ConfigConfig

*record* `net.minecraftforge.fml.config.IConfigEvent.ConfigConfig`

Enclosing interface: IConfigEvent

### Fields
- `private final Function<ModConfig,IConfigEvent> loading`
  The field for the loading record component.
- `private final Function<ModConfig,IConfigEvent> reloading`
  The field for the reloading record component.
- `@Nullable private final @Nullable Function<ModConfig,IConfigEvent> unloading`
  The field for the unloading record component.

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
- `public Function<ModConfig,IConfigEvent> loading()`
  Returns the value of the loading record component.
  - returns: the value of the loading record component
- `public Function<ModConfig,IConfigEvent> reloading()`
  Returns the value of the reloading record component.
  - returns: the value of the reloading record component
- `@Nullable public @Nullable Function<ModConfig,IConfigEvent> unloading()`
  Returns the value of the unloading record component.
  - returns: the value of the unloading record component

## IConfigSpec>

*interface* `net.minecraftforge.fml.config.IConfigSpec>`

All Superinterfaces: com.electronwill.nightconfig.core.UnmodifiableConfig

### Methods
- `default T self()`
- `void acceptConfig(com.electronwill.nightconfig.core.CommentedConfig data)`
- `boolean isCorrecting()`
- `boolean isCorrect(com.electronwill.nightconfig.core.CommentedConfig commentedFileConfig)`
- `int correct(com.electronwill.nightconfig.core.CommentedConfig commentedFileConfig)`
- `void afterReload()`

### Inherited methods
- from `com.electronwill.nightconfig.core.UnmodifiableConfig`: `apply`, `apply`, `configFormat`, `contains`, `contains`, `entrySet`, `get`, `get`, `getByte`, `getByte`, `getByteOrElse`, `getByteOrElse`, `getChar`, `getChar`, `getCharOrElse`, `getCharOrElse`, `getEnum`, `getEnum`, `getEnum`, `getEnum`, `getEnumOrElse`, `getEnumOrElse`, `getEnumOrElse`, `getEnumOrElse`, `getEnumOrElse`, `getEnumOrElse`, `getEnumOrElse`, `getEnumOrElse`, `getInt`, `getInt`, `getIntOrElse`, `getIntOrElse`, `getIntOrElse`, `getIntOrElse`, `getLong`, `getLong`, `getLongOrElse`, `getLongOrElse`, `getLongOrElse`, `getLongOrElse`, `getOptional`, `getOptional`, `getOptionalEnum`, `getOptionalEnum`, `getOptionalEnum`, `getOptionalEnum`, `getOptionalInt`, `getOptionalInt`, `getOptionalLong`, `getOptionalLong`, `getOrElse`, `getOrElse`, `getOrElse`, `getOrElse`, `getRaw`, `getRaw`, `getShort`, `getShort`, `getShortOrElse`, `getShortOrElse`, `isEmpty`, `isNull`, `isNull`, `size`, `valueMap`

## ModConfig

*class* `net.minecraftforge.fml.config.ModConfig`

### Fields
- `private final ModConfig.Type type`
- `private final IConfigSpec<?> spec`
- `private final String fileName`
- `private final ModContainer container`
- `private final ConfigFileTypeHandler configHandler`
- `private com.electronwill.nightconfig.core.CommentedConfig configData`
- `private Callable<Void> saveHandler`

### Methods
- `private static String defaultConfigName(ModConfig.Type type,  String modId)`
- `public ModConfig.Type getType()`
- `public String getFileName()`
- `public ConfigFileTypeHandler getHandler()`
- `public <T extends IConfigSpec<T>> IConfigSpec<T> getSpec()`
- `public String getModId()`
- `public com.electronwill.nightconfig.core.CommentedConfig getConfigData()`
- `void setConfigData(com.electronwill.nightconfig.core.CommentedConfig configData)`
- `void fireEvent(IConfigEvent configEvent)`
- `public void save()`
- `public Path getFullPath()`
- `public void acceptSyncedConfig(byte[] bytes)`
