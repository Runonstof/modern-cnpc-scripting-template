# net.minecraft.advancements

- [Advancement](#advancement)
- [Advancement.Builder](#advancement.builder)
- [AdvancementHolder](#advancementholder)
- [AdvancementNode](#advancementnode)
- [AdvancementProgress](#advancementprogress)
- [AdvancementRequirements](#advancementrequirements)
- [AdvancementRequirements.Strategy](#advancementrequirements.strategy)
- [AdvancementRewards](#advancementrewards)
- [AdvancementRewards.Builder](#advancementrewards.builder)
- [AdvancementTree](#advancementtree)
- [AdvancementTree.Listener](#advancementtree.listener)
- [Class FrameType](#class-frametype)
- [CriteriaTriggers](#criteriatriggers)
- [Criterion](#criterion)
- [CriterionProgress](#criterionprogress)
- [CriterionTrigger](#criteriontrigger)
- [CriterionTrigger.Listener](#criteriontrigger.listener)
- [CriterionTriggerInstance](#criteriontriggerinstance)
- [DisplayInfo](#displayinfo)
- [TreeNodePosition](#treenodeposition)
## Advancement

*record* `net.minecraft.advancements.Advancement`

### Fields
- `private final Optional<ResourceLocation> parent`
  The field for the parent record component.
- `private final Optional<DisplayInfo> display`
  The field for the display record component.
- `private final AdvancementRewards rewards`
  The field for the rewards record component.
- `private final Map<String,Criterion<?>> criteria`
  The field for the criteria record component.
- `private final AdvancementRequirements requirements`
  The field for the requirements record component.
- `private final boolean sendsTelemetryEvent`
  The field for the sendsTelemetryEvent record component.
- `private final Optional<Component> name`
  The field for the name record component.

### Methods
- `private static Component decorateName(DisplayInfo p_300038_)`
- `public static Component name(AdvancementHolder p_297556_)`
- `public com.google.gson.JsonObject serializeToJson()`
- `@Deprecated public static Advancement fromJson(com.google.gson.JsonObject p_300691_,  DeserializationContext p_300053_)` (deprecated)
- `public static Advancement fromJson(com.google.gson.JsonObject p_300691_,  DeserializationContext p_300053_,  ICondition.IContext context)`
- `public void write(FriendlyByteBuf p_299393_)`
- `public static Advancement read(FriendlyByteBuf p_300670_)`
- `public boolean isRoot()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public Optional<ResourceLocation> parent()`
  Returns the value of the parent record component.
  - returns: the value of the parent record component
- `public Optional<DisplayInfo> display()`
  Returns the value of the display record component.
  - returns: the value of the display record component
- `public AdvancementRewards rewards()`
  Returns the value of the rewards record component.
  - returns: the value of the rewards record component
- `public Map<String,Criterion<?>> criteria()`
  Returns the value of the criteria record component.
  - returns: the value of the criteria record component
- `public AdvancementRequirements requirements()`
  Returns the value of the requirements record component.
  - returns: the value of the requirements record component
- `public boolean sendsTelemetryEvent()`
  Returns the value of the sendsTelemetryEvent record component.
  - returns: the value of the sendsTelemetryEvent record component
- `public Optional<Component> name()`
  Returns the value of the name record component.
  - returns: the value of the name record component

## Advancement.Builder

*class* `net.minecraft.advancements.Advancement.Builder`

Enclosing class: Advancement

### Fields
- `private Optional<ResourceLocation> parent`
- `private Optional<DisplayInfo> display`
- `private AdvancementRewards rewards`
- `private final com.google.common.collect.ImmutableMap.Builder<String,Criterion<?>> criteria`
- `private Optional<AdvancementRequirements> requirements`
- `private AdvancementRequirements.Strategy requirementsStrategy`
- `private boolean sendsTelemetryEvent`

### Methods
- `public static Advancement.Builder advancement()`
- `public static Advancement.Builder recipeAdvancement()`
- `public Advancement.Builder parent(AdvancementHolder p_300513_)`
- `@Deprecated(forRemoval=true) public Advancement.Builder parent(ResourceLocation p_138397_)` (deprecated)
- `public Advancement.Builder display(ItemStack p_138363_,  Component p_138364_,  Component p_138365_,  @Nullable  ResourceLocation p_138366_,  FrameType p_138367_,  boolean p_138368_,  boolean p_138369_,  boolean p_138370_)`
- `public Advancement.Builder display(ItemLike p_138372_,  Component p_138373_,  Component p_138374_,  @Nullable  ResourceLocation p_138375_,  FrameType p_138376_,  boolean p_138377_,  boolean p_138378_,  boolean p_138379_)`
- `public Advancement.Builder display(DisplayInfo p_138359_)`
- `public Advancement.Builder rewards(AdvancementRewards.Builder p_138355_)`
- `public Advancement.Builder rewards(AdvancementRewards p_138357_)`
- `public Advancement.Builder addCriterion(String p_138384_,  Criterion<?> p_138385_)`
- `public Advancement.Builder requirements(AdvancementRequirements.Strategy p_298091_)`
- `public Advancement.Builder requirements(AdvancementRequirements p_300756_)`
- `public Advancement.Builder sendsTelemetryEvent()`
- `public AdvancementHolder build(ResourceLocation p_138404_)`
- `public AdvancementHolder save(Consumer<AdvancementHolder> p_138390_,  String p_138391_)`
- `public AdvancementHolder save(Consumer<AdvancementHolder> p_138390_,  ResourceLocation id)`

## AdvancementHolder

*record* `net.minecraft.advancements.AdvancementHolder`

### Fields
- `private final ResourceLocation id`
  The field for the id record component.
- `private final Advancement value`
  The field for the value record component.

### Methods
- `public void write(FriendlyByteBuf p_299066_)`
- `public static AdvancementHolder read(FriendlyByteBuf p_299642_)`
- `public boolean equals(Object p_298719_)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: p_298719_ - the object with which to compare
  - returns: true if this object is the same as the p_298719_ argument; false otherwise.
- `public int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public ResourceLocation id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public Advancement value()`
  Returns the value of the value record component.
  - returns: the value of the value record component

## AdvancementNode

*class* `net.minecraft.advancements.AdvancementNode`

### Fields
- `private final AdvancementHolder holder`
- `@Nullable private final AdvancementNode parent`
- `private final Set<AdvancementNode> children`

### Methods
- `public Advancement advancement()`
- `public AdvancementHolder holder()`
- `@Nullable public AdvancementNode parent()`
- `public AdvancementNode root()`
- `public static AdvancementNode getRoot(AdvancementNode p_300357_)`
- `public Iterable<AdvancementNode> children()`
- `public void addChild(AdvancementNode p_298204_)`
- `public boolean equals(Object p_297253_)`
- `public int hashCode()`
- `public String toString()`

## AdvancementProgress

*class* `net.minecraft.advancements.AdvancementProgress`

### Fields
- `private static final DateTimeFormatter OBTAINED_TIME_FORMAT`
- `private static final com.mojang.serialization.Codec<Instant> OBTAINED_TIME_CODEC`
- `private static final com.mojang.serialization.Codec<Map<String,CriterionProgress>> CRITERIA_CODEC`
- `public static final com.mojang.serialization.Codec<AdvancementProgress> CODEC`
- `private final Map<String,CriterionProgress> criteria`
- `private AdvancementRequirements requirements`

### Methods
- `public void update(AdvancementRequirements p_300626_)`
- `public boolean isDone()`
- `public boolean hasProgress()`
- `public boolean grantProgress(String p_8197_)`
- `public boolean revokeProgress(String p_8210_)`
- `public String toString()`
- `public void serializeToNetwork(FriendlyByteBuf p_8205_)`
- `public static AdvancementProgress fromNetwork(FriendlyByteBuf p_8212_)`
- `@Nullable public CriterionProgress getCriterion(String p_8215_)`
- `private boolean isCriterionDone(String p_301316_)`
- `public float getPercent()`
- `@Nullable public Component getProgressText()`
- `private int countCompletedRequirements()`
- `public Iterable<String> getRemainingCriteria()`
- `public Iterable<String> getCompletedCriteria()`
- `@Nullable public Instant getFirstProgressDate()`
- `public int compareTo(AdvancementProgress p_8195_)`

## AdvancementRequirements

*record* `net.minecraft.advancements.AdvancementRequirements`

### Fields
- `private final String[][] requirements`
  The field for the requirements record component.
- `public static final AdvancementRequirements EMPTY`

### Methods
- `private static String[][] read(FriendlyByteBuf p_298812_)`
- `public void write(FriendlyByteBuf p_299546_)`
- `public static AdvancementRequirements allOf(Collection<String> p_300431_)`
- `public static AdvancementRequirements anyOf(Collection<String> p_297776_)`
- `public int size()`
- `public boolean test(Predicate<String> p_297982_)`
- `public int count(Predicate<String> p_300443_)`
- `private static boolean anyMatch(String[] p_299779_,  Predicate<String> p_299134_)`
- `public static AdvancementRequirements fromJson(com.google.gson.JsonArray p_297416_,  Set<String> p_298134_)`
- `public com.google.gson.JsonArray toJson()`
- `public boolean isEmpty()`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public Set<String> names()`
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public String[][] requirements()`
  Returns the value of the requirements record component.
  - returns: the value of the requirements record component

## AdvancementRequirements.Strategy

*interface* `net.minecraft.advancements.AdvancementRequirements.Strategy`

Enclosing class: AdvancementRequirements

### Fields
- `static final AdvancementRequirements.Strategy AND`
- `static final AdvancementRequirements.Strategy OR`

### Methods
- `AdvancementRequirements create(Collection<String> p_297497_)`

## AdvancementRewards

*class* `net.minecraft.advancements.AdvancementRewards`

### Fields
- `public static final AdvancementRewards EMPTY`
- `private final int experience`
- `private final ResourceLocation[] loot`
- `private final ResourceLocation[] recipes`
- `private final CommandFunction.CacheableFunction function`

### Methods
- `public ResourceLocation[] getRecipes()`
- `public void grant(ServerPlayer p_9990_)`
- `public String toString()`
- `public com.google.gson.JsonElement serializeToJson()`
- `public static AdvancementRewards deserialize(com.google.gson.JsonObject p_9992_)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException

## AdvancementRewards.Builder

*class* `net.minecraft.advancements.AdvancementRewards.Builder`

Enclosing class: AdvancementRewards

### Fields
- `private int experience`
- `private final List<ResourceLocation> loot`
- `private final List<ResourceLocation> recipes`
- `@Nullable private ResourceLocation function`

### Methods
- `public static AdvancementRewards.Builder experience(int p_10006_)`
- `public AdvancementRewards.Builder addExperience(int p_10008_)`
- `public static AdvancementRewards.Builder loot(ResourceLocation p_144823_)`
- `public AdvancementRewards.Builder addLootTable(ResourceLocation p_144825_)`
- `public static AdvancementRewards.Builder recipe(ResourceLocation p_10010_)`
- `public AdvancementRewards.Builder addRecipe(ResourceLocation p_10012_)`
- `public static AdvancementRewards.Builder function(ResourceLocation p_144827_)`
- `public AdvancementRewards.Builder runs(ResourceLocation p_144829_)`
- `public AdvancementRewards build()`

## AdvancementTree

*class* `net.minecraft.advancements.AdvancementTree`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Map<ResourceLocation,AdvancementNode> nodes`
- `private final Set<AdvancementNode> roots`
- `private final Set<AdvancementNode> tasks`
- `@Nullable private AdvancementTree.Listener listener`

### Methods
- `private void remove(AdvancementNode p_299357_)`
- `public void remove(Set<ResourceLocation> p_297924_)`
- `public void addAll(Collection<AdvancementHolder> p_299574_)`
- `private boolean tryInsert(AdvancementHolder p_300067_)`
- `public void clear()`
- `public Iterable<AdvancementNode> roots()`
- `public Collection<AdvancementNode> nodes()`
- `@Nullable public AdvancementNode get(ResourceLocation p_301065_)`
- `@Nullable public AdvancementNode get(AdvancementHolder p_299974_)`
- `public void setListener(@Nullable  AdvancementTree.Listener p_299884_)`

## AdvancementTree.Listener

*interface* `net.minecraft.advancements.AdvancementTree.Listener`

Enclosing class: AdvancementTree

### Methods
- `void onAddAdvancementRoot(AdvancementNode p_300084_)`
- `void onRemoveAdvancementRoot(AdvancementNode p_297518_)`
- `void onAddAdvancementTask(AdvancementNode p_297601_)`
- `void onRemoveAdvancementTask(AdvancementNode p_300155_)`
- `void onAdvancementsCleared()`

## Class FrameType

*enum* `net.minecraft.advancements.Class FrameType`

### Fields
- `private final String name`
- `private final ChatFormatting chatColor`
- `private final Component displayName`

### Methods
- `public static FrameType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static FrameType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getName()`
- `public static FrameType byName(String p_15550_)`
- `public ChatFormatting getChatColor()`
- `public Component getDisplayName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## CriteriaTriggers

*class* `net.minecraft.advancements.CriteriaTriggers`

### Fields
- `private static final com.google.common.collect.BiMap<ResourceLocation,CriterionTrigger<?>> CRITERIA`
- `public static final ImpossibleTrigger IMPOSSIBLE`
- `public static final KilledTrigger PLAYER_KILLED_ENTITY`
- `public static final KilledTrigger ENTITY_KILLED_PLAYER`
- `public static final EnterBlockTrigger ENTER_BLOCK`
- `public static final InventoryChangeTrigger INVENTORY_CHANGED`
- `public static final RecipeUnlockedTrigger RECIPE_UNLOCKED`
- `public static final PlayerHurtEntityTrigger PLAYER_HURT_ENTITY`
- `public static final EntityHurtPlayerTrigger ENTITY_HURT_PLAYER`
- `public static final EnchantedItemTrigger ENCHANTED_ITEM`
- `public static final FilledBucketTrigger FILLED_BUCKET`
- `public static final BrewedPotionTrigger BREWED_POTION`
- `public static final ConstructBeaconTrigger CONSTRUCT_BEACON`
- `public static final UsedEnderEyeTrigger USED_ENDER_EYE`
- `public static final SummonedEntityTrigger SUMMONED_ENTITY`
- `public static final BredAnimalsTrigger BRED_ANIMALS`
- `public static final PlayerTrigger LOCATION`
- `public static final PlayerTrigger SLEPT_IN_BED`
- `public static final CuredZombieVillagerTrigger CURED_ZOMBIE_VILLAGER`
- `public static final TradeTrigger TRADE`
- `public static final ItemDurabilityTrigger ITEM_DURABILITY_CHANGED`
- `public static final LevitationTrigger LEVITATION`
- `public static final ChangeDimensionTrigger CHANGED_DIMENSION`
- `public static final PlayerTrigger TICK`
- `public static final TameAnimalTrigger TAME_ANIMAL`
- `public static final ItemUsedOnLocationTrigger PLACED_BLOCK`
- `public static final ConsumeItemTrigger CONSUME_ITEM`
- `public static final EffectsChangedTrigger EFFECTS_CHANGED`
- `public static final UsedTotemTrigger USED_TOTEM`
- `public static final DistanceTrigger NETHER_TRAVEL`
- `public static final FishingRodHookedTrigger FISHING_ROD_HOOKED`
- `public static final ChanneledLightningTrigger CHANNELED_LIGHTNING`
- `public static final ShotCrossbowTrigger SHOT_CROSSBOW`
- `public static final KilledByCrossbowTrigger KILLED_BY_CROSSBOW`
- `public static final PlayerTrigger RAID_WIN`
- `public static final PlayerTrigger BAD_OMEN`
- `public static final SlideDownBlockTrigger HONEY_BLOCK_SLIDE`
- `public static final BeeNestDestroyedTrigger BEE_NEST_DESTROYED`
- `public static final TargetBlockTrigger TARGET_BLOCK_HIT`
- `public static final ItemUsedOnLocationTrigger ITEM_USED_ON_BLOCK`
- `public static final LootTableTrigger GENERATE_LOOT`
- `public static final PickedUpItemTrigger THROWN_ITEM_PICKED_UP_BY_ENTITY`
- `public static final PickedUpItemTrigger THROWN_ITEM_PICKED_UP_BY_PLAYER`
- `public static final PlayerInteractTrigger PLAYER_INTERACTED_WITH_ENTITY`
- `public static final StartRidingTrigger START_RIDING_TRIGGER`
- `public static final LightningStrikeTrigger LIGHTNING_STRIKE`
- `public static final UsingItemTrigger USING_ITEM`
- `public static final DistanceTrigger FALL_FROM_HEIGHT`
- `public static final DistanceTrigger RIDE_ENTITY_IN_LAVA_TRIGGER`
- `public static final KilledTrigger KILL_MOB_NEAR_SCULK_CATALYST`
- `public static final ItemUsedOnLocationTrigger ALLAY_DROP_ITEM_ON_BLOCK`
- `public static final PlayerTrigger AVOID_VIBRATION`
- `public static final RecipeCraftedTrigger RECIPE_CRAFTED`

### Methods
- `public static <T extends CriterionTrigger<?>> T register(String p_298570_,  T p_10596_)`
- `@Nullable public static <T extends CriterionTriggerInstance> CriterionTrigger<T> getCriterion(ResourceLocation p_10598_)`
- `@Nullable public static ResourceLocation getId(CriterionTrigger<?> p_299030_)`
- `public static Iterable<? extends CriterionTrigger<?>> all()`

## Criterion

*record* `net.minecraft.advancements.Criterion`

### Fields
- `private final CriterionTrigger<T extends CriterionTriggerInstance> trigger`
  The field for the trigger record component.
- `private final T extends CriterionTriggerInstance triggerInstance`
  The field for the triggerInstance record component.

### Methods
- `public static Criterion<?> criterionFromJson(com.google.gson.JsonObject p_11418_,  DeserializationContext p_11419_)`
- `private static <T extends CriterionTriggerInstance> Criterion<T> criterionFromJson(com.google.gson.JsonObject p_298246_,  DeserializationContext p_297334_,  CriterionTrigger<T> p_300883_)`
- `public static Map<String,Criterion<?>> criteriaFromJson(com.google.gson.JsonObject p_11427_,  DeserializationContext p_11428_)`
- `public com.google.gson.JsonElement serializeToJson()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public CriterionTrigger<T> trigger()`
  Returns the value of the trigger record component.
  - returns: the value of the trigger record component
- `public T triggerInstance()`
  Returns the value of the triggerInstance record component.
  - returns: the value of the triggerInstance record component

## CriterionProgress

*class* `net.minecraft.advancements.CriterionProgress`

### Fields
- `@Nullable private Instant obtained`

### Methods
- `public boolean isDone()`
- `public void grant()`
- `public void revoke()`
- `@Nullable public Instant getObtained()`
- `public String toString()`
- `public void serializeToNetwork(FriendlyByteBuf p_12915_)`
- `public static CriterionProgress fromNetwork(FriendlyByteBuf p_12918_)`

## CriterionTrigger

*interface* `net.minecraft.advancements.CriterionTrigger`

### Methods
- `void addPlayerListener(PlayerAdvancements p_13674_,  CriterionTrigger.Listener<T> p_13675_)`
- `void removePlayerListener(PlayerAdvancements p_13676_,  CriterionTrigger.Listener<T> p_13677_)`
- `void removePlayerListeners(PlayerAdvancements p_13673_)`
- `T createInstance(com.google.gson.JsonObject p_13671_,  DeserializationContext p_13672_)`
- `default Criterion<T> createCriterion(T p_299598_)`

## CriterionTrigger.Listener

*record* `net.minecraft.advancements.CriterionTrigger.Listener`

Enclosing interface: CriterionTrigger<T extends CriterionTriggerInstance>

### Fields
- `private final T extends CriterionTriggerInstance trigger`
  The field for the trigger record component.
- `private final AdvancementHolder advancement`
  The field for the advancement record component.
- `private final String criterion`
  The field for the criterion record component.

### Methods
- `public void run(PlayerAdvancements p_13687_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public T trigger()`
  Returns the value of the trigger record component.
  - returns: the value of the trigger record component
- `public AdvancementHolder advancement()`
  Returns the value of the advancement record component.
  - returns: the value of the advancement record component
- `public String criterion()`
  Returns the value of the criterion record component.
  - returns: the value of the criterion record component

## CriterionTriggerInstance

*interface* `net.minecraft.advancements.CriterionTriggerInstance`

### Methods
- `com.google.gson.JsonObject serializeToJson()`

## DisplayInfo

*class* `net.minecraft.advancements.DisplayInfo`

### Fields
- `private final Component title`
- `private final Component description`
- `private final ItemStack icon`
- `@Nullable private final ResourceLocation background`
- `private final FrameType frame`
- `private final boolean showToast`
- `private final boolean announceChat`
- `private final boolean hidden`
- `private float x`
- `private float y`

### Methods
- `public void setLocation(float p_14979_,  float p_14980_)`
- `public Component getTitle()`
- `public Component getDescription()`
- `public ItemStack getIcon()`
- `@Nullable public ResourceLocation getBackground()`
- `public FrameType getFrame()`
- `public float getX()`
- `public float getY()`
- `public boolean shouldShowToast()`
- `public boolean shouldAnnounceChat()`
- `public boolean isHidden()`
- `public static DisplayInfo fromJson(com.google.gson.JsonObject p_14982_)`
- `private static ItemStack getIcon(com.google.gson.JsonObject p_14987_)`
- `public void serializeToNetwork(FriendlyByteBuf p_14984_)`
- `public static DisplayInfo fromNetwork(FriendlyByteBuf p_14989_)`
- `public com.google.gson.JsonElement serializeToJson()`
- `private com.google.gson.JsonObject serializeIcon()`

## TreeNodePosition

*class* `net.minecraft.advancements.TreeNodePosition`

### Fields
- `private final AdvancementNode node`
- `@Nullable private final TreeNodePosition parent`
- `@Nullable private final TreeNodePosition previousSibling`
- `private final int childIndex`
- `private final List<TreeNodePosition> children`
- `private TreeNodePosition ancestor`
- `@Nullable private TreeNodePosition thread`
- `private int x`
- `private float y`
- `private float mod`
- `private float change`
- `private float shift`

### Methods
- `@Nullable private TreeNodePosition addChild(AdvancementNode p_298340_,  @Nullable  TreeNodePosition p_16591_)`
- `private void firstWalk()`
- `private float secondWalk(float p_16576_,  int p_16577_,  float p_16578_)`
- `private void thirdWalk(float p_16574_)`
- `private void executeShifts()`
- `@Nullable private TreeNodePosition previousOrThread()`
- `@Nullable private TreeNodePosition nextOrThread()`
- `private TreeNodePosition apportion(TreeNodePosition p_16580_)`
- `private void moveSubtree(TreeNodePosition p_16582_,  float p_16583_)`
- `private TreeNodePosition getAncestor(TreeNodePosition p_16585_,  TreeNodePosition p_16586_)`
- `private void finalizePosition()`
- `public static void run(AdvancementNode p_299150_)`
