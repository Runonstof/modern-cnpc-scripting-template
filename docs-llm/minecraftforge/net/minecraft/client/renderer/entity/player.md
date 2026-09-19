# net.minecraft.client.renderer.entity.player

- [PlayerRenderer](#playerrenderer)
## PlayerRenderer

*class* `net.minecraft.client.renderer.entity.player.PlayerRenderer`

### Inherited fields
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `layers`, `model`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `entityRenderDispatcher`, `NAMETAG_SCALE`, `shadowRadius`, `shadowStrength`

### Methods
- `public void render(AbstractClientPlayer p_117788_,  float p_117789_,  float p_117790_,  PoseStack p_117791_,  MultiBufferSource p_117792_,  int p_117793_)`
- `public Vec3 getRenderOffset(AbstractClientPlayer p_117785_,  float p_117786_)`
- `private void setModelProperties(AbstractClientPlayer p_117819_)`
- `private static HumanoidModel.ArmPose getArmPose(AbstractClientPlayer p_117795_,  InteractionHand p_117796_)`
- `public ResourceLocation getTextureLocation(AbstractClientPlayer p_117783_)`
- `protected void scale(AbstractClientPlayer p_117798_,  PoseStack p_117799_,  float p_117800_)`
- `protected void renderNameTag(AbstractClientPlayer p_117808_,  Component p_117809_,  PoseStack p_117810_,  MultiBufferSource p_117811_,  int p_117812_)`
- `public void renderRightHand(PoseStack p_117771_,  MultiBufferSource p_117772_,  int p_117773_,  AbstractClientPlayer p_117774_)`
- `public void renderLeftHand(PoseStack p_117814_,  MultiBufferSource p_117815_,  int p_117816_,  AbstractClientPlayer p_117817_)`
- `private void renderHand(PoseStack p_117776_,  MultiBufferSource p_117777_,  int p_117778_,  AbstractClientPlayer p_117779_,  ModelPart p_117780_,  ModelPart p_117781_)`
- `protected void setupRotations(AbstractClientPlayer p_117802_,  PoseStack p_117803_,  float p_117804_,  float p_117805_,  float p_117806_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.LivingEntityRenderer`: `addLayer`, `getAttackAnim`, `getBob`, `getFlipDegrees`, `getModel`, `getOverlayCoords`, `getRenderType`, `getWhiteOverlayProgress`, `isBodyVisible`, `isEntityUpsideDown`, `isShaking`, `shouldShowName`
- from `net.minecraft.client.renderer.entity.EntityRenderer`: `getBlockLightLevel`, `getFont`, `getPackedLightCoords`, `getSkyLightLevel`, `shouldRender`
