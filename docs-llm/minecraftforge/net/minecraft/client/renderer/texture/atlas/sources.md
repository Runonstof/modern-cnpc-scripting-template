# net.minecraft.client.renderer.texture.atlas.sources

- [DirectoryLister](#directorylister)
- [LazyLoadedImage](#lazyloadedimage)
- [PalettedPermutations](#palettedpermutations)
- [PalettedPermutations.PalettedSpriteSupplier](#palettedpermutations.palettedspritesupplier)
- [SingleFile](#singlefile)
- [SourceFilter](#sourcefilter)
- [Unstitcher](#unstitcher)
- [Unstitcher.Region](#unstitcher.region)
- [Unstitcher.RegionInstance](#unstitcher.regioninstance)
## DirectoryLister

*class* `net.minecraft.client.renderer.texture.atlas.sources.DirectoryLister`

### Fields
- `public static final com.mojang.serialization.Codec<DirectoryLister> CODEC`
- `private final String sourcePath`
- `private final String idPrefix`

### Inherited fields
- from `net.minecraft.client.renderer.texture.atlas.SpriteSource`: `TEXTURE_ID_CONVERTER`

### Methods
- `public void run(ResourceManager p_261582_,  SpriteSource.Output p_261898_)`
- `public SpriteSourceType type()`

## LazyLoadedImage

*class* `net.minecraft.client.renderer.texture.atlas.sources.LazyLoadedImage`

### Fields
- `private final ResourceLocation id`
- `private final Resource resource`
- `private final AtomicReference<NativeImage> image`
- `private final AtomicInteger referenceCount`

### Methods
- `public NativeImage get()  throws IOException`
  - throws: IOException
- `public void release()`

## PalettedPermutations

*class* `net.minecraft.client.renderer.texture.atlas.sources.PalettedPermutations`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `public static final com.mojang.serialization.Codec<PalettedPermutations> CODEC`
- `private final List<ResourceLocation> textures`
- `private final Map<String,ResourceLocation> permutations`
- `private final ResourceLocation paletteKey`

### Inherited fields
- from `net.minecraft.client.renderer.texture.atlas.SpriteSource`: `TEXTURE_ID_CONVERTER`

### Methods
- `public void run(ResourceManager p_267219_,  SpriteSource.Output p_267250_)`
- `private static IntUnaryOperator createPaletteMapping(int[] p_266839_,  int[] p_266776_)`
- `public static int[] loadPaletteEntryFromImage(ResourceManager p_267184_,  ResourceLocation p_267059_)`
- `public SpriteSourceType type()`

## PalettedPermutations.PalettedSpriteSupplier

*record* `net.minecraft.client.renderer.texture.atlas.sources.PalettedPermutations.PalettedSpriteSupplier`

Enclosing class: PalettedPermutations

### Fields
- `private final LazyLoadedImage baseImage`
  The field for the baseImage record component.
- `private final Supplier<IntUnaryOperator> palette`
  The field for the palette record component.
- `private final ResourceLocation permutationLocation`
  The field for the permutationLocation record component.

### Methods
- `@Nullable public SpriteContents apply(SpriteResourceLoader p_300667_)`
- `public void discard()`
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
- `public LazyLoadedImage baseImage()`
  Returns the value of the baseImage record component.
  - returns: the value of the baseImage record component
- `public Supplier<IntUnaryOperator> palette()`
  Returns the value of the palette record component.
  - returns: the value of the palette record component
- `public ResourceLocation permutationLocation()`
  Returns the value of the permutationLocation record component.
  - returns: the value of the permutationLocation record component

### Inherited methods
- from `java.util.function.Function`: `andThen`, `compose`

## SingleFile

*class* `net.minecraft.client.renderer.texture.atlas.sources.SingleFile`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final com.mojang.serialization.Codec<SingleFile> CODEC`
- `private final ResourceLocation resourceId`
- `private final Optional<ResourceLocation> spriteId`

### Inherited fields
- from `net.minecraft.client.renderer.texture.atlas.SpriteSource`: `TEXTURE_ID_CONVERTER`

### Methods
- `public void run(ResourceManager p_261920_,  SpriteSource.Output p_261578_)`
- `public SpriteSourceType type()`

## SourceFilter

*class* `net.minecraft.client.renderer.texture.atlas.sources.SourceFilter`

### Fields
- `public static final com.mojang.serialization.Codec<SourceFilter> CODEC`
- `private final ResourceLocationPattern filter`

### Inherited fields
- from `net.minecraft.client.renderer.texture.atlas.SpriteSource`: `TEXTURE_ID_CONVERTER`

### Methods
- `public void run(ResourceManager p_261888_,  SpriteSource.Output p_261864_)`
- `public SpriteSourceType type()`

## Unstitcher

*class* `net.minecraft.client.renderer.texture.atlas.sources.Unstitcher`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `public static final com.mojang.serialization.Codec<Unstitcher> CODEC`
- `private final ResourceLocation resource`
- `private final List<Unstitcher.Region> regions`
- `private final double xDivisor`
- `private final double yDivisor`

### Inherited fields
- from `net.minecraft.client.renderer.texture.atlas.SpriteSource`: `TEXTURE_ID_CONVERTER`

### Methods
- `public void run(ResourceManager p_261498_,  SpriteSource.Output p_261828_)`
- `public SpriteSourceType type()`

## Unstitcher.Region

*record* `net.minecraft.client.renderer.texture.atlas.sources.Unstitcher.Region`

Enclosing class: Unstitcher

### Fields
- `private final ResourceLocation sprite`
  The field for the sprite record component.
- `private final double x`
  The field for the x record component.
- `private final double y`
  The field for the y record component.
- `private final double width`
  The field for the width record component.
- `private final double height`
  The field for the height record component.
- `public static final com.mojang.serialization.Codec<Unstitcher.Region> CODEC`

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
- `public ResourceLocation sprite()`
  Returns the value of the sprite record component.
  - returns: the value of the sprite record component
- `public double x()`
  Returns the value of the x record component.
  - returns: the value of the x record component
- `public double y()`
  Returns the value of the y record component.
  - returns: the value of the y record component
- `public double width()`
  Returns the value of the width record component.
  - returns: the value of the width record component
- `public double height()`
  Returns the value of the height record component.
  - returns: the value of the height record component

## Unstitcher.RegionInstance

*class* `net.minecraft.client.renderer.texture.atlas.sources.Unstitcher.RegionInstance`

Enclosing class: Unstitcher

### Fields
- `private final LazyLoadedImage image`
- `private final Unstitcher.Region region`
- `private final double xDivisor`
- `private final double yDivisor`

### Methods
- `public SpriteContents apply(SpriteResourceLoader p_297928_)`
- `public void discard()`

### Inherited methods
- from `java.util.function.Function`: `andThen`, `compose`
