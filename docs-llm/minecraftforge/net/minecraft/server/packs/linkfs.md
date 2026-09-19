# net.minecraft.server.packs.linkfs

- [DummyFileAttributes](#dummyfileattributes)
- [LinkFileSystem](#linkfilesystem)
- [LinkFileSystem.Builder](#linkfilesystem.builder)
- [LinkFileSystem.DirectoryEntry](#linkfilesystem.directoryentry)
- [LinkFSFileStore](#linkfsfilestore)
- [LinkFSPath](#linkfspath)
- [LinkFSProvider](#linkfsprovider)
- [PathContents](#pathcontents)
- [PathContents.DirectoryContents](#pathcontents.directorycontents)
- [PathContents.FileContents](#pathcontents.filecontents)
## DummyFileAttributes

*class* `net.minecraft.server.packs.linkfs.DummyFileAttributes`

### Fields
- `private static final FileTime EPOCH`

### Methods
- `public FileTime lastModifiedTime()`
- `public FileTime lastAccessTime()`
- `public FileTime creationTime()`
- `public boolean isSymbolicLink()`
- `public boolean isOther()`
- `public long size()`
- `@Nullable public Object fileKey()`

### Inherited methods
- from `java.nio.file.attribute.BasicFileAttributes`: `isDirectory`, `isRegularFile`

## LinkFileSystem

*class* `net.minecraft.server.packs.linkfs.LinkFileSystem`

### Fields
- `private static final Set<String> VIEWS`
- `public static final String PATH_SEPARATOR` (= "/")
- `private static final com.google.common.base.Splitter PATH_SPLITTER`
- `private final FileStore store`
- `private final FileSystemProvider provider`
- `private final LinkFSPath root`

### Methods
- `private static LinkFSPath buildPath(LinkFileSystem.DirectoryEntry p_250914_,  LinkFileSystem p_248904_,  String p_248935_,  @Nullable  LinkFSPath p_250296_)`
- `public FileSystemProvider provider()`
- `public void close()`
- `public boolean isOpen()`
- `public boolean isReadOnly()`
- `public String getSeparator()`
- `public Iterable<Path> getRootDirectories()`
- `public Iterable<FileStore> getFileStores()`
- `public Set<String> supportedFileAttributeViews()`
- `public Path getPath(String p_250018_,  String... p_252159_)`
- `public PathMatcher getPathMatcher(String p_250757_)`
- `public UserPrincipalLookupService getUserPrincipalLookupService()`
- `public WatchService newWatchService()`
- `public FileStore store()`
- `public LinkFSPath rootPath()`
- `public static LinkFileSystem.Builder builder()`

## LinkFileSystem.Builder

*class* `net.minecraft.server.packs.linkfs.LinkFileSystem.Builder`

Enclosing class: LinkFileSystem

### Fields
- `private final LinkFileSystem.DirectoryEntry root`

### Methods
- `public LinkFileSystem.Builder put(List<String> p_249758_,  String p_251234_,  Path p_248766_)`
- `public LinkFileSystem.Builder put(List<String> p_250158_,  Path p_250483_)`
- `public FileSystem build(String p_251975_)`

## LinkFileSystem.DirectoryEntry

*record* `net.minecraft.server.packs.linkfs.LinkFileSystem.DirectoryEntry`

Enclosing class: LinkFileSystem

### Fields
- `private final Map<String,LinkFileSystem.DirectoryEntry> children`
  The field for the children record component.
- `private final Map<String,Path> files`
  The field for the files record component.

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
- `public Map<String,LinkFileSystem.DirectoryEntry> children()`
  Returns the value of the children record component.
  - returns: the value of the children record component
- `public Map<String,Path> files()`
  Returns the value of the files record component.
  - returns: the value of the files record component

## LinkFSFileStore

*class* `net.minecraft.server.packs.linkfs.LinkFSFileStore`

### Fields
- `private final String name`

### Methods
- `public String name()`
- `public String type()`
- `public boolean isReadOnly()`
- `public long getTotalSpace()`
- `public long getUsableSpace()`
- `public long getUnallocatedSpace()`
- `public boolean supportsFileAttributeView(Class<? extends FileAttributeView> p_251407_)`
- `public boolean supportsFileAttributeView(String p_250666_)`
- `@Nullable public <V extends FileStoreAttributeView> V getFileStoreAttributeView(Class<V> p_251981_)`
- `public Object getAttribute(String p_249050_)  throws IOException`
  - throws: IOException

### Inherited methods
- from `java.nio.file.FileStore`: `getBlockSize`

## LinkFSPath

*class* `net.minecraft.server.packs.linkfs.LinkFSPath`

### Fields
- `private static final BasicFileAttributes DIRECTORY_ATTRIBUTES`
- `private static final BasicFileAttributes FILE_ATTRIBUTES`
- `private static final Comparator<LinkFSPath> PATH_COMPARATOR`
- `private final String name`
- `private final LinkFileSystem fileSystem`
- `@Nullable private final LinkFSPath parent`
- `@Nullable private List<String> pathToRoot`
- `@Nullable private String pathString`
- `private final PathContents pathContents`

### Methods
- `private LinkFSPath createRelativePath(@Nullable  LinkFSPath p_249276_,  String p_249966_)`
- `public LinkFileSystem getFileSystem()`
- `public boolean isAbsolute()`
- `public File toFile()`
- `@Nullable public LinkFSPath getRoot()`
- `public LinkFSPath getFileName()`
- `@Nullable public LinkFSPath getParent()`
- `public int getNameCount()`
- `private List<String> pathToRoot()`
- `public LinkFSPath getName(int p_248550_)`
- `public LinkFSPath subpath(int p_251923_,  int p_248807_)`
- `public boolean startsWith(Path p_248923_)`
- `public boolean endsWith(Path p_250070_)`
- `public LinkFSPath normalize()`
- `public LinkFSPath resolve(Path p_251657_)`
- `private LinkFSPath resolve(List<String> p_252101_)`
- `LinkFSPath resolveName(String p_249718_)`
- `private static boolean isRelativeOrMissing(PathContents p_248750_)`
- `public LinkFSPath relativize(Path p_250294_)`
- `public URI toUri()`
- `public LinkFSPath toAbsolutePath()`
- `public LinkFSPath toRealPath(LinkOption... p_251187_)`
- `public WatchKey register(WatchService p_249189_,  WatchEvent.Kind<?>[] p_249917_,  WatchEvent.Modifier... p_251602_)`
- `public int compareTo(Path p_250005_)`
- `public boolean equals(Object p_248707_)`
- `private boolean hasRealContents()`
- `public int hashCode()`
- `public String toString()`
- `private String pathToString()`
- `private LinkFSPath toLinkPath(@Nullable  Path p_250907_)`
- `public boolean exists()`
- `@Nullable public Path getTargetPath()`
- `@Nullable public PathContents.DirectoryContents getDirectoryContents()`
- `public BasicFileAttributeView getBasicAttributeView()`
- `public BasicFileAttributes getBasicAttributes()  throws IOException`
  - throws: IOException

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `spliterator`
- from `java.nio.file.Path`: `endsWith`, `iterator`, `register`, `resolve`, `resolveSibling`, `resolveSibling`, `startsWith`

## LinkFSProvider

*class* `net.minecraft.server.packs.linkfs.LinkFSProvider`

### Fields
- `public static final String SCHEME` (= "x-mc-link")

### Methods
- `public String getScheme()`
- `public FileSystem newFileSystem(URI p_251867_,  Map<String,?> p_250970_)`
- `public FileSystem getFileSystem(URI p_249279_)`
- `public Path getPath(URI p_252294_)`
- `public SeekableByteChannel newByteChannel(Path p_251835_,  Set<? extends OpenOption> p_251780_,  FileAttribute<?>... p_250474_)  throws IOException`
  - throws: IOException
- `public DirectoryStream<Path> newDirectoryStream(Path p_250116_,  DirectoryStream.Filter<? super Path> p_251710_)  throws IOException`
  - throws: IOException
- `public void createDirectory(Path p_252352_,  FileAttribute<?>... p_249694_)`
- `public void delete(Path p_252069_)`
- `public void copy(Path p_250627_,  Path p_248906_,  CopyOption... p_249289_)`
- `public void move(Path p_250866_,  Path p_250335_,  CopyOption... p_249156_)`
- `public boolean isSameFile(Path p_249846_,  Path p_251936_)`
- `public boolean isHidden(Path p_248957_)`
- `public FileStore getFileStore(Path p_249374_)`
- `public void checkAccess(Path p_248517_,  AccessMode... p_248805_)  throws IOException`
  - throws: IOException
- `@Nullable public <V extends FileAttributeView> V getFileAttributeView(Path p_250166_,  Class<V> p_252214_,  LinkOption... p_250559_)`
- `public <A extends BasicFileAttributes> A readAttributes(Path p_249764_,  Class<A> p_248604_,  LinkOption... p_252280_)  throws IOException`
  - throws: IOException
- `public Map<String,Object> readAttributes(Path p_252124_,  String p_249064_,  LinkOption... p_252305_)`
- `public void setAttribute(Path p_251468_,  String p_249411_,  Object p_249284_,  LinkOption... p_250990_)`
- `private static LinkFSPath toLinkPath(@Nullable  Path p_252065_)`

### Inherited methods
- from `java.nio.file.spi.FileSystemProvider`: `createLink`, `createSymbolicLink`, `deleteIfExists`, `installedProviders`, `newAsynchronousFileChannel`, `newFileChannel`, `newFileSystem`, `newInputStream`, `newOutputStream`, `readSymbolicLink`

## PathContents

*interface* `net.minecraft.server.packs.linkfs.PathContents`

### Fields
- `static final PathContents MISSING`
- `static final PathContents RELATIVE`

## PathContents.DirectoryContents

*record* `net.minecraft.server.packs.linkfs.PathContents.DirectoryContents`

Enclosing interface: PathContents

### Fields
- `private final Map<String,LinkFSPath> children`
  The field for the children record component.

### Inherited fields
- from `net.minecraft.server.packs.linkfs.PathContents`: `MISSING`, `RELATIVE`

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
- `public Map<String,LinkFSPath> children()`
  Returns the value of the children record component.
  - returns: the value of the children record component

## PathContents.FileContents

*record* `net.minecraft.server.packs.linkfs.PathContents.FileContents`

Enclosing interface: PathContents

### Fields
- `private final Path contents`
  The field for the contents record component.

### Inherited fields
- from `net.minecraft.server.packs.linkfs.PathContents`: `MISSING`, `RELATIVE`

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
- `public Path contents()`
  Returns the value of the contents record component.
  - returns: the value of the contents record component
