# net.minecraft.server.packs

- [AbstractPackResources](#abstractpackresources)
- [BuiltInMetadata](#builtinmetadata)
- [Class PackType](#class-packtype)
- [CompositePackResources](#compositepackresources)
- [FeatureFlagsMetadataSection](#featureflagsmetadatasection)
- [FilePackResources](#filepackresources)
- [FilePackResources.FileResourcesSupplier](#filepackresources.fileresourcessupplier)
- [FilePackResources.SharedZipFileAccess](#filepackresources.sharedzipfileaccess)
- [OverlayMetadataSection](#overlaymetadatasection)
- [OverlayMetadataSection.OverlayEntry](#overlaymetadatasection.overlayentry)
- [PackResources](#packresources)
- [PackResources.ResourceOutput](#packresources.resourceoutput)
- [PathPackResources](#pathpackresources)
- [PathPackResources.PathResourcesSupplier](#pathpackresources.pathresourcessupplier)
- [VanillaPackResources](#vanillapackresources)
- [VanillaPackResourcesBuilder](#vanillapackresourcesbuilder)
## AbstractPackResources

*class* `net.minecraft.server.packs.AbstractPackResources`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final String name`
- `private final boolean isBuiltin`

### Inherited fields
- from `net.minecraft.server.packs.PackResources`: `METADATA_EXTENSION`, `PACK_META`

### Methods
- `@Nullable public <T> T getMetadataSection(MetadataSectionSerializer<T> p_10213_)  throws IOException`
  - throws: IOException
- `@Nullable public static <T> T getMetadataFromStream(MetadataSectionSerializer<T> p_10215_,  InputStream p_10216_)`
- `public String packId()`
- `public boolean isBuiltin()`
- `public String toString()`

### Inherited methods
- from `net.minecraftforge.common.extensions.IForgePackResources`: `getChildren`, `isHidden`
- from `net.minecraft.server.packs.PackResources`: `close`, `getNamespaces`, `getResource`, `getRootResource`, `listResources`

## BuiltInMetadata

*class* `net.minecraft.server.packs.BuiltInMetadata`

### Fields
- `private static final BuiltInMetadata EMPTY`
- `private final Map<MetadataSectionSerializer<?>,?> values`

### Methods
- `public <T> T get(MetadataSectionSerializer<T> p_251597_)`
- `public static BuiltInMetadata of()`
- `public static <T> BuiltInMetadata of(MetadataSectionSerializer<T> p_248992_,  T p_249997_)`
- `public static <T1, T2> BuiltInMetadata of(MetadataSectionSerializer<T1> p_252035_,  T1 p_252174_,  MetadataSectionSerializer<T2> p_249734_,  T2 p_250020_)`

## Class PackType

*enum* `net.minecraft.server.packs.Class PackType`

### Fields
- `private final String directory`

### Methods
- `public static PackType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static PackType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getDirectory()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## CompositePackResources

*class* `net.minecraft.server.packs.CompositePackResources`

### Fields
- `private final PackResources primaryPackResources`
- `private final List<PackResources> packResourcesStack`

### Inherited fields
- from `net.minecraft.server.packs.PackResources`: `METADATA_EXTENSION`, `PACK_META`

### Methods
- `@Nullable public IoSupplier<InputStream> getRootResource(String... p_299314_)`
- `@Nullable public IoSupplier<InputStream> getResource(PackType p_299283_,  ResourceLocation p_299837_)`
- `public void listResources(PackType p_299029_,  String p_300961_,  String p_297881_,  PackResources.ResourceOutput p_298322_)`
- `public Set<String> getNamespaces(PackType p_299362_)`
- `@Nullable public <T> T getMetadataSection(MetadataSectionSerializer<T> p_301339_)  throws IOException`
  - throws: IOException
- `public String packId()`
- `public boolean isBuiltin()`
- `public void close()`

### Inherited methods
- from `net.minecraftforge.common.extensions.IForgePackResources`: `getChildren`, `isHidden`

## FeatureFlagsMetadataSection

*record* `net.minecraft.server.packs.FeatureFlagsMetadataSection`

### Fields
- `private final FeatureFlagSet flags`
  The field for the flags record component.
- `private static final com.mojang.serialization.Codec<FeatureFlagsMetadataSection> CODEC`
- `public static final MetadataSectionType<FeatureFlagsMetadataSection> TYPE`

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
- `public FeatureFlagSet flags()`
  Returns the value of the flags record component.
  - returns: the value of the flags record component

## FilePackResources

*class* `net.minecraft.server.packs.FilePackResources`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `private final FilePackResources.SharedZipFileAccess zipFileAccess`
- `private final String prefix`

### Inherited fields
- from `net.minecraft.server.packs.PackResources`: `METADATA_EXTENSION`, `PACK_META`

### Methods
- `private static String getPathFromLocation(PackType p_250585_,  ResourceLocation p_251470_)`
- `@Nullable public IoSupplier<InputStream> getRootResource(String... p_248514_)`
- `public IoSupplier<InputStream> getResource(PackType p_249605_,  ResourceLocation p_252147_)`
- `private String addPrefix(String p_299206_)`
- `@Nullable private IoSupplier<InputStream> getResource(String p_251795_)`
- `public Set<String> getNamespaces(PackType p_10238_)`
- `public static String extractNamespace(String p_298682_,  String p_300360_)`
- `public void close()`
- `public void listResources(PackType p_250500_,  String p_249598_,  String p_251613_,  PackResources.ResourceOutput p_250655_)`

### Inherited methods
- from `net.minecraft.server.packs.AbstractPackResources`: `getMetadataFromStream`, `getMetadataSection`, `isBuiltin`, `packId`, `toString`
- from `net.minecraftforge.common.extensions.IForgePackResources`: `getChildren`, `isHidden`

## FilePackResources.FileResourcesSupplier

*class* `net.minecraft.server.packs.FilePackResources.FileResourcesSupplier`

Enclosing class: FilePackResources

### Fields
- `private final File content`
- `private final boolean isBuiltin`

### Methods
- `public PackResources openPrimary(String p_297270_)`
- `public PackResources openFull(String p_299586_,  Pack.Info p_299388_)`

## FilePackResources.SharedZipFileAccess

*class* `net.minecraft.server.packs.FilePackResources.SharedZipFileAccess`

Enclosing class: FilePackResources

### Fields
- `final File file`
- `@Nullable private ZipFile zipFile`
- `private boolean failedToLoad`

### Methods
- `@Nullable ZipFile getOrCreateZipFile()`
- `public void close()`
- `protected void finalize()  throws Throwable`
  - throws: Throwable

## OverlayMetadataSection

*record* `net.minecraft.server.packs.OverlayMetadataSection`

### Fields
- `private final List<OverlayMetadataSection.OverlayEntry> overlays`
  The field for the overlays record component.
- `private static final Pattern DIR_VALIDATOR`
- `private static final com.mojang.serialization.Codec<OverlayMetadataSection> CODEC`
- `public static final MetadataSectionType<OverlayMetadataSection> TYPE`

### Methods
- `private static com.mojang.serialization.DataResult<String> validateOverlayDir(String p_301366_)`
- `public List<String> overlaysForVersion(int p_299136_)`
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
- `public List<OverlayMetadataSection.OverlayEntry> overlays()`
  Returns the value of the overlays record component.
  - returns: the value of the overlays record component

## OverlayMetadataSection.OverlayEntry

*record* `net.minecraft.server.packs.OverlayMetadataSection.OverlayEntry`

Enclosing class: OverlayMetadataSection

### Fields
- `private final InclusiveRange<Integer> format`
  The field for the format record component.
- `private final String overlay`
  The field for the overlay record component.
- `static final com.mojang.serialization.Codec<OverlayMetadataSection.OverlayEntry> CODEC`

### Methods
- `public boolean isApplicable(int p_300875_)`
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
- `public InclusiveRange<Integer> format()`
  Returns the value of the format record component.
  - returns: the value of the format record component
- `public String overlay()`
  Returns the value of the overlay record component.
  - returns: the value of the overlay record component

## PackResources

*interface* `net.minecraft.server.packs.PackResources`

All Superinterfaces: AutoCloseable, IForgePackResources

### Fields
- `static final String METADATA_EXTENSION` (= ".mcmeta")
- `static final String PACK_META` (= "pack.mcmeta")

### Methods
- `@Nullable IoSupplier<InputStream> getRootResource(String... p_252049_)`
- `@Nullable IoSupplier<InputStream> getResource(PackType p_215339_,  ResourceLocation p_249034_)`
- `void listResources(PackType p_10289_,  String p_251379_,  String p_251932_,  PackResources.ResourceOutput p_249347_)`
- `Set<String> getNamespaces(PackType p_10283_)`
- `@Nullable <T> T getMetadataSection(MetadataSectionSerializer<T> p_10291_)  throws IOException`
  - throws: IOException
- `String packId()`
- `default boolean isBuiltin()`
- `void close()`

### Inherited methods
- from `net.minecraftforge.common.extensions.IForgePackResources`: `getChildren`, `isHidden`

## PackResources.ResourceOutput

*interface* `net.minecraft.server.packs.PackResources.ResourceOutput`

All Superinterfaces: BiConsumer<ResourceLocation, IoSupplier<InputStream>>

Enclosing interface: PackResources

### Inherited methods
- from `java.util.function.BiConsumer`: `accept`, `andThen`

## PathPackResources

*class* `net.minecraft.server.packs.PathPackResources`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final com.google.common.base.Joiner PATH_JOINER`
- `private final Path root`

### Inherited fields
- from `net.minecraft.server.packs.PackResources`: `METADATA_EXTENSION`, `PACK_META`

### Methods
- `@Nullable public IoSupplier<InputStream> getRootResource(String... p_249041_)`
- `public static boolean validatePath(Path p_249579_)`
- `@Nullable public IoSupplier<InputStream> getResource(PackType p_249352_,  ResourceLocation p_251715_)`
- `public static IoSupplier<InputStream> getResource(ResourceLocation p_250145_,  Path p_251046_)`
- `@Nullable private static IoSupplier<InputStream> returnFileIfExists(Path p_250506_)`
- `public void listResources(PackType p_251452_,  String p_249854_,  String p_248650_,  PackResources.ResourceOutput p_248572_)`
- `public static void listPath(String p_249455_,  Path p_249514_,  List<String> p_251918_,  PackResources.ResourceOutput p_249964_)`
- `public Set<String> getNamespaces(PackType p_251896_)`
- `public void close()`

### Inherited methods
- from `net.minecraft.server.packs.AbstractPackResources`: `getMetadataFromStream`, `getMetadataSection`, `isBuiltin`, `packId`, `toString`
- from `net.minecraftforge.common.extensions.IForgePackResources`: `getChildren`, `isHidden`

## PathPackResources.PathResourcesSupplier

*class* `net.minecraft.server.packs.PathPackResources.PathResourcesSupplier`

Enclosing class: PathPackResources

### Fields
- `private final Path content`
- `private final boolean isBuiltin`

### Methods
- `public PackResources openPrimary(String p_298945_)`
- `public PackResources openFull(String p_299991_,  Pack.Info p_300582_)`

## VanillaPackResources

*class* `net.minecraft.server.packs.VanillaPackResources`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final BuiltInMetadata metadata`
- `private final Set<String> namespaces`
- `private final List<Path> rootPaths`
- `private final Map<PackType,List<Path>> pathsForType`

### Inherited fields
- from `net.minecraft.server.packs.PackResources`: `METADATA_EXTENSION`, `PACK_META`

### Methods
- `@Nullable public IoSupplier<InputStream> getRootResource(String... p_250530_)`
- `public void listRawPaths(PackType p_252103_,  ResourceLocation p_250441_,  Consumer<Path> p_251968_)`
- `public void listResources(PackType p_248974_,  String p_248703_,  String p_250848_,  PackResources.ResourceOutput p_249668_)`
- `private static void getResources(PackResources.ResourceOutput p_249662_,  String p_251249_,  Path p_251290_,  List<String> p_250451_)`
- `@Nullable public IoSupplier<InputStream> getResource(PackType p_250512_,  ResourceLocation p_251554_)`
- `public Set<String> getNamespaces(PackType p_10322_)`
- `@Nullable public <T> T getMetadataSection(MetadataSectionSerializer<T> p_10333_)`
- `public String packId()`
- `public boolean isBuiltin()`
- `public void close()`
- `public ResourceProvider asProvider()`

### Inherited methods
- from `net.minecraftforge.common.extensions.IForgePackResources`: `getChildren`, `isHidden`

## VanillaPackResourcesBuilder

*class* `net.minecraft.server.packs.VanillaPackResourcesBuilder`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static Consumer<VanillaPackResourcesBuilder> developmentConfig`
- `private static final Map<PackType,Path> ROOT_DIR_BY_TYPE`
- `private final Set<Path> rootPaths`
- `private final Map<PackType,Set<Path>> pathsForType`
- `private BuiltInMetadata metadata`
- `private final Set<String> namespaces`

### Methods
- `private static Path safeGetPath(URI p_248652_)  throws IOException`
  - throws: IOException
- `private boolean validateDirPath(Path p_249112_)`
- `private void pushRootPath(Path p_251084_)`
- `private void pushPathForType(PackType p_250073_,  Path p_252259_)`
- `public VanillaPackResourcesBuilder pushJarResources()`
- `public VanillaPackResourcesBuilder pushClasspathResources(PackType p_251987_,  Class<?> p_249062_)`
- `public VanillaPackResourcesBuilder applyDevelopmentConfig()`
- `public VanillaPackResourcesBuilder pushUniversalPath(Path p_249464_)`
- `public VanillaPackResourcesBuilder pushAssetPath(PackType p_248623_,  Path p_250065_)`
- `public VanillaPackResourcesBuilder setMetadata(BuiltInMetadata p_249597_)`
- `public VanillaPackResourcesBuilder exposeNamespace(String... p_250838_)`
- `public VanillaPackResources build()`
- `private static List<Path> copyAndReverse(Collection<Path> p_252072_)`
