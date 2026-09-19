# net.minecraftforge.fml.earlydisplay

- [Class ColourScheme](#class-colourscheme)
- [Class ElementShader.RenderType](#class-elementshader.rendertype)
- [Class SimpleBufferBuilder.Element](#class-simplebufferbuilder.element)
- [Class SimpleBufferBuilder.Format](#class-simplebufferbuilder.format)
- [Class SimpleBufferBuilder.Mode](#class-simplebufferbuilder.mode)
- [ColourScheme.Colour](#colourscheme.colour)
- [DisplayWindow](#displaywindow)
- [EarlyFramebuffer](#earlyframebuffer)
- [ElementShader](#elementshader)
- [PerformanceInfo](#performanceinfo)
- [QuadHelper](#quadhelper)
- [RenderElement](#renderelement)
- [RenderElement.BarPosition](#renderelement.barposition)
- [RenderElement.ColourFunction](#renderelement.colourfunction)
- [RenderElement.DisplayContext](#renderelement.displaycontext)
- [RenderElement.Initializer](#renderelement.initializer)
- [RenderElement.ProgressDisplay](#renderelement.progressdisplay)
- [RenderElement.Renderer](#renderelement.renderer)
- [RenderElement.TextGenerator](#renderelement.textgenerator)
- [RenderElement.TextureRenderer](#renderelement.texturerenderer)
- [SimpleBufferBuilder](#simplebufferbuilder)
- [SimpleFont](#simplefont)
- [SimpleFont.DisplayText](#simplefont.displaytext)
- [SimpleFont.Glyph](#simplefont.glyph)
- [SimpleFont.Pos](#simplefont.pos)
- [STBHelper](#stbhelper)
## Class ColourScheme

*enum* `net.minecraftforge.fml.earlydisplay.Class ColourScheme`

### Fields
- `private final ColourScheme.Colour background`
- `private final ColourScheme.Colour foreground`

### Methods
- `public static ColourScheme[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ColourScheme valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public ColourScheme.Colour background()`
- `public ColourScheme.Colour foreground()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ElementShader.RenderType

*enum* `net.minecraftforge.fml.earlydisplay.Class ElementShader.RenderType`

Enclosing class: ElementShader

### Methods
- `public static ElementShader.RenderType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ElementShader.RenderType valueOf(String name)`
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

## Class SimpleBufferBuilder.Element

*enum* `net.minecraftforge.fml.earlydisplay.Class SimpleBufferBuilder.Element`

Specifies a vertex element with a specific data type, number of primitives and a size in bytes.

Enclosing class: SimpleBufferBuilder

### Fields
- `public final int glType`
- `public final int count`
- `public final int width`

### Methods
- `public static SimpleBufferBuilder.Element[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SimpleBufferBuilder.Element valueOf(String name)`
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

## Class SimpleBufferBuilder.Format

*enum* `net.minecraftforge.fml.earlydisplay.Class SimpleBufferBuilder.Format`

Specifies a combination of vertex elements.

Enclosing class: SimpleBufferBuilder

### Fields
- `private final SimpleBufferBuilder.Element[] types`
- `public final int stride`

### Methods
- `public static SimpleBufferBuilder.Format[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SimpleBufferBuilder.Format valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public void bind()`
  set up the attribute pointers for this format.
  
   Assumes that an array buffer is already bound and ready to go.
- `public void enable()`
  Enables the vertex attributes this format contains.
- `public void disable()`
  Disables the vertex attributes this format contains.

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class SimpleBufferBuilder.Mode

*enum* `net.minecraftforge.fml.earlydisplay.Class SimpleBufferBuilder.Mode`

Represents a primitive mode that this builder is capable of buffering in.

Enclosing class: SimpleBufferBuilder

### Fields
- `public final int vertices`

### Methods
- `public static SimpleBufferBuilder.Mode[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SimpleBufferBuilder.Mode valueOf(String name)`
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

## ColourScheme.Colour

*record* `net.minecraftforge.fml.earlydisplay.ColourScheme.Colour`

Enclosing class: ColourScheme

### Fields
- `private final int red`
  The field for the red record component.
- `private final int green`
  The field for the green record component.
- `private final int blue`
  The field for the blue record component.

### Methods
- `public float redf()`
- `public float greenf()`
- `public float bluef()`
- `public int packedint(int a)`
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
- `public int red()`
  Returns the value of the red record component.
  - returns: the value of the red record component
- `public int green()`
  Returns the value of the green record component.
  - returns: the value of the green record component
- `public int blue()`
  Returns the value of the blue record component.
  - returns: the value of the blue record component

## DisplayWindow

*class* `net.minecraftforge.fml.earlydisplay.DisplayWindow`

The Loading Window that is opened Immediately after Forge starts.
 It is called from the ModDirTransformerDiscoverer, the soonest method that ModLauncher calls into Forge code.
 In this way, we can be sure that this will not run before any transformer or injection.

 The window itself is spun off into a secondary thread, and is handed off to the main game by Forge.

 Because it is created so early, this thread will "absorb" the context from OpenGL.
 Therefore, it is of utmost importance that the Context is made Current for the main thread before handoff,
 otherwise OS X will crash out.

 Based on the prior ClientVisualization, with some personal touches.

### Fields
- `private static final int[][] GL_VERSIONS`
- `private static final org.slf4j.Logger LOGGER`
- `private final AtomicBoolean animationTimerTrigger`
- `private ColourScheme colourScheme`
- `private ElementShader elementShader`
- `private RenderElement.DisplayContext context`
- `private List<RenderElement> elements`
- `private int framecount`
- `private EarlyFramebuffer framebuffer`
- `private ScheduledFuture<?> windowTick`
- `private ScheduledFuture<?> initializationFuture`
- `private PerformanceInfo performanceInfo`
- `private ScheduledFuture<?> performanceTick`
- `private long window`
- `private ScheduledExecutorService renderScheduler`
- `private int fbWidth`
- `private int fbHeight`
- `private int fbScale`
- `private int winWidth`
- `private int winHeight`
- `private int winX`
- `private int winY`
- `private final Semaphore renderLock`
- `private boolean maximized`
- `private String glVersion`
- `private SimpleFont font`
- `private Runnable repaintTick`
- `private static final long MINFRAMETIME`
- `private long nextFrameTime`
- `private static final String ERROR_URL` (= "https://links.minecraftforge.net/early-display-errors")
- `private Method loadingOverlay`

### Methods
- `public String name()`
  - returns: The name of this window provider. Do NOT use fmlearlywindow.
- `public Runnable initialize(String[] arguments)`
  Description copied from interface: ImmediateWindowProvider
  This is called very early on to initialize ourselves. Use this to initialize the window and other GL core resources.
  
   One thing we want to ensure is that we try and create the highest GL_PROFILE we can accomplish.
   GLFW_CONTEXT_VERSION_MAJOR,GLFW_CONTEXT_VERSION_MINOR should be as high as possible on the created window,
   and it should have all the typical profile settings.
  - param: arguments - The arguments provided to the Java process. This is the entire command line, so you can process
 stuff from it.
  - returns: A runnable that will be periodically ticked by FML during startup ON THE MAIN THREAD. This is usually
 a good place to put glfwPollEvents() tests.
- `private void renderThreadFunc()`
  The main render loop.
   renderThread executes this.
  
   Performs initialization and then ticks the screen at 20 fps.
   When the thread is killed, context is destroyed.
- `private void initRender(@Nullable  @Nullable String mcVersion,  String forgeVersion)`
  Render initialization methods called by the Render Thread.
   It compiles the fragment and vertex shaders for rendering text with STB, and sets up basic render framework.
  
   Nothing fancy, we just want to draw and render text.
- `void paintFramebuffer()`
  Called every frame by the Render Thread to draw to the screen.
- `public void render(int alpha)`
- `public Runnable start(@Nullable  @Nullable String mcVersion,  String forgeVersion)`
  Start the window and Render Thread; we're ready to go.
- `public String getGLVersion()`
  Description copied from interface: ImmediateWindowProvider
  This is called to construct a ForgeFeature for the GL_VERSION we
   managed to create for the window. Should be a string of the format {MAJOR}.{MINOR}, such as 4.6, 4.5 or such.
  - returns: the GL profile we created
- `private void crashElegantly(String errorDetails)`
- `public void initWindow(@Nullable  @Nullable String mcVersion)`
  Called to initialize the window when preparing for the Render Thread.
  
   The act of calling glfwInit here creates a concurrency issue; GL doesn't know whether we're gonna call any
   GL functions from the secondary thread and the main thread at the same time.
  
   It's then our job to make sure this doesn't happen, only calling GL functions where the Context is Current.
   As long as we can verify that, then GL (and things like OS X) have no complaints with doing this.
  - param: mcVersion - Minecraft Version
- `private void badWindowHandler(int code,  long desc)`
- `private void winResize(long window,  int width,  int height)`
- `private void fbResize(long window,  int width,  int height)`
- `private void winMove(long window,  int x,  int y)`
- `private void handleLastGLFWError(BiConsumer<Integer,String> handler)`
- `public long setupMinecraftWindow(IntSupplier width,  IntSupplier height,  Supplier<String> title,  LongSupplier monitorSupplier)`
  Hand-off the window to the vanilla game.
   Called on the main thread instead of the game's initialization.
  - param: width - This is the width of the window Mojang expects
  - param: height - This is the height of the Window Mojang expects.
  - param: title - This is the title for the window.
  - param: monitorSupplier - This is the monitor it should appear on.
  - returns: the Window we own.
- `public boolean positionWindow(Optional<Object> monitor,  IntConsumer widthSetter,  IntConsumer heightSetter,  IntConsumer xSetter,  IntConsumer ySetter)`
  Description copied from interface: ImmediateWindowProvider
  This is called after window handoff to allow us to tell Mojang about our window's position. This might give a
   preferrable user experience to users, because we just tell Mojang our truth, rather than accept theirs.
  - param: monitor - This is the monitor we're rendering on. Note that this is the Mojang monitor object. You might have trouble unwrapping it.
  - param: widthSetter - This sets the width on the Mojang side
  - param: heightSetter - This sets the height on the Mojang side
  - param: xSetter - This sets the x coordinate on the Mojang side
  - param: ySetter - This sets the y coordinate on the Mojang side
  - returns: true if you've handled the window positioning - this skips the "forced fullscreen" code until a later stage
- `public void updateFramebufferSize(IntConsumer width,  IntConsumer height)`
  Description copied from interface: ImmediateWindowProvider
  This will be called during the handoff to minecraft to update minecraft with the size of the framebuffer we have.
   Generally won't be called because Minecraft figures it out for itself.
  - param: width - Consumer of the framebuffer width
  - param: height - Consumer of the framebuffer height
- `public <T> Supplier<T> loadingOverlay(Supplier<?> mc,  Supplier<?> ri,  Consumer<Optional<Throwable>> ex,  boolean fade)`
  Description copied from interface: ImmediateWindowProvider
  Return a Supplier of an object extending the LoadingOverlay class from Mojang. This is what will be used once
   the Mojang window code has taken over rendering of the window, to render the later stages of the loading process.
  - param: mc - This supplies the Minecraft object
  - param: ri - This supplies the ReloadInstance object that tells us when the loading is finished
  - param: ex - This Consumes the final state of the loading - if it's an error you pass it the Throwable, otherwise you
 pass Optional.empty()
  - param: fade - This is the fade flag passed to LoadingOverlay. You probably want to ignore it.
  - returns: A supplier of your later LoadingOverlay screen.
- `public void updateModuleReads(ModuleLayer layer)`
  Description copied from interface: ImmediateWindowProvider
  This is called during the module loading process to allow us to find objects inside the GAME layer, such as a
   later loading screen.
  - param: layer - This is the GAME layer from ModLauncher
- `public int getFramebufferTextureId()`
- `public RenderElement.DisplayContext context()`
- `public void periodicTick()`
  Description copied from interface: ImmediateWindowProvider
  This is called periodically during the loading process to "tick" the window. It is typically the same as the Runnable
   from ImmediateWindowProvider.initialize(String[])
- `public void addMojangTexture(int textureId)`
- `public void close()`

## EarlyFramebuffer

*class* `net.minecraftforge.fml.earlydisplay.EarlyFramebuffer`

### Fields
- `private final int framebuffer`
- `private final int texture`
- `private final RenderElement.DisplayContext context`

### Methods
- `void activate()`
- `void deactivate()`
- `void draw(int windowFBWidth,  int windowFBHeight)`
- `int getTexture()`
- `public void close()`

## ElementShader

*class* `net.minecraftforge.fml.earlydisplay.ElementShader`

### Fields
- `private int program`
- `private int textureUniform`
- `private int screenSizeUniform`
- `private int renderTypeUniform`

### Methods
- `public void init()`
- `public void activate()`
- `public void updateTextureUniform(int textureNumber)`
- `public void updateScreenSizeUniform(int width,  int height)`
- `public void updateRenderTypeUniform(ElementShader.RenderType type)`
- `public void clear()`
- `public void close()`
- `public int program()`

## PerformanceInfo

*class* `net.minecraftforge.fml.earlydisplay.PerformanceInfo`

### Fields
- `private final OperatingSystemMXBean osBean`
- `private final MemoryMXBean memoryBean`
- `float memory`
- `private String text`

### Methods
- `void update()`
- `String text()`
- `float memory()`

## QuadHelper

*class* `net.minecraftforge.fml.earlydisplay.QuadHelper`

### Methods
- `public static void loadQuad(SimpleBufferBuilder bb,  float x0,  float x1,  float y0,  float y1,  float u0,  float u1,  float v0,  float v1,  int colour)`
- `public static void loadQuad(SimpleBufferBuilder bb,  float x0,  float x1,  float y0,  float y1,  float u0,  float u1,  float v0,  float v1)`

## RenderElement

*class* `net.minecraftforge.fml.earlydisplay.RenderElement`

### Fields
- `static final int INDEX_TEXTURE_OFFSET` (= 5)
- `private final SimpleBufferBuilder bb`
- `private final RenderElement.Renderer renderer`
- `static int globalAlpha`
- `private int retireCount`
- `private static final int BAR_HEIGHT` (= 20)
- `private static final int BAR_WIDTH` (= 400)

### Methods
- `public boolean render(RenderElement.DisplayContext ctx,  int count)`
- `public void retire(int frame)`
- `private static void startupLogMessages(SimpleBufferBuilder bb,  SimpleFont font,  RenderElement.DisplayContext context)`
- `public static RenderElement monag()`
- `public static RenderElement mojang(int textureId,  int frameStart)`
- `public static RenderElement logMessageOverlay(SimpleFont font)`
- `public static RenderElement forgeVersionOverlay(SimpleFont font,  String version)`
- `public static RenderElement squir()`
- `public static RenderElement anvil(SimpleFont font)`
- `public static RenderElement progressBars(SimpleFont font)`
- `public static RenderElement performanceBar(SimpleFont font)`
- `public static void startupProgressBars(SimpleFont font,  SimpleBufferBuilder buffer,  RenderElement.DisplayContext context,  int frameNumber)`
- `private static RenderElement.Renderer barRenderer(int cnt,  int alpha,  SimpleFont font,  ProgressMeter pm,  RenderElement.DisplayContext context)`
- `private static float[] indeterminateBar(int frame,  boolean isActive)`
- `private static void memoryInfo(SimpleFont font,  SimpleBufferBuilder buffer,  RenderElement.DisplayContext context,  int frameNumber)`
- `public static RenderElement.Renderer progressBar(RenderElement.BarPosition position,  RenderElement.ColourFunction colourFunction,  RenderElement.ProgressDisplay progressDisplay)`
- `private static RenderElement.Initializer initializeText(SimpleFont font,  RenderElement.TextGenerator textGenerator)`
- `private static void renderText(SimpleFont font,  RenderElement.TextGenerator textGenerator,  SimpleBufferBuilder bb,  RenderElement.DisplayContext context)`
- `private static RenderElement.TextGenerator text(int x,  int y,  String text,  int colour)`
- `private static RenderElement.Initializer initializeTexture(String textureFileName,  int size,  int textureNumber,  RenderElement.TextureRenderer positionAndColour)`
- `private static void renderTexture(SimpleBufferBuilder bb,  RenderElement.DisplayContext context,  int frame,  int[] size,  RenderElement.TextureRenderer positionAndColour)`
- `public static float clamp(float num,  float min,  float max)`
- `public static int clamp(int num,  int min,  int max)`
- `public static int hsvToRGB(float hue,  float saturation,  float value)`

## RenderElement.BarPosition

*interface* `net.minecraftforge.fml.earlydisplay.RenderElement.BarPosition`

Enclosing class: RenderElement

### Methods
- `int[] location(RenderElement.DisplayContext context)`

## RenderElement.ColourFunction

*interface* `net.minecraftforge.fml.earlydisplay.RenderElement.ColourFunction`

Enclosing class: RenderElement

### Methods
- `int colour(int frame)`

## RenderElement.DisplayContext

*record* `net.minecraftforge.fml.earlydisplay.RenderElement.DisplayContext`

Enclosing class: RenderElement

### Fields
- `private final int width`
  The field for the width record component.
- `private final int height`
  The field for the height record component.
- `private final int scale`
  The field for the scale record component.
- `private final ElementShader elementShader`
  The field for the elementShader record component.
- `private final ColourScheme colourScheme`
  The field for the colourScheme record component.
- `private final PerformanceInfo performance`
  The field for the performance record component.

### Methods
- `public int scaledWidth()`
- `public int scaledHeight()`
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
- `public int scale()`
  Returns the value of the scale record component.
  - returns: the value of the scale record component
- `public ElementShader elementShader()`
  Returns the value of the elementShader record component.
  - returns: the value of the elementShader record component
- `public ColourScheme colourScheme()`
  Returns the value of the colourScheme record component.
  - returns: the value of the colourScheme record component
- `public PerformanceInfo performance()`
  Returns the value of the performance record component.
  - returns: the value of the performance record component

## RenderElement.Initializer

*interface* `net.minecraftforge.fml.earlydisplay.RenderElement.Initializer`

All Superinterfaces: Supplier<RenderElement.Renderer>

Enclosing class: RenderElement

### Inherited methods
- from `java.util.function.Supplier`: `get`

## RenderElement.ProgressDisplay

*interface* `net.minecraftforge.fml.earlydisplay.RenderElement.ProgressDisplay`

Enclosing class: RenderElement

### Methods
- `float[] progress(int frame)`

## RenderElement.Renderer

*interface* `net.minecraftforge.fml.earlydisplay.RenderElement.Renderer`

Enclosing class: RenderElement

### Methods
- `void accept(SimpleBufferBuilder bb,  RenderElement.DisplayContext context,  int frame)`
- `default RenderElement.Renderer then(RenderElement.Renderer r)`

## RenderElement.TextGenerator

*interface* `net.minecraftforge.fml.earlydisplay.RenderElement.TextGenerator`

Enclosing class: RenderElement

### Methods
- `void accept(SimpleBufferBuilder bb,  SimpleFont fh,  RenderElement.DisplayContext ctx)`

## RenderElement.TextureRenderer

*interface* `net.minecraftforge.fml.earlydisplay.RenderElement.TextureRenderer`

Enclosing class: RenderElement

### Methods
- `void accept(SimpleBufferBuilder bb,  RenderElement.DisplayContext context,  int[] size,  int frame)`

## SimpleBufferBuilder

*class* `net.minecraftforge.fml.earlydisplay.SimpleBufferBuilder`

A very simple, Mojang inspired BufferBuilder.
 This has been customized for 2d rendering such as text and simple planar textures

 Not bound to any specific format, ideally should be held onto for re-use.

 Can be used for 'immediate mode' style rendering using draw(), or
 upload to external vertex arrays for proper instancing using finishAndUpload().

 This is a Triangles only buffer, all data uploaded is in Triangles.
 Quads are converted to triangles using 0, 1, 2, 0, 2, 3.

 Any given SimpleBufferBuilder.Format should have its individual SimpleBufferBuilder.Element components
 buffered in the order specified by the SimpleBufferBuilder.Format,
 followed by an endVertex() call to prepare for the next vertex.

 It is illegal to buffer primitives in any format other than the one specified to
 begin(Format, Mode).

### Fields
- `private static final org.lwjgl.system.MemoryUtil.MemoryAllocator ALLOCATOR`
- `private static final int[] VERTEX_ARRAYS`
- `private static final int[] VERTEX_BUFFERS`
- `private static final int[] VERTEX_BUFFER_LENGTHS`
- `private static int elementBuffer`
- `private static int elementBufferVertexLength`
- `private long bufferAddr`
- `private ByteBuffer buffer`
- `private SimpleBufferBuilder.Format format`
- `private SimpleBufferBuilder.Mode mode`
- `private boolean building`
- `private int elementIndex`
- `private int index`
- `private int vertices`

### Methods
- `public static void destroy()`
- `private static void ensureElementBufferLength(int vertices)`
- `public SimpleBufferBuilder begin(SimpleBufferBuilder.Format format,  SimpleBufferBuilder.Mode mode)`
  Start building a new set of vertex data in the
   given format and mode.
  - param: format - The format to start building in.
  - param: mode - The mode to start building in.
- `public SimpleBufferBuilder pos(float x,  float y)`
  Buffer a position element.
  - param: x - The x.
  - param: y - The y.
  - param: z - The z.
  - returns: The same builder.
- `public SimpleBufferBuilder tex(float u,  float v)`
  Buffer a texture element.
  - param: u - The u.
  - param: v - The v.
  - returns: The same builder.
- `public SimpleBufferBuilder colour(float r,  float g,  float b,  float a)`
  Buffer a color element.
  - param: r - The red component. (0-1)
  - param: g - The green component. (0-1)
  - param: b - The blue component. (0-1)
  - param: a - The alpha component. (0-1)
  - returns: The same buffer.
- `public SimpleBufferBuilder colour(int packedColor)`
  - param: packedColor - an ABGR packed int
  - returns: the same buffer.
- `public SimpleBufferBuilder colour(byte r,  byte g,  byte b,  byte a)`
  Buffer a color element.
  - param: r - The red component. (0-255)
  - param: g - The green component. (0-255)
  - param: b - The blue component. (0-255)
  - param: a - The alpha component. (0-255)
  - returns: The same buffer.
- `public SimpleBufferBuilder endVertex()`
  End building the current vertex and prepare for the next.
  - returns: The same builder.
- `private void ensureSpace(int newBytes)`
- `public int finishAndUpload()`
  Upload the current buffer.
  
   This will bind a GL15C.GL_ARRAY_BUFFER and GL15C.GL_ELEMENT_ARRAY_BUFFER
  
   The vertex data and index data is uploaded to their respective buffers.
  
   Uploading the buffers finishes drawing and resets for the next buffer operation.
  
   This should not be called in conjunction with draw()
  - returns: The number of indexes that were uploaded.
- `public void draw()`
  Upload and draw this buffer using one of a number of re-usable set of buffers.
  
   This will immediately upload the buffer, resetting this builder for the next
   buffer operation, and draw the uploaded data.
  
   You will need to bind shaders, textures, etc, before calling this function.
- `public void close()`
  Clear this builder's cached buffer.
  
   If you are completely done, call destroy()

## SimpleFont

*class* `net.minecraftforge.fml.earlydisplay.SimpleFont`

### Fields
- `private final int textureNumber`
- `private final int lineSpacing`
- `private final int descent`
- `private final int GLYPH_COUNT` (= 95)
- `private SimpleFont.Glyph[] glyphs`

### Methods
- `int lineSpacing()`
- `int textureNumber()`
- `int descent()`
- `public int stringWidth(String text)`
- `public SimpleBufferBuilder generateVerticesForTexts(int x,  int y,  SimpleBufferBuilder textBB,  SimpleFont.DisplayText... texts)`
  Generate vertices for a set of display texts
  - param: x - The starting screen x coordinate
  - param: y - The starting screen y coordinate
  - param: texts - Some SimpleFont.DisplayText to display
  - returns: a SimpleBufferBuilder that can draw the texts

## SimpleFont.DisplayText

*record* `net.minecraftforge.fml.earlydisplay.SimpleFont.DisplayText`

A piece of text to display

Enclosing class: SimpleFont

### Fields
- `private final String string`
  The field for the string record component.
- `private final int colour`
  The field for the colour record component.

### Methods
- `private byte[] asBytes()`
- `SimpleFont.Pos generateStringArray(SimpleFont font,  SimpleFont.Pos pos,  SimpleBufferBuilder bb)`
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
- `public String string()`
  Returns the value of the string record component.
  - returns: the value of the string record component
- `public int colour()`
  Returns the value of the colour record component.
  - returns: the value of the colour record component

## SimpleFont.Glyph

*record* `net.minecraftforge.fml.earlydisplay.SimpleFont.Glyph`

Enclosing class: SimpleFont

### Fields
- `private final char c`
  The field for the c record component.
- `private final int charwidth`
  The field for the charwidth record component.
- `private final int[] pos`
  The field for the pos record component.
- `private final float[] uv`
  The field for the uv record component.

### Methods
- `SimpleFont.Pos loadQuad(SimpleFont.Pos pos,  int colour,  SimpleBufferBuilder bb)`
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
- `public char c()`
  Returns the value of the c record component.
  - returns: the value of the c record component
- `public int charwidth()`
  Returns the value of the charwidth record component.
  - returns: the value of the charwidth record component
- `public int[] pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component
- `public float[] uv()`
  Returns the value of the uv record component.
  - returns: the value of the uv record component

## SimpleFont.Pos

*record* `net.minecraftforge.fml.earlydisplay.SimpleFont.Pos`

Enclosing class: SimpleFont

### Fields
- `private final int x`
  The field for the x record component.
- `private final int y`
  The field for the y record component.
- `private final int minx`
  The field for the minx record component.

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
- `public int x()`
  Returns the value of the x record component.
  - returns: the value of the x record component
- `public int y()`
  Returns the value of the y record component.
  - returns: the value of the y record component
- `public int minx()`
  Returns the value of the minx record component.
  - returns: the value of the minx record component

## STBHelper

*class* `net.minecraftforge.fml.earlydisplay.STBHelper`

### Methods
- `public static ByteBuffer readFromClasspath(String name,  int initialCapacity)`
- `public static int[] loadTextureFromClasspath(String file,  int size,  int textureNumber)`
- `public static ByteBuffer loadImageFromClasspath(String file,  int size,  int[] width,  int[] height,  int[] channels)`
