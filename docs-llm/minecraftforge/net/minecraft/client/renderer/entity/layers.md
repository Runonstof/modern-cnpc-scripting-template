# net.minecraft.client.renderer.entity.layers

- [LayerArmorBase](#layerarmorbase)
- [LayerArrow](#layerarrow)
- [LayerBipedArmor](#layerbipedarmor)
- [LayerCape](#layercape)
- [LayerCreeperCharge](#layercreepercharge)
- [LayerCustomHead](#layercustomhead)
- [LayerDeadmau5Head](#layerdeadmau5head)
- [LayerElytra](#layerelytra)
- [LayerEnderDragonDeath](#layerenderdragondeath)
- [LayerEnderDragonEyes](#layerenderdragoneyes)
- [LayerEndermanEyes](#layerendermaneyes)
- [LayerEntityOnShoulder](#layerentityonshoulder)
- [LayerHeldBlock](#layerheldblock)
- [LayerHeldItem](#layerhelditem)
- [LayerHeldItemWitch](#layerhelditemwitch)
- [LayerIronGolemFlower](#layerirongolemflower)
- [LayerLlamaDecor](#layerllamadecor)
- [LayerMooshroomMushroom](#layermooshroommushroom)
- [LayerRenderer](#layerrenderer)
- [LayerSaddle](#layersaddle)
- [LayerSheepWool](#layersheepwool)
- [LayerSlimeGel](#layerslimegel)
- [LayerSnowmanHead](#layersnowmanhead)
- [LayerSpiderEyes](#layerspidereyes)
- [LayerStrayClothing](#layerstrayclothing)
- [LayerVillagerArmor](#layervillagerarmor)
- [LayerWitherAura](#layerwitheraura)
- [LayerWolfCollar](#layerwolfcollar)
## LayerArmorBase

*class* `net.minecraft.client.renderer.entity.layers.LayerArmorBase`

All Implemented Interfaces: LayerRenderer<EntityLivingBase>

### Fields
- `protected static final ResourceLocation ENCHANTED_ITEM_GLINT_RES`
- `protected T extends ModelBase modelLeggings`
- `protected T extends ModelBase modelArmor`

### Methods
- `public void doRenderLayer(EntityLivingBase entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`
- `public T getModelFromSlot(EntityEquipmentSlot slotIn)`
- `public static void renderEnchantedGlint(RenderLivingBase<?> p_188364_0_,  EntityLivingBase p_188364_1_,  ModelBase model,  float p_188364_3_,  float p_188364_4_,  float p_188364_5_,  float p_188364_6_,  float p_188364_7_,  float p_188364_8_,  float p_188364_9_)`
- `protected abstract void initArmor()`
- `protected abstract void setModelSlotVisible(T p_188359_1_,  EntityEquipmentSlot slotIn)`
- `protected T getArmorModelHook(EntityLivingBase entity,  ItemStack itemStack,  EntityEquipmentSlot slot,  T model)`
  Hook to allow item-sensitive armor model. for LayerBipedArmor.
- `public ResourceLocation getArmorResource(Entity entity,  ItemStack stack,  EntityEquipmentSlot slot,  java.lang.String type)`
  More generic ForgeHook version of the above function, it allows for Items to have more control over what texture they provide.
  - param: entity - Entity wearing the armor
  - param: stack - ItemStack for the armor
  - param: slot - Slot ID that the item is in
  - param: type - Subtype, can be null or "overlay"
  - returns: ResourceLocation pointing at the armor's texture

## LayerArrow

*class* `net.minecraft.client.renderer.entity.layers.LayerArrow`

All Implemented Interfaces: LayerRenderer<EntityLivingBase>

### Methods
- `public void doRenderLayer(EntityLivingBase entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerBipedArmor

*class* `net.minecraft.client.renderer.entity.layers.LayerBipedArmor`

All Implemented Interfaces: LayerRenderer<EntityLivingBase>

### Inherited fields
- from `net.minecraft.client.renderer.entity.layers.LayerArmorBase`: `ENCHANTED_ITEM_GLINT_RES`, `modelArmor`, `modelLeggings`

### Methods
- `protected void initArmor()`
- `protected void setModelSlotVisible(ModelBiped p_188359_1_,  EntityEquipmentSlot slotIn)`
- `protected void setModelVisible(ModelBiped model)`
- `protected ModelBiped getArmorModelHook(EntityLivingBase entity,  ItemStack itemStack,  EntityEquipmentSlot slot,  ModelBiped model)`
  Description copied from class: LayerArmorBase
  Hook to allow item-sensitive armor model. for LayerBipedArmor.

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.LayerArmorBase`: `doRenderLayer`, `getArmorResource`, `getModelFromSlot`, `renderEnchantedGlint`, `shouldCombineTextures`

## LayerCape

*class* `net.minecraft.client.renderer.entity.layers.LayerCape`

All Implemented Interfaces: LayerRenderer<AbstractClientPlayer>

### Methods
- `public void doRenderLayer(AbstractClientPlayer entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerCreeperCharge

*class* `net.minecraft.client.renderer.entity.layers.LayerCreeperCharge`

All Implemented Interfaces: LayerRenderer<EntityCreeper>

### Methods
- `public void doRenderLayer(EntityCreeper entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerCustomHead

*class* `net.minecraft.client.renderer.entity.layers.LayerCustomHead`

All Implemented Interfaces: LayerRenderer<EntityLivingBase>

### Methods
- `public void doRenderLayer(EntityLivingBase entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerDeadmau5Head

*class* `net.minecraft.client.renderer.entity.layers.LayerDeadmau5Head`

All Implemented Interfaces: LayerRenderer<AbstractClientPlayer>

### Methods
- `public void doRenderLayer(AbstractClientPlayer entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerElytra

*class* `net.minecraft.client.renderer.entity.layers.LayerElytra`

All Implemented Interfaces: LayerRenderer<EntityLivingBase>

### Fields
- `protected final RenderLivingBase<?> renderPlayer`

### Methods
- `public void doRenderLayer(EntityLivingBase entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerEnderDragonDeath

*class* `net.minecraft.client.renderer.entity.layers.LayerEnderDragonDeath`

All Implemented Interfaces: LayerRenderer<EntityDragon>

### Methods
- `public void doRenderLayer(EntityDragon entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerEnderDragonEyes

*class* `net.minecraft.client.renderer.entity.layers.LayerEnderDragonEyes`

All Implemented Interfaces: LayerRenderer<EntityDragon>

### Methods
- `public void doRenderLayer(EntityDragon entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerEndermanEyes

*class* `net.minecraft.client.renderer.entity.layers.LayerEndermanEyes`

All Implemented Interfaces: LayerRenderer<EntityEnderman>

### Methods
- `public void doRenderLayer(EntityEnderman entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerEntityOnShoulder

*class* `net.minecraft.client.renderer.entity.layers.LayerEntityOnShoulder`

All Implemented Interfaces: LayerRenderer<EntityPlayer>

### Fields
- `protected RenderLivingBase<? extends EntityLivingBase> leftRenderer`
- `protected RenderLivingBase<? extends EntityLivingBase> rightRenderer`

### Methods
- `public void doRenderLayer(EntityPlayer entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerHeldBlock

*class* `net.minecraft.client.renderer.entity.layers.LayerHeldBlock`

All Implemented Interfaces: LayerRenderer<EntityEnderman>

### Methods
- `public void doRenderLayer(EntityEnderman entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerHeldItem

*class* `net.minecraft.client.renderer.entity.layers.LayerHeldItem`

All Implemented Interfaces: LayerRenderer<EntityLivingBase>

### Fields
- `protected final RenderLivingBase<?> livingEntityRenderer`

### Methods
- `public void doRenderLayer(EntityLivingBase entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `protected void translateToHand(EnumHandSide p_191361_1_)`
- `public boolean shouldCombineTextures()`

## LayerHeldItemWitch

*class* `net.minecraft.client.renderer.entity.layers.LayerHeldItemWitch`

All Implemented Interfaces: LayerRenderer<EntityWitch>

### Methods
- `public void doRenderLayer(EntityWitch entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerIronGolemFlower

*class* `net.minecraft.client.renderer.entity.layers.LayerIronGolemFlower`

All Implemented Interfaces: LayerRenderer<EntityIronGolem>

### Methods
- `public void doRenderLayer(EntityIronGolem entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerLlamaDecor

*class* `net.minecraft.client.renderer.entity.layers.LayerLlamaDecor`

All Implemented Interfaces: LayerRenderer<EntityLlama>

### Methods
- `public void doRenderLayer(EntityLlama entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerMooshroomMushroom

*class* `net.minecraft.client.renderer.entity.layers.LayerMooshroomMushroom`

All Implemented Interfaces: LayerRenderer<EntityMooshroom>

### Methods
- `public void doRenderLayer(EntityMooshroom entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerRenderer

*interface* `net.minecraft.client.renderer.entity.layers.LayerRenderer`

### Methods
- `void doRenderLayer(E entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `boolean shouldCombineTextures()`

## LayerSaddle

*class* `net.minecraft.client.renderer.entity.layers.LayerSaddle`

All Implemented Interfaces: LayerRenderer<EntityPig>

### Methods
- `public void doRenderLayer(EntityPig entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerSheepWool

*class* `net.minecraft.client.renderer.entity.layers.LayerSheepWool`

All Implemented Interfaces: LayerRenderer<EntitySheep>

### Methods
- `public void doRenderLayer(EntitySheep entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerSlimeGel

*class* `net.minecraft.client.renderer.entity.layers.LayerSlimeGel`

All Implemented Interfaces: LayerRenderer<EntitySlime>

### Methods
- `public void doRenderLayer(EntitySlime entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerSnowmanHead

*class* `net.minecraft.client.renderer.entity.layers.LayerSnowmanHead`

All Implemented Interfaces: LayerRenderer<EntitySnowman>

### Methods
- `public void doRenderLayer(EntitySnowman entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerSpiderEyes

*class* `net.minecraft.client.renderer.entity.layers.LayerSpiderEyes`

All Implemented Interfaces: LayerRenderer<T>

### Methods
- `public void doRenderLayer(T entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerStrayClothing

*class* `net.minecraft.client.renderer.entity.layers.LayerStrayClothing`

All Implemented Interfaces: LayerRenderer<EntityStray>

### Methods
- `public void doRenderLayer(EntityStray entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerVillagerArmor

*class* `net.minecraft.client.renderer.entity.layers.LayerVillagerArmor`

All Implemented Interfaces: LayerRenderer<EntityLivingBase>

### Inherited fields
- from `net.minecraft.client.renderer.entity.layers.LayerArmorBase`: `ENCHANTED_ITEM_GLINT_RES`, `modelArmor`, `modelLeggings`

### Methods
- `protected void initArmor()`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.LayerBipedArmor`: `getArmorModelHook`, `setModelSlotVisible`, `setModelVisible`
- from `net.minecraft.client.renderer.entity.layers.LayerArmorBase`: `doRenderLayer`, `getArmorResource`, `getModelFromSlot`, `renderEnchantedGlint`, `shouldCombineTextures`

## LayerWitherAura

*class* `net.minecraft.client.renderer.entity.layers.LayerWitherAura`

All Implemented Interfaces: LayerRenderer<EntityWither>

### Methods
- `public void doRenderLayer(EntityWither entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`

## LayerWolfCollar

*class* `net.minecraft.client.renderer.entity.layers.LayerWolfCollar`

All Implemented Interfaces: LayerRenderer<EntityWolf>

### Methods
- `public void doRenderLayer(EntityWolf entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTicks,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public boolean shouldCombineTextures()`
