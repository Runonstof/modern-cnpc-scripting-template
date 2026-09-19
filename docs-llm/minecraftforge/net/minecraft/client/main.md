# net.minecraft.client.main

- [GameConfig](#gameconfig)
- [GameConfig.FolderData](#gameconfig.folderdata)
- [GameConfig.GameData](#gameconfig.gamedata)
- [GameConfig.QuickPlayData](#gameconfig.quickplaydata)
- [GameConfig.UserData](#gameconfig.userdata)
- [Main](#main)
- [SilentInitException](#silentinitexception)
## GameConfig

*class* `net.minecraft.client.main.GameConfig`

### Fields
- `public final GameConfig.UserData user`
- `public final DisplayData display`
- `public final GameConfig.FolderData location`
- `public final GameConfig.GameData game`
- `public final GameConfig.QuickPlayData quickPlay`

## GameConfig.FolderData

*class* `net.minecraft.client.main.GameConfig.FolderData`

Enclosing class: GameConfig

### Fields
- `public final File gameDirectory`
- `public final File resourcePackDirectory`
- `public final File assetDirectory`
- `@Nullable public final String assetIndex`

### Methods
- `public Path getExternalAssetSource()`

## GameConfig.GameData

*class* `net.minecraft.client.main.GameConfig.GameData`

Enclosing class: GameConfig

### Fields
- `public final boolean demo`
- `public final String launchVersion`
- `public final String versionType`
- `public final boolean disableMultiplayer`
- `public final boolean disableChat`

## GameConfig.QuickPlayData

*record* `net.minecraft.client.main.GameConfig.QuickPlayData`

Enclosing class: GameConfig

### Fields
- `@Nullable private final String path`
  The field for the path record component.
- `@Nullable private final String singleplayer`
  The field for the singleplayer record component.
- `@Nullable private final String multiplayer`
  The field for the multiplayer record component.
- `@Nullable private final String realms`
  The field for the realms record component.

### Methods
- `public boolean isEnabled()`
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
- `@Nullable public String path()`
  Returns the value of the path record component.
  - returns: the value of the path record component
- `@Nullable public String singleplayer()`
  Returns the value of the singleplayer record component.
  - returns: the value of the singleplayer record component
- `@Nullable public String multiplayer()`
  Returns the value of the multiplayer record component.
  - returns: the value of the multiplayer record component
- `@Nullable public String realms()`
  Returns the value of the realms record component.
  - returns: the value of the realms record component

## GameConfig.UserData

*class* `net.minecraft.client.main.GameConfig.UserData`

Enclosing class: GameConfig

### Fields
- `public final User user`
- `public final com.mojang.authlib.properties.PropertyMap userProperties`
- `public final com.mojang.authlib.properties.PropertyMap profileProperties`
- `public final Proxy proxy`

## Main

*class* `net.minecraft.client.main.Main`

### Fields
- `static final org.slf4j.Logger LOGGER`

### Methods
- `public static void main(String[] p_129642_)`
- `@Nullable private static String unescapeJavaArgument(@Nullable  String p_300185_)`
- `private static Optional<String> emptyStringToEmptyOptional(String p_195487_)`
- `private static OptionalInt ofNullable(@Nullable  Integer p_129635_)`
- `@Nullable private static <T> T parseArgument(joptsimple.OptionSet p_129639_,  joptsimple.OptionSpec<T> p_129640_)`
- `private static boolean stringHasValue(@Nullable  String p_129637_)`

## SilentInitException

*class* `net.minecraft.client.main.SilentInitException`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`
