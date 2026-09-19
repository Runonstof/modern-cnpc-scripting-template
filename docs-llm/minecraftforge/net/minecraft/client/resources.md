# net.minecraft.client.resources

- [AbstractResourcePack](#abstractresourcepack)
- [DefaultPlayerSkin](#defaultplayerskin)
- [DefaultResourcePack](#defaultresourcepack)
- [FallbackResourceManager](#fallbackresourcemanager)
- [FileResourcePack](#fileresourcepack)
- [FolderResourcePack](#folderresourcepack)
- [FoliageColorReloadListener](#foliagecolorreloadlistener)
- [GrassColorReloadListener](#grasscolorreloadlistener)
- [I18n](#i18n)
- [IReloadableResourceManager](#ireloadableresourcemanager)
- [IResource](#iresource)
- [IResourceManager](#iresourcemanager)
- [IResourceManagerReloadListener](#iresourcemanagerreloadlistener)
- [IResourcePack](#iresourcepack)
- [Language](#language)
- [LanguageManager](#languagemanager)
- [LegacyV2Adapter](#legacyv2adapter)
- [Locale](#locale)
- [ResourceIndex](#resourceindex)
- [ResourceIndexFolder](#resourceindexfolder)
- [ResourcePackFileNotFoundException](#resourcepackfilenotfoundexception)
- [ResourcePackListEntry](#resourcepacklistentry)
- [ResourcePackListEntryDefault](#resourcepacklistentrydefault)
- [ResourcePackListEntryFound](#resourcepacklistentryfound)
- [ResourcePackListEntryServer](#resourcepacklistentryserver)
- [ResourcePackRepository](#resourcepackrepository)
- [ResourcePackRepository.Entry](#resourcepackrepository.entry)
- [SimpleReloadableResourceManager](#simplereloadableresourcemanager)
- [SimpleResource](#simpleresource)
- [SkinManager](#skinmanager)
- [SkinManager.SkinAvailableCallback](#skinmanager.skinavailablecallback)
## AbstractResourcePack

*class* `net.minecraft.client.resources.AbstractResourcePack`

All Implemented Interfaces: IResourcePack

### Fields
- `protected final java.io.File resourcePackFile`

### Methods
- `protected static java.lang.String getRelativeName(java.io.File p_110595_0_,  java.io.File p_110595_1_)`
- `public java.io.InputStream getInputStream(ResourceLocation location)  throws java.io.IOException`
  - throws: java.io.IOException
- `public boolean resourceExists(ResourceLocation location)`
- `protected abstract java.io.InputStream getInputStreamByName(java.lang.String name)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected abstract boolean hasResourceName(java.lang.String name)`
- `protected void logNameNotLowercase(java.lang.String name)`
- `public <T extends IMetadataSection> T getPackMetadata(MetadataSerializer metadataSerializer,  java.lang.String metadataSectionName)  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.awt.image.BufferedImage getPackImage()  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.lang.String getPackName()`

### Inherited methods
- from `net.minecraft.client.resources.IResourcePack`: `getResourceDomains`

## DefaultPlayerSkin

*class* `net.minecraft.client.resources.DefaultPlayerSkin`

### Methods
- `public static ResourceLocation getDefaultSkinLegacy()`
- `public static ResourceLocation getDefaultSkin(java.util.UUID playerUUID)`
- `public static java.lang.String getSkinType(java.util.UUID playerUUID)`

## DefaultResourcePack

*class* `net.minecraft.client.resources.DefaultResourcePack`

All Implemented Interfaces: IResourcePack

### Fields
- `public static final java.util.Set<java.lang.String> DEFAULT_RESOURCE_DOMAINS`

### Methods
- `public java.io.InputStream getInputStream(ResourceLocation location)  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.io.InputStream getInputStreamAssets(ResourceLocation location)  throws java.io.IOException,  java.io.FileNotFoundException`
  - throws: java.io.IOException
  - throws: java.io.FileNotFoundException
- `public boolean resourceExists(ResourceLocation location)`
- `public java.util.Set<java.lang.String> getResourceDomains()`
- `public <T extends IMetadataSection> T getPackMetadata(MetadataSerializer metadataSerializer,  java.lang.String metadataSectionName)  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.awt.image.BufferedImage getPackImage()  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.lang.String getPackName()`

## FallbackResourceManager

*class* `net.minecraft.client.resources.FallbackResourceManager`

All Implemented Interfaces: IResourceManager

### Fields
- `protected final java.util.List<IResourcePack> resourcePacks`

### Methods
- `public void addResourcePack(IResourcePack resourcePack)`
- `public java.util.Set<java.lang.String> getResourceDomains()`
- `public IResource getResource(ResourceLocation location)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected java.io.InputStream getInputStream(ResourceLocation location,  IResourcePack resourcePack)  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.util.List<IResource> getAllResources(ResourceLocation location)  throws java.io.IOException`
  - throws: java.io.IOException

## FileResourcePack

*class* `net.minecraft.client.resources.FileResourcePack`

All Implemented Interfaces: java.io.Closeable, java.lang.AutoCloseable, IResourcePack

### Fields
- `public static final Splitter ENTRY_NAME_SPLITTER`

### Inherited fields
- from `net.minecraft.client.resources.AbstractResourcePack`: `resourcePackFile`

### Methods
- `protected java.io.InputStream getInputStreamByName(java.lang.String name)  throws java.io.IOException`
  - throws: java.io.IOException
- `public boolean hasResourceName(java.lang.String name)`
- `public java.util.Set<java.lang.String> getResourceDomains()`
- `protected void finalize()  throws java.lang.Throwable`
  - throws: java.lang.Throwable
- `public void close()  throws java.io.IOException`
  - throws: java.io.IOException

### Inherited methods
- from `net.minecraft.client.resources.AbstractResourcePack`: `getInputStream`, `getPackImage`, `getPackMetadata`, `getPackName`, `getRelativeName`, `logNameNotLowercase`, `resourceExists`

## FolderResourcePack

*class* `net.minecraft.client.resources.FolderResourcePack`

All Implemented Interfaces: IResourcePack

### Inherited fields
- from `net.minecraft.client.resources.AbstractResourcePack`: `resourcePackFile`

### Methods
- `protected static boolean validatePath(java.io.File p_191384_0_,  java.lang.String p_191384_1_)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected java.io.InputStream getInputStreamByName(java.lang.String name)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected boolean hasResourceName(java.lang.String name)`
- `public java.util.Set<java.lang.String> getResourceDomains()`

### Inherited methods
- from `net.minecraft.client.resources.AbstractResourcePack`: `getInputStream`, `getPackImage`, `getPackMetadata`, `getPackName`, `getRelativeName`, `logNameNotLowercase`, `resourceExists`

## FoliageColorReloadListener

*class* `net.minecraft.client.resources.FoliageColorReloadListener`

All Implemented Interfaces: IResourceManagerReloadListener

### Methods
- `public void onResourceManagerReload(IResourceManager resourceManager)`

## GrassColorReloadListener

*class* `net.minecraft.client.resources.GrassColorReloadListener`

All Implemented Interfaces: IResourceManagerReloadListener

### Methods
- `public void onResourceManagerReload(IResourceManager resourceManager)`

## I18n

*class* `net.minecraft.client.resources.I18n`

### Methods
- `public static java.lang.String format(java.lang.String translateKey,  java.lang.Object... parameters)`
- `public static boolean hasKey(java.lang.String key)`

## IReloadableResourceManager

*interface* `net.minecraft.client.resources.IReloadableResourceManager`

All Superinterfaces: IResourceManager

### Methods
- `void reloadResources(java.util.List<IResourcePack> resourcesPacksList)`
- `void registerReloadListener(IResourceManagerReloadListener reloadListener)`

### Inherited methods
- from `net.minecraft.client.resources.IResourceManager`: `getAllResources`, `getResource`, `getResourceDomains`

## IResource

*interface* `net.minecraft.client.resources.IResource`

All Superinterfaces: java.lang.AutoCloseable, java.io.Closeable

### Methods
- `ResourceLocation getResourceLocation()`
- `java.io.InputStream getInputStream()`
- `boolean hasMetadata()`
- `<T extends IMetadataSection> T getMetadata(java.lang.String sectionName)`
- `java.lang.String getResourcePackName()`

### Inherited methods
- from `java.io.Closeable`: `close`

## IResourceManager

*interface* `net.minecraft.client.resources.IResourceManager`

### Methods
- `java.util.Set<java.lang.String> getResourceDomains()`
- `IResource getResource(ResourceLocation location)  throws java.io.IOException`
  - throws: java.io.IOException
- `java.util.List<IResource> getAllResources(ResourceLocation location)  throws java.io.IOException`
  - throws: java.io.IOException

## IResourceManagerReloadListener

*interface* `net.minecraft.client.resources.IResourceManagerReloadListener`

Deprecated.
Forge: ISelectiveResourceReloadListener, which selectively allows
 individual resource types being reloaded should rather be used where possible.

### Methods
- `void onResourceManagerReload(IResourceManager resourceManager)` (deprecated)
  Deprecated.

## IResourcePack

*interface* `net.minecraft.client.resources.IResourcePack`

### Methods
- `java.io.InputStream getInputStream(ResourceLocation location)  throws java.io.IOException`
  - throws: java.io.IOException
- `boolean resourceExists(ResourceLocation location)`
- `java.util.Set<java.lang.String> getResourceDomains()`
- `<T extends IMetadataSection> T getPackMetadata(MetadataSerializer metadataSerializer,  java.lang.String metadataSectionName)  throws java.io.IOException`
  - throws: java.io.IOException
- `java.awt.image.BufferedImage getPackImage()  throws java.io.IOException`
  - throws: java.io.IOException
- `java.lang.String getPackName()`

## Language

*class* `net.minecraft.client.resources.Language`

All Implemented Interfaces: java.lang.Comparable<Language>

### Methods
- `public java.lang.String getLanguageCode()`
- `public boolean isBidirectional()`
- `public java.lang.String toString()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public int compareTo(Language p_compareTo_1_)`
- `public java.util.Locale getJavaLocale()`

## LanguageManager

*class* `net.minecraft.client.resources.LanguageManager`

All Implemented Interfaces: IResourceManagerReloadListener

### Fields
- `protected static final Locale CURRENT_LOCALE`

### Methods
- `public void parseLanguageMetadata(java.util.List<IResourcePack> resourcesPacks)`
- `public void onResourceManagerReload(IResourceManager resourceManager)`
- `public boolean isCurrentLocaleUnicode()`
- `public boolean isCurrentLanguageBidirectional()`
- `public void setCurrentLanguage(Language currentLanguageIn)`
- `public Language getCurrentLanguage()`
- `public java.util.SortedSet<Language> getLanguages()`
- `public Language getLanguage(java.lang.String p_191960_1_)`

## LegacyV2Adapter

*class* `net.minecraft.client.resources.LegacyV2Adapter`

All Implemented Interfaces: IResourcePack

### Methods
- `public java.io.InputStream getInputStream(ResourceLocation location)  throws java.io.IOException`
  - throws: java.io.IOException
- `public boolean resourceExists(ResourceLocation location)`
- `public java.util.Set<java.lang.String> getResourceDomains()`
- `public <T extends IMetadataSection> T getPackMetadata(MetadataSerializer metadataSerializer,  java.lang.String metadataSectionName)  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.awt.image.BufferedImage getPackImage()  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.lang.String getPackName()`

## Locale

*class* `net.minecraft.client.resources.Locale`

### Methods
- `public void loadLocaleDataFiles(IResourceManager resourceManager,  java.util.List<java.lang.String> languageList)`
- `public boolean isUnicode()`
- `public java.lang.String formatMessage(java.lang.String translateKey,  java.lang.Object[] parameters)`
- `public boolean hasKey(java.lang.String key)`

## ResourceIndex

*class* `net.minecraft.client.resources.ResourceIndex`

### Methods
- `public java.io.File getFile(ResourceLocation location)`
- `public boolean isFileExisting(ResourceLocation location)`
- `public java.io.File getPackMcmeta()`

## ResourceIndexFolder

*class* `net.minecraft.client.resources.ResourceIndexFolder`

### Methods
- `public java.io.File getFile(ResourceLocation location)`
- `public java.io.File getPackMcmeta()`

### Inherited methods
- from `net.minecraft.client.resources.ResourceIndex`: `isFileExisting`

## ResourcePackFileNotFoundException

*class* `net.minecraft.client.resources.ResourcePackFileNotFoundException`

All Implemented Interfaces: java.io.Serializable

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ResourcePackListEntry

*class* `net.minecraft.client.resources.ResourcePackListEntry`

All Implemented Interfaces: GuiListExtended.IGuiListEntry

### Fields
- `protected final Minecraft mc`
- `protected final GuiScreenResourcePacks resourcePacksGUI`

### Methods
- `public void drawEntry(int slotIndex,  int x,  int y,  int listWidth,  int slotHeight,  int mouseX,  int mouseY,  boolean isSelected,  float partialTicks)`
- `protected abstract int getResourcePackFormat()`
- `protected abstract java.lang.String getResourcePackDescription()`
- `protected abstract java.lang.String getResourcePackName()`
- `protected abstract void bindResourcePackIcon()`
- `protected boolean showHoverOverlay()`
- `protected boolean canMoveRight()`
- `protected boolean canMoveLeft()`
- `protected boolean canMoveUp()`
- `protected boolean canMoveDown()`
- `public boolean mousePressed(int slotIndex,  int mouseX,  int mouseY,  int mouseEvent,  int relativeX,  int relativeY)`
- `public void updatePosition(int slotIndex,  int x,  int y,  float partialTicks)`
- `public void mouseReleased(int slotIndex,  int x,  int y,  int mouseEvent,  int relativeX,  int relativeY)`
- `public boolean isServerPack()`

## ResourcePackListEntryDefault

*class* `net.minecraft.client.resources.ResourcePackListEntryDefault`

All Implemented Interfaces: GuiListExtended.IGuiListEntry

### Inherited fields
- from `net.minecraft.client.resources.ResourcePackListEntry`: `mc`, `resourcePacksGUI`

### Methods
- `protected java.lang.String getResourcePackName()`
- `public boolean isServerPack()`

### Inherited methods
- from `net.minecraft.client.resources.ResourcePackListEntryServer`: `bindResourcePackIcon`, `canMoveDown`, `canMoveLeft`, `canMoveRight`, `canMoveUp`, `getResourcePackDescription`, `getResourcePackFormat`, `showHoverOverlay`
- from `net.minecraft.client.resources.ResourcePackListEntry`: `drawEntry`, `mousePressed`, `mouseReleased`, `updatePosition`

## ResourcePackListEntryFound

*class* `net.minecraft.client.resources.ResourcePackListEntryFound`

All Implemented Interfaces: GuiListExtended.IGuiListEntry

### Inherited fields
- from `net.minecraft.client.resources.ResourcePackListEntry`: `mc`, `resourcePacksGUI`

### Methods
- `protected void bindResourcePackIcon()`
- `protected int getResourcePackFormat()`
- `protected java.lang.String getResourcePackDescription()`
- `protected java.lang.String getResourcePackName()`
- `public ResourcePackRepository.Entry getResourcePackEntry()`

### Inherited methods
- from `net.minecraft.client.resources.ResourcePackListEntry`: `canMoveDown`, `canMoveLeft`, `canMoveRight`, `canMoveUp`, `drawEntry`, `isServerPack`, `mousePressed`, `mouseReleased`, `showHoverOverlay`, `updatePosition`

## ResourcePackListEntryServer

*class* `net.minecraft.client.resources.ResourcePackListEntryServer`

All Implemented Interfaces: GuiListExtended.IGuiListEntry

### Inherited fields
- from `net.minecraft.client.resources.ResourcePackListEntry`: `mc`, `resourcePacksGUI`

### Methods
- `protected int getResourcePackFormat()`
- `protected java.lang.String getResourcePackDescription()`
- `protected boolean canMoveRight()`
- `protected boolean canMoveLeft()`
- `protected boolean canMoveUp()`
- `protected boolean canMoveDown()`
- `protected java.lang.String getResourcePackName()`
- `protected void bindResourcePackIcon()`
- `protected boolean showHoverOverlay()`
- `public boolean isServerPack()`

### Inherited methods
- from `net.minecraft.client.resources.ResourcePackListEntry`: `drawEntry`, `mousePressed`, `mouseReleased`, `updatePosition`

## ResourcePackRepository

*class* `net.minecraft.client.resources.ResourcePackRepository`

### Fields
- `public final IResourcePack rprDefaultResourcePack`
- `public final MetadataSerializer rprMetadataSerializer`

### Methods
- `public static java.util.Map<java.lang.String,java.lang.String> getDownloadHeaders()`
- `public void updateRepositoryEntriesAll()`
- `public ResourcePackRepository.Entry getResourcePackEntry()`
- `public java.util.List<ResourcePackRepository.Entry> getRepositoryEntriesAll()`
- `public java.util.List<ResourcePackRepository.Entry> getRepositoryEntries()`
- `public void setRepositories(java.util.List<ResourcePackRepository.Entry> repositories)`
- `public java.io.File getDirResourcepacks()`
- `public <any> downloadResourcePack(java.lang.String url,  java.lang.String hash)`
- `public <any> setServerResourcePack(java.io.File resourceFile)`
- `public IResourcePack getServerResourcePack()`
- `public void clearResourcePack()`

## ResourcePackRepository.Entry

*class* `net.minecraft.client.resources.ResourcePackRepository.Entry`

Enclosing class: ResourcePackRepository

### Methods
- `public void updateResourcePack()  throws java.io.IOException`
  - throws: java.io.IOException
- `public void bindTexturePackIcon(TextureManager textureManagerIn)`
- `public void closeResourcePack()`
- `public IResourcePack getResourcePack()`
- `public java.lang.String getResourcePackName()`
- `public java.lang.String getTexturePackDescription()`
- `public int getPackFormat()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public java.lang.String toString()`

## SimpleReloadableResourceManager

*class* `net.minecraft.client.resources.SimpleReloadableResourceManager`

All Implemented Interfaces: IReloadableResourceManager, IResourceManager

### Methods
- `public void reloadResourcePack(IResourcePack resourcePack)`
- `public java.util.Set<java.lang.String> getResourceDomains()`
- `public IResource getResource(ResourceLocation location)  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.util.List<IResource> getAllResources(ResourceLocation location)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void reloadResources(java.util.List<IResourcePack> resourcesPacksList)`
- `public void registerReloadListener(IResourceManagerReloadListener reloadListener)`

## SimpleResource

*class* `net.minecraft.client.resources.SimpleResource`

All Implemented Interfaces: java.io.Closeable, java.lang.AutoCloseable, IResource

### Methods
- `public ResourceLocation getResourceLocation()`
- `public java.io.InputStream getInputStream()`
- `public boolean hasMetadata()`
- `public <T extends IMetadataSection> T getMetadata(java.lang.String sectionName)`
- `public java.lang.String getResourcePackName()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public void close()  throws java.io.IOException`
  - throws: java.io.IOException

## SkinManager

*class* `net.minecraft.client.resources.SkinManager`

### Methods
- `public ResourceLocation loadSkin(MinecraftProfileTexture profileTexture,  Type textureType)`
- `public ResourceLocation loadSkin(MinecraftProfileTexture profileTexture,  Type textureType,  SkinManager.SkinAvailableCallback skinAvailableCallback)`
- `public void loadProfileTextures(GameProfile profile,  SkinManager.SkinAvailableCallback skinAvailableCallback,  boolean requireSecure)`
- `public java.util.Map<Type,MinecraftProfileTexture> loadSkinFromCache(GameProfile profile)`

## SkinManager.SkinAvailableCallback

*interface* `net.minecraft.client.resources.SkinManager.SkinAvailableCallback`

Enclosing class: SkinManager

### Methods
- `void skinAvailable(Type typeIn,  ResourceLocation location,  MinecraftProfileTexture profileTexture)`
