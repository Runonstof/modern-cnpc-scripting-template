# net.minecraftforge.client.extensions

- [IForgeBakedModel](#iforgebakedmodel)
- [IForgeBlockAndTintGetter](#iforgeblockandtintgetter)
- [IForgeDimensionSpecialEffects](#iforgedimensionspecialeffects)
- [IForgeFont](#iforgefont)
- [IForgeGuiGraphics](#iforgeguigraphics)
- [IForgeKeyMapping](#iforgekeymapping)
- [IForgeMinecraft](#iforgeminecraft)
- [IForgeModelBaker](#iforgemodelbaker)
- [IForgePoseStack](#iforgeposestack)
- [IForgeVertexConsumer](#iforgevertexconsumer)
## IForgeBakedModel

*interface* `net.minecraftforge.client.extensions.IForgeBakedModel`

Extension interface for IForgeBakedModel.

### Methods
- `private BakedModel self()`
- `@NotNull default @NotNull List<BakedQuad> getQuads(@Nullable  @Nullable BlockState state,  @Nullable  @Nullable Direction side,  @NotNull  @NotNull RandomSource rand,  @NotNull  @NotNull ModelData data,  @Nullable  @Nullable RenderType renderType)`
  A null RenderType is used for the breaking overlay as well as non-standard rendering, so models should return all their quads.
- `default boolean useAmbientOcclusion(BlockState state)`
- `default boolean useAmbientOcclusion(BlockState state,  RenderType renderType)`
- `default BakedModel applyTransform(ItemDisplayContext transformType,  PoseStack poseStack,  boolean applyLeftHandTransform)`
  Applies a transform for the given ItemTransforms.TransformType and applyLeftHandTransform, and
   returns the model to be rendered.
- `@NotNull default @NotNull ModelData getModelData(@NotNull  @NotNull BlockAndTintGetter level,  @NotNull  @NotNull BlockPos pos,  @NotNull  @NotNull BlockState state,  @NotNull  @NotNull ModelData modelData)`
- `default TextureAtlasSprite getParticleIcon(@NotNull  @NotNull ModelData data)`
- `default ChunkRenderTypeSet getRenderTypes(@NotNull  @NotNull BlockState state,  @NotNull  @NotNull RandomSource rand,  @NotNull  @NotNull ModelData data)`
  Gets the set of render types to use when drawing this block in the level.
   Supported types are those returned by RenderType.chunkBufferLayers().
  
   By default, defers query to ItemBlockRenderTypes.
- `default List<RenderType> getRenderTypes(ItemStack itemStack,  boolean fabulous)`
  Gets an ordered list of render types to use when drawing this item.
   All render types using the DefaultVertexFormat.NEW_ENTITY format are supported.
  
   This method will only be called on the models returned by getRenderPasses(ItemStack, boolean).
  
   By default, defers query to ItemBlockRenderTypes.
- `default List<BakedModel> getRenderPasses(ItemStack itemStack,  boolean fabulous)`
  Gets an ordered list of baked models used to render this model as an item.
   Each of those models' render types will be queried via getRenderTypes(ItemStack, boolean).
  
   By default, returns the model itself.

## IForgeBlockAndTintGetter

*interface* `net.minecraftforge.client.extensions.IForgeBlockAndTintGetter`

Extension interface for BlockAndTintGetter.

### Methods
- `private BlockAndTintGetter self()`
- `default float getShade(float normalX,  float normalY,  float normalZ,  boolean shade)`
  Computes the shade for a given normal.
   Alternate version of the vanilla method taking in a Direction.

## IForgeDimensionSpecialEffects

*interface* `net.minecraftforge.client.extensions.IForgeDimensionSpecialEffects`

Extension interface for DimensionSpecialEffects.

### Methods
- `private DimensionSpecialEffects self()`
- `default boolean renderClouds(ClientLevel level,  int ticks,  float partialTick,  PoseStack poseStack,  double camX,  double camY,  double camZ,  org.joml.Matrix4f projectionMatrix)`
  Renders the clouds of this dimension.
  - returns: true to prevent vanilla cloud rendering
- `default boolean renderSky(ClientLevel level,  int ticks,  float partialTick,  PoseStack poseStack,  Camera camera,  org.joml.Matrix4f projectionMatrix,  boolean isFoggy,  Runnable setupFog)`
  Renders the sky of this dimension.
  - returns: true to prevent vanilla sky rendering
- `default boolean renderSnowAndRain(ClientLevel level,  int ticks,  float partialTick,  LightTexture lightTexture,  double camX,  double camY,  double camZ)`
  Renders the snow and rain effects of this dimension.
  - returns: true to prevent vanilla snow and rain rendering
- `default boolean tickRain(ClientLevel level,  int ticks,  Camera camera)`
  Ticks the rain of this dimension.
  - returns: true to prevent vanilla rain ticking
- `default void adjustLightmapColors(ClientLevel level,  float partialTicks,  float skyDarken,  float blockLightRedFlicker,  float skyLight,  int pixelX,  int pixelY,  org.joml.Vector3f colors)`
  Allows for manipulating the coloring of the lightmap texture.
   Will be called for each 16*16 combination of sky/block light values.
  - param: level - The current level (client-side).
  - param: partialTicks - Progress between ticks.
  - param: skyDarken - Current darkness of the sky (can be used to calculate sky light).
  - param: blockLightRedFlicker - Block light flicker factor (red color) (can be used to calculate block light).
  - param: skyLight - Sky light brightness (accounting for sky darkness).
  - param: pixelX - X-coordinate of the lightmap texture (block).
  - param: pixelY - Y-coordinate of the lightmap texture (sky).
  - param: colors - The color values that will be used: [r, g, b].

## IForgeFont

*interface* `net.minecraftforge.client.extensions.IForgeFont`

Extension interface for Font.

### Fields
- `static final FormattedText ELLIPSIS`

### Methods
- `Font self()`
- `default FormattedText ellipsize(FormattedText text,  int maxWidth)`
  If the width of the text exceeds maxWidth, an ellipse is added and the text is substringed.
  - param: text - the text to ellipsize if needed
  - param: maxWidth - the maximum width of the text
  - returns: the ellipsized text

## IForgeGuiGraphics

*interface* `net.minecraftforge.client.extensions.IForgeGuiGraphics`

Extension interface for GuiGraphics.

### Fields
- `static final int DEFAULT_BACKGROUND_COLOR` (= -267386864)
- `static final int DEFAULT_BORDER_COLOR_START` (= 1347420415)
- `static final int DEFAULT_BORDER_COLOR_END` (= 1344798847)
- `static final String UNDO_CHAR` (= "\u21b6")
- `static final String RESET_CHAR` (= "\u2604")
- `static final String VALID` (= "\u2714")
- `static final String INVALID` (= "\u2715")
- `static final int[] TEXT_COLOR_CODES`

### Methods
- `private GuiGraphics self()`
- `default int getColorFromFormattingCharacter(char c,  boolean isLighter)`
- `default void blitWithBorder(ResourceLocation texture,  int x,  int y,  int u,  int v,  int width,  int height,  int textureWidth,  int textureHeight,  int borderSize)`
  Draws a textured box of any size (smallest size is borderSize * 2 square)
   based on a fixed size textured box with continuous borders and filler.
  - param: texture - the ResourceLocation object that contains the desired image
  - param: x - x-axis offset
  - param: y - y-axis offset
  - param: u - bound resource location image x offset
  - param: v - bound resource location image y offset
  - param: width - the desired box width
  - param: height - the desired box height
  - param: textureWidth - the width of the box texture in the resource location image
  - param: textureHeight - the height of the box texture in the resource location image
  - param: borderSize - the size of the box's borders
- `default void blitWithBorder(ResourceLocation texture,  int x,  int y,  int u,  int v,  int width,  int height,  int textureWidth,  int textureHeight,  int topBorder,  int bottomBorder,  int leftBorder,  int rightBorder)`
  Draws a textured box of any size (smallest size is borderSize * 2 square)
   based on a fixed size textured box with continuous borders and filler.
  - param: texture - the ResourceLocation object that contains the desired image
  - param: x - x-axis offset
  - param: y - y-axis offset
  - param: u - bound resource location image x offset
  - param: v - bound resource location image y offset
  - param: width - the desired box width
  - param: height - the desired box height
  - param: textureWidth - the width of the box texture in the resource location image
  - param: textureHeight - the height of the box texture in the resource location image
  - param: topBorder - the size of the box's top border
  - param: bottomBorder - the size of the box's bottom border
  - param: leftBorder - the size of the box's left border
  - param: rightBorder - the size of the box's right border
- `default void blitInscribed(ResourceLocation texture,  int x,  int y,  int boundsWidth,  int boundsHeight,  int rectWidth,  int rectHeight)`
- `default void blitInscribed(ResourceLocation texture,  int x,  int y,  int boundsWidth,  int boundsHeight,  int rectWidth,  int rectHeight,  boolean centerX,  boolean centerY)`

## IForgeKeyMapping

*interface* `net.minecraftforge.client.extensions.IForgeKeyMapping`

Extension interface for KeyMapping.

### Methods
- `private KeyMapping self()`
- `@NotNull InputConstants.Key getKey()`
- `default boolean isActiveAndMatches(InputConstants.Key keyCode)`
  Returns true if the key conflict context and modifier are active and the keyCode matches this binding, false otherwise.
  - returns: true if the key conflict context and modifier are active and the keyCode matches this binding, false otherwise
- `default void setToDefault()`
- `void setKeyConflictContext(IKeyConflictContext keyConflictContext)`
- `IKeyConflictContext getKeyConflictContext()`
- `KeyModifier getDefaultKeyModifier()`
- `KeyModifier getKeyModifier()`
- `void setKeyModifierAndCode(KeyModifier keyModifier,  InputConstants.Key keyCode)`
- `default boolean isConflictContextAndModifierActive()`
- `default boolean hasKeyModifierConflict(KeyMapping other)`
  Returns true when one of the bindings' key codes conflicts with the other's modifier.

## IForgeMinecraft

*interface* `net.minecraftforge.client.extensions.IForgeMinecraft`

Extension interface for IForgeMinecraft.

### Methods
- `private Minecraft self()`
- `default void pushGuiLayer(Screen screen)`
  Pushes a screen as a new GUI layer.
  - param: screen - the new GUI layer
- `default void popGuiLayer()`
  Pops a GUI layer from the screen.
- `default Locale getLocale()`
  Retrieves the Locale set by the player.
   Useful for creating string and number formatters.

## IForgeModelBaker

*interface* `net.minecraftforge.client.extensions.IForgeModelBaker`

### Methods
- `@Nullable @Nullable BakedModel bake(ResourceLocation location,  ModelState state,  Function<Material,TextureAtlasSprite> sprites)`
- `Function<Material,TextureAtlasSprite> getModelTextureGetter()`

## IForgePoseStack

*interface* `net.minecraftforge.client.extensions.IForgePoseStack`

Extension interface for PoseStack.

### Methods
- `private PoseStack self()`
- `default void pushTransformation(Transformation transformation)`
  Pushes and applies the transformation to this pose stack.
  
   The effects of this method can be reversed by a corresponding PoseStack.popPose() call.
  - param: transformation - the transformation to push

## IForgeVertexConsumer

*interface* `net.minecraftforge.client.extensions.IForgeVertexConsumer`

Extension interface for VertexConsumer.

### Methods
- `private VertexConsumer self()`
- `default VertexConsumer misc(VertexFormatElement element,  int... rawData)`
  Consumes an unknown VertexFormatElement as a raw int data array.
  
   If the consumer needs to store the data for later use, it must copy it. There are no guarantees on immutability.
- `default void putBulkData(PoseStack.Pose pose,  BakedQuad bakedQuad,  float red,  float green,  float blue,  float alpha,  int packedLight,  int packedOverlay,  boolean readExistingColor)`
  Variant with no per-vertex shading.
- `default int applyBakedLighting(int packedLight,  ByteBuffer data)`
- `default void applyBakedNormals(org.joml.Vector3f generated,  ByteBuffer data,  org.joml.Matrix3f normalTransform)`
