# net.minecraft.client.gui.font.glyphs

- [BakedGlyph](#bakedglyph)
- [BakedGlyph.Effect](#bakedglyph.effect)
- [Class SpecialGlyphs](#class-specialglyphs)
- [EmptyGlyph](#emptyglyph)
- [SpecialGlyphs.PixelProvider](#specialglyphs.pixelprovider)
## BakedGlyph

*class* `net.minecraft.client.gui.font.glyphs.BakedGlyph`

### Fields
- `private final GlyphRenderTypes renderTypes`
- `private final float u0`
- `private final float u1`
- `private final float v0`
- `private final float v1`
- `private final float left`
- `private final float right`
- `private final float up`
- `private final float down`

### Methods
- `public void render(boolean p_95227_,  float p_95228_,  float p_95229_,  org.joml.Matrix4f p_253706_,  VertexConsumer p_95231_,  float p_95232_,  float p_95233_,  float p_95234_,  float p_95235_,  int p_95236_)`
- `public void renderEffect(BakedGlyph.Effect p_95221_,  org.joml.Matrix4f p_254370_,  VertexConsumer p_95223_,  int p_95224_)`
- `public RenderType renderType(Font.DisplayMode p_181388_)`

## BakedGlyph.Effect

*class* `net.minecraft.client.gui.font.glyphs.BakedGlyph.Effect`

Enclosing class: BakedGlyph

### Fields
- `protected final float x0`
- `protected final float y0`
- `protected final float x1`
- `protected final float y1`
- `protected final float depth`
- `protected final float r`
- `protected final float g`
- `protected final float b`
- `protected final float a`

## Class SpecialGlyphs

*enum* `net.minecraft.client.gui.font.glyphs.Class SpecialGlyphs`

### Fields
- `final NativeImage image`

### Methods
- `public static SpecialGlyphs[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SpecialGlyphs valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `private static NativeImage generate(int p_232609_,  int p_232610_,  SpecialGlyphs.PixelProvider p_232611_)`
- `public float getAdvance()`
- `public BakedGlyph bake(Function<SheetGlyphInfo,BakedGlyph> p_232616_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `com.mojang.blaze3d.font.GlyphInfo`: `getAdvance`, `getBoldOffset`, `getShadowOffset`

## EmptyGlyph

*class* `net.minecraft.client.gui.font.glyphs.EmptyGlyph`

### Fields
- `public static final EmptyGlyph INSTANCE`

### Methods
- `public void render(boolean p_95278_,  float p_95279_,  float p_95280_,  org.joml.Matrix4f p_253794_,  VertexConsumer p_95282_,  float p_95283_,  float p_95284_,  float p_95285_,  float p_95286_,  int p_95287_)`

### Inherited methods
- from `net.minecraft.client.gui.font.glyphs.BakedGlyph`: `renderEffect`, `renderType`

## SpecialGlyphs.PixelProvider

*interface* `net.minecraft.client.gui.font.glyphs.SpecialGlyphs.PixelProvider`

Enclosing class: SpecialGlyphs

### Methods
- `int getColor(int p_232635_,  int p_232636_)`
