# com.mojang.blaze3d.platform

- [Class GlStateManager.DestFactor](#class-glstatemanager.destfactor)
- [Class GlStateManager.LogicOp](#class-glstatemanager.logicop)
- [Class GlStateManager.SourceFactor](#class-glstatemanager.sourcefactor)
- [Class GlStateManager.Viewport](#class-glstatemanager.viewport)
- [Class IconSet](#class-iconset)
- [Class InputConstants.Type](#class-inputconstants.type)
- [Class NativeImage.Format](#class-nativeimage.format)
- [Class NativeImage.InternalGlFormat](#class-nativeimage.internalglformat)
- [ClipboardManager](#clipboardmanager)
- [DebugMemoryUntracker](#debugmemoryuntracker)
- [DisplayData](#displaydata)
- [GlConst](#glconst)
- [GlDebug](#gldebug)
- [GlDebug.LogEntry](#gldebug.logentry)
- [GlStateManager](#glstatemanager)
- [GlStateManager.BlendState](#glstatemanager.blendstate)
- [GlStateManager.BooleanState](#glstatemanager.booleanstate)
- [GlStateManager.ColorLogicState](#glstatemanager.colorlogicstate)
- [GlStateManager.ColorMask](#glstatemanager.colormask)
- [GlStateManager.CullState](#glstatemanager.cullstate)
- [GlStateManager.DepthState](#glstatemanager.depthstate)
- [GlStateManager.PolygonOffsetState](#glstatemanager.polygonoffsetstate)
- [GlStateManager.ScissorState](#glstatemanager.scissorstate)
- [GlStateManager.StencilFunc](#glstatemanager.stencilfunc)
- [GlStateManager.StencilState](#glstatemanager.stencilstate)
- [GlStateManager.TextureState](#glstatemanager.texturestate)
- [GlUtil](#glutil)
- [GLX](#glx)
- [InputConstants](#inputconstants)
- [InputConstants.Key](#inputconstants.key)
- [Lighting](#lighting)
- [MacosUtil](#macosutil)
- [MemoryTracker](#memorytracker)
- [Monitor](#monitor)
- [MonitorCreator](#monitorcreator)
- [NativeImage](#nativeimage)
- [NativeImage.WriteCallback](#nativeimage.writecallback)
- [ScreenManager](#screenmanager)
- [TextureUtil](#textureutil)
- [VideoMode](#videomode)
- [Window](#window)
- [Window.WindowInitFailed](#window.windowinitfailed)
- [WindowEventHandler](#windoweventhandler)
## Class GlStateManager.DestFactor

*enum* `com.mojang.blaze3d.platform.Class GlStateManager.DestFactor`

Enclosing class: GlStateManager

### Fields
- `public final int value`

### Methods
- `public static GlStateManager.DestFactor[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static GlStateManager.DestFactor valueOf(String name)`
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

## Class GlStateManager.LogicOp

*enum* `com.mojang.blaze3d.platform.Class GlStateManager.LogicOp`

Enclosing class: GlStateManager

### Fields
- `public final int value`

### Methods
- `public static GlStateManager.LogicOp[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static GlStateManager.LogicOp valueOf(String name)`
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

## Class GlStateManager.SourceFactor

*enum* `com.mojang.blaze3d.platform.Class GlStateManager.SourceFactor`

Enclosing class: GlStateManager

### Fields
- `public final int value`

### Methods
- `public static GlStateManager.SourceFactor[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static GlStateManager.SourceFactor valueOf(String name)`
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

## Class GlStateManager.Viewport

*enum* `com.mojang.blaze3d.platform.Class GlStateManager.Viewport`

Enclosing class: GlStateManager

### Fields
- `protected int x`
- `protected int y`
- `protected int width`
- `protected int height`

### Methods
- `public static GlStateManager.Viewport[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static GlStateManager.Viewport valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static int x()`
- `public static int y()`
- `public static int width()`
- `public static int height()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class IconSet

*enum* `com.mojang.blaze3d.platform.Class IconSet`

### Fields
- `private final String[] path`

### Methods
- `public static IconSet[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static IconSet valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public List<IoSupplier<InputStream>> getStandardIcons(PackResources p_281372_)  throws IOException`
  - throws: IOException
- `public IoSupplier<InputStream> getMacIcon(PackResources p_281289_)  throws IOException`
  - throws: IOException
- `private IoSupplier<InputStream> getFile(PackResources p_281570_,  String p_281345_)  throws IOException`
  - throws: IOException

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class InputConstants.Type

*enum* `com.mojang.blaze3d.platform.Class InputConstants.Type`

Enclosing class: InputConstants

### Fields
- `private static final String KEY_KEYBOARD_UNKNOWN`
- `private final it.unimi.dsi.fastutil.ints.Int2ObjectMap<InputConstants.Key> map`
- `final String defaultPrefix`
- `final BiFunction<Integer,String,Component> displayTextSupplier`

### Methods
- `public static InputConstants.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static InputConstants.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `private static void addKey(InputConstants.Type p_84900_,  String p_84901_,  int p_84902_)`
- `public InputConstants.Key getOrCreate(int p_84896_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class NativeImage.Format

*enum* `com.mojang.blaze3d.platform.Class NativeImage.Format`

Enclosing class: NativeImage

### Fields
- `final int components`
- `private final int glFormat`
- `private final boolean hasRed`
- `private final boolean hasGreen`
- `private final boolean hasBlue`
- `private final boolean hasLuminance`
- `private final boolean hasAlpha`
- `private final int redOffset`
- `private final int greenOffset`
- `private final int blueOffset`
- `private final int luminanceOffset`
- `private final int alphaOffset`
- `private final boolean supportedByStb`

### Methods
- `public static NativeImage.Format[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static NativeImage.Format valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int components()`
- `public void setPackPixelStoreState()`
- `public void setUnpackPixelStoreState()`
- `public int glFormat()`
- `public boolean hasRed()`
- `public boolean hasGreen()`
- `public boolean hasBlue()`
- `public boolean hasLuminance()`
- `public boolean hasAlpha()`
- `public int redOffset()`
- `public int greenOffset()`
- `public int blueOffset()`
- `public int luminanceOffset()`
- `public int alphaOffset()`
- `public boolean hasLuminanceOrRed()`
- `public boolean hasLuminanceOrGreen()`
- `public boolean hasLuminanceOrBlue()`
- `public boolean hasLuminanceOrAlpha()`
- `public int luminanceOrRedOffset()`
- `public int luminanceOrGreenOffset()`
- `public int luminanceOrBlueOffset()`
- `public int luminanceOrAlphaOffset()`
- `public boolean supportedByStb()`
- `static NativeImage.Format getStbFormat(int p_85168_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class NativeImage.InternalGlFormat

*enum* `com.mojang.blaze3d.platform.Class NativeImage.InternalGlFormat`

Enclosing class: NativeImage

### Fields
- `private final int glFormat`

### Methods
- `public static NativeImage.InternalGlFormat[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static NativeImage.InternalGlFormat valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int glFormat()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ClipboardManager

*class* `com.mojang.blaze3d.platform.ClipboardManager`

### Fields
- `public static final int FORMAT_UNAVAILABLE` (= 65545)
- `private final ByteBuffer clipboardScratchBuffer`

### Methods
- `public String getClipboard(long p_83996_,  org.lwjgl.glfw.GLFWErrorCallbackI p_83997_)`
- `private static void pushClipboard(long p_83992_,  ByteBuffer p_83993_,  byte[] p_83994_)`
- `public void setClipboard(long p_83989_,  String p_83990_)`

## DebugMemoryUntracker

*class* `com.mojang.blaze3d.platform.DebugMemoryUntracker`

### Fields
- `@Nullable private static final MethodHandle UNTRACK`

### Methods
- `public static void untrack(long p_84002_)`
- `public static void untrack(org.lwjgl.system.Pointer p_84004_)`

## DisplayData

*class* `com.mojang.blaze3d.platform.DisplayData`

### Fields
- `public final int width`
- `public final int height`
- `public final OptionalInt fullscreenWidth`
- `public final OptionalInt fullscreenHeight`
- `public final boolean isFullscreen`

## GlConst

*class* `com.mojang.blaze3d.platform.GlConst`

### Fields
- `public static final int GL_READ_FRAMEBUFFER` (= 36008)
- `public static final int GL_DRAW_FRAMEBUFFER` (= 36009)
- `public static final int GL_TRUE` (= 1)
- `public static final int GL_FALSE` (= 0)
- `public static final int GL_NONE` (= 0)
- `public static final int GL_LINES` (= 1)
- `public static final int GL_LINE_STRIP` (= 3)
- `public static final int GL_TRIANGLE_STRIP` (= 5)
- `public static final int GL_TRIANGLE_FAN` (= 6)
- `public static final int GL_TRIANGLES` (= 4)
- `public static final int GL_WRITE_ONLY` (= 35001)
- `public static final int GL_EQUAL` (= 514)
- `public static final int GL_LEQUAL` (= 515)
- `public static final int GL_GREATER` (= 516)
- `public static final int GL_GEQUAL` (= 518)
- `public static final int GL_ALWAYS` (= 519)
- `public static final int GL_TEXTURE_MAG_FILTER` (= 10240)
- `public static final int GL_TEXTURE_MIN_FILTER` (= 10241)
- `public static final int GL_TEXTURE_WRAP_S` (= 10242)
- `public static final int GL_TEXTURE_WRAP_T` (= 10243)
- `public static final int GL_NEAREST` (= 9728)
- `public static final int GL_LINEAR` (= 9729)
- `public static final int GL_NEAREST_MIPMAP_LINEAR` (= 9986)
- `public static final int GL_LINEAR_MIPMAP_LINEAR` (= 9987)
- `public static final int GL_CLAMP_TO_EDGE` (= 33071)
- `public static final int GL_FRONT` (= 1028)
- `public static final int GL_FRONT_AND_BACK` (= 1032)
- `public static final int GL_LINE` (= 6913)
- `public static final int GL_FILL` (= 6914)
- `public static final int GL_BYTE` (= 5120)
- `public static final int GL_UNSIGNED_BYTE` (= 5121)
- `public static final int GL_SHORT` (= 5122)
- `public static final int GL_UNSIGNED_SHORT` (= 5123)
- `public static final int GL_INT` (= 5124)
- `public static final int GL_UNSIGNED_INT` (= 5125)
- `public static final int GL_FLOAT` (= 5126)
- `public static final int GL_ZERO` (= 0)
- `public static final int GL_ONE` (= 1)
- `public static final int GL_SRC_COLOR` (= 768)
- `public static final int GL_ONE_MINUS_SRC_COLOR` (= 769)
- `public static final int GL_SRC_ALPHA` (= 770)
- `public static final int GL_ONE_MINUS_SRC_ALPHA` (= 771)
- `public static final int GL_DST_ALPHA` (= 772)
- `public static final int GL_ONE_MINUS_DST_ALPHA` (= 773)
- `public static final int GL_DST_COLOR` (= 774)
- `public static final int GL_ONE_MINUS_DST_COLOR` (= 775)
- `public static final int GL_REPLACE` (= 7681)
- `public static final int GL_DEPTH_BUFFER_BIT` (= 256)
- `public static final int GL_COLOR_BUFFER_BIT` (= 16384)
- `public static final int GL_RGBA8` (= 32856)
- `public static final int GL_PROXY_TEXTURE_2D` (= 32868)
- `public static final int GL_RGBA` (= 6408)
- `public static final int GL_TEXTURE_WIDTH` (= 4096)
- `public static final int GL_BGR` (= 32992)
- `public static final int GL_FUNC_ADD` (= 32774)
- `public static final int GL_MIN` (= 32775)
- `public static final int GL_MAX` (= 32776)
- `public static final int GL_FUNC_SUBTRACT` (= 32778)
- `public static final int GL_FUNC_REVERSE_SUBTRACT` (= 32779)
- `public static final int GL_DEPTH_COMPONENT24` (= 33190)
- `public static final int GL_STATIC_DRAW` (= 35044)
- `public static final int GL_DYNAMIC_DRAW` (= 35048)
- `public static final int GL_UNPACK_SWAP_BYTES` (= 3312)
- `public static final int GL_UNPACK_LSB_FIRST` (= 3313)
- `public static final int GL_UNPACK_ROW_LENGTH` (= 3314)
- `public static final int GL_UNPACK_SKIP_ROWS` (= 3315)
- `public static final int GL_UNPACK_SKIP_PIXELS` (= 3316)
- `public static final int GL_UNPACK_ALIGNMENT` (= 3317)
- `public static final int GL_PACK_ALIGNMENT` (= 3333)
- `public static final int GL_MAX_TEXTURE_SIZE` (= 3379)
- `public static final int GL_TEXTURE_2D` (= 3553)
- `public static final int GL_DEPTH_COMPONENT` (= 6402)
- `public static final int GL_DEPTH_COMPONENT32` (= 33191)
- `public static final int GL_FRAMEBUFFER` (= 36160)
- `public static final int GL_RENDERBUFFER` (= 36161)
- `public static final int GL_COLOR_ATTACHMENT0` (= 36064)
- `public static final int GL_DEPTH_ATTACHMENT` (= 36096)
- `public static final int GL_FRAMEBUFFER_COMPLETE` (= 36053)
- `public static final int GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT` (= 36054)
- `public static final int GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT` (= 36055)
- `public static final int GL_FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER` (= 36059)
- `public static final int GL_FRAMEBUFFER_INCOMPLETE_READ_BUFFER` (= 36060)
- `public static final int GL_FRAMEBUFFER_UNSUPPORTED` (= 36061)
- `public static final int GL_LINK_STATUS` (= 35714)
- `public static final int GL_COMPILE_STATUS` (= 35713)
- `public static final int GL_VERTEX_SHADER` (= 35633)
- `public static final int GL_FRAGMENT_SHADER` (= 35632)
- `public static final int GL_TEXTURE0` (= 33984)
- `public static final int GL_TEXTURE1` (= 33985)
- `public static final int GL_TEXTURE2` (= 33986)
- `public static final int GL_DEPTH_TEXTURE_MODE` (= 34891)
- `public static final int GL_TEXTURE_COMPARE_MODE` (= 34892)
- `public static final int GL_ARRAY_BUFFER` (= 34962)
- `public static final int GL_ELEMENT_ARRAY_BUFFER` (= 34963)
- `public static final int GL_ALPHA_BIAS` (= 3357)
- `public static final int GL_RGB` (= 6407)
- `public static final int GL_RG` (= 33319)
- `public static final int GL_RED` (= 6403)
- `public static final int GL_OUT_OF_MEMORY` (= 1285)

## GlDebug

*class* `com.mojang.blaze3d.platform.GlDebug`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int CIRCULAR_LOG_SIZE` (= 10)
- `private static final Queue<GlDebug.LogEntry> MESSAGE_BUFFER`
- `@Nullable private static volatile GlDebug.LogEntry lastEntry`
- `private static final List<Integer> DEBUG_LEVELS`
- `private static final List<Integer> DEBUG_LEVELS_ARB`
- `private static boolean debugEnabled`

### Methods
- `private static String printUnknownToken(int p_84037_)`
- `public static String sourceToString(int p_84056_)`
- `public static String typeToString(int p_84058_)`
- `public static String severityToString(int p_84060_)`
- `private static void printDebugLog(int p_84039_,  int p_84040_,  int p_84041_,  int p_84042_,  int p_84043_,  long p_84044_,  long p_84045_)`
- `public static List<String> getLastOpenGlDebugMessages()`
- `public static boolean isDebugEnabled()`
- `public static void enableDebugCallback(int p_84050_,  boolean p_84051_)`

## GlDebug.LogEntry

*class* `com.mojang.blaze3d.platform.GlDebug.LogEntry`

Enclosing class: GlDebug

### Fields
- `private final int id`
- `private final int source`
- `private final int type`
- `private final int severity`
- `private final String message`
- `int count`

### Methods
- `boolean isSame(int p_166240_,  int p_166241_,  int p_166242_,  int p_166243_,  String p_166244_)`
- `public String toString()`

## GlStateManager

*class* `com.mojang.blaze3d.platform.GlStateManager`

### Fields
- `private static final boolean ON_LINUX`
- `public static final int TEXTURE_COUNT` (= 12)
- `private static final GlStateManager.BlendState BLEND`
- `private static final GlStateManager.DepthState DEPTH`
- `private static final GlStateManager.CullState CULL`
- `private static final GlStateManager.PolygonOffsetState POLY_OFFSET`
- `private static final GlStateManager.ColorLogicState COLOR_LOGIC`
- `private static final GlStateManager.StencilState STENCIL`
- `private static final GlStateManager.ScissorState SCISSOR`
- `private static int activeTexture`
- `private static final GlStateManager.TextureState[] TEXTURES`
- `private static final GlStateManager.ColorMask COLOR_MASK`
- `public static float lastBrightnessX`
- `public static float lastBrightnessY`

### Methods
- `public static void _disableScissorTest()`
- `public static void _enableScissorTest()`
- `public static void _scissorBox(int p_84169_,  int p_84170_,  int p_84171_,  int p_84172_)`
- `public static void _disableDepthTest()`
- `public static void _enableDepthTest()`
- `public static void _depthFunc(int p_84324_)`
- `public static void _depthMask(boolean p_84299_)`
- `public static void _disableBlend()`
- `public static void _enableBlend()`
- `public static void _blendFunc(int p_84329_,  int p_84330_)`
- `public static void _blendFuncSeparate(int p_84336_,  int p_84337_,  int p_84338_,  int p_84339_)`
- `public static void _blendEquation(int p_84380_)`
- `public static int glGetProgrami(int p_84382_,  int p_84383_)`
- `public static void glAttachShader(int p_84424_,  int p_84425_)`
- `public static void glDeleteShader(int p_84422_)`
- `public static int glCreateShader(int p_84448_)`
- `public static void glShaderSource(int p_157117_,  List<String> p_157118_)`
- `public static void glCompileShader(int p_84466_)`
- `public static int glGetShaderi(int p_84450_,  int p_84451_)`
- `public static void _glUseProgram(int p_84479_)`
- `public static int glCreateProgram()`
- `public static void glDeleteProgram(int p_84485_)`
- `public static void glLinkProgram(int p_84491_)`
- `public static int _glGetUniformLocation(int p_84346_,  CharSequence p_84347_)`
- `public static void _glUniform1(int p_84264_,  IntBuffer p_84265_)`
- `public static void _glUniform1i(int p_84468_,  int p_84469_)`
- `public static void _glUniform1(int p_84349_,  FloatBuffer p_84350_)`
- `public static void _glUniform2(int p_84352_,  IntBuffer p_84353_)`
- `public static void _glUniform2(int p_84402_,  FloatBuffer p_84403_)`
- `public static void _glUniform3(int p_84405_,  IntBuffer p_84406_)`
- `public static void _glUniform3(int p_84436_,  FloatBuffer p_84437_)`
- `public static void _glUniform4(int p_84439_,  IntBuffer p_84440_)`
- `public static void _glUniform4(int p_84462_,  FloatBuffer p_84463_)`
- `public static void _glUniformMatrix2(int p_84270_,  boolean p_84271_,  FloatBuffer p_84272_)`
- `public static void _glUniformMatrix3(int p_84355_,  boolean p_84356_,  FloatBuffer p_84357_)`
- `public static void _glUniformMatrix4(int p_84408_,  boolean p_84409_,  FloatBuffer p_84410_)`
- `public static int _glGetAttribLocation(int p_84399_,  CharSequence p_84400_)`
- `public static void _glBindAttribLocation(int p_157062_,  int p_157063_,  CharSequence p_157064_)`
- `public static int _glGenBuffers()`
- `public static int _glGenVertexArrays()`
- `public static void _glBindBuffer(int p_84481_,  int p_84482_)`
- `public static void _glBindVertexArray(int p_157069_)`
- `public static void _glBufferData(int p_84257_,  ByteBuffer p_84258_,  int p_84259_)`
- `public static void _glBufferData(int p_157071_,  long p_157072_,  int p_157073_)`
- `@Nullable public static ByteBuffer _glMapBuffer(int p_157091_,  int p_157092_)`
- `public static void _glUnmapBuffer(int p_157099_)`
- `public static void _glDeleteBuffers(int p_84497_)`
- `public static void _glCopyTexSubImage2D(int p_84180_,  int p_84181_,  int p_84182_,  int p_84183_,  int p_84184_,  int p_84185_,  int p_84186_,  int p_84187_)`
- `public static void _glDeleteVertexArrays(int p_157077_)`
- `public static void _glBindFramebuffer(int p_84487_,  int p_84488_)`
- `public static void _glBlitFrameBuffer(int p_84189_,  int p_84190_,  int p_84191_,  int p_84192_,  int p_84193_,  int p_84194_,  int p_84195_,  int p_84196_,  int p_84197_,  int p_84198_)`
- `public static void _glBindRenderbuffer(int p_157066_,  int p_157067_)`
- `public static void _glDeleteRenderbuffers(int p_157075_)`
- `public static void _glDeleteFramebuffers(int p_84503_)`
- `public static int glGenFramebuffers()`
- `public static int glGenRenderbuffers()`
- `public static void _glRenderbufferStorage(int p_157094_,  int p_157095_,  int p_157096_,  int p_157097_)`
- `public static void _glFramebufferRenderbuffer(int p_157085_,  int p_157086_,  int p_157087_,  int p_157088_)`
- `public static int glCheckFramebufferStatus(int p_84509_)`
- `public static void _glFramebufferTexture2D(int p_84174_,  int p_84175_,  int p_84176_,  int p_84177_,  int p_84178_)`
- `public static int getBoundFramebuffer()`
- `public static void glActiveTexture(int p_84515_)`
- `public static void glBlendFuncSeparate(int p_84389_,  int p_84390_,  int p_84391_,  int p_84392_)`
- `public static String glGetShaderInfoLog(int p_84493_,  int p_84494_)`
- `public static String glGetProgramInfoLog(int p_84499_,  int p_84500_)`
- `public static void setupLevelDiffuseLighting(org.joml.Vector3f p_254343_,  org.joml.Vector3f p_254532_,  org.joml.Matrix4f p_254339_)`
- `public static void setupGuiFlatDiffuseLighting(org.joml.Vector3f p_254237_,  org.joml.Vector3f p_253658_)`
- `public static void setupGui3DDiffuseLighting(org.joml.Vector3f p_254290_,  org.joml.Vector3f p_254528_)`
- `public static void _enableCull()`
- `public static void _disableCull()`
- `public static void _polygonMode(int p_84517_,  int p_84518_)`
- `public static void _enablePolygonOffset()`
- `public static void _disablePolygonOffset()`
- `public static void _polygonOffset(float p_84137_,  float p_84138_)`
- `public static void _enableColorLogicOp()`
- `public static void _disableColorLogicOp()`
- `public static void _logicOp(int p_84533_)`
- `public static void _activeTexture(int p_84539_)`
- `public static void _texParameter(int p_84161_,  int p_84162_,  float p_84163_)`
- `public static void _texParameter(int p_84332_,  int p_84333_,  int p_84334_)`
- `public static int _getTexLevelParameter(int p_84385_,  int p_84386_,  int p_84387_)`
- `public static int _genTexture()`
- `public static void _genTextures(int[] p_84306_)`
- `public static void _deleteTexture(int p_84542_)`
- `public static void _deleteTextures(int[] p_84366_)`
- `public static void _bindTexture(int p_84545_)`
- `public static int _getActiveTexture()`
- `public static void _texImage2D(int p_84210_,  int p_84211_,  int p_84212_,  int p_84213_,  int p_84214_,  int p_84215_,  int p_84216_,  int p_84217_,  @Nullable  IntBuffer p_84218_)`
- `public static void _texSubImage2D(int p_84200_,  int p_84201_,  int p_84202_,  int p_84203_,  int p_84204_,  int p_84205_,  int p_84206_,  int p_84207_,  long p_84208_)`
- `public static void upload(int p_287776_,  int p_287602_,  int p_287633_,  int p_287778_,  int p_287752_,  NativeImage.Format p_287608_,  IntBuffer p_287753_,  Consumer<IntBuffer> p_287739_)`
- `private static void _upload(int p_287672_,  int p_287577_,  int p_287618_,  int p_287777_,  int p_287707_,  NativeImage.Format p_287692_,  IntBuffer p_287674_,  Consumer<IntBuffer> p_287588_)`
- `public static void _getTexImage(int p_84228_,  int p_84229_,  int p_84230_,  int p_84231_,  long p_84232_)`
- `public static void _viewport(int p_84431_,  int p_84432_,  int p_84433_,  int p_84434_)`
- `public static void _colorMask(boolean p_84301_,  boolean p_84302_,  boolean p_84303_,  boolean p_84304_)`
- `public static void _stencilFunc(int p_84427_,  int p_84428_,  int p_84429_)`
- `public static void _stencilMask(int p_84551_)`
- `public static void _stencilOp(int p_84453_,  int p_84454_,  int p_84455_)`
- `public static void _clearDepth(double p_84122_)`
- `public static void _clearColor(float p_84319_,  float p_84320_,  float p_84321_,  float p_84322_)`
- `public static void _clearStencil(int p_84554_)`
- `public static void _clear(int p_84267_,  boolean p_84268_)`
- `public static void _glDrawPixels(int p_157079_,  int p_157080_,  int p_157081_,  int p_157082_,  long p_157083_)`
- `public static void _vertexAttribPointer(int p_84239_,  int p_84240_,  int p_84241_,  boolean p_84242_,  int p_84243_,  long p_84244_)`
- `public static void _vertexAttribIPointer(int p_157109_,  int p_157110_,  int p_157111_,  int p_157112_,  long p_157113_)`
- `public static void _enableVertexAttribArray(int p_84566_)`
- `public static void _disableVertexAttribArray(int p_84087_)`
- `public static void _drawElements(int p_157054_,  int p_157055_,  int p_157056_,  long p_157057_)`
- `public static void _pixelStore(int p_84523_,  int p_84524_)`
- `public static void _readPixels(int p_84220_,  int p_84221_,  int p_84222_,  int p_84223_,  int p_84224_,  int p_84225_,  ByteBuffer p_84226_)`
- `public static void _readPixels(int p_157101_,  int p_157102_,  int p_157103_,  int p_157104_,  int p_157105_,  int p_157106_,  long p_157107_)`
- `public static int _getError()`
- `public static String _getString(int p_84090_)`
- `public static int _getInteger(int p_84093_)`

## GlStateManager.BlendState

*class* `com.mojang.blaze3d.platform.GlStateManager.BlendState`

Enclosing class: GlStateManager

### Fields
- `public final GlStateManager.BooleanState mode`
- `public int srcRgb`
- `public int dstRgb`
- `public int srcAlpha`
- `public int dstAlpha`

## GlStateManager.BooleanState

*class* `com.mojang.blaze3d.platform.GlStateManager.BooleanState`

Enclosing class: GlStateManager

### Fields
- `private final int state`
- `private boolean enabled`

### Methods
- `public void disable()`
- `public void enable()`
- `public void setEnabled(boolean p_84591_)`

## GlStateManager.ColorLogicState

*class* `com.mojang.blaze3d.platform.GlStateManager.ColorLogicState`

Enclosing class: GlStateManager

### Fields
- `public final GlStateManager.BooleanState enable`
- `public int op`

## GlStateManager.ColorMask

*class* `com.mojang.blaze3d.platform.GlStateManager.ColorMask`

Enclosing class: GlStateManager

### Fields
- `public boolean red`
- `public boolean green`
- `public boolean blue`
- `public boolean alpha`

## GlStateManager.CullState

*class* `com.mojang.blaze3d.platform.GlStateManager.CullState`

Enclosing class: GlStateManager

### Fields
- `public final GlStateManager.BooleanState enable`
- `public int mode`

## GlStateManager.DepthState

*class* `com.mojang.blaze3d.platform.GlStateManager.DepthState`

Enclosing class: GlStateManager

### Fields
- `public final GlStateManager.BooleanState mode`
- `public boolean mask`
- `public int func`

## GlStateManager.PolygonOffsetState

*class* `com.mojang.blaze3d.platform.GlStateManager.PolygonOffsetState`

Enclosing class: GlStateManager

### Fields
- `public final GlStateManager.BooleanState fill`
- `public final GlStateManager.BooleanState line`
- `public float factor`
- `public float units`

## GlStateManager.ScissorState

*class* `com.mojang.blaze3d.platform.GlStateManager.ScissorState`

Enclosing class: GlStateManager

### Fields
- `public final GlStateManager.BooleanState mode`

## GlStateManager.StencilFunc

*class* `com.mojang.blaze3d.platform.GlStateManager.StencilFunc`

Enclosing class: GlStateManager

### Fields
- `public int func`
- `public int ref`
- `public int mask`

## GlStateManager.StencilState

*class* `com.mojang.blaze3d.platform.GlStateManager.StencilState`

Enclosing class: GlStateManager

### Fields
- `public final GlStateManager.StencilFunc func`
- `public int mask`
- `public int fail`
- `public int zfail`
- `public int zpass`

## GlStateManager.TextureState

*class* `com.mojang.blaze3d.platform.GlStateManager.TextureState`

Enclosing class: GlStateManager

### Fields
- `public int binding`

## GlUtil

*class* `com.mojang.blaze3d.platform.GlUtil`

### Methods
- `public static ByteBuffer allocateMemory(int p_166248_)`
- `public static void freeMemory(Buffer p_166252_)`
- `public static String getVendor()`
- `public static String getCpuInfo()`
- `public static String getRenderer()`
- `public static String getOpenGLVersion()`

## GLX

*class* `com.mojang.blaze3d.platform.GLX`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static String cpuInfo`

### Methods
- `public static String getOpenGLVersionString()`
- `public static int _getRefreshRate(Window p_69342_)`
- `public static String _getLWJGLVersion()`
- `public static LongSupplier _initGlfw()`
- `public static void _setGlfwErrorCallback(org.lwjgl.glfw.GLFWErrorCallbackI p_69353_)`
- `public static boolean _shouldClose(Window p_69356_)`
- `public static void _init(int p_69344_,  boolean p_69345_)`
- `public static String _getCpuInfo()`
- `public static void _renderCrosshair(int p_69348_,  boolean p_69349_,  boolean p_69350_,  boolean p_69351_)`
- `public static <T> T make(Supplier<T> p_69374_)`
- `public static <T> T make(T p_69371_,  Consumer<T> p_69372_)`

## InputConstants

*class* `com.mojang.blaze3d.platform.InputConstants`

### Fields
- `@Nullable private static final MethodHandle GLFW_RAW_MOUSE_MOTION_SUPPORTED`
- `private static final int GLFW_RAW_MOUSE_MOTION`
- `public static final int KEY_0` (= 48)
- `public static final int KEY_1` (= 49)
- `public static final int KEY_2` (= 50)
- `public static final int KEY_3` (= 51)
- `public static final int KEY_4` (= 52)
- `public static final int KEY_5` (= 53)
- `public static final int KEY_6` (= 54)
- `public static final int KEY_7` (= 55)
- `public static final int KEY_8` (= 56)
- `public static final int KEY_9` (= 57)
- `public static final int KEY_A` (= 65)
- `public static final int KEY_B` (= 66)
- `public static final int KEY_C` (= 67)
- `public static final int KEY_D` (= 68)
- `public static final int KEY_E` (= 69)
- `public static final int KEY_F` (= 70)
- `public static final int KEY_G` (= 71)
- `public static final int KEY_H` (= 72)
- `public static final int KEY_I` (= 73)
- `public static final int KEY_J` (= 74)
- `public static final int KEY_K` (= 75)
- `public static final int KEY_L` (= 76)
- `public static final int KEY_M` (= 77)
- `public static final int KEY_N` (= 78)
- `public static final int KEY_O` (= 79)
- `public static final int KEY_P` (= 80)
- `public static final int KEY_Q` (= 81)
- `public static final int KEY_R` (= 82)
- `public static final int KEY_S` (= 83)
- `public static final int KEY_T` (= 84)
- `public static final int KEY_U` (= 85)
- `public static final int KEY_V` (= 86)
- `public static final int KEY_W` (= 87)
- `public static final int KEY_X` (= 88)
- `public static final int KEY_Y` (= 89)
- `public static final int KEY_Z` (= 90)
- `public static final int KEY_F1` (= 290)
- `public static final int KEY_F2` (= 291)
- `public static final int KEY_F3` (= 292)
- `public static final int KEY_F4` (= 293)
- `public static final int KEY_F5` (= 294)
- `public static final int KEY_F6` (= 295)
- `public static final int KEY_F7` (= 296)
- `public static final int KEY_F8` (= 297)
- `public static final int KEY_F9` (= 298)
- `public static final int KEY_F10` (= 299)
- `public static final int KEY_F11` (= 300)
- `public static final int KEY_F12` (= 301)
- `public static final int KEY_F13` (= 302)
- `public static final int KEY_F14` (= 303)
- `public static final int KEY_F15` (= 304)
- `public static final int KEY_F16` (= 305)
- `public static final int KEY_F17` (= 306)
- `public static final int KEY_F18` (= 307)
- `public static final int KEY_F19` (= 308)
- `public static final int KEY_F20` (= 309)
- `public static final int KEY_F21` (= 310)
- `public static final int KEY_F22` (= 311)
- `public static final int KEY_F23` (= 312)
- `public static final int KEY_F24` (= 313)
- `public static final int KEY_F25` (= 314)
- `public static final int KEY_NUMLOCK` (= 282)
- `public static final int KEY_NUMPAD0` (= 320)
- `public static final int KEY_NUMPAD1` (= 321)
- `public static final int KEY_NUMPAD2` (= 322)
- `public static final int KEY_NUMPAD3` (= 323)
- `public static final int KEY_NUMPAD4` (= 324)
- `public static final int KEY_NUMPAD5` (= 325)
- `public static final int KEY_NUMPAD6` (= 326)
- `public static final int KEY_NUMPAD7` (= 327)
- `public static final int KEY_NUMPAD8` (= 328)
- `public static final int KEY_NUMPAD9` (= 329)
- `public static final int KEY_NUMPADCOMMA` (= 330)
- `public static final int KEY_NUMPADENTER` (= 335)
- `public static final int KEY_NUMPADEQUALS` (= 336)
- `public static final int KEY_DOWN` (= 264)
- `public static final int KEY_LEFT` (= 263)
- `public static final int KEY_RIGHT` (= 262)
- `public static final int KEY_UP` (= 265)
- `public static final int KEY_ADD` (= 334)
- `public static final int KEY_APOSTROPHE` (= 39)
- `public static final int KEY_BACKSLASH` (= 92)
- `public static final int KEY_COMMA` (= 44)
- `public static final int KEY_EQUALS` (= 61)
- `public static final int KEY_GRAVE` (= 96)
- `public static final int KEY_LBRACKET` (= 91)
- `public static final int KEY_MINUS` (= 45)
- `public static final int KEY_MULTIPLY` (= 332)
- `public static final int KEY_PERIOD` (= 46)
- `public static final int KEY_RBRACKET` (= 93)
- `public static final int KEY_SEMICOLON` (= 59)
- `public static final int KEY_SLASH` (= 47)
- `public static final int KEY_SPACE` (= 32)
- `public static final int KEY_TAB` (= 258)
- `public static final int KEY_LALT` (= 342)
- `public static final int KEY_LCONTROL` (= 341)
- `public static final int KEY_LSHIFT` (= 340)
- `public static final int KEY_LWIN` (= 343)
- `public static final int KEY_RALT` (= 346)
- `public static final int KEY_RCONTROL` (= 345)
- `public static final int KEY_RSHIFT` (= 344)
- `public static final int KEY_RWIN` (= 347)
- `public static final int KEY_RETURN` (= 257)
- `public static final int KEY_ESCAPE` (= 256)
- `public static final int KEY_BACKSPACE` (= 259)
- `public static final int KEY_DELETE` (= 261)
- `public static final int KEY_END` (= 269)
- `public static final int KEY_HOME` (= 268)
- `public static final int KEY_INSERT` (= 260)
- `public static final int KEY_PAGEDOWN` (= 267)
- `public static final int KEY_PAGEUP` (= 266)
- `public static final int KEY_CAPSLOCK` (= 280)
- `public static final int KEY_PAUSE` (= 284)
- `public static final int KEY_SCROLLLOCK` (= 281)
- `public static final int KEY_PRINTSCREEN` (= 283)
- `public static final int PRESS` (= 1)
- `public static final int RELEASE` (= 0)
- `public static final int REPEAT` (= 2)
- `public static final int MOUSE_BUTTON_LEFT` (= 0)
- `public static final int MOUSE_BUTTON_MIDDLE` (= 2)
- `public static final int MOUSE_BUTTON_RIGHT` (= 1)
- `public static final int MOD_CONTROL` (= 2)
- `public static final int CURSOR` (= 208897)
- `public static final int CURSOR_DISABLED` (= 212995)
- `public static final int CURSOR_NORMAL` (= 212993)
- `public static final InputConstants.Key UNKNOWN`

### Methods
- `public static InputConstants.Key getKey(int p_84828_,  int p_84829_)`
- `public static InputConstants.Key getKey(String p_84852_)`
- `public static boolean isKeyDown(long p_84831_,  int p_84832_)`
- `public static void setupKeyboardCallbacks(long p_84845_,  org.lwjgl.glfw.GLFWKeyCallbackI p_84846_,  org.lwjgl.glfw.GLFWCharModsCallbackI p_84847_)`
- `public static void setupMouseCallbacks(long p_84839_,  org.lwjgl.glfw.GLFWCursorPosCallbackI p_84840_,  org.lwjgl.glfw.GLFWMouseButtonCallbackI p_84841_,  org.lwjgl.glfw.GLFWScrollCallbackI p_84842_,  org.lwjgl.glfw.GLFWDropCallbackI p_84843_)`
- `public static void grabOrReleaseMouse(long p_84834_,  int p_84835_,  double p_84836_,  double p_84837_)`
- `public static boolean isRawMouseInputSupported()`
- `public static void updateRawMouseInput(long p_84849_,  boolean p_84850_)`

## InputConstants.Key

*class* `com.mojang.blaze3d.platform.InputConstants.Key`

Enclosing class: InputConstants

### Fields
- `private final String name`
- `private final InputConstants.Type type`
- `private final int value`
- `private final LazyLoadedValue<Component> displayName`
- `static final Map<String,InputConstants.Key> NAME_MAP`

### Methods
- `public InputConstants.Type getType()`
- `public int getValue()`
- `public String getName()`
- `public Component getDisplayName()`
- `public OptionalInt getNumericKeyValue()`
- `public boolean equals(Object p_84878_)`
- `public int hashCode()`
- `public String toString()`

## Lighting

*class* `com.mojang.blaze3d.platform.Lighting`

### Fields
- `private static final org.joml.Vector3f DIFFUSE_LIGHT_0`
- `private static final org.joml.Vector3f DIFFUSE_LIGHT_1`
- `private static final org.joml.Vector3f NETHER_DIFFUSE_LIGHT_0`
- `private static final org.joml.Vector3f NETHER_DIFFUSE_LIGHT_1`
- `private static final org.joml.Vector3f INVENTORY_DIFFUSE_LIGHT_0`
- `private static final org.joml.Vector3f INVENTORY_DIFFUSE_LIGHT_1`

### Methods
- `public static void setupNetherLevel(org.joml.Matrix4f p_254421_)`
- `public static void setupLevel(org.joml.Matrix4f p_254246_)`
- `public static void setupForFlatItems()`
- `public static void setupFor3DItems()`
- `public static void setupForEntityInInventory()`

## MacosUtil

*class* `com.mojang.blaze3d.platform.MacosUtil`

### Fields
- `private static final int NS_FULL_SCREEN_WINDOW_MASK` (= 16384)

### Methods
- `public static void toggleFullscreen(long p_182518_)`
- `private static Optional<ca.weblite.objc.NSObject> getNsWindow(long p_182522_)`
- `private static boolean isInKioskMode(ca.weblite.objc.NSObject p_182520_)`
- `private static void toggleFullscreen(ca.weblite.objc.NSObject p_182524_)`
- `public static void loadIcon(IoSupplier<InputStream> p_250929_)  throws IOException`
  - throws: IOException

## MemoryTracker

*class* `com.mojang.blaze3d.platform.MemoryTracker`

### Fields
- `private static final org.lwjgl.system.MemoryUtil.MemoryAllocator ALLOCATOR`

### Methods
- `public static ByteBuffer create(int p_182528_)`
- `public static ByteBuffer resize(ByteBuffer p_182530_,  int p_182531_)`

## Monitor

*class* `com.mojang.blaze3d.platform.Monitor`

### Fields
- `private final long monitor`
- `private final List<VideoMode> videoModes`
- `private VideoMode currentMode`
- `private int x`
- `private int y`

### Methods
- `public void refreshVideoModes()`
- `public VideoMode getPreferredVidMode(Optional<VideoMode> p_84949_)`
- `public int getVideoModeIndex(VideoMode p_84947_)`
- `public VideoMode getCurrentMode()`
- `public int getX()`
- `public int getY()`
- `public VideoMode getMode(int p_84945_)`
- `public int getModeCount()`
- `public long getMonitor()`
- `public String toString()`

## MonitorCreator

*interface* `com.mojang.blaze3d.platform.MonitorCreator`

### Methods
- `Monitor createMonitor(long p_84957_)`

## NativeImage

*class* `com.mojang.blaze3d.platform.NativeImage`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Set<StandardOpenOption> OPEN_OPTIONS`
- `private final NativeImage.Format format`
- `private final int width`
- `private final int height`
- `private final boolean useStbFree`
- `private long pixels`
- `private final long size`

### Methods
- `public String toString()`
- `private boolean isOutsideBounds(int p_166423_,  int p_166424_)`
- `public static NativeImage read(InputStream p_85059_)  throws IOException`
  - throws: IOException
- `public static NativeImage read(@Nullable  NativeImage.Format p_85049_,  InputStream p_85050_)  throws IOException`
  - throws: IOException
- `public static NativeImage read(ByteBuffer p_85063_)  throws IOException`
  - throws: IOException
- `public static NativeImage read(byte[] p_273041_)  throws IOException`
  - throws: IOException
- `public static NativeImage read(@Nullable  NativeImage.Format p_85052_,  ByteBuffer p_85053_)  throws IOException`
  - throws: IOException
- `private static void setFilter(boolean p_85082_,  boolean p_85083_)`
- `private void checkAllocated()`
- `public void close()`
- `public int getWidth()`
- `public int getHeight()`
- `public NativeImage.Format format()`
- `public int getPixelRGBA(int p_84986_,  int p_84987_)`
- `public void setPixelRGBA(int p_84989_,  int p_84990_,  int p_84991_)`
- `public NativeImage mappedCopy(IntUnaryOperator p_267084_)`
- `public void applyToAllPixels(IntUnaryOperator p_285490_)`
- `public int[] getPixelsRGBA()`
- `public void setPixelLuminance(int p_166403_,  int p_166404_,  byte p_166405_)`
- `public byte getRedOrLuminance(int p_166409_,  int p_166410_)`
- `public byte getGreenOrLuminance(int p_166416_,  int p_166417_)`
- `public byte getBlueOrLuminance(int p_166419_,  int p_166420_)`
- `public byte getLuminanceOrAlpha(int p_85088_,  int p_85089_)`
- `public void blendPixel(int p_166412_,  int p_166413_,  int p_166414_)`
- `@Deprecated public int[] makePixelArray()` (deprecated)
- `public void upload(int p_85041_,  int p_85042_,  int p_85043_,  boolean p_85044_)`
- `public void upload(int p_85004_,  int p_85005_,  int p_85006_,  int p_85007_,  int p_85008_,  int p_85009_,  int p_85010_,  boolean p_85011_,  boolean p_85012_)`
- `public void upload(int p_85014_,  int p_85015_,  int p_85016_,  int p_85017_,  int p_85018_,  int p_85019_,  int p_85020_,  boolean p_85021_,  boolean p_85022_,  boolean p_85023_,  boolean p_85024_)`
- `private void _upload(int p_85091_,  int p_85092_,  int p_85093_,  int p_85094_,  int p_85095_,  int p_85096_,  int p_85097_,  boolean p_85098_,  boolean p_85099_,  boolean p_85100_,  boolean p_85101_)`
- `public void downloadTexture(int p_85046_,  boolean p_85047_)`
- `public void downloadDepthBuffer(float p_166401_)`
- `public void drawPixels()`
- `public void writeToFile(File p_85057_)  throws IOException`
  - throws: IOException
- `public void copyFromFont(org.lwjgl.stb.STBTTFontinfo p_85069_,  int p_85070_,  int p_85071_,  int p_85072_,  float p_85073_,  float p_85074_,  float p_85075_,  float p_85076_,  int p_85077_,  int p_85078_)`
- `public void writeToFile(Path p_85067_)  throws IOException`
  - throws: IOException
- `public byte[] asByteArray()  throws IOException`
  - throws: IOException
- `private boolean writeToChannel(WritableByteChannel p_85065_)  throws IOException`
  - throws: IOException
- `public void copyFrom(NativeImage p_85055_)`
- `public void fillRect(int p_84998_,  int p_84999_,  int p_85000_,  int p_85001_,  int p_85002_)`
- `public void copyRect(int p_85026_,  int p_85027_,  int p_85028_,  int p_85029_,  int p_85030_,  int p_85031_,  boolean p_85032_,  boolean p_85033_)`
- `public void copyRect(NativeImage p_261644_,  int p_262056_,  int p_261490_,  int p_261959_,  int p_262110_,  int p_261522_,  int p_261505_,  boolean p_261480_,  boolean p_261622_)`
- `public void flipY()`
- `public void resizeSubRectTo(int p_85035_,  int p_85036_,  int p_85037_,  int p_85038_,  NativeImage p_85039_)`
- `public void untrack()`

## NativeImage.WriteCallback

*class* `com.mojang.blaze3d.platform.NativeImage.WriteCallback`

Enclosing class: NativeImage

### Fields
- `private final WritableByteChannel output`
- `@Nullable private IOException exception`

### Inherited fields
- from `org.lwjgl.system.Pointer`: `BITS32`, `BITS64`, `CLONG_SHIFT`, `CLONG_SIZE`, `POINTER_SHIFT`, `POINTER_SIZE`
- from `org.lwjgl.stb.STBIWriteCallbackI`: `CIF`

### Methods
- `public void invoke(long p_85204_,  long p_85205_,  int p_85206_)`
- `public void throwIfException()  throws IOException`
  - throws: IOException

### Inherited methods
- from `org.lwjgl.stb.STBIWriteCallback`: `create`, `create`, `createSafe`, `getData`
- from `org.lwjgl.system.Callback`: `address`, `equals`, `free`, `free`, `get`, `getSafe`, `hashCode`, `toString`
- from `org.lwjgl.system.CallbackI`: `address`
- from `org.lwjgl.system.NativeResource`: `close`
- from `org.lwjgl.stb.STBIWriteCallbackI`: `callback`, `getCallInterface`

## ScreenManager

*class* `com.mojang.blaze3d.platform.ScreenManager`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectMap<Monitor> monitors`
- `private final MonitorCreator monitorCreator`

### Methods
- `private void onMonitorChange(long p_85274_,  int p_85275_)`
- `@Nullable public Monitor getMonitor(long p_85272_)`
- `@Nullable public Monitor findBestMonitor(Window p_85277_)`
- `public static int clamp(int p_85268_,  int p_85269_,  int p_85270_)`
- `public void shutdown()`

## TextureUtil

*class* `com.mojang.blaze3d.platform.TextureUtil`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final int MIN_MIPMAP_LEVEL` (= 0)
- `private static final int DEFAULT_IMAGE_BUFFER_SIZE` (= 8192)

### Methods
- `public static int generateTextureId()`
- `public static void releaseTextureId(int p_85282_)`
- `public static void prepareImage(int p_85284_,  int p_85285_,  int p_85286_)`
- `public static void prepareImage(NativeImage.InternalGlFormat p_85293_,  int p_85294_,  int p_85295_,  int p_85296_)`
- `public static void prepareImage(int p_85288_,  int p_85289_,  int p_85290_,  int p_85291_)`
- `public static void prepareImage(NativeImage.InternalGlFormat p_85298_,  int p_85299_,  int p_85300_,  int p_85301_,  int p_85302_)`
- `private static void bind(int p_85310_)`
- `public static ByteBuffer readResource(InputStream p_85304_)  throws IOException`
  - throws: IOException
- `private static ByteBuffer readResource(ReadableByteChannel p_273208_,  int p_273297_)  throws IOException`
  - throws: IOException
- `public static void writeAsPNG(Path p_261923_,  String p_262070_,  int p_261655_,  int p_261576_,  int p_261966_,  int p_261775_)`
- `public static void writeAsPNG(Path p_285286_,  String p_285408_,  int p_285400_,  int p_285244_,  int p_285373_,  int p_285206_,  @Nullable  IntUnaryOperator p_284988_)`
- `public static Path getDebugTexturePath(Path p_262015_)`
- `public static Path getDebugTexturePath()`

## VideoMode

*class* `com.mojang.blaze3d.platform.VideoMode`

### Fields
- `private final int width`
- `private final int height`
- `private final int redBits`
- `private final int greenBits`
- `private final int blueBits`
- `private final int refreshRate`
- `private static final Pattern PATTERN`

### Methods
- `public int getWidth()`
- `public int getHeight()`
- `public int getRedBits()`
- `public int getGreenBits()`
- `public int getBlueBits()`
- `public int getRefreshRate()`
- `public boolean equals(Object p_85340_)`
- `public int hashCode()`
- `public String toString()`
- `public static Optional<VideoMode> read(@Nullable  String p_85334_)`
- `public String write()`

## Window

*class* `com.mojang.blaze3d.platform.Window`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final org.lwjgl.glfw.GLFWErrorCallback defaultErrorCallback`
- `private final WindowEventHandler eventHandler`
- `private final ScreenManager screenManager`
- `private final long window`
- `private int windowedX`
- `private int windowedY`
- `private int windowedWidth`
- `private int windowedHeight`
- `private Optional<VideoMode> preferredFullscreenVideoMode`
- `private boolean fullscreen`
- `private boolean actuallyFullscreen`
- `private int x`
- `private int y`
- `private int width`
- `private int height`
- `private int framebufferWidth`
- `private int framebufferHeight`
- `private int guiScaledWidth`
- `private int guiScaledHeight`
- `private double guiScale`
- `private String errorSection`
- `private boolean dirty`
- `private int framerateLimit`
- `private boolean vsync`

### Methods
- `public int getRefreshRate()`
- `public boolean shouldClose()`
- `public static void checkGlfwError(BiConsumer<Integer,String> p_85408_)`
- `public void setIcon(PackResources p_281860_,  IconSet p_282155_)  throws IOException`
  - throws: IOException
- `public void setErrorSection(String p_85404_)`
- `private void setBootErrorCallback()`
- `private static void bootCrash(int p_85413_,  long p_85414_)`
- `public void defaultErrorCallback(int p_85383_,  long p_85384_)`
- `public void setDefaultErrorCallback()`
- `public void updateVsync(boolean p_85410_)`
- `public void close()`
- `private void onMove(long p_85389_,  int p_85390_,  int p_85391_)`
- `private void onFramebufferResize(long p_85416_,  int p_85417_,  int p_85418_)`
- `private void refreshFramebufferSize()`
- `private void onResize(long p_85428_,  int p_85429_,  int p_85430_)`
- `private void onFocus(long p_85393_,  boolean p_85394_)`
- `private void onEnter(long p_85420_,  boolean p_85421_)`
- `public void setFramerateLimit(int p_85381_)`
- `public int getFramerateLimit()`
- `public void updateDisplay()`
- `public Optional<VideoMode> getPreferredFullscreenVideoMode()`
- `public void setPreferredFullscreenVideoMode(Optional<VideoMode> p_85406_)`
- `public void changeFullscreenVideoMode()`
- `private void setMode()`
- `public void toggleFullScreen()`
- `public void setWindowed(int p_166448_,  int p_166449_)`
- `private void updateFullscreen(boolean p_85432_)`
- `public int calculateScale(int p_85386_,  boolean p_85387_)`
- `public void setGuiScale(double p_85379_)`
- `public void setTitle(String p_85423_)`
- `public long getWindow()`
- `public boolean isFullscreen()`
- `public int getWidth()`
- `public int getHeight()`
- `public void setWidth(int p_166451_)`
- `public void setHeight(int p_166453_)`
- `public int getScreenWidth()`
- `public int getScreenHeight()`
- `public int getGuiScaledWidth()`
- `public int getGuiScaledHeight()`
- `public int getX()`
- `public int getY()`
- `public double getGuiScale()`
- `@Nullable public Monitor findBestMonitor()`
- `public void updateRawMouseInput(boolean p_85425_)`

## Window.WindowInitFailed

*class* `com.mojang.blaze3d.platform.Window.WindowInitFailed`

Enclosing class: Window

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## WindowEventHandler

*interface* `com.mojang.blaze3d.platform.WindowEventHandler`

### Methods
- `void setWindowActive(boolean p_85477_)`
- `void resizeDisplay()`
- `void cursorEntered()`
