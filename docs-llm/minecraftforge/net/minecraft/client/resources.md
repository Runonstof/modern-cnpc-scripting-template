# net.minecraft.client.resources

- [Class PlayerSkin.Model](#class-playerskin.model)
- [ClientPackSource](#clientpacksource)
- [DefaultPlayerSkin](#defaultplayerskin)
- [DownloadedPackSource](#downloadedpacksource)
- [FoliageColorReloadListener](#foliagecolorreloadlistener)
- [GrassColorReloadListener](#grasscolorreloadlistener)
- [IndexedAssetSource](#indexedassetsource)
- [LegacyStuffWrapper](#legacystuffwrapper)
- [MobEffectTextureManager](#mobeffecttexturemanager)
- [PaintingTextureManager](#paintingtexturemanager)
- [PlayerSkin](#playerskin)
- [SkinManager](#skinmanager)
- [SkinManager.CacheKey](#skinmanager.cachekey)
- [SkinManager.TextureCache](#skinmanager.texturecache)
- [SkinManager.TextureInfo](#skinmanager.textureinfo)
- [SplashManager](#splashmanager)
- [TextureAtlasHolder](#textureatlasholder)
## Class PlayerSkin.Model

*enum* `net.minecraft.client.resources.Class PlayerSkin.Model`

Enclosing class: PlayerSkin

### Fields
- `private final String id`

### Methods
- `public static PlayerSkin.Model[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static PlayerSkin.Model valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static PlayerSkin.Model byName(@Nullable  String p_299354_)`
- `public String id()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ClientPackSource

*class* `net.minecraft.client.resources.ClientPackSource`

### Fields
- `private static final PackMetadataSection VERSION_METADATA_SECTION`
- `private static final BuiltInMetadata BUILT_IN_METADATA`
- `private static final Component VANILLA_NAME`
- `public static final String HIGH_CONTRAST_PACK` (= "high_contrast")
- `private static final Map<String,Component> SPECIAL_PACK_NAMES`
- `private static final ResourceLocation PACKS_DIR`
- `@Nullable private final Path externalAssetDir`

### Inherited fields
- from `net.minecraft.server.packs.repository.BuiltInPackSource`: `VANILLA_ID`

### Methods
- `@Nullable private Path findExplodedAssetPacks(Path p_251339_)`
- `public static VanillaPackResources createVanillaPackSource(Path p_250749_)`
- `protected Component getPackTitle(String p_250421_)`
- `@Nullable protected Pack createVanillaPack(PackResources p_250048_)`
- `@Nullable protected Pack createBuiltinPack(String p_250992_,  Pack.ResourcesSupplier p_250814_,  Component p_249835_)`
- `protected void populatePackList(BiConsumer<String,Function<String,Pack>> p_249851_)`

### Inherited methods
- from `net.minecraft.server.packs.repository.BuiltInPackSource`: `discoverPacksInPath`, `fixedResources`, `getVanillaPack`, `loadPacks`

## DefaultPlayerSkin

*class* `net.minecraft.client.resources.DefaultPlayerSkin`

### Fields
- `private static final PlayerSkin[] DEFAULT_SKINS`

### Methods
- `public static ResourceLocation getDefaultTexture()`
- `public static PlayerSkin get(UUID p_297375_)`
- `public static PlayerSkin get(com.mojang.authlib.GameProfile p_298897_)`
- `private static PlayerSkin create(String p_298713_,  PlayerSkin.Model p_297716_)`

## DownloadedPackSource

*class* `net.minecraft.client.resources.DownloadedPackSource`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Pattern SHA1`
- `private static final int MAX_PACK_SIZE_BYTES` (= 262144000)
- `private static final int MAX_KEPT_PACKS` (= 10)
- `private static final String SERVER_ID` (= "server")
- `private static final Component SERVER_NAME`
- `private static final Component APPLYING_PACK_TEXT`
- `private final File serverPackDir`
- `private final ReentrantLock downloadLock`
- `@Nullable private CompletableFuture<?> currentDownload`
- `@Nullable private Pack serverPack`

### Methods
- `public void loadPacks(Consumer<Pack> p_251994_)`
- `private static Map<String,String> getDownloadHeaders()`
- `public CompletableFuture<?> downloadAndSelectResourcePack(URL p_249839_,  String p_249218_,  boolean p_251033_)`
- `private static void deleteQuietly(File p_251727_)`
- `public CompletableFuture<Void> clearServerPack()`
- `private boolean checkHash(String p_251365_,  File p_249356_)`
- `private void clearOldDownloads()`
- `public CompletableFuture<Void> setServerPack(File p_249885_,  PackSource p_251105_)`
- `public CompletableFuture<Void> loadBundledResourcePack(LevelStorageSource.LevelStorageAccess p_248756_)`

## FoliageColorReloadListener

*class* `net.minecraft.client.resources.FoliageColorReloadListener`

### Fields
- `private static final ResourceLocation LOCATION`

### Methods
- `protected int[] prepare(ResourceManager p_118660_,  ProfilerFiller p_118661_)`
- `protected void apply(int[] p_118667_,  ResourceManager p_118668_,  ProfilerFiller p_118669_)`

### Inherited methods
- from `net.minecraft.server.packs.resources.SimplePreparableReloadListener`: `reload`
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## GrassColorReloadListener

*class* `net.minecraft.client.resources.GrassColorReloadListener`

### Fields
- `private static final ResourceLocation LOCATION`

### Methods
- `protected int[] prepare(ResourceManager p_118677_,  ProfilerFiller p_118678_)`
- `protected void apply(int[] p_118684_,  ResourceManager p_118685_,  ProfilerFiller p_118686_)`

### Inherited methods
- from `net.minecraft.server.packs.resources.SimplePreparableReloadListener`: `reload`
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## IndexedAssetSource

*class* `net.minecraft.client.resources.IndexedAssetSource`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final com.google.common.base.Splitter PATH_SPLITTER`

### Methods
- `public static Path createIndexFs(Path p_248776_,  String p_250235_)`

## LegacyStuffWrapper

*class* `net.minecraft.client.resources.LegacyStuffWrapper`

### Methods
- `@Deprecated public static int[] getPixels(ResourceManager p_118727_,  ResourceLocation p_118728_)  throws IOException` (deprecated)
  - throws: IOException

## MobEffectTextureManager

*class* `net.minecraft.client.resources.MobEffectTextureManager`

### Inherited fields
- from `net.minecraft.client.resources.TextureAtlasHolder`: `textureAtlas`

### Methods
- `public TextureAtlasSprite get(MobEffect p_118733_)`

### Inherited methods
- from `net.minecraft.client.resources.TextureAtlasHolder`: `close`, `getSprite`, `reload`
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## PaintingTextureManager

*class* `net.minecraft.client.resources.PaintingTextureManager`

### Fields
- `private static final ResourceLocation BACK_SPRITE_LOCATION`

### Inherited fields
- from `net.minecraft.client.resources.TextureAtlasHolder`: `textureAtlas`

### Methods
- `public TextureAtlasSprite get(PaintingVariant p_235034_)`
- `public TextureAtlasSprite getBackSprite()`

### Inherited methods
- from `net.minecraft.client.resources.TextureAtlasHolder`: `close`, `getSprite`, `reload`
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## PlayerSkin

*record* `net.minecraft.client.resources.PlayerSkin`

### Fields
- `private final ResourceLocation texture`
  The field for the texture record component.
- `@Nullable private final String textureUrl`
  The field for the textureUrl record component.
- `@Nullable private final ResourceLocation capeTexture`
  The field for the capeTexture record component.
- `@Nullable private final ResourceLocation elytraTexture`
  The field for the elytraTexture record component.
- `private final PlayerSkin.Model model`
  The field for the model record component.
- `private final boolean secure`
  The field for the secure record component.

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
- `public ResourceLocation texture()`
  Returns the value of the texture record component.
  - returns: the value of the texture record component
- `@Nullable public String textureUrl()`
  Returns the value of the textureUrl record component.
  - returns: the value of the textureUrl record component
- `@Nullable public ResourceLocation capeTexture()`
  Returns the value of the capeTexture record component.
  - returns: the value of the capeTexture record component
- `@Nullable public ResourceLocation elytraTexture()`
  Returns the value of the elytraTexture record component.
  - returns: the value of the elytraTexture record component
- `public PlayerSkin.Model model()`
  Returns the value of the model record component.
  - returns: the value of the model record component
- `public boolean secure()`
  Returns the value of the secure record component.
  - returns: the value of the secure record component

## SkinManager

*class* `net.minecraft.client.resources.SkinManager`

### Fields
- `private static final String PROPERTY_TEXTURES` (= "textures")
- `private final com.google.common.cache.LoadingCache<SkinManager.CacheKey,CompletableFuture<PlayerSkin>> skinCache`
- `private final SkinManager.TextureCache skinTextures`
- `private final SkinManager.TextureCache capeTextures`
- `private final SkinManager.TextureCache elytraTextures`

### Methods
- `public Supplier<PlayerSkin> lookupInsecure(com.mojang.authlib.GameProfile p_298295_)`
- `public PlayerSkin getInsecureSkin(com.mojang.authlib.GameProfile p_298019_)`
- `public CompletableFuture<PlayerSkin> getOrLoad(com.mojang.authlib.GameProfile p_298661_)`
- `CompletableFuture<PlayerSkin> registerTextures(com.mojang.authlib.GameProfile p_299268_,  SkinManager.TextureInfo p_298597_)`
- `@Nullable static com.mojang.authlib.properties.Property getTextureProperty(com.mojang.authlib.GameProfile p_300071_)`

## SkinManager.CacheKey

*record* `net.minecraft.client.resources.SkinManager.CacheKey`

Enclosing class: SkinManager

### Fields
- `private final com.mojang.authlib.GameProfile profile`
  The field for the profile record component.

### Methods
- `public boolean equals(Object p_299382_)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: p_299382_ - the object with which to compare
  - returns: true if this object is the same as the p_299382_ argument; false otherwise.
- `public int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `@Nullable private String texturesData()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public com.mojang.authlib.GameProfile profile()`
  Returns the value of the profile record component.
  - returns: the value of the profile record component

## SkinManager.TextureCache

*class* `net.minecraft.client.resources.SkinManager.TextureCache`

Enclosing class: SkinManager

### Fields
- `private final TextureManager textureManager`
- `private final Path root`
- `private final com.mojang.authlib.minecraft.MinecraftProfileTexture.Type type`
- `private final Map<String,CompletableFuture<ResourceLocation>> textures`

### Methods
- `public CompletableFuture<ResourceLocation> getOrLoad(com.mojang.authlib.minecraft.MinecraftProfileTexture p_300959_)`
- `private CompletableFuture<ResourceLocation> registerTexture(com.mojang.authlib.minecraft.MinecraftProfileTexture p_300607_)`
- `private ResourceLocation getTextureLocation(String p_297392_)`

## SkinManager.TextureInfo

*record* `net.minecraft.client.resources.SkinManager.TextureInfo`

Enclosing class: SkinManager

### Fields
- `@Nullable private final com.mojang.authlib.minecraft.MinecraftProfileTexture skin`
  The field for the skin record component.
- `@Nullable private final com.mojang.authlib.minecraft.MinecraftProfileTexture cape`
  The field for the cape record component.
- `@Nullable private final com.mojang.authlib.minecraft.MinecraftProfileTexture elytra`
  The field for the elytra record component.
- `private final boolean secure`
  The field for the secure record component.
- `public static final SkinManager.TextureInfo EMPTY`

### Methods
- `public static SkinManager.TextureInfo unpack(Map<com.mojang.authlib.minecraft.MinecraftProfileTexture.Type,com.mojang.authlib.minecraft.MinecraftProfileTexture> p_297479_,  boolean p_297713_)`
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
- `@Nullable public com.mojang.authlib.minecraft.MinecraftProfileTexture skin()`
  Returns the value of the skin record component.
  - returns: the value of the skin record component
- `@Nullable public com.mojang.authlib.minecraft.MinecraftProfileTexture cape()`
  Returns the value of the cape record component.
  - returns: the value of the cape record component
- `@Nullable public com.mojang.authlib.minecraft.MinecraftProfileTexture elytra()`
  Returns the value of the elytra record component.
  - returns: the value of the elytra record component
- `public boolean secure()`
  Returns the value of the secure record component.
  - returns: the value of the secure record component

## SplashManager

*class* `net.minecraft.client.resources.SplashManager`

### Fields
- `private static final ResourceLocation SPLASHES_LOCATION`
- `private static final RandomSource RANDOM`
- `private final List<String> splashes`
- `private final User user`

### Methods
- `protected List<String> prepare(ResourceManager p_118869_,  ProfilerFiller p_118870_)`
- `protected void apply(List<String> p_118878_,  ResourceManager p_118879_,  ProfilerFiller p_118880_)`
- `@Nullable public SplashRenderer getSplash()`

### Inherited methods
- from `net.minecraft.server.packs.resources.SimplePreparableReloadListener`: `reload`
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## TextureAtlasHolder

*class* `net.minecraft.client.resources.TextureAtlasHolder`

### Fields
- `protected final TextureAtlas textureAtlas`
- `private final ResourceLocation atlasInfoLocation`
- `private final Set<MetadataSectionSerializer<?>> metadataSections`

### Methods
- `protected TextureAtlasSprite getSprite(ResourceLocation p_118902_)`
- `public final CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier p_249641_,  ResourceManager p_250036_,  ProfilerFiller p_249806_,  ProfilerFiller p_250732_,  Executor p_249427_,  Executor p_250510_)`
- `private void apply(SpriteLoader.Preparations p_252333_,  ProfilerFiller p_250624_)`
- `public void close()`

### Inherited methods
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`
