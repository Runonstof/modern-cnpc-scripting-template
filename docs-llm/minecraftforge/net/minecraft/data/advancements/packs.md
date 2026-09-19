# net.minecraft.data.advancements.packs

- [VanillaAdvancementProvider](#vanillaadvancementprovider)
- [VanillaAdventureAdvancements](#vanillaadventureadvancements)
- [VanillaHusbandryAdvancements](#vanillahusbandryadvancements)
- [VanillaNetherAdvancements](#vanillanetheradvancements)
- [VanillaStoryAdvancements](#vanillastoryadvancements)
- [VanillaTheEndAdvancements](#vanillatheendadvancements)
## VanillaAdvancementProvider

*class* `net.minecraft.data.advancements.packs.VanillaAdvancementProvider`

### Methods
- `public static AdvancementProvider create(PackOutput p_255890_,  CompletableFuture<HolderLookup.Provider> p_255777_)`

## VanillaAdventureAdvancements

*class* `net.minecraft.data.advancements.packs.VanillaAdventureAdvancements`

### Fields
- `private static final int DISTANCE_FROM_BOTTOM_TO_TOP` (= 384)
- `private static final int Y_COORDINATE_AT_TOP` (= 320)
- `private static final int Y_COORDINATE_AT_BOTTOM` (= -64)
- `private static final int BEDROCK_THICKNESS` (= 5)
- `private static final EntityType<?>[] MOBS_TO_KILL`

### Methods
- `private static Criterion<LightningStrikeTrigger.TriggerInstance> fireCountAndBystander(MinMaxBounds.Ints p_252298_,  Optional<EntityPredicate> p_300450_)`
- `private static Criterion<UsingItemTrigger.TriggerInstance> lookAtThroughItem(EntityType<?> p_249703_,  Item p_250746_)`
- `public void generate(HolderLookup.Provider p_255887_,  Consumer<AdvancementHolder> p_256428_)`
- `private static Criterion<ItemUsedOnLocationTrigger.TriggerInstance> placedBlockReadByComparator(Block p_286401_)`
- `private static Criterion<ItemUsedOnLocationTrigger.TriggerInstance> placedComparatorReadingBlock(Block p_286250_)`
- `private static Advancement.Builder smithingWithStyle(Advancement.Builder p_285368_)`
- `private static Advancement.Builder craftingANewLook(Advancement.Builder p_285062_)`
- `private static Advancement.Builder respectingTheRemnantsCriterions(Advancement.Builder p_285170_)`
- `protected static void createAdventuringTime(Consumer<AdvancementHolder> p_275645_,  AdvancementHolder p_298014_,  MultiNoiseBiomeSourceParameterList.Preset p_275211_)`
- `private static Advancement.Builder addMobsToKill(Advancement.Builder p_248814_)`
- `protected static Advancement.Builder addBiomes(Advancement.Builder p_249250_,  List<ResourceKey<Biome>> p_251338_)`

## VanillaHusbandryAdvancements

*class* `net.minecraft.data.advancements.packs.VanillaHusbandryAdvancements`

### Fields
- `public static final List<EntityType<?>> BREEDABLE_ANIMALS`
- `public static final List<EntityType<?>> INDIRECTLY_BREEDABLE_ANIMALS`
- `private static final Item[] FISH`
- `private static final Item[] FISH_BUCKETS`
- `private static final Item[] EDIBLE_ITEMS`
- `private static final Item[] WAX_SCRAPING_TOOLS`

### Methods
- `public void generate(HolderLookup.Provider p_255680_,  Consumer<AdvancementHolder> p_251389_)`
- `public static AdvancementHolder createBreedAllAnimalsAdvancement(AdvancementHolder p_301269_,  Consumer<AdvancementHolder> p_266923_,  Stream<EntityType<?>> p_266961_,  Stream<EntityType<?>> p_266751_)`
- `private static Advancement.Builder addLeashedFrogVariants(Advancement.Builder p_249739_)`
- `private static Advancement.Builder addFood(Advancement.Builder p_248532_)`
- `private static Advancement.Builder addBreedable(Advancement.Builder p_266978_,  Stream<EntityType<?>> p_267147_,  Stream<EntityType<?>> p_267091_)`
- `private static Advancement.Builder addFishBuckets(Advancement.Builder p_249285_)`
- `private static Advancement.Builder addFish(Advancement.Builder p_248725_)`
- `private static Advancement.Builder addCatVariants(Advancement.Builder p_249232_)`

## VanillaNetherAdvancements

*class* `net.minecraft.data.advancements.packs.VanillaNetherAdvancements`

### Fields
- `private static final ContextAwarePredicate DISTRACT_PIGLIN_PLAYER_ARMOR_PREDICATE`

### Methods
- `public void generate(HolderLookup.Provider p_256338_,  Consumer<AdvancementHolder> p_249760_)`

## VanillaStoryAdvancements

*class* `net.minecraft.data.advancements.packs.VanillaStoryAdvancements`

### Methods
- `public void generate(HolderLookup.Provider p_256574_,  Consumer<AdvancementHolder> p_248554_)`

## VanillaTheEndAdvancements

*class* `net.minecraft.data.advancements.packs.VanillaTheEndAdvancements`

### Methods
- `public void generate(HolderLookup.Provider p_256214_,  Consumer<AdvancementHolder> p_250851_)`
