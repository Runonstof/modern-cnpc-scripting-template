# net.minecraftforge.client.model.renderable

- [BakedModelRenderable](#bakedmodelrenderable)
- [BakedModelRenderable.Context](#bakedmodelrenderable.context)
- [CompositeRenderable](#compositerenderable)
- [CompositeRenderable.Builder](#compositerenderable.builder)
- [CompositeRenderable.Component](#compositerenderable.component)
- [CompositeRenderable.Mesh](#compositerenderable.mesh)
- [CompositeRenderable.PartBuilder](#compositerenderable.partbuilder)
- [CompositeRenderable.Transforms](#compositerenderable.transforms)
- [IRenderable](#irenderable)
- [ITextureRenderTypeLookup](#itexturerendertypelookup)
## BakedModelRenderable

*class* `net.minecraftforge.client.model.renderable.BakedModelRenderable`

Renderable wrapper for baked models.

 The context can provide the BlockState, faces to be rendered, a RandomSource and seed,
 a ModelData instance, and a tint.

### Fields
- `private final BakedModel model`

### Methods
- `public static BakedModelRenderable of(ResourceLocation model)`
  Constructs a BakedModelRenderable from the given model location.
   The model is expected to have been baked ahead of time.
- `public static BakedModelRenderable of(BakedModel model)`
  Constructs a BakedModelRenderable from the given baked model.
- `public void render(PoseStack poseStack,  MultiBufferSource bufferSource,  ITextureRenderTypeLookup textureRenderTypeLookup,  int lightmap,  int overlay,  float partialTick,  BakedModelRenderable.Context context)`
  Description copied from interface: IRenderable
  Draws the renderable by adding the geometry to the provided MultiBufferSource
  - param: poseStack - The pose stack
  - param: bufferSource - The buffer source where the vertex data should be output
  - param: textureRenderTypeLookup - A function that provides a RenderType for the given texture
  - param: lightmap - The lightmap coordinates representing the current lighting conditions. See LightTexture
  - param: overlay - The overlay coordinates representing the current overlay status. See OverlayTexture
  - param: partialTick - The current time expressed in the fraction of a tick elapsed since the last client tick
  - param: context - The context used for rendering
- `public IRenderable<Unit> withContext(ModelData modelData)`
- `public IRenderable<ModelData> withModelDataContext()`

### Inherited methods
- from `net.minecraftforge.client.model.renderable.IRenderable`: `withContext`

## BakedModelRenderable.Context

*record* `net.minecraftforge.client.model.renderable.BakedModelRenderable.Context`

Enclosing class: BakedModelRenderable

### Fields
- `@Nullable private final @Nullable BlockState state`
  The field for the state record component.
- `private final Direction[] faces`
  The field for the faces record component.
- `private final RandomSource randomSource`
  The field for the randomSource record component.
- `private final long seed`
  The field for the seed record component.
- `private final ModelData data`
  The field for the data record component.
- `private final org.joml.Vector4f tint`
  The field for the tint record component.
- `private static final Direction[] ALL_FACES_AND_NULL`
- `private static final org.joml.Vector4f WHITE`

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
- `@Nullable public @Nullable BlockState state()`
  Returns the value of the state record component.
  - returns: the value of the state record component
- `public Direction[] faces()`
  Returns the value of the faces record component.
  - returns: the value of the faces record component
- `public RandomSource randomSource()`
  Returns the value of the randomSource record component.
  - returns: the value of the randomSource record component
- `public long seed()`
  Returns the value of the seed record component.
  - returns: the value of the seed record component
- `public ModelData data()`
  Returns the value of the data record component.
  - returns: the value of the data record component
- `public org.joml.Vector4f tint()`
  Returns the value of the tint record component.
  - returns: the value of the tint record component

## CompositeRenderable

*class* `net.minecraftforge.client.model.renderable.CompositeRenderable`

A renderable object composed of a hierarchy of parts, each made up of a number of meshes.

 Each mesh renders a set of quads using a different texture.

### Fields
- `private final List<CompositeRenderable.Component> components`

### Methods
- `public void render(PoseStack poseStack,  MultiBufferSource bufferSource,  ITextureRenderTypeLookup textureRenderTypeLookup,  int lightmap,  int overlay,  float partialTick,  CompositeRenderable.Transforms context)`
  Description copied from interface: IRenderable
  Draws the renderable by adding the geometry to the provided MultiBufferSource
  - param: poseStack - The pose stack
  - param: bufferSource - The buffer source where the vertex data should be output
  - param: textureRenderTypeLookup - A function that provides a RenderType for the given texture
  - param: lightmap - The lightmap coordinates representing the current lighting conditions. See LightTexture
  - param: overlay - The overlay coordinates representing the current overlay status. See OverlayTexture
  - param: partialTick - The current time expressed in the fraction of a tick elapsed since the last client tick
  - param: context - The context used for rendering
- `public static CompositeRenderable.Builder builder()`

### Inherited methods
- from `net.minecraftforge.client.model.renderable.IRenderable`: `withContext`

## CompositeRenderable.Builder

*class* `net.minecraftforge.client.model.renderable.CompositeRenderable.Builder`

Enclosing class: CompositeRenderable

### Fields
- `private final CompositeRenderable renderable`

### Methods
- `public CompositeRenderable.PartBuilder<CompositeRenderable.Builder> child(String name)`
- `public CompositeRenderable get()`

## CompositeRenderable.Component

*class* `net.minecraftforge.client.model.renderable.CompositeRenderable.Component`

Enclosing class: CompositeRenderable

### Fields
- `private final String name`
- `private final List<CompositeRenderable.Component> children`
- `private final List<CompositeRenderable.Mesh> meshes`

### Methods
- `public void render(PoseStack poseStack,  MultiBufferSource bufferSource,  ITextureRenderTypeLookup textureRenderTypeLookup,  int lightmap,  int overlay,  CompositeRenderable.Transforms context)`

## CompositeRenderable.Mesh

*class* `net.minecraftforge.client.model.renderable.CompositeRenderable.Mesh`

Enclosing class: CompositeRenderable

### Fields
- `private final ResourceLocation texture`
- `private final List<BakedQuad> quads`

### Methods
- `public void render(PoseStack poseStack,  MultiBufferSource bufferSource,  ITextureRenderTypeLookup textureRenderTypeLookup,  int lightmap,  int overlay)`

## CompositeRenderable.PartBuilder

*class* `net.minecraftforge.client.model.renderable.CompositeRenderable.PartBuilder`

Enclosing class: CompositeRenderable

### Fields
- `private final T parent`
- `private final CompositeRenderable.Component component`

### Methods
- `public CompositeRenderable.PartBuilder<CompositeRenderable.PartBuilder<T>> child(String name)`
- `public CompositeRenderable.PartBuilder<T> addMesh(ResourceLocation texture,  List<BakedQuad> quads)`
- `public T end()`

## CompositeRenderable.Transforms

*class* `net.minecraftforge.client.model.renderable.CompositeRenderable.Transforms`

A context value that provides Matrix4f transforms for certain parts of the model.

Enclosing class: CompositeRenderable

### Fields
- `public static final CompositeRenderable.Transforms EMPTY`
  A default instance that has no transforms specified.
- `private final com.google.common.collect.ImmutableMap<String,org.joml.Matrix4f> parts`

### Methods
- `public static CompositeRenderable.Transforms of(com.google.common.collect.ImmutableMap<String,org.joml.Matrix4f> parts)`
  Builds a MultipartTransforms object with the given mapping.
- `@Nullable public @Nullable org.joml.Matrix4f getTransform(String part)`

## IRenderable

*interface* `net.minecraftforge.client.model.renderable.IRenderable`

A standard interface for things that can be rendered to a MultiBufferSource.

### Methods
- `void render(PoseStack poseStack,  MultiBufferSource bufferSource,  ITextureRenderTypeLookup textureRenderTypeLookup,  int lightmap,  int overlay,  float partialTick,  T context)`
  Draws the renderable by adding the geometry to the provided MultiBufferSource
  - param: poseStack - The pose stack
  - param: bufferSource - The buffer source where the vertex data should be output
  - param: textureRenderTypeLookup - A function that provides a RenderType for the given texture
  - param: lightmap - The lightmap coordinates representing the current lighting conditions. See LightTexture
  - param: overlay - The overlay coordinates representing the current overlay status. See OverlayTexture
  - param: partialTick - The current time expressed in the fraction of a tick elapsed since the last client tick
  - param: context - The context used for rendering
- `default IRenderable<Unit> withContext(T context)`
  Wraps the current renderable along with a context.
   Useful for keeping a list of various renderables paired with their contexts.
  - param: context - The context used for rendering
  - returns: A renderable that accepts Unit.INSTANCE as context, but uses the provided context instead

## ITextureRenderTypeLookup

*interface* `net.minecraftforge.client.model.renderable.ITextureRenderTypeLookup`

A generic lookup for RenderType implementations that use the specified texture.

### Methods
- `RenderType get(ResourceLocation name)`
