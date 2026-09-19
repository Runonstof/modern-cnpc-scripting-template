# net.minecraft.client.gui.font

- [AllMissingGlyphProvider](#allmissingglyphprovider)
- [Class TextFieldHelper.CursorStep](#class-textfieldhelper.cursorstep)
- [CodepointMap](#codepointmap)
- [CodepointMap.Output](#codepointmap.output)
- [FontManager](#fontmanager)
- [FontManager.BuilderId](#fontmanager.builderid)
- [FontManager.BuilderResult](#fontmanager.builderresult)
- [FontManager.FontDefinitionFile](#fontmanager.fontdefinitionfile)
- [FontManager.Preparation](#fontmanager.preparation)
- [FontManager.UnresolvedBuilderBundle](#fontmanager.unresolvedbuilderbundle)
- [FontSet](#fontset)
- [FontSet.GlyphInfoFilter](#fontset.glyphinfofilter)
- [FontTexture](#fonttexture)
- [FontTexture.Node](#fonttexture.node)
- [GlyphRenderTypes](#glyphrendertypes)
- [TextFieldHelper](#textfieldhelper)
## AllMissingGlyphProvider

*class* `net.minecraft.client.gui.font.AllMissingGlyphProvider`

### Methods
- `@Nullable public GlyphInfo getGlyph(int p_232553_)`
- `public it.unimi.dsi.fastutil.ints.IntSet getSupportedGlyphs()`

### Inherited methods
- from `com.mojang.blaze3d.font.GlyphProvider`: `close`

## Class TextFieldHelper.CursorStep

*enum* `net.minecraft.client.gui.font.Class TextFieldHelper.CursorStep`

Enclosing class: TextFieldHelper

### Methods
- `public static TextFieldHelper.CursorStep[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static TextFieldHelper.CursorStep valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## CodepointMap

*class* `net.minecraft.client.gui.font.CodepointMap`

### Fields
- `private static final int BLOCK_BITS` (= 8)
- `private static final int BLOCK_SIZE` (= 256)
- `private static final int IN_BLOCK_MASK` (= 255)
- `private static final int MAX_BLOCK` (= 4351)
- `private static final int BLOCK_COUNT` (= 4352)
- `private final T[] empty`
- `private final T[][] blockMap`
- `private final IntFunction<T[]> blockConstructor`

### Methods
- `public void clear()`
- `@Nullable public T get(int p_285131_)`
- `@Nullable public T put(int p_285321_,  T p_285073_)`
- `public T computeIfAbsent(int p_285365_,  IntFunction<T> p_285147_)`
- `@Nullable public T remove(int p_285488_)`
- `public void forEach(CodepointMap.Output<T> p_285048_)`
- `public it.unimi.dsi.fastutil.ints.IntSet keySet()`

## CodepointMap.Output

*interface* `net.minecraft.client.gui.font.CodepointMap.Output`

Enclosing class: CodepointMap<T>

### Methods
- `void accept(int p_285163_,  T p_285313_)`

## FontManager

*class* `net.minecraft.client.gui.font.FontManager`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `private static final String FONTS_PATH` (= "fonts.json")
- `public static final ResourceLocation MISSING_FONT`
- `private static final FileToIdConverter FONT_DEFINITIONS`
- `private static final com.google.gson.Gson GSON`
- `private final FontSet missingFontSet`
- `private final List<GlyphProvider> providersToClose`
- `private final Map<ResourceLocation,FontSet> fontSets`
- `private final TextureManager textureManager`
- `private Map<ResourceLocation,ResourceLocation> renames`

### Methods
- `public CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier p_285160_,  ResourceManager p_285231_,  ProfilerFiller p_285232_,  ProfilerFiller p_285262_,  Executor p_284975_,  Executor p_285218_)`
- `private CompletableFuture<FontManager.Preparation> prepare(ResourceManager p_285252_,  Executor p_284969_)`
- `private CompletableFuture<Optional<GlyphProvider>> safeLoad(FontManager.BuilderId p_285113_,  GlyphProviderDefinition.Loader p_286561_,  ResourceManager p_285424_,  Executor p_285371_)`
- `private Map<ResourceLocation,List<GlyphProvider>> resolveProviders(List<FontManager.UnresolvedBuilderBundle> p_285282_)`
- `private void finalizeProviderLoading(List<GlyphProvider> p_285520_,  GlyphProvider p_285397_)`
- `private void apply(FontManager.Preparation p_284939_,  ProfilerFiller p_285407_)`
- `private static List<com.mojang.datafixers.util.Pair<FontManager.BuilderId,GlyphProviderDefinition>> loadResourceStack(List<Resource> p_284976_,  ResourceLocation p_285272_)`
- `public void setRenames(Map<ResourceLocation,ResourceLocation> p_95012_)`
- `private ResourceLocation getActualId(ResourceLocation p_285141_)`
- `public Font createFont()`
- `public Font createFontFilterFishy()`
- `public void close()`

### Inherited methods
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## FontManager.BuilderId

*record* `net.minecraft.client.gui.font.FontManager.BuilderId`

Enclosing class: FontManager

### Fields
- `private final ResourceLocation fontId`
  The field for the fontId record component.
- `private final String pack`
  The field for the pack record component.
- `private final int index`
  The field for the index record component.

### Methods
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public ResourceLocation fontId()`
  Returns the value of the fontId record component.
  - returns: the value of the fontId record component
- `public String pack()`
  Returns the value of the pack record component.
  - returns: the value of the pack record component
- `public int index()`
  Returns the value of the index record component.
  - returns: the value of the index record component

## FontManager.BuilderResult

*record* `net.minecraft.client.gui.font.FontManager.BuilderResult`

Enclosing class: FontManager

### Fields
- `private final FontManager.BuilderId id`
  The field for the id record component.
- `private final com.mojang.datafixers.util.Either<CompletableFuture<Optional<GlyphProvider>>,ResourceLocation> result`
  The field for the result record component.

### Methods
- `public Optional<List<GlyphProvider>> resolve(Function<ResourceLocation,List<GlyphProvider>> p_284942_)`
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
- `public FontManager.BuilderId id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public com.mojang.datafixers.util.Either<CompletableFuture<Optional<GlyphProvider>>,ResourceLocation> result()`
  Returns the value of the result record component.
  - returns: the value of the result record component

## FontManager.FontDefinitionFile

*record* `net.minecraft.client.gui.font.FontManager.FontDefinitionFile`

Enclosing class: FontManager

### Fields
- `private final List<GlyphProviderDefinition> providers`
  The field for the providers record component.
- `public static final com.mojang.serialization.Codec<FontManager.FontDefinitionFile> CODEC`

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
- `public List<GlyphProviderDefinition> providers()`
  Returns the value of the providers record component.
  - returns: the value of the providers record component

## FontManager.Preparation

*record* `net.minecraft.client.gui.font.FontManager.Preparation`

Enclosing class: FontManager

### Fields
- `private final Map<ResourceLocation,List<GlyphProvider>> providers`
  The field for the providers record component.
- `private final List<GlyphProvider> allProviders`
  The field for the allProviders record component.

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
- `public Map<ResourceLocation,List<GlyphProvider>> providers()`
  Returns the value of the providers record component.
  - returns: the value of the providers record component
- `public List<GlyphProvider> allProviders()`
  Returns the value of the allProviders record component.
  - returns: the value of the allProviders record component

## FontManager.UnresolvedBuilderBundle

*record* `net.minecraft.client.gui.font.FontManager.UnresolvedBuilderBundle`

Enclosing class: FontManager

### Fields
- `private final ResourceLocation fontId`
  The field for the fontId record component.
- `private final List<FontManager.BuilderResult> builders`
  The field for the builders record component.
- `private final Set<ResourceLocation> dependencies`
  The field for the dependencies record component.

### Methods
- `public void add(FontManager.BuilderId p_286837_,  GlyphProviderDefinition.Reference p_286500_)`
- `public void add(FontManager.BuilderId p_284935_,  CompletableFuture<Optional<GlyphProvider>> p_284966_)`
- `private Stream<CompletableFuture<Optional<GlyphProvider>>> listBuilders()`
- `public Optional<List<GlyphProvider>> resolve(Function<ResourceLocation,List<GlyphProvider>> p_285118_)`
- `public void visitRequiredDependencies(Consumer<ResourceLocation> p_285391_)`
- `public void visitOptionalDependencies(Consumer<ResourceLocation> p_285405_)`
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
- `public ResourceLocation fontId()`
  Returns the value of the fontId record component.
  - returns: the value of the fontId record component
- `public List<FontManager.BuilderResult> builders()`
  Returns the value of the builders record component.
  - returns: the value of the builders record component
- `public Set<ResourceLocation> dependencies()`
  Returns the value of the dependencies record component.
  - returns: the value of the dependencies record component

## FontSet

*class* `net.minecraft.client.gui.font.FontSet`

### Fields
- `private static final RandomSource RANDOM`
- `private static final float LARGE_FORWARD_ADVANCE` (= 32.0f)
- `private final TextureManager textureManager`
- `private final ResourceLocation name`
- `private BakedGlyph missingGlyph`
- `private BakedGlyph whiteGlyph`
- `private final List<GlyphProvider> providers`
- `private final CodepointMap<BakedGlyph> glyphs`
- `private final CodepointMap<FontSet.GlyphInfoFilter> glyphInfos`
- `private final it.unimi.dsi.fastutil.ints.Int2ObjectMap<it.unimi.dsi.fastutil.ints.IntList> glyphsByWidth`
- `private final List<FontTexture> textures`

### Methods
- `public void reload(List<GlyphProvider> p_95072_)`
- `public void close()`
- `private void closeProviders()`
- `private void closeTextures()`
- `private static boolean hasFishyAdvance(GlyphInfo p_243323_)`
- `private FontSet.GlyphInfoFilter computeGlyphInfo(int p_243321_)`
- `public GlyphInfo getGlyphInfo(int p_243235_,  boolean p_243251_)`
- `private BakedGlyph computeBakedGlyph(int p_232565_)`
- `public BakedGlyph getGlyph(int p_95079_)`
- `private BakedGlyph stitch(SheetGlyphInfo p_232557_)`
- `public BakedGlyph getRandomGlyph(GlyphInfo p_95068_)`
- `public BakedGlyph whiteGlyph()`

## FontSet.GlyphInfoFilter

*record* `net.minecraft.client.gui.font.FontSet.GlyphInfoFilter`

Enclosing class: FontSet

### Fields
- `private final GlyphInfo glyphInfo`
  The field for the glyphInfo record component.
- `private final GlyphInfo glyphInfoNotFishy`
  The field for the glyphInfoNotFishy record component.
- `static final FontSet.GlyphInfoFilter MISSING`

### Methods
- `GlyphInfo select(boolean p_243218_)`
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
- `public GlyphInfo glyphInfo()`
  Returns the value of the glyphInfo record component.
  - returns: the value of the glyphInfo record component
- `public GlyphInfo glyphInfoNotFishy()`
  Returns the value of the glyphInfoNotFishy record component.
  - returns: the value of the glyphInfoNotFishy record component

## FontTexture

*class* `net.minecraft.client.gui.font.FontTexture`

### Fields
- `private static final int SIZE` (= 256)
- `private final GlyphRenderTypes renderTypes`
- `private final boolean colored`
- `private final FontTexture.Node root`

### Inherited fields
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `blur`, `id`, `mipmap`, `NOT_ASSIGNED`

### Methods
- `public void load(ResourceManager p_95101_)`
- `public void close()`
- `@Nullable public BakedGlyph add(SheetGlyphInfo p_232569_)`
- `public void dumpContents(ResourceLocation p_285121_,  Path p_285511_)`

### Inherited methods
- from `net.minecraft.client.renderer.texture.AbstractTexture`: `bind`, `getId`, `releaseId`, `reset`, `restoreLastBlurMipmap`, `setBlurMipmap`, `setFilter`

## FontTexture.Node

*class* `net.minecraft.client.gui.font.FontTexture.Node`

Enclosing class: FontTexture

### Fields
- `final int x`
- `final int y`
- `private final int width`
- `private final int height`
- `@Nullable private FontTexture.Node left`
- `@Nullable private FontTexture.Node right`
- `private boolean occupied`

### Methods
- `@Nullable FontTexture.Node insert(SheetGlyphInfo p_232571_)`

## GlyphRenderTypes

*record* `net.minecraft.client.gui.font.GlyphRenderTypes`

### Fields
- `private final RenderType normal`
  The field for the normal record component.
- `private final RenderType seeThrough`
  The field for the seeThrough record component.
- `private final RenderType polygonOffset`
  The field for the polygonOffset record component.

### Methods
- `public static GlyphRenderTypes createForIntensityTexture(ResourceLocation p_285411_)`
- `public static GlyphRenderTypes createForColorTexture(ResourceLocation p_285486_)`
- `public RenderType select(Font.DisplayMode p_285259_)`
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
- `public RenderType normal()`
  Returns the value of the normal record component.
  - returns: the value of the normal record component
- `public RenderType seeThrough()`
  Returns the value of the seeThrough record component.
  - returns: the value of the seeThrough record component
- `public RenderType polygonOffset()`
  Returns the value of the polygonOffset record component.
  - returns: the value of the polygonOffset record component

## TextFieldHelper

*class* `net.minecraft.client.gui.font.TextFieldHelper`

### Fields
- `private final Supplier<String> getMessageFn`
- `private final Consumer<String> setMessageFn`
- `private final Supplier<String> getClipboardFn`
- `private final Consumer<String> setClipboardFn`
- `private final Predicate<String> stringValidator`
- `private int cursorPos`
- `private int selectionPos`

### Methods
- `public static Supplier<String> createClipboardGetter(Minecraft p_95154_)`
- `public static String getClipboardContents(Minecraft p_95170_)`
- `public static Consumer<String> createClipboardSetter(Minecraft p_95183_)`
- `public static void setClipboardContents(Minecraft p_95156_,  String p_95157_)`
- `public boolean charTyped(char p_95144_)`
- `public boolean keyPressed(int p_95146_)`
- `private int clampToMsgLength(int p_95196_)`
- `private void insertText(String p_95161_,  String p_95162_)`
- `public void insertText(String p_95159_)`
- `private void resetSelectionIfNeeded(boolean p_95164_)`
- `public void moveBy(int p_232576_,  boolean p_232577_,  TextFieldHelper.CursorStep p_232578_)`
- `public void moveByChars(int p_169094_)`
- `public void moveByChars(int p_95151_,  boolean p_95152_)`
- `public void moveByWords(int p_169096_)`
- `public void moveByWords(int p_95167_,  boolean p_95168_)`
- `public void removeFromCursor(int p_232573_,  TextFieldHelper.CursorStep p_232574_)`
- `public void removeWordsFromCursor(int p_232580_)`
- `public void removeCharsFromCursor(int p_95190_)`
- `public void cut()`
- `public void paste()`
- `public void copy()`
- `public void selectAll()`
- `private String getSelected(String p_95175_)`
- `private String deleteSelection(String p_95185_)`
- `public void setCursorToStart()`
- `public void setCursorToStart(boolean p_95177_)`
- `public void setCursorToEnd()`
- `public void setCursorToEnd(boolean p_95187_)`
- `public int getCursorPos()`
- `public void setCursorPos(int p_169099_)`
- `public void setCursorPos(int p_95180_,  boolean p_95181_)`
- `public int getSelectionPos()`
- `public void setSelectionPos(int p_169101_)`
- `public void setSelectionRange(int p_95148_,  int p_95149_)`
- `public boolean isSelecting()`
