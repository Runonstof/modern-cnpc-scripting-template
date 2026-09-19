# net.minecraft.server.packs.repository

- [BuiltInPackSource](#builtinpacksource)
- [Class Pack.Position](#class-pack.position)
- [Class PackCompatibility](#class-packcompatibility)
- [FolderRepositorySource](#folderrepositorysource)
- [FolderRepositorySource.FolderPackDetector](#folderrepositorysource.folderpackdetector)
- [Pack](#pack)
- [Pack.Info](#pack.info)
- [Pack.ResourcesSupplier](#pack.resourcessupplier)
- [PackDetector](#packdetector)
- [PackRepository](#packrepository)
- [PackSource](#packsource)
- [RepositorySource](#repositorysource)
- [ServerPacksSource](#serverpackssource)
## BuiltInPackSource

*class* `net.minecraft.server.packs.repository.BuiltInPackSource`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final String VANILLA_ID` (= "vanilla")
- `private final PackType packType`
- `private final VanillaPackResources vanillaPack`
- `private final ResourceLocation packDir`
- `private final DirectoryValidator validator`

### Methods
- `public void loadPacks(Consumer<Pack> p_250708_)`
- `@Nullable protected abstract Pack createVanillaPack(PackResources p_251690_)`
- `protected abstract Component getPackTitle(String p_251850_)`
- `public VanillaPackResources getVanillaPack()`
- `private void listBundledPacks(Consumer<Pack> p_249128_)`
- `protected void populatePackList(BiConsumer<String,Function<String,Pack>> p_250341_)`
- `protected void discoverPacksInPath(@Nullable  Path p_250013_,  BiConsumer<String,Function<String,Pack>> p_249898_)`
- `private static String pathToId(Path p_252048_)`
- `@Nullable protected abstract Pack createBuiltinPack(String p_249992_,  Pack.ResourcesSupplier p_248670_,  Component p_252197_)`
- `protected static Pack.ResourcesSupplier fixedResources(PackResources p_298206_)`

## Class Pack.Position

*enum* `net.minecraft.server.packs.repository.Class Pack.Position`

Enclosing class: Pack

### Methods
- `public static Pack.Position[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Pack.Position valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public <T> int insert(List<T> p_10471_,  T p_10472_,  Function<T,Pack> p_10473_,  boolean p_10474_)`
- `public Pack.Position opposite()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class PackCompatibility

*enum* `net.minecraft.server.packs.repository.Class PackCompatibility`

### Fields
- `private final Component description`
- `private final Component confirmation`

### Methods
- `public static PackCompatibility[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static PackCompatibility valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public boolean isCompatible()`
- `public static PackCompatibility forVersion(InclusiveRange<Integer> p_300208_,  int p_297718_)`
- `public Component getDescription()`
- `public Component getConfirmation()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## FolderRepositorySource

*class* `net.minecraft.server.packs.repository.FolderRepositorySource`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `private final Path folder`
- `private final PackType packType`
- `private final PackSource packSource`
- `private final DirectoryValidator validator`

### Methods
- `private static String nameFromPath(Path p_248745_)`
- `public void loadPacks(Consumer<Pack> p_250965_)`
- `public static void discoverPacks(Path p_248794_,  DirectoryValidator p_299329_,  boolean p_255987_,  BiConsumer<Path,Pack.ResourcesSupplier> p_248580_)  throws IOException`
  - throws: IOException

## FolderRepositorySource.FolderPackDetector

*class* `net.minecraft.server.packs.repository.FolderRepositorySource.FolderPackDetector`

Enclosing class: FolderRepositorySource

### Fields
- `private final boolean isBuiltin`

### Methods
- `@Nullable protected Pack.ResourcesSupplier createZipPack(Path p_299114_)`
- `protected Pack.ResourcesSupplier createDirectoryPack(Path p_300765_)`

### Inherited methods
- from `net.minecraft.server.packs.repository.PackDetector`: `detectPackResources`

## Pack

*class* `net.minecraft.server.packs.repository.Pack`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final String id`
- `private final Pack.ResourcesSupplier resources`
- `private final Component title`
- `private final Pack.Info info`
- `private final Pack.Position defaultPosition`
- `private final boolean required`
- `private final boolean fixedPosition`
- `private final boolean hidden`
- `private final PackSource packSource`

### Methods
- `@Nullable public static Pack readMetaAndCreate(String p_249649_,  Component p_248632_,  boolean p_251594_,  Pack.ResourcesSupplier p_252210_,  PackType p_250595_,  Pack.Position p_248706_,  PackSource p_251233_)`
- `public static Pack create(String p_252257_,  Component p_248717_,  boolean p_248811_,  Pack.ResourcesSupplier p_248969_,  Pack.Info p_251314_,  Pack.Position p_252110_,  boolean p_250237_,  PackSource p_248524_)`
- `@Nullable public static Pack.Info readPackInfo(String p_250591_,  Pack.ResourcesSupplier p_250739_,  int p_299232_)`
- `private static InclusiveRange<Integer> getDeclaredPackVersions(String p_299045_,  PackMetadataSection p_298414_)`
- `public Component getTitle()`
- `public Component getDescription()`
- `public Component getChatLink(boolean p_10438_)`
- `public PackCompatibility getCompatibility()`
- `public FeatureFlagSet getRequestedFeatures()`
- `public PackResources open()`
- `public String getId()`
- `public boolean isRequired()`
- `public boolean isFixedPosition()`
- `public Pack.Position getDefaultPosition()`
- `public PackSource getPackSource()`
- `public boolean isHidden()`
- `public boolean equals(Object p_10448_)`
- `public int hashCode()`

## Pack.Info

*record* `net.minecraft.server.packs.repository.Pack.Info`

Enclosing class: Pack

### Fields
- `private final Component description`
  The field for the description record component.
- `private final PackCompatibility compatibility`
  The field for the compatibility record component.
- `private final FeatureFlagSet requestedFeatures`
  The field for the requestedFeatures record component.
- `private final List<String> overlays`
  The field for the overlays record component.
- `private final boolean hidden`
  The field for the hidden record component.

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
- `public Component description()`
  Returns the value of the description record component.
  - returns: the value of the description record component
- `public PackCompatibility compatibility()`
  Returns the value of the compatibility record component.
  - returns: the value of the compatibility record component
- `public FeatureFlagSet requestedFeatures()`
  Returns the value of the requestedFeatures record component.
  - returns: the value of the requestedFeatures record component
- `public List<String> overlays()`
  Returns the value of the overlays record component.
  - returns: the value of the overlays record component
- `public boolean hidden()`
  Returns the value of the hidden record component.
  - returns: the value of the hidden record component

## Pack.ResourcesSupplier

*interface* `net.minecraft.server.packs.repository.Pack.ResourcesSupplier`

Enclosing class: Pack

### Methods
- `PackResources openPrimary(String p_298664_)`
- `PackResources openFull(String p_251717_,  Pack.Info p_298253_)`

## PackDetector

*class* `net.minecraft.server.packs.repository.PackDetector`

### Fields
- `private final DirectoryValidator validator`

### Methods
- `@Nullable public T detectPackResources(Path p_298083_,  List<ForbiddenSymlinkInfo> p_297322_)  throws IOException`
  - throws: IOException
- `@Nullable protected abstract T createZipPack(Path p_297649_)  throws IOException`
  - throws: IOException
- `@Nullable protected abstract T createDirectoryPack(Path p_298942_)  throws IOException`
  - throws: IOException

## PackRepository

*class* `net.minecraft.server.packs.repository.PackRepository`

### Fields
- `private final Set<RepositorySource> sources`
- `private Map<String,Pack> available`
- `private List<Pack> selected`

### Methods
- `public void reload()`
- `private Map<String,Pack> discoverAvailable()`
- `public void setSelected(Collection<String> p_10510_)`
- `public boolean addPack(String p_276042_)`
- `public boolean removePack(String p_276065_)`
- `private List<Pack> rebuildSelected(Collection<String> p_10518_)`
- `private Stream<Pack> getAvailablePacks(Collection<String> p_10521_)`
- `public Collection<String> getAvailableIds()`
- `public Collection<Pack> getAvailablePacks()`
- `public Collection<String> getSelectedIds()`
- `public FeatureFlagSet getRequestedFeatureFlags()`
- `public Collection<Pack> getSelectedPacks()`
- `@Nullable public Pack getPack(String p_10508_)`
- `public void addPackFinder(RepositorySource packFinder)`
- `public boolean isAvailable(String p_10516_)`
- `public List<PackResources> openAllSelected()`

## PackSource

*interface* `net.minecraft.server.packs.repository.PackSource`

### Fields
- `static final UnaryOperator<Component> NO_DECORATION`
- `static final PackSource DEFAULT`
- `static final PackSource BUILT_IN`
- `static final PackSource FEATURE`
- `static final PackSource WORLD`
- `static final PackSource SERVER`

### Methods
- `Component decorate(Component p_10541_)`
- `boolean shouldAddAutomatically()`
- `static PackSource create(UnaryOperator<Component> p_251995_,  boolean p_249897_)`
- `private static UnaryOperator<Component> decorateWithSource(String p_10534_)`

## RepositorySource

*interface* `net.minecraft.server.packs.repository.RepositorySource`

### Methods
- `void loadPacks(Consumer<Pack> p_10542_)`

## ServerPacksSource

*class* `net.minecraft.server.packs.repository.ServerPacksSource`

### Fields
- `private static final PackMetadataSection VERSION_METADATA_SECTION`
- `private static final FeatureFlagsMetadataSection FEATURE_FLAGS_METADATA_SECTION`
- `private static final BuiltInMetadata BUILT_IN_METADATA`
- `private static final Component VANILLA_NAME`
- `private static final ResourceLocation PACKS_DIR`

### Inherited fields
- from `net.minecraft.server.packs.repository.BuiltInPackSource`: `VANILLA_ID`

### Methods
- `public static VanillaPackResources createVanillaPackSource()`
- `protected Component getPackTitle(String p_249692_)`
- `@Nullable protected Pack createVanillaPack(PackResources p_250283_)`
- `@Nullable protected Pack createBuiltinPack(String p_250596_,  Pack.ResourcesSupplier p_249625_,  Component p_249043_)`
- `public static PackRepository createPackRepository(Path p_251569_,  DirectoryValidator p_300268_)`
- `public static PackRepository createVanillaTrustedRepository()`
- `public static PackRepository createPackRepository(LevelStorageSource.LevelStorageAccess p_250213_)`

### Inherited methods
- from `net.minecraft.server.packs.repository.BuiltInPackSource`: `discoverPacksInPath`, `fixedResources`, `getVanillaPack`, `loadPacks`, `populatePackList`
