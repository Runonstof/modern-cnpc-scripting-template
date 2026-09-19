# net.minecraft.client.gui.font.providers

- [BitmapProvider](#bitmapprovider)
- [BitmapProvider.Definition](#bitmapprovider.definition)
- [BitmapProvider.Glyph](#bitmapprovider.glyph)
- [Class GlyphProviderType](#class-glyphprovidertype)
- [GlyphProviderDefinition](#glyphproviderdefinition)
- [GlyphProviderDefinition.Loader](#glyphproviderdefinition.loader)
- [GlyphProviderDefinition.Reference](#glyphproviderdefinition.reference)
- [ProviderReferenceDefinition](#providerreferencedefinition)
- [TrueTypeGlyphProviderDefinition](#truetypeglyphproviderdefinition)
- [TrueTypeGlyphProviderDefinition.Shift](#truetypeglyphproviderdefinition.shift)
- [UnihexProvider](#unihexprovider)
- [UnihexProvider.ByteContents](#unihexprovider.bytecontents)
- [UnihexProvider.Definition](#unihexprovider.definition)
- [UnihexProvider.Dimensions](#unihexprovider.dimensions)
- [UnihexProvider.Glyph](#unihexprovider.glyph)
- [UnihexProvider.IntContents](#unihexprovider.intcontents)
- [UnihexProvider.LineData](#unihexprovider.linedata)
- [UnihexProvider.OverrideRange](#unihexprovider.overriderange)
- [UnihexProvider.ReaderOutput](#unihexprovider.readeroutput)
- [UnihexProvider.ShortContents](#unihexprovider.shortcontents)
## BitmapProvider

*class* `net.minecraft.client.gui.font.providers.BitmapProvider`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `private final NativeImage image`
- `private final CodepointMap<BitmapProvider.Glyph> glyphs`

### Methods
- `public void close()`
- `@Nullable public GlyphInfo getGlyph(int p_232638_)`
- `public it.unimi.dsi.fastutil.ints.IntSet getSupportedGlyphs()`

## BitmapProvider.Definition

*record* `net.minecraft.client.gui.font.providers.BitmapProvider.Definition`

Enclosing class: BitmapProvider

### Fields
- `private final ResourceLocation file`
  The field for the file record component.
- `private final int height`
  The field for the height record component.
- `private final int ascent`
  The field for the ascent record component.
- `private final int[][] codepointGrid`
  The field for the codepointGrid record component.
- `private static final com.mojang.serialization.Codec<int[][]> CODEPOINT_GRID_CODEC`
- `public static final com.mojang.serialization.MapCodec<BitmapProvider.Definition> CODEC`

### Methods
- `private static com.mojang.serialization.DataResult<int[][]> validateDimensions(int[][] p_286348_)`
- `private static com.mojang.serialization.DataResult<BitmapProvider.Definition> validate(BitmapProvider.Definition p_286662_)`
- `public GlyphProviderType type()`
- `public com.mojang.datafixers.util.Either<GlyphProviderDefinition.Loader,GlyphProviderDefinition.Reference> unpack()`
- `private GlyphProvider load(ResourceManager p_286694_)  throws IOException`
  - throws: IOException
- `private int getActualGlyphWidth(NativeImage p_286449_,  int p_286656_,  int p_286554_,  int p_286657_,  int p_286307_)`
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
- `public ResourceLocation file()`
  Returns the value of the file record component.
  - returns: the value of the file record component
- `public int height()`
  Returns the value of the height record component.
  - returns: the value of the height record component
- `public int ascent()`
  Returns the value of the ascent record component.
  - returns: the value of the ascent record component
- `public int[][] codepointGrid()`
  Returns the value of the codepointGrid record component.
  - returns: the value of the codepointGrid record component

## BitmapProvider.Glyph

*record* `net.minecraft.client.gui.font.providers.BitmapProvider.Glyph`

Enclosing class: BitmapProvider

### Fields
- `private final float scale`
  The field for the scale record component.
- `private final NativeImage image`
  The field for the image record component.
- `private final int offsetX`
  The field for the offsetX record component.
- `private final int offsetY`
  The field for the offsetY record component.
- `private final int width`
  The field for the width record component.
- `private final int height`
  The field for the height record component.
- `private final int advance`
  The field for the advance record component.
- `private final int ascent`
  The field for the ascent record component.

### Methods
- `public float getAdvance()`
- `public BakedGlyph bake(Function<SheetGlyphInfo,BakedGlyph> p_232640_)`
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
- `public float scale()`
  Returns the value of the scale record component.
  - returns: the value of the scale record component
- `public NativeImage image()`
  Returns the value of the image record component.
  - returns: the value of the image record component
- `public int offsetX()`
  Returns the value of the offsetX record component.
  - returns: the value of the offsetX record component
- `public int offsetY()`
  Returns the value of the offsetY record component.
  - returns: the value of the offsetY record component
- `public int width()`
  Returns the value of the width record component.
  - returns: the value of the width record component
- `public int height()`
  Returns the value of the height record component.
  - returns: the value of the height record component
- `public int advance()`
  Returns the value of the advance record component.
  - returns: the value of the advance record component
- `public int ascent()`
  Returns the value of the ascent record component.
  - returns: the value of the ascent record component

### Inherited methods
- from `com.mojang.blaze3d.font.GlyphInfo`: `getAdvance`, `getBoldOffset`, `getShadowOffset`

## Class GlyphProviderType

*enum* `net.minecraft.client.gui.font.providers.Class GlyphProviderType`

### Fields
- `public static final com.mojang.serialization.Codec<GlyphProviderType> CODEC`
- `private final String name`
- `private final com.mojang.serialization.MapCodec<? extends GlyphProviderDefinition> codec`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static GlyphProviderType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static GlyphProviderType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`
- `public com.mojang.serialization.MapCodec<? extends GlyphProviderDefinition> mapCodec()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## GlyphProviderDefinition

*interface* `net.minecraft.client.gui.font.providers.GlyphProviderDefinition`

### Fields
- `static final com.mojang.serialization.Codec<GlyphProviderDefinition> CODEC`

### Methods
- `GlyphProviderType type()`
- `com.mojang.datafixers.util.Either<GlyphProviderDefinition.Loader,GlyphProviderDefinition.Reference> unpack()`

## GlyphProviderDefinition.Loader

*interface* `net.minecraft.client.gui.font.providers.GlyphProviderDefinition.Loader`

Enclosing interface: GlyphProviderDefinition

### Methods
- `GlyphProvider load(ResourceManager p_286639_)  throws IOException`
  - throws: IOException

## GlyphProviderDefinition.Reference

*record* `net.minecraft.client.gui.font.providers.GlyphProviderDefinition.Reference`

Enclosing interface: GlyphProviderDefinition

### Fields
- `private final ResourceLocation id`
  The field for the id record component.

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
- `public ResourceLocation id()`
  Returns the value of the id record component.
  - returns: the value of the id record component

## ProviderReferenceDefinition

*record* `net.minecraft.client.gui.font.providers.ProviderReferenceDefinition`

### Fields
- `private final ResourceLocation id`
  The field for the id record component.
- `public static final com.mojang.serialization.MapCodec<ProviderReferenceDefinition> CODEC`

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
- `public ResourceLocation id()`
  Returns the value of the id record component.
  - returns: the value of the id record component

## TrueTypeGlyphProviderDefinition

*record* `net.minecraft.client.gui.font.providers.TrueTypeGlyphProviderDefinition`

### Fields
- `private final ResourceLocation location`
  The field for the location record component.
- `private final float size`
  The field for the size record component.
- `private final float oversample`
  The field for the oversample record component.
- `private final TrueTypeGlyphProviderDefinition.Shift shift`
  The field for the shift record component.
- `private final String skip`
  The field for the skip record component.
- `private static final com.mojang.serialization.Codec<String> SKIP_LIST_CODEC`
- `public static final com.mojang.serialization.MapCodec<TrueTypeGlyphProviderDefinition> CODEC`

### Methods
- `public GlyphProviderType type()`
- `public com.mojang.datafixers.util.Either<GlyphProviderDefinition.Loader,GlyphProviderDefinition.Reference> unpack()`
- `private GlyphProvider load(ResourceManager p_286229_)  throws IOException`
  - throws: IOException
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
- `public ResourceLocation location()`
  Returns the value of the location record component.
  - returns: the value of the location record component
- `public float size()`
  Returns the value of the size record component.
  - returns: the value of the size record component
- `public float oversample()`
  Returns the value of the oversample record component.
  - returns: the value of the oversample record component
- `public TrueTypeGlyphProviderDefinition.Shift shift()`
  Returns the value of the shift record component.
  - returns: the value of the shift record component
- `public String skip()`
  Returns the value of the skip record component.
  - returns: the value of the skip record component

## TrueTypeGlyphProviderDefinition.Shift

*record* `net.minecraft.client.gui.font.providers.TrueTypeGlyphProviderDefinition.Shift`

Enclosing class: TrueTypeGlyphProviderDefinition

### Fields
- `private final float x`
  The field for the x record component.
- `private final float y`
  The field for the y record component.
- `public static final TrueTypeGlyphProviderDefinition.Shift NONE`
- `public static final com.mojang.serialization.Codec<TrueTypeGlyphProviderDefinition.Shift> CODEC`

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public float x()`
  Returns the value of the x record component.
  - returns: the value of the x record component
- `public float y()`
  Returns the value of the y record component.
  - returns: the value of the y record component

## UnihexProvider

*class* `net.minecraft.client.gui.font.providers.UnihexProvider`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `private static final int GLYPH_HEIGHT` (= 16)
- `private static final int DIGITS_PER_BYTE` (= 2)
- `private static final int DIGITS_FOR_WIDTH_8` (= 32)
- `private static final int DIGITS_FOR_WIDTH_16` (= 64)
- `private static final int DIGITS_FOR_WIDTH_24` (= 96)
- `private static final int DIGITS_FOR_WIDTH_32` (= 128)
- `private final CodepointMap<UnihexProvider.Glyph> glyphs`

### Methods
- `@Nullable public GlyphInfo getGlyph(int p_285239_)`
- `public it.unimi.dsi.fastutil.ints.IntSet getSupportedGlyphs()`
- `static void unpackBitsToBytes(IntBuffer p_285211_,  int p_285508_,  int p_285312_,  int p_285412_)`
- `static void unpackBitsToBytes(IntBuffer p_285283_,  UnihexProvider.LineData p_285485_,  int p_284940_,  int p_284950_)`
- `static void readFromStream(InputStream p_285315_,  UnihexProvider.ReaderOutput p_285353_)  throws IOException`
  - throws: IOException
- `static int decodeHex(int p_285205_,  it.unimi.dsi.fastutil.bytes.ByteList p_285268_,  int p_285345_)`
- `private static int decodeHex(int p_284952_,  byte p_285036_)`
- `private static boolean copyUntil(InputStream p_284994_,  it.unimi.dsi.fastutil.bytes.ByteList p_285351_,  int p_285177_)  throws IOException`
  - throws: IOException

### Inherited methods
- from `com.mojang.blaze3d.font.GlyphProvider`: `close`

## UnihexProvider.ByteContents

*record* `net.minecraft.client.gui.font.providers.UnihexProvider.ByteContents`

Enclosing class: UnihexProvider

### Fields
- `private final byte[] contents`
  The field for the contents record component.

### Methods
- `public int line(int p_285203_)`
- `static UnihexProvider.LineData read(int p_285080_,  it.unimi.dsi.fastutil.bytes.ByteList p_285481_)`
- `public int bitWidth()`
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
- `public byte[] contents()`
  Returns the value of the contents record component.
  - returns: the value of the contents record component

### Inherited methods
- from `net.minecraft.client.gui.font.providers.UnihexProvider.LineData`: `calculateWidth`, `mask`

## UnihexProvider.Definition

*class* `net.minecraft.client.gui.font.providers.UnihexProvider.Definition`

Enclosing class: UnihexProvider

### Fields
- `public static final com.mojang.serialization.MapCodec<UnihexProvider.Definition> CODEC`
- `private final ResourceLocation hexFile`
- `private final List<UnihexProvider.OverrideRange> sizeOverrides`

### Methods
- `public GlyphProviderType type()`
- `public com.mojang.datafixers.util.Either<GlyphProviderDefinition.Loader,GlyphProviderDefinition.Reference> unpack()`
- `private GlyphProvider load(ResourceManager p_286472_)  throws IOException`
  - throws: IOException
- `private UnihexProvider loadData(InputStream p_286795_)  throws IOException`
  - throws: IOException

## UnihexProvider.Dimensions

*record* `net.minecraft.client.gui.font.providers.UnihexProvider.Dimensions`

Enclosing class: UnihexProvider

### Fields
- `private final int left`
  The field for the left record component.
- `private final int right`
  The field for the right record component.
- `public static final com.mojang.serialization.MapCodec<UnihexProvider.Dimensions> MAP_CODEC`
- `public static final com.mojang.serialization.Codec<UnihexProvider.Dimensions> CODEC`

### Methods
- `public int pack()`
- `public static int pack(int p_285339_,  int p_285120_)`
- `public static int left(int p_285195_)`
- `public static int right(int p_285419_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int left()`
  Returns the value of the left record component.
  - returns: the value of the left record component
- `public int right()`
  Returns the value of the right record component.
  - returns: the value of the right record component

## UnihexProvider.Glyph

*record* `net.minecraft.client.gui.font.providers.UnihexProvider.Glyph`

Enclosing class: UnihexProvider

### Fields
- `private final UnihexProvider.LineData contents`
  The field for the contents record component.
- `private final int left`
  The field for the left record component.
- `private final int right`
  The field for the right record component.

### Methods
- `public int width()`
- `public float getAdvance()`
- `public float getShadowOffset()`
- `public float getBoldOffset()`
- `public BakedGlyph bake(Function<SheetGlyphInfo,BakedGlyph> p_285377_)`
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
- `public UnihexProvider.LineData contents()`
  Returns the value of the contents record component.
  - returns: the value of the contents record component
- `public int left()`
  Returns the value of the left record component.
  - returns: the value of the left record component
- `public int right()`
  Returns the value of the right record component.
  - returns: the value of the right record component

### Inherited methods
- from `com.mojang.blaze3d.font.GlyphInfo`: `getAdvance`

## UnihexProvider.IntContents

*record* `net.minecraft.client.gui.font.providers.UnihexProvider.IntContents`

Enclosing class: UnihexProvider

### Fields
- `private final int[] contents`
  The field for the contents record component.
- `private final int bitWidth`
  The field for the bitWidth record component.
- `private static final int SIZE_24` (= 24)

### Methods
- `public int line(int p_285172_)`
- `static UnihexProvider.LineData read24(int p_285362_,  it.unimi.dsi.fastutil.bytes.ByteList p_285123_)`
- `public static UnihexProvider.LineData read32(int p_285222_,  it.unimi.dsi.fastutil.bytes.ByteList p_285346_)`
- `public int bitWidth()`
  Returns the value of the bitWidth record component.
  - returns: the value of the bitWidth record component
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
- `public int[] contents()`
  Returns the value of the contents record component.
  - returns: the value of the contents record component

### Inherited methods
- from `net.minecraft.client.gui.font.providers.UnihexProvider.LineData`: `calculateWidth`, `mask`

## UnihexProvider.LineData

*interface* `net.minecraft.client.gui.font.providers.UnihexProvider.LineData`

Enclosing class: UnihexProvider

### Methods
- `int line(int p_285166_)`
- `int bitWidth()`
- `default int mask()`
- `default int calculateWidth()`

## UnihexProvider.OverrideRange

*record* `net.minecraft.client.gui.font.providers.UnihexProvider.OverrideRange`

Enclosing class: UnihexProvider

### Fields
- `private final int from`
  The field for the from record component.
- `private final int to`
  The field for the to record component.
- `private final UnihexProvider.Dimensions dimensions`
  The field for the dimensions record component.
- `private static final com.mojang.serialization.Codec<UnihexProvider.OverrideRange> RAW_CODEC`
- `public static final com.mojang.serialization.Codec<UnihexProvider.OverrideRange> CODEC`

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
- `public int from()`
  Returns the value of the from record component.
  - returns: the value of the from record component
- `public int to()`
  Returns the value of the to record component.
  - returns: the value of the to record component
- `public UnihexProvider.Dimensions dimensions()`
  Returns the value of the dimensions record component.
  - returns: the value of the dimensions record component

## UnihexProvider.ReaderOutput

*interface* `net.minecraft.client.gui.font.providers.UnihexProvider.ReaderOutput`

Enclosing class: UnihexProvider

### Methods
- `void accept(int p_285139_,  UnihexProvider.LineData p_284982_)`

## UnihexProvider.ShortContents

*record* `net.minecraft.client.gui.font.providers.UnihexProvider.ShortContents`

Enclosing class: UnihexProvider

### Fields
- `private final short[] contents`
  The field for the contents record component.

### Methods
- `public int line(int p_285158_)`
- `static UnihexProvider.LineData read(int p_285528_,  it.unimi.dsi.fastutil.bytes.ByteList p_284958_)`
- `public int bitWidth()`
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
- `public short[] contents()`
  Returns the value of the contents record component.
  - returns: the value of the contents record component

### Inherited methods
- from `net.minecraft.client.gui.font.providers.UnihexProvider.LineData`: `calculateWidth`, `mask`
