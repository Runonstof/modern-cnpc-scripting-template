# net.minecraft.client.renderer.tileentity

- [TileEntityBannerRenderer](#tileentitybannerrenderer)
- [TileEntityBeaconRenderer](#tileentitybeaconrenderer)
- [TileEntityBedRenderer](#tileentitybedrenderer)
- [TileEntityChestRenderer](#tileentitychestrenderer)
- [TileEntityEnchantmentTableRenderer](#tileentityenchantmenttablerenderer)
- [TileEntityEnderChestRenderer](#tileentityenderchestrenderer)
- [TileEntityEndGatewayRenderer](#tileentityendgatewayrenderer)
- [TileEntityEndPortalRenderer](#tileentityendportalrenderer)
- [TileEntityItemStackRenderer](#tileentityitemstackrenderer)
- [TileEntityMobSpawnerRenderer](#tileentitymobspawnerrenderer)
- [TileEntityPistonRenderer](#tileentitypistonrenderer)
- [TileEntityRendererDispatcher](#tileentityrendererdispatcher)
- [TileEntityShulkerBoxRenderer](#tileentityshulkerboxrenderer)
- [TileEntitySignRenderer](#tileentitysignrenderer)
- [TileEntitySkullRenderer](#tileentityskullrenderer)
- [TileEntitySpecialRenderer](#tileentityspecialrenderer)
- [TileEntityStructureRenderer](#tileentitystructurerenderer)
## TileEntityBannerRenderer

*class* `net.minecraft.client.renderer.tileentity.TileEntityBannerRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `DESTROY_STAGES`, `rendererDispatcher`

### Methods
- `public void render(TileEntityBanner te,  double x,  double y,  double z,  float partialTicks,  int destroyStage,  float alpha)`

### Inherited methods
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `bindTexture`, `drawNameplate`, `getFontRenderer`, `getWorld`, `isGlobalRenderer`, `renderTileEntityFast`, `setLightmapDisabled`, `setRendererDispatcher`

## TileEntityBeaconRenderer

*class* `net.minecraft.client.renderer.tileentity.TileEntityBeaconRenderer`

### Fields
- `public static final ResourceLocation TEXTURE_BEACON_BEAM`

### Inherited fields
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `DESTROY_STAGES`, `rendererDispatcher`

### Methods
- `public void render(TileEntityBeacon te,  double x,  double y,  double z,  float partialTicks,  int destroyStage,  float alpha)`
- `public void renderBeacon(double x,  double y,  double z,  double partialTicks,  double textureScale,  java.util.List<TileEntityBeacon.BeamSegment> beamSegments,  double totalWorldTime)`
- `public static void renderBeamSegment(double x,  double y,  double z,  double partialTicks,  double textureScale,  double totalWorldTime,  int yOffset,  int height,  float[] colors)`
- `public static void renderBeamSegment(double x,  double y,  double z,  double partialTicks,  double textureScale,  double totalWorldTime,  int yOffset,  int height,  float[] colors,  double beamRadius,  double glowRadius)`
- `public boolean isGlobalRenderer(TileEntityBeacon te)`

### Inherited methods
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `bindTexture`, `drawNameplate`, `getFontRenderer`, `getWorld`, `renderTileEntityFast`, `setLightmapDisabled`, `setRendererDispatcher`

## TileEntityBedRenderer

*class* `net.minecraft.client.renderer.tileentity.TileEntityBedRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `DESTROY_STAGES`, `rendererDispatcher`

### Methods
- `public void render(TileEntityBed te,  double x,  double y,  double z,  float partialTicks,  int destroyStage,  float alpha)`

### Inherited methods
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `bindTexture`, `drawNameplate`, `getFontRenderer`, `getWorld`, `isGlobalRenderer`, `renderTileEntityFast`, `setLightmapDisabled`, `setRendererDispatcher`

## TileEntityChestRenderer

*class* `net.minecraft.client.renderer.tileentity.TileEntityChestRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `DESTROY_STAGES`, `rendererDispatcher`

### Methods
- `public void render(TileEntityChest te,  double x,  double y,  double z,  float partialTicks,  int destroyStage,  float alpha)`

### Inherited methods
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `bindTexture`, `drawNameplate`, `getFontRenderer`, `getWorld`, `isGlobalRenderer`, `renderTileEntityFast`, `setLightmapDisabled`, `setRendererDispatcher`

## TileEntityEnchantmentTableRenderer

*class* `net.minecraft.client.renderer.tileentity.TileEntityEnchantmentTableRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `DESTROY_STAGES`, `rendererDispatcher`

### Methods
- `public void render(TileEntityEnchantmentTable te,  double x,  double y,  double z,  float partialTicks,  int destroyStage,  float alpha)`

### Inherited methods
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `bindTexture`, `drawNameplate`, `getFontRenderer`, `getWorld`, `isGlobalRenderer`, `renderTileEntityFast`, `setLightmapDisabled`, `setRendererDispatcher`

## TileEntityEnderChestRenderer

*class* `net.minecraft.client.renderer.tileentity.TileEntityEnderChestRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `DESTROY_STAGES`, `rendererDispatcher`

### Methods
- `public void render(TileEntityEnderChest te,  double x,  double y,  double z,  float partialTicks,  int destroyStage,  float alpha)`

### Inherited methods
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `bindTexture`, `drawNameplate`, `getFontRenderer`, `getWorld`, `isGlobalRenderer`, `renderTileEntityFast`, `setLightmapDisabled`, `setRendererDispatcher`

## TileEntityEndGatewayRenderer

*class* `net.minecraft.client.renderer.tileentity.TileEntityEndGatewayRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `DESTROY_STAGES`, `rendererDispatcher`

### Methods
- `public void render(TileEntityEndPortal te,  double x,  double y,  double z,  float partialTicks,  int destroyStage,  float alpha)`
- `protected int getPasses(double p_191286_1_)`
- `protected float getOffset()`

### Inherited methods
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `bindTexture`, `drawNameplate`, `getFontRenderer`, `getWorld`, `isGlobalRenderer`, `renderTileEntityFast`, `setLightmapDisabled`, `setRendererDispatcher`

## TileEntityEndPortalRenderer

*class* `net.minecraft.client.renderer.tileentity.TileEntityEndPortalRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `DESTROY_STAGES`, `rendererDispatcher`

### Methods
- `public void render(TileEntityEndPortal te,  double x,  double y,  double z,  float partialTicks,  int destroyStage,  float alpha)`
- `protected int getPasses(double p_191286_1_)`
- `protected float getOffset()`

### Inherited methods
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `bindTexture`, `drawNameplate`, `getFontRenderer`, `getWorld`, `isGlobalRenderer`, `renderTileEntityFast`, `setLightmapDisabled`, `setRendererDispatcher`

## TileEntityItemStackRenderer

*class* `net.minecraft.client.renderer.tileentity.TileEntityItemStackRenderer`

### Fields
- `public static TileEntityItemStackRenderer instance`

### Methods
- `public void renderByItem(ItemStack itemStackIn)`
- `public void renderByItem(ItemStack p_192838_1_,  float partialTicks)`

## TileEntityMobSpawnerRenderer

*class* `net.minecraft.client.renderer.tileentity.TileEntityMobSpawnerRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `DESTROY_STAGES`, `rendererDispatcher`

### Methods
- `public void render(TileEntityMobSpawner te,  double x,  double y,  double z,  float partialTicks,  int destroyStage,  float alpha)`
- `public static void renderMob(MobSpawnerBaseLogic mobSpawnerLogic,  double posX,  double posY,  double posZ,  float partialTicks)`

### Inherited methods
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `bindTexture`, `drawNameplate`, `getFontRenderer`, `getWorld`, `isGlobalRenderer`, `renderTileEntityFast`, `setLightmapDisabled`, `setRendererDispatcher`

## TileEntityPistonRenderer

*class* `net.minecraft.client.renderer.tileentity.TileEntityPistonRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `DESTROY_STAGES`, `rendererDispatcher`

### Methods
- `public void render(TileEntityPiston te,  double x,  double y,  double z,  float partialTicks,  int destroyStage,  float alpha)`

### Inherited methods
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `bindTexture`, `drawNameplate`, `getFontRenderer`, `getWorld`, `isGlobalRenderer`, `renderTileEntityFast`, `setLightmapDisabled`, `setRendererDispatcher`

## TileEntityRendererDispatcher

*class* `net.minecraft.client.renderer.tileentity.TileEntityRendererDispatcher`

### Fields
- `public final java.util.Map<java.lang.Class<? extends TileEntity>,TileEntitySpecialRenderer<? extends TileEntity>> renderers`
- `public static TileEntityRendererDispatcher instance`
- `public FontRenderer fontRenderer`
- `public static double staticPlayerX`
- `public static double staticPlayerY`
- `public static double staticPlayerZ`
- `public TextureManager renderEngine`
- `public World world`
- `public Entity entity`
- `public float entityYaw`
- `public float entityPitch`
- `public RayTraceResult cameraHitResult`
- `public double entityX`
- `public double entityY`
- `public double entityZ`

### Methods
- `public <T extends TileEntity> TileEntitySpecialRenderer<T> getRenderer(java.lang.Class<? extends TileEntity> teClass)`
- `public <T extends TileEntity> TileEntitySpecialRenderer<T> getRenderer(TileEntity tileEntityIn)`
- `public void prepare(World worldIn,  TextureManager renderEngineIn,  FontRenderer fontRendererIn,  Entity entityIn,  RayTraceResult cameraHitResultIn,  float p_190056_6_)`
- `public void render(TileEntity tileentityIn,  float partialTicks,  int destroyStage)`
- `public void render(TileEntity tileEntityIn,  double x,  double y,  double z,  float partialTicks)`
- `public void render(TileEntity p_192855_1_,  double p_192855_2_,  double p_192855_4_,  double p_192855_6_,  float p_192855_8_,  float p_192855_9_)`
- `public void render(TileEntity tileEntityIn,  double x,  double y,  double z,  float partialTicks,  int destroyStage,  float p_192854_10_)`
- `public void setWorld(World worldIn)`
- `public FontRenderer getFontRenderer()`
- `public void preDrawBatch()`
  Prepare for a batched TESR rendering.
   You probably shouldn't call this manually.
- `public void drawBatch(int pass)`
  Render all TESRs batched so far.
   You probably shouldn't call this manually.

## TileEntityShulkerBoxRenderer

*class* `net.minecraft.client.renderer.tileentity.TileEntityShulkerBoxRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `DESTROY_STAGES`, `rendererDispatcher`

### Methods
- `public void render(TileEntityShulkerBox te,  double x,  double y,  double z,  float partialTicks,  int destroyStage,  float alpha)`

### Inherited methods
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `bindTexture`, `drawNameplate`, `getFontRenderer`, `getWorld`, `isGlobalRenderer`, `renderTileEntityFast`, `setLightmapDisabled`, `setRendererDispatcher`

## TileEntitySignRenderer

*class* `net.minecraft.client.renderer.tileentity.TileEntitySignRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `DESTROY_STAGES`, `rendererDispatcher`

### Methods
- `public void render(TileEntitySign te,  double x,  double y,  double z,  float partialTicks,  int destroyStage,  float alpha)`

### Inherited methods
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `bindTexture`, `drawNameplate`, `getFontRenderer`, `getWorld`, `isGlobalRenderer`, `renderTileEntityFast`, `setLightmapDisabled`, `setRendererDispatcher`

## TileEntitySkullRenderer

*class* `net.minecraft.client.renderer.tileentity.TileEntitySkullRenderer`

### Fields
- `public static TileEntitySkullRenderer instance`

### Inherited fields
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `DESTROY_STAGES`, `rendererDispatcher`

### Methods
- `public void render(TileEntitySkull te,  double x,  double y,  double z,  float partialTicks,  int destroyStage,  float alpha)`
- `public void setRendererDispatcher(TileEntityRendererDispatcher rendererDispatcherIn)`
- `public void renderSkull(float x,  float y,  float z,  EnumFacing facing,  float rotationIn,  int skullType,  GameProfile profile,  int destroyStage,  float animateTicks)`

### Inherited methods
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `bindTexture`, `drawNameplate`, `getFontRenderer`, `getWorld`, `isGlobalRenderer`, `renderTileEntityFast`, `setLightmapDisabled`

## TileEntitySpecialRenderer

*class* `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`

### Fields
- `protected static final ResourceLocation[] DESTROY_STAGES`
- `protected TileEntityRendererDispatcher rendererDispatcher`

### Methods
- `public void render(T te,  double x,  double y,  double z,  float partialTicks,  int destroyStage,  float alpha)`
- `protected void setLightmapDisabled(boolean disabled)`
- `protected void bindTexture(ResourceLocation location)`
- `protected World getWorld()`
- `public void setRendererDispatcher(TileEntityRendererDispatcher rendererDispatcherIn)`
- `public FontRenderer getFontRenderer()`
- `public boolean isGlobalRenderer(T te)`
- `public void renderTileEntityFast(T te,  double x,  double y,  double z,  float partialTicks,  int destroyStage,  float partial,  BufferBuilder buffer)`
- `protected void drawNameplate(T te,  java.lang.String str,  double x,  double y,  double z,  int maxDistance)`

## TileEntityStructureRenderer

*class* `net.minecraft.client.renderer.tileentity.TileEntityStructureRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `DESTROY_STAGES`, `rendererDispatcher`

### Methods
- `public void render(TileEntityStructure te,  double x,  double y,  double z,  float partialTicks,  int destroyStage,  float alpha)`
- `public boolean isGlobalRenderer(TileEntityStructure te)`

### Inherited methods
- from `net.minecraft.client.renderer.tileentity.TileEntitySpecialRenderer`: `bindTexture`, `drawNameplate`, `getFontRenderer`, `getWorld`, `renderTileEntityFast`, `setLightmapDisabled`, `setRendererDispatcher`
