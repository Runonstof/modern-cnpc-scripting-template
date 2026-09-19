# net.minecraftforge.client.extensions.common

- [Class IClientItemExtensions.FontContext](#class-iclientitemextensions.fontcontext)
- [IClientBlockExtensions](#iclientblockextensions)
- [IClientFluidTypeExtensions](#iclientfluidtypeextensions)
- [IClientItemExtensions](#iclientitemextensions)
- [IClientMobEffectExtensions](#iclientmobeffectextensions)
## Class IClientItemExtensions.FontContext

*enum* `net.minecraftforge.client.extensions.common.Class IClientItemExtensions.FontContext`

Enclosing interface: IClientItemExtensions

### Methods
- `public static IClientItemExtensions.FontContext[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static IClientItemExtensions.FontContext valueOf(String name)`
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

## IClientBlockExtensions

*interface* `net.minecraftforge.client.extensions.common.IClientBlockExtensions`

Client-only extensions to Block.

### Fields
- `static final IClientBlockExtensions DEFAULT`

### Methods
- `static IClientBlockExtensions of(BlockState state)`
- `static IClientBlockExtensions of(Block block)`
- `default boolean addHitEffects(BlockState state,  Level level,  HitResult target,  ParticleEngine manager)`
  Spawn a digging particle effect in the level, this is a wrapper
   around EffectRenderer.addBlockHitEffects to allow the block more
   control over the particles. Useful when you have entirely different
   texture sheets for different sides/locations in the level.
  - param: state - The current state
  - param: level - The current level
  - param: target - The target the player is looking at {x/y/z/side/sub}
  - param: manager - A reference to the current particle manager.
  - returns: True to prevent vanilla digging particles form spawning.
- `default boolean addDestroyEffects(BlockState state,  Level Level,  BlockPos pos,  ParticleEngine manager)`
  Spawn particles for when the block is destroyed. Due to the nature
   of how this is invoked, the x/y/z locations are not always guaranteed
   to host your block. So be sure to do proper sanity checks before assuming
   that the location is this block.
  - param: Level - The current Level
  - param: pos - Position to spawn the particle
  - param: manager - A reference to the current particle manager.
  - returns: True to prevent vanilla break particles from spawning.
- `default org.joml.Vector3d getFogColor(BlockState state,  LevelReader level,  BlockPos pos,  Entity entity,  org.joml.Vector3d originalColor,  float partialTick)`
  NOT CURRENTLY IMPLEMENTED
  
   Use this to change the fog color used when the entity is "inside" a material.
   Vec3d is used here as "r/g/b" 0 - 1 values.
  - param: level - The level.
  - param: pos - The position at the entity viewport.
  - param: state - The state at the entity viewport.
  - param: entity - the entity
  - param: originalColor - The current fog color, You are not expected to use this, Return as the default if applicable.
  - returns: The new fog color.
- `default boolean areBreakingParticlesTinted(BlockState state,  ClientLevel level,  BlockPos pos)`
  Returns true if the breaking particles created from the BlockState passed should be tinted with biome colors.
  - param: state - The state of this block
  - param: level - The level the particles are spawning in
  - param: pos - The position of the block
  - returns: true if the particles should be tinted.

## IClientFluidTypeExtensions

*interface* `net.minecraftforge.client.extensions.common.IClientFluidTypeExtensions`

Client-only extensions to FluidType.

### Fields
- `static final IClientFluidTypeExtensions DEFAULT`

### Methods
- `static IClientFluidTypeExtensions of(FluidState state)`
- `static IClientFluidTypeExtensions of(Fluid fluid)`
- `static IClientFluidTypeExtensions of(FluidType type)`
- `default int getTintColor()`
  Returns the tint applied to the fluid's textures.
  
   The result represents a 32-bit integer where each 8-bits represent
   the alpha, red, green, and blue channel respectively.
  - returns: the tint applied to the fluid's textures in ARGB format
- `default ResourceLocation getStillTexture()`
  Returns the reference of the texture to apply to a source fluid.
  
   This should return a reference to the texture and not the actual
   texture itself (e.g. minecraft:block/water_still will point to
   assets/minecraft/textures/block/water_still.png).
  
   Important: This method should only return null for Fluids.EMPTY.
   All other implementations must define this property.
  - returns: the reference of the texture to apply to a source fluid
- `default ResourceLocation getFlowingTexture()`
  Returns the reference of the texture to apply to a flowing fluid.
  
   This should return a reference to the texture and not the actual
   texture itself (e.g. minecraft:block/water_flow will point to
   assets/minecraft/textures/block/water_flow.png).
  
   Important: This method should only return null for Fluids.EMPTY.
   All other implementations must define this property.
  - returns: the reference of the texture to apply to a flowing fluid
- `@Nullable default @Nullable ResourceLocation getOverlayTexture()`
  Returns the reference of the texture to apply to a fluid directly touching
   a non-opaque block other than air. If no reference is specified, either
   #getStillTexture or #getFlowingTexture will be applied
   instead.
  
   This should return a reference to the texture and not the actual
   texture itself (e.g. minecraft:block/water_overlay will point to
   assets/minecraft/textures/block/water_overlay.png).
  - returns: the reference of the texture to apply to a fluid directly touching
 a non-opaque block
- `@Nullable default @Nullable ResourceLocation getRenderOverlayTexture(Minecraft mc)`
  Returns the location of the texture to apply to the camera when it is
   within the fluid. If no location is specified, no overlay will be applied.
  
   This should return a location to the texture and not a reference
   (e.g. minecraft:textures/misc/underwater.png will use the texture
   at assets/minecraft/textures/misc/underwater.png).
  - param: mc - the client instance
  - returns: the location of the texture to apply to the camera when it is
 within the fluid
- `default void renderOverlay(Minecraft mc,  PoseStack poseStack)`
  Renders #getRenderOverlayTexture onto the camera when within
   the fluid.
  - param: mc - the client instance
  - param: poseStack - the transformations representing the current rendering position
- `@NotNull default @NotNull org.joml.Vector3f modifyFogColor(Camera camera,  float partialTick,  ClientLevel level,  int renderDistance,  float darkenWorldAmount,  org.joml.Vector3f fluidFogColor)`
  Modifies the color of the fog when the camera is within the fluid.
  
   The result expects a three float vector representing the red, green,
   and blue channels respectively. Each channel should be between [0,1].
  - param: camera - the camera instance
  - param: partialTick - the delta time of where the current frame is within a tick
  - param: level - the level the camera is located in
  - param: renderDistance - the render distance of the client
  - param: darkenWorldAmount - the amount to darken the world by
  - param: fluidFogColor - the current color of the fog
  - returns: the color of the fog
- `default void modifyFogRender(Camera camera,  FogRenderer.FogMode mode,  float renderDistance,  float partialTick,  float nearDistance,  float farDistance,  FogShape shape)`
  Modifies how the fog is currently being rendered when the camera is
   within a fluid.
  - param: camera - the camera instance
  - param: mode - the type of fog being rendered
  - param: renderDistance - the render distance of the client
  - param: partialTick - the delta time of where the current frame is within a tick
  - param: nearDistance - the near plane of where the fog starts to render
  - param: farDistance - the far plane of where the fog ends rendering
  - param: shape - the shape of the fog being rendered
- `default ResourceLocation getStillTexture(FluidState state,  BlockAndTintGetter getter,  BlockPos pos)`
  Returns the reference of the texture to apply to a source fluid.
  
   This should return a reference to the texture and not the actual
   texture itself (e.g. minecraft:block/water_still will point to
   assets/minecraft/textures/block/water_still.png).
  
   Important: This method should only return null for Fluids.EMPTY.
   All other implementations must define this property.
  - param: state - the state of the fluid
  - param: getter - the getter the fluid can be obtained from
  - param: pos - the position of the fluid
  - returns: the reference of the texture to apply to a source fluid
- `default ResourceLocation getFlowingTexture(FluidState state,  BlockAndTintGetter getter,  BlockPos pos)`
  Returns the reference of the texture to apply to a flowing fluid.
  
   This should return a reference to the texture and not the actual
   texture itself (e.g. minecraft:block/water_flow will point to
   assets/minecraft/textures/block/water_flow.png).
  
   Important: This method should only return null for Fluids.EMPTY.
   All other implementations must define this property.
  - param: state - the state of the fluid
  - param: getter - the getter the fluid can be obtained from
  - param: pos - the position of the fluid
  - returns: the reference of the texture to apply to a flowing fluid
- `default ResourceLocation getOverlayTexture(FluidState state,  BlockAndTintGetter getter,  BlockPos pos)`
  Returns the reference of the texture to apply to a fluid directly touching
   a non-opaque block other than air. If no reference is specified, either
   #getStillTexture or #getFlowingTexture will be applied
   instead.
  
   This should return a reference to the texture and not the actual
   texture itself (e.g. minecraft:block/water_overlay will point to
   assets/minecraft/textures/block/water_overlay.png).
  - param: state - the state of the fluid
  - param: getter - the getter the fluid can be obtained from
  - param: pos - the position of the fluid
  - returns: the reference of the texture to apply to a fluid directly touching
 a non-opaque block
- `default int getTintColor(FluidState state,  BlockAndTintGetter getter,  BlockPos pos)`
  Returns the tint applied to the fluid's textures.
  
   The result represents a 32-bit integer where each 8-bits represent
   the alpha, red, green, and blue channel respectively.
  - param: state - the state of the fluid
  - param: getter - the getter the fluid can be obtained from
  - param: pos - the position of the fluid
  - returns: the tint applied to the fluid's textures in ARGB format
- `default int getTintColor(FluidStack stack)`
  Returns the tint applied to the fluid's textures.
  
   The result represents a 32-bit integer where each 8-bits represent
   the alpha, red, green, and blue channel respectively.
  - param: stack - the stack the fluid is in
  - returns: the tint applied to the fluid's textures in ARGB format
- `default ResourceLocation getStillTexture(FluidStack stack)`
  Returns the reference of the texture to apply to a source fluid.
  
   This should return a reference to the texture and not the actual
   texture itself (e.g. minecraft:block/water_still will point to
   assets/minecraft/textures/block/water_still.png).
  
   Important: This method should only return null for Fluids.EMPTY.
   All other implementations must define this property.
  - param: stack - the stack the fluid is in
  - returns: the reference of the texture to apply to a source fluid
- `default ResourceLocation getFlowingTexture(FluidStack stack)`
  Returns the reference of the texture to apply to a flowing fluid.
  
   This should return a reference to the texture and not the actual
   texture itself (e.g. minecraft:block/water_flow will point to
   assets/minecraft/textures/block/water_flow.png).
  
   Important: This method should only return null for Fluids.EMPTY.
   All other implementations must define this property.
  - param: stack - the stack the fluid is in
  - returns: the reference of the texture to apply to a flowing fluid
- `default ResourceLocation getOverlayTexture(FluidStack stack)`
  Returns the reference of the texture to apply to a fluid directly touching
   a non-opaque block other than air. If no reference is specified, either
   #getStillTexture or #getFlowingTexture will be applied
   instead.
  
   This should return a reference to the texture and not the actual
   texture itself (e.g. minecraft:block/water_overlay will point to
   assets/minecraft/textures/block/water_overlay.png).
  - param: stack - the stack the fluid is in
  - returns: the reference of the texture to apply to a fluid directly touching
 a non-opaque block

## IClientItemExtensions

*interface* `net.minecraftforge.client.extensions.common.IClientItemExtensions`

Client-only extensions to Item.

### Fields
- `static final IClientItemExtensions DEFAULT`

### Methods
- `static IClientItemExtensions of(ItemStack stack)`
- `static IClientItemExtensions of(Item item)`
- `@Nullable default @Nullable Font getFont(ItemStack stack,  IClientItemExtensions.FontContext context)`
  Returns the font used to render data related to this item as specified in the context.
   Return null to use the default font.
  - param: stack - The item stack
  - param: context - The context in which the font will be used
  - returns: A Font or null to use the default
- `@Nullable default HumanoidModel.ArmPose getArmPose(LivingEntity entityLiving,  InteractionHand hand,  ItemStack itemStack)`
  This method returns an ArmPose that can be defined using the HumanoidModel.ArmPose.create(String, boolean, IArmPoseTransformer) method.
   This allows for creating custom item use animations.
  - param: entityLiving - The entity holding the item
  - param: hand - The hand the ArmPose will be applied to
  - param: itemStack - The stack being held
  - returns: A custom ArmPose that can be used to define movement of the arm
- `default boolean applyForgeHandTransform(PoseStack poseStack,  LocalPlayer player,  HumanoidArm arm,  ItemStack itemInHand,  float partialTick,  float equipProcess,  float swingProcess)`
  Called right before when client applies transformations to item in hand and render it.
  - param: poseStack - The pose stack
  - param: player - The player holding the item, it's always main client player
  - param: arm - The arm holding the item
  - param: itemInHand - The held item
  - param: partialTick - Partial tick time, useful for interpolation
  - param: equipProcess - Equip process time, Ranging from 0.0 to 1.0. 0.0 when it's done equipping
  - param: swingProcess - Swing process time, Ranging from 0.0 to 1.0. 0.0 when it's done swinging
  - returns: true if it should skip applying other transforms and go straight to rendering
- `@NotNull default @NotNull HumanoidModel<?> getHumanoidArmorModel(LivingEntity livingEntity,  ItemStack itemStack,  EquipmentSlot equipmentSlot,  HumanoidModel<?> original)`
  Queries the humanoid armor model for this item when it's equipped.
  - param: livingEntity - The entity wearing the armor
  - param: itemStack - The item stack
  - param: equipmentSlot - The slot the item is in
  - param: original - The original armor model. Will have attributes set.
  - returns: A HumanoidModel to be rendered. Relevant properties are to be copied over by the caller.
- `@NotNull default @NotNull Model getGenericArmorModel(LivingEntity livingEntity,  ItemStack itemStack,  EquipmentSlot equipmentSlot,  HumanoidModel<?> original)`
  Queries the armor model for this item when it's equipped. Useful in place of
   getHumanoidArmorModel(LivingEntity, ItemStack, EquipmentSlot, HumanoidModel) for wrapping the original
   model or returning anything non-standard.
  
   If you override this method you are responsible for copying any properties you care about from the original model.
  - param: livingEntity - The entity wearing the armor
  - param: itemStack - The item stack
  - param: equipmentSlot - The slot the item is in
  - param: original - The original armor model. Will have attributes set.
  - returns: A Model to be rendered. Relevant properties must be copied over manually.
- `default void renderHelmetOverlay(ItemStack stack,  Player player,  int width,  int height,  float partialTick)`
  Called when the client starts rendering the HUD, and is wearing this item in the helmet slot.
  
   This is where pumpkins would render their overlay.
  - param: stack - The item stack
  - param: player - The player entity
  - param: width - The viewport width
  - param: height - Viewport height
  - param: partialTick - Partial tick time, useful for interpolation
- `default BlockEntityWithoutLevelRenderer getCustomRenderer()`
  Queries this item's renderer.
  
   Only used if BakedModel.isCustomRenderer() returns true or BlockBehaviour.BlockStateBase.getRenderShape()
   returns RenderShape.ENTITYBLOCK_ANIMATED.
  
   By default, returns vanilla's block entity renderer.

## IClientMobEffectExtensions

*interface* `net.minecraftforge.client.extensions.common.IClientMobEffectExtensions`

Client-only extensions to MobEffect.

### Fields
- `static final IClientMobEffectExtensions DEFAULT`

### Methods
- `static IClientMobEffectExtensions of(MobEffectInstance instance)`
- `static IClientMobEffectExtensions of(MobEffect effect)`
- `default boolean isVisibleInInventory(MobEffectInstance instance)`
  Queries whether the given effect should be shown in the player's inventory.
  
   By default, this returns true.
- `default boolean isVisibleInGui(MobEffectInstance instance)`
  Queries whether the given effect should be shown in the HUD.
  
   By default, this returns true.
- `default boolean renderInventoryIcon(MobEffectInstance instance,  EffectRenderingInventoryScreen<?> screen,  GuiGraphics guiGraphics,  int x,  int y,  int blitOffset)`
  Renders the icon of the specified effect in the player's inventory.
   This can be used to render icons from your own texture sheet.
  - param: instance - The effect instance
  - param: screen - The effect-rendering screen
  - param: guiGraphics - The gui graphics
  - param: x - The x coordinate
  - param: y - The y coordinate
  - param: blitOffset - The blit offset
  - returns: true to prevent default rendering, false otherwise
- `default boolean renderInventoryText(MobEffectInstance instance,  EffectRenderingInventoryScreen<?> screen,  GuiGraphics guiGraphics,  int x,  int y,  int blitOffset)`
  Renders the text of the specified effect in the player's inventory.
  - param: instance - The effect instance
  - param: screen - The effect-rendering screen
  - param: guiGraphics - The gui graphics
  - param: x - The x coordinate
  - param: y - The y coordinate
  - param: blitOffset - The blit offset
  - returns: true to prevent default rendering, false otherwise
- `default boolean renderGuiIcon(MobEffectInstance instance,  Gui gui,  GuiGraphics guiGraphics,  int x,  int y,  float z,  float alpha)`
  Renders the icon of the specified effect on the player's HUD.
   This can be used to render icons from your own texture sheet.
  - param: instance - The effect instance
  - param: gui - The gui
  - param: guiGraphics - The gui graphics
  - param: x - The x coordinate
  - param: y - The y coordinate
  - param: z - The z depth
  - param: alpha - The alpha value. Blinks when the effect is about to run out
  - returns: true to prevent default rendering, false otherwise
