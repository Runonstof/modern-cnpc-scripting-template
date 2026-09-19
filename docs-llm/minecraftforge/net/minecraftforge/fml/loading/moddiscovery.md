# net.minecraftforge.fml.loading.moddiscovery

- [AbstractJarFileDependencyLocator](#abstractjarfiledependencylocator)
- [AbstractJarFileModLocator](#abstractjarfilemodlocator)
- [AbstractJarFileModProvider](#abstractjarfilemodprovider)
- [AbstractModProvider](#abstractmodprovider)
- [AbstractModProvider.DefaultModFileInfo](#abstractmodprovider.defaultmodfileinfo)
- [BackgroundScanHandler](#backgroundscanhandler)
- [Class BackgroundScanHandler.ScanStatus](#class-backgroundscanhandler.scanstatus)
- [Class InvalidModIdentifier](#class-invalidmodidentifier)
- [ClasspathLocator](#classpathlocator)
- [CoreModFile](#coremodfile)
- [ExplodedDirectoryLocator](#explodeddirectorylocator)
- [ExplodedDirectoryLocator.ExplodedMod](#explodeddirectorylocator.explodedmod)
- [InvalidModFileException](#invalidmodfileexception)
- [JarInJarDependencyLocator](#jarinjardependencylocator)
- [JarInJarDependencyLocator.ModWithVersionRange](#jarinjardependencylocator.modwithversionrange)
- [MavenDirectoryLocator](#mavendirectorylocator)
- [MinecraftLocator](#minecraftlocator)
- [ModAnnotation](#modannotation)
- [ModAnnotation.EnumHolder](#modannotation.enumholder)
- [ModAnnotationVisitor](#modannotationvisitor)
- [ModClassVisitor](#modclassvisitor)
- [ModDiscoverer](#moddiscoverer)
- [ModFieldVisitor](#modfieldvisitor)
- [ModFile](#modfile)
- [ModFileInfo](#modfileinfo)
- [ModFileParser](#modfileparser)
- [ModInfo](#modinfo)
- [ModInfo.ModVersion](#modinfo.modversion)
- [ModJarMetadata](#modjarmetadata)
- [ModListHandler](#modlisthandler)
- [ModMethodVisitor](#modmethodvisitor)
- [ModsFolderLocator](#modsfolderlocator)
- [ModValidator](#modvalidator)
- [NightConfigWrapper](#nightconfigwrapper)
- [Scanner](#scanner)
## AbstractJarFileDependencyLocator

*class* `net.minecraftforge.fml.loading.moddiscovery.AbstractJarFileDependencyLocator`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Inherited fields
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractModProvider`: `MANIFEST`, `MODS_TOML`

### Methods
- `protected Optional<InputStream> loadResourceFromModFile(net.minecraftforge.forgespi.locating.IModFile modFile,  Path path)`
- `protected Optional<net.minecraftforge.forgespi.locating.IModFile> loadModFileFrom(net.minecraftforge.forgespi.locating.IModFile file,  Path path)`
- `protected String identifyMod(net.minecraftforge.forgespi.locating.IModFile modFile)`

### Inherited methods
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractJarFileModProvider`: `scanFile`
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractModProvider`: `createMod`, `getDefaultJarModType`, `isValid`, `manifestParser`
- from `net.minecraftforge.forgespi.locating.IDependencyLocator`: `scanMods`
- from `net.minecraftforge.forgespi.locating.IModProvider`: `initArguments`, `isValid`, `name`, `scanFile`

## AbstractJarFileModLocator

*class* `net.minecraftforge.fml.loading.moddiscovery.AbstractJarFileModLocator`

### Inherited fields
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractModProvider`: `MANIFEST`, `MODS_TOML`

### Methods
- `public List<net.minecraftforge.forgespi.locating.IModLocator.ModFileOrException> scanMods()`
- `public abstract Stream<Path> scanCandidates()`

### Inherited methods
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractJarFileModProvider`: `scanFile`
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractModProvider`: `createMod`, `getDefaultJarModType`, `isValid`, `manifestParser`
- from `net.minecraftforge.forgespi.locating.IModProvider`: `initArguments`, `isValid`, `name`, `scanFile`

## AbstractJarFileModProvider

*class* `net.minecraftforge.fml.loading.moddiscovery.AbstractJarFileModProvider`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Inherited fields
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractModProvider`: `MANIFEST`, `MODS_TOML`

### Methods
- `public void scanFile(net.minecraftforge.forgespi.locating.IModFile file,  Consumer<Path> pathConsumer)`

### Inherited methods
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractModProvider`: `createMod`, `getDefaultJarModType`, `isValid`, `manifestParser`
- from `net.minecraftforge.forgespi.locating.IModProvider`: `initArguments`, `name`

## AbstractModProvider

*class* `net.minecraftforge.fml.loading.moddiscovery.AbstractModProvider`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `protected static final String MODS_TOML` (= "META-INF/mods.toml")
- `protected static final String MANIFEST` (= "META-INF/MANIFEST.MF")

### Methods
- `protected net.minecraftforge.forgespi.locating.IModLocator.ModFileOrException createMod(Path... path)`
- `protected net.minecraftforge.forgespi.language.IModFileInfo manifestParser(net.minecraftforge.forgespi.locating.IModFile mod)`
- `public boolean isValid(net.minecraftforge.forgespi.locating.IModFile modFile)`
- `protected String getDefaultJarModType()`

### Inherited methods
- from `net.minecraftforge.forgespi.locating.IModProvider`: `initArguments`, `name`, `scanFile`

## AbstractModProvider.DefaultModFileInfo

*record* `net.minecraftforge.fml.loading.moddiscovery.AbstractModProvider.DefaultModFileInfo`

Enclosing class: AbstractModProvider

### Fields
- `private final net.minecraftforge.forgespi.locating.IModFile mod`
  The field for the mod record component.
- `private final String license`
  The field for the license record component.
- `private final net.minecraftforge.forgespi.language.IConfigurable configurable`
  The field for the configurable record component.

### Methods
- `public <T> Optional<T> getConfigElement(String... strings)`
- `public List<? extends net.minecraftforge.forgespi.language.IConfigurable> getConfigList(String... strings)`
- `public List<net.minecraftforge.forgespi.language.IModInfo> getMods()`
- `public List<net.minecraftforge.forgespi.language.IModFileInfo.LanguageSpec> requiredLanguageLoaders()`
- `public boolean showAsResourcePack()`
- `public Map<String,Object> getFileProperties()`
- `public String getLicense()`
- `public net.minecraftforge.forgespi.locating.IModFile getFile()`
- `public net.minecraftforge.forgespi.language.IConfigurable getConfig()`
- `public String moduleName()`
- `public String versionString()`
- `public List<String> usesServices()`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public net.minecraftforge.forgespi.locating.IModFile mod()`
  Returns the value of the mod record component.
  - returns: the value of the mod record component
- `public String license()`
  Returns the value of the license record component.
  - returns: the value of the license record component
- `public net.minecraftforge.forgespi.language.IConfigurable configurable()`
  Returns the value of the configurable record component.
  - returns: the value of the configurable record component

## BackgroundScanHandler

*class* `net.minecraftforge.fml.loading.moddiscovery.BackgroundScanHandler`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final ExecutorService modContentScanner`
- `private final List<ModFile> modFiles`
- `private BackgroundScanHandler.ScanStatus status`
- `private LoadingModList loadingModList`

### Methods
- `public List<ModFile> getModFiles()`
- `public void submitForScanning(ModFile file)`
- `private void addCompletedFile(ModFile file,  net.minecraftforge.forgespi.language.ModFileScanData modFileScanData,  Throwable throwable)`
- `public void setLoadingModList(LoadingModList loadingModList)`
- `public LoadingModList getLoadingModList()`
- `public void waitForScanToComplete(Runnable ticker)`

## Class BackgroundScanHandler.ScanStatus

*enum* `net.minecraftforge.fml.loading.moddiscovery.Class BackgroundScanHandler.ScanStatus`

Enclosing class: BackgroundScanHandler

### Methods
- `public static BackgroundScanHandler.ScanStatus[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static BackgroundScanHandler.ScanStatus valueOf(String name)`
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

## Class InvalidModIdentifier

*enum* `net.minecraftforge.fml.loading.moddiscovery.Class InvalidModIdentifier`

### Fields
- `private BiPredicate<Path,Optional<ZipFile>> ident`

### Methods
- `public static InvalidModIdentifier[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static InvalidModIdentifier valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `private String getReason()`
- `public static Optional<String> identifyJarProblem(Path path)`
- `private static BiPredicate<Path,Optional<ZipFile>> filePresent(String filename)`
- `private static <T> Optional<T> optionalFromException(cpw.mods.modlauncher.api.LamdbaExceptionUtils.Supplier_WithExceptions<T,? extends Exception> supp)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ClasspathLocator

*class* `net.minecraftforge.fml.loading.moddiscovery.ClasspathLocator`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final List<Path> legacyClasspath`
- `private boolean enabled`

### Inherited fields
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractModProvider`: `MANIFEST`, `MODS_TOML`

### Methods
- `public String name()`
- `public Stream<Path> scanCandidates()`
- `private List<Path> findPaths(List<Path> claimed,  String resource)  throws IOException`
  - throws: IOException
- `public void initArguments(Map<String,?> arguments)`

### Inherited methods
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractJarFileModLocator`: `scanMods`
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractJarFileModProvider`: `scanFile`
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractModProvider`: `createMod`, `getDefaultJarModType`, `isValid`, `manifestParser`
- from `net.minecraftforge.forgespi.locating.IModProvider`: `isValid`, `scanFile`

## CoreModFile

*class* `net.minecraftforge.fml.loading.moddiscovery.CoreModFile`

### Fields
- `private final Path internalPath`
- `private final ModFile file`
- `private final String name`

### Methods
- `public Reader readCoreMod()  throws IOException`
  - throws: IOException
- `public Path getPath()`
- `public Reader getAdditionalFile(String fileName)  throws IOException`
  - throws: IOException
- `public String getOwnerId()`
- `public String toString()`

## ExplodedDirectoryLocator

*class* `net.minecraftforge.fml.loading.moddiscovery.ExplodedDirectoryLocator`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final List<ExplodedDirectoryLocator.ExplodedMod> explodedMods`
- `private final Map<ExplodedDirectoryLocator.ExplodedMod,net.minecraftforge.forgespi.locating.IModFile> mods`

### Methods
- `public List<net.minecraftforge.forgespi.locating.IModLocator.ModFileOrException> scanMods()`
- `public String name()`
- `public void scanFile(net.minecraftforge.forgespi.locating.IModFile file,  Consumer<Path> pathConsumer)`
- `public String toString()`
- `public void initArguments(Map<String,?> arguments)`
- `public boolean isValid(net.minecraftforge.forgespi.locating.IModFile modFile)`

## ExplodedDirectoryLocator.ExplodedMod

*record* `net.minecraftforge.fml.loading.moddiscovery.ExplodedDirectoryLocator.ExplodedMod`

Enclosing class: ExplodedDirectoryLocator

### Fields
- `private final String modid`
  The field for the modid record component.
- `private final List<Path> paths`
  The field for the paths record component.

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
- `public String modid()`
  Returns the value of the modid record component.
  - returns: the value of the modid record component
- `public List<Path> paths()`
  Returns the value of the paths record component.
  - returns: the value of the paths record component

## InvalidModFileException

*class* `net.minecraftforge.fml.loading.moddiscovery.InvalidModFileException`

### Fields
- `private static final long serialVersionUID` (= 1230464325917450374L)
- `private final net.minecraftforge.forgespi.language.IModFileInfo modFileInfo`

### Methods
- `public net.minecraftforge.forgespi.language.IModFileInfo getBrokenFile()`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## JarInJarDependencyLocator

*class* `net.minecraftforge.fml.loading.moddiscovery.JarInJarDependencyLocator`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Inherited fields
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractModProvider`: `MANIFEST`, `MODS_TOML`

### Methods
- `public String name()`
- `public List<net.minecraftforge.forgespi.locating.IModFile> scanMods(Iterable<net.minecraftforge.forgespi.locating.IModFile> loadedMods)`
- `public void initArguments(Map<String,?> arguments)`
- `protected String getDefaultJarModType()`
- `protected Optional<net.minecraftforge.forgespi.locating.IModFile> loadModFileFrom(net.minecraftforge.forgespi.locating.IModFile file,  Path path)`
- `protected EarlyLoadingException exception(Collection<net.minecraftforge.jarjar.selection.JarSelector.ResolutionFailureInformation<net.minecraftforge.forgespi.locating.IModFile>> failedDependencies)`
- `@NotNull private EarlyLoadingException.ExceptionData buildExceptionData(net.minecraftforge.jarjar.selection.JarSelector.ResolutionFailureInformation<net.minecraftforge.forgespi.locating.IModFile> entry)`
- `@NotNull private @NotNull String getErrorTranslationKey(net.minecraftforge.jarjar.selection.JarSelector.ResolutionFailureInformation<net.minecraftforge.forgespi.locating.IModFile> entry)`
- `@NotNull private @NotNull Stream<JarInJarDependencyLocator.ModWithVersionRange> getModWithVersionRangeStream(net.minecraftforge.jarjar.selection.JarSelector.SourceWithRequestedVersionRange<net.minecraftforge.forgespi.locating.IModFile> file)`
- `@NotNull private @NotNull String formatError(JarInJarDependencyLocator.ModWithVersionRange modWithVersionRange)`
- `protected String identifyMod(net.minecraftforge.forgespi.locating.IModFile modFile)`

### Inherited methods
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractJarFileDependencyLocator`: `loadResourceFromModFile`
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractJarFileModProvider`: `scanFile`
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractModProvider`: `createMod`, `isValid`, `manifestParser`
- from `net.minecraftforge.forgespi.locating.IModProvider`: `isValid`, `scanFile`

## JarInJarDependencyLocator.ModWithVersionRange

*record* `net.minecraftforge.fml.loading.moddiscovery.JarInJarDependencyLocator.ModWithVersionRange`

Enclosing class: JarInJarDependencyLocator

### Fields
- `private final net.minecraftforge.forgespi.language.IModInfo modInfo`
  The field for the modInfo record component.
- `private final org.apache.maven.artifact.versioning.VersionRange versionRange`
  The field for the versionRange record component.
- `private final org.apache.maven.artifact.versioning.ArtifactVersion artifactVersion`
  The field for the artifactVersion record component.

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
- `public net.minecraftforge.forgespi.language.IModInfo modInfo()`
  Returns the value of the modInfo record component.
  - returns: the value of the modInfo record component
- `public org.apache.maven.artifact.versioning.VersionRange versionRange()`
  Returns the value of the versionRange record component.
  - returns: the value of the versionRange record component
- `public org.apache.maven.artifact.versioning.ArtifactVersion artifactVersion()`
  Returns the value of the artifactVersion record component.
  - returns: the value of the artifactVersion record component

## MavenDirectoryLocator

*class* `net.minecraftforge.fml.loading.moddiscovery.MavenDirectoryLocator`

### Fields
- `private List<Path> modCoords`

### Inherited fields
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractModProvider`: `MANIFEST`, `MODS_TOML`

### Methods
- `public Stream<Path> scanCandidates()`
- `public String name()`
- `public String toString()`
- `public void initArguments(Map<String,?> arguments)`

### Inherited methods
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractJarFileModLocator`: `scanMods`
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractJarFileModProvider`: `scanFile`
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractModProvider`: `createMod`, `getDefaultJarModType`, `isValid`, `manifestParser`
- from `net.minecraftforge.forgespi.locating.IModProvider`: `isValid`, `scanFile`

## MinecraftLocator

*class* `net.minecraftforge.fml.loading.moddiscovery.MinecraftLocator`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Inherited fields
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractModProvider`: `MANIFEST`, `MODS_TOML`

### Methods
- `public List<net.minecraftforge.forgespi.locating.IModLocator.ModFileOrException> scanMods()`
- `private net.minecraftforge.forgespi.language.IModFileInfo buildMinecraftTOML(net.minecraftforge.forgespi.locating.IModFile iModFile)`
- `public String name()`
- `public void scanFile(net.minecraftforge.forgespi.locating.IModFile modFile,  Consumer<Path> pathConsumer)`
- `public void initArguments(Map<String,?> arguments)`

### Inherited methods
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractModProvider`: `createMod`, `getDefaultJarModType`, `isValid`, `manifestParser`
- from `net.minecraftforge.forgespi.locating.IModProvider`: `isValid`

## ModAnnotation

*class* `net.minecraftforge.fml.loading.moddiscovery.ModAnnotation`

### Fields
- `private final ElementType type`
- `private final org.objectweb.asm.Type asmType`
- `private final String member`
- `private final Map<String,Object> values`
- `private ArrayList<Object> arrayList`
- `private String arrayName`

### Methods
- `public static net.minecraftforge.forgespi.language.ModFileScanData.AnnotationData fromModAnnotation(org.objectweb.asm.Type clazz,  ModAnnotation annotation)`
- `public String toString()`
- `public ElementType getType()`
- `public org.objectweb.asm.Type getASMType()`
- `public String getMember()`
- `public Map<String,Object> getValues()`
- `public void addArray(String name)`
- `public void addProperty(String key,  Object value)`
- `public void addEnumProperty(String key,  String enumName,  String value)`
- `public void endArray()`
- `public ModAnnotation addChildAnnotation(String name,  String desc)`

## ModAnnotation.EnumHolder

*class* `net.minecraftforge.fml.loading.moddiscovery.ModAnnotation.EnumHolder`

Enclosing class: ModAnnotation

### Fields
- `private final String desc`
- `private final String value`

### Methods
- `public String getDesc()`
- `public String getValue()`

## ModAnnotationVisitor

*class* `net.minecraftforge.fml.loading.moddiscovery.ModAnnotationVisitor`

### Fields
- `private final ModAnnotation annotation`
- `private LinkedList<ModAnnotation> annotations`
- `private boolean array`
- `private boolean isSubAnnotation`

### Inherited fields
- from `org.objectweb.asm.AnnotationVisitor`: `api`, `av`

### Methods
- `public void visit(String key,  Object value)`
- `public void visitEnum(String name,  String desc,  String value)`
- `public org.objectweb.asm.AnnotationVisitor visitArray(String name)`
- `public org.objectweb.asm.AnnotationVisitor visitAnnotation(String name,  String desc)`
- `public void visitEnd()`

### Inherited methods
- from `org.objectweb.asm.AnnotationVisitor`: `getDelegate`

## ModClassVisitor

*class* `net.minecraftforge.fml.loading.moddiscovery.ModClassVisitor`

### Fields
- `private org.objectweb.asm.Type asmType`
- `private org.objectweb.asm.Type asmSuperType`
- `private Set<org.objectweb.asm.Type> interfaces`
- `private final LinkedList<ModAnnotation> annotations`

### Inherited fields
- from `org.objectweb.asm.ClassVisitor`: `api`, `cv`

### Methods
- `public void visit(int version,  int access,  String name,  String signature,  String superName,  String[] interfaces)`
- `public org.objectweb.asm.AnnotationVisitor visitAnnotation(String annotationName,  boolean runtimeVisible)`
- `public org.objectweb.asm.FieldVisitor visitField(int access,  String name,  String desc,  String signature,  Object value)`
- `public org.objectweb.asm.MethodVisitor visitMethod(int access,  String name,  String desc,  String signature,  String[] exceptions)`
- `public void buildData(Set<net.minecraftforge.forgespi.language.ModFileScanData.ClassData> classes,  Set<net.minecraftforge.forgespi.language.ModFileScanData.AnnotationData> baked)`

### Inherited methods
- from `org.objectweb.asm.ClassVisitor`: `getDelegate`, `visitAttribute`, `visitEnd`, `visitInnerClass`, `visitModule`, `visitNestHost`, `visitNestMember`, `visitOuterClass`, `visitPermittedSubclass`, `visitRecordComponent`, `visitSource`, `visitTypeAnnotation`

## ModDiscoverer

*class* `net.minecraftforge.fml.loading.moddiscovery.ModDiscoverer`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final ServiceLoader<net.minecraftforge.forgespi.locating.IModLocator> modLocators`
- `private final ServiceLoader<net.minecraftforge.forgespi.locating.IDependencyLocator> dependencyLocators`
- `private final List<net.minecraftforge.forgespi.locating.IModLocator> modLocatorList`
- `private final List<net.minecraftforge.forgespi.locating.IDependencyLocator> dependencyLocatorList`

### Methods
- `public ModValidator discoverMods()`
- `private void handleLocatedFiles(List<ModFile> loadedFiles,  List<net.minecraftforge.forgespi.locating.IModFile> locatedFiles)`

## ModFieldVisitor

*class* `net.minecraftforge.fml.loading.moddiscovery.ModFieldVisitor`

### Fields
- `private final LinkedList<ModAnnotation> annotations`
- `private final String fieldName`

### Inherited fields
- from `org.objectweb.asm.FieldVisitor`: `api`, `fv`

### Methods
- `public org.objectweb.asm.AnnotationVisitor visitAnnotation(String annotationName,  boolean runtimeVisible)`

### Inherited methods
- from `org.objectweb.asm.FieldVisitor`: `getDelegate`, `visitAttribute`, `visitEnd`, `visitTypeAnnotation`

## ModFile

*class* `net.minecraftforge.fml.loading.moddiscovery.ModFile`

### Fields
- `@Deprecated(forRemoval=true,  since="1.18") public static final Manifest DEFAULTMANIFEST` (deprecated)
- `private static final org.slf4j.Logger LOGGER`
- `private final String jarVersion`
- `private final net.minecraftforge.forgespi.locating.ModFileFactory.ModFileInfoParser parser`
- `private Map<String,Object> fileProperties`
- `private List<net.minecraftforge.forgespi.language.IModLanguageProvider> loaders`
- `private Throwable scanError`
- `private final cpw.mods.jarhandling.SecureJar jar`
- `private final net.minecraftforge.forgespi.locating.IModFile.Type modFileType`
- `private final Manifest manifest`
- `private final net.minecraftforge.forgespi.locating.IModProvider provider`
- `private net.minecraftforge.forgespi.language.IModFileInfo modFileInfo`
- `private net.minecraftforge.forgespi.language.ModFileScanData fileModFileScanData`
- `private CompletableFuture<net.minecraftforge.forgespi.language.ModFileScanData> futureScanResult`
- `private List<CoreModFile> coreMods`
- `private Path accessTransformer`
- `static final Attributes.Name TYPE`
- `private cpw.mods.jarhandling.SecureJar.Status securityStatus`

### Methods
- `public Supplier<Map<String,Object>> getSubstitutionMap()`
- `public net.minecraftforge.forgespi.locating.IModFile.Type getType()`
- `public Path getFilePath()`
- `public cpw.mods.jarhandling.SecureJar getSecureJar()`
- `public List<net.minecraftforge.forgespi.language.IModInfo> getModInfos()`
- `public Optional<Path> getAccessTransformer()`
- `public boolean identifyMods()`
- `public List<CoreModFile> getCoreMods()`
- `public net.minecraftforge.forgespi.language.ModFileScanData compileContent()`
  Run in an executor thread to harvest the class and annotation list
- `public void scanFile(Consumer<Path> pathConsumer)`
- `public void setFutureScanResult(CompletableFuture<net.minecraftforge.forgespi.language.ModFileScanData> future)`
- `public net.minecraftforge.forgespi.language.ModFileScanData getScanResult()`
- `public void setScanResult(net.minecraftforge.forgespi.language.ModFileScanData modFileScanData,  Throwable throwable)`
- `public void setFileProperties(Map<String,Object> fileProperties)`
- `public List<net.minecraftforge.forgespi.language.IModLanguageProvider> getLoaders()`
- `public Path findResource(String... path)`
- `public void identifyLanguage()`
- `public String toString()`
- `public String getFileName()`
- `public net.minecraftforge.forgespi.locating.IModProvider getProvider()`
- `public net.minecraftforge.forgespi.language.IModFileInfo getModFileInfo()`
- `public void setSecurityStatus(cpw.mods.jarhandling.SecureJar.Status status)`
- `public cpw.mods.jarhandling.SecureJar.Status getSecurityStatus()`
- `public org.apache.maven.artifact.versioning.ArtifactVersion getJarVersion()`
- `private static String parseType(cpw.mods.jarhandling.SecureJar jar)`

## ModFileInfo

*class* `net.minecraftforge.fml.loading.moddiscovery.ModFileInfo`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final net.minecraftforge.forgespi.language.IConfigurable config`
- `private final ModFile modFile`
- `private final URL issueURL`
- `private final List<net.minecraftforge.forgespi.language.IModFileInfo.LanguageSpec> languageSpecs`
- `private final boolean showAsResourcePack`
- `private final List<net.minecraftforge.forgespi.language.IModInfo> mods`
- `private final Map<String,Object> properties`
- `private final String license`
- `private final List<String> usesServices`

### Methods
- `public List<net.minecraftforge.forgespi.language.IModInfo> getMods()`
- `public ModFile getFile()`
- `public List<net.minecraftforge.forgespi.language.IModFileInfo.LanguageSpec> requiredLanguageLoaders()`
- `public Map<String,Object> getFileProperties()`
- `public boolean showAsResourcePack()`
- `public <T> Optional<T> getConfigElement(String... key)`
- `public List<? extends net.minecraftforge.forgespi.language.IConfigurable> getConfigList(String... key)`
- `public String getLicense()`
- `public net.minecraftforge.forgespi.language.IConfigurable getConfig()`
- `public URL getIssueURL()`
- `public boolean missingLicense()`
- `public Optional<String> getCodeSigningFingerprint()`
- `public Optional<String> getTrustData()`
- `public String moduleName()`
- `public String versionString()`
- `public List<String> usesServices()`

## ModFileParser

*class* `net.minecraftforge.fml.loading.moddiscovery.ModFileParser`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Methods
- `public static net.minecraftforge.forgespi.language.IModFileInfo readModList(ModFile modFile,  net.minecraftforge.forgespi.locating.ModFileFactory.ModFileInfoParser parser)`
- `public static net.minecraftforge.forgespi.language.IModFileInfo modsTomlParser(net.minecraftforge.forgespi.locating.IModFile imodFile)`
- `protected static List<CoreModFile> getCoreMods(ModFile modFile)`

## ModInfo

*class* `net.minecraftforge.fml.loading.moddiscovery.ModInfo`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final org.apache.maven.artifact.versioning.DefaultArtifactVersion DEFAULT_VERSION`
- `private static final Pattern VALID_MODID`
- `private static final Pattern VALID_NAMESPACE`
- `private static final Pattern VALID_VERSION`
- `private final ModFileInfo owningFile`
- `private final String modId`
- `private final String namespace`
- `private final org.apache.maven.artifact.versioning.ArtifactVersion version`
- `private final String displayName`
- `private final String description`
- `private final Optional<String> logoFile`
- `private final boolean logoBlur`
- `private final Optional<URL> updateJSONURL`
- `private final List<? extends net.minecraftforge.forgespi.language.IModInfo.ModVersion> dependencies`
- `private final List<net.minecraftforge.forgespi.locating.ForgeFeature.Bound> features`
- `private final Map<String,Object> properties`
- `private final net.minecraftforge.forgespi.language.IConfigurable config`
- `private final Optional<URL> modUrl`

### Inherited fields
- from `net.minecraftforge.forgespi.language.IModInfo`: `UNBOUNDED`

### Methods
- `public ModFileInfo getOwningFile()`
- `public String getModId()`
- `public String getDisplayName()`
- `public String getDescription()`
- `public org.apache.maven.artifact.versioning.ArtifactVersion getVersion()`
- `public List<? extends net.minecraftforge.forgespi.language.IModInfo.ModVersion> getDependencies()`
- `public String getNamespace()`
- `public Map<String,Object> getModProperties()`
- `public Optional<URL> getUpdateURL()`
- `public Optional<String> getLogoFile()`
- `public boolean getLogoBlur()`
- `public net.minecraftforge.forgespi.language.IConfigurable getConfig()`
- `public List<? extends net.minecraftforge.forgespi.locating.ForgeFeature.Bound> getForgeFeatures()`
- `public <T> Optional<T> getConfigElement(String... key)`
- `public List<? extends net.minecraftforge.forgespi.language.IConfigurable> getConfigList(String... key)`
- `public Optional<URL> getModURL()`
- `private net.minecraftforge.forgespi.locating.ForgeFeature.Bound makeBound(Map.Entry<String,Object> e)`

## ModInfo.ModVersion

*class* `net.minecraftforge.fml.loading.moddiscovery.ModInfo.ModVersion`

Enclosing class: ModInfo

### Fields
- `private net.minecraftforge.forgespi.language.IModInfo owner`
- `private final String modId`
- `private final org.apache.maven.artifact.versioning.VersionRange versionRange`
- `private final boolean mandatory`
- `private final net.minecraftforge.forgespi.language.IModInfo.Ordering ordering`
- `private final net.minecraftforge.forgespi.language.IModInfo.DependencySide side`
- `private final Optional<URL> referralUrl`

### Methods
- `public String getModId()`
- `public org.apache.maven.artifact.versioning.VersionRange getVersionRange()`
- `public boolean isMandatory()`
- `public net.minecraftforge.forgespi.language.IModInfo.Ordering getOrdering()`
- `public net.minecraftforge.forgespi.language.IModInfo.DependencySide getSide()`
- `public void setOwner(net.minecraftforge.forgespi.language.IModInfo owner)`
- `public net.minecraftforge.forgespi.language.IModInfo getOwner()`
- `public Optional<URL> getReferralURL()`

## ModJarMetadata

*class* `net.minecraftforge.fml.loading.moddiscovery.ModJarMetadata`

### Fields
- `private net.minecraftforge.forgespi.locating.IModFile modFile`
- `private ModuleDescriptor descriptor`

### Inherited fields
- from `cpw.mods.jarhandling.JarMetadata`: `DASH_VERSION`, `ILLEGAL_KEYWORDS`, `KEYWORD_PARTS`, `LEADING_DOTS`, `MODULE_VERSION`, `NON_ALPHANUM`, `NUMBERLIKE_PARTS`, `REPEATING_DOTS`, `TRAILING_DOTS`

### Methods
- `@Deprecated(forRemoval=true,  since="1.18") static Optional<net.minecraftforge.forgespi.locating.IModFile> buildFile(net.minecraftforge.forgespi.locating.IModLocator locator,  Predicate<cpw.mods.jarhandling.SecureJar> jarTest,  BiPredicate<String,String> filter,  Path... files)` (deprecated)
- `@Deprecated(forRemoval=true,  since="1.18") static net.minecraftforge.forgespi.locating.IModFile buildFile(net.minecraftforge.forgespi.locating.IModLocator locator,  Path... files)` (deprecated)
- `@Deprecated(forRemoval=true,  since="1.18") static Optional<net.minecraftforge.forgespi.locating.IModFile> buildFile(Function<cpw.mods.jarhandling.SecureJar,net.minecraftforge.forgespi.locating.IModFile> mfConstructor,  Predicate<cpw.mods.jarhandling.SecureJar> jarTest,  BiPredicate<String,String> filter,  Path... files)` (deprecated)
- `public void setModFile(net.minecraftforge.forgespi.locating.IModFile file)`
- `public String name()`
- `public String version()`
- `public ModuleDescriptor descriptor()`
- `public net.minecraftforge.forgespi.locating.IModFile modFile()`
- `public boolean equals(Object obj)`
- `public int hashCode()`
- `public String toString()`

## ModListHandler

*class* `net.minecraftforge.fml.loading.moddiscovery.ModListHandler`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Methods
- `public static List<String> processModLists(List<String> modListPaths,  List<Path> mavenRootPaths)`
  Reads the modList paths specified, and searches each maven root for mods matching. Returns a list of mods
   found.
  - param: modListPaths - Paths to search for mod file lists
  - param: mavenRootPaths - Roots to look for mods listed
  - returns: list of found mod coordinates
- `private static List<String> transformPathToList(String path)`
- `private static String fileExtension(Path path)`
- `private static List<String> readListFile(Path filePath)`
  Simple list file, ending in ".list" with one mod coordinate per line
  - param: filePath - path
  - returns: list

## ModMethodVisitor

*class* `net.minecraftforge.fml.loading.moddiscovery.ModMethodVisitor`

### Fields
- `private final LinkedList<ModAnnotation> annotations`
- `private String methodName`
- `private String methodDescriptor`

### Inherited fields
- from `org.objectweb.asm.MethodVisitor`: `api`, `mv`

### Methods
- `public org.objectweb.asm.AnnotationVisitor visitAnnotation(String annotationName,  boolean runtimeVisible)`

### Inherited methods
- from `org.objectweb.asm.MethodVisitor`: `getDelegate`, `visitAnnotableParameterCount`, `visitAnnotationDefault`, `visitAttribute`, `visitCode`, `visitEnd`, `visitFieldInsn`, `visitFrame`, `visitIincInsn`, `visitInsn`, `visitInsnAnnotation`, `visitIntInsn`, `visitInvokeDynamicInsn`, `visitJumpInsn`, `visitLabel`, `visitLdcInsn`, `visitLineNumber`, `visitLocalVariable`, `visitLocalVariableAnnotation`, `visitLookupSwitchInsn`, `visitMaxs`, `visitMethodInsn`, `visitMethodInsn`, `visitMultiANewArrayInsn`, `visitParameter`, `visitParameterAnnotation`, `visitTableSwitchInsn`, `visitTryCatchAnnotation`, `visitTryCatchBlock`, `visitTypeAnnotation`, `visitTypeInsn`, `visitVarInsn`

## ModsFolderLocator

*class* `net.minecraftforge.fml.loading.moddiscovery.ModsFolderLocator`

Support loading mods located in JAR files in the mods folder

### Fields
- `private static final String SUFFIX` (= ".jar")
- `private static final org.slf4j.Logger LOGGER`
- `private final Path modFolder`
- `private final String customName`

### Inherited fields
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractModProvider`: `MANIFEST`, `MODS_TOML`

### Methods
- `public Stream<Path> scanCandidates()`
- `public String name()`
- `public String toString()`
- `public void initArguments(Map<String,?> arguments)`

### Inherited methods
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractJarFileModLocator`: `scanMods`
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractJarFileModProvider`: `scanFile`
- from `net.minecraftforge.fml.loading.moddiscovery.AbstractModProvider`: `createMod`, `getDefaultJarModType`, `isValid`, `manifestParser`
- from `net.minecraftforge.forgespi.locating.IModProvider`: `isValid`, `scanFile`

## ModValidator

*class* `net.minecraftforge.fml.loading.moddiscovery.ModValidator`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final List<ModFile> candidatePlugins`
- `private final List<ModFile> candidateMods`
- `private LoadingModList loadingModList`
- `private List<net.minecraftforge.forgespi.locating.IModFile> brokenFiles`
- `private final List<EarlyLoadingException.ExceptionData> discoveryErrorData`

### Methods
- `private static List<ModFile> lst(List<ModFile> files)`
- `public void stage1Validation()`
- `@NotNull private @NotNull List<ModFile> validateFiles(List<ModFile> mods)`
- `public cpw.mods.modlauncher.api.ITransformationService.Resource getPluginResources()`
- `public cpw.mods.modlauncher.api.ITransformationService.Resource getModResources()`
- `private List<EarlyLoadingException.ExceptionData> validateLanguages()`
- `public BackgroundScanHandler stage2Validation()`

## NightConfigWrapper

*class* `net.minecraftforge.fml.loading.moddiscovery.NightConfigWrapper`

### Fields
- `private final com.electronwill.nightconfig.core.UnmodifiableConfig config`
- `private net.minecraftforge.forgespi.language.IModFileInfo file`

### Methods
- `NightConfigWrapper setFile(net.minecraftforge.forgespi.language.IModFileInfo file)`
- `public <T> Optional<T> getConfigElement(String... key)`
- `public List<? extends net.minecraftforge.forgespi.language.IConfigurable> getConfigList(String... key)`

## Scanner

*class* `net.minecraftforge.fml.loading.moddiscovery.Scanner`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final ModFile fileToScan`

### Methods
- `public net.minecraftforge.forgespi.language.ModFileScanData scan()`
- `private void fileVisitor(Path path,  net.minecraftforge.forgespi.language.ModFileScanData result)`
