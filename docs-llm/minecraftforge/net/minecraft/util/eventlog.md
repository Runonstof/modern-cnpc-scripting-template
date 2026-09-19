# net.minecraft.util.eventlog

- [EventLogDirectory](#eventlogdirectory)
- [EventLogDirectory.CompressedFile](#eventlogdirectory.compressedfile)
- [EventLogDirectory.File](#eventlogdirectory.file)
- [EventLogDirectory.FileId](#eventlogdirectory.fileid)
- [EventLogDirectory.FileList](#eventlogdirectory.filelist)
- [EventLogDirectory.RawFile](#eventlogdirectory.rawfile)
- [JsonEventLog](#jsoneventlog)
- [JsonEventLogReader](#jsoneventlogreader)
## EventLogDirectory

*class* `net.minecraft.util.eventlog.EventLogDirectory`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `private static final int COMPRESS_BUFFER_SIZE` (= 4096)
- `private static final String COMPRESSED_EXTENSION` (= ".gz")
- `private final Path root`
- `private final String extension`

### Methods
- `public static EventLogDirectory open(Path p_261743_,  String p_261659_)  throws IOException`
  - throws: IOException
- `public EventLogDirectory.FileList listFiles()  throws IOException`
  - throws: IOException
- `@Nullable private EventLogDirectory.File parseFile(Path p_261985_)`
- `static void tryCompress(Path p_261741_,  Path p_262101_)  throws IOException`
  - throws: IOException
- `private static void writeCompressed(ReadableByteChannel p_262066_,  Path p_262054_)  throws IOException`
  - throws: IOException
- `public EventLogDirectory.RawFile createNewFile(LocalDate p_261865_)  throws IOException`
  - throws: IOException

## EventLogDirectory.CompressedFile

*record* `net.minecraft.util.eventlog.EventLogDirectory.CompressedFile`

Enclosing class: EventLogDirectory

### Fields
- `private final Path path`
  The field for the path record component.
- `private final EventLogDirectory.FileId id`
  The field for the id record component.

### Methods
- `@Nullable public Reader openReader()  throws IOException`
  - throws: IOException
- `public EventLogDirectory.CompressedFile compress()`
- `public Path path()`
  Returns the value of the path record component.
  - returns: the value of the path record component
- `public EventLogDirectory.FileId id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
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

## EventLogDirectory.File

*interface* `net.minecraft.util.eventlog.EventLogDirectory.File`

Enclosing class: EventLogDirectory

### Methods
- `Path path()`
- `EventLogDirectory.FileId id()`
- `@Nullable Reader openReader()  throws IOException`
  - throws: IOException
- `EventLogDirectory.CompressedFile compress()  throws IOException`
  - throws: IOException

## EventLogDirectory.FileId

*record* `net.minecraft.util.eventlog.EventLogDirectory.FileId`

Enclosing class: EventLogDirectory

### Fields
- `private final LocalDate date`
  The field for the date record component.
- `private final int index`
  The field for the index record component.
- `private static final DateTimeFormatter DATE_FORMATTER`

### Methods
- `@Nullable public static EventLogDirectory.FileId parse(String p_261762_)`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public String toFileName(String p_261982_)`
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public LocalDate date()`
  Returns the value of the date record component.
  - returns: the value of the date record component
- `public int index()`
  Returns the value of the index record component.
  - returns: the value of the index record component

## EventLogDirectory.FileList

*class* `net.minecraft.util.eventlog.EventLogDirectory.FileList`

Enclosing class: EventLogDirectory

### Fields
- `private final List<EventLogDirectory.File> files`

### Methods
- `public EventLogDirectory.FileList prune(LocalDate p_261825_,  int p_261918_)`
- `public EventLogDirectory.FileList compressAll()`
- `public Iterator<EventLogDirectory.File> iterator()`
- `public Stream<EventLogDirectory.File> stream()`
- `public Set<EventLogDirectory.FileId> ids()`

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `spliterator`

## EventLogDirectory.RawFile

*record* `net.minecraft.util.eventlog.EventLogDirectory.RawFile`

Enclosing class: EventLogDirectory

### Fields
- `private final Path path`
  The field for the path record component.
- `private final EventLogDirectory.FileId id`
  The field for the id record component.

### Methods
- `public FileChannel openChannel()  throws IOException`
  - throws: IOException
- `@Nullable public Reader openReader()  throws IOException`
  - throws: IOException
- `public EventLogDirectory.CompressedFile compress()  throws IOException`
  - throws: IOException
- `public Path path()`
  Returns the value of the path record component.
  - returns: the value of the path record component
- `public EventLogDirectory.FileId id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
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

## JsonEventLog

*class* `net.minecraft.util.eventlog.JsonEventLog`

### Fields
- `private static final com.google.gson.Gson GSON`
- `private final com.mojang.serialization.Codec<T> codec`
- `final FileChannel channel`
- `private final AtomicInteger referenceCount`

### Methods
- `public static <T> JsonEventLog<T> open(com.mojang.serialization.Codec<T> p_261795_,  Path p_261489_)  throws IOException`
  - throws: IOException
- `public void write(T p_261929_)  throws IOException, com.google.gson.JsonIOException`
  - throws: IOException
  - throws: com.google.gson.JsonIOException
- `public JsonEventLogReader<T> openReader()  throws IOException`
  - throws: IOException
- `public void close()  throws IOException`
  - throws: IOException
- `void releaseReference()  throws IOException`
  - throws: IOException

## JsonEventLogReader

*interface* `net.minecraft.util.eventlog.JsonEventLogReader`

All Superinterfaces: AutoCloseable, Closeable

### Methods
- `static <T> JsonEventLogReader<T> create(com.mojang.serialization.Codec<T> p_261600_,  Reader p_261836_)`
- `@Nullable T next() throws IOException`
  - throws: IOException

### Inherited methods
- from `java.io.Closeable`: `close`
