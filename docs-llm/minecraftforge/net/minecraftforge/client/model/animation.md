# net.minecraftforge.client.model.animation

- [Animation](#animation)
- [AnimationItemOverrideList](#animationitemoverridelist)
- [AnimationModelBase](#animationmodelbase)
- [AnimationTESR](#animationtesr)
- [FastTESR](#fasttesr)
- [ModelBlockAnimation](#modelblockanimation)
- [ModelBlockAnimation.MBClip](#modelblockanimation.mbclip)
- [ModelBlockAnimation.MBClip.MBJointClip](#modelblockanimation.mbclip.mbjointclip)
- [ModelBlockAnimation.MBJoint](#modelblockanimation.mbjoint)
- [ModelBlockAnimation.MBJointWeight](#modelblockanimation.mbjointweight)
- [ModelBlockAnimation.MBVariableClip](#modelblockanimation.mbvariableclip)
- [ModelBlockAnimation.Parameter](#modelblockanimation.parameter)
- [ModelBlockAnimation.Parameter.Interpolation](#modelblockanimation.parameter.interpolation)
- [ModelBlockAnimation.Parameter.Type](#modelblockanimation.parameter.type)
- [ModelBlockAnimation.Parameter.Variable](#modelblockanimation.parameter.variable)
## Animation

*enum* `net.minecraftforge.client.model.animation.Animation`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<Animation>

### Fields
- `public static final Animation INSTANCE`

### Methods
- `public static Animation[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (Animation c : Animation.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static Animation valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public static float getWorldTime(World world)`
  Get the global world time for the current tick, in seconds.
- `public static float getWorldTime(World world,  float tickProgress)`
  Get the global world time for the current tick + partial tick progress, in seconds.
- `public static float getPartialTickTime()`
  Get current partialTickTime.
- `public static void setClientPartialTickTime(float clientPartialTickTime)`
  Internal hook, do not use.

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## AnimationItemOverrideList

*class* `net.minecraftforge.client.model.animation.AnimationItemOverrideList`

### Inherited fields
- from `net.minecraft.client.renderer.block.model.ItemOverrideList`: `NONE`

### Methods
- `public IBakedModel handleItemState(IBakedModel originalModel,  ItemStack stack,  World world,  EntityLivingBase entity)`

### Inherited methods
- from `net.minecraft.client.renderer.block.model.ItemOverrideList`: `applyOverride`, `getOverrides`

## AnimationModelBase

*class* `net.minecraftforge.client.model.animation.AnimationModelBase`

Deprecated.

All Implemented Interfaces: IEventHandler<T>

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entity,  float limbSwing,  float limbSwingSpeed,  float timeAlive,  float yawHead,  float rotationPitch,  float scale)` (deprecated)
  Deprecated.
- `public void handleEvents(T instance,  float time,  java.lang.Iterable<Event> pastEvents)` (deprecated)
  Deprecated.

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setRotationAngles`, `setTextureOffset`

## AnimationTESR

*class* `net.minecraftforge.client.model.animation.AnimationTESR`

Generic TileEntitySpecialRenderer that works with the Forge model system and animations.

All Implemented Interfaces: IEventHandler<T>

### Fields
- `protected static BlockRendererDispatcher blockRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `DESTROY_STAGES`, `rendererDispatcher`

### Methods
- `public void renderTileEntityFast(T te,  double x,  double y,  double z,  float partialTick,  int breakStage,  float partial,  BufferBuilder renderer)`
- `public void handleEvents(T te,  float time,  java.lang.Iterable<Event> pastEvents)`

### Inherited methods
- from `net.minecraftforge.client.model.animation.FastTESR`: `render`
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `bindTexture`, `drawNameplate`, `getFontRenderer`, `getWorld`, `isGlobalRenderer`, `setLightmapDisabled`, `setRendererDispatcher`

## FastTESR

*class* `net.minecraftforge.client.model.animation.FastTESR`

### Inherited fields
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `DESTROY_STAGES`, `rendererDispatcher`

### Methods
- `public final void render(T te,  double x,  double y,  double z,  float partialTicks,  int destroyStage,  float partial)`
- `public abstract void renderTileEntityFast(T te,  double x,  double y,  double z,  float partialTicks,  int destroyStage,  float partial,  BufferBuilder buffer)`

### Inherited methods
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `bindTexture`, `drawNameplate`, `getFontRenderer`, `getWorld`, `isGlobalRenderer`, `setLightmapDisabled`, `setRendererDispatcher`

## ModelBlockAnimation

*class* `net.minecraftforge.client.model.animation.ModelBlockAnimation`

### Methods
- `public <any> getClips()`
- `public <any> getJoint(int i)`
- `public TRSRTransformation getPartTransform(IModelState state,  BlockPart part,  int i)`
- `public static ModelBlockAnimation loadVanillaAnimation(IResourceManager manager,  ResourceLocation armatureLocation)`
  Load armature associated with a vanilla model.

## ModelBlockAnimation.MBClip

*class* `net.minecraftforge.client.model.animation.ModelBlockAnimation.MBClip`

All Implemented Interfaces: IClip

Enclosing class: ModelBlockAnimation

### Methods
- `public IJointClip apply(IJoint joint)`
- `public java.lang.Iterable<Event> pastEvents(float lastPollTime,  float time)`

## ModelBlockAnimation.MBClip.MBJointClip

*class* `net.minecraftforge.client.model.animation.ModelBlockAnimation.MBClip.MBJointClip`

All Implemented Interfaces: IJointClip

Enclosing class: ModelBlockAnimation.MBClip

### Methods
- `public TRSRTransformation apply(float time)`

## ModelBlockAnimation.MBJoint

*class* `net.minecraftforge.client.model.animation.ModelBlockAnimation.MBJoint`

All Implemented Interfaces: IJoint, IModelPart

Enclosing class: ModelBlockAnimation

### Methods
- `public TRSRTransformation getInvBindPose()`
- `public java.util.Optional<? extends IJoint> getParent()`
- `public java.lang.String getName()`

## ModelBlockAnimation.MBJointWeight

*class* `net.minecraftforge.client.model.animation.ModelBlockAnimation.MBJointWeight`

Enclosing class: ModelBlockAnimation

### Methods
- `public java.lang.String getName()`
- `public <any> getWeights()`

## ModelBlockAnimation.MBVariableClip

*class* `net.minecraftforge.client.model.animation.ModelBlockAnimation.MBVariableClip`

Enclosing class: ModelBlockAnimation

## ModelBlockAnimation.Parameter

*class* `net.minecraftforge.client.model.animation.ModelBlockAnimation.Parameter`

Enclosing class: ModelBlockAnimation

## ModelBlockAnimation.Parameter.Interpolation

*enum* `net.minecraftforge.client.model.animation.ModelBlockAnimation.Parameter.Interpolation`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ModelBlockAnimation.Parameter.Interpolation>

Enclosing class: ModelBlockAnimation.Parameter

### Fields
- `public static final ModelBlockAnimation.Parameter.Interpolation LINEAR`
- `public static final ModelBlockAnimation.Parameter.Interpolation NEAREST`

### Methods
- `public static ModelBlockAnimation.Parameter.Interpolation[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ModelBlockAnimation.Parameter.Interpolation c : ModelBlockAnimation.Parameter.Interpolation.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ModelBlockAnimation.Parameter.Interpolation valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ModelBlockAnimation.Parameter.Type

*enum* `net.minecraftforge.client.model.animation.ModelBlockAnimation.Parameter.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ModelBlockAnimation.Parameter.Type>

Enclosing class: ModelBlockAnimation.Parameter

### Fields
- `public static final ModelBlockAnimation.Parameter.Type UNIFORM`

### Methods
- `public static ModelBlockAnimation.Parameter.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ModelBlockAnimation.Parameter.Type c : ModelBlockAnimation.Parameter.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ModelBlockAnimation.Parameter.Type valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ModelBlockAnimation.Parameter.Variable

*enum* `net.minecraftforge.client.model.animation.ModelBlockAnimation.Parameter.Variable`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ModelBlockAnimation.Parameter.Variable>

Enclosing class: ModelBlockAnimation.Parameter

### Fields
- `public static final ModelBlockAnimation.Parameter.Variable X`
- `public static final ModelBlockAnimation.Parameter.Variable Y`
- `public static final ModelBlockAnimation.Parameter.Variable Z`
- `public static final ModelBlockAnimation.Parameter.Variable XROT`
- `public static final ModelBlockAnimation.Parameter.Variable YROT`
- `public static final ModelBlockAnimation.Parameter.Variable ZROT`
- `public static final ModelBlockAnimation.Parameter.Variable ANGLE`
- `public static final ModelBlockAnimation.Parameter.Variable SCALE`
- `public static final ModelBlockAnimation.Parameter.Variable XS`
- `public static final ModelBlockAnimation.Parameter.Variable YS`
- `public static final ModelBlockAnimation.Parameter.Variable ZS`
- `public static final ModelBlockAnimation.Parameter.Variable XORIGIN`
- `public static final ModelBlockAnimation.Parameter.Variable YORIGIN`
- `public static final ModelBlockAnimation.Parameter.Variable ZORIGIN`

### Methods
- `public static ModelBlockAnimation.Parameter.Variable[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ModelBlockAnimation.Parameter.Variable c : ModelBlockAnimation.Parameter.Variable.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ModelBlockAnimation.Parameter.Variable valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
