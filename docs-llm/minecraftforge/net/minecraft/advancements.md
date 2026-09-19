# net.minecraft.advancements

- [Advancement](#advancement)
- [Advancement.Builder](#advancement.builder)
- [AdvancementList](#advancementlist)
- [AdvancementList.Listener](#advancementlist.listener)
- [AdvancementManager](#advancementmanager)
- [AdvancementProgress](#advancementprogress)
- [AdvancementProgress.Serializer](#advancementprogress.serializer)
- [AdvancementRewards](#advancementrewards)
- [AdvancementRewards.Deserializer](#advancementrewards.deserializer)
- [AdvancementTreeNode](#advancementtreenode)
- [CriteriaTriggers](#criteriatriggers)
- [Criterion](#criterion)
- [CriterionProgress](#criterionprogress)
- [DisplayInfo](#displayinfo)
- [FrameType](#frametype)
- [FunctionManager](#functionmanager)
- [FunctionManager.QueuedCommand](#functionmanager.queuedcommand)
- [ICriterionInstance](#icriterioninstance)
- [ICriterionTrigger](#icriteriontrigger)
- [ICriterionTrigger.Listener](#icriteriontrigger.listener)
- [PlayerAdvancements](#playeradvancements)
## Advancement

*class* `net.minecraft.advancements.Advancement`

### Methods
- `public Advancement.Builder copy()`
- `public Advancement getParent()`
- `public DisplayInfo getDisplay()`
- `public AdvancementRewards getRewards()`
- `public java.lang.String toString()`
- `public java.lang.Iterable<Advancement> getChildren()`
- `public java.util.Map<java.lang.String,Criterion> getCriteria()`
- `public int getRequirementCount()`
- `public void addChild(Advancement advancementIn)`
- `public ResourceLocation getId()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public java.lang.String[][] getRequirements()`
- `public ITextComponent getDisplayText()`

## Advancement.Builder

*class* `net.minecraft.advancements.Advancement.Builder`

Enclosing class: Advancement

### Methods
- `public boolean resolveParent(java.util.function.Function<ResourceLocation,Advancement> lookup)`
- `public Advancement build(ResourceLocation id)`
- `public void writeTo(PacketBuffer buf)`
- `public java.lang.String toString()`
- `public static Advancement.Builder deserialize(JsonObject json,  JsonDeserializationContext context)`
- `public static Advancement.Builder readFrom(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException

## AdvancementList

*class* `net.minecraft.advancements.AdvancementList`

### Methods
- `public void removeAll(java.util.Set<ResourceLocation> ids)`
- `public void loadAdvancements(java.util.Map<ResourceLocation,Advancement.Builder> advancementsIn)`
- `public void clear()`
- `public java.lang.Iterable<Advancement> getRoots()`
- `public java.lang.Iterable<Advancement> getAdvancements()`
- `public Advancement getAdvancement(ResourceLocation id)`
- `public void setListener(AdvancementList.Listener listenerIn)`

## AdvancementList.Listener

*interface* `net.minecraft.advancements.AdvancementList.Listener`

Enclosing class: AdvancementList

### Methods
- `void rootAdvancementAdded(Advancement advancementIn)`
- `void rootAdvancementRemoved(Advancement advancementIn)`
- `void nonRootAdvancementAdded(Advancement advancementIn)`
- `void nonRootAdvancementRemoved(Advancement advancementIn)`
- `void advancementsCleared()`

## AdvancementManager

*class* `net.minecraft.advancements.AdvancementManager`

### Fields
- `public static final Gson GSON`

### Methods
- `public void reload()`
- `public boolean hasErrored()`
- `public Advancement getAdvancement(ResourceLocation id)`
- `public java.lang.Iterable<Advancement> getAdvancements()`

## AdvancementProgress

*class* `net.minecraft.advancements.AdvancementProgress`

All Implemented Interfaces: java.lang.Comparable<AdvancementProgress>

### Methods
- `public void update(java.util.Map<java.lang.String,Criterion> criteriaIn,  java.lang.String[][] requirements)`
- `public boolean isDone()`
- `public boolean hasProgress()`
- `public boolean grantCriterion(java.lang.String criterionIn)`
- `public boolean revokeCriterion(java.lang.String criterionIn)`
- `public java.lang.String toString()`
- `public void serializeToNetwork(PacketBuffer p_192104_1_)`
- `public static AdvancementProgress fromNetwork(PacketBuffer p_192100_0_)`
- `public CriterionProgress getCriterionProgress(java.lang.String criterionIn)`
- `public float getPercent()`
- `public java.lang.String getProgressText()`
- `public java.lang.Iterable<java.lang.String> getRemaningCriteria()`
- `public java.lang.Iterable<java.lang.String> getCompletedCriteria()`
- `public java.util.Date getFirstProgressDate()`
- `public int compareTo(AdvancementProgress p_compareTo_1_)`

## AdvancementProgress.Serializer

*class* `net.minecraft.advancements.AdvancementProgress.Serializer`

Enclosing class: AdvancementProgress

### Methods
- `public JsonElement serialize(AdvancementProgress p_serialize_1_,  java.lang.reflect.Type p_serialize_2_,  JsonSerializationContext p_serialize_3_)`
- `public AdvancementProgress deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException

## AdvancementRewards

*class* `net.minecraft.advancements.AdvancementRewards`

### Fields
- `public static final AdvancementRewards EMPTY`

### Methods
- `public void apply(EntityPlayerMP player)`
- `public java.lang.String toString()`

## AdvancementRewards.Deserializer

*class* `net.minecraft.advancements.AdvancementRewards.Deserializer`

Enclosing class: AdvancementRewards

### Methods
- `public AdvancementRewards deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException

## AdvancementTreeNode

*class* `net.minecraft.advancements.AdvancementTreeNode`

### Methods
- `public static void layout(Advancement root)`

## CriteriaTriggers

*class* `net.minecraft.advancements.CriteriaTriggers`

### Fields
- `public static final ImpossibleTrigger IMPOSSIBLE`
- `public static final KilledTrigger PLAYER_KILLED_ENTITY`
- `public static final KilledTrigger ENTITY_KILLED_PLAYER`
- `public static final EnterBlockTrigger ENTER_BLOCK`
- `public static final InventoryChangeTrigger INVENTORY_CHANGED`
- `public static final RecipeUnlockedTrigger RECIPE_UNLOCKED`
- `public static final PlayerHurtEntityTrigger PLAYER_HURT_ENTITY`
- `public static final EntityHurtPlayerTrigger ENTITY_HURT_PLAYER`
- `public static final EnchantedItemTrigger ENCHANTED_ITEM`
- `public static final BrewedPotionTrigger BREWED_POTION`
- `public static final ConstructBeaconTrigger CONSTRUCT_BEACON`
- `public static final UsedEnderEyeTrigger USED_ENDER_EYE`
- `public static final SummonedEntityTrigger SUMMONED_ENTITY`
- `public static final BredAnimalsTrigger BRED_ANIMALS`
- `public static final PositionTrigger LOCATION`
- `public static final PositionTrigger SLEPT_IN_BED`
- `public static final CuredZombieVillagerTrigger CURED_ZOMBIE_VILLAGER`
- `public static final VillagerTradeTrigger VILLAGER_TRADE`
- `public static final ItemDurabilityTrigger ITEM_DURABILITY_CHANGED`
- `public static final LevitationTrigger LEVITATION`
- `public static final ChangeDimensionTrigger CHANGED_DIMENSION`
- `public static final TickTrigger TICK`
- `public static final TameAnimalTrigger TAME_ANIMAL`
- `public static final PlacedBlockTrigger PLACED_BLOCK`
- `public static final ConsumeItemTrigger CONSUME_ITEM`
- `public static final EffectsChangedTrigger EFFECTS_CHANGED`
- `public static final UsedTotemTrigger USED_TOTEM`
- `public static final NetherTravelTrigger NETHER_TRAVEL`

### Methods
- `public static <T extends ICriterionTrigger> T register(T criterion)`
- `public static <T extends ICriterionInstance> ICriterionTrigger<T> get(ResourceLocation id)`
- `public static java.lang.Iterable<? extends ICriterionTrigger<?>> getAll()`

## Criterion

*class* `net.minecraft.advancements.Criterion`

### Methods
- `public void serializeToNetwork(PacketBuffer p_192140_1_)`
- `public static Criterion criterionFromJson(JsonObject json,  JsonDeserializationContext context)`
- `public static Criterion criterionFromNetwork(PacketBuffer p_192146_0_)`
- `public static java.util.Map<java.lang.String,Criterion> criteriaFromJson(JsonObject json,  JsonDeserializationContext context)`
- `public static java.util.Map<java.lang.String,Criterion> criteriaFromNetwork(PacketBuffer bus)`
- `public static void serializeToNetwork(java.util.Map<java.lang.String,Criterion> criteria,  PacketBuffer buf)`
- `public ICriterionInstance getCriterionInstance()`

## CriterionProgress

*class* `net.minecraft.advancements.CriterionProgress`

### Methods
- `public boolean isObtained()`
- `public void obtain()`
- `public void reset()`
- `public java.util.Date getObtained()`
- `public java.lang.String toString()`
- `public void write(PacketBuffer buf)`
- `public JsonElement serialize()`
- `public static CriterionProgress read(PacketBuffer buf,  AdvancementProgress advancementProgressIn)`
- `public static CriterionProgress fromDateTime(AdvancementProgress advancementProgressIn,  java.lang.String dateTime)`

## DisplayInfo

*class* `net.minecraft.advancements.DisplayInfo`

### Methods
- `public void setPosition(float x,  float y)`
- `public ITextComponent getTitle()`
- `public ITextComponent getDescription()`
- `public ItemStack getIcon()`
- `public ResourceLocation getBackground()`
- `public FrameType getFrame()`
- `public float getX()`
- `public float getY()`
- `public boolean shouldShowToast()`
- `public boolean shouldAnnounceToChat()`
- `public boolean isHidden()`
- `public static DisplayInfo deserialize(JsonObject object,  JsonDeserializationContext context)`
- `public void write(PacketBuffer buf)`
- `public static DisplayInfo read(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException

## FrameType

*enum* `net.minecraft.advancements.FrameType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<FrameType>

### Fields
- `public static final FrameType TASK`
- `public static final FrameType CHALLENGE`
- `public static final FrameType GOAL`

### Methods
- `public static FrameType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (FrameType c : FrameType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static FrameType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public java.lang.String getName()`
- `public static FrameType byName(java.lang.String nameIn)`
- `public int getIcon()`
- `public TextFormatting getFormat()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## FunctionManager

*class* `net.minecraft.advancements.FunctionManager`

All Implemented Interfaces: ITickable

### Methods
- `public FunctionObject getFunction(ResourceLocation id)`
- `public ICommandManager getCommandManager()`
- `public int getMaxCommandChainLength()`
- `public java.util.Map<ResourceLocation,FunctionObject> getFunctions()`
- `public void update()`
- `public int execute(FunctionObject function,  ICommandSender sender)`
- `public void reload()`

## FunctionManager.QueuedCommand

*class* `net.minecraft.advancements.FunctionManager.QueuedCommand`

Enclosing class: FunctionManager

### Methods
- `public void execute(java.util.ArrayDeque<FunctionManager.QueuedCommand> commandQueue,  int maxCommandChainLength)`
- `public java.lang.String toString()`

## ICriterionInstance

*interface* `net.minecraft.advancements.ICriterionInstance`

### Methods
- `ResourceLocation getId()`

## ICriterionTrigger

*interface* `net.minecraft.advancements.ICriterionTrigger`

### Methods
- `ResourceLocation getId()`
- `void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<T> listener)`
- `void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<T> listener)`
- `void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `T deserializeInstance(JsonObject json,  JsonDeserializationContext context)`

## ICriterionTrigger.Listener

*class* `net.minecraft.advancements.ICriterionTrigger.Listener`

Enclosing interface: ICriterionTrigger<T extends ICriterionInstance>

### Methods
- `public T getCriterionInstance()`
- `public void grantCriterion(PlayerAdvancements playerAdvancementsIn)`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`

## PlayerAdvancements

*class* `net.minecraft.advancements.PlayerAdvancements`

### Methods
- `public void setPlayer(EntityPlayerMP player)`
- `public void dispose()`
- `public void reload()`
- `public void save()`
- `public boolean grantCriterion(Advancement p_192750_1_,  java.lang.String p_192750_2_)`
- `public boolean revokeCriterion(Advancement p_192744_1_,  java.lang.String p_192744_2_)`
- `public void flushDirty(EntityPlayerMP p_192741_1_)`
- `public void setSelectedTab(Advancement p_194220_1_)`
- `public AdvancementProgress getProgress(Advancement advancementIn)`
