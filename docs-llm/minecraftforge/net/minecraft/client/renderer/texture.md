# net.minecraft.client.renderer.texture

- [AbstractTexture](#abstracttexture)
- [DynamicTexture](#dynamictexture)
- [ITextureMapPopulator](#itexturemappopulator)
- [ITextureObject](#itextureobject)
- [ITickable](#itickable)
- [ITickableTextureObject](#itickabletextureobject)
- [LayeredColorMaskTexture](#layeredcolormasktexture)
- [LayeredTexture](#layeredtexture)
- [PngSizeInfo](#pngsizeinfo)
- [SimpleTexture](#simpletexture)
- [Stitcher](#stitcher)
- [Stitcher.Holder](#stitcher.holder)
- [Stitcher.Slot](#stitcher.slot)
- [TextureAtlasSprite](#textureatlassprite)
- [TextureManager](#texturemanager)
- [TextureMap](#texturemap)
- [TextureUtil](#textureutil)
## AbstractTexture

*class* `net.minecraft.client.renderer.texture.AbstractTexture`

All Implemented Interfaces: ITextureObject

### Fields
- `protected int glTextureId`
- `protected boolean blur`
- `protected boolean mipmap`
- `protected boolean blurLast`
- `protected boolean mipmapLast`

### Methods
- `public void setBlurMipmapDirect(boolean blurIn,  boolean mipmapIn)`
- `public void setBlurMipmap(boolean blurIn,  boolean mipmapIn)`
- `public void restoreLastBlurMipmap()`
- `public int getGlTextureId()`
- `public void deleteGlTexture()`

### Inherited methods
- from `net.minecraft.client.renderer.texture.ITextureObject`: `loadTexture`

## DynamicTexture

*class* `net.minecraft.client.renderer.texture.DynamicTexture`

All Implemented Interfaces: ITextureObject

### Inherited fields
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `blur`, `blurLast`, `glTextureId`, `mipmap`, `mipmapLast`

### Methods
- `public void loadTexture(IResourceManager resourceManager)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void updateDynamicTexture()`
- `public int[] getTextureData()`

### Inherited methods
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `deleteGlTexture`, `getGlTextureId`, `restoreLastBlurMipmap`, `setBlurMipmap`, `setBlurMipmapDirect`

## ITextureMapPopulator

*interface* `net.minecraft.client.renderer.texture.ITextureMapPopulator`

### Methods
- `void registerSprites(TextureMap textureMapIn)`

## ITextureObject

*interface* `net.minecraft.client.renderer.texture.ITextureObject`

### Methods
- `void setBlurMipmap(boolean blurIn,  boolean mipmapIn)`
- `void restoreLastBlurMipmap()`
- `void loadTexture(IResourceManager resourceManager)  throws java.io.IOException`
  - throws: java.io.IOException
- `int getGlTextureId()`

## ITickable

*interface* `net.minecraft.client.renderer.texture.ITickable`

### Methods
- `void tick()`

## ITickableTextureObject

*interface* `net.minecraft.client.renderer.texture.ITickableTextureObject`

All Superinterfaces: ITextureObject, ITickable

### Inherited methods
- from `net.minecraft.client.renderer.texture.ITextureObject`: `getGlTextureId`, `loadTexture`, `restoreLastBlurMipmap`, `setBlurMipmap`
- from `net.minecraft.client.renderer.texture.ITickable`: `tick`

## LayeredColorMaskTexture

*class* `net.minecraft.client.renderer.texture.LayeredColorMaskTexture`

All Implemented Interfaces: ITextureObject

### Inherited fields
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `blur`, `blurLast`, `glTextureId`, `mipmap`, `mipmapLast`

### Methods
- `public void loadTexture(IResourceManager resourceManager)  throws java.io.IOException`
  - throws: java.io.IOException

### Inherited methods
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `deleteGlTexture`, `getGlTextureId`, `restoreLastBlurMipmap`, `setBlurMipmap`, `setBlurMipmapDirect`

## LayeredTexture

*class* `net.minecraft.client.renderer.texture.LayeredTexture`

All Implemented Interfaces: ITextureObject

### Fields
- `public final java.util.List<java.lang.String> layeredTextureNames`

### Inherited fields
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `blur`, `blurLast`, `glTextureId`, `mipmap`, `mipmapLast`

### Methods
- `public void loadTexture(IResourceManager resourceManager)  throws java.io.IOException`
  - throws: java.io.IOException

### Inherited methods
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `deleteGlTexture`, `getGlTextureId`, `restoreLastBlurMipmap`, `setBlurMipmap`, `setBlurMipmapDirect`

## PngSizeInfo

*class* `net.minecraft.client.renderer.texture.PngSizeInfo`

### Fields
- `public final int pngWidth`
- `public final int pngHeight`

### Methods
- `public static PngSizeInfo makeFromResource(IResource resource)  throws java.io.IOException`
  - throws: java.io.IOException

## SimpleTexture

*class* `net.minecraft.client.renderer.texture.SimpleTexture`

All Implemented Interfaces: ITextureObject

### Fields
- `protected final ResourceLocation textureLocation`

### Inherited fields
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `blur`, `blurLast`, `glTextureId`, `mipmap`, `mipmapLast`

### Methods
- `public void loadTexture(IResourceManager resourceManager)  throws java.io.IOException`
  - throws: java.io.IOException

### Inherited methods
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `deleteGlTexture`, `getGlTextureId`, `restoreLastBlurMipmap`, `setBlurMipmap`, `setBlurMipmapDirect`

## Stitcher

*class* `net.minecraft.client.renderer.texture.Stitcher`

### Methods
- `public int getCurrentWidth()`
- `public int getCurrentHeight()`
- `public void addSprite(TextureAtlasSprite textureAtlas)`
- `public void doStitch()`
- `public java.util.List<TextureAtlasSprite> getStichSlots()`

## Stitcher.Holder

*class* `net.minecraft.client.renderer.texture.Stitcher.Holder`

All Implemented Interfaces: java.lang.Comparable<Stitcher.Holder>

Enclosing class: Stitcher

### Methods
- `public TextureAtlasSprite getAtlasSprite()`
- `public int getWidth()`
- `public int getHeight()`
- `public void rotate()`
- `public boolean isRotated()`
- `public void setNewDimension(int p_94196_1_)`
- `public java.lang.String toString()`
- `public int compareTo(Stitcher.Holder p_compareTo_1_)`

## Stitcher.Slot

*class* `net.minecraft.client.renderer.texture.Stitcher.Slot`

Enclosing class: Stitcher

### Methods
- `public Stitcher.Holder getStitchHolder()`
- `public int getOriginX()`
- `public int getOriginY()`
- `public boolean addSlot(Stitcher.Holder holderIn)`
- `public void getAllStitchSlots(java.util.List<Stitcher.Slot> p_94184_1_)`
- `public java.lang.String toString()`

## TextureAtlasSprite

*class* `net.minecraft.client.renderer.texture.TextureAtlasSprite`

### Fields
- `protected java.util.List<int[][]> framesTextureData`
- `protected int[][] interpolatedFrameData`
- `protected boolean rotated`
- `protected int originX`
- `protected int originY`
- `protected int width`
- `protected int height`
- `protected int frameCounter`
- `protected int tickCounter`

### Methods
- `protected static TextureAtlasSprite makeAtlasSprite(ResourceLocation spriteResourceLocation)`
- `public void initSprite(int inX,  int inY,  int originInX,  int originInY,  boolean rotatedIn)`
- `public void copyFrom(TextureAtlasSprite atlasSpirit)`
- `public int getOriginX()`
- `public int getOriginY()`
- `public int getIconWidth()`
- `public int getIconHeight()`
- `public float getMinU()`
- `public float getMaxU()`
- `public float getInterpolatedU(double u)`
- `public float getUnInterpolatedU(float u)`
- `public float getMinV()`
- `public float getMaxV()`
- `public float getInterpolatedV(double v)`
- `public float getUnInterpolatedV(float p_188536_1_)`
- `public java.lang.String getIconName()`
- `public void updateAnimation()`
- `public int[][] getFrameTextureData(int index)`
- `public int getFrameCount()`
- `public void setIconWidth(int newWidth)`
- `public void setIconHeight(int newHeight)`
- `public void loadSprite(PngSizeInfo sizeInfo,  boolean p_188538_2_)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void loadSpriteFrames(IResource resource,  int mipmaplevels)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void generateMipmaps(int level)`
- `public void clearFramesTextureData()`
- `public boolean hasAnimationMetadata()`
- `public void setFramesTextureData(java.util.List<int[][]> newFramesTextureData)`
- `public java.lang.String toString()`
- `public boolean hasCustomLoader(IResourceManager manager,  ResourceLocation location)`
  The result of this function determines is the below 'load' function is called, and the
   default vanilla loading code is bypassed completely.
  - param: manager - Main resource manager
  - param: location - File resource location
  - returns: True to use your own custom load code and bypass vanilla loading.
- `public boolean load(IResourceManager manager,  ResourceLocation location,  java.util.function.Function<ResourceLocation,TextureAtlasSprite> textureGetter)`
  Load the specified resource as this sprite's data.
   Returning false from this function will prevent this icon from being stitched onto the master texture.
  - param: manager - Main resource manager
  - param: location - File resource location
  - param: textureGetter - accessor for dependencies. All of them will be loaded before this one
  - returns: False to prevent this Icon from being stitched
- `public java.util.Collection<ResourceLocation> getDependencies()`
  - returns: all textures that should be loaded before this texture.

## TextureManager

*class* `net.minecraft.client.renderer.texture.TextureManager`

All Implemented Interfaces: ITickable, IResourceManagerReloadListener

### Fields
- `public static final ResourceLocation RESOURCE_LOCATION_EMPTY`

### Methods
- `public void bindTexture(ResourceLocation resource)`
- `public boolean loadTickableTexture(ResourceLocation textureLocation,  ITickableTextureObject textureObj)`
- `public boolean loadTexture(ResourceLocation textureLocation,  ITextureObject textureObj)`
- `public ITextureObject getTexture(ResourceLocation textureLocation)`
- `public ResourceLocation getDynamicTextureLocation(java.lang.String name,  DynamicTexture texture)`
- `public void tick()`
- `public void deleteTexture(ResourceLocation textureLocation)`
- `public void onResourceManagerReload(IResourceManager resourceManager)`

## TextureMap

*class* `net.minecraft.client.renderer.texture.TextureMap`

All Implemented Interfaces: ITextureObject, ITickable, ITickableTextureObject

### Fields
- `public static final ResourceLocation LOCATION_MISSING_TEXTURE`
- `public static final ResourceLocation LOCATION_BLOCKS_TEXTURE`

### Inherited fields
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `blur`, `blurLast`, `glTextureId`, `mipmap`, `mipmapLast`

### Methods
- `public void loadTexture(IResourceManager resourceManager)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void loadSprites(IResourceManager resourceManager,  ITextureMapPopulator iconCreatorIn)`
- `public void loadTextureAtlas(IResourceManager resourceManager)`
- `public TextureAtlasSprite getAtlasSprite(java.lang.String iconName)`
- `public void updateAnimations()`
- `public TextureAtlasSprite registerSprite(ResourceLocation location)`
- `public void tick()`
- `public void setMipmapLevels(int mipmapLevelsIn)`
- `public TextureAtlasSprite getMissingSprite()`
- `public TextureAtlasSprite getTextureExtry(java.lang.String name)`
  Grabs the registered entry for the specified name, returning null if there was not a entry.
   Opposed to registerIcon, this will not instantiate the entry, useful to test if a mapping exists.
  - param: name - The name of the entry to find
  - returns: The registered entry, null if nothing was registered.
- `public boolean setTextureEntry(TextureAtlasSprite entry)`
  Adds a texture registry entry to this map for the specified name if one does not already exist.
   Returns false if the map already contains a entry for the specified name.
  - param: entry - Entry instance
  - returns: True if the entry was added to the map, false otherwise.
- `public java.lang.String getBasePath()`
- `public int getMipmapLevels()`

### Inherited methods
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `deleteGlTexture`, `getGlTextureId`, `restoreLastBlurMipmap`, `setBlurMipmap`, `setBlurMipmapDirect`
- from `net.minecraft.client.renderer.texture.ITextureObject`: `getGlTextureId`, `restoreLastBlurMipmap`, `setBlurMipmap`

## TextureUtil

*class* `net.minecraft.client.renderer.texture.TextureUtil`

### Fields
- `public static final DynamicTexture MISSING_TEXTURE`
- `public static final int[] MISSING_TEXTURE_DATA`

### Methods
- `public static int glGenTextures()`
- `public static void deleteTexture(int textureId)`
- `public static int uploadTextureImage(int textureId,  java.awt.image.BufferedImage texture)`
- `public static void uploadTexture(int textureId,  int[] p_110988_1_,  int p_110988_2_,  int p_110988_3_)`
- `public static int[][] generateMipmapData(int p_147949_0_,  int p_147949_1_,  int[][] p_147949_2_)`
- `public static void uploadTextureMipmap(int[][] p_147955_0_,  int p_147955_1_,  int p_147955_2_,  int p_147955_3_,  int p_147955_4_,  boolean p_147955_5_,  boolean p_147955_6_)`
- `public static int uploadTextureImageAllocate(int textureId,  java.awt.image.BufferedImage texture,  boolean blur,  boolean clamp)`
- `public static void allocateTexture(int textureId,  int width,  int height)`
- `public static void allocateTextureImpl(int glTextureId,  int mipmapLevels,  int width,  int height)`
- `public static int uploadTextureImageSub(int textureId,  java.awt.image.BufferedImage p_110995_1_,  int p_110995_2_,  int p_110995_3_,  boolean p_110995_4_,  boolean p_110995_5_)`
- `public static int[] readImageData(IResourceManager resourceManager,  ResourceLocation imageLocation)  throws java.io.IOException`
  - throws: java.io.IOException
- `public static java.awt.image.BufferedImage readBufferedImage(java.io.InputStream imageStream)  throws java.io.IOException`
  - throws: java.io.IOException
- `public static int[] updateAnaglyph(int[] p_110985_0_)`
- `public static int anaglyphColor(int p_177054_0_)`
- `public static void processPixelValues(int[] p_147953_0_,  int p_147953_1_,  int p_147953_2_)`
