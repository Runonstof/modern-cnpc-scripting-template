# net.minecraft.client.shader

- [Framebuffer](#framebuffer)
- [Shader](#shader)
- [ShaderDefault](#shaderdefault)
- [ShaderGroup](#shadergroup)
- [ShaderLinkHelper](#shaderlinkhelper)
- [ShaderLoader](#shaderloader)
- [ShaderLoader.ShaderType](#shaderloader.shadertype)
- [ShaderManager](#shadermanager)
- [ShaderUniform](#shaderuniform)
## Framebuffer

*class* `net.minecraft.client.shader.Framebuffer`

### Fields
- `public int framebufferTextureWidth`
- `public int framebufferTextureHeight`
- `public int framebufferWidth`
- `public int framebufferHeight`
- `public boolean useDepth`
- `public int framebufferObject`
- `public int framebufferTexture`
- `public int depthBuffer`
- `public float[] framebufferColor`
- `public int framebufferFilter`

### Methods
- `public void createBindFramebuffer(int width,  int height)`
- `public void deleteFramebuffer()`
- `public void createFramebuffer(int width,  int height)`
- `public void setFramebufferFilter(int framebufferFilterIn)`
- `public void checkFramebufferComplete()`
- `public void bindFramebufferTexture()`
- `public void unbindFramebufferTexture()`
- `public void bindFramebuffer(boolean p_147610_1_)`
- `public void unbindFramebuffer()`
- `public void setFramebufferColor(float red,  float green,  float blue,  float alpha)`
- `public void framebufferRender(int width,  int height)`
- `public void framebufferRenderExt(int width,  int height,  boolean p_178038_3_)`
- `public void framebufferClear()`
- `public boolean enableStencil()`
  Attempts to enabled 8 bits of stencil buffer on this FrameBuffer.
   Modders must call this directly to set things up.
   This is to prevent the default cause where graphics cards do not support stencil bits.
   Modders should check the below 'isStencilEnabled' to check if another modder has already enabled them.
  
   Note:
   As of now the only thing that is checked is if FBOs are supported entirely, in the future
   we may expand to check for errors.
  - returns: True if the FBO was re-initialized with stencil bits.
- `public boolean isStencilEnabled()`
  Returns wither or not this FBO has been successfully initialized with stencil bits.
   If not, and a modder wishes it to be, they must call enableStencil.

## Shader

*class* `net.minecraft.client.shader.Shader`

### Fields
- `public final Framebuffer framebufferIn`
- `public final Framebuffer framebufferOut`

### Methods
- `public void deleteShader()`
- `public void addAuxFramebuffer(java.lang.String auxName,  java.lang.Object auxFramebufferIn,  int width,  int height)`
- `public void setProjectionMatrix(Matrix4f projectionMatrixIn)`
- `public void render(float partialTicks)`
- `public ShaderManager getShaderManager()`

## ShaderDefault

*class* `net.minecraft.client.shader.ShaderDefault`

### Methods
- `public void set(float p_148090_1_)`
- `public void set(float p_148087_1_,  float p_148087_2_)`
- `public void set(float p_148095_1_,  float p_148095_2_,  float p_148095_3_)`
- `public void set(float p_148081_1_,  float p_148081_2_,  float p_148081_3_,  float p_148081_4_)`
- `public void setSafe(float p_148092_1_,  float p_148092_2_,  float p_148092_3_,  float p_148092_4_)`
- `public void set(int p_148083_1_,  int p_148083_2_,  int p_148083_3_,  int p_148083_4_)`
- `public void set(float[] p_148097_1_)`
- `public void set(float m00,  float m01,  float m02,  float m03,  float m10,  float m11,  float m12,  float m13,  float m20,  float m21,  float m22,  float m23,  float m30,  float m31,  float m32,  float m33)`
- `public void set(Matrix4f matrix)`

### Inherited methods
- from `net.minecraft.client.shader.ShaderUniform`: `getShaderName`, `parseType`, `setUniformLocation`, `upload`

## ShaderGroup

*class* `net.minecraft.client.shader.ShaderGroup`

### Methods
- `public void parseGroup(TextureManager p_152765_1_,  ResourceLocation p_152765_2_)  throws JsonException,  java.io.IOException,  JsonSyntaxException`
  - throws: JsonException
  - throws: java.io.IOException
  - throws: JsonSyntaxException
- `public Framebuffer getFramebufferRaw(java.lang.String attributeName)`
- `public void addFramebuffer(java.lang.String name,  int width,  int height)`
- `public void deleteShaderGroup()`
- `public Shader addShader(java.lang.String programName,  Framebuffer framebufferIn,  Framebuffer framebufferOut)  throws JsonException,  java.io.IOException`
  - throws: JsonException
  - throws: java.io.IOException
- `public void createBindFramebuffers(int width,  int height)`
- `public void render(float partialTicks)`
- `public final java.lang.String getShaderGroupName()`

## ShaderLinkHelper

*class* `net.minecraft.client.shader.ShaderLinkHelper`

### Methods
- `public static void setNewStaticShaderLinkHelper()`
- `public static ShaderLinkHelper getStaticShaderLinkHelper()`
- `public void deleteShader(ShaderManager manager)`
- `public int createProgram()  throws JsonException`
  - throws: JsonException
- `public void linkProgram(ShaderManager manager)  throws java.io.IOException`
  - throws: java.io.IOException

## ShaderLoader

*class* `net.minecraft.client.shader.ShaderLoader`

### Methods
- `public void attachShader(ShaderManager manager)`
- `public void deleteShader(ShaderManager manager)`
- `public java.lang.String getShaderFilename()`
- `public static ShaderLoader loadShader(IResourceManager resourceManager,  ShaderLoader.ShaderType type,  java.lang.String filename)  throws java.io.IOException`
  - throws: java.io.IOException

## ShaderLoader.ShaderType

*enum* `net.minecraft.client.shader.ShaderLoader.ShaderType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ShaderLoader.ShaderType>

Enclosing class: ShaderLoader

### Fields
- `public static final ShaderLoader.ShaderType VERTEX`
- `public static final ShaderLoader.ShaderType FRAGMENT`

### Methods
- `public static ShaderLoader.ShaderType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ShaderLoader.ShaderType c : ShaderLoader.ShaderType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ShaderLoader.ShaderType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public java.lang.String getShaderName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ShaderManager

*class* `net.minecraft.client.shader.ShaderManager`

### Methods
- `public void deleteShader()`
- `public void endShader()`
- `public void useShader()`
- `public void markDirty()`
- `public ShaderUniform getShaderUniform(java.lang.String name)`
- `public ShaderUniform getShaderUniformOrDefault(java.lang.String name)`
- `public void addSamplerTexture(java.lang.String name,  java.lang.Object samplerTexture)`
- `public ShaderLoader getVertexShaderLoader()`
- `public ShaderLoader getFragmentShaderLoader()`
- `public int getProgram()`

## ShaderUniform

*class* `net.minecraft.client.shader.ShaderUniform`

### Methods
- `public static int parseType(java.lang.String typeName)`
- `public void setUniformLocation(int uniformLocationIn)`
- `public java.lang.String getShaderName()`
- `public void set(float p_148090_1_)`
- `public void set(float p_148087_1_,  float p_148087_2_)`
- `public void set(float p_148095_1_,  float p_148095_2_,  float p_148095_3_)`
- `public void set(float p_148081_1_,  float p_148081_2_,  float p_148081_3_,  float p_148081_4_)`
- `public void setSafe(float p_148092_1_,  float p_148092_2_,  float p_148092_3_,  float p_148092_4_)`
- `public void set(int p_148083_1_,  int p_148083_2_,  int p_148083_3_,  int p_148083_4_)`
- `public void set(float[] p_148097_1_)`
- `public void set(float m00,  float m01,  float m02,  float m03,  float m10,  float m11,  float m12,  float m13,  float m20,  float m21,  float m22,  float m23,  float m30,  float m31,  float m32,  float m33)`
- `public void set(Matrix4f matrix)`
- `public void upload()`
