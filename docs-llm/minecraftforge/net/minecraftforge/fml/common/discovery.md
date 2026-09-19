# net.minecraftforge.fml.common.discovery

- [ASMDataTable](#asmdatatable)
- [ASMDataTable.ASMData](#asmdatatable.asmdata)
- [ContainerType](#containertype)
- [DirectoryDiscoverer](#directorydiscoverer)
- [ITypeDiscoverer](#itypediscoverer)
- [JarDiscoverer](#jardiscoverer)
- [ModCandidate](#modcandidate)
- [ModDiscoverer](#moddiscoverer)
## ASMDataTable

*class* `net.minecraftforge.fml.common.discovery.ASMDataTable`

### Methods
- `public <any> getAnnotationsFor(ModContainer container)`
- `public java.util.Set<ASMDataTable.ASMData> getAll(java.lang.String annotation)`
- `public void addASMData(ModCandidate candidate,  java.lang.String annotation,  java.lang.String className,  java.lang.String objectName,  java.util.Map<java.lang.String,java.lang.Object> annotationInfo)`
- `public void addContainer(ModContainer container)`
- `public void registerPackage(ModCandidate modCandidate,  java.lang.String pkg)`
- `public java.util.Set<ModCandidate> getCandidatesFor(java.lang.String pkg)`
- `public static java.lang.String getOwnerModID(java.util.Set<ASMDataTable.ASMData> mods,  ASMDataTable.ASMData targ)`

## ASMDataTable.ASMData

*class* `net.minecraftforge.fml.common.discovery.ASMDataTable.ASMData`

All Implemented Interfaces: java.lang.Cloneable

Enclosing class: ASMDataTable

### Methods
- `public ModCandidate getCandidate()`
- `public java.lang.String getAnnotationName()`
- `public java.lang.String getClassName()`
- `public java.lang.String getObjectName()`
- `public java.util.Map<java.lang.String,java.lang.Object> getAnnotationInfo()`
- `public ASMDataTable.ASMData copy(java.util.Map<java.lang.String,java.lang.Object> newAnnotationInfo)`

## ContainerType

*enum* `net.minecraftforge.fml.common.discovery.ContainerType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ContainerType>

### Fields
- `public static final ContainerType JAR`
- `public static final ContainerType DIR`

### Methods
- `public static ContainerType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ContainerType c : ContainerType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ContainerType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public java.util.List<ModContainer> findMods(ModCandidate candidate,  ASMDataTable table)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## DirectoryDiscoverer

*class* `net.minecraftforge.fml.common.discovery.DirectoryDiscoverer`

All Implemented Interfaces: ITypeDiscoverer

### Inherited fields
- from `net.minecraftforge.fml.common.discovery.ITypeDiscoverer`: `classFile`

### Methods
- `public java.util.List<ModContainer> discover(ModCandidate candidate,  ASMDataTable table)`
- `public void exploreFileSystem(java.lang.String path,  java.io.File modDir,  java.util.List<ModContainer> harvestedMods,  ModCandidate candidate,  MetadataCollection mc)`

## ITypeDiscoverer

*interface* `net.minecraftforge.fml.common.discovery.ITypeDiscoverer`

### Fields
- `static final java.util.regex.Pattern classFile`

### Methods
- `java.util.List<ModContainer> discover(ModCandidate candidate,  ASMDataTable table)`

## JarDiscoverer

*class* `net.minecraftforge.fml.common.discovery.JarDiscoverer`

All Implemented Interfaces: ITypeDiscoverer

### Inherited fields
- from `net.minecraftforge.fml.common.discovery.ITypeDiscoverer`: `classFile`

### Methods
- `public java.util.List<ModContainer> discover(ModCandidate candidate,  ASMDataTable table)`

## ModCandidate

*class* `net.minecraftforge.fml.common.discovery.ModCandidate`

### Methods
- `public java.io.File getClassPathRoot()`
- `public java.io.File getModContainer()`
- `public ContainerType getSourceType()`
- `public java.util.List<ModContainer> explore(ASMDataTable table)`
- `public void addClassEntry(java.lang.String name)`
- `public boolean isClasspath()`
- `public boolean isMinecraftJar()`
- `public java.util.Set<java.lang.String> getClassList()`
- `public java.util.List<ModContainer> getContainedMods()`
- `public java.util.List<java.lang.String> getContainedPackages()`

## ModDiscoverer

*class* `net.minecraftforge.fml.common.discovery.ModDiscoverer`

### Methods
- `public void findClasspathMods(ModClassLoader modClassLoader)`
- `public java.util.List<ModContainer> identifyMods()`
- `public ASMDataTable getASMTable()`
- `public java.util.List<java.io.File> getNonModLibs()`
- `public void addCandidate(ModCandidate candidate)`
