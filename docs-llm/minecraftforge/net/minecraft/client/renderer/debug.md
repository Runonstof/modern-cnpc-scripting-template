# net.minecraft.client.renderer.debug

- [DebugRenderer](#debugrenderer)
- [DebugRenderer.IDebugRenderer](#debugrenderer.idebugrenderer)
- [DebugRendererChunkBorder](#debugrendererchunkborder)
- [DebugRendererCollisionBox](#debugrenderercollisionbox)
- [DebugRendererHeightMap](#debugrendererheightmap)
- [DebugRendererNeighborsUpdate](#debugrendererneighborsupdate)
- [DebugRendererPathfinding](#debugrendererpathfinding)
- [DebugRendererSolidFace](#debugrenderersolidface)
- [DebugRendererWater](#debugrendererwater)
## DebugRenderer

*class* `net.minecraft.client.renderer.debug.DebugRenderer`

### Fields
- `public final DebugRenderer.IDebugRenderer pathfinding`
- `public final DebugRenderer.IDebugRenderer water`
- `public final DebugRenderer.IDebugRenderer chunkBorder`
- `public final DebugRenderer.IDebugRenderer heightMap`
- `public final DebugRenderer.IDebugRenderer collisionBox`
- `public final DebugRenderer.IDebugRenderer neighborsUpdate`
- `public final DebugRenderer.IDebugRenderer solidFace`

### Methods
- `public boolean shouldRender()`
- `public boolean toggleChunkBorders()`
- `public void renderDebug(float partialTicks,  long finishTimeNano)`
- `public static void renderDebugText(java.lang.String str,  int x,  int y,  int z,  float partialTicks,  int color)`
- `public static void renderDebugText(java.lang.String str,  double x,  double y,  double z,  float partialTicks,  int color)`

## DebugRenderer.IDebugRenderer

*interface* `net.minecraft.client.renderer.debug.DebugRenderer.IDebugRenderer`

Enclosing class: DebugRenderer

### Methods
- `void render(float partialTicks,  long finishTimeNano)`

## DebugRendererChunkBorder

*class* `net.minecraft.client.renderer.debug.DebugRendererChunkBorder`

All Implemented Interfaces: DebugRenderer.IDebugRenderer

### Methods
- `public void render(float partialTicks,  long finishTimeNano)`

## DebugRendererCollisionBox

*class* `net.minecraft.client.renderer.debug.DebugRendererCollisionBox`

All Implemented Interfaces: DebugRenderer.IDebugRenderer

### Methods
- `public void render(float partialTicks,  long finishTimeNano)`

## DebugRendererHeightMap

*class* `net.minecraft.client.renderer.debug.DebugRendererHeightMap`

All Implemented Interfaces: DebugRenderer.IDebugRenderer

### Methods
- `public void render(float partialTicks,  long finishTimeNano)`

## DebugRendererNeighborsUpdate

*class* `net.minecraft.client.renderer.debug.DebugRendererNeighborsUpdate`

All Implemented Interfaces: DebugRenderer.IDebugRenderer

### Methods
- `public void addUpdate(long worldTime,  BlockPos pos)`
- `public void render(float partialTicks,  long finishTimeNano)`

## DebugRendererPathfinding

*class* `net.minecraft.client.renderer.debug.DebugRendererPathfinding`

All Implemented Interfaces: DebugRenderer.IDebugRenderer

### Methods
- `public void addPath(int eid,  Path pathIn,  float distance)`
- `public void render(float partialTicks,  long finishTimeNano)`
- `public void renderPathLine(float finishTimeNano,  Path pathIn)`

## DebugRendererSolidFace

*class* `net.minecraft.client.renderer.debug.DebugRendererSolidFace`

All Implemented Interfaces: DebugRenderer.IDebugRenderer

### Methods
- `public void render(float partialTicks,  long finishTimeNano)`

## DebugRendererWater

*class* `net.minecraft.client.renderer.debug.DebugRendererWater`

All Implemented Interfaces: DebugRenderer.IDebugRenderer

### Methods
- `public void render(float partialTicks,  long finishTimeNano)`
