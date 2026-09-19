# com.mojang.blaze3d.font

- [GlyphInfo](#glyphinfo)
- [GlyphInfo.SpaceGlyphInfo](#glyphinfo.spaceglyphinfo)
- [GlyphProvider](#glyphprovider)
- [SheetGlyphInfo](#sheetglyphinfo)
- [SpaceProvider](#spaceprovider)
- [SpaceProvider.Definition](#spaceprovider.definition)
- [TrueTypeGlyphProvider](#truetypeglyphprovider)
- [TrueTypeGlyphProvider.Glyph](#truetypeglyphprovider.glyph)
## GlyphInfo

*interface* `com.mojang.blaze3d.font.GlyphInfo`

### Methods
- `float getAdvance()`
- `default float getAdvance(boolean p_83828_)`
- `default float getBoldOffset()`
- `default float getShadowOffset()`
- `BakedGlyph bake(Function<SheetGlyphInfo,BakedGlyph> p_231088_)`

## GlyphInfo.SpaceGlyphInfo

*interface* `com.mojang.blaze3d.font.GlyphInfo.SpaceGlyphInfo`

All Superinterfaces: GlyphInfo

Enclosing interface: GlyphInfo

### Methods
- `default BakedGlyph bake(Function<SheetGlyphInfo,BakedGlyph> p_231090_)`

### Inherited methods
- from `com.mojang.blaze3d.font.GlyphInfo`: `getAdvance`, `getAdvance`, `getBoldOffset`, `getShadowOffset`

## GlyphProvider

*interface* `com.mojang.blaze3d.font.GlyphProvider`

All Superinterfaces: AutoCloseable

### Methods
- `default void close()`
- `@Nullable default GlyphInfo getGlyph(int p_231091_)`
- `it.unimi.dsi.fastutil.ints.IntSet getSupportedGlyphs()`

## SheetGlyphInfo

*interface* `com.mojang.blaze3d.font.SheetGlyphInfo`

### Methods
- `int getPixelWidth()`
- `int getPixelHeight()`
- `void upload(int p_231092_,  int p_231093_)`
- `boolean isColored()`
- `float getOversample()`
- `default float getLeft()`
- `default float getRight()`
- `default float getUp()`
- `default float getDown()`
- `default float getBearingX()`
- `default float getBearingY()`

## SpaceProvider

*class* `com.mojang.blaze3d.font.SpaceProvider`

### Fields
- `private final it.unimi.dsi.fastutil.ints.Int2ObjectMap<GlyphInfo.SpaceGlyphInfo> glyphs`

### Methods
- `@Nullable public GlyphInfo getGlyph(int p_231105_)`
- `public it.unimi.dsi.fastutil.ints.IntSet getSupportedGlyphs()`

### Inherited methods
- from `com.mojang.blaze3d.font.GlyphProvider`: `close`

## SpaceProvider.Definition

*record* `com.mojang.blaze3d.font.SpaceProvider.Definition`

Enclosing class: SpaceProvider

### Fields
- `private final Map<Integer,Float> advances`
  The field for the advances record component.
- `public static final com.mojang.serialization.MapCodec<SpaceProvider.Definition> CODEC`

### Methods
- `public GlyphProviderType type()`
- `public com.mojang.datafixers.util.Either<GlyphProviderDefinition.Loader,GlyphProviderDefinition.Reference> unpack()`
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
- `public Map<Integer,Float> advances()`
  Returns the value of the advances record component.
  - returns: the value of the advances record component

## TrueTypeGlyphProvider

*class* `com.mojang.blaze3d.font.TrueTypeGlyphProvider`

### Fields
- `@Nullable private ByteBuffer fontMemory`
- `@Nullable private org.lwjgl.stb.STBTTFontinfo font`
- `final float oversample`
- `private final it.unimi.dsi.fastutil.ints.IntSet skip`
- `final float shiftX`
- `final float shiftY`
- `final float pointScale`
- `final float ascent`

### Methods
- `@Nullable public GlyphInfo getGlyph(int p_231116_)`
- `org.lwjgl.stb.STBTTFontinfo validateFontOpen()`
- `public void close()`
- `public it.unimi.dsi.fastutil.ints.IntSet getSupportedGlyphs()`

## TrueTypeGlyphProvider.Glyph

*class* `com.mojang.blaze3d.font.TrueTypeGlyphProvider.Glyph`

Enclosing class: TrueTypeGlyphProvider

### Fields
- `final int width`
- `final int height`
- `final float bearingX`
- `final float bearingY`
- `private final float advance`
- `final int index`

### Methods
- `public float getAdvance()`
- `public BakedGlyph bake(Function<SheetGlyphInfo,BakedGlyph> p_231120_)`

### Inherited methods
- from `com.mojang.blaze3d.font.GlyphInfo`: `getAdvance`, `getBoldOffset`, `getShadowOffset`
