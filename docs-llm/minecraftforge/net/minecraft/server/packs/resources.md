# net.minecraft.server.packs.resources

- [Class ResourceManager.Empty](#class-resourcemanager.empty)
- [CloseableResourceManager](#closeableresourcemanager)
- [FallbackResourceManager](#fallbackresourcemanager)
- [FallbackResourceManager.EntryStack](#fallbackresourcemanager.entrystack)
- [FallbackResourceManager.LeakedResourceWarningInputStream](#fallbackresourcemanager.leakedresourcewarninginputstream)
- [FallbackResourceManager.PackEntry](#fallbackresourcemanager.packentry)
- [FallbackResourceManager.ResourceWithSource](#fallbackresourcemanager.resourcewithsource)
- [IoSupplier](#iosupplier)
- [MultiPackResourceManager](#multipackresourcemanager)
- [PreparableReloadListener](#preparablereloadlistener)
- [PreparableReloadListener.PreparationBarrier](#preparablereloadlistener.preparationbarrier)
- [ProfiledReloadInstance](#profiledreloadinstance)
- [ProfiledReloadInstance.State](#profiledreloadinstance.state)
- [ReloadableResourceManager](#reloadableresourcemanager)
- [ReloadInstance](#reloadinstance)
- [Resource](#resource)
- [ResourceFilterSection](#resourcefiltersection)
- [ResourceManager](#resourcemanager)
- [ResourceManagerReloadListener](#resourcemanagerreloadlistener)
- [ResourceMetadata](#resourcemetadata)
- [ResourceMetadata.Builder](#resourcemetadata.builder)
- [ResourceProvider](#resourceprovider)
- [SimpleJsonResourceReloadListener](#simplejsonresourcereloadlistener)
- [SimplePreparableReloadListener](#simplepreparablereloadlistener)
- [SimpleReloadInstance](#simplereloadinstance)
- [SimpleReloadInstance.StateFactory](#simplereloadinstance.statefactory)
## Class ResourceManager.Empty

*enum* `net.minecraft.server.packs.resources.Class ResourceManager.Empty`

Enclosing interface: ResourceManager

### Methods
- `public static ResourceManager.Empty[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ResourceManager.Empty valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public Set<String> getNamespaces()`
- `public Optional<Resource> getResource(ResourceLocation p_215576_)`
- `public List<Resource> getResourceStack(ResourceLocation p_215568_)`
- `public Map<ResourceLocation,Resource> listResources(String p_215570_,  Predicate<ResourceLocation> p_215571_)`
- `public Map<ResourceLocation,List<Resource>> listResourceStacks(String p_215573_,  Predicate<ResourceLocation> p_215574_)`
- `public Stream<PackResources> listPacks()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraft.server.packs.resources.ResourceProvider`: `getResourceOrThrow`, `open`, `openAsReader`

## CloseableResourceManager

*interface* `net.minecraft.server.packs.resources.CloseableResourceManager`

All Superinterfaces: AutoCloseable, ResourceManager, ResourceProvider

### Methods
- `void close()`

### Inherited methods
- from `net.minecraft.server.packs.resources.ResourceManager`: `getNamespaces`, `getResourceStack`, `listPacks`, `listResources`, `listResourceStacks`
- from `net.minecraft.server.packs.resources.ResourceProvider`: `getResource`, `getResourceOrThrow`, `open`, `openAsReader`

## FallbackResourceManager

*class* `net.minecraft.server.packs.resources.FallbackResourceManager`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `public final List<FallbackResourceManager.PackEntry> fallbacks`
- `private final PackType type`
- `private final String namespace`

### Methods
- `public void push(PackResources p_215378_)`
- `public void push(PackResources p_215383_,  Predicate<ResourceLocation> p_215384_)`
- `public void pushFilterOnly(String p_215400_,  Predicate<ResourceLocation> p_215401_)`
- `private void pushInternal(String p_215396_,  @Nullable  PackResources p_215397_,  @Nullable  Predicate<ResourceLocation> p_215398_)`
- `public Set<String> getNamespaces()`
- `public Optional<Resource> getResource(ResourceLocation p_215419_)`
- `private static Resource createResource(PackResources p_249946_,  ResourceLocation p_250632_,  IoSupplier<InputStream> p_250514_,  IoSupplier<ResourceMetadata> p_251676_)`
- `private static IoSupplier<InputStream> wrapForDebug(ResourceLocation p_248639_,  PackResources p_251740_,  IoSupplier<InputStream> p_249116_)`
- `public List<Resource> getResourceStack(ResourceLocation p_215367_)`
- `private static boolean isMetadata(ResourceLocation p_249381_)`
- `private static ResourceLocation getResourceLocationFromMetadata(ResourceLocation p_249669_)`
- `static ResourceLocation getMetadataLocation(ResourceLocation p_10625_)`
- `public Map<ResourceLocation,Resource> listResources(String p_215413_,  Predicate<ResourceLocation> p_215414_)`
- `private IoSupplier<ResourceMetadata> createStackMetadataFinder(ResourceLocation p_215369_,  int p_215370_)`
- `private static IoSupplier<ResourceMetadata> convertToMetadata(IoSupplier<InputStream> p_250827_)`
- `private static ResourceMetadata parseMetadata(IoSupplier<InputStream> p_250103_)  throws IOException`
  - throws: IOException
- `private static void applyPackFiltersToExistingResources(FallbackResourceManager.PackEntry p_215393_,  Map<ResourceLocation,FallbackResourceManager.EntryStack> p_215394_)`
- `private void listPackResources(FallbackResourceManager.PackEntry p_215388_,  String p_215389_,  Predicate<ResourceLocation> p_215390_,  Map<ResourceLocation,FallbackResourceManager.EntryStack> p_215391_)`
- `public Map<ResourceLocation,List<Resource>> listResourceStacks(String p_215416_,  Predicate<ResourceLocation> p_215417_)`
- `public Stream<PackResources> listPacks()`

### Inherited methods
- from `net.minecraft.server.packs.resources.ResourceProvider`: `getResourceOrThrow`, `open`, `openAsReader`

## FallbackResourceManager.EntryStack

*record* `net.minecraft.server.packs.resources.FallbackResourceManager.EntryStack`

Enclosing class: FallbackResourceManager

### Fields
- `private final ResourceLocation fileLocation`
  The field for the fileLocation record component.
- `private final ResourceLocation metadataLocation`
  The field for the metadataLocation record component.
- `private final List<FallbackResourceManager.ResourceWithSource> fileSources`
  The field for the fileSources record component.
- `private final Map<PackResources,IoSupplier<InputStream>> metaSources`
  The field for the metaSources record component.

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
- `public ResourceLocation fileLocation()`
  Returns the value of the fileLocation record component.
  - returns: the value of the fileLocation record component
- `public ResourceLocation metadataLocation()`
  Returns the value of the metadataLocation record component.
  - returns: the value of the metadataLocation record component
- `public List<FallbackResourceManager.ResourceWithSource> fileSources()`
  Returns the value of the fileSources record component.
  - returns: the value of the fileSources record component
- `public Map<PackResources,IoSupplier<InputStream>> metaSources()`
  Returns the value of the metaSources record component.
  - returns: the value of the metaSources record component

## FallbackResourceManager.LeakedResourceWarningInputStream

*class* `net.minecraft.server.packs.resources.FallbackResourceManager.LeakedResourceWarningInputStream`

Enclosing class: FallbackResourceManager

### Fields
- `private final Supplier<String> message`
- `private boolean closed`

### Inherited fields
- from `java.io.FilterInputStream`: `in`

### Methods
- `public void close()  throws IOException`
  - throws: IOException
- `protected void finalize()  throws Throwable`
  - throws: Throwable

### Inherited methods
- from `java.io.FilterInputStream`: `available`, `mark`, `markSupported`, `read`, `read`, `read`, `reset`, `skip`
- from `java.io.InputStream`: `nullInputStream`, `readAllBytes`, `readNBytes`, `readNBytes`, `skipNBytes`, `transferTo`

## FallbackResourceManager.PackEntry

*record* `net.minecraft.server.packs.resources.FallbackResourceManager.PackEntry`

Enclosing class: FallbackResourceManager

### Fields
- `private final String name`
  The field for the name record component.
- `@Nullable private final PackResources resources`
  The field for the resources record component.
- `@Nullable private final Predicate<ResourceLocation> filter`
  The field for the filter record component.

### Methods
- `public void filterAll(Collection<ResourceLocation> p_215443_)`
- `public boolean isFiltered(ResourceLocation p_215441_)`
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
- `public String name()`
  Returns the value of the name record component.
  - returns: the value of the name record component
- `@Nullable public PackResources resources()`
  Returns the value of the resources record component.
  - returns: the value of the resources record component
- `@Nullable public Predicate<ResourceLocation> filter()`
  Returns the value of the filter record component.
  - returns: the value of the filter record component

## FallbackResourceManager.ResourceWithSource

*record* `net.minecraft.server.packs.resources.FallbackResourceManager.ResourceWithSource`

Enclosing class: FallbackResourceManager

### Fields
- `private final PackResources source`
  The field for the source record component.
- `private final IoSupplier<InputStream> resource`
  The field for the resource record component.

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
- `public PackResources source()`
  Returns the value of the source record component.
  - returns: the value of the source record component
- `public IoSupplier<InputStream> resource()`
  Returns the value of the resource record component.
  - returns: the value of the resource record component

## IoSupplier

*interface* `net.minecraft.server.packs.resources.IoSupplier`

### Methods
- `static IoSupplier<InputStream> create(Path p_248941_)`
- `static IoSupplier<InputStream> create(ZipFile p_249624_,  ZipEntry p_248688_)`
- `T get() throws IOException`
  - throws: IOException

## MultiPackResourceManager

*class* `net.minecraft.server.packs.resources.MultiPackResourceManager`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Map<String,FallbackResourceManager> namespacedManagers`
- `private final List<PackResources> packs`

### Methods
- `@Nullable private ResourceFilterSection getPackFilterSection(PackResources p_215468_)`
- `public Set<String> getNamespaces()`
- `public Optional<Resource> getResource(ResourceLocation p_215482_)`
- `public List<Resource> getResourceStack(ResourceLocation p_215466_)`
- `public Map<ResourceLocation,Resource> listResources(String p_215476_,  Predicate<ResourceLocation> p_215477_)`
- `public Map<ResourceLocation,List<Resource>> listResourceStacks(String p_215479_,  Predicate<ResourceLocation> p_215480_)`
- `private static void checkTrailingDirectoryPath(String p_249608_)`
- `public Stream<PackResources> listPacks()`
- `public void close()`

### Inherited methods
- from `net.minecraft.server.packs.resources.ResourceProvider`: `getResourceOrThrow`, `open`, `openAsReader`

## PreparableReloadListener

*interface* `net.minecraft.server.packs.resources.PreparableReloadListener`

### Methods
- `CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier p_10638_,  ResourceManager p_10639_,  ProfilerFiller p_10640_,  ProfilerFiller p_10641_,  Executor p_10642_,  Executor p_10643_)`
- `default String getName()`

## PreparableReloadListener.PreparationBarrier

*interface* `net.minecraft.server.packs.resources.PreparableReloadListener.PreparationBarrier`

Enclosing interface: PreparableReloadListener

### Methods
- `<T> CompletableFuture<T> wait(T p_10644_)`

## ProfiledReloadInstance

*class* `net.minecraft.server.packs.resources.ProfiledReloadInstance`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final com.google.common.base.Stopwatch total`

### Inherited fields
- from `net.minecraft.server.packs.resources.SimpleReloadInstance`: `allDone`, `allPreparations`, `preparingListeners`

### Methods
- `private List<ProfiledReloadInstance.State> finish(List<ProfiledReloadInstance.State> p_215484_)`

### Inherited methods
- from `net.minecraft.server.packs.resources.SimpleReloadInstance`: `create`, `done`, `getActualProgress`, `of`
- from `net.minecraft.server.packs.resources.ReloadInstance`: `checkExceptions`, `isDone`

## ProfiledReloadInstance.State

*class* `net.minecraft.server.packs.resources.ProfiledReloadInstance.State`

Enclosing class: ProfiledReloadInstance

### Fields
- `final String name`
- `final ProfileResults preparationResult`
- `final ProfileResults reloadResult`
- `final AtomicLong preparationNanos`
- `final AtomicLong reloadNanos`

## ReloadableResourceManager

*class* `net.minecraft.server.packs.resources.ReloadableResourceManager`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private CloseableResourceManager resources`
- `private final List<PreparableReloadListener> listeners`
- `private final PackType type`

### Methods
- `public void close()`
- `public void registerReloadListener(PreparableReloadListener p_10714_)`
- `public ReloadInstance createReload(Executor p_143930_,  Executor p_143931_,  CompletableFuture<Unit> p_143932_,  List<PackResources> p_143933_)`
- `public Optional<Resource> getResource(ResourceLocation p_215494_)`
- `public Set<String> getNamespaces()`
- `public List<Resource> getResourceStack(ResourceLocation p_215486_)`
- `public Map<ResourceLocation,Resource> listResources(String p_215488_,  Predicate<ResourceLocation> p_215489_)`
- `public Map<ResourceLocation,List<Resource>> listResourceStacks(String p_215491_,  Predicate<ResourceLocation> p_215492_)`
- `public Stream<PackResources> listPacks()`
- `public void registerReloadListenerIfNotPresent(PreparableReloadListener listener)`

### Inherited methods
- from `net.minecraft.server.packs.resources.ResourceProvider`: `getResourceOrThrow`, `open`, `openAsReader`

## ReloadInstance

*interface* `net.minecraft.server.packs.resources.ReloadInstance`

### Methods
- `CompletableFuture<?> done()`
- `float getActualProgress()`
- `default boolean isDone()`
- `default void checkExceptions()`

## Resource

*class* `net.minecraft.server.packs.resources.Resource`

### Fields
- `private final PackResources source`
- `private final IoSupplier<InputStream> streamSupplier`
- `private final IoSupplier<ResourceMetadata> metadataSupplier`
- `@Nullable private ResourceMetadata cachedMetadata`

### Methods
- `public PackResources source()`
- `public String sourcePackId()`
- `public boolean isBuiltin()`
- `public InputStream open()  throws IOException`
  - throws: IOException
- `public BufferedReader openAsReader()  throws IOException`
  - throws: IOException
- `public ResourceMetadata metadata()  throws IOException`
  - throws: IOException

## ResourceFilterSection

*class* `net.minecraft.server.packs.resources.ResourceFilterSection`

### Fields
- `private static final com.mojang.serialization.Codec<ResourceFilterSection> CODEC`
- `public static final MetadataSectionType<ResourceFilterSection> TYPE`
- `private final List<ResourceLocationPattern> blockList`

### Methods
- `public boolean isNamespaceFiltered(String p_215524_)`
- `public boolean isPathFiltered(String p_215529_)`

## ResourceManager

*interface* `net.minecraft.server.packs.resources.ResourceManager`

All Superinterfaces: ResourceProvider

### Methods
- `Set<String> getNamespaces()`
- `List<Resource> getResourceStack(ResourceLocation p_215562_)`
- `Map<ResourceLocation,Resource> listResources(String p_215563_,  Predicate<ResourceLocation> p_215564_)`
- `Map<ResourceLocation,List<Resource>> listResourceStacks(String p_215565_,  Predicate<ResourceLocation> p_215566_)`
- `Stream<PackResources> listPacks()`

### Inherited methods
- from `net.minecraft.server.packs.resources.ResourceProvider`: `getResource`, `getResourceOrThrow`, `open`, `openAsReader`

## ResourceManagerReloadListener

*interface* `net.minecraft.server.packs.resources.ResourceManagerReloadListener`

All Superinterfaces: PreparableReloadListener

### Methods
- `default CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier p_10752_,  ResourceManager p_10753_,  ProfilerFiller p_10754_,  ProfilerFiller p_10755_,  Executor p_10756_,  Executor p_10757_)`
- `void onResourceManagerReload(ResourceManager p_10758_)`

### Inherited methods
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## ResourceMetadata

*interface* `net.minecraft.server.packs.resources.ResourceMetadata`

### Fields
- `static final ResourceMetadata EMPTY`
- `static final IoSupplier<ResourceMetadata> EMPTY_SUPPLIER`

### Methods
- `static ResourceMetadata fromJsonStream(InputStream p_215581_)  throws IOException`
  - throws: IOException
- `<T> Optional<T> getSection(MetadataSectionSerializer<T> p_215579_)`
- `default ResourceMetadata copySections(Collection<MetadataSectionSerializer<?>> p_299820_)`
- `private <T> void copySection(ResourceMetadata.Builder p_299159_,  MetadataSectionSerializer<T> p_300161_)`

## ResourceMetadata.Builder

*class* `net.minecraft.server.packs.resources.ResourceMetadata.Builder`

Enclosing interface: ResourceMetadata

### Fields
- `private final com.google.common.collect.ImmutableMap.Builder<MetadataSectionSerializer<?>,Object> map`

### Methods
- `public <T> ResourceMetadata.Builder put(MetadataSectionSerializer<T> p_300728_,  T p_298435_)`
- `public ResourceMetadata build()`

## ResourceProvider

*interface* `net.minecraft.server.packs.resources.ResourceProvider`

### Methods
- `Optional<Resource> getResource(ResourceLocation p_215592_)`
- `default Resource getResourceOrThrow(ResourceLocation p_215594_)  throws FileNotFoundException`
  - throws: FileNotFoundException
- `default InputStream open(ResourceLocation p_215596_)  throws IOException`
  - throws: IOException
- `default BufferedReader openAsReader(ResourceLocation p_215598_)  throws IOException`
  - throws: IOException
- `static ResourceProvider fromMap(Map<ResourceLocation,Resource> p_251819_)`

## SimpleJsonResourceReloadListener

*class* `net.minecraft.server.packs.resources.SimpleJsonResourceReloadListener`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final com.google.gson.Gson gson`
- `private final String directory`

### Methods
- `protected Map<ResourceLocation,com.google.gson.JsonElement> prepare(ResourceManager p_10771_,  ProfilerFiller p_10772_)`
- `public static void scanDirectory(ResourceManager p_279308_,  String p_279131_,  com.google.gson.Gson p_279261_,  Map<ResourceLocation,com.google.gson.JsonElement> p_279404_)`
- `protected ResourceLocation getPreparedPath(ResourceLocation rl)`

### Inherited methods
- from `net.minecraft.server.packs.resources.SimplePreparableReloadListener`: `apply`, `reload`
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## SimplePreparableReloadListener

*class* `net.minecraft.server.packs.resources.SimplePreparableReloadListener`

### Methods
- `public final CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier p_10780_,  ResourceManager p_10781_,  ProfilerFiller p_10782_,  ProfilerFiller p_10783_,  Executor p_10784_,  Executor p_10785_)`
- `protected abstract T prepare(ResourceManager p_10796_,  ProfilerFiller p_10797_)`
- `protected abstract void apply(T p_10793_,  ResourceManager p_10794_,  ProfilerFiller p_10795_)`

### Inherited methods
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## SimpleReloadInstance

*class* `net.minecraft.server.packs.resources.SimpleReloadInstance`

### Fields
- `private static final int PREPARATION_PROGRESS_WEIGHT` (= 2)
- `private static final int EXTRA_RELOAD_PROGRESS_WEIGHT` (= 2)
- `private static final int LISTENER_PROGRESS_WEIGHT` (= 1)
- `protected final CompletableFuture<Unit> allPreparations`
- `protected CompletableFuture<List<S>> allDone`
- `final Set<PreparableReloadListener> preparingListeners`
- `private final int listenerCount`
- `private int startedReloads`
- `private int finishedReloads`
- `private final AtomicInteger startedTaskCounter`
- `private final AtomicInteger doneTaskCounter`

### Methods
- `public static SimpleReloadInstance<Void> of(ResourceManager p_10816_,  List<PreparableReloadListener> p_10817_,  Executor p_10818_,  Executor p_10819_,  CompletableFuture<Unit> p_10820_)`
- `public CompletableFuture<?> done()`
- `public float getActualProgress()`
- `public static ReloadInstance create(ResourceManager p_203835_,  List<PreparableReloadListener> p_203836_,  Executor p_203837_,  Executor p_203838_,  CompletableFuture<Unit> p_203839_,  boolean p_203840_)`

### Inherited methods
- from `net.minecraft.server.packs.resources.ReloadInstance`: `checkExceptions`, `isDone`

## SimpleReloadInstance.StateFactory

*interface* `net.minecraft.server.packs.resources.SimpleReloadInstance.StateFactory`

Enclosing class: SimpleReloadInstance<S>

### Methods
- `CompletableFuture<S> create(PreparableReloadListener.PreparationBarrier p_10864_,  ResourceManager p_10865_,  PreparableReloadListener p_10866_,  Executor p_10867_,  Executor p_10868_)`
