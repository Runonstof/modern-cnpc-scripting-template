# net.minecraft.client.renderer.texture

- [AbstractTexture](#abstracttexture)
- [Dumpable](#dumpable)
- [DynamicTexture](#dynamictexture)
- [HttpTexture](#httptexture)
- [MipmapGenerator](#mipmapgenerator)
- [MissingTextureAtlasSprite](#missingtextureatlassprite)
- [OverlayTexture](#overlaytexture)
- [PreloadedTexture](#preloadedtexture)
- [SimpleTexture](#simpletexture)
- [SimpleTexture.TextureImage](#simpletexture.textureimage)
- [SpriteContents](#spritecontents)
- [SpriteContents.AnimatedTexture](#spritecontents.animatedtexture)
- [SpriteContents.FrameInfo](#spritecontents.frameinfo)
- [SpriteContents.InterpolationData](#spritecontents.interpolationdata)
- [SpriteContents.Ticker](#spritecontents.ticker)
- [SpriteLoader](#spriteloader)
- [SpriteLoader.Preparations](#spriteloader.preparations)
- [SpriteTicker](#spriteticker)
- [Stitcher](#stitcher)
- [Stitcher.Entry](#stitcher.entry)
- [Stitcher.Holder](#stitcher.holder)
- [Stitcher.Region](#stitcher.region)
- [Stitcher.SpriteLoader](#stitcher.spriteloader)
- [StitcherException](#stitcherexception)
- [TextureAtlas](#textureatlas)
- [TextureAtlasSprite](#textureatlassprite)
- [TextureAtlasSprite.Ticker](#textureatlassprite.ticker)
- [TextureManager](#texturemanager)
- [Tickable](#tickable)
## AbstractTexture

*class* `net.minecraft.client.renderer.texture.AbstractTexture`

### Fields
- `public static final int NOT_ASSIGNED` (= -1)
- `protected int id`
- `protected boolean blur`
- `protected boolean mipmap`
- `private boolean lastBlur`
- `private boolean lastMipmap`

### Methods
- `public void setFilter(boolean p_117961_,  boolean p_117962_)`
- `public void setBlurMipmap(boolean blur,  boolean mipmap)`
- `public void restoreLastBlurMipmap()`
- `public int getId()`
- `public void releaseId()`
- `public abstract void load(ResourceManager p_117955_)  throws IOException`
  - throws: IOException
- `public void bind()`
- `public void reset(TextureManager p_117956_,  ResourceManager p_117957_,  ResourceLocation p_117958_,  Executor p_117959_)`
- `public void close()`

## Dumpable

*interface* `net.minecraft.client.renderer.texture.Dumpable`

### Methods
- `void dumpContents(ResourceLocation p_276124_,  Path p_276123_)  throws IOException`
  - throws: IOException

## DynamicTexture

*class* `net.minecraft.client.renderer.texture.DynamicTexture`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `@Nullable private NativeImage pixels`

### Inherited fields
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `blur`, `id`, `mipmap`, `NOT_ASSIGNED`

### Methods
- `public void load(ResourceManager p_117987_)`
- `public void upload()`
- `@Nullable public NativeImage getPixels()`
- `public void setPixels(NativeImage p_117989_)`
- `public void close()`
- `public void dumpContents(ResourceLocation p_276119_,  Path p_276105_)  throws IOException`
  - throws: IOException

### Inherited methods
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `bind`, `getId`, `releaseId`, `reset`, `restoreLastBlurMipmap`, `setBlurMipmap`, `setFilter`

## HttpTexture

*class* `net.minecraft.client.renderer.texture.HttpTexture`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int SKIN_WIDTH` (= 64)
- `private static final int SKIN_HEIGHT` (= 64)
- `private static final int LEGACY_SKIN_HEIGHT` (= 32)
- `@Nullable private final File file`
- `private final String urlString`
- `private final boolean processLegacySkin`
- `@Nullable private final Runnable onDownloaded`
- `@Nullable private CompletableFuture<?> future`
- `private boolean uploaded`

### Inherited fields
- from `net.minecraft.client.renderer.texture.SimpleTexture`: `location`
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `blur`, `id`, `mipmap`, `NOT_ASSIGNED`

### Methods
- `private void loadCallback(NativeImage p_118011_)`
- `private void upload(NativeImage p_118021_)`
- `public void load(ResourceManager p_118009_)  throws IOException`
  - throws: IOException
- `@Nullable private NativeImage load(InputStream p_118019_)`
- `@Nullable private NativeImage processLegacySkin(NativeImage p_118033_)`
- `private static void doNotchTransparencyHack(NativeImage p_118013_,  int p_118014_,  int p_118015_,  int p_118016_,  int p_118017_)`
- `private static void setNoAlpha(NativeImage p_118023_,  int p_118024_,  int p_118025_,  int p_118026_,  int p_118027_)`

### Inherited methods
- from `net.minecraft.client.renderer.texture.SimpleTexture`: `getTextureImage`
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `bind`, `close`, `getId`, `releaseId`, `reset`, `restoreLastBlurMipmap`, `setBlurMipmap`, `setFilter`

## MipmapGenerator

*class* `net.minecraft.client.renderer.texture.MipmapGenerator`

### Fields
- `private static final int ALPHA_CUTOUT_CUTOFF` (= 96)
- `private static final float[] POW22`

### Methods
- `public static NativeImage[] generateMipLevels(NativeImage[] p_251300_,  int p_252326_)`
- `private static boolean hasTransparentPixel(NativeImage p_252279_)`
- `private static int alphaBlend(int p_118049_,  int p_118050_,  int p_118051_,  int p_118052_,  boolean p_118053_)`
- `private static int gammaBlend(int p_118043_,  int p_118044_,  int p_118045_,  int p_118046_,  int p_118047_)`
- `private static float getPow22(int p_118041_)`

## MissingTextureAtlasSprite

*class* `net.minecraft.client.renderer.texture.MissingTextureAtlasSprite`

### Fields
- `private static final int MISSING_IMAGE_WIDTH` (= 16)
- `private static final int MISSING_IMAGE_HEIGHT` (= 16)
- `private static final String MISSING_TEXTURE_NAME` (= "missingno")
- `private static final ResourceLocation MISSING_TEXTURE_LOCATION`
- `private static final ResourceMetadata SPRITE_METADATA`
- `@Nullable private static DynamicTexture missingTexture`

### Methods
- `private static NativeImage generateMissingImage(int p_249811_,  int p_249362_)`
- `public static SpriteContents create()`
- `public static ResourceLocation getLocation()`
- `public static DynamicTexture getTexture()`

## OverlayTexture

*class* `net.minecraft.client.renderer.texture.OverlayTexture`

### Fields
- `private static final int SIZE` (= 16)
- `public static final int NO_WHITE_U` (= 0)
- `public static final int RED_OVERLAY_V` (= 3)
- `public static final int WHITE_OVERLAY_V` (= 10)
- `public static final int NO_OVERLAY`
- `private final DynamicTexture texture`

### Methods
- `public void close()`
- `public void setupOverlayColor()`
- `public static int u(float p_118089_)`
- `public static int v(boolean p_118097_)`
- `public static int pack(int p_118094_,  int p_118095_)`
- `public static int pack(float p_118091_,  boolean p_118092_)`
- `public void teardownOverlayColor()`

## PreloadedTexture

*class* `net.minecraft.client.renderer.texture.PreloadedTexture`

### Fields
- `@Nullable private CompletableFuture<SimpleTexture.TextureImage> future`

### Inherited fields
- from `net.minecraft.client.renderer.texture.SimpleTexture`: `location`, `LOGGER`
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `blur`, `id`, `mipmap`, `NOT_ASSIGNED`

### Methods
- `protected SimpleTexture.TextureImage getTextureImage(ResourceManager p_118126_)`
- `public CompletableFuture<Void> getFuture()`
- `public void reset(TextureManager p_118114_,  ResourceManager p_118115_,  ResourceLocation p_118116_,  Executor p_118117_)`
- `private static Executor executor(Executor p_118121_)`

### Inherited methods
- from `net.minecraft.client.renderer.texture.SimpleTexture`: `load`
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `bind`, `close`, `getId`, `releaseId`, `restoreLastBlurMipmap`, `setBlurMipmap`, `setFilter`

## SimpleTexture

*class* `net.minecraft.client.renderer.texture.SimpleTexture`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `protected final ResourceLocation location`

### Inherited fields
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `blur`, `id`, `mipmap`, `NOT_ASSIGNED`

### Methods
- `public void load(ResourceManager p_118135_)  throws IOException`
  - throws: IOException
- `private void doLoad(NativeImage p_118137_,  boolean p_118138_,  boolean p_118139_)`
- `protected SimpleTexture.TextureImage getTextureImage(ResourceManager p_118140_)`

### Inherited methods
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `bind`, `close`, `getId`, `releaseId`, `reset`, `restoreLastBlurMipmap`, `setBlurMipmap`, `setFilter`

## SimpleTexture.TextureImage

*class* `net.minecraft.client.renderer.texture.SimpleTexture.TextureImage`

Enclosing class: SimpleTexture

### Fields
- `@Nullable private final TextureMetadataSection metadata`
- `@Nullable private final NativeImage image`
- `@Nullable private final IOException exception`

### Methods
- `public static SimpleTexture.TextureImage load(ResourceManager p_118156_,  ResourceLocation p_118157_)`
- `@Nullable public TextureMetadataSection getTextureMetadata()`
- `public NativeImage getImage()  throws IOException`
  - throws: IOException
- `public void close()`
- `public void throwIfError()  throws IOException`
  - throws: IOException

## SpriteContents

*class* `net.minecraft.client.renderer.texture.SpriteContents`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final ResourceLocation name`
- `final int width`
- `final int height`
- `private final NativeImage originalImage`
- `public NativeImage[] byMipLevel`
- `@Nullable final SpriteContents.AnimatedTexture animatedTexture`
- `private final ResourceMetadata metadata`
- `@Nullable public final ForgeTextureMetadata forgeMeta`

### Methods
- `public void increaseMipLevel(int p_248864_)`
- `int getFrameCount()`
- `@Nullable private SpriteContents.AnimatedTexture createAnimatedTexture(FrameSize p_250817_,  int p_249792_,  int p_252353_,  AnimationMetadataSection p_250947_)`
- `void upload(int p_248895_,  int p_250245_,  int p_250458_,  int p_251337_,  NativeImage[] p_248825_)`
- `public int width()`
- `public int height()`
- `public ResourceLocation name()`
- `public NativeImage getOriginalImage()`
- `public IntStream getUniqueFrames()`
- `@Nullable public SpriteTicker createTicker()`
- `public ResourceMetadata metadata()`
- `public void close()`
- `public String toString()`
- `public boolean isTransparent(int p_250374_,  int p_250934_,  int p_249573_)`
- `public void uploadFirstFrame(int p_252315_,  int p_248634_)`

## SpriteContents.AnimatedTexture

*class* `net.minecraft.client.renderer.texture.SpriteContents.AnimatedTexture`

Enclosing class: SpriteContents

### Fields
- `final List<SpriteContents.FrameInfo> frames`
- `private final int frameRowSize`
- `private final boolean interpolateFrames`

### Methods
- `int getFrameX(int p_249475_)`
- `int getFrameY(int p_251327_)`
- `void uploadFrame(int p_250449_,  int p_248877_,  int p_249060_)`
- `public SpriteTicker createTicker()`
- `public void uploadFirstFrame(int p_251807_,  int p_248676_)`
- `public IntStream getUniqueFrames()`

## SpriteContents.FrameInfo

*class* `net.minecraft.client.renderer.texture.SpriteContents.FrameInfo`

Enclosing class: SpriteContents

### Fields
- `final int index`
- `final int time`

## SpriteContents.InterpolationData

*class* `net.minecraft.client.renderer.texture.SpriteContents.InterpolationData`

Enclosing class: SpriteContents

### Fields
- `private final NativeImage[] activeFrame`

### Methods
- `void uploadInterpolatedFrame(int p_250513_,  int p_251644_,  SpriteContents.Ticker p_248626_)`
- `private int getPixel(SpriteContents.AnimatedTexture p_251976_,  int p_250761_,  int p_250049_,  int p_250004_,  int p_251489_)`
- `private int mix(double p_250974_,  int p_252151_,  int p_249832_)`
- `public void close()`

## SpriteContents.Ticker

*class* `net.minecraft.client.renderer.texture.SpriteContents.Ticker`

Enclosing class: SpriteContents

### Fields
- `int frame`
- `int subFrame`
- `final SpriteContents.AnimatedTexture animationInfo`
- `@Nullable private final SpriteContents.InterpolationData interpolationData`

### Methods
- `public void tickAndUpload(int p_249105_,  int p_249676_)`
- `public void close()`

## SpriteLoader

*class* `net.minecraft.client.renderer.texture.SpriteLoader`

### Fields
- `public static final Set<MetadataSectionSerializer<?>> DEFAULT_METADATA_SECTIONS`
- `private static final org.slf4j.Logger LOGGER`
- `private final ResourceLocation location`
- `private final int maxSupportedTextureSize`
- `private final int minWidth`
- `private final int minHeight`

### Methods
- `public static SpriteLoader create(TextureAtlas p_249085_)`
- `public SpriteLoader.Preparations stitch(List<SpriteContents> p_262029_,  int p_261919_,  Executor p_261665_)`
- `public static CompletableFuture<List<SpriteContents>> runSpriteSuppliers(SpriteResourceLoader p_297457_,  List<Function<SpriteResourceLoader,SpriteContents>> p_261516_,  Executor p_261791_)`
- `public CompletableFuture<SpriteLoader.Preparations> loadAndStitch(ResourceManager p_262108_,  ResourceLocation p_261754_,  int p_262104_,  Executor p_261687_)`
- `public CompletableFuture<SpriteLoader.Preparations> loadAndStitch(ResourceManager p_300124_,  ResourceLocation p_301196_,  int p_300787_,  Executor p_300950_,  Collection<MetadataSectionSerializer<?>> p_298047_)`
- `private Map<ResourceLocation,TextureAtlasSprite> getStitchedSprites(Stitcher<SpriteContents> p_276117_,  int p_276111_,  int p_276112_)`

## SpriteLoader.Preparations

*record* `net.minecraft.client.renderer.texture.SpriteLoader.Preparations`

Enclosing class: SpriteLoader

### Fields
- `private final int width`
  The field for the width record component.
- `private final int height`
  The field for the height record component.
- `private final int mipLevel`
  The field for the mipLevel record component.
- `private final TextureAtlasSprite missing`
  The field for the missing record component.
- `private final Map<ResourceLocation,TextureAtlasSprite> regions`
  The field for the regions record component.
- `private final CompletableFuture<Void> readyForUpload`
  The field for the readyForUpload record component.

### Methods
- `public CompletableFuture<SpriteLoader.Preparations> waitForUpload()`
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
- `public int width()`
  Returns the value of the width record component.
  - returns: the value of the width record component
- `public int height()`
  Returns the value of the height record component.
  - returns: the value of the height record component
- `public int mipLevel()`
  Returns the value of the mipLevel record component.
  - returns: the value of the mipLevel record component
- `public TextureAtlasSprite missing()`
  Returns the value of the missing record component.
  - returns: the value of the missing record component
- `public Map<ResourceLocation,TextureAtlasSprite> regions()`
  Returns the value of the regions record component.
  - returns: the value of the regions record component
- `public CompletableFuture<Void> readyForUpload()`
  Returns the value of the readyForUpload record component.
  - returns: the value of the readyForUpload record component

## SpriteTicker

*interface* `net.minecraft.client.renderer.texture.SpriteTicker`

All Superinterfaces: AutoCloseable

### Methods
- `void tickAndUpload(int p_248847_,  int p_250486_)`
- `void close()`

## Stitcher

*class* `net.minecraft.client.renderer.texture.Stitcher`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Comparator<Stitcher.Holder<?>> HOLDER_COMPARATOR`
- `private final int mipLevel`
- `private final List<Stitcher.Holder<T extends Stitcher.Entry>> texturesToBeStitched`
- `private final List<Stitcher.Region<T extends Stitcher.Entry>> storage`
- `private int storageX`
- `private int storageY`
- `private final int maxWidth`
- `private final int maxHeight`

### Methods
- `public int getWidth()`
- `public int getHeight()`
- `public void registerSprite(T p_249253_)`
- `public void stitch()`
- `public void gatherSprites(Stitcher.SpriteLoader<T> p_118181_)`
- `static int smallestFittingMinTexel(int p_118189_,  int p_118190_)`
- `private boolean addToStorage(Stitcher.Holder<T> p_118179_)`
- `private boolean expand(Stitcher.Holder<T> p_118192_)`

## Stitcher.Entry

*interface* `net.minecraft.client.renderer.texture.Stitcher.Entry`

Enclosing class: Stitcher<T extends Stitcher.Entry>

### Methods
- `int width()`
- `int height()`
- `ResourceLocation name()`

## Stitcher.Holder

*record* `net.minecraft.client.renderer.texture.Stitcher.Holder`

Enclosing class: Stitcher<T extends Stitcher.Entry>

### Fields
- `private final T extends Stitcher.Entry entry`
  The field for the entry record component.
- `private final int width`
  The field for the width record component.
- `private final int height`
  The field for the height record component.

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
- `public T entry()`
  Returns the value of the entry record component.
  - returns: the value of the entry record component
- `public int width()`
  Returns the value of the width record component.
  - returns: the value of the width record component
- `public int height()`
  Returns the value of the height record component.
  - returns: the value of the height record component

## Stitcher.Region

*class* `net.minecraft.client.renderer.texture.Stitcher.Region`

Enclosing class: Stitcher<T extends Stitcher.Entry>

### Fields
- `private final int originX`
- `private final int originY`
- `private final int width`
- `private final int height`
- `@Nullable private List<Stitcher.Region<T extends Stitcher.Entry>> subSlots`
- `@Nullable private Stitcher.Holder<T extends Stitcher.Entry> holder`

### Methods
- `public int getX()`
- `public int getY()`
- `public boolean add(Stitcher.Holder<T> p_118222_)`
- `public void walk(Stitcher.SpriteLoader<T> p_250195_)`
- `public String toString()`

## Stitcher.SpriteLoader

*interface* `net.minecraft.client.renderer.texture.Stitcher.SpriteLoader`

Enclosing class: Stitcher<T extends Stitcher.Entry>

### Methods
- `void load(T p_249434_,  int p_118230_,  int p_118231_)`

## StitcherException

*class* `net.minecraft.client.renderer.texture.StitcherException`

### Fields
- `private final Collection<Stitcher.Entry> allSprites`

### Methods
- `public Collection<Stitcher.Entry> getAllSprites()`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## TextureAtlas

*class* `net.minecraft.client.renderer.texture.TextureAtlas`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `@Deprecated public static final ResourceLocation LOCATION_BLOCKS` (deprecated)
- `@Deprecated public static final ResourceLocation LOCATION_PARTICLES` (deprecated)
- `private List<SpriteContents> sprites`
- `private List<TextureAtlasSprite.Ticker> animatedTextures`
- `private Map<ResourceLocation,TextureAtlasSprite> texturesByName`
- `@Nullable private TextureAtlasSprite missingSprite`
- `private final ResourceLocation location`
- `private final int maxSupportedTextureSize`
- `private int width`
- `private int height`
- `private int mipLevel`

### Inherited fields
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `blur`, `id`, `mipmap`, `NOT_ASSIGNED`

### Methods
- `public void load(ResourceManager p_118282_)`
- `public void upload(SpriteLoader.Preparations p_250662_)`
- `public void dumpContents(ResourceLocation p_276106_,  Path p_276127_)  throws IOException`
  - throws: IOException
- `private static void dumpSpriteNames(Path p_261769_,  String p_262102_,  Map<ResourceLocation,TextureAtlasSprite> p_261722_)`
- `public void cycleAnimationFrames()`
- `public void tick()`
- `public TextureAtlasSprite getSprite(ResourceLocation p_118317_)`
- `public void clearTextureData()`
- `public ResourceLocation location()`
- `public int maxSupportedTextureSize()`
- `int getWidth()`
- `int getHeight()`
- `public void updateFilter(SpriteLoader.Preparations p_251993_)`
- `public Set<ResourceLocation> getTextureLocations()`
  Returns the set of sprites in this atlas..
  - returns: the set of sprites in this atlas.

### Inherited methods
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `bind`, `close`, `getId`, `releaseId`, `reset`, `restoreLastBlurMipmap`, `setBlurMipmap`, `setFilter`

## TextureAtlasSprite

*class* `net.minecraft.client.renderer.texture.TextureAtlasSprite`

### Fields
- `private final ResourceLocation atlasLocation`
- `private final SpriteContents contents`
- `final int x`
- `final int y`
- `private final float u0`
- `private final float u1`
- `private final float v0`
- `private final float v1`

### Methods
- `public int getX()`
- `public int getY()`
- `public float getU0()`
- `public float getU1()`
- `public SpriteContents contents()`
- `@Nullable public TextureAtlasSprite.Ticker createTicker()`
- `public float getU(float p_298825_)`
- `public float getUOffset(float p_174728_)`
- `public float getV0()`
- `public float getV1()`
- `public float getV(float p_299087_)`
- `public float getVOffset(float p_174742_)`
- `public ResourceLocation atlasLocation()`
- `public String toString()`
- `public void uploadFirstFrame()`
- `private float atlasSize()`
- `public float uvShrinkRatio()`
- `public VertexConsumer wrap(VertexConsumer p_118382_)`
- `public int getPixelRGBA(int frameIndex,  int x,  int y)`

## TextureAtlasSprite.Ticker

*interface* `net.minecraft.client.renderer.texture.TextureAtlasSprite.Ticker`

All Superinterfaces: AutoCloseable

Enclosing class: TextureAtlasSprite

### Methods
- `void tickAndUpload()`
- `void close()`

## TextureManager

*class* `net.minecraft.client.renderer.texture.TextureManager`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final ResourceLocation INTENTIONAL_MISSING_TEXTURE`
- `private final Map<ResourceLocation,AbstractTexture> byPath`
- `private final Set<Tickable> tickableTextures`
- `private final Map<String,Integer> prefixRegister`
- `private final ResourceManager resourceManager`

### Methods
- `public void bindForSetup(ResourceLocation p_174785_)`
- `private void _bind(ResourceLocation p_118520_)`
- `public void register(ResourceLocation p_118496_,  AbstractTexture p_118497_)`
- `private void safeClose(ResourceLocation p_118509_,  AbstractTexture p_118510_)`
- `private AbstractTexture loadTexture(ResourceLocation p_118516_,  AbstractTexture p_118517_)`
- `public AbstractTexture getTexture(ResourceLocation p_118507_)`
- `public AbstractTexture getTexture(ResourceLocation p_174787_,  AbstractTexture p_174788_)`
- `public ResourceLocation register(String p_118491_,  DynamicTexture p_118492_)`
- `public CompletableFuture<Void> preload(ResourceLocation p_118502_,  Executor p_118503_)`
- `private static void execute(Runnable p_118489_)`
- `public void tick()`
- `public void release(ResourceLocation p_118514_)`
- `public void close()`
- `public CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier p_118476_,  ResourceManager p_118477_,  ProfilerFiller p_118478_,  ProfilerFiller p_118479_,  Executor p_118480_,  Executor p_118481_)`
- `public void dumpAllSheets(Path p_276129_)`
- `private void _dumpAllSheets(Path p_276128_)`

### Inherited methods
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## Tickable

*interface* `net.minecraft.client.renderer.texture.Tickable`

### Methods
- `void tick()`
