# net.minecraft.client.model.geom

- [EntityModelSet](#entitymodelset)
- [LayerDefinitions](#layerdefinitions)
- [ModelLayerLocation](#modellayerlocation)
- [ModelLayers](#modellayers)
- [ModelPart](#modelpart)
- [ModelPart.Cube](#modelpart.cube)
- [ModelPart.Polygon](#modelpart.polygon)
- [ModelPart.Vertex](#modelpart.vertex)
- [ModelPart.Visitor](#modelpart.visitor)
- [PartNames](#partnames)
- [PartPose](#partpose)
## EntityModelSet

*class* `net.minecraft.client.model.geom.EntityModelSet`

### Fields
- `private Map<ModelLayerLocation,LayerDefinition> roots`

### Methods
- `public ModelPart bakeLayer(ModelLayerLocation p_171104_)`
- `public void onResourceManagerReload(ResourceManager p_171102_)`

### Inherited methods
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`
- from `net.minecraft.server.packs.resources.ResourceManagerReloadListener`: `reload`

## LayerDefinitions

*class* `net.minecraft.client.model.geom.LayerDefinitions`

### Fields
- `private static final CubeDeformation FISH_PATTERN_DEFORMATION`
- `public static final CubeDeformation OUTER_ARMOR_DEFORMATION`
- `public static final CubeDeformation INNER_ARMOR_DEFORMATION`

### Methods
- `public static Map<ModelLayerLocation,LayerDefinition> createRoots()`

## ModelLayerLocation

*class* `net.minecraft.client.model.geom.ModelLayerLocation`

### Fields
- `private final ResourceLocation model`
- `private final String layer`

### Methods
- `public ResourceLocation getModel()`
- `public String getLayer()`
- `public boolean equals(Object p_171126_)`
- `public int hashCode()`
- `public String toString()`

## ModelLayers

*class* `net.minecraft.client.model.geom.ModelLayers`

### Fields
- `private static final String DEFAULT_LAYER` (= "main")
- `private static final Set<ModelLayerLocation> ALL_MODELS`
- `public static final ModelLayerLocation ALLAY`
- `public static final ModelLayerLocation ARMOR_STAND`
- `public static final ModelLayerLocation ARMOR_STAND_INNER_ARMOR`
- `public static final ModelLayerLocation ARMOR_STAND_OUTER_ARMOR`
- `public static final ModelLayerLocation AXOLOTL`
- `public static final ModelLayerLocation BANNER`
- `public static final ModelLayerLocation BAT`
- `public static final ModelLayerLocation BED_FOOT`
- `public static final ModelLayerLocation BED_HEAD`
- `public static final ModelLayerLocation BEE`
- `public static final ModelLayerLocation BELL`
- `public static final ModelLayerLocation BLAZE`
- `public static final ModelLayerLocation BOOK`
- `public static final ModelLayerLocation CAT`
- `public static final ModelLayerLocation CAT_COLLAR`
- `public static final ModelLayerLocation CAMEL`
- `public static final ModelLayerLocation CAVE_SPIDER`
- `public static final ModelLayerLocation CHEST`
- `public static final ModelLayerLocation CHEST_MINECART`
- `public static final ModelLayerLocation CHICKEN`
- `public static final ModelLayerLocation COD`
- `public static final ModelLayerLocation COMMAND_BLOCK_MINECART`
- `public static final ModelLayerLocation CONDUIT_CAGE`
- `public static final ModelLayerLocation CONDUIT_EYE`
- `public static final ModelLayerLocation CONDUIT_SHELL`
- `public static final ModelLayerLocation CONDUIT_WIND`
- `public static final ModelLayerLocation COW`
- `public static final ModelLayerLocation CREEPER`
- `public static final ModelLayerLocation CREEPER_ARMOR`
- `public static final ModelLayerLocation CREEPER_HEAD`
- `public static final ModelLayerLocation DECORATED_POT_BASE`
- `public static final ModelLayerLocation DECORATED_POT_SIDES`
- `public static final ModelLayerLocation DOLPHIN`
- `public static final ModelLayerLocation DONKEY`
- `public static final ModelLayerLocation DOUBLE_CHEST_LEFT`
- `public static final ModelLayerLocation DOUBLE_CHEST_RIGHT`
- `public static final ModelLayerLocation DRAGON_SKULL`
- `public static final ModelLayerLocation DROWNED`
- `public static final ModelLayerLocation DROWNED_INNER_ARMOR`
- `public static final ModelLayerLocation DROWNED_OUTER_ARMOR`
- `public static final ModelLayerLocation DROWNED_OUTER_LAYER`
- `public static final ModelLayerLocation ELDER_GUARDIAN`
- `public static final ModelLayerLocation ELYTRA`
- `public static final ModelLayerLocation ENDERMAN`
- `public static final ModelLayerLocation ENDERMITE`
- `public static final ModelLayerLocation ENDER_DRAGON`
- `public static final ModelLayerLocation END_CRYSTAL`
- `public static final ModelLayerLocation EVOKER`
- `public static final ModelLayerLocation EVOKER_FANGS`
- `public static final ModelLayerLocation FOX`
- `public static final ModelLayerLocation FROG`
- `public static final ModelLayerLocation FURNACE_MINECART`
- `public static final ModelLayerLocation GHAST`
- `public static final ModelLayerLocation GIANT`
- `public static final ModelLayerLocation GIANT_INNER_ARMOR`
- `public static final ModelLayerLocation GIANT_OUTER_ARMOR`
- `public static final ModelLayerLocation GLOW_SQUID`
- `public static final ModelLayerLocation GOAT`
- `public static final ModelLayerLocation GUARDIAN`
- `public static final ModelLayerLocation HOGLIN`
- `public static final ModelLayerLocation HOPPER_MINECART`
- `public static final ModelLayerLocation HORSE`
- `public static final ModelLayerLocation HORSE_ARMOR`
- `public static final ModelLayerLocation HUSK`
- `public static final ModelLayerLocation HUSK_INNER_ARMOR`
- `public static final ModelLayerLocation HUSK_OUTER_ARMOR`
- `public static final ModelLayerLocation ILLUSIONER`
- `public static final ModelLayerLocation IRON_GOLEM`
- `public static final ModelLayerLocation LEASH_KNOT`
- `public static final ModelLayerLocation LLAMA`
- `public static final ModelLayerLocation LLAMA_DECOR`
- `public static final ModelLayerLocation LLAMA_SPIT`
- `public static final ModelLayerLocation MAGMA_CUBE`
- `public static final ModelLayerLocation MINECART`
- `public static final ModelLayerLocation MOOSHROOM`
- `public static final ModelLayerLocation MULE`
- `public static final ModelLayerLocation OCELOT`
- `public static final ModelLayerLocation PANDA`
- `public static final ModelLayerLocation PARROT`
- `public static final ModelLayerLocation PHANTOM`
- `public static final ModelLayerLocation PIG`
- `public static final ModelLayerLocation PIGLIN`
- `public static final ModelLayerLocation PIGLIN_BRUTE`
- `public static final ModelLayerLocation PIGLIN_BRUTE_INNER_ARMOR`
- `public static final ModelLayerLocation PIGLIN_BRUTE_OUTER_ARMOR`
- `public static final ModelLayerLocation PIGLIN_HEAD`
- `public static final ModelLayerLocation PIGLIN_INNER_ARMOR`
- `public static final ModelLayerLocation PIGLIN_OUTER_ARMOR`
- `public static final ModelLayerLocation PIG_SADDLE`
- `public static final ModelLayerLocation PILLAGER`
- `public static final ModelLayerLocation PLAYER`
- `public static final ModelLayerLocation PLAYER_HEAD`
- `public static final ModelLayerLocation PLAYER_INNER_ARMOR`
- `public static final ModelLayerLocation PLAYER_OUTER_ARMOR`
- `public static final ModelLayerLocation PLAYER_SLIM`
- `public static final ModelLayerLocation PLAYER_SLIM_INNER_ARMOR`
- `public static final ModelLayerLocation PLAYER_SLIM_OUTER_ARMOR`
- `public static final ModelLayerLocation PLAYER_SPIN_ATTACK`
- `public static final ModelLayerLocation POLAR_BEAR`
- `public static final ModelLayerLocation PUFFERFISH_BIG`
- `public static final ModelLayerLocation PUFFERFISH_MEDIUM`
- `public static final ModelLayerLocation PUFFERFISH_SMALL`
- `public static final ModelLayerLocation RABBIT`
- `public static final ModelLayerLocation RAVAGER`
- `public static final ModelLayerLocation SALMON`
- `public static final ModelLayerLocation SHEEP`
- `public static final ModelLayerLocation SHEEP_FUR`
- `public static final ModelLayerLocation SHIELD`
- `public static final ModelLayerLocation SHULKER`
- `public static final ModelLayerLocation SHULKER_BULLET`
- `public static final ModelLayerLocation SILVERFISH`
- `public static final ModelLayerLocation SKELETON`
- `public static final ModelLayerLocation SKELETON_HORSE`
- `public static final ModelLayerLocation SKELETON_INNER_ARMOR`
- `public static final ModelLayerLocation SKELETON_OUTER_ARMOR`
- `public static final ModelLayerLocation SKELETON_SKULL`
- `public static final ModelLayerLocation SLIME`
- `public static final ModelLayerLocation SLIME_OUTER`
- `public static final ModelLayerLocation SNIFFER`
- `public static final ModelLayerLocation SNOW_GOLEM`
- `public static final ModelLayerLocation SPAWNER_MINECART`
- `public static final ModelLayerLocation SPIDER`
- `public static final ModelLayerLocation SQUID`
- `public static final ModelLayerLocation STRAY`
- `public static final ModelLayerLocation STRAY_INNER_ARMOR`
- `public static final ModelLayerLocation STRAY_OUTER_ARMOR`
- `public static final ModelLayerLocation STRAY_OUTER_LAYER`
- `public static final ModelLayerLocation STRIDER`
- `public static final ModelLayerLocation STRIDER_SADDLE`
- `public static final ModelLayerLocation TADPOLE`
- `public static final ModelLayerLocation TNT_MINECART`
- `public static final ModelLayerLocation TRADER_LLAMA`
- `public static final ModelLayerLocation TRIDENT`
- `public static final ModelLayerLocation TROPICAL_FISH_LARGE`
- `public static final ModelLayerLocation TROPICAL_FISH_LARGE_PATTERN`
- `public static final ModelLayerLocation TROPICAL_FISH_SMALL`
- `public static final ModelLayerLocation TROPICAL_FISH_SMALL_PATTERN`
- `public static final ModelLayerLocation TURTLE`
- `public static final ModelLayerLocation VEX`
- `public static final ModelLayerLocation VILLAGER`
- `public static final ModelLayerLocation VINDICATOR`
- `public static final ModelLayerLocation WARDEN`
- `public static final ModelLayerLocation WANDERING_TRADER`
- `public static final ModelLayerLocation WITCH`
- `public static final ModelLayerLocation WITHER`
- `public static final ModelLayerLocation WITHER_ARMOR`
- `public static final ModelLayerLocation WITHER_SKELETON`
- `public static final ModelLayerLocation WITHER_SKELETON_INNER_ARMOR`
- `public static final ModelLayerLocation WITHER_SKELETON_OUTER_ARMOR`
- `public static final ModelLayerLocation WITHER_SKELETON_SKULL`
- `public static final ModelLayerLocation WITHER_SKULL`
- `public static final ModelLayerLocation WOLF`
- `public static final ModelLayerLocation ZOGLIN`
- `public static final ModelLayerLocation ZOMBIE`
- `public static final ModelLayerLocation ZOMBIE_HEAD`
- `public static final ModelLayerLocation ZOMBIE_HORSE`
- `public static final ModelLayerLocation ZOMBIE_INNER_ARMOR`
- `public static final ModelLayerLocation ZOMBIE_OUTER_ARMOR`
- `public static final ModelLayerLocation ZOMBIE_VILLAGER`
- `public static final ModelLayerLocation ZOMBIE_VILLAGER_INNER_ARMOR`
- `public static final ModelLayerLocation ZOMBIE_VILLAGER_OUTER_ARMOR`
- `public static final ModelLayerLocation ZOMBIFIED_PIGLIN`
- `public static final ModelLayerLocation ZOMBIFIED_PIGLIN_INNER_ARMOR`
- `public static final ModelLayerLocation ZOMBIFIED_PIGLIN_OUTER_ARMOR`

### Methods
- `private static ModelLayerLocation register(String p_171294_)`
- `private static ModelLayerLocation register(String p_171296_,  String p_171297_)`
- `private static ModelLayerLocation createLocation(String p_171301_,  String p_171302_)`
- `private static ModelLayerLocation registerInnerArmor(String p_171299_)`
- `private static ModelLayerLocation registerOuterArmor(String p_171304_)`
- `public static ModelLayerLocation createRaftModelName(Boat.Type p_252002_)`
- `public static ModelLayerLocation createChestRaftModelName(Boat.Type p_248520_)`
- `public static ModelLayerLocation createBoatModelName(Boat.Type p_171290_)`
- `public static ModelLayerLocation createChestBoatModelName(Boat.Type p_233551_)`
- `public static ModelLayerLocation createSignModelName(WoodType p_171292_)`
- `public static ModelLayerLocation createHangingSignModelName(WoodType p_252225_)`
- `public static Stream<ModelLayerLocation> getKnownLocations()`

## ModelPart

*class* `net.minecraft.client.model.geom.ModelPart`

### Fields
- `public static final float DEFAULT_SCALE` (= 1.0f)
- `public float x`
- `public float y`
- `public float z`
- `public float xRot`
- `public float yRot`
- `public float zRot`
- `public float xScale`
- `public float yScale`
- `public float zScale`
- `public boolean visible`
- `public boolean skipDraw`
- `private final List<ModelPart.Cube> cubes`
- `private final Map<String,ModelPart> children`
- `private PartPose initialPose`

### Methods
- `public PartPose storePose()`
- `public PartPose getInitialPose()`
- `public void setInitialPose(PartPose p_233561_)`
- `public void resetPose()`
- `public void loadPose(PartPose p_171323_)`
- `public void copyFrom(ModelPart p_104316_)`
- `public boolean hasChild(String p_233563_)`
- `public ModelPart getChild(String p_171325_)`
- `public void setPos(float p_104228_,  float p_104229_,  float p_104230_)`
- `public void setRotation(float p_171328_,  float p_171329_,  float p_171330_)`
- `public void render(PoseStack p_104302_,  VertexConsumer p_104303_,  int p_104304_,  int p_104305_)`
- `public void render(PoseStack p_104307_,  VertexConsumer p_104308_,  int p_104309_,  int p_104310_,  float p_104311_,  float p_104312_,  float p_104313_,  float p_104314_)`
- `public void visit(PoseStack p_171310_,  ModelPart.Visitor p_171311_)`
- `private void visit(PoseStack p_171313_,  ModelPart.Visitor p_171314_,  String p_171315_)`
- `public void translateAndRotate(PoseStack p_104300_)`
- `private void compile(PoseStack.Pose p_104291_,  VertexConsumer p_104292_,  int p_104293_,  int p_104294_,  float p_104295_,  float p_104296_,  float p_104297_,  float p_104298_)`
- `public ModelPart.Cube getRandomCube(RandomSource p_233559_)`
- `public boolean isEmpty()`
- `public void offsetPos(org.joml.Vector3f p_253873_)`
- `public void offsetRotation(org.joml.Vector3f p_253983_)`
- `public void offsetScale(org.joml.Vector3f p_253957_)`
- `public Stream<ModelPart> getAllParts()`

## ModelPart.Cube

*class* `net.minecraft.client.model.geom.ModelPart.Cube`

Enclosing class: ModelPart

### Fields
- `private final ModelPart.Polygon[] polygons`
- `public final float minX`
- `public final float minY`
- `public final float minZ`
- `public final float maxX`
- `public final float maxY`
- `public final float maxZ`

### Methods
- `public void compile(PoseStack.Pose p_171333_,  VertexConsumer p_171334_,  int p_171335_,  int p_171336_,  float p_171337_,  float p_171338_,  float p_171339_,  float p_171340_)`

## ModelPart.Polygon

*class* `net.minecraft.client.model.geom.ModelPart.Polygon`

Enclosing class: ModelPart

### Fields
- `public final ModelPart.Vertex[] vertices`
- `public final org.joml.Vector3f normal`

## ModelPart.Vertex

*class* `net.minecraft.client.model.geom.ModelPart.Vertex`

Enclosing class: ModelPart

### Fields
- `public final org.joml.Vector3f pos`
- `public final float u`
- `public final float v`

### Methods
- `public ModelPart.Vertex remap(float p_104385_,  float p_104386_)`

## ModelPart.Visitor

*interface* `net.minecraft.client.model.geom.ModelPart.Visitor`

Enclosing class: ModelPart

### Methods
- `void visit(PoseStack.Pose p_171342_,  String p_171343_,  int p_171344_,  ModelPart.Cube p_171345_)`

## PartNames

*class* `net.minecraft.client.model.geom.PartNames`

### Fields
- `public static final String LEFT_FIN` (= "left_fin")
- `public static final String RIGHT_FIN` (= "right_fin")
- `public static final String TOP_FIN` (= "top_fin")
- `public static final String BOTTOM_FIN` (= "bottom_fin")
- `public static final String TAIL_FIN` (= "tail_fin")
- `public static final String LEFT_BLUE_FIN` (= "left_blue_fin")
- `public static final String RIGHT_BLUE_FIN` (= "right_blue_fin")
- `public static final String LEFT_ARM` (= "left_arm")
- `public static final String RIGHT_ARM` (= "right_arm")
- `public static final String LEFT_WING` (= "left_wing")
- `public static final String RIGHT_WING` (= "right_wing")
- `public static final String LEFT_WING_BASE` (= "left_wing_base")
- `public static final String RIGHT_WING_BASE` (= "right_wing_base")
- `public static final String LEFT_WING_TIP` (= "left_wing_tip")
- `public static final String RIGHT_WING_TIP` (= "right_wing_tip")
- `public static final String LEFT_EAR` (= "left_ear")
- `public static final String RIGHT_EAR` (= "right_ear")
- `public static final String LEFT_LEG` (= "left_leg")
- `public static final String RIGHT_LEG` (= "right_leg")
- `public static final String LEFT_HIND_LEG` (= "left_hind_leg")
- `public static final String RIGHT_HIND_LEG` (= "right_hind_leg")
- `public static final String LEFT_MID_LEG` (= "left_mid_leg")
- `public static final String RIGHT_MID_LEG` (= "right_mid_leg")
- `public static final String LEFT_FRONT_LEG` (= "left_front_leg")
- `public static final String RIGHT_FRONT_LEG` (= "right_front_leg")
- `public static final String LEFT_HIND_FOOT` (= "left_hind_foot")
- `public static final String RIGHT_HIND_FOOT` (= "right_hind_foot")
- `public static final String LEFT_FRONT_FOOT` (= "left_front_foot")
- `public static final String RIGHT_FRONT_FOOT` (= "right_front_foot")
- `public static final String LEFT_HIND_LEG_TIP` (= "left_hind_leg_tip")
- `public static final String RIGHT_HIND_LEG_TIP` (= "right_hind_leg_tip")
- `public static final String LEFT_FRONT_LEG_TIP` (= "left_front_leg_tip")
- `public static final String RIGHT_FRONT_LEG_TIP` (= "right_front_leg_tip")
- `public static final String LEFT_LID` (= "left_lid")
- `public static final String RIGHT_LID` (= "right_lid")
- `public static final String LEFT_CHEST` (= "left_chest")
- `public static final String RIGHT_CHEST` (= "right_chest")
- `public static final String LEFT_HORN` (= "left_horn")
- `public static final String RIGHT_HORN` (= "right_horn")
- `public static final String LEFT_EYE` (= "left_eye")
- `public static final String RIGHT_EYE` (= "right_eye")
- `public static final String JAW` (= "jaw")
- `public static final String NOSE` (= "nose")
- `public static final String ARMS` (= "arms")
- `public static final String TAIL` (= "tail")
- `public static final String CUBE` (= "cube")
- `public static final String BEAK` (= "beak")
- `public static final String BACK_FIN` (= "back_fin")
- `public static final String MANE` (= "mane")
- `public static final String NECK` (= "neck")
- `public static final String MOUTH` (= "mouth")
- `public static final String HEAD` (= "head")
- `public static final String HAT` (= "hat")
- `public static final String BODY` (= "body")
- `public static final String HAT_RIM` (= "hat_rim")
- `public static final String JACKET` (= "jacket")
- `public static final String TOP_GILLS` (= "top_gills")
- `public static final String LEFT_GILLS` (= "left_gills")
- `public static final String RIGHT_GILLS` (= "right_gills")
- `public static final String ROOT` (= "root")
- `public static final String CROAKING_BODY` (= "croaking_body")
- `public static final String TONGUE` (= "tongue")
- `public static final String TONGUE_R1` (= "tongue_r1")
- `public static final String LEFT_HAND` (= "left_hand")
- `public static final String RIGHT_HAND` (= "right_hand")
- `public static final String LEFT_FOOT` (= "left_foot")
- `public static final String RIGHT_FOOT` (= "right_foot")
- `public static final String EYES` (= "eyes")
- `public static final String RIGHT_TENDRIL` (= "right_tendril")
- `public static final String LEFT_TENDRIL` (= "left_tendril")
- `public static final String RIGHT_RIBCAGE` (= "right_ribcage")
- `public static final String LEFT_RIBCAGE` (= "left_ribcage")
- `public static final String BONE` (= "bone")

## PartPose

*class* `net.minecraft.client.model.geom.PartPose`

### Fields
- `public static final PartPose ZERO`
- `public final float x`
- `public final float y`
- `public final float z`
- `public final float xRot`
- `public final float yRot`
- `public final float zRot`

### Methods
- `public static PartPose offset(float p_171420_,  float p_171421_,  float p_171422_)`
- `public static PartPose rotation(float p_171431_,  float p_171432_,  float p_171433_)`
- `public static PartPose offsetAndRotation(float p_171424_,  float p_171425_,  float p_171426_,  float p_171427_,  float p_171428_,  float p_171429_)`
