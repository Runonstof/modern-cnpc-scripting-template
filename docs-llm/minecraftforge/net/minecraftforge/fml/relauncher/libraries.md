# net.minecraftforge.fml.relauncher.libraries

- [Artifact](#artifact)
- [LibraryManager](#librarymanager)
- [LinkRepository](#linkrepository)
- [MemoryModList](#memorymodlist)
- [ModList](#modlist)
- [Repository](#repository)
- [SnapshotJson](#snapshotjson)
- [SnapshotJson.Entry](#snapshotjson.entry)
## Artifact

*class* `net.minecraftforge.fml.relauncher.libraries.Artifact`

All Implemented Interfaces: java.lang.Comparable<Artifact>

### Methods
- `public java.lang.String toString()`
- `public int hashCode()`
- `public java.lang.String getFilename()`
- `public java.lang.String getFolder()`
- `public java.lang.String getPath()`
- `public java.io.File getFile()`
- `public java.io.File getSnapshotMeta()`
- `public boolean isSnapshot()`
- `public java.lang.String getTimestamp()`
- `public ComparableVersion getVersion()`
- `public Repository getRepository()`
- `public boolean matchesID(Artifact o)`
- `public int compareVersion(Artifact o)`
- `public int compareTo(Artifact o)`

## LibraryManager

*class* `net.minecraftforge.fml.relauncher.libraries.LibraryManager`

### Fields
- `public static final boolean DISABLE_EXTERNAL_MANIFEST`
- `public static final boolean ENABLE_AUTO_MOD_MOVEMENT`
- `public static final java.util.jar.Attributes.Name MODSIDE`

### Methods
- `public static void setup(java.io.File minecraftHome)`
- `public static java.util.List<Artifact> flattenLists(java.io.File mcDir)`
- `public static java.util.List<java.io.File> gatherLegacyCanidates(java.io.File mcDir)`
- `public static Repository getDefaultRepo()`

## LinkRepository

*class* `net.minecraftforge.fml.relauncher.libraries.LinkRepository`

### Methods
- `public java.io.File archive(Artifact artifact,  java.io.File file,  byte[] manifest)`
- `public void filterLegacy(java.util.List<java.io.File> list)`
- `public Artifact resolve(Artifact artifact)`
- `public java.io.File getFile(java.lang.String path)`

### Inherited methods
- from `net.minecraftforge.fml.relauncher.libraries.Repository`: `create`, `create`, `equals`, `get`, `hashCode`, `replace`, `resolveAll`

## MemoryModList

*class* `net.minecraftforge.fml.relauncher.libraries.MemoryModList`

### Methods
- `public void save()  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.lang.String getName()`

### Inherited methods
- from `net.minecraftforge.fml.relauncher.libraries.ModList`: `add`, `changed`, `create`, `flatten`, `getArtifacts`, `getBasicLists`, `getKnownLists`, `getRepository`

## ModList

*class* `net.minecraftforge.fml.relauncher.libraries.ModList`

### Methods
- `public static ModList create(java.io.File json,  java.io.File mcdir)`
- `public static java.util.List<ModList> getKnownLists(java.io.File mcdir)`
- `public static java.util.List<ModList> getBasicLists(java.io.File mcdir)`
- `public Repository getRepository()`
- `public void add(Artifact artifact)`
- `public java.util.List<Artifact> getArtifacts()`
- `public boolean changed()`
- `public void save()  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.util.List<Artifact> flatten()`
- `public java.lang.Object getName()`

## Repository

*class* `net.minecraftforge.fml.relauncher.libraries.Repository`

### Methods
- `public static Repository create(java.io.File root)  throws java.io.IOException`
  - throws: java.io.IOException
- `public static Repository create(java.io.File root,  java.lang.String name)`
- `public static Repository replace(java.io.File root,  java.lang.String name)`
- `public static Repository get(java.lang.String name)`
- `public static Artifact resolveAll(Artifact artifact)`
- `public int hashCode()`
- `public boolean equals(java.lang.Object o)`
- `public Artifact resolve(Artifact artifact)`
- `public java.io.File getFile(java.lang.String path)`
- `public java.io.File archive(Artifact artifact,  java.io.File file,  byte[] manifest)`
- `public void filterLegacy(java.util.List<java.io.File> list)`

## SnapshotJson

*class* `net.minecraftforge.fml.relauncher.libraries.SnapshotJson`

This is different from the standard maven snapshot metadata.
 Because none of that data is exposed to us as a user of gradle/maven/whatever.
 So we JUST use the timestamp.

 {
 "latest": "yyyyMMdd.hhmmss",
 "versions": [
 {
 "md5": "md5 in hex lowercase",
 "timestamp": "yyyyMMdd.hhmmss"
 ]
 }

All Implemented Interfaces: java.lang.Comparable<SnapshotJson>

### Fields
- `public static final java.text.DateFormat TIMESTAMP`
- `public static final java.lang.String META_JSON_FILE` (= "maven-metadata.json")

### Methods
- `public static SnapshotJson create(java.io.File target)`
- `public java.lang.String getLatest()`
- `public void add(SnapshotJson.Entry data)`
- `public void merge(SnapshotJson o)`
- `public boolean remove(java.lang.String timestamp)`
- `public java.lang.String updateLatest()`
- `public void write(java.io.File target)  throws java.io.IOException`
  - throws: java.io.IOException
- `public int compareTo(SnapshotJson o)`

## SnapshotJson.Entry

*class* `net.minecraftforge.fml.relauncher.libraries.SnapshotJson.Entry`

Enclosing class: SnapshotJson

### Methods
- `public java.lang.String getTimestamp()`
- `public java.lang.String getMd5()`
