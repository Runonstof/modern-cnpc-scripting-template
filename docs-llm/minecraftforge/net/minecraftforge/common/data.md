# net.minecraftforge.common.data

- [BlockTagsProvider](#blocktagsprovider)
- [Class SoundDefinition.SoundType](#class-sounddefinition.soundtype)
- [DatapackBuiltinEntriesProvider](#datapackbuiltinentriesprovider)
- [ExistingFileHelper](#existingfilehelper)
- [ExistingFileHelper.IResourceType](#existingfilehelper.iresourcetype)
- [ExistingFileHelper.ResourceType](#existingfilehelper.resourcetype)
- [ForgeAdvancementProvider](#forgeadvancementprovider)
- [ForgeAdvancementProvider.AdvancementGenerator](#forgeadvancementprovider.advancementgenerator)
- [ForgeBiomeTagsProvider](#forgebiometagsprovider)
- [ForgeBlockTagsProvider](#forgeblocktagsprovider)
- [ForgeEntityTypeTagsProvider](#forgeentitytypetagsprovider)
- [ForgeFluidTagsProvider](#forgefluidtagsprovider)
- [ForgeItemTagsProvider](#forgeitemtagsprovider)
- [ForgeLootTableProvider](#forgeloottableprovider)
- [ForgeRecipeProvider](#forgerecipeprovider)
- [ForgeSpriteSourceProvider](#forgespritesourceprovider)
- [GlobalLootModifierProvider](#globallootmodifierprovider)
- [JsonCodecProvider](#jsoncodecprovider)
- [LanguageProvider](#languageprovider)
- [ParticleDescriptionProvider](#particledescriptionprovider)
- [SoundDefinition](#sounddefinition)
- [SoundDefinition.Sound](#sounddefinition.sound)
- [SoundDefinitionsProvider](#sounddefinitionsprovider)
- [SpriteSourceProvider](#spritesourceprovider)
- [SpriteSourceProvider.SourceList](#spritesourceprovider.sourcelist)
- [VanillaSoundDefinitionsProvider](#vanillasounddefinitionsprovider)
## BlockTagsProvider

*class* `net.minecraftforge.common.data.BlockTagsProvider`

### Inherited fields
- from `net.minecraft.data.tags.TagsProvider`: `builders`, `existingFileHelper`, `modId`, `pathProvider`, `registryKey`
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`

### Inherited methods
- from `net.minecraft.data.tags.IntrinsicHolderTagsProvider`: `tag`
- from `net.minecraft.data.tags.TagsProvider`: `addTags`, `contentsGetter`, `createContentsProvider`, `getName`, `getOrCreateRawBuilder`, `getPath`, `run`

## Class SoundDefinition.SoundType

*enum* `net.minecraftforge.common.data.Class SoundDefinition.SoundType`

Represents the type of sound that the SoundDefinition.Sound object represents.

Enclosing class: SoundDefinition

### Fields
- `private final String jsonString`

### Methods
- `public static SoundDefinition.SoundType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SoundDefinition.SoundType valueOf(String name)`
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

## DatapackBuiltinEntriesProvider

*class* `net.minecraftforge.common.data.DatapackBuiltinEntriesProvider`

An extension of the RegistriesDatapackGenerator which properly handles
 referencing existing dynamic registry objects within another dynamic registry
 object.

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`

### Methods
- `private static HolderLookup.Provider constructRegistries(HolderLookup.Provider original,  RegistrySetBuilder datapackEntriesBuilder)`
  A method used to construct empty bootstraps for all registries this provider
   did not touch such that existing dynamic registry objects do not get inlined.
  - param: original - a future of a lookup for registries and their objects
  - param: datapackEntriesBuilder - a builder containing the dynamic registry objects added by this provider
  - returns: a new lookup containing the existing and to be generated registries and their objects

### Inherited methods
- from `net.minecraft.data.registries.RegistriesDatapackGenerator`: `getName`, `getRegistryProvider`, `run`

## ExistingFileHelper

*class* `net.minecraftforge.common.data.ExistingFileHelper`

Enables data providers to check if other data files currently exist. The
 instance provided in the GatherDataEvent utilizes the standard
 resources (via VanillaPackResources), forge's resources, as well as any
 extra resource packs passed in via the --existing argument,
 or mod resources via the --existing-mod argument.

### Fields
- `private final MultiPackResourceManager clientResources`
- `private final MultiPackResourceManager serverData`
- `private final boolean enable`
- `private final com.google.common.collect.Multimap<PackType,ResourceLocation> generated`

### Methods
- `private ResourceManager getManager(PackType packType)`
- `private ResourceLocation getLocation(ResourceLocation base,  String suffix,  String prefix)`
- `public boolean exists(ResourceLocation loc,  PackType packType)`
  Check if a given resource exists in the known resource packs.
  - param: loc - the complete location of the resource, e.g.
 "minecraft:textures/block/stone.png"
  - param: packType - the type of resources to check
  - returns: true if the resource exists in any pack, false
 otherwise
- `public boolean exists(ResourceLocation loc,  ExistingFileHelper.IResourceType type)`
  Check if a given resource exists in the known resource packs. This is a
   convenience method to avoid repeating type/prefix/suffix and instead use the
   common definitions in ExistingFileHelper.ResourceType, or a custom ExistingFileHelper.IResourceType
   definition.
  - param: loc - the base location of the resource, e.g.
 "minecraft:block/stone"
  - param: type - a ExistingFileHelper.IResourceType describing how to form the path to the
 resource
  - returns: true if the resource exists in any pack, false
 otherwise
- `public boolean exists(ResourceLocation loc,  PackType packType,  String pathSuffix,  String pathPrefix)`
  Check if a given resource exists in the known resource packs.
  - param: loc - the base location of the resource, e.g.
 "minecraft:block/stone"
  - param: packType - the type of resources to check
  - param: pathSuffix - a string to append after the path, e.g. ".json"
  - param: pathPrefix - a string to append before the path, before a slash, e.g.
 "models"
  - returns: true if the resource exists in any pack, false
 otherwise
- `public void trackGenerated(ResourceLocation loc,  ExistingFileHelper.IResourceType type)`
  Track the existence of a generated file. This is a convenience method to
   avoid repeating type/prefix/suffix and instead use the common definitions in
   ExistingFileHelper.ResourceType, or a custom ExistingFileHelper.IResourceType definition.
  
   This should be called by data providers immediately when a new data object is
   created, i.e. not during
   run but instead
   when the "builder" (or whatever intermediate object) is created, such as a
   ModelBuilder.
  
   This represents a promise to generate the file later, since other
   datagen may rely on this file existing.
  - param: loc - the base location of the resource, e.g.
 "minecraft:block/stone"
  - param: type - a ExistingFileHelper.IResourceType describing how to form the path to the
 resource
- `public void trackGenerated(ResourceLocation loc,  PackType packType,  String pathSuffix,  String pathPrefix)`
  Track the existence of a generated file.
  
   This should be called by data providers immediately when a new data object is
   created, i.e. not during
   run but instead
   when the "builder" (or whatever intermediate object) is created, such as a
   ModelBuilder.
  
   This represents a promise to generate the file later, since other
   datagen may rely on this file existing.
  - param: loc - the base location of the resource, e.g.
 "minecraft:block/stone"
  - param: packType - the type of resources to check
  - param: pathSuffix - a string to append after the path, e.g. ".json"
  - param: pathPrefix - a string to append before the path, before a slash, e.g.
 "models"
- `@VisibleForTesting public Resource getResource(ResourceLocation loc,  PackType packType,  String pathSuffix,  String pathPrefix)  throws FileNotFoundException`
  - throws: FileNotFoundException
- `@VisibleForTesting public Resource getResource(ResourceLocation loc,  PackType packType)  throws FileNotFoundException`
  - throws: FileNotFoundException
- `@VisibleForTesting public List<Resource> getResourceStack(ResourceLocation loc,  PackType packType)`
- `public boolean isEnabled()`
  - returns: true if validation is enabled, false otherwise

## ExistingFileHelper.IResourceType

*interface* `net.minecraftforge.common.data.ExistingFileHelper.IResourceType`

Enclosing class: ExistingFileHelper

### Methods
- `PackType getPackType()`
- `String getSuffix()`
- `String getPrefix()`

## ExistingFileHelper.ResourceType

*class* `net.minecraftforge.common.data.ExistingFileHelper.ResourceType`

Enclosing class: ExistingFileHelper

### Fields
- `final PackType packType`
- `final String suffix`
- `final String prefix`

### Methods
- `public PackType getPackType()`
- `public String getSuffix()`
- `public String getPrefix()`

## ForgeAdvancementProvider

*class* `net.minecraftforge.common.data.ForgeAdvancementProvider`

An extension of the AdvancementProvider to provide a feature-complete
 experience to generate modded advancements.

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`, `LOGGER`

### Inherited methods
- from `net.minecraft.data.advancements.AdvancementProvider`: `getName`, `run`

## ForgeAdvancementProvider.AdvancementGenerator

*interface* `net.minecraftforge.common.data.ForgeAdvancementProvider.AdvancementGenerator`

An interface used to generated modded advancements. This is parallel to
 vanilla's AdvancementSubProvider with access to the ExistingFileHelper.

Enclosing class: ForgeAdvancementProvider

### Methods
- `void generate(HolderLookup.Provider registries,  Consumer<AdvancementHolder> saver,  ExistingFileHelper existingFileHelper)`
  A method used to generate advancements for a mod. Advancements should be
   built via net.minecraftforge.common.extensions.IForgeAdvancementBuilder#save(Consumer, ResourceLocation, ExistingFileHelper).
  - param: registries - a lookup for registries and their objects
  - param: saver - a consumer used to write advancements to a file
  - param: existingFileHelper - a helper used to find whether a file exists
- `default AdvancementSubProvider toSubProvider(ExistingFileHelper existingFileHelper)`
  Creates an AdvancementSubProvider from this generator.
  - param: existingFileHelper - a helper used to find whether a file exists
  - returns: a sub provider wrapping this generator

## ForgeBiomeTagsProvider

*class* `net.minecraftforge.common.data.ForgeBiomeTagsProvider`

### Inherited fields
- from `net.minecraft.data.tags.TagsProvider`: `builders`, `existingFileHelper`, `modId`, `pathProvider`, `registryKey`
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`

### Methods
- `protected void addTags(HolderLookup.Provider lookupProvider)`
- `@SafeVarargs private void tag(ResourceKey<Biome> biome,  TagKey<Biome>... tags)`
- `public String getName()`

### Inherited methods
- from `net.minecraft.data.tags.TagsProvider`: `contentsGetter`, `createContentsProvider`, `getOrCreateRawBuilder`, `getPath`, `run`, `tag`

## ForgeBlockTagsProvider

*class* `net.minecraftforge.common.data.ForgeBlockTagsProvider`

### Inherited fields
- from `net.minecraft.data.tags.TagsProvider`: `builders`, `existingFileHelper`, `modId`, `pathProvider`, `registryKey`
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`

### Methods
- `public void addTags(HolderLookup.Provider p_256380_)`
- `private void addColored(Consumer<Block> consumer,  TagKey<Block> group,  String pattern)`
- `private TagKey<Block> getForgeTag(String name)`
- `public String getName()`

### Inherited methods
- from `net.minecraft.data.tags.IntrinsicHolderTagsProvider`: `tag`
- from `net.minecraft.data.tags.TagsProvider`: `contentsGetter`, `createContentsProvider`, `getOrCreateRawBuilder`, `getPath`, `run`

## ForgeEntityTypeTagsProvider

*class* `net.minecraftforge.common.data.ForgeEntityTypeTagsProvider`

### Inherited fields
- from `net.minecraft.data.tags.TagsProvider`: `builders`, `existingFileHelper`, `modId`, `pathProvider`, `registryKey`
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`

### Methods
- `public void addTags(HolderLookup.Provider lookupProvider)`
- `public String getName()`

### Inherited methods
- from `net.minecraft.data.tags.IntrinsicHolderTagsProvider`: `tag`
- from `net.minecraft.data.tags.TagsProvider`: `contentsGetter`, `createContentsProvider`, `getOrCreateRawBuilder`, `getPath`, `run`

## ForgeFluidTagsProvider

*class* `net.minecraftforge.common.data.ForgeFluidTagsProvider`

### Inherited fields
- from `net.minecraft.data.tags.TagsProvider`: `builders`, `existingFileHelper`, `modId`, `pathProvider`, `registryKey`
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`

### Methods
- `public void addTags(HolderLookup.Provider lookupProvider)`
- `public String getName()`

### Inherited methods
- from `net.minecraft.data.tags.IntrinsicHolderTagsProvider`: `tag`
- from `net.minecraft.data.tags.TagsProvider`: `contentsGetter`, `createContentsProvider`, `getOrCreateRawBuilder`, `getPath`, `run`

## ForgeItemTagsProvider

*class* `net.minecraftforge.common.data.ForgeItemTagsProvider`

### Inherited fields
- from `net.minecraft.data.tags.TagsProvider`: `builders`, `existingFileHelper`, `modId`, `pathProvider`, `registryKey`
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`

### Methods
- `public void addTags(HolderLookup.Provider lookupProvider)`
- `private void addColored(Consumer<TagKey<Item>> consumer,  TagKey<Item> group,  String pattern)`
- `private void copyColored(TagKey<Block> blockGroup,  TagKey<Item> itemGroup)`
- `private TagKey<Block> getForgeBlockTag(String name)`
- `private TagKey<Item> getForgeItemTag(String name)`
- `public String getName()`

### Inherited methods
- from `net.minecraft.data.tags.ItemTagsProvider`: `copy`, `createContentsProvider`
- from `net.minecraft.data.tags.IntrinsicHolderTagsProvider`: `tag`
- from `net.minecraft.data.tags.TagsProvider`: `contentsGetter`, `getOrCreateRawBuilder`, `getPath`, `run`

## ForgeLootTableProvider

*class* `net.minecraftforge.common.data.ForgeLootTableProvider`

Currently used only for replacing shears item to shears_dig tool action

### Fields
- `private static final String POOLS` (= "f_79156_")
- `private static final String ENTRIES` (= "f_79023_")
- `private static final String CONDITIONS` (= "f_79024_")
- `private static final String CHILDREN` (= "f_79428_")
- `private static final String ENTRY_CONDITION` (= "f_79636_")
- `private static final String TERMS` (= "f_285609_")

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`

### Methods
- `protected void validate(Map<ResourceLocation,LootTable> map,  ValidationContext validationcontext)`
- `public List<LootTableProvider.SubProviderEntry> getTables()`
- `private LootTableSubProvider replaceAndFilterChangesOnly(LootTableSubProvider subProvider)`
- `private boolean findAndReplaceInLootTableBuilder(LootTable.Builder builder,  Item from,  ToolAction toolAction)`
- `private boolean findAndReplaceInLootPool(LootPool lootPool,  Item from,  ToolAction toolAction)`
- `private boolean findAndReplaceInParentedLootEntry(CompositeEntryBase entry,  Item from,  ToolAction toolAction)`
- `private boolean findAndReplaceInLootEntry(LootPoolEntryContainer entry,  Item from,  ToolAction toolAction)`
- `private boolean findAndReplaceInComposite(CompositeLootItemCondition alternative,  Item from,  ToolAction toolAction)`
- `private boolean checkMatchTool(MatchTool lootCondition,  Item expected)`

### Inherited methods
- from `net.minecraft.data.loot.LootTableProvider`: `getName`, `run`

## ForgeRecipeProvider

*class* `net.minecraftforge.common.data.ForgeRecipeProvider`

### Fields
- `private final Map<Item,TagKey<Item>> replacements`
- `private final Set<ResourceLocation> excludes`

### Inherited fields
- from `net.minecraft.data.recipes.packs.VanillaRecipeProvider`: `COAL_SMELTABLES`, `COPPER_SMELTABLES`, `DIAMOND_SMELTABLES`, `EMERALD_SMELTABLES`, `GOLD_SMELTABLES`, `IRON_SMELTABLES`, `LAPIS_SMELTABLES`, `REDSTONE_SMELTABLES`
- from `net.minecraft.data.recipes.RecipeProvider`: `advancementPathProvider`, `recipePathProvider`
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`, `LOGGER`

### Methods
- `private void exclude(ItemLike item)`
- `private void exclude(String name)`
- `private void replace(ItemLike item,  TagKey<Item> tag)`
- `protected void buildRecipes(RecipeOutput consumer)`
- `@Nullable private @Nullable FinishedRecipe enhance(FinishedRecipe vanilla)`
- `@Nullable private @Nullable FinishedRecipe enhance(ShapelessRecipeBuilder.Result vanilla)`
- `@Nullable protected @Nullable CompletableFuture<?> saveAdvancement(CachedOutput output,  ResourceLocation advancementId,  com.google.gson.JsonObject advancementJson,  FinishedRecipe finishedRecipe)`
  Description copied from class: RecipeProvider
  Called every time a recipe is saved to also save the advancement JSON if it exists.
  - returns: A completable future that saves the advancement to disk, or null to cancel saving the advancement.
- `protected CompletableFuture<?> buildAdvancement(CachedOutput p_253674_,  AdvancementHolder p_297687_)`
- `@Nullable private @Nullable FinishedRecipe enhance(ShapedRecipeBuilder.Result vanilla)`
- `@Nullable private @Nullable Ingredient enhance(ResourceLocation name,  Ingredient vanilla)`
- `private <T, R> R getField(Class<T> clz,  T inst,  int index)`

### Inherited methods
- from `net.minecraft.data.recipes.packs.VanillaRecipeProvider`: `run`, `smithingTrims`
- from `net.minecraft.data.recipes.RecipeProvider`: `banner`, `bedFromPlanksAndWool`, `buttonBuilder`, `candle`, `carpet`, `chestBoat`, `chiseled`, `chiseledBuilder`, `colorBlockWithDye`, `coloredTerracottaFromTerracottaAndDye`, `concretePowder`, `cookRecipes`, `copySmithingTemplate`, `copySmithingTemplate`, `cut`, `cutBuilder`, `doorBuilder`, `fenceBuilder`, `fenceGateBuilder`, `generateForEnabledBlockFamilies`, `generateRecipes`, `getBaseBlock`, `getBlastingRecipeName`, `getConversionRecipeName`, `getHasName`, `getItemName`, `getName`, `getSimpleRecipeName`, `getSmeltingRecipeName`, `hangingSign`, `has`, `has`, `mosaicBuilder`, `netheriteSmithing`, `nineBlockStorageRecipes`, `nineBlockStorageRecipesRecipesWithCustomUnpacking`, `nineBlockStorageRecipesWithCustomPacking`, `oneToOneConversionRecipe`, `oneToOneConversionRecipe`, `oreBlasting`, `oreSmelting`, `planksFromLog`, `planksFromLogs`, `polished`, `polishedBuilder`, `pressurePlate`, `pressurePlateBuilder`, `signBuilder`, `slab`, `slabBuilder`, `stainedGlassFromGlassAndDye`, `stainedGlassPaneFromGlassPaneAndDye`, `stainedGlassPaneFromStainedGlass`, `stairBuilder`, `stonecutterResultFromBase`, `stonecutterResultFromBase`, `threeByThreePacker`, `threeByThreePacker`, `trapdoorBuilder`, `trimSmithing`, `twoByTwoPacker`, `wall`, `wallBuilder`, `waxRecipes`, `woodenBoat`, `woodFromLogs`

## ForgeSpriteSourceProvider

*class* `net.minecraftforge.common.data.ForgeSpriteSourceProvider`

### Inherited fields
- from `net.minecraftforge.common.data.SpriteSourceProvider`: `BANNER_PATTERNS_ATLAS`, `BEDS_ATLAS`, `BLOCKS_ATLAS`, `CHESTS_ATLAS`, `MOB_EFFECTS_ATLAS`, `PAINTINGS_ATLAS`, `PARTICLES_ATLAS`, `SHIELD_PATTERNS_ATLAS`, `SHULKER_BOXES_ATLAS`, `SIGNS_ATLAS`
- from `net.minecraftforge.common.data.JsonCodecProvider`: `codec`, `conditions`, `directory`, `dynamicOps`, `entries`, `existingFileHelper`, `modid`, `output`, `packType`
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`

### Methods
- `protected void addSources()`

### Inherited methods
- from `net.minecraftforge.common.data.SpriteSourceProvider`: `atlas`, `gather`
- from `net.minecraftforge.common.data.JsonCodecProvider`: `getName`, `run`, `setConditions`

## GlobalLootModifierProvider

*class* `net.minecraftforge.common.data.GlobalLootModifierProvider`

Provider for forge's GlobalLootModifier system. See LootModifier

 This provider only requires implementing start() and calling add(java.lang.String, T) from it.

### Fields
- `private static final com.google.gson.Gson GSON`
- `private final PackOutput output`
- `private final String modid`
- `private final Map<String,com.google.gson.JsonElement> toSerialize`
- `private boolean replace`

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`, `LOGGER`

### Methods
- `protected void replacing()`
  Sets the "replace" key in global_loot_modifiers to true.
- `protected abstract void start()`
  Call add(java.lang.String, T) here, which will pass in the necessary information to write the jsons.
- `public CompletableFuture<?> run(CachedOutput cache)`
- `public <T extends IGlobalLootModifier> void add(String modifier,  T instance)`
  Passes in the data needed to create the file without any extra objects.
  - param: modifier - The name of the modifier, which will be the file name.
  - param: instance - The instance to serialize
- `public String getName()`

## JsonCodecProvider

*class* `net.minecraftforge.common.data.JsonCodecProvider`

Dataprovider for using a Codec to generate jsons.
 Path names for jsons are derived from the given registry folder and each entry's namespaced id, in the format:
 <assets/data>/entryid/registryfolder/entrypath.json

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `protected final PackOutput output`
- `protected final ExistingFileHelper existingFileHelper`
- `protected final String modid`
- `protected final com.mojang.serialization.DynamicOps<com.google.gson.JsonElement> dynamicOps`
- `protected final PackType packType`
- `protected final String directory`
- `protected final com.mojang.serialization.Codec<T> codec`
- `protected final Map<ResourceLocation,T> entries`
- `protected Map<ResourceLocation,ICondition[]> conditions`

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`

### Methods
- `public CompletableFuture<?> run(CachedOutput cache)`
- `protected void gather(BiConsumer<ResourceLocation,T> consumer)`
- `public String getName()`
- `public JsonCodecProvider<T> setConditions(Map<ResourceLocation,ICondition[]> conditions)`
  Applies a condition map to this provider.
   These conditions will be applied to the created JsonElements with the matching names.
   Null or empty arrays will not be written, and if the top-level json type is not JsonObject, attempting to add conditions will error.
  - param: conditions - The name->condition map to apply.

## LanguageProvider

*class* `net.minecraftforge.common.data.LanguageProvider`

### Fields
- `private final Map<String,String> data`
- `private final PackOutput output`
- `private final String modid`
- `private final String locale`

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`, `LOGGER`

### Methods
- `protected abstract void addTranslations()`
- `public CompletableFuture<?> run(CachedOutput cache)`
- `public String getName()`
- `private CompletableFuture<?> save(CachedOutput cache,  Path target)`
- `public void addBlock(Supplier<? extends Block> key,  String name)`
- `public void add(Block key,  String name)`
- `public void addItem(Supplier<? extends Item> key,  String name)`
- `public void add(Item key,  String name)`
- `public void addItemStack(Supplier<ItemStack> key,  String name)`
- `public void add(ItemStack key,  String name)`
- `public void addEnchantment(Supplier<? extends Enchantment> key,  String name)`
- `public void add(Enchantment key,  String name)`
- `public void addEffect(Supplier<? extends MobEffect> key,  String name)`
- `public void add(MobEffect key,  String name)`
- `public void addEntityType(Supplier<? extends EntityType<?>> key,  String name)`
- `public void add(EntityType<?> key,  String name)`
- `public void add(String key,  String value)`

## ParticleDescriptionProvider

*class* `net.minecraftforge.common.data.ParticleDescriptionProvider`

A data provider for ParticleDescriptions.

 To use this provider, extend this class and implement addDescriptions().
 Then, register an instance using DataGenerator.addProvider(boolean, Factory)
 via the GatherDataEvent on the mod event bus.

 A description can be added to a ParticleType which uses a sprite
 or sprite set.

 @Override
 protected void addDescriptions() {
 // Single sprite
 this.sprite(ParticleTypes.DRIPPING_LAVA, new ResourceLocation("drip_hang"));

 // Multiple sprites
 this.spriteSet(ParticleTypes.CLOUD, new ResourceLocation("generic"), 8, true);
 }

 A particle description holds a list of textures used when rendering the
 particle to the screen. All registered particle descriptions are stitched
 together into a texture atlas called TextureAtlas.LOCATION_PARTICLES.
 A ParticleType whose particle uses the texture atlas, typically via
 the ParticleRenderType, can then reference
 the necessary texture during rendering.

 Particles with a particle description must have their particle providers
 attached to a ParticleType as a sprite
 or sprite set
 consumer.

### Fields
- `private final PackOutput.PathProvider particlesPath`
- `@VisibleForTesting protected final ExistingFileHelper fileHelper`
- `@VisibleForTesting protected final Map<ResourceLocation,List<String>> descriptions`

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`, `LOGGER`

### Methods
- `protected abstract void addDescriptions()`
  Registers the particle descriptions generated by sprite(ParticleType, ResourceLocation)
   or one of the sprite set methods.
- `protected void sprite(ParticleType<?> type,  ResourceLocation texture)`
  Creates a new particle description that contains a single texture for the
   associated ParticleType.
  
   Particle types with this description should be attached to a particle provider
   via RegisterParticleProvidersEvent.registerSprite(ParticleType, ParticleProvider.Sprite).
  - param: type - the particle type the textures are applied
 for
  - param: texture - the texture to render for the particle type
  - throws: NullPointerException - if the particle type is not registered
  - throws: IllegalArgumentException - if a texture does not have an associated PNG
 file, or the particle type has already been
 provided
- `protected void spriteSet(ParticleType<?> type,  ResourceLocation baseName,  int numOfTextures,  boolean reverse)`
  Creates a new particle description that contains multiple textures for the
   associated ParticleType. The textures are generated from a common
   name and appended with a number representing the state of the animation.
  
   minecraft:generic_0
   minecraft:generic_1
   minecraft:generic_2
   // ...
  
   Particle types with this description should be attached to a particle provider
   via RegisterParticleProvidersEvent.registerSpriteSet(ParticleType, ParticleEngine.SpriteParticleRegistration).
  - param: type - the particle type the textures are applied
 for
  - param: baseName - the common name of all the textures
  - param: numOfTextures - the number of textures within the set
  - param: reverse - when true, the textures will be
 listed in descending order
  - throws: NullPointerException - if the particle type is not registered
  - throws: IllegalArgumentException - if a texture does not have an associated PNG
 file, or the particle type has already been
 provided
- `protected void spriteSet(ParticleType<?> type,  ResourceLocation texture,  ResourceLocation... textures)`
  Creates a new particle description that contains multiple textures for the
   associated ParticleType. The textures are passed as varargs with
   at least one texture present.
  
   Particle types with this description should be attached to a particle provider
   via RegisterParticleProvidersEvent.registerSpriteSet(ParticleType, ParticleEngine.SpriteParticleRegistration).
  - param: type - the particle type the textures are applied
 for
  - param: texture - the first texture in the description
  - param: textures - a list of subsequent textures to render for
 the particle type
  - throws: NullPointerException - if the particle type is not registered
  - throws: IllegalArgumentException - if a texture does not have an associated PNG
 file, or the particle type has already been
 provided
- `protected void spriteSet(ParticleType<?> type,  Iterable<ResourceLocation> textures)`
  Creates a new particle description that contains multiple textures for the
   associated ParticleType. The textures are passed as an iterable.
  
   Particle types with this description should be attached to a particle provider
   via RegisterParticleProvidersEvent.registerSpriteSet(ParticleType, ParticleEngine.SpriteParticleRegistration).
  - param: type - the particle type the textures are applied
 for
  - param: textures - a list of textures to render for the
 particle type
  - throws: NullPointerException - if the particle type is not registered
  - throws: IllegalArgumentException - if there are no textures provided, a texture
 does not have an associated PNG file, or
 the particle type has already been provided
- `public CompletableFuture<?> run(CachedOutput cache)`
- `public String getName()`

## SoundDefinition

*class* `net.minecraftforge.common.data.SoundDefinition`

Contains all the data to completely define a sound event.

### Fields
- `private final List<SoundDefinition.Sound> sounds`
- `private boolean replace`
- `private String subtitle`

### Methods
- `public static SoundDefinition definition()`
  Creates a new SoundDefinition, which will host a set of
   SoundDefinition.Sounds and the necessary parameters.
- `public SoundDefinition replace(boolean replace)`
  Sets whether this definition should replace any other definition for the
   same sound event previously applied, rather than overwriting it.
  - param: replace - Whether this definition replaces or not.
  - returns: This definition for chaining.
- `public SoundDefinition subtitle(@Nullable  @Nullable String subtitle)`
  Sets the language key for the subtitle that will be displayed whenever this
   sound is being played.
  
   The subtitle is optional and the game will skip displaying it if it
   isn't present.
  - param: subtitle - The subtitle to display, or null to disable.
  - returns: This definition for chaining.
- `public SoundDefinition with(SoundDefinition.Sound sound)`
  Adds the given sound to this sound definition.
  - param: sound - The sound to add.
  - returns: This definition for chaining.
- `public SoundDefinition with(SoundDefinition.Sound... sounds)`
  Adds the given sounds to this sound definition.
  - param: sounds - The sounds to add.
  - returns: This definition for chaining.
- `List<SoundDefinition.Sound> soundList()`
- `com.google.gson.JsonObject serialize()`

## SoundDefinition.Sound

*class* `net.minecraftforge.common.data.SoundDefinition.Sound`

Identifies a specific sound that has to be played in a sound event, along with
 all the necessary parameters.

 If any of the optional parameters (i.e. the ones that aren't required to
 obtain an instance of this class) are unset, their default values will be
 used instead. The list of defaults is available in the text that follows:

 Volume: 1.0F
 Pitch: 1.0F
 Weight: 1
 Stream: false
 Attenuation Distance: 16
 Preload: false

Enclosing class: SoundDefinition

### Fields
- `private static final SoundDefinition.SoundType DEFAULT_TYPE`
- `private static final float DEFAULT_VOLUME` (= 1.0f)
- `private static final float DEFAULT_PITCH` (= 1.0f)
- `private static final int DEFAULT_WEIGHT` (= 1)
- `private static final boolean DEFAULT_STREAM` (= false)
- `private static final int DEFAULT_ATTENUATION_DISTANCE` (= 16)
- `private static final boolean DEFAULT_PRELOAD` (= false)
- `private final ResourceLocation name`
- `private final SoundDefinition.SoundType type`
- `private float volume`
- `private float pitch`
- `private int weight`
- `private boolean stream`
- `private int attenuationDistance`
- `private boolean preload`

### Methods
- `public static SoundDefinition.Sound sound(ResourceLocation name,  SoundDefinition.SoundType type)`
  Creates a new sound with the given name and type.
  - param: name - The name of the sound to create.
  - param: type - The type of sound to create.
- `public SoundDefinition.Sound volume(double volume)`
  Sets the volume of this specific sound.
  
   The volume of a sound represents how loud the sound is when played.
  - param: volume - The volume to set. It must be higher than 0.
  - returns: This sound for chaining.
- `public SoundDefinition.Sound volume(float volume)`
  Sets the volume of this specific sound.
  
   The volume of a sound represents how loud the sound is when played.
  - param: volume - The volume to set. It must be higher than 0.
  - returns: This sound for chaining.
- `public SoundDefinition.Sound pitch(double pitch)`
  Sets the pitch of this specific sound.
  
   The pitch of a sound represents how high or low the sound is
   when played.
  - param: pitch - The pitch to set. It must be higher than 0.
  - returns: This sound for chaining.
- `public SoundDefinition.Sound pitch(float pitch)`
  Sets the pitch of this specific sound.
  
   The pitch of a sound represents how high or low the sound is
   when played.
  - param: pitch - The pitch to set. It must be higher than 0.
  - returns: This sound for chaining.
- `public SoundDefinition.Sound weight(int weight)`
  Sets the weight of this specific sound.
  
   The weight represents how likely it is for this sound to be played when the respective
   event is triggered. This value is ignored when there is only one sound per event.
  - param: weight - The weight to set. It must be higher than 0.
  - returns: This sound for chaining.
- `public SoundDefinition.Sound stream()`
  Sets this sound to a streamed sound.
  
   In this context, streaming refers to reading the file on disk as needed instead of
   loading the whole set in memory. This is useful in case of longer sounds, like records
   and music (usually more than a minute).
  
   This is equivalent to a call to stream(boolean) with a value of true.
  - returns: This sound for chaining
- `public SoundDefinition.Sound stream(boolean stream)`
  Sets whether this sound should be streamed or not.
  
   In this context, streaming refers to reading the file on disk as needed instead of
   loading the whole set in memory. This is useful in case of longer sounds, like records
   and music (usually more than a minute).
  - param: stream - Whether the sound should be streamed or not.
  - returns: This sound for chaining.
- `public SoundDefinition.Sound attenuationDistance(int attenuationDistance)`
  Sets the attenuation distance of the sound.
  
   This represents how far this sound will be heard, in blocks. While the specs don't
   require so, it is suggested to keep this value positive.
  - param: attenuationDistance - The attenuation distance to set.
  - returns: This sound for chaining.
- `public SoundDefinition.Sound preload()`
  Marks this sound as needing to be preloaded.
  
   A preloaded sound identifies a sound that is loaded in memory as soon as the resource
   pack is loaded, without having to wait for the sound to be ready to stream. It is suggested
   to keep this to false, unless you are using it for a highly recurring sound (e.g.
   underwater ambient sounds).
  
   This is equivalent to a call to preload(boolean) with a value of true.
  - returns: This sound for chaining.
- `public SoundDefinition.Sound preload(boolean preload)`
  Sets whether this sound should be preloaded or not.
  
   A preloaded sound identifies a sound that is loaded in memory as soon as the resource
   pack is loaded, without having to wait for the sound to be ready to stream. It is suggested
   to keep this to false, unless you are using it for a highly recurring sound (e.g.
   underwater ambient sounds).
  - param: preload - Whether the sound should be preloaded or not.
  - returns: This sound for chaining.
- `ResourceLocation name()`
- `SoundDefinition.SoundType type()`
- `com.google.gson.JsonElement serialize()`
- `private boolean canBeInShortForm()`
- `private String stripMcPrefix(ResourceLocation name)`

## SoundDefinitionsProvider

*class* `net.minecraftforge.common.data.SoundDefinitionsProvider`

Data provider for the sounds.json file, which identifies sound definitions
 for the various sound events in Minecraft.

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private final PackOutput output`
- `private final String modId`
- `private final ExistingFileHelper helper`
- `private final Map<String,SoundDefinition> sounds`

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`

### Methods
- `public abstract void registerSounds()`
  Registers the sound definitions that should be generated via one of the add methods.
- `public CompletableFuture<?> run(CachedOutput cache)`
- `public String getName()`
- `protected static SoundDefinition definition()`
  Creates a new SoundDefinition, which will host a set of
   SoundDefinition.Sounds and the necessary parameters.
- `protected static SoundDefinition.Sound sound(ResourceLocation name,  SoundDefinition.SoundType type)`
  Creates a new sound with the given name and type.
  - param: name - The name of the sound to create.
  - param: type - The type of sound to create.
- `protected static SoundDefinition.Sound sound(ResourceLocation name)`
  Creates a new sound with the given name and SoundDefinition.SoundType.SOUND as
   sound type.
  - param: name - The name of the sound to create.
- `protected static SoundDefinition.Sound sound(String name,  SoundDefinition.SoundType type)`
  Creates a new sound with the given name and type.
  - param: name - The name of the sound to create.
  - param: type - The type of sound to create.
- `protected static SoundDefinition.Sound sound(String name)`
  Creates a new sound with the given name and SoundDefinition.SoundType.SOUND as
   sound type.
  - param: name - The name of the sound to create.
- `protected void add(Supplier<SoundEvent> soundEvent,  SoundDefinition definition)`
  Adds the entry name associated with the supplied SoundEvent with the given
   SoundDefinition to the list.
  
   This method should be preferred when dealing with a RegistryObject or
   RegistryDelegate.
  - param: soundEvent - A Supplier for the given SoundEvent.
  - param: definition - A SoundDefinition that defines the given sound.
- `protected void add(SoundEvent soundEvent,  SoundDefinition definition)`
  Adds the entry name associated with the given SoundEvent with the
   SoundDefinition to the list.
  
   This method should be preferred when a SoundEvent is already
   available in the method context. If you already have a Supplier for
   it, refer to add(Supplier, SoundDefinition).
  - param: soundEvent - A SoundEvent.
  - param: definition - The SoundDefinition that defines the given event.
- `protected void add(ResourceLocation soundEvent,  SoundDefinition definition)`
  Adds the SoundEvent referenced by the given ResourceLocation with the
   SoundDefinition to the list.
  - param: soundEvent - The ResourceLocation that identifies the event.
  - param: definition - The SoundDefinition that defines the given event.
- `protected void add(String soundEvent,  SoundDefinition definition)`
  Adds the SoundEvent with the specified name along with its SoundDefinition
   to the list.
  
   The given sound event must NOT contain the namespace the name is a part of, since
   the sound definition specification doesn't allow sounds to be defined outside the
   namespace they're in. For this reason, any namespace will automatically be stripped
   from the name.
  - param: soundEvent - The name of the SoundEvent.
  - param: definition - The SoundDefinition that defines the given event.
- `private void addSounds(String soundEvent,  SoundDefinition definition)`
- `private void validate()`
- `private boolean validate(String name,  SoundDefinition def)`
- `private boolean validate(String name,  SoundDefinition.Sound sound)`
- `private boolean validateSound(String soundName,  ResourceLocation name)`
- `private boolean validateEvent(String soundName,  ResourceLocation name)`
- `private CompletableFuture<?> save(CachedOutput cache,  Path targetFile)`
- `private com.google.gson.JsonObject mapToJson(Map<String,SoundDefinition> map)`

## SpriteSourceProvider

*class* `net.minecraftforge.common.data.SpriteSourceProvider`

Data provider for atlas configuration files.

 An atlas configuration is bound to a specific texture atlas such as the minecraft:blocks atlas and
 allows adding additional textures to the atlas by adding SpriteSources to the configuration.
 See SpriteSources for the available sources and the constants in this class for the
 atlases used in vanilla Minecraft

### Fields
- `protected static final ResourceLocation BLOCKS_ATLAS`
- `protected static final ResourceLocation BANNER_PATTERNS_ATLAS`
- `protected static final ResourceLocation BEDS_ATLAS`
- `protected static final ResourceLocation CHESTS_ATLAS`
- `protected static final ResourceLocation SHIELD_PATTERNS_ATLAS`
- `protected static final ResourceLocation SHULKER_BOXES_ATLAS`
- `protected static final ResourceLocation SIGNS_ATLAS`
- `protected static final ResourceLocation MOB_EFFECTS_ATLAS`
- `protected static final ResourceLocation PAINTINGS_ATLAS`
- `protected static final ResourceLocation PARTICLES_ATLAS`
- `private final Map<ResourceLocation,SpriteSourceProvider.SourceList> atlases`

### Inherited fields
- from `net.minecraftforge.common.data.JsonCodecProvider`: `codec`, `conditions`, `directory`, `dynamicOps`, `entries`, `existingFileHelper`, `modid`, `output`, `packType`
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`

### Methods
- `protected final void gather(BiConsumer<ResourceLocation,List<SpriteSource>> consumer)`
- `protected abstract void addSources()`
- `protected final SpriteSourceProvider.SourceList atlas(ResourceLocation atlas)`
  Get or create a SpriteSourceProvider.SourceList for the given atlas
  - param: atlas - The texture atlas the sources should be added to, see constants at the top for the format
 and the vanilla atlases
  - returns: an existing SourceList for the given atlas or a new one if not present yet

### Inherited methods
- from `net.minecraftforge.common.data.JsonCodecProvider`: `getName`, `run`, `setConditions`

## SpriteSourceProvider.SourceList

*class* `net.minecraftforge.common.data.SpriteSourceProvider.SourceList`

Enclosing class: SpriteSourceProvider

### Fields
- `private final List<SpriteSource> sources`

### Methods
- `public SpriteSourceProvider.SourceList addSource(SpriteSource source)`
  Add the given SpriteSource to this atlas configuration
  - param: source - The SpriteSource to be added

## VanillaSoundDefinitionsProvider

*class* `net.minecraftforge.common.data.VanillaSoundDefinitionsProvider`

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`

### Methods
- `public void registerSounds()`
  Description copied from class: SoundDefinitionsProvider
  Registers the sound definitions that should be generated via one of the add methods.

### Inherited methods
- from `net.minecraftforge.common.data.SoundDefinitionsProvider`: `add`, `add`, `add`, `add`, `definition`, `getName`, `run`, `sound`, `sound`, `sound`, `sound`
