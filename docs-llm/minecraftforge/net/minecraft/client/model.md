# net.minecraft.client.model

- [IMultipassModel](#imultipassmodel)
- [ModelArmorStand](#modelarmorstand)
- [ModelArmorStandArmor](#modelarmorstandarmor)
- [ModelBanner](#modelbanner)
- [ModelBase](#modelbase)
- [ModelBat](#modelbat)
- [ModelBed](#modelbed)
- [ModelBiped](#modelbiped)
- [ModelBiped.ArmPose](#modelbiped.armpose)
- [ModelBlaze](#modelblaze)
- [ModelBoat](#modelboat)
- [ModelBook](#modelbook)
- [ModelBox](#modelbox)
- [ModelChest](#modelchest)
- [ModelChicken](#modelchicken)
- [ModelCow](#modelcow)
- [ModelCreeper](#modelcreeper)
- [ModelDragon](#modeldragon)
- [ModelDragonHead](#modeldragonhead)
- [ModelElytra](#modelelytra)
- [ModelEnderCrystal](#modelendercrystal)
- [ModelEnderman](#modelenderman)
- [ModelEnderMite](#modelendermite)
- [ModelEvokerFangs](#modelevokerfangs)
- [ModelGhast](#modelghast)
- [ModelGuardian](#modelguardian)
- [ModelHorse](#modelhorse)
- [ModelHumanoidHead](#modelhumanoidhead)
- [ModelIllager](#modelillager)
- [ModelIronGolem](#modelirongolem)
- [ModelLargeChest](#modellargechest)
- [ModelLeashKnot](#modelleashknot)
- [ModelLlama](#modelllama)
- [ModelLlamaSpit](#modelllamaspit)
- [ModelMagmaCube](#modelmagmacube)
- [ModelMinecart](#modelminecart)
- [ModelOcelot](#modelocelot)
- [ModelParrot](#modelparrot)
- [ModelPig](#modelpig)
- [ModelPlayer](#modelplayer)
- [ModelPolarBear](#modelpolarbear)
- [ModelQuadruped](#modelquadruped)
- [ModelRabbit](#modelrabbit)
- [ModelRenderer](#modelrenderer)
- [ModelSheep1](#modelsheep1)
- [ModelSheep2](#modelsheep2)
- [ModelShield](#modelshield)
- [ModelShulker](#modelshulker)
- [ModelShulkerBullet](#modelshulkerbullet)
- [ModelSign](#modelsign)
- [ModelSilverfish](#modelsilverfish)
- [ModelSkeleton](#modelskeleton)
- [ModelSkeletonHead](#modelskeletonhead)
- [ModelSlime](#modelslime)
- [ModelSnowMan](#modelsnowman)
- [ModelSpider](#modelspider)
- [ModelSquid](#modelsquid)
- [ModelVex](#modelvex)
- [ModelVillager](#modelvillager)
- [ModelWitch](#modelwitch)
- [ModelWither](#modelwither)
- [ModelWolf](#modelwolf)
- [ModelZombie](#modelzombie)
- [ModelZombieVillager](#modelzombievillager)
- [PositionTextureVertex](#positiontexturevertex)
- [TexturedQuad](#texturedquad)
- [TextureOffset](#textureoffset)
## IMultipassModel

*interface* `net.minecraft.client.model.IMultipassModel`

### Methods
- `void renderMultipass(Entity p_187054_1_,  float p_187054_2_,  float p_187054_3_,  float p_187054_4_,  float p_187054_5_,  float p_187054_6_,  float scale)`

## ModelArmorStand

*class* `net.minecraft.client.model.ModelArmorStand`

### Fields
- `public ModelRenderer standRightSide`
- `public ModelRenderer standLeftSide`
- `public ModelRenderer standWaist`
- `public ModelRenderer standBase`

### Inherited fields
- from `net.minecraft.client.model.ModelBiped`: `bipedBody`, `bipedHead`, `bipedHeadwear`, `bipedLeftArm`, `bipedLeftLeg`, `bipedRightArm`, `bipedRightLeg`, `isSneak`, `leftArmPose`, `rightArmPose`
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void postRenderArm(float scale,  EnumHandSide side)`

### Inherited methods
- from `net.minecraft.client.model.ModelBiped`: `getArmForSide`, `getMainHand`, `setModelAttributes`, `setVisible`
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setTextureOffset`

## ModelArmorStandArmor

*class* `net.minecraft.client.model.ModelArmorStandArmor`

### Inherited fields
- from `net.minecraft.client.model.ModelBiped`: `bipedBody`, `bipedHead`, `bipedHeadwear`, `bipedLeftArm`, `bipedLeftLeg`, `bipedRightArm`, `bipedRightLeg`, `isSneak`, `leftArmPose`, `rightArmPose`
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBiped`: `getArmForSide`, `getMainHand`, `postRenderArm`, `render`, `setModelAttributes`, `setVisible`
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setTextureOffset`

## ModelBanner

*class* `net.minecraft.client.model.ModelBanner`

### Fields
- `public ModelRenderer bannerSlate`
- `public ModelRenderer bannerStand`
- `public ModelRenderer bannerTop`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void renderBanner()`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `render`, `setLivingAnimations`, `setModelAttributes`, `setRotationAngles`, `setTextureOffset`

## ModelBase

*class* `net.minecraft.client.model.ModelBase`

### Fields
- `public float swingProgress`
- `public boolean isRiding`
- `public boolean isChild`
- `public java.util.List<ModelRenderer> boxList`
- `public int textureWidth`
- `public int textureHeight`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`
- `public void setLivingAnimations(EntityLivingBase entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTickTime)`
- `public ModelRenderer getRandomModelBox(java.util.Random rand)`
- `protected void setTextureOffset(java.lang.String partName,  int x,  int y)`
- `public TextureOffset getTextureOffset(java.lang.String partName)`
- `public static void copyModelAngles(ModelRenderer source,  ModelRenderer dest)`
- `public void setModelAttributes(ModelBase model)`

## ModelBat

*class* `net.minecraft.client.model.ModelBat`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelBed

*class* `net.minecraft.client.model.ModelBed`

### Fields
- `public ModelRenderer headPiece`
- `public ModelRenderer footPiece`
- `public ModelRenderer[] legs`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public int getModelVersion()`
- `public void render()`
- `public void preparePiece(boolean p_193769_1_)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `render`, `setLivingAnimations`, `setModelAttributes`, `setRotationAngles`, `setTextureOffset`

## ModelBiped

*class* `net.minecraft.client.model.ModelBiped`

### Fields
- `public ModelRenderer bipedHead`
- `public ModelRenderer bipedHeadwear`
- `public ModelRenderer bipedBody`
- `public ModelRenderer bipedRightArm`
- `public ModelRenderer bipedLeftArm`
- `public ModelRenderer bipedRightLeg`
- `public ModelRenderer bipedLeftLeg`
- `public ModelBiped.ArmPose leftArmPose`
- `public ModelBiped.ArmPose rightArmPose`
- `public boolean isSneak`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`
- `public void setModelAttributes(ModelBase model)`
- `public void setVisible(boolean visible)`
- `public void postRenderArm(float scale,  EnumHandSide side)`
- `protected ModelRenderer getArmForSide(EnumHandSide side)`
- `protected EnumHandSide getMainHand(Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setTextureOffset`

## ModelBiped.ArmPose

*enum* `net.minecraft.client.model.ModelBiped.ArmPose`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ModelBiped.ArmPose>

Enclosing class: ModelBiped

### Fields
- `public static final ModelBiped.ArmPose EMPTY`
- `public static final ModelBiped.ArmPose ITEM`
- `public static final ModelBiped.ArmPose BLOCK`
- `public static final ModelBiped.ArmPose BOW_AND_ARROW`

### Methods
- `public static ModelBiped.ArmPose[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ModelBiped.ArmPose c : ModelBiped.ArmPose.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ModelBiped.ArmPose valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ModelBlaze

*class* `net.minecraft.client.model.ModelBlaze`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelBoat

*class* `net.minecraft.client.model.ModelBoat`

All Implemented Interfaces: IMultipassModel

### Fields
- `public ModelRenderer[] boatSides`
- `public ModelRenderer[] paddles`
- `public ModelRenderer noWater`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void renderMultipass(Entity p_187054_1_,  float p_187054_2_,  float p_187054_3_,  float p_187054_4_,  float p_187054_5_,  float p_187054_6_,  float scale)`
- `protected ModelRenderer makePaddle(boolean p_187056_1_)`
- `protected void renderPaddle(EntityBoat boat,  int paddle,  float scale,  float limbSwing)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setRotationAngles`, `setTextureOffset`

## ModelBook

*class* `net.minecraft.client.model.ModelBook`

### Fields
- `public ModelRenderer coverRight`
- `public ModelRenderer coverLeft`
- `public ModelRenderer pagesRight`
- `public ModelRenderer pagesLeft`
- `public ModelRenderer flippingPageRight`
- `public ModelRenderer flippingPageLeft`
- `public ModelRenderer bookSpine`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelBox

*class* `net.minecraft.client.model.ModelBox`

### Fields
- `public final float posX1`
- `public final float posY1`
- `public final float posZ1`
- `public final float posX2`
- `public final float posY2`
- `public final float posZ2`
- `public java.lang.String boxName`

### Methods
- `public void render(BufferBuilder renderer,  float scale)`
- `public ModelBox setBoxName(java.lang.String name)`

## ModelChest

*class* `net.minecraft.client.model.ModelChest`

### Fields
- `public ModelRenderer chestLid`
- `public ModelRenderer chestBelow`
- `public ModelRenderer chestKnob`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void renderAll()`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `render`, `setLivingAnimations`, `setModelAttributes`, `setRotationAngles`, `setTextureOffset`

## ModelChicken

*class* `net.minecraft.client.model.ModelChicken`

### Fields
- `public ModelRenderer head`
- `public ModelRenderer body`
- `public ModelRenderer rightLeg`
- `public ModelRenderer leftLeg`
- `public ModelRenderer rightWing`
- `public ModelRenderer leftWing`
- `public ModelRenderer bill`
- `public ModelRenderer chin`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelCow

*class* `net.minecraft.client.model.ModelCow`

### Inherited fields
- from `net.minecraft.client.model.ModelQuadruped`: `body`, `childYOffset`, `childZOffset`, `head`, `leg1`, `leg2`, `leg3`, `leg4`
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Inherited methods
- from `net.minecraft.client.model.ModelQuadruped`: `render`, `setRotationAngles`
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelCreeper

*class* `net.minecraft.client.model.ModelCreeper`

### Fields
- `public ModelRenderer head`
- `public ModelRenderer creeperArmor`
- `public ModelRenderer body`
- `public ModelRenderer leg1`
- `public ModelRenderer leg2`
- `public ModelRenderer leg3`
- `public ModelRenderer leg4`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelDragon

*class* `net.minecraft.client.model.ModelDragon`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void setLivingAnimations(EntityLivingBase entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTickTime)`
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setModelAttributes`, `setRotationAngles`, `setTextureOffset`

## ModelDragonHead

*class* `net.minecraft.client.model.ModelDragonHead`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setRotationAngles`, `setTextureOffset`

## ModelElytra

*class* `net.minecraft.client.model.ModelElytra`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelEnderCrystal

*class* `net.minecraft.client.model.ModelEnderCrystal`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setRotationAngles`, `setTextureOffset`

## ModelEnderman

*class* `net.minecraft.client.model.ModelEnderman`

### Fields
- `public boolean isCarrying`
- `public boolean isAttacking`

### Inherited fields
- from `net.minecraft.client.model.ModelBiped`: `bipedBody`, `bipedHead`, `bipedHeadwear`, `bipedLeftArm`, `bipedLeftLeg`, `bipedRightArm`, `bipedRightLeg`, `isSneak`, `leftArmPose`, `rightArmPose`
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBiped`: `getArmForSide`, `getMainHand`, `postRenderArm`, `render`, `setModelAttributes`, `setVisible`
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setTextureOffset`

## ModelEnderMite

*class* `net.minecraft.client.model.ModelEnderMite`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelEvokerFangs

*class* `net.minecraft.client.model.ModelEvokerFangs`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setRotationAngles`, `setTextureOffset`

## ModelGhast

*class* `net.minecraft.client.model.ModelGhast`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelGuardian

*class* `net.minecraft.client.model.ModelGuardian`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelHorse

*class* `net.minecraft.client.model.ModelHorse`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setLivingAnimations(EntityLivingBase entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTickTime)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setModelAttributes`, `setRotationAngles`, `setTextureOffset`

## ModelHumanoidHead

*class* `net.minecraft.client.model.ModelHumanoidHead`

### Inherited fields
- from `net.minecraft.client.model.ModelSkeletonHead`: `skeletonHead`
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelIllager

*class* `net.minecraft.client.model.ModelIllager`

### Fields
- `public ModelRenderer head`
- `public ModelRenderer hat`
- `public ModelRenderer body`
- `public ModelRenderer arms`
- `public ModelRenderer leg0`
- `public ModelRenderer leg1`
- `public ModelRenderer nose`
- `public ModelRenderer rightArm`
- `public ModelRenderer leftArm`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`
- `public ModelRenderer getArm(EnumHandSide p_191216_1_)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelIronGolem

*class* `net.minecraft.client.model.ModelIronGolem`

### Fields
- `public ModelRenderer ironGolemHead`
- `public ModelRenderer ironGolemBody`
- `public ModelRenderer ironGolemRightArm`
- `public ModelRenderer ironGolemLeftArm`
- `public ModelRenderer ironGolemLeftLeg`
- `public ModelRenderer ironGolemRightLeg`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`
- `public void setLivingAnimations(EntityLivingBase entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTickTime)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setModelAttributes`, `setTextureOffset`

## ModelLargeChest

*class* `net.minecraft.client.model.ModelLargeChest`

### Inherited fields
- from `net.minecraft.client.model.ModelChest`: `chestBelow`, `chestKnob`, `chestLid`
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Inherited methods
- from `net.minecraft.client.model.ModelChest`: `renderAll`
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `render`, `setLivingAnimations`, `setModelAttributes`, `setRotationAngles`, `setTextureOffset`

## ModelLeashKnot

*class* `net.minecraft.client.model.ModelLeashKnot`

### Fields
- `public ModelRenderer knotRenderer`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelLlama

*class* `net.minecraft.client.model.ModelLlama`

### Inherited fields
- from `net.minecraft.client.model.ModelQuadruped`: `body`, `childYOffset`, `childZOffset`, `head`, `leg1`, `leg2`, `leg3`, `leg4`
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`

### Inherited methods
- from `net.minecraft.client.model.ModelQuadruped`: `setRotationAngles`
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelLlamaSpit

*class* `net.minecraft.client.model.ModelLlamaSpit`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setRotationAngles`, `setTextureOffset`

## ModelMagmaCube

*class* `net.minecraft.client.model.ModelMagmaCube`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void setLivingAnimations(EntityLivingBase entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTickTime)`
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setModelAttributes`, `setRotationAngles`, `setTextureOffset`

## ModelMinecart

*class* `net.minecraft.client.model.ModelMinecart`

### Fields
- `public ModelRenderer[] sideModels`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setRotationAngles`, `setTextureOffset`

## ModelOcelot

*class* `net.minecraft.client.model.ModelOcelot`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`
- `public void setLivingAnimations(EntityLivingBase entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTickTime)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setModelAttributes`, `setTextureOffset`

## ModelParrot

*class* `net.minecraft.client.model.ModelParrot`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`
- `public void setLivingAnimations(EntityLivingBase entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTickTime)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setModelAttributes`, `setTextureOffset`

## ModelPig

*class* `net.minecraft.client.model.ModelPig`

### Inherited fields
- from `net.minecraft.client.model.ModelQuadruped`: `body`, `childYOffset`, `childZOffset`, `head`, `leg1`, `leg2`, `leg3`, `leg4`
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Inherited methods
- from `net.minecraft.client.model.ModelQuadruped`: `render`, `setRotationAngles`
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelPlayer

*class* `net.minecraft.client.model.ModelPlayer`

### Fields
- `public ModelRenderer bipedLeftArmwear`
- `public ModelRenderer bipedRightArmwear`
- `public ModelRenderer bipedLeftLegwear`
- `public ModelRenderer bipedRightLegwear`
- `public ModelRenderer bipedBodyWear`

### Inherited fields
- from `net.minecraft.client.model.ModelBiped`: `bipedBody`, `bipedHead`, `bipedHeadwear`, `bipedLeftArm`, `bipedLeftLeg`, `bipedRightArm`, `bipedRightLeg`, `isSneak`, `leftArmPose`, `rightArmPose`
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void renderDeadmau5Head(float scale)`
- `public void renderCape(float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`
- `public void setVisible(boolean visible)`
- `public void postRenderArm(float scale,  EnumHandSide side)`

### Inherited methods
- from `net.minecraft.client.model.ModelBiped`: `getArmForSide`, `getMainHand`, `setModelAttributes`
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setTextureOffset`

## ModelPolarBear

*class* `net.minecraft.client.model.ModelPolarBear`

### Inherited fields
- from `net.minecraft.client.model.ModelQuadruped`: `body`, `childYOffset`, `childZOffset`, `head`, `leg1`, `leg2`, `leg3`, `leg4`
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelQuadruped

*class* `net.minecraft.client.model.ModelQuadruped`

### Fields
- `public ModelRenderer head`
- `public ModelRenderer body`
- `public ModelRenderer leg1`
- `public ModelRenderer leg2`
- `public ModelRenderer leg3`
- `public ModelRenderer leg4`
- `protected float childYOffset`
- `protected float childZOffset`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelRabbit

*class* `net.minecraft.client.model.ModelRabbit`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`
- `public void setLivingAnimations(EntityLivingBase entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTickTime)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setModelAttributes`, `setTextureOffset`

## ModelRenderer

*class* `net.minecraft.client.model.ModelRenderer`

### Fields
- `public float textureWidth`
- `public float textureHeight`
- `public float rotationPointX`
- `public float rotationPointY`
- `public float rotationPointZ`
- `public float rotateAngleX`
- `public float rotateAngleY`
- `public float rotateAngleZ`
- `public boolean mirror`
- `public boolean showModel`
- `public boolean isHidden`
- `public java.util.List<ModelBox> cubeList`
- `public java.util.List<ModelRenderer> childModels`
- `public final java.lang.String boxName`
- `public float offsetX`
- `public float offsetY`
- `public float offsetZ`

### Methods
- `public void addChild(ModelRenderer renderer)`
- `public ModelRenderer setTextureOffset(int x,  int y)`
- `public ModelRenderer addBox(java.lang.String partName,  float offX,  float offY,  float offZ,  int width,  int height,  int depth)`
- `public ModelRenderer addBox(float offX,  float offY,  float offZ,  int width,  int height,  int depth)`
- `public ModelRenderer addBox(float offX,  float offY,  float offZ,  int width,  int height,  int depth,  boolean mirrored)`
- `public void addBox(float offX,  float offY,  float offZ,  int width,  int height,  int depth,  float scaleFactor)`
- `public void setRotationPoint(float rotationPointXIn,  float rotationPointYIn,  float rotationPointZIn)`
- `public void render(float scale)`
- `public void renderWithRotation(float scale)`
- `public void postRender(float scale)`
- `public ModelRenderer setTextureSize(int textureWidthIn,  int textureHeightIn)`

## ModelSheep1

*class* `net.minecraft.client.model.ModelSheep1`

### Inherited fields
- from `net.minecraft.client.model.ModelQuadruped`: `body`, `childYOffset`, `childZOffset`, `head`, `leg1`, `leg2`, `leg3`, `leg4`
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void setLivingAnimations(EntityLivingBase entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTickTime)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelQuadruped`: `render`
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setModelAttributes`, `setTextureOffset`

## ModelSheep2

*class* `net.minecraft.client.model.ModelSheep2`

### Inherited fields
- from `net.minecraft.client.model.ModelQuadruped`: `body`, `childYOffset`, `childZOffset`, `head`, `leg1`, `leg2`, `leg3`, `leg4`
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void setLivingAnimations(EntityLivingBase entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTickTime)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelQuadruped`: `render`
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setModelAttributes`, `setTextureOffset`

## ModelShield

*class* `net.minecraft.client.model.ModelShield`

### Fields
- `public ModelRenderer plate`
- `public ModelRenderer handle`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render()`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `render`, `setLivingAnimations`, `setModelAttributes`, `setRotationAngles`, `setTextureOffset`

## ModelShulker

*class* `net.minecraft.client.model.ModelShulker`

### Fields
- `public final ModelRenderer base`
- `public final ModelRenderer lid`
- `public ModelRenderer head`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelShulkerBullet

*class* `net.minecraft.client.model.ModelShulkerBullet`

### Fields
- `public ModelRenderer renderer`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelSign

*class* `net.minecraft.client.model.ModelSign`

### Fields
- `public ModelRenderer signBoard`
- `public ModelRenderer signStick`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void renderSign()`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `render`, `setLivingAnimations`, `setModelAttributes`, `setRotationAngles`, `setTextureOffset`

## ModelSilverfish

*class* `net.minecraft.client.model.ModelSilverfish`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelSkeleton

*class* `net.minecraft.client.model.ModelSkeleton`

### Inherited fields
- from `net.minecraft.client.model.ModelBiped`: `bipedBody`, `bipedHead`, `bipedHeadwear`, `bipedLeftArm`, `bipedLeftLeg`, `bipedRightArm`, `bipedRightLeg`, `isSneak`, `leftArmPose`, `rightArmPose`
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void setLivingAnimations(EntityLivingBase entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTickTime)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`
- `public void postRenderArm(float scale,  EnumHandSide side)`

### Inherited methods
- from `net.minecraft.client.model.ModelBiped`: `getArmForSide`, `getMainHand`, `render`, `setModelAttributes`, `setVisible`
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setTextureOffset`

## ModelSkeletonHead

*class* `net.minecraft.client.model.ModelSkeletonHead`

### Fields
- `public ModelRenderer skeletonHead`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelSlime

*class* `net.minecraft.client.model.ModelSlime`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setRotationAngles`, `setTextureOffset`

## ModelSnowMan

*class* `net.minecraft.client.model.ModelSnowMan`

### Fields
- `public ModelRenderer body`
- `public ModelRenderer bottomBody`
- `public ModelRenderer head`
- `public ModelRenderer rightHand`
- `public ModelRenderer leftHand`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelSpider

*class* `net.minecraft.client.model.ModelSpider`

### Fields
- `public ModelRenderer spiderHead`
- `public ModelRenderer spiderNeck`
- `public ModelRenderer spiderBody`
- `public ModelRenderer spiderLeg1`
- `public ModelRenderer spiderLeg2`
- `public ModelRenderer spiderLeg3`
- `public ModelRenderer spiderLeg4`
- `public ModelRenderer spiderLeg5`
- `public ModelRenderer spiderLeg6`
- `public ModelRenderer spiderLeg7`
- `public ModelRenderer spiderLeg8`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelSquid

*class* `net.minecraft.client.model.ModelSquid`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelVex

*class* `net.minecraft.client.model.ModelVex`

### Fields
- `protected ModelRenderer leftWing`
- `protected ModelRenderer rightWing`

### Inherited fields
- from `net.minecraft.client.model.ModelBiped`: `bipedBody`, `bipedHead`, `bipedHeadwear`, `bipedLeftArm`, `bipedLeftLeg`, `bipedRightArm`, `bipedRightLeg`, `isSneak`, `leftArmPose`, `rightArmPose`
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`
- `public int getModelVersion()`

### Inherited methods
- from `net.minecraft.client.model.ModelBiped`: `getArmForSide`, `getMainHand`, `postRenderArm`, `setModelAttributes`, `setVisible`
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setTextureOffset`

## ModelVillager

*class* `net.minecraft.client.model.ModelVillager`

### Fields
- `public ModelRenderer villagerHead`
- `public ModelRenderer villagerBody`
- `public ModelRenderer villagerArms`
- `public ModelRenderer rightVillagerLeg`
- `public ModelRenderer leftVillagerLeg`
- `public ModelRenderer villagerNose`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelWitch

*class* `net.minecraft.client.model.ModelWitch`

### Fields
- `public boolean holdingItem`

### Inherited fields
- from `net.minecraft.client.model.ModelVillager`: `leftVillagerLeg`, `rightVillagerLeg`, `villagerArms`, `villagerBody`, `villagerHead`, `villagerNose`
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelVillager`: `render`
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setModelAttributes`, `setTextureOffset`

## ModelWither

*class* `net.minecraft.client.model.ModelWither`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`
- `public void setLivingAnimations(EntityLivingBase entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTickTime)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setModelAttributes`, `setTextureOffset`

## ModelWolf

*class* `net.minecraft.client.model.ModelWolf`

### Fields
- `public ModelRenderer wolfHeadMain`
- `public ModelRenderer wolfBody`
- `public ModelRenderer wolfLeg1`
- `public ModelRenderer wolfLeg2`
- `public ModelRenderer wolfLeg3`
- `public ModelRenderer wolfLeg4`

### Inherited fields
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void render(Entity entityIn,  float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scale)`
- `public void setLivingAnimations(EntityLivingBase entitylivingbaseIn,  float limbSwing,  float limbSwingAmount,  float partialTickTime)`
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setModelAttributes`, `setTextureOffset`

## ModelZombie

*class* `net.minecraft.client.model.ModelZombie`

### Inherited fields
- from `net.minecraft.client.model.ModelBiped`: `bipedBody`, `bipedHead`, `bipedHeadwear`, `bipedLeftArm`, `bipedLeftLeg`, `bipedRightArm`, `bipedRightLeg`, `isSneak`, `leftArmPose`, `rightArmPose`
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBiped`: `getArmForSide`, `getMainHand`, `postRenderArm`, `render`, `setModelAttributes`, `setVisible`
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setTextureOffset`

## ModelZombieVillager

*class* `net.minecraft.client.model.ModelZombieVillager`

### Inherited fields
- from `net.minecraft.client.model.ModelBiped`: `bipedBody`, `bipedHead`, `bipedHeadwear`, `bipedLeftArm`, `bipedLeftLeg`, `bipedRightArm`, `bipedRightLeg`, `isSneak`, `leftArmPose`, `rightArmPose`
- from `net.minecraft.client.model.ModelBase`: `boxList`, `isChild`, `isRiding`, `swingProgress`, `textureHeight`, `textureWidth`

### Methods
- `public void setRotationAngles(float limbSwing,  float limbSwingAmount,  float ageInTicks,  float netHeadYaw,  float headPitch,  float scaleFactor,  Entity entityIn)`

### Inherited methods
- from `net.minecraft.client.model.ModelBiped`: `getArmForSide`, `getMainHand`, `postRenderArm`, `render`, `setModelAttributes`, `setVisible`
- from `net.minecraft.client.model.ModelBase`: `copyModelAngles`, `getRandomModelBox`, `getTextureOffset`, `setLivingAnimations`, `setTextureOffset`

## PositionTextureVertex

*class* `net.minecraft.client.model.PositionTextureVertex`

### Fields
- `public Vec3d vector3D`
- `public float texturePositionX`
- `public float texturePositionY`

### Methods
- `public PositionTextureVertex setTexturePosition(float p_78240_1_,  float p_78240_2_)`

## TexturedQuad

*class* `net.minecraft.client.model.TexturedQuad`

### Fields
- `public PositionTextureVertex[] vertexPositions`
- `public int nVertices`

### Methods
- `public void flipFace()`
- `public void draw(BufferBuilder renderer,  float scale)`

## TextureOffset

*class* `net.minecraft.client.model.TextureOffset`

### Fields
- `public final int textureOffsetX`
- `public final int textureOffsetY`
