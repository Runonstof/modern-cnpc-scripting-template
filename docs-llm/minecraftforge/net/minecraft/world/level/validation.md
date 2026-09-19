# net.minecraft.world.level.validation

- [ContentValidationException](#contentvalidationexception)
- [DirectoryValidator](#directoryvalidator)
- [ForbiddenSymlinkInfo](#forbiddensymlinkinfo)
- [PathAllowList](#pathallowlist)
- [PathAllowList.ConfigEntry](#pathallowlist.configentry)
- [PathAllowList.EntryType](#pathallowlist.entrytype)
## ContentValidationException

*class* `net.minecraft.world.level.validation.ContentValidationException`

### Fields
- `private final Path directory`
- `private final List<ForbiddenSymlinkInfo> entries`

### Methods
- `public String getMessage()`
- `public static String getMessage(Path p_289929_,  List<ForbiddenSymlinkInfo> p_289979_)`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## DirectoryValidator

*class* `net.minecraft.world.level.validation.DirectoryValidator`

### Fields
- `private final PathMatcher symlinkTargetAllowList`

### Methods
- `public void validateSymlink(Path p_289934_,  List<ForbiddenSymlinkInfo> p_289972_)  throws IOException`
  - throws: IOException
- `public List<ForbiddenSymlinkInfo> validateSymlink(Path p_299520_)  throws IOException`
  - throws: IOException
- `public List<ForbiddenSymlinkInfo> validateDirectory(Path p_301110_,  boolean p_298035_)  throws IOException`
  - throws: IOException
- `public void validateKnownDirectory(Path p_297387_,  List<ForbiddenSymlinkInfo> p_298980_)  throws IOException`
  - throws: IOException

## ForbiddenSymlinkInfo

*record* `net.minecraft.world.level.validation.ForbiddenSymlinkInfo`

### Fields
- `private final Path link`
  The field for the link record component.
- `private final Path target`
  The field for the target record component.

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
- `public Path link()`
  Returns the value of the link record component.
  - returns: the value of the link record component
- `public Path target()`
  Returns the value of the target record component.
  - returns: the value of the target record component

## PathAllowList

*class* `net.minecraft.world.level.validation.PathAllowList`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final String COMMENT_PREFIX` (= "#")
- `private final List<PathAllowList.ConfigEntry> entries`
- `private final Map<String,PathMatcher> compiledPaths`

### Methods
- `public PathMatcher getForFileSystem(FileSystem p_289975_)`
- `public boolean matches(Path p_289964_)`
- `public static PathAllowList readPlain(BufferedReader p_289921_)`

## PathAllowList.ConfigEntry

*record* `net.minecraft.world.level.validation.PathAllowList.ConfigEntry`

Enclosing class: PathAllowList

### Fields
- `private final PathAllowList.EntryType type`
  The field for the type record component.
- `private final String pattern`
  The field for the pattern record component.

### Methods
- `public PathMatcher compile(FileSystem p_289936_)`
- `static Optional<PathAllowList.ConfigEntry> parse(String p_289947_)`
- `static PathAllowList.ConfigEntry glob(String p_289983_)`
- `static PathAllowList.ConfigEntry regex(String p_289944_)`
- `static PathAllowList.ConfigEntry prefix(String p_289918_)`
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
- `public PathAllowList.EntryType type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public String pattern()`
  Returns the value of the pattern record component.
  - returns: the value of the pattern record component

## PathAllowList.EntryType

*interface* `net.minecraft.world.level.validation.PathAllowList.EntryType`

Enclosing class: PathAllowList

### Fields
- `static final PathAllowList.EntryType FILESYSTEM`
- `static final PathAllowList.EntryType PREFIX`

### Methods
- `PathMatcher compile(FileSystem p_289924_,  String p_289948_)`
