# com.mojang.blaze3d.pipeline

- [Class MainTarget.AttachmentState](#class-maintarget.attachmentstate)
- [MainTarget](#maintarget)
- [MainTarget.Dimension](#maintarget.dimension)
- [RenderCall](#rendercall)
- [RenderPipeline](#renderpipeline)
- [RenderTarget](#rendertarget)
- [TextureTarget](#texturetarget)
## Class MainTarget.AttachmentState

*enum* `com.mojang.blaze3d.pipeline.Class MainTarget.AttachmentState`

Enclosing class: MainTarget

### Fields
- `private static final MainTarget.AttachmentState[] VALUES`

### Methods
- `public static MainTarget.AttachmentState[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static MainTarget.AttachmentState valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `MainTarget.AttachmentState with(MainTarget.AttachmentState p_166164_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## MainTarget

*class* `com.mojang.blaze3d.pipeline.MainTarget`

### Fields
- `public static final int DEFAULT_WIDTH` (= 854)
- `public static final int DEFAULT_HEIGHT` (= 480)
- `static final MainTarget.Dimension DEFAULT_DIMENSIONS`

### Inherited fields
- from `com.mojang.blaze3d.pipeline.RenderTarget`: `colorTextureId`, `depthBufferId`, `filterMode`, `frameBufferId`, `height`, `useDepth`, `viewHeight`, `viewWidth`, `width`

### Methods
- `private void createFrameBuffer(int p_166142_,  int p_166143_)`
- `private MainTarget.Dimension allocateAttachments(int p_166147_,  int p_166148_)`
- `private boolean allocateColorAttachment(MainTarget.Dimension p_166140_)`
- `private boolean allocateDepthAttachment(MainTarget.Dimension p_166145_)`

### Inherited methods
- from `com.mojang.blaze3d.pipeline.RenderTarget`: `bindRead`, `bindWrite`, `blitToScreen`, `blitToScreen`, `checkStatus`, `clear`, `copyDepthFrom`, `createBuffers`, `destroyBuffers`, `enableStencil`, `getColorTextureId`, `getDepthTextureId`, `isStencilEnabled`, `resize`, `setClearColor`, `setFilterMode`, `unbindRead`, `unbindWrite`

## MainTarget.Dimension

*class* `com.mojang.blaze3d.pipeline.MainTarget.Dimension`

Enclosing class: MainTarget

### Fields
- `public final int width`
- `public final int height`

### Methods
- `static List<MainTarget.Dimension> listWithFallback(int p_166174_,  int p_166175_)`
- `public boolean equals(Object p_166177_)`
- `public int hashCode()`
- `public String toString()`

## RenderCall

*interface* `com.mojang.blaze3d.pipeline.RenderCall`

### Methods
- `void execute()`

## RenderPipeline

*class* `com.mojang.blaze3d.pipeline.RenderPipeline`

### Fields
- `private final List<ConcurrentLinkedQueue<RenderCall>> renderCalls`
- `private volatile boolean isRecording`
- `private volatile int recordingBuffer`
- `private volatile boolean isProcessing`
- `private volatile int processedBuffer`
- `private volatile int renderingBuffer`

### Methods
- `public boolean canBeginRecording()`
- `public boolean beginRecording()`
- `public void recordRenderCall(RenderCall p_166184_)`
- `public void endRecording()`
- `public boolean canBeginProcessing()`
- `public boolean beginProcessing()`
- `public void processRecordedQueue()`
- `public void endProcessing()`
- `public ConcurrentLinkedQueue<RenderCall> startRendering()`
- `public ConcurrentLinkedQueue<RenderCall> getRecordingQueue()`
- `public ConcurrentLinkedQueue<RenderCall> getProcessedQueue()`

## RenderTarget

*class* `com.mojang.blaze3d.pipeline.RenderTarget`

### Fields
- `private static final int RED_CHANNEL` (= 0)
- `private static final int GREEN_CHANNEL` (= 1)
- `private static final int BLUE_CHANNEL` (= 2)
- `private static final int ALPHA_CHANNEL` (= 3)
- `public int width`
- `public int height`
- `public int viewWidth`
- `public int viewHeight`
- `public final boolean useDepth`
- `public int frameBufferId`
- `protected int colorTextureId`
- `protected int depthBufferId`
- `private final float[] clearChannels`
- `public int filterMode`
- `private boolean stencilEnabled`

### Methods
- `public void resize(int p_83942_,  int p_83943_,  boolean p_83944_)`
- `private void _resize(int p_83965_,  int p_83966_,  boolean p_83967_)`
- `public void destroyBuffers()`
- `public void copyDepthFrom(RenderTarget p_83946_)`
- `public void createBuffers(int p_83951_,  int p_83952_,  boolean p_83953_)`
- `public void setFilterMode(int p_83937_)`
- `public void checkStatus()`
- `public void bindRead()`
- `public void unbindRead()`
- `public void bindWrite(boolean p_83948_)`
- `private void _bindWrite(boolean p_83962_)`
- `public void unbindWrite()`
- `public void setClearColor(float p_83932_,  float p_83933_,  float p_83934_,  float p_83935_)`
- `public void blitToScreen(int p_83939_,  int p_83940_)`
- `public void blitToScreen(int p_83958_,  int p_83959_,  boolean p_83960_)`
- `private void _blitToScreen(int p_83972_,  int p_83973_,  boolean p_83974_)`
- `public void clear(boolean p_83955_)`
- `public int getColorTextureId()`
- `public int getDepthTextureId()`
- `public void enableStencil()`
  Attempts to enable 8 bits of stencil buffer on this FrameBuffer.
   Modders must call this directly to set things up.
   This is to prevent the default cause where graphics cards do not support stencil bits.
   Make sure to call this on the main render thread!
- `public boolean isStencilEnabled()`
  Returns wither or not this FBO has been successfully initialized with stencil bits.
   If not, and a modder wishes it to be, they must call enableStencil.

## TextureTarget

*class* `com.mojang.blaze3d.pipeline.TextureTarget`

### Inherited fields
- from `com.mojang.blaze3d.pipeline.RenderTarget`: `colorTextureId`, `depthBufferId`, `filterMode`, `frameBufferId`, `height`, `useDepth`, `viewHeight`, `viewWidth`, `width`

### Inherited methods
- from `com.mojang.blaze3d.pipeline.RenderTarget`: `bindRead`, `bindWrite`, `blitToScreen`, `blitToScreen`, `checkStatus`, `clear`, `copyDepthFrom`, `createBuffers`, `destroyBuffers`, `enableStencil`, `getColorTextureId`, `getDepthTextureId`, `isStencilEnabled`, `resize`, `setClearColor`, `setFilterMode`, `unbindRead`, `unbindWrite`
