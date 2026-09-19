# net.minecraftforge.fml.client.registry

- [ClientRegistry](#clientregistry)
- [IRenderFactory](#irenderfactory)
- [RenderingRegistry](#renderingregistry)
## ClientRegistry

*class* `net.minecraftforge.fml.client.registry.ClientRegistry`

### Methods
- `public static <T extends TileEntity> void registerTileEntity(java.lang.Class<T> tileEntityClass,  java.lang.String id,  TileEntitySpecialRenderer<? super T> specialRenderer)`
  Utility method for registering a tile entity and it's renderer at once - generally you should register them separately
  - param: tileEntityClass -
  - param: id -
  - param: specialRenderer -
- `public static <T extends TileEntity> void bindTileEntitySpecialRenderer(java.lang.Class<T> tileEntityClass,  TileEntitySpecialRenderer<? super T> specialRenderer)`
- `public static void registerKeyBinding(KeyBinding key)`
- `public static void registerEntityShader(java.lang.Class<? extends Entity> entityClass,  ResourceLocation shader)`
  Register a shader for an entity. This shader gets activated when a spectator begins spectating an entity.
   Vanilla examples of this are the green effect for creepers and the invert effect for endermen.
  - param: entityClass -
  - param: shader -
- `public static ResourceLocation getEntityShader(java.lang.Class<? extends Entity> entityClass)`

## IRenderFactory

*interface* `net.minecraftforge.fml.client.registry.IRenderFactory`

### Methods
- `Render<? super T> createRenderFor(RenderManager manager)`

## RenderingRegistry

*class* `net.minecraftforge.fml.client.registry.RenderingRegistry`

### Methods
- `@Deprecated public static void registerEntityRenderingHandler(java.lang.Class<? extends Entity> entityClass,  Render<? extends Entity> renderer)` (deprecated)
  Deprecated. use the factory version during Preinitialization.
   TODO Will be removed in 1.11.
  Register an entity rendering handler. This will, after mod initialization, be inserted into the main
   render map for entities.
   Call this during Initialization phase.
- `public static void loadEntityRenderers(java.util.Map<java.lang.Class<? extends Entity>,Render<? extends Entity>> entityRenderMap)`
- `public static <T extends Entity> void registerEntityRenderingHandler(java.lang.Class<T> entityClass,  IRenderFactory<? super T> renderFactory)`
  Register an entity rendering handler. This will, after mod initialization, be inserted into the main
   render map for entities.
   Call this during Preinitialization phase.
- `public static void loadEntityRenderers(RenderManager manager,  java.util.Map<java.lang.Class<? extends Entity>,Render<? extends Entity>> renderMap)`
