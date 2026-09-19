# net.minecraft.client.renderer.culling

- [ClippingHelper](#clippinghelper)
- [ClippingHelperImpl](#clippinghelperimpl)
- [Frustum](#frustum)
- [ICamera](#icamera)
## ClippingHelper

*class* `net.minecraft.client.renderer.culling.ClippingHelper`

### Fields
- `public float[][] frustum`
- `public float[] projectionMatrix`
- `public float[] modelviewMatrix`
- `public float[] clippingMatrix`

### Methods
- `public boolean isBoxInFrustum(double p_78553_1_,  double p_78553_3_,  double p_78553_5_,  double p_78553_7_,  double p_78553_9_,  double p_78553_11_)`

## ClippingHelperImpl

*class* `net.minecraft.client.renderer.culling.ClippingHelperImpl`

### Inherited fields
- from `net.minecraft.client.renderer.culling.ClippingHelper`: `clippingMatrix`, `frustum`, `modelviewMatrix`, `projectionMatrix`

### Methods
- `public static ClippingHelper getInstance()`
- `public void init()`

### Inherited methods
- from `net.minecraft.client.renderer.culling.ClippingHelper`: `isBoxInFrustum`

## Frustum

*class* `net.minecraft.client.renderer.culling.Frustum`

All Implemented Interfaces: ICamera

### Methods
- `public void setPosition(double xIn,  double yIn,  double zIn)`
- `public boolean isBoxInFrustum(double p_78548_1_,  double p_78548_3_,  double p_78548_5_,  double p_78548_7_,  double p_78548_9_,  double p_78548_11_)`
- `public boolean isBoundingBoxInFrustum(AxisAlignedBB p_78546_1_)`

## ICamera

*interface* `net.minecraft.client.renderer.culling.ICamera`

### Methods
- `boolean isBoundingBoxInFrustum(AxisAlignedBB p_78546_1_)`
- `void setPosition(double xIn,  double yIn,  double zIn)`
