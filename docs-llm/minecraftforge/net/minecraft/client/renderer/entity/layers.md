# net.minecraft.client.renderer.entity.layers

- [ArrowLayer>](#arrowlayer)
- [BeeStingerLayer>](#beestingerlayer)
- [CapeLayer](#capelayer)
- [CarriedBlockLayer](#carriedblocklayer)
- [CatCollarLayer](#catcollarlayer)
- [CreeperPowerLayer](#creeperpowerlayer)
- [CrossedArmsItemLayer>](#crossedarmsitemlayer)
- [CustomHeadLayer & HeadedModel>](#customheadlayer-headedmodel)
- [Deadmau5EarsLayer](#deadmau5earslayer)
- [DolphinCarryingItemLayer](#dolphincarryingitemlayer)
- [DrownedOuterLayer](#drownedouterlayer)
- [ElytraLayer>](#elytralayer)
- [EnderEyesLayer](#endereyeslayer)
- [EnergySwirlLayer>](#energyswirllayer)
- [EyesLayer>](#eyeslayer)
- [FoxHeldItemLayer](#foxhelditemlayer)
- [HorseArmorLayer](#horsearmorlayer)
- [HorseMarkingLayer](#horsemarkinglayer)
- [HumanoidArmorLayer,A extends HumanoidModel>](#humanoidarmorlayer-a-extends-humanoidmodel)
- [IronGolemCrackinessLayer](#irongolemcrackinesslayer)
- [IronGolemFlowerLayer](#irongolemflowerlayer)
- [ItemInHandLayer & ArmedModel>](#iteminhandlayer-armedmodel)
- [LlamaDecorLayer](#llamadecorlayer)
- [MushroomCowMushroomLayer](#mushroomcowmushroomlayer)
- [PandaHoldsItemLayer](#pandaholdsitemlayer)
- [ParrotOnShoulderLayer](#parrotonshoulderlayer)
- [PhantomEyesLayer](#phantomeyeslayer)
- [PlayerItemInHandLayer & ArmedModel & HeadedModel>](#playeriteminhandlayer-armedmodel-headedmodel)
- [RenderLayer>](#renderlayer)
- [SaddleLayer>](#saddlelayer)
- [SheepFurLayer](#sheepfurlayer)
- [ShulkerHeadLayer](#shulkerheadlayer)
- [SlimeOuterLayer](#slimeouterlayer)
- [SnowGolemHeadLayer](#snowgolemheadlayer)
- [SpiderEyesLayer>](#spidereyeslayer)
- [SpinAttackEffectLayer](#spinattackeffectlayer)
- [StrayClothingLayer>](#strayclothinglayer)
- [StuckInBodyLayer>](#stuckinbodylayer)
- [TropicalFishPatternLayer](#tropicalfishpatternlayer)
- [VillagerProfessionLayer & VillagerHeadModel>](#villagerprofessionlayer-villagerheadmodel)
- [WardenEmissiveLayer.AlphaFunction](#wardenemissivelayer.alphafunction)
- [WardenEmissiveLayer.DrawSelector>](#wardenemissivelayer.drawselector)
- [WardenEmissiveLayer>](#wardenemissivelayer)
- [WitchItemLayer](#witchitemlayer)
- [WitherArmorLayer](#witherarmorlayer)
- [WolfCollarLayer](#wolfcollarlayer)
## ArrowLayer>

*class* `net.minecraft.client.renderer.entity.layers.ArrowLayer>`

### Fields
- `private final EntityRenderDispatcher dispatcher`

### Methods
- `protected int numStuck(T p_116567_)`
- `protected void renderStuckItem(PoseStack p_116569_,  MultiBufferSource p_116570_,  int p_116571_,  Entity p_116572_,  float p_116573_,  float p_116574_,  float p_116575_,  float p_116576_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.StuckInBodyLayer`: `render`
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## BeeStingerLayer>

*class* `net.minecraft.client.renderer.entity.layers.BeeStingerLayer>`

### Fields
- `private static final ResourceLocation BEE_STINGER_LOCATION`

### Methods
- `protected int numStuck(T p_116582_)`
- `protected void renderStuckItem(PoseStack p_116584_,  MultiBufferSource p_116585_,  int p_116586_,  Entity p_116587_,  float p_116588_,  float p_116589_,  float p_116590_,  float p_116591_)`
- `private static void vertex(VertexConsumer p_254470_,  org.joml.Matrix4f p_254513_,  org.joml.Matrix3f p_254052_,  float p_253749_,  int p_254520_,  float p_254099_,  float p_253914_,  int p_254168_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.StuckInBodyLayer`: `render`
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## CapeLayer

*class* `net.minecraft.client.renderer.entity.layers.CapeLayer`

### Methods
- `public void render(PoseStack p_116615_,  MultiBufferSource p_116616_,  int p_116617_,  AbstractClientPlayer p_116618_,  float p_116619_,  float p_116620_,  float p_116621_,  float p_116622_,  float p_116623_,  float p_116624_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## CarriedBlockLayer

*class* `net.minecraft.client.renderer.entity.layers.CarriedBlockLayer`

### Fields
- `private final BlockRenderDispatcher blockRenderer`

### Methods
- `public void render(PoseStack p_116639_,  MultiBufferSource p_116640_,  int p_116641_,  EnderMan p_116642_,  float p_116643_,  float p_116644_,  float p_116645_,  float p_116646_,  float p_116647_,  float p_116648_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## CatCollarLayer

*class* `net.minecraft.client.renderer.entity.layers.CatCollarLayer`

### Fields
- `private static final ResourceLocation CAT_COLLAR_LOCATION`
- `private final CatModel<Cat> catModel`

### Methods
- `public void render(PoseStack p_116666_,  MultiBufferSource p_116667_,  int p_116668_,  Cat p_116669_,  float p_116670_,  float p_116671_,  float p_116672_,  float p_116673_,  float p_116674_,  float p_116675_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## CreeperPowerLayer

*class* `net.minecraft.client.renderer.entity.layers.CreeperPowerLayer`

### Fields
- `private static final ResourceLocation POWER_LOCATION`
- `private final CreeperModel<Creeper> model`

### Methods
- `protected float xOffset(float p_116683_)`
- `protected ResourceLocation getTextureLocation()`
- `protected EntityModel<Creeper> model()`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.EnergySwirlLayer`: `render`
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## CrossedArmsItemLayer>

*class* `net.minecraft.client.renderer.entity.layers.CrossedArmsItemLayer>`

### Fields
- `private final ItemInHandRenderer itemInHandRenderer`

### Methods
- `public void render(PoseStack p_116699_,  MultiBufferSource p_116700_,  int p_116701_,  T p_116702_,  float p_116703_,  float p_116704_,  float p_116705_,  float p_116706_,  float p_116707_,  float p_116708_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## CustomHeadLayer & HeadedModel>

*class* `net.minecraft.client.renderer.entity.layers.CustomHeadLayer & HeadedModel>`

### Fields
- `private final float scaleX`
- `private final float scaleY`
- `private final float scaleZ`
- `private final Map<SkullBlock.Type,SkullModelBase> skullModels`
- `private final ItemInHandRenderer itemInHandRenderer`

### Methods
- `public void render(PoseStack p_116731_,  MultiBufferSource p_116732_,  int p_116733_,  T p_116734_,  float p_116735_,  float p_116736_,  float p_116737_,  float p_116738_,  float p_116739_,  float p_116740_)`
- `public static void translateToHead(PoseStack p_174484_,  boolean p_174485_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## Deadmau5EarsLayer

*class* `net.minecraft.client.renderer.entity.layers.Deadmau5EarsLayer`

### Methods
- `public void render(PoseStack p_116873_,  MultiBufferSource p_116874_,  int p_116875_,  AbstractClientPlayer p_116876_,  float p_116877_,  float p_116878_,  float p_116879_,  float p_116880_,  float p_116881_,  float p_116882_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## DolphinCarryingItemLayer

*class* `net.minecraft.client.renderer.entity.layers.DolphinCarryingItemLayer`

### Fields
- `private final ItemInHandRenderer itemInHandRenderer`

### Methods
- `public void render(PoseStack p_116897_,  MultiBufferSource p_116898_,  int p_116899_,  Dolphin p_116900_,  float p_116901_,  float p_116902_,  float p_116903_,  float p_116904_,  float p_116905_,  float p_116906_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## DrownedOuterLayer

*class* `net.minecraft.client.renderer.entity.layers.DrownedOuterLayer`

### Fields
- `private static final ResourceLocation DROWNED_OUTER_LAYER_LOCATION`
- `private final DrownedModel<T extends Drowned> model`

### Methods
- `public void render(PoseStack p_116924_,  MultiBufferSource p_116925_,  int p_116926_,  T p_116927_,  float p_116928_,  float p_116929_,  float p_116930_,  float p_116931_,  float p_116932_,  float p_116933_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## ElytraLayer>

*class* `net.minecraft.client.renderer.entity.layers.ElytraLayer>`

### Fields
- `private static final ResourceLocation WINGS_LOCATION`
- `private final ElytraModel<T extends LivingEntity> elytraModel`

### Methods
- `public void render(PoseStack p_116951_,  MultiBufferSource p_116952_,  int p_116953_,  T p_116954_,  float p_116955_,  float p_116956_,  float p_116957_,  float p_116958_,  float p_116959_,  float p_116960_)`
- `public boolean shouldRender(ItemStack stack,  T entity)`
  Determines if the ElytraLayer should render.
   ItemStack and Entity are provided for modder convenience,
   For example, using the same ElytraLayer for multiple custom Elytra.
  - param: stack - The Elytra ItemStack
  - param: entity - The entity being rendered.
  - returns: If the ElytraLayer should render.
- `public ResourceLocation getElytraTexture(ItemStack stack,  T entity)`
  Gets the texture to use with this ElytraLayer.
   This assumes the vanilla Elytra model.
  - param: stack - The Elytra ItemStack.
  - param: entity - The entity being rendered.
  - returns: The texture.

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## EnderEyesLayer

*class* `net.minecraft.client.renderer.entity.layers.EnderEyesLayer`

### Fields
- `private static final RenderType ENDERMAN_EYES`

### Methods
- `public RenderType renderType()`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.EyesLayer`: `render`
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## EnergySwirlLayer>

*class* `net.minecraft.client.renderer.entity.layers.EnergySwirlLayer>`

### Methods
- `public void render(PoseStack p_116970_,  MultiBufferSource p_116971_,  int p_116972_,  T p_116973_,  float p_116974_,  float p_116975_,  float p_116976_,  float p_116977_,  float p_116978_,  float p_116979_)`
- `protected abstract float xOffset(float p_116968_)`
- `protected abstract ResourceLocation getTextureLocation()`
- `protected abstract EntityModel<T> model()`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## EyesLayer>

*class* `net.minecraft.client.renderer.entity.layers.EyesLayer>`

### Methods
- `public void render(PoseStack p_116983_,  MultiBufferSource p_116984_,  int p_116985_,  T p_116986_,  float p_116987_,  float p_116988_,  float p_116989_,  float p_116990_,  float p_116991_,  float p_116992_)`
- `public abstract RenderType renderType()`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## FoxHeldItemLayer

*class* `net.minecraft.client.renderer.entity.layers.FoxHeldItemLayer`

### Fields
- `private final ItemInHandRenderer itemInHandRenderer`

### Methods
- `public void render(PoseStack p_117007_,  MultiBufferSource p_117008_,  int p_117009_,  Fox p_117010_,  float p_117011_,  float p_117012_,  float p_117013_,  float p_117014_,  float p_117015_,  float p_117016_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## HorseArmorLayer

*class* `net.minecraft.client.renderer.entity.layers.HorseArmorLayer`

### Fields
- `private final HorseModel<Horse> model`

### Methods
- `public void render(PoseStack p_117032_,  MultiBufferSource p_117033_,  int p_117034_,  Horse p_117035_,  float p_117036_,  float p_117037_,  float p_117038_,  float p_117039_,  float p_117040_,  float p_117041_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## HorseMarkingLayer

*class* `net.minecraft.client.renderer.entity.layers.HorseMarkingLayer`

### Fields
- `private static final Map<Markings,ResourceLocation> LOCATION_BY_MARKINGS`

### Methods
- `public void render(PoseStack p_117058_,  MultiBufferSource p_117059_,  int p_117060_,  Horse p_117061_,  float p_117062_,  float p_117063_,  float p_117064_,  float p_117065_,  float p_117066_,  float p_117067_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## HumanoidArmorLayer,A extends HumanoidModel>

*class* `net.minecraft.client.renderer.entity.layers.HumanoidArmorLayer,A extends HumanoidModel>`

### Fields
- `private static final Map<String,ResourceLocation> ARMOR_LOCATION_CACHE`
- `private final A extends HumanoidModel<T> innerModel`
- `private final A extends HumanoidModel<T> outerModel`
- `private final TextureAtlas armorTrimAtlas`

### Methods
- `public void render(PoseStack p_117096_,  MultiBufferSource p_117097_,  int p_117098_,  T p_117099_,  float p_117100_,  float p_117101_,  float p_117102_,  float p_117103_,  float p_117104_,  float p_117105_)`
- `private void renderArmorPiece(PoseStack p_117119_,  MultiBufferSource p_117120_,  T p_117121_,  EquipmentSlot p_117122_,  int p_117123_,  A p_117124_)`
- `protected void setPartVisibility(A p_117126_,  EquipmentSlot p_117127_)`
- `private void renderModel(PoseStack p_289664_,  MultiBufferSource p_289689_,  int p_289681_,  ArmorItem p_289650_,  A p_289658_,  boolean p_289668_,  float p_289678_,  float p_289674_,  float p_289693_,  @Nullable  String p_289682_)`
- `private void renderModel(PoseStack p_289664_,  MultiBufferSource p_289689_,  int p_289681_,  ArmorItem p_289650_,  Model p_289658_,  boolean p_289668_,  float p_289678_,  float p_289674_,  float p_289693_,  ResourceLocation armorResource)`
- `private void renderTrim(ArmorMaterial p_289690_,  PoseStack p_289687_,  MultiBufferSource p_289643_,  int p_289683_,  ArmorTrim p_289692_,  A p_289663_,  boolean p_289651_)`
- `private void renderTrim(ArmorMaterial p_289690_,  PoseStack p_289687_,  MultiBufferSource p_289643_,  int p_289683_,  ArmorTrim p_289692_,  Model p_289663_,  boolean p_289651_)`
- `private void renderGlint(PoseStack p_289673_,  MultiBufferSource p_289654_,  int p_289649_,  A p_289659_)`
- `private void renderGlint(PoseStack p_289673_,  MultiBufferSource p_289654_,  int p_289649_,  Model p_289659_)`
- `private A getArmorModel(EquipmentSlot p_117079_)`
- `private boolean usesInnerModel(EquipmentSlot p_117129_)`
- `@Deprecated private ResourceLocation getArmorLocation(ArmorItem p_117081_,  boolean p_117082_,  @Nullable  String p_117083_)` (deprecated)
- `protected Model getArmorModelHook(T entity,  ItemStack itemStack,  EquipmentSlot slot,  A model)`
  Hook to allow item-sensitive armor model. for HumanoidArmorLayer.
- `public ResourceLocation getArmorResource(Entity entity,  ItemStack stack,  EquipmentSlot slot,  @Nullable  String type)`
  More generic ForgeHook version of the above function, it allows for Items to have more control over what texture they provide.
  - param: entity - Entity wearing the armor
  - param: stack - ItemStack for the armor
  - param: slot - Slot ID that the item is in
  - param: type - Subtype, can be null or "overlay"
  - returns: ResourceLocation pointing at the armor's texture

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## IronGolemCrackinessLayer

*class* `net.minecraft.client.renderer.entity.layers.IronGolemCrackinessLayer`

### Fields
- `private static final Map<IronGolem.Crackiness,ResourceLocation> resourceLocations`

### Methods
- `public void render(PoseStack p_117148_,  MultiBufferSource p_117149_,  int p_117150_,  IronGolem p_117151_,  float p_117152_,  float p_117153_,  float p_117154_,  float p_117155_,  float p_117156_,  float p_117157_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## IronGolemFlowerLayer

*class* `net.minecraft.client.renderer.entity.layers.IronGolemFlowerLayer`

### Fields
- `private final BlockRenderDispatcher blockRenderer`

### Methods
- `public void render(PoseStack p_117172_,  MultiBufferSource p_117173_,  int p_117174_,  IronGolem p_117175_,  float p_117176_,  float p_117177_,  float p_117178_,  float p_117179_,  float p_117180_,  float p_117181_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## ItemInHandLayer & ArmedModel>

*class* `net.minecraft.client.renderer.entity.layers.ItemInHandLayer & ArmedModel>`

### Fields
- `private final ItemInHandRenderer itemInHandRenderer`

### Methods
- `public void render(PoseStack p_117204_,  MultiBufferSource p_117205_,  int p_117206_,  T p_117207_,  float p_117208_,  float p_117209_,  float p_117210_,  float p_117211_,  float p_117212_,  float p_117213_)`
- `protected void renderArmWithItem(LivingEntity p_117185_,  ItemStack p_117186_,  ItemDisplayContext p_270970_,  HumanoidArm p_117188_,  PoseStack p_117189_,  MultiBufferSource p_117190_,  int p_117191_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## LlamaDecorLayer

*class* `net.minecraft.client.renderer.entity.layers.LlamaDecorLayer`

### Fields
- `private static final ResourceLocation[] TEXTURE_LOCATION`
- `private static final ResourceLocation TRADER_LLAMA`
- `private final LlamaModel<Llama> model`

### Methods
- `public void render(PoseStack p_117232_,  MultiBufferSource p_117233_,  int p_117234_,  Llama p_117235_,  float p_117236_,  float p_117237_,  float p_117238_,  float p_117239_,  float p_117240_,  float p_117241_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## MushroomCowMushroomLayer

*class* `net.minecraft.client.renderer.entity.layers.MushroomCowMushroomLayer`

### Fields
- `private final BlockRenderDispatcher blockRenderer`

### Methods
- `public void render(PoseStack p_117256_,  MultiBufferSource p_117257_,  int p_117258_,  T p_117259_,  float p_117260_,  float p_117261_,  float p_117262_,  float p_117263_,  float p_117264_,  float p_117265_)`
- `private void renderMushroomBlock(PoseStack p_234853_,  MultiBufferSource p_234854_,  int p_234855_,  boolean p_234856_,  BlockState p_234857_,  int p_234858_,  BakedModel p_234859_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## PandaHoldsItemLayer

*class* `net.minecraft.client.renderer.entity.layers.PandaHoldsItemLayer`

### Fields
- `private final ItemInHandRenderer itemInHandRenderer`

### Methods
- `public void render(PoseStack p_117280_,  MultiBufferSource p_117281_,  int p_117282_,  Panda p_117283_,  float p_117284_,  float p_117285_,  float p_117286_,  float p_117287_,  float p_117288_,  float p_117289_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## ParrotOnShoulderLayer

*class* `net.minecraft.client.renderer.entity.layers.ParrotOnShoulderLayer`

### Fields
- `private final ParrotModel model`

### Methods
- `public void render(PoseStack p_117307_,  MultiBufferSource p_117308_,  int p_117309_,  T p_117310_,  float p_117311_,  float p_117312_,  float p_117313_,  float p_117314_,  float p_117315_,  float p_117316_)`
- `private void render(PoseStack p_117318_,  MultiBufferSource p_117319_,  int p_117320_,  T p_117321_,  float p_117322_,  float p_117323_,  float p_117324_,  float p_117325_,  boolean p_117326_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## PhantomEyesLayer

*class* `net.minecraft.client.renderer.entity.layers.PhantomEyesLayer`

### Fields
- `private static final RenderType PHANTOM_EYES`

### Methods
- `public RenderType renderType()`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.EyesLayer`: `render`
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## PlayerItemInHandLayer & ArmedModel & HeadedModel>

*class* `net.minecraft.client.renderer.entity.layers.PlayerItemInHandLayer & ArmedModel & HeadedModel>`

### Fields
- `private final ItemInHandRenderer itemInHandRenderer`
- `private static final float X_ROT_MIN`
- `private static final float X_ROT_MAX`

### Methods
- `protected void renderArmWithItem(LivingEntity p_270884_,  ItemStack p_270379_,  ItemDisplayContext p_270607_,  HumanoidArm p_270324_,  PoseStack p_270124_,  MultiBufferSource p_270414_,  int p_270295_)`
- `private void renderArmWithSpyglass(LivingEntity p_174518_,  ItemStack p_174519_,  HumanoidArm p_174520_,  PoseStack p_174521_,  MultiBufferSource p_174522_,  int p_174523_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.ItemInHandLayer`: `render`
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## RenderLayer>

*class* `net.minecraft.client.renderer.entity.layers.RenderLayer>`

### Fields
- `private final RenderLayerParent<T extends Entity,M extends EntityModel<T>> renderer`

### Methods
- `protected static <T extends LivingEntity> void coloredCutoutModelCopyLayerRender(EntityModel<T> p_117360_,  EntityModel<T> p_117361_,  ResourceLocation p_117362_,  PoseStack p_117363_,  MultiBufferSource p_117364_,  int p_117365_,  T p_117366_,  float p_117367_,  float p_117368_,  float p_117369_,  float p_117370_,  float p_117371_,  float p_117372_,  float p_117373_,  float p_117374_,  float p_117375_)`
- `protected static <T extends LivingEntity> void renderColoredCutoutModel(EntityModel<T> p_117377_,  ResourceLocation p_117378_,  PoseStack p_117379_,  MultiBufferSource p_117380_,  int p_117381_,  T p_117382_,  float p_117383_,  float p_117384_,  float p_117385_)`
- `public M getParentModel()`
- `protected ResourceLocation getTextureLocation(T p_117348_)`
- `public abstract void render(PoseStack p_117349_,  MultiBufferSource p_117350_,  int p_117351_,  T p_117352_,  float p_117353_,  float p_117354_,  float p_117355_,  float p_117356_,  float p_117357_,  float p_117358_)`

## SaddleLayer>

*class* `net.minecraft.client.renderer.entity.layers.SaddleLayer>`

### Fields
- `private final ResourceLocation textureLocation`
- `private final M extends EntityModel<T> model`

### Methods
- `public void render(PoseStack p_117394_,  MultiBufferSource p_117395_,  int p_117396_,  T p_117397_,  float p_117398_,  float p_117399_,  float p_117400_,  float p_117401_,  float p_117402_,  float p_117403_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## SheepFurLayer

*class* `net.minecraft.client.renderer.entity.layers.SheepFurLayer`

### Fields
- `private static final ResourceLocation SHEEP_FUR_LOCATION`
- `private final SheepFurModel<Sheep> model`

### Methods
- `public void render(PoseStack p_117421_,  MultiBufferSource p_117422_,  int p_117423_,  Sheep p_117424_,  float p_117425_,  float p_117426_,  float p_117427_,  float p_117428_,  float p_117429_,  float p_117430_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## ShulkerHeadLayer

*class* `net.minecraft.client.renderer.entity.layers.ShulkerHeadLayer`

### Methods
- `public void render(PoseStack p_117445_,  MultiBufferSource p_117446_,  int p_117447_,  Shulker p_117448_,  float p_117449_,  float p_117450_,  float p_117451_,  float p_117452_,  float p_117453_,  float p_117454_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## SlimeOuterLayer

*class* `net.minecraft.client.renderer.entity.layers.SlimeOuterLayer`

### Fields
- `private final EntityModel<T extends LivingEntity> model`

### Methods
- `public void render(PoseStack p_117470_,  MultiBufferSource p_117471_,  int p_117472_,  T p_117473_,  float p_117474_,  float p_117475_,  float p_117476_,  float p_117477_,  float p_117478_,  float p_117479_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## SnowGolemHeadLayer

*class* `net.minecraft.client.renderer.entity.layers.SnowGolemHeadLayer`

### Fields
- `private final BlockRenderDispatcher blockRenderer`
- `private final ItemRenderer itemRenderer`

### Methods
- `public void render(PoseStack p_117494_,  MultiBufferSource p_117495_,  int p_117496_,  SnowGolem p_117497_,  float p_117498_,  float p_117499_,  float p_117500_,  float p_117501_,  float p_117502_,  float p_117503_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## SpiderEyesLayer>

*class* `net.minecraft.client.renderer.entity.layers.SpiderEyesLayer>`

### Fields
- `private static final RenderType SPIDER_EYES`

### Methods
- `public RenderType renderType()`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.EyesLayer`: `render`
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## SpinAttackEffectLayer

*class* `net.minecraft.client.renderer.entity.layers.SpinAttackEffectLayer`

### Fields
- `public static final ResourceLocation TEXTURE`
- `public static final String BOX` (= "box")
- `private final ModelPart box`

### Methods
- `public static LayerDefinition createLayer()`
- `public void render(PoseStack p_117526_,  MultiBufferSource p_117527_,  int p_117528_,  T p_117529_,  float p_117530_,  float p_117531_,  float p_117532_,  float p_117533_,  float p_117534_,  float p_117535_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## StrayClothingLayer>

*class* `net.minecraft.client.renderer.entity.layers.StrayClothingLayer>`

### Fields
- `private static final ResourceLocation STRAY_CLOTHES_LOCATION`
- `private final SkeletonModel<T extends Mob & RangedAttackMob> layerModel`

### Methods
- `public void render(PoseStack p_117553_,  MultiBufferSource p_117554_,  int p_117555_,  T p_117556_,  float p_117557_,  float p_117558_,  float p_117559_,  float p_117560_,  float p_117561_,  float p_117562_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## StuckInBodyLayer>

*class* `net.minecraft.client.renderer.entity.layers.StuckInBodyLayer>`

### Methods
- `protected abstract int numStuck(T p_117565_)`
- `protected abstract void renderStuckItem(PoseStack p_117566_,  MultiBufferSource p_117567_,  int p_117568_,  Entity p_117569_,  float p_117570_,  float p_117571_,  float p_117572_,  float p_117573_)`
- `public void render(PoseStack p_117586_,  MultiBufferSource p_117587_,  int p_117588_,  T p_117589_,  float p_117590_,  float p_117591_,  float p_117592_,  float p_117593_,  float p_117594_,  float p_117595_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## TropicalFishPatternLayer

*class* `net.minecraft.client.renderer.entity.layers.TropicalFishPatternLayer`

### Fields
- `private static final ResourceLocation KOB_TEXTURE`
- `private static final ResourceLocation SUNSTREAK_TEXTURE`
- `private static final ResourceLocation SNOOPER_TEXTURE`
- `private static final ResourceLocation DASHER_TEXTURE`
- `private static final ResourceLocation BRINELY_TEXTURE`
- `private static final ResourceLocation SPOTTY_TEXTURE`
- `private static final ResourceLocation FLOPPER_TEXTURE`
- `private static final ResourceLocation STRIPEY_TEXTURE`
- `private static final ResourceLocation GLITTER_TEXTURE`
- `private static final ResourceLocation BLOCKFISH_TEXTURE`
- `private static final ResourceLocation BETTY_TEXTURE`
- `private static final ResourceLocation CLAYFISH_TEXTURE`
- `private final TropicalFishModelA<TropicalFish> modelA`
- `private final TropicalFishModelB<TropicalFish> modelB`

### Methods
- `public void render(PoseStack p_117612_,  MultiBufferSource p_117613_,  int p_117614_,  TropicalFish p_117615_,  float p_117616_,  float p_117617_,  float p_117618_,  float p_117619_,  float p_117620_,  float p_117621_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## VillagerProfessionLayer & VillagerHeadModel>

*class* `net.minecraft.client.renderer.entity.layers.VillagerProfessionLayer & VillagerHeadModel>`

### Fields
- `private static final it.unimi.dsi.fastutil.ints.Int2ObjectMap<ResourceLocation> LEVEL_LOCATIONS`
- `private final it.unimi.dsi.fastutil.objects.Object2ObjectMap<VillagerType,VillagerMetaDataSection.Hat> typeHatCache`
- `private final it.unimi.dsi.fastutil.objects.Object2ObjectMap<VillagerProfession,VillagerMetaDataSection.Hat> professionHatCache`
- `private final ResourceManager resourceManager`
- `private final String path`

### Methods
- `public void render(PoseStack p_117646_,  MultiBufferSource p_117647_,  int p_117648_,  T p_117649_,  float p_117650_,  float p_117651_,  float p_117652_,  float p_117653_,  float p_117654_,  float p_117655_)`
- `private ResourceLocation getResourceLocation(String p_117669_,  ResourceLocation p_117670_)`
- `public <K> VillagerMetaDataSection.Hat getHatData(it.unimi.dsi.fastutil.objects.Object2ObjectMap<K,VillagerMetaDataSection.Hat> p_117659_,  String p_117660_,  DefaultedRegistry<K> p_117661_,  K p_117662_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## WardenEmissiveLayer.AlphaFunction

*interface* `net.minecraft.client.renderer.entity.layers.WardenEmissiveLayer.AlphaFunction`

Enclosing class: WardenEmissiveLayer<T extends Warden, M extends WardenModel<T>>

### Methods
- `float apply(T p_234920_,  float p_234921_,  float p_234922_)`

## WardenEmissiveLayer.DrawSelector>

*interface* `net.minecraft.client.renderer.entity.layers.WardenEmissiveLayer.DrawSelector>`

Enclosing class: WardenEmissiveLayer<T extends Warden, M extends WardenModel<T>>

### Methods
- `List<ModelPart> getPartsToDraw(M p_234924_)`

## WardenEmissiveLayer>

*class* `net.minecraft.client.renderer.entity.layers.WardenEmissiveLayer>`

### Fields
- `private final ResourceLocation texture`
- `private final WardenEmissiveLayer.AlphaFunction<T extends Warden> alphaFunction`
- `private final WardenEmissiveLayer.DrawSelector<T extends Warden,M extends WardenModel<T>> drawSelector`

### Methods
- `public void render(PoseStack p_234902_,  MultiBufferSource p_234903_,  int p_234904_,  T p_234905_,  float p_234906_,  float p_234907_,  float p_234908_,  float p_234909_,  float p_234910_,  float p_234911_)`
- `private void onlyDrawSelectedParts()`
- `private void resetDrawForAllParts()`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## WitchItemLayer

*class* `net.minecraft.client.renderer.entity.layers.WitchItemLayer`

### Methods
- `public void render(PoseStack p_117685_,  MultiBufferSource p_117686_,  int p_117687_,  T p_117688_,  float p_117689_,  float p_117690_,  float p_117691_,  float p_117692_,  float p_117693_,  float p_117694_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## WitherArmorLayer

*class* `net.minecraft.client.renderer.entity.layers.WitherArmorLayer`

### Fields
- `private static final ResourceLocation WITHER_ARMOR_LOCATION`
- `private final WitherBossModel<WitherBoss> model`

### Methods
- `protected float xOffset(float p_117702_)`
- `protected ResourceLocation getTextureLocation()`
- `protected EntityModel<WitherBoss> model()`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.EnergySwirlLayer`: `render`
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`

## WolfCollarLayer

*class* `net.minecraft.client.renderer.entity.layers.WolfCollarLayer`

### Fields
- `private static final ResourceLocation WOLF_COLLAR_LOCATION`

### Methods
- `public void render(PoseStack p_117720_,  MultiBufferSource p_117721_,  int p_117722_,  Wolf p_117723_,  float p_117724_,  float p_117725_,  float p_117726_,  float p_117727_,  float p_117728_,  float p_117729_)`

### Inherited methods
- from `net.minecraft.client.renderer.entity.layers.RenderLayer`: `coloredCutoutModelCopyLayerRender`, `getParentModel`, `getTextureLocation`, `renderColoredCutoutModel`
