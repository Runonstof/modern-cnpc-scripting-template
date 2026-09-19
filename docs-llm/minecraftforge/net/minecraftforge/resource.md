# net.minecraftforge.resource

- [DelegatingPackResources](#delegatingpackresources)
- [PathPackResources](#pathpackresources)
- [ResourcePackLoader](#resourcepackloader)
## DelegatingPackResources

*class* `net.minecraftforge.resource.DelegatingPackResources`

### Fields
- `private final PackMetadataSection packMeta`
- `private final List<PackResources> delegates`
- `private final Map<String,List<PackResources>> namespacesAssets`
- `private final Map<String,List<PackResources>> namespacesData`

### Inherited fields
- from `net.minecraft.server.packs.PackResources`: `METADATA_EXTENSION`, `PACK_META`

### Methods
- `private Map<String,List<PackResources>> buildNamespaceMap(PackType type,  List<PackResources> packList)`
- `@Nullable public <T> T getMetadataSection(MetadataSectionSerializer<T> deserializer)  throws IOException`
  - throws: IOException
- `public void listResources(PackType type,  String resourceNamespace,  String paths,  PackResources.ResourceOutput resourceOutput)`
- `public Set<String> getNamespaces(PackType type)`
- `public void close()`
- `@Nullable public @Nullable IoSupplier<InputStream> getRootResource(String... paths)`
- `@Nullable public @Nullable IoSupplier<InputStream> getResource(PackType type,  ResourceLocation location)`
- `@Nullable public @Nullable Collection<PackResources> getChildren()`
  Description copied from interface: IForgePackResources
  Gets a collection of PackResource instances nested inside this pack.
   Used to merge several packs into one entry in the resource pack selection UI without
   losing the ability for each pack to return a resource in
   ResourceManager.getResourceStack(ResourceLocation)
  - returns: Collection of nested PackResource, or null if this pack has no children
- `private List<PackResources> getCandidatePacks(PackType type,  ResourceLocation location)`

### Inherited methods
- from `net.minecraft.server.packs.AbstractPackResources`: `getMetadataFromStream`, `isBuiltin`, `packId`, `toString`
- from `net.minecraftforge.common.extensions.IForgePackResources`: `isHidden`

## PathPackResources

*class* `net.minecraftforge.resource.PathPackResources`

Defines a resource pack from an arbitrary Path.

 This is primarily intended to support including optional resource packs inside a mod,
 such as to have alternative textures to use along with Programmer Art, or optional
 alternative recipes for compatibility ot to replace vanilla recipes.

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Path source`

### Inherited fields
- from `net.minecraft.server.packs.PackResources`: `METADATA_EXTENSION`, `PACK_META`

### Methods
- `public Path getSource()`
  Returns the source path containing the resource pack.
   This is used for error display.
  - returns: the root path of the resources.
- `protected Path resolve(String... paths)`
  Implement to return a file or folder path for the given set of path components.
  - param: paths - One or more path strings to resolve. Can include slash-separated paths.
  - returns: the resulting path, which may not exist.
- `@Nullable public @Nullable IoSupplier<InputStream> getRootResource(String... paths)`
- `public void listResources(PackType type,  String namespace,  String path,  PackResources.ResourceOutput resourceOutput)`
- `public Set<String> getNamespaces(PackType type)`
- `@NotNull private @NotNull Set<String> getNamespacesFromDisk(PackType type)`
- `public IoSupplier<InputStream> getResource(PackType type,  ResourceLocation location)`
- `private static String[] getPathFromLocation(PackType type,  ResourceLocation location)`
- `public void close()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.server.packs.AbstractPackResources`: `getMetadataFromStream`, `getMetadataSection`, `isBuiltin`, `packId`
- from `net.minecraftforge.common.extensions.IForgePackResources`: `getChildren`, `isHidden`

## ResourcePackLoader

*class* `net.minecraftforge.resource.ResourcePackLoader`

### Fields
- `private static Map<net.minecraftforge.forgespi.locating.IModFile,PathPackResources> modResourcePacks`

### Methods
- `public static Optional<PathPackResources> getPackFor(String modId)`
- `@Deprecated public static void loadResourcePacks(PackRepository resourcePacks,  BiFunction<Map<net.minecraftforge.forgespi.locating.IModFile,? extends PathPackResources>,BiConsumer<? super PathPackResources,Pack>,? extends RepositorySource> packFinder)` (deprecated)
- `public static void loadResourcePacks(PackRepository resourcePacks,  Function<Map<net.minecraftforge.forgespi.locating.IModFile,? extends PathPackResources>,? extends RepositorySource> packFinder)`
- `@NotNull public static @NotNull PathPackResources createPackForMod(net.minecraftforge.forgespi.language.IModFileInfo mf)`
- `public static List<String> getPackNames()`
- `public static <V> Comparator<Map.Entry<String,V>> getSorter()`
