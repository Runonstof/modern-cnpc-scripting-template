# net.minecraft.data.models.model

- [DelegatedModel](#delegatedmodel)
- [ModelLocationUtils](#modellocationutils)
- [ModelTemplate](#modeltemplate)
- [ModelTemplate.JsonFactory](#modeltemplate.jsonfactory)
- [ModelTemplates](#modeltemplates)
- [TexturedModel](#texturedmodel)
- [TexturedModel.Provider](#texturedmodel.provider)
- [TextureMapping](#texturemapping)
- [TextureSlot](#textureslot)
## DelegatedModel

*class* `net.minecraft.data.models.model.DelegatedModel`

### Fields
- `private final ResourceLocation parent`

### Methods
- `public com.google.gson.JsonElement get()`

## ModelLocationUtils

*class* `net.minecraft.data.models.model.ModelLocationUtils`

### Methods
- `@Deprecated public static ResourceLocation decorateBlockModelLocation(String p_125582_)` (deprecated)
- `public static ResourceLocation decorateItemModelLocation(String p_125584_)`
- `public static ResourceLocation getModelLocation(Block p_125579_,  String p_125580_)`
- `public static ResourceLocation getModelLocation(Block p_125577_)`
- `public static ResourceLocation getModelLocation(Item p_125572_)`
- `public static ResourceLocation getModelLocation(Item p_125574_,  String p_125575_)`

## ModelTemplate

*class* `net.minecraft.data.models.model.ModelTemplate`

### Fields
- `private final Optional<ResourceLocation> model`
- `private final Set<TextureSlot> requiredSlots`
- `private final Optional<String> suffix`

### Methods
- `public ResourceLocation create(Block p_125593_,  TextureMapping p_125594_,  BiConsumer<ResourceLocation,Supplier<com.google.gson.JsonElement>> p_125595_)`
- `public ResourceLocation createWithSuffix(Block p_125597_,  String p_125598_,  TextureMapping p_125599_,  BiConsumer<ResourceLocation,Supplier<com.google.gson.JsonElement>> p_125600_)`
- `public ResourceLocation createWithOverride(Block p_125617_,  String p_125618_,  TextureMapping p_125619_,  BiConsumer<ResourceLocation,Supplier<com.google.gson.JsonElement>> p_125620_)`
- `public ResourceLocation create(ResourceLocation p_125613_,  TextureMapping p_125614_,  BiConsumer<ResourceLocation,Supplier<com.google.gson.JsonElement>> p_125615_)`
- `public ResourceLocation create(ResourceLocation p_266990_,  TextureMapping p_267329_,  BiConsumer<ResourceLocation,Supplier<com.google.gson.JsonElement>> p_266768_,  ModelTemplate.JsonFactory p_266906_)`
- `public com.google.gson.JsonObject createBaseTemplate(ResourceLocation p_266830_,  Map<TextureSlot,ResourceLocation> p_266912_)`
- `private Map<TextureSlot,ResourceLocation> createMap(TextureMapping p_125609_)`

## ModelTemplate.JsonFactory

*interface* `net.minecraft.data.models.model.ModelTemplate.JsonFactory`

Enclosing class: ModelTemplate

### Methods
- `com.google.gson.JsonObject create(ResourceLocation p_266987_,  Map<TextureSlot,ResourceLocation> p_266933_)`

## ModelTemplates

*class* `net.minecraft.data.models.model.ModelTemplates`

### Fields
- `public static final ModelTemplate CUBE`
- `public static final ModelTemplate CUBE_DIRECTIONAL`
- `public static final ModelTemplate CUBE_ALL`
- `public static final ModelTemplate CUBE_MIRRORED_ALL`
- `public static final ModelTemplate CUBE_NORTH_WEST_MIRRORED_ALL`
- `public static final ModelTemplate CUBE_COLUMN_UV_LOCKED_X`
- `public static final ModelTemplate CUBE_COLUMN_UV_LOCKED_Y`
- `public static final ModelTemplate CUBE_COLUMN_UV_LOCKED_Z`
- `public static final ModelTemplate CUBE_COLUMN`
- `public static final ModelTemplate CUBE_COLUMN_HORIZONTAL`
- `public static final ModelTemplate CUBE_COLUMN_MIRRORED`
- `public static final ModelTemplate CUBE_TOP`
- `public static final ModelTemplate CUBE_BOTTOM_TOP`
- `public static final ModelTemplate CUBE_ORIENTABLE`
- `public static final ModelTemplate CUBE_ORIENTABLE_TOP_BOTTOM`
- `public static final ModelTemplate CUBE_ORIENTABLE_VERTICAL`
- `public static final ModelTemplate BUTTON`
- `public static final ModelTemplate BUTTON_PRESSED`
- `public static final ModelTemplate BUTTON_INVENTORY`
- `public static final ModelTemplate DOOR_BOTTOM_LEFT`
- `public static final ModelTemplate DOOR_BOTTOM_LEFT_OPEN`
- `public static final ModelTemplate DOOR_BOTTOM_RIGHT`
- `public static final ModelTemplate DOOR_BOTTOM_RIGHT_OPEN`
- `public static final ModelTemplate DOOR_TOP_LEFT`
- `public static final ModelTemplate DOOR_TOP_LEFT_OPEN`
- `public static final ModelTemplate DOOR_TOP_RIGHT`
- `public static final ModelTemplate DOOR_TOP_RIGHT_OPEN`
- `public static final ModelTemplate CUSTOM_FENCE_POST`
- `public static final ModelTemplate CUSTOM_FENCE_SIDE_NORTH`
- `public static final ModelTemplate CUSTOM_FENCE_SIDE_EAST`
- `public static final ModelTemplate CUSTOM_FENCE_SIDE_SOUTH`
- `public static final ModelTemplate CUSTOM_FENCE_SIDE_WEST`
- `public static final ModelTemplate CUSTOM_FENCE_INVENTORY`
- `public static final ModelTemplate FENCE_POST`
- `public static final ModelTemplate FENCE_SIDE`
- `public static final ModelTemplate FENCE_INVENTORY`
- `public static final ModelTemplate WALL_POST`
- `public static final ModelTemplate WALL_LOW_SIDE`
- `public static final ModelTemplate WALL_TALL_SIDE`
- `public static final ModelTemplate WALL_INVENTORY`
- `public static final ModelTemplate CUSTOM_FENCE_GATE_CLOSED`
- `public static final ModelTemplate CUSTOM_FENCE_GATE_OPEN`
- `public static final ModelTemplate CUSTOM_FENCE_GATE_WALL_CLOSED`
- `public static final ModelTemplate CUSTOM_FENCE_GATE_WALL_OPEN`
- `public static final ModelTemplate FENCE_GATE_CLOSED`
- `public static final ModelTemplate FENCE_GATE_OPEN`
- `public static final ModelTemplate FENCE_GATE_WALL_CLOSED`
- `public static final ModelTemplate FENCE_GATE_WALL_OPEN`
- `public static final ModelTemplate PRESSURE_PLATE_UP`
- `public static final ModelTemplate PRESSURE_PLATE_DOWN`
- `public static final ModelTemplate PARTICLE_ONLY`
- `public static final ModelTemplate SLAB_BOTTOM`
- `public static final ModelTemplate SLAB_TOP`
- `public static final ModelTemplate LEAVES`
- `public static final ModelTemplate STAIRS_STRAIGHT`
- `public static final ModelTemplate STAIRS_INNER`
- `public static final ModelTemplate STAIRS_OUTER`
- `public static final ModelTemplate TRAPDOOR_TOP`
- `public static final ModelTemplate TRAPDOOR_BOTTOM`
- `public static final ModelTemplate TRAPDOOR_OPEN`
- `public static final ModelTemplate ORIENTABLE_TRAPDOOR_TOP`
- `public static final ModelTemplate ORIENTABLE_TRAPDOOR_BOTTOM`
- `public static final ModelTemplate ORIENTABLE_TRAPDOOR_OPEN`
- `public static final ModelTemplate POINTED_DRIPSTONE`
- `public static final ModelTemplate CROSS`
- `public static final ModelTemplate TINTED_CROSS`
- `public static final ModelTemplate FLOWER_POT_CROSS`
- `public static final ModelTemplate TINTED_FLOWER_POT_CROSS`
- `public static final ModelTemplate RAIL_FLAT`
- `public static final ModelTemplate RAIL_CURVED`
- `public static final ModelTemplate RAIL_RAISED_NE`
- `public static final ModelTemplate RAIL_RAISED_SW`
- `public static final ModelTemplate CARPET`
- `public static final ModelTemplate FLOWERBED_1`
- `public static final ModelTemplate FLOWERBED_2`
- `public static final ModelTemplate FLOWERBED_3`
- `public static final ModelTemplate FLOWERBED_4`
- `public static final ModelTemplate CORAL_FAN`
- `public static final ModelTemplate CORAL_WALL_FAN`
- `public static final ModelTemplate GLAZED_TERRACOTTA`
- `public static final ModelTemplate CHORUS_FLOWER`
- `public static final ModelTemplate DAYLIGHT_DETECTOR`
- `public static final ModelTemplate STAINED_GLASS_PANE_NOSIDE`
- `public static final ModelTemplate STAINED_GLASS_PANE_NOSIDE_ALT`
- `public static final ModelTemplate STAINED_GLASS_PANE_POST`
- `public static final ModelTemplate STAINED_GLASS_PANE_SIDE`
- `public static final ModelTemplate STAINED_GLASS_PANE_SIDE_ALT`
- `public static final ModelTemplate COMMAND_BLOCK`
- `public static final ModelTemplate CHISELED_BOOKSHELF_SLOT_TOP_LEFT`
- `public static final ModelTemplate CHISELED_BOOKSHELF_SLOT_TOP_MID`
- `public static final ModelTemplate CHISELED_BOOKSHELF_SLOT_TOP_RIGHT`
- `public static final ModelTemplate CHISELED_BOOKSHELF_SLOT_BOTTOM_LEFT`
- `public static final ModelTemplate CHISELED_BOOKSHELF_SLOT_BOTTOM_MID`
- `public static final ModelTemplate CHISELED_BOOKSHELF_SLOT_BOTTOM_RIGHT`
- `public static final ModelTemplate ANVIL`
- `public static final ModelTemplate[] STEMS`
- `public static final ModelTemplate ATTACHED_STEM`
- `public static final ModelTemplate CROP`
- `public static final ModelTemplate FARMLAND`
- `public static final ModelTemplate FIRE_FLOOR`
- `public static final ModelTemplate FIRE_SIDE`
- `public static final ModelTemplate FIRE_SIDE_ALT`
- `public static final ModelTemplate FIRE_UP`
- `public static final ModelTemplate FIRE_UP_ALT`
- `public static final ModelTemplate CAMPFIRE`
- `public static final ModelTemplate LANTERN`
- `public static final ModelTemplate HANGING_LANTERN`
- `public static final ModelTemplate TORCH`
- `public static final ModelTemplate WALL_TORCH`
- `public static final ModelTemplate PISTON`
- `public static final ModelTemplate PISTON_HEAD`
- `public static final ModelTemplate PISTON_HEAD_SHORT`
- `public static final ModelTemplate SEAGRASS`
- `public static final ModelTemplate TURTLE_EGG`
- `public static final ModelTemplate TWO_TURTLE_EGGS`
- `public static final ModelTemplate THREE_TURTLE_EGGS`
- `public static final ModelTemplate FOUR_TURTLE_EGGS`
- `public static final ModelTemplate SINGLE_FACE`
- `public static final ModelTemplate CAULDRON_LEVEL1`
- `public static final ModelTemplate CAULDRON_LEVEL2`
- `public static final ModelTemplate CAULDRON_FULL`
- `public static final ModelTemplate AZALEA`
- `public static final ModelTemplate POTTED_AZALEA`
- `public static final ModelTemplate POTTED_FLOWERING_AZALEA`
- `public static final ModelTemplate SNIFFER_EGG`
- `public static final ModelTemplate FLAT_ITEM`
- `public static final ModelTemplate MUSIC_DISC`
- `public static final ModelTemplate FLAT_HANDHELD_ITEM`
- `public static final ModelTemplate FLAT_HANDHELD_ROD_ITEM`
- `public static final ModelTemplate TWO_LAYERED_ITEM`
- `public static final ModelTemplate THREE_LAYERED_ITEM`
- `public static final ModelTemplate SHULKER_BOX_INVENTORY`
- `public static final ModelTemplate BED_INVENTORY`
- `public static final ModelTemplate BANNER_INVENTORY`
- `public static final ModelTemplate SKULL_INVENTORY`
- `public static final ModelTemplate CANDLE`
- `public static final ModelTemplate TWO_CANDLES`
- `public static final ModelTemplate THREE_CANDLES`
- `public static final ModelTemplate FOUR_CANDLES`
- `public static final ModelTemplate CANDLE_CAKE`
- `public static final ModelTemplate SCULK_SHRIEKER`

### Methods
- `private static ModelTemplate create(TextureSlot... p_125727_)`
- `private static ModelTemplate create(String p_125724_,  TextureSlot... p_125725_)`
- `private static ModelTemplate createItem(String p_125731_,  TextureSlot... p_125732_)`
- `private static ModelTemplate create(String p_125720_,  String p_125721_,  TextureSlot... p_125722_)`

## TexturedModel

*class* `net.minecraft.data.models.model.TexturedModel`

### Fields
- `public static final TexturedModel.Provider CUBE`
- `public static final TexturedModel.Provider CUBE_MIRRORED`
- `public static final TexturedModel.Provider COLUMN`
- `public static final TexturedModel.Provider COLUMN_HORIZONTAL`
- `public static final TexturedModel.Provider CUBE_TOP_BOTTOM`
- `public static final TexturedModel.Provider CUBE_TOP`
- `public static final TexturedModel.Provider ORIENTABLE_ONLY_TOP`
- `public static final TexturedModel.Provider ORIENTABLE`
- `public static final TexturedModel.Provider CARPET`
- `public static final TexturedModel.Provider FLOWERBED_1`
- `public static final TexturedModel.Provider FLOWERBED_2`
- `public static final TexturedModel.Provider FLOWERBED_3`
- `public static final TexturedModel.Provider FLOWERBED_4`
- `public static final TexturedModel.Provider GLAZED_TERRACOTTA`
- `public static final TexturedModel.Provider CORAL_FAN`
- `public static final TexturedModel.Provider PARTICLE_ONLY`
- `public static final TexturedModel.Provider ANVIL`
- `public static final TexturedModel.Provider LEAVES`
- `public static final TexturedModel.Provider LANTERN`
- `public static final TexturedModel.Provider HANGING_LANTERN`
- `public static final TexturedModel.Provider SEAGRASS`
- `public static final TexturedModel.Provider COLUMN_ALT`
- `public static final TexturedModel.Provider COLUMN_HORIZONTAL_ALT`
- `public static final TexturedModel.Provider TOP_BOTTOM_WITH_WALL`
- `public static final TexturedModel.Provider COLUMN_WITH_WALL`
- `private final TextureMapping mapping`
- `private final ModelTemplate template`

### Methods
- `public ModelTemplate getTemplate()`
- `public TextureMapping getMapping()`
- `public TexturedModel updateTextures(Consumer<TextureMapping> p_125941_)`
- `public ResourceLocation create(Block p_125938_,  BiConsumer<ResourceLocation,Supplier<com.google.gson.JsonElement>> p_125939_)`
- `public ResourceLocation createWithSuffix(Block p_125934_,  String p_125935_,  BiConsumer<ResourceLocation,Supplier<com.google.gson.JsonElement>> p_125936_)`
- `private static TexturedModel.Provider createDefault(Function<Block,TextureMapping> p_125943_,  ModelTemplate p_125944_)`
- `public static TexturedModel createAllSame(ResourceLocation p_125950_)`

## TexturedModel.Provider

*interface* `net.minecraft.data.models.model.TexturedModel.Provider`

Enclosing class: TexturedModel

### Methods
- `TexturedModel get(Block p_125965_)`
- `default ResourceLocation create(Block p_125957_,  BiConsumer<ResourceLocation,Supplier<com.google.gson.JsonElement>> p_125958_)`
- `default ResourceLocation createWithSuffix(Block p_125953_,  String p_125954_,  BiConsumer<ResourceLocation,Supplier<com.google.gson.JsonElement>> p_125955_)`
- `default TexturedModel.Provider updateTexture(Consumer<TextureMapping> p_125960_)`

## TextureMapping

*class* `net.minecraft.data.models.model.TextureMapping`

### Fields
- `private final Map<TextureSlot,ResourceLocation> slots`
- `private final Set<TextureSlot> forcedSlots`

### Methods
- `public TextureMapping put(TextureSlot p_125759_,  ResourceLocation p_125760_)`
- `public TextureMapping putForced(TextureSlot p_176481_,  ResourceLocation p_176482_)`
- `public Stream<TextureSlot> getForced()`
- `public TextureMapping copySlot(TextureSlot p_176478_,  TextureSlot p_176479_)`
- `public TextureMapping copyForced(TextureSlot p_125774_,  TextureSlot p_125775_)`
- `public ResourceLocation get(TextureSlot p_125757_)`
- `public TextureMapping copyAndUpdate(TextureSlot p_125786_,  ResourceLocation p_125787_)`
- `public static TextureMapping cube(Block p_125749_)`
- `public static TextureMapping defaultTexture(Block p_125769_)`
- `public static TextureMapping defaultTexture(ResourceLocation p_125762_)`
- `public static TextureMapping cube(ResourceLocation p_125777_)`
- `public static TextureMapping cross(Block p_125781_)`
- `public static TextureMapping cross(ResourceLocation p_125789_)`
- `public static TextureMapping plant(Block p_125791_)`
- `public static TextureMapping plant(ResourceLocation p_125799_)`
- `public static TextureMapping rail(Block p_125801_)`
- `public static TextureMapping rail(ResourceLocation p_125803_)`
- `public static TextureMapping wool(Block p_125805_)`
- `public static TextureMapping flowerbed(Block p_272596_)`
- `public static TextureMapping wool(ResourceLocation p_176487_)`
- `public static TextureMapping stem(Block p_125807_)`
- `public static TextureMapping attachedStem(Block p_125751_,  Block p_125752_)`
- `public static TextureMapping pattern(Block p_125811_)`
- `public static TextureMapping fan(Block p_125815_)`
- `public static TextureMapping crop(ResourceLocation p_125809_)`
- `public static TextureMapping pane(Block p_125771_,  Block p_125772_)`
- `public static TextureMapping singleSlot(TextureSlot p_125796_,  ResourceLocation p_125797_)`
- `public static TextureMapping column(Block p_125819_)`
- `public static TextureMapping cubeTop(Block p_125823_)`
- `public static TextureMapping pottedAzalea(Block p_278329_)`
- `public static TextureMapping logColumn(Block p_125825_)`
- `public static TextureMapping column(ResourceLocation p_125764_,  ResourceLocation p_125765_)`
- `public static TextureMapping fence(Block p_250135_)`
- `public static TextureMapping customParticle(Block p_250579_)`
- `public static TextureMapping cubeBottomTop(Block p_125827_)`
- `public static TextureMapping cubeBottomTopWithWall(Block p_125829_)`
- `public static TextureMapping columnWithWall(Block p_125831_)`
- `public static TextureMapping door(ResourceLocation p_176484_,  ResourceLocation p_176485_)`
- `public static TextureMapping door(Block p_125833_)`
- `public static TextureMapping particle(Block p_125835_)`
- `public static TextureMapping particle(ResourceLocation p_125813_)`
- `public static TextureMapping fire0(Block p_125837_)`
- `public static TextureMapping fire1(Block p_125839_)`
- `public static TextureMapping lantern(Block p_125841_)`
- `public static TextureMapping torch(Block p_125843_)`
- `public static TextureMapping torch(ResourceLocation p_125817_)`
- `public static TextureMapping particleFromItem(Item p_125744_)`
- `public static TextureMapping commandBlock(Block p_125845_)`
- `public static TextureMapping orientableCube(Block p_125847_)`
- `public static TextureMapping orientableCubeOnlyTop(Block p_125849_)`
- `public static TextureMapping orientableCubeSameEnds(Block p_125851_)`
- `public static TextureMapping top(Block p_125853_)`
- `public static TextureMapping craftingTable(Block p_125783_,  Block p_125784_)`
- `public static TextureMapping fletchingTable(Block p_125793_,  Block p_125794_)`
- `public static TextureMapping snifferEgg(String p_278314_)`
- `public static TextureMapping campfire(Block p_125737_)`
- `public static TextureMapping candleCake(Block p_181477_,  boolean p_181478_)`
- `public static TextureMapping cauldron(ResourceLocation p_176489_)`
- `public static TextureMapping sculkShrieker(boolean p_236351_)`
- `public static TextureMapping layer0(Item p_125767_)`
- `public static TextureMapping layer0(Block p_125739_)`
- `public static TextureMapping layer0(ResourceLocation p_125821_)`
- `public static TextureMapping layered(ResourceLocation p_267142_,  ResourceLocation p_266884_)`
- `public static TextureMapping layered(ResourceLocation p_268096_,  ResourceLocation p_268084_,  ResourceLocation p_268063_)`
- `public static ResourceLocation getBlockTexture(Block p_125741_)`
- `public static ResourceLocation getBlockTexture(Block p_125754_,  String p_125755_)`
- `public static ResourceLocation getItemTexture(Item p_125779_)`
- `public static ResourceLocation getItemTexture(Item p_125746_,  String p_125747_)`

## TextureSlot

*class* `net.minecraft.data.models.model.TextureSlot`

### Fields
- `public static final TextureSlot ALL`
- `public static final TextureSlot TEXTURE`
- `public static final TextureSlot PARTICLE`
- `public static final TextureSlot END`
- `public static final TextureSlot BOTTOM`
- `public static final TextureSlot TOP`
- `public static final TextureSlot FRONT`
- `public static final TextureSlot BACK`
- `public static final TextureSlot SIDE`
- `public static final TextureSlot NORTH`
- `public static final TextureSlot SOUTH`
- `public static final TextureSlot EAST`
- `public static final TextureSlot WEST`
- `public static final TextureSlot UP`
- `public static final TextureSlot DOWN`
- `public static final TextureSlot CROSS`
- `public static final TextureSlot PLANT`
- `public static final TextureSlot WALL`
- `public static final TextureSlot RAIL`
- `public static final TextureSlot WOOL`
- `public static final TextureSlot PATTERN`
- `public static final TextureSlot PANE`
- `public static final TextureSlot EDGE`
- `public static final TextureSlot FAN`
- `public static final TextureSlot STEM`
- `public static final TextureSlot UPPER_STEM`
- `public static final TextureSlot CROP`
- `public static final TextureSlot DIRT`
- `public static final TextureSlot FIRE`
- `public static final TextureSlot LANTERN`
- `public static final TextureSlot PLATFORM`
- `public static final TextureSlot UNSTICKY`
- `public static final TextureSlot TORCH`
- `public static final TextureSlot LAYER0`
- `public static final TextureSlot LAYER1`
- `public static final TextureSlot LAYER2`
- `public static final TextureSlot LIT_LOG`
- `public static final TextureSlot CANDLE`
- `public static final TextureSlot INSIDE`
- `public static final TextureSlot CONTENT`
- `public static final TextureSlot INNER_TOP`
- `public static final TextureSlot FLOWERBED`
- `private final String id`
- `@Nullable private final TextureSlot parent`

### Methods
- `private static TextureSlot create(String p_125899_)`
- `private static TextureSlot create(String p_125901_,  TextureSlot p_125902_)`
- `public String getId()`
- `@Nullable public TextureSlot getParent()`
- `public String toString()`
