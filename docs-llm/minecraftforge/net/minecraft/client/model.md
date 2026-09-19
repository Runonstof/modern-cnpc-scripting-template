# net.minecraft.client.model

- [AbstractZombieModel](#abstractzombiemodel)
- [AgeableHierarchicalModel](#ageablehierarchicalmodel)
- [AgeableListModel](#ageablelistmodel)
- [AllayModel](#allaymodel)
- [AnimationUtils](#animationutils)
- [ArmedModel](#armedmodel)
- [ArmorStandArmorModel](#armorstandarmormodel)
- [ArmorStandModel](#armorstandmodel)
- [AxolotlModel](#axolotlmodel)
- [BatModel](#batmodel)
- [BeeModel](#beemodel)
- [BlazeModel](#blazemodel)
- [BoatModel](#boatmodel)
- [BookModel](#bookmodel)
- [CamelModel](#camelmodel)
- [CatModel](#catmodel)
- [ChestBoatModel](#chestboatmodel)
- [ChestedHorseModel](#chestedhorsemodel)
- [ChestRaftModel](#chestraftmodel)
- [ChickenModel](#chickenmodel)
- [Class HumanoidModel.ArmPose](#class-humanoidmodel.armpose)
- [Class ParrotModel.State](#class-parrotmodel.state)
- [CodModel](#codmodel)
- [ColorableAgeableListModel](#colorableageablelistmodel)
- [ColorableHierarchicalModel](#colorablehierarchicalmodel)
- [CowModel](#cowmodel)
- [CreeperModel](#creepermodel)
- [DolphinModel](#dolphinmodel)
- [DrownedModel](#drownedmodel)
- [ElytraModel](#elytramodel)
- [EndermanModel](#endermanmodel)
- [EndermiteModel](#endermitemodel)
- [EntityModel](#entitymodel)
- [EvokerFangsModel](#evokerfangsmodel)
- [FoxModel](#foxmodel)
- [FrogModel](#frogmodel)
- [GhastModel](#ghastmodel)
- [GiantZombieModel](#giantzombiemodel)
- [GoatModel](#goatmodel)
- [GuardianModel](#guardianmodel)
- [HeadedModel](#headedmodel)
- [HierarchicalModel](#hierarchicalmodel)
- [HoglinModel](#hoglinmodel)
- [HorseModel](#horsemodel)
- [HumanoidArmorModel](#humanoidarmormodel)
- [HumanoidModel](#humanoidmodel)
- [IllagerModel](#illagermodel)
- [IronGolemModel](#irongolemmodel)
- [LavaSlimeModel](#lavaslimemodel)
- [LeashKnotModel](#leashknotmodel)
- [ListModel](#listmodel)
- [LlamaModel](#llamamodel)
- [LlamaSpitModel](#llamaspitmodel)
- [MinecartModel](#minecartmodel)
- [Model](#model)
- [ModelUtils](#modelutils)
- [OcelotModel](#ocelotmodel)
- [PandaModel](#pandamodel)
- [ParrotModel](#parrotmodel)
- [PhantomModel](#phantommodel)
- [PiglinHeadModel](#piglinheadmodel)
- [PiglinModel](#piglinmodel)
- [PigModel](#pigmodel)
- [PlayerModel](#playermodel)
- [PolarBearModel](#polarbearmodel)
- [PufferfishBigModel](#pufferfishbigmodel)
- [PufferfishMidModel](#pufferfishmidmodel)
- [PufferfishSmallModel](#pufferfishsmallmodel)
- [QuadrupedModel](#quadrupedmodel)
- [RabbitModel](#rabbitmodel)
- [RaftModel](#raftmodel)
- [RavagerModel](#ravagermodel)
- [SalmonModel](#salmonmodel)
- [SheepFurModel](#sheepfurmodel)
- [SheepModel](#sheepmodel)
- [ShieldModel](#shieldmodel)
- [ShulkerBulletModel](#shulkerbulletmodel)
- [ShulkerModel](#shulkermodel)
- [SilverfishModel](#silverfishmodel)
- [SkeletonModel](#skeletonmodel)
- [SkullModel](#skullmodel)
- [SkullModelBase](#skullmodelbase)
- [SlimeModel](#slimemodel)
- [SnifferModel](#sniffermodel)
- [SnowGolemModel](#snowgolemmodel)
- [SpiderModel](#spidermodel)
- [SquidModel](#squidmodel)
- [StriderModel](#stridermodel)
- [TadpoleModel](#tadpolemodel)
- [TridentModel](#tridentmodel)
- [TropicalFishModelA](#tropicalfishmodela)
- [TropicalFishModelB](#tropicalfishmodelb)
- [TurtleModel](#turtlemodel)
- [VexModel](#vexmodel)
- [VillagerHeadModel](#villagerheadmodel)
- [VillagerModel](#villagermodel)
- [WardenModel](#wardenmodel)
- [WaterPatchModel](#waterpatchmodel)
- [WitchModel](#witchmodel)
- [WitherBossModel](#witherbossmodel)
- [WolfModel](#wolfmodel)
- [ZombieModel](#zombiemodel)
- [ZombieVillagerModel](#zombievillagermodel)
## AbstractZombieModel

*class* `net.minecraft.client.model.AbstractZombieModel`

### Inherited fields
- from `net.minecraft.client.model.HumanoidModel`: `body`, `crouching`, `hat`, `HAT_OVERLAY_SCALE`, `head`, `leftArm`, `leftArmPose`, `leftLeg`, `LEGGINGS_OVERLAY_SCALE`, `OVERLAY_SCALE`, `rightArm`, `rightArmPose`, `rightLeg`, `swimAmount`, `TOOT_HORN_XROT_BASE`, `TOOT_HORN_YROT_BASE`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public void setupAnim(T p_102001_,  float p_102002_,  float p_102003_,  float p_102004_,  float p_102005_,  float p_102006_)`
- `public abstract boolean isAggressive(T p_101999_)`

### Inherited methods
- from `net.minecraft.client.model.HumanoidModel`: `bodyParts`, `copyPropertiesTo`, `createMesh`, `getArm`, `getHead`, `headParts`, `prepareMobModel`, `rotlerpRad`, `setAllVisible`, `setupAttackAnimation`, `translateToHand`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## AgeableHierarchicalModel

*class* `net.minecraft.client.model.AgeableHierarchicalModel`

### Fields
- `private final float youngScaleFactor`
- `private final float bodyYOffset`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public void renderToBuffer(PoseStack p_273029_,  VertexConsumer p_272763_,  int p_273665_,  int p_272602_,  float p_273190_,  float p_273731_,  float p_272609_,  float p_273331_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `root`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`, `setupAnim`
- from `net.minecraft.client.model.Model`: `renderType`

## AgeableListModel

*class* `net.minecraft.client.model.AgeableListModel`

### Fields
- `private final boolean scaleHead`
- `private final float babyYHeadOffset`
- `private final float babyZHeadOffset`
- `private final float babyHeadScale`
- `private final float babyBodyScale`
- `private final float bodyYOffset`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public void renderToBuffer(PoseStack p_102034_,  VertexConsumer p_102035_,  int p_102036_,  int p_102037_,  float p_102038_,  float p_102039_,  float p_102040_,  float p_102041_)`
- `protected abstract Iterable<ModelPart> headParts()`
- `protected abstract Iterable<ModelPart> bodyParts()`

### Inherited methods
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`, `setupAnim`
- from `net.minecraft.client.model.Model`: `renderType`

## AllayModel

*class* `net.minecraft.client.model.AllayModel`

### Fields
- `private final ModelPart root`
- `private final ModelPart head`
- `private final ModelPart body`
- `private final ModelPart right_arm`
- `private final ModelPart left_arm`
- `private final ModelPart right_wing`
- `private final ModelPart left_wing`
- `private static final float FLYING_ANIMATION_X_ROT` (= 0.7853981852531433f)
- `private static final float MAX_HAND_HOLDING_ITEM_X_ROT_RAD` (= -1.1344640254974365f)
- `private static final float MIN_HAND_HOLDING_ITEM_X_ROT_RAD` (= -1.0471975803375244f)

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public ModelPart root()`
- `public static LayerDefinition createBodyLayer()`
- `public void setupAnim(Allay p_233325_,  float p_233326_,  float p_233327_,  float p_233328_,  float p_233329_,  float p_233330_)`
- `public void translateToHand(HumanoidArm p_233322_,  PoseStack p_233323_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## AnimationUtils

*class* `net.minecraft.client.model.AnimationUtils`

### Methods
- `public static void animateCrossbowHold(ModelPart p_102098_,  ModelPart p_102099_,  ModelPart p_102100_,  boolean p_102101_)`
- `public static void animateCrossbowCharge(ModelPart p_102087_,  ModelPart p_102088_,  LivingEntity p_102089_,  boolean p_102090_)`
- `public static <T extends Mob> void swingWeaponDown(ModelPart p_102092_,  ModelPart p_102093_,  T p_102094_,  float p_102095_,  float p_102096_)`
- `public static void bobModelPart(ModelPart p_170342_,  float p_170343_,  float p_170344_)`
- `public static void bobArms(ModelPart p_102083_,  ModelPart p_102084_,  float p_102085_)`
- `public static void animateZombieArms(ModelPart p_102103_,  ModelPart p_102104_,  boolean p_102105_,  float p_102106_,  float p_102107_)`

## ArmedModel

*interface* `net.minecraft.client.model.ArmedModel`

### Methods
- `void translateToHand(HumanoidArm p_102108_,  PoseStack p_102109_)`

## ArmorStandArmorModel

*class* `net.minecraft.client.model.ArmorStandArmorModel`

### Inherited fields
- from `net.minecraft.client.model.HumanoidModel`: `body`, `crouching`, `hat`, `HAT_OVERLAY_SCALE`, `head`, `leftArm`, `leftArmPose`, `leftLeg`, `LEGGINGS_OVERLAY_SCALE`, `OVERLAY_SCALE`, `rightArm`, `rightArmPose`, `rightLeg`, `swimAmount`, `TOOT_HORN_XROT_BASE`, `TOOT_HORN_YROT_BASE`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer(CubeDeformation p_170348_)`
- `public void setupAnim(ArmorStand p_102131_,  float p_102132_,  float p_102133_,  float p_102134_,  float p_102135_,  float p_102136_)`

### Inherited methods
- from `net.minecraft.client.model.HumanoidModel`: `bodyParts`, `copyPropertiesTo`, `createMesh`, `getArm`, `getHead`, `headParts`, `prepareMobModel`, `rotlerpRad`, `setAllVisible`, `setupAttackAnimation`, `translateToHand`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## ArmorStandModel

*class* `net.minecraft.client.model.ArmorStandModel`

### Fields
- `private static final String RIGHT_BODY_STICK` (= "right_body_stick")
- `private static final String LEFT_BODY_STICK` (= "left_body_stick")
- `private static final String SHOULDER_STICK` (= "shoulder_stick")
- `private static final String BASE_PLATE` (= "base_plate")
- `private final ModelPart rightBodyStick`
- `private final ModelPart leftBodyStick`
- `private final ModelPart shoulderStick`
- `private final ModelPart basePlate`

### Inherited fields
- from `net.minecraft.client.model.HumanoidModel`: `body`, `crouching`, `hat`, `HAT_OVERLAY_SCALE`, `head`, `leftArm`, `leftArmPose`, `leftLeg`, `LEGGINGS_OVERLAY_SCALE`, `OVERLAY_SCALE`, `rightArm`, `rightArmPose`, `rightLeg`, `swimAmount`, `TOOT_HORN_XROT_BASE`, `TOOT_HORN_YROT_BASE`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void prepareMobModel(ArmorStand p_102172_,  float p_102173_,  float p_102174_,  float p_102175_)`
- `public void setupAnim(ArmorStand p_102177_,  float p_102178_,  float p_102179_,  float p_102180_,  float p_102181_,  float p_102182_)`
- `protected Iterable<ModelPart> bodyParts()`
- `public void translateToHand(HumanoidArm p_102157_,  PoseStack p_102158_)`

### Inherited methods
- from `net.minecraft.client.model.ArmorStandArmorModel`: `createBodyLayer`
- from `net.minecraft.client.model.HumanoidModel`: `copyPropertiesTo`, `createMesh`, `getArm`, `getHead`, `headParts`, `rotlerpRad`, `setAllVisible`, `setupAttackAnimation`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## AxolotlModel

*class* `net.minecraft.client.model.AxolotlModel`

### Fields
- `public static final float SWIMMING_LEG_XROT` (= 1.8849557638168335f)
- `private final ModelPart tail`
- `private final ModelPart leftHindLeg`
- `private final ModelPart rightHindLeg`
- `private final ModelPart leftFrontLeg`
- `private final ModelPart rightFrontLeg`
- `private final ModelPart body`
- `private final ModelPart head`
- `private final ModelPart topGills`
- `private final ModelPart leftGills`
- `private final ModelPart rightGills`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `protected Iterable<ModelPart> headParts()`
- `protected Iterable<ModelPart> bodyParts()`
- `public void setupAnim(T p_170395_,  float p_170396_,  float p_170397_,  float p_170398_,  float p_170399_,  float p_170400_)`
- `private void saveAnimationValues(T p_170389_)`
- `private org.joml.Vector3f getRotationVector(ModelPart p_254355_)`
- `private void setRotationFromVector(ModelPart p_254301_,  org.joml.Vector3f p_253783_)`
- `private void setupInitialAnimationValues(T p_170391_,  float p_170392_,  float p_170393_)`
- `private float lerpTo(float p_170375_,  float p_170376_)`
- `private float lerpTo(float p_170378_,  float p_170379_,  float p_170380_)`
- `private void lerpPart(ModelPart p_170404_,  float p_170405_,  float p_170406_,  float p_170407_)`
- `private void setupLayStillOnGroundAnimation(float p_170415_,  float p_170416_)`
- `private void setupGroundCrawlingAnimation(float p_170419_,  float p_170420_)`
- `private void setupWaterHoveringAnimation(float p_170373_)`
- `private void setupSwimmingAnimation(float p_170423_,  float p_170424_)`
- `private void setupPlayDeadAnimation(float p_170413_)`
- `private void applyMirrorLegRotations()`

### Inherited methods
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## BatModel

*class* `net.minecraft.client.model.BatModel`

### Fields
- `private final ModelPart root`
- `private final ModelPart head`
- `private final ModelPart body`
- `private final ModelPart rightWing`
- `private final ModelPart leftWing`
- `private final ModelPart rightWingTip`
- `private final ModelPart leftWingTip`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public ModelPart root()`
- `public void setupAnim(Bat p_102200_,  float p_102201_,  float p_102202_,  float p_102203_,  float p_102204_,  float p_102205_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## BeeModel

*class* `net.minecraft.client.model.BeeModel`

### Fields
- `private static final float BEE_Y_BASE` (= 19.0f)
- `private static final String BONE` (= "bone")
- `private static final String STINGER` (= "stinger")
- `private static final String LEFT_ANTENNA` (= "left_antenna")
- `private static final String RIGHT_ANTENNA` (= "right_antenna")
- `private static final String FRONT_LEGS` (= "front_legs")
- `private static final String MIDDLE_LEGS` (= "middle_legs")
- `private static final String BACK_LEGS` (= "back_legs")
- `private final ModelPart bone`
- `private final ModelPart rightWing`
- `private final ModelPart leftWing`
- `private final ModelPart frontLeg`
- `private final ModelPart midLeg`
- `private final ModelPart backLeg`
- `private final ModelPart stinger`
- `private final ModelPart leftAntenna`
- `private final ModelPart rightAntenna`
- `private float rollAmount`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void prepareMobModel(T p_102232_,  float p_102233_,  float p_102234_,  float p_102235_)`
- `public void setupAnim(T p_102237_,  float p_102238_,  float p_102239_,  float p_102240_,  float p_102241_,  float p_102242_)`
- `protected Iterable<ModelPart> headParts()`
- `protected Iterable<ModelPart> bodyParts()`

### Inherited methods
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## BlazeModel

*class* `net.minecraft.client.model.BlazeModel`

### Fields
- `private final ModelPart root`
- `private final ModelPart[] upperBodyParts`
- `private final ModelPart head`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `private static String getPartName(int p_170446_)`
- `public static LayerDefinition createBodyLayer()`
- `public ModelPart root()`
- `public void setupAnim(T p_102250_,  float p_102251_,  float p_102252_,  float p_102253_,  float p_102254_,  float p_102255_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## BoatModel

*class* `net.minecraft.client.model.BoatModel`

### Fields
- `private static final String LEFT_PADDLE` (= "left_paddle")
- `private static final String RIGHT_PADDLE` (= "right_paddle")
- `private static final String WATER_PATCH` (= "water_patch")
- `private static final String BOTTOM` (= "bottom")
- `private static final String BACK` (= "back")
- `private static final String FRONT` (= "front")
- `private static final String RIGHT` (= "right")
- `private static final String LEFT` (= "left")
- `private final ModelPart leftPaddle`
- `private final ModelPart rightPaddle`
- `private final ModelPart waterPatch`
- `private final com.google.common.collect.ImmutableList<ModelPart> parts`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `protected com.google.common.collect.ImmutableList.Builder<ModelPart> createPartsBuilder(ModelPart p_252283_)`
- `public static void createChildren(PartDefinition p_250572_)`
- `public static LayerDefinition createBodyModel()`
- `public void setupAnim(Boat p_102269_,  float p_102270_,  float p_102271_,  float p_102272_,  float p_102273_,  float p_102274_)`
- `public com.google.common.collect.ImmutableList<ModelPart> parts()`
- `public ModelPart waterPatch()`
- `private static void animatePaddle(Boat p_170465_,  int p_170466_,  ModelPart p_170467_,  float p_170468_)`

### Inherited methods
- from `net.minecraft.client.model.ListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## BookModel

*class* `net.minecraft.client.model.BookModel`

### Fields
- `private static final String LEFT_PAGES` (= "left_pages")
- `private static final String RIGHT_PAGES` (= "right_pages")
- `private static final String FLIP_PAGE_1` (= "flip_page1")
- `private static final String FLIP_PAGE_2` (= "flip_page2")
- `private final ModelPart root`
- `private final ModelPart leftLid`
- `private final ModelPart rightLid`
- `private final ModelPart leftPages`
- `private final ModelPart rightPages`
- `private final ModelPart flipPage1`
- `private final ModelPart flipPage2`

### Inherited fields
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void renderToBuffer(PoseStack p_102298_,  VertexConsumer p_102299_,  int p_102300_,  int p_102301_,  float p_102302_,  float p_102303_,  float p_102304_,  float p_102305_)`
- `public void render(PoseStack p_102317_,  VertexConsumer p_102318_,  int p_102319_,  int p_102320_,  float p_102321_,  float p_102322_,  float p_102323_,  float p_102324_)`
- `public void setupAnim(float p_102293_,  float p_102294_,  float p_102295_,  float p_102296_)`

### Inherited methods
- from `net.minecraft.client.model.Model`: `renderType`

## CamelModel

*class* `net.minecraft.client.model.CamelModel`

### Fields
- `private static final float MAX_WALK_ANIMATION_SPEED` (= 2.0f)
- `private static final float WALK_ANIMATION_SCALE_FACTOR` (= 2.5f)
- `private static final float BABY_SCALE` (= 0.44999998807907104f)
- `private static final float BABY_Y_OFFSET` (= 29.350000381469727f)
- `private static final String SADDLE` (= "saddle")
- `private static final String BRIDLE` (= "bridle")
- `private static final String REINS` (= "reins")
- `private final ModelPart root`
- `private final ModelPart head`
- `private final ModelPart[] saddleParts`
- `private final ModelPart[] ridingParts`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void setupAnim(T p_250657_,  float p_250501_,  float p_249554_,  float p_249527_,  float p_248774_,  float p_250710_)`
- `private void applyHeadRotation(T p_250436_,  float p_249176_,  float p_251814_,  float p_248796_)`
- `private void toggleInvisibleParts(T p_251765_)`
- `public void renderToBuffer(PoseStack p_250278_,  VertexConsumer p_251678_,  int p_249298_,  int p_251841_,  float p_250541_,  float p_248890_,  float p_250527_,  float p_250536_)`
- `public ModelPart root()`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## CatModel

*class* `net.minecraft.client.model.CatModel`

### Fields
- `private float lieDownAmount`
- `private float lieDownAmountTail`
- `private float relaxStateOneAmount`

### Inherited fields
- from `net.minecraft.client.model.OcelotModel`: `BACK_LEG_Y`, `BACK_LEG_Z`, `body`, `FRONT_LEG_Y`, `head`, `leftFrontLeg`, `leftHindLeg`, `rightFrontLeg`, `rightHindLeg`, `SITTING_STATE`, `state`, `tail1`, `tail2`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public void prepareMobModel(T p_102343_,  float p_102344_,  float p_102345_,  float p_102346_)`
- `public void setupAnim(T p_102348_,  float p_102349_,  float p_102350_,  float p_102351_,  float p_102352_,  float p_102353_)`

### Inherited methods
- from `net.minecraft.client.model.OcelotModel`: `bodyParts`, `createBodyMesh`, `headParts`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## ChestBoatModel

*class* `net.minecraft.client.model.ChestBoatModel`

### Fields
- `private static final String CHEST_BOTTOM` (= "chest_bottom")
- `private static final String CHEST_LID` (= "chest_lid")
- `private static final String CHEST_LOCK` (= "chest_lock")

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `protected com.google.common.collect.ImmutableList.Builder<ModelPart> createPartsBuilder(ModelPart p_250198_)`
- `public static LayerDefinition createBodyModel()`

### Inherited methods
- from `net.minecraft.client.model.BoatModel`: `createChildren`, `parts`, `setupAnim`, `waterPatch`
- from `net.minecraft.client.model.ListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## ChestedHorseModel

*class* `net.minecraft.client.model.ChestedHorseModel`

### Fields
- `private final ModelPart leftChest`
- `private final ModelPart rightChest`

### Inherited fields
- from `net.minecraft.client.model.HorseModel`: `body`, `HEAD_PARTS`, `headParts`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void setupAnim(T p_102366_,  float p_102367_,  float p_102368_,  float p_102369_,  float p_102370_,  float p_102371_)`

### Inherited methods
- from `net.minecraft.client.model.HorseModel`: `bodyParts`, `createBodyMesh`, `headParts`, `prepareMobModel`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## ChestRaftModel

*class* `net.minecraft.client.model.ChestRaftModel`

### Fields
- `private static final String CHEST_BOTTOM` (= "chest_bottom")
- `private static final String CHEST_LID` (= "chest_lid")
- `private static final String CHEST_LOCK` (= "chest_lock")

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `protected com.google.common.collect.ImmutableList.Builder<ModelPart> createPartsBuilder(ModelPart p_251688_)`
- `public static LayerDefinition createBodyModel()`

### Inherited methods
- from `net.minecraft.client.model.RaftModel`: `createChildren`, `parts`, `setupAnim`
- from `net.minecraft.client.model.ListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## ChickenModel

*class* `net.minecraft.client.model.ChickenModel`

### Fields
- `public static final String RED_THING` (= "red_thing")
- `private final ModelPart head`
- `private final ModelPart body`
- `private final ModelPart rightLeg`
- `private final ModelPart leftLeg`
- `private final ModelPart rightWing`
- `private final ModelPart leftWing`
- `private final ModelPart beak`
- `private final ModelPart redThing`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `protected Iterable<ModelPart> headParts()`
- `protected Iterable<ModelPart> bodyParts()`
- `public void setupAnim(T p_102392_,  float p_102393_,  float p_102394_,  float p_102395_,  float p_102396_,  float p_102397_)`

### Inherited methods
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## Class HumanoidModel.ArmPose

*enum* `net.minecraft.client.model.Class HumanoidModel.ArmPose`

Enclosing class: HumanoidModel<T extends LivingEntity>

### Fields
- `private final boolean twoHanded`
- `@Nullable private final IArmPoseTransformer forgeArmPose`

### Methods
- `public static HumanoidModel.ArmPose[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static HumanoidModel.ArmPose valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public boolean isTwoHanded()`
- `public static HumanoidModel.ArmPose create(String name,  boolean twoHanded,  @Nonnull  IArmPoseTransformer forgeArmPose)`
- `public <T extends LivingEntity> void applyTransform(HumanoidModel<T> model,  T entity,  HumanoidArm arm)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraftforge.common.IExtensibleEnum`: `init`

## Class ParrotModel.State

*enum* `net.minecraft.client.model.Class ParrotModel.State`

Enclosing class: ParrotModel

### Methods
- `public static ParrotModel.State[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ParrotModel.State valueOf(String name)`
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

## CodModel

*class* `net.minecraft.client.model.CodModel`

### Fields
- `private final ModelPart root`
- `private final ModelPart tailFin`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public ModelPart root()`
- `public void setupAnim(T p_102409_,  float p_102410_,  float p_102411_,  float p_102412_,  float p_102413_,  float p_102414_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## ColorableAgeableListModel

*class* `net.minecraft.client.model.ColorableAgeableListModel`

### Fields
- `private float r`
- `private float g`
- `private float b`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public void setColor(float p_102420_,  float p_102421_,  float p_102422_)`
- `public void renderToBuffer(PoseStack p_102424_,  VertexConsumer p_102425_,  int p_102426_,  int p_102427_,  float p_102428_,  float p_102429_,  float p_102430_,  float p_102431_)`

### Inherited methods
- from `net.minecraft.client.model.AgeableListModel`: `bodyParts`, `headParts`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`, `setupAnim`
- from `net.minecraft.client.model.Model`: `renderType`

## ColorableHierarchicalModel

*class* `net.minecraft.client.model.ColorableHierarchicalModel`

### Fields
- `private float r`
- `private float g`
- `private float b`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public void setColor(float p_170502_,  float p_170503_,  float p_170504_)`
- `public void renderToBuffer(PoseStack p_170506_,  VertexConsumer p_170507_,  int p_170508_,  int p_170509_,  float p_170510_,  float p_170511_,  float p_170512_,  float p_170513_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `root`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`, `setupAnim`
- from `net.minecraft.client.model.Model`: `renderType`

## CowModel

*class* `net.minecraft.client.model.CowModel`

### Inherited fields
- from `net.minecraft.client.model.QuadrupedModel`: `body`, `head`, `leftFrontLeg`, `leftHindLeg`, `rightFrontLeg`, `rightHindLeg`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public ModelPart getHead()`

### Inherited methods
- from `net.minecraft.client.model.QuadrupedModel`: `bodyParts`, `createBodyMesh`, `headParts`, `setupAnim`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## CreeperModel

*class* `net.minecraft.client.model.CreeperModel`

### Fields
- `private final ModelPart root`
- `private final ModelPart head`
- `private final ModelPart rightHindLeg`
- `private final ModelPart leftHindLeg`
- `private final ModelPart rightFrontLeg`
- `private final ModelPart leftFrontLeg`
- `private static final int Y_OFFSET` (= 6)

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer(CubeDeformation p_170526_)`
- `public ModelPart root()`
- `public void setupAnim(T p_102463_,  float p_102464_,  float p_102465_,  float p_102466_,  float p_102467_,  float p_102468_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## DolphinModel

*class* `net.minecraft.client.model.DolphinModel`

### Fields
- `private final ModelPart root`
- `private final ModelPart body`
- `private final ModelPart tail`
- `private final ModelPart tailFin`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public ModelPart root()`
- `public void setupAnim(T p_102475_,  float p_102476_,  float p_102477_,  float p_102478_,  float p_102479_,  float p_102480_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## DrownedModel

*class* `net.minecraft.client.model.DrownedModel`

### Inherited fields
- from `net.minecraft.client.model.HumanoidModel`: `body`, `crouching`, `hat`, `HAT_OVERLAY_SCALE`, `head`, `leftArm`, `leftArmPose`, `leftLeg`, `LEGGINGS_OVERLAY_SCALE`, `OVERLAY_SCALE`, `rightArm`, `rightArmPose`, `rightLeg`, `swimAmount`, `TOOT_HORN_XROT_BASE`, `TOOT_HORN_YROT_BASE`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer(CubeDeformation p_170536_)`
- `public void prepareMobModel(T p_102521_,  float p_102522_,  float p_102523_,  float p_102524_)`
- `public void setupAnim(T p_102526_,  float p_102527_,  float p_102528_,  float p_102529_,  float p_102530_,  float p_102531_)`

### Inherited methods
- from `net.minecraft.client.model.ZombieModel`: `isAggressive`
- from `net.minecraft.client.model.HumanoidModel`: `bodyParts`, `copyPropertiesTo`, `createMesh`, `getArm`, `getHead`, `headParts`, `rotlerpRad`, `setAllVisible`, `setupAttackAnimation`, `translateToHand`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## ElytraModel

*class* `net.minecraft.client.model.ElytraModel`

### Fields
- `private final ModelPart rightWing`
- `private final ModelPart leftWing`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createLayer()`
- `protected Iterable<ModelPart> headParts()`
- `protected Iterable<ModelPart> bodyParts()`
- `public void setupAnim(T p_102544_,  float p_102545_,  float p_102546_,  float p_102547_,  float p_102548_,  float p_102549_)`

### Inherited methods
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## EndermanModel

*class* `net.minecraft.client.model.EndermanModel`

### Fields
- `public boolean carrying`
- `public boolean creepy`

### Inherited fields
- from `net.minecraft.client.model.HumanoidModel`: `body`, `crouching`, `hat`, `HAT_OVERLAY_SCALE`, `head`, `leftArm`, `leftArmPose`, `leftLeg`, `LEGGINGS_OVERLAY_SCALE`, `OVERLAY_SCALE`, `rightArm`, `rightArmPose`, `rightLeg`, `swimAmount`, `TOOT_HORN_XROT_BASE`, `TOOT_HORN_YROT_BASE`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void setupAnim(T p_102588_,  float p_102589_,  float p_102590_,  float p_102591_,  float p_102592_,  float p_102593_)`

### Inherited methods
- from `net.minecraft.client.model.HumanoidModel`: `bodyParts`, `copyPropertiesTo`, `createMesh`, `getArm`, `getHead`, `headParts`, `prepareMobModel`, `rotlerpRad`, `setAllVisible`, `setupAttackAnimation`, `translateToHand`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## EndermiteModel

*class* `net.minecraft.client.model.EndermiteModel`

### Fields
- `private static final int BODY_COUNT` (= 4)
- `private static final int[][] BODY_SIZES`
- `private static final int[][] BODY_TEXS`
- `private final ModelPart root`
- `private final ModelPart[] bodyParts`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `private static String createSegmentName(int p_170548_)`
- `public static LayerDefinition createBodyLayer()`
- `public ModelPart root()`
- `public void setupAnim(T p_102602_,  float p_102603_,  float p_102604_,  float p_102605_,  float p_102606_,  float p_102607_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## EntityModel

*class* `net.minecraft.client.model.EntityModel`

### Fields
- `public float attackTime`
- `public boolean riding`
- `public boolean young`

### Inherited fields
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public abstract void setupAnim(T p_102618_,  float p_102619_,  float p_102620_,  float p_102621_,  float p_102622_,  float p_102623_)`
- `public void prepareMobModel(T p_102614_,  float p_102615_,  float p_102616_,  float p_102617_)`
- `public void copyPropertiesTo(EntityModel<T> p_102625_)`

### Inherited methods
- from `net.minecraft.client.model.Model`: `renderToBuffer`, `renderType`

## EvokerFangsModel

*class* `net.minecraft.client.model.EvokerFangsModel`

### Fields
- `private static final String BASE` (= "base")
- `private static final String UPPER_JAW` (= "upper_jaw")
- `private static final String LOWER_JAW` (= "lower_jaw")
- `private final ModelPart root`
- `private final ModelPart base`
- `private final ModelPart upperJaw`
- `private final ModelPart lowerJaw`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void setupAnim(T p_102632_,  float p_102633_,  float p_102634_,  float p_102635_,  float p_102636_,  float p_102637_)`
- `public ModelPart root()`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## FoxModel

*class* `net.minecraft.client.model.FoxModel`

### Fields
- `public final ModelPart head`
- `private final ModelPart body`
- `private final ModelPart rightHindLeg`
- `private final ModelPart leftHindLeg`
- `private final ModelPart rightFrontLeg`
- `private final ModelPart leftFrontLeg`
- `private final ModelPart tail`
- `private static final int LEG_SIZE` (= 6)
- `private static final float HEAD_HEIGHT` (= 16.5f)
- `private static final float LEG_POS` (= 17.5f)
- `private float legMotionPos`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void prepareMobModel(T p_102664_,  float p_102665_,  float p_102666_,  float p_102667_)`
- `protected Iterable<ModelPart> headParts()`
- `protected Iterable<ModelPart> bodyParts()`
- `public void setupAnim(T p_102669_,  float p_102670_,  float p_102671_,  float p_102672_,  float p_102673_,  float p_102674_)`

### Inherited methods
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## FrogModel

*class* `net.minecraft.client.model.FrogModel`

### Fields
- `private static final float MAX_WALK_ANIMATION_SPEED` (= 1.5f)
- `private static final float MAX_SWIM_ANIMATION_SPEED` (= 1.0f)
- `private static final float WALK_ANIMATION_SCALE_FACTOR` (= 2.5f)
- `private final ModelPart root`
- `private final ModelPart body`
- `private final ModelPart head`
- `private final ModelPart eyes`
- `private final ModelPart tongue`
- `private final ModelPart leftArm`
- `private final ModelPart rightArm`
- `private final ModelPart leftLeg`
- `private final ModelPart rightLeg`
- `private final ModelPart croakingBody`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void setupAnim(T p_233372_,  float p_233373_,  float p_233374_,  float p_233375_,  float p_233376_,  float p_233377_)`
- `public ModelPart root()`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## GhastModel

*class* `net.minecraft.client.model.GhastModel`

### Fields
- `private final ModelPart root`
- `private final ModelPart[] tentacles`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `private static String createTentacleName(int p_170573_)`
- `public static LayerDefinition createBodyLayer()`
- `public void setupAnim(T p_102681_,  float p_102682_,  float p_102683_,  float p_102684_,  float p_102685_,  float p_102686_)`
- `public ModelPart root()`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## GiantZombieModel

*class* `net.minecraft.client.model.GiantZombieModel`

### Inherited fields
- from `net.minecraft.client.model.HumanoidModel`: `body`, `crouching`, `hat`, `HAT_OVERLAY_SCALE`, `head`, `leftArm`, `leftArmPose`, `leftLeg`, `LEGGINGS_OVERLAY_SCALE`, `OVERLAY_SCALE`, `rightArm`, `rightArmPose`, `rightLeg`, `swimAmount`, `TOOT_HORN_XROT_BASE`, `TOOT_HORN_YROT_BASE`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public boolean isAggressive(Giant p_102692_)`

### Inherited methods
- from `net.minecraft.client.model.AbstractZombieModel`: `setupAnim`
- from `net.minecraft.client.model.HumanoidModel`: `bodyParts`, `copyPropertiesTo`, `createMesh`, `getArm`, `getHead`, `headParts`, `prepareMobModel`, `rotlerpRad`, `setAllVisible`, `setupAttackAnimation`, `translateToHand`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## GoatModel

*class* `net.minecraft.client.model.GoatModel`

### Inherited fields
- from `net.minecraft.client.model.QuadrupedModel`: `body`, `head`, `leftFrontLeg`, `leftHindLeg`, `rightFrontLeg`, `rightHindLeg`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void setupAnim(T p_170587_,  float p_170588_,  float p_170589_,  float p_170590_,  float p_170591_,  float p_170592_)`

### Inherited methods
- from `net.minecraft.client.model.QuadrupedModel`: `bodyParts`, `createBodyMesh`, `headParts`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## GuardianModel

*class* `net.minecraft.client.model.GuardianModel`

### Fields
- `private static final float[] SPIKE_X_ROT`
- `private static final float[] SPIKE_Y_ROT`
- `private static final float[] SPIKE_Z_ROT`
- `private static final float[] SPIKE_X`
- `private static final float[] SPIKE_Y`
- `private static final float[] SPIKE_Z`
- `private static final String EYE` (= "eye")
- `private static final String TAIL_0` (= "tail0")
- `private static final String TAIL_1` (= "tail1")
- `private static final String TAIL_2` (= "tail2")
- `private final ModelPart root`
- `private final ModelPart head`
- `private final ModelPart eye`
- `private final ModelPart[] spikeParts`
- `private final ModelPart[] tailParts`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `private static String createSpikeName(int p_170603_)`
- `public static LayerDefinition createBodyLayer()`
- `public ModelPart root()`
- `public void setupAnim(Guardian p_102719_,  float p_102720_,  float p_102721_,  float p_102722_,  float p_102723_,  float p_102724_)`
- `private void setupSpikes(float p_102709_,  float p_102710_)`
- `private static float getSpikeOffset(int p_170605_,  float p_170606_,  float p_170607_)`
- `private static float getSpikeX(int p_170610_,  float p_170611_,  float p_170612_)`
- `private static float getSpikeY(int p_170614_,  float p_170615_,  float p_170616_)`
- `private static float getSpikeZ(int p_170618_,  float p_170619_,  float p_170620_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## HeadedModel

*interface* `net.minecraft.client.model.HeadedModel`

### Methods
- `ModelPart getHead()`

## HierarchicalModel

*class* `net.minecraft.client.model.HierarchicalModel`

### Fields
- `private static final org.joml.Vector3f ANIMATION_VECTOR_CACHE`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public void renderToBuffer(PoseStack p_170625_,  VertexConsumer p_170626_,  int p_170627_,  int p_170628_,  float p_170629_,  float p_170630_,  float p_170631_,  float p_170632_)`
- `public abstract ModelPart root()`
- `public Optional<ModelPart> getAnyDescendantWithName(String p_233394_)`
- `protected void animate(AnimationState p_233382_,  AnimationDefinition p_233383_,  float p_233384_)`
- `protected void animateWalk(AnimationDefinition p_268159_,  float p_268057_,  float p_268347_,  float p_268138_,  float p_268165_)`
- `protected void animate(AnimationState p_233386_,  AnimationDefinition p_233387_,  float p_233388_,  float p_233389_)`
- `protected void applyStatic(AnimationDefinition p_288996_)`

### Inherited methods
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`, `setupAnim`
- from `net.minecraft.client.model.Model`: `renderType`

## HoglinModel

*class* `net.minecraft.client.model.HoglinModel`

### Fields
- `private static final float DEFAULT_HEAD_X_ROT` (= 0.8726646304130554f)
- `private static final float ATTACK_HEAD_X_ROT_END` (= -0.3490658402442932f)
- `private final ModelPart head`
- `private final ModelPart rightEar`
- `private final ModelPart leftEar`
- `private final ModelPart body`
- `private final ModelPart rightFrontLeg`
- `private final ModelPart leftFrontLeg`
- `private final ModelPart rightHindLeg`
- `private final ModelPart leftHindLeg`
- `private final ModelPart mane`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `protected Iterable<ModelPart> headParts()`
- `protected Iterable<ModelPart> bodyParts()`
- `public void setupAnim(T p_102744_,  float p_102745_,  float p_102746_,  float p_102747_,  float p_102748_,  float p_102749_)`

### Inherited methods
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## HorseModel

*class* `net.minecraft.client.model.HorseModel`

### Fields
- `private static final float DEG_125` (= 2.181661605834961f)
- `private static final float DEG_60` (= 1.0471975803375244f)
- `private static final float DEG_45` (= 0.7853981852531433f)
- `private static final float DEG_30` (= 0.5235987901687622f)
- `private static final float DEG_15` (= 0.2617993950843811f)
- `protected static final String HEAD_PARTS` (= "head_parts")
- `private static final String LEFT_HIND_BABY_LEG` (= "left_hind_baby_leg")
- `private static final String RIGHT_HIND_BABY_LEG` (= "right_hind_baby_leg")
- `private static final String LEFT_FRONT_BABY_LEG` (= "left_front_baby_leg")
- `private static final String RIGHT_FRONT_BABY_LEG` (= "right_front_baby_leg")
- `private static final String SADDLE` (= "saddle")
- `private static final String LEFT_SADDLE_MOUTH` (= "left_saddle_mouth")
- `private static final String LEFT_SADDLE_LINE` (= "left_saddle_line")
- `private static final String RIGHT_SADDLE_MOUTH` (= "right_saddle_mouth")
- `private static final String RIGHT_SADDLE_LINE` (= "right_saddle_line")
- `private static final String HEAD_SADDLE` (= "head_saddle")
- `private static final String MOUTH_SADDLE_WRAP` (= "mouth_saddle_wrap")
- `protected final ModelPart body`
- `protected final ModelPart headParts`
- `private final ModelPart rightHindLeg`
- `private final ModelPart leftHindLeg`
- `private final ModelPart rightFrontLeg`
- `private final ModelPart leftFrontLeg`
- `private final ModelPart rightHindBabyLeg`
- `private final ModelPart leftHindBabyLeg`
- `private final ModelPart rightFrontBabyLeg`
- `private final ModelPart leftFrontBabyLeg`
- `private final ModelPart tail`
- `private final ModelPart[] saddleParts`
- `private final ModelPart[] ridingParts`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static MeshDefinition createBodyMesh(CubeDeformation p_170670_)`
- `public void setupAnim(T p_102785_,  float p_102786_,  float p_102787_,  float p_102788_,  float p_102789_,  float p_102790_)`
- `public Iterable<ModelPart> headParts()`
- `protected Iterable<ModelPart> bodyParts()`
- `public void prepareMobModel(T p_102780_,  float p_102781_,  float p_102782_,  float p_102783_)`

### Inherited methods
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## HumanoidArmorModel

*class* `net.minecraft.client.model.HumanoidArmorModel`

### Inherited fields
- from `net.minecraft.client.model.HumanoidModel`: `body`, `crouching`, `hat`, `HAT_OVERLAY_SCALE`, `head`, `leftArm`, `leftArmPose`, `leftLeg`, `LEGGINGS_OVERLAY_SCALE`, `OVERLAY_SCALE`, `rightArm`, `rightArmPose`, `rightLeg`, `swimAmount`, `TOOT_HORN_XROT_BASE`, `TOOT_HORN_YROT_BASE`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static MeshDefinition createBodyLayer(CubeDeformation p_270527_)`

### Inherited methods
- from `net.minecraft.client.model.HumanoidModel`: `bodyParts`, `copyPropertiesTo`, `createMesh`, `getArm`, `getHead`, `headParts`, `prepareMobModel`, `rotlerpRad`, `setAllVisible`, `setupAnim`, `setupAttackAnimation`, `translateToHand`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## HumanoidModel

*class* `net.minecraft.client.model.HumanoidModel`

### Fields
- `public static final float OVERLAY_SCALE` (= 0.25f)
- `public static final float HAT_OVERLAY_SCALE` (= 0.5f)
- `public static final float LEGGINGS_OVERLAY_SCALE` (= -0.10000000149011612f)
- `private static final float DUCK_WALK_ROTATION` (= 0.004999999888241291f)
- `private static final float SPYGLASS_ARM_ROT_Y` (= 0.2617993950843811f)
- `private static final float SPYGLASS_ARM_ROT_X` (= 1.919862151145935f)
- `private static final float SPYGLASS_ARM_CROUCH_ROT_X` (= 0.2617993950843811f)
- `public static final float TOOT_HORN_XROT_BASE` (= 1.483529806137085f)
- `public static final float TOOT_HORN_YROT_BASE` (= 0.5235987901687622f)
- `public final ModelPart head`
- `public final ModelPart hat`
- `public final ModelPart body`
- `public final ModelPart rightArm`
- `public final ModelPart leftArm`
- `public final ModelPart rightLeg`
- `public final ModelPart leftLeg`
- `public HumanoidModel.ArmPose leftArmPose`
- `public HumanoidModel.ArmPose rightArmPose`
- `public boolean crouching`
- `public float swimAmount`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static MeshDefinition createMesh(CubeDeformation p_170682_,  float p_170683_)`
- `protected Iterable<ModelPart> headParts()`
- `protected Iterable<ModelPart> bodyParts()`
- `public void prepareMobModel(T p_102861_,  float p_102862_,  float p_102863_,  float p_102864_)`
- `public void setupAnim(T p_102866_,  float p_102867_,  float p_102868_,  float p_102869_,  float p_102870_,  float p_102871_)`
- `private void poseRightArm(T p_102876_)`
- `private void poseLeftArm(T p_102879_)`
- `protected void setupAttackAnimation(T p_102858_,  float p_102859_)`
- `protected float rotlerpRad(float p_102836_,  float p_102837_,  float p_102838_)`
- `private float quadraticArmUpdate(float p_102834_)`
- `public void copyPropertiesTo(HumanoidModel<T> p_102873_)`
- `public void setAllVisible(boolean p_102880_)`
- `public void translateToHand(HumanoidArm p_102854_,  PoseStack p_102855_)`
- `protected ModelPart getArm(HumanoidArm p_102852_)`
- `public ModelPart getHead()`
- `private HumanoidArm getAttackArm(T p_102857_)`

### Inherited methods
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## IllagerModel

*class* `net.minecraft.client.model.IllagerModel`

### Fields
- `private final ModelPart root`
- `private final ModelPart head`
- `private final ModelPart hat`
- `private final ModelPart arms`
- `private final ModelPart leftLeg`
- `private final ModelPart rightLeg`
- `private final ModelPart rightArm`
- `private final ModelPart leftArm`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public ModelPart root()`
- `public void setupAnim(T p_102928_,  float p_102929_,  float p_102930_,  float p_102931_,  float p_102932_,  float p_102933_)`
- `private ModelPart getArm(HumanoidArm p_102923_)`
- `public ModelPart getHat()`
- `public ModelPart getHead()`
- `public void translateToHand(HumanoidArm p_102925_,  PoseStack p_102926_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## IronGolemModel

*class* `net.minecraft.client.model.IronGolemModel`

### Fields
- `private final ModelPart root`
- `private final ModelPart head`
- `private final ModelPart rightArm`
- `private final ModelPart leftArm`
- `private final ModelPart rightLeg`
- `private final ModelPart leftLeg`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public ModelPart root()`
- `public void setupAnim(T p_102962_,  float p_102963_,  float p_102964_,  float p_102965_,  float p_102966_,  float p_102967_)`
- `public void prepareMobModel(T p_102957_,  float p_102958_,  float p_102959_,  float p_102960_)`
- `public ModelPart getFlowerHoldingArm()`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## LavaSlimeModel

*class* `net.minecraft.client.model.LavaSlimeModel`

### Fields
- `private static final int SEGMENT_COUNT` (= 8)
- `private final ModelPart root`
- `private final ModelPart[] bodyCubes`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `private static String getSegmentName(int p_170706_)`
- `public static LayerDefinition createBodyLayer()`
- `public void setupAnim(T p_102992_,  float p_102993_,  float p_102994_,  float p_102995_,  float p_102996_,  float p_102997_)`
- `public void prepareMobModel(T p_102987_,  float p_102988_,  float p_102989_,  float p_102990_)`
- `public ModelPart root()`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## LeashKnotModel

*class* `net.minecraft.client.model.LeashKnotModel`

### Fields
- `private static final String KNOT` (= "knot")
- `private final ModelPart root`
- `private final ModelPart knot`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public ModelPart root()`
- `public void setupAnim(T p_103003_,  float p_103004_,  float p_103005_,  float p_103006_,  float p_103007_,  float p_103008_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## ListModel

*class* `net.minecraft.client.model.ListModel`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public void renderToBuffer(PoseStack p_103013_,  VertexConsumer p_103014_,  int p_103015_,  int p_103016_,  float p_103017_,  float p_103018_,  float p_103019_,  float p_103020_)`
- `public abstract Iterable<ModelPart> parts()`

### Inherited methods
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`, `setupAnim`
- from `net.minecraft.client.model.Model`: `renderType`

## LlamaModel

*class* `net.minecraft.client.model.LlamaModel`

### Fields
- `private final ModelPart head`
- `private final ModelPart body`
- `private final ModelPart rightHindLeg`
- `private final ModelPart leftHindLeg`
- `private final ModelPart rightFrontLeg`
- `private final ModelPart leftFrontLeg`
- `private final ModelPart rightChest`
- `private final ModelPart leftChest`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer(CubeDeformation p_170726_)`
- `public void setupAnim(T p_103049_,  float p_103050_,  float p_103051_,  float p_103052_,  float p_103053_,  float p_103054_)`
- `public void renderToBuffer(PoseStack p_103056_,  VertexConsumer p_103057_,  int p_103058_,  int p_103059_,  float p_103060_,  float p_103061_,  float p_103062_,  float p_103063_)`

### Inherited methods
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## LlamaSpitModel

*class* `net.minecraft.client.model.LlamaSpitModel`

### Fields
- `private static final String MAIN` (= "main")
- `private final ModelPart root`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void setupAnim(T p_103090_,  float p_103091_,  float p_103092_,  float p_103093_,  float p_103094_,  float p_103095_)`
- `public ModelPart root()`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## MinecartModel

*class* `net.minecraft.client.model.MinecartModel`

### Fields
- `private final ModelPart root`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void setupAnim(T p_103100_,  float p_103101_,  float p_103102_,  float p_103103_,  float p_103104_,  float p_103105_)`
- `public ModelPart root()`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## Model

*class* `net.minecraft.client.model.Model`

### Fields
- `protected final Function<ResourceLocation,RenderType> renderType`

### Methods
- `public final RenderType renderType(ResourceLocation p_103120_)`
- `public abstract void renderToBuffer(PoseStack p_103111_,  VertexConsumer p_103112_,  int p_103113_,  int p_103114_,  float p_103115_,  float p_103116_,  float p_103117_,  float p_103118_)`

## ModelUtils

*class* `net.minecraft.client.model.ModelUtils`

### Methods
- `public static float rotlerpRad(float p_103126_,  float p_103127_,  float p_103128_)`

## OcelotModel

*class* `net.minecraft.client.model.OcelotModel`

### Fields
- `private static final int CROUCH_STATE` (= 0)
- `private static final int WALK_STATE` (= 1)
- `private static final int SPRINT_STATE` (= 2)
- `protected static final int SITTING_STATE` (= 3)
- `private static final float XO` (= 0.0f)
- `private static final float YO` (= 16.0f)
- `private static final float ZO` (= -9.0f)
- `private static final float HEAD_WALK_Y` (= 15.0f)
- `private static final float HEAD_WALK_Z` (= -9.0f)
- `private static final float BODY_WALK_Y` (= 12.0f)
- `private static final float BODY_WALK_Z` (= -10.0f)
- `private static final float TAIL_1_WALK_Y` (= 15.0f)
- `private static final float TAIL_1_WALK_Z` (= 8.0f)
- `private static final float TAIL_2_WALK_Y` (= 20.0f)
- `private static final float TAIL_2_WALK_Z` (= 14.0f)
- `protected static final float BACK_LEG_Y` (= 18.0f)
- `protected static final float BACK_LEG_Z` (= 5.0f)
- `protected static final float FRONT_LEG_Y` (= 14.100000381469727f)
- `private static final float FRONT_LEG_Z` (= -5.0f)
- `private static final String TAIL_1` (= "tail1")
- `private static final String TAIL_2` (= "tail2")
- `protected final ModelPart leftHindLeg`
- `protected final ModelPart rightHindLeg`
- `protected final ModelPart leftFrontLeg`
- `protected final ModelPart rightFrontLeg`
- `protected final ModelPart tail1`
- `protected final ModelPart tail2`
- `protected final ModelPart head`
- `protected final ModelPart body`
- `protected int state`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static MeshDefinition createBodyMesh(CubeDeformation p_170769_)`
- `protected Iterable<ModelPart> headParts()`
- `protected Iterable<ModelPart> bodyParts()`
- `public void setupAnim(T p_103147_,  float p_103148_,  float p_103149_,  float p_103150_,  float p_103151_,  float p_103152_)`
- `public void prepareMobModel(T p_103142_,  float p_103143_,  float p_103144_,  float p_103145_)`

### Inherited methods
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## PandaModel

*class* `net.minecraft.client.model.PandaModel`

### Fields
- `private float sitAmount`
- `private float lieOnBackAmount`
- `private float rollAmount`

### Inherited fields
- from `net.minecraft.client.model.QuadrupedModel`: `body`, `head`, `leftFrontLeg`, `leftHindLeg`, `rightFrontLeg`, `rightHindLeg`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void prepareMobModel(T p_103173_,  float p_103174_,  float p_103175_,  float p_103176_)`
- `public void setupAnim(T p_103178_,  float p_103179_,  float p_103180_,  float p_103181_,  float p_103182_,  float p_103183_)`

### Inherited methods
- from `net.minecraft.client.model.QuadrupedModel`: `bodyParts`, `createBodyMesh`, `headParts`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## ParrotModel

*class* `net.minecraft.client.model.ParrotModel`

### Fields
- `private static final String FEATHER` (= "feather")
- `private final ModelPart root`
- `private final ModelPart body`
- `private final ModelPart tail`
- `private final ModelPart leftWing`
- `private final ModelPart rightWing`
- `private final ModelPart head`
- `private final ModelPart feather`
- `private final ModelPart leftLeg`
- `private final ModelPart rightLeg`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public ModelPart root()`
- `public void setupAnim(Parrot p_103217_,  float p_103218_,  float p_103219_,  float p_103220_,  float p_103221_,  float p_103222_)`
- `public void prepareMobModel(Parrot p_103212_,  float p_103213_,  float p_103214_,  float p_103215_)`
- `public void renderOnShoulder(PoseStack p_103224_,  VertexConsumer p_103225_,  int p_103226_,  int p_103227_,  float p_103228_,  float p_103229_,  float p_103230_,  float p_103231_,  int p_103232_)`
- `private void setupAnim(ParrotModel.State p_103242_,  int p_103243_,  float p_103244_,  float p_103245_,  float p_103246_,  float p_103247_,  float p_103248_)`
- `private void prepare(ParrotModel.State p_103240_)`
- `private static ParrotModel.State getState(Parrot p_103210_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## PhantomModel

*class* `net.minecraft.client.model.PhantomModel`

### Fields
- `private static final String TAIL_BASE` (= "tail_base")
- `private static final String TAIL_TIP` (= "tail_tip")
- `private final ModelPart root`
- `private final ModelPart leftWingBase`
- `private final ModelPart leftWingTip`
- `private final ModelPart rightWingBase`
- `private final ModelPart rightWingTip`
- `private final ModelPart tailBase`
- `private final ModelPart tailTip`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public ModelPart root()`
- `public void setupAnim(T p_170791_,  float p_170792_,  float p_170793_,  float p_170794_,  float p_170795_,  float p_170796_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## PiglinHeadModel

*class* `net.minecraft.client.model.PiglinHeadModel`

### Fields
- `private final ModelPart head`
- `private final ModelPart leftEar`
- `private final ModelPart rightEar`

### Inherited fields
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static MeshDefinition createHeadModel()`
- `public void setupAnim(float p_261561_,  float p_261750_,  float p_261549_)`
- `public void renderToBuffer(PoseStack p_261809_,  VertexConsumer p_261744_,  int p_261711_,  int p_262032_,  float p_262022_,  float p_261949_,  float p_261474_,  float p_261957_)`

### Inherited methods
- from `net.minecraft.client.model.Model`: `renderType`

## PiglinModel

*class* `net.minecraft.client.model.PiglinModel`

### Fields
- `public final ModelPart rightEar`
- `private final ModelPart leftEar`
- `private final PartPose bodyDefault`
- `private final PartPose headDefault`
- `private final PartPose leftArmDefault`
- `private final PartPose rightArmDefault`

### Inherited fields
- from `net.minecraft.client.model.PlayerModel`: `jacket`, `leftPants`, `leftSleeve`, `rightPants`, `rightSleeve`
- from `net.minecraft.client.model.HumanoidModel`: `body`, `crouching`, `hat`, `HAT_OVERLAY_SCALE`, `head`, `leftArm`, `leftArmPose`, `leftLeg`, `LEGGINGS_OVERLAY_SCALE`, `OVERLAY_SCALE`, `rightArm`, `rightArmPose`, `rightLeg`, `swimAmount`, `TOOT_HORN_XROT_BASE`, `TOOT_HORN_YROT_BASE`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static MeshDefinition createMesh(CubeDeformation p_170812_)`
- `public static void addHead(CubeDeformation p_262174_,  MeshDefinition p_262011_)`
- `public void setupAnim(T p_103366_,  float p_103367_,  float p_103368_,  float p_103369_,  float p_103370_,  float p_103371_)`
- `protected void setupAttackAnimation(T p_103363_,  float p_103364_)`
- `private void holdWeaponHigh(T p_103361_)`

### Inherited methods
- from `net.minecraft.client.model.PlayerModel`: `bodyParts`, `createMesh`, `getRandomModelPart`, `renderCloak`, `renderEars`, `setAllVisible`, `translateToHand`
- from `net.minecraft.client.model.HumanoidModel`: `copyPropertiesTo`, `createMesh`, `getArm`, `getHead`, `headParts`, `prepareMobModel`, `rotlerpRad`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## PigModel

*class* `net.minecraft.client.model.PigModel`

### Inherited fields
- from `net.minecraft.client.model.QuadrupedModel`: `body`, `head`, `leftFrontLeg`, `leftHindLeg`, `rightFrontLeg`, `rightHindLeg`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer(CubeDeformation p_170801_)`

### Inherited methods
- from `net.minecraft.client.model.QuadrupedModel`: `bodyParts`, `createBodyMesh`, `headParts`, `setupAnim`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## PlayerModel

*class* `net.minecraft.client.model.PlayerModel`

### Fields
- `private static final String EAR` (= "ear")
- `private static final String CLOAK` (= "cloak")
- `private static final String LEFT_SLEEVE` (= "left_sleeve")
- `private static final String RIGHT_SLEEVE` (= "right_sleeve")
- `private static final String LEFT_PANTS` (= "left_pants")
- `private static final String RIGHT_PANTS` (= "right_pants")
- `private final List<ModelPart> parts`
- `public final ModelPart leftSleeve`
- `public final ModelPart rightSleeve`
- `public final ModelPart leftPants`
- `public final ModelPart rightPants`
- `public final ModelPart jacket`
- `private final ModelPart cloak`
- `private final ModelPart ear`
- `private final boolean slim`

### Inherited fields
- from `net.minecraft.client.model.HumanoidModel`: `body`, `crouching`, `hat`, `HAT_OVERLAY_SCALE`, `head`, `leftArm`, `leftArmPose`, `leftLeg`, `LEGGINGS_OVERLAY_SCALE`, `OVERLAY_SCALE`, `rightArm`, `rightArmPose`, `rightLeg`, `swimAmount`, `TOOT_HORN_XROT_BASE`, `TOOT_HORN_YROT_BASE`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static MeshDefinition createMesh(CubeDeformation p_170826_,  boolean p_170827_)`
- `protected Iterable<ModelPart> bodyParts()`
- `public void renderEars(PoseStack p_103402_,  VertexConsumer p_103403_,  int p_103404_,  int p_103405_)`
- `public void renderCloak(PoseStack p_103412_,  VertexConsumer p_103413_,  int p_103414_,  int p_103415_)`
- `public void setupAnim(T p_103395_,  float p_103396_,  float p_103397_,  float p_103398_,  float p_103399_,  float p_103400_)`
- `public void setAllVisible(boolean p_103419_)`
- `public void translateToHand(HumanoidArm p_103392_,  PoseStack p_103393_)`
- `public ModelPart getRandomModelPart(RandomSource p_233439_)`

### Inherited methods
- from `net.minecraft.client.model.HumanoidModel`: `copyPropertiesTo`, `createMesh`, `getArm`, `getHead`, `headParts`, `prepareMobModel`, `rotlerpRad`, `setupAttackAnimation`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## PolarBearModel

*class* `net.minecraft.client.model.PolarBearModel`

### Inherited fields
- from `net.minecraft.client.model.QuadrupedModel`: `body`, `head`, `leftFrontLeg`, `leftHindLeg`, `rightFrontLeg`, `rightHindLeg`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void setupAnim(T p_103429_,  float p_103430_,  float p_103431_,  float p_103432_,  float p_103433_,  float p_103434_)`

### Inherited methods
- from `net.minecraft.client.model.QuadrupedModel`: `bodyParts`, `createBodyMesh`, `headParts`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## PufferfishBigModel

*class* `net.minecraft.client.model.PufferfishBigModel`

### Fields
- `private final ModelPart root`
- `private final ModelPart leftBlueFin`
- `private final ModelPart rightBlueFin`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public ModelPart root()`
- `public void setupAnim(T p_103451_,  float p_103452_,  float p_103453_,  float p_103454_,  float p_103455_,  float p_103456_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## PufferfishMidModel

*class* `net.minecraft.client.model.PufferfishMidModel`

### Fields
- `private final ModelPart root`
- `private final ModelPart leftBlueFin`
- `private final ModelPart rightBlueFin`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public ModelPart root()`
- `public void setupAnim(T p_103471_,  float p_103472_,  float p_103473_,  float p_103474_,  float p_103475_,  float p_103476_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## PufferfishSmallModel

*class* `net.minecraft.client.model.PufferfishSmallModel`

### Fields
- `private final ModelPart root`
- `private final ModelPart leftFin`
- `private final ModelPart rightFin`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public ModelPart root()`
- `public void setupAnim(T p_103486_,  float p_103487_,  float p_103488_,  float p_103489_,  float p_103490_,  float p_103491_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## QuadrupedModel

*class* `net.minecraft.client.model.QuadrupedModel`

### Fields
- `protected final ModelPart head`
- `protected final ModelPart body`
- `protected final ModelPart rightHindLeg`
- `protected final ModelPart leftHindLeg`
- `protected final ModelPart rightFrontLeg`
- `protected final ModelPart leftFrontLeg`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static MeshDefinition createBodyMesh(int p_170865_,  CubeDeformation p_170866_)`
- `protected Iterable<ModelPart> headParts()`
- `protected Iterable<ModelPart> bodyParts()`
- `public void setupAnim(T p_103509_,  float p_103510_,  float p_103511_,  float p_103512_,  float p_103513_,  float p_103514_)`

### Inherited methods
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## RabbitModel

*class* `net.minecraft.client.model.RabbitModel`

### Fields
- `private static final float REAR_JUMP_ANGLE` (= 50.0f)
- `private static final float FRONT_JUMP_ANGLE` (= -40.0f)
- `private static final String LEFT_HAUNCH` (= "left_haunch")
- `private static final String RIGHT_HAUNCH` (= "right_haunch")
- `private final ModelPart leftRearFoot`
- `private final ModelPart rightRearFoot`
- `private final ModelPart leftHaunch`
- `private final ModelPart rightHaunch`
- `private final ModelPart body`
- `private final ModelPart leftFrontLeg`
- `private final ModelPart rightFrontLeg`
- `private final ModelPart head`
- `private final ModelPart rightEar`
- `private final ModelPart leftEar`
- `private final ModelPart tail`
- `private final ModelPart nose`
- `private float jumpRotation`
- `private static final float NEW_SCALE` (= 0.6000000238418579f)

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void renderToBuffer(PoseStack p_103555_,  VertexConsumer p_103556_,  int p_103557_,  int p_103558_,  float p_103559_,  float p_103560_,  float p_103561_,  float p_103562_)`
- `public void setupAnim(T p_103548_,  float p_103549_,  float p_103550_,  float p_103551_,  float p_103552_,  float p_103553_)`
- `public void prepareMobModel(T p_103543_,  float p_103544_,  float p_103545_,  float p_103546_)`

### Inherited methods
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## RaftModel

*class* `net.minecraft.client.model.RaftModel`

### Fields
- `private static final String LEFT_PADDLE` (= "left_paddle")
- `private static final String RIGHT_PADDLE` (= "right_paddle")
- `private static final String BOTTOM` (= "bottom")
- `private final ModelPart leftPaddle`
- `private final ModelPart rightPaddle`
- `private final com.google.common.collect.ImmutableList<ModelPart> parts`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `protected com.google.common.collect.ImmutableList.Builder<ModelPart> createPartsBuilder(ModelPart p_250773_)`
- `public static void createChildren(PartDefinition p_250262_)`
- `public static LayerDefinition createBodyModel()`
- `public void setupAnim(Boat p_249733_,  float p_249202_,  float p_252219_,  float p_249366_,  float p_249759_,  float p_250286_)`
- `public com.google.common.collect.ImmutableList<ModelPart> parts()`
- `private static void animatePaddle(Boat p_250792_,  int p_249947_,  ModelPart p_248943_,  float p_251990_)`

### Inherited methods
- from `net.minecraft.client.model.ListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## RavagerModel

*class* `net.minecraft.client.model.RavagerModel`

### Fields
- `private final ModelPart root`
- `private final ModelPart head`
- `private final ModelPart mouth`
- `private final ModelPart rightHindLeg`
- `private final ModelPart leftHindLeg`
- `private final ModelPart rightFrontLeg`
- `private final ModelPart leftFrontLeg`
- `private final ModelPart neck`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public ModelPart root()`
- `public void setupAnim(Ravager p_103626_,  float p_103627_,  float p_103628_,  float p_103629_,  float p_103630_,  float p_103631_)`
- `public void prepareMobModel(Ravager p_103621_,  float p_103622_,  float p_103623_,  float p_103624_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## SalmonModel

*class* `net.minecraft.client.model.SalmonModel`

### Fields
- `private static final String BODY_FRONT` (= "body_front")
- `private static final String BODY_BACK` (= "body_back")
- `private final ModelPart root`
- `private final ModelPart bodyBack`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public ModelPart root()`
- `public void setupAnim(T p_103640_,  float p_103641_,  float p_103642_,  float p_103643_,  float p_103644_,  float p_103645_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## SheepFurModel

*class* `net.minecraft.client.model.SheepFurModel`

### Fields
- `private float headXRot`

### Inherited fields
- from `net.minecraft.client.model.QuadrupedModel`: `body`, `head`, `leftFrontLeg`, `leftHindLeg`, `rightFrontLeg`, `rightHindLeg`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createFurLayer()`
- `public void prepareMobModel(T p_103661_,  float p_103662_,  float p_103663_,  float p_103664_)`
- `public void setupAnim(T p_103666_,  float p_103667_,  float p_103668_,  float p_103669_,  float p_103670_,  float p_103671_)`

### Inherited methods
- from `net.minecraft.client.model.QuadrupedModel`: `bodyParts`, `createBodyMesh`, `headParts`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## SheepModel

*class* `net.minecraft.client.model.SheepModel`

### Fields
- `private float headXRot`

### Inherited fields
- from `net.minecraft.client.model.QuadrupedModel`: `body`, `head`, `leftFrontLeg`, `leftHindLeg`, `rightFrontLeg`, `rightHindLeg`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void prepareMobModel(T p_103687_,  float p_103688_,  float p_103689_,  float p_103690_)`
- `public void setupAnim(T p_103692_,  float p_103693_,  float p_103694_,  float p_103695_,  float p_103696_,  float p_103697_)`

### Inherited methods
- from `net.minecraft.client.model.QuadrupedModel`: `bodyParts`, `createBodyMesh`, `headParts`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## ShieldModel

*class* `net.minecraft.client.model.ShieldModel`

### Fields
- `private static final String PLATE` (= "plate")
- `private static final String HANDLE` (= "handle")
- `private static final int SHIELD_WIDTH` (= 10)
- `private static final int SHIELD_HEIGHT` (= 20)
- `private final ModelPart root`
- `private final ModelPart plate`
- `private final ModelPart handle`

### Inherited fields
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createLayer()`
- `public ModelPart plate()`
- `public ModelPart handle()`
- `public void renderToBuffer(PoseStack p_103703_,  VertexConsumer p_103704_,  int p_103705_,  int p_103706_,  float p_103707_,  float p_103708_,  float p_103709_,  float p_103710_)`

### Inherited methods
- from `net.minecraft.client.model.Model`: `renderType`

## ShulkerBulletModel

*class* `net.minecraft.client.model.ShulkerBulletModel`

### Fields
- `private static final String MAIN` (= "main")
- `private final ModelPart root`
- `private final ModelPart main`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public ModelPart root()`
- `public void setupAnim(T p_103716_,  float p_103717_,  float p_103718_,  float p_103719_,  float p_103720_,  float p_103721_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## ShulkerModel

*class* `net.minecraft.client.model.ShulkerModel`

### Fields
- `private static final String LID` (= "lid")
- `private static final String BASE` (= "base")
- `private final ModelPart base`
- `private final ModelPart lid`
- `private final ModelPart head`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void setupAnim(T p_103735_,  float p_103736_,  float p_103737_,  float p_103738_,  float p_103739_,  float p_103740_)`
- `public Iterable<ModelPart> parts()`
- `public ModelPart getLid()`
- `public ModelPart getHead()`

### Inherited methods
- from `net.minecraft.client.model.ListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## SilverfishModel

*class* `net.minecraft.client.model.SilverfishModel`

### Fields
- `private static final int BODY_COUNT` (= 7)
- `private final ModelPart root`
- `private final ModelPart[] bodyParts`
- `private final ModelPart[] bodyLayers`
- `private static final int[][] BODY_SIZES`
- `private static final int[][] BODY_TEXS`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `private static String getLayerName(int p_170930_)`
- `private static String getSegmentName(int p_170936_)`
- `public static LayerDefinition createBodyLayer()`
- `public ModelPart root()`
- `public void setupAnim(T p_103754_,  float p_103755_,  float p_103756_,  float p_103757_,  float p_103758_,  float p_103759_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## SkeletonModel

*class* `net.minecraft.client.model.SkeletonModel`

### Inherited fields
- from `net.minecraft.client.model.HumanoidModel`: `body`, `crouching`, `hat`, `HAT_OVERLAY_SCALE`, `head`, `leftArm`, `leftArmPose`, `leftLeg`, `LEGGINGS_OVERLAY_SCALE`, `OVERLAY_SCALE`, `rightArm`, `rightArmPose`, `rightLeg`, `swimAmount`, `TOOT_HORN_XROT_BASE`, `TOOT_HORN_YROT_BASE`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void prepareMobModel(T p_103793_,  float p_103794_,  float p_103795_,  float p_103796_)`
- `public void setupAnim(T p_103798_,  float p_103799_,  float p_103800_,  float p_103801_,  float p_103802_,  float p_103803_)`
- `public void translateToHand(HumanoidArm p_103778_,  PoseStack p_103779_)`

### Inherited methods
- from `net.minecraft.client.model.HumanoidModel`: `bodyParts`, `copyPropertiesTo`, `createMesh`, `getArm`, `getHead`, `headParts`, `rotlerpRad`, `setAllVisible`, `setupAttackAnimation`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## SkullModel

*class* `net.minecraft.client.model.SkullModel`

### Fields
- `private final ModelPart root`
- `protected final ModelPart head`

### Inherited fields
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static MeshDefinition createHeadModel()`
- `public static LayerDefinition createHumanoidHeadLayer()`
- `public static LayerDefinition createMobHeadLayer()`
- `public void setupAnim(float p_103811_,  float p_103812_,  float p_103813_)`
- `public void renderToBuffer(PoseStack p_103815_,  VertexConsumer p_103816_,  int p_103817_,  int p_103818_,  float p_103819_,  float p_103820_,  float p_103821_,  float p_103822_)`

### Inherited methods
- from `net.minecraft.client.model.Model`: `renderType`

## SkullModelBase

*class* `net.minecraft.client.model.SkullModelBase`

### Inherited fields
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public abstract void setupAnim(float p_170950_,  float p_170951_,  float p_170952_)`

### Inherited methods
- from `net.minecraft.client.model.Model`: `renderToBuffer`, `renderType`

## SlimeModel

*class* `net.minecraft.client.model.SlimeModel`

### Fields
- `private final ModelPart root`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createOuterBodyLayer()`
- `public static LayerDefinition createInnerBodyLayer()`
- `public void setupAnim(T p_103831_,  float p_103832_,  float p_103833_,  float p_103834_,  float p_103835_,  float p_103836_)`
- `public ModelPart root()`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## SnifferModel

*class* `net.minecraft.client.model.SnifferModel`

### Fields
- `private static final float WALK_ANIMATION_SPEED_MAX` (= 9.0f)
- `private static final float WALK_ANIMATION_SCALE_FACTOR` (= 100.0f)
- `private final ModelPart root`
- `private final ModelPart head`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void setupAnim(T p_273213_,  float p_273252_,  float p_273344_,  float p_272633_,  float p_272774_,  float p_273206_)`
- `public ModelPart root()`

### Inherited methods
- from `net.minecraft.client.model.AgeableHierarchicalModel`: `renderToBuffer`
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## SnowGolemModel

*class* `net.minecraft.client.model.SnowGolemModel`

### Fields
- `private static final String UPPER_BODY` (= "upper_body")
- `private final ModelPart root`
- `private final ModelPart upperBody`
- `private final ModelPart head`
- `private final ModelPart leftArm`
- `private final ModelPart rightArm`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void setupAnim(T p_103845_,  float p_103846_,  float p_103847_,  float p_103848_,  float p_103849_,  float p_103850_)`
- `public ModelPart root()`
- `public ModelPart getHead()`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## SpiderModel

*class* `net.minecraft.client.model.SpiderModel`

### Fields
- `private static final String BODY_0` (= "body0")
- `private static final String BODY_1` (= "body1")
- `private static final String RIGHT_MIDDLE_FRONT_LEG` (= "right_middle_front_leg")
- `private static final String LEFT_MIDDLE_FRONT_LEG` (= "left_middle_front_leg")
- `private static final String RIGHT_MIDDLE_HIND_LEG` (= "right_middle_hind_leg")
- `private static final String LEFT_MIDDLE_HIND_LEG` (= "left_middle_hind_leg")
- `private final ModelPart root`
- `private final ModelPart head`
- `private final ModelPart rightHindLeg`
- `private final ModelPart leftHindLeg`
- `private final ModelPart rightMiddleHindLeg`
- `private final ModelPart leftMiddleHindLeg`
- `private final ModelPart rightMiddleFrontLeg`
- `private final ModelPart leftMiddleFrontLeg`
- `private final ModelPart rightFrontLeg`
- `private final ModelPart leftFrontLeg`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createSpiderBodyLayer()`
- `public ModelPart root()`
- `public void setupAnim(T p_103866_,  float p_103867_,  float p_103868_,  float p_103869_,  float p_103870_,  float p_103871_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## SquidModel

*class* `net.minecraft.client.model.SquidModel`

### Fields
- `private final ModelPart[] tentacles`
- `private final ModelPart root`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `private static String createTentacleName(int p_170992_)`
- `public static LayerDefinition createBodyLayer()`
- `public void setupAnim(T p_103878_,  float p_103879_,  float p_103880_,  float p_103881_,  float p_103882_,  float p_103883_)`
- `public ModelPart root()`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## StriderModel

*class* `net.minecraft.client.model.StriderModel`

### Fields
- `private static final String RIGHT_BOTTOM_BRISTLE` (= "right_bottom_bristle")
- `private static final String RIGHT_MIDDLE_BRISTLE` (= "right_middle_bristle")
- `private static final String RIGHT_TOP_BRISTLE` (= "right_top_bristle")
- `private static final String LEFT_TOP_BRISTLE` (= "left_top_bristle")
- `private static final String LEFT_MIDDLE_BRISTLE` (= "left_middle_bristle")
- `private static final String LEFT_BOTTOM_BRISTLE` (= "left_bottom_bristle")
- `private final ModelPart root`
- `private final ModelPart rightLeg`
- `private final ModelPart leftLeg`
- `private final ModelPart body`
- `private final ModelPart rightBottomBristle`
- `private final ModelPart rightMiddleBristle`
- `private final ModelPart rightTopBristle`
- `private final ModelPart leftTopBristle`
- `private final ModelPart leftMiddleBristle`
- `private final ModelPart leftBottomBristle`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void setupAnim(Strider p_103903_,  float p_103904_,  float p_103905_,  float p_103906_,  float p_103907_,  float p_103908_)`
- `public ModelPart root()`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## TadpoleModel

*class* `net.minecraft.client.model.TadpoleModel`

### Fields
- `private final ModelPart root`
- `private final ModelPart tail`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `protected Iterable<ModelPart> headParts()`
- `protected Iterable<ModelPart> bodyParts()`
- `public void setupAnim(T p_233453_,  float p_233454_,  float p_233455_,  float p_233456_,  float p_233457_,  float p_233458_)`

### Inherited methods
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## TridentModel

*class* `net.minecraft.client.model.TridentModel`

### Fields
- `public static final ResourceLocation TEXTURE`
- `private final ModelPart root`

### Inherited fields
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createLayer()`
- `public void renderToBuffer(PoseStack p_103919_,  VertexConsumer p_103920_,  int p_103921_,  int p_103922_,  float p_103923_,  float p_103924_,  float p_103925_,  float p_103926_)`

### Inherited methods
- from `net.minecraft.client.model.Model`: `renderType`

## TropicalFishModelA

*class* `net.minecraft.client.model.TropicalFishModelA`

### Fields
- `private final ModelPart root`
- `private final ModelPart tail`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer(CubeDeformation p_171022_)`
- `public ModelPart root()`
- `public void setupAnim(T p_103961_,  float p_103962_,  float p_103963_,  float p_103964_,  float p_103965_,  float p_103966_)`

### Inherited methods
- from `net.minecraft.client.model.ColorableHierarchicalModel`: `renderToBuffer`, `setColor`
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## TropicalFishModelB

*class* `net.minecraft.client.model.TropicalFishModelB`

### Fields
- `private final ModelPart root`
- `private final ModelPart tail`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer(CubeDeformation p_171038_)`
- `public ModelPart root()`
- `public void setupAnim(T p_103977_,  float p_103978_,  float p_103979_,  float p_103980_,  float p_103981_,  float p_103982_)`

### Inherited methods
- from `net.minecraft.client.model.ColorableHierarchicalModel`: `renderToBuffer`, `setColor`
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## TurtleModel

*class* `net.minecraft.client.model.TurtleModel`

### Fields
- `private static final String EGG_BELLY` (= "egg_belly")
- `private final ModelPart eggBelly`

### Inherited fields
- from `net.minecraft.client.model.QuadrupedModel`: `body`, `head`, `leftFrontLeg`, `leftHindLeg`, `rightFrontLeg`, `rightHindLeg`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `protected Iterable<ModelPart> bodyParts()`
- `public void setupAnim(T p_103994_,  float p_103995_,  float p_103996_,  float p_103997_,  float p_103998_,  float p_103999_)`
- `public void renderToBuffer(PoseStack p_104001_,  VertexConsumer p_104002_,  int p_104003_,  int p_104004_,  float p_104005_,  float p_104006_,  float p_104007_,  float p_104008_)`

### Inherited methods
- from `net.minecraft.client.model.QuadrupedModel`: `createBodyMesh`, `headParts`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## VexModel

*class* `net.minecraft.client.model.VexModel`

### Fields
- `private final ModelPart root`
- `private final ModelPart body`
- `private final ModelPart rightArm`
- `private final ModelPart leftArm`
- `private final ModelPart rightWing`
- `private final ModelPart leftWing`
- `private final ModelPart head`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void setupAnim(Vex p_104028_,  float p_104029_,  float p_104030_,  float p_104031_,  float p_104032_,  float p_104033_)`
- `private void setArmsCharging(ItemStack p_265484_,  ItemStack p_265329_,  float p_265125_)`
- `public ModelPart root()`
- `public void translateToHand(HumanoidArm p_259770_,  PoseStack p_260351_)`
- `private void offsetStackPosition(PoseStack p_263343_,  boolean p_263414_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## VillagerHeadModel

*interface* `net.minecraft.client.model.VillagerHeadModel`

### Methods
- `void hatVisible(boolean p_104035_)`

## VillagerModel

*class* `net.minecraft.client.model.VillagerModel`

### Fields
- `private final ModelPart root`
- `private final ModelPart head`
- `private final ModelPart hat`
- `private final ModelPart hatRim`
- `private final ModelPart rightLeg`
- `private final ModelPart leftLeg`
- `protected final ModelPart nose`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static MeshDefinition createBodyModel()`
- `public ModelPart root()`
- `public void setupAnim(T p_104053_,  float p_104054_,  float p_104055_,  float p_104056_,  float p_104057_,  float p_104058_)`
- `public ModelPart getHead()`
- `public void hatVisible(boolean p_104060_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## WardenModel

*class* `net.minecraft.client.model.WardenModel`

### Fields
- `private static final float DEFAULT_ARM_X_Y` (= 13.0f)
- `private static final float DEFAULT_ARM_Z` (= 1.0f)
- `private final ModelPart root`
- `protected final ModelPart bone`
- `protected final ModelPart body`
- `protected final ModelPart head`
- `protected final ModelPart rightTendril`
- `protected final ModelPart leftTendril`
- `protected final ModelPart leftLeg`
- `protected final ModelPart leftArm`
- `protected final ModelPart leftRibcage`
- `protected final ModelPart rightArm`
- `protected final ModelPart rightLeg`
- `protected final ModelPart rightRibcage`
- `private final List<ModelPart> tendrilsLayerModelParts`
- `private final List<ModelPart> heartLayerModelParts`
- `private final List<ModelPart> bioluminescentLayerModelParts`
- `private final List<ModelPart> pulsatingSpotsLayerModelParts`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void setupAnim(T p_233531_,  float p_233532_,  float p_233533_,  float p_233534_,  float p_233535_,  float p_233536_)`
- `private void animateHeadLookTarget(float p_233517_,  float p_233518_)`
- `private void animateIdlePose(float p_233515_)`
- `private void animateWalk(float p_233539_,  float p_233540_)`
- `private void resetArmPoses()`
- `private void animateTendrils(T p_233527_,  float p_233528_,  float p_233529_)`
- `public ModelPart root()`
- `public List<ModelPart> getTendrilsLayerModelParts()`
- `public List<ModelPart> getHeartLayerModelParts()`
- `public List<ModelPart> getBioluminescentLayerModelParts()`
- `public List<ModelPart> getPulsatingSpotsLayerModelParts()`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## WaterPatchModel

*interface* `net.minecraft.client.model.WaterPatchModel`

### Methods
- `ModelPart waterPatch()`

## WitchModel

*class* `net.minecraft.client.model.WitchModel`

### Fields
- `private boolean holdingItem`

### Inherited fields
- from `net.minecraft.client.model.VillagerModel`: `nose`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public void setupAnim(T p_104067_,  float p_104068_,  float p_104069_,  float p_104070_,  float p_104071_,  float p_104072_)`
- `public ModelPart getNose()`
- `public void setHoldingItem(boolean p_104075_)`

### Inherited methods
- from `net.minecraft.client.model.VillagerModel`: `createBodyModel`, `getHead`, `hatVisible`, `root`
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`, `prepareMobModel`
- from `net.minecraft.client.model.Model`: `renderType`

## WitherBossModel

*class* `net.minecraft.client.model.WitherBossModel`

### Fields
- `private static final String RIBCAGE` (= "ribcage")
- `private static final String CENTER_HEAD` (= "center_head")
- `private static final String RIGHT_HEAD` (= "right_head")
- `private static final String LEFT_HEAD` (= "left_head")
- `private static final float RIBCAGE_X_ROT_OFFSET` (= 0.06499999761581421f)
- `private static final float TAIL_X_ROT_OFFSET` (= 0.26499998569488525f)
- `private final ModelPart root`
- `private final ModelPart centerHead`
- `private final ModelPart rightHead`
- `private final ModelPart leftHead`
- `private final ModelPart ribcage`
- `private final ModelPart tail`

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer(CubeDeformation p_171076_)`
- `public ModelPart root()`
- `public void setupAnim(T p_104100_,  float p_104101_,  float p_104102_,  float p_104103_,  float p_104104_,  float p_104105_)`
- `public void prepareMobModel(T p_104095_,  float p_104096_,  float p_104097_,  float p_104098_)`
- `private static <T extends WitherBoss> void setupHeadRotation(T p_171072_,  ModelPart p_171073_,  int p_171074_)`

### Inherited methods
- from `net.minecraft.client.model.HierarchicalModel`: `animate`, `animate`, `animateWalk`, `applyStatic`, `getAnyDescendantWithName`, `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## WolfModel

*class* `net.minecraft.client.model.WolfModel`

### Fields
- `private static final String REAL_HEAD` (= "real_head")
- `private static final String UPPER_BODY` (= "upper_body")
- `private static final String REAL_TAIL` (= "real_tail")
- `private final ModelPart head`
- `private final ModelPart realHead`
- `private final ModelPart body`
- `private final ModelPart rightHindLeg`
- `private final ModelPart leftHindLeg`
- `private final ModelPart rightFrontLeg`
- `private final ModelPart leftFrontLeg`
- `private final ModelPart tail`
- `private final ModelPart realTail`
- `private final ModelPart upperBody`
- `private static final int LEG_SIZE` (= 8)

### Inherited fields
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `protected Iterable<ModelPart> headParts()`
- `protected Iterable<ModelPart> bodyParts()`
- `public void prepareMobModel(T p_104132_,  float p_104133_,  float p_104134_,  float p_104135_)`
- `public void setupAnim(T p_104137_,  float p_104138_,  float p_104139_,  float p_104140_,  float p_104141_,  float p_104142_)`

### Inherited methods
- from `net.minecraft.client.model.ColorableAgeableListModel`: `renderToBuffer`, `setColor`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## ZombieModel

*class* `net.minecraft.client.model.ZombieModel`

### Inherited fields
- from `net.minecraft.client.model.HumanoidModel`: `body`, `crouching`, `hat`, `HAT_OVERLAY_SCALE`, `head`, `leftArm`, `leftArmPose`, `leftLeg`, `LEGGINGS_OVERLAY_SCALE`, `OVERLAY_SCALE`, `rightArm`, `rightArmPose`, `rightLeg`, `swimAmount`, `TOOT_HORN_XROT_BASE`, `TOOT_HORN_YROT_BASE`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public boolean isAggressive(T p_104155_)`

### Inherited methods
- from `net.minecraft.client.model.AbstractZombieModel`: `setupAnim`
- from `net.minecraft.client.model.HumanoidModel`: `bodyParts`, `copyPropertiesTo`, `createMesh`, `getArm`, `getHead`, `headParts`, `prepareMobModel`, `rotlerpRad`, `setAllVisible`, `setupAttackAnimation`, `translateToHand`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`

## ZombieVillagerModel

*class* `net.minecraft.client.model.ZombieVillagerModel`

### Fields
- `private final ModelPart hatRim`

### Inherited fields
- from `net.minecraft.client.model.HumanoidModel`: `body`, `crouching`, `hat`, `HAT_OVERLAY_SCALE`, `head`, `leftArm`, `leftArmPose`, `leftLeg`, `LEGGINGS_OVERLAY_SCALE`, `OVERLAY_SCALE`, `rightArm`, `rightArmPose`, `rightLeg`, `swimAmount`, `TOOT_HORN_XROT_BASE`, `TOOT_HORN_YROT_BASE`
- from `net.minecraft.client.model.EntityModel`: `attackTime`, `riding`, `young`
- from `net.minecraft.client.model.Model`: `renderType`

### Methods
- `public static LayerDefinition createBodyLayer()`
- `public static LayerDefinition createArmorLayer(CubeDeformation p_171094_)`
- `public void setupAnim(T p_104175_,  float p_104176_,  float p_104177_,  float p_104178_,  float p_104179_,  float p_104180_)`
- `public void hatVisible(boolean p_104182_)`

### Inherited methods
- from `net.minecraft.client.model.HumanoidModel`: `bodyParts`, `copyPropertiesTo`, `createMesh`, `getArm`, `getHead`, `headParts`, `prepareMobModel`, `rotlerpRad`, `setAllVisible`, `setupAttackAnimation`, `translateToHand`
- from `net.minecraft.client.model.AgeableListModel`: `renderToBuffer`
- from `net.minecraft.client.model.EntityModel`: `copyPropertiesTo`
- from `net.minecraft.client.model.Model`: `renderType`
