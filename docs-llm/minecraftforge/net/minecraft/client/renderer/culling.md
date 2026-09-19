# net.minecraft.client.renderer.culling

- [Frustum](#frustum)
## Frustum

*class* `net.minecraft.client.renderer.culling.Frustum`

### Fields
- `public static final int OFFSET_STEP` (= 4)
- `private final org.joml.FrustumIntersection intersection`
- `private final org.joml.Matrix4f matrix`
- `private org.joml.Vector4f viewVector`
- `private double camX`
- `private double camY`
- `private double camZ`

### Methods
- `public Frustum offsetToFullyIncludeCameraCube(int p_194442_)`
- `public void prepare(double p_113003_,  double p_113004_,  double p_113005_)`
- `private void calculateFrustum(org.joml.Matrix4f p_253909_,  org.joml.Matrix4f p_254521_)`
- `public boolean isVisible(AABB p_113030_)`
- `private boolean cubeInFrustum(double p_113007_,  double p_113008_,  double p_113009_,  double p_113010_,  double p_113011_,  double p_113012_)`
