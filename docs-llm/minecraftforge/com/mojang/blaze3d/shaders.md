# com.mojang.blaze3d.shaders

- [AbstractUniform](#abstractuniform)
- [BlendMode](#blendmode)
- [Class FogShape](#class-fogshape)
- [Class Program.Type](#class-program.type)
- [Effect](#effect)
- [EffectProgram](#effectprogram)
- [Program](#program)
- [ProgramManager](#programmanager)
- [Shader](#shader)
- [Uniform](#uniform)
## AbstractUniform

*class* `com.mojang.blaze3d.shaders.AbstractUniform`

### Methods
- `public void set(float p_85479_)`
- `public void set(float p_85480_,  float p_85481_)`
- `public void set(float p_85482_,  float p_85483_,  float p_85484_)`
- `public void set(float p_85485_,  float p_85486_,  float p_85487_,  float p_85488_)`
- `public void setSafe(float p_85495_,  float p_85496_,  float p_85497_,  float p_85498_)`
- `public void setSafe(int p_85489_,  int p_85490_,  int p_85491_,  int p_85492_)`
- `public void set(int p_166536_)`
- `public void set(int p_166537_,  int p_166538_)`
- `public void set(int p_166539_,  int p_166540_,  int p_166541_)`
- `public void set(int p_166570_,  int p_166571_,  int p_166572_,  int p_166573_)`
- `public void set(float[] p_85494_)`
- `public void set(org.joml.Vector3f p_254315_)`
- `public void set(org.joml.Vector4f p_254449_)`
- `public void setMat2x2(float p_166574_,  float p_166575_,  float p_166576_,  float p_166577_)`
- `public void setMat2x3(float p_166485_,  float p_166486_,  float p_166487_,  float p_166488_,  float p_166489_,  float p_166490_)`
- `public void setMat2x4(float p_166491_,  float p_166492_,  float p_166493_,  float p_166494_,  float p_166495_,  float p_166496_,  float p_166497_,  float p_166498_)`
- `public void setMat3x2(float p_166544_,  float p_166545_,  float p_166546_,  float p_166547_,  float p_166548_,  float p_166549_)`
- `public void setMat3x3(float p_166499_,  float p_166500_,  float p_166501_,  float p_166502_,  float p_166503_,  float p_166504_,  float p_166505_,  float p_166506_,  float p_166507_)`
- `public void setMat3x4(float p_166508_,  float p_166509_,  float p_166510_,  float p_166511_,  float p_166512_,  float p_166513_,  float p_166514_,  float p_166515_,  float p_166516_,  float p_166517_,  float p_166518_,  float p_166519_)`
- `public void setMat4x2(float p_166550_,  float p_166551_,  float p_166552_,  float p_166553_,  float p_166554_,  float p_166555_,  float p_166556_,  float p_166557_)`
- `public void setMat4x3(float p_166558_,  float p_166559_,  float p_166560_,  float p_166561_,  float p_166562_,  float p_166563_,  float p_166564_,  float p_166565_,  float p_166566_,  float p_166567_,  float p_166568_,  float p_166569_)`
- `public void setMat4x4(float p_166520_,  float p_166521_,  float p_166522_,  float p_166523_,  float p_166524_,  float p_166525_,  float p_166526_,  float p_166527_,  float p_166528_,  float p_166529_,  float p_166530_,  float p_166531_,  float p_166532_,  float p_166533_,  float p_166534_,  float p_166535_)`
- `public void set(org.joml.Matrix4f p_254214_)`
- `public void set(org.joml.Matrix3f p_254112_)`

## BlendMode

*class* `com.mojang.blaze3d.shaders.BlendMode`

### Fields
- `@Nullable private static BlendMode lastApplied`
- `private final int srcColorFactor`
- `private final int srcAlphaFactor`
- `private final int dstColorFactor`
- `private final int dstAlphaFactor`
- `private final int blendFunc`
- `private final boolean separateBlend`
- `private final boolean opaque`

### Methods
- `public void apply()`
- `public boolean equals(Object p_85533_)`
- `public int hashCode()`
- `public boolean isOpaque()`
- `public static int stringToBlendFunc(String p_85528_)`
- `public static int stringToBlendFactor(String p_85531_)`

## Class FogShape

*enum* `com.mojang.blaze3d.shaders.Class FogShape`

### Fields
- `private final int index`

### Methods
- `public static FogShape[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static FogShape valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getIndex()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Program.Type

*enum* `com.mojang.blaze3d.shaders.Class Program.Type`

Enclosing class: Program

### Fields
- `private final String name`
- `private final String extension`
- `private final int glType`
- `private final Map<String,Program> programs`

### Methods
- `public static Program.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Program.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getName()`
- `public String getExtension()`
- `int getGlType()`
- `public Map<String,Program> getPrograms()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Effect

*interface* `com.mojang.blaze3d.shaders.Effect`

All Superinterfaces: Shader

### Inherited methods
- from `com.mojang.blaze3d.shaders.Shader`: `attachToProgram`, `getFragmentProgram`, `getId`, `getVertexProgram`, `markDirty`

## EffectProgram

*class* `com.mojang.blaze3d.shaders.EffectProgram`

### Fields
- `private static final GlslPreprocessor PREPROCESSOR`
- `private int references`

### Methods
- `public void attachToEffect(Effect p_166587_)`
- `public void close()`
- `public static EffectProgram compileShader(Program.Type p_166589_,  String p_166590_,  InputStream p_166591_,  String p_166592_)  throws IOException`
  - throws: IOException

### Inherited methods
- from `com.mojang.blaze3d.shaders.Program`: `attachToShader`, `compileShader`, `compileShaderInternal`, `getId`, `getName`

## Program

*class* `com.mojang.blaze3d.shaders.Program`

### Fields
- `private static final int MAX_LOG_LENGTH` (= 32768)
- `private final Program.Type type`
- `private final String name`
- `private int id`

### Methods
- `public void attachToShader(Shader p_166611_)`
- `public void close()`
- `public String getName()`
- `public static Program compileShader(Program.Type p_166605_,  String p_166606_,  InputStream p_166607_,  String p_166608_,  GlslPreprocessor p_166609_)  throws IOException`
  - throws: IOException
- `protected static int compileShaderInternal(Program.Type p_166613_,  String p_166614_,  InputStream p_166615_,  String p_166616_,  GlslPreprocessor p_166617_)  throws IOException`
  - throws: IOException
- `protected int getId()`

## ProgramManager

*class* `com.mojang.blaze3d.shaders.ProgramManager`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Methods
- `public static void glUseProgram(int p_85579_)`
- `public static void releaseProgram(Shader p_166622_)`
- `public static int createProgram()  throws IOException`
  - throws: IOException
- `public static void linkShader(Shader p_166624_)`

## Shader

*interface* `com.mojang.blaze3d.shaders.Shader`

### Methods
- `int getId()`
- `void markDirty()`
- `Program getVertexProgram()`
- `Program getFragmentProgram()`
- `void attachToProgram()`

## Uniform

*class* `com.mojang.blaze3d.shaders.Uniform`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final int UT_INT1` (= 0)
- `public static final int UT_INT2` (= 1)
- `public static final int UT_INT3` (= 2)
- `public static final int UT_INT4` (= 3)
- `public static final int UT_FLOAT1` (= 4)
- `public static final int UT_FLOAT2` (= 5)
- `public static final int UT_FLOAT3` (= 6)
- `public static final int UT_FLOAT4` (= 7)
- `public static final int UT_MAT2` (= 8)
- `public static final int UT_MAT3` (= 9)
- `public static final int UT_MAT4` (= 10)
- `private static final boolean TRANSPOSE_MATRICIES` (= false)
- `private int location`
- `private final int count`
- `private final int type`
- `private final IntBuffer intValues`
- `private final FloatBuffer floatValues`
- `private final String name`
- `private boolean dirty`
- `private final Shader parent`

### Methods
- `public static int glGetUniformLocation(int p_85625_,  CharSequence p_85626_)`
- `public static void uploadInteger(int p_85617_,  int p_85618_)`
- `public static int glGetAttribLocation(int p_85640_,  CharSequence p_85641_)`
- `public static void glBindAttribLocation(int p_166711_,  int p_166712_,  CharSequence p_166713_)`
- `public void close()`
- `private void markDirty()`
- `public static int getTypeFromString(String p_85630_)`
- `public void setLocation(int p_85615_)`
- `public String getName()`
- `public final void set(float p_85601_)`
- `public final void set(float p_85603_,  float p_85604_)`
- `public final void set(int p_166701_,  float p_166702_)`
- `public final void set(float p_85606_,  float p_85607_,  float p_85608_)`
- `public final void set(org.joml.Vector3f p_253931_)`
- `public final void set(float p_85610_,  float p_85611_,  float p_85612_,  float p_85613_)`
- `public final void set(org.joml.Vector4f p_254360_)`
- `public final void setSafe(float p_85635_,  float p_85636_,  float p_85637_,  float p_85638_)`
- `public final void setSafe(int p_85620_,  int p_85621_,  int p_85622_,  int p_85623_)`
- `public final void set(int p_166699_)`
- `public final void set(int p_166704_,  int p_166705_)`
- `public final void set(int p_166707_,  int p_166708_,  int p_166709_)`
- `public final void set(int p_166748_,  int p_166749_,  int p_166750_,  int p_166751_)`
- `public final void set(float[] p_85632_)`
- `public final void setMat2x2(float p_166754_,  float p_166755_,  float p_166756_,  float p_166757_)`
- `public final void setMat2x3(float p_166643_,  float p_166644_,  float p_166645_,  float p_166646_,  float p_166647_,  float p_166648_)`
- `public final void setMat2x4(float p_166650_,  float p_166651_,  float p_166652_,  float p_166653_,  float p_166654_,  float p_166655_,  float p_166656_,  float p_166657_)`
- `public final void setMat3x2(float p_166719_,  float p_166720_,  float p_166721_,  float p_166722_,  float p_166723_,  float p_166724_)`
- `public final void setMat3x3(float p_166659_,  float p_166660_,  float p_166661_,  float p_166662_,  float p_166663_,  float p_166664_,  float p_166665_,  float p_166666_,  float p_166667_)`
- `public final void setMat3x4(float p_166669_,  float p_166670_,  float p_166671_,  float p_166672_,  float p_166673_,  float p_166674_,  float p_166675_,  float p_166676_,  float p_166677_,  float p_166678_,  float p_166679_,  float p_166680_)`
- `public final void setMat4x2(float p_166726_,  float p_166727_,  float p_166728_,  float p_166729_,  float p_166730_,  float p_166731_,  float p_166732_,  float p_166733_)`
- `public final void setMat4x3(float p_166735_,  float p_166736_,  float p_166737_,  float p_166738_,  float p_166739_,  float p_166740_,  float p_166741_,  float p_166742_,  float p_166743_,  float p_166744_,  float p_166745_,  float p_166746_)`
- `public final void setMat4x4(float p_166682_,  float p_166683_,  float p_166684_,  float p_166685_,  float p_166686_,  float p_166687_,  float p_166688_,  float p_166689_,  float p_166690_,  float p_166691_,  float p_166692_,  float p_166693_,  float p_166694_,  float p_166695_,  float p_166696_,  float p_166697_)`
- `public final void set(org.joml.Matrix4f p_254249_)`
- `public final void set(org.joml.Matrix3f p_254556_)`
- `public void upload()`
- `private void uploadAsInteger()`
- `private void uploadAsFloat()`
- `private void uploadAsMatrix()`
- `public int getLocation()`
- `public int getCount()`
- `public int getType()`
- `public IntBuffer getIntBuffer()`
- `public FloatBuffer getFloatBuffer()`
